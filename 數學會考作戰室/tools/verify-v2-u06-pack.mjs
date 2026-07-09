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
  findU05BannedPhrase,
  u05ExplanationTooVague,
  U05_IMAGE_PHRASES,
  stepsEmbedQuestionText,
  explanationOverRepeatsText
} from "./v2-quality.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2Dir = path.join(root, "v2");


const U06_SC_BANNED = ["赞", "反对", "弃权"];
const INVERSE_SKILLS = new Set(["inverse-variation", "inverse-variation-graph"]);
function hasU05BannedLocal(textOrArray) {
  const parts = Array.isArray(textOrArray) ? textOrArray : [textOrArray];
  for (const part of parts) {
    const hit = findU05BannedPhrase(part);
    if (hit) return hit;
  }
  return null;
}
function hasU06ScBanned(text) {
  if (typeof text !== "string") return null;
  for (const p of U06_SC_BANNED) if (text.includes(p)) return p;
  if (/几/.test(text)) return "几";
  if (/总/.test(text) && !/總/.test(text)) return "总";
  return null;
}
const U06_EXTRA_BANNED = [
  "故應選",
  "依步驟列式",
  "逐項比對",
  "各選項是否",
  "比例推算一致",
  "的結果不是",
  "列式前要先確認",
  "前後項與單位",
  "與計算結果不符",
  "與依題意算出的",
  "與依題意計算出的答案不同",
  "依比例計算應得到",
  "是中途算錯的數值",
  "請再核對一次計算",
  "帶入題目數字再算一次",
  "應排除",
  "計算過程要逐步核對",
  "避免混淆比例關係",
  "依題意列出比例式",
  "此題考查比例概念",
  "解題時先化簡比",
  "複合比例分兩步",
  "圖形概念以文字描",
  "，常見於未先化簡或列式錯誤",
  "常見於未先化簡或列式錯誤",
  "講義例題要先把條件寫成比例式",
  "反比關係乘積固定",
  "另外，選",
  "若誤以為",
  "答案為",
  "結果為",
  "正比題中兩組對應值的比值必須相同",
  "反比題中兩組對應值的乘積必須相同",
  "比例尺換算時，圖距與實距的單位要先統一",
  "份數與實際數量要一一對應，基準量不能選錯",
  "連比分配時，先算總份數再求每份的量",
  "讀題時先整理表格或情境中的比例與單位",
  "部分量除以所占份數，才會得到每份或總量",
  "比例式成立時，內項積必須等於外項積",
  "由文字描述判斷變量是否一增一減且乘積固定",
  "複合題要按順序完成換算與比例兩步",
  "化簡時要除到前後項互質，才算最簡比",
  "解出未知數後，代回原比例式確認左右是否相等",
  "代回題意比例式後",
  "無法得到",
  "把題目已知量逐步代入",
  "代回比例式後左右兩比不相等",
  "若 x 取",
  "重新整理比例份數",
  "換算時記得先統一",
  "因此 y=",
  "所求長度為",
  "倍數關係用錯",
  "（u06-",
  "(u06-"
];

function loadJs(varName, filename) {
  const code = fs.readFileSync(path.join(v2Dir, filename), "utf8");
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx);
  return ctx.window[varName];
}

function hasU06Banned(textOrArray, skillId) {
  const parts = Array.isArray(textOrArray) ? textOrArray : [textOrArray];
  for (const part of parts) {
    if (typeof part !== "string") continue;
    const u04 = hasU04BannedText(part);
    if (u04) return `U04: ${u04}`;
    const u05 = hasU05BannedLocal(part);
    if (u05) return `U05: ${u05}`;
    const gen = hasBannedText(part);
    if (gen) return `general: ${gen}`;
    for (const p of U06_EXTRA_BANNED) {
      if (p === "反比關係乘積固定" && skillId && INVERSE_SKILLS.has(skillId)) continue;
      if (part.includes(p)) return p;
    }
    const sc = hasU06ScBanned(part);
    if (sc) return `SC: ${sc}`;
  }
  return null;
}

function textStructureKey(text) {
  return text.replace(/[\d+\-−=().,，、\s]/g, "").slice(0, 12);
}

function validateQuestion(q) {
  assert.equal(q.unitId, "u06", `${q.questionId} unitId`);
  assert.equal(q.type, "mc", `${q.questionId} type`);
  assert.equal(q.visualMode, "text-only", `${q.questionId} visualMode`);
  assert.ok(countZh(q.explanation) >= 45, `${q.questionId} explanation too short (${countZh(q.explanation)})`);
  assert.ok(countZh(q.commonMistake) >= 12, `${q.questionId} commonMistake too short (${countZh(q.commonMistake)})`);
  assert.ok(!U04_EXPLANATION_PREFIX_RE.test(q.explanation.trim()), `${q.questionId} numeric explanation prefix`);
  assert.ok(!U04_EXPLANATION_PREFIX_COLON_RE.test(q.explanation.trim()), `${q.questionId} numeric prefix colon`);
  assert.ok(!hasBannedStep(q.steps), `${q.questionId} banned step: ${hasBannedStep(q.steps)}`);
  assert.ok(q.steps.length >= 3, `${q.questionId} needs 3 steps`);
  const ban = hasU06Banned([q.explanation, q.text, ...q.steps, q.commonMistake, q.concept, ...q.choices], q.skillId);
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
  assert.equal(l.unitId, "u06", `${l.skillId} unitId`);
  assert.ok(countZh(l.concept) >= 80, `${l.skillId} concept short (${countZh(l.concept)})`);
  assert.ok(l.stepGuide?.length >= 5, `${l.skillId} stepGuide<5`);
  assert.ok(l.examples?.length >= 2, `${l.skillId} examples<2`);
  assert.ok(l.commonMistakes?.length >= 4, `${l.skillId} commonMistakes<4`);
  const ban = hasU06Banned([l.concept, l.formula, ...l.stepGuide, ...l.commonMistakes, ...l.examples.flatMap(e => [e.question, e.explanation])], l.skillId);
  assert.ok(!ban, `${l.skillId} lecture banned: ${ban}`);
  for (const ex of l.examples) {
    assert.ok(countZh(ex.explanation) >= 40, `${l.skillId} example expl short`);
    assert.ok(!bankExpl.has(ex.explanation.trim()), `${l.skillId} example copies bank expl`);
  }
}

const questions = loadJs("MATH_QUESTION_BANK_V2_U06", "math-question-bank-v2-u06.js");
const lectures = loadJs("MATH_LECTURE_V2_U06", "math-lecture-v2-u06.js");

assert.equal(questions.length, 144, "U06 needs 144 questions");
assert.equal(lectures.length, 12, "U06 needs 12 lectures");

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

console.log("verify-v2-u06-pack: OK");
console.log(`  questions: ${questions.length}`);
console.log(`  lectures: ${lectures.length}`);
console.log(`  skills: ${bySkill.size}`);
console.log(`  difficulty: basic=${diffTotal.basic} standard=${diffTotal.standard} advanced=${diffTotal.advanced} literacy=${diffTotal.literacy}`);
console.log(`  answerIndex: [${ansTotal.join(", ")}]`);
