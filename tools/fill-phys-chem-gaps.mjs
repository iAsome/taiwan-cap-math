// Fill 理化 archive gaps from exam txt + gap-enrichments.json; patch archive-exams.js, regen analysis.
// ponytail: steps/tip/trap come from enrichments when present, else answer-aware template.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const pcDir = path.join(root, "理化會考作戰室");
const enrichPath = path.join(pcDir, "official-data/gap-enrichments.json");
const confirmed = JSON.parse(fs.readFileSync(path.join(pcDir, "official-data/confirmed-nature-answers.json"), "utf8"));
const letterToIndex = { A: 0, B: 1, C: 2, D: 3 };

const GAP_YEARS = [106, 109, 110, 111, 112, 113];

function examSections(examText) {
  const re = /\n(\d{1,2})\.(\s|[^\d])/g;
  const hits = [];
  let m;
  while ((m = re.exec(examText))) hits.push({ num: +m[1], pos: m.index });
  const sections = [];
  for (let i = 0; i < hits.length; i++) {
    const { num, pos } = hits[i];
    if (num < 1 || num > 54) continue;
    const end = hits[i + 1]?.pos ?? examText.length;
    const raw = examText.slice(pos, end).trim();
    if (!/\([A-D]\)/.test(raw)) continue;
    const choices = [];
    for (const cm of raw.matchAll(/\([A-D]\)\s*([^\n(]*)/g)) {
      const c = cm[1].trim();
      if (c) choices.push(c);
    }
    if (choices.length !== 4) continue;
    let stem = raw.replace(/^\d+\.\s*/, "");
    stem = stem.replace(/\([A-D]\)[\s\S]*/, "").trim().replace(/\n{3,}/g, "\n\n");
    sections.push({ num, stem, choices });
  }
  return sections;
}

function parseOmittedNums(note) {
  if (!note) return [];
  const nums = new Set();
  for (const m of note.matchAll(/第\s*(\d+)\s*題/g)) nums.add(+m[1]);
  return [...nums].sort((a, b) => a - b);
}

function makePedagogy(stem, choices, answerIndex) {
  const correct = choices[answerIndex];
  const wrong = choices.filter((_, i) => i !== answerIndex);
  return {
    steps: [
      "先整理題幹中的已知條件、圖表數據或實驗設定。",
      `比對四個選項，找出與題意及官方答案一致者：${correct.slice(0, 24)}${correct.length > 24 ? "…" : ""}。`,
      wrong[0] ? `排除與條件或概念不符的選項，例如「${wrong[0].slice(0, 18)}${wrong[0].length > 18 ? "…" : ""}」。` : "排除與題幹條件矛盾的選項。",
      "確認所選答案能完整回應題目所問。",
    ],
    tip: "圖表題先把數值或配置寫進題幹再判斷，不要跳過圖中關鍵資訊。",
    trap: wrong[0] ? `容易誤選「${wrong[0].slice(0, 16)}…」，但未符合題目全部條件。` : "勿只憑部分線索作答。",
  };
}

function mcCall(q) {
  const args = [
    q.unitId,
    q.difficulty,
    JSON.stringify(q.text),
    JSON.stringify(q.choices),
    q.answerIndex,
    JSON.stringify(q.steps),
    JSON.stringify(q.tip),
    JSON.stringify(q.trap),
  ];
  return `    mc(${args.join(", ")})`;
}

if (!fs.existsSync(enrichPath)) {
  console.error("Missing", enrichPath);
  process.exit(1);
}
const enrichments = JSON.parse(fs.readFileSync(enrichPath, "utf8"));

const sandbox = { window: {}, console, Date, Math };
vm.createContext(sandbox);
for (const f of ["data.js", "archive-exams.js"]) {
  vm.runInContext(fs.readFileSync(path.join(pcDir, f), "utf8"), sandbox, { filename: f });
}
const archive = sandbox.window.ARCHIVE_EXAMS;
const units = sandbox.window.SCIENCE_DATA.units;

const added = {};
const newBlocks = {};

for (const year of GAP_YEARS) {
  const omitted = parseOmittedNums(archive[year]?.omittedNote);
  if (!omitted.length) { console.log(`${year}: no gaps`); continue; }

  const yearEnrich = enrichments[String(year)] || {};
  const missingEnrich = omitted.filter(n => !yearEnrich[String(n)]);
  if (missingEnrich.length) {
    console.error(`${year}: missing enrichments for Q${missingEnrich.join(", Q")}`);
    process.exit(1);
  }

  const examText = fs.readFileSync(path.join(pcDir, `official-data/${year}/${year}-exam.txt`), "utf8");
  const sections = Object.fromEntries(examSections(examText).map(s => [s.num, s]));

  const questions = [];
  for (const num of omitted) {
    const e = yearEnrich[String(num)];
    const sec = sections[num];
    const text = e.text || sec?.stem;
    const choices = e.choices || sec?.choices;
    if (!text || !choices || choices.length !== 4) {
      console.error(`${year} Q${num}: incomplete text/choices`);
      process.exit(1);
    }
    const official = confirmed[String(year)]?.[String(num)];
    if (!official) { console.error(`${year} Q${num}: no confirmed answer`); process.exit(1); }
    const answerIndex = letterToIndex[official];
    const ped = e.steps ? { steps: e.steps, tip: e.tip, trap: e.trap } : makePedagogy(text, choices, answerIndex);
    if (e.answerIndex != null && e.answerIndex !== answerIndex) {
      console.error(`${year} Q${num}: enrichment answerIndex ${e.answerIndex} != confirmed ${official}`);
      process.exit(1);
    }
    questions.push({
      unitId: e.unitId || 1,
      difficulty: e.difficulty || 2,
      text,
      choices,
      answerIndex,
      ...ped,
    });
  }

  added[year] = questions.length;
  newBlocks[year] = questions.map(mcCall).join(",\n");
  console.log(`${year}: +${questions.length} questions`);
}

// Patch archive-exams.js: append mc() calls before each exam array's closing `];`
let src = fs.readFileSync(path.join(pcDir, "archive-exams.js"), "utf8");
for (const year of GAP_YEARS) {
  if (!newBlocks[year]) continue;
  const re = new RegExp(`(const exam${year} = \\[[\\s\\S]*?)(\\n  \\];)`);
  if (!re.test(src)) { console.error(`could not find exam${year} array`); process.exit(1); }
  src = src.replace(re, `$1,\n${newBlocks[year]}$2`);
  // Remove omittedNote from return block
  src = src.replace(new RegExp(`(${year}: \\{\\n      minutes: 70,\\n      questions: \\[\\.\\.\\.exam${year}\\]),\\n      omittedNote: [^\\n]+\\n    \\}`, "m"), "$1\n    }");
}

fs.writeFileSync(path.join(pcDir, "archive-exams.js"), src, "utf8");
console.log("\nPatched archive-exams.js");

execSync(`"${process.execPath}" tools/regen-analysis.mjs 理化會考作戰室`, { cwd: root, stdio: "inherit" });
execSync(`"${process.execPath}" tools/inventory-archive-gaps.mjs`, { cwd: root, stdio: "inherit" });

console.log("\nAdded per year:", added);
const total = Object.values(added).reduce((a, b) => a + b, 0);
console.log("Total added:", total);
