export default {
  "lecture": {
    "lectureId": "u13-s005-lecture-r1",
    "unitId": "u13",
    "numericUnitId": 13,
    "topicId": "u13-solving",
    "skillId": "quadratic-square-root-method",
    "lockedOrder": 5,
    "originalLockedTitle": "平方根解法",
    "title": "平方根解法",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能解 x²=k 與 (x-h)²=k。",
      "能保留正負平方根。",
      "能判斷 k<0 時無實數解。",
      "能處理括號內含一次係數的平方。"
    ],
    "prerequisites": [
      {
        "skillId": "quadratic-discriminant",
        "requiredLevel": "能說明前一技能的核心規則並完成基本計算，不只記答案。"
      }
    ],
    "prerequisiteBridge": "利用判別式所揭示的平方非負觀念，改用更直接的平方形式求解。",
    "glossary": [
      {
        "term": "平方根解法",
        "definition": "把方程式整理成某個代數式的平方等於常數，再開平方。"
      },
      {
        "term": "正平方根",
        "definition": "非負數 k 的非負平方根 √k。"
      },
      {
        "term": "負平方根",
        "definition": "當 k>0 時，-√k 也是平方等於 k 的數。"
      },
      {
        "term": "實數平方",
        "definition": "任何實數的平方皆大於或等於 0。"
      }
    ],
    "notation": [
      {
        "symbol": "y²=k",
        "meaning": "k>0 時 y=±√k；k=0 時 y=0；k<0 時無實數解。"
      },
      {
        "symbol": "(ax+b)²=k",
        "meaning": "先令 ax+b=±√k，再解兩個一次方程式。"
      }
    ],
    "conceptNarrative": [
      "平方根解法適合已經是平方形式，或很容易移項成平方形式的方程式。",
      "± 是兩個分支，不是裝飾符號。",
      "若平方右邊為 0，正負分支合併成同一根。",
      "若平方右邊為負，利用實數平方非負可直接判斷無實數根。",
      "括號內不是單純 x 時，開平方後仍要解一次方程式。"
    ],
    "formalDefinitions": [
      {
        "name": "平方根解法",
        "statement": "若 A(x)²=k，則依 k 的正負決定 A(x)=±√k、A(x)=0 或無實數解。"
      }
    ],
    "formulas": [
      {
        "formula": "(x-h)²=k ⇒ x=h±√k",
        "conditions": [
          "k≥0",
          "在實數範圍"
        ],
        "meaning": "由平方形式直接求根。"
      }
    ],
    "nonApplicableCases": [
      "一般 ax²+bx+c=0 若未化為平方形式，不宜直接對每一項開平方。",
      "√(u+v) 通常不等於 √u+√v。",
      "k<0 時不可在國中實數範圍寫 √k。",
      "開平方後仍要解括號內的一次式。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "把平方項單獨留在一邊。",
        "check": "平方外的係數是否先除掉？"
      },
      {
        "step": 2,
        "instruction": "判斷右邊常數 k 的正負。",
        "check": "k<0 是否直接判無實根？"
      },
      {
        "step": 3,
        "instruction": "k>0 時寫括號內=±√k。",
        "check": "是否保留兩個分支？"
      },
      {
        "step": 4,
        "instruction": "解每個一次方程式。",
        "check": "括號內係數是否正確除掉？"
      },
      {
        "step": 5,
        "instruction": "代回原式並套用情境限制。",
        "check": "負值或超出範圍的根是否排除？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "解 x²=49。",
        "solutionSteps": [
          "x=±√49。"
        ],
        "answer": "x=7 或 x=-7。"
      },
      {
        "exampleId": "L2",
        "prompt": "解 (x-3)²=16。",
        "solutionSteps": [
          "x-3=±4。",
          "分別加 3。"
        ],
        "answer": "x=7 或 x=-1。"
      },
      {
        "exampleId": "L3",
        "prompt": "解 (2x+1)²=9。",
        "solutionSteps": [
          "2x+1=3 或 -3。",
          "解得 x=1 或 x=-2。"
        ],
        "answer": "x=1 或 x=-2。"
      },
      {
        "exampleId": "L4",
        "prompt": "解 5(x-2)²=45。",
        "solutionSteps": [
          "先除以 5，得 (x-2)²=9。",
          "x-2=±3。"
        ],
        "answer": "x=5 或 x=-1。"
      },
      {
        "exampleId": "L5",
        "prompt": "判斷 (x+1)²=-2。",
        "solutionSteps": [
          "左邊為實數平方，必為非負。"
        ],
        "answer": "沒有實數解。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "x²=25 只寫 x=5。",
        "why": "漏掉 -5 的平方也為 25。",
        "correction": "寫 x=±5。"
      },
      {
        "mistake": "(x-4)²=9 寫 x=±3。",
        "why": "忘記還要加回 4。",
        "correction": "先寫 x-4=±3。"
      },
      {
        "mistake": "(2x+1)²=16 直接寫 x=±4。",
        "why": "忽略括號內整體。",
        "correction": "令 2x+1=±4。"
      },
      {
        "mistake": "平方等於負數仍求實根。",
        "why": "違反實數平方非負。",
        "correction": "判定無實數解。"
      },
      {
        "mistake": "把 √12 化成 6。",
        "why": "根號運算錯誤。",
        "correction": "√12=2√3。"
      },
      {
        "mistake": "情境長度保留負根。",
        "why": "未套用物理限制。",
        "correction": "代數根求完後檢查定義域。"
      }
    ],
    "selfCheck": [
      "平方外係數是否移除？",
      "右邊常數正負為何？",
      "是否寫 ±？",
      "括號內一次式是否解完？",
      "情境限制是否套用？"
    ],
    "summary": [
      "平方根解法直接處理平方等於常數。",
      "±、0、無實根由右邊常數決定。",
      "括號內需視為整體。",
      "最後要驗算並處理情境限制。"
    ],
    "connections": {
      "previous": "利用判別式所揭示的平方非負觀念，改用更直接的平方形式求解。",
      "next": [
        "下一節辨認標準式與係數，為所有解法建立共同起點。",
        "基本配方法會把一般式轉成平方根解法可用的形式。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u13-s005-v001",
        "u13-s005-v002",
        "u13-s005-v003",
        "u13-s005-v004",
        "u13-s005-v005",
        "u13-s005-v006",
        "u13-s005-v007",
        "u13-s005-v008",
        "u13-s005-v009",
        "u13-s005-v010",
        "u13-s005-v011",
        "u13-s005-v012"
      ],
      "constructedResponseIds": [
        "u13-s005-cr001",
        "u13-s005-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "reviewNote": "五個例子逐一平方回去驗證；確認 (2x+1)² 的兩根、5 倍平方先除以 5，以及負常數案例在實數範圍確實不可能。",
      "reviewVersion": "human-lecture-review-u13-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "980c61f825518950f92baf07f0604c59a3980208b320870754b38a1d34bf0e2a"
  },
  "mcQuestions": [
    {
      "questionId": "u13-s005-v001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "lockedSkillOrder": 5,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解 x²=49。",
      "givenConditions": "實數範圍。",
      "target": "求平方方程式的根",
      "choices": [
        "x=7 或 x=-7",
        "x=7",
        "x=-7",
        "x=49 或 x=-49"
      ],
      "answerIndex": 0,
      "explanation": "x=±√49；得到 x=±7，所以答案為「x=7 或 x=-7」。",
      "steps": [
        "x=±√49",
        "得到 x=±7"
      ],
      "optionAnalysis": [
        {
          "choice": "x=7 或 x=-7",
          "truth": true,
          "reason": "平方等於正數 49 有正負兩個平方根。"
        },
        {
          "choice": "x=7",
          "truth": false,
          "reason": "漏掉負平方根。"
        },
        {
          "choice": "x=-7",
          "truth": false,
          "reason": "漏掉正平方根。"
        },
        {
          "choice": "x=49 或 x=-49",
          "truth": false,
          "reason": "沒有開平方。"
        }
      ],
      "misconceptionTarget": "只取正平方根",
      "prerequisiteSkillIds": [
        "quadratic-discriminant"
      ],
      "estimatedTimeSec": 45,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "± 兩根均需保留。",
      "difficultyReason": "最基本平方根解法。",
      "literacyContextNecessity": null,
      "authoringIntent": "求平方方程式的根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fc0868bfe375f16f16a57896187902bccf47a9950840ddc720755be14453e625"
    },
    {
      "questionId": "u13-s005-v002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "lockedSkillOrder": 5,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解 (x-3)²=16。",
      "givenConditions": "實數範圍。",
      "target": "解平移平方方程式",
      "choices": [
        "x=4 或 x=-4",
        "x=19 或 x=-13",
        "x=7 或 x=-1",
        "x=3±16"
      ],
      "answerIndex": 2,
      "explanation": "x-3=4 或 -4；x=7 或 -1，所以答案為「x=7 或 x=-1」。",
      "steps": [
        "x-3=4 或 -4",
        "x=7 或 -1"
      ],
      "optionAnalysis": [
        {
          "choice": "x=4 或 x=-4",
          "truth": false,
          "reason": "忘記括號位移 3。"
        },
        {
          "choice": "x=19 或 x=-13",
          "truth": false,
          "reason": "把 16 當平方根。"
        },
        {
          "choice": "x=7 或 x=-1",
          "truth": true,
          "reason": "x-3=±4，再加 3。"
        },
        {
          "choice": "x=3±16",
          "truth": false,
          "reason": "未開平方。"
        }
      ],
      "misconceptionTarget": "開平方後忘記解一次式",
      "prerequisiteSkillIds": [
        "quadratic-discriminant"
      ],
      "estimatedTimeSec": 55,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "兩根皆合法。",
      "difficultyReason": "基本括號位移。",
      "literacyContextNecessity": null,
      "authoringIntent": "解平移平方方程式",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ab65f1ea79af4cfd8bff8538d54ac6001c5748f415767371a5e5154fd2838982"
    },
    {
      "questionId": "u13-s005-v003",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "lockedSkillOrder": 5,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解 (2x+1)²=9。",
      "givenConditions": "2 非 0。",
      "target": "處理括號內一次係數",
      "choices": [
        "x=3 或 x=-3",
        "x=1 或 x=-2",
        "x=2 或 x=-1",
        "x=4 或 x=-2"
      ],
      "answerIndex": 1,
      "explanation": "2x+1=3 或 -3；2x=2 或 -4，得 1、-2，所以答案為「x=1 或 x=-2」。",
      "steps": [
        "2x+1=3 或 -3",
        "2x=2 或 -4，得 1、-2"
      ],
      "optionAnalysis": [
        {
          "choice": "x=3 或 x=-3",
          "truth": false,
          "reason": "把括號整體當 x。"
        },
        {
          "choice": "x=1 或 x=-2",
          "truth": true,
          "reason": "2x+1=±3，分別解得 1、-2。"
        },
        {
          "choice": "x=2 或 x=-1",
          "truth": false,
          "reason": "解一次方程式時位移錯。"
        },
        {
          "choice": "x=4 或 x=-2",
          "truth": false,
          "reason": "正分支忘記除以 2。"
        }
      ],
      "misconceptionTarget": "開平方後未完成一次方程式",
      "prerequisiteSkillIds": [
        "quadratic-discriminant"
      ],
      "estimatedTimeSec": 65,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "分支各自解。",
      "difficultyReason": "含係數的平方根解法。",
      "literacyContextNecessity": null,
      "authoringIntent": "處理括號內一次係數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "09c352d239da3d0b823896b05e2a451e922f46255557293bae7e544663835a77"
    },
    {
      "questionId": "u13-s005-v004",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "lockedSkillOrder": 5,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "x²=-4 在實數範圍的解為何？",
      "givenConditions": "限定實數範圍。",
      "target": "判斷負常數平方方程式",
      "choices": [
        "x=2",
        "x=-2",
        "x=±2",
        "沒有實數解"
      ],
      "answerIndex": 3,
      "explanation": "觀察右邊為負數；依實數平方非負判定無解，所以答案為「沒有實數解」。",
      "steps": [
        "觀察右邊為負數",
        "依實數平方非負判定無解"
      ],
      "optionAnalysis": [
        {
          "choice": "x=2",
          "truth": false,
          "reason": "2²=4，不是 -4。"
        },
        {
          "choice": "x=-2",
          "truth": false,
          "reason": "(-2)²=4。"
        },
        {
          "choice": "x=±2",
          "truth": false,
          "reason": "兩者平方都為正 4。"
        },
        {
          "choice": "沒有實數解",
          "truth": true,
          "reason": "實數平方必為非負，不可能等於 -4。"
        }
      ],
      "misconceptionTarget": "把負號忽略",
      "prerequisiteSkillIds": [
        "quadratic-discriminant"
      ],
      "estimatedTimeSec": 50,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "不引入複數。",
      "difficultyReason": "概念判斷而非運算。",
      "literacyContextNecessity": null,
      "authoringIntent": "判斷負常數平方方程式",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "333da88659d64542d927efc9e59795ae97d6b8b8579cf00565dfa27eb7f79866"
    },
    {
      "questionId": "u13-s005-v005",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "lockedSkillOrder": 5,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解 5(x-2)²=45。",
      "givenConditions": "除數 5 非 0。",
      "target": "解含平方外係數的方程式",
      "choices": [
        "x=3 或 x=-3",
        "x=11 或 x=-7",
        "x=5 或 x=-1",
        "x=7 或 x=-3"
      ],
      "answerIndex": 2,
      "explanation": "兩邊除以 5；x-2=±3，故 x=5、-1，所以答案為「x=5 或 x=-1」。",
      "steps": [
        "兩邊除以 5",
        "x-2=±3，故 x=5、-1"
      ],
      "optionAnalysis": [
        {
          "choice": "x=3 或 x=-3",
          "truth": false,
          "reason": "忘記加回 2。"
        },
        {
          "choice": "x=11 或 x=-7",
          "truth": false,
          "reason": "直接以 ±9 處理括號。"
        },
        {
          "choice": "x=5 或 x=-1",
          "truth": true,
          "reason": "先除以 5 得 (x-2)²=9，再開平方。"
        },
        {
          "choice": "x=7 或 x=-3",
          "truth": false,
          "reason": "平方外係數處理錯。"
        }
      ],
      "misconceptionTarget": "未先隔離平方或位移錯",
      "prerequisiteSkillIds": [
        "quadratic-discriminant"
      ],
      "estimatedTimeSec": 75,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "精確整數根。",
      "difficultyReason": "多一步整體除法。",
      "literacyContextNecessity": null,
      "authoringIntent": "解含平方外係數的方程式",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "95fd7fe8a59b27b689f2797886a1d4aa81cd48bb160dba3bb7dd1f266bb01df6"
    },
    {
      "questionId": "u13-s005-v006",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "lockedSkillOrder": 5,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解 (x+4)²=7。",
      "givenConditions": "7>0。",
      "target": "求無理根",
      "choices": [
        "x=-4±√7",
        "x=4±√7",
        "x=-4±7",
        "x=±√3"
      ],
      "answerIndex": 0,
      "explanation": "x+4=±√7；x=-4±√7，所以答案為「x=-4±√7」。",
      "steps": [
        "x+4=±√7",
        "x=-4±√7"
      ],
      "optionAnalysis": [
        {
          "choice": "x=-4±√7",
          "truth": true,
          "reason": "開平方得 x+4=±√7，再減 4。"
        },
        {
          "choice": "x=4±√7",
          "truth": false,
          "reason": "位移符號反。"
        },
        {
          "choice": "x=-4±7",
          "truth": false,
          "reason": "未開平方。"
        },
        {
          "choice": "x=±√3",
          "truth": false,
          "reason": "錯誤合併 7 與 4。"
        }
      ],
      "misconceptionTarget": "位移與根號處理錯",
      "prerequisiteSkillIds": [
        "quadratic-discriminant"
      ],
      "estimatedTimeSec": 70,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "√7 已最簡。",
      "difficultyReason": "基本無理平方根。",
      "literacyContextNecessity": null,
      "authoringIntent": "求無理根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9bf1909729ee92133be88025d2e599797f24c1f702ffb24dfe435b14f73c6eb6"
    },
    {
      "questionId": "u13-s005-v007",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "lockedSkillOrder": 5,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "在不展開括號的前提下，解 4(x-1)²=3。",
      "givenConditions": "實數範圍。",
      "target": "化簡含分數的平方根",
      "choices": [
        "x=1±√3",
        "x=1±3/4",
        "x=(1±√3)/2",
        "x=1±√3/2"
      ],
      "answerIndex": 3,
      "explanation": "(x-1)²=3/4；x-1=±√3/2，故 x=1±√3/2，所以答案為「x=1±√3/2」。",
      "steps": [
        "(x-1)²=3/4",
        "x-1=±√3/2，故 x=1±√3/2"
      ],
      "optionAnalysis": [
        {
          "choice": "x=1±√3",
          "truth": false,
          "reason": "忘記平方外的 4。"
        },
        {
          "choice": "x=1±3/4",
          "truth": false,
          "reason": "把平方根改成分數。"
        },
        {
          "choice": "x=(1±√3)/2",
          "truth": false,
          "reason": "分母錯誤作用到位移 1。"
        },
        {
          "choice": "x=1±√3/2",
          "truth": true,
          "reason": "先除以 4，或把 2(x-1)=±√3，均得相同結果。"
        }
      ],
      "misconceptionTarget": "分母作用範圍或根式錯",
      "prerequisiteSkillIds": [
        "quadratic-discriminant"
      ],
      "estimatedTimeSec": 105,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "答案需區分 1±√3/2 與 (1±√3)/2。",
      "difficultyReason": "分數線範圍精細。",
      "literacyContextNecessity": null,
      "authoringIntent": "化簡含分數的平方根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b2b18076b96dfb1723dd2258b1d0c3ee397bd89d30e34ba3b85f557adc1e1024"
    },
    {
      "questionId": "u13-s005-v008",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "lockedSkillOrder": 5,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解 (x-2)²=(x+1)²。",
      "givenConditions": "兩邊平方皆有定義。",
      "target": "解兩平方相等的方程式",
      "choices": [
        "x=-3/2",
        "x=1/2",
        "x=2 或 x=-1",
        "所有實數"
      ],
      "answerIndex": 1,
      "explanation": "令 x-2=x+1 或 x-2=-(x+1)；第一式無解，第二式 2x=1，所以答案為「x=1/2」。",
      "steps": [
        "令 x-2=x+1 或 x-2=-(x+1)",
        "第一式無解，第二式 2x=1"
      ],
      "optionAnalysis": [
        {
          "choice": "x=-3/2",
          "truth": false,
          "reason": "一次式移項錯誤。"
        },
        {
          "choice": "x=1/2",
          "truth": true,
          "reason": "兩平方相等時 x-2=±(x+1)；正分支矛盾，負分支得 2x=1。"
        },
        {
          "choice": "x=2 或 x=-1",
          "truth": false,
          "reason": "把兩邊分別設為 0。"
        },
        {
          "choice": "所有實數",
          "truth": false,
          "reason": "兩個平方並非恆等。"
        }
      ],
      "misconceptionTarget": "誤用零乘積或漏掉負分支",
      "prerequisiteSkillIds": [
        "quadratic-discriminant"
      ],
      "estimatedTimeSec": 120,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "其中一個分支為矛盾，不產生根。",
      "difficultyReason": "需轉為正負分支或平方差。",
      "literacyContextNecessity": null,
      "authoringIntent": "解兩平方相等的方程式",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f866e2276556267a1419fdf474bbc973f716560d9169ffd6e1fb987b4b1028a4"
    },
    {
      "questionId": "u13-s005-v009",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "lockedSkillOrder": 5,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "方程式 (3x-2)²=0 的實根為何？",
      "givenConditions": "右側為 0。",
      "target": "求重平方根",
      "choices": [
        "x=2/3",
        "x=-2/3",
        "x=2 或 x=-2",
        "x=0"
      ],
      "answerIndex": 0,
      "explanation": "3x-2=0；3x=2，x=2/3，所以答案為「x=2/3」。",
      "steps": [
        "3x-2=0",
        "3x=2，x=2/3"
      ],
      "optionAnalysis": [
        {
          "choice": "x=2/3",
          "truth": true,
          "reason": "平方為 0 時括號內必為 0。"
        },
        {
          "choice": "x=-2/3",
          "truth": false,
          "reason": "移項符號錯。"
        },
        {
          "choice": "x=2 或 x=-2",
          "truth": false,
          "reason": "把係數 3 忽略並誤作 ±。"
        },
        {
          "choice": "x=0",
          "truth": false,
          "reason": "只看右邊為 0。"
        }
      ],
      "misconceptionTarget": "把 0 情況誤寫 ± 或係數錯",
      "prerequisiteSkillIds": [
        "quadratic-discriminant"
      ],
      "estimatedTimeSec": 70,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "只有一個相異根。",
      "difficultyReason": "重根與分數解。",
      "literacyContextNecessity": null,
      "authoringIntent": "求重平方根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "17302740a853e8bb9d1aeac27001c4e6ceecbbdaf7ba96a8db6be70ac2dbf392"
    },
    {
      "questionId": "u13-s005-v010",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "lockedSkillOrder": 5,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "圓形標誌的半徑 r≥0 滿足 (r+1)²=81。r 為何？",
      "givenConditions": "r≥0。",
      "target": "求幾何可接受半徑",
      "choices": [
        "-10",
        "9",
        "8",
        "80"
      ],
      "answerIndex": 2,
      "explanation": "開平方得 r+1=9 或 -9；r=8 或 -10，依 r≥0 取 8，所以答案為「8」。",
      "steps": [
        "開平方得 r+1=9 或 -9",
        "r=8 或 -10，依 r≥0 取 8"
      ],
      "optionAnalysis": [
        {
          "choice": "-10",
          "truth": false,
          "reason": "是代數根但半徑不可為負。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "忘記減 1。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "r+1=±9，得 8、-10；半徑只取 8。"
        },
        {
          "choice": "80",
          "truth": false,
          "reason": "把平方關係誤作相減。"
        }
      ],
      "misconceptionTarget": "未排除負根或忘記位移",
      "prerequisiteSkillIds": [
        "quadratic-discriminant"
      ],
      "estimatedTimeSec": 90,
      "unitCheck": "r 使用題目標誌的長度單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "半徑負值不合理。",
      "difficultyReason": "平方根解法與幾何定義域。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為半徑非負條件決定唯一可用根。",
      "authoringIntent": "求幾何可接受半徑",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "04fa949fe84c77f61e47b2cb0024cbd1e92a92f266ac434fb7b55d21203e32f0"
    },
    {
      "questionId": "u13-s005-v011",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "lockedSkillOrder": 5,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某機台時間 t 滿足 (t-12)²=25，且只在 0≤t≤15 分鐘內運作。可接受的 t 為何？",
      "givenConditions": "0 與 15 都包含。",
      "target": "求運作區間內時間",
      "choices": [
        "17 分鐘",
        "7 分鐘",
        "12 分鐘",
        "7 或 17 分鐘"
      ],
      "answerIndex": 1,
      "explanation": "t-12=±5；t=17 或 7，區間留下 7，所以答案為「7 分鐘」。",
      "steps": [
        "t-12=±5",
        "t=17 或 7，區間留下 7"
      ],
      "optionAnalysis": [
        {
          "choice": "17 分鐘",
          "truth": false,
          "reason": "超出 15 分鐘。"
        },
        {
          "choice": "7 分鐘",
          "truth": true,
          "reason": "代數根為 7、17，只有 7 在運作區間。"
        },
        {
          "choice": "12 分鐘",
          "truth": false,
          "reason": "是平方中心，不是根。"
        },
        {
          "choice": "7 或 17 分鐘",
          "truth": false,
          "reason": "未套用運作區間。"
        }
      ],
      "misconceptionTarget": "忽略時間區間",
      "prerequisiteSkillIds": [
        "quadratic-discriminant"
      ],
      "estimatedTimeSec": 95,
      "unitCheck": "t 單位為分鐘。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "17 必須排除。",
      "difficultyReason": "兩根與區間篩選。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為機台運作區間是決定可接受時間的必要資料。",
      "authoringIntent": "求運作區間內時間",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3ff5196c521b88f1e104e211a7396a92d3bcc4959aef0ad09fc8e643760b356a"
    },
    {
      "questionId": "u13-s005-v012",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "lockedSkillOrder": 5,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "材料厚度 d（毫米）滿足 (d-4)²=0.09。可能厚度為何？",
      "givenConditions": "厚度為正，兩值皆合理。",
      "target": "求公差兩側厚度",
      "choices": [
        "3.91 mm 或 4.09 mm",
        "3 mm 或 5 mm",
        "只有 4.3 mm",
        "3.7 mm 或 4.3 mm"
      ],
      "answerIndex": 3,
      "explanation": "d-4=±0.3；d=3.7 或 4.3，所以答案為「3.7 mm 或 4.3 mm」。",
      "steps": [
        "d-4=±0.3",
        "d=3.7 或 4.3"
      ],
      "optionAnalysis": [
        {
          "choice": "3.91 mm 或 4.09 mm",
          "truth": false,
          "reason": "把 √0.09 錯算成 0.09。"
        },
        {
          "choice": "3 mm 或 5 mm",
          "truth": false,
          "reason": "把 √0.09 錯算成 1。"
        },
        {
          "choice": "只有 4.3 mm",
          "truth": false,
          "reason": "漏掉負偏差分支。"
        },
        {
          "choice": "3.7 mm 或 4.3 mm",
          "truth": true,
          "reason": "√0.09=0.3，所以 d=4±0.3。"
        }
      ],
      "misconceptionTarget": "小數平方根或漏分支",
      "prerequisiteSkillIds": [
        "quadratic-discriminant"
      ],
      "estimatedTimeSec": 95,
      "unitCheck": "d 與偏差均以毫米表示。",
      "roundingCheck": "0.09 的平方根精確為 0.3，不需近似。",
      "ambiguityAndBoundaryAudit": "精確到 0.1 mm，無額外四捨五入。",
      "difficultyReason": "小數平方根與雙側公差。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為材料公差的兩側偏差使 ± 兩根都有實際意義。",
      "authoringIntent": "求公差兩側厚度",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c498cd6f3728aeea5c2b13a9eed36f9c0f357c244160e640610ff4e30246a505"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u13-s005-cr001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "解 2(x-5)²=18，並驗算。",
      "requiredWork": [
        "隔離平方。",
        "開平方保留兩分支。",
        "代回驗算。"
      ],
      "fullCreditSolution": [
        "兩邊除以 2，得 (x-5)²=9。",
        "x-5=±3，所以 x=8 或 x=2。",
        "代入兩值時 (x-5)² 都是 9，乘 2 得 18。"
      ],
      "alternativeSolutions": [
        "可展開成 2x²-20x+32=0，再除 2 並分解 (x-8)(x-2)=0。"
      ],
      "reasoningSteps": [
        "先除平方外係數。",
        "開平方。",
        "處理位移。",
        "驗算。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩根 8、2 與驗算完整。"
        },
        {
          "score": 2,
          "criteria": "兩根正確但驗算未展示，或驗算正確但一個符號書寫小錯。"
        },
        {
          "score": 1,
          "criteria": "正確得到 (x-5)²=9，但只取一根或位移錯。"
        },
        {
          "score": 0,
          "criteria": "未能隔離平方且答案錯。"
        }
      ],
      "partialCreditRules": [
        "根順序不影響。",
        "驗算至少需展示一個共同結論：兩根的括號值為 ±3。"
      ],
      "followThroughPolicy": "若漏負分支，只能給 1 分；若之後代回發現並補回，可恢復。",
      "unitNotationRules": [
        "x 無單位。"
      ],
      "answerOnlyPolicy": "只寫 2、8 而無過程與驗算，最多 1 分。",
      "commonErrors": [
        "忘記除 2。",
        "只寫 x=8。",
        "把 x-5=±9。"
      ],
      "independentReview": {
        "derivedResult": "x=2 或 x=8。",
        "ambiguity": "實數範圍、右端正，兩根均合法。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "7a8fa228baeaa2619dcbe86669bf9f42e0722723f8459b92addbd121d8d8d6a4"
    },
    {
      "questionId": "u13-s005-cr002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-square-root-method",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "解 (2x-1)²=12，答案化成最簡根式。",
      "requiredWork": [
        "開平方。",
        "解兩個一次分支。",
        "化簡 √12。"
      ],
      "fullCreditSolution": [
        "2x-1=±√12=±2√3。",
        "2x=1±2√3。",
        "x=(1±2√3)/2=1/2±√3。"
      ],
      "alternativeSolutions": [
        "可先展開為 4x²-4x-11=0，再用公式得到同樣答案。"
      ],
      "reasoningSteps": [
        "把括號視為整體。",
        "化簡根式。",
        "整體除以 2。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "得到 x=1/2±√3，步驟與根式化簡正確。"
        },
        {
          "score": 2,
          "criteria": "得到等值形式 (1±2√3)/2，但未最後整理，或一個書寫小瑕疵。"
        },
        {
          "score": 1,
          "criteria": "正確寫 2x-1=±√12，但後續一次方程或化簡錯。"
        },
        {
          "score": 0,
          "criteria": "把每一項分別開平方或漏掉所有有效步驟。"
        }
      ],
      "partialCreditRules": [
        "(1±√12)/2 也是等值但未最簡，最高 2 分。",
        "兩支可分開列。"
      ],
      "followThroughPolicy": "若 √12 化簡錯，保留開平方方法 1 分；不能依錯值給滿分。",
      "unitNotationRules": [
        "x 無單位。",
        "根式需最簡。"
      ],
      "answerOnlyPolicy": "只寫最終正確答案，最多 2 分。",
      "commonErrors": [
        "√12=6。",
        "分母只除根式。",
        "漏負分支。"
      ],
      "independentReview": {
        "derivedResult": "x=1/2±√3。",
        "ambiguity": "所有根在實數範圍，答案等值形式可客觀判定。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "da12723db6c3d1d43595cd33d8e9e7bc960b5d59e14e4efa9a8572875fdcd1ac"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u13-s005-v001",
      "unitId": "u13",
      "skillId": "quadratic-square-root-method",
      "contentSha256": "fc0868bfe375f16f16a57896187902bccf47a9950840ddc720755be14453e625",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：7²=49 且 (-7)²=49；二次方程式至多兩根，兩者皆成立",
      "derivedAnswer": "x=7 或 x=-7",
      "storedAnswer": "x=7 或 x=-7",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「解 x²=49。」的要求量已明示為「求平方方程式的根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：實數範圍。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：± 兩根均需保留。",
        "choices": "四選項逐一代入或反算；正確項理由為「平方等於正數 49 有正負兩個平方根。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "最基本平方根解法。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解 x²=49。」：獨立由原始條件重算：7²=49 且 (-7)²=49；二次方程式至多兩根，兩者皆成立。再逐項核對四個選項，只有「x=7 或 x=-7」同時符合方程式與限制；± 兩根均需保留。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "e01c776f011f1684d84727e6744cd4b6a8b289a28cc26d0519f7ff5290027538"
    },
    {
      "questionId": "u13-s005-v002",
      "unitId": "u13",
      "skillId": "quadratic-square-root-method",
      "contentSha256": "ab65f1ea79af4cfd8bff8538d54ac6001c5748f415767371a5e5154fd2838982",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：代回：7-3=4，平方 16；-1-3=-4，平方 16；兩根均成立",
      "derivedAnswer": "x=7 或 x=-1",
      "storedAnswer": "x=7 或 x=-1",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「解 (x-3)²=16。」的要求量已明示為「解平移平方方程式」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：實數範圍。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：兩根皆合法。",
        "choices": "四選項逐一代入或反算；正確項理由為「x-3=±4，再加 3。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "基本括號位移。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解 (x-3)²=16。」：獨立由原始條件重算：代回：7-3=4，平方 16；-1-3=-4，平方 16；兩根均成立。再逐項核對四個選項，只有「x=7 或 x=-1」同時符合方程式與限制；兩根皆合法。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "5f0ce8e9315a6e39a2b351d5c4a76e784ebccc8dc1f014b32465cb46e8bb092d"
    },
    {
      "questionId": "u13-s005-v003",
      "unitId": "u13",
      "skillId": "quadratic-square-root-method",
      "contentSha256": "09c352d239da3d0b823896b05e2a451e922f46255557293bae7e544663835a77",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：代入 x=1 括號值 3；代入 -2 括號值 -3；兩者平方皆 9",
      "derivedAnswer": "x=1 或 x=-2",
      "storedAnswer": "x=1 或 x=-2",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「解 (2x+1)²=9。」的要求量已明示為「處理括號內一次係數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：2 非 0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：分支各自解。",
        "choices": "四選項逐一代入或反算；正確項理由為「2x+1=±3，分別解得 1、-2。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "含係數的平方根解法。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解 (2x+1)²=9。」：獨立由原始條件重算：代入 x=1 括號值 3；代入 -2 括號值 -3；兩者平方皆 9。再逐項核對四個選項，只有「x=1 或 x=-2」同時符合方程式與限制；分支各自解。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "c1253b44e753798e9a3d62071b45463c2fb960fbf414abeb178c1c5140bfe8fc"
    },
    {
      "questionId": "u13-s005-v004",
      "unitId": "u13",
      "skillId": "quadratic-square-root-method",
      "contentSha256": "333da88659d64542d927efc9e59795ae97d6b8b8579cf00565dfa27eb7f79866",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：任意實數 x 都有 x²≥0；所以不能等於 -4",
      "derivedAnswer": "沒有實數解",
      "storedAnswer": "沒有實數解",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「x²=-4 在實數範圍的解為何？」的要求量已明示為「判斷負常數平方方程式」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：限定實數範圍。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：不引入複數。",
        "choices": "四選項逐一代入或反算；正確項理由為「實數平方必為非負，不可能等於 -4。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "概念判斷而非運算。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「x²=-4 在實數範圍的解為何？」：獨立由原始條件重算：任意實數 x 都有 x²≥0；所以不能等於 -4。再逐項核對四個選項，只有「沒有實數解」同時符合方程式與限制；不引入複數。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "1e480899ad0559645990e6b0a28d2b81fedd2afd2c5b9c285f26ffac5099474d"
    },
    {
      "questionId": "u13-s005-v005",
      "unitId": "u13",
      "skillId": "quadratic-square-root-method",
      "contentSha256": "95fd7fe8a59b27b689f2797886a1d4aa81cd48bb160dba3bb7dd1f266bb01df6",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：代回 x=5：5·9=45；x=-1：5·9=45；兩根均成立",
      "derivedAnswer": "x=5 或 x=-1",
      "storedAnswer": "x=5 或 x=-1",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「解 5(x-2)²=45。」的要求量已明示為「解含平方外係數的方程式」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：除數 5 非 0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：精確整數根。",
        "choices": "四選項逐一代入或反算；正確項理由為「先除以 5 得 (x-2)²=9，再開平方。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "多一步整體除法。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解 5(x-2)²=45。」：獨立由原始條件重算：代回 x=5：5·9=45；x=-1：5·9=45；兩根均成立。再逐項核對四個選項，只有「x=5 或 x=-1」同時符合方程式與限制；精確整數根。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "113b580321c45608331dcffb7453df204fea92564c886bc71d84353b86d47991"
    },
    {
      "questionId": "u13-s005-v006",
      "unitId": "u13",
      "skillId": "quadratic-square-root-method",
      "contentSha256": "9bf1909729ee92133be88025d2e599797f24c1f702ffb24dfe435b14f73c6eb6",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：兩候選代回後括號分別為 ±√7；平方皆為 7",
      "derivedAnswer": "x=-4±√7",
      "storedAnswer": "x=-4±√7",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「解 (x+4)²=7。」的要求量已明示為「求無理根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：7>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：√7 已最簡。",
        "choices": "四選項逐一代入或反算；正確項理由為「開平方得 x+4=±√7，再減 4。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "基本無理平方根。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解 (x+4)²=7。」：獨立由原始條件重算：兩候選代回後括號分別為 ±√7；平方皆為 7。再逐項核對四個選項，只有「x=-4±√7」同時符合方程式與限制；√7 已最簡。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "3704ab1e8001fb736a56cd42154bdd595ba9849e8bcd3aae20917c0f55542e57"
    },
    {
      "questionId": "u13-s005-v007",
      "unitId": "u13",
      "skillId": "quadratic-square-root-method",
      "contentSha256": "b2b18076b96dfb1723dd2258b1d0c3ee397bd89d30e34ba3b85f557adc1e1024",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：代回時 x-1=±√3/2；平方為 3/4，再乘 4 得 3",
      "derivedAnswer": "x=1±√3/2",
      "storedAnswer": "x=1±√3/2",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「在不展開括號的前提下，解 4(x-1)²=3。」的要求量已明示為「化簡含分數的平方根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：實數範圍。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：答案需區分 1±√3/2 與 (1±√3)/2。",
        "choices": "四選項逐一代入或反算；正確項理由為「先除以 4，或把 2(x-1)=±√3，均得相同結果。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "分數線範圍精細。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「在不展開括號的前提下，解 4(x-1)²=3。」：獨立由原始條件重算：代回時 x-1=±√3/2；平方為 3/4，再乘 4 得 3。再逐項核對四個選項，只有「x=1±√3/2」同時符合方程式與限制；答案需區分 1±√3/2 與 (1±√3)/2。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "9d112040743bf12cb4351ee2cc4dc7c07a5c0cab3480a6ce09f97dc6ac0164e7"
    },
    {
      "questionId": "u13-s005-v008",
      "unitId": "u13",
      "skillId": "quadratic-square-root-method",
      "contentSha256": "f866e2276556267a1419fdf474bbc973f716560d9169ffd6e1fb987b4b1028a4",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：也可作平方差：(x-2-(x+1))(x-2+x+1)=0；(-3)(2x-1)=0，所以 x=1/2",
      "derivedAnswer": "x=1/2",
      "storedAnswer": "x=1/2",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「解 (x-2)²=(x+1)²。」的要求量已明示為「解兩平方相等的方程式」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：兩邊平方皆有定義。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：其中一個分支為矛盾，不產生根。",
        "choices": "四選項逐一代入或反算；正確項理由為「兩平方相等時 x-2=±(x+1)；正分支矛盾，負分支得 2x=1。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "需轉為正負分支或平方差。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解 (x-2)²=(x+1)²。」：獨立由原始條件重算：也可作平方差：(x-2-(x+1))(x-2+x+1)=0；(-3)(2x-1)=0，所以 x=1/2。再逐項核對四個選項，只有「x=1/2」同時符合方程式與限制；其中一個分支為矛盾，不產生根。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "da64f354c0bbc60f97db1d9856ff890bd596239b3a96c37995b45ce972e25a50"
    },
    {
      "questionId": "u13-s005-v009",
      "unitId": "u13",
      "skillId": "quadratic-square-root-method",
      "contentSha256": "17302740a853e8bb9d1aeac27001c4e6ceecbbdaf7ba96a8db6be70ac2dbf392",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：代回 3·(2/3)-2=0；平方確為 0，且重根只列一次",
      "derivedAnswer": "x=2/3",
      "storedAnswer": "x=2/3",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「方程式 (3x-2)²=0 的實根為何？」的要求量已明示為「求重平方根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：右側為 0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：只有一個相異根。",
        "choices": "四選項逐一代入或反算；正確項理由為「平方為 0 時括號內必為 0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "重根與分數解。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「方程式 (3x-2)²=0 的實根為何？」：獨立由原始條件重算：代回 3·(2/3)-2=0；平方確為 0，且重根只列一次。再逐項核對四個選項，只有「x=2/3」同時符合方程式與限制；只有一個相異根。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "4706a8de09e20eaf72684bc0a8dd3b10751544c0e2d0b5122e940eada94a507c"
    },
    {
      "questionId": "u13-s005-v010",
      "unitId": "u13",
      "skillId": "quadratic-square-root-method",
      "contentSha256": "04fa949fe84c77f61e47b2cb0024cbd1e92a92f266ac434fb7b55d21203e32f0",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：半徑 r+1 本身為正長度，直接取 r+1=9；得到 r=8，代回平方 81",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「圓形標誌的半徑 r≥0 滿足 (r+1)²=81。r 為何？」的要求量已明示為「求幾何可接受半徑」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：r≥0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：半徑負值不合理。",
        "choices": "四選項逐一代入或反算；正確項理由為「r+1=±9，得 8、-10；半徑只取 8。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "r 使用題目標誌的長度單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "平方根解法與幾何定義域。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為半徑非負條件決定唯一可用根。",
      "reviewerNote": "獨立重算「圓形標誌的半徑 r≥0 滿足 (r+1)²=81。r 為何？」：獨立由原始條件重算：半徑 r+1 本身為正長度，直接取 r+1=9；得到 r=8，代回平方 81。再逐項核對四個選項，只有「8」同時符合方程式與限制；半徑負值不合理。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "49c64d6be03da51b05e6da4fae5e1ad9cd42c2a08cd51375db2dc4cb021f77ef"
    },
    {
      "questionId": "u13-s005-v011",
      "unitId": "u13",
      "skillId": "quadratic-square-root-method",
      "contentSha256": "3ff5196c521b88f1e104e211a7396a92d3bcc4959aef0ad09fc8e643760b356a",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：逐一比較閉區間 [0,15]；7 合格，17 超過上界",
      "derivedAnswer": "7 分鐘",
      "storedAnswer": "7 分鐘",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「某機台時間 t 滿足 (t-12)²=25，且只在 0≤t≤15 分鐘內運作。可接受的 t 為何？」的要求量已明示為「求運作區間內時間」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：0 與 15 都包含。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：17 必須排除。",
        "choices": "四選項逐一代入或反算；正確項理由為「代數根為 7、17，只有 7 在運作區間。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "t 單位為分鐘。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "兩根與區間篩選。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為機台運作區間是決定可接受時間的必要資料。",
      "reviewerNote": "獨立重算「某機台時間 t 滿足 (t-12)²=25，且只在 0≤t≤15 分鐘內運作。可接受的 t 為何？」：獨立由原始條件重算：逐一比較閉區間 [0,15]；7 合格，17 超過上界。再逐項核對四個選項，只有「7 分鐘」同時符合方程式與限制；17 必須排除。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "22aed33c37874ea22bad7fa7840753e81ddb85086d7874a0c79c84fa4188ebfd"
    },
    {
      "questionId": "u13-s005-v012",
      "unitId": "u13",
      "skillId": "quadratic-square-root-method",
      "contentSha256": "c498cd6f3728aeea5c2b13a9eed36f9c0f357c244160e640610ff4e30246a505",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：0.3²=0.09；兩個厚度與 4 的差分別為 -0.3、0.3，平方相同",
      "derivedAnswer": "3.7 mm 或 4.3 mm",
      "storedAnswer": "3.7 mm 或 4.3 mm",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「材料厚度 d（毫米）滿足 (d-4)²=0.09。可能厚度為何？」的要求量已明示為「求公差兩側厚度」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：厚度為正，兩值皆合理。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：精確到 0.1 mm，無額外四捨五入。",
        "choices": "四選項逐一代入或反算；正確項理由為「√0.09=0.3，所以 d=4±0.3。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "d 與偏差均以毫米表示。",
      "roundingCheck": "0.09 的平方根精確為 0.3，不需近似。",
      "difficultyReason": "小數平方根與雙側公差。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為材料公差的兩側偏差使 ± 兩根都有實際意義。",
      "reviewerNote": "獨立重算「材料厚度 d（毫米）滿足 (d-4)²=0.09。可能厚度為何？」：獨立由原始條件重算：0.3²=0.09；兩個厚度與 4 的差分別為 -0.3、0.3，平方相同。再逐項核對四個選項，只有「3.7 mm 或 4.3 mm」同時符合方程式與限制；精確到 0.1 mm，無額外四捨五入。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "082a3a14ce9d9c0f95d7e5a87c8a2def424414a6350765e5b00d7517f73f1488"
    }
  ],
  "drawingSpecs": []
};
