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

  function rule(unitId, topic, text, correct, distractors, step, tip, trap, ability = "knowledge", difficulty = 2, meta = {}) {
    return { unitId, topic, text, correct, distractors, step, tip, trap, ability, difficulty, ...meta };
  }

  const RULES = {
    1: [
      rule(1, "現在簡單式與現在進行式", "{name} usually ___ to {place}, but today {name} is taking the bus.", "walks", ["is walking", "walk", "walked"], "usually signals a routine, so use the simple present with third-person -s.", "Time clues decide the tense before the verb form.", "Do not choose progressive just because the sentence says today."),
      rule(1, "現在進行式", "Look! {name2} ___ the {object} right now.", "is carrying", ["carries", "carry", "carried"], "Look and right now show an action happening now, so use be + V-ing.", "Present progressive needs both be and V-ing.", "Do not drop the be verb."),
      rule(1, "三單動詞拼字", "{name} ___ TV after dinner.", "watches", ["watch", "watchs", "watching"], "A third-person singular subject takes -es after watch.", "Check the subject before adding -s or -es.", "watchs is a spelling error."),
      rule(1, "狀態動詞", "I ___ the answer to this question.", "know", ["am knowing", "knows", "knowing"], "know is a stative verb and normally does not use the progressive form.", "State verbs describe condition or thought, not an action in progress.", "Do not use am knowing in ordinary present meaning."),
      rule(1, "現在式用法辨識", "Which time clue usually asks for simple present?", "every day", ["right now", "at this moment", "Look!"], "every day marks a repeated habit.", "Routine clues go with simple present.", "Do not mix habit clues with progressive clues.")
    ],
    2: [
      rule(2, "不規則過去式", "{name} ___ a new {object} last night.", "bought", ["buyed", "buys", "buying"], "last night is a finished past time, and buy becomes bought.", "Memorize common irregular past forms.", "Do not add -ed to every verb."),
      rule(2, "過去式時間線索", "They ___ to {place} yesterday.", "went", ["go", "gone", "going"], "yesterday fixes the sentence in the simple past.", "Past time words decide tense first.", "gone needs a helper such as have."),
      rule(2, "will 即時決定", "A: The phone is ringing. B: I ___ it.", "will answer", ["am going to answer", "answered", "answer"], "A decision made at the moment often uses will.", "Use will for a quick decision.", "Do not use past tense for a future response."),
      rule(2, "be going to 計畫或跡象", "Look at those dark clouds. It ___ soon.", "is going to rain", ["will rain", "rained", "rains"], "Visible evidence points to be going to.", "Evidence now often points to be going to.", "Do not use simple present for this prediction."),
      rule(2, "未來式結構", "{name} ___ visit {place} next week.", "is going to", ["going to", "is go to", "went to"], "be going to needs the be verb before going.", "Check the full structure: be + going to + V.", "Do not omit be.")
    ],
    3: [
      rule(3, "for 與 since", "{name} has lived in Taipei ___ 2019.", "since", ["for", "at", "on"], "since introduces a starting point.", "since + starting point; for + length of time.", "Do not use for before a year that marks a start."),
      rule(3, "for 與時間長度", "{name2} has studied English ___ two years.", "for", ["since", "on", "at"], "two years is a length of time, so use for.", "A duration takes for.", "Do not use since before a duration."),
      rule(3, "現在完成式與過去式", "I saw that movie ___.", "yesterday", ["already", "yet", "since 2020"], "simple past works with a finished past time such as yesterday.", "Exact past time uses simple past.", "Do not pair present perfect with yesterday."),
      rule(3, "完成式結構", "{name} ___ finished the report.", "has", ["have", "did", "is"], "A singular subject uses has + past participle.", "Present perfect uses have/has + p.p.", "Do not use base verb after has."),
      rule(3, "完成式經驗", "___ you ever visited {place}?", "Have", ["Did", "Are", "Do"], "ever in an experience question usually uses present perfect.", "Experience questions often start with Have/Has.", "Did you ever is possible in some dialects, but this quiz targets standard present perfect.")
    ],
    4: [
      rule(4, "must not 與 do not have to", "You ___ smoke here. It is against the rule.", "must not", ["do not have to", "may not have to", "should to"], "must not means prohibition.", "Ask whether the sentence means forbidden or unnecessary.", "do not have to means not necessary, not forbidden."),
      rule(4, "不必做某事", "You ___ come early if you are busy. It is not necessary.", "do not have to", ["must not", "may not", "should not to"], "not necessary points to do not have to.", "Necessity and prohibition are different meanings.", "must not is too strong here."),
      rule(4, "情態助動詞後接原形", "{name} can ___ the {object} after class.", "take", ["takes", "took", "taking"], "A modal is followed by the base verb.", "can/must/should + base verb.", "Do not add -s after a modal."),
      rule(4, "推測程度", "{name2} has not eaten all day. {name2} ___ be hungry.", "must", ["can", "should to", "has to be eating"], "The evidence is strong, so must expresses a strong conclusion.", "Use must for a strong logical guess.", "can is not used this way in affirmative deduction."),
      rule(4, "許可與建議", "{name} should ___ the teacher first.", "ask", ["to ask", "asks", "asked"], "should is followed by the base verb.", "Modal structure stays simple.", "Do not add to after should.")
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
      rule(6, "程度副詞位置", "{name} is ___ careful with the {object}.", "very", ["careful very", "veryly", "carefully very"], "very usually comes before the adjective it modifies.", "Place degree words right before adjectives or adverbs.", "Do not separate very from the word it modifies.")
    ],
    7: [
      rule(7, "比較級", "This question is ___ than that one.", "more difficult", ["difficulter", "more difficulter", "difficult more"], "Longer adjectives often use more.", "Use either -er or more, not both.", "Do not double mark the comparative."),
      rule(7, "短形容詞比較級", "{name} is ___ than {name2}.", "taller", ["more tall", "more taller", "tallest"], "Short adjectives often take -er.", "than signals a comparative form.", "tallest is superlative, not comparative."),
      rule(7, "原級比較", "This bag is as ___ as that one.", "heavy", ["heavier", "heaviest", "more heavy"], "as...as takes the base adjective.", "Do not use comparative forms inside as...as.", "heavier does not fit after as."),
      rule(7, "最高級", "This is the ___ story in the book.", "most interesting", ["more interesting", "interestingest", "most interestinger"], "the and in the group point to a superlative.", "Long adjectives use most for superlative.", "Do not combine most and -er."),
      rule(7, "比較句結構", "{name}'s room is ___ than {name2}'s room.", "cleaner", ["clean", "cleanest", "more cleaner"], "than needs a comparative form.", "Cleaner already marks comparison.", "Do not use more cleaner.")
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
      rule(11, "主動改被動", "The letter ___ by {name}.", "was written", ["wrote", "is writing", "writes"], "was written by marks passive voice.", "Look for be + p.p.", "A sentence with an object is not automatically passive.")
    ],
    12: [
      rule(12, "附加問句", "Your sister plays the piano well, ___?", "doesn't she", ["does she", "isn't she", "doesn't he"], "A positive statement takes a negative tag.", "Match the helper and pronoun.", "plays needs does in the tag."),
      rule(12, "完成式附加問句", "You haven't finished your homework, ___?", "have you", ["haven't you", "did you", "don't you"], "A negative statement takes a positive tag.", "Use the same helper from the statement.", "Do not switch to did."),
      rule(12, "一般動詞問句", "___ {name} like coffee?", "Does", ["Is", "Do", "Did"], "A third-person singular subject in a present question uses does.", "Do-support forms questions with ordinary verbs.", "Is is for be-verb or progressive patterns."),
      rule(12, "問句語序", "Did {name2} ___ the {object}?", "bring", ["brought", "brings", "bringing"], "After did, use the base verb.", "Question helper carries the tense.", "Do not keep past tense on the main verb after did."),
      rule(12, "否定句", "{name} ___ know the answer.", "doesn't", ["don't", "isn't", "didn't to"], "Third-person singular present negative uses doesn't + base verb.", "Use do-support for ordinary verbs.", "Do not use isn't with know.")
    ],
    13: [
      rule(13, "關係代名詞 who", "The woman ___ called you yesterday is my aunt.", "who", ["which", "whose", "what"], "who refers to a person and works as the subject in the relative clause.", "Find the antecedent first.", "which does not refer to a person here."),
      rule(13, "關係代名詞 which/that", "This is the book ___ I told you about.", "that", ["who", "whose", "what"], "that can refer to a thing in a defining relative clause.", "Use who for people, which/that for things.", "what is not used after a clear antecedent."),
      rule(13, "whose 所有格", "The student ___ bag was lost went to the office.", "whose", ["who", "which", "that"], "whose shows possession.", "If the next noun belongs to the antecedent, use whose.", "who cannot directly show possession before bag."),
      rule(13, "非限定子句", "Mr. Lin, ___ teaches math, is very patient.", "who", ["that", "whose", "what"], "Non-defining clauses after commas do not use that.", "Commas change the relative clause type.", "Do not use that after the comma pair."),
      rule(13, "關係子句位置", "The movie ___ we watched was exciting.", "that", ["it", "what", "that it"], "The object inside the relative clause is replaced, so do not repeat it.", "Avoid double objects in relative clauses.", "Do not keep it after watched.")
    ],
    14: [
      rule(14, "現在假設", "If I ___ a bird, I would fly to you.", "were", ["am", "was", "be"], "Unreal present condition uses were in this fixed pattern.", "If I were is the standard test form.", "Do not choose am for an unreal condition."),
      rule(14, "過去假設結果", "If {name} had studied harder, {name} ___ the exam.", "would have passed", ["would pass", "passed", "will pass"], "Past unreal result uses would have + p.p.", "had + p.p. pairs with would have + p.p.", "Do not use will for an unreal past result."),
      rule(14, "現在假設結果", "If {name2} had more time, {name2} ___ the project.", "would finish", ["will finish", "finished", "would have finished"], "Unreal present result uses would + base verb.", "Match the time frame of the condition.", "would have finished points to unreal past, not present."),
      rule(14, "if 子句動詞", "If {name} ___ here, we would start now.", "were", ["is", "be", "will be"], "Unreal present uses were and would.", "Keep both halves in the same unreal pattern.", "Do not mix is with would."),
      rule(14, "過去假設條件", "If they ___ earlier, they would have caught the bus.", "had left", ["left", "have left", "would leave"], "Past unreal condition uses had + p.p.", "The if-clause shows the unreal past condition.", "Do not put would in the if-clause.")
    ],
    15: [
      rule(15, "主旨範圍", "A paragraph explains that students save money by bringing lunch, using old notebooks, and taking the bus. Which title fits best?", "Small Ways Students Can Save Money", ["Taking the Bus Only", "A Lunch Box Story", "Why Notebooks Are Expensive"], "The best title covers all main examples.", "Main idea choices should be broad enough but not too broad.", "Do not choose a detail as the title.", "comprehension"),
      rule(15, "最佳標題", "A passage begins, 'Have you ever wondered why cats sleep so much?' What title best matches the topic?", "Why Do Cats Sleep So Much?", ["My Favorite Cat", "How to Buy Cat Food", "The History of Dogs"], "The opening question sets the passage topic.", "A title should match the whole passage.", "Do not choose a title that only shares one word.", "comprehension"),
      rule(15, "細節與主旨", "Which choice is too narrow for a passage about exercise, sleep, and healthy food?", "Running after school", ["Three habits for health", "How students stay healthy", "Daily habits and health"], "Running is only one possible detail.", "Too-narrow choices miss other major points.", "A detail is not the main idea.", "comprehension"),
      rule(15, "主題句", "A topic sentence usually covers the ___ paragraph.", "whole", ["last", "first", "small"], "A topic sentence introduces the whole paragraph.", "Look for a sentence that can cover later details.", "A single event is usually too narrow.", "comprehension"),
      rule(15, "段落功能", "A final paragraph says, 'For these reasons, a small change can help the whole school.' What is its function?", "It gives the conclusion.", ["It starts a new example.", "It lists a character.", "It asks a new question."], "For these reasons points back to earlier support.", "Conclusion sentences often summarize the point.", "Do not read a conclusion as a new example.", "comprehension")
    ],
    16: [
      rule(16, "推論證據", "Sales dropped after the price went up, so the shop lowered the price again. What can we infer?", "The higher price hurt sales.", ["The shop sold more than before.", "The product was free.", "The shop closed forever."], "The price rose, sales dropped, then the shop changed the price back.", "Inference must be supported by clues in the text.", "Do not choose an idea without evidence.", "inquiry"),
      rule(16, "代名詞指涉", "Sam left his phone at the restaurant, so he went back to get it. What does it refer to?", "his phone", ["the restaurant", "Sam", "the way back"], "it is singular and matches his phone in meaning.", "Replace the pronoun with each choice to test it.", "Do not choose a place when the sentence needs an object.", "comprehension"),
      rule(16, "語氣判斷", "The writer says, 'Luckily, the missing ticket was still in my bag!' What tone is shown?", "relieved", ["angry", "bored", "uncertain"], "Luckily and the exclamation show relief.", "Tone comes from word choice and punctuation.", "Do not ignore emotional clues.", "inquiry"),
      rule(16, "推論與直接細節", "An inference must be supported by ___ in the passage.", "clues", ["luck", "color", "sound"], "probably felt nervous extends from clues instead of copying a detail.", "Inference goes one step beyond the sentence but still needs support.", "Do not call a copied fact an inference.", "inquiry"),
      rule(16, "指涉一致", "The students put the boxes on the table because they were heavy. What does they refer to?", "the boxes", ["the students", "the table", "the room"], "heavy describes the boxes, not the students or table.", "Pronoun reference must fit grammar and meaning.", "Do not choose the nearest noun if meaning fails.", "comprehension")
    ],
    17: [
      rule(17, "borrow 與 lend", "Could I ___ your dictionary? I forgot mine.", "borrow", ["lend", "borrowed", "lending"], "The speaker receives the item, so use borrow.", "borrow is used from the receiver's view.", "Do not use lend when the subject receives.", "inquiry"),
      rule(17, "lend 用法", "Can you ___ me some money? I will pay you back tomorrow.", "lend", ["borrow", "lent", "borrowing"], "The subject gives something temporarily, so use lend.", "lend is used from the giver's view.", "Do not use borrow for the giver.", "inquiry"),
      rule(17, "bring 與 take", "Please ___ your notebook when you come to class.", "bring", ["take", "brought", "taking"], "The movement is toward the speaker/classroom, so use bring.", "bring moves toward the speaker or target place.", "Do not use take for movement toward here.", "inquiry"),
      rule(17, "take 用法", "Do not forget to ___ your umbrella when you leave home.", "take", ["bring", "took", "bringing"], "The movement is away from home, so use take.", "take moves something away from the starting point.", "Do not choose bring just because an object is carried.", "inquiry"),
      rule(17, "固定搭配", "{name} borrowed a book ___ {name2}.", "from", ["to", "for", "with"], "borrow commonly uses from for the source.", "Check the direction and the preposition together.", "Do not mix borrow with lend patterns.", "inquiry")
    ],
    18: [
      rule(18, "-ed 情緒形容詞", "After hearing the confusing directions, I felt totally ___.", "confused", ["confusing", "confuse", "confuses"], "-ed describes the person's feeling.", "Use -ed for how someone feels.", "Do not use -ing for the person who receives the feeling.", "knowledge"),
      rule(18, "-ing 情緒形容詞", "The movie was so ___ that I almost fell asleep.", "boring", ["bored", "bore", "bores"], "-ing describes the thing that causes the feeling.", "Use -ing for the cause.", "Do not use bored to describe the movie in this structure.", "knowledge"),
      rule(18, "人與事物方向", "{name} was ___ in the story.", "interested", ["interesting", "interest", "interestedly"], "A person can be interested in something.", "Check whether the adjective describes the person or the cause.", "Do not swap -ed and -ing forms.", "knowledge"),
      rule(18, "形容詞位置", "She is a ___ teacher.", "friendly", ["friend", "friendlyly", "friendship"], "An adjective usually comes before the noun it modifies.", "Position helps identify the word's role.", "Do not place a simple adjective after the noun here.", "knowledge"),
      rule(18, "詞性判斷", "In 'The exciting game ended late,' exciting is used as a _____.", "adjective", ["verb", "noun", "preposition"], "exciting modifies game, so it functions as an adjective.", "Ask what word it modifies.", "Do not judge only by the -ing ending.", "knowledge")
    ],
    19: [
      rule(19, "affect 作動詞", "Air pollution can seriously ___ people's health.", "affect", ["effect", "affects's", "effected"], "The blank needs a verb after can.", "Judge the needed part of speech first.", "effect is usually a noun in this contrast.", "knowledge"),
      rule(19, "effect 作名詞", "Doctors are studying the ___ of the new medicine.", "effect", ["affect", "affects", "affecting"], "the points to a noun phrase, so use effect.", "Articles often signal a noun.", "Do not choose the verb form after the.", "knowledge"),
      rule(19, "reduce/reuse/recycle 用法", "We should ___ waste first.", "reduce", ["reduction", "reusable", "recycling"], "After should, use a base verb.", "Modal + base verb also applies to topic words.", "Do not use noun or adjective forms after should.", "inquiry"),
      rule(19, "詞性結構", "In 'The effect of sleep is clear,' effect is a _____.", "noun", ["verb", "adverb", "conjunction"], "The effect is a noun phrase.", "The article the helps identify a noun.", "Do not confuse spelling with function.", "knowledge"),
      rule(19, "搭配判斷", "Too much screen time can ___ sleep.", "affect", ["effect", "affects", "affected"], "can needs a base verb, and affect is the verb.", "Use structure to choose between similar words.", "Do not choose by sound alone.", "inquiry")
    ],
    20: [
      rule(20, "名詞字尾 -tion", "In 'Good communication helps a team,' communication is a _____.", "noun", ["verb", "adjective", "adverb"], "-tion often forms nouns.", "Suffixes can show part of speech.", "Do not judge only from the root communicate.", "knowledge"),
      rule(20, "形容詞字尾 -ful", "Which word is most likely an adjective because of its suffix?", "helpful", ["quickly", "movement", "teacher"], "-ful often forms adjectives.", "A suffix can signal a word's role in a sentence.", "Do not choose a noun suffix such as -ment.", "knowledge"),
      rule(20, "否定字首", "Which word is formed with a negative prefix?", "unhappy", ["teacher", "reading", "careful"], "un- is a common negative prefix.", "Prefixes can show direction before you read the full sentence.", "Do not treat every beginning letter as a prefix.", "knowledge"),
      rule(20, "副詞字尾 -ly", "In 'She answered politely,' politely functions as a _____.", "adverb", ["noun", "preposition", "article"], "politely describes how she answered.", "Many -ly words function as adverbs.", "Do not call a word a noun just because it is long.", "knowledge"),
      rule(20, "構詞與詞性", "Which pair shows the correct part-of-speech change?", "communicate -> communication", ["happy -> happilyness", "teach -> teacherly noun", "move -> movemently"], "communicate is a verb and communication is a noun.", "Check whether the suffix creates a real word and role.", "Do not add suffixes mechanically.", "inquiry")
    ]
  };

  function blankFromSentences(correct, distractors) {
    const rows = [correct, ...distractors].map(sentence => String(sentence).trim().split(/\s+/));
    if (rows.some(row => row.length < 3)) return null;
    let prefix = 0;
    while (rows.every(row => row[prefix] && row[prefix] === rows[0][prefix])) prefix++;
    let suffix = 0;
    while (rows.every(row => row.length - 1 - suffix >= prefix && row[row.length - 1 - suffix] === rows[0][rows[0].length - 1 - suffix])) suffix++;
    const choices = rows.map(row => row.slice(prefix, row.length - suffix).join(" "));
    if (!choices.every(Boolean) || new Set(choices).size !== choices.length) return null;
    const head = rows[0].slice(0, prefix).join(" ");
    const tail = rows[0].slice(rows[0].length - suffix).join(" ");
    const stem = `${head}${head ? " " : ""}___${tail ? " " : ""}${tail}`.trim();
    return stem && stem !== "___" ? { stem, correct: choices[0], distractors: choices.slice(1) } : null;
  }
  function concreteGrammarPrompt(rule, fallback) {
    const text = String(fallback || "");
    if (/passive/i.test(text) || /passive/i.test(rule.step || "")) return "Choose the passive sentence.";
    if (/\?$/.test(rule.correct || "")) return "Choose the correctly formed question.";
    if (/topic sentence/i.test(text)) return "Choose the topic sentence that can introduce a paragraph.";
    if (/inference/i.test(text)) return "Choose the inference supported by the sentence.";
    return text;
  }
  function grammarRules(unitId) {
    return GRAMMAR_RULE_BANK[unitId] || RULE_VARIANTS[unitId] || RULES[unitId] || RULES[1];
  }
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
  const grammarRows = (unitId, rows) => rows.map(([topic, text, correct, a, b, c]) => rule(
    unitId,
    topic,
    text,
    correct,
    [a, b, c],
    "Use the sentence clue before choosing the form.",
    "The blank itself shows the grammar job.",
    "Do not choose by sound only.",
    "inquiry",
    2,
    { questionKind: "blank", conceptKey: topic }
  ));
  const GRAMMAR_RULE_BANK = {
    1: grammarRows(1, [
      ["simple present routine", "{name} usually ___ to school by bus.", "goes", "is going", "go", "went"],
      ["present progressive now", "Look! {name2} ___ the door right now.", "is opening", "opens", "open", "opened"],
      ["third person es", "{name} ___ TV after dinner.", "watches", "watch", "watchs", "watching"],
      ["stative verb know", "I ___ the answer to this question.", "know", "am knowing", "knows", "knew"],
      ["plural subject routine", "{name} and {name2} ___ soccer every Sunday.", "play", "plays", "are playing", "played"],
      ["schedule present", "The train ___ at six every morning.", "leaves", "is leaving", "leave", "left"],
      ["sound clue progressive", "Listen! Someone ___ outside.", "is singing", "sings", "sing", "sang"],
      ["general fact present", "Water ___ at zero degrees.", "freezes", "is freezing", "freeze", "froze"],
      ["never routine", "She never ___ late for class.", "comes", "is coming", "come", "came"],
      ["today action now", "Today he ___ a blue shirt.", "is wearing", "wears", "wear", "wore"],
      ["every morning habit", "My father ___ coffee every morning.", "drinks", "is drinking", "drink", "drank"],
      ["now plural action", "Now the children ___ in the park.", "are playing", "play", "played", "plays"],
      ["have as state", "{name} ___ two sisters.", "has", "is having", "have", "had"],
      ["weekday routine", "The shop ___ at nine on weekdays.", "opens", "is opening", "open", "opened"],
      ["quiet clue progressive", "Be quiet. The baby ___.", "is sleeping", "sleeps", "sleep", "slept"],
      ["linking state", "This box ___ heavy.", "feels", "is feeling", "feel", "felt"],
      ["every friday habit", "Every Friday, we ___ the classroom.", "clean", "are cleaning", "cleaned", "cleans"],
      ["moment action", "At this moment, {name} ___ a letter.", "is writing", "writes", "write", "wrote"],
      ["natural fact", "The sun ___ in the east.", "rises", "is rising", "rise", "rose"],
      ["ability state present", "{name2} ___ English very well.", "speaks", "is speaking", "speak", "spoke"],
      ["right now action", "Right now, I ___ for my key.", "am looking", "look", "looks", "looked"],
      ["seldom routine", "{name} seldom ___ meat.", "eats", "is eating", "eat", "ate"],
      ["time clue simple present", "The word always often ___ simple present.", "shows", "is showing", "show", "showed"],
      ["time clue progressive", "The words right now usually ___ present progressive.", "need", "needs", "needed", "are needing"]
    ]),
    2: grammarRows(2, [
      ["past irregular buy", "{name} ___ a new bike yesterday.", "bought", "buyed", "buys", "buying"],
      ["past irregular go", "They ___ to the museum last Sunday.", "went", "go", "gone", "going"],
      ["past irregular break", "{name2} ___ the window an hour ago.", "broke", "breaked", "breaks", "breaking"],
      ["past regular finish", "I ___ my homework before dinner last night.", "finished", "finish", "finishes", "finishing"],
      ["past irregular ring", "The phone ___ during class yesterday.", "rang", "rings", "ring", "ringing"],
      ["past irregular send", "{name} ___ a letter to me last week.", "sent", "send", "sends", "sending"],
      ["past irregular catch", "We ___ the bus this morning.", "caught", "catch", "catches", "catching"],
      ["past irregular know", "{name2} ___ the answer two minutes ago.", "knew", "knows", "know", "knowing"],
      ["past irregular leave", "My brother ___ his bag at home yesterday.", "left", "leaves", "leave", "leaving"],
      ["past regular end", "The story ___ at ten last night.", "ended", "end", "ends", "ending"],
      ["past regular start", "The class ___ late last Friday.", "started", "start", "starts", "starting"],
      ["past irregular hear", "I ___ a strange sound last night.", "heard", "hear", "hears", "hearing"],
      ["instant will", "A: The phone is ringing. B: I ___ it.", "will answer", "am going to answer", "answered", "answer"],
      ["evidence going to", "Look at those clouds. It ___ soon.", "is going to rain", "will rain", "rained", "rains"],
      ["future plan", "{name} ___ his aunt next week.", "is going to visit", "visited", "visits", "visit"],
      ["future opinion", "I think our team ___ the game tomorrow.", "will win", "won", "wins", "winning"],
      ["warning future", "Be careful, or you ___ the glass.", "will break", "broke", "breaks", "breaking"],
      ["planned future", "{name2} has a plan. She ___ a cake tonight.", "is going to make", "will makes", "made", "makes"],
      ["timetable future", "The bus ___ at seven tomorrow morning.", "leaves", "left", "is left", "leaving"],
      ["offer will", "A: I forgot my pen. B: I ___ you one.", "will lend", "lent", "lending", "lend"],
      ["future age", "{name} ___ thirteen next month.", "will be", "was", "is being", "is"],
      ["future deadline", "We ___ the report by Friday.", "will finish", "finished", "finishes", "finishing"],
      ["scheduled event", "The movie ___ at eight tonight.", "starts", "started", "starting", "will starting"],
      ["visible danger", "Those boys are running near the pool. They ___.", "are going to fall", "fell", "fall", "falling"]
    ]),
    3: grammarRows(3, [
      ["since start year", "{name} has lived in Taipei ___ 2019.", "since", "for", "at", "on"],
      ["for duration", "{name2} has studied English ___ three years.", "for", "since", "on", "at"],
      ["past finished time", "I saw that movie ___.", "yesterday", "already", "yet", "since 2020"],
      ["has plus participle", "{name} ___ finished the report.", "has", "have", "did", "is"],
      ["experience question", "___ you ever visited Japan?", "Have", "Did", "Are", "Do"],
      ["negative yet", "We have not eaten lunch ___.", "yet", "already", "never", "since"],
      ["already position", "{name} has ___ cleaned the room.", "already", "yet", "ever", "since"],
      ["duration for", "My father has worked here ___ ten years.", "for", "since", "on", "at"],
      ["since clause", "She has known him ___ she was ten.", "since", "for", "during", "at"],
      ["been to place", "They ___ to the museum twice.", "have been", "went", "are going", "go"],
      ["just with perfect", "The bus ___ just arrived.", "has", "have", "did", "is"],
      ["simple past yesterday", "I ___ my key yesterday.", "lost", "have lost", "has lost", "losing"],
      ["never plus participle", "{name} has never ___ this book.", "read", "reads", "reading", "rode"],
      ["how long perfect", "How long ___ you lived here?", "have", "did", "are", "do"],
      ["since weekday", "{name2} has not called me ___ Monday.", "since", "for", "on", "at"],
      ["since year perfect", "We have had this dog ___ 2020.", "since", "for", "during", "at"],
      ["for long time", "He has played tennis ___ a long time.", "for", "since", "on", "at"],
      ["already with has", "The teacher ___ checked the test already.", "has", "did", "is", "does"],
      ["past meal time", "I ___ breakfast at seven this morning.", "ate", "have eaten", "has eaten", "eating"],
      ["gone result now", "{name} has gone to the office. She ___ here now.", "is not", "was not", "does not", "did not"],
      ["participle left", "She has ___ her phone at home again.", "left", "leave", "leaves", "leaving"],
      ["participle done", "They have ___ the work.", "done", "did", "do", "doing"],
      ["for three days", "I have not seen him ___ three days.", "for", "since", "on", "at"],
      ["best ever", "This is the best story I have ___ read.", "ever", "yesterday", "ago", "last"]
    ]),
    4: grammarRows(4, [
      ["prohibition must not", "You ___ smoke here. It is against the rule.", "must not", "do not have to", "may not have to", "should to"],
      ["not necessary", "You ___ come early if you are busy.", "do not have to", "must not", "may not", "should not to"],
      ["modal base verb", "{name} can ___ the book after class.", "take", "takes", "took", "taking"],
      ["strong conclusion", "{name2} has not eaten all day. {name2} ___ be hungry.", "must", "can", "should to", "has to be eating"],
      ["should base verb", "{name} should ___ the teacher first.", "ask", "asks", "asked", "to ask"],
      ["may permission", "Students ___ leave after the bell.", "may", "must to", "should to", "can to"],
      ["cannot ability", "I ___ hear you because the room is noisy.", "cannot", "must not", "do not have to", "should to"],
      ["had better base", "You had better ___ an umbrella.", "bring", "brings", "brought", "to bring"],
      ["must base verb", "Everyone must ___ the safety rule.", "follow", "follows", "followed", "following"],
      ["should advice", "You look tired. You ___ take a rest.", "should", "must not", "can to", "do not have to"],
      ["have to need", "We ___ wear a uniform at this school.", "have to", "must to", "should to", "can to"],
      ["do not need to", "{name} ___ pay today because the ticket is free.", "does not have to", "must not", "should not to", "can not to"],
      ["could polite request", "___ you open the window, please?", "Could", "Must", "Should to", "Have"],
      ["must not touch", "You ___ touch this machine.", "must not", "do not have to", "can to", "should to"],
      ["may possibility", "It ___ rain later, so take a coat.", "may", "must to", "has to", "should to"],
      ["cannot deduction", "That ___ be {name}. {name} is in Japan now.", "cannot", "must", "has to", "should"],
      ["should not action", "You ___ talk loudly in the library.", "should not", "should to not", "do not have to", "can to not"],
      ["need not base", "You need not ___ the whole page.", "copy", "copies", "copied", "to copy"],
      ["would polite offer", "___ you like some water?", "Would", "Must", "Do to", "Should to"],
      ["can ability", "{name2} ___ swim across the pool.", "can", "must to", "is can", "can to"],
      ["must be careful", "Drivers ___ be careful on rainy days.", "must", "must to", "musts", "musting"],
      ["shall suggestion", "___ we start the meeting now?", "Shall", "Must to", "Should to", "Can to"],
      ["ought to advice", "You ought ___ your parents.", "to thank", "thank", "thanked", "thanking"],
      ["be able to", "{name} will be able ___ us tomorrow.", "to help", "help", "helped", "helping"]
    ]),
    5: grammarRows(5, [
      ["uncountable information", "Can you give me some ___ about the bus schedule?", "information", "informations", "an information", "information's"],
      ["uncountable homework", "We do not have much ___ today.", "homework", "homeworks", "a homework", "homework's"],
      ["object pronoun", "This gift is for ___.", "him", "he", "his", "himself"],
      ["article vowel sound", "{name} needs ___ umbrella.", "an", "a", "the a", "no article"],
      ["possessive pronoun", "That notebook is ___.", "hers", "her", "she", "her's"],
      ["countable plural", "There are three ___ on the table.", "apples", "apple", "apple's", "an apples"],
      ["many plural", "Many ___ came to the show.", "people", "person", "peoples", "a people"],
      ["much uncountable", "There is too much ___ in the room.", "noise", "noises", "a noise", "noise's"],
      ["a consonant sound", "I saw ___ useful tool online.", "a", "an", "the an", "no article"],
      ["subject pronoun", "___ are going to the library after school.", "They", "Them", "Their", "Theirs"],
      ["object after verb", "Please call ___ tonight.", "me", "I", "my", "mine"],
      ["possessive adjective", "This is ___ jacket.", "my", "me", "mine", "I"],
      ["independent possessive", "The red bag is ___.", "mine", "my", "me", "I"],
      ["some with uncountable", "Would you like some ___?", "water", "waters", "a water", "water's"],
      ["few countable", "Only a few ___ joined the club.", "students", "student", "student's", "a students"],
      ["little uncountable", "There is little ___ left.", "money", "moneys", "a money", "money's"],
      ["article before one", "I need ___ one-way ticket.", "a", "an", "the an", "no article"],
      ["plural child", "The ___ are playing outside.", "children", "child", "childs", "childrens"],
      ["preposition object", "The teacher talked to ___ after class.", "us", "we", "our", "ours"],
      ["reflexive pronoun", "{name} hurt ___ while cooking.", "himself", "him", "he", "his"],
      ["there is uncountable", "There ___ a lot of news today.", "is", "are", "be", "were"],
      ["there are countable", "There ___ many books on the desk.", "are", "is", "be", "was"],
      ["another countable", "May I have another ___?", "ticket", "ticketes", "ticket's", "ticketses"],
      ["no article meals", "We usually have ___ breakfast at seven.", "no article", "a", "an", "the a"]
    ]),
    6: grammarRows(6, [
      ["linking verb adjective", "This soup smells ___.", "delicious", "deliciously", "delicious's", "delicion"],
      ["look adjective", "You look ___ today. Are you okay?", "tired", "tiredly", "tiring", "tire"],
      ["adverb well", "{name} finished the race ___.", "well", "good", "goodly", "wellly"],
      ["flat adverb fast", "{name2} drives very ___.", "fast", "fastly", "faster than", "fasting"],
      ["degree before adjective", "{name} is ___ careful with the map.", "very", "careful very", "carefully very", "veryly"],
      ["adjective before noun", "She is a ___ teacher.", "friendly", "friendlyly", "friend", "friendship"],
      ["adverb action", "Please speak ___ in the library.", "quietly", "quiet", "quieter", "quietness"],
      ["become adjective", "The sky became ___ before the rain.", "dark", "darkly", "darkness", "darker than"],
      ["feel adjective", "I feel ___ after the long walk.", "hungry", "hungrily", "hunger", "hungrier than"],
      ["taste adjective", "The cake tastes ___.", "sweet", "sweetly", "sweetness", "sweeter than"],
      ["hard adverb", "{name} studies ___ before every test.", "hard", "hardly", "harder than", "hardness"],
      ["late adjective", "The bus was ___ this morning.", "late", "lately", "later than", "lateness"],
      ["careful adjective", "Be ___ when you cross the street.", "careful", "carefully", "care", "carefulness"],
      ["carefully adverb", "{name2} crossed the street ___.", "carefully", "careful", "care", "carefulness"],
      ["sound adjective", "That idea sounds ___.", "good", "well", "goodly", "goodness"],
      ["enough after adjective", "The box is light ___ to carry.", "enough", "too", "very", "so"],
      ["too adjective", "The tea is ___ hot to drink.", "too", "veryly", "enough", "many"],
      ["so adjective that", "The bag was ___ heavy that I could not lift it.", "so", "too", "enough", "many"],
      ["such noun phrase", "It was ___ a nice day that we went out.", "such", "so", "too", "very"],
      ["adverb frequency position", "{name} often ___ breakfast at home.", "eats", "eats often", "oftenly eats", "eat"],
      ["adjective noun order", "I found a ___ box under the desk.", "small green", "green small", "smallly green", "greenly small"],
      ["comparative adverb", "{name2} runs ___ than before.", "faster", "fastly", "fastest", "fast"],
      ["most adverb", "She answered the question most ___.", "clearly", "clear", "clearness", "clearer"],
      ["less adjective", "This road is ___ dangerous than that one.", "less", "few", "little", "fewer"]
    ]),
    7: grammarRows(7, [
      ["long adjective comparative", "This question is ___ than that one.", "more difficult", "difficulter", "more difficulter", "difficult more"],
      ["short adjective comparative", "{name} is ___ than {name2}.", "taller", "more tall", "more taller", "tallest"],
      ["as as base", "This bag is as ___ as that one.", "heavy", "heavier", "heaviest", "more heavy"],
      ["long adjective superlative", "This is the ___ story in the book.", "most interesting", "more interesting", "interestingest", "most interestinger"],
      ["than comparative clean", "{name}'s room is ___ than {name2}'s room.", "cleaner", "clean", "cleanest", "more cleaner"],
      ["irregular good", "This plan is ___ than the old one.", "better", "gooder", "best", "more good"],
      ["irregular bad", "The second road is ___ than the first one.", "worse", "badder", "worst", "more bad"],
      ["superlative short", "{name} is the ___ student in the class.", "tallest", "taller", "most tall", "more tall"],
      ["one of plural", "This is one of the ___ parks in town.", "largest", "larger", "large", "more large"],
      ["less comparative", "This bag is ___ expensive than that one.", "less", "least", "little", "few"],
      ["the same as", "My answer is the same ___ yours.", "as", "than", "to", "from"],
      ["different from", "This rule is different ___ that rule.", "from", "than", "as", "to"],
      ["much comparative", "Today is much ___ than yesterday.", "colder", "coldest", "cold", "more coldest"],
      ["farther distance", "The station is ___ than the market.", "farther", "farthest", "far", "more farthest"],
      ["not as as", "This test is not as ___ as the last one.", "easy", "easier", "easiest", "more easy"],
      ["twice as as", "This box is twice as ___ as that one.", "heavy", "heavier", "heaviest", "more heavy"],
      ["the more the more", "The more you read, the ___ you understand.", "better", "best", "good", "well"],
      ["superlative in group", "{name2} is the ___ of the three.", "youngest", "younger", "more young", "young"],
      ["comparative than before", "The weather is ___ than before.", "warmer", "warmest", "warm", "more warmest"],
      ["least superlative", "This is the ___ useful tool on the shelf.", "least", "less", "little", "few"],
      ["more and more", "The story became more and more ___.", "exciting", "excited", "excite", "excitedly"],
      ["elder family", "My ___ brother helps me with math.", "elder", "older than", "oldest than", "more old"],
      ["than any other", "Taipei is larger than ___ city in this list.", "any other", "another", "the other", "others"],
      ["comparative adjective only", "The red bag is ___ than the blue one.", "lighter", "lightest", "light", "most light"]
    ]),
    8: grammarRows(8, [
      ["day preposition", "We will meet ___ Monday.", "on", "at", "in", "to"],
      ["year preposition", "{name} was born ___ 2010.", "in", "on", "at", "to"],
      ["clock time preposition", "The class starts ___ seven.", "at", "in", "on", "to"],
      ["reach direct place", "The train will ___ Taipei Station at nine.", "reach", "arrive", "arrive to", "reach to"],
      ["arrive at place", "We will ___ at the airport soon.", "arrive", "reach", "reach to", "arrived to"],
      ["part of day", "I study better ___ the morning.", "in", "on", "at", "to"],
      ["date preposition", "The party is ___ May 5.", "on", "in", "at", "to"],
      ["fixed at night", "The bus arrived ___ night.", "at", "in", "on", "to"],
      ["transport by", "{name} goes to school ___ bus.", "by", "on", "in", "at"],
      ["on foot", "{name2} goes to school ___ foot.", "on", "by", "in", "at"],
      ["point place", "We waited ___ the bus stop.", "at", "in", "on", "to"],
      ["inside place", "The keys are ___ the box.", "in", "on", "at", "to"],
      ["surface place", "The map is ___ the wall.", "on", "in", "at", "to"],
      ["movement to", "{name} walked ___ the station.", "to", "at", "in", "on"],
      ["duration for", "We stayed there ___ two hours.", "for", "since", "at", "on"],
      ["starting point", "The bus goes ___ school to the library.", "from", "to", "at", "on"],
      ["ending point", "The road runs from the park ___ the market.", "to", "from", "at", "on"],
      ["between two", "The bank is ___ the library and the market.", "between", "among", "in", "on"],
      ["near place", "The bike is ___ the door.", "near", "in", "on", "to"],
      ["under place", "The bag is ___ the table.", "under", "on", "in", "at"],
      ["over movement", "The ball went ___ the wall.", "over", "under", "in", "at"],
      ["tool with", "{name} wrote the word ___ a pen.", "with", "by", "in", "on"],
      ["topic about", "This book is ___ animals.", "about", "on", "at", "to"],
      ["before time", "Please finish the work ___ lunch.", "before", "after", "at", "on"]
    ]),
    9: grammarRows(9, [
      ["although contrast", "___ it was raining, we still went hiking.", "Although", "Because", "So", "Although but"],
      ["so result", "It rained hard, ___ we stayed home.", "so", "because", "although", "so because"],
      ["but contrast", "I like tea, ___ {name} likes coffee.", "but", "although", "because", "when"],
      ["although dependent", "___ {name2} was tired, {name2} kept working.", "Although", "But", "So", "And"],
      ["condition if", "___ you need help, call me.", "If", "And", "So", "But"],
      ["because reason", "We stayed home ___ the road was closed.", "because", "so", "although", "but"],
      ["when time", "Call me ___ you arrive.", "when", "because", "but", "so"],
      ["while two actions", "{name} cooked dinner ___ {name2} set the table.", "while", "because", "so", "although"],
      ["before time clause", "Wash your hands ___ you eat.", "before", "because", "so", "although"],
      ["after time clause", "We played basketball ___ the rain stopped.", "after", "because", "but", "so"],
      ["unless condition", "You will be late ___ you leave now.", "unless", "because", "although", "so"],
      ["and addition", "{name} opened the door ___ turned on the light.", "and", "but", "because", "although"],
      ["or choice", "You can take the bus ___ walk home.", "or", "so", "because", "although"],
      ["so that purpose", "Speak slowly ___ everyone can understand.", "so that", "because", "although", "but"],
      ["even though contrast", "___ the test was hard, {name} did not give up.", "Even though", "Because", "So", "And"],
      ["not only but also", "{name} is not only kind ___ also honest.", "but", "and", "so", "because"],
      ["either or", "You can either call me ___ send a message.", "or", "and", "but", "so"],
      ["neither nor", "The room was neither clean ___ quiet.", "nor", "or", "and", "but"],
      ["as soon as", "I will tell you ___ I know the answer.", "as soon as", "because", "although", "but"],
      ["until time", "Wait here ___ the bus comes.", "until", "because", "although", "so"],
      ["since reason", "___ you are here, please help us.", "Since", "So", "But", "And"],
      ["if not double", "If it rains, we ___ stay inside.", "will", "would have", "had", "were"],
      ["because no so", "Because {name} was sick, {name} ___ home.", "stayed", "so stayed", "although stayed", "but stayed"],
      ["although no but", "Although the box was heavy, {name} ___ it.", "carried", "but carried", "so carried", "because carried"]
    ]),
    10: grammarRows(10, [
      ["enjoy gerund", "{name} enjoys ___ mystery novels.", "reading", "to read", "read", "reads"],
      ["decide infinitive", "They decided ___ early.", "to leave", "leaving", "leave", "left"],
      ["preposition gerund", "{name2} is interested in ___ Japanese.", "learning", "to learn", "learn", "learns"],
      ["purpose infinitive", "{name} went to the library ___ a book.", "to borrow", "borrowing", "borrowed", "borrows"],
      ["gerund subject", "___ every day is good practice.", "Reading", "Read", "To reading", "Reads"],
      ["finish gerund", "We finished ___ the room before lunch.", "cleaning", "to clean", "clean", "cleaned"],
      ["hope infinitive", "{name} hopes ___ the race.", "to win", "winning", "win", "wins"],
      ["avoid gerund", "Please avoid ___ too much noise.", "making", "to make", "make", "made"],
      ["want infinitive", "{name2} wants ___ a new bike.", "to buy", "buying", "buy", "bought"],
      ["mind gerund", "Do you mind ___ the window?", "opening", "to open", "open", "opened"],
      ["plan infinitive", "They plan ___ the museum tomorrow.", "to visit", "visiting", "visit", "visited"],
      ["practice gerund", "{name} practices ___ English every night.", "speaking", "to speak", "speak", "spoke"],
      ["let base verb", "Let me ___ you with the boxes.", "help", "to help", "helping", "helped"],
      ["make base verb", "The story made me ___ loudly.", "laugh", "to laugh", "laughing", "laughed"],
      ["ask object infinitive", "The teacher asked us ___ quiet.", "to stay", "staying", "stay", "stayed"],
      ["too adjective infinitive", "The box is too heavy ___ alone.", "to lift", "lifting", "lift", "lifted"],
      ["enough infinitive", "{name} is old enough ___ alone.", "to travel", "traveling", "travel", "traveled"],
      ["stop gerund", "Stop ___ during the test.", "talking", "to talk", "talk", "talked"],
      ["remember infinitive", "Remember ___ the door before you leave.", "to close", "closing", "close", "closed"],
      ["remember gerund", "I remember ___ this song when I was young.", "hearing", "to hear", "hear", "heard"],
      ["go gerund activity", "We went ___ after school.", "shopping", "to shop", "shop", "shopped"],
      ["be used to gerund", "{name} is used to ___ early.", "getting up", "get up", "got up", "to get up"],
      ["used to base", "{name2} used to ___ near the river.", "live", "living", "lived", "to live"],
      ["help bare verb", "This map helped us ___ the station.", "find", "to finding", "found", "finding"]
    ]),
    11: grammarRows(11, [
      ["past passive", "This bridge ___ in 1930.", "was built", "is built", "has built", "built"],
      ["present passive", "English ___ in many countries.", "is spoken", "speaks", "was spoken", "spoken"],
      ["intransitive active", "The accident ___ yesterday.", "happened", "was happened", "is happened", "happens"],
      ["agent by", "The window was broken ___ the strong wind.", "by", "with", "from", "at"],
      ["passive letter", "The letter ___ by {name}.", "was written", "wrote", "is writing", "writes"],
      ["future passive", "The new library ___ next year.", "will be opened", "will open", "opened", "is opening"],
      ["present perfect passive", "The work ___ already been done.", "has", "have", "did", "is"],
      ["modal passive", "This rule must ___ by everyone.", "be followed", "follow", "followed", "following"],
      ["passive question", "When ___ the bridge built?", "was", "did", "has", "is"],
      ["passive negative", "The door was not ___ last night.", "locked", "lock", "locking", "locks"],
      ["active subject", "{name} ___ the report yesterday.", "wrote", "was written", "is written", "written"],
      ["passive object focus", "The report ___ yesterday.", "was written", "wrote", "writes", "has wrote"],
      ["by person", "The picture was painted ___ my sister.", "by", "with", "from", "at"],
      ["with tool", "The door was opened ___ a key.", "with", "by", "from", "at"],
      ["no passive arrive", "The train ___ late.", "arrived", "was arrived", "is arrived", "arrives by"],
      ["no passive sleep", "The baby ___ well last night.", "slept", "was slept", "is slept", "sleeping"],
      ["passive present plural", "These books ___ used in class.", "are", "is", "was", "did"],
      ["passive past plural", "The windows ___ cleaned yesterday.", "were", "are", "did", "have"],
      ["passive infinitive", "The plan needs to ___ today.", "be changed", "change", "changed", "changing"],
      ["get passive", "{name} got ___ in the rain.", "wet", "wetly", "wets", "wetting"],
      ["passive plus place", "The meeting was held ___ the library.", "at", "by", "with", "from"],
      ["active no object", "The sun ___ early today.", "rose", "was risen", "is risen", "rises by"],
      ["passive made of", "The desk is made ___ wood.", "of", "by", "from", "at"],
      ["passive made in", "This camera was made ___ Japan.", "in", "by", "with", "of"]
    ]),
    12: grammarRows(12, [
      ["positive tag", "Your sister plays the piano well, ___?", "doesn't she", "does she", "isn't she", "doesn't he"],
      ["negative tag", "You haven't finished your homework, ___?", "have you", "haven't you", "did you", "don't you"],
      ["does question", "___ {name} like coffee?", "Does", "Is", "Do", "Did"],
      ["did base verb", "Did {name2} ___ the book?", "bring", "brought", "brings", "bringing"],
      ["does negative", "{name} ___ know the answer.", "doesn't", "don't", "isn't", "didn't to"],
      ["be question", "___ {name} at home now?", "Is", "Does", "Do", "Did"],
      ["progressive question", "___ they watching TV now?", "Are", "Do", "Did", "Have"],
      ["past question", "___ you see {name} yesterday?", "Did", "Do", "Have", "Are"],
      ["present perfect question", "___ you finished the report yet?", "Have", "Did", "Do", "Are"],
      ["who subject question", "Who ___ the window?", "broke", "did broke", "does broke", "breaking"],
      ["what object question", "What did {name} ___ after class?", "do", "did", "does", "doing"],
      ["where question", "Where ___ {name2} live?", "does", "is", "has", "did to"],
      ["how many question", "How many books ___ on the desk?", "are there", "there are", "is there", "there is"],
      ["negative imperative", "___ touch the glass.", "Do not", "Not", "Does not", "Did not"],
      ["let us tag", "Let's take a break, ___?", "shall we", "will you", "do we", "are we"],
      ["command tag", "Close the door, ___?", "will you", "do you", "are you", "have you"],
      ["I am tag", "I am late, ___?", "aren't I", "am not I", "do I", "don't I"],
      ["there tag", "There is a bank near here, ___?", "isn't there", "is it", "doesn't there", "isn't it"],
      ["no one tag", "No one called, ___?", "did they", "did he", "didn't they", "was it"],
      ["has tag", "{name} has a bike, ___?", "doesn't he", "hasn't he", "isn't he", "didn't he"],
      ["have perfect tag", "{name2} has left, ___?", "hasn't she", "doesn't she", "isn't she", "didn't she"],
      ["must tag", "We must leave now, ___?", "mustn't we", "don't we", "aren't we", "didn't we"],
      ["would question", "___ you like some tea?", "Would", "Do", "Are", "Did"],
      ["subject verb inversion", "Never ___ I seen such a quiet room.", "have", "did", "do", "am"]
    ]),
    13: grammarRows(13, [
      ["who subject person", "The woman ___ called you yesterday is my aunt.", "who", "which", "whose", "what"],
      ["that object thing", "This is the book ___ I told you about.", "that", "who", "whose", "what"],
      ["whose possession", "The student ___ bag was lost went to the office.", "whose", "who", "which", "that"],
      ["comma clause person", "Mr. Lin, ___ teaches math, is very patient.", "who", "that", "whose", "what"],
      ["no repeated object", "The movie ___ we watched was exciting.", "that", "what", "who", "it"],
      ["where place", "This is the park ___ we first met.", "where", "which", "who", "whose"],
      ["when time", "I remember the day ___ we moved here.", "when", "who", "whose", "what"],
      ["why reason", "Tell me the reason ___ you were late.", "why", "who", "whose", "which"],
      ["object omission", "The book ___ you lent me was useful.", "that", "who", "whose", "what"],
      ["subject no omission", "The boy ___ won the race is my friend.", "who", "which", "whose", "what"],
      ["which nonhuman", "The camera ___ is on the desk is mine.", "which", "who", "whose", "what"],
      ["that defining", "The bag ___ she bought is red.", "that", "who", "what", "whose"],
      ["whom formal object", "The man to ___ I spoke was kind.", "whom", "who", "which", "what"],
      ["preposition end", "The person I talked ___ was helpful.", "to", "who", "whose", "what"],
      ["whose thing", "I saw a house ___ roof was blue.", "whose", "which", "that", "what"],
      ["all that", "This is all ___ I know.", "that", "which", "who", "whose"],
      ["anything that", "Is there anything ___ I can do?", "that", "what", "who", "whose"],
      ["the only that", "She is the only person ___ can help us.", "that", "which", "what", "whose"],
      ["comma which", "The bus was late, ___ made us worried.", "which", "that", "who", "what"],
      ["who as object", "The girl ___ we met yesterday is new here.", "who", "which", "whose", "what"],
      ["relative clause verb", "The students who ___ near the window are quiet.", "sit", "sits", "sitting", "sat"],
      ["antecedent plural", "The books that ___ on the shelf are mine.", "are", "is", "was", "be"],
      ["antecedent singular", "The book that ___ on the shelf is mine.", "is", "are", "were", "be"],
      ["clause placement", "The teacher ___ helped me lives nearby.", "who", "where", "when", "what"]
    ]),
    14: grammarRows(14, [
      ["present unreal be", "If I ___ a bird, I would fly to you.", "were", "am", "was", "be"],
      ["past unreal result", "If {name} had studied harder, {name} ___ the exam.", "would have passed", "would pass", "passed", "will pass"],
      ["present unreal result", "If {name2} had more time, {name2} ___ the project.", "would finish", "will finish", "finished", "would have finished"],
      ["present unreal pair", "If {name} ___ here, we would start now.", "were", "is", "be", "will be"],
      ["past unreal condition", "If they ___ earlier, they would have caught the bus.", "had left", "left", "have left", "would leave"],
      ["real condition", "If it rains tomorrow, we ___ inside.", "will stay", "would stay", "stayed", "had stayed"],
      ["zero condition", "If water reaches zero degrees, it ___.", "freezes", "will freeze", "froze", "would freeze"],
      ["unless real", "Unless you hurry, you ___ the bus.", "will miss", "would miss", "missed", "had missed"],
      ["wish present", "I wish I ___ taller.", "were", "am", "will be", "have been"],
      ["wish past", "{name} wishes {name} ___ more carefully yesterday.", "had listened", "listened", "would listen", "will listen"],
      ["as if unreal", "He talks as if he ___ everything.", "knew", "knows", "will know", "has known"],
      ["would rather", "I would rather ___ at home tonight.", "stay", "to stay", "staying", "stayed"],
      ["if only present", "If only I ___ more free time.", "had", "have", "will have", "had had"],
      ["mixed condition", "If {name} had taken the bus, {name} ___ here now.", "would be", "will be", "would have been", "is"],
      ["without condition", "Without your help, I ___ lost.", "would be", "will be", "am", "was"],
      ["provided that", "We can go out provided that it ___ raining.", "stops", "stopped", "will stop", "would stop"],
      ["in case", "Take a map in case you ___ lost.", "get", "got", "will get", "would get"],
      ["if past habit", "If {name} was late, the teacher ___ the door.", "closed", "would have closed", "will close", "has closed"],
      ["future less likely", "If I should see him, I ___ him.", "will tell", "told", "had told", "telling"],
      ["were to", "If the plan were to fail, we ___ again.", "would try", "will try", "tried", "had tried"],
      ["had known", "Had I known the answer, I ___ it.", "would have said", "will say", "said", "would say"],
      ["should you need", "Should you need help, ___ me.", "call", "called", "calling", "to call"],
      ["but for", "But for the rain, we ___ outside.", "would play", "will play", "played", "had played"],
      ["if not for", "If it were not for music, life ___ quiet.", "would be", "will be", "is", "has been"]
    ]),
    15: grammarRows(15, [
      ["main idea", "The main idea of a paragraph is usually ___ than one detail.", "broader", "smaller", "later", "louder"],
      ["best title scope", "A good title should match the ___ passage.", "whole", "last", "first", "short"],
      ["topic sentence", "A topic sentence usually ___ the paragraph.", "introduces", "ends", "hides", "copies"],
      ["supporting detail", "A supporting detail should ___ the main idea.", "explain", "change", "ignore", "hide"],
      ["too narrow title", "A title about one small fact is often too ___.", "narrow", "broad", "clear", "useful"],
      ["too broad title", "A title that covers many missing ideas is too ___.", "broad", "narrow", "late", "quiet"],
      ["first sentence role", "The first sentence often gives the ___ of the passage.", "topic", "answer", "ending", "date"],
      ["final sentence role", "The final sentence may show the writer's ___.", "point", "color", "place", "number"],
      ["detail question", "A detail question asks for information ___ in the passage.", "stated", "imagined", "changed", "hidden"],
      ["not stated", "An answer not in the passage should be ___.", "removed", "chosen", "copied", "kept"],
      ["order signal", "Words like first and finally show ___.", "order", "place", "noise", "size"],
      ["cause signal", "The word because often introduces a ___.", "reason", "result", "title", "name"],
      ["result signal", "The word so often introduces a ___.", "result", "reason", "person", "place"],
      ["contrast signal", "The word however often shows ___.", "contrast", "order", "time", "amount"],
      ["example signal", "For example usually gives a ___.", "detail", "title", "guess", "rule"],
      ["paragraph purpose", "A paragraph about steps often explains a ___.", "process", "feeling", "name", "price"],
      ["notice purpose", "A notice usually gives readers ___.", "information", "fiction", "silence", "weather"],
      ["letter purpose", "A letter often has a writer and a ___.", "reader", "price", "machine", "road"],
      ["chart reading", "A chart question often asks readers to compare ___.", "data", "stories", "feelings", "rules"],
      ["best summary", "A summary should keep only the ___ ideas.", "main", "random", "extra", "tiny"],
      ["paragraph unity", "A paragraph should stay on one ___.", "topic", "street", "sound", "color"],
      ["irrelevant detail", "A sentence outside the topic is ___.", "irrelevant", "correct", "necessary", "central"],
      ["author example", "Writers use examples to make ideas ___.", "clearer", "slower", "heavier", "older"],
      ["reader check", "Readers should check the answer against the ___.", "passage", "memory", "title only", "picture"]
    ]),
    16: grammarRows(16, [
      ["inference clue", "An inference must be supported by ___.", "clues", "color", "sound", "luck"],
      ["pronoun reference", "A pronoun usually refers to a noun ___ it.", "before", "after only", "outside", "never"],
      ["tone clue", "Words like wonderful and terrible can show ___.", "tone", "place", "time", "size"],
      ["author purpose", "The author's purpose is the reason for ___ the passage.", "writing", "copying", "hiding", "losing"],
      ["likely meaning", "The word probably shows that the answer is a ___.", "guess", "fact", "date", "name"],
      ["evidence line", "A strong answer has evidence in the ___.", "text", "choice", "score", "picture"],
      ["referent nearby", "The word they often points to a plural noun ___.", "nearby", "alone", "future", "wrong"],
      ["cause inference", "If someone smiles after news, the reader may infer a good ___.", "feeling", "address", "price", "sound"],
      ["not enough evidence", "An answer with no clue should be ___.", "rejected", "chosen", "saved", "copied"],
      ["contrast inference", "But can signal that the next idea is ___.", "different", "same", "earlier", "empty"],
      ["mood", "The mood of a passage is the feeling it ___.", "creates", "counts", "buys", "carries"],
      ["speaker attitude", "The speaker's attitude is how the speaker ___.", "feels", "travels", "spells", "waits"],
      ["main support", "An inference should not go beyond the ___.", "evidence", "weather", "school", "ticket"],
      ["dialogue clue", "In dialogue, a speaker's words can show ___.", "attitude", "height", "date", "shape"],
      ["it reference", "The word it usually refers to one thing mentioned ___.", "earlier", "tomorrow", "outside", "never"],
      ["this reference", "The word this may refer to the whole idea just ___.", "mentioned", "forgotten", "opened", "bought"],
      ["author advice", "A passage that says should often gives ___.", "advice", "history", "price", "size"],
      ["prediction", "A prediction asks what may happen ___.", "next", "before", "yesterday", "outside"],
      ["fact vs inference", "A fact is stated; an inference is ___.", "figured out", "copied", "priced", "named"],
      ["context clue", "A context clue is information around a ___ word.", "hard", "safe", "young", "free"],
      ["speaker intention", "If a speaker says thanks, the intention is often to show ___.", "gratitude", "anger", "distance", "height"],
      ["paragraph function", "A paragraph function question asks what the paragraph ___.", "does", "costs", "wears", "owns"],
      ["opinion marker", "I think usually signals an ___.", "opinion", "address", "date", "object"],
      ["certainty marker", "Must in an inference often shows strong ___.", "certainty", "distance", "color", "noise"]
    ]),
    17: grammarRows(17, [
      ["borrow from", "{name} borrowed a book ___ {name2}.", "from", "to", "for", "with"],
      ["lend to", "{name2} lent a pencil ___ {name}.", "to", "from", "with", "at"],
      ["bring here", "Please ___ your notebook when you come here.", "bring", "take", "borrow", "lend"],
      ["take away", "Do not forget to ___ your umbrella when you leave.", "take", "bring", "lend", "borrow"],
      ["pay for", "{name} paid ten dollars ___ the ticket.", "for", "to", "from", "with"],
      ["spend on", "{name2} spent two hours ___ the report.", "on", "for", "to", "with"],
      ["cost subject thing", "The bag ___ five hundred dollars.", "costs", "spends", "pays", "takes"],
      ["take time", "It ___ me ten minutes to walk there.", "takes", "spends", "pays", "costs"],
      ["listen to", "Please listen ___ the teacher.", "to", "at", "for", "with"],
      ["hear object", "I can ___ the music from here.", "hear", "listen", "listen to", "hearing"],
      ["look at", "{name} looked ___ the map carefully.", "at", "to", "for", "with"],
      ["find out", "We need to ___ the answer before Friday.", "find out", "look at", "hear", "borrow"],
      ["look for", "{name2} is looking ___ her key.", "for", "at", "to", "with"],
      ["ask for", "The student asked ___ help.", "for", "to", "from", "with"],
      ["answer object", "Please ___ my question.", "answer", "answer to", "reply", "reply to"],
      ["reply to", "{name} replied ___ the message.", "to", "with", "from", "for"],
      ["arrive at", "We arrived ___ the station early.", "at", "to", "with", "from"],
      ["reach place", "They reached ___ before noon.", "the office", "to the office", "at the office", "for the office"],
      ["enter direct", "The teacher entered ___ quietly.", "the room", "into the room", "to the room", "at the room"],
      ["discuss direct", "We discussed ___ after class.", "the plan", "about the plan", "to the plan", "for the plan"],
      ["marry direct", "She married ___ last year.", "Tom", "with Tom", "to Tom", "for Tom"],
      ["join club", "{name} joined ___ last month.", "the club", "to the club", "with the club", "in the club"],
      ["attend class", "We attended ___ yesterday.", "the meeting", "to the meeting", "at the meeting", "with the meeting"],
      ["wait for", "Please wait ___ me at the gate.", "for", "to", "with", "from"]
    ]),
    18: grammarRows(18, [
      ["interested person", "{name} was ___ in the story.", "interested", "interesting", "interest", "interestedly"],
      ["interesting thing", "The story was ___.", "interesting", "interested", "interest", "interestingly"],
      ["adjective before noun", "She is a ___ teacher.", "friendly", "friend", "friendship", "friendlyly"],
      ["bored person", "{name2} felt ___ during the long talk.", "bored", "boring", "bore", "bores"],
      ["boring thing", "The long talk was ___.", "boring", "bored", "bore", "boredly"],
      ["excited person", "The children were ___ about the trip.", "excited", "exciting", "excite", "excitedly"],
      ["exciting event", "The trip was ___.", "exciting", "excited", "excite", "excitedly"],
      ["confused person", "I was ___ by the new rule.", "confused", "confusing", "confuse", "confusedly"],
      ["confusing rule", "The new rule was ___.", "confusing", "confused", "confuse", "confusedly"],
      ["relaxed person", "{name} felt ___ after the test.", "relaxed", "relaxing", "relax", "relaxedly"],
      ["relaxing music", "The music was ___.", "relaxing", "relaxed", "relax", "relaxedly"],
      ["surprised person", "{name2} was ___ by the news.", "surprised", "surprising", "surprise", "surprisingly"],
      ["surprising news", "The news was ___.", "surprising", "surprised", "surprise", "surprisedly"],
      ["noun suffix er", "A person who teaches is a ___.", "teacher", "teach", "teaching", "teacherly"],
      ["verb from noun", "Please ___ your answer on the line.", "write", "writer", "writing", "written"],
      ["adverb ly", "{name} spoke ___ to the old man.", "politely", "polite", "politeness", "politer"],
      ["noun ness", "Kindness is a ___.", "noun", "verb", "adjective", "preposition"],
      ["adjective ful", "This tool is very ___.", "helpful", "help", "helpfully", "helper"],
      ["personality noun", "{name}'s friendly ___ helped the team.", "personality", "personal", "personally", "person"],
      ["feeling noun", "Happiness is a strong ___.", "feeling", "feel", "feels", "felt"],
      ["verb role", "In 'They play chess,' play is a ___.", "verb", "noun", "adjective", "article"],
      ["adjective role", "In 'a quiet room,' quiet is an ___.", "adjective", "adverb", "verb", "preposition"],
      ["adverb role", "In 'walk slowly,' slowly is an ___.", "adverb", "adjective", "noun", "article"],
      ["noun role", "In 'the old bridge,' bridge is a ___.", "noun", "verb", "adverb", "preposition"],
      ["tired person", "After the race, the runner felt ___.", "tired", "tiring", "tire", "tiredly"],
      ["tiring activity", "The long race was ___.", "tiring", "tired", "tire", "tiredly"],
      ["amazed person", "The class was ___ by the show.", "amazed", "amazing", "amaze", "amazingly"],
      ["amazing show", "The show was ___.", "amazing", "amazed", "amaze", "amazedly"],
      ["frightened person", "The child was ___ by the loud noise.", "frightened", "frightening", "frighten", "frightenedly"],
      ["frightening noise", "The loud noise was ___.", "frightening", "frightened", "frighten", "frightenedly"],
      ["pleased person", "{name} was ___ with the result.", "pleased", "pleasing", "please", "pleasedly"],
      ["pleasing result", "The result was ___ to everyone.", "pleasing", "pleased", "please", "pleasedly"]
    ]),
    19: grammarRows(19, [
      ["affect verb", "Air pollution can seriously ___ people's health.", "affect", "effect", "affects's", "effected"],
      ["effect noun", "Doctors are studying the ___ of the new medicine.", "effect", "affect", "affects", "affecting"],
      ["modal base reduce", "We should ___ waste first.", "reduce", "reduction", "reusable", "recycling"],
      ["effect noun role", "In 'The effect of sleep is clear,' effect is a ___.", "noun", "verb", "adverb", "conjunction"],
      ["can base affect", "Too much screen time can ___ sleep.", "affect", "effect", "affects", "affected"],
      ["recycle verb", "Our class will ___ old paper.", "recycle", "recycling", "recycled", "recyclable"],
      ["reusable adjective", "This cup is ___.", "reusable", "reuse", "reusing", "reusedly"],
      ["reduce amount", "Turning off lights can ___ power use.", "reduce", "reduction", "reduced", "reducing"],
      ["cause noun", "The ___ of the delay was heavy rain.", "cause", "because", "caused", "causing"],
      ["because conjunction", "We stayed inside ___ it rained.", "because", "cause", "caused", "causing"],
      ["safe adjective", "This road is ___ for children.", "safe", "safely", "safety", "save"],
      ["safely adverb", "{name} crossed the road ___.", "safely", "safe", "safety", "save"],
      ["save verb", "Please ___ water when you brush your teeth.", "save", "safe", "safety", "safely"],
      ["health noun", "Sleep is important for good ___.", "health", "healthy", "healthily", "heal"],
      ["healthy adjective", "Fruit is a ___ snack.", "healthy", "health", "healthily", "heal"],
      ["medicine noun", "Take this ___ after lunch.", "medicine", "medical", "medically", "medicate"],
      ["pollution noun", "Air ___ is a serious problem.", "pollution", "pollute", "polluted", "polluting"],
      ["polluted adjective", "The river became ___ after the storm.", "polluted", "pollution", "pollute", "polluting"],
      ["increase verb", "The price may ___ next month.", "increase", "increasing", "increased", "increaseful"],
      ["increase noun", "An ___ in price worried many families.", "increase", "increasing", "increased", "increaseful"],
      ["produce verb", "The factory will ___ less waste.", "produce", "product", "production", "productive"],
      ["product noun", "This ___ is made from paper.", "product", "produce", "production", "productive"],
      ["keep safe verb", "A good rule can ___ people safe.", "keep", "keeps", "kept", "keeping"],
      ["safe home noun", "Trees give animals a safe ___.", "home", "safely", "safety", "save"]
    ]),
    20: grammarRows(20, [
      ["tion noun", "In 'Good communication helps a team,' communication is a ___.", "noun", "verb", "adjective", "adverb"],
      ["ful adjective", "Which word is most likely an adjective because of its suffix? ___.", "helpful", "quickly", "movement", "teacher"],
      ["negative prefix", "Which word is formed with a negative prefix? ___.", "unhappy", "teacher", "reading", "careful"],
      ["ly adverb", "In 'She answered politely,' politely functions as an ___.", "adverb", "noun", "preposition", "article"],
      ["word change", "The noun form of communicate is ___.", "communication", "communicate", "communicately", "communicated"],
      ["er person", "A person who writes books is a ___.", "writer", "write", "writing", "written"],
      ["ment noun", "The word movement is a ___.", "noun", "verb", "adjective", "adverb"],
      ["ness noun", "The suffix -ness often makes a ___.", "noun", "verb", "adjective", "article"],
      ["less adjective", "A person without hope may feel ___.", "hopeless", "hope", "hopefully", "hoped"],
      ["re prefix", "The prefix re- often means ___.", "again", "not", "before", "wrong"],
      ["un prefix", "The prefix un- often means ___.", "not", "again", "after", "too"],
      ["pre prefix", "The prefix pre- often means ___.", "before", "not", "again", "under"],
      ["able suffix", "A road that can be used is ___.", "usable", "use", "using", "usedly"],
      ["quick adjective", "In 'a quick answer,' quick is an ___.", "adjective", "adverb", "noun", "verb"],
      ["quickly adverb", "In 'answer quickly,' quickly is an ___.", "adverb", "adjective", "noun", "verb"],
      ["teach teacher", "The word teacher is made from teach plus ___.", "-er", "-ly", "-tion", "un-"],
      ["happy unhappy", "The word unhappy is made from happy plus ___.", "un-", "-er", "-tion", "-ly"],
      ["move movement", "The word movement is made from move plus ___.", "-ment", "-ly", "-ful", "un-"],
      ["care careful", "The word careful is made from care plus ___.", "-ful", "-tion", "-ly", "un-"],
      ["carefully", "The word carefully is made from careful plus ___.", "-ly", "-er", "un-", "-tion"],
      ["act action", "The word action is a ___.", "noun", "verb", "adjective", "adverb"],
      ["active adjective", "The word active is an ___.", "adjective", "noun", "verb", "article"],
      ["act verb", "In 'They act fast,' act is a ___.", "verb", "noun", "adjective", "adverb"],
      ["word family", "Teach, teacher, and teaching belong to the same word ___.", "family", "office", "market", "ticket"]
    ])
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
    const rules = grammarRules(unitId);
    const ruleIndex = (slot + Math.floor(slot / rules.length)) % rules.length;
    const selected = rules[ruleIndex];
    const c = ctx(seed, quizId, unitId, slot);
    const stem = fill(selected.text, c);
    const answer = fill(selected.correct, c);
    const distractors = selected.distractors.map(choice => fill(choice, c));
    const correctSentence = sentenceFrom(stem, answer);
    const wrongSentences = distractors.map(choice => sentenceFrom(stem, choice));
    const converted = stem.includes("___") ? null : blankFromSentences(correctSentence, wrongSentences);
    const questionKind = selected.questionKind || (stem.includes("___") || converted ? "blank" : "concreteSentenceTask");
    const text = converted?.stem || (stem.includes("___") ? stem : concreteGrammarPrompt(selected, stem));
    const correct = converted?.correct || (stem.includes("___") ? answer : correctSentence);
    const choices = converted?.distractors || (stem.includes("___") ? distractors : wrongSentences);
    const conceptKey = selected.conceptKey || selected.topic;
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
    q.questionKind = questionKind;
    q.conceptKey = conceptKey;
    q.questionFormKey = `grammar:${questionKind}:${normalizeKeyText(conceptKey, true)}`;
    q.essenceKey = [
      `u${unitId}`,
      normalizeKeyText(conceptKey, true),
      normalizeKeyText(text, true),
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
    GRAMMAR_BANK_META: U.flatMap(unit => grammarRules(unit.id).map((rule, ruleIndex) => ({
      unitId: unit.id,
      topic: rule.topic,
      questionKind: rule.questionKind || (String(rule.text).includes("___") ? "blank" : "concreteSentenceTask"),
      ruleIndex
    }))),
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
