const UNIT_ID = "ENG_R4_U30";

function lecture(id, skillId, content) {
  return {
    id,
    skillId,
    ...content,
    sections: content.sections.map((section, index) => ({
      id: id + "_SEC_" + String(index + 1).padStart(2, "0"),
      ...section,
    })),
  };
}

const DIFFICULTIES = [
  "foundation",
  "foundation",
  "foundation",
  "standard",
  "standard",
  "standard",
  "standard",
  "advanced",
  "advanced",
  "advanced",
  "transfer",
  "transfer",
];

function skillQuestions(skillNumber, values) {
  if (values.length !== 12)
    throw new Error(
      "ENG_R4_S" + skillNumber + ": expected 12 authored questions",
    );
  return values.map((value, index) => ({
    id: "ENG_R4_Q_" + skillNumber + "_" + String(index + 1).padStart(2, "0"),
    skillId: "ENG_R4_S" + skillNumber,
    difficulty: DIFFICULTIES[index],
    ...value,
  }));
}

export const ENGLISH_U30_LECTURES = [
  lecture("ENG_R4_L_S204", "ENG_R4_S204", {
    objectives: [
      "能從語句、人物關係與情境判斷請求、邀請、道歉及感謝。",
      "能分辨字面形式相近但溝通目的不同的說法。",
    ],
    sections: [
      {
        title: "同一句型可能完成不同溝通任務",
        content:
          "理解對話不能只看問號或禮貌字。Could you pass the salt? 雖是問句形式，真正目的是請對方遞鹽；Would you like to join us? 則是在邀請。先找說話者希望對方接下來做什麼，再判斷功能。",
      },
      {
        title: "請求和邀請的差別在受益與選擇",
        content:
          "請求通常希望對方替說話者完成一件事，例如借物、開門或提供協助。邀請則提出共同活動，讓對方決定是否參加。Can I use your phone? 是請求允許，不是邀請對方一起使用電話。",
      },
      {
        title: "道歉要承認造成的問題",
        content:
          "I'm sorry 後若提到自己的行為和對方受到的影響，功能就是道歉。單說 Excuse me 有時只是先取得注意或禮貌打斷，不一定表示做錯事；要連同後續內容判斷。",
      },
      {
        title: "感謝會指出收到的幫助",
        content:
          "Thanks、Thank you 和 I appreciate it 都能表達感謝。完整情境常會指出對方做了什麼，例如等待、提醒或借出物品。若語句只是接受邀請，像 Yes, I'd love to，主要功能仍是接受，不等於感謝。",
      },
    ],
    workedExamples: [
      {
        id: "ENG_R4_L_S204_EX_01",
        prompt: "Could you hold the door for me, please?",
        steps: [
          "找出對方被期待完成的動作。",
          "確認動作是替說話者提供協助。",
          "將功能判定為請求。",
        ],
        answer: "Asking someone to hold the door.",
        why: "說話者希望對方替自己扶住門，重點是請對方採取行動。Could you 的問句形式在此不是詢問能力，而是較有禮貌的請求。",
      },
      {
        id: "ENG_R4_L_S204_EX_02",
        prompt: "We're having lunch at noon. Would you like to come?",
        steps: [
          "辨認正在安排的共同活動。",
          "注意對方可以選擇參加或不參加。",
          "將功能判定為邀請。",
        ],
        answer: "An invitation.",
        why: "前句提出午餐活動，後句詢問對方是否願意加入，因此是邀請。它沒有要求對方替說話者完成工作，也不是單純詢問行程。",
      },
      {
        id: "ENG_R4_L_S204_EX_03",
        prompt: "Thank you for telling me about the change.",
        steps: [
          "找出明確的 thank you。",
          "確認 for 後指出收到的幫助。",
          "將功能判定為感謝。",
        ],
        answer: "Thanks.",
        why: "說話者因對方告知變更而受益，Thank you for 明確表達感謝。若只有說明變更本身，才可能只是提供資訊。",
      },
    ],
    misconceptions: [
      {
        belief: "句尾有問號就一定是在詢問資訊。",
        whyWrong: "請求和邀請也常使用問句形式。",
        correction: "判斷說話者期待對方回答資訊、採取行動或加入活動。",
      },
      {
        belief: "看到 please 就一定是道歉。",
        whyWrong: "please 通常使請求較有禮貌，並不承認錯誤。",
        correction: "道歉需有 sorry、錯誤行為或造成影響等線索。",
      },
      {
        belief: "Excuse me 在所有情況都表示做錯事。",
        whyWrong: "它也可用來取得注意或禮貌打斷。",
        correction: "閱讀後句，確認說話者是在開口、經過他人，還是承認錯誤。",
      },
      {
        belief: "接受邀請時說 Yes, please，主要功能就是感謝。",
        whyWrong: "禮貌字不會取代整句的核心目的。",
        correction: "先判斷這句是否在回應參加、提供協助或收到幫助。",
      },
    ],
    checks: [
      {
        prompt: "Can I borrow your pen? 主要是詢問鋼筆價格嗎？",
        answer: "不是",
        reason: "說話者是在請求借用物品。",
      },
      {
        prompt: "I'm sorry I am late. 承認了什麼問題？",
        answer: "自己遲到",
        reason: "late 指出道歉所針對的行為。",
      },
      {
        prompt: "Would you like some tea? 是請求還是提供？",
        answer: "提供",
        reason: "說話者把茶提供給對方選擇。",
      },
    ],
    assets: [],
  }),
  lecture("ENG_R4_L_S205", "ENG_R4_S205", {
    objectives: [
      "能依人物關係、場所與事情急迫程度選擇合宜語氣。",
      "能在不改變核心訊息下，把命令改為清楚而有禮貌的表達。",
    ],
    sections: [
      {
        title: "場合決定表達的直接程度",
        content:
          "對熟悉同學說 Pass me the ball, please 通常自然；向陌生人、師長或服務人員提出較大的請求時，Could you...? 或 Would you mind...? 會更合宜。禮貌不等於把句子拉長，而是尊重對方的選擇與負擔。",
      },
      {
        title: "急迫情況可以短但仍要清楚",
        content:
          "遇到危險時，Stop! 或 Watch out! 比長句有效，因為首要目的是立即避免傷害。一般情況若只說 Give me that，容易像命令；加上具體物品和 please，可降低誤解。",
      },
      {
        title: "先取得注意再提出需求",
        content:
          "和陌生人或正在工作的服務人員說話，可先用 Excuse me，再提出問題。I'm sorry to interrupt 也可標示打斷。這些開場不是裝飾，而是讓對方知道你要開始一段新的互動。",
      },
      {
        title: "委婉仍需保留重要資訊",
        content:
          "Could you help me? 很有禮貌，卻可能資訊不足。若需要找書，可說 Could you help me find this book, please? 合宜表達同時包含對象、需求和必要細節，不用含糊語氣掩蓋目的。",
      },
    ],
    workedExamples: [
      {
        id: "ENG_R4_L_S205_EX_01",
        prompt: "You need help from a library worker. What could you say?",
        steps: [
          "辨認對方是正在工作的陌生成人。",
          "先禮貌取得注意。",
          "清楚說明要找的書。",
        ],
        answer: "Excuse me. Could you help me find this book, please?",
        why: "這個說法先以 Excuse me 開始，再清楚提出找書需求。它比 Find this book for me 尊重對方，也比只說 Help me 提供更多必要資訊。",
      },
      {
        id: "ENG_R4_L_S205_EX_02",
        prompt: "A bike is coming toward your friend. What should you shout?",
        steps: [
          "確認情況有立即危險。",
          "選擇能迅速引起注意的短句。",
          "避免加入延誤反應的客套語。",
        ],
        answer: "Watch out!",
        why: "自行車正在接近，首要目的是讓朋友立刻注意危險。Watch out! 短而明確；此時使用很長的委婉問句反而可能耽誤反應。",
      },
      {
        id: "ENG_R4_L_S205_EX_03",
        prompt: "You want a classmate to move one chair. What could you say?",
        steps: [
          "對象是熟悉同學。",
          "請求內容簡單且負擔小。",
          "使用直接、具體並帶 please 的說法。",
        ],
        answer: "Please move this chair a little.",
        why: "同學之間的小請求不必刻意使用很正式的句型。這句指出是哪張椅子和需要移動的程度，也以 please 保持尊重。",
      },
    ],
    misconceptions: [
      {
        belief: "句子越長就一定越有禮貌。",
        whyWrong: "冗長可能使需求不清楚，甚至增加對方理解負擔。",
        correction: "保留必要資訊，再依關係選擇直接或委婉句型。",
      },
      {
        belief: "任何場合都應使用最正式的 Would you mind。",
        whyWrong: "日常簡單互動過度正式可能顯得不自然。",
        correction: "依對方身分、請求大小與場合調整語氣。",
      },
      {
        belief: "緊急時仍要先完整道歉再警告。",
        whyWrong: "過長開場會延後關鍵警示。",
        correction: "危險時先用 Stop 或 Watch out，安全後再補充說明。",
      },
      {
        belief: "只要加 please，命令的內容再含糊也沒有關係。",
        whyWrong: "對方仍可能不知道要做什麼。",
        correction: "禮貌和清楚要同時具備，說明必要的動作與對象。",
      },
    ],
    checks: [
      {
        prompt: "向陌生人問路時，可先用哪個短語？",
        answer: "Excuse me.",
        reason: "它能禮貌取得對方注意。",
      },
      {
        prompt: "火靠近紙張時，應先說長篇客套話嗎？",
        answer: "不應該",
        reason: "應先給立即且明確的安全警告。",
      },
      {
        prompt: "Could you help? 一定提供了足夠資訊嗎？",
        answer: "不一定",
        reason: "還要看情境是否清楚指出需要哪種協助。",
      },
    ],
    assets: [],
  }),
  lecture("ENG_R4_L_S206", "ENG_R4_S206", {
    objectives: [
      "能找出訊息中不清楚的詞、指涉、數量、時間或步驟。",
      "能提出中立且精確的澄清問題，避免自行猜測。",
    ],
    sections: [
      {
        title: "澄清不是重問整句",
        content:
          "當訊息有一個不確定點時，問題要直接鎖定該點。Come early 不清楚的是時間，可問 What time should I arrive? 若只說 What?，對方不知道你究竟沒聽見還是不理解。",
      },
      {
        title: "聽不清楚時提出有限選項",
        content:
          "電話中 fifteen 和 fifty 容易混淆，可以問 Did you say fifteen or fifty? 這比假裝聽懂更安全。有限選項必須來自實際聽到的可能內容，不能加入毫無根據的新資訊。",
      },
      {
        title: "代名詞和地點常需要確認指涉",
        content:
          "Put it there 若前文有多個物品或位置，就缺少明確指涉。可以問 Which box do you mean? 或 Which table should I use? 澄清問題一次可處理最影響行動的資訊。",
      },
      {
        title: "確認後要用自己的話回述",
        content:
          "對方補充後，可簡短確認：So I should bring two bottles by nine, right? 回述能讓雙方檢查數量、時間和動作是否一致，但不要把尚未證實的猜測說成事實。",
      },
    ],
    workedExamples: [
      {
        id: "ENG_R4_L_S206_EX_01",
        prompt: "Please come early tomorrow.",
        steps: [
          "找出 early 沒有明確時間。",
          "保留 tomorrow，不重問已知資訊。",
          "針對到達時間提問。",
        ],
        answer: "What time should I arrive tomorrow?",
        why: "tomorrow 已經確定，不需要再問日期；真正缺少的是 early 代表幾點。問題直接要求明確到達時間，能避免雙方對早晚的標準不同。",
      },
      {
        id: "ENG_R4_L_S206_EX_02",
        prompt: "Anna told Mia that she won.",
        steps: [
          "找出 she 可能指兩個人。",
          "不要任意選最近的人名。",
          "詢問得勝者是誰。",
        ],
        answer: "Does 'she' mean Anna or Mia?",
        why: "句中 Anna 和 Mia 都可能是 she 的指涉對象，單靠距離不能確定。把兩個可能人物都列出，能請說話者補足真正的得勝者。",
      },
      {
        id: "ENG_R4_L_S206_EX_03",
        prompt: "Add some water to the bowl.",
        steps: [
          "確認動作和容器已知。",
          "找出 some 沒有明確數量。",
          "詢問需要加入多少水。",
        ],
        answer: "How much water should I add?",
        why: "若料理結果受到水量影響，some 並不足以執行。How much 直接要求數量，不必再問已知的容器或動作。",
      },
    ],
    misconceptions: [
      {
        belief: "沒聽懂時只要一直說 What? 就能有效修復。",
        whyWrong: "對方不知道需重複哪一部分或改用什麼說法。",
        correction: "指出不確定的字、數量、人物或步驟。",
      },
      {
        belief: "代名詞通常指最近的名詞，所以不必詢問。",
        whyWrong: "語法距離不能保證符合真正情境。",
        correction: "有兩個合理指涉時，列出人名請對方確認。",
      },
      {
        belief: "澄清問題可以加入自己猜測的細節。",
        whyWrong: "新細節可能引導對方接受原本沒有的內容。",
        correction: "只問從訊息中確實產生的不確定點。",
      },
      {
        belief: "對方回答一次後就不需要回述。",
        whyWrong: "多個數字或步驟仍可能被聽錯。",
        correction: "在重要安排中，用一句話確認關鍵動作、時間與數量。",
      },
    ],
    checks: [
      {
        prompt: "Please put it there 最常缺少哪兩類資訊？",
        answer: "物品和位置",
        reason: "it 與 there 都需由前文找到明確指涉。",
      },
      {
        prompt: "Did you say fifteen or fifty? 在確認什麼？",
        answer: "聽到的數字",
        reason: "兩個發音相近的數字會造成不同結果。",
      },
      {
        prompt: "So we meet at six, right? 有什麼功能？",
        answer: "回述確認",
        reason: "它讓對方檢查時間是否被正確理解。",
      },
    ],
    assets: [],
  }),
  lecture("ENG_R4_L_S207", "ENG_R4_S207", {
    objectives: [
      "能把表情、手勢、語調與情境視為理解口語的輔助線索。",
      "能在字面訊息和非語言線索衝突時保留合理的不確定性。",
    ],
    sections: [
      {
        title: "非語言線索補充說話方式",
        content:
          "同一句 Really? 以升高語調、睜大眼睛說出，常表示驚訝；以平穩語調則可能只是確認。理解時要把說了什麼和怎麼說放在一起，但不能只靠一個表情推斷完整想法。",
      },
      {
        title: "手勢可指出字面省略的對象",
        content:
          "說 This one, please 時若同時指向菜單上的湯，手勢補足 this 的指涉。沒有手勢或前文時，this 可能不清楚；題目必須提供足以定位的可見情境。",
      },
      {
        title: "身體反應能顯示需求",
        content:
          "有人摀住耳朵並看向音響，接著說 Could you turn it down?，動作和語句共同指向音量。身體線索只能支持情境中可觀察的需求，不能用來診斷情緒或個性。",
      },
      {
        title: "文化與個人差異限制推論",
        content:
          "點頭、眼神和說話音量在不同文化或個人之間可能有差異。會考型題目應提供多個一致線索，例如語句、動作和事件結果；若線索不足，最安全的理解是承認無法確定。",
      },
    ],
    workedExamples: [
      {
        id: "ENG_R4_L_S207_EX_01",
        prompt: "Nora nods and says, 'Sure, I can help.'",
        steps: [
          "Sure 和 can help 表示同意。",
          "點頭與字面訊息方向一致。",
          "判斷她接受協助。",
        ],
        answer: "She agrees to help.",
        why: "Sure, I can help 已直接表達同意，點頭再加強這個意思。結論不需要推到她是否喜歡這項工作，只能確認她願意幫忙。",
      },
      {
        id: "ENG_R4_L_S207_EX_02",
        prompt:
          "During a picture game, Owen points to picture two and says, 'I mean that one.'",
        steps: [
          "that one 需要可見對象。",
          "手指方向定位第二張圖。",
          "將指涉連回第二張圖。",
        ],
        answer: "He means the second picture.",
        why: "句中的 that one 單獨看不夠明確，手勢把它連到第二張圖。不能因圖片位置再推測他喜歡或不喜歡那張圖。",
      },
      {
        id: "ENG_R4_L_S207_EX_03",
        prompt:
          "The music is loud. Lily covers her ears and asks, 'Could you turn it down?'",
        steps: [
          "語句要求降低音量。",
          "摀耳動作和音量問題一致。",
          "不加入未說明的音樂喜好。",
        ],
        answer: "She wants the music to be quieter.",
        why: "turn the music down 已指出要降低音量，摀住耳朵提供相同方向的線索。這不足以證明她討厭歌曲，只能判斷聲音對她太大。",
      },
    ],
    misconceptions: [
      {
        belief: "只要看到笑容，就能判定對方同意所有內容。",
        whyWrong: "笑容可能只是友善，不能取代明確回答。",
        correction: "以語句為主，再用一致的表情和動作補充。",
      },
      {
        belief: "一個手勢在所有文化中都有完全相同的意思。",
        whyWrong: "手勢會受文化和個人習慣影響。",
        correction: "依題目提供的語句、情境與結果共同判斷。",
      },
      {
        belief: "語氣和字面衝突時，一定要選和字面相反的意思。",
        whyWrong: "衝突可能表示玩笑、懷疑或資訊不足。",
        correction: "找更多線索；不足時不要做過度確定的推論。",
      },
      {
        belief: "看向某物就代表喜歡那個物品。",
        whyWrong: "視線可能只是指出位置或確認對象。",
        correction: "區分指涉線索和情感評價。",
      },
    ],
    checks: [
      {
        prompt: "指向菜單時說 This one，手勢補足什麼？",
        answer: "this 的指涉",
        reason: "手勢指出說話者選的是哪一項。",
      },
      {
        prompt: "摀耳朵一定表示討厭某首歌嗎？",
        answer: "不一定",
        reason: "它也可能只表示音量太大。",
      },
      {
        prompt: "非語言線索不足時可以假裝確定嗎？",
        answer: "不可以",
        reason: "應保留不確定並尋找更多情境證據。",
      },
    ],
    assets: [],
  }),
  lecture("ENG_R4_L_S208", "ENG_R4_S208", {
    objectives: [
      "能選擇回應對方重點並自然延續話題的句子。",
      "能以相關追問、回述或分享建立對話連接，而不突然換題。",
    ],
    sections: [
      {
        title: "先回應已經說出的內容",
        content:
          "對方說 I joined the art club 時，What do you like to draw? 能接住 art club；突然問數學作業會中斷話題。延續對話不一定要問問題，也可以先回述感受：That sounds exciting，再補一個相關問題。",
      },
      {
        title: "追問應從現有資訊往下走",
        content:
          "好的追問會要求原因、細節、感受或下一步，例如 What happened next?、How did you feel? 問題太廣或重複已知資訊，對方很難補充；問到尚未提及的私密內容也可能不合宜。",
      },
      {
        title: "分享自己經驗時要把話題交回去",
        content:
          "相關自我分享可以建立連結，例如 I was nervous on my first day too. What helped you? 若長篇只談自己而不回應對方，就可能把話題搶走。簡短連接後再給對方說話空間。",
      },
      {
        title: "完整回應邀請與困難",
        content:
          "收到邀請時可先接受或婉拒，再詢問時間、地點等必要資訊。對方表達困難時，先承認感受，再問可提供什麼協助。只說 OK 或改談別事，通常無法推進對話。",
      },
    ],
    workedExamples: [
      {
        id: "ENG_R4_L_S208_EX_01",
        prompt: "A: I visited the science museum yesterday. B: ___",
        steps: [
          "抓住 science museum 這個核心。",
          "選擇可帶出具體經驗的問題。",
          "不重問已知的日期。",
        ],
        answer: "What did you enjoy most there?",
        why: "問題沿著博物館經驗詢問最喜歡的部分，能讓 A 增加細節。若再問 Did you go yesterday? 只是重複已知資訊。",
      },
      {
        id: "ENG_R4_L_S208_EX_02",
        prompt: "A: I'm worried about tomorrow's talk. B: ___",
        steps: [
          "先回應 worried。",
          "避免立刻否定對方感受。",
          "詢問困難所在以便繼續。",
        ],
        answer: "I understand. Which part worries you most?",
        why: "先表示理解，再把問題縮到最擔心的部分，能協助 A 說明需求。Don't worry 可能出於好意，卻沒有回應擔心的原因。",
      },
      {
        id: "ENG_R4_L_S208_EX_03",
        prompt: "A: Would you like to join our walk on Saturday? B: ___",
        steps: [
          "先明確回應是否參加。",
          "從邀請中找缺少的安排資訊。",
          "提出一個相關問題。",
        ],
        answer: "Yes, I'd love to. Where should we meet?",
        why: "B 先接受邀請，再詢問集合地點，因此對話能進入安排階段。只問 Where? 而不表明是否參加，回應會不完整。",
      },
    ],
    misconceptions: [
      {
        belief: "只要句子本身文法正確，就能延續任何對話。",
        whyWrong: "和前一句無關的內容仍會造成突然換題。",
        correction: "找出人物剛說的事件、感受或需求，再選回應。",
      },
      {
        belief: "追問越多越能表示關心。",
        whyWrong: "連續多個問題可能造成壓力，也可能偏離重點。",
        correction: "一次問一個最相關且對方容易回答的問題。",
      },
      {
        belief: "分享自己的相似經驗一定會搶走話題。",
        whyWrong: "短分享可以建立同理，問題在於是否把焦點交回對方。",
        correction: "簡短連接後加上相關追問或停下來聽。",
      },
      {
        belief: "對方擔心時直接說 Don't worry 就已充分回應。",
        whyWrong: "它可能忽略對方擔心的具體原因。",
        correction: "先承認感受，再問需要理解或協助的部分。",
      },
    ],
    checks: [
      {
        prompt: "對方說剛加入球隊，問哪一類問題最能延續？",
        answer: "和球隊經驗相關的問題",
        reason: "追問應從已提供的主題發展。",
      },
      {
        prompt: "重問對方已說出的日期通常有幫助嗎？",
        answer: "通常沒有",
        reason: "它沒有增加新資訊，除非日期本身聽不清楚。",
      },
      {
        prompt: "相關自我分享後可做什麼？",
        answer: "把話題交回對方",
        reason: "追問或停下傾聽能維持雙向互動。",
      },
    ],
    assets: [],
  }),
  lecture("ENG_R4_L_S209", "ENG_R4_S209", {
    objectives: [
      "能以尊重語句表達不同意見，同時清楚提出理由。",
      "能把對事的反對和對人的攻擊分開，並提出可討論的替代方案。",
    ],
    sections: [
      {
        title: "尊重不等於隱藏不同意",
        content:
          "I see your point, but... 可先承認對方觀點，再提出不同理由。若只說 Maybe 而沒有立場，對方可能不明白；若說 That's a stupid idea，則把討論變成人身攻擊。清楚和尊重必須同時存在。",
      },
      {
        title: "理由要連到共同目標",
        content:
          "討論班級活動時，可用時間、費用、安全或參與需求說明反對：I'm worried that the bus leaves too late. 具體理由比 I just don't like it 更容易查證，也讓團體知道如何調整。",
      },
      {
        title: "局部同意能顯示真正差異",
        content:
          "You are right that the park is close, but there is no place to stay dry. 先指出同意部分，再說明剩下的問題，可以避免把對方整個想法都否定。這不是客套，而是精確標示共識和歧見。",
      },
      {
        title: "替代方案讓討論往前走",
        content:
          "不同意後可提出另一個時間、地點或方法，並邀請檢查：Could we meet earlier? 替代方案也要符合已知限制，不能只把自己的偏好當成唯一答案。",
      },
    ],
    workedExamples: [
      {
        id: "ENG_R4_L_S209_EX_01",
        prompt: "A: Walking is the fastest way. B: ___",
        steps: [
          "先承認步行可能有優點。",
          "找出可檢查的反對理由。",
          "把焦點留在路線而非人物。",
        ],
        answer: "I see your point, but the station is three kilometers away.",
        why: "B 沒有批評 A，而是用三公里的距離檢查『最快』這個主張。明確證據讓雙方可以再比較其他交通方式。",
      },
      {
        id: "ENG_R4_L_S209_EX_02",
        prompt: "A: Let's hold the picnic on Sunday. B: ___",
        steps: [
          "說明自己的限制。",
          "避免宣稱對方想法很差。",
          "提出可討論的替代日期。",
        ],
        answer: "Sunday is difficult for me. Could we consider Saturday?",
        why: "這句把不同意連到自己的時間限制，並提出星期六作替代。它沒有假設所有人都不能在星期日，也保留團體討論空間。",
      },
      {
        id: "ENG_R4_L_S209_EX_03",
        prompt: "A: This report says screen time is always bad for us. B: ___",
        steps: [
          "注意 always 是很強的主張。",
          "不直接攻擊報告或說話者。",
          "要求查看報告實際支持的範圍。",
        ],
        answer: "I'm not sure it says 'always.' Could we check the report?",
        why: "回應鎖定 always 是否有資料支持，並提議查看原報告。這比直接說 You're wrong 更能釐清資料能支持到哪個程度。",
      },
    ],
    misconceptions: [
      {
        belief: "尊重就是完全不說自己不同意。",
        whyWrong: "隱藏立場會使團體無法處理真正問題。",
        correction: "以中立語氣清楚說明不同點和理由。",
      },
      {
        belief: "先說 I think 就能讓任何批評變得有禮貌。",
        whyWrong: "後面若攻擊能力或人格，仍是不尊重。",
        correction: "評論提案、證據或影響，不評論人的價值。",
      },
      {
        belief: "只要提供替代方案，就不必解釋原方案的問題。",
        whyWrong: "別人無法判斷替代方案解決了什麼限制。",
        correction: "簡短指出具體顧慮，再提出相符的選擇。",
      },
      {
        belief: "局部同意會讓自己的反對立場變弱。",
        whyWrong: "精確指出共識反而能縮小真正需要討論的差異。",
        correction: "分開已同意的事實與仍有爭議的結論。",
      },
    ],
    checks: [
      {
        prompt: "You're stupid 是在反對想法還是攻擊人？",
        answer: "攻擊人",
        reason: "它沒有處理提案內容或證據。",
      },
      {
        prompt: "不同意時提出資料有什麼作用？",
        answer: "讓理由可檢查",
        reason: "具體證據能把討論留在問題本身。",
      },
      {
        prompt: "Could we try another time? 加入了什麼？",
        answer: "替代方案",
        reason: "它讓討論從反對進入下一個可行選項。",
      },
    ],
    assets: [],
  }),
  lecture("ENG_R4_L_S210", "ENG_R4_S210", {
    objectives: [
      "能辨認對方真正需要的時間、地點、原因、步驟或限制。",
      "能用相關、足夠而不過量的資訊完成回答，並在不確定時誠實標示。",
    ],
    sections: [
      {
        title: "先拆解問題要求的資訊種類",
        content:
          "When does the library close? 要的是時間；How can I get there? 要的是路線。回答前圈出疑問詞和對象，避免提供正確但無關的資料，例如以圖書館藏書量回答關門時間。",
      },
      {
        title: "多部分問題要逐項作答",
        content:
          "What should I bring, and where should we meet? 同時要求物品和地點。只回答其中一項仍不完整。可用兩個短句分開回答，讓每項資訊容易核對。",
      },
      {
        title: "足夠不等於塞入所有細節",
        content:
          "問路時需要轉彎處、地標和終點，不需要沿路每家商店的介紹。刪除不影響行動的背景故事，保留能讓對方做出下一步決定的資訊。",
      },
      {
        title: "不確定時說明界線與查證方式",
        content:
          "若不知道最新時間，不應猜測。可以說 I'm not sure. Let's check the library page. 誠實標示不確定，再指出可靠查證來源，比提供看似完整但可能過時的答案更有用。",
      },
    ],
    workedExamples: [
      {
        id: "ENG_R4_L_S210_EX_01",
        prompt: "What time does the last bus leave?",
        steps: [
          "辨認問題要最後一班車的時間。",
          "排除路線、票價等無關資訊。",
          "提供明確時刻或說明需查證。",
        ],
        answer: "It leaves at 10:20 p.m.",
        why: "回答直接提供最後一班車的離站時間，足以讓對方安排行程。若時刻尚未查證，就應改說不確定並查時刻表，不能自行猜一個時間。",
      },
      {
        id: "ENG_R4_L_S210_EX_02",
        prompt: "What should I bring, and where do we meet?",
        steps: [
          "拆成攜帶物品和集合地點。",
          "各回答一項。",
          "確認沒有遺漏其中一問。",
        ],
        answer: "Bring water and a hat. Meet us at the school gate.",
        why: "第一句回答要帶什麼，第二句提供集合地點，兩個需求都得到處理。若只說 school gate，對方仍不知道要準備哪些物品。",
      },
      {
        id: "ENG_R4_L_S210_EX_03",
        prompt: "Does this soup have milk in it?",
        steps: [
          "確認問題涉及食物成分。",
          "不能只憑外觀看起來猜測。",
          "提供已查證答案或請工作人員確認。",
        ],
        answer: "I'm not sure. Let's ask the cook before you eat it.",
        why: "涉及食物成分時，猜測可能造成風險。這個回答誠實指出不確定，並安排向能確認配方的人查證，資訊雖短卻能支持安全決定。",
      },
    ],
    misconceptions: [
      {
        belief: "回答越長就一定越完整。",
        whyWrong: "大量無關細節可能掩蓋真正需要的資訊。",
        correction: "依疑問詞和行動需求保留必要內容。",
      },
      {
        belief: "問題有兩部分時，回答較容易的一部分就足夠。",
        whyWrong: "另一項需求仍未解決，對方不能完成安排。",
        correction: "拆開列出每個要求，回答後逐項核對。",
      },
      {
        belief: "不知道答案時，給一個可能的數字比空白更有幫助。",
        whyWrong: "未標示的猜測可能使對方依錯誤資訊行動。",
        correction: "說明不確定，並指出可查證的人或來源。",
      },
      {
        belief: "只要內容是真的，即使沒有回答問題也算相關。",
        whyWrong: "真實資訊仍可能無法滿足對方當下需求。",
        correction: "檢查每一句是否協助回答時間、地點、原因、方法或限制。",
      },
    ],
    checks: [
      {
        prompt: "Where is the station? 主要需要哪一類資訊？",
        answer: "地點或路線",
        reason: "where 詢問位置，不是時間。",
      },
      {
        prompt: "回答兩部分問題後應做什麼？",
        answer: "逐項核對",
        reason: "可確認沒有漏答其中一項。",
      },
      {
        prompt: "不知道最新時刻時，可以直接猜嗎？",
        answer: "不可以",
        reason: "應標示不確定並查可靠來源。",
      },
    ],
    assets: [],
  }),
];

