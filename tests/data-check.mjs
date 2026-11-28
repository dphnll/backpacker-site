// Checks data.js and i18n.js after editing — no browser, no dependencies.
//   node tests/data-check.mjs
//
// Besides links between activities, places and people, it checks that every
// visitor-facing text exists in all three languages, so a new activity or tour
// cannot go live in English only.
import { existsSync, readFileSync } from "node:fs";
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
const UNTRANSLATED = new Set(["ChkhaValley Winery", "WIWI Tours", "UVAMO!", "Clavelo", "Exponati"]);
const BRAND_WORDS = /Grenoble École de Management|WSET Level 3|MBA|WIWI|UVAMO!?|ChkhaValley(?: Winery)?|Clavelo|Simonica|Simonika|Argvani|Exponati|Sisters|Three Sisters|Baia.?s Wine|Sarishvili|Sarajishvili|Facebook|Instagram|A 7-Day Boutique Wine & Culinary Journey/g;
// Centuries are written as Roman numerals (XIII, XVII) in KA and RU.
const ROMAN = /\b[IVXLC]+\b/g;
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
  if (value.ka && /[A-Za-z]{4,}/.test(value.ka.replace(BRAND_WORDS, "").replace(ROMAN, ""))) {
    problems.push(`${where}: KA text contains Latin words: "${value.ka.slice(0, 40)}"`);
  }
  if (value.ru && /[A-Za-z]{4,}/.test(value.ru.replace(BRAND_WORDS, "").replace(ROMAN, ""))) {
    problems.push(`${where}: RU text contains Latin words: "${value.ru.slice(0, 40)}"`);
  }
}
const term = (where, kind, value) => (typeof value === "string" ? dictKey(where, kind, value) : text(where, value));

