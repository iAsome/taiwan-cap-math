// Generated only by serialization from approved reviewed source. Do not edit.
export const sourceDigest="0e288480ed01da7477fd86775fe470a3a9a899397eb9ca22bbea4cf1a30e9d96";
export const skillBundle={
  "lecture": {
    "lectureId": "u20-s001-lecture-r1",
    "unitId": "u20",
    "numericUnitId": 20,
    "topicId": "u20-proof",
    "skillId": "geometry-proof-basic",
    "skillSlot": "s001",
    "lockedSkillTitle": "幾何證明基本",
    "title": "幾何證明基本：從已知走到結論",
    "audience": "臺灣國中零基礎至會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能分辨已知條件、待證結論與理由。",
      "能判斷量測、外觀與正式證明的差異。",
      "能找出循環論證與論證缺口。"
    ],
    "prerequisites": [],
    "prerequisiteBridge": "若無單元內先備技能，從已知、圖形標記與國中基本線角概念開始；若有先備技能，先回想「基本幾何語言」再進入本節。",
    "glossary": [
      {
        "term": "已知條件",
        "definition": "題目直接提供、可作為推理起點的資訊。"
      },
      {
        "term": "待證結論",
        "definition": "題目要求最後必須推出的敘述。"
      },
      {
        "term": "理由",
        "definition": "支持某一步推論的定義、定理、性質或已證結果。"
      },
      {
        "term": "論證缺口",
        "definition": "從前一步到後一步缺少足夠條件或理由。"
      }
    ],
    "notation": [
      {
        "symbol": "∵",
        "meaning": "因為，表示理由來源；可不用符號而改寫完整句。"
      },
      {
        "symbol": "∴",
        "meaning": "所以，表示由前述理由推出結果。"
      },
      {
        "symbol": "≅",
        "meaning": "兩圖形全等，形狀與大小完全相同。"
      }
    ],
    "conceptNarrative": [
      "證明的目的不是讓圖形『看起來正確』，而是讓任何讀者都能從共同接受的條件重做推理。",
      "證明像一條橋：已知是起點，結論是終點，每一個中間橋墩都要有理由。若把結論偷放回前提，就是循環論證。",
      "示意圖協助定位物件與關係，但圖可能未按比例；線段看似等長、角看似直角，都不能取代文字或標記。"
    ],
    "formalDefinitions": [
      {
        "name": "直接證明",
        "statement": "從已知條件出發，依序使用定義與已知性質，直到得到待證結論。"
      },
      {
        "name": "充分理由",
        "statement": "一個理由必須真的滿足其適用條件，且能支持緊接的敘述。"
      }
    ],
    "formulas": [
      {
        "formula": "已知 → 有理由的中間結果 → 待證結論",
        "conditions": [
          "每一箭頭都能指出具體理由",
          "不得使用尚未證明的結論"
        ],
        "meaning": "基本證明結構。"
      }
    ],
    "nonApplicableCases": [
      "只用尺量或量角器得到近似值時，不能宣稱完成精確證明。",
      "題目沒有標示平行、垂直、等長時，不可從外觀自行補入。",
      "結論正確不代表過程正確；錯誤理由偶然得到正解仍不是有效證明。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "把題目的『已知』與『求證』分開寫。",
        "check": "是否把任何結論誤列為已知？"
      },
      {
        "step": 2,
        "instruction": "把圖例轉成正式敘述，例如刻痕轉成線段相等。",
        "check": "每個條件都有來源嗎？"
      },
      {
        "step": 3,
        "instruction": "尋找一個能由已知直接推出的中間結果。",
        "check": "理由的前提都已具備嗎？"
      },
      {
        "step": 4,
        "instruction": "逐步連到結論並反查是否跳步。",
        "check": "刪掉任何一步後，結論是否仍無理由地出現？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "已知 AB＝AC，求證 ∠B＝∠C。",
        "solutionSteps": [
          "AB＝AC 是已知。",
          "因此 △ABC 為等腰三角形。",
          "等腰三角形兩底角相等。"
        ],
        "answer": "∠B＝∠C。"
      },
      {
        "exampleId": "L2",
        "prompt": "圖上量得兩邊皆約4公分，能否證明等長？",
        "solutionSteps": [
          "量測有誤差。",
          "示意圖可能未按比例。",
          "需等長標記或可推出等長的性質。"
        ],
        "answer": "不能只靠量測證明。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把『看起來對稱』當理由。",
        "why": "外觀不是正式條件。",
        "correction": "指出等長、角相等或全等的來源。"
      },
      {
        "mistake": "先寫待證結論，再說所以成立。",
        "why": "把結論當前提形成循環。",
        "correction": "回到已知，建立中間步驟。"
      },
      {
        "mistake": "列很多定理但不說用在哪裡。",
        "why": "定理未與敘述對應。",
        "correction": "每個新敘述後立即標理由。"
      }
    ],
    "selfCheck": [
      "我能指出題目的起點與終點嗎？",
      "我使用的每個條件都來自題設或前一步嗎？",
      "我是否只靠圖形外觀？",
      "我的理由是否真的能推出下一句？"
    ],
    "summary": [
      "證明必須從已知出發。",
      "每一步都要有可檢查的理由。",
      "量測與外觀只能輔助，不能代替證明。",
      "循環與跳步是最常見的兩種缺陷。"
    ],
    "connections": {
      "previous": "先備：無鎖定單元內先備技能，從基本幾何語言開始。",
      "next": [
        "下一技能會把證明拆成可排序的步驟。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u20-s001-v001",
        "u20-s001-v002",
        "u20-s001-v003",
        "u20-s001-v004",
        "u20-s001-v005",
        "u20-s001-v006",
        "u20-s001-v007",
        "u20-s001-v008",
        "u20-s001-v009",
        "u20-s001-v010",
        "u20-s001-v011",
        "u20-s001-v012"
      ],
      "constructedResponseIds": [
        "u20-s001-cr001",
        "u20-s001-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "skillSpecificEvidence": "本講義專注證明的角色與證據界線，未提前要求特定高階定理。",
      "reviewerDecision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "legacyContentUsed": false,
    "contentSha256": "19ae1698c04b56728fdd531748a2dda7e019e6e1e0346444ca1eec3d325c61be"
  },
  "mcQuestions": [
    {
      "questionId": "u20-s001-v001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "題目寫著「已知 AB＝AC，求證 ∠B＝∠C」。其中「AB＝AC」屬於哪一部分？",
      "givenConditions": [],
      "target": "辨認幾何證明中的已知條件",
      "choices": [
        "已知條件",
        "待證結論",
        "證明理由",
        "輔助線"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "「已知」後提供、可直接使用的資訊是已知條件，因此 AB＝AC 是已知條件。",
        "result": "已知條件"
      },
      "explanation": "「已知」後提供、可直接使用的資訊是已知條件，因此 AB＝AC 是已知條件。",
      "steps": [
        "辨認題目的語句結構",
        "把「已知 AB＝AC」歸入已知條件"
      ],
      "optionAnalysis": [
        {
          "choice": "已知條件",
          "truth": true,
          "reason": "依獨立推導可得到此結果；「已知」後提供、可直接使用的資訊是已知條件，因此 AB＝AC 是已知條件。"
        },
        {
          "choice": "待證結論",
          "truth": false,
          "reason": "∠B＝∠C 才是待證結論。"
        },
        {
          "choice": "證明理由",
          "truth": false,
          "reason": "理由是連接敘述的定義或性質。"
        },
        {
          "choice": "輔助線",
          "truth": false,
          "reason": "題目未新增任何線段。"
        }
      ],
      "misconceptionTarget": "把題目給的資訊誤當成要證明的結果。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「辨認幾何證明中的已知條件」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「已知條件」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：辨認幾何證明中的已知條件。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "5fe610d54c3e48e8babe1e173cece446faa3a9a58eae62d00eccbb3b13399e7b"
    },
    {
      "questionId": "u20-s001-v002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "在「已知兩直線 l、m 平行，求證 ∠1＝∠2」中，∠1＝∠2 是什麼？",
      "givenConditions": [],
      "target": "辨認待證結論",
      "choices": [
        "已知條件",
        "待證結論",
        "圖形名稱",
        "計算結果"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "「求證」後面的敘述是證明最後必須得到的結論。",
        "result": "待證結論"
      },
      "explanation": "「求證」後面的敘述是證明最後必須得到的結論。",
      "steps": [
        "找到「求證」提示詞",
        "確認 ∠1＝∠2 是最後目標"
      ],
      "optionAnalysis": [
        {
          "choice": "已知條件",
          "truth": false,
          "reason": "l∥m 才是已知條件。"
        },
        {
          "choice": "待證結論",
          "truth": true,
          "reason": "依獨立推導可得到此結果；「求證」後面的敘述是證明最後必須得到的結論。"
        },
        {
          "choice": "圖形名稱",
          "truth": false,
          "reason": "∠1、∠2 是角的標記，不是圖形名稱。"
        },
        {
          "choice": "計算結果",
          "truth": false,
          "reason": "本題要求邏輯證明，不只是算值。"
        }
      ],
      "misconceptionTarget": "只看出現順序，沒有辨認「求證」語意。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「辨認待證結論」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「待證結論」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：辨認待證結論。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "99740aa0fa2a0f05e0640fb8ee997f108ae24accfea64efa45f731ab27cef2e5"
    },
    {
      "questionId": "u20-s001-v003",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "下列哪一項最符合數學證明的要求？",
      "givenConditions": [],
      "target": "理解證明的基本標準",
      "choices": [
        "圖畫看起來相等即可",
        "只要最後答案正確即可",
        "每一步都必須有可接受的理由",
        "證明可以省略已知條件"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "證明不是憑圖形外觀或答案猜測，而是從已知出發，以定義、定理或已證性質支持每一步。",
        "result": "每一步都必須有可接受的理由"
      },
      "explanation": "證明不是憑圖形外觀或答案猜測，而是從已知出發，以定義、定理或已證性質支持每一步。",
      "steps": [
        "排除依賴視覺的敘述",
        "排除只重答案的敘述",
        "保留每一步有理由的要求"
      ],
      "optionAnalysis": [
        {
          "choice": "圖畫看起來相等即可",
          "truth": false,
          "reason": "圖可能不按比例，不能作為證明。"
        },
        {
          "choice": "只要最後答案正確即可",
          "truth": false,
          "reason": "正確結論仍需合理推導。"
        },
        {
          "choice": "每一步都必須有可接受的理由",
          "truth": true,
          "reason": "依獨立推導可得到此結果；證明不是憑圖形外觀或答案猜測，而是從已知出發，以定義、定理或已證性質支持每一步。"
        },
        {
          "choice": "證明可以省略已知條件",
          "truth": false,
          "reason": "證明必須清楚指出使用哪些條件。"
        }
      ],
      "misconceptionTarget": "把看圖或猜對答案當成證明。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「理解證明的基本標準」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「每一步都必須有可接受的理由」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：理解證明的基本標準。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "1d2c57743b8f8e4377fb2d1887c93ece2e4bddb5e1d52232877bd3d434c8e24b"
    },
    {
      "questionId": "u20-s001-v004",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "完成幾何證明時，最合理的整體方向是哪一個？",
      "givenConditions": [],
      "target": "掌握證明的推理方向",
      "choices": [
        "先假設結論成立，再把已知抄一次",
        "只寫圖形看起來對稱",
        "列出所有學過的定理但不連結",
        "由已知出發，逐步推出結論"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "有效證明應以已知條件為起點，透過有理由的中間敘述到達待證結論。",
        "result": "由已知出發，逐步推出結論"
      },
      "explanation": "有效證明應以已知條件為起點，透過有理由的中間敘述到達待證結論。",
      "steps": [
        "確認起點是已知",
        "確認中間有推理",
        "確認終點是待證結論"
      ],
      "optionAnalysis": [
        {
          "choice": "先假設結論成立，再把已知抄一次",
          "truth": false,
          "reason": "這會形成循環論證。"
        },
        {
          "choice": "只寫圖形看起來對稱",
          "truth": false,
          "reason": "視覺印象不是充分理由。"
        },
        {
          "choice": "列出所有學過的定理但不連結",
          "truth": false,
          "reason": "定理必須與條件和結論形成推理鏈。"
        },
        {
          "choice": "由已知出發，逐步推出結論",
          "truth": true,
          "reason": "依獨立推導可得到此結果；有效證明應以已知條件為起點，透過有理由的中間敘述到達待證結論。"
        }
      ],
      "misconceptionTarget": "把證明寫成結論重述或定理清單。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「掌握證明的推理方向」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「由已知出發，逐步推出結論」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：掌握證明的推理方向。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "c05e9c92f79d46a0929a48533d699e5ab74b114756d2dd2a586bbf8ff45b4316"
    },
    {
      "questionId": "u20-s001-v005",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "一張示意圖中，量得 AB 與 AC 都約為 4 公分。能否僅憑這次量測證明 AB＝AC？",
      "givenConditions": [],
      "target": "區分實驗觀察與數學證明",
      "choices": [
        "不能，因為圖形可能未按比例",
        "可以，尺量結果就是證明",
        "可以，只要誤差小於 1 毫米",
        "不能，因為線段永遠不能比較"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "示意圖與量測都可能有繪圖或讀值誤差；若題目未給等長條件或可推出等長的性質，量測不能構成嚴格證明。",
        "result": "不能，因為圖形可能未按比例"
      },
      "explanation": "示意圖與量測都可能有繪圖或讀值誤差；若題目未給等長條件或可推出等長的性質，量測不能構成嚴格證明。",
      "steps": [
        "辨認資料來源只是示意圖",
        "考慮繪圖與量測誤差",
        "判定缺少邏輯依據"
      ],
      "optionAnalysis": [
        {
          "choice": "不能，因為圖形可能未按比例",
          "truth": true,
          "reason": "依獨立推導可得到此結果；示意圖與量測都可能有繪圖或讀值誤差；若題目未給等長條件或可推出等長的性質，量測不能構成嚴格證明。"
        },
        {
          "choice": "可以，尺量結果就是證明",
          "truth": false,
          "reason": "量測只提供近似觀察。"
        },
        {
          "choice": "可以，只要誤差小於 1 毫米",
          "truth": false,
          "reason": "誤差小仍不能證明完全相等。"
        },
        {
          "choice": "不能，因為線段永遠不能比較",
          "truth": false,
          "reason": "線段可以比較，只是本題證據不足。"
        }
      ],
      "misconceptionTarget": "把近似量測誤認為精確等式的證明。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「區分實驗觀察與數學證明」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「不能，因為圖形可能未按比例」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：區分實驗觀察與數學證明。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "fa85e3de9f35e247c7acb02480c8d2da173bf779a11e5957ae9650a642a2372d"
    },
    {
      "questionId": "u20-s001-v006",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "檢查一份幾何證明是否完整時，最重要的是什麼？",
      "givenConditions": [],
      "target": "判斷證明完整性",
      "choices": [
        "字數越多越好",
        "每行都必須有計算式",
        "已知、推論、理由、結論彼此對應",
        "一定要畫彩色圖"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "完整性取決於敘述是否從已知推到結論，且每個推論都有對應理由，而不是篇幅、算式數量或圖面裝飾。",
        "result": "已知、推論、理由、結論彼此對應"
      },
      "explanation": "完整性取決於敘述是否從已知推到結論，且每個推論都有對應理由，而不是篇幅、算式數量或圖面裝飾。",
      "steps": [
        "檢查已知與結論",
        "逐步核對推論理由",
        "確認沒有跳步或循環"
      ],
      "optionAnalysis": [
        {
          "choice": "字數越多越好",
          "truth": false,
          "reason": "冗長不代表邏輯完整。"
        },
        {
          "choice": "每行都必須有計算式",
          "truth": false,
          "reason": "幾何證明常使用文字與性質。"
        },
        {
          "choice": "已知、推論、理由、結論彼此對應",
          "truth": true,
          "reason": "依獨立推導可得到此結果；完整性取決於敘述是否從已知推到結論，且每個推論都有對應理由，而不是篇幅、算式數量或圖面裝飾。"
        },
        {
          "choice": "一定要畫彩色圖",
          "truth": false,
          "reason": "顏色不是邏輯必要條件。"
        }
      ],
      "misconceptionTarget": "以格式或篇幅取代邏輯檢查。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「判斷證明完整性」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「已知、推論、理由、結論彼此對應」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：判斷證明完整性。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "1495d7bcb3e2b4cba0dfc2c80a69788f3c270c7ace05466259f36f66f4e33604"
    },
    {
      "questionId": "u20-s001-v007",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某證明從「AB＝AC」直接跳到「△ABD≅△ACD」，卻未說明 BD＝CD 或其他全等條件。這個問題最適合稱為什麼？",
      "givenConditions": [],
      "target": "辨識證明中的論證缺口",
      "choices": [
        "定義",
        "論證缺口",
        "已知條件",
        "待證結論"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "要推出三角形全等必須具備足夠條件；缺少必要中間條件或理由，形成論證缺口。",
        "result": "論證缺口"
      },
      "explanation": "要推出三角形全等必須具備足夠條件；缺少必要中間條件或理由，形成論證缺口。",
      "steps": [
        "列出全等需要的對應條件",
        "發現只有一組邊相等",
        "判定推論沒有充分支持"
      ],
      "optionAnalysis": [
        {
          "choice": "定義",
          "truth": false,
          "reason": "定義是可用的理由，不是此處的錯誤名稱。"
        },
        {
          "choice": "論證缺口",
          "truth": true,
          "reason": "依獨立推導可得到此結果；要推出三角形全等必須具備足夠條件；缺少必要中間條件或理由，形成論證缺口。"
        },
        {
          "choice": "已知條件",
          "truth": false,
          "reason": "AB＝AC 本身是已知，不是問題。"
        },
        {
          "choice": "待證結論",
          "truth": false,
          "reason": "全等是中間推論，問題在於推論不足。"
        }
      ],
      "misconceptionTarget": "看到熟悉結論就忽略所需條件。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「辨識證明中的論證缺口」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「論證缺口」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：辨識證明中的論證缺口。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "39dcb407bf46b6bd3a4a53eda845f74dde1a52ff7a1c4c0029a7047e8c106490"
    },
    {
      "questionId": "u20-s001-v008",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "為了證明 ∠A＝∠B，某人先寫「因為 ∠A＝∠B，所以兩角相等」。這犯了哪一種錯誤？",
      "givenConditions": [],
      "target": "辨識循環論證",
      "choices": [
        "反例",
        "直接證明",
        "分類討論",
        "循環論證"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "推理一開始就把待證結論當作理由使用，沒有由其他已知推出，因此是循環論證。",
        "result": "循環論證"
      },
      "explanation": "推理一開始就把待證結論當作理由使用，沒有由其他已知推出，因此是循環論證。",
      "steps": [
        "找出待證結論",
        "檢查它是否在推理前提中被使用",
        "判定前提與結論相同"
      ],
      "optionAnalysis": [
        {
          "choice": "反例",
          "truth": false,
          "reason": "反例是用實例推翻全稱敘述。"
        },
        {
          "choice": "直接證明",
          "truth": false,
          "reason": "直接證明要從已知推出結論。"
        },
        {
          "choice": "分類討論",
          "truth": false,
          "reason": "題目沒有分情況。"
        },
        {
          "choice": "循環論證",
          "truth": true,
          "reason": "依獨立推導可得到此結果；推理一開始就把待證結論當作理由使用，沒有由其他已知推出，因此是循環論證。"
        }
      ],
      "misconceptionTarget": "把結論換句話說後當作理由。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「辨識循環論證」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「循環論證」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：辨識循環論證。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "f6df04aa7228eb5d80e57f8cc467b5b10336f6f139eee805ee377e1dee826bfc"
    },
    {
      "questionId": "u20-s001-v009",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "已知兩個三角形具有三組可配對的充分全等條件，目標是證明其中一對角相等。下列策略最嚴謹的是哪一個？",
      "givenConditions": [],
      "target": "規劃多步證明策略",
      "choices": [
        "先量兩角大小",
        "先假設兩角相等",
        "先證明兩個三角形全等，再利用對應角相等",
        "只寫「顯然相等」"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "先依全等判定證明兩三角形全等，再用全等三角形對應角相等，即可得到目標。",
        "result": "先證明兩個三角形全等，再利用對應角相等"
      },
      "explanation": "先依全等判定證明兩三角形全等，再用全等三角形對應角相等，即可得到目標。",
      "steps": [
        "核對全等判定條件",
        "建立兩三角形全等",
        "由對應角性質得到結論"
      ],
      "optionAnalysis": [
        {
          "choice": "先量兩角大小",
          "truth": false,
          "reason": "量測不能保證精確相等。"
        },
        {
          "choice": "先假設兩角相等",
          "truth": false,
          "reason": "把結論當前提。"
        },
        {
          "choice": "先證明兩個三角形全等，再利用對應角相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；先依全等判定證明兩三角形全等，再用全等三角形對應角相等，即可得到目標。"
        },
        {
          "choice": "只寫「顯然相等」",
          "truth": false,
          "reason": "沒有指出可接受的理由。"
        }
      ],
      "misconceptionTarget": "知道全等結論卻沒有寫出兩段式推理。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「規劃多步證明策略」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「先證明兩個三角形全等，再利用對應角相等」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：規劃多步證明策略。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "4b797ea251d0351bdef7d11cda546a284382417aa488a7773dcbf431b394b588"
    },
    {
      "questionId": "u20-s001-v010",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "工程師依設計要求兩支撐桿等長，現場量得皆為 2.00 公尺。關於「兩桿在設計上等長」的說明，何者最恰當？",
      "givenConditions": [],
      "target": "在工程情境辨認證明與量測的角色",
      "choices": [
        "施工紀錄只提供近似檢查，仍需依設計條件推理",
        "施工紀錄完全等同數學證明",
        "只要兩次量測相同就必然等長",
        "設計圖與證明無關"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "現場量測可檢查製作結果，但設計上的精確等長應來自圖說的等長條件或幾何推理；量測值受精度限制。",
        "result": "施工紀錄只提供近似檢查，仍需依設計條件推理"
      },
      "explanation": "現場量測可檢查製作結果，但設計上的精確等長應來自圖說的等長條件或幾何推理；量測值受精度限制。",
      "steps": [
        "區分設計條件與現場量測",
        "辨認 2.00 公尺是有限精度讀值",
        "判斷嚴格結論的依據"
      ],
      "optionAnalysis": [
        {
          "choice": "施工紀錄只提供近似檢查，仍需依設計條件推理",
          "truth": true,
          "reason": "依獨立推導可得到此結果；現場量測可檢查製作結果，但設計上的精確等長應來自圖說的等長條件或幾何推理；量測值受精度限制。"
        },
        {
          "choice": "施工紀錄完全等同數學證明",
          "truth": false,
          "reason": "工程量測與形式證明的證據性質不同。"
        },
        {
          "choice": "只要兩次量測相同就必然等長",
          "truth": false,
          "reason": "相同顯示值可能掩蓋細小差異。"
        },
        {
          "choice": "設計圖與證明無關",
          "truth": false,
          "reason": "設計條件正是推理的重要來源。"
        }
      ],
      "misconceptionTarget": "把儀器顯示值視為無誤差的精確等式。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "長度皆以公尺表示，單位一致；2.00 反映量測精度。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在工程情境辨認證明與量測的角色」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「施工紀錄只提供近似檢查，仍需依設計條件推理」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在工程情境辨認證明與量測的角色。",
      "literacyContextNecessity": "情境要求判斷設計條件、量測精度與數學證明之間的差異，刪除工程資訊便失去判讀重點。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "afc837e30690312702d74b590efed89e176445c6c89173bb517a5df1764acc96"
    },
    {
      "questionId": "u20-s001-v011",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "一份橋架檢核報告寫道：「四邊形的兩條對角線互相平分，所以由對角線形成的兩個三角形全等。」審查者最應要求補充什麼？",
      "givenConditions": [],
      "target": "審查實務報告中的證明缺口",
      "choices": [
        "只要把字寫大一點",
        "改用不同顏色畫對角線",
        "刪除待證結論",
        "需要補上「對角線互相平分」如何推出兩組邊對應相等"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "要使用全等判定，應明確指出兩條對角線被交點分成的兩組等長線段，以及交叉處的對頂角相等，才能形成 SAS。",
        "result": "需要補上「對角線互相平分」如何推出兩組邊對應相等"
      },
      "explanation": "要使用全等判定，應明確指出兩條對角線被交點分成的兩組等長線段，以及交叉處的對頂角相等，才能形成 SAS。",
      "steps": [
        "把「互相平分」轉成兩組線段相等",
        "指出交點產生對頂角相等",
        "說明使用 SAS 全等"
      ],
      "optionAnalysis": [
        {
          "choice": "只要把字寫大一點",
          "truth": false,
          "reason": "排版不能補足推理。"
        },
        {
          "choice": "改用不同顏色畫對角線",
          "truth": false,
          "reason": "顏色只協助閱讀。"
        },
        {
          "choice": "刪除待證結論",
          "truth": false,
          "reason": "刪除目標會使報告失去目的。"
        },
        {
          "choice": "需要補上「對角線互相平分」如何推出兩組邊對應相等",
          "truth": true,
          "reason": "依獨立推導可得到此結果；要使用全等判定，應明確指出兩條對角線被交點分成的兩組等長線段，以及交叉處的對頂角相等，才能形成 SAS。"
        }
      ],
      "misconceptionTarget": "把一個性質直接跳接到全等，省略對應條件。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「審查實務報告中的證明缺口」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「需要補上「對角線互相平分」如何推出兩組邊對應相等」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：審查實務報告中的證明缺口。",
      "literacyContextNecessity": "橋架檢核需把設計敘述轉成可驗證的全等條件，情境資訊直接決定審查內容。",
      "figureId": "fig-u20-proof-bridge-01",
      "drawingSpecId": "fig-u20-proof-bridge-01",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "c293a52c2aa4470646a1c4c0d7f153b1216406747707dd4fb89b3e4c39649704"
    },
    {
      "questionId": "u20-s001-v012",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "地圖上的兩條道路畫得近似垂直，但圖例只標示其中一處為直角。解題時應採取哪一原則？",
      "givenConditions": [],
      "target": "在地圖情境遵守證明的已知邊界",
      "choices": [
        "圖上看起來垂直就可直接使用",
        "圖示只能協助理解，正式判定仍以標記和文字條件為準",
        "只要比例尺正確就不需理由",
        "未畫出的關係一律不可能成立"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "可直接使用的垂直關係只限題目明示的直角標記或能由條件推出者；外觀看似垂直不能自行增加已知。",
        "result": "圖示只能協助理解，正式判定仍以標記和文字條件為準"
      },
      "explanation": "可直接使用的垂直關係只限題目明示的直角標記或能由條件推出者；外觀看似垂直不能自行增加已知。",
      "steps": [
        "辨認正式標記",
        "區分視覺外觀與已知條件",
        "只使用可證成的關係"
      ],
      "optionAnalysis": [
        {
          "choice": "圖上看起來垂直就可直接使用",
          "truth": false,
          "reason": "示意圖可能不按比例。"
        },
        {
          "choice": "圖示只能協助理解，正式判定仍以標記和文字條件為準",
          "truth": true,
          "reason": "依獨立推導可得到此結果；可直接使用的垂直關係只限題目明示的直角標記或能由條件推出者；外觀看似垂直不能自行增加已知。"
        },
        {
          "choice": "只要比例尺正確就不需理由",
          "truth": false,
          "reason": "比例尺仍不能取代題目條件。"
        },
        {
          "choice": "未畫出的關係一律不可能成立",
          "truth": false,
          "reason": "未標示只代表不能直接假設，不代表必不成立。"
        }
      ],
      "misconceptionTarget": "從圖形外觀自行添加條件。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在地圖情境遵守證明的已知邊界」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「圖示只能協助理解，正式判定仍以標記和文字條件為準」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在地圖情境遵守證明的已知邊界。",
      "literacyContextNecessity": "道路圖例與直角標記決定哪些關係可合法使用，地圖資訊不可刪除。",
      "figureId": "fig-u20-proof-map-01",
      "drawingSpecId": "fig-u20-proof-map-01",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "1f36f9ceb10143da6b74ec960527e230a11ee9af87773f37f2b21f56e4e7eba8"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u20-s001-cr001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "已知 △ABC 中 AB＝AC。請說明「已知條件」「待證結論」與「可接受理由」三者的差別，並寫出證明 ∠B＝∠C 的完整推理。",
      "requiredWork": [
        "明確列出已知 AB＝AC。",
        "明確列出待證 ∠B＝∠C。",
        "用等腰三角形定義與底角性質連接。"
      ],
      "standardSolution": [
        "已知：AB＝AC。",
        "由兩邊 AB、AC 相等，△ABC 是以 A 為頂角的等腰三角形。",
        "等腰三角形兩底角相等，所以 ∠B＝∠C。",
        "已知是題目直接給的資訊；待證是最後目標；理由是讓每一步合法的定義或性質。"
      ],
      "alternativeMethods": [
        "也可作 A 的角平分線交 BC 於 D，再以 SAS 證明兩小三角形全等後推出底角相等，但較冗長。"
      ],
      "reasoningSteps": [
        "已知：AB＝AC。",
        "由兩邊 AB、AC 相等，△ABC 是以 A 為頂角的等腰三角形。",
        "等腰三角形兩底角相等，所以 ∠B＝∠C。",
        "已知是題目直接給的資訊；待證是最後目標；理由是讓每一步合法的定義或性質。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確區分三種角色，且從 AB＝AC 以等腰定義與底角性質完整推出 ∠B＝∠C。"
        },
        {
          "score": 2,
          "criteria": "結論與主要理由正確，但三種角色說明缺一項或用語略不完整。"
        },
        {
          "score": 1,
          "criteria": "知道 AB＝AC 是已知、∠B＝∠C 是結論，但只寫『等腰所以相等』且未說清理由。"
        },
        {
          "score": 0,
          "criteria": "把結論當已知、依圖形外觀判斷，或沒有有效推理。"
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
        "把 AB＝AC 與 ∠B＝∠C 都寫成已知。",
        "只寫『看起來對稱』。",
        "先假設 ∠B＝∠C 再推出自己。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "已知：AB＝AC。；由兩邊 AB、AC 相等，△ABC 是以 A 為頂角的等腰三角形。；等腰三角形兩底角相等，所以 ∠B＝∠C。；已知是題目直接給的資訊；待證是最後目標；理由是讓每一步合法的定義或性質。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "8f4647482222bd4ce927df5608b6bbb10119f927a4f78db7b0fd8383c421c667"
    },
    {
      "questionId": "u20-s001-cr002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "geometry-proof-basic",
      "skillSlot": "s001",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "一位同學說：「圖上量得 AB、AC 都約 5.0 公分，所以已證明 AB＝AC。」請評估此論證，指出至少兩個問題，並提出一種可形成數學證明的補充條件。",
      "requiredWork": [
        "指出量測與示意圖的限制。",
        "說明近似相等不等於精確相等。",
        "提出可接受的正式條件或推理。"
      ],
      "standardSolution": [
        "此論證不能構成嚴格證明。第一，圖形可能未按比例；第二，尺量有讀值與繪圖誤差，兩個5.0只代表在該精度下近似相同。",
        "可補充『題目以相同刻痕標示 AB、AC』，或由兩個已證全等三角形的對應邊推出 AB＝AC。"
      ],
      "alternativeMethods": [
        "若給座標，也可用距離公式分別計算 AB、AC 並得到完全相同的精確值。"
      ],
      "reasoningSteps": [
        "此論證不能構成嚴格證明。第一，圖形可能未按比例；第二，尺量有讀值與繪圖誤差，兩個5.0只代表在該精度下近似相同。",
        "可補充『題目以相同刻痕標示 AB、AC』，或由兩個已證全等三角形的對應邊推出 AB＝AC。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "指出至少兩個具體限制，明確區分近似與精確，並提出一項足以證明等長的正式條件。"
        },
        {
          "score": 2,
          "criteria": "指出量測不能證明並提出有效補充條件，但限制只說明一項。"
        },
        {
          "score": 1,
          "criteria": "只說『不準』或『圖不可信』，未解釋原因或未提出可用條件。"
        },
        {
          "score": 0,
          "criteria": "認為相同量測值必然完成證明，或提出與等長無關的條件。"
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
        "把誤差小誤當成沒有誤差。",
        "提出『顏色相同』作等長理由。",
        "只否定但沒有提出如何改進。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "此論證不能構成嚴格證明。第一，圖形可能未按比例；第二，尺量有讀值與繪圖誤差，兩個5.0只代表在該精度下近似相同。；可補充『題目以相同刻痕標示 AB、AC』，或由兩個已證全等三角形的對應邊推出 AB＝AC。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "8f4714bb0607d8ac78e5c02fab0e252ba3f297de31b1ce6fd84adb53bc185af8"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u20-s001-v001",
      "contentSha256": "5fe610d54c3e48e8babe1e173cece446faa3a9a58eae62d00eccbb3b13399e7b",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "「已知」後提供、可直接使用的資訊是已知條件，因此 AB＝AC 是已知條件。",
      "derivedAnswer": "已知條件",
      "storedAnswer": "已知條件",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「已知條件」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把題目給的資訊誤當成要證明的結果。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：辨認幾何證明中的已知條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「題目寫著「已知 AB＝AC，求證 ∠B＝∠C」。其中「AB＝AC」屬於哪一部分？」要求辨認幾何證明中的已知條件。獨立推導為：「已知」後提供、可直接使用的資訊是已知條件，因此 AB＝AC 是已知條件。 四選項依序判定：已知條件=真，依獨立推導可得到此結果；「已知」後提供、可直接使用的資訊是已知條件，因此 AB＝AC 是已知條件。；待證結論=假，∠B＝∠C 才是待證結論。；證明理由=假，理由是連接敘述的定義或性質。；輔助線=假，題目未新增任何線段。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "852bd45524b02a90c9a28f58a88e6077a2473d00236725cc8ada4177d1e2e259"
    },
    {
      "questionId": "u20-s001-v002",
      "contentSha256": "99740aa0fa2a0f05e0640fb8ee997f108ae24accfea64efa45f731ab27cef2e5",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "「求證」後面的敘述是證明最後必須得到的結論。",
      "derivedAnswer": "待證結論",
      "storedAnswer": "待證結論",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「待證結論」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「只看出現順序，沒有辨認「求證」語意。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：辨認待證結論。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「在「已知兩直線 l、m 平行，求證 ∠1＝∠2」中，∠1＝∠2 是什麼？」要求辨認待證結論。獨立推導為：「求證」後面的敘述是證明最後必須得到的結論。 四選項依序判定：已知條件=假，l∥m 才是已知條件。；待證結論=真，依獨立推導可得到此結果；「求證」後面的敘述是證明最後必須得到的結論。；圖形名稱=假，∠1、∠2 是角的標記，不是圖形名稱。；計算結果=假，本題要求邏輯證明，不只是算值。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "9a6e009d28eebf475d7dbfc6042461fcb7265df622ad1d37ce000b573461f4e3"
    },
    {
      "questionId": "u20-s001-v003",
      "contentSha256": "1d2c57743b8f8e4377fb2d1887c93ece2e4bddb5e1d52232877bd3d434c8e24b",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "證明不是憑圖形外觀或答案猜測，而是從已知出發，以定義、定理或已證性質支持每一步。",
      "derivedAnswer": "每一步都必須有可接受的理由",
      "storedAnswer": "每一步都必須有可接受的理由",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「每一步都必須有可接受的理由」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把看圖或猜對答案當成證明。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：理解證明的基本標準。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一項最符合數學證明的要求？」要求理解證明的基本標準。獨立推導為：證明不是憑圖形外觀或答案猜測，而是從已知出發，以定義、定理或已證性質支持每一步。 四選項依序判定：圖畫看起來相等即可=假，圖可能不按比例，不能作為證明。；只要最後答案正確即可=假，正確結論仍需合理推導。；每一步都必須有可接受的理由=真，依獨立推導可得到此結果；證明不是憑圖形外觀或答案猜測，而是從已知出發，以定義、定理或已證性質支持每一步。；證明可以省略已知條件=假，證明必須清楚指出使用哪些條件。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "065ac9cc01eb4d4fe5b7a39ef35100e034a51323234087fdc69451974ec3f6ed"
    },
    {
      "questionId": "u20-s001-v004",
      "contentSha256": "c05e9c92f79d46a0929a48533d699e5ab74b114756d2dd2a586bbf8ff45b4316",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "有效證明應以已知條件為起點，透過有理由的中間敘述到達待證結論。",
      "derivedAnswer": "由已知出發，逐步推出結論",
      "storedAnswer": "由已知出發，逐步推出結論",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「由已知出發，逐步推出結論」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把證明寫成結論重述或定理清單。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：掌握證明的推理方向。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「完成幾何證明時，最合理的整體方向是哪一個？」要求掌握證明的推理方向。獨立推導為：有效證明應以已知條件為起點，透過有理由的中間敘述到達待證結論。 四選項依序判定：先假設結論成立，再把已知抄一次=假，這會形成循環論證。；只寫圖形看起來對稱=假，視覺印象不是充分理由。；列出所有學過的定理但不連結=假，定理必須與條件和結論形成推理鏈。；由已知出發，逐步推出結論=真，依獨立推導可得到此結果；有效證明應以已知條件為起點，透過有理由的中間敘述到達待證結論。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "22004146cfeb1b2ec460de7dffed75ddc44959c85132ce3f3b7090e82ae6535b"
    },
    {
      "questionId": "u20-s001-v005",
      "contentSha256": "fa85e3de9f35e247c7acb02480c8d2da173bf779a11e5957ae9650a642a2372d",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "示意圖與量測都可能有繪圖或讀值誤差；若題目未給等長條件或可推出等長的性質，量測不能構成嚴格證明。",
      "derivedAnswer": "不能，因為圖形可能未按比例",
      "storedAnswer": "不能，因為圖形可能未按比例",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「不能，因為圖形可能未按比例」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把近似量測誤認為精確等式的證明。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：區分實驗觀察與數學證明。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一張示意圖中，量得 AB 與 AC 都約為 4 公分。能否僅憑這次量測證明 AB＝AC？」要求區分實驗觀察與數學證明。獨立推導為：示意圖與量測都可能有繪圖或讀值誤差；若題目未給等長條件或可推出等長的性質，量測不能構成嚴格證明。 四選項依序判定：不能，因為圖形可能未按比例=真，依獨立推導可得到此結果；示意圖與量測都可能有繪圖或讀值誤差；若題目未給等長條件或可推出等長的性質，量測不能構成嚴格證明。；可以，尺量結果就是證明=假，量測只提供近似觀察。；可以，只要誤差小於 1 毫米=假，誤差小仍不能證明完全相等。；不能，因為線段永遠不能比較=假，線段可以比較，只是本題證據不足。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "10a9de924844385677e7565d661c668d2bca772eb0193d4b51d7eaf50e76a91f"
    },
    {
      "questionId": "u20-s001-v006",
      "contentSha256": "1495d7bcb3e2b4cba0dfc2c80a69788f3c270c7ace05466259f36f66f4e33604",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "完整性取決於敘述是否從已知推到結論，且每個推論都有對應理由，而不是篇幅、算式數量或圖面裝飾。",
      "derivedAnswer": "已知、推論、理由、結論彼此對應",
      "storedAnswer": "已知、推論、理由、結論彼此對應",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「已知、推論、理由、結論彼此對應」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「以格式或篇幅取代邏輯檢查。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：判斷證明完整性。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「檢查一份幾何證明是否完整時，最重要的是什麼？」要求判斷證明完整性。獨立推導為：完整性取決於敘述是否從已知推到結論，且每個推論都有對應理由，而不是篇幅、算式數量或圖面裝飾。 四選項依序判定：字數越多越好=假，冗長不代表邏輯完整。；每行都必須有計算式=假，幾何證明常使用文字與性質。；已知、推論、理由、結論彼此對應=真，依獨立推導可得到此結果；完整性取決於敘述是否從已知推到結論，且每個推論都有對應理由，而不是篇幅、算式數量或圖面裝飾。；一定要畫彩色圖=假，顏色不是邏輯必要條件。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "c808d93dcf0e9c091929dca0d2d86e5505167c36ba672e2afcc81d4aec342562"
    },
    {
      "questionId": "u20-s001-v007",
      "contentSha256": "39dcb407bf46b6bd3a4a53eda845f74dde1a52ff7a1c4c0029a7047e8c106490",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "要推出三角形全等必須具備足夠條件；缺少必要中間條件或理由，形成論證缺口。",
      "derivedAnswer": "論證缺口",
      "storedAnswer": "論證缺口",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「論證缺口」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「看到熟悉結論就忽略所需條件。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：辨識證明中的論證缺口。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某證明從「AB＝AC」直接跳到「△ABD≅△ACD」，卻未說明 BD＝CD 或其他全等條件。這個問題最適合稱為什麼？」要求辨識證明中的論證缺口。獨立推導為：要推出三角形全等必須具備足夠條件；缺少必要中間條件或理由，形成論證缺口。 四選項依序判定：定義=假，定義是可用的理由，不是此處的錯誤名稱。；論證缺口=真，依獨立推導可得到此結果；要推出三角形全等必須具備足夠條件；缺少必要中間條件或理由，形成論證缺口。；已知條件=假，AB＝AC 本身是已知，不是問題。；待證結論=假，全等是中間推論，問題在於推論不足。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "324f0d7c122983e442f29fcc7a0fb3efff047b706b321af2c41ec72797c25549"
    },
    {
      "questionId": "u20-s001-v008",
      "contentSha256": "f6df04aa7228eb5d80e57f8cc467b5b10336f6f139eee805ee377e1dee826bfc",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "推理一開始就把待證結論當作理由使用，沒有由其他已知推出，因此是循環論證。",
      "derivedAnswer": "循環論證",
      "storedAnswer": "循環論證",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「循環論證」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把結論換句話說後當作理由。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：辨識循環論證。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「為了證明 ∠A＝∠B，某人先寫「因為 ∠A＝∠B，所以兩角相等」。這犯了哪一種錯誤？」要求辨識循環論證。獨立推導為：推理一開始就把待證結論當作理由使用，沒有由其他已知推出，因此是循環論證。 四選項依序判定：反例=假，反例是用實例推翻全稱敘述。；直接證明=假，直接證明要從已知推出結論。；分類討論=假，題目沒有分情況。；循環論證=真，依獨立推導可得到此結果；推理一開始就把待證結論當作理由使用，沒有由其他已知推出，因此是循環論證。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "65858ceb7f044c7bbb21d6ec6de0d6ae397c38e111d62c2b6a6a064e4dc6ac0d"
    },
    {
      "questionId": "u20-s001-v009",
      "contentSha256": "4b797ea251d0351bdef7d11cda546a284382417aa488a7773dcbf431b394b588",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "先依全等判定證明兩三角形全等，再用全等三角形對應角相等，即可得到目標。",
      "derivedAnswer": "先證明兩個三角形全等，再利用對應角相等",
      "storedAnswer": "先證明兩個三角形全等，再利用對應角相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「先證明兩個三角形全等，再利用對應角相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「知道全等結論卻沒有寫出兩段式推理。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：規劃多步證明策略。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已知兩個三角形具有三組可配對的充分全等條件，目標是證明其中一對角相等。下列策略最嚴謹的是哪一個？」要求規劃多步證明策略。獨立推導為：先依全等判定證明兩三角形全等，再用全等三角形對應角相等，即可得到目標。 四選項依序判定：先量兩角大小=假，量測不能保證精確相等。；先假設兩角相等=假，把結論當前提。；先證明兩個三角形全等，再利用對應角相等=真，依獨立推導可得到此結果；先依全等判定證明兩三角形全等，再用全等三角形對應角相等，即可得到目標。；只寫「顯然相等」=假，沒有指出可接受的理由。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "155a1f6869e32cb418d745c6bf2bdb3f6b61280577f85a345af7d25c81db9100"
    },
    {
      "questionId": "u20-s001-v010",
      "contentSha256": "afc837e30690312702d74b590efed89e176445c6c89173bb517a5df1764acc96",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "現場量測可檢查製作結果，但設計上的精確等長應來自圖說的等長條件或幾何推理；量測值受精度限制。",
      "derivedAnswer": "施工紀錄只提供近似檢查，仍需依設計條件推理",
      "storedAnswer": "施工紀錄只提供近似檢查，仍需依設計條件推理",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「施工紀錄只提供近似檢查，仍需依設計條件推理」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "長度皆以公尺表示，單位一致；2.00 反映量測精度。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把儀器顯示值視為無誤差的精確等式。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在工程情境辨認證明與量測的角色。",
      "literacyContextNecessity": "情境要求判斷設計條件、量測精度與數學證明之間的差異，刪除工程資訊便失去判讀重點。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「工程師依設計要求兩支撐桿等長，現場量得皆為 2.00 公尺。關於「兩桿在設計上等長」的說明，何者最恰當？」要求在工程情境辨認證明與量測的角色。獨立推導為：現場量測可檢查製作結果，但設計上的精確等長應來自圖說的等長條件或幾何推理；量測值受精度限制。 四選項依序判定：施工紀錄只提供近似檢查，仍需依設計條件推理=真，依獨立推導可得到此結果；現場量測可檢查製作結果，但設計上的精確等長應來自圖說的等長條件或幾何推理；量測值受精度限制。；施工紀錄完全等同數學證明=假，工程量測與形式證明的證據性質不同。；只要兩次量測相同就必然等長=假，相同顯示值可能掩蓋細小差異。；設計圖與證明無關=假，設計條件正是推理的重要來源。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "e9aef8bff396d081b2be8c1ac5c6d9a590bdd951a1332f76f5f7e960b5a62460"
    },
    {
      "questionId": "u20-s001-v011",
      "contentSha256": "c293a52c2aa4470646a1c4c0d7f153b1216406747707dd4fb89b3e4c39649704",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "要使用全等判定，應明確指出兩條對角線被交點分成的兩組等長線段，以及交叉處的對頂角相等，才能形成 SAS。",
      "derivedAnswer": "需要補上「對角線互相平分」如何推出兩組邊對應相等",
      "storedAnswer": "需要補上「對角線互相平分」如何推出兩組邊對應相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「需要補上「對角線互相平分」如何推出兩組邊對應相等」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把一個性質直接跳接到全等，省略對應條件。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：審查實務報告中的證明缺口。",
      "literacyContextNecessity": "橋架檢核需把設計敘述轉成可驗證的全等條件，情境資訊直接決定審查內容。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一份橋架檢核報告寫道：「四邊形的兩條對角線互相平分，所以由對角線形成的兩個三角形全等。」審查者最應要求補充什麼？」要求審查實務報告中的證明缺口。獨立推導為：要使用全等判定，應明確指出兩條對角線被交點分成的兩組等長線段，以及交叉處的對頂角相等，才能形成 SAS。 四選項依序判定：只要把字寫大一點=假，排版不能補足推理。；改用不同顏色畫對角線=假，顏色只協助閱讀。；刪除待證結論=假，刪除目標會使報告失去目的。；需要補上「對角線互相平分」如何推出兩組邊對應相等=真，依獨立推導可得到此結果；要使用全等判定，應明確指出兩條對角線被交點分成的兩組等長線段，以及交叉處的對頂角相等，才能形成 SAS。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "3ca0f57adbf1b69e17f50f95b0c1d44e994028e4f9c1703c7ea8cf98890378c5"
    },
    {
      "questionId": "u20-s001-v012",
      "contentSha256": "1f36f9ceb10143da6b74ec960527e230a11ee9af87773f37f2b21f56e4e7eba8",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "可直接使用的垂直關係只限題目明示的直角標記或能由條件推出者；外觀看似垂直不能自行增加已知。",
      "derivedAnswer": "圖示只能協助理解，正式判定仍以標記和文字條件為準",
      "storedAnswer": "圖示只能協助理解，正式判定仍以標記和文字條件為準",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「圖示只能協助理解，正式判定仍以標記和文字條件為準」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「從圖形外觀自行添加條件。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在地圖情境遵守證明的已知邊界。",
      "literacyContextNecessity": "道路圖例與直角標記決定哪些關係可合法使用，地圖資訊不可刪除。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「地圖上的兩條道路畫得近似垂直，但圖例只標示其中一處為直角。解題時應採取哪一原則？」要求在地圖情境遵守證明的已知邊界。獨立推導為：可直接使用的垂直關係只限題目明示的直角標記或能由條件推出者；外觀看似垂直不能自行增加已知。 四選項依序判定：圖上看起來垂直就可直接使用=假，示意圖可能不按比例。；圖示只能協助理解，正式判定仍以標記和文字條件為準=真，依獨立推導可得到此結果；可直接使用的垂直關係只限題目明示的直角標記或能由條件推出者；外觀看似垂直不能自行增加已知。；只要比例尺正確就不需理由=假，比例尺仍不能取代題目條件。；未畫出的關係一律不可能成立=假，未標示只代表不能直接假設，不代表必不成立。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "6b7d25f12835950a38a0908e1af6576d11a1cc89aa170ef9bab258e3499dd48c"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "fig-u20-proof-bridge-01",
      "unitId": "u20",
      "ownerSkillSlot": "s001",
      "title": "橋架對角線條件圖",
      "description": "四邊形橋架兩條對角線交於O，對角線兩側各有相同刻痕，交點形成對頂角；圖用於檢查由互相平分到SAS的缺漏。",
      "canvas": {
        "width": 480,
        "height": 320,
        "viewBox": "0 0 480 320"
      },
      "coordinates": {
        "A": [
          80,
          70
        ],
        "B": [
          400,
          90
        ],
        "C": [
          360,
          255
        ],
        "D": [
          100,
          235
        ],
        "O": [
          235,
          172
        ]
      },
      "visibleLineRules": "實線表示題設中的線段或道路；虛線表示延長線或輔助線；直角方框、等長刻痕與平行箭頭只在題設提供時使用。",
      "hiddenLineRules": "本單元為平面圖，不使用立體隱線；未畫出的關係不得自行假設。",
      "labels": "所有點名放在點外側至少8像素；避免壓在線段或直角記號上。",
      "toScale": false,
      "visualInferenceWarning": "圖形未按比例，不可用外觀估計未標示的長度或角度。",
      "altText": "橋架四邊形ABCD，對角線AC與BD交於O，AO與OC有同類刻痕，BO與OD有另一類刻痕。",
      "svgTitle": "橋架對角線條件圖",
      "svgDesc": "四邊形橋架兩條對角線交於O，對角線兩側各有相同刻痕，交點形成對頂角；圖用於檢查由互相平分到SAS的缺漏。",
      "mobileReadabilityReview": "在寬度320像素縮放下，主要線段、直角記號與標籤仍可辨認；字級不小於16。",
      "answerLeakageReview": "圖中只呈現題設標記與辨識所需結構，不標示選項答案、中心名稱結論或未給定數值。",
      "geometryAssertions": [
        "AC與BD交於O",
        "AO與OC標示等長",
        "BO與OD標示等長",
        "未標示整個四邊形平行或對稱"
      ],
      "manualVisualInspection": "pass: rendered at 480x320 and reviewed at 320px-equivalent readability; no clipping or answer leakage",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "figureId": "fig-u20-proof-map-01",
      "unitId": "u20",
      "ownerSkillSlot": "s001",
      "title": "道路直角標記圖",
      "description": "三條道路線段中只有道路a與t的交點標示直角，道路b雖看似與t垂直但未標記。",
      "canvas": {
        "width": 480,
        "height": 320,
        "viewBox": "0 0 480 320"
      },
      "coordinates": {
        "a": [
          [
            60,
            95
          ],
          [
            420,
            120
          ]
        ],
        "b": [
          [
            70,
            220
          ],
          [
            410,
            205
          ]
        ],
        "t": [
          [
            230,
            35
          ],
          [
            250,
            280
          ]
        ]
      },
      "visibleLineRules": "實線表示題設中的線段或道路；虛線表示延長線或輔助線；直角方框、等長刻痕與平行箭頭只在題設提供時使用。",
      "hiddenLineRules": "本單元為平面圖，不使用立體隱線；未畫出的關係不得自行假設。",
      "labels": "所有點名放在點外側至少8像素；避免壓在線段或直角記號上。",
      "toScale": false,
      "visualInferenceWarning": "圖形未按比例，不可用外觀估計未標示的長度或角度。",
      "altText": "道路a與道路b近似水平，道路t穿過兩者；只有a與t交點有直角方框。",
      "svgTitle": "道路直角標記圖",
      "svgDesc": "三條道路線段中只有道路a與t的交點標示直角，道路b雖看似與t垂直但未標記。",
      "mobileReadabilityReview": "在寬度320像素縮放下，主要線段、直角記號與標籤仍可辨認；字級不小於16。",
      "answerLeakageReview": "圖中只呈現題設標記與辨識所需結構，不標示選項答案、中心名稱結論或未給定數值。",
      "geometryAssertions": [
        "僅a與t有直角標記",
        "b與t無直角標記",
        "圖形未按比例"
      ],
      "manualVisualInspection": "pass: rendered at 480x320 and reviewed at 320px-equivalent readability; no clipping or answer leakage",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ]
};
export default skillBundle;
