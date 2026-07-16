(() => {
  const ROOT = "r4/runtime";
  const cache = new Map();
  const difficulty = { foundation: 1, standard: 2, advanced: 3, transfer: 4 };
  let catalog;
  let manifest;
  let stimuli;
  let stimulusQuestions;
  let assets;
  let writingTasks;

  async function json(relativePath) {
    if (!cache.has(relativePath)) cache.set(relativePath, fetch(`${ROOT}/${relativePath}`).then(response => {
      if (!response.ok) throw new Error(`${relativePath}: HTTP ${response.status}`);
      return response.json();
    }));
    return cache.get(relativePath);
  }

  function random(seed) {
    let value = Number(seed) >>> 0;
    return () => {
      value += 0x6d2b79f5;
      let t = value;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function ordered(records, seed) {
    const result = [...records];
    const next = random(seed);
    for (let index = result.length - 1; index > 0; index--) {
      const target = Math.floor(next() * (index + 1));
      [result[index], result[target]] = [result[target], result[index]];
    }
    return result;
  }

  function numericSuffix(id) { return Number(id.match(/\d+(?=\D*$)/u)?.[0] || 0); }

  function unitRecord(unitId) { return catalog.units.find(({ id }) => id === unitId); }
  function skillRecord(skillId) { return catalog.skills.find(({ id }) => id === skillId); }

  async function loadUnit(unitId) {
    if (!unitRecord(unitId)) throw new Error(`找不到單元 ${unitId}`);
    return json(`units/${unitId}.json`);
  }

  async function loadAssets() {
    assets ??= await json("assets.json");
    return assets;
  }

  async function assetRecords(ids = []) {
    const index = new Map((await loadAssets()).map(record => [record.id, record]));
    return ids.map(id => index.get(id)).filter(Boolean).map(record => ({ ...record, url: `${ROOT}/${record.file}` }));
  }

  async function adaptQuestion(question, extra = {}) {
    const skill = skillRecord(question.skillIds[0]);
    const unit = skill ? unitRecord(skill.unitId) : null;
    const correctReason = question.optionRationales[question.answerIndex].reason;
    return {
      id: question.id,
      staticQuestionId: question.id,
      r4UnitId: unit?.id || extra.r4UnitId || null,
      unitId: numericSuffix(unit?.id || extra.r4UnitId),
      unitTitle: unit?.title || extra.unitTitle || "共用選文",
      skillTitle: skill?.title || extra.skillTitle || "跨技能閱讀",
      text: question.stem,
      choices: [...question.options],
      answer: question.answerIndex,
      steps: question.optionRationales.map((record, index) => `${"ABCD"[index]}：${record.reason}`),
      concept: skill?.title || question.representationType,
      formula: correctReason,
      tip: question.independentReviews[0]?.evidence || correctReason,
      trap: question.misconceptionTargets.join("；"),
      difficulty: difficulty[question.difficulty] || 2,
      ability: question.cognitiveProcess.includes("infer") ? "infer" : question.cognitiveProcess.includes("identify") ? "identify" : "comprehend",
      passageId: extra.passageId || null,
      passageTitle: extra.passageTitle || null,
      passage: extra.passage || null,
      assets: await assetRecords([...(extra.assets || []), ...question.assets]),
    };
  }

  async function unitAssessment(unitId, seed) {
    const unit = await loadUnit(unitId);
    const unitMeta = unitRecord(unitId);
    const skillOrder = ordered(unitMeta.skillIds, Number(seed) + numericSuffix(unitId));
    const pools = new Map(skillOrder.map((skillId, index) => [skillId, ordered(unit.questions.filter(question => question.skillIds[0] === skillId), Number(seed) + index * 997)]));
    const selected = [];
    for (let round = 0; selected.length < 12; round++) {
      for (const skillId of skillOrder) {
        const question = pools.get(skillId)[round];
        if (question) selected.push(question);
        if (selected.length === 12) break;
      }
    }
    return {
      kind: "quiz",
      id: `R4-UNIT-${unitId}-${seed}`,
      quizId: `r4-unit-${String(numericSuffix(unitId)).padStart(2, "0")}`,
      seed: Number(seed),
      title: `${unitMeta.title}｜靜態單元小考`,
      grade: 9,
      term: "第四學習階段",
      scope: "r4-unit",
      minutes: 20,
      officialCodes: "第四學習階段國語文課綱",
      unitIds: [unitId],
      blueprint: "reviewed-static-id-selection",
      questions: await Promise.all(ordered(selected, Number(seed) + 41).map(adaptQuestion)),
    };
  }

  async function skillAssessment(skillId, seed) {
    const skill = skillRecord(skillId);
    if (!skill) throw new Error(`找不到技能 ${skillId}`);
    const unit = await loadUnit(skill.unitId);
    const selected = ordered(unit.questions.filter(question => question.skillIds[0] === skillId), Number(seed));
    return {
      kind: "quiz",
      id: `R4-SKILL-${skillId}-${seed}`,
      quizId: `r4-skill-${String(numericSuffix(skillId)).padStart(3, "0")}`,
      seed: Number(seed),
      title: `${skill.title}｜12 題技能練習`,
      grade: 9,
      term: "第四學習階段",
      scope: "r4-skill",
      minutes: 18,
      officialCodes: "第四學習階段國語文課綱",
      unitIds: [skill.unitId],
      blueprint: "reviewed-static-id-selection",
      questions: await Promise.all(selected.map(adaptQuestion)),
    };
  }

  async function mockAssessment(seed) {
    stimuli ??= await json("stimuli.json");
    stimulusQuestions ??= await json("stimulus-questions.json");
    const chosenStimuli = ordered(stimuli, Number(seed)).slice(0, 7);
    const shared = [];
    for (const stimulus of chosenStimuli) {
      const questions = stimulusQuestions.filter(question => question.stimulusId === stimulus.id);
      const unitId = skillRecord(questions[0].skillIds[0])?.unitId;
      for (const question of questions) shared.push(await adaptQuestion(question, {
        passageId: stimulus.id,
        passageTitle: `共用選文 ${stimulus.id.slice(-3)}`,
        passage: stimulus.content,
        assets: stimulus.assets,
        r4UnitId: unitId,
      }));
    }
    const chosenUnits = ordered(catalog.units, Number(seed) + 73).slice(0, 14);
    const independent = [];
    for (const [index, meta] of chosenUnits.entries()) {
      const unit = await loadUnit(meta.id);
      independent.push(await adaptQuestion(ordered(unit.questions, Number(seed) + index * 101)[0]));
    }
    return {
      kind: "mock",
      id: `R4-MOCK-${seed}`,
      seed: Number(seed),
      title: "國中教育會考國文科 R4 靜態模擬題本",
      minutes: 70,
      blueprint: "reviewed-static-id-selection-14-independent-7x4-shared",
      questions: ordered(independent, Number(seed) + 11).concat(shared),
    };
  }

  function progress() {
    const key = "capChinese.r4.progress.v1";
    try {
      const parsed = JSON.parse(localStorage.getItem(key) || "null");
      if (parsed?.version === 1 && Array.isArray(parsed.completedSkills)) return parsed;
      const legacy = JSON.parse(localStorage.getItem("capChinese.r4.completedSkills") || "[]");
      const migrated = { version: 1, completedSkills: Array.isArray(legacy) ? legacy.filter(id => /^CHI_R4_S\d{3}$/u.test(id)) : [], updatedAt: new Date().toISOString() };
      localStorage.setItem(key, JSON.stringify(migrated));
      return migrated;
    } catch {
      return { version: 1, completedSkills: [], updatedAt: null };
    }
  }

  function setSkillCompleted(skillId, completed) {
    const value = progress();
    const ids = new Set(value.completedSkills);
    completed ? ids.add(skillId) : ids.delete(skillId);
    const next = { version: 1, completedSkills: [...ids].sort(), updatedAt: new Date().toISOString() };
    localStorage.setItem("capChinese.r4.progress.v1", JSON.stringify(next));
    return next;
  }

  async function getWritingTasks() {
    writingTasks ??= await json("writing-tasks.json");
    return writingTasks;
  }

  async function init() {
    [manifest, catalog] = await Promise.all([json("manifest.json"), json("catalog.json")]);
    if (manifest.runtimeGeneration !== false || manifest.counts.skills !== 320) throw new Error("R4 靜態資料清單驗證失敗");
    progress();
    if ("serviceWorker" in navigator && /^https?:$/u.test(location.protocol)) navigator.serviceWorker.register("service-worker.js").catch(console.error);
    return { manifest, catalog };
  }

  window.CHINESE_R4 = {
    init,
    get manifest() { return manifest; },
    get catalog() { return catalog; },
    loadUnit,
    unitAssessment,
    skillAssessment,
    mockAssessment,
    getWritingTasks,
    getAssets: assetRecords,
    ordered,
    progress,
    setSkillCompleted,
  };
})();
