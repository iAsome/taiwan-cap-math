// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s005-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-operations",
    "skillId": "polynomial-add-subtract",
    "lockedTitle": "多項式加減",
    "title": "多項式加減：減去整個多項式要逐項變號",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能以橫式或直式對齊同類項。",
      "能正確展開括號前的正號與負號。",
      "能處理缺項並化簡結果。"
    ],
    "prerequisites": [
      "polynomial-degree-coefficient"
    ],
    "prerequisiteBridge": "先備技能 polynomial-degree-coefficient 已建立下一步所需概念；本節專注於對齊同類項並正確處理減號。",
    "glossary": [
      {
        "term": "缺項",
        "definition": "某次方項的係數為 0，書寫時通常省略。"
      },
      {
        "term": "相減",
        "definition": "加上第二個多項式的相反式。"
      },
      {
        "term": "對齊",
        "definition": "將相同次方的項放在同一欄。"
      }
    ],
    "notation": [
      {
        "symbol": "P−Q=P+(−Q)",
        "meaning": "Q 的每一項都變號。"
      },
      {
        "symbol": "0x²",
        "meaning": "直式計算時可補零表示缺項。"
      }
    ],
    "conceptNarrative": [
      "多項式相加就是同類項係數相加。",
      "多項式相減最容易錯在只改第一項；括號前負號要使括號內每一項變號。",
      "直式適合缺項較多的式子，但必須按同次方對齊。",
      "最後仍須合併並按降冪整理。"
    ],
    "formalDefinitions": [
      {
        "name": "多項式相減",
        "statement": "P(x)-Q(x)=P(x)+[-Q(x)]。"
      }
    ],
    "formulas": [
      {
        "formula": "(ax²+bx+c)±(dx²+ex+f)=(a±d)x²+(b±e)x+(c±f)",
        "conditions": [
          "同次方係數分別運算"
        ],
        "meaning": "適用於已對齊的同類項。"
      }
    ],
    "nonApplicableCases": [
      "不能把不同次方的係數放在同欄。",
      "減號不能只作用於括號第一項。",
      "結果不是把兩式直接接在一起。",
      "有缺項時不能錯位。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "將兩式按降冪排列並補想像中的 0 係數。",
        "check": "完成此步後，確認內容仍符合「對齊同類項並正確處理減號」。"
      },
      {
        "step": 2,
        "instruction": "若為減法，先把第二式每項變號。",
        "check": "完成此步後，確認內容仍符合「對齊同類項並正確處理減號」。"
      },
      {
        "step": 3,
        "instruction": "同類項係數相加。",
        "check": "完成此步後，確認內容仍符合「對齊同類項並正確處理減號」。"
      },
      {
        "step": 4,
        "instruction": "刪除 0 項並整理降冪。",
        "check": "完成此步後，確認內容仍符合「對齊同類項並正確處理減號」。"
      },
      {
        "step": 5,
        "instruction": "代入一個簡單數值檢查左右是否相等。",
        "check": "完成此步後，確認內容仍符合「對齊同類項並正確處理減號」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "(3x²+2x-1)+(x²-5x+4)。",
        "solutionSteps": [
          "x²、x、常數分組。"
        ],
        "answer": "4x²-3x+3。"
      },
      {
        "exampleId": "L2",
        "prompt": "(4x²-x+6)-(2x²+3x-5)。",
        "solutionSteps": [
          "第二式變為 -2x²-3x+5。"
        ],
        "answer": "2x²-4x+11。"
      },
      {
        "exampleId": "L3",
        "prompt": "(x³+2)-(2x²-x)。",
        "solutionSteps": [
          "補看缺項後相減。"
        ],
        "answer": "x³-2x²+x+2。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "只把第二式第一項變號",
        "why": "負號的分配範圍誤判",
        "correction": "括號內每一項都乘 -1。"
      },
      {
        "mistake": "x² 項和 x 項相加",
        "why": "未按文字部分對齊",
        "correction": "只處理同次方項。"
      },
      {
        "mistake": "缺項造成直式錯位",
        "why": "依書寫位置而非次方對齊",
        "correction": "用 0 係數佔位。"
      }
    ],
    "selfCheck": [
      "我是否能能以橫式或直式對齊同類項？",
      "我是否能能正確展開括號前的正號與負號？",
      "我是否能能處理缺項並化簡結果？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "加減只處理同類項係數。",
      "減去多項式等於加上其相反式。",
      "缺項要按次方補位。",
      "化簡後再驗算。"
    ],
    "connections": {
      "previous": "上一技能 多項式次數與係數符號 提供本節所需工具。",
      "next": [
        "下一節進入乘法，指數法則與係數符號將同時使用。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s005-v001",
        "u10-s005-v002",
        "u10-s005-v003",
        "u10-s005-v004",
        "u10-s005-v005",
        "u10-s005-v006",
        "u10-s005-v007",
        "u10-s005-v008",
        "u10-s005-v009",
        "u10-s005-v010",
        "u10-s005-v011",
        "u10-s005-v012"
      ],
      "constructedResponseIds": [
        "u10-s005-cr001",
        "u10-s005-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「多項式加減：減去整個多項式要逐項變號」：定義、3 個例題、錯誤推理與下一技能銜接均針對 polynomial-add-subtract；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "52c39bf822b45b08fc2a089aad62a8cb032727cd154bf682dd1ed353b7dcb32e"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s005-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (2x+3)+(5x-1)。",
      "givenConditions": [],
      "target": "兩個一次式相加",
      "choices": [
        "7x+2",
        "7x+4",
        "3x+2",
        "10x-3"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "同類項相加：2x+5x=7x，3+(-1)=2。",
        "derivedChoice": "7x+2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "逐類合併得到 7x+2。",
      "steps": [
        "同類項相加：2x+5x=7x，3+(-1)=2。"
      ],
      "optionAnalysis": [
        {
          "choice": "7x+2",
          "truth": true,
          "reason": "7x+2 正確。"
        },
        {
          "choice": "7x+4",
          "truth": false,
          "reason": "常數把 -1 當 +1。"
        },
        {
          "choice": "3x+2",
          "truth": false,
          "reason": "係數相減。"
        },
        {
          "choice": "10x-3",
          "truth": false,
          "reason": "把係數相乘。"
        }
      ],
      "misconceptionTarget": "常數符號或係數運算錯誤",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「兩個一次式相加」且四個選項以同一表示層級作答；逐項重算後只有「7x+2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：兩個一次式相加，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e2796b4e915193eb6f4caf19c9147389b181add14a59931984e86c30fe18e8e7"
    },
    {
      "questionId": "u10-s005-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (4x²+2x)-(x²-3x)。",
      "givenConditions": [],
      "target": "二次式相減",
      "choices": [
        "3x²-x",
        "5x²-x",
        "3x²+5x",
        "5x²+5x"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "第二式變號：4x²+2x-x²+3x=3x²+5x。",
        "derivedChoice": "3x²+5x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "減去多項式時每一項都變號。",
      "steps": [
        "第二式變號：4x²+2x-x²+3x=3x²+5x。"
      ],
      "optionAnalysis": [
        {
          "choice": "3x²-x",
          "truth": false,
          "reason": "x 項未變號。"
        },
        {
          "choice": "5x²-x",
          "truth": false,
          "reason": "二次項相加錯。"
        },
        {
          "choice": "3x²+5x",
          "truth": true,
          "reason": "3x²+5x 正確。"
        },
        {
          "choice": "5x²+5x",
          "truth": false,
          "reason": "把二次項也當加法。"
        }
      ],
      "misconceptionTarget": "只改括號第一項的符號",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「二次式相減」且四個選項以同一表示層級作答；逐項重算後只有「3x²+5x」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：二次式相減，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f7fafa90c6685809ccea2a497994e913ffe304afd704092f174ed459a1874d25"
    },
    {
      "questionId": "u10-s005-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "P=x²+4，Q=3x²-2。P+Q 為何？",
      "givenConditions": [],
      "target": "以 P、Q 表示相加",
      "choices": [
        "2x²+2",
        "4x²+2",
        "4x²+6",
        "3x⁴+2"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "x²+3x²=4x²，4+(-2)=2。",
        "derivedChoice": "4x²+2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "同次方係數相加，指數不變。",
      "steps": [
        "x²+3x²=4x²，4+(-2)=2。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²+2",
          "truth": false,
          "reason": "二次係數相減。"
        },
        {
          "choice": "4x²+2",
          "truth": true,
          "reason": "4x²+2 正確。"
        },
        {
          "choice": "4x²+6",
          "truth": false,
          "reason": "常數把 -2 當 +2。"
        },
        {
          "choice": "3x⁴+2",
          "truth": false,
          "reason": "把加法誤作乘法。"
        }
      ],
      "misconceptionTarget": "相加時指數改變",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「以 P、Q 表示相加」且四個選項以同一表示層級作答；逐項重算後只有「4x²+2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：以 P、Q 表示相加，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e40aaa1be6bba20be7ec172c7107d867a00d8e0561f63ea32b5de2a57a5c2839"
    },
    {
      "questionId": "u10-s005-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (3x²-x+5)-(2x²+4x-7)。",
      "givenConditions": [],
      "target": "三項式相減",
      "choices": [
        "x²+3x-2",
        "5x²-5x-2",
        "x²-5x-12",
        "x²-5x+12"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "去括號：3x²-x+5-2x²-4x+7=x²-5x+12。",
        "derivedChoice": "x²-5x+12",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "第二式三項全部變號後合併。",
      "steps": [
        "去括號：3x²-x+5-2x²-4x+7=x²-5x+12。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+3x-2",
          "truth": false,
          "reason": "x 項符號錯且常數相減錯。"
        },
        {
          "choice": "5x²-5x-2",
          "truth": false,
          "reason": "二次項誤加。"
        },
        {
          "choice": "x²-5x-12",
          "truth": false,
          "reason": "常數 -7 未變號。"
        },
        {
          "choice": "x²-5x+12",
          "truth": true,
          "reason": "x²-5x+12 正確。"
        }
      ],
      "misconceptionTarget": "減號分配不完整",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「三項式相減」且四個選項以同一表示層級作答；逐項重算後只有「x²-5x+12」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：三項式相減，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "35acb6eea9a587cb96729b1cb2d391e1333d7dd5776744228dbe77fb4e4ac021"
    },
    {
      "questionId": "u10-s005-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 P=2x³-x+1，Q=x²+3x-4，則 P+Q 的 x 項係數為何？",
      "givenConditions": [],
      "target": "只求指定項係數",
      "choices": [
        "-4",
        "-2",
        "2",
        "4"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "x 項只來自 -x+3x=2x，所以係數為 2。",
        "derivedChoice": "2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "其他次方不影響 x 項係數。",
      "steps": [
        "x 項只來自 -x+3x=2x，所以係數為 2。"
      ],
      "optionAnalysis": [
        {
          "choice": "-4",
          "truth": false,
          "reason": "把 -1-3。"
        },
        {
          "choice": "-2",
          "truth": false,
          "reason": "此值不是合併結果。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "2 正確。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "把係數絕對值相加。"
        }
      ],
      "misconceptionTarget": "未按次方取對應係數",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「只求指定項係數」且四個選項以同一表示層級作答；逐項重算後只有「2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：只求指定項係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "408e845cc649ec1999ec1e5ccba0ae3b0491edab4e44ea5004718ab39c14ad15"
    },
    {
      "questionId": "u10-s005-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 2(x²+x-1)+(x²-3x+4)。",
      "givenConditions": [],
      "target": "含倍數的多項式相加",
      "choices": [
        "3x²-x+2",
        "3x²+5x+2",
        "2x²-2x+3",
        "3x²-x+6"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "先分配 2：2x²+2x-2，再加第二式，得 3x²-x+2。",
        "derivedChoice": "3x²-x+2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "分配後逐次方相加。",
      "steps": [
        "先分配 2：2x²+2x-2，再加第二式，得 3x²-x+2。"
      ],
      "optionAnalysis": [
        {
          "choice": "3x²-x+2",
          "truth": true,
          "reason": "3x²-x+2 正確。"
        },
        {
          "choice": "3x²+5x+2",
          "truth": false,
          "reason": "把 -3x 當 +3x。"
        },
        {
          "choice": "2x²-2x+3",
          "truth": false,
          "reason": "漏加第二式 x²。"
        },
        {
          "choice": "3x²-x+6",
          "truth": false,
          "reason": "常數 -2+4 算成 6。"
        }
      ],
      "misconceptionTarget": "外係數未分配所有項",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含倍數的多項式相加」且四個選項以同一表示層級作答；逐項重算後只有「3x²-x+2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：含倍數的多項式相加，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "770fcf4828980012cd526f1aa8cf6e51409632c4c3961e2c87ee5283e20d6502"
    },
    {
      "questionId": "u10-s005-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 [2x²-(x-1)]-[x²+(2x+3)]。",
      "givenConditions": [],
      "target": "雙層括號加減",
      "choices": [
        "x²-x-2",
        "3x²+x+4",
        "x²-3x+4",
        "x²-3x-2"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "第一括號為 2x²-x+1；減第二括號得 -x²-2x-3，所以總為 x²-3x-2。",
        "derivedChoice": "x²-3x-2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "分兩層去括號，外層減號作用於第二個整體。",
      "steps": [
        "第一括號為 2x²-x+1。",
        "減第二括號得 -x²-2x-3，所以總為 x²-3x-2。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-x-2",
          "truth": false,
          "reason": "只處理一層符號。"
        },
        {
          "choice": "3x²+x+4",
          "truth": false,
          "reason": "把兩組都相加。"
        },
        {
          "choice": "x²-3x+4",
          "truth": false,
          "reason": "常數符號錯。"
        },
        {
          "choice": "x²-3x-2",
          "truth": true,
          "reason": "x²-3x-2 正確。"
        }
      ],
      "misconceptionTarget": "巢狀括號的負號範圍錯",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「雙層括號加減」且四個選項以同一表示層級作答；逐項重算後只有「x²-3x-2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：雙層括號加減，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "49423d99680a256a414821625e9467d5f5d6f8aa8235dd57a89bfe3937817852"
    },
    {
      "questionId": "u10-s005-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 P-Q=3x²-2x+5，且 Q=x²+x-1，則 P 為何？",
      "givenConditions": [],
      "target": "由 P-Q 與 Q 反求 P",
      "choices": [
        "2x²-3x+6",
        "4x²-x+4",
        "4x²-3x+6",
        "2x²-x+4"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "P=(P-Q)+Q=(3x²-2x+5)+(x²+x-1)=4x²-x+4。",
        "derivedChoice": "4x²-x+4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "由已知差加回 Q。",
      "steps": [
        "P=(P-Q)+Q=(3x²-2x+5)+(x²+x-1)=4x²-x+4。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²-3x+6",
          "truth": false,
          "reason": "誤做再減 Q。"
        },
        {
          "choice": "4x²-x+4",
          "truth": true,
          "reason": "4x²-x+4 正確。"
        },
        {
          "choice": "4x²-3x+6",
          "truth": false,
          "reason": "x 項和常數錯。"
        },
        {
          "choice": "2x²-x+4",
          "truth": false,
          "reason": "二次項係數錯。"
        }
      ],
      "misconceptionTarget": "由差反求被減式時運算方向錯",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由 P-Q 與 Q 反求 P」且四個選項以同一表示層級作答；逐項重算後只有「4x²-x+4」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由 P-Q 與 Q 反求 P，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f4733dc566b12bdd5d909edd9a3671c9bba92708027793dd6f134416230ee058"
    },
    {
      "questionId": "u10-s005-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 A=2x²+ax-3，B=x²-4x+b，且 A-B=x²+5x-7，則 a+b 為何？",
      "givenConditions": [],
      "target": "由多項式差求參數",
      "choices": [
        "-1",
        "5",
        "1",
        "3"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "A-B=x²+(a+4)x+(-3-b)。比較得 a+4=5，所以 a=1；-3-b=-7，所以 b=4；因此 a+b=5。",
        "derivedChoice": "5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "逐次方比較係數求兩參數。",
      "steps": [
        "A-B=x²+(a+4)x+(-3-b)。",
        "比較得 a+4=5，所以 a=1。",
        "-3-b=-7，所以 b=4。",
        "因此 a+b=5。"
      ],
      "optionAnalysis": [
        {
          "choice": "-1",
          "truth": false,
          "reason": "只取一個參數。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "a+b=5 正確。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "並非最後和。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "計算 b 符號錯。"
        }
      ],
      "misconceptionTarget": "比較係數時減號造成參數符號錯",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由多項式差求參數」且四個選項以同一表示層級作答；逐項重算後只有「5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由多項式差求參數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "eb678dc62135ae18f9d75bc5b86ff89cce8b159aa3e3cd7fd9548efc0c10def2"
    },
    {
      "questionId": "u10-s005-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某社團收入為 (80x+1200) 元，支出為 (35x+500) 元。結餘是多少？",
      "givenConditions": [],
      "target": "收入減支出",
      "choices": [
        "115x+1700 元",
        "45x+1700 元",
        "115x+700 元",
        "45x+700 元"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "結餘=收入-支出=80x+1200-35x-500=45x+700。",
        "derivedChoice": "45x+700 元",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "變動收入與固定收入分別減去對應支出。",
      "steps": [
        "結餘=收入-支出=80x+1200-35x-500=45x+700。"
      ],
      "optionAnalysis": [
        {
          "choice": "115x+1700 元",
          "truth": false,
          "reason": "把收入與支出相加。"
        },
        {
          "choice": "45x+1700 元",
          "truth": false,
          "reason": "固定項未相減。"
        },
        {
          "choice": "115x+700 元",
          "truth": false,
          "reason": "x 係數誤加。"
        },
        {
          "choice": "45x+700 元",
          "truth": true,
          "reason": "45x+700 正確。"
        }
      ],
      "misconceptionTarget": "把結餘誤作收入加支出",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "所有項均為元，可直接相減。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「收入減支出」且四個選項以同一表示層級作答；逐項重算後只有「45x+700 元」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：收入減支出，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「結餘」的語意明確決定相減方向，元的單位需保留。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e7aed90ed4dfd69d901638416efa624d9bb0eeaa5e3b3de2b208606fe27e06e8"
    },
    {
      "questionId": "u10-s005-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一水槽原有 (6x²+4x) 公升，放出 (2x²-3x+5) 公升後，剩多少？",
      "givenConditions": [],
      "target": "容量剩餘量",
      "choices": [
        "4x²+7x-5 公升",
        "4x²+x-5 公升",
        "8x²+x+5 公升",
        "4x²+7x+5 公升"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "剩量=6x²+4x-(2x²-3x+5)=4x²+7x-5。",
        "derivedChoice": "4x²+7x-5 公升",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "放出量整體要相減，因此 -3x 變 +3x。",
      "steps": [
        "剩量=6x²+4x-(2x²-3x+5)=4x²+7x-5。"
      ],
      "optionAnalysis": [
        {
          "choice": "4x²+7x-5 公升",
          "truth": true,
          "reason": "4x²+7x-5 正確。"
        },
        {
          "choice": "4x²+x-5 公升",
          "truth": false,
          "reason": "x 項只算 4x-3x。"
        },
        {
          "choice": "8x²+x+5 公升",
          "truth": false,
          "reason": "把二次項相加。"
        },
        {
          "choice": "4x²+7x+5 公升",
          "truth": false,
          "reason": "常數 5 未變號。"
        }
      ],
      "misconceptionTarget": "減去含負項的放出量時符號錯",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "各式均以公升表示。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「容量剩餘量」且四個選項以同一表示層級作答；逐項重算後只有「4x²+7x-5 公升」成立。",
      "boundaryAudit": "實際 x 應使原量、放出量及剩餘量皆不為負。",
      "difficultyReason": "素養：容量剩餘量，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「放出後剩下」要求原量減放出量，且容量單位使負結果需再檢查範圍。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f351f85db045d4bbe5ee6b58b78e31462566541791361a923e14a1596f1c8b3e"
    },
    {
      "questionId": "u10-s005-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "甲路線長 (3x²+2x+1) 公里，乙路線比甲短 (x²-x+2) 公里。乙路線長為何？",
      "givenConditions": [],
      "target": "由比較差求較短量",
      "choices": [
        "2x²+x-1 公里",
        "4x²+x+3 公里",
        "2x²+3x-1 公里",
        "2x²+3x+3 公里"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "乙=甲-差=3x²+2x+1-(x²-x+2)=2x²+3x-1。",
        "derivedChoice": "2x²+3x-1 公里",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "「比甲短」表示從甲路線減去差量。",
      "steps": [
        "乙=甲-差=3x²+2x+1-(x²-x+2)=2x²+3x-1。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²+x-1 公里",
          "truth": false,
          "reason": "x 項未正確變號。"
        },
        {
          "choice": "4x²+x+3 公里",
          "truth": false,
          "reason": "誤把差量相加。"
        },
        {
          "choice": "2x²+3x-1 公里",
          "truth": true,
          "reason": "2x²+3x-1 正確。"
        },
        {
          "choice": "2x²+3x+3 公里",
          "truth": false,
          "reason": "常數 2 未變號。"
        }
      ],
      "misconceptionTarget": "把「短多少」的關係方向弄反",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "所有長度式單位為公里。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由比較差求較短量」且四個選項以同一表示層級作答；逐項重算後只有「2x²+3x-1 公里」成立。",
      "boundaryAudit": "實際 x 應使兩路線長度為正。",
      "difficultyReason": "素養：由比較差求較短量，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "比較語句「乙比甲短」決定被減式與減式，不能只做形式加減。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b95871d6266b70559790d18c8e32ba7503aea3ec17a6e7f547e7fa26ad917240"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s005-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (4x²-3x+6)-(x²+5x-2)，並展示去括號步驟。",
      "requiredWork": [
        "第二個多項式每項變號。",
        "合併同類項。"
      ],
      "standardSolution": [
        "4x²-3x+6-x²-5x+2。",
        "=3x²-8x+8。"
      ],
      "alternativeMethods": [
        "可用直式把第二式各係數取相反數後相加。"
      ],
      "reasoningSteps": [
        "4x²-3x+6-x²-5x+2。",
        "=3x²-8x+8。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "去括號與結果全對。"
        },
        {
          "score": 2,
          "criteria": "方法正確但一個係數算錯。"
        },
        {
          "score": 1,
          "criteria": "只正確變號部分項或能合併一組。"
        },
        {
          "score": 0,
          "criteria": "把兩式直接相加或無作答。"
        }
      ],
      "partialCreditRules": [
        "等價排列可接受。"
      ],
      "followThroughPolicy": "若只在常數變號錯，後續一致，給 2 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫正確答案無步驟，最高 2 分。",
      "commonErrorTargets": [
        "對齊同類項並正確處理減號"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立重算係數 4-1=3、-3-5=-8、6-(-2)=8。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cf89dd72efd8cb8c92923788e23e08ea2f550f52b538d4c45ae63ba5d37ef0fe"
    },
    {
      "questionId": "u10-s005-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "已知 A-B=2x²-3x+4，且 A=x²+x-1。求 B。",
      "requiredWork": [
        "由 B=A-(A-B) 建式。",
        "正確處理外層減號。"
      ],
      "standardSolution": [
        "B=(x²+x-1)-(2x²-3x+4)。",
        "=x²+x-1-2x²+3x-4=-x²+4x-5。"
      ],
      "alternativeMethods": [
        "也可由 A-B=D 改寫 B=A-D，再以直式相減。"
      ],
      "reasoningSteps": [
        "B=(x²+x-1)-(2x²-3x+4)。",
        "=x²+x-1-2x²+3x-4=-x²+4x-5。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "關係式與 B=-x²+4x-5 正確。"
        },
        {
          "score": 2,
          "criteria": "關係方向正確但單一係數錯。"
        },
        {
          "score": 1,
          "criteria": "知道需用 A 與已知差運算但方向/符號不完整。"
        },
        {
          "score": 0,
          "criteria": "直接把兩式相加且無合理說明。"
        }
      ],
      "partialCreditRules": [
        "答案若未按降冪但等價不扣分。"
      ],
      "followThroughPolicy": "若關係式正確、去括號單一錯誤，依後續一致給 2 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫 B 的正確式，最高 2 分。",
      "commonErrorTargets": [
        "對齊同類項並正確處理減號"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立檢查 A-B=(x²+x-1)-(-x²+4x-5)=2x²-3x+4。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "924285bf442051f85e946891c24cfd2a1dd5c5ff84cd46d48e147337f0382669"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s005-v001-review",
      "questionId": "u10-s005-v001",
      "questionContentSha256": "e2796b4e915193eb6f4caf19c9147389b181add14a59931984e86c30fe18e8e7",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "同類項相加：2x+5x=7x，3+(-1)=2。",
      "derivedAnswer": "7x+2",
      "storedAnswer": "7x+2",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：7x+2：7x+2 正確。；7x+4：常數把 -1 當 +1。；3x+2：係數相減。；10x-3：把係數相乘。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「常數符號或係數運算錯誤」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：兩個一次式相加，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (2x+3)+(5x-1)。」獨立重算：同類項相加：2x+5x=7x，3+(-1)=2。 正解「7x+2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "85aece7660292624fea649398796b59dcb97825ff5293ed94403cb439891f705"
    },
    {
      "reviewId": "u10-s005-v002-review",
      "questionId": "u10-s005-v002",
      "questionContentSha256": "f7fafa90c6685809ccea2a497994e913ffe304afd704092f174ed459a1874d25",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "第二式變號：4x²+2x-x²+3x=3x²+5x。",
      "derivedAnswer": "3x²+5x",
      "storedAnswer": "3x²+5x",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3x²-x：x 項未變號。；5x²-x：二次項相加錯。；3x²+5x：3x²+5x 正確。；5x²+5x：把二次項也當加法。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只改括號第一項的符號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：二次式相減，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (4x²+2x)-(x²-3x)。」獨立重算：第二式變號：4x²+2x-x²+3x=3x²+5x。 正解「3x²+5x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "4a694d6aee1f60ceafe0d3e2ac9660528db3318e5bab6ab119682b3c528f60e3"
    },
    {
      "reviewId": "u10-s005-v003-review",
      "questionId": "u10-s005-v003",
      "questionContentSha256": "e40aaa1be6bba20be7ec172c7107d867a00d8e0561f63ea32b5de2a57a5c2839",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x²+3x²=4x²，4+(-2)=2。",
      "derivedAnswer": "4x²+2",
      "storedAnswer": "4x²+2",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²+2：二次係數相減。；4x²+2：4x²+2 正確。；4x²+6：常數把 -2 當 +2。；3x⁴+2：把加法誤作乘法。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「相加時指數改變」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：以 P、Q 表示相加，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「P=x²+4，Q=3x²-2。P+Q 為何？」獨立重算：x²+3x²=4x²，4+(-2)=2。 正解「4x²+2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "33ca3bb53be82e3b99e90fea36ba187aaaaa1bfb29e976452776b565360d2d27"
    },
    {
      "reviewId": "u10-s005-v004-review",
      "questionId": "u10-s005-v004",
      "questionContentSha256": "35acb6eea9a587cb96729b1cb2d391e1333d7dd5776744228dbe77fb4e4ac021",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "去括號：3x²-x+5-2x²-4x+7=x²-5x+12。",
      "derivedAnswer": "x²-5x+12",
      "storedAnswer": "x²-5x+12",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+3x-2：x 項符號錯且常數相減錯。；5x²-5x-2：二次項誤加。；x²-5x-12：常數 -7 未變號。；x²-5x+12：x²-5x+12 正確。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「減號分配不完整」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：三項式相減，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (3x²-x+5)-(2x²+4x-7)。」獨立重算：去括號：3x²-x+5-2x²-4x+7=x²-5x+12。 正解「x²-5x+12」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "d28b4097b8f0bc085475e65daf4b1c400116483b948a2c888cb5edad49c9e9f2"
    },
    {
      "reviewId": "u10-s005-v005-review",
      "questionId": "u10-s005-v005",
      "questionContentSha256": "408e845cc649ec1999ec1e5ccba0ae3b0491edab4e44ea5004718ab39c14ad15",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x 項只來自 -x+3x=2x，所以係數為 2。",
      "derivedAnswer": "2",
      "storedAnswer": "2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-4：把 -1-3。；-2：此值不是合併結果。；2：2 正確。；4：把係數絕對值相加。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未按次方取對應係數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：只求指定項係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 P=2x³-x+1，Q=x²+3x-4，則 P+Q 的 x 項係數為何？」獨立重算：x 項只來自 -x+3x=2x，所以係數為 2。 正解「2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "891a767460a96f5566dbb65b28f20a840c631c73d7bf47117f7266a82f4b3eb2"
    },
    {
      "reviewId": "u10-s005-v006-review",
      "questionId": "u10-s005-v006",
      "questionContentSha256": "770fcf4828980012cd526f1aa8cf6e51409632c4c3961e2c87ee5283e20d6502",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "先分配 2：2x²+2x-2，再加第二式，得 3x²-x+2。",
      "derivedAnswer": "3x²-x+2",
      "storedAnswer": "3x²-x+2",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3x²-x+2：3x²-x+2 正確。；3x²+5x+2：把 -3x 當 +3x。；2x²-2x+3：漏加第二式 x²。；3x²-x+6：常數 -2+4 算成 6。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「外係數未分配所有項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：含倍數的多項式相加，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 2(x²+x-1)+(x²-3x+4)。」獨立重算：先分配 2：2x²+2x-2，再加第二式，得 3x²-x+2。 正解「3x²-x+2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "c19f3f0ec2cddb4f8118f7afd4554568ad08cbabdcae6e87af589bab2765e4e7"
    },
    {
      "reviewId": "u10-s005-v007-review",
      "questionId": "u10-s005-v007",
      "questionContentSha256": "49423d99680a256a414821625e9467d5f5d6f8aa8235dd57a89bfe3937817852",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "第一括號為 2x²-x+1；減第二括號得 -x²-2x-3，所以總為 x²-3x-2。",
      "derivedAnswer": "x²-3x-2",
      "storedAnswer": "x²-3x-2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-x-2：只處理一層符號。；3x²+x+4：把兩組都相加。；x²-3x+4：常數符號錯。；x²-3x-2：x²-3x-2 正確。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「巢狀括號的負號範圍錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：雙層括號加減，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 [2x²-(x-1)]-[x²+(2x+3)]。」獨立重算：第一括號為 2x²-x+1；減第二括號得 -x²-2x-3，所以總為 x²-3x-2。 正解「x²-3x-2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "38ff15022565a567686607980b1e50461dd33b986def12536e219e22377f8bf0"
    },
    {
      "reviewId": "u10-s005-v008-review",
      "questionId": "u10-s005-v008",
      "questionContentSha256": "f4733dc566b12bdd5d909edd9a3671c9bba92708027793dd6f134416230ee058",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "P=(P-Q)+Q=(3x²-2x+5)+(x²+x-1)=4x²-x+4。",
      "derivedAnswer": "4x²-x+4",
      "storedAnswer": "4x²-x+4",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²-3x+6：誤做再減 Q。；4x²-x+4：4x²-x+4 正確。；4x²-3x+6：x 項和常數錯。；2x²-x+4：二次項係數錯。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「由差反求被減式時運算方向錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由 P-Q 與 Q 反求 P，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 P-Q=3x²-2x+5，且 Q=x²+x-1，則 P 為何？」獨立重算：P=(P-Q)+Q=(3x²-2x+5)+(x²+x-1)=4x²-x+4。 正解「4x²-x+4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "43d58c2ffb9dc3e58bfbe8901c88873ec9f62d95ee92022925c54d9ba488ed65"
    },
    {
      "reviewId": "u10-s005-v009-review",
      "questionId": "u10-s005-v009",
      "questionContentSha256": "eb678dc62135ae18f9d75bc5b86ff89cce8b159aa3e3cd7fd9548efc0c10def2",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "A-B=x²+(a+4)x+(-3-b)。比較得 a+4=5，所以 a=1；-3-b=-7，所以 b=4；因此 a+b=5。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-1：只取一個參數。；5：a+b=5 正確。；1：並非最後和。；3：計算 b 符號錯。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「比較係數時減號造成參數符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由多項式差求參數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 A=2x²+ax-3，B=x²-4x+b，且 A-B=x²+5x-7，則 a+b 為何？」獨立重算：A-B=x²+(a+4)x+(-3-b)。比較得 a+4=5，所以 a=1；-3-b=-7，所以 b=4；因此 a+b=5。 正解「5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "16847dcf6acf4a8e2436f5b0b7195716c06b25bda1bc8c76519431b43b8eff85"
    },
    {
      "reviewId": "u10-s005-v010-review",
      "questionId": "u10-s005-v010",
      "questionContentSha256": "e7aed90ed4dfd69d901638416efa624d9bb0eeaa5e3b3de2b208606fe27e06e8",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "結餘=收入-支出=80x+1200-35x-500=45x+700。",
      "derivedAnswer": "45x+700 元",
      "storedAnswer": "45x+700 元",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：115x+1700 元：把收入與支出相加。；45x+1700 元：固定項未相減。；115x+700 元：x 係數誤加。；45x+700 元：45x+700 正確。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "所有項均為元，可直接相減。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把結餘誤作收入加支出」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：收入減支出，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「結餘」的語意明確決定相減方向，元的單位需保留。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某社團收入為 (80x+1200) 元，支出為 (35x+500) 元。結餘是多少？」獨立重算：結餘=收入-支出=80x+1200-35x-500=45x+700。 正解「45x+700 元」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "d0ee2f410c1065a5dbd005b5b0e8c6aa41eab9be87af7e4c9065b2dd5e6dee25"
    },
    {
      "reviewId": "u10-s005-v011-review",
      "questionId": "u10-s005-v011",
      "questionContentSha256": "f351f85db045d4bbe5ee6b58b78e31462566541791361a923e14a1596f1c8b3e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "剩量=6x²+4x-(2x²-3x+5)=4x²+7x-5。",
      "derivedAnswer": "4x²+7x-5 公升",
      "storedAnswer": "4x²+7x-5 公升",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4x²+7x-5 公升：4x²+7x-5 正確。；4x²+x-5 公升：x 項只算 4x-3x。；8x²+x+5 公升：把二次項相加。；4x²+7x+5 公升：常數 5 未變號。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "各式均以公升表示。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "實際 x 應使原量、放出量及剩餘量皆不為負。",
        "alternateReading": "常見誤讀「減去含負項的放出量時符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：容量剩餘量，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「放出後剩下」要求原量減放出量，且容量單位使負結果需再檢查範圍。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一水槽原有 (6x²+4x) 公升，放出 (2x²-3x+5) 公升後，剩多少？」獨立重算：剩量=6x²+4x-(2x²-3x+5)=4x²+7x-5。 正解「4x²+7x-5 公升」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "7fd0225b6203d94acb37c31ff965d7ab9db96a30a8826bdac2505c586b04780b"
    },
    {
      "reviewId": "u10-s005-v012-review",
      "questionId": "u10-s005-v012",
      "questionContentSha256": "b95871d6266b70559790d18c8e32ba7503aea3ec17a6e7f547e7fa26ad917240",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "乙=甲-差=3x²+2x+1-(x²-x+2)=2x²+3x-1。",
      "derivedAnswer": "2x²+3x-1 公里",
      "storedAnswer": "2x²+3x-1 公里",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²+x-1 公里：x 項未正確變號。；4x²+x+3 公里：誤把差量相加。；2x²+3x-1 公里：2x²+3x-1 正確。；2x²+3x+3 公里：常數 2 未變號。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "所有長度式單位為公里。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "實際 x 應使兩路線長度為正。",
        "alternateReading": "常見誤讀「把「短多少」的關係方向弄反」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：由比較差求較短量，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "比較語句「乙比甲短」決定被減式與減式，不能只做形式加減。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「甲路線長 (3x²+2x+1) 公里，乙路線比甲短 (x²-x+2) 公里。乙路線長為何？」獨立重算：乙=甲-差=3x²+2x+1-(x²-x+2)=2x²+3x-1。 正解「2x²+3x-1 公里」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "d8beb9a49593c883a894722fa22a2ea3be42818ee91066aab48e31d5ba8d12b1"
    }
  ],
  "drawingSpecs": []
};
