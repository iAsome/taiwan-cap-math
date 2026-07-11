(() => {
  "use strict";

  const syllabus = window.MATH_SYLLABUS_V2;
  const profile = window.MATH_V2_PRODUCTION_PROFILE;
  const engine = window.MATH_ENGINE_V2;
  const blueprints = window.MATH_QUIZ_BLUEPRINTS_V2;
  if (!syllabus || !profile || !engine || !Array.isArray(blueprints)) throw new Error("Math V2 bootstrap metadata is incomplete");

  const gradeName = grade => grade === 7 ? "國一" : grade === 8 ? "國二" : "國三";
  const units = syllabus.units.map(unit => {
    const skills = unit.topics.flatMap(topic => topic.skills);
    return Object.freeze({
      id: unit.numericId,
      unitId: unit.unitId,
      grade: Number(unit.gradeBand[0]),
      term: unit.gradeBand.includes("上") ? "上學期" : "下學期",
      gradeBand: unit.gradeBand,
      domain: unit.domain,
      title: unit.title,
      summary: unit.description,
      core: unit.coreGoal,
      clarify: unit.capScopeNote,
      formula: "各技能公式與適用條件列於下方講義。",
      derivation: "先理解定義與條件，再依各技能講義完成推導與驗算。",
      steps: ["辨認題目所屬技能", "整理已知條件與目標", "選擇適用性質或運算", "依序推導並保留必要單位", "回到原題檢查答案"],
      tips: skills.slice(0, 6).map(skill => `${skill.title}：${skill.learningObjectives[0]}`),
      skillCount: skills.length,
      legacyUnitIds: unit.legacyUnitIds.slice(),
      topics: unit.topics
    });
  });

  const unitByQuiz = new Map(blueprints.map(blueprint => [blueprint.quizId, units.find(unit => unit.unitId === blueprint.unitId)]));
  const quizCatalog = blueprints.map(blueprint => {
    const unit = unitByQuiz.get(blueprint.quizId);
    return Object.freeze({
      id: blueprint.quizId,
      quizId: blueprint.quizId,
      scope: "chapter",
      grade: unit.grade,
      term: unit.term,
      book: `${gradeName(unit.grade)}${unit.term[0]}`,
      chapter: unit.unitId.toUpperCase(),
      title: `${unit.title}單元小考`,
      minutes: blueprint.minutes,
      questionCount: blueprint.questionCount,
      unitIds: [unit.id],
      v2UnitId: unit.unitId,
      capUnitIds: unit.legacyUnitIds,
      officialCodes: `${unit.skillCount} 項技能｜Math V2 純文字四選一`
    });
  });

  const difficultyNumber = Object.freeze({ basic: 1, standard: 2, literacy: 3, advanced: 4 });
  const ability = Object.freeze({ basic: "concept", standard: "procedure", literacy: "application", advanced: "analysis" });

  function adaptQuestion(question) {
    const unit = units.find(item => item.unitId === question.unitId);
    return {
      ...question,
      v2UnitId: question.unitId,
      unitId: unit.id,
      answer: question.answerIndex,
      difficultyBand: question.difficulty,
      difficulty: difficultyNumber[question.difficulty] || 2,
      ability: ability[question.difficulty] || "application",
      formula: "",
      tip: question.steps.at(-1),
      trap: question.commonMistake,
      taxonomyTopic: engine.getSkill(question.skillId)?.title || "",
      quizLevel: question.difficulty === "literacy" ? "素養" : question.difficulty === "advanced" ? "進階" : ""
    };
  }

  async function generate(seed, level = 2) {
    const result = await engine.generateFullMock(seed, level);
    return {
      id: `MATH-V2-MOCK-${result.seed}-${result.level}`,
      seed: result.seed,
      level: result.level,
      title: "國中教育會考數學科模擬題本",
      minutes: result.minutes,
      blueprint: result.blueprintId,
      engineVersion: result.engineVersion,
      contentVersion: result.contentVersion,
      questions: result.questions.map(adaptQuestion)
    };
  }

  async function generateQuiz(quizId, seedOverride) {
    const catalog = quizCatalog.find(item => item.id === quizId);
    if (!catalog) throw new Error("找不到指定的小考");
    const seed = seedOverride == null ? Math.floor(Date.now() % 999999) || 1 : Number(seedOverride);
    const questions = await engine.generateUnitQuiz(catalog.v2UnitId, seed);
    return {
      kind: "quiz",
      id: `MATH-V2-QUIZ-${catalog.v2UnitId}-${seed}`,
      quizId,
      seed,
      title: catalog.title,
      grade: catalog.grade,
      term: catalog.term,
      chapter: catalog.chapter,
      scope: catalog.scope,
      minutes: catalog.minutes,
      questionCount: questions.length,
      officialCodes: catalog.officialCodes,
      unitIds: catalog.unitIds.slice(),
      v2UnitIds: [catalog.v2UnitId],
      blueprint: "math-v2-one-question-per-skill",
      engineVersion: engine.ENGINE_VERSION,
      contentVersion: engine.contentVersion,
      questions: questions.map(adaptQuestion)
    };
  }

  async function generateUnitDrill(unitId, seed, count = 1, level = 2, excludeKeys = []) {
    const questions = await engine.generateUnitDrill(unitId, seed, count, level, excludeKeys);
    return questions.map(adaptQuestion);
  }

  const storage = Object.freeze({
    readCompleted() {
      const completed = new Set();
      try {
        const v2 = JSON.parse(localStorage.getItem("capMath.v2.completed") || "[]");
        for (const id of v2) if (units.some(unit => unit.unitId === id)) completed.add(id);
      } catch {}
      try {
        const legacy = JSON.parse(localStorage.getItem("capMath.completed") || "[]");
        for (const legacyId of legacy) for (const unit of units) if (unit.legacyUnitIds.includes(Number(legacyId))) completed.add(unit.unitId);
      } catch {}
      return [...completed];
    },
    writeCompleted(unitIds) {
      const key = "capMath.v2.migration.1";
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify({ sourceKey: "capMath.completed", original: localStorage.getItem("capMath.completed") }));
      }
      localStorage.setItem("capMath.v2.completed", JSON.stringify([...new Set(unitIds)].filter(id => units.some(unit => unit.unitId === id))));
    },
    paperMetadata(exam) {
      return { engineVersion: exam.engineVersion || engine.ENGINE_VERSION, contentVersion: exam.contentVersion || engine.contentVersion, seed: exam.seed };
    },
    restorePaper(record) {
      return engine.restoreSavedPaper(record);
    }
  });

  window.MATH_LEGACY_SUPPORT_UNITS = window.MATH_DATA.units;
  window.MATH_DATA = { ...window.MATH_DATA, units };
  window.MATH_V2_STORAGE = storage;
  window.MATH_V2_PRODUCTION_MODE = true;
  window.EXAM_ENGINE = Object.freeze({
    generate,
    generateQuiz,
    generateUnitDrill,
    generateTopicDrill: async () => { throw new Error("V2 訂正題改由技能識別碼產生"); },
    generateCorrectionDrill: async (question, seed, count, excludeKeys) => (await engine.generateCorrectionDrill(question, seed, count, excludeKeys)).map(adaptQuestion),
    drillQuestionSignature: engine.drillQuestionSignature,
    quizCatalog,
    units,
    syllabus,
    profile,
    engine
  });
})();
