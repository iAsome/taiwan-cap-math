#!/usr/bin/env node
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import vm from "node:vm";
import { U01_PROHIBITED_PROSE } from "./check-u01-policy-v1-1-content-diff.mjs";
import { U01_COVERAGE_QUESTIONS } from "./v2-u01-coverage-source.mjs";
import { U01_COVERAGE_EXPANSION_REQUIRED_QUESTIONS } from "./u01-coverage-expansion-manifest.mjs";
import { validateU01CoverageQuestions } from "./v2-u01-coverage-builder.mjs";

const BASE = "0d8ed5920fdb27f69192a22bd60de1f2aee63357";
export const U01_LEGACY_BLOCKED_PATHS = [
  "數學會考作戰室/quiz-taxonomy.js",
  "數學會考作戰室/lecture-taxonomy.js",
  "數學會考作戰室/quiz-variant-bank.js",
];
export const U01_COVERAGE_TASK_FILES = [
  "數學會考作戰室/tools/build-v2-u01.mjs",
  "數學會考作戰室/tools/check-u01-policy-v1-1-content-diff.mjs",
  "數學會考作戰室/tools/verify-v2-u01-policy-v1-1.mjs",
  "數學會考作戰室/tools/v2-qa/test/u01-policy-v1-1-quality.test.mjs",
  "數學會考作戰室/v2/math-question-bank-v2-u01.js",
  "數學會考作戰室/tools/v2-u01-coverage-source.mjs",
  "數學會考作戰室/tools/v2-u01-coverage-builder.mjs",
  "數學會考作戰室/tools/u01-coverage-expansion-manifest.mjs",
  "數學會考作戰室/tools/check-u01-coverage-expansion.mjs",
  "數學會考作戰室/tools/verify-v2-u01-coverage.mjs",
  "數學會考作戰室/tools/v2-qa/test/u01-coverage-expansion.test.mjs",
];
export const U01_OVERRIDE_RECORD_IDS = [
  "u01-s001-v006",
  "u01-s002-v005",
  "u01-s003-v005",
  "u01-s004-v005",
  "u01-s004-v006",
  "u01-s005-v005",
  "u01-s006-v005",
  "u01-s006-v006",
  "u01-s008-v005",
  "u01-s011-v005",
  "u01-s012-v006",
];
export const U01_ACCEPTED_ORIGINAL_RECORD_SHA256 = {
  "u01-s001-v005": "3edc3e63816a1afc605e44b62951b35446c12c0003c60ec7a76ac4e9fae216e8",
  "u01-s002-v006": "87777bf93a0d887978dd757ca27cc1cf71706333f809518af9ea80e841ffb71c",
  "u01-s003-v006": "e35ba3522304cc517e80b21ef52ded86f1f980094bbb1110112d2d304f5feea2",
  "u01-s005-v006": "fc9a47c518a9b7cb760d23af487a0b8cdd846cc585dad326577f4e489d196428",
  "u01-s007-v005": "377d6843fbb7db64f216eb3d9292e926eba51fe2fcca0aa7f5d515382ccf9127",
  "u01-s007-v006": "4eb2feff92965e0de342a6f6ea1d7dd1d6074381f20ab41bedcf4a5ae7b8ca19",
  "u01-s008-v006": "9026d58e00a25abaa67bb0d740dbf11d570f1a5d78ee9d1c14b945767bc444c3",
  "u01-s009-v005": "17b5e2e9658a7c5fb66a80c8ee6f274218d4e61e46c1b343bb0411de2e07c401",
  "u01-s009-v006": "c01bd65bb071b7daa6262ae3a5f49a4c44f9c551925b8b8ed1fa43890dc01203",
  "u01-s010-v005": "257f2ff6b4c8d994ea92e7b7833a95444aa6f0236b020a3a1ce897e1e277f0c7",
  "u01-s010-v006": "5193e6833c5330aa6dcc9536d7fb3d536472d727d350321b1fa2c906caaf0cc8",
  "u01-s011-v006": "d8daf5bf88ed5dda8d150a3a8e31f20271e7d26fdc2cf97f51bf52a1efd71939",
  "u01-s012-v005": "a08032b2dbeea2dea9b2bdeb57de5271001122d5e51b90539bc5e850d0e3ad7f",
  "u01-s013-v005": "6113fcdd2982a622048982740652a7660eb5b7dc1b0920d2642919aa8d22a44e",
  "u01-s013-v006": "5830ee1efb2fa9d7ca565b72d77ac81860ed6ec2fc45645f8caa6be4910fbc60",
  "u01-s014-v005": "d446da2d01d28775d044cfe6cda7637698914e6966da32daab65ebaf515f4e54",
  "u01-s014-v006": "8a716ff294989162c622e33b401cbd6cff1e77e3d601700089d424c173857d65",
  "u01-s015-v005": "511ff497846f44a9da726d8620e64387f7fab1df00ddb10bb214b986ba88658a",
};

const mathRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repoRoot = path.dirname(mathRoot);
const qPath = "數學會考作戰室/v2/math-question-bank-v2-u01.js";
const lPath = "數學會考作戰室/v2/math-lecture-v2-u01.js";
const zh = value => [...String(value).matchAll(/[\u3400-\u9fff]/g)].map(x => x[0]).join("");
const stable = value => JSON.stringify(value);
const recordSha = record => createHash("sha256").update(JSON.stringify(record)).digest("hex");

function baseBytes(repoPath) {
  return execFileSync("git", ["show", `${BASE}:${repoPath}`], { cwd: repoRoot, maxBuffer: 64 * 1024 * 1024 });
}

function load(source, key) {
  const c = { window: {} };
  vm.runInNewContext(source.toString("utf8"), c);
  return c.window[key];
}

function current(repoPath, key) {
  return load(readFileSync(path.join(repoRoot, repoPath)), key);
}

function base(repoPath, key) {
  return load(baseBytes(repoPath), key);
}

export function assertProductionBuildImports() {
  const buildImports = [...readFileSync(path.join(repoRoot, "數學會考作戰室/tools/build-v2-u01.mjs"), "utf8").matchAll(/(?:import|from)\s+["']([^"']+)["']/g)].map(m => m[1]).sort();
  assert.deepEqual(buildImports, ["./v2-pilot-engine.mjs", "./v2-shared.mjs", "./v2-u01-coverage-builder.mjs", "./v2-u01-pilot-source.mjs", "node:fs", "node:path", "node:url"].sort());
  const builderImports = [...readFileSync(path.join(repoRoot, "數學會考作戰室/tools/v2-u01-coverage-builder.mjs"), "utf8").matchAll(/(?:import|from)\s+["']([^"']+)["']/g)].map(m => m[1]).sort();
  assert.deepEqual(builderImports, ["./v2-u01-coverage-source.mjs", "node:assert/strict"].sort());
  const buildText = readFileSync(path.join(repoRoot, "數學會考作戰室/tools/build-v2-u01.mjs"), "utf8");
  assert.equal(buildText.includes("check-u01"), false);
  assert.equal(buildText.includes("manifest"), false);
  const builderText = readFileSync(path.join(repoRoot, "數學會考作戰室/tools/v2-u01-coverage-builder.mjs"), "utf8");
  assert.equal(builderText.includes("check-u01"), false);
  assert.equal(builderText.includes("manifest"), false);
}

export function assertLegacySeparation() {
  for (const rel of U01_LEGACY_BLOCKED_PATHS) {
    assert(readFileSync(path.join(repoRoot, rel)).equals(baseBytes(rel)), `${rel} changed`);
  }
  for (const rel of U01_COVERAGE_TASK_FILES) {
    let text = readFileSync(path.join(repoRoot, rel), "utf8");
    text = text.replace(/export const U01_LEGACY_BLOCKED_PATHS[\s\S]*?];\n/, "");
    for (const legacy of U01_LEGACY_BLOCKED_PATHS) {
      const baseName = path.basename(legacy);
      assert.equal(text.includes(legacy), false, `${rel} references ${legacy}`);
      assert.equal(text.includes(baseName), false, `${rel} references ${baseName}`);
    }
    if (rel.endsWith("build-v2-u01.mjs")) {
      assert.equal(text.includes("u01-coverage-expansion-manifest"), false, "builder must not source manifest");
    }
  }
  const buildText = readFileSync(path.join(repoRoot, "數學會考作戰室/tools/build-v2-u01.mjs"), "utf8");
  assert(buildText.includes("v2-u01-pilot-source.mjs"));
  assert(buildText.includes("v2-u01-coverage-builder.mjs"));
  assert.equal(buildText.includes("v2-u01-coverage-source.mjs"), false, "builder must import coverage through builder only");
}

