"""One-off build step: Natural Earth admin-1 regions → hero-regions.js.

    python3 tools/make-hero-regions.py <geojson-places>/data/regions

Source: Natural Earth 1:10m Admin-1 (public domain), as redistributed by the npm package
`geojson-places` (ISC), one GeoJSON file per region (GE-AJ.json, …). Only the regions that
contain a stop of a published tour are written. Projection and bounds match
assets/hero-map.svg (plain lon/lat scaling, 1000 × 587). Nothing is computed at run time.

Stops are assigned to regions by point-in-polygon on the source geometry. A stop whose
approximate coordinate falls just outside every region (e.g. a coastal point) goes to the
nearest region within MAX_SNAP_KM, and the script says so.
"""
import json
import math
import os
import re
import sys

SRC = sys.argv[1]
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
B = {"west": 39.6, "east": 47.0, "south": 40.9, "north": 44.1}
W, H = 1000, 587
MAX_SNAP_KM = 6
# ISO-like file code → key of `region.*` in i18n.js
REGIONS = {
    "GE-AJ": "adjara",
    "GE-GU": "guria",
    "GE-IM": "imereti",
    "GE-RK": "racha-lechkhumi-kvemo-svaneti",
    "GE-MM": "mtskheta-mtianeti",
    "GE-TB": "tbilisi",
    "GE-SZ": "samegrelo-zemo-svaneti",
    "GE-SD": "shida-kartli",
    "GE-KK": "kvemo-kartli",
    "GE-KA": "kakheti",
    "GE-SJ": "samtskhe-javakheti",
}

# Stops: read coordinates from data.js (the only source of truth for places).
data = open(os.path.join(HERE, "data.js"), encoding="utf8").read()
places = {}
for m in re.finditer(r'\n    "?([a-z-]+)"?: \{\n(?:      [^\n]*\n)*?      coord: \[([\d.]+), ([\d.]+)\]', data):
    places[m.group(1)] = (float(m.group(2)), float(m.group(3)))


def px(lon, lat):
    return ((lon - B["west"]) / (B["east"] - B["west"]) * W, (B["north"] - lat) / (B["north"] - B["south"]) * H)


def polys(geom):
    return [geom["coordinates"]] if geom["type"] == "Polygon" else geom["coordinates"]


def in_ring(x, y, ring):
    res = False
    for i in range(len(ring)):
        x1, y1 = ring[i]
        x2, y2 = ring[i - 1]
        if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1:
            res = not res
    return res


def inside(lon, lat, geom):
    return any(in_ring(lon, lat, p[0]) and not any(in_ring(lon, lat, h) for h in p[1:]) for p in polys(geom))


def seg_dist(px_, py_, ax, ay, bx, by):
    dx, dy = bx - ax, by - ay
    t = 0 if dx == dy == 0 else max(0, min(1, ((px_ - ax) * dx + (py_ - ay) * dy) / (dx * dx + dy * dy)))
    return math.hypot(px_ - ax - t * dx, py_ - ay - t * dy)


def km_to_region(lon, lat, geom):
    k = math.cos(math.radians(lat))
    best = 1e9
    for p in polys(geom):
        for ring in p:
            for i in range(len(ring)):
                (x1, y1), (x2, y2) = ring[i - 1], ring[i]
                best = min(best, seg_dist(lon * k, lat, x1 * k, y1, x2 * k, y2))
    return best * 111.2


def simplify(pts, tol):  # Douglas–Peucker
    if len(pts) < 3:
        return pts
    a, b = pts[0], pts[-1]
    idx, dmax = 0, 0
    for i in range(1, len(pts) - 1):
        d = seg_dist(*pts[i], *a, *b)
        if d > dmax:
            idx, dmax = i, d
    if dmax <= tol:
        return [a, b]
    return simplify(pts[: idx + 1], tol)[:-1] + simplify(pts[idx:], tol)


def path(geom):
    out = []
    for p in polys(geom):
        for ring in p:
            pts = simplify([px(lon, lat) for lon, lat in ring], 0.6)
            if len(pts) > 2:
                out.append("M" + "L".join(f"{x:.1f},{y:.1f}" for x, y in pts) + "Z")
    return "".join(out)


def label_point(geom, avoid):
    """Interior point far from the edges and from the pins (grid search, build time only)."""
    rings = [[px(lon, lat) for lon, lat in ring] for p in polys(geom) for ring in p]
    outer = [[px(lon, lat) for lon, lat in p[0]] for p in polys(geom)]
    xs = [x for r in outer for x, _ in r]
    ys = [y for r in outer for _, y in r]
    best, best_pt = -1, None
    step = 3
    for gx in range(int(min(xs)), int(max(xs)) + 1, step):
        for gy in range(int(min(ys)), int(max(ys)) + 1, step):
            if not any(in_ring(gx, gy, r) for r in outer):
                continue
            edge = min(seg_dist(gx, gy, *r[i - 1], *r[i]) for r in rings for i in range(len(r)))
            pin = min([math.hypot(gx - ax, gy - ay) for ax, ay in avoid] or [1e9])
            score = min(edge, pin * 0.7)
            if score > best:
                best, best_pt = score, (gx, gy)
    return best_pt


regions = {}
for code, key in REGIONS.items():
    f = os.path.join(SRC, f"{code}.json")
    regions[key] = {"code": code, "geom": json.load(open(f, encoding="utf8"))["geometry"], "places": []}

for pid, (lat, lon) in places.items():
    hit = [k for k, r in regions.items() if inside(lon, lat, r["geom"])]
    if hit:
        regions[hit[0]]["places"].append(pid)
        continue
    dist, key = min((km_to_region(lon, lat, r["geom"]), k) for k, r in regions.items())
    if dist > MAX_SNAP_KM:
        sys.exit(f"{pid}: {dist:.1f} km from the nearest region — check its coordinate")
    print(f"note: {pid} is {dist:.1f} km outside the outline; assigned to the nearest region, {key}")
    regions[key]["places"].append(pid)

all_pins = [px(lon, lat) for lat, lon in places.values()]


def label_outside(geom):
    """Name goes just above or just below the region, whichever is farther from every pin."""
    pts = [px(lon, lat) for p in polys(geom) for lon, lat in p[0]]
    xs, ys = [x for x, _ in pts], [y for _, y in pts]
    cx = (min(xs) + max(xs)) / 2
    options = [(cx, min(ys) - 16), (cx, max(ys) + 16)]
    return max(options, key=lambda o: min(math.hypot(o[0] - ax, o[1] - ay) for ax, ay in all_pins))


out = []
for key, r in regions.items():
    if not r["places"]:
        continue
    lx, ly = label_outside(r["geom"])
    out.append({"id": key, "code": r["code"], "places": sorted(r["places"]), "label": [round(lx / W * 100, 2), round(ly / H * 100, 2)], "d": path(r["geom"])})
    print(f"{key:32s} {r['code']}  places: {', '.join(sorted(r['places']))}")

js = (
    "/* Generated by tools/make-hero-regions.py — do not edit by hand.\n"
    " * Region outlines: Natural Earth 1:10m Admin-1 (public domain), via the npm package\n"
    " * geojson-places (ISC). Drawn for the bounds of assets/hero-map.svg (1000 × 587).\n"
    " * Only regions with a stop of a published tour; `places` are ids from data.js. */\n"
    "window.WIWI_HERO_REGIONS = " + json.dumps(out, ensure_ascii=False) + ";\n"
)
open(os.path.join(HERE, "hero-regions.js"), "w", encoding="utf8").write(js)
print(f"hero-regions.js: {len(out)} regions, {len(js) / 1024:.1f} KB")
