// Browser acceptance checks for the WIWI Tours prototype.
//
//   python3 -m http.server 4300 --bind 127.0.0.1   (from the prototype folder)
//   node tests/smoke.mjs [http://127.0.0.1:4300/]
//
// Needs Playwright with a Chromium build (PLAYWRIGHT_CHROMIUM may point to the binary).
// Map tiles are blocked on purpose in every run: the page must work without them.
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
    results.push(`FAIL  ${name}\n      ${error.message.replace(/\s+/g, " ").slice(0, 260)}`);
  }
}

async function open(width, height, { patchData = "", blockLeaflet = false, query = "" } = {}) {
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.route(/tile\.openstreetmap\.org/, (route) => route.abort());
  if (blockLeaflet) await page.route(/leaflet\.js$/, (route) => route.abort());
  if (patchData) {
    await page.route(/data\.js$/, async (route) => {
      const res = await route.fetch();
      route.fulfill({ response: res, body: (await res.text()) + "\n" + patchData });
    });
  }
  await page.goto(BASE + query, { waitUntil: "load" });
  await page.waitForTimeout(300);
  return { page, context, errors };
}

const near = (a, b, tol = 0.05) => Math.abs(a - b) < tol;
const mapCenter = (page) => page.evaluate(() => { const c = window.WIWI_PROTOTYPE.map.getCenter(); return [c.lat, c.lng, window.WIWI_PROTOTYPE.map.getZoom()]; });
const settle = (page) => page.waitForTimeout(900);

// Tap where a pin is, like a person would: if a neighbour covers it, that tap
// lands on the neighbour (which zooms in), and the next tap reaches the pin.
async function tapPin(page, placeName) {
  const pin = page.locator(`.pin[title^="${placeName} ("]`);
  for (let attempt = 0; attempt < 4; attempt += 1) {
    // An open popup can sit over the next pin; a person would close it first.
    await page.evaluate(() => window.WIWI_PROTOTYPE.map.closePopup());
    await page.waitForTimeout(300); // Leaflet fades the popup out over 200 ms
    await pin.scrollIntoViewIfNeeded();
    const { x, y, onTop } = await pin.evaluate((el) => {
      const b = el.getBoundingClientRect();
      const cx = b.x + b.width / 2, cy = b.y + b.height / 2;
      return { x: cx, y: cy, onTop: el.contains(document.elementFromPoint(cx, cy)) };
    });
    await page.mouse.click(x, y);
    await settle(page);
    if (onTop) return attempt;
  }
  throw new Error(`pin ${placeName} never became reachable`);
}

