# WIWI Tours — prototype v0.3.1

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
Leaflet 1.9.4 (BSD-2), the Inter typeface and Noto Sans Georgian (both SIL OFL 1.1) are bundled in `vendor/`, so only the
map background needs internet.

### Links

| URL | Shows |
|---|---|
| `/` | Home: hero and the two tour cards (English) |
| `/?lang=ka` · `/?lang=ru` | Home in Georgian · Russian |
| `/?tour=west` | Tour page: the Western Georgia route day by day |
| `/?tour=west&lang=ka` | a tour in a language |
| `/?tour=east&lang=ru` | the Kakheti tour page once it has days; until then the home page, with Kakheti marked "in development" |

The EN / KA / RU switch in the header changes the language in place: the selected tour, open days,
selected activity, map view and the reader's position on the page stay as they were, and the URL is
updated so the link can be shared.

## Files

| File | What it is |
|---|---|
| `data.js` | **All content**: tours (each with days and open questions), shared places and people. Every visitor-facing text is written once as `{ en, ka, ru }`. |
| `i18n.js` | Interface text in three languages, plus shared terms: `topic.*`, `flag.*`, `region.*`. |
| `index.html`, `styles.css`, `app.js` | Page, design and behaviour. No per-language pages or files. |
| `vendor/leaflet/`, `vendor/fonts/` | Map library; Inter (Latin, Cyrillic) for all text and Noto Sans Georgian for Georgian, which Inter does not cover. Each file loads only when its characters are on the page. |
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

- **Pages.** The home page shows the hero and the tour cards; the day-by-day route opens only from a
  tour card (its own URL, `?tour=<id>`, with "← All journeys" and browser Back to return).
- **Tours.** Each entry in `tours` carries its own `days` and `openQuestions`.
  A tour with no `days` shows as a concept card ("Itinerary not published yet") only.
  `openQuestions` are working notes for WIWI and are not listed on the site; a day with
  `review: "<id>"` shows that question as its "section under review" banner.
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
- **Wine**: every activity with a `wine` text gets a **See wine** chip (the WINE tile opens it too).
  It opens a wine card. With `links.uvamoWine` set to a complete public UVAMO! URL
  (`https://<host>/tasting/<snapshotId>/wine/<index>`), the card shows that UVAMO! wine page inside it
  plus "This wine in UVAMO!"; `links.uvamoSet` (`https://<host>/tasting/<snapshotId>`) adds the full set.
  Without a URL — the case today — the card shows only what the draft says (grape and style, winery,
  host, region, day) and states that the UVAMO! card will appear once WIWI shares the link. No wine
  names, vintages or notes are invented. If UVAMO! refuses to be shown inside another site, the
  "This wine in UVAMO!" button still opens it.
- **Hero map**: `assets/hero-map.svg` (Natural Earth 1:50m outlines, public domain) with pins from the
  published tour. Each pin is clickable: it opens the tour page at that stop (day open, activity
  selected, interactive map on the place). Places with `heroLabel: true` (or `"left"`) are always named;
  the others show their name on hover.
- **Type**: Inter for all text; Georgian falls back to Noto Sans Georgian (Inter has no Georgian).

## Tests

```bash
node tests/data-check.mjs
# with the server running (PLAYWRIGHT_CHROMIUM may point to a Chromium binary):
node tests/smoke.mjs http://127.0.0.1:4300/
node tests/i18n.mjs  http://127.0.0.1:4300/ [screenshot-dir]
node tests/navigation.mjs http://127.0.0.1:4300/
```

- `navigation.mjs` — from an open Journey (deep link and tour card), EN/KA/RU, desktop and phone:
  the header and footer logos open the home page at the top, `tour` leaves the URL, `lang` stays,
  browser Back returns to the Journey. The logos are plain links (a normal page load), not
  intercepted by script.

- `smoke.mjs` — the acceptance list: tour cards and statuses, home vs tour page (card, back link,
  browser Back/Forward), See wine and the wine card, days and activities, dialogs
  (Escape, focus return), activity → map, place → map, pin → activity, full route, wine links only for
  valid URLs, a second tour added by data only, 320 / 390 / 1440 px, map without tiles or library.
- `i18n.mjs` — EN, KA, RU × 1440 / 390 / 320 px: document language, both tour cards, the unfinished
  Eastern tour, no untranslated words (all days open, dialogs, map popup, aria labels), Georgian fonts
  loaded, dialogs and map in each language, switching keeps tour / days / selection / map / position,
  deep links.

## Sources

- **UVAMO × WIWI spreadsheet** (Itinerary, Concept & copy, Website fields) — editorial source.
- **Meeting of 9 November 2026** (protocol and transcript) — used for the working open questions only.
- `WIWI_Tours_Prototype_2026-11-10.html` — the earlier wireframe: UX reference and approximate coordinates.
