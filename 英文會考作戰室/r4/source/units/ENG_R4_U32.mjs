const UNIT_ID = "ENG_R4_U32";

function lecture(id, skillId, content) {
  return { id, skillId, ...content, sections: content.sections.map((section, index) => ({ id: id + "_SEC_" + String(index + 1).padStart(2, "0"), ...section })) };
}

const DIFFICULTIES = ["foundation", "foundation", "foundation", "standard", "standard", "standard", "standard", "advanced", "advanced", "advanced", "transfer", "transfer"];

function skillQuestions(skillNumber, values) {
  if (values.length !== 12) throw new Error("ENG_R4_S" + skillNumber + ": expected 12 authored questions");
  return values.map((value, index) => ({ id: "ENG_R4_Q_" + skillNumber + "_" + String(index + 1).padStart(2, "0"), skillId: "ENG_R4_S" + skillNumber, difficulty: DIFFICULTIES[index], ...value }));
}

function q(stem, options, answerIndex, reasons, reviews, cognitiveProcess, representationType, misconceptionTargets) {
  return { stem, options, answerIndex, reasons, reviews, cognitiveProcess, representationType, misconceptionTargets };
}

export const ENGLISH_U32_LECTURES = [
  lecture("ENG_R4_L_S218", "ENG_R4_S218", {
    objectives: ["能辨認電子郵件與簡短訊息中寄件者、收件者、主旨和正文。", "能依欄位與排列判斷每段文字的功能，不把格式標記當內容。"],
    sections: [
      { title: "先讀 From、To 和 Subject", content: "From 指寄件者，To 指收件者，Subject 用短語說明信件主題。三個欄位回答誰寫、寫給誰和談什麼；不能因人名最先出現，就把寄件者誤認成收件者。" },
      { title: "正文位於稱呼與署名之間", content: "Dear Mr. Lin 或 Hi Amy 是開頭稱呼，接下來的句子才是正文。最後的 Best wishes、Thank you 和姓名用來收束訊息；署名指出寫信者，不是新的收件人。" },
      { title: "簡訊常省略完整欄位", content: "手機訊息可能只顯示人名、時間和幾句對話，沒有 Subject。此時要看畫面上的姓名標記與對話方向，判斷誰傳送哪一句，不能套用電子郵件的完整格式。" },
      { title: "格式提供定位，不直接保證內容", content: "Subject: Trip plan 能說明信件談旅行計畫，卻不能證明行程已確定。欄位協助快速找到資訊，但真正的日期、決定與要求仍要從正文讀取。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S218_EX_01", prompt: "From: Amy\nTo: Ben\nSubject: Library books", steps: ["找到 From 後的人名。", "找到 To 後的人名。", "把 Subject 當成主題。"], answer: "Amy writes to Ben about library books.", why: "From 後的 Amy 是寄件者，To 後的 Ben 是收件者；Library books 只說明信件主題。三個欄位各有不同功能，不能把主旨當成人名。" },
      { id: "ENG_R4_L_S218_EX_02", prompt: "Hi Mia,\nThe bus will leave at nine.\nSee you,\nLeo", steps: ["辨認開頭稱呼。", "讀取中間的正文。", "由最後姓名找出寄件者。"], answer: "Leo sends the message to Mia.", why: "Hi Mia 指出訊息寫給 Mia，最後的 Leo 是署名。中間一句提供公車時間，因此不能因 Mia 位於第一行就認為她是寫信者。" },
      { id: "ENG_R4_L_S218_EX_03", prompt: "10:15  Ken: I am at the front door.\n10:16  You: I will come down.", steps: ["用姓名標記分辨兩方。", "依時間排列訊息。", "確認第二句由畫面使用者傳送。"], answer: "Ken is waiting at the front door.", why: "Ken 的訊息直接說他在前門，下一分鐘的回覆表示收訊者會下樓。You 是畫面使用者，不是名叫 You 的第三個人。" },
    ],
    misconceptions: [
      { belief: "把 To 後的人名當成寫信者。", whyWrong: "To 標示訊息要送給誰，寄件者在 From 欄。", correction: "先固定欄位功能，再讀人名。" },
      { belief: "看到 Subject 就認為主旨內容已經發生。", whyWrong: "主旨只概括話題，實際狀態要由正文確認。", correction: "把主旨當索引，不把它當完整結論。" },
      { belief: "署名是下一位說話者。", whyWrong: "信末姓名通常表示前文的寫作者。", correction: "先找稱呼與正文邊界，再判讀信末姓名。" },
      { belief: "簡訊沒有 From 和 To 就無法辨認說話者。", whyWrong: "姓名標記、左右方向或 You 仍能指出訊息來源。", correction: "使用畫面提供的人名與時間線索。" },
    ],
    checks: [
      { prompt: "電子郵件中的 Subject 是人名還是主題？", answer: "主題", reason: "它用短語概括正文內容。" },
      { prompt: "信末的 Best wishes 後接 Leo，Leo 通常是誰？", answer: "寄件者", reason: "結尾後的姓名是署名。" },
      { prompt: "簡訊中的 You 一定是第三個人的名字嗎？", answer: "不一定", reason: "它常代表正在看畫面的使用者。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S219", "ENG_R4_S219", {
    objectives: ["能從主旨、開頭和關鍵行動判斷訊息的主要目的。", "能區分邀請、提醒、請求、道謝、道歉與告知變更。"],
    sections: [
      { title: "主旨先縮小可能目的", content: "Subject: Meeting change 多半與變更會議有關，Subject: Thank you 則常用來致謝。主旨可先縮小方向，但仍要閱讀開頭與正文，確認寫信者真正希望讀者知道或完成什麼。" },
      { title: "動作句最能指出目的", content: "Please bring your card 是請求，Remember to call me 是提醒，Would you like to join us 是邀請。若訊息同時含背景和行動，主要目的通常落在要求收件者回應或採取的動作。" },
      { title: "情緒不等於寫信目的", content: "I am sorry 可能用來道歉，也可能只是表達遺憾。要看後文是否承認自己的錯誤、說明不能出席，或請求協助；不能只憑一個情緒字決定整封訊息。" },
      { title: "答案不能超過文字證據", content: "若信中只說 The game starts at four，能確定的是提供時間資訊。除非另有 Please come early，不能擴大成要求提早到場；目的題也必須受正文限制。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S219_EX_01", prompt: "Subject: Saturday picnic\nWould you like to come with us?", steps: ["由主旨找出活動。", "辨認問句在詢問意願。", "判斷寫信者正在邀請。"], answer: "The writer is inviting someone to a picnic.", why: "主旨提供星期六野餐，問句則詢問對方是否願意同行。訊息沒有要求付款或更改日期，核心目的就是邀請。" },
      { id: "ENG_R4_L_S219_EX_02", prompt: "I took your book home by mistake. I am sorry. I will return it tomorrow.", steps: ["找出寫信者的行動。", "理解道歉句。", "用歸還承諾確認目的。"], answer: "The writer is saying sorry and promising to return the book.", why: "寫信者承認誤拿書並直接道歉，還說明明天歸還。這不是借書請求，因為書已被拿走，訊息重點在承認錯誤與補救。" },
      { id: "ENG_R4_L_S219_EX_03", prompt: "The science club now meets in Room 6, not Room 3. Please tell Nina.", steps: ["比較新舊地點。", "找出收件者要做的事。", "整合告知變更與轉告請求。"], answer: "The writer reports a room change and asks for help sharing it.", why: "第一句把地點由第三教室改成第六教室，第二句請收件者轉告 Nina。只回答地點改變會漏掉必要行動。" },
    ],
    misconceptions: [
      { belief: "只看 Subject 就不讀正文。", whyWrong: "同一主旨可能包含邀請、取消或詢問等不同目的。", correction: "用主旨預測，再用動作句確認。" },
      { belief: "訊息提到活動就是邀請。", whyWrong: "活動也可能只是改時間、提醒物品或宣布取消。", correction: "找收件者被要求做的具體行動。" },
      { belief: "看到 sorry 一律判為承認犯錯。", whyWrong: "sorry 也可表示不能參加或對他人遭遇感到遺憾。", correction: "檢查原因與後續句子。" },
      { belief: "把合理的下一步寫成訊息目的。", whyWrong: "未在文字中出現的行動仍只是推測。", correction: "答案只保留主旨與正文共同支持的功能。" },
    ],
    checks: [
      { prompt: "Please send me the picture 是告知還是請求？", answer: "請求", reason: "寫信者希望收件者傳送照片。" },
      { prompt: "Thank you for your help 的主要功能是什麼？", answer: "道謝", reason: "句子直接感謝對方提供協助。" },
      { prompt: "訊息只寫新時間，能推知一定要提早到嗎？", answer: "不能", reason: "是否提早並未由文字說明。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S220", "ENG_R4_S220", {
    objectives: ["能從訊息中分別擷取時間、地點、人物和待辦事項。", "能整合變更、期限與先後順序，判斷收件者下一步。"],
    sections: [
      { title: "把資訊分成四個問題", content: "閱讀時可依序問 When、Where、Who 和 What to do。不同資訊可能分散在數句中，先各自記下再組合，能避免把星期、時刻或教室接到錯誤活動。" },
      { title: "新資訊取代被明確改掉的部分", content: "Meet at 3:00 in Room 2. The room is now Room 5 只改地點，三點仍保留。若寫 The meeting is moved to Friday，才改日期；沒有被提到的欄位不能自行更動。" },
      { title: "期限和活動時間要分開", content: "Send the form by Tuesday; the trip is Friday 同時有繳交期限與活動日。Tuesday 回答何時交表，Friday 回答何時出發；看到較晚日期不代表前一個期限失效。" },
      { title: "下一步取決於目前狀態", content: "訊息若說 I am outside，收件者可能要開門；若說 I will arrive at five，則不該在四點就判定對方已到。時態與時間副詞會改變可採取的行動。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S220_EX_01", prompt: "Meet me at the bus stop at 4:20. Bring the blue bag.", steps: ["找出地點。", "找出時刻。", "記錄要攜帶的物品。"], answer: "Go to the bus stop at 4:20 with the blue bag.", why: "bus stop 是會合地點，4:20 是會合時間，bring 指出還要帶藍色袋子。若只回答時間，就沒有完成訊息中的物品要求。" },
      { id: "ENG_R4_L_S220_EX_02", prompt: "Practice is still Tuesday at five, but we will use the hall instead of Room 4.", steps: ["保留 still 後的時間。", "找出 but 後的新地點。", "排除被取代的舊教室。"], answer: "Practice is Tuesday at five in the hall.", why: "still 表示星期二五點沒有改，but 後只把地點改為會堂。Room 4 是舊資訊，不能與新地點並列為兩個可選場所。" },
      { id: "ENG_R4_L_S220_EX_03", prompt: "Please call me after you get home. I will be free after seven.", steps: ["先找完成回家這個條件。", "再找七點後的時間限制。", "合併兩個條件安排通話。"], answer: "Call after getting home and after seven.", why: "通話要同時滿足回家後與七點後兩項條件。若六點已到家，仍要等到七點以後，不能只符合其中一項。" },
    ],
    misconceptions: [
      { belief: "看到第一個時間就把它套到所有事件。", whyWrong: "一則訊息可能同時有期限、出發與回程時間。", correction: "將每個時間寫在對應動作旁。" },
      { belief: "地點改變時日期和時刻也自動改變。", whyWrong: "沒有被更新的資訊通常維持原安排。", correction: "只替換訊息明確改動的欄位。" },
      { belief: "活動日比繳交期限晚，所以可以活動當天再交。", whyWrong: "by 所標出的待辦期限獨立存在。", correction: "分開記錄待辦截止與活動時程。" },
      { belief: "I will arrive 表示對方現在已在現場。", whyWrong: "will 指向未來，抵達尚未發生。", correction: "用時態確認事件目前是否完成。" },
    ],
    checks: [
      { prompt: "Bring your card 回答時間、地點還是待辦？", answer: "待辦", reason: "它要求攜帶一項物品。" },
      { prompt: "Room 2, not Room 1 中哪一個是新地點？", answer: "Room 2", reason: "not 後排除第一教室。" },
      { prompt: "by Monday 和 on Friday 可以分別表示什麼？", answer: "期限與活動日", reason: "兩個日期連到不同動作。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S221", "ENG_R4_S221", {
    objectives: ["能依收件人身分與關係選擇清楚、合宜的英文稱呼。", "能用簡短結尾與署名完成訊息，不混淆禮貌程度和內容正確性。"],
    sections: [
      { title: "稱呼要和已知身分一致", content: "寫給熟悉同學可用 Hi Amy，寫給老師可用 Dear Mr. Lin。若不知道對方姓名，可寫 Dear Sir or Madam，但不能自行猜姓氏、職稱或性別。" },
      { title: "正式程度取決於關係與情境", content: "朋友間的 See you 或 Thanks 很自然；向學校辦公室詢問時，完整稱呼與 Thank you 較清楚。合宜不等於使用最長句，而是讓對方知道被尊重且容易理解。" },
      { title: "結尾不能代替正文", content: "Best wishes 和 Thank you 是結尾語，不能回答收件者問的時間或決定。若來信詢問 Can you come at four?，回覆仍須先說能否到場，再加結尾。" },
      { title: "署名讓收件者知道回覆來源", content: "群組或辦公室收到多封訊息時，信末姓名有助辨識寄件者。只寫 Hi 而沒有正文和姓名，格式看似友善，資訊仍不完整。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S221_EX_01", prompt: "A student writes to Mr. Wang, a teacher, to ask about homework.", steps: ["確認收件者是老師。", "使用已知姓氏與稱謂。", "避免朋友式簡稱。"], answer: "Dear Mr. Wang,", why: "題目已提供老師的姓氏與稱謂，所以 Dear Mr. Wang 清楚且合宜。Hi Wang 省略稱謂，Dear Teacher Wang 也不是此處自然的英文稱呼。" },
      { id: "ENG_R4_L_S221_EX_02", prompt: "Mia sends a quick message to her close friend Amy.", steps: ["確認兩人是熟悉朋友。", "選擇簡短自然的開頭。", "保留朋友姓名。"], answer: "Hi Amy,", why: "熟悉朋友間的短訊可直接用 Hi 加名字，不需要使用職稱。Dear Sir or Madam 會把已知朋友當成身分不明的收件者。" },
      { id: "ENG_R4_L_S221_EX_03", prompt: "The school office answered Leo's question. Leo wants to close his reply politely.", steps: ["先確認正文已完成回覆。", "選擇簡短禮貌結尾。", "在結尾後署名。"], answer: "Thank you,\nLeo", why: "辦公室已提供協助，Thank you 能自然表達感謝，Leo 則標明回覆者。只留下 Leo 仍可辨認人名，卻沒有呈現想表達的謝意。" },
    ],
    misconceptions: [
      { belief: "所有電子郵件都必須用同一種稱呼。", whyWrong: "收件者關係和情境會影響正式程度。", correction: "先確認對方是朋友、老師、團體或身分不明者。" },
      { belief: "不知道姓名時可以猜一個 Mr. 或 Ms.。", whyWrong: "猜測可能誤稱對方，也沒有文字依據。", correction: "使用不預設姓名或性別的稱呼。" },
      { belief: "寫了 Best wishes 就算完整回覆。", whyWrong: "結尾語沒有回答原訊息的問題。", correction: "先完成必要內容，再加入結尾和署名。" },
      { belief: "越長的稱呼一定越禮貌。", whyWrong: "不自然或錯誤職稱反而妨礙理解。", correction: "選擇符合已知關係的簡明稱呼。" },
    ],
    checks: [
      { prompt: "寫給熟悉同學，Hi 加名字是否合宜？", answer: "合宜", reason: "朋友短訊可使用簡短稱呼。" },
      { prompt: "不知道收件者姓名時，可以自行猜姓氏嗎？", answer: "不可以", reason: "猜測沒有文字根據。" },
      { prompt: "結尾語能取代對原問題的回答嗎？", answer: "不能", reason: "正文仍要提供必要資訊。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S222", "ENG_R4_S222", {
    objectives: ["能找出來訊中需要回覆的問題與限制。", "能選擇包含必要資訊、語意明確且不加入無關內容的簡短回覆。"],
    sections: [
      { title: "先列出對方真正問了什麼", content: "Can you come? What time works for you? 含兩個問題：能否參加和可行時間。回覆若只寫 Yes，仍缺時間；先數清問題，再逐一作答最可靠。" },
      { title: "回覆要能讓對方採取下一步", content: "若對方要安排接送，I can go 不足以決定何時接人；I can go at five 才提供可用資訊。必要內容由情境決定，不是每封訊息都要寫相同細節。" },
      { title: "簡短不等於模糊", content: "Maybe、OK 或 Fine 在某些對話可成立，但面對二選一或具體問題時可能不清楚。能用一句完整回答人物、時間、地點或選擇，就不必用多句無關禮貌話填滿。" },
      { title: "不能答應無法完成的條件", content: "若收件者六點才下課，回覆 I will meet you at five 與已知資訊矛盾。好回覆不只格式完整，也要和來訊及自己的限制一致。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S222_EX_01", prompt: "Can you help at the book sale Saturday? Please tell me yes or no by Thursday.", steps: ["找出能否協助的問題。", "注意星期四前要回覆。", "選擇直接表明決定的句子。"], answer: "Yes, I can help on Saturday.", why: "回覆明確說可以協助，並重述星期六以連回活動。只寫 Saturday 沒有表達答應或拒絕，寫 Maybe 也不能完成對方要求的決定。" },
      { id: "ENG_R4_L_S222_EX_02", prompt: "Which bus will you take, the 4:10 or the 4:40 bus?", steps: ["辨認二選一問題。", "保留其中一個完整時間。", "指出選擇的是公車班次。"], answer: "I will take the 4:40 bus.", why: "來訊要求在兩個班次中選一個，回覆直接指定四點四十分。只說 later 可能可猜，但沒有直接保留對方提供的準確時間。" },
      { id: "ENG_R4_L_S222_EX_03", prompt: "I left your blue bag at the office. Can you get it before five?", steps: ["確認物品與地點。", "找出五點前的期限。", "同時回答能否領取。"], answer: "Yes, I will get the blue bag from the office before five.", why: "完整回覆保留藍色袋子、辦公室與五點前領取三項必要資訊。只寫 Thank you 很有禮貌，卻沒有讓對方知道是否能按時取走。" },
    ],
    misconceptions: [
      { belief: "回覆有 Yes 就一定完整。", whyWrong: "原訊息可能還問時間、地點或選擇。", correction: "逐一核對每個問句與限制。" },
      { belief: "加入越多背景故事，回覆越好。", whyWrong: "無關內容可能掩蓋真正決定。", correction: "只保留能回答問題或安排下一步的資訊。" },
      { belief: "OK 在任何情況都足夠清楚。", whyWrong: "面對多個問題時，不知道 OK 回應哪一項。", correction: "重述必要的時間、物品或選擇。" },
      { belief: "可以忽略自己已知的時間限制。", whyWrong: "與情境矛盾的答覆無法實際完成。", correction: "送出前比對來訊要求與可行條件。" },
    ],
    checks: [
      { prompt: "對方問能否來以及幾點來，只答 Yes 完整嗎？", answer: "不完整", reason: "仍缺可行時間。" },
      { prompt: "二選一問題的回覆最好保留什麼？", answer: "明確選項", reason: "對方才能知道實際決定。" },
      { prompt: "禮貌結尾可以取代必要時間嗎？", answer: "不可以", reason: "時間是安排下一步所需資訊。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S223", "ENG_R4_S223", {
    objectives: ["能區分社群貼文中的可核對事件與作者個人感受。", "能辨認文字沒有支持的推論，不把按讚或情緒當成客觀證據。"],
    sections: [
      { title: "事實可由貼文內容或資料核對", content: "The game starts at three、We planted ten trees 都描述可核對的時間或事件。若題目只給貼文，能確認的是作者明確陳述的內容，不代表外部世界一定沒有錯誤。" },
      { title: "反應常帶有感受或評價", content: "I loved the music、This was the best day 表達作者的喜好與判斷。它們可以是真實感受，但不同讀者可能不同意，因此不能當成所有人的共同結論。" },
      { title: "同一貼文可能同時有兩類句子", content: "We walked five kilometers, and I was very tired 前半是距離資訊，後半是身體感受。作答時要依問題選句，不能因兩句相鄰就把性質混在一起。" },
      { title: "數量反應不證明原因", content: "A post got many likes 只能說收到許多按讚，不能證明內容正確、每個人同意或某個原因造成流行。若沒有留言或調查，對讀者想法的推論應保持有限。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S223_EX_01", prompt: "Our class picked up twelve bags of trash today. I felt proud of everyone.", steps: ["找出可計數的事件。", "找出第一人稱感受。", "分開事實與反應。"], answer: "Twelve bags is event information; feeling proud is a personal reaction.", why: "十二袋垃圾是貼文明確提供的可計數結果，proud 則描述作者的感受。不能由作者自豪推論每位同學都有相同心情。" },
      { id: "ENG_R4_L_S223_EX_02", prompt: "The new park opens Monday. It looks wonderful in the morning light.", steps: ["辨認日期資訊。", "找出帶評價的形容詞。", "避免把評價變成共同事實。"], answer: "Monday is stated information; wonderful is the writer's view.", why: "開放日可直接從第一句核對，wonderful 則是作者對景象的評價。貼文沒有提供所有訪客的意見，所以不能說人人都喜歡。" },
      { id: "ENG_R4_L_S223_EX_03", prompt: "My picture received 200 likes. This proves it is the best picture here.", steps: ["確認按讚數是已述資訊。", "辨認 proves 後的擴大結論。", "檢查是否有比較標準。"], answer: "The number of likes does not prove the picture is the best.", why: "兩百個按讚是貼文提供的數字，但沒有列出其他作品、評分方式或評審結果。受歡迎不能單獨證明作品是最好。" },
    ],
    misconceptions: [
      { belief: "句子有數字就一定完全正確。", whyWrong: "數字仍可能只是作者聲稱的資訊，需看題目要求的證據層級。", correction: "先判斷文字陳述，再避免擴大成外部查證。" },
      { belief: "作者說 best 就代表大家共同認定。", whyWrong: "最高級可能只是個人評價。", correction: "尋找評選標準或其他人的證據。" },
      { belief: "事實句和感受句相鄰就屬於同一類。", whyWrong: "一句可描述事件，下一句可表達反應。", correction: "逐句判斷能否客觀核對。" },
      { belief: "按讚多能證明貼文中的因果關係。", whyWrong: "按讚數沒有說明人們按讚的原因。", correction: "不從反應數量推導未提供的原因。" },
    ],
    checks: [
      { prompt: "I was happy 是事件資料還是個人反應？", answer: "個人反應", reason: "它描述作者感受。" },
      { prompt: "The bus left at nine 是可核對的資訊嗎？", answer: "是", reason: "它提出具體事件與時間。" },
      { prompt: "按讚很多能單獨證明內容正確嗎？", answer: "不能", reason: "按讚原因與查證結果都未提供。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S224", "ENG_R4_S224", {
    objectives: ["能逐項比對原訊息與回覆，判斷問題是否都被回答。", "能找出回覆中的遺漏、矛盾、錯置對象或未確認假設。"],
    sections: [
      { title: "把原訊息拆成核對清單", content: "若來訊問 Can you come? Which time is better?，清單就有能否參加與偏好時間兩項。閱讀回覆時逐項打勾，比只憑句子長短判斷完整更可靠。" },
      { title: "相關不代表已回答", content: "原訊息問 Which room?，回覆說 I will be there at four 雖然談同一活動，仍沒有提供教室。回覆必須對應問題所需的資訊類型。" },
      { title: "完整回覆也不能自相矛盾", content: "來訊說 the library is closed Sunday，回覆卻約 Sunday at the library，就和已知條件衝突。比對時除了找遺漏，也要檢查日期、地點、人物與否定資訊是否一致。" },
      { title: "不把沉默當成同意", content: "回覆沒有反對某項安排，不等於已接受。只有明確的 yes、can、will 或等值表達才能支持同意；若語意仍不確定，答案應指出需要再確認。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S224_EX_01", prompt: "Message: Can you meet Tuesday or Wednesday? Where should we meet?\nReply: Wednesday is good for me.", steps: ["列出日期選擇問題。", "列出地點問題。", "檢查回覆只完成第一項。"], answer: "The day is answered, but the meeting place is missing.", why: "Wednesday 明確回應日期選擇，卻沒有說要在哪裡見面。回覆與原訊息有關，但仍缺少第二個問題要求的地點。" },
      { id: "ENG_R4_L_S224_EX_02", prompt: "Message: Bring the red bag to Room 5 before noon.\nReply: I will take the red bag to Room 5 at eleven.", steps: ["核對物品。", "核對地點。", "比較十一點與中午期限。"], answer: "The reply covers every required detail.", why: "紅色袋子和第五教室都正確對應，十一點也早於中午。回覆沒有改動物品、地點或期限，因此可直接完成安排。" },
      { id: "ENG_R4_L_S224_EX_03", prompt: "Message: The game is canceled.\nReply: Great, I will see you at the game.", steps: ["找出 canceled 的否定狀態。", "讀取回覆仍準備到場。", "判定兩者互相矛盾。"], answer: "The reply does not match the message.", why: "原訊息表示比賽不舉行，回覆卻仍安排在比賽見面。問題不是少了時間，而是回覆忽略取消資訊，做出相反行動。" },
    ],
    misconceptions: [
      { belief: "回覆句子很長就一定完整。", whyWrong: "長句仍可能漏掉原訊息的一個問題。", correction: "依問題項目核對，不依字數判斷。" },
      { belief: "提到同一活動就算回答問題。", whyWrong: "時間問題需要時間，地點問題需要地點。", correction: "確認回覆提供正確資訊類型。" },
      { belief: "只檢查有沒有遺漏，不檢查矛盾。", whyWrong: "回覆可能包含完整欄位卻違反原訊息條件。", correction: "比對每項值以及肯定、否定方向。" },
      { belief: "沒有說不就是默認同意。", whyWrong: "沉默或模糊回覆不能證明接受安排。", correction: "尋找明確同意、拒絕或仍需確認的語句。" },
    ],
    checks: [
      { prompt: "原訊息問兩題，回覆只回答一題，算完整嗎？", answer: "不完整", reason: "仍有一項必要資訊缺漏。" },
      { prompt: "回覆提供地點但原文問時間，算直接對應嗎？", answer: "不算", reason: "資訊類型與問題不同。" },
      { prompt: "沒有反對一項安排就等於明確同意嗎？", answer: "不等於", reason: "仍需肯定語句或進一步確認。" },
    ], assets: [],
  }),
];

export const ENGLISH_U32_QUESTIONS = [
  ...skillQuestions("218", [
    q("From: Amy\nTo: Ben\nSubject: Library books\nWho wrote this e-mail?", ["Amy", "Ben", "The library", "The books"], 0, ["From 後的人名指出寄件者，所以是 Amy。", "Ben 位於 To 欄，是收件者。", "圖書館屬於主旨內容，不是寫信者。", "書本也是信件話題，不能當人物。"], ["欄位名稱直接決定人物角色。", "答案沒有因人名位置而混淆寄件與收件。"], ["u32-s218-read-from-field-for-writer", "separate-message-person-from-topic"], "email-header-role", ["reverse-from-and-to"]),
    q("Hi Mia,\nThe team will meet at five.\nSee you,\nLeo\nWho will get this message?", ["The team", "Mia", "Leo", "Five people"], 1, ["team 是正文談到的團體。", "開頭稱呼 Hi Mia 指出訊息寫給 Mia。", "Leo 是信末署名，也就是寫信者。", "five 表示時刻，不是人數。"], ["稱呼中的名字用來定位收件者。", "署名與正文資訊已分開判讀。"], ["u32-s218-use-greeting-to-find-receiver", "distinguish-addressee-from-signature"], "message-greeting-role", ["treat-signature-as-receiver"]),
    q("Subject: Saturday trip\nWhat does this line tell the reader?", ["Who paid for the trip", "Where the bus is now", "What the message is about", "Why the trip was canceled"], 2, ["主旨沒有付款資訊。", "這一行也沒有公車目前位置。", "Subject 用短語概括訊息主題。", "文字沒有說旅行取消。"], ["主旨只能先界定話題。", "未由正文提供的狀態不能自行加入。"], ["u32-s218-identify-subject-line-function", "limit-header-inference-to-topic"], "email-subject-function", ["treat-subject-as-complete-event"]),
    q("Dear Mr. Lin,\nThank you for helping our class.\nBest wishes,\nNina\nWhich words close the message?", ["Dear Mr. Lin", "helping our class", "Nina", "Best wishes"], 3, ["這是開頭稱呼。", "這些字屬於正文內容。", "Nina 是署名的人名。", "Best wishes 是正文後的結尾語。"], ["結尾語位於正文與署名之間。", "人名本身沒有被誤當成結尾功能。"], ["u32-s218-locate-email-closing-phrase", "separate-closing-from-signature"], "email-closing-identification", ["label-final-name-as-closing"]),
    q("10:15  Ken: I am waiting at the school gate.\n10:16  You: I am coming now.\nWho is at the gate?", ["Ken", "You", "Both people", "No one"], 0, ["Ken 的訊息直接說他正在校門口等。", "You 說正在前往，尚未表示已到校門。", "第二人仍在移動，不能判為兩人都在場。", "第一句已提供一位在場者。"], ["說話者標記與動作狀態共同支持答案。", "正在前往不等於已經抵達。"], ["u32-s218-track-speaker-label-in-text-thread", "contrast-waiting-location-with-coming-action"], "text-message-speaker", ["read-you-as-third-person-name"]),
    q("From: David\nTo: School Office\nSubject: New student card\nWho receives the e-mail?", ["David", "The school office", "A new student", "The card"], 1, ["David 位於 From 欄，是寄件者。", "To 後的 School Office 是收件單位。", "主旨雖提到新學生證，卻沒有把新生列為收件人。", "物品不能收取電子郵件。"], ["收件人可以是單位，不一定是人名。", "判斷依據固定在 To 欄。"], ["u32-s218-read-organization-in-to-field", "recognize-nonperson-email-recipient"], "email-recipient-organization", ["choose-subject-noun-as-recipient"]),
    q("From: Lily\nTo: Eric\nSubject: New bus time\nWhich part gives the topic before the full message is read?", ["From: Lily", "To: Eric", "Subject: New bus time", "The missing signature"], 2, ["寄件欄只說明誰寫信。", "收件欄只指出信件送給誰。", "主旨用 New bus time 概括話題。", "題目沒有顯示缺少署名，也不能靠缺漏提供主題。"], ["三種標頭欄位各自回答不同問題。", "主題線索來自 Subject 而非人物欄。"], ["u32-s218-choose-topic-bearing-header", "compare-functions-of-three-email-fields"], "email-header-comparison", ["use-nearest-header-with-name"]),
    q("Hi Lily,\nThe library closes at six today.\nSee you,\nKim\nWhich line is the main message?", ["Hi Lily", "See you", "Kim", "The library closes at six today."], 3, ["這是對收件者的稱呼。", "這是簡短結尾。", "Kim 是寄件者署名。", "中間句提供今天圖書館關門時間，屬於正文。"], ["正文位於稱呼和結尾之間。", "答案選的是實際資訊而非格式標記。"], ["u32-s218-isolate-body-from-greeting-and-signoff", "identify-information-bearing-message-line"], "email-body-boundary", ["select-format-line-instead-of-body"]),
    q("From: Rosa\nTo: Eric\nThe club meets on Friday.\nWhich e-mail part is missing?", ["A subject line", "A receiver", "A writer", "A message body"], 0, ["From 和 To 都有，但沒有 Subject 欄。", "Eric 已明確列為收件者。", "Rosa 已明確列為寄件者。", "最後一句就是正文。"], ["逐欄盤點可以找出唯一缺項。", "缺少主旨不代表缺少整封正文。"], ["u32-s218-detect-missing-subject-field", "inventory-present-email-components"], "email-format-gap", ["confuse-body-with-subject"]),
    q("Thank you for the pictures.\nBest wishes,\nOmar\nWhat does Omar's name show?", ["The topic", "The writer", "The receiver", "The time"], 1, ["主題是感謝照片，不是 Omar 這個姓名。", "結尾語後的 Omar 是署名，指出寫信者。", "收件者沒有在這段節錄中出現。", "姓名不表示傳送時刻。"], ["署名功能可由它在結尾後的位置確認。", "節錄沒有提供的收件者不能猜測。"], ["u32-s218-interpret-name-after-signoff", "avoid-inferring-omitted-recipient"], "email-signature-role", ["treat-final-name-as-addressee"]),
    q("9:02  Mia: The shop is still closed.\n9:08  You: I can see the door opening now.\nWhich message was sent later?", ["The shop is still closed.", "Both were sent together.", "I can see the door opening now.", "The times do not show an order."], 2, ["這句標示為九點零二分，較早。", "兩句相差六分鐘。", "九點零八分的回覆在時間線上較晚。", "明確時刻足以排列先後。"], ["時間戳記決定訊息順序。", "內容變化也與由關閉到開門的次序一致。"], ["u32-s218-order-messages-by-timestamp", "connect-later-text-to-updated-state"], "text-message-time-order", ["read-screen-order-without-times"]),
    q("From: Sam\nTo: Rita\nSubject: Dinner plan\nCan we meet at the noodle shop at six?\nWhich statement is supported by the format and body?", ["Rita wrote to Sam about lunch.", "Sam has already eaten dinner.", "The noodle shop closes at six.", "Sam asks Rita about a dinner meeting."], 3, ["寄件與收件方向相反，而且正文談晚餐。", "問句只提出會面，沒有說 Sam 已吃過。", "六點是建議會面時間，不是關門時間。", "From、To、Subject 與正文共同支持 Sam 向 Rita 詢問晚餐會面。"], ["完整判斷需同時使用格式與正文。", "正確敘述沒有把提議誤寫成已發生的事。"], ["u32-s218-integrate-header-and-body-roles", "reject-status-inference-from-meeting-question"], "email-format-integration", ["reverse-direction-or-overstate-event"]),
  ]),
  ...skillQuestions("219", [
    q("Subject: Saturday picnic\nWould you like to join us at the river park?\nWhy did the writer send this?", ["To invite someone to a picnic", "To report a lost bag", "To ask for money", "To cancel a trip"], 0, ["詢問是否願意同行，功能是邀請。", "訊息沒有遺失物。", "內容沒有付款或借錢要求。", "野餐仍被提出，沒有取消語句。"], ["主旨與問句共同指出邀請目的。", "活動被提及不代表它已取消。"], ["u32-s219-infer-invitation-from-would-like", "exclude-unmentioned-request-types"], "message-purpose-invitation", ["label-any-event-message-as-cancellation"]),
    q("I took your notebook home by mistake. I am sorry. I will bring it back tomorrow.\nWhat is the writer doing?", ["Asking to keep the notebook", "Saying sorry and offering to return it", "Inviting the reader home", "Giving homework"], 1, ["寫信者承諾歸還，沒有要求保留。", "承認誤拿、道歉與歸還承諾構成完整目的。", "home 說明物品被帶回家，不是邀請地點。", "內容沒有指定任何作業。"], ["道歉句需和錯誤行動及補救一起解讀。", "單一地點字不能改變整段目的。"], ["u32-s219-identify-apology-with-repair", "distinguish-home-as-location-from-invitation"], "message-purpose-apology", ["read-return-promise-as-borrowing-request"]),
    q("Remember to bring your school card for the trip tomorrow.\nWhy was this message sent?", ["To sell a school card", "To move the trip", "To remind the reader about an item", "To ask who owns the card"], 2, ["訊息沒有價格或交易。", "tomorrow 是既定時間，沒有新舊日期對比。", "Remember to 加上物品明確構成提醒。", "school card 的持有人不是問題。"], ["提醒目的由 Remember to 直接標示。", "物品出現不等於訊息在詢問所有權。"], ["u32-s219-read-reminder-action-marker", "separate-required-item-from-sale-or-ownership"], "message-purpose-reminder", ["classify-item-message-as-shopping"]),
    q("The club meeting is now on Thursday, not Wednesday.\nWhat is the main purpose?", ["To invite a new member", "To describe the club", "To ask for a room", "To report a schedule change"], 3, ["內容沒有邀請語。", "訊息沒有介紹社團活動。", "地點未被詢問。", "now 與 not 對比新舊日期，目的是告知變更。"], ["新舊資訊對比比一般活動字更能決定目的。", "答案只陳述已被明確更改的時程。"], ["u32-s219-detect-date-change-purpose", "use-not-contrast-to-identify-update"], "message-purpose-change", ["treat-club-mention-as-description"]),
    q("Please send me the class picture before Friday.\nWhat does the writer want?", ["The reader to send a picture", "The class to meet on Friday", "A new camera", "The reader to visit"], 0, ["Please send me 直接要求收件者傳照片。", "Friday 是期限，不是會面日期。", "訊息沒有提到購買相機。", "也沒有要求到某個地點。"], ["請求中的動詞指出收件者要做的事。", "期限不能被誤認成另一個活動。"], ["u32-s219-extract-requested-action-from-please", "separate-deadline-from-event-purpose"], "message-purpose-request", ["turn-send-request-into-meeting"]),
    q("Your directions helped me find the museum. Thank you very much.\nWhy did the writer write?", ["To ask where the museum is", "To thank the reader for help", "To report that the museum closed", "To give the reader directions"], 1, ["寫信者已經找到博物館，不再詢問位置。", "第二句直接感謝先前的指路協助。", "沒有關門資訊。", "提供方向的人是收件者，不是寫信者。"], ["前句說明感謝的原因，後句表達功能。", "人物行動方向沒有顛倒。"], ["u32-s219-connect-thanks-to-prior-help", "track-who-gave-directions"], "message-purpose-thanks", ["reverse-helper-and-helped-person"]),
    q("Tonight's movie is canceled because the hall has no power.\nWhat does the message do?", ["It asks readers to bring lights.", "It changes the movie title.", "It tells readers the event will not happen.", "It invites readers to another hall."], 2, ["原因涉及停電，但沒有攜帶燈具要求。", "電影名稱沒有出現或變更。", "canceled 表示今晚活動不會舉行。", "訊息沒有替代地點。"], ["取消狀態是可由文字直接確定的功能。", "原因不會自動形成新的讀者任務。"], ["u32-s219-interpret-cancellation-announcement", "avoid-inventing-response-to-event-cause"], "message-purpose-cancellation", ["convert-reason-into-instruction"]),
    q("Could you tell me when the last bus leaves?\nWhat is the writer trying to learn?", ["Who drives the bus", "How much the bus costs", "Where the bus was made", "The last bus time"], 3, ["問句沒有詢問司機。", "票價也未被提到。", "製造地點與 leaves 的時刻問題無關。", "when 直接要求末班公車的時間。"], ["疑問詞限制所需資訊類型。", "答案保留 last bus，而沒有擴成整份時刻表。"], ["u32-s219-identify-information-request-by-when", "map-question-word-to-time-detail"], "message-purpose-information", ["choose-related-bus-detail-not-asked"]),
    q("I cannot find my red sports bag. Please call me if you see it.\nWhy is this message being shared?", ["To ask for help finding a bag", "To give away sports clothes", "To announce a game", "To return a phone call"], 0, ["遺失狀態與看見後來電的請求共同指向協尋。", "物品沒有被贈送。", "sports 只描述袋子，沒有比賽公告。", "call me 是找到線索後的行動，不是回覆舊電話。"], ["目的要整合問題和讀者行動。", "物品修飾語不能被誤當成活動主題。"], ["u32-s219-integrate-lost-item-and-contact-request", "distinguish-sports-object-from-sports-event"], "message-purpose-lost-item", ["focus-on-call-without-condition"]),
    q("I have two heavy boxes at the front door. Can you come down and help me?\nWhat does the writer need?", ["A key to the front door", "Help carrying the boxes", "A list of box prices", "A ride home"], 1, ["門的位置已知，沒有索取鑰匙。", "重箱子和請對方下樓共同指出需要搬運協助。", "沒有買賣或價格內容。", "寫信者在門口，卻沒有要求交通。"], ["背景說明了求助原因。", "答案由 can you help 的具體情境限定。"], ["u32-s219-infer-help-task-from-box-context", "bind-general-help-request-to-stated-problem"], "message-purpose-help", ["select-unmentioned-solution"]),
    q("I am sorry, but I cannot join the dinner tonight because I am sick.\nWhat is the writer mainly telling the reader?", ["The dinner is canceled for everyone.", "The writer wants a different meal.", "The writer cannot attend.", "The writer will arrive late."], 2, ["只有寫信者不能參加，不代表整場取消。", "沒有餐點選擇。", "cannot join 明確告知無法出席，生病是原因。", "訊息沒有說稍後抵達。"], ["sorry 在此伴隨不能參加，不是承認損壞物品。", "個人缺席不能擴大成全體活動狀態。"], ["u32-s219-disambiguate-sorry-as-decline", "limit-cancellation-to-writer-attendance"], "message-purpose-decline", ["generalize-personal-absence-to-event-cancel"]),
    q("The science club now meets in Room 6, not Room 3. Please tell Nina before lunch.\nWhich description includes the whole purpose?", ["It asks Nina to choose a lunch.", "It explains how to enter Room 3.", "It reports only the old room.", "It reports a room change and asks the reader to share it."], 3, ["午餐前是轉告期限，不是選餐要求。", "第三教室被列為舊地點。", "訊息的重點包含新地點，不能只留舊資訊。", "第一句告知變更，第二句要求轉告 Nina。"], ["雙重目的需要同時保留更新與行動。", "完整答案不會漏掉 please 後的請求。"], ["u32-s219-combine-update-and-forwarding-purpose", "preserve-both-functions-in-multi-action-message"], "message-purpose-combined", ["report-background-but-omit-request"]),
  ]),
  ...skillQuestions("220", [
    q("The bus will leave the school gate at 7:40 tomorrow.\nWhen will it leave?", ["At 7:40 tomorrow", "At the school gate", "After school", "On Friday night"], 0, ["時刻與日期都由句子直接提供。", "這是出發地點，不是時間。", "句子沒有 after school。", "也沒有星期五晚上。"], ["when 要求提取時間欄位。", "答案同時保留 tomorrow 與 7:40。"], ["u32-s220-extract-complete-departure-time", "separate-time-answer-from-location"], "message-time-detail", ["answer-when-with-place"]),
    q("Meet me beside the ticket office at four.\nWhere should the reader go?", ["To the bus stop", "Beside the ticket office", "Home at four", "Inside a classroom"], 1, ["訊息沒有公車站。", "beside the ticket office 明確提供會合位置。", "four 是時刻，不是回家指示。", "也沒有教室資訊。"], ["where 對應介系詞後的地點短語。", "時刻和場所沒有混在同一欄。"], ["u32-s220-locate-meeting-place-after-beside", "map-location-question-to-prepositional-phrase"], "message-place-detail", ["answer-where-with-time"]),
    q("Please bring the green folder and your student card.\nWhich two things are needed?", ["A red folder and a ticket", "A card and some money", "The green folder and a student card", "Two student cards"], 2, ["顏色與第二項都不符合原文。", "原文沒有付款要求。", "兩個名詞完整對應訊息。", "student card 只出現一張，另一項是資料夾。"], ["and 連接兩個都必須攜帶的物品。", "答案沒有改變數量或顏色。"], ["u32-s220-collect-two-required-items", "preserve-object-color-and-count"], "message-item-list", ["drop-one-linked-item"]),
    q("Send the meal form by Tuesday. The class dinner is Friday.\nWhat must happen by Tuesday?", ["The dinner must end.", "The class must cook.", "The meal must be eaten.", "The form must be sent."], 3, ["星期二不是晚餐結束時間。", "句子沒有烹飪任務。", "晚餐安排在星期五。", "by Tuesday 直接限制 send the form 這個動作。"], ["期限要連回它修飾的動詞。", "活動日與繳交日已分開。"], ["u32-s220-link-deadline-to-form-action", "separate-submission-date-from-event-date"], "message-deadline-detail", ["attach-first-date-to-later-event"]),
    q("Practice is still at five, but the room is now Room 8.\nWhich plan is current?", ["Practice at five in Room 8", "Practice at eight in Room 5", "Practice at five in Room 5", "Practice at eight in Room 8"], 0, ["still 保留五點，now 把地點更新為第八教室。", "兩個數字的功能被顛倒。", "第五教室不是原文資訊。", "第八教室不能當成八點。"], ["只替換明確被更新的地點。", "數字必須和 time 或 Room 的欄位配對。"], ["u32-s220-preserve-time-while-updating-room", "bind-numbers-to-message-field-types"], "message-partial-update", ["change-every-detail-after-but"]),
    q("Return the book by Monday. The reading talk is on Thursday.\nWhich day is the book due?", ["Sunday", "Monday", "Thursday", "Any day after Thursday"], 1, ["原文沒有星期日。", "by Monday 表示還書期限。", "星期四屬於讀書分享活動。", "期限不會延到活動後。"], ["同一訊息中的兩個日期各有對應事件。", "due 問的是歸還期限。"], ["u32-s220-distinguish-book-due-date-from-talk-date", "associate-each-day-with-its-action"], "message-multiple-dates", ["choose-later-event-date-as-deadline"]),
    q("Mia: I am outside the front door.\nLeo: I will open it now.\nWhat will Leo do next?", ["Wait at the bus stop", "Call a teacher", "Open the front door", "Leave the building"], 2, ["沒有公車站內容。", "訊息沒有要求教師協助。", "Leo 直接說現在要開門。", "開門是讓 Mia 進入，不是離開。"], ["下一步由回覆中的 will 動作決定。", "outside 提供開門行動的情境原因。"], ["u32-s220-infer-immediate-action-from-thread", "connect-outside-status-to-door-response"], "message-next-action", ["choose-unmentioned-context-action"]),
    q("Call me after you get home. I will be free after seven.\nWhen should the call happen?", ["Before getting home", "At any time before seven", "As soon as school ends", "After getting home and after seven"], 3, ["這違反第一個 after 條件。", "七點前寫信者尚未表示有空。", "放學不等於已回家且過七點。", "兩個 after 條件必須同時成立。"], ["多重時間限制要取交集。", "不能只滿足其中一個條件。"], ["u32-s220-combine-two-after-conditions", "evaluate-conjunction-of-time-restrictions"], "message-compound-time-condition", ["satisfy-only-one-time-condition"]),
    q("Ben, please take the art box to Ms. Wu before lunch.\nWho must carry the box?", ["Ben", "Ms. Wu", "The art class", "The lunch workers"], 0, ["句首被直接稱呼的 Ben 是執行者。", "Ms. Wu 是接收物品的人。", "art 只修飾箱子用途。", "lunch 提供期限，不是人物。"], ["稱呼、動作與接收人需分別定位。", "時間詞沒有被誤判為工作人員。"], ["u32-s220-identify-addressed-person-as-agent", "separate-agent-recipient-and-deadline"], "message-who-does-what", ["choose-person-after-to-as-agent"]),
    q("The walk starts at ten instead of nine. Meet at the same park gate.\nWhat changed?", ["The park gate", "The starting time", "The activity", "The people"], 1, ["same 表示地點不變。", "instead of 將九點更新成十點。", "活動仍是步行。", "訊息沒有更換參加者。"], ["只找有新舊對比的欄位。", "same 明確鎖定未改變的地點。"], ["u32-s220-isolate-start-time-change-with-same-place", "use-same-marker-to-preserve-location"], "message-change-scope", ["assume-all-event-fields-changed"]),
    q("The game will be Saturday. We will share the place tomorrow.\nWhat is not known yet?", ["Whether there is a game", "The day of the game", "When more news will come", "The place of the game"], 3, ["第一句確認有比賽。", "星期六已提供日期。", "tomorrow 說明更新時間。", "地點要等明天才公布，目前未知。"], ["已知資訊與待公布資訊要分開。", "tomorrow 是公布時間，不是比賽地點。"], ["u32-s220-identify-pending-event-location", "distinguish-update-time-from-missing-detail"], "message-information-gap", ["treat-future-update-time-as-event-detail"]),
    q("Meet at the south gate at 3:20. Bring two bottles of water, and call Nina when you arrive.\nWhich plan follows every instruction?", ["Go to the north gate at 3:20 with water.", "Go to the south gate at 2:30 and call Nina.", "Go to the south gate at 3:20 with one bottle.", "Go to the south gate at 3:20 with two bottles and call Nina after arriving."], 3, ["地點方向錯誤，也漏了聯絡動作。", "時刻錯成兩點半，且沒有水。", "物品數量不足，也漏掉電話。", "地點、時間、數量與抵達後聯絡都完整符合。"], ["整合題必須逐項核對四個限制。", "正確選項沒有提前打電話或改變瓶數。"], ["u32-s220-integrate-place-time-item-and-followup", "verify-all-message-instructions-together"], "message-multi-detail-plan", ["accept-option-meeting-most-but-not-all-details"]),
  ]),
  ...skillQuestions("221", [
    q("A student writes to Mr. Wang, a teacher. Which opening fits?", ["Dear Mr. Wang,", "Hi Wang boy,", "Dear Friend Teacher,", "Hello student,"], 0, ["已知對方是王老師，Dear 加稱謂和姓氏合宜。", "這種稱呼省略老師身分且語意不自然。", "英文不把 Friend Teacher 當成姓名稱謂。", "收件者是老師，不是學生。"], ["稱呼依已知身分與姓氏選擇。", "禮貌不靠堆疊不自然的身分字。"], ["u32-s221-select-known-teacher-greeting", "match-title-and-family-name-to-recipient"], "email-greeting-teacher", ["use-invented-or-reversed-title"]),
    q("Mia sends a quick note to her close friend Amy. Which opening is natural?", ["Dear School Office,", "Hi Amy,", "Dear Sir or Madam,", "Mr. Amy,"], 1, ["收件者不是學校辦公室。", "熟悉朋友間可用 Hi 加名字。", "已知朋友姓名時不需要不具名正式稱呼。", "Amy 不是題目提供的姓氏或男性稱謂。"], ["朋友關係允許簡短自然的開頭。", "已知姓名時不應改用身分不明稱呼。"], ["u32-s221-choose-close-friend-salutation", "avoid-overformal-address-for-known-peer"], "message-greeting-friend", ["assume-longer-greeting-is-always-better"]),
    q("A student asks an office for information but does not know the reader's name. Which opening avoids guessing?", ["Dear Mr. Lee,", "Hi Nina,", "Dear Sir or Madam,", "My good friend,"], 2, ["題目沒有提供 Lee 這個姓氏。", "Nina 是未經根據猜出的姓名。", "這個稱呼不預設特定姓名，可用於身分不明的正式收件者。", "辦公室人員不一定是寫信者的朋友。"], ["不知道姓名時應避免虛構個人資料。", "答案仍保有正式訊息所需的稱呼功能。"], ["u32-s221-use-neutral-unknown-recipient-opening", "avoid-unsupported-name-and-relationship"], "email-greeting-unknown-recipient", ["guess-recipient-name-or-gender"]),
    q("The school office answered Leo's question. Which ending clearly thanks them and shows who replied?", ["See you at lunch, Amy", "Dear Leo,", "The school office", "Thank you,\nLeo"], 3, ["內容加入未提到的午餐，也用了錯誤姓名。", "這是寫給 Leo 的開頭稱呼，不是 Leo 的結尾。", "單寫單位沒有表達感謝或署名。", "Thank you 表達謝意，Leo 標明回覆來源。"], ["結尾同時完成語氣與身分辨識。", "署名使用原情境中的寫信者。"], ["u32-s221-pair-thanks-with-correct-signature", "evaluate-closing-for-purpose-and-identity"], "email-closing-office", ["choose-greeting-or-wrong-signature-as-closing"]),
    q("Ms. Wu asked a student to e-mail the homework. Which greeting uses the information given?", ["Dear Ms. Wu,", "Dear Mrs. Wu,", "Hi Mr. Wu,", "Dear Ms. Wang,"], 0, ["題目明確提供 Ms. Wu，稱謂與姓氏都一致。", "不能把 Ms. 自行改成 Mrs.。", "稱謂性別與題目不符。", "姓氏被換成 Wang。"], ["稱呼中的每一項身分資訊都需有文字依據。", "相近稱謂不能在沒有證據時互換。"], ["u32-s221-preserve-given-title-and-surname", "reject-title-or-name-substitution"], "email-greeting-precision", ["replace-given-recipient-identity"]),
    q("Ben finishes a short message to his teammate. Which closing is simple and suitable?", ["Dear Sir or Madam,", "See you,\nBen", "From the school office", "Your teacher, Ben"], 1, ["這是開頭稱呼，而且過度正式。", "朋友式結尾加署名符合隊友短訊。", "Ben 不是學校辦公室。", "題目沒有說 Ben 是老師。"], ["關係熟悉時可使用簡短結尾。", "答案沒有虛構職位或組織身分。"], ["u32-s221-select-peer-message-closing", "keep-signoff-consistent-with-sender-role"], "message-closing-peer", ["invent-formal-role-for-sender"]),
    q("Which line can close an e-mail to a teacher after the student has answered the question?", ["Hi teacher?", "To: Mr. Lin", "Thank you,\nMina", "Subject: My answer"], 2, ["這像不自然的開頭問句。", "這是收件欄。", "感謝語與學生署名可放在正文後。", "這是主旨欄，不是結尾。"], ["題目已說正文完成，因此只需辨認結尾格式。", "正確選項同時具有結尾語與署名。"], ["u32-s221-distinguish-closing-from-header-lines", "locate-valid-post-body-signoff"], "email-closing-format", ["choose-header-as-ending"]),
    q("A music club sends one message to all members. Which opening names the group clearly?", ["Hi one person,", "Dear Mr. Music,", "To my family,", "Dear Club Members,"], 3, ["收件者不只一人，這個說法也不自然。", "Music 不是提供的人名。", "社團成員不等於家人。", "Dear Club Members 清楚稱呼整個收件團體。"], ["群體訊息應以共同身分稱呼讀者。", "不用為團體虛構一個人的姓名。"], ["u32-s221-address-known-recipient-group", "separate-group-label-from-personal-title"], "email-greeting-group", ["force-group-message-into-personal-greeting"]),
    q("Message from Rita: Can you come at four? Which reply is complete before a closing is added?", ["Yes, I can come at four.", "Best wishes,", "Dear Rita,", "Thank you very much."], 0, ["這句直接回答能否到場並保留時刻。", "只有結尾，沒有回答問題。", "只有稱呼，沒有正文。", "道謝仍未說明是否能來。"], ["正文必須先完成溝通任務。", "禮貌用語不能取代必要答案。"], ["u32-s221-separate-reply-content-from-signoff", "require-answer-before-message-closing"], "message-body-versus-closing", ["accept-polite-phrase-without-response"]),
    q("Why is a name useful after 'Best wishes'?", ["It changes the subject.", "It tells the reader who wrote the message.", "It gives the meeting time.", "It asks a new question."], 1, ["主旨不會由署名改變。", "結尾後的姓名標示寄件者。", "姓名沒有時刻資訊。", "署名也不是疑問句。"], ["署名功能和正文內容分開。", "答案說明多人收信時仍需辨認來源。"], ["u32-s221-explain-signature-identification-function", "distinguish-name-label-from-message-content"], "email-signature-purpose", ["attribute-content-function-to-signature"]),
    q("A student knows the reader is Mrs. Chen, the school nurse. Which opening is supported?", ["Hi Doctor Wang,", "Dear Miss Chen,", "Dear Mrs. Chen,", "Dear Sir,"], 2, ["職稱與姓氏都未由題目提供。", "題目明確是 Mrs.，不能換成 Miss。", "這個稱呼保留已知稱謂與姓氏。", "已知收件者時不必使用泛稱。"], ["已知關係不表示可以改寫對方正式稱謂。", "答案只使用題目提供的身分資料。"], ["u32-s221-match-nurse-recipient-title-exactly", "avoid-title-generalization-by-occupation"], "email-greeting-context", ["substitute-occupation-or-wrong-title"]),
    q("The writer knows only that the message will reach a city office. Which opening is safest?", ["Dear Mr. City,", "Hi my friend,", "Dear Mrs. Office,", "Dear Sir or Madam,"], 3, ["City 不是人物姓氏。", "不能假設辦公室人員是朋友。", "Office 不是婚姻稱謂後的姓氏。", "此稱呼不猜姓名或性別，適合未知的正式收件者。"], ["資訊不足時選擇不虛構身分的稱呼。", "安全稱呼仍需讓讀者理解它是正式開頭。"], ["u32-s221-choose-safe-city-office-salutation", "apply-no-guessing-rule-to-unknown-addressee"], "email-greeting-limited-information", ["turn-place-name-into-person-title"]),
  ]),
  ...skillQuestions("222", [
    q("Can you help at the book sale on Saturday? Please tell me yes or no.\nWhich reply answers the request?", ["Yes, I can help on Saturday.", "The books are on the table.", "Saturday has good weather.", "I like reading."], 0, ["回覆明確表示願意並重述協助日期。", "這是物品位置，沒有回答能否幫忙。", "天氣評論與請求無關。", "閱讀喜好也不能表示是否出席。"], ["完整回覆須包含明確決定。", "相關主題字不等於回答來訊。"], ["u32-s222-answer-yes-no-volunteer-request", "reject-topic-related-but-nonresponsive-sentences"], "message-reply-decision", ["reply-with-related-background-only"]),
    q("Which bus will you take, the 4:10 or the 4:40 bus?\nWhich reply gives the needed choice?", ["The bus stop is near my house.", "I will take the 4:40 bus.", "Buses can be crowded.", "I have a ticket."], 1, ["地點沒有回答二選一。", "回覆清楚選擇四點四十分的公車。", "一般評論沒有指出班次。", "有票也不表示搭哪班車。"], ["選擇題式來訊要回覆指定選項。", "答案保留正確交通工具和時刻。"], ["u32-s222-select-one-offered-bus-time", "distinguish-choice-response-from-related-facts"], "message-reply-choice", ["mention-bus-without-selecting-service"]),
    q("I left your blue bag at the office. Can you get it before five?\nWhich reply is complete?", ["The office is big.", "I own a blue bag.", "Yes, I will get it from the office before five.", "Five is my favorite number."], 2, ["辦公室大小與取物無關。", "擁有袋子沒有承諾領取。", "回覆包含決定、地點與期限。", "數字喜好不是時間安排。"], ["必要資訊由問句中的物品、地點和期限構成。", "正確回覆沒有漏掉 before five。"], ["u32-s222-compose-pickup-confirmation-with-deadline", "cover-object-place-and-time-in-reply"], "message-reply-multiple-details", ["confirm-ownership-but-not-action"]),
    q("Can you come to dinner tonight?\nThe writer is sick and cannot go. Which reply is clear?", ["Dinner is food.", "Maybe the table is ready.", "Tonight comes after today.", "Sorry, I cannot come because I am sick."], 3, ["字義說明沒有回覆邀請。", "不確定的桌面狀態與出席無關。", "時間常識不表示決定。", "回覆禮貌拒絕並提供題目給定的原因。"], ["不能出席時仍需直接說明決定。", "原因來自情境，沒有另外編造。"], ["u32-s222-write-clear-decline-with-given-reason", "avoid-vague-or-unrelated-invitation-response"], "message-reply-decline", ["avoid-direct-no-by-giving-general-comment"]),
    q("What time can you meet, and where should we wait?\nWhich reply answers both questions?", ["I can meet at six by the library door.", "The library has many books.", "Six people can come.", "I will wait for your next message."], 0, ["六點回答時間，圖書館門口回答地點。", "只描述場所，沒有時間或會合位置。", "six 被誤作人數，也未給地點。", "等待新訊息沒有回答目前兩個問題。"], ["多問句回覆要逐一覆蓋。", "同一句可以簡潔提供兩項必要資料。"], ["u32-s222-cover-time-and-place-questions", "map-two-wh-requests-to-two-reply-details"], "message-reply-two-part", ["answer-only-one-of-two-questions"]),
    q("Please bring two chairs to Room 7 before class.\nWhich reply confirms the exact task?", ["Room 2 has seven chairs.", "I will bring two chairs to Room 7 before class.", "I can sit before class.", "The class has many rooms."], 1, ["數量與教室都被顛倒。", "回覆保留兩張椅子、第七教室和課前期限。", "坐下不是搬椅子。", "一般描述沒有承諾行動。"], ["確認句不可更動數字與目的地。", "答案重述任務是為了消除執行歧義。"], ["u32-s222-confirm-exact-delivery-task", "preserve-quantity-destination-and-deadline"], "message-reply-task-confirmation", ["swap-numbers-across-fields"]),
    q("Are you walking or taking the train to the park?\nWhich reply removes doubt?", ["The park is green.", "I will arrive soon.", "I am taking the train.", "Walking and trains are useful."], 2, ["場所外觀沒有回答交通方式。", "soon 只提供模糊時間。", "回覆從兩個選項中明確選擇火車。", "並列評論仍未說自己怎麼去。"], ["二選一問題需要指定其中一項。", "到達承諾不能替代交通方式。"], ["u32-s222-answer-transport-alternative-directly", "reject-vague-arrival-as-mode-response"], "message-reply-alternative", ["state-related-opinion-without-choice"]),
    q("The meeting moved from Tuesday to Wednesday. Please tell me if you can still come.\nWhich reply fits?", ["Tuesday comes before Wednesday.", "Meetings need chairs.", "I read the old message.", "Yes, I can come on Wednesday."], 3, ["日期順序常識沒有表示能否出席。", "物品需求未在來訊中提出。", "讀過舊訊息不能回答新安排。", "回覆承認新日期並清楚確認出席。"], ["變更後的回覆必須使用新資訊。", "still can 的問題由 yes 加新日期完整回答。"], ["u32-s222-respond-to-updated-meeting-date", "confirm-attendance-against-current-not-old-plan"], "message-reply-change-confirmation", ["acknowledge-message-without-new-decision"]),
    q("Would you like rice or noodles, and can you arrive by noon?\nWhich reply gives both decisions?", ["Noodles, and I can arrive before noon.", "Rice is grown on farms.", "Noon is twelve o'clock.", "I will eat after I arrive."], 0, ["選擇麵並回答能在中午前到達。", "這是食物知識，未做選擇。", "只解釋時間，沒有承諾或餐點。", "到達後吃飯仍沒說吃什麼或能否準時。"], ["兩項問題分別需要餐點與到達答覆。", "before noon 符合 by noon 的期限。"], ["u32-s222-combine-meal-choice-and-arrival-deadline", "answer-preference-and-feasibility-together"], "message-reply-dual-decision", ["respond-with-definition-instead-of-choice"]),
    q("Please send the picture by Thursday and tell me when it is done.\nWhich reply is useful after the picture has been sent?", ["Pictures can have many colors.", "I sent the picture this morning.", "Thursday is a weekday.", "I may look for a picture next month."], 1, ["一般描述不回報任務狀態。", "回覆說明已完成，並提供完成時間。", "日期分類不是通知。", "下個月才找明顯不符合期限。"], ["完成後回覆應報告動作與狀態。", "時態 sent 表示任務已完成。"], ["u32-s222-report-completed-send-task", "use-completion-status-and-time-in-reply"], "message-reply-completion", ["repeat-deadline-without-reporting-action"]),
    q("Can you pick up Ben at the station at 5:30 and call me after you meet him?\nWhich reply accepts every part?", ["Ben likes the station.", "I can call at 5:30 without going there.", "Yes. I will meet Ben at the station at 5:30 and call you afterward.", "I will ask Ben to pick up the station."], 2, ["人物喜好與接送任務無關。", "只打電話並未接人，而且 after 條件被忽略。", "回覆包含人物、地點、時間和見面後來電。", "station 不能成為被接送的物件，人物角色也顛倒。"], ["複合任務需保留先後次序。", "afterward 清楚連回見到 Ben 之後。"], ["u32-s222-accept-pickup-and-followup-call", "preserve-agent-person-place-time-and-sequence"], "message-reply-sequenced-task", ["complete-followup-but-skip-main-task"]),
    q("Do you want to join the game, and if so, which team will you play on?\nWhich reply is fully responsive?", ["Games are exciting.", "The red team won yesterday.", "I have sports shoes.", "Yes, I will join the blue team."], 3, ["個人感受沒有回答參加與隊伍。", "過去賽果不是自己的選擇。", "擁有球鞋仍不表示是否參賽。", "yes 回答參加，blue team 回答第二問。"], ["條件式第二問只有在答應參加後才需回答。", "正確句用最少文字完成兩個溝通目標。"], ["u32-s222-answer-conditional-team-choice", "resolve-participation-before-dependent-detail"], "message-reply-conditional", ["mention-sport-related-item-without-decision"]),
  ]),
  ...skillQuestions("223", [
    q("Post: Our class planted ten trees today. I felt proud of everyone.\nWhich part reports something that happened?", ["Our class planted ten trees today.", "I felt proud.", "Everyone should love trees.", "It was the best day ever."], 0, ["這句提供可核對的行動、數量與日期。", "proud 是寫作者的個人感受。", "這是建議性主張，原貼文未寫。", "最高程度評價也未出現在原文。"], ["事件資訊與個人反應可以出現在同一貼文。", "可核對不代表讀者已親自查證，只表示句型提出事實主張。"], ["u32-s223-locate-checkable-event-statement", "separate-reported-action-from-feeling"], "social-post-fact", ["treat-emotion-as-event-detail"]),
    q("The park opens on Monday. It looks wonderful in the morning light.\nWhich words show the writer's personal view?", ["opens on Monday", "looks wonderful", "the park", "morning light"], 1, ["這一段提供開放日期。", "wonderful 表達寫作者對景象的評價。", "park 只是談論的場所。", "morning light 是觀察情境，不自行構成評價。"], ["評價字比日期與名詞更能指出個人反應。", "答案定位到實際承載看法的短語。"], ["u32-s223-identify-evaluative-language-in-post", "distinguish-view-word-from-setting-nouns"], "social-post-opinion-language", ["choose-nearby-context-instead-of-evaluation"]),
    q("Post: The school band played three songs. I loved the last one.\nWhat does the post include?", ["Only a personal feeling", "Only a number with no event", "An event detail and a personal reaction", "Proof that the last song was best"], 2, ["第一句還提供表演與曲數。", "three songs 連到樂團演奏事件。", "第一句是事件資訊，第二句是個人喜愛。", "一個人的喜愛不能證明歌曲客觀最佳。"], ["兩句在同一貼文中扮演不同功能。", "反應可真實表達，卻不等於普遍證明。"], ["u32-s223-classify-mixed-fact-and-reaction-post", "avoid-turning-preference-into-proof"], "social-post-mixed-content", ["force-whole-post-into-one-category"]),
    q("My picture received 200 likes. This proves it is the best picture here.\nWhich response is careful?", ["Two hundred likes prove every viewer agrees.", "The picture must be the oldest one.", "A popular picture can never be good.", "The number of likes does not prove it is the best."], 3, ["按讚數不能代表每位觀看者意見一致。", "貼文沒有上傳日期或作品年代。", "受歡迎與品質並非互斥，這句也過度否定。", "數量是可見資料，但最高品質結論仍需要其他標準。"], ["社群反應數與作品評價不是同一種證據。", "謹慎回答不否定數字，只限制它能支持的結論。"], ["u32-s223-evaluate-likes-as-insufficient-proof", "limit-popularity-metric-inference"], "social-post-evidence-limit", ["equate-many-likes-with-objective-best"]),
    q("Post: The clean-up began at nine and ended at eleven.\nWhich question can be answered directly?", ["How long did the clean-up last?", "Did every worker enjoy it?", "Was it the best event this year?", "Will it happen again next month?"], 0, ["九點到十一點可直接算出兩小時。", "貼文沒有每位工作者的感受。", "沒有年度比較資料。", "未來日期也未提供。"], ["可直接回答的問題必須有足夠文字證據。", "時間區間支持長度，卻不支持評價或預測。"], ["u32-s223-select-directly-answerable-post-question", "derive-duration-without-adding-attitudes-or-future"], "social-post-evidence-question", ["choose-plausible-but-unstated-followup"]),
    q("I think the new lunch menu is much better.\nWhat kind of information is this?", ["A rule all students must follow", "The writer's reaction", "The exact lunch price", "The number of meals sold"], 1, ["I think 表示看法，不是規則。", "better 是寫作者的比較評價。", "句中沒有金額。", "也沒有銷售數量。"], ["I think 是辨認個人觀點的重要線索。", "比較詞沒有被誤當成可量化資料。"], ["u32-s223-read-i-think-as-personal-reaction", "separate-evaluation-from-numeric-fact"], "social-post-reaction-marker", ["treat-opinion-marker-as-official-rule"]),
    q("Post: Forty students joined the walk, and the team gave water to everyone.\nWhat can readers know from the post?", ["Every student in town joined.", "The water was cold.", "Forty students took part.", "The walk was easy."], 2, ["forty students 不等於全鎮學生。", "水溫沒有描述。", "參與人數由第一句明確提供。", "活動難度也未說明。"], ["數量陳述的範圍只到貼文所稱參與者。", "答案避免把 everyone 的受水範圍擴大成全鎮參與。"], ["u32-s223-preserve-quantifier-scope-in-post", "reject-unstated-quality-and-temperature"], "social-post-detail", ["expand-limited-group-to-whole-community"]),
    q("Post: I tried the new bus route once, so it is always the fastest way to school.\nWhat is the problem with this claim?", ["A bus cannot go to school.", "The writer did not ride a bus.", "Fast travel is never useful.", "One trip is not enough to prove 'always'."], 3, ["公車可以作為上學交通。", "tried the new bus route 表示確實搭過。", "這是無關且絕對的否定。", "一次經驗不足以支持每次都最快的廣泛結論。"], ["always 需要比單次經驗更廣的證據。", "批判重點是證據範圍，而不是否定交通工具。"], ["u32-s223-challenge-always-from-single-experience", "compare-claim-scope-with-evidence-size"], "social-post-overgeneralization", ["reject-true-background-instead-of-weak-inference"]),
    q("Post: The team collected 50 books. I believe this was a wonderful start.\nWhich pair is classified correctly?", ["50 books: event information; wonderful start: personal view", "50 books: personal view; wonderful start: exact count", "Both parts: rules", "Both parts: future plans"], 0, ["數量可核對，wonderful 則是評價。", "兩種功能被完全顛倒。", "貼文沒有命令或規定。", "收書已發生，且評語不是未來計畫。"], ["同一句組合中仍可逐片段分類。", "數字不會使旁邊的形容評價也變成事實。"], ["u32-s223-pair-event-number-with-evaluative-comment", "classify-two-clause-functions-separately"], "social-post-clause-classification", ["assign-one-information-type-to-both-clauses"]),
    q("Nina writes, 'The show began at seven. In my view, the ending was too long.'\nWhich statement is supported?", ["Everyone disliked the ending.", "Nina thought the ending was too long.", "The show ended at seven.", "The ending lasted seven hours."], 1, ["Nina 的看法不能代表所有人。", "in my view 明確把評價限定為 Nina 的反應。", "七點是開始時刻。", "時間數字沒有表示片長。"], ["觀點持有人和時間欄位都需精確追蹤。", "正確答案不把個人判斷擴成集體結論。"], ["u32-s223-attribute-opinion-to-named-writer", "distinguish-start-clock-time-from-duration"], "social-post-view-attribution", ["universalize-one-writers-opinion"]),
    q("Post: It rained during the game, and we moved inside. The change made the game more fun for me.\nWhich part explains what the group did?", ["more fun for me", "during the game", "we moved inside", "It rained"], 2, ["這是個人對變更的反應。", "這只是事件發生的時間背景。", "we moved inside 說明團體採取的行動。", "下雨是原因，不是團體所做的事。"], ["人物動作需和天氣原因、個人感受分開。", "主詞 we 鎖定題目所問的 group。"], ["u32-s223-locate-group-action-in-mixed-post", "separate-cause-action-and-personal-result"], "social-post-action-role", ["choose-cause-instead-of-group-action"]),
    q("Post: The library added twenty seats this week. I hope it will stay quiet.\nWhich description is accurate?", ["Both sentences report completed actions.", "Both sentences give official library rules.", "The first is only a hope, and the second is a count.", "The first reports a change; the second expresses a hope."], 3, ["hope 指向期待，不是已完成行動。", "兩句都不是規則公告。", "兩句功能被顛倒。", "新增座位是已報告變更，安靜則是個人願望。"], ["時態與 hope 能區分事件和反應。", "答案沒有把願望提升為圖書館承諾。"], ["u32-s223-contrast-completed-change-with-future-hope", "avoid-reading-personal-hope-as-institutional-policy"], "social-post-event-and-hope", ["reverse-fact-and-wish-functions"]),
  ]),
  ...skillQuestions("224", [
    q("Message: Can you meet Tuesday or Wednesday? Where should we meet?\nReply: Wednesday is good for me.\nWhat is missing from the reply?", ["The meeting place", "The chosen day", "The writer's name", "The month"], 0, ["回覆選了 Wednesday，卻沒有回答會面地點。", "星期三已清楚提供。", "原訊息沒有要求署名。", "月份也不是問題的一部分。"], ["逐問核對可看出第二問未回覆。", "缺漏判斷只針對原訊息真正要求的資料。"], ["u32-s224-find-unanswered-meeting-place", "map-original-questions-to-reply-coverage"], "message-reply-gap", ["mark-already-answered-day-as-missing"]),
    q("Message: Bring the red bag to Room 5 before noon.\nReply: I will take the red bag to Room 5 at eleven.\nHow well does the reply match?", ["It changes the bag color.", "It covers every required detail.", "It uses the wrong room.", "It is too late."], 1, ["red bag 在兩段中一致。", "物品、地點和十一點早於中午都符合。", "Room 5 沒有被改動。", "十一點仍在中午以前。"], ["完整對應需檢查物品、地點與期限。", "不同時間表達仍可符合 before noon。"], ["u32-s224-verify-complete-task-correspondence", "interpret-eleven-as-within-noon-deadline"], "message-reply-full-match", ["treat-nonidentical-time-wording-as-conflict"]),
    q("Message: The game is canceled.\nReply: Great, I will see you at the game.\nWhat is wrong?", ["The reply gives no game score.", "The message names no team.", "The reply plans to attend an event that will not happen.", "The word great is too short."], 2, ["原訊息沒有要求比分。", "隊名不是理解取消狀態的必要資訊。", "回覆仍打算到場，和 canceled 直接矛盾。", "問題在內容衝突，不在字數。"], ["先比較事件狀態，再判斷回覆行動。", "語氣詞不能掩蓋取消與出席的矛盾。"], ["u32-s224-detect-canceled-event-reply-contradiction", "prioritize-semantic-conflict-over-style"], "message-reply-contradiction", ["focus-on-missing-unrequested-detail"]),
    q("Message: Tell me how many tickets you need and whether you want the morning show.\nReply: Yes, the morning show.\nWhich detail is still needed?", ["The theater name", "The movie title", "The ticket price", "The number of tickets"], 3, ["場所名稱未被詢問。", "片名也不在兩個問題中。", "票價不是收件者要提供的資料。", "回覆選了場次，但沒有說需要幾張票。"], ["兩部分要求中只有 morning show 已回答。", "缺少的是數量，不是其他常見購票資訊。"], ["u32-s224-identify-missing-ticket-quantity", "distinguish-requested-detail-from-contextual-extras"], "message-reply-partial-coverage", ["invent-missing-detail-not-requested"]),
    q("Message: Meet at 4:30 by the north gate.\nReply: I will be at the north gate at 3:40.\nWhat does the reply get wrong?", ["The meeting time", "The gate", "The direction", "The plan to meet"], 0, ["3:40 與原定 4:30 不同。", "兩段都寫 north gate。", "north 方向沒有改變。", "回覆仍表示會前往會面。"], ["數字順序相似仍必須精確比較。", "只有時刻欄發生衝突。"], ["u32-s224-compare-transposed-meeting-times", "hold-matching-location-constant"], "message-reply-time-conflict", ["overlook-reversed-time-digits"]),
    q("Message: Can you bring one cake and arrive before six?\nReply: I will bring one cake at 5:30.\nWhich statement is true?", ["The reply brings too many cakes.", "The reply matches the item and time limits.", "The reply arrives after six.", "The reply changes the food."], 1, ["數量仍是一個。", "one cake 符合物品，5:30 也早於六點。", "五點半在六點以前。", "cake 在兩段中相同。"], ["回覆不必逐字相同，只要語意條件一致。", "時刻要放入 before six 的範圍判斷。"], ["u32-s224-confirm-equivalent-deadline-response", "evaluate-specific-time-against-before-limit"], "message-reply-condition-match", ["treat-different-surface-wording-as-error"]),
    q("Message: Can you help on Friday or Saturday?\nReply: Yes, I can help.\nWhy is the reply incomplete?", ["It has no reason for helping.", "It does not name the work.", "It is written in English.", "It does not choose a day."], 3, ["原訊息沒有要求理由。", "工作內容不需要由收件者重述。", "使用英文不是資訊缺漏。", "yes 回答意願，但 Friday 或 Saturday 尚未選定。"], ["答應一件事不一定回答了所有限制。", "二選一日期仍需明確決定。"], ["u32-s224-diagnose-ambiguous-yes-with-day-choice", "separate-acceptance-from-option-selection"], "message-reply-ambiguity", ["accept-general-yes-for-multiple-choice-request"]),
    q("Message: Please leave the blue key at the front desk.\nReply: I left the red key at the front desk.\nWhat changed incorrectly?", ["The action", "The place", "The time", "The key color"], 3, ["兩段都是 leave 或 left 這個動作。", "front desk 也一致。", "原訊息沒有指定時刻可供比較。", "blue 被回覆改成 red，物品辨識不符。"], ["相同地點不能抵銷物品屬性的錯誤。", "比較時要逐欄確認顏色修飾的對象。"], ["u32-s224-detect-object-color-mismatch", "compare-modifier-on-requested-item"], "message-reply-object-conflict", ["check-place-but-ignore-item-attribute"]),
    q("Message: Are you coming, and should I save a seat for Nina too?\nReply: Yes, I am coming, and please save one for Nina.\nWhat is true?", ["The reply answers both questions.", "The reply forgets Nina.", "The reply says no one is coming.", "The reply asks for two seats for Nina."], 0, ["第一部分確認出席，第二部分回覆替 Nina 留位。", "Nina 在回覆中被明確提到。", "yes 與此敘述相反。", "one 指一個座位，不是兩個。"], ["兩個協調連接的問句都有對應內容。", "代名詞 one 回指單數 seat。"], ["u32-s224-verify-two-question-reply-with-pronoun", "resolve-one-as-single-seat-reference"], "message-reply-complete-correspondence", ["miss-pronoun-reference-in-second-answer"]),
    q("Message: Take the form to Ms. Lin in Room 4.\nReply: I gave the form to Mr. Lin in Room 4.\nWhere is the mismatch?", ["The room number", "The person receiving the form", "The item", "The action is unfinished"], 1, ["Room 4 完全相同。", "Ms. Lin 被改成 Mr. Lin，收件者身分不符。", "兩段都是 form。", "gave 表示動作已完成，不是未完成。"], ["相同姓氏不能掩蓋稱謂差異。", "人物身分是交付任務的必要條件。"], ["u32-s224-compare-recipient-title-in-task-reply", "hold-item-and-room-constant-while-checking-person"], "message-reply-person-conflict", ["ignore-title-because-family-name-matches"]),
    q("Message: The trip leaves at eight. Be at school twenty minutes early.\nReply: I will reach school at 7:40.\nHow does the reply relate to the message?", ["It is twenty minutes late.", "It changes the trip to 7:40.", "It follows the arrival instruction.", "It says the trip leaves from home."], 2, ["七點四十分比八點早二十分鐘。", "7:40 是到校時間，不是旅程出發時間。", "回覆正好符合提前二十分鐘到校。", "出發地點仍是 school，沒有 home。"], ["早到要求需要用減法核對。", "同一回覆中的 arrive 與 leave 時刻功能不同。"], ["u32-s224-derive-required-early-arrival-match", "separate-arrival-time-from-departure-time"], "message-reply-derived-time-match", ["treat-arrival-time-as-new-departure"]),
    q("Message: The office is closed today. Please come tomorrow after ten.\nReply: I will come today at eleven.\nWhich summary is accurate?", ["The reply follows the time and day.", "Only the hour is wrong.", "The office opens today after ten.", "The hour fits, but the day conflicts with the message."], 3, ["today 與 tomorrow 不同。", "十一點符合 after ten，錯的是日期。", "原文說今天關閉。", "十一點在十點後，但回覆選了不能前往的今天。"], ["複合時間資訊可出現一部分符合、一部分衝突。", "答案精確指出日期問題，沒有誤判時刻。"], ["u32-s224-evaluate-partly-matching-day-and-hour", "separate-day-conflict-from-valid-hour-range"], "message-reply-partial-conflict", ["mark-whole-time-expression-correct-from-hour-only"]),
  ]),
];

export const ENGLISH_UNIT_SOURCE = {
  unitId: UNIT_ID,
  lectures: ENGLISH_U32_LECTURES,
  questions: ENGLISH_U32_QUESTIONS,
  vocabularyPolicy: {
    capQuestionBasis: "appendix-5-table-1",
    additionalLearningTerms: ["accept", "activity", "add", "avoid", "cancel", "complete", "crowded", "current", "decision", "describe", "direct", "direction", "doubt", "event", "express", "fit", "form", "greet", "hall", "include", "information", "kilometer", "limit", "match", "message", "natural", "personal", "promise", "purpose", "receive", "remind", "return", "score", "state", "support", "title", "travel", "weekday", "whole"],
    contextualizedAboveRangeTerms: ["accurate", "afterward", "announce", "arrival", "attend", "claim", "classified", "confirms", "conflicts", "description", "detail", "disliked", "due", "exact", "folder", "format", "fully", "grown", "incomplete", "incorrectly", "instead", "instruction", "madam", "mismatch", "official", "proof", "prove", "proves", "reaction", "relate", "removes", "replied", "reply", "request", "required", "response", "responsive", "route", "safest", "schedule", "signature", "statement", "suitable", "summary", "task", "teammate", "unfinished", "view", "viewer"],
    properNames: ["Amy", "Ben", "Chen", "David", "Eric", "Ho", "Ken", "Kim", "Lee", "Leo", "Lily", "Lin", "Mia", "Mina", "Nina", "Omar", "Rita", "Rosa", "Sam", "Wang", "Wu"],
    grammarNotation: ["a", "A", "B", "C", "D", "p.m."],
    malformedDistractors: [],
  },
};
