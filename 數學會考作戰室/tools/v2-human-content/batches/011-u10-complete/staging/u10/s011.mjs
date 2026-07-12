// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s011-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-formulas",
    "skillId": "difference-of-squares-expand",
    "lockedTitle": "平方差公式",
    "title": "平方差公式：一和一差使交叉項抵消",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能辨認共軛因式 (a+b)(a-b)。",
      "能展開為 a²-b² 並反向檢查。",
      "能用公式做數值心算與面積差。"
    ],
    "prerequisites": [
      "square-difference-formula"
    ],
    "prerequisiteBridge": "先備技能 square-difference-formula 已建立下一步所需概念；本節專注於辨認並運用 (a+b)(a-b)=a^2-b^2。",
    "glossary": [
      {
        "term": "共軛因式",
        "definition": "首項相同、尾項相反的一對二項式。"
      },
      {
        "term": "平方差",
        "definition": "兩個平方相減的形式 a²-b²。"
      },
      {
        "term": "抵消",
        "definition": "+ab 與 -ab 相加為 0。"
      }
    ],
    "notation": [
      {
        "symbol": "(a+b)(a−b)",
        "meaning": "a²−b²。"
      },
      {
        "symbol": "a²−b²",
        "meaning": "可反向看成 (a+b)(a−b)。"
      }
    ],
    "conceptNarrative": [
      "展開 (a+b)(a-b) 得 a²-ab+ab-b²，中間項抵消。",
      "必須是首項相同且第二項互為相反數，才能直接套公式。",
      "公式結果只有兩項，是平方相減。",
      "數值上可把 51×49 看成 (50+1)(50-1)。"
    ],
    "formalDefinitions": [
      {
        "name": "平方差公式",
        "statement": "(a+b)(a-b)=a²-b²。"
      }
    ],
    "formulas": [
      {
        "formula": "(a+b)(a-b)=a²-b²",
        "conditions": [
          "兩因式首項相同、尾項互為相反數"
        ],
        "meaning": "交叉項抵消。"
      }
    ],
    "nonApplicableCases": [
      "(a+b)(a+b) 不是平方差。",
      "(a+b)(c-b) 若 a≠c 不能直接套用。",
      "a²+b² 不能在實數國中範圍拆成同型共軛因式。",
      "結果次序與符號要對應 a²-b²。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認兩括號首項完全相同。",
        "check": "完成此步後，確認內容仍符合「辨認並運用 (a+b)(a-b)=a^2-b^2」。"
      },
      {
        "step": 2,
        "instruction": "確認尾項大小相同、符號相反。",
        "check": "完成此步後，確認內容仍符合「辨認並運用 (a+b)(a-b)=a^2-b^2」。"
      },
      {
        "step": 3,
        "instruction": "平方共同首項 a。",
        "check": "完成此步後，確認內容仍符合「辨認並運用 (a+b)(a-b)=a^2-b^2」。"
      },
      {
        "step": 4,
        "instruction": "減去尾項 b 的平方。",
        "check": "完成此步後，確認內容仍符合「辨認並運用 (a+b)(a-b)=a^2-b^2」。"
      },
      {
        "step": 5,
        "instruction": "必要時展開檢查交叉項是否抵消。",
        "check": "完成此步後，確認內容仍符合「辨認並運用 (a+b)(a-b)=a^2-b^2」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "展開 (x+6)(x−6)。",
        "solutionSteps": [
          "共同首項 x，尾項 ±6。"
        ],
        "answer": "x²-36。"
      },
      {
        "exampleId": "L2",
        "prompt": "展開 (3x+2)(3x−2)。",
        "solutionSteps": [
          "(3x)²−2²。"
        ],
        "answer": "9x²-4。"
      },
      {
        "exampleId": "L3",
        "prompt": "計算 73×67。",
        "solutionSteps": [
          "(70+3)(70−3)=4900−9。"
        ],
        "answer": "4891。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "結果寫 a²+b²",
        "why": "忘記尾項乘積 b·(-b) 為負",
        "correction": "尾項乘積是 -b²。"
      },
      {
        "mistake": "把不共軛的兩式套公式",
        "why": "只看到兩個括號",
        "correction": "同時檢查首項相同與尾項相反。"
      },
      {
        "mistake": "把 (2x)² 寫 2x²",
        "why": "係數未平方",
        "correction": "應為 4x²。"
      }
    ],
    "selfCheck": [
      "我是否能能辨認共軛因式 (a+b)(a-b)？",
      "我是否能能展開為 a²-b² 並反向檢查？",
      "我是否能能用公式做數值心算與面積差？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "共軛因式相乘得到平方差。",
      "交叉項完全抵消。",
      "結果是首平方減尾平方。",
      "套用前先檢查兩個結構條件。"
    ],
    "connections": {
      "previous": "上一技能 差的平方公式 提供本節所需工具。",
      "next": [
        "下一節混合辨認三個乘法公式，重點是先看結構再選工具。"
      ]
    },
    "figureReferences": [
      "u10-fig-difference-squares-rectangle"
    ],
    "accessibility": {
      "figureAltTextsRequired": true,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s011-v001",
        "u10-s011-v002",
        "u10-s011-v003",
        "u10-s011-v004",
        "u10-s011-v005",
        "u10-s011-v006",
        "u10-s011-v007",
        "u10-s011-v008",
        "u10-s011-v009",
        "u10-s011-v010",
        "u10-s011-v011",
        "u10-s011-v012"
      ],
      "constructedResponseIds": [
        "u10-s011-cr001",
        "u10-s011-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「平方差公式：一和一差使交叉項抵消」：定義、3 個例題、錯誤推理與下一技能銜接均針對 difference-of-squares-expand；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "9e8b83e18f7d033ece43a269a46655b697a3d10361a579a648ae42e6c1fec30e"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s011-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (x+4)(x−4) 時，為什麼不會留下 x 的一次項？",
      "givenConditions": [
        "兩因式的常數互為相反數"
      ],
      "target": "解釋平方差公式中交叉項抵消",
      "choices": [
        "因為x²與16互相抵消",
        "因為兩個常數都等於0",
        "因為−4x與+4x相加為0",
        "因為所有含x的項都可以刪除"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "四項乘積為 x²−4x+4x−16，其中 −4x 與 +4x 互為相反數，相加為0，因此結果是x²−16。",
        "derivedChoice": "因為−4x與+4x相加為0",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "列出兩個交叉乘積，檢查它們的符號與係數。",
      "steps": [
        "列出四個乘積。",
        "辨認−4x與+4x。",
        "合併相反項為0。"
      ],
      "optionAnalysis": [
        {
          "choice": "因為x²與16互相抵消",
          "truth": false,
          "reason": "x²與16不是同類項。"
        },
        {
          "choice": "因為兩個常數都等於0",
          "truth": false,
          "reason": "常數不是0。"
        },
        {
          "choice": "因為−4x與+4x相加為0",
          "truth": true,
          "reason": "交叉項−4x與+4x抵消。"
        },
        {
          "choice": "因為所有含x的項都可以刪除",
          "truth": false,
          "reason": "x²仍須保留。"
        }
      ],
      "misconceptionTarget": "只記公式結果，無法說明交叉項消失。",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題目問一次項消失原因，答案唯一。",
      "boundaryAudit": "題目問一次項消失原因，答案唯一。",
      "difficultyReason": "基礎：從乘積結構解釋平方差。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s011-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "be4830bc762e6dc3a6d8b8602a8f0d66b36b9d31abc5b6767c1ad4c08480a99a"
    },
    {
      "questionId": "u10-s011-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "下列何者等於 (a+b)(a-b)？",
      "givenConditions": [],
      "target": "辨認平方差公式",
      "choices": [
        "a²-2ab+b²",
        "a²-b²",
        "a²+2ab+b²",
        "a²+ab-b²"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "展開後 -ab+ab 抵消，留下 a²-b²。",
        "derivedChoice": "a²-b²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "共軛因式產生平方差。",
      "steps": [
        "展開後 -ab+ab 抵消，留下 a²-b²。"
      ],
      "optionAnalysis": [
        {
          "choice": "a²-2ab+b²",
          "truth": false,
          "reason": "這是差平方。"
        },
        {
          "choice": "a²-b²",
          "truth": true,
          "reason": "公式正確。"
        },
        {
          "choice": "a²+2ab+b²",
          "truth": false,
          "reason": "這是和平方。"
        },
        {
          "choice": "a²+ab-b²",
          "truth": false,
          "reason": "交叉項未抵消。"
        }
      ],
      "misconceptionTarget": "保留錯誤中間項",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認平方差公式」且四個選項以同一表示層級作答；逐項重算後只有「a²-b²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：辨認平方差公式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s011-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "38ae157ecbffdf6c32afaa24f92a9040d804bd5d5a1bdcf74797c2e6e81b339f"
    },
    {
      "questionId": "u10-s011-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (2x+3)(2x-3)。",
      "givenConditions": [],
      "target": "含係數平方差",
      "choices": [
        "4x²-6x-9",
        "2x²-9",
        "4x²+9",
        "4x²-9"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "(2x)²-3²=4x²-9。",
        "derivedChoice": "4x²-9",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "共同首項與相反尾項符合公式。",
      "steps": [
        "(2x)²-3²=4x²-9。"
      ],
      "optionAnalysis": [
        {
          "choice": "4x²-6x-9",
          "truth": false,
          "reason": "多出中間項。"
        },
        {
          "choice": "2x²-9",
          "truth": false,
          "reason": "首項係數未平方。"
        },
        {
          "choice": "4x²+9",
          "truth": false,
          "reason": "尾項符號錯。"
        },
        {
          "choice": "4x²-9",
          "truth": true,
          "reason": "共同首項與相反尾項符合公式。"
        }
      ],
      "misconceptionTarget": "係數平方或尾號錯",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含係數平方差」且四個選項以同一表示層級作答；逐項重算後只有「4x²-9」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：含係數平方差，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s011-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b6764631d4a6a579451dea736f6a8a6f773657b229c964cdd16678fdce744ea0"
    },
    {
      "questionId": "u10-s011-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 54×46。",
      "givenConditions": [],
      "target": "平方差數值心算",
      "choices": [
        "2484",
        "2916",
        "2500",
        "2496"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "54×46=(50+4)(50-4)=2500-16=2484。",
        "derivedChoice": "2484",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "以 50 為共同中心使用平方差。",
      "steps": [
        "54×46=(50+4)(50-4)=2500-16=2484。"
      ],
      "optionAnalysis": [
        {
          "choice": "2484",
          "truth": true,
          "reason": "2484 正確。"
        },
        {
          "choice": "2916",
          "truth": false,
          "reason": "54²。"
        },
        {
          "choice": "2500",
          "truth": false,
          "reason": "只算 50²。"
        },
        {
          "choice": "2496",
          "truth": false,
          "reason": "減 4 而非 16。"
        }
      ],
      "misconceptionTarget": "心算時尾數未平方",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「平方差數值心算」且四個選項以同一表示層級作答；逐項重算後只有「2484」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：平方差數值心算，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s011-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b8bd0a3092e3fe95f58452c8086cd1b4756e944d4a294bd1d9a2ca2c7685aea1"
    },
    {
      "questionId": "u10-s011-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (3y+5)(3y-5)。",
      "givenConditions": [],
      "target": "標準平方差",
      "choices": [
        "6y²-25",
        "9y²-25",
        "9y²-30y+25",
        "9y²+25"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "(3y)²-5²=9y²-25。",
        "derivedChoice": "9y²-25",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "共軛使中間項抵消。",
      "steps": [
        "(3y)²-5²=9y²-25。"
      ],
      "optionAnalysis": [
        {
          "choice": "6y²-25",
          "truth": false,
          "reason": "首項係數未平方。"
        },
        {
          "choice": "9y²-25",
          "truth": true,
          "reason": "共軛使中間項抵消。"
        },
        {
          "choice": "9y²-30y+25",
          "truth": false,
          "reason": "誤用差平方。"
        },
        {
          "choice": "9y²+25",
          "truth": false,
          "reason": "尾項符號錯。"
        }
      ],
      "misconceptionTarget": "把共軛相乘誤作整體平方",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「標準平方差」且四個選項以同一表示層級作答；逐項重算後只有「9y²-25」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：標準平方差，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s011-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "504876ea732f7e084abea59e711bbea232748b017c86596daaa2c24e0e3719fc"
    },
    {
      "questionId": "u10-s011-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (x+k)(x-k)=x²-81，則 k 的正值為何？",
      "givenConditions": [],
      "target": "由平方差反求尾數",
      "choices": [
        "8",
        "18",
        "81",
        "9"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "k²=81，題目取正值，所以 k=9。",
        "derivedChoice": "9",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "由尾平方反求正數。",
      "steps": [
        "k²=81，題目取正值，所以 k=9。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": false,
          "reason": "8²=64。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "18² 過大。"
        },
        {
          "choice": "81",
          "truth": false,
          "reason": "把平方值直接當 k。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "9 正確。"
        }
      ],
      "misconceptionTarget": "忘記開平方或忽略正值限制",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由平方差反求尾數」且四個選項以同一表示層級作答；逐項重算後只有「9」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：由平方差反求尾數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s011-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d9bf6b443b9060adb793b0c21d6ecf887cbe9e009046b26337f31a0415c76718"
    },
    {
      "questionId": "u10-s011-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (x+2)(x-2)+(x+3)(x-3)。",
      "givenConditions": [],
      "target": "兩個平方差相加",
      "choices": [
        "2x²-13",
        "2x²-1",
        "x²-13",
        "2x²+13"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "兩項分別為 x²-4 與 x²-9，相加得 2x²-13。",
        "derivedChoice": "2x²-13",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "連續套兩次平方差再合併。",
      "steps": [
        "兩項分別為 x²-4 與 x²-9，相加得 2x²-13。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²-13",
          "truth": true,
          "reason": "2x²-13 正確。"
        },
        {
          "choice": "2x²-1",
          "truth": false,
          "reason": "常數 -4+(-9) 算錯。"
        },
        {
          "choice": "x²-13",
          "truth": false,
          "reason": "漏一個 x²。"
        },
        {
          "choice": "2x²+13",
          "truth": false,
          "reason": "尾平方符號錯。"
        }
      ],
      "misconceptionTarget": "多個平方差常數合併錯",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「兩個平方差相加」且四個選項以同一表示層級作答；逐項重算後只有「2x²-13」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：兩個平方差相加，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s011-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "41ed5118de53e248cb3fa108bdd0bacdf985879d1da49caf2fb3660b020e84af"
    },
    {
      "questionId": "u10-s011-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (ax+1)(ax-1)=16x²-1，則 a 為何？",
      "givenConditions": [],
      "target": "平方差參數的雙解",
      "choices": [
        "-4",
        "2",
        "±4",
        "4"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "a²=16，所以 a=±4；中間項本來就抵消，無法由式子區分正負。",
        "derivedChoice": "±4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "完整比較後保留兩個可能值。",
      "steps": [
        "a²=16，所以 a=±4。",
        "中間項本來就抵消，無法由式子區分正負。"
      ],
      "optionAnalysis": [
        {
          "choice": "-4",
          "truth": false,
          "reason": "只取負值無依據。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "a² 不等於 4。"
        },
        {
          "choice": "±4",
          "truth": true,
          "reason": "±4 正確。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "只取正值無題目限制。"
        }
      ],
      "misconceptionTarget": "平方係數反求時漏負解",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「平方差參數的雙解」且四個選項以同一表示層級作答；逐項重算後只有「±4」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：平方差參數的雙解，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s011-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e5c4176a720b90717310ac91e0121aa86b9d2ce49d6c925f31b741b1a3256aaf"
    },
    {
      "questionId": "u10-s011-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 [(x+1)+2][(x+1)-2]。",
      "givenConditions": [],
      "target": "整體代換平方差",
      "choices": [
        "x²-3",
        "x²+2x+5",
        "x²+2x-3",
        "x²-2x-3"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "把 A=x+1，得 A²-4=(x+1)²-4=x²+2x-3。",
        "derivedChoice": "x²+2x-3",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先用平方差，再展開 A²。",
      "steps": [
        "把 A=x+1，得 A²-4=(x+1)²-4=x²+2x-3。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-3",
          "truth": false,
          "reason": "漏展開 A² 中間項。"
        },
        {
          "choice": "x²+2x+5",
          "truth": false,
          "reason": "尾常數符號錯。"
        },
        {
          "choice": "x²+2x-3",
          "truth": true,
          "reason": "x²+2x-3 正確。"
        },
        {
          "choice": "x²-2x-3",
          "truth": false,
          "reason": "把 A 誤成 x-1。"
        }
      ],
      "misconceptionTarget": "整體平方後漏中間項",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「整體代換平方差」且四個選項以同一表示層級作答；逐項重算後只有「x²+2x-3」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：整體代換平方差，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s011-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d75944ced47c7aae2d05f80e58a172c2a838b7ac312c6c1637f05f098ae33ce8"
    },
    {
      "questionId": "u10-s011-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "長方形長 (x+5) 公尺、寬 (x-5) 公尺，面積為何？",
      "givenConditions": [],
      "target": "共軛邊長面積",
      "choices": [
        "x²-25 平方公尺",
        "x²+25 平方公尺",
        "x²-10x+25 平方公尺",
        "x²+10x-25 平方公尺"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "面積=(x+5)(x-5)=x²-25。",
        "derivedChoice": "x²-25 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩邊是共軛長度，交叉項抵消。",
      "steps": [
        "面積=(x+5)(x-5)=x²-25。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-25 平方公尺",
          "truth": true,
          "reason": "x²-25 正確。"
        },
        {
          "choice": "x²+25 平方公尺",
          "truth": false,
          "reason": "尾項符號錯。"
        },
        {
          "choice": "x²-10x+25 平方公尺",
          "truth": false,
          "reason": "誤用差平方。"
        },
        {
          "choice": "x²+10x-25 平方公尺",
          "truth": false,
          "reason": "保留錯誤中間項。"
        }
      ],
      "misconceptionTarget": "把共軛邊長乘積誤作平方",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「共軛邊長面積」且四個選項以同一表示層級作答；逐項重算後只有「x²-25 平方公尺」成立。",
      "boundaryAudit": "寬 x-5>0，所以 x>5。",
      "difficultyReason": "素養：共軛邊長面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "長與寬一增一減，幾何關係決定使用共軛乘積。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s011-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4c578cb29fe80c8e9476db9ecf313d1d31ecf7c6208801f52a33c3da93f41a41"
    },
    {
      "questionId": "u10-s011-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某店以 203 元買進一批單位商品，又以 197 元為比較基準。203×197 可快速算成多少？",
      "givenConditions": [],
      "target": "等距數值乘法",
      "choices": [
        "40009",
        "39999",
        "40600",
        "39991"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "203×197=(200+3)(200-3)=40000-9=39991。",
        "derivedChoice": "39991",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩數距 200 相同，適用平方差。",
      "steps": [
        "203×197=(200+3)(200-3)=40000-9=39991。"
      ],
      "optionAnalysis": [
        {
          "choice": "40009",
          "truth": false,
          "reason": "把 -9 看 +9。"
        },
        {
          "choice": "39999",
          "truth": false,
          "reason": "只減 1。"
        },
        {
          "choice": "40600",
          "truth": false,
          "reason": "直接把 203×200 粗估。"
        },
        {
          "choice": "39991",
          "truth": true,
          "reason": "39991 正確。"
        }
      ],
      "misconceptionTarget": "未辨認等距基準或尾平方",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題只計算數值乘積；若解讀為金額乘積，單位需另依情境定義。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「等距數值乘法」且四個選項以同一表示層級作答；逐項重算後只有「39991」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：等距數值乘法，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "價格數值同時位於 200 兩側且等距，這個結構是選擇平方差心算的必要線索。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s011-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5cab335839386d8f4dc92d1c1c4d946fe98bc2c73af86c2b5718f9692f29f471"
    },
    {
      "questionId": "u10-s011-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "圖示長方形兩邊為 x+5 與 x-5。若 x=12 公尺，面積為何？",
      "givenConditions": [],
      "target": "圖示共軛長方形求值",
      "choices": [
        "144 平方公尺",
        "119 平方公尺",
        "169 平方公尺",
        "84 平方公尺"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "面積=(12+5)(12-5)=17×7=119，也可算 12²-5²=144-25=119。",
        "derivedChoice": "119 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "圖示兩邊是共軛長度。",
      "steps": [
        "面積=(12+5)(12-5)=17×7=119，也可算 12²-5²=144-25=119。"
      ],
      "optionAnalysis": [
        {
          "choice": "144 平方公尺",
          "truth": false,
          "reason": "只算 x²。"
        },
        {
          "choice": "119 平方公尺",
          "truth": true,
          "reason": "119 正確。"
        },
        {
          "choice": "169 平方公尺",
          "truth": false,
          "reason": "只算較長邊平方。"
        },
        {
          "choice": "84 平方公尺",
          "truth": false,
          "reason": "把 12×7。"
        }
      ],
      "misconceptionTarget": "只看圖中一條邊或漏尾平方",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「圖示共軛長方形求值」且四個選項以同一表示層級作答；逐項重算後只有「119 平方公尺」成立。",
      "boundaryAudit": "x=12>5，兩邊均為正。",
      "difficultyReason": "素養：圖示共軛長方形求值，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "必須從圖中讀出長與寬分別為 x+5、x-5，才能建立面積乘積。",
      "visualMode": "svg",
      "figureId": "u10-fig-difference-squares-rectangle",
      "drawingSpecId": "u10-fig-difference-squares-rectangle",
      "semanticReviewRef": "u10-s011-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c167f01bde8d1194041476a83242e70994c83651042b96834da38fcf2e93638b"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s011-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (5x+2)(5x-2)，並說明中間項為何消失。",
      "requiredWork": [
        "辨認共軛。",
        "展開或套公式。",
        "解釋交叉項抵消。"
      ],
      "standardSolution": [
        "(5x+2)(5x-2)=25x²-10x+10x-4=25x²-4。",
        "-10x 與 +10x 相加為 0。"
      ],
      "alternativeMethods": [
        "直接用 (a+b)(a-b)=a²-b²。"
      ],
      "reasoningSteps": [
        "(5x+2)(5x-2)=25x²-10x+10x-4=25x²-4。",
        "-10x 與 +10x 相加為 0。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "結果與抵消說明完整。"
        },
        {
          "score": 2,
          "criteria": "結果正確但未說明中間項。"
        },
        {
          "score": 1,
          "criteria": "辨認平方差但係數平方錯。"
        },
        {
          "score": 0,
          "criteria": "誤用和/差平方且無修正。"
        }
      ],
      "partialCreditRules": [
        "展開法與公式法均可。"
      ],
      "followThroughPolicy": "若只把 (5x)² 寫 5x²，其餘正確，給 1 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫 25x²-4，最高 2 分。",
      "commonErrorTargets": [
        "辨認並運用 (a+b)(a-b)=a^2-b^2"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立確認交叉項 -10x、+10x。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a06a06ab03946c023e3614ce0acfaf288eacf01b90becda1cf7a73788dcd1833"
    },
    {
      "questionId": "u10-s011-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 1004×996，要求用平方差公式，並說明共同中心。",
      "requiredWork": [
        "找兩數平均。",
        "改寫成一和一差。",
        "計算平方差。"
      ],
      "standardSolution": [
        "共同中心為 1000，兩數分別是 1000+4、1000-4。",
        "乘積=1000²-4²=1000000-16=999984。"
      ],
      "alternativeMethods": [
        "可用 (1004+996)/2=1000 找中心。"
      ],
      "reasoningSteps": [
        "共同中心為 1000，兩數分別是 1000+4、1000-4。",
        "乘積=1000²-4²=1000000-16=999984。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "中心、公式與答案全對。"
        },
        {
          "score": 2,
          "criteria": "公式正確但算術一處錯。"
        },
        {
          "score": 1,
          "criteria": "找到中心或正確改寫但未算完。"
        },
        {
          "score": 0,
          "criteria": "使用不相關公式。"
        }
      ],
      "partialCreditRules": [
        "若中心說明省略但改寫清楚，仍可滿分。"
      ],
      "followThroughPolicy": "若 4² 算錯，後續一致給 2 分。",
      "unitAndNotationRules": "純數乘積無單位。",
      "answerOnlyPolicy": "只寫 999984，最高 1 分。",
      "commonErrorTargets": [
        "辨認並運用 (a+b)(a-b)=a^2-b^2"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立用 1004(1000-4)=1004000-4016=999984。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5747080d46f9ef5bbec54f86322fe07f0c28dea3c984922472d652985de4e4dd"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s011-v001-review",
      "questionId": "u10-s011-v001",
      "questionContentSha256": "be4830bc762e6dc3a6d8b8602a8f0d66b36b9d31abc5b6767c1ad4c08480a99a",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "四項乘積為 x²−4x+4x−16，其中 −4x 與 +4x 互為相反數，相加為0，因此結果是x²−16。",
      "derivedAnswer": "因為−4x與+4x相加為0",
      "storedAnswer": "因為−4x與+4x相加為0",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「因為−4x與+4x相加為0」成立；其他三項分別因：x²與16不是同類項。；常數不是0。；x²仍須保留。",
        "undefinedSymbol": "題幹用語均在「平方差公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "題目問一次項消失原因，答案唯一。",
        "alternateReading": "題幹明確要求「解釋平方差公式中交叉項抵消」，沒有第二種合理所求。"
      },
      "difficultyReason": "基礎：從乘積結構解釋平方差。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u10-s011-v001 中央修訂後獨立重算：四項乘積為 x²−4x+4x−16，其中 −4x 與 +4x 互為相反數，相加為0，因此結果是x²−16。 四個選項逐項核對，唯一正解為「因為−4x與+4x相加為0」；其餘選項排除理由為：x²與16不是同類項。；常數不是0。；x²仍須保留。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "f614a3919d28bed574ee7d95de897354ef1b2ea9fa0d7f1b05420b7bdbf04290"
    },
    {
      "reviewId": "u10-s011-v002-review",
      "questionId": "u10-s011-v002",
      "questionContentSha256": "38ae157ecbffdf6c32afaa24f92a9040d804bd5d5a1bdcf74797c2e6e81b339f",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "展開後 -ab+ab 抵消，留下 a²-b²。",
      "derivedAnswer": "a²-b²",
      "storedAnswer": "a²-b²",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：a²-2ab+b²：這是差平方。；a²-b²：公式正確。；a²+2ab+b²：這是和平方。；a²+ab-b²：交叉項未抵消。",
        "undefinedSymbol": "題幹用語均在「平方差公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「保留錯誤中間項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：辨認平方差公式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列何者等於 (a+b)(a-b)？」獨立重算：展開後 -ab+ab 抵消，留下 a²-b²。 正解「a²-b²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "e4aefeb0d1789c9d49fed2ef612028ad737ec521ceb685bdda024f3fd6d1dc5d"
    },
    {
      "reviewId": "u10-s011-v003-review",
      "questionId": "u10-s011-v003",
      "questionContentSha256": "b6764631d4a6a579451dea736f6a8a6f773657b229c964cdd16678fdce744ea0",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(2x)²-3²=4x²-9。",
      "derivedAnswer": "4x²-9",
      "storedAnswer": "4x²-9",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4x²-6x-9：多出中間項。；2x²-9：首項係數未平方。；4x²+9：尾項符號錯。；4x²-9：共同首項與相反尾項符合公式。",
        "undefinedSymbol": "題幹用語均在「平方差公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「係數平方或尾號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：含係數平方差，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (2x+3)(2x-3)。」獨立重算：(2x)²-3²=4x²-9。 正解「4x²-9」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "7400483fd2c65a6e92b2d9ab5ab63323bfd890bb5b8281513574f23d5bb1e178"
    },
    {
      "reviewId": "u10-s011-v004-review",
      "questionId": "u10-s011-v004",
      "questionContentSha256": "b8bd0a3092e3fe95f58452c8086cd1b4756e944d4a294bd1d9a2ca2c7685aea1",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "54×46=(50+4)(50-4)=2500-16=2484。",
      "derivedAnswer": "2484",
      "storedAnswer": "2484",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2484：2484 正確。；2916：54²。；2500：只算 50²。；2496：減 4 而非 16。",
        "undefinedSymbol": "題幹用語均在「平方差公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「心算時尾數未平方」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：平方差數值心算，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「計算 54×46。」獨立重算：54×46=(50+4)(50-4)=2500-16=2484。 正解「2484」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "3ba753b508c82e2e9dcfc73496e3cbbec04ad4821b8db74b113c0792784690a2"
    },
    {
      "reviewId": "u10-s011-v005-review",
      "questionId": "u10-s011-v005",
      "questionContentSha256": "504876ea732f7e084abea59e711bbea232748b017c86596daaa2c24e0e3719fc",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(3y)²-5²=9y²-25。",
      "derivedAnswer": "9y²-25",
      "storedAnswer": "9y²-25",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：6y²-25：首項係數未平方。；9y²-25：共軛使中間項抵消。；9y²-30y+25：誤用差平方。；9y²+25：尾項符號錯。",
        "undefinedSymbol": "題幹用語均在「平方差公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把共軛相乘誤作整體平方」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：標準平方差，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (3y+5)(3y-5)。」獨立重算：(3y)²-5²=9y²-25。 正解「9y²-25」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "39188933a2ab6424b56153c27b4c7bc6830657e550383070d94490bd3d987974"
    },
    {
      "reviewId": "u10-s011-v006-review",
      "questionId": "u10-s011-v006",
      "questionContentSha256": "d9bf6b443b9060adb793b0c21d6ecf887cbe9e009046b26337f31a0415c76718",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "k²=81，題目取正值，所以 k=9。",
      "derivedAnswer": "9",
      "storedAnswer": "9",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：8：8²=64。；18：18² 過大。；81：把平方值直接當 k。；9：9 正確。",
        "undefinedSymbol": "題幹用語均在「平方差公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「忘記開平方或忽略正值限制」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：由平方差反求尾數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (x+k)(x-k)=x²-81，則 k 的正值為何？」獨立重算：k²=81，題目取正值，所以 k=9。 正解「9」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "c3e10314ad536a48cb315a5a7b449715e024a56c84d41ce2c90f853c531ef5ee"
    },
    {
      "reviewId": "u10-s011-v007-review",
      "questionId": "u10-s011-v007",
      "questionContentSha256": "41ed5118de53e248cb3fa108bdd0bacdf985879d1da49caf2fb3660b020e84af",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "兩項分別為 x²-4 與 x²-9，相加得 2x²-13。",
      "derivedAnswer": "2x²-13",
      "storedAnswer": "2x²-13",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²-13：2x²-13 正確。；2x²-1：常數 -4+(-9) 算錯。；x²-13：漏一個 x²。；2x²+13：尾平方符號錯。",
        "undefinedSymbol": "題幹用語均在「平方差公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「多個平方差常數合併錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：兩個平方差相加，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (x+2)(x-2)+(x+3)(x-3)。」獨立重算：兩項分別為 x²-4 與 x²-9，相加得 2x²-13。 正解「2x²-13」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "fa43ee359c85f84cfb671213ad1c43587419df6efedc91f95120763cf9506510"
    },
    {
      "reviewId": "u10-s011-v008-review",
      "questionId": "u10-s011-v008",
      "questionContentSha256": "e5c4176a720b90717310ac91e0121aa86b9d2ce49d6c925f31b741b1a3256aaf",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "a²=16，所以 a=±4；中間項本來就抵消，無法由式子區分正負。",
      "derivedAnswer": "±4",
      "storedAnswer": "±4",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-4：只取負值無依據。；2：a² 不等於 4。；±4：±4 正確。；4：只取正值無題目限制。",
        "undefinedSymbol": "題幹用語均在「平方差公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「平方係數反求時漏負解」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：平方差參數的雙解，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (ax+1)(ax-1)=16x²-1，則 a 為何？」獨立重算：a²=16，所以 a=±4；中間項本來就抵消，無法由式子區分正負。 正解「±4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "dcb7160d2795111ea12ee240df8f4ba42728fe4c7edd3237ab8a085e80c4bf61"
    },
    {
      "reviewId": "u10-s011-v009-review",
      "questionId": "u10-s011-v009",
      "questionContentSha256": "d75944ced47c7aae2d05f80e58a172c2a838b7ac312c6c1637f05f098ae33ce8",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "把 A=x+1，得 A²-4=(x+1)²-4=x²+2x-3。",
      "derivedAnswer": "x²+2x-3",
      "storedAnswer": "x²+2x-3",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-3：漏展開 A² 中間項。；x²+2x+5：尾常數符號錯。；x²+2x-3：x²+2x-3 正確。；x²-2x-3：把 A 誤成 x-1。",
        "undefinedSymbol": "題幹用語均在「平方差公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「整體平方後漏中間項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：整體代換平方差，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 [(x+1)+2][(x+1)-2]。」獨立重算：把 A=x+1，得 A²-4=(x+1)²-4=x²+2x-3。 正解「x²+2x-3」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "ec43d5a5b863f01345891ab63c6d8c1e2c78e9e5cbbde0d9e1ca53b5da1f140e"
    },
    {
      "reviewId": "u10-s011-v010-review",
      "questionId": "u10-s011-v010",
      "questionContentSha256": "4c578cb29fe80c8e9476db9ecf313d1d31ecf7c6208801f52a33c3da93f41a41",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "面積=(x+5)(x-5)=x²-25。",
      "derivedAnswer": "x²-25 平方公尺",
      "storedAnswer": "x²-25 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-25 平方公尺：x²-25 正確。；x²+25 平方公尺：尾項符號錯。；x²-10x+25 平方公尺：誤用差平方。；x²+10x-25 平方公尺：保留錯誤中間項。",
        "undefinedSymbol": "題幹用語均在「平方差公式」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "寬 x-5>0，所以 x>5。",
        "alternateReading": "常見誤讀「把共軛邊長乘積誤作平方」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：共軛邊長面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "長與寬一增一減，幾何關係決定使用共軛乘積。",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「長方形長 (x+5) 公尺、寬 (x-5) 公尺，面積為何？」獨立重算：面積=(x+5)(x-5)=x²-25。 正解「x²-25 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a8ae2ca2407fc165d94812b1ea3e84929ecb3c1338bab57df40bf6a99186c1e0"
    },
    {
      "reviewId": "u10-s011-v011-review",
      "questionId": "u10-s011-v011",
      "questionContentSha256": "5cab335839386d8f4dc92d1c1c4d946fe98bc2c73af86c2b5718f9692f29f471",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "203×197=(200+3)(200-3)=40000-9=39991。",
      "derivedAnswer": "39991",
      "storedAnswer": "39991",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：40009：把 -9 看 +9。；39999：只減 1。；40600：直接把 203×200 粗估。；39991：39991 正確。",
        "undefinedSymbol": "題幹用語均在「平方差公式」講義定義。",
        "unitConflict": "本題只計算數值乘積；若解讀為金額乘積，單位需另依情境定義。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未辨認等距基準或尾平方」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：等距數值乘法，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "價格數值同時位於 200 兩側且等距，這個結構是選擇平方差心算的必要線索。",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某店以 203 元買進一批單位商品，又以 197 元為比較基準。203×197 可快速算成多少？」獨立重算：203×197=(200+3)(200-3)=40000-9=39991。 正解「39991」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "2563676dbbe21caf1a5f1e98c7a8db0061947e7c538b8d82ad828e7997dd47f2"
    },
    {
      "reviewId": "u10-s011-v012-review",
      "questionId": "u10-s011-v012",
      "questionContentSha256": "c167f01bde8d1194041476a83242e70994c83651042b96834da38fcf2e93638b",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "面積=(12+5)(12-5)=17×7=119，也可算 12²-5²=144-25=119。",
      "derivedAnswer": "119 平方公尺",
      "storedAnswer": "119 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：144 平方公尺：只算 x²。；119 平方公尺：119 正確。；169 平方公尺：只算較長邊平方。；84 平方公尺：把 12×7。",
        "undefinedSymbol": "題幹用語均在「平方差公式」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x=12>5，兩邊均為正。",
        "alternateReading": "常見誤讀「只看圖中一條邊或漏尾平方」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：圖示共軛長方形求值，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "必須從圖中讀出長與寬分別為 x+5、x-5，才能建立面積乘積。",
      "prerequisiteCheck": "使用先備技能：square-difference-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「圖示長方形兩邊為 x+5 與 x-5。若 x=12 公尺，面積為何？」獨立重算：面積=(12+5)(12-5)=17×7=119，也可算 12²-5²=144-25=119。 正解「119 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "60521c25790030dab239e7cf341da6a9720fde83d424017608ef7fb1af6582b0"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u10-fig-difference-squares-rectangle",
      "unitId": "u10",
      "skillId": "difference-of-squares-expand",
      "skillSlot": "s011",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canvas": {
        "width": "420",
        "height": "260"
      },
      "viewBox": "0 0 420 260",
      "drawingSpecification": "長方形上邊標示 x+5 公尺，左邊標示 x-5 公尺，用於平方差面積。",
      "exactCoordinates": [
        "rectangle (70,55,290,150)",
        "horizontal dimension y=38",
        "vertical dimension x=48"
      ],
      "visibleLineRules": "外框使用 3px 實線；內部分割或內框依圖使用 2px 實線或虛線。",
      "hiddenLineRules": "本單元平面圖無隱藏線。",
      "labelsAndPositions": [
        "x+5 公尺",
        "x-5 公尺"
      ],
      "tickMarks": "無刻度；尺寸以文字標示。",
      "units": "依圖標示公尺，或使用抽象長度單位。",
      "arrowsAndSymbols": "尺寸線端點使用簡單箭頭；未使用角度符號。",
      "toScale": false,
      "visualInferenceWarning": "圖形不按比例，面積必須使用標示邊長計算。",
      "altText": "長方形的長為 x+5 公尺，寬為 x-5 公尺。",
      "svgTitle": "邊長 x+5 與 x-5 的長方形",
      "svgDesc": "長方形上邊標示 x+5 公尺，左邊標示 x-5 公尺，用於平方差面積。",
      "mobileReadabilityReview": "在 360px 寬度下主要標籤字級至少 18px，線條與文字不重疊。",
      "answerLeakageReview": "圖僅提供題幹已知尺寸或未知區域，不直接標示正確選項或完整答案。",
      "geometryTokenAssertions": [
        "SVG 含唯一 title 與 desc。",
        "viewBox 與畫布尺寸已宣告。",
        "所有文字標籤位於 viewBox 內。",
        "外框閉合，分割線端點落在外框。"
      ],
      "questionReferences": [
        "u10-s011-v012"
      ],
      "svgPath": "figures/u10/u10-fig-difference-squares-rectangle.svg",
      "contentSha256": "e59174623efa45d1868c7665b645a3032356863c6d5ce9bfbbf40a7d057b210f"
    }
  ]
};
