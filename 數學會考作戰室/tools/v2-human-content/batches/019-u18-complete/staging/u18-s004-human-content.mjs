// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s004";

export const SKILL_ID = "continued-ratio-word";

export const LECTURE = {
  "lectureId": "u18-s004-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-ratio",
  "skillId": "continued-ratio-word",
  "lockedSkillOrder": 4,
  "lockedSkillTitle": "連比應用題",
  "title": "連比應用題：從文字關係建立同一套份數",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能從文字敘述辨認三個量及其順序。",
    "能把兩個相連的二項比合併成連比。",
    "能將百分比、倍數與差量轉為連比條件。",
    "能建立方程並檢查答案是否符合情境限制。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "proportion-segment",
        "title": "比例線段",
        "requiredLevel": "能運用「比例線段」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「比例線段」，先複習其核心判斷，再把方法推進到「連比應用題」。"
  },
  "glossary": [
    {
      "term": "相連比",
      "definition": "兩個比共享一個量，例如 A:B 與 B:C。"
    },
    {
      "term": "橋接量",
      "definition": "合併兩個比時共同出現、需要調成相同份數的量。"
    },
    {
      "term": "文字模型",
      "definition": "把語句轉成比、方程與單位的數學表示。"
    },
    {
      "term": "限制條件",
      "definition": "人數須為整數、長度為正、總量固定等情境要求。"
    }
  ],
  "notation": [
    {
      "symbol": "A:B=m:n，B:C=p:q",
      "meaning": "B 是橋接量，需先把 n 與 p 調成相同份數。"
    },
    {
      "symbol": "A=mk",
      "meaning": "A 由份數 m 與共同倍數 k 表示。"
    },
    {
      "symbol": "A 是 B 的 r 倍",
      "meaning": "A:B=r:1。"
    }
  ],
  "conceptNarrative": [
    "文字題先不要急著算。第一步是列出量名與順序，將『甲是乙的幾倍』『甲比乙多幾分之幾』等語句翻成比。",
    "合併 A:B 與 B:C 時，B 的份數必須相同。例如 A:B=2:3、B:C=4:5，將前比乘 4、後比乘 3，得 A:B:C=8:12:15。",
    "百分比敘述也可轉成比。若甲是乙的 120%，則甲:乙=120:100=6:5；若甲比乙多 20%，也是甲=1.2乙，仍為 6:5。",
    "建立連比後，再使用總和、差、已知部分或其他條件求共同倍數。每一步都要保留對象與單位。"
  ],
  "formalDefinitions": [
    {
      "name": "相連比合併",
      "statement": "A:B=m:n 且 B:C=p:q 時，以 n、p 的最小公倍數作橋接量，可得唯一的最簡 A:B:C。"
    },
    {
      "name": "百分比轉比",
      "statement": "A 是 B 的 r%，則 A:B=r:100，再化簡。"
    }
  ],
  "formulas": [
    {
      "formula": "A:B:C=mp:np:nq",
      "conditions": [
        "由 A:B=m:n 與 B:C=p:q 直接擴充時"
      ],
      "meaning": "一種保證橋接量相等的合併法，之後再化簡。"
    },
    {
      "formula": "A:B=(100+t):100",
      "conditions": [
        "A 比 B 多 t%"
      ],
      "meaning": "把增加百分比轉成比。"
    }
  ],
  "nonApplicableCases": [
    "兩個比沒有共同量，例如 A:B 與 C:D，不能直接合成三項連比。",
    "『甲比乙多 20%』不等於甲:乙=120:20。",
    "橋接量調整時，整個二項比都要同乘，不能只改共同項。",
    "題目若要求整數人數，算出分數代表資料可能不相容。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "列出所有量名與要求的連比順序。",
      "check": "是否把甲乙丙順序固定？"
    },
    {
      "step": 2,
      "instruction": "逐句翻成二項比或方程。",
      "check": "『比…多』的基準量是誰？"
    },
    {
      "step": 3,
      "instruction": "找橋接量並調成相同份數。",
      "check": "整個比是否一起放大？"
    },
    {
      "step": 4,
      "instruction": "合成最簡連比，再套額外條件。",
      "check": "總和或差對應哪幾份？"
    },
    {
      "step": 5,
      "instruction": "回到文字逐句驗證。",
      "check": "百分比、倍數、單位與整數限制都符合嗎？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "甲:乙=2:5，乙:丙=3:4，求甲:乙:丙。",
      "solutionSteps": [
        "乙份數 5 與 3 的最小公倍數是 15。",
        "前比乘 3 得 6:15；後比乘 5 得 15:20。",
        "合併為 6:15:20。"
      ],
      "answer": "6:15:20"
    },
    {
      "exampleId": "L2",
      "prompt": "甲比乙多 25%，乙:丙=2:3，求甲:乙:丙。",
      "solutionSteps": [
        "甲:乙=125:100=5:4。",
        "乙:丙=2:3，將後比乘 2 得 4:6。",
        "合併為 5:4:6。"
      ],
      "answer": "5:4:6"
    },
    {
      "exampleId": "L3",
      "prompt": "三班人數比由甲:乙=4:5、乙:丙=10:9 得到，總人數 138，求甲班。",
      "solutionSteps": [
        "把甲:乙 放大 2 倍得 8:10。",
        "連比為 8:10:9，總份數 27。",
        "每份 138÷27=46/9，不是整數，因此資料不可能代表整數人數。"
      ],
      "answer": "資料不相容，無整數解"
    },
    {
      "exampleId": "L4",
      "prompt": "A 是 B 的 3/2 倍，B 是 C 的 4/5，求 A:B:C。",
      "solutionSteps": [
        "A:B=3:2。",
        "B:C=4:5。",
        "把前比乘 2 得 6:4，合併為 6:4:5。"
      ],
      "answer": "6:4:5"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "橋接量不同就直接拼接。",
      "why": "把 2:5 與 3:4 寫成 2:5:4。",
      "correction": "先讓共同量的份數相同。"
    },
    {
      "mistake": "多 25% 寫成 25:100。",
      "why": "只取增加部分。",
      "correction": "原量 100% 加 25%，為 125:100。"
    },
    {
      "mistake": "只乘共同項。",
      "why": "忘記二項比需整體等比例。",
      "correction": "同一個比的兩項一起乘。"
    },
    {
      "mistake": "算出非整數人數後四捨五入。",
      "why": "忽略情境限制。",
      "correction": "判斷資料不相容或重新檢查模型。"
    },
    {
      "mistake": "將『乙是丙的 4/5』倒寫。",
      "why": "主詞與基準量混淆。",
      "correction": "先寫乙=(4/5)丙，再轉成 4:5。"
    }
  ],
  "selfCheck": [
    "每句話的主詞與比較基準是誰？",
    "兩個比的共同量是哪一個？",
    "共同量份數已相同嗎？",
    "百分比是否包含原來的 100%？",
    "答案是否符合整數與正值限制？"
  ],
  "summary": [
    "文字題先固定量名與順序。",
    "相連比要以共同量作橋接。",
    "倍數與百分比可轉成二項比。",
    "合併後再用總和、差或已知量求實際值。"
  ],
  "connections": {
    "previous": "比例線段訓練了對應關係與比例式。",
    "next": [
      "連比性質會系統化等比放大、分量和與差的推論。",
      "相似形會把同樣的對應概念用在三角形。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s004-v001",
      "u18-s004-v002",
      "u18-s004-v003",
      "u18-s004-v004",
      "u18-s004-v005",
      "u18-s004-v006",
      "u18-s004-v007",
      "u18-s004-v008",
      "u18-s004-v009",
      "u18-s004-v010",
      "u18-s004-v011",
      "u18-s004-v012"
    ],
    "constructedResponseIds": [
      "u18-s004-cr001",
      "u18-s004-cr002"
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
    "reviewNote": "逐句核查主詞、基準量與橋接量，並刻意加入資料不相容案例，防止學生將非整數人數四捨五入；百分比轉比的 100% 基準已明確說明。"
  },
  "contentSha256": "099eecf49f530484a657ad715568c6aaaec653510da1979415db4887ce03d6d8"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s004-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "已知甲:乙=2:3，乙:丙=4:5，則甲:乙:丙為何？",
    "text": "已知甲:乙=2:3，乙:丙=4:5，則甲:乙:丙為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "2:3:5",
      "8:4:5",
      "2:12:15",
      "8:12:15"
    ],
    "answerIndex": 3,
    "independentSolution": "前比 2:3 同乘 4 得 8:12；後比 4:5 同乘 3 得 12:15，故答案 8:12:15。",
    "explanation": "乙的份數 3 與 4 的最小公倍數是 12；甲:乙=8:12，乙:丙=12:15，所以為 8:12:15。",
    "steps": [
      "找橋接量乙。",
      "把前比乘 4、後比乘 3。",
      "合併三項。"
    ],
    "optionAnalysis": [
      {
        "choice": "2:3:5",
        "truth": false,
        "reason": "沒有先讓共同量乙的份數相同。"
      },
      {
        "choice": "8:4:5",
        "truth": false,
        "reason": "只放大甲，未把整個前比同乘。"
      },
      {
        "choice": "2:12:15",
        "truth": false,
        "reason": "把乙調整後漏調整甲。"
      },
      {
        "choice": "8:12:15",
        "truth": true,
        "reason": "依獨立推導可得到 8:12:15，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "直接拼接兩個二項比。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本相連比合併，橋接量份數較小。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e25051e6ff0c7d8f17a75e9f296162601037bb748ebd1215067245f6f45bbaeb"
  },
  {
    "questionId": "u18-s004-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 A 是 B 的 3/2 倍，且 B:C=4:7，則 A:B:C為何？",
    "text": "若 A 是 B 的 3/2 倍，且 B:C=4:7，則 A:B:C為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "6:4:7",
      "3:2:7",
      "6:8:7",
      "4:6:7"
    ],
    "answerIndex": 0,
    "independentSolution": "B 在第二比是 4 份，因此把 3:2 同乘 2，得到 A:B=6:4，再接 C=7。",
    "explanation": "A:B=3:2，B:C=4:7；把前比乘 2 得 6:4，合併為 6:4:7。",
    "steps": [
      "把倍數轉成 A:B=3:2。",
      "將橋接量 B 調為 4。",
      "合併。"
    ],
    "optionAnalysis": [
      {
        "choice": "6:4:7",
        "truth": true,
        "reason": "依獨立推導可得到 6:4:7，符合所有已知條件。"
      },
      {
        "choice": "3:2:7",
        "truth": false,
        "reason": "B 在兩個比中的份數未統一。"
      },
      {
        "choice": "6:8:7",
        "truth": false,
        "reason": "把 B:C 放大後只改 B。"
      },
      {
        "choice": "4:6:7",
        "truth": false,
        "reason": "把 A 與 B 的順序倒置。"
      }
    ],
    "misconceptionTarget": "主詞與基準量倒寫，或只改橋接量。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "把倍數語句轉比再合併。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2bb8787684d721011b69af3bb0d3cf7bb237c8c8800a8d3ab554f708c2a6c6a3"
  },
  {
    "questionId": "u18-s004-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "甲比乙多 20%，乙:丙=5:6，則甲:乙:丙為何？",
    "text": "甲比乙多 20%，乙:丙=5:6，則甲:乙:丙為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "1:5:6",
      "6:5:6",
      "12:5:6",
      "5:6:6"
    ],
    "answerIndex": 1,
    "independentSolution": "令乙為 5 份，甲比乙多 1 份即 6 份，丙由乙:丙=5:6 也是 6 份。",
    "explanation": "甲:乙=120:100=6:5，與乙:丙=5:6 的乙份數已相同，所以為 6:5:6。",
    "steps": [
      "把多 20% 轉成 120:100。",
      "化簡為 6:5。",
      "接上乙:丙=5:6。"
    ],
    "optionAnalysis": [
      {
        "choice": "1:5:6",
        "truth": false,
        "reason": "只取增加的 20% 為 1 份。"
      },
      {
        "choice": "6:5:6",
        "truth": true,
        "reason": "依獨立推導可得到 6:5:6，符合所有已知條件。"
      },
      {
        "choice": "12:5:6",
        "truth": false,
        "reason": "把 120% 化成 12:1。"
      },
      {
        "choice": "5:6:6",
        "truth": false,
        "reason": "將甲乙順序顛倒。"
      }
    ],
    "misconceptionTarget": "把增加部分 20% 當成甲的全部。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本百分比轉比與直接橋接。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "20a6ede1bbcb7fc32e766e3995ed7b849b485fcfebe48ad4efa52309d9fb5363"
  },
  {
    "questionId": "u18-s004-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "甲:乙=3:7，乙:丙=14:5。若三數總和為 250，則甲為何？",
    "text": "甲:乙=3:7，乙:丙=14:5。若三數總和為 250，則甲為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "30",
      "70",
      "60",
      "105"
    ],
    "answerIndex": 2,
    "independentSolution": "設甲=6k、乙=14k、丙=5k；25k=250，k=10，甲=60。",
    "explanation": "甲:乙=6:14，與乙:丙=14:5 合併為 6:14:5；總份數 25，每份 10，甲=60。",
    "steps": [
      "把前比乘 2。",
      "合併為 6:14:5。",
      "250÷25=10，甲=6×10。"
    ],
    "optionAnalysis": [
      {
        "choice": "30",
        "truth": false,
        "reason": "把前比未放大就使用總份數 3+7+5。"
      },
      {
        "choice": "70",
        "truth": false,
        "reason": "這是乙的一半份數誤算。"
      },
      {
        "choice": "60",
        "truth": true,
        "reason": "依獨立推導可得到 60，符合所有已知條件。"
      },
      {
        "choice": "105",
        "truth": false,
        "reason": "這是乙的實際值。"
      }
    ],
    "misconceptionTarget": "合併比後仍使用原甲份數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "先合併相連比，再用總量分配。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e74c9f64532ba71b491306e85d426b15ff33439aa4667673b6d9a530affc05ca"
  },
  {
    "questionId": "u18-s004-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 P:Q=5:8，Q:R=12:7，則 (P+R):Q 為何？",
    "text": "若 P:Q=5:8，Q:R=12:7，則 (P+R):Q 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "29:24",
      "12:8",
      "29:8",
      "19:24"
    ],
    "answerIndex": 0,
    "independentSolution": "可設 P=15k、Q=24k、R=14k，所以 (P+R):Q=29k:24k=29:24。",
    "explanation": "Q 的最小公倍數為 24，P:Q=15:24，Q:R=24:14，因此 (P+R):Q=(15+14):24=29:24。",
    "steps": [
      "統一 Q 為 24 份。",
      "得到 P=15 份、R=14 份。",
      "求和後與 Q 比。"
    ],
    "optionAnalysis": [
      {
        "choice": "29:24",
        "truth": true,
        "reason": "依獨立推導可得到 29:24，符合所有已知條件。"
      },
      {
        "choice": "12:8",
        "truth": false,
        "reason": "只計 P:Q，漏掉 R。"
      },
      {
        "choice": "29:8",
        "truth": false,
        "reason": "未把 Q 的橋接份數統一。"
      },
      {
        "choice": "19:24",
        "truth": false,
        "reason": "把 R 的 14 份誤作 4 份。"
      }
    ],
    "misconceptionTarget": "未先統一橋接量便相加不同尺度的份數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 100,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "合併後還需形成新的部分和比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c9dae02e23937b1d0ccbf4c3e8fdaf510af32c43f456cd5fb143028cefa1e723"
  },
  {
    "questionId": "u18-s004-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "甲是乙的 80%，乙是丙的 125%，則甲:乙:丙為何？",
    "text": "甲是乙的 80%，乙是丙的 125%，則甲:乙:丙為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "80:125:100",
      "4:5:4",
      "4:5:8",
      "5:4:5"
    ],
    "answerIndex": 1,
    "independentSolution": "令乙=5 份，甲為乙的 0.8 倍即 4 份；乙又是丙的 1.25 倍，所以丙=4 份。",
    "explanation": "甲:乙=80:100=4:5；乙:丙=125:100=5:4，所以合併為 4:5:4。",
    "steps": [
      "轉換第一個百分比。",
      "由乙=1.25丙 得乙:丙=5:4。",
      "合併。"
    ],
    "optionAnalysis": [
      {
        "choice": "80:125:100",
        "truth": false,
        "reason": "百分比基準混在一起，未統一乙。"
      },
      {
        "choice": "4:5:4",
        "truth": true,
        "reason": "依獨立推導可得到 4:5:4，符合所有已知條件。"
      },
      {
        "choice": "4:5:8",
        "truth": false,
        "reason": "把 125% 誤作丙是乙的 1.25 倍。"
      },
      {
        "choice": "5:4:5",
        "truth": false,
        "reason": "將甲與乙的關係倒置。"
      }
    ],
    "misconceptionTarget": "第二句的主詞與基準量判讀相反。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "兩個百分比語句方向不同，需準確翻譯。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d007fa514d60e19ae4ed2ada4ff90b882488d7a157be0300219d4f26c16f19d5"
  },
  {
    "questionId": "u18-s004-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "A:B=4:9，B:C=6:5，且 C-A=14，則 B 為何？",
    "text": "A:B=4:9，B:C=6:5，且 C-A=14，則 B 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "54",
      "45",
      "36",
      "63"
    ],
    "answerIndex": 2,
    "independentSolution": "設 A=8k、B=18k、C=15k；7k=14，k=2，B=36。",
    "explanation": "統一 B 為 18：A:B=8:18，B:C=18:15，所以 C-A=7 份=14，每份 2，B=36。",
    "steps": [
      "合併為 8:18:15。",
      "差 15-8=7 份。",
      "每份 2，B=18×2。"
    ],
    "optionAnalysis": [
      {
        "choice": "54",
        "truth": false,
        "reason": "把 B 的 18 份乘上錯誤每份 3。"
      },
      {
        "choice": "45",
        "truth": false,
        "reason": "把 B 直接取成 15 份。"
      },
      {
        "choice": "36",
        "truth": true,
        "reason": "依獨立推導可得到 36，符合所有已知條件。"
      },
      {
        "choice": "63",
        "truth": false,
        "reason": "把 C-A 的份數誤作 4。"
      }
    ],
    "misconceptionTarget": "橋接後的份數正確，但把差或 B 的乘數算錯。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 120,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "相連比、差量與實際值三階段推理。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7dd0610edd58816a7af0573b893dfd9e6657da966ce26a3b632af496050f3654"
  },
  {
    "questionId": "u18-s004-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "三種原料 X、Y、Z 滿足 X:Y=7:4，Y:Z=6:5。若 Y+Z=88，則 X 為何？",
    "text": "三種原料 X、Y、Z 滿足 X:Y=7:4，Y:Z=6:5。若 Y+Z=88，則 X 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "56",
      "77",
      "98",
      "84"
    ],
    "answerIndex": 3,
    "independentSolution": "設 X=21k、Y=12k、Z=10k；22k=88，k=4，故 X=84。",
    "explanation": "統一 Y 為 12，得 X:Y:Z=21:12:10。Y+Z=22 份=88，每份 4，X=84。",
    "steps": [
      "前比乘 3、後比乘 2。",
      "合併 21:12:10。",
      "由 22 份求每份，再算 X。"
    ],
    "optionAnalysis": [
      {
        "choice": "56",
        "truth": false,
        "reason": "把 Y 直接設為 4 份而未橋接。"
      },
      {
        "choice": "77",
        "truth": false,
        "reason": "將每份誤算成 7。"
      },
      {
        "choice": "98",
        "truth": false,
        "reason": "用 X:Y=7:4 乘上錯誤 Y 值。"
      },
      {
        "choice": "84",
        "truth": true,
        "reason": "依獨立推導可得到 84，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把不同二項比的份數當同一尺度。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "先橋接，再利用非全部量的和求第一項。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3ff4bd6333569b9adc9cb59d2bac14f71d391b0d808697c7c75b67194da506a1"
  },
  {
    "questionId": "u18-s004-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "甲:乙=2:5，乙:丙=3:4。若甲、乙、丙都必須是正整數，且總和小於 50，最大的可能總和為何？",
    "text": "甲:乙=2:5，乙:丙=3:4。若甲、乙、丙都必須是正整數，且總和小於 50，最大的可能總和為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "23",
      "41",
      "45",
      "48"
    ],
    "answerIndex": 1,
    "independentSolution": "三數可寫 6k、15k、20k，k 為正整數；總和 41k<50，只能 k=1，所以 41。",
    "explanation": "合併得甲:乙:丙=6:15:20，最簡總份數 41；小於 50 的正整數倍只有 41，因此最大總和是 41。",
    "steps": [
      "統一乙為 15。",
      "得到 6:15:20，總份數 41。",
      "小於 50 的最大正整數倍是 41。"
    ],
    "optionAnalysis": [
      {
        "choice": "23",
        "truth": false,
        "reason": "使用錯誤合併比得到總份數 23。"
      },
      {
        "choice": "41",
        "truth": true,
        "reason": "依獨立推導可得到 41，符合所有已知條件。"
      },
      {
        "choice": "45",
        "truth": false,
        "reason": "不是 41 的整數倍，無法保持比例。"
      },
      {
        "choice": "48",
        "truth": false,
        "reason": "不是 41 的整數倍，無法保持比例。"
      }
    ],
    "misconceptionTarget": "先錯誤合併出較小總份數，再枚舉倍數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 130,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "『三數為正整數』使共同倍數 k 必須為正整數，且不允許 0。",
    "difficultyReason": "結合相連比、整數限制與最大化判斷。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "982f56d6290ba012660ee290c84a93d96d9d125b046a3d24225c1363d27d474b"
  },
  {
    "questionId": "u18-s004-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "烘焙配方中，麵粉:糖=5:2，糖:奶油=3:4。若一批材料總重 1.74 公斤，麵粉需要多少公克？",
    "text": "烘焙配方中，麵粉:糖=5:2，糖:奶油=3:4。若一批材料總重 1.74 公斤，麵粉需要多少公克？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "600 公克",
      "360 公克",
      "900 公克",
      "480 公克"
    ],
    "answerIndex": 2,
    "independentSolution": "設麵粉、糖、奶油為 15k、6k、8k 公克；29k=1740，k=60，麵粉=900 公克。",
    "explanation": "統一糖為 6 份：麵粉:糖=15:6，糖:奶油=6:8，總比 15:6:8。總份數 29，1740÷29=60 公克/份，麵粉 15 份為 900 公克。",
    "steps": [
      "合併為 15:6:8。",
      "把 1.74 公斤換成 1740 公克。",
      "每份 60 公克，麵粉 15 份為 900 公克。"
    ],
    "optionAnalysis": [
      {
        "choice": "600 公克",
        "truth": false,
        "reason": "把麵粉誤當 10 份。"
      },
      {
        "choice": "360 公克",
        "truth": false,
        "reason": "這是糖的 6 份。"
      },
      {
        "choice": "900 公克",
        "truth": true,
        "reason": "依獨立推導可得到 900 公克，符合所有已知條件。"
      },
      {
        "choice": "480 公克",
        "truth": false,
        "reason": "這是奶油的 8 份。"
      }
    ],
    "misconceptionTarget": "合併比後漏做公斤與公克換算，或把其他原料份數當麵粉。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "1.74 公斤=1740 公克；答案為整數公克。",
    "ambiguityAndBoundaryAudit": "總重包含三種原料且無損耗，配方份數與總重可整除。",
    "difficultyReason": "需檢查配方總量與份數相容性，而非只套公式。",
    "literacyContextNecessity": "烘焙配方需維持精確質量比；總重不相容時不能任意四捨五入改變配方。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ddf15d941a3dfc9279d3e8c990c545d7d2d349c3897447117850cacd53bf0755"
  },
  {
    "questionId": "u18-s004-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "校隊資料顯示男生:女生=7:5，女生:候補生=10:3。若男生比候補生多 44 人，女生有多少人？",
    "text": "校隊資料顯示男生:女生=7:5，女生:候補生=10:3。若男生比候補生多 44 人，女生有多少人？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "25 人",
      "35 人",
      "50 人",
      "40 人"
    ],
    "answerIndex": 3,
    "independentSolution": "設三類人數為 14k、10k、3k；11k=44，k=4，女生 40。",
    "explanation": "合併為男:女:候補=14:10:3。男生比候補多 11 份=44 人，每份 4 人，女生=40 人。",
    "steps": [
      "把前比乘 2。",
      "由差份數 14-3=11 求每份。",
      "女生取 10 份。"
    ],
    "optionAnalysis": [
      {
        "choice": "25 人",
        "truth": false,
        "reason": "把女生維持 5 份，未橋接到 10。"
      },
      {
        "choice": "35 人",
        "truth": false,
        "reason": "這是男生的一半份數錯算。"
      },
      {
        "choice": "50 人",
        "truth": false,
        "reason": "把每份誤算成 5 人。"
      },
      {
        "choice": "40 人",
        "truth": true,
        "reason": "依獨立推導可得到 40 人，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "橋接後使用原份數或差份數錯誤。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "人數為正整數，所得 40 人符合。",
    "ambiguityAndBoundaryAudit": "候補生視為第三個互斥群體，不含在男生或女生中。",
    "difficultyReason": "相連比合併後由跨項差求中間群體。",
    "literacyContextNecessity": "隊伍名額是離散人數，男、女與候補的分類及差量是情境核心。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "15da2a94d6f67591c76acfdfdfff4cb638ae3df1ccc10a79d39f67974221c41e"
  },
  {
    "questionId": "u18-s004-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "某公司三項預算滿足研發:行銷=4:3，行銷:維運=6:5。總預算 630 萬元，另規定維運至少 160 萬元。下列判斷何者正確？",
    "text": "某公司三項預算滿足研發:行銷=4:3，行銷:維運=6:5。總預算 630 萬元，另規定維運至少 160 萬元。下列判斷何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "原比例分配符合最低維運限制",
      "原比例分配不符合最低維運限制",
      "研發應為 280 萬元且必定符合",
      "資料不足，無法算出三項預算"
    ],
    "answerIndex": 0,
    "independentSolution": "原比例下維運 630×5/19≈165.8 萬元，大於 160 萬元，因此限制滿足。",
    "explanation": "合併比為 8:6:5，總份數 19，每份 630/19≈33.16 萬，維運約 165.79 萬，其實符合 160 萬限制。",
    "steps": [
      "合併為 8:6:5。",
      "維運=630×5/19≈165.79。",
      "與 160 比較。"
    ],
    "optionAnalysis": [
      {
        "choice": "原比例分配符合最低維運限制",
        "truth": true,
        "reason": "依獨立推導可得到 原比例分配符合最低維運限制，符合所有已知條件。"
      },
      {
        "choice": "原比例分配不符合最低維運限制",
        "truth": false,
        "reason": "維運約 165.79 萬元，高於 160 萬元。"
      },
      {
        "choice": "研發應為 280 萬元且必定符合",
        "truth": false,
        "reason": "研發約 265.26 萬元，且應直接檢查維運。"
      },
      {
        "choice": "資料不足，無法算出三項預算",
        "truth": false,
        "reason": "相連比與總額已足以算出原比例分配。"
      }
    ],
    "misconceptionTarget": "未實際合併比例與比較門檻便下結論。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "金額以萬元計，門檻比較可保留兩位小數。",
    "ambiguityAndBoundaryAudit": "『至少 160』包含等於 160；本題結果明顯大於門檻。",
    "difficultyReason": "多步合併比例、總額分配與政策門檻判斷。",
    "literacyContextNecessity": "預算比例與最低門檻同時存在，必須先算原分配再作決策。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9eb5c4ff0b5c720640a927b4a8e74d784bcff99769f9aaefca6e288ead15d8ec"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s004-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "itemType": "constructed-response",
    "prompt": "甲、乙、丙三人分獎金，甲：乙=3：4，乙：丙=6：5，總額 7600 元。求三人所得。",
    "requiredWork": "先統一共同項乙，再按總額分配。",
    "standardSolution": "甲：乙=9：12，乙：丙=12：10，所以甲：乙：丙=9：12：10。總份數31，每份7600/31 元，所得不是整數元。若獎金必須以整數元分配，題目資料不相容；若允許分數元，三人分別為 68400/31、91200/31、76000/31 元。",
    "alternativeMethod": "設乙為12k，則甲9k、丙10k，31k=7600，k=7600/31；再討論貨幣最小單位。",
    "reasoningSteps": [
      "統一乙為12份。",
      "合併連比9：12：10。",
      "檢查總份數31是否整除7600。",
      "說明整數元限制下不相容或給精確分數。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確合併為9：12：10，發現7600不能被31整除，並清楚說明整數限制或給出精確分數。"
      },
      {
        "score": 2,
        "criteria": "合併比正確並按31份計算，但未討論整數元問題；或只一項分數計算錯。"
      },
      {
        "score": 1,
        "criteria": "只完成其中一組比的放大，未合併三者。"
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
    "unitAndNotationRules": "金額以元表示；若假定必須整數元，必須明說資料不相容。",
    "answerOnlyPolicy": "只列三個近似小數而未說明不能整除，最高 1 分。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "獨立檢查 gcd(31,7600)=1，確認不存在整數元解；精確分數總和為7600。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "b7a6637c17f136b5c643ac1de269802d84cecd364c5e80a9ebf626ea41a7c6cb"
  },
  {
    "questionId": "u18-s004-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-word",
    "lockedSkillOrder": 4,
    "itemType": "constructed-response",
    "prompt": "一個三位數的百位、十位、個位數字比為 2：3：4，三個數字和為 18。求此三位數，並檢查每個數字是否合法。",
    "requiredWork": "用數字和求共同份值，並檢查各位數介於0到9。",
    "standardSolution": "設三個數字為2k、3k、4k。9k=18，k=2，數字為4、6、8，所以三位數是468；三個數字都在0到9且百位非0。",
    "alternativeMethod": "18 依 2：3：4 分配，總份數9，每份2，直接得4、6、8。",
    "reasoningSteps": [
      "設位數為2k、3k、4k。",
      "由和求 k=2。",
      "組成468。",
      "檢查位數範圍與百位條件。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確得到468，且完成合法位數檢查。"
      },
      {
        "score": 2,
        "criteria": "得到468但未檢查；或設式正確有一個位數算錯。"
      },
      {
        "score": 1,
        "criteria": "只求出 k=2 或只寫數字比。"
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
    "unitAndNotationRules": "答案是三位整數，不加量詞；必須維持百位、十位、個位順序。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "驗算4+6+8=18、4：6：8=2：3：4，且468為合法三位數。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "29fb57de0ace14e741dacec8ec1feb80b491b39f7b340b1d7a641ffa2e517c45"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s004-v001-semantic-review-r1",
    "questionId": "u18-s004-v001",
    "unitId": "u18",
    "skillId": "continued-ratio-word",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "e25051e6ff0c7d8f17a75e9f296162601037bb748ebd1215067245f6f45bbaeb",
    "independentSolution": "前比 2:3 同乘 4 得 8:12；後比 4:5 同乘 3 得 12:15，故答案 8:12:15。",
    "derivedAnswer": "8:12:15",
    "storedAnswer": "8:12:15",
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
      "scope": "只使用國中會考範圍內的「連比應用題」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本相連比合併，橋接量份數較小。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：前比 2:3 同乘 4 得 8:12；後比 4:5 同乘 3 得 12:15，故答案 8:12:15。 四個選項逐一核對後，只有「8:12:15」符合；主要排除點是「直接拼接兩個二項比。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s004-v002-semantic-review-r1",
    "questionId": "u18-s004-v002",
    "unitId": "u18",
    "skillId": "continued-ratio-word",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "2bb8787684d721011b69af3bb0d3cf7bb237c8c8800a8d3ab554f708c2a6c6a3",
    "independentSolution": "B 在第二比是 4 份，因此把 3:2 同乘 2，得到 A:B=6:4，再接 C=7。",
    "derivedAnswer": "6:4:7",
    "storedAnswer": "6:4:7",
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
      "scope": "只使用國中會考範圍內的「連比應用題」概念，未要求高中延伸。"
    },
    "difficultyReason": "把倍數語句轉比再合併。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：B 在第二比是 4 份，因此把 3:2 同乘 2，得到 A:B=6:4，再接 C=7。 四個選項逐一核對後，只有「6:4:7」符合；主要排除點是「主詞與基準量倒寫，或只改橋接量。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s004-v003-semantic-review-r1",
    "questionId": "u18-s004-v003",
    "unitId": "u18",
    "skillId": "continued-ratio-word",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "20a6ede1bbcb7fc32e766e3995ed7b849b485fcfebe48ad4efa52309d9fb5363",
    "independentSolution": "令乙為 5 份，甲比乙多 1 份即 6 份，丙由乙:丙=5:6 也是 6 份。",
    "derivedAnswer": "6:5:6",
    "storedAnswer": "6:5:6",
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
      "scope": "只使用國中會考範圍內的「連比應用題」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本百分比轉比與直接橋接。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：令乙為 5 份，甲比乙多 1 份即 6 份，丙由乙:丙=5:6 也是 6 份。 四個選項逐一核對後，只有「6:5:6」符合；主要排除點是「把增加部分 20% 當成甲的全部。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s004-v004-semantic-review-r1",
    "questionId": "u18-s004-v004",
    "unitId": "u18",
    "skillId": "continued-ratio-word",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "e74c9f64532ba71b491306e85d426b15ff33439aa4667673b6d9a530affc05ca",
    "independentSolution": "設甲=6k、乙=14k、丙=5k；25k=250，k=10，甲=60。",
    "derivedAnswer": "60",
    "storedAnswer": "60",
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
      "scope": "只使用國中會考範圍內的「連比應用題」概念，未要求高中延伸。"
    },
    "difficultyReason": "先合併相連比，再用總量分配。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設甲=6k、乙=14k、丙=5k；25k=250，k=10，甲=60。 四個選項逐一核對後，只有「60」符合；主要排除點是「合併比後仍使用原甲份數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s004-v005-semantic-review-r1",
    "questionId": "u18-s004-v005",
    "unitId": "u18",
    "skillId": "continued-ratio-word",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "c9dae02e23937b1d0ccbf4c3e8fdaf510af32c43f456cd5fb143028cefa1e723",
    "independentSolution": "可設 P=15k、Q=24k、R=14k，所以 (P+R):Q=29k:24k=29:24。",
    "derivedAnswer": "29:24",
    "storedAnswer": "29:24",
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
      "scope": "只使用國中會考範圍內的「連比應用題」概念，未要求高中延伸。"
    },
    "difficultyReason": "合併後還需形成新的部分和比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：可設 P=15k、Q=24k、R=14k，所以 (P+R):Q=29k:24k=29:24。 四個選項逐一核對後，只有「29:24」符合；主要排除點是「未先統一橋接量便相加不同尺度的份數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s004-v006-semantic-review-r1",
    "questionId": "u18-s004-v006",
    "unitId": "u18",
    "skillId": "continued-ratio-word",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "d007fa514d60e19ae4ed2ada4ff90b882488d7a157be0300219d4f26c16f19d5",
    "independentSolution": "令乙=5 份，甲為乙的 0.8 倍即 4 份；乙又是丙的 1.25 倍，所以丙=4 份。",
    "derivedAnswer": "4:5:4",
    "storedAnswer": "4:5:4",
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
      "scope": "只使用國中會考範圍內的「連比應用題」概念，未要求高中延伸。"
    },
    "difficultyReason": "兩個百分比語句方向不同，需準確翻譯。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：令乙=5 份，甲為乙的 0.8 倍即 4 份；乙又是丙的 1.25 倍，所以丙=4 份。 四個選項逐一核對後，只有「4:5:4」符合；主要排除點是「第二句的主詞與基準量判讀相反。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s004-v007-semantic-review-r1",
    "questionId": "u18-s004-v007",
    "unitId": "u18",
    "skillId": "continued-ratio-word",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "7dd0610edd58816a7af0573b893dfd9e6657da966ce26a3b632af496050f3654",
    "independentSolution": "設 A=8k、B=18k、C=15k；7k=14，k=2，B=36。",
    "derivedAnswer": "36",
    "storedAnswer": "36",
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
      "scope": "只使用國中會考範圍內的「連比應用題」概念，未要求高中延伸。"
    },
    "difficultyReason": "相連比、差量與實際值三階段推理。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設 A=8k、B=18k、C=15k；7k=14，k=2，B=36。 四個選項逐一核對後，只有「36」符合；主要排除點是「橋接後的份數正確，但把差或 B 的乘數算錯。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s004-v008-semantic-review-r1",
    "questionId": "u18-s004-v008",
    "unitId": "u18",
    "skillId": "continued-ratio-word",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "3ff4bd6333569b9adc9cb59d2bac14f71d391b0d808697c7c75b67194da506a1",
    "independentSolution": "設 X=21k、Y=12k、Z=10k；22k=88，k=4，故 X=84。",
    "derivedAnswer": "84",
    "storedAnswer": "84",
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
      "scope": "只使用國中會考範圍內的「連比應用題」概念，未要求高中延伸。"
    },
    "difficultyReason": "先橋接，再利用非全部量的和求第一項。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設 X=21k、Y=12k、Z=10k；22k=88，k=4，故 X=84。 四個選項逐一核對後，只有「84」符合；主要排除點是「把不同二項比的份數當同一尺度。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s004-v009-semantic-review-r1",
    "questionId": "u18-s004-v009",
    "unitId": "u18",
    "skillId": "continued-ratio-word",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "982f56d6290ba012660ee290c84a93d96d9d125b046a3d24225c1363d27d474b",
    "independentSolution": "三數可寫 6k、15k、20k，k 為正整數；總和 41k<50，只能 k=1，所以 41。",
    "derivedAnswer": "41",
    "storedAnswer": "41",
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
      "boundary": "『三數為正整數』使共同倍數 k 必須為正整數，且不允許 0。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比應用題」概念，未要求高中延伸。"
    },
    "difficultyReason": "結合相連比、整數限制與最大化判斷。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：三數可寫 6k、15k、20k，k 為正整數；總和 41k<50，只能 k=1，所以 41。 四個選項逐一核對後，只有「41」符合；主要排除點是「先錯誤合併出較小總份數，再枚舉倍數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s004-v010-semantic-review-r1",
    "questionId": "u18-s004-v010",
    "unitId": "u18",
    "skillId": "continued-ratio-word",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "ddf15d941a3dfc9279d3e8c990c545d7d2d349c3897447117850cacd53bf0755",
    "independentSolution": "設麵粉、糖、奶油為 15k、6k、8k 公克；29k=1740，k=60，麵粉=900 公克。",
    "derivedAnswer": "900 公克",
    "storedAnswer": "900 公克",
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
      "boundary": "總重包含三種原料且無損耗，配方份數與總重可整除。",
      "units": "1.74 公斤=1740 公克；答案為整數公克。",
      "scope": "只使用國中會考範圍內的「連比應用題」概念，未要求高中延伸。"
    },
    "difficultyReason": "需檢查配方總量與份數相容性，而非只套公式。",
    "literacyNecessityReview": "烘焙配方需維持精確質量比；總重不相容時不能任意四捨五入改變配方。",
    "reviewerNote": "重新由已知條件獨立計算：設麵粉、糖、奶油為 15k、6k、8k 公克；29k=1740，k=60，麵粉=900 公克。 四個選項逐一核對後，只有「900 公克」符合；主要排除點是「合併比後漏做公斤與公克換算，或把其他原料份數當麵粉。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s004-v011-semantic-review-r1",
    "questionId": "u18-s004-v011",
    "unitId": "u18",
    "skillId": "continued-ratio-word",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "15da2a94d6f67591c76acfdfdfff4cb638ae3df1ccc10a79d39f67974221c41e",
    "independentSolution": "設三類人數為 14k、10k、3k；11k=44，k=4，女生 40。",
    "derivedAnswer": "40 人",
    "storedAnswer": "40 人",
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
      "boundary": "候補生視為第三個互斥群體，不含在男生或女生中。",
      "units": "人數為正整數，所得 40 人符合。",
      "scope": "只使用國中會考範圍內的「連比應用題」概念，未要求高中延伸。"
    },
    "difficultyReason": "相連比合併後由跨項差求中間群體。",
    "literacyNecessityReview": "隊伍名額是離散人數，男、女與候補的分類及差量是情境核心。",
    "reviewerNote": "重新由已知條件獨立計算：設三類人數為 14k、10k、3k；11k=44，k=4，女生 40。 四個選項逐一核對後，只有「40 人」符合；主要排除點是「橋接後使用原份數或差份數錯誤。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s004-v012-semantic-review-r1",
    "questionId": "u18-s004-v012",
    "unitId": "u18",
    "skillId": "continued-ratio-word",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "9eb5c4ff0b5c720640a927b4a8e74d784bcff99769f9aaefca6e288ead15d8ec",
    "independentSolution": "原比例下維運 630×5/19≈165.8 萬元，大於 160 萬元，因此限制滿足。",
    "derivedAnswer": "原比例分配符合最低維運限制",
    "storedAnswer": "原比例分配符合最低維運限制",
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
      "boundary": "『至少 160』包含等於 160；本題結果明顯大於門檻。",
      "units": "金額以萬元計，門檻比較可保留兩位小數。",
      "scope": "只使用國中會考範圍內的「連比應用題」概念，未要求高中延伸。"
    },
    "difficultyReason": "多步合併比例、總額分配與政策門檻判斷。",
    "literacyNecessityReview": "預算比例與最低門檻同時存在，必須先算原分配再作決策。",
    "reviewerNote": "重新由已知條件獨立計算：原比例下維運 630×5/19≈165.8 萬元，大於 160 萬元，因此限制滿足。 四個選項逐一核對後，只有「原比例分配符合最低維運限制」符合；主要排除點是「未實際合併比例與比較門檻便下結論。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];

