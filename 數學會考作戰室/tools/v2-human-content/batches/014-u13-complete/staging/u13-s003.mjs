export default {
  "lecture": {
    "lectureId": "u13-s003-lecture-r1",
    "unitId": "u13",
    "numericUnitId": 13,
    "topicId": "u13-solving",
    "skillId": "quadratic-formula",
    "lockedOrder": 3,
    "originalLockedTitle": "公式解",
    "title": "公式解的原理與結構",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能正確辨認公式中的 a、b、c。",
      "能說明根號內 b²-4ac 與分母 2a 的來源角色。",
      "能正確處理負號、括號與根號化簡。",
      "能用公式得到有理根或無理根。"
    ],
    "prerequisites": [
      {
        "skillId": "quadratic-completing-square",
        "requiredLevel": "能說明前一技能的核心規則並完成基本計算，不只記答案。"
      }
    ],
    "prerequisiteBridge": "由一般配方法推得公式結構；本節著重公式各部分的意義與正確書寫。",
    "glossary": [
      {
        "term": "公式解",
        "definition": "將標準式係數代入一元二次方程式求根公式。"
      },
      {
        "term": "判別式",
        "definition": "公式根號內的 b²-4ac。"
      },
      {
        "term": "有理根",
        "definition": "可寫成兩個整數比的根。"
      },
      {
        "term": "無理根",
        "definition": "不能寫成整數比，常以未完全開方的根式表示。"
      }
    ],
    "notation": [
      {
        "symbol": "ax²+bx+c=0",
        "meaning": "一元二次方程式標準式，且 a≠0。"
      },
      {
        "symbol": "x=(-b±√(b²-4ac))/(2a)",
        "meaning": "一元二次方程式求根公式。"
      }
    ],
    "conceptNarrative": [
      "公式不是另一條孤立規則，而是把一般方程式配方後得到的結果。",
      "代入前一定先整理成 ax²+bx+c=0；移項會改變係數符號。",
      "b 若為負數，-b 會變正；b² 必須把整個 b 放在括號內平方。",
      "分母是整個 2a，不能只除根號部分。",
      "根號可化簡時要化簡，但不能把 √(u+v) 拆成 √u+√v。"
    ],
    "formalDefinitions": [
      {
        "name": "求根公式",
        "statement": "對 ax²+bx+c=0 且 a≠0，x=(-b±√(b²-4ac))/(2a)。"
      },
      {
        "name": "係數辨認",
        "statement": "a、b、c 必須取自等號右邊為 0 的標準式，包含正負號。"
      }
    ],
    "formulas": [
      {
        "formula": "x=(-b±√(b²-4ac))/(2a)",
        "conditions": [
          "a≠0",
          "方程式已整理為標準式",
          "在實數範圍需 b²-4ac≥0"
        ],
        "meaning": "一次求出所有實數根。"
      }
    ],
    "nonApplicableCases": [
      "方程式未移項前不能直接讀 a、b、c。",
      "a=0 時不是一元二次方程式，公式分母也會為 0。",
      "判別式為負時，不在國中實數範圍求複數根。",
      "不能把 ± 當作只選一個符號。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "整理成 ax²+bx+c=0。",
        "check": "右邊是否為 0？"
      },
      {
        "step": 2,
        "instruction": "連同符號寫出 a、b、c。",
        "check": "b、c 的負號是否保留？"
      },
      {
        "step": 3,
        "instruction": "先算判別式 b²-4ac。",
        "check": "括號與乘法符號是否完整？"
      },
      {
        "step": 4,
        "instruction": "代入 -b±√Δ 並除以 2a。",
        "check": "分母是否包住整個分子？"
      },
      {
        "step": 5,
        "instruction": "化簡兩個根並代回驗算。",
        "check": "根式與分數是否約到最簡？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "解 x²-2x-1=0。",
        "solutionSteps": [
          "a=1，b=-2，c=-1，Δ=8。",
          "x=(2±√8)/2=1±√2。"
        ],
        "answer": "x=1±√2。"
      },
      {
        "exampleId": "L2",
        "prompt": "解 2x²+x-3=0。",
        "solutionSteps": [
          "Δ=1+24=25。",
          "x=(-1±5)/4。"
        ],
        "answer": "x=1 或 x=-3/2。"
      },
      {
        "exampleId": "L3",
        "prompt": "解 -x²+4x+5=0。",
        "solutionSteps": [
          "可先乘 -1 得 x²-4x-5=0。",
          "Δ=36，x=(4±6)/2。"
        ],
        "answer": "x=5 或 x=-1。"
      },
      {
        "exampleId": "L4",
        "prompt": "解 4x²+4x-1=0。",
        "solutionSteps": [
          "Δ=16+16=32。",
          "x=(-4±4√2)/8。"
        ],
        "answer": "x=(-1±√2)/2。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把 -b 寫成 b。",
        "why": "忽略公式最前面的負號。",
        "correction": "先單獨計算 -b。"
      },
      {
        "mistake": "b=-3 時算 b²=-9。",
        "why": "未把負數平方。",
        "correction": "寫 (-3)²=9。"
      },
      {
        "mistake": "分母只寫 2。",
        "why": "漏乘 a。",
        "correction": "分母完整寫 2a。"
      },
      {
        "mistake": "未先移項就讀係數。",
        "why": "係數不是標準式係數。",
        "correction": "先使右邊為 0。"
      },
      {
        "mistake": "把 √32 留成不可再化簡。",
        "why": "未抽出完全平方因數。",
        "correction": "√32=4√2。"
      },
      {
        "mistake": "只寫加號分支。",
        "why": "漏掉另一個根。",
        "correction": "± 要分成兩次計算。"
      }
    ],
    "selfCheck": [
      "標準式是否正確？",
      "a、b、c 是否含符號？",
      "Δ 是否先獨立計算？",
      "分母是否為 2a？",
      "兩個 ± 分支是否都化簡？"
    ],
    "summary": [
      "公式解適用所有一元二次方程式。",
      "正確辨認係數比背公式更重要。",
      "括號、負號、分母是最常見失分點。",
      "答案須保留精確根式並驗算。"
    ],
    "connections": {
      "previous": "由一般配方法推得公式結構；本節著重公式各部分的意義與正確書寫。",
      "next": [
        "下一節專門研究根號內的判別式。",
        "後續公式解基本技能會集中在直接代入與運算熟練。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u13-s003-v001",
        "u13-s003-v002",
        "u13-s003-v003",
        "u13-s003-v004",
        "u13-s003-v005",
        "u13-s003-v006",
        "u13-s003-v007",
        "u13-s003-v008",
        "u13-s003-v009",
        "u13-s003-v010",
        "u13-s003-v011",
        "u13-s003-v012"
      ],
      "constructedResponseIds": [
        "u13-s003-cr001",
        "u13-s003-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "reviewNote": "逐式重新計算四題判別式與分母，並把所得根代回；確認負 a 題先乘 -1 不改變解集，√32 化為 4√2 後分數約簡無誤。",
      "reviewVersion": "human-lecture-review-u13-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "c829ae3f8548f690be7a3f33aa5faf0ab05ea91371deb022b6796c04e1f80955"
  },
  "mcQuestions": [
    {
      "questionId": "u13-s003-v001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "lockedSkillOrder": 3,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "一元二次方程式 ax²+bx+c=0 的求根公式為何？",
      "givenConditions": "a≠0。",
      "target": "選出正確求根公式",
      "choices": [
        "x=(b±√(b²-4ac))/(2a)",
        "x=(-b±√(b²+4ac))/(2a)",
        "x=(-b±√(b²-4ac))/(2a)",
        "x=(-b±√(b²-4ac))/a"
      ],
      "answerIndex": 2,
      "explanation": "辨認標準公式結構；確認根號內為 b²-4ac，分母為 2a，所以答案為「x=(-b±√(b²-4ac))/(2a)」。",
      "steps": [
        "辨認標準公式結構",
        "確認根號內為 b²-4ac，分母為 2a"
      ],
      "optionAnalysis": [
        {
          "choice": "x=(b±√(b²-4ac))/(2a)",
          "truth": false,
          "reason": "漏掉 -b 的負號。"
        },
        {
          "choice": "x=(-b±√(b²+4ac))/(2a)",
          "truth": false,
          "reason": "判別式符號應為減。"
        },
        {
          "choice": "x=(-b±√(b²-4ac))/(2a)",
          "truth": true,
          "reason": "公式的分子為 -b±√Δ，整體分母為 2a。"
        },
        {
          "choice": "x=(-b±√(b²-4ac))/a",
          "truth": false,
          "reason": "分母漏掉 2。"
        }
      ],
      "misconceptionTarget": "背誦時漏負號、減號或 2",
      "prerequisiteSkillIds": [
        "quadratic-completing-square"
      ],
      "estimatedTimeSec": 55,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "分數線涵蓋整個分子。",
      "difficultyReason": "基本公式辨認。",
      "literacyContextNecessity": null,
      "authoringIntent": "選出正確求根公式",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "09d9a0c236e63df6754a5feb74bae59da6bcfd595839077b49115abe542dc762"
    },
    {
      "questionId": "u13-s003-v002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "lockedSkillOrder": 3,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "方程式 2x²-5x-3=0 中，a、b、c 分別為何？",
      "givenConditions": "右邊已為 0。",
      "target": "辨認公式代入係數",
      "choices": [
        "a=2，b=5，c=3",
        "a=2，b=-5，c=3",
        "a=2，b=5，c=-3",
        "a=2，b=-5，c=-3"
      ],
      "answerIndex": 3,
      "explanation": "方程式已是標準式；依 x²、x、常數讀出 2、-5、-3，所以答案為「a=2，b=-5，c=-3」。",
      "steps": [
        "方程式已是標準式",
        "依 x²、x、常數讀出 2、-5、-3"
      ],
      "optionAnalysis": [
        {
          "choice": "a=2，b=5，c=3",
          "truth": false,
          "reason": "兩個負號都漏掉。"
        },
        {
          "choice": "a=2，b=-5，c=3",
          "truth": false,
          "reason": "常數項符號錯。"
        },
        {
          "choice": "a=2，b=5，c=-3",
          "truth": false,
          "reason": "一次項係數符號錯。"
        },
        {
          "choice": "a=2，b=-5，c=-3",
          "truth": true,
          "reason": "係數需連同各項前的正負號讀取。"
        }
      ],
      "misconceptionTarget": "忽略係數符號",
      "prerequisiteSkillIds": [
        "quadratic-completing-square"
      ],
      "estimatedTimeSec": 55,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "沒有移項歧義。",
      "difficultyReason": "考查公式解前的關鍵準備。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認公式代入係數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ef1b4f84334d59fdb4be8723dea3645ec8fb9e3057f51bc3d3402abb6b3748ca"
    },
    {
      "questionId": "u13-s003-v003",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "lockedSkillOrder": 3,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "用公式解 x²-2x-1=0，答案為何？",
      "givenConditions": "實數範圍，Δ>0。",
      "target": "求精確無理根",
      "choices": [
        "x=1±√2",
        "x=-1±√2",
        "x=2±√2",
        "x=1±2√2"
      ],
      "answerIndex": 0,
      "explanation": "a=1，b=-2，c=-1，Δ=8；x=(2±√8)/2=1±√2，所以答案為「x=1±√2」。",
      "steps": [
        "a=1，b=-2，c=-1，Δ=8",
        "x=(2±√8)/2=1±√2"
      ],
      "optionAnalysis": [
        {
          "choice": "x=1±√2",
          "truth": true,
          "reason": "Δ=8，代入後 (2±2√2)/2=1±√2。"
        },
        {
          "choice": "x=-1±√2",
          "truth": false,
          "reason": "-b 計算錯。"
        },
        {
          "choice": "x=2±√2",
          "truth": false,
          "reason": "分母約簡錯。"
        },
        {
          "choice": "x=1±2√2",
          "truth": false,
          "reason": "√8 化簡後未再除以 2。"
        }
      ],
      "misconceptionTarget": "負號與根式約簡錯誤",
      "prerequisiteSkillIds": [
        "quadratic-completing-square"
      ],
      "estimatedTimeSec": 85,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "答案保留最簡根式。",
      "difficultyReason": "基本公式代入含無理根。",
      "literacyContextNecessity": null,
      "authoringIntent": "求精確無理根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a6deb62f1dbe5c2d0bb17fd65467742ec0776ea888ebc6d6018a68c5a6defc56"
    },
    {
      "questionId": "u13-s003-v004",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "lockedSkillOrder": 3,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "學生用求根公式解 2x²+x−3=0，寫成 x=(-1±5)/2。下列哪一項最精確指出錯誤？",
      "givenConditions": "a=2、b=1、c=-3；判別式為25",
      "target": "診斷求根公式分母錯誤",
      "choices": [
        "平方根應寫成±25",
        "分母應為2a=4",
        "分子應為1±5",
        "方程式只能有一個根"
      ],
      "answerIndex": 1,
      "explanation": "先確認a的值，再檢查公式分母2a。",
      "steps": [
        "確認a=2。",
        "求根公式分母為2a。",
        "寫成(−1±5)/4並驗根。"
      ],
      "optionAnalysis": [
        {
          "choice": "平方根應寫成±25",
          "truth": false,
          "reason": "±√25就是±5。"
        },
        {
          "choice": "分母應為2a=4",
          "truth": true,
          "reason": "2a=4，原算式分母錯誤。"
        },
        {
          "choice": "分子應為1±5",
          "truth": false,
          "reason": "分子應為−1±5。"
        },
        {
          "choice": "方程式只能有一個根",
          "truth": false,
          "reason": "判別式大於0所以有兩根。"
        }
      ],
      "misconceptionTarget": "把公式分母固定記成2，忽略a。",
      "prerequisiteSkillIds": [
        "quadratic-completing-square"
      ],
      "estimatedTimeSec": 95,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "學生算式與係數均明示，錯誤位置唯一。",
      "difficultyReason": "標準：診斷公式結構與係數代入。",
      "literacyContextNecessity": null,
      "authoringIntent": "求兩個有理根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ab319a2cb8e33a9a91128ea7ddebe6ffe64a534558107182e30105ff61eb3ada",
      "independentSolution": "求根公式的分母是2a；本題a=2，所以分母必須是4。正確為x=(-1±5)/4，得到1與−3/2。"
    },
    {
      "questionId": "u13-s003-v005",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "lockedSkillOrder": 3,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解 -x²+4x+5=0。",
      "givenConditions": "整式乘 -1 不改解集。",
      "target": "處理負二次項係數",
      "choices": [
        "x=1 或 x=-5",
        "x=4±√5",
        "x=-4±√5",
        "x=5 或 x=-1"
      ],
      "answerIndex": 3,
      "explanation": "先乘 -1：x²-4x-5=0；Δ=36，x=(4±6)/2，所以答案為「x=5 或 x=-1」。",
      "steps": [
        "先乘 -1：x²-4x-5=0",
        "Δ=36，x=(4±6)/2"
      ],
      "optionAnalysis": [
        {
          "choice": "x=1 或 x=-5",
          "truth": false,
          "reason": "根符號相反。"
        },
        {
          "choice": "x=4±√5",
          "truth": false,
          "reason": "判別式與分母處理錯。"
        },
        {
          "choice": "x=-4±√5",
          "truth": false,
          "reason": "未整理負二次項且公式符號錯。"
        },
        {
          "choice": "x=5 或 x=-1",
          "truth": true,
          "reason": "整式乘 -1 得 x²-4x-5=0，根為 5、-1。"
        }
      ],
      "misconceptionTarget": "只改部分符號或讀錯 b",
      "prerequisiteSkillIds": [
        "quadratic-completing-square"
      ],
      "estimatedTimeSec": 100,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "兩根皆需驗算。",
      "difficultyReason": "考查等價標準式選擇。",
      "literacyContextNecessity": null,
      "authoringIntent": "處理負二次項係數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "45e5175f754306a7f19ae756841892737bb0b10602138e97d78810d471fb9ab9"
    },
    {
      "questionId": "u13-s003-v006",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "lockedSkillOrder": 3,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "方程式 3x²=7x+6 整理後的係數為何？",
      "givenConditions": "方程式可等價移項。",
      "target": "正確整理後讀係數",
      "choices": [
        "a=3，b=-7，c=-6",
        "a=3，b=7，c=6",
        "a=3，b=7，c=-6",
        "a=3，b=-7，c=6"
      ],
      "answerIndex": 0,
      "explanation": "把 7x+6 移到左邊；得到 3x²-7x-6=0，所以答案為「a=3，b=-7，c=-6」。",
      "steps": [
        "把 7x+6 移到左邊",
        "得到 3x²-7x-6=0"
      ],
      "optionAnalysis": [
        {
          "choice": "a=3，b=-7，c=-6",
          "truth": true,
          "reason": "移到左邊得 3x²-7x-6=0。"
        },
        {
          "choice": "a=3，b=7，c=6",
          "truth": false,
          "reason": "直接從右邊讀數，未移項。"
        },
        {
          "choice": "a=3，b=7，c=-6",
          "truth": false,
          "reason": "一次項符號錯。"
        },
        {
          "choice": "a=3，b=-7，c=6",
          "truth": false,
          "reason": "常數符號錯。"
        }
      ],
      "misconceptionTarget": "未先把右端化為 0",
      "prerequisiteSkillIds": [
        "quadratic-completing-square"
      ],
      "estimatedTimeSec": 75,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "所有移項項目都變號。",
      "difficultyReason": "公式代入前的標準化。",
      "literacyContextNecessity": null,
      "authoringIntent": "正確整理後讀係數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cba019565d0034c993c478eb4a423238066d1fbd015ac3255296ee106856da9e"
    },
    {
      "questionId": "u13-s003-v007",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "lockedSkillOrder": 3,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "求根公式中的分母 2a 為何不能寫成 2？",
      "givenConditions": "a≠0。",
      "target": "解釋公式結構",
      "choices": [
        "因為 b 可能是負數",
        "因為配方時需除以二次項係數 a",
        "因為 c 一定不為 0",
        "因為根號內一定有 a"
      ],
      "answerIndex": 1,
      "explanation": "考慮方程式 ax²+bx+c=0；先除以 a 才能配方，因此最後分母含 a，所以答案為「因為配方時需除以二次項係數 a」。",
      "steps": [
        "考慮方程式 ax²+bx+c=0",
        "先除以 a 才能配方，因此最後分母含 a"
      ],
      "optionAnalysis": [
        {
          "choice": "因為 b 可能是負數",
          "truth": false,
          "reason": "與分母是否含 a 無關。"
        },
        {
          "choice": "因為配方時需除以二次項係數 a",
          "truth": true,
          "reason": "一般方程式的縮放由 a 決定，只有 a=1 時 2a 才等於 2。"
        },
        {
          "choice": "因為 c 一定不為 0",
          "truth": false,
          "reason": "c 可以為 0，且不是分母來源。"
        },
        {
          "choice": "因為根號內一定有 a",
          "truth": false,
          "reason": "雖有 a，但不能解釋分母漏 a 的問題。"
        }
      ],
      "misconceptionTarget": "只背形式而不了解縮放",
      "prerequisiteSkillIds": [
        "quadratic-completing-square"
      ],
      "estimatedTimeSec": 120,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "問題問原因而非計算。",
      "difficultyReason": "要求連結配方推導與係數縮放。",
      "literacyContextNecessity": null,
      "authoringIntent": "解釋公式結構",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "768b13c166a5e3a1e8cc40b4600735541278cb498d528bdc48703dd89e835cb1"
    },
    {
      "questionId": "u13-s003-v008",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "lockedSkillOrder": 3,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解 4x²+4x-1=0，最簡答案為何？",
      "givenConditions": "Δ>0。",
      "target": "化簡含共同因數的根式分數",
      "choices": [
        "x=-1±√2",
        "x=(-1±2√2)/2",
        "x=(-1±√2)/2",
        "x=(1±√2)/2"
      ],
      "answerIndex": 2,
      "explanation": "a=4，b=4，c=-1，Δ=32；x=(-4±4√2)/8=(-1±√2)/2，所以答案為「x=(-1±√2)/2」。",
      "steps": [
        "a=4，b=4，c=-1，Δ=32",
        "x=(-4±4√2)/8=(-1±√2)/2"
      ],
      "optionAnalysis": [
        {
          "choice": "x=-1±√2",
          "truth": false,
          "reason": "分母約掉過多。"
        },
        {
          "choice": "x=(-1±2√2)/2",
          "truth": false,
          "reason": "√32 化簡後係數錯。"
        },
        {
          "choice": "x=(-1±√2)/2",
          "truth": true,
          "reason": "Δ=32，公式化簡得到 (-4±4√2)/8。"
        },
        {
          "choice": "x=(1±√2)/2",
          "truth": false,
          "reason": "-b 的符號錯。"
        }
      ],
      "misconceptionTarget": "根式或整體約分錯",
      "prerequisiteSkillIds": [
        "quadratic-completing-square"
      ],
      "estimatedTimeSec": 125,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "答案需保持 ± 分支的共同分母。",
      "difficultyReason": "多步根式與分數化簡。",
      "literacyContextNecessity": null,
      "authoringIntent": "化簡含共同因數的根式分數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "18827add6152e84b7d214ccf12fcd3f3833995cbc598eb3b811b479276f6c827"
    },
    {
      "questionId": "u13-s003-v009",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "lockedSkillOrder": 3,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "若 ax²+c=0（a≠0）且 -c/a>0，公式解可化為何？",
      "givenConditions": "a≠0 且 -c/a>0。",
      "target": "化簡特殊型公式",
      "choices": [
        "x=±√(-c/a)",
        "x=-c/a",
        "x=√(c/a)",
        "x=±c/a"
      ],
      "answerIndex": 0,
      "explanation": "令 b=0 代入公式：x=±√(-4ac)/(2a)；更直接移項得 x²=-c/a，所以 x=±√(-c/a)，所以答案為「x=±√(-c/a)」。",
      "steps": [
        "令 b=0 代入公式：x=±√(-4ac)/(2a)",
        "更直接移項得 x²=-c/a，所以 x=±√(-c/a)"
      ],
      "optionAnalysis": [
        {
          "choice": "x=±√(-c/a)",
          "truth": true,
          "reason": "此時 b=0，方程式等價於 x²=-c/a。"
        },
        {
          "choice": "x=-c/a",
          "truth": false,
          "reason": "漏掉平方根與 ±。"
        },
        {
          "choice": "x=√(c/a)",
          "truth": false,
          "reason": "根號內符號錯。"
        },
        {
          "choice": "x=±c/a",
          "truth": false,
          "reason": "把平方根誤成原比值。"
        }
      ],
      "misconceptionTarget": "漏掉 ± 或根號",
      "prerequisiteSkillIds": [
        "quadratic-completing-square"
      ],
      "estimatedTimeSec": 130,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "條件保證兩個實根。",
      "difficultyReason": "連結一般公式與平方根解法。",
      "literacyContextNecessity": null,
      "authoringIntent": "化簡特殊型公式",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "df1c5cd216d35d7017ddbfaa5aedf49e354493dc55e11636cccd654341212247"
    },
    {
      "questionId": "u13-s003-v010",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "lockedSkillOrder": 3,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某物體高度模型為 h(t)=-5t²+20t+25。物體落地時 h=0，且 t≥0。落地時間為何？",
      "givenConditions": "t≥0，單位秒。",
      "target": "求符合時間定義域的正根",
      "choices": [
        "-1 秒",
        "5 秒",
        "4 秒",
        "25 秒"
      ],
      "answerIndex": 1,
      "explanation": "令 -5t²+20t+25=0；化簡 t²-4t-5=0，公式或分解得 5、-1，取 5，所以答案為「5 秒」。",
      "steps": [
        "令 -5t²+20t+25=0",
        "化簡 t²-4t-5=0，公式或分解得 5、-1，取 5"
      ],
      "optionAnalysis": [
        {
          "choice": "-1 秒",
          "truth": false,
          "reason": "是代數根但時間不能為負。"
        },
        {
          "choice": "5 秒",
          "truth": true,
          "reason": "方程式除以 -5 得 t²-4t-5=0，根為 5、-1，只取非負。"
        },
        {
          "choice": "4 秒",
          "truth": false,
          "reason": "把一次項係數誤當時間。"
        },
        {
          "choice": "25 秒",
          "truth": false,
          "reason": "把初始高度直接當時間。"
        }
      ],
      "misconceptionTarget": "未排除負時間",
      "prerequisiteSkillIds": [
        "quadratic-completing-square"
      ],
      "estimatedTimeSec": 120,
      "unitCheck": "t 以秒計，h 的係數單位已含在模型中。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "t=-1 雖代數成立但不在模型時域。",
      "difficultyReason": "需要建模、整理、求根與篩選。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為高度為 0 的物理事件與 t≥0 定義域共同決定答案。",
      "authoringIntent": "求符合時間定義域的正根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "73b8fbba68575f82c45af97100f90f19cd65559ae224c2ba66150bce852601b4"
    },
    {
      "questionId": "u13-s003-v011",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "lockedSkillOrder": 3,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某校正距離 d 滿足 2d²-9d+4=0，裝置規定 d>1。可用的 d 為何？",
      "givenConditions": "d>1。",
      "target": "求裝置可接受的距離參數",
      "choices": [
        "1/2",
        "9/2",
        "4",
        "4 或 1/2"
      ],
      "answerIndex": 2,
      "explanation": "Δ=81-32=49；d=(9±7)/4，得 4、1/2，再取 d>1，所以答案為「4」。",
      "steps": [
        "Δ=81-32=49",
        "d=(9±7)/4，得 4、1/2，再取 d>1"
      ],
      "optionAnalysis": [
        {
          "choice": "1/2",
          "truth": false,
          "reason": "是代數根但不符合 d>1。"
        },
        {
          "choice": "9/2",
          "truth": false,
          "reason": "把 -b/2a 當完整答案。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "公式根為 4 與 1/2，限制 d>1 只留 4。"
        },
        {
          "choice": "4 或 1/2",
          "truth": false,
          "reason": "未套用裝置限制。"
        }
      ],
      "misconceptionTarget": "只求代數根不檢查門檻",
      "prerequisiteSkillIds": [
        "quadratic-completing-square"
      ],
      "estimatedTimeSec": 115,
      "unitCheck": "題目以同一距離單位表示 d，答案沿用該單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "等號 d=1 不相關，1/2 排除。",
      "difficultyReason": "公式與參數範圍整合。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為裝置門檻是排除其中一根的必要資訊。",
      "authoringIntent": "求裝置可接受的距離參數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a63912c5a5a0a9abf7031fa9932938f974b0b395acb14abf300eb6fe2f3f887d"
    },
    {
      "questionId": "u13-s003-v012",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "lockedSkillOrder": 3,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某包裝數量 n 滿足 3n²-14n-5=0，且 n 必須為正整數。n 為何？",
      "givenConditions": "n∈正整數。",
      "target": "求可行包裝數量",
      "choices": [
        "-1/3",
        "14/3",
        "5 或 -1/3",
        "5"
      ],
      "answerIndex": 3,
      "explanation": "Δ=196+60=256；n=(14±16)/6，得 5、-1/3，取正整數 5，所以答案為「5」。",
      "steps": [
        "Δ=196+60=256",
        "n=(14±16)/6，得 5、-1/3，取正整數 5"
      ],
      "optionAnalysis": [
        {
          "choice": "-1/3",
          "truth": false,
          "reason": "是代數根但不是正整數。"
        },
        {
          "choice": "14/3",
          "truth": false,
          "reason": "只取 -b/(2a) 的中心值。"
        },
        {
          "choice": "5 或 -1/3",
          "truth": false,
          "reason": "未套用正整數條件。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "公式根為 5 與 -1/3，只有 5 是正整數。"
        }
      ],
      "misconceptionTarget": "未檢查整數與正值",
      "prerequisiteSkillIds": [
        "quadratic-completing-square"
      ],
      "estimatedTimeSec": 120,
      "unitCheck": "n 是件數，必須為無單位的正整數。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "非整數與負值都不可作數量。",
      "difficultyReason": "含公式大平方判別式與離散限制。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為包裝數量的正整數性使代數解集縮為單一可行值。",
      "authoringIntent": "求可行包裝數量",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "116546485e6dedebb9443f504da722dada27c68c1feefa5d7db892327ec1c81f"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u13-s003-cr001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "使用求根公式解 2x²-3x-2=0，必須先標出 a、b、c。",
      "requiredWork": [
        "標出係數含符號。",
        "計算判別式。",
        "代入公式並化簡兩根。"
      ],
      "fullCreditSolution": [
        "a=2，b=-3，c=-2。",
        "Δ=(-3)²-4·2·(-2)=25。",
        "x=(3±5)/4，所以 x=2 或 x=-1/2。"
      ],
      "alternativeSolutions": [
        "可因式分解 (2x+1)(x-2)=0 驗證。"
      ],
      "reasoningSteps": [
        "從標準式讀係數。",
        "計算 b²-4ac。",
        "注意 -b 與分母 2a。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "a、b、c、Δ 與兩根全部正確。"
        },
        {
          "score": 2,
          "criteria": "兩根正確但未明列係數，或係數與公式正確但一個分支小算術錯。"
        },
        {
          "score": 1,
          "criteria": "能正確列係數與公式，但判別式或分母錯導致答案錯。"
        },
        {
          "score": 0,
          "criteria": "係數及公式均無法辨認。"
        }
      ],
      "partialCreditRules": [
        "-1/2 寫成 -0.5 可接受。",
        "若用其他方法得正確根但未依指定公式，最多 1 分。"
      ],
      "followThroughPolicy": "若 Δ=25 正確，最後 ± 分支只錯一個，可給 2 分。",
      "unitNotationRules": [
        "x 無單位。",
        "分數化最簡。"
      ],
      "answerOnlyPolicy": "只寫兩根無公式過程，最多 1 分。",
      "commonErrors": [
        "把 b 寫 3。",
        "把 -4ac 算成負 16。",
        "分母寫 2。"
      ],
      "independentReview": {
        "derivedResult": "x=2 或 -1/2。",
        "ambiguity": "標準式已給定，係數與解唯一。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "78410962e7ed9dd262a1d99bd9e30430523fc005f307bcffdd4441a077c918a9"
    },
    {
      "questionId": "u13-s003-cr002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-formula",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "以求根公式解 4x²+4x-1=0，並說明分數線涵蓋哪些項。",
      "requiredWork": [
        "完整寫求根公式代入。",
        "化簡 √32。",
        "說明整個 -b±√Δ 均除以 2a。"
      ],
      "fullCreditSolution": [
        "a=4，b=4，c=-1，Δ=32。",
        "x=(-4±√32)/8=(-4±4√2)/8=(-1±√2)/2。",
        "分母 8 作用於分子中的 -4 與 ±4√2 整體。"
      ],
      "alternativeSolutions": [
        "可先除以 4 再配方，得 (x+1/2)²=1/2，最後同樣得到 (-1±√2)/2。"
      ],
      "reasoningSteps": [
        "辨認係數。",
        "化簡判別式根號。",
        "整體約分。",
        "澄清分數線作用範圍。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "得到 (-1±√2)/2，且清楚說明分母作用於整個分子。"
        },
        {
          "score": 2,
          "criteria": "答案與主要化簡正確，但分數線說明不完整，或保留等值未最簡形式。"
        },
        {
          "score": 1,
          "criteria": "公式結構正確且 Δ=32，但根式或約分錯。"
        },
        {
          "score": 0,
          "criteria": "分母只作用一項並造成錯誤，且無可辨識正確步驟。"
        }
      ],
      "partialCreditRules": [
        "(-4±√32)/8 是正確未化簡答案，若題目要求完整化簡則最高 2 分。",
        "正負兩支可分開寫。"
      ],
      "followThroughPolicy": "若 √32 誤化簡但公式代入正確，給 1 分；後續依錯誤根式一致不再追加答案分。",
      "unitNotationRules": [
        "x 無單位。",
        "括號或長分數線需清楚。"
      ],
      "answerOnlyPolicy": "只寫最終答案而未解釋分數線，最多 2 分。",
      "commonErrors": [
        "寫 -4±√32/8。",
        "√32=8√2。",
        "只約分常數項。"
      ],
      "independentReview": {
        "derivedResult": "x=(-1±√2)/2。",
        "ambiguity": "題目刻意檢查書寫範圍，正確解釋只有一種。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "b7dbaa41f6730a3ab22439ac68b3341aefb2659776fc7d6e2f89157e0a430932"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u13-s003-v001",
      "unitId": "u13",
      "skillId": "quadratic-formula",
      "contentSha256": "09d9a0c236e63df6754a5feb74bae59da6bcfd595839077b49115abe542dc762",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：由一般配方所得公式含 -b、±、判別式與 2a；其餘選項各改動一個關鍵符號或係數",
      "derivedAnswer": "x=(-b±√(b²-4ac))/(2a)",
      "storedAnswer": "x=(-b±√(b²-4ac))/(2a)",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「一元二次方程式 ax²+bx+c=0 的求根公式為何？」的要求量已明示為「選出正確求根公式」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：a≠0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：分數線涵蓋整個分子。",
        "choices": "四選項逐一代入或反算；正確項理由為「公式的分子為 -b±√Δ，整體分母為 2a。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "基本公式辨認。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「一元二次方程式 ax²+bx+c=0 的求根公式為何？」：獨立由原始條件重算：由一般配方所得公式含 -b、±、判別式與 2a；其餘選項各改動一個關鍵符號或係數。再逐項核對四個選項，只有「x=(-b±√(b²-4ac))/(2a)」同時符合方程式與限制；分數線涵蓋整個分子。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "6cb033f90c6d221b89ac2c935173f146ba7645f8405dbfed11f55c678c5382fa"
    },
    {
      "questionId": "u13-s003-v002",
      "unitId": "u13",
      "skillId": "quadratic-formula",
      "contentSha256": "ef1b4f84334d59fdb4be8723dea3645ec8fb9e3057f51bc3d3402abb6b3748ca",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：逐項比較 ax²+bx+c；-5x 對應 b=-5，-3 對應 c=-3",
      "derivedAnswer": "a=2，b=-5，c=-3",
      "storedAnswer": "a=2，b=-5，c=-3",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「方程式 2x²-5x-3=0 中，a、b、c 分別為何？」的要求量已明示為「辨認公式代入係數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：右邊已為 0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：沒有移項歧義。",
        "choices": "四選項逐一代入或反算；正確項理由為「係數需連同各項前的正負號讀取。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "考查公式解前的關鍵準備。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「方程式 2x²-5x-3=0 中，a、b、c 分別為何？」：獨立由原始條件重算：逐項比較 ax²+bx+c；-5x 對應 b=-5，-3 對應 c=-3。再逐項核對四個選項，只有「a=2，b=-5，c=-3」同時符合方程式與限制；沒有移項歧義。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "47e85bcc8b556b3e753859fb343830b927bbf593715e6af4a4d6b3c83041290e"
    },
    {
      "questionId": "u13-s003-v003",
      "unitId": "u13",
      "skillId": "quadratic-formula",
      "contentSha256": "a6deb62f1dbe5c2d0bb17fd65467742ec0776ea888ebc6d6018a68c5a6defc56",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：√8=2√2；整個分子除 2 得 1±√2；代回可驗證",
      "derivedAnswer": "x=1±√2",
      "storedAnswer": "x=1±√2",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「用公式解 x²-2x-1=0，答案為何？」的要求量已明示為「求精確無理根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：實數範圍，Δ>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：答案保留最簡根式。",
        "choices": "四選項逐一代入或反算；正確項理由為「Δ=8，代入後 (2±2√2)/2=1±√2。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "基本公式代入含無理根。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「用公式解 x²-2x-1=0，答案為何？」：獨立由原始條件重算：√8=2√2；整個分子除 2 得 1±√2；代回可驗證。再逐項核對四個選項，只有「x=1±√2」同時符合方程式與限制；答案保留最簡根式。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "e9e264ec0c81d01a4942f6d0c269c60e56a56967c1bd0efb310503db31ac2be3"
    },
    {
      "questionId": "u13-s003-v004",
      "unitId": "u13",
      "skillId": "quadratic-formula",
      "contentSha256": "ab319a2cb8e33a9a91128ea7ddebe6ffe64a534558107182e30105ff61eb3ada",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "求根公式的分母是2a；本題a=2，所以分母必須是4。正確為x=(-1±5)/4，得到1與−3/2。",
      "derivedAnswer": "分母應為2a=4",
      "storedAnswer": "分母應為2a=4",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹明確要求「診斷求根公式分母錯誤」，沒有第二種合理所求。",
        "conditions": "學生算式與係數均明示，錯誤位置唯一。；已逐一代回題幹條件與四個選項，未形成第二個合理答案。",
        "boundary": "學生算式與係數均明示，錯誤位置唯一。；已逐一代回題幹條件與四個選項，未形成第二個合理答案。",
        "choices": "逐項代回後只有「分母應為2a=4」成立；其他三項分別因：±√25就是±5。；分子應為−1±5。；判別式大於0所以有兩根。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "標準：診斷公式結構與係數代入。",
      "literacyNecessityReview": null,
      "reviewerNote": "u13-s003-v004 中央修訂後獨立重算：求根公式的分母是2a；本題a=2，所以分母必須是4。正確為x=(-1±5)/4，得到1與−3/2。 四個選項逐項核對，唯一正解為「分母應為2a=4」；其餘選項排除理由為：±√25就是±5。；分子應為−1±5。；判別式大於0所以有兩根。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "f4e0ee9b5263a40fc5f872e199b1663bcf2012691c683f64210d24771950bce9"
    },
    {
      "questionId": "u13-s003-v005",
      "unitId": "u13",
      "skillId": "quadratic-formula",
      "contentSha256": "45e5175f754306a7f19ae756841892737bb0b10602138e97d78810d471fb9ab9",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：兩分支為 5、-1；原式代入 5：-25+20+5=0；代入 -1：-1-4+5=0",
      "derivedAnswer": "x=5 或 x=-1",
      "storedAnswer": "x=5 或 x=-1",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「解 -x²+4x+5=0。」的要求量已明示為「處理負二次項係數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：整式乘 -1 不改解集。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：兩根皆需驗算。",
        "choices": "四選項逐一代入或反算；正確項理由為「整式乘 -1 得 x²-4x-5=0，根為 5、-1。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "考查等價標準式選擇。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解 -x²+4x+5=0。」：獨立由原始條件重算：兩分支為 5、-1；原式代入 5：-25+20+5=0；代入 -1：-1-4+5=0。再逐項核對四個選項，只有「x=5 或 x=-1」同時符合方程式與限制；兩根皆需驗算。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "54603112109cadf62ee5a4100bdbfceb179a8eed6691a299eb96fb3df08cda44"
    },
    {
      "questionId": "u13-s003-v006",
      "unitId": "u13",
      "skillId": "quadratic-formula",
      "contentSha256": "cba019565d0034c993c478eb4a423238066d1fbd015ac3255296ee106856da9e",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：以左減右：3x²-7x-6=0；逐項對照標準式",
      "derivedAnswer": "a=3，b=-7，c=-6",
      "storedAnswer": "a=3，b=-7，c=-6",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「方程式 3x²=7x+6 整理後的係數為何？」的要求量已明示為「正確整理後讀係數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：方程式可等價移項。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：所有移項項目都變號。",
        "choices": "四選項逐一代入或反算；正確項理由為「移到左邊得 3x²-7x-6=0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "公式代入前的標準化。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「方程式 3x²=7x+6 整理後的係數為何？」：獨立由原始條件重算：以左減右：3x²-7x-6=0；逐項對照標準式。再逐項核對四個選項，只有「a=3，b=-7，c=-6」同時符合方程式與限制；所有移項項目都變號。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "9e6af39c4f1ae5c6fe4ee1b2803bab06e6c14b3feb92edc0f788c6ab247a4fe9"
    },
    {
      "questionId": "u13-s003-v007",
      "unitId": "u13",
      "skillId": "quadratic-formula",
      "contentSha256": "768b13c166a5e3a1e8cc40b4600735541278cb498d528bdc48703dd89e835cb1",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：以 2x²+x-3=0 為反例：若分母寫 2，會得錯根；正確分母 4 才得到 1、-3/2",
      "derivedAnswer": "因為配方時需除以二次項係數 a",
      "storedAnswer": "因為配方時需除以二次項係數 a",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「求根公式中的分母 2a 為何不能寫成 2？」的要求量已明示為「解釋公式結構」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：a≠0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：問題問原因而非計算。",
        "choices": "四選項逐一代入或反算；正確項理由為「一般方程式的縮放由 a 決定，只有 a=1 時 2a 才等於 2。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "要求連結配方推導與係數縮放。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「求根公式中的分母 2a 為何不能寫成 2？」：獨立由原始條件重算：以 2x²+x-3=0 為反例：若分母寫 2，會得錯根；正確分母 4 才得到 1、-3/2。再逐項核對四個選項，只有「因為配方時需除以二次項係數 a」同時符合方程式與限制；問題問原因而非計算。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "6c658eab42c7ebca76bed022af183d314d5a5f6ecd22cb3ebf8318a6dbe265b3"
    },
    {
      "questionId": "u13-s003-v008",
      "unitId": "u13",
      "skillId": "quadratic-formula",
      "contentSha256": "18827add6152e84b7d214ccf12fcd3f3833995cbc598eb3b811b479276f6c827",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：將 √32 抽出 16 得 4√2；分子分母同除 4，不能再約掉 2",
      "derivedAnswer": "x=(-1±√2)/2",
      "storedAnswer": "x=(-1±√2)/2",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「解 4x²+4x-1=0，最簡答案為何？」的要求量已明示為「化簡含共同因數的根式分數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：Δ>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：答案需保持 ± 分支的共同分母。",
        "choices": "四選項逐一代入或反算；正確項理由為「Δ=32，公式化簡得到 (-4±4√2)/8。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "多步根式與分數化簡。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解 4x²+4x-1=0，最簡答案為何？」：獨立由原始條件重算：將 √32 抽出 16 得 4√2；分子分母同除 4，不能再約掉 2。再逐項核對四個選項，只有「x=(-1±√2)/2」同時符合方程式與限制；答案需保持 ± 分支的共同分母。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "20405a7f1183dd411227b4cac46772a3a755b6d741fe2c05067d2bf5972608c0"
    },
    {
      "questionId": "u13-s003-v009",
      "unitId": "u13",
      "skillId": "quadratic-formula",
      "contentSha256": "df1c5cd216d35d7017ddbfaa5aedf49e354493dc55e11636cccd654341212247",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：由原方程 ax²=-c；除以 a 得 x²=-c/a，條件保證右側為正",
      "derivedAnswer": "x=±√(-c/a)",
      "storedAnswer": "x=±√(-c/a)",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「若 ax²+c=0（a≠0）且 -c/a>0，公式解可化為何？」的要求量已明示為「化簡特殊型公式」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：a≠0 且 -c/a>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：條件保證兩個實根。",
        "choices": "四選項逐一代入或反算；正確項理由為「此時 b=0，方程式等價於 x²=-c/a。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "連結一般公式與平方根解法。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「若 ax²+c=0（a≠0）且 -c/a>0，公式解可化為何？」：獨立由原始條件重算：由原方程 ax²=-c；除以 a 得 x²=-c/a，條件保證右側為正。再逐項核對四個選項，只有「x=±√(-c/a)」同時符合方程式與限制；條件保證兩個實根。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "c0481bda07eb0a70f8ce163639d70d7819a794df7600c9341eb7cf5645d3dfbd"
    },
    {
      "questionId": "u13-s003-v010",
      "unitId": "u13",
      "skillId": "quadratic-formula",
      "contentSha256": "73b8fbba68575f82c45af97100f90f19cd65559ae224c2ba66150bce852601b4",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：(t-5)(t+1)=0；t=5 或 -1；模型定義 t≥0，故 5 秒",
      "derivedAnswer": "5 秒",
      "storedAnswer": "5 秒",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「某物體高度模型為 h(t)=-5t²+20t+25。物體落地時 h=0，且 t≥0。落地時間為何？」的要求量已明示為「求符合時間定義域的正根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：t≥0，單位秒。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：t=-1 雖代數成立但不在模型時域。",
        "choices": "四選項逐一代入或反算；正確項理由為「方程式除以 -5 得 t²-4t-5=0，根為 5、-1，只取非負。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "t 以秒計，h 的係數單位已含在模型中。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "需要建模、整理、求根與篩選。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為高度為 0 的物理事件與 t≥0 定義域共同決定答案。",
      "reviewerNote": "獨立重算「某物體高度模型為 h(t)=-5t²+20t+25。物體落地時 h=0，且 t≥0。落地時間為何？」：獨立由原始條件重算：(t-5)(t+1)=0；t=5 或 -1；模型定義 t≥0，故 5 秒。再逐項核對四個選項，只有「5 秒」同時符合方程式與限制；t=-1 雖代數成立但不在模型時域。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "d5ef3a88febbd874b025261f68d0e2993d88b8886e2327f0460d52a0a0c8f086"
    },
    {
      "questionId": "u13-s003-v011",
      "unitId": "u13",
      "skillId": "quadratic-formula",
      "contentSha256": "a63912c5a5a0a9abf7031fa9932938f974b0b395acb14abf300eb6fe2f3f887d",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：分解 (2d-1)(d-4)=0；候選 1/2、4；比較限制後只有 4",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「某校正距離 d 滿足 2d²-9d+4=0，裝置規定 d>1。可用的 d 為何？」的要求量已明示為「求裝置可接受的距離參數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：d>1。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：等號 d=1 不相關，1/2 排除。",
        "choices": "四選項逐一代入或反算；正確項理由為「公式根為 4 與 1/2，限制 d>1 只留 4。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "題目以同一距離單位表示 d，答案沿用該單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "公式與參數範圍整合。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為裝置門檻是排除其中一根的必要資訊。",
      "reviewerNote": "獨立重算「某校正距離 d 滿足 2d²-9d+4=0，裝置規定 d>1。可用的 d 為何？」：獨立由原始條件重算：分解 (2d-1)(d-4)=0；候選 1/2、4；比較限制後只有 4。再逐項核對四個選項，只有「4」同時符合方程式與限制；等號 d=1 不相關，1/2 排除。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "b603f0d21bca73614508e19c66506e83d172bbe85e35b5e0fe3a3fd76874c611"
    },
    {
      "questionId": "u13-s003-v012",
      "unitId": "u13",
      "skillId": "quadratic-formula",
      "contentSha256": "116546485e6dedebb9443f504da722dada27c68c1feefa5d7db892327ec1c81f",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：3n²-14n-5=(3n+1)(n-5)；兩根 -1/3、5，正整數限制唯一保留 5",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「某包裝數量 n 滿足 3n²-14n-5=0，且 n 必須為正整數。n 為何？」的要求量已明示為「求可行包裝數量」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：n∈正整數。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：非整數與負值都不可作數量。",
        "choices": "四選項逐一代入或反算；正確項理由為「公式根為 5 與 -1/3，只有 5 是正整數。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "n 是件數，必須為無單位的正整數。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "含公式大平方判別式與離散限制。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為包裝數量的正整數性使代數解集縮為單一可行值。",
      "reviewerNote": "獨立重算「某包裝數量 n 滿足 3n²-14n-5=0，且 n 必須為正整數。n 為何？」：獨立由原始條件重算：3n²-14n-5=(3n+1)(n-5)；兩根 -1/3、5，正整數限制唯一保留 5。再逐項核對四個選項，只有「5」同時符合方程式與限制；非整數與負值都不可作數量。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "d43cf682ea0ec65f14a80fc484f8a52e343dd1593005a588ea96c8b3a3d963b9"
    }
  ],
  "drawingSpecs": []
};
