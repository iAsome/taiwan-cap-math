window.MATH_ENGINE_V2 = (() => {
  "use strict";

  const ENGINE_VERSION = "2.1.0";
  const manifest = window.MATH_V2_UNIT_MANIFEST;
  const syllabus = window.MATH_SYLLABUS_V2;
  const unitBlueprints = window.MATH_QUIZ_BLUEPRINTS_V2;
  const mockBlueprint = window.MATH_MOCK_BLUEPRINT_V2;
  if (!manifest || !syllabus || !Array.isArray(unitBlueprints) || !mockBlueprint) {
    throw new Error("Math V2 metadata is incomplete");
  }

  const entries = new Map(manifest.units.map(entry => [entry.unitId, Object.freeze({ ...entry })]));
  const allowedScripts = new Set(manifest.units.flatMap(entry => [entry.questionScript, entry.lectureScript]));
  const scriptPromises = new Map();
  const loadedAt = new Map();

  function normalizeUnitId(value) {
    if (Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= manifest.units.length) {
      return `u${String(Number(value)).padStart(2, "0")}`;
    }
    const id = String(value || "").toLowerCase();
    if (!entries.has(id)) throw new Error(`Unknown Math V2 unit: ${value}`);
    return id;
  }

  function getUnit(unitId) {
    const id = normalizeUnitId(unitId);
    return syllabus.units.find(unit => unit.unitId === id) || null;
  }

  function getTopic(topicId) {
    for (const unit of syllabus.units) {
      const topic = unit.topics.find(item => item.topicId === topicId);
      if (topic) return { ...topic, unitId: unit.unitId };
    }
    return null;
  }

  function getSkill(skillId) {
    for (const unit of syllabus.units) {
      for (const topic of unit.topics) {
        const skill = topic.skills.find(item => item.skillId === skillId);
        if (skill) return { ...skill, unitId: unit.unitId, topicId: topic.topicId };
      }
    }
    return null;
  }

  function fnv1a(value) {
    let hash = 2166136261;
    for (const char of String(value)) {
      hash ^= char.charCodeAt(0);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function rngFor(...parts) {
    let state = fnv1a([ENGINE_VERSION, manifest.contentVersion, ...parts].join("|")) || 1;
    return () => {
      state += 0x6D2B79F5;
      let value = Math.imul(state ^ (state >>> 15), 1 | state);
      value ^= value + Math.imul(value ^ (value >>> 7), 61 | value);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffled(values, rng) {
    const result = values.slice();
    for (let index = result.length - 1; index > 0; index -= 1) {
      const target = Math.floor(rng() * (index + 1));
      [result[index], result[target]] = [result[target], result[index]];
    }
    return result;
  }

  function shuffleChoicesSafely(question, rng) {
    const indexed = question.choices.map((choice, index) => ({ choice, index }));
    const mixed = shuffled(indexed, rng);
    return {
      ...question,
      choices: mixed.map(item => item.choice),
      answerIndex: mixed.findIndex(item => item.index === question.answerIndex)
    };
  }

  function defaultScriptLoader(scriptPath) {
    return new Promise((resolve, reject) => {
      const element = document.createElement("script");
      element.src = `${scriptPath}?v=${encodeURIComponent(manifest.contentVersion.slice(0, 12))}`;
      element.async = true;
      element.onload = () => resolve();
      element.onerror = () => reject(new Error(`Unable to load ${scriptPath}`));
      document.head.appendChild(element);
    });
  }

  function loadScript(scriptPath) {
    if (!allowedScripts.has(scriptPath)) throw new Error(`Blocked Math V2 script path: ${scriptPath}`);
    if (!scriptPromises.has(scriptPath)) {
      const loader = window.MATH_V2_SCRIPT_LOADER || defaultScriptLoader;
      const started = performance.now();
      scriptPromises.set(scriptPath, Promise.resolve(loader(scriptPath)).then(() => {
        loadedAt.set(scriptPath, Math.max(0, performance.now() - started));
      }).catch(error => {
        scriptPromises.delete(scriptPath);
        throw error;
      }));
    }
    return scriptPromises.get(scriptPath);
  }

  async function loadUnit(unitId, { questions = true, lectures = false } = {}) {
    const id = normalizeUnitId(unitId);
    const entry = entries.get(id);
    const tasks = [];
    if (questions && !Array.isArray(window[entry.questionGlobal])) tasks.push(loadScript(entry.questionScript));
    if (lectures && !Array.isArray(window[entry.lectureGlobal])) tasks.push(loadScript(entry.lectureScript));
    await Promise.all(tasks);
    if (questions && (!Array.isArray(window[entry.questionGlobal]) || window[entry.questionGlobal].length !== entry.questionCount)) {
      throw new Error(`Malformed question bank for ${id}`);
    }
    if (lectures && (!Array.isArray(window[entry.lectureGlobal]) || window[entry.lectureGlobal].length !== entry.lectureCount)) {
      throw new Error(`Malformed lecture bank for ${id}`);
    }
    return {
      unit: getUnit(id),
      questions: questions ? window[entry.questionGlobal] : null,
      lectures: lectures ? window[entry.lectureGlobal] : null
    };
  }

  function loadedUnitIds() {
    return manifest.units.filter(entry => Array.isArray(window[entry.questionGlobal]) || Array.isArray(window[entry.lectureGlobal])).map(entry => entry.unitId);
  }

  function getBankByUnit(unitId) {
    const entry = entries.get(normalizeUnitId(unitId));
    return window[entry.questionGlobal] || null;
  }

  function getLectureBankByUnit(unitId) {
    const entry = entries.get(normalizeUnitId(unitId));
    return window[entry.lectureGlobal] || null;
  }

  async function getQuestionsBySkill(skillId) {
    const skill = getSkill(skillId);
    if (!skill) throw new Error(`Unknown Math V2 skill: ${skillId}`);
    const { questions } = await loadUnit(skill.unitId);
    return questions.filter(question => question.skillId === skillId);
  }

  async function getLecturesByUnit(unitId) {
    return (await loadUnit(unitId, { questions: false, lectures: true })).lectures;
  }

  async function getLectureBySkill(skillId) {
    const skill = getSkill(skillId);
    if (!skill) return null;
    return (await getLecturesByUnit(skill.unitId)).find(lecture => lecture.skillId === skillId) || null;
  }

  function semanticKey(question) {
    return String(question.text)
      .normalize("NFKC")
      .replace(/[−-]?\d+(?:\.\d+)?/g, "#")
      .replace(/\s+/g, "")
      .replace(/[，。！？；：、（）「」『』]/g, "");
  }

  function weightedPick(items, weightFor, rng) {
    const total = items.reduce((sum, item) => sum + Math.max(0, weightFor(item)), 0);
    if (!items.length || total <= 0) throw new Error("No weighted Math V2 candidate");
    let cursor = rng() * total;
    for (const item of items) {
      cursor -= Math.max(0, weightFor(item));
      if (cursor <= 0) return item;
    }
    return items[items.length - 1];
  }

  async function generateUnitQuiz(unitId, seed = 1) {
    const id = normalizeUnitId(unitId);
    const blueprint = unitBlueprints.find(item => item.unitId === id);
    if (!blueprint) throw new Error(`No Math V2 quiz blueprint for ${id}`);
    const { questions } = await loadUnit(id);
    const selected = blueprint.slots.map(slot => {
      const difficulty = slot.difficultyCycle[fnv1a(`${seed}|${id}|${slot.slot}`) % slot.difficultyCycle.length];
      const pool = questions.filter(question => question.skillId === slot.skillId && question.difficulty === difficulty);
      if (!pool.length) throw new Error(`No ${difficulty} question for ${id}/${slot.skillId}`);
      const source = pool[fnv1a(`${seed}|${slot.skillId}|pick`) % pool.length];
      return shuffleChoicesSafely(source, rngFor("unit-choice", id, seed, source.questionId));
    });
    const ids = new Set(selected.map(question => question.questionId));
    if (ids.size !== selected.length) throw new Error(`Duplicate question selected for ${id}`);
    return shuffled(selected, rngFor("unit-order", id, seed));
  }

  function assignMockUnits(seed) {
    const rng = rngFor("mock-units", mockBlueprint.id, seed);
    const domainSlots = shuffled(Object.entries(mockBlueprint.domainCounts).flatMap(([domain, count]) => Array(count).fill(domain)), rng);
    const assigned = Array(domainSlots.length).fill(null);
    const requiredGrades = [7, 8, 9];
    for (const grade of requiredGrades) {
      const candidates = domainSlots.map((domain, index) => ({ domain, index })).filter(item => !assigned[item.index] && syllabus.units.some(unit => unit.domain === item.domain && Number(unit.gradeBand[0]) === grade));
      const slot = candidates[Math.floor(rng() * candidates.length)];
      const units = syllabus.units.filter(unit => unit.domain === slot.domain && Number(unit.gradeBand[0]) === grade);
      assigned[slot.index] = weightedPick(units, unit => mockBlueprint.unitWeights[unit.unitId] || 1, rng);
    }
    for (let index = 0; index < domainSlots.length; index += 1) {
      if (assigned[index]) continue;
      const units = syllabus.units.filter(unit => unit.domain === domainSlots[index]);
      assigned[index] = weightedPick(units, unit => mockBlueprint.unitWeights[unit.unitId] || 1, rng);
    }
    return assigned;
  }

  async function generateFullMock(seed = 1, level = 2) {
    const normalizedLevel = [1, 2, 3].includes(Number(level)) ? Number(level) : 2;
    const unitSlots = assignMockUnits(seed);
    const difficultyCounts = mockBlueprint.difficultyCountsByLevel[normalizedLevel];
    const difficulties = shuffled(Object.entries(difficultyCounts).flatMap(([difficulty, count]) => Array(count).fill(difficulty)), rngFor("mock-difficulties", seed, normalizedLevel));
    await Promise.all([...new Set(unitSlots.map(unit => unit.unitId))].map(unitId => loadUnit(unitId)));
    const usedIds = new Set();
    const usedSkills = new Set();
    const usedEssences = new Set();
    const selected = unitSlots.map((unit, index) => {
      const bank = getBankByUnit(unit.unitId);
      const desired = difficulties[index];
      const candidates = shuffled(bank.filter(question => question.difficulty === desired), rngFor("mock-pool", seed, normalizedLevel, index, unit.unitId));
      const source = candidates.find(question => !usedIds.has(question.questionId) && !usedSkills.has(question.skillId) && !usedEssences.has(semanticKey(question)));
      if (!source) throw new Error(`Unable to select a unique ${desired} question for mock slot ${index + 1}`);
      usedIds.add(source.questionId);
      usedSkills.add(source.skillId);
      usedEssences.add(semanticKey(source));
      return shuffleChoicesSafely(source, rngFor("mock-choice", seed, normalizedLevel, source.questionId));
    });
    if (selected.length !== mockBlueprint.questionCount || usedIds.size !== selected.length) throw new Error("Invalid Math V2 mock inventory");
    return {
      seed: Number(seed),
      level: normalizedLevel,
      minutes: mockBlueprint.minutes,
      blueprintId: mockBlueprint.id,
      engineVersion: ENGINE_VERSION,
      contentVersion: manifest.contentVersion,
      selectedUnitIds: [...new Set(unitSlots.map(unit => unit.unitId))],
      questions: selected
    };
  }

  function drillQuestionSignature(question) {
    return [question.questionId || "", question.skillId || "", question.text, ...(question.choices || [])].join("\u241f");
  }

  async function generateCorrectionDrill(question, seed, count = 1, excludeKeys = []) {
    const id = normalizeUnitId(question.v2UnitId || question.unitId || question.numericUnitId);
    const { questions } = await loadUnit(id);
    const blocked = new Set(excludeKeys);
    const sourceSkill = question.skillId;
    const pool = shuffled(questions.filter(candidate => candidate.skillId === sourceSkill && candidate.questionId !== question.questionId), rngFor("drill", seed, sourceSkill));
    const picked = [];
    for (const candidate of pool) {
      if (blocked.has(drillQuestionSignature(candidate))) continue;
      picked.push(shuffleChoicesSafely(candidate, rngFor("drill-choice", seed, candidate.questionId)));
      if (picked.length === count) break;
    }
    if (picked.length !== count) throw new Error("找不到足夠的同觀念訂正題");
    return picked;
  }

  async function generateUnitDrill(unitId, seed, count = 1, _level = 2, excludeKeys = []) {
    const id = normalizeUnitId(unitId);
    const { questions } = await loadUnit(id);
    const blocked = new Set(excludeKeys);
    const pool = shuffled(questions, rngFor("unit-drill", id, seed));
    const picked = [];
    for (const candidate of pool) {
      if (blocked.has(drillQuestionSignature(candidate))) continue;
      picked.push(shuffleChoicesSafely(candidate, rngFor("unit-drill-choice", seed, candidate.questionId)));
      if (picked.length === count) break;
    }
    if (picked.length !== count) throw new Error("找不到足夠的單元訂正題");
    return picked;
  }

  function restoreSavedPaper(record) {
    if (!record || !record.exam || !Array.isArray(record.exam.questions)) throw new Error("考卷紀錄格式不完整");
    return record.exam;
  }

  function validateLoadedBanks() {
    const findings = [];
    for (const entry of manifest.units) {
      const questions = window[entry.questionGlobal];
      const lectures = window[entry.lectureGlobal];
      if (questions && (questions.length !== entry.questionCount || new Set(questions.map(item => item.questionId)).size !== questions.length)) findings.push(`${entry.unitId}:question-bank`);
      if (lectures && (lectures.length !== entry.lectureCount || new Set(lectures.map(item => item.skillId)).size !== lectures.length)) findings.push(`${entry.unitId}:lecture-bank`);
    }
    return { ok: findings.length === 0, findings };
  }

  function performanceSnapshot() {
    return {
      loadedUnits: loadedUnitIds(),
      loadedScripts: [...loadedAt.entries()].map(([script, durationMs]) => ({ script, durationMs: Number(durationMs.toFixed(2)) }))
    };
  }

  return Object.freeze({
    ENGINE_VERSION,
    contentVersion: manifest.contentVersion,
    getUnit,
    getTopic,
    getSkill,
    loadUnit,
    loadedUnitIds,
    getBankByUnit,
    getLectureBankByUnit,
    getQuestionsBySkill,
    getLecturesByUnit,
    getLectureBySkill,
    generateUnitQuiz,
    generateFullMock,
    shuffleChoicesSafely,
    generateCorrectionDrill,
    generateUnitDrill,
    drillQuestionSignature,
    restoreSavedPaper,
    validateLoadedBanks,
    performanceSnapshot
  });
})();
