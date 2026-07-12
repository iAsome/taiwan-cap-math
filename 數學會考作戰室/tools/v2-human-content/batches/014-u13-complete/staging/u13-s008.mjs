export default {
  "lecture": {
    "lectureId": "u13-s008-lecture-r1",
    "unitId": "u13",
    "numericUnitId": 13,
    "topicId": "u13-solving",
    "skillId": "quadratic-complete-square-basic",
    "lockedOrder": 8,
    "originalLockedTitle": "配方法基本",
    "title": "首項係數為 1 的基本配方法",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能熟練補成 x²+2px+p²。",
      "能在首項係數為 1 的方程式兩邊同步補數。",
      "能把完成平方式與平方根解法連接。",
      "能處理結果為無理數的根。"
    ],
    "prerequisites": [
      {
        "skillId": "quadratic-solve-by-factoring",
        "requiredLevel": "能說明前一技能的核心規則並完成基本計算，不只記答案。"
      }
    ],
    "prerequisiteBridge": "承接整理後因式分解；當不能整數分解時，基本配方提供系統化方法。",
    "glossary": [
      {
        "term": "基本配方",
        "definition": "針對 x² 係數為 1 的二次式，補上一次項係數一半的平方。"
      },
      {
        "term": "補數",
        "definition": "為形成完全平方而加入的 (b/2)²。"
      },
      {
        "term": "等價方程式",
        "definition": "解集合完全相同的方程式。"
      }
    ],
    "notation": [
      {
        "symbol": "x²+bx+(b/2)²=(x+b/2)²",
        "meaning": "首項係數為 1 的配方規則。"
      }
    ],
    "conceptNarrative": [
      "本技能聚焦最常見且最容易失分的首項係數為 1 情況。",
      "x 的係數可為正或負；先除以 2 再平方，因此補數永遠非負。",
      "方程式兩邊同加補數，解集合不變。",
      "完成平方後若右邊不是完全平方數，答案可保留根式。",
      "配方也可用來比較兩個二次式是否等價。"
    ],
    "formalDefinitions": [
      {
        "name": "基本配方公式",
        "statement": "x²+bx=(x+b/2)²-(b/2)²。"
      }
    ],
    "formulas": [
      {
        "formula": "x²+bx+c=0 ⇒ (x+b/2)²=(b/2)²-c",
        "conditions": [
          "x² 係數為 1"
        ],
        "meaning": "直接得到平方形式。"
      }
    ],
    "nonApplicableCases": [
      "x² 係數不為 1 時應先使用一般配方流程。",
      "補數不是 b²，而是 (b/2)²。",
      "只把左邊改寫但忘記常數調整會改變式值。",
      "右邊負數時在實數範圍無解。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "把常數移到右邊。",
        "check": "左邊是否只剩 x²+bx？"
      },
      {
        "step": 2,
        "instruction": "計算 (b/2)²。",
        "check": "負 b 平方後是否為正？"
      },
      {
        "step": 3,
        "instruction": "兩邊同加補數。",
        "check": "等式是否保持平衡？"
      },
      {
        "step": 4,
        "instruction": "左邊寫成完全平方。",
        "check": "中間項展開是否為 bx？"
      },
      {
        "step": 5,
        "instruction": "開平方並化簡。",
        "check": "± 與根式是否完整？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "補成 x²+4x+□=(x+2)²。",
        "solutionSteps": [
          "4÷2=2，2²=4。"
        ],
        "answer": "□=4。"
      },
      {
        "exampleId": "L2",
        "prompt": "解 x²-6x+5=0。",
        "solutionSteps": [
          "x²-6x=-5，兩邊加 9。",
          "(x-3)²=4。"
        ],
        "answer": "x=1 或 x=5。"
      },
      {
        "exampleId": "L3",
        "prompt": "解 x²+10x+9=0。",
        "solutionSteps": [
          "x²+10x=-9，兩邊加 25。",
          "(x+5)²=16。"
        ],
        "answer": "x=-1 或 x=-9。"
      },
      {
        "exampleId": "L4",
        "prompt": "解 x²+6x+1=0。",
        "solutionSteps": [
          "(x+3)²=8。",
          "x+3=±2√2。"
        ],
        "answer": "x=-3±2√2。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "x²-6x 補 -9。",
        "why": "把一次項負號帶進平方結果。",
        "correction": "(-3)²=9，補數為正。"
      },
      {
        "mistake": "補數取 b²。",
        "why": "忘記先除以 2。",
        "correction": "使用 (b/2)²。"
      },
      {
        "mistake": "兩邊補不同數。",
        "why": "方程式不再等價。",
        "correction": "同步加同一補數。"
      },
      {
        "mistake": "完全平方括號符號寫反。",
        "why": "中間項符號不符。",
        "correction": "展開檢查 2px。"
      },
      {
        "mistake": "根式 8 不化簡。",
        "why": "答案不夠簡潔。",
        "correction": "√8=2√2。"
      },
      {
        "mistake": "只保留一個平方根。",
        "why": "漏根。",
        "correction": "使用 ±。"
      }
    ],
    "selfCheck": [
      "補數是否為 (b/2)²？",
      "兩邊是否同步？",
      "括號符號是否正確？",
      "右邊是否先判正負？",
      "根式是否化簡？"
    ],
    "summary": [
      "首項係數為 1 時可直接取一次項係數的一半平方。",
      "補數永遠非負。",
      "完成平方後用平方根解法。",
      "無理根保留最簡根式。"
    ],
    "connections": {
      "previous": "承接整理後因式分解；當不能整數分解時，基本配方提供系統化方法。",
      "next": [
        "下一節整合判別式與平方形式判斷根個數。",
        "公式解基本會提供另一種直接運算路徑。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u13-s008-v001",
        "u13-s008-v002",
        "u13-s008-v003",
        "u13-s008-v004",
        "u13-s008-v005",
        "u13-s008-v006",
        "u13-s008-v007",
        "u13-s008-v008",
        "u13-s008-v009",
        "u13-s008-v010",
        "u13-s008-v011",
        "u13-s008-v012"
      ],
      "constructedResponseIds": [
        "u13-s008-cr001",
        "u13-s008-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "reviewNote": "四例均重新展開完成平方式；確認 -6x 的補數為正 9、x²+10x+9 的兩根皆代回為 0，以及 √8 正確化為 2√2。",
      "reviewVersion": "human-lecture-review-u13-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "fd8a5082ea5553d089e94e8384fee2b30fed26fc2f2b0d4dafb4ab747360ae08"
  },
  "mcQuestions": [
    {
      "questionId": "u13-s008-v001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "lockedSkillOrder": 8,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "x²+4x+□=(x+2)²，□ 為何？",
      "givenConditions": "首項係數為 1。",
      "target": "求基本補數",
      "choices": [
        "2",
        "8",
        "16",
        "4"
      ],
      "answerIndex": 3,
      "explanation": "4÷2=2；2²=4，所以答案為「4」。",
      "steps": [
        "4÷2=2",
        "2²=4"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "只取一半未平方。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "直接使用一次項係數兩倍。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "直接平方 4。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "2²=4。"
        }
      ],
      "misconceptionTarget": "半係數與平方混淆",
      "prerequisiteSkillIds": [
        "quadratic-solve-by-factoring"
      ],
      "estimatedTimeSec": 45,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "唯一常數。",
      "difficultyReason": "最基本配方。",
      "literacyContextNecessity": null,
      "authoringIntent": "求基本補數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1b11069c27bf66856d1ba37330b670ba0dfea470422cccebb5077cc7c40a5873"
    },
    {
      "questionId": "u13-s008-v002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "lockedSkillOrder": 8,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "x²-14x+□=(x-7)²，□ 為何？",
      "givenConditions": "恆等式。",
      "target": "求負係數補數",
      "choices": [
        "-49",
        "49",
        "7",
        "196"
      ],
      "answerIndex": 1,
      "explanation": "(-14/2)²=(-7)²；得到 49，所以答案為「49」。",
      "steps": [
        "(-14/2)²=(-7)²",
        "得到 49"
      ],
      "optionAnalysis": [
        {
          "choice": "-49",
          "truth": false,
          "reason": "負數平方錯。"
        },
        {
          "choice": "49",
          "truth": true,
          "reason": "-14 的一半為 -7，平方 49。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "只取一半。"
        },
        {
          "choice": "196",
          "truth": false,
          "reason": "直接平方 -14。"
        }
      ],
      "misconceptionTarget": "平方結果符號錯",
      "prerequisiteSkillIds": [
        "quadratic-solve-by-factoring"
      ],
      "estimatedTimeSec": 50,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "補數非負。",
      "difficultyReason": "負一次項配方。",
      "literacyContextNecessity": null,
      "authoringIntent": "求負係數補數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "49e13dce4f96be4463922158c8338c8b8240e18e7550ff823378728f5d370bc5"
    },
    {
      "questionId": "u13-s008-v003",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "lockedSkillOrder": 8,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "將 x²+2x-8=0 配成完全平方後，所得的兩個根為何？",
      "givenConditions": "實數範圍。",
      "target": "求基本配方根",
      "choices": [
        "x=2 或 x=-4",
        "x=3 或 x=-3",
        "x=4 或 x=-2",
        "x=8 或 x=-1"
      ],
      "answerIndex": 0,
      "explanation": "x²+2x=8，兩邊加 1；(x+1)²=9，x=-1±3，所以答案為「x=2 或 x=-4」。",
      "steps": [
        "x²+2x=8，兩邊加 1",
        "(x+1)²=9，x=-1±3"
      ],
      "optionAnalysis": [
        {
          "choice": "x=2 或 x=-4",
          "truth": true,
          "reason": "移項後補 1，得 (x+1)²=9。"
        },
        {
          "choice": "x=3 或 x=-3",
          "truth": false,
          "reason": "忘記減 1。"
        },
        {
          "choice": "x=4 或 x=-2",
          "truth": false,
          "reason": "位移方向錯。"
        },
        {
          "choice": "x=8 或 x=-1",
          "truth": false,
          "reason": "把常數直接當根。"
        }
      ],
      "misconceptionTarget": "開平方後位移錯",
      "prerequisiteSkillIds": [
        "quadratic-solve-by-factoring"
      ],
      "estimatedTimeSec": 75,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "兩根皆保留。",
      "difficultyReason": "完整基本配方。",
      "literacyContextNecessity": null,
      "authoringIntent": "求基本配方根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4efde75377eb8580e077984b4646fc516f3f57af363cdd12b979324e887fbfb2"
    },
    {
      "questionId": "u13-s008-v004",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "lockedSkillOrder": 8,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "用配方法解 x²-6x+5=0。",
      "givenConditions": "實數範圍。",
      "target": "求兩整數根",
      "choices": [
        "x=-1 或 x=-5",
        "x=3±4",
        "x=1 或 x=5",
        "x=3"
      ],
      "answerIndex": 2,
      "explanation": "x²-6x=-5，兩邊加 9；(x-3)²=4，x=3±2，所以答案為「x=1 或 x=5」。",
      "steps": [
        "x²-6x=-5，兩邊加 9",
        "(x-3)²=4，x=3±2"
      ],
      "optionAnalysis": [
        {
          "choice": "x=-1 或 x=-5",
          "truth": false,
          "reason": "整體符號反。"
        },
        {
          "choice": "x=3±4",
          "truth": false,
          "reason": "把平方根 4 誤作 4。"
        },
        {
          "choice": "x=1 或 x=5",
          "truth": true,
          "reason": "(x-3)²=4。"
        },
        {
          "choice": "x=3",
          "truth": false,
          "reason": "只取平方中心。"
        }
      ],
      "misconceptionTarget": "平方根與位移錯",
      "prerequisiteSkillIds": [
        "quadratic-solve-by-factoring"
      ],
      "estimatedTimeSec": 80,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "±√4=±2。",
      "difficultyReason": "中階基本配方。",
      "literacyContextNecessity": null,
      "authoringIntent": "求兩整數根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "173f2408feef16c6eeed2db630a43e3a7ad13c8d9fa1ed69e55f326c48535d84"
    },
    {
      "questionId": "u13-s008-v005",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "lockedSkillOrder": 8,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "x²+10x+9=0 配方後的平方形式為何？",
      "givenConditions": "首項係數 1。",
      "target": "選擇正確中間形式",
      "choices": [
        "(x+10)²=91",
        "(x+5)²=16",
        "(x-5)²=16",
        "(x+5)²=34"
      ],
      "answerIndex": 1,
      "explanation": "x²+10x=-9；補 25 得 (x+5)²=16，所以答案為「(x+5)²=16」。",
      "steps": [
        "x²+10x=-9",
        "補 25 得 (x+5)²=16"
      ],
      "optionAnalysis": [
        {
          "choice": "(x+10)²=91",
          "truth": false,
          "reason": "括號位移未取一半。"
        },
        {
          "choice": "(x+5)²=16",
          "truth": true,
          "reason": "移項後 x²+10x=-9，兩邊加 25。"
        },
        {
          "choice": "(x-5)²=16",
          "truth": false,
          "reason": "一次項符號錯。"
        },
        {
          "choice": "(x+5)²=34",
          "truth": false,
          "reason": "右端加法錯。"
        }
      ],
      "misconceptionTarget": "補數與符號錯",
      "prerequisiteSkillIds": [
        "quadratic-solve-by-factoring"
      ],
      "estimatedTimeSec": 70,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "等價轉換。",
      "difficultyReason": "辨認配方中間式。",
      "literacyContextNecessity": null,
      "authoringIntent": "選擇正確中間形式",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "626c4b8e88038faa15d5661dc27f7d365527ee640f786f287531ab937079d567"
    },
    {
      "questionId": "u13-s008-v006",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "lockedSkillOrder": 8,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "x²-8x+3 可改寫為何？",
      "givenConditions": "代數式改寫，不是方程。",
      "target": "完成平方改寫",
      "choices": [
        "(x-4)²+3",
        "(x-8)²-61",
        "(x+4)²-13",
        "(x-4)²-13"
      ],
      "answerIndex": 3,
      "explanation": "x²-8x+3=(x²-8x+16)-13；得到 (x-4)²-13，所以答案為「(x-4)²-13」。",
      "steps": [
        "x²-8x+3=(x²-8x+16)-13",
        "得到 (x-4)²-13"
      ],
      "optionAnalysis": [
        {
          "choice": "(x-4)²+3",
          "truth": false,
          "reason": "展開常數為 19。"
        },
        {
          "choice": "(x-8)²-61",
          "truth": false,
          "reason": "展開一次項為 -16x。"
        },
        {
          "choice": "(x+4)²-13",
          "truth": false,
          "reason": "一次項符號相反。"
        },
        {
          "choice": "(x-4)²-13",
          "truth": true,
          "reason": "補 16 再扣回，3-16=-13。"
        }
      ],
      "misconceptionTarget": "括號符號或回扣常數錯",
      "prerequisiteSkillIds": [
        "quadratic-solve-by-factoring"
      ],
      "estimatedTimeSec": 75,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "恆等性以展開檢查。",
      "difficultyReason": "常數調整。",
      "literacyContextNecessity": null,
      "authoringIntent": "完成平方改寫",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a74081074bcb220b89b6ace166ba0225d838d66c8ac20be0d16cfbc43ae4b6de"
    },
    {
      "questionId": "u13-s008-v007",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "lockedSkillOrder": 8,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "若 x²+px+16 是完全平方，且 p>0，則 p 為何？",
      "givenConditions": "p 為正。",
      "target": "由完全平方與符號條件反推 p",
      "choices": [
        "-8",
        "4",
        "8",
        "16"
      ],
      "answerIndex": 2,
      "explanation": "常數 16=4²；完全平方可能 (x±4)²；p>0 選 +8，所以答案為「8」。",
      "steps": [
        "常數 16=4²",
        "完全平方可能 (x±4)²；p>0 選 +8"
      ],
      "optionAnalysis": [
        {
          "choice": "-8",
          "truth": false,
          "reason": "也可形成 (x-4)²，但不符合 p>0。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "把括號常數當中間項係數。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "完全平方為 (x+4)²，故 p=8。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "把常數項直接當 p。"
        }
      ],
      "misconceptionTarget": "忽略 p>0 或中間項 2ab",
      "prerequisiteSkillIds": [
        "quadratic-solve-by-factoring"
      ],
      "estimatedTimeSec": 100,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "若無正值條件會有 ±8 兩可能。",
      "difficultyReason": "多候選參數篩選。",
      "literacyContextNecessity": null,
      "authoringIntent": "由完全平方與符號條件反推 p",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "310b06289d8de4b3251eb5dbc5d6bde4ce70e6f6133a0f47e07fc384b30ed3ff"
    },
    {
      "questionId": "u13-s008-v008",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "lockedSkillOrder": 8,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "若 x²-12x+k=(x-6)²+5，則 k 為何？",
      "givenConditions": "恆等式對所有 x 成立。",
      "target": "由等價式求常數",
      "choices": [
        "41",
        "31",
        "36",
        "5"
      ],
      "answerIndex": 0,
      "explanation": "展開 (x-6)²+5；得到 x²-12x+41，故 k=41，所以答案為「41」。",
      "steps": [
        "展開 (x-6)²+5",
        "得到 x²-12x+41，故 k=41"
      ],
      "optionAnalysis": [
        {
          "choice": "41",
          "truth": true,
          "reason": "右式展開為 x²-12x+36+5。"
        },
        {
          "choice": "31",
          "truth": false,
          "reason": "把 36-5。"
        },
        {
          "choice": "36",
          "truth": false,
          "reason": "漏掉額外 +5。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "只看外加常數。"
        }
      ],
      "misconceptionTarget": "外部常數與平方常數合併錯",
      "prerequisiteSkillIds": [
        "quadratic-solve-by-factoring"
      ],
      "estimatedTimeSec": 90,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "k 唯一。",
      "difficultyReason": "逆向完成平方。",
      "literacyContextNecessity": null,
      "authoringIntent": "由等價式求常數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5be49cb2a33098b354640976cd46fc0bd425ed53b217c2550170bac9207be601"
    },
    {
      "questionId": "u13-s008-v009",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "lockedSkillOrder": 8,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解 x²+6x+1=0，最簡答案為何？",
      "givenConditions": "Δ>0。",
      "target": "求最簡無理根",
      "choices": [
        "x=3±2√2",
        "x=-3±√8/2",
        "x=-6±√8",
        "x=-3±2√2"
      ],
      "answerIndex": 3,
      "explanation": "x²+6x=-1，補 9；(x+3)²=8，x=-3±√8=-3±2√2，所以答案為「x=-3±2√2」。",
      "steps": [
        "x²+6x=-1，補 9",
        "(x+3)²=8，x=-3±√8=-3±2√2"
      ],
      "optionAnalysis": [
        {
          "choice": "x=3±2√2",
          "truth": false,
          "reason": "位移符號錯。"
        },
        {
          "choice": "x=-3±√8/2",
          "truth": false,
          "reason": "錯誤多除以 2。"
        },
        {
          "choice": "x=-6±√8",
          "truth": false,
          "reason": "未取一次項一半。"
        },
        {
          "choice": "x=-3±2√2",
          "truth": true,
          "reason": "配方得 (x+3)²=8。"
        }
      ],
      "misconceptionTarget": "位移與根式化簡錯",
      "prerequisiteSkillIds": [
        "quadratic-solve-by-factoring"
      ],
      "estimatedTimeSec": 115,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "√8=2√2。",
      "difficultyReason": "配方與公式交叉驗證。",
      "literacyContextNecessity": null,
      "authoringIntent": "求最簡無理根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fbc9bb13491f5fd18d8a25093652a689b4df970a894161edf901705cb236fba1"
    },
    {
      "questionId": "u13-s008-v010",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "lockedSkillOrder": 8,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某正方形花圃的設計參數 x>0 滿足 x²+6x=55。x 為何？",
      "givenConditions": "x>0。",
      "target": "求正的設計參數",
      "choices": [
        "-11",
        "8",
        "5",
        "55"
      ],
      "answerIndex": 2,
      "explanation": "補 9 得 (x+3)²=64；x=-3±8，取正根 5，所以答案為「5」。",
      "steps": [
        "補 9 得 (x+3)²=64",
        "x=-3±8，取正根 5"
      ],
      "optionAnalysis": [
        {
          "choice": "-11",
          "truth": false,
          "reason": "代數根但不符合 x>0。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "忘記減 3。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "(x+3)²=64，根為 5、-11，正值為 5。"
        },
        {
          "choice": "55",
          "truth": false,
          "reason": "把右端當未知數。"
        }
      ],
      "misconceptionTarget": "未篩選負根或忘位移",
      "prerequisiteSkillIds": [
        "quadratic-solve-by-factoring"
      ],
      "estimatedTimeSec": 95,
      "unitCheck": "x 使用題目花圃的長度單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "負根排除。",
      "difficultyReason": "基本配方與幾何正值。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為花圃設計參數必為正，決定唯一實際根。",
      "authoringIntent": "求正的設計參數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3ff9720038efb762c680aafc67eae10bba779f16d48808cbd31e9dddeec81a58"
    },
    {
      "questionId": "u13-s008-v011",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "lockedSkillOrder": 8,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某帳戶評分 x 滿足 x²-4x=12，且規定 0≤x≤10。x 為何？",
      "givenConditions": "0、10 包含，但不是根。",
      "target": "求規定區間內評分",
      "choices": [
        "6",
        "-2",
        "2",
        "6 或 -2"
      ],
      "answerIndex": 0,
      "explanation": "補 4 得 (x-2)²=16；x=2±4，得 6、-2，取 6，所以答案為「6」。",
      "steps": [
        "補 4 得 (x-2)²=16",
        "x=2±4，得 6、-2，取 6"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": true,
          "reason": "(x-2)²=16，根 6、-2，區間只留 6。"
        },
        {
          "choice": "-2",
          "truth": false,
          "reason": "低於區間下界。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "是平方中心，不是根。"
        },
        {
          "choice": "6 或 -2",
          "truth": false,
          "reason": "未套用區間。"
        }
      ],
      "misconceptionTarget": "忽略閉區間",
      "prerequisiteSkillIds": [
        "quadratic-solve-by-factoring"
      ],
      "estimatedTimeSec": 95,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "-2 排除。",
      "difficultyReason": "配方加區間。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為評分規定的閉區間是篩選根的必要情境。",
      "authoringIntent": "求規定區間內評分",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cbbd5156ddcae9ba87d3a698039b0b632ed00bae46d5ab417c473217214a92be"
    },
    {
      "questionId": "u13-s008-v012",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "lockedSkillOrder": 8,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "路線參數 d>0 滿足 d²+2d=15。d 為何？",
      "givenConditions": "d>0。",
      "target": "求正路線參數",
      "choices": [
        "-5",
        "3",
        "4",
        "15"
      ],
      "answerIndex": 1,
      "explanation": "補 1 得 (d+1)²=16；d=-1±4，得到 3、-5，取 3，所以答案為「3」。",
      "steps": [
        "補 1 得 (d+1)²=16",
        "d=-1±4，得到 3、-5，取 3"
      ],
      "optionAnalysis": [
        {
          "choice": "-5",
          "truth": false,
          "reason": "是代數根但不符合 d>0。"
        },
        {
          "choice": "3",
          "truth": true,
          "reason": "(d+1)²=16，根 3、-5，取正值。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "忘記減 1。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "把常數當答案。"
        }
      ],
      "misconceptionTarget": "位移或正值限制錯",
      "prerequisiteSkillIds": [
        "quadratic-solve-by-factoring"
      ],
      "estimatedTimeSec": 90,
      "unitCheck": "d 以題目統一的路線單位表示。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "負根排除。",
      "difficultyReason": "兩解法交叉檢查。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為路線參數的正值定義使答案唯一。",
      "authoringIntent": "求正路線參數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8896b9c70b2c4d388f36fdaaa327d52e20b5410e3a9b29ca8bc943042275cd25"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u13-s008-cr001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "用基本配方法解 x²-8x+7=0。",
      "requiredWork": [
        "把常數移項。",
        "補一次項係數一半的平方。",
        "開平方。"
      ],
      "fullCreditSolution": [
        "x²-8x=-7。",
        "兩邊加 16，得 (x-4)²=9。",
        "x-4=±3，所以 x=7 或 x=1。"
      ],
      "alternativeSolutions": [
        "可分解 (x-7)(x-1)=0 驗算。"
      ],
      "reasoningSteps": [
        "補 (-8/2)²=16。",
        "保持兩邊相等。",
        "處理 ±。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "補 16、完成平方與兩根 1、7 全對。"
        },
        {
          "score": 2,
          "criteria": "答案正確但配方中省略同步加 16，或完成平方正確後一處小錯。"
        },
        {
          "score": 1,
          "criteria": "知道補 16，但只取一根或位移錯。"
        },
        {
          "score": 0,
          "criteria": "補數錯且答案錯。"
        }
      ],
      "partialCreditRules": [
        "根順序不限。",
        "因題目指定配方法，單用因式分解最多 1 分。"
      ],
      "followThroughPolicy": "若 (x-4)²=9 正確，後續漏一根給 1 分；若只是抄寫漏 ± 但列出兩根可給 2 分。",
      "unitNotationRules": [
        "x 無單位。"
      ],
      "answerOnlyPolicy": "只寫 1、7，最多 1 分。",
      "commonErrors": [
        "補 -16。",
        "寫 (x-8)²。",
        "只取 7。"
      ],
      "independentReview": {
        "derivedResult": "x=1 或 x=7。",
        "ambiguity": "首項係數為 1，基本配方適用且答案唯一。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "3bb53549105b144155fd95a2cffdc528cb5e6a25c4be6788cfd8053ebb4b2287"
    },
    {
      "questionId": "u13-s008-cr002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-complete-square-basic",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "將 x²+10x+3 改寫成 (x+h)²+k 的形式，並由此求其最小值。",
      "requiredWork": [
        "完成平方。",
        "指出平方非負。",
        "求最小值與發生位置。"
      ],
      "fullCreditSolution": [
        "x²+10x+3=(x+5)²-25+3=(x+5)²-22。",
        "因 (x+5)²≥0，所以最小值為 -22。",
        "當 x=-5 時取得最小值。"
      ],
      "alternativeSolutions": [
        "可令 y=x+5，原式為 y²-22，直接由 y²≥0 判斷。"
      ],
      "reasoningSteps": [
        "取 10 的一半 5。",
        "補 25 並回扣。",
        "用平方非負判斷。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "完成平方為 (x+5)²-22，且寫最小值 -22 在 x=-5。"
        },
        {
          "score": 2,
          "criteria": "完成平方正確但只回答最小值或只回答發生位置。"
        },
        {
          "score": 1,
          "criteria": "能形成 (x+5)²，但常數回扣有錯，仍顯示方法。"
        },
        {
          "score": 0,
          "criteria": "完成平方與最小值皆錯。"
        }
      ],
      "partialCreditRules": [
        "題目要求兩項：最小值及位置；缺一項最高 2 分。"
      ],
      "followThroughPolicy": "若常數算錯，後續依其完成平方找最小值可給 1 分，但不能給答案分。",
      "unitNotationRules": [
        "x 無單位。",
        "最小值為函數值，不寫成 x=-22。"
      ],
      "answerOnlyPolicy": "只寫 -22，無改寫過程與位置，最多 1 分。",
      "commonErrors": [
        "常數寫 +28。",
        "把 x=-5 說成最小值。"
      ],
      "independentReview": {
        "derivedResult": "改寫為 (x+5)²-22；最小值 -22，於 x=-5。",
        "ambiguity": "題目從配方連結平方非負，無需高中微積分。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "30ea4bfba8d92a03a2af3a306563e416dd188c5830796eb56887d8cc48b99e4c"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u13-s008-v001",
      "unitId": "u13",
      "skillId": "quadratic-complete-square-basic",
      "contentSha256": "1b11069c27bf66856d1ba37330b670ba0dfea470422cccebb5077cc7c40a5873",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：展開 (x+2)²=x²+4x+4；故空格為 4",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「x²+4x+□=(x+2)²，□ 為何？」的要求量已明示為「求基本補數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：首項係數為 1。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：唯一常數。",
        "choices": "四選項逐一代入或反算；正確項理由為「2²=4。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "最基本配方。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「x²+4x+□=(x+2)²，□ 為何？」：獨立由原始條件重算：展開 (x+2)²=x²+4x+4；故空格為 4。再逐項核對四個選項，只有「4」同時符合方程式與限制；唯一常數。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "c9f8ce6d057d4e9da421a01ee98530ca1465fda71e575b0835a0b5667ae44112"
    },
    {
      "questionId": "u13-s008-v002",
      "unitId": "u13",
      "skillId": "quadratic-complete-square-basic",
      "contentSha256": "49e13dce4f96be4463922158c8338c8b8240e18e7550ff823378728f5d370bc5",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：展開右式 x²-14x+49；係數完全吻合",
      "derivedAnswer": "49",
      "storedAnswer": "49",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「x²-14x+□=(x-7)²，□ 為何？」的要求量已明示為「求負係數補數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：恆等式。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：補數非負。",
        "choices": "四選項逐一代入或反算；正確項理由為「-14 的一半為 -7，平方 49。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "負一次項配方。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「x²-14x+□=(x-7)²，□ 為何？」：獨立由原始條件重算：展開右式 x²-14x+49；係數完全吻合。再逐項核對四個選項，只有「49」同時符合方程式與限制；補數非負。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "a709726f3c824c8eb47ba8cb6dd90ac60f796006672ede56ee4ef3bc85dfa9b1"
    },
    {
      "questionId": "u13-s008-v003",
      "unitId": "u13",
      "skillId": "quadratic-complete-square-basic",
      "contentSha256": "4efde75377eb8580e077984b4646fc516f3f57af363cdd12b979324e887fbfb2",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：兩根 2、-4 代回原式皆為 0；完成平方展開正確",
      "derivedAnswer": "x=2 或 x=-4",
      "storedAnswer": "x=2 或 x=-4",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「將 x²+2x-8=0 配成完全平方後，所得的兩個根為何？」的要求量已明示為「求基本配方根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：實數範圍。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：兩根皆保留。",
        "choices": "四選項逐一代入或反算；正確項理由為「移項後補 1，得 (x+1)²=9。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "完整基本配方。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「將 x²+2x-8=0 配成完全平方後，所得的兩個根為何？」：獨立由原始條件重算：兩根 2、-4 代回原式皆為 0；完成平方展開正確。再逐項核對四個選項，只有「x=2 或 x=-4」同時符合方程式與限制；兩根皆保留。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "eb77f9e3412c512a80fe379d8df79c0f87abd79fc12cdb9d6d1d0d850362856e"
    },
    {
      "questionId": "u13-s008-v004",
      "unitId": "u13",
      "skillId": "quadratic-complete-square-basic",
      "contentSha256": "173f2408feef16c6eeed2db630a43e3a7ad13c8d9fa1ed69e55f326c48535d84",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：1²-6+5=0；25-30+5=0；兩根成立",
      "derivedAnswer": "x=1 或 x=5",
      "storedAnswer": "x=1 或 x=5",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「用配方法解 x²-6x+5=0。」的要求量已明示為「求兩整數根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：實數範圍。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：±√4=±2。",
        "choices": "四選項逐一代入或反算；正確項理由為「(x-3)²=4。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "中階基本配方。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「用配方法解 x²-6x+5=0。」：獨立由原始條件重算：1²-6+5=0；25-30+5=0；兩根成立。再逐項核對四個選項，只有「x=1 或 x=5」同時符合方程式與限制；±√4=±2。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "7a35f0abaceed134b47847439631058f5b6183c7e4898ff3cce1a4f43a2de59c"
    },
    {
      "questionId": "u13-s008-v005",
      "unitId": "u13",
      "skillId": "quadratic-complete-square-basic",
      "contentSha256": "626c4b8e88038faa15d5661dc27f7d365527ee640f786f287531ab937079d567",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：展開平方並移回：x²+10x+25=16；等價於 x²+10x+9=0",
      "derivedAnswer": "(x+5)²=16",
      "storedAnswer": "(x+5)²=16",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「x²+10x+9=0 配方後的平方形式為何？」的要求量已明示為「選擇正確中間形式」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：首項係數 1。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：等價轉換。",
        "choices": "四選項逐一代入或反算；正確項理由為「移項後 x²+10x=-9，兩邊加 25。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "辨認配方中間式。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「x²+10x+9=0 配方後的平方形式為何？」：獨立由原始條件重算：展開平方並移回：x²+10x+25=16；等價於 x²+10x+9=0。再逐項核對四個選項，只有「(x+5)²=16」同時符合方程式與限制；等價轉換。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "c441a534a3f642eb12c4a4de61e456bb5fdbf4eb921191ef5ce3e2261026eb70"
    },
    {
      "questionId": "u13-s008-v006",
      "unitId": "u13",
      "skillId": "quadratic-complete-square-basic",
      "contentSha256": "a74081074bcb220b89b6ace166ba0225d838d66c8ac20be0d16cfbc43ae4b6de",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：展開正確式 x²-8x+16-13；回到 x²-8x+3",
      "derivedAnswer": "(x-4)²-13",
      "storedAnswer": "(x-4)²-13",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「x²-8x+3 可改寫為何？」的要求量已明示為「完成平方改寫」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：代數式改寫，不是方程。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：恆等性以展開檢查。",
        "choices": "四選項逐一代入或反算；正確項理由為「補 16 再扣回，3-16=-13。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "常數調整。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「x²-8x+3 可改寫為何？」：獨立由原始條件重算：展開正確式 x²-8x+16-13；回到 x²-8x+3。再逐項核對四個選項，只有「(x-4)²-13」同時符合方程式與限制；恆等性以展開檢查。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "86ab6bbba5e87f84047a77e547eea31c3c570d42076f13f679e89726531475d2"
    },
    {
      "questionId": "u13-s008-v007",
      "unitId": "u13",
      "skillId": "quadratic-complete-square-basic",
      "contentSha256": "310b06289d8de4b3251eb5dbc5d6bde4ce70e6f6133a0f47e07fc384b30ed3ff",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：展開 (x+4)²=x²+8x+16；另一可能 p=-8 被條件排除",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「若 x²+px+16 是完全平方，且 p>0，則 p 為何？」的要求量已明示為「由完全平方與符號條件反推 p」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：p 為正。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：若無正值條件會有 ±8 兩可能。",
        "choices": "四選項逐一代入或反算；正確項理由為「完全平方為 (x+4)²，故 p=8。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "多候選參數篩選。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「若 x²+px+16 是完全平方，且 p>0，則 p 為何？」：獨立由原始條件重算：展開 (x+4)²=x²+8x+16；另一可能 p=-8 被條件排除。再逐項核對四個選項，只有「8」同時符合方程式與限制；若無正值條件會有 ±8 兩可能。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "df1ebd46e14dce2c25ae94eb2343b2a172b6d895bd35c68e4a58a8bd2af13b5f"
    },
    {
      "questionId": "u13-s008-v008",
      "unitId": "u13",
      "skillId": "quadratic-complete-square-basic",
      "contentSha256": "5be49cb2a33098b354640976cd46fc0bd425ed53b217c2550170bac9207be601",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：比較常數項；左、右二次與一次係數已相同，常數必相等",
      "derivedAnswer": "41",
      "storedAnswer": "41",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「若 x²-12x+k=(x-6)²+5，則 k 為何？」的要求量已明示為「由等價式求常數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：恆等式對所有 x 成立。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：k 唯一。",
        "choices": "四選項逐一代入或反算；正確項理由為「右式展開為 x²-12x+36+5。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "逆向完成平方。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「若 x²-12x+k=(x-6)²+5，則 k 為何？」：獨立由原始條件重算：比較常數項；左、右二次與一次係數已相同，常數必相等。再逐項核對四個選項，只有「41」同時符合方程式與限制；k 唯一。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "6f0cdf2c4dd85860aff72de9fb2304a291af99e91d4cda329b09b0bbcf0ec15c"
    },
    {
      "questionId": "u13-s008-v009",
      "unitId": "u13",
      "skillId": "quadratic-complete-square-basic",
      "contentSha256": "fbc9bb13491f5fd18d8a25093652a689b4df970a894161edf901705cb236fba1",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：代入公式 Δ=32；x=(-6±4√2)/2=-3±2√2，與配方一致",
      "derivedAnswer": "x=-3±2√2",
      "storedAnswer": "x=-3±2√2",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「解 x²+6x+1=0，最簡答案為何？」的要求量已明示為「求最簡無理根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：Δ>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：√8=2√2。",
        "choices": "四選項逐一代入或反算；正確項理由為「配方得 (x+3)²=8。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "配方與公式交叉驗證。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解 x²+6x+1=0，最簡答案為何？」：獨立由原始條件重算：代入公式 Δ=32；x=(-6±4√2)/2=-3±2√2，與配方一致。再逐項核對四個選項，只有「x=-3±2√2」同時符合方程式與限制；√8=2√2。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "6532c3d4725aa12911c5a6965b985e35580da0bbf43cabf154210bed77035610"
    },
    {
      "questionId": "u13-s008-v010",
      "unitId": "u13",
      "skillId": "quadratic-complete-square-basic",
      "contentSha256": "3ff9720038efb762c680aafc67eae10bba779f16d48808cbd31e9dddeec81a58",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：分解 x²+6x-55=(x+11)(x-5)；根 -11、5，正限制留 5",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「某正方形花圃的設計參數 x>0 滿足 x²+6x=55。x 為何？」的要求量已明示為「求正的設計參數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：負根排除。",
        "choices": "四選項逐一代入或反算；正確項理由為「(x+3)²=64，根為 5、-11，正值為 5。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "x 使用題目花圃的長度單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "基本配方與幾何正值。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為花圃設計參數必為正，決定唯一實際根。",
      "reviewerNote": "獨立重算「某正方形花圃的設計參數 x>0 滿足 x²+6x=55。x 為何？」：獨立由原始條件重算：分解 x²+6x-55=(x+11)(x-5)；根 -11、5，正限制留 5。再逐項核對四個選項，只有「5」同時符合方程式與限制；負根排除。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "9144ec2d0211c2fb188581a0c1dede77e58ab125c6f4e7bea15b84554696eeac"
    },
    {
      "questionId": "u13-s008-v011",
      "unitId": "u13",
      "skillId": "quadratic-complete-square-basic",
      "contentSha256": "cbbd5156ddcae9ba87d3a698039b0b632ed00bae46d5ab417c473217214a92be",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：直接分解 x²-4x-12=(x-6)(x+2)；根與區間比較後唯一 6",
      "derivedAnswer": "6",
      "storedAnswer": "6",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「某帳戶評分 x 滿足 x²-4x=12，且規定 0≤x≤10。x 為何？」的要求量已明示為「求規定區間內評分」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：0、10 包含，但不是根。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：-2 排除。",
        "choices": "四選項逐一代入或反算；正確項理由為「(x-2)²=16，根 6、-2，區間只留 6。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "配方加區間。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為評分規定的閉區間是篩選根的必要情境。",
      "reviewerNote": "獨立重算「某帳戶評分 x 滿足 x²-4x=12，且規定 0≤x≤10。x 為何？」：獨立由原始條件重算：直接分解 x²-4x-12=(x-6)(x+2)；根與區間比較後唯一 6。再逐項核對四個選項，只有「6」同時符合方程式與限制；-2 排除。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "987ca2c4d60468b9ac81274f7856312980f05860c897d462235183f8a89f4ae9"
    },
    {
      "questionId": "u13-s008-v012",
      "unitId": "u13",
      "skillId": "quadratic-complete-square-basic",
      "contentSha256": "8896b9c70b2c4d388f36fdaaa327d52e20b5410e3a9b29ca8bc943042275cd25",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：因式分解 d²+2d-15=(d+5)(d-3)；正根為 3",
      "derivedAnswer": "3",
      "storedAnswer": "3",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「路線參數 d>0 滿足 d²+2d=15。d 為何？」的要求量已明示為「求正路線參數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：d>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：負根排除。",
        "choices": "四選項逐一代入或反算；正確項理由為「(d+1)²=16，根 3、-5，取正值。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "d 以題目統一的路線單位表示。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "兩解法交叉檢查。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為路線參數的正值定義使答案唯一。",
      "reviewerNote": "獨立重算「路線參數 d>0 滿足 d²+2d=15。d 為何？」：獨立由原始條件重算：因式分解 d²+2d-15=(d+5)(d-3)；正根為 3。再逐項核對四個選項，只有「3」同時符合方程式與限制；負根排除。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "bea1bef7a920a1824a95760285dcdfc90098c03dcbc38372fdf70e750520278a"
    }
  ],
  "drawingSpecs": []
};
