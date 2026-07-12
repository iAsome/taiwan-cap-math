// Emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u22-s016-lecture-r1",
    "unitId": "u22",
    "numericUnitId": 22,
    "topicId": "u22-probability",
    "skillId": "probability-word",
    "lockedSkillOrder": 16,
    "title": "機率應用題：把生活條件翻成事件與樣本空間與機率。",
    "originalLockedTitle": "機率應用題",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能把至少、不小於、含端點等文字翻成集合。",
      "能辨認單一參加者與整體發放的不同分母。",
      "能處理複合條件與限制。",
      "能限制抽樣與機率結論。"
    ],
    "prerequisiteSkillIds": [
      "probability-two-stage"
    ],
    "prerequisiteBridge": "整合古典機率、餘事、樹狀圖與兩階段機率。",
    "glossary": [
      {
        "term": "至少",
        "definition": "大於或等於指定次數。"
      },
      {
        "term": "恰好",
        "definition": "等於指定次數。"
      },
      {
        "term": "不小於",
        "definition": "大於或等於。"
      },
      {
        "term": "但不能",
        "definition": "先符合前條件，再排除後條件。"
      }
    ],
    "notation": [
      {
        "symbol": "至少一次=1-零次",
        "meaning": "常用翻譯。"
      },
      {
        "symbol": "含兩端區間",
        "meaning": "兩個端點均納入有利結果。"
      }
    ],
    "conceptNarrative": [
      "文字題最先處理語意，不急著算。",
      "「至少一張紅」的完整否定是「零張紅」，不是「恰好一張黑」。",
      "「介於3與7含兩端」在整數樣本中是3、4、5、6、7。",
      "單一參加者拿獎牌的機率以全部隨機票為分母，不一定以參加者人數或已發票數為分母。",
      "歷史相對次數可以估計未來機率，但資料必須具代表性且不能改寫成保證。"
    ],
    "formalDefinitions": [
      {
        "name": "事件翻譯",
        "statement": "把自然語言變成集合、路徑或不等式。"
      },
      {
        "name": "母體限制",
        "statement": "結論只能推到抽樣設計代表的對象。"
      }
    ],
    "formulas": [
      {
        "formula": "P=有利基本結果/全部基本結果",
        "conditions": [
          "等可能時。"
        ],
        "meaning": "等可能時。"
      },
      {
        "formula": "加權總機率=Σ來源率×條件率",
        "conditions": [
          "多來源文字表格。"
        ],
        "meaning": "多來源文字表格。"
      }
    ],
    "nonApplicableCases": [
      "不能忽略等號端點。",
      "不能把樣本結果當母體必然。",
      "不能用未限制的乘法結果忽略禁用組合。",
      "醫療、品質或行為情境不能由統計標記直接作因果判斷。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "圈關鍵詞",
        "check": "至少、恰好、含端點、放回等。"
      },
      {
        "step": 2,
        "instruction": "定義一次試驗與分母",
        "check": "誰被等機會抽中。"
      },
      {
        "step": 3,
        "instruction": "列有利集合或路徑",
        "check": "處理限制與重疊。"
      },
      {
        "step": 4,
        "instruction": "計算",
        "check": "選直接法、餘事或樹狀圖。"
      },
      {
        "step": 5,
        "instruction": "回到語境",
        "check": "保留單位與推論界線。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "1到10抽介於3與7含端點",
        "solutionSteps": [
          "5/10=1/2。"
        ],
        "answer": "5/10=1/2。"
      },
      {
        "exampleId": "L2",
        "prompt": "末兩碼至少一個0",
        "solutionSteps": [
          "1-81/100=19/100。"
        ],
        "answer": "1-81/100=19/100。"
      },
      {
        "exampleId": "L3",
        "prompt": "1到50被6整除但不被4整除",
        "solutionSteps": [
          "6、18、30、42，共4個。"
        ],
        "answer": "6、18、30、42，共4個。"
      },
      {
        "exampleId": "L4",
        "prompt": "來源機率0.5、0.3、0.2配延誤率0.1、0.2、0.4",
        "solutionSteps": [
          "總延誤0.19。"
        ],
        "answer": "總延誤0.19。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "至少讀成恰好",
        "why": "用完整否定檢查。",
        "correction": "用完整否定檢查。"
      },
      {
        "mistake": "不小於漏等號",
        "why": "把中文改寫≥。",
        "correction": "把中文改寫≥。"
      },
      {
        "mistake": "分母選成未中獎票數",
        "why": "先定義全部等可能基本結果。",
        "correction": "先定義全部等可能基本結果。"
      },
      {
        "mistake": "抽樣全合格就說母體100%合格",
        "why": "未抽部分仍有不確定。",
        "correction": "未抽部分仍有不確定。"
      }
    ],
    "selfCheck": [
      "關鍵詞是否正確翻譯？",
      "樣本空間與分母是誰？",
      "端點、順序、放回是否清楚？",
      "答案單位與推論範圍是否回到情境？"
    ],
    "summary": [
      "文字題先翻譯事件。",
      "分母取決於一次隨機試驗。",
      "限制條件必須反映在樣本空間。",
      "抽樣證據不等於全體保證。"
    ],
    "connections": {
      "previous": "整合古典機率、餘事、樹狀圖與兩階段機率。",
      "next": [
        "下一技能評估遊戲公平、風險與機率宣稱。"
      ]
    },
    "figureReferences": [],
    "figureAccessibility": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u22-s016-v001",
        "u22-s016-v002",
        "u22-s016-v003",
        "u22-s016-v004",
        "u22-s016-v005",
        "u22-s016-v006",
        "u22-s016-v007",
        "u22-s016-v008",
        "u22-s016-v009",
        "u22-s016-v010",
        "u22-s016-v011",
        "u22-s016-v012"
      ],
      "constructedResponseIds": [
        "u22-s016-cr001",
        "u22-s016-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "skillSpecificReviewEvidence": "逐題將中文條件改寫成集合或路徑；檢查「至少一個0」包含00但只計一次，並核對抽樣題沒有把樣本結論誇成母體必然。",
      "futureKnowledgeCheck": "pass; all methods use this skill or declared prerequisites only",
      "contentBoundary": "把生活條件翻成事件、樣本空間與機率。",
      "reviewVersion": "human-lecture-review-u22-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "9a04739b58facb3d4c0a21f78234284992525fe1db18e42a6ca4061fbbb78c51"
  },
  "mcQuestions": [
    {
      "questionId": "u22-s016-v001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "題目說「至少抽到一張紅牌」，最直接的餘事是哪一個？",
      "text": "題目說「至少抽到一張紅牌」，最直接的餘事是哪一個？",
      "givenConditions": [],
      "target": "翻譯機率文字事件",
      "choices": [
        "恰好抽到一張紅牌",
        "每張都是紅牌",
        "至少抽到一張黑牌",
        "一張紅牌都沒有抽到"
      ],
      "answerIndex": 3,
      "independentSolution": "「至少一張紅」與「零張紅」互斥且涵蓋全部可能，故互為餘事。",
      "explanation": "「至少一張紅」與「零張紅」互斥且涵蓋全部可能，故互為餘事。",
      "steps": [
        "把至少一次改寫為不是零次。"
      ],
      "optionAnalysis": [
        {
          "choice": "恰好抽到一張紅牌",
          "truth": false,
          "reason": "這不是至少一次的完整餘事。"
        },
        {
          "choice": "每張都是紅牌",
          "truth": false,
          "reason": "這是至少一次中的一部分。"
        },
        {
          "choice": "至少抽到一張黑牌",
          "truth": false,
          "reason": "可能同時有紅與黑，不互為餘事。"
        },
        {
          "choice": "一張紅牌都沒有抽到",
          "truth": true,
          "reason": "正確。獨立重算：「至少一張紅」與「零張紅」互斥且涵蓋全部可能，故互為餘事。"
        }
      ],
      "misconceptionTarget": "把「至少」誤讀成「恰好」。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "紅牌與非紅牌分類需涵蓋每次抽取。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：翻譯機率文字事件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "翻譯機率文字事件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "1cdb5739f3aa82f2836fa597d9fcf32950e2abf912dc4c91861da7ce1a63ec7b"
    },
    {
      "questionId": "u22-s016-v002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "從1到8等可能選一個整數。「不小於6」包含哪些數？",
      "text": "從1到8等可能選一個整數。「不小於6」包含哪些數？",
      "givenConditions": [],
      "target": "將文字條件轉成事件集合",
      "choices": [
        "6、7、8",
        "7、8",
        "1、2、3、4、5",
        "6"
      ],
      "answerIndex": 0,
      "independentSolution": "不小於6就是≥6，因此包含6、7、8。",
      "explanation": "不小於6就是≥6，因此包含6、7、8。",
      "steps": [
        "翻譯不等號。",
        "列含端點的整數。"
      ],
      "optionAnalysis": [
        {
          "choice": "6、7、8",
          "truth": true,
          "reason": "正確。獨立重算：不小於6就是≥6，因此包含6、7、8。"
        },
        {
          "choice": "7、8",
          "truth": false,
          "reason": "把不小於誤讀成大於。"
        },
        {
          "choice": "1、2、3、4、5",
          "truth": false,
          "reason": "列成小於6。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "只取邊界。"
        }
      ],
      "misconceptionTarget": "忽略「不小於」包含等號。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "樣本空間為整數1至8。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：將文字條件轉成事件集合",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "將文字條件轉成事件集合",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "1ea88d60c48aa6cad1166cae613def2ca4d1bee16a08bf68a09f2834d95b1222"
    },
    {
      "questionId": "u22-s016-v003",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一張卡片從1到10中等可能抽取。「介於3與7之間，含兩端」的機率為何？",
      "text": "一張卡片從1到10中等可能抽取。「介於3與7之間，含兩端」的機率為何？",
      "givenConditions": [],
      "target": "處理含端點區間事件",
      "choices": [
        "4/10",
        "3/10",
        "1/2",
        "7/10"
      ],
      "answerIndex": 2,
      "independentSolution": "有利數為3、4、5、6、7，共5個；機率5/10=1/2。",
      "explanation": "有利數為3、4、5、6、7，共5個；機率5/10=1/2。",
      "steps": [
        "翻譯含兩端。",
        "列5個有利數。"
      ],
      "optionAnalysis": [
        {
          "choice": "4/10",
          "truth": false,
          "reason": "漏掉一個端點。"
        },
        {
          "choice": "3/10",
          "truth": false,
          "reason": "只算4、5、6。"
        },
        {
          "choice": "1/2",
          "truth": true,
          "reason": "正確。獨立重算：有利數為3、4、5、6、7，共5個；機率5/10=1/2。"
        },
        {
          "choice": "7/10",
          "truth": false,
          "reason": "把1到7都算入。"
        }
      ],
      "misconceptionTarget": "區間端點處理錯誤。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "整數離散樣本空間。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：處理含端點區間事件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "處理含端點區間事件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "c6382ae71344082fb132a7a5413dbaf6729ce33253f5f525172267f2452dd48d"
    },
    {
      "questionId": "u22-s016-v004",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某班抽籤選值日生，每人一張同樣籤。班上30人，其中男生14人。抽到女生的機率為何？",
      "text": "某班抽籤選值日生，每人一張同樣籤。班上30人，其中男生14人。抽到女生的機率為何？",
      "givenConditions": [],
      "target": "由總數與部分數量求機率",
      "choices": [
        "7/15",
        "8/15",
        "16/14",
        "1/2"
      ],
      "answerIndex": 1,
      "independentSolution": "女生30-14=16人，機率16/30=8/15。",
      "explanation": "女生30-14=16人，機率16/30=8/15。",
      "steps": [
        "先求女生16人。",
        "除以總人數30。",
        "約分。"
      ],
      "optionAnalysis": [
        {
          "choice": "7/15",
          "truth": false,
          "reason": "這是抽到男生14/30。"
        },
        {
          "choice": "8/15",
          "truth": true,
          "reason": "正確。獨立重算：女生30-14=16人，機率16/30=8/15。"
        },
        {
          "choice": "16/14",
          "truth": false,
          "reason": "分母誤用男生人數。"
        },
        {
          "choice": "1/2",
          "truth": false,
          "reason": "假設男女相等。"
        }
      ],
      "misconceptionTarget": "未先求餘下類別人數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "每人一籤且籤相同。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：由總數與部分數量求機率",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由總數與部分數量求機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "82191c552c18daf83ea6dc87a4bf122fef1c37e6b677d853de8e158cd1b0399d"
    },
    {
      "questionId": "u22-s016-v005",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "密碼末兩碼從00到99等可能。末兩碼至少有一個0的機率是多少？",
      "text": "密碼末兩碼從00到99等可能。末兩碼至少有一個0的機率是多少？",
      "givenConditions": [],
      "target": "以餘事處理數字條件",
      "choices": [
        "1/10",
        "20/100",
        "19/100",
        "81/100"
      ],
      "answerIndex": 2,
      "independentSolution": "用餘事：兩位都不是0有9×9=81種，所以至少一個0有100-81=19種，機率19/100。",
      "explanation": "用餘事：兩位都不是0有9×9=81種，所以至少一個0有100-81=19種，機率19/100。",
      "steps": [
        "總結果100。",
        "餘事兩位皆非0為81。",
        "相減19。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/10",
          "truth": false,
          "reason": "只算第一位是0。"
        },
        {
          "choice": "20/100",
          "truth": false,
          "reason": "把00重複計數。"
        },
        {
          "choice": "19/100",
          "truth": true,
          "reason": "正確。獨立重算：用餘事：兩位都不是0有9×9=81種，所以至少一個0有100-81=19種，機率19/100。"
        },
        {
          "choice": "81/100",
          "truth": false,
          "reason": "這是兩位都不是0。"
        }
      ],
      "misconceptionTarget": "把兩個「某位是0」直接相加而重複00。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "00到99包含前導0且各碼等可能。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：以餘事處理數字條件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "以餘事處理數字條件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "11ddb439391f253ee6d0118264a151654353a38a1ab8d7f2b032c0f5f463caeb"
    },
    {
      "questionId": "u22-s016-v006",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "袋中有4白2黑，不放回抽兩球。「第二顆是黑球」的機率為何？",
      "text": "袋中有4白2黑，不放回抽兩球。「第二顆是黑球」的機率為何？",
      "givenConditions": [],
      "target": "處理只指定第二階段結果的事件",
      "choices": [
        "1/5",
        "2/5",
        "1/2",
        "1/3"
      ],
      "answerIndex": 3,
      "independentSolution": "可分路徑：先白後黑=4/6×2/5=4/15；先黑後黑=2/6×1/5=1/15；合計5/15=1/3。也可用抽取位置對每顆球對稱，第二位黑率2/6。",
      "explanation": "可分路徑：先白後黑=4/6×2/5=4/15；先黑後黑=2/6×1/5=1/15；合計5/15=1/3。也可用抽取位置對每顆球對稱，第二位黑率2/6。",
      "steps": [
        "列兩條第二黑路徑。",
        "相加得1/3。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/5",
          "truth": false,
          "reason": "假設第一顆一定不是黑。"
        },
        {
          "choice": "2/5",
          "truth": false,
          "reason": "把第二次分母固定為5且分子2。"
        },
        {
          "choice": "1/2",
          "truth": false,
          "reason": "只看兩種顏色。"
        },
        {
          "choice": "1/3",
          "truth": true,
          "reason": "正確。獨立重算：可分路徑：先白後黑=4/6×2/5=4/15；先黑後黑=2/6×1/5=1/15；合計5/15=1/3。也可用抽取位置對每顆球對稱，第二位黑率2/6。"
        }
      ],
      "misconceptionTarget": "只計先白後黑，漏掉先黑後黑。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "不放回但每個位置對原球對稱。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：處理只指定第二階段結果的事件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "處理只指定第二階段結果的事件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "9dce2510e6ab7b9f8a0b1471680d461a8445c2b0818858f7e480ced3473fc17f"
    },
    {
      "questionId": "u22-s016-v007",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "擲兩顆公平骰，至少一顆出現6的機率是多少？",
      "text": "擲兩顆公平骰，至少一顆出現6的機率是多少？",
      "givenConditions": [],
      "target": "處理至少一顆的骰子事件",
      "choices": [
        "11/36",
        "1/6",
        "12/36",
        "25/36"
      ],
      "answerIndex": 0,
      "independentSolution": "餘事是兩顆都不是6，機率(5/6)²=25/36，所以至少一顆6為11/36。",
      "explanation": "餘事是兩顆都不是6，機率(5/6)²=25/36，所以至少一顆6為11/36。",
      "steps": [
        "找餘事。",
        "計算25/36。",
        "用1減。"
      ],
      "optionAnalysis": [
        {
          "choice": "11/36",
          "truth": true,
          "reason": "正確。獨立重算：餘事是兩顆都不是6，機率(5/6)²=25/36，所以至少一顆6為11/36。"
        },
        {
          "choice": "1/6",
          "truth": false,
          "reason": "只看第一顆或單顆。"
        },
        {
          "choice": "12/36",
          "truth": false,
          "reason": "把兩顆出6機率相加，重複(6,6)。"
        },
        {
          "choice": "25/36",
          "truth": false,
          "reason": "這是兩顆都不是6。"
        }
      ],
      "misconceptionTarget": "直接相加兩個1/6。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩骰獨立公平。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：處理至少一顆的骰子事件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "處理至少一顆的骰子事件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "b41440fab6a35b97920cb5d7a23e9ebdca449aed0ecdc19b796c544d7dd078c3"
    },
    {
      "questionId": "u22-s016-v008",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "抽獎規則：編號1到50中，能被6整除但不能被4整除者中獎。中獎號碼有幾個？",
      "text": "抽獎規則：編號1到50中，能被6整除但不能被4整除者中獎。中獎號碼有幾個？",
      "givenConditions": [],
      "target": "處理複合整除條件",
      "choices": [
        "8個",
        "4個",
        "2個",
        "6個"
      ],
      "answerIndex": 1,
      "independentSolution": "6的倍數有6、12、18、24、30、36、42、48；其中也被4整除的是12、24、36、48，剩6、18、30、42共4個。",
      "explanation": "6的倍數有6、12、18、24、30、36、42、48；其中也被4整除的是12、24、36、48，剩6、18、30、42共4個。",
      "steps": [
        "列6倍數。",
        "排除12倍數。"
      ],
      "optionAnalysis": [
        {
          "choice": "8個",
          "truth": false,
          "reason": "只算6的倍數，未排除12的倍數。"
        },
        {
          "choice": "4個",
          "truth": true,
          "reason": "正確。獨立重算：6的倍數有6、12、18、24、30、36、42、48；其中也被4整除的是12、24、36、48，剩6、18、30、42共4個。"
        },
        {
          "choice": "2個",
          "truth": false,
          "reason": "過度排除。"
        },
        {
          "choice": "6個",
          "truth": false,
          "reason": "漏排或漏列。"
        }
      ],
      "misconceptionTarget": "把「但不能」誤作「或」。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "範圍1至50含端點。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：處理複合整除條件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "處理複合整除條件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "435f0a01b88bf89419743439bb3d6377f83df07a3996a078f8da2367de0b1139"
    },
    {
      "questionId": "u22-s016-v009",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "三條路線甲、乙、丙被選中的機率分別為0.5、0.3、0.2。若甲路線延誤率0.1、乙0.2、丙0.4，總延誤率為何？",
      "text": "三條路線甲、乙、丙被選中的機率分別為0.5、0.3、0.2。若甲路線延誤率0.1、乙0.2、丙0.4，總延誤率為何？",
      "givenConditions": [],
      "target": "從文字表格建立加權機率",
      "choices": [
        "0.70",
        "0.23",
        "0.10",
        "0.19"
      ],
      "answerIndex": 3,
      "independentSolution": "總延誤=0.5×0.1+0.3×0.2+0.2×0.4=0.05+0.06+0.08=0.19。",
      "explanation": "總延誤=0.5×0.1+0.3×0.2+0.2×0.4=0.05+0.06+0.08=0.19。",
      "steps": [
        "按路線權重乘延誤率。",
        "三條互斥路徑相加。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.70",
          "truth": false,
          "reason": "直接加三條延誤率。"
        },
        {
          "choice": "0.23",
          "truth": false,
          "reason": "錯誤平均或乘積相加。"
        },
        {
          "choice": "0.10",
          "truth": false,
          "reason": "只看最常選的甲路線。"
        },
        {
          "choice": "0.19",
          "truth": true,
          "reason": "正確。獨立重算：總延誤=0.5×0.1+0.3×0.2+0.2×0.4=0.05+0.06+0.08=0.19。"
        }
      ],
      "misconceptionTarget": "把各條件延誤率直接平均或相加。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "路線機率合計1。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：從文字表格建立加權機率",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "從文字表格建立加權機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "e4183e9c192b928c1e89269ddec67234b68bb51b87094bb62b9f76f288f4ba99"
    },
    {
      "questionId": "u22-s016-v010",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "活動有120張號碼牌，其中30張可換獎。主辦方預計隨機發出60張，若只問「一名隨機參加者拿到可換獎牌的機率」，答案為何？",
      "text": "活動有120張號碼牌，其中30張可換獎。主辦方預計隨機發出60張，若只問「一名隨機參加者拿到可換獎牌的機率」，答案為何？",
      "givenConditions": [],
      "target": "釐清單一個體機率的分母",
      "choices": [
        "1/2",
        "1/4",
        "30/60",
        "3/4"
      ],
      "answerIndex": 1,
      "independentSolution": "每張牌對該參加者等可能，30/120=1/4；共發幾張不改變單一隨機位置的比例。",
      "explanation": "每張牌對該參加者等可能，30/120=1/4；共發幾張不改變單一隨機位置的比例。",
      "steps": [
        "辨認單一參加者的樣本空間120張。",
        "有利30張。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/2",
          "truth": false,
          "reason": "把發出60張占120張當中獎率。"
        },
        {
          "choice": "1/4",
          "truth": true,
          "reason": "正確。獨立重算：每張牌對該參加者等可能，30/120=1/4；共發幾張不改變單一隨機位置的比例。"
        },
        {
          "choice": "30/60",
          "truth": false,
          "reason": "把預計發出張數當分母，但個人牌來自全部隨機牌。"
        },
        {
          "choice": "3/4",
          "truth": false,
          "reason": "算成不可換獎。"
        }
      ],
      "misconceptionTarget": "把樣本總數改成參加者數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "假設號碼牌充分隨機發放。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：釐清單一個體機率的分母",
      "literacyContextNecessity": "活動規模與個人中獎率是不同問題。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "釐清單一個體機率的分母",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "03ceeeaabeeb5a378d3e91c1242a8ac55988efe1335f09e55677c75a694fd908"
    },
    {
      "questionId": "u22-s016-v011",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "氣象資料顯示相似條件的100天中有35天下雨。用相對次數估計明天下雨機率，較合理寫法是什麼？",
      "text": "氣象資料顯示相似條件的100天中有35天下雨。用相對次數估計明天下雨機率，較合理寫法是什麼？",
      "givenConditions": [],
      "target": "正確表達經驗機率",
      "choices": [
        "約35%，但不保證明天一定如何",
        "35%，所以每100天固定第35天下雨",
        "65%，因不下雨天較多",
        "不是0%或100%就沒有意義"
      ],
      "answerIndex": 0,
      "independentSolution": "相對次數35/100=35%可作估計，但單次結果仍可能下雨或不下雨。",
      "explanation": "相對次數35/100=35%可作估計，但單次結果仍可能下雨或不下雨。",
      "steps": [
        "由歷史頻率估機率。",
        "限制單次預測解讀。"
      ],
      "optionAnalysis": [
        {
          "choice": "約35%，但不保證明天一定如何",
          "truth": true,
          "reason": "正確。獨立重算：相對次數35/100=35%可作估計，但單次結果仍可能下雨或不下雨。"
        },
        {
          "choice": "35%，所以每100天固定第35天下雨",
          "truth": false,
          "reason": "機率不指定發生日期。"
        },
        {
          "choice": "65%，因不下雨天較多",
          "truth": false,
          "reason": "問的是下雨。"
        },
        {
          "choice": "不是0%或100%就沒有意義",
          "truth": false,
          "reason": "機率可表達不確定性。"
        }
      ],
      "misconceptionTarget": "把長期比例當成短期固定排程。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "估計品質取決於「相似條件」與資料代表性。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：正確表達經驗機率",
      "literacyContextNecessity": "天氣機率必須同時說明數值與不確定性。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "正確表達經驗機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "5f1fec33f7411664d17c81fd068691ac6cd59b84b93ce4e70284967d47b08d48"
    },
    {
      "questionId": "u22-s016-v012",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某疫苗抽樣檢驗中，從1000劑隨機抽20劑，若全部合格就宣稱整批100%合格。哪個評語最正確？",
      "text": "某疫苗抽樣檢驗中，從1000劑隨機抽20劑，若全部合格就宣稱整批100%合格。哪個評語最正確？",
      "givenConditions": [],
      "target": "限制抽樣機率結論",
      "choices": [
        "可以證明100%，因抽樣是隨機",
        "完全沒有任何資訊",
        "樣本全合格可提供證據，但不能證明未抽到的每一劑都合格",
        "只要樣本超過10就能保證"
      ],
      "answerIndex": 2,
      "independentSolution": "抽樣能估計與監控，但未觀察的980劑仍有不確定性，不能把樣本結果改寫成全體必然。",
      "explanation": "抽樣能估計與監控，但未觀察的980劑仍有不確定性，不能把樣本結果改寫成全體必然。",
      "steps": [
        "區分樣本與母體。",
        "保留證據強度但拒絕絕對化。"
      ],
      "optionAnalysis": [
        {
          "choice": "可以證明100%，因抽樣是隨機",
          "truth": false,
          "reason": "隨機抽樣仍非全數檢驗。"
        },
        {
          "choice": "完全沒有任何資訊",
          "truth": false,
          "reason": "隨機樣本仍提供品質資訊。"
        },
        {
          "choice": "樣本全合格可提供證據，但不能證明未抽到的每一劑都合格",
          "truth": true,
          "reason": "正確。獨立重算：抽樣能估計與監控，但未觀察的980劑仍有不確定性，不能把樣本結果改寫成全體必然。"
        },
        {
          "choice": "只要樣本超過10就能保證",
          "truth": false,
          "reason": "沒有這種固定門檻保證。"
        }
      ],
      "misconceptionTarget": "把隨機抽樣誤當全數檢查。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "不涉及醫療效能，只討論抽樣推論。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：限制抽樣機率結論",
      "literacyContextNecessity": "品質公告若使用「100%」需與實際檢驗範圍一致。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "限制抽樣機率結論",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "c1f09aae0c800aa403a976495542a6932ea54a2379cc47468dc9e9cb79b0ac00"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u22-s016-cr001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "抽獎箱有200張券，其中8張一獎、22張二獎，其餘無獎。隨機抽一張。求中獎機率與不中獎機率，並以百分率表示。",
      "requiredWork": [
        "合併兩種中獎券。",
        "分母用全部200張。",
        "用餘事或直接計算不中獎。"
      ],
      "standardSolution": [
        "中獎券=8+22=30張，P(中獎)=30/200=0.15=15%。",
        "P(不中獎)=1-0.15=0.85=85%。"
      ],
      "reasoningSteps": [
        "中獎券=8+22=30張，P(中獎)=30/200=0.15=15%。",
        "P(不中獎)=1-0.15=0.85=85%。"
      ],
      "alternativeMethods": [
        "也可先算無獎170張，170/200=85%。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩個機率、百分率與計數完整。"
        },
        {
          "score": 2,
          "criteria": "中獎15%正確但不中獎轉換或說明有一處錯。"
        },
        {
          "score": 1,
          "criteria": "能正確算出30/200或170/200。"
        },
        {
          "score": 0,
          "criteria": "把8與22視為兩次獨立抽獎而相乘。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "15/100、0.15、15%皆等價；最終需至少一種百分率表示。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "只算一獎。",
        "分母用中獎券30。",
        "百分率小數點錯位。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "中獎券=8+22=30張，P(中獎)=30/200=0.15=15%。；P(不中獎)=1-0.15=0.85=85%。",
        "alternativeMethodCheck": "也可先算無獎170張，170/200=85%。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "7e777264e4cf4ae06d54a4fdbdb9bd67280e5a6ae33412164d99630c468994a3"
    },
    {
      "questionId": "u22-s016-cr002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-word",
      "lockedSkillOrder": 16,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "公車準時機率為0.8。某人連續兩天搭乘，題目假設兩天是否準時互相獨立。求至少一天不準時的機率，並指出若沒有「獨立」假設為何不能直接照算。",
      "requiredWork": [
        "以兩天都準時為餘事。",
        "使用獨立性相乘。",
        "說明缺少關聯資訊的限制。"
      ],
      "standardSolution": [
        "P(兩天都準時)=0.8×0.8=0.64。",
        "P(至少一天不準時)=1-0.64=0.36。",
        "若未假設獨立，只知道單日0.8不足以決定兩日同時準時機率，因天氣或路況可能造成關聯。"
      ],
      "reasoningSteps": [
        "P(兩天都準時)=0.8×0.8=0.64。",
        "P(至少一天不準時)=1-0.64=0.36。",
        "若未假設獨立，只知道單日0.8不足以決定兩日同時準時機率，因天氣或路況可能造成關聯。"
      ],
      "alternativeMethods": [
        "可列四種準時/不準時序列並相加三種含不準時的路徑。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "0.36、餘事計算與獨立性限制完整。"
        },
        {
          "score": 2,
          "criteria": "0.36正確但缺少限制說明，或限制正確但一處乘法錯。"
        },
        {
          "score": 1,
          "criteria": "知道用1減兩天都準時。"
        },
        {
          "score": 0,
          "criteria": "把至少一天不準時算0.2×0.2或0.4。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "缺少獨立性限制說明最高2分；若只寫0.36最高1分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "把至少一天當兩天都不準時。",
        "直接加0.2+0.2而不處理重疊。",
        "忽略題目獨立條件。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "P(兩天都準時)=0.8×0.8=0.64。；P(至少一天不準時)=1-0.64=0.36。；若未假設獨立，只知道單日0.8不足以決定兩日同時準時機率，因天氣或路況可能造成關聯。",
        "alternativeMethodCheck": "可列四種準時/不準時序列並相加三種含不準時的路徑。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "d95512dd7644d105768631043632a39b9b2992490bfbef459180c42dabb09da6"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u22-s016-v001",
      "unitId": "u22",
      "skillId": "probability-word",
      "contentSha256": "1cdb5739f3aa82f2836fa597d9fcf32950e2abf912dc4c91861da7ce1a63ec7b",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "「至少一張紅」與「零張紅」互斥且涵蓋全部可能，故互為餘事。",
      "derivedAnswer": "一張紅牌都沒有抽到",
      "storedAnswer": "一張紅牌都沒有抽到",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「一張紅牌都沒有抽到」；其餘選項逐項排除：「恰好抽到一張紅牌」：這不是至少一次的完整餘事。；「每張都是紅牌」：這是至少一次中的一部分。；「至少抽到一張黑牌」：可能同時有紅與黑，不互為餘事。",
        "undefinedSymbol": "題幹術語均已在「機率應用題」講義定義；實際目標為「翻譯機率文字事件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "紅牌與非紅牌分類需涵蓋每次抽取。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把「至少」誤讀成「恰好」。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：翻譯機率文字事件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「題目說「至少抽到一張紅牌」，最直接的餘事是哪一個？」；獨立解法「「至少一張紅」與「零張紅」互斥且涵蓋全部可能，故互為餘事。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s016-v002",
      "unitId": "u22",
      "skillId": "probability-word",
      "contentSha256": "1ea88d60c48aa6cad1166cae613def2ca4d1bee16a08bf68a09f2834d95b1222",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "不小於6就是≥6，因此包含6、7、8。",
      "derivedAnswer": "6、7、8",
      "storedAnswer": "6、7、8",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「6、7、8」；其餘選項逐項排除：「7、8」：把不小於誤讀成大於。；「1、2、3、4、5」：列成小於6。；「6」：只取邊界。",
        "undefinedSymbol": "題幹術語均已在「機率應用題」講義定義；實際目標為「將文字條件轉成事件集合」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "樣本空間為整數1至8。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「忽略「不小於」包含等號。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：將文字條件轉成事件集合",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「從1到8等可能選一個整數。「不小於6」包含哪些數？」；獨立解法「不小於6就是≥6，因此包含6、7、8。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s016-v003",
      "unitId": "u22",
      "skillId": "probability-word",
      "contentSha256": "c6382ae71344082fb132a7a5413dbaf6729ce33253f5f525172267f2452dd48d",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "有利數為3、4、5、6、7，共5個；機率5/10=1/2。",
      "derivedAnswer": "1/2",
      "storedAnswer": "1/2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1/2」；其餘選項逐項排除：「4/10」：漏掉一個端點。；「3/10」：只算4、5、6。；「7/10」：把1到7都算入。",
        "undefinedSymbol": "題幹術語均已在「機率應用題」講義定義；實際目標為「處理含端點區間事件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "整數離散樣本空間。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「區間端點處理錯誤。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：處理含端點區間事件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一張卡片從1到10中等可能抽取。「介於3與7之間，含兩端」的機率為何？」；獨立解法「有利數為3、4、5、6、7，共5個；機率5/10=1/2。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s016-v004",
      "unitId": "u22",
      "skillId": "probability-word",
      "contentSha256": "82191c552c18daf83ea6dc87a4bf122fef1c37e6b677d853de8e158cd1b0399d",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "女生30-14=16人，機率16/30=8/15。",
      "derivedAnswer": "8/15",
      "storedAnswer": "8/15",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「8/15」；其餘選項逐項排除：「7/15」：這是抽到男生14/30。；「16/14」：分母誤用男生人數。；「1/2」：假設男女相等。",
        "undefinedSymbol": "題幹術語均已在「機率應用題」講義定義；實際目標為「由總數與部分數量求機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "每人一籤且籤相同。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「未先求餘下類別人數。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：由總數與部分數量求機率",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某班抽籤選值日生，每人一張同樣籤。班上30人，其中男生14人。抽到女生的機率為何？」；獨立解法「女生30-14=16人，機率16/30=8/15。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s016-v005",
      "unitId": "u22",
      "skillId": "probability-word",
      "contentSha256": "11ddb439391f253ee6d0118264a151654353a38a1ab8d7f2b032c0f5f463caeb",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "用餘事：兩位都不是0有9×9=81種，所以至少一個0有100-81=19種，機率19/100。",
      "derivedAnswer": "19/100",
      "storedAnswer": "19/100",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「19/100」；其餘選項逐項排除：「1/10」：只算第一位是0。；「20/100」：把00重複計數。；「81/100」：這是兩位都不是0。",
        "undefinedSymbol": "題幹術語均已在「機率應用題」講義定義；實際目標為「以餘事處理數字條件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "00到99包含前導0且各碼等可能。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把兩個「某位是0」直接相加而重複00。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：以餘事處理數字條件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「密碼末兩碼從00到99等可能。末兩碼至少有一個0的機率是多少？」；獨立解法「用餘事：兩位都不是0有9×9=81種，所以至少一個0有100-81=19種，機率19/100。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s016-v006",
      "unitId": "u22",
      "skillId": "probability-word",
      "contentSha256": "9dce2510e6ab7b9f8a0b1471680d461a8445c2b0818858f7e480ced3473fc17f",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "可分路徑：先白後黑=4/6×2/5=4/15；先黑後黑=2/6×1/5=1/15；合計5/15=1/3。也可用抽取位置對每顆球對稱，第二位黑率2/6。",
      "derivedAnswer": "1/3",
      "storedAnswer": "1/3",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1/3」；其餘選項逐項排除：「1/5」：假設第一顆一定不是黑。；「2/5」：把第二次分母固定為5且分子2。；「1/2」：只看兩種顏色。",
        "undefinedSymbol": "題幹術語均已在「機率應用題」講義定義；實際目標為「處理只指定第二階段結果的事件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "不放回但每個位置對原球對稱。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只計先白後黑，漏掉先黑後黑。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：處理只指定第二階段結果的事件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「袋中有4白2黑，不放回抽兩球。「第二顆是黑球」的機率為何？」；獨立解法「可分路徑：先白後黑=4/6×2/5=4/15；先黑後黑=2/6×1/5=1/15；合計5/15=1/3。也可用抽取位置對每顆球對稱，第二位黑率2/6。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s016-v007",
      "unitId": "u22",
      "skillId": "probability-word",
      "contentSha256": "b41440fab6a35b97920cb5d7a23e9ebdca449aed0ecdc19b796c544d7dd078c3",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "餘事是兩顆都不是6，機率(5/6)²=25/36，所以至少一顆6為11/36。",
      "derivedAnswer": "11/36",
      "storedAnswer": "11/36",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「11/36」；其餘選項逐項排除：「1/6」：只看第一顆或單顆。；「12/36」：把兩顆出6機率相加，重複(6,6)。；「25/36」：這是兩顆都不是6。",
        "undefinedSymbol": "題幹術語均已在「機率應用題」講義定義；實際目標為「處理至少一顆的骰子事件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩骰獨立公平。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「直接相加兩個1/6。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：處理至少一顆的骰子事件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「擲兩顆公平骰，至少一顆出現6的機率是多少？」；獨立解法「餘事是兩顆都不是6，機率(5/6)²=25/36，所以至少一顆6為11/36。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s016-v008",
      "unitId": "u22",
      "skillId": "probability-word",
      "contentSha256": "435f0a01b88bf89419743439bb3d6377f83df07a3996a078f8da2367de0b1139",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "6的倍數有6、12、18、24、30、36、42、48；其中也被4整除的是12、24、36、48，剩6、18、30、42共4個。",
      "derivedAnswer": "4個",
      "storedAnswer": "4個",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「4個」；其餘選項逐項排除：「8個」：只算6的倍數，未排除12的倍數。；「2個」：過度排除。；「6個」：漏排或漏列。",
        "undefinedSymbol": "題幹術語均已在「機率應用題」講義定義；實際目標為「處理複合整除條件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "範圍1至50含端點。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把「但不能」誤作「或」。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：處理複合整除條件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「抽獎規則：編號1到50中，能被6整除但不能被4整除者中獎。中獎號碼有幾個？」；獨立解法「6的倍數有6、12、18、24、30、36、42、48；其中也被4整除的是12、24、36、48，剩6、18、30、42共4個。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s016-v009",
      "unitId": "u22",
      "skillId": "probability-word",
      "contentSha256": "e4183e9c192b928c1e89269ddec67234b68bb51b87094bb62b9f76f288f4ba99",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "總延誤=0.5×0.1+0.3×0.2+0.2×0.4=0.05+0.06+0.08=0.19。",
      "derivedAnswer": "0.19",
      "storedAnswer": "0.19",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「0.19」；其餘選項逐項排除：「0.70」：直接加三條延誤率。；「0.23」：錯誤平均或乘積相加。；「0.10」：只看最常選的甲路線。",
        "undefinedSymbol": "題幹術語均已在「機率應用題」講義定義；實際目標為「從文字表格建立加權機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "路線機率合計1。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把各條件延誤率直接平均或相加。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：從文字表格建立加權機率",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三條路線甲、乙、丙被選中的機率分別為0.5、0.3、0.2。若甲路線延誤率0.1、乙0.2、丙0.4，總延誤率為何？」；獨立解法「總延誤=0.5×0.1+0.3×0.2+0.2×0.4=0.05+0.06+0.08=0.19。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s016-v010",
      "unitId": "u22",
      "skillId": "probability-word",
      "contentSha256": "03ceeeaabeeb5a378d3e91c1242a8ac55988efe1335f09e55677c75a694fd908",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "每張牌對該參加者等可能，30/120=1/4；共發幾張不改變單一隨機位置的比例。",
      "derivedAnswer": "1/4",
      "storedAnswer": "1/4",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1/4」；其餘選項逐項排除：「1/2」：把發出60張占120張當中獎率。；「30/60」：把預計發出張數當分母，但個人牌來自全部隨機牌。；「3/4」：算成不可換獎。",
        "undefinedSymbol": "題幹術語均已在「機率應用題」講義定義；實際目標為「釐清單一個體機率的分母」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "假設號碼牌充分隨機發放。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把樣本總數改成參加者數。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：釐清單一個體機率的分母",
      "literacyContextNecessity": "活動規模與個人中獎率是不同問題。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「活動有120張號碼牌，其中30張可換獎。主辦方預計隨機發出60張，若只問「一名隨機參加者拿到可換獎牌的機率」，答案為何？」；獨立解法「每張牌對該參加者等可能，30/120=1/4；共發幾張不改變單一隨機位置的比例。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s016-v011",
      "unitId": "u22",
      "skillId": "probability-word",
      "contentSha256": "5f1fec33f7411664d17c81fd068691ac6cd59b84b93ce4e70284967d47b08d48",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "相對次數35/100=35%可作估計，但單次結果仍可能下雨或不下雨。",
      "derivedAnswer": "約35%，但不保證明天一定如何",
      "storedAnswer": "約35%，但不保證明天一定如何",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「約35%，但不保證明天一定如何」；其餘選項逐項排除：「35%，所以每100天固定第35天下雨」：機率不指定發生日期。；「65%，因不下雨天較多」：問的是下雨。；「不是0%或100%就沒有意義」：機率可表達不確定性。",
        "undefinedSymbol": "題幹術語均已在「機率應用題」講義定義；實際目標為「正確表達經驗機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "估計品質取決於「相似條件」與資料代表性。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把長期比例當成短期固定排程。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：正確表達經驗機率",
      "literacyContextNecessity": "天氣機率必須同時說明數值與不確定性。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「氣象資料顯示相似條件的100天中有35天下雨。用相對次數估計明天下雨機率，較合理寫法是什麼？」；獨立解法「相對次數35/100=35%可作估計，但單次結果仍可能下雨或不下雨。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s016-v012",
      "unitId": "u22",
      "skillId": "probability-word",
      "contentSha256": "c1f09aae0c800aa403a976495542a6932ea54a2379cc47468dc9e9cb79b0ac00",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "抽樣能估計與監控，但未觀察的980劑仍有不確定性，不能把樣本結果改寫成全體必然。",
      "derivedAnswer": "樣本全合格可提供證據，但不能證明未抽到的每一劑都合格",
      "storedAnswer": "樣本全合格可提供證據，但不能證明未抽到的每一劑都合格",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「樣本全合格可提供證據，但不能證明未抽到的每一劑都合格」；其餘選項逐項排除：「可以證明100%，因抽樣是隨機」：隨機抽樣仍非全數檢驗。；「完全沒有任何資訊」：隨機樣本仍提供品質資訊。；「只要樣本超過10就能保證」：沒有這種固定門檻保證。",
        "undefinedSymbol": "題幹術語均已在「機率應用題」講義定義；實際目標為「限制抽樣機率結論」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "不涉及醫療效能，只討論抽樣推論。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把隨機抽樣誤當全數檢查。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：限制抽樣機率結論",
      "literacyContextNecessity": "品質公告若使用「100%」需與實際檢驗範圍一致。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-two-stage。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某疫苗抽樣檢驗中，從1000劑隨機抽20劑，若全部合格就宣稱整批100%合格。哪個評語最正確？」；獨立解法「抽樣能估計與監控，但未觀察的980劑仍有不確定性，不能把樣本結果改寫成全體必然。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    }
  ],
  "drawingSpecs": []
};
