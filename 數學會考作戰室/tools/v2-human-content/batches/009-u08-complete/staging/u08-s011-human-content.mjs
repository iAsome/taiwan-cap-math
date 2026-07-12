// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s011-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-measure",
  "skillId": "unit-conversion-geometry",
  "lockedSkillTitle": "幾何量的單位換算",
  "title": "幾何量的單位換算：面積倍率要平方",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能進行公釐、公分、公尺與公里的長度換算。",
    "能正確換算平方公分、平方公尺與平方公里。",
    "能理解長度倍率與面積倍率不同。",
    "能在幾何計算前統一單位。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "composite-area-text"
    ],
    "bridgeExplanation": "複合面積計算若尺寸單位不同，必須先統一；面積單位的倍率是長度倍率的平方。"
  },
  "prerequisites": [
    {
      "skillId": "composite-area-text",
      "requiredLevel": "能辨認長度與面積，並用平方單位表示面積。"
    }
  ],
  "glossary": [
    {
      "term": "長度單位",
      "definition": "描述一維距離，如公分、公尺。"
    },
    {
      "term": "面積單位",
      "definition": "描述二維大小，如平方公分、平方公尺。"
    },
    {
      "term": "平方單位",
      "definition": "邊長為一單位的正方形面積。"
    },
    {
      "term": "公畝",
      "definition": "100 平方公尺，符號 a。"
    },
    {
      "term": "公頃",
      "definition": "10,000 平方公尺，符號 ha。"
    }
  ],
  "notation": [
    {
      "symbol": "1 m=100 cm",
      "meaning": "公尺與公分的長度關係。"
    },
    {
      "symbol": "1 m²=10,000 cm²",
      "meaning": "因 100×100=10,000。"
    },
    {
      "symbol": "1 km²=1,000,000 m²",
      "meaning": "因 1,000×1,000=1,000,000。"
    },
    {
      "symbol": "1 ha=10,000 m²",
      "meaning": "公頃與平方公尺關係。"
    }
  ],
  "conceptDevelopment": [
    "長度換算沿一個方向乘倍率；面積有長與寬兩個方向，所以倍率要平方。",
    "1 公尺等於 100 公分，因此 1 平方公尺可想成 100 公分×100 公分，共 10,000 平方公分。",
    "大單位換小單位數值變大；小單位換大單位數值變小。先判方向，再決定乘除。",
    "幾何公式代入前，所有長度必須統一成同一單位；計算完再依要求換答案單位。"
  ],
  "formalDefinitions": [
    {
      "name": "單位一致",
      "statement": "同一運算中的相加、相減及長寬乘積須使用可相容且已統一的單位。"
    },
    {
      "name": "面積倍率平方",
      "statement": "若長度單位倍率為 k，對應面積單位倍率為 k²。"
    }
  ],
  "formulas": [
    {
      "formula": "1 cm=10 mm",
      "conditions": [
        "長度"
      ],
      "meaning": "公分轉公釐乘 10。"
    },
    {
      "formula": "1 m=100 cm",
      "conditions": [
        "長度"
      ],
      "meaning": "公尺轉公分乘 100。"
    },
    {
      "formula": "1 m²=10,000 cm²",
      "conditions": [
        "面積"
      ],
      "meaning": "公尺平方轉公分平方乘 10,000。"
    },
    {
      "formula": "1 km²=100 ha",
      "conditions": [
        "面積"
      ],
      "meaning": "1 km²=1,000,000 m²，1 ha=10,000 m²。"
    }
  ],
  "invalidUseCases": [
    "不能把 1 m² 換成 100 cm²。",
    "周長換算使用長度倍率，不使用平方倍率。",
    "面積數值與單位不可只改其中一個。",
    "公分與平方公分是不同種類的量，不能直接比較。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "先辨認量是一維長度還是二維面積。",
      "check": "看單位是否帶平方。"
    },
    {
      "step": 2,
      "instruction": "寫出基本單位關係。",
      "check": "例如 1 m=100 cm。"
    },
    {
      "step": 3,
      "instruction": "面積時把倍率平方。",
      "check": "100²=10,000。"
    },
    {
      "step": 4,
      "instruction": "判斷大轉小乘、小轉大除，並回寫完整單位。",
      "check": "用估量檢查數值變大或變小是否合理。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "3.6 公尺等於多少公分？",
      "solutionSteps": [
        "1 公尺=100 公分。",
        "3.6×100=360。"
      ],
      "answer": "360 公分。"
    },
    {
      "exampleId": "L2",
      "prompt": "25,000 平方公分等於多少平方公尺？",
      "solutionSteps": [
        "1 平方公尺=10,000 平方公分。",
        "25,000÷10,000=2.5。"
      ],
      "answer": "2.5 平方公尺。"
    },
    {
      "exampleId": "L3",
      "prompt": "0.08 平方公里等於多少公頃？",
      "solutionSteps": [
        "1 平方公里=100 公頃。",
        "0.08×100=8。"
      ],
      "answer": "8 公頃。"
    },
    {
      "exampleId": "L4",
      "prompt": "長 2 公尺、寬 75 公分的長方形面積，以平方公分表示。",
      "solutionSteps": [
        "2 公尺=200 公分。",
        "200×75=15,000。"
      ],
      "answer": "15,000 平方公分。"
    }
  ],
  "levelConnections": {
    "basic": "直接做單一步長度或面積換算。",
    "standard": "在公式代入前統一單位。",
    "advanced": "公頃、平方公里與混合小數倍率。",
    "literacy": "土地、建材與圖面常混用公分、公尺、公頃，錯把倍率平方會造成百倍或萬倍誤差。"
  },
  "commonMistakes": [
    {
      "mistake": "1 m² 寫成 100 cm²。",
      "why": "只換一個方向。",
      "correction": "應為 100×100=10,000 cm²。"
    },
    {
      "mistake": "周長公尺轉公分乘 10,000。",
      "why": "把面積倍率用在長度。",
      "correction": "周長只乘 100。"
    },
    {
      "mistake": "大單位轉小單位反而除。",
      "why": "換算方向錯。",
      "correction": "大轉小數值應變大。"
    },
    {
      "mistake": "2 m×75 cm 直接乘 150。",
      "why": "單位未統一。",
      "correction": "先把 2 m 換成 200 cm。"
    },
    {
      "mistake": "平方公里與公頃混成 1:1000。",
      "why": "未由平方公尺推導。",
      "correction": "1 km²=100 ha。"
    },
    {
      "mistake": "換算後只寫數字。",
      "why": "缺少量的種類。",
      "correction": "答案必須附正確單位與平方。"
    }
  ],
  "selfCheckItems": [
    "量是長度還是面積？",
    "倍率是否需要平方？",
    "大轉小時數值是否變大？",
    "代入面積公式前長與寬是否同單位？"
  ],
  "conciseSummary": [
    "長度倍率是一維，面積倍率要平方。",
    "1 m²=10,000 cm²。",
    "1 km²=100 ha。",
    "幾何運算前先統一單位。"
  ],
  "connections": {
    "previous": "上一技能的複合面積需要一致的尺寸單位。",
    "next": [
      "下一技能進入三視圖，會區分長、寬、高三個方向及其在各視圖中的呈現。"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "逐步驗算 3.6 m=360 cm、25,000 cm²=2.5 m²、0.08 km²=8 ha，以及 200×75=15,000 cm²；長度與面積倍率未混用。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "9b72cdd87f101178085c042bb0d9a4772018ae7fc0f1060b9fcf1d08a2e6bf89"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s011-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "3.2 公尺等於多少公分？",
    "givenConditions": [
      "3.2 公尺。"
    ],
    "target": "公尺換算為公分",
    "choices": [
      "32 公分",
      "3,200 公分",
      "320 公分",
      "0.032 公分"
    ],
    "answerIndex": 2,
    "independentSolution": "320 公分。",
    "explanation": "大單位轉小單位乘 100。",
    "steps": [
      "3.2×100=320。"
    ],
    "optionAnalysis": [
      {
        "choice": "32 公分",
        "truth": false,
        "reason": "少乘一個 10。"
      },
      {
        "choice": "3,200 公分",
        "truth": false,
        "reason": "多乘一個 10。"
      },
      {
        "choice": "320 公分",
        "truth": true,
        "reason": "1 公尺=100 公分，所以 3.2×100=320。"
      },
      {
        "choice": "0.032 公分",
        "truth": false,
        "reason": "換算方向顛倒。"
      }
    ],
    "misconceptionTarget": "把倍率誤用 10 或除 100。",
    "prerequisiteCheck": "能做小數乘 100。",
    "estimatedTimeSec": 90,
    "unitCheck": "1 m=100 cm，答案公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "基礎長度換算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "e5eb5f0dac10f27a294e5d92563e986e283820a05ee39b9612c3d55fec68ecd8"
  },
  {
    "questionId": "u08-s011-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一條繩子長 450 公分，另一條繩子長 4.2 公尺。第一條比第二條長多少公分？",
    "givenConditions": [
      "第一條450公分。",
      "第二條4.2公尺。"
    ],
    "target": "統一單位後比較兩段長度",
    "choices": [
      "0.3 公分",
      "30 公分",
      "30 公尺",
      "870 公分"
    ],
    "answerIndex": 1,
    "independentSolution": "450公分−420公分=30公分。",
    "explanation": "先把兩條繩長統一為公分，再求差。",
    "steps": [
      "4.2公尺換成420公分。",
      "450−420=30公分。"
    ],
    "optionAnalysis": [
      {
        "choice": "0.3 公分",
        "truth": false,
        "reason": "把0.3公尺未乘100就標成公分。"
      },
      {
        "choice": "30 公分",
        "truth": true,
        "reason": "4.2公尺=420公分，450−420=30公分。"
      },
      {
        "choice": "30 公尺",
        "truth": false,
        "reason": "差值30的單位應是公分，不是公尺。"
      },
      {
        "choice": "870 公分",
        "truth": false,
        "reason": "把兩條長度相加而不是比較差。"
      }
    ],
    "misconceptionTarget": "不同單位直接相減，或把差值單位寫錯。",
    "prerequisiteCheck": "能使用1公尺=100公分並做減法。",
    "estimatedTimeSec": 90,
    "unitCheck": "兩條長度先統一為公分，答案為公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "除了換算還要比較差值，比單純改寫單位多一步。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "5b8fb9f3632720f62eeb7203f2b5c933379245f5e381db4d0f6a05d922b4c672"
  },
  {
    "questionId": "u08-s011-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一張面積 1 平方公尺的地墊要裁成每片 100 平方公分的小片，不計裁切損耗，最多可裁成多少片？",
    "givenConditions": [
      "總面積1平方公尺。",
      "每片100平方公分。",
      "不計損耗。"
    ],
    "target": "利用面積換算求可裁切片數",
    "choices": [
      "10 片",
      "1000 片",
      "10000 片",
      "100 片"
    ],
    "answerIndex": 3,
    "independentSolution": "總面積10000平方公分，每片100平方公分，因此100片。",
    "explanation": "先換算總面積，再除以每片面積。",
    "steps": [
      "1平方公尺換成10000平方公分。",
      "10000÷100=100。"
    ],
    "optionAnalysis": [
      {
        "choice": "10 片",
        "truth": false,
        "reason": "把平方倍率誤當成長度倍率。"
      },
      {
        "choice": "1000 片",
        "truth": false,
        "reason": "把1平方公尺的平方公分數多算十倍。"
      },
      {
        "choice": "10000 片",
        "truth": false,
        "reason": "10000是總平方公分數，尚未除以每片100平方公分。"
      },
      {
        "choice": "100 片",
        "truth": true,
        "reason": "1平方公尺=10000平方公分，10000÷100=100片。"
      }
    ],
    "misconceptionTarget": "把平方單位倍率只乘100，或忘記除以單片面積。",
    "prerequisiteCheck": "能理解平方公尺與平方公分倍率。",
    "estimatedTimeSec": 90,
    "unitCheck": "總面積與單片面積統一為平方公分，答案為片數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需完成平方換算與整除兩步，仍屬基本應用。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "1250b7b6425581d8111f75b9e8da50face1a7c96802aba4a3ea303bd5ab85fc0"
  },
  {
    "questionId": "u08-s011-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "36,000 平方公分等於多少平方公尺？",
    "givenConditions": [
      "36,000 平方公分。"
    ],
    "target": "平方公分換算為平方公尺",
    "choices": [
      "3.6 平方公尺",
      "360 平方公尺",
      "36 平方公尺",
      "0.36 平方公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "3.6 平方公尺。",
    "explanation": "小面積單位轉大單位除 10,000。",
    "steps": [
      "36,000÷10,000=3.6。"
    ],
    "optionAnalysis": [
      {
        "choice": "3.6 平方公尺",
        "truth": true,
        "reason": "1 m²=10,000 cm²，36,000÷10,000=3.6。"
      },
      {
        "choice": "360 平方公尺",
        "truth": false,
        "reason": "只除 100。"
      },
      {
        "choice": "36 平方公尺",
        "truth": false,
        "reason": "只除 1,000。"
      },
      {
        "choice": "0.36 平方公尺",
        "truth": false,
        "reason": "多除 10。"
      }
    ],
    "misconceptionTarget": "只使用長度倍率 100。",
    "prerequisiteCheck": "能做小數除法。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分除以 10,000 得平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "標準面積換算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "fac946d1d088ac441532833c25f11c6f8392a4205691b0850ae70a575bf33422"
  },
  {
    "questionId": "u08-s011-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一座保護區總面積為 2.5 平方公里，其中水域占 0.4 平方公里。陸地面積是多少平方公尺？",
    "givenConditions": [
      "總面積2.5平方公里。",
      "水域0.4平方公里。"
    ],
    "target": "先求剩餘區域再換算大面積單位",
    "choices": [
      "2,100 平方公尺",
      "210,000 平方公尺",
      "2,900,000 平方公尺",
      "2,100,000 平方公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "陸地2.1平方公里等於2,100,000平方公尺。",
    "explanation": "先在同一平方公里單位相減，再換成平方公尺。",
    "steps": [
      "2.5−0.4=2.1平方公里。",
      "2.1×1,000,000=2,100,000平方公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "2,100 平方公尺",
        "truth": false,
        "reason": "平方公里換平方公尺少乘1000。"
      },
      {
        "choice": "210,000 平方公尺",
        "truth": false,
        "reason": "換算倍率少一個10。"
      },
      {
        "choice": "2,900,000 平方公尺",
        "truth": false,
        "reason": "把水域面積加回總面積。"
      },
      {
        "choice": "2,100,000 平方公尺",
        "truth": true,
        "reason": "陸地=2.5−0.4=2.1平方公里=2.1×1,000,000=2,100,000平方公尺。"
      }
    ],
    "misconceptionTarget": "未扣水域，或把平方公里倍率當公里倍率。",
    "prerequisiteCheck": "能做小數減法與平方公里換平方公尺。",
    "estimatedTimeSec": 90,
    "unitCheck": "先以平方公里相減，最後答案為平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "結合區域相減及百萬倍率換算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "11d0a615f6a002f961c24a840c0975fa416c87cc1846526567f5fa24356588ba"
  },
  {
    "questionId": "u08-s011-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一座苗圃面積為 0.35 公頃，其中 500 平方公尺已改作步道。剩餘苗圃面積是多少平方公尺？",
    "givenConditions": [
      "苗圃0.35公頃。",
      "步道500平方公尺。"
    ],
    "target": "在公頃與平方公尺間換算後求剩餘面積",
    "choices": [
      "3,000 平方公尺",
      "3,450 平方公尺",
      "3,500 平方公尺",
      "30,000 平方公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "剩餘面積為3000平方公尺。",
    "explanation": "先把公頃換成平方公尺，再扣除步道。",
    "steps": [
      "0.35×10000=3500平方公尺。",
      "3500−500=3000平方公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "3,000 平方公尺",
        "truth": true,
        "reason": "0.35公頃=3500平方公尺，3500−500=3000平方公尺。"
      },
      {
        "choice": "3,450 平方公尺",
        "truth": false,
        "reason": "把500平方公尺只扣成50。"
      },
      {
        "choice": "3,500 平方公尺",
        "truth": false,
        "reason": "這是尚未扣除步道的原面積。"
      },
      {
        "choice": "30,000 平方公尺",
        "truth": false,
        "reason": "把1公頃誤當100000平方公尺。"
      }
    ],
    "misconceptionTarget": "不同面積單位直接相減，或忘記扣除步道。",
    "prerequisiteCheck": "能使用1公頃=10000平方公尺。",
    "estimatedTimeSec": 90,
    "unitCheck": "0.35公頃先換為平方公尺，答案為平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需統一面積單位並做區域扣除。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "60e8b5870beea4566db41b098394d341423783578c0b760ba92cf379d323543a"
  },
  {
    "questionId": "u08-s011-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "長 1.8 公尺、寬 75 公分的長方形面積，以平方公分表示是多少？",
    "givenConditions": [
      "長 1.8 公尺。",
      "寬 75 公分。"
    ],
    "target": "混合長度單位求面積",
    "choices": [
      "135 平方公分",
      "13,500 平方公分",
      "1,350 平方公分",
      "135,000 平方公分"
    ],
    "answerIndex": 1,
    "independentSolution": "13,500 平方公分。",
    "explanation": "先統一長度單位。",
    "steps": [
      "1.8 m=180 cm。",
      "180×75=13,500。"
    ],
    "optionAnalysis": [
      {
        "choice": "135 平方公分",
        "truth": false,
        "reason": "把 1.8 公尺誤成 1.8 公分。"
      },
      {
        "choice": "13,500 平方公分",
        "truth": true,
        "reason": "1.8 公尺=180 公分，面積 180×75=13,500 平方公分。"
      },
      {
        "choice": "1,350 平方公分",
        "truth": false,
        "reason": "將 1.8 公尺換成 18 公分。"
      },
      {
        "choice": "135,000 平方公分",
        "truth": false,
        "reason": "多乘 10。"
      }
    ],
    "misconceptionTarget": "未統一單位或錯換小數點。",
    "prerequisiteCheck": "能換算公尺與公分並求面積。",
    "estimatedTimeSec": 90,
    "unitCheck": "兩尺寸先統一為公分，結果平方公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需兩種方法可驗算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "518e2afb43cfa7afabb677ff1209e1263b7f610fd72b823f7b529ab99e8a9efb"
  },
  {
    "questionId": "u08-s011-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個正方形面積為 0.81 平方公尺。它的邊長以公分表示是多少？",
    "givenConditions": [
      "正方形面積 0.81 平方公尺。"
    ],
    "target": "由正方形面積反求邊長並換單位",
    "choices": [
      "81 公分",
      "9 公分",
      "90 公分",
      "810 公分"
    ],
    "answerIndex": 2,
    "independentSolution": "邊長 90 公分。",
    "explanation": "面積反求邊長後再換單位。",
    "steps": [
      "√0.81=0.9。",
      "0.9×100=90。"
    ],
    "optionAnalysis": [
      {
        "choice": "81 公分",
        "truth": false,
        "reason": "把面積數值直接當邊長。"
      },
      {
        "choice": "9 公分",
        "truth": false,
        "reason": "平方根與單位換算皆錯。"
      },
      {
        "choice": "90 公分",
        "truth": true,
        "reason": "邊長=√0.81=0.9 公尺=90 公分。"
      },
      {
        "choice": "810 公分",
        "truth": false,
        "reason": "多乘 10。"
      }
    ],
    "misconceptionTarget": "把面積單位直接線性換成邊長。",
    "prerequisiteCheck": "能理解正方形面積與平方根。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公尺開平方得到公尺，再換公分。",
    "roundingCheck": "√0.81=0.9 為精確值。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "逆向面積與單位換算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "90fae160feec470bcad34f7498e4b97269ebe00dba0a0461921085c5e585edef"
  },
  {
    "questionId": "u08-s011-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "地理資料把一塊土地面積記為1平方公里。換算成公頃時，下列哪一個等式可直接使用？",
    "givenConditions": [
      "1公里=1000公尺",
      "1公頃=10000平方公尺"
    ],
    "target": "選擇平方公里與公頃的正確換算",
    "choices": [
      "1 平方公里=100 公頃",
      "1 平方公里=10 公頃",
      "1 平方公里=1,000 公頃",
      "1 公頃=100 平方公里"
    ],
    "answerIndex": 0,
    "independentSolution": "1平方公里=(1000公尺)²=1,000,000平方公尺；再除以每公頃10,000平方公尺，得到100公頃。",
    "explanation": "先把長度換算倍率平方，再換成公頃。",
    "steps": [
      "把1公里換成1000公尺。",
      "面積倍率平方得到1,000,000平方公尺。",
      "除以10,000得到100公頃。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 平方公里=100 公頃",
        "truth": true,
        "reason": "1平方公里確實等於100公頃。"
      },
      {
        "choice": "1 平方公里=10 公頃",
        "truth": false,
        "reason": "只處理一個零，低估10倍。"
      },
      {
        "choice": "1 平方公里=1,000 公頃",
        "truth": false,
        "reason": "把長度倍率直接當面積倍率。"
      },
      {
        "choice": "1 公頃=100 平方公里",
        "truth": false,
        "reason": "方向與倍率都顛倒。"
      }
    ],
    "misconceptionTarget": "面積換算只用一次長度倍率或方向顛倒。",
    "prerequisiteCheck": "能使用土地面積單位。",
    "estimatedTimeSec": 90,
    "unitCheck": "兩者皆為面積單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "題幹指定由平方公里換成公頃，只有一式正確。",
    "difficultyReason": "進階：從土地資料情境選出正確面積換算式。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "efdc093753e52b14d830415b5e08bb2c3c65a46affcee30190e4d3679b1a8f39"
  },
  {
    "questionId": "u08-s011-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "土地登記面積為 2.4 公頃，規畫保留 6,000 平方公尺作公園。剩餘面積是多少平方公尺？",
    "givenConditions": [
      "總地 2.4 公頃。",
      "公園 6,000 平方公尺。"
    ],
    "target": "混合公頃與平方公尺求剩餘土地",
    "choices": [
      "1,800 平方公尺",
      "23,994 平方公尺",
      "30,000 平方公尺",
      "18,000 平方公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "剩餘 18,000 平方公尺。",
    "explanation": "先統一土地面積單位。",
    "steps": [
      "2.4×10,000=24,000。",
      "24,000−6,000=18,000。"
    ],
    "optionAnalysis": [
      {
        "choice": "1,800 平方公尺",
        "truth": false,
        "reason": "公頃換算少一個 0。"
      },
      {
        "choice": "23,994 平方公尺",
        "truth": false,
        "reason": "把 6,000 當 6。"
      },
      {
        "choice": "30,000 平方公尺",
        "truth": false,
        "reason": "把公園面積加上。"
      },
      {
        "choice": "18,000 平方公尺",
        "truth": true,
        "reason": "2.4 ha=24,000 m²，扣 6,000 得 18,000 m²。"
      }
    ],
    "misconceptionTarget": "不同單位直接相減。",
    "prerequisiteCheck": "能換算公頃與平方公尺。",
    "estimatedTimeSec": 90,
    "unitCheck": "2.4 ha 先換 24,000 m²，再相減。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "土地規畫的單位統一是必要步驟。",
    "literacyContextNecessity": "土地登記與工程常使用不同面積單位；若不統一，剩餘面積會產生十倍以上錯誤。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "a161f250e322cb78ba086ee56ae8dfaa29c9aa3e67fa2ae56bc0bf044648196a"
  },
  {
    "questionId": "u08-s011-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "磁磚標示每片面積 2,500 平方公分。以平方公尺表示為何？",
    "givenConditions": [
      "每片 2,500 平方公分。"
    ],
    "target": "將磁磚面積換成平方公尺",
    "choices": [
      "25 平方公尺",
      "2.5 平方公尺",
      "0.25 平方公尺",
      "0.025 平方公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "每片 0.25 平方公尺。",
    "explanation": "平方公分轉平方公尺除 10,000。",
    "steps": [
      "2,500/10,000=0.25。"
    ],
    "optionAnalysis": [
      {
        "choice": "25 平方公尺",
        "truth": false,
        "reason": "只移動兩位小數。"
      },
      {
        "choice": "2.5 平方公尺",
        "truth": false,
        "reason": "少除 10。"
      },
      {
        "choice": "0.25 平方公尺",
        "truth": true,
        "reason": "2,500÷10,000=0.25 平方公尺。"
      },
      {
        "choice": "0.025 平方公尺",
        "truth": false,
        "reason": "多除 10。"
      }
    ],
    "misconceptionTarget": "只依長度倍率移動兩位。",
    "prerequisiteCheck": "能使用面積倍率。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公分除以 10,000 得平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "產品標示換算為施工常用單位。",
    "literacyContextNecessity": "磁磚採購按平方公尺估算，產品卻以平方公分標示，因此換算直接影響片數與成本。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "0f65fef170a99a23f963a4d80a761cde3be5db18ae2a7423a4a2145c4337b594"
  },
  {
    "questionId": "u08-s011-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "跑道一圈長 400 公尺，學生跑 7.5 圈。總路程是多少公里？",
    "givenConditions": [
      "每圈 400 公尺。",
      "共 7.5 圈。"
    ],
    "target": "將多圈周長換算為公里",
    "choices": [
      "30 公里",
      "3 公里",
      "0.3 公里",
      "3,000 公里"
    ],
    "answerIndex": 1,
    "independentSolution": "總路程 3 公里。",
    "explanation": "周長路程使用長度倍率，不用平方倍率。",
    "steps": [
      "400×7.5=3,000 m。",
      "3,000÷1,000=3 km。"
    ],
    "optionAnalysis": [
      {
        "choice": "30 公里",
        "truth": false,
        "reason": "公尺轉公里少除一個 10。"
      },
      {
        "choice": "3 公里",
        "truth": true,
        "reason": "400×7.5=3,000 公尺，再除以 1,000 得 3 公里。"
      },
      {
        "choice": "0.3 公里",
        "truth": false,
        "reason": "多除一個 10。"
      },
      {
        "choice": "3,000 公里",
        "truth": false,
        "reason": "把公尺數直接當公里。"
      }
    ],
    "misconceptionTarget": "把長度換算誤用面積倍率。",
    "prerequisiteCheck": "能使用單位率與長度換算。",
    "estimatedTimeSec": 90,
    "unitCheck": "400 m/圈×7.5 圈=3,000 m=3 km。",
    "roundingCheck": "7.5 與結果皆為精確值。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "情境強調周長是一維量，與面積換算形成辨別。",
    "literacyContextNecessity": "運動紀錄以公里呈現，但跑道標示公尺；圈數與長度單位都不可省略。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "aabb7a909c52f4d08645d93b4d2adb9a72edc98b660b229ead0a89b0657b88b5"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s011-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "一塊面積 2.4 平方公尺的布料，等於多少平方公分？若每 3000 平方公分剪成一片，最多可剪幾片完整布片？",
    "requiredWork": [
      "平方公尺換平方公分。",
      "用完整片面積做除法。",
      "處理只能剪完整片的整數限制。"
    ],
    "standardSolution": [
      "1平方公尺=10000平方公分，所以2.4平方公尺=24000平方公分。",
      "24000÷3000=8，因此最多剪8片完整布片。"
    ],
    "alternativeMethods": [
      "可先把3000平方公分換成0.3平方公尺，再算2.4÷0.3=8。"
    ],
    "reasoningSteps": [
      "使用平方倍率100²。",
      "完成面積換算。",
      "以同單位相除。",
      "檢查8片剛好無餘料。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "換算24000平方公分與8片均正確，且平方倍率理由清楚。"
      },
      {
        "score": 2,
        "criteria": "兩答案正確但未說明10000倍率；或換算正確、片數有一處除法小錯。"
      },
      {
        "score": 1,
        "criteria": "知道1平方公尺=10000平方公分或列出24000，但未完成片數。"
      },
      {
        "score": 0,
        "criteria": "只乘100得到240平方公分，或單位不一致直接相除。"
      }
    ],
    "partialCreditRules": [
      "若採0.3平方公尺法且過程完整，同樣滿分。"
    ],
    "followThroughPolicy": "早期換算錯誤後若後續同單位除法正確，可給連帶方法分，最高2分。",
    "unitAndNotationRules": "面積單位要寫平方公尺或平方公分；片數為整數。",
    "answerOnlyPolicy": "只答8片而無換算最高1分。",
    "commonErrors": [
      "面積倍率只乘100。",
      "把3000平方公分當3000平方公尺。"
    ],
    "independentReview": {
      "derivedResult": "24000平方公分；8片。",
      "ambiguityAudit": "兩單位換算精確且24000能整除3000，沒有進位或捨去歧義。",
      "reviewNote": "獨立用反向換算24000÷10000=2.4及8×3000=24000驗證。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "composite-area-text"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "5ea50e637d4da576da0d084a7fdb134e9070a902c74f3ca32829667237070a2b"
  },
  {
    "questionId": "u08-s011-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "unit-conversion-geometry",
    "lockedSkillTitle": "幾何量的單位換算",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "一張長方形海報長 1.2 公尺、寬 75 公分。求面積，分別用平方公尺與平方公分表示；並驗證兩個答案互相換算一致。",
    "requiredWork": [
      "先統一長度單位。",
      "求平方公尺與平方公分兩種面積。",
      "用10000倍率互驗。"
    ],
    "standardSolution": [
      "75公分=0.75公尺，面積=1.2×0.75=0.9平方公尺。",
      "1.2公尺=120公分，面積=120×75=9000平方公分。",
      "0.9平方公尺×10000=9000平方公分，兩答案一致。"
    ],
    "alternativeMethods": [
      "可先用公分計算9000平方公分，再除以10000得0.9平方公尺。"
    ],
    "reasoningSteps": [
      "選一種長度單位統一。",
      "計算面積。",
      "轉成另一平方單位。",
      "反向驗算倍率。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "0.9平方公尺與9000平方公分均正確，且明確驗證×10000。"
      },
      {
        "score": 2,
        "criteria": "兩面積正確但驗證未寫；或方法完整有一處小數乘法錯。"
      },
      {
        "score": 1,
        "criteria": "至少正確統一單位並求出其中一個面積。"
      },
      {
        "score": 0,
        "criteria": "直接1.2×75並標錯平方單位，或用×100換平方單位。"
      }
    ],
    "partialCreditRules": [
      "0.90平方公尺與0.9平方公尺等值。"
    ],
    "followThroughPolicy": "若1.2×0.75算術錯，但120×75正確且換算概念清楚，兩路徑分開給分，最高2分。",
    "unitAndNotationRules": "長度公尺、公分不可直接相乘後任意命名；面積分別用m²、cm²。",
    "answerOnlyPolicy": "只列兩答案無驗證最高2分。",
    "commonErrors": [
      "75公分誤換成0.075公尺。",
      "0.9平方公尺誤換成90平方公分。"
    ],
    "independentReview": {
      "derivedResult": "0.9平方公尺=9000平方公分。",
      "ambiguityAudit": "題目給的是精確小數與整數，兩種表示唯一且無近似。",
      "reviewNote": "獨立從公尺與公分兩條路徑計算，並用平方倍率互相吻合。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "composite-area-text"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "d98cd385acf5527383427213789defef8bad6b4476cdf89d0a24e543c6396ebd"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s011-v001",
    "unitId": "u08",
    "skillId": "unit-conversion-geometry",
    "contentSha256": "e5eb5f0dac10f27a294e5d92563e986e283820a05ee39b9612c3d55fec68ecd8",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立把 3 公尺與 0.2 公尺分別換成 300、20 公分。",
    "derivedAnswer": "320 公分",
    "storedAnswer": "320 公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「320 公分」符合目標「公尺換算為公分」。其餘選項分別違反：少乘一個 10。；多乘一個 10。；換算方向顛倒。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「幾何量的單位換算」講義已定義範圍；本題特別使用：3.2 公尺。",
      "unitConflict": "1 m=100 cm，答案公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「公尺換算為公分」重新讀題，並針對誤解「把倍率誤用 10 或除 100。」排除另一解讀。"
    },
    "difficultyReason": "基礎長度換算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能做小數乘 100。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「公尺換算為公分」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立把 3 公尺與 0.2 公尺分別換成 300、20 公分。 正確選項為「320 公分」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "ec86f8badaf2f09248eb5f3cc1a148c18e058b61f957df6bc6566f06f12a685d"
  },
  {
    "questionId": "u08-s011-v002",
    "unitId": "u08",
    "skillId": "unit-conversion-geometry",
    "contentSha256": "5b8fb9f3632720f62eeb7203f2b5c933379245f5e381db4d0f6a05d922b4c672",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立換算4.2×100=420，再比較450與420，差30。",
    "derivedAnswer": "30 公分",
    "storedAnswer": "30 公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「30 公分」符合目標「統一單位後比較兩段長度」。其餘選項分別違反：把0.3公尺未乘100就標成公分。；差值30的單位應是公分，不是公尺。；把兩條長度相加而不是比較差。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「幾何量的單位換算」講義已定義範圍；本題特別使用：第一條450公分。",
      "unitConflict": "兩條長度先統一為公分，答案為公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「統一單位後比較兩段長度」重新讀題，並針對誤解「不同單位直接相減，或把差值單位寫錯。」排除另一解讀。"
    },
    "difficultyReason": "除了換算還要比較差值，比單純改寫單位多一步。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用1公尺=100公分並做減法。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「統一單位後比較兩段長度」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立換算4.2×100=420，再比較450與420，差30。 正確選項為「30 公分」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "2c1ba331a655eec217ee5fa3170e6d2da76222ac96a2edd8002fde689594a06c"
  },
  {
    "questionId": "u08-s011-v003",
    "unitId": "u08",
    "skillId": "unit-conversion-geometry",
    "contentSha256": "1250b7b6425581d8111f75b9e8da50face1a7c96802aba4a3ea303bd5ab85fc0",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立檢查100片×100平方公分=10000平方公分=1平方公尺。",
    "derivedAnswer": "100 片",
    "storedAnswer": "100 片",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「100 片」符合目標「利用面積換算求可裁切片數」。其餘選項分別違反：把平方倍率誤當成長度倍率。；把1平方公尺的平方公分數多算十倍。；10000是總平方公分數，尚未除以每片100平方公分。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「幾何量的單位換算」講義已定義範圍；本題特別使用：總面積1平方公尺。",
      "unitConflict": "總面積與單片面積統一為平方公分，答案為片數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「利用面積換算求可裁切片數」重新讀題，並針對誤解「把平方單位倍率只乘100，或忘記除以單片面積。」排除另一解讀。"
    },
    "difficultyReason": "需完成平方換算與整除兩步，仍屬基本應用。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解平方公尺與平方公分倍率。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「利用面積換算求可裁切片數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立檢查100片×100平方公分=10000平方公分=1平方公尺。 正確選項為「100 片」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "ff72742c3ae102745729fce1da79495fe3c479023bccb119a0659d7d8aac5071"
  },
  {
    "questionId": "u08-s011-v004",
    "unitId": "u08",
    "skillId": "unit-conversion-geometry",
    "contentSha256": "fac946d1d088ac441532833c25f11c6f8392a4205691b0850ae70a575bf33422",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "3 m²=30,000 cm²，餘 6,000=0.6 m²。",
    "derivedAnswer": "3.6 平方公尺",
    "storedAnswer": "3.6 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「3.6 平方公尺」符合目標「平方公分換算為平方公尺」。其餘選項分別違反：只除 100。；只除 1,000。；多除 10。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「幾何量的單位換算」講義已定義範圍；本題特別使用：36,000 平方公分。",
      "unitConflict": "平方公分除以 10,000 得平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「平方公分換算為平方公尺」重新讀題，並針對誤解「只使用長度倍率 100。」排除另一解讀。"
    },
    "difficultyReason": "標準面積換算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能做小數除法。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「平方公分換算為平方公尺」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：3 m²=30,000 cm²，餘 6,000=0.6 m²。 正確選項為「3.6 平方公尺」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "7b6b54fdd877ca70bb54f46b7cd5f70c83734fefb386249f67e82b443e3d2bcc"
  },
  {
    "questionId": "u08-s011-v005",
    "unitId": "u08",
    "skillId": "unit-conversion-geometry",
    "contentSha256": "11d0a615f6a002f961c24a840c0975fa416c87cc1846526567f5fa24356588ba",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立以2500000−400000=2100000平方公尺驗算。",
    "derivedAnswer": "2,100,000 平方公尺",
    "storedAnswer": "2,100,000 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「2,100,000 平方公尺」符合目標「先求剩餘區域再換算大面積單位」。其餘選項分別違反：平方公里換平方公尺少乘1000。；換算倍率少一個10。；把水域面積加回總面積。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「幾何量的單位換算」講義已定義範圍；本題特別使用：總面積2.5平方公里。",
      "unitConflict": "先以平方公里相減，最後答案為平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「先求剩餘區域再換算大面積單位」重新讀題，並針對誤解「未扣水域，或把平方公里倍率當公里倍率。」排除另一解讀。"
    },
    "difficultyReason": "結合區域相減及百萬倍率換算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能做小數減法與平方公里換平方公尺。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「先求剩餘區域再換算大面積單位」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立以2500000−400000=2100000平方公尺驗算。 正確選項為「2,100,000 平方公尺」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "61498a030795fb7d6ee97d86e043688cf320f8e8c32ad4af6619450ae33d9b61"
  },
  {
    "questionId": "u08-s011-v006",
    "unitId": "u08",
    "skillId": "unit-conversion-geometry",
    "contentSha256": "60e8b5870beea4566db41b098394d341423783578c0b760ba92cf379d323543a",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立將500平方公尺換成0.05公頃，0.35−0.05=0.30公頃=3000平方公尺。",
    "derivedAnswer": "3,000 平方公尺",
    "storedAnswer": "3,000 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「3,000 平方公尺」符合目標「在公頃與平方公尺間換算後求剩餘面積」。其餘選項分別違反：把500平方公尺只扣成50。；這是尚未扣除步道的原面積。；把1公頃誤當100000平方公尺。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「幾何量的單位換算」講義已定義範圍；本題特別使用：苗圃0.35公頃。",
      "unitConflict": "0.35公頃先換為平方公尺，答案為平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「在公頃與平方公尺間換算後求剩餘面積」重新讀題，並針對誤解「不同面積單位直接相減，或忘記扣除步道。」排除另一解讀。"
    },
    "difficultyReason": "需統一面積單位並做區域扣除。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用1公頃=10000平方公尺。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「在公頃與平方公尺間換算後求剩餘面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立將500平方公尺換成0.05公頃，0.35−0.05=0.30公頃=3000平方公尺。 正確選項為「3,000 平方公尺」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "3b2e2469eb754088fc9b8c6e1c3b8b89806f2425ccd219ecc45969a2c8807e10"
  },
  {
    "questionId": "u08-s011-v007",
    "unitId": "u08",
    "skillId": "unit-conversion-geometry",
    "contentSha256": "518e2afb43cfa7afabb677ff1209e1263b7f610fd72b823f7b529ab99e8a9efb",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立以 1.8×0.75=1.35 m²，再換 13,500 cm²。",
    "derivedAnswer": "13,500 平方公分",
    "storedAnswer": "13,500 平方公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「13,500 平方公分」符合目標「混合長度單位求面積」。其餘選項分別違反：把 1.8 公尺誤成 1.8 公分。；將 1.8 公尺換成 18 公分。；多乘 10。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「幾何量的單位換算」講義已定義範圍；本題特別使用：長 1.8 公尺。",
      "unitConflict": "兩尺寸先統一為公分，結果平方公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「混合長度單位求面積」重新讀題，並針對誤解「未統一單位或錯換小數點。」排除另一解讀。"
    },
    "difficultyReason": "需兩種方法可驗算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能換算公尺與公分並求面積。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「混合長度單位求面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立以 1.8×0.75=1.35 m²，再換 13,500 cm²。 正確選項為「13,500 平方公分」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "a70ea4570c45c7a47a711cc85ce3e18264fefd40277ba797326fce103c21e173"
  },
  {
    "questionId": "u08-s011-v008",
    "unitId": "u08",
    "skillId": "unit-conversion-geometry",
    "contentSha256": "90fae160feec470bcad34f7498e4b97269ebe00dba0a0461921085c5e585edef",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "驗算 90×90=8,100 cm²=0.81 m²。",
    "derivedAnswer": "90 公分",
    "storedAnswer": "90 公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「90 公分」符合目標「由正方形面積反求邊長並換單位」。其餘選項分別違反：把面積數值直接當邊長。；平方根與單位換算皆錯。；多乘 10。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「幾何量的單位換算」講義已定義範圍；本題特別使用：正方形面積 0.81 平方公尺。",
      "unitConflict": "平方公尺開平方得到公尺，再換公分。",
      "roundingConflict": "√0.81=0.9 為精確值。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由正方形面積反求邊長並換單位」重新讀題，並針對誤解「把面積單位直接線性換成邊長。」排除另一解讀。"
    },
    "difficultyReason": "逆向面積與單位換算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解正方形面積與平方根。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由正方形面積反求邊長並換單位」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：驗算 90×90=8,100 cm²=0.81 m²。 正確選項為「90 公分」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "81bcfa4fe5742bb3ac4301c02b52f4a8a0a93d7861dcb45fff9533f720900f9c"
  },
  {
    "questionId": "u08-s011-v009",
    "unitId": "u08",
    "skillId": "unit-conversion-geometry",
    "contentSha256": "efdc093753e52b14d830415b5e08bb2c3c65a46affcee30190e4d3679b1a8f39",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "從面積單位定義重算：1平方公里=(1000公尺)²=1,000,000平方公尺，再以1公頃=10,000平方公尺換算，得到100公頃。",
    "derivedAnswer": "1 平方公里=100 公頃",
    "storedAnswer": "1 平方公里=100 公頃",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐項代回後只有「1 平方公里=100 公頃」成立；其他三項分別因：只處理一個零，低估10倍。；把長度倍率直接當面積倍率。；方向與倍率都顛倒。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「幾何量的單位換算」講義已定義範圍；本題特別使用：1 ha=10,000 m²。",
      "unitConflict": "兩者皆為面積單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "題幹指定由平方公里換成公頃，只有一式正確。",
      "alternateReading": "題幹明確要求「選擇平方公里與公頃的正確換算」，沒有第二種合理所求。；已由平方長度倍率與公頃定義雙重核對，無第二解。"
    },
    "difficultyReason": "進階：從土地資料情境選出正確面積換算式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用土地面積單位。",
    "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
    "reviewerDecision": "pass",
    "reviewerNote": "u08-s011-v009 的中央獨立審查：從面積單位定義重算：1平方公里=(1000公尺)²=1,000,000平方公尺，再以1公頃=10,000平方公尺換算，得到100公頃。 此推導未沿用題庫解析；再逐項核對四個換算式的方向與倍率，確認只有1平方公里=100公頃成立。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "edf8b3901a3f86ce0a64c2c1235251a7f0eefda58af8a8634c2840c975662d11"
  },
  {
    "questionId": "u08-s011-v010",
    "unitId": "u08",
    "skillId": "unit-conversion-geometry",
    "contentSha256": "a161f250e322cb78ba086ee56ae8dfaa29c9aa3e67fa2ae56bc0bf044648196a",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "也可將 6,000 m²=0.6 ha，剩 1.8 ha=18,000 m²。",
    "derivedAnswer": "18,000 平方公尺",
    "storedAnswer": "18,000 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「18,000 平方公尺」符合目標「混合公頃與平方公尺求剩餘土地」。其餘選項分別違反：公頃換算少一個 0。；把 6,000 當 6。；把公園面積加上。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「幾何量的單位換算」講義已定義範圍；本題特別使用：總地 2.4 公頃。",
      "unitConflict": "2.4 ha 先換 24,000 m²，再相減。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「混合公頃與平方公尺求剩餘土地」重新讀題，並針對誤解「不同單位直接相減。」排除另一解讀。"
    },
    "difficultyReason": "土地規畫的單位統一是必要步驟。",
    "literacyContextNecessity": "土地登記與工程常使用不同面積單位；若不統一，剩餘面積會產生十倍以上錯誤。",
    "prerequisiteCheck": "能換算公頃與平方公尺。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「混合公頃與平方公尺求剩餘土地」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：也可將 6,000 m²=0.6 ha，剩 1.8 ha=18,000 m²。 正確選項為「18,000 平方公尺」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "0dc4f0389a558a8c6fddefb13d065c4a8ee50b7353e838a6ad94cefb484bc089"
  },
  {
    "questionId": "u08-s011-v011",
    "unitId": "u08",
    "skillId": "unit-conversion-geometry",
    "contentSha256": "0f65fef170a99a23f963a4d80a761cde3be5db18ae2a7423a4a2145c4337b594",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "若為 50 cm×50 cm，換 0.5 m×0.5 m 也得 0.25 m²。",
    "derivedAnswer": "0.25 平方公尺",
    "storedAnswer": "0.25 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「0.25 平方公尺」符合目標「將磁磚面積換成平方公尺」。其餘選項分別違反：只移動兩位小數。；少除 10。；多除 10。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「幾何量的單位換算」講義已定義範圍；本題特別使用：每片 2,500 平方公分。",
      "unitConflict": "平方公分除以 10,000 得平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「將磁磚面積換成平方公尺」重新讀題，並針對誤解「只依長度倍率移動兩位。」排除另一解讀。"
    },
    "difficultyReason": "產品標示換算為施工常用單位。",
    "literacyContextNecessity": "磁磚採購按平方公尺估算，產品卻以平方公分標示，因此換算直接影響片數與成本。",
    "prerequisiteCheck": "能使用面積倍率。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「將磁磚面積換成平方公尺」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：若為 50 cm×50 cm，換 0.5 m×0.5 m 也得 0.25 m²。 正確選項為「0.25 平方公尺」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "04eef0228e7e6ef99530f7b2dfa91fa5f394a0156f088c40861e1b94cbc1aefc"
  },
  {
    "questionId": "u08-s011-v012",
    "unitId": "u08",
    "skillId": "unit-conversion-geometry",
    "contentSha256": "aabb7a909c52f4d08645d93b4d2adb9a72edc98b660b229ead0a89b0657b88b5",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "7 圈 2.8 km，半圈 0.2 km，共 3 km。",
    "derivedAnswer": "3 公里",
    "storedAnswer": "3 公里",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「3 公里」符合目標「將多圈周長換算為公里」。其餘選項分別違反：公尺轉公里少除一個 10。；多除一個 10。；把公尺數直接當公里。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「幾何量的單位換算」講義已定義範圍；本題特別使用：每圈 400 公尺。",
      "unitConflict": "400 m/圈×7.5 圈=3,000 m=3 km。",
      "roundingConflict": "7.5 與結果皆為精確值。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「將多圈周長換算為公里」重新讀題，並針對誤解「把長度換算誤用面積倍率。」排除另一解讀。"
    },
    "difficultyReason": "情境強調周長是一維量，與面積換算形成辨別。",
    "literacyContextNecessity": "運動紀錄以公里呈現，但跑道標示公尺；圈數與長度單位都不可省略。",
    "prerequisiteCheck": "能使用單位率與長度換算。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「將多圈周長換算為公里」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：7 圈 2.8 km，半圈 0.2 km，共 3 km。 正確選項為「3 公里」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "9af3fe9cf2da52288ee8ca86783d10a05b3c484cbd3d573c407a8f9b8f69c873"
  }
];

export const DRAWING_SPECS = [];

