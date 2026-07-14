import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { artifactSha256, auditRecordSha256 } from "../r4-core.mjs";
import {
  OFFICIAL_ITEM_YEARS,
  createOfficialMaterialLedger,
  createOfficialMaterialLedgerIndex,
  loadOfficialSourceRegister,
  validateOfficialMaterialLedger,
  validateOfficialMaterialLedgerIndex,
} from "./official-material-ledger.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

function auditFor(artifactSha256Value) {
  const record = {
    artifactSha256: artifactSha256Value,
    status: "accepted",
    reviewerRole: "independent semantic reviewer",
    reviewedAt: "2026-07-14",
    fullRead: true,
    renderedContextInspected: true,
    independentSolveOrEvidenceCheck: true,
    allFindingsResolved: true,
  };
  record.auditRecordSha256 = auditRecordSha256(record);
  return record;
}

function auditedItem(sourceSha256, overrides = {}) {
  const item = {
    year: 106,
    paper: "social",
    itemId: "SOCIAL-001",
    sharedStimulusId: null,
    sourceSha256,
    sourceLocator: "page 1, item 1",
    officialAnswer: "A",
    primarySubject: "geography",
    secondarySubjects: [],
    curriculumCodes: ["GEO-1"],
    skills: ["GEO-SKILL-1"],
    representationTypes: ["map"],
    reasoningOperations: ["interpret"],
    distractorAnalysis: ["confuses direction"],
    ...overrides,
  };
  item.finalAudit = auditFor(artifactSha256(item));
  return item;
}

function addSourceReview(ledger, materialIndex = 0) {
  const material = ledger.materials[materialIndex];
  const id = `SOURCE-REVIEW-${ledger.year}-001`;
  material.reviewRecordId = id;
  ledger.sourceReviews.push({ id, sourceSha256: material.sourceSha256, record: auditFor(material.sourceSha256) });
  return material.sourceSha256;
}

test("checked-in index inventories every fixed material and only completed review shards", async () => {
  const snapshot = await loadOfficialSourceRegister();
  const actual = JSON.parse(await readFile(path.join(HERE, "official-material-ledger.json"), "utf8"));
  assert.deepEqual(OFFICIAL_ITEM_YEARS, [106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
  const result = await validateOfficialMaterialLedgerIndex(actual, snapshot);
  assert.equal(result.years, 10);
  assert.equal(result.materials, 246);
  assert(result.sourceReviews > 0 && result.sourceReviews < result.materials);
  assert(result.items > 0);
  assert.equal(result.status, "partially-reviewed");
  assert.equal(actual.years.find((ledger) => ledger.year === 106).items[0].itemId, "CAP-106-MAIN-ENGLISH-READING-001");
});

test("every English reading paper requires itemization", async () => {
  const snapshot = await loadOfficialSourceRegister();
  const index = createOfficialMaterialLedgerIndex(snapshot);
  for (const ledger of index.years) {
    const paper = ledger.materials.find((material) => material.title === "英語（閱讀）");
    assert(paper, `${ledger.year}: English reading paper missing`);
    assert.equal(paper.materialKind, "question-paper");
    assert.deepEqual(paper.subjectAreas, ["english"]);
    assert.equal(paper.itemizationRequired, true);
  }
});

test("standalone math constructed-response duplicates do not duplicate item rows", async () => {
  const snapshot = await loadOfficialSourceRegister();
  const index = createOfficialMaterialLedgerIndex(snapshot);
  for (const ledger of index.years) {
    const constructed = ledger.materials.filter((material) => /第一題|第二題/u.test(material.title));
    assert.equal(constructed.length, 2, `${ledger.year}: expected two math constructed-response files`);
    for (const material of constructed) {
      assert.equal(material.materialKind, "constructed-response-duplicate");
      assert.deepEqual(material.subjectAreas, ["math"]);
      assert.equal(material.itemizationRequired, false);
    }
  }
  for (const year of [109, 110, 112]) {
    const ledger = index.years.find((entry) => entry.year === year);
    const supplemental = ledger.materials.find((material) => material.materialKind === "supplemental-exam-package");
    assert(supplemental, `${year}: alternate official exam package missing`);
    assert.equal(supplemental.itemizationRequired, true);
  }
});

test("complete mode rejects the unreviewed inventory", async () => {
  const snapshot = await loadOfficialSourceRegister();
  const index = createOfficialMaterialLedgerIndex(snapshot);
  await assert.rejects(validateOfficialMaterialLedgerIndex(index, snapshot, { requireComplete: true }), /complete-reviewed/);
});

test("an item passes only with an explicit source review", async () => {
  const snapshot = await loadOfficialSourceRegister();
  const ledger = createOfficialMaterialLedger(snapshot, 106);
  const sourceSha256 = addSourceReview(ledger);
  ledger.items.push(auditedItem(sourceSha256));
  assert.deepEqual(await validateOfficialMaterialLedger(ledger, snapshot), {
    materials: ledger.materials.length,
    sourceReviews: 1,
    items: 1,
  });
});

test("an item cannot imply that an unreviewed material was read", async () => {
  const snapshot = await loadOfficialSourceRegister();
  const ledger = createOfficialMaterialLedger(snapshot, 106);
  ledger.items.push(auditedItem(ledger.materials[0].sourceSha256));
  await assert.rejects(validateOfficialMaterialLedger(ledger, snapshot), /not semantically read/);
});
