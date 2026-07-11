#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import vm from "node:vm";
import { U01_POLICY_V1_1_REQUIRED_QUESTIONS, U01_POLICY_V1_1_REQUIRED_LECTURES } from "./u01-policy-v1-1-content-manifest.mjs";

const BASE = "099b9c8b6592fe9c3e2223540fbf7995b267ab66";
const mathRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repoRoot = path.dirname(mathRoot);
const qPath = "數學會考作戰室/v2/math-question-bank-v2-u01.js";
const lPath = "數學會考作戰室/v2/math-lecture-v2-u01.js";
const qAllowed = new Set(["explanation", "commonMistake", "text", "steps", "concept"]);
const lAllowed = new Set(["concept", "stepGuide", "examples", "commonMistakes", "formula"]);
export const U01_PROHIBITED_PROSE = [
  "關鍵推導依序是", "由這些條件可得正確答案", "其餘選項則與上述計算結果或定義不一致", "實際判斷時依序使用", "並須區分「", "不能只憑表面符號或單一數字下結論", "把結果代回「", "依照這三步可確定答案", "容易出錯的地方是：", "本例先", "先先", "。；", "；。",
  "正確選項符合題目要求", "分別混淆了符號數值或定義", "也無法由原題條件得到", "從原題逐項核對可知答案是", "其他選項也不符合計算結果", "雖看似接近卻改變了必要條件", "同樣無法通過原式或定義的檢查"
];
const zh = value => [...String(value).matchAll(/[\u3400-\u9fff]/g)].map(x => x[0]).join("");
const grams = value => new Set(Array.from({ length: Math.max(0, zh(value).length - 3) }, (_, i) => zh(value).slice(i, i + 4)));
const similarity = (a, b) => { const x = grams(a), y = grams(b), common = [...x].filter(v => y.has(v)).length; return x.size || y.size ? common / (x.size + y.size - common) : 0; };
const normalizedMath = value => String(value).replaceAll("＞", ">").replaceAll("＜", "<").replaceAll("−", "-").replace(/\s+/g, "");

function duplicateFragments(records, width = 14, minimum = 3) {
  const owners = new Map();
  for (const record of records) {
    const text = zh(record.text), seen = new Set();
    for (let i = 0; i <= text.length - width; i++) seen.add(text.slice(i, i + width));
    for (const fragment of seen) { if (!owners.has(fragment)) owners.set(fragment, []); owners.get(fragment).push(record.id); }
  }
  return [...owners].filter(([, ids]) => ids.length >= minimum).map(([fragment, ids]) => ({ fragment, ids })).sort((a, b) => a.fragment.localeCompare(b.fragment, "zh-Hant"));
}

export function analyzeU01SemanticDiversity(questions, lectures) {
  const explanations = questions.filter(q => q.questionId in U01_POLICY_V1_1_REQUIRED_QUESTIONS && "explanation" in U01_POLICY_V1_1_REQUIRED_QUESTIONS[q.questionId]).map(q => ({ id: q.questionId, text: q.explanation }));
  const concepts = lectures.map(l => ({ id: l.skillId, text: l.concept }));
  const whys = lectures.flatMap(l => l.examples.map((e, i) => ({ id: `${l.skillId}:${i + 1}`, text: e.why })));
  const fifths = lectures.map(l => ({ id: l.skillId, text: l.stepGuide[4] }));
  const mistakes = lectures.flatMap(l => l.commonMistakes.map((text, i) => ({ id: `${l.skillId}:${i + 1}`, text })));
  const topPairs = records => records.flatMap((a, i) => records.slice(i + 1).map(b => ({ a: a.id, b: b.id, score: similarity(a.text, b.text) }))).sort((a, b) => b.score - a.score || a.a.localeCompare(b.a) || a.b.localeCompare(b.b)).slice(0, 10);
  return { explanations, concepts, whys, fifths, mistakes, repeatedFragments: { explanations: duplicateFragments(explanations), whys: duplicateFragments(whys), concepts: duplicateFragments(concepts) }, topPairs: { explanations: topPairs(explanations), whys: topPairs(whys), concepts: topPairs(concepts) } };
}

