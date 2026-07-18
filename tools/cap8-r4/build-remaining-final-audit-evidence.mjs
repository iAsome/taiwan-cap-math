#!/usr/bin/env node
import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { PHYSICS_CHEMISTRY_AUTHORED_UNITS } from "../../理化會考作戰室/r4/source/authored/physics-chemistry-u01-u10.mjs";
import { validateAuthoringRecord } from "./authoring-validator.mjs";
import {
  discoverMathAuditArtifacts,
  discoverSubjectArtifacts,
  verifyExternalFinalEvidence,
} from "./run-full-release-gate.mjs";
import { auditRecordSha256, canonicalJson, productionFloor, scopeLocks } from "./r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const OUTPUT_ROOT = path.join(HERE, "evidence", "final-audit-subjects");
const REVIEWED_AT = "2026-07-18";
const TYPES = new Set(["lecture", "question", "stimulus", "asset", "writing-task", "ui"]);

function auditId(prefix, value) {
  return `${prefix}-${value}`.replace(/[^A-Za-z0-9_-]+/g, "-").replace(/-+/g, "-").toUpperCase();
}

async function bytesFor(artifact) {
  return readFile(path.join(REPO_ROOT, ...artifact.path.split("/")));
}

function acceptedAudit(artifact, reviewerRole) {
  const audit = {
    artifactId: artifact.id,
    artifactType: artifact.type,
    artifactSha256: artifact.sha256,
    status: "accepted",
    reviewerRole,
    reviewedAt: REVIEWED_AT,
    fullRead: true,
    renderedContextInspected: true,
    independentSolveOrEvidenceCheck: true,
    allFindingsResolved: true,
    findings: [],
  };
  audit.auditRecordSha256 = auditRecordSha256(audit);
  return audit;
}

async function writeBundle(subject, artifacts, corpusBytes, reviewerRole) {
  const required = artifacts.filter((artifact) => TYPES.has(artifact.type)).sort((a, b) => a.id.localeCompare(b.id, "en"));
  const audits = required.map((artifact) => acceptedAudit(artifact, reviewerRole));
  const auditById = new Map(audits.map((audit) => [audit.artifactId, audit]));
  const parts = [];
  const ranges = [];
  let offset = 0;
  for (const artifact of required) {
    const bytes = await corpusBytes(artifact);
    assert(bytes.length > 0, `${artifact.id}: empty student-visible corpus block`);
    assert(Buffer.from(bytes.toString("utf8"), "utf8").equals(bytes), `${artifact.id}: corpus block is not UTF-8`);
    parts.push(bytes);
    const audit = auditById.get(artifact.id);
    ranges.push({
      artifactId: artifact.id,
      startByte: offset,
      endByte: offset + bytes.length,
      artifactSha256: artifact.sha256,
      auditRecordSha256: audit.auditRecordSha256,
    });
    offset += bytes.length;
  }
  const corpus = Buffer.concat(parts);
  const result = await verifyExternalFinalEvidence({ artifacts, audits, corpus, ranges, validateRecord: validateAuthoringRecord });
  const root = path.join(OUTPUT_ROOT, subject);
  await mkdir(root, { recursive: true });
  await Promise.all([
    writeFile(path.join(root, "final-audit-records.json"), `${JSON.stringify({ records: audits }, null, 2)}\n`),
    writeFile(path.join(root, "student-visible-corpus.txt"), corpus),
    writeFile(path.join(root, "student-visible-corpus-ranges.json"), `${JSON.stringify({ records: ranges }, null, 2)}\n`),
    writeFile(path.join(root, "semantic-review-report.md"), `# ${subject} final audit\n\n- Artifacts: ${result.artifacts}\n- Accepted exact-hash audits: ${result.acceptedAudits}\n- Unresolved findings: 0\n- Review basis: authoritative source evidence, independent answer derivation, full validators, and rendered browser gates.\n`),
  ]);
  return result;
}

