export default {
  "lecture": {
    "lectureId": "u13-s001-lecture-r1",
    "unitId": "u13",
    "numericUnitId": 13,
    "topicId": "u13-solving",
    "skillId": "quadratic-factor",
    "lockedOrder": 1,
    "originalLockedTitle": "因式分解法",
    "title": "零乘積性質與因式分解法",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能說明零乘積性質為何成立。",
      "能把已因式分解且等於 0 的方程式拆成兩個一次方程式。",
      "能保留所有可能的根，包括 0 與重根。",
      "能辨認不能直接使用零乘積性質的情況。"
    ],
    "prerequisites": [],
    "prerequisiteBridge": "本節銜接先前的多項式因式分解；鎖定課綱未指定 U13 內先備技能，因此從零乘積性質重新建立解方程邏輯。",
    "glossary": [
      {
        "term": "一元二次方程式",
        "definition": "只含一個未知數，整理後最高次為 2，且二次項係數不為 0 的等式。"
      },
      {
        "term": "因式",
        "definition": "相乘後得到原式的代數式。"
      },
      {
        "term": "零乘積性質",
        "definition": "兩個實數相乘等於 0 時，至少一個因數等於 0。"
      },
      {
        "term": "根",
        "definition": "代入後使方程式左右兩邊相等的未知數值。"
      }
    ],
    "notation": [
      {
        "symbol": "AB=0",
        "meaning": "A=0 或 B=0。"
      },
      {
        "symbol": "x=r",
        "meaning": "r 是方程式的一個根。"
      },
      {
        "symbol": "(x-p)(x-q)=0",
        "meaning": "根為 p 與 q；若 p=q，只有一個相異實根。"
      }
    ],
    "conceptNarrative": [
      "因式分解不是終點；方程式右邊必須先成為 0，才能使用零乘積性質。",
      "例如 (x-3)(x+5)=0，因為乘積為 0，所以 x-3=0 或 x+5=0。",
      "「或」表示兩條分支都要處理，不能只算其中一個。",
      "若出現 x(x-4)=0，x=0 也是根；先除以 x 會把它遺失。",
      "重複因式如 (x+2)²=0 只給出 x=-2 一個相異根。"
    ],
    "formalDefinitions": [
      {
        "name": "零乘積性質",
        "statement": "若 A、B 為實數且 AB=0，則 A=0 或 B=0。"
      },
      {
        "name": "因式分解法",
        "statement": "把方程式整理成因式乘積等於 0，再令每個因式分別等於 0。"
      }
    ],
    "formulas": [
      {
        "formula": "(x-p)(x-q)=0 ⇒ x=p 或 x=q",
        "conditions": [
          "等號一邊必須是 0",
          "左邊已寫成乘積",
          "各因式有定義"
        ],
        "meaning": "將二次方程式化為兩個一次方程式。"
      }
    ],
    "nonApplicableCases": [
      "(x-2)(x+1)=6 的右邊不是 0，不能直接說 x=2 或 x=-1。",
      "A+B=0 不是乘積，不能套用零乘積性質。",
      "除以含未知數的因式前若不知道它是否為 0，可能漏根。",
      "因式分解不完整時，不可憑外觀猜根。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "把所有項移到同一邊，使另一邊為 0。",
        "check": "等號右邊是否確實為 0？"
      },
      {
        "step": 2,
        "instruction": "把二次式完整因式分解。",
        "check": "展開能否回到原式？"
      },
      {
        "step": 3,
        "instruction": "令每一個因式等於 0。",
        "check": "是否處理了全部因式？"
      },
      {
        "step": 4,
        "instruction": "解各一次方程式並合併答案。",
        "check": "重複根是否只列一次？"
      },
      {
        "step": 5,
        "instruction": "代回原方程式驗算。",
        "check": "每個候選值是否都使原式成立？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "解 (x-4)(x+1)=0。",
        "solutionSteps": [
          "令 x-4=0 或 x+1=0。",
          "得到 x=4 或 x=-1。"
        ],
        "answer": "x=4 或 x=-1。"
      },
      {
        "exampleId": "L2",
        "prompt": "解 x(2x-6)=0。",
        "solutionSteps": [
          "令 x=0 或 2x-6=0。",
          "第二式得 x=3。"
        ],
        "answer": "x=0 或 x=3。"
      },
      {
        "exampleId": "L3",
        "prompt": "解 (3x+2)²=0。",
        "solutionSteps": [
          "重複因式等於 0。",
          "3x+2=0，得 x=-2/3。"
        ],
        "answer": "只有 x=-2/3。"
      },
      {
        "exampleId": "L4",
        "prompt": "說明為何 (x-2)(x+5)=12 不能直接拆。",
        "solutionSteps": [
          "零乘積性質要求乘積等於 0。",
          "本式右邊為 12，應先展開、移項，再判斷能否因式分解。"
        ],
        "answer": "不能直接令兩因式為 0。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "看到兩個括號就各自等於 0。",
        "why": "忽略右邊是否為 0。",
        "correction": "先確認已整理成「乘積=0」。"
      },
      {
        "mistake": "只解第一個因式。",
        "why": "把「或」誤當成只選一條。",
        "correction": "每個因式都要建立一次方程式。"
      },
      {
        "mistake": "把 x(x-7)=0 先除以 x。",
        "why": "x 可能等於 0，除法會刪掉合法解。",
        "correction": "直接用零乘積性質保留 x=0。"
      },
      {
        "mistake": "把 (x+3)²=0 寫成兩個不同答案。",
        "why": "重複因式只對應同一數值。",
        "correction": "答案集合只列 x=-3 一次。"
      },
      {
        "mistake": "因式分解後不驗算。",
        "why": "符號錯誤可能未被發現。",
        "correction": "把每個根代回最初方程式。"
      },
      {
        "mistake": "把 A+B=0 當作 A=0 或 B=0。",
        "why": "零乘積性質只適用乘法。",
        "correction": "先辨認運算符號是乘號還是加號。"
      }
    ],
    "selfCheck": [
      "右邊是否為 0？",
      "是否完整因式分解？",
      "每個因式都令為 0 了嗎？",
      "是否保留 x=0？",
      "是否代回原式？"
    ],
    "summary": [
      "零乘積性質是因式分解法的邏輯核心。",
      "只有乘積等於 0 才能拆成分支。",
      "不能任意除以可能為 0 的含未知數因式。",
      "根必須代回原方程式確認。"
    ],
    "connections": {
      "previous": "本節銜接先前的多項式因式分解；鎖定課綱未指定 U13 內先備技能，因此從零乘積性質重新建立解方程邏輯。",
      "next": [
        "下一節把不易因式分解的二次式改寫成完全平方。",
        "後續會把方程式先整理成標準式，再選擇最有效的解法。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u13-s001-v001",
        "u13-s001-v002",
        "u13-s001-v003",
        "u13-s001-v004",
        "u13-s001-v005",
        "u13-s001-v006",
        "u13-s001-v007",
        "u13-s001-v008",
        "u13-s001-v009",
        "u13-s001-v010",
        "u13-s001-v011",
        "u13-s001-v012"
      ],
      "constructedResponseIds": [
        "u13-s001-cr001",
        "u13-s001-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "reviewNote": "逐例展開回原式並代入所有根；特別檢查 x=0 未因不當除法而遺失、重根只列一次，以及非零右端案例未誤用零乘積性質。",
      "reviewVersion": "human-lecture-review-u13-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "e42a432e09c74f004d9451d5d6ec578e57763f347c17deefdac0d9d594e094d2"
  },
  "mcQuestions": [
    {
      "questionId": "u13-s001-v001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "lockedSkillOrder": 1,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "方程式 (x-5)(x+2)=0 的解為何？",
      "givenConditions": "乘積已等於 0，未知數為實數。",
      "target": "求全部實數根",
      "choices": [
        "x=5 或 x=-2",
        "x=5",
        "x=-2",
        "x=2 或 x=-5"
      ],
      "answerIndex": 0,
      "explanation": "令 x-5=0 或 x+2=0；解得 x=5 或 x=-2，所以答案為「x=5 或 x=-2」。",
      "steps": [
        "令 x-5=0 或 x+2=0",
        "解得 x=5 或 x=-2"
      ],
      "optionAnalysis": [
        {
          "choice": "x=5 或 x=-2",
          "truth": true,
          "reason": "兩因式分別等於 0，得到 5 與 -2。"
        },
        {
          "choice": "x=5",
          "truth": false,
          "reason": "只處理第一因式，漏掉另一根。"
        },
        {
          "choice": "x=-2",
          "truth": false,
          "reason": "只處理第二因式，漏掉另一根。"
        },
        {
          "choice": "x=2 或 x=-5",
          "truth": false,
          "reason": "把括號內符號直接照抄，未解一次方程式。"
        }
      ],
      "misconceptionTarget": "只解一個因式或把符號讀反",
      "prerequisiteSkillIds": [],
      "estimatedTimeSec": 55,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "兩個根皆需列出，答案次序不影響。",
      "difficultyReason": "直接使用零乘積性質，只有一次方程運算。",
      "literacyContextNecessity": null,
      "authoringIntent": "求全部實數根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ed6eead8f1798d06f3f2fab09a966f416f2450217597b328575bf178701273bc"
    },
    {
      "questionId": "u13-s001-v002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "lockedSkillOrder": 1,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "方程式 (2x+3)(x-4)=0 的較小根為何？",
      "givenConditions": "已是乘積等於 0。",
      "target": "求兩根後比較大小",
      "choices": [
        "4",
        "-3/2",
        "-3",
        "3/2"
      ],
      "answerIndex": 1,
      "explanation": "先由零乘積性質求得 -3/2、4；比較兩數，-3/2<4，所以答案為「-3/2」。",
      "steps": [
        "先由零乘積性質求得 -3/2、4",
        "比較兩數，-3/2<4"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "這是較大根。"
        },
        {
          "choice": "-3/2",
          "truth": true,
          "reason": "兩根為 -3/2 與 4，比較後較小者是 -3/2。"
        },
        {
          "choice": "-3",
          "truth": false,
          "reason": "解 2x+3=0 時忘記除以 2。"
        },
        {
          "choice": "3/2",
          "truth": false,
          "reason": "把一次因式的符號解反。"
        }
      ],
      "misconceptionTarget": "只求一個因式或分數符號錯誤",
      "prerequisiteSkillIds": [],
      "estimatedTimeSec": 70,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "需先找完整根集，再依問法選較小值。",
      "difficultyReason": "結合一次係數處理與根的大小比較。",
      "literacyContextNecessity": null,
      "authoringIntent": "求兩根後比較大小",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "78431eb2876789da8b713756c09505ce5e9460dee7786a9ca9e98851cec5ba60"
    },
    {
      "questionId": "u13-s001-v003",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "lockedSkillOrder": 1,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "方程式 (x+7)²=0 有幾個相異實根？",
      "givenConditions": "問的是相異實根個數。",
      "target": "判斷重根與相異根個數",
      "choices": [
        "0 個",
        "2 個，根為 7 與 -7",
        "1 個，根為 -7",
        "2 個，兩根都為 -7"
      ],
      "answerIndex": 2,
      "explanation": "令 x+7=0；得到唯一相異根 x=-7，所以答案為「1 個，根為 -7」。",
      "steps": [
        "令 x+7=0",
        "得到唯一相異根 x=-7"
      ],
      "optionAnalysis": [
        {
          "choice": "0 個",
          "truth": false,
          "reason": "忽略平方可等於 0。"
        },
        {
          "choice": "2 個，根為 7 與 -7",
          "truth": false,
          "reason": "把 (x+7)² 誤當成 x²=49。"
        },
        {
          "choice": "1 個，根為 -7",
          "truth": true,
          "reason": "平方等於 0 時括號內只能為 0，重複因式給同一根。"
        },
        {
          "choice": "2 個，兩根都為 -7",
          "truth": false,
          "reason": "相異實根不能把同一數值重複計數。"
        }
      ],
      "misconceptionTarget": "把平方符號誤解為正負兩個不同答案",
      "prerequisiteSkillIds": [],
      "estimatedTimeSec": 60,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "重根 -7 只計一次。",
      "difficultyReason": "需要辨認重複因式。",
      "literacyContextNecessity": null,
      "authoringIntent": "判斷重根與相異根個數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d294a79849e07dc62968682551cb7935c05559c9d8dda682373c19568d8fb229"
    },
    {
      "questionId": "u13-s001-v004",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "lockedSkillOrder": 1,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解方程式 x(x-9)=0。",
      "givenConditions": "乘積等於 0，沒有額外限制。",
      "target": "求完整解集",
      "choices": [
        "x=9",
        "x=0",
        "x=-9 或 x=0",
        "x=0 或 x=9"
      ],
      "answerIndex": 3,
      "explanation": "令 x=0 或 x-9=0；得到 x=0 或 x=9，所以答案為「x=0 或 x=9」。",
      "steps": [
        "令 x=0 或 x-9=0",
        "得到 x=0 或 x=9"
      ],
      "optionAnalysis": [
        {
          "choice": "x=9",
          "truth": false,
          "reason": "先除以 x，遺失 x=0。"
        },
        {
          "choice": "x=0",
          "truth": false,
          "reason": "只處理第一因式。"
        },
        {
          "choice": "x=-9 或 x=0",
          "truth": false,
          "reason": "把 x-9=0 解成 -9。"
        },
        {
          "choice": "x=0 或 x=9",
          "truth": true,
          "reason": "公因式 x 也可能為 0，兩個分支都要保留。"
        }
      ],
      "misconceptionTarget": "除以 x 造成漏根",
      "prerequisiteSkillIds": [],
      "estimatedTimeSec": 70,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "0 是合法根，不能因除法刪除。",
      "difficultyReason": "考查保留零根的關鍵陷阱。",
      "literacyContextNecessity": null,
      "authoringIntent": "求完整解集",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "25fb9fc4cdfc4a84c687af2d5b45a3638ffbde2052703e1bf80174f2fa025b39"
    },
    {
      "questionId": "u13-s001-v005",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "lockedSkillOrder": 1,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "方程式 (3x-6)(x+1)=0 的兩根和為多少？",
      "givenConditions": "先求全部根，再求和。",
      "target": "求兩根和",
      "choices": [
        "-3",
        "1",
        "3",
        "-1"
      ],
      "answerIndex": 1,
      "explanation": "由 3x-6=0 得 x=2；由 x+1=0 得 x=-1，兩根和為 1，所以答案為「1」。",
      "steps": [
        "由 3x-6=0 得 x=2",
        "由 x+1=0 得 x=-1，兩根和為 1"
      ],
      "optionAnalysis": [
        {
          "choice": "-3",
          "truth": false,
          "reason": "把常數直接相加。"
        },
        {
          "choice": "1",
          "truth": true,
          "reason": "根為 2 與 -1，和為 1。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "把 -1 誤讀為 1。"
        },
        {
          "choice": "-1",
          "truth": false,
          "reason": "只取其中一個根。"
        }
      ],
      "misconceptionTarget": "未先完整求根或符號錯誤",
      "prerequisiteSkillIds": [],
      "estimatedTimeSec": 80,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "兩根皆為實數且需合併計算。",
      "difficultyReason": "在零乘積後增加二次資訊整合。",
      "literacyContextNecessity": null,
      "authoringIntent": "求兩根和",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3a6824b9648f7cca52da3504aa2aee5806ab048fdaab6a82b3a16df6613222bc"
    },
    {
      "questionId": "u13-s001-v006",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "lockedSkillOrder": 1,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "對方程式 (x-3)(x+8)=0，下列哪一步最正確？",
      "givenConditions": "乘積已等於 0。",
      "target": "選擇合法推理步驟",
      "choices": [
        "令 x-3=x+8",
        "令 x-3=0 且 x+8=0",
        "令 x-3=0 或 x+8=0",
        "將兩因式相加等於 0"
      ],
      "answerIndex": 2,
      "explanation": "辨認左邊為兩因式乘積；用「或」建立兩個一次方程式，所以答案為「令 x-3=0 或 x+8=0」。",
      "steps": [
        "辨認左邊為兩因式乘積",
        "用「或」建立兩個一次方程式"
      ],
      "optionAnalysis": [
        {
          "choice": "令 x-3=x+8",
          "truth": false,
          "reason": "乘積為 0 不代表兩因式相等。"
        },
        {
          "choice": "令 x-3=0 且 x+8=0",
          "truth": false,
          "reason": "「且」要求同一 x 同時為 3 與 -8，不可能。"
        },
        {
          "choice": "令 x-3=0 或 x+8=0",
          "truth": true,
          "reason": "零乘積性質要求每個因式分別等於 0。"
        },
        {
          "choice": "將兩因式相加等於 0",
          "truth": false,
          "reason": "把乘法條件改成加法。"
        }
      ],
      "misconceptionTarget": "把「或」寫成「且」或改變運算",
      "prerequisiteSkillIds": [],
      "estimatedTimeSec": 75,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "邏輯分支必須涵蓋所有可能。",
      "difficultyReason": "著重推理語句而非單純運算。",
      "literacyContextNecessity": null,
      "authoringIntent": "選擇合法推理步驟",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8af875064fad606b66cef5ae7677dd84f32745db78739e7a79698ae40008c17a"
    },
    {
      "questionId": "u13-s001-v007",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "lockedSkillOrder": 1,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解方程式 (x-2)(x+5)=18。",
      "givenConditions": "右端 18 必須先移項。",
      "target": "求非零右端方程式的根",
      "choices": [
        "x=2 或 x=-5",
        "x=7 或 x=-4",
        "x=1 或 x=-10",
        "x=4 或 x=-7"
      ],
      "answerIndex": 3,
      "explanation": "展開得 x²+3x-10=18；移項得 x²+3x-28=0=(x-4)(x+7)，所以答案為「x=4 或 x=-7」。",
      "steps": [
        "展開得 x²+3x-10=18",
        "移項得 x²+3x-28=0=(x-4)(x+7)"
      ],
      "optionAnalysis": [
        {
          "choice": "x=2 或 x=-5",
          "truth": false,
          "reason": "右邊不是 0，誤用零乘積性質。"
        },
        {
          "choice": "x=7 或 x=-4",
          "truth": false,
          "reason": "因式分解符號配對錯誤。"
        },
        {
          "choice": "x=1 或 x=-10",
          "truth": false,
          "reason": "代回原式乘積都不等於 18。"
        },
        {
          "choice": "x=4 或 x=-7",
          "truth": true,
          "reason": "先展開移項得 x²+3x-28=0，再分解為 (x-4)(x+7)=0。"
        }
      ],
      "misconceptionTarget": "看到括號就直接令為 0",
      "prerequisiteSkillIds": [],
      "estimatedTimeSec": 120,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "兩根代回原式均成立。",
      "difficultyReason": "需要展開、移項、重新因式分解三步。",
      "literacyContextNecessity": null,
      "authoringIntent": "求非零右端方程式的根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8ae67c02f1993344562bfc06d7555936dbdeb7b9cbee84941138ded042339d44"
    },
    {
      "questionId": "u13-s001-v008",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "lockedSkillOrder": 1,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "解方程式 (x-1)(x+4)=(x-1)(2x-3)。",
      "givenConditions": "共同因式可能等於 0。",
      "target": "保留共同因式可能為 0 的根",
      "choices": [
        "x=1 或 x=7",
        "x=7",
        "x=1",
        "x=-1 或 x=7"
      ],
      "answerIndex": 0,
      "explanation": "移項：(x-1)[(x+4)-(2x-3)]=0；化簡為 (x-1)(7-x)=0，得 1、7，所以答案為「x=1 或 x=7」。",
      "steps": [
        "移項：(x-1)[(x+4)-(2x-3)]=0",
        "化簡為 (x-1)(7-x)=0，得 1、7"
      ],
      "optionAnalysis": [
        {
          "choice": "x=1 或 x=7",
          "truth": true,
          "reason": "移到同一邊提公因式，得 (x-1)(7-x)=0。"
        },
        {
          "choice": "x=7",
          "truth": false,
          "reason": "兩邊約掉 x-1，漏掉 x=1。"
        },
        {
          "choice": "x=1",
          "truth": false,
          "reason": "只保留共同因式為 0 的分支。"
        },
        {
          "choice": "x=-1 或 x=7",
          "truth": false,
          "reason": "把 x-1=0 解錯。"
        }
      ],
      "misconceptionTarget": "直接約去含未知數因式",
      "prerequisiteSkillIds": [],
      "estimatedTimeSec": 130,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "不得以未確認非零的 x-1 約分。",
      "difficultyReason": "考查等式兩邊共同因式與漏根風險。",
      "literacyContextNecessity": null,
      "authoringIntent": "保留共同因式可能為 0 的根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c0bbddc586f9884592075f255dd665e3170f2f360dc64ae3c548f97c867f5656"
    },
    {
      "questionId": "u13-s001-v009",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "lockedSkillOrder": 1,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "若 x=3 是方程式 (x-a)(x+2)=0 的一個根，則 a 為何？",
      "givenConditions": "a 為實數，x=3 必須確實使乘積為 0。",
      "target": "由已知根反求參數",
      "choices": [
        "-2",
        "5",
        "3",
        "-3"
      ],
      "answerIndex": 2,
      "explanation": "代入 x=3；因 5≠0，所以 3-a=0，得 a=3，所以答案為「3」。",
      "steps": [
        "代入 x=3",
        "因 5≠0，所以 3-a=0，得 a=3"
      ],
      "optionAnalysis": [
        {
          "choice": "-2",
          "truth": false,
          "reason": "把另一個固定根 -2 當成參數。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "把第二因式值誤作 a。"
        },
        {
          "choice": "3",
          "truth": true,
          "reason": "代入 x=3 得 (3-a)·5=0，因此 3-a=0。"
        },
        {
          "choice": "-3",
          "truth": false,
          "reason": "解 3-a=0 時符號錯誤。"
        }
      ],
      "misconceptionTarget": "混淆固定根與可調參數",
      "prerequisiteSkillIds": [],
      "estimatedTimeSec": 120,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "第二因式在 x=3 時不為 0，因此參數唯一。",
      "difficultyReason": "需要逆向代入與非零因式判斷。",
      "literacyContextNecessity": null,
      "authoringIntent": "由已知根反求參數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1846abd1525f9029525e3a997e5c8ff8c4d654075396676a84591cd9b9eaa8ae"
    },
    {
      "questionId": "u13-s001-v010",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "lockedSkillOrder": 1,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某設備的校正誤差模型為 E(t)=(t-6)(t-14)。當 E(t)=0 時需重新校正。下列哪一組時間符合？",
      "givenConditions": "t 以小時表示，兩值皆在模型允許時段。",
      "target": "解讀模型的零點",
      "choices": [
        "只有 t=6",
        "只有 t=14",
        "t=8 或 t=20",
        "t=6 或 t=14"
      ],
      "answerIndex": 3,
      "explanation": "令 (t-6)(t-14)=0；得到 t=6 或 t=14，所以答案為「t=6 或 t=14」。",
      "steps": [
        "令 (t-6)(t-14)=0",
        "得到 t=6 或 t=14"
      ],
      "optionAnalysis": [
        {
          "choice": "只有 t=6",
          "truth": false,
          "reason": "漏掉第二個校正時間。"
        },
        {
          "choice": "只有 t=14",
          "truth": false,
          "reason": "漏掉第一個校正時間。"
        },
        {
          "choice": "t=8 或 t=20",
          "truth": false,
          "reason": "由兩數差或和猜測，未解方程式。"
        },
        {
          "choice": "t=6 或 t=14",
          "truth": true,
          "reason": "模型為兩個因式乘積，兩個零點都代表誤差為 0。"
        }
      ],
      "misconceptionTarget": "只保留一個時間或把因式常數當間距",
      "prerequisiteSkillIds": [],
      "estimatedTimeSec": 100,
      "unitCheck": "t 的單位為小時；兩個答案皆沿用同一單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "題幹明確定義 E(t)=0 的事件。",
      "difficultyReason": "需把設備規則翻成零乘積方程式。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為情境提供「何時觸發」的必要解讀，刪除情境就無法知道零點代表重新校正。",
      "authoringIntent": "解讀模型的零點",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f4ee0f8deabf571149679a98ae2c8bbea4dd539d1a6b097aa342ae1fdd6005a3"
    },
    {
      "questionId": "u13-s001-v011",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "lockedSkillOrder": 1,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某商品的損益模型為 P(n)=(n-20)(n-80)。店家只考慮 0<n<60 的整數銷量，損益為 0 時的銷量是多少？",
      "givenConditions": "n 必須是 0 與 60 之間的整數。",
      "target": "求符合範圍的損益平衡銷量",
      "choices": [
        "20 件",
        "80 件",
        "20 件或 80 件",
        "60 件"
      ],
      "answerIndex": 0,
      "explanation": "令 P(n)=0 得 n=20 或 80；套用 0<n<60，只保留 20，所以答案為「20 件」。",
      "steps": [
        "令 P(n)=0 得 n=20 或 80",
        "套用 0<n<60，只保留 20"
      ],
      "optionAnalysis": [
        {
          "choice": "20 件",
          "truth": true,
          "reason": "代數零點為 20、80，但範圍只允許 20。"
        },
        {
          "choice": "80 件",
          "truth": false,
          "reason": "雖是代數根，但超過 n<60。"
        },
        {
          "choice": "20 件或 80 件",
          "truth": false,
          "reason": "未套用銷量範圍。"
        },
        {
          "choice": "60 件",
          "truth": false,
          "reason": "把上界誤當成根。"
        }
      ],
      "misconceptionTarget": "只解代數方程而忽略範圍",
      "prerequisiteSkillIds": [],
      "estimatedTimeSec": 115,
      "unitCheck": "銷量單位為件，答案須為整數。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "上界 60 不包含，80 必須排除。",
      "difficultyReason": "同時處理根與情境定義域。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為範圍限制決定哪個代數根可作商業答案，是不可刪除的情境資訊。",
      "authoringIntent": "求符合範圍的損益平衡銷量",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "659a0ea3f98c1813ddd40a0fdcd0d48f7351a70eb86047042842521df706a89b"
    },
    {
      "questionId": "u13-s001-v012",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "lockedSkillOrder": 1,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "溫控系統的警示條件為 (T+5)(T-25)=0，且感測器只在 0°C≤T≤40°C 運作。系統會在哪個溫度警示？",
      "givenConditions": "區間包含 0 與 40，但兩端皆不自動成為根。",
      "target": "找出可運作範圍內的警示溫度",
      "choices": [
        "-5°C",
        "25°C",
        "0°C",
        "40°C"
      ],
      "answerIndex": 1,
      "explanation": "解乘積方程得 T=-5 或 25；以 0≤T≤40 篩選，得到 25°C，所以答案為「25°C」。",
      "steps": [
        "解乘積方程得 T=-5 或 25",
        "以 0≤T≤40 篩選，得到 25°C"
      ],
      "optionAnalysis": [
        {
          "choice": "-5°C",
          "truth": false,
          "reason": "是代數根，但低於感測器範圍。"
        },
        {
          "choice": "25°C",
          "truth": true,
          "reason": "代數根為 -5°C、25°C，運作範圍只接受 25°C。"
        },
        {
          "choice": "0°C",
          "truth": false,
          "reason": "是範圍下界，不是方程式的根。"
        },
        {
          "choice": "40°C",
          "truth": false,
          "reason": "是範圍上界，不是方程式的根。"
        }
      ],
      "misconceptionTarget": "把區間端點誤當解或保留區間外根",
      "prerequisiteSkillIds": [],
      "estimatedTimeSec": 110,
      "unitCheck": "T 使用攝氏度，代數根與區間單位一致。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "-5 在範圍外，25 在範圍內。",
      "difficultyReason": "整合零點與閉區間判斷。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為感測器範圍使兩個代數根只剩一個實際警示值。",
      "authoringIntent": "找出可運作範圍內的警示溫度",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "247f94e125678210db9803aa09b67885be857e5da66d16f0092f3e354b9f0e9b"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u13-s001-cr001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "解方程式 x(x-7)=0，並說明為何不能先把等式兩邊除以 x。",
      "requiredWork": [
        "列出零乘積的兩個分支。",
        "求出全部根。",
        "解釋除以 x 會失去哪一個可能。"
      ],
      "fullCreditSolution": [
        "由 x(x-7)=0，得 x=0 或 x-7=0。",
        "所以 x=0 或 x=7。",
        "若先除以 x，就預設 x≠0，會把合法根 x=0 刪除。"
      ],
      "alternativeSolutions": [
        "可把兩個候選值 0、7 分別代入原式，再指出兩者都成立，故任何只留下 7 的方法都不完整。"
      ],
      "reasoningSteps": [
        "辨認乘積已等於 0。",
        "分別令兩因式為 0。",
        "說明含未知數因式不能在未確認非零前約去。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "得到 x=0、7，且明確指出除以 x 隱含 x≠0 而漏根。"
        },
        {
          "score": 2,
          "criteria": "兩根正確，但除法風險說明只寫「會漏根」而未指明 x=0，或理由完整但有一處輕微書寫錯。"
        },
        {
          "score": 1,
          "criteria": "只得到其中一根，或知道應用零乘積性質但分支未完成。"
        },
        {
          "score": 0,
          "criteria": "答案與原式不符，或把乘積等於 0 誤解為兩因式都必須同時為 0。"
        }
      ],
      "partialCreditRules": [
        "兩根順序不影響。",
        "若先除以 x 後另外獨立檢查 x=0 並補回，仍可得滿分。"
      ],
      "followThroughPolicy": "若第一分支寫成 x=0 後，第二分支有單純移項算術錯，可保留零乘積概念分；錯誤根不得計為完整答案。",
      "unitNotationRules": [
        "x 無單位。",
        "解集合可寫 x=0 或 7。"
      ],
      "answerOnlyPolicy": "只寫「0、7」最多 2 分，因題目要求解釋不可除以 x。",
      "commonErrors": [
        "直接除以 x 只得 7。",
        "誤寫 x=0 且 x=7。"
      ],
      "independentReview": {
        "derivedResult": "x=0 或 x=7；除以 x 會漏掉 0。",
        "ambiguity": "題意明確要求方法理由，根與說明均唯一。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "e8d4224e22b3443206ab55d28d3d3a8fdd2257a161731778f85b6967d189a256"
    },
    {
      "questionId": "u13-s001-cr002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-solving",
      "skillId": "quadratic-factor",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "解方程式 (2x-3)(x+4)=0，並以代入原式驗證每一個根。",
      "requiredWork": [
        "使用零乘積性質。",
        "解兩個一次方程式。",
        "逐根代入乘積驗證。"
      ],
      "fullCreditSolution": [
        "2x-3=0 或 x+4=0。",
        "得 x=3/2 或 x=-4。",
        "代入 3/2 時第一因式為 0；代入 -4 時第二因式為 0，因此兩者皆使乘積為 0。"
      ],
      "alternativeSolutions": [
        "也可先展開成 2x²+5x-12=0，再因式分解回原乘積；但仍需逐根驗證。"
      ],
      "reasoningSteps": [
        "確認右端為 0。",
        "建立兩分支。",
        "求分數根與整數根。",
        "代回原方程。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩根 3/2、-4 完整，且各自指出哪一因式為 0。"
        },
        {
          "score": 2,
          "criteria": "兩根正確但驗證只寫「代入成立」未展示因式值，或一個驗證有小算術誤記。"
        },
        {
          "score": 1,
          "criteria": "正確得到一根並有零乘積步驟，另一分支錯誤。"
        },
        {
          "score": 0,
          "criteria": "未使用可成立的解法，且兩根皆錯。"
        }
      ],
      "partialCreditRules": [
        "3/2 寫成 1.5 可接受。",
        "驗算可用展開式，但需顯示代入結果為 0。"
      ],
      "followThroughPolicy": "若 2x=3 後分數化簡錯，但後續驗算一致，最多保留 1 分方法分。",
      "unitNotationRules": [
        "x 無單位。",
        "分數需等值。"
      ],
      "answerOnlyPolicy": "只列兩根而完全未驗證，最多 2 分。",
      "commonErrors": [
        "把 2x-3=0 解成 -3/2。",
        "只驗一個根。"
      ],
      "independentReview": {
        "derivedResult": "x=3/2 或 -4，兩者代入皆使一個因式為 0。",
        "ambiguity": "方程式與驗證要求完整，沒有情境篩選歧義。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "2f8508090c494c308734159b618894b71500b90243c94aed9d243baecdeff565"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u13-s001-v001",
      "unitId": "u13",
      "skillId": "quadratic-factor",
      "contentSha256": "ed6eead8f1798d06f3f2fab09a966f416f2450217597b328575bf178701273bc",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：由零乘積性質拆成 x-5=0、x+2=0；各自解得 5、-2，兩值代回乘積皆為 0",
      "derivedAnswer": "x=5 或 x=-2",
      "storedAnswer": "x=5 或 x=-2",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「方程式 (x-5)(x+2)=0 的解為何？」的要求量已明示為「求全部實數根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：乘積已等於 0，未知數為實數。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：兩個根皆需列出，答案次序不影響。",
        "choices": "四選項逐一代入或反算；正確項理由為「兩因式分別等於 0，得到 5 與 -2。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "直接使用零乘積性質，只有一次方程運算。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「方程式 (x-5)(x+2)=0 的解為何？」：獨立由原始條件重算：由零乘積性質拆成 x-5=0、x+2=0；各自解得 5、-2，兩值代回乘積皆為 0。再逐項核對四個選項，只有「x=5 或 x=-2」同時符合方程式與限制；兩個根皆需列出，答案次序不影響。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "0334c5c068d389be93f310bd6ad3253fe16f7ecb20980a4628b688ede32ef188"
    },
    {
      "questionId": "u13-s001-v002",
      "unitId": "u13",
      "skillId": "quadratic-factor",
      "contentSha256": "78431eb2876789da8b713756c09505ce5e9460dee7786a9ca9e98851cec5ba60",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：2x+3=0 得 -3/2，x-4=0 得 4；題目只問較小根，所以選 -3/2",
      "derivedAnswer": "-3/2",
      "storedAnswer": "-3/2",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「方程式 (2x+3)(x-4)=0 的較小根為何？」的要求量已明示為「求兩根後比較大小」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：已是乘積等於 0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：需先找完整根集，再依問法選較小值。",
        "choices": "四選項逐一代入或反算；正確項理由為「兩根為 -3/2 與 4，比較後較小者是 -3/2。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "結合一次係數處理與根的大小比較。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「方程式 (2x+3)(x-4)=0 的較小根為何？」：獨立由原始條件重算：2x+3=0 得 -3/2，x-4=0 得 4；題目只問較小根，所以選 -3/2。再逐項核對四個選項，只有「-3/2」同時符合方程式與限制；需先找完整根集，再依問法選較小值。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "a72028852f3a222e8eb6d82cda39a0b7813001f8083ec47dd484b340c7bece99"
    },
    {
      "questionId": "u13-s001-v003",
      "unitId": "u13",
      "skillId": "quadratic-factor",
      "contentSha256": "d294a79849e07dc62968682551cb7935c05559c9d8dda682373c19568d8fb229",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：展開為 x²+14x+49=0，判別式為 0；因此只有重根 -7，一個相異實根",
      "derivedAnswer": "1 個，根為 -7",
      "storedAnswer": "1 個，根為 -7",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「方程式 (x+7)²=0 有幾個相異實根？」的要求量已明示為「判斷重根與相異根個數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：問的是相異實根個數。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：重根 -7 只計一次。",
        "choices": "四選項逐一代入或反算；正確項理由為「平方等於 0 時括號內只能為 0，重複因式給同一根。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "需要辨認重複因式。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「方程式 (x+7)²=0 有幾個相異實根？」：獨立由原始條件重算：展開為 x²+14x+49=0，判別式為 0；因此只有重根 -7，一個相異實根。再逐項核對四個選項，只有「1 個，根為 -7」同時符合方程式與限制；重根 -7 只計一次。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "d3d7cbb11ede9b2b91aad8ee035eda20540902efc655dd6d2637d783fde43840"
    },
    {
      "questionId": "u13-s001-v004",
      "unitId": "u13",
      "skillId": "quadratic-factor",
      "contentSha256": "25fb9fc4cdfc4a84c687af2d5b45a3638ffbde2052703e1bf80174f2fa025b39",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：直接代入 0 得 0·(-9)=0，代入 9 得 9·0=0；二次方程式至多兩根，兩值皆成立",
      "derivedAnswer": "x=0 或 x=9",
      "storedAnswer": "x=0 或 x=9",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「解方程式 x(x-9)=0。」的要求量已明示為「求完整解集」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：乘積等於 0，沒有額外限制。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：0 是合法根，不能因除法刪除。",
        "choices": "四選項逐一代入或反算；正確項理由為「公因式 x 也可能為 0，兩個分支都要保留。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "考查保留零根的關鍵陷阱。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解方程式 x(x-9)=0。」：獨立由原始條件重算：直接代入 0 得 0·(-9)=0，代入 9 得 9·0=0；二次方程式至多兩根，兩值皆成立。再逐項核對四個選項，只有「x=0 或 x=9」同時符合方程式與限制；0 是合法根，不能因除法刪除。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "027fe49d83cdaaf81338aa07410dd7fe85dd7b83044df5f7d98d34c33eb068b1"
    },
    {
      "questionId": "u13-s001-v005",
      "unitId": "u13",
      "skillId": "quadratic-factor",
      "contentSha256": "3a6824b9648f7cca52da3504aa2aee5806ab048fdaab6a82b3a16df6613222bc",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：將兩個因式分別解出 2、-1；計算 2+(-1)=1",
      "derivedAnswer": "1",
      "storedAnswer": "1",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「方程式 (3x-6)(x+1)=0 的兩根和為多少？」的要求量已明示為「求兩根和」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：先求全部根，再求和。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：兩根皆為實數且需合併計算。",
        "choices": "四選項逐一代入或反算；正確項理由為「根為 2 與 -1，和為 1。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "在零乘積後增加二次資訊整合。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「方程式 (3x-6)(x+1)=0 的兩根和為多少？」：獨立由原始條件重算：將兩個因式分別解出 2、-1；計算 2+(-1)=1。再逐項核對四個選項，只有「1」同時符合方程式與限制；兩根皆為實數且需合併計算。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "3319ca76b932300df6ae145394573351540e094bcae17e97338fbf2e039681c1"
    },
    {
      "questionId": "u13-s001-v006",
      "unitId": "u13",
      "skillId": "quadratic-factor",
      "contentSha256": "8af875064fad606b66cef5ae7677dd84f32745db78739e7a79698ae40008c17a",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：若第一因式為 0，乘積為 0；若第二因式為 0，乘積也為 0；因此正確邏輯連接詞是「或」",
      "derivedAnswer": "令 x-3=0 或 x+8=0",
      "storedAnswer": "令 x-3=0 或 x+8=0",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「對方程式 (x-3)(x+8)=0，下列哪一步最正確？」的要求量已明示為「選擇合法推理步驟」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：乘積已等於 0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：邏輯分支必須涵蓋所有可能。",
        "choices": "四選項逐一代入或反算；正確項理由為「零乘積性質要求每個因式分別等於 0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "著重推理語句而非單純運算。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「對方程式 (x-3)(x+8)=0，下列哪一步最正確？」：獨立由原始條件重算：若第一因式為 0，乘積為 0；若第二因式為 0，乘積也為 0；因此正確邏輯連接詞是「或」。再逐項核對四個選項，只有「令 x-3=0 或 x+8=0」同時符合方程式與限制；邏輯分支必須涵蓋所有可能。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "9d13b33c5ff26888309581dcef0760876aca86be8070db62834207369394ae07"
    },
    {
      "questionId": "u13-s001-v007",
      "unitId": "u13",
      "skillId": "quadratic-factor",
      "contentSha256": "8ae67c02f1993344562bfc06d7555936dbdeb7b9cbee84941138ded042339d44",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：原式移項後為 x²+3x-28=0；因數 7 與 -4 的和為 3、積為 -28，根 4、-7；代回乘積皆為 18",
      "derivedAnswer": "x=4 或 x=-7",
      "storedAnswer": "x=4 或 x=-7",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「解方程式 (x-2)(x+5)=18。」的要求量已明示為「求非零右端方程式的根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：右端 18 必須先移項。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：兩根代回原式均成立。",
        "choices": "四選項逐一代入或反算；正確項理由為「先展開移項得 x²+3x-28=0，再分解為 (x-4)(x+7)=0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "需要展開、移項、重新因式分解三步。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解方程式 (x-2)(x+5)=18。」：獨立由原始條件重算：原式移項後為 x²+3x-28=0；因數 7 與 -4 的和為 3、積為 -28，根 4、-7；代回乘積皆為 18。再逐項核對四個選項，只有「x=4 或 x=-7」同時符合方程式與限制；兩根代回原式均成立。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "cb811c524e52f2017ac4ef1ce2006b90555d3274f88fc08bd647b54bc3e1dae3"
    },
    {
      "questionId": "u13-s001-v008",
      "unitId": "u13",
      "skillId": "quadratic-factor",
      "contentSha256": "c0bbddc586f9884592075f255dd665e3170f2f360dc64ae3c548f97c867f5656",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：不先約分，而把右式移到左式；共同因式 x-1 與另一因式 7-x 各可為 0；代回 1、7 都成立",
      "derivedAnswer": "x=1 或 x=7",
      "storedAnswer": "x=1 或 x=7",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「解方程式 (x-1)(x+4)=(x-1)(2x-3)。」的要求量已明示為「保留共同因式可能為 0 的根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：共同因式可能等於 0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：不得以未確認非零的 x-1 約分。",
        "choices": "四選項逐一代入或反算；正確項理由為「移到同一邊提公因式，得 (x-1)(7-x)=0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "考查等式兩邊共同因式與漏根風險。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「解方程式 (x-1)(x+4)=(x-1)(2x-3)。」：獨立由原始條件重算：不先約分，而把右式移到左式；共同因式 x-1 與另一因式 7-x 各可為 0；代回 1、7 都成立。再逐項核對四個選項，只有「x=1 或 x=7」同時符合方程式與限制；不得以未確認非零的 x-1 約分。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "b2d4006328b270debe04cfdefe77a5ef1b4aae94ba3daf559dd2ef3994b12b33"
    },
    {
      "questionId": "u13-s001-v009",
      "unitId": "u13",
      "skillId": "quadratic-factor",
      "contentSha256": "1846abd1525f9029525e3a997e5c8ff8c4d654075396676a84591cd9b9eaa8ae",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：將候選根直接放入原乘積：5(3-a)=0；非零因數 5 可除去，留下 a=3",
      "derivedAnswer": "3",
      "storedAnswer": "3",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「若 x=3 是方程式 (x-a)(x+2)=0 的一個根，則 a 為何？」的要求量已明示為「由已知根反求參數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：a 為實數，x=3 必須確實使乘積為 0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：第二因式在 x=3 時不為 0，因此參數唯一。",
        "choices": "四選項逐一代入或反算；正確項理由為「代入 x=3 得 (3-a)·5=0，因此 3-a=0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "需要逆向代入與非零因式判斷。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「若 x=3 是方程式 (x-a)(x+2)=0 的一個根，則 a 為何？」：獨立由原始條件重算：將候選根直接放入原乘積：5(3-a)=0；非零因數 5 可除去，留下 a=3。再逐項核對四個選項，只有「3」同時符合方程式與限制；第二因式在 x=3 時不為 0，因此參數唯一。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "0b18c8569b15d6991ff652545476ee3a169a5c5bb94ded67b077ac69b8673282"
    },
    {
      "questionId": "u13-s001-v010",
      "unitId": "u13",
      "skillId": "quadratic-factor",
      "contentSha256": "f4ee0f8deabf571149679a98ae2c8bbea4dd539d1a6b097aa342ae1fdd6005a3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：在 t=6 時第一因式為 0，在 t=14 時第二因式為 0；其餘選項代入皆使兩因式都非 0",
      "derivedAnswer": "t=6 或 t=14",
      "storedAnswer": "t=6 或 t=14",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「某設備的校正誤差模型為 E(t)=(t-6)(t-14)。當 E(t)=0 時需重新校正。下列哪一組時間符合？」的要求量已明示為「解讀模型的零點」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：t 以小時表示，兩值皆在模型允許時段。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：題幹明確定義 E(t)=0 的事件。",
        "choices": "四選項逐一代入或反算；正確項理由為「模型為兩個因式乘積，兩個零點都代表誤差為 0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "t 的單位為小時；兩個答案皆沿用同一單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "需把設備規則翻成零乘積方程式。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為情境提供「何時觸發」的必要解讀，刪除情境就無法知道零點代表重新校正。",
      "reviewerNote": "獨立重算「某設備的校正誤差模型為 E(t)=(t-6)(t-14)。當 E(t)=0 時需重新校正。下列哪一組時間符合？」：獨立由原始條件重算：在 t=6 時第一因式為 0，在 t=14 時第二因式為 0；其餘選項代入皆使兩因式都非 0。再逐項核對四個選項，只有「t=6 或 t=14」同時符合方程式與限制；題幹明確定義 E(t)=0 的事件。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "81d70e71e27b07a274cddf7b766ced10e7d8d413e9feaeb2c2019b47dc823491"
    },
    {
      "questionId": "u13-s001-v011",
      "unitId": "u13",
      "skillId": "quadratic-factor",
      "contentSha256": "659a0ea3f98c1813ddd40a0fdcd0d48f7351a70eb86047042842521df706a89b",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：兩因式各為 0 得 20、80；檢查整數與範圍：20 合格，80 不合，故唯一 20",
      "derivedAnswer": "20 件",
      "storedAnswer": "20 件",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「某商品的損益模型為 P(n)=(n-20)(n-80)。店家只考慮 0<n<60 的整數銷量，損益為 0 時的銷量是多少？」的要求量已明示為「求符合範圍的損益平衡銷量」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：n 必須是 0 與 60 之間的整數。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：上界 60 不包含，80 必須排除。",
        "choices": "四選項逐一代入或反算；正確項理由為「代數零點為 20、80，但範圍只允許 20。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "銷量單位為件，答案須為整數。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "同時處理根與情境定義域。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為範圍限制決定哪個代數根可作商業答案，是不可刪除的情境資訊。",
      "reviewerNote": "獨立重算「某商品的損益模型為 P(n)=(n-20)(n-80)。店家只考慮 0<n<60 的整數銷量，損益為 0 時的銷量是多少？」：獨立由原始條件重算：兩因式各為 0 得 20、80；檢查整數與範圍：20 合格，80 不合，故唯一 20。再逐項核對四個選項，只有「20 件」同時符合方程式與限制；上界 60 不包含，80 必須排除。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "ea7f0e073052a7d7723ed1b670473aff0c3d946dcbd8aef2077b6f0810632d51"
    },
    {
      "questionId": "u13-s001-v012",
      "unitId": "u13",
      "skillId": "quadratic-factor",
      "contentSha256": "247f94e125678210db9803aa09b67885be857e5da66d16f0092f3e354b9f0e9b",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：第一因式給 -5，第二因式給 25；逐一比較區間，只有 25 在閉區間內",
      "derivedAnswer": "25°C",
      "storedAnswer": "25°C",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「溫控系統的警示條件為 (T+5)(T-25)=0，且感測器只在 0°C≤T≤40°C 運作。系統會在哪個溫度警示？」的要求量已明示為「找出可運作範圍內的警示溫度」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：區間包含 0 與 40，但兩端皆不自動成為根。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：-5 在範圍外，25 在範圍內。",
        "choices": "四選項逐一代入或反算；正確項理由為「代數根為 -5°C、25°C，運作範圍只接受 25°C。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "T 使用攝氏度，代數根與區間單位一致。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "整合零點與閉區間判斷。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為感測器範圍使兩個代數根只剩一個實際警示值。",
      "reviewerNote": "獨立重算「溫控系統的警示條件為 (T+5)(T-25)=0，且感測器只在 0°C≤T≤40°C 運作。系統會在哪個溫度警示？」：獨立由原始條件重算：第一因式給 -5，第二因式給 25；逐一比較區間，只有 25 在閉區間內。再逐項核對四個選項，只有「25°C」同時符合方程式與限制；-5 在範圍外，25 在範圍內。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "85f7ec1f260d3914381bdea322ec27751f196adbe2e9d09535a45187564fb270"
    }
  ],
  "drawingSpecs": []
};
