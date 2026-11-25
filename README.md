# WIWI Tours — preview v0.4

Static partner-review preview for WIWI Tours. The Western Georgia journey reflects the route agreed with Manana on 25 November 2026; the separate Eastern Georgia / Kakheti journey remains explicitly in development.

This is not a booking product or confirmed travel inventory. Hotels, roads, exact timing, host availability, restaurants, flights and prices are not presented as confirmed.

## Run locally

```bash
python -m http.server 4300 --bind 127.0.0.1
# http://127.0.0.1:4300/?tour=west&lang=en
```

There is no build step, framework, CMS, database or API. The implementation is plain HTML, CSS and JavaScript with bundled Leaflet and fonts.

## Routes

| URL | Result |
|---|---|
| `/` | Home with Western and Eastern journey cards |
| `/?lang=ka` · `/?lang=ru` | Georgian · Russian home |
| `/?tour=west` | Active six-day Western Georgia working route |
| `/?tour=west&lang=ka` | Western route in Georgian |
| `/?tour=east&lang=ru` | Home with Eastern Georgia marked in development |

The language switch keeps the selected tour, open days, selected activity, map position and reader position.

## Current Western route

1. Batumi — arrival, rest, optional easy walk.
2. Adjara → Guria → Kutaisi — Maka Tedoradze at ChkhaValley; Sarishvili family winery; the October–November mandarin version replaces Sarishvili and goes directly to Kutaisi.
3. Samegrelo → Kutaisi — Khatia Jakhua at Family Winery Argvani; one possible nearby sight; suggested Sisters / Three Sisters dinner.
4. Imereti → Tbilisi — Simonica in Meore Obcha with the Nini / Nino public-name question kept visible.
5. Tbilisi + Mtskheta — cultural time and a proposed Exponati visit with host/operator still pending.
6. Tbilisi — free time and departure logistics to confirm.

Racha, Lechkhumi, Miranda, Khvanchkara and Tariel Lomtadze are not part of this base route. The July–August highland idea is deferred editorially and is not a third tour screen.

## Files

| File | Purpose |
|---|---|
| `data.js` | Tours, six-day route, places, host profiles, links and open questions in EN/KA/RU |
| `i18n.js` | Interface copy and shared terms in EN/KA/RU |
| `index.html`, `styles.css`, `app.js` | Static structure, visual system and interactions |
| `hero-regions.js` | Pre-generated Natural Earth region shapes for the hero map |
| `assets/hosts/` | Founder-provided preview assets; see `ASSET_LEDGER.md` |
| `tests/` | Content, browser, locale and navigation checks |
| `VERIFICATION.md` | Latest test record |

## Profile model

Profiles reuse the existing `people` and `places` objects and dialog. A participating winery may include:

```js
{
  name: { en: "…", ka: "…", ru: "…" },
  business: { en: "…", ka: "…", ru: "…" },
  location: { en: "…", ka: "…", ru: "…" },
  wines: { en: "…", ka: "…", ru: "…" },
  story: { en: "…", ka: "…", ru: "…" },
  photo: "./assets/hosts/portrait.jpg", // or null
  logo: "./assets/hosts/logo.jpg",      // or null
  gallery: [{ kind: "wine", src: "…", alt: { en: "…", ka: "…", ru: "…" } }],
  links: { website: "https://…", instagram: "https://…", facebook: "https://…", wiwi: "https://…" },
}
```

Missing imagery and channels stay visibly pending. Do not add generic stock images, fabricated portraits or guessed URLs.

## Maps and integrations

- All map coordinates are city/village-level approximations, not venue addresses.
- The route and host/place dialogs continue to work when map tiles are unavailable.
- UVAMO wine links appear only for validated public tasting URLs; none are supplied in this draft.
- `west.clavelo.url` is deliberately `null`. The previous public share contains the superseded Racha–Lechkhumi programme and must not be shown until the owner updates and republishes that same demo trip.
- Footer links to WIWI Association and UVAMO, plus the Datum Space authorship credit, remain intact.

## Tests

```bash
node tests/data-check.mjs

# With the local server running and Playwright available:
node tests/navigation.mjs http://127.0.0.1:4300/
node tests/smoke.mjs http://127.0.0.1:4300/
node tests/i18n.mjs http://127.0.0.1:4300/ artifacts/screenshots
```

`data-check.mjs` enforces the six-day route, required new stops, complete EN/KA/RU content, secure profile links and local assets. It also rejects the stale Racha–Lechkhumi names in the active Western route and rejects a non-null Clavelo URL until synchronization.

The Georgian title and copy remain working translations until native review by Manana or WIWI.
