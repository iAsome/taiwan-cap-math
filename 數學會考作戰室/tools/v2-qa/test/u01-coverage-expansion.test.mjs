#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import { buildU01 } from "../../build-v2-u01.mjs";
import { buildU01CoverageQuestions, validateU01CoverageQuestions } from "../../v2-u01-coverage-builder.mjs";
import { U01_COVERAGE_QUESTIONS } from "../../v2-u01-coverage-source.mjs";
import { U01_COVERAGE_EXPANSION_REQUIRED_QUESTIONS } from "../../u01-coverage-expansion-manifest.mjs";
import {
  runCoverageExpansionCheck,
  assertLegacySeparation,
  assertCoverageRepairLocks,
  assertChatGptDecisions,
  assertAcceptedOriginalRecordHashes,
  assertProductionBuildImports,
  inventoryCoverageTaskImports,
  U01_OVERRIDE_RECORD_IDS,
  U01_ACCEPTED_ORIGINAL_RECORD_SHA256,
} from "../../check-u01-coverage-expansion.mjs";
import { verifyU01Coverage } from "../../verify-v2-u01-coverage.mjs";
import { runContentDiffCheck } from "../../check-u01-policy-v1-1-content-diff.mjs";
import { verifyU01Policy } from "../../verify-v2-u01-policy-v1-1.mjs";
import { U01_POLICY_V1_1_REQUIRED_QUESTIONS } from "../../u01-policy-v1-1-content-manifest.mjs";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const tools = path.resolve(testDir, "../..");
const productionProfile = path.resolve(testDir, "../../../v2/math-v2-production-profile.js");
if (existsSync(productionProfile) && readFileSync(productionProfile, "utf8").includes('"skills": 339')) {
  console.log("u01-coverage-expansion.test.mjs: SKIP historical fixed-base test superseded by U01-U23 production");
  process.exit(0);
}
const repo = path.resolve(tools, "../..");
const BASE = "0d8ed5920fdb27f69192a22bd60de1f2aee63357";
const EXPECTED_ORDER = U01_COVERAGE_QUESTIONS.map(q => q.questionId);
const zh = value => [...String(value).matchAll(/[\u3400-\u9fff]/g)].map(x => x[0]).join("");

function loadBank() {
  const c = { window: {} };
  vm.runInNewContext(readFileSync(path.join(repo, "數學會考作戰室/v2/math-question-bank-v2-u01.js"), "utf8"), c);
  return c.window.MATH_QUESTION_BANK_V2_U01;
}

function baseBank() {
  const c = { window: {} };
  vm.runInNewContext(execFileSync("git", ["show", `${BASE}:數學會考作戰室/v2/math-question-bank-v2-u01.js`], { cwd: repo }).toString("utf8"), c);
  return c.window.MATH_QUESTION_BANK_V2_U01;
}

const built = buildU01CoverageQuestions();
buildU01();
assert.deepEqual(built.map(q => q.questionId), EXPECTED_ORDER);
assert.equal(built.filter(q => q.difficulty === "advanced").length, 15);
assert.equal(built.filter(q => q.difficulty === "literacy").length, 14);
assert.deepEqual([0, 1, 2, 3].map(i => built.filter(q => q.answerIndex === i).length), [8, 7, 7, 7]);
assert.equal(JSON.stringify(built), JSON.stringify(U01_COVERAGE_QUESTIONS));
assert.equal(JSON.stringify(built), JSON.stringify(Object.values(U01_COVERAGE_EXPANSION_REQUIRED_QUESTIONS)));

const bank = loadBank();
const accepted = baseBank();
assert.equal(JSON.stringify(bank.slice(0, 60)), JSON.stringify(accepted));
assert.equal(bank.length, 89);
for (const q of bank.slice(60)) assert.equal(q.questionId in U01_POLICY_V1_1_REQUIRED_QUESTIONS, false);