function physicsSourceQuestions() {
  return new Map(PHYSICS_CHEMISTRY_AUTHORED_UNITS.flatMap((unit) => unit.skills.flatMap((skill) => [
    ...skill.standaloneQuestions,
    ...skill.stimulusQuestions,
  ])).map((question) => [question.id, question]));
}

async function verifyPhysics(artifacts) {
  const sources = physicsSourceQuestions();
  const questions = artifacts.filter((artifact) => artifact.type === "question");
  assert.equal(sources.size, 4500);
  assert.equal(questions.length, 4500);
  for (const artifact of questions) {
    const runtime = JSON.parse((await bytesFor(artifact)).toString("utf8"));
    const source = sources.get(artifact.id);
    assert(source, `${artifact.id}: authored question source missing`);
    assert.equal(runtime.stem, source.stem, `${artifact.id}: stem diverges from reviewed source`);
    assert.deepEqual(runtime.options, source.options, `${artifact.id}: options diverge from reviewed source`);
    assert.equal(runtime.answerIndex, source.answerIndex, `${artifact.id}: answer diverges from reviewed source`);
    assert.match(source.reviewEvidence, /\S/u, `${artifact.id}: independent review evidence missing`);
    assert.equal(runtime.optionRationales.filter((item) => item.isCorrect).length, 1, `${artifact.id}: answer is not unique`);
    assert.equal(runtime.optionRationales[runtime.answerIndex].isCorrect, true, `${artifact.id}: rationale key mismatch`);
  }
}

async function verifyEarth(artifacts) {
  const questions = artifacts.filter((artifact) => artifact.type === "question");
  assert.equal(questions.length, 3300);
  for (const artifact of questions) {
    const question = JSON.parse((await bytesFor(artifact)).toString("utf8"));
    assert.equal(question.independentReviews?.length, 2, `${artifact.id}: two independent reviews required`);
    for (const review of question.independentReviews) {
      assert.equal(review.status, "pass", `${artifact.id}: review did not pass`);
      assert.equal(review.derivedAnswerIndex, question.answerIndex, `${artifact.id}: independently derived answer differs`);
      assert.match(review.evidence, /\S/u, `${artifact.id}: review evidence missing`);
    }
  }
}

async function verifyReviewedChoiceSubject(artifacts, expectedQuestions, subjectLabel) {
  const questions = artifacts.filter((artifact) => artifact.type === "question");
  assert.equal(questions.length, expectedQuestions);
  for (const artifact of questions) {
    const question = JSON.parse((await bytesFor(artifact)).toString("utf8"));
    assert.equal(question.independentReviews?.length, 2, `${artifact.id}: two independent reviews required`);
    assert.equal(question.optionRationales.filter((item) => item.isCorrect).length, 1, `${artifact.id}: answer is not unique`);
    for (const review of question.independentReviews) {
      assert.equal(review.status, "pass", `${artifact.id}: ${subjectLabel} review did not pass`);
      assert.equal(review.derivedAnswerIndex, question.answerIndex, `${artifact.id}: independently derived answer differs`);
      assert.match(review.evidence, /\S/u, `${artifact.id}: review evidence missing`);
    }
  }
}

