// Fix broken withDiagram(mc(...)) wrappers missing diagram HTML suffix.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const years = [106, 107, 108, 109, 110, 111, 112, 113, 114, 115];
const pdfRoot = path.join(root, "歷史會考作戰室", "official-data");

const SUBJECTS = [
  { id: "歷史", dir: "歷史會考作戰室", dataFile: "history-data.js" },
  { id: "地理", dir: "地理會考作戰室", dataFile: "geography-data.js" },
  { id: "公民", dir: "公民會考作戰室", dataFile: "civics-data.js" },
];

const norm = s => s.normalize("NFKC").replace(/\s+/g, "").replace(/[，。、；：「」『』（）()\[\]【】：,.\-—…& ＝]/g, "").toLowerCase();

function examSections(examText) {
  const re = /\n(\d{1,2})\.(\s|[^\d])/g;
  const hits = [];
  let m;
  while ((m = re.exec(examText))) hits.push({ num: +m[1], pos: m.index });
  const sections = [];
  for (let i = 0; i < hits.length; i++) {
    const { num, pos } = hits[i];
    if (num < 1 || num > 63) continue;
    const end = hits[i + 1]?.pos ?? examText.length;
    const raw = examText.slice(pos, end).trim();
    if (!/\([A-D]\)/.test(raw)) continue;
    sections.push({ num, raw });
  }
  return sections;
}

function matchOfficialNum(sections, q) {
  const want = q.choices.map(norm);
  const stem = norm(q.text.replace(/^【題組：[^】]+】\n?/, "").slice(0, 48));
  let hits = sections.filter(sec => want.every(c => norm(sec.raw).includes(c)));
  if (hits.length > 1 && stem.length >= 12) {
    const refined = hits.filter(sec => norm(sec.raw).includes(stem.slice(0, 24)));
    if (refined.length) hits = refined;
  }
  if (hits.length >= 1) return hits[0].num;
  const key = [...want].sort((a, b) => b.length - a.length)[0];
  if (key.length < 4) return null;
  const byChoice = sections.filter(sec => norm(sec.raw).includes(key));
  if (byChoice.length === 1) return byChoice[0].num;
  return null;
}

function loadArchive(sub) {
  const dir = path.join(root, sub.dir);
  const sandbox = { window: {}, console, Date, Math };
  vm.createContext(sandbox);
  try {
    for (const f of [sub.dataFile, "archive-exams.js"]) {
      vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), sandbox, { filename: f });
    }
    return sandbox.window.ARCHIVE_EXAMS;
  } catch (e) {
    console.error(`${sub.id}: load failed — ${e.message.split("\n")[0]}`);
    return null;
  }
}

function diagramHtml(year, qNum) {
  return `<div class="question-diagram"><img src="official-data/${year}/${qNum}.png" alt="第${qNum}題圖"></div>`;
}

function fixWrap(src, q, year, qNum) {
  const diagram = JSON.stringify(diagramHtml(year, qNum));
  const tail = `,\n      ${JSON.stringify(q.tip)},\n      ${JSON.stringify(q.trap)})`;
  const textKey = JSON.stringify(q.text);
  const idx = src.indexOf(textKey);
  if (idx < 0) return { src, ok: false, reason: "text" };
  const tailIdx = src.indexOf(tail, idx);
  if (tailIdx < 0) return { src, ok: false, reason: "tail" };
  const end = tailIdx + tail.length;
  const block = src.slice(Math.max(0, tailIdx - 2000), end);
  if (block.includes('"question-diagram"')) return { src, ok: true, reason: "done" };
  const before = src.slice(0, tailIdx);
  const mcStart = before.lastIndexOf("\n    mc(");
  const wdStart = before.lastIndexOf("\n    withDiagram(mc(");
  const start = Math.max(mcStart, wdStart);
  if (start < 0) return { src, ok: false, reason: "start" };
  const prefix = src.slice(0, start);
  const inner = src.slice(start, end);
  let body = inner.replace(/^\n    withDiagram\(mc\(/, "\n    mc(").replace(/^\n    mc\(/, "\n    mc(");
  const fixed = `\n    withDiagram(${body.trimStart().replace(/^mc\(/, "mc(")}, ${diagram})`;
  return { src: prefix + fixed + src.slice(end), ok: true, reason: "fixed" };
}

for (const sub of SUBJECTS) {
  const file = path.join(root, sub.dir, "archive-exams.js");
  let src = fs.readFileSync(file, "utf8");
  const archive = loadArchive(sub);
  if (!archive) continue;
  let fixed = 0, skip = 0, fail = 0;

  for (const year of years) {
    const sections = examSections(fs.readFileSync(path.join(pdfRoot, String(year), `${year}-exam.txt`), "utf8"));
    for (const q of archive[year].questions) {
      const num = matchOfficialNum(sections, q);
      if (num == null) continue;
      const { src: next, ok, reason } = fixWrap(src, q, year, num);
      src = next;
      if (ok && reason === "fixed") fixed++;
      else if (ok) skip++;
      else fail++;
    }
  }
  fs.writeFileSync(file, src);
  console.log(`${sub.id}: fixed ${fixed}, already ok ${skip}, fail ${fail}`);
}

console.log("Re-run verify + inventory");
