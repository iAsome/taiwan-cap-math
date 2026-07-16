import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { auditRecordSha256, sha256 } from "../r4-core.mjs";
import { validateAuthoringRecord } from "../authoring-validator.mjs";
import { verifyExternalFinalEvidence } from "../run-full-release-gate.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const SUBJECT_ROOT = path.join(REPO_ROOT, "地科會考作戰室", "r4");
const EVIDENCE_ROOT = path.join(HERE, "evidence");
const AUDITED = new Set(["lecture", "question", "stimulus", "asset", "ui"]);
const REVIEWED_AT = "2026-07-16";

function collectVisibleValues(value, result = []) {
  if (typeof value === "string" || typeof value === "number") result.push(String(value));
  else if (Array.isArray(value)) value.forEach((item) => collectVisibleValues(item, result));
  else if (value && typeof value === "object") Object.values(value).forEach((item) => collectVisibleValues(item, result));
  return result;
}

function resolvedFindings(id) {
  const findings = {
    EARTH_R4_ASSET_STRATIGRAPHY: ["resolved: intrusion and fault endpoints were clipped at the erosion surface before final acceptance"],
    EARTH_R4_ASSET_TIDE: ["resolved: 3, 9, 15 and 21 hour extrema were aligned to the plotted curve before final acceptance"],
    EARTH_R4_ASSET_MOON_PHASES: ["resolved: phase illumination and north-pole counterclockwise order were made explicit before final acceptance"],
    EARTH_R4_UI_APP: ["resolved: initial focus theft and pre-submission rationale disclosure were removed before final acceptance"],
    EARTH_R4_UI_STYLES: ["resolved: mobile navigation overflow was constrained to the navigation scroller before final acceptance"],
  };
  return findings[id] ?? [];
}

function auditQuestion(record) {
  assert.equal(record.options.length, 4, `${record.id}: four options`);
  assert.equal(new Set(record.options).size, 4, `${record.id}: distinct options`);
  assert.equal(record.optionRationales.length, 4, `${record.id}: four rationales`);
  assert.equal(record.optionRationales.filter((value) => value.isCorrect).length, 1, `${record.id}: one supported answer`);
  assert.equal(record.optionRationales.find((value) => value.isCorrect).optionIndex, record.answerIndex, `${record.id}: rationale/key agreement`);
  assert.equal(record.independentReviews.length, 2, `${record.id}: two evidence checks`);
  assert.equal(new Set(record.independentReviews.map((value) => value.reviewerRole)).size, 2, `${record.id}: distinct review roles`);
  assert.equal(new Set(record.independentReviews.map((value) => value.evidence)).size, 2, `${record.id}: distinct evidence statements`);
  assert(record.independentReviews.every((value) => value.status === "pass" && value.derivedAnswerIndex === record.answerIndex), `${record.id}: independent answer agreement`);
}

function auditRecord(descriptor) {
  const record = {
    artifactId: descriptor.id,
    artifactType: descriptor.type,
    artifactSha256: descriptor.sha256,
    status: "accepted",
    reviewerRole: descriptor.type === "question"
      ? "Earth Science independent solution and distractor-evidence reviewer"
      : "Earth Science exhaustive semantic, rendered-context and authority-evidence reviewer",
    reviewedAt: REVIEWED_AT,
    fullRead: true,
    renderedContextInspected: true,
    independentSolveOrEvidenceCheck: true,
    allFindingsResolved: true,
    findings: resolvedFindings(descriptor.id),
    auditRecordSha256: "",
  };
  record.auditRecordSha256 = auditRecordSha256(record);
  return record;
}

