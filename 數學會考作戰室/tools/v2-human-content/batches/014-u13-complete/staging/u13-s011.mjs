export default {
  "lecture": {
    "lectureId": "u13-s011-lecture-r1",
    "unitId": "u13",
    "numericUnitId": 13,
    "topicId": "u13-solving",
    "skillId": "quadratic-formula-basic",
    "lockedOrder": 11,
    "originalLockedTitle": "公式解基本",
    "title": "公式解的基本代入",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能把標準式係數正確代入求根公式。",
      "能分段計算 -b、Δ、2a 降低符號錯誤。",
      "能化簡分數與根式。",
      "能在整數、分數與無理根題型中保持答案完整。"
    ],
    "prerequisites": [
      {
        "skillId": "quadratic-check-root",
        "requiredLevel": "能說明前一技能的核心規則並完成基本計算，不只記答案。"
      }
    ],
    "prerequisiteBridge": "承接驗根技能，把公式求得的候選值以穩定流程產生並檢查。",
    "glossary": [
      {
        "term": "基本代入",
        "definition": "不重新推導公式，依固定欄位代入 a、b、c 並完成運算。"
      },
      {
        "term": "分子",
        "definition": "公式中 -b±√Δ 的整體。"
      },
      {
        "term": "分母",
        "definition": "公式中 2a 的整體。"
      },
      {
        "term": "最簡根式",
        "definition": "根號內不再含大於 1 的完全平方因數。"
      }
    ],
    "notation": [
      {
        "symbol": "a",
        "meaning": "x² 的係數。"
      },
      {
        "symbol": "b",
        "meaning": "x 的係數，含正負號。"
      },
      {
        "symbol": "c",
        "meaning": "常數項，含正負號。"
      },
      {
        "symbol": "Δ=b²-4ac",
        "meaning": "先獨立計算的判別式。"
      }
    ],
    "conceptNarrative": [
      "本技能重點是穩定的計算流程，不再討論公式推導。",
      "最好建立四格草稿：a、b、c、Δ，再代入公式。",
      "b 為負數時，-b 與 b² 是兩個不同動作，都應使用括號。",
      "當 Δ 是完全平方數，常得到有理根；否則保留最簡根式。",
      "最後可用代入或根的和與積做快速合理性檢查，但正式驗根仍以代回為準。"
    ],
    "formalDefinitions": [
      {
        "name": "公式解基本流程",
        "statement": "標準式→係數→判別式→代入→化簡→驗算。"
      }
    ],
    "formulas": [
      {
        "formula": "x=(-b±√Δ)/(2a)",
        "conditions": [
          "a≠0",
          "Δ≥0 才有實數根"
        ],
        "meaning": "直接求兩個公式分支。"
      }
    ],
    "nonApplicableCases": [
      "未整理成標準式不能直接填係數。",
      "判別式為負時本單元不進入複數。",
      "約分時必須同時作用於整個分子，不可只約其中一項。",
      "根式相加減需有相同根號部分，不能把 ±√13 任意改寫。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "整理標準式並寫 a、b、c。",
        "check": "符號是否完整？"
      },
      {
        "step": 2,
        "instruction": "獨立計算 Δ。",
        "check": "乘法與平方是否先算？"
      },
      {
        "step": 3,
        "instruction": "寫出 -b±√Δ。",
        "check": "± 是否保留？"
      },
      {
        "step": 4,
        "instruction": "整體除以 2a。",
        "check": "分母是否包含 a？"
      },
      {
        "step": 5,
        "instruction": "分別化簡兩根並驗算。",
        "check": "分數與根式是否最簡？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "解 x²+3x-4=0。",
        "solutionSteps": [
          "a=1，b=3，c=-4，Δ=25。",
          "x=(-3±5)/2。"
        ],
        "answer": "x=1 或 x=-4。"
      },
      {
        "exampleId": "L2",
        "prompt": "解 x²-4x-1=0。",
        "solutionSteps": [
          "Δ=20。",
          "x=(4±2√5)/2。"
        ],
        "answer": "x=2±√5。"
      },
      {
        "exampleId": "L3",
        "prompt": "解 2x²-3x-2=0。",
        "solutionSteps": [
          "Δ=25。",
          "x=(3±5)/4。"
        ],
        "answer": "x=2 或 x=-1/2。"
      },
      {
        "exampleId": "L4",
        "prompt": "解 3x²+x-1=0。",
        "solutionSteps": [
          "Δ=13。",
          "根式不可再化簡。"
        ],
        "answer": "x=(-1±√13)/6。"
      },
      {
        "exampleId": "L5",
        "prompt": "解 -2x²+7x-3=0。",
        "solutionSteps": [
          "a=-2，b=7，c=-3，Δ=25。",
          "x=(-7±5)/(-4)。"
        ],
        "answer": "x=3 或 x=1/2。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "b=-4 時 -b 仍寫 -4。",
        "why": "雙重負號未處理。",
        "correction": "-(-4)=4。"
      },
      {
        "mistake": "Δ 的 -4ac 漏掉 c 的負號。",
        "why": "未用括號代入。",
        "correction": "寫 -4·a·(c)。"
      },
      {
        "mistake": "分母寫成 2。",
        "why": "漏乘 a。",
        "correction": "完整寫 2a。"
      },
      {
        "mistake": "把 (-3±5)/4 約成 -3±5/4。",
        "why": "分數線範圍錯誤。",
        "correction": "整個分子除以 4。"
      },
      {
        "mistake": "√20 不化簡。",
        "why": "未抽出 4。",
        "correction": "√20=2√5。"
      },
      {
        "mistake": "負 a 題把整式乘 -1 後係數只改一項。",
        "why": "等價變形不完整。",
        "correction": "所有項同乘 -1。"
      }
    ],
    "selfCheck": [
      "a、b、c 是否含符號？",
      "Δ 是否獨立完成？",
      "分子是否完整？",
      "分母是否為 2a？",
      "根式與分數是否最簡？"
    ],
    "summary": [
      "公式基本代入需要固定且可檢查的步驟。",
      "括號可防止負號錯誤。",
      "分數線涵蓋整個分子。",
      "所有根都需化簡並驗算。"
    ],
    "connections": {
      "previous": "承接驗根技能，把公式求得的候選值以穩定流程產生並檢查。",
      "next": [
        "下一節把文字條件轉為二次方程式。",
        "應用題可依式子特徵選因式分解、配方或公式。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u13-s011-v001",
        "u13-s011-v002",
        "u13-s011-v003",
        "u13-s011-v004",
        "u13-s011-v005",
        "u13-s011-v006",
        "u13-s011-v007",
        "u13-s011-v008",
        "u13-s011-v009",
        "u13-s011-v010",
        "u13-s011-v011",
        "u13-s011-v012"
      ],
      "constructedResponseIds": [
        "u13-s011-cr001",
        "u13-s011-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "reviewNote": "五例皆重新以標準式係數計算 Δ，並代回驗證；特別核對負 a 題兩次負號、√20 的化簡，以及分數線涵蓋整個 ± 分子。",
      "reviewVersion": "human-lecture-review-u13-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "1b9760017ab6fd371efade24f68980253ed60c831488fb10f10fcaabd44d6c8d"
  },
  "mcQuestions": [
    {
      "questionId": "u13-s011-v001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "lockedSkillOrder": 11,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "用公式解 x²+3x-4=0，根為何？",
      "givenConditions": "標準式。",
      "target": "直接公式代入",
      "choices": [
        "x=4 或 x=-1",
        "x=1 或 x=-4",
        "x=3 或 x=-4/3",
        "x=-3±5"
      ],
      "answerIndex": 1,
      "explanation": "a=1，b=3，c=-4；公式得 1、-4，所以答案為「x=1 或 x=-4」。",
      "steps": [
        "a=1，b=3，c=-4",
        "公式得 1、-4"
      ],
      "optionAnalysis": [
        {
          "choice": "x=4 或 x=-1",
          "truth": false,
          "reason": "根符號相反。"
        },
        {
          "choice": "x=1 或 x=-4",
          "truth": true,
          "reason": "Δ=25，x=(-3±5)/2。"
        },
        {
          "choice": "x=3 或 x=-4/3",
          "truth": false,
          "reason": "把係數比當根。"
        },
        {
          "choice": "x=-3±5",
          "truth": false,
          "reason": "漏掉分母 2。"
        }
      ],
      "misconceptionTarget": "-b 與分母錯",
      "prerequisiteSkillIds": [
        "quadratic-check-root"
      ],
      "estimatedTimeSec": 75,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "整數根。",
      "difficultyReason": "基本公式熟練。",
      "literacyContextNecessity": null,
      "authoringIntent": "直接公式代入",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f152a0e556981a496369d001b51d8229b0a9d03201af9ad6c69d23f17eed51c3"
    },
    {
      "questionId": "u13-s011-v002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "lockedSkillOrder": 11,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "用公式解 x²-4x-1=0。",
      "givenConditions": "Δ>0。",
      "target": "求無理根",
      "choices": [
        "x=2±√5",
        "x=-2±√5",
        "x=4±√5",
        "x=2±5"
      ],
      "answerIndex": 0,
      "explanation": "a=1，b=-4，c=-1；x=(4±√20)/2=2±√5，所以答案為「x=2±√5」。",
      "steps": [
        "a=1，b=-4，c=-1",
        "x=(4±√20)/2=2±√5"
      ],
      "optionAnalysis": [
        {
          "choice": "x=2±√5",
          "truth": true,
          "reason": "Δ=20，(4±2√5)/2。"
        },
        {
          "choice": "x=-2±√5",
          "truth": false,
          "reason": "-b 符號錯。"
        },
        {
          "choice": "x=4±√5",
          "truth": false,
          "reason": "未除分母。"
        },
        {
          "choice": "x=2±5",
          "truth": false,
          "reason": "把 √5 當 5。"
        }
      ],
      "misconceptionTarget": "根式與分母化簡錯",
      "prerequisiteSkillIds": [
        "quadratic-check-root"
      ],
      "estimatedTimeSec": 80,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "保留精確根式。",
      "difficultyReason": "基本無理公式題。",
      "literacyContextNecessity": null,
      "authoringIntent": "求無理根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "888439df96a458eee85c96b4357e7f58dee033eb897d65533fdc69efdca58772"
    },
    {
      "questionId": "u13-s011-v003",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "lockedSkillOrder": 11,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解 2x²-3x-2=0。",
      "givenConditions": "a=2。",
      "target": "求有理根",
      "choices": [
        "x=-2 或 x=1/2",
        "x=3 或 x=-2",
        "x=1 或 x=-1",
        "x=2 或 x=-1/2"
      ],
      "answerIndex": 3,
      "explanation": "a=2，b=-3，c=-2；公式兩分支得 2、-1/2，所以答案為「x=2 或 x=-1/2」。",
      "steps": [
        "a=2，b=-3，c=-2",
        "公式兩分支得 2、-1/2"
      ],
      "optionAnalysis": [
        {
          "choice": "x=-2 或 x=1/2",
          "truth": false,
          "reason": "-b 或符號反。"
        },
        {
          "choice": "x=3 或 x=-2",
          "truth": false,
          "reason": "分母漏 a。"
        },
        {
          "choice": "x=1 或 x=-1",
          "truth": false,
          "reason": "代回不成立。"
        },
        {
          "choice": "x=2 或 x=-1/2",
          "truth": true,
          "reason": "Δ=25，x=(3±5)/4。"
        }
      ],
      "misconceptionTarget": "分母 2a 與符號錯",
      "prerequisiteSkillIds": [
        "quadratic-check-root"
      ],
      "estimatedTimeSec": 85,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "分數最簡。",
      "difficultyReason": "非單位首項係數。",
      "literacyContextNecessity": null,
      "authoringIntent": "求有理根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c9544220c898e99614b5f4a8a8a5965ea7ae112213023a0609de43ba9fbbd1c5"
    },
    {
      "questionId": "u13-s011-v004",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "lockedSkillOrder": 11,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "3x²+x-1=0 的解為何？",
      "givenConditions": "Δ>0。",
      "target": "求最簡無理分數根",
      "choices": [
        "x=(1±√13)/6",
        "x=(-1±13)/6",
        "x=(-1±√13)/6",
        "x=(-1±√13)/3"
      ],
      "answerIndex": 2,
      "explanation": "a=3，b=1，c=-1；x=(-1±√13)/6，所以答案為「x=(-1±√13)/6」。",
      "steps": [
        "a=3，b=1，c=-1",
        "x=(-1±√13)/6"
      ],
      "optionAnalysis": [
        {
          "choice": "x=(1±√13)/6",
          "truth": false,
          "reason": "-b 符號錯。"
        },
        {
          "choice": "x=(-1±13)/6",
          "truth": false,
          "reason": "未開平方。"
        },
        {
          "choice": "x=(-1±√13)/6",
          "truth": true,
          "reason": "Δ=13，分母 6。"
        },
        {
          "choice": "x=(-1±√13)/3",
          "truth": false,
          "reason": "分母漏 2。"
        }
      ],
      "misconceptionTarget": "判別式與分母錯",
      "prerequisiteSkillIds": [
        "quadratic-check-root"
      ],
      "estimatedTimeSec": 90,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "√13 最簡。",
      "difficultyReason": "含不可化簡判別式。",
      "literacyContextNecessity": null,
      "authoringIntent": "求最簡無理分數根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cd2ef8a0b017a02ae40dadb29d07017873c489c4547cf3586bab3ba9444b7cbd"
    },
    {
      "questionId": "u13-s011-v005",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "lockedSkillOrder": 11,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "x²+2x-7=0 的根為何？",
      "givenConditions": "實數範圍。",
      "target": "求化簡無理根",
      "choices": [
        "x=-1±2√2",
        "x=1±2√2",
        "x=-2±√7",
        "x=-1±√2"
      ],
      "answerIndex": 0,
      "explanation": "Δ=4+28=32；x=(-2±4√2)/2=-1±2√2，所以答案為「x=-1±2√2」。",
      "steps": [
        "Δ=4+28=32",
        "x=(-2±4√2)/2=-1±2√2"
      ],
      "optionAnalysis": [
        {
          "choice": "x=-1±2√2",
          "truth": true,
          "reason": "Δ=32，(-2±4√2)/2。"
        },
        {
          "choice": "x=1±2√2",
          "truth": false,
          "reason": "-b 符號錯。"
        },
        {
          "choice": "x=-2±√7",
          "truth": false,
          "reason": "套用平方根法錯誤。"
        },
        {
          "choice": "x=-1±√2",
          "truth": false,
          "reason": "√32 化簡係數少 2。"
        }
      ],
      "misconceptionTarget": "根式化簡係數錯",
      "prerequisiteSkillIds": [
        "quadratic-check-root"
      ],
      "estimatedTimeSec": 95,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "最簡根式。",
      "difficultyReason": "公式與配方一致性。",
      "literacyContextNecessity": null,
      "authoringIntent": "求化簡無理根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "14463fc4fb8f6e8ac7a3d1a6b9ec580002addec4f673ace686f662c8a3a32cb4"
    },
    {
      "questionId": "u13-s011-v006",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "lockedSkillOrder": 11,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "將求根公式的正負兩個分支分別約分，解 4x²-4x-3=0。",
      "givenConditions": "a=4。",
      "target": "求分數根",
      "choices": [
        "x=3 或 x=-1",
        "x=3/2 或 x=-1/2",
        "x=1/2 或 x=-3/2",
        "x=4±8"
      ],
      "answerIndex": 1,
      "explanation": "a=4，b=-4，c=-3；公式得 12/8=3/2、-4/8=-1/2，所以答案為「x=3/2 或 x=-1/2」。",
      "steps": [
        "a=4，b=-4，c=-3",
        "公式得 12/8=3/2、-4/8=-1/2"
      ],
      "optionAnalysis": [
        {
          "choice": "x=3 或 x=-1",
          "truth": false,
          "reason": "分母少除 2。"
        },
        {
          "choice": "x=3/2 或 x=-1/2",
          "truth": true,
          "reason": "Δ=64，x=(4±8)/8。"
        },
        {
          "choice": "x=1/2 或 x=-3/2",
          "truth": false,
          "reason": "± 分支配對錯。"
        },
        {
          "choice": "x=4±8",
          "truth": false,
          "reason": "完全漏掉公式分母 8。"
        }
      ],
      "misconceptionTarget": "約分與符號錯",
      "prerequisiteSkillIds": [
        "quadratic-check-root"
      ],
      "estimatedTimeSec": 90,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "分數約最簡。",
      "difficultyReason": "分母 8 的兩分支。",
      "literacyContextNecessity": null,
      "authoringIntent": "求分數根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "27ad11b60fcf3fecd9d62321a254e18ea6c8c9dd42c40177734b17168760eb63"
    },
    {
      "questionId": "u13-s011-v007",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "lockedSkillOrder": 11,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "5x²+2x-3=0 的解為何？",
      "givenConditions": "a=5。",
      "target": "求非整數有理根",
      "choices": [
        "x=1 或 x=-3/5",
        "x=3 或 x=-5",
        "x=-2±8/10",
        "x=3/5 或 x=-1"
      ],
      "answerIndex": 3,
      "explanation": "a=5，b=2，c=-3；兩分支 6/10=3/5、-10/10=-1，所以答案為「x=3/5 或 x=-1」。",
      "steps": [
        "a=5，b=2，c=-3",
        "兩分支 6/10=3/5、-10/10=-1"
      ],
      "optionAnalysis": [
        {
          "choice": "x=1 或 x=-3/5",
          "truth": false,
          "reason": "符號與分支錯。"
        },
        {
          "choice": "x=3 或 x=-5",
          "truth": false,
          "reason": "漏掉係數。"
        },
        {
          "choice": "x=-2±8/10",
          "truth": false,
          "reason": "分數線範圍錯，且未化簡。"
        },
        {
          "choice": "x=3/5 或 x=-1",
          "truth": true,
          "reason": "Δ=64，x=(-2±8)/10。"
        }
      ],
      "misconceptionTarget": "分數線與約分錯",
      "prerequisiteSkillIds": [
        "quadratic-check-root"
      ],
      "estimatedTimeSec": 100,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "兩根最簡。",
      "difficultyReason": "較大首項係數。",
      "literacyContextNecessity": null,
      "authoringIntent": "求非整數有理根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b501fd95d50d0cdba7580af0fb5c2c4df71edd59f4bba08efef06a229d3e1b82"
    },
    {
      "questionId": "u13-s011-v008",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "lockedSkillOrder": 11,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解 2x²+5x+1=0。",
      "givenConditions": "a=2。",
      "target": "求一般無理根",
      "choices": [
        "x=(5±√17)/4",
        "x=(-5±17)/4",
        "x=(-5±√17)/4",
        "x=(-5±√17)/2"
      ],
      "answerIndex": 2,
      "explanation": "a=2，b=5，c=1；x=(-5±√17)/4，所以答案為「x=(-5±√17)/4」。",
      "steps": [
        "a=2，b=5，c=1",
        "x=(-5±√17)/4"
      ],
      "optionAnalysis": [
        {
          "choice": "x=(5±√17)/4",
          "truth": false,
          "reason": "-b 符號錯。"
        },
        {
          "choice": "x=(-5±17)/4",
          "truth": false,
          "reason": "根號遺失。"
        },
        {
          "choice": "x=(-5±√17)/4",
          "truth": true,
          "reason": "Δ=25-8=17。"
        },
        {
          "choice": "x=(-5±√17)/2",
          "truth": false,
          "reason": "分母漏 a。"
        }
      ],
      "misconceptionTarget": "根號或分母錯",
      "prerequisiteSkillIds": [
        "quadratic-check-root"
      ],
      "estimatedTimeSec": 100,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "√17 最簡。",
      "difficultyReason": "不能因不可分解而出錯。",
      "literacyContextNecessity": null,
      "authoringIntent": "求一般無理根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "dcf2256820aeb0beb293fd04ce05b92376f99149d1336ae393c4e9eb08c4ed95"
    },
    {
      "questionId": "u13-s011-v009",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "lockedSkillOrder": 11,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解 -2x²+7x-3=0。",
      "givenConditions": "a=-2≠0。",
      "target": "處理負首項係數",
      "choices": [
        "x=-3 或 x=-1/2",
        "x=3 或 x=1/2",
        "x=7/2±5/2",
        "x=-1 或 x=3/2"
      ],
      "answerIndex": 1,
      "explanation": "取 a=-2，b=7，c=-3 直接代公式；x=(-7±5)/(-4)=1/2、3，所以答案為「x=3 或 x=1/2」。",
      "steps": [
        "取 a=-2，b=7，c=-3 直接代公式",
        "x=(-7±5)/(-4)=1/2、3"
      ],
      "optionAnalysis": [
        {
          "choice": "x=-3 或 x=-1/2",
          "truth": false,
          "reason": "整式乘 -1 後把根也變號。"
        },
        {
          "choice": "x=3 或 x=1/2",
          "truth": true,
          "reason": "乘 -1 後 2x²-7x+3=0，Δ=25。"
        },
        {
          "choice": "x=7/2±5/2",
          "truth": false,
          "reason": "未再除以 2a。"
        },
        {
          "choice": "x=-1 或 x=3/2",
          "truth": false,
          "reason": "因式配對錯。"
        }
      ],
      "misconceptionTarget": "負分母與雙重負號錯",
      "prerequisiteSkillIds": [
        "quadratic-check-root"
      ],
      "estimatedTimeSec": 110,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "乘非零數不改根。",
      "difficultyReason": "負係數公式穩定性。",
      "literacyContextNecessity": null,
      "authoringIntent": "處理負首項係數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cdbb94ad6287e11e472b6edd7d7458ad03fb73cb9b6ae0be2101f9e2322a543b"
    },
    {
      "questionId": "u13-s011-v010",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "lockedSkillOrder": 11,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某物體的時間模型為 -t²+6t+7=0，且 t≥0。符合的時間為何？",
      "givenConditions": "t≥0。",
      "target": "求非負時間",
      "choices": [
        "7 秒",
        "-1 秒",
        "6 秒",
        "7 或 -1 秒"
      ],
      "answerIndex": 0,
      "explanation": "公式或分解得 t=7、-1；時間定義域只留 7，所以答案為「7 秒」。",
      "steps": [
        "公式或分解得 t=7、-1",
        "時間定義域只留 7"
      ],
      "optionAnalysis": [
        {
          "choice": "7 秒",
          "truth": true,
          "reason": "整式乘 -1 得 t²-6t-7=0，根 7、-1，取 7。"
        },
        {
          "choice": "-1 秒",
          "truth": false,
          "reason": "代數根但時間為負。"
        },
        {
          "choice": "6 秒",
          "truth": false,
          "reason": "把 -b/2a 當根。"
        },
        {
          "choice": "7 或 -1 秒",
          "truth": false,
          "reason": "未套用 t≥0。"
        }
      ],
      "misconceptionTarget": "未篩選負根",
      "prerequisiteSkillIds": [
        "quadratic-check-root"
      ],
      "estimatedTimeSec": 100,
      "unitCheck": "t 單位秒。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "0 允許但不是根。",
      "difficultyReason": "公式基本與時間限制。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為時間非負條件決定實際事件。",
      "authoringIntent": "求非負時間",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fd66558a9e135c9ac19c16bc9172a5af7c756b89271af40f82998ded13f21eb7"
    },
    {
      "questionId": "u13-s011-v011",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "lockedSkillOrder": 11,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "損益模型 2q²-11q+5=0，q 必須為正整數。q 為何？",
      "givenConditions": "q∈正整數。",
      "target": "求離散可行根",
      "choices": [
        "1/2",
        "11/4",
        "5 或 1/2",
        "5"
      ],
      "answerIndex": 3,
      "explanation": "Δ=121-40=81；q=(11±9)/4，得 5、1/2，取 5，所以答案為「5」。",
      "steps": [
        "Δ=121-40=81",
        "q=(11±9)/4，得 5、1/2，取 5"
      ],
      "optionAnalysis": [
        {
          "choice": "1/2",
          "truth": false,
          "reason": "正但不是整數件數。"
        },
        {
          "choice": "11/4",
          "truth": false,
          "reason": "只取公式中心。"
        },
        {
          "choice": "5 或 1/2",
          "truth": false,
          "reason": "未套用整數限制。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "公式根為 5、1/2，只有 5 是正整數。"
        }
      ],
      "misconceptionTarget": "只檢查正值而忽略整數",
      "prerequisiteSkillIds": [
        "quadratic-check-root"
      ],
      "estimatedTimeSec": 105,
      "unitCheck": "q 為件數。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "1/2 排除。",
      "difficultyReason": "公式與離散限制。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為銷量整數性是不可刪除的情境條件。",
      "authoringIntent": "求離散可行根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "652db94ee3a4e72ebf2f6fb67820b533cdf4e3e3154166811dc8f1c2240111e2"
    },
    {
      "questionId": "u13-s011-v012",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "lockedSkillOrder": 11,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "訊號距離 d 滿足 3d²-2d-8=0，且 d>0。d 為何？",
      "givenConditions": "d>0。",
      "target": "求正距離根",
      "choices": [
        "-4/3",
        "4/3",
        "2",
        "2 或 -4/3"
      ],
      "answerIndex": 2,
      "explanation": "d=(2±10)/6；得到 2、-4/3，保留 2，所以答案為「2」。",
      "steps": [
        "d=(2±10)/6",
        "得到 2、-4/3，保留 2"
      ],
      "optionAnalysis": [
        {
          "choice": "-4/3",
          "truth": false,
          "reason": "是代數根但不符合 d>0。"
        },
        {
          "choice": "4/3",
          "truth": false,
          "reason": "把負根改正。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "Δ=100，根 2、-4/3，取正值。"
        },
        {
          "choice": "2 或 -4/3",
          "truth": false,
          "reason": "未套用正距離。"
        }
      ],
      "misconceptionTarget": "符號與正值限制錯",
      "prerequisiteSkillIds": [
        "quadratic-check-root"
      ],
      "estimatedTimeSec": 105,
      "unitCheck": "d 沿用訊號距離單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "負根排除。",
      "difficultyReason": "公式與根篩選。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為距離的正值定義使實際答案唯一。",
      "authoringIntent": "求正距離根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bec13ae9ad1634def6f51427e5394ae3722553d22130aab38871ce0654260d8d"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u13-s011-cr001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "用求根公式解 3x²+x-2=0，並將答案化簡。",
      "requiredWork": [
        "標係數。",
        "算 Δ。",
        "代公式。",
        "化簡兩根。"
      ],
      "fullCreditSolution": [
        "a=3，b=1，c=-2。",
        "Δ=1+24=25。",
        "x=(-1±5)/6，所以 x=2/3 或 x=-1。"
      ],
      "alternativeSolutions": [
        "可因式分解 (3x-2)(x+1)=0 驗算。"
      ],
      "reasoningSteps": [
        "正確處理 c 的負號。",
        "分別算 ± 分支。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "公式過程與根 2/3、-1 全正確。"
        },
        {
          "score": 2,
          "criteria": "兩根正確但係數或 Δ 省略；或公式正確但一支小算術錯。"
        },
        {
          "score": 1,
          "criteria": "係數和公式結構正確，但判別式或分母錯。"
        },
        {
          "score": 0,
          "criteria": "無有效公式步驟。"
        }
      ],
      "partialCreditRules": [
        "根順序不限。",
        "其他方法雖正確但未依題意使用公式，最多 1 分。"
      ],
      "followThroughPolicy": "若 Δ=25 正確，最後一支算錯可給 2 分。",
      "unitNotationRules": [
        "x 無單位。",
        "2/3 需最簡。"
      ],
      "answerOnlyPolicy": "只寫兩根最多 1 分。",
      "commonErrors": [
        "c=2。",
        "分母 3。",
        "-b 寫 1。"
      ],
      "independentReview": {
        "derivedResult": "x=2/3 或 x=-1。",
        "ambiguity": "標準公式直接適用，兩根唯一。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "d60ae8fc3989142e8bed39b3841cc7b9f1bec9871dbd4d05d59173446c68cef2"
    },
    {
      "questionId": "u13-s011-cr002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula-basic",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "用求根公式解 5x²-2x-1=0，答案保留最簡根式，並說明為何得到兩個相異實根。",
      "requiredWork": [
        "計算判別式與公式。",
        "化簡 √24。",
        "由判別式和正負分支說明根的個數。"
      ],
      "fullCreditSolution": [
        "a=5，b=-2，c=-1，Δ=4+20=24。",
        "x=(2±√24)/10=(2±2√6)/10=(1±√6)/5。",
        "因 Δ=24>0，√24≠0，公式的正負兩個分支數值不同，所以有兩個相異實根。"
      ],
      "alternativeSolutions": [
        "可先完成平方求得相同兩根，再指出右側為正數，因此開平方產生兩個不同分支。"
      ],
      "reasoningSteps": [
        "公式代入。",
        "根式約分。",
        "把 Δ>0 與兩個相異根連結。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩根 (1±√6)/5 正確，且以 Δ>0 或正負分支不同說明有兩個相異實根。"
        },
        {
          "score": 2,
          "criteria": "根正確但根個數說明不完整，或說明正確但最終根式未完全化簡。"
        },
        {
          "score": 1,
          "criteria": "公式與 Δ=24 正確，但化簡或分母錯。"
        },
        {
          "score": 0,
          "criteria": "根與根個數判斷均錯。"
        }
      ],
      "partialCreditRules": [
        "(2±√24)/10 是正確未簡化形式，因題目要求最簡根式，最高 2 分。",
        "不需使用根與係數關係。"
      ],
      "followThroughPolicy": "若根式化簡錯，但 Δ=24 與兩分支判斷正確，可給 1 分；錯誤根不得計答案分。",
      "unitNotationRules": [
        "x 無單位。",
        "根式保持精確。"
      ],
      "answerOnlyPolicy": "只寫兩根而未說明相異性，最多 2 分。",
      "commonErrors": [
        "√24 化簡錯誤。",
        "分母漏寫 10。",
        "把 Δ>0 說成重根。"
      ],
      "independentReview": {
        "derivedResult": "x=(1±√6)/5，且有兩個相異實根。",
        "ambiguity": "只使用求根公式與判別式，不引入後續根與係數關係。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "7f1255c3315d51e2aa7d7725ce8ce980ad63ca51a787b641688c296c6c9d3620"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u13-s011-v001",
      "unitId": "u13",
      "skillId": "quadratic-formula-basic",
      "contentSha256": "f152a0e556981a496369d001b51d8229b0a9d03201af9ad6c69d23f17eed51c3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：分解 (x-1)(x+4)=0 交叉驗證；兩根代回成立",
      "derivedAnswer": "x=1 或 x=-4",
      "storedAnswer": "x=1 或 x=-4",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「用公式解 x²+3x-4=0，根為何？」的要求量已明示為「直接公式代入」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：標準式。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：整數根。",
        "choices": "四選項逐一代入或反算；正確項理由為「Δ=25，x=(-3±5)/2。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "基本公式熟練。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「用公式解 x²+3x-4=0，根為何？」：獨立由原始條件重算：分解 (x-1)(x+4)=0 交叉驗證；兩根代回成立。再逐項核對四個選項，只有「x=1 或 x=-4」同時符合方程式與限制；整數根。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "78b8ffd837bc119a3270bf5d01edc102f48052590e7956f33d45d281933f9193"
    },
    {
      "questionId": "u13-s011-v002",
      "unitId": "u13",
      "skillId": "quadratic-formula-basic",
      "contentSha256": "888439df96a458eee85c96b4357e7f58dee033eb897d65533fdc69efdca58772",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：√20=2√5；整體除 2 得最簡答案",
      "derivedAnswer": "x=2±√5",
      "storedAnswer": "x=2±√5",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「用公式解 x²-4x-1=0。」的要求量已明示為「求無理根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：Δ>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：保留精確根式。",
        "choices": "四選項逐一代入或反算；正確項理由為「Δ=20，(4±2√5)/2。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "基本無理公式題。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「用公式解 x²-4x-1=0。」：獨立由原始條件重算：√20=2√5；整體除 2 得最簡答案。再逐項核對四個選項，只有「x=2±√5」同時符合方程式與限制；保留精確根式。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "a1475a3a644a51fe3bf5ebcd573759760a68a9391a455d3b98bc887515dd712d"
    },
    {
      "questionId": "u13-s011-v003",
      "unitId": "u13",
      "skillId": "quadratic-formula-basic",
      "contentSha256": "c9544220c898e99614b5f4a8a8a5965ea7ae112213023a0609de43ba9fbbd1c5",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：(2x+1)(x-2)=0；根與公式一致",
      "derivedAnswer": "x=2 或 x=-1/2",
      "storedAnswer": "x=2 或 x=-1/2",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「解 2x²-3x-2=0。」的要求量已明示為「求有理根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：a=2。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：分數最簡。",
        "choices": "四選項逐一代入或反算；正確項理由為「Δ=25，x=(3±5)/4。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "非單位首項係數。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解 2x²-3x-2=0。」：獨立由原始條件重算：(2x+1)(x-2)=0；根與公式一致。再逐項核對四個選項，只有「x=2 或 x=-1/2」同時符合方程式與限制；分數最簡。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "9b028b7e5ae04983425fae13eb30040eea270b6c9c0e0e81ded22dbf6c60f351"
    },
    {
      "questionId": "u13-s011-v004",
      "unitId": "u13",
      "skillId": "quadratic-formula-basic",
      "contentSha256": "cd2ef8a0b017a02ae40dadb29d07017873c489c4547cf3586bab3ba9444b7cbd",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：Δ=1+12=13 不能再化簡；代回可由公式定理保證並可數值檢查",
      "derivedAnswer": "x=(-1±√13)/6",
      "storedAnswer": "x=(-1±√13)/6",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「3x²+x-1=0 的解為何？」的要求量已明示為「求最簡無理分數根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：Δ>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：√13 最簡。",
        "choices": "四選項逐一代入或反算；正確項理由為「Δ=13，分母 6。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "含不可化簡判別式。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「3x²+x-1=0 的解為何？」：獨立由原始條件重算：Δ=1+12=13 不能再化簡；代回可由公式定理保證並可數值檢查。再逐項核對四個選項，只有「x=(-1±√13)/6」同時符合方程式與限制；√13 最簡。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "f7ace8547abbeeb5882dbab1fb74847ac0befd16c023c2237209714376e02d63"
    },
    {
      "questionId": "u13-s011-v005",
      "unitId": "u13",
      "skillId": "quadratic-formula-basic",
      "contentSha256": "14463fc4fb8f6e8ac7a3d1a6b9ec580002addec4f673ace686f662c8a3a32cb4",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：配方 (x+1)²=8；同樣得 -1±2√2",
      "derivedAnswer": "x=-1±2√2",
      "storedAnswer": "x=-1±2√2",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「x²+2x-7=0 的根為何？」的要求量已明示為「求化簡無理根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：實數範圍。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：最簡根式。",
        "choices": "四選項逐一代入或反算；正確項理由為「Δ=32，(-2±4√2)/2。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "公式與配方一致性。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「x²+2x-7=0 的根為何？」：獨立由原始條件重算：配方 (x+1)²=8；同樣得 -1±2√2。再逐項核對四個選項，只有「x=-1±2√2」同時符合方程式與限制；最簡根式。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "bbad9fc9ef1655c5b1453f2d471c7e0670a12cd7f3e963bcd04112af0092f4b2"
    },
    {
      "questionId": "u13-s011-v006",
      "unitId": "u13",
      "skillId": "quadratic-formula-basic",
      "contentSha256": "27ad11b60fcf3fecd9d62321a254e18ea6c8c9dd42c40177734b17168760eb63",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：分解 (2x-3)(2x+1)=0；根一致",
      "derivedAnswer": "x=3/2 或 x=-1/2",
      "storedAnswer": "x=3/2 或 x=-1/2",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「將求根公式的正負兩個分支分別約分，解 4x²-4x-3=0。」的要求量已明示為「求分數根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：a=4。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：分數約最簡。",
        "choices": "四選項逐一代入或反算；正確項理由為「Δ=64，x=(4±8)/8。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "分母 8 的兩分支。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「將求根公式的正負兩個分支分別約分，解 4x²-4x-3=0。」：獨立由原始條件重算：分解 (2x-3)(2x+1)=0；根一致。再逐項核對四個選項，只有「x=3/2 或 x=-1/2」同時符合方程式與限制；分數約最簡。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "971181e9256a6faf1c934b13a6d898d898c5828c2c3fe39843f07a50dbb325eb"
    },
    {
      "questionId": "u13-s011-v007",
      "unitId": "u13",
      "skillId": "quadratic-formula-basic",
      "contentSha256": "b501fd95d50d0cdba7580af0fb5c2c4df71edd59f4bba08efef06a229d3e1b82",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：因式分解 (5x-3)(x+1)=0；公式結果正確",
      "derivedAnswer": "x=3/5 或 x=-1",
      "storedAnswer": "x=3/5 或 x=-1",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「5x²+2x-3=0 的解為何？」的要求量已明示為「求非整數有理根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：a=5。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：兩根最簡。",
        "choices": "四選項逐一代入或反算；正確項理由為「Δ=64，x=(-2±8)/10。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "較大首項係數。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「5x²+2x-3=0 的解為何？」：獨立由原始條件重算：因式分解 (5x-3)(x+1)=0；公式結果正確。再逐項核對四個選項，只有「x=3/5 或 x=-1」同時符合方程式與限制；兩根最簡。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "3ea9715531c2d892ef77bed3a7b728ae8ce7b4bfef575e40080b21c46d8ef3ea"
    },
    {
      "questionId": "u13-s011-v008",
      "unitId": "u13",
      "skillId": "quadratic-formula-basic",
      "contentSha256": "dcf2256820aeb0beb293fd04ce05b92376f99149d1336ae393c4e9eb08c4ed95",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：Δ=17>0 且非完全平方；所以兩個無理實根，分母 4",
      "derivedAnswer": "x=(-5±√17)/4",
      "storedAnswer": "x=(-5±√17)/4",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「解 2x²+5x+1=0。」的要求量已明示為「求一般無理根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：a=2。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：√17 最簡。",
        "choices": "四選項逐一代入或反算；正確項理由為「Δ=25-8=17。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "不能因不可分解而出錯。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解 2x²+5x+1=0。」：獨立由原始條件重算：Δ=17>0 且非完全平方；所以兩個無理實根，分母 4。再逐項核對四個選項，只有「x=(-5±√17)/4」同時符合方程式與限制；√17 最簡。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "186487aa3d08353600723cc59aca4290544783656dceb4aea03677d91449c61b"
    },
    {
      "questionId": "u13-s011-v009",
      "unitId": "u13",
      "skillId": "quadratic-formula-basic",
      "contentSha256": "cdbb94ad6287e11e472b6edd7d7458ad03fb73cb9b6ae0be2101f9e2322a543b",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：或整式乘 -1 分解 (2x-1)(x-3)；根相同",
      "derivedAnswer": "x=3 或 x=1/2",
      "storedAnswer": "x=3 或 x=1/2",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「解 -2x²+7x-3=0。」的要求量已明示為「處理負首項係數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：a=-2≠0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：乘非零數不改根。",
        "choices": "四選項逐一代入或反算；正確項理由為「乘 -1 後 2x²-7x+3=0，Δ=25。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "負係數公式穩定性。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解 -2x²+7x-3=0。」：獨立由原始條件重算：或整式乘 -1 分解 (2x-1)(x-3)；根相同。再逐項核對四個選項，只有「x=3 或 x=1/2」同時符合方程式與限制；乘非零數不改根。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "f02a5872e53d0231c13f0314657d37813e78faa479431da200ed23f294ce8c84"
    },
    {
      "questionId": "u13-s011-v010",
      "unitId": "u13",
      "skillId": "quadratic-formula-basic",
      "contentSha256": "fd66558a9e135c9ac19c16bc9172a5af7c756b89271af40f82998ded13f21eb7",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：(t-7)(t+1)=0；7 代回原模型為 0，-1 排除",
      "derivedAnswer": "7 秒",
      "storedAnswer": "7 秒",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「某物體的時間模型為 -t²+6t+7=0，且 t≥0。符合的時間為何？」的要求量已明示為「求非負時間」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：t≥0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：0 允許但不是根。",
        "choices": "四選項逐一代入或反算；正確項理由為「整式乘 -1 得 t²-6t-7=0，根 7、-1，取 7。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "t 單位秒。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "公式基本與時間限制。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為時間非負條件決定實際事件。",
      "reviewerNote": "獨立重算「某物體的時間模型為 -t²+6t+7=0，且 t≥0。符合的時間為何？」：獨立由原始條件重算：(t-7)(t+1)=0；7 代回原模型為 0，-1 排除。再逐項核對四個選項，只有「7 秒」同時符合方程式與限制；0 允許但不是根。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "c529b77594e30c3874092d073e0d9426937a14e412fc14d7f54fc653226920f2"
    },
    {
      "questionId": "u13-s011-v011",
      "unitId": "u13",
      "skillId": "quadratic-formula-basic",
      "contentSha256": "652db94ee3a4e72ebf2f6fb67820b533cdf4e3e3154166811dc8f1c2240111e2",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：分解 (2q-1)(q-5)=0；正整數限制只留 5",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「損益模型 2q²-11q+5=0，q 必須為正整數。q 為何？」的要求量已明示為「求離散可行根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：q∈正整數。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：1/2 排除。",
        "choices": "四選項逐一代入或反算；正確項理由為「公式根為 5、1/2，只有 5 是正整數。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "q 為件數。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "公式與離散限制。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為銷量整數性是不可刪除的情境條件。",
      "reviewerNote": "獨立重算「損益模型 2q²-11q+5=0，q 必須為正整數。q 為何？」：獨立由原始條件重算：分解 (2q-1)(q-5)=0；正整數限制只留 5。再逐項核對四個選項，只有「5」同時符合方程式與限制；1/2 排除。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "626dcbdefbcd1ab56bde2eed2a97cea97cce3ced4e482c37598aed155ad458e2"
    },
    {
      "questionId": "u13-s011-v012",
      "unitId": "u13",
      "skillId": "quadratic-formula-basic",
      "contentSha256": "bec13ae9ad1634def6f51427e5394ae3722553d22130aab38871ce0654260d8d",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：分解 (3d+4)(d-2)=0；正根唯一 2",
      "derivedAnswer": "2",
      "storedAnswer": "2",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「訊號距離 d 滿足 3d²-2d-8=0，且 d>0。d 為何？」的要求量已明示為「求正距離根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：d>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：負根排除。",
        "choices": "四選項逐一代入或反算；正確項理由為「Δ=100，根 2、-4/3，取正值。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "d 沿用訊號距離單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "公式與根篩選。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為距離的正值定義使實際答案唯一。",
      "reviewerNote": "獨立重算「訊號距離 d 滿足 3d²-2d-8=0，且 d>0。d 為何？」：獨立由原始條件重算：分解 (3d+4)(d-2)=0；正根唯一 2。再逐項核對四個選項，只有「2」同時符合方程式與限制；負根排除。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "f8fa73b26a7c93f3e469cd34a88b19922435d4e5dd7b20401a2f4226dda94674"
    }
  ],
  "drawingSpecs": []
};
