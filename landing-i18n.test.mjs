import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const index = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const privacy = readFileSync(new URL("./privacy/index.html", import.meta.url), "utf8");
const source = readFileSync(new URL("./i18n.js", import.meta.url), "utf8");

const context = { URLSearchParams };
vm.runInNewContext(source, context, { filename: "i18n.js" });
const api = context.BackpackerLandingI18n;

assert.ok(api, "i18n.js must expose its testable locale contract");
assert.deepEqual([...api.SUPPORTED_LOCALES], ["ru", "en", "fr", "ka", "de", "hy"]);

const referenceKeys = Object.keys(api.TRANSLATIONS.en).sort();
for (const locale of api.SUPPORTED_LOCALES) {
  assert.deepEqual(Object.keys(api.TRANSLATIONS[locale]).sort(), referenceKeys, `${locale} key set`);
  for (const [key, value] of Object.entries(api.TRANSLATIONS[locale])) {
    assert.equal(typeof value, "string", `${locale}.${key} must be text`);
    assert.ok(value.trim(), `${locale}.${key} must not be empty`);
  }
}

const referencedKeys = [
  ...index.matchAll(/data-i18n(?:-aria-label|-alt)?="([^"]+)"/g),
].map((match) => match[1]);
for (const key of referencedKeys) {
  assert.ok(referenceKeys.includes(key), `missing translation key: ${key}`);
}

const optionLocales = [...index.matchAll(/<option value="([^"]+)"/g)].map((match) => match[1]);
assert.deepEqual(optionLocales, ["ru", "en", "fr", "ka", "de", "hy"]);
assert.equal((index.match(/data-app-link/g) || []).length, 7, "all seven app CTAs/captures are marked");
assert.doesNotMatch(index, /dphnll\.github\.io\/Backpacker_demo/i);
assert.match(index, /https:\/\/backpackerapp\.cc\//);
assert.match(index, /https:\/\/app\.backpackerapp\.cc\/\?lang=en/);
assert.match(index, /okpfmpplfciccfddgibkcoliemfimifc/);

assert.equal(JSON.stringify(api.resolveInitialLocale({ search: "?lang=fr", saved: "ru", languages: ["de-DE"] })), JSON.stringify({
  locale: "fr",
  explicit: true,
}));
assert.equal(JSON.stringify(api.resolveInitialLocale({ saved: "hy", languages: ["de-DE"] })), JSON.stringify({
  locale: "hy",
  explicit: true,
}));
assert.equal(JSON.stringify(api.resolveInitialLocale({ languages: ["it-IT", "ka-GE", "en-US"] })), JSON.stringify({
  locale: "ka",
  explicit: false,
}));
assert.equal(JSON.stringify(api.resolveInitialLocale({ search: "?lang=xx", languages: ["it-IT"] })), JSON.stringify({
  locale: "en",
  explicit: false,
}));

assert.match(api.TRANSLATIONS.fr["meta.description"], /é|è|ê|à|î|ç/);
assert.match(api.TRANSLATIONS.de["hero.foot"], /ü|ä|ö|ß/);
assert.match(api.TRANSLATIONS.ka["hero.title"], /[\u10A0-\u10FF]/);
assert.match(api.TRANSLATIONS.hy["hero.title"], /[\u0530-\u058F]/);

assert.match(privacy, /https:\/\/backpackerapp\.cc\/privacy\//);
assert.match(privacy, /<section id="english" lang="en">/);
assert.match(privacy, /<section id="russian" lang="ru">/);
assert.match(privacy, /Available languages: <code>English \/ Русский<\/code>/);

console.log(`landing locale contract: ${api.SUPPORTED_LOCALES.length} locales, ${referenceKeys.length} keys`);
