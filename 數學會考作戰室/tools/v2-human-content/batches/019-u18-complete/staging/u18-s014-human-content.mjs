// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s014";

export const SKILL_ID = "ratio-perimeter-application";

export const LECTURE = {
  "lectureId": "u18-s014-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-applications",
  "skillId": "ratio-perimeter-application",
  "lockedSkillOrder": 14,
  "lockedSkillTitle": "周長比應用",
  "title": "周長比應用：模型縮圖與複合邊界的線性縮放",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能把比例尺或放大百分比轉成線性縮放倍數。",
    "能以周長比等於相似比解決模型與縮圖問題。",
    "能判斷複合圖形的外邊界是否也按同一倍數縮放。",
    "能處理單位換算與實際材料長度。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "similar-shadow-problem",
        "title": "影子測量",
        "requiredLevel": "能運用「影子測量」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「影子測量」，先複習其核心判斷，再把方法推進到「周長比應用」。"
  },
  "glossary": [
    {
      "term": "比例尺",
      "definition": "圖上長度與實際長度的比，須使用相同單位。"
    },
    {
      "term": "外邊界",
      "definition": "圖形最外圍一圈的線段總長，不包含內部接縫。"
    },
    {
      "term": "放大率",
      "definition": "新線性尺寸除以原線性尺寸所得倍數。"
    },
    {
      "term": "材料餘量",
      "definition": "實際施工時在幾何周長之外另加的接合或損耗長度。"
    }
  ],
  "notation": [
    {
      "symbol": "1:n",
      "meaning": "圖上 1 個長度單位代表實際 n 個相同單位。"
    },
    {
      "symbol": "P實=nP圖",
      "meaning": "在比例尺 1:n 下，實際周長為圖上周長的 n 倍。"
    },
    {
      "symbol": "P材料=P幾何+餘量",
      "meaning": "材料需求若含接合量，需另行加上。"
    }
  ],
  "conceptNarrative": [
    "比例尺是線性比，因此周長與任何一條對應邊都使用同一倍數。計算前必須把圖上與實際單位統一。",
    "相似的複合圖形若整體每一個線性尺寸都按同一倍數縮放，外邊界周長也按同一倍數縮放。不能只因兩圖形外觀近似就套用。",
    "設計題常把『放大到原來的 120%』與『增加 120%』混淆。前者倍數 1.2，後者新值為原來的 2.2 倍。",
    "材料題若有接縫、折返或損耗，這些固定附加量不隨圖形相似比自動縮放，需在幾何周長之外另算。"
  ],
  "formalDefinitions": [
    {
      "name": "比例尺周長關係",
      "statement": "相似縮圖與實物的周長比等於比例尺的線性比。"
    },
    {
      "name": "固定附加量",
      "statement": "不屬於圖形邊界的接合餘量應在縮放後另加，不能納入周長比。"
    }
  ],
  "formulas": [
    {
      "formula": "P實/P圖=實際長度/圖上長度",
      "conditions": [
        "圖形相似",
        "單位一致"
      ],
      "meaning": "比例尺可直接套用到周長。"
    },
    {
      "formula": "P新=rP原",
      "conditions": [
        "r 為線性放大倍數"
      ],
      "meaning": "整體周長按 r 變化。"
    },
    {
      "formula": "材料長=P新+固定餘量",
      "conditions": [
        "題目明示接合或損耗"
      ],
      "meaning": "區分幾何量與施工量。"
    }
  ],
  "nonApplicableCases": [
    "只有面積比例而未先開根號時，不能直接作為周長比。",
    "固定寬度邊框加入後，內外圖形不一定相似。",
    "內部線段總長不等於外邊界周長。",
    "比例尺單位未統一時，數字比不能直接使用。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "辨認線性比、比例尺或放大率。",
      "check": "是變為 120% 還是增加 120%？"
    },
    {
      "step": 2,
      "instruction": "統一圖上與實際單位。",
      "check": "公分與公尺是否換算？"
    },
    {
      "step": 3,
      "instruction": "確認整體圖形相似及所求為外周長。",
      "check": "是否含內部接縫？"
    },
    {
      "step": 4,
      "instruction": "以相似比乘原周長。",
      "check": "是否誤用平方？"
    },
    {
      "step": 5,
      "instruction": "最後再加固定餘量並做大小檢查。",
      "check": "餘量是否被重複縮放？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "地圖比例尺 1:25000，一塊相似園區在圖上的邊界周長為 18 公分，實際周長多少公裡？",
      "solutionSteps": [
        "實際周長=18×25000=450000 公分。",
        "450000 公分=4500 公尺。",
        "即 4.5 公裡。"
      ],
      "answer": "4.5 公裡"
    },
    {
      "exampleId": "L2",
      "prompt": "徽章設計整體放大到原來 135%，原外周長 80 公分，求新周長。",
      "solutionSteps": [
        "線性倍數為 1.35。",
        "新周長=80×1.35。",
        "得到 108 公分。"
      ],
      "answer": "108 公分"
    },
    {
      "exampleId": "L3",
      "prompt": "相似框架小:大=3:8，小框外周長 54 公分，大框製作另需 6 公分接合餘量，求材料長。",
      "solutionSteps": [
        "大框幾何周長=54×8/3=144 公分。",
        "接合餘量不按比例縮放。",
        "材料長=144+6=150 公分。"
      ],
      "answer": "150 公分"
    },
    {
      "exampleId": "L4",
      "prompt": "兩個長方形面積比 4:9，且已知相似，周長比為何？",
      "solutionSteps": [
        "相似比是面積比的正平方根。",
        "√4:√9=2:3。",
        "周長比等於相似比。"
      ],
      "answer": "2:3"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "比例尺 1:25000 直接把公分答案當公裡。",
      "why": "漏做單位換算。",
      "correction": "先算同單位，再換成所求單位。"
    },
    {
      "mistake": "周長用放大率平方。",
      "why": "與面積混淆。",
      "correction": "周長是線性量。"
    },
    {
      "mistake": "把增加 20% 當變為 20%。",
      "why": "百分比基準不清。",
      "correction": "增加 20% 的倍數是 1.2。"
    },
    {
      "mistake": "固定接合餘量也乘縮放倍數。",
      "why": "未區分圖形邊界與施工附加量。",
      "correction": "先縮放幾何周長，再另加固定量。"
    },
    {
      "mistake": "把內部接縫算入外周長。",
      "why": "沒有追蹤外邊界。",
      "correction": "沿最外圍走一圈只計一次。"
    }
  ],
  "selfCheck": [
    "比例尺單位一致嗎？",
    "所求是幾何周長還是材料長？",
    "圖形整體相似嗎？",
    "周長只乘一次倍率嗎？",
    "固定餘量是否最後才加？"
  ],
  "summary": [
    "比例尺與周長都屬線性比。",
    "相似複合圖形的外邊界按同一倍數縮放。",
    "單位必須先統一。",
    "固定施工餘量不隨圖形自動縮放。"
  ],
  "connections": {
    "previous": "影子測量以線性比例求高度。",
    "next": [
      "面積比應用會處理材料面積與成本。",
      "相似形素養題會同時出現周長、面積與比例尺。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s014-v001",
      "u18-s014-v002",
      "u18-s014-v003",
      "u18-s014-v004",
      "u18-s014-v005",
      "u18-s014-v006",
      "u18-s014-v007",
      "u18-s014-v008",
      "u18-s014-v009",
      "u18-s014-v010",
      "u18-s014-v011",
      "u18-s014-v012"
    ],
    "constructedResponseIds": [
      "u18-s014-cr001",
      "u18-s014-cr002"
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
    "reviewNote": "比例尺例題完整執行公分至公裡換算；百分比、面積反推周長比及固定接合餘量三種易混情境均分開處理，未把非幾何量納入縮放。"
  },
  "contentSha256": "14be488f0a164ebce17f13897e295ff94084c518689af53c0723748ba01e41a7"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s014-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個相似五邊形的相似比（小：大）為 2：5。若小五邊形周長為 18 cm，大五邊形周長為何？",
    "text": "兩個相似五邊形的相似比（小：大）為 2：5。若小五邊形周長為 18 cm，大五邊形周長為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "7.2 cm",
      "45 cm",
      "36 cm",
      "112.5 cm"
    ],
    "answerIndex": 1,
    "independentSolution": "18 cm 對應 2 份，每份 9 cm，大圖 5 份為 45 cm。",
    "explanation": "相似多邊形的周長比等於相似比。大周長=18×5/2=45 cm。",
    "steps": [
      "寫小周長：大周長=2：5。",
      "大周長=18×5/2。",
      "得到 45 cm。"
    ],
    "optionAnalysis": [
      {
        "choice": "7.2 cm",
        "truth": false,
        "reason": "比例方向顛倒。"
      },
      {
        "choice": "45 cm",
        "truth": true,
        "reason": "依獨立推導可得到 45 cm，符合所有已知條件。"
      },
      {
        "choice": "36 cm",
        "truth": false,
        "reason": "只乘 2。"
      },
      {
        "choice": "112.5 cm",
        "truth": false,
        "reason": "把倍率平方。"
      }
    ],
    "misconceptionTarget": "把周長倍率誤當面積倍率平方。",
    "prerequisiteCheck": "能使用相似比與周長比。",
    "estimatedTimeSec": 65,
    "unitAndRoundingCheck": "周長單位為 cm。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "直接由相似比求另一周長。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d83731e817fe6813fa02fc563f2cffcba90488b020725a701536aa6f2f59f2cc"
  },
  {
    "questionId": "u18-s014-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一張長方形照片按相同比例放大，原尺寸 8 cm×12 cm，放大後短邊為 14 cm。放大後照片周長是多少？",
    "text": "一張長方形照片按相同比例放大，原尺寸 8 cm×12 cm，放大後短邊為 14 cm。放大後照片周長是多少？",
    "givenConditions": [
      "照片長寬同比例放大"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "52 cm",
      "84 cm",
      "70 cm",
      "122.5 cm"
    ],
    "answerIndex": 2,
    "independentSolution": "原周長=40 cm，周長也乘 7/4，得 70 cm；與逐邊計算一致。",
    "explanation": "相似倍率=14/8=7/4。新長邊=12×7/4=21 cm，周長=2(14+21)=70 cm。",
    "steps": [
      "求倍率 7/4。",
      "求新長邊 21 cm。",
      "算周長 70 cm。"
    ],
    "optionAnalysis": [
      {
        "choice": "52 cm",
        "truth": false,
        "reason": "只把短邊增加量加到原周長。"
      },
      {
        "choice": "84 cm",
        "truth": false,
        "reason": "把長邊誤算為 28 cm。"
      },
      {
        "choice": "70 cm",
        "truth": true,
        "reason": "依獨立推導可得到 70 cm，符合所有已知條件。"
      },
      {
        "choice": "122.5 cm",
        "truth": false,
        "reason": "把倍率平方後乘周長。"
      }
    ],
    "misconceptionTarget": "只放大一邊或將周長乘倍率平方。",
    "prerequisiteCheck": "能由一組對應邊求相似倍率。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "各邊與周長皆用 cm。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需先求倍率，再求完整周長。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0e9c8d32d6798b507f1ad3bbe1a1a05b91090e9a2eff6e7b23e0736440dcf48f"
  },
  {
    "questionId": "u18-s014-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "模型車與實車相似，模型：實車=1：20。模型外框周長 42 cm，實車對應外框周長為何？",
    "text": "模型車與實車相似，模型：實車=1：20。模型外框周長 42 cm，實車對應外框周長為何？",
    "givenConditions": [
      "模型與實車所有線性尺寸同比例"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "8.4 m",
      "0.84 m",
      "840 m",
      "16.8 m"
    ],
    "answerIndex": 0,
    "independentSolution": "1 m=100 cm，所以 840 cm÷100=8.4 m。",
    "explanation": "實車周長=42×20=840 cm=8.4 m。",
    "steps": [
      "周長乘相似倍率 20。",
      "得到 840 cm。",
      "換算為 8.4 m。"
    ],
    "optionAnalysis": [
      {
        "choice": "8.4 m",
        "truth": true,
        "reason": "依獨立推導可得到 8.4 m，符合所有已知條件。"
      },
      {
        "choice": "0.84 m",
        "truth": false,
        "reason": "少乘 10 倍。"
      },
      {
        "choice": "840 m",
        "truth": false,
        "reason": "公分換公尺錯誤。"
      },
      {
        "choice": "16.8 m",
        "truth": false,
        "reason": "把倍率重複乘 2。"
      }
    ],
    "misconceptionTarget": "倍率正確但單位換算錯誤。",
    "prerequisiteCheck": "能換算 cm 與 m。",
    "estimatedTimeSec": 65,
    "unitAndRoundingCheck": "840 cm=8.4 m。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "結合周長倍率與單位換算。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3dd72d4223c896564e823f645adc0f6c7844bb1d5fef8b2f74593d57c04b168e"
  },
  {
    "questionId": "u18-s014-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個相似三角形周長比為 3：7。大三角形三邊為 14 cm、21 cm、28 cm，小三角形最長邊是多少？",
    "text": "兩個相似三角形周長比為 3：7。大三角形三邊為 14 cm、21 cm、28 cm，小三角形最長邊是多少？",
    "givenConditions": [
      "小三角形與大三角形相似",
      "周長比按小：大給出"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "9 cm",
      "18 cm",
      "65.3 cm",
      "12 cm"
    ],
    "answerIndex": 3,
    "independentSolution": "大三邊按 3/7 縮小為 6、9、12 cm，故最長邊 12 cm。",
    "explanation": "最長邊 28 cm 對應小圖，乘 3/7 得 12 cm。",
    "steps": [
      "確認小：大=3：7。",
      "大圖最長邊是 28 cm。",
      "28×3/7=12。"
    ],
    "optionAnalysis": [
      {
        "choice": "9 cm",
        "truth": false,
        "reason": "把 21 cm 當最長邊。"
      },
      {
        "choice": "18 cm",
        "truth": false,
        "reason": "使用錯誤倍率。"
      },
      {
        "choice": "65.3 cm",
        "truth": false,
        "reason": "把周長比套到周長後未找對應邊。"
      },
      {
        "choice": "12 cm",
        "truth": true,
        "reason": "依獨立推導可得到 12 cm，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "知道周長比卻沒有套用到對應邊。",
    "prerequisiteCheck": "理解周長比等於任一對應邊比。",
    "estimatedTimeSec": 80,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需由周長比推回特定對應邊。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1a1f6a47dc0c984229bb76b166c399f7240709931e7b4aa68407a0cd0fbf3f71"
  },
  {
    "questionId": "u18-s014-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個相似圖形的周長分別為 36 cm 與 54 cm。若較小圖的一邊長 10 cm，較大圖對應邊長為何？",
    "text": "兩個相似圖形的周長分別為 36 cm 與 54 cm。若較小圖的一邊長 10 cm，較大圖對應邊長為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "6.67 cm",
      "18 cm",
      "15 cm",
      "22.5 cm"
    ],
    "answerIndex": 2,
    "independentSolution": "每 2 份對應 10 cm，每份 5 cm，3 份為 15 cm。",
    "explanation": "大：小周長比=54：36=3：2，對應邊同倍率，因此 10×3/2=15 cm。",
    "steps": [
      "化簡周長比 54：36=3：2。",
      "對應邊同樣按 3/2 放大。",
      "求 15 cm。"
    ],
    "optionAnalysis": [
      {
        "choice": "6.67 cm",
        "truth": false,
        "reason": "比例方向顛倒。"
      },
      {
        "choice": "18 cm",
        "truth": false,
        "reason": "只用周長差。"
      },
      {
        "choice": "15 cm",
        "truth": true,
        "reason": "依獨立推導可得到 15 cm，符合所有已知條件。"
      },
      {
        "choice": "22.5 cm",
        "truth": false,
        "reason": "誤用面積倍率。"
      }
    ],
    "misconceptionTarget": "把周長差 18 直接當邊長變化。",
    "prerequisiteCheck": "能由兩周長求線性倍率。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "答案單位為 cm。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "由周長資料反推未知對應邊。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9bc2f80c14d427129d048b03a48fc35baf507d0871fc6e97542cf1db5a8e8fa0"
  },
  {
    "questionId": "u18-s014-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一個相似放大的標誌外框，除圖形周長外還固定多留 4 cm 接縫。原圖形周長 30 cm，放大倍率 1.6。製作時需要的總邊條長度為何？",
    "text": "一個相似放大的標誌外框，除圖形周長外還固定多留 4 cm 接縫。原圖形周長 30 cm，放大倍率 1.6。製作時需要的總邊條長度為何？",
    "givenConditions": [
      "4 cm 是放大後仍固定的加工預留量"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "52 cm",
      "48 cm",
      "54.4 cm",
      "58 cm"
    ],
    "answerIndex": 0,
    "independentSolution": "只有相似圖形本體的線性尺寸乘 1.6；另加工藝接縫 4 cm，故 52 cm。",
    "explanation": "放大後圖形周長=30×1.6=48 cm；固定接縫不隨圖形縮放，再加 4 cm，總長 52 cm。",
    "steps": [
      "先縮放圖形周長。",
      "辨認接縫是固定量。",
      "48+4=52。"
    ],
    "optionAnalysis": [
      {
        "choice": "52 cm",
        "truth": true,
        "reason": "依獨立推導可得到 52 cm，符合所有已知條件。"
      },
      {
        "choice": "48 cm",
        "truth": false,
        "reason": "漏掉固定接縫。"
      },
      {
        "choice": "54.4 cm",
        "truth": false,
        "reason": "把接縫也乘 1.6。"
      },
      {
        "choice": "58 cm",
        "truth": false,
        "reason": "把原周長與放大增量重複相加。"
      }
    ],
    "misconceptionTarget": "把不屬於相似圖形的固定附加量一起縮放。",
    "prerequisiteCheck": "能區分縮放量與固定量。",
    "estimatedTimeSec": 90,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "周長縮放後還需處理不隨倍率改變的固定量。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bb2a6a59f4468b15ba1d2635009f1f7e14a4ea035e4efc413eefbf2815147353"
  },
  {
    "questionId": "u18-s014-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "相似六邊形甲、乙的周長和為 104 cm，且甲：乙的相似比為 5：8。甲的周長是多少？",
    "text": "相似六邊形甲、乙的周長和為 104 cm，且甲：乙的相似比為 5：8。甲的周長是多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "64 cm",
      "32.5 cm",
      "52 cm",
      "40 cm"
    ],
    "answerIndex": 3,
    "independentSolution": "驗算乙=64 cm，40+64=104，且 40：64=5：8。",
    "explanation": "周長比也是 5：8，總份數 13，每份 104÷13=8 cm，甲周長=5×8=40 cm。",
    "steps": [
      "把兩周長設為 5k、8k。",
      "13k=104，得 k=8。",
      "甲=40 cm。"
    ],
    "optionAnalysis": [
      {
        "choice": "64 cm",
        "truth": false,
        "reason": "求成乙的周長。"
      },
      {
        "choice": "32.5 cm",
        "truth": false,
        "reason": "把總和直接乘 5/8。"
      },
      {
        "choice": "52 cm",
        "truth": false,
        "reason": "忽略比例。"
      },
      {
        "choice": "40 cm",
        "truth": true,
        "reason": "依獨立推導可得到 40 cm，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把相似比當作甲占乙的比例，而非總量分配。",
    "prerequisiteCheck": "能以連比分配總量。",
    "estimatedTimeSec": 90,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "結合周長比與總和條件解未知量。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9d046f66c3d16face70a2bef8cefae8b90c0e7e1f863cb7b47c66571ca8298c7"
  },
  {
    "questionId": "u18-s014-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "相似圖形 A、B、C 的周長比 A：B=2：3，B：C=4：5。若 C 周長比 A 多 28 cm，B 周長是多少？",
    "text": "相似圖形 A、B、C 的周長比 A：B=2：3，B：C=4：5。若 C 周長比 A 多 28 cm，B 周長是多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "36 cm",
      "48 cm",
      "42 cm",
      "60 cm"
    ],
    "answerIndex": 1,
    "independentSolution": "若 A=32、B=48、C=60，兩組比與差 28 都成立。",
    "explanation": "統一 B：A：B=8：12，B：C=12：15，所以 A：B：C=8：12：15。C−A=7 份=28，1 份=4，B=48 cm。",
    "steps": [
      "將 2：3 放大成 8：12。",
      "合併為 8：12：15。",
      "用差 7 份求 B=12×4。"
    ],
    "optionAnalysis": [
      {
        "choice": "36 cm",
        "truth": false,
        "reason": "未統一 B 的份數。"
      },
      {
        "choice": "48 cm",
        "truth": true,
        "reason": "依獨立推導可得到 48 cm，符合所有已知條件。"
      },
      {
        "choice": "42 cm",
        "truth": false,
        "reason": "只取兩比平均。"
      },
      {
        "choice": "60 cm",
        "truth": false,
        "reason": "求成 C 的周長。"
      }
    ],
    "misconceptionTarget": "相連比例未把共同項統一。",
    "prerequisiteCheck": "能合併相連比並用差量求份值。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "多圖形周長比需先合併連比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "913972278de050d2bb98236fbc74fbfbe7986b14cd17f6223c9134b460ce83b4"
  },
  {
    "questionId": "u18-s014-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個相似正六邊形的邊長比為 3：5。若沿大六邊形外框每 2 cm 裝一顆燈，且頂點可共用，不計接頭損耗；小六邊形邊長 6 cm，大六邊形需要幾顆燈？",
    "text": "兩個相似正六邊形的邊長比為 3：5。若沿大六邊形外框每 2 cm 裝一顆燈，且頂點可共用，不計接頭損耗；小六邊形邊長 6 cm，大六邊形需要幾顆燈？",
    "givenConditions": [
      "燈沿封閉外框等距配置",
      "相鄰燈中心距 2 cm"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "30 顆",
      "18 顆",
      "50 顆",
      "36 顆"
    ],
    "answerIndex": 0,
    "independentSolution": "沿封閉路徑等距配置時，起點與終點是同一顆，不需再加 1；故為 30 顆。",
    "explanation": "大邊長=6×5/3=10 cm，周長=6×10=60 cm。封閉外框每 2 cm 一顆，60÷2=30 顆。",
    "steps": [
      "求大六邊形邊長 10 cm。",
      "求周長 60 cm。",
      "60÷2=30。"
    ],
    "optionAnalysis": [
      {
        "choice": "30 顆",
        "truth": true,
        "reason": "依獨立推導可得到 30 顆，符合所有已知條件。"
      },
      {
        "choice": "18 顆",
        "truth": false,
        "reason": "使用小六邊形周長。"
      },
      {
        "choice": "50 顆",
        "truth": false,
        "reason": "把邊長倍率平方。"
      },
      {
        "choice": "36 顆",
        "truth": false,
        "reason": "把頂點額外重複計數。"
      }
    ],
    "misconceptionTarget": "線段端點計數規則誤套到封閉外框。",
    "prerequisiteCheck": "能求正六邊形周長並理解封閉等距配置。",
    "estimatedTimeSec": 115,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "結合相似倍率、正多邊形周長與離散配置。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1da9454565056d4bc71db67812d6a448f8dfd05965b7e99e217767a88597a350"
  },
  {
    "questionId": "u18-s014-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "展覽看板設計圖與成品相似，設計圖周長 28 cm，比例尺為 1：15。成品外框另需在四個角各加 3 cm 固定片。購買邊條至少要多少？",
    "text": "展覽看板設計圖與成品相似，設計圖周長 28 cm，比例尺為 1：15。成品外框另需在四個角各加 3 cm 固定片。購買邊條至少要多少？",
    "givenConditions": [
      "固定片長度是成品實際需求",
      "不計裁切損耗"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "4.20 m",
      "4.65 m",
      "6.48 m",
      "4.32 m"
    ],
    "answerIndex": 3,
    "independentSolution": "固定片是成品端的附加量，不再乘 15；420+12=432 cm。",
    "explanation": "成品外框=28×15=420 cm；四角固定片共 12 cm，總長 432 cm=4.32 m。",
    "steps": [
      "依比例尺求成品周長 420 cm。",
      "加四角固定片 4×3=12 cm。",
      "換算 432 cm=4.32 m。"
    ],
    "optionAnalysis": [
      {
        "choice": "4.20 m",
        "truth": false,
        "reason": "漏加四個固定片。"
      },
      {
        "choice": "4.65 m",
        "truth": false,
        "reason": "把每角 3 cm 當 3 m。"
      },
      {
        "choice": "6.48 m",
        "truth": false,
        "reason": "把固定片也乘比例尺。"
      },
      {
        "choice": "4.32 m",
        "truth": true,
        "reason": "依獨立推導可得到 4.32 m，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "忽略固定耗材或把附加量重複縮放。",
    "prerequisiteCheck": "能解讀比例尺並換算長度。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "432 cm=4.32 m。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需整合比例尺、周長與固定材料。",
    "literacyContextNecessity": "工程採購量包含圖形外框與不可省略的角部固定片。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7d03eff1105e902094705cefe47834703d48b519b0f5b4ecdd80f0acd1b36afb"
  },
  {
    "questionId": "u18-s014-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一款窗框有小型與大型兩種相似規格。小型外框周長 3.6 m，大型線性倍率為 1.25。每支鋁條長 2 m，切割損耗忽略不計。製作 3 個大型窗框至少需幾支鋁條？",
    "text": "一款窗框有小型與大型兩種相似規格。小型外框周長 3.6 m，大型線性倍率為 1.25。每支鋁條長 2 m，切割損耗忽略不計。製作 3 個大型窗框至少需幾支鋁條？",
    "givenConditions": [
      "鋁條可跨窗框裁切使用",
      "不計切割損耗"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "6 支",
      "7 支",
      "8 支",
      "9 支"
    ],
    "answerIndex": 1,
    "independentSolution": "6 支只有 12 m，不足；7 支有 14 m，足夠且最少。",
    "explanation": "每個大型周長=3.6×1.25=4.5 m；3 個共 13.5 m。13.5÷2=6.75，材料支數須向上取整為 7。",
    "steps": [
      "求單個大型周長 4.5 m。",
      "乘 3 得 13.5 m。",
      "除以每支 2 m 並向上取整。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 支",
        "truth": false,
        "reason": "只取 13.5÷2 的整數部分。"
      },
      {
        "choice": "7 支",
        "truth": true,
        "reason": "依獨立推導可得到 7 支，符合所有已知條件。"
      },
      {
        "choice": "8 支",
        "truth": false,
        "reason": "過度向上多取一支。"
      },
      {
        "choice": "9 支",
        "truth": false,
        "reason": "把倍率套用到數量兩次。"
      }
    ],
    "misconceptionTarget": "材料數量可分割卻不能購買小數支，忘記向上取整。",
    "prerequisiteCheck": "能處理實務中的向上取整。",
    "estimatedTimeSec": 110,
    "unitAndRoundingCheck": "總需求與單支長度皆為 m。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "相似周長後還要做採購整數決策。",
    "literacyContextNecessity": "整支材料的採購限制直接影響答案。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "81a6166027779cb5d2643375a52498010e5ef07583196e31e811de61490be1cf"
  },
  {
    "questionId": "u18-s014-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "校徽 A 與 B 相似，B 的周長是 A 的 1.4 倍。廠商報價規則為：外框每公尺 120 元，另收固定開版費 300 元。若 A 周長 2.5 m，製作 B 的總價多少？",
    "text": "校徽 A 與 B 相似，B 的周長是 A 的 1.4 倍。廠商報價規則為：外框每公尺 120 元，另收固定開版費 300 元。若 A 周長 2.5 m，製作 B 的總價多少？",
    "givenConditions": [
      "報價未含其他費用"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "420 元",
      "588 元",
      "720 元",
      "770 元"
    ],
    "answerIndex": 2,
    "independentSolution": "固定開版費不隨周長改變；只有每公尺費用隨周長計算。",
    "explanation": "B 周長=2.5×1.4=3.5 m，外框費=3.5×120=420 元，再加固定費 300 元，共 720 元。",
    "steps": [
      "求 B 周長 3.5 m。",
      "算變動外框費 420 元。",
      "加固定費 300 元。"
    ],
    "optionAnalysis": [
      {
        "choice": "420 元",
        "truth": false,
        "reason": "只算外框費，漏開版費。"
      },
      {
        "choice": "588 元",
        "truth": false,
        "reason": "把總價直接乘 1.4。"
      },
      {
        "choice": "720 元",
        "truth": true,
        "reason": "依獨立推導可得到 720 元，符合所有已知條件。"
      },
      {
        "choice": "770 元",
        "truth": false,
        "reason": "把開版費也乘倍率。"
      }
    ],
    "misconceptionTarget": "把固定成本也當作相似縮放量。",
    "prerequisiteCheck": "能區分固定費與按長度計價。",
    "estimatedTimeSec": 100,
    "unitAndRoundingCheck": "3.5 m×120 元/m=420 元。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "周長倍率與分段成本模型整合。",
    "literacyContextNecessity": "報價中的固定費與變動費不可刪除，會改變總價。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cffe0fda8e517d684217d7a2a1eefd6a327e4c7c62e7affcffd193f8c35b24af"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s014-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "itemType": "constructed-response",
    "prompt": "一個相似放大的相框，原圖形外框周長2.8 m，線性倍率1.5。製作每個成品另需固定0.12 m接合重疊。製作4個成品至少需要多少公尺邊條？",
    "requiredWork": "先縮放圖形周長，再加每個固定重疊，最後乘件數。",
    "standardSolution": "每個放大外框周長=2.8×1.5=4.2 m；加重疊0.12 m得4.32 m。4個共4.32×4=17.28 m。",
    "alternativeMethod": "總圖形周長=2.8×1.5×4=16.8 m，總重疊=0.12×4=0.48 m，合計17.28 m。",
    "reasoningSteps": [
      "求放大外框4.2 m。",
      "每件加固定0.12 m。",
      "得每件4.32 m。",
      "乘4得17.28 m。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整得到17.28 m，且固定重疊沒有被縮放。"
      },
      {
        "score": 2,
        "criteria": "方法正確但一處乘法錯；或答案正確未清楚分開固定量。"
      },
      {
        "score": 1,
        "criteria": "只求4.2 m或把0.12也乘1.5。"
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
    "unitAndNotationRules": "所有材料長度以m表示。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "逐件法與總量拆分法都得17.28，確認固定接合量按件計而非按倍率計。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "6d509be8d89efba5de375223f930205d976f4b23702e08cc28136482f0b6067c"
  },
  {
    "questionId": "u18-s014-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-perimeter-application",
    "lockedSkillOrder": 14,
    "itemType": "constructed-response",
    "prompt": "大型相似窗框周長是小型的1.8倍。小型周長3.5 m。鋁條每支2.4 m，可跨窗框裁切，總損耗估計5%。製作5個大型窗框至少買幾支？",
    "requiredWork": "先求理論總長，再加入5%損耗，最後依整支材料向上取整。",
    "standardSolution": "單個大型周長=3.5×1.8=6.3 m；5個理論量31.5 m；含損耗31.5×1.05=33.075 m。33.075÷2.4=13.78125，所以至少14支。",
    "alternativeMethod": "檢查13支只有31.2 m不足，14支有33.6 m足夠。",
    "reasoningSteps": [
      "求單個6.3 m。",
      "求5個31.5 m。",
      "加5%得33.075 m。",
      "除2.4並向上取整為14。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "各階段與14支結論正確，並說明向上取整。"
      },
      {
        "score": 2,
        "criteria": "理論總量與損耗正確，但最後取整錯；或只有一處算術錯但決策方法完整。"
      },
      {
        "score": 1,
        "criteria": "只算31.5÷2.4或忘記損耗。"
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
    "unitAndNotationRules": "長度以m，採購量以整數「支」；損耗在總理論量上計。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "13支不足含損耗需求，14支足夠，向上取整合理。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "25adceb4fae4d7093a491148c8f4d87f6019fa028402471af7dd4ed8aeb17b96"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s014-v001-semantic-review-r1",
    "questionId": "u18-s014-v001",
    "unitId": "u18",
    "skillId": "ratio-perimeter-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "d83731e817fe6813fa02fc563f2cffcba90488b020725a701536aa6f2f59f2cc",
    "independentSolution": "18 cm 對應 2 份，每份 9 cm，大圖 5 份為 45 cm。",
    "derivedAnswer": "45 cm",
    "storedAnswer": "45 cm",
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
      "units": "周長單位為 cm。",
      "scope": "只使用國中會考範圍內的「周長比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "直接由相似比求另一周長。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：18 cm 對應 2 份，每份 9 cm，大圖 5 份為 45 cm。 四個選項逐一核對後，只有「45 cm」符合；主要排除點是「把周長倍率誤當面積倍率平方。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s014-v002-semantic-review-r1",
    "questionId": "u18-s014-v002",
    "unitId": "u18",
    "skillId": "ratio-perimeter-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "0e9c8d32d6798b507f1ad3bbe1a1a05b91090e9a2eff6e7b23e0736440dcf48f",
    "independentSolution": "原周長=40 cm，周長也乘 7/4，得 70 cm；與逐邊計算一致。",
    "derivedAnswer": "70 cm",
    "storedAnswer": "70 cm",
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
      "units": "各邊與周長皆用 cm。",
      "scope": "只使用國中會考範圍內的「周長比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "需先求倍率，再求完整周長。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：原周長=40 cm，周長也乘 7/4，得 70 cm；與逐邊計算一致。 四個選項逐一核對後，只有「70 cm」符合；主要排除點是「只放大一邊或將周長乘倍率平方。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s014-v003-semantic-review-r1",
    "questionId": "u18-s014-v003",
    "unitId": "u18",
    "skillId": "ratio-perimeter-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "3dd72d4223c896564e823f645adc0f6c7844bb1d5fef8b2f74593d57c04b168e",
    "independentSolution": "1 m=100 cm，所以 840 cm÷100=8.4 m。",
    "derivedAnswer": "8.4 m",
    "storedAnswer": "8.4 m",
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
      "units": "840 cm=8.4 m。",
      "scope": "只使用國中會考範圍內的「周長比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "結合周長倍率與單位換算。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：1 m=100 cm，所以 840 cm÷100=8.4 m。 四個選項逐一核對後，只有「8.4 m」符合；主要排除點是「倍率正確但單位換算錯誤。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s014-v004-semantic-review-r1",
    "questionId": "u18-s014-v004",
    "unitId": "u18",
    "skillId": "ratio-perimeter-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "1a1f6a47dc0c984229bb76b166c399f7240709931e7b4aa68407a0cd0fbf3f71",
    "independentSolution": "大三邊按 3/7 縮小為 6、9、12 cm，故最長邊 12 cm。",
    "derivedAnswer": "12 cm",
    "storedAnswer": "12 cm",
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
      "scope": "只使用國中會考範圍內的「周長比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "需由周長比推回特定對應邊。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：大三邊按 3/7 縮小為 6、9、12 cm，故最長邊 12 cm。 四個選項逐一核對後，只有「12 cm」符合；主要排除點是「知道周長比卻沒有套用到對應邊。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s014-v005-semantic-review-r1",
    "questionId": "u18-s014-v005",
    "unitId": "u18",
    "skillId": "ratio-perimeter-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "9bc2f80c14d427129d048b03a48fc35baf507d0871fc6e97542cf1db5a8e8fa0",
    "independentSolution": "每 2 份對應 10 cm，每份 5 cm，3 份為 15 cm。",
    "derivedAnswer": "15 cm",
    "storedAnswer": "15 cm",
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
      "units": "答案單位為 cm。",
      "scope": "只使用國中會考範圍內的「周長比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "由周長資料反推未知對應邊。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：每 2 份對應 10 cm，每份 5 cm，3 份為 15 cm。 四個選項逐一核對後，只有「15 cm」符合；主要排除點是「把周長差 18 直接當邊長變化。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s014-v006-semantic-review-r1",
    "questionId": "u18-s014-v006",
    "unitId": "u18",
    "skillId": "ratio-perimeter-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "bb2a6a59f4468b15ba1d2635009f1f7e14a4ea035e4efc413eefbf2815147353",
    "independentSolution": "只有相似圖形本體的線性尺寸乘 1.6；另加工藝接縫 4 cm，故 52 cm。",
    "derivedAnswer": "52 cm",
    "storedAnswer": "52 cm",
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
      "scope": "只使用國中會考範圍內的「周長比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "周長縮放後還需處理不隨倍率改變的固定量。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：只有相似圖形本體的線性尺寸乘 1.6；另加工藝接縫 4 cm，故 52 cm。 四個選項逐一核對後，只有「52 cm」符合；主要排除點是「把不屬於相似圖形的固定附加量一起縮放。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s014-v007-semantic-review-r1",
    "questionId": "u18-s014-v007",
    "unitId": "u18",
    "skillId": "ratio-perimeter-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "9d046f66c3d16face70a2bef8cefae8b90c0e7e1f863cb7b47c66571ca8298c7",
    "independentSolution": "驗算乙=64 cm，40+64=104，且 40：64=5：8。",
    "derivedAnswer": "40 cm",
    "storedAnswer": "40 cm",
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
      "scope": "只使用國中會考範圍內的「周長比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "結合周長比與總和條件解未知量。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：驗算乙=64 cm，40+64=104，且 40：64=5：8。 四個選項逐一核對後，只有「40 cm」符合；主要排除點是「把相似比當作甲占乙的比例，而非總量分配。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s014-v008-semantic-review-r1",
    "questionId": "u18-s014-v008",
    "unitId": "u18",
    "skillId": "ratio-perimeter-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "913972278de050d2bb98236fbc74fbfbe7986b14cd17f6223c9134b460ce83b4",
    "independentSolution": "若 A=32、B=48、C=60，兩組比與差 28 都成立。",
    "derivedAnswer": "48 cm",
    "storedAnswer": "48 cm",
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
      "scope": "只使用國中會考範圍內的「周長比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "多圖形周長比需先合併連比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：若 A=32、B=48、C=60，兩組比與差 28 都成立。 四個選項逐一核對後，只有「48 cm」符合；主要排除點是「相連比例未把共同項統一。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s014-v009-semantic-review-r1",
    "questionId": "u18-s014-v009",
    "unitId": "u18",
    "skillId": "ratio-perimeter-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "1da9454565056d4bc71db67812d6a448f8dfd05965b7e99e217767a88597a350",
    "independentSolution": "沿封閉路徑等距配置時，起點與終點是同一顆，不需再加 1；故為 30 顆。",
    "derivedAnswer": "30 顆",
    "storedAnswer": "30 顆",
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
      "scope": "只使用國中會考範圍內的「周長比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "結合相似倍率、正多邊形周長與離散配置。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：沿封閉路徑等距配置時，起點與終點是同一顆，不需再加 1；故為 30 顆。 四個選項逐一核對後，只有「30 顆」符合；主要排除點是「線段端點計數規則誤套到封閉外框。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s014-v010-semantic-review-r1",
    "questionId": "u18-s014-v010",
    "unitId": "u18",
    "skillId": "ratio-perimeter-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "7d03eff1105e902094705cefe47834703d48b519b0f5b4ecdd80f0acd1b36afb",
    "independentSolution": "固定片是成品端的附加量，不再乘 15；420+12=432 cm。",
    "derivedAnswer": "4.32 m",
    "storedAnswer": "4.32 m",
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
      "units": "432 cm=4.32 m。",
      "scope": "只使用國中會考範圍內的「周長比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "需整合比例尺、周長與固定材料。",
    "literacyNecessityReview": "工程採購量包含圖形外框與不可省略的角部固定片。",
    "reviewerNote": "重新由已知條件獨立計算：固定片是成品端的附加量，不再乘 15；420+12=432 cm。 四個選項逐一核對後，只有「4.32 m」符合；主要排除點是「忽略固定耗材或把附加量重複縮放。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s014-v011-semantic-review-r1",
    "questionId": "u18-s014-v011",
    "unitId": "u18",
    "skillId": "ratio-perimeter-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "81a6166027779cb5d2643375a52498010e5ef07583196e31e811de61490be1cf",
    "independentSolution": "6 支只有 12 m，不足；7 支有 14 m，足夠且最少。",
    "derivedAnswer": "7 支",
    "storedAnswer": "7 支",
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
      "units": "總需求與單支長度皆為 m。",
      "scope": "只使用國中會考範圍內的「周長比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "相似周長後還要做採購整數決策。",
    "literacyNecessityReview": "整支材料的採購限制直接影響答案。",
    "reviewerNote": "重新由已知條件獨立計算：6 支只有 12 m，不足；7 支有 14 m，足夠且最少。 四個選項逐一核對後，只有「7 支」符合；主要排除點是「材料數量可分割卻不能購買小數支，忘記向上取整。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s014-v012-semantic-review-r1",
    "questionId": "u18-s014-v012",
    "unitId": "u18",
    "skillId": "ratio-perimeter-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "cffe0fda8e517d684217d7a2a1eefd6a327e4c7c62e7affcffd193f8c35b24af",
    "independentSolution": "固定開版費不隨周長改變；只有每公尺費用隨周長計算。",
    "derivedAnswer": "720 元",
    "storedAnswer": "720 元",
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
      "units": "3.5 m×120 元/m=420 元。",
      "scope": "只使用國中會考範圍內的「周長比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "周長倍率與分段成本模型整合。",
    "literacyNecessityReview": "報價中的固定費與變動費不可刪除，會改變總價。",
    "reviewerNote": "重新由已知條件獨立計算：固定開版費不隨周長改變；只有每公尺費用隨周長計算。 四個選項逐一核對後，只有「720 元」符合；主要排除點是「把固定成本也當作相似縮放量。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];