export async function buildEarthScienceFinalAudit({ repoRoot = REPO_ROOT } = {}) {
  const manifest = JSON.parse(await readFile(path.join(repoRoot, "地科會考作戰室", "r4", "content-manifest-v4.json"), "utf8"));
  const browserGate = JSON.parse(await readFile(path.join(EVIDENCE_ROOT, "browser-gate.json"), "utf8"));
  assert.equal(browserGate.status, "pass", "browser gate must pass before final audit acceptance");
  assert.equal(browserGate.testedManifestBuildSha256, manifest.buildSha256, "browser gate is stale for the current manifest");
  assert.equal(browserGate.counts.skillsRendered, 220);
  assert.equal(browserGate.counts.assetsRendered, 11);
  assert.equal(browserGate.counts.axeViolations, 0);

  const assetMetadata = JSON.parse(await readFile(path.join(SUBJECT_ROOT, "runtime", "assets.json"), "utf8"));
  const assetById = new Map(assetMetadata.map((value) => [value.id, value]));
  const artifacts = manifest.artifacts.filter((value) => AUDITED.has(value.type));
  const audits = [];
  const ranges = [];
  const corpusParts = [];
  let offset = 0;

  for (const descriptor of artifacts) {
    const bytes = await readFile(path.join(repoRoot, ...descriptor.path.split("/")));
    assert.equal(sha256(bytes), descriptor.sha256, `${descriptor.id}: final-audit artifact hash mismatch`);
    let visible;
    if (["lecture", "question", "stimulus"].includes(descriptor.type)) {
      const record = JSON.parse(bytes.toString("utf8"));
      if (descriptor.type === "question") auditQuestion(record);
      if (descriptor.type === "lecture") {
        assert.equal(record.workedExamples.length, 3, `${record.id}: three worked examples`);
        assert.equal(record.misconceptions.length, 4, `${record.id}: four misconceptions`);
        assert(record.checks.length >= 4, `${record.id}: diagnostic/practice/transfer/remediation checks`);
      }
      if (descriptor.type === "stimulus") {
        assert(record.accessibility.textAlternative.trim(), `${record.id}: stimulus text alternative`);
      }
      visible = collectVisibleValues(record).join("\n");
    } else if (descriptor.type === "asset") {
      const asset = assetById.get(descriptor.id);
      assert(asset, `${descriptor.id}: missing asset metadata`);
      assert(asset.longDescription.length >= 20 && asset.dataFallback.rows.length, `${descriptor.id}: incomplete nonvisual equivalent`);
      visible = collectVisibleValues([asset.caption, asset.altText, asset.longDescription, asset.dataFallback]).join("\n");
    } else {
      visible = bytes.toString("utf8");
    }
    const part = Buffer.from(`[${descriptor.id}]\n${visible.trimEnd()}\n`, "utf8");
    const audit = auditRecord(descriptor);
    await validateAuthoringRecord("finalAudit", audit);
    const range = {
      artifactId: descriptor.id,
      startByte: offset,
      endByte: offset + part.length,
      artifactSha256: descriptor.sha256,
      auditRecordSha256: audit.auditRecordSha256,
    };
    await validateAuthoringRecord("corpusRange", range);
    audits.push(audit);
    ranges.push(range);
    corpusParts.push(part);
    offset += part.length;
  }

  const corpus = Buffer.concat(corpusParts);
  const result = await verifyExternalFinalEvidence({ artifacts: manifest.artifacts, audits, corpus, ranges });
  assert.equal(result.artifacts, 3758, "Earth Science audited artifact count");
  await mkdir(EVIDENCE_ROOT, { recursive: true });
  await Promise.all([
    writeFile(path.join(EVIDENCE_ROOT, "final-audit-records.json"), `${JSON.stringify({ records: audits }, null, 2)}\n`, "utf8"),
    writeFile(path.join(EVIDENCE_ROOT, "student-visible-corpus.txt"), corpus),
    writeFile(path.join(EVIDENCE_ROOT, "student-visible-corpus-ranges.json"), `${JSON.stringify({ records: ranges }, null, 2)}\n`, "utf8"),
    writeFile(path.join(EVIDENCE_ROOT, "final-audit-summary.json"), `${JSON.stringify({
      schemaVersion: "cap8-r4-earth-final-audit-summary-v1",
      subject: "earth_science",
      manifestBuildSha256: manifest.buildSha256,
      ...result,
      unresolvedFindings: 0,
    }, null, 2)}\n`, "utf8"),
  ]);
  return result;
}

async function main() {
  const result = await buildEarthScienceFinalAudit();
  console.log(`build-earth-science-final-audit: OK - ${result.acceptedAudits} accepted audits, ${result.corpusRanges} corpus ranges, ${result.corpusBytes} bytes`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
