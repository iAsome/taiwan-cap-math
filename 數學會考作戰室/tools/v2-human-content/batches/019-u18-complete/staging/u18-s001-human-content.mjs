// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s001";

export const SKILL_ID = "continued-ratio";

export const LECTURE = {
  "lectureId": "u18-s001-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-ratio",
  "skillId": "continued-ratio",
  "lockedSkillOrder": 1,
  "lockedSkillTitle": "連比化簡",
  "title": "連比化簡：把三個以上的量放在同一把尺上",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能說明連比 a:b:c 表示三個同類量的相對倍數。",
    "能以最大公因數化簡整數連比。",
    "能先消去分數或小數，再把連比化成最簡整數比。",
    "能檢查化簡前後各項是否乘除同一個正數。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "foundational-ratio-arithmetic",
        "title": "國小分數、小數與比的基礎",
        "requiredLevel": "能進行正數的乘除、分數與小數互換，並知道比的前後順序不能任意交換。"
      }
    ],
    "bridgeExplanation": "本節從比、分數與小數的基礎開始，不假設學生已學過連比。"
  },
  "glossary": [
    {
      "term": "連比",
      "definition": "把三個以上同類量依固定順序寫成的比，例如 a:b:c。"
    },
    {
      "term": "最簡整數比",
      "definition": "各項都是正整數，且所有項的最大公因數為 1 的連比。"
    },
    {
      "term": "同比例放大或縮小",
      "definition": "所有項同乘或同除一個不為 0 的數，連比所表示的關係不變。"
    },
    {
      "term": "公分母",
      "definition": "能同時成為多個分母倍數的數，用來消去分數。"
    }
  ],
  "notation": [
    {
      "symbol": "a:b:c",
      "meaning": "第一量、第二量、第三量依序比較；順序不可任意交換。"
    },
    {
      "symbol": "ka:kb:kc",
      "meaning": "當 k>0 時，與 a:b:c 表示同一個連比。"
    },
    {
      "symbol": "a/b",
      "meaning": "分數項；化簡連比時可先乘所有分母的最小公倍數。"
    }
  ],
  "conceptNarrative": [
    "兩個量的比只比較一對量；連比則把三個以上的量放在同一個倍數系統中。2:3:5 可理解為三個量分別是同一基本單位的 2 倍、3 倍、5 倍。",
    "化簡的核心不是逐項隨意約分，而是所有項必須同時乘或除同一個數。若只改其中一項，原本的相對關係就被破壞。",
    "遇到分數連比，先乘公分母；遇到有限小數，先乘 10、100 等把各項化成整數，再找所有項的最大公因數。",
    "連比一般以正量為主；若情境允許 0，需特別說明 0 項的意義。分母不能為 0，且用於分配時各項通常須為正。"
  ],
  "formalDefinitions": [
    {
      "name": "連比相等",
      "statement": "若存在正數 k，使得 d=ka、e=kb、f=kc，則 a:b:c=d:e:f。"
    },
    {
      "name": "最簡連比",
      "statement": "整數連比中各項最大公因數為 1，且各項順序與原題一致。"
    }
  ],
  "formulas": [
    {
      "formula": "a:b:c = ka:kb:kc（k>0）",
      "conditions": [
        "所有項同乘同一正數",
        "項目順序不變"
      ],
      "meaning": "同比例放大不改變連比。"
    },
    {
      "formula": "分數連比 × 各分母的最小公倍數",
      "conditions": [
        "先確認每個分母不為 0"
      ],
      "meaning": "把分數項同時化成整數。"
    }
  ],
  "nonApplicableCases": [
    "不能把 6:9:15 分別用不同除數處理成 2:3:5；正確做法是三項同除 3。",
    "不能把 0.2:0.3:0.5 只把第一項乘 10。",
    "連比中的順序有意義，2:3:5 不等於 3:2:5。",
    "若三個量單位不同，必須先統一單位再寫連比。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "確認比較的是哪些量與順序。",
      "check": "題目要求 A:B:C 還是其他順序？"
    },
    {
      "step": 2,
      "instruction": "先統一單位。",
      "check": "公尺、公分或公斤、公克是否混用？"
    },
    {
      "step": 3,
      "instruction": "消去分數或小數，使所有項成為整數。",
      "check": "是否所有項同乘同一數？"
    },
    {
      "step": 4,
      "instruction": "找全部項的最大公因數並同除。",
      "check": "最後各項最大公因數是否為 1？"
    },
    {
      "step": 5,
      "instruction": "用倍數回查原連比。",
      "check": "化簡後能否同乘同一數還原？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "化簡 18:30:42。",
      "solutionSteps": [
        "三項最大公因數是 6。",
        "三項同除 6，得 3:5:7。",
        "3、5、7 沒有共同因數。"
      ],
      "answer": "3:5:7"
    },
    {
      "exampleId": "L2",
      "prompt": "化簡 1/2:3/4:5/6。",
      "solutionSteps": [
        "分母 2、4、6 的最小公倍數是 12。",
        "三項同乘 12，得 6:9:10。",
        "6、9、10 的最大公因數為 1。"
      ],
      "answer": "6:9:10"
    },
    {
      "exampleId": "L3",
      "prompt": "化簡 0.45:0.6:1.05。",
      "solutionSteps": [
        "三項同乘 100，得 45:60:105。",
        "最大公因數是 15。",
        "同除 15，得 3:4:7。"
      ],
      "answer": "3:4:7"
    },
    {
      "exampleId": "L4",
      "prompt": "判斷 4:6:10 與 10:15:25 是否相等。",
      "solutionSteps": [
        "4:6:10 化簡為 2:3:5。",
        "10:15:25 化簡也為 2:3:5。",
        "兩者可由同一最簡連比表示。"
      ],
      "answer": "相等"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只約掉相鄰兩項的公因數。",
      "why": "把連比誤當成兩個互不相關的比。",
      "correction": "找全部項共同的因數，三項同除。"
    },
    {
      "mistake": "消小數時各項乘不同倍數。",
      "why": "只想把每一項各自變整數。",
      "correction": "選同一個 10 的次方同乘所有項。"
    },
    {
      "mistake": "化簡後交換項目順序。",
      "why": "忽略連比對應的對象。",
      "correction": "從題目抄下 A:B:C 的順序，答案沿用。"
    },
    {
      "mistake": "不同單位直接相比。",
      "why": "只看數字。",
      "correction": "先把所有量換成同一單位。"
    },
    {
      "mistake": "把 2:3:5 解讀成總共 5 份。",
      "why": "把最後一項誤當總份數。",
      "correction": "總份數是 2+3+5=10。"
    }
  ],
  "selfCheck": [
    "所有量的單位一致嗎？",
    "我是否同時處理所有項？",
    "最終各項是否為整數？",
    "所有項的最大公因數是否為 1？",
    "順序是否與題目一致？"
  ],
  "summary": [
    "連比比較三個以上同類量的相對倍數。",
    "化簡必須所有項同乘或同除同一數。",
    "分數先乘公分母，小數先乘 10 的次方。",
    "最簡整數比的全部項最大公因數為 1。"
  ],
  "connections": {
    "previous": "承接分數、小數與比的基本運算。",
    "next": [
      "下一技能會把連比用於分配與求實際量。",
      "比例線段會把同一倍數關係搬到幾何圖形。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s001-v001",
      "u18-s001-v002",
      "u18-s001-v003",
      "u18-s001-v004",
      "u18-s001-v005",
      "u18-s001-v006",
      "u18-s001-v007",
      "u18-s001-v008",
      "u18-s001-v009",
      "u18-s001-v010",
      "u18-s001-v011",
      "u18-s001-v012"
    ],
    "constructedResponseIds": [
      "u18-s001-cr001",
      "u18-s001-cr002"
    ]
  },
  "lectureReview": {
    "reviewVersion": "human-lecture-review-r1.0",
    "reviewedAt": "2026-07-12",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capScopeCheck": "pass",
    "symbolDefinitionsComplete": true,
    "invalidUseCasesIncluded": true,
    "examplesIndividuallyChosen": true,
    "reviewNote": "逐項檢查整數、分數與小數三種化簡流程；特別確認沒有把連比分拆成互不相干的兩個比，並明示單位與順序限制。"
  },
  "contentSha256": "2f41d53140086698b4d2ad7cfa1d84a9efc78428e9ee2630e1c65169dc4cb8c3"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s001-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "將 24:36:60 化成最簡整數連比，結果為何？",
    "text": "將 24:36:60 化成最簡整數連比，結果為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "2:3:5",
      "4:6:10",
      "2:3:10",
      "3:4:5"
    ],
    "answerIndex": 0,
    "independentSolution": "直接計算 24÷12=2、36÷12=3、60÷12=5，因此最簡比是 2:3:5。",
    "explanation": "24、36、60 的最大公因數是 12，三項同除 12 得 2:3:5。",
    "steps": [
      "求三項最大公因數 12。",
      "所有項同除 12。",
      "確認 2、3、5 的最大公因數為 1。"
    ],
    "optionAnalysis": [
      {
        "choice": "2:3:5",
        "truth": true,
        "reason": "依獨立推導可得到 2:3:5，符合所有已知條件。"
      },
      {
        "choice": "4:6:10",
        "truth": false,
        "reason": "三項仍可同除 2，尚未最簡。"
      },
      {
        "choice": "2:3:10",
        "truth": false,
        "reason": "第三項沒有與前兩項同除相同數。"
      },
      {
        "choice": "3:4:5",
        "truth": false,
        "reason": "24、36、60 並不是同一倍數的 3、4、5。"
      }
    ],
    "misconceptionTarget": "只約去部分公因數，或每項使用不同除數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "只需整數最大公因數與同比縮小，屬基本技能。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "22a006597472879da1005b74210e8a7a683d1247435f7379cad9855349c46425"
  },
  {
    "questionId": "u18-s001-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "化簡 1/3:1/2:5/6，最簡整數連比為何？",
    "text": "化簡 1/3:1/2:5/6，最簡整數連比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "1:1:5",
      "2:3:5",
      "3:2:6",
      "4:6:10"
    ],
    "answerIndex": 1,
    "independentSolution": "把每項乘 6：1/3×6=2、1/2×6=3、5/6×6=5，故為 2:3:5。",
    "explanation": "分母 3、2、6 的最小公倍數是 6；三項同乘 6 得 2:3:5。",
    "steps": [
      "找公分母 6。",
      "三項同乘 6。",
      "確認所得整數比已最簡。"
    ],
    "optionAnalysis": [
      {
        "choice": "1:1:5",
        "truth": false,
        "reason": "把不同分母忽略，未乘公分母。"
      },
      {
        "choice": "2:3:5",
        "truth": true,
        "reason": "依獨立推導可得到 2:3:5，符合所有已知條件。"
      },
      {
        "choice": "3:2:6",
        "truth": false,
        "reason": "把分母直接當成比的項。"
      },
      {
        "choice": "4:6:10",
        "truth": false,
        "reason": "雖等值但三項仍可同除 2，不是最簡。"
      }
    ],
    "misconceptionTarget": "只處理分母，沒有讓所有項同乘同一公分母。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需要消去簡單分母，但步驟仍單一。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b880e2512669e52604d9d6fb1927f099c22bab1744d2dd176a2a86c80bbb71f2"
  },
  {
    "questionId": "u18-s001-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "把 0.18:0.27:0.45 同乘 100 得 18:27:45 後，還需完成哪個最簡整數連比？",
    "text": "把 0.18:0.27:0.45 同乘 100 得 18:27:45 後，還需完成哪個最簡整數連比？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "18:27:45",
      "6:9:15",
      "2:3:5",
      "2:3:45"
    ],
    "answerIndex": 2,
    "independentSolution": "0.18、0.27、0.45 分別是 0.09 的 2、3、5 倍，所以最簡比為 2:3:5。",
    "explanation": "先同乘 100 得 18:27:45，再同除最大公因數 9，得到 2:3:5。",
    "steps": [
      "同乘 100 消去小數。",
      "找 18、27、45 的最大公因數 9。",
      "三項同除 9。"
    ],
    "optionAnalysis": [
      {
        "choice": "18:27:45",
        "truth": false,
        "reason": "只消去小數，未再約去公因數 9。"
      },
      {
        "choice": "6:9:15",
        "truth": false,
        "reason": "仍可同除 3。"
      },
      {
        "choice": "2:3:5",
        "truth": true,
        "reason": "依獨立推導可得到 2:3:5，符合所有已知條件。"
      },
      {
        "choice": "2:3:45",
        "truth": false,
        "reason": "只化簡前兩項，破壞原連比。"
      }
    ],
    "misconceptionTarget": "消小數後未繼續化簡，或只處理部分項。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "結合小數轉整數與最大公因數兩個基本步驟。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d0292e67dea6a4550118ec6605fbf6c2f0568b1f7d43ce18852032b7c3a83ef8"
  },
  {
    "questionId": "u18-s001-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "下列哪一個連比與 6:9:15 相等？",
    "text": "下列哪一個連比與 6:9:15 相等？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "12:18:25",
      "18:24:45",
      "8:12:18",
      "14:21:35"
    ],
    "answerIndex": 3,
    "independentSolution": "原比三項同除 3 得 2:3:5；只有 14:21:35 可三項同除 7 得相同結果。",
    "explanation": "6:9:15 化簡為 2:3:5；14:21:35 也同除 7 得 2:3:5。",
    "steps": [
      "先化簡原連比。",
      "逐一化簡選項。",
      "比較最簡形式。"
    ],
    "optionAnalysis": [
      {
        "choice": "12:18:25",
        "truth": false,
        "reason": "第三項若同乘 2 應為 30，不是 25。"
      },
      {
        "choice": "18:24:45",
        "truth": false,
        "reason": "前兩項比 3:4，不等於 2:3。"
      },
      {
        "choice": "8:12:18",
        "truth": false,
        "reason": "化簡為 4:6:9，不等於 2:3:5。"
      },
      {
        "choice": "14:21:35",
        "truth": true,
        "reason": "依獨立推導可得到 14:21:35，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "只比其中兩項，沒有核對第三項。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需要同時驗證三組對應項，而非直接做一次計算。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "dfedccfdad246b1302895612734af69aba2287d7757b9d9893054d0819a6beef"
  },
  {
    "questionId": "u18-s001-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 6:9:15=10:x:25，則 x 為何？",
    "text": "若 6:9:15=10:x:25，則 x 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "12",
      "15",
      "18",
      "22.5"
    ],
    "answerIndex": 1,
    "independentSolution": "從第三項也可得倍率 25÷15=5/3，因此中項應為 9×5/3=15。",
    "explanation": "第一項與第三項都由原比乘 5/3，所以 x=9×5/3=15。",
    "steps": [
      "求共同倍率 10÷6=5/3。",
      "用同一倍率乘中項 9。",
      "以 25÷15=5/3 回查。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "由 6 到 10 的倍率不是 2，不能把 9 乘 4/3。"
      },
      {
        "choice": "15",
        "truth": true,
        "reason": "依獨立推導可得到 15，符合所有已知條件。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "誤把 6 到 10 看成加 4，對中項也加 9。"
      },
      {
        "choice": "22.5",
        "truth": false,
        "reason": "使用了 15 到 25 的倍率後又重複乘一次。"
      }
    ],
    "misconceptionTarget": "把連比視為各項可用不同的加法變化。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "必須辨認等值連比的共同倍率。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b1137987dd731dc9c13eb557f31c51c57f98c8a22bab9a0933149bddd5234f4b"
  },
  {
    "questionId": "u18-s001-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "1.2 公尺:90 公分:0.6 公尺化成最簡整數連比為何？",
    "text": "1.2 公尺:90 公分:0.6 公尺化成最簡整數連比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "12:90:6",
      "2:3:1",
      "4:3:2",
      "120:90:60"
    ],
    "answerIndex": 2,
    "independentSolution": "三量換成公分後是 120、90、60；最大公因數 30，故比為 4:3:2。",
    "explanation": "統一成公分為 120:90:60，再同除 30 得 4:3:2。",
    "steps": [
      "把 1.2 公尺換成 120 公分。",
      "把 0.6 公尺換成 60 公分。",
      "化簡 120:90:60。"
    ],
    "optionAnalysis": [
      {
        "choice": "12:90:6",
        "truth": false,
        "reason": "直接取數字，沒有統一公尺與公分。"
      },
      {
        "choice": "2:3:1",
        "truth": false,
        "reason": "雖看似約分，但 1.2 公尺不是 60 公分的 2 倍。"
      },
      {
        "choice": "4:3:2",
        "truth": true,
        "reason": "依獨立推導可得到 4:3:2，符合所有已知條件。"
      },
      {
        "choice": "120:90:60",
        "truth": false,
        "reason": "單位已統一，但仍可同除 30。"
      }
    ],
    "misconceptionTarget": "忽略單位，直接比較表面數字。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "所有長度先換成公分；答案為無單位連比，不需四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "同時考單位換算與連比化簡。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "aa250ba022fda19e9e7c987765121afe84823405b8e21e43c55bcb4393189460"
  },
  {
    "questionId": "u18-s001-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "已知 a:b:c=18:30:42，將它化成最簡比後，三項總和為何？",
    "text": "已知 a:b:c=18:30:42，將它化成最簡比後，三項總和為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "90",
      "30",
      "7",
      "15"
    ],
    "answerIndex": 3,
    "independentSolution": "最大公因數為 6，最簡份數依序是 3、5、7，所以總份數 15。",
    "explanation": "18:30:42 同除 6 得 3:5:7，三項總和為 3+5+7=15。",
    "steps": [
      "找最大公因數 6。",
      "化簡為 3:5:7。",
      "相加得 15。"
    ],
    "optionAnalysis": [
      {
        "choice": "90",
        "truth": false,
        "reason": "把原三項直接相加，沒有依題意先化簡。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "只除以 3，得到 6+10+14。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "只取化簡後的最後一項。"
      },
      {
        "choice": "15",
        "truth": true,
        "reason": "依獨立推導可得到 15，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把原數值總和誤當最簡份數總和。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 90,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需先化簡再進行第二步資訊擷取。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5e7329e859f8f788c677b67c498edf08a3078f4b027ce43ac5408be8dacb0883"
  },
  {
    "questionId": "u18-s001-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "下列哪個操作一定不改變非零連比 a:b:c 的值？",
    "text": "下列哪個操作一定不改變非零連比 a:b:c 的值？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "三項同乘 7",
      "第一項乘 7，另外兩項不變",
      "三項分別加 7",
      "交換第一項與第二項"
    ],
    "answerIndex": 0,
    "independentSolution": "令 a:b:c=2:3:5 測試，只有三項同乘 7 仍化回 2:3:5。",
    "explanation": "等值連比要求所有項同乘或同除同一個非零數；三項同乘 7 符合。",
    "steps": [
      "回想連比相等的定義。",
      "檢查每個操作是否使用同一乘數。",
      "排除加法與換序。"
    ],
    "optionAnalysis": [
      {
        "choice": "三項同乘 7",
        "truth": true,
        "reason": "依獨立推導可得到 三項同乘 7，符合所有已知條件。"
      },
      {
        "choice": "第一項乘 7，另外兩項不變",
        "truth": false,
        "reason": "只改一項會改變相對倍數。"
      },
      {
        "choice": "三項分別加 7",
        "truth": false,
        "reason": "加法不是等比例伸縮。"
      },
      {
        "choice": "交換第一項與第二項",
        "truth": false,
        "reason": "順序改變會改變對應關係。"
      }
    ],
    "misconceptionTarget": "把同加一數誤認為同比例放大。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題目限定 a、b、c 均非零，避免除法與零項造成額外討論。",
    "difficultyReason": "考連比不變性的概念判斷，而非單純算術。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8610cf609a02856cb503a93c404ff5aa698dbbf6469f1f714ef2ec7a32d3fd2a"
  },
  {
    "questionId": "u18-s001-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 p:q:r=3/4:5/6:7/8，則最簡整數連比中第二項與第一項的差為何？",
    "text": "若 p:q:r=3/4:5/6:7/8，則最簡整數連比中第二項與第一項的差為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "1",
      "5",
      "2",
      "1/12"
    ],
    "answerIndex": 2,
    "independentSolution": "以 24 同乘後得到 18、20、21；第二項減第一項是 2。",
    "explanation": "分母 4、6、8 的最小公倍數為 24；同乘得 18:20:21，第二項與第一項差 2。但此比最大公因數為 1，因此差應為 2。",
    "steps": [
      "乘公分母 24 得 18:20:21。",
      "確認三項最大公因數為 1。",
      "計算 20-18=2。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "把 20-18 誤算成 1。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "把第二項本身當作差。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "依獨立推導可得到 2，符合所有已知條件。"
      },
      {
        "choice": "1/12",
        "truth": false,
        "reason": "停留在原分數差，未依連比份數作答。"
      }
    ],
    "misconceptionTarget": "誤把原分數的差直接視為最簡份數差。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 120,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需要分數公分母與後續份數差的多步推理。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "afe88261842d747cdd54eb84c45630af4765982233e46136ee3a4e8cafa2d4a9"
  },
  {
    "questionId": "u18-s001-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "飲料店以濃縮液、糖漿、水的體積比 0.24:0.18:1.08 調製一桶飲料。若要把配方寫成最簡整數連比，應為何？",
    "text": "飲料店以濃縮液、糖漿、水的體積比 0.24:0.18:1.08 調製一桶飲料。若要把配方寫成最簡整數連比，應為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "24:18:108",
      "4:3:6",
      "3:4:18",
      "4:3:18"
    ],
    "answerIndex": 3,
    "independentSolution": "0.24、0.18、1.08 都可除以 0.06，所得份數依序為 4、3、18。",
    "explanation": "三項同乘 100 得 24:18:108，再同除 6 得 4:3:18。",
    "steps": [
      "確認順序為濃縮液:糖漿:水。",
      "同乘 100。",
      "同除最大公因數 6。"
    ],
    "optionAnalysis": [
      {
        "choice": "24:18:108",
        "truth": false,
        "reason": "只消去小數，尚可同除 6。"
      },
      {
        "choice": "4:3:6",
        "truth": false,
        "reason": "把 1.08 誤看成 0.36 的 6 倍。"
      },
      {
        "choice": "3:4:18",
        "truth": false,
        "reason": "交換了濃縮液與糖漿的順序。"
      },
      {
        "choice": "4:3:18",
        "truth": true,
        "reason": "依獨立推導可得到 4:3:18，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "情境中量名順序與數值順序交換。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "三者皆為體積，單位相同；答案為無單位比。",
    "ambiguityAndBoundaryAudit": "題目明示配方順序，且三個數值均為正，不存在零份材料的解讀。",
    "difficultyReason": "需從真實配方資料保留材料順序並化簡小數連比。",
    "literacyContextNecessity": "配方的三種材料順序決定實際調製比例，若交換會改變味道，因此情境不可刪除。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e7e07b5f30dacbfe85290c88b71738cb0f30c8513d8df2f9461ba2f09b351b1d"
  },
  {
    "questionId": "u18-s001-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "攝影師將三段影片的原始長度記為 2 分 30 秒、3 分 45 秒、5 分鐘。三段長度的最簡連比為何？",
    "text": "攝影師將三段影片的原始長度記為 2 分 30 秒、3 分 45 秒、5 分鐘。三段長度的最簡連比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "2:3:4",
      "30:45:5",
      "5:15:20",
      "10:15:20"
    ],
    "answerIndex": 0,
    "independentSolution": "2 分 30 秒=150 秒、3 分 45 秒=225 秒、5 分=300 秒；比值化簡為 2:3:4。",
    "explanation": "換成秒為 150:225:300，三項同除 75 得 2:3:4。",
    "steps": [
      "把每段都換成秒。",
      "列出 150:225:300。",
      "同除最大公因數 75。"
    ],
    "optionAnalysis": [
      {
        "choice": "2:3:4",
        "truth": true,
        "reason": "依獨立推導可得到 2:3:4，符合所有已知條件。"
      },
      {
        "choice": "30:45:5",
        "truth": false,
        "reason": "前兩段用秒的餘數，第三段用分鐘，單位不一致。"
      },
      {
        "choice": "5:15:20",
        "truth": false,
        "reason": "把 2 分 30 秒誤算成 5 個 30 秒但第二段換算錯。"
      },
      {
        "choice": "10:15:20",
        "truth": false,
        "reason": "等值於 2:3:4，但尚可同除 5。"
      }
    ],
    "misconceptionTarget": "混用分與秒，或只取秒數的餘數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "全部換成秒後比較；答案為無單位比。",
    "ambiguityAndBoundaryAudit": "『2 分 30 秒』按時間複合單位解讀，不是小數 2.30 分鐘。",
    "difficultyReason": "結合複合時間單位換算與連比化簡。",
    "literacyContextNecessity": "影片剪輯必須比較完整播放時間，分與秒的混合表示是情境核心。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7daec7920c2528ffd98dc2f31cb5590abe0514fe2928bd4d221beb33cadd3771"
  },
  {
    "questionId": "u18-s001-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "某實驗需依序加入 A、B、C 三種溶液，標示量為 250 mL、0.4 L、3/5 L。若保持順序，最簡連比為何？",
    "text": "某實驗需依序加入 A、B、C 三種溶液，標示量為 250 mL、0.4 L、3/5 L。若保持順序，最簡連比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "250:4:3",
      "5:8:12",
      "5:8:3",
      "12:8:5"
    ],
    "answerIndex": 1,
    "independentSolution": "全部以毫升表示後為 250、400、600；共同除數 50，得 5:8:12。",
    "explanation": "統一成毫升為 250:400:600，三項同除 50 得 5:8:12。",
    "steps": [
      "0.4 L=400 mL。",
      "3/5 L=600 mL。",
      "化簡 250:400:600。"
    ],
    "optionAnalysis": [
      {
        "choice": "250:4:3",
        "truth": false,
        "reason": "直接混用 mL、L 與分數。"
      },
      {
        "choice": "5:8:12",
        "truth": true,
        "reason": "依獨立推導可得到 5:8:12，符合所有已知條件。"
      },
      {
        "choice": "5:8:3",
        "truth": false,
        "reason": "把 3/5 L 錯換成 150 mL。"
      },
      {
        "choice": "12:8:5",
        "truth": false,
        "reason": "把三種溶液順序倒轉。"
      }
    ],
    "misconceptionTarget": "單位換算錯誤或把加入順序顛倒。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "1 L=1000 mL；答案為無單位連比。",
    "ambiguityAndBoundaryAudit": "三種溶液均以體積比較，沒有質量濃度或混合後體積收縮的額外因素。",
    "difficultyReason": "同時處理 mL、L、分數與材料順序，屬素養整合。",
    "literacyContextNecessity": "化學配方中加入物質的對應順序與容量單位都會影響實際配製，情境不可省略。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "902a502176eb08568db7ecfa369c7a66211c84bcea11d8f47ccd1cc7741b230e"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s001-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "itemType": "constructed-response",
    "prompt": "將 0.75：1.2：2又1/4 化成最簡整數連比，並說明每一步為何不改變比值。",
    "requiredWork": "必須先把三項改寫成可共同放大的數，再約成最簡整數比。",
    "standardSolution": "0.75=3/4，1.2=6/5，2又1/4=9/4。三項同乘 20 得 15：24：45，再同除以 3，最簡為 5：8：15。",
    "alternativeMethod": "也可先全化成小數 0.75：1.2：2.25，同乘 100 得 75：120：225，再除以 15 得 5：8：15。",
    "reasoningSteps": [
      "把小數與帶分數化成分數。",
      "取分母 4、5、4 的公倍數 20，同乘三項。",
      "以三項最大公因數 3 約分。",
      "檢查 5、8、15 沒有共同因數。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確得到 5：8：15，並清楚說明同乘與同除同一非零數不改變連比。"
      },
      {
        "score": 2,
        "criteria": "方法正確且得到 15：24：45，但未約到最簡；或僅有一個輕微計算錯誤。"
      },
      {
        "score": 1,
        "criteria": "能指出要三項同乘同除，但未完成有效計算。"
      },
      {
        "score": 0,
        "criteria": "沒有呈現可辨識的相關比例或相似推理，或答案與過程均無法支持題目要求。"
      }
    ],
    "partialCreditRules": [
      "比例式或相似判定正確但後續算術錯誤，可依已完成的關鍵步驟給 2 分。",
      "只有正確公式但沒有把題目數據正確代入，通常給 1 分。"
    ],
    "followThroughPolicy": "若早期僅有單一算術錯誤，後續使用該錯誤值的推理一致且方法正確，保留後續方法分；不得因錯誤值巧合得到正確答案而補足滿分。",
    "unitAndNotationRules": "連比沒有單位；答案必須使用最簡整數比。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "獨立以分數法與小數法驗算，兩法都得到 5：8：15；已確認同乘 20 後的整數與最大公因數。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "6314e0fcb3f848e9d01579ac0a9335307c455d849a48865af387c915c2c1b3a6"
  },
  {
    "questionId": "u18-s001-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio",
    "lockedSkillOrder": 1,
    "itemType": "constructed-response",
    "prompt": "已知 a：b：c=7：12：15，且 b=36。求 a、c，並驗證所得三數仍符合原連比。",
    "requiredWork": "以共同倍數表示三數，計算後必須用兩組比值驗證。",
    "standardSolution": "設 a=7k、b=12k、c=15k。由 12k=36 得 k=3，所以 a=21、c=45。驗證 21：36：45 同除以 3 為 7：12：15。",
    "alternativeMethod": "由 b=36 對應 12 份，先求每份 3，再直接算 7份與15份。",
    "reasoningSteps": [
      "設共同倍數 k。",
      "由 b 的對應份數求 k=3。",
      "求 a=21、c=45。",
      "化簡結果驗證。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確設 k、求出 21 與 45，並完成連比驗證。"
      },
      {
        "score": 2,
        "criteria": "求值正確但未驗證；或設式正確但一項有算術錯誤。"
      },
      {
        "score": 1,
        "criteria": "只寫出 a=7k、b=12k、c=15k 或只求出 k。"
      },
      {
        "score": 0,
        "criteria": "沒有呈現可辨識的相關比例或相似推理，或答案與過程均無法支持題目要求。"
      }
    ],
    "partialCreditRules": [
      "比例式或相似判定正確但後續算術錯誤，可依已完成的關鍵步驟給 2 分。",
      "只有正確公式但沒有把題目數據正確代入，通常給 1 分。"
    ],
    "followThroughPolicy": "若早期僅有單一算術錯誤，後續使用該錯誤值的推理一致且方法正確，保留後續方法分；不得因錯誤值巧合得到正確答案而補足滿分。",
    "unitAndNotationRules": "a、b、c 為純數，無需單位；連比順序不可改變。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "以共同倍數與每份量兩法核對，21：36：45=7：12：15。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "0a28170a3088b41468ffdfc2cb69fbd1224be09d0dabbb278b015d1c6f78eb2a"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s001-v001-semantic-review-r1",
    "questionId": "u18-s001-v001",
    "unitId": "u18",
    "skillId": "continued-ratio",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "22a006597472879da1005b74210e8a7a683d1247435f7379cad9855349c46425",
    "independentSolution": "直接計算 24÷12=2、36÷12=3、60÷12=5，因此最簡比是 2:3:5。",
    "derivedAnswer": "2:3:5",
    "storedAnswer": "2:3:5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比化簡」概念，未要求高中延伸。"
    },
    "difficultyReason": "只需整數最大公因數與同比縮小，屬基本技能。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：直接計算 24÷12=2、36÷12=3、60÷12=5，因此最簡比是 2:3:5。 四個選項逐一核對後，只有「2:3:5」符合；主要排除點是「只約去部分公因數，或每項使用不同除數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s001-v002-semantic-review-r1",
    "questionId": "u18-s001-v002",
    "unitId": "u18",
    "skillId": "continued-ratio",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "b880e2512669e52604d9d6fb1927f099c22bab1744d2dd176a2a86c80bbb71f2",
    "independentSolution": "把每項乘 6：1/3×6=2、1/2×6=3、5/6×6=5，故為 2:3:5。",
    "derivedAnswer": "2:3:5",
    "storedAnswer": "2:3:5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比化簡」概念，未要求高中延伸。"
    },
    "difficultyReason": "需要消去簡單分母，但步驟仍單一。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：把每項乘 6：1/3×6=2、1/2×6=3、5/6×6=5，故為 2:3:5。 四個選項逐一核對後，只有「2:3:5」符合；主要排除點是「只處理分母，沒有讓所有項同乘同一公分母。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s001-v003-semantic-review-r1",
    "questionId": "u18-s001-v003",
    "unitId": "u18",
    "skillId": "continued-ratio",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "d0292e67dea6a4550118ec6605fbf6c2f0568b1f7d43ce18852032b7c3a83ef8",
    "independentSolution": "0.18、0.27、0.45 分別是 0.09 的 2、3、5 倍，所以最簡比為 2:3:5。",
    "derivedAnswer": "2:3:5",
    "storedAnswer": "2:3:5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比化簡」概念，未要求高中延伸。"
    },
    "difficultyReason": "結合小數轉整數與最大公因數兩個基本步驟。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：0.18、0.27、0.45 分別是 0.09 的 2、3、5 倍，所以最簡比為 2:3:5。 四個選項逐一核對後，只有「2:3:5」符合；主要排除點是「消小數後未繼續化簡，或只處理部分項。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s001-v004-semantic-review-r1",
    "questionId": "u18-s001-v004",
    "unitId": "u18",
    "skillId": "continued-ratio",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "dfedccfdad246b1302895612734af69aba2287d7757b9d9893054d0819a6beef",
    "independentSolution": "原比三項同除 3 得 2:3:5；只有 14:21:35 可三項同除 7 得相同結果。",
    "derivedAnswer": "14:21:35",
    "storedAnswer": "14:21:35",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比化簡」概念，未要求高中延伸。"
    },
    "difficultyReason": "需要同時驗證三組對應項，而非直接做一次計算。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：原比三項同除 3 得 2:3:5；只有 14:21:35 可三項同除 7 得相同結果。 四個選項逐一核對後，只有「14:21:35」符合；主要排除點是「只比其中兩項，沒有核對第三項。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s001-v005-semantic-review-r1",
    "questionId": "u18-s001-v005",
    "unitId": "u18",
    "skillId": "continued-ratio",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "b1137987dd731dc9c13eb557f31c51c57f98c8a22bab9a0933149bddd5234f4b",
    "independentSolution": "從第三項也可得倍率 25÷15=5/3，因此中項應為 9×5/3=15。",
    "derivedAnswer": "15",
    "storedAnswer": "15",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比化簡」概念，未要求高中延伸。"
    },
    "difficultyReason": "必須辨認等值連比的共同倍率。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：從第三項也可得倍率 25÷15=5/3，因此中項應為 9×5/3=15。 四個選項逐一核對後，只有「15」符合；主要排除點是「把連比視為各項可用不同的加法變化。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s001-v006-semantic-review-r1",
    "questionId": "u18-s001-v006",
    "unitId": "u18",
    "skillId": "continued-ratio",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "aa250ba022fda19e9e7c987765121afe84823405b8e21e43c55bcb4393189460",
    "independentSolution": "三量換成公分後是 120、90、60；最大公因數 30，故比為 4:3:2。",
    "derivedAnswer": "4:3:2",
    "storedAnswer": "4:3:2",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "所有長度先換成公分；答案為無單位連比，不需四捨五入。",
      "scope": "只使用國中會考範圍內的「連比化簡」概念，未要求高中延伸。"
    },
    "difficultyReason": "同時考單位換算與連比化簡。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：三量換成公分後是 120、90、60；最大公因數 30，故比為 4:3:2。 四個選項逐一核對後，只有「4:3:2」符合；主要排除點是「忽略單位，直接比較表面數字。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s001-v007-semantic-review-r1",
    "questionId": "u18-s001-v007",
    "unitId": "u18",
    "skillId": "continued-ratio",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "5e7329e859f8f788c677b67c498edf08a3078f4b027ce43ac5408be8dacb0883",
    "independentSolution": "最大公因數為 6，最簡份數依序是 3、5、7，所以總份數 15。",
    "derivedAnswer": "15",
    "storedAnswer": "15",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比化簡」概念，未要求高中延伸。"
    },
    "difficultyReason": "需先化簡再進行第二步資訊擷取。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：最大公因數為 6，最簡份數依序是 3、5、7，所以總份數 15。 四個選項逐一核對後，只有「15」符合；主要排除點是「把原數值總和誤當最簡份數總和。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s001-v008-semantic-review-r1",
    "questionId": "u18-s001-v008",
    "unitId": "u18",
    "skillId": "continued-ratio",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "8610cf609a02856cb503a93c404ff5aa698dbbf6469f1f714ef2ec7a32d3fd2a",
    "independentSolution": "令 a:b:c=2:3:5 測試，只有三項同乘 7 仍化回 2:3:5。",
    "derivedAnswer": "三項同乘 7",
    "storedAnswer": "三項同乘 7",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題目限定 a、b、c 均非零，避免除法與零項造成額外討論。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比化簡」概念，未要求高中延伸。"
    },
    "difficultyReason": "考連比不變性的概念判斷，而非單純算術。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：令 a:b:c=2:3:5 測試，只有三項同乘 7 仍化回 2:3:5。 四個選項逐一核對後，只有「三項同乘 7」符合；主要排除點是「把同加一數誤認為同比例放大。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s001-v009-semantic-review-r1",
    "questionId": "u18-s001-v009",
    "unitId": "u18",
    "skillId": "continued-ratio",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "afe88261842d747cdd54eb84c45630af4765982233e46136ee3a4e8cafa2d4a9",
    "independentSolution": "以 24 同乘後得到 18、20、21；第二項減第一項是 2。",
    "derivedAnswer": "2",
    "storedAnswer": "2",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比化簡」概念，未要求高中延伸。"
    },
    "difficultyReason": "需要分數公分母與後續份數差的多步推理。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：以 24 同乘後得到 18、20、21；第二項減第一項是 2。 四個選項逐一核對後，只有「2」符合；主要排除點是「誤把原分數的差直接視為最簡份數差。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s001-v010-semantic-review-r1",
    "questionId": "u18-s001-v010",
    "unitId": "u18",
    "skillId": "continued-ratio",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "e7e07b5f30dacbfe85290c88b71738cb0f30c8513d8df2f9461ba2f09b351b1d",
    "independentSolution": "0.24、0.18、1.08 都可除以 0.06，所得份數依序為 4、3、18。",
    "derivedAnswer": "4:3:18",
    "storedAnswer": "4:3:18",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題目明示配方順序，且三個數值均為正，不存在零份材料的解讀。",
      "units": "三者皆為體積，單位相同；答案為無單位比。",
      "scope": "只使用國中會考範圍內的「連比化簡」概念，未要求高中延伸。"
    },
    "difficultyReason": "需從真實配方資料保留材料順序並化簡小數連比。",
    "literacyNecessityReview": "配方的三種材料順序決定實際調製比例，若交換會改變味道，因此情境不可刪除。",
    "reviewerNote": "重新由已知條件獨立計算：0.24、0.18、1.08 都可除以 0.06，所得份數依序為 4、3、18。 四個選項逐一核對後，只有「4:3:18」符合；主要排除點是「情境中量名順序與數值順序交換。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s001-v011-semantic-review-r1",
    "questionId": "u18-s001-v011",
    "unitId": "u18",
    "skillId": "continued-ratio",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "7daec7920c2528ffd98dc2f31cb5590abe0514fe2928bd4d221beb33cadd3771",
    "independentSolution": "2 分 30 秒=150 秒、3 分 45 秒=225 秒、5 分=300 秒；比值化簡為 2:3:4。",
    "derivedAnswer": "2:3:4",
    "storedAnswer": "2:3:4",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "『2 分 30 秒』按時間複合單位解讀，不是小數 2.30 分鐘。",
      "units": "全部換成秒後比較；答案為無單位比。",
      "scope": "只使用國中會考範圍內的「連比化簡」概念，未要求高中延伸。"
    },
    "difficultyReason": "結合複合時間單位換算與連比化簡。",
    "literacyNecessityReview": "影片剪輯必須比較完整播放時間，分與秒的混合表示是情境核心。",
    "reviewerNote": "重新由已知條件獨立計算：2 分 30 秒=150 秒、3 分 45 秒=225 秒、5 分=300 秒；比值化簡為 2:3:4。 四個選項逐一核對後，只有「2:3:4」符合；主要排除點是「混用分與秒，或只取秒數的餘數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s001-v012-semantic-review-r1",
    "questionId": "u18-s001-v012",
    "unitId": "u18",
    "skillId": "continued-ratio",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "902a502176eb08568db7ecfa369c7a66211c84bcea11d8f47ccd1cc7741b230e",
    "independentSolution": "全部以毫升表示後為 250、400、600；共同除數 50，得 5:8:12。",
    "derivedAnswer": "5:8:12",
    "storedAnswer": "5:8:12",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "三種溶液均以體積比較，沒有質量濃度或混合後體積收縮的額外因素。",
      "units": "1 L=1000 mL；答案為無單位連比。",
      "scope": "只使用國中會考範圍內的「連比化簡」概念，未要求高中延伸。"
    },
    "difficultyReason": "同時處理 mL、L、分數與材料順序，屬素養整合。",
    "literacyNecessityReview": "化學配方中加入物質的對應順序與容量單位都會影響實際配製，情境不可省略。",
    "reviewerNote": "重新由已知條件獨立計算：全部以毫升表示後為 250、400、600；共同除數 50，得 5:8:12。 四個選項逐一核對後，只有「5:8:12」符合；主要排除點是「單位換算錯誤或把加入順序顛倒。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];

