// Перекодирует PNG-кадры лендинга в WebP. Ноль зависимостей: кодирует сам
// headless Chrome (canvas.toDataURL), CDP через встроенный в Node WebSocket.
//
//   node to-webp.mjs crop-ai crop-day crop-budget
//
// Берёт assets/screenshots/<locale>/<name>.png для всех семи локалей и
// кладёт рядом <name>.webp того же размера в пикселях. PNG не удаляет.
// Переменные окружения: QUALITY (0–1, по умолчанию 0.84), CHROME.
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const LOCALES = ["ru", "en", "fr", "ka", "de", "hy", "zh"];
const NAMES = process.argv.slice(2);
const QUALITY = Number(process.env.QUALITY || 0.84);
if (!NAMES.length) {
  console.log("Укажите имена кадров без расширения: node to-webp.mjs crop-ai crop-day");
  process.exit(1);
}
const CHROME =
  process.env.CHROME ||
  [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].find((p) => existsSync(p));
if (!CHROME) throw new Error("Chrome не найден. Укажите путь: CHROME=... node to-webp.mjs");

const PORT = 9335;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const PROFILE = join(tmpdir(), "clavelo-to-webp");
rmSync(PROFILE, { recursive: true, force: true });
mkdirSync(PROFILE, { recursive: true });
const chrome = spawn(CHROME, ["--headless=new", `--remote-debugging-port=${PORT}`, `--user-data-dir=${PROFILE}`, "about:blank"]);
chrome.stderr.on("data", () => {});

let wsUrl = null;
for (let i = 0; i < 60 && !wsUrl; i++) {
  await sleep(300);
  try { wsUrl = (await (await fetch(`http://127.0.0.1:${PORT}/json/version`)).json()).webSocketDebuggerUrl; } catch {}
}
if (!wsUrl) throw new Error("Chrome не поднялся");
const ws = new WebSocket(wsUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
let id = 0;
const pending = new Map();
ws.onmessage = (m) => {
  const msg = JSON.parse(m.data);
  if (!msg.id || !pending.has(msg.id)) return;
  const { res, rej } = pending.get(msg.id);
  pending.delete(msg.id);
  msg.error ? rej(new Error(JSON.stringify(msg.error))) : res(msg.result);
};
const send = (method, params = {}, sessionId) => new Promise((res, rej) => {
  const n = ++id;
  pending.set(n, { res, rej });
  ws.send(JSON.stringify({ id: n, method, params, sessionId }));
});
const { targetInfos } = await send("Target.getTargets");
const page = targetInfos.find((t) => t.type === "page");
const { sessionId } = await send("Target.attachToTarget", { targetId: page.targetId, flatten: true });

const report = [];
for (const locale of LOCALES) {
  for (const name of NAMES) {
    const src = join(HERE, "assets", "screenshots", locale, `${name}.png`);
    if (!existsSync(src)) throw new Error(`нет файла: ${src}`);
    const png = readFileSync(src).toString("base64");
    const { result, exceptionDetails } = await send("Runtime.evaluate", {
      expression: `(async () => {
        const image = new Image();
        image.src = "data:image/png;base64,${png}";
        await image.decode();
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        canvas.getContext("2d").drawImage(image, 0, 0);
        return canvas.toDataURL("image/webp", ${QUALITY});
      })()`,
      awaitPromise: true,
      returnByValue: true,
    }, sessionId);
    if (exceptionDetails) throw new Error(`${src}: ${exceptionDetails.text}`);
    const webp = Buffer.from(result.value.split(",")[1], "base64");
    writeFileSync(src.replace(/\.png$/, ".webp"), webp);
    report.push(`${locale}/${name}: ${Math.round(readFileSync(src).length / 1024)} → ${Math.round(webp.length / 1024)} KB`);
  }
}
console.log(report.join("\n"));
ws.close();
chrome.kill();
process.exit(0);
