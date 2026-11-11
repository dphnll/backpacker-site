// Checks data.js after editing — no browser, no dependencies.
//   node tests/data-check.mjs
import { readFileSync } from "node:fs";
import vm from "node:vm";

const sandbox = { window: {} };
vm.runInNewContext(readFileSync(new URL("../data.js", import.meta.url), "utf8"), sandbox);
const D = sandbox.window.WIWI_DATA;
const problems = [];
const STATUSES = ["draft", "to-confirm", "placeholder", "confirmed"];
const TYPES = ["wine", "food", "transport", "stay", "excursion", "other"];
const UVAMO_SET = /^https:\/\/[a-z0-9.-]+\/tasting\/[A-Za-z0-9_-]+\/?$/;
const UVAMO_WINE = /^https:\/\/[a-z0-9.-]+\/tasting\/[A-Za-z0-9_-]+\/wine\/\d+\/?$/;

const ids = new Set();
const tourIds = new Set();
let dayCount = 0;
for (const tour of D.tours) {
  if (tourIds.has(tour.id)) problems.push(`tour ${tour.id}: duplicate id`);
  tourIds.add(tour.id);
  if (!STATUSES.concat("in-development").includes(tour.status)) problems.push(`tour ${tour.id}: unknown status`);
  const tourActivities = new Set((tour.days || []).flatMap((d) => d.activities.map((a) => a.id)));
  for (const h of tour.highlights || []) {
    for (const id of h.activities || []) if (!tourActivities.has(id)) problems.push(`tour ${tour.id} / highlight ${h.id}: unknown activity "${id}"`);
  }
  (tour.days || []).forEach((day, i) => {
  dayCount += 1;
  if (day.n !== i + 1) problems.push(`${tour.id} day ${day.n}: days must be numbered 1, 2, 3… in order`);
  if (day.review && !(tour.openQuestions || []).some((q) => q.id === day.review)) problems.push(`${tour.id} day ${day.n}: unknown open question "${day.review}"`);
  for (const a of day.activities) {
    const where = `${tour.id} day ${day.n} / ${a.id}`;
    if (ids.has(a.id)) problems.push(`${where}: duplicate id`);
    ids.add(a.id);
    if (!a.title) problems.push(`${where}: missing title`);
    if (!TYPES.includes(a.type)) problems.push(`${where}: type must be one of ${TYPES.join(", ")}`);
    if (!STATUSES.includes(a.status)) problems.push(`${where}: status must be one of ${STATUSES.join(", ")}`);
    if (a.place && !D.places[a.place]) problems.push(`${where}: unknown place "${a.place}"`);
    if (!a.place && !a.route) problems.push(`${where}: needs a place or a route`);
    for (const p of a.people || []) if (!D.people[p]) problems.push(`${where}: unknown person "${p}"`);
    const links = a.links || {};
    if (links.uvamoWine && !UVAMO_WINE.test(links.uvamoWine)) problems.push(`${where}: uvamoWine is not a …/tasting/<id>/wine/<n> URL`);
    if (links.uvamoSet && !UVAMO_SET.test(links.uvamoSet)) problems.push(`${where}: uvamoSet is not a …/tasting/<id> URL`);
  }
  });
}
for (const [id, p] of Object.entries(D.places)) {
  if (p.coord && !(Array.isArray(p.coord) && p.coord.length === 2 && p.coord.every(Number.isFinite))) problems.push(`place ${id}: coord must be [lat, lng]`);
  if (p.coord && (p.coord[0] < 41 || p.coord[0] > 43.6 || p.coord[1] < 40 || p.coord[1] > 46.8)) problems.push(`place ${id}: coord is outside Georgia`);
}
for (const [id, p] of Object.entries(D.people)) {
  if (!STATUSES.includes(p.status)) problems.push(`person ${id}: unknown status`);
}

if (problems.length) {
  console.log(`data.js: ${problems.length} problem(s)\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log(`data.js OK: ${D.tours.length} tours, ${dayCount} days, ${ids.size} activities, ${Object.keys(D.places).length} places, ${Object.keys(D.people).length} people`);
