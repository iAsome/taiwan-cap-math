#!/usr/bin/env node
/** Validate U08 review pack artifacts. Node built-ins only. */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const TOOLS = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.dirname(TOOLS);
const V2 = path.join(ROOT, "v2");
const OUT = path.join(TOOLS, "review-output");
const GEN = path.join(TOOLS, "generate-u08-review-pack.mjs");

const NOTICE = [
  "TEMPORARY REVIEW ARTIFACT.",
  "NOT STUDENT-FACING.",
  "NOT A RELEASE APPROVAL.",
  "REMOVE BEFORE INTEGRATION.",
].join("\n");

const APPROVAL_RE = /\b(APPROVED|PASS(?:ED)?|SHIP(?:PED)?|LGTM|ACCEPT(?:ED)?)\b/i;

const ARTIFACTS = [
  "u08-review-dossier.jsonl",
  "u08-distractor-review.md",
  "u08-qa-samples.md",
  "u08-lecture-review.jsonl",
  "u08-quality-findings.jsonl",
];

const QA_SAMPLE_IDS = [];
for (let s = 1; s <= 12; s++) {
  const sid = String(s).padStart(3, "0");
  QA_SAMPLE_IDS.push(`u08-s${sid}-v001`, `u08-s${sid}-v002`);
}

const DOSSIER_KEYS = new Set([
  "questionId", "skillId", "difficulty", "text", "choices", "answerIndex",
  "correctChoice", "explanation", "steps", "commonMistake", "concept",
]);

const LECTURE_KEYS = new Set([
  "skillId", "title", "concept", "conceptZh", "formula", "stepGuide",
  "examples", "commonMistakes", "exampleWhyZh",
]);

const FINDING_KEYS = new Set([
  "scope", "id", "field", "rule", "evidence", "relatedIds",
]);

const TAIWAN_BANNED = ["公釐", "公厘", "厘米", "千米", "操场", "给", "后", "组", "场"];

const EXPECTED_FINDING_COUNTS = {
  "Q01 explanation-zh-under-30": 0,
  "Q02 commonMistake-zh-under-12": 0,
  "Q03 fewer-than-3-steps": 0,
  "Q04 duplicate-sentence-inside-explanation": 0,
  "Q05 exact-explanation-shared-across-questions": 0,
  "Q06 normalized-text-structure-group-size-at-least-3": 0,
  "Q07 exact-step-shared-by-at-least-3-questionIds": 3,
  "Q08 suspicious-machine-residue": 0,
  "Q09 simplified-character": 2,
  "L01 concept-zh-under-80": 0,
  "L02 fewer-than-5-stepGuide": 0,
  "L03 fewer-than-2-examples": 0,
  "L04 fewer-than-4-commonMistakes": 0,
  "L05 example-why-zh-under-40": 0,
  "L06 lecture-suspicious-machine-residue": 0,
  "L07 lecture-simplified-character": 0,
};

const STUDENT_FACING_ARTIFACTS = [
  "u08-review-dossier.jsonl",
  "u08-distractor-review.md",
  "u08-qa-samples.md",
  "u08-quality-findings.jsonl",
];

function sha256File(filePath) {
  const h = crypto.createHash("sha256");
  h.update(fs.readFileSync(filePath));
  return h.digest("hex");
}

function loadU08() {
  const ctx = vm.createContext({ window: {} });
  for (const f of ["math-question-bank-v2-u08.js", "math-lecture-v2-u08.js"]) {
    vm.runInContext(fs.readFileSync(path.join(V2, f), "utf8"), ctx, { filename: f });
  }
  return {
    questions: ctx.window.MATH_QUESTION_BANK_V2_U08,
    lectures: ctx.window.MATH_LECTURE_V2_U08,
  };
}

function readJsonl(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  if (!raw.trim()) return [];
  return raw.trimEnd().split("\n").map((line, i) => {
    try {
      return JSON.parse(line);
    } catch (e) {
      throw new Error(`${path.basename(filePath)} line ${i + 1}: ${e.message}`);
    }
  });
}

function extractSections(md, prefix) {
  const re = new RegExp(`^### (${prefix}[^\\n]+)$`, "gm");
  const ids = [];
  let m;
  while ((m = re.exec(md)) !== null) ids.push(m[1]);
  return ids;
}

function assertNoApproval(text, label) {
  assert.ok(!APPROVAL_RE.test(text), `${label} contains approval language`);
  const body = text.startsWith(NOTICE) ? text.slice(NOTICE.length) : text;
  assert.ok(!/\b(APPROVED FOR RELEASE|RELEASE APPROVED|APPROVED)\b/i.test(body),
    `${label} contains positive approval claim`);
}

function hasTaiwanBanned(text) {
  for (const p of TAIWAN_BANNED) if (text.includes(p)) return p;
  return null;
}

function scanStudentFacingArtifacts() {
  for (const f of STUDENT_FACING_ARTIFACTS) {
    const raw = fs.readFileSync(path.join(OUT, f), "utf8");
    const hit = hasTaiwanBanned(raw);
    assert.ok(!hit, `${f} Taiwan banned: ${hit}`);
  }
}

