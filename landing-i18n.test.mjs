import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import vm from "node:vm";

const index = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const privacy = readFileSync(new URL("./privacy/index.html", import.meta.url), "utf8");
const terms = readFileSync(new URL("./terms/index.html", import.meta.url), "utf8");
const notFound = readFileSync(new URL("./404.html", import.meta.url), "utf8");
const source = readFileSync(new URL("./i18n.js", import.meta.url), "utf8");

const context = { URLSearchParams };
vm.runInNewContext(source, context, { filename: "i18n.js" });
const api = context.BackpackerLandingI18n;
const T = api.TRANSLATIONS;
const NBSP = "\u00A0";

// ---------- Локали и ключи ----------

assert.ok(api, "i18n.js must expose its testable locale contract");
assert.deepEqual([...api.SUPPORTED_LOCALES], ["ru", "en", "fr", "ka", "de", "hy", "zh"]);
assert.equal(api.APP_URL, "https://app.clavelo.cc/");
assert.equal(api.CONTACT_EMAIL, "hello@clavelo.cc");

for (const locale of api.SUPPORTED_LOCALES) {
  const appUrl = new URL(api.APP_URL);
  appUrl.searchParams.set("lang", locale);
  assert.equal(appUrl.toString(), `https://app.clavelo.cc/?lang=${locale}`, `${locale} app CTA`);
  assert.deepEqual([...appUrl.searchParams], [["lang", locale]], `${locale} app CTA parameters`);
}

const referenceKeys = Object.keys(T.en).sort();
for (const locale of api.SUPPORTED_LOCALES) {
  assert.deepEqual(Object.keys(T[locale]).sort(), referenceKeys, `${locale} key set`);
  for (const [key, value] of Object.entries(T[locale])) {
    assert.equal(typeof value, "string", `${locale}.${key} must be text`);
    assert.ok(value.trim(), `${locale}.${key} must not be empty`);
  }
  assert.doesNotMatch(T[locale]["footer.privacy"], /English\s*\/\s*Русский/);
}

const referencedKeys = [...index.matchAll(/data-i18n(?:-aria-label|-alt)?="([^"]+)"/g)].map((match) => match[1]);
for (const key of referencedKeys) {
  assert.ok(referenceKeys.includes(key), `missing translation key: ${key}`);
}
// Каждый ключ перевода где-то используется: мёртвых строк в словаре нет.
const runtimeKeys = new Set(["meta.title", "meta.description", "meta.ogTitle", "meta.ogDescription", "pilot.subject"]);
for (const key of referenceKeys) {
  assert.ok(referencedKeys.includes(key) || runtimeKeys.has(key), `unused translation key: ${key}`);
}

const optionLocales = [...index.matchAll(/<option value="([^"]+)"/g)].map((match) => match[1]);
assert.deepEqual(optionLocales, ["ru", "en", "fr", "ka", "de", "hy", "zh"]);

// ---------- Ссылки и CTA ----------

const appLinks = [...index.matchAll(/<a\b[^>]*\bdata-app-link\b[^>]*>/g)].map((match) => match[0]);
assert.equal(appLinks.length, 7, "header, hero, organizer CTA, three traveler frames, closing");
for (const link of appLinks) {
  // Без JS ссылка всё равно ведёт в рабочее приложение.
  assert.match(link, /href="https:\/\/app\.clavelo\.cc\/\?lang=en"/, link);
}

// «Обсудить пилот» — только письмо, без форм и своих маршрутов.
const pilotLinks = [...index.matchAll(/<a\b[^>]*\bdata-pilot-link\b[^>]*>/g)].map((match) => match[0]);
assert.equal(pilotLinks.length, 2, "organizer section and closing");
for (const link of pilotLinks) {
  assert.match(link, /href="mailto:hello@clavelo\.cc\?subject=[^"]+"/, link);
}
for (const locale of api.SUPPORTED_LOCALES) {
  const mailto = new URL(api.pilotMailto(locale));
  assert.equal(mailto.protocol, "mailto:");
  assert.equal(mailto.pathname, "hello@clavelo.cc");
  assert.equal(new URLSearchParams(mailto.search).get("subject"), T[locale]["pilot.subject"], `${locale} pilot subject`);
  assert.match(T[locale]["pilot.subject"], /^Clavelo/, `${locale} pilot subject is branded`);
}
assert.doesNotMatch(index, /<form\b/i, "no lead forms");

// Якоря навигации и ролевых карточек ведут в существующие разделы.
for (const [, anchor] of index.matchAll(/href="#([^"]+)"/g)) {
  assert.match(index, new RegExp(`id="${anchor}"`), `anchor #${anchor} exists`);
}
for (const section of ["travel", "organizers", "guests"]) {
  assert.match(index, new RegExp(`<section class="[^"]+" id="${section}"`), `${section} section`);
}

