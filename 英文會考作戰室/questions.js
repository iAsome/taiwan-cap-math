window.EXAM_ENGINE = (() => {
  const U = window.ENGLISH_DATA.units;
  const quizTaxonomy = window.QUIZ_TAXONOMY || {};
  const CHAPTER_QUESTION_COUNT = 20;
  const CHAPTER_MINUTES = 20;
  const REVIEW_QUESTION_COUNT = 50;
  const REVIEW_MINUTES = 50;
  const REVIEW_GENERAL_COUNT = 44;
  const CHAPTER_GRAMMAR_COUNT = 15;
  const CHAPTER_VOCAB_COUNT = 5;
  const REVIEW_GRAMMAR_COUNT = 34;
  const REVIEW_VOCAB_COUNT = 10;
  const REVIEW_READING_COUNT = 6;
  const MOCK_QUESTION_COUNT = 50;
  const MOCK_MINUTES = 80;
  const MOCK_GRAMMAR_COUNT = 20;
  const MOCK_READING_GROUP_COUNT = 10;
  const CHAPTER_DIFFICULTIES = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4];
  const REVIEW_GENERAL_DIFFICULTIES = [
    1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    4, 4, 4, 4, 4, 4
  ];
  const REVIEW_READING_DIFFICULTIES = [3, 3, 4, 4, 5, 5];
  const MOCK_GRAMMAR_DIFFICULTIES = [3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 4, 4, 5, 5, 5, 5];

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
  const countBy = (list, keyFn) => list.reduce((map, item) => {
    const key = keyFn(item);
    map[key] = (map[key] || 0) + 1;
    return map;
  }, {});
  function withTextOnlyPolicy(question) {
    return typeof TEXT_ONLY_POLICY !== "undefined" ? TEXT_ONLY_POLICY.normalizeQuestion(question, "english") : question;
  }
  function mc(r, unitId, difficulty, text, correct, distractors, steps, tip, trap, concept, formula) {
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
      formula: formula || U[unitId - 1].formula
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
    source: "Unit grammar, part-of-speech, sentence pattern, collocation, and usage quiz."
  }));
  const reviewQuizzes = window.ENGLISH_DATA.groups.map(g => ({
    id: `d${g.id}-all`,
    group: g.id,
    chapter: "Review",
    title: `${groupNames[g.id]}: review`,
    unitIds: U.filter(u => u.grade === g.id).map(u => u.id),
    officialCodes: `ENG-${groupNames[g.id]}`,
    scope: "review",
    source: "Domain review generated only from the units in this domain."
  }));
  const quizCatalog = [...chapterQuizzes, ...reviewQuizzes].map(item => ({
    ...item,
    minutes: item.scope === "chapter" ? CHAPTER_MINUTES : REVIEW_MINUTES,
    questionCount: item.scope === "chapter" ? CHAPTER_QUESTION_COUNT : REVIEW_QUESTION_COUNT
  }));
  const quizIndexById = Object.fromEntries(quizCatalog.map((item, index) => [item.id, index]));
  const abilityKeys = ["knowledge", "comprehension", "inquiry"];
  const abilityLabel = { knowledge: "字彙文法", comprehension: "篇章理解", inquiry: "推論應用" };

  const names = ["Amy", "Ben", "Cindy", "David", "Ella", "Frank", "Grace", "Henry", "Ivy", "Jack", "Kelly", "Leo", "Mina", "Nick", "Olivia", "Peter", "Ruby", "Sam", "Tina", "Victor", "Wendy", "Yuki", "Zoe"];
  const places = ["school", "the library", "the park", "the station", "the classroom", "the market", "the office", "the museum", "the bus stop", "the garden"];
  const objects = ["book", "phone", "bag", "ticket", "letter", "umbrella", "notebook", "gift", "map", "camera", "lunch box", "bike"];
  const times = ["at seven", "after class", "every Friday", "this morning", "last night", "next week", "in 2020", "on Monday", "for two years", "since 2019"];
  const actions = ["read", "study", "cook", "practice", "clean", "watch", "visit", "help", "play", "write"];
  const topics = ["school rules", "a club plan", "a family trip", "a class project", "a food stand", "a bus schedule", "a health habit", "a garden party"];

  function ctx(seed, quizId, unitId, slot) {
    const h = hashSeed(`${seed}:${quizId}:${unitId}:${slot}`);
    const at = (list, salt = 0) => list[(h + slot * 7 + unitId * 13 + salt) % list.length];
    return {
      name: at(names),
      name2: at(names, 5),
      place: at(places, 3),
      object: at(objects, 9),
      time: at(times, 11),
      action: at(actions, 15),
      topic: at(topics, 17),
      n: ""
    };
  }
  const stripItemPrefix = value => String(value).replace(/^Item\s+[^:]*:\s*/i, "");
  const fill = (text, c) => stripItemPrefix(String(text).replace(/\{(\w+)\}/g, (_, key) => c[key] ?? ""));

  function rule(unitId, topic, text, correct, distractors, step, tip, trap, ability = "knowledge", difficulty = 2) {
    return { unitId, topic, text, correct, distractors, step, tip, trap, ability, difficulty };
  }

  const RULES = {
    1: [
      rule(1, "現在簡單式與現在進行式", "{name} usually ___ to {place}, but today {name} is taking the bus.", "walks", ["is walking", "walk", "walked"], "usually signals a routine, so use the simple present with third-person -s.", "Time clues decide the tense before the verb form.", "Do not choose progressive just because the sentence says today."),
      rule(1, "現在進行式", "Look! {name2} ___ the {object} right now.", "is carrying", ["carries", "carry", "carried"], "Look and right now show an action happening now, so use be + V-ing.", "Present progressive needs both be and V-ing.", "Do not drop the be verb."),
      rule(1, "三單動詞拼字", "Which sentence is correct?", "{name} watches TV after dinner.", ["{name} watch TV after dinner.", "{name} watchs TV after dinner.", "{name} watching TV after dinner."], "A third-person singular subject takes -es after watch.", "Check the subject before adding -s or -es.", "watchs is a spelling error."),
      rule(1, "狀態動詞", "I ___ the answer to this question.", "know", ["am knowing", "knows", "knowing"], "know is a stative verb and normally does not use the progressive form.", "State verbs describe condition or thought, not an action in progress.", "Do not use am knowing in ordinary present meaning."),
      rule(1, "現在式用法辨識", "Which time clue usually asks for simple present?", "every day", ["right now", "at this moment", "Look!"], "every day marks a repeated habit.", "Routine clues go with simple present.", "Do not mix habit clues with progressive clues.")
    ],
    2: [
      rule(2, "不規則過去式", "{name} ___ a new {object} last night.", "bought", ["buyed", "buys", "buying"], "last night is a finished past time, and buy becomes bought.", "Memorize common irregular past forms.", "Do not add -ed to every verb."),
      rule(2, "過去式時間線索", "They ___ to {place} yesterday.", "went", ["go", "gone", "going"], "yesterday fixes the sentence in the simple past.", "Past time words decide tense first.", "gone needs a helper such as have."),
      rule(2, "will 即時決定", "A: The phone is ringing. B: I ___ it.", "will answer", ["am going to answer", "answered", "answer"], "A decision made at the moment often uses will.", "Use will for a quick decision.", "Do not use past tense for a future response."),
      rule(2, "be going to 計畫或跡象", "Look at those dark clouds. It ___ soon.", "is going to rain", ["will rain", "rained", "rains"], "Visible evidence points to be going to.", "Evidence now often points to be going to.", "Do not use simple present for this prediction."),
      rule(2, "未來式結構", "Which sentence is grammatically correct?", "{name} is going to visit {place} next week.", ["{name} going to visit {place} next week.", "{name} is go to visit {place} next week.", "{name} went to visit {place} next week."], "be going to needs the be verb before going.", "Check the full structure: be + going to + V.", "Do not omit be.")
    ],
    3: [
      rule(3, "for 與 since", "{name} has lived in Taipei ___ 2019.", "since", ["for", "at", "on"], "since introduces a starting point.", "since + starting point; for + length of time.", "Do not use for before a year that marks a start."),
      rule(3, "for 與時間長度", "{name2} has studied English ___ two years.", "for", ["since", "on", "at"], "two years is a length of time, so use for.", "A duration takes for.", "Do not use since before a duration."),
      rule(3, "現在完成式與過去式", "I saw that movie ___.", "yesterday", ["already", "yet", "since 2020"], "simple past works with a finished past time such as yesterday.", "Exact past time uses simple past.", "Do not pair present perfect with yesterday."),
      rule(3, "完成式結構", "Which sentence is correct?", "{name} has finished the report.", ["{name} have finished the report.", "{name} has finish the report.", "{name} finished the report already since."], "A singular subject uses has + past participle.", "Present perfect uses have/has + p.p.", "Do not use base verb after has."),
      rule(3, "完成式經驗", "___ you ever visited {place}?", "Have", ["Did", "Are", "Do"], "ever in an experience question usually uses present perfect.", "Experience questions often start with Have/Has.", "Did you ever is possible in some dialects, but this quiz targets standard present perfect.")
    ],
    4: [
      rule(4, "must not 與 do not have to", "You ___ smoke here. It is against the rule.", "must not", ["do not have to", "may not have to", "should to"], "must not means prohibition.", "Ask whether the sentence means forbidden or unnecessary.", "do not have to means not necessary, not forbidden."),
      rule(4, "不必做某事", "You ___ come early if you are busy. It is not necessary.", "do not have to", ["must not", "may not", "should not to"], "not necessary points to do not have to.", "Necessity and prohibition are different meanings.", "must not is too strong here."),
      rule(4, "情態助動詞後接原形", "{name} can ___ the {object} after class.", "take", ["takes", "took", "taking"], "A modal is followed by the base verb.", "can/must/should + base verb.", "Do not add -s after a modal."),
      rule(4, "推測程度", "{name2} has not eaten all day. {name2} ___ be hungry.", "must", ["can", "should to", "has to be eating"], "The evidence is strong, so must expresses a strong conclusion.", "Use must for a strong logical guess.", "can is not used this way in affirmative deduction."),
      rule(4, "許可與建議", "Which sentence uses a modal correctly?", "{name} should ask the teacher first.", ["{name} should to ask the teacher first.", "{name} should asks the teacher first.", "{name} should asked the teacher first."], "should is followed by the base verb.", "Modal structure stays simple.", "Do not add to after should.")
    ],
    5: [
      rule(5, "不可數名詞", "Can you give me some ___ about the bus schedule?", "information", ["informations", "an information", "information's"], "information is uncountable in this use.", "Some common nouns do not take plural -s.", "Do not add -s to information."),
      rule(5, "much 與不可數名詞", "We do not have much ___ today.", "homework", ["homeworks", "a homework", "homework's"], "homework is uncountable, so much homework is correct.", "much goes with uncountable nouns.", "Do not use a homework."),
      rule(5, "代名詞受格", "This gift is for ___.", "him", ["he", "his", "himself"], "After a preposition, use the object form.", "for/to/with take object pronouns.", "he is a subject form."),
      rule(5, "冠詞 a/an", "{name} needs ___ umbrella.", "an", ["a", "the a", "no article"], "umbrella starts with a vowel sound, so use an.", "Choose a/an by sound, not spelling alone.", "Do not use a before a vowel sound."),
      rule(5, "所有格代名詞", "That notebook is ___.", "hers", ["her", "she", "her's"], "hers is an independent possessive pronoun.", "Use hers without an apostrophe.", "her's is not standard English.")
    ],
    6: [
      rule(6, "連綴動詞後接形容詞", "This soup smells ___.", "delicious", ["deliciously", "delicious's", "delicion"], "smell as a linking verb is followed by an adjective.", "look/feel/sound/smell/taste can link to adjectives.", "Do not add -ly after a linking verb."),
      rule(6, "形容詞描述主詞", "You look ___ today. Are you okay?", "tired", ["tiredly", "tiring", "tire"], "look links the subject to an adjective.", "Ask whether the word describes the subject or the action.", "tiredly describes an action, not the subject here."),
      rule(6, "副詞修飾動詞", "{name} finished the race ___.", "well", ["good", "goodly", "wellly"], "well is the adverb form used to describe how someone did something.", "good is usually an adjective; well is often an adverb.", "goodly is not the target form."),
      rule(6, "fast 的副詞形式", "{name2} drives very ___.", "fast", ["fastly", "faster than", "fasting"], "fast can be both adjective and adverb.", "Not every adverb ends in -ly.", "fastly is not standard for this meaning."),
      rule(6, "程度副詞位置", "Which sentence is correct?", "{name} is very careful with the {object}.", ["{name} is careful very with the {object}.", "{name} very is careful with the {object}.", "{name} is careful with very the {object}."], "very usually comes before the adjective it modifies.", "Place degree words right before adjectives or adverbs.", "Do not separate very from the word it modifies.")
    ],
    7: [
      rule(7, "比較級", "This question is ___ than that one.", "more difficult", ["difficulter", "more difficulter", "difficult more"], "Longer adjectives often use more.", "Use either -er or more, not both.", "Do not double mark the comparative."),
      rule(7, "短形容詞比較級", "{name} is ___ than {name2}.", "taller", ["more tall", "more taller", "tallest"], "Short adjectives often take -er.", "than signals a comparative form.", "tallest is superlative, not comparative."),
      rule(7, "原級比較", "This bag is as ___ as that one.", "heavy", ["heavier", "heaviest", "more heavy"], "as...as takes the base adjective.", "Do not use comparative forms inside as...as.", "heavier does not fit after as."),
      rule(7, "最高級", "This is the ___ story in the book.", "most interesting", ["more interesting", "interestingest", "most interestinger"], "the and in the group point to a superlative.", "Long adjectives use most for superlative.", "Do not combine most and -er."),
      rule(7, "比較句結構", "Which sentence is correct?", "{name}'s room is cleaner than {name2}'s room.", ["{name}'s room is clean than {name2}'s room.", "{name}'s room is cleanest than {name2}'s room.", "{name}'s room is more cleaner than {name2}'s room."], "than needs a comparative form.", "Cleaner already marks comparison.", "Do not use more cleaner.")
    ],
    8: [
      rule(8, "時間介系詞 on", "We will meet ___ Monday.", "on", ["at", "in", "to"], "Use on with days.", "in for long periods, on for days/dates, at for clock times.", "Do not use at with Monday."),
      rule(8, "時間介系詞 in", "{name} was born ___ 2010.", "in", ["on", "at", "to"], "Use in with years.", "Years and months usually take in.", "Do not use on for a year alone."),
      rule(8, "時間介系詞 at", "The class starts ___ seven.", "at", ["in", "on", "to"], "Use at with exact clock times.", "Exact time points take at.", "Do not use in seven for clock time."),
      rule(8, "reach 不加介系詞", "The train will ___ Taipei Station at nine.", "reach", ["arrive", "arrive to", "reach to"], "reach takes a place directly.", "reach + place; arrive at/in + place.", "Do not say reach to a place."),
      rule(8, "arrive at/in", "We will ___ at the airport soon.", "arrive", ["reach", "reach to", "arrived to"], "arrive can be followed by at for a point-like place.", "arrive needs at/in when a place follows.", "Do not use arrive to.")
    ],
    9: [
      rule(9, "although 不與 but 重複", "___ it was raining, we still went hiking.", "Although", ["Because", "So", "Although...but"], "Although already marks contrast.", "Do not double mark contrast with although and but in the same clause pair.", "Although...but is a common error."),
      rule(9, "because 不與 so 重複", "It rained hard, ___ we stayed home.", "so", ["because", "although", "so...because"], "so connects the result after the reason.", "Use one cause-result marker, not two.", "Do not use because after a complete result clause here."),
      rule(9, "對等連接詞", "I like tea, ___ {name} likes coffee.", "but", ["although", "because", "when"], "Two equal clauses with contrast can be joined by but.", "Coordinating conjunctions join equal parts.", "although would make a dependent clause."),
      rule(9, "從屬連接詞", "___ {name2} was tired, {name2} kept working.", "Although", ["But", "So", "And"], "Although begins a dependent contrast clause.", "Use a subordinating conjunction when one clause depends on another.", "But should not start this dependent clause in this structure."),
      rule(9, "條件子句", "___ you need help, call me.", "If", ["And", "So", "But"], "If introduces a condition.", "A condition clause explains when something will happen.", "And only adds information; it does not mark a condition.")
    ],
    10: [
      rule(10, "動名詞受詞", "{name} enjoys ___ mystery novels.", "reading", ["to read", "read", "reads"], "enjoy is followed by a gerund.", "Some verbs require V-ing as the object.", "Do not use to read after enjoy in this pattern."),
      rule(10, "不定詞受詞", "They decided ___ early.", "to leave", ["leaving", "leave", "left"], "decide is followed by an infinitive.", "decide/plan/hope often take to V.", "Do not use leaving after decided here."),
      rule(10, "介系詞後接動名詞", "{name2} is interested in ___ Japanese.", "learning", ["to learn", "learn", "learns"], "A verb after a preposition takes the gerund form.", "Preposition + V-ing.", "Do not use in to learn."),
      rule(10, "目的不定詞", "{name} went to {place} ___ a book.", "to borrow", ["borrowing", "borrowed", "borrows"], "to V can show purpose.", "Ask whether the phrase answers why.", "Do not use V-ing for this purpose phrase."),
      rule(10, "主詞位置的動名詞", "___ every day is good practice.", "Reading", ["Read", "To reading", "Reads"], "A verb used as the subject can become a gerund.", "V-ing can act like a noun.", "To reading mixes two forms.")
    ],
    11: [
      rule(11, "被動語態時態", "This bridge ___ in 1930.", "was built", ["is built", "has built", "built"], "in 1930 points to past passive: was/were + p.p.", "Passive voice needs be + p.p.", "Do not omit be."),
      rule(11, "現在被動", "English ___ in many countries.", "is spoken", ["speaks", "was spoken", "spoken"], "A general present passive uses is/am/are + p.p.", "The subject receives the action.", "spoken alone is incomplete."),
      rule(11, "不及物動詞無被動", "The accident ___ yesterday.", "happened", ["was happened", "is happened", "happens"], "happen is intransitive and does not form a passive.", "Only verbs with objects can usually become passive.", "Do not make happen passive."),
      rule(11, "by 片語", "The window was broken ___ the strong wind.", "by", ["with", "from", "at"], "by can introduce the doer or cause in a passive sentence.", "Passive sentences may include by + agent/cause.", "Do not use at for the agent."),
      rule(11, "主動改被動", "Which sentence is passive?", "The letter was written by {name}.", ["{name} wrote the letter.", "{name} is writing the letter.", "{name} writes letters."], "was written by marks passive voice.", "Look for be + p.p.", "A sentence with an object is not automatically passive.")
    ],
    12: [
      rule(12, "附加問句", "Your sister plays the piano well, ___?", "doesn't she", ["does she", "isn't she", "doesn't he"], "A positive statement takes a negative tag.", "Match the helper and pronoun.", "plays needs does in the tag."),
      rule(12, "完成式附加問句", "You haven't finished your homework, ___?", "have you", ["haven't you", "did you", "don't you"], "A negative statement takes a positive tag.", "Use the same helper from the statement.", "Do not switch to did."),
      rule(12, "一般動詞問句", "___ {name} like coffee?", "Does", ["Is", "Do", "Did"], "A third-person singular subject in a present question uses does.", "Do-support forms questions with ordinary verbs.", "Is is for be-verb or progressive patterns."),
      rule(12, "問句語序", "Which question is correct?", "Did {name2} bring the {object}?", ["{name2} brought the {object}?", "Did {name2} brought the {object}?", "Does {name2} brought the {object}?"], "After did, use the base verb.", "Question helper carries the tense.", "Do not keep past tense on the main verb after did."),
      rule(12, "否定句", "{name} ___ know the answer.", "doesn't", ["don't", "isn't", "didn't to"], "Third-person singular present negative uses doesn't + base verb.", "Use do-support for ordinary verbs.", "Do not use isn't with know.")
    ],
    13: [
      rule(13, "關係代名詞 who", "The woman ___ called you yesterday is my aunt.", "who", ["which", "whose", "what"], "who refers to a person and works as the subject in the relative clause.", "Find the antecedent first.", "which does not refer to a person here."),
      rule(13, "關係代名詞 which/that", "This is the book ___ I told you about.", "that", ["who", "whose", "what"], "that can refer to a thing in a defining relative clause.", "Use who for people, which/that for things.", "what is not used after a clear antecedent."),
      rule(13, "whose 所有格", "The student ___ bag was lost went to the office.", "whose", ["who", "which", "that"], "whose shows possession.", "If the next noun belongs to the antecedent, use whose.", "who cannot directly show possession before bag."),
      rule(13, "非限定子句", "Mr. Lin, ___ teaches math, is very patient.", "who", ["that", "whose", "what"], "Non-defining clauses after commas do not use that.", "Commas change the relative clause type.", "Do not use that after the comma pair."),
      rule(13, "關係子句位置", "Which sentence is correct?", "The movie that we watched was exciting.", ["The movie we watched it was exciting.", "The movie what we watched was exciting.", "The movie that we watched it was exciting."], "The object inside the relative clause is replaced, so do not repeat it.", "Avoid double objects in relative clauses.", "Do not keep it after watched.")
    ],
    14: [
      rule(14, "現在假設", "If I ___ a bird, I would fly to you.", "were", ["am", "was", "be"], "Unreal present condition uses were in this fixed pattern.", "If I were is the standard test form.", "Do not choose am for an unreal condition."),
      rule(14, "過去假設結果", "If {name} had studied harder, {name} ___ the exam.", "would have passed", ["would pass", "passed", "will pass"], "Past unreal result uses would have + p.p.", "had + p.p. pairs with would have + p.p.", "Do not use will for an unreal past result."),
      rule(14, "現在假設結果", "If {name2} had more time, {name2} ___ the project.", "would finish", ["will finish", "finished", "would have finished"], "Unreal present result uses would + base verb.", "Match the time frame of the condition.", "would have finished points to unreal past, not present."),
      rule(14, "if 子句動詞", "Which sentence is correct?", "If {name} were here, we would start now.", ["If {name} is here, we would start now.", "If {name} were here, we will start now.", "If {name} be here, we would start now."], "Unreal present uses were and would.", "Keep both halves in the same unreal pattern.", "Do not mix is with would."),
      rule(14, "過去假設條件", "If they ___ earlier, they would have caught the bus.", "had left", ["left", "have left", "would leave"], "Past unreal condition uses had + p.p.", "The if-clause shows the unreal past condition.", "Do not put would in the if-clause.")
    ],
    15: [
      rule(15, "主旨範圍", "A paragraph explains that students save money by bringing lunch, using old notebooks, and taking the bus. Which title fits best?", "Small Ways Students Can Save Money", ["Taking the Bus Only", "A Lunch Box Story", "Why Notebooks Are Expensive"], "The best title covers all main examples.", "Main idea choices should be broad enough but not too broad.", "Do not choose a detail as the title.", "comprehension"),
      rule(15, "最佳標題", "A passage begins, 'Have you ever wondered why cats sleep so much?' What title best matches the topic?", "Why Do Cats Sleep So Much?", ["My Favorite Cat", "How to Buy Cat Food", "The History of Dogs"], "The opening question sets the passage topic.", "A title should match the whole passage.", "Do not choose a title that only shares one word.", "comprehension"),
      rule(15, "細節與主旨", "Which choice is too narrow for a passage about exercise, sleep, and healthy food?", "Running after school", ["Three habits for health", "How students stay healthy", "Daily habits and health"], "Running is only one possible detail.", "Too-narrow choices miss other major points.", "A detail is not the main idea.", "comprehension"),
      rule(15, "主題句", "Which sentence sounds like a topic sentence?", "There are three easy ways to make a classroom cleaner.", ["The floor was wet near the door.", "Mina picked up one bottle.", "The bell rang at noon."], "A topic sentence introduces the whole paragraph.", "Look for a sentence that can cover later details.", "A single event is usually too narrow.", "comprehension"),
      rule(15, "段落功能", "A final paragraph says, 'For these reasons, a small change can help the whole school.' What is its function?", "It gives the conclusion.", ["It starts a new example.", "It lists a character.", "It asks a new question."], "For these reasons points back to earlier support.", "Conclusion sentences often summarize the point.", "Do not read a conclusion as a new example.", "comprehension")
    ],
    16: [
      rule(16, "推論證據", "Sales dropped after the price went up, so the shop lowered the price again. What can we infer?", "The higher price hurt sales.", ["The shop sold more than before.", "The product was free.", "The shop closed forever."], "The price rose, sales dropped, then the shop changed the price back.", "Inference must be supported by clues in the text.", "Do not choose an idea without evidence.", "inquiry"),
      rule(16, "代名詞指涉", "Sam left his phone at the restaurant, so he went back to get it. What does it refer to?", "his phone", ["the restaurant", "Sam", "the way back"], "it is singular and matches his phone in meaning.", "Replace the pronoun with each choice to test it.", "Do not choose a place when the sentence needs an object.", "comprehension"),
      rule(16, "語氣判斷", "The writer says, 'Luckily, the missing ticket was still in my bag!' What tone is shown?", "relieved", ["angry", "bored", "uncertain"], "Luckily and the exclamation show relief.", "Tone comes from word choice and punctuation.", "Do not ignore emotional clues.", "inquiry"),
      rule(16, "推論與直接細節", "Which answer is an inference, not a direct detail?", "{name} probably felt nervous before the test.", ["The test started at nine.", "{name} had two pencils.", "The teacher opened the door."], "probably felt nervous extends from clues instead of copying a detail.", "Inference goes one step beyond the sentence but still needs support.", "Do not call a copied fact an inference.", "inquiry"),
      rule(16, "指涉一致", "The students put the boxes on the table because they were heavy. What does they refer to?", "the boxes", ["the students", "the table", "the room"], "heavy describes the boxes, not the students or table.", "Pronoun reference must fit grammar and meaning.", "Do not choose the nearest noun if meaning fails.", "comprehension")
    ],
    17: [
      rule(17, "borrow 與 lend", "Could I ___ your dictionary? I forgot mine.", "borrow", ["lend", "borrowed", "lending"], "The speaker receives the item, so use borrow.", "borrow is used from the receiver's view.", "Do not use lend when the subject receives.", "inquiry"),
      rule(17, "lend 用法", "Can you ___ me some money? I will pay you back tomorrow.", "lend", ["borrow", "lent", "borrowing"], "The subject gives something temporarily, so use lend.", "lend is used from the giver's view.", "Do not use borrow for the giver.", "inquiry"),
      rule(17, "bring 與 take", "Please ___ your notebook when you come to class.", "bring", ["take", "brought", "taking"], "The movement is toward the speaker/classroom, so use bring.", "bring moves toward the speaker or target place.", "Do not use take for movement toward here.", "inquiry"),
      rule(17, "take 用法", "Do not forget to ___ your umbrella when you leave home.", "take", ["bring", "took", "bringing"], "The movement is away from home, so use take.", "take moves something away from the starting point.", "Do not choose bring just because an object is carried.", "inquiry"),
      rule(17, "固定搭配", "Which sentence is correct?", "{name} borrowed a book from {name2}.", ["{name} borrowed {name2} a book.", "{name} lent from {name2} a book.", "{name} borrowed to {name2} a book."], "borrow commonly uses from for the source.", "Check the direction and the preposition together.", "Do not mix borrow with lend patterns.", "inquiry")
    ],
    18: [
      rule(18, "-ed 情緒形容詞", "After hearing the confusing directions, I felt totally ___.", "confused", ["confusing", "confuse", "confuses"], "-ed describes the person's feeling.", "Use -ed for how someone feels.", "Do not use -ing for the person who receives the feeling.", "knowledge"),
      rule(18, "-ing 情緒形容詞", "The movie was so ___ that I almost fell asleep.", "boring", ["bored", "bore", "bores"], "-ing describes the thing that causes the feeling.", "Use -ing for the cause.", "Do not use bored to describe the movie in this structure.", "knowledge"),
      rule(18, "人與事物方向", "Which sentence is correct?", "{name} was interested in the story.", ["The story was interested.", "{name} was interesting by the story.", "{name} interest in the story."], "A person can be interested in something.", "Check whether the adjective describes the person or the cause.", "Do not swap -ed and -ing forms.", "knowledge"),
      rule(18, "形容詞位置", "Choose the correct adjective position.", "a friendly teacher", ["a teacher friendly", "a friend teacherly", "a teacher friend"], "An adjective usually comes before the noun it modifies.", "Position helps identify the word's role.", "Do not place a simple adjective after the noun here.", "knowledge"),
      rule(18, "詞性判斷", "In 'The exciting game ended late,' exciting is used as a _____.", "adjective", ["verb", "noun", "preposition"], "exciting modifies game, so it functions as an adjective.", "Ask what word it modifies.", "Do not judge only by the -ing ending.", "knowledge")
    ],
    19: [
      rule(19, "affect 作動詞", "Air pollution can seriously ___ people's health.", "affect", ["effect", "affects's", "effected"], "The blank needs a verb after can.", "Judge the needed part of speech first.", "effect is usually a noun in this contrast.", "knowledge"),
      rule(19, "effect 作名詞", "Doctors are studying the ___ of the new medicine.", "effect", ["affect", "affects", "affecting"], "the points to a noun phrase, so use effect.", "Articles often signal a noun.", "Do not choose the verb form after the.", "knowledge"),
      rule(19, "reduce/reuse/recycle 用法", "Which sentence uses the verb form correctly?", "We should reduce waste first.", ["We should reduction waste first.", "We should reusable waste first.", "We should recycling waste first."], "After should, use a base verb.", "Modal + base verb also applies to topic words.", "Do not use noun or adjective forms after should.", "inquiry"),
      rule(19, "詞性結構", "In 'The effect of sleep is clear,' effect is a _____.", "noun", ["verb", "adverb", "conjunction"], "The effect is a noun phrase.", "The article the helps identify a noun.", "Do not confuse spelling with function.", "knowledge"),
      rule(19, "搭配判斷", "Which sentence is grammatical?", "Too much screen time can affect sleep.", ["Too much screen time can effect sleep.", "Too much screen time can affects sleep.", "Too much screen time can affected sleep."], "can needs a base verb, and affect is the verb.", "Use structure to choose between similar words.", "Do not choose by sound alone.", "inquiry")
    ],
    20: [
      rule(20, "名詞字尾 -tion", "In 'Good communication helps a team,' communication is a _____.", "noun", ["verb", "adjective", "adverb"], "-tion often forms nouns.", "Suffixes can show part of speech.", "Do not judge only from the root communicate.", "knowledge"),
      rule(20, "形容詞字尾 -ful", "Which word is most likely an adjective because of its suffix?", "helpful", ["quickly", "movement", "teacher"], "-ful often forms adjectives.", "A suffix can signal a word's role in a sentence.", "Do not choose a noun suffix such as -ment.", "knowledge"),
      rule(20, "否定字首", "Which word is formed with a negative prefix?", "unhappy", ["teacher", "reading", "careful"], "un- is a common negative prefix.", "Prefixes can show direction before you read the full sentence.", "Do not treat every beginning letter as a prefix.", "knowledge"),
      rule(20, "副詞字尾 -ly", "In 'She answered politely,' politely functions as a _____.", "adverb", ["noun", "preposition", "article"], "politely describes how she answered.", "Many -ly words function as adverbs.", "Do not call a word a noun just because it is long.", "knowledge"),
      rule(20, "構詞與詞性", "Which pair shows the correct part-of-speech change?", "communicate -> communication", ["happy -> happilyness", "teach -> teacherly noun", "move -> movemently"], "communicate is a verb and communication is a noun.", "Check whether the suffix creates a real word and role.", "Do not add suffixes mechanically.", "inquiry")
    ]
  };

  const GRAMMAR_FORMS = [
    ["blank", data => data.stem],
    ["correct-sentence", data => data.stem.includes("___") ? "Which sentence is correct?" : data.stem],
    ["fix-error", data => data.stem.includes("___") ? `Which answer fixes this sentence?\n${data.wrongSentences[0]}` : "Which sentence is correct?"],
    ["standard-choice", data => data.stem.includes("___") ? "Which sentence uses standard English?" : "Which sentence is standard English?"],
    ["grammar-check", data => data.stem.includes("___") ? "Which sentence is grammatical?" : "Which sentence is grammatical?"],
    ["error-choice", data => data.stem.includes("___") ? `Which choice avoids the grammar error?\n${data.wrongSentences[1]}` : "Which sentence has no grammar error?"],
    ["sentence-use", data => data.stem.includes("___") ? "Which sentence uses the grammar correctly?" : "Which sentence uses the pattern correctly?"],
    ["clue", data => data.stem.includes("___") ? "Which sentence matches the grammar clue?" : data.stem],
    ["repair", data => data.stem.includes("___") ? `Choose the best repair.\n${data.wrongSentences[2]}` : "Choose the best sentence."],
    ["contrast", data => data.stem.includes("___") ? `Which answer corrects this sentence?\n${data.wrongSentences[0]}` : "Which answer is correct?"]
  ];
  const RULE_VARIANTS = {
    8: [
      rule(8, "time preposition on day", "We will meet ___ Monday.", "on", ["at", "in", "to"], "Use on with days.", "Day words take on.", "Do not use at with a day."),
      rule(8, "time preposition in year", "The store opened ___ 2020.", "in", ["on", "at", "to"], "Use in with years.", "Years take in.", "Do not use on before a year alone."),
      rule(8, "time preposition at clock time", "The class starts ___ seven.", "at", ["in", "on", "to"], "Use at with exact times.", "Clock times take at.", "Do not use in for a clock time."),
      rule(8, "reach direct object", "The train will ___ Taipei Station at nine.", "reach", ["arrive", "arrive to", "reach to"], "reach takes a place directly.", "reach + place.", "Do not add to after reach."),
      rule(8, "arrive at place", "We will ___ at the airport soon.", "arrive", ["reach", "reach to", "arrived to"], "arrive can take at before a place.", "Use arrive at for a point-like place.", "Do not use arrive to."),
      rule(8, "time preposition in morning", "I study better ___ the morning.", "in", ["on", "at", "to"], "Use in with parts of the day.", "Morning and afternoon usually take in.", "Do not use on here."),
      rule(8, "time preposition on date", "The party is ___ May 5.", "on", ["in", "at", "to"], "Use on with dates.", "A month plus a day is a date.", "Do not use in before a full date."),
      rule(8, "time preposition at night", "The bus arrived ___ night.", "at", ["in", "on", "to"], "Use at night.", "Night is a fixed phrase with at.", "Do not say in night."),
      rule(8, "transport by bus", "{name} goes to school ___ bus.", "by", ["on", "in", "at"], "Use by with a means of transport.", "by bus means the way someone travels.", "Do not use in bus in this pattern."),
      rule(8, "transport on foot", "{name2} goes to school ___ foot.", "on", ["by", "in", "at"], "Use on foot.", "on foot is a fixed phrase.", "Do not say by foot in standard school English."),
      rule(8, "place preposition at stop", "We waited ___ the bus stop.", "at", ["in", "on", "to"], "Use at for a point-like place.", "A bus stop is treated as a point.", "Do not use in for this place."),
      rule(8, "place preposition in box", "The keys are ___ the box.", "in", ["on", "at", "to"], "Use in for inside a space.", "A box can contain something.", "Do not use on unless it is on top."),
      rule(8, "place preposition on wall", "The map is ___ the wall.", "on", ["in", "at", "to"], "Use on for a surface.", "A wall is a surface here.", "Do not use in wall."),
      rule(8, "direction preposition to", "{name} walked ___ the station.", "to", ["at", "in", "on"], "Use to for direction.", "walk to shows movement toward a place.", "Do not use at for movement."),
      rule(8, "duration preposition for", "We stayed there ___ two hours.", "for", ["since", "at", "on"], "Use for with a length of time.", "two hours is a duration.", "Do not use since before a duration."),
      rule(8, "starting point from", "The bus goes ___ school to the library.", "from", ["to", "at", "on"], "Use from for the starting point.", "from...to shows a path.", "Do not use to for the start."),
      rule(8, "ending point to", "The road runs from the park ___ the market.", "to", ["from", "at", "on"], "Use to for the ending point.", "from...to shows start and end.", "Do not use from for the end."),
      rule(8, "between two things", "The bank is ___ the library and the market.", "between", ["among", "in", "on"], "Use between for two clear points.", "The sentence names two places.", "Do not use among for two places."),
      rule(8, "near place", "The bike is ___ the door.", "near", ["in", "on", "to"], "Use near to show a close place.", "near does not need another preposition.", "Do not say near to here."),
      rule(8, "under place", "The bag is ___ the table.", "under", ["on", "in", "at"], "Use under for a lower position.", "The bag is below the table.", "Do not use on for below."),
      rule(8, "over movement", "The ball went ___ the wall.", "over", ["under", "in", "at"], "Use over for movement above something.", "The ball moves above the wall.", "Do not use in for this movement."),
      rule(8, "with tool", "{name} wrote the word ___ a pen.", "with", ["by", "in", "on"], "Use with for a tool.", "A pen is the tool used.", "Do not use by before the tool here."),
      rule(8, "about topic", "This book is ___ animals.", "about", ["on", "at", "to"], "Use about for a topic.", "The book's topic is animals.", "Do not use to for a topic."),
      rule(8, "before time", "Please finish the work ___ lunch.", "before", ["after", "at", "on"], "Use before for an earlier time.", "The work must be done earlier than lunch.", "after gives the opposite meaning.")
    ]
  };
  const VOCAB_FORMS = [
    "definition",
    "meaning",
    "context",
    "usage",
    "phrase"
  ];
  const WORD_SETS = [
    [["walk", "move on foot"], ["routine", "a usual way of doing things"], ["carry", "hold and take something"], ["watch", "look at something for a time"], ["know", "have information in your mind"], ["answer", "say or write a reply"], ["habit", "something done often"], ["present", "happening now"]],
    [["buy", "get something by paying money"], ["yesterday", "the day before today"], ["future", "time after now"], ["plan", "an idea for what to do"], ["rain", "water falling from clouds"], ["phone", "a tool for calling people"], ["soon", "after a short time"], ["decide", "choose after thinking"]],
    [["since", "from a past time until now"], ["already", "before now"], ["yet", "up to now in a question or negative sentence"], ["finish", "bring something to an end"], ["experience", "something that happened to you"], ["live", "make your home in a place"], ["visit", "go to see a person or place"], ["movie", "a story shown on a screen"]],
    [["must", "have to do something"], ["should", "the right or wise thing to do"], ["rule", "something people must follow"], ["help", "make something easier for someone"], ["hungry", "needing food"], ["smoke", "use a cigarette"], ["busy", "having many things to do"], ["necessary", "needed"]],
    [["information", "facts about something"], ["homework", "school work done at home"], ["umbrella", "something used to stay dry in rain"], ["gift", "something given to another person"], ["notebook", "a book for writing notes"], ["money", "coins or bills used to buy things"], ["family", "people related to each other"], ["people", "more than one person"]],
    [["delicious", "having a very good taste"], ["tired", "needing rest"], ["well", "in a good way"], ["fast", "quickly"], ["careful", "trying not to make mistakes"], ["easy", "not hard"], ["quiet", "making little noise"], ["angry", "feeling strong displeasure"]],
    [["difficult", "not easy"], ["tall", "high in height"], ["heavy", "having much weight"], ["interesting", "making people want to know more"], ["clean", "not dirty"], ["older", "having more age"], ["same", "not different"], ["than", "used to compare two things"]],
    [["Monday", "the day after Sunday"], ["year", "twelve months"], ["station", "a place where trains or buses stop"], ["airport", "a place where planes arrive and leave"], ["reach", "get to a place"], ["arrive", "get to a place"], ["meet", "come together with someone"], ["clock", "a tool that shows time"]],
    [["although", "used to show contrast"], ["because", "used to give a reason"], ["condition", "something that must be true first"], ["while", "during the time that"], ["result", "something that happens because of something else"], ["clause", "a group of words with a subject and verb"], ["contrast", "a difference between ideas"], ["connect", "join things together"]],
    [["enjoy", "like doing something"], ["learn", "get knowledge or skill"], ["leave", "go away from a place"], ["borrow", "take something and return it later"], ["practice", "do something many times to improve"], ["interest", "a feeling of wanting to know more"], ["purpose", "the reason for doing something"], ["early", "before the usual time"]],
    [["bridge", "a road over water or a low place"], ["country", "an area with its own government"], ["window", "an opening with glass in a wall"], ["letter", "a written message"], ["happen", "take place"], ["broken", "not working or not whole"], ["spoken", "said by voice"], ["written", "made with words on paper or a screen"]],
    [["question", "a sentence that asks something"], ["negative", "saying no or not"], ["piano", "a large musical instrument with keys"], ["sister", "a female child of the same parents"], ["bring", "take something to the speaker or place"], ["base", "the simplest form"], ["tag", "a short question added to a sentence"], ["reply", "an answer"]],
    [["woman", "an adult female person"], ["aunt", "the sister of a parent"], ["bag", "something used to carry things"], ["student", "a person who studies"], ["movie", "a story shown on a screen"], ["person", "a man, woman, or child"], ["whose", "belonging to whom"], ["about", "on the subject of"]],
    [["bird", "an animal with wings and feathers"], ["fly", "move through the air"], ["exam", "a test"], ["project", "a piece of planned work"], ["earlier", "before a time"], ["catch", "get on a bus or train in time"], ["harder", "with more effort"], ["start", "begin"]],
    [["title", "the name of a passage or book"], ["topic", "the main subject"], ["detail", "a small fact"], ["healthy", "good for the body"], ["exercise", "move the body to stay strong"], ["lunch", "a meal in the middle of the day"], ["save", "keep money or time for later"], ["main", "most important"]],
    [["infer", "understand from clues"], ["evidence", "facts that support an idea"], ["tone", "the feeling of words"], ["nervous", "worried or afraid"], ["box", "a container with sides"], ["refer", "point to something"], ["probably", "very likely"], ["clue", "a sign that helps solve a problem"]],
    [["dictionary", "a book or tool that explains words"], ["lend", "give something for a short time"], ["take", "carry something away"], ["class", "a lesson or group of students"], ["home", "the place where someone lives"], ["mine", "belonging to me"], ["pay", "give money for something"], ["forget", "not remember"]],
    [["confused", "not able to understand"], ["boring", "not interesting"], ["friendly", "kind and pleasant"], ["teacher", "a person who helps students learn"], ["feeling", "an emotion"], ["story", "a set of events"], ["game", "an activity with rules"], ["personality", "the kind of person someone is"]],
    [["pollution", "dirty or harmful things in air, water, or land"], ["health", "the condition of the body or mind"], ["medicine", "something used to treat sickness"], ["waste", "things people throw away"], ["sleep", "rest with eyes closed"], ["screen", "the part of a device that shows pictures"], ["affect", "change or influence something"], ["recycle", "use old material again"]],
    [["communication", "sharing ideas or information"], ["helpful", "giving help"], ["unhappy", "not happy"], ["politely", "in a respectful way"], ["suffix", "letters added to the end of a word"], ["prefix", "letters added to the start of a word"], ["root", "the main part of a word"], ["movement", "a change of place or position"]]
  ];
  const EXTRA_TARGETS = [
    ["ask", "say a question"], ["answer", "say or write a reply"], ["begin", "start doing something"], ["build", "make something"], ["call", "speak to someone by phone"], ["change", "make something different"],
    ["check", "look carefully to see if something is right"], ["choose", "pick one thing from others"], ["clean", "make something not dirty"], ["close", "shut something"], ["come", "move toward here"], ["cook", "make food"],
    ["copy", "make the same words again"], ["count", "find how many there are"], ["cover", "put something over another thing"], ["cry", "make tears because of strong feeling"], ["cut", "divide something with a knife"], ["draw", "make a picture"],
    ["drink", "take liquid into the body"], ["drive", "control a car"], ["drop", "let something fall"], ["eat", "take food into the body"], ["find", "see where something is"], ["follow", "go after someone or obey a rule"],
    ["give", "let someone have something"], ["grow", "become bigger"], ["guess", "answer without being sure"], ["hear", "notice sound"], ["hold", "keep something in your hand"], ["join", "become part of a group"],
    ["keep", "continue to have something"], ["laugh", "show happiness with sound"], ["listen", "try to hear carefully"], ["look", "use your eyes"], ["make", "create or prepare something"], ["move", "change place"],
    ["need", "must have something"], ["open", "make something not closed"], ["paint", "put color on something"], ["pass", "go by or succeed in a test"], ["pick", "choose or take something"], ["plan", "decide what to do"],
    ["pull", "move something toward you"], ["push", "move something away from you"], ["read", "look at words and understand them"], ["remember", "keep something in your mind"], ["run", "move fast on foot"], ["save", "keep for later"],
    ["say", "speak words"], ["send", "make something go to another person"], ["share", "use or have something with others"], ["show", "let someone see something"], ["sit", "rest on a chair"], ["sleep", "rest with eyes closed"],
    ["speak", "use words with your voice"], ["stand", "be on your feet"], ["stay", "remain in a place"], ["stop", "end an action"], ["take", "get or carry something"], ["teach", "help someone learn"],
    ["tell", "give information by speaking"], ["think", "use your mind"], ["try", "make an effort"], ["turn", "move in another direction"], ["use", "do something with a tool or object"], ["wait", "stay until something happens"],
    ["wear", "have clothes on your body"], ["work", "do a job or task"], ["write", "make words with a pen or keyboard"], ["young", "not old"], ["old", "having many years"], ["new", "not old or used"],
    ["small", "not large"], ["large", "big in size"], ["short", "not long or not tall"], ["long", "not short"], ["warm", "not hot but not cold"], ["cool", "a little cold"],
    ["safe", "not dangerous"], ["kind", "nice and helpful"], ["clear", "easy to understand"], ["right", "correct"], ["wrong", "not correct"], ["important", "needing attention"],
    ["simple", "easy to understand or do"], ["special", "different in a good way"], ["common", "seen or used often"], ["fresh", "new or not old"], ["free", "costing no money"], ["full", "having no empty space"],
    ["light", "not heavy"], ["dark", "with little light"], ["ready", "prepared"], ["late", "after the right time"], ["daily", "happening every day"], ["quietly", "with little noise"],
    ["slowly", "not quickly"], ["carefully", "with attention"], ["early", "before the usual time"], ["again", "one more time"], ["away", "not here"], ["together", "with each other"]
  ];
  function expandWordSet(set, unitIndex) {
    const out = set.map(item => [...item]);
    const used = new Set(out.map(item => item[0]));
    let cursor = unitIndex * 22;
    while (out.length < 30) {
      const item = EXTRA_TARGETS[cursor % EXTRA_TARGETS.length];
      cursor++;
      if (used.has(item[0])) continue;
      used.add(item[0]);
      out.push([...item]);
    }
    return out;
  }
  function vocabEntry([word, definition], unitIndex, itemIndex) {
    const sentence = `The best word for "${definition}" is ___.`;
    const usage = `People can use "${word}" to mean ${definition}.`;
    const phrase = `${word} in a short sentence`;
    return {
      unitId: unitIndex + 1,
      word,
      definition,
      sentence,
      usage,
      phrase,
      badPhrases: [`${word} the yesterday`, `${word} very table`, `${word} more answer`],
      key: `u${unitIndex + 1}:${word}`,
      itemIndex
    };
  }
  const VOCAB_BANK = WORD_SETS.flatMap((set, unitIndex) => expandWordSet(set, unitIndex).map((item, itemIndex) => vocabEntry(item, unitIndex, itemIndex)));
  const READING_BANK = window.ENGLISH_READING_BANK || [];
  function sentenceFrom(stem, choice) {
    return stem.includes("___") ? stem.replace("___", choice) : choice;
  }
  function uniqueChoices(items, fallback) {
    return [...new Set([...items, ...fallback])].slice(0, 3);
  }
  const keyNoise = [...names, ...places, ...objects, ...times, "taipei", "taipei station", "the airport", "last night", "next week", "right now", "every day", "at this moment", "soon", "yesterday"].sort((a, b) => b.length - a.length);
  const keyNoisePattern = new RegExp(`\\b(?:${keyNoise.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "gi");
  const falseContextPattern = /^(?:at school|in class|in a message|in a short note|on a practice page|for a class report|in a club plan),\s*/i;
  function normalizeKeyText(value, semantic = false) {
    let out = String(value || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
    if (semantic) out = out.replace(falseContextPattern, "").replace(keyNoisePattern, "{x}").replace(/\b\d{4}\b/g, "{year}");
    return out.replace(/\s+/g, " ").trim();
  }
  function questionKey(q, semantic = false) {
    return [
      normalizeKeyText(q.passage || "", semantic),
      normalizeKeyText(q.text, semantic),
      ...(q.choices || []).map(choice => normalizeKeyText(choice, semantic)).sort()
    ].filter(Boolean).join("\n");
  }
  function attachQuestionKeys(q) {
    q.visibleKey = questionKey(q);
    q.semanticKey = questionKey(q, true);
    q.essenceKey = q.essenceKey || q.semanticKey;
    return q;
  }
  function newUsedKeys() {
    return { visible: new Set(), semantic: new Set(), essence: new Set(), template: new Set(), target: new Set() };
  }
  function rememberQuestion(used, q) {
    if (used.visible.has(q.visibleKey) || used.semantic.has(q.semanticKey) || used.essence.has(q.essenceKey) || used.template.has(q.templateKey) || (q.targetKey && used.target.has(q.targetKey))) return false;
    used.visible.add(q.visibleKey);
    used.semantic.add(q.semanticKey);
    used.essence.add(q.essenceKey);
    used.template.add(q.templateKey);
    if (q.targetKey) used.target.add(q.targetKey);
    return true;
  }
  function buildGrammarQuestion(r, seed, quizId, unitId, slot, difficulty) {
    const rules = RULE_VARIANTS[unitId] || RULES[unitId] || RULES[1];
    const form = GRAMMAR_FORMS[slot % GRAMMAR_FORMS.length];
    const ruleIndex = (slot + Math.floor(slot / rules.length)) % rules.length;
    const selected = rules[ruleIndex];
    const c = ctx(seed, quizId, unitId, slot);
    const stem = fill(selected.text, c);
    const answer = fill(selected.correct, c);
    const distractors = selected.distractors.map(choice => fill(choice, c));
    const correctSentence = sentenceFrom(stem, answer);
    const wrongSentences = distractors.map(choice => sentenceFrom(stem, choice));
    const text = form[1]({ stem, correctSentence, wrongSentences });
    const sentenceMode = !stem.includes("___") || ["correct-sentence", "standard-choice", "grammar-check", "error-choice", "sentence-use", "clue"].includes(form[0]);
    const correct = sentenceMode ? correctSentence : answer;
    const choices = sentenceMode ? wrongSentences : distractors;
    const q = mc(
      r,
      unitId,
      difficulty,
      text,
      correct,
      choices,
      [`正確答案「${correct}」符合本單元句型；可譯為：${correctSentence}。`, `其他選項的時態、詞性、搭配或語序和句子不合，所以不能選。`],
      `先看主詞、時間線索和空格前後，再選最自然的英文。`,
      `錯誤選項通常混用了相近形式，或少了必要的助動詞、介系詞、詞尾。`,
      `本題考點：${selected.topic}。`,
      `中文翻譯重點：${correctSentence}。`
    );
    q.ability = selected.ability || abilityKeys[slot % abilityKeys.length];
    q.taxonomyTopic = selected.topic;
    q.ruleSlot = slot;
    q.questionFormKey = `grammar:${form[0]}`;
    q.essenceKey = [
      `u${unitId}`,
      normalizeKeyText(selected.conceptKey || selected.topic, true),
      form[0],
      normalizeKeyText(stem, true),
      [answer, ...distractors].map(choice => normalizeKeyText(choice, true)).sort().join("|")
    ].join("::");
    q.templateKey = `u${unitId}:grammar:${q.essenceKey}`;
    return attachQuestionKeys(q);
  }
  function buildUniqueGrammarQuestion(used, r, seed, quizId, unitId, startSlot, difficulty) {
    for (let attempt = 0; attempt < 900; attempt++) {
      const q = buildGrammarQuestion(r, seed, quizId, unitId, startSlot + attempt, difficulty);
      if (rememberQuestion(used, q)) return q;
    }
    throw new Error(`Not enough unique grammar questions for ${quizId} unit ${unitId}`);
  }
  function vocabItem(unitId, vocabSlot) {
    const items = VOCAB_BANK.filter(item => item.unitId === unitId);
    return items[vocabSlot % items.length];
  }
  function vocabDistractors(unitId, target) {
    return VOCAB_BANK.filter(item => item.unitId === unitId && item.word !== target.word).slice(0, 12);
  }
  function buildVocabQuestion(r, seed, quizId, unitId, vocabSlot, difficulty) {
    const target = vocabItem(unitId, vocabSlot);
    const form = VOCAB_FORMS[vocabSlot % VOCAB_FORMS.length];
    const others = vocabDistractors(unitId, target);
    let text = `Which answer best explains "${target.word}"?`;
    let correct = target.definition;
    let choices = others.map(item => item.definition);
    if (form === "meaning") {
      text = `${target.definition}\nWhich word matches this meaning?`;
      correct = target.word;
      choices = others.map(item => item.word);
    } else if (form === "context") {
      text = `${target.sentence}\nWhich word best fits the blank?`;
      correct = target.word;
      choices = others.map(item => item.word);
    } else if (form === "usage") {
      text = `Which sentence uses "${target.word}" correctly?`;
      correct = target.usage;
      choices = others.map(item => item.usage.replaceAll(item.word, target.word));
    } else if (form === "phrase") {
      text = `Which answer uses "${target.word}" correctly?`;
      correct = `"${target.word}" can mean ${target.definition}.`;
      choices = others.map(item => `"${target.word}" can mean ${item.definition}.`);
    }
    const q = mc(
      r,
      unitId,
      difficulty,
      text,
      correct,
      uniqueChoices(choices, VOCAB_BANK.filter(item => item.word !== target.word).map(item => form === "meaning" || form === "context" ? item.word : item.definition)),
      [`「${target.word}」在本題中表示「${target.definition}」。`, `其他選項的英文解釋或用法和 ${target.word} 不相符。`],
      `先看題目要的是定義、語境、詞形還是搭配，再比較四個英文選項。`,
      `不要只看選項長得像不像；要確認它能不能放回句子或符合英文解釋。`,
      `本題考單字用法：${target.word}。`,
      `中文翻譯重點：${target.word}＝${target.definition}。`
    );
    q.ability = "knowledge";
    q.taxonomyTopic = "Vocabulary usage";
    q.questionFormKey = `vocab:${form}`;
    q.templateKey = `u${unitId}:vocab:${form}:${target.key}`;
    q.targetWord = target.word;
    q.targetKey = target.key;
    q.vocabSlot = vocabSlot;
    return attachQuestionKeys(q);
  }
  function buildUniqueVocabQuestion(used, r, seed, quizId, unitId, startSlot, difficulty) {
    for (let attempt = 0; attempt < 120; attempt++) {
      const q = buildVocabQuestion(r, seed, quizId, unitId, startSlot + attempt, difficulty);
      if (rememberQuestion(used, q)) return q;
    }
    throw new Error(`Not enough unique vocabulary questions for ${quizId} unit ${unitId}`);
  }
  function readingBankItem(seed, quizId, passageIndex) {
    if (!READING_BANK.length) throw new Error("English reading bank missing");
    const reviewIndex = (quizIndexById[quizId] ?? -1) - chapterQuizzes.length;
    if (reviewIndex >= 0) return READING_BANK[(hashSeed(seed) + reviewIndex * 2 + passageIndex) % READING_BANK.length];
    const base = hashSeed(`${seed}:${quizId}`) % READING_BANK.length;
    return READING_BANK[(base + passageIndex * 37) % READING_BANK.length];
  }
  function readingSetQuestions(r, passage, unitId, readingGroup, difficulties) {
    return passage.questions.map((row, qi) => {
      const q = mc(
        r,
        unitId,
        difficulties[qi] || 4,
        row[0],
        row[1],
        row[2],
        [row[3]],
        "閱讀題先定位題目問什麼，再回到文章找線索；不要只靠單一熟字猜答案。",
        "錯誤選項通常會偷換時間、人物、目的或結果，必須和原文逐一比對。",
        "閱讀理解",
        "正解必須同時符合文章事實與題目問法。"
      );
      q.ability = row[4] || (qi === 0 ? "comprehension" : "inquiry");
      q.readingGroup = readingGroup;
      q.passageId = passage.id;
      q.passage = passage.passage;
      q.readingTitle = passage.title;
      q.glossary = passage.glossary;
      q.taxonomyTopic = `Reading ${passage.category}`;
      q.questionFormKey = `reading:q${qi + 1}`;
      q.templateKey = `reading:${passage.id}:q${qi + 1}`;
      return attachQuestionKeys(q);
    });
  }
  function readingQuestions(r, seed, quizId, unitIds) {
    return [0, 1].flatMap(passageIndex => {
      const passage = readingBankItem(seed, quizId, passageIndex);
      const unitId = unitIds[passageIndex % unitIds.length];
      return readingSetQuestions(r, passage, unitId, passageIndex + 1, REVIEW_READING_DIFFICULTIES.slice(passageIndex * 3, passageIndex * 3 + 3));
    });
  }
  function mockReadingQuestions(r, seed) {
    return Array.from({ length: MOCK_READING_GROUP_COUNT }, (_, passageIndex) => {
      const passage = readingBankItem(seed, "mock", passageIndex);
      const unitId = passageIndex % 2 === 0 ? 15 : 16;
      const difficulties = passageIndex < 3 ? [3, 4, 4] : passageIndex < 8 ? [4, 4, 5] : [4, 5, 5];
      return readingSetQuestions(r, passage, unitId, passageIndex + 1, difficulties);
    }).flat();
  }

  const quizSetCache = new Map();
  function buildQuizForSeed(blueprint, seed, r, used, grammarCursor, vocabCursor) {
    const questions = [];
    if (blueprint.scope === "chapter") {
      const unitId = blueprint.unitIds[0];
      for (let i = 0; i < CHAPTER_GRAMMAR_COUNT; i++) {
        const start = grammarCursor[unitId] || 0;
        const q = buildUniqueGrammarQuestion(used, r, seed, blueprint.id, unitId, start, CHAPTER_DIFFICULTIES[i]);
        grammarCursor[unitId] = q.ruleSlot + 1;
        questions.push(q);
      }
      for (let i = 0; i < CHAPTER_VOCAB_COUNT; i++) {
        const start = vocabCursor[unitId] || 0;
        const q = buildUniqueVocabQuestion(used, r, seed, blueprint.id, unitId, start, CHAPTER_DIFFICULTIES[CHAPTER_GRAMMAR_COUNT + i]);
        vocabCursor[unitId] = q.vocabSlot + 1;
        questions.push(q);
      }
    } else {
      const grammarQuotas = [9, 9, 8, 8];
      const vocabQuotas = [3, 3, 2, 2];
      blueprint.unitIds.forEach((unitId, unitIndex) => {
        for (let i = 0; i < grammarQuotas[unitIndex]; i++) {
          const index = questions.length;
          const start = grammarCursor[unitId] || 0;
          const q = buildUniqueGrammarQuestion(used, r, seed, blueprint.id, unitId, start, REVIEW_GENERAL_DIFFICULTIES[index]);
          grammarCursor[unitId] = q.ruleSlot + 1;
          questions.push(q);
        }
      });
      blueprint.unitIds.forEach((unitId, unitIndex) => {
        for (let i = 0; i < vocabQuotas[unitIndex]; i++) {
          const index = questions.length;
          const start = vocabCursor[unitId] || 0;
          const q = buildUniqueVocabQuestion(used, r, seed, blueprint.id, unitId, start, REVIEW_GENERAL_DIFFICULTIES[index]);
          vocabCursor[unitId] = q.vocabSlot + 1;
          questions.push(q);
        }
      });
      readingQuestions(r, seed, blueprint.id, blueprint.unitIds).forEach(q => {
        if (!rememberQuestion(used, q)) throw new Error(`Duplicate reading question for ${blueprint.id}`);
        questions.push(q);
      });
    }
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
      minutes: blueprint.minutes,
      questionCount: questions.length,
      officialCodes: blueprint.officialCodes,
      unitIds: [...blueprint.unitIds],
      blueprint: "english-unit-english-only-vocab-reading-v3",
      taxonomySource: blueprint.source,
      questions
    };
  }
  function quizSetForSeed(seed) {
    if (quizSetCache.has(seed)) return quizSetCache.get(seed);
    const r = rngFromSeed(seed);
    const used = newUsedKeys();
    const grammarCursor = {};
    const vocabCursor = {};
    const set = new Map(quizCatalog.map(blueprint => [blueprint.id, buildQuizForSeed(blueprint, seed, r, used, grammarCursor, vocabCursor)]));
    quizSetCache.set(seed, set);
    return set;
  }
  function cloneQuiz(quiz) {
    return JSON.parse(JSON.stringify(quiz));
  }

  function generateQuiz(quizId, seedOverride) {
    const blueprint = quizCatalog.find(item => item.id === quizId);
    if (!blueprint) throw new Error("Unknown quiz id");
    const seed = seedOverride == null ? hashSeed(quizId) : Math.max(1, Math.min(999999, Number(seedOverride) || hashSeed(seedOverride)));
    return cloneQuiz(quizSetForSeed(seed).get(quizId));
  }

  function generate(seed, level = 2) {
    const seedValue = Number(seed) || hashSeed(seed);
    const r = rngFromSeed(hashSeed(seed) + level * 100003);
    const used = newUsedKeys();
    const questions = U.map((unit, index) => {
      const start = hashSeed(`${seedValue}:mock:${level}:${unit.id}`) % 240;
      const question = buildUniqueGrammarQuestion(used, r, seedValue, "mock", unit.id, start, MOCK_GRAMMAR_DIFFICULTIES[index]);
      question.ability = abilityKeys[index % abilityKeys.length];
      question.taxonomySection = unit.domain;
      return question;
    });
    mockReadingQuestions(r, seedValue).forEach(question => {
      if (!rememberQuestion(used, question)) throw new Error("Duplicate mock reading question");
      questions.push(question);
    });
    questions.forEach((question, index) => { question.officialOrder = index + 1; });
    return {
      id: `ENG-${seedValue}-${level}`,
      seed: seedValue,
      level,
      minutes: MOCK_MINUTES,
      questionCount: questions.length,
      createdAt: new Date().toISOString(),
      blueprint: "self-defined-50q-80min-english-mock-v2",
      questions
    };
  }

  return {
    generate,
    generateQuiz,
    quizCatalog,
    abilityLabel,
    groupNames,
    GRAMMAR_BANK_META: U.flatMap(unit => (RULE_VARIANTS[unit.id] || RULES[unit.id] || []).flatMap((rule, ruleIndex) => GRAMMAR_FORMS.map(form => ({
      unitId: unit.id,
      topic: rule.topic,
      formKey: form[0],
      ruleIndex
    })))),
    CHAPTER_QUESTION_COUNT,
    REVIEW_QUESTION_COUNT,
    REVIEW_GENERAL_COUNT,
    REVIEW_GRAMMAR_COUNT,
    REVIEW_VOCAB_COUNT,
    REVIEW_READING_COUNT,
    MOCK_QUESTION_COUNT,
    MOCK_MINUTES,
    MOCK_GRAMMAR_COUNT,
    MOCK_READING_GROUP_COUNT,
    VOCAB_BANK_META: VOCAB_BANK.map(item => ({
      unitId: item.unitId,
      word: item.word,
      definition: item.definition,
      sentence: item.sentence,
      usage: item.usage,
      phrase: item.phrase,
      badPhrases: item.badPhrases,
      key: item.key
    })),
    READING_BANK_SIZE: READING_BANK.length,
    READING_CATEGORY_COUNTS: countBy(READING_BANK, item => item.category),
    READING_BANK_META: READING_BANK.map(item => ({
      id: item.id,
      category: item.category,
      title: item.title,
      wordCount: (item.passage.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g) || []).length,
      passage: item.passage,
      glossary: item.glossary,
      questionCount: item.questions.length,
      questionSignatures: item.questions.map(row => [item.id, item.passage, row[0], row[1], ...(row[2] || [])].join("\n").toLowerCase())
    }))
  };
})();
