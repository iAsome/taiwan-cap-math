import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { auditRecordSha256, sha256 } from "../r4-core.mjs";
import { validateR4Artifact } from "../schema-validator.mjs";
import {
  applyOfficialReviewEvidence,
  loadOfficialReviewEvidence,
  validateOfficialReviewEvidence,
} from "./official-review-evidence.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_REGISTER = path.join(HERE, "..", "evidence", "official", "official-source-register.json");
const DEFAULT_LEDGER = path.join(HERE, "official-material-ledger.json");
const HASH = /^[a-f0-9]{64}$/;
const ID = /^[A-Z][A-Z0-9_-]+$/;
const YEARS = Object.freeze(Array.from({ length: 10 }, (_, index) => 106 + index));

function compareText(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function exactKeys(value, keys, label) {
  assert(value && typeof value === "object" && !Array.isArray(value), `${label} must be an object`);
  assert.deepEqual(Object.keys(value).sort(compareText), [...keys].sort(compareText), `${label} keys`);
}

function assertSnapshot(snapshot) {
  assert(snapshot?.register && HASH.test(snapshot.sha256), "invalid official source snapshot");
}

function classification(file) {
  const text = `${file.title} ${file.filename}`;
  const exactSubject = [
    ["國文科", "chinese"],
    ["英語科", "english"],
    ["英語（閱讀）", "english"],
    ["數學科", "math"],
    ["社會科", "integrated_social"],
    ["自然科", "integrated_natural"],
    ["寫作測驗", "chinese_writing"],
  ].find(([label]) => file.title === label)?.[1];
  let materialKind = "calibration-report";
  if (/試題題本暨參考答案/u.test(text) && /\.zip$/iu.test(file.filename)) materialKind = "supplemental-exam-package";
  else if (exactSubject) materialKind = "question-paper";
  else if (/參考答案|答案/u.test(text)) materialKind = "answer-key";
  else if (/英語聽力|Listening/iu.test(text)) materialKind = "listening-package";
  else if (/[一二三四五六]級分/u.test(file.title)) materialKind = "writing-scoring-sample";
  else if (/第一題|第二題/u.test(file.title)) materialKind = "constructed-response-duplicate";
  else if (/\.zip$/iu.test(file.filename)) materialKind = "supplementary-package";

  let subjectAreas = exactSubject ? [exactSubject] : ["cross-subject"];
  if (/英語聽力|Listening/iu.test(text)) subjectAreas = ["english"];
  else if (/第一題|第二題|數學非選擇題/u.test(file.title)) subjectAreas = ["math"];
  else if (/寫作|級分/u.test(file.title)) subjectAreas = ["chinese_writing"];
  return {
    materialKind,
    subjectAreas,
    itemizationRequired: [
      "question-paper",
      "listening-package",
      "supplemental-exam-package",
    ].includes(materialKind),
  };
}

function sourceLocator(file) {
  return file.repositoryPath ?? `external-cache:${file.cacheRelativePath}`;
}

function materialRows(snapshot, year) {
  return snapshot.register.files
    .filter((file) => file.year === year)
    .sort((a, b) => compareText(a.title, b.title) || compareText(a.driveId, b.driveId))
    .map((file, index) => ({
      materialId: `CAP-${year}-MATERIAL-${String(index + 1).padStart(3, "0")}`,
      sourceSha256: file.sha256,
      driveId: file.driveId,
      title: file.title,
      filename: file.filename,
      contentType: file.contentType,
      bytes: file.bytes,
      sourceLocator: sourceLocator(file),
      ...classification(file),
      reviewRecordId: null,
    }));
}

export function parseOfficialSourceRegister(bytes) {
  const raw = Buffer.isBuffer(bytes) ? bytes : Buffer.from(bytes);
  const register = JSON.parse(raw.toString("utf8"));
  assert.equal(register.schemaVersion, "cap8-r4-official-source-register-v1");
  assert.deepEqual(register.yearRange, [106, 115]);
  for (const key of ["pages", "yearlyPages", "files"]) assert(Array.isArray(register[key]), `${key} must be an array`);

  const fileHashes = new Set();
  for (const entry of [...register.pages, ...register.yearlyPages, ...register.files]) {
    assert.match(entry.sha256, HASH, "registered sources require fixed SHA-256 hashes");
  }
  for (const file of register.files) {
    assert(YEARS.includes(file.year), `registered material year out of range: ${file.year}`);
    assert(!fileHashes.has(file.sha256), `duplicate registered material hash: ${file.sha256}`);
    fileHashes.add(file.sha256);
  }
  for (const year of YEARS) assert(register.files.some((file) => file.year === year), `official register has no materials for ${year}`);
  return Object.freeze({ register, sha256: sha256(raw) });
}

export async function loadOfficialSourceRegister(registerPath = DEFAULT_REGISTER) {
  return parseOfficialSourceRegister(await readFile(registerPath));
}

export function createOfficialMaterialLedger(snapshot, year) {
  assertSnapshot(snapshot);
  assert(YEARS.includes(year), `official ledger year must be 106-115: ${year}`);
  return {
    schemaVersion: "cap8-r4-official-material-ledger-v1",
    sourceRegisterSha256: snapshot.sha256,
    year,
    materials: materialRows(snapshot, year),
    sourceReviews: [],
    items: [],
  };
}

export function createOfficialMaterialLedgerIndex(snapshot) {
  assertSnapshot(snapshot);
  return {
    schemaVersion: "cap8-r4-official-material-ledger-index-v1",
    sourceRegisterSha256: snapshot.sha256,
    status: "materials-inventoried-unreviewed",
    years: YEARS.map((year) => createOfficialMaterialLedger(snapshot, year)),
  };
}

export async function validateOfficialMaterialLedger(ledger, snapshot, { requireComplete = false } = {}) {
  assertSnapshot(snapshot);
  exactKeys(ledger, ["schemaVersion", "sourceRegisterSha256", "year", "materials", "sourceReviews", "items"], "official material ledger");
  assert.equal(ledger.schemaVersion, "cap8-r4-official-material-ledger-v1");
  assert.equal(ledger.sourceRegisterSha256, snapshot.sha256, "official source register hash mismatch");
  assert(YEARS.includes(ledger.year), `official ledger year must be 106-115: ${ledger.year}`);
  for (const key of ["materials", "sourceReviews", "items"]) assert(Array.isArray(ledger[key]), `${key} must be an array`);

  const expected = materialRows(snapshot, ledger.year);
  assert.deepEqual(
    ledger.materials.map((material) => ({ ...material, reviewRecordId: null })),
    expected,
    `${ledger.year} materials must exactly match the fixed source register`,
  );
  const materials = new Map();
  for (const material of ledger.materials) {
    assert.match(material.materialId, ID);
    assert.match(material.sourceSha256, HASH);
    assert(material.reviewRecordId === null || ID.test(material.reviewRecordId), "invalid material reviewRecordId");
    assert(!materials.has(material.sourceSha256), `duplicate material: ${material.sourceSha256}`);
    materials.set(material.sourceSha256, material);
  }

  const reviewIds = ledger.sourceReviews.map((review) => review.id);
  assert.deepEqual(reviewIds, [...reviewIds].sort(compareText), "sourceReviews must be sorted by id");
  const reviews = new Map();
  for (const review of ledger.sourceReviews) {
    exactKeys(review, ["id", "sourceSha256", "record"], "source review");
    assert.match(review.id, ID);
    assert(!reviews.has(review.id), `duplicate source review: ${review.id}`);
    const material = materials.get(review.sourceSha256);
    assert(material, `${review.id}: source review hash is not a material in this ledger`);
    await validateR4Artifact("finalAudit", review.record);
    assert.equal(review.record.artifactSha256, review.sourceSha256, `${review.id}: source review hash mismatch`);
    assert.equal(review.record.auditRecordSha256, auditRecordSha256(review.record), `${review.id}: source review record hash mismatch`);
    assert.equal(material.reviewRecordId, review.id, `${review.id}: material does not select this review`);
    reviews.set(review.id, review);
  }

  const itemKeys = ledger.items.map((item) => `${item.year}\0${item.paper}\0${item.itemId}`);
  assert.deepEqual(itemKeys, [...itemKeys].sort(compareText), "items must be in deterministic year/paper/item order");
  assert.equal(new Set(itemKeys).size, itemKeys.length, "duplicate official item node");
  const itemizedHashes = new Set();
  for (const item of ledger.items) {
    await validateR4Artifact("officialItem", item);
    assert.equal(item.year, ledger.year, `${item.itemId}: item year does not match its ledger`);
    const material = materials.get(item.sourceSha256);
    assert(material, `${item.itemId}: sourceSha256 is not a fixed hash in the official register`);
    assert(material.reviewRecordId && reviews.has(material.reviewRecordId), `${item.itemId}: material was not semantically read`);
    itemizedHashes.add(item.sourceSha256);
  }

  if (requireComplete) {
    for (const material of materials.values()) {
      assert(material.reviewRecordId && reviews.has(material.reviewRecordId), `${material.materialId}: semantic source review missing`);
      if (material.itemizationRequired) assert(itemizedHashes.has(material.sourceSha256), `${material.materialId}: required item rows missing`);
    }
    assert(ledger.items.length > 0, `${ledger.year}: no official items were audited`);
  }
  return { materials: materials.size, sourceReviews: reviews.size, items: ledger.items.length };
}

export async function validateOfficialMaterialLedgerIndex(index, snapshot, { requireComplete = false } = {}) {
  exactKeys(index, ["schemaVersion", "sourceRegisterSha256", "status", "years"], "official material ledger index");
  assert.equal(index.schemaVersion, "cap8-r4-official-material-ledger-index-v1");
  assert.equal(index.sourceRegisterSha256, snapshot.sha256, "official source register hash mismatch");
  assert.deepEqual(index.years.map((ledger) => ledger.year), YEARS);
  const reviewed = index.years.some((ledger) => ledger.sourceReviews.length || ledger.items.length);
  assert.equal(index.status, requireComplete ? "complete-reviewed" : reviewed ? "partially-reviewed" : "materials-inventoried-unreviewed");
  const results = [];
  for (const ledger of index.years) results.push(await validateOfficialMaterialLedger(ledger, snapshot, { requireComplete }));
  return {
    years: results.length,
    materials: results.reduce((total, result) => total + result.materials, 0),
    sourceReviews: results.reduce((total, result) => total + result.sourceReviews, 0),
    items: results.reduce((total, result) => total + result.items, 0),
    status: index.status,
  };
}

async function main() {
  const snapshot = await loadOfficialSourceRegister();
  const extraction = JSON.parse(await readFile(path.join(HERE, "..", "evidence", "official", "official-extraction-index.json"), "utf8"));
  const candidates = JSON.parse(await readFile(path.join(HERE, "official-item-candidates.json"), "utf8"));
  const authorityGraph = JSON.parse(await readFile(path.join(HERE, "..", "authority", "authority-graph.json"), "utf8"));
  const evidence = await loadOfficialReviewEvidence();
  const validated = validateOfficialReviewEvidence(evidence, { extractionIndex: extraction, candidates, authorityGraph });
  const index = applyOfficialReviewEvidence(createOfficialMaterialLedgerIndex(snapshot), validated);
  const result = await validateOfficialMaterialLedgerIndex(index, snapshot);
  await writeFile(DEFAULT_LEDGER, `${JSON.stringify(index, null, 2)}\n`, "utf8");
  console.log(`official-material-ledger: OK - ${result.materials} materials, ${result.sourceReviews} source reviews, ${result.items} item reviews`);
}

export const OFFICIAL_ITEM_YEARS = YEARS;

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
