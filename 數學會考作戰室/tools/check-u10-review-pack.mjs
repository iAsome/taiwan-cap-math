#!/usr/bin/env node
/** U10-QA0: validate review pack artifacts and generator determinism. */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./v2-quality.mjs";

const tools = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(tools);
const v2 = path.join(root, "v2");
const outDir = path.join(tools, "review-output");
const genScript = path.join(tools, "generate-u10-review-pack.mjs");

const NOTICE = [
  "TEMPORARY REVIEW ARTIFACT.",
  "NOT STUDENT-FACING.",
  "NOT A RELEASE APPROVAL.",
  "REMOVE BEFORE INTEGRATION.",
].join("\n");

const ARTIFACTS = [
  "u10-review-dossier.jsonl",
  "u10-distractor-review.md",
  "u10-qa-samples.md",
  "u10-lecture-review.jsonl",
  "u10-quality-findings.jsonl",
];

const APPROVAL_CLAIM_RE = /(?:approved for release|release approved|content approved|通過審查|准予上線)/i;

function sha256(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function loadPack() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(v2, "math-question-bank-v2-u10.js"), "utf8"), ctx, {
    filename: "math-question-bank-v2-u10.js",
  });
  vm.runInContext(fs.readFileSync(path.join(v2, "math-lecture-v2-u10.js"), "utf8"), ctx, {
    filename: "math-lecture-v2-u10.js",
  });
  return {
    questions: ctx.window.MATH_QUESTION_BANK_V2_U10,
    lectures: ctx.window.MATH_LECTURE_V2_U10,
  };
}

function readJsonl(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  if (!text.trim()) return [];
  return text.trimEnd().split("\n").map((line, i) => {
    try {
      return JSON.parse(line);
    } catch (e) {
      throw new Error(`${filePath}:${i + 1} invalid JSON: ${e.message}`);
    }
  });
}

function expectedSampleIds(questions) {
  const skills = [...new Set(questions.map((q) => q.skillId))];
  const ids = [];
  for (const skill of skills) {
    const rows = questions.filter((q) => q.skillId === skill);
    assert.equal(rows[0].questionId.endsWith("-v001"), true, `${skill} missing v001`);
    assert.equal(rows[1].questionId.endsWith("-v002"), true, `${skill} missing v002`);
    ids.push(rows[0].questionId, rows[1].questionId);
  }
  return ids;
}

function extractSectionIds(markdown) {
  const ids = [];
  for (const line of markdown.split("\n")) {
    const m = line.match(/^### (u10-s\d{3}-v\d{3})$/);
    if (m) ids.push(m[1]);
  }
  return ids;
}

function checkMarkdownNotice(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  assert.ok(text.startsWith(NOTICE), `${filePath} missing exact notice`);
  const body = text.slice(NOTICE.length);
  assert.ok(!APPROVAL_CLAIM_RE.test(body), `${filePath} contains approval claim`);
}

function checkDossier(questions, dossier) {
  assert.equal(dossier.length, 144, "dossier count");
  const keys = [
    "questionId", "skillId", "difficulty", "text", "choices", "answerIndex",
    "correctChoice", "explanation", "steps", "commonMistake", "concept",
  ];
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const d = dossier[i];
    assert.equal(d.questionId, q.questionId, `dossier order ${i}`);
    for (const k of keys) assert.ok(k in d, `${d.questionId} missing ${k}`);
    assert.equal(d.correctChoice, d.choices[d.answerIndex], d.questionId);
  }
  const ids = new Set(dossier.map((d) => d.questionId));
  assert.equal(ids.size, 144, "dossier unique questionIds");
}