export function assertAcceptedOriginalRecordHashes(coverageQuestions) {
  assert.equal(Object.keys(U01_ACCEPTED_ORIGINAL_RECORD_SHA256).length, 18);
  for (const [id, expected] of Object.entries(U01_ACCEPTED_ORIGINAL_RECORD_SHA256)) {
    const q = coverageQuestions.find((x) => x.questionId === id);
    assert(q, `missing unchanged record ${id}`);
    assert.equal(recordSha(q), expected, `${id} hash`);
    assert.equal(U01_OVERRIDE_RECORD_IDS.includes(id), false, `${id} must not be override`);
  }
}

export function assertCoverageRepairLocks(coverageQuestions) {
  assert.equal(U01_OVERRIDE_RECORD_IDS.length, 11);
  for (const id of U01_OVERRIDE_RECORD_IDS) {
    assert.equal(id in U01_ACCEPTED_ORIGINAL_RECORD_SHA256, false, `${id} must not be hash-locked original`);
    const q = coverageQuestions.find((x) => x.questionId === id);
    const ref = U01_COVERAGE_QUESTIONS.find((x) => x.questionId === id);
    assert.equal(stable(q), stable(ref), `${id} override mismatch`);
  }
  const q002 = U01_COVERAGE_QUESTIONS.find((q) => q.questionId === "u01-s002-v005");
  assert(q002.explanation.includes("單位") && !q002.explanation.includes("公里"));
  const q003 = U01_COVERAGE_QUESTIONS.find((q) => q.questionId === "u01-s003-v005");
  assert(zh(q003.explanation).length >= 45);
  const q004 = U01_COVERAGE_QUESTIONS.find((q) => q.questionId === "u01-s004-v005");
  assert(zh(q004.explanation).length >= 45 && !q004.text.includes("²"));
  const q006 = U01_COVERAGE_QUESTIONS.find((q) => q.questionId === "u01-s006-v005");
  assert(zh(q006.explanation).length >= 45);
  const q006l = U01_COVERAGE_QUESTIONS.find((q) => q.questionId === "u01-s006-v006");
  assert(q006l.text.includes("偏差紀錄為 -7°C") && q006l.answerIndex === 0);
  const q011 = U01_COVERAGE_QUESTIONS.find((q) => q.questionId === "u01-s011-v005");
  assert.equal(q011.text, "計算 8-[3+2×(-4)]×(-5) 的值。");
  assert.equal(q011.answerIndex, 2);
  assert.equal(q011.choices[q011.answerIndex], "-17");
  assert(!q011.text.includes("²"));
}

export function assertChatGptDecisions(allQuestions, acceptedQuestions) {
  assert.equal(allQuestions.some((q) => q.questionId === "u01-s015-v006"), false, "u01-s015-v006 must be absent");
  const s015New = allQuestions.filter((q) => q.questionId.startsWith("u01-s015-v") && Number(q.questionId.slice(-3)) >= 5);
  assert.equal(stable(s015New.map((q) => q.questionId)), stable(["u01-s015-v005"]));
  assert.equal(s015New[0].difficulty, "advanced");
  const s015AcceptedLiteracy = acceptedQuestions.filter((q) => q.skillId === "integer-literacy-context" && q.difficulty === "literacy");
  assert(s015AcceptedLiteracy.length >= 1, "s015 literacy already covered in accepted first 60");
  const g004 = acceptedQuestions.find((q) => q.questionId === "u01-s004-v002");
  const g006 = acceptedQuestions.find((q) => q.questionId === "u01-s006-v004");
  assert(g004 && g006, "accepted generic stems must remain in first 60");
  assert.equal(stable(g004.text), stable(base(qPath, "MATH_QUESTION_BANK_V2_U01").find((q) => q.questionId === "u01-s004-v002").text));
  assert.equal(stable(g006.text), stable(base(qPath, "MATH_QUESTION_BANK_V2_U01").find((q) => q.questionId === "u01-s006-v004").text));
}

export function inventoryCoverageTaskImports() {
  return U01_COVERAGE_TASK_FILES.map((rel) => {
    const text = readFileSync(path.join(repoRoot, rel), "utf8");
    const imports = [...text.matchAll(/(?:import|from)\s+["']([^"']+)["']/g)].map((m) => m[1]);
    return { file: rel, imports };
  });
}

