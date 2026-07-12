// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s011";

export const SKILL_ID = "similar-ratio-area";

export const LECTURE = {
  "lectureId": "u18-s011-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-applications",
  "skillId": "similar-ratio-area",
  "lockedSkillOrder": 11,
  "lockedSkillTitle": "相似比與面積比",
  "title": "相似比與面積比：長和寬都縮放，面積乘上平方",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能由相似比求面積比。",
    "能由面積比反推正的相似比。",
    "能使用面積比例求未知面積。",
    "能區分線性比、面積比與體積縮放概念。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "similar-ratio-perimeter",
        "title": "相似比與周長比",
        "requiredLevel": "能運用「相似比與周長比」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「相似比與周長比」，先複習其核心判斷，再把方法推進到「相似比與面積比」。"
  },
  "glossary": [
    {
      "term": "面積比",
      "definition": "兩相似平面圖形面積的比。"
    },
    {
      "term": "平方關係",
      "definition": "若線性縮放 k，面積由兩個方向共同縮放為 k²。"
    },
    {
      "term": "正平方根",
      "definition": "由面積比反求長度比時，取正值，因長度為正。"
    },
    {
      "term": "二維量",
      "definition": "由兩個長度方向形成的量，例如面積。"
    }
  ],
  "notation": [
    {
      "symbol": "S₂/S₁=k²",
      "meaning": "圖形 2 對圖形 1 的面積比等於線性縮放倍數平方。"
    },
    {
      "symbol": "k=√(S₂/S₁)",
      "meaning": "由面積比反求正的相似比。"
    },
    {
      "symbol": "a²:b²",
      "meaning": "相似比 a:b 對應的面積比。"
    }
  ],
  "conceptNarrative": [
    "相似圖形的長與寬都乘 k。以矩形為例，面積由長×寬變為 (k長)×(k寬)=k²×原面積；其他相似圖形也有相同結果。",
    "相似比 2:3 時，面積比不是 2:3，而是 4:9。反過來，面積比 25:49 對應的正相似比是 5:7。",
    "由面積求邊長比時必須先確認圖形相似。兩個任意圖形面積相同，形狀可能完全不同。",
    "本單元只把體積比視為三個方向縮放的概念 k³，不延伸到高中相似立體證明。"
  ],
  "formalDefinitions": [
    {
      "name": "相似面積定理",
      "statement": "兩相似平面圖形的面積比等於相似比的平方。"
    },
    {
      "name": "反推相似比",
      "statement": "面積比為 m:n 時，線性相似比為 √m:√n，取正值並化簡。"
    }
  ],
  "formulas": [
    {
      "formula": "SA/SB=(a/b)²",
      "conditions": [
        "圖形 A、B 相似",
        "a/b 為 A 對 B 的相似比"
      ],
      "meaning": "由線性比求面積比。"
    },
    {
      "formula": "a/b=√(SA/SB)",
      "conditions": [
        "長度為正"
      ],
      "meaning": "由面積比反推相似比。"
    }
  ],
  "nonApplicableCases": [
    "非相似圖形不能由相似比公式連結面積。",
    "面積比不能直接等於相似比。",
    "由面積比開根號時不能取負值作長度比。",
    "周長比使用 k，不使用 k²。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "確認圖形相似並固定方向。",
      "check": "面積 A:面積 B 對應哪個相似比？"
    },
    {
      "step": 2,
      "instruction": "若已知相似比，將兩項各自平方。",
      "check": "是否平方了比的兩項？"
    },
    {
      "step": 3,
      "instruction": "若已知面積比，取正平方根。",
      "check": "平方根可否化簡？"
    },
    {
      "step": 4,
      "instruction": "建立面積比例求未知量。",
      "check": "單位是否為平方單位？"
    },
    {
      "step": 5,
      "instruction": "比較放大倍數與面積變化是否合理。",
      "check": "線性放大 3 倍，面積應為 9 倍。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "兩相似三角形相似比為 3:4，求面積比。",
      "solutionSteps": [
        "面積比為相似比平方。",
        "3²:4²=9:16。"
      ],
      "answer": "9:16"
    },
    {
      "exampleId": "L2",
      "prompt": "兩相似圖形面積比為 36:81，求相似比。",
      "solutionSteps": [
        "取正平方根得 6:9。",
        "化簡為 2:3。"
      ],
      "answer": "2:3"
    },
    {
      "exampleId": "L3",
      "prompt": "小圖面積 20 平方公分，相似比小:大=2:5，求大圖面積。",
      "solutionSteps": [
        "面積比小:大=4:25。",
        "20:S=4:25。",
        "S=125 平方公分。"
      ],
      "answer": "125 平方公分"
    },
    {
      "exampleId": "L4",
      "prompt": "一張圖線性放大 150%，原面積 32 平方公分，新面積多少？",
      "solutionSteps": [
        "線性倍數為 1.5。",
        "面積倍數 1.5²=2.25。",
        "32×2.25=72。"
      ],
      "answer": "72 平方公分"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "面積比直接抄相似比。",
      "why": "忽略兩個方向同時縮放。",
      "correction": "把相似比兩項平方。"
    },
    {
      "mistake": "只平方其中一項。",
      "why": "把 (a:b)² 誤讀。",
      "correction": "寫成 a²:b²。"
    },
    {
      "mistake": "由面積比取平方而非平方根。",
      "why": "反向操作混亂。",
      "correction": "面積比反推長度比要開根號。"
    },
    {
      "mistake": "面積單位寫成公分。",
      "why": "忽略面積為平方單位。",
      "correction": "答案寫平方公分或 cm²。"
    },
    {
      "mistake": "把放大 150% 當增加 150%。",
      "why": "百分比語意混淆。",
      "correction": "放大為原來 150% 即倍數 1.5。"
    }
  ],
  "selfCheck": [
    "圖形相似嗎？",
    "比值方向一致嗎？",
    "由長度到面積是否平方？",
    "由面積到長度是否取正平方根？",
    "答案使用平方單位嗎？"
  ],
  "summary": [
    "相似圖形面積比等於相似比平方。",
    "面積比反推相似比要取正平方根。",
    "周長用 k，面積用 k²。",
    "公式前提是圖形相似。"
  ],
  "connections": {
    "previous": "周長比是一次縮放。",
    "next": [
      "利用相似測高會回到線性邊長比例。",
      "面積比應用會處理圖紙、材料與成本。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s011-v001",
      "u18-s011-v002",
      "u18-s011-v003",
      "u18-s011-v004",
      "u18-s011-v005",
      "u18-s011-v006",
      "u18-s011-v007",
      "u18-s011-v008",
      "u18-s011-v009",
      "u18-s011-v010",
      "u18-s011-v011",
      "u18-s011-v012"
    ],
    "constructedResponseIds": [
      "u18-s011-cr001",
      "u18-s011-cr002"
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
    "reviewNote": "逐例核對平方與開根號方向，面積單位全部使用平方單位；百分比放大案例已明確區分『變為 150%』與『增加 150%』。"
  },
  "contentSha256": "17ddc675123700515951b61d3a28f926cf62197d8cc961b5578e700b99f5edce"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s011-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩相似三角形的相似比為 3:4，則面積比為何？",
    "text": "兩相似三角形的相似比為 3:4，則面積比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "3:4",
      "6:8",
      "9:16",
      "27:64"
    ],
    "answerIndex": 2,
    "independentSolution": "長與高各按 3:4，面積倍率為 (3/4)²=9/16。",
    "explanation": "相似圖形面積比等於相似比平方，所以 3²:4²=9:16。",
    "steps": [
      "辨認面積為二維量。",
      "平方比的兩項。",
      "得到 9:16。"
    ],
    "optionAnalysis": [
      {
        "choice": "3:4",
        "truth": false,
        "reason": "這是線性比。"
      },
      {
        "choice": "6:8",
        "truth": false,
        "reason": "只是把兩項同乘 2。"
      },
      {
        "choice": "9:16",
        "truth": true,
        "reason": "依獨立推導可得到 9:16，符合所有已知條件。"
      },
      {
        "choice": "27:64",
        "truth": false,
        "reason": "這是立方關係。"
      }
    ],
    "misconceptionTarget": "面積比直接抄相似比或誤用立方。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本相似比平方。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "263343bef78b9bd5dc4fe0d6cfab2be3298cfcfa1fb4fad17b6d62c8371528c5"
  },
  {
    "questionId": "u18-s011-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩相似圖形面積比為 25:49，則相似比為何？",
    "text": "兩相似圖形面積比為 25:49，則相似比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "25:49",
      "5:7",
      "625:2401",
      "-5:7"
    ],
    "answerIndex": 1,
    "independentSolution": "因長度為正，取 5 與 7，不取負根。",
    "explanation": "相似比為面積比兩項的正平方根，√25:√49=5:7。",
    "steps": [
      "分別開正平方根。",
      "保留原方向。",
      "得到 5:7。"
    ],
    "optionAnalysis": [
      {
        "choice": "25:49",
        "truth": false,
        "reason": "未取平方根。"
      },
      {
        "choice": "5:7",
        "truth": true,
        "reason": "依獨立推導可得到 5:7，符合所有已知條件。"
      },
      {
        "choice": "625:2401",
        "truth": false,
        "reason": "反而再平方。"
      },
      {
        "choice": "-5:7",
        "truth": false,
        "reason": "長度比取正值。"
      }
    ],
    "misconceptionTarget": "由面積反求長度時方向操作錯誤。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本面積比反推相似比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0216da748c3d600db845f583d63a2c3987ae57e52056380a1966bbc51411d378"
  },
  {
    "questionId": "u18-s011-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "小圖形面積為 18 cm²，與大圖形相似，小:大相似比為 2:3。大圖形面積為何？",
    "text": "小圖形面積為 18 cm²，與大圖形相似，小:大相似比為 2:3。大圖形面積為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "27 cm²",
      "81 cm²",
      "8 cm²",
      "40.5 cm²"
    ],
    "answerIndex": 3,
    "independentSolution": "面積比小:大=4:9，18 對應 4 份，每份 4.5，大圖 9 份為 40.5。",
    "explanation": "大/小面積倍率=(3/2)²=9/4，所以大面積=18×9/4=40.5 cm²。",
    "steps": [
      "求線性放大倍率 3/2。",
      "平方得 9/4。",
      "乘原面積。"
    ],
    "optionAnalysis": [
      {
        "choice": "27 cm²",
        "truth": false,
        "reason": "只乘線性倍率 3/2。"
      },
      {
        "choice": "81 cm²",
        "truth": false,
        "reason": "把 18 乘 (3/2)³。"
      },
      {
        "choice": "8 cm²",
        "truth": false,
        "reason": "方向取反。"
      },
      {
        "choice": "40.5 cm²",
        "truth": true,
        "reason": "依獨立推導可得到 40.5 cm²，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "面積只乘一次線性倍率。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "面積答案使用 cm²；不需四舍五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本未知面積，結果為小數。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "542e4e67f5c1930b35b90e78262f07102578799e9d7be28c04bac9905e119556"
  },
  {
    "questionId": "u18-s011-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩相似三角形面積為 32 cm² 與 50 cm²，第一:第二相似比為何？",
    "text": "兩相似三角形面積為 32 cm² 與 50 cm²，第一:第二相似比為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "4:5",
      "16:25",
      "32:50",
      "5:4"
    ],
    "answerIndex": 0,
    "independentSolution": "32/50=16/25=(4/5)²，因此長度比為 4/5。",
    "explanation": "面積比 32:50=16:25，開正平方根得相似比 4:5。",
    "steps": [
      "化簡面積比。",
      "開正平方根。",
      "保持第一:第二方向。"
    ],
    "optionAnalysis": [
      {
        "choice": "4:5",
        "truth": true,
        "reason": "依獨立推導可得到 4:5，符合所有已知條件。"
      },
      {
        "choice": "16:25",
        "truth": false,
        "reason": "這是面積比，不是相似比。"
      },
      {
        "choice": "32:50",
        "truth": false,
        "reason": "未化簡且仍為面積比。"
      },
      {
        "choice": "5:4",
        "truth": false,
        "reason": "方向反轉。"
      }
    ],
    "misconceptionTarget": "把面積比直接當線性比。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "先化簡非完全平方原數，再開根號。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bec386a2455ad59c5103291516d5e76327ff11cc476adb709d1be607b30647f4"
  },
  {
    "questionId": "u18-s011-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若相似比 A:B=7:3，且 B 面積為 27 m²，則 A 面積為何？",
    "text": "若相似比 A:B=7:3，且 B 面積為 27 m²，則 A 面積為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "63 m²",
      "147 m²",
      "343 m²",
      "243 m²"
    ],
    "answerIndex": 1,
    "independentSolution": "B 每面積份為 27/9=3，A 49 份為 147。",
    "explanation": "面積比 A:B=49:9，A=27×49/9=147 m²。",
    "steps": [
      "平方相似比得 49:9。",
      "以 B 的 27 對應 9 份。",
      "求 A=147。"
    ],
    "optionAnalysis": [
      {
        "choice": "63 m²",
        "truth": false,
        "reason": "只乘線性倍率 7/3。"
      },
      {
        "choice": "147 m²",
        "truth": true,
        "reason": "依獨立推導可得到 147 m²，符合所有已知條件。"
      },
      {
        "choice": "343 m²",
        "truth": false,
        "reason": "把 27 錯當 3 份後乘 7²。"
      },
      {
        "choice": "243 m²",
        "truth": false,
        "reason": "誤用立方倍率。"
      }
    ],
    "misconceptionTarget": "未平方相似比或誤用立方。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "面積使用 m²。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "反向由較小面積與大:小相似比求較大面積。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bb3c5da0b189e21957280cf191d7f6cdb54a007da6fb6c3ef49d0fcd83cebc6c"
  },
  {
    "questionId": "u18-s011-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一張圖線性縮小到原來的 60%，新面積是原面積的多少？",
    "text": "一張圖線性縮小到原來的 60%，新面積是原面積的多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "60%",
      "40%",
      "21.6%",
      "36%"
    ],
    "answerIndex": 3,
    "independentSolution": "若長和寬都乘 0.6，面積乘 0.6×0.6=0.36。",
    "explanation": "線性倍率 0.6，面積倍率 0.6²=0.36，即 36%。",
    "steps": [
      "把 60% 寫成 0.6。",
      "平方得 0.36。",
      "轉成 36%。"
    ],
    "optionAnalysis": [
      {
        "choice": "60%",
        "truth": false,
        "reason": "只考虑一個方向。"
      },
      {
        "choice": "40%",
        "truth": false,
        "reason": "把縮小比例當減少百分比。"
      },
      {
        "choice": "21.6%",
        "truth": false,
        "reason": "誤用 0.6³。"
      },
      {
        "choice": "36%",
        "truth": true,
        "reason": "依獨立推導可得到 36%，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把線性百分比直接當面積百分比。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "百分比線性縮放轉面積百分比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "696c841549b5d7f1f4d65cafa76ae92b351f19e7aedb2f89efc6b7452a262af2"
  },
  {
    "questionId": "u18-s011-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "相似圖形 A、B 的面積比為 4:9。若 A 周長為 28 cm，則 B 周長為何？",
    "text": "相似圖形 A、B 的面積比為 4:9。若 A 周長為 28 cm，則 B 周長為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "42 cm",
      "63 cm",
      "18.67 cm",
      "56 cm"
    ],
    "answerIndex": 0,
    "independentSolution": "A 周長 28 對應 2 份，每份 14，B 的 3 份為 42。",
    "explanation": "相似比 A:B=2:3，周長比同為 2:3，所以 B 周長=28×3/2=42 cm。",
    "steps": [
      "從面積比開根號得 2:3。",
      "周長使用線性比。",
      "求 42。"
    ],
    "optionAnalysis": [
      {
        "choice": "42 cm",
        "truth": true,
        "reason": "依獨立推導可得到 42 cm，符合所有已知條件。"
      },
      {
        "choice": "63 cm",
        "truth": false,
        "reason": "直接用面積比 4:9。"
      },
      {
        "choice": "18.67 cm",
        "truth": false,
        "reason": "方向取反且用面積比。"
      },
      {
        "choice": "56 cm",
        "truth": false,
        "reason": "誤把相似比當 1:2。"
      }
    ],
    "misconceptionTarget": "未先從面積比取平方根。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 110,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "跨接面積比與周長比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4c8c014c8d7efdc25e7e8926577dffc49eeaa1dbaa4b20bd574d607f536cbbb9"
  },
  {
    "questionId": "u18-s011-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩相似多邊形面積比為 81:16，較大圖形比較小圖形面積多 130 cm²。較小面積為何？",
    "text": "兩相似多邊形面積比為 81:16，較大圖形比較小圖形面積多 130 cm²。較小面積為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "16 cm²",
      "65 cm²",
      "32 cm²",
      "162 cm²"
    ],
    "answerIndex": 2,
    "independentSolution": "設兩面積為 81k、16k；65k=130，k=2，小面積 32。",
    "explanation": "大:小面積比=81:16，差 65 份為 130，每份 2，較小面積=16×2=32 cm²。",
    "steps": [
      "求面積差份數 65。",
      "求每份 2 cm²。",
      "小面積取 16 份。"
    ],
    "optionAnalysis": [
      {
        "choice": "16 cm²",
        "truth": false,
        "reason": "把小圖面積直接當 16 份的數值。"
      },
      {
        "choice": "65 cm²",
        "truth": false,
        "reason": "把差 130 平分。"
      },
      {
        "choice": "32 cm²",
        "truth": true,
        "reason": "依獨立推導可得到 32 cm²，符合所有已知條件。"
      },
      {
        "choice": "162 cm²",
        "truth": false,
        "reason": "把每份誤算成 2 後乘 81。"
      }
    ],
    "misconceptionTarget": "使用線性比 9:4 來處理面積差。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "面積差與面積均為 cm²。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "由面積比與面積差反求實際面積。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d699afcabaa090409f5e5dcd5ada6027b976a5fe360e4484e4f2d88bfc23b888"
  },
  {
    "questionId": "u18-s011-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩相似三角形的相似比為 x:6，面積比為 4:9，且 x>0，則 x 為何？",
    "text": "兩相似三角形的相似比為 x:6，面積比為 4:9，且 x>0，則 x 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "8/3",
      "9",
      "-4",
      "4"
    ],
    "answerIndex": 3,
    "independentSolution": "6 對應 3 份，每份 2，x 對應 2 份為 4。",
    "explanation": "x:6=√4:√9=2:3，所以 x/6=2/3，x=4。",
    "steps": [
      "由面積比取正平方根。",
      "列 x/6=2/3。",
      "解 x=4。"
    ],
    "optionAnalysis": [
      {
        "choice": "8/3",
        "truth": false,
        "reason": "把 x/6 直接等於 4/9。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "把面積比項當長度。"
      },
      {
        "choice": "-4",
        "truth": false,
        "reason": "長度取正值。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "依獨立推導可得到 4，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把面積比直接用在線性未知數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 120,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "面積比反推含未知數的相似比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "35870a3b76843e68935be2e907ba142afb4d902d6e4ecc1846c5eb2b8097131b"
  },
  {
    "questionId": "u18-s011-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "平面圖比例尺為 1:200，圖上一塊相似地面的面積為 25 cm²。實際面積為多少 m²？",
    "text": "平面圖比例尺為 1:200，圖上一塊相似地面的面積為 25 cm²。實際面積為多少 m²？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "100 m²",
      "50 m²",
      "10000 m²",
      "1 m²"
    ],
    "answerIndex": 0,
    "independentSolution": "每 1 cm² 代表 4 m²，因為 200 cm=2 m；25 cm² 代表 25×4=100 m²。",
    "explanation": "實際面積=25×200²=1,000,000 cm²；1 m²=10,000 cm²，所以為 100 m²。",
    "steps": [
      "平方比例尺得 40000。",
      "乘圖上面積。",
      "cm² 轉 m² 除 10000。"
    ],
    "optionAnalysis": [
      {
        "choice": "100 m²",
        "truth": true,
        "reason": "依獨立推導可得到 100 m²，符合所有已知條件。"
      },
      {
        "choice": "50 m²",
        "truth": false,
        "reason": "只乘線性倍率 200。"
      },
      {
        "choice": "10000 m²",
        "truth": false,
        "reason": "平方倍率後忘记 cm² 轉 m²。"
      },
      {
        "choice": "1 m²",
        "truth": false,
        "reason": "把 25 cm² 直接除以 25。"
      }
    ],
    "misconceptionTarget": "比例尺只乘一次或平方單位換算錯誤。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "1 m²=10000 cm²；結果 100 m²。",
    "ambiguityAndBoundaryAudit": "圖形按同一比例尺繪制，不含圖紙變形。",
    "difficultyReason": "比例尺平方與平方單位換算。",
    "literacyContextNecessity": "施工平面圖的面積必須使用比例尺平方，並轉換為實際平方米。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "75ae95672a61830010afd270b87ff3fe48da5975cccae5f6257697766d6ffad3"
  },
  {
    "questionId": "u18-s011-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "相似海報小:大線性比為 3:5。小海報印刷需 180 g 墨，若每單位面積用墨相同，大海報需多少克？",
    "text": "相似海報小:大線性比為 3:5。小海報印刷需 180 g 墨，若每單位面積用墨相同，大海報需多少克？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "300 g",
      "648 g",
      "500 g",
      "108 g"
    ],
    "answerIndex": 2,
    "independentSolution": "小墨 180 對應 9 份，每份 20 g，大海報 25 份用 500 g。",
    "explanation": "面積比小:大=9:25，用墨量同面積比；大用墨=180×25/9=500 g。",
    "steps": [
      "平方線性比。",
      "確認用墨與面積成正比。",
      "計算 500 g。"
    ],
    "optionAnalysis": [
      {
        "choice": "300 g",
        "truth": false,
        "reason": "只按線性倍率 5/3。"
      },
      {
        "choice": "648 g",
        "truth": false,
        "reason": "把倍率誤作 3.6。"
      },
      {
        "choice": "500 g",
        "truth": true,
        "reason": "依獨立推導可得到 500 g，符合所有已知條件。"
      },
      {
        "choice": "108 g",
        "truth": false,
        "reason": "方向取反。"
      }
    ],
    "misconceptionTarget": "材料用量只按邊長倍率變化。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "墨量以 g，覆盖率相同，無額外損耗。",
    "ambiguityAndBoundaryAudit": "題目明確每單位面積用墨相同，排除厚度或底色差異。",
    "difficultyReason": "把几何面積比轉成實際材料用量。",
    "literacyContextNecessity": "印刷墨量由覆盖面積决定，必須使用面積倍率而非周長倍率。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "822512aa9db5d0684724f8b1be749f5c12900710bc080e9d83f5c53a17978d72"
  },
  {
    "questionId": "u18-s011-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個相似蓄水池的平面形狀相似，線性比小:大=2:3。若只比較同一水深下的水面覆蓋面積，大池是小池的幾倍？",
    "text": "兩個相似蓄水池的平面形狀相似，線性比小:大=2:3。若只比較同一水深下的水面覆蓋面積，大池是小池的幾倍？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "3/2 倍",
      "9/4 倍",
      "27/8 倍",
      "4/9 倍"
    ],
    "answerIndex": 1,
    "independentSolution": "同一水深只影響水面轮廓，不是比較體積；面積按兩個水平方向縮放。",
    "explanation": "水面覆盖是平面面積，倍率=(3/2)²=9/4。",
    "steps": [
      "辨認所求為水面面積。",
      "取大/小線性倍率 3/2。",
      "平方得到 9/4。"
    ],
    "optionAnalysis": [
      {
        "choice": "3/2 倍",
        "truth": false,
        "reason": "只用一次線性倍率。"
      },
      {
        "choice": "9/4 倍",
        "truth": true,
        "reason": "依獨立推導可得到 9/4 倍，符合所有已知條件。"
      },
      {
        "choice": "27/8 倍",
        "truth": false,
        "reason": "誤用三維體積倍率。"
      },
      {
        "choice": "4/9 倍",
        "truth": false,
        "reason": "方向反轉。"
      }
    ],
    "misconceptionTarget": "看到蓄水池就誤用體積立方倍率。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "答案為無單位倍數。",
    "ambiguityAndBoundaryAudit": "只比較平面水面覆盖，不考虑池壁斜度與體積。",
    "difficultyReason": "在立體情境中辨認實際所求仍為二維面積。",
    "literacyContextNecessity": "情境明確比較同一水深的水面面積而非蓄水體積，尺度維度判斷是核心。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "32a2bae80258bf65719c6497475a66d044c636c667320a563148e951643a8518"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s011-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "itemType": "constructed-response",
    "prompt": "兩相似圖形的相似比為4：7，小圖面積80 cm²。求大圖面積，並說明為何不能直接乘7/4。",
    "requiredWork": "先平方線性倍率再作用於面積。",
    "standardSolution": "大對小線性倍率=7/4，面積倍率=(7/4)²=49/16。大面積=80×49/16=245 cm²。不能只乘7/4，因面積同時受到兩個互相垂直方向的縮放。",
    "alternativeMethod": "以面積比小：大=16：49，80對應16份，每份5，大圖49份為245。",
    "reasoningSteps": [
      "寫線性倍率7/4。",
      "平方為49/16。",
      "求80×49/16=245。",
      "解釋面積需平方。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "答案245 cm²與平方理由完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但理由簡略；或公式正確有一處算術錯。"
      },
      {
        "score": 1,
        "criteria": "只乘7/4得到140或只寫面積比16：49。"
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
    "unitAndNotationRules": "面積須標示cm²；線性比與面積比不可混用。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "用平方倍率與份數法都得到245；80/16=5。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "c36d575f08db6c2477656df9607c32ab37beeef4ac200930bbff23aa86f8c926"
  },
  {
    "questionId": "u18-s011-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "similar-ratio-area",
    "lockedSkillOrder": 11,
    "itemType": "constructed-response",
    "prompt": "兩相似三角形面積比為36：121，大三角形一條對應邊長33 cm。求小三角形對應邊長。",
    "requiredWork": "由面積比開平方得到線性比，再按方向縮小。",
    "standardSolution": "小：大面積比36：121，所以小：大相似比6：11。小邊=33×6/11=18 cm。",
    "alternativeMethod": "大邊33對應11份，每份3 cm，小邊6份為18 cm。",
    "reasoningSteps": [
      "對面積比開平方。",
      "得到小：大=6：11。",
      "33乘6/11。",
      "求18 cm。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確得到18 cm並說明比的方向。"
      },
      {
        "score": 2,
        "criteria": "開平方與方向正確但算術有小錯；或答案正確未寫推理。"
      },
      {
        "score": 1,
        "criteria": "直接用36/121乘33。"
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
    "unitAndNotationRules": "答案為長度cm，不可寫cm²。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "18/33=6/11，平方後36/121，與面積比一致。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "d6376cf2f23177eec2ab20e593b2fe2fc142c8366642249b52dd3f202ce6e1a1"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s011-v001-semantic-review-r1",
    "questionId": "u18-s011-v001",
    "unitId": "u18",
    "skillId": "similar-ratio-area",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "263343bef78b9bd5dc4fe0d6cfab2be3298cfcfa1fb4fad17b6d62c8371528c5",
    "independentSolution": "長與高各按 3:4，面積倍率為 (3/4)²=9/16。",
    "derivedAnswer": "9:16",
    "storedAnswer": "9:16",
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
      "scope": "只使用國中會考範圍內的「相似比與面積比」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本相似比平方。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：長與高各按 3:4，面積倍率為 (3/4)²=9/16。 四個選項逐一核對後，只有「9:16」符合；主要排除點是「面積比直接抄相似比或誤用立方。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s011-v002-semantic-review-r1",
    "questionId": "u18-s011-v002",
    "unitId": "u18",
    "skillId": "similar-ratio-area",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "0216da748c3d600db845f583d63a2c3987ae57e52056380a1966bbc51411d378",
    "independentSolution": "因長度為正，取 5 與 7，不取負根。",
    "derivedAnswer": "5:7",
    "storedAnswer": "5:7",
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
      "scope": "只使用國中會考範圍內的「相似比與面積比」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本面積比反推相似比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：因長度為正，取 5 與 7，不取負根。 四個選項逐一核對後，只有「5:7」符合；主要排除點是「由面積反求長度時方向操作錯誤。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s011-v003-semantic-review-r1",
    "questionId": "u18-s011-v003",
    "unitId": "u18",
    "skillId": "similar-ratio-area",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "542e4e67f5c1930b35b90e78262f07102578799e9d7be28c04bac9905e119556",
    "independentSolution": "面積比小:大=4:9，18 對應 4 份，每份 4.5，大圖 9 份為 40.5。",
    "derivedAnswer": "40.5 cm²",
    "storedAnswer": "40.5 cm²",
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
      "units": "面積答案使用 cm²；不需四舍五入。",
      "scope": "只使用國中會考範圍內的「相似比與面積比」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本未知面積，結果為小數。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：面積比小:大=4:9，18 對應 4 份，每份 4.5，大圖 9 份為 40.5。 四個選項逐一核對後，只有「40.5 cm²」符合；主要排除點是「面積只乘一次線性倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s011-v004-semantic-review-r1",
    "questionId": "u18-s011-v004",
    "unitId": "u18",
    "skillId": "similar-ratio-area",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "bec386a2455ad59c5103291516d5e76327ff11cc476adb709d1be607b30647f4",
    "independentSolution": "32/50=16/25=(4/5)²，因此長度比為 4/5。",
    "derivedAnswer": "4:5",
    "storedAnswer": "4:5",
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
      "scope": "只使用國中會考範圍內的「相似比與面積比」概念，未要求高中延伸。"
    },
    "difficultyReason": "先化簡非完全平方原數，再開根號。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：32/50=16/25=(4/5)²，因此長度比為 4/5。 四個選項逐一核對後，只有「4:5」符合；主要排除點是「把面積比直接當線性比。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s011-v005-semantic-review-r1",
    "questionId": "u18-s011-v005",
    "unitId": "u18",
    "skillId": "similar-ratio-area",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "bb3c5da0b189e21957280cf191d7f6cdb54a007da6fb6c3ef49d0fcd83cebc6c",
    "independentSolution": "B 每面積份為 27/9=3，A 49 份為 147。",
    "derivedAnswer": "147 m²",
    "storedAnswer": "147 m²",
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
      "units": "面積使用 m²。",
      "scope": "只使用國中會考範圍內的「相似比與面積比」概念，未要求高中延伸。"
    },
    "difficultyReason": "反向由較小面積與大:小相似比求較大面積。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：B 每面積份為 27/9=3，A 49 份為 147。 四個選項逐一核對後，只有「147 m²」符合；主要排除點是「未平方相似比或誤用立方。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s011-v006-semantic-review-r1",
    "questionId": "u18-s011-v006",
    "unitId": "u18",
    "skillId": "similar-ratio-area",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "696c841549b5d7f1f4d65cafa76ae92b351f19e7aedb2f89efc6b7452a262af2",
    "independentSolution": "若長和寬都乘 0.6，面積乘 0.6×0.6=0.36。",
    "derivedAnswer": "36%",
    "storedAnswer": "36%",
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
      "scope": "只使用國中會考範圍內的「相似比與面積比」概念，未要求高中延伸。"
    },
    "difficultyReason": "百分比線性縮放轉面積百分比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：若長和寬都乘 0.6，面積乘 0.6×0.6=0.36。 四個選項逐一核對後，只有「36%」符合；主要排除點是「把線性百分比直接當面積百分比。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s011-v007-semantic-review-r1",
    "questionId": "u18-s011-v007",
    "unitId": "u18",
    "skillId": "similar-ratio-area",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "4c8c014c8d7efdc25e7e8926577dffc49eeaa1dbaa4b20bd574d607f536cbbb9",
    "independentSolution": "A 周長 28 對應 2 份，每份 14，B 的 3 份為 42。",
    "derivedAnswer": "42 cm",
    "storedAnswer": "42 cm",
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
      "scope": "只使用國中會考範圍內的「相似比與面積比」概念，未要求高中延伸。"
    },
    "difficultyReason": "跨接面積比與周長比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：A 周長 28 對應 2 份，每份 14，B 的 3 份為 42。 四個選項逐一核對後，只有「42 cm」符合；主要排除點是「未先從面積比取平方根。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s011-v008-semantic-review-r1",
    "questionId": "u18-s011-v008",
    "unitId": "u18",
    "skillId": "similar-ratio-area",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "d699afcabaa090409f5e5dcd5ada6027b976a5fe360e4484e4f2d88bfc23b888",
    "independentSolution": "設兩面積為 81k、16k；65k=130，k=2，小面積 32。",
    "derivedAnswer": "32 cm²",
    "storedAnswer": "32 cm²",
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
      "units": "面積差與面積均為 cm²。",
      "scope": "只使用國中會考範圍內的「相似比與面積比」概念，未要求高中延伸。"
    },
    "difficultyReason": "由面積比與面積差反求實際面積。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設兩面積為 81k、16k；65k=130，k=2，小面積 32。 四個選項逐一核對後，只有「32 cm²」符合；主要排除點是「使用線性比 9:4 來處理面積差。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s011-v009-semantic-review-r1",
    "questionId": "u18-s011-v009",
    "unitId": "u18",
    "skillId": "similar-ratio-area",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "35870a3b76843e68935be2e907ba142afb4d902d6e4ecc1846c5eb2b8097131b",
    "independentSolution": "6 對應 3 份，每份 2，x 對應 2 份為 4。",
    "derivedAnswer": "4",
    "storedAnswer": "4",
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
      "scope": "只使用國中會考範圍內的「相似比與面積比」概念，未要求高中延伸。"
    },
    "difficultyReason": "面積比反推含未知數的相似比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：6 對應 3 份，每份 2，x 對應 2 份為 4。 四個選項逐一核對後，只有「4」符合；主要排除點是「把面積比直接用在線性未知數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s011-v010-semantic-review-r1",
    "questionId": "u18-s011-v010",
    "unitId": "u18",
    "skillId": "similar-ratio-area",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "75ae95672a61830010afd270b87ff3fe48da5975cccae5f6257697766d6ffad3",
    "independentSolution": "每 1 cm² 代表 4 m²，因為 200 cm=2 m；25 cm² 代表 25×4=100 m²。",
    "derivedAnswer": "100 m²",
    "storedAnswer": "100 m²",
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
      "boundary": "圖形按同一比例尺繪制，不含圖紙變形。",
      "units": "1 m²=10000 cm²；結果 100 m²。",
      "scope": "只使用國中會考範圍內的「相似比與面積比」概念，未要求高中延伸。"
    },
    "difficultyReason": "比例尺平方與平方單位換算。",
    "literacyNecessityReview": "施工平面圖的面積必須使用比例尺平方，並轉換為實際平方米。",
    "reviewerNote": "重新由已知條件獨立計算：每 1 cm² 代表 4 m²，因為 200 cm=2 m；25 cm² 代表 25×4=100 m²。 四個選項逐一核對後，只有「100 m²」符合；主要排除點是「比例尺只乘一次或平方單位換算錯誤。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s011-v011-semantic-review-r1",
    "questionId": "u18-s011-v011",
    "unitId": "u18",
    "skillId": "similar-ratio-area",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "822512aa9db5d0684724f8b1be749f5c12900710bc080e9d83f5c53a17978d72",
    "independentSolution": "小墨 180 對應 9 份，每份 20 g，大海報 25 份用 500 g。",
    "derivedAnswer": "500 g",
    "storedAnswer": "500 g",
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
      "boundary": "題目明確每單位面積用墨相同，排除厚度或底色差異。",
      "units": "墨量以 g，覆盖率相同，無額外損耗。",
      "scope": "只使用國中會考範圍內的「相似比與面積比」概念，未要求高中延伸。"
    },
    "difficultyReason": "把几何面積比轉成實際材料用量。",
    "literacyNecessityReview": "印刷墨量由覆盖面積决定，必須使用面積倍率而非周長倍率。",
    "reviewerNote": "重新由已知條件獨立計算：小墨 180 對應 9 份，每份 20 g，大海報 25 份用 500 g。 四個選項逐一核對後，只有「500 g」符合；主要排除點是「材料用量只按邊長倍率變化。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s011-v012-semantic-review-r1",
    "questionId": "u18-s011-v012",
    "unitId": "u18",
    "skillId": "similar-ratio-area",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "32a2bae80258bf65719c6497475a66d044c636c667320a563148e951643a8518",
    "independentSolution": "同一水深只影響水面轮廓，不是比較體積；面積按兩個水平方向縮放。",
    "derivedAnswer": "9/4 倍",
    "storedAnswer": "9/4 倍",
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
      "boundary": "只比較平面水面覆盖，不考虑池壁斜度與體積。",
      "units": "答案為無單位倍數。",
      "scope": "只使用國中會考範圍內的「相似比與面積比」概念，未要求高中延伸。"
    },
    "difficultyReason": "在立體情境中辨認實際所求仍為二維面積。",
    "literacyNecessityReview": "情境明確比較同一水深的水面面積而非蓄水體積，尺度維度判斷是核心。",
    "reviewerNote": "重新由已知條件獨立計算：同一水深只影響水面轮廓，不是比較體積；面積按兩個水平方向縮放。 四個選項逐一核對後，只有「9/4 倍」符合；主要排除點是「看到蓄水池就誤用體積立方倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];

