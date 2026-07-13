#!/usr/bin/env node
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, "數學會考作戰室", "tools", "v2-human-content");
const U03 = path.join(CONTENT, "batches", "004-u03-complete", "units", "u03");
const U04 = path.join(CONTENT, "batches", "005-u04-complete", "units", "u04");
const OUT = path.join(CONTENT, "full-semantic-repair", "r2");

function fail(message) {
  throw new Error(message);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])]));
  }
  return value;
}

function shaBytes(bytes) {
  return crypto.createHash("sha256").update(bytes).digest("hex");
}

function contentSha(record) {
  const copy = structuredClone(record);
  delete copy.contentSha256;
  return shaBytes(JSON.stringify(stable(copy)));
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function readJsonl(file) {
  return fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean).map(JSON.parse);
}

function skillDir(unit, skill) {
  return path.join(unit === "u03" ? U03 : U04, skill);
}

function records(unit, skill, name) {
  return readJsonl(path.join(skillDir(unit, skill), name));
}

function record(unit, skill, name, id) {
  const found = records(unit, skill, name).find(row => row.questionId === id);
  assert(found, `Missing ${id} in ${name}`);
  return found;
}

function normalizedChoice(value) {
  return String(value).replaceAll("−", "-").replaceAll("－", "-").replace(/\s+/g, "");
}

function occurrences(text, token) {
  return text.split(token).length - 1;
}

function validateSkill(unit, skill) {
  const dir = skillDir(unit, skill);
  const mc = readJsonl(path.join(dir, "mc-questions.jsonl"));
  const cr = readJsonl(path.join(dir, "constructed-response.jsonl"));
  const reviews = readJsonl(path.join(dir, "semantic-reviews.jsonl"));
  const lecture = readJson(path.join(dir, "lecture.json"));

  assert(mc.length === 12, `${unit}-${skill}: expected 12 MC, got ${mc.length}`);
  assert(cr.length === 2, `${unit}-${skill}: expected 2 CR, got ${cr.length}`);
  assert(reviews.length === 12, `${unit}-${skill}: expected 12 reviews, got ${reviews.length}`);
  assert(new Set(mc.map(item => item.questionId)).size === 12, `${unit}-${skill}: duplicate MC id`);
  assert(new Set(cr.map(item => item.questionId)).size === 2, `${unit}-${skill}: duplicate CR id`);

  const answerCounts = [0, 0, 0, 0];
  const difficultyCounts = new Map();
  for (const item of mc) {
    assert(item.contentSha256 === contentSha(item), `${item.questionId}: stale content hash`);
    assert(Number.isInteger(item.answerIndex) && item.answerIndex >= 0 && item.answerIndex < 4, `${item.questionId}: invalid answerIndex`);
    assert(Array.isArray(item.choices) && item.choices.length === 4, `${item.questionId}: expected four choices`);
    assert(new Set(item.choices.map(normalizedChoice)).size === 4, `${item.questionId}: normalized choices are not unique`);
    assert(Array.isArray(item.optionAnalysis) && item.optionAnalysis.length === 4, `${item.questionId}: expected four option analyses`);
    item.optionAnalysis.forEach((entry, index) => {
      assert(entry.choice === item.choices[index], `${item.questionId}: option analysis choice mismatch at ${index}`);
      assert(entry.truth === (index === item.answerIndex), `${item.questionId}: option truth mismatch at ${index}`);
      assert(typeof entry.reason === "string" && entry.reason.trim(), `${item.questionId}: empty option reason at ${index}`);
    });
    assert(item.optionAnalysis.filter(entry => entry.truth).length === 1, `${item.questionId}: expected one true option`);
    answerCounts[item.answerIndex] += 1;
    difficultyCounts.set(item.difficulty, (difficultyCounts.get(item.difficulty) || 0) + 1);

    const review = reviews.find(row => row.questionId === item.questionId);
    assert(review, `${item.questionId}: missing semantic review`);
    assert(review.contentSha256 === item.contentSha256, `${item.questionId}: review hash mismatch`);
    assert(review.answerMatch === true, `${item.questionId}: review answerMatch is not true`);
    assert(review.uniqueCorrectAnswer === true, `${item.questionId}: review uniqueCorrectAnswer is not true`);
    assert(JSON.stringify(review.optionTruth) === JSON.stringify(item.choices.map((_, index) => index === item.answerIndex)), `${item.questionId}: review optionTruth mismatch`);
  }

  assert(JSON.stringify(answerCounts) === "[3,3,3,3]", `${unit}-${skill}: answerIndex distribution ${JSON.stringify(answerCounts)}`);
  assert(difficultyCounts.size === 4 && [...difficultyCounts.values()].every(count => count === 3), `${unit}-${skill}: difficulty distribution ${JSON.stringify(Object.fromEntries(difficultyCounts))}`);

  for (const item of cr) {
    assert(item.contentSha256 === contentSha(item), `${item.questionId}: stale CR hash`);
    assert(Array.isArray(item.rubric) && item.rubric.some(row => row.score === 0), `${item.questionId}: missing zero-score rubric`);
    assert(/0\s*分/.test(item.answerOnlyPolicy || ""), `${item.questionId}: answer-only policy does not explicitly award zero`);
  }
  assert(lecture.contentSha256 === contentSha(lecture), `${unit}-${skill}: stale lecture hash`);
}

