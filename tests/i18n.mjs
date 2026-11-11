// Browser checks for the three languages (EN, KA, RU).
//
//   python3 -m http.server 4300 --bind 127.0.0.1   (from the prototype folder)
//   node tests/i18n.mjs [http://127.0.0.1:4300/] [screenshot-dir]
//
// Needs Playwright with a Chromium build (PLAYWRIGHT_CHROMIUM may point to the binary).
import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdirSync } from "node:fs";

const BASE = process.argv[2] || "http://127.0.0.1:4300/";
const SHOTS = process.argv[3] || null;
if (SHOTS) mkdirSync(SHOTS, { recursive: true });
const browser = await chromium.launch(process.env.PLAYWRIGHT_CHROMIUM ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM } : {});
const results = [];
async function check(name, fn) {
  try {
    await fn();
    results.push(`PASS  ${name}`);
  } catch (error) {
    results.push(`FAIL  ${name}\n      ${error.message.replace(/\s+/g, " ").slice(0, 300)}`);
  }
}
const settle = (page, ms = 700) => page.waitForTimeout(ms);

// Click the header switcher where it is on screen. Playwright's locator.click()
// would first scroll the sticky header "into view", moving the page — a person doesn't.
async function switchTo(page, code) {
  const box = await page.locator(`#langs [data-lang="${code}"]`).boundingBox();
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  await settle(page, 400);
}

async function open(width, height, query = "") {
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.route(/tile\.openstreetmap\.org/, (route) => route.abort());
  await page.goto(`${BASE}${query}`, { waitUntil: "load" });
  await settle(page, 400);
  return { page, context, errors };
}

// Words allowed to stay in Latin script on KA / RU pages: brands, the Leaflet
// credit, Manana's quoted English title and the source spelling of a name.
const ALLOWED_LATIN = /WIWI|Tours|UVAMO!?|Clavelo|ChkhaValley|Winery|Women in Wine Industry Georgia|Leaflet|OpenStreetMap|contributors|A 7-Day Boutique Wine & Culinary Journey|Simonika|Simonica|Datum Space/gi;
const latinWords = (s) => (s.replace(ALLOWED_LATIN, "").match(/\b[A-Za-z]{3,}\b/g) || []);

const EXPECT = {
  en: { html: "en", west: "Guests of Women Winemakers", east: "In development", maka: "Maka Tedoradze", tvishi: "Tvishi", day: "Day 3", popup: "Approximate location", zoom: "Zoom in", wine: "Chkhaveri, Adjarian style", seeWine: "See wine" },
  ka: { html: "ka", west: "ქალი მეღვინეების სტუმრად", east: "მზადდება", maka: "მაკა თედორაძე", tvishi: "ტვიში", day: "დღე 3", popup: "მიახლოებითი ადგილი", zoom: "გადიდება", wine: "ჩხავერი, აჭარული სტილი", seeWine: "ღვინის ნახვა" },
  ru: { html: "ru", west: "В гостях у женщин-виноделов", east: "Готовится", maka: "Мака Тедорадзе", tvishi: "Твиши", day: "День 3", popup: "Приблизительное место", zoom: "Приблизить", wine: "Чхавери, аджарский стиль", seeWine: "Смотреть вино" },
};

