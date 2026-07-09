export const SKILL_DEFAULT = {
  required: true,
  difficultyBands: ["basic", "standard"],
  visualMode: "text-only",
  questionTarget: 12,
  notes: ""
};

export function skill(skillId, title, topicId, legacyRefs = [], extra = {}) {
  return {
    skillId,
    title,
    required: extra.required ?? SKILL_DEFAULT.required,
    difficultyBands: extra.difficultyBands ?? SKILL_DEFAULT.difficultyBands,
    visualMode: "text-only",
    legacyRefs,
    capBoundary: extra.capBoundary ?? "限國中會考範圍。",
    questionTarget: extra.questionTarget ?? SKILL_DEFAULT.questionTarget,
    notes: extra.notes ?? "會考基礎範圍",
  };
}

export function topic(topicId, title, skills) {
  return { topicId, title, skills };
}

export function unit(unitId, title, topics) {
  return { unitId, title, topics };
}

export function mkQuestion({ unitId, numericUnitId, topicId, skillId, skillSeq, variant, difficulty, text, choices, answerIndex, explanation, steps, commonMistake, concept, tags, estimatedTimeSec = 45 }) {
  const ss = String(skillSeq).padStart(3, "0");
  const vv = String(variant).padStart(3, "0");
  return {
    questionId: `${unitId}-s${ss}-v${vv}`,
    unitId,
    numericUnitId,
    topicId,
    skillId,
    difficulty,
    type: "mc",
    visualMode: "text-only",
    sourceScope: "CAP_108_JUNIOR_MATH",
    text,
    choices,
    answerIndex,
    explanation,
    steps,
    commonMistake,
    concept,
    tags,
    estimatedTimeSec
  };
}

export function mkLecture({ unitId, topicId, skillId, title, concept, formula, stepGuide, examples, commonMistakes, quizLink }) {
  return {
    unitId,
    topicId,
    skillId,
    title,
    concept,
    formula: formula ?? "",
    stepGuide,
    examples,
    commonMistakes,
    quizLink: quizLink ?? { unitId, skillId }
  };
}

export function writeJs(varName, data) {
  return `window.${varName} = ${JSON.stringify(data, null, 2)};\n`;
}
