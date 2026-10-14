import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import vm from "node:vm";

const index = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const privacy = readFileSync(new URL("./privacy/index.html", import.meta.url), "utf8");
const terms = readFileSync(new URL("./terms/index.html", import.meta.url), "utf8");
const notFound = readFileSync(new URL("./404.html", import.meta.url), "utf8");
const source = readFileSync(new URL("./i18n.js", import.meta.url), "utf8");

const context = { URLSearchParams };
vm.runInNewContext(source, context, { filename: "i18n.js" });
const api = context.BackpackerLandingI18n;

assert.ok(api, "i18n.js must expose its testable locale contract");
assert.deepEqual([...api.SUPPORTED_LOCALES], ["ru", "en", "fr", "ka", "de", "hy", "zh"]);
assert.equal(api.APP_URL, "https://app.clavelo.cc/");

for (const locale of api.SUPPORTED_LOCALES) {
  const appUrl = new URL(api.APP_URL);
  appUrl.searchParams.set("lang", locale);
  assert.equal(appUrl.toString(), `https://app.clavelo.cc/?lang=${locale}`, `${locale} app CTA`);
  assert.deepEqual([...appUrl.searchParams], [["lang", locale]], `${locale} app CTA parameters`);
}

const referenceKeys = Object.keys(api.TRANSLATIONS.en).sort();
for (const locale of api.SUPPORTED_LOCALES) {
  assert.deepEqual(Object.keys(api.TRANSLATIONS[locale]).sort(), referenceKeys, `${locale} key set`);
  for (const [key, value] of Object.entries(api.TRANSLATIONS[locale])) {
    assert.equal(typeof value, "string", `${locale}.${key} must be text`);
    assert.ok(value.trim(), `${locale}.${key} must not be empty`);
  }
  assert.doesNotMatch(api.TRANSLATIONS[locale]["footer.privacy"], /English\s*\/\s*Русский/);
  for (const asset of ["shot-home.png", "crop-ai.png", "crop-extension.png", "crop-day.png", "crop-card.png", "crop-budget.png"]) {
    assert.ok(existsSync(new URL(`./assets/screenshots/${locale}/${asset}`, import.meta.url)), `${locale} missing ${asset}`);
  }
}

const referencedKeys = [
  ...index.matchAll(/data-i18n(?:-aria-label|-alt)?="([^"]+)"/g),
].map((match) => match[1]);
for (const key of referencedKeys) {
  assert.ok(referenceKeys.includes(key), `missing translation key: ${key}`);
}

const optionLocales = [...index.matchAll(/<option value="([^"]+)"/g)].map((match) => match[1]);
assert.deepEqual(optionLocales, ["ru", "en", "fr", "ka", "de", "hy", "zh"]);
assert.equal((index.match(/data-app-link/g) || []).length, 7, "all seven app CTAs/captures are marked");
assert.doesNotMatch(index, /dphnll\.github\.io\/Backpacker_demo/i);
assert.match(index, /<link rel="canonical" href="https:\/\/clavelo\.cc\/" \/>/);
assert.match(index, /<meta property="og:url" content="https:\/\/clavelo\.cc\/" \/>/);
assert.match(index, /<meta property="og:image" content="https:\/\/clavelo\.cc\/assets\/og-image\.jpg" \/>/);
assert.match(index, /https:\/\/app\.backpackerapp\.cc\/\?lang=en/);
assert.match(index, /okpfmpplfciccfddgibkcoliemfimifc/);
assert.equal((index.match(/data-localized-screenshot=/g) || []).length, 6);
assert.match(source, /assets\/screenshots\/\$\{normalized\}\/\$\{name\}/);

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

assert.match(api.TRANSLATIONS.fr["meta.description"], /é|è|ê|à|î|ç/);
assert.match(api.TRANSLATIONS.de["hero.foot"], /ü|ä|ö|ß/);
assert.match(api.TRANSLATIONS.ka["hero.title"], /[\u10A0-\u10FF]/);
assert.match(api.TRANSLATIONS.hy["hero.title"], /[\u0530-\u058F]/);
assert.match(api.TRANSLATIONS.zh["hero.title"], /[\u3400-\u9FFF]/);
assert.match(source, /HTML_LANGUAGE_TAGS = \{ zh: "zh-Hans" \}/);