export function runCoverageExpansionCheck() {
  const beforeQ = base(qPath, "MATH_QUESTION_BANK_V2_U01");
  const afterQ = current(qPath, "MATH_QUESTION_BANK_V2_U01");
  const beforeL = base(lPath, "MATH_LECTURE_V2_U01");
  const afterL = current(lPath, "MATH_LECTURE_V2_U01");

  assert.equal(stable(afterQ.slice(0, 60)), stable(beforeQ), "first 60 questions changed");
  assert.equal(stable(afterQ.slice(0, 60).map(q => q.questionId)), stable(beforeQ.map(q => q.questionId)), "first 60 order");
  assert(readFileSync(path.join(repoRoot, lPath)).equals(baseBytes(lPath)), "lecture bank changed");

  for (const p of [
    "數學會考作戰室/tools/v2-u01-pilot-source.mjs",
    "數學會考作戰室/tools/v2-pilot-engine.mjs",
  ]) assert(readFileSync(path.join(repoRoot, p)).equals(baseBytes(p)), `${p} changed`);

  for (const uid of ["u02", "u03"]) {
    for (const kind of ["question-bank", "lecture"]) {
      const p = `數學會考作戰室/v2/math-${kind}-v2-${uid}.js`;
      assert(readFileSync(path.join(repoRoot, p)).equals(baseBytes(p)), `${p} changed`);
    }
    const src = `數學會考作戰室/tools/v2-${uid}-pilot-source.mjs`;
    assert(readFileSync(path.join(repoRoot, src)).equals(baseBytes(src)), `${src} changed`);
  }

  assert.equal(afterQ.length, 89);
  const appended = afterQ.slice(60);
  assert.equal(appended.length, 29);
  validateU01CoverageQuestions(appended);
  assert.equal(stable(appended), stable(U01_COVERAGE_QUESTIONS));
  assert.equal(stable(appended), stable(Object.values(U01_COVERAGE_EXPANSION_REQUIRED_QUESTIONS)));
  assert.equal(new Set(afterQ.map(q => q.questionId)).size, 89);

  for (const q of appended) {
    assert.equal(q.choices[q.answerIndex], U01_COVERAGE_QUESTIONS.find(x => x.questionId === q.questionId).choices[q.answerIndex]);
    assert.equal(new Set(q.choices).size, 4);
  }

  assert.deepEqual([0, 1, 2, 3].map(i => afterQ.filter(q => q.answerIndex === i).length), [23, 22, 22, 22]);
  assert.deepEqual([0, 1, 2, 3].map(i => appended.filter(q => q.answerIndex === i).length), [8, 7, 7, 7]);
  assert.deepEqual(Object.fromEntries(["basic", "standard", "literacy", "advanced"].map(level => [level, afterQ.filter(q => q.difficulty === level).length])), { basic: 28, standard: 30, literacy: 16, advanced: 15 });

  const skills = [...new Set(afterQ.map(q => q.skillId))];
  assert.equal(skills.length, 15);
  for (const skillId of skills) {
    const skill = afterQ.filter(q => q.skillId === skillId);
    const expected = skillId === "integer-literacy-context" ? 5 : 6;
    assert.equal(skill.length, expected, `${skillId} count`);
    assert(skill.some(q => q.difficulty === "advanced"), `${skillId} advanced`);
    assert(skill.some(q => q.difficulty === "literacy"), `${skillId} literacy`);
  }

  for (const q of appended) {
    assert(zh(q.explanation).length >= 45, `${q.questionId} explanation`);
    assert(zh(q.commonMistake).length >= 12, `${q.questionId} commonMistake`);
    assert(q.steps.length >= 3, `${q.questionId} steps`);
    const blob = JSON.stringify(q);
    assert.equal(blob.includes("幂"), false, `${q.questionId} simplified Chinese`);
    for (const phrase of U01_PROHIBITED_PROSE) assert.equal(blob.includes(phrase), false, `${q.questionId}: ${phrase}`);
  }

  assert.equal(afterL.length, 15);
  assertProductionBuildImports();
  assertLegacySeparation();
  assertAcceptedOriginalRecordHashes(U01_COVERAGE_QUESTIONS);
  assertCoverageRepairLocks(U01_COVERAGE_QUESTIONS);
  assertChatGptDecisions(afterQ, afterQ.slice(0, 60));
  return { questions: 89, advanced: 15, literacy: 16 };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const r = runCoverageExpansionCheck();
  console.log(`check-u01-coverage-expansion: OK — ${r.questions} questions, ${r.advanced} advanced, ${r.literacy} literacy`);
}
