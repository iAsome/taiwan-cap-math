#!/usr/bin/env node
/** U09-R5: remove semi-generic wrong-choice tails; per-question concrete wrong analysis. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { R5_FULL } from "./fix-u09-r5-full.mjs";

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const partsDir = path.join(toolsDir, "v2-u09-parts");

const STRIP_RE = [
  /錯選[^。]*與題幹所列數字或所求量對不上。/g,
  /[^。]*與題幹所列數字或所求量對不上。/g,
  /\d+是把部分資料誤當成最終答案。/g,
  /若得[^。]+，多半是漏加、多算或統計量用錯。/g,
  /須數各數出現次數，全部不同時可能沒有眾數。/g,
  /有極端高分時中位較適合報一般水準。/g,
  /有極端值時中位較適合描述多數人的水準。/g
];

function stripR5(text) {
  let s = text;
  for (const re of STRIP_RE) s = s.replace(re, "");
  return s.replace(/。+/g, "。").trim();
}

function dedupe(e) {
  const parts = e.split("。").filter(Boolean);
  const seen = new Set();
  const out = [];
  for (const p of parts) {
    const k = p.trim();
    if (k && !seen.has(k)) {
      seen.add(k);
      out.push(k);
    }
  }
  return out.length ? out.join("。") + "。" : e;
}

function fixNumericPrefix(e) {
  const t = e.trim();
  if (/^(0[1-9]|1[0-2])[\u4e00-\u9fff{]/.test(t)) return `依題意，${t}`;
  return e;
}

import { findBannedPhrase } from "./v2-quality.mjs";

function fixExplanation(q) {
  let e = R5_FULL[q.questionId] || dedupe(stripR5(q.explanation));
  if (findBannedPhrase(e)) e = e.replace(/[，,]\s*得\s+/g, "，結果是 ");
  return fixNumericPrefix(e);
}

function writePart(file, partName, items, lectures) {
  fs.writeFileSync(
    file,
    `export const ${partName} = ${JSON.stringify(items, null, 2)};\n\nexport const ${partName.replace("PART", "LECTURES")} = ${JSON.stringify(lectures, null, 2)};\n`,
    "utf8"
  );
}

const batches = [
  ["s001-s003.mjs", "U09_PART_S001_S003", "U09_LECTURES_S001_S003"],
  ["s004-s006.mjs", "U09_PART_S004_S006", "U09_LECTURES_S004_S006"],
  ["s007-s009.mjs", "U09_PART_S007_S009", "U09_LECTURES_S007_S009"],
  ["s010-s012.mjs", "U09_PART_S010_S012", "U09_LECTURES_S010_S012"]
];

for (const [fn, partName, lecName] of batches) {
  const mod = await import(pathToFileURL(path.join(partsDir, fn)).href);
  const items = mod[partName].map(q => ({ ...q, explanation: fixExplanation(q) }));
  writePart(path.join(partsDir, fn), partName, items, mod[lecName]);
}

console.log("fix-u09-r5: parts updated");