for (let number = 5; number <= 15; number += 1) {
  validateSkill("u03", `s${String(number).padStart(3, "0")}`);
}
validateSkill("u04", "s001");

const v006 = record("u03", "s011", "mc-questions.jsonl", "u03-s011-v006");
assert(v006.choices[v006.answerIndex] === "17", "u03-s011-v006: correct answer must remain 17");
assert(v006.choices.includes("120/7") && !v006.choices.includes("119/7"), "u03-s011-v006: equivalent distractor was not replaced");
assert(v006.optionAnalysis.some(entry => entry.reason === "直接用 120÷7，忽略題目說有 1 公尺不能使用。"), "u03-s011-v006: exact distractor reason missing");

const v011 = record("u03", "s008", "mc-questions.jsonl", "u03-s008-v011");
assert(v011.text === "家庭紀錄表提供兩項資料：哥哥今年比妹妹大 6 歲；4 年後兩人的年齡和是 36 歲。妹妹今年幾歲？", "u03-s008-v011: person-age prompt mismatch");
assert(v011.choices[v011.answerIndex] === "11", "u03-s008-v011: answer must be 11");
assert(JSON.stringify(v011).includes("(x+4)+(x+10)=36"), "u03-s008-v011: governing equation missing");
assert(!/(公園|圖書館|啟用)/.test(JSON.stringify(v011)), "u03-s008-v011: superseded context remains");

const v008s012 = record("u03", "s012", "mc-questions.jsonl", "u03-s012-v008");
assert(v008s012.explanation === "五個連續整數由小到大排列時，平均數等於中間數。本題平均數是 −3，所以中間數是 −3，五個數為 −5、−4、−3、−2、−1。", "u03-s012-v008: exact explanation mismatch");

const lectureS010 = readJson(path.join(skillDir("u03", "s010"), "lecture.json"));
assert(lectureS010.title === "行程問題：用距離、速率和時間建立方程式", "u03-s010: title mismatch");
assert(!/年齡/.test(JSON.stringify(lectureS010)), "u03-s010: age prerequisite remains");
const v004s010 = record("u03", "s010", "mc-questions.jsonl", "u03-s010-v004");
assert(v004s010.optionAnalysis.some(entry => entry.choice === "30" && entry.reason.includes("300÷(55−45)=30")), "u03-s010-v004: speed-difference distractor is not reproducible");

const expectedFigureHash = "493d5b74cd93701930d83d2d56ed0635e3a908c38590f311e45143800e62fc07";
const figureFile = path.join(CONTENT, "batches", "004-u03-complete", "figures", "u03", "fig-u03-s010-v009.svg");
assert(shaBytes(fs.readFileSync(figureFile)) === expectedFigureHash, "fig-u03-s010-v009: package SVG hash mismatch");
const figureText = fs.readFileSync(figureFile, "utf8");
assert(figureText.includes("示意圖不按比例繪製"), "fig-u03-s010-v009: scale disclaimer missing");

