// Снимает ролевые кадры лендинга: план организатора, панель организатора
// и та же программа глазами участника. Ноль зависимостей: headless Chrome +
// CDP через встроенный в Node WebSocket, как capture.mjs.
//
//   node capture-roles.mjs
//
// Переменные окружения:
//   APP_URL  — ЛОКАЛЬНАЯ сборка приложения (по умолчанию http://127.0.0.1:4190/).
//              Например: git archive origin/main из 01_app в папку и
//              python -m http.server 4190 --bind 127.0.0.1 из неё.
//   LOCALES  — список локалей через запятую (по умолчанию все семь)
//   CHROME   — путь к Chrome, если он лежит не в стандартном месте
//
// Почему только локально и почему сеть закрыта.
// Экраны организатора и участника требуют серверной публикации и входа по
// email. Публиковать ради картинки вымышленную программу в production
// нельзя. Поэтому скрипт кладёт синтетический визит в localStorage и
// вызывает те же функции приложения, которыми оно само рисует эти экраны:
// openTrip для организатора, readOnlyShare + showTripScreen для участника.
// Участнику отдаётся ровно та проекция, которую приложение публикует —
// buildPublishedTripState(), то есть без сметы организатора.
// Все запросы на хосты, кроме локального, обрываются: ни анонимной сессии
// в Supabase, ни аналитики, ни внешних курсов.
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
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
  console.log("Chrome не найден. Укажите путь: CHROME=... node capture-roles.mjs");
  process.exit(1);
}

const APP = new URL(process.env.APP_URL || "http://127.0.0.1:4190/");
if (!["127.0.0.1", "localhost", "[::1]"].includes(APP.hostname)) {
  console.log("APP_URL должен быть локальной сборкой: production для этих кадров не используется.");
  process.exit(1);
}
const ALL_LOCALES = ["ru", "en", "fr", "ka", "de", "hy", "zh"];
const LOCALES = (process.env.LOCALES || ALL_LOCALES.join(",")).split(",").map((l) => l.trim()).filter(Boolean);
for (const locale of LOCALES) if (!ALL_LOCALES.includes(locale)) throw new Error(`Неподдерживаемая локаль: ${locale}`);

const PORT = 9334;
const QUALITY = 82;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- Синтетический визит ----------
// Вымышленная программа: ни одной реальной организации, гостя или брони.
// Имена участников — нейтральные латинские инициалы, одинаковые во всех
// локалях. Суммы — внутренняя смета организатора; участник их не увидит.
const ITEM_SHAPE = [
  { id: "t1", type: "transport", status: "paid", date: "2026-11-12", startTime: "09:40", durationMinutes: 40, price: 180, paidAmount: 180 },
  { id: "t2", type: "stay", status: "fixed", date: "2026-11-12", startTime: "11:00", durationMinutes: 0, price: 3600, paidAmount: 1800 },
  { id: "t3", type: "food", status: "fixed", date: "2026-11-12", startTime: "19:30", durationMinutes: 120, price: 1100, paidAmount: 0 },
  { id: "t4", type: "other", status: "fixed", date: "2026-11-13", startTime: "10:00", durationMinutes: 180, price: 0, paidAmount: 0 },
  { id: "t5", type: "excursion", status: "fixed", date: "2026-11-13", startTime: "15:00", durationMinutes: 150, price: 350, paidAmount: 0 },
  { id: "t6", type: "food", status: "fixed", date: "2026-11-13", startTime: "20:00", durationMinutes: 150, price: 1400, paidAmount: 0 },
  { id: "t7", type: "excursion", status: "fixed", date: "2026-11-14", startTime: "09:30", durationMinutes: 300, price: 900, paidAmount: 0 },
  { id: "t8", type: "transport", status: "fixed", date: "2026-11-14", startTime: "18:00", durationMinutes: 45, price: 180, paidAmount: 0 },
];