function assertProseQuality(questions, lectures) {
  const analysis = analyzeU01SemanticDiversity(questions, lectures);
  const allText = JSON.stringify({ questions, lectures, manifestQuestions: U01_POLICY_V1_1_REQUIRED_QUESTIONS, manifestLectures: U01_POLICY_V1_1_REQUIRED_LECTURES });
  for (const phrase of U01_PROHIBITED_PROSE) assert.equal(allText.includes(phrase), false, `prohibited prose: ${phrase}`);
  for (const records of [analysis.explanations, analysis.concepts, analysis.whys, analysis.fifths, analysis.mistakes]) assert.equal(new Set(records.map(x => x.text)).size, records.length, "duplicate student-facing prose");
  for (const records of [analysis.explanations, analysis.whys]) {
    for (const edge of [r => zh(r.text).slice(0, 10), r => zh(r.text).slice(-10)]) {
      const counts = new Map(); for (const record of records) counts.set(edge(record), (counts.get(edge(record)) ?? 0) + 1);
      assert([...counts.values()].every(n => n <= 2), "repeated prose opening or ending");
    }
    const sentences = new Map();
    for (const record of records) for (const sentence of String(record.text).split(/[。！？!?]/).map(zh).filter(x => x.length >= 12)) { if (!sentences.has(sentence)) sentences.set(sentence, new Set()); sentences.get(sentence).add(record.id); }
    assert([...sentences.values()].every(ids => ids.size < 2), "duplicate non-formula sentence");
  }
  assert.equal(analysis.repeatedFragments.explanations.length + analysis.repeatedFragments.whys.length + analysis.repeatedFragments.concepts.length, 0, "repeated 14-character prose fragment");
  for (const lecture of lectures) {
    assert(lecture.stepGuide.length >= 5); assert.equal(lecture.commonMistakes.length, 4);
    for (const mistake of lecture.commonMistakes) { const count = zh(mistake).length; assert(count >= 14 && count <= 55); assert(!/^(不要|要|先|記得|應該|請)/.test(mistake)); }
    for (const example of lecture.examples) { assert.deepEqual(Object.keys(example), ["prompt", "answer", "why"]); const count = zh(example.why).length; assert(count >= 40 && count <= 115); assert(normalizedMath(example.why).includes(normalizedMath(example.answer)) || [...String(example.prompt).matchAll(/-?\d+(?:\.\d+)?|[|√π×÷⁰¹²³⁴⁵⁶⁷⁸⁹]+/g)].some(m => example.why.includes(m[0])), `ungrounded why: ${lecture.skillId}`); }
  }
  for (const q of analysis.explanations) { const record = questions.find(x => x.questionId === q.id); assert(normalizedMath(q.text).includes(normalizedMath(record.choices[record.answerIndex])) || [...String(record.text).matchAll(/-?\d+(?:\.\d+)?|[|√π×÷⁰¹²³⁴⁵⁶⁷⁸⁹]+/g)].some(m => q.text.includes(m[0])), `ungrounded explanation: ${q.id}`); assert(zh(q.text).length >= 45, `explanation min: ${q.id}`); }
  for (const q of questions) { assert(zh(q.commonMistake).length >= 12, `commonMistake min: ${q.questionId}`); assert(!/^(不要|要|先|記得|應該|請)/.test(q.commonMistake), `commonMistake prefix: ${q.questionId}`); }
  return analysis;
}

function baseBytes(repoPath) { return execFileSync("git", ["show", `${BASE}:${repoPath}`], { cwd: repoRoot, maxBuffer: 64 * 1024 * 1024 }); }
function load(source, key) { const c = { window: {} }; vm.runInNewContext(source.toString("utf8"), c); return c.window[key]; }
function current(repoPath, key) { return load(readFileSync(path.join(repoRoot, repoPath)), key); }
function base(repoPath, key) { return load(baseBytes(repoPath), key); }
function stable(value) { return JSON.stringify(value); }

function checkRecords(before, after, idField, manifest, allowed) {
  assert.equal(after.length, before.length); assert.equal(stable(after.map(x => x[idField])), stable(before.map(x => x[idField]))); assert.equal(new Set(after.map(x => x[idField])).size, after.length);
  let fields = 0, records = 0;
  for (let i = 0; i < after.length; i++) {
    const id = after[i][idField];
    const changedAll = [...new Set([...Object.keys(before[i]), ...Object.keys(after[i])])].filter(field => stable(before[i][field]) !== stable(after[i][field]));
    for (const field of changedAll) assert(allowed.has(field), `${id}: unauthorized field ${field}`);
    const expected = Object.keys(manifest[id] ?? {});
    assert.deepEqual(changedAll.sort(), expected.sort(), `${id}: changed fields mismatch`);
    if (changedAll.length) records++;
    for (const field of changedAll) assert.equal(stable(after[i][field]), stable(manifest[id][field]), `${id}.${field}: manifest mismatch`);
    fields += changedAll.length;
  }
  assert.equal(stable(Object.keys(manifest).sort()), stable(after.filter((_, i) => [...new Set([...Object.keys(before[i]), ...Object.keys(after[i])])].some(field => stable(before[i][field]) !== stable(after[i][field]))).map(x => x[idField]).sort()));
  return { records, fields };
}

