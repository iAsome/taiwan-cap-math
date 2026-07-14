import assert from "node:assert/strict";
import test from "node:test";
import {
  artifactSha256,
  auditRecordSha256,
  canonicalJson,
  productionFloor,
  verifyFinalAuditBinding,
} from "../r4-core.mjs";

test("canonical JSON sorts object keys while preserving array order", () => {
  assert.equal(canonicalJson({ z: [2, 1], a: { y: 2, x: 1 } }), '{"a":{"x":1,"y":2},"z":[2,1]}');
});

test("artifact hash excludes finalAudit", () => {
  const base = { id: "X", value: 1 };
  assert.equal(artifactSha256(base), artifactSha256({ ...base, finalAudit: { ignored: true } }));
});

test("audit hash excludes only its own hash", () => {
  const record = { artifactSha256: "a".repeat(64), status: "accepted" };
  assert.equal(
    auditRecordSha256(record),
    auditRecordSha256({ ...record, auditRecordSha256: "f".repeat(64) }),
  );
});

test("final audit binding validates exact artifact and audit hashes", () => {
  const artifact = { id: "X", value: 1 };
  const audit = {
    artifactSha256: artifactSha256(artifact),
    status: "accepted",
    reviewerRole: "independent semantic reviewer",
    reviewedAt: "2026-07-14",
    fullRead: true,
    renderedContextInspected: true,
    independentSolveOrEvidenceCheck: true,
    allFindingsResolved: true,
  };
  audit.auditRecordSha256 = auditRecordSha256(audit);
  assert.equal(verifyFinalAuditBinding({ ...artifact, finalAudit: audit }), true);
});

test("archived global floor is adapted without rewriting it", async () => {
  const floor = await productionFloor();
  assert.equal(floor.schemaVersion, "cap8-global-production-floor-r4");
  assert.equal(floor.totals.total_choice_items, 33760);
});
