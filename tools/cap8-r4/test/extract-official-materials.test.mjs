import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  assertSafeArchiveEntry,
  detectFileKind,
  validateOfficialExtractionIndex,
} from "../extract-official-materials.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const INDEX = path.join(HERE, "..", "evidence", "official", "official-extraction-index.json");

test("archive paths cannot escape the derived cache", () => {
  assert.equal(assertSafeArchiveEntry("mp3/01.mp3"), "mp3/01.mp3");
  assert.throws(() => assertSafeArchiveEntry("../escape.txt"), /traversal/);
  assert.throws(() => assertSafeArchiveEntry("C:\\escape.txt"), /absolute/);
});

test("source type detection uses bytes before filenames", () => {
  assert.equal(detectFileKind(Buffer.from("%PDF-1.7"), "wrong.zip"), "pdf");
  assert.equal(detectFileKind(Buffer.from([0x50, 0x4b, 0x03, 0x04]), "wrong.pdf"), "zip");
  assert.equal(detectFileKind(Buffer.from("ID3"), "audio.mp3"), "audio");
});

test("checked-in extraction index covers every official material", async () => {
  const index = JSON.parse(await readFile(INDEX, "utf8"));
  const totals = await validateOfficialExtractionIndex(index);
  assert.equal(totals.materials, 246);
  assert.equal(totals.pdfSources, 233);
  assert.equal(totals.zipSources, 13);
  assert.equal(totals.renderedPages, totals.pages);
  assert(totals.zeroTextPages > 0);
  assert(totals.lowTextPages >= totals.zeroTextPages);
  assert(totals.pdfDocuments >= totals.pdfSources);
  assert(totals.audioMembers > 0);
});
