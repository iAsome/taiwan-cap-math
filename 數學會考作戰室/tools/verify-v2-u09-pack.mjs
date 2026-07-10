#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import {
  countZh,
  hasBannedStep,
  hasBannedText,
  conceptQuality,
  explanationQuality,
  explanationHasConcreteContent,
  BANNED_MISTAKE_PHRASES,
  U04_EXPLANATION_PREFIX_RE,
  U04_EXPLANATION_PREFIX_COLON_RE,
  hasU04BannedText,
  u05ExplanationTooVague,
  U05_IMAGE_PHRASES,
  stepsEmbedQuestionText,
  explanationOverRepeatsText
} from "./v2-quality.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2Dir = path.join(root, "v2");

const U09_EXTRA_BANNED = [
  "如圖", "下圖", "請看圖", "圖中", "由圖可知", "依圖判斷", "觀察圖表",
  "選項", "逐項", "驗算", "核對", "故應選", "答案為", "結果為", "若誤以為", "另外，選",
  "【", "】", "標準差", "四分位", "盒狀圖", "常態分布", "信賴區間",
  "不符合題目條件", "逐項驗算後再決定",
  "算出結果後要回頭對照題目文字是否合理",
  "這類資料題不能憑印象估算，要用算式處理",
  "解題時應先整理已知條件再列式計算",
  "會考資料題重在判讀與運算，每一步都要清楚",
  "讀題時要確認比較對象、單位與範圍是否一致",
  "讀資料時要對照題意逐步計算，不能跳步",
  "比較時要清楚比較對象、所用統計量",
  "避免由數字直接做超出題意的推論",
  "計算後要對照題目所問的統計量與單位",
  "確認結論是否仍在題意範圍內",
  "這類資料題不能憑印象估算",
  "解題時應先整理已知條件",
  "會考資料題重在判讀與運算",
  "讀題時要確認比較對象",
  "依題目所給數字列式計算",
  "列式時要把題目中的各組人數與平均都換算成總分再計算",
  "列式要用題目全部已知數字再作答",
  "不能跳步",
  "結論必須依題目所給資料計算得到",
  "計算時要把題幹已列數字全部用進去",
  "不能改用其他資料",
  "與題幹所列數字或所求量對不上",
  "是把部分資料誤當成最終答案",
  "須數各數出現次數，全部不同時可能沒有眾數",
  "有極端高分時中位較適合報一般水準",
  "有極端值時中位較適合描述多數人的水準",
  "依題幹已列數字逐步計算",
  "再確認所求的是哪一種統計量",
  "題幹已列數字",
  "所求的是哪一種統計量",
  "加權平均須先把各項乘以權重",
  "眾數看出現次數，全距用最大值減最小值",
  "平均數相關題目要先分清",
  "中位數須先排序",
  "次數表要先確認",
  "長條圖題要先找出",
  "折線圖題目須先對照",
  "計算完成後比對各錯選數字來源",
  "不符合本題資料",
  "本題正確數值是",
  "已把題目指定的各組次數全部加總",
  "與本題列式結果不符"
];
const U09_SC_BANNED = ["全体", "谨慎", "夸大"];
const BAD_SYMBOL_RE = /<=|>=/;

function loadJs(varName, filename) {
  const code = fs.readFileSync(path.join(v2Dir, filename), "utf8");
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx);
  return ctx.window[varName];
}

function hasU09Banned(textOrArray) {
  const parts = Array.isArray(textOrArray) ? textOrArray : [textOrArray];
  for (const part of parts) {
    if (typeof part !== "string") continue;
    const u04 = hasU04BannedText(part);
    if (u04) return `U04: ${u04}`;
    const gen = hasBannedText(part);
    if (gen) return `general: ${gen}`;
    for (const p of U09_EXTRA_BANNED) {
      if (part.includes(p)) return p;
    }
    for (const p of U09_SC_BANNED) {
      if (part.includes(p)) return `SC:${p}`;
    }
    if (BAD_SYMBOL_RE.test(part)) return "<=/>=";
    for (const [re, label] of [
      [/[^\s，。；]+與本題列式結果不符/, "與本題列式結果不符"],
      [/選\s*[^\s，。；]+\s*不符合本題資料/, "選X不符合本題資料"],
      [/錯選\d+與題幹/, "錯選N與題幹"]
    ]) {
      if (re.test(part)) return label;
    }
  }
  return null;
}