// ---------- desktop ----------
{
  const { page, context, errors } = await open(1440, 900);

  await check("1. two tour cards with honest statuses", async () => {
    assert.equal(await page.locator(".tour").count(), 2);
    assert.match(await page.locator(".tour-west .status").innerText(), /in draft/i);
    assert.match(await page.locator(".tour-east .status").innerText(), /in development/i);
    assert.match(await page.locator(".tour-west").innerText(), /English text says 7 days/);
    assert.equal(await page.locator(".tour-east [data-tour]").count(), 0, "no itinerary for the tour in development");
    assert.match(await page.locator(".hero-notice").innerText(), /not a commercial offer/i);
  });

  await check("home has no day-by-day route; a tour card opens the tour page; back returns home", async () => {
    assert.ok(await page.locator("#route").isHidden());
    assert.equal(await page.locator(".day:visible").count(), 0);
    assert.equal(await page.locator("#status, .question-group").count(), 0, "no open-questions block");
    await page.locator(".tour-west [data-tour]").click();
    await settle(page);
    assert.equal(new URL(page.url()).searchParams.get("tour"), "west");
    assert.ok(await page.locator("#route").isVisible());
    assert.ok(await page.locator(".hero").isHidden());
    assert.ok(await page.locator("#journeys").isHidden());
    assert.match(await page.locator("#route-title").innerText(), /Guests of Women Winemakers/);
    await page.locator(".back-link").click();
    await settle(page);
    assert.equal(new URL(page.url()).searchParams.get("tour"), null);
    assert.ok(await page.locator("#route").isHidden());
    // The logo leads home too, to the top of the page.
    await page.locator(".tour-west [data-tour]").click();
    await settle(page);
    await page.locator(".brand").click();
    await settle(page);
    assert.equal(new URL(page.url()).searchParams.get("tour"), null);
    assert.ok(await page.locator(".hero").isVisible());
    assert.ok(await page.locator("#route").isHidden());
    assert.equal(await page.evaluate(() => window.scrollY), 0);
    // …and so does the logo in the footer.
    await page.locator(".tour-west [data-tour]").click();
    await settle(page);
    await page.locator(".footer-brand").click();
    await settle(page);
    assert.equal(new URL(page.url()).searchParams.get("tour"), null);
    assert.ok(await page.locator(".hero").isVisible());
    assert.equal(await page.evaluate(() => window.scrollY), 0);
    await page.locator(".tour-west [data-tour]").click();
    await settle(page);
    await page.goBack();
    await settle(page);
    assert.ok(await page.locator("#journeys").isVisible(), "browser Back returns to the tour cards");
    await page.goForward();
    await settle(page);
    assert.ok(await page.locator("#route").isVisible(), "browser Forward reopens the tour");
  });

  await check("hero regions: pin → region + name, region → its pins, leave → reset, keyboard, 3 languages", async () => {
    await page.goto(BASE, { waitUntil: "load" });
    await page.waitForTimeout(300);
    const state = () => page.evaluate(() => ({
      label: document.querySelector("#heroRegionLabel").hidden ? null : document.querySelector("#heroRegionLabel").textContent,
      regions: [...document.querySelectorAll(".hero-regions path.is-region")].map((e) => e.dataset.region),
      pins: [...document.querySelectorAll(".hero-pin.is-region")].map((e) => e.dataset.heroPlace).sort(),
    }));
    // Pin → its region and name
    await page.locator('.hero-pin[data-hero-place="obcha"]').hover();
    await page.waitForTimeout(150);
    let st = await state();
    assert.deepEqual(st.regions, ["imereti"]);
    assert.equal(st.label, "Imereti");
    assert.deepEqual(st.pins, ["kutaisi", "obcha"]);
    // Region territory (away from pins) → its pins
    const box = await page.locator('#heroRegions path[data-region="racha-lechkhumi-kvemo-svaneti"]').boundingBox();
    await page.mouse.move(box.x + box.width * 0.85, box.y + box.height * 0.45);
    await page.waitForTimeout(150);
    st = await state();
    assert.deepEqual(st.regions, ["racha-lechkhumi-kvemo-svaneti"]);
    assert.deepEqual(st.pins, ["khvanchkara", "nikortsminda", "shaori", "tvishi"]);
    assert.equal(st.label, "Racha-Lechkhumi and Kvemo Svaneti");
    // Leave → original appearance
    await page.mouse.move(5, 500);
    await page.waitForTimeout(150);
    st = await state();
    assert.deepEqual(st, { label: null, regions: [], pins: [] });
    // Keyboard focus on a pin tells the region too
    await page.locator('.hero-pin[data-hero-place="mtskheta"]').focus();
    st = await state();
    assert.equal(st.label, "Mtskheta-Mtianeti");
    await page.locator('.hero-pin[data-hero-place="mtskheta"]').blur();
    assert.equal((await state()).label, null);
    // Localized names
    for (const [code, name] of [["ka", "რაჭა-ლეჩხუმი და ქვემო სვანეთი"], ["ru", "Рача-Лечхуми и Квемо-Сванети"], ["en", "Racha-Lechkhumi and Kvemo Svaneti"]]) {
      await page.evaluate((c) => window.WIWI_PROTOTYPE.setLanguage(c), code);
      await page.locator('.hero-pin[data-hero-place="tvishi"]').hover();
      await page.waitForTimeout(150);
      assert.equal((await state()).label, name, code);
      await page.mouse.move(5, 500);
    }
    // Regions never sit over the hero button
    const cta = await page.locator(".hero-actions .btn").boundingBox();
    const hit = await page.evaluate(([x, y]) => document.elementFromPoint(x, y)?.closest(".btn")?.className || "", [cta.x + cta.width / 2, cta.y + cta.height / 2]);
    assert.match(hit, /btn/);
  });

  await check("hero pin opens the tour at that stop", async () => {
    await page.goto(BASE, { waitUntil: "load" }); // home page
    await page.waitForTimeout(300);
    await page.locator('.hero-pin[data-hero-place="tvishi"]').click();
    await settle(page);
    assert.equal(new URL(page.url()).searchParams.get("tour"), "west");
    assert.equal(await page.locator("#day-3 .day-toggle").getAttribute("aria-expanded"), "true");
    assert.ok(await page.locator("#activity-d3-tvishi").evaluate((el) => el.classList.contains("is-active")));
    assert.ok(await page.locator("#activity-d3-tvishi").isVisible());
    const [lat, lng] = await mapCenter(page);
    assert.ok(near(lat, 42.54) && near(lng, 42.73), `map at ${lat},${lng}`);
    // Reload the tour page so the next checks start with days 1–2 open, as on a first visit.
    await page.goto(BASE + "?tour=west", { waitUntil: "load" });
    await page.waitForTimeout(300);
    assert.equal(await page.locator("#day-3 .day-toggle").getAttribute("aria-expanded"), "false");
  });

  await check("2. Western Georgia by day and activity", async () => {
    assert.equal(await page.locator(".day").count(), 6);
    assert.equal(await page.locator(".activity").count(), 31);
    const day3 = page.locator("#day-3 .day-toggle");
    assert.equal(await day3.getAttribute("aria-expanded"), "false");
    await day3.click();
    assert.equal(await day3.getAttribute("aria-expanded"), "true");
    assert.ok(await page.locator("#activity-d3-tvishi").isVisible());
    await day3.click();
    assert.equal(await page.locator("#day-3-body").isHidden(), true);
  });

  await check("3a. person modal opens, Escape closes, focus returns", async () => {
    const btn = page.locator("#activity-d2-chkhavalley [data-person]");
    await btn.click();
    assert.equal(await page.locator("#detail").getAttribute("open"), "");
    assert.equal(await page.locator("#detail-title").innerText(), "Maka Tedoradze");
    assert.equal(await page.locator("#detail img").count(), 0, "no photograph is invented");
    await page.keyboard.press("Escape");
    assert.equal(await page.locator("#detail").getAttribute("open"), null);
    assert.ok(await btn.evaluate((el) => el === document.activeElement));
  });

  await check("3b. uncertain host is labelled, not presented as confirmed", async () => {
    await page.locator('.person-card[data-person="lomtadze"]').click();
    const text = await page.locator("#detail").innerText();
    assert.match(text, /to confirm/i);
    assert.match(text, /woman winemaker or host .* still to be confirmed/i);
    await page.locator("#detail-close").click();
  });

  await check("3c. place modal → Show on map focuses the place", async () => {
    await page.locator("#day-3 .day-toggle").click();
    await page.locator('#activity-d3-tvishi [data-place="tvishi"]').click();
    assert.equal(await page.locator("#detail-title").innerText(), "Tvishi");
    assert.match(await page.locator("#detail").innerText(), /approximate/i);
    await page.locator("#detail [data-map-place]").click();
    await settle(page);
    assert.equal(await page.locator("#detail").getAttribute("open"), null);
    const [lat, lng, zoom] = await mapCenter(page);
    assert.ok(near(lat, 42.54) && near(lng, 42.73) && zoom >= 10, `center ${lat},${lng} z${zoom}`);
    assert.equal(await page.locator(".pin.is-active").count(), 1);
    assert.ok(await page.locator(".leaflet-popup").isVisible());
  });

  await check("4a. activity → Show on map", async () => {
    await page.locator("#day-4 .day-toggle").click();
    await page.locator("#activity-d4-chkheidze [data-map]").click();
    await settle(page);
    const [lat, lng] = await mapCenter(page);
    assert.ok(near(lat, 42.2) && near(lng, 42.8), `center ${lat},${lng}`);
    assert.ok(await page.locator("#activity-d4-chkheidze").evaluate((el) => el.classList.contains("is-active")));
  });

  await check("4b. Show full route returns to overview", async () => {
    await page.locator("#fullRoute").click();
    await settle(page);
    const [, , zoom] = await mapCenter(page);
    assert.ok(zoom < 9, `zoom ${zoom}`);
    assert.equal(await page.locator(".pin.is-active").count(), 0);
  });

  await check("4c. pin → activity expands the right day", async () => {
    await page.locator("#toggleAll").click(); // open all
    await page.locator("#toggleAll").click(); // close all
    assert.equal(await page.locator("#day-3-body").isHidden(), true);
    const zoomBefore = (await mapCenter(page))[2];
    const extraTaps = await tapPin(page, "Khvanchkara");
    if (extraTaps) assert.ok((await mapCenter(page))[2] > zoomBefore, "crowded pin zooms in");
    assert.equal(await page.locator("#day-3 .day-toggle").getAttribute("aria-expanded"), "true");
    const active = page.locator("#activity-d3-lomtadze");
    assert.ok(await active.evaluate((el) => el.classList.contains("is-active")));
    assert.ok(await active.isVisible());
  });

  await check("5. every wine has See wine; without a UVAMO! URL the card says so and links nowhere", async () => {
    assert.equal(await page.locator(".action-see-wine").count(), 5);
    assert.equal(await page.locator("button.activity-tile[data-wine]").count(), 5);
    assert.equal(await page.locator(".action-wine").count(), 0);
    if (await page.locator("#day-2-body").isHidden()) await page.locator("#day-2 .day-toggle").click();
    await page.locator("#activity-d2-chkhavalley .action-see-wine").click();
    assert.equal(await page.locator("#detail-title").innerText(), "Chkhaveri, Adjarian style");
    const text = await page.locator("#detail").innerText();
    assert.match(text, /will appear here once WIWI shares its public tasting link/);
    assert.match(text, /ChkhaValley Winery/);
    assert.equal(await page.locator("#detail iframe").count(), 0);
    assert.equal(await page.locator('#detail a[href*="tasting"]').count(), 0);
    await page.keyboard.press("Escape");
    await page.locator("#activity-d2-sarishvili button.activity-tile").click();
    assert.equal(await page.locator("#detail-title").innerText(), "Chkhaveri, Gurian style");
    await page.keyboard.press("Escape");
  });

  await check("7. tentative, seasonal and review markers visible", async () => {
    assert.ok((await page.locator(".activity .status-to-confirm").count()) >= 8);
    assert.match(await page.locator("#activity-d2-chkhavalley .flag-line-seasonal").innerText(), /mandarin/i);
    assert.equal(await page.locator(".review-note").count(), 2);
    assert.match(await page.locator(".map-note").innerText(), /approximate/i);
  });

  await check("map works without tiles (tiles blocked)", async () => {
    assert.ok(await page.locator("#mapNotice").isVisible());
    assert.equal(await page.locator(".pin").count(), 11);
  });

  await check("no script errors (desktop)", async () => assert.deepEqual(errors, []));
  await context.close();
}

