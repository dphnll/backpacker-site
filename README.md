# WIWI Tours — prototype v0.3

A standalone, static prototype of a future `tours.wiwi.ge` for founder and WIWI partner review
(Manana, Ketino) ahead of the Bordeaux presentation on 3 December 2026.
Three languages: **English** (default), **Georgian** and **Russian**.

It is **not** connected to Clavelo, UVAMO!, Supabase or any live system.

## Run it

```bash
cd wiwi-tours
python3 -m http.server 4300 --bind 127.0.0.1
# open http://127.0.0.1:4300/
```

Any static server works. Nothing to install or build: plain HTML, CSS and JavaScript.
Leaflet 1.9.4 (BSD-2) and the Georgian Noto fonts (SIL OFL 1.1) are bundled in `vendor/`, so only the
map background needs internet.

### Links

| URL | Shows |
|---|---|
| `/` | English, Western Georgia route |
| `/?lang=ka` · `/?lang=ru` | Georgian · Russian |
| `/?tour=west&lang=ka` | a tour in a language |
| `/?tour=east&lang=ru` | the Kakheti tour once it has days; until then the page opens the published route and shows Kakheti as "in development" |

The EN / KA / RU switch in the header changes the language in place: the selected tour, open days,
selected activity, map view and the reader's position on the page stay as they were, and the URL is
updated so the link can be shared.

## Files

| File | What it is |
|---|---|
| `data.js` | **All content**: tours (each with days, highlights, open questions), shared places and people. Every visitor-facing text is written once as `{ en, ka, ru }`. |
| `i18n.js` | Interface text in three languages, plus shared terms: `topic.*`, `flag.*`, `region.*`. |
| `index.html`, `styles.css`, `app.js` | Page, design and behaviour. No per-language pages or files. |
| `vendor/leaflet/`, `vendor/fonts/` | Map library; Noto Sans/Serif Georgian (Georgian subset only, loaded only for Georgian text). |
| `tests/data-check.mjs` | Checks data and translations after editing — no browser needed. |
| `tests/smoke.mjs`, `tests/i18n.mjs` | Browser checks (Playwright + Chromium). |
| `VERIFICATION.md` | What was tested for v0.3 and the results. |

## Editing content

The programme is a working draft and will keep changing. Edit `data.js`, then run
`node tests/data-check.mjs`. No code changes are needed for content, a new activity or a new tour.

### One route, three languages

There is one set of tours, days, activities, people and places. IDs, times, coordinates and links
between them exist once; only the texts carry three versions, side by side:

```js
{
  id: "d3-tvishi",                 // once
  time: "10:30–12:30",             // once — digits are not translated
  type: "wine",
  place: "tvishi",                 // link to places.tvishi
  people: ["miranda"],             // link to people.miranda
  topics: ["wine", "meet-winemaker"],          // shared terms from i18n.js
  flags: ["cook", { en: "…", ka: "…", ru: "…" }], // shared term or one-off text
  title:   { en: "Miranda's winery in Tvishi", ka: "მირანდას მარანი ტვიშში", ru: "Винодельня Миранды в Твиши" },
  summary: { en: "…", ka: "…", ru: "…" },
}
```

- **Plain strings** are only for things that are never translated: clock times, brand names
  (`"ChkhaValley Winery"`), URLs. A worded time ("Evening") is `{ en, ka, ru }`.
- **Shared terms** in `i18n.js` avoid translating the same words thirty times: `topic.*` (Wine, Food…),
  `flag.*` ("Hotel to confirm"…), `region.*` (Adjara, Racha…). Use the key; add a new key to all three
  dictionaries if needed.
- **Proper names** are written in each script, not translated: Maka Tedoradze / მაკა თედორაძე /
  Мака Тедорадзе. Brand names stay as they are.
- `data-check.mjs` fails if any text lacks a language, if a plain English string sits in a
  translatable field, if Georgian or Russian text contains stray Latin words, or if a term key is
  missing in a dictionary. A new activity therefore cannot go live in English only.
- Georgian copy was written for this prototype and should be read by a native speaker (Manana or
  Ketino) before publication.

### Tours, days, activities

- **Tours.** Each entry in `tours` carries its own `days`, `highlights` and `openQuestions`.
  A tour with no `days` shows as a concept card ("Itinerary not published yet") and its open questions.
  **Adding the second tour** = filling `days` of the `east` tour, texts as `{ en, ka, ru }`, plus any new
  places and people. Its card then gets "Explore day by day", and the route, map, stops and hosts switch
  to it. This is covered by a test.
- **Status** on every activity and person: `draft` (as in Manana's draft), `to-confirm`, `placeholder`,
  `confirmed`. Unmarked cards are drafts; everything else carries a visible label. Nothing is `confirmed` yet.
- `flags` — "to confirm" notes on a card. `seasonal` — a seasonal option. A day with
  `review: "<question id>"` shows the "section under review" banner.
- **People**: `story` and `photo` stay `null` until the person supplies and approves them.
  Do not add photographs of real people without consent.
- **Places**: `coord: [lat, lng]` — all current ones are approximate and the page says so.
  `coord: null` hides the map action for that place.
- **Wine links**: `links: { uvamoWine, uvamoSet }`. Only complete public UVAMO! URLs of the form
  `https://<host>/tasting/<snapshotId>/wine/<index>` and `https://<host>/tasting/<snapshotId>` are shown.
  All are `null` now, so no wine buttons appear.

## Tests

```bash
node tests/data-check.mjs
# with the server running (PLAYWRIGHT_CHROMIUM may point to a Chromium binary):
node tests/smoke.mjs http://127.0.0.1:4300/
node tests/i18n.mjs  http://127.0.0.1:4300/ [screenshot-dir]
```

- `smoke.mjs` — the v0.2 acceptance list: tour cards and statuses, days and activities, dialogs
  (Escape, focus return), activity → map, place → map, pin → activity, full route, wine links only for
  valid URLs, a second tour added by data only, 320 / 390 / 1440 px, map without tiles or library.
- `i18n.mjs` — EN, KA, RU × 1440 / 390 / 320 px: document language, both tour cards, the unfinished
  Eastern tour, no untranslated words (all days open, dialogs, map popup, aria labels), Georgian fonts
  loaded, dialogs and map in each language, switching keeps tour / days / selection / map / position,
  deep links.

## Sources

- **UVAMO × WIWI spreadsheet** (Itinerary, Concept & copy, Website fields) — editorial source.
- **Meeting of 9 November 2026** (protocol and transcript) — used for open questions only.
- `WIWI_Tours_Prototype_2026-11-10.html` — the earlier wireframe: UX reference and approximate coordinates.
