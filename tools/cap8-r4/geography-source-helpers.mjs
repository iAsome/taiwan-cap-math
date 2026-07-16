import assert from "node:assert/strict";

export function geographyLecture(value) {
  assert(value && typeof value === "object", "lecture source must be an object");
  return value;
}

export function geographyQuestion(value) {
  assert(value && typeof value === "object", "question source must be an object");
  assert.equal(value.options?.length, 4, `${value.id}: exactly four authored options required`);
  assert.equal(value.reasons?.length, 4, `${value.id}: exactly four authored option reasons required`);
  assert.equal(value.reviews?.length, 2, `${value.id}: exactly two authored reviews required`);
  return value;
}

export function geographyStimulus(value) {
  assert(value && typeof value === "object", "stimulus source must be an object");
  assert(value.content && typeof value.content === "object", `${value.id}: structured content required`);
  assert(value.accessibility && typeof value.accessibility === "object", `${value.id}: accessibility record required`);
  return value;
}

function questionId(skillId, suffix) {
  return `GEO_R4_Q_${skillId.slice("GEO_R4_".length)}_${suffix}`;
}

function authoredQuestion([stem, options, answerIndex, reasons, reviews, difficulty, cognitiveProcess, representationType, misconceptionTargets = [], assets = []], targetAnswerIndex) {
  const shift = (targetAnswerIndex - answerIndex + 4) % 4;
  const rotate = (values) => values.map((_, index) => values[(index - shift + 4) % 4]);
  return { stem, options: rotate(options), answerIndex: targetAnswerIndex, reasons: rotate(reasons), reviews, difficulty, cognitiveProcess, representationType, misconceptionTargets, assets };
}

export function geographyAuthoredUnit({ unitId, skills, assets = [] }) {
  assert.match(unitId, /^GEO_R4_U\d{2}$/u, `${unitId}: invalid unit ID`);
  assert(Array.isArray(skills) && skills.length > 0, `${unitId}: authored skills required`);
  const lectures = [];
  const questions = [];
  const stimuli = [];
  for (const skill of skills) {
    const lectureId = `GEO_R4_L_${skill.skillId.slice("GEO_R4_".length)}`;
    assert.equal(skill.questions.length, 12, `${skill.skillId}: twelve standalone questions required`);
    assert.equal(skill.stimulusQuestions.length, 3, `${skill.skillId}: three stimulus questions required`);
    lectures.push(geographyLecture({
      id: lectureId,
      skillId: skill.skillId,
      objectives: skill.lecture.objectives,
      sections: skill.lecture.sections.map(([title, content], index) => ({ id: `${lectureId}_SEC${String(index + 1).padStart(2, "0")}`, title, content })),
      workedExamples: skill.lecture.workedExamples.map(([prompt, steps, answer, why], index) => ({ id: `${lectureId}_EX${String(index + 1).padStart(2, "0")}`, prompt, steps, answer, why })),
      misconceptions: skill.lecture.misconceptions.map(([belief, whyWrong, correction]) => ({ belief, whyWrong, correction })),
      checks: skill.lecture.checks.map(([prompt, answer, reason]) => ({ prompt, answer, reason })),
      assets: skill.lecture.assets ?? [],
    }));
    questions.push(...skill.questions.map((value, index) => geographyQuestion({
      id: questionId(skill.skillId, String(index + 1).padStart(2, "0")),
      skillId: skill.skillId,
      ...authoredQuestion(value, index % 4),
    })));
    const stimulusId = `GEO_R4_ST${skill.skillId.slice(-3)}`;
    stimuli.push(geographyStimulus({ id: stimulusId, skillId: skill.skillId, ...skill.stimulus }));
    questions.push(...skill.stimulusQuestions.map((value, index) => geographyQuestion({
      id: questionId(skill.skillId, `ST${String(index + 1).padStart(2, "0")}`),
      skillId: skill.skillId,
      stimulusId,
      ...authoredQuestion(value, (index + 1) % 4),
    })));
  }
  return Object.freeze({ unitId, lectures, questions, stimuli, assets });
}
