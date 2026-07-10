#!/usr/bin/env node
/** U10-QA0: validate review pack artifacts and generator determinism. */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
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

const BASELINE_ARTIFACT_HASHES = {
  "u10-review-dossier.jsonl": "6ef9fc14cf53c95ffaa05e4d540e79546a71b11f14f200e832ded24f12751c72",
  "u10-distractor-review.md": "1b4972345e0ae2b6327fa27065ac73d8dd64a7eedb613880549e0cca2ba60268",
  "u10-qa-samples.md": "5f7b19320d199134e869af0a70f9cd5d15e2efb2cf9a1b6f8f40bf12885a78c3",
};

const BASELINE_RULE_COUNTS = {
  "L05 example-why-zh-under-40": 0,
  "L07 lecture-simplified-character": 0,
  "Q06 normalized-text-structure-group-size-at-least-3": 0,
  "Q07 exact-step-shared-by-at-least-3-questionIds": 0,
  "Q08 suspicious-machine-residue": 0,
};

const PASS_FAIL_RULES = new Set([
  "L05 example-why-zh-under-40",
  "L07 lecture-simplified-character",
  "Q06 normalized-text-structure-group-size-at-least-3",
  "Q07 exact-step-shared-by-at-least-3-questionIds",
  "Q08 suspicious-machine-residue",
]);

const DOSSIER_KEYS = [
  "questionId", "skillId", "difficulty", "text", "choices", "answerIndex",
  "correctChoice", "explanation", "steps", "commonMistake", "concept",
];

const LECTURE_KEYS = [
  "skillId", "title", "concept", "conceptZh", "formula", "stepGuide",
  "examples", "commonMistakes", "exampleWhyZh",
];

const FINDING_KEYS = ["scope", "id", "field", "rule", "evidence", "relatedIds"];

const L05_FIELD_RE = /^examples\[(0|1)\]\.why$/;
const L05_EVIDENCE_RE = /^\d+$/;

const APPROVAL_CLAIM_RE = /(?:approved for release|release approved|content approved|通過審查|准予上線)/i;

function sha256(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function exactKeys(obj, expected) {
  assert.deepEqual([...Object.keys(obj)].sort(), [...expected].sort());
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
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const d = dossier[i];
    exactKeys(d, DOSSIER_KEYS);
    assert.equal(d.questionId, q.questionId, `dossier order ${i}`);
    assert.equal(d.correctChoice, d.choices[d.answerIndex], d.questionId);
  }
  assert.equal(new Set(dossier.map((d) => d.questionId)).size, 144, "dossier unique questionIds");
}

function checkLectureReview(lectures, rows) {
  assert.equal(rows.length, 12, "lecture count");
  for (let i = 0; i < lectures.length; i++) {
    const l = lectures[i];
    const r = rows[i];
    exactKeys(r, LECTURE_KEYS);
    assert.equal(r.skillId, l.skillId, `lecture order ${i}`);
    assert.ok(typeof r.title === "string" && r.title.length > 0, `${r.skillId} empty title`);
    assert.ok(Number.isInteger(r.conceptZh) && r.conceptZh >= 0, `${r.skillId} conceptZh not integer`);
    assert.equal(r.conceptZh, countZh(l.concept ?? ""), `${r.skillId} conceptZh mismatch`);
    assert.equal(r.exampleWhyZh.length, (l.examples || []).length, r.skillId);
    for (let j = 0; j < (l.examples || []).length; j++) {
      assert.equal(r.exampleWhyZh[j], countZh(l.examples[j].why || ""), `${r.skillId} example ${j}`);
      assert.ok(r.exampleWhyZh[j] >= 40, `${r.skillId} example ${j} why under 40`);
    }
  }
  assert.equal(new Set(rows.map((r) => r.skillId)).size, 12, "lecture unique skillIds");
}

function checkFindings(rows, lectures) {
  for (const f of rows) {
    exactKeys(f, FINDING_KEYS);
    assert.ok(Array.isArray(f.relatedIds), `${f.rule} relatedIds not array`);
    if (f.rule === "L05 example-why-zh-under-40") {
      assert.ok(L05_FIELD_RE.test(f.field), `L05 bad field: ${f.field}`);
      assert.ok(L05_EVIDENCE_RE.test(f.evidence), `L05 bad evidence: ${f.evidence}`);
    }
  }

  const l05 = rows.filter((f) => f.rule === "L05 example-why-zh-under-40");
  assert.equal(l05.length, 0, "L05 baseline count");

  const l07 = rows.filter((f) => f.rule === "L07 lecture-simplified-character");
  assert.equal(l07.length, 0, "L07 baseline count");

  const q08 = rows.filter((f) => f.rule === "Q08 suspicious-machine-residue");
  assert.equal(q08.length, 0, "Q08 baseline count");

  const byRule = {};
  for (const f of rows) byRule[f.rule] = (byRule[f.rule] || 0) + 1;
  for (const [rule, n] of Object.entries(BASELINE_RULE_COUNTS)) {
    assert.equal(byRule[rule] ?? 0, n, `rule count ${rule}`);
  }
  for (const rule of Object.keys(byRule)) {
    assert.ok(
      PASS_FAIL_RULES.has(rule) || rule === "Q10 explanation-new-number-token",
      `unexpected finding rule: ${rule}`,
    );
  }

  void lectures;
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

for (const [name, hash] of Object.entries(BASELINE_ARTIFACT_HASHES)) {
  assert.equal(sha256(path.join(outDir, name)), hash, `${name} baseline hash drift`);
}

const dossier = readJsonl(path.join(outDir, "u10-review-dossier.jsonl"));
const lectureRows = readJsonl(path.join(outDir, "u10-lecture-review.jsonl"));
const findings = readJsonl(path.join(outDir, "u10-quality-findings.jsonl"));

checkDossier(questions, dossier);
checkLectureReview(lectures, lectureRows);
checkFindings(findings, lectures);

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
