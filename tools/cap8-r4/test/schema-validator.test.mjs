import assert from "node:assert/strict";
import test from "node:test";
import { artifactSha256, auditRecordSha256 } from "../r4-core.mjs";
import { schemaValidatorImportReady, validateR4Artifact } from "../schema-validator.mjs";

function auditedQuestion(overrides = {}) {
  const question = {
    id: "EN_Q_000001",
    subject: "english",
    skillIds: ["EN_SKILL_001"],
    authorityRefs: ["EN-AUTH-001"],
    stem: "Which response best completes the conversation?",
    options: ["Thank you.", "Tomorrow.", "At school."],
    answerIndex: 0,
    correctRationale: "The response appropriately accepts the speaker's help.",
    distractorRationales: [
      "This gives a time but does not respond to the offer.",
      "This gives a place but does not respond to the offer.",
    ],
    difficulty: "foundation",
    cognitiveProcess: ["apply"],
    misconceptionTargets: ["response-function"],
    provenance: { status: "original" },
    ...overrides,
  };
  const audit = {
    artifactSha256: artifactSha256(question),
    status: "accepted",
    reviewerRole: "independent semantic reviewer",
    reviewedAt: "2026-07-14",
    fullRead: true,
    renderedContextInspected: true,
    independentSolveOrEvidenceCheck: true,
    allFindingsResolved: true,
  };
  audit.auditRecordSha256 = auditRecordSha256(audit);
  return { ...question, finalAudit: audit };
}

test("all package schemas compile", async () => {
  assert.equal(await schemaValidatorImportReady(), true);
});

test("valid audited question passes schema and binding checks", async () => {
  assert.equal(await validateR4Artifact("question", auditedQuestion()), true);
});

test("three-option answerIndex cannot point to a fourth option", async () => {
  await assert.rejects(
    validateR4Artifact("question", auditedQuestion({ answerIndex: 3 })),
    /answerIndex exceeds options length|artifact audit hash mismatch/,
  );
});

test("distractor rationales cover every wrong option exactly once", async () => {
  await assert.rejects(
    validateR4Artifact("question", auditedQuestion({ distractorRationales: ["Only one."] })),
    /distractor rationale count|must NOT have fewer than 2 items/,
  );
});
