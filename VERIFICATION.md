# WIWI Tours v0.3.1 — verification

Date: 11 November 2026. Local static server, Chromium (Playwright 1.56), map tiles blocked in every
run on purpose (the page must work without them). Not tested: Safari, Firefox, real phones, live map tiles,
a real UVAMO! wine page inside the wine card (no public URL supplied yet).

## Changes since v0.3
- Hero: an outline map of Georgia (Natural Earth, public domain) with the route's pins, fading into the background.
- Every activity with a wine has a **See wine** chip (and a clickable WINE tile). It opens a wine card:
  with a public UVAMO! URL — the UVAMO! wine page inside the card and "This wine in UVAMO!";
  without one (today) — what the draft says, and a note that the UVAMO! card will appear once WIWI shares the link.
- Hosts block moved above the days; the highlights block and the open-questions section removed.
- Home page = hero + tour cards; the day-by-day route opens only from a tour card (`?tour=west`),
  with "← All journeys", browser Back/Forward, and the WIWI Tours logo (header and footer) leading home.

## Results

| Suite | Result |
|---|---|
| `node tests/data-check.mjs` — data, links and translations | OK: 2 tours, 6 days, 31 activities, 12 places, 5 people; 122 interface keys × 3 languages |
| `node tests/smoke.mjs` — acceptance list, English | **24 / 24 passed** |
| `node tests/i18n.mjs` — EN / KA / RU × 1440, 390, 320 px | **45 / 45 passed** |

`i18n.mjs` covers in each language and width: `<html lang>`, the home page (both tour cards, Eastern Georgia
"in development", no route, no untranslated words), entering the tour with the language kept, no untranslated
words with every day open, Georgian fonts loaded, the wine card, person and place dialogs, map popup and zoom
buttons, switching EN → KA → RU → EN keeping tour, open days, selection, map view and position, deep links.

## Full output
```
$ node tests/data-check.mjs
data.js OK: 2 tours, 6 days, 31 activities, 12 places, 5 people; i18n.js OK: 122 keys × 3 languages (en, ka, ru)
exit 0

$ node tests/smoke.mjs
PASS  1. two tour cards with honest statuses
PASS  home has no day-by-day route; a tour card opens the tour page; back returns home
PASS  2. Western Georgia by day and activity
PASS  3a. person modal opens, Escape closes, focus returns
PASS  3b. uncertain host is labelled, not presented as confirmed
PASS  3c. place modal → Show on map focuses the place
PASS  4a. activity → Show on map
PASS  4b. Show full route returns to overview
PASS  4c. pin → activity expands the right day
PASS  5. every wine has See wine; without a UVAMO! URL the card says so and links nowhere
PASS  7. tentative, seasonal and review markers visible
PASS  map works without tiles (tiles blocked)
PASS  no script errors (desktop)
PASS  5b. a valid UVAMO! URL shows the wine card from UVAMO!, an invalid one is dropped
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

24/24 passed
exit 0

$ node tests/i18n.mjs
PASS  EN desktop: language, both tour cards, unfinished east tour
PASS  EN desktop: wine, person and place dialogs
PASS  EN desktop: no script errors
PASS  EN 390: language, both tour cards, unfinished east tour
PASS  EN 390: wine, person and place dialogs
PASS  EN 390: no script errors
PASS  EN 320: language, both tour cards, unfinished east tour
PASS  EN 320: wine, person and place dialogs
PASS  EN 320: no script errors
PASS  KA desktop: language, both tour cards, unfinished east tour
PASS  KA desktop: no untranslated text (all days open)
PASS  KA desktop: Georgian font loaded and used
PASS  KA desktop: wine, person and place dialogs
PASS  KA desktop: no script errors
PASS  KA 390: language, both tour cards, unfinished east tour
PASS  KA 390: no untranslated text (all days open)
PASS  KA 390: Georgian font loaded and used
PASS  KA 390: wine, person and place dialogs
PASS  KA 390: no script errors
PASS  KA 320: language, both tour cards, unfinished east tour
PASS  KA 320: no untranslated text (all days open)
PASS  KA 320: Georgian font loaded and used
PASS  KA 320: wine, person and place dialogs
PASS  KA 320: no script errors
PASS  RU desktop: language, both tour cards, unfinished east tour
PASS  RU desktop: no untranslated text (all days open)
PASS  RU desktop: wine, person and place dialogs
PASS  RU desktop: no script errors
PASS  RU 390: language, both tour cards, unfinished east tour
PASS  RU 390: no untranslated text (all days open)
PASS  RU 390: wine, person and place dialogs
PASS  RU 390: no script errors
PASS  RU 320: language, both tour cards, unfinished east tour
PASS  RU 320: no untranslated text (all days open)
PASS  RU 320: wine, person and place dialogs
PASS  RU 320: no script errors
PASS  desktop: EN → KA → RU keeps tour, open days, selection and place on page
PASS  desktop: language links carry the tour
PASS  desktop: no script errors while switching
PASS  390: EN → KA → RU keeps tour, open days, selection and place on page
PASS  390: map view and map position survive a language switch
PASS  390: language links carry the tour
PASS  390: no script errors while switching
PASS  ?tour=east&lang=ka: Georgian home page, east shown as unfinished (no route to open yet)
PASS  unknown language falls back to English

45/45 passed
exit 0
```
