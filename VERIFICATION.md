# WIWI Tours v0.4 — verification

Date: 25 November 2026. Tested from a local static server in installed Chrome through Playwright. Map tiles were deliberately blocked during the automated suites so the route remains usable when the tile network is unavailable.

## Acceptance result

- Tour 1 is the six-day Batumi → Western Georgia → Tbilisi route agreed with Manana on 25 November. Racha, Lechkhumi, Miranda, Lomtadze and Khvanchkara are absent from the active route.
- The outdated Clavelo share link is not rendered. It can return only after the external itinerary has been synchronized.
- Winery profiles expose every supplied real asset and every verified official link directly on the card. Missing portraits, logos and channels remain visibly pending; nothing is fabricated.
- The route opens with all days collapsed. An expanded day is one outer card with an internal vertical timeline; events have no independent border, radius, shadow or panel background.
- Header, footer and former dark-green interface accents use the WIWI wine palette.
- EN, KA and RU preserve the tour, open days, selected stop, map state and navigation.

| Suite | Result |
|---|---|
| `node tests/data-check.mjs` | **PASS** — 2 tours, 6 days, 15 activities, 9 places, 5 people; 145 keys × 3 languages |
| `node tests/smoke.mjs` | **37 / 37 passed** |
| `node tests/navigation.mjs` | **24 / 24 passed** |
| `node tests/i18n.mjs` | **54 / 54 passed** — EN / KA / RU × 1440 / 390 / 320 px |
| `node --check app.js` | **PASS** |
| `git diff --check` | **PASS** |

## Visual evidence

The screenshot suite writes full pages, dialogs, maps and a focused expanded Day 2 into `artifacts/screenshots/`. The nine focused acceptance captures are:

- `en-desktop-day2.png`, `en-390-day2.png`, `en-320-day2.png`
- `ka-desktop-day2.png`, `ka-390-day2.png`, `ka-320-day2.png`
- `ru-desktop-day2.png`, `ru-390-day2.png`, `ru-320-day2.png`

The focused captures were visually reviewed after the automated checks. Sticky global navigation is temporarily unstuck only while those tall element screenshots are stitched; the live interface keeps its normal sticky behavior.

## Known test boundaries

- Not tested on physical phones, Safari or Firefox.
- Live OpenStreetMap tiles and third-party destinations are not part of the deterministic browser suite.
- Source and publication-right gaps are recorded per winery in `ASSET_LEDGER.md`.
