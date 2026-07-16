import assert from "node:assert/strict";

const DIFFICULTIES = Object.freeze([
  "foundation", "foundation", "foundation",
  "standard", "standard", "standard", "standard",
  "advanced", "advanced", "advanced",
  "transfer", "transfer",
]);

function number(value) {
  return String(value).padStart(3, "0");
}

export function lecture(skillNumber, content) {
  const skillId = `EARTH_R4_S${number(skillNumber)}`;
  const id = `EARTH_R4_L_S${number(skillNumber)}`;
  return {
    id,
    skillId,
    ...content,
    sections: content.sections.map((section, index) => ({
      id: `${id}_SEC_${String(index + 1).padStart(2, "0")}`,
      ...section,
    })),
  };
}

export function question(stem, options, answerIndex, reasons, reviews, cognitiveProcess, representationType, misconceptionTargets, assets = []) {
  assert.equal(options.length, 4, "Earth Science questions require four options");
  assert.equal(reasons.length, 4, "Earth Science questions require one reason per option");
  assert.equal(reviews.length, 2, "Earth Science questions require two independent reviews");
  return { stem, options, answerIndex, reasons, reviews, cognitiveProcess, representationType, misconceptionTargets, assets };
}

export function skillQuestions(skillNumber, values) {
  assert.equal(values.length, 12, `EARTH_R4_S${number(skillNumber)}: expected 12 authored skill questions`);
  return values.map((value, index) => ({
    id: `EARTH_R4_Q_${number(skillNumber)}_${String(index + 1).padStart(2, "0")}`,
    skillId: `EARTH_R4_S${number(skillNumber)}`,
    stimulusId: null,
    difficulty: DIFFICULTIES[index],
    ...value,
  }));
}

export function stimulusSet(skillNumber, value) {
  assert.equal(value.questions.length, 3, `EARTH_R4_S${number(skillNumber)}: expected three authored stimulus questions`);
  const stimulusId = `EARTH_R4_ST_${number(skillNumber)}`;
  const skillId = `EARTH_R4_S${number(skillNumber)}`;
  return {
    stimulus: {
      id: stimulusId,
      skillId,
      type: value.type,
      content: value.content,
      accessibility: value.accessibility,
      assets: value.assets ?? [],
    },
    questions: value.questions.map((item, index) => ({
      id: `EARTH_R4_SQ_${number(skillNumber)}_${String(index + 1).padStart(2, "0")}`,
      skillId,
      stimulusId,
      difficulty: ["standard", "advanced", "transfer"][index],
      ...item,
    })),
  };
}

export function unitSource(unitId, lectures, questions, stimulusSets, assets = []) {
  return {
    unitId,
    lectures,
    questions,
    stimuli: stimulusSets.map((value) => value.stimulus),
    stimulusQuestions: stimulusSets.flatMap((value) => value.questions),
    assets,
  };
}
