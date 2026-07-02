#!/usr/bin/env node
/**
 * Sync analysis-data.js primaryUnits + officialByYear counts from archive-exams.js.
 *
 * Usage: node tools/regen-analysis.mjs <subject-dir>
 *   e.g. node tools/regen-analysis.mjs 國文會考作戰室
 *
 * Updates per year in ARCHIVE_EXAMS:
 *   - primaryUnits[year] := questions.map(q => q.unitId)
 *   - officialByYear[year].mc or .count := questions.length (other fields preserved)
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const SUBJECT_SCRIPTS = {
  "國文會考作戰室": ["data.js", "archive-exams.js"],
  "英文會考作戰室": ["english-data.js", "archive-exams.js"],
  "數學會考作戰室": ["data.js", "archive-exams.js"],
  "歷史會考作戰室": ["history-data.js", "archive-exams.js"],
  "地理會考作戰室": ["geography-data.js", "archive-exams.js"],
  "公民會考作戰室": ["civics-data.js", "archive-exams.js"],
  "地科會考作戰室": ["earth-data.js", "archive-exams.js"],
  "理化會考作戰室": ["data.js", "archive-exams.js"],
  "生物會考作戰室": ["data.js", "archive-exams.js"],
};

function detectScripts(subjectDir) {
  if (SUBJECT_SCRIPTS[subjectDir]) return SUBJECT_SCRIPTS[subjectDir];
  const dir = path.join(root, subjectDir);
  const files = fs.readdirSync(dir);
  const data = files.find(f => f.endsWith("-data.js")) || (files.includes("data.js") ? "data.js" : null);
  if (!data || !files.includes("archive-exams.js")) {
    throw new Error(`cannot detect scripts in ${subjectDir}; add to SUBJECT_SCRIPTS or ensure *-data.js + archive-exams.js`);
  }
  return [data, "archive-exams.js"];
}

function loadArchive(subjectDir, scripts) {
  const dir = path.join(root, subjectDir);
  const sandbox = { window: {}, console, Date, Math };
  vm.createContext(sandbox);
  for (const file of scripts) {
    vm.runInContext(fs.readFileSync(path.join(dir, file), "utf8"), sandbox, { filename: file });
  }
  if (!sandbox.window.ARCHIVE_EXAMS) throw new Error("ARCHIVE_EXAMS not found after loading scripts");
  return sandbox.window.ARCHIVE_EXAMS;
}

function patchPrimaryUnits(analysis, year, units) {
  const unitsStr = units.join(",");
  const re = new RegExp(`(\\s+("?)${year}\\1: \\[)[\\s\\S]*?\\],`);
  if (!re.test(analysis)) throw new Error(`primaryUnits missing year ${year}`);
  return analysis.replace(re, `$1${unitsStr}],`);
}

function patchOfficialCount(analysis, year, count) {
  const keyRe = new RegExp(`\\s+("?)${year}\\1:\\s*\\{`);
  const m = keyRe.exec(analysis);
  if (!m) throw new Error(`officialByYear missing year ${year}`);
  let depth = 1;
  let i = m.index + m[0].length;
  while (i < analysis.length && depth > 0) {
    if (analysis[i] === "{") depth++;
    else if (analysis[i] === "}") depth--;
    i++;
  }
  const block = analysis.slice(m.index, i);
  let updated;
  if (/\bmc:\s*\d+/.test(block)) updated = block.replace(/\bmc:\s*\d+/, `mc: ${count}`);
  else if (/"count":\s*\d+/.test(block)) updated = block.replace(/"count":\s*\d+/, `"count": ${count}`);
  else if (/\bcount:\s*\d+/.test(block)) updated = block.replace(/\bcount:\s*\d+/, `count: ${count}`);
  else throw new Error(`officialByYear missing mc/count for year ${year}`);
  return analysis.slice(0, m.index) + updated + analysis.slice(i);
}

const subjectDir = process.argv[2];
if (!subjectDir) {
  console.error("Usage: node tools/regen-analysis.mjs <subject-dir>");
  console.error("Example: node tools/regen-analysis.mjs 國文會考作戰室");
  process.exit(1);
}

const subjectPath = path.join(root, subjectDir);
const analysisPath = path.join(subjectPath, "analysis-data.js");
if (!fs.existsSync(analysisPath)) {
  console.error(`missing ${analysisPath}`);
  process.exit(1);
}

const scripts = detectScripts(subjectDir);
const archive = loadArchive(subjectDir, scripts);
const years = Object.keys(archive).map(Number).sort((a, b) => a - b);
let analysis = fs.readFileSync(analysisPath, "utf8");

for (const year of years) {
  const qs = archive[year].questions || [];
  const units = qs.map(q => q.unitId);
  analysis = patchPrimaryUnits(analysis, year, units);
  analysis = patchOfficialCount(analysis, year, qs.length);
  console.log(`${year}: ${qs.length} questions, primaryUnits synced`);
}

fs.writeFileSync(analysisPath, analysis);
console.log(`\nUpdated ${analysisPath} for years ${years.join(", ")}`);