const COPY = {
  ru: {
    title: "Визит в Тбилиси", destination: "Тбилиси",
    items: [
      ["Встреча в аэропорту", "Аэропорт Тбилиси, зал прилёта", "Встречающий будет с табличкой"],
      ["Отель в Сололаки", "Сололаки"],
      ["Приветственный ужин", "Старый город"],
      ["Рабочая встреча", "Ваке, конференц-зал"],
      ["Прогулка по Старому городу", "Площадь Свободы"],
      ["Ужин и полифония", "Сололаки"],
      ["Мцхета и Джвари", "Мцхета"],
      ["Трансфер в аэропорт", "Аэропорт Тбилиси"],
    ],
    included: "Встреча в аэропорту и трансферы\nОтель в Сололаки, 2 ночи\nУжины 12 и 13 ноября\nПоездка в Мцхету",
    notIncluded: "Перелёт\nОбеды",
    important: "В храмах Мцхеты нужны закрытые плечи и колени.",
    materials: ["Памятка гостя.pdf", "Карта Старого города.pdf"],
  },
  en: {
    title: "Tbilisi visit", destination: "Tbilisi",
    items: [
      ["Airport meet and greet", "Tbilisi Airport, arrivals hall", "Your host will hold a name sign"],
      ["Hotel in Sololaki", "Sololaki"],
      ["Welcome dinner", "Old Town"],
      ["Working meeting", "Vake, conference room"],
      ["Old Town walk", "Freedom Square"],
      ["Dinner and polyphony", "Sololaki"],
      ["Mtskheta and Jvari", "Mtskheta"],
      ["Airport transfer", "Tbilisi Airport"],
    ],
    included: "Airport pickup and transfers\nHotel in Sololaki, 2 nights\nDinners on 12 and 13 November\nTrip to Mtskheta",
    notIncluded: "Flights\nLunches",
    important: "Shoulders and knees must be covered in Mtskheta churches.",
    materials: ["Guest guide.pdf", "Old Town map.pdf"],
  },
  fr: {
    title: "Visite à Tbilissi", destination: "Tbilissi",
    items: [
      ["Accueil à l'aéroport", "Aéroport de Tbilissi, arrivées", "Votre contact aura une pancarte à votre nom"],
      ["Hôtel à Sololaki", "Sololaki"],
      ["Dîner de bienvenue", "Vieille ville"],
      ["Réunion de travail", "Vaké, salle de conférence"],
      ["Balade dans la vieille ville", "Place de la Liberté"],
      ["Dîner et polyphonie", "Sololaki"],
      ["Mtskheta et Djvari", "Mtskheta"],
      ["Transfert vers l'aéroport", "Aéroport de Tbilissi"],
    ],
    included: "Accueil à l'aéroport et transferts\nHôtel à Sololaki, 2 nuits\nDîners des 12 et 13 novembre\nExcursion à Mtskheta",
    notIncluded: "Vols\nDéjeuners",
    important: "Épaules et genoux couverts dans les églises de Mtskheta.",
    materials: ["Guide de l'invité.pdf", "Plan de la vieille ville.pdf"],
  },
  ka: {
    title: "ვიზიტი თბილისში", destination: "თბილისი",
    items: [
      ["შეხვედრა აეროპორტში", "თბილისის აეროპორტი, ჩამოსვლის დარბაზი", "დამხვედრს ექნება დაფა თქვენი სახელით"],
      ["სასტუმრო სოლოლაკში", "სოლოლაკი"],
      ["მისასალმებელი ვახშამი", "ძველი თბილისი"],
      ["სამუშაო შეხვედრა", "ვაკე, საკონფერენციო დარბაზი"],
      ["გასეირნება ძველ თბილისში", "თავისუფლების მოედანი"],
      ["ვახშამი და პოლიფონია", "სოლოლაკი"],
      ["მცხეთა და ჯვარი", "მცხეთა"],
      ["ტრანსფერი აეროპორტში", "თბილისის აეროპორტი"],
    ],
    included: "შეხვედრა აეროპორტში და ტრანსფერები\nსასტუმრო სოლოლაკში, 2 ღამე\nვახშამი 12 და 13 ნოემბერს\nმოგზაურობა მცხეთაში",
    notIncluded: "ავიაბილეთები\nსადილები",
    important: "მცხეთის ტაძრებში მხრები და მუხლები დაფარული უნდა იყოს.",
    materials: ["სტუმრის მემო.pdf", "ძველი ქალაქის რუკა.pdf"],
  },
  de: {
    title: "Besuch in Tiflis", destination: "Tiflis",
    items: [
      ["Abholung am Flughafen", "Flughafen Tiflis, Ankunftshalle", "Abholung mit Namensschild"],
      ["Hotel in Sololaki", "Sololaki"],
      ["Begrüßungsabendessen", "Altstadt"],
      ["Arbeitstreffen", "Vake, Konferenzraum"],
      ["Altstadtrundgang", "Freiheitsplatz"],
      ["Abendessen und Polyphonie", "Sololaki"],
      ["Mzcheta und Dschwari", "Mzcheta"],
      ["Transfer zum Flughafen", "Flughafen Tiflis"],
    ],
    included: "Abholung am Flughafen und Transfers\nHotel in Sololaki, 2 Nächte\nAbendessen am 12. und 13. November\nAusflug nach Mzcheta",
    notIncluded: "Flüge\nMittagessen",
    important: "In den Kirchen von Mzcheta Schultern und Knie bedecken.",
    materials: ["Gästeinfo.pdf", "Altstadtplan.pdf"],
  },
  hy: {
    title: "Այց Թբիլիսի", destination: "Թբիլիսի",
    items: [
      ["Դիմավորում օդանավակայանում", "Թբիլիսիի օդանավակայան, ժամանման սրահ", "Դիմավորողը կունենա ցուցանակ ձեր անունով"],
      ["Հյուրանոց Սոլոլակիում", "Սոլոլակի"],
      ["Ողջույնի ընթրիք", "Հին քաղաք"],
      ["Աշխատանքային հանդիպում", "Վակե, համաժողովների սրահ"],
      ["Զբոսանք Հին քաղաքում", "Ազատության հրապարակ"],
      ["Ընթրիք և բազմաձայնություն", "Սոլոլակի"],
      ["Մցխեթա և Ջվարի", "Մցխեթա"],
      ["Տրանսֆեր դեպի օդանավակայան", "Թբիլիսիի օդանավակայան"],
    ],
    included: "Դիմավորում օդանավակայանում և տրանսֆերներ\nՀյուրանոց Սոլոլակիում, 2 գիշեր\nԸնթրիքներ նոյեմբերի 12-ին և 13-ին\nՈւղևորություն Մցխեթա",
    notIncluded: "Թռիչքներ\nՃաշեր",
    important: "Մցխեթայի տաճարներում ուսերն ու ծնկները պետք է ծածկված լինեն։",
    materials: ["Հյուրի հուշագիր.pdf", "Հին քաղաքի քարտեզ.pdf"],
  },
  zh: {
    title: "第比利斯访问", destination: "第比利斯",
    items: [
      ["机场接机", "第比利斯机场到达大厅", "接机人员会举着写有您名字的牌子"],
      ["索洛拉基酒店", "索洛拉基"],
      ["欢迎晚宴", "老城"],
      ["工作会议", "瓦凯会议室"],
      ["老城漫步", "自由广场"],
      ["晚餐与复调合唱", "索洛拉基"],
      ["姆茨赫塔与季瓦里", "姆茨赫塔"],
      ["送机", "第比利斯机场"],
    ],
    included: "机场接机及接送\n索洛拉基酒店 2 晚\n11 月 12 日和 13 日晚餐\n姆茨赫塔一日游",
    notIncluded: "机票\n午餐",
    important: "参观姆茨赫塔教堂时请遮盖肩膀和膝盖。",
    materials: ["宾客须知.pdf", "老城地图.pdf"],
  },
};