export const ENGLISH_U30_QUESTIONS = [
  ...skillQuestions("204", [
    {
      stem: "Could you pass the salt, please? What does the speaker want?",
      options: [
        "Someone to pass the salt",
        "Someone to join a meal",
        "Someone to accept the words 'I'm sorry'",
        "Someone to explain the salt",
      ],
      answerIndex: 0,
      reasons: [
        "說話者希望對方執行遞鹽的動作。",
        "句中沒有邀請參加用餐。",
        "沒有承認錯誤或提出道歉。",
        "問題不在鹽的內容或原因。",
      ],
      reviews: [
        "Could you 在此搭配具體動作 pass the salt。",
        "第一項完整保留請求的受詞和動作。",
      ],
      cognitiveProcess: [
        "u30-s204-identify-pass-salt-request-function",
        "separate-requested-action-from-question-form",
      ],
      representationType: "speech-function-request-action",
      misconceptionTargets: ["read-could-you-as-ability-question"],
    },
    {
      stem: "Would you like to join us for lunch?",
      options: [
        "The speaker is asking for food.",
        "The speaker is inviting someone to lunch.",
        "The speaker is saying sorry for lunch.",
        "The speaker is thanking someone for lunch.",
      ],
      answerIndex: 1,
      reasons: [
        "句中沒有要求對方提供食物。",
        "join us 明確提出共同午餐活動。",
        "沒有錯誤或 sorry 線索。",
        "尚未提到已收到的幫助。",
      ],
      reviews: [
        "Would you like to join us 是讓對方選擇是否參加。",
        "第二項不把禮貌問句誤判為請求物品。",
      ],
      cognitiveProcess: [
        "u30-s204-classify-join-us-lunch-as-invitation",
        "use-shared-activity-to-distinguish-inviting",
      ],
      representationType: "speech-function-invitation",
      misconceptionTargets: ["treat-all-would-you-questions-as-requests"],
    },
    {
      stem: "I'm sorry I broke your cup.",
      options: [
        "The speaker is offering a cup.",
        "The speaker is asking to use a cup.",
        "The speaker is saying sorry for breaking it.",
        "The speaker is inviting someone for a drink.",
      ],
      answerIndex: 2,
      reasons: [
        "沒有提供新杯子。",
        "broke 表示已發生的行為，不是借用。",
        "sorry 和 broke your cup 共同構成道歉。",
        "沒有共同飲用活動。",
      ],
      reviews: [
        "句子明確承認自己打破對方杯子。",
        "第三項指出道歉所針對的實際影響。",
      ],
      cognitiveProcess: [
        "u30-s204-link-sorry-and-broken-cup-to-apology",
        "identify-admitted-harm-as-speech-purpose",
      ],
      representationType: "speech-function-apology",
      misconceptionTargets: ["classify-sorry-as-general-sadness-only"],
    },
    {
      stem: "Thanks for waiting for me after class.",
      options: [
        "It refuses help.",
        "It asks for more time.",
        "It gives an invitation.",
        "It shows thanks for a past action.",
      ],
      answerIndex: 3,
      reasons: [
        "句子沒有拒絕。",
        "waiting 已經發生，不是在要求延長時間。",
        "沒有提出活動。",
        "Thanks for 指出感謝對方等待。",
      ],
      reviews: [
        "for waiting 說明感謝的具體原因。",
        "第四項保留動作已完成的時間關係。",
      ],
      cognitiveProcess: [
        "u30-s204-read-thanks-for-waiting-as-gratitude",
        "distinguish-past-help-from-new-request",
      ],
      representationType: "speech-function-gratitude",
      misconceptionTargets: ["read-waiting-as-current-command"],
    },
    {
      stem: "Can I use your phone for a minute?",
      options: [
        "The speaker asks if using it is OK.",
        "The speaker reports a phone problem.",
        "The speaker offers to buy a phone.",
        "The speaker invites someone to call.",
      ],
      answerIndex: 0,
      reasons: [
        "Can I 加上 use your phone 是請求允許。",
        "沒有說電話故障。",
        "沒有購買或金錢資訊。",
        "說話者要自己使用，不是邀請共同通話。",
      ],
      reviews: [
        "your phone 顯示物品屬於對方，需要取得同意。",
        "第一項不把 can 誤讀為只問能力。",
      ],
      cognitiveProcess: [
        "u30-s204-infer-permission-request-from-can-i-use-phone",
        "track-ownership-to-requested-consent",
      ],
      representationType: "speech-function-permission",
      misconceptionTargets: ["interpret-can-i-only-as-physical-ability"],
    },
    {
      stem: "Why don't you come to our game on Friday?",
      options: [
        "It asks why the game was lost.",
        "It invites someone to the game.",
        "It apologizes for changing Friday.",
        "It thanks someone for playing.",
      ],
      answerIndex: 1,
      reasons: [
        "句子不是調查輸贏原因。",
        "come to our game 提出參加活動。",
        "沒有變更或道歉。",
        "活動尚未發生，沒有感謝已完成的參與。",
      ],
      reviews: [
        "Why don't you 在此是建議或邀請的形式。",
        "第二項符合 Friday 的未來活動安排。",
      ],
      cognitiveProcess: [
        "u30-s204-interpret-why-dont-you-come-as-invitation",
        "avoid-literal-causal-reading-of-why",
      ],
      representationType: "speech-function-indirect-invitation",
      misconceptionTargets: [
        "answer-why-question-instead-of-recognizing-invitation",
      ],
    },
    {
      stem: "I should not have spoken to you that way.",
      options: [
        "The speaker is asking someone to act.",
        "The speaker is accepting an invitation.",
        "The speaker says a past action was wrong.",
        "The speaker is giving thanks.",
      ],
      answerIndex: 2,
      reasons: [
        "沒有要求對方採取行動。",
        "沒有活動或參加決定。",
        "should not have 表示後悔先前說話方式。",
        "沒有收到幫助。",
      ],
      reviews: [
        "that way 指向說話者認為不恰當的表達。",
        "第三項保留承認錯誤而未額外假設對方反應。",
      ],
      cognitiveProcess: [
        "u30-s204-recognize-regret-statement-as-apology-function",
        "derive-admission-from-should-not-have-spoken",
      ],
      representationType: "speech-function-regret",
      misconceptionTargets: ["require-word-sorry-for-all-apologies"],
    },
    {
      stem: "I really appreciate your help with the boxes.",
      options: [
        "It asks someone to carry more boxes.",
        "It offers boxes to someone.",
        "It refuses help with the boxes.",
        "It expresses thanks for the help.",
      ],
      answerIndex: 3,
      reasons: [
        "沒有新的搬運要求。",
        "boxes 不是提供物。",
        "appreciate 不是拒絕。",
        "appreciate your help 表示感謝協助。",
      ],
      reviews: [
        "your help 是說話者已收到的協助。",
        "第四項抓住 appreciate 的溝通功能。",
      ],
      cognitiveProcess: [
        "u30-s204-map-appreciate-help-to-thanking",
        "exclude-future-box-request-from-past-assistance",
      ],
      representationType: "speech-function-appreciation",
      misconceptionTargets: ["treat-appreciate-as-evaluation-only"],
    },
    {
      stem: "Would you please close the window?",
      options: [
        "It asks someone to close the window.",
        "It invites someone to sit by the window.",
        "It says sorry for opening the window.",
        "It is thanks for a closed window.",
      ],
      answerIndex: 0,
      reasons: [
        "說話者希望對方關窗。",
        "沒有邀請到窗邊。",
        "沒有承認自己開窗。",
        "窗戶尚待關閉，不是感謝已完成動作。",
      ],
      reviews: [
        "please 和 close 指出期待的立即行動。",
        "第一項不被 Would you 的形式帶離請求功能。",
      ],
      cognitiveProcess: [
        "u30-s204-classify-polite-close-window-as-request",
        "differentiate-action-request-from-related-window-functions",
      ],
      representationType: "speech-function-polite-request",
      misconceptionTargets: [
        "label-would-you-as-invitation-without-join-context",
      ],
    },
    {
      stem: "Our club meets after school. Which line invites a new student?",
      options: [
        "I missed the meeting yesterday.",
        "Would you like to come with us today?",
        "Could you tell me when it ends?",
        "Thank you for showing me the room.",
      ],
      answerIndex: 1,
      reasons: [
        "這是陳述缺席。",
        "come with us 讓新生選擇加入。",
        "這是在詢問結束時間。",
        "這是感謝帶路。",
      ],
      reviews: ["題幹要求找邀請新生的語句。", "第二項提出當天共同參加社團。"],
      cognitiveProcess: [
        "u30-s204-select-inviting-line-within-club-dialogue",
        "contrast-four-speech-functions-in-shared-setting",
      ],
      representationType: "speech-function-set-comparison",
      misconceptionTargets: ["choose-any-polite-club-related-line"],
    },
    {
      stem: "I missed your call because I was on the bus. I'm sorry.",
      options: [
        "The speaker asks for another bus.",
        "The speaker invites someone to call a bus.",
        "The speaker says sorry for missing the call.",
        "The speaker thanks someone for calling a bus.",
      ],
      answerIndex: 2,
      reasons: [
        "沒有要求交通工具。",
        "call 在此指電話，不是叫車。",
        "missed your call 和 sorry 指出道歉原因。",
        "句子沒有感謝。",
      ],
      reviews: [
        "because I was on the bus 只解釋漏接原因。",
        "第三項不把 call 的多義誤連到交通。",
      ],
      cognitiveProcess: [
        "u30-s204-resolve-missed-call-apology-with-bus-reason",
        "disambiguate-call-before-classifying-function",
      ],
      representationType: "speech-function-contextual-apology",
      misconceptionTargets: ["misread-call-as-requesting-vehicle"],
    },
    {
      stem: "You remembered my birthday. That means a lot to me.",
      options: [
        "The speaker asks for a gift.",
        "The speaker refuses a birthday plan.",
        "The speaker invites someone to a party.",
        "The speaker shows thanks without saying 'thank you.'",
      ],
      answerIndex: 3,
      reasons: [
        "沒有提出禮物要求。",
        "沒有拒絕活動。",
        "沒有邀請語句。",
        "肯定對方記得生日，功能是表達感謝。",
      ],
      reviews: [
        "That means a lot to me 評價對方行動帶來的正面感受。",
        "第四項辨認沒有 thanks 字樣的間接感謝。",
      ],
      cognitiveProcess: [
        "u30-s204-infer-indirect-gratitude-from-remembered-birthday",
        "recognize-function-without-explicit-thanks-marker",
      ],
      representationType: "speech-function-implicit-gratitude",
      misconceptionTargets: ["require-thank-word-for-gratitude"],
    },
  ]),
  ...skillQuestions("205", [
    {
      stem: "A team member is standing near the ball. What could you say?",
      options: [
        "Pass me the ball, please.",
        "You must now provide the round object.",
        "Would it be possible for the ball to travel?",
        "The ball is a thing that I need.",
      ],
      answerIndex: 0,
      reasons: [
        "同隊小請求可直接、具體並帶 please。",
        "語氣僵硬且像命令。",
        "沒有清楚指出由誰做動作。",
        "只陳述需要，沒有提出可執行請求。",
      ],
      reviews: [
        "standing near the ball 使簡短請求已足夠。",
        "第一項符合隊友間即時合作的場合。",
      ],
      cognitiveProcess: [
        "u30-s205-select-direct-polite-ball-request-to-teammate",
        "match-low-burden-request-to-familiar-setting",
      ],
      representationType: "register-peer-request",
      misconceptionTargets: ["equate-formality-with-politeness"],
    },
    {
      stem: "You need help from a library worker you do not know.",
      options: [
        "Find this book.",
        "Excuse me. Could you help me find this book, please?",
        "Hey, get that book for me.",
        "This book must be found now.",
      ],
      answerIndex: 1,
      reasons: [
        "直接命令陌生工作人員不合宜。",
        "先取得注意並清楚禮貌提出需求。",
        "語氣命令且開場失禮。",
        "被動陳述沒有尊重地向對方提出請求。",
      ],
      reviews: [
        "librarian you do not know 要求較委婉開場。",
        "第二項仍保留 find this book 的必要資訊。",
      ],
      cognitiveProcess: [
        "u30-s205-choose-courteous-librarian-help-request",
        "combine-attention-getter-with-specific-need",
      ],
      representationType: "register-service-request",
      misconceptionTargets: ["use-command-with-unfamiliar-staff"],
    },
    {
      stem: "A teacher wants the class to begin reading.",
      options: [
        "Books!",
        "Why are books still closed?",
        "Please open your books to page ten.",
        "Would every person perhaps consider a book?",
      ],
      answerIndex: 2,
      reasons: [
        "單字不足以說明要做什麼。",
        "責備式問句不如直接指示清楚。",
        "動作和頁碼都明確，語氣也尊重。",
        "過度委婉且缺少頁碼。",
      ],
      reviews: [
        "全班需要同時知道動作與位置。",
        "第三項在教室管理中清楚而不失禮。",
      ],
      cognitiveProcess: [
        "u30-s205-select-clear-teacher-reading-direction",
        "balance-authority-role-with-specific-politeness",
      ],
      representationType: "register-classroom-direction",
      misconceptionTargets: ["replace-clear-instruction-with-vague-politeness"],
    },
    {
      stem: "A server brings tea, but you ordered soup. What should you say?",
      options: [
        "This is wrong. Take it away.",
        "You never listen.",
        "Soup, not tea.",
        "Excuse me. I ordered soup, not tea.",
      ],
      answerIndex: 3,
      reasons: [
        "意思清楚但語氣過硬。",
        "攻擊對方且超出單次事件證據。",
        "資訊過短，缺少禮貌開場。",
        "指出實際差異並保持中立。",
      ],
      reviews: [
        "問題是 order 與送來物品不一致。",
        "第四項不猜測服務人員的能力或動機。",
      ],
      cognitiveProcess: [
        "u30-s205-repair-restaurant-order-politely",
        "state-service-error-without-personal-attack",
      ],
      representationType: "register-service-correction",
      misconceptionTargets: ["confuse-directness-with-rudeness"],
    },
    {
      stem: "A car is moving toward a child. What should be said first?",
      options: [
        "Stop!",
        "Would you mind moving a little?",
        "Excuse me, may I share a thought?",
        "It could be useful to change places.",
      ],
      answerIndex: 0,
      reasons: [
        "短警告能立即阻止危險。",
        "委婉問句反應太慢。",
        "開場過長，延誤警示。",
        "內容含糊，未指出急迫性。",
      ],
      reviews: [
        "moving toward a child 建立立即安全風險。",
        "第一項讓對方不必先解讀客套語。",
      ],
      cognitiveProcess: [
        "u30-s205-prioritize-stop-warning-in-immediate-danger",
        "override-normal-politeness-for-safety-clarity",
      ],
      representationType: "register-emergency-warning",
      misconceptionTargets: ["use-formal-request-during-danger"],
    },
    {
      stem: "You need to pass between two people in a quiet room.",
      options: [
        "Move.",
        "Excuse me.",
        "Why are you here?",
        "You should leave.",
      ],
      answerIndex: 1,
      reasons: [
        "像直接命令對方。",
        "可禮貌表示需要經過。",
        "問題與通行需求無關且可能冒犯。",
        "要求對方離開超過實際需要。",
      ],
      reviews: ["情境只需要短暫取得通道。", "第二項用最少必要語句表達禮貌。"],
      cognitiveProcess: [
        "u30-s205-use-excuse-me-for-passing-between-people",
        "select-minimal-polite-attention-signal",
      ],
      representationType: "register-public-passage",
      misconceptionTargets: ["overstate-small-request"],
    },
    {
      stem: "A student wants to interrupt a teacher who is speaking.",
      options: [
        "Listen to me now.",
        "I have a thing.",
        "I'm sorry to interrupt. May I ask a question?",
        "My question is more important.",
      ],
      answerIndex: 2,
      reasons: [
        "命令式且不尊重正在說話的人。",
        "內容含糊。",
        "先標示打斷，再禮貌請求發問。",
        "貶低目前話題，沒有必要。",
      ],
      reviews: [
        "teacher is speaking 是選擇開場語的關鍵。",
        "第三項清楚說明打斷的目的。",
      ],
      cognitiveProcess: [
        "u30-s205-frame-classroom-interruption-respectfully",
        "acknowledge-ongoing-turn-before-question",
      ],
      representationType: "register-interruption",
      misconceptionTargets: ["interrupt-without-signaling-turn-entry"],
    },
    {
      stem: "Your close friend is holding your notebook by mistake.",
      options: [
        "Return my thing at once.",
        "Would the object perhaps come back?",
        "You took something that belongs to me.",
        "That's my notebook. Could I have it back?",
      ],
      answerIndex: 3,
      reasons: [
        "像正式命令，且未考慮是誤拿。",
        "過度含糊。",
        "帶指責意味但沒有提出歸還請求。",
        "指出物品並直接禮貌請求歸還。",
      ],
      reviews: [
        "by mistake 降低指責對方的必要。",
        "第四項適合熟悉朋友和簡單誤會。",
      ],
      cognitiveProcess: [
        "u30-s205-request-notebook-return-without-accusation",
        "adapt-tone-to-close-friend-and-accident",
      ],
      representationType: "register-peer-correction",
      misconceptionTargets: ["use-legalistic-tone-for-minor-mistake"],
    },
    {
      stem: "You are calling a school office for the first time.",
      options: [
        "Hello. Could I speak to Ms. Chen, please?",
        "Give me Ms. Chen.",
        "I want Chen now.",
        "Ms. Chen must answer.",
      ],
      answerIndex: 0,
      reasons: [
        "有問候、明確人名和禮貌請求。",
        "把人當物品且像命令。",
        "省略稱謂並要求立即回應。",
        "對辦公室施加不必要命令。",
      ],
      reviews: [
        "for the first time 表示關係不熟悉。",
        "第一項符合電話開場與轉接需求。",
      ],
      cognitiveProcess: [
        "u30-s205-select-formal-first-call-transfer-request",
        "apply-phone-opening-to-unfamiliar-office",
      ],
      representationType: "register-phone-office",
      misconceptionTargets: ["translate-give-me-person-in-phone-call"],
    },
    {
      stem: "A classmate is blocking the screen during a video.",
      options: [
        "You are always in the way.",
        "Could you move a little to the left, please?",
        "Nobody can see because of you.",
        "Sit somewhere else from now on.",
      ],
      answerIndex: 1,
      reasons: [
        "always 是過度概括且帶指責。",
        "指出小幅移動方向，需求具體。",
        "誇大所有人並把問題歸咎個人。",
        "要求過度且語氣不合。",
      ],
      reviews: [
        "真正需求是看見螢幕，而非評論同學。",
        "第二項只要求解決當下遮擋。",
      ],
      cognitiveProcess: [
        "u30-s205-formulate-specific-screen-view-request",
        "replace-blame-with-small-observable-action",
      ],
      representationType: "register-classroom-peer-adjustment",
      misconceptionTargets: ["use-always-accusation-for-current-problem"],
    },
    {
      stem: "A guest has stayed late, and the family needs to sleep.",
      options: [
        "Go home now.",
        "We are tired of you.",
        "It is getting late, and we need to rest soon.",
        "Why do guests stay so long?",
      ],
      answerIndex: 2,
      reasons: [
        "太直接且缺少情境說明。",
        "攻擊對方而不是表達需要。",
        "以時間和家庭需求委婉標示應結束拜訪。",
        "概括所有客人並未直接處理當下情況。",
      ],
      reviews: [
        "needs to sleep 是必須傳達的界線。",
        "第三項清楚但不羞辱來客。",
      ],
      cognitiveProcess: [
        "u30-s205-signal-visit-ending-with-household-need",
        "use-indirect-boundary-with-sufficient-context",
      ],
      representationType: "register-guest-boundary",
      misconceptionTargets: ["avoid-needed-boundary-to-seem-polite"],
    },
    {
      stem: "A stranger asks to use your phone, but you are not comfortable.",
      options: [
        "No. You look bad.",
        "Maybe, although I will never do it.",
        "Take someone else's phone.",
        "Sorry, I can't lend it, but the station has a public phone.",
      ],
      answerIndex: 3,
      reasons: [
        "拒絕後加入人身評價。",
        "前後矛盾，立場不清。",
        "把問題推給他人且不尊重。",
        "清楚拒絕並提供可行替代。",
      ],
      reviews: [
        "not comfortable 允許說話者設定界線。",
        "第四項不必編造理由，也仍提供協助方向。",
      ],
      cognitiveProcess: [
        "u30-s205-decline-stranger-phone-request-with-alternative",
        "preserve-personal-boundary-and-respect",
      ],
      representationType: "register-respectful-refusal",
      misconceptionTargets: ["believe-politeness-requires-agreeing"],
    },
  ]),
  ...skillQuestions("206", [
    {
      stem: "Meet me by the bank. Two banks are near us. What should you ask?",
      options: [
        "Which bank do you mean?",
        "Why do banks have money?",
        "Do you like this town?",
        "Can we meet another day?",
      ],
      answerIndex: 0,
      reasons: [
        "直接確認兩家銀行中的位置。",
        "這是一般知識，不能決定集合地。",
        "喜好與位置無關。",
        "another day 反而改變了原來的日期安排。",
      ],
      reviews: [
        "Two banks are near us 建立真正歧義。",
        "第一項只針對需要執行的地點。",
      ],
      cognitiveProcess: [
        "u30-s206-clarify-which-bank-among-two-locations",
        "target-location-ambiguity-without-changing-plan",
      ],
      representationType: "clarification-location",
      misconceptionTargets: ["ask-unrelated-background-question"],
    },
    {
      stem: "Bring the light bag. There is a white bag and a bag that is not heavy.",
      options: [
        "Should I bring every bag?",
        "Do you mean the bag that is not heavy?",
        "Why is the room bright?",
        "Where did you buy a bag?",
      ],
      answerIndex: 1,
      reasons: [
        "要求全部拿來，沒有釐清 light。",
        "直接確認 light 是否指重量。",
        "room bright 與 bag 無關。",
        "購買地點不影響選哪個袋子。",
      ],
      reviews: [
        "light 可能指淺色或不重，題幹提供兩種可能。",
        "第二項用明確特徵確認說話者原意。",
      ],
      cognitiveProcess: [
        "u30-s206-resolve-light-bag-weight-versus-color",
        "offer-context-supported-sense-for-confirmation",
      ],
      representationType: "clarification-word-sense",
      misconceptionTargets: ["choose-first-available-meaning-of-light"],
    },
    {
      stem: "Please come early tomorrow. Which information is still needed?",
      options: [
        "The day",
        "The speaker's name",
        "The time to arrive",
        "The reason for tomorrow",
      ],
      answerIndex: 2,
      reasons: [
        "tomorrow 已給日期範圍。",
        "執行到達不一定需要姓名。",
        "early 沒有指出明確時刻。",
        "即使不知道原因，仍可依時刻到達。",
      ],
      reviews: [
        "題幹要求找阻礙行動的缺漏。",
        "第三項能把 early 轉成可執行安排。",
      ],
      cognitiveProcess: [
        "u30-s206-identify-missing-time-behind-early",
        "separate-essential-schedule-detail-from-background",
      ],
      representationType: "clarification-missing-detail",
      misconceptionTargets: ["reask-already-known-day"],
    },
    {
      stem: "Put it there. Several boxes and tables are in the room.",
      options: [
        "How old is the room?",
        "Can boxes be heavy?",
        "Who made the tables?",
        "Which box and which table do you mean?",
      ],
      answerIndex: 3,
      reasons: [
        "房間年代不影響動作。",
        "一般可能性不是當下指示。",
        "製作者與放置位置無關。",
        "同時確認 it 和 there 的指涉。",
      ],
      reviews: [
        "Several boxes and tables 使兩個代詞都不明確。",
        "第四項提供完成動作所需的對象和位置。",
      ],
      cognitiveProcess: [
        "u30-s206-clarify-it-and-there-with-multiple-objects",
        "resolve-dual-reference-before-physical-action",
      ],
      representationType: "clarification-pronoun-place",
      misconceptionTargets: ["guess-nearest-object-and-location"],
    },
    {
      stem: "The note says, 'Return it before Friday.' You do not know what 'return' means here.",
      options: [
        "Does 'return' mean give it back or come back?",
        "Is Friday your favorite day?",
        "Who wrote every note?",
        "Can I keep it from now on?",
      ],
      answerIndex: 0,
      reasons: [
        "列出 return 在此可能的兩種意思。",
        "喜好不會釐清動作。",
        "詢問所有筆記作者過於寬廣。",
        "直接要求保留，尚未理解原指示。",
      ],
      reviews: [
        "不知道的是 return 在該句的語意。",
        "第一項不假設 it 的所有權或說話者目的。",
      ],
      cognitiveProcess: [
        "u30-s206-clarify-return-meaning-in-note",
        "contrast-contextual-verb-senses-explicitly",
      ],
      representationType: "clarification-lexical-meaning",
      misconceptionTargets: ["act-before-resolving-unknown-word"],
    },
    {
      stem: "On the phone, you hear either 'fifteen' or 'fifty.'",
      options: [
        "Could you call me next year?",
        "Did you say fifteen or fifty?",
        "Why are numbers difficult?",
        "Is the phone new?",
      ],
      answerIndex: 1,
      reasons: [
        "改變時間，沒有確認數字。",
        "把兩個實際聽到的可能值列出確認。",
        "討論一般困難不能修復本次訊息。",
        "電話新舊不決定說的是哪個數字。",
      ],
      reviews: [
        "either 建立有限且具體的聽辨問題。",
        "第二項讓對方只需指出正確數字。",
      ],
      cognitiveProcess: [
        "u30-s206-confirm-fifteen-versus-fifty-on-phone",
        "use-bounded-alternatives-for-hearing-repair",
      ],
      representationType: "clarification-hearing-number",
      misconceptionTargets: ["pretend-hearing-was-certain"],
    },
    {
      stem: "Anna told Mia that she won the race. What is not clear?",
      options: [
        "Where races began",
        "Why Anna can speak",
        "Who 'she' means",
        "Whether Mia knows Anna",
      ],
      answerIndex: 2,
      reasons: [
        "起點不是句中歧義。",
        "說話能力不是問題。",
        "she 可能指 Anna 或 Mia。",
        "兩人是否相識不能解決得勝者。",
      ],
      reviews: [
        "兩個女性人名都可成為代名詞指涉。",
        "第三項精確指出句意不確定的來源。",
      ],
      cognitiveProcess: [
        "u30-s206-detect-ambiguous-she-in-reported-win",
        "avoid-nearest-name-reference-assumption",
      ],
      representationType: "clarification-pronoun-reference",
      misconceptionTargets: ["assign-she-to-mia-by-distance"],
    },
    {
      stem: "Wash and cut the vegetables. You are not sure about the order.",
      options: [
        "Are vegetables healthy?",
        "Which knife is the newest?",
        "Who bought the vegetables?",
        "Should I wash or cut them first?",
      ],
      answerIndex: 3,
      reasons: [
        "健康資訊不決定步驟。",
        "刀具新舊不是次序問題。",
        "購買者與操作順序無關。",
        "直接確認兩個動作的先後。",
      ],
      reviews: [
        "題幹明說 not sure about the order。",
        "第四項保留原來兩個動作而只補順序。",
      ],
      cognitiveProcess: [
        "u30-s206-ask-order-of-wash-and-cut",
        "target-procedural-sequence-not-material-details",
      ],
      representationType: "clarification-step-order",
      misconceptionTargets: ["perform-listed-order-without-confirming-intent"],
    },
    {
      stem: "Let's meet next Friday. Today is Thursday, and two dates could be meant.",
      options: [
        "Do you mean July 12 or July 19?",
        "Why is Friday after Thursday?",
        "Can we meet in a good month?",
        "Do you often like Fridays?",
      ],
      answerIndex: 0,
      reasons: [
        "以兩個可能日期確認 next Friday。",
        "星期順序是已知背景。",
        "good month 含糊且改變問題。",
        "喜好與日期安排無關。",
      ],
      reviews: [
        "two dates could be meant 使精確日期成為必要資訊。",
        "第一項不自行決定 next 的範圍。",
      ],
      cognitiveProcess: [
        "u30-s206-resolve-next-friday-with-explicit-dates",
        "convert-relative-date-to-confirmable-options",
      ],
      representationType: "clarification-relative-date",
      misconceptionTargets: ["assume-next-friday-has-one-universal-date"],
    },
    {
      stem: "Take the second right after the park. You see a bridge near the park.",
      options: [
        "Is the park large?",
        "Is the turn before or after the bridge?",
        "Who built the road?",
        "Can bridges cross water?",
      ],
      answerIndex: 1,
      reasons: [
        "公園大小不決定轉彎點。",
        "用可見地標確認路線位置。",
        "道路建造者與方向無關。",
        "一般橋梁知識不能定位。",
      ],
      reviews: [
        "bridge near the park 是可用來消除歧義的地標。",
        "第二項詢問行動所需的前後關係。",
      ],
      cognitiveProcess: [
        "u30-s206-clarify-turn-location-against-bridge",
        "anchor-route-instruction-to-visible-landmark",
      ],
      representationType: "clarification-route-landmark",
      misconceptionTargets: ["continue-route-with-uncertain-turn-point"],
    },
    {
      stem: "Add some water to the bowl. The amount changes the result.",
      options: [
        "Is the bowl blue?",
        "Where was the water?",
        "How much water should I add?",
        "Why do bowls hold water?",
      ],
      answerIndex: 2,
      reasons: [
        "顏色不影響所需水量。",
        "來源不是題幹指出的問題。",
        "直接要求會影響結果的數量。",
        "容器的一般功能與本次操作無關。",
      ],
      reviews: [
        "amount changes the result 明確指出 some 不足。",
        "第三項把模糊量詞改成可測量資訊。",
      ],
      cognitiveProcess: [
        "u30-s206-request-exact-water-amount-for-result",
        "prioritize-outcome-sensitive-quantity",
      ],
      representationType: "clarification-quantity",
      misconceptionTargets: ["treat-some-as-fixed-measure"],
    },
    {
      stem: "Please finish this soon. No latest time is given.",
      options: [
        "Is the work interesting?",
        "Who likes this work?",
        "Can work be difficult?",
        "What time must it be finished?",
      ],
      answerIndex: 3,
      reasons: [
        "興趣不是期限。",
        "喜好與完成安排無關。",
        "一般難度問題不會補上完成時限。",
        "直接詢問最晚完成時間。",
      ],
      reviews: [
        "No latest time is given 是唯一明示的缺漏。",
        "第四項讓 soon 變成可核對的時刻。",
      ],
      cognitiveProcess: [
        "u30-s206-convert-soon-to-explicit-deadline",
        "ask-minimum-information-needed-for-task-timing",
      ],
      representationType: "clarification-deadline",
      misconceptionTargets: ["interpret-soon-by-personal-standard"],
    },
  ]),
  ...skillQuestions("207", [
    {
      stem: "Nora nods and says, 'Sure, I can help.' What is supported?",
      options: [
        "She agrees to help.",
        "She wants someone else to help.",
        "She did not hear the question.",
        "She is leaving at once.",
      ],
      answerIndex: 0,
      reasons: [
        "語句和點頭都支持同意。",
        "沒有轉交工作。",
        "她已直接回應請求。",
        "沒有離開資訊。",
      ],
      reviews: [
        "can help 是主要字面證據，點頭方向一致。",
        "第一項沒有過度推論她是否喜歡任務。",
      ],
      cognitiveProcess: [
        "u30-s207-combine-nod-and-sure-as-agreement",
        "limit-inference-to-stated-willingness",
      ],
      representationType: "nonverbal-agreement",
      misconceptionTargets: ["infer-extra-emotion-from-nod"],
    },
    {
      stem: "Owen points to the second picture and says, 'I mean that one.'",
      options: [
        "He wants every picture.",
        "He means the second picture.",
        "He drew the second picture.",
        "He does not like the first picture.",
      ],
      answerIndex: 1,
      reasons: [
        "手勢只指向一張。",
        "that one 由指向第二張圖補足。",
        "沒有創作者資訊。",
        "選第二張不表示討厭第一張。",
      ],
      reviews: [
        "points to 提供代名詞指涉的可見線索。",
        "第二項只陳述被手勢支持的對象。",
      ],
      cognitiveProcess: [
        "u30-s207-resolve-that-one-through-pointing",
        "avoid-preference-inference-from-reference-gesture",
      ],
      representationType: "nonverbal-reference",
      misconceptionTargets: ["turn-pointing-into-like-dislike-judgment"],
    },
    {
      stem: "Lily covers her ears and asks, 'Could you turn the music down?'",
      options: [
        "She wants a different song.",
        "She wants the music to stop for all time.",
        "She wants the music to be quieter.",
        "She wants to leave the room.",
      ],
      answerIndex: 2,
      reasons: [
        "沒有要求換歌。",
        "turn down 不是永久停止。",
        "語句和摀耳都指向降低音量。",
        "沒有提出離開。",
      ],
      reviews: [
        "covers her ears 支持聲音太大的情境。",
        "第三項精確對應 turn down 而非 turn off。",
      ],
      cognitiveProcess: [
        "u30-s207-infer-quieter-music-from-ear-covering",
        "distinguish-volume-reduction-from-song-rejection",
      ],
      representationType: "nonverbal-volume-need",
      misconceptionTargets: ["infer-music-dislike-from-covering-ears"],
    },
    {
      stem: "Ken smiles, waves, and says, 'See you tomorrow.'",
      options: [
        "He is asking for help.",
        "He is refusing to leave.",
        "He says something bad will happen tomorrow.",
        "He is giving a friendly goodbye.",
      ],
      answerIndex: 3,
      reasons: [
        "沒有求助。",
        "see you 表示結束當下互動。",
        "沒有危險警告。",
        "揮手、微笑和 see you 共同表示友善道別。",
      ],
      reviews: [
        "三個線索方向一致，不需猜測其他情緒。",
        "第四項保留 tomorrow 表示預期再見。",
      ],
      cognitiveProcess: [
        "u30-s207-combine-wave-smile-see-you-as-goodbye",
        "identify-multimodal-closing-function",
      ],
      representationType: "nonverbal-friendly-closing",
      misconceptionTargets: ["read-see-as-request-to-look"],
    },
    {
      stem: "Mia points at the umbrella and then at the rain outside.",
      options: [
        "She is reminding someone to take the umbrella.",
        "She is asking who bought the umbrella.",
        "She is saying the umbrella is broken.",
        "She wants to paint the umbrella.",
      ],
      answerIndex: 0,
      reasons: [
        "雨和雨傘的連續指向形成攜帶提醒。",
        "沒有購買者線索。",
        "沒有指出破損。",
        "沒有繪畫活動。",
      ],
      reviews: [
        "兩個手勢建立物品與天氣的實用關係。",
        "第一項是最少且直接受情境支持的推論。",
      ],
      cognitiveProcess: [
        "u30-s207-link-umbrella-pointing-to-rain-reminder",
        "infer-practical-action-from-two-visible-cues",
      ],
      representationType: "nonverbal-reminder",
      misconceptionTargets: ["invent-object-history-from-pointing"],
    },
    {
      stem: "A guard holds up an open hand and says, 'Wait.'",
      options: [
        "Move faster.",
        "Stop for a moment.",
        "Choose another guard.",
        "Turn around and never come back.",
      ],
      answerIndex: 1,
      reasons: [
        "手勢和 wait 都不是加速。",
        "手掌向前與 wait 共同要求暫停。",
        "沒有選人需求。",
        "沒有永久改變方向。",
      ],
      reviews: [
        "wait 提供明確字面命令，手勢加強停止訊號。",
        "第二項以 for a moment 保留暫時性。",
      ],
      cognitiveProcess: [
        "u30-s207-read-raised-palm-and-wait-as-temporary-stop",
        "preserve-duration-limit-of-gesture-command",
      ],
      representationType: "nonverbal-stop-signal",
      misconceptionTargets: ["overread-stop-as-permanent-ban"],
    },
    {
      stem: "Rita opens her eyes wide and says 'Really?' with a rising voice.",
      options: [
        "She is giving directions.",
        "She is ending the talk.",
        "She sounds surprised.",
        "She is making a promise.",
      ],
      answerIndex: 2,
      reasons: [
        "沒有路線資訊。",
        "Really? 仍在回應內容。",
        "睜大眼與升高語調支持驚訝。",
        "沒有未來承諾。",
      ],
      reviews: [
        "表情和語調補充 Really 的說話態度。",
        "第三項不推測她相信或不相信全部內容。",
      ],
      cognitiveProcess: [
        "u30-s207-infer-surprise-from-wide-eyes-rising-really",
        "combine-prosody-and-expression-without-overclaim",
      ],
      representationType: "nonverbal-surprise",
      misconceptionTargets: ["treat-really-as-fixed-disbelief"],
    },
    {
      stem: "Ben says 'Great' slowly, looks away, and rolls his eyes.",
      options: [
        "He clearly asks for a gift.",
        "He gives a warm thank-you.",
        "He invites someone outside.",
        "His voice and face show he may not be pleased.",
      ],
      answerIndex: 3,
      reasons: [
        "great 和 gift 不同，沒有索取。",
        "非語言線索不支持溫暖感謝。",
        "looks away 不是邀請外出。",
        "慢語速和轉眼使字面正面意思受到質疑。",
      ],
      reviews: [
        "題幹提供多個與字面 great 相反的線索。",
        "第四項使用 may 保留合理不確定性。",
      ],
      cognitiveProcess: [
        "u30-s207-detect-possible-irony-from-tone-and-eye-roll",
        "use-modal-language-for-conflicting-multimodal-cues",
      ],
      representationType: "nonverbal-irony-candidate",
      misconceptionTargets: ["trust-positive-word-while-ignoring-conflict"],
    },
    {
      stem: "At the station, Kai points to the clock and then to the train.",
      options: [
        "He may be saying it is time to get on the train.",
        "He is explaining how clocks are made.",
        "He wants to buy the train.",
        "He says the train is a clock.",
      ],
      answerIndex: 0,
      reasons: [
        "時鐘與列車的連續指向支持時間提醒。",
        "沒有製造過程。",
        "沒有購買資訊。",
        "手勢連結不等於兩物相同。",
      ],
      reviews: [
        "station 情境使時間與上車產生合理關係。",
        "第一項以 may 避免把手勢解讀成唯一內心想法。",
      ],
      cognitiveProcess: [
        "u30-s207-infer-boarding-time-from-clock-train-gesture",
        "contextualize-sequential-pointing-at-station",
      ],
      representationType: "nonverbal-time-warning",
      misconceptionTargets: ["equate-linked-objects-literally"],
    },
    {
      stem: "A customer points to one bowl on the menu and says, 'This one, please.'",
      options: [
        "The customer wants every bowl.",
        "The customer chooses the pointed-to bowl.",
        "The customer made the menu.",
        "The customer asks for the price of all food.",
      ],
      answerIndex: 1,
      reasons: [
        "one 和單一指向排除全部。",
        "手勢補足 this 的具體選項。",
        "沒有製作菜單資訊。",
        "沒有 price 問句。",
      ],
      reviews: [
        "on the menu 使指向動作成為點餐選擇。",
        "第二項不加入數量或價格等未說明內容。",
      ],
      cognitiveProcess: [
        "u30-s207-resolve-this-one-menu-selection",
        "map-pointing-to-single-order-choice",
      ],
      representationType: "nonverbal-menu-choice",
      misconceptionTargets: ["ignore-gesture-and-treat-this-as-unknown"],
    },
    {
      stem: "Sam looks at the open window, rubs his arms, and says, 'It's cold in here.'",
      options: [
        "He wants to discuss winter history.",
        "He says the window is clean.",
        "He may want the window closed.",
        "He is asking to go swimming.",
      ],
      answerIndex: 2,
      reasons: [
        "沒有歷史話題。",
        "open 不表示 clean。",
        "看窗、搓手和 cold 共同支持關窗需求。",
        "cold 不導向游泳邀請。",
      ],
      reviews: [
        "動作與視線把一般陳述連到窗戶。",
        "第三項用 may 表示這仍是情境推論。",
      ],
      cognitiveProcess: [
        "u30-s207-infer-indirect-close-window-request-from-cold-cues",
        "combine-body-response-gaze-and-literal-comment",
      ],
      representationType: "nonverbal-indirect-request",
      misconceptionTargets: ["read-weather-comment-without-contextual-purpose"],
    },
    {
      stem: "Eva lowers her head and says softly, 'I forgot your book again.'",
      options: [
        "She sounds proud of forgetting.",
        "She is inviting someone to read.",
        "She is asking where books come from.",
        "Her voice and body position show she feels sorry.",
      ],
      answerIndex: 3,
      reasons: [
        "姿勢和柔和語氣不支持自豪。",
        "沒有共同閱讀活動。",
        "沒有來源問題。",
        "低頭、輕聲和 again 支持歉意。",
      ],
      reviews: [
        "forgot your book 指出造成對方不便的行為。",
        "第四項描述受支持的態度而不診斷個性。",
      ],
      cognitiveProcess: [
        "u30-s207-infer-apologetic-attitude-from-soft-voice-posture",
        "connect-repeated-forgetting-with-nonverbal-remorse",
      ],
      representationType: "nonverbal-apology-attitude",
      misconceptionTargets: ["ignore-posture-and-tone-in-apology-context"],
    },
  ]),
  ...skillQuestions("208", [
    {
      stem: "A: I loved the movie last night. What can B ask about the movie?",
      options: [
        "What did you like most about it?",
        "Movies have many seats.",
        "I finished my math work.",
        "Was last night a night?",
      ],
      answerIndex: 0,
      reasons: [
        "沿著電影感受要求更多細節。",
        "一般事實沒有回應喜愛原因。",
        "突然換到作業。",
        "重複明顯資訊，無法推進。",
      ],
      reviews: [
        "loved the movie 是可追問的核心。",
        "第一項讓 A 說明具體內容。",
      ],
      cognitiveProcess: [
        "u30-s208-follow-up-on-liked-movie-detail",
        "extend-evaluation-topic-with-focused-question",
      ],
      representationType: "conversation-relevant-follow-up",
      misconceptionTargets: ["continue-with-any-grammatical-question"],
    },
    {
      stem: "A: We moved to Kaohsiung last month. What can B ask about the move?",
      options: [
        "Months come after weeks.",
        "How do you like the area around your new home?",
        "My shoes are under the table.",
        "Did you move last month last month?",
      ],
      answerIndex: 1,
      reasons: [
        "一般時間知識與搬家經驗無關。",
        "從新居延伸到居住感受。",
        "突然換到鞋子。",
        "只是重複已知時間且語句不自然。",
      ],
      reviews: [
        "the area around your new home 是搬家後可合理追問的內容。",
        "第二項沒有假定對方一定喜歡或不喜歡。",
      ],
      cognitiveProcess: [
        "u30-s208-continue-moving-topic-with-neighborhood-experience",
        "ask-open-evaluation-without-assumed-feeling",
      ],
      representationType: "conversation-life-change-follow-up",
      misconceptionTargets: ["repeat-date-instead-of-developing-topic"],
    },
    {
      stem: "A: I'm worried about tomorrow's test. How can B answer the worry?",
      options: [
        "Tests use paper.",
        "Tomorrow follows today.",
        "Which part worries you most?",
        "I have a blue bag.",
      ],
      answerIndex: 2,
      reasons: [
        "沒有回應擔心。",
        "時間順序無助於理解困難。",
        "聚焦最擔心的部分以便繼續。",
        "突然換到物品。",
      ],
      reviews: [
        "worried 需要被承認並進一步理解。",
        "第三項不直接否定 A 的感受。",
      ],
      cognitiveProcess: [
        "u30-s208-explore-test-worry-with-focused-question",
        "respond-to-emotion-before-problem-solving",
      ],
      representationType: "conversation-emotion-follow-up",
      misconceptionTargets: ["dismiss-worry-with-general-fact"],
    },
    {
      stem: "A: I baked this bread myself. What can B ask about the bread?",
      options: [
        "Bread is food.",
        "I took a bus today.",
        "Did you use a plate?",
        "How did you make it?",
      ],
      answerIndex: 3,
      reasons: [
        "只是分類，沒有延伸經驗。",
        "換到交通。",
        "盤子不是 baked 的核心。",
        "詢問製作方式，直接延續話題。",
      ],
      reviews: [
        "myself 顯示製作過程值得追問。",
        "第四項讓 A 補充方法而非重述成品。",
      ],
      cognitiveProcess: [
        "u30-s208-ask-process-after-home-baked-bread",
        "develop-creation-topic-through-how-question",
      ],
      representationType: "conversation-process-follow-up",
      misconceptionTargets: ["ask-side-detail-before-central-process"],
    },
    {
      stem: "A: I finally learned to swim. How can B answer this news?",
      options: [
        "That's great! What helped you learn?",
        "Water can be cold.",
        "I do not know your teacher.",
        "Can birds swim?",
      ],
      answerIndex: 0,
      reasons: [
        "先肯定成果，再追問學習經驗。",
        "一般水溫沒有連到成就。",
        "加入未提及的老師。",
        "換到鳥類。",
      ],
      reviews: ["finally 顯示經過努力後的成果。", "第一項同時回應情緒和過程。"],
      cognitiveProcess: [
        "u30-s208-acknowledge-swimming-success-and-ask-help-factor",
        "pair-positive-feedback-with-relevant-detail",
      ],
      representationType: "conversation-achievement-response",
      misconceptionTargets: ["ignore-speakers-achievement"],
    },
    {
      stem: "A: I got lost on my first day here. How can B share the same kind of experience and return to the first person's story?",
      options: [
        "I know every street.",
        "That happened to me too. What helped you find the way?",
        "First days have twenty-four hours.",
        "My town has three parks.",
      ],
      answerIndex: 1,
      reasons: [
        "自我誇耀且未回應經驗。",
        "短分享建立連結，再把話題交回 A。",
        "字面時間事實無關。",
        "突然描述自己的城鎮。",
      ],
      reviews: [
        "got lost 是可同理並追問的事件。",
        "第二項不讓自我分享取代 A 的故事。",
      ],
      cognitiveProcess: [
        "u30-s208-use-brief-shared-experience-then-return-floor",
        "maintain-speaker-focus-after-self-disclosure",
      ],
      representationType: "conversation-empathic-self-share",
      misconceptionTargets: ["take-over-topic-with-own-story"],
    },
    {
      stem: "A: Would you like to join our picnic? How can B accept and ask for one needed piece of information?",
      options: [
        "Picnics are outside.",
        "Maybe food is good.",
        "Yes, I'd love to. Where should we meet?",
        "Where, when, who, why, and how?",
      ],
      answerIndex: 2,
      reasons: [
        "一般定義沒有回應邀請。",
        "立場和問題都不清楚。",
        "先接受，再詢問必要集合資訊。",
        "一次丟出過多未整理問題。",
      ],
      reviews: ["回應邀請要先表明是否參加。", "第三項自然把話題帶到安排。"],
      cognitiveProcess: [
        "u30-s208-accept-picnic-invitation-and-request-meeting-place",
        "sequence-commitment-before-logistics-question",
      ],
      representationType: "conversation-invitation-continuation",
      misconceptionTargets: ["ask-details-without-answering-invitation"],
    },
    {
      stem: "A: My dog has been sick, so I missed practice. How can B show care and keep the talk going?",
      options: [
        "Practice is at five.",
        "Dogs have four legs.",
        "I never miss practice.",
        "I'm sorry to hear that. Is your dog better now?",
      ],
      answerIndex: 3,
      reasons: [
        "時刻不是 A 當下重點。",
        "一般事實忽略病況。",
        "把焦點轉成自己的出席。",
        "先表達關心，再追問目前狀況。",
      ],
      reviews: ["so 連結狗生病與缺席原因。", "第四項回應真正影響 A 的事件。"],
      cognitiveProcess: [
        "u30-s208-show-empathy-and-follow-up-on-sick-dog",
        "prioritize-causal-emotional-topic-over-practice-rule",
      ],
      representationType: "conversation-supportive-follow-up",
      misconceptionTargets: ["focus-on-absence-instead-of-cause"],
    },
    {
      stem: "A: The bus was late, but I reached the show before it began. How can B answer and move to the show itself?",
      options: [
        "Good! Which song did you enjoy most?",
        "Buses are often large.",
        "Before means earlier than.",
        "I do not take buses on Monday.",
      ],
      answerIndex: 0,
      reasons: [
        "回應及時抵達的結果，再延續到演出內容。",
        "車體大小無關。",
        "解釋單字沒有回應事件。",
        "轉到自己的交通習慣。",
      ],
      reviews: [
        "but 表示雖延誤仍趕上演出。",
        "第一項自然跨過抵達結果進入 show 主題。",
      ],
      cognitiveProcess: [
        "u30-s208-bridge-late-bus-success-to-concert-experience",
        "acknowledge-outcome-before-next-topic-layer",
      ],
      representationType: "conversation-event-bridge",
      misconceptionTargets: ["stay-on-minor-bus-detail-after-resolution"],
    },
    {
      stem: "A: I am choosing between the art club and the music club. What can B ask to help with the choice?",
      options: [
        "Clubs meet in schools.",
        "What do you hope to learn?",
        "Choose one.",
        "Music has sound.",
      ],
      answerIndex: 1,
      reasons: [
        "一般背景不能協助比較。",
        "詢問目標可帶出選擇依據。",
        "直接命令但沒有了解需求。",
        "定義式資訊過於明顯且無關決策。",
      ],
      reviews: [
        "between 顯示 A 正在比較兩個選項。",
        "第二項讓後續討論有個人需求基準。",
      ],
      cognitiveProcess: [
        "u30-s208-continue-club-choice-through-learning-goal",
        "elicit-decision-criterion-not-command-choice",
      ],
      representationType: "conversation-decision-support",
      misconceptionTargets: ["offer-choice-without-understanding-goal"],
    },
    {
      stem: "A: The rain ruined our paper signs. What can B offer next?",
      options: [
        "Rain falls from clouds.",
        "Paper is made in many places.",
        "Could we make new signs from old boxes?",
        "I like sunny days.",
      ],
      answerIndex: 2,
      reasons: [
        "一般自然知識不能解決問題。",
        "紙張產地與損壞無關。",
        "回應損失並提出相關下一步。",
        "個人天氣喜好會中斷處理。",
      ],
      reviews: [
        "ruined signs 建立需要替代材料的問題。",
        "第三項讓對話由困難進入可行方案。",
      ],
      cognitiveProcess: [
        "u30-s208-advance-ruined-signs-topic-with-box-solution",
        "turn-problem-report-into-collaborative-next-step",
      ],
      representationType: "conversation-solution-continuation",
      misconceptionTargets: ["respond-with-general-weather-comment"],
    },
    {
      stem: "A: I read a report about sleep and memory. What can B ask about the report?",
      options: [
        "Reports have words.",
        "I sleep in a bed.",
        "Memory is a word.",
        "What did the report find?",
      ],
      answerIndex: 3,
      reasons: [
        "形式特徵沒有延伸內容。",
        "只談自己睡覺地點。",
        "字詞分類無關。",
        "詢問研究發現，直接承接報告主題。",
      ],
      reviews: [
        "about sleep and memory 指出報告探討的關係。",
        "第四項要求 A 提供最核心的結果。",
      ],
      cognitiveProcess: [
        "u30-s208-request-finding-from-sleep-memory-report",
        "focus-follow-up-on-source-conclusion",
      ],
      representationType: "conversation-information-follow-up",
      misconceptionTargets: ["reply-to-topic-word-with-personal-fact"],
    },
  ]),
  ...skillQuestions("209", [
    {
      stem: "A: Walking is the fastest way to the station. How can B not agree by using the distance?",
      options: [
        "I see your point, but it is three kilometers away.",
        "Only a fool would walk.",
        "You never understand distance.",
        "That is wrong because I said so.",
      ],
      answerIndex: 0,
      reasons: [
        "承認觀點並提供可檢查距離。",
        "攻擊選擇步行的人。",
        "攻擊能力且過度概括。",
        "沒有實際理由。",
      ],
      reviews: [
        "three kilometers 直接挑戰 fastest 的可行性。",
        "第一項把不同意留在交通方案。",
      ],
      cognitiveProcess: [
        "u30-s209-disagree-with-walking-plan-using-distance",
        "separate-route-evidence-from-personal-judgment",
      ],
      representationType: "respectful-disagreement-evidence",
      misconceptionTargets: ["attack-person-instead-of-claim"],
    },
    {
      stem: "A: Let's hold the picnic on Sunday. How can B not agree and offer another day?",
      options: [
        "Sunday is a bad idea.",
        "I understand, but Sunday is difficult for me. Could we try Saturday?",
        "Nobody wants Sunday.",
        "Your plans are always poor.",
      ],
      answerIndex: 1,
      reasons: [
        "只下評價，沒有原因或替代。",
        "說明個人限制並提出星期六。",
        "未有證據卻代表所有人。",
        "人身攻擊且使用 always。",
      ],
      reviews: [
        "for me 限定理由，不誇大團體立場。",
        "第二項讓討論有下一個可選日期。",
      ],
      cognitiveProcess: [
        "u30-s209-offer-saturday-after-personal-sunday-limit",
        "state-owned-constraint-with-actionable-alternative",
      ],
      representationType: "respectful-disagreement-alternative",
      misconceptionTargets: ["claim-group-agreement-without-evidence"],
    },
    {
      stem: "A: This report says screen time is always bad for us. How can B question the word 'always'?",
      options: [
        "Reports are boring.",
        "You cannot read reports.",
        "I'm not sure it says 'always.' Could we check the report?",
        "Everything you say is false.",
      ],
      answerIndex: 2,
      reasons: [
        "喜好不檢查主張。",
        "攻擊閱讀能力。",
        "鎖定 always 並提議查證。",
        "絕對否定超出證據。",
      ],
      reviews: [
        "always 是需要特別強證據的字。",
        "第三項不預先宣稱報告完全正確或錯誤。",
      ],
      cognitiveProcess: [
        "u30-s209-challenge-always-claim-by-checking-report",
        "question-strength-of-conclusion-not-reader",
      ],
      representationType: "respectful-disagreement-source-check",
      misconceptionTargets: ["counter-absolute-claim-with-another-absolute"],
    },
    {
      stem: "A: We should spend all the class money on one party. How can B not agree by naming another need?",
      options: [
        "That is the worst thought ever.",
        "You only care about parties.",
        "No, because no.",
        "I have a different idea because we also need money for books.",
      ],
      answerIndex: 3,
      reasons: [
        "誇張評價但沒有需求分析。",
        "推測對方人格與動機。",
        "沒有理由。",
        "清楚提出其他共同用途作為理由。",
      ],
      reviews: [
        "class money 涉及多項共同需求。",
        "第四項讓團體能比較 party 和 books。",
      ],
      cognitiveProcess: [
        "u30-s209-disagree-with-all-party-spending-via-book-need",
        "introduce-competing-budget-purpose-respectfully",
      ],
      representationType: "respectful-disagreement-budget",
      misconceptionTargets: ["moralize-about-proposer-in-budget-debate"],
    },
    {
      stem: "A: The new rule has helped everyone. How can you question this politely?",
      options: [
        "What facts show that it helped everyone?",
        "Why do you make things up?",
        "Everyone knows you are wrong.",
        "Rules are never useful.",
      ],
      answerIndex: 0,
      reasons: [
        "要求支持 everyone 的證據。",
        "先指控對方造假。",
        "以另一個無證據的 everyone 反擊。",
        "用 always 全面否定規則。",
      ],
      reviews: [
        "helped everyone 是可被資料檢查的主張。",
        "第一項把問題指向證據而不是說話者。",
      ],
      cognitiveProcess: [
        "u30-s209-request-evidence-for-everyone-rule-claim",
        "challenge-universal-impact-with-neutral-question",
      ],
      representationType: "respectful-disagreement-evidence-request",
      misconceptionTargets: ["frame-evidence-request-as-accusation"],
    },
    {
      stem: "A: The park is close, so it is the best picnic place. How can B agree with one point and add a problem?",
      options: [
        "Close parks are never good.",
        "You are right that it is close, but there is no place to stay dry.",
        "Your idea makes no sense.",
        "I do not like any park.",
      ],
      answerIndex: 1,
      reasons: [
        "以 never 過度概括。",
        "承認距離優點，再指出缺少遮蔽。",
        "只否定不說原因。",
        "個人全面喜好不能比較這個地點。",
      ],
      reviews: [
        "close 是可保留的共識，no place to stay dry 是新的限制。",
        "第二項精確縮小歧見。",
      ],
      cognitiveProcess: [
        "u30-s209-partial-agreement-on-close-park-then-shelter-concern",
        "separate-shared-fact-from-location-judgment",
      ],
      representationType: "respectful-disagreement-partial-agreement",
      misconceptionTargets: ["reject-all-features-when-one-concern-exists"],
    },
    {
      stem: "A: Let's meet at seven in the morning. How can B use the bus time and offer another time?",
      options: [
        "Seven is a terrible number.",
        "You do not care about sleep.",
        "Could we meet at eight? The first bus arrives at 7:30.",
        "No one can ever meet at seven.",
      ],
      answerIndex: 2,
      reasons: [
        "數字喜好不是安排理由。",
        "推測對方態度。",
        "提出替代時間並用公車時刻說明。",
        "絕對陳述明顯超出證據。",
      ],
      reviews: [
        "first bus at 7:30 是可核對的時間限制。",
        "第三項的八點直接解決到達問題。",
      ],
      cognitiveProcess: [
        "u30-s209-counter-seven-meeting-with-bus-based-eight-option",
        "align-alternative-time-to-transport-constraint",
      ],
      representationType: "respectful-disagreement-schedule",
      misconceptionTargets: ["give-preference-without-operational-reason"],
    },
    {
      stem: "A: We can finish the project tonight. How can B name the missing information and offer another day?",
      options: [
        "That is impossible because you are slow.",
        "Projects should not exist.",
        "I hate this plan.",
        "We still need the class answers. Could we finish tomorrow?",
      ],
      answerIndex: 3,
      reasons: [
        "攻擊對方速度。",
        "否定所有專題而非當下時程。",
        "只有感受，未說明阻礙。",
        "指出缺少資料並提出明日完成。",
      ],
      reviews: [
        "class answers 是今晚無法完成的具體資料。",
        "第四項用 I'm concerned 描述問題而非責怪人。",
      ],
      cognitiveProcess: [
        "u30-s209-raise-missing-survey-before-delaying-project",
        "ground-schedule-disagreement-in-unfinished-dependency",
      ],
      representationType: "respectful-disagreement-project-timing",
      misconceptionTargets: ["blame-person-for-resource-delay"],
    },
    {
      stem: "Which answer does not agree but does not attack the speaker?",
      options: [
        "I read the numbers differently; may we compare our work?",
        "You are careless with numbers.",
        "Only a child would get that answer.",
        "Stop talking about your answer.",
      ],
      answerIndex: 0,
      reasons: [
        "指出計算差異並邀請比較。",
        "評論人的粗心。",
        "以年齡羞辱對方。",
        "中斷討論而不處理答案。",
      ],
      reviews: [
        "read the numbers differently 將歧見放在可檢查工作。",
        "第一項也允許自己可能需要修正。",
      ],
      cognitiveProcess: [
        "u30-s209-select-nonattacking-math-disagreement",
        "invite-joint-comparison-instead-of-labeling-person",
      ],
      representationType: "respectful-disagreement-language-choice",
      misconceptionTargets: ["soften-insult-with-academic-topic"],
    },
    {
      stem: "A: This way is better. B wants to know the reason for the choice.",
      options: [
        "Better ways are better.",
        "Do you mean it is shorter, safer, or less busy?",
        "You always choose badly.",
        "I refuse every way.",
      ],
      answerIndex: 1,
      reasons: [
        "循環敘述沒有比較標準。",
        "列出合理標準請對方說明。",
        "攻擊選擇能力。",
        "全面拒絕但沒有評估。",
      ],
      reviews: [
        "better 必須相對某個判準才有清楚意思。",
        "第二項將歧見轉成可比較的三項條件。",
      ],
      cognitiveProcess: [
        "u30-s209-clarify-criterion-behind-better-route",
        "turn-vague-evaluation-into-shared-comparison",
      ],
      representationType: "respectful-disagreement-criterion",
      misconceptionTargets: ["argue-over-better-without-defining-basis"],
    },
    {
      stem: "A teacher says every group should use the same topic. A student has another idea.",
      options: [
        "That rule is silly.",
        "Teachers should not choose anything.",
        "Could groups choose from three allowed topics?",
        "We will ignore the rule.",
      ],
      answerIndex: 2,
      reasons: [
        "只貶低規則。",
        "全面否定教師角色。",
        "提出受限制且可討論的替代。",
        "直接違反而不溝通。",
      ],
      reviews: [
        "allowed topics 保留教師對範圍的需求。",
        "第三項清楚表達不同方案而仍尊重決策流程。",
      ],
      cognitiveProcess: [
        "u30-s209-propose-approved-topic-choice-to-teacher",
        "modify-rule-while-preserving-authority-constraint",
      ],
      representationType: "respectful-disagreement-authority",
      misconceptionTargets: ["assume-respect-means-no-alternative"],
    },
    {
      stem: "A post says, 'People who do not agree are selfish.'",
      options: [
        "Yes, not agreeing is always selfish.",
        "The writer must be selfish too.",
        "Take away all different ideas.",
        "People may not agree for many reasons; we should discuss the reasons, not call people names.",
      ],
      answerIndex: 3,
      reasons: [
        "接受沒有證據的全面標籤。",
        "以同樣人身標籤反擊。",
        "壓制不同觀點而未檢查內容。",
        "反對標籤並把討論拉回理由。",
      ],
      reviews: [
        "selfish 是對人的判斷，不是對論點的分析。",
        "第四項保留討論歧見的可能。",
      ],
      cognitiveProcess: [
        "u30-s209-reject-selfish-label-and-refocus-on-reasons",
        "respond-to-online-personal-attack-with-principle",
      ],
      representationType: "respectful-disagreement-online",
      misconceptionTargets: ["answer-label-with-opposite-label"],
    },
  ]),
  ...skillQuestions("210", [
    {
      stem: "When does the library close today?",
      options: [
        "It closes at six today.",
        "It has many books.",
        "It is beside the park.",
        "I visited it last week.",
      ],
      answerIndex: 0,
      reasons: [
        "直接提供今日關門時間。",
        "藏書量不回答 when。",
        "地點不回答時間。",
        "過去造訪經驗無關。",
      ],
      reviews: [
        "When 和 close 共同要求時刻。",
        "第一項也重述 today，避免套用其他日期。",
      ],
      cognitiveProcess: [
        "u30-s210-answer-library-closing-time-directly",
        "match-when-question-to-current-day-time",
      ],
      representationType: "information-time",
      misconceptionTargets: ["provide-related-library-fact-instead-of-time"],
    },
    {
      stem: "How can I get to the post office from here?",
      options: [
        "The post office sells stamps.",
        "Go straight and turn left at the bank.",
        "It closes at five.",
        "My uncle works there.",
      ],
      answerIndex: 1,
      reasons: [
        "功能資訊不能指路。",
        "提供可執行方向和地標。",
        "營業時間不回答 how to get there。",
        "親屬工作資訊無關。",
      ],
      reviews: ["from here 要求一段路線。", "第二項包含行進方向與轉彎位置。"],
      cognitiveProcess: [
        "u30-s210-provide-route-to-post-office",
        "use-action-sequence-and-landmark-for-how-question",
      ],
      representationType: "information-directions",
      misconceptionTargets: ["answer-place-question-with-opening-hours"],
    },
    {
      stem: "What should I bring to the picnic?",
      options: [
        "The picnic starts at noon.",
        "We chose the park yesterday.",
        "Bring water, a hat, and your lunch.",
        "My sister likes picnics.",
      ],
      answerIndex: 2,
      reasons: [
        "時間不回答攜帶物品。",
        "決策歷史無關。",
        "列出三項需要攜帶的物品。",
        "他人喜好不支援準備。",
      ],
      reviews: [
        "What should I bring 明確要求物品清單。",
        "第三項內容足以讓對方進行準備。",
      ],
      cognitiveProcess: [
        "u30-s210-supply-picnic-packing-list",
        "exclude-event-time-and-history-from-what-to-bring",
      ],
      representationType: "information-preparation",
      misconceptionTargets: ["answer-event-topic-with-any-picnic-fact"],
    },
    {
      stem: "Why were you absent from practice?",
      options: [
        "Practice is on Tuesdays.",
        "I like the team.",
        "The gym is large.",
        "I had a fever and stayed home.",
      ],
      answerIndex: 3,
      reasons: [
        "時程不說明此次缺席。",
        "喜歡球隊與缺席原因不衝突。",
        "場地大小無關。",
        "發燒並留在家直接說明原因。",
      ],
      reviews: [
        "Why 要求造成 absent 的原因。",
        "第四項建立健康狀況與未出席的因果。",
      ],
      cognitiveProcess: [
        "u30-s210-answer-practice-absence-with-cause",
        "link-health-event-to-missed-activity",
      ],
      representationType: "information-reason",
      misconceptionTargets: ["reply-with-general-schedule-to-why-question"],
    },
    {
      stem: "Which train reaches Tainan before eight?",
      options: [
        "Train 12 arrives at 7:40.",
        "The station has four doors.",
        "Tainan is in south Taiwan.",
        "Train 8 has blue seats.",
      ],
      answerIndex: 0,
      reasons: [
        "提供班次和符合條件的抵達時間。",
        "車站門數無關。",
        "地理位置不回答班次。",
        "座位顏色不影響抵達條件。",
      ],
      reviews: [
        "before eight 是篩選班次的必要限制。",
        "第一項同時給列車編號和到站時刻。",
      ],
      cognitiveProcess: [
        "u30-s210-select-train-by-arrival-constraint",
        "provide-identifier-and-evidence-for-schedule-choice",
      ],
      representationType: "information-schedule-filter",
      misconceptionTargets: ["choose-transport-detail-unrelated-to-time"],
    },
    {
      stem: "Does this cake have nuts in it? I cannot eat them.",
      options: [
        "The cake looks fresh.",
        "Yes, it has nuts in it, so please do not eat it.",
        "It was made this morning.",
        "The plate is clean.",
      ],
      answerIndex: 1,
      reasons: [
        "外觀不能確認成分。",
        "明確回答成分並連到安全行動。",
        "製作時間不排除花生。",
        "盤子清潔與食材不同。",
      ],
      reviews: [
        "cannot eat them 使成分資訊具有安全重要性。",
        "第二項沒有用外觀或猜測代替查證結果。",
      ],
      cognitiveProcess: [
        "u30-s210-answer-peanut-content-with-safety-consequence",
        "prioritize-declared-food-restriction-over-side-details",
      ],
      representationType: "information-food-safety",
      misconceptionTargets: ["infer-ingredients-from-appearance"],
    },
    {
      stem: "Have you finished the team report, and has Leo checked it?",
      options: [
        "Reports can be long.",
        "Leo joined the team.",
        "I finished it, but Leo has not checked it yet.",
        "We worked in the library.",
      ],
      answerIndex: 2,
      reasons: [
        "一般長度不回答兩項進度。",
        "加入團隊不等於完成檢查。",
        "分別回答完成和 Leo 檢查狀態。",
        "工作地點不能說明是否完成。",
      ],
      reviews: [
        "問題包含兩個 yes-or-no 進度點。",
        "第三項用 but 清楚區分已完成與尚未檢查。",
      ],
      cognitiveProcess: [
        "u30-s210-answer-two-part-report-status",
        "track-completion-and-review-as-separate-states",
      ],
      representationType: "information-multipart-status",
      misconceptionTargets: ["answer-only-first-half-of-compound-question"],
    },
    {
      stem: "You need help now. Where are you?",
      options: [
        "I often visit this area.",
        "The weather is warm.",
        "I left home an hour ago.",
        "I am at the north entrance of City Park.",
      ],
      answerIndex: 3,
      reasons: [
        "習慣位置不等於目前位置。",
        "天氣無法定位。",
        "離家時間仍缺少現址。",
        "提供明確地點和入口方向。",
      ],
      reviews: [
        "help now 使目前位置成為首要資訊。",
        "第四項比只說 park 更容易找到人。",
      ],
      cognitiveProcess: [
        "u30-s210-give-precise-current-location-for-help",
        "include-site-and-entrance-in-urgent-location-answer",
      ],
      representationType: "information-current-location",
      misconceptionTargets: [
        "provide-travel-history-instead-of-current-position",
      ],
    },
    {
      stem: "I want a club where I can make things with my hands. Which club fits?",
      options: [
        "The art club; members build and make useful things.",
        "The reading club; it meets on Wednesday.",
        "The music club; its room is upstairs.",
        "The running club; it has twenty members.",
      ],
      answerIndex: 0,
      reasons: [
        "活動直接符合動手製作需求。",
        "聚會日期不是需求核心。",
        "房間位置不能顯示活動類型。",
        "人數不表示可動手製作。",
      ],
      reviews: [
        "where I can make things 是選擇標準。",
        "第一項提供對應活動而非無關社團資料。",
      ],
      cognitiveProcess: [
        "u30-s210-recommend-craft-club-from-hands-on-need",
        "match-user-criterion-to-activity-evidence",
      ],
      representationType: "information-need-based-recommendation",
      misconceptionTargets: ["choose-club-by-salient-but-irrelevant-detail"],
    },
    {
      stem: "What should we bring, and where should we wait for the bus?",
      options: [
        "The bus is yellow.",
        "Bring your ticket and wait by Gate 2.",
        "The trip will be fun.",
        "I rode this bus last year.",
      ],
      answerIndex: 1,
      reasons: [
        "顏色沒有回答物品或地點。",
        "ticket 回答攜帶物，Gate 2 回答等候地。",
        "感受預測未處理兩項需求。",
        "過去經驗無關當下安排。",
      ],
      reviews: [
        "and 連接兩個都必須回答的部分。",
        "第二項用一個短句完整處理準備與位置。",
      ],
      cognitiveProcess: [
        "u30-s210-answer-bring-and-wait-bus-parts",
        "map-two-question-components-to-two-details",
      ],
      representationType: "information-multipart-logistics",
      misconceptionTargets: ["supply-one-related-fact-for-two-part-request"],
    },
    {
      stem: "A visitor asks when the show begins. Which answer is useful and short?",
      options: [
        "The hall was built many years ago.",
        "My family likes shows.",
        "It begins at 2:30 p.m.",
        "There are red chairs near the door.",
      ],
      answerIndex: 2,
      reasons: [
        "場館歷史無關開始時間。",
        "家人喜好無關。",
        "直接提供明確開始時刻。",
        "座位資訊未回答 when。",
      ],
      reviews: [
        "useful and short 要求刪除無關背景。",
        "第三項已足以讓訪客安排到場。",
      ],
      cognitiveProcess: [
        "u30-s210-select-concise-show-start-time",
        "remove-true-but-irrelevant-venue-details",
      ],
      representationType: "information-concise-answer",
      misconceptionTargets: ["equate-more-details-with-better-answer"],
    },
    {
      stem: "You are not sure whether the museum is open on Monday.",
      options: [
        "It is certainly open because museums are useful.",
        "It was open when I was a child.",
        "Monday is a weekday, so it must be open.",
        "I'm not sure. Let's check the museum page.",
      ],
      answerIndex: 3,
      reasons: [
        "用途不能證明營業日。",
        "過去資訊可能已變更。",
        "平日不保證每座博物館營業。",
        "誠實標示不確定並提出查證來源。",
      ],
      reviews: [
        "not sure 明確禁止把推測包裝成確定答案。",
        "第四項提供可取得最新資訊的下一步。",
      ],
      cognitiveProcess: [
        "u30-s210-handle-unknown-museum-hours-with-verification",
        "distinguish-current-fact-from-assumption-and-memory",
      ],
      representationType: "information-uncertainty",
      misconceptionTargets: ["guess-opening-hours-from-weekday-status"],
    },
  ]),
];