// ---------- wine links appear only for valid URLs ----------
{
  const patch = `
    const days = window.WIWI_DATA.tours[0].days;
    const a = days[1].activities[1];
    a.links = { uvamoWine: "https://uvamo.example/tasting/snap_01/wine/2", uvamoSet: "https://uvamo.example/tasting/snap_01" };
    days[1].activities[3].links = { uvamoWine: "https://uvamo.example/somewhere-else", uvamoSet: "javascript:alert(1)" };`;
  const { page, context } = await open(1440, 900, { patchData: patch, query: "?tour=west" });
  await check("5b. a valid UVAMO! URL shows the wine card from UVAMO!, an invalid one is dropped", async () => {
    await page.route(/uvamo\.example/, (route) => route.fulfill({ contentType: "text/html", body: "<h1>UVAMO wine card</h1>" }));
    await page.locator("#activity-d2-chkhavalley .action-see-wine").click();
    assert.equal(await page.locator("#detail iframe").getAttribute("src"), "https://uvamo.example/tasting/snap_01/wine/2");
    const links = page.locator("#detail .action-wine");
    assert.equal(await links.count(), 2);
    assert.equal(await links.nth(0).getAttribute("href"), "https://uvamo.example/tasting/snap_01/wine/2");
    assert.equal(await links.nth(0).getAttribute("target"), "_blank");
    assert.equal(await links.nth(1).getAttribute("href"), "https://uvamo.example/tasting/snap_01");
    await page.keyboard.press("Escape");
    await page.locator("#activity-d2-sarishvili .action-see-wine").click();
    assert.equal(await page.locator("#detail iframe").count(), 0);
    assert.equal(await page.locator("#detail .action-wine").count(), 0);
    assert.equal(await page.locator(".activity .action-wine").count(), 0, "external links only inside the card");
  });
  await context.close();
}

