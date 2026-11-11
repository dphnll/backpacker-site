# WIWI Tours — prototype v0.1

A standalone, static prototype of a future `tours.wiwi.ge` for founder and WIWI partner review
(Manana, Ketino) ahead of the Bordeaux presentation on 3 December 2026.

It is **not** connected to Clavelo, UVAMO!, Supabase or any live system, and is not published anywhere.

## Run it

```bash
cd wiwi-tours
python3 -m http.server 4300 --bind 127.0.0.1
# open http://127.0.0.1:4300/
```

Any static server works. Opening `index.html` directly from disk also works for everything except,
possibly, the map background (OpenStreetMap tiles want a normal web origin).

Nothing to install or build: plain HTML, CSS and JavaScript. Leaflet 1.9.4 is bundled in
`vendor/leaflet/` (BSD-2 licence), so the map works without a CDN; only the tile background
needs internet.

## Files

| File | What it is |
|---|---|
| `data.js` | **All content**: tours (each with its days, highlights and open questions), shared places and people, partner roles. The file to edit. |
| `i18n.js` | Interface text (English) and the slot for a French version. |
| `index.html`, `styles.css`, `app.js` | Page, design and behaviour. |
| `vendor/leaflet/` | Map library, local copy. |
| `tests/data-check.mjs` | Checks `data.js` after editing (`node tests/data-check.mjs`). |
| `tests/smoke.mjs` | Browser acceptance checks (needs Playwright + Chromium). |

## Editing content

The programme is a working draft and will keep changing — edit `data.js`, then run
`node tests/data-check.mjs`. No code changes are needed for content.

- **Tours.** Each entry in `tours` carries its own `days`, `highlights` and `openQuestions`.
  A tour with no `days` shows as a concept card ("Itinerary not published yet") and its open questions.
  **Adding the second tour** = filling `days` of the `east` tour (and adding any new places/people).
  Its card then gets "Explore day by day", and the route, map, stops and hosts switch to it
  (`?tour=east` links straight to it). This is covered by a test.
- **Trip → Day → Activity → Person / Place / Wine.** Activities point to places and people by id
  (`place: "tvishi"`, `people: ["miranda"]`), so a place used by several activities is written once.
- **Status** on every activity and person: `draft` (as in Manana's draft), `to-confirm`,
  `placeholder`, `confirmed`. Unmarked cards on the page are drafts; everything else carries a visible label.
  Nothing is marked `confirmed` yet.
- `flags` — short "to confirm" notes on a card. `seasonal` — a seasonal option (green note).
  A day with `review: "<question id>"` shows the "section under review" banner.
- **People**: `story` and `photo` stay `null` until the person supplies and approves them. The page then
  shows them; until then it says so. Do not add photographs of real people without consent.
- **Places**: `coord: [lat, lng]` — all current ones are approximate (town/area level) and the page says so.
  `coord: null` hides the map action for that place.
- **Wine links**: `links: { uvamoWine, uvamoSet }` on an activity. Only complete public UVAMO! URLs of the
  form `https://<host>/tasting/<snapshotId>/wine/<index>` and `https://<host>/tasting/<snapshotId>` are shown;
  anything else is silently dropped. All are `null` now, so no wine buttons appear.
- **French**: fill `WIWI_I18N.fr` (interface) and `WIWI_CONTENT_I18N.fr` (content, keyed like
  `"activities.d2-chkhavalley.title"`), then open `?lang=fr`. The language switch appears by itself.

Run `node tests/data-check.mjs` after any edit.

## Tests

```bash
node tests/data-check.mjs
# with the server running:
PLAYWRIGHT_CHROMIUM=/path/to/chrome node tests/smoke.mjs http://127.0.0.1:4300/
```

`smoke.mjs` covers the acceptance list: two tour cards and statuses; days and activities; person and place
dialogs (Escape, focus return); activity → map, place → map, pin → activity (day opens), full route;
wine links only for valid URLs; 320 / 390 / 1440 px without horizontal scroll; map without tiles and
without the map library.

## Sources

- **UVAMO × WIWI spreadsheet** (Itinerary, Concept & copy, Website fields) — the editorial source for days,
  times, hosts, wine and food themes, seasons and site rules.
- **Meeting of 9 November 2026** (protocol and transcript) — used for the open questions only. Nothing
  discussed there is presented as decided; names heard only in the auto-transcript stay in `source` notes.
- `WIWI_Tours_Prototype_2026-11-10.html` — the earlier wireframe: UX reference and approximate coordinates.
