import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  buildEnglishVocabularyAuthority,
  validateEnglishVocabularyAuthority,
} from "./english-vocabulary-authority.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

test("checked-in English vocabulary tables preserve the official source rows", async () => {
  const actual = JSON.parse(await readFile(path.join(HERE, "english-vocabulary-authority.json"), "utf8"));
  const expected = await buildEnglishVocabularyAuthority();
  assert.deepEqual(actual, expected);
  const result = await validateEnglishVocabularyAuthority(actual);
  assert.equal(result.basicSourceEntries, 1211);
  assert.equal(result.additionalSourceEntries, 794);
});

test("official grouped variants remain recognizable without changing source entries", async () => {
  const index = await buildEnglishVocabularyAuthority();
  const bySource = new Map(index.tables.basic1200.entries.map((entry) => [entry.sourceEntry, entry.forms]));
  assert.deepEqual(bySource.get("a/an"), ["a", "an"]);
  assert.deepEqual(bySource.get("be(am, is, are, was, were, been)"), ["am", "are", "be", "been", "is", "was", "were"]);
  assert.deepEqual(bySource.get("bicycle(bike)"), ["bicycle", "bike"]);
});

test("CAP scope uses Table 1 while Table 2 remains separately governed", async () => {
  const index = await buildEnglishVocabularyAuthority();
  assert.equal(index.capAssessmentTable, "appendix-5-table-1");
  assert.equal(index.usage.capQuestionDefault, "basic1200");
  assert.equal(index.usage.additional800, "broader-learning-only-when-explicitly-governed");
  assert.equal(index.usage.outsideBasic1200InReadingOrListening, "student-visible-glossary-required");
});
