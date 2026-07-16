// Generated only from reviewed immutable source. Do not hand edit.
export default {
  "lecture": {
    "lectureId": "u14-s008-lecture-r1",
    "unitId": "u14",
    "numericUnitId": 14,
    "topicId": "u14-sequences",
    "skillId": "geometric-nth-basic",
    "lockedTitle": "等比第 n 項基本",
    "title": "等比第 n 項基本：把重複乘法寫成指數",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能推導並使用a_n=a_1rⁿ⁻¹。",
      "能由兩項與公比求其他項。",
      "能處理負公比與分數公比。",
      "能回求簡單的項數或公比。"
    ],
    "prerequisiteBridge": [
      {
        "skillId": "sequence-pattern-word",
        "title": "規律觀察列式",
        "requiredLevel": "能說明「規律觀察列式」的核心定義並完成基本計算，作為本技能的直接前置。"
      }
    ],
    "glossary": [
      {
        "term": "等比通項",
        "definition": "直接由首項、公比與項數求第n項。"
      },
      {
        "term": "指數",
        "definition": "表示同一因數重複相乘的次數。"
      },
      {
        "term": "倍率次數",
        "definition": "從第1項到第n項共乘n-1次。"
      },
      {
        "term": "衰減",
        "definition": "公比絕對值小於1時，絕對值逐步縮小。"
      }
    ],
    "notation": [
      {
        "symbol": "a_n=a_1rⁿ⁻¹",
        "meaning": "等比數列第n項公式。"
      },
      {
        "symbol": "rⁿ⁻¹",
        "meaning": "公比重複相乘n-1次。"
      }
    ],
    "conceptNarrative": [
      "第2項乘一次r，第3項乘兩次r，因此第n項乘n-1次r。",
      "負公比的次方奇偶會決定正負：偶次方為正、奇次方為負。",
      "分數公比要整體乘方，分子與分母都要乘方。",
      "回求n時在國中範圍通常用逐次比較同底數次方，不需對數。"
    ],
    "formalDefinitions": [
      {
        "name": "等比通項",
        "statement": "a_1乘上n-1個r所得的項。"
      },
      {
        "name": "公比",
        "statement": "相鄰後項與前項的固定倍率。"
      }
    ],
    "formulas": [
      {
        "formula": "a_n=a_1rⁿ⁻¹",
        "conditions": [
          "n為正整數",
          "數列確為等比"
        ],
        "meaning": "首項經過n-1次倍率。"
      },
      {
        "formula": "a_n=a_krⁿ⁻ᵏ",
        "conditions": [
          "已知第k項與公比"
        ],
        "meaning": "從第k項跨n-k步。"
      }
    ],
    "nonApplicableCases": [
      "非等比數列不可套公式。",
      "把指數寫成n會多乘一次。",
      "負公比不可先去掉負號。",
      "回求n若目標不在幾何倍數鏈上，不能硬取近似項數。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認a_1、r與n",
        "check": "尤其辨認首項是否為第0時刻。"
      },
      {
        "step": 2,
        "instruction": "寫a_n=a_1rⁿ⁻¹",
        "check": "先不急著算。"
      },
      {
        "step": 3,
        "instruction": "處理指數與符號",
        "check": "負底數看次方奇偶。"
      },
      {
        "step": 4,
        "instruction": "分數次方約分",
        "check": "保留精確值。"
      },
      {
        "step": 5,
        "instruction": "代回相鄰項驗證倍率",
        "check": "確認無錯位。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "a_1=3，r=2，求a_7",
        "reasoning": "a_7=3×2⁶。",
        "solutionSteps": [
          "a_7=3×2⁶。",
          "2⁶=64。"
        ],
        "answer": "192"
      },
      {
        "exampleId": "L2",
        "prompt": "a_1=128，r=1/2，求a_6",
        "reasoning": "乘5次1/2。",
        "solutionSteps": [
          "乘5次1/2。",
          "128÷32=4。"
        ],
        "answer": "4"
      },
      {
        "exampleId": "L3",
        "prompt": "a_1=-5，r=-2，求a_4",
        "reasoning": "(-2)³=-8。",
        "solutionSteps": [
          "(-2)³=-8。",
          "-5×(-8)=40。"
        ],
        "answer": "40"
      },
      {
        "exampleId": "L4",
        "prompt": "a_3=18，r=3，求a_1",
        "reasoning": "18=a_1×3²。",
        "solutionSteps": [
          "18=a_1×3²。",
          "a_1=2。"
        ],
        "answer": "2"
      }
    ],
    "difficultyConnections": {
      "basic": "能辨認定義與完成單一步驟。",
      "standard": "能在多個表示間轉換並處理兩至三步推理。",
      "advanced": "能整合位置、條件、反推或代數驗證。",
      "literacy": "能從表格、圖形或實際單位中選擇模型並檢查邊界。"
    },
    "commonMistakes": [
      {
        "mistake": "指數寫n",
        "why": "首項被多乘一次。",
        "correction": "使用n-1。"
      },
      {
        "mistake": "負公比只看絕對值",
        "why": "項的正負會錯。",
        "correction": "保留括號(-r)ⁿ⁻¹。"
      },
      {
        "mistake": "分數公比只乘分母",
        "why": "指數作用於整個分數。",
        "correction": "寫成(p/q)ⁿ⁻¹。"
      },
      {
        "mistake": "把a_k直接當首項",
        "why": "位置差未處理。",
        "correction": "使用a_n=a_krⁿ⁻ᵏ。"
      },
      {
        "mistake": "以加法累積公比",
        "why": "等比是重複乘法。",
        "correction": "用冪次。"
      },
      {
        "mistake": "回求n使用小數近似卻不驗證",
        "why": "項數必須正整數。",
        "correction": "逐次乘回檢查。"
      }
    ],
    "selfCheck": [
      "從第1項到第n項乘了幾次？",
      "負公比的次方奇偶是否正確？",
      "分數是否整體乘方？",
      "已知項若不是首項，位置差是否正確？",
      "回求n是否為正整數且代回成立？"
    ],
    "summary": [
      "等比第n項為a_1rⁿ⁻¹。",
      "n-1來自倍率次數。",
      "負公比與分數公比需保留完整括號。",
      "國中回求項數以同底次方與驗算處理。"
    ],
    "connections": {
      "previous": "承接等比基本與規律列式。",
      "next": [
        "等差級數和將改用首尾配對求多項總和。",
        "素養題會比較線性增加與倍增。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u14-s008-v001",
        "u14-s008-v002",
        "u14-s008-v003",
        "u14-s008-v004",
        "u14-s008-v005",
        "u14-s008-v006",
        "u14-s008-v007",
        "u14-s008-v008",
        "u14-s008-v009",
        "u14-s008-v010",
        "u14-s008-v011",
        "u14-s008-v012"
      ],
      "constructedResponseIds": [
        "u14-s008-cr001",
        "u14-s008-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "capBoundary": "pass",
      "undefinedSymbolAudit": "pass",
      "futureKnowledgeLeakage": "pass",
      "examplesNotCopiedFromQuestionBank": true,
      "reviewVersion": "human-lecture-review-r4.0",
      "reviewedAt": "2026-07-12",
      "reviewNote": "逐段檢查「等比第 n 項基本」的定義、符號、適用條件與六類常見錯誤；四個例題均以不同數值與推理路徑重算，並確認未直接複製本技能題庫題幹。"
    },
    "contentSha256": "0fd8d9ba85a066895837d2698c547eb457949459083c21a477812bea6e9ce36d"
  },
  "mcQuestions": [
    {
      "questionId": "u14-s008-v001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等比數列首項為 5、公比為 2，則第 6 項是多少？",
      "givenConditions": [
        "a_1=5",
        "r=2"
      ],
      "target": "求a_6",
      "choices": [
        "80",
        "320",
        "64",
        "160"
      ],
      "answerIndex": 3,
      "independentSolution": "從第1項到第6項乘5次2：5×32=160。",
      "mainExplanation": "依題意依序處理：使用n-1=5。；計算2⁵。，所以唯一正確選項是「160」。",
      "steps": [
        "使用n-1=5。",
        "計算2⁵。"
      ],
      "optionAnalysis": [
        {
          "choice": "80",
          "truth": false,
          "reason": "80只乘4次。"
        },
        {
          "choice": "320",
          "truth": false,
          "reason": "320多乘一次。"
        },
        {
          "choice": "64",
          "truth": false,
          "reason": "64漏掉首項5。"
        },
        {
          "choice": "160",
          "truth": true,
          "reason": "a_6=5×2⁵=160。"
        }
      ],
      "misconceptionTarget": "把第6項的指數寫成6或4。",
      "prerequisiteSkillIds": [
        "sequence-pattern-word"
      ],
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "n=6正整數；答案精確。",
      "difficultyReason": "基礎：資料完整，只需通項與整數次方。",
      "literacyContextNecessity": null,
      "authoringIntent": "基本等比通項代入。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "622c57dea4691c6409bc9daa9d24ebf4ee149935ed07b822ac7aecdaa72e26ac"
    },
    {
      "questionId": "u14-s008-v002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等比數列首項為 81、公比為 1/3，則第 5 項是多少？",
      "givenConditions": [
        "a_1=81",
        "r=1/3"
      ],
      "target": "求a_5",
      "choices": [
        "3",
        "1",
        "1/3",
        "9"
      ],
      "answerIndex": 1,
      "independentSolution": "依序81、27、9、3、1；或用81×1/81=1。",
      "mainExplanation": "依題意依序處理：計算4次倍率。；約分。，所以唯一正確選項是「1」。",
      "steps": [
        "計算4次倍率。",
        "約分。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3是第4項。"
        },
        {
          "choice": "1",
          "truth": true,
          "reason": "a_5=81×(1/3)⁴=81/81=1。"
        },
        {
          "choice": "1/3",
          "truth": false,
          "reason": "1/3是第6項。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9是第3項。"
        }
      ],
      "misconceptionTarget": "把第5項誤作乘5次1/3。",
      "prerequisiteSkillIds": [
        "sequence-pattern-word"
      ],
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "分數公比正且非0。",
      "difficultyReason": "基礎：需正確處理n-1與分數冪。",
      "literacyContextNecessity": null,
      "authoringIntent": "分數公比的第n項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2aaab469bbd15886652352f53361ac9f452d27e0b8802bb0ef8d1341c4e74843"
    },
    {
      "questionId": "u14-s008-v003",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等比數列首項為 -2、公比為 -2，則第 5 項是多少？",
      "givenConditions": [
        "a_1=-2",
        "r=-2"
      ],
      "target": "求a_5",
      "choices": [
        "-32",
        "32",
        "-16",
        "16"
      ],
      "answerIndex": 0,
      "independentSolution": "第5項需4次公比，(-2)⁴=16，再乘首項-2得-32。",
      "mainExplanation": "依題意依序處理：先算負底數偶次方。；乘首項。，所以唯一正確選項是「-32」。",
      "steps": [
        "先算負底數偶次方。",
        "乘首項。"
      ],
      "optionAnalysis": [
        {
          "choice": "-32",
          "truth": true,
          "reason": "a_5=-2×(-2)⁴=-2×16=-32。"
        },
        {
          "choice": "32",
          "truth": false,
          "reason": "32漏掉首項負號。"
        },
        {
          "choice": "-16",
          "truth": false,
          "reason": "-16只乘3次公比。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "16同時少乘與符號錯。"
        }
      ],
      "misconceptionTarget": "認為偶次方使整個結果必為正，忽略首項仍為負。",
      "prerequisiteSkillIds": [
        "sequence-pattern-word"
      ],
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "括號(-2)⁴完整；答案-32。",
      "difficultyReason": "基礎：考查負底數次方與首項符號的分離。",
      "literacyContextNecessity": null,
      "authoringIntent": "負公比通項符號。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5fdb60b2a3dfb63baa1bd5bc17b68a7aa34c827c9428b4a424570b5949965d69"
    },
    {
      "questionId": "u14-s008-v004",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等比數列中 a_3=20、公比為 2，則 a_7 等於多少？",
      "givenConditions": [
        "a_3=20",
        "r=2"
      ],
      "target": "求a_7",
      "choices": [
        "160",
        "640",
        "320",
        "80"
      ],
      "answerIndex": 2,
      "independentSolution": "a_7=a_3×2⁷⁻³=20×16=320。",
      "mainExplanation": "依題意依序處理：使用位置差4。；計算倍率。，所以唯一正確選項是「320」。",
      "steps": [
        "使用位置差4。",
        "計算倍率。"
      ],
      "optionAnalysis": [
        {
          "choice": "160",
          "truth": false,
          "reason": "160只跨3步。"
        },
        {
          "choice": "640",
          "truth": false,
          "reason": "640跨5步。"
        },
        {
          "choice": "320",
          "truth": true,
          "reason": "從第3項到第7項跨4步，20×2⁴=320。"
        },
        {
          "choice": "80",
          "truth": false,
          "reason": "80只跨2步。"
        }
      ],
      "misconceptionTarget": "仍使用n-1=6而把a_3誤當首項。",
      "prerequisiteSkillIds": [
        "sequence-pattern-word"
      ],
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "位置差7-3=4。",
      "difficultyReason": "標準：需使用a_n=a_krⁿ⁻ᵏ避免位置錯位。",
      "literacyContextNecessity": null,
      "authoringIntent": "由非首項求遠項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "651f0bc03d69723957753b49554649120ca7cf193e27c6a414084acbeef35d3e"
    },
    {
      "questionId": "u14-s008-v005",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "正項等比數列中 a_2=12、a_5=96，則公比是多少？",
      "givenConditions": [
        "正項等比數列",
        "a_2=12",
        "a_5=96"
      ],
      "target": "求r",
      "choices": [
        "4",
        "8",
        "2",
        "1/2"
      ],
      "answerIndex": 2,
      "independentSolution": "第2到第5項有3個倍率，r³=8。正項且遞增，r=2。",
      "mainExplanation": "依題意依序處理：建立r³=8。；取正的立方根2。，所以唯一正確選項是「2」。",
      "steps": [
        "建立r³=8。",
        "取正的立方根2。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "4的三次方64，不是8。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8是三步總倍率r³。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "a_5/a_2=r³=96/12=8；正公比r=2。"
        },
        {
          "choice": "1/2",
          "truth": false,
          "reason": "1/2會使數列遞減。"
        }
      ],
      "misconceptionTarget": "把三步總倍率8直接當公比。",
      "prerequisiteSkillIds": [
        "sequence-pattern-word"
      ],
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "實數立方根唯一為2；正項條件一致。",
      "difficultyReason": "標準：需辨認倍率次數與公比本身。",
      "literacyContextNecessity": null,
      "authoringIntent": "由間隔三步的兩項回求公比。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d510e426e1dbb2a12b7b285704e90d90c9459087fda30fbcc1174107e2ff2dcd"
    },
    {
      "questionId": "u14-s008-v006",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等比數列的通項為 a_n=3(-1/2)ⁿ⁻¹，則 a_4 等於多少？",
      "givenConditions": [
        "通項"
      ],
      "target": "求a_4",
      "choices": [
        "-3/8",
        "3/8",
        "-3/16",
        "3/16"
      ],
      "answerIndex": 0,
      "independentSolution": "n-1=3為奇數，所以冪為-1/8；乘3得-3/8。",
      "mainExplanation": "依題意依序處理：代入n=4。；處理負分數三次方。，所以唯一正確選項是「-3/8」。",
      "steps": [
        "代入n=4。",
        "處理負分數三次方。"
      ],
      "optionAnalysis": [
        {
          "choice": "-3/8",
          "truth": true,
          "reason": "a_4=3(-1/2)³=3(-1/8)=-3/8。"
        },
        {
          "choice": "3/8",
          "truth": false,
          "reason": "3/8漏負號。"
        },
        {
          "choice": "-3/16",
          "truth": false,
          "reason": "-3/16把次方算成1/16。"
        },
        {
          "choice": "3/16",
          "truth": false,
          "reason": "3/16同時符號與次方錯。"
        }
      ],
      "misconceptionTarget": "把(-1/2)³誤作-1/2⁴或忽略括號。",
      "prerequisiteSkillIds": [
        "sequence-pattern-word"
      ],
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "答案最簡分數-3/8。",
      "difficultyReason": "標準：需正確處理括號、奇次方與分數。",
      "literacyContextNecessity": null,
      "authoringIntent": "負分數公比通項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8616f36046b16656f09bf137479c993b1ff8580892bae73a94f7b736685f91f0"
    },
    {
      "questionId": "u14-s008-v007",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等比數列的第4項為54、公比為3。若第8項為4374，則第4項到第8項之間一共乘了幾次3？",
      "givenConditions": [
        "a4=54",
        "a8=4374",
        "公比3"
      ],
      "target": "辨認項次差對應的連乘次數",
      "choices": [
        "3次",
        "4次",
        "5次",
        "8次"
      ],
      "answerIndex": 1,
      "independentSolution": "從第4項到第8項依序經過4→5、5→6、6→7、7→8，共乘4次3；54×3⁴=4374。",
      "mainExplanation": "用項次差8−4計算公比連乘次數，再用數值驗證。；完整檢查：從第4項到第8項依序經過4→5、5→6、6→7、7→8，共乘4次3；54×3⁴=4374。",
      "steps": [
        "計算項次差8−4=4。",
        "驗證54×3⁴=4374。"
      ],
      "optionAnalysis": [
        {
          "choice": "3次",
          "truth": false,
          "reason": "3次只到第7項。"
        },
        {
          "choice": "4次",
          "truth": true,
          "reason": "項次差4所以乘4次。"
        },
        {
          "choice": "5次",
          "truth": false,
          "reason": "5次會到第9項。"
        },
        {
          "choice": "8次",
          "truth": false,
          "reason": "8是項次不是乘法次數。"
        }
      ],
      "misconceptionTarget": "把目標項次當連乘次數或少算間隔。",
      "prerequisiteSkillIds": [
        "sequence-pattern-word"
      ],
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "a8作為驗證，連乘次數唯一。",
      "difficultyReason": "進階：反向驗證指數中的項次差。",
      "literacyContextNecessity": null,
      "authoringIntent": "由中間項跨多步求遠項。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5f485a46994355052531f9af67204fd259124514000c482ba685f151ee1c152c"
    },
    {
      "questionId": "u14-s008-v008",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等比數列首項為 256、公比為 1/2。數值 8 是第幾項？",
      "givenConditions": [
        "a_1=256",
        "r=1/2",
        "a_n=8"
      ],
      "target": "求n",
      "choices": [
        "5",
        "7",
        "8",
        "6"
      ],
      "answerIndex": 3,
      "independentSolution": "列項亦可：256、128、64、32、16、8，8在第6項。",
      "mainExplanation": "依題意依序處理：用同底次方比較。；將倍率次數加1成項次。，所以唯一正確選項是「6」。",
      "steps": [
        "用同底次方比較。",
        "將倍率次數加1成項次。"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": false,
          "reason": "第5項為16。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "第7項為4。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8是項值不是項次。"
        },
        {
          "choice": "6",
          "truth": true,
          "reason": "256×(1/2)ⁿ⁻¹=8，256/8=32=2⁵，所以n-1=5，n=6。"
        }
      ],
      "misconceptionTarget": "找到5次減半就回答第5項。",
      "prerequisiteSkillIds": [
        "sequence-pattern-word"
      ],
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "n=6正整數；代回成立。",
      "difficultyReason": "進階：需把倍率次數5轉為項次6。",
      "literacyContextNecessity": null,
      "authoringIntent": "由項值回求等比項次。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3ff404c9175e384b6c307ccaa9277c73279fe0b23736ff358ad18d0a92aef71b"
    },
    {
      "questionId": "u14-s008-v009",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "等比數列中 a_2=-6、a_5=162，則 a_6 等於多少？",
      "givenConditions": [
        "a_2=-6",
        "a_5=162"
      ],
      "target": "求a_6",
      "choices": [
        "486",
        "-486",
        "-162",
        "54"
      ],
      "answerIndex": 1,
      "independentSolution": "第2到第5項跨3步，r³=-27，實數r=-3。下一項乘-3得-486。",
      "mainExplanation": "依題意依序處理：回求負公比。；由a_5求a_6。，所以唯一正確選項是「-486」。",
      "steps": [
        "回求負公比。",
        "由a_5求a_6。"
      ],
      "optionAnalysis": [
        {
          "choice": "486",
          "truth": false,
          "reason": "486漏負公比。"
        },
        {
          "choice": "-486",
          "truth": true,
          "reason": "a_5/a_2=r³=162/(-6)=-27，所以r=-3；a_6=162×(-3)=-486。"
        },
        {
          "choice": "-162",
          "truth": false,
          "reason": "-162把公比誤作-1。"
        },
        {
          "choice": "54",
          "truth": false,
          "reason": "54是除以3。"
        }
      ],
      "misconceptionTarget": "只取公比絕對值3而遺失交錯符號。",
      "prerequisiteSkillIds": [
        "sequence-pattern-word"
      ],
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "實數立方根-3唯一；a_2非0。",
      "difficultyReason": "進階：兩階段推理，包含奇次根與符號。",
      "literacyContextNecessity": null,
      "authoringIntent": "由遠項回求負公比再延伸。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "dd00702f40bb31218ac1e3a24aca90d63267be8501e83a9b768ab453777be0d3"
    },
    {
      "questionId": "u14-s008-v010",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一則訊息第 1 輪有 4 人分享，之後每一輪分享人數都是前一輪的 3 倍。第 6 輪有多少人分享？",
      "givenConditions": [
        "第1輪4人",
        "每輪3倍"
      ],
      "target": "第6輪分享人數",
      "choices": [
        "324",
        "2916",
        "972",
        "729"
      ],
      "answerIndex": 2,
      "independentSolution": "輪次形成等比數列4、12、36、108、324、972。",
      "mainExplanation": "依題意依序處理：確認第1輪為首項。；乘5次3。，所以唯一正確選項是「972」。",
      "steps": [
        "確認第1輪為首項。",
        "乘5次3。"
      ],
      "optionAnalysis": [
        {
          "choice": "324",
          "truth": false,
          "reason": "324只乘4次3。"
        },
        {
          "choice": "2916",
          "truth": false,
          "reason": "2916多乘一次3。"
        },
        {
          "choice": "972",
          "truth": true,
          "reason": "a_6=4×3⁵=4×243=972。"
        },
        {
          "choice": "729",
          "truth": false,
          "reason": "729漏掉首輪4人的係數。"
        }
      ],
      "misconceptionTarget": "把第1輪也算成一次傳播後的結果。",
      "prerequisiteSkillIds": [
        "sequence-pattern-word"
      ],
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "假設每輪人數依模型且可重複計數規則已由題意確定；答案為人數整數。",
      "difficultyReason": "素養：需區分第1輪已知人數與後續5次倍率變化。",
      "literacyContextNecessity": "分享輪次情境決定倍率發生次數；刪除會失去起始輪的時序解讀。",
      "authoringIntent": "以輪次建立倍增分享模型。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a4d782f6293b2921c6ba848f71a2b05a972c5fc8f7ceeba02cbe4a12d90f599e"
    },
    {
      "questionId": "u14-s008-v011",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "某藥量在每個觀測週期後剩下原來的一半。起始為 160 mg，經過 5 個週期後剩多少？",
      "givenConditions": [
        "起始160mg",
        "每週期剩1/2"
      ],
      "target": "5週期後藥量",
      "choices": [
        "10 mg",
        "20 mg",
        "32 mg",
        "5 mg"
      ],
      "answerIndex": 3,
      "independentSolution": "逐期160、80、40、20、10、5，共5次減半。",
      "mainExplanation": "依題意依序處理：週期數對應倍率次數。；計算精確剩餘量。，所以唯一正確選項是「5 mg」。",
      "steps": [
        "週期數對應倍率次數。",
        "計算精確剩餘量。"
      ],
      "optionAnalysis": [
        {
          "choice": "10 mg",
          "truth": false,
          "reason": "10 mg只經過4週期。"
        },
        {
          "choice": "20 mg",
          "truth": false,
          "reason": "20 mg只經過3週期。"
        },
        {
          "choice": "32 mg",
          "truth": false,
          "reason": "32 mg是160÷5，誤作平均分。"
        },
        {
          "choice": "5 mg",
          "truth": true,
          "reason": "160×(1/2)⁵=5 mg。"
        }
      ],
      "misconceptionTarget": "將5個週期誤作包含起始在內的5項。",
      "prerequisiteSkillIds": [
        "sequence-pattern-word"
      ],
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "僅作數學模型，不作醫療建議；答案精確5mg。",
      "difficultyReason": "素養：起始量位於週期前，經過5週期需乘5次，並保留mg單位。",
      "literacyContextNecessity": "藥量情境提供「起始」與「經過」的時序界線。",
      "authoringIntent": "等比衰減與經過時間。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7bd3c8fca13e397221357332695aecc93f345c8518178a3d6b6892784cc24d13"
    },
    {
      "questionId": "u14-s008-v012",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_108",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "text": "一棵模型樹第 1 層有 3 根分枝，之後每一層分枝數都是上一層的 2 倍。第 8 層有幾根分枝？",
      "givenConditions": [
        "第1層3根",
        "每層2倍"
      ],
      "target": "第8層分枝數",
      "choices": [
        "384",
        "192",
        "768",
        "256"
      ],
      "answerIndex": 0,
      "independentSolution": "從第1層到第8層有7次倍增，3×128=384根。",
      "mainExplanation": "依題意依序處理：辨認層號為項次。；計算2⁷並乘3。，所以唯一正確選項是「384」。",
      "steps": [
        "辨認層號為項次。",
        "計算2⁷並乘3。"
      ],
      "optionAnalysis": [
        {
          "choice": "384",
          "truth": true,
          "reason": "a_8=3×2⁷=384。"
        },
        {
          "choice": "192",
          "truth": false,
          "reason": "192只乘6次2。"
        },
        {
          "choice": "768",
          "truth": false,
          "reason": "768多乘一次2。"
        },
        {
          "choice": "256",
          "truth": false,
          "reason": "256漏掉首項係數3。"
        }
      ],
      "misconceptionTarget": "直接算2⁸或3×2⁸。",
      "prerequisiteSkillIds": [
        "sequence-pattern-word"
      ],
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "estimatedTimeSec": 90,
      "unitCheck": "題目為純數時無外部單位；若含情境，所有量均使用題幹同一單位並已在答案保留。",
      "roundingCheck": "所有計算使用精確整數、分數或有限小數；題目未要求四捨五入。",
      "ambiguityBoundaryAudit": "答案為單一第8層數量，不是各層總和。",
      "difficultyReason": "素養：需將層級結構轉成首項3、公比2的等比模型。",
      "literacyContextNecessity": "分枝層級情境使「第8層」不是經過8次倍增，測試層號與變化次數。",
      "authoringIntent": "樹狀倍增的第n層。",
      "figureDrawingSpecRef": null,
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6a87fcb3cc6bd6e8a805b884107a9ca7231b0d45a12d234d7dbf8e386f5440c5"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u14-s008-cr001",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "等比數列中 a_3=12、a_7=192，且各項皆為正數。求公比與首項。",
      "requiredWork": [
        "由位置差建立r的方程式。",
        "利用正數條件選公比。",
        "回推首項並驗算。"
      ],
      "fullCreditSolution": [
        "a_7/a_3=r⁴=192/12=16。",
        "r⁴=16有r=±2，但各項皆正數，故r=2。",
        "a_3=a_1r²，所以12=4a_1，a_1=3。",
        "驗算a_7=3×2⁶=192。"
      ],
      "alternativeSolutions": [
        "若先由正項與遞增判r>0，再取r=2亦可。"
      ],
      "reasoningSteps": [
        "a_7/a_3=r⁴=192/12=16。",
        "r⁴=16有r=±2，但各項皆正數，故r=2。",
        "a_3=a_1r²，所以12=4a_1，a_1=3。",
        "驗算a_7=3×2⁶=192。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "r=2、a_1=3，且使用四步倍率與正數條件。"
        },
        {
          "score": 2,
          "criteria": "答案正確但未說明排除r=-2；或r正確而首項算術錯。"
        },
        {
          "score": 1,
          "criteria": "得到r=±2但未套正數限制，或只求得r。"
        },
        {
          "score": 0,
          "criteria": "把16直接當公比。"
        }
      ],
      "partialCreditRules": [
        "若保留±2但分別檢查後指出-2會交錯，最終取2，可得滿分。"
      ],
      "followThroughPolicy": "若r算成-2但仍回推a_1=3，因不符合正項條件，最高1分。",
      "unitAndNotationRules": "無單位；正數條件是選根必要資訊。",
      "answerOnlyPolicy": "只答2、3最多1分。",
      "commonErrors": [
        "把第3到第7項視為乘3次。",
        "忽略偶次方造成±根。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "r=2，a_1=3。",
        "ambiguity": "正數條件排除負公比，數列唯一。",
        "unitBoundaryCheck": "無單位；正數條件是選根必要資訊。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「r=2，a_1=3。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ee8fadd5f29f553c454fdf6704dd4703ac37c5e1182a0c89cc88d37522b474de"
    },
    {
      "questionId": "u14-s008-cr002",
      "unitId": "u14",
      "numericUnitId": 14,
      "topicId": "u14-sequences",
      "skillId": "geometric-nth-basic",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一種材料每經過一個週期，剩餘量為前一週期的 3/4。起始量為 256 g。求第 5 個週期後的剩餘量，並寫出第 n 個週期後的公式（n=0 表示起始）。",
      "requiredWork": [
        "辨認起始時刻為n=0。",
        "寫出週期後公式。",
        "計算n=5並保留單位。"
      ],
      "fullCreditSolution": [
        "令R_n表示經過n個週期後的量。",
        "R_n=256(3/4)ⁿ，因n=0時R_0=256。",
        "R_5=256×243/1024=243/4=60.75 g。"
      ],
      "alternativeSolutions": [
        "可逐期計算256、192、144、108、81、60.75。"
      ],
      "reasoningSteps": [
        "令R_n表示經過n個週期後的量。",
        "R_n=256(3/4)ⁿ，因n=0時R_0=256。",
        "R_5=256×243/1024=243/4=60.75 g。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "公式R_n=256(3/4)ⁿ與R_5=60.75g均正確，並說明n=0起始。"
        },
        {
          "score": 2,
          "criteria": "公式正確但第5週期算術錯；或數值正確但公式錯位。"
        },
        {
          "score": 1,
          "criteria": "只逐期算到60.75g且過程可辨識。"
        },
        {
          "score": 0,
          "criteria": "使用n-1導致起始條件不符，且未修正。"
        }
      ],
      "partialCreditRules": [
        "因本題明示n=0起始，使用n-1不是可接受等價式。"
      ],
      "followThroughPolicy": "若逐期某一步算錯但後續持續乘3/4，保留方法分至2分。",
      "unitAndNotationRules": "單位g；60.75為有限小數，不需四捨五入。",
      "answerOnlyPolicy": "只答60.75g最多1分。",
      "commonErrors": [
        "沿用一般第1項公式寫n-1，忽略本題索引從0開始。",
        "把剩3/4誤作減3/4 g。"
      ],
      "figureDrawingSpecRef": null,
      "independentReview": {
        "derivedResult": "R_n=256(3/4)ⁿ，R_5=60.75g。",
        "ambiguity": "索引起點由題目明示，公式唯一。",
        "unitBoundaryCheck": "單位g；60.75為有限小數，不需四捨五入。",
        "decision": "pass",
        "reviewNote": "獨立依題目條件重新推導，得到「R_n=256(3/4)ⁿ，R_5=60.75g。」。評分規準逐分對應本題必要步驟，並已檢查錯誤追隨與只寫答案的處理。"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "92142f7fd9bc525b6d98dff343c966d20c0c33efc0301a3f7e50886b3ec71cee"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u14-s008-v001",
      "unitId": "u14",
      "skillId": "geometric-nth-basic",
      "contentSha256": "622c57dea4691c6409bc9daa9d24ebf4ee149935ed07b822ac7aecdaa72e26ac",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "從第1項到第6項乘5次2：5×32=160。",
      "derivedAnswer": "160",
      "storedAnswer": "160",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「160」符合。其餘三項各自違反：80只乘4次。；320多乘一次。；64漏掉首項5。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比第 n 項基本」講義中定義；本題目標為「求a_6」。",
        "unitConflict": "n=6正整數；答案精確。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「160」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：n=6正整數；答案精確。",
        "alternateReading": "最可能的誤讀是「把第6項的指數寫成6或4。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：資料完整，只需通項與整數次方。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等比數列首項為 5、公比為 2，則第 6 項是多少？」獨立重算為：從第1項到第6項乘5次2：5×32=160。 四選項逐項核對後唯一正解為「160」；邊界檢查：n=6正整數；答案精確。",
      "reviewContentSha256": "f09f4aeb010d07ec3aa86a7234ef4c0eaf7eca32c71d41e5faecdf6aaedbc589"
    },
    {
      "questionId": "u14-s008-v002",
      "unitId": "u14",
      "skillId": "geometric-nth-basic",
      "contentSha256": "2aaab469bbd15886652352f53361ac9f452d27e0b8802bb0ef8d1341c4e74843",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "依序81、27、9、3、1；或用81×1/81=1。",
      "derivedAnswer": "1",
      "storedAnswer": "1",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「1」符合。其餘三項各自違反：3是第4項。；1/3是第6項。；9是第3項。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比第 n 項基本」講義中定義；本題目標為「求a_5」。",
        "unitConflict": "分數公比正且非0。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「1」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：分數公比正且非0。",
        "alternateReading": "最可能的誤讀是「把第5項誤作乘5次1/3。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：需正確處理n-1與分數冪。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等比數列首項為 81、公比為 1/3，則第 5 項是多少？」獨立重算為：依序81、27、9、3、1；或用81×1/81=1。 四選項逐項核對後唯一正解為「1」；邊界檢查：分數公比正且非0。",
      "reviewContentSha256": "b09d6867243ac2a1de3419faba603edda8341526b9942bb67d60425024cab03e"
    },
    {
      "questionId": "u14-s008-v003",
      "unitId": "u14",
      "skillId": "geometric-nth-basic",
      "contentSha256": "5fdb60b2a3dfb63baa1bd5bc17b68a7aa34c827c9428b4a424570b5949965d69",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "第5項需4次公比，(-2)⁴=16，再乘首項-2得-32。",
      "derivedAnswer": "-32",
      "storedAnswer": "-32",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「-32」符合。其餘三項各自違反：32漏掉首項負號。；-16只乘3次公比。；16同時少乘與符號錯。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比第 n 項基本」講義中定義；本題目標為「求a_5」。",
        "unitConflict": "括號(-2)⁴完整；答案-32。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「-32」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：括號(-2)⁴完整；答案-32。",
        "alternateReading": "最可能的誤讀是「認為偶次方使整個結果必為正，忽略首項仍為負。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "基礎：考查負底數次方與首項符號的分離。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等比數列首項為 -2、公比為 -2，則第 5 項是多少？」獨立重算為：第5項需4次公比，(-2)⁴=16，再乘首項-2得-32。 四選項逐項核對後唯一正解為「-32」；邊界檢查：括號(-2)⁴完整；答案-32。",
      "reviewContentSha256": "4ce26b6d88cc930b112604321868556c0782d0fea80f553f7e1999b695a9087c"
    },
    {
      "questionId": "u14-s008-v004",
      "unitId": "u14",
      "skillId": "geometric-nth-basic",
      "contentSha256": "651f0bc03d69723957753b49554649120ca7cf193e27c6a414084acbeef35d3e",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "a_7=a_3×2⁷⁻³=20×16=320。",
      "derivedAnswer": "320",
      "storedAnswer": "320",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「320」符合。其餘三項各自違反：160只跨3步。；640跨5步。；80只跨2步。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比第 n 項基本」講義中定義；本題目標為「求a_7」。",
        "unitConflict": "位置差7-3=4。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「320」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：位置差7-3=4。",
        "alternateReading": "最可能的誤讀是「仍使用n-1=6而把a_3誤當首項。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需使用a_n=a_krⁿ⁻ᵏ避免位置錯位。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等比數列中 a_3=20、公比為 2，則 a_7 等於多少？」獨立重算為：a_7=a_3×2⁷⁻³=20×16=320。 四選項逐項核對後唯一正解為「320」；邊界檢查：位置差7-3=4。",
      "reviewContentSha256": "8ddc5849d997b5ea8d11568a9f7306bbd54bf5a318623c979f9a8c308d07c1af"
    },
    {
      "questionId": "u14-s008-v005",
      "unitId": "u14",
      "skillId": "geometric-nth-basic",
      "contentSha256": "d510e426e1dbb2a12b7b285704e90d90c9459087fda30fbcc1174107e2ff2dcd",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "第2到第5項有3個倍率，r³=8。正項且遞增，r=2。",
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
        "secondCorrectAnswer": "逐項重算四個選項後，只有「2」符合。其餘三項各自違反：4的三次方64，不是8。；8是三步總倍率r³。；1/2會使數列遞減。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比第 n 項基本」講義中定義；本題目標為「求r」。",
        "unitConflict": "實數立方根唯一為2；正項條件一致。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「2」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：實數立方根唯一為2；正項條件一致。",
        "alternateReading": "最可能的誤讀是「把三步總倍率8直接當公比。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需辨認倍率次數與公比本身。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「正項等比數列中 a_2=12、a_5=96，則公比是多少？」獨立重算為：第2到第5項有3個倍率，r³=8。正項且遞增，r=2。 四選項逐項核對後唯一正解為「2」；邊界檢查：實數立方根唯一為2；正項條件一致。",
      "reviewContentSha256": "0fa00004608032ee9501f8a20423d37a31ca46f36628a2f92c0a597d2abb7326"
    },
    {
      "questionId": "u14-s008-v006",
      "unitId": "u14",
      "skillId": "geometric-nth-basic",
      "contentSha256": "8616f36046b16656f09bf137479c993b1ff8580892bae73a94f7b736685f91f0",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "n-1=3為奇數，所以冪為-1/8；乘3得-3/8。",
      "derivedAnswer": "-3/8",
      "storedAnswer": "-3/8",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「-3/8」符合。其餘三項各自違反：3/8漏負號。；-3/16把次方算成1/16。；3/16同時符號與次方錯。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比第 n 項基本」講義中定義；本題目標為「求a_4」。",
        "unitConflict": "答案最簡分數-3/8。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「-3/8」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：答案最簡分數-3/8。",
        "alternateReading": "最可能的誤讀是「把(-1/2)³誤作-1/2⁴或忽略括號。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "標準：需正確處理括號、奇次方與分數。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等比數列的通項為 a_n=3(-1/2)ⁿ⁻¹，則 a_4 等於多少？」獨立重算為：n-1=3為奇數，所以冪為-1/8；乘3得-3/8。 四選項逐項核對後唯一正解為「-3/8」；邊界檢查：答案最簡分數-3/8。",
      "reviewContentSha256": "1c5088e7600f8682ef1022c18960797dcd1f32a5024c4db15bf416406b01f03d"
    },
    {
      "questionId": "u14-s008-v007",
      "unitId": "u14",
      "skillId": "geometric-nth-basic",
      "contentSha256": "5f485a46994355052531f9af67204fd259124514000c482ba685f151ee1c152c",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "從第4項到第8項依序經過4→5、5→6、6→7、7→8，共乘4次3；54×3⁴=4374。",
      "derivedAnswer": "4次",
      "storedAnswer": "4次",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「4次」成立；其他三項分別因：3次只到第7項。；5次會到第9項。；8是項次不是乘法次數。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比第 n 項基本」講義中定義；本題目標為「求a_8」。",
        "unitConflict": "整數冪精確；無溢位或近似。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「4374」，沒有近似取整導致第二答案。",
        "domainBoundary": "a8作為驗證，連乘次數唯一。；項次、間隔、正負號與會考範圍均已逐項核對。",
        "alternateReading": "題幹明確要求「辨認項次差對應的連乘次數」，沒有第二種合理所求。"
      },
      "difficultyReason": "進階：反向驗證指數中的項次差。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u14-s008-v007 中央修訂後獨立重算：從第4項到第8項依序經過4→5、5→6、6→7、7→8，共乘4次3；54×3⁴=4374。 四個選項逐項核對，唯一正解為「4次」；其餘選項排除理由為：3次只到第7項。；5次會到第9項。；8是項次不是乘法次數。",
      "reviewContentSha256": "b6918845e04b51b5ea2db992b0775f0dc518cc7d64f171cc1d644ea17072f811"
    },
    {
      "questionId": "u14-s008-v008",
      "unitId": "u14",
      "skillId": "geometric-nth-basic",
      "contentSha256": "3ff404c9175e384b6c307ccaa9277c73279fe0b23736ff358ad18d0a92aef71b",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "列項亦可：256、128、64、32、16、8，8在第6項。",
      "derivedAnswer": "6",
      "storedAnswer": "6",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「6」符合。其餘三項各自違反：第5項為16。；第7項為4。；8是項值不是項次。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比第 n 項基本」講義中定義；本題目標為「求n」。",
        "unitConflict": "n=6正整數；代回成立。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「6」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：n=6正整數；代回成立。",
        "alternateReading": "最可能的誤讀是「找到5次減半就回答第5項。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：需把倍率次數5轉為項次6。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等比數列首項為 256、公比為 1/2。數值 8 是第幾項？」獨立重算為：列項亦可：256、128、64、32、16、8，8在第6項。 四選項逐項核對後唯一正解為「6」；邊界檢查：n=6正整數；代回成立。",
      "reviewContentSha256": "d8dd3a824e8b307cbc32e0f3609488fba57897e3b86b65a8c5bd06ba7061b333"
    },
    {
      "questionId": "u14-s008-v009",
      "unitId": "u14",
      "skillId": "geometric-nth-basic",
      "contentSha256": "dd00702f40bb31218ac1e3a24aca90d63267be8501e83a9b768ab453777be0d3",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "第2到第5項跨3步，r³=-27，實數r=-3。下一項乘-3得-486。",
      "derivedAnswer": "-486",
      "storedAnswer": "-486",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「-486」符合。其餘三項各自違反：486漏負公比。；-162把公比誤作-1。；54是除以3。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比第 n 項基本」講義中定義；本題目標為「求a_6」。",
        "unitConflict": "實數立方根-3唯一；a_2非0。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「-486」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：實數立方根-3唯一；a_2非0。",
        "alternateReading": "最可能的誤讀是「只取公比絕對值3而遺失交錯符號。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "進階：兩階段推理，包含奇次根與符號。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「等比數列中 a_2=-6、a_5=162，則 a_6 等於多少？」獨立重算為：第2到第5項跨3步，r³=-27，實數r=-3。下一項乘-3得-486。 四選項逐項核對後唯一正解為「-486」；邊界檢查：實數立方根-3唯一；a_2非0。",
      "reviewContentSha256": "98a1266e209e2bcc35b4b94cb0d98f7e0c617002ab6238d95b364eada46aa45a"
    },
    {
      "questionId": "u14-s008-v010",
      "unitId": "u14",
      "skillId": "geometric-nth-basic",
      "contentSha256": "a4d782f6293b2921c6ba848f71a2b05a972c5fc8f7ceeba02cbe4a12d90f599e",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "輪次形成等比數列4、12、36、108、324、972。",
      "derivedAnswer": "972",
      "storedAnswer": "972",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「972」符合。其餘三項各自違反：324只乘4次3。；2916多乘一次3。；729漏掉首輪4人的係數。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比第 n 項基本」講義中定義；本題目標為「第6輪分享人數」。",
        "unitConflict": "假設每輪人數依模型且可重複計數規則已由題意確定；答案為人數整數。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「972」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：假設每輪人數依模型且可重複計數規則已由題意確定；答案為人數整數。",
        "alternateReading": "最可能的誤讀是「把第1輪也算成一次傳播後的結果。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需區分第1輪已知人數與後續5次倍率變化。",
      "literacyContextNecessity": "分享輪次情境決定倍率發生次數；刪除會失去起始輪的時序解讀。",
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一則訊息第 1 輪有 4 人分享，之後每一輪分享人數都是前一輪的 3 倍。第 6 輪有多少人分享？」獨立重算為：輪次形成等比數列4、12、36、108、324、972。 四選項逐項核對後唯一正解為「972」；邊界檢查：假設每輪人數依模型且可重複計數規則已由題意確定；答案為人數整數。",
      "reviewContentSha256": "78a6a1d5709dcf486c1b1063758330fc7487837298fcbc54cabc85d2651a2e06"
    },
    {
      "questionId": "u14-s008-v011",
      "unitId": "u14",
      "skillId": "geometric-nth-basic",
      "contentSha256": "7bd3c8fca13e397221357332695aecc93f345c8518178a3d6b6892784cc24d13",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "逐期160、80、40、20、10、5，共5次減半。",
      "derivedAnswer": "5 mg",
      "storedAnswer": "5 mg",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「5 mg」符合。其餘三項各自違反：10 mg只經過4週期。；20 mg只經過3週期。；32 mg是160÷5，誤作平均分。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比第 n 項基本」講義中定義；本題目標為「5週期後藥量」。",
        "unitConflict": "僅作數學模型，不作醫療建議；答案精確5mg。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「5 mg」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：僅作數學模型，不作醫療建議；答案精確5mg。",
        "alternateReading": "最可能的誤讀是「將5個週期誤作包含起始在內的5項。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：起始量位於週期前，經過5週期需乘5次，並保留mg單位。",
      "literacyContextNecessity": "藥量情境提供「起始」與「經過」的時序界線。",
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某藥量在每個觀測週期後剩下原來的一半。起始為 160 mg，經過 5 個週期後剩多少？」獨立重算為：逐期160、80、40、20、10、5，共5次減半。 四選項逐項核對後唯一正解為「5 mg」；邊界檢查：僅作數學模型，不作醫療建議；答案精確5mg。",
      "reviewContentSha256": "7b5ee7a787df13a1434f2cb391152ddd82ca7d81287478cce8ad4613c970fa8e"
    },
    {
      "questionId": "u14-s008-v012",
      "unitId": "u14",
      "skillId": "geometric-nth-basic",
      "contentSha256": "6a87fcb3cc6bd6e8a805b884107a9ca7231b0d45a12d234d7dbf8e386f5440c5",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewVersion": "human-review-r4.0",
      "reviewedAt": "2026-07-12",
      "independentSolution": "從第1層到第8層有7次倍增，3×128=384根。",
      "derivedAnswer": "384",
      "storedAnswer": "384",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算四個選項後，只有「384」符合。其餘三項各自違反：192只乘6次2。；768多乘一次2。；256漏掉首項係數3。",
        "undefinedSymbol": "題幹所用符號與用語均在「等比第 n 項基本」講義中定義；本題目標為「第8層分枝數」。",
        "unitConflict": "答案為單一第8層數量，不是各層總和。；選項均以相同數學對象或相同單位比較。",
        "roundingConflict": "獨立解答得到精確值「384」，沒有近似取整導致第二答案。",
        "domainBoundary": "審查本題定義域、端點與會考範圍：答案為單一第8層數量，不是各層總和。",
        "alternateReading": "最可能的誤讀是「直接算2⁸或3×2⁸。」；依題幹位置、端點與關鍵詞重新解讀後不會形成另一正解。"
      },
      "difficultyReason": "素養：需將層級結構轉成首項3、公比2的等比模型。",
      "literacyContextNecessity": "分枝層級情境使「第8層」不是經過8次倍增，測試層號與變化次數。",
      "prerequisiteCheck": "使用前置技能「規律觀察列式」所建立的概念。",
      "languageCheck": "繁體中文用語符合臺灣國中數學慣例；項次、項值、單項與總和均明確區分。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一棵模型樹第 1 層有 3 根分枝，之後每一層分枝數都是上一層的 2 倍。第 8 層有幾根分枝？」獨立重算為：從第1層到第8層有7次倍增，3×128=384根。 四選項逐項核對後唯一正解為「384」；邊界檢查：答案為單一第8層數量，不是各層總和。",
      "reviewContentSha256": "2ccb5af944b7723428739b4d4abb9760cf0ae4a1e15cb86bce95801188091051"
    }
  ],
  "drawingSpecs": []
};