function validateFindingCounts(findings) {
  const counts = new Map();
  for (const row of findings) {
    counts.set(row.rule, (counts.get(row.rule) || 0) + 1);
  }

  for (const [rule, expected] of Object.entries(EXPECTED_FINDING_COUNTS)) {
    assert.equal(counts.get(rule) || 0, expected, `finding count ${rule}`);
  }

  const q09 = findings.filter((r) => r.rule === "Q09 simplified-character");
  assert.equal(q09.length, 2, "Q09 finding count");
  const q09Ids = q09.map((r) => r.id).sort();
  assert.deepEqual(q09Ids, ["u08-s010-v007", "u08-s012-v005"], "Q09 question ids");
  for (const row of q09) {
    assert.equal(row.evidence, "里", `Q09 evidence for ${row.id}`);
    const q = loadU08().questions.find((item) => item.questionId === row.id);
    assert.ok(q, `${row.id} missing from bank`);
    const blob = [q.text, q.explanation, q.commonMistake, ...q.steps, ...q.choices, q.concept].join("\n");
    assert.ok(blob.includes("公里"), `${row.id} must contain 公里`);
  }

  const q10 = findings.filter((r) => r.rule === "Q10 explanation-new-number-token");
  console.log(`Q10 informational: ${q10.length} findings`);
}

function validatePack({ questions, lectures }) {
  for (const f of ARTIFACTS) {
    assert.ok(fs.existsSync(path.join(OUT, f)), `missing ${f}`);
  }

  const dossier = readJsonl(path.join(OUT, "u08-review-dossier.jsonl"));
  assert.equal(dossier.length, 144, "dossier count");
  const bankIds = questions.map((q) => q.questionId);
  const dossierIds = dossier.map((r) => r.questionId);
  assert.equal(JSON.stringify(dossierIds), JSON.stringify(bankIds), "dossier order");
  const dossierIdSet = new Set();
  for (const row of dossier) {
    assert.equal(Object.keys(row).length, DOSSIER_KEYS.size, `${row.questionId} keys`);
    for (const k of DOSSIER_KEYS) assert.ok(k in row, `${row.questionId} missing ${k}`);
    assert.ok(!dossierIdSet.has(row.questionId), `duplicate dossier ${row.questionId}`);
    dossierIdSet.add(row.questionId);
    assert.equal(row.correctChoice, row.choices[row.answerIndex], row.questionId);
  }

  const distractor = fs.readFileSync(path.join(OUT, "u08-distractor-review.md"), "utf8");
  assert.ok(distractor.startsWith(NOTICE), "distractor notice");
  assertNoApproval(distractor, "distractor");
  const distractorIds = extractSections(distractor, "u08-");
  assert.equal(new Set(distractorIds).size, 144, "distractor unique sections");
  assert.equal(distractorIds.length, 144, "distractor section count");

  const qa = fs.readFileSync(path.join(OUT, "u08-qa-samples.md"), "utf8");
  assert.ok(qa.startsWith(NOTICE), "qa notice");
  assertNoApproval(qa, "qa samples");
  const qaIds = extractSections(qa, "u08-");
  assert.equal(JSON.stringify(qaIds), JSON.stringify(QA_SAMPLE_IDS), "qa sample ids");

  const lectureRows = readJsonl(path.join(OUT, "u08-lecture-review.jsonl"));
  assert.equal(lectureRows.length, 12, "lecture count");
  const lectureSkillIds = lectures.map((l) => l.skillId);
  assert.equal(JSON.stringify(lectureRows.map((r) => r.skillId)), JSON.stringify(lectureSkillIds), "lecture order");
  const lectureSet = new Set();
  for (const row of lectureRows) {
    assert.equal(Object.keys(row).length, LECTURE_KEYS.size, `${row.skillId} keys`);
    for (const k of LECTURE_KEYS) assert.ok(k in row, `${row.skillId} missing ${k}`);
    assert.ok(!lectureSet.has(row.skillId), `duplicate lecture ${row.skillId}`);
    lectureSet.add(row.skillId);
    assert.equal(row.exampleWhyZh.length, row.examples.length, `${row.skillId} exampleWhyZh`);
  }

  const findings = readJsonl(path.join(OUT, "u08-quality-findings.jsonl"));
  for (const row of findings) {
    assert.equal(Object.keys(row).length, FINDING_KEYS.size, "finding keys");
    for (const k of FINDING_KEYS) assert.ok(k in row, `finding missing ${k}`);
    assert.ok(Array.isArray(row.relatedIds), "relatedIds array");
  }
  validateFindingCounts(findings);
  scanStudentFacingArtifacts();
}

function runGenerator() {
  execFileSync(process.execPath, [GEN], { stdio: "pipe" });
}

function hashArtifacts() {
  return Object.fromEntries(ARTIFACTS.map((f) => [f, sha256File(path.join(OUT, f))]));
}

function main() {
  const { questions, lectures } = loadU08();
  validatePack({ questions, lectures });

  const run1 = hashArtifacts();
  runGenerator();
  const run2 = hashArtifacts();
  runGenerator();
  const run3 = hashArtifacts();

  for (const f of ARTIFACTS) {
    assert.equal(run1[f], run2[f], `${f} run1 vs run2`);
    assert.equal(run2[f], run3[f], `${f} run2 vs run3`);
  }

  console.log("check-u08-review-pack: OK");
  console.log("determinism:");
  for (const f of ARTIFACTS) console.log(`${f}\trun1=${run1[f]}\trun2=${run2[f]}`);
}

main();