// ---------- "Explore in Clavelo" only with a real public share link ----------
{
  const { page, context } = await open(1440, 900, { query: "?tour=west" });
  await check("published Clavelo sample: one public share link, labelled sample, new tab", async () => {
    const a = page.locator(".clavelo-preview a");
    assert.equal(await a.count(), 1);
    assert.match(await a.getAttribute("href"), /^https:\/\/app\.clavelo\.cc\/\?share=[0-9a-f]+$/);
    assert.equal(await a.getAttribute("target"), "_blank");
    assert.match(await page.locator(".clavelo-preview").innerText(), /not a booking/i);
  });
  await context.close();
}
for (const [label, url, shown] of [
  ["valid share link is shown", "https://app.clavelo.cc/?share=abc_123-XYZ", true],
  ["non-share URL is dropped", "https://app.clavelo.cc/", false],
  ["other site is dropped", "https://example.com/?share=abc", false],
]) {
  const patch = `window.WIWI_DATA.tours[0].clavelo = { url: ${JSON.stringify(url)} };`;
  const { page, context, errors } = await open(390, 844, { patchData: patch, query: "?tour=west" });
  await check(`Clavelo CTA: ${label}`, async () => {
    assert.equal(await page.locator(".clavelo-preview").count(), shown ? 1 : 0);
    if (shown) {
      const a = page.locator(".clavelo-preview a");
      assert.equal(await a.getAttribute("href"), url);
      assert.equal(await a.getAttribute("target"), "_blank");
      assert.match(await page.locator(".clavelo-preview").innerText(), /sample/i);
      assert.match(await page.locator(".clavelo-preview").innerText(), /not a booking/i);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0, "phone layout intact");
      await page.evaluate(() => window.WIWI_PROTOTYPE.setLanguage("ka"));
      assert.equal((await a.innerText()).replace(" ↗", ""), "ნახვა Clavelo-ში");
      await page.evaluate(() => window.WIWI_PROTOTYPE.setLanguage("ru"));
      assert.equal((await a.innerText()).replace(" ↗", ""), "Открыть в Clavelo");
    }
    assert.deepEqual(errors, []);
  });
  await context.close();
}

