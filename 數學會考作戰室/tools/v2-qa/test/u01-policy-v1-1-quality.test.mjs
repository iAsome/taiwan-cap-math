#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import { writeJs } from "../../v2-shared.mjs";
import { buildPilotUnit, buildPilotLectures } from "../../v2-pilot-engine.mjs";
import { U01_PILOT_UNIT, U01_SKILL_META, U01_RAW_QUESTIONS, U01_PILOT_CONTENT } from "../../v2-u01-pilot-source.mjs";
import { U02_PILOT_UNIT, U02_SKILL_META, U02_RAW_QUESTIONS, U02_PILOT_CONTENT } from "../../v2-u02-pilot-source.mjs";
import { U03_PILOT_UNIT, U03_SKILL_META, U03_RAW_QUESTIONS, U03_PILOT_CONTENT } from "../../v2-u03-pilot-source.mjs";
import { buildU01 } from "../../build-v2-u01.mjs";
import { analyzeU01SemanticDiversity, runContentDiffCheck, U01_PROHIBITED_PROSE, validateManifestDiff, checkRecords, qAllowed } from "../../check-u01-policy-v1-1-content-diff.mjs";
import { verifyU01Policy } from "../../verify-v2-u01-policy-v1-1.mjs";
import { U01_POLICY_V1_1_REQUIRED_QUESTIONS, U01_POLICY_V1_1_REQUIRED_LECTURES } from "../../u01-policy-v1-1-content-manifest.mjs";

