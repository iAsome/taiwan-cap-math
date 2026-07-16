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
      "prompt": "冷藏庫起始 −4°C，先降 3°C，再升 5°C，最後溫度？",
      "answer": "−2°C。",
      "why": "降溫記為負變化、升溫記為正變化，依時間列式 −4+(−3)+5。先由 −4 降到 −7，再升 5 到 −2，所以最後溫度為 −2°C；不能只算兩次變化的淨值。"
    },
    {
      "prompt": "河面基準高程 120 公尺，測站偏差 −7 公尺，實際高程？",
      "answer": "113 公尺。",
      "why": "偏差 −7 公尺表示測站低於基準，不是高度本身。實際高程等於基準加偏差，120+(−7)=113 公尺；結果仍為正且略低於基準，與負偏差的情境一致。"
    },
    {
      "prompt": "兩探測器距離分別為 3.2×10⁶ 公尺與 7.5×10⁵ 公尺，哪個較遠？",
      "answer": "第一個探測器。",
      "why": "兩個距離都是正數，先比較 10 的指數；6 大於 5，所以 3.2×10⁶ 的數量級較大。也可把第二個改成 0.75×10⁶，直接比較 3.2 與 0.75，仍是第一個較遠。"
    },
    {
      "prompt": "帳戶 1,200 元，支出 450、收入 300、再支出 200，餘額？",
      "answer": "850 元。",
      "why": "支出記負、收入記正，完整算式為 1200−450+300−200。依序得到 750、1050、850，因此最後餘額是 850 元；每筆交易都要納入，不能只合併收入與支出差額。"
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
  "contentSha256": "521c4ec02950ac903656112eb9b5c5e941d1ca593ee790e3096a578317e8e7fd",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "起始溫度是 −5°C，升高 8°C 代表加入帶正號的變化量 +8°C，因此最後溫度為 −5+8=3°C。異號相加用 8−5=3，且較大絕對值來自正數，所以結果為正。",
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
    "commonMistake": "把升高八度的變化量直接當成最後溫度，忘記還要加上起始負五度。",
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
    "contentSha256": "76fe18150e5e983b64b735b78afaeb502e67e1bf8ed3b5d6c3d9adebc4e30995",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "題目把入口設為 0 公里，並明定向西為負方向。補給點在入口西方 6 公里，因此坐標應記為 −6 公里；負號表達方向，數字 6 則表示與入口相距六公里。",
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
    "commonMistake": "只看到距離六公里便寫成正六，沒有依題目約定保留向西的負方向。",
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
    "contentSha256": "fca9707da87cf2871d69f9bb839aa6ec443a654f49170a758f64dfadb2105e57",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "負餘額記為 −200 元，存入 350 元是正向變化，所以列式 −200+350。兩數異號，先算 350−200=150，再取絕對值較大的正 350 所帶正號，最後餘額為 150 元，所以選第三項。",
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
    "contentSha256": "5673fdb3d7876e990e62b761efce53a850e422abbcdc4e7d8ac33694ca449367",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "日溫差是最高溫與最低溫之間的距離，不帶方向。計算 |4−(−7)|=|4+7|=11°C；也可看成從 −7°C 升到 0°C 共 7°C，再升到 4°C 共 4°C，合計 11°C。溫差的單位仍為攝氏度，因此選十一度。",
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
    "commonMistake": "只用七減四得到三，忽略最低溫與最高溫分居零度兩側。",
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
    "contentSha256": "921234beecae342fb4d12083c931845495344b66412ca2bcc5645c6734024cd1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "甲線比目標少 35 件，實際產量為 1000−35=965 件；乙線比目標多 20 件，為 1020 件。兩線相差 1020−965=55 件，也可直接算偏差距離 |20−(−35)|=55。共同基準不影響兩者的差，故選五十五件。",
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
    "commonMistake": "將兩個偏差的絕對值相減成十五，沒有注意兩條生產線位於目標兩側。",
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
    "contentSha256": "250736fcb9f0eadbefd4fee0cb5be71179edd0e3906a30a8112def216ced335e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "相減前先統一數量級：4.1×10⁴=0.41×10⁵。於是 A−B=(3.2−0.41)×10⁵=2.79×10⁵。還原檢查是 320,000−41,000=279,000，數量級與答案一致。也可先還原為一般整數再相減，會得到相同的二十七萬九千，第二個選項正確。",
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
    "commonMistake": "未統一十的指數就直接用係數三點二減四點一，造成差值與數量級都錯。",
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
    "contentSha256": "03b5b985d6d11682492d65f61ee81300ae748932ae40089ed915ce7513138a50",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "三次各支出 180 元，總支出為 3×180=540 元。由起始 500 元扣除後成為 −40 元，再加入收入 250 元，得 −40+250=210 元，所以最後餘額為 210 元，第三個選項符合所有交易後的狀態。",
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
    "commonMistake": "先算五百減一次支出後再乘三，錯把起始餘額也重複計算三次。",
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
    "contentSha256": "efc86f57ce0c2e56254aa6aeff3ab5439ae77e7eaa3e9919deca06912d996856",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "依調整順序從 −20°C 開始：先加 7 得 −13°C，再減 5 得 −18°C，最後加 2 得 −16°C。三次調整的總變化雖是 +4°C，仍須加回起始溫度才能得到最後值，所以選第四項。",
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
    "contentSha256": "ad8a12306d9c5d49f8e9b2b0686674c8f475f80876ae1a70913c22acb9d1121c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "每天生產 2.5×10⁴ 個，十二天的總量是 12×2.5×10⁴=30×10⁴ 個。係數 30 不符合標準科學記號，改寫為 3.0×10 並合併後得到 3.0×10⁵ 個。還原後是三十萬個，也可核對十二天的平均產量未改變。",
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
    "commonMistake": "算到三十乘十的四次方後直接把指數改五，卻沒有把係數同步縮小十倍。",
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
    "contentSha256": "49373b5a2dcdda31f8abb38f58cbe1a59e121cb44bbab124b8eb53cd9e245c7f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "機器人實際經過 B，總路程要分段相加。A 到 B 為 |5−(−8)|=13 單位，B 到 C 為 |−2−5|=7 單位，所以總路程 13+7=20 單位；不能只算 A 到 C 的直接距離，第二個選項才包含繞經 B 的兩段。",
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
    "contentSha256": "84e5e7c41a16002eb93076a93ebf0b15b3ce189c74dfc8ff00e8b6da3dfdc0f4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "上午偏差是 −12 公尺，下午先增加 7、再減少 3，故下午偏差為 −12+7−3=−8 公尺。實際高程等於基準加偏差，480+(−8)=472 公尺，因此第三個選項正確。",
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
    "commonMistake": "只把下午增加七與減少三套在基準上，漏掉上午已有的負十二公尺偏差。",
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
    "contentSha256": "1f49e4776abf656d36281a1ff144fa3b43c9c26821628dea16d60a0c8567b1f9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "先把 B 的距離改成與 A 相同的數量級：7.5×10⁷=0.75×10⁸。兩者相減為 (4.2−0.75)×10⁸=3.45×10⁸ 公尺，係數 3.45 已符合標準科學記號。還原後可用四億二千萬減七千五百萬檢查，仍得三億四千五百萬公尺。",
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
    "commonMistake": "未先統一十的指數就直接相減四點二與七點五，得到錯誤的負係數。",
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
    "contentSha256": "bed7af35fff3361240bae1d4986f6ee31f602449b6ac646aa2364989b220a96f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "前兩小時每小時升高 3°C，共升高 2×3=6°C；之後降溫 5°C，所以總帶號變化為 6−5=+1°C。",
      "最後溫度要把總變化加回起始值：−6+(+1)=−5°C，不能把 +1°C 直接當成最後溫度。",
      "起始與最後相差多少問的是無方向距離，因此計算 |−5−(−6)|=|1|=1°C。"
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
      "只計算一次升高 3°C，漏掉題目說前兩小時每小時都升高。",
      "把總帶號變化 +1°C 當作最後溫度，沒有加回起始的 −6°C。",
      "把最後一次降溫記成 +5°C，因而同時算錯總變化與最後溫度。"
    ],
    "independentReview": {
      "derivedResult": "總變化+1°C，最後-5°C，起終相差1°C。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "9a1267a013482d41cc53bf8a26f9b15d2e07f31f5e33526106af80209a76b358",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "先統一數量級：4.5×10⁵=0.45×10⁶，所以第二天為 (1.8−0.45)×10⁶=1.35×10⁶ 位元。",
      "第三天是第二天的 2 倍，故 2×1.35×10⁶=2.70×10⁶ 位元；係數仍符合標準範圍。",
      "三天總量為 (1.8+1.35+2.70)×10⁶=5.85×10⁶ 位元，三項指數相同才能直接相加係數。"
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
      "第二天相減前未統一數量級，直接以 1.8−4.5 得到負的資料量。",
      "把第三天是第二天的兩倍誤讀成加 2，寫成 1.35×10⁶+2。",
      "合計三天資料量時把三個指數六相加，誤將結果寫成 10¹⁸ 量級。"
    ],
    "independentReview": {
      "derivedResult": "第二天1.35×10⁶，第三天2.7×10⁶，總量5.85×10⁶位元。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "ed9a3f11f93b2f2cb9c540a345559cab8f74a9aa86777e10d54ac7749cce0a9c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
