// Снимает кадры Backpacker для лендинга.
// Ноль зависимостей: headless Chrome + CDP через встроенный в Node WebSocket.
//
//   node capture.mjs
//
// Переменные окружения:
//   APP_URL   — какую сборку снимать (по умолчанию публичное демо)
//   OUT_DIR   — куда класть кадры (по умолчанию ./assets рядом со скриптом)
//   CHROME    — путь к Chrome, если он лежит не в стандартном месте
//
import { spawn } from "node:child_process";
import { writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";

const HERE = dirname(fileURLToPath(import.meta.url));

// Путь к Chrome не зашит: сначала переменная окружения, потом обычные места.
const CHROME =
  process.env.CHROME ||
  [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].find((p) => existsSync(p));

if (!CHROME) {
  console.log("Chrome не найден. Укажите путь: CHROME=... node capture.mjs");
  process.exit(1);
}

const APP = process.env.APP_URL || "https://dphnll.github.io/Backpacker_demo/";
const OUT = process.env.OUT_DIR || join(HERE, "assets");
const PROFILE = join(tmpdir(), "bp-capture-profile");
const PORT = 9333;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

rmSync(PROFILE, { recursive: true, force: true });
mkdirSync(PROFILE, { recursive: true });

const chrome = spawn(CHROME, [
  "--headless=new",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${PROFILE}`,
  "--no-first-run",
  "--no-default-browser-check",
  "--disable-extensions",
  "--hide-scrollbars",
  "--force-color-profile=srgb",
  "--window-size=375,812",
  "about:blank",
]);
chrome.stderr.on("data", () => {});

let wsUrl = null;
for (let i = 0; i < 60 && !wsUrl; i++) {
  await sleep(300);
  try {
    const r = await fetch(`http://127.0.0.1:${PORT}/json/version`);
    wsUrl = (await r.json()).webSocketDebuggerUrl;
  } catch {}
}
if (!wsUrl) throw new Error("Chrome не поднялся");

const ws = new WebSocket(wsUrl);
await new Promise((res, rej) => {
  ws.onopen = res;
  ws.onerror = rej;
});

let id = 0;
const pending = new Map();
const events = [];
ws.onmessage = (m) => {
  const msg = JSON.parse(m.data);
  if (msg.id && pending.has(msg.id)) {
    const { res, rej } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? rej(new Error(JSON.stringify(msg.error))) : res(msg.result);
  } else if (msg.method) events.push(msg.method);
};
const send = (method, params = {}, sessionId) =>
  new Promise((res, rej) => {
    const n = ++id;
    pending.set(n, { res, rej });
    ws.send(JSON.stringify({ id: n, method, params, sessionId }));
  });

// Сессия к странице
const { targetInfos } = await send("Target.getTargets");
const page = targetInfos.find((t) => t.type === "page");
const { sessionId } = await send("Target.attachToTarget", { targetId: page.targetId, flatten: true });
const S = (m, p) => send(m, p, sessionId);

await S("Page.enable");
await S("Runtime.enable");
await S("Emulation.setDeviceMetricsOverride", {
  width: 375,
  height: 812,
  deviceScaleFactor: 2,
  mobile: true,
});
// Онбординг пропускаем: иначе первый кадр — приветствие, а не продукт.
await S("Page.addScriptToEvaluateOnNewDocument", {
  source: `try{
    localStorage.setItem("backpacker.onboarding.v1","seen");
    localStorage.setItem("backpacker.home.trainer.hidden.v1","false");
  }catch(e){}`,
});

const evalJs = async (expr) => {
  const r = await S("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw new Error(expr.slice(0, 60) + " → " + r.exceptionDetails.text);
  return r.result.value;
};

await S("Page.navigate", { url: APP });
await sleep(4000);
// Сплэш уходит по таймеру; добиваем принудительно, чтобы не ловить его в кадр.
await evalJs(`document.querySelector("#appSplash")?.classList.add("hidden");
document.querySelector("#introScreen")?.classList.add("hidden");
document.querySelector("#homeScreen")?.classList.remove("hidden"); true`);
await sleep(1200);

const shots = [];

async function capture(
  name,
  {
    setup,
    selector,
    toSelector,
    rect,
    pad = 0,
    wait = 1400,
    maxH = 0,
    offsetY = 0,
    noScroll = false,
    ignoreHeader = false,
  } = {},
) {
  if (setup) await evalJs(setup);
  await sleep(wait);

  let params = { format: "png" };
  if (rect) {
    const b = await evalJs(rect);
    if (!b) {
      shots.push({ name, error: "рамка не вычислилась" });
      return;
    }
    params.clip = { x: b.x, y: b.y, width: b.w, height: b.h, scale: 2 };
  } else if (selector) {
    const box = await evalJs(`(() => {
      const el = document.querySelector(${JSON.stringify(selector)});
      if (!el) return null;
      ${noScroll ? "" : 'el.scrollIntoView({block:"center"});'}
      const r = el.getBoundingClientRect();
      return {x:r.left, y:r.top, w:r.width, h:r.height};
    })()`);
    if (!box) {
      shots.push({ name, error: "селектор не найден: " + selector });
      return;
    }
    await sleep(400);
    const b = await evalJs(`(() => {
      const r = document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();
      return {x:r.left, y:r.top, w:r.width, h:r.height};
    })()`);
    let y = b.y - pad + offsetY;
    let h = b.h + pad * 2 - offsetY;
    // Кадр можно дотянуть до низа другого элемента — так рамка задаётся
    // содержимым, а не подобранными пикселями.
    if (toSelector) {
      const bottom = await evalJs(`(() => {
        const el = document.querySelector(${JSON.stringify(toSelector)});
        return el ? el.getBoundingClientRect().bottom : null;
      })()`);
      if (bottom != null) h = bottom + pad - y;
    }
    if (maxH && h > maxH) h = maxH;
    // Липкая шапка поездки висит поверх содержимого: если кадр начинается
    // выше её низа, она попадёт в снимок размытой полосой.
    const headerBottom = ignoreHeader ? 0 : await evalJs(`(() => {
      const h = document.querySelector(".trip-header, .app-header, header");
      if (!h) return 0;
      const cs = getComputedStyle(h);
      if (cs.position !== "sticky" && cs.position !== "fixed") return 0;
      return h.getBoundingClientRect().bottom;
    })()`);
    if (y < headerBottom) {
      h -= headerBottom - y;
      y = headerBottom;
    }
    params.clip = {
      x: Math.max(0, b.x - pad),
      y: Math.max(0, y),
      width: b.w + pad * 2,
      height: Math.max(40, h),
      scale: 2,
    };
  }

  const { data } = await S("Page.captureScreenshot", params);
  const buf = Buffer.from(data, "base64");
  const file = join(OUT, name + ".png");
  writeFileSync(file, buf);
  // Размер PNG читаем из заголовка IHDR
  const w = buf.readUInt32BE(16);
  const h = buf.readUInt32BE(20);
  shots.push({ name, size: `${w}x${h}`, kb: Math.round(buf.length / 1024) });
}

const goHome = `document.querySelector("#homeScreen")?.classList.remove("hidden"); true`;
const openTrainer = `document.querySelector("#trainerTripCard").click(); true`;
const nav = (v) => `document.querySelector('[data-view="${v}"]').click(); true`;

// 1. Главный экран целиком
await capture("shot-home");

// 2. Два дня подряд: одна плашка не показывает, что дней несколько,
//    и по высоте не бьётся с соседней плашкой на десктопе.
//    Два дня выше экрана телефона, поэтому окно на время кадра
//    вытягиваем: ширина не меняется, значит вёрстка дня остаётся той же.
await evalJs(openTrainer);
await sleep(2200);
await S("Emulation.setDeviceMetricsOverride", {
  width: 375,
  height: 1800,
  deviceScaleFactor: 2,
  mobile: true,
});
await sleep(1400);
await capture("crop-day", {
  wait: 1200,
  rect: `(() => {
    const days = [...document.querySelectorAll(".day-card")].slice(0, 2);
    if (days.length < 2) return null;
    window.scrollTo(0, 0);
    const a = days[0].getBoundingClientRect();
    const b = days[1].getBoundingClientRect();
    return { x: a.left, y: a.top, w: a.width, h: b.bottom - a.top };
  })()`,
});
await S("Emulation.setDeviceMetricsOverride", {
  width: 375,
  height: 812,
  deviceScaleFactor: 2,
  mobile: true,
});
await sleep(1000);

// 3. Две карточки разного типа, вплотную по краям.
//    Окно временно расширяем: карточка имеет фиксированную ширину, поэтому
//    на 375 px вторая обрезается лентой. Ширина окна на саму карточку не
//    влияет — меняется только то, сколько их помещается в кадр.
await S("Emulation.setDeviceMetricsOverride", {
  width: 760,
  height: 812,
  deviceScaleFactor: 2,
  mobile: true,
});
await sleep(1200);
await capture("crop-cards-pair", {
  wait: 1200,
  rect: `(() => {
    const cards = [...document.querySelectorAll(".day-items .item-card")].slice(0, 2);
    if (cards.length < 2) return null;
    const a = cards[0].getBoundingClientRect();
    const b = cards[1].getBoundingClientRect();
    return { x: a.left, y: a.top, w: b.right - a.left, h: Math.max(a.height, b.height) };
  })()`,
});
await S("Emulation.setDeviceMetricsOverride", {
  width: 375,
  height: 812,
  deviceScaleFactor: 2,
  mobile: true,
});
await sleep(1000);

// 3b. Изнанка карточки: форма редактирования со всеми полями.
//     Снаружи карточку уже показал блок «По дням», здесь важно, что внутри.
await evalJs(`document.querySelector(".day-items .item-card")?.click(); true`);
await sleep(1600);
// Шторка целиком, от заголовка до полосы действий. Прокрутку и поправку
// на липкую шапку поездки отключаем: шторка — модальный слой поверх неё,
// и любая из этих поправок утаскивала кадр мимо первого поля.
await capture("crop-card", {
  selector: "#itemSheet .sheet-panel",
  pad: 0,
  wait: 1400,
  noScroll: true,
  ignoreHeader: true,
});
await evalJs(`document.querySelector('#itemSheet [data-close="item"]')?.click(); true`);
await sleep(900);

// 4. Бюджет: группа основных сумм, а не вся страница
await capture("crop-budget", {
  setup: nav("budget"),
  selector: ".budget-metric-group",
  pad: 12,
  wait: 2200,
});

// 5. AI-черновик: экран ввода описания
await capture("crop-ai", {
  setup: `(() => {
    document.querySelector('[data-view="plan"]')?.click();
    document.querySelector("#homeButton, #backToHomeButton")?.click();
    return true;
  })()`,
  wait: 1200,
});
shots.pop(); // это был служебный переход, не кадр

await evalJs(`document.querySelector("#createTripButton")?.click(); true`);
await sleep(1200);
await evalJs(`document.querySelector("#tripDraftTextModeButton")?.click(); true`);
await sleep(1200);
// Верхние абзацы — семь строк мелкого текста, на лендинге они нечитаемы.
// Берём то, ради чего блок существует: поле описания и кнопку диктовки.
await capture("crop-ai", {
  selector: "#tripDraftTextInput",
  toSelector: "#tripDraftRecordButton",
  pad: 14,
  wait: 800,
});

console.log(JSON.stringify(shots, null, 2));

ws.close();
chrome.kill();
process.exit(0);
