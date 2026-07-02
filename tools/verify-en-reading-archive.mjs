#!/usr/bin/env node
/**
 * Cross-check English reading archive answers vs official reading-answers JSON.
 * Reading only: 41 questions (106-110), 43 questions (111-115). No listening.
 */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ENG = path.join(ROOT, "英文會考作戰室");
const TARGET = { 106: 41, 107: 41, 108: 41, 109: 41, 110: 41, 111: 43, 112: 43, 113: 43, 114: 43, 115: 43 };

function loadArchive() {
  const sandbox = { window: {}, console, Date, Math };
  vm.createContext(sandbox);
  for (const f of ["english-data.js", "archive-exams.js"]) {
    vm.runInContext(fs.readFileSync(path.join(ENG, f), "utf8"), sandbox, { filename: f });
  }
  return sandbox.window.ARCHIVE_EXAMS;
}

function loadOfficial(year) {
  const p = path.join(ENG, "official-data", String(year), `${year}-reading-answers.json`);
  if (!fs.existsSync(p)) throw new Error(`missing ${p}`);
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function letterToIndex(letter) {
  const i = "ABCD".indexOf(String(letter).toUpperCase());
  return i >= 0 ? i : null;
}

let failed = false;
const archive = loadArchive();

for (const year of Object.keys(TARGET).map(Number).sort((a, b) => a - b)) {
  const exam = archive[year];
  const want = TARGET[year];
  const official = loadOfficial(year);
  const issues = [];

  if (!exam) {
    console.error(`${year}: missing year in ARCHIVE_EXAMS`);
    failed = true;
    continue;
  }

  const qs = exam.questions || [];
  if (qs.length !== want) issues.push(`count ${qs.length} != ${want}`);
  if (exam.omittedNote) issues.push("still has omittedNote");

  for (let n = 1; n <= want; n++) {
    const q = qs[n - 1];
    const off = official[String(n)];
    if (!q) {
      issues.push(`Q${n}: missing in archive`);
      continue;
    }
    if (off == null) {
      issues.push(`Q${n}: missing in official JSON`);
      continue;
    }
    const expected = letterToIndex(off);
    if (expected === null) {
      issues.push(`Q${n}: bad official letter ${off}`);
      continue;
    }
    if (q.answer !== expected) {
      issues.push(`Q${n}: archive=${q.answer} (${"ABCD"[q.answer]}) vs official=${off}`);
    }
    if (!Array.isArray(q.steps) || q.steps.length < 2) issues.push(`Q${n}: needs steps`);
    if (!q.tip) issues.push(`Q${n}: needs tip`);
    if (!q.trap) issues.push(`Q${n}: needs trap`);
  }

  if (issues.length) {
    failed = true;
    console.error(`${year}: FAIL`);
    issues.forEach((i) => console.error(`  - ${i}`));
  } else {
    console.log(`${year}: OK (${want}/${want}, answers match)`);
  }
}

if (failed) {
  console.error("\nverify-en-reading-archive: FAIL");
  process.exit(1);
}
console.log("\nverify-en-reading-archive: PASS (106-115)");
