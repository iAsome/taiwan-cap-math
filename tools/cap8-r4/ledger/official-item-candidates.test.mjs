import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  buildOfficialItemCandidates,
  validateOfficialItemCandidates,
} from "./official-item-candidates.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const EXTRACTION_INDEX = path.join(HERE, "..", "evidence", "official", "official-extraction-index.json");
const CANDIDATES = path.join(HERE, "official-item-candidates.json");

test("official answer and page locators are deterministic without semantic claims", async () => {
  const extraction = JSON.parse(await readFile(EXTRACTION_INDEX, "utf8"));
  const expected = await buildOfficialItemCandidates(extraction);
  const actual = JSON.parse(await readFile(CANDIDATES, "utf8"));
  assert.deepEqual(actual, expected);
  assert.deepEqual(await validateOfficialItemCandidates(actual, extraction), {
    exams: 13,
    items: 3178,
    selectionItems: 3139,
    constructedResponseItems: 26,
    writingItems: 13,
    listeningItems: 231,
    mainItems: 2449,
    alternateItems: 729,
  });
  for (const item of actual.exams.flatMap((exam) => exam.items)) {
    assert.equal(item.reviewStatus, "locator-extracted-unreviewed");
    assert.equal("curriculumCodes" in item, false);
    assert.equal("skills" in item, false);
    assert.equal("finalAudit" in item, false);
  }
});

test("109 main exam has no listening paper while 110 and 112 alternate exams do", async () => {
  const actual = JSON.parse(await readFile(CANDIDATES, "utf8"));
  const papers = (id) => new Set(actual.exams.find((exam) => exam.examId === id).items.map((item) => item.paper));
  assert.equal(papers("CAP-109-MAIN").has("english_listening"), false);
  assert.equal(papers("CAP-110-ALTERNATE").has("english_listening"), true);
  assert.equal(papers("CAP-112-ALTERNATE").has("english_listening"), true);
});
