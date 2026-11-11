# WIWI Tours v0.3.3 — verification

Date: 11 November 2026. Local static server, Chromium (Playwright 1.56), map tiles blocked in every run on
purpose. Not tested: Safari, Firefox, real phones, live map tiles; none of the external destinations
(wiwi.ge, UVAMO!, Datum Space, Clavelo) could be opened from the build environment.

## Changes since v0.3.2
- **Logo → home page** (header and footer): plain links to `/?lang=<current>`, an ordinary page load
  independent of script state. `tests/navigation.mjs` covers it from an open Journey.
- **Explore in Clavelo** block on the tour page, shown only for a real public share link (none yet).
- **Hero regions**: pin ↔ region highlight with localized region names (Natural Earth admin-1).
- **Footer links**: WIWI Association (`wiwi.ge`); UVAMO! landing and Datum Space hidden until URLs are verified.

| Suite | Result |
|---|---|
| `node tests/data-check.mjs` | OK — 130 interface keys × 3 languages |
| `node tests/navigation.mjs` — logo → home from an open Journey, 3 languages × desktop/phone × 2 entries × 2 logos | **24 / 24 passed** |
| `node tests/smoke.mjs` — acceptance list incl. hero regions, Clavelo CTA, footer links | **33 / 33 passed** |
| `node tests/i18n.mjs` — EN / KA / RU × 1440, 390, 320 px | **54 / 54 passed** |

## Full output
```
$ node tests/data-check.mjs
data.js OK: 2 tours, 6 days, 31 activities, 12 places, 5 people; i18n.js OK: 130 keys × 3 languages (en, ka, ru)
exit 0

$ node tests/navigation.mjs
PASS  EN desktop, Journey via deep link, header logo
PASS  EN desktop, Journey via deep link, footer logo
PASS  EN desktop, Journey via tour card, header logo
PASS  EN desktop, Journey via tour card, footer logo
PASS  EN phone, Journey via deep link, header logo
PASS  EN phone, Journey via deep link, footer logo
PASS  EN phone, Journey via tour card, header logo
PASS  EN phone, Journey via tour card, footer logo
PASS  KA desktop, Journey via deep link, header logo
PASS  KA desktop, Journey via deep link, footer logo
PASS  KA desktop, Journey via tour card, header logo
PASS  KA desktop, Journey via tour card, footer logo
PASS  KA phone, Journey via deep link, header logo
PASS  KA phone, Journey via deep link, footer logo
PASS  KA phone, Journey via tour card, header logo
PASS  KA phone, Journey via tour card, footer logo
PASS  RU desktop, Journey via deep link, header logo
PASS  RU desktop, Journey via deep link, footer logo
PASS  RU desktop, Journey via tour card, header logo
PASS  RU desktop, Journey via tour card, footer logo
PASS  RU phone, Journey via deep link, header logo
PASS  RU phone, Journey via deep link, footer logo
PASS  RU phone, Journey via tour card, header logo
PASS  RU phone, Journey via tour card, footer logo

24/24 passed
exit 0

$ node tests/smoke.mjs
PASS  1. two tour cards with honest statuses
PASS  home has no day-by-day route; a tour card opens the tour page; back returns home
PASS  hero regions: pin → region + name, region → its pins, leave → reset, keyboard, 3 languages
PASS  hero pin opens the tour at that stop
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
PASS  no Clavelo link without a share URL (today)
PASS  Clavelo CTA: valid share link is shown
PASS  Clavelo CTA: non-share URL is dropped
PASS  Clavelo CTA: other site is dropped
PASS  footer: only links with a URL are shown (WIWI today), localized
PASS  footer: all three links when URLs are set, 1440px
PASS  footer: all three links when URLs are set, 390px
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

33/33 passed
exit 0

$ node tests/i18n.mjs
PASS  EN desktop: language, both tour cards, unfinished east tour
PASS  EN desktop: wine, person and place dialogs
PASS  EN desktop: Inter is the typeface, loaded from the prototype
PASS  EN desktop: no script errors
PASS  EN 390: language, both tour cards, unfinished east tour
PASS  EN 390: wine, person and place dialogs
PASS  EN 390: Inter is the typeface, loaded from the prototype
PASS  EN 390: no script errors
PASS  EN 320: language, both tour cards, unfinished east tour
PASS  EN 320: wine, person and place dialogs
PASS  EN 320: Inter is the typeface, loaded from the prototype
PASS  EN 320: no script errors
PASS  KA desktop: language, both tour cards, unfinished east tour
PASS  KA desktop: no untranslated text (all days open)
PASS  KA desktop: Georgian font loaded and used
PASS  KA desktop: wine, person and place dialogs
PASS  KA desktop: Inter is the typeface, loaded from the prototype
PASS  KA desktop: no script errors
PASS  KA 390: language, both tour cards, unfinished east tour
PASS  KA 390: no untranslated text (all days open)
PASS  KA 390: Georgian font loaded and used
PASS  KA 390: wine, person and place dialogs
PASS  KA 390: Inter is the typeface, loaded from the prototype
PASS  KA 390: no script errors
PASS  KA 320: language, both tour cards, unfinished east tour
PASS  KA 320: no untranslated text (all days open)
PASS  KA 320: Georgian font loaded and used
PASS  KA 320: wine, person and place dialogs
PASS  KA 320: Inter is the typeface, loaded from the prototype
PASS  KA 320: no script errors
PASS  RU desktop: language, both tour cards, unfinished east tour
PASS  RU desktop: no untranslated text (all days open)
PASS  RU desktop: wine, person and place dialogs
PASS  RU desktop: Inter is the typeface, loaded from the prototype
PASS  RU desktop: no script errors
PASS  RU 390: language, both tour cards, unfinished east tour
PASS  RU 390: no untranslated text (all days open)
PASS  RU 390: wine, person and place dialogs
PASS  RU 390: Inter is the typeface, loaded from the prototype
PASS  RU 390: no script errors
PASS  RU 320: language, both tour cards, unfinished east tour
PASS  RU 320: no untranslated text (all days open)
PASS  RU 320: wine, person and place dialogs
PASS  RU 320: Inter is the typeface, loaded from the prototype
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

54/54 passed
exit 0
```
