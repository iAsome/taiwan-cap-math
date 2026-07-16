const UNIT_ID = "ENG_R4_U34";
const DIFFICULTIES = ["foundation", "foundation", "foundation", "standard", "standard", "standard", "standard", "advanced", "advanced", "advanced", "transfer", "transfer"];

function lecture(skill) {
  const number = skill.id.slice(-3);
  return {
    id: `ENG_R4_L_${number}`,
    skillId: skill.id,
    objectives: skill.objectives,
    sections: skill.sections.map(([title, content], index) => ({ id: `${UNIT_ID}_${skill.id}_SEC_${index + 1}`, title, content })),
    workedExamples: skill.examples.map(([prompt, steps, answer, why], index) => ({ id: `${UNIT_ID}_${skill.id}_EX_${index + 1}`, prompt, steps, answer, why })),
    misconceptions: skill.misconceptions.map(([belief, whyWrong, correction]) => ({ belief, whyWrong, correction })),
    checks: skill.checks.map(([prompt, answer, reason]) => ({ prompt, answer, reason })),
    assets: [],
  };
}

function question(skill, item, index) {
  const [stem, options, answerIndex, correctReason, wrongReasons, representationType, operation, misconception] = item;
  const correct = options[answerIndex];
  let wrongIndex = 0;
  return {
    id: `ENG_R4_Q_${skill.id.slice(-3)}_${String(index + 1).padStart(2, "0")}`,
    skillId: skill.id,
    stem,
    options,
    answerIndex,
    reasons: options.map((option, optionIndex) => optionIndex === answerIndex
      ? `${option}：${correctReason}`
      : `${option}：${wrongReasons[wrongIndex++]}`),
    reviews: [
      `先遮住選項，依「${skill.evidence}」可推出 ${correct}；再核對句中每個線索，答案索引一致。`,
      `把四個選項逐一放回原文，只有 ${correct} 能同時滿足句法與全文意思；另外三項各有列明的衝突，沒有第二個合理答案。`,
    ],
    difficulty: DIFFICULTIES[index],
    cognitiveProcess: [skill.process, operation],
    representationType,
    misconceptionTargets: [misconception],
  };
}