const testDir = path.dirname(fileURLToPath(import.meta.url)), tools = path.resolve(testDir, "../.."), repo = path.resolve(tools, "../.."), BASE = "099b9c8b6592fe9c3e2223540fbf7995b267ab66", COVERAGE_BASE = "0d8ed5920fdb27f69192a22bd60de1f2aee63357";
const productionProfile = path.resolve(testDir, "../../../v2/math-v2-production-profile.js");
if (existsSync(productionProfile) && readFileSync(productionProfile, "utf8").includes('"skills": 339')) {
  console.log("u01-policy-v1-1-quality.test.mjs: SKIP historical fixed-base test superseded by U01-U23 production");
  process.exit(0);
}
const u01 = buildPilotUnit("u01", U01_PILOT_UNIT, U01_SKILL_META, U01_RAW_QUESTIONS, U01_PILOT_CONTENT);
for (let si = 0; si < U01_PILOT_UNIT.skills.length; si++) for (let ei = 0; ei < 2; ei++) { const skill = U01_PILOT_UNIT.skills[si], example = u01.lectures[si].examples[ei], raw = U01_RAW_QUESTIONS[skill.skillId][ei]; assert.deepEqual(Object.keys(example), ["prompt", "answer", "why"]); assert.equal(example.prompt, raw[0]); assert.equal(example.answer, raw[1][raw[2]]); assert((example.why.match(/[\u3400-\u9fff]/g) ?? []).length >= 40); }
for (const bad of ["", "太短"]) { const content = structuredClone(U01_PILOT_CONTENT), id = U01_PILOT_UNIT.skills[0].skillId; content[id][0].lectureExplanation = bad; assert.throws(() => buildPilotLectures("u01", U01_PILOT_UNIT, U01_SKILL_META, U01_RAW_QUESTIONS, content), /canonical-v1/); }
for (const [uid, U, unit, meta, raw, content] of [["u02", "U02", U02_PILOT_UNIT, U02_SKILL_META, U02_RAW_QUESTIONS, U02_PILOT_CONTENT], ["u03", "U03", U03_PILOT_UNIT, U03_SKILL_META, U03_RAW_QUESTIONS, U03_PILOT_CONTENT]]) { const built = buildPilotUnit(uid, unit, meta, raw, content); for (const [kind, value] of [["question-bank", built.questions], ["lecture", built.lectures]]) { const actual = Buffer.from(writeJs(`MATH_${kind === "question-bank" ? "QUESTION_BANK" : "LECTURE"}_V2_${U}`, value)); const expected = execFileSync("git", ["show", `${BASE}:數學會考作戰室/v2/math-${kind}-v2-${uid}.js`], { cwd: repo }); assert(actual.equals(expected)); } }
const engine = readFileSync(path.join(tools, "v2-pilot-engine.mjs"), "utf8"); for (const skill of U01_PILOT_UNIT.skills) assert.equal(engine.includes(skill.skillId), false);
const tmp = mkdtempSync(path.join(os.tmpdir(), "u01-quality-")); try { const before = readdirSync(tmp); await import(new URL("../../build-v2-u01.mjs", import.meta.url)); assert.deepEqual(readdirSync(tmp), before); const first = buildU01({ v2Dir: tmp }); assert.deepEqual(first, { questions: 89, lectures: 15 }); assert.deepEqual(readdirSync(tmp).sort(), ["math-lecture-v2-u01.js", "math-question-bank-v2-u01.js"]); const hashes = readdirSync(tmp).map(name => readFileSync(path.join(tmp, name)).toString("base64")); buildU01({ v2Dir: tmp }); assert.deepEqual(readdirSync(tmp).map(name => readFileSync(path.join(tmp, name)).toString("base64")), hashes); const builtQ = (() => { const c = { window: {} }; vm.runInNewContext(readFileSync(path.join(tmp, "math-question-bank-v2-u01.js"), "utf8"), c); return c.window.MATH_QUESTION_BANK_V2_U01; })(); const baseQ = (() => { const c = { window: {} }; vm.runInNewContext(execFileSync("git", ["show", `${COVERAGE_BASE}:數學會考作戰室/v2/math-question-bank-v2-u01.js`], { cwd: repo }).toString("utf8"), c); return c.window.MATH_QUESTION_BANK_V2_U01; })(); assert.equal(JSON.stringify(builtQ.slice(0, 60)), JSON.stringify(baseQ)); for (const q of builtQ.slice(60)) assert.equal(q.questionId in U01_POLICY_V1_1_REQUIRED_QUESTIONS, false); } finally { rmSync(tmp, { recursive: true, force: true }); }
const diff = runContentDiffCheck(); assert.equal(diff.appendedQuestionCount, 29); assert.deepEqual({ questionRecords: diff.questionRecords, explanationChanges: diff.explanationChanges, commonMistakeChanges: diff.commonMistakeChanges, textChanges: diff.textChanges, stepsChanges: diff.stepsChanges, conceptChanges: diff.conceptChanges, lectureRecords: diff.lectureRecords, lectureFieldChanges: diff.lectureFieldChanges, lectureFormulaChanges: diff.lectureFormulaChanges }, { questionRecords: 60, explanationChanges: 51, commonMistakeChanges: 60, textChanges: 3, stepsChanges: 3, conceptChanges: 4, lectureRecords: 15, lectureFieldChanges: 62, lectureFormulaChanges: 2 });
const diversity = analyzeU01SemanticDiversity(u01.questions, u01.lectures), rendered = JSON.stringify(u01);
for (const phrase of U01_PROHIBITED_PROSE) assert.equal(rendered.includes(phrase), false);
assert.deepEqual([diversity.explanations, diversity.concepts, diversity.fifths, diversity.whys, diversity.mistakes].map(rows => [rows.length, new Set(rows.map(x => x.text)).size]), [[51, 51], [15, 15], [15, 15], [30, 30], [60, 60]]);
assert.equal(Object.values(diversity.repeatedFragments).flat().length, 0);
for (const lecture of u01.lectures) { assert.equal(lecture.commonMistakes.length, 4); assert(lecture.stepGuide.length >= 5); for (const mistake of lecture.commonMistakes) assert(!/^(不要|要|先|記得|應該|請)/.test(mistake)); }
for (const q of u01.questions) { assert((q.commonMistake.match(/[\u3400-\u9fff]/g) ?? []).length >= 12); assert(!/^(不要|要|先|記得|應該|請)/.test(q.commonMistake)); }
assert.deepEqual(verifyU01Policy().mechanical, { "missing-advanced-coverage": 15, "missing-literacy-coverage": 14 });
assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => x.explanation).length, 51); assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => x.commonMistake).length, 60); assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => x.text).length, 3); assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => x.steps).length, 3); assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => x.concept).length, 4); assert.equal(Object.keys(U01_POLICY_V1_1_REQUIRED_LECTURES).length, 15); assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_LECTURES).filter(x => x.formula).length, 2);
const missingFormula = structuredClone(U01_POLICY_V1_1_REQUIRED_LECTURES); delete missingFormula["integer-exponent-laws"].formula;
assert.throws(() => validateManifestDiff(U01_POLICY_V1_1_REQUIRED_QUESTIONS, missingFormula), /changed fields mismatch/);
assert.throws(() => checkRecords([{ questionId: "q1", explanation: "a" }], [{ questionId: "q1", explanation: "a", tags: ["tampered"] }], "questionId", { q1: { explanation: "a" } }, qAllowed), /unauthorized field tags/);
console.log("u01-policy-v1-1-quality.test.mjs: OK");
