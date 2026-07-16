// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s006";

export const SKILL_ID = "similar-triangles";

export const LECTURE = {
  "lectureId": "u18-s006-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-similarity",
  "skillId": "similar-triangles",
  "lockedSkillOrder": 6,
  "lockedSkillTitle": "相似三角形",
  "title": "相似三角形：形狀相同但大小可不同",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能以對應角相等與對應邊成比例說明三角形相似。",
    "能依頂點順序寫出正確的相似記號。",
    "能由相似關係求未知邊或未知角。",
    "能區分相似與全等，並檢查相似比方向。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "continued-ratio-properties",
        "title": "連比性質",
        "requiredLevel": "能運用「連比性質」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「連比性質」，先複習其核心判斷，再把方法推進到「相似三角形」。"
  },
  "glossary": [
    {
      "term": "相似形",
      "definition": "形狀相同但大小可以不同的圖形；對應角相等、對應邊成比例。"
    },
    {
      "term": "對應頂點",
      "definition": "在兩個相似圖形中具有相同角度位置的頂點。"
    },
    {
      "term": "相似比",
      "definition": "前一圖形的對應邊長除以後一圖形的對應邊長所得固定比值。"
    },
    {
      "term": "全等",
      "definition": "形狀與大小都相同；是相似比為 1 的特殊相似。"
    }
  ],
  "notation": [
    {
      "symbol": "△ABC∼△DEF",
      "meaning": "A↔D、B↔E、C↔F，順序同時指定對應角與對應邊。"
    },
    {
      "symbol": "AB/DE=BC/EF=CA/FD",
      "meaning": "兩三角形對應邊的比相等。"
    },
    {
      "symbol": "∠A=∠D",
      "meaning": "A 與 D 為對應角。"
    }
  ],
  "conceptNarrative": [
    "相似不是『看起來像』，而是有精確的對應關係。兩個三角形相似時，三組對應角相等，三組對應邊按同一倍數縮放。",
    "相似記號的字母順序非常重要。△ABC∼△DEF 表示第一個字母對第一個、第二個對第二個、第三個對第三個，因此 AB 對 DE、BC 對 EF、AC 對 DF。",
    "相似比必須先說方向。若問 △ABC 對 △DEF 的相似比，就是 ABC 的邊除以 DEF 的對應邊；反向則取倒數。",
    "全等三角形一定相似，但相似三角形不一定全等。只有當相似比為 1，大小才相同。"
  ],
  "formalDefinitions": [
    {
      "name": "三角形相似",
      "statement": "兩三角形的對應角分別相等，且對應邊長成同一比例。"
    },
    {
      "name": "相似比",
      "statement": "按指定先後順序，以第一個三角形任一邊除以第二個三角形的對應邊所得比值。"
    }
  ],
  "formulas": [
    {
      "formula": "△ABC∼△DEF ⇒ AB/DE=BC/EF=AC/DF",
      "conditions": [
        "頂點順序已正確對應"
      ],
      "meaning": "所有對應邊共用同一相似比。"
    },
    {
      "formula": "∠A=∠D，∠B=∠E，∠C=∠F",
      "conditions": [
        "兩三角形相似"
      ],
      "meaning": "相似圖形的對應角相等。"
    }
  ],
  "nonApplicableCases": [
    "只知道一組角相等，不能保證三角形相似。",
    "只知道一組邊成比例，也不能保證相似。",
    "不能把非對應邊放在同一比例式中。",
    "圖形旋轉或翻轉不影響相似，但必須重新辨認對應順序。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "用角度、邊長或標記找出對應頂點。",
      "check": "哪兩個角相等？"
    },
    {
      "step": 2,
      "instruction": "依對應順序寫相似記號。",
      "check": "第一、第二、第三字母是否一一對應？"
    },
    {
      "step": 3,
      "instruction": "列出對應邊表。",
      "check": "AB 對哪一邊？"
    },
    {
      "step": 4,
      "instruction": "固定相似比方向並列比例式。",
      "check": "分子都來自同一個三角形嗎？"
    },
    {
      "step": 5,
      "instruction": "求未知量並以角和或比值回查。",
      "check": "三組比是否一致？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "若 △ABC∼△DEF，AB=6、DE=9、BC=8，求 EF。",
      "solutionSteps": [
        "AB/DE=BC/EF。",
        "6/9=8/EF。",
        "6EF=72，所以 EF=12。"
      ],
      "answer": "12"
    },
    {
      "exampleId": "L2",
      "prompt": "若 △PQR∼△XYZ，∠P=48°、∠Q=67°，求 ∠Z。",
      "solutionSteps": [
        "三角形內角和為 180°。",
        "∠R=180°-48°-67°=65°。",
        "R 對應 Z，所以 ∠Z=65°。"
      ],
      "answer": "65°"
    },
    {
      "exampleId": "L3",
      "prompt": "兩三角形邊長分別為 3、4、5 與 6、8、10，是否相似？",
      "solutionSteps": [
        "依大小配對，3/6=4/8=5/10=1/2。",
        "三組對應邊同一比值。",
        "因此相似。"
      ],
      "answer": "相似"
    },
    {
      "exampleId": "L4",
      "prompt": "△ABC∼△KLM，且 A↔K、B↔L，邊 AC 對應哪一邊？",
      "solutionSteps": [
        "剩餘頂點 C↔M。",
        "AC 的端點 A、C 分別對 K、M。",
        "所以 AC 對 KM。"
      ],
      "answer": "KM"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "依圖形左右位置配邊。",
      "why": "旋轉後視覺位置會改變。",
      "correction": "依對應頂點而不是畫面方向。"
    },
    {
      "mistake": "相似記號字母順序亂寫。",
      "why": "只知道兩圖相似，未標對應。",
      "correction": "先列頂點配對表。"
    },
    {
      "mistake": "比例式分子方向混用。",
      "why": "一個比用小/大，另一個用大/小。",
      "correction": "所有分子固定來自同一三角形。"
    },
    {
      "mistake": "把相似當成全等。",
      "why": "忽略相似比可不等於 1。",
      "correction": "只有相似比 1 才大小相同。"
    },
    {
      "mistake": "由兩邊比例就直接判定相似。",
      "why": "缺少夾角或第三邊條件。",
      "correction": "使用 AA、SAS 或 SSS 判定。"
    }
  ],
  "selfCheck": [
    "我能列出三組對應頂點嗎？",
    "相似記號順序正確嗎？",
    "所有比例的方向一致嗎？",
    "未知邊落在正確對應位置嗎？",
    "相似比是否被誤當成 1？"
  ],
  "summary": [
    "相似三角形的對應角相等、對應邊成比例。",
    "相似記號的順序就是對應關係。",
    "相似比有方向，反向要取倒數。",
    "全等是相似比為 1 的特殊情形。"
  ],
  "connections": {
    "previous": "連比性質提供三組對應邊的等比觀念。",
    "next": [
      "AA、SAS、SSS 會提供判定三角形相似的充分條件。",
      "周長比與面積比由相似比延伸。"
    ]
  },
  "figureReferences": [
    {
      "figureId": "u18-similar-q010",
      "purpose": "協助辨認「相似三角形」中的對應關係；圖不按比例時不得憑外觀猜答案。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s006-v001",
      "u18-s006-v002",
      "u18-s006-v003",
      "u18-s006-v004",
      "u18-s006-v005",
      "u18-s006-v006",
      "u18-s006-v007",
      "u18-s006-v008",
      "u18-s006-v009",
      "u18-s006-v010",
      "u18-s006-v011",
      "u18-s006-v012"
    ],
    "constructedResponseIds": [
      "u18-s006-cr001",
      "u18-s006-cr002"
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
    "reviewNote": "檢查相似記號、對應角與對應邊表完全一致；所有比例式固定同一方向，並明確區分『定義』與後續三種『判定條件』。"
  },
  "contentSha256": "d4a64b4bf2a64eb3e1bb97c7da4a47ec6997d050055fa7a01e34a8815d8220c2"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s006-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 △ABC∼△DEF，則頂點 B 對應哪一個頂點？",
    "text": "若 △ABC∼△DEF，則頂點 B 對應哪一個頂點？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "D",
      "E",
      "F",
      "無法判斷"
    ],
    "answerIndex": 1,
    "independentSolution": "直接按位置配對，△ABC 的第二個字母 B 對 △DEF 的第二個字母 E。",
    "explanation": "相似記號依序對應：A↔D、B↔E、C↔F，所以 B 對應 E。",
    "steps": [
      "讀第一、第二、第三位置。",
      "找 B 在第二位。",
      "第二個三角形第二位是 E。"
    ],
    "optionAnalysis": [
      {
        "choice": "D",
        "truth": false,
        "reason": "第一個頂點 A 才對應 D。"
      },
      {
        "choice": "E",
        "truth": true,
        "reason": "依獨立推導可得到 E，符合所有已知條件。"
      },
      {
        "choice": "F",
        "truth": false,
        "reason": "第三個頂點 C 才對應 F。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "相似記號的字母順序已指定對應。"
      }
    ],
    "misconceptionTarget": "忽略相似記號順序，依圖形位置猜測。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "只需讀懂相似記號的對應順序。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "342960583c40953d99c78ecf3d6a6259119cc6211d14f67f3237d50c83851290"
  },
  {
    "questionId": "u18-s006-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "△ABC∼△DEF，AB=6、DE=9、BC=8，則 EF 為何？",
    "text": "△ABC∼△DEF，AB=6、DE=9、BC=8，則 EF 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "5.33",
      "11",
      "18",
      "12"
    ],
    "answerIndex": 3,
    "independentSolution": "從 AB 到 DE 放大 9/6=3/2，因此 BC=8 對應 EF=8×3/2=12。",
    "explanation": "AB/DE=BC/EF，所以 6/9=8/EF，得 EF=12。",
    "steps": [
      "列對應邊比例。",
      "交叉相乘 6EF=72。",
      "求 EF=12。"
    ],
    "optionAnalysis": [
      {
        "choice": "5.33",
        "truth": false,
        "reason": "把相似比方向反寫成 9/6=8/EF。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "以差值 3 加到 8。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "把 8 乘 9/4。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "依獨立推導可得到 12，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "用邊長差代替相似倍率。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本對應邊比例求未知邊。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "52123d7c6a14c8feb300e87c15bb04568843a80ea1f93acdc95184d12171ab47"
  },
  {
    "questionId": "u18-s006-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 △PQR∼△XYZ，∠P=50°、∠Q=60°，則 ∠Z 為何？",
    "text": "若 △PQR∼△XYZ，∠P=50°、∠Q=60°，則 ∠Z 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "50°",
      "60°",
      "70°",
      "110°"
    ],
    "answerIndex": 2,
    "independentSolution": "兩個已知角和 110°，第三角 70°；相似三角形對應角相等，故 Z=70°。",
    "explanation": "∠R=180°-50°-60°=70°，而 R 對應 Z，所以 ∠Z=70°。",
    "steps": [
      "求第三角 R。",
      "由相似順序 R↔Z。",
      "寫 70°。"
    ],
    "optionAnalysis": [
      {
        "choice": "50°",
        "truth": false,
        "reason": "P 對應 X，不是 Z。"
      },
      {
        "choice": "60°",
        "truth": false,
        "reason": "Q 對應 Y，不是 Z。"
      },
      {
        "choice": "70°",
        "truth": true,
        "reason": "依獨立推導可得到 70°，符合所有已知條件。"
      },
      {
        "choice": "110°",
        "truth": false,
        "reason": "未用三角形內角和求第三角。"
      }
    ],
    "misconceptionTarget": "把已知角直接配到錯誤頂點。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "角度使用度數，三角形內角和 180°。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "結合內角和與相似頂點配對。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f658dd733307e0eb699e1c620ecace6ab8261822a6efb1550fd13a1c9da88cc4"
  },
  {
    "questionId": "u18-s006-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個相似三角形的對應邊分別為 5 cm 與 12 cm。若較小三角形另一邊為 7.5 cm，則較大三角形對應邊為何？",
    "text": "兩個相似三角形的對應邊分別為 5 cm 與 12 cm。若較小三角形另一邊為 7.5 cm，則較大三角形對應邊為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "18 cm",
      "14.5 cm",
      "3.125 cm",
      "30 cm"
    ],
    "answerIndex": 0,
    "independentSolution": "7.5÷5=1.5，較大對應邊是 12×1.5=18 cm。",
    "explanation": "從小到大倍率為 12/5，故 7.5×12/5=18 cm。",
    "steps": [
      "固定小:大=5:12。",
      "求放大倍率 12/5。",
      "乘 7.5。"
    ],
    "optionAnalysis": [
      {
        "choice": "18 cm",
        "truth": true,
        "reason": "依獨立推導可得到 18 cm，符合所有已知條件。"
      },
      {
        "choice": "14.5 cm",
        "truth": false,
        "reason": "以邊長差 7 加到 7.5。"
      },
      {
        "choice": "3.125 cm",
        "truth": false,
        "reason": "使用縮小方向 5/12。"
      },
      {
        "choice": "30 cm",
        "truth": false,
        "reason": "把 7.5 乘 4。"
      }
    ],
    "misconceptionTarget": "相似比方向使用錯誤。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "邊長均為 cm，答案 18 cm。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "小數邊長與倍率應用。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c981d486fe56c96067e03fa3e5e02d13f1d0585eec52d2a4448c9142e2b14e84"
  },
  {
    "questionId": "u18-s006-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "△ABC∼△DEF，且 AB:DE=2:3。若 AC=10、DF=15，這組資料是否一致？",
    "text": "△ABC∼△DEF，且 AB:DE=2:3。若 AC=10、DF=15，這組資料是否一致？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "不一致，因為 10≠15",
      "不一致，因為 10:15=3:2",
      "無法判斷",
      "一致"
    ],
    "answerIndex": 3,
    "independentSolution": "10 與 15 同除 5 得 2:3，和給定相似比完全相同。",
    "explanation": "AB:DE=2:3，而 AC:DF=10:15=2:3，兩組資料一致。",
    "steps": [
      "確認 AC 對應 DF。",
      "化簡 10:15。",
      "與 2:3 比較。"
    ],
    "optionAnalysis": [
      {
        "choice": "不一致，因為 10≠15",
        "truth": false,
        "reason": "相似只要求成比例，不要求等長。"
      },
      {
        "choice": "不一致，因為 10:15=3:2",
        "truth": false,
        "reason": "10:15 實際化簡為 2:3。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "兩組對應邊比已經一致。"
      },
      {
        "choice": "一致",
        "truth": true,
        "reason": "依獨立推導可得到 一致，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把相似誤認為對應邊必須相等。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "驗證多組對應邊比例的一致性。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "87efd6e9666d5d808cd6fbb4176ce3f0341051b6b223b117f2b6bb2a2c8155a6"
  },
  {
    "questionId": "u18-s006-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "下列哪一項一定是相似三角形的性質？",
    "text": "下列哪一項一定是相似三角形的性質？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "面積相等",
      "周長相等",
      "對應角相等",
      "所有邊長都相等"
    ],
    "answerIndex": 2,
    "independentSolution": "取 3-4-5 與 6-8-10 三角形作例，它們相似但邊、周長、面積均不同，只有對應角相等。",
    "explanation": "相似三角形定義保證對應角相等、對應邊成比例；面積、周長與邊長不一定相等。",
    "steps": [
      "回想相似定義。",
      "排除只在相似比 1 才成立的性質。",
      "選择對應角相等。"
    ],
    "optionAnalysis": [
      {
        "choice": "面積相等",
        "truth": false,
        "reason": "相似比不為 1 時面積不同。"
      },
      {
        "choice": "周長相等",
        "truth": false,
        "reason": "周長按相似比變化。"
      },
      {
        "choice": "對應角相等",
        "truth": true,
        "reason": "依獨立推導可得到 對應角相等，符合所有已知條件。"
      },
      {
        "choice": "所有邊長都相等",
        "truth": false,
        "reason": "這是全等的條件，不是一般相似。"
      }
    ],
    "misconceptionTarget": "把相似與全等混淆。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "概念辨识，需區分恒真性質與特殊情況。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b098d07c987e8c5ca45414d7f06b80092711886b9498eaaf0909db1693c134ae"
  },
  {
    "questionId": "u18-s006-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "△ABC∼△DEF，AB=4、BC=6、AC=7，DE=10。則 △DEF 的周長為何？",
    "text": "△ABC∼△DEF，AB=4、BC=6、AC=7，DE=10。則 △DEF 的周長為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "42.5",
      "27",
      "34",
      "68"
    ],
    "answerIndex": 0,
    "independentSolution": "對應邊從 4 變 10，所有邊及周長都乘 5/2；17×5/2=42.5。",
    "explanation": "相似倍率大/小=DE/AB=10/4=2.5；小三角形周長 4+6+7=17，大周長 17×2.5=42.5。",
    "steps": [
      "求小三角形周長 17。",
      "求放大倍率 2.5。",
      "周長乘 2.5。"
    ],
    "optionAnalysis": [
      {
        "choice": "42.5",
        "truth": true,
        "reason": "依獨立推導可得到 42.5，符合所有已知條件。"
      },
      {
        "choice": "27",
        "truth": false,
        "reason": "只把小三角形周長 17 加 10。"
      },
      {
        "choice": "34",
        "truth": false,
        "reason": "誤把相似倍率當 2。"
      },
      {
        "choice": "68",
        "truth": false,
        "reason": "把周長乘 4。"
      }
    ],
    "misconceptionTarget": "只縮放一條邊或誤用面積倍率。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 110,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "結合相似對應邊與周長線性縮放。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ef3e787f4b82ae7068ac73e1f1d21d3f91e90b3f12bd5b039dfbd457c40320d5"
  },
  {
    "questionId": "u18-s006-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 △ABC∼△DEF，且 AB/DE=3/5、BC=12、EF=x+4，則 x 為何？",
    "text": "若 △ABC∼△DEF，且 AB/DE=3/5、BC=12、EF=x+4，則 x 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "4",
      "16",
      "12",
      "24"
    ],
    "answerIndex": 1,
    "independentSolution": "大三角形對應邊 EF=12×5/3=20，因此 x+4=20，x=16。",
    "explanation": "BC/EF=3/5，所以 12/(x+4)=3/5，得 60=3x+12，x=16。",
    "steps": [
      "列 12/(x+4)=3/5。",
      "交叉相乘。",
      "解 3x=48。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "把 EF 直接等於 BC-8。"
      },
      {
        "choice": "16",
        "truth": true,
        "reason": "依獨立推導可得到 16，符合所有已知條件。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把未知式 x+4 當成 x。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "用倍率 5/3 後忘记減 4。"
      }
    ],
    "misconceptionTarget": "求得對應邊長度後忘记解回 x。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 120,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "比例中含一次代數式，需要先求邊再還原未知數。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "71b231b98655e18a2e98f24558e2c1ce6dd476f74a5d107750fdde4845662ee8"
  },
  {
    "questionId": "u18-s006-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個三角形的三組角分別為 40°、60°、80° 與 40°、60°、80°。下列說法何者正確？",
    "text": "兩個三角形的三組角分別為 40°、60°、80° 與 40°、60°、80°。下列說法何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "兩三角形必全等",
      "兩三角形不一定相似",
      "兩三角形必相似，但不一定全等",
      "只有面積相等時才相似"
    ],
    "answerIndex": 2,
    "independentSolution": "可構造邊長成 1 倍與 2 倍的兩個三角形，角度相同而大小不同，說明相似不必全等。",
    "explanation": "三組對應角相等使形狀相同，必相似；邊長尺度未知，所以不一定全等。",
    "steps": [
      "確認角集合相同。",
      "依角配對建立相似。",
      "指出大小資料不足。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩三角形必全等",
        "truth": false,
        "reason": "角度只決定形狀，不決定大小。"
      },
      {
        "choice": "兩三角形不一定相似",
        "truth": false,
        "reason": "三組角分別相等已保證相似。"
      },
      {
        "choice": "兩三角形必相似，但不一定全等",
        "truth": true,
        "reason": "依獨立推導可得到 兩三角形必相似，但不一定全等，符合所有已知條件。"
      },
      {
        "choice": "只有面積相等時才相似",
        "truth": false,
        "reason": "相似判定不需要先知道面積。"
      }
    ],
    "misconceptionTarget": "把角角角誤當全等判定。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "要求以反例區分相似與全等。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "053250b5e927cd6ed4035fce288bebecc57b5f13fd132d55124f48add4a96f64"
  },
  {
    "questionId": "u18-s006-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "圖中 △ABC 與 △DEF 已標示相似，A 對應 D、B 對應 F、C 對應 E。下列哪個相似記號正確？",
    "text": "圖中 △ABC 與 △DEF 已標示相似，A 對應 D、B 對應 F、C 對應 E。下列哪個相似記號正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "△ABC∼△DFE",
      "△ABC∼△DEF",
      "△ABC∼△EFD",
      "△ACB∼△DFE"
    ],
    "answerIndex": 0,
    "independentSolution": "從左側依次讀 A、B、C，對應字母依次為 D、F、E，因此是 △DFE。",
    "explanation": "按 A↔D、B↔F、C↔E 的順序，應寫 △ABC∼△DFE。",
    "steps": [
      "列配對 A-D、B-F、C-E。",
      "依 ABC 順序排列右側。",
      "得到 DFE。"
    ],
    "optionAnalysis": [
      {
        "choice": "△ABC∼△DFE",
        "truth": true,
        "reason": "依獨立推導可得到 △ABC∼△DFE，符合所有已知條件。"
      },
      {
        "choice": "△ABC∼△DEF",
        "truth": false,
        "reason": "第二位 B 應對應 F，不是 E。"
      },
      {
        "choice": "△ABC∼△EFD",
        "truth": false,
        "reason": "第一位 A 應對應 D。"
      },
      {
        "choice": "△ACB∼△DFE",
        "truth": false,
        "reason": "左側第二位 C 對應 E，右側第二位卻是 F。"
      }
    ],
    "misconceptionTarget": "依圖形左右位置而非頂點配對寫順序。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "本題無單位與捨入。",
    "ambiguityAndBoundaryAudit": "頂點對應關系逐一明示，不需要根據圖形外觀推斷。",
    "difficultyReason": "必須從圖示配對資訊建立規範相似記號。",
    "literacyContextNecessity": "圖示中的旋轉位置會誤導，僅靠文字配對才能正確記錄工程圖的對應順序。",
    "visualMode": "figure-supported",
    "figureId": "u18-similar-q010",
    "drawingSpecReference": "figures/u18/u18-similar-q010.svg",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a5be602dc9344320ea56b70ff8c4cca22af882a529796495e30ea05bcbf3ef7c"
  },
  {
    "questionId": "u18-s006-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "建築模型與實物相似，模型一面三角形邊長為 9 cm、12 cm、15 cm；實物對應最短邊為 3.6 m。實物另外兩邊為何？",
    "text": "建築模型與實物相似，模型一面三角形邊長為 9 cm、12 cm、15 cm；實物對應最短邊為 3.6 m。實物另外兩邊為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "4.2 m、5.4 m",
      "4.8 m、6 m",
      "48 m、60 m",
      "3.6 m、3.6 m"
    ],
    "answerIndex": 1,
    "independentSolution": "最短邊從 9 cm 到 360 cm 是 40 倍，故其他邊 480 cm 與 600 cm，即 4.8 m、6 m。",
    "explanation": "3.6 m=360 cm，放大倍率 360/9=40；另外兩邊為 12×40=480 cm=4.8 m、15×40=600 cm=6 m。",
    "steps": [
      "統一單位為 cm。",
      "求倍率 40。",
      "縮放後換回 m。"
    ],
    "optionAnalysis": [
      {
        "choice": "4.2 m、5.4 m",
        "truth": false,
        "reason": "以固定差 0.6 m 延伸。"
      },
      {
        "choice": "4.8 m、6 m",
        "truth": true,
        "reason": "依獨立推導可得到 4.8 m、6 m，符合所有已知條件。"
      },
      {
        "choice": "48 m、60 m",
        "truth": false,
        "reason": "cm 到 m 的倍率多乘 10。"
      },
      {
        "choice": "3.6 m、3.6 m",
        "truth": false,
        "reason": "把相似誤認為所有邊相等。"
      }
    ],
    "misconceptionTarget": "單位換算與相似倍率混在一起造成十倍錯誤。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "1 m=100 cm；最終依題意用 m。",
    "ambiguityAndBoundaryAudit": "三邊按由短到長對應，3.6 m 明確對應 9 cm。",
    "difficultyReason": "結合三邊對應、跨單位換算與模型倍率。",
    "literacyContextNecessity": "模型規格同時使用 cm 與 m，必須統一單位才能制作或核對實物尺寸。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0f1eeb9784930e81b4cf6000044c02502c00ebb79786740188f3804c10ed2c84"
  },
  {
    "questionId": "u18-s006-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "螢幕上的三角形圖標等比縮放後，原邊長 24、32、40 像素，新圖標最長邊為 70 像素。新圖標周長為多少像素？",
    "text": "螢幕上的三角形圖標等比縮放後，原邊長 24、32、40 像素，新圖標最長邊為 70 像素。新圖標周長為多少像素？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "126 像素",
      "140 像素",
      "294 像素",
      "168 像素"
    ],
    "answerIndex": 3,
    "independentSolution": "新三邊分別 42、56、70，合計 168 像素。",
    "explanation": "原最長邊 40，對應新最長邊 70，倍率 7/4。原周長 96，新周長 96×7/4=168。",
    "steps": [
      "求倍率 70/40=7/4。",
      "求原周長 96。",
      "周長乘倍率。"
    ],
    "optionAnalysis": [
      {
        "choice": "126 像素",
        "truth": false,
        "reason": "把倍率誤作 70/40=1.5。"
      },
      {
        "choice": "140 像素",
        "truth": false,
        "reason": "只計算兩條邊。"
      },
      {
        "choice": "294 像素",
        "truth": false,
        "reason": "將周長再乘一次最長邊倍率。"
      },
      {
        "choice": "168 像素",
        "truth": true,
        "reason": "依獨立推導可得到 168 像素，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "只縮放最長邊或誤用非線性倍率。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "像素作為線性單位，答案為整數像素。",
    "ambiguityAndBoundaryAudit": "『等比縮放』保證三個方向使用同一倍率。",
    "difficultyReason": "由單一輸出規格反求整組相似尺寸與周長。",
    "literacyContextNecessity": "圖標導出需要精確像素周長，最長邊規格決定整組等比尺寸。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cca546243b69b3b2fff86a639caf62b8d15354c1cd776c782b493c521cf2e154"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s006-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "itemType": "constructed-response",
    "prompt": "△ABC∼△DEF，對應為 A↔D、B↔E、C↔F。已知 AB=8、BC=10、AC=12、DE=14。求 EF、DF，並寫出正確相似比。",
    "requiredWork": "先按相似記號確定對應邊，再用同一倍率求兩邊。",
    "standardSolution": "AB↔DE，所以大對小倍率=14/8=7/4。EF↔BC，EF=10×7/4=17.5；DF↔AC，DF=12×7/4=21。小：大相似比為4：7。",
    "alternativeMethod": "可列 AB/DE=BC/EF=AC/DF=4/7，分別交叉相乘。",
    "reasoningSteps": [
      "依頂點順序列 AB↔DE、BC↔EF、AC↔DF。",
      "求倍率7/4。",
      "求EF=17.5、DF=21。",
      "寫小：大=4：7。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "對應、倍率、兩邊與相似比全部正確。"
      },
      {
        "score": 2,
        "criteria": "對應與倍率正確但一邊有算術錯誤；或兩邊正確但比的方向未說明。"
      },
      {
        "score": 1,
        "criteria": "只找到一組對應邊或只求倍率。"
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
    "unitAndNotationRules": "若題目未給單位，三邊使用同一長度單位；相似比需註明方向。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "用統一倍率與三組比例交叉驗證，17.5/10=21/12=14/8=7/4。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "0458077b71048505150321aaf9ec5ffc1e4659491e669051435eb248f4368919"
  },
  {
    "questionId": "u18-s006-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similar-triangles",
    "lockedSkillOrder": 6,
    "itemType": "constructed-response",
    "prompt": "判斷邊長為 5、7、9 的三角形與邊長為 10、14、18 的三角形是否相似；若相似，說明對應並求周長比與面積比。",
    "requiredWork": "須先檢查三組邊是否同倍率，再推導周長比和面積比。",
    "standardSolution": "10/5=14/7=18/9=2，所以兩三角形以最短對最短、中邊對中邊、最長對最長相似。小：大相似比與周長比都是1：2，面積比為1：4。",
    "alternativeMethod": "比較化簡後的三邊連比：5：7：9 與10：14：18同除以2皆一致。",
    "reasoningSteps": [
      "將兩組邊由小到大配對。",
      "檢查三個倍率均為2。",
      "判定 SSS 相似。",
      "寫周長比1：2、面積比1：4。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "相似判定、對應與兩種比全部正確。"
      },
      {
        "score": 2,
        "criteria": "判定相似且倍率正確，但只答出周長比或面積比其中一項。"
      },
      {
        "score": 1,
        "criteria": "只觀察到一或兩組邊成比例，未完成三組檢查。"
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
    "unitAndNotationRules": "邊長與周長使用相同長度單位；面積比不帶單位。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "三邊倍率皆為2，並以面積倍率4驗證推導，三角形不等式也成立。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "dca4a8009cd3a2d20909caa2cd7c02c73c1947ed3c0f5c5035f487b340757e95"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s006-v001-semantic-review-r1",
    "questionId": "u18-s006-v001",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "342960583c40953d99c78ecf3d6a6259119cc6211d14f67f3237d50c83851290",
    "independentSolution": "直接按位置配對，△ABC 的第二個字母 B 對 △DEF 的第二個字母 E。",
    "derivedAnswer": "E",
    "storedAnswer": "E",
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
      "scope": "只使用國中會考範圍內的「相似三角形」概念，未要求高中延伸。"
    },
    "difficultyReason": "只需讀懂相似記號的對應順序。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：直接按位置配對，△ABC 的第二個字母 B 對 △DEF 的第二個字母 E。 四個選項逐一核對後，只有「E」符合；主要排除點是「忽略相似記號順序，依圖形位置猜測。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s006-v002-semantic-review-r1",
    "questionId": "u18-s006-v002",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "52123d7c6a14c8feb300e87c15bb04568843a80ea1f93acdc95184d12171ab47",
    "independentSolution": "從 AB 到 DE 放大 9/6=3/2，因此 BC=8 對應 EF=8×3/2=12。",
    "derivedAnswer": "12",
    "storedAnswer": "12",
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
      "scope": "只使用國中會考範圍內的「相似三角形」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本對應邊比例求未知邊。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：從 AB 到 DE 放大 9/6=3/2，因此 BC=8 對應 EF=8×3/2=12。 四個選項逐一核對後，只有「12」符合；主要排除點是「用邊長差代替相似倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s006-v003-semantic-review-r1",
    "questionId": "u18-s006-v003",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "f658dd733307e0eb699e1c620ecace6ab8261822a6efb1550fd13a1c9da88cc4",
    "independentSolution": "兩個已知角和 110°，第三角 70°；相似三角形對應角相等，故 Z=70°。",
    "derivedAnswer": "70°",
    "storedAnswer": "70°",
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
      "units": "角度使用度數，三角形內角和 180°。",
      "scope": "只使用國中會考範圍內的「相似三角形」概念，未要求高中延伸。"
    },
    "difficultyReason": "結合內角和與相似頂點配對。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：兩個已知角和 110°，第三角 70°；相似三角形對應角相等，故 Z=70°。 四個選項逐一核對後，只有「70°」符合；主要排除點是「把已知角直接配到錯誤頂點。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s006-v004-semantic-review-r1",
    "questionId": "u18-s006-v004",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "c981d486fe56c96067e03fa3e5e02d13f1d0585eec52d2a4448c9142e2b14e84",
    "independentSolution": "7.5÷5=1.5，較大對應邊是 12×1.5=18 cm。",
    "derivedAnswer": "18 cm",
    "storedAnswer": "18 cm",
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
      "units": "邊長均為 cm，答案 18 cm。",
      "scope": "只使用國中會考範圍內的「相似三角形」概念，未要求高中延伸。"
    },
    "difficultyReason": "小數邊長與倍率應用。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：7.5÷5=1.5，較大對應邊是 12×1.5=18 cm。 四個選項逐一核對後，只有「18 cm」符合；主要排除點是「相似比方向使用錯誤。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s006-v005-semantic-review-r1",
    "questionId": "u18-s006-v005",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "87efd6e9666d5d808cd6fbb4176ce3f0341051b6b223b117f2b6bb2a2c8155a6",
    "independentSolution": "10 與 15 同除 5 得 2:3，和給定相似比完全相同。",
    "derivedAnswer": "一致",
    "storedAnswer": "一致",
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
      "scope": "只使用國中會考範圍內的「相似三角形」概念，未要求高中延伸。"
    },
    "difficultyReason": "驗證多組對應邊比例的一致性。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：10 與 15 同除 5 得 2:3，和給定相似比完全相同。 四個選項逐一核對後，只有「一致」符合；主要排除點是「把相似誤認為對應邊必須相等。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s006-v006-semantic-review-r1",
    "questionId": "u18-s006-v006",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "b098d07c987e8c5ca45414d7f06b80092711886b9498eaaf0909db1693c134ae",
    "independentSolution": "取 3-4-5 與 6-8-10 三角形作例，它們相似但邊、周長、面積均不同，只有對應角相等。",
    "derivedAnswer": "對應角相等",
    "storedAnswer": "對應角相等",
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
      "scope": "只使用國中會考範圍內的「相似三角形」概念，未要求高中延伸。"
    },
    "difficultyReason": "概念辨识，需區分恒真性質與特殊情況。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：取 3-4-5 與 6-8-10 三角形作例，它們相似但邊、周長、面積均不同，只有對應角相等。 四個選項逐一核對後，只有「對應角相等」符合；主要排除點是「把相似與全等混淆。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s006-v007-semantic-review-r1",
    "questionId": "u18-s006-v007",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "ef3e787f4b82ae7068ac73e1f1d21d3f91e90b3f12bd5b039dfbd457c40320d5",
    "independentSolution": "對應邊從 4 變 10，所有邊及周長都乘 5/2；17×5/2=42.5。",
    "derivedAnswer": "42.5",
    "storedAnswer": "42.5",
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
      "scope": "只使用國中會考範圍內的「相似三角形」概念，未要求高中延伸。"
    },
    "difficultyReason": "結合相似對應邊與周長線性縮放。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：對應邊從 4 變 10，所有邊及周長都乘 5/2；17×5/2=42.5。 四個選項逐一核對後，只有「42.5」符合；主要排除點是「只縮放一條邊或誤用面積倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s006-v008-semantic-review-r1",
    "questionId": "u18-s006-v008",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "71b231b98655e18a2e98f24558e2c1ce6dd476f74a5d107750fdde4845662ee8",
    "independentSolution": "大三角形對應邊 EF=12×5/3=20，因此 x+4=20，x=16。",
    "derivedAnswer": "16",
    "storedAnswer": "16",
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
      "scope": "只使用國中會考範圍內的「相似三角形」概念，未要求高中延伸。"
    },
    "difficultyReason": "比例中含一次代數式，需要先求邊再還原未知數。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：大三角形對應邊 EF=12×5/3=20，因此 x+4=20，x=16。 四個選項逐一核對後，只有「16」符合；主要排除點是「求得對應邊長度後忘记解回 x。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s006-v009-semantic-review-r1",
    "questionId": "u18-s006-v009",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "053250b5e927cd6ed4035fce288bebecc57b5f13fd132d55124f48add4a96f64",
    "independentSolution": "可構造邊長成 1 倍與 2 倍的兩個三角形，角度相同而大小不同，說明相似不必全等。",
    "derivedAnswer": "兩三角形必相似，但不一定全等",
    "storedAnswer": "兩三角形必相似，但不一定全等",
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
      "scope": "只使用國中會考範圍內的「相似三角形」概念，未要求高中延伸。"
    },
    "difficultyReason": "要求以反例區分相似與全等。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：可構造邊長成 1 倍與 2 倍的兩個三角形，角度相同而大小不同，說明相似不必全等。 四個選項逐一核對後，只有「兩三角形必相似，但不一定全等」符合；主要排除點是「把角角角誤當全等判定。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s006-v010-semantic-review-r1",
    "questionId": "u18-s006-v010",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "a5be602dc9344320ea56b70ff8c4cca22af882a529796495e30ea05bcbf3ef7c",
    "independentSolution": "從左側依次讀 A、B、C，對應字母依次為 D、F、E，因此是 △DFE。",
    "derivedAnswer": "△ABC∼△DFE",
    "storedAnswer": "△ABC∼△DFE",
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
      "boundary": "頂點對應關系逐一明示，不需要根據圖形外觀推斷。",
      "units": "本題無單位與捨入。",
      "scope": "只使用國中會考範圍內的「相似三角形」概念，未要求高中延伸。"
    },
    "difficultyReason": "必須從圖示配對資訊建立規範相似記號。",
    "literacyNecessityReview": "圖示中的旋轉位置會誤導，僅靠文字配對才能正確記錄工程圖的對應順序。",
    "reviewerNote": "重新由已知條件獨立計算：從左側依次讀 A、B、C，對應字母依次為 D、F、E，因此是 △DFE。 四個選項逐一核對後，只有「△ABC∼△DFE」符合；主要排除點是「依圖形左右位置而非頂點配對寫順序。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s006-v011-semantic-review-r1",
    "questionId": "u18-s006-v011",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "0f1eeb9784930e81b4cf6000044c02502c00ebb79786740188f3804c10ed2c84",
    "independentSolution": "最短邊從 9 cm 到 360 cm 是 40 倍，故其他邊 480 cm 與 600 cm，即 4.8 m、6 m。",
    "derivedAnswer": "4.8 m、6 m",
    "storedAnswer": "4.8 m、6 m",
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
      "boundary": "三邊按由短到長對應，3.6 m 明確對應 9 cm。",
      "units": "1 m=100 cm；最終依題意用 m。",
      "scope": "只使用國中會考範圍內的「相似三角形」概念，未要求高中延伸。"
    },
    "difficultyReason": "結合三邊對應、跨單位換算與模型倍率。",
    "literacyNecessityReview": "模型規格同時使用 cm 與 m，必須統一單位才能制作或核對實物尺寸。",
    "reviewerNote": "重新由已知條件獨立計算：最短邊從 9 cm 到 360 cm 是 40 倍，故其他邊 480 cm 與 600 cm，即 4.8 m、6 m。 四個選項逐一核對後，只有「4.8 m、6 m」符合；主要排除點是「單位換算與相似倍率混在一起造成十倍錯誤。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s006-v012-semantic-review-r1",
    "questionId": "u18-s006-v012",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "cca546243b69b3b2fff86a639caf62b8d15354c1cd776c782b493c521cf2e154",
    "independentSolution": "新三邊分別 42、56、70，合計 168 像素。",
    "derivedAnswer": "168 像素",
    "storedAnswer": "168 像素",
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
      "boundary": "『等比縮放』保證三個方向使用同一倍率。",
      "units": "像素作為線性單位，答案為整數像素。",
      "scope": "只使用國中會考範圍內的「相似三角形」概念，未要求高中延伸。"
    },
    "difficultyReason": "由單一輸出規格反求整組相似尺寸與周長。",
    "literacyNecessityReview": "圖標導出需要精確像素周長，最長邊規格決定整組等比尺寸。",
    "reviewerNote": "重新由已知條件獨立計算：新三邊分別 42、56、70，合計 168 像素。 四個選項逐一核對後，只有「168 像素」符合；主要排除點是「只縮放最長邊或誤用非線性倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u18-similar-q010",
    "unitId": "u18",
    "skillId": "similar-triangles",
    "svgPath": "figures/u18/u18-similar-q010.svg",
    "canvas": {
      "width": 640,
      "height": 420,
      "viewBox": "0 0 640 420"
    },
    "title": "兩個已標示對應的相似三角形",
    "altText": "兩個分離的三角形，標記顯示 A 對應 D、B 對應 F、C 對應 E；圖不按比例。",
    "drawingSpec": {
      "purpose": "要求依角標與頂點對應寫出正確相似記號。",
      "coordinateSystem": "SVG origin at upper-left; x increases rightward and y downward.",
      "exactGeometry": {
        "ABC": [
          [
            70,
            330
          ],
          [
            210,
            80
          ],
          [
            290,
            330
          ]
        ],
        "DEF": [
          [
            365,
            330
          ],
          [
            515,
            80
          ],
          [
            590,
            330
          ]
        ]
      },
      "labels": {
        "A": [
          202,
          65
        ],
        "B": [
          42,
          360
        ],
        "C": [
          294,
          360
        ],
        "D": [
          508,
          65
        ],
        "E": [
          594,
          360
        ],
        "F": [
          337,
          360
        ]
      },
      "lineRules": {
        "visible": [
          "AB",
          "BC",
          "CA",
          "DE",
          "EF",
          "FD"
        ],
        "hidden": []
      },
      "symbolsAndMarks": {
        "singleArc": [
          "A",
          "D"
        ],
        "cornerArc": [
          "B",
          "F"
        ],
        "singleTick": [
          "AC",
          "DE"
        ]
      },
      "scalePolicy": "not-to-scale",
      "visualInferenceWarning": "圖形不按比例；只能依標示與題目條件推理。",
      "mobileConstraints": "At 320 CSS px width, primary labels must remain at least 9 px apparent height and no label may overlap a segment.",
      "accessibility": {
        "title": "兩個已標示對應的相似三角形",
        "description": "左側三角形 ABC 與右側三角形 DEF，角弧和邊刻痕標示 A 對應 D、B 對應 F、C 對應 E。",
        "altText": "兩個分離的三角形，標記顯示 A 對應 D、B 對應 F、C 對應 E；圖不按比例。"
      }
    },
    "svgAssertions": [
      "id=\"tri-abc\"",
      "id=\"tri-def\"",
      "id=\"angle-a\"",
      "id=\"angle-d\""
    ],
    "figureReview": {
      "decision": "pass",
      "reviewedAt": "2026-07-12",
      "geometryCheck": "pass",
      "mobileReadability": "pass",
      "answerLeakageCheck": "pass",
      "reviewNote": "確認標記唯一支持 A↔D、B↔F、C↔E；三角形外觀刻意不同，避免只憑位置作答。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "d23f42c3d4b315844a137f3d5afe581f59db935adc2ff56aca481405ba912cde"
  }
];