const SKILLS = [
  {
    id: "ENG_R4_S231",
    process: "infer-required-part-of-speech",
    evidence: "空格左右的功能位置",
    objectives: ["先找空格前後的功能字，再判斷缺少的詞性。", "分開檢查句法位置與整句意思，不用只靠中文翻譯猜答案。", "能說明其餘三項為何無法放入同一位置。"],
    sections: [
      ["從位置開始", "克漏空格不是孤立的洞。先看前一字與後一字：冠詞後、名詞前常需要形容詞；主詞後常需要動詞；介系詞後常接名詞或 V-ing。先決定功能，才看選項。"],
      ["畫出最小骨架", "把長句縮成主詞、動詞與必要受詞。例如 The young cook works carefully 可縮成 cook works；若空格在 works 後，便檢查是否修飾動作。這一步能排除字根相同但詞性不同的選項。"],
      ["句法與語意都要過", "位置只告訴你需要哪一類字，最後仍要放回整句讀一次。The soup smells good 的 good 描述湯的狀態；carefully 則修飾動作。兩道檢查缺一不可。"],
      ["四步作答", "一圈功能字，二標主詞與動詞，三預測詞性，四逐項代入。遇到不熟的字時，仍可利用 a、to、be、very 等可見線索縮小範圍。"],
    ],
    examples: [
      ["The ___ dog waited by the door. (quiet / quietly / quietness)", ["The 後已有空格，dog 是名詞。", "空格要直接描述 dog。", "選能放在名詞前的形容詞。"], "quiet", "quiet 放在 dog 前描述狗；quietly 通常修飾動作。"],
      ["Mia spoke ___. (clear / clearly / clearness)", ["spoke 已是完整動詞。", "空格說明說話的方式。", "選修飾動詞的副詞。"], "clearly", "clearly 回答『怎麼說』，功能正確。"],
      ["We plan to ___ early. (leave / left / leaving)", ["plan to 後看 to 的功能。", "這裡的 to 接動詞原形。", "選 leave。"], "leave", "to leave 組成正確結構；left 與 leaving 都不能直接接在此處。"],
    ],
    misconceptions: [
      ["看到同字根就選最熟的字。", "字根接近不等於句法功能相同。", "先說出空格需要名詞、動詞、形容詞或副詞，再選字形。"],
      ["中文翻起來差不多就都可以。", "英文位置有固定功能限制。", "把選項逐一代入並檢查左右相接方式。"],
      ["be 後一定接副詞。", "be 常連接主詞與狀態，後面常用形容詞。", "先判斷 be 是連綴功能還是進行式的一部分。"],
      ["to 後一定接名詞。", "to 可能是介系詞，也可能是不定詞標記。", "依前面的搭配判斷 to 後要名詞、V-ing 或動詞原形。"],
    ],
    checks: [
      ["A ___ train arrived. 空格最可能需要哪一類字？", "形容詞", "空格位於冠詞與名詞 train 之間，用來描述 train。"],
      ["The child smiled happily. happily 修飾什麼？", "smiled", "它回答孩子怎麼笑，修飾動作。"],
      ["can 後的主要動詞應用哪種形式？", "動詞原形", "情態動詞 can 後直接接動詞原形。"],
    ],
    questions: [
      ["The ___ cat slept under the chair.", ["sleep", "sleepy", "sleepily", "sleeping"], 1, "位於 the 與名詞 cat 之間，以形容詞描述貓。", ["動詞原形不能直接描述 cat。", "副詞不能放在此處直接修飾名詞。", "現在分詞會把結構改成另一種關係，與本句要表達的狀態不同。"], "single-sentence-cloze", "use-article-noun-frame", "choose-familiar-root"],
      ["Ben answered the question ___.", ["careful", "carefully", "care", "caring"], 1, "完整動詞 answered 後需要副詞說明回答方式。", ["形容詞不能直接修飾 answered。", "名詞 care 不能表示回答的方式。", "caring 會表示關心，既不合位置也不合意思。"], "single-sentence-cloze", "identify-adverb-slot", "confuse-adjective-adverb"],
      ["Our class needs more ___ for the show.", ["practice", "practices", "practiced", "practicing"], 0, "more 後在此需要不可數名詞 practice，表示更多練習。", ["複數形式在此把 practice 當可數活動，與句意不合。", "過去式不能作 needs 的受詞。", "V-ing 會著重正在做的動作，與 more 後所需名詞概念不同。"], "single-sentence-cloze", "identify-noun-object", "treat-every-form-as-noun"],
      ["The soup smells ___.", ["well", "good", "goodness", "betterly"], 1, "smells 在此連接 soup 與其狀態，後接形容詞 good。", ["well 常作副詞；本句不是說聞的動作做得好。", "名詞 goodness 不能直接作狀態補語。", "betterly 不是正確英文字形。"], "linking-verb-cloze", "distinguish-state-from-manner", "use-adverb-after-linking-verb"],
      ["Please walk ___ on the wet floor.", ["slow", "slowly", "slowness", "slower"], 1, "空格修飾 walk 的方式，應用副詞 slowly。", ["形容詞 slow 在此不能直接修飾 walk。", "名詞 slowness 不能表示走路方式。", "比較級 slower 需要明確比較對象或比較語境。"], "notice-cloze", "modify-action-with-adverb", "select-adjective-for-action"],
      ["Jay hopes to ___ the team next year.", ["joined", "joins", "join", "joining"], 2, "hopes to 後接動詞原形 join。", ["過去式 joined 不能接在不定詞標記 to 後。", "第三人稱單數 joins 不能接在 to 後。", "joining 不能直接接在 hopes to 後。"], "future-plan-cloze", "use-infinitive-base-form", "ignore-to-marker"],
      ["A message from the school was very ___.", ["help", "helpful", "helpfully", "helped"], 1, "very 修飾形容詞 helpful，整體描述 message。", ["動詞或名詞 help 不能被 very 這樣修飾並作補語。", "副詞 helpfully 不能描述名詞 message 的狀態。", "過去式 helped 不能在此表示訊息有幫助。"], "message-cloze", "use-degree-word-before-adjective", "misread-very-slot"],
      ["Before ___ the room, Kim turned off the light.", ["leave", "left", "leaving", "leaves"], 2, "before 在此作介系詞，後接 V-ing leaving。", ["動詞原形不能直接接在介系詞 before 後。", "過去式 left 不能直接放入這個縮短結構。", "第三人稱形式 leaves 沒有自己的主詞。"], "reduced-time-clause", "recognize-preposition-before-gerund", "assume-before-takes-past"],
      ["The players were ___ after the long game.", ["tire", "tired", "tiring", "tiredly"], 1, "tired 描述 players 的感受狀態。", ["動詞原形 tire 不能直接作 were 的補語。", "tiring 表示造成疲累，會把 players 說成令人疲累。", "tiredly 不是本句需要的形容詞補語。"], "state-description-cloze", "choose-ed-feeling-adjective", "confuse-cause-and-feeling"],
      ["Eva gave a ___ answer and sat down.", ["short", "shortly", "shorten", "shortness"], 0, "short 位於冠詞 a 與名詞 answer 之間，作形容詞。", ["副詞 shortly 不能直接描述 answer。", "動詞 shorten 不能置於名詞前完成此結構。", "名詞 shortness 不能再直接修飾 answer。"], "dialogue-narrative-cloze", "use-adjective-inside-noun-phrase", "choose-derived-noun"],
      ["The sign asks visitors to keep the door ___.", ["close", "closed", "closely", "closing"], 1, "keep 加受詞後以 closed 描述門維持關閉的狀態。", ["close 在此會被讀成動詞原形，無法直接作狀態補語。", "closely 表示緊密地，不能說明門的開關狀態。", "closing 表示正在關上，與維持結果狀態不同。"], "public-sign-cloze", "identify-object-complement", "ignore-result-state"],
      ["The new plan may ___ travel safer at night.", ["made", "making", "make", "makes"], 2, "情態動詞 may 後接原形 make。", ["過去式 made 不能接在 may 後。", "V-ing 不能直接接在 may 後。", "第三人稱形式 makes 不能接在 may 後。"], "policy-cloze", "use-modal-base-form", "change-verb-after-modal"],
    ],
  },
  {
    id: "ENG_R4_S232",
    process: "select-tense-from-time-evidence",
    evidence: "時間詞與事件先後",
    objectives: ["辨認 now、every、yesterday、since 等時態線索。", "同時利用時間詞、助動詞與上下文決定動詞形式。", "能排除只合單句卻與段落時間衝突的選項。"],
    sections: [
      ["先建立時間線", "看到空格先圈時間證據：every day 指習慣，now 指目前進行，yesterday 指已完成過去，since 加起點常與現在完成式同行。不要先看四個動詞外形。"],
      ["助動詞也會鎖定形式", "did 後接原形，has 或 have 後接過去分詞，be 加 V-ing 表進行。若句中已有助動詞，就先依結構決定主要動詞形式，再用語意核對。"],
      ["兩件事要排先後", "before、after、when 會連接兩個事件。敘述過去經驗時，兩邊常用過去式；若一件事在另一件事發生時正進行，則用 was 或 were 加 V-ing。"],
      ["最後讀完整段", "單句時間詞有時省略，上一句仍可能提供時間框架。答題後把前後兩句連讀，確認觀點沒有突然跳到另一個時間。"],
    ],
    examples: [
      ["Nora ___ to school by bus every day. (goes / went / is going)", ["圈 every day。", "判定為現在習慣。", "Nora 是單數第三人稱。"], "goes", "習慣加單數主詞，動詞用 goes。"],
      ["Look! The bird ___ away. (flies / flew / is flying)", ["Look 指向眼前。", "動作正在發生。", "選 is flying。"], "is flying", "目前可見的進行動作用現在進行式。"],
      ["We have lived here ___ 2022. (for / since / yesterday)", ["have lived 表狀態延續至今。", "2022 是起點。", "起點前用 since。"], "since", "since 引出開始時間，與現在完成式相配。"],
    ],
    misconceptions: [
      ["句中有 yesterday，動詞仍可用現在式。", "明確過去時間通常把事件放在已完成的過去。", "用過去式，除非句子另有特殊時間觀點。"],
      ["did 後還要用過去式。", "did 已承擔過去標記。", "did 後的主要動詞回到原形。"],
      ["since 和 for 可以任意交換。", "since 接起點，for 接一段時間。", "先問後面是『何時開始』還是『多久』。"],
      ["看到 now 就只看最近的動詞。", "now 可能控制整個子句。", "確認主詞、be 與 V-ing 是否形成完整進行式。"],
    ],
    checks: [
      ["last night 最常指向哪個時間？", "過去", "它表示已結束的昨晚。"],
      ["has 後的主要動詞用什麼形式？", "過去分詞", "has 與過去分詞組成現在完成式。"],
      ["for three years 表示起點還是時段？", "時段", "for 後接持續多久。"],
    ],
    questions: [
      ["Leo usually ___ his bike to school.", ["rides", "rode", "is riding", "has ridden"], 0, "usually 表現在的固定習慣，Leo 為單數，故用 rides。", ["rode 是過去式，句中沒有過去時間框架。", "is riding 表目前正在騎，與 usually 的習慣不同。", "has ridden 強調至今的經驗或結果，非單純習慣。"], "habit-cloze", "match-frequency-to-simple-present", "choose-progressive-for-habit"],
      ["We ___ the movie last Saturday.", ["see", "saw", "have seen", "are seeing"], 1, "last Saturday 是結束的過去時間，see 用過去式 saw。", ["原形 see 缺少過去標記。", "現在完成式不與這個明確結束的過去時間並用。", "現在進行式與 last Saturday 衝突。"], "past-event-cloze", "match-finished-past-time", "use-present-perfect-with-finished-time"],
      ["Listen! Someone ___ at the door.", ["knocks", "knocked", "is knocking", "has knocked"], 2, "Listen 指向此刻正在聽見的動作，使用 is knocking。", ["一般現在式會表習慣，不是眼前聲音。", "過去式表示動作已在過去結束。", "現在完成式著重結果，不如進行式符合持續聲音。"], "live-situation-cloze", "use-present-progressive", "ignore-live-cue"],
      ["Amy has studied English ___ three years.", ["since", "for", "ago", "last"], 1, "three years 是一段時間，現在完成式後用 for。", ["since 後要接起點，不接時段。", "ago 通常與過去式並用，不能接在此處。", "last 不能單獨放在 three years 前形成所需介系詞片語。"], "duration-cloze", "distinguish-for-from-since", "swap-since-and-for"],
      ["Tom ___ dinner when the phone rang.", ["cooks", "was cooking", "has cooked", "will cook"], 1, "電話響起時，做飯是正在進行的過去背景，故用 was cooking。", ["一般現在式與 rang 的過去框架不合。", "現在完成式連到現在，沒有呈現被打斷的背景。", "未來式與過去的 rang 衝突。"], "interrupted-action-cloze", "combine-past-progressive-and-past", "make-both-events-simple"],
      ["Did you ___ the window before you left?", ["closed", "close", "closing", "closes"], 1, "助動詞 Did 已標示過去，後面接原形 close。", ["closed 重複加入過去標記。", "closing 不能直接接在 Did you 後。", "closes 是單數第三人稱形式，不能接在 did 後。"], "past-question-cloze", "restore-base-form-after-did", "double-mark-past"],
      ["The shop ___ at nine tomorrow morning.", ["opened", "opens", "is open yesterday", "has opened"], 1, "時刻表式的固定安排可用一般現在式 opens 表未來。", ["opened 是過去式，與 tomorrow 衝突。", "is open yesterday 同時混入現在與過去線索。", "has opened 表已經開門，與 tomorrow 尚未到來衝突。"], "schedule-cloze", "use-simple-present-for-timetable", "assume-all-future-needs-will"],
      ["By the time we arrived, the meeting ___.", ["starts", "had started", "is starting", "will start"], 1, "會議開始早於我們抵達，had started 清楚標出較早的過去事件。", ["一般現在式跳離 arrived 的過去框架。", "現在進行式與過去抵達不合。", "未來式把開始放到抵達之後，顛倒先後。"], "event-order-cloze", "mark-earlier-past-event", "ignore-by-the-time"],
      ["Kim ___ in this town since she was six.", ["lives", "lived", "has lived", "is living yesterday"], 2, "since 引出過去起點，居住延續至今，使用 has lived。", ["一般現在式沒有表出從過去延續。", "過去式可能暗示現在已不住這裡。", "is living yesterday 結構與時間都衝突。"], "life-duration-cloze", "connect-past-start-to-present", "use-simple-past-for-continuing-state"],
      ["At this time next week, we ___ on the beach.", ["relaxed", "relax", "will be relaxing", "have relaxed"], 2, "next week 的特定時刻正在進行，使用 will be relaxing。", ["過去式與 next week 衝突。", "原形缺少未來標記。", "現在完成式不表示未來某時正在進行。"], "future-viewpoint-cloze", "select-future-progressive", "ignore-future-reference-point"],
      ["The notice was posted on Monday. Two days later, the school ___ the trip.", ["cancels", "canceled", "has canceled", "will cancel yesterday"], 1, "上一句建立過去框架，two days later 仍是該過去敘事中的事件。", ["一般現在式會突然跳出過去敘事。", "現在完成式把事件連到現在，弱化明確敘事順序。", "will 與 yesterday 不能形成一致時間。"], "two-sentence-timeline", "carry-past-frame-across-sentences", "reset-tense-at-new-sentence"],
      ["Jay had never seen snow before he ___ to the north.", ["moves", "moved", "has moved", "moving"], 1, "before 引出的抵達事件是過去參考點，使用 moved；had seen 表更早經驗。", ["一般現在式與 had never seen 的敘事框架不合。", "現在完成式不接在這個已完成過去敘事中。", "moving 缺少限定動詞，子句不完整。"], "past-perfect-context", "align-reference-event-in-past", "make-both-clauses-perfect"],
    ],
  },
  {
    id: "ENG_R4_S233",
    process: "select-word-by-collocation-and-meaning",
    evidence: "固定搭配與情境語意",
    objectives: ["辨認常見動詞、介系詞與形容詞搭配。", "用前後情境確認字詞意思，不只看單一中文翻譯。", "能分辨句法可行但語意不合的干擾項。"],
    sections: [
      ["先找搭配邊界", "有些字常一起出現，例如 wait for、be good at、take care of。先看空格是否位在固定搭配中，再檢查這個搭配是否符合情境。"],
      ["讓動詞和受詞互相檢查", "同一個動詞不能任意帶所有名詞。People make a plan but do homework。看到空格後的受詞時，回想它常和哪個動詞同行。"],
      ["語意要能推動下一句", "克漏答案不只要讓當句通順，也要能解釋下一個事件。若下一句說大家帶傘，前句最可能提到 rain，而不是 sunshine。"],
      ["不熟字時的保守策略", "先排除介系詞不合、受詞搭配不合或正負語意相反的選項。剩下兩項再帶回全文，看哪一項能與因果、轉折或目的連起來。"],
    ],
    examples: [
      ["Please wait ___ me at the gate. (for / of / from)", ["辨認 wait 的搭配。", "要表『等某人』用 wait for。", "放回句子確認。"], "for", "wait for someone 是正確搭配。"],
      ["Ben is good ___ drawing. (at / on / with)", ["good 後接能力領域。", "常用 be good at。", "drawing 可接在 at 後。"], "at", "good at 表擅長。"],
      ["The road was wet, so Mia walked ___. (carefully / loudly / cheaply)", ["wet road 提示可能滑倒。", "需要描述走路方式。", "選 carefully。"], "carefully", "小心走能回應濕滑道路，另外兩項無法解釋情境。"],
    ],
    misconceptions: [
      ["介系詞中文意思接近就能互換。", "搭配往往由英語用法決定。", "連同前面的動詞或形容詞一起記。"],
      ["句法正確的選項一定正確。", "多個選項可能詞性相同，但情境只支持一個意思。", "讀到下一句再決定。"],
      ["只翻空格所在的一句。", "段落線索可能在前後句。", "答案必須解釋整段事件。"],
      ["長字一定比較正式、比較可能正確。", "字長與正確性無關。", "只依搭配、句法與語意證據作答。"],
    ],
    checks: [
      ["be afraid 後常用哪個介系詞？", "of", "be afraid of 表害怕某人或某事。"],
      ["make homework 是否為常見搭配？", "不是", "通常說 do homework。"],
      ["前句說天色變黑、後句拿傘，空格語意應和什麼有關？", "下雨", "兩個線索共同指向雨。"],
    ],
    questions: [
      ["Please take care ___ your little brother.", ["at", "of", "to", "by"], 1, "take care of 表照顧。", ["take care at 不能帶出被照顧的人。", "take care to 後通常接動詞，不接此名詞片語。", "take care by 不是本句所需搭配。"], "collocation-cloze", "complete-take-care-of", "translate-preposition-alone"],
      ["Nora is interested ___ old maps.", ["on", "at", "in", "for"], 2, "be interested in 表對某事有興趣。", ["interested on 不是這個形容詞的搭配。", "interested at 不能表興趣的對象。", "interested for 不是本句所需搭配。"], "collocation-cloze", "complete-interested-in", "swap-common-prepositions"],
      ["The baby was afraid ___ the loud dog.", ["of", "from", "with", "about"], 0, "be afraid of 表害怕某對象。", ["from 會表示來源，不能完成 afraid 的搭配。", "with 不能引出害怕的對象。", "about 偏向對事情擔心，與眼前的狗不如 of 直接。"], "collocation-cloze", "complete-afraid-of", "choose-semantic-neighbor"],
      ["We need to ___ a choice before noon.", ["do", "make", "take", "bring"], 1, "make a choice 是作出選擇的常見搭配。", ["do a choice 不是自然搭配。", "take a choice 在本題用法中不自然。", "bring a choice 不能表示作決定。"], "verb-noun-collocation", "match-make-with-choice", "use-general-action-verb"],
      ["Jay forgot to ___ his homework, so he had nothing to show.", ["do", "make", "play", "build"], 0, "do homework 是完成作業的固定搭配。", ["make homework 不是一般英語搭配。", "play homework 無法表示完成作業。", "build homework 與作業語意不合。"], "school-context-cloze", "match-do-with-homework", "translate-do-as-make"],
      ["The box is too heavy. Could you help me ___ it?", ["carry", "catch", "borrow", "grow"], 0, "carry 表搬運，能回應箱子太重。", ["catch 表抓住移動物，不能說明搬箱子。", "borrow 表借入，與重量線索無關。", "grow 表成長或種植，不能作用於搬運。"], "context-meaning-cloze", "infer-action-from-heavy-box", "ignore-object-action-fit"],
      ["The library is closed today, so please ___ the book tomorrow.", ["return", "invite", "paint", "break"], 0, "return the book 表歸還書，tomorrow 回應今日閉館。", ["invite the book 語意不成立。", "paint the book 無法回應閉館與期限。", "break the book 與圖書館要求相反。"], "notice-context-cloze", "infer-library-action", "choose-grammatical-random-verb"],
      ["The soup tastes too salty. Add some water to make it ___.", ["stronger", "lighter", "noisier", "higher"], 1, "加水會使鹹味變淡，lighter 符合目的。", ["stronger 與加水後味道變淡相反。", "noisier 描述聲音，不能描述味道。", "higher 描述位置或程度，但不表示味道變淡。"], "cause-effect-cloze", "infer-result-of-adding-water", "select-any-comparative"],
      ["Sam spoke in a low voice because the child was ___.", ["asleep", "empty", "cheap", "round"], 0, "孩子睡著時要放低音量，asleep 解釋前句。", ["empty 不能自然描述 child。", "cheap 用於價格，與音量無關。", "round 描述形狀，不能解釋低聲說話。"], "reason-cloze", "infer-state-from-quiet-action", "ignore-causal-link"],
      ["The bus was full, so we had to ___ for the next one.", ["wait", "win", "hide", "drop"], 0, "公車客滿時只能等待下一班，wait 符合情境。", ["win 與搭車沒有可見關係。", "hide 不能解決客滿問題。", "drop 不表示等待交通工具。"], "transport-context-cloze", "infer-response-to-full-bus", "choose-action-without-result-check"],
      ["The garden became dry after many hot days. Eva decided to ___ the flowers every morning.", ["water", "count", "sell", "move"], 0, "土地乾燥需要澆水，water the flowers 能改善問題。", ["count flowers 不會改善乾燥。", "sell flowers 與照顧花園的決定不合。", "move flowers 不是每天回應乾燥的合理做法。"], "two-sentence-context", "connect-problem-to-remedy", "pick-locally-possible-garden-action"],
      ["The club wanted more students to know about its show. It put a large ___ by the school gate.", ["poster", "pillow", "plate", "pocket"], 0, "張貼海報能讓更多學生知道表演。", ["pillow 是枕頭，不能公告表演。", "plate 是盤子，無法有效傳遞活動資訊。", "pocket 是口袋，不能放在校門口作公告。"], "multi-sentence-purpose-cloze", "select-object-that-serves-public-message", "match-place-with-any-noun"],
    ],
  },
  {
    id: "ENG_R4_S234",
    process: "track-pronoun-reference",
    evidence: "代名詞前的名詞與單複數角色",
    objectives: ["以單複數、人物與物件特徵找代名詞先行詞。", "追蹤跨句指涉，不把最近的名詞自動當答案。", "用事件角色與全文意思排除形式相合但語意錯誤的選項。"],
    sections: [
      ["先看代名詞特徵", "he、she 指單一人物，it 指單一事物，they 可指複數人事物。先用這些特徵排除數量不合者，再處理語意。"],
      ["不要只選最近名詞", "代名詞常指前句主題，不一定是距離最近的字。問自己：誰做了後面的動作？哪個名詞能合理承接？"],
      ["受格與所有格也有線索", "him、her、them 放在動詞或介系詞後；his、her、their 表所有。選項除了對象正確，也要使用位置要求的形式。"],
      ["跨句建立小表格", "人物多時，可記成『誰—做什麼—擁有什麼』。每遇到代名詞便回表格核對，直到每個動作都有清楚執行者。"],
    ],
    examples: [
      ["Mia found a key. It was under the desk. It 指什麼？", ["列出 Mia 與 a key。", "It 指單一物件。", "能在桌下的是 key。"], "the key", "單數物件與事件位置都支持 key。"],
      ["Ben and Leo carried the table. They moved slowly. They 指誰？", ["They 是複數。", "前句有兩位搬桌者。", "後句動作延續。"], "Ben and Leo", "複數人物與移動事件都一致。"],
      ["Nora gave Amy her book. 若書屬於 Nora，如何避免不清楚？", ["her 可能指兩人。", "直接重複所有者。", "改寫所有格片語。"], "Nora gave Amy Nora's book.", "重述 Nora 可消除 her 的雙重可能。"],
    ],
    misconceptions: [
      ["代名詞一定指前面最近的名詞。", "距離近只是提示，不是規則。", "同時檢查數量、人物類型與事件角色。"],
      ["they 只能指人。", "they 也能指複數事物。", "看先行詞的數量，不以人或物單獨判斷。"],
      ["her 只有一種功能。", "her 可作受格，也可放在名詞前表所有。", "看 her 後面是否緊接名詞。"],
      ["段落換句後指涉就重設。", "主題常跨句延續。", "保留前句角色表，直到文章明確換主題。"],
    ],
    checks: [
      ["books 後以哪個代名詞代替？", "they 或 them", "主格或受格依位置選用，但都保持複數。"],
      ["it 能指兩個箱子嗎？", "不能", "兩個箱子應用 they 或 them。"],
      ["判斷指涉時，距離與語意哪個更重要？", "語意與句法共同證據", "最近名詞若無法完成事件，就不能成為先行詞。"],
    ],
    questions: [
      ["Mia bought a lamp. ___ was small enough for her desk.", ["He", "She", "It", "They"], 2, "It 指前句單數物件 a lamp。", ["He 指男性人物，不能指 lamp。", "She 指女性人物，不能指 lamp。", "They 是複數，與一盞燈不合。"], "two-sentence-reference", "match-singular-object-to-it", "choose-pronoun-by-nearest-person"],
      ["Ben and Jay finished the work. ___ left the room together.", ["He", "They", "It", "Them"], 1, "They 作主詞並指 Ben and Jay 兩人。", ["He 只能指其中一人，與 together 不合。", "It 不能指兩位人物。", "Them 是受格，不能作此句主詞。"], "two-sentence-reference", "match-plural-people-to-they", "use-object-form-as-subject"],
      ["The teacher called Nora, and then spoke to ___.", ["she", "her", "hers", "they"], 1, "介系詞 to 後用受格 her 指 Nora。", ["she 是主格，不能直接接在 to 後。", "hers 是所有代名詞，不能作 spoke to 的受詞。", "they 是複數主格，數量與位置都不合。"], "object-pronoun-cloze", "select-object-case", "ignore-pronoun-case"],
      ["The boys put their bags by the wall. The word their shows that the bags belong to ___.", ["the wall", "the boys", "one boy", "the room"], 1, "their 是複數所有格，回指 the boys。", ["wall 是單數地點，且只是袋子放置處。", "one boy 與複數 their 不合。", "room 沒有在句中成為所有者。"], "possessive-reference", "trace-plural-owner", "confuse-location-with-owner"],
      ["Amy put the cake beside the cups because ___ needed more table space.", ["the cake", "the cups", "Amy", "the table"], 2, "needed 是人的需求，Amy 為安排物品以取得空間的人。", ["cake 不會需要桌面空間。", "cups 不會主動需要空間。", "table 雖與 space 接近，但不是作決定的角色。"], "semantic-reference", "use-event-role-not-distance", "select-nearest-noun"],
      ["A red bus passed a blue car. It was moving slowly, so the car soon went ahead. What does It refer to?", ["the bus", "the car", "the road", "the color blue"], 0, "後句說 car 因此超前，表示原本慢的是 bus。", ["若 car 慢，就不能由此推出 car 超前。", "road 不是 moving 的車輛主體。", "顏色 blue 不能移動。"], "causal-reference", "infer-referent-from-result", "always-pick-nearest-noun"],
      ["Leo showed Sam two photos. He had taken them at the beach. What does them refer to?", ["Leo and Sam", "two photos", "the beach", "one camera"], 1, "them 是複數受格，作 taken 的受詞，指 two photos。", ["兩個人不是在海灘被拍下的唯一合理受詞，且前句焦點是照片。", "the beach 是單數地點，不能用 them。", "camera 未在原文出現且是單數。"], "multi-pronoun-reference", "track-object-pronoun", "match-plural-with-any-pair"],
      ["Nora lent Kim a coat because hers was wet. Whose coat was wet?", ["Nora's", "Kim's", "both coats", "the store's"], 1, "hers 在這個因果中指 Kim 原有的外套；因此 Nora 才借她另一件。", ["若 Nora 的外套濕，不能直接解釋她借外套給 Kim。", "hers 是單數所有代名詞，未表示兩件都濕。", "原文沒有商店角色。"], "possessive-inference", "resolve-owner-from-cause", "bind-possessive-to-subject"],
      ["The old bridge and the new road were closed. ___ will open again after the storm.", ["It", "They", "He", "Them"], 1, "兩個並列事物作主詞，使用 They。", ["It 是單數，不能同時回指 bridge 和 road。", "He 指男性人物。", "Them 是受格，不能作 will open 的主詞。"], "compound-antecedent", "preserve-plural-subject-case", "use-singular-for-compound"],
      ["Jay found a wallet near a bench and took it to the police. What did Jay take?", ["the bench", "the wallet", "the police", "the street"], 1, "it 是 took 的受詞，指 Jay 找到的單數物件 wallet。", ["bench 只是發現地點附近的物件。", "police 是接收者，不是被帶走的物品。", "street 未作可帶走的單數物件。"], "action-chain-reference", "trace-object-through-actions", "confuse-destination-with-object"],
      ["Eva gave Mia a note after she finished it. The next sentence says, 'Mia read the note on the bus.' Who most clearly finished the note?", ["Eva", "Mia", "the bus driver", "the note"], 0, "Eva 先完成 note 再把它交給 Mia；下一句才出現 Mia 閱讀。", ["Mia 是接收並閱讀的人，沒有完成書寫的證據。", "bus driver 未出現在原句角色中。", "note 是被完成的物件，不能作 she 的先行詞。"], "ambiguous-reference-repair", "use-event-order-to-resolve-she", "bind-she-to-nearest-name"],
      ["A school gave each team a box. The teams painted them, filled them with books, and sent them away. What does every them refer to?", ["the teams", "the boxes", "the books", "the schools"], 1, "paint、fill 與 send 的共同受詞都是複數 boxes。", ["teams 是動作執行者，不是受詞。", "books 到 filled 之後才出現，不能回指第一個 them。", "只有一所 school，且不是這三個動作的受詞。"], "reference-chain", "maintain-antecedent-across-actions", "switch-referent-mid-chain"],
    ],
  },
  {
    id: "ENG_R4_S235",
    process: "infer-logical-relation",
    evidence: "前後命題的因果、轉折與時間關係",
    objectives: ["辨認並列、轉折、因果、條件與時間關係。", "在選連接詞前先用自己的話說出前後關係。", "能排除只看單一句意而忽略邏輯方向的選項。"],
    sections: [
      ["先不看選項說關係", "把空格前後改寫成中文：是原因造成結果、結果回推原因、兩件事相反、增加資訊，還是滿足條件才發生？先命名關係可避免被熟悉的連接詞吸引。"],
      ["方向不能顛倒", "because 後放原因，so 後放結果。Rain fell, so the game stopped；The game stopped because rain fell。兩句事實相同，但空格位置不同。"],
      ["轉折需要預期落差", "but 與 although 連接不符合一般預期的兩件事，如很累卻繼續走。若兩邊只是順序發生，應找 and、then、after 或 before。"],
      ["條件與時間", "if 表條件，when 表某時發生，until 表持續到某時為止，while 表兩事同時。將連接詞放回後，畫出事件是否一定發生與先後順序。"],
    ],
    examples: [
      ["It was raining, ___ we stayed inside. (so / because / but)", ["前句是原因。", "後句是結果。", "原因在前、結果在後。"], "so", "so 引出待在室內這個結果。"],
      ["___ Leo was tired, he finished the race. (Although / So / And)", ["累通常會想停。", "實際卻完成比賽。", "需要轉折。"], "Although", "Although 放在讓步子句前，呈現預期落差。"],
      ["Call me ___ you arrive. (when / but / because)", ["兩件事是時間關係。", "抵達是打電話的時點。", "選 when。"], "when", "when 引出打電話發生的時間。"],
    ],
    misconceptions: [
      ["because 和 so 可以一起連同一對子句。", "標準句中通常擇一標示因果方向。", "依空格位置決定引出原因或結果。"],
      ["前後都有好事就一定用 and。", "仍需看是否有因果或條件。", "先說出邏輯關係再選。"],
      ["although 之後還要再加 but。", "although 已標出讓步關係。", "用 Although A, B 或 A, but B。"],
      ["when 與 if 永遠相同。", "when 預設事件會發生，if 強調條件是否成立。", "依確定性選擇。"],
    ],
    checks: [
      ["原因在 because 的前面還是後面？", "後面", "because 引出原因子句。"],
      ["很貴但仍買下，屬於哪種關係？", "轉折", "結果與價格造成的通常預期相反。"],
      ["只有下雨才取消，應優先考慮哪個連接詞？", "if", "取消以是否下雨為條件。"],
    ],
    questions: [
      ["The road was closed, ___ we took another way.", ["because", "so", "but", "or"], 1, "道路封閉是原因，改走別路是結果，so 引出結果。", ["because 後應接原因，但此處後句是結果。", "but 需要預期落差，本句是自然因果。", "or 表選擇，不能說明已採取的結果。"], "cause-result-cloze", "select-so-for-result", "reverse-because-and-so"],
      ["We took another way ___ the road was closed.", ["because", "so", "although", "and"], 0, "後句 the road was closed 是改道原因，使用 because。", ["so 應引出結果，方向顛倒。", "although 會表讓步，但本句沒有預期落差。", "and 只並列，沒有清楚說明改道原因。"], "result-cause-cloze", "select-because-for-cause", "ignore-causal-direction"],
      ["The bag was heavy, ___ Mia carried it all the way home.", ["but", "so", "because", "until"], 0, "很重通常不易一路搬回家，實際仍搬回，形成轉折。", ["so 會把搬回家說成很重的自然結果，邏輯不合。", "because 後不是原因而是相反結果。", "until 需要時間終點，不能連接這兩個完整命題。"], "contrast-cloze", "detect-expectation-gap", "assume-first-clause-is-cause"],
      ["___ the bag was heavy, Mia carried it home.", ["Although", "Because", "So", "If"], 0, "Although 引出讓步：雖然重，仍帶回家。", ["Because 會說因為重所以帶回，缺乏合理因果。", "So 不能以這種方式放在讓步子句開頭。", "If 只表條件，原句陳述的是已發生事實。"], "fronted-concession", "select-although", "add-but-after-although"],
      ["Put on your coat ___ you go outside.", ["before", "after", "because", "but"], 0, "穿外套應在外出之前，before 表正確順序。", ["after 會變成先出門再穿外套。", "because 需要後句作原因，這裡是時間順序。", "but 需要轉折，原句沒有相反預期。"], "sequence-cloze", "order-actions-with-before", "reverse-event-order"],
      ["Please wait here ___ I come back.", ["until", "or", "so", "although"], 0, "等待持續到我回來為止，until 標示終點。", ["or 表選擇或否則，不能標示等待終點。", "so 引出結果，與時間終點不合。", "although 表讓步，沒有預期落差。"], "time-limit-cloze", "select-until-for-end-point", "use-when-for-duration"],
      ["You can take the bus ___ walk to the station.", ["because", "or", "until", "although"], 1, "bus 與 walk 是兩個可選方式，or 表選擇。", ["because 不能在此引出選項。", "until 表時間終點，無法連接兩種方式。", "although 表轉折，沒有讓步關係。"], "choice-cloze", "select-or-between-options", "use-and-for-exclusive-choice"],
      ["___ the light turns green, the cars will move.", ["When", "But", "Because", "Until"], 0, "綠燈亮起是車子移動的時點，When 最自然。", ["But 不能引出時間子句。", "Because 會只說原因，未表明時點；題意重在燈轉綠時。", "Until 會表示車子持續移動到綠燈，順序相反。"], "future-time-clause", "select-when-for-expected-event", "use-will-inside-time-clause"],
      ["Take an umbrella ___ it rains this afternoon.", ["if", "and", "while", "so"], 0, "是否下雨是帶傘建議的條件，if 符合未確定情況。", ["and 只並列，無法表條件。", "while 表同時進行，不表示是否發生。", "so 引出結果，不能置於這個條件位置。"], "conditional-cloze", "select-if-for-uncertain-condition", "treat-future-event-as-certain"],
      ["Nora read the map ___ Ben checked the road signs.", ["while", "because", "unless", "afterward"], 0, "兩人同時做不同查路工作，while 表同時。", ["because 會把看路標當成讀地圖的原因，文意未支持。", "unless 表除非，不能描述並行動作。", "afterward 是副詞，不能直接連接兩個子句。"], "simultaneous-actions", "select-while", "confuse-adverb-with-conjunction"],
      ["The team practiced every day. ___, it did not win the game.", ["However", "Therefore", "Also", "For example"], 0, "勤練通常增加獲勝可能，卻沒有贏，However 標出跨句轉折。", ["Therefore 會把沒贏說成勤練的結果，方向不合理。", "Also 只增加資訊，漏掉預期落差。", "For example 會把沒贏當成勤練例子，關係不成立。"], "cross-sentence-marker", "select-however-for-contrast", "choose-therefore-after-any-sequence"],
      ["The hall was small. ___, only fifty people could enter at one time.", ["As a result", "On the other hand", "At first", "For instance"], 0, "空間小造成容納人數有限，As a result 引出結果。", ["On the other hand 需要另一面對比，本段沒有。", "At first 只標示時間起點，不能解釋人數限制。", "For instance 引出例子，但後句是直接結果。"], "discourse-connector", "connect-cause-to-capacity-result", "confuse-example-with-result"],
    ],
  },
  {
    id: "ENG_R4_S236",
    process: "integrate-cross-sentence-evidence",
    evidence: "至少兩句共同限制出的唯一內容",
    objectives: ["延後作答，先讀完空格前後至少一句。", "區分局部通順與全文一致。", "能指出每個干擾項與哪一個跨句證據衝突。"],
    sections: [
      ["局部合理不等於正確", "會考克漏常把四個選項都做成單句可讀。真正答案還要符合人物目標、事件順序、代名詞與下一句結果。至少讀到句號後再選。"],
      ["收集兩個以上證據", "先寫下前句提供的限制，再寫後句提供的限制。例如前句說要省錢、後句說改走路，答案必須同時與交通費和步行決定相關。"],
      ["用衝突排除", "不要只問哪個最好，還要逐項問：它會和哪一句打架？若選項讓人物突然改變目的、讓時間倒退或使下一句無因可接，就排除。"],
      ["完成後重讀整段", "把答案放回去，從段首讀到段尾。確認主題沒有跳開、代名詞指涉清楚、因果方向正確，而且沒有第二個選項能完成同樣工作。"],
    ],
    examples: [
      ["The bus did not come. Mia had a test at eight. She ___ to school and arrived on time. (walked / slept / cooked)", ["公車未到是問題。", "八點考試建立趕時間目標。", "後句 arrived on time 要求能到校的行動。"], "walked", "只有 walked 同時解決交通問題並導向準時抵達。"],
      ["Ben wanted a quiet place. The cafe was full. He went to the library ___ . (instead / loudly / yesterday)", ["目標是安靜。", "咖啡店客滿。", "去圖書館是替代方案。"], "instead", "instead 連接原方案失敗與替代地點。"],
      ["The plant looked dry. Nora gave it water. The next morning, its leaves looked ___. (better / empty / noisy)", ["先找問題：乾。", "再找處理：澆水。", "結果應是狀況改善。"], "better", "better 能完成問題—處理—結果的鏈條。"],
    ],
    misconceptions: [
      ["空格那一句通順就可以作答。", "下一句常用結果否定局部答案。", "至少讀前後各一句。"],
      ["第一個符合主題的字就是答案。", "同主題字仍可能角色或方向錯誤。", "列出每項與全文證據的相合與衝突。"],
      ["重複原文字最多的選項最可能正確。", "詞面重複可能是誘餌。", "看事件功能，而非字面相似度。"],
      ["找不到直接同義詞就只能猜。", "跨句可用因果、目的與順序間接推出。", "先建立事件鏈，再選能補上缺口的內容。"],
    ],
    checks: [
      ["跨句題至少應蒐集幾個獨立線索？", "兩個", "單一線索常只能排除部分選項。"],
      ["選項單句合理但使下一句無法解釋，應保留嗎？", "不應", "全文一致高於局部通順。"],
      ["代入答案後最後一步是什麼？", "重讀整段並檢查其他選項", "要確認唯一答案與完整語意鏈。"],
    ],
    questions: [
      ["The rain stopped just before noon. The class had planned an outdoor lunch, so everyone ___ at twelve.", ["went outside", "closed the windows", "went to bed", "missed the bus"], 0, "雨在午前停且原計畫是戶外午餐，十二點外出同時符合天氣與計畫。", ["關窗可能合理但不能完成戶外午餐計畫。", "中午睡覺與全班午餐目的衝突。", "公車未在情境中出現，也不能回應戶外午餐。"], "two-sentence-plan", "combine-weather-and-plan", "choose-locally-possible-action"],
      ["Leo wanted to buy the book, but he had left his money at home. He asked the shop to ___ it until the next day.", ["hold", "read", "paint", "lose"], 0, "沒帶錢但仍想買，需要商店保留書到隔天。", ["read the book 不能解決尚未付款的問題。", "paint the book 與購買目標無關。", "lose the book 會使購買更不可能。"], "problem-solution-cloze", "integrate-goal-and-delay", "choose-store-related-verb"],
      ["The first train leaves at 6:10. Nora reached the station at 6:20, so she had to ___ .", ["take the next train", "arrive ten minutes earlier", "get off at 6:10", "close the station"], 0, "到站時間晚於首班離站時間，只能改搭下一班。", ["她已在 6:20 到站，無法把已發生的抵達改早。", "未搭上首班就不能在 6:10 下車。", "旅客不能因遲到而關閉車站。"], "schedule-integration", "compare-departure-and-arrival", "ignore-time-order"],
      ["The blue cup costs $80, and the green one costs $60. Jay has $70 and needs one cup. He can buy ___ .", ["only the green one", "only the blue one", "both cups", "neither cup"], 0, "70 元足以買 60 元綠杯但不足 80 元藍杯。", ["70 元不足以買藍杯。", "兩杯合計 140 元，超過 70 元。", "綠杯價格低於他擁有的金額。"], "price-table-in-prose", "combine-two-prices-with-budget", "compare-only-one-price"],
      ["Amy promised to meet Ben at the gate at four. Her bus was late, but she arrived at 3:55. Ben came at 4:05. Amy ___ .", ["kept her promise to be there by four", "arrived after Ben", "missed the meeting", "came ten minutes late"], 0, "Amy 在四點前抵達，履行準時到門口的約定。", ["Amy 3:55 到，早於 Ben 的 4:05。", "兩人都到達，沒有錯過會面。", "3:55 比四點早五分鐘，不是晚十分鐘。"], "timeline-conclusion", "integrate-promise-and-two-arrivals", "focus-on-other-person-lateness"],
      ["A sign says the park closes when the river is high. It rained all night, but the morning report said the river was safe. The park ___ .", ["could open as usual", "had to close because of high water", "was moved to another town", "could not be visited in any weather"], 0, "關閉條件是水位高，而報告明說安全，故可照常開放。", ["整夜下雨不等於水位已高；安全報告否定關閉條件。", "原文沒有搬動公園的資訊。", "標示的是特定條件，不是任何天氣都關閉。"], "rule-and-condition", "apply-condition-to-report", "use-rain-as-sufficient-condition"],
      ["Kim needed a quiet room for an online test. Room A was empty but had no internet. Room B had internet, and no one was using it. She chose ___ .", ["Room B", "Room A", "the hall during a concert", "the outdoor market"], 0, "Room B 同時滿足安靜可用與有網路兩項要求。", ["Room A 缺少線上測驗必要的網路。", "音樂會中的 hall 不安靜。", "戶外市場既非指定房間也通常不安靜。"], "constraint-integration", "satisfy-all-room-requirements", "choose-first-matching-constraint"],
      ["Sam's doctor told him not to run for a week. Three days later, his friends invited him to a race. Sam decided to watch because he ___ .", ["was still following the doctor's advice", "had already waited seven days", "wanted to win the race", "had never met his friends"], 0, "三天少於一週，選擇觀看符合醫師仍有效的建議。", ["三天並非七天，休息期尚未結束。", "若想參賽獲勝，不能解釋只觀看。", "朋友已邀請他，不能推出從未見過。"], "duration-and-decision", "compare-elapsed-time-with-rule", "round-three-days-to-a-week"],
      ["The club collected twenty books on Monday and fifteen on Tuesday. It gave ten books away on Wednesday. At the end, it had ___ of the collected books left.", ["twenty-five", "thirty-five", "fifteen", "ten"], 0, "先合計 20 加 15 得 35，再送出 10，剩 25。", ["35 是送出前總數，未扣除十本。", "15 只是在星期二收集的數量。", "10 是送出的數量，不是剩餘。"], "quantity-chain", "combine-and-subtract-across-sentences", "stop-before-final-operation"],
      ["Eva usually walks her dog after dinner. Tonight the dog hurt its foot, so Eva ___ instead.", ["let it rest at home", "made it run farther", "forgot that she had a dog", "bought dinner after the walk"], 0, "腳受傷時休息能取代平常散步並保護狗。", ["跑更遠會加重受傷，與 so 的結果不合。", "前句清楚顯示她記得狗。", "晚餐後才是平常散步時間，且買晚餐不能處理受傷。"], "routine-exception", "choose-safe-response-to-injury", "repeat-normal-routine-despite-change"],
      ["A museum ticket is free for children under twelve. Leo is twelve, and his sister is ten. According to the rule, ___ .", ["only his sister gets a free ticket", "both children get free tickets", "only Leo gets a free ticket", "neither child may enter"], 0, "under twelve 不包含十二歲；十歲的妹妹符合免費條件。", ["Leo 正好十二，不符合 under twelve。", "免費條件不是年滿十二，Leo 不符合。", "規則只談票價，沒有禁止入場。"], "rule-boundary", "apply-exclusive-age-limit", "treat-under-as-at-most"],
      ["The school trip needs one adult for every six students. There are seventeen students and two adults. Before leaving, the group must ___ .", ["find one more adult", "send five students home", "ask one adult to watch all seventeen", "remove both adults"], 0, "十七名學生需要三名成人；目前兩名，尚缺一名。", ["送五人回家會變十二人、兩成人可行但不符合旅行保留全體學生的合理目標，且找一成人即可。", "一成人只能負責六人，不能照看十七人。", "移除成人會使比例更不符合。"], "multi-step-rule-application", "compute-required-supervision", "use-floor-instead-of-ceiling"],
    ],
  },
];