assert.match(index, /<a href="mailto:hello@clavelo\.cc">hello@clavelo\.cc<\/a>/);
assert.doesNotMatch(index, /dphnll\.ge@gmail\.com/);
assert.doesNotMatch(index, /dphnll\.github\.io\/Backpacker_demo/i);
assert.match(index, /<link rel="canonical" href="https:\/\/clavelo\.cc\/" \/>/);
assert.match(index, /<meta property="og:url" content="https:\/\/clavelo\.cc\/" \/>/);
assert.match(index, /<meta property="og:image" content="https:\/\/clavelo\.cc\/assets\/og-image\.jpg" \/>/);
assert.match(index, /href="https:\/\/chromewebstore\.google\.com\/detail\/clavelo-travel-capture\/okpfmpplfciccfddgibkcoliemfimifc"/);
// Магазинов, кроме опубликованного расширения, нет: ни ссылок, ни бейджей.
const liveMarkup = index.replace(/<!--[\s\S]*?-->/g, "");
assert.doesNotMatch(liveMarkup, /play\.google\.com|apps\.apple\.com|testflight|\.apk\b|Google Play|App Store/i);
// Прямого маршрута в Organizer Mode у приложения нет — и на лендинге его нет.
assert.doesNotMatch(liveMarkup, /app\.clavelo\.cc\/[^"?]+|[?&](?:mode|organizer|share)=/);

// ---------- Снимки ----------

function webpSize(path) {
  const bytes = readFileSync(path);
  assert.equal(bytes.toString("ascii", 0, 4), "RIFF", path);
  assert.equal(bytes.toString("ascii", 8, 12), "WEBP", path);
  const chunk = bytes.toString("ascii", 12, 16);
  if (chunk === "VP8X") return [1 + bytes.readUIntLE(24, 3), 1 + bytes.readUIntLE(27, 3)];
  if (chunk === "VP8 ") return [bytes.readUInt16LE(26) & 0x3fff, bytes.readUInt16LE(28) & 0x3fff];
  if (chunk === "VP8L") {
    const bits = bytes.readUInt32LE(21);
    return [(bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1];
  }
  throw new Error(`unknown WebP chunk ${chunk} in ${path}`);
}

const screenshots = [...index.matchAll(/<img\b[^>]*?data-localized-screenshot="([^"]+)"[^>]*>/gs)].map((match) => ({
  tag: match[0],
  name: match[1],
}));
assert.deepEqual(
  screenshots.map((shot) => shot.name),
  [
    "role-plan.webp",
    "role-guest.webp",
    "role-organizer.webp",
    "role-organizer-program.webp",
    "role-guest-info.webp",
    "role-guest-days.webp",
    "crop-ai.webp",
    "crop-day.webp",
    "crop-budget.webp",
  ],
);
assert.match(source, /assets\/screenshots\/\$\{normalized\}\/\$\{name\}/);
for (const { tag, name } of screenshots) {
  assert.match(tag, new RegExp(`src="\\./assets/screenshots/en/${name.replace(".", "\\.")}"`), `${name} default src`);
  assert.match(tag, /\balt="[^"]+"/, `${name} alt`);
  assert.match(tag, /\bdata-i18n-alt="[^"]+"/, `${name} localized alt`);
  const width = Number(tag.match(/\bwidth="(\d+)"/)?.[1]);
  const height = Number(tag.match(/\bheight="(\d+)"/)?.[1]);
  // Атрибуты резервируют место под кадр до загрузки: они обязаны совпадать
  // с английским кадром, остальные локали отличаются лишь на перенос строки.
  assert.deepEqual([width, height], webpSize(new URL(`./assets/screenshots/en/${name}`, import.meta.url)), `${name} size attributes`);
  for (const locale of api.SUPPORTED_LOCALES) {
    const file = new URL(`./assets/screenshots/${locale}/${name}`, import.meta.url);
    assert.ok(existsSync(file), `${locale} missing ${name}`);
    const [w] = webpSize(file);
    assert.equal(w, width, `${locale}/${name} keeps the shared width`);
    assert.ok(statSync(file).size < 200 * 1024, `${locale}/${name} stays under 200 KB`);
  }
}
// Первый экран грузит только два кадра героя, остальные — лениво.
const eager = screenshots.filter(({ tag }) => !/loading="lazy"/.test(tag)).map(({ name }) => name);
assert.deepEqual(eager, ["role-plan.webp", "role-guest.webp"]);

// ---------- Определение языка ----------

