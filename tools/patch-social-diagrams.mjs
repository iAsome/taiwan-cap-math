// Patch existing 歷史/地理/公民 archive questions with diagram PNGs; add stragglers; clear omittedNote.
import * as mupdf from "mupdf";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const years = [106, 107, 108, 109, 110, 111, 112, 113, 114, 115];
const letterToIndex = { A: 0, B: 1, C: 2, D: 3 };
const pdfRoot = path.join(root, "歷史會考作戰室", "official-data");

const SUBJECTS = [
  { id: "歷史", dir: "歷史會考作戰室", dataFile: "history-data.js", dataKey: "HISTORY_DATA" },
  { id: "地理", dir: "地理會考作戰室", dataFile: "geography-data.js", dataKey: "GEOGRAPHY_DATA" },
  { id: "公民", dir: "公民會考作戰室", dataFile: "civics-data.js", dataKey: "CIVICS_DATA" },
];

const norm = s => s.normalize("NFKC").replace(/\s+/g, "").replace(/[，。、；：「」『』（）()\[\]【】：,.\-—…& ＝]/g, "").toLowerCase();

function examSections(examText) {
  const pageStarts = [...examText.matchAll(/--- page (\d+) ---/g)].map(m => ({ page: +m[1], pos: examText.indexOf(m[0]) }));
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
    const choices = [];
    for (const cm of raw.matchAll(/\([A-D]\)\s*([^\n(]*)/g)) choices.push(cm[1].trim());
    if (choices.length !== 4) continue;
    let stem = raw.replace(/^\d+\.\s*/, "").replace(/\([A-D]\)[\s\S]*/, "").trim();
    stem = stem.replace(/\n{3,}/g, "\n\n");
    const page = pageStarts.filter(p => p.pos <= pos).at(-1)?.page ?? 0;
    const imageChoices = choices.every(c => !c || c.length <= 2);
    const needsImage = /圖\(|表\(|圖（|表（|如圖|如表|示意圖|分布圖|統計圖|曲線圖|地圖|海報|照片|漫畫|影像|截圖/i.test(stem + raw)
      || imageChoices;
    sections.push({ num, stem, choices, raw, page, needsImage, imageChoices });
  }
  return sections;
}

function stemFingerprint(text) {
  return norm(text.replace(/^【題組：[^】]+】\n?/, "").slice(0, 48));
}

function matchOfficialNum(sections, q) {
  const want = q.choices.map(norm);
  const stem = stemFingerprint(q.text);
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

function cropBounds(sec, onPage) {
  const p = sec.page;
  const idx = onPage.indexOf(sec.num);
  const n = Math.max(onPage.length, 1);
  const sliceH = Math.min(280, Math.floor(500 / n));
  const yTop = 55 + idx * sliceH;
  const yBot = Math.min(720, yTop + sliceH + (sec.imageChoices ? 80 : 40));
  if (sec.imageChoices) return { p, x0: 40, y0: 55, x1: 555, y1: Math.min(720, 55 + sliceH * n + 60) };
  return { p, x0: 40, y0: yTop, x1: 555, y1: yBot };
}

const Z = 2;
const cropCache = new Set();

function cropPng(year, sec, onPage) {
  const file = `q${sec.num}.png`;
  const outPaths = SUBJECTS.map(sub => path.join(root, sub.dir, "official-data", String(year), file));
  if (outPaths.every(p => fs.existsSync(p))) return file;

  const { p, x0, y0, x1, y1 } = cropBounds(sec, onPage);
  const key = `${year}:${p}:${x0},${y0},${x1},${y1}`;
  if (cropCache.has(key)) {
    const srcPng = path.join(root, SUBJECTS[0].dir, "official-data", String(year), file);
    if (fs.existsSync(srcPng)) return file;
  }
  cropCache.add(key);

  const pdf = path.join(pdfRoot, String(year), `${year}-exam.pdf`);
  const doc = mupdf.Document.openDocument(fs.readFileSync(pdf), "application/pdf");
  const page = doc.loadPage(p);
  const matrix = mupdf.Matrix.scale(Z, Z);
  const full = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true);
  const X0 = x0 * Z, Y0 = y0 * Z, X1 = x1 * Z, Y1 = y1 * Z;
  const outW = Math.max(1, Math.round(X1 - X0)), outH = Math.max(1, Math.round(Y1 - Y0));
  const cropped = full.warp([[X0, Y0], [X1, Y0], [X1, Y1], [X0, Y1]], outW, outH);
  const png = cropped.asPNG();
  for (const sub of SUBJECTS) {
    const dir = path.join(root, sub.dir, "official-data", String(year));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, file), png);
  }
  return file;
}

