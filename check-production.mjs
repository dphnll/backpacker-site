// Проверяет, что опубликованный лендинг отдаёт файлы одной версии.
//
//   node check-production.mjs                     — https://clavelo.cc/
//   node check-production.mjs https://<preview>/  — любой другой адрес
//
// Читает HTML так, как его получает браузер, берёт из него версию CSS и JS
// (?v=…) и сверяет её с тем, что реально отдаёт сервер: i18n.js должен
// содержать ту же ASSET_VERSION, все версионированные файлы — отвечать 200.
// Заодно печатает заголовки кэша: HTML обязан быть max-age=0.
const base = new URL(process.argv[2] || "https://clavelo.cc/");
const bust = `cb=${Date.now()}`; // мимо промежуточных кэшей на пути проверки
const get = async (path) => {
  const url = new URL(path, base);
  url.search = url.search ? `${url.search}&${bust}` : `?${bust}`;
  const res = await fetch(url, { headers: { "cache-control": "no-cache" } });
  return { res, body: await res.text() };
};

const failures = [];
const { res: page, body: html } = await get("./");
const versions = [...html.matchAll(/(?:styles\.css|i18n\.js|\.webp)\?v=([0-9a-f]{10})"/g)].map((m) => m[1]);
const unique = [...new Set(versions)];
console.log(`HTML ${page.status}, cache-control: ${page.headers.get("cache-control")}`);
console.log(`versioned references: ${versions.length}, versions: ${unique.join(", ") || "—"}`);
if (unique.length !== 1) failures.push(`в HTML должна быть ровно одна версия ассетов, найдено: ${unique.length}`);
if (!/max-age=0/.test(page.headers.get("cache-control") || "")) failures.push("HTML кэшируется: ожидался max-age=0");

const version = unique[0];
if (version) {
  const { res: js, body: jsBody } = await get(`./i18n.js?v=${version}`);
  const jsVersion = jsBody.match(/const ASSET_VERSION = "([0-9a-f]*)";/)?.[1];
  console.log(`i18n.js ${js.status}, ASSET_VERSION ${jsVersion}, cache-control: ${js.headers.get("cache-control")}`);
  if (jsVersion !== version) failures.push(`i18n.js другой версии: ${jsVersion} вместо ${version}`);
  const { res: css } = await get(`./styles.css?v=${version}`);
  console.log(`styles.css ${css.status}, cache-control: ${css.headers.get("cache-control")}`);
  if (css.status !== 200) failures.push(`styles.css ${css.status}`);
  for (const [, path] of html.matchAll(/src="(\.\/assets\/[^"]+\?v=[0-9a-f]{10})"/g)) {
    const { res } = await get(path);
    if (res.status !== 200) failures.push(`${path} ${res.status}`);
  }
}

for (const legal of ["privacy/", "terms/"]) {
  const { res, body } = await get(`./${legal}`);
  const v = body.match(/styles\.css\?v=([0-9a-f]{10})/)?.[1];
  console.log(`/${legal} ${res.status}, CSS version ${v}`);
  if (res.status !== 200 || v !== version) failures.push(`/${legal}: версия CSS ${v} вместо ${version}`);
}

if (failures.length) {
  console.log("\nFAIL\n- " + failures.join("\n- "));
  process.exit(1);
}
console.log(`\nOK: ${base.origin} отдаёт HTML, CSS, JS и снимки одной версии ${version}`);
