import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadV2Context, loadV1Taxonomy } from "./v2-load.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const w = loadV2Context();
const map = w.MATH_MIGRATION_MAP;
const tax = loadV1Taxonomy();
const v1Keys = new Set();
for (const [quizId, chapter] of Object.entries(tax)) {
  for (const sec of chapter.sections) for (const tp of sec.topics) v1Keys.add(`${quizId}/${tp.id}`);
}

const skillIds = new Set();
for (const u of w.MATH_SYLLABUS_V2.units) {
  for (const t of u.topics) for (const s of t.skills) {
    skillIds.add(s.skillId);
    for (const ref of s.legacyRefs || []) {
      assert.ok(v1Keys.has(ref), `syllabus legacyRef missing in v1: ${ref} (${s.skillId})`);
    }
  }
}

assert.equal(map.unitMap["1"]?.[0], "u01");
assert.equal(map.unitMap["5"]?.[0], "u03");
assert.ok(!Object.values(map.unitMap).flat().includes("u27"));
assert.ok(map.deprecatedLegacyTopics.some(d => d.legacyUnitId === 27));

const detailed = ["g7-1-c1", "g7-1-c2", "g7-1-c3", "g7-2-c1"];
for (const quizId of detailed) {
  for (const tp of tax[quizId].sections.flatMap(s => s.topics)) {
    const key = `${quizId}/${tp.id}`;
    assert.ok(map.topicMap[key], `missing detailed map ${key}`);
    assert.ok(skillIds.has(map.topicMap[key].v2SkillId), `bad skill ${key}`);
    assert.equal(map.topicMap[key].action, "reuse-after-schema-conversion");
  }
}

const g8 = map.topicMap["g8-1-c5/*"];
assert.ok(g8);
assert.equal(g8.action, "rewrite-required");
assert.equal(g8.reason, "no-v1-taxonomy");

const invalidPath = path.join(root, "v2", "math-migration-invalid-legacy-refs.json");
assert.ok(fs.existsSync(invalidPath), "missing invalid legacy refs report");

console.log("verify-v2-migration-map: OK", {
  topicMap: Object.keys(map.topicMap).length,
  detailedTopics: detailed.reduce((n, q) => n + tax[q].sections.flatMap(s => s.topics).length, 0),
  invalidLegacyRefsFile: invalidPath
});
