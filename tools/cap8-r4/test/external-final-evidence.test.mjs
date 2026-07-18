import assert from "node:assert/strict";
import test from "node:test";
import { auditRecordSha256 } from "../r4-core.mjs";
import { verifyExternalFinalEvidence } from "../run-full-release-gate.mjs";

const ARTIFACT = Object.freeze({
  id: "PHYCHM_R4_Q_001_01",
  type: "question",
  subject: "physics_chemistry",
  sha256: "a".repeat(64),
});
const LEGACY_ARTIFACT = Object.freeze({
  ...ARTIFACT,
  answerIndex: 0,
  independentReviews: ["solver-a", "solver-b"].map((reviewerRole) => ({
    reviewerRole,
    derivedAnswerIndex: 0,
    evidence: "Copied from answerIndex and the authored rationale.",
    status: "pass",
  })),
});

function externalEvidence() {
  const audit = {
    artifactId: ARTIFACT.id,
    artifactType: ARTIFACT.type,
    artifactSha256: ARTIFACT.sha256,
    status: "accepted",
    reviewerRole: "external semantic reviewer",
    reviewedAt: "2026-07-18",
    fullRead: true,
    renderedContextInspected: true,
    independentSolveOrEvidenceCheck: true,
    allFindingsResolved: true,
    findings: [],
  };
  audit.auditRecordSha256 = auditRecordSha256(audit);
  const corpus = Buffer.from("Which option is correct?\n", "utf8");
  const ranges = [{
    artifactId: ARTIFACT.id,
    startByte: 0,
    endByte: corpus.length,
    artifactSha256: ARTIFACT.sha256,
    auditRecordSha256: audit.auditRecordSha256,
  }];
  return { audits: [audit], corpus, ranges };
}

test("answer-derived embedded reviews cannot replace external final evidence", async () => {
  await assert.rejects(
    verifyExternalFinalEvidence({ artifacts: [LEGACY_ARTIFACT], audits: [], corpus: Buffer.from("x"), ranges: [] }),
    /not every student-visible artifact has one accepted final audit/,
  );
});

test("incomplete external evidence fails closed", async () => {
  const evidence = externalEvidence();
  await assert.rejects(
    verifyExternalFinalEvidence({ artifacts: [ARTIFACT], ...evidence, ranges: [] }),
    /student-visible corpus has no coverage ranges/,
  );
});

test("exact-hash external evidence passes while embedded reviews are ignored", async () => {
  assert.deepEqual(
    await verifyExternalFinalEvidence({ artifacts: [LEGACY_ARTIFACT], ...externalEvidence() }),
    {
      artifacts: 1,
      acceptedAudits: 1,
      corpusBytes: 25,
      corpusRanges: 1,
      corpusSha256: "202be0f5606286fc87e9119c58e6f4dbe4f9ce32ac22fb391f0d12b08f7afa21",
    },
  );
});
