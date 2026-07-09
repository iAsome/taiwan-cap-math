import assert from "node:assert/strict";
import { loadV2Context, loadedBankUnits } from "./v2-load.mjs";
import {
  countZh,
  hasBannedText,
  hasU04BannedText,
  hasU05BannedText,
  u05HasSlopeContent,
  U05_IMAGE_PHRASES,
  BANNED_LECTURE_STEP_PHRASES,
  BANNED_MISTAKE_PHRASES
} from "./v2-quality.mjs";

const w = loadV2Context();
const bankUnits = loadedBankUnits();

function collectLectures(uid) {
  return w[`MATH_LECTURE_V2_${uid.toUpperCase()}`] || [];
}

function collectBank(uid) {
  return w[`MATH_QUESTION_BANK_V2_${uid.toUpperCase()}`] || [];
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

function assertUnitLectures(uid, count) {
  const unit = w.MATH_SYLLABUS_V2.units.find(u => u.unitId === uid);
  const skills = new Set();
  for (const t of unit.topics) for (const s of t.skills) skills.add(`${uid}/${s.skillId}`);
  assert.equal(collectLectures(uid).length, count, `${uid} needs ${count} lectures`);
  for (const key of skills) {
    assert.ok(collectLectures(uid).some(l => `${l.unitId}/${l.skillId}` === key), `missing ${uid} lecture ${key}`);
  }
}

if (bankUnits.includes("u04")) assertUnitLectures("u04", 14);
if (bankUnits.includes("u05")) assertUnitLectures("u05", 12);
if (bankUnits.includes("u06")) assertUnitLectures("u06", 12);
if (bankUnits.includes("u07")) assertUnitLectures("u07", 12);

assert.equal(collectLectures("u01").length + collectLectures("u02").length + collectLectures("u03").length, 45);

const bankBySkill = new Map();
for (const uid of bankUnits) {
  for (const q of collectBank(uid)) {
    if (!bankBySkill.has(q.skillId)) bankBySkill.set(q.skillId, []);
    bankBySkill.get(q.skillId).push(q.explanation);
  }
}

function exampleText(ex) {
  return ex.explanation || ex.why || "";
}

for (const l of lectures) {
  const isFullUnit = l.unitId === "u04" || l.unitId === "u05" || l.unitId === "u06" || l.unitId === "u07";
  const isU04U05 = l.unitId === "u04" || l.unitId === "u05";
  const minConcept = isFullUnit ? 80 : 40;
  const minEx = isFullUnit ? 40 : 30;
  const minSteps = isFullUnit ? 5 : 4;
  const minMistakes = isFullUnit ? 4 : 2;

  assert.ok(countZh(l.concept) >= minConcept, `${l.skillId} concept too short (${countZh(l.concept)})`);
  if (l.unitId === "u05") {
    assert.ok(!hasU05BannedText(l.concept), `${l.skillId} u05 banned concept`);
    assert.ok(!u05HasSlopeContent(l.concept), `${l.skillId} u05 slope in concept`);
    assert.ok(!u05HasSlopeContent(l.formula), `${l.skillId} u05 slope in formula`);
  }
  assert.ok(l.stepGuide?.length >= minSteps, `${l.skillId} stepGuide need ${minSteps} steps`);
  for (const step of l.stepGuide) {
    assert.ok(!BANNED_LECTURE_STEP_PHRASES.some(p => step.includes(p)), `${l.skillId} banned stepGuide`);
    assert.ok(!hasBannedText(step), `${l.skillId} banned stepGuide phrase`);
    if (isU04U05) {
      assert.ok(!hasU04BannedText(step), `${l.skillId} banned stepGuide: ${hasU04BannedText(step)}`);
      if (l.unitId === "u05") {
        assert.ok(!hasU05BannedText(step), `${l.skillId} u05 banned stepGuide: ${hasU05BannedText(step)}`);
        assert.ok(!u05HasSlopeContent(step), `${l.skillId} u05 slope in stepGuide`);
        for (const p of U05_IMAGE_PHRASES) assert.ok(!step.includes(p), `${l.skillId} image in stepGuide`);
      }
    }
  }
  assert.ok(l.examples?.length >= 2, `${l.skillId} needs 2 examples`);
  const exStarts = new Set();
  const bankExplanations = bankBySkill.get(l.skillId) || [];
  l.examples.forEach((ex, i) => {
    const exText = exampleText(ex);
    if (l.unitId !== "u07") {
      assert.ok(countZh(exText) >= minEx, `${l.skillId} example ${i} (${countZh(exText)} chars)`);
      assert.ok(!hasBannedText(exText), `${l.skillId} example ${i} banned`);
    }
    if (isU04U05) {
      assert.ok(!hasU04BannedText(exText), `${l.skillId} example ${i} banned`);
      assert.ok(!bankExplanations.includes(exText), `${l.skillId} example ${i} copies bank explanation`);
      if (l.unitId === "u05") {
        assert.ok(!hasU05BannedText(exText), `${l.skillId} example ${i} u05 banned`);
        assert.ok(!u05HasSlopeContent(exText), `${l.skillId} example ${i} u05 slope`);
        for (const p of U05_IMAGE_PHRASES) assert.ok(!exText.includes(p), `${l.skillId} image in example`);
      }
    }
    exStarts.add(exText.slice(0, 12));
  });
  assert.equal(exStarts.size, 2, `${l.skillId} example explanation openings duplicated`);
  assert.ok(l.commonMistakes?.length >= minMistakes, `${l.skillId} needs ${minMistakes} commonMistakes`);
  for (const m of l.commonMistakes) {
    for (const p of BANNED_MISTAKE_PHRASES) assert.ok(!m.includes(p), `${l.skillId} generic mistake`);
    if (isU04U05) {
      assert.ok(!hasU04BannedText(m), `${l.skillId} banned mistake`);
      if (l.unitId === "u05") assert.ok(!hasU05BannedText(m), `${l.skillId} u05 banned mistake`);
    }
  }
}

console.log("verify-v2-lecture: OK", { lectures: lectures.length, units: bankUnits });
