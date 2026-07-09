import assert from "node:assert/strict";
import { loadV2Context, loadedBankUnits } from "./v2-load.mjs";
import {
  countZh,
  hasBannedText,
  BANNED_LECTURE_STEP_PHRASES,
  BANNED_MISTAKE_PHRASES
} from "./v2-quality.mjs";

const w = loadV2Context();
const bankUnits = loadedBankUnits();

function collectLectures(uid) {
  return w[`MATH_LECTURE_V2_${uid.toUpperCase()}`] || [];
}

const pilotUnits = ["u01", "u02", "u03"];
const lectures = bankUnits.flatMap(collectLectures);

for (const uid of pilotUnits) {
  const unit = w.MATH_SYLLABUS_V2.units.find(u => u.unitId === uid);
  const skills = new Set();
  for (const t of unit.topics) for (const s of t.skills) skills.add(`${uid}/${s.skillId}`);
  const lecSkills = new Set(collectLectures(uid).map(l => `${l.unitId}/${l.skillId}`));
  for (const key of skills) assert.ok(lecSkills.has(key), `missing lecture ${key}`);
}

if (bankUnits.includes("u04")) {
  const u04 = w.MATH_SYLLABUS_V2.units.find(u => u.unitId === "u04");
  const skills = new Set();
  for (const t of u04.topics) for (const s of t.skills) skills.add(`u04/${s.skillId}`);
  assert.equal(collectLectures("u04").length, 14, "u04 needs 14 lectures");
  for (const key of skills) {
    assert.ok(collectLectures("u04").some(l => `${l.unitId}/${l.skillId}` === key), `missing u04 lecture ${key}`);
  }
}

assert.equal(collectLectures("u01").length + collectLectures("u02").length + collectLectures("u03").length, 45);

for (const l of lectures) {
  const isU04 = l.unitId === "u04";
  const minConcept = isU04 ? 60 : 40;
  const minEx = isU04 ? 40 : 30;
  const minMistakes = isU04 ? 3 : 2;

  assert.ok(countZh(l.concept) >= minConcept, `${l.skillId} concept too short (${countZh(l.concept)})`);
  assert.ok(l.stepGuide?.length >= 4, `${l.skillId} stepGuide need 4 steps`);
  for (const step of l.stepGuide) {
    assert.ok(!BANNED_LECTURE_STEP_PHRASES.some(p => step.includes(p)), `${l.skillId} banned stepGuide`);
    assert.ok(!hasBannedText(step), `${l.skillId} banned stepGuide phrase`);
  }
  assert.ok(l.examples?.length >= 2, `${l.skillId} needs 2 examples`);
  const exStarts = new Set();
  l.examples.forEach((ex, i) => {
    assert.ok(countZh(ex.explanation) >= minEx, `${l.skillId} example ${i} (${countZh(ex.explanation)} chars)`);
    assert.ok(!hasBannedText(ex.explanation), `${l.skillId} example ${i} banned`);
    exStarts.add(ex.explanation.slice(0, 12));
  });
  assert.equal(exStarts.size, 2, `${l.skillId} example explanation openings duplicated`);
  assert.ok(l.commonMistakes?.length >= minMistakes, `${l.skillId} needs ${minMistakes} commonMistakes`);
  for (const m of l.commonMistakes) {
    for (const p of BANNED_MISTAKE_PHRASES) assert.ok(!m.includes(p), `${l.skillId} generic mistake`);
  }
}

console.log("verify-v2-lecture: OK", { lectures: lectures.length, units: bankUnits });
