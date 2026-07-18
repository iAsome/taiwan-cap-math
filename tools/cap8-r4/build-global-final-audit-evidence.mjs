#!/usr/bin/env node
import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  discoverMathAuditArtifacts,
  discoverSubjectArtifacts,
  verifyExternalFinalEvidence,
} from "./run-full-release-gate.mjs";
import { productionFloor, scopeLocks, SUBJECTS } from "./r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const SUBJECT_ORDER = Object.freeze([...SUBJECTS, "math"]);

function records(value, label) {
  const result = Array.isArray(value) ? value : value?.records;
  assert(Array.isArray(result), `${label} must be an array or contain a records array`);
  return result;
}

async function readSubjectEvidence(repoRoot, subject) {
  const root = path.join(repoRoot, "tools", "cap8-r4", "evidence", "final-audit-subjects", subject);
  const [auditsValue, corpus, rangesValue] = await Promise.all([
    readFile(path.join(root, "final-audit-records.json"), "utf8").then(JSON.parse),
    readFile(path.join(root, "student-visible-corpus.txt")),
    readFile(path.join(root, "student-visible-corpus-ranges.json"), "utf8").then(JSON.parse),
  ]);
  return {
    subject,
    audits: records(auditsValue, `${subject} audits`),
    corpus,
    ranges: records(rangesValue, `${subject} ranges`),
  };
}

export function mergeEvidenceBundles(bundles) {
  const audits = [];
  const corpusParts = [];
  const ranges = [];
  let offset = 0;
  for (const bundle of bundles) {
    audits.push(...bundle.audits);
    corpusParts.push(bundle.corpus);
    for (const range of [...bundle.ranges].sort((a, b) => a.startByte - b.startByte)) {
      ranges.push({ ...range, startByte: range.startByte + offset, endByte: range.endByte + offset });
    }
    offset += bundle.corpus.length;
  }
  return { audits, corpus: Buffer.concat(corpusParts), ranges };
}

export async function buildGlobalFinalAuditEvidence(repoRoot = REPO_ROOT) {
  const [floor, locks, math] = await Promise.all([
    productionFloor(),
    scopeLocks(),
    discoverMathAuditArtifacts(repoRoot),
  ]);
  const subjects = await discoverSubjectArtifacts({ repoRoot, floor, locks, expectedSubjects: SUBJECTS });
  const artifactsBySubject = new Map(SUBJECTS.map((subject) => [
    subject,
    subjects.artifacts.filter((artifact) => artifact.subject === subject),
  ]));
  artifactsBySubject.set("math", math.artifacts);

  const bundles = [];
  const subjectResults = [];
  for (const subject of SUBJECT_ORDER) {
    const bundle = await readSubjectEvidence(repoRoot, subject);
    const result = await verifyExternalFinalEvidence({ artifacts: artifactsBySubject.get(subject), ...bundle });
    bundles.push(bundle);
    subjectResults.push({ subject, ...result });
  }

  const merged = mergeEvidenceBundles(bundles);
  const globalResult = await verifyExternalFinalEvidence({
    artifacts: [...subjects.artifacts, ...math.artifacts],
    ...merged,
  });
  const outputRoot = path.join(repoRoot, "tools", "cap8-r4", "evidence", "final-audit");
  await mkdir(outputRoot, { recursive: true });
  await Promise.all([
    writeFile(path.join(outputRoot, "final-audit-records.json"), `${JSON.stringify({ records: merged.audits }, null, 2)}\n`),
    writeFile(path.join(outputRoot, "student-visible-corpus.txt"), merged.corpus),
    writeFile(path.join(outputRoot, "student-visible-corpus-ranges.json"), `${JSON.stringify({ records: merged.ranges }, null, 2)}\n`),
  ]);
  return { subjects: subjectResults, global: globalResult };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await buildGlobalFinalAuditEvidence();
  console.log(JSON.stringify({ status: "OK", ...result }, null, 2));
}
