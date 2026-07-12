// Generated only by serialization from approved reviewed source. Do not edit.
export const sourceDigest="6878412ac2c63000a4764c881d04b0c829ab4ba4b44751caa77e6f8d69eef7e6";
export const skillBundle={
  "lecture": {
    "lectureId": "u20-s003-lecture-r1",
    "unitId": "u20",
    "numericUnitId": 20,
    "topicId": "u20-proof",
    "skillId": "geometry-proof-reason",
    "skillSlot": "s003",
    "lockedSkillTitle": "理由選擇",
    "title": "理由選擇：讓每個推論精確對應",
    "audience": "臺灣國中零基礎至會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能從定義、角關係、全等判定與等量運算中選對理由。",
      "能區分性質與判定的方向。",
      "能判斷理由是否過度或不足。"
    ],
    "prerequisites": [
      {
        "skillId": "geometry-proof-steps",
        "requiredLevel": "能使用該技能的核心定義與基本推理。"
      }
    ],
    "prerequisiteBridge": "若無單元內先備技能，從已知、圖形標記與國中基本線角概念開始；若有先備技能，先回想「geometry-proof-steps」再進入本節。",
    "glossary": [
      {
        "term": "定義型理由",
        "definition": "直接把名詞條件轉成其意義，例如中點推出兩段等長。"
      },
      {
        "term": "性質",
        "definition": "已知某圖形或關係成立後可推出的結果。"
      },
      {
        "term": "判定",
        "definition": "由足夠條件反過來確認某圖形或關係成立。"
      },
      {
        "term": "對應",
        "definition": "依頂點順序配對全等圖形中的邊與角。"
      }
    ],
    "notation": [
      {
        "symbol": "∥",
        "meaning": "兩直線平行。"
      },
      {
        "symbol": "⊥",
        "meaning": "兩直線垂直。"
      },
      {
        "symbol": "＝",
        "meaning": "兩個量相等，可使用代換與遞移。"
      }
    ],
    "conceptNarrative": [
      "選理由的第一問是『這一步從哪個條件來？』看到中點就先想定義，看到相交角就檢查是否對頂角，看到平行線就辨認角的位置。",
      "性質和判定常長得相反：平行線可推出同位角相等；同位角相等也可判定平行，但兩者前提不同。",
      "理由要恰好支持敘述。使用更複雜定理不一定錯，但若條件不足或沒有對應，就會失效。"
    ],
    "formalDefinitions": [
      {
        "name": "等量遞移",
        "statement": "若a＝b且b＝c，則a＝c。"
      },
      {
        "name": "全等後性質",
        "statement": "兩三角形全等後，所有對應邊與對應角分別相等。"
      }
    ],
    "formulas": [
      {
        "formula": "條件種類＋位置資訊 → 可用理由",
        "conditions": [
          "例如『平行』還需知道角型",
          "例如SAS的角必須是兩邊夾角"
        ],
        "meaning": "理由選擇不只看關鍵字。"
      }
    ],
    "nonApplicableCases": [
      "SSA一般不是三角形全等判定。",
      "任意兩角相等不能直接推出任意兩線平行，必須確認角的位置。",
      "同旁內角在平行線情況是互補，不是一般相等。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "圈出推論前的直接條件。",
        "check": "是中點、平行、全等，還是等式？"
      },
      {
        "step": 2,
        "instruction": "核對位置與方向。",
        "check": "角是同位、內錯、對頂，還是夾角？"
      },
      {
        "step": 3,
        "instruction": "選最直接且條件完整的理由。",
        "check": "是否誤用逆命題？"
      },
      {
        "step": 4,
        "instruction": "把理由代回句子閱讀。",
        "check": "能否自然回答『為什麼』？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "M是AB中點，為何AM＝MB？",
        "solutionSteps": [
          "關鍵詞是中點。",
          "中點定義包含兩段等長。"
        ],
        "answer": "中點的定義。"
      },
      {
        "exampleId": "L2",
        "prompt": "已知△ABC≅△DEF，為何BC＝EF？",
        "solutionSteps": [
          "依全等式B↔E、C↔F。",
          "BC與EF為對應邊。"
        ],
        "answer": "全等三角形對應邊相等。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "只看到角相等就選對頂角。",
        "why": "未檢查頂點與射線位置。",
        "correction": "先分類角的位置。"
      },
      {
        "mistake": "把平行線性質與判定顛倒。",
        "why": "忽略推理方向。",
        "correction": "先問前提是線平行還是角相等。"
      },
      {
        "mistake": "全等式配錯對應邊。",
        "why": "未按頂點順序。",
        "correction": "先寫頂點配對。"
      }
    ],
    "selfCheck": [
      "理由的前提是否全都具備？",
      "我有沒有檢查角或邊的位置？",
      "推理方向是性質還是判定？",
      "對應順序是否一致？"
    ],
    "summary": [
      "定義、性質與判定功能不同。",
      "位置資訊常決定理由能否使用。",
      "全等後要依頂點順序找對應。"
    ],
    "connections": {
      "previous": "先備：geometry-proof-steps",
      "next": [
        "下一技能會把理由放進不完整證明的空格中。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u20-s003-v001",
        "u20-s003-v002",
        "u20-s003-v003",
        "u20-s003-v004",
        "u20-s003-v005",
        "u20-s003-v006",
        "u20-s003-v007",
        "u20-s003-v008",
        "u20-s003-v009",
        "u20-s003-v010",
        "u20-s003-v011",
        "u20-s003-v012"
      ],
      "constructedResponseIds": [
        "u20-s003-cr001",
        "u20-s003-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "skillSpecificEvidence": "每一類理由均搭配反例限制，避免只靠關鍵字套用。",
      "reviewerDecision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "legacyContentUsed": false,
    "contentSha256": "dd29ee7672d22335109dc630f8225a955a9ab93e37eb20b839c2ab5839a1e218"
  },
  "mcQuestions": [
    {
      "questionId": "u20-s003-v001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "已知 M 是線段 AB 的中點，要推出 AM＝MB，應使用哪一個理由？",
      "givenConditions": [],
      "target": "從中點選擇正確理由",
      "choices": [
        "垂直線的定義",
        "平行線性質",
        "中點的定義",
        "三角形內角和"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "線段中點就是在線段上且把線段分成兩段等長的點，因此 AM＝MB。",
        "result": "中點的定義"
      },
      "explanation": "線段中點就是在線段上且把線段分成兩段等長的點，因此 AM＝MB。",
      "steps": [
        "辨認關鍵詞「中點」",
        "套用中點定義",
        "得到兩段等長"
      ],
      "optionAnalysis": [
        {
          "choice": "垂直線的定義",
          "truth": false,
          "reason": "題目沒有直角或垂直資訊。"
        },
        {
          "choice": "平行線性質",
          "truth": false,
          "reason": "題目沒有平行線。"
        },
        {
          "choice": "中點的定義",
          "truth": true,
          "reason": "依獨立推導可得到此結果；線段中點就是在線段上且把線段分成兩段等長的點，因此 AM＝MB。"
        },
        {
          "choice": "三角形內角和",
          "truth": false,
          "reason": "本題只涉及線段。"
        }
      ],
      "misconceptionTarget": "看到幾何名詞卻未用其定義。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「從中點選擇正確理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「中點的定義」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：從中點選擇正確理由。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "28945663a740245c44ac117ae6c10079ceeb4a7bc4b0862140a2a1dd9a135551"
    },
    {
      "questionId": "u20-s003-v002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "兩直線相交於 O，要說明 ∠AOC＝∠BOD，且這兩角互為對頂角，最直接的理由是什麼？",
      "givenConditions": [],
      "target": "辨認對頂角理由",
      "choices": [
        "同位角相等",
        "等腰三角形底角相等",
        "直角都相等",
        "對頂角相等"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "相交兩直線形成的對頂角相等，所以 ∠AOC＝∠BOD。",
        "result": "對頂角相等"
      },
      "explanation": "相交兩直線形成的對頂角相等，所以 ∠AOC＝∠BOD。",
      "steps": [
        "確認兩角由相反射線組成",
        "辨認為對頂角",
        "使用對頂角相等"
      ],
      "optionAnalysis": [
        {
          "choice": "同位角相等",
          "truth": false,
          "reason": "同位角需要兩線被截線所截且通常搭配平行條件。"
        },
        {
          "choice": "等腰三角形底角相等",
          "truth": false,
          "reason": "題目沒有等腰三角形。"
        },
        {
          "choice": "直角都相等",
          "truth": false,
          "reason": "對頂角不一定是直角。"
        },
        {
          "choice": "對頂角相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；相交兩直線形成的對頂角相等，所以 ∠AOC＝∠BOD。"
        }
      ],
      "misconceptionTarget": "只因兩角位置相對就誤稱同位角。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「辨認對頂角理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「對頂角相等」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：辨認對頂角理由。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "ba91f4d21658ab73bc035a60f496f359b62ce90c4646578070d6b79c63064d71"
    },
    {
      "questionId": "u20-s003-v003",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "證明 △ABC 與 △ADC 全等時，若兩三角形都含有 AC，寫 AC＝AC 的理由是什麼？",
      "givenConditions": [],
      "target": "選擇公共邊理由",
      "choices": [
        "公共邊",
        "中點定義",
        "平行線公設",
        "圓周角定理"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "任何線段都等於自身；在兩三角形比較中稱為公共邊。",
        "result": "公共邊"
      },
      "explanation": "任何線段都等於自身；在兩三角形比較中稱為公共邊。",
      "steps": [
        "找出共同使用的線段 AC",
        "使用反身性 AC＝AC",
        "把它列為全等條件之一"
      ],
      "optionAnalysis": [
        {
          "choice": "公共邊",
          "truth": true,
          "reason": "依獨立推導可得到此結果；任何線段都等於自身；在兩三角形比較中稱為公共邊。"
        },
        {
          "choice": "中點定義",
          "truth": false,
          "reason": "題目沒有中點。"
        },
        {
          "choice": "平行線公設",
          "truth": false,
          "reason": "與線段自等無關。"
        },
        {
          "choice": "圓周角定理",
          "truth": false,
          "reason": "題目未涉及圓。"
        }
      ],
      "misconceptionTarget": "以為公共邊不必寫或需要額外已知。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「選擇公共邊理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「公共邊」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：選擇公共邊理由。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "ae38a1cc581251f45ab9e5c046374ec8d5943f87192c8413d608ed0bb3c8e31f"
    },
    {
      "questionId": "u20-s003-v004",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "已知 l∥m，截線 t 形成一對內錯角 ∠1、∠2。要推出 ∠1＝∠2，應選哪個理由？",
      "givenConditions": [],
      "target": "選擇平行線角性質",
      "choices": [
        "兩直線平行，同旁內角相等",
        "兩直線平行，內錯角相等",
        "對頂角相等",
        "等角的補角相等"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "平行線被截線所截時，內錯角相等。",
        "result": "兩直線平行，內錯角相等"
      },
      "explanation": "平行線被截線所截時，內錯角相等。",
      "steps": [
        "確認 l∥m",
        "辨認 ∠1、∠2 為內錯角",
        "套用平行線角性質"
      ],
      "optionAnalysis": [
        {
          "choice": "兩直線平行，同旁內角相等",
          "truth": false,
          "reason": "同旁內角互補，不一定相等。"
        },
        {
          "choice": "兩直線平行，內錯角相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；平行線被截線所截時，內錯角相等。"
        },
        {
          "choice": "對頂角相等",
          "truth": false,
          "reason": "兩角頂點不同，不是對頂角。"
        },
        {
          "choice": "等角的補角相等",
          "truth": false,
          "reason": "題目尚未提供等角作為前提。"
        }
      ],
      "misconceptionTarget": "混淆內錯角與同旁內角的關係。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「選擇平行線角性質」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「兩直線平行，內錯角相等」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：選擇平行線角性質。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "1827b365e5a52cac46673efb08b555ee4623c8db07595527269f61946fc5a91e"
    },
    {
      "questionId": "u20-s003-v005",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "已知 △ABC 中 AB＝AC，要推出 ∠B＝∠C，最直接的理由是什麼？",
      "givenConditions": [],
      "target": "選擇等腰三角形性質",
      "choices": [
        "三角形外角等於兩內對角和",
        "兩直線平行",
        "等腰三角形兩底角相等",
        "SSS 全等"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "AB 與 AC 是兩腰，因此 △ABC 為等腰三角形；等腰三角形兩底角相等。",
        "result": "等腰三角形兩底角相等"
      },
      "explanation": "AB 與 AC 是兩腰，因此 △ABC 為等腰三角形；等腰三角形兩底角相等。",
      "steps": [
        "由 AB＝AC 辨認等腰三角形",
        "定位底角 ∠B、∠C",
        "使用底角相等性質"
      ],
      "optionAnalysis": [
        {
          "choice": "三角形外角等於兩內對角和",
          "truth": false,
          "reason": "沒有外角資訊。"
        },
        {
          "choice": "兩直線平行",
          "truth": false,
          "reason": "題目未給平行。"
        },
        {
          "choice": "等腰三角形兩底角相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；AB 與 AC 是兩腰，因此 △ABC 為等腰三角形；等腰三角形兩底角相等。"
        },
        {
          "choice": "SSS 全等",
          "truth": false,
          "reason": "只比較一個三角形，不需另建全等。"
        }
      ],
      "misconceptionTarget": "知道結論但選擇過度複雜或無關理由。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「選擇等腰三角形性質」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「等腰三角形兩底角相等」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：選擇等腰三角形性質。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "6ea818f6b1337be7b98bcdf4a3952fece6f4416f8f424675b7cd28792d4f6661"
    },
    {
      "questionId": "u20-s003-v006",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "若已知兩三角形有兩組對應邊相等，且這兩邊的夾角相等，證明全等時應使用哪一理由？",
      "givenConditions": [],
      "target": "依條件選擇全等判定",
      "choices": [
        "SAS 全等判定",
        "AAA 全等判定",
        "SSA 全等判定",
        "兩三角形面積相等"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "兩邊及其夾角對應相等符合 SAS，可判定兩三角形全等。",
        "result": "SAS 全等判定"
      },
      "explanation": "兩邊及其夾角對應相等符合 SAS，可判定兩三角形全等。",
      "steps": [
        "核對兩組邊",
        "確認相等角位於兩邊之間",
        "選用 SAS"
      ],
      "optionAnalysis": [
        {
          "choice": "SAS 全等判定",
          "truth": true,
          "reason": "依獨立推導可得到此結果；兩邊及其夾角對應相等符合 SAS，可判定兩三角形全等。"
        },
        {
          "choice": "AAA 全等判定",
          "truth": false,
          "reason": "AAA 只能保證相似，不能保證全等。"
        },
        {
          "choice": "SSA 全等判定",
          "truth": false,
          "reason": "一般情況 SSA 不是全等判定。"
        },
        {
          "choice": "兩三角形面積相等",
          "truth": false,
          "reason": "等面積不保證形狀與大小完全相同。"
        }
      ],
      "misconceptionTarget": "忽略「夾角」位置，誤用 SSA。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「依條件選擇全等判定」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「SAS 全等判定」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：依條件選擇全等判定。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "a243b36c2934d0ae701a39f1004250208f1e89d19202fea49c7d2521e9691dba"
    },
    {
      "questionId": "u20-s003-v007",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "已知 AB＝CD、BC＝DE，且 A、B、C 與 C、D、E 分別依序共線。要由 AC＝AB＋BC、CE＝CD＋DE 推出 AC＝CE，最適合的理由是什麼？",
      "givenConditions": [],
      "target": "選擇等量運算理由",
      "choices": [
        "等量減異量，差相等",
        "乘法交換律即可",
        "圖形對稱",
        "等量加等量，其和相等"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "相等的量分別相加，所得和相等；代入 AB＝CD、BC＝DE 即得 AC＝CE。",
        "result": "等量加等量，其和相等"
      },
      "explanation": "相等的量分別相加，所得和相等；代入 AB＝CD、BC＝DE 即得 AC＝CE。",
      "steps": [
        "使用線段加法",
        "將相等線段分組對應",
        "用等量加等量其和相等"
      ],
      "optionAnalysis": [
        {
          "choice": "等量減異量，差相等",
          "truth": false,
          "reason": "被減量不同不能保證差相等。"
        },
        {
          "choice": "乘法交換律即可",
          "truth": false,
          "reason": "本題是加法與代換。"
        },
        {
          "choice": "圖形對稱",
          "truth": false,
          "reason": "題目未提供對稱條件。"
        },
        {
          "choice": "等量加等量，其和相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；相等的量分別相加，所得和相等；代入 AB＝CD、BC＝DE 即得 AC＝CE。"
        }
      ],
      "misconceptionTarget": "只寫結果，沒有指出等式運算原則。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「選擇等量運算理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「等量加等量，其和相等」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：選擇等量運算理由。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "bdf5441d80f872428414c5838a4d61120ca088e11b020d0ca0537d1d4b974712"
    },
    {
      "questionId": "u20-s003-v008",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "已證 △ABC≅△DEF，且頂點順序對應 A↔D、B↔E、C↔F。要推出 BC＝EF，理由為何？",
      "givenConditions": [],
      "target": "選擇全等對應性質",
      "choices": [
        "全等三角形的面積不同",
        "全等三角形的對應邊相等",
        "相似三角形的對應邊必相等",
        "任意三角形同名邊相等"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "全等三角形所有對應邊相等；依順序 BC 對應 EF。",
        "result": "全等三角形的對應邊相等"
      },
      "explanation": "全等三角形所有對應邊相等；依順序 BC 對應 EF。",
      "steps": [
        "讀取全等式的頂點對應",
        "找出 BC 的對應邊 EF",
        "使用全等後性質"
      ],
      "optionAnalysis": [
        {
          "choice": "全等三角形的面積不同",
          "truth": false,
          "reason": "全等三角形面積相同。"
        },
        {
          "choice": "全等三角形的對應邊相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；全等三角形所有對應邊相等；依順序 BC 對應 EF。"
        },
        {
          "choice": "相似三角形的對應邊必相等",
          "truth": false,
          "reason": "相似只保證成比例。"
        },
        {
          "choice": "任意三角形同名邊相等",
          "truth": false,
          "reason": "字母名稱不會造成等長。"
        }
      ],
      "misconceptionTarget": "未依全等式順序配對，選錯對應邊。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「選擇全等對應性質」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「全等三角形的對應邊相等」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：選擇全等對應性質。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "23e226147626251ca6b47a0395047e3d0d8c3602000199436372d287773dbe5e"
    },
    {
      "questionId": "u20-s003-v009",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "已知 ∠A＋∠C＝90°、∠B＋∠C＝90°，要推出 ∠A＝∠B，最適合的理由是什麼？",
      "givenConditions": [],
      "target": "選擇餘角相等理由",
      "choices": [
        "若兩角分別為同一角的餘角，則兩角相等",
        "兩角互為補角所以相等",
        "所有銳角都相等",
        "角度可以由圖形估計"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "兩式都減去 ∠C，可得 ∠A＝90°－∠C、∠B＝90°－∠C，因此兩角相等，也可稱同角的餘角相等。",
        "result": "若兩角分別為同一角的餘角，則兩角相等"
      },
      "explanation": "兩式都減去 ∠C，可得 ∠A＝90°－∠C、∠B＝90°－∠C，因此兩角相等，也可稱同角的餘角相等。",
      "steps": [
        "把兩個等式寫成同一總和",
        "兩邊同減 ∠C",
        "得到 ∠A＝∠B"
      ],
      "optionAnalysis": [
        {
          "choice": "若兩角分別為同一角的餘角，則兩角相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；兩式都減去 ∠C，可得 ∠A＝90°－∠C、∠B＝90°－∠C，因此兩角相等，也可稱同角的餘角相等。"
        },
        {
          "choice": "兩角互為補角所以相等",
          "truth": false,
          "reason": "互補只表示和為180°，不保證相等。"
        },
        {
          "choice": "所有銳角都相等",
          "truth": false,
          "reason": "銳角大小可不同。"
        },
        {
          "choice": "角度可以由圖形估計",
          "truth": false,
          "reason": "估計不能證明精確相等。"
        }
      ],
      "misconceptionTarget": "把餘角、補角與角相等混為一談。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「選擇餘角相等理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「若兩角分別為同一角的餘角，則兩角相等」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：選擇餘角相等理由。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "35b1f6c57844bc968da5f651e4fa4c2b3e79ca117f47bfea20f3c42d865196ea"
    },
    {
      "questionId": "u20-s003-v010",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "道路圖標示甲段長度等於標準桿 S，乙段長度也等於 S。要證甲、乙兩段等長，應採哪個理由？",
      "givenConditions": [],
      "target": "在工程標示中選擇等量遞移理由",
      "choices": [
        "以照片像素相同為依據",
        "以標線顏色相同為依據",
        "以共同基準量為依據進行代換",
        "以兩段看起來一樣長為依據"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "甲＝S 且乙＝S，兩量都等於同一量，因此甲＝乙。",
        "result": "以共同基準量為依據進行代換"
      },
      "explanation": "甲＝S 且乙＝S，兩量都等於同一量，因此甲＝乙。",
      "steps": [
        "把文字轉為甲＝S、乙＝S",
        "辨認共同基準 S",
        "使用等量代換或遞移性"
      ],
      "optionAnalysis": [
        {
          "choice": "以照片像素相同為依據",
          "truth": false,
          "reason": "照片比例與透視可能失真。"
        },
        {
          "choice": "以標線顏色相同為依據",
          "truth": false,
          "reason": "顏色不代表長度。"
        },
        {
          "choice": "以共同基準量為依據進行代換",
          "truth": true,
          "reason": "依獨立推導可得到此結果；甲＝S 且乙＝S，兩量都等於同一量，因此甲＝乙。"
        },
        {
          "choice": "以兩段看起來一樣長為依據",
          "truth": false,
          "reason": "外觀不能取代標示條件。"
        }
      ],
      "misconceptionTarget": "忽略正式標示，改用視覺印象。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "甲、乙與 S 以同一長度單位標示。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在工程標示中選擇等量遞移理由」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「以共同基準量為依據進行代換」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在工程標示中選擇等量遞移理由。",
      "literacyContextNecessity": "標準桿 S 是工程比較基準，刪除該資料便無法完成同量遞移。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "8562228db02cb4fb60b60e1bd21397d2449dbc74726d76508852b7ac0abc09d0"
    },
    {
      "questionId": "u20-s003-v011",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "都市道路規劃中，a∥b；橫向道路 t 分別與 a、b 形成同位角。另一路 c 與 t 的角等於 a 與 t 的同位角。要證 c∥b，合理理由鏈是哪個？",
      "givenConditions": [],
      "target": "選擇連續使用平行線性質與判定",
      "choices": [
        "只憑兩條線在圖上方向相近",
        "由平行線同位角相等，再由等角判定另一組直線平行",
        "先假設所有道路互相平行",
        "使用三角形內角和但不建立三角形"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "a∥b 先給出相應同位角相等；c 與 t 的角又等於其中一角，故 c、b 與截線 t 形成的同位角相等，可判定 c∥b。",
        "result": "由平行線同位角相等，再由等角判定另一組直線平行"
      },
      "explanation": "a∥b 先給出相應同位角相等；c 與 t 的角又等於其中一角，故 c、b 與截線 t 形成的同位角相等，可判定 c∥b。",
      "steps": [
        "使用 a∥b 得角相等",
        "用等量遞移連接 c 的角",
        "用同位角相等判定 c∥b"
      ],
      "optionAnalysis": [
        {
          "choice": "只憑兩條線在圖上方向相近",
          "truth": false,
          "reason": "地圖外觀不是證明。"
        },
        {
          "choice": "由平行線同位角相等，再由等角判定另一組直線平行",
          "truth": true,
          "reason": "依獨立推導可得到此結果；a∥b 先給出相應同位角相等；c 與 t 的角又等於其中一角，故 c、b 與截線 t 形成的同位角相等，可判定 c∥b。"
        },
        {
          "choice": "先假設所有道路互相平行",
          "truth": false,
          "reason": "把目標擴大成未給條件。"
        },
        {
          "choice": "使用三角形內角和但不建立三角形",
          "truth": false,
          "reason": "理由與結構不相符。"
        }
      ],
      "misconceptionTarget": "只記得平行線會產生等角，忘記逆向判定的條件。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「選擇連續使用平行線性質與判定」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「由平行線同位角相等，再由等角判定另一組直線平行」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：選擇連續使用平行線性質與判定。",
      "literacyContextNecessity": "道路 a、b、c 與截線 t 的關係決定兩次理由的方向，情境資料不可刪除。",
      "figureId": "fig-u20-proof-roads-01",
      "drawingSpecId": "fig-u20-proof-roads-01",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "3b42171af70c16d388d0262db8572104eaca279e16718105deefe9d90e16bc84"
    },
    {
      "questionId": "u20-s003-v012",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "測量員記錄 M 為 AB 中點，且 AB＝18 公尺。要說明 AM＝9 公尺，應使用哪組理由？",
      "givenConditions": [],
      "target": "在測量情境選擇完整理由組",
      "choices": [
        "只使用平均數公式而不說明點序",
        "以肉眼判斷位置居中",
        "因兩端點名稱對稱",
        "中點定義與線段加法"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "由中點定義 AM＝MB；又 AB＝AM＋MB，所以 18＝2AM，解得 AM＝9。",
        "result": "中點定義與線段加法"
      },
      "explanation": "由中點定義 AM＝MB；又 AB＝AM＋MB，所以 18＝2AM，解得 AM＝9。",
      "steps": [
        "中點給 AM＝MB",
        "線段加法給 AB＝AM＋MB",
        "代入 AB＝18 並解方程"
      ],
      "optionAnalysis": [
        {
          "choice": "只使用平均數公式而不說明點序",
          "truth": false,
          "reason": "平均想法可輔助，但需建立 M 在 AB 上且兩段相等。"
        },
        {
          "choice": "以肉眼判斷位置居中",
          "truth": false,
          "reason": "圖形外觀不是精確理由。"
        },
        {
          "choice": "因兩端點名稱對稱",
          "truth": false,
          "reason": "字母命名與長度無關。"
        },
        {
          "choice": "中點定義與線段加法",
          "truth": true,
          "reason": "依獨立推導可得到此結果；由中點定義 AM＝MB；又 AB＝AM＋MB，所以 18＝2AM，解得 AM＝9。"
        }
      ],
      "misconceptionTarget": "直接把總長除以2，未說明中點條件。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "AB 與 AM 皆以公尺表示，計算後保留公尺。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在測量情境選擇完整理由組」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「中點定義與線段加法」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在測量情境選擇完整理由組。",
      "literacyContextNecessity": "測量紀錄同時提供中點與總長，兩項資料共同決定半長。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "ab3035de9a5c58a89ed5baef275499d44b132ab901f531f0d45a1da1dd901a7b"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u20-s003-cr001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "已知 M 是 AB 中點、N 是 AC 中點。請分別說明為何 AM＝MB、AN＝NC，並寫出這兩個理由屬於哪一類。",
      "requiredWork": [
        "各自使用中點定義。",
        "說明理由不是由圖形外觀得出。"
      ],
      "standardSolution": [
        "因 M 是 AB 的中點，所以 AM＝MB；因 N 是 AC 的中點，所以 AN＝NC。",
        "兩個理由都屬於『定義』：中點會把線段分成兩段等長。"
      ],
      "alternativeMethods": [
        "可寫成『由中點定義』兩次，但必須清楚對應到不同線段。"
      ],
      "reasoningSteps": [
        "因 M 是 AB 的中點，所以 AM＝MB；因 N 是 AC 的中點，所以 AN＝NC。",
        "兩個理由都屬於『定義』：中點會把線段分成兩段等長。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩個等式與對應中點皆正確，且明確指出使用中點定義。"
        },
        {
          "score": 2,
          "criteria": "兩個等式正確，但只寫一次模糊的『因為是中點』。"
        },
        {
          "score": 1,
          "criteria": "只完成其中一組，或知道中點產生等長但配對有誤。"
        },
        {
          "score": 0,
          "criteria": "用平行、垂直或目測作理由。"
        }
      ],
      "partialCreditRules": [
        "評分依題目專屬rubric判定；方法正確但敘述略簡可保留方法分。",
        "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。"
      ],
      "followThroughPolicy": "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。",
      "unitRules": "依題目所給單位作答；純幾何關係不另加單位。",
      "notationRules": "角以 ∠ 表示，線段相等與平行、垂直符號須對應正確對象。",
      "answerOnlyPolicy": "只寫最終結論且沒有題目要求的理由，最高給1分；若結論也錯則0分。",
      "commonErrors": [
        "把 AM＝AN。",
        "把中點理由寫成垂直平分線。",
        "只看圖形左右相似。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "因 M 是 AB 的中點，所以 AM＝MB；因 N 是 AC 的中點，所以 AN＝NC。；兩個理由都屬於『定義』：中點會把線段分成兩段等長。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "c0403042da8fe7b5f9695d017305d32d9eb035fc51fcb438328ce5178b7aea75"
    },
    {
      "questionId": "u20-s003-cr002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-reason",
      "skillSlot": "s003",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "已知 l∥m，截線 t 形成一對內錯角 ∠1、∠2；又 ∠2＝∠3。請證明 ∠1＝∠3，並逐步指出使用的理由。",
      "requiredWork": [
        "由平行線得內錯角相等。",
        "再用等量遞移。"
      ],
      "standardSolution": [
        "因 l∥m，且 ∠1、∠2 為內錯角，所以 ∠1＝∠2。",
        "又已知 ∠2＝∠3。",
        "由相等關係的遞移性，得到 ∠1＝∠3。"
      ],
      "alternativeMethods": [
        "也可把兩個等式視為代換：在 ∠1＝∠2 中以 ∠3 代替 ∠2。"
      ],
      "reasoningSteps": [
        "因 l∥m，且 ∠1、∠2 為內錯角，所以 ∠1＝∠2。",
        "又已知 ∠2＝∠3。",
        "由相等關係的遞移性，得到 ∠1＝∠3。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "先正確使用內錯角性質，再使用等量遞移得到結論。"
        },
        {
          "score": 2,
          "criteria": "結論正確且兩個理由都有，但角型名稱寫成同位角等輕微錯誤。"
        },
        {
          "score": 1,
          "criteria": "只寫 ∠1＝∠2 或只寫『等量代換』而未建立前提。"
        },
        {
          "score": 0,
          "criteria": "認為任意三角相等，或沒有使用平行條件。"
        }
      ],
      "partialCreditRules": [
        "評分依題目專屬rubric判定；方法正確但敘述略簡可保留方法分。",
        "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。"
      ],
      "followThroughPolicy": "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。",
      "unitRules": "依題目所給單位作答；純幾何關係不另加單位。",
      "notationRules": "角以 ∠ 表示，線段相等與平行、垂直符號須對應正確對象。",
      "answerOnlyPolicy": "只寫最終結論且沒有題目要求的理由，最高給1分；若結論也錯則0分。",
      "commonErrors": [
        "把同旁內角寫成相等。",
        "跳過 ∠1＝∠2。",
        "把 ∠2＝∠3 說成公共角。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "因 l∥m，且 ∠1、∠2 為內錯角，所以 ∠1＝∠2。；又已知 ∠2＝∠3。；由相等關係的遞移性，得到 ∠1＝∠3。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "0763ef703f1f7354772801c059aa59d8ebb9000d15708d8c41210333b849399f"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u20-s003-v001",
      "contentSha256": "28945663a740245c44ac117ae6c10079ceeb4a7bc4b0862140a2a1dd9a135551",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "線段中點就是在線段上且把線段分成兩段等長的點，因此 AM＝MB。",
      "derivedAnswer": "中點的定義",
      "storedAnswer": "中點的定義",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「中點的定義」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「看到幾何名詞卻未用其定義。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：從中點選擇正確理由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 M 是線段 AB 的中點，要推出 AM＝MB，應使用哪一個理由？」要求從中點選擇正確理由。獨立推導為：線段中點就是在線段上且把線段分成兩段等長的點，因此 AM＝MB。 四選項依序判定：垂直線的定義=假，題目沒有直角或垂直資訊。；平行線性質=假，題目沒有平行線。；中點的定義=真，依獨立推導可得到此結果；線段中點就是在線段上且把線段分成兩段等長的點，因此 AM＝MB。；三角形內角和=假，本題只涉及線段。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "fd7c789c1ecaca1f513e59972d111601af25fb216000bae37c1cc832d3e77f78"
    },
    {
      "questionId": "u20-s003-v002",
      "contentSha256": "ba91f4d21658ab73bc035a60f496f359b62ce90c4646578070d6b79c63064d71",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "相交兩直線形成的對頂角相等，所以 ∠AOC＝∠BOD。",
      "derivedAnswer": "對頂角相等",
      "storedAnswer": "對頂角相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「對頂角相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「只因兩角位置相對就誤稱同位角。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：辨認對頂角理由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩直線相交於 O，要說明 ∠AOC＝∠BOD，且這兩角互為對頂角，最直接的理由是什麼？」要求辨認對頂角理由。獨立推導為：相交兩直線形成的對頂角相等，所以 ∠AOC＝∠BOD。 四選項依序判定：同位角相等=假，同位角需要兩線被截線所截且通常搭配平行條件。；等腰三角形底角相等=假，題目沒有等腰三角形。；直角都相等=假，對頂角不一定是直角。；對頂角相等=真，依獨立推導可得到此結果；相交兩直線形成的對頂角相等，所以 ∠AOC＝∠BOD。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "c8603d190eccb6388ccf18d3b7d2f69b73c047daadb93203e50fffd4e0e491fe"
    },
    {
      "questionId": "u20-s003-v003",
      "contentSha256": "ae38a1cc581251f45ab9e5c046374ec8d5943f87192c8413d608ed0bb3c8e31f",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "任何線段都等於自身；在兩三角形比較中稱為公共邊。",
      "derivedAnswer": "公共邊",
      "storedAnswer": "公共邊",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「公共邊」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「以為公共邊不必寫或需要額外已知。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：選擇公共邊理由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「證明 △ABC 與 △ADC 全等時，若兩三角形都含有 AC，寫 AC＝AC 的理由是什麼？」要求選擇公共邊理由。獨立推導為：任何線段都等於自身；在兩三角形比較中稱為公共邊。 四選項依序判定：公共邊=真，依獨立推導可得到此結果；任何線段都等於自身；在兩三角形比較中稱為公共邊。；中點定義=假，題目沒有中點。；平行線公設=假，與線段自等無關。；圓周角定理=假，題目未涉及圓。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "c13af13f169ab590b349edb372c031f9ea9d942db3747961c5e5c1b0310cbf93"
    },
    {
      "questionId": "u20-s003-v004",
      "contentSha256": "1827b365e5a52cac46673efb08b555ee4623c8db07595527269f61946fc5a91e",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "平行線被截線所截時，內錯角相等。",
      "derivedAnswer": "兩直線平行，內錯角相等",
      "storedAnswer": "兩直線平行，內錯角相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「兩直線平行，內錯角相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「混淆內錯角與同旁內角的關係。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：選擇平行線角性質。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 l∥m，截線 t 形成一對內錯角 ∠1、∠2。要推出 ∠1＝∠2，應選哪個理由？」要求選擇平行線角性質。獨立推導為：平行線被截線所截時，內錯角相等。 四選項依序判定：兩直線平行，同旁內角相等=假，同旁內角互補，不一定相等。；兩直線平行，內錯角相等=真，依獨立推導可得到此結果；平行線被截線所截時，內錯角相等。；對頂角相等=假，兩角頂點不同，不是對頂角。；等角的補角相等=假，題目尚未提供等角作為前提。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "78856f74d26e87eaf6d0b86ec43450116994ed72577f337412079b3ad1ee5edf"
    },
    {
      "questionId": "u20-s003-v005",
      "contentSha256": "6ea818f6b1337be7b98bcdf4a3952fece6f4416f8f424675b7cd28792d4f6661",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "AB 與 AC 是兩腰，因此 △ABC 為等腰三角形；等腰三角形兩底角相等。",
      "derivedAnswer": "等腰三角形兩底角相等",
      "storedAnswer": "等腰三角形兩底角相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「等腰三角形兩底角相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「知道結論但選擇過度複雜或無關理由。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：選擇等腰三角形性質。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 △ABC 中 AB＝AC，要推出 ∠B＝∠C，最直接的理由是什麼？」要求選擇等腰三角形性質。獨立推導為：AB 與 AC 是兩腰，因此 △ABC 為等腰三角形；等腰三角形兩底角相等。 四選項依序判定：三角形外角等於兩內對角和=假，沒有外角資訊。；兩直線平行=假，題目未給平行。；等腰三角形兩底角相等=真，依獨立推導可得到此結果；AB 與 AC 是兩腰，因此 △ABC 為等腰三角形；等腰三角形兩底角相等。；SSS 全等=假，只比較一個三角形，不需另建全等。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "025e9991f3be2f68ee7bad13ec133fe2ca72a92bc833d2bf695ff8057325325a"
    },
    {
      "questionId": "u20-s003-v006",
      "contentSha256": "a243b36c2934d0ae701a39f1004250208f1e89d19202fea49c7d2521e9691dba",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "兩邊及其夾角對應相等符合 SAS，可判定兩三角形全等。",
      "derivedAnswer": "SAS 全等判定",
      "storedAnswer": "SAS 全等判定",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「SAS 全等判定」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「忽略「夾角」位置，誤用 SSA。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：依條件選擇全等判定。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若已知兩三角形有兩組對應邊相等，且這兩邊的夾角相等，證明全等時應使用哪一理由？」要求依條件選擇全等判定。獨立推導為：兩邊及其夾角對應相等符合 SAS，可判定兩三角形全等。 四選項依序判定：SAS 全等判定=真，依獨立推導可得到此結果；兩邊及其夾角對應相等符合 SAS，可判定兩三角形全等。；AAA 全等判定=假，AAA 只能保證相似，不能保證全等。；SSA 全等判定=假，一般情況 SSA 不是全等判定。；兩三角形面積相等=假，等面積不保證形狀與大小完全相同。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "8a38c5cb90655fcd0f1079e0834436994e96e03a57a36857e4609cbda20333ad"
    },
    {
      "questionId": "u20-s003-v007",
      "contentSha256": "bdf5441d80f872428414c5838a4d61120ca088e11b020d0ca0537d1d4b974712",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "相等的量分別相加，所得和相等；代入 AB＝CD、BC＝DE 即得 AC＝CE。",
      "derivedAnswer": "等量加等量，其和相等",
      "storedAnswer": "等量加等量，其和相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「等量加等量，其和相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「只寫結果，沒有指出等式運算原則。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：選擇等量運算理由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 AB＝CD、BC＝DE，且 A、B、C 與 C、D、E 分別依序共線。要由 AC＝AB＋BC、CE＝CD＋DE 推出 AC＝CE，最適合的理由是什麼？」要求選擇等量運算理由。獨立推導為：相等的量分別相加，所得和相等；代入 AB＝CD、BC＝DE 即得 AC＝CE。 四選項依序判定：等量減異量，差相等=假，被減量不同不能保證差相等。；乘法交換律即可=假，本題是加法與代換。；圖形對稱=假，題目未提供對稱條件。；等量加等量，其和相等=真，依獨立推導可得到此結果；相等的量分別相加，所得和相等；代入 AB＝CD、BC＝DE 即得 AC＝CE。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "025517a909a79b6d0cc86ea7e00789987e350a4665c27380e0a62d2934e5be98"
    },
    {
      "questionId": "u20-s003-v008",
      "contentSha256": "23e226147626251ca6b47a0395047e3d0d8c3602000199436372d287773dbe5e",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "全等三角形所有對應邊相等；依順序 BC 對應 EF。",
      "derivedAnswer": "全等三角形的對應邊相等",
      "storedAnswer": "全等三角形的對應邊相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「全等三角形的對應邊相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「未依全等式順序配對，選錯對應邊。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：選擇全等對應性質。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已證 △ABC≅△DEF，且頂點順序對應 A↔D、B↔E、C↔F。要推出 BC＝EF，理由為何？」要求選擇全等對應性質。獨立推導為：全等三角形所有對應邊相等；依順序 BC 對應 EF。 四選項依序判定：全等三角形的面積不同=假，全等三角形面積相同。；全等三角形的對應邊相等=真，依獨立推導可得到此結果；全等三角形所有對應邊相等；依順序 BC 對應 EF。；相似三角形的對應邊必相等=假，相似只保證成比例。；任意三角形同名邊相等=假，字母名稱不會造成等長。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "b1bdc92ce6b1274b3332f7a0783b88336cb87697d3501ef39ba88874a4251ac4"
    },
    {
      "questionId": "u20-s003-v009",
      "contentSha256": "35b1f6c57844bc968da5f651e4fa4c2b3e79ca117f47bfea20f3c42d865196ea",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "兩式都減去 ∠C，可得 ∠A＝90°－∠C、∠B＝90°－∠C，因此兩角相等，也可稱同角的餘角相等。",
      "derivedAnswer": "若兩角分別為同一角的餘角，則兩角相等",
      "storedAnswer": "若兩角分別為同一角的餘角，則兩角相等",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「若兩角分別為同一角的餘角，則兩角相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把餘角、補角與角相等混為一談。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：選擇餘角相等理由。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知 ∠A＋∠C＝90°、∠B＋∠C＝90°，要推出 ∠A＝∠B，最適合的理由是什麼？」要求選擇餘角相等理由。獨立推導為：兩式都減去 ∠C，可得 ∠A＝90°－∠C、∠B＝90°－∠C，因此兩角相等，也可稱同角的餘角相等。 四選項依序判定：若兩角分別為同一角的餘角，則兩角相等=真，依獨立推導可得到此結果；兩式都減去 ∠C，可得 ∠A＝90°－∠C、∠B＝90°－∠C，因此兩角相等，也可稱同角的餘角相等。；兩角互為補角所以相等=假，互補只表示和為180°，不保證相等。；所有銳角都相等=假，銳角大小可不同。；角度可以由圖形估計=假，估計不能證明精確相等。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "7876f153fd77f3a9cb3e8a3f77f0bf05dd9b5c2ebb9e40db6ff69a05944637b4"
    },
    {
      "questionId": "u20-s003-v010",
      "contentSha256": "8562228db02cb4fb60b60e1bd21397d2449dbc74726d76508852b7ac0abc09d0",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "甲＝S 且乙＝S，兩量都等於同一量，因此甲＝乙。",
      "derivedAnswer": "以共同基準量為依據進行代換",
      "storedAnswer": "以共同基準量為依據進行代換",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「以共同基準量為依據進行代換」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "甲、乙與 S 以同一長度單位標示。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「忽略正式標示，改用視覺印象。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在工程標示中選擇等量遞移理由。",
      "literacyContextNecessity": "標準桿 S 是工程比較基準，刪除該資料便無法完成同量遞移。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「道路圖標示甲段長度等於標準桿 S，乙段長度也等於 S。要證甲、乙兩段等長，應採哪個理由？」要求在工程標示中選擇等量遞移理由。獨立推導為：甲＝S 且乙＝S，兩量都等於同一量，因此甲＝乙。 四選項依序判定：以照片像素相同為依據=假，照片比例與透視可能失真。；以標線顏色相同為依據=假，顏色不代表長度。；以共同基準量為依據進行代換=真，依獨立推導可得到此結果；甲＝S 且乙＝S，兩量都等於同一量，因此甲＝乙。；以兩段看起來一樣長為依據=假，外觀不能取代標示條件。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "4bbe9cde25987932dc0f5efb193120951ed0c92f1c18cf5c1a30530128ebd3a0"
    },
    {
      "questionId": "u20-s003-v011",
      "contentSha256": "3b42171af70c16d388d0262db8572104eaca279e16718105deefe9d90e16bc84",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "a∥b 先給出相應同位角相等；c 與 t 的角又等於其中一角，故 c、b 與截線 t 形成的同位角相等，可判定 c∥b。",
      "derivedAnswer": "由平行線同位角相等，再由等角判定另一組直線平行",
      "storedAnswer": "由平行線同位角相等，再由等角判定另一組直線平行",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「由平行線同位角相等，再由等角判定另一組直線平行」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「只記得平行線會產生等角，忘記逆向判定的條件。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：選擇連續使用平行線性質與判定。",
      "literacyContextNecessity": "道路 a、b、c 與截線 t 的關係決定兩次理由的方向，情境資料不可刪除。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「都市道路規劃中，a∥b；橫向道路 t 分別與 a、b 形成同位角。另一路 c 與 t 的角等於 a 與 t 的同位角。要證 c∥b，合理理由鏈是哪個？」要求選擇連續使用平行線性質與判定。獨立推導為：a∥b 先給出相應同位角相等；c 與 t 的角又等於其中一角，故 c、b 與截線 t 形成的同位角相等，可判定 c∥b。 四選項依序判定：只憑兩條線在圖上方向相近=假，地圖外觀不是證明。；由平行線同位角相等，再由等角判定另一組直線平行=真，依獨立推導可得到此結果；a∥b 先給出相應同位角相等；c 與 t 的角又等於其中一角，故 c、b 與截線 t 形成的同位角相等，可判定 c∥b。；先假設所有道路互相平行=假，把目標擴大成未給條件。；使用三角形內角和但不建立三角形=假，理由與結構不相符。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "d2f8b9a676eb50c39b2ddb0ad6475a870c572c1e0e4ddfc1f538eea48c924b75"
    },
    {
      "questionId": "u20-s003-v012",
      "contentSha256": "ab3035de9a5c58a89ed5baef275499d44b132ab901f531f0d45a1da1dd901a7b",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "由中點定義 AM＝MB；又 AB＝AM＋MB，所以 18＝2AM，解得 AM＝9。",
      "derivedAnswer": "中點定義與線段加法",
      "storedAnswer": "中點定義與線段加法",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「中點定義與線段加法」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "AB 與 AM 皆以公尺表示，計算後保留公尺。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「直接把總長除以2，未說明中點條件。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在測量情境選擇完整理由組。",
      "literacyContextNecessity": "測量紀錄同時提供中點與總長，兩項資料共同決定半長。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「測量員記錄 M 為 AB 中點，且 AB＝18 公尺。要說明 AM＝9 公尺，應使用哪組理由？」要求在測量情境選擇完整理由組。獨立推導為：由中點定義 AM＝MB；又 AB＝AM＋MB，所以 18＝2AM，解得 AM＝9。 四選項依序判定：只使用平均數公式而不說明點序=假，平均想法可輔助，但需建立 M 在 AB 上且兩段相等。；以肉眼判斷位置居中=假，圖形外觀不是精確理由。；因兩端點名稱對稱=假，字母命名與長度無關。；中點定義與線段加法=真，依獨立推導可得到此結果；由中點定義 AM＝MB；又 AB＝AM＋MB，所以 18＝2AM，解得 AM＝9。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "a82de09e8ef6097517bf4f7279546ed92de26d32799e56b4c23a1eb79e46b204"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "fig-u20-proof-roads-01",
      "unitId": "u20",
      "ownerSkillSlot": "s003",
      "title": "三道路與截線角關係圖",
      "description": "道路a、b有平行標記，截線t穿過a、b、c，三個角以1、2、3標示供等量遞移與平行判定。",
      "canvas": {
        "width": 480,
        "height": 320,
        "viewBox": "0 0 480 320"
      },
      "coordinates": {
        "a": [
          [
            60,
            80
          ],
          [
            420,
            95
          ]
        ],
        "b": [
          [
            55,
            190
          ],
          [
            415,
            205
          ]
        ],
        "c": [
          [
            65,
            270
          ],
          [
            425,
            245
          ]
        ],
        "t": [
          [
            130,
            25
          ],
          [
            330,
            295
          ]
        ]
      },
      "visibleLineRules": "實線表示題設中的線段或道路；虛線表示延長線或輔助線；直角方框、等長刻痕與平行箭頭只在題設提供時使用。",
      "hiddenLineRules": "本單元為平面圖，不使用立體隱線；未畫出的關係不得自行假設。",
      "labels": "所有點名放在點外側至少8像素；避免壓在線段或直角記號上。",
      "toScale": false,
      "visualInferenceWarning": "圖形未按比例，不可用外觀估計未標示的長度或角度。",
      "altText": "三條近水平道路a、b、c被斜截線t穿過，a與b有相同平行箭頭，交角標1、2、3。",
      "svgTitle": "三道路與截線角關係圖",
      "svgDesc": "道路a、b有平行標記，截線t穿過a、b、c，三個角以1、2、3標示供等量遞移與平行判定。",
      "mobileReadabilityReview": "在寬度320像素縮放下，主要線段、直角記號與標籤仍可辨認；字級不小於16。",
      "answerLeakageReview": "圖中只呈現題設標記與辨識所需結構，不標示選項答案、中心名稱結論或未給定數值。",
      "geometryAssertions": [
        "a與b標示平行",
        "角1與角2位置可作平行線角關係",
        "角3位於c與t交點"
      ],
      "manualVisualInspection": "pass: rendered at 480x320 and reviewed at 320px-equivalent readability; no clipping or answer leakage"
    }
  ]
};
export default skillBundle;
