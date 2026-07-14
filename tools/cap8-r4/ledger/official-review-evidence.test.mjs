import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { createOfficialMaterialLedgerIndex, loadOfficialSourceRegister, validateOfficialMaterialLedgerIndex } from "./official-material-ledger.mjs";
import {
  applyOfficialReviewEvidence,
  loadOfficialReviewEvidence,
  validateOfficialReviewEvidence,
} from "./official-review-evidence.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

async function inputs() {
  const evidence = await loadOfficialReviewEvidence();
  const extractionIndex = JSON.parse(await readFile(path.join(HERE, "..", "evidence", "official", "official-extraction-index.json"), "utf8"));
  const candidates = JSON.parse(await readFile(path.join(HERE, "official-item-candidates.json"), "utf8"));
  const authorityGraph = JSON.parse(await readFile(path.join(HERE, "..", "authority", "authority-graph.json"), "utf8"));
  return { evidence, extractionIndex, candidates, authorityGraph };
}

test("review evidence covers only fully rendered sources and complete papers", async () => {
  const data = await inputs();
  const validated = validateOfficialReviewEvidence(data.evidence, data);
  const expected = {
    materials: data.evidence.sourceReviews.reviews.length,
    papers: data.evidence.itemReviewShards.length,
    items: data.evidence.itemReviewShards.reduce((total, shard) => total + shard.items.length, 0),
  };
  assert.deepEqual(validated.counts, expected);
  const ledger = applyOfficialReviewEvidence(createOfficialMaterialLedgerIndex(await loadOfficialSourceRegister()), validated);
  assert.deepEqual(await validateOfficialMaterialLedgerIndex(ledger, await loadOfficialSourceRegister()), {
    years: 10,
    materials: 246,
    sourceReviews: expected.materials,
    items: expected.items,
    status: "partially-reviewed",
  });
});

test("a review cannot skip a rendered page", async () => {
  const data = await inputs();
  data.evidence.sourceReviews.reviews[0].documents[0].renderedPages.pop();
  assert.throws(() => validateOfficialReviewEvidence(data.evidence, data), /every rendered page/);
});

test("a review cannot disagree with the official answer", async () => {
  const data = await inputs();
  data.evidence.itemReviewShards[0].items[0].derivedAnswer = "Z";
  assert.throws(() => validateOfficialReviewEvidence(data.evidence, data), /independent answer disagrees/);
});

test("a review cannot cite a non-authoritative curriculum code", async () => {
  const data = await inputs();
  data.evidence.itemReviewShards[0].items[0].curriculumCodes = ["FAKE-Ⅳ-1"];
  assert.throws(() => validateOfficialReviewEvidence(data.evidence, data), /unknown fourth-stage curriculum code/);
});

test("a mathematics review cannot cite a non-mathematics curriculum code", async () => {
  const data = await inputs();
  const shard = data.evidence.itemReviewShards.find((candidate) => candidate.paper === "math_mc");
  assert(shard);
  shard.items[0].curriculumCodes = ["B-Ⅳ-6"];
  assert.throws(() => validateOfficialReviewEvidence(data.evidence, data), /unknown fourth-stage curriculum code/);
});

test("a non-mathematics review cannot cite a mathematics-only curriculum code", async () => {
  const data = await inputs();
  const shard = data.evidence.itemReviewShards.find((candidate) => candidate.paper === "chinese");
  assert(shard);
  shard.items[0].curriculumCodes = ["N-7-3"];
  assert.throws(() => validateOfficialReviewEvidence(data.evidence, data), /unknown fourth-stage curriculum code/);
});

test("a review cannot cite another subject's valid curriculum code", async () => {
  const data = await inputs();
  const shard = data.evidence.itemReviewShards.find((candidate) => candidate.paper === "integrated_social");
  assert(shard);
  const geographyItem = shard.items.find((item) => item.primarySubject === "geography");
  assert(geographyItem);
  geographyItem.curriculumCodes = ["公Bi-Ⅳ-3"];
  assert.throws(() => validateOfficialReviewEvidence(data.evidence, data), /is not assigned to a declared subject/);
});

test("a review shard cannot omit an item from its paper", async () => {
  const data = await inputs();
  const shard = data.evidence.itemReviewShards.find((candidate) => candidate.items.length > 1);
  assert(shard);
  shard.items.pop();
  assert.throws(() => validateOfficialReviewEvidence(data.evidence, data), /complete paper in source order/);
});
