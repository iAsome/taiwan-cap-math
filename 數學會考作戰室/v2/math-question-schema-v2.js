window.MATH_QUESTION_SCHEMA_V2 = (() => {
  const DIFFICULTIES = new Set(["basic", "standard", "advanced", "literacy"]);
  const HIGH_SCHOOL_RE = /微分|極限|三角函數|\bsin\b|\bcos\b|\btan\b|複數|指數函數|對數|nPr|nCr|二項式定理|導數|積分|矩陣|向量內積/i;
  const IMAGE_RE = /<img\b|<svg\b|canvas|!\[[^\]]*\]\([^)]+\)/i;
  const BAD_DISPLAY_RE = /<=|>=|!=/;
  const LOOK_AT_FIGURE_RE = /請看下圖|如下圖|如圖所示|見圖|附圖|圖中/;
  const REQUIRED = ["questionId", "unitId", "numericUnitId", "topicId", "skillId", "difficulty", "type", "visualMode", "sourceScope", "text", "choices", "answerIndex", "explanation", "steps", "commonMistake", "concept", "tags", "estimatedTimeSec"];

  function validateQuestion(q, ctx = {}) {
    const errors = [];
    if (!q || typeof q !== "object") return ["question must be object"];
    for (const k of REQUIRED) if (q[k] == null || q[k] === "") errors.push(`missing ${k}`);
    if (q.type !== "mc") errors.push("type must be mc");
    if (q.visualMode !== "text-only") errors.push("visualMode must be text-only");
    if (q.sourceScope !== "CAP_108_JUNIOR_MATH") errors.push("invalid sourceScope");
    if (!DIFFICULTIES.has(q.difficulty)) errors.push("invalid difficulty");
    if (!Array.isArray(q.choices) || q.choices.length !== 4) errors.push("choices must be length 4");
    else {
      const set = new Set(q.choices.map(String));
      if (set.size !== 4) errors.push("choices must be unique");
    }
    if (![0, 1, 2, 3].includes(q.answerIndex)) errors.push("answerIndex must be 0-3");
    if (!Array.isArray(q.steps) || q.steps.length < 2) errors.push("steps need >= 2");
    if (!Array.isArray(q.tags) || !q.tags.length) errors.push("tags required");
    if (IMAGE_RE.test(JSON.stringify(q))) errors.push("forbidden image markup");
    if (BAD_DISPLAY_RE.test([q.text, ...(q.choices || []), q.explanation, ...(q.steps || [])].join(" "))) errors.push("forbidden <= >= !=");
    if (HIGH_SCHOOL_RE.test([q.text, q.explanation, ...(q.steps || [])].join(" "))) errors.push("high-school vocabulary");
    const blob = [q.text, q.explanation, ...(q.steps || []), q.commonMistake].join(" ");
    if (LOOK_AT_FIGURE_RE.test(blob) && !/\d|坐標|長|寬|高|角|邊|點|表格|資料/.test(blob)) errors.push("figure reference without text description");
    if (ctx.unitIds && !ctx.unitIds.has(q.unitId)) errors.push(`unknown unitId ${q.unitId}`);
    if (ctx.skills && !ctx.skills.has(`${q.unitId}/${q.skillId}`)) errors.push(`unknown skill ${q.skillId}`);
    if (ctx.seenIds?.has(q.questionId)) errors.push(`duplicate questionId ${q.questionId}`);
    return errors;
  }

  function validateBank(questions, ctx) {
    const seen = new Set();
    const allErrors = [];
    for (const q of questions) {
      const errs = validateQuestion(q, { ...ctx, seenIds: seen });
      if (errs.length) allErrors.push({ questionId: q?.questionId, errors: errs });
      else seen.add(q.questionId);
    }
    return allErrors;
  }

  return { validateQuestion, validateBank, DIFFICULTIES, HIGH_SCHOOL_RE, IMAGE_RE };
})();