assert.throws(() => validateU01CoverageQuestions([...built, { ...built[0], questionId: "u01-s001-v005-dup" }]), /duplicate IDs|coverage count/);
assert.throws(() => validateU01CoverageQuestions([{ ...built[0], choices: ["a", "a", "b", "c"] }, ...built.slice(1)]), /duplicate choices/);
assert.throws(() => validateU01CoverageQuestions([{ ...built[0], explanation: "短" }, ...built.slice(1)]), /explanation/);
assert.throws(() => validateU01CoverageQuestions([{ ...built[0], commonMistake: "短" }, ...built.slice(1)]), /commonMistake/);
assert.throws(() => validateU01CoverageQuestions([{ ...built[0], skillId: "wrong" }, ...built.slice(1)]), /skillId/);
assert.throws(() => validateU01CoverageQuestions([{ ...built[0], topicId: "wrong" }, ...built.slice(1)]), /topicId/);
assert.throws(() => validateU01CoverageQuestions([{ ...built[0], difficulty: "basic" }, ...built.slice(1)]), /difficulty/);
assert.throws(() => validateU01CoverageQuestions([{ ...built[0], answerIndex: 9 }, ...built.slice(1)]), /answerIndex/);
assert.throws(() => validateU01CoverageQuestions([{ ...built[0], text: "幂" }, ...built.slice(1)]), /simplified Chinese|幂/);

const shortExplanation = built.map((q, i) => (i === 0 ? { ...q, explanation: "短" } : q));
assert.throws(() => validateU01CoverageQuestions(shortExplanation, shortExplanation), /explanation/);
const shortCommonMistake = built.map((q, i) => (i === 0 ? { ...q, commonMistake: "短" } : q));
assert.throws(() => validateU01CoverageQuestions(shortCommonMistake, shortCommonMistake), /commonMistake/);

for (const q of built) {
  assert(zh(q.explanation).length >= 45, `${q.questionId} explanation min`);
  assert(zh(q.commonMistake).length >= 12, `${q.questionId} commonMistake min`);
}

const tmp = mkdtempSync(path.join(os.tmpdir(), "u01-coverage-"));
try {
  const before = readdirSync(tmp);
  await import(new URL("../../build-v2-u01.mjs", import.meta.url));
  assert.deepEqual(readdirSync(tmp), before);
  const first = buildU01({ v2Dir: tmp });
  assert.deepEqual(first, { questions: 89, lectures: 15 });
  const hashes = readdirSync(tmp).map(name => readFileSync(path.join(tmp, name)).toString("base64"));
  buildU01({ v2Dir: tmp });
  assert.deepEqual(readdirSync(tmp).map(name => readFileSync(path.join(tmp, name)).toString("base64")), hashes);
} finally { rmSync(tmp, { recursive: true, force: true }); }

const all = loadBank();
assert.deepEqual([0, 1, 2, 3].map(i => all.filter(q => q.answerIndex === i).length), [23, 22, 22, 22]);
assert.deepEqual(Object.fromEntries(["basic", "standard", "literacy", "advanced"].map(level => [level, all.filter(q => q.difficulty === level).length])), { basic: 28, standard: 30, literacy: 16, advanced: 15 });

assert.equal(U01_OVERRIDE_RECORD_IDS.length, 11);
assert.equal(Object.keys(U01_ACCEPTED_ORIGINAL_RECORD_SHA256).length, 18);
assertProductionBuildImports();
assertLegacySeparation();
assertAcceptedOriginalRecordHashes(built);
assertCoverageRepairLocks(built);
assertChatGptDecisions(loadBank(), baseBank());
assert.equal(inventoryCoverageTaskImports().every((x) => !x.imports.some((i) => i.includes("quiz-taxonomy") || i.includes("lecture-taxonomy") || i.includes("quiz-variant-bank"))), true);

runCoverageExpansionCheck();
verifyU01Coverage();
const diff = runContentDiffCheck();
assert.equal(diff.appendedQuestionCount, 29);
assert.deepEqual(verifyU01Policy().mechanical, { "missing-advanced-coverage": 15, "missing-literacy-coverage": 14 });

console.log("u01-coverage-expansion.test.mjs: OK");
