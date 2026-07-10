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
  "寫完再回頭確認係數、指數與符號是否都處理到",
  "展開後要檢查每一項的係數與符號，合併同類項後再與題意比對",
  "書寫時要分項處理",
  "符號或係數處理不完整",
  "整理時把同次項分組，較不容易漏項或合併錯",
  "二項式展開要四項相乘再合併同類項",
  "交叉相乘四項都要寫出，再合併同類項",
  "合併時字母與指數不變，只動係數",
  "只有字母與指數完全相同的項才能合併",
  "本題依題干所列式子逐步計算即可",
  "代入後依運算順序逐步計算",
  "接著",
  "此題所求為",
  "把代入與運算步驟寫完整即可",
  "把同類項合併的步驟寫清楚即可",
  "把乘法展開與合併步驟寫清楚即可",
  "此錯法會讓本題結果不正確",
  "同類項係數加減後",
  "合併時只改係數",
  "字相同、次方相同才算同類項",
  "分配律要乘到括號內每一項",
  "完全平方和要有中間項",
  "完全平方差的中間項",
  "平方差展開後中間項",
  "平方差展開後中間項會抵消",
  "先辨識是平方和",
  "先辨識是平方和、平方差還是平方差公式",
  "文字題先依題意列式",
  "文字題先依題意列式，再展開化簡",
  "去括號合併後",
  "分配律展開整理後",
  "四項相乘合併後",
  "兩括號相乘要交叉相乘四項",
  "完全平方展開整理後",
  "平方差公式展開後",
  "辨識型態並展開",
  "依題意列式展開化簡",
  "化簡整理後應得",
  "最簡式為",
  "展開式為",
  "再合併同類項",
  "三項缺一不可",
  "三項都要算到",
  "只剩兩個平方相減",
  "就「",
  "」而言",
  "計算時每一項係數與正負號都要算清楚",
  "每一步乘法或合併都要寫清楚",
  "避免算錯係數與符號",
  "化簡時粗心漏項或算錯係數就容易選錯",
  "代入題目給定的值計算",
  "逐步計算較不易出錯",
  "代表計算某一步出錯",
  "題目給定的值",
  "代入時依運算順序先乘除後加減",
  "代入時依運算順序",
  "，，",
  "。。",
  "，。",
  "。，",
  "將已知數值代入代數式",
  "先乘方再乘除、最後加減",
  "多半是代入後某一步運算錯",
  "某一步運算錯",
  "常見於符號或減負數處理錯",
  "符號或係數一個步驟算錯就會落到錯誤答案",
  "代入後算到",
  "表示運算順序或符號有誤",
  "係數或指數處理錯",
  "外項漏乘或符號錯",
  "展開時漏乘或合併錯",
  "才會得到",
  "容易在這一題算錯符號或係數",
  "粗心算錯就容易選錯",
  "容易在這一題選錯",
  "去括號或合併時符號處理錯就會選錯",
  "因式分解為", "分解為", "求根", "公式解", "判別式", "高中", "餘式", "因式定理", "多項式除法",
  "選項", "逐項", "驗算", "核對", "故應選", "答案為", "結果為", "若誤以為", "另外，選", "【", "】",
  "<=", ">=", "如圖", "下圖", "請看圖"
];
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
    assert.ok(!FACTORING_Q_RE.test(q.text), `${q.questionId} factoring question`);
    assert.ok(!BAD_SYMBOL_RE.test(blob), `${q.questionId} bad symbol`);
    assert.ok(!IMAGE_RE.test(blob), `${q.questionId} image tag`);
    assert.ok(!hasDuplicateSentence(q.explanation), `${q.questionId} duplicate`);
    assert.ok(stepOverlapCount(q.explanation, q.steps) < 2, `${q.questionId} steps copied`);
    assert.notEqual(q.commonMistake, q.explanation, `${q.questionId} cm copied expl`);
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
