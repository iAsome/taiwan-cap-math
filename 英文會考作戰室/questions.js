// 英文模擬考／小考出題引擎。
// 官方英語科（閱讀＋聽力）全為選擇題，沒有非選擇題，因此本引擎不需要 cr() helper。
// 小考題庫直接沿用 quiz-taxonomy.js 的小節 template，模考也是從同一份 taxonomy 抽題。
window.EXAM_ENGINE = (() => {
  const U = window.ENGLISH_DATA.units;
  const quizTaxonomy = window.QUIZ_TAXONOMY || {};

  function rngFromSeed(seed) {
    let a = (Number(seed) || 1) >>> 0;
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  const ri = (r, min, max) => Math.floor(r() * (max - min + 1)) + min;
  const pick = (r, list) => list[ri(r, 0, list.length - 1)];
  function shuffled(r, arr) {
    const out = [...arr];
    for (let i = out.length - 1; i > 0; i--) { const j = ri(r, 0, i); [out[i], out[j]] = [out[j], out[i]]; }
    return out;
  }
  function mc(r, unitId, difficulty, text, correct, distractors, steps, tip, trap, concept) {
    const values = [];
    [correct, ...distractors].map(String).forEach(v => { if (!values.includes(v)) values.push(v); });
    let bump = 1;
    while (values.length < 4) { const fallback = `${correct} ${"′".repeat(bump++)}`; if (!values.includes(fallback)) values.push(fallback); }
    const choices = shuffled(r, values.slice(0, 4));
    return { type: "mc", unitId, difficulty, text, choices, answer: choices.indexOf(String(correct)), steps, tip, trap, concept: concept || U[unitId - 1].summary, formula: U[unitId - 1].formula };
  }

  const unitTopics = unitId => (quizTaxonomy[`u${unitId}`]?.sections || []).flatMap(section => section.topics.map(topic => ({ section: section.title, ...topic })));
  const quizTopicsForUnits = unitIds => unitIds.flatMap(unitTopics);

  const chapterQuizzes = U.map(unit => ({
    id: `u${unit.id}`, group: unit.grade, chapter: `CH${unit.id}`, title: `${unit.domain}：${unit.title}`,
    unitIds: [unit.id], officialCodes: `ENG-${String(unit.id).padStart(2, "0")}`, scope: "chapter",
    source: "本站依課綱英語文法能力指標與基本 2000 字表自行拆解之小考題庫"
  }));

  const groupNames = { 1: "時態文法", 2: "詞類與修飾", 3: "句型結構", 4: "進階句型與閱讀技巧", 5: "核心字彙與構詞" };
  const reviewQuizzes = window.ENGLISH_DATA.groups.map(g => ({
    id: `d${g.id}-all`, group: g.id, chapter: "總複習", title: `${groupNames[g.id]}．領域總複習`,
    unitIds: U.filter(u => u.grade === g.id).map(u => u.id), officialCodes: `ENG-${groupNames[g.id]}`, scope: "review",
    source: "彙整同一領域內各單元小節 template，供領域總複習使用"
  }));

  const quizCatalog = [...chapterQuizzes, ...reviewQuizzes].map(item => ({
    ...item, minutes: item.scope === "review" ? 20 : 10, questionCount: quizTopicsForUnits(item.unitIds).length
  }));

  function generateQuiz(quizId, seedOverride) {
    const blueprint = quizCatalog.find(item => item.id === quizId);
    if (!blueprint) throw new Error("找不到指定的小考");
    const seed = seedOverride == null ? (blueprint.id.split("").reduce((a, c) => a * 31 + c.charCodeAt(0), 7)) : seedOverride;
    const r = rngFromSeed(seed);
    const topics = shuffled(r, quizTopicsForUnits(blueprint.unitIds));
    const abilityBySection = ["knowledge", "comprehension", "inquiry"];
    const questions = topics.map((topic, index) => {
      const question = topic.template({ r, ri, pick, mc });
      question.ability = abilityBySection[index % abilityBySection.length];
      question.taxonomySection = topic.section;
      question.taxonomyTopic = topic.title;
      question.officialOrder = index + 1;
      return question;
    });
    return {
      kind: "quiz", id: `QUIZ-${blueprint.id}-${seed}`, quizId: blueprint.id, seed, title: blueprint.title,
      grade: blueprint.group, term: blueprint.chapter, chapter: blueprint.chapter, scope: blueprint.scope,
      minutes: blueprint.minutes, questionCount: questions.length, officialCodes: blueprint.officialCodes,
      unitIds: [...blueprint.unitIds], blueprint: "NAER-108-curriculum-english-scope", taxonomySource: blueprint.source, questions
    };
  }

  const abilityLabel = { knowledge: "字彙文法", comprehension: "篇章理解", inquiry: "推論應用" };

  function generate(seed, level = 2) {
    const r = rngFromSeed(`${seed}`.split("").reduce((a, c) => a * 31 + c.charCodeAt(0), 7) + level * 100003);
    // ponytail: 本站英語模考自訂 30 題／40 分鐘，涵蓋全部 20 單元，並在閱讀理解、核心字彙
    // 兩個歷屆占比較高的領域各加抽 5 題；官方閱讀規格為 40-45 題/60 分鐘，此為練習用簡化版本，
    // 頁面上會清楚聲明此為自訂比例，非官方閱讀測驗原始規格。
    const allUnitIds = U.map(u => u.id);
    const extraWeighted = [...U.filter(u => u.grade === 4).map(u => u.id), ...U.filter(u => u.grade === 5).map(u => u.id)];
    const extraDraws = Array.from({ length: 10 }, () => pick(r, extraWeighted));
    const drawUnitIds = shuffled(r, [...allUnitIds, ...extraDraws]);
    const used = new Set();
    const questions = drawUnitIds.map((unitId, index) => {
      const pool = shuffled(r, unitTopics(unitId));
      let chosen = pool[index % pool.length] || pool[0];
      for (const candidate of pool) {
        if (!used.has(`${unitId}:${candidate.id}`)) { chosen = candidate; break; }
      }
      used.add(`${unitId}:${chosen.id}`);
      const question = chosen.template({ r, ri, pick, mc });
      question.ability = Object.keys(abilityLabel)[index % 3];
      question.taxonomySection = chosen.section;
      question.taxonomyTopic = chosen.title;
      return question;
    });
    questions.forEach((question, index) => { question.officialOrder = index + 1; });
    return { id: `ENG-${seed}-${level}`, seed: Number(seed), level, createdAt: new Date().toISOString(), blueprint: "self-defined-30q-40min-english-scope", questions };
  }

  return { generate, generateQuiz, quizCatalog, abilityLabel, groupNames };
})();