const PARTICIPANTS = ["Anna K.", "Marco R.", "Lena S.", "David T.", "Yuki M.", "Sofia P."];
const MATERIAL_IDS = ["6f1c2a4e-3b7d-4c1a-9e2f-1a2b3c4d5e6f", "7a2d3b5f-4c8e-4d2b-8f3a-2b3c4d5e6f70"];
const SHARE_ID = "00000000-0000-4000-8000-000000000001";

function syntheticTrip(locale) {
  const c = COPY[locale];
  return {
    trip: {
      id: "landing-tbilisi-visit",
      title: c.title,
      destination: c.destination,
      startDate: "2026-11-12",
      endDate: "2026-11-14",
      currency: "GEL",
      budgetLimit: 9000,
      isGroupTrip: true,
      programUpdatedAt: "2026-11-10T16:20:00.000Z",
      programInfo: {
        priceAmount: 1450,
        priceCurrency: "GEL",
        includedText: c.included,
        notIncludedText: c.notIncluded,
        importantInfoText: c.important,
      },
      groupMaterials: c.materials.map((fileName, i) => ({
        id: MATERIAL_IDS[i],
        fileName,
        mimeType: "application/pdf",
        fileSizeBytes: 180000 + i * 400000,
        createdAt: "2026-11-09T10:00:00.000Z",
      })),
    },
    items: ITEM_SHAPE.map((shape, i) => ({
      ...shape,
      title: c.items[i][0],
      locationText: c.items[i][1],
      notes: c.items[i][2] || "",
      priority: "must",
      link: "",
    })),
  };
}

