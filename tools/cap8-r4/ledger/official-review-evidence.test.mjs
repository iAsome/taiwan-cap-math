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

test("a review shard cannot omit an item from its paper", async () => {
  const data = await inputs();
  data.evidence.itemReviewShards[0].items.pop();
  assert.throws(() => validateOfficialReviewEvidence(data.evidence, data), /complete paper in source order/);
});
