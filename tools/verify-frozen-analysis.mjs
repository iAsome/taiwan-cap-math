/**
 * Verify frozen analysis-data.js internal consistency (no archive-exams.js).
 * Usage: node tools/verify-frozen-analysis.mjs [subjectDir]
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const subjectDir = process.argv[2] || process.cwd();
const base = path.isAbsolute(subjectDir) ? subjectDir : path.join(root, subjectDir);

const scripts = {
  "國文會考作戰室": ["data.js", "analysis-data.js"],
  "數學會考作戰室": ["data.js", "analysis-data.js"],
  "英文會考作戰室": ["english-data.js", "analysis-data.js"],
  "地科會考作戰室": ["earth-data.js", "analysis-data.js"],
  "理化會考作戰室": ["data.js", "analysis-data.js"],
  "生物會考作戰室": ["data.js", "analysis-data.js"],
  "歷史會考作戰室": ["history-data.js", "analysis-data.js"],
  "地理會考作戰室": ["geography-data.js", "analysis-data.js"],
  "公民會考作戰室": ["civics-data.js", "analysis-data.js"],
};

const rel = path.relative(root, base).replace(/\\/g, "/");
const files = scripts[rel];
if (!files) throw new Error(`unknown subject dir: ${rel}`);

const sandbox = { window: {}, console, Date, Math };
vm.createContext(sandbox);
for (const f of files) {
  vm.runInContext(fs.readFileSync(path.join(base, f), "utf8"), sandbox, { filename: f });
}

const analysisKey = Object.keys(sandbox.window).find(k => k.endsWith("_ANALYSIS") || k === "CAP_ANALYSIS");
const dataKey = Object.keys(sandbox.window).find(k => k.endsWith("_DATA") || k === "CHINESE_DATA" || k === "MATH_DATA" || k === "SCIENCE_DATA" || k === "BIO_DATA");
const analysis = sandbox.window[analysisKey];
const data = sandbox.window[dataKey];
const unitIds = data.units.map(u => u.id);
const errors = [];
const check = (ok, msg) => { if (!ok) errors.push(msg); };

const years = Object.keys(analysis.primaryUnits || {}).sort();
check(years.length === 10, `primaryUnits 應有 10 年，實際 ${years.length}`);
years.forEach(year => {
  const seq = analysis.primaryUnits[year];
  check(Array.isArray(seq) && seq.length > 0, `${year} 年 primaryUnits 為空`);
  seq?.forEach((id, i) => check(unitIds.includes(id), `${year} 年第 ${i + 1} 題 unitId=${id} 無效`));
});

if (analysis.officialByYear) {
  years.forEach(year => {
    const info = analysis.officialByYear[year];
    check(!!info, `${year} 年 officialByYear 缺失`);
    if (!info) return;
    const seqLen = analysis.primaryUnits[year]?.length || 0;
    if (info.count != null) check(info.count === seqLen, `${year} 年 count(${info.count}) ≠ primaryUnits(${seqLen})`);
    if (info.abilities) {
      const sum = Object.values(info.abilities).reduce((s, v) => s + v, 0);
      check(sum === info.count, `${year} 年 abilities 合計(${sum}) ≠ count(${info.count})`);
    }
  });
}

unitIds.forEach(id => check(!!analysis.domainByUnit?.[id], `domainByUnit 缺少 unit ${id}`));

if (errors.length) {
  console.error(errors.map(e => " - " + e).join("\n"));
  process.exit(1);
}
const total = years.reduce((s, y) => s + (analysis.primaryUnits[y]?.length || 0), 0);
console.log(`OK: frozen analysis ${years.length} years, ${total} coded items`);
