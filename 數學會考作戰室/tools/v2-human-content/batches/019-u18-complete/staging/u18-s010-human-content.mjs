// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s010";

export const SKILL_ID = "similar-ratio-perimeter";

export const LECTURE = {
  "lectureId": "u18-s010-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-applications",
  "skillId": "similar-ratio-perimeter",
  "lockedSkillOrder": 10,
  "lockedSkillTitle": "相似比與周長比",
  "title": "相似比與周長比：每一條邊同倍縮放，周長也同倍",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能依指定方向求相似比。",
    "能說明相似多邊形的周長比等於相似比。",
    "能由周長求相似比或未知周長。",
    "能區分周長比與面積比的次方關係。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "similarity-sss",
        "title": "SSS 相似",
        "requiredLevel": "能運用「SSS 相似」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「SSS 相似」，先複習其核心判斷，再把方法推進到「相似比與周長比」。"
  },
  "glossary": [
    {
      "term": "線性量",
      "definition": "長度、周長、高等只具有一次尺度的量。"
    },
    {
      "term": "周長比",
      "definition": "兩個相似圖形周長的比。"
    },
    {
      "term": "縮放倍數",
      "definition": "第二圖形對第一圖形的對應邊放大或縮小的倍數。"
    },
    {
      "term": "方向",
      "definition": "相似比以哪一圖形除以哪一圖形，順序不同會取倒數。"
    }
  ],
  "notation": [
    {
      "symbol": "k=L₂/L₁",
      "meaning": "由圖形 1 放大到圖形 2 的線性縮放倍數。"
    },
    {
      "symbol": "P₂/P₁=k",
      "meaning": "相似圖形的周長按同一倍數縮放。"
    },
    {
      "symbol": "a:b",
      "meaning": "若為圖形 A 對 B 的相似比，所有比值都維持 A/B 的方向。"
    }
  ],
  "conceptNarrative": [
    "相似圖形的每一條對應邊都乘上同一個倍數 k。周長是所有邊長的總和，所以總和也會乘 k。",
    "例如三角形三邊由 3、4、5 放大為 6、8、10，每邊乘 2，周長由 12 變 24，也乘 2。",
    "由周長比可以直接求相似比，反之亦然，但前提是兩圖形確實相似。非相似圖形即使周長比相同，也不能推得對應邊比。",
    "周長屬線性量，使用 k；面積是二維量，使用 k²。把兩者混用是常見錯誤。"
  ],
  "formalDefinitions": [
    {
      "name": "周長縮放定理",
      "statement": "兩相似多邊形的周長比等於任一組對應邊的比。"
    },
    {
      "name": "方向一致性",
      "statement": "若相似比取圖形 A:圖形 B，周長比也須取 PA:PB。"
    }
  ],
  "formulas": [
    {
      "formula": "PA/PB=對應邊A/對應邊B",
      "conditions": [
        "圖形 A、B 相似",
        "比值方向一致"
      ],
      "meaning": "周長比等於相似比。"
    },
    {
      "formula": "P₂=kP₁",
      "conditions": [
        "k 為由圖形 1 到圖形 2 的縮放倍數"
      ],
      "meaning": "求縮放後周長。"
    }
  ],
  "nonApplicableCases": [
    "兩圖形不相似時，不能由一組邊比推周長比。",
    "周長比不是相似比的平方。",
    "相似比方向改變時，周長比也要取倒數。",
    "已知的是半周長或某段邊界時，不能直接當完整周長。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "確認兩圖形相似並固定比值方向。",
      "check": "所求是 A:B 還是 B:A？"
    },
    {
      "step": 2,
      "instruction": "由任一組對應邊求相似比 k。",
      "check": "邊是否真正對應？"
    },
    {
      "step": 3,
      "instruction": "令周長使用同一比值。",
      "check": "是否誤平方？"
    },
    {
      "step": 4,
      "instruction": "交叉相乘或乘 k 求未知周長。",
      "check": "放大時周長應變大嗎？"
    },
    {
      "step": 5,
      "instruction": "用各邊總和概念回查。",
      "check": "結果是否符合線性縮放？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "兩相似三角形對應邊比為 3:5，小三角形周長 24，求大三角形周長。",
      "solutionSteps": [
        "周長比等於相似比 3:5。",
        "24:P=3:5。",
        "P=24×5/3=40。"
      ],
      "answer": "40"
    },
    {
      "exampleId": "L2",
      "prompt": "兩相似多邊形周長為 42 與 63，第一圖對第二圖的相似比為何？",
      "solutionSteps": [
        "相似比等於周長比。",
        "42:63 化簡同除 21。",
        "得 2:3。"
      ],
      "answer": "2:3"
    },
    {
      "exampleId": "L3",
      "prompt": "模型長度是實物的 1/50，實物周長 350 公尺，模型周長多少公尺？",
      "solutionSteps": [
        "模型:實物=1:50。",
        "模型周長=350×1/50=7 公尺。",
        "周長使用一次縮放。"
      ],
      "answer": "7 公尺"
    },
    {
      "exampleId": "L4",
      "prompt": "相似比 A:B=4:3，若 B 周長 27，求 A 周長。",
      "solutionSteps": [
        "PA:PB=4:3。",
        "PA/27=4/3。",
        "PA=36。"
      ],
      "answer": "36"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "周長比用 k²。",
      "why": "與面積比混淆。",
      "correction": "周長是長度總和，只乘 k。"
    },
    {
      "mistake": "比值方向顛倒。",
      "why": "未標明哪個圖形在前。",
      "correction": "寫 PA:PB 與邊 A:邊 B 同方向。"
    },
    {
      "mistake": "未確認圖形相似。",
      "why": "看到邊長比就套公式。",
      "correction": "題目需明示或先證明相似。"
    },
    {
      "mistake": "把一段邊長當周長。",
      "why": "混淆單邊與邊長總和。",
      "correction": "確認 P 代表所有邊之和。"
    },
    {
      "mistake": "縮小模型算出比實物更大。",
      "why": "倍率方向錯。",
      "correction": "做大小合理性檢查。"
    }
  ],
  "selfCheck": [
    "圖形真的相似嗎？",
    "相似比方向已固定嗎？",
    "周長比是否直接等於 k？",
    "有沒有誤用平方？",
    "放大或縮小的大小關係合理嗎？"
  ],
  "summary": [
    "相似圖形的周長比等於相似比。",
    "周長是線性量，只使用一次縮放倍數。",
    "方向改變時比值取倒數。",
    "公式只適用於相似圖形。"
  ],
  "connections": {
    "previous": "SSS 判定能先確認圖形相似。",
    "next": [
      "面積比會把相似比平方。",
      "周長比應用會處理模型、地圖與複合邊界。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s010-v001",
      "u18-s010-v002",
      "u18-s010-v003",
      "u18-s010-v004",
      "u18-s010-v005",
      "u18-s010-v006",
      "u18-s010-v007",
      "u18-s010-v008",
      "u18-s010-v009",
      "u18-s010-v010",
      "u18-s010-v011",
      "u18-s010-v012"
    ],
    "constructedResponseIds": [
      "u18-s010-cr001",
      "u18-s010-cr002"
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
    "reviewNote": "所有例題均固定相似比方向並以線性尺度解釋，特別核對沒有把周長比平方；模型題的單位與縮小方向亦已回查。"
  },
  "contentSha256": "3b3504d1d284a4957371678911e0306f3b9aea4a51bd2013a7867e181c493523"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s010-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩相似三角形的相似比為 2:5，則周長比為何？",
    "text": "兩相似三角形的相似比為 2:5，則周長比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "4:25",
      "2:5",
      "5:2",
      "2:25"
    ],
    "answerIndex": 1,
    "independentSolution": "每一條邊都按 2:5 對應相加，周長也維持 2:5。",
    "explanation": "相似圖形的周長比等於相似比，所以為 2:5。",
    "steps": [
      "辨認周長是線性量。",
      "直接沿用相似比。",
      "保持方向。"
    ],
    "optionAnalysis": [
      {
        "choice": "4:25",
        "truth": false,
        "reason": "這是面積比。"
      },
      {
        "choice": "2:5",
        "truth": true,
        "reason": "依獨立推導可得到 2:5，符合所有已知條件。"
      },
      {
        "choice": "5:2",
        "truth": false,
        "reason": "方向與題目相反。"
      },
      {
        "choice": "2:25",
        "truth": false,
        "reason": "只平方第二項。"
      }
    ],
    "misconceptionTarget": "把周長比誤平方成面積比。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "直接套用周長比等於相似比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1a9ab793b9e7d49b8c594fc84ffd451d567151f3eee7fdf6eae627c3c1e7e362"
  },
  {
    "questionId": "u18-s010-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩相似多邊形周長為 36 cm 與 54 cm，第一個對第二個的相似比為何？",
    "text": "兩相似多邊形周長為 36 cm 與 54 cm，第一個對第二個的相似比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "2:3",
      "4:9",
      "3:2",
      "18:27"
    ],
    "answerIndex": 0,
    "independentSolution": "36/54=2/3，所以第一圖的任一對應邊也是第二圖的 2/3。",
    "explanation": "相似比等於周長比，36:54 同除 18 得 2:3。",
    "steps": [
      "列周長比 36:54。",
      "同除最大公因數 18。",
      "寫 2:3。"
    ],
    "optionAnalysis": [
      {
        "choice": "2:3",
        "truth": true,
        "reason": "依獨立推導可得到 2:3，符合所有已知條件。"
      },
      {
        "choice": "4:9",
        "truth": false,
        "reason": "這是面積比。"
      },
      {
        "choice": "3:2",
        "truth": false,
        "reason": "方向顛倒。"
      },
      {
        "choice": "18:27",
        "truth": false,
        "reason": "等值但尚未最簡。"
      }
    ],
    "misconceptionTarget": "未化簡或取倒比。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "周長同為 cm，單位約去。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "由周長反求相似比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c8193da367b156bafc466b49f117a928604b2b4fd3a0f399158539de032f7242"
  },
  {
    "questionId": "u18-s010-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "小三角形周長 24，與大三角形相似，且小:大相似比為 3:7。大三角形周長為何？",
    "text": "小三角形周長 24，與大三角形相似，且小:大相似比為 3:7。大三角形周長為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "28",
      "42",
      "56",
      "130.67"
    ],
    "answerIndex": 2,
    "independentSolution": "24 代表 3 份，每份 8；大圖 7 份為 56。",
    "explanation": "周長比 3:7，故大周長=24×7/3=56。",
    "steps": [
      "寫 24:P=3:7。",
      "交叉相乘。",
      "求 P=56。"
    ],
    "optionAnalysis": [
      {
        "choice": "28",
        "truth": false,
        "reason": "把倍率誤作 7-3=4 後加到 24。"
      },
      {
        "choice": "42",
        "truth": false,
        "reason": "只乘 7/4。"
      },
      {
        "choice": "56",
        "truth": true,
        "reason": "依獨立推導可得到 56，符合所有已知條件。"
      },
      {
        "choice": "130.67",
        "truth": false,
        "reason": "誤用面積倍率 49/9。"
      }
    ],
    "misconceptionTarget": "用差或平方倍率處理周長。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本未知周長比例。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a6cad91e97fb250da3992acc172825689dacd37f4723d0eb89c364cfa7032274"
  },
  {
    "questionId": "u18-s010-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個相似五邊形的對應邊比為 4:9，較大五邊形周長 72 cm，較小周長為多少？",
    "text": "兩個相似五邊形的對應邊比為 4:9，較大五邊形周長 72 cm，較小周長為多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "16 cm",
      "48 cm",
      "162 cm",
      "32 cm"
    ],
    "answerIndex": 3,
    "independentSolution": "大周長 72 為 9 份，每份 8，較小 4 份為 32 cm。",
    "explanation": "小:大周長比=4:9，所以小周長=72×4/9=32 cm。",
    "steps": [
      "固定小:大方向。",
      "用周長比 4:9。",
      "計算 72×4/9。"
    ],
    "optionAnalysis": [
      {
        "choice": "16 cm",
        "truth": false,
        "reason": "誤用面積比 16:81 後近似。"
      },
      {
        "choice": "48 cm",
        "truth": false,
        "reason": "把倍率寫成 2/3。"
      },
      {
        "choice": "162 cm",
        "truth": false,
        "reason": "方向反轉。"
      },
      {
        "choice": "32 cm",
        "truth": true,
        "reason": "依獨立推導可得到 32 cm，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "相似比方向與已知大小不匹配。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "周長均使用 cm。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "反向由大周長求小周長。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a411b3e5e8f31eb5f9895d943428cf8814ddd8ce4f47d505dab10909cbf583bb"
  },
  {
    "questionId": "u18-s010-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "相似圖形 A、B 的周長比 A:B=5:8。若 A 的一條邊長 15 cm，則 B 的對應邊長為何？",
    "text": "相似圖形 A、B 的周長比 A:B=5:8。若 A 的一條邊長 15 cm，則 B 的對應邊長為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "24 cm",
      "18 cm",
      "9.375 cm",
      "38.4 cm"
    ],
    "answerIndex": 0,
    "independentSolution": "A 的 15 cm 對應 5 份，每份 3 cm，B 的 8 份為 24 cm。",
    "explanation": "相似比等於周長比 5:8，15:x=5:8，所以 x=24 cm。",
    "steps": [
      "由周長比得到邊比。",
      "列 15:x=5:8。",
      "求 x=24。"
    ],
    "optionAnalysis": [
      {
        "choice": "24 cm",
        "truth": true,
        "reason": "依獨立推導可得到 24 cm，符合所有已知條件。"
      },
      {
        "choice": "18 cm",
        "truth": false,
        "reason": "把周長差 3 份當 3 cm。"
      },
      {
        "choice": "9.375 cm",
        "truth": false,
        "reason": "方向取反。"
      },
      {
        "choice": "38.4 cm",
        "truth": false,
        "reason": "誤用平方倍率。"
      }
    ],
    "misconceptionTarget": "認為周長比只适用於總和而不能反推單邊。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "由周長比反推對應邊。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8742da6ddf157c4999a8f2010794ce47182bb1907cbdb3de62d8047a4f0ac0a9"
  },
  {
    "questionId": "u18-s010-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "某相似圖形線性放大為原來的 1.25 倍，原周長 64 cm，新周長為何？",
    "text": "某相似圖形線性放大為原來的 1.25 倍，原周長 64 cm，新周長為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "100 cm",
      "65.25 cm",
      "80 cm",
      "51.2 cm"
    ],
    "answerIndex": 2,
    "independentSolution": "1.25=5/4，64×5/4=80。",
    "explanation": "周長是線性量，新周長=64×1.25=80 cm。",
    "steps": [
      "確認 1.25 是新/原倍率。",
      "周長乘一次倍率。",
      "計算 80。"
    ],
    "optionAnalysis": [
      {
        "choice": "100 cm",
        "truth": false,
        "reason": "誤用 1.25²。"
      },
      {
        "choice": "65.25 cm",
        "truth": false,
        "reason": "把倍率當增加量。"
      },
      {
        "choice": "80 cm",
        "truth": true,
        "reason": "依獨立推導可得到 80 cm，符合所有已知條件。"
      },
      {
        "choice": "51.2 cm",
        "truth": false,
        "reason": "使用縮小方向 1/1.25。"
      }
    ],
    "misconceptionTarget": "將周長使用面積平方倍率。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "小數縮放倍率的線性應用。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ebba9de56032c136dea16a63ea805fc031488630c247447837cf14a4c00c4199"
  },
  {
    "questionId": "u18-s010-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩相似三角形周長分別為 45 與 x+15，且第一:第二相似比為 3:5，則 x 為何？",
    "text": "兩相似三角形周長分別為 45 與 x+15，且第一:第二相似比為 3:5，則 x 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "30",
      "45",
      "90",
      "60"
    ],
    "answerIndex": 3,
    "independentSolution": "第一周長 45 是 3 份，每份 15，第二 5 份為 75；故 x=75-15=60。",
    "explanation": "45/(x+15)=3/5，所以 x+15=75，x=60。",
    "steps": [
      "列周長比例。",
      "求第二周長 75。",
      "解 x=60。"
    ],
    "optionAnalysis": [
      {
        "choice": "30",
        "truth": false,
        "reason": "把第二周長誤設為 75 後減 45。"
      },
      {
        "choice": "45",
        "truth": false,
        "reason": "忘记 x+15 中的 15。"
      },
      {
        "choice": "90",
        "truth": false,
        "reason": "把 45 乘 5/3 後未減 15。"
      },
      {
        "choice": "60",
        "truth": true,
        "reason": "依獨立推導可得到 60，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "求得周長後没有解回代數未知數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 100,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "周長比例中含一次代數式。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ee73f17e6334ee9c572a37f33b6d057bd78aca82f291a118d893092476273f95"
  },
  {
    "questionId": "u18-s010-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "相似六邊形 A、B 的相似比為 7:4。A 周長比 B 多 33 cm，則 B 周長為何？",
    "text": "相似六邊形 A、B 的相似比為 7:4。A 周長比 B 多 33 cm，則 B 周長為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "33 cm",
      "44 cm",
      "77 cm",
      "132 cm"
    ],
    "answerIndex": 1,
    "independentSolution": "設 PA=7k、PB=4k；3k=33，k=11，PB=44。",
    "explanation": "A:B=7:4，周長差 3 份為 33 cm，每份 11 cm，B=4×11=44 cm。",
    "steps": [
      "求差份數 3。",
      "求每份 11 cm。",
      "B 取 4 份。"
    ],
    "optionAnalysis": [
      {
        "choice": "33 cm",
        "truth": false,
        "reason": "把周長差直接當 B。"
      },
      {
        "choice": "44 cm",
        "truth": true,
        "reason": "依獨立推導可得到 44 cm，符合所有已知條件。"
      },
      {
        "choice": "77 cm",
        "truth": false,
        "reason": "這是 A 周長。"
      },
      {
        "choice": "132 cm",
        "truth": false,
        "reason": "把差 3 份錯當 1 份。"
      }
    ],
    "misconceptionTarget": "已知周長差却用總份數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "周長與差均為 cm。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "由周長差與相似比反求周長。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "635ff1069dd56b614a455cfb6ffc822fed912487d035915aca837ed5c272bc85"
  },
  {
    "questionId": "u18-s010-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩相似圖形的面積比為 81:121，第一圖周長為 54 cm。第二圖周長為何？",
    "text": "兩相似圖形的面積比為 81:121，第一圖周長為 54 cm。第二圖周長為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "73.33 cm",
      "54×121/81 cm",
      "66 cm",
      "44.18 cm"
    ],
    "answerIndex": 2,
    "independentSolution": "54÷9=6，每份 6 cm，第二圖 11 份為 66 cm。",
    "explanation": "相似比為 √81:√121=9:11，周長比同為 9:11；第二周長=54×11/9=66 cm。",
    "steps": [
      "從面積比開正平方根。",
      "得到周長比 9:11。",
      "求第二周長 66。"
    ],
    "optionAnalysis": [
      {
        "choice": "73.33 cm",
        "truth": false,
        "reason": "把面積比 81:121 直接用於周長。"
      },
      {
        "choice": "54×121/81 cm",
        "truth": false,
        "reason": "同樣誤用面積倍率。"
      },
      {
        "choice": "66 cm",
        "truth": true,
        "reason": "依獨立推導可得到 66 cm，符合所有已知條件。"
      },
      {
        "choice": "44.18 cm",
        "truth": false,
        "reason": "取相似比方向反。"
      }
    ],
    "misconceptionTarget": "把面積比直接當周長比。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 120,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需先由面積比反推線性比，再求周長。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ff46571a98c5ef1ff093fbda19d22069afb529f77783b1898bc070b37c753113"
  },
  {
    "questionId": "u18-s010-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "地圖上一個相似湖泊轮廓的周長為 8.4 cm，比例尺為 1:25000。實際湖岸線約多少公裡？",
    "text": "地圖上一個相似湖泊轮廓的周長為 8.4 cm，比例尺為 1:25000。實際湖岸線約多少公裡？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "0.336 km",
      "21 km",
      "525 km",
      "2.1 km"
    ],
    "answerIndex": 3,
    "independentSolution": "1 cm 代表 250 m，因此 8.4 cm 代表 8.4×250=2100 m=2.1 km。",
    "explanation": "實際周長=8.4×25000=210000 cm=2100 m=2.1 km。",
    "steps": [
      "乘比例尺 25000。",
      "cm 轉 m 除 100。",
      "m 轉 km 除 1000。"
    ],
    "optionAnalysis": [
      {
        "choice": "0.336 km",
        "truth": false,
        "reason": "把 8.4÷25000 後錯誤換算。"
      },
      {
        "choice": "21 km",
        "truth": false,
        "reason": "厘米轉公裡少除一個 10。"
      },
      {
        "choice": "525 km",
        "truth": false,
        "reason": "誤將面積倍率用於周長。"
      },
      {
        "choice": "2.1 km",
        "truth": true,
        "reason": "依獨立推導可得到 2.1 km，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "比例尺與長度單位換算混乱。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "1 km=100000 cm；210000 cm=2.1 km。",
    "ambiguityAndBoundaryAudit": "忽略湖岸曲線測量誤差，按題給圖上周長計算約值。",
    "difficultyReason": "比例尺、周長與厘米至公裡的多步換算。",
    "literacyContextNecessity": "地圖轮廓周長需要以線性比例尺換成實際岸線長度，單位轉換是情境核心。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e7263a4d932f184bf9a80729622f9858fd48fb307624d945f46f8569d5cbd94f"
  },
  {
    "questionId": "u18-s010-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "某品牌將相似商標由小版放大到大版，小版周長 120 mm，大版制作時几何周長按 3:2 放大，另需固定增加 8 mm 接合邊。大版實際材料長度為何？",
    "text": "某品牌將相似商標由小版放大到大版，小版周長 120 mm，大版制作時几何周長按 3:2 放大，另需固定增加 8 mm 接合邊。大版實際材料長度為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "180 mm",
      "188 mm",
      "192 mm",
      "278 mm"
    ],
    "answerIndex": 1,
    "independentSolution": "接合邊不屬於相似圖形的周界縮放；因此 120×1.5+8=188。",
    "explanation": "大版几何周長=120×3/2=180 mm，固定接合邊另加 8 mm，材料長 188 mm。",
    "steps": [
      "先按線性倍率求 180。",
      "辨認 8 mm 為固定附加量。",
      "相加得 188。"
    ],
    "optionAnalysis": [
      {
        "choice": "180 mm",
        "truth": false,
        "reason": "只算几何周長，漏加接合邊。"
      },
      {
        "choice": "188 mm",
        "truth": true,
        "reason": "依獨立推導可得到 188 mm，符合所有已知條件。"
      },
      {
        "choice": "192 mm",
        "truth": false,
        "reason": "把接合邊也按 3:2 放大。"
      },
      {
        "choice": "278 mm",
        "truth": false,
        "reason": "誤用平方倍率。"
      }
    ],
    "misconceptionTarget": "把固定附加量一起縮放或漏加。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "所有長度使用 mm；不需四舍五入。",
    "ambiguityAndBoundaryAudit": "『固定增加 8 mm』表示縮放後再加的绝對長度。",
    "difficultyReason": "區分相似周長與非縮放固定材料。",
    "literacyContextNecessity": "實際印制材料包含几何邊界與固定接合量，兩者的縮放規則不同。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "551c39a5278f71c3373abcb991354beffe3cc70dbd9f060e6643848dd8962551"
  },
  {
    "questionId": "u18-s010-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩款相似跑道模型的周長比為 4:7。大模型每绕一圈為 350 m，小模型運動員跑 12 圈。若比較總路程，大模型跑几圈才與小模型相同？",
    "text": "兩款相似跑道模型的周長比為 4:7。大模型每绕一圈為 350 m，小模型運動員跑 12 圈。若比較總路程，大模型跑几圈才與小模型相同？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "48/7 圈",
      "7 圈",
      "12×7/4 圈",
      "3 圈"
    ],
    "answerIndex": 0,
    "independentSolution": "總路程相同滿足 12×4份=n×7份，所以 n=48/7。",
    "explanation": "小圈長=350×4/7=200 m；小跑 12 圈共 2400 m。大圈數=2400÷350=48/7 圈。",
    "steps": [
      "求小模型圈長 200 m。",
      "求總路程 2400 m。",
      "除以大圈長 350 m。"
    ],
    "optionAnalysis": [
      {
        "choice": "48/7 圈",
        "truth": true,
        "reason": "依獨立推導可得到 48/7 圈，符合所有已知條件。"
      },
      {
        "choice": "7 圈",
        "truth": false,
        "reason": "把周長比項直接當圈數。"
      },
      {
        "choice": "12×7/4 圈",
        "truth": false,
        "reason": "方向相反，得到更大圈數。"
      },
      {
        "choice": "3 圈",
        "truth": false,
        "reason": "把 12×4/7 誤算為整數 3。"
      }
    ],
    "misconceptionTarget": "圈數與單圈周長成同方向比例，未考虑總路程固定時圈數反比。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "總路程以 m，圈數無單位；題目未要求整數圈。",
    "ambiguityAndBoundaryAudit": "『跑几圈才與小模型相同』允许精確分數圈，没有向上取整要求。",
    "difficultyReason": "結合周長比與固定總路程的反比例思考。",
    "literacyContextNecessity": "训練計划比較的是總路程，不是單圈長度；圈數可為分數表示未完整跑完一圈。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "570aa6df20923dfdbddc7fb500ce85c4f5af8d3680e9fd34f5f20c7e61c4d2af"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s010-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "itemType": "constructed-response",
    "prompt": "兩相似多邊形小：大相似比為3：7，周長和為100 cm。求兩個周長。",
    "requiredWork": "利用周長比等於相似比，按總量分配。",
    "standardSolution": "設兩周長為3k、7k，10k=100，k=10，所以小周長30 cm、大周長70 cm。",
    "alternativeMethod": "每份=100÷10=10 cm，直接分配。",
    "reasoningSteps": [
      "寫周長比3：7。",
      "設3k與7k。",
      "由總和求k=10。",
      "給出30、70並驗算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩周長與驗算全部正確。"
      },
      {
        "score": 2,
        "criteria": "方法正確且答案正確但未驗算；或單一算術錯。"
      },
      {
        "score": 1,
        "criteria": "只列3+7=10或只求一個周長。"
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
    "unitAndNotationRules": "周長均以cm表示，兩者和須為100 cm。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "30：70=3：7且總和100，已核對。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "dc1e47bf3e66f829fce56ff744a63cea00b13e137858697019f329399bc2747b"
  },
  {
    "questionId": "u18-s010-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-perimeter",
    "lockedSkillOrder": 10,
    "itemType": "constructed-response",
    "prompt": "相似三角形甲的周長為42 cm，乙的一邊是甲對應邊的5/3倍。若乙三邊中兩邊為20 cm與25 cm，求第三邊並檢查三角形不等式。",
    "requiredWork": "先由線性倍率求乙周長，再扣除兩已知邊並檢查合法性。",
    "standardSolution": "乙周長=42×5/3=70 cm，第三邊=70−20−25=25 cm。檢查20+25>25、20+25>25、25+25>20，均成立。",
    "alternativeMethod": "若甲周長42對應3份，乙5份，先求每份14，再得70。",
    "reasoningSteps": [
      "辨認周長倍率5/3。",
      "求乙周長70。",
      "求第三邊25。",
      "檢查最短兩邊20+25>25。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "第三邊25 cm且完成有效三角形不等式檢查。"
      },
      {
        "score": 2,
        "criteria": "答案25 cm正確但未檢查；或周長方法正確、相減有小錯。"
      },
      {
        "score": 1,
        "criteria": "只把42乘5/3或只列70−20−25。"
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
    "unitAndNotationRules": "長度與周長皆為cm；三角形不等式使用嚴格大於。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "乙周長70、三邊20、25、25和為70，最短兩邊和45>25，合法。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "aef0a111a488ef6ceb819c5b6c7ce7600dab77627c1810940f79d36e8971e173"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s010-v001-semantic-review-r1",
    "questionId": "u18-s010-v001",
    "unitId": "u18",
    "skillId": "similar-ratio-perimeter",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "1a9ab793b9e7d49b8c594fc84ffd451d567151f3eee7fdf6eae627c3c1e7e362",
    "independentSolution": "每一條邊都按 2:5 對應相加，周長也維持 2:5。",
    "derivedAnswer": "2:5",
    "storedAnswer": "2:5",
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
      "scope": "只使用國中會考範圍內的「相似比與周長比」概念，未要求高中延伸。"
    },
    "difficultyReason": "直接套用周長比等於相似比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：每一條邊都按 2:5 對應相加，周長也維持 2:5。 四個選項逐一核對後，只有「2:5」符合；主要排除點是「把周長比誤平方成面積比。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s010-v002-semantic-review-r1",
    "questionId": "u18-s010-v002",
    "unitId": "u18",
    "skillId": "similar-ratio-perimeter",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "c8193da367b156bafc466b49f117a928604b2b4fd3a0f399158539de032f7242",
    "independentSolution": "36/54=2/3，所以第一圖的任一對應邊也是第二圖的 2/3。",
    "derivedAnswer": "2:3",
    "storedAnswer": "2:3",
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
      "units": "周長同為 cm，單位約去。",
      "scope": "只使用國中會考範圍內的「相似比與周長比」概念，未要求高中延伸。"
    },
    "difficultyReason": "由周長反求相似比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：36/54=2/3，所以第一圖的任一對應邊也是第二圖的 2/3。 四個選項逐一核對後，只有「2:3」符合；主要排除點是「未化簡或取倒比。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s010-v003-semantic-review-r1",
    "questionId": "u18-s010-v003",
    "unitId": "u18",
    "skillId": "similar-ratio-perimeter",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "a6cad91e97fb250da3992acc172825689dacd37f4723d0eb89c364cfa7032274",
    "independentSolution": "24 代表 3 份，每份 8；大圖 7 份為 56。",
    "derivedAnswer": "56",
    "storedAnswer": "56",
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
      "scope": "只使用國中會考範圍內的「相似比與周長比」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本未知周長比例。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：24 代表 3 份，每份 8；大圖 7 份為 56。 四個選項逐一核對後，只有「56」符合；主要排除點是「用差或平方倍率處理周長。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s010-v004-semantic-review-r1",
    "questionId": "u18-s010-v004",
    "unitId": "u18",
    "skillId": "similar-ratio-perimeter",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "a411b3e5e8f31eb5f9895d943428cf8814ddd8ce4f47d505dab10909cbf583bb",
    "independentSolution": "大周長 72 為 9 份，每份 8，較小 4 份為 32 cm。",
    "derivedAnswer": "32 cm",
    "storedAnswer": "32 cm",
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
      "units": "周長均使用 cm。",
      "scope": "只使用國中會考範圍內的「相似比與周長比」概念，未要求高中延伸。"
    },
    "difficultyReason": "反向由大周長求小周長。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：大周長 72 為 9 份，每份 8，較小 4 份為 32 cm。 四個選項逐一核對後，只有「32 cm」符合；主要排除點是「相似比方向與已知大小不匹配。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s010-v005-semantic-review-r1",
    "questionId": "u18-s010-v005",
    "unitId": "u18",
    "skillId": "similar-ratio-perimeter",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "8742da6ddf157c4999a8f2010794ce47182bb1907cbdb3de62d8047a4f0ac0a9",
    "independentSolution": "A 的 15 cm 對應 5 份，每份 3 cm，B 的 8 份為 24 cm。",
    "derivedAnswer": "24 cm",
    "storedAnswer": "24 cm",
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
      "scope": "只使用國中會考範圍內的「相似比與周長比」概念，未要求高中延伸。"
    },
    "difficultyReason": "由周長比反推對應邊。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：A 的 15 cm 對應 5 份，每份 3 cm，B 的 8 份為 24 cm。 四個選項逐一核對後，只有「24 cm」符合；主要排除點是「認為周長比只适用於總和而不能反推單邊。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s010-v006-semantic-review-r1",
    "questionId": "u18-s010-v006",
    "unitId": "u18",
    "skillId": "similar-ratio-perimeter",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "ebba9de56032c136dea16a63ea805fc031488630c247447837cf14a4c00c4199",
    "independentSolution": "1.25=5/4，64×5/4=80。",
    "derivedAnswer": "80 cm",
    "storedAnswer": "80 cm",
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
      "scope": "只使用國中會考範圍內的「相似比與周長比」概念，未要求高中延伸。"
    },
    "difficultyReason": "小數縮放倍率的線性應用。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：1.25=5/4，64×5/4=80。 四個選項逐一核對後，只有「80 cm」符合；主要排除點是「將周長使用面積平方倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s010-v007-semantic-review-r1",
    "questionId": "u18-s010-v007",
    "unitId": "u18",
    "skillId": "similar-ratio-perimeter",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "ee73f17e6334ee9c572a37f33b6d057bd78aca82f291a118d893092476273f95",
    "independentSolution": "第一周長 45 是 3 份，每份 15，第二 5 份為 75；故 x=75-15=60。",
    "derivedAnswer": "60",
    "storedAnswer": "60",
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
      "scope": "只使用國中會考範圍內的「相似比與周長比」概念，未要求高中延伸。"
    },
    "difficultyReason": "周長比例中含一次代數式。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：第一周長 45 是 3 份，每份 15，第二 5 份為 75；故 x=75-15=60。 四個選項逐一核對後，只有「60」符合；主要排除點是「求得周長後没有解回代數未知數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s010-v008-semantic-review-r1",
    "questionId": "u18-s010-v008",
    "unitId": "u18",
    "skillId": "similar-ratio-perimeter",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "635ff1069dd56b614a455cfb6ffc822fed912487d035915aca837ed5c272bc85",
    "independentSolution": "設 PA=7k、PB=4k；3k=33，k=11，PB=44。",
    "derivedAnswer": "44 cm",
    "storedAnswer": "44 cm",
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
      "units": "周長與差均為 cm。",
      "scope": "只使用國中會考範圍內的「相似比與周長比」概念，未要求高中延伸。"
    },
    "difficultyReason": "由周長差與相似比反求周長。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設 PA=7k、PB=4k；3k=33，k=11，PB=44。 四個選項逐一核對後，只有「44 cm」符合；主要排除點是「已知周長差却用總份數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s010-v009-semantic-review-r1",
    "questionId": "u18-s010-v009",
    "unitId": "u18",
    "skillId": "similar-ratio-perimeter",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "ff46571a98c5ef1ff093fbda19d22069afb529f77783b1898bc070b37c753113",
    "independentSolution": "54÷9=6，每份 6 cm，第二圖 11 份為 66 cm。",
    "derivedAnswer": "66 cm",
    "storedAnswer": "66 cm",
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
      "scope": "只使用國中會考範圍內的「相似比與周長比」概念，未要求高中延伸。"
    },
    "difficultyReason": "需先由面積比反推線性比，再求周長。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：54÷9=6，每份 6 cm，第二圖 11 份為 66 cm。 四個選項逐一核對後，只有「66 cm」符合；主要排除點是「把面積比直接當周長比。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s010-v010-semantic-review-r1",
    "questionId": "u18-s010-v010",
    "unitId": "u18",
    "skillId": "similar-ratio-perimeter",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "e7263a4d932f184bf9a80729622f9858fd48fb307624d945f46f8569d5cbd94f",
    "independentSolution": "1 cm 代表 250 m，因此 8.4 cm 代表 8.4×250=2100 m=2.1 km。",
    "derivedAnswer": "2.1 km",
    "storedAnswer": "2.1 km",
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
      "boundary": "忽略湖岸曲線測量誤差，按題給圖上周長計算約值。",
      "units": "1 km=100000 cm；210000 cm=2.1 km。",
      "scope": "只使用國中會考範圍內的「相似比與周長比」概念，未要求高中延伸。"
    },
    "difficultyReason": "比例尺、周長與厘米至公裡的多步換算。",
    "literacyNecessityReview": "地圖轮廓周長需要以線性比例尺換成實際岸線長度，單位轉換是情境核心。",
    "reviewerNote": "重新由已知條件獨立計算：1 cm 代表 250 m，因此 8.4 cm 代表 8.4×250=2100 m=2.1 km。 四個選項逐一核對後，只有「2.1 km」符合；主要排除點是「比例尺與長度單位換算混乱。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s010-v011-semantic-review-r1",
    "questionId": "u18-s010-v011",
    "unitId": "u18",
    "skillId": "similar-ratio-perimeter",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "551c39a5278f71c3373abcb991354beffe3cc70dbd9f060e6643848dd8962551",
    "independentSolution": "接合邊不屬於相似圖形的周界縮放；因此 120×1.5+8=188。",
    "derivedAnswer": "188 mm",
    "storedAnswer": "188 mm",
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
      "boundary": "『固定增加 8 mm』表示縮放後再加的绝對長度。",
      "units": "所有長度使用 mm；不需四舍五入。",
      "scope": "只使用國中會考範圍內的「相似比與周長比」概念，未要求高中延伸。"
    },
    "difficultyReason": "區分相似周長與非縮放固定材料。",
    "literacyNecessityReview": "實際印制材料包含几何邊界與固定接合量，兩者的縮放規則不同。",
    "reviewerNote": "重新由已知條件獨立計算：接合邊不屬於相似圖形的周界縮放；因此 120×1.5+8=188。 四個選項逐一核對後，只有「188 mm」符合；主要排除點是「把固定附加量一起縮放或漏加。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s010-v012-semantic-review-r1",
    "questionId": "u18-s010-v012",
    "unitId": "u18",
    "skillId": "similar-ratio-perimeter",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "570aa6df20923dfdbddc7fb500ce85c4f5af8d3680e9fd34f5f20c7e61c4d2af",
    "independentSolution": "總路程相同滿足 12×4份=n×7份，所以 n=48/7。",
    "derivedAnswer": "48/7 圈",
    "storedAnswer": "48/7 圈",
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
      "boundary": "『跑几圈才與小模型相同』允许精確分數圈，没有向上取整要求。",
      "units": "總路程以 m，圈數無單位；題目未要求整數圈。",
      "scope": "只使用國中會考範圍內的「相似比與周長比」概念，未要求高中延伸。"
    },
    "difficultyReason": "結合周長比與固定總路程的反比例思考。",
    "literacyNecessityReview": "训練計划比較的是總路程，不是單圈長度；圈數可為分數表示未完整跑完一圈。",
    "reviewerNote": "重新由已知條件獨立計算：總路程相同滿足 12×4份=n×7份，所以 n=48/7。 四個選項逐一核對後，只有「48/7 圈」符合；主要排除點是「圈數與單圈周長成同方向比例，未考虑總路程固定時圈數反比。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];

