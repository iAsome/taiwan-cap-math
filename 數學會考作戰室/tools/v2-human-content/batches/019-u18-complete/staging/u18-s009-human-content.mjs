// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s009";

export const SKILL_ID = "similarity-sss";

export const LECTURE = {
  "lectureId": "u18-s009-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-similarity",
  "skillId": "similarity-sss",
  "lockedSkillOrder": 9,
  "lockedSkillTitle": "SSS 相似",
  "title": "SSS 相似：三組對應邊都按同一比例縮放",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能依邊長大小與結構配對三組對應邊。",
    "能檢查三組邊比是否相等。",
    "能用 SSS 判定相似並寫出正確相似順序。",
    "能先檢查三角形存在性，避免使用不成三角形的資料。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "similarity-sas",
        "title": "SAS 相似",
        "requiredLevel": "能運用「SAS 相似」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「SAS 相似」，先複習其核心判斷，再把方法推進到「SSS 相似」。"
  },
  "glossary": [
    {
      "term": "SSS 判定",
      "definition": "三組對應邊的比都相等時，兩三角形相似。"
    },
    {
      "term": "三角形不等式",
      "definition": "任意兩邊長的和必須大於第三邊，才可形成三角形。"
    },
    {
      "term": "對應配對",
      "definition": "將兩三角形中按同一結構位置的邊放在同一比值中。"
    },
    {
      "term": "縮放倍數",
      "definition": "從一個三角形到另一個三角形，各對應邊共同乘上的正數。"
    }
  ],
  "notation": [
    {
      "symbol": "AB/DE=BC/EF=CA/FD",
      "meaning": "三組對應邊皆為同一比值。"
    },
    {
      "symbol": "SSS",
      "meaning": "Side-Side-Side，邊邊邊相似判定。"
    },
    {
      "symbol": "a+b>c",
      "meaning": "三角形任兩邊和大於第三邊。"
    }
  ],
  "conceptNarrative": [
    "若一個三角形的三邊都按同一倍數變化，角度不會改變，因此形狀相同。SSS 判定就是把這個縮放關係寫成三組邊比相等。",
    "配對時可先按長短排序作初步判斷：最長邊通常對最長邊、最短邊對最短邊。但正式答案仍要依頂點連接關係確認相似順序。",
    "檢查比值時三組方向要一致。若第一組寫第一三角形除以第二三角形，後兩組也必須同方向。",
    "在判定前先確認每一組邊確實能形成三角形。若 2、3、6 不能成三角形，就沒有可談的相似三角形。"
  ],
  "formalDefinitions": [
    {
      "name": "SSS 相似判定",
      "statement": "若兩三角形的三組對應邊長成比例，則兩三角形相似。"
    },
    {
      "name": "存在性前提",
      "statement": "每組三邊都須符合三角形不等式，才能使用三角形相似判定。"
    }
  ],
  "formulas": [
    {
      "formula": "AB/DE=BC/EF=CA/FD ⇒ △ABC∼△DEF",
      "conditions": [
        "三組邊正確對應",
        "兩組資料皆可形成三角形"
      ],
      "meaning": "SSS 判定。"
    },
    {
      "formula": "最短邊+次長邊>最長邊",
      "conditions": [
        "邊長均為正"
      ],
      "meaning": "檢查三角形存在性最精簡的方法。"
    }
  ],
  "nonApplicableCases": [
    "只有兩組邊比相等，缺少夾角資訊時不能使用 SSS。",
    "三組邊比例相等但其中一組資料不能形成三角形時，不存在相似三角形。",
    "將最長邊對最短邊會造成錯誤配對。",
    "三組比中混用相反方向，不能代表同一縮放倍數。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "檢查兩組邊長都能形成三角形。",
      "check": "最短邊加次長邊是否大於最長邊？"
    },
    {
      "step": 2,
      "instruction": "依長短與頂點結構配對三組邊。",
      "check": "最長對最長、共享頂點關係一致嗎？"
    },
    {
      "step": 3,
      "instruction": "固定比值方向。",
      "check": "所有分子是否來自同一三角形？"
    },
    {
      "step": 4,
      "instruction": "化簡三組邊比。",
      "check": "三個比值完全相同嗎？"
    },
    {
      "step": 5,
      "instruction": "由邊端點寫相似順序。",
      "check": "每一條對應邊的兩端配對一致嗎？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "邊長 4、6、8 與 10、15、20 的三角形是否相似？",
      "solutionSteps": [
        "兩組均符合三角形不等式。",
        "4/10=6/15=8/20=2/5。",
        "三組對應邊同一比值，由 SSS 相似。"
      ],
      "answer": "相似"
    },
    {
      "exampleId": "L2",
      "prompt": "△ABC 邊 AB=5、BC=7、AC=8；△DEF 邊 DE=10、EF=14、DF=16，寫相似關係。",
      "solutionSteps": [
        "AB 對 DE、BC 對 EF、AC 對 DF，比例皆 1:2。",
        "AB 與 BC 共點 B，DE 與 EF 共點 E，所以 B↔E。",
        "得到 A↔D、C↔F，故 △ABC∼△DEF。"
      ],
      "answer": "△ABC∼△DEF"
    },
    {
      "exampleId": "L3",
      "prompt": "邊長 2、3、6 與 4、6、12 可否以 SSS 判定相似？",
      "solutionSteps": [
        "第一組 2+3=5<6，不能形成三角形。",
        "第二組也有 4+6<12。",
        "因此不存在兩個三角形，不能談 SSS 相似。"
      ],
      "answer": "不可"
    },
    {
      "exampleId": "L4",
      "prompt": "△PQR 三邊 9、12、15，另一三角形最短邊為 6，若相似，另外兩邊為何？",
      "solutionSteps": [
        "最短邊縮放比為 6/9=2/3。",
        "其餘邊為 12×2/3=8、15×2/3=10。",
        "6、8、10 可形成三角形。"
      ],
      "answer": "8、10"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只檢查兩組邊比。",
      "why": "把 SSS 誤成兩邊條件。",
      "correction": "三組對應邊比都要相等。"
    },
    {
      "mistake": "未檢查三角形不等式。",
      "why": "把任意三個正數當三角形邊。",
      "correction": "先用最短+次長>最長。"
    },
    {
      "mistake": "最長邊配到次長邊。",
      "why": "只依數字可約分配對。",
      "correction": "先排序，再核對頂點結構。"
    },
    {
      "mistake": "第三個比取倒數。",
      "why": "比值方向沒有固定。",
      "correction": "所有分子固定同一圖形。"
    },
    {
      "mistake": "相似順序只看邊長排序。",
      "why": "忽略邊的端點關係。",
      "correction": "用共享頂點決定頂點配對。"
    }
  ],
  "selfCheck": [
    "兩組資料都能成三角形嗎？",
    "三組邊都已配對嗎？",
    "比值方向一致嗎？",
    "三個比值完全相同嗎？",
    "相似字母順序符合邊端點嗎？"
  ],
  "summary": [
    "SSS 相似需要三組對應邊成同一比例。",
    "先確認三角形存在性。",
    "配對可由長短開始，再用端點關係確認。",
    "三組比必須方向一致。"
  ],
  "connections": {
    "previous": "SAS 使用兩邊比例與夾角。",
    "next": [
      "相似比與周長比會把共同縮放倍數套用到整個周界。",
      "面積比則是縮放倍數的平方。"
    ]
  },
  "figureReferences": [
    {
      "figureId": "u18-sss-q010",
      "purpose": "協助辨認「SSS 相似」中的對應關係；圖不按比例時不得憑外觀猜答案。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s009-v001",
      "u18-s009-v002",
      "u18-s009-v003",
      "u18-s009-v004",
      "u18-s009-v005",
      "u18-s009-v006",
      "u18-s009-v007",
      "u18-s009-v008",
      "u18-s009-v009",
      "u18-s009-v010",
      "u18-s009-v011",
      "u18-s009-v012"
    ],
    "constructedResponseIds": [
      "u18-s009-cr001",
      "u18-s009-cr002"
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
    "reviewNote": "逐題先做三角形不等式檢查，再驗證三組比例與端點配對；特別保留不能成三角形的反例，避免機械比值相等就判相似。"
  },
  "contentSha256": "08b59a447feeac5575777eedca7d053e350ec07307a06cac9b131af89614a2c5"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s009-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩三角形三邊分別為 3、4、5 與 6、8、10。可用哪一種判定說明相似？",
    "text": "兩三角形三邊分別為 3、4、5 與 6、8、10。可用哪一種判定說明相似？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "SSS",
      "AA",
      "SAS",
      "SSA"
    ],
    "answerIndex": 0,
    "independentSolution": "第二三角形每邊都是第一個的 2 倍，故三組邊同一倍率，SSS 相似。",
    "explanation": "3/6=4/8=5/10=1/2，三組對應邊成比例，所以用 SSS。",
    "steps": [
      "按長短配對三邊。",
      "計算三組比。",
      "套用 SSS。"
    ],
    "optionAnalysis": [
      {
        "choice": "SSS",
        "truth": true,
        "reason": "依獨立推導可得到 SSS，符合所有已知條件。"
      },
      {
        "choice": "AA",
        "truth": false,
        "reason": "題目未直接提供角度。"
      },
      {
        "choice": "SAS",
        "truth": false,
        "reason": "雖可另推，但已知條件直接是三組邊。"
      },
      {
        "choice": "SSA",
        "truth": false,
        "reason": "SSA 不是一般相似判定。"
      }
    ],
    "misconceptionTarget": "看到直角邊組合就誤選其他判定。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "最直接的三邊同比例辨識。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "43e2a9af863ab6a72106d46276ca1c202582ec7341ae27fb9b97dd11821f8bbc"
  },
  {
    "questionId": "u18-s009-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "邊長 4、6、9 能否形成三角形？",
    "text": "邊長 4、6、9 能否形成三角形？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "不能，因為 4+6=10>9",
      "不能，因為三邊不是整數倍",
      "無法判斷",
      "能"
    ],
    "answerIndex": 3,
    "independentSolution": "三角形不等式只需檢查最短兩邊和大於最長邊；此處成立。",
    "explanation": "最短兩邊 4+6=10，大於最長邊 9，因此能形成三角形。",
    "steps": [
      "找最長邊 9。",
      "計算 4+6=10。",
      "比較 10>9。"
    ],
    "optionAnalysis": [
      {
        "choice": "不能，因為 4+6=10>9",
        "truth": false,
        "reason": "這正是能形成三角形的條件。"
      },
      {
        "choice": "不能，因為三邊不是整數倍",
        "truth": false,
        "reason": "形成三角形不要求比例。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "三邊已知，最短兩邊和可直接檢查。"
      },
      {
        "choice": "能",
        "truth": true,
        "reason": "依獨立推導可得到 能，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把大於條件方向看反。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "SSS 前置的三角形存在性基本檢查。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7475e7fad2e2eaff9c89c43789a3a2ec9de693a896de8274af3a0f8deccd14ea"
  },
  {
    "questionId": "u18-s009-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "△ABC 三邊 AB=5、BC=7、AC=8；△DEF 三邊 DE=10、EF=14、DF=16。下列相似關係何者正確？",
    "text": "△ABC 三邊 AB=5、BC=7、AC=8；△DEF 三邊 DE=10、EF=14、DF=16。下列相似關係何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "△ABC∼△DFE",
      "△ABC∼△DEF",
      "△ACB∼△DEF",
      "兩三角形不相似"
    ],
    "answerIndex": 1,
    "independentSolution": "AB 與 BC 共點 B，對應 DE 與 EF 共點 E，所以 B↔E；其餘 A↔D、C↔F。",
    "explanation": "AB:DE=5:10、BC:EF=7:14、AC:DF=8:16 都是 1:2，所以 △ABC∼△DEF。",
    "steps": [
      "列三組邊配對。",
      "確認比值 1:2。",
      "由端點寫順序。"
    ],
    "optionAnalysis": [
      {
        "choice": "△ABC∼△DFE",
        "truth": false,
        "reason": "此順序會讓 AB 對 DF，5:16 不符。"
      },
      {
        "choice": "△ABC∼△DEF",
        "truth": true,
        "reason": "依獨立推導可得到 △ABC∼△DEF，符合所有已知條件。"
      },
      {
        "choice": "△ACB∼△DEF",
        "truth": false,
        "reason": "AC 会對 DE，8:10 不等於 1:2。"
      },
      {
        "choice": "兩三角形不相似",
        "truth": false,
        "reason": "三組對應邊都是 1:2。"
      }
    ],
    "misconceptionTarget": "只按邊長排序，未核對共享頂點。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本 SSS 與相似順序。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e7445c3a983c044e0e342fc7acc69e51fd1c32bedf72cba122db40f400cd72ea"
  },
  {
    "questionId": "u18-s009-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩三角形邊長分別為 5、7、9 與 10、14、17。下列判斷何者正確？",
    "text": "兩三角形邊長分別為 5、7、9 與 10、14、17。下列判斷何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "相似，相似比為 1:2",
      "相似，因為前兩組邊比相等",
      "不相似",
      "全等"
    ],
    "answerIndex": 2,
    "independentSolution": "若相似，9 對應邊應為 18；實際給 17，故不相似。",
    "explanation": "前兩組比為 1:2，但 9/17≠1/2，因此不符合 SSS。",
    "steps": [
      "按大小配對。",
      "計算 5/10、7/14、9/17。",
      "發現第三比不同。"
    ],
    "optionAnalysis": [
      {
        "choice": "相似，相似比為 1:2",
        "truth": false,
        "reason": "第三組 9:17 不等於 1:2。"
      },
      {
        "choice": "相似，因為前兩組邊比相等",
        "truth": false,
        "reason": "SSS 要求三組。"
      },
      {
        "choice": "不相似",
        "truth": true,
        "reason": "依獨立推導可得到 不相似，符合所有已知條件。"
      },
      {
        "choice": "全等",
        "truth": false,
        "reason": "邊長顯然不同。"
      }
    ],
    "misconceptionTarget": "只檢查兩組邊比就停止。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "識別三組比例中單一不一致。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d6b60603333fcab399f7b87694b3c51710ae61cfbc793847511d904db5fe85fe"
  },
  {
    "questionId": "u18-s009-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "△PQR 的三邊為 6、8、10。另一相似三角形最短邊為 15，則另外兩邊為何？",
    "text": "△PQR 的三邊為 6、8、10。另一相似三角形最短邊為 15，則另外兩邊為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "17、19",
      "30、40",
      "16、20",
      "20、25"
    ],
    "answerIndex": 3,
    "independentSolution": "6:8:10 同乘 2.5 得 15:20:25。",
    "explanation": "放大倍率 15/6=2.5，另外兩邊 8×2.5=20、10×2.5=25。",
    "steps": [
      "辨認最短邊對最短邊。",
      "求倍率 2.5。",
      "縮放另外兩邊。"
    ],
    "optionAnalysis": [
      {
        "choice": "17、19",
        "truth": false,
        "reason": "以固定差 2、4 放大。"
      },
      {
        "choice": "30、40",
        "truth": false,
        "reason": "把最短邊倍率誤作 5。"
      },
      {
        "choice": "16、20",
        "truth": false,
        "reason": "只加最短邊增量 9。"
      },
      {
        "choice": "20、25",
        "truth": true,
        "reason": "依獨立推導可得到 20、25，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "以加法差值代替乘法倍率。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "由一組對應邊求完整相似邊長。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f0511ea88debd0533f6a1c4a5ab426dcb09fa97faf2fe6af80f9268aebdd344e"
  },
  {
    "questionId": "u18-s009-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "下列哪兩組邊長都能形成三角形，且彼此 SSS 相似？",
    "text": "下列哪兩組邊長都能形成三角形，且彼此 SSS 相似？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "2、3、6 與 4、6、12",
      "4、5、7 與 8、10、14",
      "3、4、5 與 6、8、11",
      "5、5、9 與 10、10、19"
    ],
    "answerIndex": 1,
    "independentSolution": "第二選項的4、5、7與8、10、14都滿足三角形不等式，且對應邊比8/4=10/5=14/7=2，所以兩三角形以SSS相似。",
    "explanation": "4+5>7、8+10>14，兩組可成三角形；三組邊比皆 1:2。",
    "steps": [
      "先檢查存在性。",
      "再按邊長配對。",
      "核對三組比。"
    ],
    "optionAnalysis": [
      {
        "choice": "2、3、6 與 4、6、12",
        "truth": false,
        "reason": "2+3<6，不能形成三角形。"
      },
      {
        "choice": "4、5、7 與 8、10、14",
        "truth": true,
        "reason": "依獨立推導可得到 4、5、7 與 8、10、14，符合所有已知條件。"
      },
      {
        "choice": "3、4、5 與 6、8、11",
        "truth": false,
        "reason": "第三組比 5:11 不一致。"
      },
      {
        "choice": "5、5、9 與 10、10、19",
        "truth": false,
        "reason": "第二組 10+10>19 能成三角形，但 9:19 不等於 1:2。"
      }
    ],
    "misconceptionTarget": "只驗證比例或只驗證三角形不等式。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "同時檢查存在性和 SSS 比例。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3f2d0c72abb0f5193a7db0f73403c531b32d16e719aba7f24b4b9ccb543194b0"
  },
  {
    "questionId": "u18-s009-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "△ABC 的三邊為 x、12、15，△DEF 的對應邊為 10、20、25。若兩三角形 SSS 相似，則 x 為何？",
    "text": "△ABC 的三邊為 x、12、15，△DEF 的對應邊為 10、20、25。若兩三角形 SSS 相似，則 x 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "5",
      "8",
      "6",
      "18"
    ],
    "answerIndex": 2,
    "independentSolution": "第二三角形是第一個的 5/3 倍，故第一最短邊 x=10×3/5=6。",
    "explanation": "12/20=15/25=3/5，所以 x/10=3/5，x=6。",
    "steps": [
      "求已知相似比 3:5。",
      "列 x/10=3/5。",
      "求 x=6。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "把 12:20 化簡為 3:5 後乘錯。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "用 15:25 的差 10 配置。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "依獨立推導可得到 6，符合所有已知條件。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "把比例方向取反。"
      }
    ],
    "misconceptionTarget": "相似比方向取反或使用邊長差。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 110,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "由兩組已知比確定第三邊代數值。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5eb556923d50ed64a75b3a905d09b4036142373152e5f9a7205f5863a9430e02"
  },
  {
    "questionId": "u18-s009-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩組邊長為 2、3、5 與 4、6、10。下列說法何者正確？",
    "text": "兩組邊長為 2、3、5 與 4、6、10。下列說法何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "兩組都不能形成三角形，因此不能用 SSS 判定相似",
      "兩三角形相似，因為三組比皆 1:2",
      "只有第一組不能形成三角形",
      "兩三角形全等"
    ],
    "answerIndex": 0,
    "independentSolution": "三角形不等式必須嚴格大於；等於時三點共線，不能使用相似三角形判定。",
    "explanation": "最短兩邊和等於最長邊，兩組都是退化情形，不能形成三角形。",
    "steps": [
      "檢查 2+3=5。",
      "檢查 4+6=10。",
      "判定不存在三角形。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩組都不能形成三角形，因此不能用 SSS 判定相似",
        "truth": true,
        "reason": "依獨立推導可得到 兩組都不能形成三角形，因此不能用 SSS 判定相似，符合所有已知條件。"
      },
      {
        "choice": "兩三角形相似，因為三組比皆 1:2",
        "truth": false,
        "reason": "2+3=5 只能形成退化線段，不是三角形。"
      },
      {
        "choice": "只有第一組不能形成三角形",
        "truth": false,
        "reason": "第二組 4+6=10 也退化。"
      },
      {
        "choice": "兩三角形全等",
        "truth": false,
        "reason": "邊長比例不是 1，且圖形不存在。"
      }
    ],
    "misconceptionTarget": "只看三組比相等，忽略存在性。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "邊界條件為等號，需認识嚴格不等式。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "40670f7e8ec62c0ac12e124e19a4e44bfcedacb901ffdddb88559bb95cba7a1a"
  },
  {
    "questionId": "u18-s009-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "△ABC 與 △DEF 中，AB:DE=3:5、BC:EF=3:5、AC:DF=6:10。下列判斷何者正確？",
    "text": "△ABC 與 △DEF 中，AB:DE=3:5、BC:EF=3:5、AC:DF=6:10。下列判斷何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "不能，因為第三組不是 3:5",
      "可由 SSS 判定相似",
      "只能由 SAS 判定",
      "資料不足，因為不知道角度"
    ],
    "answerIndex": 1,
    "independentSolution": "三個比都等於 0.6，因此存在共同縮放倍率，角度資料不是必要條件。",
    "explanation": "6:10 化簡為 3:5，所以三組對應邊比一致，可用 SSS。",
    "steps": [
      "化簡第三組比。",
      "比較三組比。",
      "使用 SSS。"
    ],
    "optionAnalysis": [
      {
        "choice": "不能，因為第三組不是 3:5",
        "truth": false,
        "reason": "6:10 化簡正是 3:5。"
      },
      {
        "choice": "可由 SSS 判定相似",
        "truth": true,
        "reason": "依獨立推導可得到 可由 SSS 判定相似，符合所有已知條件。"
      },
      {
        "choice": "只能由 SAS 判定",
        "truth": false,
        "reason": "三組邊比例已足夠。"
      },
      {
        "choice": "資料不足，因為不知道角度",
        "truth": false,
        "reason": "SSS 不需要角度。"
      }
    ],
    "misconceptionTarget": "未化簡分數就判定不相等。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "等值分數形式不同，需要化簡後比較。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c87643c22f03bff962c1322b16927e655669b7ee1f5821f53e5e17a51516282a"
  },
  {
    "questionId": "u18-s009-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "包裝設計有兩個相似三角形標誌。小標誌三邊為 24、32、40 mm，大標誌最短邊為 42 mm。若廠商填報大標誌另兩邊為 56、70 mm，資料是否一致？",
    "text": "包裝設計有兩個相似三角形標誌。小標誌三邊為 24、32、40 mm，大標誌最短邊為 42 mm。若廠商填報大標誌另兩邊為 56、70 mm，資料是否一致？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "不一致，因為 24≠42",
      "不一致，因為放大倍率不是整數",
      "一致",
      "無法判斷，因為沒有角度"
    ],
    "answerIndex": 2,
    "independentSolution": "大標誌三邊正好是小標誌各乘 1.75，且兩組均可成三角形，支持 SSS。",
    "explanation": "倍率 42/24=7/4；32×7/4=56、40×7/4=70，三組資料一致。",
    "steps": [
      "求最短邊倍率。",
      "縮放另外兩邊。",
      "核對填報值。"
    ],
    "optionAnalysis": [
      {
        "choice": "不一致，因為 24≠42",
        "truth": false,
        "reason": "相似不要求邊長相等。"
      },
      {
        "choice": "不一致，因為放大倍率不是整數",
        "truth": false,
        "reason": "縮放倍率可為 7/4。"
      },
      {
        "choice": "一致",
        "truth": true,
        "reason": "依獨立推導可得到 一致，符合所有已知條件。"
      },
      {
        "choice": "無法判斷，因為沒有角度",
        "truth": false,
        "reason": "三組邊可直接用 SSS。"
      }
    ],
    "misconceptionTarget": "認為倍率必須是整數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "所有尺寸均為 mm，無換算。",
    "ambiguityAndBoundaryAudit": "最短邊對應明確；三邊由小到大順序一致。",
    "difficultyReason": "從制造規格驗證非整數倍率的 SSS 一致性。",
    "literacyContextNecessity": "包裝印刷需核對三邊規格是否為同一等比縮放，否則標誌會變形。",
    "visualMode": "figure-supported",
    "figureId": "u18-sss-q010",
    "drawingSpecReference": "figures/u18/u18-sss-q010.svg",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "51ca972aee9ff517fe546df48ec446e067a72b4659de5f8a1f469177bfa9ac65"
  },
  {
    "questionId": "u18-s009-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "測量軟體偵測兩個三角形輪廓，邊長分別為 10.0、13.0、16.0 與 15.0、19.5、24.1。若量測容許誤差為每邊 ±0.2，最合理判斷為何？",
    "text": "測量軟體偵測兩個三角形輪廓，邊長分別為 10.0、13.0、16.0 與 15.0、19.5、24.1。若量測容許誤差為每邊 ±0.2，最合理判斷為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "資料可能支持約 1.5 倍相似，但第三邊需標示為近似",
      "一定完全相似，沒有任何誤差",
      "一定不相似，因為 24.1≠24.0",
      "兩三角形全等"
    ],
    "answerIndex": 0,
    "independentSolution": "將第一組三邊乘 1.5 得 15.0、19.5、24.0；實測僅第三邊差 0.1，在容许範圍內。",
    "explanation": "前兩組倍率為 1.5，第三組理想值 24.0，實測 24.1，差 0.1 在 ±0.2 內，所以可視為量測誤差下的近似相似。",
    "steps": [
      "求理想倍率 1.5。",
      "預測第三邊 24.0。",
      "比較誤差 0.1≤0.2。"
    ],
    "optionAnalysis": [
      {
        "choice": "資料可能支持約 1.5 倍相似，但第三邊需標示為近似",
        "truth": true,
        "reason": "依獨立推導可得到 資料可能支持約 1.5 倍相似，但第三邊需標示為近似，符合所有已知條件。"
      },
      {
        "choice": "一定完全相似，沒有任何誤差",
        "truth": false,
        "reason": "24.1/16 不等於精確 1.5。"
      },
      {
        "choice": "一定不相似，因為 24.1≠24.0",
        "truth": false,
        "reason": "差 0.1 在容许誤差內。"
      },
      {
        "choice": "兩三角形全等",
        "truth": false,
        "reason": "邊長整體約放大 1.5 倍。"
      }
    ],
    "misconceptionTarget": "把近似量測當成精確等式，或忽略容許誤差。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "邊長單位一致；誤差比較同單位。",
    "ambiguityAndBoundaryAudit": "『每邊 ±0.2』允许第三邊理想值與實測差不超過 0.2。",
    "difficultyReason": "將 SSS 比例检查與量測誤差結合。",
    "literacyContextNecessity": "輪廓辨識使用有限精度，必須依容許誤差判讀而非要求浮點數完全相等。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6d7100837127ad012a1fa2d831f82f6b87071ee5307bd5e5b57653e9eb1de9b6"
  },
  {
    "questionId": "u18-s009-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一座三角形桁架的三邊比為 5:7:8。縮小模型最長邊為 32 cm，實物最短邊為 12.5 m。模型另外兩邊中較短者為多少公分？",
    "text": "一座三角形桁架的三邊比為 5:7:8。縮小模型最長邊為 32 cm，實物最短邊為 12.5 m。模型另外兩邊中較短者為多少公分？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "17.5 cm",
      "25 cm",
      "200 cm",
      "20 cm"
    ],
    "answerIndex": 3,
    "independentSolution": "SSS 比給出模型三邊 20、28、32 cm；實物最短邊資料可用於核對比例尺，但不影響所求。",
    "explanation": "模型最長邊 8 份為 32 cm，每份 4 cm；模型較短的另外兩邊是 5 份與 7 份，其中較短者 5×4=20 cm。",
    "steps": [
      "只用模型邊比與最長邊。",
      "求每份 4 cm。",
      "取 5 份的邊。"
    ],
    "optionAnalysis": [
      {
        "choice": "17.5 cm",
        "truth": false,
        "reason": "把 5:7:8 的中間邊 7 份當較短者。"
      },
      {
        "choice": "25 cm",
        "truth": false,
        "reason": "將 32 除以錯誤倍率。"
      },
      {
        "choice": "200 cm",
        "truth": false,
        "reason": "把實物 12.5 m 直接與模型混用。"
      },
      {
        "choice": "20 cm",
        "truth": true,
        "reason": "依獨立推導可得到 20 cm，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "被多餘的實物單位資料干擾。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "所求模型長度用 cm；12.5 m 為額外資料。",
    "ambiguityAndBoundaryAudit": "『另外兩邊中較短者』指除最長邊外的 5 份邊。",
    "difficultyReason": "筛選有效數據並由 SSS 邊比求模型尺寸。",
    "literacyContextNecessity": "工程規格常含多餘核對資料，需選擇足以回答模型裁切尺寸的資訊。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ee289fd8cbebfdd38cc10f378b2cf5472530f7456f59e1ac3afcef01f3804adc"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s009-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "itemType": "constructed-response",
    "prompt": "三角形甲邊長6、8、10，三角形乙邊長9、12、15。用SSS證明相似，並求若甲面積24 cm²，乙面積多少。",
    "requiredWork": "依大小順序配對三邊，確認三比相等，再平方倍率求面積。",
    "standardSolution": "9/6=12/8=15/10=3/2，所以兩三角形依SSS相似，乙對甲線性倍率3/2。面積倍率=(3/2)²=9/4，乙面積=24×9/4=54 cm²。",
    "alternativeMethod": "可先把乙三邊同除以1.5得到6、8、10，再推面積倍率2.25。",
    "reasoningSteps": [
      "由小到大配對。",
      "檢查三組比皆3/2。",
      "依SSS判定相似。",
      "平方倍率求54 cm²。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "SSS證明、倍率與面積54 cm²完整正確。"
      },
      {
        "score": 2,
        "criteria": "相似與倍率正確，但面積計算一處錯誤；或面積正確但少一組邊比。"
      },
      {
        "score": 1,
        "criteria": "只指出6-8-10與9-12-15看似同型，沒有三比證據。"
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
    "unitAndNotationRules": "邊長用cm時面積須用cm²；面積倍率不帶單位。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "三邊比與面積倍率均獨立重算，54/24=9/4。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "557ac22b4147bb08da92fa9c3eb94bd2204a1f38af2a8a8b66f65e95b3c79d2f"
  },
  {
    "questionId": "u18-s009-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-similarity",
    "skillId": "similarity-sss",
    "lockedSkillOrder": 9,
    "itemType": "constructed-response",
    "prompt": "兩組長度分別為4、5、8與6、7.5、12。先檢查它們能否構成三角形，再判斷是否相似。",
    "requiredWork": "不可只驗比例；兩組都必須先符合三角形不等式。",
    "standardSolution": "第一組4+5=9>8，可構成三角形；第二組6+7.5=13.5>12，也可構成。且6/4=7.5/5=12/8=1.5，因此依SSS相似。",
    "alternativeMethod": "因第二組正好是第一組各乘1.5，只需完整檢查第一組合法；正倍率縮放後第二組也合法，但必須說明此推理。",
    "reasoningSteps": [
      "排序並檢查最短兩邊和大於最長邊。",
      "確認兩組都合法。",
      "比較三組邊比。",
      "依SSS判定相似。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩組三角形不等式與三組比例都正確，結論相似。"
      },
      {
        "score": 2,
        "criteria": "比例與結論正確但漏檢其中一組三角形不等式；或不等式正確且有一個比例算術錯。"
      },
      {
        "score": 1,
        "criteria": "只說三邊都乘1.5，未檢查能否形成三角形。"
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
    "unitAndNotationRules": "長度同單位；判定前需保留嚴格不等號。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "檢查4+5>8及其1.5倍關係，確認沒有退化三角形。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "6363bb287d3f6b0d06c9f1e8e369bd51e2f7c9957f7e5be950e6b7fbb03e442e"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s009-v001-semantic-review-r1",
    "questionId": "u18-s009-v001",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "43e2a9af863ab6a72106d46276ca1c202582ec7341ae27fb9b97dd11821f8bbc",
    "independentSolution": "第二三角形每邊都是第一個的 2 倍，故三組邊同一倍率，SSS 相似。",
    "derivedAnswer": "SSS",
    "storedAnswer": "SSS",
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
      "scope": "只使用國中會考範圍內的「SSS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "最直接的三邊同比例辨識。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：第二三角形每邊都是第一個的 2 倍，故三組邊同一倍率，SSS 相似。 四個選項逐一核對後，只有「SSS」符合；主要排除點是「看到直角邊組合就誤選其他判定。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s009-v002-semantic-review-r1",
    "questionId": "u18-s009-v002",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "7475e7fad2e2eaff9c89c43789a3a2ec9de693a896de8274af3a0f8deccd14ea",
    "independentSolution": "三角形不等式只需檢查最短兩邊和大於最長邊；此處成立。",
    "derivedAnswer": "能",
    "storedAnswer": "能",
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
      "scope": "只使用國中會考範圍內的「SSS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "SSS 前置的三角形存在性基本檢查。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：三角形不等式只需檢查最短兩邊和大於最長邊；此處成立。 四個選項逐一核對後，只有「能」符合；主要排除點是「把大於條件方向看反。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s009-v003-semantic-review-r1",
    "questionId": "u18-s009-v003",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "e7445c3a983c044e0e342fc7acc69e51fd1c32bedf72cba122db40f400cd72ea",
    "independentSolution": "AB 與 BC 共點 B，對應 DE 與 EF 共點 E，所以 B↔E；其餘 A↔D、C↔F。",
    "derivedAnswer": "△ABC∼△DEF",
    "storedAnswer": "△ABC∼△DEF",
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
      "scope": "只使用國中會考範圍內的「SSS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本 SSS 與相似順序。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：AB 與 BC 共點 B，對應 DE 與 EF 共點 E，所以 B↔E；其餘 A↔D、C↔F。 四個選項逐一核對後，只有「△ABC∼△DEF」符合；主要排除點是「只按邊長排序，未核對共享頂點。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s009-v004-semantic-review-r1",
    "questionId": "u18-s009-v004",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "d6b60603333fcab399f7b87694b3c51710ae61cfbc793847511d904db5fe85fe",
    "independentSolution": "若相似，9 對應邊應為 18；實際給 17，故不相似。",
    "derivedAnswer": "不相似",
    "storedAnswer": "不相似",
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
      "scope": "只使用國中會考範圍內的「SSS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "識別三組比例中單一不一致。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：若相似，9 對應邊應為 18；實際給 17，故不相似。 四個選項逐一核對後，只有「不相似」符合；主要排除點是「只檢查兩組邊比就停止。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s009-v005-semantic-review-r1",
    "questionId": "u18-s009-v005",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "f0511ea88debd0533f6a1c4a5ab426dcb09fa97faf2fe6af80f9268aebdd344e",
    "independentSolution": "6:8:10 同乘 2.5 得 15:20:25。",
    "derivedAnswer": "20、25",
    "storedAnswer": "20、25",
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
      "scope": "只使用國中會考範圍內的「SSS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "由一組對應邊求完整相似邊長。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：6:8:10 同乘 2.5 得 15:20:25。 四個選項逐一核對後，只有「20、25」符合；主要排除點是「以加法差值代替乘法倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s009-v006-semantic-review-r1",
    "questionId": "u18-s009-v006",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "3f2d0c72abb0f5193a7db0f73403c531b32d16e719aba7f24b4b9ccb543194b0",
    "independentSolution": "第二選項的4、5、7與8、10、14都滿足三角形不等式，且對應邊比8/4=10/5=14/7=2，所以兩三角形以SSS相似。",
    "derivedAnswer": "4、5、7 與 8、10、14",
    "storedAnswer": "4、5、7 與 8、10、14",
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
      "scope": "只使用國中會考範圍內的「SSS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "同時检查存在性和 SSS 比例。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "先逐項檢查三角形不等式，再比較三組對應邊。第二選項的4、5、7與8、10、14均可成三角形，且放大倍率都為2，因此只有第二選項符合SSS相似。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s009-v007-semantic-review-r1",
    "questionId": "u18-s009-v007",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "5eb556923d50ed64a75b3a905d09b4036142373152e5f9a7205f5863a9430e02",
    "independentSolution": "第二三角形是第一個的 5/3 倍，故第一最短邊 x=10×3/5=6。",
    "derivedAnswer": "6",
    "storedAnswer": "6",
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
      "scope": "只使用國中會考範圍內的「SSS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "由兩組已知比確定第三邊代數值。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：第二三角形是第一個的 5/3 倍，故第一最短邊 x=10×3/5=6。 四個選項逐一核對後，只有「6」符合；主要排除點是「相似比方向取反或使用邊長差。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s009-v008-semantic-review-r1",
    "questionId": "u18-s009-v008",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "40670f7e8ec62c0ac12e124e19a4e44bfcedacb901ffdddb88559bb95cba7a1a",
    "independentSolution": "三角形不等式必須嚴格大於；等於時三點共線，不能使用相似三角形判定。",
    "derivedAnswer": "兩組都不能形成三角形，因此不能用 SSS 判定相似",
    "storedAnswer": "兩組都不能形成三角形，因此不能用 SSS 判定相似",
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
      "scope": "只使用國中會考範圍內的「SSS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "邊界條件為等號，需認识嚴格不等式。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：三角形不等式必須嚴格大於；等於時三點共線，不能使用相似三角形判定。 四個選項逐一核對後，只有「兩組都不能形成三角形，因此不能用 SSS 判定相似」符合；主要排除點是「只看三組比相等，忽略存在性。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s009-v009-semantic-review-r1",
    "questionId": "u18-s009-v009",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "c87643c22f03bff962c1322b16927e655669b7ee1f5821f53e5e17a51516282a",
    "independentSolution": "三個比都等於 0.6，因此存在共同縮放倍率，角度資料不是必要條件。",
    "derivedAnswer": "可由 SSS 判定相似",
    "storedAnswer": "可由 SSS 判定相似",
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
      "scope": "只使用國中會考範圍內的「SSS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "等值分數形式不同，需要化簡後比較。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：三個比都等於 0.6，因此存在共同縮放倍率，角度資料不是必要條件。 四個選項逐一核對後，只有「可由 SSS 判定相似」符合；主要排除點是「未化簡分數就判定不相等。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s009-v010-semantic-review-r1",
    "questionId": "u18-s009-v010",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "51ca972aee9ff517fe546df48ec446e067a72b4659de5f8a1f469177bfa9ac65",
    "independentSolution": "大標誌三邊正好是小標誌各乘 1.75，且兩組均可成三角形，支持 SSS。",
    "derivedAnswer": "一致",
    "storedAnswer": "一致",
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
      "boundary": "最短邊對應明確；三邊由小到大順序一致。",
      "units": "所有尺寸均為 mm，無換算。",
      "scope": "只使用國中會考範圍內的「SSS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "從制造規格驗證非整數倍率的 SSS 一致性。",
    "literacyNecessityReview": "包裝印刷需核對三邊規格是否為同一等比縮放，否則標誌會變形。",
    "reviewerNote": "重新由已知條件獨立計算：大標誌三邊正好是小標誌各乘 1.75，且兩組均可成三角形，支持 SSS。 四個選項逐一核對後，只有「一致」符合；主要排除點是「認為倍率必須是整數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s009-v011-semantic-review-r1",
    "questionId": "u18-s009-v011",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "6d7100837127ad012a1fa2d831f82f6b87071ee5307bd5e5b57653e9eb1de9b6",
    "independentSolution": "將第一組三邊乘 1.5 得 15.0、19.5、24.0；實測僅第三邊差 0.1，在容许範圍內。",
    "derivedAnswer": "資料可能支持約 1.5 倍相似，但第三邊需標示為近似",
    "storedAnswer": "資料可能支持約 1.5 倍相似，但第三邊需標示為近似",
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
      "boundary": "『每邊 ±0.2』允许第三邊理想值與實測差不超過 0.2。",
      "units": "邊長單位一致；誤差比較同單位。",
      "scope": "只使用國中會考範圍內的「SSS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "將 SSS 比例检查與量測誤差結合。",
    "literacyNecessityReview": "輪廓辨識使用有限精度，必須依容許誤差判讀而非要求浮點數完全相等。",
    "reviewerNote": "重新由已知條件獨立計算：將第一組三邊乘 1.5 得 15.0、19.5、24.0；實測僅第三邊差 0.1，在容许範圍內。 四個選項逐一核對後，只有「資料可能支持約 1.5 倍相似，但第三邊需標示為近似」符合；主要排除點是「把近似量測當成精確等式，或忽略容許誤差。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s009-v012-semantic-review-r1",
    "questionId": "u18-s009-v012",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "ee289fd8cbebfdd38cc10f378b2cf5472530f7456f59e1ac3afcef01f3804adc",
    "independentSolution": "SSS 比給出模型三邊 20、28、32 cm；實物最短邊資料可用於核對比例尺，但不影響所求。",
    "derivedAnswer": "20 cm",
    "storedAnswer": "20 cm",
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
      "boundary": "『另外兩邊中較短者』指除最長邊外的 5 份邊。",
      "units": "所求模型長度用 cm；12.5 m 為額外資料。",
      "scope": "只使用國中會考範圍內的「SSS 相似」概念，未要求高中延伸。"
    },
    "difficultyReason": "筛選有效數據並由 SSS 邊比求模型尺寸。",
    "literacyNecessityReview": "工程規格常含多餘核對資料，需選擇足以回答模型裁切尺寸的資訊。",
    "reviewerNote": "重新由已知條件獨立計算：SSS 比給出模型三邊 20、28、32 cm；實物最短邊資料可用於核對比例尺，但不影響所求。 四個選項逐一核對後，只有「20 cm」符合；主要排除點是「被多餘的實物單位資料干擾。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u18-sss-q010",
    "unitId": "u18",
    "skillId": "similarity-sss",
    "svgPath": "figures/u18/u18-sss-q010.svg",
    "canvas": {
      "width": 640,
      "height": 420,
      "viewBox": "0 0 640 420"
    },
    "title": "兩個三角形標誌的邊長資料",
    "altText": "兩個分離三角形，三邊數據分別為24、32、40毫米與42、56、70毫米；圖不按比例。",
    "drawingSpec": {
      "purpose": "支援SSS資料一致性檢查。",
      "coordinateSystem": "SVG origin at upper-left; x increases rightward and y downward.",
      "exactGeometry": {
        "small": [
          [
            65,
            330
          ],
          [
            145,
            130
          ],
          [
            285,
            330
          ]
        ],
        "large": [
          [
            350,
            330
          ],
          [
            455,
            90
          ],
          [
            605,
            330
          ]
        ]
      },
      "labels": {
        "smallSides": [
          "24 mm",
          "32 mm",
          "40 mm"
        ],
        "largeSides": [
          "42 mm",
          "56 mm",
          "70 mm"
        ]
      },
      "lineRules": {
        "visible": [
          "all six triangle sides"
        ],
        "hidden": []
      },
      "symbolsAndMarks": {
        "none": "No equality marks; all evidence is numerical."
      },
      "scalePolicy": "not-to-scale",
      "visualInferenceWarning": "圖形不按比例；只能依標示與題目條件推理。",
      "mobileConstraints": "At 320 CSS px width, primary labels must remain at least 9 px apparent height and no label may overlap a segment.",
      "accessibility": {
        "title": "兩個三角形標誌的邊長資料",
        "description": "左側小三角形三邊標示24、32、40毫米，右側大三角形三邊標示42、56、70毫米。",
        "altText": "兩個分離三角形，三邊數據分別為24、32、40毫米與42、56、70毫米；圖不按比例。"
      }
    },
    "svgAssertions": [
      "id=\"small-logo\"",
      "id=\"large-logo\"",
      "24 mm",
      "70 mm"
    ],
    "figureReview": {
      "decision": "pass",
      "reviewedAt": "2026-07-12",
      "geometryCheck": "pass",
      "mobileReadability": "pass",
      "answerLeakageCheck": "pass",
      "reviewNote": "三組數值均可讀且沒有在圖形外觀上刻意按1.75倍繪製；答案必須由比例計算取得。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "5dfdf9f4dc2730293b1d6624a9600490817db61ea36bd0d26d09d6bf6986d53f"
  }
];

