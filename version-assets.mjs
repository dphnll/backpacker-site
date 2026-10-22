// Ставит версию на адреса изменяемых файлов лендинга.
//
//   node version-assets.mjs           — пересчитать и вписать версию
//   node version-assets.mjs --check   — только проверить (код выхода 1, если устарела)
//
// Зачем. На домене clavelo.cc Cloudflare отдаёт HTML с max-age=0, а CSS, JS и
// картинки — с max-age=14400 (Browser Cache TTL зоны, 4 часа). Адреса у
// styles.css и i18n.js одинаковые во всех выпусках, поэтому вернувшийся
// посетитель получал свежий HTML и старые CSS/JS из своего кэша: новая
// разметка со старыми стилями и старыми текстами. Так сломался первый
// выпуск v2 и так же ломался откат у тех, кто успел увидеть v2.
//
// Версия — первые 10 знаков sha256 от содержимого styles.css, i18n.js и всех
// снимков интерфейса. HTML всегда свежий и ссылается на файлы ровно своей
// версии: изменился файл — изменился адрес, старый кэш просто не участвует.
// Фото, карта, шрифты и логотип не версионируются: их адреса неизменяемы —
// новое содержимое кладётся под новым именем файла.
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const CHECK = process.argv.includes("--check");
const TOKEN_IN_JS = /const ASSET_VERSION = "[0-9a-f]*";/;

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

// Текст сравнивается без учёта переводов строк: на Windows git отдаёт CRLF,
// в репозитории LF — версия не должна зависеть от машины.
const text = (path) => readFileSync(path, "utf8").replace(/\r\n?/g, "\n");

export function computeVersion() {
  const hash = createHash("sha256");
  hash.update(text(join(HERE, "styles.css")));
  hash.update(text(join(HERE, "i18n.js")).replace(TOKEN_IN_JS, 'const ASSET_VERSION = "";'));
  for (const path of walk(join(HERE, "assets", "screenshots")).sort()) {
    hash.update(relative(HERE, path).replaceAll("\\", "/"));
    hash.update(readFileSync(path));
  }
  return hash.digest("hex").slice(0, 10);
}

const version = computeVersion();
const v = `?v=${version}`;
const RULES = {
  "index.html": [
    [/(href="\.\/styles\.css)(\?v=[0-9a-f]*)?"/g, `$1${v}"`],
    [/(src="\.\/i18n\.js)(\?v=[0-9a-f]*)?"/g, `$1${v}"`],
    [/(src="\.\/assets\/screenshots\/en\/[\w.-]+\.webp)(\?v=[0-9a-f]*)?"/g, `$1${v}"`],
  ],
  "privacy/index.html": [[/(href="\.\.\/styles\.css)(\?v=[0-9a-f]*)?"/g, `$1${v}"`]],
  "terms/index.html": [[/(href="\.\.\/styles\.css)(\?v=[0-9a-f]*)?"/g, `$1${v}"`]],
  "404.html": [[/(href="\/styles\.css)(\?v=[0-9a-f]*)?"/g, `$1${v}"`]],
  "i18n.js": [[TOKEN_IN_JS, `const ASSET_VERSION = "${version}";`]],
};

const stale = [];
for (const [file, rules] of Object.entries(RULES)) {
  const path = join(HERE, file);
  const before = readFileSync(path, "utf8");
  let after = before;
  for (const [pattern, replacement] of rules) {
    if (!pattern.test(after)) throw new Error(`${file}: не найдено ${pattern}`);
    pattern.lastIndex = 0;
    after = after.replace(pattern, replacement);
  }
  if (after !== before) {
    stale.push(file);
    if (!CHECK) writeFileSync(path, after, "utf8");
  }
}

if (CHECK && stale.length) {
  console.log(`версия ассетов устарела (${stale.join(", ")}). Запустите: node version-assets.mjs`);
  process.exit(1);
}
console.log(`asset version ${version}${stale.length && !CHECK ? ` → ${stale.join(", ")}` : " — актуальна"}`);