for (const [code, e] of Object.entries(EXPECT)) {
  for (const [vp, w, h] of [["desktop", 1440, 900], ["390", 390, 844], ["320", 320, 640]]) {
    const { page, context, errors } = await open(w, h, code === "en" ? "?tour=west" : `?tour=west&lang=${code}`);
    const label = `${code.toUpperCase()} ${vp}`;

    await check(`${label}: language, both tour cards, unfinished east tour`, async () => {
      // Home first: the same URL without ?tour shows the tour cards.
      await page.goto(`${BASE}${code === "en" ? "" : `?lang=${code}`}`, { waitUntil: "load" });
      await settle(page, 300);
      assert.equal(await page.evaluate(() => document.documentElement.lang), e.html);
      assert.equal(await page.locator(`#langs [data-lang="${code}"]`).getAttribute("aria-current"), "true");
      assert.equal(await page.locator(".tour").count(), 2);
      assert.equal(await page.locator(".tour-west h3").innerText(), e.west);
      assert.equal((await page.locator(".tour-east .status").innerText()).toLowerCase(), e.east.toLowerCase());
      assert.equal(await page.locator(".tour-east [data-tour]").count(), 0, "east has no itinerary");
      assert.ok(await page.locator("#route").isHidden(), "no day-by-day route on the home page");
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0, "no horizontal scroll");
      if (code !== "en") assert.deepEqual([...new Set(latinWords(await page.locator("body").innerText()))], [], "home page translated");
      // Then into the tour, keeping the language.
      await page.locator(".tour-west [data-tour]").click();
      await settle(page, 500);
      assert.equal(new URL(page.url()).searchParams.get("lang"), code === "en" ? null : code);
      assert.equal(new URL(page.url()).searchParams.get("tour"), "west");
    });

    if (code !== "en") {
      await check(`${label}: no untranslated text (all days open)`, async () => {
        await page.locator("#toggleAll").click();
        await settle(page, 200);
        const words = latinWords(await page.locator("body").innerText());
        assert.deepEqual([...new Set(words)], [], `Latin words found: ${[...new Set(words)].slice(0, 12).join(", ")}`);
        const aria = await page.evaluate(() => [...document.querySelectorAll("[aria-label]")].map((el) => el.getAttribute("aria-label")).join(" "));
        assert.deepEqual([...new Set(latinWords(aria))], [], "aria-labels translated");
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0, "no horizontal scroll with all days open");
      });
    }

    if (code === "ka") {
      await check(`${label}: Georgian font loaded and used`, async () => {
        const loaded = await page.evaluate(async () => {
          await document.fonts.ready;
          return [...document.fonts].filter((f) => f.family.includes("Georgian") && f.status === "loaded").map((f) => f.family);
        });
        assert.ok(loaded.some((f) => f.includes("Sans")), `Georgian: ${loaded}`);
      });
    }

    await check(`${label}: wine, person and place dialogs`, async () => {
      if (w < 1000) await page.locator("#tab-itinerary").click();
      if (await page.locator("#day-2-body").isHidden()) await page.locator("#day-2 .day-toggle").click();
      const seeWine = page.locator("#activity-d2-chkhavalley .action-see-wine");
      assert.equal((await seeWine.innerText()).trim(), e.seeWine);
      await seeWine.click();
      assert.equal(await page.locator("#detail-title").innerText(), e.wine);
      if (code !== "en") assert.deepEqual([...new Set(latinWords(await page.locator("#detail").innerText()))], []);
      assert.ok((await page.locator("#detail").boundingBox()).width <= w, "wine card fits");
      if (SHOTS) await page.screenshot({ path: `${SHOTS}/${code}-${vp}-wine.png` });
      await page.keyboard.press("Escape");
      await page.locator("#activity-d2-chkhavalley [data-person]").click();
      assert.equal(await page.locator("#detail-title").innerText(), e.maka);
      if (code !== "en") assert.deepEqual([...new Set(latinWords(await page.locator("#detail").innerText()))], []);
      await page.keyboard.press("Escape");
      if (await page.locator("#day-3-body").isHidden()) await page.locator("#day-3 .day-toggle").click();
      await page.locator('#activity-d3-tvishi [data-place="tvishi"]').click();
      assert.equal(await page.locator("#detail-title").innerText(), e.tvishi);
      if (code !== "en") assert.deepEqual([...new Set(latinWords(await page.locator("#detail").innerText()))], []);
      const box = await page.locator("#detail").boundingBox();
      assert.ok(box.x >= 0 && box.x + box.width <= w, "dialog fits");
      if (SHOTS) await page.screenshot({ path: `${SHOTS}/${code}-${vp}-place.png` });
      await page.locator("#detail [data-map-place]").click();
      await settle(page, 900);
      assert.equal(await page.locator("#detail").getAttribute("open"), null);
      const [lat, lng] = await page.evaluate(() => { const c = window.WIWI_PROTOTYPE.map.getCenter(); return [c.lat, c.lng]; });
      assert.ok(Math.abs(lat - 42.54) < 0.05 && Math.abs(lng - 42.73) < 0.05, `map at ${lat},${lng}`);
      const popup = await page.locator(".leaflet-popup").innerText();
      assert.ok(popup.includes(e.popup), `popup: ${popup.slice(0, 80)}`);
      if (code !== "en") assert.deepEqual([...new Set(latinWords(popup))], []);
      assert.equal(await page.locator(".leaflet-control-zoom-in").getAttribute("title"), e.zoom);
      if (SHOTS) await page.screenshot({ path: `${SHOTS}/${code}-${vp}-map.png` });
      await page.locator(".leaflet-popup [data-go]").first().click();
      await settle(page);
      assert.ok(await page.locator("#activity-d3-tvishi").evaluate((el) => el.classList.contains("is-active")));
    });

    if (SHOTS) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `${SHOTS}/${code}-${vp}-full.png`, fullPage: true });
    }
    await check(`${label}: Inter is the typeface, loaded from the prototype`, async () => {
      const fonts = await page.evaluate(async () => {
        await document.fonts.ready;
        return { loaded: [...document.fonts].filter((f) => f.family.replace(/"/g, "") === "Inter" && f.status === "loaded").length,
          h1: getComputedStyle(document.querySelector("h1, h2")).fontFamily, body: getComputedStyle(document.body).fontFamily };
      });
      assert.ok(fonts.loaded >= 1, "Inter loaded");
      assert.match(fonts.body, /^Inter/);
      assert.match(fonts.h1, /^Inter/);
    });
    await check(`${label}: no script errors`, async () => assert.deepEqual(errors, []));
    await context.close();
  }
}

