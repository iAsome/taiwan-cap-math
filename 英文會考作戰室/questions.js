window.EXAM_ENGINE = (() => {
  const U = window.ENGLISH_DATA.units;
  const quizTaxonomy = window.QUIZ_TAXONOMY || {};
  const QUESTION_COUNT = 50;
  const READING_SET_COUNT = 6;
  const READING_CHAPTERS = new Set([15, 16]);

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
  const quizCatalog = [...chapterQuizzes, ...reviewQuizzes].map(item => ({ ...item, minutes: 50, questionCount: 50 }));
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
      n: `${quizId.toUpperCase()}-${(slot % QUESTION_COUNT) + 1}`
    };
  }
  const fill = (text, c) => String(text).replace(/\{(\w+)\}/g, (_, key) => c[key] ?? "");

  function rule(unitId, topic, text, correct, distractors, step, tip, trap, ability = "knowledge", difficulty = 2) {
    return { unitId, topic, text, correct, distractors, step, tip, trap, ability, difficulty };
  }

  const RULES = {
    1: [
      rule(1, "現在簡單式與現在進行式", "Item {n}: {name} usually ___ to {place}, but today {name} is taking the bus.", "walks", ["is walking", "walk", "walked"], "usually signals a routine, so use the simple present with third-person -s.", "Time clues decide the tense before the verb form.", "Do not choose progressive just because the sentence says today."),
      rule(1, "現在進行式", "Item {n}: Look! {name2} ___ the {object} right now.", "is carrying", ["carries", "carry", "carried"], "Look and right now show an action happening now, so use be + V-ing.", "Present progressive needs both be and V-ing.", "Do not drop the be verb."),
      rule(1, "三單動詞拼字", "Item {n}: Which sentence is correct?", "{name} watches TV after dinner.", ["{name} watch TV after dinner.", "{name} watchs TV after dinner.", "{name} watching TV after dinner."], "A third-person singular subject takes -es after watch.", "Check the subject before adding -s or -es.", "watchs is a spelling error."),
      rule(1, "狀態動詞", "Item {n}: I ___ the answer to this question.", "know", ["am knowing", "knows", "knowing"], "know is a stative verb and normally does not use the progressive form.", "State verbs describe condition or thought, not an action in progress.", "Do not use am knowing in ordinary present meaning."),
      rule(1, "現在式用法辨識", "Item {n}: Which time clue usually asks for simple present?", "every day", ["right now", "at this moment", "Look!"], "every day marks a repeated habit.", "Routine clues go with simple present.", "Do not mix habit clues with progressive clues.")
    ],
    2: [
      rule(2, "不規則過去式", "Item {n}: {name} ___ a new {object} last night.", "bought", ["buyed", "buys", "buying"], "last night is a finished past time, and buy becomes bought.", "Memorize common irregular past forms.", "Do not add -ed to every verb."),
      rule(2, "過去式時間線索", "Item {n}: They ___ to {place} yesterday.", "went", ["go", "gone", "going"], "yesterday fixes the sentence in the simple past.", "Past time words decide tense first.", "gone needs a helper such as have."),
      rule(2, "will 即時決定", "Item {n}: A: The phone is ringing. B: I ___ it.", "will answer", ["am going to answer", "answered", "answer"], "A decision made at the moment often uses will.", "Use will for a quick decision.", "Do not use past tense for a future response."),
      rule(2, "be going to 計畫或跡象", "Item {n}: Look at those dark clouds. It ___ soon.", "is going to rain", ["will rain", "rained", "rains"], "Visible evidence points to be going to.", "Evidence now often points to be going to.", "Do not use simple present for this prediction."),
      rule(2, "未來式結構", "Item {n}: Which sentence is grammatically correct?", "{name} is going to visit {place} next week.", ["{name} going to visit {place} next week.", "{name} is go to visit {place} next week.", "{name} went to visit {place} next week."], "be going to needs the be verb before going.", "Check the full structure: be + going to + V.", "Do not omit be.")
    ],
    3: [
      rule(3, "for 與 since", "Item {n}: {name} has lived in Taipei ___ 2019.", "since", ["for", "at", "on"], "since introduces a starting point.", "since + starting point; for + length of time.", "Do not use for before a year that marks a start."),
      rule(3, "for 與時間長度", "Item {n}: {name2} has studied English ___ two years.", "for", ["since", "on", "at"], "two years is a length of time, so use for.", "A duration takes for.", "Do not use since before a duration."),
      rule(3, "現在完成式與過去式", "Item {n}: I saw that movie ___.", "yesterday", ["already", "yet", "since 2020"], "simple past works with a finished past time such as yesterday.", "Exact past time uses simple past.", "Do not pair present perfect with yesterday."),
      rule(3, "完成式結構", "Item {n}: Which sentence is correct?", "{name} has finished the report.", ["{name} have finished the report.", "{name} has finish the report.", "{name} finished the report already since."], "A singular subject uses has + past participle.", "Present perfect uses have/has + p.p.", "Do not use base verb after has."),
      rule(3, "完成式經驗", "Item {n}: ___ you ever visited {place}?", "Have", ["Did", "Are", "Do"], "ever in an experience question usually uses present perfect.", "Experience questions often start with Have/Has.", "Did you ever is possible in some dialects, but this quiz targets standard present perfect.")
    ],
    4: [
      rule(4, "must not 與 do not have to", "Item {n}: You ___ smoke here. It is against the rule.", "must not", ["do not have to", "may not have to", "should to"], "must not means prohibition.", "Ask whether the sentence means forbidden or unnecessary.", "do not have to means not necessary, not forbidden."),
      rule(4, "不必做某事", "Item {n}: You ___ come early if you are busy. It is not necessary.", "do not have to", ["must not", "may not", "should not to"], "not necessary points to do not have to.", "Necessity and prohibition are different meanings.", "must not is too strong here."),
      rule(4, "情態助動詞後接原形", "Item {n}: {name} can ___ the {object} after class.", "take", ["takes", "took", "taking"], "A modal is followed by the base verb.", "can/must/should + base verb.", "Do not add -s after a modal."),
      rule(4, "推測程度", "Item {n}: {name2} has not eaten all day. {name2} ___ be hungry.", "must", ["can", "should to", "has to be eating"], "The evidence is strong, so must expresses a strong conclusion.", "Use must for a strong logical guess.", "can is not used this way in affirmative deduction."),
      rule(4, "許可與建議", "Item {n}: Which sentence uses a modal correctly?", "{name} should ask the teacher first.", ["{name} should to ask the teacher first.", "{name} should asks the teacher first.", "{name} should asked the teacher first."], "should is followed by the base verb.", "Modal structure stays simple.", "Do not add to after should.")
    ],
    5: [
      rule(5, "不可數名詞", "Item {n}: Can you give me some ___ about the bus schedule?", "information", ["informations", "an information", "information's"], "information is uncountable in this use.", "Some common nouns do not take plural -s.", "Do not add -s to information."),
      rule(5, "much 與不可數名詞", "Item {n}: We do not have much ___ today.", "homework", ["homeworks", "a homework", "homework's"], "homework is uncountable, so much homework is correct.", "much goes with uncountable nouns.", "Do not use a homework."),
      rule(5, "代名詞受格", "Item {n}: This gift is for ___.", "him", ["he", "his", "himself"], "After a preposition, use the object form.", "for/to/with take object pronouns.", "he is a subject form."),
      rule(5, "冠詞 a/an", "Item {n}: {name} needs ___ umbrella.", "an", ["a", "the a", "no article"], "umbrella starts with a vowel sound, so use an.", "Choose a/an by sound, not spelling alone.", "Do not use a before a vowel sound."),
      rule(5, "所有格代名詞", "Item {n}: That notebook is ___.", "hers", ["her", "she", "her's"], "hers is an independent possessive pronoun.", "Use hers without an apostrophe.", "her's is not standard English.")
    ],
    6: [
      rule(6, "連綴動詞後接形容詞", "Item {n}: This soup smells ___.", "delicious", ["deliciously", "delicious's", "delicion"], "smell as a linking verb is followed by an adjective.", "look/feel/sound/smell/taste can link to adjectives.", "Do not add -ly after a linking verb."),
      rule(6, "形容詞描述主詞", "Item {n}: You look ___ today. Are you okay?", "tired", ["tiredly", "tiring", "tire"], "look links the subject to an adjective.", "Ask whether the word describes the subject or the action.", "tiredly describes an action, not the subject here."),
      rule(6, "副詞修飾動詞", "Item {n}: {name} finished the race ___.", "well", ["good", "goodly", "wellly"], "well is the adverb form used to describe how someone did something.", "good is usually an adjective; well is often an adverb.", "goodly is not the target form."),
      rule(6, "fast 的副詞形式", "Item {n}: {name2} drives very ___.", "fast", ["fastly", "faster than", "fasting"], "fast can be both adjective and adverb.", "Not every adverb ends in -ly.", "fastly is not standard for this meaning."),
      rule(6, "程度副詞位置", "Item {n}: Which sentence is correct?", "{name} is very careful with the {object}.", ["{name} is careful very with the {object}.", "{name} very is careful with the {object}.", "{name} is careful with very the {object}."], "very usually comes before the adjective it modifies.", "Place degree words right before adjectives or adverbs.", "Do not separate very from the word it modifies.")
    ],
    7: [
      rule(7, "比較級", "Item {n}: This question is ___ than that one.", "more difficult", ["difficulter", "more difficulter", "difficult more"], "Longer adjectives often use more.", "Use either -er or more, not both.", "Do not double mark the comparative."),
      rule(7, "短形容詞比較級", "Item {n}: {name} is ___ than {name2}.", "taller", ["more tall", "more taller", "tallest"], "Short adjectives often take -er.", "than signals a comparative form.", "tallest is superlative, not comparative."),
      rule(7, "原級比較", "Item {n}: This bag is as ___ as that one.", "heavy", ["heavier", "heaviest", "more heavy"], "as...as takes the base adjective.", "Do not use comparative forms inside as...as.", "heavier does not fit after as."),
      rule(7, "最高級", "Item {n}: This is the ___ story in the book.", "most interesting", ["more interesting", "interestingest", "most interestinger"], "the and in the group point to a superlative.", "Long adjectives use most for superlative.", "Do not combine most and -er."),
      rule(7, "比較句結構", "Item {n}: Which sentence is correct?", "{name}'s room is cleaner than {name2}'s room.", ["{name}'s room is clean than {name2}'s room.", "{name}'s room is cleanest than {name2}'s room.", "{name}'s room is more cleaner than {name2}'s room."], "than needs a comparative form.", "Cleaner already marks comparison.", "Do not use more cleaner.")
    ],
    8: [
      rule(8, "時間介系詞 on", "Item {n}: We will meet ___ Monday.", "on", ["at", "in", "to"], "Use on with days.", "in for long periods, on for days/dates, at for clock times.", "Do not use at with Monday."),
      rule(8, "時間介系詞 in", "Item {n}: {name} was born ___ 2010.", "in", ["on", "at", "to"], "Use in with years.", "Years and months usually take in.", "Do not use on for a year alone."),
      rule(8, "時間介系詞 at", "Item {n}: The class starts ___ seven.", "at", ["in", "on", "to"], "Use at with exact clock times.", "Exact time points take at.", "Do not use in seven for clock time."),
      rule(8, "reach 不加介系詞", "Item {n}: The train will ___ Taipei Station at nine.", "reach", ["arrive", "arrive to", "reach to"], "reach takes a place directly.", "reach + place; arrive at/in + place.", "Do not say reach to a place."),
      rule(8, "arrive at/in", "Item {n}: We will ___ at the airport soon.", "arrive", ["reach", "reach to", "arrived to"], "arrive can be followed by at for a point-like place.", "arrive needs at/in when a place follows.", "Do not use arrive to.")
    ],
    9: [
      rule(9, "although 不與 but 重複", "Item {n}: ___ it was raining, we still went hiking.", "Although", ["Because", "So", "Although...but"], "Although already marks contrast.", "Do not double mark contrast with although and but in the same clause pair.", "Although...but is a common error."),
      rule(9, "because 不與 so 重複", "Item {n}: It rained hard, ___ we stayed home.", "so", ["because", "although", "so...because"], "so connects the result after the reason.", "Use one cause-result marker, not two.", "Do not use because after a complete result clause here."),
      rule(9, "對等連接詞", "Item {n}: I like tea, ___ {name} likes coffee.", "but", ["although", "because", "when"], "Two equal clauses with contrast can be joined by but.", "Coordinating conjunctions join equal parts.", "although would make a dependent clause."),
      rule(9, "從屬連接詞", "Item {n}: ___ {name2} was tired, {name2} kept working.", "Although", ["But", "So", "And"], "Although begins a dependent contrast clause.", "Use a subordinating conjunction when one clause depends on another.", "But should not start this dependent clause in this structure."),
      rule(9, "條件子句", "Item {n}: ___ you need help, call me.", "If", ["And", "So", "But"], "If introduces a condition.", "A condition clause explains when something will happen.", "And only adds information; it does not mark a condition.")
    ],
    10: [
      rule(10, "動名詞受詞", "Item {n}: {name} enjoys ___ mystery novels.", "reading", ["to read", "read", "reads"], "enjoy is followed by a gerund.", "Some verbs require V-ing as the object.", "Do not use to read after enjoy in this pattern."),
      rule(10, "不定詞受詞", "Item {n}: They decided ___ early.", "to leave", ["leaving", "leave", "left"], "decide is followed by an infinitive.", "decide/plan/hope often take to V.", "Do not use leaving after decided here."),
      rule(10, "介系詞後接動名詞", "Item {n}: {name2} is interested in ___ Japanese.", "learning", ["to learn", "learn", "learns"], "A verb after a preposition takes the gerund form.", "Preposition + V-ing.", "Do not use in to learn."),
      rule(10, "目的不定詞", "Item {n}: {name} went to {place} ___ a book.", "to borrow", ["borrowing", "borrowed", "borrows"], "to V can show purpose.", "Ask whether the phrase answers why.", "Do not use V-ing for this purpose phrase."),
      rule(10, "主詞位置的動名詞", "Item {n}: ___ every day is good practice.", "Reading", ["Read", "To reading", "Reads"], "A verb used as the subject can become a gerund.", "V-ing can act like a noun.", "To reading mixes two forms.")
    ],
    11: [
      rule(11, "被動語態時態", "Item {n}: This bridge ___ in 1930.", "was built", ["is built", "has built", "built"], "in 1930 points to past passive: was/were + p.p.", "Passive voice needs be + p.p.", "Do not omit be."),
      rule(11, "現在被動", "Item {n}: English ___ in many countries.", "is spoken", ["speaks", "was spoken", "spoken"], "A general present passive uses is/am/are + p.p.", "The subject receives the action.", "spoken alone is incomplete."),
      rule(11, "不及物動詞無被動", "Item {n}: The accident ___ yesterday.", "happened", ["was happened", "is happened", "happens"], "happen is intransitive and does not form a passive.", "Only verbs with objects can usually become passive.", "Do not make happen passive."),
      rule(11, "by 片語", "Item {n}: The window was broken ___ the strong wind.", "by", ["with", "from", "at"], "by can introduce the doer or cause in a passive sentence.", "Passive sentences may include by + agent/cause.", "Do not use at for the agent."),
      rule(11, "主動改被動", "Item {n}: Which sentence is passive?", "The letter was written by {name}.", ["{name} wrote the letter.", "{name} is writing the letter.", "{name} writes letters."], "was written by marks passive voice.", "Look for be + p.p.", "A sentence with an object is not automatically passive.")
    ],
    12: [
      rule(12, "附加問句", "Item {n}: Your sister plays the piano well, ___?", "doesn't she", ["does she", "isn't she", "doesn't he"], "A positive statement takes a negative tag.", "Match the helper and pronoun.", "plays needs does in the tag."),
      rule(12, "完成式附加問句", "Item {n}: You haven't finished your homework, ___?", "have you", ["haven't you", "did you", "don't you"], "A negative statement takes a positive tag.", "Use the same helper from the statement.", "Do not switch to did."),
      rule(12, "一般動詞問句", "Item {n}: ___ {name} like coffee?", "Does", ["Is", "Do", "Did"], "A third-person singular subject in a present question uses does.", "Do-support forms questions with ordinary verbs.", "Is is for be-verb or progressive patterns."),
      rule(12, "問句語序", "Item {n}: Which question is correct?", "Did {name2} bring the {object}?", ["{name2} brought the {object}?", "Did {name2} brought the {object}?", "Does {name2} brought the {object}?"], "After did, use the base verb.", "Question helper carries the tense.", "Do not keep past tense on the main verb after did."),
      rule(12, "否定句", "Item {n}: {name} ___ know the answer.", "doesn't", ["don't", "isn't", "didn't to"], "Third-person singular present negative uses doesn't + base verb.", "Use do-support for ordinary verbs.", "Do not use isn't with know.")
    ],
    13: [
      rule(13, "關係代名詞 who", "Item {n}: The woman ___ called you yesterday is my aunt.", "who", ["which", "whose", "what"], "who refers to a person and works as the subject in the relative clause.", "Find the antecedent first.", "which does not refer to a person here."),
      rule(13, "關係代名詞 which/that", "Item {n}: This is the book ___ I told you about.", "that", ["who", "whose", "what"], "that can refer to a thing in a defining relative clause.", "Use who for people, which/that for things.", "what is not used after a clear antecedent."),
      rule(13, "whose 所有格", "Item {n}: The student ___ bag was lost went to the office.", "whose", ["who", "which", "that"], "whose shows possession.", "If the next noun belongs to the antecedent, use whose.", "who cannot directly show possession before bag."),
      rule(13, "非限定子句", "Item {n}: Mr. Lin, ___ teaches math, is very patient.", "who", ["that", "whose", "what"], "Non-defining clauses after commas do not use that.", "Commas change the relative clause type.", "Do not use that after the comma pair."),
      rule(13, "關係子句位置", "Item {n}: Which sentence is correct?", "The movie that we watched was exciting.", ["The movie we watched it was exciting.", "The movie what we watched was exciting.", "The movie that we watched it was exciting."], "The object inside the relative clause is replaced, so do not repeat it.", "Avoid double objects in relative clauses.", "Do not keep it after watched.")
    ],
    14: [
      rule(14, "現在假設", "Item {n}: If I ___ a bird, I would fly to you.", "were", ["am", "was", "be"], "Unreal present condition uses were in this fixed pattern.", "If I were is the standard test form.", "Do not choose am for an unreal condition."),
      rule(14, "過去假設結果", "Item {n}: If {name} had studied harder, {name} ___ the exam.", "would have passed", ["would pass", "passed", "will pass"], "Past unreal result uses would have + p.p.", "had + p.p. pairs with would have + p.p.", "Do not use will for an unreal past result."),
      rule(14, "現在假設結果", "Item {n}: If {name2} had more time, {name2} ___ the project.", "would finish", ["will finish", "finished", "would have finished"], "Unreal present result uses would + base verb.", "Match the time frame of the condition.", "would have finished points to unreal past, not present."),
      rule(14, "if 子句動詞", "Item {n}: Which sentence is correct?", "If {name} were here, we would start now.", ["If {name} is here, we would start now.", "If {name} were here, we will start now.", "If {name} be here, we would start now."], "Unreal present uses were and would.", "Keep both halves in the same unreal pattern.", "Do not mix is with would."),
      rule(14, "過去假設條件", "Item {n}: If they ___ earlier, they would have caught the bus.", "had left", ["left", "have left", "would leave"], "Past unreal condition uses had + p.p.", "The if-clause shows the unreal past condition.", "Do not put would in the if-clause.")
    ],
    15: [
      rule(15, "主旨範圍", "Item {n}: A paragraph explains that students save money by bringing lunch, using old notebooks, and taking the bus. Which title fits best?", "Small Ways Students Can Save Money", ["Taking the Bus Only", "A Lunch Box Story", "Why Notebooks Are Expensive"], "The best title covers all main examples.", "Main idea choices should be broad enough but not too broad.", "Do not choose a detail as the title.", "comprehension"),
      rule(15, "最佳標題", "Item {n}: A passage begins, 'Have you ever wondered why cats sleep so much?' What title best matches the topic?", "Why Do Cats Sleep So Much?", ["My Favorite Cat", "How to Buy Cat Food", "The History of Dogs"], "The opening question sets the passage topic.", "A title should match the whole passage.", "Do not choose a title that only shares one word.", "comprehension"),
      rule(15, "細節與主旨", "Item {n}: Which choice is too narrow for a passage about exercise, sleep, and healthy food?", "Running after school", ["Three habits for health", "How students stay healthy", "Daily habits and health"], "Running is only one possible detail.", "Too-narrow choices miss other major points.", "A detail is not the main idea.", "comprehension"),
      rule(15, "主題句", "Item {n}: Which sentence sounds like a topic sentence?", "There are three easy ways to make a classroom cleaner.", ["The floor was wet near the door.", "Mina picked up one bottle.", "The bell rang at noon."], "A topic sentence introduces the whole paragraph.", "Look for a sentence that can cover later details.", "A single event is usually too narrow.", "comprehension"),
      rule(15, "段落功能", "Item {n}: A final paragraph says, 'For these reasons, a small change can help the whole school.' What is its function?", "It gives the conclusion.", ["It starts a new example.", "It lists a character.", "It asks a new question."], "For these reasons points back to earlier support.", "Conclusion sentences often summarize the point.", "Do not read a conclusion as a new example.", "comprehension")
    ],
    16: [
      rule(16, "推論證據", "Item {n}: Sales dropped after the price went up, so the shop lowered the price again. What can we infer?", "The higher price hurt sales.", ["The shop sold more than before.", "The product was free.", "The shop closed forever."], "The price rose, sales dropped, then the shop changed the price back.", "Inference must be supported by clues in the text.", "Do not choose an idea without evidence.", "inquiry"),
      rule(16, "代名詞指涉", "Item {n}: Sam left his phone at the restaurant, so he went back to get it. What does it refer to?", "his phone", ["the restaurant", "Sam", "the way back"], "it is singular and matches his phone in meaning.", "Replace the pronoun with each choice to test it.", "Do not choose a place when the sentence needs an object.", "comprehension"),
      rule(16, "語氣判斷", "Item {n}: The writer says, 'Luckily, the missing ticket was still in my bag!' What tone is shown?", "relieved", ["angry", "bored", "uncertain"], "Luckily and the exclamation show relief.", "Tone comes from word choice and punctuation.", "Do not ignore emotional clues.", "inquiry"),
      rule(16, "推論與直接細節", "Item {n}: Which answer is an inference, not a direct detail?", "{name} probably felt nervous before the test.", ["The test started at nine.", "{name} had two pencils.", "The teacher opened the door."], "probably felt nervous extends from clues instead of copying a detail.", "Inference goes one step beyond the sentence but still needs support.", "Do not call a copied fact an inference.", "inquiry"),
      rule(16, "指涉一致", "Item {n}: The students put the boxes on the table because they were heavy. What does they refer to?", "the boxes", ["the students", "the table", "the room"], "heavy describes the boxes, not the students or table.", "Pronoun reference must fit grammar and meaning.", "Do not choose the nearest noun if meaning fails.", "comprehension")
    ],
    17: [
      rule(17, "borrow 與 lend", "Item {n}: Could I ___ your dictionary? I forgot mine.", "borrow", ["lend", "borrowed", "lending"], "The speaker receives the item, so use borrow.", "borrow is used from the receiver's view.", "Do not use lend when the subject receives.", "inquiry"),
      rule(17, "lend 用法", "Item {n}: Can you ___ me some money? I will pay you back tomorrow.", "lend", ["borrow", "lent", "borrowing"], "The subject gives something temporarily, so use lend.", "lend is used from the giver's view.", "Do not use borrow for the giver.", "inquiry"),
      rule(17, "bring 與 take", "Item {n}: Please ___ your notebook when you come to class.", "bring", ["take", "brought", "taking"], "The movement is toward the speaker/classroom, so use bring.", "bring moves toward the speaker or target place.", "Do not use take for movement toward here.", "inquiry"),
      rule(17, "take 用法", "Item {n}: Do not forget to ___ your umbrella when you leave home.", "take", ["bring", "took", "bringing"], "The movement is away from home, so use take.", "take moves something away from the starting point.", "Do not choose bring just because an object is carried.", "inquiry"),
      rule(17, "固定搭配", "Item {n}: Which sentence is correct?", "{name} borrowed a book from {name2}.", ["{name} borrowed {name2} a book.", "{name} lent from {name2} a book.", "{name} borrowed to {name2} a book."], "borrow commonly uses from for the source.", "Check the direction and the preposition together.", "Do not mix borrow with lend patterns.", "inquiry")
    ],
    18: [
      rule(18, "-ed 情緒形容詞", "Item {n}: After hearing the confusing directions, I felt totally ___.", "confused", ["confusing", "confuse", "confuses"], "-ed describes the person's feeling.", "Use -ed for how someone feels.", "Do not use -ing for the person who receives the feeling.", "knowledge"),
      rule(18, "-ing 情緒形容詞", "Item {n}: The movie was so ___ that I almost fell asleep.", "boring", ["bored", "bore", "bores"], "-ing describes the thing that causes the feeling.", "Use -ing for the cause.", "Do not use bored to describe the movie in this structure.", "knowledge"),
      rule(18, "人與事物方向", "Item {n}: Which sentence is correct?", "{name} was interested in the story.", ["The story was interested.", "{name} was interesting by the story.", "{name} interest in the story."], "A person can be interested in something.", "Check whether the adjective describes the person or the cause.", "Do not swap -ed and -ing forms.", "knowledge"),
      rule(18, "形容詞位置", "Item {n}: Choose the correct adjective position.", "a friendly teacher", ["a teacher friendly", "a friend teacherly", "a teacher friend"], "An adjective usually comes before the noun it modifies.", "Position helps identify the word's role.", "Do not place a simple adjective after the noun here.", "knowledge"),
      rule(18, "詞性判斷", "Item {n}: In 'The exciting game ended late,' exciting is used as a _____.", "adjective", ["verb", "noun", "preposition"], "exciting modifies game, so it functions as an adjective.", "Ask what word it modifies.", "Do not judge only by the -ing ending.", "knowledge")
    ],
    19: [
      rule(19, "affect 作動詞", "Item {n}: Air pollution can seriously ___ people's health.", "affect", ["effect", "affects's", "effected"], "The blank needs a verb after can.", "Judge the needed part of speech first.", "effect is usually a noun in this contrast.", "knowledge"),
      rule(19, "effect 作名詞", "Item {n}: Doctors are studying the ___ of the new medicine.", "effect", ["affect", "affects", "affecting"], "the points to a noun phrase, so use effect.", "Articles often signal a noun.", "Do not choose the verb form after the.", "knowledge"),
      rule(19, "reduce/reuse/recycle 用法", "Item {n}: Which sentence uses the verb form correctly?", "We should reduce waste first.", ["We should reduction waste first.", "We should reusable waste first.", "We should recycling waste first."], "After should, use a base verb.", "Modal + base verb also applies to topic words.", "Do not use noun or adjective forms after should.", "inquiry"),
      rule(19, "詞性結構", "Item {n}: In 'The effect of sleep is clear,' effect is a _____.", "noun", ["verb", "adverb", "conjunction"], "The effect is a noun phrase.", "The article the helps identify a noun.", "Do not confuse spelling with function.", "knowledge"),
      rule(19, "搭配判斷", "Item {n}: Which sentence is grammatical?", "Too much screen time can affect sleep.", ["Too much screen time can effect sleep.", "Too much screen time can affects sleep.", "Too much screen time can affected sleep."], "can needs a base verb, and affect is the verb.", "Use structure to choose between similar words.", "Do not choose by sound alone.", "inquiry")
    ],
    20: [
      rule(20, "名詞字尾 -tion", "Item {n}: In 'Good communication helps a team,' communication is a _____.", "noun", ["verb", "adjective", "adverb"], "-tion often forms nouns.", "Suffixes can show part of speech.", "Do not judge only from the root communicate.", "knowledge"),
      rule(20, "形容詞字尾 -ful", "Item {n}: Which word is most likely an adjective because of its suffix?", "helpful", ["quickly", "movement", "teacher"], "-ful often forms adjectives.", "A suffix can signal a word's role in a sentence.", "Do not choose a noun suffix such as -ment.", "knowledge"),
      rule(20, "否定字首", "Item {n}: Which word is formed with a negative prefix?", "unhappy", ["teacher", "reading", "careful"], "un- is a common negative prefix.", "Prefixes can show direction before you read the full sentence.", "Do not treat every beginning letter as a prefix.", "knowledge"),
      rule(20, "副詞字尾 -ly", "Item {n}: In 'She answered politely,' politely functions as a _____.", "adverb", ["noun", "preposition", "article"], "politely describes how she answered.", "Many -ly words function as adverbs.", "Do not call a word a noun just because it is long.", "knowledge"),
      rule(20, "構詞與詞性", "Item {n}: Which pair shows the correct part-of-speech change?", "communicate -> communication", ["happy -> happilyness", "teach -> teacherly noun", "move -> movemently"], "communicate is a verb and communication is a noun.", "Check whether the suffix creates a real word and role.", "Do not add suffixes mechanically.", "inquiry")
    ]
  };

  function buildRuleQuestion(r, seed, quizId, unitId, slot) {
    const rules = RULES[unitId] || RULES[1];
    const selected = rules[(slot + hashSeed(`${seed}:${quizId}:${unitId}`)) % rules.length];
    const c = ctx(seed, quizId, unitId, slot);
    const q = mc(
      r,
      unitId,
      selected.difficulty,
      fill(selected.text, c),
      fill(selected.correct, c),
      selected.distractors.map(choice => fill(choice, c)),
      [fill(selected.step, c)],
      fill(selected.tip, c),
      fill(selected.trap, c),
      `This question checks ${selected.topic} in this unit.`,
      `Unit rule: ${selected.topic}.`
    );
    q.ability = selected.ability || abilityKeys[slot % abilityKeys.length];
    q.taxonomyTopic = selected.topic;
    q.ruleSlot = slot;
    return q;
  }

  const readingNames = ["Amy", "Ben", "Cindy", "David", "Ella", "Grace", "Henry", "Ivy", "Jack", "Leo", "Mina", "Ruby", "Sam", "Tina"];
  const readingPlaces = ["school", "the library", "the market", "the park", "the classroom", "the station"];
  const readingProblems = ["the room was too loud", "the sign was hard to see", "the line moved slowly", "the team had little time", "the map was not clear", "the plan changed suddenly"];
  const readingActions = ["asked a classmate for one clue", "read the last sentence again", "checked the title before reading", "looked for the noun before the pronoun", "compared the first and last paragraphs", "found the sentence with because"];
  const readingResults = ["the answer became clearer", "the group chose the best title", "the class found the main idea", "the team understood the pronoun", "the final choice matched the passage", "the students found the evidence"];

  function generatedReading(seed, quizId, unitId, passageIndex) {
    const serial = quizIndexById[quizId] * 2 + passageIndex;
    const r = rngFromSeed(`reading-${seed}-${quizId}-${passageIndex}`);
    const at = (list, salt = 0) => list[(serial + ri(r, 0, list.length - 1) + salt) % list.length];
    const name = at(readingNames);
    const place = at(readingPlaces, 2);
    const problem = at(readingProblems, 4);
    const action = at(readingActions, 6);
    const result = at(readingResults, 8);
    const title = unitId === 15 ? `Finding the Main Idea ${serial + 1}` : `Using Evidence ${serial + 1}`;
    const passage = `${name} was reading a short article at ${place}. At first, ${problem}. ${name} ${action}. After that, ${result}. ${name} learned that careful readers always use clues from the passage.`;
    const questions = unitId === 15
      ? [
        ["What is the best title for this reading?", `${name} Uses Clues to Read Better`, ["A New Lunch Menu", "A Long Bus Ride", "A Phone for Sale"], "The whole passage is about using clues while reading."],
        ["Which sentence shows the main lesson?", "Careful readers always use clues from the passage.", [`${name} was at ${place}.`, `${problem}.`, `${name} read a short article.`], "The final sentence states the broad lesson."],
        ["Which choice is too narrow to be the main idea?", `${name} was at ${place}.`, ["Readers should use passage clues.", "Clues can help readers understand.", "Reading carefully helps answer questions."], "A place detail is only one small part of the passage."]
      ]
      : [
        ["What can we infer about the reader?", `${name} changed strategy after noticing the problem.`, [`${name} stopped reading forever.`, `${name} already knew every answer.`, `${name} did not use the passage.`], "The action after the problem shows a change in strategy."],
        ["What does that in the last sentence refer to?", "using clues from the passage", ["the place", "the title number", "the first word"], "that points back to the reading strategy described before."],
        ["Which detail supports the answer?", `${name} ${action}.`, [`${name} was reading.`, `${name} was at ${place}.`, "The article was short."], "The action sentence is the evidence for the strategy."]
      ];
    return { title, unitId, passage, glossary: [], questions };
  }

  function readingQuestions(r, seed, quizId, unitId) {
    return [0, 1].flatMap(passageIndex => {
      const passage = generatedReading(seed, quizId, unitId, passageIndex);
      return passage.questions.map((row, qi) => {
        const text = `Reading ${passageIndex + 1}: ${passage.title}\n\n${passage.passage}\n\n${row[0]}`;
        const q = mc(r, unitId, qi === 0 ? 2 : 3, text, row[1], row[2], [row[3]], "Read the question, then return to the passage for evidence.", "Use the passage, not outside guesses.", "Reading skill check", `This question checks ${unitId === 15 ? "main idea and title scope" : "inference and pronoun reference"}.`, `Reading skill unit ${unitId}.`);
        q.ability = qi === 0 ? "comprehension" : "inquiry";
        q.readingGroup = passageIndex + 1;
        q.taxonomyTopic = `Reading skill set ${passageIndex + 1}`;
        q.passage = passage.passage;
        q.readingTitle = passage.title;
        q.glossary = passage.glossary;
        return q;
      });
    });
  }

  function generateQuiz(quizId, seedOverride) {
    const blueprint = quizCatalog.find(item => item.id === quizId);
    if (!blueprint) throw new Error("Unknown quiz id");
    const seed = seedOverride == null ? hashSeed(quizId) : Math.max(1, Math.min(999999, Number(seedOverride) || hashSeed(seedOverride)));
    const r = rngFromSeed(seed);
    const isReadingChapter = blueprint.scope === "chapter" && READING_CHAPTERS.has(blueprint.unitIds[0]);
    const generalCount = isReadingChapter ? QUESTION_COUNT - READING_SET_COUNT : QUESTION_COUNT;
    const unitCycle = blueprint.unitIds.length ? blueprint.unitIds : U.map(u => u.id);
    const questions = [];
    const baseSlot = quizIndexById[quizId] * QUESTION_COUNT;
    for (let i = 0; i < generalCount; i++) {
      const unitId = unitCycle[i % unitCycle.length];
      questions.push(buildRuleQuestion(r, seed, quizId, unitId, baseSlot + i));
    }
    if (isReadingChapter) questions.push(...readingQuestions(r, seed, quizId, blueprint.unitIds[0]));
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
      blueprint: "english-50q-unit-grammar-usage",
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
    quizCatalog,
    abilityLabel,
    groupNames,
    QUESTION_COUNT,
    READING_CHAPTERS: [...READING_CHAPTERS]
  };
})();
