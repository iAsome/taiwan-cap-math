window.EXAM_ENGINE = (() => {
  const U = window.ENGLISH_DATA.units;
  const quizTaxonomy = window.QUIZ_TAXONOMY || {};
  const vocabData = window.ENGLISH_VOCAB_QUIZ_DATA || { basic: [], tier3: [] };
  const GENERAL_PER_QUIZ = 44;
  const READING_PER_QUIZ = 6;
  const CHOICES_PER_GENERAL = 4;
  const VARIANTS_PER_WORD = 10;

  function hashSeed(seed) {
    return String(seed).split("").reduce((s, c) => ((s * 31) + c.charCodeAt(0)) >>> 0, 7);
  }
  function rngFromSeed(seed) {
    let a = (Number(seed) || hashSeed(seed)) >>> 0;
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
    for (let i = out.length - 1; i > 0; i--) {
      const j = ri(r, 0, i);
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }
  function withTextOnlyPolicy(question) {
    return typeof TEXT_ONLY_POLICY !== "undefined" ? TEXT_ONLY_POLICY.normalizeQuestion(question, "english") : question;
  }
  function mc(r, unitId, difficulty, text, correct, distractors, steps, tip, trap, concept) {
    const FM = FRACTION_MARKUP;
    const correctNorm = FM.normalizeChoice(String(correct));
    const choices = shuffled(r, FM.fillMcValues(correct, distractors).map(v => FM.normalizeChoice(v)));
    return withTextOnlyPolicy({
      type: "mc",
      unitId,
      difficulty,
      text,
      choices,
      answer: choices.indexOf(correctNorm),
      steps,
      tip,
      trap,
      concept: concept || U[unitId - 1].summary,
      formula: U[unitId - 1].formula
    });
  }

  const unitTopics = unitId => (quizTaxonomy[`u${unitId}`]?.sections || []).flatMap(section => section.topics.map(topic => ({ section: section.title, ...topic })));
  const groupNames = Object.fromEntries(window.ENGLISH_DATA.groups.map(g => [g.id, g.name]));
  const chapterQuizzes = U.map(unit => ({
    id: `u${unit.id}`,
    group: unit.grade,
    chapter: `CH${unit.id}`,
    title: `${unit.domain}: ${unit.title}`,
    unitIds: [unit.id],
    officialCodes: `ENG-${String(unit.id).padStart(2, "0")}`,
    scope: "chapter",
    source: "12-year curriculum grammar scope plus basic 2000-word dynamic quiz bank."
  }));
  const reviewQuizzes = window.ENGLISH_DATA.groups.map(g => ({
    id: `d${g.id}-all`,
    group: g.id,
    chapter: "Review",
    title: `${groupNames[g.id]}: review`,
    unitIds: U.filter(u => u.grade === g.id).map(u => u.id),
    officialCodes: `ENG-${groupNames[g.id]}`,
    scope: "review",
    source: "12-year curriculum grammar scope plus basic 2000-word dynamic quiz bank."
  }));
  const quizCatalog = [...chapterQuizzes, ...reviewQuizzes].map(item => ({ ...item, minutes: 50, questionCount: 50 }));
  const quizIndexById = Object.fromEntries(quizCatalog.map((item, index) => [item.id, index]));
  const abilityKeys = ["knowledge", "comprehension", "inquiry"];
  const abilityLabel = { knowledge: "字彙文法", comprehension: "篇章理解", inquiry: "推論應用" };

  const basicWords = vocabData.basic || [];
  const tier3Words = vocabData.tier3 || [];
  const cleanZh = item => {
    const raw = String(item?.zh || item?.word || "").replace(/[\uFF08(][^)\uFF09]*[)\uFF09]/g, "");
    return raw.split(/[;,，、]/)[0].replace(/^=+/, "").trim() || String(item?.word || "");
  };
  const posLabel = item => String(item?.pos || "word").replace(/[\[\]]/g, "") || "word";
  const vocabCoverage = {
    basicCount: basicWords.length,
    slotsPerWord: VARIANTS_PER_WORD,
    totalSlots: basicWords.length * VARIANTS_PER_WORD
  };
  const coverageCache = new Map();

  function coverageOrder(seed) {
    const key = String(seed);
    if (!coverageCache.has(key)) {
      coverageCache.set(key, shuffled(rngFromSeed(`coverage-${key}`), basicWords.map((_, index) => index)));
    }
    return coverageCache.get(key);
  }
  function byIndex(index) {
    return basicWords[((index % basicWords.length) + basicWords.length) % basicWords.length];
  }
  function choiceItemsForSlot(seed, globalSlot) {
    if (!basicWords.length) return [];
    const order = coverageOrder(seed);
    const items = [];
    const used = new Set();
    for (let offset = 0; items.length < CHOICES_PER_GENERAL && offset < basicWords.length * 2; offset++) {
      const item = basicWords[order[(globalSlot * CHOICES_PER_GENERAL + offset) % order.length]];
      const key = String(item.word).toLowerCase();
      if (!used.has(key)) {
        used.add(key);
        items.push(item);
      }
    }
    return items;
  }
  function fallbackDistractors(wordIndex, variant) {
    const out = [];
    for (let step = 1; out.length < 3; step++) {
      const item = byIndex(wordIndex + variant + step);
      if (item.word !== byIndex(wordIndex).word && !out.some(x => x.word === item.word)) out.push(item);
    }
    return out;
  }

  function vocabQuestionFromItems(r, item, distractorItems, variant, unitId, globalSlot = variant) {
    const word = item.word;
    const zh = cleanZh(item);
    const pos = posLabel(item);
    const distractorWords = distractorItems.map(x => x.word);
    const cardDistractors = distractorItems.map(x => `${x.word} = ${cleanZh(x)}`);
    const templates = [
      () => [`Which word means "${zh}"?`, word, distractorWords, [`The Chinese note "${zh}" matches "${word}".`], "Read the meaning first, then compare every spelling."],
      () => [`Choose the English word for this vocabulary note: ${zh}.`, word, distractorWords, [`The correct English word is "${word}".`], "Do not choose a word only because it looks familiar."],
      () => [`A notebook says "${zh}". Which word should be written next to it?`, word, distractorWords, [`"${word}" is the word paired with "${zh}".`], "Pair the Chinese meaning with the exact English word."],
      () => [`Which ${pos} best matches the meaning "${zh}"?`, word, distractorWords, [`The target word is "${word}", and its listed part of speech is ${pos}.`], "Use both the meaning and the part of speech."],
      () => [`Choose the correct vocabulary card.`, `${word} = ${zh}`, cardDistractors, [`Only "${word} = ${zh}" gives the right pair.`], "Check both sides of the card before answering."],
      () => [`In a 2000-word quiz, the answer for "${zh}" is _____.`, word, distractorWords, [`The blank should be filled with "${word}".`], "The blank asks for an English word, not another Chinese note."],
      () => [`Which word would help a reader understand the note "${zh}"?`, word, distractorWords, [`A reader should connect "${zh}" with "${word}".`], "Use the core meaning, not a side association."],
      () => [`Pick the word that belongs with this review note: ${zh}.`, word, distractorWords, [`"${word}" belongs with the review note "${zh}".`], "Review-note questions are direct meaning checks."],
      () => [`Which choice correctly names the basic 2000 word for "${zh}"?`, word, distractorWords, [`The basic 2000 word is "${word}".`], "Eliminate choices whose meaning does not match the note."],
      () => [`A student sees the Chinese meaning "${zh}" on a quiz. Which answer is correct?`, word, distractorWords, [`The correct answer is "${word}".`], "Match meaning first; spelling is checked after that."]
    ];
    const [text, correct, distractors, steps, tip] = templates[variant % VARIANTS_PER_WORD]();
    const q = mc(
      r,
      unitId,
      1 + (variant % 3),
      text,
      correct,
      distractors,
      steps,
      tip,
      "Distractors are other basic 2000 words, so familiarity alone is not enough.",
      `Basic 2000 vocabulary: ${word}`
    );
    q.vocabWord = word;
    q.vocabSlot = `${word}:${variant}`;
    q.globalSlot = globalSlot;
    q.taxonomyTopic = "Basic 2000 vocabulary";
    return q;
  }
  function vocabQuestionForGlobalSlot(r, seed, quizId, localIndex, unitId) {
    const globalSlot = quizIndexById[quizId] * GENERAL_PER_QUIZ + localIndex;
    const items = choiceItemsForSlot(seed, globalSlot);
    const targetOffset = globalSlot % items.length;
    const target = items[targetOffset];
    const distractors = items.filter((_, index) => index !== targetOffset);
    const variant = (hashSeed(`${seed}:${quizId}:${localIndex}`) + globalSlot) % VARIANTS_PER_WORD;
    return vocabQuestionFromItems(r, target, distractors, variant, unitId, globalSlot);
  }
  function generateVocabSlot(wordIndex, variant, seed = 1) {
    const item = byIndex(wordIndex);
    const r = rngFromSeed(`bank-${seed}-${wordIndex}-${variant}`);
    return vocabQuestionFromItems(r, item, fallbackDistractors(wordIndex, variant), variant, 1 + (wordIndex % U.length), wordIndex * VARIANTS_PER_WORD + variant);
  }

  const readingNames = ["Amy", "Ben", "Cindy", "David", "Ella", "Frank", "Grace", "Henry", "Ivy", "Jack", "Kelly", "Leo", "Mina", "Nick", "Olivia", "Peter", "Ruby", "Sam", "Tina", "Victor", "Wendy", "Yuki", "Zoe", "Oscar", "Nina"];
  const readingPlaces = ["school", "library", "market", "park", "classroom", "garden", "store", "home", "office", "bus stop"];
  const readingThings = ["book box", "lunch table", "clean desk", "small club", "music class", "food stand", "game day", "map wall", "gift bag", "water bottle"];
  const readingProblems = ["the room is small", "many students are busy", "the box is heavy", "the day is rainy", "the line is long", "the door is closed", "the sign is old", "the bus is late", "the class is loud", "the work is hard"];
  const readingActions = ["puts a clear sign near the door", "asks two friends to help", "writes a short note", "moves the table to the front", "cleans the desk before class", "brings a small gift", "calls the teacher", "checks the map again", "shares the plan with the class", "waits near the bus stop"];
  const readingResults = ["more people come before lunch", "the class finishes the work", "the teacher smiles", "the group finds the answer", "the plan works in the end", "everyone has a good day", "the new student feels glad", "the family gets home early", "the club grows after school", "the team learns a useful lesson"];

  function generatedReading(seed, quizId, passageIndex) {
    const quizIndex = quizIndexById[quizId];
    const serial = quizIndex * 2 + passageIndex;
    const r = rngFromSeed(`reading-${seed}-${quizId}-${passageIndex}`);
    const name = readingNames[(serial + ri(r, 0, readingNames.length - 1)) % readingNames.length];
    const place = readingPlaces[(serial + ri(r, 0, readingPlaces.length - 1)) % readingPlaces.length];
    const thing = readingThings[(serial + ri(r, 0, readingThings.length - 1)) % readingThings.length];
    const problem = readingProblems[(serial + ri(r, 0, readingProblems.length - 1)) % readingProblems.length];
    const action = readingActions[(serial + ri(r, 0, readingActions.length - 1)) % readingActions.length];
    const result = readingResults[(serial + ri(r, 0, readingResults.length - 1)) % readingResults.length];
    const title = `A Clear Plan ${serial + 1}`;
    const passage = `${name} has a plan at the ${place}. The plan is about a ${thing}, but it is not easy because ${problem}. ${name} ${action}. Soon, ${result}. ${name} learns that one small idea can help people work together.`;
    return {
      title,
      unitId: 15 + (serial % 5),
      passage,
      glossary: [],
      properNouns: [name],
      questions: [
        [`What is the best title for this reading?`, `${name}'s Small Plan`, [`A Long Trip`, `A New Phone`, `A Hot Dinner`], `The reading is about ${name}'s plan and how it works.`],
        [`What problem does ${name} face?`, problem, [`the food is cold`, `the book is lost`, `the test is over`], `The passage says the plan is not easy because ${problem}.`],
        [`What can we learn from the reading?`, `A small idea can help people work together.`, [`People should never ask for help.`, `A plan is useful only at home.`, `Friends cannot solve problems.`], `The last sentence gives this lesson directly.`]
      ]
    };
  }
  function readingQuestions(r, seed, quizId) {
    return [0, 1].flatMap((passageIndex) => {
      const passage = generatedReading(seed, quizId, passageIndex);
      return passage.questions.map((row, qi) => {
        const glossaryText = passage.glossary.length ? passage.glossary.map(g => `${g.word} ${g.zh}`).join("; ") : "none";
        const text = `Reading ${passageIndex + 1}: ${passage.title}\n\n${passage.passage}\n\nWords: ${glossaryText}\n\n${row[0]}`;
        const q = mc(r, passage.unitId, qi === 0 ? 2 : 3, text, row[1], row[2], [row[3]], "Read the question, then return to the passage for proof.", "Do not answer from common sense only; use the passage.", "Reading comprehension");
        q.readingGroup = passageIndex + 1;
        q.taxonomyTopic = `Reading set ${passageIndex + 1}`;
        q.glossary = passage.glossary;
        q.passage = passage.passage;
        q.readingTitle = passage.title;
        q.allowedProperNouns = passage.properNouns;
        return q;
      });
    });
  }

  function generateQuiz(quizId, seedOverride) {
    const blueprint = quizCatalog.find(item => item.id === quizId);
    if (!blueprint) throw new Error("Unknown quiz id");
    const seed = seedOverride == null ? hashSeed(quizId) : Math.max(1, Math.min(999999, Number(seedOverride) || hashSeed(seedOverride)));
    const r = rngFromSeed(seed);
    const unitCycle = blueprint.unitIds.length ? blueprint.unitIds : U.map(u => u.id);
    const questions = [];
    for (let i = 0; i < GENERAL_PER_QUIZ; i++) {
      const unitId = unitCycle[i % unitCycle.length];
      const q = vocabQuestionForGlobalSlot(r, seed, quizId, i, unitId);
      q.ability = abilityKeys[i % abilityKeys.length];
      questions.push(q);
    }
    questions.push(...readingQuestions(r, seed, quizId));
    questions.forEach((question, index) => { question.officialOrder = index + 1; });
    return {
      kind: "quiz",
      id: `QUIZ-${blueprint.id}-${seed}`,
      quizId: blueprint.id,
      seed,
      title: blueprint.title,
      grade: blueprint.group,
      term: blueprint.chapter,
      chapter: blueprint.chapter,
      scope: blueprint.scope,
      minutes: 50,
      questionCount: questions.length,
      officialCodes: blueprint.officialCodes,
      unitIds: [...blueprint.unitIds],
      blueprint: "english-50q-seeded-2000-visible-coverage",
      taxonomySource: blueprint.source,
      questions
    };
  }

  function generate(seed, level = 2) {
    const r = rngFromSeed(hashSeed(seed) + level * 100003);
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
      question.ability = abilityKeys[index % abilityKeys.length];
      question.taxonomySection = chosen.section;
      question.taxonomyTopic = chosen.title;
      return question;
    });
    questions.forEach((question, index) => { question.officialOrder = index + 1; });
    return { id: `ENG-${seed}-${level}`, seed: Number(seed), level, createdAt: new Date().toISOString(), blueprint: "self-defined-30q-40min-english-scope", questions };
  }

  return {
    generate,
    generateQuiz,
    generateVocabSlot,
    quizCatalog,
    abilityLabel,
    groupNames,
    vocabCoverage,
    tier3Words,
    GENERAL_PER_QUIZ,
    READING_PER_QUIZ,
    VARIANTS_PER_WORD
  };
})();