export function validateManifestDiff(manifestQ = U01_POLICY_V1_1_REQUIRED_QUESTIONS, manifestL = U01_POLICY_V1_1_REQUIRED_LECTURES) {
  const beforeQ = base(qPath, "MATH_QUESTION_BANK_V2_U01"), afterQ = current(qPath, "MATH_QUESTION_BANK_V2_U01");
  const beforeL = base(lPath, "MATH_LECTURE_V2_U01"), afterL = current(lPath, "MATH_LECTURE_V2_U01");
  checkRecords(beforeQ, afterQ, "questionId", manifestQ, qAllowed);
  checkRecords(beforeL, afterL, "skillId", manifestL, lAllowed);
}

export { checkRecords, qAllowed, lAllowed };

export function runContentDiffCheck() {
  const beforeQ = base(qPath, "MATH_QUESTION_BANK_V2_U01"), afterQ = current(qPath, "MATH_QUESTION_BANK_V2_U01");
  const beforeL = base(lPath, "MATH_LECTURE_V2_U01"), afterL = current(lPath, "MATH_LECTURE_V2_U01");
  assert.equal(afterQ.length, 60); assert.equal(afterL.length, 15);
  validateManifestDiff();
  const questions = checkRecords(beforeQ, afterQ, "questionId", U01_POLICY_V1_1_REQUIRED_QUESTIONS, qAllowed);
  const lectures = checkRecords(beforeL, afterL, "skillId", U01_POLICY_V1_1_REQUIRED_LECTURES, lAllowed);
  assert.equal(questions.records, 60); assert.equal(questions.fields, 121); assert.equal(lectures.records, 15); assert.equal(lectures.fields, 62);
  assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => "explanation" in x).length, 51);
  assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => "commonMistake" in x).length, 60);
  assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => "text" in x).length, 3);
  assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => "steps" in x).length, 3);
  assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => "concept" in x).length, 4);
  assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_LECTURES).filter(x => "formula" in x).length, 2);
  assert.deepEqual(Object.keys(U01_POLICY_V1_1_REQUIRED_LECTURES).filter(id => "formula" in U01_POLICY_V1_1_REQUIRED_LECTURES[id]).sort(), ["integer-absolute-value-distance", "integer-exponent-laws"]);
  for (const lecture of afterL) for (const example of lecture.examples) assert.deepEqual(Object.keys(example), ["prompt", "answer", "why"]);
  const diversity = assertProseQuality(afterQ, afterL);
  for (const uid of ["u02", "u03"]) for (const kind of ["question-bank", "lecture"]) { const p = `數學會考作戰室/v2/math-${kind}-v2-${uid}.js`; assert(readFileSync(path.join(repoRoot, p)).equals(baseBytes(p)), `${p} changed`); }
  for (const uid of ["u02", "u03"]) { const p = `數學會考作戰室/tools/v2-${uid}-pilot-source.mjs`; assert(readFileSync(path.join(repoRoot, p)).equals(baseBytes(p)), `${p} changed`); }
  return { questionRecords: 60, explanationChanges: 51, commonMistakeChanges: 60, textChanges: 3, stepsChanges: 3, conceptChanges: 4, lectureRecords: 15, lectureFieldChanges: 62, lectureConceptChanges: 15, lectureStepGuideChanges: 15, lectureExamplesChanges: 15, lectureCommonMistakesChanges: 15, lectureFormulaChanges: 2, diversity };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const r = runContentDiffCheck();
  console.log(`changed question records ${r.questionRecords}; explanation ${r.explanationChanges}; commonMistake ${r.commonMistakeChanges}; text ${r.textChanges}; steps ${r.stepsChanges}; concept ${r.conceptChanges}; lecture records ${r.lectureRecords}; lecture fields ${r.lectureFieldChanges}; repeated fragments 0`);
}
