// 英文小考題型 template 庫。
// ponytail: 英語文法屬規則導向科目，許多小節可用 pick() 在少數已驗證過的例句情境間切換，
// 取代逐一硬編大量例句；這裡的小節分類是本站依課綱文法能力指標與字彙表自行拆解，
// 不是取自特定出版社逐字分類，已在來源審核頁如實註明。
window.QUIZ_TAXONOMY = {
  u1: {
    source: "本站依課綱『現在式、現在進行式』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "現在式與現在進行式", topics: [
      { id: "simple-vs-progressive", title: "現在簡單式與現在進行式的選用", template({ r, pick, mc }) {
        const opt = pick(r, [["Look! The dog ___ (run) after the cat.", "is running", ["runs", "run", "was running"]], ["She usually ___ (walk) to school, but today she is taking the bus.", "walks", ["is walking", "walk", "walked"]]]);
        return mc(r, 1, 1, opt[0], opt[1], opt[2], ["Look! 暗示動作正在眼前發生，用現在進行式。", "usually 是頻率副詞，暗示習慣性動作，用現在簡單式。"], "先找時間副詞線索：Look!/now 用進行式，usually/always 用簡單式。", "不要看到現在式就直覺選原形動詞，還要檢查主詞是否為第三人稱單數。")
      }},
      { id: "third-person-s", title: "三單動詞拼寫規則", template({ r, pick, mc }) {
        const opt = pick(r, [["He ___ (watch) TV every night.", "watches", ["watch", "watchs", "watching"]], ["My mom ___ (try) her best to help us.", "tries", ["trys", "try", "trying"]]]);
        return mc(r, 1, 1, opt[0], opt[1], opt[2], ["主詞是第三人稱單數，動詞需加 -s/-es 或去 y 加 -ies。", "以 ch/sh/o/x/s 結尾加 -es；子音+y 結尾去 y 加 -ies。"], "先確認主詞是不是第三人稱單數，再檢查字尾規則。", "trys 是常見拼寫錯誤，子音+y結尾要去y加ies變成tries。")
      }},
      { id: "stative-verbs", title: "狀態動詞不用進行式", template({ r, mc }) {
        return mc(r, 1, 2, "選出正確：I ___ (know) the answer already.", "know", ["am knowing", "knows", "knowing"], ["know 是表示認知狀態的動詞（stative verb），一般不用進行式。", "主詞 I 搭配動詞原形，不需要加 -s。"], "like/know/want/believe 這類狀態動詞通常不用進行式。", "不要看到現在的情境就直接選現在進行式，先確認動詞是否為狀態動詞。")
      }}
    ] }]
  },
  u2: {
    source: "本站依課綱『過去式、未來式』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "過去式與未來式", topics: [
      { id: "irregular-past", title: "不規則動詞過去式", template({ r, pick, mc }) {
        const opt = pick(r, [["She ___ (buy) a new bike last weekend.", "bought", ["buyed", "buys", "buying"]], ["They ___ (go) to Japan last summer.", "went", ["goed", "gone", "going"]]]);
        return mc(r, 2, 1, opt[0], opt[1], opt[2], ["buy/go 是不規則動詞，過去式需個別背誦（buy→bought, go→went）。", "last weekend/last summer 是明確過去時間詞，需用過去式。"], "不規則動詞沒有固定規則，需整理成表格分批背誦。", "不要用規則變化加 -ed，不規則動詞要背專屬的過去式形態。")
      }},
      { id: "will-vs-going-to", title: "will 與 be going to 的選用", template({ r, pick, mc }) {
        const opt = pick(r, [["A: The phone is ringing. B: OK, I ___ (answer) it.", "will answer", ["am going to answer", "answered", "answer"]], ["Look at those dark clouds. It ___ (rain) soon.", "is going to rain", ["will rain", "rains", "rained"]]]);
        return mc(r, 2, 2, opt[0], opt[1], opt[2], ["第一句是說話當下臨時決定，用 will；第二句依眼前烏雲跡象判斷，用 be going to。", "兩者都表示未來，但語意來源不同：臨時決定 vs. 依現有跡象。"], "臨時決定/預測用 will；事先計畫或有明顯跡象用 be going to。", "不要把 will 和 be going to 當成完全等義、可任意互換。")
      }}
    ] }]
  },
  u3: {
    source: "本站依課綱『現在完成式』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "現在完成式", topics: [
      { id: "for-since", title: "for 與 since 的用法", template({ r, pick, mc }) {
        const opt = pick(r, [["I have lived in Taipei ___ 2019.", "since", ["for", "in", "at"]], ["She has studied English ___ five years.", "for", ["since", "in", "at"]]]);
        return mc(r, 3, 1, opt[0], opt[1], opt[2], ["since 接一個時間起點（2019），for 接一段時間長度（five years）。", "兩者都能用在現在完成式，但接續的時間詞類型不同。"], "since + 起點；for + 一段時間長度，先看空格後面是哪一種。", "不要看到現在完成式就隨便選 for 或 since，要看後面接的是時間點還是時間長度。")
      }},
      { id: "have-vs-past", title: "現在完成式與過去簡單式的區辨", template({ r, mc }) {
        return mc(r, 3, 2, "選出正確：I saw that movie ___.", "yesterday", ["already", "yet", "since 2020"], ["yesterday 是明確過去時間點，須搭配過去簡單式，不能用現在完成式。", "already/yet/since 都是現在完成式常見的信號詞，不能搭配過去簡單式的句型。"], "看到明確過去時間點，直接判斷是過去簡單式的情境。", "現在完成式不能和 yesterday 等精確過去時間詞連用。")
      }}
    ] }]
  },
  u4: {
    source: "本站依課綱『情態助動詞』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "情態助動詞", topics: [
      { id: "must-vs-dont-have-to", title: "must not 與 don't have to 的區辨", template({ r, pick, mc }) {
        const opt = pick(r, [["You ___ smoke here. It's against the law.", "must not", ["don't have to", "may not have to", "should to"]], ["You ___ come if you're busy. It's not necessary.", "don't have to", ["must not", "may not", "shouldn't to"]]]);
        return mc(r, 4, 2, opt[0], opt[1], opt[2], ["must not 表示禁止（不可以）；don't have to 表示沒有必要（可以不做）。", "句意決定是強調『禁止』還是『非必要』。"], "先判斷句子語意是『禁止』還是『不必』，方向不同。", "must not 和 don't have to 意思完全不同，不要當成同義詞互換。")
      }},
      { id: "modal-certainty", title: "情態助動詞表推測的把握程度", template({ r, mc }) {
        return mc(r, 4, 2, "選出正確：He hasn't eaten all day. He ___ be very hungry.", "must", ["may", "can", "should"], ["整天沒吃東西，說話者對「他一定很餓」有很高把握，用 must 表示高把握度的推測。", "may/might 用於較不確定的推測，把握程度較低。"], "推測把握程度高低：must（幾乎確定）> should > may/might（不確定）。", "must 在此處是表示推測，不是義務，不要和「必須」的意思搞混。")
      }}
    ] }]
  },
  u5: {
    source: "本站依課綱『名詞、代名詞、冠詞』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "名詞、代名詞與冠詞", topics: [
      { id: "countable-uncountable", title: "可數與不可數名詞", template({ r, pick, mc }) {
        const opt = pick(r, [["Can you give me some ___ about the bus schedule?", "information", ["informations", "an information", "information's"]], ["We don't have much ___ today.", "homework", ["homeworks", "a homework", "homework's"]]]);
        return mc(r, 5, 1, opt[0], opt[1], opt[2], ["information/homework 是不可數名詞，不加 -s，也不能用 a/an。", "不可數名詞要用 some/much 等量詞表達數量。"], "information, homework, advice, furniture, news 是常考不可數名詞。", "不要把中文可以說『一個、一份』的名詞直接當成英文可數名詞。")
      }},
      { id: "pronoun-case", title: "代名詞格位", template({ r, pick, mc }) {
        const opt = pick(r, [["This gift is for ___.", "him", ["he", "his", "himself"]], ["Please give the book to ___.", "her", ["she", "hers", "her's"]]]);
        return mc(r, 5, 1, opt[0], opt[1], opt[2], ["介系詞（for/to）後面的代名詞要用受格。", "受格代名詞：him, her, them, us, me。"], "介系詞或動詞後面的代名詞一律用受格。", "不要在介系詞後面用主格代名詞（he/she），要用受格。")
      }}
    ] }]
  },
  u6: {
    source: "本站依課綱『形容詞、副詞』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "形容詞與副詞", topics: [
      { id: "linking-verb-adj", title: "連綴動詞後接形容詞", template({ r, pick, mc }) {
        const opt = pick(r, [["This soup smells ___.", "delicious", ["deliciously", "delicious's", "delicion"]], ["You look ___ today. Are you okay?", "tired", ["tiredly", "tiring", "tire"]]]);
        return mc(r, 6, 1, opt[0], opt[1], opt[2], ["smell/look 是連綴動詞，後面要接形容詞描述主詞狀態，不接副詞。"], "連綴動詞（look/feel/sound/smell/taste/become/get）後面用形容詞。", "不要在連綴動詞後面加 -ly 變成副詞。")
      }},
      { id: "adverb-form", title: "副詞的規則與不規則變化", template({ r, pick, mc }) {
        const opt = pick(r, [["He drives very ___.", "fast", ["fastly", "faster than", "fasting"]], ["She finished the race ___.", "well", ["good", "goodly", "wellly"]]]);
        return mc(r, 6, 2, opt[0], opt[1], opt[2], ["fast 的副詞和形容詞同形，沒有 fastly 這個字。", "good 的副詞是不規則變化 well，不是 goodly。"], "fast/hard/late 形容詞副詞同形；good→well 是不規則變化。", "不要看到形容詞就自動加 -ly，先確認是否為不規則變化。")
      }}
    ] }]
  },
  u7: {
    source: "本站依課綱『比較級、最高級』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "比較級與最高級", topics: [
      { id: "syllable-rule", title: "依音節數決定比較級變化方式", template({ r, pick, mc }) {
        const opt = pick(r, [["This question is ___ than that one.", "more difficult", ["difficulter", "more difficulter", "difficult more"]], ["Tom is ___ than his brother.", "taller", ["more tall", "more taller", "tallest"]]]);
        return mc(r, 7, 2, opt[0], opt[1], opt[2], ["difficult 是三音節以上，比較級要用 more，不能加 -er。", "tall 是單音節，比較級直接加 -er，不用 more。"], "先數音節：短字加 -er/-est，長字用 more/most，不能兩者並用。", "不要同時用 -er 又加 more，那是雙重比較的錯誤。")
      }},
      { id: "as-as", title: "原級比較 as...as", template({ r, mc }) {
        return mc(r, 7, 2, "選出正確：This bag is as ___ as that one.", "heavy", ["heavier", "heaviest", "more heavy"], ["as...as 中間要用形容詞原級，不能用比較級或最高級。"], "as...as 之間固定放原級，不是比較級。", "不要在 as...as 中間放比較級形式（heavier）。")
      }}
    ] }]
  },
  u8: {
    source: "本站依課綱『介系詞』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "介系詞", topics: [
      { id: "time-prep", title: "時間介系詞 in/on/at", template({ r, pick, mc }) {
        const opt = pick(r, [["We will meet at 9 a.m. ___ Monday.", "on", ["at", "in", "to"]], ["He was born ___ 2010.", "in", ["on", "at", "to"]]]);
        return mc(r, 8, 1, opt[0], opt[1], opt[2], ["精確時刻用 at；星期用 on；年份用 in。"], "時間介系詞依範圍大小：in（年月）> on（日期星期）> at（時刻）。", "不要憑中文『在』的語感亂選，要依時間單位大小固定搭配。")
      }},
      { id: "arrive-reach", title: "arrive 與 reach 的介系詞用法", template({ r, pick, mc }) {
        const opt = pick(r, [["The train will ___ Taipei Station at 9 a.m.", "reach", ["arrive", "arrive to", "reach to"]], ["We will ___ at the airport in an hour.", "arrive", ["reach", "reach to", "arrived to"]]]);
        return mc(r, 8, 2, opt[0], opt[1], opt[2], ["reach 後面直接接地點，不加介系詞；arrive 後面要加 at/in。"], "reach + 地點（不加介系詞）；arrive at/in + 地點。", "不要在 reach 後面多加介系詞，也不要漏掉 arrive 後面的 at/in。")
      }}
    ] }]
  },
  u9: {
    source: "本站依課綱『連接詞與子句』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "連接詞與子句", topics: [
      { id: "no-double-marking", title: "因果、轉折連接詞不可重複標記", template({ r, pick, mc }) {
        const opt = pick(r, [["___ it was raining, we still went hiking.", "Although", ["Because", "So", "Although...but"]], ["It rained hard, ___ we stayed home.", "so", ["because", "although", "so...because"]]]);
        return mc(r, 9, 2, opt[0], opt[1], opt[2], ["although 已表達讓步，後面主要子句不能再加 but；so 表示結果，前面不能再加 because 重複標記因果。"], "because/so、although/but 不可在同一句中重複使用。", "中文『雖然...但是』『因為...所以』直翻成英文會變成重複標記的錯誤。")
      }},
      { id: "coordinating-vs-subordinating", title: "對等連接詞與從屬連接詞的選用", template({ r, pick, mc }) {
        const opt = pick(r, [["I like tea, ___ my sister likes coffee.", "but", ["although", "because", "when"]], ["___ she was tired, she kept working.", "Although", ["But", "So", "And"]]]);
        return mc(r, 9, 1, opt[0], opt[1], opt[2], ["兩個地位相等的句子用對等連接詞 but 連接；表達讓步關係要用從屬連接詞 although。"], "地位相等用對等連接詞；附屬說明原因/讓步/時間用從屬連接詞。", "although 是從屬連接詞，不能像 but 一樣直接放在兩個對等子句中間且不需要提前。")
      }}
    ] }]
  },
  u10: {
    source: "本站依課綱『動名詞與不定詞』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "動名詞與不定詞", topics: [
      { id: "verb-gerund-infinitive", title: "固定接動名詞或不定詞的動詞", template({ r, pick, mc }) {
        const opt = pick(r, [["She enjoys ___ (read) mystery novels.", "reading", ["to read", "read", "reads"]], ["They decided ___ (leave) early.", "to leave", ["leaving", "leave", "left"]]]);
        return mc(r, 10, 1, opt[0], opt[1], opt[2], ["enjoy 固定接動名詞；decide 固定接不定詞，需分類記憶。"], "enjoy/finish/mind/avoid 接動名詞；want/decide/plan/hope 接不定詞。", "不要用邏輯推理猜測，這類動詞的搭配需要分組記憶。")
      }},
      { id: "preposition-gerund", title: "介系詞後接動名詞", template({ r, mc }) {
        return mc(r, 10, 2, "選出正確：He is interested in ___ (learn) Japanese.", "learning", ["to learn", "learn", "learns"], ["介系詞 in 後面接動詞時，一律要用動名詞，不能用不定詞。"], "介系詞後面一律接動名詞，這是常被忽略卻很常考的規則。", "不要在介系詞後面用 to V，只能用 V-ing。")
      }}
    ] }]
  },
  u11: {
    source: "本站依課綱『被動語態』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "被動語態", topics: [
      { id: "passive-tense", title: "依時態選擇正確的被動式", template({ r, pick, mc }) {
        const opt = pick(r, [["This bridge ___ (build) in 1930.", "was built", ["is built", "has built", "built"]], ["English ___ (speak) in many countries.", "is spoken", ["speaks", "was spoken", "spoken"]]]);
        return mc(r, 11, 2, opt[0], opt[1], opt[2], ["依主動句的時態選對應的 be 動詞形式：過去事實用 was/were + p.p.，現在事實用 is/am/are + p.p.。"], "被動語態的時態由 be 動詞決定，過去分詞形態不變。", "不要忘記 be 動詞，只把動詞改成過去分詞是不完整的被動式。")
      }},
      { id: "intransitive-no-passive", title: "不及物動詞沒有被動式", template({ r, mc }) {
        return mc(r, 11, 3, "選出正確：The accident ___ yesterday.", "happened", ["was happened", "is happened", "happens"], ["happen 是不及物動詞，沒有受詞可轉換成被動主詞，因此沒有被動形式。"], "happen/arrive/disappear 等不及物動詞不能用被動語態。", "不要看到過去的事件就直覺用被動式，先確認動詞是否為及物動詞。")
      }}
    ] }]
  },
  u12: {
    source: "本站依課綱『問句、否定句、附加問句』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "問句、否定句與附加問句", topics: [
      { id: "tag-question", title: "附加問句的極性與助動詞", template({ r, pick, mc }) {
        const opt = pick(r, [["Your sister plays the piano very well, ___?", "doesn't she", ["does she", "isn't she", "doesn't he"]], ["You haven't finished your homework, ___?", "have you", ["haven't you", "did you", "don't you"]]]);
        return mc(r, 12, 2, opt[0], opt[1], opt[2], ["前面是肯定句，附加問句要用否定；一般動詞句要借助 do/does/did，助動詞句沿用原本的助動詞。"], "前肯定後否定、前否定後肯定，且助動詞要與主要子句一致。", "不要固定用 do/does/did，要先看主要子句本身有沒有 be 動詞或助動詞。")
      }},
      { id: "do-support", title: "一般動詞問句的 do/does/did", template({ r, mc }) {
        return mc(r, 12, 1, "選出正確：___ she like coffee?", "Does", ["Is", "Do", "Did"], ["主詞 she 是第三人稱單數且為現在式一般動詞句，問句需借助 Does。"], "一般動詞現在式問句：第三人稱單數用 Does，其餘用 Do。", "不要用 Is 開頭問一般動詞句，Is 只用於 be 動詞句。")
      }}
    ] }]
  },
  u13: {
    source: "本站依課綱『關係子句』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "關係子句", topics: [
      { id: "relative-pronoun-choice", title: "依先行詞選擇關係代名詞", template({ r, pick, mc }) {
        const opt = pick(r, [["The woman ___ called you yesterday is my aunt.", "who", ["which", "whose", "what"]], ["This is the book ___ I told you about.", "that", ["who", "whose", "what"]]]);
        return mc(r, 13, 2, opt[0], opt[1], opt[2], ["先行詞是人用 who，先行詞是事物可用 that/which。"], "先確認先行詞是人還是事物，再選對應的關係代名詞。", "不要用 what 當關係代名詞連接先行詞，what 本身已包含先行詞。")
      }},
      { id: "non-defining-clause", title: "非限定用法不用 that", template({ r, mc }) {
        return mc(r, 13, 3, "選出正確：Mr. Lin, ___ teaches math, is very patient.", "who", ["that", "whose", "what"], ["逗號隔開的非限定用法不能用 that，須用 who/which。"], "看到逗號隔開的補充說明子句，直接排除 that。", "that 只能用在限定用法（無逗號），非限定用法要用 who/which。")
      }}
    ] }]
  },
  u14: {
    source: "本站依課綱『假設語氣』文法指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "假設語氣", topics: [
      { id: "present-unreal", title: "與現在事實相反的假設", template({ r, mc }) {
        return mc(r, 14, 2, "選出正確：If I ___ (be) a bird, I would fly to you.", "were", ["am", "was", "be"], ["與現在事實相反的假設語氣，be 動詞不論主詞為何一律用 were。"], "If I were you 是固定用法，記住 be 動詞用 were。", "不要依主詞單複數選 was/am，假設語氣的 be 動詞固定用 were。")
      }},
      { id: "past-unreal", title: "與過去事實相反的假設", template({ r, mc }) {
        return mc(r, 14, 3, "選出正確：If she had studied harder, she ___ (pass) the exam.", "would have passed", ["would pass", "passed", "will pass"], ["與過去事實相反的假設，主要子句用 would/could + have + 過去分詞。"], "與過去事實相反：if 子句 had + p.p.，主要子句 would have + p.p.。", "不要只退一格用過去式，過去事實相反要退兩格用過去完成式結構。")
      }}
    ] }]
  },
  u15: {
    source: "本站依課綱『閱讀理解：主旨大意』技巧指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "閱讀理解：主旨與大意", topics: [
      { id: "main-idea-scope", title: "主旨選項的涵蓋範圍檢查", template({ r, mc }) {
        return mc(r, 15, 2, "一篇文章介紹三種常見的省電方法，並在結尾呼籲讀者從生活小事開始節能。這篇文章最可能的主旨是什麼？", "如何在日常生活中節約用電", ["某一種特定家電的省電技巧", "作者小時候的省電經驗", "電費帳單的計算方式"], ["主旨要能涵蓋全文三種方法與結尾呼籲，而不是只對應其中一個細節。"], "主旨選項要能涵蓋全文，不能只對應某一段細節。", "不要選只涵蓋文章一小部分（如單一家電）的選項。")
      }},
      { id: "best-title", title: "最佳標題的選擇", template({ r, mc }) {
        return mc(r, 15, 1, "一篇文章開頭寫『Have you ever wondered why cats sleep so much?』，全文接著解釋貓咪睡眠的原因與作用。這篇文章最合適的標題是什麼？", "Why Do Cats Sleep So Much?", ["My Favorite Cat", "How to Take Care of Pets", "The History of Cats"], ["開頭問句點出主題方向，全文內容也圍繞這個主題展開，因此標題應直接對應「貓咪為何嗜睡」。"], "標題要對應開頭點出的主題，並能涵蓋全文內容。", "不要選只和文章有點關聯、但沒有涵蓋核心主題的標題。")
      }}
    ] }]
  },
  u16: {
    source: "本站依課綱『閱讀理解：推論與代名詞指涉』技巧指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "閱讀理解：推論、語氣與代名詞指涉", topics: [
      { id: "inference-evidence", title: "推論題需要文中線索支持", template({ r, mc }) {
        return mc(r, 16, 3, "文中寫道：『Sales dropped sharply after the price increase, so the company decided to lower it back.』根據這句話，最合理的推論是什麼？", "漲價導致銷售下滑，促使公司調降價格", ["公司一開始就打算漲價又降價來吸引話題", "這家公司的產品品質有嚴重問題", "消費者其實並不在意價格變化"], ["漲價後銷售下滑、隨後決定調降，兩個線索合理連結出「漲價造成銷售下滑」的推論。"], "推論要能在文中找到至少一處具體線索支持。", "不要選需要額外背景知識、或與文中因果關係相反的選項。")
      }},
      { id: "pronoun-reference", title: "代名詞指涉判讀", template({ r, mc }) {
        return mc(r, 16, 2, "句子：『Sam left his phone at the restaurant, so he had to go back to get it.』句中 it 指的是什麼？", "his phone（山姆的手機）", ["the restaurant（餐廳）", "Sam（山姆本人）", "the way back（回去的路）"], ["it 是單數代名詞，往前找數與詞性一致、代入語意通順的名詞：his phone。"], "先看代名詞單複數，再代入前面的名詞確認語意是否通順。", "不要選數量不一致（如 the restaurant 用 there 才對）或代入後語意不通的名詞。")
      }}
    ] }]
  },
  u17: {
    source: "本站依教育部國中小基本 2000 字表『日常生活與學校』主題自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "核心字彙：日常生活與學校", topics: [
      { id: "borrow-lend", title: "borrow 與 lend 的方向", template({ r, pick, mc }) {
        const opt = pick(r, [["Could I ___ your dictionary? I forgot to bring mine.", "borrow", ["lend", "borrowed", "lending"]], ["Can you ___ me some money? I'll pay you back tomorrow.", "lend", ["borrow", "lent", "borrowing"]]]);
        return mc(r, 17, 1, opt[0], opt[1], opt[2], ["borrow 是向別人借入，lend 是把東西借出去給別人，方向相反。"], "borrow from（跟...借）、lend to（借給...），方向不要搞反。", "不要把 borrow 和 lend 當成同義詞隨意互換。")
      }},
      { id: "bring-take", title: "bring 與 take 的方向", template({ r, pick, mc }) {
        const opt = pick(r, [["Don't forget to ___ your umbrella when you leave home.", "take", ["bring", "took", "bringing"]], ["Could you ___ some snacks when you come to my house?", "bring", ["take", "brought", "taking"]]]);
        return mc(r, 17, 1, opt[0], opt[1], opt[2], ["take 是把東西從說話者所在處帶往別處；bring 是把東西帶到說話者所在或即將所在之處。"], "以說話者的位置為基準：帶過來用 bring，帶過去用 take。", "不要把 bring 和 take 當成同義詞，方向是相反的。")
      }}
    ] }]
  },
  u18: {
    source: "本站依教育部國中小基本 2000 字表『情緒與個性』主題自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "核心字彙：情緒、個性與人際", topics: [
      { id: "ed-ing-emotion", title: "-ed 與 -ing 情緒形容詞方向", template({ r, pick, mc }) {
        const opt = pick(r, [["After hearing the confusing directions, I felt totally ___.", "confused", ["confusing", "confuse", "confuses"]], ["The movie was so ___ that I almost fell asleep.", "boring", ["bored", "bore", "bores"]]]);
        return mc(r, 18, 2, opt[0], opt[1], opt[2], ["人（感受者）用 -ed 形容詞；事物或情況（引發感受的原因）用 -ing 形容詞。"], "先判斷主詞是感受情緒的人還是引發情緒的事物。", "不要把 -ed 和 -ing 情緒形容詞的方向弄反。")
      }},
      { id: "personality-trait", title: "從行為描述推論個性特質", template({ r, mc }) {
        return mc(r, 18, 2, "Amy always shares her lunch with classmates who forget to bring food. Amy 最可能是哪一種個性？", "generous（慷慨的）", ["stingy（小氣的）", "shy（害羞的）", "stubborn（固執的）"], ["樂於分享食物給別人，是慷慨（generous）這項特質最直接的行為線索。"], "先找人物行為的具體描述，再對應到符合的個性形容詞。", "不要選與行為描述方向相反或無關的個性形容詞。")
      }}
    ] }]
  },
  u19: {
    source: "本站依教育部國中小基本 2000 字表『科技、環境與健康』主題自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "核心字彙：科技、環境與健康", topics: [
      { id: "affect-effect", title: "affect（動詞）與 effect（名詞）", template({ r, pick, mc }) {
        const opt = pick(r, [["Air pollution can seriously ___ people's health.", "affect", ["effect", "affects's", "effected"]], ["Doctors are studying the ___ of the new medicine.", "effect", ["affect", "affects", "affecting"]]]);
        return mc(r, 19, 2, opt[0], opt[1], opt[2], ["句子需要動詞就用 affect，需要名詞就用 effect，先看句子結構。"], "affect 是動詞，effect 通常是名詞，先判斷句子需要哪種詞性。", "不要把 affect 和 effect 當成同一個字的不同拼法。")
      }},
      { id: "reduce-reuse-recycle", title: "環保三動詞的先後順序", template({ r, mc }) {
        return mc(r, 19, 1, "環保口號『reduce, reuse, recycle』依處理優先順序，第一步應該做的是下列何者？", "reduce（從源頭減少使用）", ["reuse（重複使用）", "recycle（回收再製）", "replace（替換）"], ["三個環保動詞依優先順序排列：先從源頭減少使用，其次重複使用，最後才是回收再製。"], "reduce（減少）→ reuse（重複使用）→ recycle（回收），依此順序記憶。", "不要把回收（recycle）誤認為是環保行動的第一步。")
      }}
    ] }]
  },
  u20: {
    source: "本站依課綱『字彙猜測與構詞』技巧指標自行拆解，非特定出版社逐字分類。",
    sections: [{ title: "字彙猜測技巧與構詞法", topics: [
      { id: "prefix-negative", title: "否定字首猜字義", template({ r, pick, mc }) {
        const opt = pick(r, [["The new policy was unpopular, but the government refused to withdraw it. unpopular 最可能的意思是？", "不受歡迎的", ["非常受歡迎的", "免費的", "違法的"]], ["He felt uncomfortable in the crowded room. uncomfortable 最可能的意思是？", "不舒服的", ["非常舒服的", "興奮的", "無聊的"]]]);
        return mc(r, 20, 2, opt[0], opt[1], opt[2], ["un- 是否定字首，加在原本字義前面表示相反。"], "un-/in-/dis- 開頭的字，先假設是原本字義的相反。", "不要忽略字首直接用中文語感猜測，字首通常決定正負方向。")
      }},
      { id: "suffix-noun", title: "名詞化字尾判斷詞性", template({ r, mc }) {
        return mc(r, 20, 2, "句子：Good communication is important in every relationship. 根據字尾 -tion，communication 最可能的詞性是？", "名詞", ["動詞", "形容詞", "副詞"], ["-tion 是常見的名詞化字尾，communicate（動詞）加上 -tion 變成名詞 communication。"], "-tion/-ment/-ness 結尾通常是名詞，可幫助判斷這個字在句中的角色。", "不要只看字根意思就判斷詞性，字尾往往才是決定詞性的關鍵線索。")
      }}
    ] }]
  }
};