function diagramHtml(year, qNum) {
  return `<div class="question-diagram"><img src="official-data/${year}/q${qNum}.png" alt="第${qNum}題圖"></div>`;
}

function loadArchive(sub) {
  const dir = path.join(root, sub.dir);
  const sandbox = { window: {}, console, Date, Math };
  vm.createContext(sandbox);
  for (const f of [sub.dataFile, "archive-exams.js"]) {
    vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), sandbox, { filename: f });
  }
  return sandbox.window.ARCHIVE_EXAMS;
}

function ensureHelpers(src) {
  if (!src.includes("withDiagram")) {
    src = src.replace(
      /const mc = \(unitId, text, choices, answerIndex, steps, tip, trap\) => \(\{\n    unitId, text, choices, answer: answerIndex, steps, tip, trap,\n    concept: U\[unitId - 1\]\.summary, formula: U\[unitId - 1\]\.formula\n  \}\);/,
      `const mc = (unitId, text, choices, answerIndex, steps, tip, trap) => ({
    unitId, text, choices, answer: answerIndex, steps, tip, trap,
    concept: U[unitId - 1].summary, formula: U[unitId - 1].formula
  });
  const withDiagram = (q, html) => (q.diagram = html, q);`);
  }
  return src;
}

function wrapMcWithDiagram(src, q, year, qNum) {
  const diagram = JSON.stringify(diagramHtml(year, qNum));
  const textKey = JSON.stringify(q.text);
  const idx = src.indexOf(textKey);
  if (idx < 0) return { src, ok: false };
  const tail = `,\n      ${JSON.stringify(q.tip)},\n      ${JSON.stringify(q.trap)})`;
  const tailIdx = src.indexOf(tail, idx);
  if (tailIdx < 0) return { src, ok: false };
  const end = tailIdx + tail.length;
  const before = src.slice(0, tailIdx);
  if (before.slice(tailIdx - 800, tailIdx).includes('"question-diagram"')) return { src, ok: true };
  const mcStart = before.lastIndexOf("\n    mc(");
  const wdStart = before.lastIndexOf("\n    withDiagram(mc(");
  const start = Math.max(mcStart, wdStart);
  if (start < 0) return { src, ok: false };
  let inner = src.slice(start, end).replace(/^\n    withDiagram\(mc\(/, "\n    mc(");
  const wrapped = inner.replace(/^\n    mc\(/, `\n    withDiagram(mc(`) + `, ${diagram})`;
  return { src: src.slice(0, start) + wrapped + src.slice(end), ok: true };
}

let cropped = 0, failed = 0;
const onlySub = process.argv[2];

for (const sub of SUBJECTS.filter(s => !onlySub || s.id === onlySub)) {
  const file = path.join(root, sub.dir, "archive-exams.js");
  let src = ensureHelpers(fs.readFileSync(file, "utf8"));
  const archive = loadArchive(sub);
  let subPatched = 0;

  for (const year of years) {
    const examText = fs.readFileSync(path.join(pdfRoot, String(year), `${year}-exam.txt`), "utf8");
    const sections = examSections(examText);
    const onPage = {};
    for (const s of sections) (onPage[s.page] ??= []).push(s.num);
    const byNum = Object.fromEntries(sections.map(s => [s.num, s]));

    for (const q of archive[year].questions) {
      if (q.diagram) continue;
      const num = matchOfficialNum(sections, q);
      if (num == null) continue;
      const sec = byNum[num];
      if (!sec?.needsImage) continue;
      cropPng(year, sec, onPage[sec.page] ?? [sec.num]);
      cropped++;
      const { src: next, ok } = wrapMcWithDiagram(src, q, year, num);
      src = next;
      if (ok) subPatched++; else failed++;
    }
  }

  // Clear all omittedNote lines
  for (const year of years) {
    src = src.replace(new RegExp(`const omittedNote${year} = "[^"]*";\\n`), "");
    src = src.replace(new RegExp(`( ${year}: \\{ questions: exam${year}, )omittedNote: omittedNote${year}, ?`), `$1`);
    src = src.replace(new RegExp(`( ${year}: \\{ questions: exam${year}, )omittedNote: omittedNote${year} ?\\}`), `$1}`);
  }

  fs.writeFileSync(file, src);
  console.log(`${sub.id}: patched ${subPatched} diagrams (wrap-fail ${failed})`);
}

console.log("Done. Run: node tools/verify-social-archive-answers.mjs && node tools/inventory-archive-gaps.mjs");