function textStructureKey(text) {
  return text.replace(/[\d+\-−=().,，、\s]/g, "").slice(0, 12);
}

function validateQuestion(q) {
  assert.equal(q.unitId, "u09", `${q.questionId} unitId`);
  assert.equal(q.type, "mc", `${q.questionId} type`);
  assert.equal(q.visualMode, "text-only", `${q.questionId} visualMode`);
  assert.ok(countZh(q.explanation) >= 45, `${q.questionId} explanation too short (${countZh(q.explanation)})`);
  assert.ok(countZh(q.commonMistake) >= 12, `${q.questionId} commonMistake too short (${countZh(q.commonMistake)})`);
  assert.ok(!U04_EXPLANATION_PREFIX_RE.test(q.explanation.trim()), `${q.questionId} numeric explanation prefix`);
  assert.ok(!U04_EXPLANATION_PREFIX_COLON_RE.test(q.explanation.trim()), `${q.questionId} numeric prefix colon`);
  assert.ok(!hasBannedStep(q.steps), `${q.questionId} banned step: ${hasBannedStep(q.steps)}`);
  assert.ok(q.steps.length >= 3, `${q.questionId} needs 3 steps`);
  const ban = hasU09Banned([q.explanation, q.text, ...q.steps, q.commonMistake, q.concept, ...q.choices]);
  assert.ok(!ban, `${q.questionId} banned: ${ban}`);
  const vague = u05ExplanationTooVague(q.explanation);
  assert.ok(!vague, `${q.questionId} vague explanation: ${vague}`);
  const embed = stepsEmbedQuestionText(q.steps, q.text);
  assert.ok(!embed, `${q.questionId} steps embed text: ${embed}`);
  const over = explanationOverRepeatsText(q.explanation, q.text);
  assert.ok(!over, `${q.questionId} explanation repeats text: ${over}`);
  const cq = conceptQuality(q.concept, q.explanation);
  assert.ok(!cq, `${q.questionId} concept: ${cq}`);
  const eq = explanationQuality(q.explanation, q.concept);
  assert.ok(!eq, `${q.questionId} explanation: ${eq}`);
  assert.ok(explanationHasConcreteContent(q.explanation, q.choices), `${q.questionId} explanation not concrete`);
  for (const m of BANNED_MISTAKE_PHRASES) {
    assert.ok(!q.commonMistake.includes(m), `${q.questionId} generic commonMistake: ${m}`);
  }
  for (const p of U05_IMAGE_PHRASES) {
    assert.ok(!q.text.includes(p) && !q.explanation.includes(p), `${q.questionId} image phrase ${p}`);
  }
}

function validateSkill(key, qs) {
  assert.equal(qs.length, 12, `${key} need 12 questions`);
  const dist = [0, 0, 0, 0];
  qs.forEach(q => dist[q.answerIndex]++);
  assert.deepEqual(dist, [3, 3, 3, 3], `${key} answerIndex: ${dist.join(",")}`);
  const diff = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
  qs.forEach(q => diff[q.difficulty]++);
  assert.equal(diff.basic, 4, `${key} basic count`);
  assert.equal(diff.standard, 5, `${key} standard count`);
  assert.equal(diff.advanced, 2, `${key} advanced count`);
  assert.equal(diff.literacy, 1, `${key} literacy count`);
  assert.ok(diff.literacy >= 1, `${key} needs literacy`);
  const mistakes = new Set(qs.map(q => q.commonMistake));
  assert.ok(mistakes.size >= 6, `${key} commonMistake uniform (${mistakes.size})`);
  const structures = new Set(qs.map(q => textStructureKey(q.text)));
  assert.ok(structures.size >= 8, `${key} text structures (${structures.size})`);
  assert.equal(new Set(qs.map(q => q.text.slice(0, 24))).size, 12, `${key} texts similar`);
  assert.equal(new Set(qs.map(q => q.steps.join("|"))).size, 12, `${key} steps duplicated`);
  assert.equal(new Set(qs.map(q => q.explanation.slice(0, 12))).size, 12, `${key} expl openings duplicated`);
}