function checkLectureReview(lectures, rows) {
  assert.equal(rows.length, 12, "lecture count");
  const keys = [
    "skillId", "title", "concept", "conceptZh", "formula", "stepGuide",
    "examples", "commonMistakes", "exampleWhyZh",
  ];
  for (let i = 0; i < lectures.length; i++) {
    const l = lectures[i];
    const r = rows[i];
    assert.equal(r.skillId, l.skillId, `lecture order ${i}`);
    for (const k of keys) assert.ok(k in r, `${r.skillId} missing ${k}`);
    assert.equal(r.exampleWhyZh.length, (l.examples || []).length, r.skillId);
    for (let j = 0; j < (l.examples || []).length; j++) {
      assert.equal(r.exampleWhyZh[j], countZh(l.examples[j].why || ""), `${r.skillId} example ${j}`);
    }
  }
  const ids = new Set(rows.map((r) => r.skillId));
  assert.equal(ids.size, 12, "lecture unique skillIds");
}

function checkFindings(rows) {
  for (const f of rows) {
    for (const k of ["scope", "id", "field", "rule", "evidence", "relatedIds"]) {
      assert.ok(k in f, `finding missing ${k}`);
    }
    assert.ok(Array.isArray(f.relatedIds), `${f.rule} relatedIds not array`);
  }
}

function runGenerator(out) {
  fs.mkdirSync(out, { recursive: true });
  execFileSync(process.execPath, [genScript, "--out-dir", out], {
    cwd: tools,
    stdio: "pipe",
  });
}

function hashArtifacts(dir) {
  const out = {};
  for (const name of ARTIFACTS) out[name] = sha256(path.join(dir, name));
  return out;
}

function checkDeterminism() {
  const tmp1 = path.join(tools, ".u10-review-tmp-run1");
  const tmp2 = path.join(tools, ".u10-review-tmp-run2");
  for (const d of [tmp1, tmp2]) fs.rmSync(d, { recursive: true, force: true });
  runGenerator(tmp1);
  runGenerator(tmp2);
  const h1 = hashArtifacts(tmp1);
  const h2 = hashArtifacts(tmp2);
  for (const name of ARTIFACTS) {
    assert.equal(h1[name], h2[name], `determinism failed: ${name}`);
  }
  fs.rmSync(tmp1, { recursive: true, force: true });
  fs.rmSync(tmp2, { recursive: true, force: true });
  return h1;
}

const { questions, lectures } = loadPack();
for (const name of ARTIFACTS) {
  assert.ok(fs.existsSync(path.join(outDir, name)), `missing ${name}`);
}

const dossier = readJsonl(path.join(outDir, "u10-review-dossier.jsonl"));
const lectureRows = readJsonl(path.join(outDir, "u10-lecture-review.jsonl"));
const findings = readJsonl(path.join(outDir, "u10-quality-findings.jsonl"));

checkDossier(questions, dossier);
checkLectureReview(lectures, lectureRows);
checkFindings(findings);

const distractor = fs.readFileSync(path.join(outDir, "u10-distractor-review.md"), "utf8");
const qa = fs.readFileSync(path.join(outDir, "u10-qa-samples.md"), "utf8");
checkMarkdownNotice(path.join(outDir, "u10-distractor-review.md"));
checkMarkdownNotice(path.join(outDir, "u10-qa-samples.md"));

const distractorIds = extractSectionIds(distractor);
assert.equal(new Set(distractorIds).size, 144, "distractor unique sections");
assert.equal(distractorIds.length, 144, "distractor section count");
for (let i = 0; i < questions.length; i++) {
  assert.equal(distractorIds[i], questions[i].questionId, `distractor order ${i}`);
}

const expectedSamples = expectedSampleIds(questions);
const qaIds = extractSectionIds(qa);
assert.deepEqual(qaIds, expectedSamples, "qa sample IDs");
assert.equal(new Set(qaIds).size, 24, "qa unique sections");

const hashes = checkDeterminism();
const byRule = {};
for (const f of findings) byRule[f.rule] = (byRule[f.rule] || 0) + 1;

console.log("check-u10-review-pack: OK");
console.log(`  dossier: ${dossier.length}`);
console.log(`  distractor sections: ${distractorIds.length}`);
console.log(`  qa samples: ${qaIds.length}`);
console.log(`  lectures: ${lectureRows.length}`);
console.log(`  findings: ${findings.length}`);
console.log("  findings by rule:", JSON.stringify(byRule));
console.log("  reproducibility hashes:");
for (const name of ARTIFACTS) console.log(`    ${name}: ${hashes[name]}`);
