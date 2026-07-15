import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  serializePublisherLearningReferenceLedger,
  serializeWebSourceDiscoveryLedger,
  validatePublisherPublicResourceReview,
} from "../publisher-public-resource-review.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const LEDGER_ROOT = path.join(HERE, "..", "ledger");

async function checkedInReview() {
  return JSON.parse(await readFile(path.join(LEDGER_ROOT, "publisher-public-resource-review.json"), "utf8"));
}

test("lawful public-resource review covers every current approved publisher", async () => {
  const review = await checkedInReview();
  assert.deepEqual(await validatePublisherPublicResourceReview(review), {
    resources: 13,
    publishers: 5,
    learningReferences: 8,
    errataQuerySets: 8,
    errataRecords: 21,
    targetErrataRecords: 20,
  });
  assert.equal(review.scopeAuthority, false);
  assert.equal(review.fullPublisherTextClaimed, false);
  assert.equal(review.protectedContentCopied, false);
});

test("restricted and third-party resources cannot create teaching observations", async () => {
  const review = await checkedInReview();
  const rejected = review.resources.filter((resource) =>
    resource.decision.startsWith("excluded") || resource.decision.startsWith("rejected"));
  assert(rejected.length >= 3);
  assert(rejected.every((resource) => !resource.decision.includes("observation")));
  assert(review.learningReferences.every((record) => record.productionSkillIds.length === 0));
});

test("public errata evidence stores locations without commercial correction prose", async () => {
  const review = await checkedInReview();
  const records = review.currentKnshErrata.querySets.flatMap((query) => query.records);
  assert.equal(records.length, 21);
  assert(records.every((record) => Object.keys(record).join(",") === "product,page,unit,location"));
  assert.equal(review.currentKnshErrata.contentStored, "affected location metadata only");
});

test("publisher learning and discovery CSV files are deterministic projections", async () => {
  const review = await checkedInReview();
  const [learning, discovery] = await Promise.all([
    readFile(path.join(LEDGER_ROOT, "publisher-learning-reference-ledger.csv"), "utf8"),
    readFile(path.join(LEDGER_ROOT, "web-source-discovery-ledger.csv"), "utf8"),
  ]);
  assert.equal(learning, serializePublisherLearningReferenceLedger(review));
  assert.equal(discovery, serializeWebSourceDiscoveryLedger(review));
});
