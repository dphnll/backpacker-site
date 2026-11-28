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

Updated with Manana's comments and the founder's decisions of 27 November 2026. Sights appear as photo cards inside the day's Excursion events; each card opens About the place.

1. Batumi — arrival, rest and an optional walk: Old Batumi, Europe Square, Piazza, Batumi Boulevard (length depends on arrival time).
2. Adjara, Guria and Kutaisi — Makhuntseti Waterfall and Queen Tamar’s Bridge; Maka Tedoradze at ChkhaValley with the November mandarin harvest; Shekvetili; Sarishvili family winery; Kutaisi historic centre and White Bridge. In November the harvest comes first and may replace Sarishvili; the order of the other stops is still to be set.
3. Samegrelo and Imereti — Khatia Jakhua at Family Winery Argvani; Martvili Canyon or Martvili Monastery (Chkondidi), depending on the weather; Okatse Canyon and Prometheus Cave, both in the programme, with their split between Days 3 and 4 still to be checked; suggested Sisters / Three Sisters dinner.
4. Imereti → Tbilisi — Simonica / Chkheidze Wines in Meore Obcha; Ubisi Monastery on the road. Gelati is not part of this edition.
5. Tbilisi + Mtskheta — Metekhi, Abanotubani and Leghvtakhevi; Svetitskhoveli and Jvari; a proposed Exponati visit.
6. Tbilisi — Dry Bridge Market, free time and departure logistics to confirm.

Racha, Lechkhumi, Miranda, Khvanchkara and Tariel Lomtadze are not part of this base route. The July–August highland idea is deferred editorially and is not a third tour screen.

## Files

| File | Purpose |
|---|---|
| `data.js` | Tours, six-day route, places, host profiles, links and open questions in EN/KA/RU |
| `i18n.js` | Interface copy and shared terms in EN/KA/RU |
| `index.html`, `styles.css`, `app.js` | Static structure, visual system and interactions |
| `hero-regions.js` | Pre-generated Natural Earth region shapes for the hero map |
| `assets/hosts/` | Founder-provided preview assets; see `ASSET_LEDGER.md` |
| `assets/places/` | Sight photos from Wikimedia Commons with recorded licences; see `ASSET_LEDGER.md` |
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

A sight is a place with `sight: true`, a one-line `summary` for its photo card, a 60–100-word `description`, site-level `coord`, a local `photo` and a `photoCredit` (`author`, `license`, `licenseUrl`, Commons `source`, optional `cropped`). An Excursion lists its sights in `sights`; `sightNote` adds one short line above the cards and `sightChoice: true` marks alternatives such as the weather-dependent Martvili choice.

## Maps and integrations

- All map coordinates are city/village-level approximations, not venue addresses.
- The route and host/place dialogs continue to work when map tiles are unavailable.
- UVAMO wine links appear only for validated public tasting URLs; none are supplied in this draft.
- `west.clavelo.url` links to the existing Clavelo sample trip. The public share was verified without sign-in against the updated six-day, 15-event programme with the budget hidden.
- Footer links to WIWI Association and UVAMO, plus the Datum Space authorship credit, remain intact.

## Tests

```bash
node tests/data-check.mjs

# With the local server running and Playwright available:
node tests/navigation.mjs http://127.0.0.1:4300/
node tests/smoke.mjs http://127.0.0.1:4300/
node tests/i18n.mjs http://127.0.0.1:4300/ artifacts/screenshots
```

`data-check.mjs` enforces the six-day route, required new stops, complete EN/KA/RU content, secure links and local assets. It also rejects stale Racha–Lechkhumi names and checks that the Western route has a canonical Clavelo share URL.

The Georgian title and copy remain working translations until native review by Manana or WIWI.
