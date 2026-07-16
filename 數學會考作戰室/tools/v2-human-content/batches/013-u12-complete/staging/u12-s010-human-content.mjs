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
    "資料表與方案比較要用同一標準，清楚寫出分解如何支持決策。",
    "素養題不以看到多項式就分解為目標，而是先讀清楚所求、單位與限制，再選擇能顯示情境結構的乘積形式。因式可能代表排數、每組數量、長寬或方案差的和因式與差因式；代數展開正確後，仍要檢查正值、整數、非零與單位是否可行。若要證明整除，分解應揭露需要的因數；若要比較面積或成本，則須把結果翻回同一量並用完整句子說明決策。"
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
      "prompt": "活動座位總數n²＋9n，解讀一種排列。",
      "solutionSteps": [
        "提出共同因式n，得n(n＋9)。",
        "將n解讀為排數，n＋9解讀為每排席數。",
        "檢查n為正整數時兩個計數量皆可行。"
      ],
      "answer": "n排、每排n＋9席",
      "why": "乘積形式直接呈現排數乘每排席數，比展開式更能說明配置；n為正整數也保證沒有零排、負排或非整數席數。"
    },
    {
      "exampleId": "L2",
      "prompt": "求正方形材料面積差52²－48²。",
      "solutionSteps": [
        "辨認為兩個平方的差。",
        "套公式得(52＋48)(52－48)。",
        "計算100×4＝400平方單位。"
      ],
      "answer": "400平方單位",
      "why": "平方差公式把兩個較大的平方運算改成和乘差，計算更短且保留面積差意義；結果仍是面積，所以必須使用平方單位。"
    },
    {
      "exampleId": "L3",
      "prompt": "展示板面積x²＋11x＋24，求可行邊長。",
      "solutionSteps": [
        "找乘積24且和11的3與8。",
        "分解為(x＋3)(x＋8)。",
        "依實際尺寸檢查兩因式都必須大於零。"
      ],
      "answer": "邊長可為x＋3與x＋8",
      "why": "常數因數配對還要同時符合一次項係數，不能只看乘積；將因式解讀為邊長後，再加入正值限制才是完整情境答案。"
    },
    {
      "exampleId": "L4",
      "prompt": "方案差4m²－25，且m＞3，判斷差值符號。",
      "solutionSteps": [
        "用平方差分解為(2m－5)(2m＋5)。",
        "由m＞3得兩個因式都為正。",
        "正數相乘為正，所以方案差值為正。"
      ],
      "answer": "差值為正",
      "why": "因式內出現減號不代表因式必為負，必須套入變數範圍；分解同時顯示兩個因式的符號，才能支持方案比較結論。"
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
  "contentSha256": "00bc8bfc0d223e3c02eae6c200e09389be59bd4d819005d26fce1fce9aa757ac"
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
    "explanation": "總座位數=排數 n×每排 n+4。 總座位數等於排數乘每排席數。排數是n，每排比排數多4席，所以每排為n＋4，乘積應寫成n(n＋4)；展開後是n²＋4n，可回查情境中的兩個量。",
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
    "misconceptionTarget": "把「多 4」加在總數而非每排。 把每排多四席誤加在總數末尾，沒有先寫出每排n加四。",
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
    "contentSha256": "e10167050355d692b33976ce9965628cb87f0971aeb9d556d5b72d9c91d3b412"
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
    "explanation": "面積=(x+3)(x+3)=x²+6x+9。 正方形長與寬都為x＋3，面積是(x＋3)²。完整展開得到x²＋3x＋3x＋9＝x²＋6x＋9平方公尺，不能只把x與3各自平方而漏掉兩個交叉項；兩個三x必須合併。",
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
    "misconceptionTarget": "把和的平方當平方和。 把和的平方誤當成平方和，遺漏兩個三x交叉項。",
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
    "contentSha256": "c9cb94b525007cfd1eed4152c55521ef39765e49a92f3216e406a1b69e452b5d"
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
    "explanation": "6x+9=3(2x+3)。 總箱數是6x＋9，兩項都有公因數3。分別除以3得到2x與3，所以可寫成3(2x＋3)箱；展開後回到6x＋9，外面的3表示共同裝箱單位，括號表示單位份數。",
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
    "misconceptionTarget": "共同批量與剩餘份數混淆。 提出三後未將九正確除以三，或把外部共同單位與括號份數混淆。",
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
    "contentSha256": "4761dd827dd053662af9f1bc1464403358c66928c71d8c28e46c1012cdfe8149"
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
    "explanation": "x²+9x+20=(x+5)(x+4)，兩邊差 1。 面積式要找乘積為20且和為9的兩數，得到4與5，因此分解為(x＋4)(x＋5)。兩邊相差1公尺，正好符合規格；面積與邊差兩個條件都必須檢查。",
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
    "misconceptionTarget": "只用差 1 猜尺寸，未核對面積。 只依兩邊相差一猜尺寸，沒有將候選邊長乘回原面積式。",
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
    "contentSha256": "6b93457635811a5f422224feed63356a24e5534d358f2f07638e31b067bb32c9"
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
    "explanation": "64²-36²=100×28=2800。 兩個面積的差為64²－36²，可用平方差公式化成(64＋36)(64－36)＝100×28＝2800。所求仍是兩塊材料的面積差，因此答案單位是平方公分，不是公分，量綱必須一致。",
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
    "misconceptionTarget": "把面積差當邊長差平方。 把兩個邊長的差二十八再平方，誤認為面積差。",
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
    "contentSha256": "bbc895b8a8eea3efc48dfa1c5843535a274b29ae50f5c2c11e12dcb8315cda31"
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
      "(2n+3)(n+2)"
    ],
    "answerIndex": 0,
    "independentSolution": "兩因式皆為正整數計數。",
    "explanation": "2n²+7n+3=(2n+1)(n+3)。 將2n²＋7n＋3分解時，首項配2n與n、常數配1與3，交叉項6n＋n恰為7n，所以正確乘積是(2n＋1)(n＋3)。展開每個候選並逐項比較，即可排除其餘三項，確認答案唯一。",
    "steps": [
      "配首項 2n、n。",
      "配常數 1、3。",
      "核對交叉和。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2n+1)(n+3)",
        "truth": true,
        "reason": "展開為2n²＋6n＋n＋3＝2n²＋7n＋3。"
      },
      {
        "choice": "(2n+3)(n+1)",
        "truth": false,
        "reason": "展開的一次項係數為5，不是7。"
      },
      {
        "choice": "(2n+2)(n+1)",
        "truth": false,
        "reason": "展開為2n²＋4n＋2，三個係數都不完全吻合。"
      },
      {
        "choice": "(2n+3)(n+2)",
        "truth": false,
        "reason": "一次項係數雖為7，但常數為6，不是3。"
      }
    ],
    "misconceptionTarget": "只看常數乘積。 只看兩常數的乘積為三，沒有核對兩個交叉乘積合併後必須為七n。",
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
    "contentSha256": "fd4aad172efcadb1a2d59191319a56f170a933c9a799e05a9d982da96bb1563d"
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
    "explanation": "平方差分解後，用 m>3 判斷兩個因式皆正。 4m²－25是(2m)²－5²，依平方差分解為(2m－5)(2m＋5)。當m＞3時，2m－5＞1且2m＋5＞11，兩因式都為正，所以其乘積與差值皆為正，符號結論明確。",
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
    "misconceptionTarget": "把因式內減號直接當負因式。 只看到因式中有減五便判定整個因式或乘積為負。",
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
    "contentSha256": "01878a107afb2430d486010979a98ab5a8a14c93672552a134f07e151e6a84e5"
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
    "explanation": "先展開驗證，再用範圍檢查實際尺寸。 展開廠商尺寸得6x²－3x＋4x－2＝6x²＋x－2，與面積完全吻合。又因x＞1，3x＋2與2x－1都嚴格為正，所以代數面積與實際尺寸可行性都通過。",
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
    "misconceptionTarget": "只驗證面積或只看減號。 只驗證面積式便忽略邊長正值，或看到二x減一就直接判負。",
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
    "contentSha256": "4e54e4be2c838ae7cd3eab5d1d8500a4204380fc2ddc482532b017b7c730d3ff"
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
    "explanation": "先提 n，再把 n²+3n+2 分解為 (n+1)(n+2)。 先提出公因式n，再把n²＋3n＋2分解為(n＋1)(n＋2)，得到三個連續整數n(n＋1)(n＋2)。連續三整數必含一個偶數與一個三的倍數，所以乘積一定是6的倍數。",
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
    "misconceptionTarget": "停在半成品，未暴露足夠因數資訊。 停在n乘二次式的半分解形式，沒有顯示連續三整數中的二與三因數。",
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
    "contentSha256": "8138d2199b5b12c2cb16add7d3bd0d0c45d17272aee6a6112edb41f64a2018b5"
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
    "explanation": "共同因式 3 提出後，6 的因數 2、3 和為 5。 三項都有公因數3，先提出得3(k²＋5k＋6)。括號內找乘積6、和5的2與3，再分解為3(k＋2)(k＋3)。三個因式都已不能在整數係數下繼續分解。",
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
    "misconceptionTarget": "停在未完成形式。 提出公因數三後便停止，沒有把括號內的二次三項式繼續分解。",
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
    "contentSha256": "d70e8d1ae5f24e1e0f0053b2d35e0552426bbc5fd323b4472a8a8ca24935a92a"
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
    "explanation": "9t²-16=(3t)²-4²；範圍使 3t-4≥2。 9t²－16是(3t)²－4²，平方差分解為(3t－4)(3t＋4)。當t≥2時，較小因式3t－4至少為2，另一因式也為正，因此兩因式乘積與方案差值都確定為正，結論完整。",
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
    "misconceptionTarget": "看見減號就判差值負。 看見原式或因式中的減號就判定差值一定為負，未套用t的範圍。",
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
    "contentSha256": "bb90a4931fee8e197ce86431ce569ae02378a5289a01d556b1e42f113fe13e53"
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
    "explanation": "2x²+11x+12=(2x+3)(x+4)。 首項2x²配成2x與x，常數12配成3與4；交叉項8x＋3x＝11x，因此分解為(2x＋3)(x＋4)。若x＞0，兩個邊長都為正，代數面積與場地尺寸皆可行，答案完整符合情境。",
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
    "misconceptionTarget": "只看常數 12 的因數。 只選常數乘積為十二的配對，沒有核對交叉項合併後必須為十一x。",
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
    "contentSha256": "794c378ed12233533e6b557f2026ea3e9f9fc5f53b3024503b23e71c211fdc49"
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
      "提出公因式n：n²＋7n＝n(n＋7)。兩因式可解讀為排數與每排席數。",
      "例如排成n排、每排n＋7席；也可交換成n＋7排、每排n席，總座位數不變。",
      "因n為正整數，n不為零且n＋7也是整數，總數除以n的商為n＋7，所以總座位數一定是n的倍數。"
    ],
    "alternativeSolutions": [
      "也可解讀為 n+7 排、每排 n 席；乘法交換不改總數。"
    ],
    "reasoningSteps": [
      "從兩個座位數項中提出共同因式n，得到乘積結構。",
      "把兩個因式分別解讀為排數與每排席數，並說明可交換。",
      "利用n為正整數確保除數非零且商為整數，完成倍數證明。"
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
      "把n平方誤解讀成n平方排，沒有將總數寫成兩個計數量的乘積。",
      "因式中出現數字七就宣稱是七的倍數，未依整除定義檢查。"
    ],
    "independentReview": {
      "derivedResult": "n(n+7)：n 排、每排 n+7 席，為 n 的倍數。",
      "ambiguity": "排列方向可交換；n 正整數排除零排。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "15337ff8ac7d21b3152b804035a7d4d1e5a85e441f70f4840874fc80ae707185"
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
      "兩區面積差為(x＋6)²－(x－6)²，把整個x＋6與x－6視為平方差公式中的兩個量。",
      "套用平方差得[(x＋6)＋(x－6)]·[(x＋6)－(x－6)]＝2x·12＝24x平方公尺。",
      "限制x＞6使內區邊長x－6嚴格為正，外區邊長x＋6也為正，因此兩個正方形尺寸皆可行。"
    ],
    "alternativeSolutions": [
      "可分別展開：x²+12x+36-[x²-12x+36]=24x，再用原式回查；但主要方法仍是平方差。"
    ],
    "reasoningSteps": [
      "先依正方形面積建立外區平方減內區平方。",
      "以平方差的和因式與差因式化簡，注意減去括號會改變符號。",
      "檢查內外邊長正值與面積單位，再回到情境作答。"
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
      "把(x＋6)減(x－6)算成零，忘記減號要分配到第二個括號。",
      "把(x－6)²誤寫成x²－36，遺漏負十二x交叉項。"
    ],
    "independentReview": {
      "derivedResult": "面積差 24x 平方公尺，且 x>6 確保內區邊長正。",
      "ambiguity": "外區大於內區，差值必正；不需圖形比例。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ca4e2f41308734d26c8c8b8394449c24cb1a7835920d5b00683e588cd3e1045e"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u12-s010-v001",
    "unitId": "u12",
    "skillId": "factoring-literacy",
    "contentSha256": "e10167050355d692b33976ce9965628cb87f0971aeb9d556d5b72d9c91d3b412",
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
    "contentSha256": "c9cb94b525007cfd1eed4152c55521ef39765e49a92f3216e406a1b69e452b5d",
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
    "contentSha256": "4761dd827dd053662af9f1bc1464403358c66928c71d8c28e46c1012cdfe8149",
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
    "contentSha256": "6b93457635811a5f422224feed63356a24e5534d358f2f07638e31b067bb32c9",
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
    "contentSha256": "bbc895b8a8eea3efc48dfa1c5843535a274b29ae50f5c2c11e12dcb8315cda31",
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
    "contentSha256": "fd4aad172efcadb1a2d59191319a56f170a933c9a799e05a9d982da96bb1563d",
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
      "secondCorrectAnswer": "針對題目「一個資料表把總筆數寫成 2n²+7n+3。若要分成「伺服器數×每台筆數」，哪個乘積正確？」逐一展開或回代；正解「(2n+1)(n+3)」成立。「(2n+3)(n+1)」不成立：交叉項 2n+3n=5n。；「(2n+2)(n+1)」不成立：展開為 2n²+4n+2。；「(2n+3)(n+2)」不成立：展開常數為 6，不是 3。",
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
    "contentSha256": "01878a107afb2430d486010979a98ab5a8a14c93672552a134f07e151e6a84e5",
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
    "contentSha256": "4e54e4be2c838ae7cd3eab5d1d8500a4204380fc2ddc482532b017b7c730d3ff",
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
    "contentSha256": "8138d2199b5b12c2cb16add7d3bd0d0c45d17272aee6a6112edb41f64a2018b5",
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
    "contentSha256": "d70e8d1ae5f24e1e0f0053b2d35e0552426bbc5fd323b4472a8a8ca24935a92a",
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
    "contentSha256": "bb90a4931fee8e197ce86431ce569ae02378a5289a01d556b1e42f113fe13e53",
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
    "contentSha256": "794c378ed12233533e6b557f2026ea3e9f9fc5f53b3024503b23e71c211fdc49",
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
