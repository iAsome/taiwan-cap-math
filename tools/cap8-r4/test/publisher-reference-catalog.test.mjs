import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  buildPublisherCatalog,
  serializePublisherReferenceLedger,
  validatePublisherCatalog,
} from "../publisher-reference-catalog.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..");
const PDF_PATH = path.join(ROOT, "tools", "cap8-r4", "evidence", "publisher", "naer-115-approved-textbooks.pdf");
const JSON_PATH = path.join(ROOT, "tools", "cap8-r4", "evidence", "publisher", "naer-115-approved-textbooks.json");
const LEDGER_PATH = path.join(ROOT, "tools", "cap8-r4", "ledger", "publisher-reference-ledger.csv");

test("current NAER catalog identifies every approved junior-high reference", async () => {
  const [pdfBytes, catalogBytes] = await Promise.all([readFile(PDF_PATH), readFile(JSON_PATH)]);
  const catalog = JSON.parse(catalogBytes);
  const counts = await validatePublisherCatalog(catalog, pdfBytes);
  assert.deepEqual(counts.bySubject, {
    chinese: 18,
    english: 18,
    integrated_natural: 18,
    integrated_social: 23,
    math: 18,
  });
  assert.equal(counts.records, 95);
  assert.equal(catalog.source.sha256, "a2de4a4efa1ddbb45503e92d689e00e0b493e40d999b088c0f6c64164f4e5d52");
});

test("publisher catalog remains metadata-only and cannot expand scope", async () => {
  const catalog = buildPublisherCatalog(await readFile(PDF_PATH));
  assert.equal(catalog.scopeAuthority, false);
  assert.equal(catalog.fullTextReviewed, false);
  assert(catalog.records.every((record) => !Object.hasOwn(record, "curriculumCodes")));
  assert.deepEqual(
    [30, 90, 120].map((catalogRow) => catalog.records.find((record) => record.catalogRow === catalogRow)?.catalogRow),
    [30, 90, 120],
    "the final table row on each PDF page must not be dropped",
  );
});

test("publisher reference ledger is a deterministic catalog projection", async () => {
  const catalog = buildPublisherCatalog(await readFile(PDF_PATH));
  assert.equal(await readFile(LEDGER_PATH, "utf8"), serializePublisherReferenceLedger(catalog));
});
