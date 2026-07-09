import assert from "node:assert/strict";
import { loadV2Context } from "./v2-load.mjs";

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
for (const u of syllabus.units) {
  assert.ok(u.topics?.length >= 1, `${u.unitId} needs topics`);
  for (const t of u.topics) {
    assert.ok(t.skills?.length >= 1, `${u.unitId}/${t.topicId} needs skills`);
    for (const s of t.skills) {
      assert.ok(s.capBoundary, `${s.skillId} needs capBoundary`);
      assert.equal(s.visualMode, "text-only", `${s.skillId} visualMode`);
      assert.ok(!skillIds.has(s.skillId), `duplicate skillId ${s.skillId}`);
      skillIds.add(s.skillId);
    }
  }
}

console.log("verify-v2-syllabus: OK", { units: units.length, skills: skillIds.size });
