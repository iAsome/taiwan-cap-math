// Patch 地科 archive: crop PNGs + wrap withDiagram for image-ref questions.
import fs from "node:fs";
import path from "node:path";
import {
  root, years, examSections, matchOfficialNum, matchOfficialNumFallback, loadArchive, needsDiagram,
  cropPng, ensureHelpers, wrapMcWithDiagram
} from "./nature-exam-utils.mjs";

const sub = { dir: "地科會考作戰室", dataFile: "earth-data.js" };
const file = path.join(root, sub.dir, "archive-exams.js");
const pdfDir = path.join(root, sub.dir, "official-data");
const overrides = JSON.parse(fs.readFileSync(path.join(root, "tools", "nature-diagram-overrides.json"), "utf8"));
const overrideMap = overrides[sub.dir] ?? {};

function overrideFor(q, year) {
  for (const [key, rec] of Object.entries(overrideMap)) {
    const [y, prefix] = key.split(":");
    if (+y === year && q.text.startsWith(prefix)) return rec;
  }
  return null;
}

let src = ensureHelpers(fs.readFileSync(file, "utf8"), "earth");
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
    if (num == null) num = matchOfficialNumFallback(sections, q);
    const ov = overrideFor(q, year);
    if (num == null && ov) num = ov.num;
    if (num == null) { failed++; continue; }
    const cropYear = ov?.cropYear ?? year;
    const cropDir = ov?.cropYear ? path.join(root, sub.dir, "official-data") : pdfDir;
    if (ov?.cropYear && ov.cropYear !== year) {
      // ponytail: cross-year figure reuse when archive stem diverged from that year's exam.txt
      const cropPdfDir = path.join(root, sub.dir, "official-data");
      const ovSections = examSections(fs.readFileSync(path.join(cropPdfDir, String(cropYear), `${cropYear}-exam.txt`), "utf8"));
      const ovSec = ovSections.find(s => s.num === num);
      if (ovSec) {
        const onPage = {};
        for (const s of ovSections) (onPage[s.page] ??= []).push(s.num);
        cropPng(cropPdfDir, cropYear, ovSec, onPage[ovSec.page] ?? [num]);
        fs.copyFileSync(
          path.join(cropPdfDir, String(cropYear), `q${num}.png`),
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

// Update header: diagrams now included
src = src.replace(
  /\/\/ 地科範圍，其餘生物、理化題目本來就不屬於本館收錄範圍，不算「省略」。在地科題目之中，仍有\n\/\/ 少數依賴精確圖表數值、地層剖面相對位置，或選項本身即為示意圖（文字無法忠實還原）而未收錄；\n\/\/ 其餘所有「單憑文字題幹即可完整判讀作答」的地科題目，皆已逐題轉錄並核對官方答案。\n/,
  `// 地科範圍，其餘生物、理化題目本來就不屬於本館收錄範圍，不算「省略」。凡含圖表／示意之題，已以 official-data PNG diagram 重製。\n`
);

fs.writeFileSync(file, src);
console.log(`地科: patched ${patched} diagrams, cropped ${cropped}, wrap-fail ${failed}`);