const s013Text = fs.readdirSync(skillDir("u03", "s013")).filter(name => /\.(?:json|jsonl)$/.test(name)).map(name => fs.readFileSync(path.join(skillDir("u03", "s013"), name), "utf8")).join("\n");
assert(!s013Text.includes("定義域"), "u03-s013: prohibited advanced term remains");
assert(s013Text.includes("題目允許的範圍"), "u03-s013: replacement term missing");

const s014Text = fs.readdirSync(skillDir("u03", "s014")).filter(name => /\.(?:json|jsonl)$/.test(name)).map(name => fs.readFileSync(path.join(skillDir("u03", "s014"), name), "utf8")).join("\n");
assert(!/A\(x\)|B\(x\)|\(b-a\)\s*\/\s*\(p-q\)/.test(s014Text), "u03-s014: prohibited function notation or memorized formula remains");
const v009s014 = record("u03", "s014", "mc-questions.jsonl", "u03-s014-v009");
assert(JSON.stringify(v009s014.choices) === JSON.stringify(["36", "45", "60", "180"]), "u03-s014-v009: repaired distractor set mismatch");
assert(v009s014.optionAnalysis.every(entry => /(?:÷|=|未再除)/.test(entry.reason)), "u03-s014-v009: distractor reasoning is not reproducible");

const v008s015 = record("u03", "s015", "mc-questions.jsonl", "u03-s015-v008");
assert(v008s015.choices.includes("13.5"), "u03-s015-v008: 13.5 distractor missing");
assert(v008s015.optionAnalysis.some(entry => entry.choice === "13.5" && entry.reason === "把 9 天誤看成 10 天，算成 (170−35)÷10=13.5。"), "u03-s015-v008: exact distractor reason missing");
const v010s015 = record("u03", "s015", "mc-questions.jsonl", "u03-s015-v010");
assert(v010s015.optionAnalysis.some(entry => entry.choice === "5" && entry.reason === "誤把固定加入的 18 克再多算一瓶 12 克，先扣 30 克，算成 (90−30)÷12=5。"), "u03-s015-v010: exact distractor reason missing");

const lectureU04 = readJson(path.join(skillDir("u04", "s001"), "lecture.json"));
const exactDefinition = "一般形式 ax+by=c 中，a、b、c 為已知數，且 a、b 不可同時為 0。若題目另外要求式中實際出現 x、y 兩種未知數，則 a、b 都不可為 0。";
assert(JSON.stringify(lectureU04).includes(exactDefinition), "u04-s001: exact canonical definition missing");
assert(!/(隻看表面|避擴音前使用)/.test(JSON.stringify(lectureU04)), "u04-s001: known typo remains");
assert(!lectureU04.accessibilityNote.includes("U05 坐標圖形 U05 坐標圖形"), "u04-s001: duplicated accessibility wording remains");

const v007u04 = record("u04", "s001", "mc-questions.jsonl", "u04-s001-v007");
assert(v007u04.prompt === "下列各式都先整理後判斷，哪一式仍是二元一次方程式？", "u04-s001-v007: prompt mismatch");
assert(JSON.stringify(v007u04.choices) === JSON.stringify(["2(x+y)−x=5", "x+y=x−y+4", "x(x+y)=6", "x/y+y=3"]), "u04-s001-v007: choices mismatch");
assert(v007u04.answerIndex === 0 && !/\bk\b|參數/.test(JSON.stringify(v007u04)), "u04-s001-v007: answer or forbidden parameter mismatch");

const v008u04 = record("u04", "s001", "mc-questions.jsonl", "u04-s001-v008");
assert(v008u04.prompt === "下列哪一式雖然有 x、y 和等號，仍不是二元一次方程式？", "u04-s001-v008: prompt mismatch");
assert(JSON.stringify(v008u04.choices) === JSON.stringify(["x+y=5", "x+1/y=5", "2x−3y=0", "0.5x+y=4"]), "u04-s001-v008: choices mismatch");
assert(v008u04.answerIndex === 1 && !/\(x\+y\)\(x−y\)/.test(JSON.stringify(v008u04)), "u04-s001-v008: answer or prohibited identity mismatch");