// ---------- footer links and the developer credit ----------
{
  const { page, context } = await open(390, 844);
  await check("footer: WIWI and UVAMO! links, localized, open in a new tab", async () => {
    const links = page.locator("#footerLinks a");
    assert.equal(await links.count(), 2);
    assert.deepEqual(
      await links.evaluateAll((els) => els.map((a) => a.getAttribute("href"))),
      ["https://wiwi.ge/en", "https://uvamo.cc/"],
    );
    assert.deepEqual(await links.allInnerTexts(), ["WIWI Association", "Wine experiences by UVAMO!"]);
    assert.equal(await links.nth(1).getAttribute("target"), "_blank");
    await page.evaluate(() => window.WIWI_PROTOTYPE.setLanguage("ka"));
    assert.deepEqual(await links.allInnerTexts(), ["ასოციაცია WIWI", "ღვინის გამოცდილება UVAMO!-სგან"]);
    await page.evaluate(() => window.WIWI_PROTOTYPE.setLanguage("ru"));
    assert.deepEqual(await links.allInnerTexts(), ["Ассоциация WIWI", "Винные впечатления от UVAMO!"]);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0);
  });
  await context.close();
}
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const { page, context } = await open(w, h);
  await check(`footer: Datum Space credit on the right of the bottom row, localized, ${w}px`, async () => {
    const credit = page.locator("#footerCredit a");
    assert.equal(await credit.count(), 1);
    assert.equal(await credit.getAttribute("href"), "https://digital.datumspace.cc/");
    assert.equal(await credit.getAttribute("target"), "_blank");
    assert.equal(await credit.innerText(), "Designed & developed by Datum Space");
    const geo = await page.evaluate(() => {
      const c = document.querySelector("#footerCredit").getBoundingClientRect();
      const note = document.querySelector(".footer-bottom [data-i18n='footer.note']").getBoundingClientRect();
      const row = document.querySelector(".footer-bottom").getBoundingClientRect();
      return { right: row.right - c.right, sameRow: Math.abs(c.top - note.top) < 6, under: c.top >= note.bottom - 2, overflow: document.documentElement.scrollWidth - innerWidth };
    });
    // Desktop: same row as the note, on the right. Phone: may wrap under the note.
    if (w >= 900) assert.ok(geo.sameRow && geo.right < 2, "credit is on the right of the note row");
    else assert.ok((geo.sameRow && geo.right < 2) || geo.under, "credit is on the right or under the note");
    assert.equal(geo.overflow, 0);
    await page.evaluate(() => window.WIWI_PROTOTYPE.setLanguage("ka"));
    assert.equal(await credit.innerText(), "დიზაინი და შემუშავება – Datum Space");
    await page.evaluate(() => window.WIWI_PROTOTYPE.setLanguage("ru"));
    assert.equal(await credit.innerText(), "Дизайн и разработка – Datum Space");
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0);
  });
  await context.close();
}
{
  // A per-language destination, a link without URL, and a credit without URL.
  const patch = 'window.WIWI_DATA.footerLinks[0].url = { en: "https://wiwi.example/en/", ka: "https://wiwi.example/ka/", ru: "https://wiwi.example/ru/" }; window.WIWI_DATA.footerLinks[1].url = null; window.WIWI_DATA.footerCredit.url = null;';
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    const { page, context } = await open(w, h, { patchData: patch });
    await check(`footer: per-language URL follows the language; a link or credit without URL is hidden, ${w}px`, async () => {
      const links = page.locator("#footerLinks a");
      assert.deepEqual(await links.allInnerTexts(), ["WIWI Association"]);
      assert.equal(await links.nth(0).getAttribute("href"), "https://wiwi.example/en/");
      assert.ok(await page.locator("#footerCredit").isHidden(), "credit hidden without URL");
      await page.evaluate(() => window.WIWI_PROTOTYPE.setLanguage("ka"));
      assert.equal(await links.nth(0).getAttribute("href"), "https://wiwi.example/ka/");
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0);
    });
    await context.close();
  }
}

