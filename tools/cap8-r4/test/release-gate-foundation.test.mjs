import assert from "node:assert/strict";
import test from "node:test";
import {
  discoverMathAuditArtifacts,
  verifyAppendixEvidence,
  verifyAuthorityNodeReview,
  verifyAuthorityGraphEvidence,
  verifyEnglishVocabularyAuthority,
  verifyOfficialExtractionEvidence,
  verifyOfficialItemCandidateEvidence,
  verifyOfficialLedgerEvidence,
  verifyOfficialReviewShardEvidence,
  verifyUserRequirements,
} from "../run-full-release-gate.mjs";

test("user requirements make Math part of the final exhaustive audit", async () => {
  const requirements = await verifyUserRequirements();
  assert(requirements.finalAuditScopes.includes("math"));
  assert.equal(requirements.mathAuthoringInScope, false);
  assert.equal(requirements.mathFinalExhaustiveAuditRequired, true);
  assert.equal(requirements.secondaryReferenceMayExpandScope, false);
});

test("official evidence separates extraction, item location, and semantic review", async () => {
  const extraction = await verifyOfficialExtractionEvidence();
  assert.deepEqual(
    { materials: extraction.materials, pages: extraction.pages, renderedPages: extraction.renderedPages },
    { materials: 246, pages: 2437, renderedPages: 2437 },
  );
  const candidates = await verifyOfficialItemCandidateEvidence();
  assert.deepEqual(
    { exams: candidates.exams, items: candidates.items, selectionItems: candidates.selectionItems },
    { exams: 13, items: 3178, selectionItems: 3139 },
  );
  const reviewed = await verifyOfficialReviewShardEvidence();
  assert.equal(reviewed.materials, extraction.materials);
  assert(reviewed.papers > 0);
  assert.equal(reviewed.items, candidates.items);
});

test("official appendices and English Table 1 are independently locked", async () => {
  const appendix = await verifyAppendixEvidence();
  assert.deepEqual(
    { nodes: appendix.nodes, scopeLimitLines: appendix.scopeLimitLines },
    { nodes: 436, scopeLimitLines: 91 },
  );
  const vocabulary = await verifyEnglishVocabularyAuthority();
  assert.deepEqual(
    { basicSourceEntries: vocabulary.basicSourceEntries, additionalSourceEntries: vocabulary.additionalSourceEntries },
    { basicSourceEntries: 1211, additionalSourceEntries: 794 },
  );
});

test("all extracted fourth-stage nodes have a reviewed scope decision without fake mappings", async () => {
  const review = await verifyAuthorityNodeReview();
  assert.deepEqual(review.byDomain, { chinese: 61, english: 116, natural: 246, social: 246 });
  assert.equal(review.nodes, 669);
  assert.equal(review.withAppendixEvidence, 436);
  assert.equal(review.mappedSkills, 0);
  assert.equal(review.exclusions, 0);
});

test("Math final-audit inventory covers every production record and reachable UI file", async () => {
  const result = await discoverMathAuditArtifacts();
  assert.deepEqual(result.counts, { units: 23, lectures: 339, questions: 4746, assets: 178, ui: 37 });
  assert.equal(result.artifacts.length, 5300);
  assert.equal(new Set(result.artifacts.map((artifact) => artifact.id)).size, 5300);
});

test("mechanical extraction remains separate while the reviewed production graph is frozen", async () => {
  const result = await verifyAuthorityGraphEvidence(undefined, { requireFrozen: false });
  assert.deepEqual(
    { sources: result.sources, nodes: result.nodes, skills: result.skills, status: result.status },
    { sources: 4, nodes: 669, skills: 0, status: "scope-extracted-unreviewed" },
  );
  const frozen = await verifyAuthorityGraphEvidence();
  assert.deepEqual(
    { sources: frozen.sources, nodes: frozen.nodes, skills: frozen.skills, status: frozen.status },
    { sources: 4, nodes: 669, skills: 2100, status: "frozen-reviewed" },
  );
});

test("complete item and material review passes the official ledger gate", async () => {
  const result = await verifyOfficialLedgerEvidence(undefined, { requireComplete: false });
  assert.equal(result.years, 10);
  assert.equal(result.materials, 246);
  assert.equal(result.sourceReviews, result.materials);
  assert.equal(result.items, 3178);
  assert.equal(result.status, "complete-reviewed");
  await verifyOfficialLedgerEvidence();
});
