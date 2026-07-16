const UNIT_ID = "ENG_R4_U33";

function lecture(id, skillId, content) {
  return { id, skillId, ...content, sections: content.sections.map((section, index) => ({ id: `${id}_SEC_${String(index + 1).padStart(2, "0")}`, ...section })) };
}

const DIFFICULTIES = ["foundation", "foundation", "foundation", "standard", "standard", "standard", "standard", "advanced", "advanced", "advanced", "transfer", "transfer"];
const ANSWERS = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];

function skillQuestions(skillNumber, values) {
  if (values.length !== 12) throw new Error(`ENG_R4_S${skillNumber}: expected 12 authored questions`);
  if (values.some((value, index) => value.answerIndex !== ANSWERS[index])) throw new Error(`ENG_R4_S${skillNumber}: answer distribution mismatch`);
  return values.map((value, index) => ({ id: `ENG_R4_Q_${skillNumber}_${String(index + 1).padStart(2, "0")}`, skillId: `ENG_R4_S${skillNumber}`, difficulty: DIFFICULTIES[index], ...value }));
}

function q(stem, options, answerIndex, reasons, reviews, operation, representationType, misconceptionTarget) {
  return { stem, options, answerIndex, reasons, reviews, cognitiveProcess: [operation], representationType, misconceptionTargets: [misconceptionTarget] };
}

