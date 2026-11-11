# WIWI Tours v0.3 — verification

Date: 11 November 2026. Local static server, Chromium (Playwright 1.56), map tiles blocked in every
run on purpose (the page must work without them). Not tested: Safari, Firefox, real phones, live map tiles.

## Results

| Suite | Result |
|---|---|
| `node tests/data-check.mjs` — data, links and translations | OK: 2 tours, 6 days, 31 activities, 12 places, 5 people; 119 interface keys × 3 languages |
| `node tests/smoke.mjs` — v0.2 acceptance list, English | **25 / 25 passed** |
| `node tests/i18n.mjs` — EN / KA / RU × 1440, 390, 320 px | **45 / 45 passed** |

What `i18n.mjs` covers in each language and width:
- `<html lang>` is `en`, `ka` or `ru`; the active EN/KA/RU button is marked;
- both tour cards in that language; Eastern Georgia shown as "In development / მზადდება / Готовится",
  with no itinerary and its open question;
- with every day open: no English words left on KA and RU pages, including aria labels, dialogs and the
  map popup (brands, the Leaflet/OpenStreetMap credit and Manana's quoted English title are allowed);
- no horizontal scroll, also with every day open;
- Georgian: Noto Sans Georgian and Noto Serif Georgian actually loaded;
- person and place dialogs, "Show on map" from the place dialog, the popup and zoom buttons in that
  language, popup → activity;
- language switching EN → KA → RU → EN at 1440 and 390 px keeps `?tour=west`, the open days, the selected
  activity and its position on screen (within 60 px); on a phone the map view and map position survive;
- deep links `?tour=east&lang=ka` and an unknown `lang` (falls back to English).

Issues found and fixed during verification:
- after switching to Georgian the selected card jumped ~450 px: the Georgian fonts load after the switch
  and re-flow the page — the page now re-aligns once they are in, unless the reader is scrolling;
- "UNESCO" in Latin inside the Georgian text — now იუნესკო.

## Full output
```
$ node tests/data-check.mjs
data.js OK: 2 tours, 6 days, 31 activities, 12 places, 5 people; i18n.js OK: 119 keys × 3 languages (en, ka, ru)
exit 0

$ node tests/smoke.mjs
PASS  1. two tour cards with honest statuses
PASS  2. Western Georgia by day and activity
PASS  3a. person modal opens, Escape closes, focus returns
PASS  3b. uncertain host is labelled, not presented as confirmed
PASS  3c. place modal → Show on map focuses the place
PASS  4a. activity → Show on map
PASS  4b. Show full route returns to overview
PASS  4c. pin → activity expands the right day
PASS  highlight opens its activity
PASS  tour card opens its route; open questions grouped by tour
PASS  5. no wine links without real URLs
PASS  7. tentative, seasonal and review markers visible
PASS  map works without tiles (tiles blocked)
PASS  no script errors (desktop)
PASS  5b. valid UVAMO! URLs shown, invalid ones dropped
PASS  second tour: card links to its own route, map and stops switch
PASS  6. 390px: no horizontal scroll
PASS  6. 390px: activity → map → pin popup → back to activity
PASS  6. 390px: modal fits the screen
PASS  no script errors (390px)
PASS  6. 320px: no horizontal scroll
PASS  6. 320px: activity → map → pin popup → back to activity
PASS  6. 320px: modal fits the screen
PASS  no script errors (320px)
PASS  map library missing: itinerary and stops still work

25/25 passed
exit 0

$ node tests/i18n.mjs
PASS  EN desktop: language, both tour cards, unfinished east tour
PASS  EN desktop: person and place dialogs
PASS  EN desktop: no script errors
PASS  EN 390: language, both tour cards, unfinished east tour
PASS  EN 390: person and place dialogs
PASS  EN 390: no script errors
PASS  EN 320: language, both tour cards, unfinished east tour
PASS  EN 320: person and place dialogs
PASS  EN 320: no script errors
PASS  KA desktop: language, both tour cards, unfinished east tour
PASS  KA desktop: no untranslated text (all days open)
PASS  KA desktop: Georgian font loaded and used
PASS  KA desktop: person and place dialogs
PASS  KA desktop: no script errors
PASS  KA 390: language, both tour cards, unfinished east tour
PASS  KA 390: no untranslated text (all days open)
PASS  KA 390: Georgian font loaded and used
PASS  KA 390: person and place dialogs
PASS  KA 390: no script errors
PASS  KA 320: language, both tour cards, unfinished east tour
PASS  KA 320: no untranslated text (all days open)
PASS  KA 320: Georgian font loaded and used
PASS  KA 320: person and place dialogs
PASS  KA 320: no script errors
PASS  RU desktop: language, both tour cards, unfinished east tour
PASS  RU desktop: no untranslated text (all days open)
PASS  RU desktop: person and place dialogs
PASS  RU desktop: no script errors
PASS  RU 390: language, both tour cards, unfinished east tour
PASS  RU 390: no untranslated text (all days open)
PASS  RU 390: person and place dialogs
PASS  RU 390: no script errors
PASS  RU 320: language, both tour cards, unfinished east tour
PASS  RU 320: no untranslated text (all days open)
PASS  RU 320: person and place dialogs
PASS  RU 320: no script errors
PASS  desktop: EN → KA → RU keeps tour, open days, selection and place on page
PASS  desktop: language links carry the tour
PASS  desktop: no script errors while switching
PASS  390: EN → KA → RU keeps tour, open days, selection and place on page
PASS  390: map view and map position survive a language switch
PASS  390: language links carry the tour
PASS  390: no script errors while switching
PASS  ?tour=east&lang=ka: Georgian page, east shown as unfinished, route falls back to the published tour
PASS  unknown language falls back to English

45/45 passed
exit 0
```