const cr001 = record("u04", "s001", "constructed-response.jsonl", "u04-s001-cr001");
assert(cr001.rubric.find(row => row.score === 0)?.criteria.includes("只列是／不是"), "u04-s001-cr001: answer-only zero rubric missing");
const cr002 = record("u04", "s001", "constructed-response.jsonl", "u04-s001-cr002");
assert(cr002.prompt === "判斷並說明下列三個方程式是否為二元一次方程式：① 2(x+y)−x=5；② x+y=x−y+4；③ x+1/y=3。每式都要先整理或指出關鍵原因。", "u04-s001-cr002: replacement prompt mismatch");
const cr002StudentText = JSON.stringify({ prompt: cr002.prompt, requiredWork: cr002.requiredWork, standardSolution: cr002.standardSolution, alternativeMethods: cr002.alternativeMethods, reasoningSteps: cr002.reasoningSteps, rubric: cr002.rubric });
assert(!/\bk\b|參數/.test(cr002StudentText), "u04-s001-cr002: forbidden parameter method remains");

const confirmedDirs = [
  ...Array.from({ length: 11 }, (_, index) => skillDir("u03", `s${String(index + 5).padStart(3, "0")}`)),
  skillDir("u04", "s001")
];
const sourceText = confirmedDirs.flatMap(unitDir => fs.readdirSync(unitDir, { recursive: true }).map(name => path.join(unitDir, name))).filter(file => fs.existsSync(file) && fs.statSync(file).isFile()).map(file => fs.readFileSync(file, "utf8")).join("\n");
for (const token of ["119/7", "隻看表面", "避擴音前使用", "GPT-5.6 Thinking"]) {
  assert(occurrences(sourceText, token) === 0, `Forbidden source token remains: ${token}`);
}

const ledger = readJsonl(path.join(OUT, "confirmed-repair-ledger.jsonl"));
assert(ledger.length === 91, `Expected 91 confirmed repair records, got ${ledger.length}`);
assert(new Set(ledger.map(row => `${row.type}:${row.id}`)).size === ledger.length, "Confirmed repair ledger has duplicate identities");
assert(ledger.every(row => row.reviewer === "CODEX_IMPLEMENTATION_R2_PENDING_CENTRAL_REVIEW"), "Confirmed repair ledger has an invalid reviewer label");
assert(ledger.every(row => row.status === "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"), "Confirmed repair ledger has an invalid status");

function selectLedgerRecord(rows, row) {
  if (row.type === "lecture") return rows.find(item => item.lectureId === row.id);
  if (row.type === "drawing") return rows.find(item => item.figureId === row.id);
  return rows.find(item => item.questionId === row.id);
}

for (const row of ledger) {
  const currentBytes = fs.readFileSync(path.join(ROOT, row.sourcePath));
  const baseBytes = execFileSync("git", ["show", `HEAD:${row.sourcePath}`], { cwd: ROOT });
  if (row.type === "figure-svg") {
    const baseCrlf = Buffer.from(baseBytes.toString("utf8").replace(/(?<!\r)\n/g, "\r\n"), "utf8");
    assert([shaBytes(baseBytes), shaBytes(baseCrlf)].includes(row.beforeSha256), `${row.id}: ledger before SVG hash mismatch`);
    assert(row.afterSha256 === shaBytes(currentBytes), `${row.id}: ledger after SVG hash mismatch`);
    continue;
  }
  const parse = bytes => row.sourcePath.endsWith(".jsonl")
    ? bytes.toString("utf8").split(/\r?\n/).filter(Boolean).map(JSON.parse)
    : [JSON.parse(bytes.toString("utf8"))];
  const before = selectLedgerRecord(parse(baseBytes), row);
  const after = selectLedgerRecord(parse(currentBytes), row);
  assert(before && after, `${row.id}: ledger record cannot be resolved at base and current source`);
  assert(row.beforeSha256 === contentSha(before), `${row.id}: ledger before content hash mismatch`);
  assert(row.afterSha256 === contentSha(after), `${row.id}: ledger after content hash mismatch`);
  assert(row.changedFields.length > 0, `${row.id}: ledger has no changed field`);
}

console.log(JSON.stringify({
  status: "CONFIRMED_REPAIRS_VALIDATED",
  skills: 12,
  mc: 144,
  cr: 24,
  lectures: 12,
  repairRecords: ledger.length,
  figureSha256: expectedFigureHash
}, null, 2));
