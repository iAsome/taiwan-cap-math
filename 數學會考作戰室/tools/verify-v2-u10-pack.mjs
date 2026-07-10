#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2 = path.join(root, "v2");
import { U10_CONTENT_BANNED as U10_BANNED } from "./u10-content-banned.mjs";
const BAD_SYMBOL_RE = /<=|>=/;
const IMAGE_RE = /<img\b|<svg\b|canvas/i;
const FACTORING_Q_RE = /因式分解|分解為[^何]|將.+分解/;
const DIFF_EXPECTED = { basic: 48, standard: 60, advanced: 24, literacy: 12 };
const AI_EXPECTED = [36, 36, 36, 36];
const AI_PER_SKILL = [3, 3, 3, 3];
const BANK_TO_SYLLABUS = {
  "polynomial-terms": "polynomial-degree",
  "polynomial-evaluation": "mult-formula-evaluate",
  "like-terms-combine": "polynomial-like-terms",
  "polynomial-add-subtract": "polynomial-add-subtract",
  "monomial-multiply": "polynomial-multiply",
  "monomial-polynomial-distribute": "distributive-evaluate",
  "binomial-multiply-basic": "polynomial-multiply",
  "square-sum-formula": "square-formula",
  "square-difference-formula": "square-formula",
  "difference-of-squares-expand": "difference-of-squares",
  "formula-mixed-recognition": "mult-formula-expand",
  "polynomial-literacy-context": "polynomial-literacy"
};

function loadU10() {
  const ctx = vm.createContext({ window: {} });
  for (const f of ["math-question-bank-v2-u10.js", "math-lecture-v2-u10.js"]) {
    const p = path.join(v2, f);
    assert.ok(fs.existsSync(p), `missing ${f}`);
    vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: f });
  }
  return { questions: ctx.window.MATH_QUESTION_BANK_V2_U10, lectures: ctx.window.MATH_LECTURE_V2_U10 };
}

function loadSyllabusU10Skills() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(v2, "math-syllabus-v2.js"), "utf8"), ctx, { filename: "math-syllabus-v2.js" });
  const unit = ctx.window.MATH_SYLLABUS_V2.units.find(u => u.unitId === "u10");
  assert.ok(unit, "syllabus u10 missing");
  const skills = [];
  for (const t of unit.topics) for (const s of t.skills) skills.push(s.skillId);
  return [...new Set(skills)].sort();
}

function hasBanned(text) {
  for (const p of U10_BANNED) if (text.includes(p)) return p;
  return null;
}

function hasDuplicateSentence(text) {
  const parts = text.split(/(?<=。)/).map(s => s.trim()).filter(Boolean);
  const seen = new Set();
  for (const p of parts) { if (seen.has(p)) return p; seen.add(p); }
  return null;
}

function checkSyllabusMapping(questions) {
  const bankSkills = [...new Set(questions.map(q => q.skillId))].sort();
  const syllabusSkills = loadSyllabusU10Skills();
  const exact = bankSkills.filter(s => syllabusSkills.includes(s));
  const mappedOnly = bankSkills.filter(s => !syllabusSkills.includes(s) && BANK_TO_SYLLABUS[s]);
  const unmapped = bankSkills.filter(s => !syllabusSkills.includes(s) && !BANK_TO_SYLLABUS[s]);
  console.log("syllabus mapping check:");
  console.log("  bank skills (12):", bankSkills.join(", "));
  console.log(`  syllabus u10 skills (${syllabusSkills.length}):`, syllabusSkills.join(", "));
  console.log("  exact match:", exact.length, exact.join(", ") || "(none)");
  console.log("  mapped (not exact):", mappedOnly.length, mappedOnly.join(", ") || "(none)");
  if (unmapped.length) console.log("  unmapped:", unmapped.join(", "));
  assert.equal(bankSkills.length, 12);
  assert.equal(unmapped.length, 0, "unmapped bank skills");
  assert.equal(exact.length + mappedOnly.length, 12);
}

function stepOverlapCount(expl, steps) {
  let n = 0;
  for (const s of steps || []) {
    const t = s.replace(/。$/, "").trim();
    if (t.length < 4) continue;
    const esc = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(^|[。；;])\\s*${esc}\\s*(?=[。；;]|$)`);
    if (re.test(expl)) n++;
  }
  return n;
}

function explanationEnding(text) {
  const parts = text.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean);
  return parts[parts.length - 1] || "";
}

function checkQuestions(questions) {
  assert.equal(questions.length, 144);
  const bySkill = new Map();
  const diff = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
  const ai = [0, 0, 0, 0];
  const endingCount = new Map();
  const BINOMIAL_FORBIDDEN = /完全平方|首平方|末平方|2ab/;
  const REMINDER_RE = /容易錯|要小心|要盯緊|最易錯/;
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
    assert.ok(!q.explanation.includes("範例"), `${q.questionId} meta 範例`);
    assert.ok(!REMINDER_RE.test(q.explanation + q.commonMistake), `${q.questionId} reminder tail`);
    if (q.skillId === "binomial-multiply-basic") {
      assert.ok(!BINOMIAL_FORBIDDEN.test(q.explanation), `${q.questionId} binomial has square-formula leak`);
    }
    assert.ok(!FACTORING_Q_RE.test(q.text), `${q.questionId} factoring question`);
    assert.ok(!BAD_SYMBOL_RE.test(blob), `${q.questionId} bad symbol`);
    assert.ok(!IMAGE_RE.test(blob), `${q.questionId} image tag`);
    assert.ok(!hasDuplicateSentence(q.explanation), `${q.questionId} duplicate`);
    assert.ok(stepOverlapCount(q.explanation, q.steps) < 2, `${q.questionId} steps copied`);
    assert.notEqual(q.commonMistake, q.explanation, `${q.questionId} cm copied expl`);
    const end = explanationEnding(q.explanation);
    if (end.length >= 8) endingCount.set(end, (endingCount.get(end) || 0) + 1);
  }
  for (const [end, n] of endingCount) {
    assert.ok(n <= 2, `explanation ending repeated ${n}x: ${end.slice(0, 40)}…`);
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
checkSyllabusMapping(questions);
console.log("verify-v2-u10-pack: OK — 144 questions, 12 lectures, all checks passed");