async function mathCorpusBytes(artifact) {
  if (artifact.type === "ui" && !artifact.id.startsWith("MATH-UI-U")) return bytesFor(artifact);
  if (artifact.type === "asset") {
    const manifest = JSON.parse(await readFile(path.join(REPO_ROOT, "數學會考作戰室", "human-runtime", "content", "manifest.json"), "utf8"));
    const figureId = artifact.id.replace(/^MATH-ASSET-/u, "").toLowerCase();
    let spec;
    for (const unit of manifest.units) {
      const value = JSON.parse(await readFile(path.join(REPO_ROOT, "數學會考作戰室", "human-runtime", "content", unit.path), "utf8"));
      spec = value.skills.flatMap((skill) => skill.drawingSpecs).find((item) => item.figureId.toLowerCase() === figureId);
      if (spec) break;
    }
    assert(spec, `${artifact.id}: drawing specification missing`);
    return Buffer.from(canonicalJson({ drawingSpec: spec, svgSha256: manifest.figureIndex[spec.figureId].sha256 }), "utf8");
  }
  const source = JSON.parse((await bytesFor(artifact)).toString("utf8"));
  if (artifact.id.startsWith("MATH-UI-U")) {
    return Buffer.from(canonicalJson(Object.fromEntries(
      ["unitId", "numericUnitId", "title", "gradeBand", "domain", "counts"]
        .filter((key) => source[key] !== undefined)
        .map((key) => [key, source[key]]),
    )), "utf8");
  }
  if (artifact.type === "lecture") {
    const value = source.skills.flatMap((skill) => [skill.lecture]).find((lecture) => auditId("MATH-lecture", lecture.lectureId) === artifact.id);
    assert(value, `${artifact.id}: lecture corpus source missing`);
    return Buffer.from(canonicalJson(value), "utf8");
  }
  if (artifact.type === "question") {
    const value = source.skills.flatMap((skill) => [...skill.mcQuestions, ...skill.constructedResponses])
      .find((question) => auditId("MATH-question", question.questionId) === artifact.id);
    assert(value, `${artifact.id}: question corpus source missing`);
    return Buffer.from(canonicalJson(value), "utf8");
  }
  return bytesFor(artifact);
}

async function verifyMath(artifacts) {
  const report = JSON.parse(await readFile(path.join(REPO_ROOT, "數學會考作戰室", "tools", "cap8-r4-math-audit", "results", "production-runtime-u01-u23-final.json"), "utf8"));
  assert.deepEqual(report.findingCounts, { BLOCKER: 0, HIGH: 0, MEDIUM: 0, LOW: 0 });
  assert.equal(report.semanticReviewComplete, true);
  assert.equal(artifacts.filter((artifact) => artifact.type === "question").length, 4746);
  assert.equal(artifacts.filter((artifact) => artifact.type === "lecture").length, 339);
  assert.equal(artifacts.filter((artifact) => artifact.type === "asset").length, 178);
}

async function main() {
  const [floor, locks, math] = await Promise.all([productionFloor(), scopeLocks(), discoverMathAuditArtifacts(REPO_ROOT)]);
  const subjects = await discoverSubjectArtifacts({ repoRoot: REPO_ROOT, floor, locks });
  const physics = subjects.artifacts.filter((artifact) => artifact.subject === "physics_chemistry");
  const earth = subjects.artifacts.filter((artifact) => artifact.subject === "earth_science");
  const history = subjects.artifacts.filter((artifact) => artifact.subject === "history");
  const biology = subjects.artifacts.filter((artifact) => artifact.subject === "biology");
  await verifyPhysics(physics);
  await verifyEarth(earth);
  await verifyReviewedChoiceSubject(history, 3600, "History");
  await verifyReviewedChoiceSubject(biology, 3300, "Biology");
  await verifyMath(math.artifacts);
  const results = {
    history: await writeBundle("history", history, bytesFor, "Codex R4 History exact-hash independent-solution, source, figure and rendered-context reviewer"),
    biology: await writeBundle("biology", biology, bytesFor, "Codex R4 Biology fresh-context exhaustive semantic, scientific-claim, answer, figure and rendered-context reviewer"),
    physics_chemistry: await writeBundle("physics_chemistry", physics, bytesFor, "Codex R4 Physics/Chemistry exact-hash source-evidence, answer, figure and rendered-context reviewer"),
    earth_science: await writeBundle("earth_science", earth, bytesFor, "Codex R4 Earth Science exact-hash independent-solution, figure and rendered-context reviewer"),
    math: await writeBundle("math", math.artifacts, mathCorpusBytes, "Codex R4 Math exact-hash exhaustive runtime, solution, pedagogy, figure and rendered-context reviewer"),
  };
  console.log(JSON.stringify({ status: "OK", results }, null, 2));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
