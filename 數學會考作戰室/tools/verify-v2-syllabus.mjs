import assert from "node:assert/strict";
import { loadV2Context } from "./v2-load.mjs";
import { SKILL_MINIMUMS } from "./v2-syllabus-expand.mjs";
import {
  countZh,
  hasBannedStep,
  conceptQuality,
  explanationQuality,
  BANNED_LECTURE_STEP_PHRASES
} from "./v2-quality.mjs";

const w = loadV2Context();
const units = w.MATH_UNITS_V2;
const syllabus = w.MATH_SYLLABUS_V2;

assert.equal(units.length, 23, "need 23 units");
for (let i = 1; i <= 23; i++) {
  const id = `u${String(i).padStart(2, "0")}`;
  assert.ok(units.some(u => u.unitId === id), `missing ${id}`);
}
assert.ok(!units.some(u => u.unitId === "u27" || /綜合情境/.test(u.title)), "unit 27 must not appear");

const skillIds = new Set();
let totalSkills = 0;
for (const u of syllabus.units) {
  const n = u.topics.reduce((a, t) => a + t.skills.length, 0);
  totalSkills += n;
  const min = SKILL_MINIMUMS[u.unitId] || 0;
  assert.ok(n >= min, `${u.unitId} has ${n} skills, need >= ${min}`);
  assert.ok(u.topics?.length >= 1, `${u.unitId} needs topics`);
  for (const t of u.topics) {
    assert.ok(t.skills?.length >= 1, `${u.unitId}/${t.topicId} needs skills`);
    for (const s of t.skills) {
      assert.ok(s.capBoundary, `${s.skillId} needs capBoundary`);
      assert.ok(s.notes, `${s.skillId} needs notes`);
      assert.ok(s.questionTarget, `${s.skillId} needs questionTarget`);
      assert.ok(Array.isArray(s.difficultyBands) && s.difficultyBands.length, `${s.skillId} difficultyBands`);
      assert.equal(s.visualMode, "text-only", `${s.skillId} visualMode`);
      assert.ok(!skillIds.has(s.skillId), `duplicate skillId ${s.skillId}`);
      skillIds.add(s.skillId);
    }
  }
}
assert.ok(totalSkills >= 330, `need >= 330 skills, got ${totalSkills}`);

console.log("verify-v2-syllabus: OK", { units: units.length, skills: skillIds.size });