// ---------- CDP ----------
const PROFILE = join(tmpdir(), "clavelo-capture-roles");
rmSync(PROFILE, { recursive: true, force: true });
mkdirSync(PROFILE, { recursive: true });
const chrome = spawn(CHROME, [
  "--headless=new", `--remote-debugging-port=${PORT}`, `--user-data-dir=${PROFILE}`,
  "--no-first-run", "--no-default-browser-check", "--disable-extensions", "--hide-scrollbars",
  "--force-color-profile=srgb", "--window-size=375,812", "about:blank",
]);
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
const listeners = [];
ws.onmessage = (m) => {
  const msg = JSON.parse(m.data);
  if (msg.id && pending.has(msg.id)) {
    const { res, rej } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? rej(new Error(JSON.stringify(msg.error))) : res(msg.result);
  } else if (msg.method) listeners.forEach((fn) => fn(msg));
};
const send = (method, params = {}, sessionId) => new Promise((res, rej) => {
  const n = ++id;
  pending.set(n, { res, rej });
  ws.send(JSON.stringify({ id: n, method, params, sessionId }));
});
const { targetInfos } = await send("Target.getTargets");
const page = targetInfos.find((t) => t.type === "page");
const { sessionId } = await send("Target.attachToTarget", { targetId: page.targetId, flatten: true });
const S = (m, p) => send(m, p, sessionId);

await S("Page.enable");
await S("Runtime.enable");

// Сеть: только локальный хост. Исключение одно — статическая библиотека
// supabase-js с CDN: без неё приложение считает облако ненастроенным и пишет
// это в панели организатора. Сама библиотека ничего не отправляет, а все
// запросы к Supabase, аналитике и курсам валют по-прежнему обрываются.
const ALLOWED_STATIC = (url) => url.startsWith("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@");
const blocked = new Set();
await S("Fetch.enable", { patterns: [{ urlPattern: "*" }] });
listeners.push((msg) => {
  if (msg.method !== "Fetch.requestPaused") return;
  const { requestId, request } = msg.params;
  let local = request.url.startsWith("data:") || request.url.startsWith("blob:");
  try { local ||= ["127.0.0.1", "localhost", "[::1]"].includes(new URL(request.url).hostname); } catch {}
  if (local || ALLOWED_STATIC(request.url)) S("Fetch.continueRequest", { requestId }).catch(() => {});
  else {
    blocked.add(new URL(request.url).host);
    S("Fetch.failRequest", { requestId, errorReason: "BlockedByClient" }).catch(() => {});
  }
});

