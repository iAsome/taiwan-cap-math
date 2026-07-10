#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";
import { U08_R1_BANNED } from "./v2-u08-r1-banned.mjs";
import { U08_R2_BANNED } from "./v2-u08-r2-banned.mjs";
import { U08_R3_BANNED } from "./v2-u08-r3-banned.mjs";
import { U08_QA1_REQUIRED_LECTURES } from "./u08-qa1-lecture-manifest.mjs";
import { U08_QA2A_REQUIRED_QUESTIONS } from "./u08-qa2a-question-manifest.mjs";
import { U08_QA2B1_REQUIRED_QUESTIONS } from "./u08-qa2b1-question-manifest.mjs";

const MACHINE_RESIDUE = [
  "沒錯", "才對", "高帶錯", "數字帶錯", "公式用錯", "計算錯誤",
  "其中一個算錯", "多乘", "少扣一點", "漏加倍",
];

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2 = path.join(root, "v2");

const U08_BANNED = [
  ...U08_R1_BANNED,
  ...U08_R2_BANNED,
  ...U08_R3_BANNED,
  "斜率"
];
const BAD_SYMBOL_RE = /<=|>=/;
const IMAGE_RE = /<img\b|<svg\b|canvas/i;
const STEP_SENTENCE_RE = /[。！？]$/;
const DIFF_EXPECTED = { basic: 48, standard: 60, advanced: 24, literacy: 12 };
const AI_EXPECTED = [36, 36, 36, 36];
const AI_PER_SKILL = [3, 3, 3, 3];

function loadU08() {
  const ctx = vm.createContext({ window: {} });
  for (const f of ["math-question-bank-v2-u08.js", "math-lecture-v2-u08.js"]) {
    const p = path.join(v2, f);
    assert.ok(fs.existsSync(p), `missing ${f}`);
    vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: f });
  }
  return { questions: ctx.window.MATH_QUESTION_BANK_V2_U08, lectures: ctx.window.MATH_LECTURE_V2_U08 };
}

function hasBanned(text) {
  for (const p of U08_BANNED) if (text.includes(p)) return p;
  return null;
}

function hasDuplicateSentence(text) {
  const parts = text.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean);
  const seen = new Set();
  for (const p of parts) {
    if (seen.has(p)) return p;
    seen.add(p);
  }
  return null;
}

function hasDuplicateSteps(steps) {
  const seen = new Set();
  for (const step of steps) {
    const s = String(step).trim();
    if (seen.has(s)) return s;
    seen.add(s);
  }
  return null;
}

function isFullStep(step) {
  const s = String(step).trim();
  if (!STEP_SENTENCE_RE.test(s)) return false;
  if (countZh(s) >= 5) return true;
  return s.length >= 8;
}

function checkStepSentence(step, questionId) {
  assert.ok(isFullStep(step), `${questionId} step not sentence: ${step}`);
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
    assert.ok(countZh(q.explanation) >= 45, `${q.questionId} explanation`);
    assert.ok(countZh(q.commonMistake) >= 12, `${q.questionId} commonMistake`);
    assert.ok(q.steps.length >= 3, `${q.questionId} steps`);
    for (const step of q.steps) checkStepSentence(step, q.questionId);
    assert.ok(!hasDuplicateSteps(q.steps), `${q.questionId} duplicate step: ${hasDuplicateSteps(q.steps)}`);
    const blob = [q.text, q.explanation, q.commonMistake, ...q.steps, ...q.choices].join("\n");
    assert.ok(!hasBanned(blob), `${q.questionId} banned: ${hasBanned(blob)}`);
    assert.ok(!BAD_SYMBOL_RE.test(blob), `${q.questionId} bad symbol`);
    assert.ok(!IMAGE_RE.test(blob), `${q.questionId} image tag`);
    assert.ok(!hasDuplicateSentence(q.explanation), `${q.questionId} duplicate`);
    assert.equal(q.unitId, "u08", q.questionId);
    assert.equal(q.visualMode, "text-only", q.questionId);
  }
  assert.equal(bySkill.size, 12);
  for (const [sid, items] of bySkill) {
    assert.equal(items.length, 12, sid);
    const skillAi = [0, 0, 0, 0];
    let literacy = 0;
    for (const q of items) {
      skillAi[q.answerIndex]++;
      if (q.difficulty === "literacy") literacy++;
    }
    assert.deepEqual(skillAi, AI_PER_SKILL, sid);
    assert.ok(literacy >= 1, sid);
  }
  assert.deepEqual(diff, DIFF_EXPECTED);
  assert.deepEqual(ai, AI_EXPECTED);
}

