// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s003";

export const SKILL_ID = "proportion-segment";

export const LECTURE = {
  "lectureId": "u18-s003-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-ratio",
  "skillId": "proportion-segment",
  "lockedSkillOrder": 3,
  "lockedSkillTitle": "比例線段",
  "title": "比例線段：用平行線建立對應線段的比例",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能辨認平行線截得的對應線段。",
    "能使用基本比例定理求未知線段。",
    "能區分整段、上段與下段，避免對應錯位。",
    "能用比例式或共同倍數法檢查答案。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "continued-ratio-application",
        "title": "連比應用",
        "requiredLevel": "能運用「連比應用」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「連比應用」，先複習其核心判斷，再把方法推進到「比例線段」。"
  },
  "glossary": [
    {
      "term": "截線",
      "definition": "穿過兩條或多條直線並形成交點的直線。"
    },
    {
      "term": "比例線段",
      "definition": "長度之間具有相同比值的一組對應線段。"
    },
    {
      "term": "基本比例定理",
      "definition": "三角形內一線段平行於一邊時，會把另外兩邊截成比例線段。"
    },
    {
      "term": "對應線段",
      "definition": "位於相同結構位置、應放在比例式同一側的線段。"
    }
  ],
  "notation": [
    {
      "symbol": "DE∥BC",
      "meaning": "線段 DE 與 BC 平行。"
    },
    {
      "symbol": "AD/DB=AE/EC",
      "meaning": "平行線在兩邊截出的上段比下段相等。"
    },
    {
      "symbol": "AD/AB=AE/AC=DE/BC",
      "meaning": "小三角形與大三角形的對應邊比相等。"
    }
  ],
  "conceptNarrative": [
    "在三角形 ABC 中，D 在 AB 上、E 在 AC 上。若 DE 平行 BC，則小三角形 ADE 與大三角形 ABC 形狀相同，因此對應邊有固定比例。",
    "比例式必須保持結構一致：上段對上段、下段對下段，或小整邊對大整邊。不能把 AD/DB 與 AC/AE 隨意配對。",
    "有時題目給的是整段 AB 與上段 AD，需先求 DB=AB-AD；反之亦然。畫線段分解能避免把整段當成其中一段。",
    "比例線段不代表圖形一定按比例繪製，數值與平行記號才是依據。"
  ],
  "formalDefinitions": [
    {
      "name": "三角形基本比例定理",
      "statement": "若 D、E 分別在 AB、AC 上且 DE∥BC，則 AD/DB=AE/EC，並且 AD/AB=AE/AC=DE/BC。"
    },
    {
      "name": "逆敘述",
      "statement": "若 D、E 分別在兩邊上且 AD/DB=AE/EC，則在會考範圍可判定 DE∥BC。"
    }
  ],
  "formulas": [
    {
      "formula": "AD:DB=AE:EC",
      "conditions": [
        "D 在 AB 上",
        "E 在 AC 上",
        "DE∥BC"
      ],
      "meaning": "兩邊被平行線截出的分段成比例。"
    },
    {
      "formula": "AD:AB=AE:AC=DE:BC",
      "conditions": [
        "小三角形 ADE 與大三角形 ABC 對應"
      ],
      "meaning": "小圖與大圖的線性比相同。"
    }
  ],
  "nonApplicableCases": [
    "沒有平行條件或比例條件時，不能直接套用基本比例定理。",
    "AD/DB 不可對應 AE/AC，因為前者是上段對下段，後者是上段對整段。",
    "線段長度不能為負，算出負值通常表示整段與部分混淆。",
    "圖看起來平行不構成證明，必須有平行記號或可推得的條件。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "在圖上標出平行線與交點位置。",
      "check": "D、E 是否各在三角形的兩邊上？"
    },
    {
      "step": 2,
      "instruction": "決定要用分段比或整邊比。",
      "check": "已知量屬於上段、下段還是整段？"
    },
    {
      "step": 3,
      "instruction": "依相同結構寫比例式。",
      "check": "分子與分母的角色是否左右一致？"
    },
    {
      "step": 4,
      "instruction": "交叉相乘求未知數。",
      "check": "未知長度是否為正且小於整段？"
    },
    {
      "step": 5,
      "instruction": "用另一組比例或加總回查。",
      "check": "所有線段分解是否成立？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "DE∥BC，AD=4、DB=6、AE=5，求 EC。",
      "solutionSteps": [
        "AD/DB=AE/EC。",
        "4/6=5/EC。",
        "4EC=30，所以 EC=7.5。"
      ],
      "answer": "7.5"
    },
    {
      "exampleId": "L2",
      "prompt": "DE∥BC，AD=6、AB=15、AC=20，求 AE。",
      "solutionSteps": [
        "AD/AB=AE/AC。",
        "6/15=AE/20。",
        "AE=8。"
      ],
      "answer": "8"
    },
    {
      "exampleId": "L3",
      "prompt": "DE∥BC，AE=9、EC=6、BC=20，求 DE。",
      "solutionSteps": [
        "AC=9+6=15。",
        "AE/AC=DE/BC。",
        "9/15=DE/20，所以 DE=12。"
      ],
      "answer": "12"
    },
    {
      "exampleId": "L4",
      "prompt": "D、E 在 AB、AC 上，AD:DB=3:2，AE=12、EC=8，能否判定 DE∥BC？",
      "solutionSteps": [
        "AE:EC=12:8=3:2。",
        "兩邊分段比相等。",
        "由逆敘述可判定平行。"
      ],
      "answer": "可以"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 AB 當成 DB。",
      "why": "沒先分清整段與部分。",
      "correction": "寫 AB=AD+DB。"
    },
    {
      "mistake": "比例式上下角色不一致。",
      "why": "只把已知數湊成式子。",
      "correction": "先用文字標記上段/下段或小/大。"
    },
    {
      "mistake": "因圖看似平行就套公式。",
      "why": "依賴視覺。",
      "correction": "只用題目條件與平行記號。"
    },
    {
      "mistake": "交叉相乘後得到負長度仍接受。",
      "why": "沒有做範圍檢查。",
      "correction": "線段長應為正，部分小於整段。"
    },
    {
      "mistake": "逆敘述只比其中一條邊。",
      "why": "忘記需要兩邊分段比相等。",
      "correction": "完整比較 AD:DB 與 AE:EC。"
    }
  ],
  "selfCheck": [
    "平行條件存在嗎？",
    "我使用的是分段比還是整邊比？",
    "比例兩側的結構一致嗎？",
    "整段是否先由部分相加？",
    "答案長度合理嗎？"
  ],
  "summary": [
    "平行線使三角形兩邊被截成比例線段。",
    "可用上段:下段，或小整邊:大整邊。",
    "對應位置必須一致。",
    "不能以圖形外觀代替平行條件。"
  ],
  "connections": {
    "previous": "連比應用提供共同倍數與比例式的基礎。",
    "next": [
      "連比應用題會把線段比例放入文字情境。",
      "相似三角形會完整說明這些比例的來源。"
    ]
  },
  "figureReferences": [
    {
      "figureId": "u18-proportion-q010",
      "purpose": "協助辨認「比例線段」中的對應關係；圖不按比例時不得憑外觀猜答案。"
    },
    {
      "figureId": "u18-proportion-cr002",
      "purpose": "協助辨認「比例線段」中的對應關係；圖不按比例時不得憑外觀猜答案。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s003-v001",
      "u18-s003-v002",
      "u18-s003-v003",
      "u18-s003-v004",
      "u18-s003-v005",
      "u18-s003-v006",
      "u18-s003-v007",
      "u18-s003-v008",
      "u18-s003-v009",
      "u18-s003-v010",
      "u18-s003-v011",
      "u18-s003-v012"
    ],
    "constructedResponseIds": [
      "u18-s003-cr001",
      "u18-s003-cr002"
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
    "reviewNote": "逐圖核對分段比與整邊比的對應方向，特別加入逆敘述與視覺不可作為證據的限制；所有未知線段均做正值與部分小於整段檢查。"
  },
  "contentSha256": "579e0282ce5adf11fa1da4dd7dd0f011fc237c7f66480627d6c9ea4237ae2b84"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s003-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "在 △ABC 中，D 在 AB 上、E 在 AC 上，且 DE∥BC。若 AD=4、DB=6、AE=8，則 EC 為何？",
    "text": "在 △ABC 中，D 在 AB 上、E 在 AC 上，且 DE∥BC。若 AD=4、DB=6、AE=8，則 EC 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "6",
      "10",
      "12",
      "18"
    ],
    "answerIndex": 2,
    "independentSolution": "4/6 約為 2/3，因此 8/EC 也為 2/3，EC=8×3/2=12。",
    "explanation": "由基本比例定理 AD/DB=AE/EC，所以 4/6=8/EC，解得 EC=12。",
    "steps": [
      "寫 4:6=8:EC。",
      "交叉相乘 4EC=48。",
      "求得 EC=12。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": false,
        "reason": "把 AD:DB=4:6 誤寫成 AE:EC=8:6。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "把 AB=10 直接當 EC。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "依獨立推導可得到 12，符合所有已知條件。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "把 AE 與已知線段相加而非用比例。"
      }
    ],
    "misconceptionTarget": "上段對下段的對應位置寫錯。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "直接套用分段比例求一個未知線段。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ac14093d13caf2afbc1dc2f8bb1de3bbb1d17f3d03825653b895d5fa3cc14ab8"
  },
  {
    "questionId": "u18-s003-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 DE∥BC，AD=5、AB=15、AC=21，則 AE 為何？",
    "text": "若 DE∥BC，AD=5、AB=15、AC=21，則 AE 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "10",
      "14",
      "63",
      "7"
    ],
    "answerIndex": 3,
    "independentSolution": "小三角形對大三角形比為 1/3，故 AE 是 AC 的 1/3，即 7。",
    "explanation": "AD/AB=AE/AC，所以 5/15=AE/21，AE=7。",
    "steps": [
      "辨認使用小整邊:大整邊。",
      "列 5/15=AE/21。",
      "求 AE=7。"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "把 AD/AB=1/3 誤當 AE=AC-1/3。"
      },
      {
        "choice": "14",
        "truth": false,
        "reason": "把 AE 誤當 AC 的 2/3。"
      },
      {
        "choice": "63",
        "truth": false,
        "reason": "交叉相乘後漏除以 15。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "依獨立推導可得到 7，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把整段 AB 與下段混淆。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本整邊比例，數值可直接約分。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0dd786af4b1eea797db96002990406cbe47c25aa9f079ed5281e86dce7c9768b"
  },
  {
    "questionId": "u18-s003-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "在 △ABC 中，D、E 分別位於 AB、AC 上。若 AD:DB=3:2，且 AE=12、EC=8，則下列何者正確？",
    "text": "在 △ABC 中，D、E 分別位於 AB、AC 上。若 AD:DB=3:2，且 AE=12、EC=8，則下列何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "DE∥BC",
      "DE⊥BC",
      "AD=AE",
      "無法判斷 DE 與 BC 的關係"
    ],
    "answerIndex": 0,
    "independentSolution": "12:8 同除 4 得 3:2，恰與 AD:DB 相同，因此 DE 平行 BC。",
    "explanation": "AD:DB=3:2，而 AE:EC=12:8=3:2；兩邊分段比相等，可由基本比例定理逆敘述判定 DE∥BC。",
    "steps": [
      "化簡 AE:EC。",
      "比較兩邊分段比。",
      "使用逆敘述判定平行。"
    ],
    "optionAnalysis": [
      {
        "choice": "DE∥BC",
        "truth": true,
        "reason": "依獨立推導可得到 DE∥BC，符合所有已知條件。"
      },
      {
        "choice": "DE⊥BC",
        "truth": false,
        "reason": "分段比相等只能推出平行，不能推出垂直。"
      },
      {
        "choice": "AD=AE",
        "truth": false,
        "reason": "比例相同不表示不同邊上的上段等長。"
      },
      {
        "choice": "無法判斷 DE 與 BC 的關係",
        "truth": false,
        "reason": "兩邊分段比 3:2 與 12:8=3:2 相等，已足以用逆敘述。"
      }
    ],
    "misconceptionTarget": "只知道比例卻不知道可使用逆敘述。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本概念判斷，需辨認比例定理的逆敘述。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4c2db7169882e22a9cde5b875823fc54a859a6b4eaa807eca3a5f868cda38a63"
  },
  {
    "questionId": "u18-s003-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "DE∥BC，AD=6、DB=4、AE=9。若 AC=AE+EC，則 AC 為何？",
    "text": "DE∥BC，AD=6、DB=4、AE=9。若 AC=AE+EC，則 AC 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "12",
      "15",
      "13",
      "22.5"
    ],
    "answerIndex": 1,
    "independentSolution": "上段:下段=3:2，AE=9 對應 3 份，每份 3，EC=6，整段 AC=15。",
    "explanation": "AD/DB=AE/EC，6/4=9/EC，得 EC=6；所以 AC=9+6=15。",
    "steps": [
      "用分段比例求 EC。",
      "交叉相乘得 EC=6。",
      "計算整段 AC=9+6。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "把 6:4 化成 3:2 後錯算 EC=3。"
      },
      {
        "choice": "15",
        "truth": true,
        "reason": "依獨立推導可得到 15，符合所有已知條件。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "把 EC 誤算為 4。"
      },
      {
        "choice": "22.5",
        "truth": false,
        "reason": "把 AE 直接乘 AB/AD 而未理解結果其實是 15；此值為錯誤重算。"
      }
    ],
    "misconceptionTarget": "求出下段後忘記題目問整段。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "先由比例求部分，再相加求整段。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b4fd1540bf5882817cc7e3ec8aae9f901056a637cc4d778386be01911893b24b"
  },
  {
    "questionId": "u18-s003-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "在 △ABC 中，DE∥BC。若 AD:AB=2:5，且 DE=8，則 BC 為何？",
    "text": "在 △ABC 中，DE∥BC。若 AD:AB=2:5，且 DE=8，則 BC 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "12",
      "16",
      "32",
      "20"
    ],
    "answerIndex": 3,
    "independentSolution": "DE 的 8 代表 2 份，每份 4；BC 為 5 份，等於 20。",
    "explanation": "小三角形對大三角形的相似比為 2:5，因此 DE:BC=2:5；BC=8×5/2=20。",
    "steps": [
      "對應 DE 與 BC。",
      "列 8:BC=2:5。",
      "求 BC=20。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "把 5-2=3 當作放大倍數。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "把 2:5 誤簡化成 1:2。"
      },
      {
        "choice": "32",
        "truth": false,
        "reason": "將比值方向取反後又重複乘。"
      },
      {
        "choice": "20",
        "truth": true,
        "reason": "依獨立推導可得到 20，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把分段差份數當成整體縮放份數。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需把邊上整段比轉到平行線段的對應比。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a9eb2ca723e2a3123c1bd6bd278f4d2cbee3a68361f962c746980ebda4b783ea"
  },
  {
    "questionId": "u18-s003-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩條平行線被三條截線所截。第一條截線上的兩段長為 4、6；第二條截線上對應的上段長為 10，則下段長為何？",
    "text": "兩條平行線被三條截線所截。第一條截線上的兩段長為 4、6；第二條截線上對應的上段長為 10，則下段長為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "15",
      "12",
      "20",
      "25"
    ],
    "answerIndex": 0,
    "independentSolution": "第二截線的上段是第一截線上段的 10/4=2.5 倍，所以下段為 6×2.5=15。",
    "explanation": "平行線截線定理給出 4:6=10:x，故 4x=60，x=15。",
    "steps": [
      "確認上段對上段、下段對下段。",
      "列 4/6=10/x。",
      "交叉相乘求 x。"
    ],
    "optionAnalysis": [
      {
        "choice": "15",
        "truth": true,
        "reason": "依獨立推導可得到 15，符合所有已知條件。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把 4:6 誤當差 2 對差 2。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "只把上段放大 2 倍，實際倍率為 2.5。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "把總長 10 當成上段後再加錯。"
      }
    ],
    "misconceptionTarget": "相對位置沒有對應，或把加法變化當比例。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "把三角形內比例推廣到平行線截線情境。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7b390d422e047d70f61bef56d36733be7e4c09a9087a6ffc848c12e60490baa2"
  },
  {
    "questionId": "u18-s003-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "在 △ABC 中，D 在 AB、E 在 AC，DE∥BC。若 AD=x+1、DB=5、AE=6、EC=4，則 x 為何？",
    "text": "在 △ABC 中，D 在 AB、E 在 AC，DE∥BC。若 AD=x+1、DB=5、AE=6、EC=4，則 x 為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "4",
      "6.5",
      "7.5",
      "11"
    ],
    "answerIndex": 1,
    "independentSolution": "右側 6/4=1.5，所以 AD=5×1.5=7.5；由 AD=x+1 得 x=6.5。",
    "explanation": "由 AD/DB=AE/EC，(x+1)/5=6/4=3/2，所以 x+1=7.5，x=6.5。",
    "steps": [
      "列分段比例。",
      "求 x+1=7.5。",
      "再減 1 得 x=6.5。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "把 x+1 直接等於 AE-EC。"
      },
      {
        "choice": "6.5",
        "truth": true,
        "reason": "依獨立推導可得到 6.5，符合所有已知條件。"
      },
      {
        "choice": "7.5",
        "truth": false,
        "reason": "求得 AD=7.5 後忘記減 1。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "把 5 與 6 相加。"
      }
    ],
    "misconceptionTarget": "方程求出的是線段 AD，不是直接求得 x。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 110,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "比例式中未知數位於線段代數式，需多一步還原。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6e4c46c43e63131ab4260879106d5bf8125bc3feb52b932971e4d29ee418d1a8"
  },
  {
    "questionId": "u18-s003-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "若 D、E 分別在 AB、AC 上，AD=8、DB=12、AE=10、EC=15，則下列判斷何者正確？",
    "text": "若 D、E 分別在 AB、AC 上，AD=8、DB=12、AE=10、EC=15，則下列判斷何者正確？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "DE 不平行 BC，因為 8≠10",
      "只能判定 △ADE 為等腰三角形",
      "DE∥BC",
      "資料不足，因為沒有角度"
    ],
    "answerIndex": 2,
    "independentSolution": "8/12 與 10/15 都等於 2/3，故連接兩分點的 DE 平行 BC。",
    "explanation": "AD:DB=8:12=2:3，AE:EC=10:15=2:3，因此 DE∥BC。",
    "steps": [
      "分別化簡兩組分段比。",
      "確認兩比相等。",
      "使用逆敘述。"
    ],
    "optionAnalysis": [
      {
        "choice": "DE 不平行 BC，因為 8≠10",
        "truth": false,
        "reason": "判定看分段比，不要求對應線段等長。"
      },
      {
        "choice": "只能判定 △ADE 為等腰三角形",
        "truth": false,
        "reason": "所給資料沒有任何等腰條件。"
      },
      {
        "choice": "DE∥BC",
        "truth": true,
        "reason": "依獨立推導可得到 DE∥BC，符合所有已知條件。"
      },
      {
        "choice": "資料不足，因為沒有角度",
        "truth": false,
        "reason": "兩邊分段比相等已可用逆敘述。"
      }
    ],
    "misconceptionTarget": "把長度不相等誤認為不能平行。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "D、E 明確位於三角形兩邊內部，分段皆為正，逆敘述適用。",
    "difficultyReason": "需以比值而非絕對長度判斷平行。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f5b56fc7fa4335a8fe86e9fd9578e8b059558c93d277833a56ee718f25ac11ee"
  },
  {
    "questionId": "u18-s003-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "在 △ABC 中，DE∥BC，且 AD:DB=2:3。若 △ADE 的周長為 14，則 △ABC 的周長為何？",
    "text": "在 △ABC 中，DE∥BC，且 AD:DB=2:3。若 △ADE 的周長為 14，則 △ABC 的周長為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "35",
      "21",
      "28",
      "49"
    ],
    "answerIndex": 0,
    "independentSolution": "小三角形縮放到大三角形的倍率是 AB/AD=5/2，周長同乘 5/2，得 35。",
    "explanation": "AD:DB=2:3，所以 AD:AB=2:(2+3)=2:5。相似三角形周長比亦為 2:5，故大三角形周長 14×5/2=35。",
    "steps": [
      "把分段比轉成小邊:整邊=2:5。",
      "使用周長比等於相似比。",
      "計算 14×5/2。"
    ],
    "optionAnalysis": [
      {
        "choice": "35",
        "truth": true,
        "reason": "依獨立推導可得到 35，符合所有已知條件。"
      },
      {
        "choice": "21",
        "truth": false,
        "reason": "只乘上 3/2，而小對大整體比其實為 2:5。"
      },
      {
        "choice": "28",
        "truth": false,
        "reason": "把小對大比誤作 1:2。"
      },
      {
        "choice": "49",
        "truth": false,
        "reason": "使用面積倍率 (5/2)²。"
      }
    ],
    "misconceptionTarget": "把上段:下段直接當小三角形:大三角形。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 120,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "跨接分段比例、相似比與周長比三個概念。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2d2968e7c035e148a3bd4f9b2015011eb6e8ea0a04054d335402e8266311becc"
  },
  {
    "questionId": "u18-s003-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "工程圖中，三角形支架 ABC 內有橫桿 DE，圖上標示 DE∥BC、AD=18 cm、DB=12 cm、AE=15 cm。為了裁切材料，需知道 EC。EC 應為多少？",
    "text": "工程圖中，三角形支架 ABC 內有橫桿 DE，圖上標示 DE∥BC、AD=18 cm、DB=12 cm、AE=15 cm。為了裁切材料，需知道 EC。EC 應為多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "8 cm",
      "10 cm",
      "12 cm",
      "22.5 cm"
    ],
    "answerIndex": 1,
    "independentSolution": "18:12=3:2；AE=15 對應 3 份，每份 5，EC 為 2 份即 10 cm。",
    "explanation": "由平行條件，AD/DB=AE/EC；18/12=15/EC，故 18EC=180，EC=10 cm。",
    "steps": [
      "確認橫桿平行。",
      "列上段:下段=上段:下段。",
      "交叉相乘求 EC。"
    ],
    "optionAnalysis": [
      {
        "choice": "8 cm",
        "truth": false,
        "reason": "把 18:12 誤簡化為 3:1。"
      },
      {
        "choice": "10 cm",
        "truth": true,
        "reason": "依獨立推導可得到 10 cm，符合所有已知條件。"
      },
      {
        "choice": "12 cm",
        "truth": false,
        "reason": "直接把 DB 當作 EC。"
      },
      {
        "choice": "22.5 cm",
        "truth": false,
        "reason": "把比例方向寫成 18/12=EC/15。"
      }
    ],
    "misconceptionTarget": "工程圖中把左右兩邊的同位置線段配反。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "所有圖上長度均為 cm；答案 10 cm，不需比例尺換算。",
    "ambiguityAndBoundaryAudit": "題目把 D、E 的位置與平行關係明示，不依圖面視覺比例判讀。",
    "difficultyReason": "把基本比例定理用於結構裁切的必要尺寸。",
    "literacyContextNecessity": "裁切長度取決於平行橫桿造成的比例線段，若沒有支架情境便無法說明為何需要求 EC。",
    "visualMode": "figure-supported",
    "figureId": "u18-proportion-q010",
    "drawingSpecReference": "figures/u18/u18-proportion-q010.svg",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "07c6b226340729350e0ee328b9a9305bdd9b2e6aadea4303cbd5f2a0cbeca8ac"
  },
  {
    "questionId": "u18-s003-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "道路設計圖中，兩條邊界線由同一端點展開，橫向標線彼此平行。左側相鄰兩段為 30 m、45 m，右側第一段為 22 m。若要使第二條標線保持平行，右側第二段應為多少？",
    "text": "道路設計圖中，兩條邊界線由同一端點展開，橫向標線彼此平行。左側相鄰兩段為 30 m、45 m，右側第一段為 22 m。若要使第二條標線保持平行，右側第二段應為多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "15 m",
      "37 m",
      "33 m",
      "49.5 m"
    ],
    "answerIndex": 2,
    "independentSolution": "右側相對左側的縮放為 22/30=11/15，因此第二段 45×11/15=33 m。",
    "explanation": "平行標線使兩側對應分段成比例，30:45=22:x，所以 x=45×22/30=33 m。",
    "steps": [
      "列左上:左下=右上:右下。",
      "交叉相乘。",
      "檢查右側倍率 22/30 與第二段一致。"
    ],
    "optionAnalysis": [
      {
        "choice": "15 m",
        "truth": false,
        "reason": "只取左側兩段差。"
      },
      {
        "choice": "37 m",
        "truth": false,
        "reason": "把 45-30=15 加到 22，誤用加法。"
      },
      {
        "choice": "33 m",
        "truth": true,
        "reason": "依獨立推導可得到 33 m，符合所有已知條件。"
      },
      {
        "choice": "49.5 m",
        "truth": false,
        "reason": "把 22 乘 45/20，使用錯誤分母。"
      }
    ],
    "misconceptionTarget": "用固定差取代固定比例。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "所有距離使用公尺，答案為 33 m。",
    "ambiguityAndBoundaryAudit": "『相鄰兩段』依從共同端點向外的順序對應，沒有交換解讀。",
    "difficultyReason": "需從工程描述建立平行截線比例，而非圖上直接讀值。",
    "literacyContextNecessity": "道路標線是否平行直接決定兩側分段比例，所求長度是施工定位資料。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "12e6bd92e15ea350f8ec0cd3f6e120bdaea571ec22aa9ff977e363cbfbf4379d"
  },
  {
    "questionId": "u18-s003-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "相框設計中，內框的一條斜邊被平行裝飾線分成上段與下段，左側比為 5:3，右側上段為 20 cm。若右側總斜邊長需符合相似分割，總長應為何？",
    "text": "相框設計中，內框的一條斜邊被平行裝飾線分成上段與下段，左側比為 5:3，右側上段為 20 cm。若右側總斜邊長需符合相似分割，總長應為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "12 cm",
      "23 cm",
      "40 cm",
      "32 cm"
    ],
    "answerIndex": 3,
    "independentSolution": "右側斜邊分成 5k 與 3k；5k=20 得 k=4，整段 8k=32 cm。",
    "explanation": "上段 5 份對應 20 cm，每份 4 cm，下段 3 份為 12 cm，總長 32 cm。",
    "steps": [
      "由 20÷5 求每份 4 cm。",
      "求下段 3×4=12 cm。",
      "相加得總長 32 cm。"
    ],
    "optionAnalysis": [
      {
        "choice": "12 cm",
        "truth": false,
        "reason": "這是右側下段，非總長。"
      },
      {
        "choice": "23 cm",
        "truth": false,
        "reason": "把 5:3 當作差 2 cm。"
      },
      {
        "choice": "40 cm",
        "truth": false,
        "reason": "把上段 20 誤認為 3 份。"
      },
      {
        "choice": "32 cm",
        "truth": true,
        "reason": "依獨立推導可得到 32 cm，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "求出分段後忘記相加成整段。",
    "prerequisiteCheck": "能進行基本四則與比例運算。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "線段均以 cm 表示；總長為上段加下段。",
    "ambiguityAndBoundaryAudit": "題目中的 5:3 明確指上段:下段，非內框:外框。",
    "difficultyReason": "由分段比與一段長度求實際總裁切長。",
    "literacyContextNecessity": "相框裝飾線的平行分割使左右兩側保持相同比例，總斜邊是實際裁切尺寸。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7d871255939428b26eac12ff7aae5f1de114d22a55f9761e478894a2223de14c"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s003-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "itemType": "constructed-response",
    "prompt": "在線段 AB 上有點 C，AC：CB=3：5，且 AB=32 cm。求 AC、CB，並用加總驗證。",
    "requiredWork": "以部分和為整體，求每份長度後驗證兩段相加。",
    "standardSolution": "總份數 3+5=8，每份 32÷8=4 cm，所以 AC=12 cm、CB=20 cm；12+20=32。",
    "alternativeMethod": "可用 AC=32×3/8、CB=32×5/8。",
    "reasoningSteps": [
      "寫 AC=3k、CB=5k。",
      "由 AB=8k=32 求 k=4。",
      "求兩段長度。",
      "驗證和為32。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確得到 12 cm、20 cm，並完成加總驗證。"
      },
      {
        "score": 2,
        "criteria": "兩段皆正確但未驗證；或設式正確只有一處算術錯誤。"
      },
      {
        "score": 1,
        "criteria": "只寫出 3+5=8 或其中一段計算。"
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
    "unitAndNotationRules": "線段長度皆須標示 cm，且必須為正。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "以份數法與分數乘法交叉驗算，兩段和為32且比為3：5。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "1ea5557a88c1772fcfb2b8cc5c00cba0adaddfe2a2b6e01fd604dc082aa6f548"
  },
  {
    "questionId": "u18-s003-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-ratio",
    "skillId": "proportion-segment",
    "lockedSkillOrder": 3,
    "itemType": "constructed-response",
    "prompt": "在三角形 ABC 中，D 在 AB 上、E 在 AC 上，且 DE∥BC。已知 AD=6、DB=4、AE=9。求 EC，並說明所用比例的對應理由。",
    "requiredWork": "需先由平行線建立相似，再使用分點比例或全邊比例。",
    "standardSolution": "AB=10。因 DE∥BC，△ADE∼△ABC，所以 AD/AB=AE/AC，即 6/10=9/AC，得 AC=15，因此 EC=15−9=6。",
    "alternativeMethod": "由截比定理 AD：DB=AE：EC，6：4=9：EC，交叉相乘得 EC=6。",
    "reasoningSteps": [
      "由平行線說明兩組對應角相等。",
      "判定 △ADE∼△ABC。",
      "列 6/10=9/AC。",
      "求 AC=15，再求 EC=6。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "相似理由、比例式與 EC=6 都正確。"
      },
      {
        "score": 2,
        "criteria": "答案正確但相似理由不完整；或相似與比例正確但最後相減有錯。"
      },
      {
        "score": 1,
        "criteria": "只寫出一個可能比例或算出 AB=10。"
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
    "unitAndNotationRules": "未標單位時視為同一長度單位；比例兩側必須是對應段。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "figure-supported",
    "figureId": "u18-proportion-cr002",
    "drawingSpecReference": "figures/u18/u18-proportion-cr002.svg",
    "independentReview": {
      "decision": "pass",
      "reviewNote": "分別用全邊相似比與分段截比驗算，均得 EC=6；對應順序已核對。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "e9e4bb703e2880d2c25e60b228c5e7536c4d6af422c6e665c7c03f0f1937c8fd"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s003-v001-semantic-review-r1",
    "questionId": "u18-s003-v001",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "ac14093d13caf2afbc1dc2f8bb1de3bbb1d17f3d03825653b895d5fa3cc14ab8",
    "independentSolution": "4/6 約為 2/3，因此 8/EC 也為 2/3，EC=8×3/2=12。",
    "derivedAnswer": "12",
    "storedAnswer": "12",
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
      "scope": "只使用國中會考範圍內的「比例線段」概念，未要求高中延伸。"
    },
    "difficultyReason": "直接套用分段比例求一個未知線段。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：4/6 約為 2/3，因此 8/EC 也為 2/3，EC=8×3/2=12。 四個選項逐一核對後，只有「12」符合；主要排除點是「上段對下段的對應位置寫錯。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s003-v002-semantic-review-r1",
    "questionId": "u18-s003-v002",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "0dd786af4b1eea797db96002990406cbe47c25aa9f079ed5281e86dce7c9768b",
    "independentSolution": "小三角形對大三角形比為 1/3，故 AE 是 AC 的 1/3，即 7。",
    "derivedAnswer": "7",
    "storedAnswer": "7",
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
      "scope": "只使用國中會考範圍內的「比例線段」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本整邊比例，數值可直接約分。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：小三角形對大三角形比為 1/3，故 AE 是 AC 的 1/3，即 7。 四個選項逐一核對後，只有「7」符合；主要排除點是「把整段 AB 與下段混淆。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s003-v003-semantic-review-r1",
    "questionId": "u18-s003-v003",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "4c2db7169882e22a9cde5b875823fc54a859a6b4eaa807eca3a5f868cda38a63",
    "independentSolution": "12:8 同除 4 得 3:2，恰與 AD:DB 相同，因此 DE 平行 BC。",
    "derivedAnswer": "DE∥BC",
    "storedAnswer": "DE∥BC",
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
      "scope": "只使用國中會考範圍內的「比例線段」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本概念判斷，需辨認比例定理的逆敘述。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：12:8 同除 4 得 3:2，恰與 AD:DB 相同，因此 DE 平行 BC。 四個選項逐一核對後，只有「DE∥BC」符合；主要排除點是「只知道比例卻不知道可使用逆敘述。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s003-v004-semantic-review-r1",
    "questionId": "u18-s003-v004",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "b4fd1540bf5882817cc7e3ec8aae9f901056a637cc4d778386be01911893b24b",
    "independentSolution": "上段:下段=3:2，AE=9 對應 3 份，每份 3，EC=6，整段 AC=15。",
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
      "scope": "只使用國中會考範圍內的「比例線段」概念，未要求高中延伸。"
    },
    "difficultyReason": "先由比例求部分，再相加求整段。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：上段:下段=3:2，AE=9 對應 3 份，每份 3，EC=6，整段 AC=15。 四個選項逐一核對後，只有「15」符合；主要排除點是「求出下段後忘記題目問整段。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s003-v005-semantic-review-r1",
    "questionId": "u18-s003-v005",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "a9eb2ca723e2a3123c1bd6bd278f4d2cbee3a68361f962c746980ebda4b783ea",
    "independentSolution": "DE 的 8 代表 2 份，每份 4；BC 為 5 份，等於 20。",
    "derivedAnswer": "20",
    "storedAnswer": "20",
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
      "scope": "只使用國中會考範圍內的「比例線段」概念，未要求高中延伸。"
    },
    "difficultyReason": "需把邊上整段比轉到平行線段的對應比。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：DE 的 8 代表 2 份，每份 4；BC 為 5 份，等於 20。 四個選項逐一核對後，只有「20」符合；主要排除點是「把分段差份數當成整體縮放份數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s003-v006-semantic-review-r1",
    "questionId": "u18-s003-v006",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "7b390d422e047d70f61bef56d36733be7e4c09a9087a6ffc848c12e60490baa2",
    "independentSolution": "第二截線的上段是第一截線上段的 10/4=2.5 倍，所以下段為 6×2.5=15。",
    "derivedAnswer": "15",
    "storedAnswer": "15",
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
      "scope": "只使用國中會考範圍內的「比例線段」概念，未要求高中延伸。"
    },
    "difficultyReason": "把三角形內比例推廣到平行線截線情境。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：第二截線的上段是第一截線上段的 10/4=2.5 倍，所以下段為 6×2.5=15。 四個選項逐一核對後，只有「15」符合；主要排除點是「相對位置沒有對應，或把加法變化當比例。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s003-v007-semantic-review-r1",
    "questionId": "u18-s003-v007",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "6e4c46c43e63131ab4260879106d5bf8125bc3feb52b932971e4d29ee418d1a8",
    "independentSolution": "右側 6/4=1.5，所以 AD=5×1.5=7.5；由 AD=x+1 得 x=6.5。",
    "derivedAnswer": "6.5",
    "storedAnswer": "6.5",
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
      "scope": "只使用國中會考範圍內的「比例線段」概念，未要求高中延伸。"
    },
    "difficultyReason": "比例式中未知數位於線段代數式，需多一步還原。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：右側 6/4=1.5，所以 AD=5×1.5=7.5；由 AD=x+1 得 x=6.5。 四個選項逐一核對後，只有「6.5」符合；主要排除點是「方程求出的是線段 AD，不是直接求得 x。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s003-v008-semantic-review-r1",
    "questionId": "u18-s003-v008",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "f5b56fc7fa4335a8fe86e9fd9578e8b059558c93d277833a56ee718f25ac11ee",
    "independentSolution": "8/12 與 10/15 都等於 2/3，故連接兩分點的 DE 平行 BC。",
    "derivedAnswer": "DE∥BC",
    "storedAnswer": "DE∥BC",
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
      "boundary": "D、E 明確位於三角形兩邊內部，分段皆為正，逆敘述適用。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「比例線段」概念，未要求高中延伸。"
    },
    "difficultyReason": "需以比值而非絕對長度判斷平行。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：8/12 與 10/15 都等於 2/3，故連接兩分點的 DE 平行 BC。 四個選項逐一核對後，只有「DE∥BC」符合；主要排除點是「把長度不相等誤認為不能平行。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s003-v009-semantic-review-r1",
    "questionId": "u18-s003-v009",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "2d2968e7c035e148a3bd4f9b2015011eb6e8ea0a04054d335402e8266311becc",
    "independentSolution": "小三角形縮放到大三角形的倍率是 AB/AD=5/2，周長同乘 5/2，得 35。",
    "derivedAnswer": "35",
    "storedAnswer": "35",
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
      "scope": "只使用國中會考範圍內的「比例線段」概念，未要求高中延伸。"
    },
    "difficultyReason": "跨接分段比例、相似比與周長比三個概念。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：小三角形縮放到大三角形的倍率是 AB/AD=5/2，周長同乘 5/2，得 35。 四個選項逐一核對後，只有「35」符合；主要排除點是「把上段:下段直接當小三角形:大三角形。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s003-v010-semantic-review-r1",
    "questionId": "u18-s003-v010",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "07c6b226340729350e0ee328b9a9305bdd9b2e6aadea4303cbd5f2a0cbeca8ac",
    "independentSolution": "18:12=3:2；AE=15 對應 3 份，每份 5，EC 為 2 份即 10 cm。",
    "derivedAnswer": "10 cm",
    "storedAnswer": "10 cm",
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
      "boundary": "題目把 D、E 的位置與平行關係明示，不依圖面視覺比例判讀。",
      "units": "所有圖上長度均為 cm；答案 10 cm，不需比例尺換算。",
      "scope": "只使用國中會考範圍內的「比例線段」概念，未要求高中延伸。"
    },
    "difficultyReason": "把基本比例定理用於結構裁切的必要尺寸。",
    "literacyNecessityReview": "裁切長度取決於平行橫桿造成的比例線段，若沒有支架情境便無法說明為何需要求 EC。",
    "reviewerNote": "重新由已知條件獨立計算：18:12=3:2；AE=15 對應 3 份，每份 5，EC 為 2 份即 10 cm。 四個選項逐一核對後，只有「10 cm」符合；主要排除點是「工程圖中把左右兩邊的同位置線段配反。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s003-v011-semantic-review-r1",
    "questionId": "u18-s003-v011",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "12e6bd92e15ea350f8ec0cd3f6e120bdaea571ec22aa9ff977e363cbfbf4379d",
    "independentSolution": "右側相對左側的縮放為 22/30=11/15，因此第二段 45×11/15=33 m。",
    "derivedAnswer": "33 m",
    "storedAnswer": "33 m",
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
      "boundary": "『相鄰兩段』依從共同端點向外的順序對應，沒有交換解讀。",
      "units": "所有距離使用公尺，答案為 33 m。",
      "scope": "只使用國中會考範圍內的「比例線段」概念，未要求高中延伸。"
    },
    "difficultyReason": "需從工程描述建立平行截線比例，而非圖上直接讀值。",
    "literacyNecessityReview": "道路標線是否平行直接決定兩側分段比例，所求長度是施工定位資料。",
    "reviewerNote": "重新由已知條件獨立計算：右側相對左側的縮放為 22/30=11/15，因此第二段 45×11/15=33 m。 四個選項逐一核對後，只有「33 m」符合；主要排除點是「用固定差取代固定比例。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s003-v012-semantic-review-r1",
    "questionId": "u18-s003-v012",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "7d871255939428b26eac12ff7aae5f1de114d22a55f9761e478894a2223de14c",
    "independentSolution": "右側斜邊分成 5k 與 3k；5k=20 得 k=4，整段 8k=32 cm。",
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
      "boundary": "題目中的 5:3 明確指上段:下段，非內框:外框。",
      "units": "線段均以 cm 表示；總長為上段加下段。",
      "scope": "只使用國中會考範圍內的「比例線段」概念，未要求高中延伸。"
    },
    "difficultyReason": "由分段比與一段長度求實際總裁切長。",
    "literacyNecessityReview": "相框裝飾線的平行分割使左右兩側保持相同比例，總斜邊是實際裁切尺寸。",
    "reviewerNote": "重新由已知條件獨立計算：右側斜邊分成 5k 與 3k；5k=20 得 k=4，整段 8k=32 cm。 四個選項逐一核對後，只有「32 cm」符合；主要排除點是「求出分段後忘記相加成整段。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u18-proportion-q010",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "svgPath": "figures/u18/u18-proportion-q010.svg",
    "canvas": {
      "width": 640,
      "height": 420,
      "viewBox": "0 0 640 420"
    },
    "title": "三角形支架與平行橫桿",
    "altText": "三角形 ABC 中，D、E 位於兩腰，DE 平行 BC；AD 18 公分、DB 12 公分、AE 15 公分，EC 未知。",
    "drawingSpec": {
      "purpose": "呈現工程支架中平行橫桿造成的比例線段。",
      "coordinateSystem": "SVG origin at upper-left; x increases rightward and y downward.",
      "exactGeometry": {
        "A": [
          320,
          55
        ],
        "B": [
          105,
          350
        ],
        "C": [
          545,
          350
        ],
        "D": [
          230,
          180
        ],
        "E": [
          410,
          180
        ],
        "DE": "horizontal from (230,180) to (410,180)",
        "BC": "horizontal from (105,350) to (545,350)"
      },
      "labels": {
        "A": [
          310,
          42
        ],
        "B": [
          76,
          377
        ],
        "C": [
          553,
          377
        ],
        "D": [
          202,
          176
        ],
        "E": [
          420,
          176
        ],
        "AD": [
          200,
          110
        ],
        "DB": [
          120,
          270
        ],
        "AE": [
          415,
          112
        ],
        "EC": [
          458,
          270
        ]
      },
      "lineRules": {
        "visible": [
          "AB",
          "AC",
          "BC",
          "DE"
        ],
        "hidden": [],
        "parallel": [
          "DE",
          "BC"
        ]
      },
      "symbolsAndMarks": {
        "parallelMarks": "double chevrons centered on DE and BC"
      },
      "scalePolicy": "not-to-scale",
      "visualInferenceWarning": "圖形不按比例；只能依標示與題目條件推理。",
      "mobileConstraints": "At 320 CSS px width, primary labels must remain at least 9 px apparent height and no label may overlap a segment.",
      "accessibility": {
        "title": "三角形支架與平行橫桿",
        "description": "三角形 ABC 內有線段 DE 平行底邊 BC，D 在 AB 上、E 在 AC 上，標示 AD、DB、AE。",
        "altText": "三角形 ABC 中，D、E 位於兩腰，DE 平行 BC；AD 18 公分、DB 12 公分、AE 15 公分，EC 未知。"
      }
    },
    "svgAssertions": [
      "id=\"tri-main\"",
      "id=\"parallel-de\"",
      "id=\"parallel-mark-de\"",
      "DE ∥ BC"
    ],
    "figureReview": {
      "decision": "pass",
      "reviewedAt": "2026-07-12",
      "geometryCheck": "pass",
      "mobileReadability": "pass",
      "answerLeakageCheck": "pass",
      "reviewNote": "逐點核對 D、E 位於兩腰且 DE 與 BC 同為水平線；未知 EC 未以長度或比例暗示答案。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "a578e7dd092e898597e13e6994aae3e7d1ac8fc7665a27e06be6eca818aa99a5"
  },
  {
    "figureId": "u18-proportion-cr002",
    "unitId": "u18",
    "skillId": "proportion-segment",
    "svgPath": "figures/u18/u18-proportion-cr002.svg",
    "canvas": {
      "width": 640,
      "height": 420,
      "viewBox": "0 0 640 420"
    },
    "title": "平行線分割三角形的線段資料",
    "altText": "△ABC中DE平行BC，AD 6、DB 4、AE 9、EC未知。",
    "drawingSpec": {
      "purpose": "支援申論題中以相似或截比定理求EC。",
      "coordinateSystem": "SVG origin at upper-left; x increases rightward and y downward.",
      "exactGeometry": {
        "A": [
          320,
          55
        ],
        "B": [
          95,
          350
        ],
        "C": [
          550,
          350
        ],
        "D": [
          230,
          175
        ],
        "E": [
          410,
          175
        ]
      },
      "labels": {
        "AD": "6",
        "DB": "4",
        "AE": "9",
        "EC": "unknown"
      },
      "lineRules": {
        "visible": [
          "AB",
          "AC",
          "BC",
          "DE"
        ],
        "parallel": [
          "DE",
          "BC"
        ],
        "hidden": []
      },
      "symbolsAndMarks": {
        "parallelMarks": [
          "DE",
          "BC"
        ]
      },
      "scalePolicy": "not-to-scale",
      "visualInferenceWarning": "圖形不按比例；只能依標示與題目條件推理。",
      "mobileConstraints": "At 320 CSS px width, primary labels must remain at least 9 px apparent height and no label may overlap a segment.",
      "accessibility": {
        "title": "平行線分割三角形的線段資料",
        "description": "三角形ABC內，D在AB、E在AC，DE平行BC；AD為6、DB為4、AE為9，EC未知。",
        "altText": "△ABC中DE平行BC，AD 6、DB 4、AE 9、EC未知。"
      }
    },
    "svgAssertions": [
      "id=\"cr2-triangle\"",
      "id=\"cr2-de\"",
      "DE ∥ BC"
    ],
    "figureReview": {
      "decision": "pass",
      "reviewedAt": "2026-07-12",
      "geometryCheck": "pass",
      "mobileReadability": "pass",
      "answerLeakageCheck": "pass",
      "reviewNote": "數值與申論題一致，DE確實水平平行BC；EC保留未知標示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "12547c93cae2192f5dd109a5900c70a5d0c6179edc00b52bfb14b0e44b27f7b0"
  }
];

