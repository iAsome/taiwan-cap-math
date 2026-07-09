#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2 = path.join(root, "v2");
const U10_BANNED = [
  "因式分解為", "分解為", "求根", "公式解", "判別式", "高中", "餘式", "因式定理", "多項式除法",
  "選項", "逐項", "驗算", "核對", "故應選", "答案為", "結果為", "若誤以為", "另外，選", "【", "】",
  "<=", ">=", "如圖", "下圖", "請看圖"
];
const BAD_SYMBOL_RE = /<=|>=/;
const IMAGE_RE = /<img\b|<svg\b|canvas/i;
const DIFF_EXPECTED = { basic: 48, standard: 60, advanced: 24, literacy: 12 };
const AI_EXPECTED = [36, 36, 36, 36];
const AI_PER_SKILL = [3, 3, 3, 3];

function loadU10() {
  const ctx = vm.createContext({ window: {} });
  for (const f of ["math-question-bank-v2-u10.js", "math-lecture-v2-u10.js"]) {
    const p = path.join(v2, f);
    assert.ok(fs.existsSync(p), `missing ${f}`);
    vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: f });
  }
  return { questions: ctx.window.MATH_QUESTION_BANK_V2_U10, lectures: ctx.window.MATH_LECTURE_V2_U10 };
}

function hasBanned(text) {
  for (const p of U10_BANNED) if (text.includes(p)) return p;
  return null;
}

function hasDuplicateSentence(text) {
  const parts = text.split(/(?<=。)/).map(s => s.trim()).filter(Boolean);
  const seen = new Set();
  for (const p of parts) {
    if (seen.has(p)) return p;
    seen.add(p);
  }
  return null;
}

function checkQuestions(questions) {
  assert.equal(questions.length, 144);
  const bySkill = new Map();
  const diff = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
  const ai = [0, 0, 0, 0];
  for (const q of questions) {
    ai[q.answerIndex]++;
    diff[q.difficulty]++;
    if (!bySkill.has(q.skillId)) bySkill.set(q.skillId, []);
    bySkill.get(q.skillId).push(q);
    assert.equal(q.visualMode, "text-only", q.questionId);
    assert.equal(q.unitId, "u10", q.questionId);
    assert.ok(countZh(q.explanation) >= 45, `${q.questionId} explanation`);
    assert.ok(countZh(q.commonMistake) >= 12, `${q.questionId} commonMistake`);
    assert.ok(q.steps.length >= 3, `${q.questionId} steps`);
    const blob = [q.text, q.explanation, q.commonMistake, ...q.steps, ...q.choices].join("\n");
    assert.ok(!hasBanned(blob), `${q.questionId} banned: ${hasBanned(blob)}`);
    assert.ok(!BAD_SYMBOL_RE.test(blob), `${q.questionId} bad symbol`);
    assert.ok(!IMAGE_RE.test(blob), `${q.questionId} image tag`);
    assert.ok(!hasDuplicateSentence(q.explanation), `${q.questionId} duplicate`);
  }
  assert.equal(bySkill.size, 12);
  for (const [sid, items] of bySkill) {
    assert.equal(items.length, 12, sid);
    const skillAi = [0, 0, 0, 0];
    let literacy = 0;
    for (const q of items) { skillAi[q.answerIndex]++; if (q.difficulty === "literacy") literacy++; }
    assert.deepEqual(skillAi, AI_PER_SKILL, sid);
    assert.ok(literacy >= 1, sid);
  }
  assert.deepEqual(diff, DIFF_EXPECTED);
  assert.deepEqual(ai, AI_EXPECTED);
}

function checkLectures(lectures) {
  assert.equal(lectures.length, 12);
  for (const l of lectures) {
    assert.ok(countZh(l.concept) >= 80, l.skillId);
    assert.ok(l.stepGuide.length >= 5, l.skillId);
    assert.ok(l.examples.length >= 2, l.skillId);
    assert.ok(l.commonMistakes.length >= 4, l.skillId);
    assert.ok(!hasBanned(JSON.stringify(l)), l.skillId);
  }
}

const { questions, lectures } = loadU10();
checkQuestions(questions);
checkLectures(lectures);
console.log("verify-v2-u10-pack: OK — 144 questions, 12 lectures, all checks passed");
