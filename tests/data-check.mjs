// Checks data.js and i18n.js after editing — no browser, no dependencies.
//   node tests/data-check.mjs
//
// Besides links between activities, places and people, it checks that every
// visitor-facing text exists in all three languages, so a new activity or tour
// cannot go live in English only.
import { readFileSync } from "node:fs";
import vm from "node:vm";

const sandbox = { window: {} };
for (const file of ["../data.js", "../i18n.js"]) {
  vm.runInNewContext(readFileSync(new URL(file, import.meta.url), "utf8"), sandbox);
}
const D = sandbox.window.WIWI_DATA;
const UI = sandbox.window.WIWI_I18N;
const LANGS = sandbox.window.WIWI_LANGS.map((l) => l.code);
const problems = [];
const STATUSES = ["draft", "to-confirm", "placeholder", "confirmed"];
const TYPES = ["wine", "food", "transport", "stay", "excursion", "other"];
const UVAMO_SET = /^https:\/\/[a-z0-9.-]+\/tasting\/[A-Za-z0-9_-]+\/?$/;
const UVAMO_WINE = /^https:\/\/[a-z0-9.-]+\/tasting\/[A-Za-z0-9_-]+\/wine\/\d+\/?$/;

// ---------- interface dictionaries ----------
const keys = Object.keys(UI.en);
for (const code of LANGS) {
  for (const key of keys) if (!UI[code]?.[key]?.trim()) problems.push(`i18n.js ${code}: missing "${key}"`);
  for (const key of Object.keys(UI[code] || {})) if (!(key in UI.en)) problems.push(`i18n.js ${code}: unknown key "${key}"`);
}
const dictKey = (where, kind, key) => {
  if (!(`${kind}.${key}` in UI.en)) problems.push(`${where}: "${key}" is not a ${kind}.* key in i18n.js`);
};

// ---------- localized text ----------
// Names that stay the same in every language may be plain strings.
const UNTRANSLATED = new Set(["ChkhaValley Winery", "WIWI Tours", "UVAMO!", "Clavelo"]);
function text(where, value, { optional = false } = {}) {
  if (value == null) {
    if (!optional) problems.push(`${where}: missing text`);
    return;
  }
  if (typeof value === "string") {
    if (/[A-Za-z]{2,}/.test(value) && !UNTRANSLATED.has(value)) problems.push(`${where}: "${value.slice(0, 40)}" must be { en, ka, ru }`);
    return;
  }
  for (const code of LANGS) if (!value[code]?.trim()) problems.push(`${where}: no ${code.toUpperCase()} text`);
  for (const code of Object.keys(value)) if (!LANGS.includes(code)) problems.push(`${where}: unknown language "${code}"`);
  if (value.ka && /[A-Za-z]{4,}/.test(value.ka.replace(/WIWI|UVAMO!?|ChkhaValley Winery|Clavelo|Simonika|Simonica|A 7-Day Boutique Wine & Culinary Journey/g, ""))) {
    problems.push(`${where}: KA text contains Latin words: "${value.ka.slice(0, 40)}"`);
  }
  if (value.ru && /[A-Za-z]{4,}/.test(value.ru.replace(/WIWI|UVAMO!?|ChkhaValley Winery|Clavelo|Simonika|Simonica|A 7-Day Boutique Wine & Culinary Journey/g, ""))) {
    problems.push(`${where}: RU text contains Latin words: "${value.ru.slice(0, 40)}"`);
  }
}
const term = (where, kind, value) => (typeof value === "string" ? dictKey(where, kind, value) : text(where, value));

