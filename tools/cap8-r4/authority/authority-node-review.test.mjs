import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  buildAuthorityNodeReview,
  serializeAuthorityNodeLedger,
  validateAuthorityNodeReview,
} from "./authority-node-review.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

test("all 669 fourth-stage nodes are reviewed as required without pretending skills exist", async () => {
  const review = await buildAuthorityNodeReview();
  assert.equal(review.nodes.length, 669);
  assert.equal(new Set(review.nodes.map((node) => node.authorityId)).size, 669);
  assert(review.nodes.every((node) => node.code.includes("-Ⅳ-")));
  assert(review.nodes.every((node) => node.scopeDecision === "required-fourth-stage"));
  assert.equal(review.counts.mappedSkills, 0);
  assert.equal(review.counts.exclusions, 0);
  assert.equal(review.finalAuditCredit, false);
});

test("reviewed subject ownership follows official appendix implementation", async () => {
  const review = await buildAuthorityNodeReview();
  const byCode = new Map(review.nodes.map((node) => [`${node.domain}:${node.code}`, node]));
  assert.deepEqual(byCode.get("natural:INc-Ⅳ-1").reviewedSubjects, ["biology", "integrated_natural"]);
  assert.deepEqual(byCode.get("natural:INa-Ⅳ-1").reviewedSubjects, ["integrated_natural", "physics_chemistry"]);
  assert.deepEqual(byCode.get("natural:INg-Ⅳ-1").reviewedSubjects, ["earth_science", "integrated_natural"]);
  assert.deepEqual(byCode.get("social:歷A-Ⅳ-1").reviewedSubjects, ["history", "integrated_social"]);
  assert.deepEqual(byCode.get("social:社1a-Ⅳ-1").reviewedSubjects, ["civics", "geography", "history", "integrated_social"]);
});

test("curriculum requirement and directly scored assessment modes remain distinct", async () => {
  const review = await buildAuthorityNodeReview();
  const byCode = new Map(review.nodes.map((node) => [`${node.domain}:${node.code}`, node]));
  assert.equal(byCode.get("english:1-Ⅳ-1").assessmentRole, "direct-english-listening-choice");
  assert.equal(byCode.get("english:3-Ⅳ-1").assessmentRole, "direct-english-reading-choice");
  assert.equal(byCode.get("english:2-Ⅳ-1").assessmentRole, "curriculum-required-not-separately-scored");
  assert.equal(byCode.get("chinese:6-Ⅳ-1").assessmentRole, "direct-chinese-writing");
  assert.equal(byCode.get("social:歷A-Ⅳ-1").assessmentRole, "direct-integrated-social-choice");
  assert.equal(byCode.get("natural:tr-Ⅳ-1").assessmentRole, "embedded-in-integrated-natural-choice");
});

test("checked-in JSON and CSV are deterministic projections", async () => {
  const review = JSON.parse(await readFile(path.join(HERE, "authority-node-review.json"), "utf8"));
  const counts = await validateAuthorityNodeReview(review);
  assert.deepEqual(counts.byDomain, { chinese: 61, english: 116, natural: 246, social: 246 });
  assert.equal(counts.withAppendixEvidence, 436);
  const csv = await readFile(path.join(HERE, "..", "ledger", "authority-node-ledger.csv"), "utf8");
  assert.equal(csv, serializeAuthorityNodeLedger(review));
  assert.equal(csv.trimEnd().split("\n").length, 670);
});
