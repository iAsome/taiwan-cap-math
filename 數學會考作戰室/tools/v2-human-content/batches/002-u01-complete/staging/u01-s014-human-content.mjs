// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s014-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-exponents",
  "skillId": "integer-scientific-notation",
  "title": "科學記號：用 1≤|a|<10 與 10 的冪表示大小",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能把大數與小數寫成科學記號。",
    "能把科學記號還原成一般記法。",
    "能判斷係數是否符合標準形式。",
    "能比較兩個科學記號的大小。",
    "能完成基本科學記號乘除與單位解讀。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-exponent-laws",
      "requiredLevel": "能使用同底數指數律處理 10 的冪，並理解正負指數代表的小數點位移。"
    }
  ],
  "glossary": [
    {
      "term": "科學記號",
      "definition": "把非零數寫成 a×10ⁿ，其中 1≤|a|<10、n 為整數。"
    },
    {
      "term": "係數",
      "definition": "科學記號中的 a，絕對值至少 1 且小於 10。"
    },
    {
      "term": "數量級",
      "definition": "由 10 的指數反映的大致大小。"
    },
    {
      "term": "正指數",
      "definition": "小數點向右移，通常表示大於或等於 10 的量。"
    },
    {
      "term": "負指數",
      "definition": "10⁻ⁿ=1/10ⁿ，小數點向左移，表示小於 1 的正量。"
    }
  ],
  "notation": [
    {
      "symbol": "a×10ⁿ",
      "meaning": "科學記號標準形式，1≤|a|<10。"
    },
    {
      "symbol": "10⁻ⁿ",
      "meaning": "1/10ⁿ，例如 10⁻³=0.001。"
    },
    {
      "symbol": "≈",
      "meaning": "近似等於；若資料經四捨五入不可寫精確等號。"
    }
  ],
  "conceptNarrative": [
    "把一般數寫成科學記號時，先把小數點移到第一個非零數字後，使係數絕對值落在 1 到 10 之間。",
    "原小數點向左移 n 位，需乘 10ⁿ；向右移 n 位，需乘 10⁻ⁿ，才能保持數值不變。",
    "比較正的科學記號時，先比 10 的指數；指數相同再比係數。負數則要保留負號並用數線思考。",
    "乘除時先處理係數，再用指數律處理 10 的冪，最後把係數調整回標準範圍。"
  ],
  "formalDefinitions": [
    {
      "name": "科學記號標準形",
      "statement": "非零數寫成 a×10ⁿ，且 1≤|a|<10、n 為整數。"
    },
    {
      "name": "負指數位值",
      "statement": "10⁻ⁿ=1/10ⁿ。"
    }
  ],
  "formulas": [
    {
      "formula": "a×10ⁿ，1≤|a|<10",
      "conditions": [
        "a≠0",
        "n 為整數"
      ],
      "meaning": "標準科學記號。"
    },
    {
      "formula": "(a×10ᵐ)(b×10ⁿ)=ab×10ᵐ⁺ⁿ",
      "conditions": [
        "最後須正規化係數"
      ],
      "meaning": "科學記號乘法。"
    },
    {
      "formula": "(a×10ᵐ)÷(b×10ⁿ)=(a÷b)×10ᵐ⁻ⁿ",
      "conditions": [
        "b≠0",
        "最後須正規化係數"
      ],
      "meaning": "科學記號除法。"
    }
  ],
  "nonApplicableCases": [
    "係數 12.4 不符合標準形，應改成 1.24×10 的相應次方。",
    "0 不能用唯一的標準科學記號表示；本課以非零數為主。",
    "近似測量值的有效位數不可任意增加。",
    "不同單位的科學記號仍須先換單位再運算。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "把小數點移到第一個非零數字後。",
      "check": "係數絕對值是否在 1 到 10 之間？"
    },
    {
      "step": 2,
      "instruction": "數小數點移動位數。",
      "check": "總共移了幾位？"
    },
    {
      "step": 3,
      "instruction": "依移動方向決定指數正負。",
      "check": "原數很大用正指數，小於 1 用負指數。"
    },
    {
      "step": 4,
      "instruction": "還原一次檢查。",
      "check": "乘回 10ⁿ 是否得到原數？"
    },
    {
      "step": 5,
      "instruction": "運算後重新正規化。",
      "check": "係數是否仍符合標準形？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "把 6,420,000 寫成科學記號。",
      "solutionSteps": [
        "小數點移到 6.42。",
        "原小數點向左移 6 位。",
        "乘 10⁶。"
      ],
      "answer": "6.42×10⁶。"
    },
    {
      "exampleId": "L2",
      "prompt": "把 0.00058 寫成科學記號。",
      "solutionSteps": [
        "第一個非零數字後為 5.8。",
        "原小數點向右移 4 位。",
        "使用 10⁻⁴。"
      ],
      "answer": "5.8×10⁻⁴。"
    },
    {
      "exampleId": "L3",
      "prompt": "還原 3.07×10⁵。",
      "solutionSteps": [
        "10⁵ 使小數點向右移 5 位。",
        "3.07→307000。",
        "保留原有效數字。"
      ],
      "answer": "307000。"
    },
    {
      "exampleId": "L4",
      "prompt": "計算 (2×10³)(4×10⁵)。",
      "solutionSteps": [
        "係數 2×4=8。",
        "10³×10⁵=10⁸。",
        "係數 8 已符合標準。"
      ],
      "answer": "8×10⁸。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "寫成 64.2×10⁵。",
      "why": "係數未落在標準範圍。",
      "correction": "改成 6.42×10⁶。"
    },
    {
      "mistake": "小數 0.00058 使用正指數。",
      "why": "移動方向與指數符號混淆。",
      "correction": "小於 1 的正數使用負指數。"
    },
    {
      "mistake": "少數或多數一位。",
      "why": "沒有從原小數點逐格計數。",
      "correction": "畫出移動軌跡再數位數。"
    },
    {
      "mistake": "比較時只看係數。",
      "why": "忽略數量級。",
      "correction": "先比較 10 的指數。"
    },
    {
      "mistake": "乘法只乘係數，漏掉 10 的冪。",
      "why": "分開處理後忘記合併。",
      "correction": "係數與冪都要運算。"
    },
    {
      "mistake": "運算後係數 18 未正規化。",
      "why": "停在中間結果。",
      "correction": "18×10⁴=1.8×10⁵。"
    }
  ],
  "selfCheck": [
    "係數絕對值在 1 到 10 間嗎？",
    "小數點移動幾位？",
    "指數正負合理嗎？",
    "還原後等於原數嗎？",
    "運算後有重新正規化嗎？"
  ],
  "summary": [
    "科學記號為 a×10ⁿ，1≤|a|<10。",
    "大數通常用正指數，小於 1 的非零數用負指數。",
    "比較先看指數，再看係數。",
    "乘除後須把係數調回標準形。"
  ],
  "connections": {
    "previous": "先備技能是指數的意義與指數律。",
    "next": [
      "綜合素養題會用科學記號讀取真實資料。",
      "比例與單位換算會結合科學記號。",
      "後續統計資料可用數量級比較。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s014-v001",
      "u01-s014-v002",
      "u01-s014-v003",
      "u01-s014-v004",
      "u01-s014-v005",
      "u01-s014-v006",
      "u01-s014-v007",
      "u01-s014-v008",
      "u01-s014-v009",
      "u01-s014-v010",
      "u01-s014-v011",
      "u01-s014-v012"
    ],
    "constructedResponseIds": [
      "u01-s014-cr001",
      "u01-s014-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一還原一般記法核對小數點位移，確認係數落在標準範圍，乘除指數與正負指數方向均正確。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "f43450ea6c148f35c9efdb15bb3f89d6332b5b268f8ca297584dc81c1ff6ad2e"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s014-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5,200,000 的標準科學記號為何？",
    "choices": [
      "5.2×10⁶",
      "52×10⁵",
      "5.2×10⁵",
      "0.52×10⁷"
    ],
    "answerIndex": 0,
    "explanation": "小數點移到5.2，向左移6位，所以是5.2×10⁶。標準係數需介於1與10。",
    "steps": [
      "得到係數5.2。",
      "數移動6位。",
      "使用10⁶。"
    ],
    "optionAnalysis": [
      {
        "choice": "5.2×10⁶",
        "truth": true,
        "reason": "正確標準形。"
      },
      {
        "choice": "52×10⁵",
        "truth": false,
        "reason": "數值相同但係數52不合標準。"
      },
      {
        "choice": "5.2×10⁵",
        "truth": false,
        "reason": "少一個10倍。"
      },
      {
        "choice": "0.52×10⁷",
        "truth": false,
        "reason": "數值相同但係數0.52不合標準。"
      }
    ],
    "commonMistake": "只要求數值相同，忽略係數標準範圍。",
    "concept": "標準科學記號係數絕對值至少1且小於10。",
    "tags": [
      "數與量",
      "科學記號",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-laws"
    ],
    "authoringIntent": "大數轉標準科學記號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bd7664cd4a0cf548e32c0eb0d8eddaa91b397d029e2a726b20ba2fc12369ac53"
  },
  {
    "questionId": "u01-s014-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "0.00073 的標準科學記號為何？",
    "choices": [
      "7.3×10⁴",
      "7.3×10⁻⁴",
      "0.73×10⁻³",
      "73×10⁻⁵"
    ],
    "answerIndex": 1,
    "explanation": "把小數點移到7.3，向右移4位，因此乘10⁻⁴。",
    "steps": [
      "係數7.3。",
      "小數點向右4位。",
      "指數-4。"
    ],
    "optionAnalysis": [
      {
        "choice": "7.3×10⁴",
        "truth": false,
        "reason": "指數符號錯。"
      },
      {
        "choice": "7.3×10⁻⁴",
        "truth": true,
        "reason": "0.00073=7.3×10^-4。"
      },
      {
        "choice": "0.73×10⁻³",
        "truth": false,
        "reason": "數值相同但係數不標準。"
      },
      {
        "choice": "73×10⁻⁵",
        "truth": false,
        "reason": "數值相同但係數不標準。"
      }
    ],
    "commonMistake": "小於1的數仍使用正指數。",
    "concept": "小於1的非零正數用負指數。",
    "tags": [
      "數與量",
      "科學記號",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-laws"
    ],
    "authoringIntent": "小數轉負指數科學記號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "18557895f4eac3a9454ff57d950e979dbf0c21b2816cea3b2d5f83fbb5bf13a0"
  },
  {
    "questionId": "u01-s014-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個已是標準科學記號？",
    "choices": [
      "12.5×10³",
      "0.8×10⁶",
      "4.08×10⁻³",
      "45×10⁻²"
    ],
    "answerIndex": 2,
    "explanation": "標準係數需1≤|a|<10。只有4.08符合。",
    "steps": [
      "檢查每個係數。",
      "12.5與45太大，0.8太小。",
      "4.08合格。"
    ],
    "optionAnalysis": [
      {
        "choice": "12.5×10³",
        "truth": false,
        "reason": "係數≥10。"
      },
      {
        "choice": "0.8×10⁶",
        "truth": false,
        "reason": "係數<1。"
      },
      {
        "choice": "4.08×10⁻³",
        "truth": true,
        "reason": "只有4.08介於1與10。"
      },
      {
        "choice": "45×10⁻²",
        "truth": false,
        "reason": "係數≥10。"
      }
    ],
    "commonMistake": "只要含×10ⁿ就認為是標準科學記號。",
    "concept": "係數範圍是標準形必要條件。",
    "tags": [
      "數與量",
      "科學記號",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-laws"
    ],
    "authoringIntent": "辨認標準形式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d3eeb37b32498aa04182615b8056d7705dce59281452ede7ef5b3c84c12dafc3"
  },
  {
    "questionId": "u01-s014-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "6.02×10⁵ 還原成一般記法為何？",
    "choices": [
      "0.000602",
      "60,200",
      "6,020,000",
      "602,000"
    ],
    "answerIndex": 3,
    "explanation": "10⁵使小數點向右移5位：6.02→602000。",
    "steps": [
      "正指數5。",
      "小數點右移5位。",
      "得到602000。"
    ],
    "optionAnalysis": [
      {
        "choice": "0.000602",
        "truth": false,
        "reason": "方向反。"
      },
      {
        "choice": "60,200",
        "truth": false,
        "reason": "少移一位。"
      },
      {
        "choice": "6,020,000",
        "truth": false,
        "reason": "多移一位。"
      },
      {
        "choice": "602,000",
        "truth": true,
        "reason": "6.02×100000=602000。"
      }
    ],
    "commonMistake": "把指數5誤當成補5個0在6.02後，造成位數錯。",
    "concept": "正指數表示小數點向右移。",
    "tags": [
      "數與量",
      "科學記號",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-laws"
    ],
    "authoringIntent": "科學記號還原大數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "876af7265bd202ce3ab7f579ec54c0600cc1ca90c793d69a5b4a52650626090f"
  },
  {
    "questionId": "u01-s014-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 3.1×10⁷ 與 9.9×10⁶，何者較大？",
    "choices": [
      "3.1×10⁷ 較大",
      "9.9×10⁶ 較大",
      "兩者相等",
      "資料不足"
    ],
    "answerIndex": 0,
    "explanation": "正數科學記號先比指數；7>6，所以3.1×10⁷較大。",
    "steps": [
      "兩數皆正。",
      "比較10的指數7與6。",
      "指數7者較大。"
    ],
    "optionAnalysis": [
      {
        "choice": "3.1×10⁷ 較大",
        "truth": true,
        "reason": "3.1×10⁷=31,000,000，9.9×10⁶=9,900,000。"
      },
      {
        "choice": "9.9×10⁶ 較大",
        "truth": false,
        "reason": "只比較係數。"
      },
      {
        "choice": "兩者相等",
        "truth": false,
        "reason": "數量級不同。"
      },
      {
        "choice": "資料不足",
        "truth": false,
        "reason": "資料充分。"
      }
    ],
    "commonMistake": "因9.9>3.1就選第二個。",
    "concept": "正科學記號比較先看數量級。",
    "tags": [
      "數與量",
      "科學記號",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-laws"
    ],
    "authoringIntent": "比較不同指數的正數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6530d08141588a1b70ab8d7763ab160bf71797520c8f92ea53185e184c01c32b"
  },
  {
    "questionId": "u01-s014-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(2×10³)(4×10⁵) 的結果為何？",
    "choices": [
      "8×10¹⁵",
      "8×10⁸",
      "6×10⁸",
      "8×10²"
    ],
    "answerIndex": 1,
    "explanation": "係數2×4=8，10³×10⁵=10⁸，所以8×10⁸。",
    "steps": [
      "乘係數得8。",
      "指數3+5=8。",
      "係數已標準。"
    ],
    "optionAnalysis": [
      {
        "choice": "8×10¹⁵",
        "truth": false,
        "reason": "把指數相乘。"
      },
      {
        "choice": "8×10⁸",
        "truth": true,
        "reason": "8×10^(3+5)=8×10⁸。"
      },
      {
        "choice": "6×10⁸",
        "truth": false,
        "reason": "係數相加。"
      },
      {
        "choice": "8×10²",
        "truth": false,
        "reason": "指數相減。"
      }
    ],
    "commonMistake": "把3與5相乘成15。",
    "concept": "科學記號乘法使用同底數指數相加。",
    "tags": [
      "數與量",
      "科學記號",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-laws"
    ],
    "authoringIntent": "基本科學記號乘法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8623894d41ce8c7f5e3f9f6af1b429057c139558fb825852b841d08a1ca15b1b"
  },
  {
    "questionId": "u01-s014-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(9×10⁸)÷(3×10²) 的結果為何？",
    "choices": [
      "3×10¹⁰",
      "6×10⁶",
      "3×10⁶",
      "3×10⁴"
    ],
    "answerIndex": 2,
    "explanation": "係數9÷3=3，指數8-2=6，所以3×10⁶。",
    "steps": [
      "係數除得3。",
      "指數相減得6。",
      "結果標準。"
    ],
    "optionAnalysis": [
      {
        "choice": "3×10¹⁰",
        "truth": false,
        "reason": "指數相加。"
      },
      {
        "choice": "6×10⁶",
        "truth": false,
        "reason": "係數相減。"
      },
      {
        "choice": "3×10⁶",
        "truth": true,
        "reason": "3×10^(8-2)=3×10⁶。"
      },
      {
        "choice": "3×10⁴",
        "truth": false,
        "reason": "指數減錯。"
      }
    ],
    "commonMistake": "把8÷2當作新指數4。",
    "concept": "科學記號除法係數相除、指數相減。",
    "tags": [
      "數與量",
      "科學記號",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-laws"
    ],
    "authoringIntent": "基本科學記號除法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "25b07954591dc225ad6cd0a6242178d015a620da374b74b55210824030370c0a"
  },
  {
    "questionId": "u01-s014-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "18×10⁴ 改寫成標準科學記號為何？",
    "choices": [
      "18×10⁴",
      "0.18×10⁶",
      "1.8×10⁴",
      "1.8×10⁵"
    ],
    "answerIndex": 3,
    "explanation": "18=1.8×10，所以18×10⁴=1.8×10⁵。",
    "steps": [
      "把18改成1.8×10。",
      "合併10¹與10⁴。",
      "得1.8×10⁵。"
    ],
    "optionAnalysis": [
      {
        "choice": "18×10⁴",
        "truth": false,
        "reason": "非標準。"
      },
      {
        "choice": "0.18×10⁶",
        "truth": false,
        "reason": "數值相同但係數<1。"
      },
      {
        "choice": "1.8×10⁴",
        "truth": false,
        "reason": "少一個10倍。"
      },
      {
        "choice": "1.8×10⁵",
        "truth": true,
        "reason": "18×10⁴=1.8×10×10⁴=1.8×10⁵。"
      }
    ],
    "commonMistake": "只把係數18改成1.8，卻忘記指數加1。",
    "concept": "正規化係數時須補償10的次方。",
    "tags": [
      "數與量",
      "科學記號",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-laws"
    ],
    "authoringIntent": "把運算中間結果正規化。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d12b16dc144f3640a4b62399610f46f282c09e95c2685017b8ff0183aae65eeb"
  },
  {
    "questionId": "u01-s014-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "0.00000045 的標準科學記號為何？",
    "choices": [
      "4.5×10⁻⁷",
      "4.5×10⁻⁶",
      "45×10⁻⁸",
      "0.45×10⁻⁶"
    ],
    "answerIndex": 0,
    "explanation": "第一個非零數4移到個位，需把小數點向右移7位，所以4.5×10⁻⁷。",
    "steps": [
      "定位第一個非零數。",
      "向右移7位得到4.5。",
      "使用負7次方。"
    ],
    "optionAnalysis": [
      {
        "choice": "4.5×10⁻⁷",
        "truth": true,
        "reason": "4.5×10^-7=0.00000045。"
      },
      {
        "choice": "4.5×10⁻⁶",
        "truth": false,
        "reason": "少一位。"
      },
      {
        "choice": "45×10⁻⁸",
        "truth": false,
        "reason": "數值相同但係數非標準。"
      },
      {
        "choice": "0.45×10⁻⁶",
        "truth": false,
        "reason": "係數非標準且指數不匹配。"
      }
    ],
    "commonMistake": "數前導0時少算一位。",
    "concept": "負指數位數由小數點移動格數決定。",
    "tags": [
      "數與量",
      "科學記號",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-laws"
    ],
    "authoringIntent": "處理多個前導0的小數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3a178dc7cce834871e16e32c062a61879a7afac9d3a5f493dda010a085e1e115"
  },
  {
    "questionId": "u01-s014-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某城市人口為 23,500,000 人。用標準科學記號表示為何？",
    "choices": [
      "23.5×10⁶ 人",
      "2.35×10⁷ 人",
      "2.35×10⁶ 人",
      "0.235×10⁸ 人"
    ],
    "answerIndex": 1,
    "explanation": "23,500,000=2.35×10⁷，且2.35符合標準係數。",
    "steps": [
      "小數點移到2.35。",
      "向左7位。",
      "寫2.35×10⁷。"
    ],
    "optionAnalysis": [
      {
        "choice": "23.5×10⁶ 人",
        "truth": false,
        "reason": "數值相同但係數不標準。"
      },
      {
        "choice": "2.35×10⁷ 人",
        "truth": true,
        "reason": "23,500,000=2.35×10⁷。"
      },
      {
        "choice": "2.35×10⁶ 人",
        "truth": false,
        "reason": "少10倍。"
      },
      {
        "choice": "0.235×10⁸ 人",
        "truth": false,
        "reason": "數值相同但係數不標準。"
      }
    ],
    "commonMistake": "把235後面的0數成6個而少一個位數。",
    "concept": "人口大數可用標準科學記號簡潔表示。",
    "tags": [
      "數與量",
      "科學記號",
      "literacy"
    ],
    "estimatedTimeSec": "80",
    "prerequisiteSkillIds": [
      "integer-exponent-laws"
    ],
    "authoringIntent": "把真實人口資料轉科學記號。",
    "literacyContextNecessity": "人口原始數字與標準形式要求共同決定係數和指數。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "48e42e8492d6adafd906b1f5eb383417db5e9aabcdefc86e01800944c88e3520"
  },
  {
    "questionId": "u01-s014-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某微生物直徑約 8.2×10⁻⁶ 公尺。5 個首尾相接的總長度約為多少？",
    "choices": [
      "4.1×10⁻⁶ 公尺",
      "13.2×10⁻⁶ 公尺",
      "4.1×10⁻⁵ 公尺",
      "41×10⁻⁵ 公尺"
    ],
    "answerIndex": 2,
    "explanation": "5×8.2×10⁻⁶=41×10⁻⁶=4.1×10⁻⁵公尺。",
    "steps": [
      "係數5×8.2=41。",
      "保留10⁻⁶。",
      "正規化41×10⁻⁶=4.1×10⁻⁵。"
    ],
    "optionAnalysis": [
      {
        "choice": "4.1×10⁻⁶ 公尺",
        "truth": false,
        "reason": "少乘5。"
      },
      {
        "choice": "13.2×10⁻⁶ 公尺",
        "truth": false,
        "reason": "錯把係數相加。"
      },
      {
        "choice": "4.1×10⁻⁵ 公尺",
        "truth": true,
        "reason": "5(8.2×10^-6)=4.1×10^-5公尺。"
      },
      {
        "choice": "41×10⁻⁵ 公尺",
        "truth": false,
        "reason": "數值大10倍。"
      }
    ],
    "commonMistake": "算得41×10⁻⁶後，把係數改4.1卻仍保留10⁻⁶。",
    "concept": "乘整數後需將係數重新正規化。",
    "tags": [
      "數與量",
      "科學記號",
      "literacy"
    ],
    "estimatedTimeSec": "95",
    "prerequisiteSkillIds": [
      "integer-exponent-laws"
    ],
    "authoringIntent": "由微小長度求多個總長並正規化。",
    "literacyContextNecessity": "單個直徑、個數、首尾相接與單位都參與乘法。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e85fd0f899d68ae8c3b3ee574817d94e321955fdac37fad80c6dede8b8beea12"
  },
  {
    "questionId": "u01-s014-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩座資料站一天分別傳送 1.2×10⁹ 位元與 3.8×10⁹ 位元。合計傳送多少位元？",
    "choices": [
      "4.56×10¹⁸",
      "2.6×10⁹",
      "5.0×10¹⁸",
      "5.0×10⁹"
    ],
    "answerIndex": 3,
    "explanation": "指數相同，可加係數：1.2+3.8=5.0，所以5.0×10⁹位元。",
    "steps": [
      "確認兩數同為10⁹。",
      "係數相加得5.0。",
      "指數保持9。"
    ],
    "optionAnalysis": [
      {
        "choice": "4.56×10¹⁸",
        "truth": false,
        "reason": "把兩數相乘。"
      },
      {
        "choice": "2.6×10⁹",
        "truth": false,
        "reason": "錯誤相減。"
      },
      {
        "choice": "5.0×10¹⁸",
        "truth": false,
        "reason": "係數加但指數錯加。"
      },
      {
        "choice": "5.0×10⁹",
        "truth": true,
        "reason": "(1.2+3.8)×10⁹=5.0×10⁹。"
      }
    ],
    "commonMistake": "科學記號相加時把指數也相加成18。",
    "concept": "同數量級相加時係數相加、共同10的冪不變。",
    "tags": [
      "數與量",
      "科學記號",
      "literacy"
    ],
    "estimatedTimeSec": "95",
    "prerequisiteSkillIds": [
      "integer-exponent-laws"
    ],
    "authoringIntent": "合併兩筆同指數資料量。",
    "literacyContextNecessity": "兩站資料量與「合計」要求決定使用加法而非乘法。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "397c7c41b822f9d84ea4e0a0d0c74265e5f1a7515ee78f41bd3b493073c495ed"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s014-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "將 78,400,000 與 0.000092 分別寫成標準科學記號，再各自還原檢查。",
    "requiredWork": [
      "係數須1≤|a|<10。",
      "寫出小數點移動方向與位數。"
    ],
    "fullCreditSolution": [
      "78,400,000=7.84×10⁷；還原小數點右移7位。",
      "0.000092=9.2×10⁻⁵；還原小數點左移5位。"
    ],
    "alternativeSolutions": [
      "可用乘法7.84×10,000,000與9.2÷100,000檢查。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩個科學記號、位數與還原全正確。"
      },
      {
        "score": 2,
        "criteria": "兩答案正確但檢查略缺；或一個指數小錯。"
      },
      {
        "score": 1,
        "criteria": "至少一個完整正確且係數標準。"
      },
      {
        "score": 0,
        "criteria": "係數與指數方向大多錯。"
      }
    ],
    "scoringNotes": [
      "9.2×10⁻⁵=0.000092，前導0需仔細計數。"
    ],
    "commonErrors": [
      "寫78.4×10⁶。",
      "小數用正指數。",
      "係數0.92不標準。"
    ],
    "independentReview": {
      "derivedResult": "7.84×10⁷；9.2×10⁻⁵。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "d25b88974b8cf80565dd3a60e45eb5386b767d06b3d7919a3eb8ae68e3113667"
  },
  {
    "questionId": "u01-s014-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-exponents",
    "skillId": "integer-scientific-notation",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "計算 (6×10⁷)÷(3×10³)+(4×10⁴)，答案用標準科學記號表示，並解釋為何加法時不能把指數直接相加。",
    "requiredWork": [
      "先完成除法。",
      "把兩加數化為同一數量級或一般數。",
      "最後標準化。"
    ],
    "fullCreditSolution": [
      "除法：(6÷3)×10^(7-3)=2×10⁴。",
      "加法：2×10⁴+4×10⁴=6×10⁴。",
      "加法是在相同位值下加係數；指數相加只適用同底數冪相乘。"
    ],
    "alternativeSolutions": [
      "可還原為20,000+40,000=60,000=6×10⁴。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "除法、加法、6×10⁴與規則說明完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但規則說明略缺；或一處小算錯。"
      },
      {
        "score": 1,
        "criteria": "能正確完成除法或辨認同指數加係數。"
      },
      {
        "score": 0,
        "criteria": "把加法指數加成8或11，無有效過程。"
      }
    ],
    "scoringNotes": [
      "兩項同為10⁴後才能直接加係數。"
    ],
    "commonErrors": [
      "把2×10⁴+4×10⁴寫6×10⁸。",
      "除法指數相除。",
      "漏括號順序。"
    ],
    "independentReview": {
      "derivedResult": "6×10⁴。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "d74ca1b1433284f6bafde11d76fca21349b97b0b3f6f88466391a4e555aa0829"
  }
];

export const DRAWING_SPECS = [];
