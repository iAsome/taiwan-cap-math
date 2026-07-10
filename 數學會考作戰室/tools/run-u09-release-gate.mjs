#!/usr/bin/env node
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const MATH_ROOT = path.resolve(HERE, "..");
const REPO_ROOT = path.resolve(MATH_ROOT, "..");

const FILES = Object.freeze({
  questionBank: "v2/math-question-bank-v2-u09.js",
  lecture: "v2/math-lecture-v2-u09.js",
  dossier: "tools/review-output/u09-review-dossier.jsonl",
  distractor: "tools/review-output/u09-distractor-review.md",
  samples: "tools/review-output/u09-qa4-samples.md"
});

const EXPECTED_SHA256 = Object.freeze({
  questionBank:
    "744e3df1ccead5679c52b861c89c8fa8b98852566b0f43a4a401794c19a03786",
  lecture:
    "4a1ef8c03f8437266f80a3e80c9250abd25bdc47d2d97acc81491460517e3d40",
  dossier:
    "6df0ab8d96f79b6e2f171e5d39c9bf7a331e89aa4297708d3e866eeb55485267",
  distractor:
    "cf632dd398d45c94afd8c1b1b928edfe891e277e42c21b141b50f3fb21cb6b72",
  samples:
    "0826c1eef1312e822c1d9bbd3f9704506fa77cf5accbfad51db66db62893b05b"
});

const PIPELINE = Object.freeze([
  "tools/gen-u09-r7-full.mjs",
  "tools/fix-u09-r7.mjs",
  "tools/build-u09-pack.mjs",
  "tools/test-u09-field-diff-core.mjs",
  "tools/verify-v2-u09-pack.mjs",
  "tools/check-u09-qa5a-field-diff.mjs",
  "tools/check-u09-qa5b1-field-diff.mjs",
  "tools/check-u09-qa5b2a-field-diff.mjs",
  "tools/check-u09-qa5b2b-field-diff.mjs",
  "tools/check-u09-qa5c-lecture-diff.mjs",
  "tools/verify-chapter-quizzes.js",
  "tools/generate-u09-review-dossier.mjs",
  "tools/generate-u09-distractor-review.mjs",
  "tools/generate-u09-qa4-samples.mjs"
]);

function runNode(relativePath) {
  console.log(`\n> node ${relativePath}`);
  execFileSync(process.execPath, [relativePath], {
    cwd: MATH_ROOT,
    stdio: "inherit",
    env: process.env
  });
}

function runPipeline(label) {
  console.log(`\n========== ${label} ==========`);
  for (const script of PIPELINE) {
    runNode(script);
  }
}

function sha256(relativePath) {
  const bytes = readFileSync(path.join(MATH_ROOT, relativePath));
  return createHash("sha256").update(bytes).digest("hex");
}

function hashAll() {
  return Object.fromEntries(
    Object.entries(FILES).map(([key, relativePath]) => [
      key,
      sha256(relativePath)
    ])
  );
}

function loadQuestionBank() {
  const code = readFileSync(
    path.join(MATH_ROOT, FILES.questionBank),
    "utf8"
  );
  const context = { window: {} };
  vm.runInNewContext(code, context);

  const bank = context.window.MATH_QUESTION_BANK_V2_U09;
  assert.ok(Array.isArray(bank), "U09 question bank did not load");
  return bank;
}

function assertReviewNotice(text, label) {
  assert.ok(
    text.includes("TEMPORARY REVIEW ARTIFACT."),
    `${label}: temporary notice missing`
  );
  assert.ok(
    text.includes("NOT STUDENT-FACING."),
    `${label}: student-facing warning missing`
  );
  assert.ok(
    text.includes("NOT A RELEASE APPROVAL."),
    `${label}: release warning missing`
  );
  assert.ok(
    text.includes("REMOVE BEFORE INTEGRATION."),
    `${label}: integration warning missing`
  );
}

function extractMarkdownQuestionIds(text) {
  return [
    ...text.matchAll(/^###\s+(u09-s\d{3}-v\d{3})\s*$/gm)
  ].map(match => match[1]);
}

function validateReviewArtifacts() {
  const bank = loadQuestionBank();
  assert.equal(bank.length, 144, "question bank must contain 144 records");

  const bankIds = bank.map(question => question.questionId);
  assert.equal(
    new Set(bankIds).size,
    144,
    "question bank IDs must be unique"
  );

  const dossierText = readFileSync(
    path.join(MATH_ROOT, FILES.dossier),
    "utf8"
  ).trim();

  const dossierRecords = dossierText
    ? dossierText.split(/\r?\n/).map(line => JSON.parse(line))
    : [];

  assert.equal(
    dossierRecords.length,
    144,
    "dossier must contain 144 records"
  );

  const dossierIds = dossierRecords.map(record => record.questionId);
  assert.equal(
    new Set(dossierIds).size,
    144,
    "dossier IDs must be unique"
  );

  assert.deepEqual(
    [...dossierIds].sort(),
    [...bankIds].sort(),
    "dossier IDs must exactly match the question bank"
  );

  const distractorText = readFileSync(
    path.join(MATH_ROOT, FILES.distractor),
    "utf8"
  );
  const sampleText = readFileSync(
    path.join(MATH_ROOT, FILES.samples),
    "utf8"
  );

  assertReviewNotice(distractorText, "distractor review");
  assertReviewNotice(sampleText, "QA4 samples");

  const distractorIds = extractMarkdownQuestionIds(distractorText);
  assert.equal(
    distractorIds.length,
    144,
    "distractor review must contain 144 question sections"
  );
  assert.equal(
    new Set(distractorIds).size,
    144,
    "distractor review IDs must be unique"
  );
  assert.deepEqual(
    [...distractorIds].sort(),
    [...bankIds].sort(),
    "distractor review IDs must exactly match the question bank"
  );

  const sampleIds = extractMarkdownQuestionIds(sampleText);
  assert.equal(
    sampleIds.length,
    24,
    "QA4 samples must contain 24 question sections"
  );
  assert.equal(
    new Set(sampleIds).size,
    24,
    "QA4 sample IDs must be unique"
  );

  const bankIdSet = new Set(bankIds);
  for (const id of sampleIds) {
    assert.ok(bankIdSet.has(id), `unknown QA4 sample ID: ${id}`);
  }
}

function assertExpectedHashes(actual, label) {
  for (const key of Object.keys(FILES)) {
    assert.equal(
      actual[key],
      EXPECTED_SHA256[key],
      `${label}: ${key} SHA-256 drift`
    );
  }
}

function assertNoTrackedDiff() {
  try {
    execFileSync("git", ["diff", "--exit-code", "--"], {
      cwd: REPO_ROOT,
      stdio: "inherit",
      env: process.env
    });
  } catch {
    assert.fail("official pipeline changed tracked repository content");
  }
}

runPipeline("U09 RELEASE GATE RUN 1");
validateReviewArtifacts();
const run1 = hashAll();
assertExpectedHashes(run1, "run 1");

runPipeline("U09 RELEASE GATE RUN 2");
validateReviewArtifacts();
const run2 = hashAll();
assertExpectedHashes(run2, "run 2");

assert.deepEqual(
  run2,
  run1,
  "release outputs are not reproducible across two runs"
);

assertNoTrackedDiff();

console.log("\nu09-release-gate: OK");
for (const [key, hash] of Object.entries(run2)) {
  console.log(`  ${key}: ${hash}`);
}
console.log("  two complete runs: byte-identical");
console.log("  committed outputs: match accepted SHA-256 locks");
console.log("  tracked repository diff: clean");