function checkQa2aManifest(questions) {
  const manifestIds = Object.keys(U08_QA2A_REQUIRED_QUESTIONS);
  assert.equal(manifestIds.length, 16, "QA2A manifest question count");

  const byId = new Map(questions.map((q) => [q.questionId, q]));
  for (const id of manifestIds) {
    const matches = questions.filter((q) => q.questionId === id);
    assert.equal(matches.length, 1, `${id} must appear exactly once`);
  }

  for (const [id, required] of Object.entries(U08_QA2A_REQUIRED_QUESTIONS)) {
    const q = byId.get(id);
    for (const [field, value] of Object.entries(required)) {
      assert.equal(
        JSON.stringify(q[field]),
        JSON.stringify(value),
        `${id}.${field} manifest`
      );
    }
  }

  const bankBlob = JSON.stringify(questions);
  assert.ok(!bankBlob.includes("组成"), "simplified 组成 must be absent");
  assert.ok(!bankBlob.includes("向后"), "simplified 向后 must be absent");
  assert.ok(!bankBlob.includes("公釐就是公分"), "公釐就是公分 must be absent");
  assert.ok(bankBlob.includes("組成"), "corrected 組成 must be present");
  assert.ok(bankBlob.includes("從前向後看"), "corrected 從前向後看 must be present");

  const v011 = byId.get("u08-s010-v011");
  assert.equal(v011.choices[v011.answerIndex], "0.6", "u08-s010-v011 correctChoice");
}

function checkQa2b1Manifest(questions) {
  const manifestIds = Object.keys(U08_QA2B1_REQUIRED_QUESTIONS);
  assert.equal(manifestIds.length, 10, "QA2B1 manifest question count");

  const byId = new Map(questions.map((q) => [q.questionId, q]));
  for (const id of manifestIds) {
    const matches = questions.filter((q) => q.questionId === id);
    assert.equal(matches.length, 1, `${id} must appear exactly once`);
  }

  for (const [id, required] of Object.entries(U08_QA2B1_REQUIRED_QUESTIONS)) {
    const q = byId.get(id);
    for (const [field, value] of Object.entries(required)) {
      assert.equal(
        JSON.stringify(q[field]),
        JSON.stringify(value),
        `${id}.${field} manifest`
      );
    }
    for (const p of MACHINE_RESIDUE) {
      assert.ok(!q.explanation.includes(p), `${id} explanation residue: ${p}`);
    }
  }

  const v010 = byId.get("u08-s007-v010");
  assert.equal(
    v010.text,
    U08_QA2B1_REQUIRED_QUESTIONS["u08-s007-v010"].text,
    "u08-s007-v010 text"
  );
}

function checkLectures(lectures) {
  const manifestIds = Object.keys(U08_QA1_REQUIRED_LECTURES);
  assert.equal(manifestIds.length, 12, "manifest skill count");
  assert.equal(lectures.length, 12);
  const skillIds = lectures.map((l) => l.skillId);
  assert.equal(new Set(skillIds).size, 12, "unique lecture skillIds");

  const lectureBlob = JSON.stringify(lectures);
  assert.ok(!lectureBlob.includes("花坛"), "simplified 花坛 must be absent");
  assert.ok(lectureBlob.includes("花壇"), "corrected 花壇 must be present");

  for (const l of lectures) {
    assert.ok(typeof l.title === "string" && l.title.trim().length > 0, `${l.skillId} title`);
    assert.ok(countZh(l.concept) >= 80, l.skillId);
    assert.ok(l.stepGuide.length >= 5, l.skillId);
    assert.ok(l.examples.length >= 2, l.skillId);
    assert.ok(l.commonMistakes.length >= 4, l.skillId);
    assert.ok(!hasBanned(JSON.stringify(l)), `${l.skillId} lecture banned`);
    for (const s of l.stepGuide) checkStepSentence(s, `${l.skillId} stepGuide`);
    for (const ex of l.examples) {
      assert.ok(countZh(ex.why) >= 40, `${l.skillId} example why`);
    }
    const required = U08_QA1_REQUIRED_LECTURES[l.skillId];
    assert.ok(required, `${l.skillId} manifest missing`);
    assert.equal(JSON.stringify(l.examples), JSON.stringify(required.examples), `${l.skillId} examples manifest`);
  }
}

const { questions, lectures } = loadU08();
checkQuestions(questions);
checkQa2aManifest(questions);
checkQa2b1Manifest(questions);
checkLectures(lectures);
console.log("verify-v2-u08-pack: OK — 144 questions, 12 lectures, all checks passed");
