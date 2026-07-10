#!/usr/bin/env node
/** U09-R7: apply R7_FULL — no R6/R7 auto-padding tails. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { R7_FULL } from "./fix-u09-r7-full.mjs";
import { findBannedPhrase } from "./v2-quality.mjs";

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const partsDir = path.join(toolsDir, "v2-u09-parts");

function fixNumericPrefix(e) {
  const t = e.trim();
  if (/^(0[1-9]|1[0-2])[\u4e00-\u9fff{]/.test(t)) return `依題意，${t}`;
  return e;
}

function fixExplanation(q) {
  let e = R7_FULL[q.questionId] || q.explanation;
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

console.log("fix-u09-r7: parts updated");
