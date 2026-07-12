// Generated only by serialization from approved reviewed source. Do not edit.
export const sourceDigest="4e19a45cd7d353f5eaf35bea0b4cb98bf38505b586f5812049efad1bdf9b3788";
export const skillBundle={
  "lecture": {
    "lectureId": "u20-s005-lecture-r1",
    "unitId": "u20",
    "numericUnitId": 20,
    "topicId": "u20-proof",
    "skillId": "proof-contrapositive-basic",
    "skillSlot": "s005",
    "lockedSkillTitle": "逆否命題基本",
    "title": "逆否命題基本：交換並否定，保留原命題真假",
    "audience": "臺灣國中零基礎至會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能把『若P則Q』改寫為『若非Q則非P』。",
      "能區分逆命題、否命題與逆否命題。",
      "能正確處理『不小於』與『不都是』等否定。",
      "能用反例檢查條件命題。"
    ],
    "prerequisites": [
      {
        "skillId": "proof-fill-reason",
        "requiredLevel": "能使用該技能的核心定義與基本推理。"
      }
    ],
    "prerequisiteBridge": "若無單元內先備技能，從已知、圖形標記與國中基本線角概念開始；若有先備技能，先回想「proof-fill-reason」再進入本節。",
    "glossary": [
      {
        "term": "條件命題",
        "definition": "形式為『若條件P成立，則結論Q成立』的敘述。"
      },
      {
        "term": "逆命題",
        "definition": "交換條件與結論，成為若Q則P。"
      },
      {
        "term": "否命題",
        "definition": "分別否定但不交換，成為若非P則非Q。"
      },
      {
        "term": "逆否命題",
        "definition": "先交換再否定，成為若非Q則非P，與原命題等價。"
      }
    ],
    "notation": [
      {
        "symbol": "P→Q",
        "meaning": "若P，則Q。"
      },
      {
        "symbol": "¬Q→¬P",
        "meaning": "若非Q，則非P，即逆否命題。"
      }
    ],
    "conceptNarrative": [
      "逆否要做兩個動作：把結論移到前面、把條件移到後面，並且兩邊都否定。少做任何一項都不是逆否。",
      "原命題與逆否命題會在同一種情況失敗：P成立而Q不成立。因此兩者真假相同。",
      "否定要完整。『小於5』的否定是『大於或等於5』；『A且B』的否定是『至少一項不成立』，不是必須兩項都不成立。"
    ],
    "formalDefinitions": [
      {
        "name": "反例",
        "statement": "一個滿足P但不滿足Q的例子，可推翻『若P則Q』的普遍性。"
      },
      {
        "name": "逆否證明",
        "statement": "改證非Q能推出非P，因其與原命題等價。"
      }
    ],
    "formulas": [
      {
        "formula": "P→Q 等價於 ¬Q→¬P",
        "conditions": [
          "P、Q的否定範圍要正確",
          "不能把Q→P當成等價形式"
        ],
        "meaning": "逆否等價。"
      }
    ],
    "nonApplicableCases": [
      "原命題真，不代表逆命題一定真。",
      "條件不成立時，原規則通常不能決定結論真假。",
      "否定『小於』時不可漏掉等於的邊界。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "用短句標出P與Q。",
        "check": "不要把條件中的修飾詞漏掉。"
      },
      {
        "step": 2,
        "instruction": "交換成Q在前、P在後。",
        "check": "此時還不是完成答案。"
      },
      {
        "step": 3,
        "instruction": "分別寫出Q與P的完整否定。",
        "check": "不等式是否包含邊界？"
      },
      {
        "step": 4,
        "instruction": "朗讀並與原命題比較。",
        "check": "是否誤寫成逆命題或否命題？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "若能被2整除，則是偶數。",
        "solutionSteps": [
          "P：能被2整除；Q：是偶數。",
          "非Q：不是偶數；非P：不能被2整除。"
        ],
        "answer": "若不是偶數，則不能被2整除。"
      },
      {
        "exampleId": "L2",
        "prompt": "若距離小於5，則警報亮。",
        "solutionSteps": [
          "非Q：警報未亮。",
          "非P：距離不小於5，含等於5。"
        ],
        "answer": "若警報未亮，則距離大於或等於5。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "只交換，寫成若Q則P。",
        "why": "這是逆命題。",
        "correction": "交換後還要兩邊否定。"
      },
      {
        "mistake": "把『不都是』寫成『都不是』。",
        "why": "否定範圍過強。",
        "correction": "至少一項不成立即可。"
      },
      {
        "mistake": "由非P推出非Q並稱逆否。",
        "why": "這是否命題。",
        "correction": "逆否從非Q開始。"
      }
    ],
    "selfCheck": [
      "我有同時交換與否定嗎？",
      "每個否定是否包含完整邊界？",
      "我是否誤把逆命題當等價？",
      "反例是否真的滿足原條件？"
    ],
    "summary": [
      "逆否形式是非Q→非P。",
      "原命題與逆否命題等價。",
      "逆命題與否命題不自動等價於原命題。",
      "有效反例必須滿足條件而違反結論。"
    ],
    "connections": {
      "previous": "先備：proof-fill-reason",
      "next": [
        "下一主題開始研究由不同特殊線交成的三角形中心。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u20-s005-v001",
        "u20-s005-v002",
        "u20-s005-v003",
        "u20-s005-v004",
        "u20-s005-v005",
        "u20-s005-v006",
        "u20-s005-v007",
        "u20-s005-v008",
        "u20-s005-v009",
        "u20-s005-v010",
        "u20-s005-v011",
        "u20-s005-v012"
      ],
      "constructedResponseIds": [
        "u20-s005-cr001",
        "u20-s005-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "skillSpecificEvidence": "範圍限國中基本語句邏輯，未使用真值表或形式邏輯證明系統。",
      "reviewerDecision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "legacyContentUsed": false,
    "contentSha256": "b251aebdd6b69b3a4a52b6759085845759b6acde70a89346696bd68a0a26f638"
  },
  "mcQuestions": [
    {
      "questionId": "u20-s005-v001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "命題「若 P，則 Q」的逆否命題是哪一個？",
      "givenConditions": [],
      "target": "辨認逆否命題形式",
      "choices": [
        "若不是 Q，則不是 P",
        "若 Q，則 P",
        "若不是 P，則不是 Q",
        "若 P，則不是 Q"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "逆否命題要同時交換條件與結論並各自否定，因此為「若非 Q，則非 P」。",
        "result": "若不是 Q，則不是 P"
      },
      "explanation": "逆否命題要同時交換條件與結論並各自否定，因此為「若非 Q，則非 P」。",
      "steps": [
        "原命題條件是 P、結論是 Q",
        "交換成 Q、P",
        "分別否定成非 Q、非 P"
      ],
      "optionAnalysis": [
        {
          "choice": "若不是 Q，則不是 P",
          "truth": true,
          "reason": "依獨立推導可得到此結果；逆否命題要同時交換條件與結論並各自否定，因此為「若非 Q，則非 P」。"
        },
        {
          "choice": "若 Q，則 P",
          "truth": false,
          "reason": "這是逆命題。"
        },
        {
          "choice": "若不是 P，則不是 Q",
          "truth": false,
          "reason": "這是否命題。"
        },
        {
          "choice": "若 P，則不是 Q",
          "truth": false,
          "reason": "只否定結論，並非逆否。"
        }
      ],
      "misconceptionTarget": "只交換或只否定，沒有完成兩個動作。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「辨認逆否命題形式」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「若不是 Q，則不是 P」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：辨認逆否命題形式。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "9bc95ffbc96908089925d1014b8c628df0cf9406dfa1110de525bd7471c9678b"
    },
    {
      "questionId": "u20-s005-v002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "「若一個整數能被 2 整除，則它是偶數」的逆否命題是哪一個？",
      "givenConditions": [],
      "target": "把生活語句改寫成逆否命題",
      "choices": [
        "若整數能被2整除，則它是偶數",
        "若整數是偶數，則它不能被2整除",
        "若一個整數不是偶數，則它不能被 2 整除",
        "若整數不是偶數，則它能被2整除"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "結論「是偶數」的否定是「不是偶數」，條件「能被2整除」的否定是「不能被2整除」，交換後即得答案。",
        "result": "若一個整數不是偶數，則它不能被 2 整除"
      },
      "explanation": "結論「是偶數」的否定是「不是偶數」，條件「能被2整除」的否定是「不能被2整除」，交換後即得答案。",
      "steps": [
        "設定 P：能被2整除",
        "設定 Q：是偶數",
        "寫成非Q→非P"
      ],
      "optionAnalysis": [
        {
          "choice": "若整數能被2整除，則它是偶數",
          "truth": false,
          "reason": "這是原命題。"
        },
        {
          "choice": "若整數是偶數，則它不能被2整除",
          "truth": false,
          "reason": "交換後只否定一邊。"
        },
        {
          "choice": "若一個整數不是偶數，則它不能被 2 整除",
          "truth": true,
          "reason": "依獨立推導可得到此結果；結論「是偶數」的否定是「不是偶數」，條件「能被2整除」的否定是「不能被2整除」，交換後即得答案。"
        },
        {
          "choice": "若整數不是偶數，則它能被2整除",
          "truth": false,
          "reason": "否定方向錯誤。"
        }
      ],
      "misconceptionTarget": "否定『能整除』時仍寫成能整除。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「把生活語句改寫成逆否命題」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「若一個整數不是偶數，則它不能被 2 整除」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：把生活語句改寫成逆否命題。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "decedbb8d1800aeef0113d030990ef575b706afdd9d20baeb1ea0ebb960f21fb"
    },
    {
      "questionId": "u20-s005-v003",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "關於命題與逆否命題，下列何者正確？",
      "givenConditions": [],
      "target": "理解逆否等價性",
      "choices": [
        "原命題與逆命題真假必相同",
        "原命題與逆否命題真假相同",
        "原命題與否命題真假必相反",
        "四種命題永遠都真"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "在基本邏輯中，P→Q 與非Q→非P 等價，因此真假相同。",
        "result": "原命題與逆否命題真假相同"
      },
      "explanation": "在基本邏輯中，P→Q 與非Q→非P 等價，因此真假相同。",
      "steps": [
        "比較違反 P→Q 的唯一情況",
        "發現非Q且P同時也違反逆否",
        "判定兩者等價"
      ],
      "optionAnalysis": [
        {
          "choice": "原命題與逆命題真假必相同",
          "truth": false,
          "reason": "逆命題不一定與原命題等價。"
        },
        {
          "choice": "原命題與逆否命題真假相同",
          "truth": true,
          "reason": "依獨立推導可得到此結果；在基本邏輯中，P→Q 與非Q→非P 等價，因此真假相同。"
        },
        {
          "choice": "原命題與否命題真假必相反",
          "truth": false,
          "reason": "否命題與原命題沒有固定相反關係。"
        },
        {
          "choice": "四種命題永遠都真",
          "truth": false,
          "reason": "命題真假取決於內容。"
        }
      ],
      "misconceptionTarget": "誤以為名稱相近的四種命題真假都一致。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「理解逆否等價性」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「原命題與逆否命題真假相同」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：理解逆否等價性。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "3f8c2a658728d5d3174f82767d3cb0e80ae0a32acecc18e54937c3e70ac9e8c6"
    },
    {
      "questionId": "u20-s005-v004",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "命題「若兩角都是直角，則兩角相等」的逆否命題為何？",
      "givenConditions": [],
      "target": "正確否定複合語句",
      "choices": [
        "若兩角相等，則兩角都是直角",
        "若兩角不都是直角，則兩角不相等",
        "若兩角都是直角，則兩角不相等",
        "若兩角不相等，則兩角不都是直角"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "Q 是「兩角相等」，非Q 為「兩角不相等」；P 是「兩角都是直角」，非P 為「兩角不都是直角」。",
        "result": "若兩角不相等，則兩角不都是直角"
      },
      "explanation": "Q 是「兩角相等」，非Q 為「兩角不相等」；P 是「兩角都是直角」，非P 為「兩角不都是直角」。",
      "steps": [
        "辨認複合條件『都是直角』",
        "否定為『不都是直角』",
        "交換並得到非Q→非P"
      ],
      "optionAnalysis": [
        {
          "choice": "若兩角相等，則兩角都是直角",
          "truth": false,
          "reason": "這是逆命題且為假。"
        },
        {
          "choice": "若兩角不都是直角，則兩角不相等",
          "truth": false,
          "reason": "這是否命題，且可能兩角同為60°。"
        },
        {
          "choice": "若兩角都是直角，則兩角不相等",
          "truth": false,
          "reason": "直接否定原結論。"
        },
        {
          "choice": "若兩角不相等，則兩角不都是直角",
          "truth": true,
          "reason": "依獨立推導可得到此結果；Q 是「兩角相等」，非Q 為「兩角不相等」；P 是「兩角都是直角」，非P 為「兩角不都是直角」。"
        }
      ],
      "misconceptionTarget": "把『不都是』誤寫成『都不是』。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「正確否定複合語句」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「若兩角不相等，則兩角不都是直角」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：正確否定複合語句。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "671712a97bc0ae897b2cc09d1792b7896528d9edf30c97b7069770f7a0c3b99f"
    },
    {
      "questionId": "u20-s005-v005",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "使用逆否方式證明「若 P，則 Q」時，合理策略是什麼？",
      "givenConditions": [],
      "target": "掌握逆否證明方向",
      "choices": [
        "先假設結論成立",
        "只舉一張圖",
        "假設結論不成立，再推出已知條件不可能成立",
        "把逆命題當作已知"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "可改證等價的逆否命題：從非Q出發，推出非P。",
        "result": "假設結論不成立，再推出已知條件不可能成立"
      },
      "explanation": "可改證等價的逆否命題：從非Q出發，推出非P。",
      "steps": [
        "否定結論得到非Q",
        "以非Q作新起點",
        "推得原條件不成立非P"
      ],
      "optionAnalysis": [
        {
          "choice": "先假設結論成立",
          "truth": false,
          "reason": "這不會證明 P 能推出 Q。"
        },
        {
          "choice": "只舉一張圖",
          "truth": false,
          "reason": "單一例子不能證明一般命題。"
        },
        {
          "choice": "假設結論不成立，再推出已知條件不可能成立",
          "truth": true,
          "reason": "依獨立推導可得到此結果；可改證等價的逆否命題：從非Q出發，推出非P。"
        },
        {
          "choice": "把逆命題當作已知",
          "truth": false,
          "reason": "逆命題不一定成立。"
        }
      ],
      "misconceptionTarget": "把逆否證明誤當成先假設原結論。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「掌握逆否證明方向」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「假設結論不成立，再推出已知條件不可能成立」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：掌握逆否證明方向。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "a46eaae29199e326ca2aa0a87dac23ff71c1ab54b33e9382c667306eb49ae0d1"
    },
    {
      "questionId": "u20-s005-v006",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "命題「若整數 n 是偶數，則 n² 是偶數」的逆否命題是哪一個？",
      "givenConditions": [],
      "target": "區分內容真假與命題形式",
      "choices": [
        "若 n² 是偶數，則 n 是偶數",
        "若 n 不是偶數，則 n² 不是偶數",
        "若 n 是偶數，則 n² 不是偶數",
        "若 n² 不是偶數，則 n 不是偶數"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "原條件 P 是 n 偶，結論 Q 是 n² 偶；逆否為 n² 不偶 → n 不偶。",
        "result": "若 n² 不是偶數，則 n 不是偶數"
      },
      "explanation": "原條件 P 是 n 偶，結論 Q 是 n² 偶；逆否為 n² 不偶 → n 不偶。",
      "steps": [
        "標出 P、Q",
        "否定 Q：n² 不是偶數",
        "否定 P：n 不是偶數並交換"
      ],
      "optionAnalysis": [
        {
          "choice": "若 n² 是偶數，則 n 是偶數",
          "truth": false,
          "reason": "這是逆命題，雖在整數中也真，但不是所問形式。"
        },
        {
          "choice": "若 n 不是偶數，則 n² 不是偶數",
          "truth": false,
          "reason": "這是否命題。"
        },
        {
          "choice": "若 n 是偶數，則 n² 不是偶數",
          "truth": false,
          "reason": "與原命題矛盾。"
        },
        {
          "choice": "若 n² 不是偶數，則 n 不是偶數",
          "truth": true,
          "reason": "依獨立推導可得到此結果；原條件 P 是 n 偶，結論 Q 是 n² 偶；逆否為 n² 不偶 → n 不偶。"
        }
      ],
      "misconceptionTarget": "因逆命題剛好也真而誤選，忽略形式。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「區分內容真假與命題形式」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「若 n² 不是偶數，則 n 不是偶數」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：區分內容真假與命題形式。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "764f53f290871e099aafd788238fc75a3e5dfd09d119d047b435b713ad6b6d39"
    },
    {
      "questionId": "u20-s005-v007",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "「若三角形是等腰三角形，則有兩角相等」的逆否命題是哪一個？",
      "givenConditions": [],
      "target": "在幾何敘述中建立逆否",
      "choices": [
        "若一個三角形沒有兩角相等，則它不是等腰三角形",
        "若三角形有兩角相等，則它是等腰三角形",
        "若三角形不是等腰三角形，則沒有兩角相等",
        "若三角形沒有兩角相等，則它是等腰三角形"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "否定「有兩角相等」是「沒有任兩角相等」；否定「是等腰」是「不是等腰」，交換後得到答案。",
        "result": "若一個三角形沒有兩角相等，則它不是等腰三角形"
      },
      "explanation": "否定「有兩角相等」是「沒有任兩角相等」；否定「是等腰」是「不是等腰」，交換後得到答案。",
      "steps": [
        "P：等腰三角形",
        "Q：有兩角相等",
        "寫非Q→非P"
      ],
      "optionAnalysis": [
        {
          "choice": "若一個三角形沒有兩角相等，則它不是等腰三角形",
          "truth": true,
          "reason": "依獨立推導可得到此結果；否定「有兩角相等」是「沒有任兩角相等」；否定「是等腰」是「不是等腰」，交換後得到答案。"
        },
        {
          "choice": "若三角形有兩角相等，則它是等腰三角形",
          "truth": false,
          "reason": "這是逆命題。"
        },
        {
          "choice": "若三角形不是等腰三角形，則沒有兩角相等",
          "truth": false,
          "reason": "這是否命題。"
        },
        {
          "choice": "若三角形沒有兩角相等，則它是等腰三角形",
          "truth": false,
          "reason": "結論否定錯誤。"
        }
      ],
      "misconceptionTarget": "混淆逆命題與逆否命題。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在幾何敘述中建立逆否」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「若一個三角形沒有兩角相等，則它不是等腰三角形」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：在幾何敘述中建立逆否。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "05b58603aa7fd69303ca66dd5d78b5f90cb5116105b854daf0f4d064a7e9ed35"
    },
    {
      "questionId": "u20-s005-v008",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "要推翻命題「若 P，則 Q」，最有效的方式是什麼？",
      "givenConditions": [],
      "target": "利用反例檢驗條件命題",
      "choices": [
        "找到 P、Q 都成立的例子",
        "只要找到 P 成立而 Q 不成立的例子",
        "證明逆命題為真",
        "畫出最漂亮的圖"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "條件式命題只有在 P 真而 Q 假時為假，因此找一個符合 P 但不符合 Q 的反例即可。",
        "result": "只要找到 P 成立而 Q 不成立的例子"
      },
      "explanation": "條件式命題只有在 P 真而 Q 假時為假，因此找一個符合 P 但不符合 Q 的反例即可。",
      "steps": [
        "要求例子滿足原條件 P",
        "檢查結論 Q 失敗",
        "用此例證明命題不普遍成立"
      ],
      "optionAnalysis": [
        {
          "choice": "找到 P、Q 都成立的例子",
          "truth": false,
          "reason": "只能支持一個案例，不能推翻。"
        },
        {
          "choice": "只要找到 P 成立而 Q 不成立的例子",
          "truth": true,
          "reason": "依獨立推導可得到此結果；條件式命題只有在 P 真而 Q 假時為假，因此找一個符合 P 但不符合 Q 的反例即可。"
        },
        {
          "choice": "證明逆命題為真",
          "truth": false,
          "reason": "逆命題真假不能直接決定原命題。"
        },
        {
          "choice": "畫出最漂亮的圖",
          "truth": false,
          "reason": "美觀與真假無關。"
        }
      ],
      "misconceptionTarget": "以不符合原條件的例子當反例。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「利用反例檢驗條件命題」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「只要找到 P 成立而 Q 不成立的例子」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：利用反例檢驗條件命題。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "c316e534b5616dd5798668e5ec36e6a3f6f4c1d43f88e7c993f3b3a18581582b"
    },
    {
      "questionId": "u20-s005-v009",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某幾何命題直接證明困難，但其逆否形式容易由距離不等推出位置不成立。下列判斷何者正確？",
      "givenConditions": [],
      "target": "判斷何時可採逆否證明",
      "choices": [
        "逆命題可無條件取代原命題",
        "否命題一定比原命題容易",
        "只要名稱含『否』就代表原命題為假",
        "逆否命題可直接取代原命題作證明"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "原命題與逆否命題邏輯等價，因此證明逆否命題即可證明原命題。",
        "result": "逆否命題可直接取代原命題作證明"
      },
      "explanation": "原命題與逆否命題邏輯等價，因此證明逆否命題即可證明原命題。",
      "steps": [
        "辨認原命題與逆否等價",
        "確認新證明方向為非Q→非P",
        "接受其作為原命題證明"
      ],
      "optionAnalysis": [
        {
          "choice": "逆命題可無條件取代原命題",
          "truth": false,
          "reason": "逆命題不一定等價。"
        },
        {
          "choice": "否命題一定比原命題容易",
          "truth": false,
          "reason": "難易取決於內容。"
        },
        {
          "choice": "只要名稱含『否』就代表原命題為假",
          "truth": false,
          "reason": "『否』描述形式，不表示真假。"
        },
        {
          "choice": "逆否命題可直接取代原命題作證明",
          "truth": true,
          "reason": "依獨立推導可得到此結果；原命題與逆否命題邏輯等價，因此證明逆否命題即可證明原命題。"
        }
      ],
      "misconceptionTarget": "把逆、否、逆否三者混用。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「判斷何時可採逆否證明」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「逆否命題可直接取代原命題作證明」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：判斷何時可採逆否證明。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "fde3bd278de4f2b68ddda90fd72985f9c9d16a475901c70fa1ca116b467aece9"
    },
    {
      "questionId": "u20-s005-v010",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "感測器規則為：「若量測距離小於 5 公尺，則警報亮。」其逆否敘述是哪一個？",
      "givenConditions": [],
      "target": "在感測規則中正確否定不等式",
      "choices": [
        "若警報亮，則距離小於門檻值",
        "若警報未亮，則感測距離不小於門檻值",
        "若距離不小於門檻值，則警報未亮",
        "若警報未亮，則距離小於門檻值"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "P 為距離小於5，Q 為警報亮；非Q是警報未亮，非P是距離不小於5。",
        "result": "若警報未亮，則感測距離不小於門檻值"
      },
      "explanation": "P 為距離小於5，Q 為警報亮；非Q是警報未亮，非P是距離不小於5。",
      "steps": [
        "把小於5的否定寫成大於或等於5",
        "把警報亮否定為未亮",
        "交換成非Q→非P"
      ],
      "optionAnalysis": [
        {
          "choice": "若警報亮，則距離小於門檻值",
          "truth": false,
          "reason": "這是逆命題，警報也可能由其他原因觸發。"
        },
        {
          "choice": "若警報未亮，則感測距離不小於門檻值",
          "truth": true,
          "reason": "依獨立推導可得到此結果；P 為距離小於5，Q 為警報亮；非Q是警報未亮，非P是距離不小於5。"
        },
        {
          "choice": "若距離不小於門檻值，則警報未亮",
          "truth": false,
          "reason": "這是否命題。"
        },
        {
          "choice": "若警報未亮，則距離小於門檻值",
          "truth": false,
          "reason": "距離方向否定錯誤。"
        }
      ],
      "misconceptionTarget": "把『小於』的否定只寫成『大於』，漏掉等於。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "距離以公尺表示；『不小於5公尺』包含等於5公尺。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在感測規則中正確否定不等式」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「若警報未亮，則感測距離不小於門檻值」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在感測規則中正確否定不等式。",
      "literacyContextNecessity": "警報狀態與5公尺門檻共同構成條件式規則，情境中的邊界值是判讀核心。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "04ddd3e84ec40170424a239df4f8f2389a0b9c76f6123240a93810e573377a7b"
    },
    {
      "questionId": "u20-s005-v011",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "作圖系統規則：「若作品含有完整的直角標記與垂直說明，則通過格式檢查。」一件作品未通過。下列判斷何者最嚴謹？",
      "givenConditions": [],
      "target": "處理合取條件的逆否推論",
      "choices": [
        "若作品未通過，不能推出它一定缺少直角標記",
        "這是原規則的逆否命題",
        "未通過就必定完全沒有標記",
        "通過與否和標記無關"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "由未通過可由逆否推出「不具有完整的直角標記與垂直說明」，但這是否定整個合取條件，可能缺其中一項，不等於一定缺直角標記。",
        "result": "若作品未通過，不能推出它一定缺少直角標記"
      },
      "explanation": "由未通過可由逆否推出「不具有完整的直角標記與垂直說明」，但這是否定整個合取條件，可能缺其中一項，不等於一定缺直角標記。",
      "steps": [
        "Q 為通過格式檢查",
        "非Q 為未通過",
        "由逆否得到不是『兩項都完整』"
      ],
      "optionAnalysis": [
        {
          "choice": "若作品未通過，不能推出它一定缺少直角標記",
          "truth": true,
          "reason": "依獨立推導可得到此結果；由未通過可由逆否推出「不具有完整的直角標記與垂直說明」，但這是否定整個合取條件，可能缺其中一項，不等於一定缺直角標記。"
        },
        {
          "choice": "這是原規則的逆否命題",
          "truth": false,
          "reason": "若寫成『未通過→不完整』才是逆否；選項把未通過直接等同特定缺陷不精確。"
        },
        {
          "choice": "未通過就必定完全沒有標記",
          "truth": false,
          "reason": "可能只是缺垂直說明。"
        },
        {
          "choice": "通過與否和標記無關",
          "truth": false,
          "reason": "規則已明示關聯。"
        }
      ],
      "misconceptionTarget": "把『不是 A 且 B』誤讀為『不是 A 且不是 B』。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「處理合取條件的逆否推論」。",
        "scope": "只處理基本條件命題與『且』的否定語意，不使用高中符號邏輯。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「若作品未通過，不能推出它一定缺少直角標記」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：處理合取條件的逆否推論。",
      "literacyContextNecessity": "格式檢查含兩項要求，未通過時只能否定『兩項皆完整』，實務條件不可簡化。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "c8ce40c8967b6b8b87fdf465b4cc9364dc7380d646d7a9669c0dbde15826d74b"
    },
    {
      "questionId": "u20-s005-v012",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "交通告示寫：「若車速超過 50 公里／時，則系統記錄違規。」有人推論「若系統記錄違規，車速一定超過 50」。這個推論成立嗎？",
      "givenConditions": [],
      "target": "在規章情境區分逆命題與逆否",
      "choices": [
        "可以，因為逆命題永遠成立",
        "可以，因為未超速等同守法",
        "不能；這是逆命題，原規則未保證",
        "不能，因為任何規則都沒有逆否命題"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "該推論把原命題交換成逆命題；系統也可能因闖紅燈等其他規則記錄違規，所以不能由原規則單獨推出。",
        "result": "不能；這是逆命題，原規則未保證"
      },
      "explanation": "該推論把原命題交換成逆命題；系統也可能因闖紅燈等其他規則記錄違規，所以不能由原規則單獨推出。",
      "steps": [
        "辨認原命題 P→Q",
        "辨認推論為 Q→P",
        "指出逆命題不由原命題保證"
      ],
      "optionAnalysis": [
        {
          "choice": "可以，因為逆命題永遠成立",
          "truth": false,
          "reason": "逆命題未必真。"
        },
        {
          "choice": "可以，因為未超速等同守法",
          "truth": false,
          "reason": "違規種類可能不只超速。"
        },
        {
          "choice": "不能；這是逆命題，原規則未保證",
          "truth": true,
          "reason": "依獨立推導可得到此結果；該推論把原命題交換成逆命題；系統也可能因闖紅燈等其他規則記錄違規，所以不能由原規則單獨推出。"
        },
        {
          "choice": "不能，因為任何規則都沒有逆否命題",
          "truth": false,
          "reason": "每個條件命題都有逆否形式。"
        }
      ],
      "misconceptionTarget": "把結果發生當作唯一原因成立。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "速度門檻為50公里／時；本題不做數值運算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在規章情境區分逆命題與逆否」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「不能；這是逆命題，原規則未保證」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在規章情境區分逆命題與逆否。",
      "literacyContextNecessity": "違規系統可能有多種觸發原因，情境說明使逆命題不成立，不能刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "7cb87c397357de5d9f530eda2d80a3fbaf7407fa85f35c00cc6e74d2275be484"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u20-s005-cr001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "寫出命題「若一個三角形是等邊三角形，則它有三個相等的角」的逆否命題，並逐步說明如何交換與否定。",
      "requiredWork": [
        "標示條件與結論。",
        "交換順序。",
        "正確否定『三個角相等』與『等邊』。"
      ],
      "standardSolution": [
        "P：三角形是等邊三角形；Q：三角形有三個相等的角。",
        "逆否命題是非Q→非P：若一個三角形的三個角不全相等，則它不是等邊三角形。"
      ],
      "alternativeMethods": [
        "也可寫『若三角形至少有兩個角不相等，則它不是等邊三角形』。"
      ],
      "reasoningSteps": [
        "P：三角形是等邊三角形；Q：三角形有三個相等的角。",
        "逆否命題是非Q→非P：若一個三角形的三個角不全相等，則它不是等邊三角形。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "逆否命題形式與兩個否定皆正確，並說明交換加否定。"
        },
        {
          "score": 2,
          "criteria": "答案語意正確，但未標示P、Q或否定用語略不精確。"
        },
        {
          "score": 1,
          "criteria": "只寫出逆命題或否命題，顯示知道要改寫但形式錯。"
        },
        {
          "score": 0,
          "criteria": "重抄原命題或寫出與原命題無關敘述。"
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
        "把『不全相等』寫成『三角都不相等』而縮小否定範圍。",
        "只交換不否定。",
        "只否定結論。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "P：三角形是等邊三角形；Q：三角形有三個相等的角。；逆否命題是非Q→非P：若一個三角形的三個角不全相等，則它不是等邊三角形。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "4eaa5632d6a17ddb6ceab5ab5d2bd97f6336729f7aa23c338a59b1b60a7604be"
    },
    {
      "questionId": "u20-s005-cr002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-proof",
      "skillId": "proof-contrapositive-basic",
      "skillSlot": "s005",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "規則為：「若距離小於 5 公尺，則警報亮。」請寫出逆否命題，並分析距離恰為 5 公尺時，原規則與逆否命題各能否推出警報狀態。",
      "requiredWork": [
        "逆否寫成警報未亮→距離不小於5。",
        "處理邊界值等於5。",
        "不得把逆命題當規則。"
      ],
      "standardSolution": [
        "逆否命題：若警報未亮，則距離不小於5公尺。",
        "當距離恰為5公尺時，原命題的條件『小於5』不成立，所以原規則不能單獨推出警報亮或不亮。逆否命題也不能由『距離不小於5』反推出警報未亮，因那是把逆否再反向使用。"
      ],
      "alternativeMethods": [
        "可用真值語意說明：條件不成立時，規則沒有指定結果；系統可能另有其他觸發條件。"
      ],
      "reasoningSteps": [
        "逆否命題：若警報未亮，則距離不小於5公尺。",
        "當距離恰為5公尺時，原命題的條件『小於5』不成立，所以原規則不能單獨推出警報亮或不亮。逆否命題也不能由『距離不小於5』反推出警報未亮，因那是把逆否再反向使用。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "逆否正確，包含等於5的邊界，且明確說明距離=5時不能反推警報狀態。"
        },
        {
          "score": 2,
          "criteria": "逆否正確，但邊界分析只說『不會亮』而未意識到規則資訊不足。"
        },
        {
          "score": 1,
          "criteria": "知道小於的否定包含等於，但逆否順序錯。"
        },
        {
          "score": 0,
          "criteria": "把逆命題當成等價規則，或漏掉等於且結論錯誤。"
        }
      ],
      "partialCreditRules": [
        "評分依題目專屬rubric判定；方法正確但敘述略簡可保留方法分。",
        "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。"
      ],
      "followThroughPolicy": "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。",
      "unitRules": "距離以公尺表示；5公尺是必須明確處理的邊界值。",
      "notationRules": "可用文字表達，不要求P、Q符號；不等式需正確包含等號。",
      "answerOnlyPolicy": "只寫最終結論且沒有題目要求的理由，最高給1分；若結論也錯則0分。",
      "commonErrors": [
        "把不小於寫成大於。",
        "由距離≥5直接推警報未亮。",
        "把警報亮→距離<5當逆否。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "逆否命題：若警報未亮，則距離不小於5公尺。；當距離恰為5公尺時，原命題的條件『小於5』不成立，所以原規則不能單獨推出警報亮或不亮。逆否命題也不能由『距離不小於5』反推出警報未亮，因那是把逆否再反向使用。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "7683f5c907396ee0e3c3f63a008aa19c5c090c19ae691972c8a884518ae175aa"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u20-s005-v001",
      "contentSha256": "9bc95ffbc96908089925d1014b8c628df0cf9406dfa1110de525bd7471c9678b",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "逆否命題要同時交換條件與結論並各自否定，因此為「若非 Q，則非 P」。",
      "derivedAnswer": "若不是 Q，則不是 P",
      "storedAnswer": "若不是 Q，則不是 P",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「若不是 Q，則不是 P」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「只交換或只否定，沒有完成兩個動作。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：辨認逆否命題形式。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「命題「若 P，則 Q」的逆否命題是哪一個？」要求辨認逆否命題形式。獨立推導為：逆否命題要同時交換條件與結論並各自否定，因此為「若非 Q，則非 P」。 四選項依序判定：若不是 Q，則不是 P=真，依獨立推導可得到此結果；逆否命題要同時交換條件與結論並各自否定，因此為「若非 Q，則非 P」。；若 Q，則 P=假，這是逆命題。；若不是 P，則不是 Q=假，這是否命題。；若 P，則不是 Q=假，只否定結論，並非逆否。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "c1b0c4097c37243e47ed255819a6315c865709a408f423cae80b6fd39269cfa6"
    },
    {
      "questionId": "u20-s005-v002",
      "contentSha256": "decedbb8d1800aeef0113d030990ef575b706afdd9d20baeb1ea0ebb960f21fb",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "結論「是偶數」的否定是「不是偶數」，條件「能被2整除」的否定是「不能被2整除」，交換後即得答案。",
      "derivedAnswer": "若一個整數不是偶數，則它不能被 2 整除",
      "storedAnswer": "若一個整數不是偶數，則它不能被 2 整除",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「若一個整數不是偶數，則它不能被 2 整除」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「否定『能整除』時仍寫成能整除。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：把生活語句改寫成逆否命題。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「「若一個整數能被 2 整除，則它是偶數」的逆否命題是哪一個？」要求把生活語句改寫成逆否命題。獨立推導為：結論「是偶數」的否定是「不是偶數」，條件「能被2整除」的否定是「不能被2整除」，交換後即得答案。 四選項依序判定：若整數能被2整除，則它是偶數=假，這是原命題。；若整數是偶數，則它不能被2整除=假，交換後只否定一邊。；若一個整數不是偶數，則它不能被 2 整除=真，依獨立推導可得到此結果；結論「是偶數」的否定是「不是偶數」，條件「能被2整除」的否定是「不能被2整除」，交換後即得答案。；若整數不是偶數，則它能被2整除=假，否定方向錯誤。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "c03a309d0a8f294f5d9d3451ffe4d7d5729da337c013ed593b51095d1cbedfc5"
    },
    {
      "questionId": "u20-s005-v003",
      "contentSha256": "3f8c2a658728d5d3174f82767d3cb0e80ae0a32acecc18e54937c3e70ac9e8c6",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "在基本邏輯中，P→Q 與非Q→非P 等價，因此真假相同。",
      "derivedAnswer": "原命題與逆否命題真假相同",
      "storedAnswer": "原命題與逆否命題真假相同",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「原命題與逆否命題真假相同」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「誤以為名稱相近的四種命題真假都一致。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：理解逆否等價性。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「關於命題與逆否命題，下列何者正確？」要求理解逆否等價性。獨立推導為：在基本邏輯中，P→Q 與非Q→非P 等價，因此真假相同。 四選項依序判定：原命題與逆命題真假必相同=假，逆命題不一定與原命題等價。；原命題與逆否命題真假相同=真，依獨立推導可得到此結果；在基本邏輯中，P→Q 與非Q→非P 等價，因此真假相同。；原命題與否命題真假必相反=假，否命題與原命題沒有固定相反關係。；四種命題永遠都真=假，命題真假取決於內容。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "95235ec1b8ded79a839f0b831901ebf78fd940a57a858790a0118475d31e1ec1"
    },
    {
      "questionId": "u20-s005-v004",
      "contentSha256": "671712a97bc0ae897b2cc09d1792b7896528d9edf30c97b7069770f7a0c3b99f",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "Q 是「兩角相等」，非Q 為「兩角不相等」；P 是「兩角都是直角」，非P 為「兩角不都是直角」。",
      "derivedAnswer": "若兩角不相等，則兩角不都是直角",
      "storedAnswer": "若兩角不相等，則兩角不都是直角",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「若兩角不相等，則兩角不都是直角」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把『不都是』誤寫成『都不是』。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：正確否定複合語句。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「命題「若兩角都是直角，則兩角相等」的逆否命題為何？」要求正確否定複合語句。獨立推導為：Q 是「兩角相等」，非Q 為「兩角不相等」；P 是「兩角都是直角」，非P 為「兩角不都是直角」。 四選項依序判定：若兩角相等，則兩角都是直角=假，這是逆命題且為假。；若兩角不都是直角，則兩角不相等=假，這是否命題，且可能兩角同為60°。；若兩角都是直角，則兩角不相等=假，直接否定原結論。；若兩角不相等，則兩角不都是直角=真，依獨立推導可得到此結果；Q 是「兩角相等」，非Q 為「兩角不相等」；P 是「兩角都是直角」，非P 為「兩角不都是直角」。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "608ef955a3d7915bdd0ce11cb56aa0c5a8959cb4fe8104df30ecfce98bcd11d1"
    },
    {
      "questionId": "u20-s005-v005",
      "contentSha256": "a46eaae29199e326ca2aa0a87dac23ff71c1ab54b33e9382c667306eb49ae0d1",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "可改證等價的逆否命題：從非Q出發，推出非P。",
      "derivedAnswer": "假設結論不成立，再推出已知條件不可能成立",
      "storedAnswer": "假設結論不成立，再推出已知條件不可能成立",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「假設結論不成立，再推出已知條件不可能成立」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把逆否證明誤當成先假設原結論。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：掌握逆否證明方向。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「使用逆否方式證明「若 P，則 Q」時，合理策略是什麼？」要求掌握逆否證明方向。獨立推導為：可改證等價的逆否命題：從非Q出發，推出非P。 四選項依序判定：先假設結論成立=假，這不會證明 P 能推出 Q。；只舉一張圖=假，單一例子不能證明一般命題。；假設結論不成立，再推出已知條件不可能成立=真，依獨立推導可得到此結果；可改證等價的逆否命題：從非Q出發，推出非P。；把逆命題當作已知=假，逆命題不一定成立。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "f54137ba9ab55ff1be449584b10d5eae7daf1dc9b2a2bb326e9cd8f0c2fec728"
    },
    {
      "questionId": "u20-s005-v006",
      "contentSha256": "764f53f290871e099aafd788238fc75a3e5dfd09d119d047b435b713ad6b6d39",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "原條件 P 是 n 偶，結論 Q 是 n² 偶；逆否為 n² 不偶 → n 不偶。",
      "derivedAnswer": "若 n² 不是偶數，則 n 不是偶數",
      "storedAnswer": "若 n² 不是偶數，則 n 不是偶數",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「若 n² 不是偶數，則 n 不是偶數」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「因逆命題剛好也真而誤選，忽略形式。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：區分內容真假與命題形式。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「命題「若整數 n 是偶數，則 n² 是偶數」的逆否命題是哪一個？」要求區分內容真假與命題形式。獨立推導為：原條件 P 是 n 偶，結論 Q 是 n² 偶；逆否為 n² 不偶 → n 不偶。 四選項依序判定：若 n² 是偶數，則 n 是偶數=假，這是逆命題，雖在整數中也真，但不是所問形式。；若 n 不是偶數，則 n² 不是偶數=假，這是否命題。；若 n 是偶數，則 n² 不是偶數=假，與原命題矛盾。；若 n² 不是偶數，則 n 不是偶數=真，依獨立推導可得到此結果；原條件 P 是 n 偶，結論 Q 是 n² 偶；逆否為 n² 不偶 → n 不偶。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "7e57eea80fcdd47e1b1b1b46ed6c34c8abe4e34e097a0ed15d36f3af4217af7f"
    },
    {
      "questionId": "u20-s005-v007",
      "contentSha256": "05b58603aa7fd69303ca66dd5d78b5f90cb5116105b854daf0f4d064a7e9ed35",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "否定「有兩角相等」是「沒有任兩角相等」；否定「是等腰」是「不是等腰」，交換後得到答案。",
      "derivedAnswer": "若一個三角形沒有兩角相等，則它不是等腰三角形",
      "storedAnswer": "若一個三角形沒有兩角相等，則它不是等腰三角形",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「若一個三角形沒有兩角相等，則它不是等腰三角形」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「混淆逆命題與逆否命題。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：在幾何敘述中建立逆否。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「「若三角形是等腰三角形，則有兩角相等」的逆否命題是哪一個？」要求在幾何敘述中建立逆否。獨立推導為：否定「有兩角相等」是「沒有任兩角相等」；否定「是等腰」是「不是等腰」，交換後得到答案。 四選項依序判定：若一個三角形沒有兩角相等，則它不是等腰三角形=真，依獨立推導可得到此結果；否定「有兩角相等」是「沒有任兩角相等」；否定「是等腰」是「不是等腰」，交換後得到答案。；若三角形有兩角相等，則它是等腰三角形=假，這是逆命題。；若三角形不是等腰三角形，則沒有兩角相等=假，這是否命題。；若三角形沒有兩角相等，則它是等腰三角形=假，結論否定錯誤。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "eb0d917a47136cdaa77684547a240eef76b28a245b350a9dddb61d6c07469a4e"
    },
    {
      "questionId": "u20-s005-v008",
      "contentSha256": "c316e534b5616dd5798668e5ec36e6a3f6f4c1d43f88e7c993f3b3a18581582b",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "條件式命題只有在 P 真而 Q 假時為假，因此找一個符合 P 但不符合 Q 的反例即可。",
      "derivedAnswer": "只要找到 P 成立而 Q 不成立的例子",
      "storedAnswer": "只要找到 P 成立而 Q 不成立的例子",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「只要找到 P 成立而 Q 不成立的例子」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「以不符合原條件的例子當反例。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：利用反例檢驗條件命題。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「要推翻命題「若 P，則 Q」，最有效的方式是什麼？」要求利用反例檢驗條件命題。獨立推導為：條件式命題只有在 P 真而 Q 假時為假，因此找一個符合 P 但不符合 Q 的反例即可。 四選項依序判定：找到 P、Q 都成立的例子=假，只能支持一個案例，不能推翻。；只要找到 P 成立而 Q 不成立的例子=真，依獨立推導可得到此結果；條件式命題只有在 P 真而 Q 假時為假，因此找一個符合 P 但不符合 Q 的反例即可。；證明逆命題為真=假，逆命題真假不能直接決定原命題。；畫出最漂亮的圖=假，美觀與真假無關。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "a6130b11ad6f36a69a545f09b34fcec24e1ca797988545b27efe33f51242c340"
    },
    {
      "questionId": "u20-s005-v009",
      "contentSha256": "fde3bd278de4f2b68ddda90fd72985f9c9d16a475901c70fa1ca116b467aece9",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "原命題與逆否命題邏輯等價，因此證明逆否命題即可證明原命題。",
      "derivedAnswer": "逆否命題可直接取代原命題作證明",
      "storedAnswer": "逆否命題可直接取代原命題作證明",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「逆否命題可直接取代原命題作證明」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把逆、否、逆否三者混用。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：判斷何時可採逆否證明。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某幾何命題直接證明困難，但其逆否形式容易由距離不等推出位置不成立。下列判斷何者正確？」要求判斷何時可採逆否證明。獨立推導為：原命題與逆否命題邏輯等價，因此證明逆否命題即可證明原命題。 四選項依序判定：逆命題可無條件取代原命題=假，逆命題不一定等價。；否命題一定比原命題容易=假，難易取決於內容。；只要名稱含『否』就代表原命題為假=假，『否』描述形式，不表示真假。；逆否命題可直接取代原命題作證明=真，依獨立推導可得到此結果；原命題與逆否命題邏輯等價，因此證明逆否命題即可證明原命題。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "0d08a5c7419f3f4f03303096e80638d733e340424a42ecde0078c1f7016f05e0"
    },
    {
      "questionId": "u20-s005-v010",
      "contentSha256": "04ddd3e84ec40170424a239df4f8f2389a0b9c76f6123240a93810e573377a7b",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "P 為距離小於5，Q 為警報亮；非Q是警報未亮，非P是距離不小於5。",
      "derivedAnswer": "若警報未亮，則感測距離不小於門檻值",
      "storedAnswer": "若警報未亮，則感測距離不小於門檻值",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「若警報未亮，則感測距離不小於門檻值」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "距離以公尺表示；『不小於5公尺』包含等於5公尺。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把『小於』的否定只寫成『大於』，漏掉等於。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在感測規則中正確否定不等式。",
      "literacyContextNecessity": "警報狀態與5公尺門檻共同構成條件式規則，情境中的邊界值是判讀核心。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「感測器規則為：「若量測距離小於 5 公尺，則警報亮。」其逆否敘述是哪一個？」要求在感測規則中正確否定不等式。獨立推導為：P 為距離小於5，Q 為警報亮；非Q是警報未亮，非P是距離不小於5。 四選項依序判定：若警報亮，則距離小於門檻值=假，這是逆命題，警報也可能由其他原因觸發。；若警報未亮，則感測距離不小於門檻值=真，依獨立推導可得到此結果；P 為距離小於5，Q 為警報亮；非Q是警報未亮，非P是距離不小於5。；若距離不小於門檻值，則警報未亮=假，這是否命題。；若警報未亮，則距離小於門檻值=假，距離方向否定錯誤。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "9504d0e3f1dfd1cbd1d6b781e56215eabb104bbfc6578bde7c3b8183518f8b10"
    },
    {
      "questionId": "u20-s005-v011",
      "contentSha256": "c8ce40c8967b6b8b87fdf465b4cc9364dc7380d646d7a9669c0dbde15826d74b",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "由未通過可由逆否推出「不具有完整的直角標記與垂直說明」，但這是否定整個合取條件，可能缺其中一項，不等於一定缺直角標記。",
      "derivedAnswer": "若作品未通過，不能推出它一定缺少直角標記",
      "storedAnswer": "若作品未通過，不能推出它一定缺少直角標記",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「若作品未通過，不能推出它一定缺少直角標記」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "只處理基本條件命題與『且』的否定語意，不使用高中符號邏輯。",
        "alternateReading": "常見誤讀為「把『不是 A 且 B』誤讀為『不是 A 且不是 B』。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：處理合取條件的逆否推論。",
      "literacyContextNecessity": "格式檢查含兩項要求，未通過時只能否定『兩項皆完整』，實務條件不可簡化。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「作圖系統規則：「若作品含有完整的直角標記與垂直說明，則通過格式檢查。」一件作品未通過。下列判斷何者最嚴謹？」要求處理合取條件的逆否推論。獨立推導為：由未通過可由逆否推出「不具有完整的直角標記與垂直說明」，但這是否定整個合取條件，可能缺其中一項，不等於一定缺直角標記。 四選項依序判定：若作品未通過，不能推出它一定缺少直角標記=真，依獨立推導可得到此結果；由未通過可由逆否推出「不具有完整的直角標記與垂直說明」，但這是否定整個合取條件，可能缺其中一項，不等於一定缺直角標記。；這是原規則的逆否命題=假，若寫成『未通過→不完整』才是逆否；選項把未通過直接等同特定缺陷不精確。；未通過就必定完全沒有標記=假，可能只是缺垂直說明。；通過與否和標記無關=假，規則已明示關聯。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "8fa1ad2da7f65f899051d3e7f98c43a2aca729013df9b0a6e010958c1c8f8325"
    },
    {
      "questionId": "u20-s005-v012",
      "contentSha256": "7cb87c397357de5d9f530eda2d80a3fbaf7407fa85f35c00cc6e74d2275be484",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "該推論把原命題交換成逆命題；系統也可能因闖紅燈等其他規則記錄違規，所以不能由原規則單獨推出。",
      "derivedAnswer": "不能；這是逆命題，原規則未保證",
      "storedAnswer": "不能；這是逆命題，原規則未保證",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「不能；這是逆命題，原規則未保證」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "速度門檻為50公里／時；本題不做數值運算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把結果發生當作唯一原因成立。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：在規章情境區分逆命題與逆否。",
      "literacyContextNecessity": "違規系統可能有多種觸發原因，情境說明使逆命題不成立，不能刪除。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「交通告示寫：「若車速超過 50 公里／時，則系統記錄違規。」有人推論「若系統記錄違規，車速一定超過 50」。這個推論成立嗎？」要求在規章情境區分逆命題與逆否。獨立推導為：該推論把原命題交換成逆命題；系統也可能因闖紅燈等其他規則記錄違規，所以不能由原規則單獨推出。 四選項依序判定：可以，因為逆命題永遠成立=假，逆命題未必真。；可以，因為未超速等同守法=假，違規種類可能不只超速。；不能；這是逆命題，原規則未保證=真，依獨立推導可得到此結果；該推論把原命題交換成逆命題；系統也可能因闖紅燈等其他規則記錄違規，所以不能由原規則單獨推出。；不能，因為任何規則都沒有逆否命題=假，每個條件命題都有逆否形式。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "59a4008d7969acb7b54f9d6a247961397afe55da341145cfbac394cb8ec3d6b5"
    }
  ],
  "drawingSpecs": []
};
export default skillBundle;
