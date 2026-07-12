#!/usr/bin/env node
import assert from "node:assert/strict";
import path from "node:path";
import { pathToFileURL } from "node:url";
import syllabus from "./v2-content/syllabus-source.mjs";
import profile, { UNIT_INVENTORY } from "./v2-qa/policies/math-v2-production-profile.mjs";

export function verifyProductionFoundation() {
  assert.equal(syllabus.units.length, profile.units);
  assert.equal(UNIT_INVENTORY.length, profile.units);
  const seenSkills = new Set();
  let skillCount = 0;
  for (const expected of UNIT_INVENTORY) {
    const unit = syllabus.units.find(row => row.unitId === expected.unitId);
    assert(unit, `missing ${expected.unitId}`);
    assert.equal(unit.title, expected.title);
    assert.equal(unit.numericId, Number(expected.unitId.slice(1)));
    const skills = unit.topics.flatMap(topic => topic.skills);
    assert.equal(skills.length, expected.skills, `${unit.unitId} skill count`);
    assert.equal(new Set(unit.topics.map(topic => topic.topicId)).size, unit.topics.length);
    assert.deepEqual(unit.topics.map(topic => topic.order), unit.topics.map((_, index) => index + 1));
    for (const [index, skill] of skills.entries()) {
      assert.equal(skill.order, index + 1);
      assert.equal(skill.required, true);
      assert.equal(skill.visualMode, "text-only");
      assert.equal(skill.questionTarget, profile.questionsPerSkill);
      assert.deepEqual(skill.difficultyBands, Object.keys(profile.difficultyCountsPerSkill));
      assert.equal(skill.topicId, unit.topics.find(topic => topic.skills.includes(skill)).topicId);
      assert(!/[、补边]/.test(skill.title), `${skill.skillId} invalid title`);
      assert(!seenSkills.has(skill.skillId), `duplicate skill ${skill.skillId}`);
      const earlier = new Set(skills.slice(0, index).map(row => row.skillId));
      for (const prerequisite of skill.prerequisiteSkillIds) assert(earlier.has(prerequisite), `${skill.skillId} late prerequisite ${prerequisite}`);
      seenSkills.add(skill.skillId);
    }
    skillCount += skills.length;
  }
  assert.equal(skillCount, profile.skills);
  assert.equal(UNIT_INVENTORY.reduce((sum, unit) => sum + unit.questions, 0), profile.questions);
  assert.equal(UNIT_INVENTORY.reduce((sum, unit) => sum + unit.lectures, 0), profile.lectures);
  return { units: syllabus.units.length, skills: skillCount, questions: profile.questions, lectures: profile.lectures };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) console.log(JSON.stringify(verifyProductionFoundation()));