// ---------- tours, days, activities ----------
const ids = new Set();
const tourIds = new Set();
let dayCount = 0;
for (const tour of D.tours) {
  const tw = `tour ${tour.id}`;
  if (tourIds.has(tour.id)) problems.push(`${tw}: duplicate id`);
  tourIds.add(tour.id);
  if (!STATUSES.concat("in-development").includes(tour.status)) problems.push(`${tw}: unknown status`);
  text(`${tw} title`, tour.title);
  text(`${tw} region`, tour.region);
  text(`${tw} summary`, tour.summary);
  text(`${tw} tagline`, tour.tagline, { optional: true });
  text(`${tw} author`, tour.author, { optional: true });
  if (tour.clavelo?.url && !/^https:\/\/app\.(clavelo\.cc|backpackerapp\.cc)\/(\?share=|#share=)[A-Za-z0-9._~%-]+$/.test(tour.clavelo.url)) {
    problems.push(`${tw}: clavelo.url must be a public Clavelo share link (https://app.clavelo.cc/?share=…)`);
  }
  for (const r of tour.focus || []) dictKey(`${tw} focus`, "region", r);
  (tour.facts || []).forEach((f, i) => {
    text(`${tw} fact ${i + 1}`, f.label);
    text(`${tw} fact ${i + 1} note`, f.note, { optional: true });
  });
  for (const q of tour.openQuestions || []) {
    text(`${tw} question ${q.id} title`, q.title);
    text(`${tw} question ${q.id} text`, q.text);
  }
  (tour.days || []).forEach((day, i) => {
    dayCount += 1;
    const dw = `${tour.id} day ${day.n}`;
    if (day.n !== i + 1) problems.push(`${dw}: days must be numbered 1, 2, 3… in order`);
    text(`${dw} title`, day.title);
    text(`${dw} note`, day.note, { optional: true });
    text(`${dw} route`, day.route);
    if (day.review && !(tour.openQuestions || []).some((q) => q.id === day.review)) problems.push(`${dw}: unknown open question "${day.review}"`);
    for (const a of day.activities) {
      const where = `${dw} / ${a.id}`;
      if (ids.has(a.id)) problems.push(`${where}: duplicate id`);
      ids.add(a.id);
      if (!TYPES.includes(a.type)) problems.push(`${where}: type must be one of ${TYPES.join(", ")}`);
      if (!STATUSES.includes(a.status)) problems.push(`${where}: status must be one of ${STATUSES.join(", ")}`);
      text(`${where} title`, a.title);
      for (const field of ["summary", "wine", "food", "seasonal", "route"]) text(`${where} ${field}`, a[field], { optional: true });
      if (a.time != null && typeof a.time === "string" && /[A-Za-z]/.test(a.time)) problems.push(`${where}: a worded time must be { en, ka, ru }`);
      if (a.time != null && typeof a.time === "object") text(`${where} time`, a.time);
      for (const topic of a.topics || []) term(`${where} topic`, "topic", topic);
      for (const flag of a.flags || []) term(`${where} flag`, "flag", flag);
      if (a.place && !D.places[a.place]) problems.push(`${where}: unknown place "${a.place}"`);
      if (!a.place && !a.route) problems.push(`${where}: needs a place or a route`);
      for (const p of a.people || []) if (!D.people[p]) problems.push(`${where}: unknown person "${p}"`);
      const links = a.links || {};
      if (links.uvamoWine && !UVAMO_WINE.test(links.uvamoWine)) problems.push(`${where}: uvamoWine is not a …/tasting/<id>/wine/<n> URL`);
      if (links.uvamoSet && !UVAMO_SET.test(links.uvamoSet)) problems.push(`${where}: uvamoSet is not a …/tasting/<id> URL`);
    }
  });
}

// ---------- places and people ----------
for (const [id, p] of Object.entries(D.places)) {
  const where = `place ${id}`;
  text(`${where} name`, p.name);
  text(`${where} description`, p.description);
  text(`${where} locationLabel`, p.locationLabel);
  dictKey(where, "region", p.region);
  if (p.coord && !(Array.isArray(p.coord) && p.coord.length === 2 && p.coord.every(Number.isFinite))) problems.push(`${where}: coord must be [lat, lng]`);
  if (p.coord && (p.coord[0] < 41 || p.coord[0] > 43.6 || p.coord[1] < 40 || p.coord[1] > 46.8)) problems.push(`${where}: coord is outside Georgia`);
}
for (const [id, p] of Object.entries(D.people)) {
  const where = `person ${id}`;
  if (!STATUSES.includes(p.status)) problems.push(`${where}: unknown status`);
  text(`${where} name`, p.name);
  text(`${where} role`, p.role);
  text(`${where} business`, p.business, { optional: true });
  text(`${where} note`, p.note, { optional: true });
  text(`${where} story`, p.story, { optional: true });
  dictKey(where, "region", p.region);
}
for (const p of D.partners) if (!(p.role in UI.en)) problems.push(`partner ${p.name}: role must be an i18n.js key`);
for (const l of D.footerLinks || []) {
  if (!(l.label in UI.en)) problems.push(`footer link ${l.label}: label must be an i18n.js key`);
  const urls = l.url == null ? [] : typeof l.url === "string" ? [l.url] : LANGS.map((code) => l.url[code]);
  if (urls.some((u) => !/^https:\/\/[^\s"]+$/.test(u || ""))) problems.push(`footer link ${l.label}: url must be https (or { en, ka, ru } of https), or null`);
}

if (problems.length) {
  console.log(`data.js / i18n.js: ${problems.length} problem(s)\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log(
  `data.js OK: ${D.tours.length} tours, ${dayCount} days, ${ids.size} activities, ${Object.keys(D.places).length} places, ${Object.keys(D.people).length} people; ` +
    `i18n.js OK: ${keys.length} keys × ${LANGS.length} languages (${LANGS.join(", ")})`,
);
