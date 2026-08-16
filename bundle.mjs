// Собирает самодостаточные HTML-файлы для показа без сервера:
// стили, шрифты и картинки вшиваются как data:-строки.
// Исходники сайта не меняются — читаем их и пишем результат в ./preview.
//
//   node bundle.mjs [папка-назначения]
//
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Пути считаются от самого скрипта: репозиторий можно клонировать куда угодно.
const SITE = dirname(fileURLToPath(import.meta.url));
const OUT = process.argv[2] || join(SITE, "preview");
mkdirSync(OUT, { recursive: true });

const MIME = {
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

const dataUri = (rel) => {
  const p = join(SITE, rel.replace(/^\.\//, "").replace(/^\.\.\//, ""));
  const buf = readFileSync(p);
  return `data:${MIME[extname(p)] || "application/octet-stream"};base64,${buf.toString("base64")}`;
};

// Стили общие для обеих страниц; пути внутри CSS тоже вшиваем.
let css = readFileSync(join(SITE, "styles.css"), "utf8");
css = css.replace(/url\("\.\/(fonts|assets)\/([^"]+)"\)/g, (m, dir, file) =>
  `url("${dataUri(`${dir}/${file}`)}")`,
);

function bundle(srcRel, outName, opts = {}) {
  let html = readFileSync(join(SITE, srcRel), "utf8");

  html = html.replace(
    /<link rel="stylesheet" href="[^"]*styles\.css"\s*\/?>/,
    `<style>\n${css}\n</style>`,
  );
  html = html.replace(/href="([^"]*assets\/[^"]+)"/g, (m, p) => `href="${dataUri(p)}"`);
  html = html.replace(/src="([^"]*assets\/[^"]+)"/g, (m, p) => `src="${dataUri(p)}"`);

  // Ссылки между страницами внутри пакета
  for (const [from, to] of Object.entries(opts.links || {})) {
    html = html.split(`href="${from}"`).join(`href="${to}"`);
  }

  // Канонический адрес в оффлайн-копии только путал бы поисковик
  html = html.replace(/\s*<link rel="canonical"[^>]*>/, "");
  html = html.replace(
    /<head>/,
    `<head>\n    <!-- Автономная копия для просмотра без сервера: стили, шрифты\n         и снимки вшиты в файл. Собрано bundle.mjs, исходники не менялись. -->`,
  );

  const path = join(OUT, outName);
  writeFileSync(path, html, "utf8");
  console.log(`${outName}  ${Math.round(Buffer.byteLength(html, "utf8") / 1024)} КБ`);
}

bundle("index.html", "Backpacker-лендинг.html", {
  links: {
    "./privacy/": "./Backpacker-политика-конфиденциальности.html",
    // Логотип в шапке и подвале ведёт на корень сайта; в автономной
    // копии корня нет, поэтому он ведёт на саму страницу.
    "./": "./Backpacker-лендинг.html",
  },
});
bundle("privacy/index.html", "Backpacker-политика-конфиденциальности.html", {
  links: { "../": "./Backpacker-лендинг.html" },
});