export const ENGLISH_U34_LECTURES = SKILLS.map(lecture);
export const ENGLISH_U34_QUESTIONS = SKILLS.flatMap((skill) => skill.questions.map((item, index) => question(skill, item, index)));

export const ENGLISH_UNIT_SOURCE = {
  unitId: UNIT_ID,
  lectures: ENGLISH_U34_LECTURES,
  questions: ENGLISH_U34_QUESTIONS,
  vocabularyPolicy: {
    capQuestionBasis: "appendix-5-table-1",
    additionalLearningTerms: ["add", "adult", "advice", "asleep", "cancel", "empty", "goodness", "hall", "message", "neither", "pillow", "promise", "result", "return", "sleepy", "storm", "therefore", "tire", "travel", "usual"],
    contextualizedAboveRangeTerms: ["according", "afterward", "b", "cafe", "clearness", "concert", "farther", "instance", "instead", "online", "outdoor", "quietness", "refer", "relax", "remove", "salty", "shorten", "shortness", "slowness", "sunshine", "unless"],
    properNames: ["Amy", "Ben", "Eva", "Jay", "Kim", "Leo", "Mia", "Nora", "Sam", "Tom"],
    grammarNotation: ["V", "V-ing"],
    malformedDistractors: ["betterly"],
  },
};