assert.equal(JSON.stringify(api.resolveInitialLocale({ search: "?lang=fr", saved: "ru", languages: ["de-DE"] })), JSON.stringify({
  locale: "ru",
  source: "manual",
}));
assert.equal(JSON.stringify(api.resolveInitialLocale({ saved: "hy", languages: ["de-DE"] })), JSON.stringify({
  locale: "hy",
  source: "manual",
}));
assert.equal(JSON.stringify(api.resolveInitialLocale({ languages: ["it-IT", "ka-GE", "en-US"] })), JSON.stringify({
  locale: "ka",
  source: "browser",
}));
assert.equal(JSON.stringify(api.resolveInitialLocale({ search: "?lang=xx", languages: ["it-IT"] })), JSON.stringify({
  locale: "en",
  source: "fallback",
}));
assert.equal(JSON.stringify(api.resolveInitialLocale({ search: "?lang=zh-Hans", languages: ["en-US"] })), JSON.stringify({
  locale: "zh",
  source: "url",
}));
assert.equal(JSON.stringify(api.resolveInitialLocale({ languages: ["zh-Hant", "zh-TW", "fr-FR"] })), JSON.stringify({
  locale: "fr",
  source: "browser",
}));
assert.equal(api.normalizeLocale("zh-Hans-TW"), "zh");
assert.equal(api.normalizeLocale("zh-Hant-CN"), null);
assert.match(source, /HTML_LANGUAGE_TAGS = \{ zh: "zh-Hans" \}/);

// ---------- Тексты ----------

assert.match(T.fr["meta.description"], /é|è|ê|à|î|ç/);
assert.match(T.de["hero.lead"], /ü|ä|ö|ß/);
assert.match(T.ka["hero.title"], /[\u10A0-\u10FF]/);
assert.match(T.hy["hero.title"], /[\u0530-\u058F]/);
assert.match(T.zh["hero.title"], /[\u3400-\u9FFF]/);

assert.equal(T.ru["hero.title"], "Поездка собрана. Все знают, что дальше");
assert.equal(T.en["hero.title"], "The trip is ready. Everyone knows what’s next");
assert.equal(T.ru["org.title"], "Вы готовите программу. Гости знают, что их ждёт");
assert.deepEqual(
  ["roles.travel.name", "roles.organize.name", "roles.participate.name"].map((key) => T.ru[key]),
  ["Путешествую", "Организую", "Участвую"],
);
assert.match(index, /The trip is ready\. Everyone knows what’s next/);
// Без JS (поисковики, превью ссылок) страница отдаёт ровно английские мета-теги.
assert.ok(index.includes(`<title>${T.en["meta.title"]}</title>`), "static title matches en");
assert.ok(index.includes(`content="${T.en["meta.description"]}"`), "static description matches en");
assert.ok(index.includes(`<meta property="og:title" content="${T.en["meta.ogTitle"]}" />`), "static og:title matches en");

for (const locale of api.SUPPORTED_LOCALES) {
  for (const [key, value] of Object.entries(T[locale])) {
    assert.doesNotMatch(value, /Backpacker|BACKPACKER/, `${locale}.${key}`);
    // Тире — обычное «–», не длинное.
    assert.doesNotMatch(value, /—/, `${locale}.${key} uses an en dash`);
  }
  assert.match(T[locale]["travel.extension"], /Clavelo Travel Capture/, locale);
  // Подсказка про режим организатора цитирует подписи самого приложения.
  assert.match(T[locale]["org.howto"], /→/, `${locale} organizer how-to`);
}

// Немецкий лендинг говорит на «du». Единственное «Sie» — цитата подписи
// кнопки приложения в подсказке про режим организатора.
for (const [key, value] of Object.entries(T.de)) {
  if (key === "org.howto") continue;
  assert.doesNotMatch(value, /\b(?:Sie|Ihnen|Ihre|Ihren|Ihrer|Ihrem|Ihres)\b/, `de.${key}`);
}

// Чего продукт не умеет, того лендинг не обещает.
const NOT_PROMISED = {
  ru: /реальном времени|мгновенн|push|уведомлени|CRM|оплат[аиуы] (?:в|через) Clavelo|автоматическ\w* брон|команд\w* сотрудник|совместн\w* редактир/i,
  en: /real[- ]?time|instant|push|notif|CRM|pay (?:in|through) Clavelo|in-app payment|auto(?:matic(?:ally)?)?[- ]book|team of staff|co-?edit/i,
};
for (const [locale, pattern] of Object.entries(NOT_PROMISED)) {
  for (const [key, value] of Object.entries(T[locale])) {
    assert.doesNotMatch(value, pattern, `${locale}.${key} promises something Clavelo does not do`);
  }
}
// Участнику не обещан вход без регистрации там, где нужен Join.
assert.match(T.ru["guest.note"], /без регистрации[\s\S]*email и имя/);
assert.match(T.en["guest.note"], /without signing up[\s\S]*email and a name/);

