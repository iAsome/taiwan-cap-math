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
      "prompt": "以海平面為 0，燈塔頂端高 42 公尺、潛水員低 18 公尺，如何記錄？",
      "answer": "燈塔 +42 公尺；潛水員 −18 公尺。",
      "why": "兩個位置共用海平面這個基準，數字部分表示離基準的距離，符號表示方向。高於海平面採正號、低於海平面採負號，因此分別記 +42 與 −18 公尺。"
    },
    {
      "prompt": "商品標準重量為 500 克，實際 493 克，偏差是多少？",
      "answer": "偏差是 −7 克。",
      "why": "偏差必須用實際量減基準量，493−500=−7 克。算出的負號不是重量本身為負，而是說明實際商品比標準少 7 克；把 493 直接當偏差會混淆兩種量。"
    },
    {
      "prompt": "某帳戶以 0 元為基準，先記 +800 元，再記 −250 元，兩筆紀錄各代表什麼？",
      "answer": "第一筆增加 800 元；第二筆減少 250 元。",
      "why": "帳戶紀錄中的正負號描述餘額變化方向，+800 表示存入或收入而增加，−250 表示支出而減少。兩筆金額的大小仍分別是 800 與 250，不能把符號解讀成好壞。"
    },
    {
      "prompt": "測站以 20°C 為基準，紀錄偏差為 −6°C，實際溫度是多少？",
      "answer": "實際溫度是 14°C。",
      "why": "偏差 −6°C 表示比 20°C 基準低 6°C，不是實際溫度本身。依實際量＝基準量＋帶號偏差，20+(−6)=14°C，代回也確實比基準少 6°C。所以負號只描述相對方向，不能直接當成實際讀值。"
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
  "contentSha256": "d7b7a41321ab665a3471dc4dcfebe16698f20c2208ae7b8a9a5c2ca4d4c5b700",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "題目把海平面定為 0 公尺，因此位置在海平面上方記正號、下方記負號。潛水艇在下方 35 公尺，距離大小是 35、方向是負，所以完整帶號紀錄為 −35 公尺。",
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
    "contentSha256": "889676d00e3adcec424cfbcff2125ae46c602ad2af8ed1b8eb356937570bfbf5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "以餘額不變為基準時，存入款項會使餘額增加，因此變化方向應記為正。這一筆增加的金額是 500 元，所以帶號變化量為 +500 元；−500 元反而表示支出或減少。",
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
    "commonMistake": "把存入誤當成支出，將增加五百元錯記為負五百元。",
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
    "contentSha256": "af33e2f0953e1b68e5b06b1916945a9e71d8a8ac0e8027442d4a54501ea0b4ae",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "偏差要用實際量減去基準量，而不是直接抄實際重量。依題意計算 98−100=−2 克，負號表示零件比標準少 2 克，因此相對標準的偏差是 −2 克。",
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
    "commonMistake": "直接把實際重量九十八克當成相對標準的偏差，沒有先減基準。",
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
    "contentSha256": "6d8c776b270562e39c36016f506f6bd084e2ff41811f831747dd05c8dd0f6929",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "紀錄的 −6°C 是相對 20°C 基準的偏差，不是實際溫度。用實際量＝基準量＋偏差，可得 20+(−6)=14°C；代回檢查，14°C 確實比基準低 6°C，方向與題目給的負偏差完全一致。",
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
    "commonMistake": "把負六度的偏差直接當成實際溫度，忘記加回二十度基準。",
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
    "contentSha256": "f7104c33c597a7dcfdcf7ffdcacc9b9b2ddef9e37e71a241dec8dc91993f1e5f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "題目明定向東為正方向，因此相反的向西就是負方向。甲在基準點西方 8 公里，記為 −8 公里；乙在東方 3 公里，記為 +3 公里，兩個符號都要依同一約定判斷。",
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
    "contentSha256": "d34a0c83a2e4a93148680257fb364ae31b1d0754eff68ef29c953466ae2d434d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "最後溫度要把帶號變化量加到起始溫度，而不能只抄變化量。起始為 −4°C，升高 9°C 記作 +9°C，因此 −4+9=5°C；結果跨過 0°C 後停在 5°C，也確實比起始溫度高 9°C。",
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
    "commonMistake": "只把正九度當成最後溫度，漏算起始溫度負四度。",
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
    "contentSha256": "5268a3da67c31634d83d7137a83b32dc999fd9df1e4109af3b7f864d2d2827d0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "先還原兩人的實際長度：甲為 150+12=162 公分，乙為 150−7=143 公分。題目問相差多少，要用較大值減較小值，162−143=19 公分；共同基準不會另外算進差距。",
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
    "contentSha256": "e7d50137d1c6c5d2066c078e778d64dad006fa6cda263968f20de1f2af645ae3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "兩筆紀錄使用不同基準，不能直接比較 −5 與 +2。甲的實際值是 40+(−5)=35，乙的實際值是 35+2=37；還原後再比較可得 37−35=2，所以乙比甲大 2。這也說明偏差大小不等於實際值大小。",
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
    "contentSha256": "aaae5ac27b52d5a1239212aaa38e52f71606fa66619a743a243a18f52066e23c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "總變化要保留每一次校正的方向，依序列式為 −4+7+(−6)。先算 −4+7=3，再算 3−6=−3；結果為負表示三次校正合計使設備比原狀態減少 3 個單位。",
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
    "contentSha256": "1d87fcf9b23378e42984a526a05613cd6696461ef740b32e3285594080d074ba",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "標準溫度本身是 −18°C，必須分別加上感測器偏差。甲為 −18+3=−15°C，乙為 −18+(−2)=−20°C；因 −15 大於 −20，甲比乙高，溫差是 5°C。甲在標準上方、乙在標準下方，也與兩個偏差符號相符。",
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
    "contentSha256": "217da44e961fc70566d21d4af6f554729bdec573807fd3cd22c0876e8ddf67c1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "上午水位是 250−18=232 公分，傍晚水位是 250+7=257 公分。從上午到傍晚的變化為後值減前值，257−232=25 公分，正值表示上升；也可直接算 7−(−18)=25。兩種算法都反映水位跨過警戒基準。",
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
    "contentSha256": "48be17e33b3d0b7cc968a484fbe84cb9ef17b194d126ac735f5ef8c11acb3056",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "先把偏差加回共同預算：甲實際支出為 50,000+3,200=53,200 元，乙為 50,000−1,800=48,200 元。兩者相差 53,200−48,200=5,000 元。也可直接比較兩側偏差，3,200−(−1,800)=5,000；共同基準會在相減時抵消。",
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
    "contentSha256": "1cfde9d5501783e65d5f4d1368b787e01c66ba339d76cc20bcdb41d0f6fdd1d4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "偏差都用實際重量減標準重量。A 包為 492−500=−8 克，負號表示少於標準 8 克。",
      "B 包為 505−500=+5 克，正號表示多於標準 5 克，正號雖可省略但方向說明不能省略。",
      "C 包為 500−500=0 克，表示實際重量恰等於標準，既沒有高於也沒有低於標準。"
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
    "contentSha256": "a7678cdb02c779582078305257c5d88b4160f3eeeb9bc358135a27c0159d613a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "甲測站的紀錄是相對 100 公尺的偏差，因此甲點實際高度為 100+(−12)=88 公尺。",
      "乙測站使用另一個 80 公尺基準，乙點實際高度為 80+5=85 公尺，不能直接比較兩筆偏差。",
      "還原後 88>85，所以甲點較高；兩點的無方向高度差為 88−85=3 公尺。"
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
    "contentSha256": "cf480013844228bc86e190297a611adae3fe566664cbd70f70dd2c0ce886b786",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
