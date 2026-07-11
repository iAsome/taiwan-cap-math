#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { writeJs } from "../../v2-shared.mjs";
import { buildPilotUnit, buildPilotLectures } from "../../v2-pilot-engine.mjs";
import { U01_PILOT_UNIT, U01_SKILL_META, U01_RAW_QUESTIONS, U01_PILOT_CONTENT } from "../../v2-u01-pilot-source.mjs";
import { U02_PILOT_UNIT, U02_SKILL_META, U02_RAW_QUESTIONS, U02_PILOT_CONTENT } from "../../v2-u02-pilot-source.mjs";
import { U03_PILOT_UNIT, U03_SKILL_META, U03_RAW_QUESTIONS, U03_PILOT_CONTENT } from "../../v2-u03-pilot-source.mjs";
import { buildU01 } from "../../build-v2-u01.mjs";
import { runContentDiffCheck } from "../../check-u01-policy-v1-1-content-diff.mjs";
import { verifyU01Policy } from "../../verify-v2-u01-policy-v1-1.mjs";
import { U01_POLICY_V1_1_REQUIRED_QUESTIONS, U01_POLICY_V1_1_REQUIRED_LECTURES } from "../../u01-policy-v1-1-content-manifest.mjs";

const testDir = path.dirname(fileURLToPath(import.meta.url)), tools = path.resolve(testDir, "../.."), repo = path.resolve(tools, "../.."), BASE = "099b9c8b6592fe9c3e2223540fbf7995b267ab66";
const u01 = buildPilotUnit("u01", U01_PILOT_UNIT, U01_SKILL_META, U01_RAW_QUESTIONS, U01_PILOT_CONTENT);
for (let si = 0; si < U01_PILOT_UNIT.skills.length; si++) for (let ei = 0; ei < 2; ei++) { const skill = U01_PILOT_UNIT.skills[si], example = u01.lectures[si].examples[ei], raw = U01_RAW_QUESTIONS[skill.skillId][ei]; assert.deepEqual(Object.keys(example), ["prompt", "answer", "why"]); assert.equal(example.prompt, raw[0]); assert.equal(example.answer, raw[1][raw[2]]); assert((example.why.match(/[\u3400-\u9fff]/g) ?? []).length >= 40); }
for (const bad of ["", "太短"]) { const content = structuredClone(U01_PILOT_CONTENT), id = U01_PILOT_UNIT.skills[0].skillId; content[id][0].lectureExplanation = bad; assert.throws(() => buildPilotLectures("u01", U01_PILOT_UNIT, U01_SKILL_META, U01_RAW_QUESTIONS, content), /canonical-v1/); }
for (const [uid, U, unit, meta, raw, content] of [["u02", "U02", U02_PILOT_UNIT, U02_SKILL_META, U02_RAW_QUESTIONS, U02_PILOT_CONTENT], ["u03", "U03", U03_PILOT_UNIT, U03_SKILL_META, U03_RAW_QUESTIONS, U03_PILOT_CONTENT]]) { const built = buildPilotUnit(uid, unit, meta, raw, content); for (const [kind, value] of [["question-bank", built.questions], ["lecture", built.lectures]]) { const actual = Buffer.from(writeJs(`MATH_${kind === "question-bank" ? "QUESTION_BANK" : "LECTURE"}_V2_${U}`, value)); const expected = execFileSync("git", ["show", `${BASE}:數學會考作戰室/v2/math-${kind}-v2-${uid}.js`], { cwd: repo }); assert(actual.equals(expected)); } }
const engine = readFileSync(path.join(tools, "v2-pilot-engine.mjs"), "utf8"); for (const skill of U01_PILOT_UNIT.skills) assert.equal(engine.includes(skill.skillId), false);
const tmp = mkdtempSync(path.join(os.tmpdir(), "u01-quality-")); try { const before = readdirSync(tmp); await import(new URL("../../build-v2-u01.mjs", import.meta.url)); assert.deepEqual(readdirSync(tmp), before); const first = buildU01({ v2Dir: tmp }); assert.deepEqual(first, { questions: 60, lectures: 15 }); assert.deepEqual(readdirSync(tmp).sort(), ["math-lecture-v2-u01.js", "math-question-bank-v2-u01.js"]); const hashes = readdirSync(tmp).map(name => readFileSync(path.join(tmp, name)).toString("base64")); buildU01({ v2Dir: tmp }); assert.deepEqual(readdirSync(tmp).map(name => readFileSync(path.join(tmp, name)).toString("base64")), hashes); } finally { rmSync(tmp, { recursive: true, force: true }); }
assert.deepEqual(runContentDiffCheck(), { questionRecords: 50, explanationChanges: 50, commonMistakeChanges: 4, lectureRecords: 15, lectureFieldChanges: 60 });
assert.deepEqual(verifyU01Policy().mechanical, { "missing-advanced-coverage": 15, "missing-literacy-coverage": 14 });
assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => x.explanation).length, 50); assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => x.commonMistake).length, 4); assert.equal(Object.keys(U01_POLICY_V1_1_REQUIRED_LECTURES).length, 15);
console.log("u01-policy-v1-1-quality.test.mjs: OK");
