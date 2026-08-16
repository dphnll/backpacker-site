// Неразрывные пробелы по правилам русской типографики.
// Работает только по текстовым узлам: строка режется на теги и текст,
// теги не трогаются вообще — значит атрибуты, классы и пути не пострадают.
import { readFileSync, writeFileSync } from "node:fs";

const NBSP = " ";

// Предлоги и союзы длиной 1–3 буквы: приклеиваются к СЛЕДУЮЩЕМУ слову.
// Буквы кириллические, поэтому английский текст в privacy не затрагивается.
const BEFORE = [
  "в", "во", "к", "ко", "о", "об", "обо", "с", "со", "у", "из", "изо",
  "на", "за", "до", "по", "от", "ото", "при", "для", "над", "под", "про",
  "без", "и", "а", "но", "или", "да", "не", "ни", "что", "как", "то",
];

// Частицы: приклеиваются к ПРЕДЫДУЩЕМУ слову.
const AFTER = ["же", "ли", "бы", "б"];

const reBefore = new RegExp(
  `(^|[\\s(«"'—-])(${BEFORE.join("|")})\\s+(?=[\\wА-Яа-яЁё«(])`,
  "gi",
);
const reAfter = new RegExp(`\\s+(${AFTER.join("|")})(?=[\\s.,;:!?)»])`, "gi");

function fixText(t) {
  let out = t;
  // Тире не начинает строку: пробел перед ним становится неразрывным.
  out = out.replace(/\s+—/g, NBSP + "—");
  out = out.replace(/\s+=/g, NBSP + "=");
  out = out.replace(reBefore, (m, pre, word) => pre + word + NBSP);
  out = out.replace(reAfter, (m, word) => NBSP + word);
  // Разряды в числах и знак валюты тоже не рвутся.
  out = out.replace(/(\d)\s+(?=\d{3}\b)/g, "$1" + NBSP);
  out = out.replace(/\s+(₽|руб\.)/g, NBSP + "$1");
  return out;
}

let total = 0;
for (const file of process.argv.slice(2)) {
  const src = readFileSync(file, "utf8");
  // Чётные куски — текст, нечётные — теги и комментарии.
  const parts = src.split(/(<!--[\s\S]*?-->|<[^>]*>)/);
  let changed = 0;
  const out = parts
    .map((p, i) => {
      if (i % 2 === 1) return p;
      const fixed = fixText(p);
      if (fixed !== p) changed += (fixed.match(/ /g) || []).length - (p.match(/ /g) || []).length;
      return fixed;
    })
    .join("");
  writeFileSync(file, out, "utf8");
  console.log(`${file.split(/[\\/]/).slice(-2).join("/")}: +${changed} неразрывных`);
  total += changed;
}
console.log("итого: " + total);
