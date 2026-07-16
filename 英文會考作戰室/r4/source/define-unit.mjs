import assert from "node:assert/strict";

const DIFFICULTIES = ["foundation", "foundation", "foundation", "standard", "standard", "standard", "standard", "advanced", "advanced", "advanced", "transfer", "transfer"];

export function defineEnglishUnit({ unitId, skills, vocabularyPolicy }) {
  assert.match(unitId, /^ENG_R4_U\d{2}$/);
  const lectures = skills.map((skill) => {
    assert.equal(skill.examples.length, 3, `${skill.id}: three worked examples required`);
    assert.equal(skill.misconceptions.length, 4, `${skill.id}: four misconceptions required`);
    assert.equal(skill.checks.length, 3, `${skill.id}: three checks required`);
    const number = skill.id.slice(-3);
    return {
      id: `ENG_R4_L_${number}`,
      skillId: skill.id,
      objectives: skill.objectives,
      sections: skill.sections.map(([title, content], index) => ({ id: `${unitId}_${skill.id}_SEC_${index + 1}`, title, content })),
      workedExamples: skill.examples.map(([prompt, steps, answer, why], index) => ({ id: `${unitId}_${skill.id}_EX_${index + 1}`, prompt, steps, answer, why })),
      misconceptions: skill.misconceptions.map(([belief, whyWrong, correction]) => ({ belief, whyWrong, correction })),
      checks: skill.checks.map(([prompt, answer, reason]) => ({ prompt, answer, reason })),
      assets: [],
    };
  });
  const questions = skills.flatMap((skill) => {
    assert.equal(skill.questions.length, 12, `${skill.id}: twelve questions required`);
    return skill.questions.map((item, index) => {
      const [stem, options, answerIndex, correctReason, wrongReasons, representationType, operation, misconception] = item;
      assert.equal(options.length, 4, `${skill.id} question ${index + 1}: four options required`);
      assert.equal(wrongReasons.length, 3, `${skill.id} question ${index + 1}: three distractor reasons required`);
      const correct = options[answerIndex];
      let wrongIndex = 0;
      return {
        id: `ENG_R4_Q_${skill.id.slice(-3)}_${String(index + 1).padStart(2, "0")}`,
        skillId: skill.id,
        stem,
        options,
        answerIndex,
        reasons: options.map((option, optionIndex) => optionIndex === answerIndex ? `${option}：${correctReason}` : `${option}：${wrongReasons[wrongIndex++]}`),
        reviews: [
          `先遮住選項，依「${skill.evidence}」可推出 ${correct}；再核對題面每個線索，答案索引一致。`,
          `把四個選項逐一代回原文，只有 ${correct} 能同時滿足句法與全文意思；另外三項各有明確衝突，沒有第二答案。`,
        ],
        difficulty: DIFFICULTIES[index],
        cognitiveProcess: [skill.process, operation],
        representationType,
        misconceptionTargets: [misconception],
      };
    });
  });
  return { unitId, lectures, questions, vocabularyPolicy };
}
