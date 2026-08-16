// Проверяет, что собранная bundle.mjs копия действительно самодостаточна:
// ни одной ссылки на соседний файл, ни одного url() на диск.
//
//   node verify.mjs preview/Backpacker-лендинг.html [ещё файлы...]
//
import { readFileSync } from "node:fs";

const files = process.argv.slice(2);
if (!files.length) {
  console.log("укажите файлы для проверки");
  process.exit(1);
}

let problems = 0;
for (const f of files) {
  const s = readFileSync(f, "utf8");
  const leftovers = [...s.matchAll(/(?:src|href)="(\.\/[^"]*|\.\.\/[^"]*)"/g)].map((m) => m[1]);
  const cssUrls = [...s.matchAll(/url\("(?!data:)([^"]+)"\)/g)].map((m) => m[1]);
  const imgs = (s.match(/src="data:image/g) || []).length;
  const fonts = (s.match(/url\("data:font/g) || []).length;
  const ext = [...new Set([...s.matchAll(/(?:src|href)="(https?:\/\/[^"]+)"/g)].map((m) => m[1]))];

  // Ссылки на соседние страницы пакета — это норма, всё остальное — нет.
  const stray = leftovers.filter((l) => !l.endsWith(".html"));

  console.log(f.split(/[\\/]/).pop());
  console.log(`  вшито картинок: ${imgs}, шрифтов: ${fonts}`);
  console.log(`  ссылки внутри пакета: ${[...new Set(leftovers)].join(", ") || "нет"}`);
  console.log(`  внешние адреса: ${ext.join(", ") || "нет"}`);
  if (stray.length || cssUrls.length) {
    problems++;
    console.log(`  ПРОБЛЕМА: осталось на диск — ${[...stray, ...cssUrls].join(", ")}`);
  }
}
process.exit(problems ? 1 : 0);
