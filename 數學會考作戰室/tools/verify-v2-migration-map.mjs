import assert from "node:assert/strict";
import { loadV2Context, loadV1Taxonomy } from "./v2-load.mjs";

const w = loadV2Context();
const map = w.MATH_MIGRATION_MAP;
const tax = loadV1Taxonomy();
const skillIds = new Set();
for (const u of w.MATH_SYLLABUS_V2.units) {
  for (const t of u.topics) for (const s of t.skills) skillIds.add(s.skillId);
}

assert.equal(map.unitMap["1"]?.[0], "u01");
assert.equal(map.unitMap["2"]?.[0], "u01");
assert.equal(map.unitMap["3"]?.[0], "u02");
assert.equal(map.unitMap["4"]?.[0], "u02");
assert.equal(map.unitMap["5"]?.[0], "u03");
assert.ok(!Object.values(map.unitMap).flat().includes("u27"));
assert.ok(map.deprecatedLegacyTopics.some(d => d.legacyUnitId === 27));

const detailed = ["g7-1-c1", "g7-1-c2", "g7-1-c3"];
for (const quizId of detailed) {
  const topics = tax[quizId].sections.flatMap(s => s.topics);
  for (const tp of topics) {
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

console.log("verify-v2-migration-map: OK", {
  topicMap: Object.keys(map.topicMap).length,
  detailedTopics: detailed.reduce((n, q) => n + tax[q].sections.flatMap(s => s.topics).length, 0)
});
