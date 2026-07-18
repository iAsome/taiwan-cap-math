import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { verifyExternalFinalEvidence } from "../run-full-release-gate.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");

function records(value, label) {
  const result = Array.isArray(value) ? value : value?.records;
  assert(Array.isArray(result), `${label} must be an array or contain a records array`);
  return result;
}

export async function verifyEarthScienceFinalAuditEvidence({ repoRoot = REPO_ROOT } = {}) {
  const subjectRoot = path.join(repoRoot, "地科會考作戰室", "r4");
  const evidenceRoot = path.join(repoRoot, "tools", "cap8-r4", "evidence", "final-audit-subjects", "earth_science");
  const [manifest, auditsValue, corpus, rangesValue, report] = await Promise.all([
    readFile(path.join(subjectRoot, "content-manifest-v4.json"), "utf8").then(JSON.parse),
    readFile(path.join(evidenceRoot, "final-audit-records.json"), "utf8").then(JSON.parse),
    readFile(path.join(evidenceRoot, "student-visible-corpus.txt")),
    readFile(path.join(evidenceRoot, "student-visible-corpus-ranges.json"), "utf8").then(JSON.parse),
    readFile(path.join(evidenceRoot, "semantic-review-report.md"), "utf8"),
  ]);
  assert(report.trim(), "Earth Science semantic review report is empty");
  const result = await verifyExternalFinalEvidence({
    artifacts: manifest.artifacts,
    audits: records(auditsValue, "Earth Science audits"),
    corpus,
    ranges: records(rangesValue, "Earth Science corpus ranges"),
  });
  assert.equal(result.artifacts, 3758, "Earth Science external artifact count");
  return result;
}

async function main() {
  const result = await verifyEarthScienceFinalAuditEvidence();
  console.log(`verify-earth-science-final-audit: OK - ${result.acceptedAudits} externally reviewed artifacts, ${result.corpusRanges} corpus ranges`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
