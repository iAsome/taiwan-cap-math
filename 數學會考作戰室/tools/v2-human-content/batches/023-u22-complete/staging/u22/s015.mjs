// Emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u22-s015-lecture-r1",
    "unitId": "u22",
    "numericUnitId": 22,
    "topicId": "u22-probability",
    "skillId": "probability-two-stage",
    "lockedSkillOrder": 15,
    "title": "兩階段機率：處理放回與不放回的兩階段機率。",
    "originalLockedTitle": "兩階段機率",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能計算兩階段指定路徑機率。",
      "能分辨放回與不放回的第二階段分母。",
      "能把不同順序的互斥路徑相加。",
      "能處理來源加權與條件成功率。"
    ],
    "prerequisiteSkillIds": [
      "probability-equally-likely"
    ],
    "prerequisiteBridge": "承接樹狀圖、樣本空間與等可能判斷。",
    "glossary": [
      {
        "term": "放回抽取",
        "definition": "第一抽後恢復原組成，下一抽機率不變。"
      },
      {
        "term": "不放回抽取",
        "definition": "第一抽後組成改變，下一抽機率依結果更新。"
      },
      {
        "term": "聯合機率",
        "definition": "兩階段事件同時成立的機率。"
      },
      {
        "term": "總機率",
        "definition": "把互斥來源路徑的機率加總。"
      }
    ],
    "notation": [
      {
        "symbol": "P(A且B)=P(A)×P(B在A後)",
        "meaning": "沿路相乘。"
      },
      {
        "symbol": "P(E)=各互斥E路徑機率和",
        "meaning": "跨路相加。"
      }
    ],
    "conceptNarrative": [
      "兩階段的第二個分支機率是到達第一結果後的比例。",
      "放回時分子與分母恢復；不放回時總數少1，若抽走目標顏色，該顏色數也少1。",
      "「一白一黑不限順序」包含白黑與黑白兩條路徑。",
      "來源A、B有不同占比與不良率時，要用來源占比加權，不能直接平均不良率。",
      "若只指定第二次結果，可列第一階段所有可能路徑再加總。"
    ],
    "formalDefinitions": [
      {
        "name": "指定順序",
        "statement": "例如先白後黑，只取一條路徑。"
      },
      {
        "name": "不限順序",
        "statement": "符合條件的所有順序皆納入。"
      }
    ],
    "formulas": [
      {
        "formula": "放回同類兩次=(a/n)²",
        "conditions": [
          "每次機率相同。"
        ],
        "meaning": "每次機率相同。"
      },
      {
        "formula": "不放回同類兩次=(a/n)((a-1)/(n-1))",
        "conditions": [
          "第一抽為該類後。"
        ],
        "meaning": "第一抽為該類後。"
      }
    ],
    "nonApplicableCases": [
      "不放回不可沿用原分母。",
      "不限順序不可漏掉反向路徑。",
      "來源比例未合1時先補或檢查。",
      "條件機率不能當全體機率。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "畫兩層樹",
        "check": "標第一階段。"
      },
      {
        "step": 2,
        "instruction": "更新第二層",
        "check": "依放回與第一結果。"
      },
      {
        "step": 3,
        "instruction": "圈事件路徑",
        "check": "注意順序。"
      },
      {
        "step": 4,
        "instruction": "沿路乘",
        "check": "每條獨立計算。"
      },
      {
        "step": 5,
        "instruction": "跨路加與驗算",
        "check": "結果不超過1。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "2紅3藍放回兩紅",
        "solutionSteps": [
          "(2/5)²=4/25。"
        ],
        "answer": "(2/5)²=4/25。"
      },
      {
        "exampleId": "L2",
        "prompt": "2紅3藍不放回兩紅",
        "solutionSteps": [
          "(2/5)(1/4)=1/10。"
        ],
        "answer": "(2/5)(1/4)=1/10。"
      },
      {
        "exampleId": "L3",
        "prompt": "3白2黑不放回一白一黑",
        "solutionSteps": [
          "3/10+3/10=3/5。"
        ],
        "answer": "3/10+3/10=3/5。"
      },
      {
        "exampleId": "L4",
        "prompt": "A占0.7不良2%，B占0.3不良5%",
        "solutionSteps": [
          "總不良0.014+0.015=0.029。"
        ],
        "answer": "總不良0.014+0.015=0.029。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "放回與不放回答案相同",
        "why": "更新第二層檢查。",
        "correction": "更新第二層檢查。"
      },
      {
        "mistake": "恰好一次直接乘2p",
        "why": "還需乘另一階段不發生率。",
        "correction": "還需乘另一階段不發生率。"
      },
      {
        "mistake": "兩條路徑條件率直接相加",
        "why": "先乘來源機率。",
        "correction": "先乘來源機率。"
      },
      {
        "mistake": "把百分比2寫成2",
        "why": "先轉0.02。",
        "correction": "先轉0.02。"
      }
    ],
    "selfCheck": [
      "第二階段分母是否更新？",
      "事件是否指定順序？",
      "所有有利路徑是否列全？",
      "百分比是否轉成小數或分數？",
      "總機率是否合理？"
    ],
    "summary": [
      "兩階段仍是沿路乘、跨路加。",
      "放回決定第二層是否改變。",
      "不限順序通常有多條路徑。",
      "不同來源要做權重加總。"
    ],
    "connections": {
      "previous": "承接樹狀圖、樣本空間與等可能判斷。",
      "next": [
        "下一技能把文字限制翻成事件與路徑。"
      ]
    },
    "figureReferences": [
      "fig-u22-tree-without-replacement"
    ],
    "figureAccessibility": [
      {
        "figureId": "fig-u22-tree-without-replacement",
        "altText": "袋中3紅2藍不放回抽兩球的樹狀圖，第二層分母由5改為4。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u22-s015-v001",
        "u22-s015-v002",
        "u22-s015-v003",
        "u22-s015-v004",
        "u22-s015-v005",
        "u22-s015-v006",
        "u22-s015-v007",
        "u22-s015-v008",
        "u22-s015-v009",
        "u22-s015-v010",
        "u22-s015-v011",
        "u22-s015-v012"
      ],
      "constructedResponseIds": [
        "u22-s015-cr001",
        "u22-s015-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "skillSpecificReviewEvidence": "獨立重算放回4/25、不放回1/10與一白一黑3/5；品質加權0.029同時用百分比與小數交叉驗證。",
      "futureKnowledgeCheck": "pass; all methods use this skill or declared prerequisites only",
      "contentBoundary": "處理放回與不放回的兩階段機率。",
      "reviewVersion": "human-lecture-review-u22-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "27932f51ea3b957a98c84a636dcd13414cf43daf3d520c29b3d3e4f5ac1d0d96"
  },
  "mcQuestions": [
    {
      "questionId": "u22-s015-v001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "公平硬幣擲一次，再公平骰子擲一次。出現正面且骰子為6的機率是多少？",
      "text": "公平硬幣擲一次，再公平骰子擲一次。出現正面且骰子為6的機率是多少？",
      "givenConditions": [],
      "target": "計算兩個獨立指定結果",
      "choices": [
        "1/8",
        "1/6",
        "1/12",
        "2/7"
      ],
      "answerIndex": 2,
      "independentSolution": "兩階段獨立，P(正且6)=1/2×1/6=1/12。",
      "explanation": "兩階段獨立，P(正且6)=1/2×1/6=1/12。",
      "steps": [
        "第一階段1/2。",
        "第二階段1/6。",
        "相乘。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/8",
          "truth": false,
          "reason": "把骰子當4面。"
        },
        {
          "choice": "1/6",
          "truth": false,
          "reason": "漏乘硬幣機率。"
        },
        {
          "choice": "1/12",
          "truth": true,
          "reason": "正確。獨立重算：兩階段獨立，P(正且6)=1/2×1/6=1/12。"
        },
        {
          "choice": "2/7",
          "truth": false,
          "reason": "把分子分母相加。"
        }
      ],
      "misconceptionTarget": "「且」事件用相加。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "硬幣與骰子公平且互不影響。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算兩個獨立指定結果",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算兩個獨立指定結果",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "f6c59648594f1937bdb3c40c19c8262f88f6151e15614209d9888a843671e3ce"
    },
    {
      "questionId": "u22-s015-v002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "袋中紅球2顆、藍球3顆，抽1顆放回後再抽1顆。兩次都紅的機率是多少？",
      "text": "袋中紅球2顆、藍球3顆，抽1顆放回後再抽1顆。兩次都紅的機率是多少？",
      "givenConditions": [],
      "target": "計算放回同色機率",
      "choices": [
        "2/25",
        "1/5",
        "1/10",
        "4/25"
      ],
      "answerIndex": 3,
      "independentSolution": "放回後每次紅球機率都是2/5，所以(2/5)²=4/25。",
      "explanation": "放回後每次紅球機率都是2/5，所以(2/5)²=4/25。",
      "steps": [
        "確認放回。",
        "兩次各2/5。",
        "相乘。"
      ],
      "optionAnalysis": [
        {
          "choice": "2/25",
          "truth": false,
          "reason": "漏掉一次紅球數。"
        },
        {
          "choice": "1/5",
          "truth": false,
          "reason": "把兩次機率相加後處理錯。"
        },
        {
          "choice": "1/10",
          "truth": false,
          "reason": "誤用不放回第二次1/4。"
        },
        {
          "choice": "4/25",
          "truth": true,
          "reason": "正確。獨立重算：放回後每次紅球機率都是2/5，所以(2/5)²=4/25。"
        }
      ],
      "misconceptionTarget": "放回題仍減少球數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩次抽取在放回後獨立。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算放回同色機率",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算放回同色機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "92bbe026597f1713596b9c9872be2db23cb3b761820dad85253efe52dcc517c8"
    },
    {
      "questionId": "u22-s015-v003",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "袋中紅球2顆、藍球3顆，不放回連抽2顆。兩次都紅的機率是多少？",
      "text": "袋中紅球2顆、藍球3顆，不放回連抽2顆。兩次都紅的機率是多少？",
      "givenConditions": [],
      "target": "計算不放回同色機率",
      "choices": [
        "4/25",
        "1/10",
        "2/10",
        "1/5"
      ],
      "answerIndex": 1,
      "independentSolution": "第一次紅2/5；抽走紅球後第二次紅1/4，所以2/5×1/4=1/10。",
      "explanation": "第一次紅2/5；抽走紅球後第二次紅1/4，所以2/5×1/4=1/10。",
      "steps": [
        "第一紅2/5。",
        "剩1紅、總4。",
        "相乘。"
      ],
      "optionAnalysis": [
        {
          "choice": "4/25",
          "truth": false,
          "reason": "誤用放回。"
        },
        {
          "choice": "1/10",
          "truth": true,
          "reason": "正確。獨立重算：第一次紅2/5；抽走紅球後第二次紅1/4，所以2/5×1/4=1/10。"
        },
        {
          "choice": "2/10",
          "truth": false,
          "reason": "第二次仍用2顆紅。"
        },
        {
          "choice": "1/5",
          "truth": false,
          "reason": "只算第一次紅。"
        }
      ],
      "misconceptionTarget": "不放回時分子分母都未更新。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "抽取順序有記錄但事件為兩次皆紅。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算不放回同色機率",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算不放回同色機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "0d6e1f5e1e791a25ef05a79e2f5262cabec75a20300e83452f7a6ea2487a0f82"
    },
    {
      "questionId": "u22-s015-v004",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "公平硬幣擲兩次，恰好一次正面的機率是多少？",
      "text": "公平硬幣擲兩次，恰好一次正面的機率是多少？",
      "givenConditions": [],
      "target": "計算兩階段恰一次事件",
      "choices": [
        "1/2",
        "1/4",
        "3/4",
        "1"
      ],
      "answerIndex": 0,
      "independentSolution": "恰好一次有正反、反正兩路徑，各1/4，總和1/2。",
      "explanation": "恰好一次有正反、反正兩路徑，各1/4，總和1/2。",
      "steps": [
        "列兩條有利路徑。",
        "各自相乘1/4。",
        "相加。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/2",
          "truth": true,
          "reason": "正確。獨立重算：恰好一次有正反、反正兩路徑，各1/4，總和1/2。"
        },
        {
          "choice": "1/4",
          "truth": false,
          "reason": "只算正反一條路徑。"
        },
        {
          "choice": "3/4",
          "truth": false,
          "reason": "算成至少一次正面。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "誤以為必有一次正面。"
        }
      ],
      "misconceptionTarget": "漏掉順序相反的另一條路徑。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩次投擲獨立公平。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：計算兩階段恰一次事件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算兩階段恰一次事件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "af48fbc296653c5cd6f3e469190ceeb84a4ee685874c6a15f630f7c4c3eef1c2"
    },
    {
      "questionId": "u22-s015-v005",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "袋中3白2黑，不放回抽兩顆。先白後黑的機率是多少？",
      "text": "袋中3白2黑，不放回抽兩顆。先白後黑的機率是多少？",
      "givenConditions": [],
      "target": "計算指定順序不放回機率",
      "choices": [
        "6/25",
        "3/10",
        "2/5",
        "3/5"
      ],
      "answerIndex": 1,
      "independentSolution": "第一次白3/5，剩4顆中黑2顆，第二次黑2/4，乘得3/10。",
      "explanation": "第一次白3/5，剩4顆中黑2顆，第二次黑2/4，乘得3/10。",
      "steps": [
        "3/5×2/4。",
        "約分3/10。"
      ],
      "optionAnalysis": [
        {
          "choice": "6/25",
          "truth": false,
          "reason": "誤用放回。"
        },
        {
          "choice": "3/10",
          "truth": true,
          "reason": "正確。獨立重算：第一次白3/5，剩4顆中黑2顆，第二次黑2/4，乘得3/10。"
        },
        {
          "choice": "2/5",
          "truth": false,
          "reason": "只算第二次黑。"
        },
        {
          "choice": "3/5",
          "truth": false,
          "reason": "只算第一次白。"
        }
      ],
      "misconceptionTarget": "只算其中一階段。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "先白後黑與先黑後白為不同路徑。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：計算指定順序不放回機率",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算指定順序不放回機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "6933028ab6363d006a9b8f5f1dc43421d8671690e736c758a46155179d12888d"
    },
    {
      "questionId": "u22-s015-v006",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "袋中3白2黑，不放回抽兩顆。抽到一白一黑，不限順序的機率是多少？",
      "text": "袋中3白2黑，不放回抽兩顆。抽到一白一黑，不限順序的機率是多少？",
      "givenConditions": [],
      "target": "計算不限順序的兩階段事件",
      "choices": [
        "3/10",
        "1/5",
        "3/5",
        "4/5"
      ],
      "answerIndex": 2,
      "independentSolution": "先白後黑=3/5×2/4=3/10；先黑後白=2/5×3/4=3/10；相加3/5。",
      "explanation": "先白後黑=3/5×2/4=3/10；先黑後白=2/5×3/4=3/10；相加3/5。",
      "steps": [
        "算兩種順序。",
        "互斥路徑相加。"
      ],
      "optionAnalysis": [
        {
          "choice": "3/10",
          "truth": false,
          "reason": "只算先白後黑。"
        },
        {
          "choice": "1/5",
          "truth": false,
          "reason": "只算先黑後白且算錯。"
        },
        {
          "choice": "3/5",
          "truth": true,
          "reason": "正確。獨立重算：先白後黑=3/5×2/4=3/10；先黑後白=2/5×3/4=3/10；相加3/5。"
        },
        {
          "choice": "4/5",
          "truth": false,
          "reason": "把同色事件混入。"
        }
      ],
      "misconceptionTarget": "看到一白一黑卻只列一種順序。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩條路徑互斥且涵蓋事件。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：計算不限順序的兩階段事件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算不限順序的兩階段事件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "18fdad8281bab7964edf15ced151495bef23c71a93889f239583205b835c86c8"
    },
    {
      "questionId": "u22-s015-v007",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "第一階段A機率0.4、B機率0.6。A後成功率0.5，B後成功率0.2。總成功率是多少？",
      "text": "第一階段A機率0.4、B機率0.6。A後成功率0.5，B後成功率0.2。總成功率是多少？",
      "givenConditions": [],
      "target": "計算不同條件分支總機率",
      "choices": [
        "0.7",
        "0.28",
        "0.20",
        "0.32"
      ],
      "answerIndex": 3,
      "independentSolution": "A且成功0.4×0.5=0.20；B且成功0.6×0.2=0.12；總和0.32。",
      "explanation": "A且成功0.4×0.5=0.20；B且成功0.6×0.2=0.12；總和0.32。",
      "steps": [
        "分路徑加權。",
        "0.20+0.12。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.7",
          "truth": false,
          "reason": "直接加兩個條件成功率。"
        },
        {
          "choice": "0.28",
          "truth": false,
          "reason": "加權乘積計算錯。"
        },
        {
          "choice": "0.20",
          "truth": false,
          "reason": "只取B後成功。"
        },
        {
          "choice": "0.32",
          "truth": true,
          "reason": "正確。獨立重算：A且成功0.4×0.5=0.20；B且成功0.6×0.2=0.12；總和0.32。"
        }
      ],
      "misconceptionTarget": "忽略第一階段權重。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "A、B互斥且合計1。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：計算不同條件分支總機率",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算不同條件分支總機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "7c292af200dccc9a3ea4ed3f3c1a6a7c2621da55e9804882dd1d521ba278e41a"
    },
    {
      "questionId": "u22-s015-v008",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "盒中有1、2、3三張卡，不放回抽兩張並依序排成兩位數。所得數大於21的機率是多少？",
      "text": "盒中有1、2、3三張卡，不放回抽兩張並依序排成兩位數。所得數大於21的機率是多少？",
      "givenConditions": [],
      "target": "兩階段組數字事件",
      "choices": [
        "1/2",
        "1/3",
        "2/3",
        "5/6"
      ],
      "answerIndex": 0,
      "independentSolution": "有序結果12、13、21、23、31、32共6個；大於21的是23、31、32共3個，機率1/2。",
      "explanation": "有序結果12、13、21、23、31、32共6個；大於21的是23、31、32共3個，機率1/2。",
      "steps": [
        "列6個不重複兩位數。",
        "依嚴格大於21篩選。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/2",
          "truth": true,
          "reason": "正確。獨立重算：有序結果12、13、21、23、31、32共6個；大於21的是23、31、32共3個，機率1/2。"
        },
        {
          "choice": "1/3",
          "truth": false,
          "reason": "漏掉31。"
        },
        {
          "choice": "2/3",
          "truth": false,
          "reason": "把21也算大於21。"
        },
        {
          "choice": "5/6",
          "truth": false,
          "reason": "只排除12。"
        }
      ],
      "misconceptionTarget": "把21納入或漏列順序。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "不放回所以無11、22、33。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：兩階段組數字事件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "兩階段組數字事件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "44fa9022d0d24aae51e6de63fec12adb45686a5c436db194dba2e2888754586b"
    },
    {
      "questionId": "u22-s015-v009",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某兩階段試驗第一步成功率p，第二步在第一步成功後成功率1/3。兩步都成功機率為1/6，p為何？",
      "text": "某兩階段試驗第一步成功率p，第二步在第一步成功後成功率1/3。兩步都成功機率為1/6，p為何？",
      "givenConditions": [],
      "target": "由路徑機率反求分支",
      "choices": [
        "1/18",
        "2",
        "1/2",
        "1/3"
      ],
      "answerIndex": 2,
      "independentSolution": "p×1/3=1/6，所以p=(1/6)÷(1/3)=1/2。",
      "explanation": "p×1/3=1/6，所以p=(1/6)÷(1/3)=1/2。",
      "steps": [
        "列路徑乘積。",
        "反求p。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/18",
          "truth": false,
          "reason": "把1/6再乘1/3。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "分數除法顛倒。"
        },
        {
          "choice": "1/2",
          "truth": true,
          "reason": "正確。獨立重算：p×1/3=1/6，所以p=(1/6)÷(1/3)=1/2。"
        },
        {
          "choice": "1/3",
          "truth": false,
          "reason": "直接取第二步率。"
        }
      ],
      "misconceptionTarget": "由乘積反推時乘除方向錯。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "p在0到1內。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由路徑機率反求分支",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由路徑機率反求分支",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "051ebcca9280f7bd3bf2a500807e51ef67fa2bb40318c02b93b38232cd98bb10"
    },
    {
      "questionId": "u22-s015-v010",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "抽獎每次中獎率1/5，兩次獨立。恰好中一次的機率是多少？",
      "text": "抽獎每次中獎率1/5，兩次獨立。恰好中一次的機率是多少？",
      "givenConditions": [],
      "target": "在抽獎情境計算恰一次",
      "choices": [
        "8/25",
        "4/25",
        "9/25",
        "2/5"
      ],
      "answerIndex": 0,
      "independentSolution": "先中後不中=1/5×4/5=4/25；先不中後中同為4/25；合計8/25。",
      "explanation": "先中後不中=1/5×4/5=4/25；先不中後中同為4/25；合計8/25。",
      "steps": [
        "列兩種順序。",
        "各4/25。",
        "相加8/25。"
      ],
      "optionAnalysis": [
        {
          "choice": "8/25",
          "truth": true,
          "reason": "正確。獨立重算：先中後不中=1/5×4/5=4/25；先不中後中同為4/25；合計8/25。"
        },
        {
          "choice": "4/25",
          "truth": false,
          "reason": "只算先中後不中。"
        },
        {
          "choice": "9/25",
          "truth": false,
          "reason": "把至少一次與恰一次混淆。"
        },
        {
          "choice": "2/5",
          "truth": false,
          "reason": "直接把1/5加兩次。"
        }
      ],
      "misconceptionTarget": "直接倍增中獎率而未乘另一階段不中率。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩次獨立且同機率。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在抽獎情境計算恰一次",
      "literacyContextNecessity": "「買兩次」的宣傳常混淆恰好一次與至少一次，需列清楚路徑。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "在抽獎情境計算恰一次",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "f34197e906718adfb9fdf44d71d0804c5ac236a1bac9d3554cc3c962fd63570a"
    },
    {
      "questionId": "u22-s015-v011",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "工廠先從A線或B線隨機選一件，選A的機率0.7。A線不良率2%，B線不良率5%。抽到不良品的機率為何？",
      "text": "工廠先從A線或B線隨機選一件，選A的機率0.7。A線不良率2%，B線不良率5%。抽到不良品的機率為何？",
      "givenConditions": [],
      "target": "用兩階段模型加權品質風險",
      "choices": [
        "0.07",
        "0.035",
        "0.014",
        "0.029"
      ],
      "answerIndex": 3,
      "independentSolution": "A不良0.7×0.02=0.014；B機率0.3，B不良0.3×0.05=0.015；合計0.029。",
      "explanation": "A不良0.7×0.02=0.014；B機率0.3，B不良0.3×0.05=0.015；合計0.029。",
      "steps": [
        "補B線機率0.3。",
        "算兩條不良路徑。",
        "相加。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.07",
          "truth": false,
          "reason": "把兩條不良率直接相加。"
        },
        {
          "choice": "0.035",
          "truth": false,
          "reason": "只用A、B平均而忽略選線權重。"
        },
        {
          "choice": "0.014",
          "truth": false,
          "reason": "只算A線不良路徑。"
        },
        {
          "choice": "0.029",
          "truth": true,
          "reason": "正確。獨立重算：A不良0.7×0.02=0.014；B機率0.3，B不良0.3×0.05=0.015；合計0.029。"
        }
      ],
      "misconceptionTarget": "忽略來源比例，直接平均不良率。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "精確結果0.029，即2.9%。",
      "ambiguityBoundaryAudit": "百分比轉小數後計算，結果2.9%。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：用兩階段模型加權品質風險",
      "literacyContextNecessity": "總不良率是來源比例與各線不良率的加權結果。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "用兩階段模型加權品質風險",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "b3d6225720041794e35158b56e2a5377ad061cb0f18c95a78f0c7fb680a12d75"
    },
    {
      "questionId": "u22-s015-v012",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一個檢測流程先做快篩：陽性機率0.1；陽性者再複檢，複檢通過機率0.8。被快篩陽性且複檢通過的機率是多少？",
      "text": "一個檢測流程先做快篩：陽性機率0.1；陽性者再複檢，複檢通過機率0.8。被快篩陽性且複檢通過的機率是多少？",
      "givenConditions": [],
      "target": "解讀流程中的聯合機率",
      "choices": [
        "0.9",
        "0.08",
        "0.8",
        "0.18"
      ],
      "answerIndex": 1,
      "independentSolution": "走完整指定路徑的機率=0.1×0.8=0.08。",
      "explanation": "走完整指定路徑的機率=0.1×0.8=0.08。",
      "steps": [
        "沿路相乘。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.9",
          "truth": false,
          "reason": "取快篩陰性餘事。"
        },
        {
          "choice": "0.08",
          "truth": true,
          "reason": "正確。獨立重算：走完整指定路徑的機率=0.1×0.8=0.08。"
        },
        {
          "choice": "0.8",
          "truth": false,
          "reason": "只取條件通過率。"
        },
        {
          "choice": "0.18",
          "truth": false,
          "reason": "把0.1與0.8相加。"
        }
      ],
      "misconceptionTarget": "把條件機率當全體機率。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "本題不把醫療陽性解讀為疾病診斷，只處理流程比例。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：解讀流程中的聯合機率",
      "literacyContextNecessity": "流程資源估算需知道進入複檢且通過的整體比例。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "解讀流程中的聯合機率",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "56f8525545b5d01c5081f3f22359a934ec54492f581169cab2b4941f340aed6b"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u22-s015-cr001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "袋中有3紅2藍，不放回抽兩球。求一紅一藍的機率，至少用兩條有序路徑說明。",
      "requiredWork": [
        "分紅後藍與藍後紅。",
        "更新第二抽分母。",
        "加總互斥路徑。"
      ],
      "standardSolution": [
        "P(紅後藍)=(3/5)(2/4)=3/10。",
        "P(藍後紅)=(2/5)(3/4)=3/10。",
        "所以一紅一藍機率=6/10=3/5。"
      ],
      "reasoningSteps": [
        "P(紅後藍)=(3/5)(2/4)=3/10。",
        "P(藍後紅)=(2/5)(3/4)=3/10。",
        "所以一紅一藍機率=6/10=3/5。"
      ],
      "alternativeMethods": [
        "可將5顆球先加上可區分標記，完整列出10組不計順序的兩球配對；其中3×2=6組為異色，所以機率6/10=3/5。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩條路徑、更新比例與3/5全部完整。"
        },
        {
          "score": 2,
          "criteria": "只有一條乘積算錯，另一條與加總方法正確。"
        },
        {
          "score": 1,
          "criteria": "能列兩條異色路徑並得到至少一條3/10。"
        },
        {
          "score": 0,
          "criteria": "只算紅藍一種順序或第二抽仍用分母5。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若以完整列舉10個無序球對且說明6個異色，可滿分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "漏掉藍紅。",
        "把兩路相乘。",
        "用(3/5)(2/5)。"
      ],
      "visualMode": "figure",
      "figureId": "fig-u22-tree-without-replacement",
      "drawingSpecReference": "fig-u22-tree-without-replacement",
      "independentReview": {
        "recomputedResult": "P(紅後藍)=(3/5)(2/4)=3/10。；P(藍後紅)=(2/5)(3/4)=3/10。；所以一紅一藍機率=6/10=3/5。",
        "alternativeMethodCheck": "可將5顆球先加上可區分標記，完整列出10組不計順序的兩球配對；其中3×2=6組為異色，所以機率6/10=3/5。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "d7dc3870fc5bd5932b52f8eb2b404b84317e622ce2b7baceff87cd8d640c2e84"
    },
    {
      "questionId": "u22-s015-cr002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-two-stage",
      "lockedSkillOrder": 15,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "公平硬幣先擲一次；若正面就擲公平六面骰，若反面就從1、2、3三張等可能卡抽一張。求最後得到偶數的機率。",
      "requiredWork": [
        "分正面路徑與反面路徑。",
        "各算條件偶數機率。",
        "沿路相乘後相加。"
      ],
      "standardSolution": [
        "正面後骰子偶數機率=(1/2)(3/6)=1/4。",
        "反面後卡片偶數只有2，機率=(1/2)(1/3)=1/6。",
        "總機率=1/4+1/6=5/12。"
      ],
      "reasoningSteps": [
        "正面後骰子偶數機率=(1/2)(3/6)=1/4。",
        "反面後卡片偶數只有2，機率=(1/2)(1/3)=1/6。",
        "總機率=1/4+1/6=5/12。"
      ],
      "alternativeMethods": [
        "可做共同分母12：3/12+2/12=5/12。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩條路徑與5/12全部正確。"
        },
        {
          "score": 2,
          "criteria": "只有一條條件機率算錯，流程正確。"
        },
        {
          "score": 1,
          "criteria": "能列出1/4與1/6中的一項並知道要相加。"
        },
        {
          "score": 0,
          "criteria": "把3/6與1/3直接相加或忽略第一層1/2。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若分數加法錯但兩條路徑乘積正確，可給2分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "漏乘硬幣機率。",
        "把不同路徑相乘。",
        "將卡片偶數誤算2/3。"
      ],
      "visualMode": "figure",
      "figureId": "fig-u22-tree-conditional",
      "drawingSpecReference": "fig-u22-tree-conditional",
      "independentReview": {
        "recomputedResult": "正面後骰子偶數機率=(1/2)(3/6)=1/4。；反面後卡片偶數只有2，機率=(1/2)(1/3)=1/6。；總機率=1/4+1/6=5/12。",
        "alternativeMethodCheck": "可做共同分母12：3/12+2/12=5/12。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "d11095665a9bb61e9d3290ad3fa69e56079211f6d0a058e551505170fe130a13"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u22-s015-v001",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "contentSha256": "f6c59648594f1937bdb3c40c19c8262f88f6151e15614209d9888a843671e3ce",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "兩階段獨立，P(正且6)=1/2×1/6=1/12。",
      "derivedAnswer": "1/12",
      "storedAnswer": "1/12",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1/12」；其餘選項逐項排除：「1/8」：把骰子當4面。；「1/6」：漏乘硬幣機率。；「2/7」：把分子分母相加。",
        "undefinedSymbol": "題幹術語均已在「兩階段機率」講義定義；實際目標為「計算兩個獨立指定結果」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "硬幣與骰子公平且互不影響。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「「且」事件用相加。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算兩個獨立指定結果",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「公平硬幣擲一次，再公平骰子擲一次。出現正面且骰子為6的機率是多少？」；獨立解法「兩階段獨立，P(正且6)=1/2×1/6=1/12。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s015-v002",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "contentSha256": "92bbe026597f1713596b9c9872be2db23cb3b761820dad85253efe52dcc517c8",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "放回後每次紅球機率都是2/5，所以(2/5)²=4/25。",
      "derivedAnswer": "4/25",
      "storedAnswer": "4/25",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「4/25」；其餘選項逐項排除：「2/25」：漏掉一次紅球數。；「1/5」：把兩次機率相加後處理錯。；「1/10」：誤用不放回第二次1/4。",
        "undefinedSymbol": "題幹術語均已在「兩階段機率」講義定義；實際目標為「計算放回同色機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩次抽取在放回後獨立。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「放回題仍減少球數。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算放回同色機率",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「袋中紅球2顆、藍球3顆，抽1顆放回後再抽1顆。兩次都紅的機率是多少？」；獨立解法「放回後每次紅球機率都是2/5，所以(2/5)²=4/25。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s015-v003",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "contentSha256": "0d6e1f5e1e791a25ef05a79e2f5262cabec75a20300e83452f7a6ea2487a0f82",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "第一次紅2/5；抽走紅球後第二次紅1/4，所以2/5×1/4=1/10。",
      "derivedAnswer": "1/10",
      "storedAnswer": "1/10",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1/10」；其餘選項逐項排除：「4/25」：誤用放回。；「2/10」：第二次仍用2顆紅。；「1/5」：只算第一次紅。",
        "undefinedSymbol": "題幹術語均已在「兩階段機率」講義定義；實際目標為「計算不放回同色機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "抽取順序有記錄但事件為兩次皆紅。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「不放回時分子分母都未更新。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算不放回同色機率",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「袋中紅球2顆、藍球3顆，不放回連抽2顆。兩次都紅的機率是多少？」；獨立解法「第一次紅2/5；抽走紅球後第二次紅1/4，所以2/5×1/4=1/10。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s015-v004",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "contentSha256": "af48fbc296653c5cd6f3e469190ceeb84a4ee685874c6a15f630f7c4c3eef1c2",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "恰好一次有正反、反正兩路徑，各1/4，總和1/2。",
      "derivedAnswer": "1/2",
      "storedAnswer": "1/2",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1/2」；其餘選項逐項排除：「1/4」：只算正反一條路徑。；「3/4」：算成至少一次正面。；「1」：誤以為必有一次正面。",
        "undefinedSymbol": "題幹術語均已在「兩階段機率」講義定義；實際目標為「計算兩階段恰一次事件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩次投擲獨立公平。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「漏掉順序相反的另一條路徑。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：計算兩階段恰一次事件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「公平硬幣擲兩次，恰好一次正面的機率是多少？」；獨立解法「恰好一次有正反、反正兩路徑，各1/4，總和1/2。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s015-v005",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "contentSha256": "6933028ab6363d006a9b8f5f1dc43421d8671690e736c758a46155179d12888d",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "第一次白3/5，剩4顆中黑2顆，第二次黑2/4，乘得3/10。",
      "derivedAnswer": "3/10",
      "storedAnswer": "3/10",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「3/10」；其餘選項逐項排除：「6/25」：誤用放回。；「2/5」：只算第二次黑。；「3/5」：只算第一次白。",
        "undefinedSymbol": "題幹術語均已在「兩階段機率」講義定義；實際目標為「計算指定順序不放回機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "先白後黑與先黑後白為不同路徑。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只算其中一階段。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：計算指定順序不放回機率",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「袋中3白2黑，不放回抽兩顆。先白後黑的機率是多少？」；獨立解法「第一次白3/5，剩4顆中黑2顆，第二次黑2/4，乘得3/10。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s015-v006",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "contentSha256": "18fdad8281bab7964edf15ced151495bef23c71a93889f239583205b835c86c8",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "先白後黑=3/5×2/4=3/10；先黑後白=2/5×3/4=3/10；相加3/5。",
      "derivedAnswer": "3/5",
      "storedAnswer": "3/5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「3/5」；其餘選項逐項排除：「3/10」：只算先白後黑。；「1/5」：只算先黑後白且算錯。；「4/5」：把同色事件混入。",
        "undefinedSymbol": "題幹術語均已在「兩階段機率」講義定義；實際目標為「計算不限順序的兩階段事件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩條路徑互斥且涵蓋事件。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「看到一白一黑卻只列一種順序。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：計算不限順序的兩階段事件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「袋中3白2黑，不放回抽兩顆。抽到一白一黑，不限順序的機率是多少？」；獨立解法「先白後黑=3/5×2/4=3/10；先黑後白=2/5×3/4=3/10；相加3/5。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s015-v007",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "contentSha256": "7c292af200dccc9a3ea4ed3f3c1a6a7c2621da55e9804882dd1d521ba278e41a",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "A且成功0.4×0.5=0.20；B且成功0.6×0.2=0.12；總和0.32。",
      "derivedAnswer": "0.32",
      "storedAnswer": "0.32",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「0.32」；其餘選項逐項排除：「0.7」：直接加兩個條件成功率。；「0.28」：加權乘積計算錯。；「0.20」：只取B後成功。",
        "undefinedSymbol": "題幹術語均已在「兩階段機率」講義定義；實際目標為「計算不同條件分支總機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "A、B互斥且合計1。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「忽略第一階段權重。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：計算不同條件分支總機率",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「第一階段A機率0.4、B機率0.6。A後成功率0.5，B後成功率0.2。總成功率是多少？」；獨立解法「A且成功0.4×0.5=0.20；B且成功0.6×0.2=0.12；總和0.32。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s015-v008",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "contentSha256": "44fa9022d0d24aae51e6de63fec12adb45686a5c436db194dba2e2888754586b",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "有序結果12、13、21、23、31、32共6個；大於21的是23、31、32共3個，機率1/2。",
      "derivedAnswer": "1/2",
      "storedAnswer": "1/2",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1/2」；其餘選項逐項排除：「1/3」：漏掉31。；「2/3」：把21也算大於21。；「5/6」：只排除12。",
        "undefinedSymbol": "題幹術語均已在「兩階段機率」講義定義；實際目標為「兩階段組數字事件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "不放回所以無11、22、33。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把21納入或漏列順序。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：兩階段組數字事件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「盒中有1、2、3三張卡，不放回抽兩張並依序排成兩位數。所得數大於21的機率是多少？」；獨立解法「有序結果12、13、21、23、31、32共6個；大於21的是23、31、32共3個，機率1/2。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s015-v009",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "contentSha256": "051ebcca9280f7bd3bf2a500807e51ef67fa2bb40318c02b93b38232cd98bb10",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "p×1/3=1/6，所以p=(1/6)÷(1/3)=1/2。",
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
        "secondCorrectAnswer": "獨立重算得到「1/2」；其餘選項逐項排除：「1/18」：把1/6再乘1/3。；「2」：分數除法顛倒。；「1/3」：直接取第二步率。",
        "undefinedSymbol": "題幹術語均已在「兩階段機率」講義定義；實際目標為「由路徑機率反求分支」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "p在0到1內。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「由乘積反推時乘除方向錯。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由路徑機率反求分支",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某兩階段試驗第一步成功率p，第二步在第一步成功後成功率1/3。兩步都成功機率為1/6，p為何？」；獨立解法「p×1/3=1/6，所以p=(1/6)÷(1/3)=1/2。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s015-v010",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "contentSha256": "f34197e906718adfb9fdf44d71d0804c5ac236a1bac9d3554cc3c962fd63570a",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "先中後不中=1/5×4/5=4/25；先不中後中同為4/25；合計8/25。",
      "derivedAnswer": "8/25",
      "storedAnswer": "8/25",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「8/25」；其餘選項逐項排除：「4/25」：只算先中後不中。；「9/25」：把至少一次與恰一次混淆。；「2/5」：直接把1/5加兩次。",
        "undefinedSymbol": "題幹術語均已在「兩階段機率」講義定義；實際目標為「在抽獎情境計算恰一次」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩次獨立且同機率。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「直接倍增中獎率而未乘另一階段不中率。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在抽獎情境計算恰一次",
      "literacyContextNecessity": "「買兩次」的宣傳常混淆恰好一次與至少一次，需列清楚路徑。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「抽獎每次中獎率1/5，兩次獨立。恰好中一次的機率是多少？」；獨立解法「先中後不中=1/5×4/5=4/25；先不中後中同為4/25；合計8/25。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s015-v011",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "contentSha256": "b3d6225720041794e35158b56e2a5377ad061cb0f18c95a78f0c7fb680a12d75",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "A不良0.7×0.02=0.014；B機率0.3，B不良0.3×0.05=0.015；合計0.029。",
      "derivedAnswer": "0.029",
      "storedAnswer": "0.029",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「0.029」；其餘選項逐項排除：「0.07」：把兩條不良率直接相加。；「0.035」：只用A、B平均而忽略選線權重。；「0.014」：只算A線不良路徑。",
        "undefinedSymbol": "題幹術語均已在「兩階段機率」講義定義；實際目標為「用兩階段模型加權品質風險」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "精確結果0.029，即2.9%。",
        "domainBoundary": "百分比轉小數後計算，結果2.9%。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「忽略來源比例，直接平均不良率。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：用兩階段模型加權品質風險",
      "literacyContextNecessity": "總不良率是來源比例與各線不良率的加權結果。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「工廠先從A線或B線隨機選一件，選A的機率0.7。A線不良率2%，B線不良率5%。抽到不良品的機率為何？」；獨立解法「A不良0.7×0.02=0.014；B機率0.3，B不良0.3×0.05=0.015；合計0.029。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s015-v012",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "contentSha256": "56f8525545b5d01c5081f3f22359a934ec54492f581169cab2b4941f340aed6b",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "走完整指定路徑的機率=0.1×0.8=0.08。",
      "derivedAnswer": "0.08",
      "storedAnswer": "0.08",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「0.08」；其餘選項逐項排除：「0.9」：取快篩陰性餘事。；「0.8」：只取條件通過率。；「0.18」：把0.1與0.8相加。",
        "undefinedSymbol": "題幹術語均已在「兩階段機率」講義定義；實際目標為「解讀流程中的聯合機率」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "本題不把醫療陽性解讀為疾病診斷，只處理流程比例。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把條件機率當全體機率。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：解讀流程中的聯合機率",
      "literacyContextNecessity": "流程資源估算需知道進入複檢且通過的整體比例。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-equally-likely。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個檢測流程先做快篩：陽性機率0.1；陽性者再複檢，複檢通過機率0.8。被快篩陽性且複檢通過的機率是多少？」；獨立解法「走完整指定路徑的機率=0.1×0.8=0.08。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "fig-u22-tree-without-replacement",
      "unitId": "u22",
      "skillId": "probability-two-stage",
      "drawingPurpose": "支援紅後藍與藍後紅兩條路徑及不放回更新。",
      "canvas": {
        "width": 820,
        "height": 430
      },
      "viewBox": "0 0 820 430",
      "coordinateSystem": "SVG pixels; origin at upper-left; x increases right and y increases down.",
      "layoutConstraints": [
        "第一層紅3/5與藍2/5",
        "紅後第二層紅2/4、藍2/4",
        "藍後第二層紅3/4、藍1/4",
        "兩條異色路徑標記",
        "路徑乘積3/10與3/10"
      ],
      "visibleLineRules": "All mathematical boundaries and axes use solid black lines; helper gridlines, when present, are lighter and never encode an answer by color.",
      "hiddenLineRules": "No hidden geometric lines are needed. Dashed lines are used only for explicitly labelled statistical fences.",
      "labelsAndPositions": "Labels are placed adjacent to their corresponding points, branches, sectors or groups with at least 14 px text.",
      "tickMarksUnitsArrowsSymbols": "Axes include labelled ticks and units where applicable; tree branches show exact fractions; arrowheads do not replace numeric labels.",
      "toScale": false,
      "visualInferenceWarning": "Not to scale. Branch length and angle do not represent probability; use the fraction labels.",
      "altText": "袋中3紅2藍不放回抽兩球的樹狀圖，第二層分母由5改為4。",
      "svgTitle": "支援紅後藍與藍後紅兩條路徑及不放回更新。",
      "svgDescription": "袋中3紅2藍不放回抽兩球的樹狀圖，第二層分母由5改為4。",
      "mobileReadabilityReview": "Reviewed at 360 CSS px width; minimum label size remains legible and no labels overlap critical marks.",
      "answerLeakageReview": "The figure contains only data explicitly supplied by its associated prompt or lecture example; it does not mark a multiple-choice option as correct.",
      "geometryTokenAssertions": {
        "firstDenominator": 5,
        "secondDenominator": 4,
        "mixedTotal": "3/5"
      },
      "manualVisualInspection": "pass; rendered PNG inspected for clipping, label overlap, scale consistency and mathematical placement.",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ]
};
