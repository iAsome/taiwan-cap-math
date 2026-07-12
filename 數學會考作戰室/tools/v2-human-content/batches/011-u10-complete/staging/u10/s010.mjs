// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s010-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-formulas",
    "skillId": "square-difference-formula",
    "lockedTitle": "差的平方公式",
    "title": "差的平方公式：負號只使中間項為負",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能由 (a-b)(a-b) 推導公式。",
      "能避免把 b² 誤寫成負。",
      "能用公式計算與解釋邊長縮減的面積。"
    ],
    "prerequisites": [
      "square-sum-formula"
    ],
    "prerequisiteBridge": "先備技能 square-sum-formula 已建立下一步所需概念；本節專注於理解並運用 (a-b)^2=a^2-2ab+b^2。",
    "glossary": [
      {
        "term": "差的平方",
        "definition": "兩數差或兩式差的整體平方。"
      },
      {
        "term": "負中間項",
        "definition": "兩個交叉乘積皆為 -ab，合為 -2ab。"
      }
    ],
    "notation": [
      {
        "symbol": "(a−b)²",
        "meaning": "a²−2ab+b²。"
      }
    ],
    "conceptNarrative": [
      "平方表示相同的兩個因式相乘：(a-b)(a-b)。",
      "交叉項是 -ab 與 -ab，因此合成 -2ab。",
      "最後一項 (-b)(-b)=+b²，所以尾項仍為正。",
      "此公式適合計算略小於整數基準的平方。"
    ],
    "formalDefinitions": [
      {
        "name": "差的平方公式",
        "statement": "(a-b)²=a²-2ab+b²。"
      }
    ],
    "formulas": [
      {
        "formula": "(a-b)²=a²-2ab+b²",
        "conditions": [
          "a、b 可為數或代數式"
        ],
        "meaning": "首尾平方為正，中間項為負。"
      }
    ],
    "nonApplicableCases": [
      "不能寫成 a²-b²；那是平方差而非差的平方。",
      "不能把 b² 寫成 -b²。",
      "若 b 本身為負數，要先重新判讀括號結構。",
      "三項平方不直接套用。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "辨認 a 與被減的 b。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a-b)^2=a^2-2ab+b^2」。"
      },
      {
        "step": 2,
        "instruction": "寫 a²。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a-b)^2=a^2-2ab+b^2」。"
      },
      {
        "step": 3,
        "instruction": "寫 -2ab。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a-b)^2=a^2-2ab+b^2」。"
      },
      {
        "step": 4,
        "instruction": "寫 +b²。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a-b)^2=a^2-2ab+b^2」。"
      },
      {
        "step": 5,
        "instruction": "展開內部式後再合併。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a-b)^2=a^2-2ab+b^2」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "展開 (x−4)²。",
        "solutionSteps": [
          "x²−8x+16。"
        ],
        "answer": "x²-8x+16。"
      },
      {
        "exampleId": "L2",
        "prompt": "展開 (3x−2)²。",
        "solutionSteps": [
          "9x²−12x+4。"
        ],
        "answer": "9x²-12x+4。"
      },
      {
        "exampleId": "L3",
        "prompt": "計算 98²。",
        "solutionSteps": [
          "(100−2)²=10000−400+4。"
        ],
        "answer": "9604。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "寫成 a²-b²",
        "why": "把「差的平方」與「平方差」混淆",
        "correction": "看清楚平方在整個括號外。"
      },
      {
        "mistake": "尾項寫 -b²",
        "why": "忽略負負得正",
        "correction": "(-b)²=+b²。"
      },
      {
        "mistake": "中間係數漏乘 2",
        "why": "只寫一個交叉乘積",
        "correction": "展開兩因式核對。"
      }
    ],
    "selfCheck": [
      "我是否能能由 (a-b)(a-b) 推導公式？",
      "我是否能能避免把 b² 誤寫成負？",
      "我是否能能用公式計算與解釋邊長縮減的面積？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "差的平方為 a²-2ab+b²。",
      "尾平方仍為正。",
      "與平方差公式的結構不同。",
      "可用接近基準數的心算檢驗。"
    ],
    "connections": {
      "previous": "上一技能 和的平方公式 提供本節所需工具。",
      "next": [
        "下一節處理一和一差的共軛因式，中間項會完全抵消。"
      ]
    },
    "figureReferences": [
      "u10-fig-square-difference-area"
    ],
    "accessibility": {
      "figureAltTextsRequired": true,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s010-v001",
        "u10-s010-v002",
        "u10-s010-v003",
        "u10-s010-v004",
        "u10-s010-v005",
        "u10-s010-v006",
        "u10-s010-v007",
        "u10-s010-v008",
        "u10-s010-v009",
        "u10-s010-v010",
        "u10-s010-v011",
        "u10-s010-v012"
      ],
      "constructedResponseIds": [
        "u10-s010-cr001",
        "u10-s010-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「差的平方公式：負號只使中間項為負」：定義、3 個例題、錯誤推理與下一技能銜接均針對 square-difference-formula；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "aa9149448278080a7c85b33331b0e8df1ccdb8aeed553b651b6f547fb79c7eee"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s010-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "學生把 (x−5)² 寫成 x²−25。下列哪一項最精確指出他的錯誤並給出正確結果？",
      "givenConditions": [
        "(x−5)²=(x−5)(x−5)"
      ],
      "target": "診斷差的平方中遺漏的中間項",
      "choices": [
        "只需把25改成5，結果為x²−5",
        "漏掉−10x，正確為x²−10x+25",
        "常數符號錯，正確為x²+25",
        "中間項應為+10x，正確為x²+10x+25"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "(x−5)(x−5)=x²−5x−5x+25=x²−10x+25；原式漏掉兩個−5x形成的中間項。",
        "derivedChoice": "漏掉−10x，正確為x²−10x+25",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "把平方改寫成兩個相同因式，再完成四個乘積。",
      "steps": [
        "改寫成(x−5)(x−5)。",
        "完成四個乘積。",
        "合併−5x−5x為−10x。"
      ],
      "optionAnalysis": [
        {
          "choice": "只需把25改成5，結果為x²−5",
          "truth": false,
          "reason": "平方常數仍是25。"
        },
        {
          "choice": "漏掉−10x，正確為x²−10x+25",
          "truth": true,
          "reason": "漏掉−10x，正確式完整。"
        },
        {
          "choice": "常數符號錯，正確為x²+25",
          "truth": false,
          "reason": "除了常數外還缺中間項。"
        },
        {
          "choice": "中間項應為+10x，正確為x²+10x+25",
          "truth": false,
          "reason": "交叉項應為負，不是正。"
        }
      ],
      "misconceptionTarget": "把(a−b)²誤當a²−b²。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "每選項同時含錯誤說明與結果，只有一項完整。",
      "boundaryAudit": "每選項同時含錯誤說明與結果，只有一項完整。",
      "difficultyReason": "基礎：診斷差的平方中遺漏的中間項。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "aba4b38606cb1f02a64b2c2862aafa1173a3c30b0f698db9376b1d8fe92eeece"
    },
    {
      "questionId": "u10-s010-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "下列何者等於 (a-b)²？",
      "givenConditions": [],
      "target": "辨認差平方公式",
      "choices": [
        "a²-2ab+b²",
        "a²-b²",
        "a²-ab-b²",
        "a²+2ab+b²"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "(a-b)(a-b)=a²-2ab+b²。",
        "derivedChoice": "a²-2ab+b²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩個交叉項為負，尾尾乘積為正。",
      "steps": [
        "(a-b)(a-b)=a²-2ab+b²。"
      ],
      "optionAnalysis": [
        {
          "choice": "a²-2ab+b²",
          "truth": true,
          "reason": "公式正確。"
        },
        {
          "choice": "a²-b²",
          "truth": false,
          "reason": "漏中間項且尾號錯。"
        },
        {
          "choice": "a²-ab-b²",
          "truth": false,
          "reason": "中間係數與尾號錯。"
        },
        {
          "choice": "a²+2ab+b²",
          "truth": false,
          "reason": "這是和平方。"
        }
      ],
      "misconceptionTarget": "差平方的尾項符號錯",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認差平方公式」且四個選項以同一表示層級作答；逐項重算後只有「a²-2ab+b²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：辨認差平方公式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4e02d3bf9951ed69b6f28df3ee7a1f96ae161d676f32d70164ccd73c37ad20de"
    },
    {
      "questionId": "u10-s010-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (2x-3)²。",
      "givenConditions": [],
      "target": "含係數差平方",
      "choices": [
        "4x²-6x+9",
        "2x²-12x+9",
        "4x²-12x+9",
        "4x²-9"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "(2x)²-2(2x)(3)+3²=4x²-12x+9。",
        "derivedChoice": "4x²-12x+9",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "係數平方、中間兩倍乘積與尾平方都要計算。",
      "steps": [
        "(2x)²-2(2x)(3)+3²=4x²-12x+9。"
      ],
      "optionAnalysis": [
        {
          "choice": "4x²-6x+9",
          "truth": false,
          "reason": "中間項少一倍。"
        },
        {
          "choice": "2x²-12x+9",
          "truth": false,
          "reason": "首項係數未平方。"
        },
        {
          "choice": "4x²-12x+9",
          "truth": true,
          "reason": "係數平方、中間兩倍乘積與尾平方都要計算。"
        },
        {
          "choice": "4x²-9",
          "truth": false,
          "reason": "誤用平方差。"
        }
      ],
      "misconceptionTarget": "係數平方與中間項錯",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含係數差平方」且四個選項以同一表示層級作答；逐項重算後只有「4x²-12x+9」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：含係數差平方，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f6521d5351436bbb84579cbd31962836476d7400dfbe729b47f44bcbc2e029d0"
    },
    {
      "questionId": "u10-s010-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (3y-4)²。",
      "givenConditions": [],
      "target": "標準差平方",
      "choices": [
        "9y²-12y+16",
        "6y²-24y+16",
        "9y²+24y+16",
        "9y²-24y+16"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "(3y)²-2(3y)(4)+4²=9y²-24y+16。",
        "derivedChoice": "9y²-24y+16",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "三部分符號依差平方公式。",
      "steps": [
        "(3y)²-2(3y)(4)+4²=9y²-24y+16。"
      ],
      "optionAnalysis": [
        {
          "choice": "9y²-12y+16",
          "truth": false,
          "reason": "中間項少一倍。"
        },
        {
          "choice": "6y²-24y+16",
          "truth": false,
          "reason": "首項係數錯。"
        },
        {
          "choice": "9y²+24y+16",
          "truth": false,
          "reason": "中間項符號錯。"
        },
        {
          "choice": "9y²-24y+16",
          "truth": true,
          "reason": "三部分符號依差平方公式。"
        }
      ],
      "misconceptionTarget": "中間項係數或符號錯",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「標準差平方」且四個選項以同一表示層級作答；逐項重算後只有「9y²-24y+16」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：標準差平方，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e54633eab1624e1136dc8cfe6f396f5f96fe77ea76c70389b2dd440ce6d40e6e"
    },
    {
      "questionId": "u10-s010-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (x-k)²=x²-16x+64，則 k 為何？",
      "givenConditions": [],
      "target": "由展開式反求尾數",
      "choices": [
        "8",
        "16",
        "-8",
        "4"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "-2k=-16 得 k=8，且 k²=64。",
        "derivedChoice": "8",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "中間項與尾平方交叉驗證。",
      "steps": [
        "-2k=-16 得 k=8，且 k²=64。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": true,
          "reason": "8 正確。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "把 2k 當 k。"
        },
        {
          "choice": "-8",
          "truth": false,
          "reason": "符號判讀錯。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "中間項只 -8x。"
        }
      ],
      "misconceptionTarget": "反向比較中間項係數錯",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由展開式反求尾數」且四個選項以同一表示層級作答；逐項重算後只有「8」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：由展開式反求尾數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "03a00b0480c2a69b36d2ced2aefc293dbe3cfc4ac66570ea9c048aaac1673492"
    },
    {
      "questionId": "u10-s010-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "將 (100-3)² 展開為 100²-2·100·3+3²，其中中間項的值為何？",
      "givenConditions": [],
      "target": "辨認差平方中間項",
      "choices": [
        "600",
        "-300",
        "-600",
        "300"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "中間項為 -2×100×3=-600。",
        "derivedChoice": "-600",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "差的平方中間項是負的兩倍乘積。",
      "steps": [
        "中間項為 -2×100×3=-600。"
      ],
      "optionAnalysis": [
        {
          "choice": "600",
          "truth": false,
          "reason": "符號錯誤。"
        },
        {
          "choice": "-300",
          "truth": false,
          "reason": "漏乘 2。"
        },
        {
          "choice": "-600",
          "truth": true,
          "reason": "-600 正確。"
        },
        {
          "choice": "300",
          "truth": false,
          "reason": "漏乘 2 且符號錯。"
        }
      ],
      "misconceptionTarget": "差平方中間項的符號或倍數錯",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認差平方中間項」且四個選項以同一表示層級作答；逐項重算後只有「-600」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：辨認差平方中間項，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ca4ec5fa6cd6778c43fd31c4e15eec01204e506e985b3a50d9ff6df4f54cd2f7"
    },
    {
      "questionId": "u10-s010-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (x-1)²-(x-3)²。",
      "givenConditions": [],
      "target": "平方式相減",
      "choices": [
        "-4x+8",
        "2x²-8x+10",
        "4x+8",
        "4x-8"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "第一式 x²-2x+1，第二式 x²-6x+9；相減得 4x-8。",
        "derivedChoice": "4x-8",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "減去第二個平方後二次項抵消。",
      "steps": [
        "第一式 x²-2x+1，第二式 x²-6x+9。",
        "相減得 4x-8。"
      ],
      "optionAnalysis": [
        {
          "choice": "-4x+8",
          "truth": false,
          "reason": "相減方向顛倒。"
        },
        {
          "choice": "2x²-8x+10",
          "truth": false,
          "reason": "把兩式相加。"
        },
        {
          "choice": "4x+8",
          "truth": false,
          "reason": "常數符號錯。"
        },
        {
          "choice": "4x-8",
          "truth": true,
          "reason": "4x-8 正確。"
        }
      ],
      "misconceptionTarget": "兩個差平方相減時外層負號錯",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「平方式相減」且四個選項以同一表示層級作答；逐項重算後只有「4x-8」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：平方式相減，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cce19df1b932eec64d6c25145d661e86784a984b8bd07013bbcc26ce502a7159"
    },
    {
      "questionId": "u10-s010-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (ax-1)²=4x²-4x+1，則 a 為何？",
      "givenConditions": [],
      "target": "由展開式判係數符號",
      "choices": [
        "-2",
        "2",
        "4",
        "±2"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "a²=4，但中間項 -2a=-4，得 a=2。",
        "derivedChoice": "2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "中間項排除 a=-2。",
      "steps": [
        "a²=4，但中間項 -2a=-4，得 a=2。"
      ],
      "optionAnalysis": [
        {
          "choice": "-2",
          "truth": false,
          "reason": "會得到 +4x。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "a=2 正確。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "首項 16x²。"
        },
        {
          "choice": "±2",
          "truth": false,
          "reason": "±2 未考慮中間項符號。"
        }
      ],
      "misconceptionTarget": "只由 a² 判斷而忽略中間項",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由展開式判係數符號」且四個選項以同一表示層級作答；逐項重算後只有「2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由展開式判係數符號，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c66d0523cc8a8b15c00c2b13899d102ffc09a8b523c9f8a52f2c3ff812238306"
    },
    {
      "questionId": "u10-s010-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "將 (x-y-2)² 視為 (A-2)²，A 應為何？",
      "givenConditions": [],
      "target": "差平方的整體辨認",
      "choices": [
        "x",
        "x-y",
        "y",
        "x+y"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "原式可重組為 [(x-y)-2]²，所以 A=x-y。",
        "derivedChoice": "x-y",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "整體 x-y 作為公式第一部分。",
      "steps": [
        "原式可重組為 [(x-y)-2]²，所以 A=x-y。"
      ],
      "optionAnalysis": [
        {
          "choice": "x",
          "truth": false,
          "reason": "漏 y。"
        },
        {
          "choice": "x-y",
          "truth": true,
          "reason": "x-y 正確。"
        },
        {
          "choice": "y",
          "truth": false,
          "reason": "漏 x。"
        },
        {
          "choice": "x+y",
          "truth": false,
          "reason": "改變原式符號。"
        }
      ],
      "misconceptionTarget": "整體代換時漏負號",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「差平方的整體辨認」且四個選項以同一表示層級作答；逐項重算後只有「x-y」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：差平方的整體辨認，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "383f7f99370f9c6f0b162137499ab68b4e4c5c0dce0b7412248ae4e0ff454c89"
    },
    {
      "questionId": "u10-s010-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "正方形原邊長 x 公尺，每邊縮短 2 公尺。新面積為何？",
      "givenConditions": [],
      "target": "縮短後的新面積",
      "choices": [
        "x²-4 平方公尺",
        "x²-2x+4 平方公尺",
        "x²+4x+4 平方公尺",
        "x²-4x+4 平方公尺"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "新邊長 x-2，面積 (x-2)²=x²-4x+4。",
        "derivedChoice": "x²-4x+4 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "縮短邊長後整體平方。",
      "steps": [
        "新邊長 x-2，面積 (x-2)²=x²-4x+4。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-4 平方公尺",
          "truth": false,
          "reason": "誤用平方差。"
        },
        {
          "choice": "x²-2x+4 平方公尺",
          "truth": false,
          "reason": "中間項少一倍。"
        },
        {
          "choice": "x²+4x+4 平方公尺",
          "truth": false,
          "reason": "符號反向。"
        },
        {
          "choice": "x²-4x+4 平方公尺",
          "truth": true,
          "reason": "縮短邊長後整體平方。"
        }
      ],
      "misconceptionTarget": "把邊長縮短直接轉成面積減 4",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「縮短後的新面積」且四個選項以同一表示層級作答；逐項重算後只有「x²-4x+4 平方公尺」成立。",
      "boundaryAudit": "實際正方形要求 x>2。",
      "difficultyReason": "素養：縮短後的新面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "縮短的是每一條邊，必須先形成新邊長 x-2 再平方。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d0daea2da0356b2c081cea6ce3806b8ea4b41bc49ae39a6aa955301907863086"
    },
    {
      "questionId": "u10-s010-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一塊邊長 40 公尺的正方形土地，四邊向內各縮 1 公尺形成新正方形，新面積為何？",
      "givenConditions": [],
      "target": "內縮邊界的面積",
      "choices": [
        "1521 平方公尺",
        "1600 平方公尺",
        "1444 平方公尺",
        "1681 平方公尺"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "四周各縮 1 使邊長減少 2，成為 38 公尺；38²=1444。",
        "derivedChoice": "1444 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "「兩側各 1 公尺」使整條邊減少 2，而不是 1。",
      "steps": [
        "四周各縮 1 使邊長減少 2，成為 38 公尺。",
        "38²=1444。"
      ],
      "optionAnalysis": [
        {
          "choice": "1521 平方公尺",
          "truth": false,
          "reason": "這是 39²，只縮一側。"
        },
        {
          "choice": "1600 平方公尺",
          "truth": false,
          "reason": "原面積未縮。"
        },
        {
          "choice": "1444 平方公尺",
          "truth": true,
          "reason": "1444 正確。"
        },
        {
          "choice": "1681 平方公尺",
          "truth": false,
          "reason": "這是 41²。"
        }
      ],
      "misconceptionTarget": "把四周內縮 1 誤解為邊長只減 1",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「內縮邊界的面積」且四個選項以同一表示層級作答；逐項重算後只有「1444 平方公尺」成立。",
      "boundaryAudit": "內縮後邊長 38>0。",
      "difficultyReason": "素養：內縮邊界的面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "幾何語句「四邊向內各縮 1」決定新邊長為 40-2，而非 39。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "59fa8648140e5d54cd958b1778ea53927ee476742b1b5472cf03db0ac465796e"
    },
    {
      "questionId": "u10-s010-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "圖示正方形原邊長 x，右側與下側各切去寬 2 的長條後，中央剩餘正方形面積為何？",
      "givenConditions": [],
      "target": "用切割圖理解差平方",
      "choices": [
        "x²-4x+4",
        "x²-4",
        "x²-2x+4",
        "x²+4x+4"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "中央正方形邊長為 x-2，因此面積 (x-2)²=x²-4x+4。",
        "derivedChoice": "x²-4x+4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "圖示切除位置確認兩方向各減 2。",
      "steps": [
        "中央正方形邊長為 x-2，因此面積 (x-2)²=x²-4x+4。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-4x+4",
          "truth": true,
          "reason": "圖示切除位置確認兩方向各減 2。"
        },
        {
          "choice": "x²-4",
          "truth": false,
          "reason": "誤用平方差。"
        },
        {
          "choice": "x²-2x+4",
          "truth": false,
          "reason": "中間項少一倍。"
        },
        {
          "choice": "x²+4x+4",
          "truth": false,
          "reason": "切除卻使面積增加。"
        }
      ],
      "misconceptionTarget": "由圖讀邊長減量錯",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "邊長為抽象長度單位，面積為平方單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「用切割圖理解差平方」且四個選項以同一表示層級作答；逐項重算後只有「x²-4x+4」成立。",
      "boundaryAudit": "x>2。",
      "difficultyReason": "素養：用切割圖理解差平方，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "必須讀取圖中兩個寬 2 的切除方向，才能判定中央邊長與面積。",
      "visualMode": "svg",
      "figureId": "u10-fig-square-difference-area",
      "drawingSpecId": "u10-fig-square-difference-area",
      "semanticReviewRef": "u10-s010-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f435cbb9358dc354aa6cd986135568c644c2cdf8954b266d2c72d1a15e97c30b"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s010-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (4x-3)²，並指出尾項為何仍是正數。",
      "requiredWork": [
        "套用差平方。",
        "解釋 (-3)×(-3)。"
      ],
      "standardSolution": [
        "(4x-3)²=16x²-24x+9。",
        "尾項來自 (-3)(-3)=+9，因此為正。"
      ],
      "alternativeMethods": [
        "可展開 (4x-3)(4x-3) 顯示兩交叉項與尾項。"
      ],
      "reasoningSteps": [
        "(4x-3)²=16x²-24x+9。",
        "尾項來自 (-3)(-3)=+9，因此為正。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "結果及尾項符號說明全對。"
        },
        {
          "score": 2,
          "criteria": "結果正確但無符號說明。"
        },
        {
          "score": 1,
          "criteria": "首項或中間項正確但尾項負號錯。"
        },
        {
          "score": 0,
          "criteria": "誤寫 16x²-9 且無方法。"
        }
      ],
      "partialCreditRules": [
        "若只漏中間係數 2，給 1 分。"
      ],
      "followThroughPolicy": "尾項若早期寫 -9，但能正確說明負負得正自我修正，不扣分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫結果最高 2 分。",
      "commonErrorTargets": [
        "理解並運用 (a-b)^2=a^2-2ab+b^2"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立展開得 16x²-12x-12x+9。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9f21e0066873178186cb0c07a14887f81395fe944bc7f676d519611925f550fe"
    },
    {
      "questionId": "u10-s010-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 199²，要求使用差的平方公式並展示每一項。",
      "requiredWork": [
        "選擇基準 200。",
        "寫出三項。"
      ],
      "standardSolution": [
        "199²=(200-1)²。",
        "=200²-2·200·1+1²=40000-400+1=39601。"
      ],
      "alternativeMethods": [
        "可用直式驗算，但主要解法必須呈現差平方。"
      ],
      "reasoningSteps": [
        "199²=(200-1)²。",
        "=200²-2·200·1+1²=40000-400+1=39601。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "公式過程與 39601 正確。"
        },
        {
          "score": 2,
          "criteria": "方法正確但單一算術錯。"
        },
        {
          "score": 1,
          "criteria": "只寫 (200-1)² 或漏中間項。"
        },
        {
          "score": 0,
          "criteria": "無合理過程。"
        }
      ],
      "partialCreditRules": [
        "基準不同但仍正確使用差平方可接受。"
      ],
      "followThroughPolicy": "若 40000-400 算錯，後續一致可給 2 分。",
      "unitAndNotationRules": "純數無單位。",
      "answerOnlyPolicy": "只寫 39601，最高 1 分，因題目指定方法。",
      "commonErrorTargets": [
        "理解並運用 (a-b)^2=a^2-2ab+b^2"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立計算 199×199=39601。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ff781a361fa66f50ee71316e39ed516d99856c65054d6e40041546ea339aa037"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s010-v001-review",
      "questionId": "u10-s010-v001",
      "questionContentSha256": "aba4b38606cb1f02a64b2c2862aafa1173a3c30b0f698db9376b1d8fe92eeece",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(x−5)(x−5)=x²−5x−5x+25=x²−10x+25；原式漏掉兩個−5x形成的中間項。",
      "derivedAnswer": "漏掉−10x，正確為x²−10x+25",
      "storedAnswer": "漏掉−10x，正確為x²−10x+25",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「漏掉−10x，正確為x²−10x+25」成立；其他三項分別因：平方常數仍是25。；除了常數外還缺中間項。；交叉項應為負，不是正。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "每選項同時含錯誤說明與結果，只有一項完整。",
        "alternateReading": "題幹明確要求「診斷差的平方中遺漏的中間項」，沒有第二種合理所求。"
      },
      "difficultyReason": "基礎：診斷差的平方中遺漏的中間項。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u10-s010-v001 中央修訂後獨立重算：(x−5)(x−5)=x²−5x−5x+25=x²−10x+25；原式漏掉兩個−5x形成的中間項。 四個選項逐項核對，唯一正解為「漏掉−10x，正確為x²−10x+25」；其餘選項排除理由為：平方常數仍是25。；除了常數外還缺中間項。；交叉項應為負，不是正。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "b36ac5d68c6832194c1b2741a28692af8328e833dcaa5ea828d34188648b8ee1"
    },
    {
      "reviewId": "u10-s010-v002-review",
      "questionId": "u10-s010-v002",
      "questionContentSha256": "4e02d3bf9951ed69b6f28df3ee7a1f96ae161d676f32d70164ccd73c37ad20de",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(a-b)(a-b)=a²-2ab+b²。",
      "derivedAnswer": "a²-2ab+b²",
      "storedAnswer": "a²-2ab+b²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：a²-2ab+b²：公式正確。；a²-b²：漏中間項且尾號錯。；a²-ab-b²：中間係數與尾號錯。；a²+2ab+b²：這是和平方。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「差平方的尾項符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：辨認差平方公式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列何者等於 (a-b)²？」獨立重算：(a-b)(a-b)=a²-2ab+b²。 正解「a²-2ab+b²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "aaca82728d382122737504935937024f43bf6f5cc56491cf3f713e38688bc4e6"
    },
    {
      "reviewId": "u10-s010-v003-review",
      "questionId": "u10-s010-v003",
      "questionContentSha256": "f6521d5351436bbb84579cbd31962836476d7400dfbe729b47f44bcbc2e029d0",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(2x)²-2(2x)(3)+3²=4x²-12x+9。",
      "derivedAnswer": "4x²-12x+9",
      "storedAnswer": "4x²-12x+9",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4x²-6x+9：中間項少一倍。；2x²-12x+9：首項係數未平方。；4x²-12x+9：係數平方、中間兩倍乘積與尾平方都要計算。；4x²-9：誤用平方差。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「係數平方與中間項錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：含係數差平方，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (2x-3)²。」獨立重算：(2x)²-2(2x)(3)+3²=4x²-12x+9。 正解「4x²-12x+9」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "91c002e3cd6a818e217ff56841d7132f345d4b0272f08bd859abf6d228f874c9"
    },
    {
      "reviewId": "u10-s010-v004-review",
      "questionId": "u10-s010-v004",
      "questionContentSha256": "e54633eab1624e1136dc8cfe6f396f5f96fe77ea76c70389b2dd440ce6d40e6e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(3y)²-2(3y)(4)+4²=9y²-24y+16。",
      "derivedAnswer": "9y²-24y+16",
      "storedAnswer": "9y²-24y+16",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：9y²-12y+16：中間項少一倍。；6y²-24y+16：首項係數錯。；9y²+24y+16：中間項符號錯。；9y²-24y+16：三部分符號依差平方公式。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「中間項係數或符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：標準差平方，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (3y-4)²。」獨立重算：(3y)²-2(3y)(4)+4²=9y²-24y+16。 正解「9y²-24y+16」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "ed107dfec32dfd518f16356416b6354c3deb37fa2d10e50cc51023a011297068"
    },
    {
      "reviewId": "u10-s010-v005-review",
      "questionId": "u10-s010-v005",
      "questionContentSha256": "03a00b0480c2a69b36d2ced2aefc293dbe3cfc4ac66570ea9c048aaac1673492",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "-2k=-16 得 k=8，且 k²=64。",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：8：8 正確。；16：把 2k 當 k。；-8：符號判讀錯。；4：中間項只 -8x。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「反向比較中間項係數錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：由展開式反求尾數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (x-k)²=x²-16x+64，則 k 為何？」獨立重算：-2k=-16 得 k=8，且 k²=64。 正解「8」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "bdd633c48241cb2eeae0e0a763e1ea2c247fb74a204fa805197fddeb0aaa90d4"
    },
    {
      "reviewId": "u10-s010-v006-review",
      "questionId": "u10-s010-v006",
      "questionContentSha256": "ca4ec5fa6cd6778c43fd31c4e15eec01204e506e985b3a50d9ff6df4f54cd2f7",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "中間項為 -2×100×3=-600。",
      "derivedAnswer": "-600",
      "storedAnswer": "-600",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：600：符號錯誤。；-300：漏乘 2。；-600：-600 正確。；300：漏乘 2 且符號錯。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「差平方中間項的符號或倍數錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：辨認差平方中間項，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「將 (100-3)² 展開為 100²-2·100·3+3²，其中中間項的值為何？」獨立重算：中間項為 -2×100×3=-600。 正解「-600」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "9be77c8179a27576e573b800304c3c9cfc00c22fc1e3f6f8437f3d5f1f84e16f"
    },
    {
      "reviewId": "u10-s010-v007-review",
      "questionId": "u10-s010-v007",
      "questionContentSha256": "cce19df1b932eec64d6c25145d661e86784a984b8bd07013bbcc26ce502a7159",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "第一式 x²-2x+1，第二式 x²-6x+9；相減得 4x-8。",
      "derivedAnswer": "4x-8",
      "storedAnswer": "4x-8",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-4x+8：相減方向顛倒。；2x²-8x+10：把兩式相加。；4x+8：常數符號錯。；4x-8：4x-8 正確。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「兩個差平方相減時外層負號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：平方式相減，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (x-1)²-(x-3)²。」獨立重算：第一式 x²-2x+1，第二式 x²-6x+9；相減得 4x-8。 正解「4x-8」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8db025ba7cc3cd414706c1cdcfaa3ba73afda552ec45540b4fba7e70024d58ee"
    },
    {
      "reviewId": "u10-s010-v008-review",
      "questionId": "u10-s010-v008",
      "questionContentSha256": "c66d0523cc8a8b15c00c2b13899d102ffc09a8b523c9f8a52f2c3ff812238306",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "a²=4，但中間項 -2a=-4，得 a=2。",
      "derivedAnswer": "2",
      "storedAnswer": "2",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-2：會得到 +4x。；2：a=2 正確。；4：首項 16x²。；±2：±2 未考慮中間項符號。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只由 a² 判斷而忽略中間項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由展開式判係數符號，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (ax-1)²=4x²-4x+1，則 a 為何？」獨立重算：a²=4，但中間項 -2a=-4，得 a=2。 正解「2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "5ccf4cce3ece354e43c3d9719f3fd3319f2901a99a1fca3ae63059ef44410e12"
    },
    {
      "reviewId": "u10-s010-v009-review",
      "questionId": "u10-s010-v009",
      "questionContentSha256": "383f7f99370f9c6f0b162137499ab68b4e4c5c0dce0b7412248ae4e0ff454c89",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "原式可重組為 [(x-y)-2]²，所以 A=x-y。",
      "derivedAnswer": "x-y",
      "storedAnswer": "x-y",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x：漏 y。；x-y：x-y 正確。；y：漏 x。；x+y：改變原式符號。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「整體代換時漏負號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：差平方的整體辨認，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「將 (x-y-2)² 視為 (A-2)²，A 應為何？」獨立重算：原式可重組為 [(x-y)-2]²，所以 A=x-y。 正解「x-y」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8d895f18a2967256c662b79796f1c989441b4d0de417addbab565c697a419399"
    },
    {
      "reviewId": "u10-s010-v010-review",
      "questionId": "u10-s010-v010",
      "questionContentSha256": "d0daea2da0356b2c081cea6ce3806b8ea4b41bc49ae39a6aa955301907863086",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "新邊長 x-2，面積 (x-2)²=x²-4x+4。",
      "derivedAnswer": "x²-4x+4 平方公尺",
      "storedAnswer": "x²-4x+4 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-4 平方公尺：誤用平方差。；x²-2x+4 平方公尺：中間項少一倍。；x²+4x+4 平方公尺：符號反向。；x²-4x+4 平方公尺：縮短邊長後整體平方。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "實際正方形要求 x>2。",
        "alternateReading": "常見誤讀「把邊長縮短直接轉成面積減 4」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：縮短後的新面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "縮短的是每一條邊，必須先形成新邊長 x-2 再平方。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「正方形原邊長 x 公尺，每邊縮短 2 公尺。新面積為何？」獨立重算：新邊長 x-2，面積 (x-2)²=x²-4x+4。 正解「x²-4x+4 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "2838f2c0609d4b46a01331657b4864375c4c85671ac5a4b0cb9ba221f20a321c"
    },
    {
      "reviewId": "u10-s010-v011-review",
      "questionId": "u10-s010-v011",
      "questionContentSha256": "59fa8648140e5d54cd958b1778ea53927ee476742b1b5472cf03db0ac465796e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "四周各縮 1 使邊長減少 2，成為 38 公尺；38²=1444。",
      "derivedAnswer": "1444 平方公尺",
      "storedAnswer": "1444 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：1521 平方公尺：這是 39²，只縮一側。；1600 平方公尺：原面積未縮。；1444 平方公尺：1444 正確。；1681 平方公尺：這是 41²。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "內縮後邊長 38>0。",
        "alternateReading": "常見誤讀「把四周內縮 1 誤解為邊長只減 1」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：內縮邊界的面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "幾何語句「四邊向內各縮 1」決定新邊長為 40-2，而非 39。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一塊邊長 40 公尺的正方形土地，四邊向內各縮 1 公尺形成新正方形，新面積為何？」獨立重算：四周各縮 1 使邊長減少 2，成為 38 公尺；38²=1444。 正解「1444 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "d2193c8ac1df6f0eef50fb03ef70fa8229af7dd8f3b4143ef5f5af107b4f0dab"
    },
    {
      "reviewId": "u10-s010-v012-review",
      "questionId": "u10-s010-v012",
      "questionContentSha256": "f435cbb9358dc354aa6cd986135568c644c2cdf8954b266d2c72d1a15e97c30b",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "中央正方形邊長為 x-2，因此面積 (x-2)²=x²-4x+4。",
      "derivedAnswer": "x²-4x+4",
      "storedAnswer": "x²-4x+4",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-4x+4：圖示切除位置確認兩方向各減 2。；x²-4：誤用平方差。；x²-2x+4：中間項少一倍。；x²+4x+4：切除卻使面積增加。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "邊長為抽象長度單位，面積為平方單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x>2。",
        "alternateReading": "常見誤讀「由圖讀邊長減量錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：用切割圖理解差平方，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "必須讀取圖中兩個寬 2 的切除方向，才能判定中央邊長與面積。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「圖示正方形原邊長 x，右側與下側各切去寬 2 的長條後，中央剩餘正方形面積為何？」獨立重算：中央正方形邊長為 x-2，因此面積 (x-2)²=x²-4x+4。 正解「x²-4x+4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a7afbcf59b47f186f87fbc23e2d490a7e998bace46390f69f0d9c54744d4727d"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u10-fig-square-difference-area",
      "unitId": "u10",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canvas": {
        "width": "360",
        "height": "360"
      },
      "viewBox": "0 0 360 360",
      "drawingSpecification": "外正方形邊長 x，右側與下側各標示寬 2，中央未切除正方形邊長為 x-2。",
      "exactCoordinates": [
        "outer rect (40,40,280,280)",
        "right cut boundary x=270",
        "bottom cut boundary y=270"
      ],
      "visibleLineRules": "外框使用 3px 實線；內部分割或內框依圖使用 2px 實線或虛線。",
      "hiddenLineRules": "本單元平面圖無隱藏線。",
      "labelsAndPositions": [
        "outer side x",
        "cut widths 2",
        "central remaining region"
      ],
      "tickMarks": "無刻度；尺寸以文字標示。",
      "units": "依圖標示公尺，或使用抽象長度單位。",
      "arrowsAndSymbols": "尺寸線端點使用簡單箭頭；未使用角度符號。",
      "toScale": false,
      "visualInferenceWarning": "圖形不按比例，切除寬度只能依標示 2 判讀。",
      "altText": "邊長 x 的正方形右側與下側切去寬 2 的長條，中央剩餘正方形。",
      "svgTitle": "邊長 x 的正方形切除寬 2 長條",
      "svgDesc": "外正方形邊長 x，右側與下側各標示寬 2，中央未切除正方形邊長為 x-2。",
      "mobileReadabilityReview": "在 360px 寬度下主要標籤字級至少 18px，線條與文字不重疊。",
      "answerLeakageReview": "圖僅提供題幹已知尺寸或未知區域，不直接標示正確選項或完整答案。",
      "geometryTokenAssertions": [
        "SVG 含唯一 title 與 desc。",
        "viewBox 與畫布尺寸已宣告。",
        "所有文字標籤位於 viewBox 內。",
        "外框閉合，分割線端點落在外框。"
      ],
      "questionReferences": [
        "u10-s010-v012"
      ],
      "svgPath": "figures/u10/u10-fig-square-difference-area.svg",
      "contentSha256": "644db8216138e9c4285de97a6efdb240925bbc9016c61c9a7f77937b26a7a6d4"
    }
  ]
};