// ---------- switching language keeps the tour and the reader's place ----------
for (const [vp, w, h] of [["desktop", 1440, 900], ["390", 390, 844]]) {
  const { page, context, errors } = await open(w, h, "?tour=west");
  await check(`${vp}: EN → KA → RU keeps tour, open days, selection and place on page`, async () => {
    await page.locator("#day-3 .day-toggle").click();
    await page.evaluate(() => window.WIWI_PROTOTYPE.selectActivity("d3-tvishi"));
    await settle(page);
    const before = await page.locator("#activity-d3-tvishi").boundingBox();
    for (const code of ["ka", "ru"]) {
      await switchTo(page, code);
      const url = new URL(page.url());
      assert.equal(url.searchParams.get("lang"), code);
      assert.equal(url.searchParams.get("tour"), "west");
      assert.equal(await page.evaluate(() => window.WIWI_PROTOTYPE.tour), "west");
      assert.equal(await page.locator("#day-3 .day-toggle").getAttribute("aria-expanded"), "true");
      assert.ok(await page.locator("#activity-d3-tvishi").evaluate((el) => el.classList.contains("is-active")));
      const after = await page.locator("#activity-d3-tvishi").boundingBox();
      assert.ok(Math.abs(after.y - before.y) < 60, `card moved from ${before.y} to ${after.y}`);
      assert.equal((await page.locator("#day-3 .day-num").innerText()).toLowerCase(), EXPECT[code].day.toLowerCase());
    }
    // Back to English drops the lang parameter but keeps the tour.
    await switchTo(page, "en");
    assert.equal(new URL(page.url()).searchParams.get("lang"), null);
    assert.equal(new URL(page.url()).searchParams.get("tour"), "west");
  });
  if (w < 1000) {
    await check(`${vp}: map view and map position survive a language switch`, async () => {
      await page.locator("#activity-d3-tvishi [data-map]").click();
      await settle(page, 900);
      const before = await page.evaluate(() => { const m = window.WIWI_PROTOTYPE.map; return [m.getCenter().lat, m.getZoom()]; });
      await switchTo(page, "ka");
      assert.ok(await page.locator("#map-pane").isVisible(), "still on the map");
      assert.equal(await page.locator("#tab-map").getAttribute("aria-selected"), "true");
      const after = await page.evaluate(() => { const m = window.WIWI_PROTOTYPE.map; return [m.getCenter().lat, m.getZoom()]; });
      assert.ok(Math.abs(after[0] - before[0]) < 0.01 && after[1] === before[1], `map moved ${before} → ${after}`);
      assert.match(await page.locator(".leaflet-popup").innerText(), /ტვიში/);
    });
  }
  await check(`${vp}: language links carry the tour`, async () => {
    const href = await page.locator('#langs [data-lang="ru"]').getAttribute("href");
    assert.match(href, /tour=west/);
    assert.match(href, /lang=ru/);
  });
  await check(`${vp}: no script errors while switching`, async () => assert.deepEqual(errors, []));
  await context.close();
}

// ---------- deep links ----------
{
  const { page, context } = await open(1440, 900, "?tour=east&lang=ka");
  await check("?tour=east&lang=ka: Georgian home page, east shown as unfinished (no route to open yet)", async () => {
    assert.equal(await page.evaluate(() => document.documentElement.lang), "ka");
    assert.equal((await page.locator(".tour-east .status").innerText()), "მზადდება");
    assert.ok(await page.locator("#route").isHidden());
  });
  await context.close();
}
{
  const { page, context } = await open(1440, 900, "?tour=west&lang=xx");
  await check("unknown language falls back to English", async () => {
    assert.equal(await page.evaluate(() => document.documentElement.lang), "en");
  });
  await context.close();
}

await browser.close();
console.log(results.join("\n"));
const failed = results.filter((r) => r.startsWith("FAIL")).length;
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);
