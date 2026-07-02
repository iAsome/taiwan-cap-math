// Extract official reading question blocks from *-exam.txt (106–115).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const enDir = path.join(root, "英文會考作戰室", "official-data");

const MISSING = {
  106: [1, 18, 30],
  107: [1, 31],
  108: [1, 31, 35],
  109: [1, 22],
  110: [1, 17, 20],
  111: [1, 21, 22, 23, 24, 32, 33, 39, 41],
  112: [1, 24, 25, 26, 27, 28, 29],
  113: [1, 24, 25, 26, 27, 41],
  114: [1, 22, 23, 25],
  115: [1, 20, 21, 26],
};

function extractQuestions(text) {
  const re = /\n(\d{1,2})\.\s*\n/g;
  const hits = [];
  let m;
  while ((m = re.exec(text))) hits.push({ num: +m[1], pos: m.index });
  const out = {};
  for (let i = 0; i < hits.length; i++) {
    const { num, pos } = hits[i];
    if (num < 1 || num > 43) continue;
    const end = hits[i + 1]?.pos ?? text.length;
    out[num] = text.slice(pos, end).trim();
  }
  return out;
}

for (const [year, nums] of Object.entries(MISSING)) {
  const txt = fs.readFileSync(path.join(enDir, year, `${year}-exam.txt`), "utf8");
  const qs = extractQuestions(txt);
  console.log(`\n=== ${year} ===`);
  for (const n of nums) {
    console.log(`--- Q${n} ---`);
    console.log(qs[n]?.slice(0, 800) || "(missing)");
  }
}
