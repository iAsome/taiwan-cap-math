#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2 = path.join(root, "v2");

const U07_BANNED = [
  "另外，選", "不符合題目條件", "逐項驗算後再決定", "步驟跳躍", "符號處理錯誤",
  "若誤以為", "答案為", "結果為", "【", "】", "如圖", "下圖", "請看圖", "請看下圖", "圖中"
];
const IMAGE_RE = /<img\b|<svg\b|canvas/i;
const BAD_SYMBOL_RE = /<=|>=/;

const DIFF_EXPECTED = { basic: 48, standard: 60, advanced: 24, literacy: 12 };
const AI_EXPECTED = [36, 36, 36, 36];
const AI_PER_SKILL = [3, 3, 3, 3];

function loadU07() {
  const ctx = vm.createContext({ window: {} });
  for (const f of ["math-question-bank-v2-u07.js", "math-lecture-v2-u07.js"]) {
    const p = path.join(v2, f);
    assert.ok(fs.existsSync(p), `missing ${f} — run build-u07-pack.mjs first`);
    vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: f });
  }
  return { questions: ctx.window.MATH_QUESTION_BANK_V2_U07, lectures: ctx.window.MATH_LECTURE_V2_U07 };
}

function hasBanned(text) {
  for (const p of U07_BANNED) if (text.includes(p)) return p;
  return null;
}

function checkQuestions(questions) {
  assert.equal(questions.length, 144, "need 144 questions");
  const bySkill = new Map();
  const diff = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
  const ai = [0, 0, 0, 0];

  for (const q of questions) {
    assert.equal(q.unitId, "u07");
    assert.equal(q.type, "mc");
    assert.equal(q.visualMode, "text-only");
    assert.equal(q.choices.length, 4);
    assert.ok(q.answerIndex >= 0 && q.answerIndex <= 3);
    ai[q.answerIndex]++;
    diff[q.difficulty]++;
    if (!bySkill.has(q.skillId)) bySkill.set(q.skillId, []);
    bySkill.get(q.skillId).push(q);

    assert.ok(countZh(q.explanation) >= 45, `${q.questionId} explanation ${countZh(q.explanation)}`);
    assert.ok(countZh(q.commonMistake) >= 12, `${q.questionId} commonMistake`);
    assert.ok(q.steps.length >= 3, `${q.questionId} steps`);

    const blob = [q.text, q.explanation, q.commonMistake, ...q.steps, ...q.choices].join("\n");
    const ban = hasBanned(blob);
    assert.ok(!ban, `${q.questionId} banned: ${ban}`);
    assert.ok(!BAD_SYMBOL_RE.test(blob), `${q.questionId} bad symbol <= >=`);
    assert.ok(!IMAGE_RE.test(blob), `${q.questionId} image tag`);

    if (q.skillId === "inequality-number-line") {
      assert.ok(!/請看圖|如圖|下圖/.test(blob), `${q.questionId} number-line needs text only`);
    }
  }

  assert.equal(bySkill.size, 12, "need 12 skills");
  for (const [sid, items] of bySkill) {
    assert.equal(items.length, 12, `${sid} need 12`);
    const skillAi = [0, 0, 0, 0];
    let literacy = 0;
    for (const q of items) {
      skillAi[q.answerIndex]++;
      if (q.difficulty === "literacy") literacy++;
    }
    assert.deepEqual(skillAi, AI_PER_SKILL, `${sid} answerIndex balance`);
    assert.ok(literacy >= 1, `${sid} needs literacy`);
  }

  assert.deepEqual(diff, DIFF_EXPECTED, "difficulty distribution");
  assert.deepEqual(ai, AI_EXPECTED, "unit answerIndex balance");
}

function checkLectures(lectures) {
  assert.equal(lectures.length, 12, "need 12 lectures");
  for (const l of lectures) {
    assert.equal(l.unitId, "u07");
    assert.ok(countZh(l.concept) >= 80, `${l.skillId} concept`);
    assert.ok(l.stepGuide.length >= 5, `${l.skillId} stepGuide`);
    assert.ok(l.examples.length >= 2, `${l.skillId} examples`);
    assert.ok(l.commonMistakes.length >= 4, `${l.skillId} commonMistakes`);
    const blob = JSON.stringify(l);
    assert.ok(!hasBanned(blob), `${l.skillId} lecture banned`);
    assert.ok(!IMAGE_RE.test(blob), `${l.skillId} lecture image`);
    assert.ok(!/請看圖|如圖|下圖/.test(blob), `${l.skillId} lecture image phrase`);
  }
}

const { questions, lectures } = loadU07();
checkQuestions(questions);
checkLectures(lectures);
console.log("verify-v2-u07-pack: OK — 144 questions, 12 lectures, all checks passed");