function validateLecture(l, bankExpl) {
  assert.equal(l.unitId, "u09", `${l.skillId} unitId`);
  assert.ok(countZh(l.concept) >= 80, `${l.skillId} concept short (${countZh(l.concept)})`);
  assert.ok(l.stepGuide?.length >= 5, `${l.skillId} stepGuide<5`);
  assert.ok(l.examples?.length >= 2, `${l.skillId} examples<2`);
  assert.ok(l.commonMistakes?.length >= 4, `${l.skillId} commonMistakes<4`);
  const ban = hasU09Banned([l.concept, l.formula, ...l.stepGuide, ...l.commonMistakes, ...l.examples.flatMap(e => [e.question, e.explanation])]);
  assert.ok(!ban, `${l.skillId} lecture banned: ${ban}`);
  for (const ex of l.examples) {
    assert.ok(countZh(ex.explanation) >= 40, `${l.skillId} example expl short`);
    assert.ok(!bankExpl.has(ex.explanation.trim()), `${l.skillId} example copies bank expl`);
  }
}

const questions = loadJs("MATH_QUESTION_BANK_V2_U09", "math-question-bank-v2-u09.js");
const lectures = loadJs("MATH_LECTURE_V2_U09", "math-lecture-v2-u09.js");

assert.equal(questions.length, 144, "U09 needs 144 questions");
assert.equal(lectures.length, 12, "U09 needs 12 lectures");

const bySkill = new Map();
const diffTotal = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
const ansTotal = [0, 0, 0, 0];

for (const q of questions) {
  validateQuestion(q);
  diffTotal[q.difficulty]++;
  ansTotal[q.answerIndex]++;
  const key = q.skillId;
  if (!bySkill.has(key)) bySkill.set(key, []);
  bySkill.get(key).push(q);
}

assert.equal(bySkill.size, 12, `skills count ${bySkill.size}`);
assert.deepEqual(ansTotal, [36, 36, 36, 36], `answerIndex total: ${ansTotal.join(",")}`);
assert.equal(diffTotal.basic, 48, "basic total");
assert.equal(diffTotal.standard, 60, "standard total");
assert.equal(diffTotal.advanced, 24, "advanced total");
assert.equal(diffTotal.literacy, 12, "literacy total");

const bankExplBySkill = new Map();
for (const [skillId, qs] of bySkill) {
  validateSkill(skillId, qs);
  bankExplBySkill.set(skillId, new Set(qs.map(q => q.explanation.trim())));
}

for (const l of lectures) {
  const bankExpl = bankExplBySkill.get(l.skillId) || new Set();
  validateLecture(l, bankExpl);
}

const v010 = questions.find(q => q.questionId === "u09-s010-v010");
assert.ok(v010, "u09-s010-v010 missing");
assert.equal(v010.answerIndex, 2, "u09-s010-v010 answerIndex");
assert.equal(v010.choices[2], "兩組都相同", "u09-s010-v010 choice");

console.log("verify-v2-u09-pack: OK");
console.log(`  questions: ${questions.length}`);
console.log(`  lectures: ${lectures.length}`);
console.log(`  skills: ${bySkill.size}`);
console.log(`  difficulty: basic=${diffTotal.basic} standard=${diffTotal.standard} advanced=${diffTotal.advanced} literacy=${diffTotal.literacy}`);
console.log(`  answerIndex: [${ansTotal.join(", ")}]`);
