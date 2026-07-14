import assert from "node:assert/strict";
import test from "node:test";
import {
  discoverMathAuditArtifacts,
  verifyAuthorityGraphEvidence,
  verifyOfficialLedgerEvidence,
  verifyUserRequirements,
} from "../run-full-release-gate.mjs";

test("user requirements make Math part of the final exhaustive audit", async () => {
  const requirements = await verifyUserRequirements();
  assert(requirements.finalAuditScopes.includes("math"));
  assert.equal(requirements.mathAuthoringInScope, false);
  assert.equal(requirements.mathFinalExhaustiveAuditRequired, true);
  assert.equal(requirements.secondaryReferenceMayExpandScope, false);
});

test("Math final-audit inventory covers every production record and reachable UI file", async () => {
  const result = await discoverMathAuditArtifacts();
  assert.deepEqual(result.counts, { units: 23, lectures: 339, questions: 4746, assets: 178, ui: 37 });
  assert.equal(result.artifacts.length, 5300);
  assert.equal(new Set(result.artifacts.map((artifact) => artifact.id)).size, 5300);
});

test("mechanical curriculum extraction validates but cannot pass the frozen gate", async () => {
  const result = await verifyAuthorityGraphEvidence(undefined, { requireFrozen: false });
  assert.deepEqual(
    { sources: result.sources, nodes: result.nodes, skills: result.skills, status: result.status },
    { sources: 4, nodes: 669, skills: 0, status: "scope-extracted-unreviewed" },
  );
  await assert.rejects(verifyAuthorityGraphEvidence(), /not frozen and semantically reviewed/);
});

test("material inventory validates but cannot pass the complete official-item gate", async () => {
  const result = await verifyOfficialLedgerEvidence(undefined, { requireComplete: false });
  assert.deepEqual(result, {
    years: 10,
    materials: 246,
    sourceReviews: 0,
    items: 0,
    status: "materials-inventoried-unreviewed",
  });
  await assert.rejects(verifyOfficialLedgerEvidence(), /complete-reviewed/);
});
