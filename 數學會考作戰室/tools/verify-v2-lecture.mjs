import assert from "node:assert/strict";
import { loadV2Context, OLD_TEMPLATE_RE } from "./v2-load.mjs";
import {
  countZh,
  hasBannedText,
  BANNED_LECTURE_STEP_PHRASES,
  BANNED_MISTAKE_PHRASES
} from "./v2-quality.mjs";

const w = loadV2Context();
const pilotSkills = new Set();
for (const uid of ["u01", "u02", "u03"]) {
  const unit = w.MATH_SYLLABUS_V2.units.find(u => u.unitId === uid);
  for (const t of unit.topics) for (const s of t.skills) pilotSkills.add(`${uid}/${s.skillId}`);
}

const lectures = [
  ...w.MATH_LECTURE_V2_U01,
  ...w.MATH_LECTURE_V2_U02,
  ...w.MATH_LECTURE_V2_U03
];

assert.equal(lectures.length, 45, "45 pilot lectures");

const lectureSkills = new Set(lectures.map(l => `${l.unitId}/${l.skillId}`));
for (const key of pilotSkills) assert.ok(lectureSkills.has(key), `missing lecture ${key}`);
for (const l of lectures) {
  assert.ok(pilotSkills.has(`${l.unitId}/${l.skillId}`), `orphan lecture ${l.skillId}`);
  assert.ok(countZh(l.concept) >= 40, `${l.skillId} concept too short`);
  assert.ok(l.stepGuide?.length >= 4, `${l.skillId} stepGuide need 4 steps`);
  for (const step of l.stepGuide) {
    assert.ok(!BANNED_LECTURE_STEP_PHRASES.some(p => step.includes(p)), `${l.skillId} banned stepGuide: ${step}`);
    assert.ok(!hasBannedText(step), `${l.skillId} banned stepGuide phrase`);
  }
  assert.ok(l.examples?.length >= 2, `${l.skillId} needs 2 examples`);
  const exStarts = new Set();
  l.examples.forEach((ex, i) => {
    assert.ok(countZh(ex.explanation) >= 30, `${l.skillId} example ${i}`);
    assert.ok(!hasBannedText(ex.explanation), `${l.skillId} example ${i} banned: ${hasBannedText(ex.explanation)}`);
    exStarts.add(ex.explanation.slice(0, 12));
  });
  assert.equal(exStarts.size, 2, `${l.skillId} example explanation openings duplicated`);
  assert.ok(l.commonMistakes?.length >= 2, `${l.skillId} needs 2 commonMistakes`);
  for (const m of l.commonMistakes) {
    for (const p of BANNED_MISTAKE_PHRASES) assert.ok(!m.includes(p), `${l.skillId} generic mistake`);
  }
  const blob = JSON.stringify(l);
  assert.ok(!OLD_TEMPLATE_RE.test(blob), `${l.skillId} old template text`);
}

console.log("verify-v2-lecture: OK", { lectures: lectures.length });
