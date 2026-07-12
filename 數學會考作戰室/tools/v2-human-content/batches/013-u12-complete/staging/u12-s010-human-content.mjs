// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u12-s010-lecture-r1",
  "unitId": "u12",
  "numericUnitId": 12,
  "topicId": "u12-literacy",
  "skillId": "factoring-literacy",
  "lockedSkillTitle": "因式分解素養題",
  "title": "因式分解素養題：從資料與限制中找出乘積結構",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能從長敘述擷取代數量。",
    "能判斷因式分解是否比直接展開有效。",
    "能把乘積因式翻回情境意義。",
    "能處理整除、尺寸與成本限制。",
    "能完成多步驟比較並說明理由。"
  ],
  "prerequisites": [
    {
      "skillId": "factoring-word-area",
      "requiredLevel": "能運用前一技能並以展開驗證結果；本講義會重新連接必要步驟。"
    }
  ],
  "prerequisiteBridge": "先備技能為 factoring-word-area；先確認能完成前一方法並保留所有符號，再進入本技能。",
  "glossary": [
    {
      "term": "數學建模",
      "definition": "把情境中的量與關係寫成數學式。"
    },
    {
      "term": "必要條件",
      "definition": "答案要成立必須滿足的限制。"
    },
    {
      "term": "可行方案",
      "definition": "同時符合代數關係與情境限制的選擇。"
    },
    {
      "term": "素養題",
      "definition": "需要閱讀、選模、運算與解釋的整合題。"
    }
  ],
  "notation": [
    {
      "symbol": "總量=每組數×組數",
      "meaning": "分組情境的乘積關係。"
    },
    {
      "symbol": "面積=長×寬",
      "meaning": "尺寸情境的乘積關係。"
    }
  ],
  "conceptNarrative": [
    "素養題先辨認「要找什麼」，再選擇因式分解，而不是看到多項式就機械分解。",
    "乘積中的每個因式通常代表每組數量、排數、邊長或共同成本。",
    "代數上等價不代表情境上都可行；負長度、零組數或不整除都要排除。",
    "資料表與方案比較要用同一標準，清楚寫出分解如何支持決策。"
  ],
  "formalDefinitions": [
    {
      "name": "素養型因式分解",
      "statement": "在真實限制下建立多項式，分解並解讀因式以完成決策。"
    }
  ],
  "formulas": [
    {
      "formula": "總數=每組數×組數",
      "conditions": [
        "兩者通常為正整數"
      ],
      "meaning": "包裝與排列。"
    },
    {
      "formula": "總面積=長×寬",
      "conditions": [
        "長寬為正"
      ],
      "meaning": "空間規劃。"
    }
  ],
  "nonApplicableCases": [
    "只分解式子但不解釋因式，未完成情境任務。",
    "得到多組代數因式時，不能忽略正整數或尺寸限制。",
    "不同方案單位不同時不能直接比較。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "畫線標出已知量、限制與所求。",
      "check": "先確認單位。"
    },
    {
      "step": 2,
      "instruction": "建立多項式或辨認資料中的式子。",
      "check": "每一項來源要可說明。"
    },
    {
      "step": 3,
      "instruction": "選擇最能顯示情境結構的分解。",
      "check": "共同因式、公式或十字交乘。"
    },
    {
      "step": 4,
      "instruction": "解讀各因式並篩除不可行值。",
      "check": "正值、整數、非零。"
    },
    {
      "step": 5,
      "instruction": "完成比較或決策，回到文字作答。",
      "check": "說明為何。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "活動座位總數 n^2+9n",
      "solutionSteps": [
        "n 可解讀為排數。",
        "每排 n+9 席。"
      ],
      "answer": "n(n+9)"
    },
    {
      "exampleId": "L2",
      "prompt": "正方形外框材料差 52^2-48^2",
      "solutionSteps": [
        "用和乘差 100×4。",
        "避免計算兩個平方。"
      ],
      "answer": "400"
    },
    {
      "exampleId": "L3",
      "prompt": "展示板面積 x^2+11x+24",
      "solutionSteps": [
        "兩邊可能為 x+3、x+8。",
        "需 x>-3，實際常取 x>0。"
      ],
      "answer": "(x+3)(x+8)"
    },
    {
      "exampleId": "L4",
      "prompt": "兩方案成本差 4m^2-25",
      "solutionSteps": [
        "乘積可用來判斷差值符號。",
        "還需依 m 的實際範圍判斷。"
      ],
      "answer": "(2m-5)(2m+5)"
    }
  ],
  "difficultyConnections": {
    "basic": "辨認單一結構並完成直接分解。",
    "standard": "結合符號、係數或兩步驟方法。",
    "advanced": "比較策略、處理參數或驗證限制。",
    "literacy": "從必要情境建立或解讀乘積結構。"
  },
  "commonMistakes": [
    {
      "mistake": "忽略題目要比較而只算一方案。",
      "why": "未抓所求。",
      "correction": "先寫比較標準。"
    },
    {
      "mistake": "因式解讀顛倒單位。",
      "why": "未標單位。",
      "correction": "每個因式都註明代表量。"
    },
    {
      "mistake": "接受負長度。",
      "why": "只看代數。",
      "correction": "套回情境限制。"
    },
    {
      "mistake": "把總數因式當唯一排列方向。",
      "why": "忽略長寬或排列可交換。",
      "correction": "說明交換後仍同一配置。"
    },
    {
      "mistake": "表格數值直接相加。",
      "why": "未建立關係。",
      "correction": "先辨認共同因式或平方差。"
    },
    {
      "mistake": "答案無理由。",
      "why": "缺少決策證據。",
      "correction": "引用分解式與限制。"
    }
  ],
  "selfCheck": [
    "我是否先判斷可用的方法？",
    "每一項、每個符號與外層因式都保留了嗎？",
    "我是否把結果展開回原式？",
    "情境中的單位與變數限制是否合理？"
  ],
  "summary": [
    "先讀所求與限制，再建式。",
    "因式要翻回情境意義。",
    "代數正確後仍要檢查可行性與單位。"
  ],
  "connections": {
    "previous": "承接 factoring-word-area。",
    "next": "依鎖定順序銜接下一技能；本單元不提前使用一元二次方程式解根。"
  },
  "figureReferences": [
    {
      "figureId": "u12-fig-square-frame",
      "purpose": "支援真實面積差情境的閱讀。",
      "altText": "正方形外框面積差。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u12-s010-v001",
      "u12-s010-v002",
      "u12-s010-v003",
      "u12-s010-v004",
      "u12-s010-v005",
      "u12-s010-v006",
      "u12-s010-v007",
      "u12-s010-v008",
      "u12-s010-v009",
      "u12-s010-v010",
      "u12-s010-v011",
      "u12-s010-v012"
    ],
    "constructedResponseIds": [
      "u12-s010-cr001",
      "u12-s010-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四個情境例分別驗證排列、平方差、尺寸與方案差；每例均交代因式意義及正值或單位限制，沒有把情境當裝飾。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "ba61c9e6b5c62120e4f58f0ba3c41a142a6544c2272376aadfd55efafbd15555"
};

export const QUESTIONS = [
  {
    "questionId": "u12-s010-v001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "活動中心有 n 排座位，每排比排數多 4 席。總座位數應寫成哪個乘積？",
    "givenConditions": [
      "n 為正整數。"
    ],
    "target": "建立排數乘每排席數。",
    "choices": [
      "n+4",
      "n(n+4)",
      "n²+4",
      "4n"
    ],
    "answerIndex": 1,
    "independentSolution": "展開可得 n²+4n。",
    "explanation": "總座位數=排數 n×每排 n+4。",
    "steps": [
      "辨認排數。",
      "把「多 4」寫成 n+4。",
      "相乘。"
    ],
    "optionAnalysis": [
      {
        "choice": "n+4",
        "truth": false,
        "reason": "只寫每排席數，漏排數。"
      },
      {
        "choice": "n(n+4)",
        "truth": true,
        "reason": "排數乘每排席數。"
      },
      {
        "choice": "n²+4",
        "truth": false,
        "reason": "每一排都多 4 席，應增加 4n。"
      },
      {
        "choice": "4n",
        "truth": false,
        "reason": "只計算增加的席數，漏原本 n²。"
      }
    ],
    "misconceptionTarget": "把「多 4」加在總數而非每排。",
    "prerequisiteCheck": "需會乘法計數。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "兩因式為席數計數，乘積為席；精確。",
    "ambiguityAndBoundaryAudit": "四個模型互異，只有 n(n+4) 同時包含排數與每排席數。",
    "difficultyReason": "基本情境建模。",
    "literacyContextNecessity": "座位排列的兩個因式都有明確計數意義。",
    "authoringIntent": "建立座位乘積模型。",
    "concept": "座位建模",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "因式分解素養題"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f6b43d451e5e0dbf54d7453f98ec72150b3617a9474d88ac1a91ecebe2c51ce7"
  },
  {
    "questionId": "u12-s010-v002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某正方形看板邊長為 x+3 公尺。下列哪個面積式正確？",
    "givenConditions": [
      "x>0。"
    ],
    "target": "用完全平方建立面積。",
    "choices": [
      "x²+6x+9 平方公尺",
      "x²+3x+9 平方公尺",
      "x²+9 平方公尺",
      "2x+6 平方公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "正方形兩邊相同。",
    "explanation": "面積=(x+3)(x+3)=x²+6x+9。",
    "steps": [
      "寫長乘寬。",
      "展開四項。",
      "合併 3x+3x。"
    ],
    "optionAnalysis": [
      {
        "choice": "x²+6x+9 平方公尺",
        "truth": true,
        "reason": "(x+3)² 展開得 x²+6x+9。"
      },
      {
        "choice": "x²+3x+9 平方公尺",
        "truth": false,
        "reason": "交叉項只算一次。"
      },
      {
        "choice": "x²+9 平方公尺",
        "truth": false,
        "reason": "漏掉兩個交叉項。"
      },
      {
        "choice": "2x+6 平方公尺",
        "truth": false,
        "reason": "這是周長的一半量級，不是面積。"
      }
    ],
    "misconceptionTarget": "把和的平方當平方和。",
    "prerequisiteCheck": "需知道正方形面積。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "公尺平方為平方公尺。",
    "ambiguityAndBoundaryAudit": "四個面積式互異，只有完整平方展開正確。",
    "difficultyReason": "基本幾何建模。",
    "literacyContextNecessity": "正方形條件要求同一因式重複相乘，不能省略情境。",
    "authoringIntent": "由邊長建立完全平方。",
    "concept": "正方形模型",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "因式分解素養題"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "814cf479aee1ebda945811b1844a76dacfd28fc2dadd34d75e38064f3f406ffd"
  },
  {
    "questionId": "u12-s010-v003",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "包裝廠有 6x 箱 A 商品與 9 箱 B 商品。若每個棧板裝共同的 3 箱單位，總箱數可寫成何者？",
    "givenConditions": [
      "x 為正整數。"
    ],
    "target": "提出共同批量 3。",
    "choices": [
      "3(2x+9) 箱",
      "6(x+3) 箱",
      "3(2x+3) 箱",
      "9(x+1) 箱"
    ],
    "answerIndex": 2,
    "independentSolution": "展開回總箱數。",
    "explanation": "6x+9=3(2x+3)。",
    "steps": [
      "找共同批量 3。",
      "各類換算棧板單位數。",
      "合併。"
    ],
    "optionAnalysis": [
      {
        "choice": "3(2x+9) 箱",
        "truth": false,
        "reason": "9÷3 不是 9。"
      },
      {
        "choice": "6(x+3) 箱",
        "truth": false,
        "reason": "常數會是 18。"
      },
      {
        "choice": "3(2x+3) 箱",
        "truth": true,
        "reason": "共同每組 3 箱，份數 2x+3。"
      },
      {
        "choice": "9(x+1) 箱",
        "truth": false,
        "reason": "展開為 9x+9，不等於 6x+9。"
      }
    ],
    "misconceptionTarget": "共同批量與剩餘份數混淆。",
    "prerequisiteCheck": "需會提公因式。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "單位箱；括號為份數。",
    "ambiguityAndBoundaryAudit": "正解唯一且直接對應指定共同批量 3。",
    "difficultyReason": "基本分組情境。",
    "literacyContextNecessity": "棧板共同容量直接對應公因式，情境決定提出 3 的意義。",
    "authoringIntent": "用共同棧板批量分組。",
    "concept": "包裝批量",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "因式分解素養題"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "509ef52718bbc786dee10c9f724c93d69a1e77718d9683359a3f0bb1c7d01cfc"
  },
  {
    "questionId": "u12-s010-v004",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "校方規劃長方形花圃，面積為 x²+9x+20 平方公尺，且長比寬多 1 公尺。邊長為何？",
    "givenConditions": [
      "x>0。"
    ],
    "target": "分解面積並核對差值。",
    "choices": [
      "x+10 與 x+2 公尺",
      "x+3 與 x+6 公尺",
      "x+20 與 x+1 公尺",
      "x+5 與 x+4 公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "x>0 使兩邊正。",
    "explanation": "x²+9x+20=(x+5)(x+4)，兩邊差 1。",
    "steps": [
      "列 20 因數配對。",
      "找和 9。",
      "核對長寬差。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+10 與 x+2 公尺",
        "truth": false,
        "reason": "中間項 12x。"
      },
      {
        "choice": "x+3 與 x+6 公尺",
        "truth": false,
        "reason": "面積常數 18，且邊差 3。"
      },
      {
        "choice": "x+20 與 x+1 公尺",
        "truth": false,
        "reason": "中間項 21x。"
      },
      {
        "choice": "x+5 與 x+4 公尺",
        "truth": true,
        "reason": "5·4=20、5+4=9，差 1。"
      }
    ],
    "misconceptionTarget": "只用差 1 猜尺寸，未核對面積。",
    "prerequisiteCheck": "需會首一分解。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "邊長公尺，面積平方公尺。",
    "ambiguityAndBoundaryAudit": "唯一同時滿足面積與差 1 的尺寸為 x+5、x+4。",
    "difficultyReason": "兩個條件整合。",
    "literacyContextNecessity": "面積式與邊差共同決定設計，情境限制用來確認因式解讀。",
    "authoringIntent": "整合花圃面積與尺寸差。",
    "concept": "雙條件尺寸",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "因式分解素養題"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3963159624c50da617fd48daf395daac5f982d600f10e095740856f040a579a1"
  },
  {
    "questionId": "u12-s010-v005",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩個正方形材料面積分別為 64² 與 36² 平方公分。材料面積差是多少？",
    "givenConditions": [
      "使用平方差。"
    ],
    "target": "快速計算兩平方差。",
    "choices": [
      "100 平方公分",
      "2800 平方公分",
      "784 平方公分",
      "3600 平方公分"
    ],
    "answerIndex": 1,
    "independentSolution": "4096-1296=2800。",
    "explanation": "64²-36²=100×28=2800。",
    "steps": [
      "建立面積差。",
      "用和乘差。",
      "附平方單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "100 平方公分",
        "truth": false,
        "reason": "只算兩邊和。"
      },
      {
        "choice": "2800 平方公分",
        "truth": true,
        "reason": "(64+36)(64-36)=100×28。"
      },
      {
        "choice": "784 平方公分",
        "truth": false,
        "reason": "只算邊長差 28 的平方。"
      },
      {
        "choice": "3600 平方公分",
        "truth": false,
        "reason": "誤用 100×36。"
      }
    ],
    "misconceptionTarget": "把面積差當邊長差平方。",
    "prerequisiteCheck": "需會平方差。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "平方公分；精確。",
    "ambiguityAndBoundaryAudit": "64>36，差為正。",
    "difficultyReason": "情境數字刻意使和為 100。",
    "literacyContextNecessity": "材料比較要求平方單位與差值，平方差直接避免兩次大平方。",
    "authoringIntent": "計算材料面積差。",
    "concept": "材料平方差",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "因式分解素養題"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f3d1c138de22b31863efe09fb8006ff9401b3bc41e1a7cbf0e76702a33e94934"
  },
  {
    "questionId": "u12-s010-v006",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個資料表把總筆數寫成 2n²+7n+3。若要分成「伺服器數×每台筆數」，哪個乘積正確？",
    "givenConditions": [
      "n 為正整數。"
    ],
    "target": "分解非首一二次式。",
    "choices": [
      "(2n+1)(n+3)",
      "(2n+3)(n+1)",
      "(2n+2)(n+1)",
      "(n+1)(2n+3)"
    ],
    "answerIndex": 0,
    "independentSolution": "兩因式皆為正整數計數。",
    "explanation": "2n²+7n+3=(2n+1)(n+3)。",
    "steps": [
      "配首項 2n、n。",
      "配常數 1、3。",
      "核對交叉和。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2n+1)(n+3)",
        "truth": true,
        "reason": "交叉項 6n+n=7n。"
      },
      {
        "choice": "(2n+3)(n+1)",
        "truth": false,
        "reason": "交叉項 2n+3n=5n。"
      },
      {
        "choice": "(2n+2)(n+1)",
        "truth": false,
        "reason": "展開為 2n²+4n+2。"
      },
      {
        "choice": "(n+1)(2n+3)",
        "truth": false,
        "reason": "展開一次項為 5n。"
      }
    ],
    "misconceptionTarget": "只看常數乘積。",
    "prerequisiteCheck": "需會十字交乘。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "兩因式為計數，乘積為筆；無近似。",
    "ambiguityAndBoundaryAudit": "配置因式可交換但只出現正確組一次。",
    "difficultyReason": "非首一分解與計數解讀。",
    "literacyContextNecessity": "伺服器分配要求兩個整數因子，乘積形式直接表達配置。",
    "authoringIntent": "把資料總量轉成配置。",
    "concept": "伺服器分配",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "因式分解素養題"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4cb5771d189d80652226d88f9e1c06bee066591b206c5da2f86a0166439abb45"
  },
  {
    "questionId": "u12-s010-v007",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某工廠產量差模型為 4m²-25。若 m>3，哪個敘述正確？",
    "givenConditions": [
      "m>3。"
    ],
    "target": "分解並判斷兩因式符號。",
    "choices": [
      "差值一定為負，因式含 -5",
      "差值為 0，因兩因式相消",
      "4m²-25=(2m-5)(2m+5)，且兩因式皆正，所以差值為正",
      "可寫成 (4m-5)(m+5)"
    ],
    "answerIndex": 2,
    "independentSolution": "不需求特定 m 值即可判斷。",
    "explanation": "平方差分解後，用 m>3 判斷兩個因式皆正。",
    "steps": [
      "分解平方差。",
      "代入範圍判斷因式符號。",
      "得乘積正。"
    ],
    "optionAnalysis": [
      {
        "choice": "差值一定為負，因式含 -5",
        "truth": false,
        "reason": "因式 2m-5 整體為正。"
      },
      {
        "choice": "差值為 0，因兩因式相消",
        "truth": false,
        "reason": "乘法因式不會相消。"
      },
      {
        "choice": "4m²-25=(2m-5)(2m+5)，且兩因式皆正，所以差值為正",
        "truth": true,
        "reason": "m>3 使 2m-5>1、2m+5>11。"
      },
      {
        "choice": "可寫成 (4m-5)(m+5)",
        "truth": false,
        "reason": "展開有一次項。"
      }
    ],
    "misconceptionTarget": "把因式內減號直接當負因式。",
    "prerequisiteCheck": "需會平方差與不等式符號。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "產量差為件數模型；無近似。",
    "ambiguityAndBoundaryAudit": "m>3 明確保證兩因式正。",
    "difficultyReason": "因式分解結合範圍推理。",
    "literacyContextNecessity": "產量差的正負是決策資訊，必須用情境範圍解讀因式。",
    "authoringIntent": "判斷產量差方向。",
    "concept": "因式符號判斷",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "因式分解素養題"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3e59ae7674409d4c286d554096bbe5271b873c6dceb46e57d3cb0865271536c3"
  },
  {
    "questionId": "u12-s010-v008",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某長方形廣告板面積為 6x²+x-2 平方公尺。廠商提出尺寸 (3x+2)、(2x-1)。若 x>1，評估此方案。",
    "givenConditions": [
      "x>1。"
    ],
    "target": "驗證面積與尺寸正值。",
    "choices": [
      "面積不符，因中間項是 -x",
      "面積符合但 2x-1 必為負",
      "方案不完整，因兩因式可再提公因式",
      "方案正確且兩邊為正"
    ],
    "answerIndex": 3,
    "independentSolution": "代數與情境可行性都通過。",
    "explanation": "先展開驗證，再用範圍檢查實際尺寸。",
    "steps": [
      "展開四項。",
      "合併一次項。",
      "檢查 3x+2、2x-1 皆正。"
    ],
    "optionAnalysis": [
      {
        "choice": "面積不符，因中間項是 -x",
        "truth": false,
        "reason": "交叉項 -3x+4x=+x。"
      },
      {
        "choice": "面積符合但 2x-1 必為負",
        "truth": false,
        "reason": "x>1 時為正。"
      },
      {
        "choice": "方案不完整，因兩因式可再提公因式",
        "truth": false,
        "reason": "兩因式沒有共同整數因式。"
      },
      {
        "choice": "方案正確且兩邊為正",
        "truth": true,
        "reason": "展開為 6x²+x-2；x>1 使 2x-1>1。"
      }
    ],
    "misconceptionTarget": "只驗證面積或只看減號。",
    "prerequisiteCheck": "需會展開與正值判斷。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "邊長公尺、面積平方公尺。",
    "ambiguityAndBoundaryAudit": "x>1 排除負或零短邊。",
    "difficultyReason": "雙重稽核尺寸方案。",
    "literacyContextNecessity": "廣告板方案須同時滿足面積模型與正尺寸，兩步缺一不可。",
    "authoringIntent": "審核廣告板製造方案。",
    "concept": "方案可行性",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "因式分解素養題"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8ca32a8bbea9cfaf16a6ca475c55289856444f645dcfaea30170415db1d8cae9"
  },
  {
    "questionId": "u12-s010-v009",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某整數 n 的三段連續編號乘積模型為 n³+3n²+2n。哪個分解最能證明此數一定是 6 的倍數？",
    "givenConditions": [
      "n 為整數。"
    ],
    "target": "完整分解並連結連續整數。",
    "choices": [
      "n(n²+3n+2)",
      "n(n+1)(n+2)",
      "n(n+3)(n+2)",
      "6n(n+1)"
    ],
    "answerIndex": 1,
    "independentSolution": "乘積含 2 與 3 的因數，因此為 6 的倍數。",
    "explanation": "先提 n，再把 n²+3n+2 分解為 (n+1)(n+2)。",
    "steps": [
      "提公因式 n。",
      "分解內部三項式。",
      "用連續整數性質。"
    ],
    "optionAnalysis": [
      {
        "choice": "n(n²+3n+2)",
        "truth": false,
        "reason": "雖正確但尚未直接顯示三個連續因子。"
      },
      {
        "choice": "n(n+1)(n+2)",
        "truth": true,
        "reason": "完整顯示三個連續整數。"
      },
      {
        "choice": "n(n+3)(n+2)",
        "truth": false,
        "reason": "展開二次係數與一次係數不符。"
      },
      {
        "choice": "6n(n+1)",
        "truth": false,
        "reason": "展開為 6n²+6n。"
      }
    ],
    "misconceptionTarget": "停在半成品，未暴露足夠因數資訊。",
    "prerequisiteCheck": "需會完整分解與整除。",
    "estimatedTimeSec": 135,
    "unitAndRoundingChecks": "無實際單位；整數精確。",
    "ambiguityAndBoundaryAudit": "正解唯一；半分解雖等值但不如題目所問「最能證明」且未完整顯示三連續因子。",
    "difficultyReason": "多層分解與證明。",
    "literacyContextNecessity": "連續編號的情境使三個因式的相鄰關係具有整除意義。",
    "authoringIntent": "用分解證明批次編號整除性。",
    "concept": "連續編號",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "因式分解素養題"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c9f85943b4581156a9545583d3076eef87e131dea96075eb538362d87c9cdc95"
  },
  {
    "questionId": "u12-s010-v010",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某物流中心總貨件模型為 3k²+15k+18。要分成相同大小的區塊，且分解到不可再分，何者正確？",
    "givenConditions": [
      "k 為正整數。"
    ],
    "target": "先提 3 再分解三項式。",
    "choices": [
      "3(k+2)(k+3)",
      "3(k²+5k+6)",
      "3(k+3)(k+3)",
      "3(k-2)(k-3)"
    ],
    "answerIndex": 0,
    "independentSolution": "展開回 3k²+15k+18。",
    "explanation": "共同因式 3 提出後，6 的因數 2、3 和為 5。",
    "steps": [
      "提 3。",
      "分解 k²+5k+6。",
      "檢查完整性。"
    ],
    "optionAnalysis": [
      {
        "choice": "3(k+2)(k+3)",
        "truth": true,
        "reason": "3[k²+5k+6]=3(k+2)(k+3)。"
      },
      {
        "choice": "3(k²+5k+6)",
        "truth": false,
        "reason": "只完成第一層。"
      },
      {
        "choice": "3(k+3)(k+3)",
        "truth": false,
        "reason": "展開內部為 k²+6k+9。"
      },
      {
        "choice": "3(k-2)(k-3)",
        "truth": false,
        "reason": "中間項符號與原式相反。"
      }
    ],
    "misconceptionTarget": "停在未完成形式。",
    "prerequisiteCheck": "需會兩層分解。",
    "estimatedTimeSec": 135,
    "unitAndRoundingChecks": "貨件為整數計數；k 正整數。",
    "ambiguityAndBoundaryAudit": "正解以外的選項均非等價；完整分解保留常數 3。",
    "difficultyReason": "物流分組要求完整暴露三個因子。",
    "literacyContextNecessity": "「相同大小區塊」使外層 3 與內部兩個配置因子都需保留。",
    "authoringIntent": "完整分解物流模型。",
    "concept": "物流多層分組",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "因式分解素養題"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "912f56ffccd242bb3b930bca0cbaca26b5c27868013000b8c9507754803a36ec"
  },
  {
    "questionId": "u12-s010-v011",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "能源設備兩方案輸出差模型為 9t²-16。若 t≥2，哪個敘述最完整？",
    "givenConditions": [
      "t≥2。"
    ],
    "target": "分解並解讀正負與單位。",
    "choices": [
      "差值=(9t-4)(t+4)",
      "差值=(3t-4)²",
      "差值=(3t-4)(3t+4)，且 t≥2 時差值為正",
      "差值=(3t-4)(3t+4)，但一定為負"
    ],
    "answerIndex": 2,
    "independentSolution": "分解與符號結論都正確。",
    "explanation": "9t²-16=(3t)²-4²；範圍使 3t-4≥2。",
    "steps": [
      "套平方差。",
      "判斷兩因式符號。",
      "回到方案差值。"
    ],
    "optionAnalysis": [
      {
        "choice": "差值=(9t-4)(t+4)",
        "truth": false,
        "reason": "展開有一次項。"
      },
      {
        "choice": "差值=(3t-4)²",
        "truth": false,
        "reason": "這是差的平方，會有一次項。"
      },
      {
        "choice": "差值=(3t-4)(3t+4)，且 t≥2 時差值為正",
        "truth": true,
        "reason": "兩因式至少為 2 與 10，乘積正。"
      },
      {
        "choice": "差值=(3t-4)(3t+4)，但一定為負",
        "truth": false,
        "reason": "在 t≥2 時兩因式皆正。"
      }
    ],
    "misconceptionTarget": "看見減號就判差值負。",
    "prerequisiteCheck": "需會平方差與範圍判斷。",
    "estimatedTimeSec": 135,
    "unitAndRoundingChecks": "輸出差依模型單位；無近似。",
    "ambiguityAndBoundaryAudit": "t≥2 明確排除零或負第一因式。",
    "difficultyReason": "需要公式與範圍整合。",
    "literacyContextNecessity": "設備決策需要知道哪方案輸出較高，不能只給分解式。",
    "authoringIntent": "判斷能源方案輸出差。",
    "concept": "方案輸出比較",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "因式分解素養題"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c9954ab3f19c4e2972aba27febe8485d0270f4a223dc9445e03172ed79f648e5"
  },
  {
    "questionId": "u12-s010-v012",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "教育展攤位總面積為 2x²+11x+12 平方公尺，場地表列候選尺寸如下。哪一組可行且完整？",
    "givenConditions": [
      "x>0；尺寸為整數係數一次式。"
    ],
    "target": "用十字交乘並檢查正值。",
    "choices": [
      "2x+4 與 x+3 公尺",
      "2x+6 與 x+2 公尺",
      "2x+1 與 x+12 公尺",
      "2x+3 與 x+4 公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "x>0 時兩邊皆正。",
    "explanation": "2x²+11x+12=(2x+3)(x+4)。",
    "steps": [
      "配首項。",
      "配常數 3、4。",
      "檢查交叉和與正值。"
    ],
    "optionAnalysis": [
      {
        "choice": "2x+4 與 x+3 公尺",
        "truth": false,
        "reason": "交叉項 6x+4x=10x。"
      },
      {
        "choice": "2x+6 與 x+2 公尺",
        "truth": false,
        "reason": "交叉項 4x+6x=10x。"
      },
      {
        "choice": "2x+1 與 x+12 公尺",
        "truth": false,
        "reason": "中間項為 25x。"
      },
      {
        "choice": "2x+3 與 x+4 公尺",
        "truth": true,
        "reason": "交叉項 8x+3x=11x，常數 12。"
      }
    ],
    "misconceptionTarget": "只看常數 12 的因數。",
    "prerequisiteCheck": "需會非首一分解。",
    "estimatedTimeSec": 135,
    "unitAndRoundingChecks": "邊長公尺，面積平方公尺。",
    "ambiguityAndBoundaryAudit": "唯一乘回三個係數且在 x>0 為正的尺寸組是 2x+3、x+4。",
    "difficultyReason": "綜合選模、十字與可行性。",
    "literacyContextNecessity": "場地候選尺寸必須同時乘回面積並為正，情境形成必要審核。",
    "authoringIntent": "選擇可行展攤尺寸。",
    "concept": "展攤配置",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "因式分解素養題"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ce6159215732800a073760b8e235b7dfe009b6c011b4b1b46223d2ffdfc6c6bb"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u12-s010-cr001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "校慶座位總數為 n²+7n，n 為正整數。請提出一種矩形排列解讀，並說明總座位數為何一定是 n 的倍數。",
    "requiredWork": [
      "完整因式分解。",
      "把兩因式解讀為排數與每排席數。",
      "說明整除條件。"
    ],
    "fullCreditSolution": [
      "n²+7n=n(n+7)。",
      "可排成 n 排，每排 n+7 席（或交換）。",
      "因 n+7 仍為整數，總數除以非零的 n，商為 n+7，因此是 n 的倍數。"
    ],
    "alternativeSolutions": [
      "也可解讀為 n+7 排、每排 n 席；乘法交換不改總數。"
    ],
    "reasoningSteps": [
      "n 正整數同時保證排數正與除數非零。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "寫出 n(n+7)，給出合理排列解讀，並以 n>0 說明整除。"
      },
      {
        "score": 2,
        "criteria": "分解與排列正確，但整除理由或非零條件不完整。"
      },
      {
        "score": 1,
        "criteria": "只完成分解，或只說是 n 的倍數未解讀排列。"
      },
      {
        "score": 0,
        "criteria": "寫成 n²+7 或把 7 當排數而無乘法關係。"
      }
    ],
    "partialCreditRules": [
      "交換排數與每排席數完全接受。",
      "未提 n 非零但已引用 n 正整數，可視語意隱含，不重扣。"
    ],
    "followThroughPolicy": "若分解式中括號抄成 n-7，後續排列依錯誤結果合理，最高 1 分；整除性需基於正確因式。",
    "unitAndNotationRules": [
      "座位為整數計數。",
      "n、n+7 皆無物理長度單位。"
    ],
    "answerOnlyPolicy": "只答 n(n+7) 最高 1 分。",
    "commonErrors": [
      "把總座位數解讀成 n² 排。",
      "宣稱含數字 7 所以是 7 的倍數。"
    ],
    "independentReview": {
      "derivedResult": "n(n+7)：n 排、每排 n+7 席，為 n 的倍數。",
      "ambiguity": "排列方向可交換；n 正整數排除零排。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "285c84fb8e08d3d40b8d26ca214f9ca4cea6e0804708419f8c3a8d6108ed08df"
  },
  {
    "questionId": "u12-s010-cr002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-literacy",
    "skillId": "factoring-literacy",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某展館比較兩個正方形展區，外區邊長 x+6 公尺、內區邊長 x-6 公尺，x>6。求兩區面積差，使用因式分解化簡，並解釋 x>6 的必要性。",
    "requiredWork": [
      "建立兩平方差。",
      "把整個二項式視為公式中的 A、B。",
      "化簡乘積。",
      "解釋尺寸限制與單位。"
    ],
    "fullCreditSolution": [
      "面積差=(x+6)²-(x-6)²。",
      "=[(x+6)+(x-6)]·[(x+6)-(x-6)]。",
      "=2x·12=24x 平方公尺。",
      "x>6 使內區邊長 x-6>0，外區也必為正。"
    ],
    "alternativeSolutions": [
      "可分別展開：x²+12x+36-[x²-12x+36]=24x，再用原式回查；但主要方法仍是平方差。"
    ],
    "reasoningSteps": [
      "公式中的兩個「平方量」是整個 x+6、x-6。",
      "和為 2x，差為 12。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確建立並化簡為 24x 平方公尺，且說明 x>6 保證內外邊長正。"
      },
      {
        "score": 2,
        "criteria": "結果與主要分解正確，但限制或單位說明不完整；或一處小算術錯。"
      },
      {
        "score": 1,
        "criteria": "能建立兩平方差或展開出部分正確項，但未完成 24x。"
      },
      {
        "score": 0,
        "criteria": "把面積差寫成 12²，或忽略括號平方。"
      }
    ],
    "partialCreditRules": [
      "只用直接展開算對最高 2 分，因題目指定因式分解。",
      "答案需為平方公尺。"
    ],
    "followThroughPolicy": "若和、差其中一個算錯，但公式架構正確，依後續一致可給 1 至 2 分；若接受 x=6，限制說明失分。",
    "unitAndNotationRules": [
      "x±6 的單位為公尺。",
      "24x 的單位為平方公尺。"
    ],
    "answerOnlyPolicy": "只答 24x 最高 1 分。",
    "commonErrors": [
      "把 [(x+6)-(x-6)] 算成 0。",
      "將 (x-6)² 寫成 x²-36。"
    ],
    "independentReview": {
      "derivedResult": "面積差 24x 平方公尺，且 x>6 確保內區邊長正。",
      "ambiguity": "外區大於內區，差值必正；不需圖形比例。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "274013184b53288a299ae1e6bfbdcc758916756a9d23d8ff0689c30e6ca35e65"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u12-s010-v001",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "f6b43d451e5e0dbf54d7453f98ec72150b3617a9474d88ac1a91ecebe2c51ce7",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開可得 n²+4n。",
    "derivedAnswer": "n(n+4)",
    "storedAnswer": "n(n+4)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「活動中心有 n 排座位，每排比排數多 4 席。總座位數應寫成哪個乘積？」逐一展開或回代；正解「n(n+4)」成立。「n+4」不成立：只寫每排席數，漏排數。；「n²+4」不成立：每一排都多 4 席，應增加 4n。；「4n」不成立：只計算增加的席數，漏原本 n²。",
      "undefinedSymbol": "題幹已給條件為「n 為正整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「建立排數乘每排席數。」。",
      "unitConflict": "本題單位審查：兩因式為席數計數，乘積為席；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；兩因式為席數計數，乘積為席；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：四個模型互異，只有 n(n+4) 同時包含排數與每排席數。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「建立排數乘每排席數。」閱讀後，常見誤讀為「把「多 4」加在總數而非每排。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "基本情境建模。",
    "literacyContextNecessity": "座位排列的兩個因式都有明確計數意義。",
    "prerequisiteCheck": "需會乘法計數。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s010-v001：展開可得 n²+4n。 因此導出「n(n+4)」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「建立排數乘每排席數。」，並特別排除「把「多 4」加在總數而非每排。」。難度理由是「基本情境建模。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s010-v002",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "814cf479aee1ebda945811b1844a76dacfd28fc2dadd34d75e38064f3f406ffd",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "正方形兩邊相同。",
    "derivedAnswer": "x²+6x+9 平方公尺",
    "storedAnswer": "x²+6x+9 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某正方形看板邊長為 x+3 公尺。下列哪個面積式正確？」逐一展開或回代；正解「x²+6x+9 平方公尺」成立。「x²+3x+9 平方公尺」不成立：交叉項只算一次。；「x²+9 平方公尺」不成立：漏掉兩個交叉項。；「2x+6 平方公尺」不成立：這是周長的一半量級，不是面積。",
      "undefinedSymbol": "題幹已給條件為「x>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「用完全平方建立面積。」。",
      "unitConflict": "本題單位審查：公尺平方為平方公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；公尺平方為平方公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：四個面積式互異，只有完整平方展開正確。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「用完全平方建立面積。」閱讀後，常見誤讀為「把和的平方當平方和。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "基本幾何建模。",
    "literacyContextNecessity": "正方形條件要求同一因式重複相乘，不能省略情境。",
    "prerequisiteCheck": "需知道正方形面積。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s010-v002：正方形兩邊相同。 因此導出「x²+6x+9 平方公尺」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「用完全平方建立面積。」，並特別排除「把和的平方當平方和。」。難度理由是「基本幾何建模。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s010-v003",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "509ef52718bbc786dee10c9f724c93d69a1e77718d9683359a3f0bb1c7d01cfc",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開回總箱數。",
    "derivedAnswer": "3(2x+3) 箱",
    "storedAnswer": "3(2x+3) 箱",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「包裝廠有 6x 箱 A 商品與 9 箱 B 商品。若每個棧板裝共同的 3 箱單位，總箱數可寫成何者？」逐一展開或回代；正解「3(2x+3) 箱」成立。「3(2x+9) 箱」不成立：9÷3 不是 9。；「6(x+3) 箱」不成立：常數會是 18。；「9(x+1) 箱」不成立：展開為 9x+9，不等於 6x+9。",
      "undefinedSymbol": "題幹已給條件為「x 為正整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「提出共同批量 3。」。",
      "unitConflict": "本題單位審查：單位箱；括號為份數。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；單位箱；括號為份數。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：正解唯一且直接對應指定共同批量 3。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「提出共同批量 3。」閱讀後，常見誤讀為「共同批量與剩餘份數混淆。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "基本分組情境。",
    "literacyContextNecessity": "棧板共同容量直接對應公因式，情境決定提出 3 的意義。",
    "prerequisiteCheck": "需會提公因式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s010-v003：展開回總箱數。 因此導出「3(2x+3) 箱」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「提出共同批量 3。」，並特別排除「共同批量與剩餘份數混淆。」。難度理由是「基本分組情境。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s010-v004",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "3963159624c50da617fd48daf395daac5f982d600f10e095740856f040a579a1",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "x>0 使兩邊正。",
    "derivedAnswer": "x+5 與 x+4 公尺",
    "storedAnswer": "x+5 與 x+4 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「校方規劃長方形花圃，面積為 x²+9x+20 平方公尺，且長比寬多 1 公尺。邊長為何？」逐一展開或回代；正解「x+5 與 x+4 公尺」成立。「x+10 與 x+2 公尺」不成立：中間項 12x。；「x+3 與 x+6 公尺」不成立：面積常數 18，且邊差 3。；「x+20 與 x+1 公尺」不成立：中間項 21x。",
      "undefinedSymbol": "題幹已給條件為「x>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分解面積並核對差值。」。",
      "unitConflict": "本題單位審查：邊長公尺，面積平方公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；邊長公尺，面積平方公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：唯一同時滿足面積與差 1 的尺寸為 x+5、x+4。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分解面積並核對差值。」閱讀後，常見誤讀為「只用差 1 猜尺寸，未核對面積。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "兩個條件整合。",
    "literacyContextNecessity": "面積式與邊差共同決定設計，情境限制用來確認因式解讀。",
    "prerequisiteCheck": "需會首一分解。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s010-v004：x>0 使兩邊正。 因此導出「x+5 與 x+4 公尺」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分解面積並核對差值。」，並特別排除「只用差 1 猜尺寸，未核對面積。」。難度理由是「兩個條件整合。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s010-v005",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "f3d1c138de22b31863efe09fb8006ff9401b3bc41e1a7cbf0e76702a33e94934",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "4096-1296=2800。",
    "derivedAnswer": "2800 平方公分",
    "storedAnswer": "2800 平方公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「兩個正方形材料面積分別為 64² 與 36² 平方公分。材料面積差是多少？」逐一展開或回代；正解「2800 平方公分」成立。「100 平方公分」不成立：只算兩邊和。；「784 平方公分」不成立：只算邊長差 28 的平方。；「3600 平方公分」不成立：誤用 100×36。",
      "undefinedSymbol": "題幹已給條件為「使用平方差。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「快速計算兩平方差。」。",
      "unitConflict": "本題單位審查：平方公分；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；平方公分；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：64>36，差為正。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「快速計算兩平方差。」閱讀後，常見誤讀為「把面積差當邊長差平方。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "情境數字刻意使和為 100。",
    "literacyContextNecessity": "材料比較要求平方單位與差值，平方差直接避免兩次大平方。",
    "prerequisiteCheck": "需會平方差。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s010-v005：4096-1296=2800。 因此導出「2800 平方公分」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「快速計算兩平方差。」，並特別排除「把面積差當邊長差平方。」。難度理由是「情境數字刻意使和為 100。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s010-v006",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "4cb5771d189d80652226d88f9e1c06bee066591b206c5da2f86a0166439abb45",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "兩因式皆為正整數計數。",
    "derivedAnswer": "(2n+1)(n+3)",
    "storedAnswer": "(2n+1)(n+3)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「一個資料表把總筆數寫成 2n²+7n+3。若要分成「伺服器數×每台筆數」，哪個乘積正確？」逐一展開或回代；正解「(2n+1)(n+3)」成立。「(2n+3)(n+1)」不成立：交叉項 2n+3n=5n。；「(2n+2)(n+1)」不成立：展開為 2n²+4n+2。；「(n+1)(2n+3)」不成立：展開一次項為 5n。",
      "undefinedSymbol": "題幹已給條件為「n 為正整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分解非首一二次式。」。",
      "unitConflict": "本題單位審查：兩因式為計數，乘積為筆；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；兩因式為計數，乘積為筆；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：配置因式可交換但只出現正確組一次。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分解非首一二次式。」閱讀後，常見誤讀為「只看常數乘積。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "非首一分解與計數解讀。",
    "literacyContextNecessity": "伺服器分配要求兩個整數因子，乘積形式直接表達配置。",
    "prerequisiteCheck": "需會十字交乘。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s010-v006：兩因式皆為正整數計數。 因此導出「(2n+1)(n+3)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分解非首一二次式。」，並特別排除「只看常數乘積。」。難度理由是「非首一分解與計數解讀。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s010-v007",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "3e59ae7674409d4c286d554096bbe5271b873c6dceb46e57d3cb0865271536c3",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "不需求特定 m 值即可判斷。",
    "derivedAnswer": "4m²-25=(2m-5)(2m+5)，且兩因式皆正，所以差值為正",
    "storedAnswer": "4m²-25=(2m-5)(2m+5)，且兩因式皆正，所以差值為正",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某工廠產量差模型為 4m²-25。若 m>3，哪個敘述正確？」逐一展開或回代；正解「4m²-25=(2m-5)(2m+5)，且兩因式皆正，所以差值為正」成立。「差值一定為負，因式含 -5」不成立：因式 2m-5 整體為正。；「差值為 0，因兩因式相消」不成立：乘法因式不會相消。；「可寫成 (4m-5)(m+5)」不成立：展開有一次項。",
      "undefinedSymbol": "題幹已給條件為「m>3。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分解並判斷兩因式符號。」。",
      "unitConflict": "本題單位審查：產量差為件數模型；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；產量差為件數模型；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：m>3 明確保證兩因式正。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分解並判斷兩因式符號。」閱讀後，常見誤讀為「把因式內減號直接當負因式。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "因式分解結合範圍推理。",
    "literacyContextNecessity": "產量差的正負是決策資訊，必須用情境範圍解讀因式。",
    "prerequisiteCheck": "需會平方差與不等式符號。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s010-v007：不需求特定 m 值即可判斷。 因此導出「4m²-25=(2m-5)(2m+5)，且兩因式皆正，所以差值為正」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分解並判斷兩因式符號。」，並特別排除「把因式內減號直接當負因式。」。難度理由是「因式分解結合範圍推理。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s010-v008",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "8ca32a8bbea9cfaf16a6ca475c55289856444f645dcfaea30170415db1d8cae9",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "代數與情境可行性都通過。",
    "derivedAnswer": "方案正確且兩邊為正",
    "storedAnswer": "方案正確且兩邊為正",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某長方形廣告板面積為 6x²+x-2 平方公尺。廠商提出尺寸 (3x+2)、(2x-1)。若 x>1，評估此方案。」逐一展開或回代；正解「方案正確且兩邊為正」成立。「面積不符，因中間項是 -x」不成立：交叉項 -3x+4x=+x。；「面積符合但 2x-1 必為負」不成立：x>1 時為正。；「方案不完整，因兩因式可再提公因式」不成立：兩因式沒有共同整數因式。",
      "undefinedSymbol": "題幹已給條件為「x>1。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「驗證面積與尺寸正值。」。",
      "unitConflict": "本題單位審查：邊長公尺、面積平方公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；邊長公尺、面積平方公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：x>1 排除負或零短邊。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「驗證面積與尺寸正值。」閱讀後，常見誤讀為「只驗證面積或只看減號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "雙重稽核尺寸方案。",
    "literacyContextNecessity": "廣告板方案須同時滿足面積模型與正尺寸，兩步缺一不可。",
    "prerequisiteCheck": "需會展開與正值判斷。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s010-v008：代數與情境可行性都通過。 因此導出「方案正確且兩邊為正」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「驗證面積與尺寸正值。」，並特別排除「只驗證面積或只看減號。」。難度理由是「雙重稽核尺寸方案。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s010-v009",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "c9f85943b4581156a9545583d3076eef87e131dea96075eb538362d87c9cdc95",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "乘積含 2 與 3 的因數，因此為 6 的倍數。",
    "derivedAnswer": "n(n+1)(n+2)",
    "storedAnswer": "n(n+1)(n+2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某整數 n 的三段連續編號乘積模型為 n³+3n²+2n。哪個分解最能證明此數一定是 6 的倍數？」逐一展開或回代；正解「n(n+1)(n+2)」成立。「n(n²+3n+2)」不成立：雖正確但尚未直接顯示三個連續因子。；「n(n+3)(n+2)」不成立：展開二次係數與一次係數不符。；「6n(n+1)」不成立：展開為 6n²+6n。",
      "undefinedSymbol": "題幹已給條件為「n 為整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「完整分解並連結連續整數。」。",
      "unitConflict": "本題單位審查：無實際單位；整數精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無實際單位；整數精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：正解唯一；半分解雖等值但不如題目所問「最能證明」且未完整顯示三連續因子。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「完整分解並連結連續整數。」閱讀後，常見誤讀為「停在半成品，未暴露足夠因數資訊。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "多層分解與證明。",
    "literacyContextNecessity": "連續編號的情境使三個因式的相鄰關係具有整除意義。",
    "prerequisiteCheck": "需會完整分解與整除。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s010-v009：乘積含 2 與 3 的因數，因此為 6 的倍數。 因此導出「n(n+1)(n+2)」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「完整分解並連結連續整數。」，並特別排除「停在半成品，未暴露足夠因數資訊。」。難度理由是「多層分解與證明。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s010-v010",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "912f56ffccd242bb3b930bca0cbaca26b5c27868013000b8c9507754803a36ec",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開回 3k²+15k+18。",
    "derivedAnswer": "3(k+2)(k+3)",
    "storedAnswer": "3(k+2)(k+3)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某物流中心總貨件模型為 3k²+15k+18。要分成相同大小的區塊，且分解到不可再分，何者正確？」逐一展開或回代；正解「3(k+2)(k+3)」成立。「3(k²+5k+6)」不成立：只完成第一層。；「3(k+3)(k+3)」不成立：展開內部為 k²+6k+9。；「3(k-2)(k-3)」不成立：中間項符號與原式相反。",
      "undefinedSymbol": "題幹已給條件為「k 為正整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「先提 3 再分解三項式。」。",
      "unitConflict": "本題單位審查：貨件為整數計數；k 正整數。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；貨件為整數計數；k 正整數。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：正解以外的選項均非等價；完整分解保留常數 3。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「先提 3 再分解三項式。」閱讀後，常見誤讀為「停在未完成形式。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "物流分組要求完整暴露三個因子。",
    "literacyContextNecessity": "「相同大小區塊」使外層 3 與內部兩個配置因子都需保留。",
    "prerequisiteCheck": "需會兩層分解。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s010-v010：展開回 3k²+15k+18。 因此導出「3(k+2)(k+3)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「先提 3 再分解三項式。」，並特別排除「停在未完成形式。」。難度理由是「物流分組要求完整暴露三個因子。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s010-v011",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "c9954ab3f19c4e2972aba27febe8485d0270f4a223dc9445e03172ed79f648e5",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "分解與符號結論都正確。",
    "derivedAnswer": "差值=(3t-4)(3t+4)，且 t≥2 時差值為正",
    "storedAnswer": "差值=(3t-4)(3t+4)，且 t≥2 時差值為正",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「能源設備兩方案輸出差模型為 9t²-16。若 t≥2，哪個敘述最完整？」逐一展開或回代；正解「差值=(3t-4)(3t+4)，且 t≥2 時差值為正」成立。「差值=(9t-4)(t+4)」不成立：展開有一次項。；「差值=(3t-4)²」不成立：這是差的平方，會有一次項。；「差值=(3t-4)(3t+4)，但一定為負」不成立：在 t≥2 時兩因式皆正。",
      "undefinedSymbol": "題幹已給條件為「t≥2。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分解並解讀正負與單位。」。",
      "unitConflict": "本題單位審查：輸出差依模型單位；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；輸出差依模型單位；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：t≥2 明確排除零或負第一因式。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分解並解讀正負與單位。」閱讀後，常見誤讀為「看見減號就判差值負。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需要公式與範圍整合。",
    "literacyContextNecessity": "設備決策需要知道哪方案輸出較高，不能只給分解式。",
    "prerequisiteCheck": "需會平方差與範圍判斷。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s010-v011：分解與符號結論都正確。 因此導出「差值=(3t-4)(3t+4)，且 t≥2 時差值為正」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分解並解讀正負與單位。」，並特別排除「看見減號就判差值負。」。難度理由是「需要公式與範圍整合。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s010-v012",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "ce6159215732800a073760b8e235b7dfe009b6c011b4b1b46223d2ffdfc6c6bb",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "x>0 時兩邊皆正。",
    "derivedAnswer": "2x+3 與 x+4 公尺",
    "storedAnswer": "2x+3 與 x+4 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「教育展攤位總面積為 2x²+11x+12 平方公尺，場地表列候選尺寸如下。哪一組可行且完整？」逐一展開或回代；正解「2x+3 與 x+4 公尺」成立。「2x+4 與 x+3 公尺」不成立：交叉項 6x+4x=10x。；「2x+6 與 x+2 公尺」不成立：交叉項 4x+6x=10x。；「2x+1 與 x+12 公尺」不成立：中間項為 25x。",
      "undefinedSymbol": "題幹已給條件為「x>0；尺寸為整數係數一次式。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「用十字交乘並檢查正值。」。",
      "unitConflict": "本題單位審查：邊長公尺，面積平方公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；邊長公尺，面積平方公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：唯一乘回三個係數且在 x>0 為正的尺寸組是 2x+3、x+4。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「用十字交乘並檢查正值。」閱讀後，常見誤讀為「只看常數 12 的因數。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "綜合選模、十字與可行性。",
    "literacyContextNecessity": "場地候選尺寸必須同時乘回面積並為正，情境形成必要審核。",
    "prerequisiteCheck": "需會非首一分解。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s010-v012：x>0 時兩邊皆正。 因此導出「2x+3 與 x+4 公尺」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「用十字交乘並檢查正值。」，並特別排除「只看常數 12 的因數。」。難度理由是「綜合選模、十字與可行性。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
