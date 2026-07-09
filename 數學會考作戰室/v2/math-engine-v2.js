window.MATH_ENGINE_V2 = (() => {
  /** ponytail: scan window for MATH_QUESTION_BANK_V2_Uxx; no hardcoded unit list */
  function getBankByUnit(unitId) {
    const key = `MATH_QUESTION_BANK_V2_${String(unitId).toUpperCase()}`;
    const bank = window[key];
    return Array.isArray(bank) ? bank : null;
  }

  function loadedUnitIds() {
    const ids = [];
    for (const k of Object.keys(window)) {
      const m = /^MATH_QUESTION_BANK_V2_(U\d{2})$/.exec(k);
      if (m && Array.isArray(window[k]) && window[k].length) ids.push(m[1].toLowerCase());
    }
    return ids.sort();
  }

  function mulberry32(seed) {
    let t = seed >>> 0;
    return () => {
      t += 0x6D2B79F5;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(arr, rng) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function allQuestions() {
    const out = [];
    for (const uid of loadedUnitIds()) {
      const bank = getBankByUnit(uid);
      if (bank?.length) out.push(...bank);
    }
    return out;
  }

  function getByUnit(unitId) {
    return getBankByUnit(unitId) || [];
  }

  function getBySkill(skillId) {
    return allQuestions().filter(q => q.skillId === skillId);
  }

  function shuffleChoices(question, rng) {
    const indexed = question.choices.map((c, i) => ({ c, i }));
    const shuffled = shuffle(indexed, rng);
    const choices = shuffled.map(x => x.c);
    const answerIndex = shuffled.findIndex(x => x.i === question.answerIndex);
    return { ...question, choices, answerIndex };
  }

  function generateUnitQuiz(unitId, seed = 1) {
    const bank = getBankByUnit(unitId);
    if (!bank?.length) {
      throw new Error(`no question bank loaded for unit ${unitId} (expected window.MATH_QUESTION_BANK_V2_${String(unitId).toUpperCase()})`);
    }
    const syllabusUnit = (window.MATH_SYLLABUS_V2?.units || []).find(u => u.unitId === unitId);
    if (!syllabusUnit) throw new Error(`unknown unit ${unitId}`);
    const skillIds = [];
    for (const t of syllabusUnit.topics) for (const s of t.skills) skillIds.push(s.skillId);
    const rng = mulberry32(Number(seed) || 1);
    const picked = [];
    const used = new Set();
    for (const skillId of skillIds) {
      const pool = bank.filter(q => q.skillId === skillId);
      if (!pool.length) throw new Error(`no bank for skill ${skillId} in ${unitId}`);
      const q = pool[Math.floor(rng() * pool.length)];
      if (used.has(q.questionId)) throw new Error(`duplicate pick ${q.questionId}`);
      used.add(q.questionId);
      picked.push(shuffleChoices(q, rng));
    }
    return shuffle(picked, rng);
  }

  function validateBank() {
    const schema = window.MATH_QUESTION_SCHEMA_V2;
    const units = new Set((window.MATH_UNITS_V2 || []).map(u => u.unitId));
    const skills = new Set();
    for (const u of window.MATH_SYLLABUS_V2?.units || []) {
      for (const t of u.topics) for (const s of t.skills) skills.add(`${u.unitId}/${s.skillId}`);
    }
    return schema.validateBank(allQuestions(), { unitIds: units, skills });
  }

  return {
    getBankByUnit,
    loadedUnitIds,
    getByUnit,
    getBySkill,
    generateUnitQuiz,
    validateBank,
    allQuestions
  };
})();