// ---------- a second tour appears by adding days in data.js only ----------
{
  // Test-only dummy content: proves the page needs no code change for tour two.
  const patch = `
    const east = window.WIWI_DATA.tours.find((x) => x.id === "east");
    // Same shape as the real data: texts in place as { en, ka, ru }, recurring terms by key.
    east.days = [{ n: 1, title: { en: "Test day", ka: "სატესტო დღე", ru: "Тестовый день" },
      route: { en: "Tbilisi", ka: "თბილისი", ru: "Тбилиси" }, activities: [
      { id: "test-east-1", time: null, type: "excursion", status: "placeholder", place: "mtskheta", topics: ["heritage"],
        title: { en: "Test activity", ka: "სატესტო აქტივობა", ru: "Тестовое событие" } },
    ] }];`;
  const { page, context, errors } = await open(1440, 900, { patchData: patch });
  await check("second tour: card links to its own route, map and stops switch", async () => {
    await page.locator(".tour-east [data-tour]").click();
    await settle(page);
    assert.match(await page.locator("#route-title").innerText(), /Kakheti/);
    assert.equal(await page.locator(".activity").count(), 1);
    assert.equal(await page.locator(".pin").count(), 1);
    assert.equal(await page.locator(".stop").count(), 1);
    // The new tour is localized by its data alone.
    await page.evaluate(() => window.WIWI_PROTOTYPE.setLanguage("ka"));
    await settle(page);
    assert.equal(await page.locator("#route-title").innerText(), "კახეთისა და აღმოსავლეთ საქართველოს ქალები");
    assert.equal(await page.locator("#activity-test-east-1 h4").innerText(), "სატესტო აქტივობა");
    assert.equal(new URL(page.url()).searchParams.get("tour"), "east");
    await page.evaluate(() => window.WIWI_PROTOTYPE.setLanguage("en"));
    await settle(page);
    await page.locator(".back-link").click();
    await settle(page);
    await page.locator(".tour-west [data-tour]").click();
    await settle(page);
    assert.equal(await page.locator(".activity").count(), 31);
    assert.equal(await page.locator(".pin").count(), 11);
    assert.deepEqual(errors, []);
  });
  await context.close();
}

