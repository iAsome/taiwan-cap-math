import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { buildAppendixEvidence, validateAppendixEvidence } from "./appendix-evidence.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

test("every social and natural learning-content node has fixed appendix evidence", async () => {
  const actual = JSON.parse(await readFile(path.join(HERE, "appendix-evidence.json"), "utf8"));
  const expected = await buildAppendixEvidence();
  assert.deepEqual(actual, expected);
  const counts = await validateAppendixEvidence(actual);
  assert.equal(counts.nodes, 436);
  assert(counts.blocks > 100);
  assert(counts.scopeLimitLines > 50);
});

test("critical junior-high depth exclusions are retained verbatim", async () => {
  const index = await buildAppendixEvidence();
  const texts = index.scopeLimitLines.map((entry) => entry.text);
  assert(texts.some((text) => text.includes("不涉及酸鹼滴定的濃度計算")));
  assert(texts.some((text) => text.includes("不涉及莫耳數和原子、分子數量轉換的計算")));
  assert(texts.some((text) => text.includes("毋須詳敘韓戰、越戰")));
  assert(texts.some((text) => text.includes("而非志願結社的類型")));
  const wrapped = index.scopeLimitLines.find((entry) => entry.line === 5790);
  assert(wrapped.context.includes("同素異形體的概 念，不必強調名詞的記憶"));
});

test("natural discipline mappings come from appendix section membership", async () => {
  const index = await buildAppendixEvidence();
  const chemistry = index.nodes.find((node) => node.authorityId === "AUTH-NATURAL-LC-JD-4-6");
  assert.deepEqual(chemistry.subjects, ["integrated_natural", "physics_chemistry"]);
  const civics = index.nodes.find((node) => node.authorityId === "AUTH-SOCIAL-LC-CIV-BD-4-1");
  assert.deepEqual(civics.subjects, ["civics", "integrated_social"]);
  const cross = index.nodes.find((node) => node.authorityId === "AUTH-NATURAL-LC-INC-4-1");
  assert.deepEqual(cross.subjects, ["integrated_natural"]);
});

test("junior-high appendix evidence excludes fifth-stage material", async () => {
  const index = await buildAppendixEvidence();
  for (const block of index.blocks) {
    assert(!block.excerpt.includes("-Ⅴ-"), `${block.id}: fifth-stage code leaked into excerpt`);
    assert(!block.excerpt.includes("普通型高中"), `${block.id}: senior-high label leaked into excerpt`);
    assert(!block.excerpt.includes("2.普通型高級中等學校"), `${block.id}: senior-high section leaked into excerpt`);
  }
});