const evalJs = async (expr) => {
  const r = await S("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw new Error(expr.slice(0, 60) + " → " + JSON.stringify(r.exceptionDetails).slice(0, 300));
  return r.result.value;
};
const viewport = (width, height) => S("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 2, mobile: true });

// Одна карточка события целиком. Карточки дня лежат в горизонтальной
// ленте, поэтому сначала прокручиваем ленту к карточке, потом снимаем.
async function shootCard(file, itemId) {
  await evalJs(`(() => {
    const card = document.querySelector('.item-card[data-edit="${itemId}"]');
    card.scrollIntoView({ block: "center", inline: "center" });
    return true;
  })()`);
  await sleep(500);
  return shoot(file, `document.querySelector('.item-card[data-edit="${itemId}"]').getBoundingClientRect()`);
}

// Кадр по прямоугольнику в координатах СТРАНИЦЫ: с captureBeyondViewport
// clip считается от начала документа, поэтому прибавляем scrollX/scrollY.
async function shoot(file, rectExpr) {
  const clip = rectExpr
    ? await evalJs(`(() => { const r = (${rectExpr}); return r && { x: r.left + scrollX, y: r.top + scrollY, width: r.width, height: r.height, scale: 1 }; })()`)
    : null;
  if (rectExpr && !clip) throw new Error(`рамка не вычислилась: ${file}`);
  const params = { format: "webp", quality: QUALITY };
  if (clip) Object.assign(params, { clip, captureBeyondViewport: true });
  const { data } = await S("Page.captureScreenshot", params);
  const buf = Buffer.from(data, "base64");
  writeFileSync(file, buf);
  return { file: file.split(/[\\/]/).slice(-2).join("/"), kb: Math.round(buf.length / 1024) };
}

const report = [];
for (const locale of LOCALES) {
  const out = join(HERE, "assets", "screenshots", locale);
  mkdirSync(out, { recursive: true });
  const data = syntheticTrip(locale);

  await S("Page.addScriptToEvaluateOnNewDocument", {
    source: `try{
      localStorage.clear();
      localStorage.setItem("backpacker.onboarding.v1","seen");
      localStorage.setItem("backpacker.locale.v1",${JSON.stringify(locale)});
    }catch(e){}`,
  });
  await viewport(375, 812);
  const url = new URL(APP);
  url.searchParams.set("lang", locale);
  await S("Page.navigate", { url: url.toString() });
  // Ждём, пока приложение поднимется целиком: функции, которыми оно само
  // рисует экраны, появляются только после загрузки app.js.
  for (let i = 0; i < 60; i++) {
    await sleep(500);
    if (await evalJs(`typeof createTripEntry === "function" && typeof buildPublishedTripState === "function" && !!window.t`).catch(() => false)) break;
  }
  await sleep(1200);
  await evalJs(`document.querySelector("#appSplash")?.classList.add("hidden"); true`);

  // 1. Организатор: план визита с внутренней сметой.
  await evalJs(`(() => {
    const data = ${JSON.stringify(data)};
    const entry = createTripEntry(data, { id: data.trip.id });
    tripStore.trips = [entry];
    persistTripStore(tripStore);
    shareRecords[data.trip.id] = { shareId: ${JSON.stringify(SHARE_ID)}, token: "example", includeBudget: false };
    persistShareRecords();
    openTrip(data.trip.id, { refreshProposals: false });
    window.scrollTo(0, 0);
    return true;
  })()`);
  await sleep(1500);
  report.push(await shoot(join(out, "role-plan.webp")));

  // 1a. Карточки событий для ролевых карточек лендинга: настоящие карточки
  // приложения с корешком типа, иконкой и временем.
  for (const id of ["t1", "t2", "t3", "t5"]) report.push(await shootCard(join(out, `card-${id}.webp`), id));
  await evalJs(`window.scrollTo(0, 0); document.querySelectorAll(".day-items").forEach((row) => { row.scrollLeft = 0; }); true`);
  await sleep(400);

  // 2. Организатор: панель группы — участники и ссылка.
  await evalJs(`(() => {
    groupTripContext = { loading: false, participants: ${JSON.stringify(PARTICIPANTS.map((displayName) => ({ displayName })))} };
    organizerGroupMaterialsState = { ...organizerGroupMaterialsState, loading: false, error: "", loadedTripId: state.trip.id };
    openShareSheet();
    openShareModePanel = "organizer";
    renderTripLinkOptions();
    return true;
  })()`);
  await sleep(1400);
  // 2a. Целый экран телефона: шторка «Поделиться поездкой» открыта на панели
  // организатора — участники и ссылка. Шторку прокручиваем к карточке
  // «Для организатора», как это сделал бы сам человек.
  await evalJs(`(() => {
    const panel = document.querySelector("#shareSheet .sheet-panel");
    const card = document.querySelector("#groupTripShareCard");
    panel.scrollTop = card.getBoundingClientRect().top - panel.getBoundingClientRect().top + panel.scrollTop - 14;
    return true;
  })()`);
  await sleep(700);
  report.push(await shoot(join(out, "role-organizer-phone.webp")));
  await evalJs(`closeSheet("shareSheet"); true`);
  await viewport(375, 812);
  await sleep(600);

  // 3. Участник: та же программа, опубликованная без сметы.
  await evalJs(`(() => {
    const published = buildPublishedTripState({ includeBudget: false });
    readOnlyShare = {
      shareId: ${JSON.stringify(SHARE_ID)}, sourceTripId: published.trip.id,
      title: published.trip.title, destination: published.trip.destination,
      updatedAt: published.trip.programUpdatedAt, programUpdatedAt: published.trip.programUpdatedAt,
      options: { includeBudget: false }, isOwner: false, isSaved: true, isJoined: true, isGroupTrip: true,
      authorDisplayName: "", currentUserDisplayName: "Anna K.", source: "received_list", state: published,
    };
    state = normalizeState(published);
    showTripScreen({ refreshProposals: false });
    window.scrollTo(0, 0);
    return true;
  })()`);
  await sleep(1500);

  // 4. Участник: блок «О программе» крупно.
  report.push(await shoot(join(out, "role-guest-info.webp"), `document.querySelector("#participantProgramInfo").getBoundingClientRect()`));

  // 5. Участник: три дня визита подряд.
  await viewport(375, 2400);
  await sleep(1000);
  report.push(await shoot(join(out, "role-guest-days.webp"),
    `(() => {
      const days = [...document.querySelectorAll(".day-card")].slice(0, 3);
      if (days.length < 3) return null;
      const a = days[0].getBoundingClientRect();
      const b = days[2].getBoundingClientRect();
      return { left: a.left, top: a.top, width: a.width, height: b.bottom - a.top };
    })()`));
}

console.log(JSON.stringify({ app: APP.toString(), blockedHosts: [...blocked], shots: report }, null, 2));
ws.close();
chrome.kill();
process.exit(0);
