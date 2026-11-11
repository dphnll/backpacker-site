// Logo → home page, from an open Journey. Real mouse clicks, real page loads.
//
//   python3 -m http.server 4300 --bind 127.0.0.1   (from the prototype folder)
//   node tests/navigation.mjs [http://127.0.0.1:4300/]
//
// For EN / KA / RU, desktop and phone, entering the Journey by deep link and by its
// tour card, and for both the header and the footer logo:
//   - the home page is shown (hero and both tour cards), at the very top;
//   - `tour` is gone from the URL, `lang` is kept;
//   - browser Back returns to the Journey.
import { chromium } from "playwright";
import assert from "node:assert/strict";

const BASE = process.argv[2] || "http://127.0.0.1:4300/";
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

const state = (page) => page.evaluate(() => ({
  tour: new URLSearchParams(location.search).get("tour"),
  lang: new URLSearchParams(location.search).get("lang"),
  page: window.WIWI_PROTOTYPE?.page,
  hero: !!document.querySelector(".hero") && getComputedStyle(document.querySelector(".hero")).display !== "none",
  cards: [...document.querySelectorAll(".tour")].filter((el) => el.offsetParent).length,
  route: getComputedStyle(document.querySelector("#route")).display !== "none",
  y: Math.round(window.scrollY),
}));

// A person clicks where the logo is on screen; the footer is first scrolled to.
async function clickLogo(page, which) {
  const logo = page.locator(which === "header" ? ".topbar .brand" : ".footer-brand");
  if (which === "footer") {
    await logo.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800); // the page scrolls smoothly
  }
  const box = await logo.boundingBox();
  await Promise.all([
    page.waitForEvent("load"),
    page.mouse.click(box.x + box.width / 2, box.y + box.height / 2),
  ]);
  await page.waitForTimeout(300);
}

for (const lang of ["en", "ka", "ru"]) {
  for (const [vp, width, height] of [["desktop", 1440, 900], ["phone", 390, 844]]) {
    for (const entry of ["deep link", "tour card"]) {
      for (const which of ["header", "footer"]) {
        const name = `${lang.toUpperCase()} ${vp}, Journey via ${entry}, ${which} logo`;
        const context = await browser.newContext({ viewport: { width, height } });
        const page = await context.newPage();
        const errors = [];
        page.on("pageerror", (e) => errors.push(e.message));
        await page.route(/tile\.openstreetmap\.org/, (route) => route.abort());
        const q = lang === "en" ? "" : `lang=${lang}`;
        await check(name, async () => {
          if (entry === "deep link") {
            await page.goto(`${BASE}?tour=west${q ? `&${q}` : ""}`, { waitUntil: "load" });
          } else {
            await page.goto(`${BASE}${q ? `?${q}` : ""}`, { waitUntil: "load" });
            await page.waitForTimeout(300);
            await page.locator(".tour-west [data-tour]").click();
          }
          await page.waitForTimeout(400);
          const journey = await state(page);
          assert.equal(journey.tour, "west", "Journey is open");
          assert.ok(journey.route && !journey.hero, "Journey shows the route");

          await clickLogo(page, which);
          const home = await state(page);
          assert.equal(home.tour, null, "tour removed from the URL");
          assert.equal(home.lang, lang === "en" ? null : lang, "language kept");
          assert.equal(home.page, "home");
          assert.ok(home.hero, "hero visible");
          assert.equal(home.cards, 2, "both tour cards visible");
          assert.ok(!home.route, "route hidden");
          assert.equal(home.y, 0, "at the very top");

          await page.goBack({ waitUntil: "load" });
          await page.waitForTimeout(500);
          const back = await state(page);
          assert.equal(back.tour, "west", "Back returns to the Journey");
          assert.ok(back.route && !back.hero, "Journey route visible after Back");
          assert.equal(back.lang, lang === "en" ? null : lang);
          assert.deepEqual(errors, []);
        });
        await context.close();
      }
    }
  }
}

await browser.close();
console.log(results.join("\n"));
const failed = results.filter((r) => r.startsWith("FAIL")).length;
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);
