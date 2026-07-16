// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s016";

export const SKILL_ID = "similarity-literacy";

export const LECTURE = {
  "lectureId": "u18-s016-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-literacy",
  "skillId": "similarity-literacy",
  "lockedSkillOrder": 16,
  "lockedSkillTitle": "相似形素養題",
  "title": "相似形素養題：讀資料與建模型並檢查限制",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能從圖表、規格或測量紀錄中找出相似條件。",
    "能在連比、相似比、周長比與面積比之間選擇正確模型。",
    "能處理單位、誤差、整數需求與資料充分性。",
    "能以多步推理檢查結論而非只套公式。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "ratio-area-application",
        "title": "面積比應用",
        "requiredLevel": "能運用「面積比應用」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「面積比應用」，先複習其核心判斷，再把方法推進到「相似形素養題」。"
  },
  "glossary": [
    {
      "term": "模型假設",
      "definition": "為了使用相似關係而必須成立的條件，例如平行、同時測量或等比縮放。"
    },
    {
      "term": "資料充分性",
      "definition": "所給資訊是否足以唯一決定答案。"
    },
    {
      "term": "測量誤差",
      "definition": "測得值與真值可能存在的差異，會影響比例結果。"
    },
    {
      "term": "敏感度",
      "definition": "輸入誤差對輸出結果的影響程度。"
    }
  ],
  "notation": [
    {
      "symbol": "線性倍率 k",
      "meaning": "長度與周長的倍率。"
    },
    {
      "symbol": "面積倍率 k²",
      "meaning": "相似平面圖形面積的倍率。"
    },
    {
      "symbol": "估計區間",
      "meaning": "依測量誤差上下界計算可能的答案範圍。"
    }
  ],
  "conceptNarrative": [
    "素養題的困難通常不在單一公式，而在判斷哪些資料代表同類量、哪些條件保證相似，以及答案應使用一次還是平方倍率。",
    "閱讀規格表時先整理『對象—量—單位—時間—條件』。例如影子資料若不同時間，數字再完整也不能直接建立相似。",
    "多步問題常先由面積比開根號求線性比，再用周長或長度；或先由比例尺求實際長度，再計算材料。每一步都要記錄比值方向。",
    "測量值有誤差時，精確等號可能不適合。可使用上下界估計，並說明結果是約值。若人數或片數必須為整數，還要依題意決定進位方式。"
  ],
  "formalDefinitions": [
    {
      "name": "相似模型選擇",
      "statement": "只有當對應角、邊比例或題目明示等比縮放等條件成立時，才可使用相似比關係。"
    },
    {
      "name": "尺度判斷",
      "statement": "長度與周長使用 k，面積使用 k²；固定附加量與非相似變形另行處理。"
    }
  ],
  "formulas": [
    {
      "formula": "長度、周長倍率=k",
      "conditions": [
        "相似或等比縮放"
      ],
      "meaning": "一次尺度。"
    },
    {
      "formula": "面積倍率=k²",
      "conditions": [
        "相似平面區域"
      ],
      "meaning": "二次尺度。"
    },
    {
      "formula": "最少整數數量=向上取整(需求量/單件容量)",
      "conditions": [
        "不可購買部分單位"
      ],
      "meaning": "把連續幾何量轉成離散採購量。"
    }
  ],
  "nonApplicableCases": [
    "資料表中尺寸比例不一致時，不能宣稱產品等比縮放。",
    "測量時間、地面坡度或角度條件不同時，影子模型可能失效。",
    "固定邊框、固定接縫與固定厚度不一定按相似比變化。",
    "近似測量結果不應寫成無誤差的精確值。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "整理對象、已知量、單位與條件。",
      "check": "資料是否同時、同尺度或同覆蓋率？"
    },
    {
      "step": 2,
      "instruction": "指出相似成立的理由或判定資料不足。",
      "check": "是否只憑外觀？"
    },
    {
      "step": 3,
      "instruction": "固定比值方向並選擇 k 或 k²。",
      "check": "所求是線性量還是面積量？"
    },
    {
      "step": 4,
      "instruction": "完成多步計算與單位換算。",
      "check": "固定附加量是否分開？"
    },
    {
      "step": 5,
      "instruction": "做合理性、誤差與離散需求檢查。",
      "check": "答案應精確、約值、四捨五入還是向上取整？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "兩款相似海報面積比 16:25，小款周長 96 公分，求大款周長。",
      "solutionSteps": [
        "相似比小:大=4:5。",
        "周長比等於相似比。",
        "大款周長=96×5/4=120 公分。"
      ],
      "answer": "120 公分"
    },
    {
      "exampleId": "L2",
      "prompt": "比例尺 1:500 的相似廣場圖面積 48 平方公分，每平方公尺鋪面需 0.2 包材料，至少需幾包？",
      "solutionSteps": [
        "實際面積=48×500²=12000000 平方公分=1200 平方公尺。",
        "材料需求=1200×0.2=240 包。",
        "結果已是整數。"
      ],
      "answer": "240 包"
    },
    {
      "exampleId": "L3",
      "prompt": "標竿高 1.00±0.01 公尺，影長 0.80±0.01 公尺，樹影長 6.0 公尺，估計樹高約多少？",
      "solutionSteps": [
        "中心估計高影比=1.00/0.80=1.25。",
        "樹高中心估計=6.0×1.25=7.5 公尺。",
        "因標竿與影長有誤差，答案應寫約 7.5 公尺而非絕對精確。"
      ],
      "answer": "約 7.5 公尺"
    },
    {
      "exampleId": "L4",
      "prompt": "某產品長度放大 2 倍，但寬度只放大 1.5 倍，能否用相似面積倍率 4？",
      "solutionSteps": [
        "相似要求各方向線性倍率相同。",
        "長、寬倍率不同，圖形不是等比縮放。",
        "面積倍率應直接算 2×1.5=3，而非 4。"
      ],
      "answer": "不能；面積倍率為 3"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "看到兩張同形狀圖片就假設相似。",
      "why": "未檢查尺寸比例。",
      "correction": "比較至少兩個方向的線性倍率或使用判定條件。"
    },
    {
      "mistake": "面積比直接當周長比。",
      "why": "沒有先開正平方根。",
      "correction": "由面積到線性先取平方根。"
    },
    {
      "mistake": "固定餘量也乘 k。",
      "why": "未區分幾何尺度與外加條件。",
      "correction": "相似部分先縮放，固定量另加。"
    },
    {
      "mistake": "採購片數四捨五入。",
      "why": "忽略不能買半片或不足量。",
      "correction": "若需滿足最低需求，向上取整。"
    },
    {
      "mistake": "測量估計寫成精確等號。",
      "why": "忽略輸入誤差。",
      "correction": "使用『約』並說明誤差來源。"
    }
  ],
  "selfCheck": [
    "相似條件真的成立嗎？",
    "所求量應用 k 還是 k²？",
    "比值方向是否一致？",
    "單位與固定附加量已處理嗎？",
    "結果需估計或向上取整嗎？"
  ],
  "summary": [
    "素養題先判斷模型，再計算。",
    "長度與周長用 k，面積用 k²。",
    "資料充分性、單位、誤差與整數限制都要檢查。",
    "不等比變形與固定附加量不能硬套相似公式。"
  ],
  "connections": {
    "previous": "整合本單元前十五個技能。",
    "next": [
      "後續圓與幾何單元仍會使用比例、相似與尺度推理。"
    ]
  },
  "figureReferences": [
    {
      "figureId": "u18-literacy-q010",
      "purpose": "協助辨認「相似形素養題」中的對應關係；圖不按比例時不得憑外觀猜答案。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s016-v001",
      "u18-s016-v002",
      "u18-s016-v003",
      "u18-s016-v004",
      "u18-s016-v005",
      "u18-s016-v006",
      "u18-s016-v007",
      "u18-s016-v008",
      "u18-s016-v009",
      "u18-s016-v010",
      "u18-s016-v011",
      "u18-s016-v012"
    ],
    "constructedResponseIds": [
      "u18-s016-cr001",
      "u18-s016-cr002"
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
    "reviewNote": "整合題逐一標記模型假設、尺度次方、單位與離散限制；含資料不足、測量誤差與非等比變形案例，避免將素養情境退化為單一步驟套公式。"
  },
  "contentSha256": "b984ebc1da64d959ee844b98fead8c66107eb4c55cc55109c4623d0a438932ac"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s016-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個相似三角形的面積比為 16：25。它們的周長比為何？",
    "text": "兩個相似三角形的面積比為 16：25。它們的周長比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "16：25",
      "8：10",
      "2：5",
      "4：5"
    ],
    "answerIndex": 3,
    "independentSolution": "若線性倍率為 4/5，面積倍率為 16/25，與題意相符。",
    "explanation": "面積比是相似比的平方，因此周長比=相似比=√16：√25=4：5。",
    "steps": [
      "對面積比兩項開平方。",
      "得到 4：5。",
      "周長比等於相似比。"
    ],
    "optionAnalysis": [
      {
        "choice": "16：25",
        "truth": false,
        "reason": "把面積比直接當周長比。"
      },
      {
        "choice": "8：10",
        "truth": false,
        "reason": "雖等值但不是最簡整數比。"
      },
      {
        "choice": "2：5",
        "truth": false,
        "reason": "錯誤開平方。"
      },
      {
        "choice": "4：5",
        "truth": true,
        "reason": "依獨立推導可得到 4：5，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "沒有分清線性比與面積比。",
    "prerequisiteCheck": "能連結相似比、周長比與面積比。",
    "estimatedTimeSec": 65,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本跨概念轉換。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "654fe1954bf54d699b9f463e7f33bbb6392f7b2506125595793b34a4c7db3fa3"
  },
  {
    "questionId": "u18-s016-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "地圖比例尺為 1：5000。圖上兩地距離 3.6 cm，實際距離為何？",
    "text": "地圖比例尺為 1：5000。圖上兩地距離 3.6 cm，實際距離為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "180 m",
      "18 m",
      "1.8 km",
      "1800 m"
    ],
    "answerIndex": 0,
    "independentSolution": "1 m=100 cm，18000÷100=180 m。",
    "explanation": "實際距離=3.6×5000=18000 cm=180 m。",
    "steps": [
      "乘比例尺倍率 5000。",
      "得到 18000 cm。",
      "換算成 180 m。"
    ],
    "optionAnalysis": [
      {
        "choice": "180 m",
        "truth": true,
        "reason": "依獨立推導可得到 180 m，符合所有已知條件。"
      },
      {
        "choice": "18 m",
        "truth": false,
        "reason": "少乘一個 10。"
      },
      {
        "choice": "1.8 km",
        "truth": false,
        "reason": "公分換公里錯誤。"
      },
      {
        "choice": "1800 m",
        "truth": false,
        "reason": "多乘一個 10。"
      }
    ],
    "misconceptionTarget": "比例尺倍率或單位換算錯誤。",
    "prerequisiteCheck": "能處理線性比例尺。",
    "estimatedTimeSec": 65,
    "unitAndRoundingCheck": "18000 cm=180 m。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "直接比例尺與長度換算。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bb3ab61d9e4106a28ca73c68d2f9cfeace60918f3f6614f230eecf3da7a57c0c"
  },
  {
    "questionId": "u18-s016-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一張長方形海報由 20 cm×30 cm 放大成 50 cm×75 cm。下列敘述何者正確？",
    "text": "一張長方形海報由 20 cm×30 cm 放大成 50 cm×75 cm。下列敘述何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "兩海報不相似，因周長不同",
      "周長與面積都放大 2.5 倍",
      "兩海報相似，周長倍率 2.5，面積倍率 6.25",
      "周長倍率 6.25，面積倍率 2.5"
    ],
    "answerIndex": 2,
    "independentSolution": "原長寬比 2：3，新長寬比也為 2：3；面積由 600 變 3750，倍率 6.25。",
    "explanation": "50/20=75/30=2.5，所以相似；周長乘 2.5，面積乘 2.5²=6.25。",
    "steps": [
      "比較長邊與短邊倍率。",
      "確認兩倍率相同。",
      "分別判斷周長與面積倍率。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩海報不相似，因周長不同",
        "truth": false,
        "reason": "相似圖形可有不同大小。"
      },
      {
        "choice": "周長與面積都放大 2.5 倍",
        "truth": false,
        "reason": "面積倍率應平方。"
      },
      {
        "choice": "兩海報相似，周長倍率 2.5，面積倍率 6.25",
        "truth": true,
        "reason": "依獨立推導可得到 兩海報相似，周長倍率 2.5，面積倍率 6.25，符合所有已知條件。"
      },
      {
        "choice": "周長倍率 6.25，面積倍率 2.5",
        "truth": false,
        "reason": "兩倍率顛倒。"
      }
    ],
    "misconceptionTarget": "把相似誤認為同樣大小，或混淆周長與面積倍率。",
    "prerequisiteCheck": "能檢查相似並計算兩種倍率。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "同時判斷相似性、周長與面積。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "44f73b6d3944bb8d76ea3584932a0e3908f1d6e73a27d414cf17190b9e15be61"
  },
  {
    "questionId": "u18-s016-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一個三角形模型的三邊為 6、8、10 cm。另一模型三邊為 9、12、15 cm。若第一個面積為 24 cm²，第二個面積為何？",
    "text": "一個三角形模型的三邊為 6、8、10 cm。另一模型三邊為 9、12、15 cm。若第一個面積為 24 cm²，第二個面積為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "36 cm²",
      "54 cm²",
      "60 cm²",
      "81 cm²"
    ],
    "answerIndex": 1,
    "independentSolution": "第二組邊為第一組各乘 3/2；24×9/4=54。",
    "explanation": "三邊同比 1.5，兩三角形相似；面積倍率=1.5²=2.25，第二面積=24×2.25=54 cm²。",
    "steps": [
      "以 SSS 確認相似倍率 1.5。",
      "平方得面積倍率 2.25。",
      "求 54 cm²。"
    ],
    "optionAnalysis": [
      {
        "choice": "36 cm²",
        "truth": false,
        "reason": "只乘線性倍率 1.5。"
      },
      {
        "choice": "54 cm²",
        "truth": true,
        "reason": "依獨立推導可得到 54 cm²，符合所有已知條件。"
      },
      {
        "choice": "60 cm²",
        "truth": false,
        "reason": "把面積增量估錯。"
      },
      {
        "choice": "81 cm²",
        "truth": false,
        "reason": "誤以為面積倍率為 3.375。"
      }
    ],
    "misconceptionTarget": "確認相似後仍只用線性倍率處理面積。",
    "prerequisiteCheck": "能以 SSS 判定相似並套用面積比。",
    "estimatedTimeSec": 85,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "先判定相似，再轉換面積。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0448c5f569f05a59f4cbeb4467755fd6d9398e2309ae12ff92ddd3122cdefa72"
  },
  {
    "questionId": "u18-s016-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "相似圖形甲、乙的周長比為 3：4，乙、丙的面積比為 25：36，且三者依序由小到大相似。甲：丙的相似比為何？",
    "text": "相似圖形甲、乙的周長比為 3：4，乙、丙的面積比為 25：36，且三者依序由小到大相似。甲：丙的相似比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "5：8",
      "25：48",
      "15：24",
      "3：6"
    ],
    "answerIndex": 0,
    "independentSolution": "可統一乙份數：甲：乙=15：20，乙：丙=20：24，因此甲：丙=15：24=5：8。",
    "explanation": "甲：乙線性比=3：4；乙：丙線性比=√25：√36=5：6。甲：丙=(3/4)(5/6)=15/24=5/8。",
    "steps": [
      "把乙丙面積比開平方為 5：6。",
      "相乘甲乙與乙丙倍率。",
      "化簡 15：24=5：8。"
    ],
    "optionAnalysis": [
      {
        "choice": "5：8",
        "truth": true,
        "reason": "依獨立推導可得到 5：8，符合所有已知條件。"
      },
      {
        "choice": "25：48",
        "truth": false,
        "reason": "直接把周長比與面積比相乘。"
      },
      {
        "choice": "15：24",
        "truth": false,
        "reason": "等值但未化簡，且推導未開平方。"
      },
      {
        "choice": "3：6",
        "truth": false,
        "reason": "忽略乙到丙的倍率 5：6。"
      }
    ],
    "misconceptionTarget": "相連倍率中未先把面積比轉為線性比。",
    "prerequisiteCheck": "能連結周長比、面積比並合併相連比例。",
    "estimatedTimeSec": 100,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "跨三個圖形合併兩種不同型態的比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a3359f45ae748f7d3d00e49e510ea3e79f848243394f7b8355e29a349ad35573"
  },
  {
    "questionId": "u18-s016-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "某影印機設定為 120%，表示長與寬都成為原來的 1.2 倍。若原稿面積 250 cm²，連續影印兩次後面積約為何？",
    "text": "某影印機設定為 120%，表示長與寬都成為原來的 1.2 倍。若原稿面積 250 cm²，連續影印兩次後面積約為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "360 cm²",
      "432 cm²",
      "518.4 cm²",
      "625 cm²"
    ],
    "answerIndex": 2,
    "independentSolution": "兩次後線性倍率=1.2²=1.44，面積倍率=1.44²=2.0736，結果相同。",
    "explanation": "每次面積乘 1.2²=1.44；兩次乘 1.44²=2.0736，面積=250×2.0736=518.4 cm²。",
    "steps": [
      "求單次面積倍率 1.44。",
      "兩次總倍率 1.44²。",
      "乘原面積得 518.4。"
    ],
    "optionAnalysis": [
      {
        "choice": "360 cm²",
        "truth": false,
        "reason": "每次只把面積乘 1.2。"
      },
      {
        "choice": "432 cm²",
        "truth": false,
        "reason": "只平方一次後再乘 1.2。"
      },
      {
        "choice": "518.4 cm²",
        "truth": true,
        "reason": "依獨立推導可得到 518.4 cm²，符合所有已知條件。"
      },
      {
        "choice": "625 cm²",
        "truth": false,
        "reason": "把兩次設定誤成線性倍率 2.5。"
      }
    ],
    "misconceptionTarget": "連續縮放時漏掉一次平方或一次倍率。",
    "prerequisiteCheck": "能處理重複相似縮放。",
    "estimatedTimeSec": 95,
    "unitAndRoundingCheck": "面積單位維持 cm²。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "連續兩次線性縮放造成四次方的面積效應。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "34976ed12800812655b6c70cf4b2f36150e90ecb02f4dc9299ca7dd597236bff"
  },
  {
    "questionId": "u18-s016-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "某相似三角形的面積倍率為 2.25，較大三角形周長比小三角形多 18 cm。小三角形周長是多少？",
    "text": "某相似三角形的面積倍率為 2.25，較大三角形周長比小三角形多 18 cm。小三角形周長是多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "24 cm",
      "36 cm",
      "18 cm",
      "72 cm"
    ],
    "answerIndex": 1,
    "independentSolution": "大周長=54 cm，差 18，且 54/36=1.5，驗算成立。",
    "explanation": "線性倍率=√2.25=1.5。設小周長 P，則 1.5P−P=18，0.5P=18，所以 P=36 cm。",
    "steps": [
      "由面積倍率求線性倍率 1.5。",
      "設小周長 P。",
      "解 0.5P=18。"
    ],
    "optionAnalysis": [
      {
        "choice": "24 cm",
        "truth": false,
        "reason": "把面積倍率 2.25 當周長倍率。"
      },
      {
        "choice": "36 cm",
        "truth": true,
        "reason": "依獨立推導可得到 36 cm，符合所有已知條件。"
      },
      {
        "choice": "18 cm",
        "truth": false,
        "reason": "把周長差當原周長。"
      },
      {
        "choice": "72 cm",
        "truth": false,
        "reason": "比例方向錯誤。"
      }
    ],
    "misconceptionTarget": "直接用面積倍率建立周長差方程。",
    "prerequisiteCheck": "能由面積倍率反推周長倍率並解方程。",
    "estimatedTimeSec": 100,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需要逆推倍率再利用差量條件。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9ffd30691b26a356c69ec7dfdbd3c57f2b3c74b461aef253623d2ce1efaab651"
  },
  {
    "questionId": "u18-s016-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一個圓錐形紙杯的所有線性尺寸放大為 2 倍。只依國中會考縮放概念，下列何者正確？",
    "text": "一個圓錐形紙杯的所有線性尺寸放大為 2 倍。只依國中會考縮放概念，下列何者正確？",
    "givenConditions": [
      "只考縮放倍率概念，不計杯厚與實際容量損失"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "三者都變 2 倍",
      "周長 4 倍、面積 8 倍、容量 16 倍",
      "周長 2 倍、面積 2 倍、容量 4 倍",
      "杯口圓周長變 2 倍，表面上對應面積變 4 倍，容量概念上變 8 倍"
    ],
    "answerIndex": 3,
    "independentSolution": "可想像長、寬、高各乘 2；底面兩方向乘出 4，三方向乘出 8。",
    "explanation": "線性量乘 k，面積量乘 k²，體積量概念上乘 k³；k=2 時分別為 2、4、8。",
    "steps": [
      "辨認周長屬線性量。",
      "表面區域屬面積量。",
      "容量屬體積量，套 2³。"
    ],
    "optionAnalysis": [
      {
        "choice": "三者都變 2 倍",
        "truth": false,
        "reason": "面積與體積未平方、立方。"
      },
      {
        "choice": "周長 4 倍、面積 8 倍、容量 16 倍",
        "truth": false,
        "reason": "各次方皆錯。"
      },
      {
        "choice": "周長 2 倍、面積 2 倍、容量 4 倍",
        "truth": false,
        "reason": "面積與體積倍率不足。"
      },
      {
        "choice": "杯口圓周長變 2 倍，表面上對應面積變 4 倍，容量概念上變 8 倍",
        "truth": true,
        "reason": "依獨立推導可得到 杯口圓周長變 2 倍，表面上對應面積變 4 倍，容量概念上變 8 倍，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把所有量都乘同一線性倍率。",
    "prerequisiteCheck": "理解線性、面積與體積的倍率次方。",
    "estimatedTimeSec": 90,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "在 CAP 邊界內整合線性、面積與體積縮放概念。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "35f4b9a700e513c9ec658c363119f9e899b6a4fe7870231831e604bc315e2043"
  },
  {
    "questionId": "u18-s016-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一張相似地圖原比例尺 1：25000，影印時長與寬縮成 80%。影印後地圖上 4 cm 代表實際多少公里？",
    "text": "一張相似地圖原比例尺 1：25000，影印時長與寬縮成 80%。影印後地圖上 4 cm 代表實際多少公里？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "0.8 km",
      "1 km",
      "1.25 km",
      "1.5625 km"
    ],
    "answerIndex": 2,
    "independentSolution": "原圖上 5 cm 代表 1.25 km；縮成 80% 後變 4 cm，所以影印圖 4 cm 仍代表 1.25 km。",
    "explanation": "縮小後 0.8 cm 對應原圖 1 cm，所以影印圖 1 cm 對應實際 25000/0.8=31250 cm。4 cm 對應 125000 cm=1.25 km。",
    "steps": [
      "求新圖 1 cm 對應原圖 1/0.8 cm。",
      "得到新比例尺 1：31250。",
      "4×31250 cm=1.25 km。"
    ],
    "optionAnalysis": [
      {
        "choice": "0.8 km",
        "truth": false,
        "reason": "把 80% 直接乘實際距離。"
      },
      {
        "choice": "1 km",
        "truth": false,
        "reason": "沿用原比例尺。"
      },
      {
        "choice": "1.25 km",
        "truth": true,
        "reason": "依獨立推導可得到 1.25 km，符合所有已知條件。"
      },
      {
        "choice": "1.5625 km",
        "truth": false,
        "reason": "把新比例尺方向顛倒。"
      }
    ],
    "misconceptionTarget": "影印縮小後仍沿用原比例尺。",
    "prerequisiteCheck": "能更新縮放後的比例尺。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "125000 cm=1250 m=1.25 km。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "影印倍率會改變地圖比例尺，需要逆向換算。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "be9ef3b526afca09064b50f1e94372a7e8f7d398cbf580a7060f79e331a74a0f"
  },
  {
    "questionId": "u18-s016-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "圖中小三角形 ABC 與大三角形 ADE 共用頂點 A，BC∥DE。已知 AB=6、AD=15、△ABC 面積為 24 cm²，求四邊形 BCED 的面積。",
    "text": "圖中小三角形 ABC 與大三角形 ADE 共用頂點 A，BC∥DE。已知 AB=6、AD=15、△ABC 面積為 24 cm²，求四邊形 BCED 的面積。",
    "givenConditions": [
      "圖不按比例",
      "B、A、D 與 C、A、E 的對應依標示確定"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "60 cm²",
      "126 cm²",
      "96 cm²",
      "150 cm²"
    ],
    "answerIndex": 1,
    "independentSolution": "環帶四邊形是大三角形去掉小三角形；24(25/4−1)=24×21/4=126。",
    "explanation": "因 BC∥DE，△ABC∼△ADE，線性倍率=15/6=2.5；大三角形面積=24×2.5²=150，四邊形面積=150−24=126 cm²。",
    "steps": [
      "由平行線判定 AA 相似。",
      "求面積倍率 6.25。",
      "大面積扣小面積。"
    ],
    "optionAnalysis": [
      {
        "choice": "60 cm²",
        "truth": false,
        "reason": "只按線性倍率求大面積。"
      },
      {
        "choice": "126 cm²",
        "truth": true,
        "reason": "依獨立推導可得到 126 cm²，符合所有已知條件。"
      },
      {
        "choice": "96 cm²",
        "truth": false,
        "reason": "把大面積誤算為 120。"
      },
      {
        "choice": "150 cm²",
        "truth": false,
        "reason": "求成大三角形面積，未扣小三角形。"
      }
    ],
    "misconceptionTarget": "求出大三角形面積後忘記題目要差區域。",
    "prerequisiteCheck": "能以平行線建立相似並求面積差。",
    "estimatedTimeSec": 115,
    "unitAndRoundingCheck": "結果為面積 cm²。",
    "ambiguityAndBoundaryAudit": "圖形明示 BC∥DE 且小三角形位於大三角形內，四邊形 BCED 是唯一差區域。",
    "difficultyReason": "需從圖判定相似、平方倍率並求複合面積。",
    "literacyContextNecessity": "分區設計圖必須透過圖形看出大區域扣除內部三角形。",
    "visualMode": "figure-supported",
    "figureId": "u18-literacy-q010",
    "drawingSpecReference": "figures/u18/u18-literacy-q010.svg",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a80605b25db81c3d21e26fa471ebd50b50f4d718d8cd78ffa332da434af63941"
  },
  {
    "questionId": "u18-s016-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "無人機照片中，一座長方形球場量得 3.2 cm×1.8 cm。已知照片水平方向比例尺 1：1000、垂直方向比例尺 1：800。能否直接說照片與實際球場相似？",
    "text": "無人機照片中，一座長方形球場量得 3.2 cm×1.8 cm。已知照片水平方向比例尺 1：1000、垂直方向比例尺 1：800。能否直接說照片與實際球場相似？",
    "givenConditions": [
      "兩方向比例尺分別可靠"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "能，因照片與實際都是長方形",
      "能，因比例尺都大於 1",
      "不能，因實際球場一定不是長方形",
      "不能，因兩方向縮放倍率不同"
    ],
    "answerIndex": 3,
    "independentSolution": "照片長寬比=3.2/1.8；實際長寬比=(3.2×1000)/(1.8×800)，兩者不同，因此不相似。",
    "explanation": "相似要求所有方向使用同一線性倍率；水平與垂直比例尺不同，影像被非等比拉伸。",
    "steps": [
      "比較兩方向比例尺。",
      "判斷倍率不一致。",
      "拒絕套用相似圖形的面積平方公式。"
    ],
    "optionAnalysis": [
      {
        "choice": "能，因照片與實際都是長方形",
        "truth": false,
        "reason": "同為長方形不保證長寬比相同。"
      },
      {
        "choice": "能，因比例尺都大於 1",
        "truth": false,
        "reason": "倍率大小不是相似條件。"
      },
      {
        "choice": "不能，因實際球場一定不是長方形",
        "truth": false,
        "reason": "題目已說實際球場為長方形。"
      },
      {
        "choice": "不能，因兩方向縮放倍率不同",
        "truth": true,
        "reason": "依獨立推導可得到 不能，因兩方向縮放倍率不同，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "只看形狀名稱相同就判定相似。",
    "prerequisiteCheck": "理解相似要求各對應方向倍率一致。",
    "estimatedTimeSec": 100,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需要辨識非等比影像校正問題。",
    "literacyContextNecessity": "航拍影像的橫縱比例尺差異決定能否直接使用相似模型。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "69df43fb27c2fac053633c0a57f54c6ed2d075cb2a4c56d8aa7a446451d9e6ad"
  },
  {
    "questionId": "u18-s016-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "某產品包裝有兩款相似外形。大型線性倍率為 1.25；小型外框材料費 80 元、表面印刷費 120 元，另每件固定組裝費 50 元。假設外框費與周長成正比、印刷費與面積成正比，大型每件成本為何？",
    "text": "某產品包裝有兩款相似外形。大型線性倍率為 1.25；小型外框材料費 80 元、表面印刷費 120 元，另每件固定組裝費 50 元。假設外框費與周長成正比、印刷費與面積成正比，大型每件成本為何？",
    "givenConditions": [
      "各費用與題述量成正比",
      "無其他費用"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "337.5 元",
      "312.5 元",
      "375 元",
      "390.625 元"
    ],
    "answerIndex": 0,
    "independentSolution": "100+187.5+50=337.5；三種成本分別對應長度、面積與固定量。",
    "explanation": "大型外框費=80×1.25=100；印刷費=120×1.25²=187.5；固定費仍 50，總計 337.5 元。",
    "steps": [
      "按線性倍率算外框費。",
      "按平方倍率算印刷費。",
      "加不縮放的固定費。"
    ],
    "optionAnalysis": [
      {
        "choice": "337.5 元",
        "truth": true,
        "reason": "依獨立推導可得到 337.5 元，符合所有已知條件。"
      },
      {
        "choice": "312.5 元",
        "truth": false,
        "reason": "把全部成本都乘 1.25。"
      },
      {
        "choice": "375 元",
        "truth": false,
        "reason": "把外框與印刷都按面積倍率。"
      },
      {
        "choice": "390.625 元",
        "truth": false,
        "reason": "把固定費也乘面積倍率。"
      }
    ],
    "misconceptionTarget": "把不同量綱的成本全部套同一倍率。",
    "prerequisiteCheck": "能區分線性、面積與固定成本。",
    "estimatedTimeSec": 115,
    "unitAndRoundingCheck": "各項皆為元，總價 337.5 元。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "同一情境內需對三類成本使用不同縮放規則。",
    "literacyContextNecessity": "成本拆分對應周長、面積與固定工序，任何一項都不可省略。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f16e5d2e4169e13e7b6ea4fcc45ae4a7b69fbd4d13b14de43a6eb13c64a63994"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s016-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "itemType": "constructed-response",
    "prompt": "某包裝有小、大兩款相似外形，大款線性倍率1.4。小款外框材料費60元、表面材料費90元、固定組裝費50元。外框費與周長成正比，表面費與面積成正比。求大款成本並解釋三項費用為何使用不同倍率。",
    "requiredWork": "分別依線性量、面積量與固定量處理，再加總。",
    "standardSolution": "大款外框費=60×1.4=84元；表面費=90×1.4²=90×1.96=176.4元；組裝費固定50元。總成本=84+176.4+50=310.4元。外框隨長度乘1.4，表面隨面積乘1.4²，固定費不縮放。",
    "alternativeMethod": "可寫總成本函數60k+90k²+50，代k=1.4。",
    "reasoningSteps": [
      "辨認三種成本所依附的量。",
      "計算84、176.4與50。",
      "加總310.4。",
      "解釋倍率差異。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "總成本310.4元與三種倍率理由完整正確。"
      },
      {
        "score": 2,
        "criteria": "總價或一項金額有小錯，但分類與倍率概念正確。"
      },
      {
        "score": 1,
        "criteria": "把全部費用乘同一倍率，或只算一項。"
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
    "unitAndNotationRules": "金額以元，線性倍率無單位；不得把固定費乘倍率。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "代入成本函數與分項計算皆得310.4，量綱分類一致。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "da40f5b7b06b73ed5645d49039d63b9fc406773d2ab2fc5ac0af58765f0f3940"
  },
  {
    "questionId": "u18-s016-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-literacy",
    "skillId": "similarity-literacy",
    "lockedSkillOrder": 16,
    "itemType": "constructed-response",
    "prompt": "地圖原比例尺1：20000，影印後水平方向縮成75%、垂直方向縮成80%。原圖上一塊長方形區域為4 cm×3 cm。求影印後圖上的長寬，並判斷影印圖是否仍與原圖相似；若要估實際面積，應使用原圖還是直接用單一新比例尺？",
    "requiredWork": "計算兩方向影印尺寸，檢查倍率是否一致，再選擇可靠面積換算方法。",
    "standardSolution": "影印後水平長=4×0.75=3 cm，垂直寬=3×0.80=2.4 cm。因0.75≠0.80，影印圖與原圖不相似，不能用單一線性比例尺。應以原圖4×3=12 cm²配合原比例尺的面積倍率20000²換算，或分別校正兩方向。",
    "alternativeMethod": "實際長=4×20000 cm=800 m，寬=3×20000 cm=600 m，實際面積480000 m²；此直接由原圖線性資料換算。",
    "reasoningSteps": [
      "求影印後3 cm與2.4 cm。",
      "比較0.75與0.80。",
      "判定非等比縮放、不相似。",
      "指出不能使用單一新比例尺並提出原圖換算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "尺寸、非相似判定與正確換算策略全部完整。"
      },
      {
        "score": 2,
        "criteria": "尺寸與判定正確，但換算策略說明不完整；或只有一個尺寸小錯。"
      },
      {
        "score": 1,
        "criteria": "只算尺寸，或因仍是長方形就說相似。"
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
    "unitAndNotationRules": "圖上長度cm；實際長度換算時注意cm到m；相似判定需兩方向倍率相同。",
    "answerOnlyPolicy": "只寫『不相似』沒有尺寸與理由，給1分。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "影印後長寬比3/2.4=1.25，原圖4/3≈1.333，不同；原圖換算得800 m×600 m=480000 m²。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "d08a22643ec3707f9fcb19b510f75eb8a7e7af6133a50cca20cad5efed56506c"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s016-v001-semantic-review-r1",
    "questionId": "u18-s016-v001",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "654fe1954bf54d699b9f463e7f33bbb6392f7b2506125595793b34a4c7db3fa3",
    "independentSolution": "若線性倍率為 4/5，面積倍率為 16/25，與題意相符。",
    "derivedAnswer": "4：5",
    "storedAnswer": "4：5",
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
      "scope": "只使用國中會考範圍內的「相似形素養題」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本跨概念轉換。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：若線性倍率為 4/5，面積倍率為 16/25，與題意相符。 四個選項逐一核對後，只有「4：5」符合；主要排除點是「沒有分清線性比與面積比。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s016-v002-semantic-review-r1",
    "questionId": "u18-s016-v002",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "bb3ab61d9e4106a28ca73c68d2f9cfeace60918f3f6614f230eecf3da7a57c0c",
    "independentSolution": "1 m=100 cm，18000÷100=180 m。",
    "derivedAnswer": "180 m",
    "storedAnswer": "180 m",
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
      "units": "18000 cm=180 m。",
      "scope": "只使用國中會考範圍內的「相似形素養題」概念，未要求高中延伸。"
    },
    "difficultyReason": "直接比例尺與長度換算。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：1 m=100 cm，18000÷100=180 m。 四個選項逐一核對後，只有「180 m」符合；主要排除點是「比例尺倍率或單位換算錯誤。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s016-v003-semantic-review-r1",
    "questionId": "u18-s016-v003",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "44f73b6d3944bb8d76ea3584932a0e3908f1d6e73a27d414cf17190b9e15be61",
    "independentSolution": "原長寬比 2：3，新長寬比也為 2：3；面積由 600 變 3750，倍率 6.25。",
    "derivedAnswer": "兩海報相似，周長倍率 2.5，面積倍率 6.25",
    "storedAnswer": "兩海報相似，周長倍率 2.5，面積倍率 6.25",
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
      "scope": "只使用國中會考範圍內的「相似形素養題」概念，未要求高中延伸。"
    },
    "difficultyReason": "同時判斷相似性、周長與面積。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：原長寬比 2：3，新長寬比也為 2：3；面積由 600 變 3750，倍率 6.25。 四個選項逐一核對後，只有「兩海報相似，周長倍率 2.5，面積倍率 6.25」符合；主要排除點是「把相似誤認為同樣大小，或混淆周長與面積倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s016-v004-semantic-review-r1",
    "questionId": "u18-s016-v004",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "0448c5f569f05a59f4cbeb4467755fd6d9398e2309ae12ff92ddd3122cdefa72",
    "independentSolution": "第二組邊為第一組各乘 3/2；24×9/4=54。",
    "derivedAnswer": "54 cm²",
    "storedAnswer": "54 cm²",
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
      "scope": "只使用國中會考範圍內的「相似形素養題」概念，未要求高中延伸。"
    },
    "difficultyReason": "先判定相似，再轉換面積。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：第二組邊為第一組各乘 3/2；24×9/4=54。 四個選項逐一核對後，只有「54 cm²」符合；主要排除點是「確認相似後仍只用線性倍率處理面積。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s016-v005-semantic-review-r1",
    "questionId": "u18-s016-v005",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "a3359f45ae748f7d3d00e49e510ea3e79f848243394f7b8355e29a349ad35573",
    "independentSolution": "可統一乙份數：甲：乙=15：20，乙：丙=20：24，因此甲：丙=15：24=5：8。",
    "derivedAnswer": "5：8",
    "storedAnswer": "5：8",
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
      "scope": "只使用國中會考範圍內的「相似形素養題」概念，未要求高中延伸。"
    },
    "difficultyReason": "跨三個圖形合併兩種不同型態的比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：可統一乙份數：甲：乙=15：20，乙：丙=20：24，因此甲：丙=15：24=5：8。 四個選項逐一核對後，只有「5：8」符合；主要排除點是「相連倍率中未先把面積比轉為線性比。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s016-v006-semantic-review-r1",
    "questionId": "u18-s016-v006",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "34976ed12800812655b6c70cf4b2f36150e90ecb02f4dc9299ca7dd597236bff",
    "independentSolution": "兩次後線性倍率=1.2²=1.44，面積倍率=1.44²=2.0736，結果相同。",
    "derivedAnswer": "518.4 cm²",
    "storedAnswer": "518.4 cm²",
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
      "units": "面積單位維持 cm²。",
      "scope": "只使用國中會考範圍內的「相似形素養題」概念，未要求高中延伸。"
    },
    "difficultyReason": "連續兩次線性縮放造成四次方的面積效應。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：兩次後線性倍率=1.2²=1.44，面積倍率=1.44²=2.0736，結果相同。 四個選項逐一核對後，只有「518.4 cm²」符合；主要排除點是「連續縮放時漏掉一次平方或一次倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s016-v007-semantic-review-r1",
    "questionId": "u18-s016-v007",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "9ffd30691b26a356c69ec7dfdbd3c57f2b3c74b461aef253623d2ce1efaab651",
    "independentSolution": "大周長=54 cm，差 18，且 54/36=1.5，驗算成立。",
    "derivedAnswer": "36 cm",
    "storedAnswer": "36 cm",
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
      "scope": "只使用國中會考範圍內的「相似形素養題」概念，未要求高中延伸。"
    },
    "difficultyReason": "需要逆推倍率再利用差量條件。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：大周長=54 cm，差 18，且 54/36=1.5，驗算成立。 四個選項逐一核對後，只有「36 cm」符合；主要排除點是「直接用面積倍率建立周長差方程。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s016-v008-semantic-review-r1",
    "questionId": "u18-s016-v008",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "35f4b9a700e513c9ec658c363119f9e899b6a4fe7870231831e604bc315e2043",
    "independentSolution": "可想像長、寬、高各乘 2；底面兩方向乘出 4，三方向乘出 8。",
    "derivedAnswer": "杯口圓周長變 2 倍，表面上對應面積變 4 倍，容量概念上變 8 倍",
    "storedAnswer": "杯口圓周長變 2 倍，表面上對應面積變 4 倍，容量概念上變 8 倍",
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
      "scope": "只使用國中會考範圍內的「相似形素養題」概念，未要求高中延伸。"
    },
    "difficultyReason": "在 CAP 邊界內整合線性、面積與體積縮放概念。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：可想像長、寬、高各乘 2；底面兩方向乘出 4，三方向乘出 8。 四個選項逐一核對後，只有「杯口圓周長變 2 倍，表面上對應面積變 4 倍，容量概念上變 8 倍」符合；主要排除點是「把所有量都乘同一線性倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s016-v009-semantic-review-r1",
    "questionId": "u18-s016-v009",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "be9ef3b526afca09064b50f1e94372a7e8f7d398cbf580a7060f79e331a74a0f",
    "independentSolution": "原圖上 5 cm 代表 1.25 km；縮成 80% 後變 4 cm，所以影印圖 4 cm 仍代表 1.25 km。",
    "derivedAnswer": "1.25 km",
    "storedAnswer": "1.25 km",
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
      "units": "125000 cm=1250 m=1.25 km。",
      "scope": "只使用國中會考範圍內的「相似形素養題」概念，未要求高中延伸。"
    },
    "difficultyReason": "影印倍率會改變地圖比例尺，需要逆向換算。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：原圖上 5 cm 代表 1.25 km；縮成 80% 後變 4 cm，所以影印圖 4 cm 仍代表 1.25 km。 四個選項逐一核對後，只有「1.25 km」符合；主要排除點是「影印縮小後仍沿用原比例尺。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s016-v010-semantic-review-r1",
    "questionId": "u18-s016-v010",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "a80605b25db81c3d21e26fa471ebd50b50f4d718d8cd78ffa332da434af63941",
    "independentSolution": "環帶四邊形是大三角形去掉小三角形；24(25/4−1)=24×21/4=126。",
    "derivedAnswer": "126 cm²",
    "storedAnswer": "126 cm²",
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
      "boundary": "圖形明示 BC∥DE 且小三角形位於大三角形內，四邊形 BCED 是唯一差區域。",
      "units": "結果為面積 cm²。",
      "scope": "只使用國中會考範圍內的「相似形素養題」概念，未要求高中延伸。"
    },
    "difficultyReason": "需從圖判定相似、平方倍率並求複合面積。",
    "literacyNecessityReview": "分區設計圖必須透過圖形看出大區域扣除內部三角形。",
    "reviewerNote": "重新由已知條件獨立計算：環帶四邊形是大三角形去掉小三角形；24(25/4−1)=24×21/4=126。 四個選項逐一核對後，只有「126 cm²」符合；主要排除點是「求出大三角形面積後忘記題目要差區域。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s016-v011-semantic-review-r1",
    "questionId": "u18-s016-v011",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "69df43fb27c2fac053633c0a57f54c6ed2d075cb2a4c56d8aa7a446451d9e6ad",
    "independentSolution": "照片長寬比=3.2/1.8；實際長寬比=(3.2×1000)/(1.8×800)，兩者不同，因此不相似。",
    "derivedAnswer": "不能，因兩方向縮放倍率不同",
    "storedAnswer": "不能，因兩方向縮放倍率不同",
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
      "scope": "只使用國中會考範圍內的「相似形素養題」概念，未要求高中延伸。"
    },
    "difficultyReason": "需要辨識非等比影像校正問題。",
    "literacyNecessityReview": "航拍影像的橫縱比例尺差異決定能否直接使用相似模型。",
    "reviewerNote": "重新由已知條件獨立計算：照片長寬比=3.2/1.8；實際長寬比=(3.2×1000)/(1.8×800)，兩者不同，因此不相似。 四個選項逐一核對後，只有「不能，因兩方向縮放倍率不同」符合；主要排除點是「只看形狀名稱相同就判定相似。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s016-v012-semantic-review-r1",
    "questionId": "u18-s016-v012",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "f16e5d2e4169e13e7b6ea4fcc45ae4a7b69fbd4d13b14de43a6eb13c64a63994",
    "independentSolution": "100+187.5+50=337.5；三種成本分別對應長度、面積與固定量。",
    "derivedAnswer": "337.5 元",
    "storedAnswer": "337.5 元",
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
      "units": "各項皆為元，總價 337.5 元。",
      "scope": "只使用國中會考範圍內的「相似形素養題」概念，未要求高中延伸。"
    },
    "difficultyReason": "同一情境內需對三類成本使用不同縮放規則。",
    "literacyNecessityReview": "成本拆分對應周長、面積與固定工序，任何一項都不可省略。",
    "reviewerNote": "重新由已知條件獨立計算：100+187.5+50=337.5；三種成本分別對應長度、面積與固定量。 四個選項逐一核對後，只有「337.5 元」符合；主要排除點是「把不同量綱的成本全部套同一倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u18-literacy-q010",
    "unitId": "u18",
    "skillId": "similarity-literacy",
    "svgPath": "figures/u18/u18-literacy-q010.svg",
    "canvas": {
      "width": 640,
      "height": 420,
      "viewBox": "0 0 640 420"
    },
    "title": "平行截線形成的內外相似三角形",
    "altText": "共用頂點A的內外三角形，BC平行DE；AB 6、AD 15、小三角形面積24平方公分。",
    "drawingSpec": {
      "purpose": "呈現大三角形扣除相似小三角形的複合面積。",
      "coordinateSystem": "SVG origin at upper-left; x increases rightward and y downward.",
      "exactGeometry": {
        "A": [
          320,
          55
        ],
        "D": [
          85,
          350
        ],
        "E": [
          565,
          350
        ],
        "B": [
          226,
          173
        ],
        "C": [
          414,
          173
        ],
        "BC": "parallel to DE"
      },
      "labels": {
        "AB": "6",
        "AD": "15",
        "areaABC": "24 cm²",
        "targetRegion": "BCED"
      },
      "lineRules": {
        "visible": [
          "AD",
          "AE",
          "DE",
          "BC"
        ],
        "hidden": [],
        "parallel": [
          "BC",
          "DE"
        ]
      },
      "symbolsAndMarks": {
        "parallelMarks": [
          "BC",
          "DE"
        ],
        "shading": "light gray on quadrilateral BCED"
      },
      "scalePolicy": "not-to-scale",
      "visualInferenceWarning": "圖形不按比例；只能依標示與題目條件推理。",
      "mobileConstraints": "At 320 CSS px width, primary labels must remain at least 9 px apparent height and no label may overlap a segment.",
      "accessibility": {
        "title": "平行截線形成的內外相似三角形",
        "description": "大三角形 ADE 中有平行底邊 DE 的內部線段 BC，AB為6、AD為15，小三角形ABC面積24平方公分，陰影概念區為四邊形BCED。",
        "altText": "共用頂點A的內外三角形，BC平行DE；AB 6、AD 15、小三角形面積24平方公分。"
      }
    },
    "svgAssertions": [
      "id=\"outer-ade\"",
      "id=\"inner-bc\"",
      "id=\"band-bced\"",
      "面積 24 cm²"
    ],
    "figureReview": {
      "decision": "pass",
      "reviewedAt": "2026-07-12",
      "geometryCheck": "pass",
      "mobileReadability": "pass",
      "answerLeakageCheck": "pass",
      "reviewNote": "灰區正確位於大三角形扣除小三角形後；沒有標示大面積或待求數值。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "d3497b82853687816222778bc5117e02d33c05d88a158325b5347344a0e16657"
  }
];

