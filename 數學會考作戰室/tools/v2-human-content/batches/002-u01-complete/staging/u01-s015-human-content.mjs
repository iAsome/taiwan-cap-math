// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s015-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-literacy",
  "skillId": "integer-literacy-context",
  "title": "整數與科學記號的綜合情境應用：從資料到模型",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能從文字、表格與紀錄辨認基準和單位。",
    "能把多步情境轉成完整整數算式。",
    "能在距離、變化量與實際量之間作正確選擇。",
    "能判讀與運算科學記號資料。",
    "能檢查答案的方向、數量級與情境合理性。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-number-line-position",
      "requiredLevel": "能由數線讀取位置和移動，分辨坐標、位移與路程。"
    },
    {
      "skillId": "integer-absolute-value-distance",
      "requiredLevel": "能用絕對值求兩筆資料間的無方向差距。"
    },
    {
      "skillId": "integer-mixed-operations",
      "requiredLevel": "能依運算順序合併多次整數變化。"
    },
    {
      "skillId": "integer-scientific-notation",
      "requiredLevel": "能轉換、比較和運算標準科學記號。"
    }
  ],
  "glossary": [
    {
      "term": "數學模型",
      "definition": "用數、符號、算式或圖表表示真實情境中的關係。"
    },
    {
      "term": "已知量",
      "definition": "題目直接提供且可使用的資料。"
    },
    {
      "term": "未知量",
      "definition": "題目要求求出的量。"
    },
    {
      "term": "限制條件",
      "definition": "單位、基準、方向、範圍等不可忽略的規定。"
    },
    {
      "term": "合理性檢查",
      "definition": "由方向、大小與單位判斷答案是否符合情境。"
    }
  ],
  "notation": [
    {
      "symbol": "Δ",
      "meaning": "有時表示變化量；若題目未定義，不可自行使用。"
    },
    {
      "symbol": "×10ⁿ",
      "meaning": "科學記號中的數量級。"
    },
    {
      "symbol": "|a-b|",
      "meaning": "兩資料相差多少，不含方向。"
    }
  ],
  "conceptNarrative": [
    "素養題的情境資料必須參與解題。第一步不是立即運算，而是整理基準、單位、正方向與要問的量。",
    "同一組數據可以問不同問題：後值－前值得到帶號變化，|後值－前值| 得到相差多少，基準＋偏差得到實際量。",
    "多步題應先畫資料表或依時間順序列出每一筆變化，再建立一個完整算式。",
    "科學記號情境要同時檢查係數、指數與單位；答案數量級若不合理，通常表示小數點或指數方向錯誤。"
  ],
  "formalDefinitions": [
    {
      "name": "情境建模流程",
      "statement": "理解問題、整理資料、選擇關係、列式計算、解釋檢查。"
    },
    {
      "name": "資料一致性",
      "statement": "所有參與運算的量必須使用相同基準與相容單位。"
    }
  ],
  "formulas": [
    {
      "formula": "最後量＝起始量＋所有帶號變化",
      "conditions": [
        "各變化量依同一正方向記錄"
      ],
      "meaning": "處理連續變化。"
    },
    {
      "formula": "實際量＝基準量＋偏差",
      "conditions": [
        "單位一致"
      ],
      "meaning": "由相對紀錄還原實際值。"
    },
    {
      "formula": "相差＝|資料甲－資料乙|",
      "conditions": [
        "問的是無方向差距"
      ],
      "meaning": "比較兩筆資料。"
    }
  ],
  "nonApplicableCases": [
    "不能刪除情境後只保留一個與資料無關的算式；那不是真正的素養應用。",
    "表格中若有不同單位，不能直接相加。",
    "「總變化」與「最後值」不可混淆。",
    "科學記號若為近似資料，結果應保留合理精度，不得憑空增加有效位數。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "用自己的話重述問題。",
      "check": "題目要最後量、變化量、距離還是比較？"
    },
    {
      "step": 2,
      "instruction": "整理基準、方向、單位與時間順序。",
      "check": "資料能直接放在同一算式嗎？"
    },
    {
      "step": 3,
      "instruction": "選擇整數、絕對值或科學記號關係。",
      "check": "為何使用這個運算？"
    },
    {
      "step": 4,
      "instruction": "列出完整算式並逐步計算。",
      "check": "是否漏掉起始量或固定項？"
    },
    {
      "step": 5,
      "instruction": "把答案附單位翻回情境。",
      "check": "方向、大小、數量級合理嗎？"
    },
    {
      "step": 6,
      "instruction": "檢查另一種讀法。",
      "check": "題目文字是否可能造成第二答案？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "冷藏庫起始 -4°C，先降 3°C，再升 5°C，最後溫度？",
      "solutionSteps": [
        "以升溫為正、降溫為負。",
        "列式 -4+(-3)+5。",
        "結果 -2°C。"
      ],
      "answer": "-2°C。"
    },
    {
      "exampleId": "L2",
      "prompt": "河面基準高程 120 公尺，測站偏差 -7 公尺，實際高程？",
      "solutionSteps": [
        "偏差 -7 表示低於基準。",
        "120+(-7)=113。",
        "單位仍為公尺。"
      ],
      "answer": "113 公尺。"
    },
    {
      "exampleId": "L3",
      "prompt": "兩探測器距離分別為 3.2×10⁶ 公尺與 7.5×10⁵ 公尺，哪個較遠？",
      "solutionSteps": [
        "指數 6 大於 5。",
        "第一個數量級較大。",
        "因此 3.2×10⁶ 公尺較遠。"
      ],
      "answer": "第一個探測器。"
    },
    {
      "exampleId": "L4",
      "prompt": "帳戶 1,200 元，支出 450、收入 300、再支出 200，餘額？",
      "solutionSteps": [
        "支出記負、收入記正。",
        "1200-450+300-200。",
        "依序得 850 元。"
      ],
      "answer": "850 元。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "看到所有數字就全部相加。",
      "why": "沒有先判斷資料角色。",
      "correction": "標出起始量、偏差、距離與限制。"
    },
    {
      "mistake": "把總變化當最後值。",
      "why": "漏掉起始量。",
      "correction": "最後值＝起始值＋總變化。"
    },
    {
      "mistake": "問相差多少卻保留負號。",
      "why": "把變化量當距離。",
      "correction": "使用絕對差。"
    },
    {
      "mistake": "不同單位直接比較。",
      "why": "忽略換算。",
      "correction": "先統一單位。"
    },
    {
      "mistake": "科學記號只比係數。",
      "why": "忽略 10 的指數。",
      "correction": "正數先比指數。"
    },
    {
      "mistake": "答案沒有單位與情境解釋。",
      "why": "只停在計算結果。",
      "correction": "附單位並說明正負方向或實際意義。"
    }
  ],
  "selfCheck": [
    "我知道題目真正問什麼嗎？",
    "基準、方向與單位都整理了嗎？",
    "算式包含全部必要資料嗎？",
    "應用變化量還是距離？",
    "科學記號數量級合理嗎？",
    "答案已翻回情境嗎？"
  ],
  "summary": [
    "素養解題先整理資料再列式。",
    "不同問題對應不同關係：最後量、變化量、距離、實際量。",
    "單位與基準必須一致。",
    "答案要通過方向、大小與數量級檢查。"
  ],
  "connections": {
    "previous": "本技能整合 U01 的正負數、數線、絕對值、四則與科學記號。",
    "next": [
      "分數、比例、方程式與統計單元會延伸相同建模流程。",
      "正式模考會要求在較長文本中篩選必要資料。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s015-v001",
      "u01-s015-v002",
      "u01-s015-v003",
      "u01-s015-v004",
      "u01-s015-v005",
      "u01-s015-v006",
      "u01-s015-v007",
      "u01-s015-v008",
      "u01-s015-v009",
      "u01-s015-v010",
      "u01-s015-v011",
      "u01-s015-v012"
    ],
    "constructedResponseIds": [
      "u01-s015-cr001",
      "u01-s015-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐題辨認起始量、基準、帶號變化、無方向差距和科學記號位值；所有綜合例題只使用 U01 已教技能。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "608d0021d4fa52c18e80cb7544cdc952e79e9f7d3218f9977913f77c0e126e6f"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s015-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "冷凍庫起始溫度為 -5°C，升高 8°C 後，溫度是多少？",
    "choices": [
      "3°C",
      "-13°C",
      "8°C",
      "13°C"
    ],
    "answerIndex": 0,
    "explanation": "升高8記+8，-5+8=3°C。",
    "steps": [
      "起始-5。",
      "升高+8。",
      "結果3。"
    ],
    "optionAnalysis": [
      {
        "choice": "3°C",
        "truth": true,
        "reason": "-5+8=3°C。"
      },
      {
        "choice": "-13°C",
        "truth": false,
        "reason": "把升高當下降。"
      },
      {
        "choice": "8°C",
        "truth": false,
        "reason": "只寫變化量。"
      },
      {
        "choice": "13°C",
        "truth": false,
        "reason": "加絕對值但漏起始符號。"
      }
    ],
    "commonMistake": "把+8直接當最後溫度。",
    "concept": "最後量＝起始量＋帶號變化。",
    "tags": [
      "數與量",
      "整數與科學記號的綜合情境應用",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position",
      "integer-absolute-value-distance",
      "integer-mixed-operations",
      "integer-scientific-notation"
    ],
    "authoringIntent": "在溫度情境套用整數加法。",
    "literacyContextNecessity": "起始溫度與升高量都必要。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e6a772a8d0efc8962418f7da8030ff34b29c36a8e302cc225ed0532f53b2cb40"
  },
  {
    "questionId": "u01-s015-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "步道把入口記為 0 公里，向西為負。補給點在入口西方 6 公里，應記為何者？",
    "choices": [
      "+6 公里",
      "-6 公里",
      "0 公里",
      "6 公里且不需方向"
    ],
    "answerIndex": 1,
    "explanation": "向西被約定為負，所以位置記 -6 公里。",
    "steps": [
      "入口為0。",
      "西方是負方向。",
      "距離6，記-6。"
    ],
    "optionAnalysis": [
      {
        "choice": "+6 公里",
        "truth": false,
        "reason": "方向相反。"
      },
      {
        "choice": "-6 公里",
        "truth": true,
        "reason": "西方6公里=-6公里。"
      },
      {
        "choice": "0 公里",
        "truth": false,
        "reason": "是入口。"
      },
      {
        "choice": "6 公里且不需方向",
        "truth": false,
        "reason": "漏掉方向。"
      }
    ],
    "commonMistake": "只因距離為6就寫正6。",
    "concept": "位置紀錄由基準、方向與距離組成。",
    "tags": [
      "數與量",
      "整數與科學記號的綜合情境應用",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position",
      "integer-absolute-value-distance",
      "integer-mixed-operations",
      "integer-scientific-notation"
    ],
    "authoringIntent": "解讀步道里程正負約定。",
    "literacyContextNecessity": "入口基準與西負規則不可省略。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "27ed52975edb92f10ef013a5630903bf4b09a07f6f7623e7cc42d52891fa5759"
  },
  {
    "questionId": "u01-s015-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "帳戶餘額為 -200 元，存入 350 元後餘額是多少？",
    "choices": [
      "-550 元",
      "-150 元",
      "150 元",
      "550 元"
    ],
    "answerIndex": 2,
    "explanation": "-200+350=150元。",
    "steps": [
      "負餘額-200。",
      "存入+350。",
      "異號相加得150。"
    ],
    "optionAnalysis": [
      {
        "choice": "-550 元",
        "truth": false,
        "reason": "把存入當支出。"
      },
      {
        "choice": "-150 元",
        "truth": false,
        "reason": "只做絕對值差但符號錯。"
      },
      {
        "choice": "150 元",
        "truth": true,
        "reason": "350-200=150。"
      },
      {
        "choice": "550 元",
        "truth": false,
        "reason": "把絕對值相加。"
      }
    ],
    "commonMistake": "忽略350的絕對值較大，結果符號應為正。",
    "concept": "負餘額可由較大存款跨過0。",
    "tags": [
      "數與量",
      "整數與科學記號的綜合情境應用",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position",
      "integer-absolute-value-distance",
      "integer-mixed-operations",
      "integer-scientific-notation"
    ],
    "authoringIntent": "財務情境異號加法。",
    "literacyContextNecessity": "原負餘額與存入金額共同決定跨零結果。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8c62325af186180b52ad50a212ca5a2fbbddb301956fb767f9b25f81183933fc"
  },
  {
    "questionId": "u01-s015-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某日最低溫 -7°C、最高溫 4°C。日溫差是多少？",
    "choices": [
      "-11°C",
      "3°C",
      "7°C",
      "11°C"
    ],
    "answerIndex": 3,
    "explanation": "溫差=|4-(-7)|=11°C。",
    "steps": [
      "最高減最低。",
      "4+7=11。",
      "差距不帶負號。"
    ],
    "optionAnalysis": [
      {
        "choice": "-11°C",
        "truth": false,
        "reason": "溫差不可負。"
      },
      {
        "choice": "3°C",
        "truth": false,
        "reason": "只相減絕對值。"
      },
      {
        "choice": "7°C",
        "truth": false,
        "reason": "只取最低溫大小。"
      },
      {
        "choice": "11°C",
        "truth": true,
        "reason": "|4+7|=11°C。"
      }
    ],
    "commonMistake": "算7-4=3，忽略兩溫度分居0兩側。",
    "concept": "溫差是兩溫度的絕對差。",
    "tags": [
      "數與量",
      "整數與科學記號的綜合情境應用",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position",
      "integer-absolute-value-distance",
      "integer-mixed-operations",
      "integer-scientific-notation"
    ],
    "authoringIntent": "在氣象資料中使用距離。",
    "literacyContextNecessity": "最低、最高與「溫差」措辭共同決定絕對差。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cf2ece31f666b3ed2c51f30fa5f3bea9efae7fc0ee9128127eb233644ed5bbd4"
  },
  {
    "questionId": "u01-s015-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "生產目標為 1,000 件。甲線偏差 -35 件，乙線偏差 +20 件。兩線實際產量相差多少？",
    "choices": [
      "55 件",
      "15 件",
      "35 件",
      "20 件"
    ],
    "answerIndex": 0,
    "explanation": "甲965、乙1020，相差55。也可算|20-(-35)|=55。",
    "steps": [
      "還原或比較共同基準偏差。",
      "計算20+35。",
      "得55。"
    ],
    "optionAnalysis": [
      {
        "choice": "55 件",
        "truth": true,
        "reason": "|(+20)-(-35)|=55。"
      },
      {
        "choice": "15 件",
        "truth": false,
        "reason": "只做35-20。"
      },
      {
        "choice": "35 件",
        "truth": false,
        "reason": "只取甲偏差。"
      },
      {
        "choice": "20 件",
        "truth": false,
        "reason": "只取乙偏差。"
      }
    ],
    "commonMistake": "用偏差絕對值相減15。",
    "concept": "同基準兩側偏差的距離為絕對差。",
    "tags": [
      "數與量",
      "整數與科學記號的綜合情境應用",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position",
      "integer-absolute-value-distance",
      "integer-mixed-operations",
      "integer-scientific-notation"
    ],
    "authoringIntent": "比較兩條產線相對目標的實際差距。",
    "literacyContextNecessity": "共同目標與兩個帶號偏差共同決定產量差。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "088407905db8a1755ec86381a8d0d9eb9ae8a97a37549631fc66dd7c97ed7912"
  },
  {
    "questionId": "u01-s015-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料 A 為 3.2×10⁵，資料 B 為 4.1×10⁴。A-B 的標準科學記號為何？",
    "choices": [
      "2.79×10⁴",
      "2.79×10⁵",
      "3.61×10⁵",
      "7.3×10⁹"
    ],
    "answerIndex": 1,
    "explanation": "3.2×10⁵=320,000；4.1×10⁴=41,000；差279,000=2.79×10⁵。",
    "steps": [
      "統一位值。",
      "320000-41000=279000。",
      "轉2.79×10⁵。"
    ],
    "optionAnalysis": [
      {
        "choice": "2.79×10⁴",
        "truth": false,
        "reason": "少10倍。"
      },
      {
        "choice": "2.79×10⁵",
        "truth": true,
        "reason": "3.2e5-4.1e4=2.79e5。"
      },
      {
        "choice": "3.61×10⁵",
        "truth": false,
        "reason": "把係數相加。"
      },
      {
        "choice": "7.3×10⁹",
        "truth": false,
        "reason": "把科學記號相乘。"
      }
    ],
    "commonMistake": "直接做3.2-4.1並保留較大指數。",
    "concept": "不同指數加減先統一位值。",
    "tags": [
      "數與量",
      "整數與科學記號的綜合情境應用",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position",
      "integer-absolute-value-distance",
      "integer-mixed-operations",
      "integer-scientific-notation"
    ],
    "authoringIntent": "科學記號不同數量級相減。",
    "literacyContextNecessity": "A、B數量級與差值要求都參與運算。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "988d4027b51c29095ffc5ed56b7f7acd05980588d9a0593119d2e24deba56091"
  },
  {
    "questionId": "u01-s015-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "帳戶起始 500 元，連續 3 次各支出 180 元，之後收入 250 元。最後餘額為何？",
    "choices": [
      "-290 元",
      "790 元",
      "210 元",
      "1,290 元"
    ],
    "answerIndex": 2,
    "explanation": "500-3×180+250=500-540+250=210元。",
    "steps": [
      "三次支出540。",
      "500-540=-40。",
      "再加250得210。"
    ],
    "optionAnalysis": [
      {
        "choice": "-290 元",
        "truth": false,
        "reason": "漏收入或算錯。"
      },
      {
        "choice": "790 元",
        "truth": false,
        "reason": "把支出當收入。"
      },
      {
        "choice": "210 元",
        "truth": true,
        "reason": "500-540+250=210。"
      },
      {
        "choice": "1,290 元",
        "truth": false,
        "reason": "全部相加。"
      }
    ],
    "commonMistake": "先算500-180再乘3。",
    "concept": "重複支出先乘，再與起始與收入合併。",
    "tags": [
      "數與量",
      "整數與科學記號的綜合情境應用",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position",
      "integer-absolute-value-distance",
      "integer-mixed-operations",
      "integer-scientific-notation"
    ],
    "authoringIntent": "多步財務四則混合。",
    "literacyContextNecessity": "起始、支出次數、每次金額與收入全部必要。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4bbd40dbe04a0017bdbbd2badae928f2e40da7ca63391efe275a299b30b04270"
  },
  {
    "questionId": "u01-s015-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "冷庫以 -20°C 為起始值，三次調整依序為 +7°C、-5°C、+2°C。最後溫度為何？",
    "choices": [
      "-34°C",
      "-20°C",
      "-14°C",
      "-16°C"
    ],
    "answerIndex": 3,
    "explanation": "-20+7-5+2=-16°C。",
    "steps": [
      "-20+7=-13。",
      "-13-5=-18。",
      "-18+2=-16。"
    ],
    "optionAnalysis": [
      {
        "choice": "-34°C",
        "truth": false,
        "reason": "把所有變化取負。"
      },
      {
        "choice": "-20°C",
        "truth": false,
        "reason": "誤認總變化0。"
      },
      {
        "choice": "-14°C",
        "truth": false,
        "reason": "漏一項。"
      },
      {
        "choice": "-16°C",
        "truth": true,
        "reason": "-20+7-5+2=-16。"
      }
    ],
    "commonMistake": "只合併變化7-5+2=4，卻忘記加到起始-20。",
    "concept": "最後值等於起始值加全部帶號調整。",
    "tags": [
      "數與量",
      "整數與科學記號的綜合情境應用",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position",
      "integer-absolute-value-distance",
      "integer-mixed-operations",
      "integer-scientific-notation"
    ],
    "authoringIntent": "多段冷庫控制變化。",
    "literacyContextNecessity": "起始溫度與三次按順序調整皆不可省略。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c9b33b2347b65662cd04e9a95616e893800163fcfafd455660e1809f2460a727"
  },
  {
    "questionId": "u01-s015-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "工廠每天生產 2.5×10⁴ 個零件，連續生產 12 天。總產量的標準科學記號為何？",
    "choices": [
      "3.0×10⁵ 個",
      "3.0×10⁴ 個",
      "30×10⁵ 個",
      "1.45×10⁵ 個"
    ],
    "answerIndex": 0,
    "explanation": "2.5×12=30，所以30×10⁴=3.0×10⁵。",
    "steps": [
      "係數2.5×12=30。",
      "得到30×10⁴。",
      "標準化3.0×10⁵。"
    ],
    "optionAnalysis": [
      {
        "choice": "3.0×10⁵ 個",
        "truth": true,
        "reason": "12×2.5×10⁴=30×10⁴=3.0×10⁵。"
      },
      {
        "choice": "3.0×10⁴ 個",
        "truth": false,
        "reason": "漏10倍。"
      },
      {
        "choice": "30×10⁵ 個",
        "truth": false,
        "reason": "非標準且數值大10倍。"
      },
      {
        "choice": "1.45×10⁵ 個",
        "truth": false,
        "reason": "把2.5與12相加。"
      }
    ],
    "commonMistake": "算得30×10⁴後直接寫30×10⁵。",
    "concept": "科學記號乘整數後需重新標準化。",
    "tags": [
      "數與量",
      "整數與科學記號的綜合情境應用",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position",
      "integer-absolute-value-distance",
      "integer-mixed-operations",
      "integer-scientific-notation"
    ],
    "authoringIntent": "由每日科學記號產量求多日總量。",
    "literacyContextNecessity": "每日產量、天數與總產量要求共同決定乘法。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bde32732869f516f88ec2ecae4734c433094e7cd8f8c64c3e3de1db5e26929b0"
  },
  {
    "questionId": "u01-s015-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "倉庫數線上，A 區在 -8，B 區在 5，C 區在 -2。機器人從 A 到 B，再從 B 到 C。總路程是多少？",
    "choices": [
      "6 單位",
      "20 單位",
      "13 單位",
      "7 單位"
    ],
    "answerIndex": 1,
    "explanation": "AB=|5-(-8)|=13，BC=|-2-5|=7，總路程20。",
    "steps": [
      "第一段13。",
      "第二段7。",
      "相加20。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 單位",
        "truth": false,
        "reason": "是A到C的直接距離。"
      },
      {
        "choice": "20 單位",
        "truth": true,
        "reason": "13+7=20。"
      },
      {
        "choice": "13 單位",
        "truth": false,
        "reason": "只算第一段。"
      },
      {
        "choice": "7 單位",
        "truth": false,
        "reason": "只算第二段。"
      }
    ],
    "commonMistake": "用起終點A到C的距離6代替實際經過B的路程。",
    "concept": "總路程為各段絕對距離之和。",
    "tags": [
      "數與量",
      "整數與科學記號的綜合情境應用",
      "literacy"
    ],
    "estimatedTimeSec": "95",
    "prerequisiteSkillIds": [
      "integer-number-line-position",
      "integer-absolute-value-distance",
      "integer-mixed-operations",
      "integer-scientific-notation"
    ],
    "authoringIntent": "在倉庫路徑中區分路程與位移。",
    "literacyContextNecessity": "三區坐標與指定行走順序共同決定兩段路程。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2f0b37192a7b09e8a9bac1ab361da4389e4dc43ab2b49c5744afc63e88ffb178"
  },
  {
    "questionId": "u01-s015-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "山區測站上午高度偏差 -12 公尺，下午因地面調整先增加 7 公尺，再減少 3 公尺。若基準高程為 480 公尺，下午實際高程是多少？",
    "choices": [
      "492 公尺",
      "476 公尺",
      "472 公尺",
      "468 公尺"
    ],
    "answerIndex": 2,
    "explanation": "上午偏差-12，調整總變化+7-3=+4，下午偏差-8；實際高程480-8=472公尺。",
    "steps": [
      "下午偏差=-12+7-3=-8。",
      "加回基準480。",
      "得到472。"
    ],
    "optionAnalysis": [
      {
        "choice": "492 公尺",
        "truth": false,
        "reason": "把-12忽略並只加調整。"
      },
      {
        "choice": "476 公尺",
        "truth": false,
        "reason": "把總調整-4誤用。"
      },
      {
        "choice": "472 公尺",
        "truth": true,
        "reason": "480+(-12+7-3)=472。"
      },
      {
        "choice": "468 公尺",
        "truth": false,
        "reason": "把兩次調整都當減少。"
      }
    ],
    "commonMistake": "直接用480+7-3，漏掉上午原偏差-12。",
    "concept": "相對偏差先更新，再加回基準。",
    "tags": [
      "數與量",
      "整數與科學記號的綜合情境應用",
      "literacy"
    ],
    "estimatedTimeSec": "100",
    "prerequisiteSkillIds": [
      "integer-number-line-position",
      "integer-absolute-value-distance",
      "integer-mixed-operations",
      "integer-scientific-notation"
    ],
    "authoringIntent": "整合基準、初始偏差與兩次調整。",
    "literacyContextNecessity": "基準、上午偏差與下午兩次調整都必要。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "78523aeb7e73bc8aa39ec2323bd35462eb04304ae448ae9398bef68640361f3c"
  },
  {
    "questionId": "u01-s015-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "探測器 A 距離基地 4.2×10⁸ 公尺，B 距離 7.5×10⁷ 公尺。A 比 B 遠多少？",
    "choices": [
      "3.45×10⁷ 公尺",
      "4.95×10⁸ 公尺",
      "3.45×10¹⁵ 公尺",
      "3.45×10⁸ 公尺"
    ],
    "answerIndex": 3,
    "explanation": "4.2×10⁸-7.5×10⁷=4.2×10⁸-0.75×10⁸=3.45×10⁸公尺。",
    "steps": [
      "把B改0.75×10⁸。",
      "係數4.2-0.75=3.45。",
      "保留10⁸。"
    ],
    "optionAnalysis": [
      {
        "choice": "3.45×10⁷ 公尺",
        "truth": false,
        "reason": "少10倍。"
      },
      {
        "choice": "4.95×10⁸ 公尺",
        "truth": false,
        "reason": "把兩距離相加。"
      },
      {
        "choice": "3.45×10¹⁵ 公尺",
        "truth": false,
        "reason": "錯把指數相加。"
      },
      {
        "choice": "3.45×10⁸ 公尺",
        "truth": true,
        "reason": "(4.2-0.75)×10⁸=3.45×10⁸。"
      }
    ],
    "commonMistake": "直接做4.2-7.5並保留10⁸。",
    "concept": "不同指數相減先統一數量級。",
    "tags": [
      "數與量",
      "整數與科學記號的綜合情境應用",
      "literacy"
    ],
    "estimatedTimeSec": "100",
    "prerequisiteSkillIds": [
      "integer-number-line-position",
      "integer-absolute-value-distance",
      "integer-mixed-operations",
      "integer-scientific-notation"
    ],
    "authoringIntent": "比較兩個天文距離。",
    "literacyContextNecessity": "兩個探測器距離與「A比B遠多少」決定相減次序。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "08ab5a73eaa5c80c5c535dde1353de0edd082869889c4e5d36fe0c98b3fd51b2"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s015-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "冷鏈車起始溫度 -6°C。前 2 小時每小時升高 3°C，之後一次降溫 5°C。求總帶號變化量、最後溫度，以及起始與最後相差多少，並列完整算式。",
    "requiredWork": [
      "重複升溫使用乘法。",
      "最後溫度與總帶號變化分開。",
      "起始與最後相差多少使用絕對差。"
    ],
    "fullCreditSolution": [
      "總帶號變化=2×3-5=+1°C。",
      "最後溫度=-6+1=-5°C。",
      "起終溫差=|-5-(-6)|=1°C。"
    ],
    "alternativeSolutions": [
      "可列-6+3+3-5=-5。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "總變化+1、最後-5、起終差1與完整算式正確。"
      },
      {
        "score": 2,
        "criteria": "兩個主要量正確但一處說明略缺。"
      },
      {
        "score": 1,
        "criteria": "能正確列出大部分算式並求出一個量。"
      },
      {
        "score": 0,
        "criteria": "把每小時升高只算一次或完全忽略起始值。"
      }
    ],
    "scoringNotes": [
      "起始與最後相差多少不帶方向；總帶號變化量保留正號。"
    ],
    "commonErrors": [
      "漏乘2。",
      "總變化當最後溫度。",
      "降溫記正。"
    ],
    "independentReview": {
      "derivedResult": "總變化+1°C，最後-5°C，起終相差1°C。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "ccdd767b4709db134ae2478e8013e29ff3a2ee92fc093fb42ad36aecdbcd4b11"
  },
  {
    "questionId": "u01-s015-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-literacy",
    "skillId": "integer-literacy-context",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某研究站第一天傳回 1.8×10⁶ 位元，第二天比第一天少 4.5×10⁵ 位元，第三天是第二天的 2 倍。求第二天、第三天與三天總量，全部用標準科學記號。",
    "requiredWork": [
      "先統一第一、第二天的數量級。",
      "第三天使用乘法。",
      "三天總量需合計。"
    ],
    "fullCreditSolution": [
      "第二天=1.8×10⁶-0.45×10⁶=1.35×10⁶。",
      "第三天=2×1.35×10⁶=2.70×10⁶。",
      "總量=(1.8+1.35+2.70)×10⁶=5.85×10⁶位元。"
    ],
    "alternativeSolutions": [
      "可還原一般數計算，再轉回科學記號。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三個科學記號答案與過程全部正確。"
      },
      {
        "score": 2,
        "criteria": "三個答案主要正確但一處標準化或算術小錯。"
      },
      {
        "score": 1,
        "criteria": "正確求出第二天，並有合理後續方法。"
      },
      {
        "score": 0,
        "criteria": "不同指數直接加減且無可辨認方法。"
      }
    ],
    "scoringNotes": [
      "2.70×10⁶可寫2.7×10⁶。"
    ],
    "commonErrors": [
      "第二天寫-2.7×10⁶。",
      "第三天只加2。",
      "總量指數相加。"
    ],
    "independentReview": {
      "derivedResult": "第二天1.35×10⁶，第三天2.7×10⁶，總量5.85×10⁶位元。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "f44f0b3a86ca910dd1d6ba9f92af572b074f7b2f275fa764abffcc26c0c65d59"
  }
];

export const DRAWING_SPECS = [];