export const ENGLISH_UNIT_SOURCE = {
  unitId: UNIT_ID,
  lectures: ENGLISH_U30_LECTURES,
  questions: ENGLISH_U30_QUESTIONS,
  vocabularyPolicy: {
    capQuestionBasis: "appendix-5-table-1",
    additionalLearningTerms: [
      "absent",
      "accept",
      "add",
      "amount",
      "apologize",
      "appreciate",
      "ball",
      "careless",
      "certain",
      "compare",
      "consider",
      "customer",
      "direction",
      "discuss",
      "distance",
      "entrance",
      "exist",
      "express",
      "false",
      "fit",
      "guard",
      "guest",
      "hall",
      "ignore",
      "impossible",
      "information",
      "interrupt",
      "invitation",
      "kilometer",
      "latest",
      "memory",
      "nervous",
      "nod",
      "nut",
      "object",
      "position",
      "project",
      "promise",
      "provide",
      "refuse",
      "remind",
      "result",
      "return",
      "rub",
      "ruin",
      "selfish",
      "sense",
      "serve",
      "silly",
      "soft",
      "support",
      "toward",
      "travel",
      "upstairs",
      "weekday",
    ],
    properNames: [
      "Anna",
      "Ben",
      "Chen",
      "Eva",
      "Kai",
      "Ken",
      "Kaohsiung",
      "Leo",
      "Lily",
      "Mia",
      "Nora",
      "Owen",
      "Rita",
      "Sam",
      "Tainan",
    ],
    grammarNotation: ["A", "B"],
    malformedDistractors: [],
  },
};
