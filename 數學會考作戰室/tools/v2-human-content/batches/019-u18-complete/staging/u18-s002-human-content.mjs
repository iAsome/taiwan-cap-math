// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s002";

export const SKILL_ID = "continued-ratio-application";

export const LECTURE = {
  "lectureId": "u18-s002-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-ratio",
  "skillId": "continued-ratio-application",
  "lockedSkillOrder": 2,
  "lockedSkillTitle": "連比應用",
  "title": "連比應用：由份數求總量與部分和差",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能把 A:B:C=m:n:p 轉成 A=mk、B=nk、C=pk。",
    "能利用總和、差或某一部分求出共同倍數 k。",
    "能依連比正確分配總量並保留單位。",
    "能判斷題目資料是否足以唯一決定各量。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "continued-ratio",
        "title": "連比化簡",
        "requiredLevel": "能運用「連比化簡」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「連比化簡」，先複習其核心判斷，再把方法推進到「連比應用」。"
  },
  "glossary": [
    {
      "term": "共同倍數",
      "definition": "把每一項份數換成實際量時共用的倍率，常以 k 表示。"
    },
    {
      "term": "總份數",
      "definition": "連比各項相加，例如 3:4:5 的總份數為 12。"
    },
    {
      "term": "單位份量",
      "definition": "總量除以總份數後，每一份代表的實際量。"
    },
    {
      "term": "差份數",
      "definition": "兩項份數相減，與兩個實際量的差相對應。"
    }
  ],
  "notation": [
    {
      "symbol": "A:B:C=m:n:p",
      "meaning": "存在同一個 k>0，使 A=mk、B=nk、C=pk。"
    },
    {
      "symbol": "k",
      "meaning": "共同倍數或每一份的實際量。"
    },
    {
      "symbol": "m+n+p",
      "meaning": "總份數。"
    }
  ],
  "conceptNarrative": [
    "連比只告訴相對大小，還不能直接知道實際量。要得到實際量，至少還需要一個額外條件，例如總和、某一項、兩項差或其他方程。",
    "若 A:B:C=2:3:5，可設 A=2k、B=3k、C=5k。所有條件都應先翻成含 k 的等式，再求 k。",
    "用總量分配時，先求單位份量；用差求量時，先算差了幾份。這兩種方法本質上都是找 k。",
    "分配後必須檢查三個量的和、差與比是否同時符合題意，尤其金額、人數等常要求整數。"
  ],
  "formalDefinitions": [
    {
      "name": "連比分配",
      "statement": "把總量依 m:n:p 分成三部分，各部分為總量乘 m/(m+n+p)、n/(m+n+p)、p/(m+n+p)。"
    },
    {
      "name": "資料充分性",
      "statement": "連比提供兩個獨立比例關係，還需至少一個獨立數值條件才可決定三個實際量。"
    }
  ],
  "formulas": [
    {
      "formula": "A=mk，B=nk，C=pk",
      "conditions": [
        "m、n、p 為同一最簡或等值連比的份數",
        "k>0"
      ],
      "meaning": "把相對份數轉成實際量。"
    },
    {
      "formula": "k=總量/(m+n+p)",
      "conditions": [
        "總量等於 A+B+C"
      ],
      "meaning": "求每一份的實際量。"
    },
    {
      "formula": "k=(A-B)/(m-n)",
      "conditions": [
        "m≠n，且差的順序一致"
      ],
      "meaning": "由兩量差求共同倍數。"
    }
  ],
  "nonApplicableCases": [
    "只知道 A:B:C=2:3:4，沒有任何實際數值時，不能唯一求出 A、B、C。",
    "總量分配時不能把最後一項 4 當作總份數。",
    "由 A-B 求 k 時，份數也要用 m-n，不能用 m+n。",
    "人數分配若算出非整數，需檢查題目資料是否合理，而不是任意四捨五入。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "把連比化成最簡份數並確認順序。",
      "check": "A、B、C 是否對到正確份數？"
    },
    {
      "step": 2,
      "instruction": "設 A=mk、B=nk、C=pk。",
      "check": "是否所有量使用同一個 k？"
    },
    {
      "step": 3,
      "instruction": "把總和、差或已知部分翻成方程。",
      "check": "差的先後順序是否一致？"
    },
    {
      "step": 4,
      "instruction": "求 k，再求各量。",
      "check": "k 是否具有合理單位與正值？"
    },
    {
      "step": 5,
      "instruction": "回代檢查總和、差與連比。",
      "check": "三種條件是否全部符合？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "紅、藍、綠球數比為 2:3:5，共 80 顆，各有多少？",
      "solutionSteps": [
        "總份數 2+3+5=10。",
        "每份 80÷10=8 顆。",
        "各為 16、24、40 顆。"
      ],
      "answer": "16 顆、24 顆、40 顆"
    },
    {
      "exampleId": "L2",
      "prompt": "甲乙丙獎金比 4:6:9，丙比甲多 2500 元，求乙。",
      "solutionSteps": [
        "丙與甲相差 9-4=5 份。",
        "每份 2500÷5=500 元。",
        "乙為 6×500=3000 元。"
      ],
      "answer": "3000 元"
    },
    {
      "exampleId": "L3",
      "prompt": "三段繩長比 3:5:7，第二段長 45 公分，求總長。",
      "solutionSteps": [
        "5 份是 45 公分，所以每份 9 公分。",
        "總份數 15。",
        "總長 15×9=135 公分。"
      ],
      "answer": "135 公分"
    },
    {
      "exampleId": "L4",
      "prompt": "A:B:C=1:2:4，且 A+B=24，求 C。",
      "solutionSteps": [
        "A+B 代表 3 份。",
        "每份 24÷3=8。",
        "C=4×8=32。"
      ],
      "answer": "32"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把比例項直接當實際量。",
      "why": "忘記比例只表相對倍數。",
      "correction": "先設共同倍數 k。"
    },
    {
      "mistake": "總份數漏加一項。",
      "why": "只看兩個相鄰比。",
      "correction": "把全部份數列在同一行相加。"
    },
    {
      "mistake": "差 5 份卻除以兩項總和。",
      "why": "混淆總和條件與差條件。",
      "correction": "實際差對應份數差。"
    },
    {
      "mistake": "分配後任意取整數。",
      "why": "忽略離散量不能四捨五入破壞總數。",
      "correction": "回查資料，必要時判定題目無整數解。"
    },
    {
      "mistake": "A:B:C 的對應順序抄錯。",
      "why": "只記住數字。",
      "correction": "在每個份數上方標出對象。"
    }
  ],
  "selfCheck": [
    "我是否設了同一個 k？",
    "額外條件是總和、差還是某一項？",
    "份數運算與實際量運算同型嗎？",
    "答案總和與題目一致嗎？",
    "答案連比可化回原比嗎？"
  ],
  "summary": [
    "連比配合一個獨立數值條件才能求實際量。",
    "設各量為份數乘同一個 k。",
    "總量除總份數，差量除差份數。",
    "最後要同時檢查比例與題目條件。"
  ],
  "connections": {
    "previous": "先能化簡連比並辨認各項順序。",
    "next": [
      "比例線段會把共同倍數轉成線段長度。",
      "連比應用題會加入較複雜的文字條件。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s002-v001",
      "u18-s002-v002",
      "u18-s002-v003",
      "u18-s002-v004",
      "u18-s002-v005",
      "u18-s002-v006",
      "u18-s002-v007",
      "u18-s002-v008",
      "u18-s002-v009",
      "u18-s002-v010",
      "u18-s002-v011",
      "u18-s002-v012"
    ],
    "constructedResponseIds": [
      "u18-s002-cr001",
      "u18-s002-cr002"
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
    "reviewNote": "檢查總和、差值、單一已知量三種資料型態是否各有明確示範；所有例題均回查比例，並提醒離散量不可任意取整。"
  },
  "contentSha256": "8cecc1d3bfa488547cfde66989239e7894d45e5680aa1e74ca1abffac0558499"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s002-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "甲、乙、丙三數之比為 2:3:5，且三數和為 80，則乙為何？",
    "text": "甲、乙、丙三數之比為 2:3:5，且三數和為 80，則乙為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "16",
      "24",
      "30",
      "40"
    ],
    "answerIndex": 1,
    "independentSolution": "設甲=2k、乙=3k、丙=5k，則 10k=80，k=8，乙=24。",
    "explanation": "總份數 2+3+5=10，每份 80÷10=8，乙有 3 份，所以乙=24。",
    "steps": [
      "求總份數 10。",
      "求每份 8。",
      "乙為 3×8。"
    ],
    "optionAnalysis": [
      {
        "choice": "16",
        "truth": false,
        "reason": "這是甲的 2 份，不是乙的 3 份。"
      },
      {
        "choice": "24",
        "truth": true,
        "reason": "依獨立推導可得到 24，符合所有已知條件。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "把 80 除以 8 而非總份數 10。"
      },
      {
        "choice": "40",
        "truth": false,
        "reason": "這是丙的 5 份。"
      }
    ],
    "misconceptionTarget": "把某一比項直接當總份數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "單一總量分配，是連比應用的基本型。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "20b46b25101dfab65869610f786dfe30b952a69f8d770c01b7d6bf764e2cef58"
  },
  {
    "questionId": "u18-s002-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "紅、黃、藍球數比為 4:5:7，總共 96 顆，紅球有幾顆？",
    "text": "紅、黃、藍球數比為 4:5:7，總共 96 顆，紅球有幾顆？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "20 顆",
      "30 顆",
      "24 顆",
      "42 顆"
    ],
    "answerIndex": 2,
    "independentSolution": "設三色球為 4k、5k、7k；16k=96 得 k=6，因此紅球 24 顆。",
    "explanation": "總份數 16，每份 96÷16=6 顆，紅球為 4×6=24 顆。",
    "steps": [
      "加總份數 4+5+7。",
      "計算單位份量 6 顆。",
      "乘紅球的 4 份。"
    ],
    "optionAnalysis": [
      {
        "choice": "20 顆",
        "truth": false,
        "reason": "把總數除以黃球份數。"
      },
      {
        "choice": "30 顆",
        "truth": false,
        "reason": "這是黃球數。"
      },
      {
        "choice": "24 顆",
        "truth": true,
        "reason": "依獨立推導可得到 24 顆，符合所有已知條件。"
      },
      {
        "choice": "42 顆",
        "truth": false,
        "reason": "這是藍球數。"
      }
    ],
    "misconceptionTarget": "未先求每一份，直接把比項當顆數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "球數為整數顆，結果 24 無需四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需要一次總份數與乘法，屬基本分配。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "48e12e45f98df15a8decf97a7a8a651f74e8eee21e3bf5ac3ff7338de84e7214"
  },
  {
    "questionId": "u18-s002-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "A:B:C=3:4:6，且 B=28，則 C 為何？",
    "text": "A:B:C=3:4:6，且 B=28，則 C 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "21",
      "36",
      "56",
      "42"
    ],
    "answerIndex": 3,
    "independentSolution": "B=4k=28，所以 k=7；C=6×7=42。",
    "explanation": "B 的 4 份等於 28，所以每份 7；C 有 6 份，為 42。",
    "steps": [
      "由 4k=28 求 k=7。",
      "計算 C=6k。",
      "回查 28:42=4:6。"
    ],
    "optionAnalysis": [
      {
        "choice": "21",
        "truth": false,
        "reason": "把 C 與 A 的份數比 6:3 誤套在 B 上。"
      },
      {
        "choice": "36",
        "truth": false,
        "reason": "把每份誤算成 6。"
      },
      {
        "choice": "56",
        "truth": false,
        "reason": "把 28 當 4 份後又乘 8。"
      },
      {
        "choice": "42",
        "truth": true,
        "reason": "依獨立推導可得到 42，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "已知某一部分時仍錯用總份數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "由單一已知部分求共同倍數。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "34882e2d21b81f2fb3f0ca9bef21bf2612e68579f413c7a3a154d247e70fe741"
  },
  {
    "questionId": "u18-s002-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "三段路程比為 5:7:9，第三段比第一段長 32 公里，第二段長多少公里？",
    "text": "三段路程比為 5:7:9，第三段比第一段長 32 公里，第二段長多少公里？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "56 公里",
      "28 公里",
      "40 公里",
      "72 公里"
    ],
    "answerIndex": 0,
    "independentSolution": "設三段為 5k、7k、9k；(9-5)k=32，k=8，第二段 56。",
    "explanation": "第三段與第一段差 9-5=4 份，4 份為 32 公里，每份 8 公里，第二段 7×8=56 公里。",
    "steps": [
      "求差份數 4。",
      "32÷4=8 公里/份。",
      "第二段 7×8。"
    ],
    "optionAnalysis": [
      {
        "choice": "56 公里",
        "truth": true,
        "reason": "依獨立推導可得到 56 公里，符合所有已知條件。"
      },
      {
        "choice": "28 公里",
        "truth": false,
        "reason": "只取 7 份的 4 公里，單位份量算錯。"
      },
      {
        "choice": "40 公里",
        "truth": false,
        "reason": "這是第一段長。"
      },
      {
        "choice": "72 公里",
        "truth": false,
        "reason": "這是第三段長。"
      }
    ],
    "misconceptionTarget": "差量條件卻用總份數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "所有路程以公里表示；答案為 56 公里。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "要由兩項差求單位份量，再求第三項。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "97d725194e363fb830576ca0d391c1a79cfca714b854f9fd42129d6dcd781001"
  },
  {
    "questionId": "u18-s002-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "甲、乙、丙獎金比為 2:5:8，甲與乙合計 2100 元，丙可得多少元？",
    "text": "甲、乙、丙獎金比為 2:5:8，甲與乙合計 2100 元，丙可得多少元？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "600 元",
      "1500 元",
      "2400 元",
      "4800 元"
    ],
    "answerIndex": 2,
    "independentSolution": "2k+5k=2100，故 7k=2100、k=300，8k=2400。",
    "explanation": "甲乙合計 7 份為 2100 元，每份 300 元；丙為 8 份，得 2400 元。",
    "steps": [
      "甲與乙份數相加為 7。",
      "求每份 300 元。",
      "丙獎金 8×300。"
    ],
    "optionAnalysis": [
      {
        "choice": "600 元",
        "truth": false,
        "reason": "這是甲的金額。"
      },
      {
        "choice": "1500 元",
        "truth": false,
        "reason": "這是乙的金額。"
      },
      {
        "choice": "2400 元",
        "truth": true,
        "reason": "依獨立推導可得到 2400 元，符合所有已知條件。"
      },
      {
        "choice": "4800 元",
        "truth": false,
        "reason": "把 2100 誤當 3.5 份後重複放大。"
      }
    ],
    "misconceptionTarget": "把合計條件錯配為總三人份數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "金額皆為元，結果為整數元。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "已知部分和而非總和，需要辨認所包含的份數。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "73de87da6d57bac561010285e2fe0e09e9ce666eb89be06b4105f95fea131f18"
  },
  {
    "questionId": "u18-s002-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "某三角形三內角比為 2:3:4，最大角為何？",
    "text": "某三角形三內角比為 2:3:4，最大角為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "40°",
      "60°",
      "90°",
      "80°"
    ],
    "answerIndex": 3,
    "independentSolution": "設三角為 2k、3k、4k；9k=180 得 k=20，最大角 80°。",
    "explanation": "三角形內角和 180°，總份數 9，每份 20°，最大角 4×20°=80°。",
    "steps": [
      "使用內角和 180°。",
      "180÷9=20°。",
      "最大角為 4 份。"
    ],
    "optionAnalysis": [
      {
        "choice": "40°",
        "truth": false,
        "reason": "這是最小角。"
      },
      {
        "choice": "60°",
        "truth": false,
        "reason": "這是中間角。"
      },
      {
        "choice": "90°",
        "truth": false,
        "reason": "把最大角誤認為直角。"
      },
      {
        "choice": "80°",
        "truth": true,
        "reason": "依獨立推導可得到 80°，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "忘記三角形內角和，或將最大份數直接當角度。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "角度總和為 180°；答案使用度數。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "把連比分配嵌入三角形角和知識。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "141b8b4d67a375e1ca95b9b0f0bad5700a848a6a236edbb9928216efb30cb6b2"
  },
  {
    "questionId": "u18-s002-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "A:B:C=4:7:11，若 C-A=35，則 A+B 為何？",
    "text": "A:B:C=4:7:11，若 C-A=35，則 A+B 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "55",
      "35",
      "77",
      "105"
    ],
    "answerIndex": 0,
    "independentSolution": "設 A=4k、B=7k、C=11k；7k=35，k=5，故 A+B=11k=55。",
    "explanation": "C-A 對應 11-4=7 份，所以每份 5；A+B=(4+7)×5=55。",
    "steps": [
      "差份數為 7。",
      "求 k=5。",
      "A+B=11k。"
    ],
    "optionAnalysis": [
      {
        "choice": "55",
        "truth": true,
        "reason": "依獨立推導可得到 55，符合所有已知條件。"
      },
      {
        "choice": "35",
        "truth": false,
        "reason": "把已知差直接當所求和。"
      },
      {
        "choice": "77",
        "truth": false,
        "reason": "把每份誤算成 7。"
      },
      {
        "choice": "105",
        "truth": false,
        "reason": "把 35 當作 4 份。"
      }
    ],
    "misconceptionTarget": "差的份數與部分和的份數混淆。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 100,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需先由差求 k，再計算另一個組合量。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d184aba4eccefc611253a43d6878ebc5d974d277d362db82deee820b4f514abe"
  },
  {
    "questionId": "u18-s002-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "三個正整數之比為 3:5:8，且最小數與最大數的和為 66，則中間數為何？",
    "text": "三個正整數之比為 3:5:8，且最小數與最大數的和為 66，則中間數為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "18",
      "30",
      "40",
      "48"
    ],
    "answerIndex": 1,
    "independentSolution": "設三數 3k、5k、8k；11k=66，k=6，中間數 30。",
    "explanation": "最小與最大共 3+8=11 份，11 份為 66，每份 6，中間數 5×6=30。",
    "steps": [
      "辨認最小數 3 份、最大數 8 份。",
      "66÷11=6。",
      "中間數為 5 份。"
    ],
    "optionAnalysis": [
      {
        "choice": "18",
        "truth": false,
        "reason": "這是最小數。"
      },
      {
        "choice": "30",
        "truth": true,
        "reason": "依獨立推導可得到 30，符合所有已知條件。"
      },
      {
        "choice": "40",
        "truth": false,
        "reason": "把每份誤算成 8。"
      },
      {
        "choice": "48",
        "truth": false,
        "reason": "這是最大數。"
      }
    ],
    "misconceptionTarget": "把『最小與最大之和』誤當三數總和。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題目明示三個正整數並依 3:5:8 排序，因此最小與最大對應唯一。",
    "difficultyReason": "需要從敘述辨認非相鄰兩項的合計。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "81e59b42ab3eb269e5e6c8c9248799714177701d74ec9c820bf1a7d180dda92c"
  },
  {
    "questionId": "u18-s002-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "甲、乙、丙三人的年齡比為 4:5:7。6 年後三人年齡總和為 114 歲，則現在乙幾歲？",
    "text": "甲、乙、丙三人的年齡比為 4:5:7。6 年後三人年齡總和為 114 歲，則現在乙幾歲？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "24 歲",
      "35 歲",
      "42 歲",
      "30 歲"
    ],
    "answerIndex": 3,
    "independentSolution": "設現在年齡 4k、5k、7k；六年後總和 16k+18=114，k=6，乙=30。",
    "explanation": "6 年後三人總和比現在多 18 歲，所以現在總和 96 歲。總份數 16，每份 6 歲，乙 30 歲。",
    "steps": [
      "扣除三人各增加 6 歲，共 18 歲。",
      "現在總和 114-18=96。",
      "96÷16=6，乙=5×6。"
    ],
    "optionAnalysis": [
      {
        "choice": "24 歲",
        "truth": false,
        "reason": "這是甲現在年齡。"
      },
      {
        "choice": "35 歲",
        "truth": false,
        "reason": "把 6 年只加給乙後反推。"
      },
      {
        "choice": "42 歲",
        "truth": false,
        "reason": "這是丙現在年齡。"
      },
      {
        "choice": "30 歲",
        "truth": true,
        "reason": "依獨立推導可得到 30 歲，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "只從總和減 6，而不是三人各減 6。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 120,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "先還原現在總量，再做比例分配，含時間變化。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e2ad7d28bbc2e5d8533ffb26c6e8caf3f556b686f3c6e3b49bc79edc0a557288"
  },
  {
    "questionId": "u18-s002-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "校慶將 4200 元依甲、乙、丙三組志工人數比 5:4:3 分配餐費。若每組餐費需為整數元，乙組應分得多少？",
    "text": "校慶將 4200 元依甲、乙、丙三組志工人數比 5:4:3 分配餐費。若每組餐費需為整數元，乙組應分得多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "1400 元",
      "1050 元",
      "1750 元",
      "1260 元"
    ],
    "answerIndex": 0,
    "independentSolution": "設三組餐費 5k、4k、3k；12k=4200，k=350，乙組 1400。",
    "explanation": "總份數 12，每份 4200÷12=350 元，乙組 4×350=1400 元。",
    "steps": [
      "確認分配順序甲:乙:丙。",
      "求每份 350 元。",
      "乙組取 4 份。"
    ],
    "optionAnalysis": [
      {
        "choice": "1400 元",
        "truth": true,
        "reason": "依獨立推導可得到 1400 元，符合所有已知條件。"
      },
      {
        "choice": "1050 元",
        "truth": false,
        "reason": "這是丙組 3 份。"
      },
      {
        "choice": "1750 元",
        "truth": false,
        "reason": "這是甲組 5 份。"
      },
      {
        "choice": "1260 元",
        "truth": false,
        "reason": "把總份數誤作 10。"
      }
    ],
    "misconceptionTarget": "把志工比的項目順序與組別對錯。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "總額為整數元，4200 可被 12 整除，不需處理零錢。",
    "ambiguityAndBoundaryAudit": "題目指依人數比直接分配全部 4200 元，沒有保留款或上限條件。",
    "difficultyReason": "將總額、公平分配與整數檢查結合。",
    "literacyContextNecessity": "餐費必須依志工人數比例分配，組別順序與整數元條件是決策核心。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "91c9fb62494743b701e9432ae84b8aa4732681f332bff7a517d9d29b2c1990c3"
  },
  {
    "questionId": "u18-s002-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一份合金中銅、鋅、鎳質量比為 7:2:1。現有合金 3.5 公斤，其中鋅有多少公克？",
    "text": "一份合金中銅、鋅、鎳質量比為 7:2:1。現有合金 3.5 公斤，其中鋅有多少公克？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "350 公克",
      "700 公克",
      "2450 公克",
      "0.7 公克"
    ],
    "answerIndex": 1,
    "independentSolution": "每份為 3.5÷10=0.35 公斤，鋅 2 份即 0.7 公斤，等於 700 公克。",
    "explanation": "總份數 10，鋅占 2/10；3.5 公斤×2/10=0.7 公斤=700 公克。",
    "steps": [
      "求鋅占比 2/10。",
      "算 3.5×0.2=0.7 公斤。",
      "換成 700 公克。"
    ],
    "optionAnalysis": [
      {
        "choice": "350 公克",
        "truth": false,
        "reason": "這是鎳的 1 份。"
      },
      {
        "choice": "700 公克",
        "truth": true,
        "reason": "依獨立推導可得到 700 公克，符合所有已知條件。"
      },
      {
        "choice": "2450 公克",
        "truth": false,
        "reason": "這是銅的 7 份。"
      },
      {
        "choice": "0.7 公克",
        "truth": false,
        "reason": "把公斤轉公克漏乘 1000。"
      }
    ],
    "misconceptionTarget": "份數正確但單位換算錯誤。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "1 公斤=1000 公克；答案依題意用公克。",
    "ambiguityAndBoundaryAudit": "假設合金總質量等於三種金屬質量總和，沒有損耗。",
    "difficultyReason": "含比例分配與公斤、公克換算。",
    "literacyContextNecessity": "合金配方以質量比控制成分，且工業規格常在公斤與公克間換算。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3464b03fce10b4b2741a594e99ed587167087839fbe7102eada32b1c1272b20d"
  },
  {
    "questionId": "u18-s002-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "某社區三區用水量比為 6:5:4。節水後三區都各減少 12 噸，新的總用水量為 189 噸。節水前第一區用水量為多少？",
    "text": "某社區三區用水量比為 6:5:4。節水後三區都各減少 12 噸，新的總用水量為 189 噸。節水前第一區用水量為多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "72 噸",
      "84 噸",
      "90 噸",
      "108 噸"
    ],
    "answerIndex": 2,
    "independentSolution": "設節水前為 6k、5k、4k；節水後總量 15k-36=189，故 15k=225、k=15，第一區 90。",
    "explanation": "三區共減少 36 噸，所以原總量 225 噸。總份數 15，每份 15 噸，第一區 6×15=90 噸。",
    "steps": [
      "把新總量加回 3×12。",
      "求原總量 225 噸。",
      "依 6:5:4 分配。"
    ],
    "optionAnalysis": [
      {
        "choice": "72 噸",
        "truth": false,
        "reason": "這是節水後第一區若直接按新總量分配的錯誤結果。"
      },
      {
        "choice": "84 噸",
        "truth": false,
        "reason": "把總減量只算 12 噸。"
      },
      {
        "choice": "90 噸",
        "truth": true,
        "reason": "依獨立推導可得到 90 噸，符合所有已知條件。"
      },
      {
        "choice": "108 噸",
        "truth": false,
        "reason": "把每份誤算成 18 噸。"
      }
    ],
    "misconceptionTarget": "把相同減量後的新用量仍誤認為維持原比例。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "所有用水量以噸表示；答案為 90 噸。",
    "ambiguityAndBoundaryAudit": "『都各減少 12 噸』表示三區各自減少，不是總共減少 12 噸。",
    "difficultyReason": "固定減量破壞比例，需建立原量方程再求解。",
    "literacyContextNecessity": "各區固定減量會改變原比例，必須先還原原總量；社區節水情境使此辨識不可省略。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "559484fc769b818ceee6d20c95a864ab1d828360a03d73e08d74bcf70adff998"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s002-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "itemType": "constructed-response",
    "prompt": "某班男生、女生、全班人數的連比可寫成 4：5：9。已知全班 36 人，求男生與女生人數，並說明為何第三項不是另一個獨立群體。",
    "requiredWork": "需解釋全班是前兩群體的總和，再依份數分配。",
    "standardSolution": "4+5=9，與第三項全班份數相符。9 份對應 36 人，每份 4 人，所以男生 16 人、女生 20 人。",
    "alternativeMethod": "可直接用男生=36×4/9、女生=36×5/9。",
    "reasoningSteps": [
      "辨認全班=男生+女生。",
      "檢查 4+5=9。",
      "求每份 36÷9=4。",
      "求兩群人數並驗算相加為36。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "答案 16 人與 20 人正確，且解釋第三項是總量而非獨立類別。"
      },
      {
        "score": 2,
        "criteria": "人數正確但缺少第三項意義說明；或方法正確有一處算術錯誤。"
      },
      {
        "score": 1,
        "criteria": "只把 36 依 4：5 分配但未說明 9 的角色，或只列式未完成。"
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
    "unitAndNotationRules": "人數必須是非負整數並標示「人」。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "已檢查 16+20=36，且 16：20：36 化簡為 4：5：9。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "8e254b5946b36e98bc8392c6b5278fa47dfea07afa4b017f8e5f3903585f349e"
  },
  {
    "questionId": "u18-s002-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "continued-ratio-application",
    "lockedSkillOrder": 2,
    "itemType": "constructed-response",
    "prompt": "三種果汁 A、B、C 已依 2：3：5 配好，其中 A 為 240 mL。有人又額外倒入 C 180 mL，且現在只允許再加入 B 或 C。能否恢復原比例？請以計算說明。",
    "requiredWork": "先由 A 求原配方中的 B、C 與目前 C，再判斷只增加 B、C 是否可能恢復比例。",
    "standardSolution": "A 240 mL 對應 2 份，每份 120 mL。目標 B=360 mL、C=600 mL。若原先依比例已有 B=360、C=600，再額外加 C 180，僅加 B 或 C 無法在不增加 A 的情況下恢復 2：3：5；因 A 固定 240 時 C 應為600，現已780。故題目條件下無解，必須增加 A 與 B 或移除 C。",
    "alternativeMethod": "用不等式說明：若 A 保持240，任何新增 B、C 都使 C≥780，而原比例要求 C=600，因此不可能。",
    "reasoningSteps": [
      "由 A 求每份 120 mL。",
      "求原比例目標 B=360、C=600。",
      "辨認額外 C 使 C=780。",
      "判斷只允許加入 B、C 無法降低 C/A 比。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確指出無解，並以 A 固定時 C 應為600但現為780說明。"
      },
      {
        "score": 2,
        "criteria": "察覺不能只加 C，但未完整說明為何加 B 也無法修復；或數值有小錯但結論與理由合理。"
      },
      {
        "score": 1,
        "criteria": "只計算目標 B、C，未處理額外加入的 180 mL。"
      },
      {
        "score": 0,
        "criteria": "沒有呈現可辨識的相關比例或相似推理，或答案與過程均無法支持題目要求。"
      }
    ],
    "partialCreditRules": [
      "正確算出每份 120 與目標 360、600，可得 2 分，即使未明確寫出無解。",
      "只指出『不能減少 C』但沒有量化，可得 1 分。"
    ],
    "followThroughPolicy": "若早期僅有單一算術錯誤，後續使用該錯誤值的推理一致且方法正確，保留後續方法分；不得因錯誤值巧合得到正確答案而補足滿分。",
    "unitAndNotationRules": "所有用量以 mL 表示；「無解」必須附數值理由。",
    "answerOnlyPolicy": "只寫「無解」沒有理由，給 1 分；只寫一組新增量且不驗證比例，不給滿分。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "以固定 A 的比例條件獨立檢查，C 必須等於600但現有780，確認只增加 B、C 不可能恢復。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "42b30ca770e4c21be5276f4dda35cc5d8b10ecd0d234ee93c7fadcec3bce31a2"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s002-v001-semantic-review-r1",
    "questionId": "u18-s002-v001",
    "unitId": "u18",
    "skillId": "continued-ratio-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "20b46b25101dfab65869610f786dfe30b952a69f8d770c01b7d6bf764e2cef58",
    "independentSolution": "設甲=2k、乙=3k、丙=5k，則 10k=80，k=8，乙=24。",
    "derivedAnswer": "24",
    "storedAnswer": "24",
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
      "scope": "只使用國中會考範圍內的「連比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "單一總量分配，是連比應用的基本型。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設甲=2k、乙=3k、丙=5k，則 10k=80，k=8，乙=24。 四個選項逐一核對後，只有「24」符合；主要排除點是「把某一比項直接當總份數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s002-v002-semantic-review-r1",
    "questionId": "u18-s002-v002",
    "unitId": "u18",
    "skillId": "continued-ratio-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "48e12e45f98df15a8decf97a7a8a651f74e8eee21e3bf5ac3ff7338de84e7214",
    "independentSolution": "設三色球為 4k、5k、7k；16k=96 得 k=6，因此紅球 24 顆。",
    "derivedAnswer": "24 顆",
    "storedAnswer": "24 顆",
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
      "units": "球數為整數顆，結果 24 無需四捨五入。",
      "scope": "只使用國中會考範圍內的「連比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "需要一次總份數與乘法，屬基本分配。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設三色球為 4k、5k、7k；16k=96 得 k=6，因此紅球 24 顆。 四個選項逐一核對後，只有「24 顆」符合；主要排除點是「未先求每一份，直接把比項當顆數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s002-v003-semantic-review-r1",
    "questionId": "u18-s002-v003",
    "unitId": "u18",
    "skillId": "continued-ratio-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "34882e2d21b81f2fb3f0ca9bef21bf2612e68579f413c7a3a154d247e70fe741",
    "independentSolution": "B=4k=28，所以 k=7；C=6×7=42。",
    "derivedAnswer": "42",
    "storedAnswer": "42",
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
      "scope": "只使用國中會考範圍內的「連比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "由單一已知部分求共同倍數。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：B=4k=28，所以 k=7；C=6×7=42。 四個選項逐一核對後，只有「42」符合；主要排除點是「已知某一部分時仍錯用總份數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s002-v004-semantic-review-r1",
    "questionId": "u18-s002-v004",
    "unitId": "u18",
    "skillId": "continued-ratio-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "97d725194e363fb830576ca0d391c1a79cfca714b854f9fd42129d6dcd781001",
    "independentSolution": "設三段為 5k、7k、9k；(9-5)k=32，k=8，第二段 56。",
    "derivedAnswer": "56 公里",
    "storedAnswer": "56 公里",
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
      "units": "所有路程以公里表示；答案為 56 公里。",
      "scope": "只使用國中會考範圍內的「連比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "要由兩項差求單位份量，再求第三項。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設三段為 5k、7k、9k；(9-5)k=32，k=8，第二段 56。 四個選項逐一核對後，只有「56 公里」符合；主要排除點是「差量條件卻用總份數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s002-v005-semantic-review-r1",
    "questionId": "u18-s002-v005",
    "unitId": "u18",
    "skillId": "continued-ratio-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "73de87da6d57bac561010285e2fe0e09e9ce666eb89be06b4105f95fea131f18",
    "independentSolution": "2k+5k=2100，故 7k=2100、k=300，8k=2400。",
    "derivedAnswer": "2400 元",
    "storedAnswer": "2400 元",
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
      "units": "金額皆為元，結果為整數元。",
      "scope": "只使用國中會考範圍內的「連比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "已知部分和而非總和，需要辨認所包含的份數。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：2k+5k=2100，故 7k=2100、k=300，8k=2400。 四個選項逐一核對後，只有「2400 元」符合；主要排除點是「把合計條件錯配為總三人份數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s002-v006-semantic-review-r1",
    "questionId": "u18-s002-v006",
    "unitId": "u18",
    "skillId": "continued-ratio-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "141b8b4d67a375e1ca95b9b0f0bad5700a848a6a236edbb9928216efb30cb6b2",
    "independentSolution": "設三角為 2k、3k、4k；9k=180 得 k=20，最大角 80°。",
    "derivedAnswer": "80°",
    "storedAnswer": "80°",
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
      "units": "角度總和為 180°；答案使用度數。",
      "scope": "只使用國中會考範圍內的「連比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "把連比分配嵌入三角形角和知識。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設三角為 2k、3k、4k；9k=180 得 k=20，最大角 80°。 四個選項逐一核對後，只有「80°」符合；主要排除點是「忘記三角形內角和，或將最大份數直接當角度。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s002-v007-semantic-review-r1",
    "questionId": "u18-s002-v007",
    "unitId": "u18",
    "skillId": "continued-ratio-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "d184aba4eccefc611253a43d6878ebc5d974d277d362db82deee820b4f514abe",
    "independentSolution": "設 A=4k、B=7k、C=11k；7k=35，k=5，故 A+B=11k=55。",
    "derivedAnswer": "55",
    "storedAnswer": "55",
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
      "scope": "只使用國中會考範圍內的「連比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "需先由差求 k，再計算另一個組合量。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設 A=4k、B=7k、C=11k；7k=35，k=5，故 A+B=11k=55。 四個選項逐一核對後，只有「55」符合；主要排除點是「差的份數與部分和的份數混淆。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s002-v008-semantic-review-r1",
    "questionId": "u18-s002-v008",
    "unitId": "u18",
    "skillId": "continued-ratio-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "81e59b42ab3eb269e5e6c8c9248799714177701d74ec9c820bf1a7d180dda92c",
    "independentSolution": "設三數 3k、5k、8k；11k=66，k=6，中間數 30。",
    "derivedAnswer": "30",
    "storedAnswer": "30",
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
      "boundary": "題目明示三個正整數並依 3:5:8 排序，因此最小與最大對應唯一。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「連比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "需要從敘述辨認非相鄰兩項的合計。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設三數 3k、5k、8k；11k=66，k=6，中間數 30。 四個選項逐一核對後，只有「30」符合；主要排除點是「把『最小與最大之和』誤當三數總和。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s002-v009-semantic-review-r1",
    "questionId": "u18-s002-v009",
    "unitId": "u18",
    "skillId": "continued-ratio-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "e2ad7d28bbc2e5d8533ffb26c6e8caf3f556b686f3c6e3b49bc79edc0a557288",
    "independentSolution": "設現在年齡 4k、5k、7k；六年後總和 16k+18=114，k=6，乙=30。",
    "derivedAnswer": "30 歲",
    "storedAnswer": "30 歲",
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
      "scope": "只使用國中會考範圍內的「連比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "先還原現在總量，再做比例分配，含時間變化。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：設現在年齡 4k、5k、7k；六年後總和 16k+18=114，k=6，乙=30。 四個選項逐一核對後，只有「30 歲」符合；主要排除點是「只從總和減 6，而不是三人各減 6。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s002-v010-semantic-review-r1",
    "questionId": "u18-s002-v010",
    "unitId": "u18",
    "skillId": "continued-ratio-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "91c9fb62494743b701e9432ae84b8aa4732681f332bff7a517d9d29b2c1990c3",
    "independentSolution": "設三組餐費 5k、4k、3k；12k=4200，k=350，乙組 1400。",
    "derivedAnswer": "1400 元",
    "storedAnswer": "1400 元",
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
      "boundary": "題目指依人數比直接分配全部 4200 元，沒有保留款或上限條件。",
      "units": "總額為整數元，4200 可被 12 整除，不需處理零錢。",
      "scope": "只使用國中會考範圍內的「連比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "將總額、公平分配與整數檢查結合。",
    "literacyNecessityReview": "餐費必須依志工人數比例分配，組別順序與整數元條件是決策核心。",
    "reviewerNote": "重新由已知條件獨立計算：設三組餐費 5k、4k、3k；12k=4200，k=350，乙組 1400。 四個選項逐一核對後，只有「1400 元」符合；主要排除點是「把志工比的項目順序與組別對錯。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s002-v011-semantic-review-r1",
    "questionId": "u18-s002-v011",
    "unitId": "u18",
    "skillId": "continued-ratio-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "3464b03fce10b4b2741a594e99ed587167087839fbe7102eada32b1c1272b20d",
    "independentSolution": "每份為 3.5÷10=0.35 公斤，鋅 2 份即 0.7 公斤，等於 700 公克。",
    "derivedAnswer": "700 公克",
    "storedAnswer": "700 公克",
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
      "boundary": "假設合金總質量等於三種金屬質量總和，沒有損耗。",
      "units": "1 公斤=1000 公克；答案依題意用公克。",
      "scope": "只使用國中會考範圍內的「連比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "含比例分配與公斤、公克換算。",
    "literacyNecessityReview": "合金配方以質量比控制成分，且工業規格常在公斤與公克間換算。",
    "reviewerNote": "重新由已知條件獨立計算：每份為 3.5÷10=0.35 公斤，鋅 2 份即 0.7 公斤，等於 700 公克。 四個選項逐一核對後，只有「700 公克」符合；主要排除點是「份數正確但單位換算錯誤。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s002-v012-semantic-review-r1",
    "questionId": "u18-s002-v012",
    "unitId": "u18",
    "skillId": "continued-ratio-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "559484fc769b818ceee6d20c95a864ab1d828360a03d73e08d74bcf70adff998",
    "independentSolution": "設節水前為 6k、5k、4k；節水後總量 15k-36=189，故 15k=225、k=15，第一區 90。",
    "derivedAnswer": "90 噸",
    "storedAnswer": "90 噸",
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
      "boundary": "『都各減少 12 噸』表示三區各自減少，不是總共減少 12 噸。",
      "units": "所有用水量以噸表示；答案為 90 噸。",
      "scope": "只使用國中會考範圍內的「連比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "固定減量破壞比例，需建立原量方程再求解。",
    "literacyNecessityReview": "各區固定減量會改變原比例，必須先還原原總量；社區節水情境使此辨識不可省略。",
    "reviewerNote": "重新由已知條件獨立計算：設節水前為 6k、5k、4k；節水後總量 15k-36=189，故 15k=225、k=15，第一區 90。 四個選項逐一核對後，只有「90 噸」符合；主要排除點是「把相同減量後的新用量仍誤認為維持原比例。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];

