/*
 * WIWI Tours prototype — rendering and interactions.
 * Content comes from data.js (texts as { en, ka, ru }), interface text from
 * i18n.js. No build step, no framework: open index.html through any static server.
 *
 * URL: ?tour=<id>&lang=<en|ka|ru>. Changing language re-renders in place and
 * keeps the tour, open days, selected activity, map view and scroll position.
 */
(() => {
  const DATA = window.WIWI_DATA;
  const UI = window.WIWI_I18N;
  const LANGS = window.WIWI_LANGS;
  const L_ = window.L; // Leaflet, named apart from the L() text helper below

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
  const prefersReducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- language ----------
  const isLang = (code) => LANGS.some((l) => l.code === code);
  const requestedLang = new URLSearchParams(location.search).get("lang");
  let lang = isLang(requestedLang) ? requestedLang : "en";

  function t(key, vars = {}) {
    const text = UI[lang][key] ?? UI.en[key] ?? key;
    return text.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
  }
  // A content field: { en, ka, ru } → current language; plain strings are names, times or URLs.
  const L = (value) => (value == null ? "" : typeof value === "string" ? value : value[lang] ?? value.en ?? "");
  // Recurring terms may be a dictionary key (topic.*, flag.*) or an inline { en, ka, ru }.
  const term = (kind, value) => (typeof value === "string" ? t(`${kind}.${value}`) : L(value));
  const region = (key) => t(`region.${key}`);

  function urlWith(changes) {
    const url = new URL(location.href);
    for (const [key, value] of Object.entries(changes)) {
      if (value == null || (key === "lang" && value === "en")) url.searchParams.delete(key);
      else url.searchParams.set(key, value);
    }
    return url;
  }

  // Only complete public UVAMO! tasting URLs are shown; anything else is dropped.
  const UVAMO_SET = /^https:\/\/[a-z0-9.-]+\/tasting\/[A-Za-z0-9_-]+\/?$/;
  const UVAMO_WINE = /^https:\/\/[a-z0-9.-]+\/tasting\/[A-Za-z0-9_-]+\/wine\/\d+\/?$/;

  // ---------- icons (inline, no icon font) ----------
  const ICONS = {
    wine: '<path d="M8 3h8l-.6 5.2a3.4 3.4 0 0 1-6.8 0L8 3Z"/><path d="M12 12v7M8.5 21h7"/>',
    food: '<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M16 3c-1.7 1.3-2.5 3.3-2.5 6 0 1.4.9 2.5 2.5 2.5V21"/>',
    transport: '<rect x="4" y="5" width="16" height="11" rx="2.5"/><path d="M4 11h16M8 19v-3M16 19v-3"/>',
    stay: '<path d="M3 18V8M3 14h18v4M21 14v-2.5A2.5 2.5 0 0 0 18.5 9H11v5"/><circle cx="7" cy="11" r="1.6"/>',
    excursion: '<path d="M4 20h16M6 20V10l6-5 6 5v10M10 20v-5h4v5"/>',
    other: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.5 2"/>',
    pin: '<path d="M12 21s-6-5.4-6-10a6 6 0 0 1 12 0c0 4.6-6 10-6 10Z"/><circle cx="12" cy="11" r="2"/>',
    person: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
    map: '<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z"/><path d="M9 4v14M15 6v14"/>',
    leaf: '<path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Z"/><path d="M5 19 13 11"/>',
  };
  const icon = (name, cls = "icon") =>
    `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.other}</svg>`;
  const statusChip = (status) => `<span class="status status-${esc(status)}">${esc(t(`status.${status}`))}</span>`;

  // Latin/Cyrillic capitals, or the first letter of Georgian words (Mkhedruli has no case).
  function initials(name) {
    const words = name.split(/\s+/).filter((w) => /^[\p{Lu}ა-ჿ]/u.test(w));
    return words.slice(0, 2).map((w) => w[0]).join("") || "·";
  }

  // ---------- per-tour state ----------
  const routable = DATA.tours.filter((x) => (x.days || []).length);
  let tour = null;
  let activities = [];
  let byId = new Map();
  let mappedPlaces = [];
  let activeId = null;
  const activitiesAt = (placeId) => activities.filter((a) => a.place === placeId);
  const activitiesWith = (personId) => activities.filter((a) => (a.people || []).includes(personId));

  const daysLabel = (placeId) => {
    const days = [...new Set(activitiesAt(placeId).map((a) => a.day))].sort((x, y) => x - y);
    const contiguous = days.every((d, i) => i === 0 || d === days[i - 1] + 1);
    return days.length > 1 && contiguous ? `${days[0]}–${days[days.length - 1]}` : days.join("·");
  };

  // ---------- map state (used by both chrome and route rendering) ----------
  let map = null;
  let fitted = false;
  let zoomControl = null;
  const markers = new Map();
  const notice = $("#mapNotice");
  let noticeKey = null;

  // =====================================================================
  // Page chrome: everything outside the selected tour's route.
  // =====================================================================
  function renderChrome() {
    document.documentElement.lang = LANGS.find((l) => l.code === lang).html;
    document.title = t("meta.title");
    $('meta[name="description"]').setAttribute("content", t("meta.description"));
    for (const el of $$("[data-i18n]")) el.textContent = t(el.dataset.i18n);
    for (const el of $$("[data-i18n-aria]")) el.setAttribute("aria-label", t(el.dataset.i18nAria));

    $("#langs").innerHTML = LANGS.map(
      (l) => `<a href="${esc(urlWith({ lang: l.code, tour: tour?.id }).toString())}" data-lang="${l.code}" lang="${l.html}" hreflang="${l.html}" title="${esc(l.name)}"${l.code === lang ? ' aria-current="true"' : ""}>${l.label}</a>`,
    ).join("");

    $("#tours").innerHTML = DATA.tours.map(tourCard).join("");

    $("#legend").innerHTML = [
      ["status status-draft", t("legend.draft")],
      ["status status-to-confirm", t("legend.toConfirm")],
      ["flag flag-seasonal", t("legend.seasonal")],
      ["flag flag-review", t("legend.review")],
      ["flag flag-approx", t("legend.approx")],
    ]
      .map(([cls, label]) => `<li><span class="${cls}" aria-hidden="true"></span>${esc(label)}</li>`)
      .join("");

    // All tours' open questions, grouped by tour: reviewers see the whole picture.
    $("#questions").innerHTML = DATA.tours
      .filter((x) => (x.openQuestions || []).length)
      .map((x) => `
        <section class="question-group" id="status-${esc(x.id)}" aria-labelledby="status-${esc(x.id)}-title">
          <h3 class="question-tour" id="status-${esc(x.id)}-title">${esc(L(x.region))} — ${esc(L(x.title))} ${statusChip(x.status)}</h3>
          <div class="questions-grid">${x.openQuestions
            .map((q) => `<article class="question"><h4>${esc(L(q.title))}</h4><p>${esc(L(q.text))}</p></article>`)
            .join("")}</div>
        </section>`)
      .join("");

    $("#partners").innerHTML = DATA.partners
      .map((p) => `
        <article class="partner">
          <h3>${p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)}</a>` : esc(p.name)}</h3>
          <p>${esc(t(p.role))}</p>
        </article>`)
      .join("");

    $("#detail-close").setAttribute("aria-label", t("action.close"));
    if (noticeKey) notice.textContent = t(noticeKey);
    if (map) {
      zoomControl?.remove();
      addZoomControl();
    }
  }

  function tourCard(x) {
    const hasRoute = (x.days || []).length > 0;
    const facts = x.facts
      .map((f) => `<li>${esc(L(f.label))}${f.note ? `<span class="fact-note">${esc(L(f.note))}</span>` : ""}</li>`)
      .join("");
    const action = hasRoute
      ? `<a class="btn" href="${esc(urlWith({ tour: x.id }).search)}#route" data-tour="${esc(x.id)}">${esc(t("tours.open"))}</a>`
      : `<a class="btn btn-ghost" href="#status-${esc(x.id)}">${esc(t("tours.notYet"))}</a>`;
    return `
      <article class="tour tour-${esc(x.id)}" id="tour-${esc(x.id)}" aria-labelledby="tour-${esc(x.id)}-title">
        <div class="tour-art" aria-hidden="true">${icon(hasRoute ? "wine" : "leaf", "tour-art-icon")}</div>
        <div class="tour-body">
          <div class="tour-top">
            <span class="tour-region">${esc(L(x.region))}</span>
            ${statusChip(x.status)}
          </div>
          <h3 id="tour-${esc(x.id)}-title">${esc(L(x.title))}</h3>
          ${x.tagline ? `<p class="tour-tagline">${esc(L(x.tagline))}</p>` : ""}
          <p>${esc(L(x.summary))}</p>
          <p class="tour-regions"><span>${esc(t("tours.regions"))}:</span> ${x.focus.map((r) => esc(region(r))).join(" · ")}</p>
          <ul class="tour-facts">${facts}</ul>
          ${x.author ? `<p class="tour-author">${esc(L(x.author))}</p>` : ""}
          ${action}
        </div>
      </article>`;
  }

  // =====================================================================
  // Route of the selected tour.
  // =====================================================================
  function linkActions(a) {
    const links = a.links || {};
    const out = [];
    if (links.uvamoWine && UVAMO_WINE.test(links.uvamoWine)) {
      out.push(`<a class="action action-wine" href="${esc(links.uvamoWine)}" target="_blank" rel="noopener">${icon("wine")}${esc(t("action.wine"))}</a>`);
    }
    if (links.uvamoSet && UVAMO_SET.test(links.uvamoSet)) {
      out.push(`<a class="action action-wine" href="${esc(links.uvamoSet)}" target="_blank" rel="noopener">${icon("wine")}${esc(t("action.set"))}</a>`);
    }
    return out.join("");
  }

  const mapAction = (a, place) =>
    place && place.coord
      ? `<button type="button" class="action" data-map="${esc(a.id)}">${icon("map")}${esc(t("action.map"))}<span class="approx-tag">${esc(t("map.approxTag"))}</span></button>`
      : "";

  const timeText = (a) => (a.time ? L(a.time) : t("activity.timeTbc"));
  const flagLines = (a) => (a.flags || []).map((f) => `<li class="flag-line flag-line-confirm">${esc(term("flag", f))}</li>`);

  // Breakfasts, transfers, check-ins: one line, no repeated buttons.
  function compactCard(a, place) {
    const where = place
      ? `${icon("pin")}<button type="button" class="link-btn" data-place="${esc(a.place)}">${esc(L(place.name))}</button><span class="muted">· ${esc(region(place.region))}</span>`
      : a.route
        ? `${icon("transport")}<span>${esc(L(a.route))}</span>`
        : "";
    const flags = flagLines(a).join("");
    return `
      <article class="activity activity-compact type-${esc(a.type)}" id="activity-${esc(a.id)}" tabindex="-1" aria-labelledby="activity-${esc(a.id)}-title">
        <div class="activity-tile" aria-hidden="true">${icon(a.type)}<small>${esc(t(`type.${a.type}`))}</small></div>
        <div class="activity-body">
          <div class="activity-top">
            <span class="activity-time${a.time ? "" : " is-tbc"}">${esc(timeText(a))}</span>
            ${a.status === "draft" ? "" : statusChip(a.status)}
          </div>
          <h4 id="activity-${esc(a.id)}-title">${esc(L(a.title))}</h4>
          ${a.summary ? `<p class="activity-summary">${esc(L(a.summary))}</p>` : ""}
          ${where ? `<div class="where">${where}${mapAction(a, place)}</div>` : ""}
          ${flags ? `<ul class="flag-lines">${flags}</ul>` : ""}
        </div>
      </article>`;
  }

  function activityCard(a) {
    const place = DATA.places[a.place];
    const people = (a.people || []).map((id) => ({ id, ...DATA.people[id] }));
    if (!people.length && ["transport", "stay", "food", "other"].includes(a.type)) return compactCard(a, place);
    const rows = [];
    if (place) rows.push([t("activity.place"), `${esc(L(place.name))} <span class="muted">· ${esc(region(place.region))}</span>`]);
    else if (a.route) rows.push([t("activity.route"), esc(L(a.route))]);
    for (const p of people) rows.push([t("activity.host"), `${esc(L(p.name))} ${statusChip(p.status)}`]);
    if (a.wine) rows.push([t("activity.wine"), esc(L(a.wine))]);
    if (a.food) rows.push([t("activity.food"), esc(L(a.food))]);

    const flags = flagLines(a);
    if (a.seasonal) flags.unshift(`<li class="flag-line flag-line-seasonal"><strong>${esc(t("activity.seasonal"))}:</strong> ${esc(L(a.seasonal))}</li>`);

    const actions = [];
    for (const p of people) {
      actions.push(`<button type="button" class="action" data-person="${esc(p.id)}">${icon("person")}${esc(t("action.person"))}${people.length > 1 ? ` · ${esc(L(p.name))}` : ""}</button>`);
    }
    if (place) actions.push(`<button type="button" class="action" data-place="${esc(a.place)}">${icon("pin")}${esc(t("action.place"))}</button>`);
    actions.push(mapAction(a, place));
    const links = linkActions(a);

    return `
      <article class="activity type-${esc(a.type)}" id="activity-${esc(a.id)}" tabindex="-1" aria-labelledby="activity-${esc(a.id)}-title">
        <div class="activity-tile" aria-hidden="true">${icon(a.type)}<small>${esc(t(`type.${a.type}`))}</small></div>
        <div class="activity-body">
          <div class="activity-top">
            <span class="activity-time${a.time ? "" : " is-tbc"}">${esc(timeText(a))}</span>
            ${a.status === "draft" ? "" : statusChip(a.status)}
          </div>
          <h4 id="activity-${esc(a.id)}-title">${esc(L(a.title))}</h4>
          ${a.summary ? `<p class="activity-summary">${esc(L(a.summary))}</p>` : ""}
          <ul class="topics">${(a.topics || []).map((topic) => `<li>${esc(term("topic", topic))}</li>`).join("")}</ul>
          ${rows.length ? `<dl class="facts">${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${v}</dd></div>`).join("")}</dl>` : ""}
          ${flags.length ? `<ul class="flag-lines">${flags.join("")}</ul>` : ""}
          ${actions.join("") || links ? `<div class="actions">${actions.join("")}${links}</div>` : ""}
        </div>
      </article>`;
  }

  const question = (id) => (tour.openQuestions || []).find((q) => q.id === id);
  const OPEN_BY_DEFAULT = [1, 2];

  function renderDays(openDays) {
    return tour.days
      .map((day) => {
        const open = openDays.includes(day.n);
        const review = day.review ? question(day.review) : null;
        return `
          <section class="day${open ? " is-open" : ""}" id="day-${day.n}">
            <h3 class="day-heading">
              <button type="button" class="day-toggle" aria-expanded="${open}" aria-controls="day-${day.n}-body">
                <span class="day-num">${esc(t("day.label", { n: day.n }))}</span>
                <span class="day-main">
                  <span class="day-title">${esc(L(day.title))}</span>
                  <span class="day-meta">${day.note ? `${esc(L(day.note))} · ` : ""}${esc(L(day.route))} · ${esc(t("day.count", { n: day.activities.length }))}${review ? ` · <span class="day-review">${esc(t("day.review"))}</span>` : ""}</span>
                </span>
                <span class="day-chevron" aria-hidden="true"></span>
              </button>
            </h3>
            <div class="day-body" id="day-${day.n}-body"${open ? "" : " hidden"}>
              ${review ? `<p class="review-note"><strong>${esc(L(review.title))}.</strong> ${esc(L(review.text))}</p>` : ""}
              ${day.activities.map((a) => activityCard({ ...a, day: day.n })).join("")}
            </div>
          </section>`;
      })
      .join("");
  }

  function setDayOpen(n, open) {
    const section = $(`#day-${n}`);
    if (!section) return;
    section.classList.toggle("is-open", open);
    $(".day-toggle", section).setAttribute("aria-expanded", String(open));
    $(".day-body", section).hidden = !open;
  }
  const openDayNumbers = () => tour.days.filter((d) => $(`#day-${d.n}`)?.classList.contains("is-open")).map((d) => d.n);
  const allOpen = () => openDayNumbers().length === tour.days.length;
  const syncToggleAll = () => {
    $("#toggleAll").textContent = t(allOpen() ? "route.collapseAll" : "route.expandAll");
  };

  function markActive(id) {
    $$(".activity.is-active").forEach((el) => el.classList.remove("is-active"));
    activeId = id;
    if (id) $(`#activity-${CSS.escape(id)}`)?.classList.add("is-active");
  }

  function selectActivity(id, { scroll = true } = {}) {
    const a = byId.get(id);
    if (!a) return;
    setView("itinerary");
    setDayOpen(a.day, true);
    syncToggleAll();
    markActive(id);
    if (scroll) {
      const card = $(`#activity-${CSS.escape(id)}`);
      card.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
      card.focus({ preventScroll: true });
    }
  }

  const renderPeople = () => [...new Set(activities.flatMap((a) => a.people || []))]
    .map((id) => [id, DATA.people[id]])
    .map(([id, p]) => `
      <button type="button" class="person-card" data-person="${esc(id)}">
        <span class="portrait" aria-hidden="true">${esc(initials(L(p.name)))}</span>
        <span class="person-text">
          <strong>${esc(L(p.name))}</strong>
          <span>${p.business && L(p.business) !== L(p.name) ? `${esc(L(p.business))} · ` : ""}${esc(region(p.region))}</span>
          ${statusChip(p.status)}
        </span>
      </button>`)
    .join("");

  const renderStops = () => mappedPlaces
    .map((id) => `<button type="button" class="stop" data-stop="${esc(id)}"><span class="stop-days">${esc(daysLabel(id))}</span>${esc(L(DATA.places[id].name))}</button>`)
    .join("");

  const renderHighlights = () => (tour.highlights || [])
    .map((h) => `
      <li class="highlight${h.status ? ` highlight-${esc(h.status)}` : ""}">
        <button type="button" data-go="${esc(h.activities[0])}">
          <strong>${esc(L(h.title))}</strong>
          <span>${esc(L(h.text))}</span>
          ${h.status ? statusChip(h.status) : ""}
        </button>
      </li>`)
    .join("");

  // Renders the route of a tour. `keep` restores open days, selection and map after a language switch.
  function loadTour(id, keep = null) {
    tour = routable.find((x) => x.id === id) || routable[0];
    activities = tour.days.flatMap((day) => day.activities.map((a) => ({ ...a, day: day.n })));
    byId = new Map(activities.map((a) => [a.id, a]));
    mappedPlaces = [];
    for (const a of activities) {
      const place = DATA.places[a.place];
      if (place && place.coord && !mappedPlaces.includes(a.place)) mappedPlaces.push(a.place);
    }

    $("#route-eyebrow").textContent = t("route.eyebrow", { region: L(tour.region) });
    $("#route-title").textContent = L(tour.title);
    $("#highlights").innerHTML = renderHighlights();
    $("#highlights").hidden = !(tour.highlights || []).length;
    $("#days").innerHTML = renderDays(keep ? keep.openDays : OPEN_BY_DEFAULT);
    syncToggleAll();
    $("#people").innerHTML = renderPeople();
    $(".people").hidden = !$("#people").children.length;
    $("#stops").innerHTML = renderStops();
    markActive(keep && byId.has(keep.activeId) ? keep.activeId : null);
    renderMarkers();
    if (keep && keep.mapView && map) {
      fitted = true;
      map.setView(keep.mapView.center, keep.mapView.zoom, { animate: false });
      if (keep.pin) highlightPin(keep.pin);
      if (keep.popup) markers.get(keep.popup)?.openPopup();
    } else {
      fitted = false;
      ensureMapSized();
    }
  }

  // ---------- language switch, keeping the reader's place ----------
  function captureContext() {
    // What the reader is looking at: the selected card if it is on screen,
    // otherwise the innermost block across the middle of the viewport.
    // Translations differ in length, so the page is re-aligned on that block.
    const visible = (r) => r.bottom > 0 && r.top < innerHeight;
    let anchor = null;
    const active = activeId && $(`#activity-${CSS.escape(activeId)}`);
    if (active && visible(active.getBoundingClientRect())) {
      anchor = { id: active.id, top: active.getBoundingClientRect().top };
    } else {
      const middle = innerHeight / 2;
      for (const el of $$(".activity[id], .day[id], .tour[id], .question-group[id], main > section[id]")) {
        const r = el.getBoundingClientRect();
        if (r.top <= middle && r.bottom > middle && (!anchor || r.top >= anchor.top)) anchor = { id: el.id, top: r.top };
      }
    }
    return {
      openDays: openDayNumbers(),
      activeId,
      view: grid.dataset.view,
      pin: [...markers].find(([, m]) => m.getElement()?.classList.contains("is-active"))?.[0] || null,
      popup: [...markers].find(([, m]) => m.isPopupOpen())?.[0] || null,
      mapView: map && fitted ? { center: map.getCenter(), zoom: map.getZoom() } : null,
      anchor,
      scrollY: window.scrollY,
    };
  }

  function setLanguage(code) {
    if (!isLang(code) || code === lang) return;
    const keep = captureContext();
    lang = code;
    history.replaceState(null, "", urlWith({ lang: code, tour: tour.id }));
    renderChrome();
    loadTour(tour.id, keep);
    setView(keep.view);
    const realign = () => {
      const anchor = keep.anchor && document.getElementById(keep.anchor.id);
      const y = anchor ? anchor.getBoundingClientRect().top + window.scrollY - keep.anchor.top : keep.scrollY;
      window.scrollTo({ top: y, behavior: "instant" });
      return window.scrollY;
    };
    realign();
    // Georgian fonts load on first use and re-flow the page (the browser's own
    // scroll anchoring then shifts scrollY): align again once they are in,
    // unless the reader has started scrolling in the meantime.
    let readerMoved = false;
    const moved = () => { readerMoved = true; };
    const inputs = ["wheel", "touchmove", "keydown"];
    inputs.forEach((type) => addEventListener(type, moved, { once: true, passive: true }));
    const sample = "ქართული";
    const fonts = lang === "ka"
      ? Promise.all(['16px "Noto Sans Georgian"', '16px "Noto Serif Georgian"'].map((f) => document.fonts.load(f, sample)))
      : Promise.resolve();
    fonts.catch(() => {}).then(() => requestAnimationFrame(() => {
      inputs.forEach((type) => removeEventListener(type, moved));
      if (!readerMoved) realign();
    }));
  }

  // ---------- events (attached once; containers are re-rendered) ----------
  $("#langs").addEventListener("click", (event) => {
    const link = event.target.closest("[data-lang]");
    if (!link) return;
    event.preventDefault();
    setLanguage(link.dataset.lang);
  });

  $("#tours").addEventListener("click", (event) => {
    const link = event.target.closest("[data-tour]");
    if (!link) return;
    event.preventDefault();
    loadTour(link.dataset.tour);
    history.replaceState(null, "", `${urlWith({ tour: link.dataset.tour }).search}#route`);
    renderChrome(); // language links now carry the selected tour
    $("#route").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
  });

  $("#days").addEventListener("click", (event) => {
    const toggle = event.target.closest(".day-toggle");
    if (toggle) {
      const n = Number(toggle.closest(".day").id.slice(4));
      setDayOpen(n, toggle.getAttribute("aria-expanded") !== "true");
      syncToggleAll();
      return;
    }
    const person = event.target.closest("[data-person]");
    if (person) return openPerson(person.dataset.person, person);
    const place = event.target.closest("[data-place]");
    if (place) return openPlace(place.dataset.place, place);
    const mapBtn = event.target.closest("[data-map]");
    if (mapBtn) return showOnMap(byId.get(mapBtn.dataset.map).place, mapBtn.dataset.map);
  });

  $("#toggleAll").addEventListener("click", () => {
    const open = !allOpen();
    for (const d of tour.days) setDayOpen(d.n, open);
    syncToggleAll();
  });

  $("#highlights").addEventListener("click", (event) => {
    const go = event.target.closest("[data-go]");
    if (go) selectActivity(go.dataset.go);
  });

  $("#people").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-person]");
    if (btn) openPerson(btn.dataset.person, btn);
  });

  // ---------- dialog ----------
  const dialog = $("#detail");
  let returnFocus = null;
  $("#detail-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
    // Leaving the dialog for the itinerary or map: focus goes there, not back to the opener.
    const go = event.target.closest("[data-go]");
    if (go) {
      returnFocus = null;
      dialog.close();
      selectActivity(go.dataset.go);
    }
    const mapBtn = event.target.closest("[data-map-place]");
    if (mapBtn) {
      returnFocus = $("#fullRoute");
      dialog.close();
      showOnMap(mapBtn.dataset.mapPlace);
    }
    const placeBtn = event.target.closest("[data-place]");
    if (placeBtn) openPlace(placeBtn.dataset.place, returnFocus);
  });
  dialog.addEventListener("close", () => {
    if (returnFocus && document.contains(returnFocus) && !dialog.open) returnFocus.focus({ preventScroll: true });
  });

  function showDialog(kicker, title, html, opener) {
    $("#detail-kicker").textContent = kicker;
    $("#detail-title").textContent = title;
    $("#detail-body").innerHTML = html;
    if (opener) returnFocus = opener;
    if (!dialog.open) dialog.showModal();
    $("#detail-close").focus();
  }

  const activityLinks = (list) =>
    `<ul class="detail-list">${list
      .map((a) => `<li><button type="button" class="link-btn" data-go="${esc(a.id)}">${esc(t("day.label", { n: a.day }))} · ${esc(timeText(a))} — ${esc(L(a.title))}</button></li>`)
      .join("")}</ul>`;

  function openPerson(id, opener) {
    const p = DATA.people[id];
    if (!p) return;
    const appears = activitiesWith(id);
    const placeIds = [...new Set(appears.map((a) => a.place).filter(Boolean))];
    const name = L(p.name);
    showDialog(
      `${t("person.kicker")} · ${region(p.region)}`,
      name,
      `
      <div class="detail-photo">
        ${p.photo ? `<img src="${esc(p.photo)}" alt="${esc(name)}" />` : `<span class="detail-initials">${esc(initials(name))}</span><span>${esc(t("person.photo"))}</span>`}
      </div>
      <div class="detail-row">${statusChip(p.status)}<span>${esc(L(p.role))}</span></div>
      <dl class="facts detail-facts">
        ${p.business && L(p.business) !== name ? `<div><dt>${esc(t("person.business"))}</dt><dd>${esc(L(p.business))}</dd></div>` : ""}
        <div><dt>${esc(t("person.region"))}</dt><dd>${esc(region(p.region))}</dd></div>
      </dl>
      <p class="detail-text">${esc(L(p.story) || t("person.noStory"))}</p>
      ${p.note ? `<p class="detail-note">${esc(L(p.note))}</p>` : ""}
      ${appears.length ? `<h4 class="detail-sub">${esc(t("person.appears"))}</h4>${activityLinks(appears)}` : ""}
      ${placeIds.length ? `<div class="actions">${placeIds.map((pid) => `<button type="button" class="action" data-place="${esc(pid)}">${icon("pin")}${esc(t("action.place"))} · ${esc(L(DATA.places[pid].name))}</button>`).join("")}</div>` : ""}
      `,
      opener,
    );
  }

  function openPlace(id, opener) {
    const p = DATA.places[id];
    if (!p) return;
    const here = activitiesAt(id);
    const name = L(p.name);
    showDialog(
      `${t("place.kicker")} · ${region(p.region)}`,
      name,
      `
      <div class="detail-photo detail-photo-place">
        ${p.photo ? `<img src="${esc(p.photo)}" alt="${esc(name)}" />` : `${icon("pin", "icon detail-icon")}<span>${esc(t("place.photo"))}</span>`}
      </div>
      ${p.status ? `<div class="detail-row">${statusChip(p.status)}</div>` : ""}
      <p class="detail-text">${esc(L(p.description))}</p>
      <dl class="facts detail-facts">
        <div><dt>${esc(t("place.region"))}</dt><dd>${esc(region(p.region))}</dd></div>
        <div><dt>${esc(t("place.location"))}</dt><dd>${esc(L(p.locationLabel))}${p.coord ? ` <span class="approx-tag">≈ ${esc(t("map.approxShort"))}</span>` : ""}</dd></div>
      </dl>
      ${p.coord ? `<div class="actions"><button type="button" class="action action-strong" data-map-place="${esc(id)}">${icon("map")}${esc(t("action.map"))}</button></div>` : `<p class="detail-note">${esc(t("place.noCoord"))}</p>`}
      ${here.length ? `<h4 class="detail-sub">${esc(t("place.activities"))}</h4>${activityLinks(here)}` : ""}
      `,
      opener,
    );
  }

  // ---------- view switch (mobile) ----------
  const narrow = matchMedia("(max-width: 999px)");
  const grid = $(".route-grid");
  function setView(view) {
    if (!narrow.matches) view = "itinerary";
    grid.dataset.view = view;
    for (const tab of $$(".view-switch [data-view]")) {
      tab.setAttribute("aria-selected", String(tab.dataset.view === view));
    }
    if (view === "map") ensureMapSized();
  }
  $(".view-switch").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-view]");
    if (tab) setView(tab.dataset.view);
  });
  narrow.addEventListener("change", () => {
    setView("itinerary");
    ensureMapSized();
  });

  // ---------- map ----------
  function showNotice(key) {
    noticeKey = key;
    notice.textContent = t(key);
    notice.hidden = false;
  }

  // Leaflet cannot measure a hidden container (the phone layout hides the map
  // until the Map tab is chosen), so size and fit it the first time it is visible.
  function ensureMapSized() {
    if (!map || !$("#map").offsetWidth) return false;
    map.invalidateSize({ animate: false });
    if (!fitted) fullRoute();
    return true;
  }

  function popupFor(placeId) {
    const p = DATA.places[placeId];
    const el = document.createElement("div");
    el.className = "popup";
    el.innerHTML = `
      <strong>${esc(L(p.name))}</strong>
      <span class="popup-approx">≈ ${esc(t("map.approxShort"))} · ${esc(L(p.locationLabel))}</span>
      <ul>${activitiesAt(placeId)
        .map((a) => `<li><button type="button" data-go="${esc(a.id)}">${esc(t("day.label", { n: a.day }))} · ${esc(L(a.title))}</button></li>`)
        .join("")}</ul>`;
    el.addEventListener("click", (event) => {
      const go = event.target.closest("[data-go]");
      if (go) selectActivity(go.dataset.go);
    });
    return el;
  }

  function highlightPin(placeId) {
    for (const [id, marker] of markers) {
      marker.getElement()?.classList.toggle("is-active", id === placeId);
      marker.setZIndexOffset(id === placeId ? 1000 : 0);
    }
  }

  // Racha's stops sit a few kilometres apart and overlap at overview zoom:
  // a tap on a crowded pin also zooms in so its neighbours can be reached.
  function zoomIfCrowded(placeId) {
    const here = map.latLngToContainerPoint(DATA.places[placeId].coord);
    const crowded = [...markers.keys()].some(
      (id) => id !== placeId && map.latLngToContainerPoint(DATA.places[id].coord).distanceTo(here) < 32,
    );
    if (crowded && map.getZoom() < 10) {
      map.flyTo(DATA.places[placeId].coord, Math.min(map.getZoom() + 2, 10), { duration: prefersReducedMotion() ? 0 : 0.5 });
    }
  }

  // The activity a pin leads to: the selected one if it is at this place, else the first one there.
  const activityForPin = (placeId) =>
    activeId && byId.get(activeId)?.place === placeId ? activeId : activitiesAt(placeId)[0]?.id;

  function onPin(placeId) {
    highlightPin(placeId);
    zoomIfCrowded(placeId);
    const target = activityForPin(placeId);
    // On narrow screens the map is its own view: stay on the map and let the
    // popup offer the activity; on wide screens the card is beside the map.
    if (target && !narrow.matches) selectActivity(target);
  }

  function showOnMap(placeId, activity) {
    if (activity) {
      setDayOpen(byId.get(activity).day, true);
      markActive(activity);
    }
    setView("map");
    if (narrow.matches) $("#map-pane").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    if (!ensureMapSized()) return;
    map.flyTo(DATA.places[placeId].coord, 10, { duration: prefersReducedMotion() ? 0 : 0.6 });
    highlightPin(placeId);
    markers.get(placeId)?.openPopup();
  }

  function fullRoute() {
    if (!map || !$("#map").offsetWidth || !mappedPlaces.length) return;
    fitted = true;
    map.closePopup();
    highlightPin(null);
    map.fitBounds(L_.latLngBounds(mappedPlaces.map((id) => DATA.places[id].coord)), { padding: [28, 28], maxZoom: 9 });
  }
  $("#fullRoute").addEventListener("click", () => {
    fullRoute();
    markActive(null);
  });

  // Stop chips: work with or without the map library.
  $("#stops").addEventListener("click", (event) => {
    const stop = event.target.closest("[data-stop]");
    if (!stop) return;
    if (map) showOnMap(stop.dataset.stop);
    else selectActivity(activitiesAt(stop.dataset.stop)[0].id);
  });

  function addZoomControl() {
    zoomControl = L_.control.zoom({ zoomInTitle: t("map.zoomIn"), zoomOutTitle: t("map.zoomOut") }).addTo(map);
  }

  function createMap() {
    if (!L_) {
      showNotice("map.noMap");
      $("#map").classList.add("is-unavailable");
      return;
    }
    map = L_.map("map", { scrollWheelZoom: false, zoomSnap: 0.5, zoomControl: false }).setView([42.1, 43.1], 7);
    addZoomControl();
    const tiles = L_.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });
    let loaded = 0;
    tiles.on("tileload", () => {
      loaded += 1;
      notice.hidden = true;
      noticeKey = null;
    });
    tiles.on("tileerror", () => {
      if (!loaded) showNotice("map.noTiles");
    });
    tiles.addTo(map);
  }

  function renderMarkers() {
    if (!map) return;
    for (const marker of markers.values()) marker.remove();
    markers.clear();
    for (const id of mappedPlaces) {
      const place = DATA.places[id];
      const marker = L_.marker(place.coord, {
        title: `${L(place.name)} (${t("map.approxShort")})`,
        alt: L(place.name),
        keyboard: true,
        icon: L_.divIcon({
          className: "pin",
          html: `<span class="pin-dot">${esc(daysLabel(id))}</span>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
          popupAnchor: [0, -14],
        }),
      }).addTo(map);
      marker.bindPopup(() => popupFor(id), { maxWidth: 260 });
      marker.on("click", () => onPin(id));
      markers.set(id, marker);
    }
  }

  // ---------- start ----------
  createMap();
  loadTour(new URLSearchParams(location.search).get("tour"));
  renderChrome();
  window.WIWI_PROTOTYPE = {
    get map() { return map; },
    get lang() { return lang; },
    get tour() { return tour.id; },
    selectActivity,
    showOnMap,
    fullRoute,
    setLanguage,
  };
})();
