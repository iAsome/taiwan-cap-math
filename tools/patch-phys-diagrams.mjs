// Patch 理化 archive: crop PNGs + wrap withDiagram for image-ref questions.
import fs from "node:fs";
import path from "node:path";
import {
  root, years, examSections, matchOfficialNum, matchOfficialNumFallback, loadArchive, needsDiagram, norm,
  cropPng, ensureHelpers, wrapMcWithDiagram
} from "./nature-exam-utils.mjs";

const sub = { dir: "理化會考作戰室", dataFile: "data.js" };
const file = path.join(root, sub.dir, "archive-exams.js");
const pdfDir = path.join(root, sub.dir, "official-data");
const gapEnrich = JSON.parse(fs.readFileSync(path.join(pdfDir, "gap-enrichments.json"), "utf8"));
const overrides = JSON.parse(fs.readFileSync(path.join(root, "tools", "nature-diagram-overrides.json"), "utf8"));
const overrideMap = overrides[sub.dir] ?? {};

function overrideFor(q, year) {
  for (const [key, rec] of Object.entries(overrideMap)) {
    const [y, prefix] = key.split(":");
    if (+y === year && q.text.startsWith(prefix)) return rec;
  }
  return null;
}

function matchFromGap(year, q) {
  const yearGap = gapEnrich[String(year)];
  if (!yearGap) return null;
  const stem = norm(q.text.slice(0, 48));
  for (const [num, entry] of Object.entries(yearGap)) {
    if (norm(entry.text).includes(stem.slice(0, 24)) || stem.includes(norm(entry.text).slice(0, 24)))
      return +num;
  }
  return null;
}

let src = ensureHelpers(fs.readFileSync(file, "utf8"), "phys");
const archive = loadArchive(sub.dir, sub.dataFile);
let patched = 0, cropped = 0, failed = 0;

for (const year of years) {
  const examText = fs.readFileSync(path.join(pdfDir, String(year), `${year}-exam.txt`), "utf8");
  const sections = examSections(examText);
  const onPage = {};
  for (const s of sections) (onPage[s.page] ??= []).push(s.num);
  const byNum = Object.fromEntries(sections.map(s => [s.num, s]));

  for (const q of archive[year].questions) {
    if (q.diagram || !needsDiagram(q)) continue;
    let num = matchOfficialNum(sections, q);
    if (num == null) num = matchFromGap(year, q);
    if (num == null) num = matchOfficialNumFallback(sections, q);
    const ov = overrideFor(q, year);
    if (num == null && ov) num = ov.num;
    if (num == null) { failed++; continue; }
    const cropYear = ov?.cropYear ?? year;
    if (ov?.cropYear && ov.cropYear !== year) {
      const ovSections = examSections(fs.readFileSync(path.join(pdfDir, String(cropYear), `${cropYear}-exam.txt`), "utf8"));
      const ovSec = ovSections.find(s => s.num === num);
      if (ovSec) {
        const ovOnPage = {};
        for (const s of ovSections) (ovOnPage[s.page] ??= []).push(s.num);
        cropPng(pdfDir, cropYear, ovSec, ovOnPage[ovSec.page] ?? [num]);
        fs.copyFileSync(
          path.join(pdfDir, String(cropYear), `q${num}.png`),
          path.join(pdfDir, String(year), `q${num}.png`)
        );
      }
    } else {
      const sec = byNum[num];
      if (!sec) { failed++; continue; }
      cropPng(pdfDir, year, sec, onPage[sec.page] ?? [sec.num]);
    }
    cropped++;
    const { src: next, ok } = wrapMcWithDiagram(src, q, year, num);
    src = next;
    if (ok) patched++; else failed++;
  }
}

// Remove stale comments
src = src.replace(/\/\/ omittedNote: 第53、54題[^\n]*\n/, "");
src = src.replace(/\/\/ omittedNote: 無，115年[^\n]*\n/, "");

fs.writeFileSync(file, src);
console.log(`理化: patched ${patched} diagrams, cropped ${cropped}, wrap-fail ${failed}`);