export const ENGLISH_U33_LECTURES = [
  lecture("ENG_R4_L_S225", "ENG_R4_S225", {
    objectives: ["能利用缺句前後的問答關係、代名詞與因果線索補回對話。", "能排除文法正確但無法承接下一句的選項。"],
    sections: [
      { title: "先看缺句兩邊", content: "對話缺句不是只完成前一句。先讀缺句前的發問或陳述，再讀缺句後的回應。Why are your shoes wet? 後面需要原因；若下一句又說 Then take these dry socks，缺句還要能解釋為何需要乾襪子。兩邊都接得起來才是答案。" },
      { title: "找成對的語意動作", content: "邀請通常接接受或婉拒，求助接答應或說明困難，道歉接接受道歉或處理方式，建議接評估與決定。Could you feed my fish? 需要回答是否能幫忙，不能只說魚的顏色。先判斷說話者在做什麼，再找相配的回應。" },
      { title: "追蹤代名詞和省略資訊", content: "缺句中的 it、there、then 必須在上下文找到明確對象。若前文談 Room 12，Follow me. I am going there. 的 there 才能指向該教室。代名詞雖短，若沒有可指向的內容，句子就不連貫。" },
      { title: "用後句反查而不腦補", content: "Good idea、I see、That will help 等後句會限制缺句功能。看到 Good idea，可反推缺句多半是建議；看到 I see，前句多半提供了解釋。答案不必華麗，只要完整受文本支持，不能加入對話沒提到的新事件。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S225_EX_01", prompt: "A: Why is the window open? B: ___. A: Then I will close it.", steps: ["Why 要求原因。", "後句決定關窗。", "缺句應說明開窗造成的問題。"], answer: "The wind is making the room cold.", why: "風使房間變冷能直接回答原因，也自然引出關窗。若只回答 I like the window，既沒有說明為何開著，也無法支持後續動作。" },
      { id: "ENG_R4_L_S225_EX_02", prompt: "A: Could you carry this box? B: ___. A: Thanks. The bus is waiting.", steps: ["辨認請求協助。", "Thanks 顯示對方答應。", "公車正在等，使立即行動合理。"], answer: "Sure. Let me take it now.", why: "Sure 明確接受請求，take it 的 it 指向箱子，now 又承接公車正在等的急迫性，三項線索彼此一致。" },
      { id: "ENG_R4_L_S225_EX_03", prompt: "A: I cannot read the last line. B: ___. A: Yes, that is much clearer.", steps: ["第一句指出看不清楚。", "Yes 回答一個可檢驗的改善。", "much clearer 表示缺句提供放大或靠近的方法。"], answer: "Would you like me to make the words larger?", why: "把字放大正好處理看不清楚，後句也能確認改善。若建議換主題，即使句子文法正確，clearer 仍沒有對象。" },
    ],
    misconceptions: [
      { belief: "只要選項能回答缺句前的問句就可以。", whyWrong: "它可能和缺句後的反應衝突。", correction: "把選項放回去，從缺句前一路讀到缺句後。" },
      { belief: "最長、資訊最多的選項通常最完整。", whyWrong: "多出的事件可能完全沒有文本依據。", correction: "選擇剛好完成問答關係的內容，不以長度判斷。" },
      { belief: "代名詞可以隨意指向對話中任何名詞。", whyWrong: "指涉還要符合單複數、人物與語意。", correction: "逐一檢查 it、they、there 在前文的唯一合理對象。" },
      { belief: "Good idea 之前一定要有問號。", whyWrong: "陳述式建議如 We can walk there 也能得到這個回應。", correction: "依溝通功能判斷，不只看句尾標點。" },
    ],
    checks: [
      { prompt: "缺句後出現 That explains the noise，缺句最可能提供哪一類資訊？", answer: "噪音的原因", reason: "explains 表示後句把前述內容視為解釋。" },
      { prompt: "Could you open the door? 之後若接 Thank you，缺句應表達什麼？", answer: "答應並開門", reason: "感謝語顯示請求已獲得協助。" },
      { prompt: "選項能接前句卻和後句矛盾時，是否可選？", answer: "不可", reason: "完整對話的前後語意都必須成立。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S226", "ENG_R4_S226", {
    objectives: ["能由疑問詞與助動詞判斷回答所需的資訊種類。", "能選出直接、足量且不迴避問題的英文回應。"],
    sections: [
      { title: "疑問詞先決定資料類型", content: "Where 問地點，when 問時間，who 問人物，whose 問所有者，why 問原因，how often 問頻率，how long 問時間長度。回答 Beside the bank 雖能回 Where，卻不能回 When。先標出疑問詞，可快速排除資料類型錯誤的選項。" },
      { title: "一般疑問句先表明肯定或否定", content: "Did you bring the key? 可以答 Yes, I did 或 No, I left it at home。只說 At home 可能讓人不知道是人在家還是鑰匙在家。直接回應不一定很長，但要讓聽者清楚知道 yes 或 no 所指的事情。" },
      { title: "請求問句要回答能否協助", content: "Could you show me the way? 表面有 could，實際是在請求。Certainly. Follow me 能完成請求；Yes, I could 只談能力，沒有承諾現在幫忙。辨認交際功能後，回答才不會停在文法表面。" },
      { title: "答案要足夠但不可越界", content: "Which bus goes to the hospital? 回 The number ten bus 已足夠。若選項再宣稱它永遠準時，而對話沒有時刻資料，就加入未證實資訊。直接相關表示回答核心問題，足量表示能採取下一步，不表示要補上所有可能細節。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S226_EX_01", prompt: "A: How often do you water these plants? B: Every two days.", steps: ["找 how often。", "確認答案表達重複頻率。", "排除只說某一次時間的內容。"], answer: "Every two days.", why: "every two days 描述固定頻率。Yesterday 或 for ten minutes 分別是過去時點與持續長度，不能回答多久一次。" },
      { id: "ENG_R4_L_S226_EX_02", prompt: "A: Whose red bag is this? B: It belongs to Ken.", steps: ["whose 詢問所有權。", "it 指紅色袋子。", "belongs to 指明所有者。"], answer: "Ken owns the red bag.", why: "belongs to Ken 直接表示 Ken 是袋子的主人，沒有把 who 和 whose 混淆，也沒有只描述袋子位置。" },
      { id: "ENG_R4_L_S226_EX_03", prompt: "A: Would you please hold the door? B: Of course.", steps: ["辨認禮貌請求。", "Of course 表示接受。", "實際行動是扶住門。"], answer: "The listener agrees to hold the door.", why: "would you please 在此不問未來意願的理論，而是要求當下協助；Of course 是直接接受。" },
    ],
    misconceptions: [
      { belief: "任何提到地點的選項都能回答 where。", whyWrong: "地點還必須是題目所問人物或物品的位置。", correction: "同時核對疑問詞與被問對象。" },
      { belief: "yes/no 問句只回答 Yes 就永遠足夠。", whyWrong: "多個事件並列時，Yes 的範圍可能不清楚。", correction: "必要時補上主詞與助動詞或簡短原因。" },
      { belief: "Could you 問的是過去能力。", whyWrong: "日常對話常用它提出禮貌請求。", correction: "看對話是否期待對方立即採取行動。" },
      { belief: "why 可以用一個時間片語作答。", whyWrong: "時間沒有建立原因。", correction: "以 because 或能說明因果的完整內容回應。" },
    ],
    checks: [
      { prompt: "How long does the trip take? 需要哪一類答案？", answer: "一段時間", reason: "how long 在此詢問旅程的持續長度。" },
      { prompt: "Who opened the window? 回 In the morning 是否直接？", answer: "不直接", reason: "題目問人物，該片語只提供時間。" },
      { prompt: "Could you pass the salt? 最合宜的是談能力還是回應請求？", answer: "回應請求", reason: "說話者要對方當下遞鹽。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S227", "ENG_R4_S227", {
    objectives: ["能在多輪對話中建立人物、物品、時間與地點的對應。", "能依代名詞與動作鏈更新資訊，不把早先狀態當成最後狀態。"],
    sections: [
      { title: "建立小型資訊表", content: "對話出現多人多物時，可在心中記 who、what、where、when。Amy 把 map 給 Ben，Ben 把 it 放進 bag，it 就是 map。若只記最後一個名詞 bag，容易誤以為 Ben 把袋子放進袋子。人物和物品要分欄追蹤。" },
      { title: "每個代名詞都要有條件", content: "he、she 需要人物與性別一致，they 可能指複數人物或物品，it 通常指單一物品或事件。this afternoon 與 there 也需對應已提到的時間和地點。先找形式可配的候選，再以動作是否合理排除。" },
      { title: "狀態會隨動作改變", content: "The key was on the desk. Leo picked it up and gave it to Mia. 最後持有者是 Mia，不再是桌子或 Leo。閱讀時用動詞更新位置、所有者和計畫，題目若問 now、finally 或 after that，必須回答最新狀態。" },
      { title: "相同名稱仍要分清角色", content: "對話可能同時談 meeting place、bus stop 和 home。Mia asks Leo to meet at the stop，說話者是 Mia，接收要求的人是 Leo，碰面地點是 stop。不要因某個名字離答案最近，就忽略句法角色。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S227_EX_01", prompt: "Nina gave Omar a note. He read it and put it under the cup.", steps: ["He 對應 Omar。", "第一個 it 指 note。", "第二個 it 仍是被放置的 note。"], answer: "The note is under the cup.", why: "動作鏈從交付、閱讀到放置都作用在 note；cup 只是最後的位置參照，不會變成被閱讀的物品。" },
      { id: "ENG_R4_L_S227_EX_02", prompt: "Ben will meet Kim at the station at four. She will bring the tickets.", steps: ["兩人是 Ben 與 Kim。", "she 只能對應 Kim。", "at four 修飾碰面時間。"], answer: "Kim will bring the tickets to the four o'clock meeting.", why: "代名詞與人物資訊共同確定攜票者，station 與 four 則分別提供地點和時間。" },
      { id: "ENG_R4_L_S227_EX_03", prompt: "The blue box was in Room 5. David moved it to Room 8 before lunch.", steps: ["辨認初始位置 Room 5。", "moved 表示位置改變。", "before lunch 是移動完成時間。"], answer: "Before lunch, the blue box was moved to Room 8.", why: "題目問更新後狀態時要採用 Room 8；Room 5 只描述移動以前，不能當成目前位置。" },
    ],
    misconceptions: [
      { belief: "代名詞一定指前面最近的名詞。", whyWrong: "最近名詞可能在單複數或語意角色上不合。", correction: "同時核對形式、人物身分與動作合理性。" },
      { belief: "物品最初的位置就是整段對話的答案。", whyWrong: "後續動詞可能已改變位置。", correction: "看到 take、give、move、leave 時更新狀態。" },
      { belief: "每次出現 it 都一定指同一個東西。", whyWrong: "新句可能引入另一個單數對象。", correction: "逐次回到當句動詞確認受詞。" },
      { belief: "人物姓名出現在句末就一定是動作者。", whyWrong: "句末姓名也可能是接受者或碰面對象。", correction: "依主詞、動詞、受詞的位置判定角色。" },
    ],
    checks: [
      { prompt: "Leo gave the key to Mia 之後，誰持有鑰匙？", answer: "Mia", reason: "give A to B 使 B 成為接收者。" },
      { prompt: "The cup was on the table, but Ben put it in the sink. 最後在哪裡？", answer: "水槽裡", reason: "but 後的移動更新了杯子位置。" },
      { prompt: "they 指向單一人物是否合理？", answer: "通常不合理", reason: "在本單元的基本對話中 they 用來承接複數對象。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S228", "ENG_R4_S228", {
    objectives: ["能辨識延續、轉折、回到原題與引入新題的對話訊號。", "能選出和目前話題範圍一致的下一句。"],
    sections: [
      { title: "先畫出目前話題", content: "若兩人正討論週末野餐，basket、food、weather 都可能延續話題；突然談數學成績就需要明確轉換訊號。話題不是單一重複字，而是一組共同服務同一件事的概念。先說出目前在談什麼，再判斷下一句是否接得上。" },
      { title: "延續訊號把焦點留在原處", content: "also、and、what about、another thing 常加入同一主題的資訊。A 說 We need water，B 問 What about cups? 仍在準備野餐。看到延續訊號時，答案要補同一任務的一部分，不能跳到無關事件。" },
      { title: "轉換訊號要真的帶出新題", content: "By the way、speaking of school、before I forget 可引入新話題。轉換後的句子仍需有自然連結，例如從 library book 轉到 tomorrow's class，可能以 speaking of school 承接。只有訊號沒有新焦點，也不算完整轉換。" },
      { title: "back to 可把對話拉回主要任務", content: "中間插入小話題後，Now, back to our plan: shall we meet at five? 可回到原本的碰面安排。判斷時比較插話前與 back to our plan 後的焦點；若兩者一致，這是回題，不是再開第三個話題。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S228_EX_01", prompt: "A: We have the fruit for the picnic. B: What about drinks?", steps: ["主題是野餐準備。", "fruit 與 drinks 都是準備項目。", "what about 加入尚未處理的同類資訊。"], answer: "The second speaker continues the picnic plan.", why: "B 沒有換題，只是從食物延伸到飲料；兩句共同檢查野餐用品。" },
      { id: "ENG_R4_L_S228_EX_02", prompt: "A: The library closes at six. B: By the way, did you finish the art card?", steps: ["第一句談圖書館時間。", "by the way 標記轉換。", "第二句新焦點是美術卡。"], answer: "The topic changes from library hours to art work.", why: "明確訊號後出現不同任務，因此不是補充圖書館資訊，也不是回答關門時間。" },
      { id: "ENG_R4_L_S228_EX_03", prompt: "A: The bus was late. B: Mine was too. A: Now, back to our plan: can you meet at seven?", steps: ["前兩句談公車遲到。", "back to our plan 結束插話。", "問句把焦點轉回碰面安排。"], answer: "The speakers stop talking about the bus and return to their plan.", why: "back to our plan 後的時間問句要求決定碰面，不再追問公車，因此它具有收束並回題的作用。" },
    ],
    misconceptions: [
      { belief: "只要出現新名詞就是換話題。", whyWrong: "新名詞可能是原任務的另一部分。", correction: "判斷新資訊是否仍服務同一個核心目的。" },
      { belief: "and 後面永遠延續同一話題。", whyWrong: "連接詞也可能連結兩個不同事件。", correction: "檢查內容關係，不只靠單一標記。" },
      { belief: "By the way 本身就是完整回答。", whyWrong: "它只標示轉換，後面仍需提出新內容。", correction: "找出訊號後的新焦點與溝通目的。" },
      { belief: "back to 一定表示不同意。", whyWrong: "它常用來結束插話或回到主要任務。", correction: "比較 back to 前後的話題位置。" },
    ],
    checks: [
      { prompt: "What about plates? 在野餐準備對話中屬於延續還是換題？", answer: "延續", reason: "盤子仍是同一場野餐的準備物品。" },
      { prompt: "By the way 後通常要找什麼？", answer: "新話題焦點", reason: "這個片語常提示說話者轉向另一件事。" },
      { prompt: "back to our plan 後重談原本的碰面時間，功能是什麼？", answer: "回到主要安排", reason: "它結束中間插話並恢復原任務。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S229", "ENG_R4_S229", {
    objectives: ["能依開場、回應、追問、決定與收束排列對話。", "能利用代名詞、時間詞與禮貌語判斷句子先後。"],
    sections: [
      { title: "先找不能憑空出現的句子", content: "Thanks for telling me 必須在有人提供資訊之後；Yes, that time works 要先有一個時間提議；What color is it? 要先知道正在找某個物品。這些依賴前文的句子通常不是開頭，可用來建立固定的先後邊。" },
      { title: "用溝通目的畫出小流程", content: "借物對話常是提出需求、確認物品、答應或拒絕、致謝；約時間常是邀請、提出時段、確認、收束。先辨認整段要完成什麼，再排列功能，比逐句只看文法更可靠。" },
      { title: "代名詞和指示詞需要先行詞", content: "it、that one、there、then 不能在沒有對象時自然出現。若一句說 I left it there，前面應先提到物品和地點。排列後逐一檢查每個短詞是否都有清楚來源。" },
      { title: "最後一句通常完成而非重開任務", content: "Great, see you then、Thanks, I will do that、All right, we have a plan 都能收束。若最後一句又問出尚未回答的新問題，對話可能尚未完成；除非題目刻意呈現新的話題，否則要重新檢查排序。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S229_EX_01", prompt: "A. At the front desk. B. Where can I get a map? C. Thanks, I will go there. D. You are welcome.", steps: ["B 先提出問題。", "A 提供地點。", "C 以 there 承接並致謝，D 回應感謝。"], answer: "B-A-C-D", why: "問地點必須先於地點答案，there 需要 front desk 作先行資訊，You are welcome 則自然放在 Thanks 後。" },
      { id: "ENG_R4_L_S229_EX_02", prompt: "A. Saturday morning is fine. B. Would you like to study together? C. Good. I will bring my notes. D. How about Saturday morning?", steps: ["B 發出邀請。", "D 提議具體時間。", "A 接受該時間，C 完成安排。"], answer: "B-D-A-C", why: "fine 必須回應一個已提出的時段；Good 又承接同意並說明下一步，因此功能順序唯一。" },
      { id: "ENG_R4_L_S229_EX_03", prompt: "A. It is blue with a white star. B. I lost my lunch bag. C. What does it look like? D. I will check the office for it.", steps: ["B 先提出遺失物。", "C 追問外觀。", "A 回答特徵，D 承諾查找。"], answer: "B-C-A-D", why: "it 在 C 中指 lunch bag，A 的顏色回答外觀，最後才能根據完整資訊去查找。" },
    ],
    misconceptions: [
      { belief: "有問號的句子一定是第一句。", whyWrong: "追問也有問號，且需要前文。", correction: "判斷問句是否已依賴某個人物、物品或提議。" },
      { belief: "Thanks 一定是整段最後一句。", whyWrong: "對方可能再回 You are welcome。", correction: "把致謝和回應致謝視為一組。" },
      { belief: "只要每兩句能接，整體順序就正確。", whyWrong: "代名詞可能仍沒有來源，任務也可能尚未完成。", correction: "完成局部排列後，再從頭檢查整體目的。" },
      { belief: "句子較長就應排在後面。", whyWrong: "長度與溝通階段沒有必然關係。", correction: "依開場、資訊交換與收束功能排序。" },
    ],
    checks: [
      { prompt: "Yes, Friday works 之前至少要出現什麼？", answer: "星期五的提議或詢問", reason: "works 是對已提出時段的接受。" },
      { prompt: "I put it there 需要哪兩類先行資訊？", answer: "物品與地點", reason: "it 和 there 分別承接兩種資訊。" },
      { prompt: "You are welcome 通常排在 Thanks 前還是後？", answer: "後", reason: "它用來回應對方的感謝。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S230", "ENG_R4_S230", {
    objectives: ["能由簡短回應與後續語句分辨同意、保留、疑問和拒絕。", "能依文字證據控制推論強度，不把委婉語誤判成肯定。"],
    sections: [
      { title: "同意通常帶有採取行動的方向", content: "Sounds good、Sure、That works for me 往往表示接受。若後面再說 I will bring the food，同意更明確。即使看到 Sounds good 仍要讀後文；Sounds good, but I cannot stay long 是有條件接受，不是完全支持所有安排。" },
      { title: "疑問與保留會要求更多證據", content: "Are you sure?、I am not sure、Maybe, but... 都沒有直接接受。說話者可能需要確認時間、成本或風險。題目若問態度，應答 not sure 或 needs more information，不能因有 maybe 就當成同意。" },
      { title: "拒絕常以理由或替代方案表達", content: "I would rather not、I cannot make it、That is kind of you, but... 都可婉拒。拒絕不一定出現 no；提供另一個日期也可能表示拒絕原日期，同時願意繼續協調。要指出被拒絕的是哪個具體提議。" },
      { title: "短回應要和完整語境合讀", content: "Really? 可能是驚訝、懷疑或單純要求確認，單獨不能定案。若前句說 The store is open at midnight，後句接 Really? I thought it closed at ten，文字支持懷疑。推論應保留 may 或 seems，避免宣稱說話者必然生氣。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S230_EX_01", prompt: "A: Shall we walk home? B: Sounds good. The rain has stopped.", steps: ["辨認提議。", "Sounds good 表示接受。", "雨停提供接受的實際條件。"], answer: "B agrees to walk home.", why: "回應明確正向，後句又支持立即採取該行動，因此不是保留或拒絕。" },
      { id: "ENG_R4_L_S230_EX_02", prompt: "A: The test is on Thursday. B: Are you sure? My note says Friday.", steps: ["Are you sure 要求確認。", "後句提出相反資料。", "判斷 B 對 Thursday 有疑問。"], answer: "B doubts the stated day.", why: "B 沒有接受星期四，而是用自己的筆記提出衝突證據；最精確的態度是懷疑並求證。" },
      { id: "ENG_R4_L_S230_EX_03", prompt: "A: Can you join us tonight? B: I cannot tonight, but Saturday is free.", steps: ["今晚邀請是原提議。", "cannot 明確拒絕今晚。", "Saturday 提供替代時段。"], answer: "B cannot meet tonight but is willing to meet another day.", why: "拒絕範圍只限 tonight，替代日期顯示並非拒絕所有碰面機會。" },
    ],
    misconceptions: [
      { belief: "Maybe 等於 yes。", whyWrong: "它保留可能性，沒有作出承諾。", correction: "若沒有明確決定，標記為不確定或需更多資訊。" },
      { belief: "沒有 no 就不可能是拒絕。", whyWrong: "英文常以不能參加或另提時間婉拒。", correction: "找出是否接受原提議的時間與行動。" },
      { belief: "Really? 一定表示生氣。", whyWrong: "它也可能表示驚訝或求證。", correction: "使用後句證據判斷，線索不足時降低推論強度。" },
      { belief: "有條件同意和完全同意相同。", whyWrong: "but 後的限制會縮小承諾範圍。", correction: "把接受內容與限制條件一起表述。" },
    ],
    checks: [
      { prompt: "That works for me 最常表示什麼？", answer: "同意安排", reason: "說話者表示所提方案符合自己的情況。" },
      { prompt: "I cannot Friday, but Sunday is fine 是否拒絕所有碰面？", answer: "不是", reason: "只拒絕星期五並提出星期日替代。" },
      { prompt: "Are you sure? 後又提出不同資料，態度為何？", answer: "懷疑並求證", reason: "相反資料使原說法尚未被接受。" },
    ], assets: [],
  }),
];

export const ENGLISH_U33_QUESTIONS = [
  ...skillQuestions("225", [
    q("A: Why are your shoes wet?\nB: ___.\nA: Put them by the door to dry.", ["I walked here in the rain.", "The door is made of wood.", "These shoes were not cheap.", "I will wear them next week."], 0, ["冒雨走來直接說明鞋子濕，也引出晾乾。", "門的材質不能解釋濕鞋。", "價格和目前狀態無關。", "下週穿鞋沒有回答 why。"], ["前句的原因問句與後句的晾乾行動都得到承接。", "其餘選項雖談鞋或門，沒有形成因果鏈。"], "complete-wet-shoes-cause-and-drying-response", "three-turn-causal-dialogue", "match-only-nearby-noun"),
    q("A: Could you feed my fish after school?\nB: ___.\nA: Thanks. The food is beside the tank.", ["Fish can swim very well.", "Sure, I can do that.", "The tank is full of water.", "After school was fun."], 1, ["魚會游泳不是對請求的回應。", "答應餵魚能自然得到感謝與飼料位置。", "魚缸有水仍未表示是否幫忙。", "句子談過去感受，沒有接受任務。"], ["第二項完成請求、接受與後續指示。", "food 的位置只對已答應餵魚的人有用。"], "restore-accepted-fish-feeding-request", "request-gap-dialogue", "answer-topic-without-accepting-request"),
    q("A: I cannot find Room 12.\nB: ___.\nA: That will help. Thank you.", ["Room 12 has two windows.", "I lost my bag yesterday.", "Follow me; I am going there.", "The class ended at noon."], 2, ["窗戶數量不能協助找路。", "遺失袋子轉到無關問題。", "帶路前往該教室能得到 that will help 的回應。", "下課時間沒有解決地點困難。"], ["there 有明確的 Room 12 作指向。", "第三項同時提供立即可行的協助。"], "supply-guidance-for-missing-classroom", "location-help-exchange", "choose-related-fact-that-does-not-help"),
    q("A: The blue cup is broken.\nB: ___.\nA: Good idea. The green one is clean.", ["Blue is my favorite color.", "The cup was on the table.", "I drank water this morning.", "Let's use the green cup."], 3, ["喜歡藍色無法處理裂杯。", "舊位置不會引出改用綠杯。", "早上的飲水事件與目前選擇無關。", "改用乾淨綠杯正是可接受的替代方案。"], ["Good idea 反向證明缺句需是建議。", "後句確認綠杯狀態，使替代選擇成立。"], "infer-replacement-suggestion-from-good-idea", "problem-solution-dialogue-gap", "select-description-instead-of-solution"),
    q("A: Do you need this book today?\nB: ___.\nA: All right. I will return it before lunch.", ["Yes, my class uses it this afternoon.", "The cover is yellow and white.", "I read a different story last month.", "Lunch is in the dining room."], 0, ["下午要用書說明今天需要，也支持午餐前歸還。", "封面顏色沒有回答需要與否。", "上月讀別篇故事不影響今天用書。", "餐廳位置不是歸還期限的原因。"], ["時間需求從 this afternoon 連到 before lunch。", "第一項讓 A 的歸還承諾具體且必要。"], "connect-afternoon-book-need-to-return-promise", "need-and-deadline-dialogue", "confuse-book-description-with-current-need"),
    q("A: I called you at eight last night.\nB: ___.\nA: I see. Were you at basketball practice?", ["Eight is my favorite number.", "Sorry, my phone was inside my bag.", "I will call Nina tomorrow morning.", "Basketball needs a large ball."], 1, ["偏好數字不能說明未接電話。", "手機收在袋裡可解釋沒有接到電話。", "明日打給別人不是昨晚的原因。", "球的大小沒有承接 I see。"], ["I see 顯示 A 接收到一項合理解釋。", "追問練習地點也和手機放在袋中相容。"], "fill-missed-call-explanation-before-follow-up", "past-event-explanation-dialogue", "respond-to-time-with-number-preference"),
    q("A: When will the next bus come?\nB: ___.\nA: Then we have time to buy a snack.", ["The driver wears a blue hat.", "This bus goes to the lake.", "It will be here in twenty minutes.", "The snack shop sells hot soup."], 2, ["司機衣著不提供等候時間。", "路線資訊不能支持先買點心。", "二十分鐘後到站讓兩人有空檔購物。", "商店商品沒有回答公車何時來。"], ["Then 指向由二十分鐘空檔產生的決定。", "第三項是唯一同時回答 when 並支持後續行動的句子。"], "bridge-bus-arrival-time-to-snack-plan", "time-answer-with-resulting-plan", "choose-place-related-detail-not-time"),
    q("A: I finished the poster, but the title looks too small.\nB: ___.\nA: You're right. I will use larger letters.", ["The poster is beside the door.", "I finished my lunch early.", "Small cards are easy to carry.", "People in the back may not read it."], 3, ["海報位置沒有說明標題問題。", "午餐進度是無關事件。", "卡片攜帶性和海報可讀性不同。", "後排看不清楚正好支持放大字體。"], ["You're right 確認 B 對可讀性的判斷。", "it 明確指向太小的標題或海報文字。"], "explain-small-title-risk-before-revision", "poster-feedback-dialogue", "associate-small-with-portability"),
    q("A: Do you still need the red umbrella?\nB: ___.\nA: Good. May I take it to the game?", ["No, I brought my raincoat today.", "Red umbrellas are easy to see.", "The game begins after dinner.", "It was under the chair yesterday."], 0, ["已有雨衣表示不再需要傘，A 才能借走。", "容易看見不代表可供借用。", "比賽時間沒有回答傘的需求。", "昨天的位置不等於今天能否拿走。"], ["Good 反映物品已可借出的結果。", "第一項清楚解除 B 對紅傘的當日需求。"], "resolve-umbrella-availability-from-raincoat", "object-availability-dialogue", "use-past-location-as-current-permission"),
    q("A: What did the doctor tell you?\nB: ___.\nA: Then do not carry that heavy box.", ["The hospital has a new door.", "My arm needs to rest for two days.", "I met Eric near the bus stop.", "The box belongs to our team."], 1, ["醫院的門不是醫囑。", "手臂需休息直接引出不要搬重物。", "遇見朋友沒有健康建議。", "所有權不會改變手臂負擔。"], ["Then 表示 A 依醫囑提出保護行動。", "兩天休息是唯一能解釋避免重物的內容。"], "recover-medical-advice-from-heavy-box-response", "advice-and-consequence-dialogue", "choose-location-fact-from-doctor-setting"),
    q("A: The music room is locked, and our class starts soon.\nB: ___.\nA: I will call her now.", ["Our class sang that song yesterday.", "The lock is silver.", "Ms. Lee may still have the key.", "Soon is not a long time."], 2, ["昨天唱歌不能開門。", "鎖的顏色不是解決方法。", "老師可能有鑰匙，合理引出打電話給她。", "解釋 soon 沒有處理上鎖問題。"], ["her 需要前句的女性人物 Ms. Lee。", "第三項同時提供可行方案與電話對象。"], "introduce-key-holder-for-pronoun-call", "locked-room-solution-dialogue", "offer-definition-instead-of-solution"),
    q("A: The note says the room changes at three, not the meeting time.\nB: ___.\nA: Yes, we should be there by two thirty.", ["Room three is on the first floor.", "The note was written in blue.", "Meetings can be useful.", "I see. I read the note the wrong way."], 3, ["第三號房不是 at three 的意思。", "墨水顏色不能解釋時間誤會。", "會議用途沒有回應更正。", "承認誤讀自然引出確認兩點半到場。"], ["not the meeting time 明確修正先前理解。", "第四項承接更正，後句再確認正確安排。"], "acknowledge-room-change-time-misreading", "correction-dialogue-gap", "treat-number-as-room-without-syntax"),
  ]),
  ...skillQuestions("226", [
    q("A: Where is the nearest post office?\nB: ___", ["Beside the bank.", "On Monday morning.", "For about an hour.", "My uncle works there."], 0, ["銀行旁邊直接提供地點。", "星期一上午是時間。", "一小時是持續長度。", "叔叔在那裡工作沒有指出位置。"], ["Where 只要求可定位的場所資訊。", "第一項可讓問路者直接採取下一步。"], "answer-where-with-landmark-location", "basic-wh-reply", "answer-place-question-with-time"),
    q("A: When can we use the science room?\nB: ___", ["Beside the office.", "After lunch.", "With our teacher.", "For the class plants."], 1, ["辦公室旁是地點。", "午餐後提供可使用的時間。", "和老師一起說明陪同者。", "班級植物說明用途。"], ["When 與 after lunch 的資料類型一致。", "其他選項各回答 where、who with 或 why。"], "answer-room-availability-with-time", "school-schedule-question", "match-related-room-detail-not-question-word"),
    q("A: Who will lead the school walk?\nB: ___", ["At the front gate.", "At nine o'clock.", "Our science teacher.", "To see the river."], 2, ["前門是集合地點。", "九點是時刻。", "自然老師是能帶隊的人物。", "看河流是活動目的。"], ["Who 限定答案必須是人物或人物群體。", "第三項沒有把地點、時間與目的混入人物回答。"], "identify-person-required-by-who", "event-role-question", "select-event-detail-of-wrong-type"),
    q("A: How often does the club meet?\nB: ___", ["In Room 4.", "For forty minutes.", "Because we enjoy drawing.", "Twice a week."], 3, ["教室是地點。", "四十分鐘是每次長度。", "喜歡畫畫是原因。", "每週兩次直接表達頻率。"], ["How often 要計算重複間隔或次數。", "第四項不會和 how long 混淆。"], "distinguish-frequency-from-duration", "club-frequency-question", "answer-how-often-with-length"),
    q("A: Why did Nina leave the party early?\nB: ___", ["Because she had a headache.", "At half past eight.", "Through the side door.", "With her cousin."], 0, ["頭痛能說明提早離開的原因。", "八點半只說何時離開。", "側門只說從哪裡離開。", "和表親只說同行者。"], ["Because 建立提早離場的因果。", "第一項是唯一回答 why 而非事件附帶資訊的內容。"], "provide-cause-for-early-departure", "past-event-why-question", "confuse-cause-with-time-of-event"),
    q("A: Which jacket should I take, the black one or the light green one?\nB: ___", ["Your jacket is in the hall.", "Take the light green one; today is warm.", "You bought a jacket last year.", "The bus leaves at ten."], 1, ["位置資訊沒有在兩件中作選擇。", "明確選淺綠外套並給出天氣理由。", "購買時間無法決定今天穿哪件。", "公車時刻和外套選擇無關。"], ["Which 要求從已列選項中指定一件。", "第二項的理由也與較暖天氣相符。"], "select-one-of-two-jackets-directly", "choice-and-reason-reply", "mention-object-location-without-choice"),
    q("A: How much are the four notebooks together?\nB: ___", ["Four notebooks.", "On the second shelf.", "They are twelve dollars in all.", "They are for my classmates."], 2, ["重複數量沒有提供總價。", "書架位置不回答金額。", "十二元總計直接回答 together 的價格。", "用途不是費用。"], ["How much 在購物語境中要求金額。", "in all 對應四本合計而非單價。"], "calculate-response-type-for-total-price", "shopping-total-question", "repeat-item-count-instead-of-cost"),
    q("A: Did you bring the library card?\nB: ___", ["The library is quiet today.", "It has my name on it.", "I use it for books.", "No, I left it on my desk."], 3, ["圖書館氣氛沒有回答是否帶卡。", "卡上姓名只描述物品。", "用途也不能確認目前持有。", "No 加上留在桌上清楚回答未帶。"], ["一般疑問句先得到否定，再由位置補足原因。", "it 的兩次使用都指向 library card。"], "answer-did-question-with-clear-negative", "yes-no-object-possession-question", "describe-object-without-answering-possession"),
    q("A: Whose lunch box is on the piano?\nB: ___", ["It belongs to Lily.", "It has rice and eggs in it.", "It arrived before noon.", "It is under the music books."], 0, ["belongs to Lily 明確指出所有者。", "內容物不能回答是誰的。", "到達時間不是所有權。", "更精確的位置仍沒有主人資訊。"], ["Whose 的核心是人與物的所有關係。", "第一項不因 lunch box 的其他細節而偏題。"], "resolve-whose-with-ownership-statement", "ownership-question", "answer-owner-question-with-content"),
    q("A: How long will the train ride take?\nB: ___", ["It leaves from Gate 6.", "About forty minutes.", "It comes every hour.", "We will visit my aunt."], 1, ["第六門是出發位置。", "約四十分鐘表示旅程長度。", "每小時一班是頻率。", "探望阿姨是旅行目的。"], ["How long 詢問單次旅程持續多久。", "第二項和 every hour 的班次頻率清楚區分。"], "answer-trip-duration-not-service-frequency", "travel-duration-question", "confuse-how-long-with-how-often"),
    q("A: What does 'Visitors must wait outside' mean?\nB: ___", ["Workers should leave the building.", "The outside door is broken.", "People visiting cannot enter yet.", "Everyone must wait after work."], 2, ["標示對象是訪客，不是工作人員。", "文字沒有說門故障。", "訪客目前要在外等候，不能進入。", "規則不是針對所有人或下班後。"], ["回答同時保留 visitors、wait 與 outside。", "第三項沒有把限制擴大到未指定的人。"], "paraphrase-visitor-waiting-rule", "notice-meaning-question", "expand-limited-audience-to-everyone"),
    q("A: Could you show me how to turn on this screen?\nB: ___", ["The screen was expensive.", "I watched a show last night.", "You could ask about it tomorrow.", "Certainly. Push this green button first."], 3, ["價格不是操作協助。", "昨晚節目與目前請求無關。", "延後詢問沒有回應當下求助。", "答應後給第一步，直接完成請求。"], ["Could you 在此是禮貌請求，不是能力測驗。", "第四項提供立即可執行的操作。"], "respond-to-polite-operation-request", "help-request-dialogue", "treat-could-you-as-abstract-ability"),
  ]),
  ...skillQuestions("227", [
    q("Amy handed Ben a map. Ben looked at it and put it in his coat. What did Ben put in his coat?", ["The map", "Amy's coat", "A book", "His phone"], 0, ["it 承接 Amy 交給 Ben 的地圖。", "外套是容器，不是被放入的物品。", "短文沒有書。", "手機也未出現。"], ["物品鏈由 handed 到 looked at 再到 put 保持一致。", "最近的 coat 不能反向成為自己的內容物。"], "track-map-through-three-actions", "micro-narrative-object-tracking", "attach-it-to-nearest-noun"),
    q("Mia: The art class moved from Room 2 to Room 5.\nLeo: Thanks. I will meet you there at four.\nWhere will Leo meet Mia?", ["Room 2", "Room 5", "The library", "The front gate"], 1, ["第二教室是變更前地點。", "there 指向更新後的第五教室。", "圖書館沒有出現在對話。", "前門也不是碰面地點。"], ["moved from...to... 更新了實際教室。", "there 應承接最新且合理的地點。"], "resolve-there-after-room-change", "two-speaker-location-update", "keep-original-location-after-change"),
    q("Rosa will bring the plates. Omar will buy the fruit. Nina has the drinks in her bag. Who has the drinks now?", ["Rosa", "Omar", "Nina", "No one"], 2, ["Rosa 負責盤子。", "Omar 負責水果。", "Nina 的袋子裡已有飲料。", "飲料已有明確持有人。"], ["三個人物各自對應不同物品。", "has 表示現在狀態，不只是未來計畫。"], "match-nina-to-current-drink-possession", "parallel-role-list", "swap-items-between-listed-people"),
    q("David gave the key to Kim. She opened the music room and returned it to him. Who had the key at the end?", ["The music teacher", "Kim", "The room", "David"], 3, ["音樂老師未出現。", "Kim 中途拿到鑰匙，但後來歸還。", "房間被打開，不是持有人。", "him 指 David，所以最後回到 David 手上。"], ["兩次轉移都要依序更新持有人。", "she 與 him 分別對應 Kim 和 David。"], "track-key-return-to-original-owner", "pronoun-transfer-chain", "stop-tracking-after-first-transfer"),
    q("Ben: I left the blue bag beside the office.\nAmy: I moved it under the front desk so no one would step on it.\nWhere is the bag now?", ["Under the front desk", "Beside the office", "On the bus", "Inside Amy's room"], 0, ["Amy 的 moved 更新了袋子最後位置。", "辦公室旁只是初始位置。", "公車未被提到。", "Amy 的房間也沒有文字支持。"], ["now 要採用第二位說話者完成移動後的狀態。", "under 與 beside 的位置關係不能混用。"], "update-blue-bag-to-protected-location", "dialogue-location-change", "answer-current-location-with-starting-point"),
    q("Lily will meet Sam at the park after lunch. He will bring a ball, and she will bring water. What will Sam bring?", ["Water", "A ball", "Lunch", "A park map"], 1, ["she 指 Lily，所以水由 Lily 帶。", "he 指 Sam，因此 Sam 帶球。", "午餐是時間參照，不是攜帶物。", "短文沒有公園地圖。"], ["性別代名詞將兩項物品分配給不同人物。", "after lunch 不表示有人帶午餐。"], "assign-ball-to-sam-by-pronoun", "plan-with-pronoun-roles", "treat-time-noun-as-carried-object"),
    q("The team will practice in the gym on Tuesday. On Thursday, it will use the sports ground. Where will the team practice later in the week?", ["At home", "In the gym", "On the sports ground", "In the classroom"], 2, ["家中未列為練習地點。", "體育館只對應較早的星期二。", "較晚的星期四使用運動場。", "教室沒有出現。"], ["later in the week 要比較 Tuesday 與 Thursday。", "it 指整個 team，不是 gym。"], "select-later-team-practice-location", "weekly-plan-reference", "ignore-time-order-between-locations"),
    q("Eric told Ken, 'Please give this note to Mia before class.' Ken put it on Mia's chair. Who was meant to receive the note?", ["Eric", "Ken", "The teacher", "Mia"], 3, ["Eric 是最初說話者。", "Ken 是傳遞者。", "老師沒有被指定接收。", "to Mia 與放在她椅上都確認接收者。"], ["說話、傳遞與接收三種角色已分開。", "椅子位置提供第二項指向 Mia 的證據。"], "identify-final-note-recipient-across-roles", "reported-request-transfer", "choose-messenger-as-recipient"),
    q("Nina put the cake in the kitchen before she went to the garden. Omar found it there and carried it to the dining room. Where is the cake finally?", ["In the dining room", "In the kitchen", "In the garden", "With Nina outside"], 0, ["Omar 最後把蛋糕移到餐廳。", "廚房是 Omar 找到前的位置。", "花園是 Nina 去的地方，不是蛋糕位置。", "蛋糕已由 Omar 搬走。"], ["finally 要採用最後一個 carried 動作。", "there 在 found it there 時仍指 kitchen。"], "follow-cake-from-kitchen-to-dining-room", "multi-location-action-chain", "merge-person-destination-with-object-location"),
    q("The morning bus leaves at eight. The afternoon bus leaves at three. Leo says, 'I have class until noon, so I will take the later one.' Which bus will Leo take?", ["The eight o'clock bus", "The three o'clock bus", "Both buses", "Neither bus"], 1, ["早班車發車時 Leo 仍有上午安排。", "later one 指下午三點的車。", "同一趟旅程不需搭兩班。", "文字已明確選擇較晚班次。"], ["one 替代 bus，later 需比較兩個時刻。", "until noon 與三點班次在時間上相容。"], "resolve-later-one-to-afternoon-bus", "schedule-substitution-reference", "interpret-later-as-next-day"),
    q("Amy invited Rosa and Kim to dinner. Rosa could not come, but Kim arrived with her brother. How many invited friends came?", ["None", "Three", "One", "Two"], 2, ["Kim 確實到場。", "弟弟不是 Amy 原先邀請的兩位朋友之一。", "受邀者中只有 Kim 到場。", "Rosa 已明確不能來。"], ["題目限定 invited friends，不能把陪同家人加入。", "Rosa 和 Kim 的出席狀態分別有文字證據。"], "count-only-invited-friends-who-arrived", "attendance-role-inference", "count-every-arriving-person-as-invited"),
    q("Mia: Put the plant near the window this morning.\nBen: I did. After lunch, the sun became too strong, so I moved it beside the bookcase.\nWhat happened after lunch?", ["Mia watered the plant.", "Ben opened the window.", "The plant stayed in the sun.", "Ben moved the plant away from the window."], 3, ["沒有澆水事件。", "窗戶也沒有被打開。", "強光使 Ben 改變位置。", "移到書櫃旁表示離開窗邊。"], ["after lunch 精確定位第二次動作。", "it 持續指 plant，sun 只是搬動原因。"], "identify-post-lunch-plant-movement", "time-marked-dialogue-update", "retain-morning-state-after-later-change"),
  ]),
  ...skillQuestions("228", [
    q("A: We have bread and fruit for the picnic.\nB: What about water?\nWhat does B do?", ["Adds another picnic need", "Changes to a school subject", "Ends the picnic plan", "Asks where the park is"], 0, ["水是野餐準備的另一項需求。", "沒有談任何學科。", "問句仍推進計畫，並未結束。", "B 沒有詢問公園位置。"], ["What about 在此延續共同準備清單。", "fruit 到 water 是同主題內的項目擴充。"], "classify-what-about-water-as-continuation", "topic-function-dialogue", "treat-new-noun-as-topic-change"),
    q("A: I finished the book you gave me.\nB: Did you like the ending?\nA: ___. It made me think about my family.", ["The library opens at nine.", "Yes, it was my favorite part.", "My family lives near a river.", "I need a new notebook."], 1, ["開館時間中斷閱讀話題。", "評價結尾能承接問題與後句感受。", "家庭住處只被 think about 誘發，未回答 ending。", "筆記本需求是另一任務。"], ["it 在兩句中都可清楚指故事結尾。", "第二項保持在閱讀感受而不被 family 一字帶走。"], "continue-book-ending-evaluation", "same-topic-gap", "follow-late-word-into-unmarked-topic-change"),
    q("A: The bus was crowded this morning.\nB: Mine was too.\nA: Now, back to our plan: shall we meet at the library at four?\nWhat do the words 'back to our plan' show?", ["They give a reason for the crowd.", "They add another bus fact.", "They return to the meeting plan.", "They show the library is closed."], 2, ["後句沒有解釋擁擠原因。", "說話者停止談公車。", "訊號把對話拉回碰面安排。", "四點碰面不表示圖書館關閉。"], ["back to 前後的主題由公車插話轉回約定。", "第三項描述的是篇章作用而非單字表面意思。"], "interpret-back-to-as-return-to-plan", "discourse-marker-function", "read-marker-as-causal-link"),
    q("A: Your soup smells good.\nB: Thanks. My father taught me to make it.\nA: Speaking of your father, is he feeling better?\nWhat happens in the third line?", ["The speakers return to how the soup is made.", "The speaker refuses the soup.", "The speaker asks for more food.", "The topic moves from soup to the father of B."], 3, ["第三句不再問作法。", "沒有拒絕或負面回應。", "也沒有要求更多食物。", "speaking of 以 father 為橋轉向健康近況。"], ["父親先作為教做湯的人出現，再成為新焦點。", "轉題有明確語意連結，不是任意跳躍。"], "detect-speaking-of-topic-shift", "linked-topic-transition", "mistake-linked-shift-for-same-subtopic"),
    q("A: We need two more chairs for the meeting.\nB: Also, the front table is too small.\nHow are the two lines brought together?", ["Both are about preparing the meeting room.", "The second line says who will join.", "The speakers begin talking about food.", "The second line says the meeting will not happen."], 0, ["椅子與桌子都是會議空間配置。", "沒有出席者資料。", "也沒有食物或購買。", "桌子太小不等於取消。"], ["Also 明示在同一準備主題加入問題。", "兩項資訊共同服務會議空間安排。"], "connect-also-table-to-room-setup", "additive-topic-relation", "assume-new-object-means-new-event"),
    q("A: Did you fix the bike light?\nB: Yes, it works now. By the way, your blue bag is still at my house.\nWhich topic is introduced after 'By the way'?", ["How to fix a light", "The place of a bag", "The color of the bike", "A ride to the house of B"], 1, ["修燈話題已在 Yes 後完成。", "訊號後的新資訊是藍袋仍在 B 家。", "blue 修飾 bag，不是自行車。", "沒有安排騎車前往。"], ["轉換訊號後直接尋找新的中心名詞與狀態。", "第二項只陳述袋子位置，沒有擴張成旅行計畫。"], "locate-new-bag-topic-after-marker", "explicit-topic-shift", "carry-old-bike-topic-into-new-clause"),
    q("A: The movie starts at seven.\nB: We should leave at six, then.\nA: Another thing: the tickets are on my desk.\nWhat does the last line add?", ["A different movie", "A reason to leave later", "Something needed for the same trip", "A plan to study at the desk"], 2, ["沒有第二部電影。", "票券位置不支持更晚出發。", "取票是同一趟看電影需要的資訊。", "desk 只是票券位置。"], ["Another thing 加入同一活動的額外準備事項。", "第三項保持 outing 範圍，不把 desk 誤成新任務。"], "classify-ticket-location-as-same-outing-detail", "same-event-addition", "turn-location-word-into-new-activity"),
    q("A: The garden needs water every morning.\nB: I can do that before breakfast.\nA: Good. Before I forget, please return the key to the office today.\nWhat do the words 'Before I forget' show?", ["A reason the garden is dry", "A choice not to water the garden", "A change in breakfast time", "A new note about the key"], 3, ["乾燥原因沒有被說明。", "B 已答應澆水。", "早餐時間未改變。", "說話者引入另一項怕忘記的待辦。"], ["提醒內容從澆水轉到歸還鑰匙。", "第四項準確描述訊號後的溝通功能。"], "identify-before-i-forget-reminder-shift", "task-transition-marker", "treat-marker-as-time-for-first-task"),
    q("A: The first train is full.\nB: Then let's take the next one.\nA: Yes. It leaves only fifteen minutes later.\nWhat keeps the talk on one topic?", ["Each line is about choosing a train.", "Each line tells about the station food.", "The speakers talk about three cities.", "The last line begins a lesson."], 0, ["滿座、下一班與晚十五分鐘都在比較列車。", "沒有車站食物。", "城市也未出現。", "最後一句仍是交通資訊。"], ["代名詞 it 延續 next one 的列車指涉。", "時間差補充同一選擇而非轉題。"], "trace-single-train-choice-topic", "cohesive-topic-chain", "require-exact-word-repetition-for-continuity"),
    q("A: My dog did not eat this morning.\nB: Is he sick?\nA: Maybe. About the food, did you open a new bag?\nWhy does A say 'About the food'?", ["To end the conversation", "To focus on one possible cause", "To invite B to eat", "To change from the dog to school"], 1, ["A 繼續追查問題，沒有結束。", "說話者把焦點放到飼料是否更換。", "問題不是邀請 B 吃。", "完全沒有學校話題。"], ["About the food 明確框定接下來要查的面向。", "第二項保留它與狗不吃東西的因果關聯。"], "use-about-phrase-to-narrow-topic", "topic-narrowing-question", "classify-subtopic-focus-as-unrelated-shift"),
    q("A: I liked the museum, especially the old photos.\nB: They showed how the town changed.\nA: That reminds me: our history report must be finished by Friday.\nHow are the two topics brought together?", ["The museum closes Friday.", "The report is only about taking photos.", "The old photos bring the history work to mind.", "The town asks students for reports."], 2, ["星期五只屬於報告期限。", "內容沒有把報告限制為攝影。", "舊照片呈現歷史，因而讓 A 想到歷史報告。", "城鎮沒有提出作業。"], ["That 指前述照片與城鎮變化的內容。", "第三項說明自然聯想，但不杜撰報告題目。"], "infer-associative-bridge-to-history-report", "topic-association-transition", "invent-shared-date-as-topic-link"),
    q("A: We can paint the signs after lunch.\nB: The yellow paint is in Room 6.\nA: Fine. Now, back to the morning plan: who will clean the tables?\nWhat does the last speaker do?", ["Changes the sign color", "Moves lunch to the morning", "Cancels the cleaning", "Returns to an earlier planning question"], 3, ["沒有改變黃色選擇。", "午餐時間也未被移動。", "清桌工作仍要分配。", "back to 明確把對話拉回上午規畫。"], ["說話者以直接標記結束油漆插話。", "第四項描述回題，而不是另一個全新話題。"], "recognize-back-to-as-topic-return", "explicit-return-marker", "interpret-morning-reference-as-time-change"),
  ]),
  ...skillQuestions("229", [
    q("A. At the desk beside the door.\nB. Where should I return this key?\nC. Thank you. I see it now.\nD. You're welcome.\nWhich order forms a complete conversation?", ["B-A-C-D", "A-B-D-C", "C-A-B-D", "B-C-A-D"], 0, ["先問歸還處，再獲地點、致謝並回應致謝。", "答案在問題前出現，且致謝順序顛倒。", "I see it 沒有先行位置。", "尚未得到地點就先說看到了。"], ["四個功能依問題、回答、確認、收束排列。", "it 能承接 desk，而 You're welcome 緊接 Thank you。"], "order-key-return-location-exchange", "four-line-ordering", "place-answer-before-question"),
    q("A. Friday afternoon works for me.\nB. Would you like to practice the song together?\nC. Great. I will bring my guitar.\nD. How about Friday afternoon?\nWhich order makes sense?", ["D-A-B-C", "B-D-A-C", "B-A-D-C", "A-C-B-D"], 1, ["時間提議在邀請前，缺少活動。", "邀請、提時段、接受、準備物品形成完整安排。", "A 的 Friday 沒有先被提出。", "直接接受時段且帶樂器，卻尚未邀請。"], ["works for me 必須承接 D 的具體時段。", "Great 在同意後收束並加入下一步。"], "sequence-song-practice-invitation", "plan-making-order", "accept-time-before-time-proposal"),
    q("A. It has a green cover and my name inside.\nB. I cannot find my notebook.\nC. What does it look like?\nD. I will check the reading room for it.\nWhich order should the lines follow?", ["C-A-B-D", "B-A-C-D", "B-C-A-D", "A-B-D-C"], 2, ["外觀問題在遺失事件前。", "A 回答尚未提出的外觀問題。", "先報失、追問特徵、回答、承諾查找。", "外觀先出現且最後才問外觀。"], ["it 從 notebook 延續到外觀與查找。", "D 需等物品特徵完整後才自然出現。"], "arrange-lost-notebook-description-flow", "lost-item-dialogue-order", "describe-object-before-introduction"),
    q("A. Yes, one bowl is enough.\nB. How much soup would you like?\nC. Here you are.\nD. Would you like some soup?\nWhich order completes the talk?", ["B-A-D-C", "D-C-B-A", "A-B-D-C", "D-B-A-C"], 3, ["先問份量卻尚未提供湯。", "上菜發生在份量詢問前。", "回答份量成了開場。", "先邀請、問份量、回答，再端上。"], ["one bowl 回答 how much，而 Here you are 是實際交付。", "第四項讓每個回應都有唯一前句。"], "order-soup-offer-and-serving", "service-dialogue-sequence", "serve-before-learning-amount"),
    q("A. The number six bus stops there.\nB. Excuse me, how can I get to the hospital?\nC. At the corner across from the bank.\nD. Where can I catch that bus?\nWhich order makes sense?", ["B-A-D-C", "A-D-B-C", "B-D-A-C", "D-C-B-A"], 0, ["先問路，得到車次，再追問搭車處並獲位置。", "公車答案沒有先出現醫院問題。", "尚不知道車次就問 that bus。", "that bus 在開頭沒有指向。"], ["that bus 必須承接 number six bus。", "兩組問答依一般資訊到具體位置展開。"], "sequence-two-stage-hospital-directions", "nested-question-order", "use-demonstrative-before-source"),
    q("A. I can help after I finish lunch.\nB. Could you move these chairs with me?\nC. Thanks. I will start with the small ones.\nD. That is fine; the meeting begins at two.\nWhich order makes sense?", ["A-D-B-C", "B-A-D-C", "B-D-A-C", "C-B-A-D"], 1, ["答應協助在請求前。", "先請求，再說可協助時間、確認來得及、致謝並開始。", "D 先判定 fine，卻沒有時間提議。", "致謝與行動成為無來源開場。"], ["That is fine 回應 after lunch 的時間限制。", "最後一行表示請求者接受並先自行開始。"], "arrange-delayed-chair-help-request", "request-with-time-condition", "confirm-condition-before-condition-stated"),
    q("A. It is under the window beside the plant.\nB. I left my phone in the classroom.\nC. Which desk did you use?\nD. Thanks, I will look there.\nWhich order is correct?", ["C-A-B-D", "B-A-C-D", "B-C-A-D", "A-D-B-C"], 2, ["追問在遺失手機前。", "地點回答先於 which 問句。", "先提出手機、問桌位、描述位置，再去找。", "there 在開頭組合中沒有穩定來源。"], ["under the window 是對 which desk 的辨識。", "look there 承接完整位置資訊作收束。"], "order-phone-location-clarification", "place-clarification-order", "provide-location-before-clarifying-question"),
    q("A. No, but I can go on Sunday.\nB. Good. Let's meet at the front gate at ten.\nC. Are you free to visit the market on Saturday?\nD. Sunday works for me too.\nWhich order completes the plan?", ["A-C-D-B", "C-D-A-B", "D-A-C-B", "C-A-D-B"], 3, ["拒絕出現在邀請前。", "D 同意 Sunday，但 Sunday 尚未提出。", "Sunday works 先成為開場。", "先邀週六、改提週日、接受週日、確認細節。"], ["too 需要承接 A 提出的 Sunday。", "最後才有足夠共同日期來決定門口與時間。"], "sequence-alternate-market-day-plan", "rescheduling-dialogue-order", "accept-alternative-before-offered"),
    q("A. I am sorry; I took it by mistake.\nB. This blue umbrella looks like mine.\nC. That's all right. Mine is still by the door.\nD. Is this your umbrella, Rosa?\nWhich order makes sense?", ["D-B-A-C", "B-D-C-A", "A-C-D-B", "D-A-B-C"], 0, ["先詢問所有者、說明相似、道歉，再接受道歉。", "B 不應先於詢問所有者的 D。", "道歉在物品問題前沒有來源。", "A 道歉時尚未說明拿錯原因。"], ["it 在道歉句中承接已辨認的雨傘。", "Mine is still by the door 解釋失誤可被接受。"], "arrange-mistaken-umbrella-apology", "apology-resolution-sequence", "apologize-before-object-identified"),
    q("A. The small room has better light.\nB. Which room should we use for the photo?\nC. All right, I will carry the camera there.\nD. Then let's choose the small room.\nWhich order shows how they decide?", ["A-B-D-C", "B-A-D-C", "B-D-A-C", "D-A-B-C"], 1, ["比較資訊在選擇問題前顯得無來源。", "先問、提供判準、決定，再執行。", "尚未知道光線差異就直接決定。", "決定成為開場，問題反而在後。"], ["Then 表示 D 根據 better light 作結論。", "there 在 C 中指已選定的小房間。"], "order-photo-room-decision", "evidence-to-decision-dialogue", "decide-before-receiving-comparison"),
    q("A. I did, and I put them in the top drawer.\nB. Great. Now we can give them to the new students.\nC. Did you finish the welcome cards?\nD. Which drawer did you use?\nWhich line order makes sense?", ["D-A-C-B", "C-D-A-B", "C-A-D-B", "A-C-B-D"], 2, ["Which drawer 在 cards 尚未出現前。", "D 問抽屜時尚未知道 cards 已完成並收起。", "先確認完成與位置，再追問抽屜，最後說明用途。", "A 的 them 沒有先行詞。"], ["them 從 welcome cards 延續到抽屜與發放。", "D 是根據 A 提到 drawer 產生的追問。"], "sequence-card-completion-and-storage", "object-reference-ordering", "ask-specific-location-before-location-mentioned"),
    q("A. It starts at three, so we should leave by two.\nB. Fine. I will meet you outside the station.\nC. What time does the show begin?\nD. The train ride takes about forty minutes.\nWhich order creates a complete travel plan?", ["D-C-A-B", "C-A-D-B", "A-D-C-B", "C-D-A-B"], 3, ["車程資訊先出現但 show 時間問題被延後。", "兩點離開的結論在知道車程前。", "A 的 it 在 show 尚未提出前。", "先問開演、得知車程、推算離開時間，再確認碰面。"], ["so 的離開結論需要開演時間和車程兩項資料。", "outside the station 是完成計畫後的收束地點。"], "order-show-time-and-travel-calculation", "multi-fact-planning-order", "calculate-departure-before-travel-duration"),
  ]),
  ...skillQuestions("230", [
    q("A: Let's study at the library after school.\nB: Sounds good. I will bring my notes.\nWhat does B mean?", ["B agrees to the plan.", "B asks for a new place.", "B refuses to study.", "B doubts the library is open."], 0, ["正向評語與帶筆記都表示接受。", "B 沒有另問地點。", "也沒有拒絕學習。", "內容未質疑開館狀態。"], ["語句與預告行動提供兩項同意證據。", "答案只涵蓋既有讀書安排。"], "infer-agreement-from-action-commitment", "stance-in-dialogue", "ignore-action-after-positive-reply"),
    q("A: The game begins at six.\nB: Are you sure? My ticket says seven.\nHow does B feel about the stated time?", ["B agrees with no question.", "B doubts the stated time.", "B wants to sell the ticket.", "B is pleased that the game ended."], 1, ["反問與票面資料都表示未接受六點。", "B 以相反資料要求確認。", "沒有出售票券的內容。", "比賽尚未開始，更未結束。"], ["疑問不是無根據情緒，而是來自票上的七點。", "第二項精確描述對時間資訊的懷疑。"], "infer-doubt-from-conflicting-ticket-time", "fact-backed-feeling", "treat-question-as-agreement"),
    q("A: Can you join the walk on Friday?\nB: Maybe, but I need to ask my father first.\nWhat has B decided?", ["B will certainly join.", "B has refused every walk.", "B has not decided yet.", "B moved the walk to Thursday."], 2, ["Maybe 和需先詢問排除確定參加。", "B 沒有拒絕所有活動。", "是否參加仍待父親同意。", "對話沒有星期四。"], ["保留語與前置條件共同顯示尚未決定。", "第三項控制推論，不把可能當承諾。"], "classify-maybe-with-permission-as-undecided", "conditional-response", "upgrade-possibility-to-certainty"),
    q("A: Would you like another bowl of soup?\nB: It was delicious, but I am full.\nWhat does B mean?", ["The soup tasted bad.", "B wants a larger bowl.", "B did not eat any soup.", "B politely refuses more soup."], 3, ["delicious 是正面評價。", "full 表示不需要更多。", "正面評價證明已經吃過。", "先稱讚再說飽了，是婉拒續碗。"], ["but 後的身體狀態決定對提議的回應。", "拒絕範圍是 another bowl，不是否定原本的湯。"], "infer-polite-refusal-from-fullness", "indirect-no-dialogue", "read-praise-as-accepting-more"),
    q("A: We could take the early bus.\nB: That works for me; I can be ready by seven.\nWhat is B doing?", ["Accepting the early bus", "Asking what a bus is", "Saying that seven is too late", "Suggesting no one travel"], 0, ["That works 與七點前準備好都支持接受。", "B 沒有詢問詞義。", "七點被視為可行，不是太晚。", "也沒有反對旅行。"], ["回應直接評估並承諾配合早班車。", "第一項沒有把 ready by seven 誤成發車時間。"], "identify-plan-acceptance-with-readiness", "proposal-response", "mistake-supporting-detail-for-objection"),
    q("A: I think this path reaches the lake.\nB: I'm not sure. The map shows the lake on the other side.\nHow does B answer?", ["By agreeing without question", "By expressing doubt with facts from the map", "By asking to swim", "By refusing to look at the map"], 1, ["I'm not sure 明確不是完全同意。", "地圖上的相反位置支持疑問。", "沒有游泳邀請。", "B 正在使用地圖，不是拒看。"], ["態度與地圖資料在同一回應中都可定位。", "第二項沒有把 doubt 誇大成已證明 A 錯。"], "identify-evidence-based-route-doubt", "claim-and-counterevidence", "treat-not-sure-as-total-rejection"),
    q("A: Could you carry these books upstairs?\nB: I'd rather not. My back still hurts.\nWhat does B mean?", ["A question about the books", "A promise to carry everything", "Saying no because of pain", "Asking for more books"], 2, ["B 沒有詢問書本。", "would rather not 與承諾相反。", "背痛是婉拒搬書的理由。", "也沒有要求增加重量。"], ["拒絕的對象是搬書請求，原因是背部仍痛。", "第三項保留理由而不推成永久不能搬物。"], "infer-refusal-from-preference-and-pain", "request-refusal", "ignore-negative-preference-marker"),
    q("A: Shall we meet at nine tomorrow?\nB: Nine is difficult. Could we make it ten?\nWhat does B want to do?", ["B accepts nine with no change.", "B ends the meeting plan.", "B asks to meet today.", "B rejects nine but offers ten."], 3, ["difficult 表示九點不合適。", "B 仍提出替代時間，沒有結束協調。", "tomorrow 的日期未改。", "十點是對原時段的替代方案。"], ["回應同時含對九點的否定與對十點的建議。", "第四項不會把局部拒絕擴大成拒絕碰面。"], "separate-rejected-time-from-alternative", "rescheduling-stance", "treat-one-time-refusal-as-whole-plan-refusal"),
    q("A: The teacher said the report must be finished today.\nB: Really? I wrote Friday in my notebook.\nWhat does B probably think?", ["B is surprised and not sure about the day.", "B has already turned in the report.", "B knows the teacher changed the day.", "B never wants to write again."], 0, ["Really 與不同筆記顯示驚訝並需確認。", "沒有繳交資訊。", "B 不知道日期是否改變。", "也沒有永久停止寫作的意思。"], ["推論只限對截止日的反應。", "第一項以 not sure 保留尚未求證的狀態。"], "infer-surprise-and-uncertainty-from-note-conflict", "bounded-emotion-inference", "overinfer-anger-from-really"),
    q("A: This red hat would look good on you.\nB: I guess so, but may I see the blue one too?\nHow strongly does B accept the red hat?", ["B refuses to look at any hat.", "B gives a weak yes while considering another hat.", "B certainly buys the red hat.", "B says both hats look terrible."], 1, ["B 願意看帽子，並未拒絕全部。", "I guess so 是較弱同意，but 後仍比較藍帽。", "沒有購買承諾。", "也沒有負面評價兩頂帽子。"], ["語氣強度由 I guess 與替代選擇共同決定。", "第二項避免把暫時認同升高成最終購買。"], "measure-weak-agreement-with-open-alternative", "qualified-agreement", "equate-weak-assent-with-final-choice"),
    q("A: The new rule will help every student.\nB: Maybe. Do we know how many students have tried it?\nWhat does B want before agreeing?", ["A longer school day", "A different teacher", "More facts about the rule", "A promise to avoid students"], 2, ["沒有延長上課的要求。", "教師也不是爭點。", "B 詢問實際試用人數以檢查主張。", "規則本來就是為學生，並非避開他們。"], ["問題直接針對 every student 所需的證據。", "第三項說明保留態度的資訊需求。"], "infer-request-for-evidence-before-agreement", "claim-evaluation-dialogue", "treat-maybe-as-support-for-universal-claim"),
    q("A: We can finish the model tonight if we stay until eight.\nB: I can stay until seven, not eight.\nWhich answer best describes what B means?", ["B agrees with the whole plan.", "B asks what a model is.", "B will not help at all.", "B agrees to help but gives a different ending time."], 3, ["B 明確不接受八點。", "沒有詢問模型。", "願意留到七點表示仍會協助。", "回應接受部分行動但縮短時間。"], ["not eight 限制了承諾邊界。", "第四項同時保存合作意願與時間差異。"], "classify-limited-agreement-by-time-boundary", "conditional-commitment", "collapse-partial-commitment-into-refusal"),
  ]),
];

export const ENGLISH_UNIT_SOURCE = {
  unitId: UNIT_ID,
  lectures: ENGLISH_U33_LECTURES,
  questions: ENGLISH_U33_QUESTIONS,
  vocabularyPolicy: {
    capQuestionBasis: "appendix-5-table-1",
    additionalLearningTerms: ["accept", "add", "avoid", "ball", "bookcase", "cancel", "cause", "certain", "complete", "consider", "continue", "conversation", "create", "crowd", "crowded", "describe", "doubt", "especially", "express", "focus", "form", "hall", "information", "introduce", "lock", "midnight", "model", "neither", "none", "pain", "path", "promise", "raincoat", "rather", "receive", "refuse", "reject", "remind", "return", "seem", "sense", "shall", "shelf", "silver", "sink", "state", "step", "suggest", "tank", "title", "travel", "upstairs", "whole", "wood"],
    properNames: ["Amy", "Ben", "David", "Eric", "Ken", "Kim", "Lee", "Leo", "Lily", "Mia", "Nina", "Omar", "Rosa", "Sam"],
    grammarNotation: ["A", "B", "C", "D"],
    malformedDistractors: [],
  },
};
