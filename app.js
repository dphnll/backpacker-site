/*
 * WIWI Tours prototype — rendering and interactions.
 * Everything visible comes from data.js (content) and i18n.js (interface text).
 * No build step, no framework: open index.html through any static server.
 */
(() => {
  const DATA = window.WIWI_DATA;
  const UI = window.WIWI_I18N;
  const CONTENT = window.WIWI_CONTENT_I18N || {};

  // ---------- language ----------
  const requested = new URLSearchParams(location.search).get("lang");
  const hasStrings = (code) => UI[code] && Object.keys(UI[code]).length > 0;
  const lang = requested && hasStrings(requested) ? requested : "en";
  document.documentElement.lang = lang;

  function t(key, vars = {}) {
    const text = (UI[lang] && UI[lang][key]) ?? UI.en[key] ?? key;
    return text.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
  }
  // Content field with an optional translation overlay.
  function c(collection, id, field, fallback) {
    const overlay = CONTENT[lang];
    const key = `${collection}.${id}.${field}`;
    return (overlay && overlay[key]) || fallback;
  }

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
  const $ = (selector, root = document) => root.querySelector(selector);

  // Only complete public UVAMO! tasting URLs are shown; anything else is dropped.
  const UVAMO_SET = /^https:\/\/[a-z0-9.-]+\/tasting\/[A-Za-z0-9_-]+\/?$/;
  const UVAMO_WINE = /^https:\/\/[a-z0-9.-]+\/tasting\/[A-Za-z0-9_-]+\/wine\/\d+\/?$/;

  // ---------- per-tour state (rebuilt by loadTour) ----------
  const routable = DATA.tours.filter((tour) => (tour.days || []).length);
  let tour = null;
  let activities = [];
  let byId = new Map();
  let mappedPlaces = [];
  const activitiesAt = (placeId) => activities.filter((a) => a.place === placeId);
  const activitiesWith = (personId) => activities.filter((a) => (a.people || []).includes(personId));

  const daysLabel = (placeId) => {
    const days = [...new Set(activitiesAt(placeId).map((a) => a.day))].sort((x, y) => x - y);
    const contiguous = days.every((d, i) => i === 0 || d === days[i - 1] + 1);
    return days.length > 1 && contiguous ? `${days[0]}–${days[days.length - 1]}` : days.join("·");
  };

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

  const statusChip = (status) =>
    `<span class="status status-${esc(status)}">${esc(t(`status.${status}`))}</span>`;

  // ---------- static text ----------
  for (const el of document.querySelectorAll("[data-i18n]")) el.textContent = t(el.dataset.i18n);

  const langs = Object.keys(UI).filter(hasStrings);
  if (langs.length > 1) {
    const select = $("#lang");
    select.innerHTML = langs.map((code) => `<option value="${code}"${code === lang ? " selected" : ""}>${code.toUpperCase()}</option>`).join("");
    select.addEventListener("change", () => {
      const url = new URL(location.href);
      url.searchParams.set("lang", select.value);
      location.href = url.toString();
    });
    select.closest(".lang").hidden = false;
  }

  // ---------- tours ----------
  $("#tours").innerHTML = DATA.tours
    .map((tour) => {
      const title = c("tours", tour.id, "title", tour.title);
      const hasRoute = (tour.days || []).length > 0;
      const facts = tour.facts
        .map((f) => `<li>${esc(f.label)}${f.note ? `<span class="fact-note">${esc(f.note)}</span>` : ""}</li>`)
        .join("");
      const action = hasRoute
        ? `<a class="btn" href="?tour=${esc(tour.id)}#route" data-tour="${esc(tour.id)}">${esc(t("tours.open"))}</a>`
        : `<a class="btn btn-ghost" href="#status-${esc(tour.id)}">${esc(t("tours.notYet"))}</a>`;
      return `
        <article class="tour tour-${esc(tour.id)}" aria-labelledby="tour-${esc(tour.id)}-title">
          <div class="tour-art" aria-hidden="true">${icon(hasRoute ? "wine" : "leaf", "tour-art-icon")}</div>
          <div class="tour-body">
            <div class="tour-top">
              <span class="tour-region">${esc(c("tours", tour.id, "region", tour.region))}</span>
              ${statusChip(tour.status)}
            </div>
            <h3 id="tour-${esc(tour.id)}-title">${esc(title)}</h3>
            ${tour.tagline ? `<p class="tour-tagline">${esc(c("tours", tour.id, "tagline", tour.tagline))}</p>` : ""}
            <p>${esc(c("tours", tour.id, "summary", tour.summary))}</p>
            <p class="tour-regions"><span>${esc(t("tours.regions"))}:</span> ${tour.focus.map(esc).join(" · ")}</p>
            <ul class="tour-facts">${facts}</ul>
            ${tour.author ? `<p class="tour-author">${esc(tour.author)}</p>` : ""}
            ${action}
          </div>
        </article>`;
    })
    .join("");
  $("#tours").addEventListener("click", (event) => {
    const link = event.target.closest("[data-tour]");
    if (!link) return;
    event.preventDefault();
    loadTour(link.dataset.tour);
    history.replaceState(null, "", `?${new URLSearchParams({ ...Object.fromEntries(new URLSearchParams(location.search)), tour: link.dataset.tour })}#route`);
    $("#route").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
  });

  // ---------- legend ----------
  $("#legend").innerHTML = [
    ["status status-draft", t("legend.draft")],
    ["status status-to-confirm", t("legend.toConfirm")],
    ["flag flag-seasonal", t("legend.seasonal")],
    ["flag flag-review", t("legend.review")],
    ["flag flag-approx", t("legend.approx")],
  ]
    .map(([cls, label]) => `<li><span class="${cls}" aria-hidden="true"></span>${esc(label)}</li>`)
    .join("");

  // ---------- itinerary ----------
  const question = (id) => (tour.openQuestions || []).find((q) => q.id === id);

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

  // Breakfasts, transfers, check-ins: one line, no repeated buttons.
  function compactCard(a, place, title, summary) {
    const where = place
      ? `${icon("pin")}<button type="button" class="link-btn" data-place="${esc(a.place)}">${esc(place.name)}</button><span class="muted">· ${esc(place.region)}</span>`
      : a.route
        ? `${icon("transport")}<span>${esc(a.route)}</span>`
        : "";
    const flags = (a.flags || []).map((f) => `<li class="flag-line flag-line-confirm">${esc(f)}</li>`).join("");
    return `
      <article class="activity activity-compact type-${esc(a.type)}" id="activity-${esc(a.id)}" tabindex="-1" aria-labelledby="activity-${esc(a.id)}-title">
        <div class="activity-tile" aria-hidden="true">${icon(a.type)}<small>${esc(t(`type.${a.type}`))}</small></div>
        <div class="activity-body">
          <div class="activity-top">
            <span class="activity-time${a.time ? "" : " is-tbc"}">${esc(a.time ? c("activities", a.id, "time", a.time) : t("activity.timeTbc"))}</span>
            ${a.status === "draft" ? "" : statusChip(a.status)}
          </div>
          <h4 id="activity-${esc(a.id)}-title">${esc(title)}</h4>
          ${summary ? `<p class="activity-summary">${esc(summary)}</p>` : ""}
          ${where || place ? `<div class="where">${where}${mapAction(a, place)}</div>` : ""}
          ${flags ? `<ul class="flag-lines">${flags}</ul>` : ""}
        </div>
      </article>`;
  }

  function activityCard(a) {
    const place = DATA.places[a.place];
    const people = (a.people || []).map((id) => ({ id, ...DATA.people[id] }));
    const title = c("activities", a.id, "title", a.title);
    const summary = c("activities", a.id, "summary", a.summary);
    if (!people.length && ["transport", "stay", "food", "other"].includes(a.type)) return compactCard(a, place, title, summary);
    const rows = [];
    if (place) rows.push([t("activity.place"), `${esc(place.name)} <span class="muted">· ${esc(place.region)}</span>`]);
    else if (a.route) rows.push([t("activity.route"), esc(a.route)]);
    for (const p of people) rows.push([t("activity.host"), `${esc(p.name)} ${statusChip(p.status)}`]);
    if (a.wine) rows.push([t("activity.wine"), esc(c("activities", a.id, "wine", a.wine))]);
    if (a.food) rows.push([t("activity.food"), esc(c("activities", a.id, "food", a.food))]);

    const flags = (a.flags || []).map((f) => `<li class="flag-line flag-line-confirm">${esc(f)}</li>`);
    if (a.seasonal) flags.unshift(`<li class="flag-line flag-line-seasonal"><strong>${esc(t("activity.seasonal"))}:</strong> ${esc(a.seasonal)}</li>`);

    const actions = [];
    for (const p of people) {
      actions.push(`<button type="button" class="action" data-person="${esc(p.id)}">${icon("person")}${esc(t("action.person"))}${people.length > 1 ? ` · ${esc(p.name)}` : ""}</button>`);
    }
    if (place) actions.push(`<button type="button" class="action" data-place="${esc(a.place)}">${icon("pin")}${esc(t("action.place"))}</button>`);
    actions.push(mapAction(a, place));
    const links = linkActions(a);

    return `
      <article class="activity type-${esc(a.type)}" id="activity-${esc(a.id)}" tabindex="-1" aria-labelledby="activity-${esc(a.id)}-title">
        <div class="activity-tile" aria-hidden="true">${icon(a.type)}<small>${esc(t(`type.${a.type}`))}</small></div>
        <div class="activity-body">
          <div class="activity-top">
            <span class="activity-time${a.time ? "" : " is-tbc"}">${esc(a.time ? c("activities", a.id, "time", a.time) : t("activity.timeTbc"))}</span>
            ${a.status === "draft" ? "" : statusChip(a.status)}
          </div>
          <h4 id="activity-${esc(a.id)}-title">${esc(title)}</h4>
          ${summary ? `<p class="activity-summary">${esc(summary)}</p>` : ""}
          <ul class="topics">${(a.topics || []).map((topic) => `<li>${esc(topic)}</li>`).join("")}</ul>
          ${rows.length ? `<dl class="facts">${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${v}</dd></div>`).join("")}</dl>` : ""}
          ${flags.length ? `<ul class="flag-lines">${flags.join("")}</ul>` : ""}
          ${actions.length || links ? `<div class="actions">${actions.join("")}${links}</div>` : ""}
        </div>
      </article>`;
  }

  const OPEN_BY_DEFAULT = new Set([1, 2]);
  const renderDays = () => tour.days
    .map((day) => {
      const open = OPEN_BY_DEFAULT.has(day.n);
      const review = day.review ? question(day.review) : null;
      return `
        <section class="day${open ? " is-open" : ""}" id="day-${day.n}">
          <h3 class="day-heading">
            <button type="button" class="day-toggle" aria-expanded="${open}" aria-controls="day-${day.n}-body">
              <span class="day-num">${esc(t("day.label", { n: day.n }))}</span>
              <span class="day-main">
                <span class="day-title">${esc(c("days", `${tour.id}-${day.n}`, "title", day.title))}</span>
                <span class="day-meta">${day.note ? `${esc(c("days", `${tour.id}-${day.n}`, "note", day.note))} · ` : ""}${esc(day.route)} · ${esc(t("day.count", { n: day.activities.length }))}${review ? ` · <span class="day-review">${esc(t("day.review"))}</span>` : ""}</span>
              </span>
              <span class="day-chevron" aria-hidden="true"></span>
            </button>
          </h3>
          <div class="day-body" id="day-${day.n}-body"${open ? "" : " hidden"}>
            ${review ? `<p class="review-note"><strong>${esc(review.title)}.</strong> ${esc(review.text)}</p>` : ""}
            ${day.activities.map((a) => activityCard({ ...a, day: day.n })).join("")}
          </div>
        </section>`;
    })
    .join("");

  function setDayOpen(n, open) {
    const section = $(`#day-${n}`);
    section.classList.toggle("is-open", open);
    $(".day-toggle", section).setAttribute("aria-expanded", String(open));
    $(".day-body", section).hidden = !open;
  }
  const allOpen = () => tour.days.every((d) => $(`#day-${d.n}`).classList.contains("is-open"));
  const syncToggleAll = () => {
    $("#toggleAll").textContent = t(allOpen() ? "route.collapseAll" : "route.expandAll");
  };
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

  let activeId = null;
  function selectActivity(id, { scroll = true } = {}) {
    const a = byId.get(id);
    if (!a) return;
    setView("itinerary");
    setDayOpen(a.day, true);
    syncToggleAll();
    document.querySelectorAll(".activity.is-active").forEach((el) => el.classList.remove("is-active"));
    const card = $(`#activity-${CSS.escape(id)}`);
    card.classList.add("is-active");
    activeId = id;
    if (scroll) {
      card.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
      card.focus({ preventScroll: true });
    }
  }
  const prefersReducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- people ----------
  const renderPeople = () => [...new Set(activities.flatMap((a) => a.people || []))]
    .map((id) => [id, DATA.people[id]])
    .map(([id, p]) => `
      <button type="button" class="person-card" data-person="${esc(id)}">
        <span class="portrait" aria-hidden="true">${esc(initials(p.name))}</span>
        <span class="person-text">
          <strong>${esc(p.name)}</strong>
          <span>${p.business && p.business !== p.name ? `${esc(p.business)} · ` : ""}${esc(p.region)}</span>
          ${statusChip(p.status)}
        </span>
      </button>`)
    .join("");
  $("#people").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-person]");
    if (btn) openPerson(btn.dataset.person, btn);
  });

  function initials(name) {
    return name.split(/\s+/).filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("") || "·";
  }

  // ---------- questions, partners ----------
  // All tours' open questions, grouped by tour: reviewers see the whole picture.
  $("#questions").innerHTML = DATA.tours
    .filter((x) => (x.openQuestions || []).length)
    .map((x) => `
      <section class="question-group" id="status-${esc(x.id)}" aria-labelledby="status-${esc(x.id)}-title">
        <h3 class="question-tour" id="status-${esc(x.id)}-title">${esc(c("tours", x.id, "region", x.region))} — ${esc(c("tours", x.id, "title", x.title))} ${statusChip(x.status)}</h3>
        <div class="questions-grid">${x.openQuestions
          .map((q) => `<article class="question"><h4>${esc(q.title)}</h4><p>${esc(q.text)}</p></article>`)
          .join("")}</div>
      </section>`)
    .join("");
  $("#partners").innerHTML = DATA.partners
    .map((p) => `
      <article class="partner">
        <h3>${p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)}</a>` : esc(p.name)}</h3>
        <p>${esc(p.role)}</p>
      </article>`)
    .join("");

  // ---------- dialog ----------
  const dialog = $("#detail");
  let returnFocus = null;
  $("#detail-close").setAttribute("aria-label", t("action.close"));
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
      .map((a) => `<li><button type="button" class="link-btn" data-go="${esc(a.id)}">${esc(t("day.label", { n: a.day }))} · ${esc(a.time || t("activity.timeTbc"))} — ${esc(a.title)}</button></li>`)
      .join("")}</ul>`;

  function openPerson(id, opener) {
    const p = DATA.people[id];
    if (!p) return;
    const appears = activitiesWith(id);
    const placeIds = [...new Set(appears.map((a) => a.place).filter(Boolean))];
    const story = c("people", id, "story", p.story);
    showDialog(
      `${t("person.kicker")} · ${p.region}`,
      p.name,
      `
      <div class="detail-photo">
        ${p.photo ? `<img src="${esc(p.photo)}" alt="${esc(p.name)}" />` : `<span class="detail-initials">${esc(initials(p.name))}</span><span>${esc(t("person.photo"))}</span>`}
      </div>
      <div class="detail-row">${statusChip(p.status)}<span>${esc(p.role)}</span></div>
      <dl class="facts detail-facts">
        ${p.business && p.business !== p.name ? `<div><dt>${esc(t("person.business"))}</dt><dd>${esc(p.business)}</dd></div>` : ""}
        <div><dt>${esc(t("person.region"))}</dt><dd>${esc(p.region)}</dd></div>
      </dl>
      <p class="detail-text">${esc(story || t("person.noStory"))}</p>
      ${p.note ? `<p class="detail-note">${esc(p.note)}</p>` : ""}
      ${appears.length ? `<h4 class="detail-sub">${esc(t("person.appears"))}</h4>${activityLinks(appears)}` : ""}
      ${placeIds.length ? `<div class="actions">${placeIds.map((pid) => `<button type="button" class="action" data-place="${esc(pid)}">${icon("pin")}${esc(t("action.place"))} · ${esc(DATA.places[pid].name)}</button>`).join("")}</div>` : ""}
      `,
      opener,
    );
  }

  function openPlace(id, opener) {
    const p = DATA.places[id];
    if (!p) return;
    const here = activitiesAt(id);
    showDialog(
      `${t("place.kicker")} · ${p.region}`,
      p.name,
      `
      <div class="detail-photo detail-photo-place">
        ${p.photo ? `<img src="${esc(p.photo)}" alt="${esc(p.name)}" />` : `${icon("pin", "icon detail-icon")}<span>${esc(t("place.photo"))}</span>`}
      </div>
      ${p.status ? `<div class="detail-row">${statusChip(p.status)}</div>` : ""}
      <p class="detail-text">${esc(c("places", id, "description", p.description))}</p>
      <dl class="facts detail-facts">
        <div><dt>${esc(t("place.region"))}</dt><dd>${esc(p.region)}</dd></div>
        <div><dt>${esc(t("place.location"))}</dt><dd>${esc(p.locationLabel)}${p.coord ? ` <span class="approx-tag">≈ ${esc(t("map.approxShort"))}</span>` : ""}</dd></div>
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
    for (const tab of document.querySelectorAll(".view-switch [data-view]")) {
      tab.setAttribute("aria-selected", String(tab.dataset.view === view));
    }
    if (view === "map") ensureMapSized();
  }
  document.querySelector(".view-switch").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-view]");
    if (tab) setView(tab.dataset.view);
  });
  narrow.addEventListener("change", () => {
    setView("itinerary");
    ensureMapSized();
  });

  // ---------- map ----------
  let map = null;
  let fitted = false;
  const markers = new Map();

  // Leaflet cannot measure a hidden container (the phone layout hides the map
  // until the Map tab is chosen), so size and fit it the first time it is visible.
  function ensureMapSized() {
    if (!map || !$("#map").offsetWidth) return false;
    map.invalidateSize({ animate: false });
    if (!fitted) fullRoute();
    return true;
  }
  const notice = $("#mapNotice");

  function showNotice(text) {
    notice.textContent = text;
    notice.hidden = false;
  }

  function popupFor(placeId) {
    const p = DATA.places[placeId];
    const el = document.createElement("div");
    el.className = "popup";
    el.innerHTML = `
      <strong>${esc(p.name)}</strong>
      <span class="popup-approx">≈ ${esc(t("map.approxShort"))} · ${esc(p.locationLabel)}</span>
      <ul>${activitiesAt(placeId)
        .map((a) => `<li><button type="button" data-go="${esc(a.id)}">${esc(t("day.label", { n: a.day }))} · ${esc(a.title)}</button></li>`)
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
    activeId && byId.get(activeId).place === placeId ? activeId : activitiesAt(placeId)[0]?.id;

  function onPin(placeId) {
    highlightPin(placeId);
    zoomIfCrowded(placeId);
    const target = activityForPin(placeId);
    // On narrow screens the map is its own view: stay on the map and let the
    // popup offer "view activity"; on wide screens the card is beside the map.
    if (target && !narrow.matches) selectActivity(target);
  }

  function showOnMap(placeId, activity) {
    if (activity) {
      const a = byId.get(activity);
      setDayOpen(a.day, true);
      document.querySelectorAll(".activity.is-active").forEach((el) => el.classList.remove("is-active"));
      $(`#activity-${CSS.escape(activity)}`).classList.add("is-active");
      activeId = activity;
    }
    setView("map");
    if (narrow.matches) $("#map-pane").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    if (!ensureMapSized()) return;
    const place = DATA.places[placeId];
    map.flyTo(place.coord, 10, { duration: prefersReducedMotion() ? 0 : 0.6 });
    highlightPin(placeId);
    markers.get(placeId)?.openPopup();
  }

  function fullRoute() {
    if (!map || !$("#map").offsetWidth) return;
    fitted = true;
    map.closePopup();
    highlightPin(null);
    map.fitBounds(L.latLngBounds(mappedPlaces.map((id) => DATA.places[id].coord)), { padding: [28, 28], maxZoom: 9 });
  }
  $("#fullRoute").addEventListener("click", () => {
    fullRoute();
    document.querySelectorAll(".activity.is-active").forEach((el) => el.classList.remove("is-active"));
    activeId = null;
  });

  // Stop chips: work with or without the map library.
  const renderStops = () => mappedPlaces
    .map((id) => `<button type="button" class="stop" data-stop="${esc(id)}"><span class="stop-days">${esc(daysLabel(id))}</span>${esc(DATA.places[id].name)}</button>`)
    .join("");
  $("#stops").addEventListener("click", (event) => {
    const stop = event.target.closest("[data-stop]");
    if (!stop) return;
    if (map) showOnMap(stop.dataset.stop);
    else selectActivity(activitiesAt(stop.dataset.stop)[0].id);
  });

  function createMap() {
    if (!window.L) {
      showNotice(t("map.noMap"));
      $("#map").classList.add("is-unavailable");
      return;
    }
    map = L.map("map", { scrollWheelZoom: false, zoomSnap: 0.5 }).setView([42.1, 43.1], 7);
    const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });
    let loaded = 0;
    tiles.on("tileload", () => {
      loaded += 1;
      notice.hidden = true;
    });
    tiles.on("tileerror", () => {
      if (!loaded) showNotice(t("map.noTiles"));
    });
    tiles.addTo(map);
  }

  function renderMarkers() {
    if (!map) return;
    for (const marker of markers.values()) marker.remove();
    markers.clear();
    for (const id of mappedPlaces) {
      const place = DATA.places[id];
      const marker = L.marker(place.coord, {
        title: `${place.name} (${t("map.approxShort").toLowerCase()})`,
        alt: place.name,
        keyboard: true,
        icon: L.divIcon({
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

  // ---------- tour switching ----------
  function loadTour(id) {
    tour = routable.find((x) => x.id === id) || routable[0];
    activities = tour.days.flatMap((day) => day.activities.map((a) => ({ ...a, day: day.n })));
    byId = new Map(activities.map((a) => [a.id, a]));
    mappedPlaces = [];
    for (const a of activities) {
      const place = DATA.places[a.place];
      if (place && place.coord && !mappedPlaces.includes(a.place)) mappedPlaces.push(a.place);
    }
    activeId = null;

    $("#route-eyebrow").textContent = t("route.eyebrow", { region: c("tours", tour.id, "region", tour.region) });
    $("#route-title").textContent = c("tours", tour.id, "title", tour.title);
    $("#highlights").innerHTML = (tour.highlights || [])
      .map((h) => `
        <li class="highlight${h.status ? ` highlight-${esc(h.status)}` : ""}">
          <button type="button" data-go="${esc(h.activities[0])}">
            <strong>${esc(c("highlights", h.id, "title", h.title))}</strong>
            <span>${esc(c("highlights", h.id, "text", h.text))}</span>
            ${h.status ? statusChip(h.status) : ""}
          </button>
        </li>`)
      .join("");
    $("#highlights").hidden = !(tour.highlights || []).length;
    $("#days").innerHTML = renderDays();
    syncToggleAll();
    $("#people").innerHTML = renderPeople();
    $(".people").hidden = !$("#people").children.length;
    $("#stops").innerHTML = renderStops();
    renderMarkers();
    fitted = false;
    ensureMapSized();
  }
  $("#highlights").addEventListener("click", (event) => {
    const go = event.target.closest("[data-go]");
    if (go) selectActivity(go.dataset.go);
  });

  createMap();
  loadTour(new URLSearchParams(location.search).get("tour"));
  window.WIWI_PROTOTYPE = { get map() { return map; }, selectActivity, showOnMap, fullRoute };
})();