// ---------- tours, days, activities ----------
const ids = new Set();
const sightUse = new Map();
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
      text(`${where} sightNote`, a.sightNote, { optional: true });
      if (a.sights && a.type !== "excursion") problems.push(`${where}: sight cards belong to excursion activities`);
      for (const sid of a.sights || []) {
        if (!D.places[sid]?.sight) problems.push(`${where}: "${sid}" is not a sight place`);
        sightUse.set(sid, (sightUse.get(sid) || 0) + 1);
      }
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
  if (p.sight) {
    text(`${where} summary`, p.summary);
    if (/[.!]$/.test(p.summary?.en || "")) problems.push(`${where}: card summary should not end with a full stop`);
    const words = (p.description?.en || "").split(/\s+/).filter(Boolean).length;
    if (words < 60 || words > 100) problems.push(`${where}: EN description has ${words} words (expected 60–100)`);
    if (!p.coord) problems.push(`${where}: a sight needs map coordinates`);
    if (!/^\.\/assets\/places\/[a-z0-9-]+\.webp$/.test(p.photo || "")) problems.push(`${where}: sight photo must be a local ./assets/places/*.webp file`);
    const c = p.photoCredit || {};
    if (!c.author || !c.license || !/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(c.source || "") || !/^https:\/\//.test(c.licenseUrl || "")) {
      problems.push(`${where}: photoCredit needs author, license, licenseUrl and a Wikimedia Commons source`);
    }
    if (!/^(CC BY(-SA)? [0-9.]+|CC0|Public domain)$/.test(c.license || "")) problems.push(`${where}: unexpected photo licence "${c.license}"`);
  }
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
  text(`${where} card story`, p.cardStory, { optional: true });
  text(`${where} location`, p.location, { optional: true });
  text(`${where} wines`, p.wines, { optional: true });
  dictKey(where, "region", p.region);
  for (const field of ["photo", "logo", "seasonalPhoto"]) {
    if (p[field] && !/^\.\/assets\/[A-Za-z0-9_./-]+\.(?:jpg|jpeg|png|webp|svg)$/i.test(p[field])) problems.push(`${where}: ${field} must be a local asset`);
    if (p[field] && !existsSync(new URL(`../${p[field].slice(2)}`, import.meta.url))) problems.push(`${where}: ${field} asset is missing`);
  }
  if (p.seasonalPhoto) {
    text(`${where} seasonal photo alt`, p.seasonalPhotoAlt);
    text(`${where} seasonal photo caption`, p.seasonalPhotoCaption);
  }
  for (const [i, item] of (p.gallery || []).entries()) {
    if (!/^\.\/assets\/[A-Za-z0-9_./-]+\.(?:jpg|jpeg|png|webp|svg)$/i.test(item.src || "")) problems.push(`${where}: gallery ${i + 1} must be a local asset`);
    if (!["winery", "food", "wine", "atmosphere"].includes(item.kind)) problems.push(`${where}: gallery ${i + 1} has an unknown kind`);
    text(`${where} gallery ${i + 1} alt`, item.alt);
  }
  for (const [kind, url] of Object.entries(p.links || {})) {
    if (!["website", "instagram", "facebook", "wiwi"].includes(kind)) problems.push(`${where}: unknown link kind "${kind}"`);
    if (!/^https:\/\/[^\s"]+$/.test(url || "")) problems.push(`${where}: ${kind} must be a complete https URL`);
  }
}
for (const p of D.partners) if (!(p.role in UI.en)) problems.push(`partner ${p.name}: role must be an i18n.js key`);
for (const l of D.footerLinks || []) {
  if (!(l.label in UI.en)) problems.push(`footer link ${l.label}: label must be an i18n.js key`);
  const urls = l.url == null ? [] : typeof l.url === "string" ? [l.url] : LANGS.map((code) => l.url[code]);
  if (urls.some((u) => !/^https:\/\/[^\s"]+$/.test(u || ""))) problems.push(`footer link ${l.label}: url must be https (or { en, ka, ru } of https), or null`);
}
if (D.footerCredit) {
  const c = D.footerCredit;
  if (!(c.label in UI.en)) problems.push(`footer credit: label must be an i18n.js key`);
  const urls = c.url == null ? [] : typeof c.url === "string" ? [c.url] : LANGS.map((code) => c.url[code]);
  if (urls.some((u) => !/^https:\/\/[^\s"]+$/.test(u || ""))) problems.push(`footer credit: url must be https (or { en, ka, ru } of https), or null`);
}

// 25 November route invariants: prevent a quiet return of the superseded base tour.
const west = D.tours.find((tour) => tour.id === "west");
const westText = JSON.stringify(west);
for (const stale of ["Miranda", "Миранда", "მირანდა", "Lomtadze", "Ломтадзе", "ლომთაძე", "Khvanchkara", "Хванчкара", "ხვანჭკარა", "Lechkhumi", "Лечхуми", "ლეჩხუმი"]) {
  if (westText.includes(stale)) problems.push(`west route: stale base-tour content "${stale}"`);
}
for (const id of ["d2-chkhavalley", "d2-sarishvili", "d3-argvani", "d4-simonica", "d5-exponati"]) {
  if (!ids.has(id)) problems.push(`west route: missing required activity "${id}"`);
}
// 27 November cultural programme: every approved sight is shown on its day; Gelati is out of this edition.
const APPROVED_SIGHTS = {
  1: ["old-batumi", "europe-square", "piazza", "batumi-boulevard"],
  2: ["makhuntseti", "tamar-bridge", "shekvetili", "kutaisi-centre", "white-bridge"],
  3: ["martvili-canyon", "martvili-monastery", "okatse", "prometheus"],
  4: ["ubisi"],
  5: ["metekhi", "abanotubani", "leghvtakhevi", "svetitskhoveli", "jvari"],
  6: ["dry-bridge"],
};
for (const [n, sights] of Object.entries(APPROVED_SIGHTS)) {
  const day = west?.days?.find((d) => d.n === Number(n));
  const shown = (day?.activities || []).flatMap((a) => a.sights || []);
  for (const sid of sights) if (!shown.includes(sid)) problems.push(`west route: approved sight "${sid}" missing from day ${n}`);
}
const martvili = west?.days?.[2]?.activities.find((a) => (a.sights || []).includes("martvili-canyon"));
if (!martvili?.sightChoice || !/weather/i.test(martvili?.sightNote?.en || "")) problems.push("west route: Martvili canyon / monastery must be shown as a weather-dependent choice");
for (const [sid, count] of sightUse) if (count > 1) problems.push(`sight "${sid}" appears in ${count} activities`);
if (/gelati|გელათ|гелати/i.test(westText) || D.places.gelati) problems.push("west route: Gelati is not part of the current programme");
if (JSON.stringify(D).includes("Жахуа")) problems.push('spelling: Khatia Jakhua is "Хатия Джахуа" in Russian');
if (west?.days?.length !== 6) problems.push("west route: must remain a six-day working route");
if (!/^https:\/\/app\.clavelo\.cc\/\?share=[a-f0-9]{64}$/.test(west?.clavelo?.url || "")) {
  problems.push("west route: expected the verified public Clavelo share URL");
}

if (problems.length) {
  console.log(`data.js / i18n.js: ${problems.length} problem(s)\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log(
  `data.js OK: ${D.tours.length} tours, ${dayCount} days, ${ids.size} activities, ${Object.keys(D.places).length} places, ${Object.keys(D.people).length} people; ` +
    `i18n.js OK: ${keys.length} keys × ${LANGS.length} languages (${LANGS.join(", ")})`,
);