// ---------- phones ----------
for (const [w, h] of [[390, 844], [320, 640]]) {
  const { page, context, errors } = await open(w, h, { query: "?tour=west" });
  await check(`6. ${w}px: no horizontal scroll`, async () => {
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0);
  });
  await check(`6. ${w}px: activity → map → pin popup → back to activity`, async () => {
    assert.ok(await page.locator(".view-switch").isVisible());
    assert.ok(await page.locator("#map-pane").isHidden());
    await page.locator("#activity-d2-sarishvili [data-map]").click();
    await settle(page);
    assert.ok(await page.locator("#map-pane").isVisible());
    assert.ok(await page.locator("#itinerary-pane").isHidden());
    assert.equal(await page.locator("#tab-map").getAttribute("aria-selected"), "true");
    const [lat] = await mapCenter(page);
    assert.ok(near(lat, 42.089), `lat ${lat}`);
    await page.locator("#fullRoute").click();
    await settle(page);
    await tapPin(page, "Mtskheta");
    await page.locator(".leaflet-popup [data-go]").first().click();
    await settle(page);
    assert.ok(await page.locator("#itinerary-pane").isVisible());
    const card = page.locator("#activity-d5-mtskheta");
    assert.ok(await card.evaluate((el) => el.classList.contains("is-active")));
    const box = await card.boundingBox();
    assert.ok(box.y >= 0 && box.y < h, `card y=${box.y}`);
  });
  await check(`6. ${w}px: modal fits the screen`, async () => {
    await page.locator('.person-card[data-person="miranda"]').click();
    const box = await page.locator("#detail").boundingBox();
    assert.ok(box.x >= 0 && box.x + box.width <= w, `dialog ${box.x}+${box.width}`);
    await page.keyboard.press("Escape");
  });
  await check(`no script errors (${w}px)`, async () => assert.deepEqual(errors, []));
  await context.close();
}

// ---------- map library unavailable ----------
{
  const { page, context } = await open(1440, 900, { blockLeaflet: true, query: "?tour=west" });
  await check("map library missing: itinerary and stops still work", async () => {
    assert.ok(await page.locator("#mapNotice").isVisible());
    assert.equal(await page.locator(".activity").count(), 31);
    await page.locator('.stop[data-stop="mtskheta"]').click();
    await settle(page);
    assert.ok(await page.locator("#activity-d5-mtskheta").evaluate((el) => el.classList.contains("is-active")));
  });
  await context.close();
}

await browser.close();
console.log(results.join("\n"));
const failed = results.filter((r) => r.startsWith("FAIL")).length;
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);
