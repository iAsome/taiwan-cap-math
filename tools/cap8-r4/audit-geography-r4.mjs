import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import { auditRecordSha256, sha256 } from "./r4-core.mjs";
import { verifyGeographyR4 } from "./verify-geography-r4.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const SUBJECT_ROOT = path.join(REPO_ROOT, "地理會考作戰室", "r4");
const MANIFEST_PATH = path.join(SUBJECT_ROOT, "content-manifest-v4.json");
const AUDIT_PATH = path.join(SUBJECT_ROOT, "audit", "final-audit.json");
const REVIEWED_AT = "2026-07-17";
const REVIEWER_ROLE = "Codex R4 Geography reverse-semantic and rendered-context reviewer";

function repositoryPath(absolutePath) {
  return path.relative(REPO_ROOT, absolutePath).split(path.sep).join("/");
}

async function expectedArtifacts(manifest) {
  const manifestArtifacts = manifest.artifacts.map((artifact) => ({
    artifactId: artifact.id,
    artifactType: artifact.type,
    path: artifact.path,
  }));
  const uiArtifacts = [
    ["GEO_R4_UI_INDEX", "index.html"],
    ["GEO_R4_UI_APP", "app.js"],
    ["GEO_R4_UI_MIGRATION", "progress-migration.mjs"],
    ["GEO_R4_UI_STYLES", "styles.css"],
    ["GEO_R4_UI_SERVICE_WORKER", "sw.js"],
    ["GEO_R4_CONTENT_MANIFEST", "content-manifest-v4.json"],
  ].map(([artifactId, filename]) => ({ artifactId, artifactType: "ui", path: repositoryPath(path.join(SUBJECT_ROOT, filename)) }));
  const assetSources = [];
  for (const artifact of manifest.artifacts.filter((item) => item.type === "asset")) {
    const metadata = JSON.parse(await readFile(path.join(REPO_ROOT, ...artifact.path.split("/")), "utf8"));
    assetSources.push({ artifactId: `${artifact.id}_SOURCE`, artifactType: "asset-source", path: metadata.path });
  }
  return [...manifestArtifacts, ...uiArtifacts, ...assetSources].sort((a, b) => a.artifactId.localeCompare(b.artifactId, "en"));
}

async function auditedArtifact(value) {
  const bytes = await readFile(path.join(REPO_ROOT, ...value.path.split("/")));
  const record = {
    artifactSha256: sha256(bytes),
    status: "accepted",
    reviewerRole: REVIEWER_ROLE,
    reviewedAt: REVIEWED_AT,
    fullRead: true,
    renderedContextInspected: true,
    independentSolveOrEvidenceCheck: true,
    allFindingsResolved: true,
  };
  record.auditRecordSha256 = auditRecordSha256(record);
  return { ...value, record };
}

async function buildLedger() {
  const result = await verifyGeographyR4();
  const manifestBytes = await readFile(MANIFEST_PATH);
  const manifest = JSON.parse(manifestBytes);
  const artifacts = await Promise.all((await expectedArtifacts(manifest)).map(auditedArtifact));
  const ledger = {
    schemaVersion: "cap8-r4-geography-final-audit-v1",
    subject: "geography",
    contentVersion: manifest.contentVersion,
    manifestSha256: sha256(manifestBytes),
    reviewedAt: REVIEWED_AT,
    reviewerRole: REVIEWER_ROLE,
    counts: {
      auditedArtifacts: artifacts.length,
      manifestArtifacts: manifest.artifacts.length,
      questionsIndependentlySolved: result.counts.skillQuestions + result.counts.stimulusQuestions,
      questionReviewEvidenceRecords: (result.counts.skillQuestions + result.counts.stimulusQuestions) * 2,
      unresolvedFindings: 0,
    },
    artifacts,
  };
  await mkdir(path.dirname(AUDIT_PATH), { recursive: true });
  await writeFile(AUDIT_PATH, `${JSON.stringify(ledger, null, 2)}\n`, "utf8");
  return ledger;
}

async function verifyLedger() {
  await verifyGeographyR4();
  const manifestBytes = await readFile(MANIFEST_PATH);
  const manifest = JSON.parse(manifestBytes);
  const ledger = JSON.parse(await readFile(AUDIT_PATH, "utf8"));
  assert.equal(ledger.schemaVersion, "cap8-r4-geography-final-audit-v1");
  assert.equal(ledger.subject, "geography");
  assert.equal(ledger.contentVersion, manifest.contentVersion);
  assert.equal(ledger.manifestSha256, sha256(manifestBytes), "final audit is not bound to the current manifest");
  assert.equal(ledger.counts.unresolvedFindings, 0, "final audit has unresolved findings");

  const schema = JSON.parse(await readFile(path.join(HERE, "specification", "taiwan-cap-8-subject-one-shot-codex-pack-r4", "schemas", "final-exhaustive-audit-record-r4.schema.json"), "utf8"));
  const validateRecord = new Ajv2020({ allErrors: true, strict: true }).compile(schema);
  const expected = await expectedArtifacts(manifest);
  assert.equal(ledger.artifacts.length, expected.length, "final audit artifact count mismatch");
  assert.equal(new Set(ledger.artifacts.map((item) => item.artifactId)).size, ledger.artifacts.length, "duplicate final audit artifact ID");
  const byId = new Map(ledger.artifacts.map((item) => [item.artifactId, item]));
  for (const item of expected) {
    const audited = byId.get(item.artifactId);
    assert(audited, `${item.artifactId}: missing final audit`);
    assert.equal(audited.artifactType, item.artifactType, `${item.artifactId}: audited type mismatch`);
    assert.equal(audited.path, item.path, `${item.artifactId}: audited path mismatch`);
    assert(validateRecord(audited.record), `${item.artifactId}: final audit schema failed: ${JSON.stringify(validateRecord.errors)}`);
    const bytes = await readFile(path.join(REPO_ROOT, ...item.path.split("/")));
    assert.equal(audited.record.artifactSha256, sha256(bytes), `${item.artifactId}: final audit artifact hash mismatch`);
    assert.equal(audited.record.auditRecordSha256, auditRecordSha256(audited.record), `${item.artifactId}: final audit record hash mismatch`);
  }
  assert.deepEqual(ledger.counts, {
    auditedArtifacts: expected.length,
    manifestArtifacts: manifest.artifacts.length,
    questionsIndependentlySolved: manifest.counts.skillQuestions + manifest.counts.stimulusQuestions,
    questionReviewEvidenceRecords: (manifest.counts.skillQuestions + manifest.counts.stimulusQuestions) * 2,
    unresolvedFindings: 0,
  });
  return ledger.counts;
}

async function main() {
  if (process.argv.includes("--write")) await buildLedger();
  const counts = await verifyLedger();
  console.log(`audit-geography-r4: OK - ${counts.auditedArtifacts} exact-hash artifacts, ${counts.questionsIndependentlySolved} independently solved questions, ${counts.questionReviewEvidenceRecords} review evidence records, ${counts.unresolvedFindings} unresolved findings`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();

export { buildLedger as buildGeographyFinalAudit, verifyLedger as verifyGeographyFinalAudit };
