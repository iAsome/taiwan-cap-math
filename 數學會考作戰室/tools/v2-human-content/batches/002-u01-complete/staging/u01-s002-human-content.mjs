// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s002-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-basics",
  "skillId": "integer-positive-negative-meaning",
  "title": "正負數的意義：用基準和方向讀懂紀錄",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能先找出情境中的基準量。",
    "能依題目約定判斷正方向與負方向。",
    "能把「高於、低於、增加、減少」翻成帶正負號的數。",
    "能由帶正負號的紀錄還原實際量。",
    "能區分方向與距離大小。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-number-classification",
      "requiredLevel": "能辨認正數、負數與 0，並知道正負號是數值紀錄的一部分。"
    }
  ],
  "glossary": [
    {
      "term": "基準量",
      "definition": "被當作 0 的參考值，例如海平面、標準重量或預算額。"
    },
    {
      "term": "正方向",
      "definition": "題目約定用正號表示的方向，例如上升、收入或向東。"
    },
    {
      "term": "負方向",
      "definition": "與正方向相反，使用負號表示。"
    },
    {
      "term": "偏差",
      "definition": "實際量相對於基準量多出或少掉多少。"
    },
    {
      "term": "帶號數",
      "definition": "包含正號或負號，用來同時表示大小與方向的數。"
    }
  ],
  "notation": [
    {
      "symbol": "+a",
      "meaning": "相對基準沿正方向 a 個單位；正號有時可省略。"
    },
    {
      "symbol": "-a",
      "meaning": "相對基準沿負方向 a 個單位。"
    },
    {
      "symbol": "0",
      "meaning": "正好位於基準，沒有正負偏差。"
    }
  ],
  "conceptNarrative": [
    "正負號的核心是方向，不是好壞。收入常記正、支出常記負，但若題目另外約定，必須服從題目。",
    "同一個實際量可以因基準不同而有不同紀錄。海拔 80 公尺若以海平面為 0 記 +80；若以海拔 100 公尺的平台為 0，則記 -20。",
    "數字部分表示離基準多遠，符號表示在哪一側。+6 與 -6 的距離大小相同，但方向相反。",
    "將紀錄還原成實際量時，使用「實際量＝基準量＋帶號偏差」。"
  ],
  "formalDefinitions": [
    {
      "name": "正數紀錄",
      "statement": "相對於指定基準位在正方向的量，以正數表示。"
    },
    {
      "name": "負數紀錄",
      "statement": "相對於指定基準位在負方向的量，以負數表示。"
    },
    {
      "name": "零紀錄",
      "statement": "實際量等於基準量時，偏差記為 0。"
    }
  ],
  "formulas": [
    {
      "formula": "實際量＝基準量＋帶號偏差",
      "conditions": [
        "基準量與偏差使用相同單位",
        "正負方向已由題目明確約定"
      ],
      "meaning": "從相對紀錄回推實際數值。"
    },
    {
      "formula": "帶號偏差＝實際量－基準量",
      "conditions": [
        "先後次序不可顛倒"
      ],
      "meaning": "計算實際量相對基準多出或少掉多少。"
    }
  ],
  "nonApplicableCases": [
    "題目未說明基準或正方向時，不能自行假設。",
    "「下降 5」是變化量 -5，不一定表示最後位置是 -5。",
    "負號不表示數值的絕對大小較大，也不必然表示不利。",
    "不同單位不能直接相加，例如公尺與公分要先換算。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "圈出基準量並把它視為 0。",
      "check": "基準是海平面、標準值、起始量，還是其他參考？"
    },
    {
      "step": 2,
      "instruction": "找出題目約定的正方向。",
      "check": "上升、向東或收入是否明確被指定為正？"
    },
    {
      "step": 3,
      "instruction": "依方向決定正負號。",
      "check": "事件位在基準哪一側？"
    },
    {
      "step": 4,
      "instruction": "把距離大小與符號合併。",
      "check": "是否同時保留數值和單位？"
    },
    {
      "step": 5,
      "instruction": "把結果翻回原情境檢查。",
      "check": "負號是否真的對應題目中的低於、減少或反方向？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "以海平面為 0，燈塔頂端高 42 公尺、潛水員低 18 公尺，如何記錄？",
      "solutionSteps": [
        "海平面是基準 0。",
        "高於海平面屬正方向，所以燈塔記 +42 公尺。",
        "低於海平面屬負方向，所以潛水員記 -18 公尺。"
      ],
      "answer": "燈塔 +42 公尺；潛水員 -18 公尺。"
    },
    {
      "exampleId": "L2",
      "prompt": "商品標準重量為 500 克，實際 493 克，偏差是多少？",
      "solutionSteps": [
        "偏差＝實際量－基準量。",
        "493－500＝-7。",
        "負號表示少於標準。"
      ],
      "answer": "-7 克。"
    },
    {
      "exampleId": "L3",
      "prompt": "某帳戶以 0 元為基準，先記 +800 元，再記 -250 元，兩筆紀錄各代表什麼？",
      "solutionSteps": [
        "+800 表示收入或增加 800 元。",
        "-250 表示支出或減少 250 元。",
        "正負號描述方向，不是兩筆金額的大小。"
      ],
      "answer": "增加 800 元；減少 250 元。"
    },
    {
      "exampleId": "L4",
      "prompt": "測站以 20°C 為基準，紀錄為 -6°C，實際溫度是多少？",
      "solutionSteps": [
        "實際量＝20＋(-6)。",
        "20－6＝14。",
        "紀錄的 -6 是偏差，不是實際溫度。"
      ],
      "answer": "14°C。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把「低 5 公尺」寫成 +5。",
      "why": "只記住距離 5，忘記方向。",
      "correction": "低於基準應加負號，記 -5。"
    },
    {
      "mistake": "把負數解讀成一定不好。",
      "why": "把數學方向和價值判斷混在一起。",
      "correction": "負號只表示題目約定的反方向。"
    },
    {
      "mistake": "基準 100、紀錄 -8，直接說實際量是 -8。",
      "why": "混淆偏差與實際值。",
      "correction": "實際量是 100＋(-8)=92。"
    },
    {
      "mistake": "把下降 3 層當作最後在 -3 層。",
      "why": "忽略起始樓層。",
      "correction": "最後位置要用起點加變化量。"
    },
    {
      "mistake": "沒有依題目約定正方向。",
      "why": "套用生活慣例而未讀題。",
      "correction": "先找題目明示的正方向。"
    },
    {
      "mistake": "公尺與公分直接運算。",
      "why": "忽略單位。",
      "correction": "先統一單位再計算偏差。"
    }
  ],
  "selfCheck": [
    "我是否找出基準？",
    "我是否確認正方向？",
    "數字表示距離、符號表示方向嗎？",
    "紀錄是偏差還是實際量？",
    "單位是否一致？"
  ],
  "summary": [
    "正負數用來表示相對基準的兩個方向。",
    "實際量＝基準量＋帶號偏差。",
    "正負號不代表好壞。",
    "變化量與最後位置必須分開。"
  ],
  "connections": {
    "previous": "先備技能是數的分類，需知道正數、負數與 0。",
    "next": [
      "數線位置會把正負方向畫成左右位置。",
      "整數加減會把多次帶號變化合併。",
      "素養題會使用基準量與偏差解讀表格。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s002-v001",
      "u01-s002-v002",
      "u01-s002-v003",
      "u01-s002-v004",
      "u01-s002-v005",
      "u01-s002-v006",
      "u01-s002-v007",
      "u01-s002-v008",
      "u01-s002-v009",
      "u01-s002-v010",
      "u01-s002-v011",
      "u01-s002-v012"
    ],
    "constructedResponseIds": [
      "u01-s002-cr001",
      "u01-s002-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一重算基準量、帶號偏差與實際量；四個例題使用不同基準，正負方向、數值和單位均一致。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "64c64276815a62fa4f99a0eff11a0b4e3959afc0961f7b546d75659d4e83d67e"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s002-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "以海平面為 0 公尺，潛水艇位在海平面下 35 公尺，應記為何者？",
    "choices": [
      "-35 公尺",
      "+35 公尺",
      "35 公尺（不含方向）",
      "0 公尺"
    ],
    "answerIndex": 0,
    "explanation": "海平面下方是相對基準的負方向，距離為 35 公尺，所以帶號紀錄是 -35 公尺。",
    "steps": [
      "確認基準是海平面 0 公尺。",
      "「下方」代表負方向。",
      "把距離 35 與負號合併成 -35 公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "-35 公尺",
        "truth": true,
        "reason": "正確表示低於海平面 35 公尺。"
      },
      {
        "choice": "+35 公尺",
        "truth": false,
        "reason": "+35 表示高於海平面。"
      },
      {
        "choice": "35 公尺（不含方向）",
        "truth": false,
        "reason": "只寫 35 遺漏方向。"
      },
      {
        "choice": "0 公尺",
        "truth": false,
        "reason": "0 表示正好在海平面。"
      }
    ],
    "commonMistake": "只記距離 35 而漏掉「海平面下」的負方向。",
    "concept": "負數表示相對基準位在負方向。",
    "tags": [
      "數與量",
      "正負數的意義",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-classification"
    ],
    "authoringIntent": "把低於海平面的情境轉成負數紀錄。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "99e222739ddfe6dc26e145ec3d2011b0581fbdf41b4c970aba064098149866f6"
  },
  {
    "questionId": "u01-s002-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "以帳戶餘額不變為基準，存入 500 元的變化量應記為何者？",
    "choices": [
      "-500 元",
      "+500 元",
      "0 元",
      "+1 元"
    ],
    "answerIndex": 1,
    "explanation": "存入使帳戶餘額增加，若增加方向約定為正，變化量是 +500 元。",
    "steps": [
      "辨認事件是存入。",
      "存入使餘額增加。",
      "增加 500 元記為 +500 元。"
    ],
    "optionAnalysis": [
      {
        "choice": "-500 元",
        "truth": false,
        "reason": "-500 表示減少或支出。"
      },
      {
        "choice": "+500 元",
        "truth": true,
        "reason": "正確表示增加 500 元。"
      },
      {
        "choice": "0 元",
        "truth": false,
        "reason": "0 表示沒有變化。"
      },
      {
        "choice": "+1 元",
        "truth": false,
        "reason": "+1 與金額不符。"
      }
    ],
    "commonMistake": "把「存入」和「支出」方向弄反。",
    "concept": "增加量通常以正數表示。",
    "tags": [
      "數與量",
      "正負數的意義",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-classification"
    ],
    "authoringIntent": "辨認收入或存款的正方向。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "725bc423218c8d1d4a7825e26d7db6294f7756e9dc9d9ef9db0162c58e7a404d"
  },
  {
    "questionId": "u01-s002-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某零件以標準重量 100 克為基準，實際重量為 98 克。它相對標準的偏差為何？",
    "choices": [
      "+98 克",
      "-98 克",
      "-2 克",
      "+2 克"
    ],
    "answerIndex": 2,
    "explanation": "偏差＝實際重量－標準重量＝98－100＝-2 克，負號表示少於標準。",
    "steps": [
      "寫偏差＝98－100。",
      "計算得到 -2。",
      "保留單位克。"
    ],
    "optionAnalysis": [
      {
        "choice": "+98 克",
        "truth": false,
        "reason": "+98 是實際重量，不是偏差。"
      },
      {
        "choice": "-98 克",
        "truth": false,
        "reason": "-98 不是與標準的差。"
      },
      {
        "choice": "-2 克",
        "truth": true,
        "reason": "正確，少於標準 2 克。"
      },
      {
        "choice": "+2 克",
        "truth": false,
        "reason": "+2 表示重於標準。"
      }
    ],
    "commonMistake": "把實際重量 98 直接當作偏差。",
    "concept": "帶號偏差＝實際量－基準量。",
    "tags": [
      "數與量",
      "正負數的意義",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-classification"
    ],
    "authoringIntent": "由實際量與基準量求帶號偏差。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "883144913ec6de41fd20672488003e674d717d310b2f5c9739cb019b3a15f39e"
  },
  {
    "questionId": "u01-s002-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "測站以 20°C 為基準，某次紀錄的溫度偏差為 -6°C。實際溫度是多少？",
    "choices": [
      "-26°C",
      "-6°C",
      "26°C",
      "14°C"
    ],
    "answerIndex": 3,
    "explanation": "實際溫度＝基準溫度＋偏差＝20＋(-6)=14°C。-6°C 是偏差，不是實際值。",
    "steps": [
      "辨認 20°C 是基準。",
      "把偏差 -6°C 加到基準。",
      "20-6=14°C。"
    ],
    "optionAnalysis": [
      {
        "choice": "-26°C",
        "truth": false,
        "reason": "把基準與偏差錯誤相減且保留負號。"
      },
      {
        "choice": "-6°C",
        "truth": false,
        "reason": "只抄偏差。"
      },
      {
        "choice": "26°C",
        "truth": false,
        "reason": "把負偏差當正偏差。"
      },
      {
        "choice": "14°C",
        "truth": true,
        "reason": "正確還原實際溫度。"
      }
    ],
    "commonMistake": "把偏差 -6°C 誤當成溫度本身。",
    "concept": "實際量＝基準量＋帶號偏差。",
    "tags": [
      "數與量",
      "正負數的意義",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-classification"
    ],
    "authoringIntent": "從相對紀錄還原實際量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6757c0a6f1f80b0197f317450af6c93cd65e902ed1610e73538b6a1dae2772b8"
  },
  {
    "questionId": "u01-s002-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "地圖規定向東為正方向。甲地在基準點西方 8 公里，乙地在基準點東方 3 公里，兩地的帶號位置依序為何？",
    "choices": [
      "-8 公里、+3 公里",
      "+8 公里、-3 公里",
      "-8 公里、-3 公里",
      "+8 公里、+3 公里"
    ],
    "answerIndex": 0,
    "explanation": "向東為正，所以向西為負。甲在西方 8 公里記 -8，乙在東方 3 公里記 +3。",
    "steps": [
      "讀出向東為正。",
      "西方是負方向，甲記 -8。",
      "東方是正方向，乙記 +3。"
    ],
    "optionAnalysis": [
      {
        "choice": "-8 公里、+3 公里",
        "truth": true,
        "reason": "兩地方向與距離都正確。"
      },
      {
        "choice": "+8 公里、-3 公里",
        "truth": false,
        "reason": "把東西方向全部顛倒。"
      },
      {
        "choice": "-8 公里、-3 公里",
        "truth": false,
        "reason": "乙的東方位置符號錯。"
      },
      {
        "choice": "+8 公里、+3 公里",
        "truth": false,
        "reason": "甲的西方位置符號錯。"
      }
    ],
    "commonMistake": "未依題目約定，擅自把兩個位置都寫成正數。",
    "concept": "正方向由題目約定，反方向用負數。",
    "tags": [
      "數與量",
      "正負數的意義",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-classification"
    ],
    "authoringIntent": "依自訂正方向同時記錄兩個位置。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "73bd0a734e95034a3bf7ecb759afeb283c5554bf9f4d94caf22c9539bb5ce303"
  },
  {
    "questionId": "u01-s002-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某溫度紀錄起始為 -4°C，之後變化量為 +9°C。最後溫度為何？",
    "choices": [
      "-13°C",
      "5°C",
      "9°C",
      "13°C"
    ],
    "answerIndex": 1,
    "explanation": "最後溫度＝起始溫度＋變化量＝-4+9=5°C。",
    "steps": [
      "起始量是 -4°C。",
      "升高 9°C 記 +9°C。",
      "-4+9=5°C。"
    ],
    "optionAnalysis": [
      {
        "choice": "-13°C",
        "truth": false,
        "reason": "把 +9 當 -9。"
      },
      {
        "choice": "5°C",
        "truth": true,
        "reason": "正確合併起始量與變化。"
      },
      {
        "choice": "9°C",
        "truth": false,
        "reason": "只抄變化量。"
      },
      {
        "choice": "13°C",
        "truth": false,
        "reason": "把絕對值相加。"
      }
    ],
    "commonMistake": "把「變化量 +9」誤認為最後溫度 9°C。",
    "concept": "最後量＝起始量＋帶號變化。",
    "tags": [
      "數與量",
      "正負數的意義",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-classification"
    ],
    "authoringIntent": "區分起始量、變化量與最後量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3ed43eef2d34c1df1548ea4e6fa99c14cfcb7f60139c708facfe4610d89912b8"
  },
  {
    "questionId": "u01-s002-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某測量以 150 公分為基準。甲的偏差為 +12 公分，乙的偏差為 -7 公分。甲、乙實際長度相差多少？",
    "choices": [
      "5 公分",
      "12 公分",
      "19 公分",
      "169 公分"
    ],
    "answerIndex": 2,
    "explanation": "甲為 150+12=162 公分，乙為 150-7=143 公分，相差 162-143=19 公分。",
    "steps": [
      "還原甲：162 公分。",
      "還原乙：143 公分。",
      "求無方向差距 19 公分。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 公分",
        "truth": false,
        "reason": "只把兩偏差相加錯誤處理。"
      },
      {
        "choice": "12 公分",
        "truth": false,
        "reason": "只取甲偏差大小。"
      },
      {
        "choice": "19 公分",
        "truth": true,
        "reason": "正確，兩者分居基準兩側，相差 12+7=19。"
      },
      {
        "choice": "169 公分",
        "truth": false,
        "reason": "把基準重複加進差距。"
      }
    ],
    "commonMistake": "求兩者差距時把共同基準 150 也算進去。",
    "concept": "同基準兩側的偏差差距可由實際量或絕對差求得。",
    "tags": [
      "數與量",
      "正負數的意義",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-classification"
    ],
    "authoringIntent": "由相同基準下的正負偏差求實際差距。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7874877bedc05f1824f40a5d76b26a3307db26a4f34d5775e1af77ce3892f039"
  },
  {
    "questionId": "u01-s002-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲以 40 為基準，紀錄為 -5；乙以 35 為基準，紀錄為 +2。下列何者正確？",
    "choices": [
      "甲實際值比乙大 3",
      "甲、乙實際值相等",
      "乙實際值比甲大 7",
      "乙實際值比甲大 2"
    ],
    "answerIndex": 3,
    "explanation": "甲實際值 40-5=35；乙實際值 35+2=37，所以乙比甲大 2。不同基準不能直接比較 -5 與 +2。",
    "steps": [
      "還原甲為 35。",
      "還原乙為 37。",
      "37-35=2。"
    ],
    "optionAnalysis": [
      {
        "choice": "甲實際值比乙大 3",
        "truth": false,
        "reason": "甲不是較大。"
      },
      {
        "choice": "甲、乙實際值相等",
        "truth": false,
        "reason": "35 與 37 不相等。"
      },
      {
        "choice": "乙實際值比甲大 7",
        "truth": false,
        "reason": "7 是偏差間差，但基準不同不能直接使用。"
      },
      {
        "choice": "乙實際值比甲大 2",
        "truth": true,
        "reason": "正確比較還原後的實際值。"
      }
    ],
    "commonMistake": "直接比較兩個偏差，忽略它們使用不同基準。",
    "concept": "不同基準的相對紀錄要先還原成實際量。",
    "tags": [
      "數與量",
      "正負數的意義",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-classification"
    ],
    "authoringIntent": "辨認不同基準造成的比較陷阱。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ee10f82621f7be6c6aeba4e54e1db19ec599b100cc16374c3844b4d48189fbe6"
  },
  {
    "questionId": "u01-s002-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某設備連續三次校正的帶號變化依序為 -4、+7、-6。三次校正造成的總變化為何？",
    "choices": [
      "-3",
      "-17",
      "+3",
      "+9"
    ],
    "answerIndex": 0,
    "explanation": "總變化＝-4+7-6。先 -4+7=3，再 3-6=-3。",
    "steps": [
      "依序列出 -4+7+(-6)。",
      "前兩項合成 3。",
      "3+(-6)=-3。"
    ],
    "optionAnalysis": [
      {
        "choice": "-3",
        "truth": true,
        "reason": "正確總和。"
      },
      {
        "choice": "-17",
        "truth": false,
        "reason": "把絕對值全部相加並取負。"
      },
      {
        "choice": "+3",
        "truth": false,
        "reason": "符號方向相反。"
      },
      {
        "choice": "+9",
        "truth": false,
        "reason": "只加正變化與部分負變化。"
      }
    ],
    "commonMistake": "把各次變化的絕對值直接相加。",
    "concept": "多次帶號變化以整數加法合併。",
    "tags": [
      "數與量",
      "正負數的意義",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-classification"
    ],
    "authoringIntent": "整合三筆正負變化並判斷總方向。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "99a50d1216058c92da5ada05d1a0a3b557b87562a491707589fff43db8705338"
  },
  {
    "questionId": "u01-s002-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "冷鏈中心以 -18°C 為標準溫度。感測器甲顯示偏差 +3°C，感測器乙顯示偏差 -2°C。下列敘述何者正確？",
    "choices": [
      "甲為 -21°C，乙為 -16°C",
      "甲為 -15°C，乙為 -20°C，甲比乙高 5°C",
      "甲為 3°C，乙為 -2°C",
      "甲、乙都低於標準且相差 1°C"
    ],
    "answerIndex": 1,
    "explanation": "甲=-18+3=-15°C；乙=-18-2=-20°C。-15 比 -20 高 5°C。",
    "steps": [
      "以 -18°C 為共同基準。",
      "分別加上 +3 與 -2。",
      "比較 -15 與 -20，差 5°C。"
    ],
    "optionAnalysis": [
      {
        "choice": "甲為 -21°C，乙為 -16°C",
        "truth": false,
        "reason": "兩個偏差方向都顛倒。"
      },
      {
        "choice": "甲為 -15°C，乙為 -20°C，甲比乙高 5°C",
        "truth": true,
        "reason": "實際溫度與比較都正確。"
      },
      {
        "choice": "甲為 3°C，乙為 -2°C",
        "truth": false,
        "reason": "把偏差當實際溫度。"
      },
      {
        "choice": "甲、乙都低於標準且相差 1°C",
        "truth": false,
        "reason": "甲高於標準，且差距不是 1°C。"
      }
    ],
    "commonMistake": "只看偏差 +3、-2，沒有加回 -18°C 的標準溫度。",
    "concept": "相對偏差需加回基準，負溫度仍依數線比較。",
    "tags": [
      "數與量",
      "正負數的意義",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-number-classification"
    ],
    "authoringIntent": "判讀冷鏈標準與兩筆偏差資料。",
    "literacyContextNecessity": "冷鏈標準值、兩個感測器偏差與溫度安全比較缺一不可。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7b361bf445bcb709f329b1a9bec86c53da1cdf22a38540a277066b72df243978"
  },
  {
    "questionId": "u01-s002-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "河川警戒水位為 250 公分。上午紀錄為相對警戒值 -18 公分，傍晚紀錄為 +7 公分。從上午到傍晚，水位變化為何？",
    "choices": [
      "下降 11 公分",
      "上升 18 公分",
      "上升 25 公分",
      "上升 257 公分"
    ],
    "answerIndex": 2,
    "explanation": "上午實際 232 公分，傍晚 257 公分；後值減前值＝257-232=25 公分，為上升。也可直接算 +7-(-18)=25。",
    "steps": [
      "還原上午與傍晚，或直接比較偏差。",
      "計算後值－前值。",
      "正值 25 表示上升 25 公分。"
    ],
    "optionAnalysis": [
      {
        "choice": "下降 11 公分",
        "truth": false,
        "reason": "只把 18 與 7 相減。"
      },
      {
        "choice": "上升 18 公分",
        "truth": false,
        "reason": "只使用上午偏差。"
      },
      {
        "choice": "上升 25 公分",
        "truth": true,
        "reason": "正確跨過警戒基準的變化。"
      },
      {
        "choice": "上升 257 公分",
        "truth": false,
        "reason": "把傍晚實際水位誤當變化量。"
      }
    ],
    "commonMistake": "把「相差」算成 18-7=11，忽略兩筆紀錄位於基準兩側。",
    "concept": "同基準下的後偏差減前偏差等於實際變化量。",
    "tags": [
      "數與量",
      "正負數的意義",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-number-classification"
    ],
    "authoringIntent": "由警戒水位相對紀錄求跨基準的水位上升量。",
    "literacyContextNecessity": "警戒基準與上午、傍晚兩筆相對紀錄共同決定變化量。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "62d2f8d09c802cb7adb462dd4fcf8254810a4b7690e25fa1d6752d393e7eb127"
  },
  {
    "questionId": "u01-s002-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩部門都以預算 50,000 元為基準。甲部門實際支出偏差 +3,200 元，乙部門偏差 -1,800 元。兩部門實際支出相差多少？",
    "choices": [
      "1,400 元",
      "1,800 元",
      "3,200 元",
      "5,000 元"
    ],
    "answerIndex": 3,
    "explanation": "甲支出 53,200 元，乙支出 48,200 元，相差 5,000 元。共同基準在差距中抵消。",
    "steps": [
      "甲＝50000+3200。",
      "乙＝50000-1800。",
      "53200-48200=5000。"
    ],
    "optionAnalysis": [
      {
        "choice": "1,400 元",
        "truth": false,
        "reason": "3200-1800 的錯誤結果。"
      },
      {
        "choice": "1,800 元",
        "truth": false,
        "reason": "只取乙偏差大小。"
      },
      {
        "choice": "3,200 元",
        "truth": false,
        "reason": "只取甲偏差大小。"
      },
      {
        "choice": "5,000 元",
        "truth": true,
        "reason": "正確，兩偏差分居基準兩側，差 5000。"
      }
    ],
    "commonMistake": "看到共同基準相同就誤以為只要相減偏差絕對值 3200-1800。",
    "concept": "同基準兩側的實際差距是偏差的絕對差。",
    "tags": [
      "數與量",
      "正負數的意義",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-number-classification"
    ],
    "authoringIntent": "解讀預算偏差並比較兩部門實際支出。",
    "literacyContextNecessity": "預算基準、超支與節省偏差及實際支出比較都是必要資訊。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2bd6fc3ee4511d1fff3e49ebbe7232a5b49c892971898baf99408ddd0582b3ce"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s002-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某工廠用 500 克作為包裝標準。A、B、C 三包實際重量分別為 492 克、505 克、500 克。請寫出三包相對標準的帶號偏差，並解釋正負號。",
    "requiredWork": [
      "使用偏差＝實際重量－500 克。",
      "三包都要附單位。",
      "說明正號、負號與 0 的意義。"
    ],
    "fullCreditSolution": [
      "A：492-500=-8 克，表示少於標準 8 克。",
      "B：505-500=+5 克，表示多於標準 5 克。",
      "C：500-500=0 克，表示正好等於標準。"
    ],
    "alternativeSolutions": [
      "可用數線或「低於／高於標準」文字說明，但三個偏差必須相同。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三個偏差、單位與符號意義全部正確。"
      },
      {
        "score": 2,
        "criteria": "三個偏差正確但一處單位或文字解釋不完整；或只有兩包完整正確。"
      },
      {
        "score": 1,
        "criteria": "至少一包偏差與符號理由正確，且方法可辨認。"
      },
      {
        "score": 0,
        "criteria": "未能以實際量減基準，或三包皆錯。"
      }
    ],
    "scoringNotes": [
      "+5 前的正號可省略，但必須明確說明高於標準。",
      "只寫 492、505、500 不算偏差。"
    ],
    "commonErrors": [
      "把 A 寫成 +8。",
      "把 C 寫成 +500。",
      "三包都以實際重量作答案。"
    ],
    "independentReview": {
      "derivedResult": "A=-8克、B=+5克、C=0克。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "a3fb80f1534d88981c104d12b0d11b7459748fefb536d341de1d334378915334"
  },
  {
    "questionId": "u01-s002-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-positive-negative-meaning",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "甲測站以 100 公尺為基準，紀錄某點為 -12 公尺；乙測站以 80 公尺為基準，紀錄另一點為 +5 公尺。請求兩點實際高度，判斷哪一點較高，並求高多少。",
    "requiredWork": [
      "先分別還原實際高度。",
      "不得直接比較 -12 與 +5。",
      "答案須包含較高者與差距。"
    ],
    "fullCreditSolution": [
      "甲點實際高度＝100+(-12)=88 公尺。",
      "乙點實際高度＝80+5=85 公尺。",
      "甲點較高，88-85=3 公尺。"
    ],
    "alternativeSolutions": [
      "也可先列成 (100-12)-(80+5)=3，再指出甲較高。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩實際高度、較高者與 3 公尺差距全部正確，並指出基準不同。"
      },
      {
        "score": 2,
        "criteria": "方法正確且較高者正確，但有一個算術或單位小錯。"
      },
      {
        "score": 1,
        "criteria": "至少正確還原其中一點，並顯示不能直接比偏差。"
      },
      {
        "score": 0,
        "criteria": "直接以 +5 大於 -12 判乙較高，且未還原基準。"
      }
    ],
    "scoringNotes": [
      "若只答甲較高但無實際高度，最高 1 分。",
      "差距不得帶負號。"
    ],
    "commonErrors": [
      "直接比較偏差。",
      "把甲算成 112。",
      "把乙算成 75。"
    ],
    "independentReview": {
      "derivedResult": "甲88公尺、乙85公尺；甲高3公尺。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "becc610d9fa20a6a79007179bc03f1dbc6e981f42da57aa98fa849eba01c4b84"
  }
];

export const DRAWING_SPECS = [];