assert.match(privacy, /<link rel="canonical" href="https:\/\/clavelo\.cc\/privacy\/" \/>/);
assert.match(privacy, /This page: <code>https:\/\/clavelo\.cc\/privacy\/<\/code>/);
assert.match(privacy, /<section id="english" lang="en">/);
assert.match(privacy, /<section id="russian" lang="ru">/);
assert.match(privacy, /Available languages: <code>English \/ Русский<\/code>/);
assert.match(terms, /<meta name="robots" content="noindex, nofollow" \/>/);
assert.match(terms, /<a href="\.\.\/privacy\/">Privacy Policy<\/a>/);
assert.match(notFound, /<link rel="stylesheet" href="\/styles\.css" \/>/);
assert.match(notFound, /<a class="btn btn-primary" href="\/">На главную<\/a>/);
assert.match(notFound, /<a href="\/privacy\/">Политика конфиденциальности<\/a>/);

assert.equal(api.TRANSLATIONS.ru["hero.kicker"], "Вся поездка под рукой");
assert.equal(api.TRANSLATIONS.en["hero.kicker"], "Your trip, all together");
assert.equal(api.TRANSLATIONS.ru["hero.title"], "Все детали на месте. Больше свободы путешествовать.");
assert.equal(api.TRANSLATIONS.en["hero.title"], "Every detail in place. More room for the experience.");
assert.equal(api.TRANSLATIONS.ru["hero.bullet.budget"], "Бюджет и расходы поездки");
assert.equal(api.TRANSLATIONS.en["hero.bullet.budget"], "Trip budget and costs");
assert.deepEqual(
  [1, 2, 3].map((line) => api.TRANSLATIONS.ru[`organizer.body${line}`]),
  [
    "Составляйте и обновляйте программу тура по мере изменений.",
    "Публикуйте для участников программу, стоимость, условия и необходимые материалы.",
    "Внутренняя смета остаётся приватной.",
  ],
);

assert.equal(
  api.TRANSLATIONS.de["hero.lead"],
  "Buchungen, Orte, Pläne, Dateien und Kosten bleiben zusammen. Verwalte deine eigene Reise oder teile ein aktuelles Programm mit deiner Gruppe.",
);
assert.deepEqual(
  [1, 2, 3].map((line) => api.TRANSLATIONS.de[`organizer.body${line}`]),
  [
    "Erstelle und aktualisiere das Reiseprogramm, wenn sich Pläne ändern.",
    "Teile das aktuelle Programm, den Preis, die Bedingungen und ausgewählte Unterlagen mit den Teilnehmenden.",
    "Halte deine interne Kalkulation privat.",
  ],
);
for (const key of ["hero.lead", "organizer.body1", "organizer.body2", "organizer.body3", "closing.title"]) {
  assert.doesNotMatch(api.TRANSLATIONS.de[key], /\b(?:Sie|Ihnen|Ihre|Ihren|Ihrer|Ihrem|Ihres)\b/, `de.${key}`);
}
assert.deepEqual(
  [1, 2, 3].map((line) => api.TRANSLATIONS.en[`organizer.body${line}`]),
  [
    "Create and update the trip program as plans change.",
    "Share the current program, price, terms and selected materials with participants.",
    "Keep your internal budget private.",
  ],
);

for (const locale of api.SUPPORTED_LOCALES) {
  for (const [key, value] of Object.entries(api.TRANSLATIONS[locale])) {
    const withoutPublishedExtensionName = value.replaceAll("Backpacker Travel Capture", "");
    assert.doesNotMatch(withoutPublishedExtensionName, /Backpacker|BACKPACKER/, `${locale}.${key}`);
  }
  assert.match(api.TRANSLATIONS[locale]["extension.body1"], /Backpacker Travel Capture/, locale);
}

for (const [name, html] of Object.entries({ index, privacy, terms, notFound })) {
  const withoutExtensionTransition = html
    .replaceAll("Backpacker Travel Capture", "")
    .replaceAll('"Save to Backpacker"', "")
    .replaceAll("«Сохранить в Backpacker»", "");
  assert.doesNotMatch(withoutExtensionTransition, /Backpacker|BACKPACKER/, name);
}
assert.match(index, /<a class="brand" href="\.\/" aria-label="Clavelo">[\s\S]*?<img src="\.\/assets\/logo\.svg"/);
assert.doesNotMatch(index, /<span>Clavelo<\/span>/);
assert.match(index, /Every detail in place\. More room for the experience\./);
assert.match(privacy, /Backpacker Travel Capture is the Chrome extension currently\s+published for Clavelo/);
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

console.log(`landing locale contract: ${api.SUPPORTED_LOCALES.length} locales, ${referenceKeys.length} keys`);
