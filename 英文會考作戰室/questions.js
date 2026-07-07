window.EXAM_ENGINE = (() => {
  const U = window.ENGLISH_DATA.units;
  const quizTaxonomy = window.QUIZ_TAXONOMY || {};
  const vocabData = window.ENGLISH_VOCAB_QUIZ_DATA || { basic: [], tier3: [] };
  const letters = ["A", "B", "C", "D"];

  function rngFromSeed(seed) {
    let a = (Number(seed) || String(seed).split("").reduce((s, c) => s * 31 + c.charCodeAt(0), 7)) >>> 0;
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
  function withTextOnlyPolicy(question) {
    return typeof TEXT_ONLY_POLICY !== "undefined" ? TEXT_ONLY_POLICY.normalizeQuestion(question, "english") : question;
  }
  function mc(r, unitId, difficulty, text, correct, distractors, steps, tip, trap, concept) {
    const FM = FRACTION_MARKUP;
    const correctNorm = FM.normalizeChoice(String(correct));
    const choices = shuffled(r, FM.fillMcValues(correct, distractors).map(v => FM.normalizeChoice(v)));
    return withTextOnlyPolicy({ type: "mc", unitId, difficulty, text, choices, answer: choices.indexOf(correctNorm), steps, tip, trap, concept: concept || U[unitId - 1].summary, formula: U[unitId - 1].formula });
  }

  const unitTopics = unitId => (quizTaxonomy[`u${unitId}`]?.sections || []).flatMap(section => section.topics.map(topic => ({ section: section.title, ...topic })));
  const quizTopicsForUnits = unitIds => unitIds.flatMap(unitTopics);
  const groupNames = Object.fromEntries(window.ENGLISH_DATA.groups.map(g => [g.id, g.name]));
  const chapterQuizzes = U.map(unit => ({
    id: `u${unit.id}`, group: unit.grade, chapter: `CH${unit.id}`, title: `${unit.domain}｜${unit.title}`,
    unitIds: [unit.id], officialCodes: `ENG-${String(unit.id).padStart(2, "0")}`, scope: "chapter",
    source: "12-year curriculum grammar scope plus basic 2000-word dynamic quiz bank."
  }));
  const reviewQuizzes = window.ENGLISH_DATA.groups.map(g => ({
    id: `d${g.id}-all`, group: g.id, chapter: "總複習", title: `${groupNames[g.id]}｜總複習`,
    unitIds: U.filter(u => u.grade === g.id).map(u => u.id), officialCodes: `ENG-${groupNames[g.id]}`, scope: "review",
    source: "12-year curriculum grammar scope plus basic 2000-word dynamic quiz bank."
  }));
  const quizCatalog = [...chapterQuizzes, ...reviewQuizzes].map(item => ({ ...item, minutes: 50, questionCount: 50 }));
  const abilityLabel = { knowledge: "知識", comprehension: "理解", inquiry: "應用" };

  const basicWords = vocabData.basic || [];
  const tier3Words = vocabData.tier3 || [];
  const cleanZh = item => String(item.zh || item.word).replace(/[()（）=].*$/, "").split(/[;,，、]/)[0].trim() || item.word;
  const wordKey = word => String(word).toLowerCase().replace(/[^a-z]+/g, " ").trim();
  const vocabCoverage = {
    basicCount: basicWords.length,
    slotsPerWord: 10,
    totalSlots: basicWords.length * 10
  };

  function vocabItemAt(index) {
    return basicWords[((index % basicWords.length) + basicWords.length) % basicWords.length];
  }
  function vocabDistractors(r, item) {
    return shuffled(r, basicWords.filter(w => w.word !== item.word)).slice(0, 3).map(cleanZh);
  }
  function vocabQuestion(r, slot, unitId) {
    const item = vocabItemAt(Math.floor(slot / 10));
    const pattern = slot % 10;
    const word = item.word;
    const zh = cleanZh(item);
    const templates = [
      () => [`Choose the meaning of "${word}".`, zh, vocabDistractors(r, item), [`"${word}" 在基本 2000 字表中對應「${zh}」。`], "先看單字本義，再排除語意不合的中文選項。"],
      () => [`Which word means "${zh}"?`, word, shuffled(r, basicWords.filter(w => w.word !== word)).slice(0, 3).map(w => w.word), [`題目要求找「${zh}」的英文，正確答案是 ${word}。`], "中文對英文字義題先找核心意思，不被相近詞干擾。"],
      () => [`Fill in the blank: I saw the word "${word}" on the page. What is the key word?`, word, shuffled(r, basicWords.filter(w => w.word !== word)).slice(0, 3).map(w => w.word), [`句中直接鎖定 key word，答案是 ${word}。`], "這是字形辨識題，確認拼字完全一致。"],
      () => [`"${word}" is closest to which Chinese meaning?`, zh, vocabDistractors(r, item), [`closest to 表示選最接近的中文意思。`], "遇到 closest 題，選最核心、最常用的意思。"],
      () => [`A student writes "${word}" in a vocabulary notebook. Which note is best?`, `${word} = ${zh}`, shuffled(r, basicWords.filter(w => w.word !== word)).slice(0, 3).map(w => `${w.word} = ${cleanZh(w)}`), [`單字筆記要讓英文與中文對應正確。`], "配對題同時檢查英文拼字與中文意思。"],
      () => [`Which choice correctly uses the target word "${word}" as the answer?`, word, shuffled(r, basicWords.filter(w => w.word !== word)).slice(0, 3).map(w => w.word), [`target word 已指定為 ${word}。`], "看到 target word，先不要被其他常見字轉移。"],
      () => [`The word "${word}" appears in the basic 2000 list. What should you remember first?`, zh, vocabDistractors(r, item), [`準備會考字彙時，先掌握最常見中文義「${zh}」。`], "先背核心義，再背延伸搭配。"],
      () => [`Which English word matches this note: ${zh}?`, word, shuffled(r, basicWords.filter(w => w.word !== word)).slice(0, 3).map(w => w.word), [`${zh} 對應 ${word}。`], "由中文反查英文時，注意拼字。"],
      () => [`In a 2000-word quiz, "${word}" should be grouped with which meaning?`, zh, vocabDistractors(r, item), [`grouped with meaning 表示找意思分類。`], "分類題不要選只看起來相似的干擾字。"],
      () => [`Choose the correct vocabulary card.`, `${word} / ${zh}`, shuffled(r, basicWords.filter(w => w.word !== word)).slice(0, 3).map(w => `${word} / ${cleanZh(w)}`), [`只有 ${word} / ${zh} 是正確配對。`], "卡片題比對英文和中文是否同時正確。"]
    ];
    const [text, correct, distractors, steps, tip] = templates[pattern]();
    const q = mc(r, unitId, 1 + (pattern % 3), text, correct, distractors, steps, tip, "干擾選項多半是其他 2000 字的中文義或拼字，不能只靠熟悉度選。", `2000 字：${word}`);
    q.vocabWord = word;
    q.vocabSlot = slot;
    q.taxonomyTopic = "2000字詞彙";
    return q;
  }

  const readingPool = [
    {
      title: "A New Club at School",
      unitId: 15,
      passage: "Mina wanted students to read more, so she started a small book club after school. At first, only three classmates came. Mina did not give up. She asked each member to bring one friend and choose one easy book. A month later, the club had twenty students. The library teacher gave them a quiet corner. Mina learned that a small idea can grow when people share it.",
      glossary: [{ word: "member", zh: "成員" }],
      questions: [
        ["What is the best title for this reading?", "A Small Book Club Grows", ["How to Build a Library", "Mina's Favorite Sport", "A Test in English Class"], "全文從三人讀書會變成二十人，主旨是小社團成長。"],
        ["Why did more students join the club?", "Members brought friends.", ["The teacher gave a test.", "Mina bought many books.", "The club met in the morning."], "文章說 Mina asked each member to bring one friend。"],
        ["What did Mina probably learn?", "Sharing an idea can help it grow.", ["Reading is not useful.", "Teachers should not help clubs.", "Only big plans work."], "結尾直接呼應 a small idea can grow when people share it。"]
      ]
    },
    {
      title: "The Rainy-Day Market",
      unitId: 16,
      passage: "It rained hard on Saturday, and many sellers at the market looked worried. Ken sold hot soup with his parents. He moved their table closer to the bus stop and put up a clear sign. People who waited for buses saw the sign and bought soup to stay warm. By noon, Ken's family had sold more than usual.",
      glossary: [{ word: "seller", zh: "攤販" }],
      questions: [
        ["Why were many sellers worried?", "The rain might keep buyers away.", ["The soup was too cold.", "The bus stop was closed.", "Ken lost the sign."], "下大雨會讓市場客人變少，因此攤販擔心。"],
        ["What helped Ken's family sell more soup?", "They moved near people waiting for buses.", ["They went home early.", "They sold cold drinks.", "They stopped using a sign."], "Ken 把桌子移到公車站旁，等車的人看見招牌。"],
        ["What can we infer about Ken?", "He found a smart way to solve a problem.", ["He disliked helping his parents.", "He wanted the rain to stop at once.", "He worked at a bookstore."], "他改變位置與招牌，表示能想辦法解決問題。"]
      ]
    },
    {
      title: "Less Screen Time",
      unitId: 19,
      passage: "Jason used to play games on his phone before bed. He often felt tired at school. His sister asked him to put the phone on the desk outside his room after nine o'clock. Jason tried it for two weeks. He slept earlier and listened better in class. Now he still plays games, but not late at night.",
      glossary: [{ word: "screen", zh: "螢幕" }],
      questions: [
        ["What problem did Jason have before?", "He felt tired at school.", ["He lost his phone.", "He did not like games.", "He had no desk."], "文章說他睡前玩手機，因此在學校常覺得累。"],
        ["What did Jason's sister ask him to do?", "Put the phone outside his room after nine.", ["Buy a new phone.", "Play games with her.", "Study until midnight."], "文中明說 after nine o'clock 把手機放在房間外的桌上。"],
        ["What is the main idea?", "Changing one habit can improve sleep.", ["Games are always bad.", "Students should not have sisters.", "Phones only help learning."], "重點是減少睡前手機時間後睡眠與上課狀態改善。"]
      ]
    },
    {
      title: "The Lost Lunch Box",
      unitId: 17,
      passage: "Leo found a lunch box under a tree. He opened it and saw a name on a small card. The name was Emma, a new student in his class. Leo took the box to the office instead of keeping it. At lunch time, Emma came to thank him. She said it was a gift from her grandmother.",
      glossary: [{ word: "office", zh: "辦公室" }],
      questions: [
        ["Where did Leo find the lunch box?", "Under a tree.", ["In the office.", "In his bag.", "At Emma's home."], "第一句說 under a tree。"],
        ["Why was the lunch box important to Emma?", "It was a gift from her grandmother.", ["It had money inside.", "It was new from a store.", "It belonged to Leo."], "最後一句說是祖母送的禮物。"],
        ["What kind of person is Leo?", "Helpful and honest.", ["Lazy and angry.", "Funny but careless.", "Quiet and afraid."], "他沒有留下盒子，而是送到辦公室。"]
      ]
    }
  ];

  function readingQuestions(r, seed, usedReading) {
    const choices = shuffled(r, readingPool.filter(p => !usedReading.has(p.title))).slice(0, 2);
    choices.forEach(p => usedReading.add(p.title));
    return choices.flatMap((passage, pi) => passage.questions.map((row, qi) => {
      const glossary = passage.glossary.map(g => `${g.word} ${g.zh}`).join("；");
      const text = `Reading ${pi + 1}: ${passage.title}\n\n${passage.passage}\n\nWords: ${glossary}\n\n${row[0]}`;
      const q = mc(r, passage.unitId, qi === 0 ? 2 : 3, text, row[1], row[2], [row[3]], "閱讀題先讀題目，再回文章找線索。", "不要用常識硬猜；每題都能回到文章找到依據。", "閱讀測驗");
      q.readingGroup = pi + 1;
      q.taxonomyTopic = `閱讀題組 ${pi + 1}`;
      q.glossary = passage.glossary;
      return q;
    }));
  }

  function grammarQuestion(r, unitId, index) {
    const topics = shuffled(r, unitTopics(unitId));
    const topic = topics[index % Math.max(1, topics.length)];
    if (!topic) return vocabQuestion(r, index, unitId);
    const q = topic.template({ r, ri, pick, mc });
    q.taxonomySection = topic.section;
    q.taxonomyTopic = topic.title;
    return q;
  }

  function generateQuiz(quizId, seedOverride) {
    const blueprint = quizCatalog.find(item => item.id === quizId);
    if (!blueprint) throw new Error("找不到小考");
    const seed = seedOverride == null ? quizId.split("").reduce((a, c) => a * 31 + c.charCodeAt(0), 7) : seedOverride;
    const r = rngFromSeed(seed);
    const unitCycle = blueprint.unitIds.length ? blueprint.unitIds : U.map(u => u.id);
    const slotBase = Math.abs(String(`${quizId}:${seed}`).split("").reduce((a, c) => a * 33 + c.charCodeAt(0), 11));
    const questions = [];
    for (let i = 0; i < 44; i++) {
      const unitId = unitCycle[i % unitCycle.length];
      const q = i % 4 === 0 ? grammarQuestion(r, unitId, i) : vocabQuestion(r, slotBase + i, unitId);
      q.ability = Object.keys(abilityLabel)[i % 3];
      questions.push(q);
    }
    questions.push(...readingQuestions(r, seed, new Set()));
    questions.forEach((question, index) => { question.officialOrder = index + 1; });
    return {
      kind: "quiz", id: `QUIZ-${blueprint.id}-${seed}`, quizId: blueprint.id, seed, title: blueprint.title,
      grade: blueprint.group, term: blueprint.chapter, chapter: blueprint.chapter, scope: blueprint.scope,
      minutes: 50, questionCount: questions.length, officialCodes: blueprint.officialCodes,
      unitIds: [...blueprint.unitIds], blueprint: "english-50q-2000-word-reading", taxonomySource: blueprint.source, questions
    };
  }

  function generate(seed, level = 2) {
    const r = rngFromSeed(`${seed}`.split("").reduce((a, c) => a * 31 + c.charCodeAt(0), 7) + level * 100003);
    const allUnitIds = U.map(u => u.id);
    const extraWeighted = [...U.filter(u => u.grade === 4).map(u => u.id), ...U.filter(u => u.grade === 5).map(u => u.id)];
    const extraDraws = Array.from({ length: 10 }, () => pick(r, extraWeighted));
    const drawUnitIds = shuffled(r, [...allUnitIds, ...extraDraws]);
    const used = new Set();
    const questions = drawUnitIds.map((unitId, index) => {
      const pool = shuffled(r, unitTopics(unitId));
      let chosen = pool[index % pool.length] || pool[0];
      for (const candidate of pool) if (!used.has(`${unitId}:${candidate.id}`)) { chosen = candidate; break; }
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

  return { generate, generateQuiz, quizCatalog, abilityLabel, groupNames, vocabCoverage, readingPool };
})();