// Отдельные фразы — без точки в конце: лейблы, подписи, короткие обещания.
const plainKeys = [...index.matchAll(/data-i18n="([^"]+)"(?![^>]*data-phrases)/g)].map((match) => match[1]);
for (const locale of api.SUPPORTED_LOCALES) {
  for (const key of plainKeys) {
    assert.doesNotMatch(T[locale][key], /[.。։]$/u, `${locale}.${key} is a standalone phrase without a final period`);
  }
}

// ---------- Типографика ----------

assert.equal(api.typograph("Встреча в аэропорту и трансферы", "ru"), `Встреча в${NBSP}аэропорту и${NBSP}трансферы`);
assert.equal(api.typograph("важные детали – в одном плане", "ru"), `важные детали${NBSP}– в${NBSP}одном плане`);
assert.equal(api.typograph("Отель, 2 ночи", "ru"), `Отель, 2${NBSP}ночи`);
assert.equal(api.typograph("Un horaire bouge ?", "fr"), `Un${NBSP}horaire bouge${NBSP}?`);
assert.equal(api.typograph("One link to the program", "en"), `One link to${NBSP}the${NBSP}program`);
assert.equal(api.typograph("行程已就绪。每个人都知道", "zh"), "行程已就绪。每个人都知道");
assert.deepEqual(
  [...api.splitPhrases(T.ru["org.step3.body"])],
  ["Сдвинулось время или поменялось место?", "Поправьте программу.", "По той же ссылке участник откроет актуальную версию и увидит дату обновления."],
);
assert.equal(api.splitPhrases(T.hy["hero.lead"]).length, 2, "Armenian full stop splits phrases");
assert.equal(api.splitPhrases(T.zh["hero.title"]).length, 2, "Chinese full stop splits phrases");

// ---------- Служебные страницы ----------

assert.match(privacy, /<link rel="canonical" href="https:\/\/clavelo\.cc\/privacy\/" \/>/);
assert.match(privacy, /This page: <code>https:\/\/clavelo\.cc\/privacy\/<\/code>/);
assert.match(privacy, /<section id="english" lang="en">/);
assert.match(privacy, /<section id="russian" lang="ru">/);
assert.match(privacy, /Available languages: <code>English \/ Русский<\/code>/);
assert.match(terms, /<meta name="robots" content="noindex, nofollow" \/>/);
assert.match(terms, /<a href="\.\.\/privacy\/">Privacy Policy<\/a>/);
assert.match(notFound, /<link rel="stylesheet" href="\/styles\.css" \/>/);
assert.match(notFound, /<a class="btn btn-primary" href="\/">На\sглавную<\/a>/);
assert.match(notFound, /<a href="\/privacy\/">Политика\sконфиденциальности<\/a>/);

for (const [name, html] of Object.entries({ index, privacy, terms, notFound })) {
  assert.doesNotMatch(html, /Backpacker|BACKPACKER/, name);
}
assert.match(index, /<a class="brand" href="\.\/" aria-label="Clavelo">[\s\S]*?<img src="\.\/assets\/logo\.svg"/);
assert.doesNotMatch(index, /<span>Clavelo<\/span>/);
assert.match(privacy, /Clavelo Travel Capture is the Chrome extension for Clavelo/);
assert.match(source, /const STORAGE_KEY = "backpacker\.landing\.locale"/);
assert.match(source, /globalThis\.BackpackerLandingI18n = api/);

const approvedAssetHashes = {
  "assets/logo.svg": "30E28E319E4A03D74CE100B1F2B56DA212984F1DE2F8124A72AC55E179B24417",
  "assets/clavelo-mark-simple.svg": "D487D317BF996DCA0C98E623F476466AD365AD2C1A6190C5C9106AF2F8B73E52",
  "assets/favicon-16.png": "F4DDFC6422A8B52299F934229018B10F24D7A1E1DC86CA60A2638BB2CD72CED0",
  "assets/favicon-32.png": "DA7D30D0AD3180F40EE5223A733AEFF30ABD75A224C89751BE331CC25A21BF63",
  "assets/favicon-48.png": "DDE54D2B416AE243687591D68AC54AEA5CBD503146683D6F352681194DD42EDD",
  "assets/apple-touch-icon.png": "E4D8E66361B5D139FD50D50722BC9201D5095351B476D60B250CF8AE7B62E9AA",
};
for (const [relativePath, expectedHash] of Object.entries(approvedAssetHashes)) {
  const sourceBytes = readFileSync(new URL(`./${relativePath}`, import.meta.url));
  const bytes = relativePath.endsWith(".svg")
    ? Buffer.from(sourceBytes.toString("utf8").replace(/\r\n?/g, "\n"), "utf8")
    : sourceBytes;
  assert.equal(createHash("sha256").update(bytes).digest("hex").toUpperCase(), expectedHash, relativePath);
}

console.log(`landing locale contract: ${api.SUPPORTED_LOCALES.length} locales, ${referenceKeys.length} keys, ${screenshots.length} localized frames`);
