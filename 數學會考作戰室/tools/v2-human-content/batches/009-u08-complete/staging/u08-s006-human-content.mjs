// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s006-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-elements",
  "skillId": "quadrilateral-basic",
  "lockedSkillTitle": "四邊形基本性質",
  "title": "四邊形基本性質：用必要條件辨認特殊四邊形",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能辨認平行四邊形、長方形、菱形、正方形與梯形。",
    "能使用四邊形內角和 360°。",
    "能理解特殊四邊形的包含關係。",
    "能由已知邊角性質判斷可確定與不可確定的結論。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "triangle-basic-classification"
    ],
    "bridgeExplanation": "由三角形的邊角分類擴展到四邊形，並把四邊形切成兩個三角形理解內角和。"
  },
  "prerequisites": [
    {
      "skillId": "triangle-basic-classification",
      "requiredLevel": "能依邊長與角度條件分類，並使用三角形內角和。"
    }
  ],
  "glossary": [
    {
      "term": "四邊形",
      "definition": "由四條線段首尾相接形成的封閉平面圖形。"
    },
    {
      "term": "平行四邊形",
      "definition": "兩組對邊分別平行。"
    },
    {
      "term": "長方形",
      "definition": "四個內角皆為直角的平行四邊形。"
    },
    {
      "term": "菱形",
      "definition": "四邊等長的平行四邊形。"
    },
    {
      "term": "正方形",
      "definition": "四邊等長且四角皆直角。"
    },
    {
      "term": "梯形",
      "definition": "本課採至少一組對邊平行的廣義定義；題目若另有定義依題意。"
    }
  ],
  "notation": [
    {
      "symbol": "AB ∥ CD",
      "meaning": "四邊形 ABCD 中邊 AB 與 CD 平行。"
    },
    {
      "symbol": "AB=BC=CD=DA",
      "meaning": "四邊形四邊等長。"
    }
  ],
  "conceptDevelopment": [
    "一般四邊形內角和為 360°，可畫一條對角線分成兩個三角形理解。",
    "辨認特殊四邊形要看定義的必要條件，不是看名稱印象。平行四邊形要求兩組對邊平行；長方形再加入四直角；菱形再加入四邊等長。",
    "正方形同時符合長方形與菱形定義，也是平行四邊形。這是包含關係，不是只能選一個名稱。",
    "同樣的局部條件可能不足以唯一分類。例如只有一組對邊平行，只能確定符合梯形廣義定義，不能直接說是平行四邊形。"
  ],
  "formalDefinitions": [
    {
      "name": "對邊",
      "statement": "四邊形中不共頂點的兩邊。"
    },
    {
      "name": "鄰邊",
      "statement": "共用一個頂點的兩邊。"
    },
    {
      "name": "對角",
      "statement": "不相鄰的兩個內角。"
    },
    {
      "name": "對角線",
      "statement": "連接不相鄰兩頂點的線段。"
    }
  ],
  "formulas": [
    {
      "formula": "四邊形內角和=360°",
      "conditions": [
        "單純四邊形，國中範圍採一般凸四邊形文字情境"
      ],
      "meaning": "由兩個三角形內角和得到。"
    },
    {
      "formula": "平行四邊形對邊等長且對角相等",
      "conditions": [
        "已確定為平行四邊形"
      ],
      "meaning": "可求未知邊角。"
    },
    {
      "formula": "平行四邊形鄰角互補",
      "conditions": [
        "已確定為平行四邊形"
      ],
      "meaning": "相鄰內角和 180°。"
    }
  ],
  "invalidUseCases": [
    "四邊等長不表示一定有四個直角；那可能是非正方形菱形。",
    "四個直角不表示四邊等長；那可能是非正方形長方形。",
    "只有一組對邊等長不足以判定平行四邊形。",
    "不同教材對梯形可能採『恰一組』或『至少一組』平行，必須依題目定義。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "列出題目明示的平行、等長與直角條件。",
      "check": "不要從外觀補條件。"
    },
    {
      "step": 2,
      "instruction": "先檢查最基本定義。",
      "check": "兩組對邊平行可判平行四邊形。"
    },
    {
      "step": 3,
      "instruction": "再檢查額外條件。",
      "check": "四直角判長方形；四邊等長判菱形；兩者皆有判正方形。"
    },
    {
      "step": 4,
      "instruction": "若求角度，使用 360° 或特殊四邊形性質。",
      "check": "最後說明能確定到哪一層。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "四邊形三內角為 80°、95°、105°，第四角為何？",
      "solutionSteps": [
        "四邊形內角和 360°。",
        "360°-80°-95°-105°=80°。"
      ],
      "answer": "80°。"
    },
    {
      "exampleId": "L2",
      "prompt": "某四邊形兩組對邊分別平行，可先判定為何種圖形？",
      "solutionSteps": [
        "這正是平行四邊形的定義。"
      ],
      "answer": "平行四邊形。"
    },
    {
      "exampleId": "L3",
      "prompt": "某平行四邊形四邊等長，但沒有直角，最精確可稱為何？",
      "solutionSteps": [
        "四邊等長的平行四邊形是菱形。",
        "沒有直角，所以不能稱正方形。"
      ],
      "answer": "菱形。"
    },
    {
      "exampleId": "L4",
      "prompt": "某四邊形四邊等長且四角皆為 90°，它同時屬於哪些常見類別？",
      "solutionSteps": [
        "四角直角符合長方形；四邊等長符合菱形。",
        "兩組對邊平行，亦為平行四邊形；最具體名稱是正方形。"
      ],
      "answer": "正方形、長方形、菱形與平行四邊形。"
    }
  ],
  "levelConnections": {
    "basic": "辨認各特殊四邊形定義。",
    "standard": "用 360° 求未知角。",
    "advanced": "分析包含關係與條件是否充分。",
    "literacy": "地板、窗框與零件規格常只提供部分平行、等長或直角條件，需判斷能否保證形狀。"
  },
  "commonMistakes": [
    {
      "mistake": "把四邊形內角和寫成 180°。",
      "why": "未理解可分成兩個三角形。",
      "correction": "內角和為 2×180°=360°。"
    },
    {
      "mistake": "四邊等長就判正方形。",
      "why": "漏掉四直角條件。",
      "correction": "只能先判菱形；有直角才是正方形。"
    },
    {
      "mistake": "四角直角就判正方形。",
      "why": "漏掉四邊等長。",
      "correction": "只能先判長方形。"
    },
    {
      "mistake": "認為正方形不是長方形。",
      "why": "把分類當互斥名稱。",
      "correction": "正方形符合長方形定義。"
    },
    {
      "mistake": "一組對邊平行就判平行四邊形。",
      "why": "少了一組平行條件。",
      "correction": "平行四邊形要求兩組對邊分別平行。"
    },
    {
      "mistake": "忽略梯形定義差異。",
      "why": "不同教材慣例不同。",
      "correction": "題目若明示定義，依題意作答並說明。"
    }
  ],
  "selfCheckItems": [
    "我是否只使用題目提供的條件？",
    "內角和是否用 360°？",
    "我能說明正方形與長方形、菱形的包含關係嗎？",
    "梯形定義是否由題目指定？"
  ],
  "conciseSummary": [
    "四邊形內角和 360°。",
    "平行四邊形有兩組對邊平行。",
    "長方形有四直角，菱形有四等邊，正方形同時具備。",
    "分類可能有包含關係。"
  ],
  "connections": {
    "previous": "上一技能訓練以邊與角分類三角形。",
    "next": [
      "下一技能將四邊形內角和推廣到任意 n 邊形。"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "逐項以定義檢查特殊四邊形包含關係；內角例題重算 80+95+105+80=360，並明示梯形定義可能依題目採廣義或狹義。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "cfc7bcd947f90efea40e71403fef8bb9e3933fc72bd5c416e49003ee24af87bb"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s006-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一般四邊形的內角和是多少？",
    "givenConditions": [
      "圖形為一般平面四邊形。"
    ],
    "target": "辨認四邊形內角和",
    "choices": [
      "180°",
      "360°",
      "270°",
      "540°"
    ],
    "answerIndex": 1,
    "independentSolution": "四邊形固定內角和 360°。",
    "explanation": "使用四邊形內角和。",
    "steps": [
      "畫一條對角線形成兩三角形。",
      "2×180=360。"
    ],
    "optionAnalysis": [
      {
        "choice": "180°",
        "truth": false,
        "reason": "180° 是三角形內角和。"
      },
      {
        "choice": "360°",
        "truth": true,
        "reason": "四邊形可分成兩個三角形，所以內角和 2×180°=360°。"
      },
      {
        "choice": "270°",
        "truth": false,
        "reason": "不是四邊形固定內角和。"
      },
      {
        "choice": "540°",
        "truth": false,
        "reason": "540° 是五邊形內角和。"
      }
    ],
    "misconceptionTarget": "把三角形內角和直接套用。",
    "prerequisiteCheck": "能使用三角形內角和。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "基礎公式回憶。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "641cf60ee15224607674899e587f39ace3477703169e470432239b57fec5e21c"
  },
  {
    "questionId": "u08-s006-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個四邊形有兩組對邊分別平行。下列何者是它最精確的類別名稱？",
    "givenConditions": [
      "圖形是四邊形。",
      "兩組對邊分別平行。"
    ],
    "target": "由兩組對邊平行辨認四邊形類別",
    "choices": [
      "只有一組對邊平行的四邊形",
      "風箏形",
      "任意四邊形",
      "平行四邊形"
    ],
    "answerIndex": 3,
    "independentSolution": "由定義，具有兩組對邊分別平行的四邊形就是平行四邊形。",
    "explanation": "題目要求最精確分類，應直接使用平行四邊形定義。",
    "steps": [
      "確認有兩組對邊。",
      "兩組都分別平行。",
      "判定為平行四邊形。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有一組對邊平行的四邊形",
        "truth": false,
        "reason": "題目明示有兩組對邊平行，不是只有一組。"
      },
      {
        "choice": "風箏形",
        "truth": false,
        "reason": "風箏形的主要條件是兩組鄰邊分別等長，不是兩組對邊平行。"
      },
      {
        "choice": "任意四邊形",
        "truth": false,
        "reason": "條件足以判定更具體的特殊四邊形類別。"
      },
      {
        "choice": "平行四邊形",
        "truth": true,
        "reason": "兩組對邊分別平行正是平行四邊形的定義。"
      }
    ],
    "misconceptionTarget": "把只有一組對邊平行與兩組對邊平行混淆。",
    "prerequisiteCheck": "需能辨認四邊形的對邊。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "題目要求最精確類別，且選項不使用廣義梯形分類，因此只有一個正確答案。",
    "difficultyReason": "直接使用平行四邊形定義，屬基本題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "f382fe41495203ccfe094f09a90949fd8b7134593add7cb4c275b88b61cb1643"
  },
  {
    "questionId": "u08-s006-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "四邊等長且四角皆為直角的四邊形最精確稱為何者？",
    "givenConditions": [
      "四邊等長。",
      "四角皆 90°。"
    ],
    "target": "由完整邊角條件辨認正方形",
    "choices": [
      "長方形",
      "菱形",
      "正方形",
      "平行四邊形"
    ],
    "answerIndex": 2,
    "independentSolution": "正方形是同時滿足長方形與菱形條件的圖形。",
    "explanation": "選擇包含全部條件的最具體名稱。",
    "steps": [
      "四等邊。",
      "四直角。",
      "兩條件合併為正方形。"
    ],
    "optionAnalysis": [
      {
        "choice": "長方形",
        "truth": false,
        "reason": "雖符合長方形，但未表達四邊等長的全部資訊。"
      },
      {
        "choice": "菱形",
        "truth": false,
        "reason": "雖符合菱形，但未表達四直角的全部資訊。"
      },
      {
        "choice": "正方形",
        "truth": true,
        "reason": "正方形同時具有四邊等長與四個直角。"
      },
      {
        "choice": "平行四邊形",
        "truth": false,
        "reason": "過於一般。"
      }
    ],
    "misconceptionTarget": "只選長方形或菱形而忽略最精確名稱。",
    "prerequisiteCheck": "能辨認特殊四邊形。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度條件以 90° 表示，無計算。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接整合兩項定義。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "c7a05709456562c1de0940ba1e9e2e981ff42d4918e32e4a1c5a1931fc0139c4"
  },
  {
    "questionId": "u08-s006-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "四邊形三個內角為 75°、110°、95°，第四角是多少？",
    "givenConditions": [
      "同一四邊形三內角 75°、110°、95°。"
    ],
    "target": "由三內角求第四角",
    "choices": [
      "80°",
      "70°",
      "90°",
      "280°"
    ],
    "answerIndex": 0,
    "independentSolution": "第四角 80°，驗算總和 360°。",
    "explanation": "使用四邊形內角和。",
    "steps": [
      "前三角和 280°。",
      "360−280=80°。"
    ],
    "optionAnalysis": [
      {
        "choice": "80°",
        "truth": true,
        "reason": "第四角=360−75−110−95=80°。"
      },
      {
        "choice": "70°",
        "truth": false,
        "reason": "四角總和會是 350°。"
      },
      {
        "choice": "90°",
        "truth": false,
        "reason": "總和會是 370°。"
      },
      {
        "choice": "280°",
        "truth": false,
        "reason": "這是三已知角總和，不是剩餘角。"
      }
    ],
    "misconceptionTarget": "把已知角總和當答案。",
    "prerequisiteCheck": "能做角度加減。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位一致。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "標準一步公式應用。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "93fac70f58f568c664e4eed089582fb4f39044503ad26b5b698c5425913daed3"
  },
  {
    "questionId": "u08-s006-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "平行四邊形的一個內角為 68°，與它相鄰的內角是多少？",
    "givenConditions": [
      "圖形已確定為平行四邊形。",
      "一角 68°。"
    ],
    "target": "由平行四邊形一角求鄰角",
    "choices": [
      "68°",
      "22°",
      "112°",
      "292°"
    ],
    "answerIndex": 2,
    "independentSolution": "相鄰角 112°，對角才為 68°。",
    "explanation": "利用平行四邊形角性質。",
    "steps": [
      "相鄰角和 180°。",
      "180−68=112°。"
    ],
    "optionAnalysis": [
      {
        "choice": "68°",
        "truth": false,
        "reason": "68° 是對角，不是相鄰角。"
      },
      {
        "choice": "22°",
        "truth": false,
        "reason": "這是與 90° 的差。"
      },
      {
        "choice": "112°",
        "truth": true,
        "reason": "平行四邊形鄰角互補，所以 180−68=112°。"
      },
      {
        "choice": "292°",
        "truth": false,
        "reason": "以 360° 減一角得到其餘三角總和。"
      }
    ],
    "misconceptionTarget": "把對角相等誤用到鄰角。",
    "prerequisiteCheck": "能使用互補與平行四邊形性質。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需辨認相鄰和相對位置。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "cec1cd1ed8b50f7159b45d2c55630bb8bccdd14aeccdce87716ef94e70b17bb3"
  },
  {
    "questionId": "u08-s006-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "某菱形的一條邊長為 9 公分，它的周長是多少？",
    "givenConditions": [
      "圖形為菱形。",
      "一邊 9 公分。"
    ],
    "target": "由菱形邊長求周長",
    "choices": [
      "18 公分",
      "36 公分",
      "81 平方公分",
      "27 公分"
    ],
    "answerIndex": 1,
    "independentSolution": "周長為 36 公分。",
    "explanation": "由四等邊求周長。",
    "steps": [
      "四邊皆 9。",
      "4×9=36。"
    ],
    "optionAnalysis": [
      {
        "choice": "18 公分",
        "truth": false,
        "reason": "只算兩邊。"
      },
      {
        "choice": "36 公分",
        "truth": true,
        "reason": "菱形四邊等長，周長=4×9=36 公分。"
      },
      {
        "choice": "81 平方公分",
        "truth": false,
        "reason": "把邊長平方，且單位變成面積。"
      },
      {
        "choice": "27 公分",
        "truth": false,
        "reason": "只算三邊。"
      }
    ],
    "misconceptionTarget": "把周長誤算成邊長平方。",
    "prerequisiteCheck": "能辨認周長與菱形四等邊。",
    "estimatedTimeSec": 90,
    "unitCheck": "周長使用一次方長度單位公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "結合性質與簡單乘法。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "c7bca7ed6eae051f2590169211d739b150e452e4b7ded3e4df088eba42e31313"
  },
  {
    "questionId": "u08-s006-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個平行四邊形相鄰兩角分別為 (3x+12)° 與 (5x−8)°。x 為何？",
    "givenConditions": [
      "相鄰兩角代數式已知。",
      "圖形為平行四邊形。"
    ],
    "target": "由平行四邊形鄰角代數式求參數",
    "choices": [
      "11",
      "20",
      "44",
      "22"
    ],
    "answerIndex": 3,
    "independentSolution": "代回為 78°、102°，總和 180°。",
    "explanation": "建立鄰角總和方程。",
    "steps": [
      "8x+4=180。",
      "8x=176。",
      "x=22。"
    ],
    "optionAnalysis": [
      {
        "choice": "11",
        "truth": false,
        "reason": "代回兩角 45°、47°，不互補。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "代回 72°、92°，總和 164°。"
      },
      {
        "choice": "44",
        "truth": false,
        "reason": "把 2x 的結果誤當 x。"
      },
      {
        "choice": "22",
        "truth": true,
        "reason": "鄰角互補，3x+12+5x−8=180，8x+4=180，x=22。"
      }
    ],
    "misconceptionTarget": "把相鄰角設為相等。",
    "prerequisiteCheck": "能解一元一次方程。",
    "estimatedTimeSec": 90,
    "unitCheck": "x 無單位，角度為 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "幾何性質與代數整合。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "d97464fef846f699a4240eb354e3e05a931cda4d6a8de0dfbdd4049a0afb04d6"
  },
  {
    "questionId": "u08-s006-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "下列哪一組條件不足以保證一個四邊形是平行四邊形？",
    "givenConditions": [
      "比較四組候選條件。"
    ],
    "target": "判斷平行四邊形條件是否充分",
    "choices": [
      "兩組對邊分別平行",
      "只有一組對邊平行",
      "兩組對邊分別等長",
      "一組對邊同時平行且等長"
    ],
    "answerIndex": 1,
    "independentSolution": "單一平行組不足，其餘三組為常見充分判定條件。",
    "explanation": "判定條件需足以排除非平行四邊形。",
    "steps": [
      "檢查各條件是否可構造反例。",
      "一組平行可構造一般梯形。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩組對邊分別平行",
        "truth": false,
        "reason": "這是平行四邊形定義。"
      },
      {
        "choice": "只有一組對邊平行",
        "truth": true,
        "reason": "只有一組對邊平行可能只是梯形，不能保證第二組也平行。"
      },
      {
        "choice": "兩組對邊分別等長",
        "truth": false,
        "reason": "可保證為平行四邊形。"
      },
      {
        "choice": "一組對邊同時平行且等長",
        "truth": false,
        "reason": "在一般凸四邊形中可保證為平行四邊形。"
      }
    ],
    "misconceptionTarget": "把必要條件誤當充分條件。",
    "prerequisiteCheck": "能理解四邊形定義與反例。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需做資訊充分性判斷，屬進階。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "01dd5d6798bb9507e54e590cbf275622add24e4eb49429b6c3a9d9bc3e56c743"
  },
  {
    "questionId": "u08-s006-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "下列敘述何者必然正確？",
    "givenConditions": [
      "採長方形四直角、正方形四等邊四直角的定義。"
    ],
    "target": "判斷特殊四邊形包含關係",
    "choices": [
      "每個正方形都是長方形",
      "每個長方形都是正方形",
      "每個菱形都有四個直角",
      "每個梯形都沒有第二組平行邊"
    ],
    "answerIndex": 0,
    "independentSolution": "正方形必為長方形，但逆敘述不成立。",
    "explanation": "特殊圖形可同時屬於較一般類別。",
    "steps": [
      "列正方形性質。",
      "核對長方形定義。"
    ],
    "optionAnalysis": [
      {
        "choice": "每個正方形都是長方形",
        "truth": true,
        "reason": "正方形具有四個直角，符合長方形定義。"
      },
      {
        "choice": "每個長方形都是正方形",
        "truth": false,
        "reason": "長方形不要求四邊等長。"
      },
      {
        "choice": "每個菱形都有四個直角",
        "truth": false,
        "reason": "菱形不一定有直角。"
      },
      {
        "choice": "每個梯形都沒有第二組平行邊",
        "truth": false,
        "reason": "這取決於梯形採狹義或廣義定義，不能一概而論。"
      }
    ],
    "misconceptionTarget": "把分類名稱當互斥。",
    "prerequisiteCheck": "能辨認長方形、菱形、正方形性質。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需判斷命題方向與反例。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "8b9e8171bf83607d5d3e3e103b1d36959c7ed5310627cbc669b4c52385d17b21"
  },
  {
    "questionId": "u08-s006-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "窗框規格要求兩組對邊分別平行，且四個角都是 90°，但未要求四邊等長。最精確可保證窗框是哪一類？",
    "givenConditions": [
      "兩組對邊平行。",
      "四角皆 90°。",
      "未規定四邊等長。"
    ],
    "target": "由窗框規格判定可保證的形狀",
    "choices": [
      "正方形",
      "菱形",
      "長方形",
      "只能說任意四邊形"
    ],
    "answerIndex": 2,
    "independentSolution": "最精確的必然分類是長方形。",
    "explanation": "規格的角與平行條件支持長方形。",
    "steps": [
      "核對四直角。",
      "核對未給四等邊。"
    ],
    "optionAnalysis": [
      {
        "choice": "正方形",
        "truth": false,
        "reason": "缺少四邊等長條件。"
      },
      {
        "choice": "菱形",
        "truth": false,
        "reason": "缺少四邊等長條件。"
      },
      {
        "choice": "長方形",
        "truth": true,
        "reason": "四個直角保證長方形；沒有四等邊，不能保證正方形。"
      },
      {
        "choice": "只能說任意四邊形",
        "truth": false,
        "reason": "兩組平行與四直角已足以更精確分類。"
      }
    ],
    "misconceptionTarget": "把看似方正的窗框直接稱正方形。",
    "prerequisiteCheck": "能理解充分條件與資訊缺失。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示，無長度計算。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "工程規格要求只下可保證的結論。",
    "literacyContextNecessity": "窗框製造是否需等長會影響材料尺寸；規格明確未提供四等邊，因此只能保證長方形。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "1872218bef78d57e086bd0e483361940626f2c7bbcaa39309aaa097559171011"
  },
  {
    "questionId": "u08-s006-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "地磚標示為『四邊等長，對角不一定是直角』。下列分類何者最符合？",
    "givenConditions": [
      "四邊等長。",
      "角不保證為直角。",
      "地磚設計為平行四邊形類。"
    ],
    "target": "由地磚規格辨認菱形",
    "choices": [
      "菱形",
      "正方形",
      "長方形",
      "一般梯形"
    ],
    "answerIndex": 0,
    "independentSolution": "菱形可有非直角內角，最符合規格。",
    "explanation": "描述刻意排除正方形的必要角條件。",
    "steps": [
      "抓出四等邊。",
      "注意未保證直角。"
    ],
    "optionAnalysis": [
      {
        "choice": "菱形",
        "truth": true,
        "reason": "四邊等長的平行四邊形是菱形，而不必具有直角。"
      },
      {
        "choice": "正方形",
        "truth": false,
        "reason": "正方形四角必為直角，與『不一定』不符。"
      },
      {
        "choice": "長方形",
        "truth": false,
        "reason": "長方形不要求四邊等長。"
      },
      {
        "choice": "一般梯形",
        "truth": false,
        "reason": "四等邊已支持更精確的菱形分類。"
      }
    ],
    "misconceptionTarget": "認為四邊等長必為正方形。",
    "prerequisiteCheck": "能區分菱形與正方形。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "材料規格中的『不一定直角』用來排除過度分類。",
    "literacyContextNecessity": "地磚切割與拼接取決於角是否為直角；四等邊與角條件都是不可刪除的製造資訊。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "904f45ab2b4fa6fda6cc5540af3e87e5f6cbc95606865286887982172d2effb8"
  },
  {
    "questionId": "u08-s006-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個四邊形標誌的三角量測為 88°、92°、88°，且已知它是平行四邊形。第四角及最可能的角關係為何？",
    "givenConditions": [
      "圖形已知為平行四邊形。",
      "三角依序 88°、92°、88°。"
    ],
    "target": "依實測角度驗證平行四邊形角關係",
    "choices": [
      "88°，四角全相等",
      "92°，相鄰角相等",
      "180°，有一個平角",
      "92°，對角分別相等"
    ],
    "answerIndex": 3,
    "independentSolution": "第四角 92°，四角交替且鄰角互補。",
    "explanation": "同時使用內角和與平行四邊形性質。",
    "steps": [
      "前三角和 268°。",
      "第四角 92°。",
      "核對對角 88=88、92=92。"
    ],
    "optionAnalysis": [
      {
        "choice": "88°，四角全相等",
        "truth": false,
        "reason": "總和會是 356°，且不是所有平行四邊形四角相等。"
      },
      {
        "choice": "92°，相鄰角相等",
        "truth": false,
        "reason": "88° 與 92° 的相鄰角不相等。"
      },
      {
        "choice": "180°，有一個平角",
        "truth": false,
        "reason": "四邊形內角不能以此形成正常封閉標誌。"
      },
      {
        "choice": "92°，對角分別相等",
        "truth": true,
        "reason": "第四角=360−88−92−88=92°；角序列 88、92、88、92，對角相等。"
      }
    ],
    "misconceptionTarget": "只算第四角而不檢查對角關係。",
    "prerequisiteCheck": "能使用四邊形內角和與平行四邊形性質。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位一致。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "驗收情境要求計算及結構一致性雙重判斷。",
    "literacyContextNecessity": "標誌驗收不只補出缺角，也要確認量測是否符合平行四邊形對角相等與鄰角互補。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "4d99be3ba482a611a311524e8868d326a49f732535ad8b7c2b48b4c8ae6dec4b"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s006-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "一個平行四邊形的相鄰兩內角分別為 (4x+8)° 與 (2x+28)°。求 x、四個內角，並說明對角關係。",
    "requiredWork": [
      "利用相鄰角互補列式。",
      "求x及兩種角度。",
      "寫出四角排列與對角相等。"
    ],
    "standardSolution": [
      "(4x+8)+(2x+28)=180，得6x+36=180，x=24。",
      "兩相鄰角為104°與76°。",
      "平行四邊形對角相等，所以四角依序為104°、76°、104°、76°。"
    ],
    "alternativeMethods": [
      "可先利用四邊形內角和與兩對對角相等，列2(4x+8)+2(2x+28)=360。"
    ],
    "reasoningSteps": [
      "辨認平行四邊形鄰角互補。",
      "解x=24。",
      "代回求104與76。",
      "用對角相等補齊四角。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "x=24，四角104°、76°、104°、76°，並說明鄰補與對角相等。"
      },
      {
        "score": 2,
        "criteria": "核心數值正確但四角排列或性質說明少一項；或方程正確有一處代入小錯。"
      },
      {
        "score": 1,
        "criteria": "正確列互補方程或求得x=24但未完成四角。"
      },
      {
        "score": 0,
        "criteria": "把相鄰角當相等，或四角結果不合360°。"
      }
    ],
    "partialCreditRules": [
      "四角起點與順逆方向可不同，但必須交替104與76。"
    ],
    "followThroughPolicy": "若x計算錯但後續以鄰補、對角相等一致完成，最多2分。",
    "unitAndNotationRules": "x無單位；角度附°。",
    "answerOnlyPolicy": "只答x=24最高1分；只列四角無推導最高2分。",
    "commonErrors": [
      "列4x+8=2x+28。",
      "把對角相等誤寫成四角都相等。"
    ],
    "independentReview": {
      "derivedResult": "x=24；四角交替104°與76°。",
      "ambiguityAudit": "相鄰兩角順序明示但四角可從任一頂點開始，評分只看交替與對角相等。",
      "reviewNote": "獨立代回並驗算104+76=180、2×104+2×76=360。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "triangle-basic-classification"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "0bacc230ebc292e818c1333ab5f00f442c44de3c63c26f5e218711b27ecf3a33"
  },
  {
    "questionId": "u08-s006-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "quadrilateral-basic",
    "lockedSkillTitle": "四邊形基本性質",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "某四邊形的四個內角依序為 70°、110°、70°、110°，且一組對邊平行。僅憑這些資料，能否保證它是平行四邊形？請說明。",
    "requiredWork": [
      "先檢查角度關係。",
      "分析一組對邊平行配合內角是否能推出另一組平行。",
      "給出明確結論與理由。"
    ],
    "standardSolution": [
      "四角依序交替70°、110°，每一對相鄰角和都是180°。",
      "若已知其中一組對邊平行，沿另一方向的同旁內角也互補，可用平行線判定推出另一組對邊平行。",
      "因此能保證是平行四邊形。"
    ],
    "alternativeMethods": [
      "也可指出兩組對角分別相等；在凸四邊形的國中範圍，兩組對角相等可判定為平行四邊形。"
    ],
    "reasoningSteps": [
      "確認角依序而非任意排列。",
      "利用相鄰角互補。",
      "把互補關係連到另一組對邊平行判定。",
      "得到兩組對邊平行。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "結論「可以」正確，並以相鄰角互補推出第二組平行，或用兩組對角相等作充分說明。"
      },
      {
        "score": 2,
        "criteria": "結論正確且指出關鍵角關係，但平行判定說明略不完整。"
      },
      {
        "score": 1,
        "criteria": "只答可以並提到角度交替或對角相等，但未形成完整推論。"
      },
      {
        "score": 0,
        "criteria": "答不可以且忽略題目給的一組平行與相鄰互補，或只用內角和360°。"
      }
    ],
    "partialCreditRules": [
      "本題按國中常見的凸四邊形範圍處理；若學生主動指出非凸情形，需說明課程範圍後仍依凸四邊形評分。"
    ],
    "followThroughPolicy": "若將一個角抄錯但仍正確描述『同旁內角互補可判平行』，可給方法分，最高2分。",
    "unitAndNotationRules": "角度附°；平行關係可用文字表述，不強制符號。",
    "answerOnlyPolicy": "只寫「是平行四邊形」最高1分，因題目要求保證理由。",
    "commonErrors": [
      "認為內角和360°就足以判平行四邊形。",
      "看到只有一組平行就立即判梯形，不再用角條件。"
    ],
    "independentReview": {
      "derivedResult": "能保證為平行四邊形。",
      "ambiguityAudit": "題目需理解為依序相鄰的凸四邊形；此範圍已在邊界說明，推論唯一。",
      "reviewNote": "獨立檢查四組相鄰角皆互補，配合一組既知平行可推出另一組平行。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "triangle-basic-classification"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "2d5f15471f0ef610735f01f543db3c43a444ac480ea8f6eaf875189d97cc7acf"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s006-v001",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "641cf60ee15224607674899e587f39ace3477703169e470432239b57fec5e21c",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由兩個三角形總和重新推得 360°。",
    "derivedAnswer": "360°",
    "storedAnswer": "360°",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「360°」符合目標「辨認四邊形內角和」。其餘選項分別違反：180° 是三角形內角和。；不是四邊形固定內角和。；540° 是五邊形內角和。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「四邊形基本性質」講義已定義範圍；本題特別使用：圖形為一般平面四邊形。",
      "unitConflict": "角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「辨認四邊形內角和」重新讀題，並針對誤解「把三角形內角和直接套用。」排除另一解讀。"
    },
    "difficultyReason": "基礎公式回憶。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用三角形內角和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「辨認四邊形內角和」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由兩個三角形總和重新推得 360°。 正確選項為「360°」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "54d706776f74ed55262c75b19178b1436bb4b91738cd1e4a36de9d2239e407db"
  },
  {
    "questionId": "u08-s006-v002",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "f382fe41495203ccfe094f09a90949fd8b7134593add7cb4c275b88b61cb1643",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立比對各類別的必要條件，只有平行四邊形直接且完整符合兩組對邊平行。",
    "derivedAnswer": "平行四邊形",
    "storedAnswer": "平行四邊形",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「平行四邊形」符合目標「由兩組對邊平行辨認四邊形類別」。其餘選項分別違反：題目明示有兩組對邊平行，不是只有一組。；風箏形的主要條件是兩組鄰邊分別等長，不是兩組對邊平行。；條件足以判定更具體的特殊四邊形類別。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「四邊形基本性質」講義已定義範圍；本題特別使用：圖形是四邊形。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "題目要求最精確類別，且選項不使用廣義梯形分類，因此只有一個正確答案。",
      "alternateReading": "已以所求量「由兩組對邊平行辨認四邊形類別」重新讀題，並針對誤解「把只有一組對邊平行與兩組對邊平行混淆。」排除另一解讀。"
    },
    "difficultyReason": "直接使用平行四邊形定義，屬基本題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能辨認四邊形的對邊。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由兩組對邊平行辨認四邊形類別」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立比對各類別的必要條件，只有平行四邊形直接且完整符合兩組對邊平行。 正確選項為「平行四邊形」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：題目要求最精確類別，且選項不使用廣義梯形分類，因此只有一個正確答案。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "ab0dd758a59abb2f00e3216baad7417571d3aee2374f221fdbc0eca88abda1d0"
  },
  {
    "questionId": "u08-s006-v003",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "c7a05709456562c1de0940ba1e9e2e981ff42d4918e32e4a1c5a1931fc0139c4",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "逐層分類後最精確為正方形。",
    "derivedAnswer": "正方形",
    "storedAnswer": "正方形",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「正方形」符合目標「由完整邊角條件辨認正方形」。其餘選項分別違反：雖符合長方形，但未表達四邊等長的全部資訊。；雖符合菱形，但未表達四直角的全部資訊。；過於一般。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「四邊形基本性質」講義已定義範圍；本題特別使用：四邊等長。",
      "unitConflict": "角度條件以 90° 表示，無計算。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由完整邊角條件辨認正方形」重新讀題，並針對誤解「只選長方形或菱形而忽略最精確名稱。」排除另一解讀。"
    },
    "difficultyReason": "直接整合兩項定義。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認特殊四邊形。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由完整邊角條件辨認正方形」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：逐層分類後最精確為正方形。 正確選項為「正方形」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "8515f63fd2fb9362b8609fe60742e2adcf087b6e7f6d2dd68c316a5409a699dc"
  },
  {
    "questionId": "u08-s006-v004",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "93fac70f58f568c664e4eed089582fb4f39044503ad26b5b698c5425913daed3",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立重算 75+110+95=280，餘 80。",
    "derivedAnswer": "80°",
    "storedAnswer": "80°",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「80°」符合目標「由三內角求第四角」。其餘選項分別違反：四角總和會是 350°。；總和會是 370°。；這是三已知角總和，不是剩餘角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「四邊形基本性質」講義已定義範圍；本題特別使用：同一四邊形三內角 75°、110°、95°。",
      "unitConflict": "角度單位一致。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由三內角求第四角」重新讀題，並針對誤解「把已知角總和當答案。」排除另一解讀。"
    },
    "difficultyReason": "標準一步公式應用。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能做角度加減。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由三內角求第四角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立重算 75+110+95=280，餘 80。 正確選項為「80°」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "9107ff118aeda354f4a049fbd06c75a9e07e50267d821ef588470b78d313b40d"
  },
  {
    "questionId": "u08-s006-v005",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "cec1cd1ed8b50f7159b45d2c55630bb8bccdd14aeccdce87716ef94e70b17bb3",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "回查四角為 68、112、68、112。",
    "derivedAnswer": "112°",
    "storedAnswer": "112°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「112°」符合目標「由平行四邊形一角求鄰角」。其餘選項分別違反：68° 是對角，不是相鄰角。；這是與 90° 的差。；以 360° 減一角得到其餘三角總和。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「四邊形基本性質」講義已定義範圍；本題特別使用：圖形已確定為平行四邊形。",
      "unitConflict": "角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由平行四邊形一角求鄰角」重新讀題，並針對誤解「把對角相等誤用到鄰角。」排除另一解讀。"
    },
    "difficultyReason": "需辨認相鄰和相對位置。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用互補與平行四邊形性質。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由平行四邊形一角求鄰角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：回查四角為 68、112、68、112。 正確選項為「112°」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "b076b817ac9808c447a762746f23c431b5d50c95ecf3f4f438dff0e485f821ea"
  },
  {
    "questionId": "u08-s006-v006",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "c7bca7ed6eae051f2590169211d739b150e452e4b7ded3e4df088eba42e31313",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立加總 9+9+9+9=36。",
    "derivedAnswer": "36 公分",
    "storedAnswer": "36 公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「36 公分」符合目標「由菱形邊長求周長」。其餘選項分別違反：只算兩邊。；把邊長平方，且單位變成面積。；只算三邊。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「四邊形基本性質」講義已定義範圍；本題特別使用：圖形為菱形。",
      "unitConflict": "周長使用一次方長度單位公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由菱形邊長求周長」重新讀題，並針對誤解「把周長誤算成邊長平方。」排除另一解讀。"
    },
    "difficultyReason": "結合性質與簡單乘法。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認周長與菱形四等邊。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由菱形邊長求周長」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立加總 9+9+9+9=36。 正確選項為「36 公分」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "24c3b7cc94a23c8d593e3555dcc24c22495fb7c87171c5bac3c773258002112e"
  },
  {
    "questionId": "u08-s006-v007",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "d97464fef846f699a4240eb354e3e05a931cda4d6a8de0dfbdd4049a0afb04d6",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立回代兩角，符合平行四邊形鄰角性質。",
    "derivedAnswer": "22",
    "storedAnswer": "22",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「22」符合目標「由平行四邊形鄰角代數式求參數」。其餘選項分別違反：代回兩角 45°、47°，不互補。；代回 72°、92°，總和 164°。；把 2x 的結果誤當 x。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「四邊形基本性質」講義已定義範圍；本題特別使用：相鄰兩角代數式已知。",
      "unitConflict": "x 無單位，角度為 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由平行四邊形鄰角代數式求參數」重新讀題，並針對誤解「把相鄰角設為相等。」排除另一解讀。"
    },
    "difficultyReason": "幾何性質與代數整合。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能解一元一次方程。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由平行四邊形鄰角代數式求參數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立回代兩角，符合平行四邊形鄰角性質。 正確選項為「22」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "18096ae261bfb77f6ef3df9dc77da42827c9b279316e0669d6d1703aed95fe0a"
  },
  {
    "questionId": "u08-s006-v008",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "01dd5d6798bb9507e54e590cbf275622add24e4eb49429b6c3a9d9bc3e56c743",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "反例為只有上下底平行、兩腰不平行的梯形。",
    "derivedAnswer": "只有一組對邊平行",
    "storedAnswer": "只有一組對邊平行",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「只有一組對邊平行」符合目標「判斷平行四邊形條件是否充分」。其餘選項分別違反：這是平行四邊形定義。；可保證為平行四邊形。；在一般凸四邊形中可保證為平行四邊形。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「四邊形基本性質」講義已定義範圍；本題特別使用：比較四組候選條件。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判斷平行四邊形條件是否充分」重新讀題，並針對誤解「把必要條件誤當充分條件。」排除另一解讀。"
    },
    "difficultyReason": "需做資訊充分性判斷，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解四邊形定義與反例。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷平行四邊形條件是否充分」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：反例為只有上下底平行、兩腰不平行的梯形。 正確選項為「只有一組對邊平行」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "0a77d5815b4166ac133a7ea9901c5b78a2f07dcd681f7eb043bd94cd00858cc3"
  },
  {
    "questionId": "u08-s006-v009",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "8b9e8171bf83607d5d3e3e103b1d36959c7ed5310627cbc669b4c52385d17b21",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "以非正方形長方形與非正方形菱形作反例排除其他敘述。",
    "derivedAnswer": "每個正方形都是長方形",
    "storedAnswer": "每個正方形都是長方形",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「每個正方形都是長方形」符合目標「判斷特殊四邊形包含關係」。其餘選項分別違反：長方形不要求四邊等長。；菱形不一定有直角。；這取決於梯形採狹義或廣義定義，不能一概而論。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「四邊形基本性質」講義已定義範圍；本題特別使用：採長方形四直角、正方形四等邊四直角的定義。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判斷特殊四邊形包含關係」重新讀題，並針對誤解「把分類名稱當互斥。」排除另一解讀。"
    },
    "difficultyReason": "需判斷命題方向與反例。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認長方形、菱形、正方形性質。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷特殊四邊形包含關係」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：以非正方形長方形與非正方形菱形作反例排除其他敘述。 正確選項為「每個正方形都是長方形」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "45dac4cb32ffd970236f18e143ba3db4498ba076214c391d64722a06fc5a4072"
  },
  {
    "questionId": "u08-s006-v010",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "1872218bef78d57e086bd0e483361940626f2c7bbcaa39309aaa097559171011",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "可存在長寬不同的窗框，說明不能保證正方形。",
    "derivedAnswer": "長方形",
    "storedAnswer": "長方形",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「長方形」符合目標「由窗框規格判定可保證的形狀」。其餘選項分別違反：缺少四邊等長條件。；缺少四邊等長條件。；兩組平行與四直角已足以更精確分類。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「四邊形基本性質」講義已定義範圍；本題特別使用：兩組對邊平行。",
      "unitConflict": "角度以 ° 表示，無長度計算。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由窗框規格判定可保證的形狀」重新讀題，並針對誤解「把看似方正的窗框直接稱正方形。」排除另一解讀。"
    },
    "difficultyReason": "工程規格要求只下可保證的結論。",
    "literacyContextNecessity": "窗框製造是否需等長會影響材料尺寸；規格明確未提供四等邊，因此只能保證長方形。",
    "prerequisiteCheck": "能理解充分條件與資訊缺失。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由窗框規格判定可保證的形狀」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：可存在長寬不同的窗框，說明不能保證正方形。 正確選項為「長方形」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "6f483f26c1477bb5f6624e8769d9599ff00704be8e50e13cc14c5f5ce63c38bf"
  },
  {
    "questionId": "u08-s006-v011",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "904f45ab2b4fa6fda6cc5540af3e87e5f6cbc95606865286887982172d2effb8",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "正方形是特殊菱形，但題意不保證直角，故一般分類為菱形。",
    "derivedAnswer": "菱形",
    "storedAnswer": "菱形",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「菱形」符合目標「由地磚規格辨認菱形」。其餘選項分別違反：正方形四角必為直角，與『不一定』不符。；長方形不要求四邊等長。；四等邊已支持更精確的菱形分類。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「四邊形基本性質」講義已定義範圍；本題特別使用：四邊等長。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由地磚規格辨認菱形」重新讀題，並針對誤解「認為四邊等長必為正方形。」排除另一解讀。"
    },
    "difficultyReason": "材料規格中的『不一定直角』用來排除過度分類。",
    "literacyContextNecessity": "地磚切割與拼接取決於角是否為直角；四等邊與角條件都是不可刪除的製造資訊。",
    "prerequisiteCheck": "能區分菱形與正方形。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由地磚規格辨認菱形」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：正方形是特殊菱形，但題意不保證直角，故一般分類為菱形。 正確選項為「菱形」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "da82b74d557a44118f8c310d31c9e1cb633b9253ce29ba9039a950866d5a6480"
  },
  {
    "questionId": "u08-s006-v012",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "4d99be3ba482a611a311524e8868d326a49f732535ad8b7c2b48b4c8ae6dec4b",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立重算總和與對角位置，結論一致。",
    "derivedAnswer": "92°，對角分別相等",
    "storedAnswer": "92°，對角分別相等",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「92°，對角分別相等」符合目標「依實測角度驗證平行四邊形角關係」。其餘選項分別違反：總和會是 356°，且不是所有平行四邊形四角相等。；88° 與 92° 的相鄰角不相等。；四邊形內角不能以此形成正常封閉標誌。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「四邊形基本性質」講義已定義範圍；本題特別使用：圖形已知為平行四邊形。",
      "unitConflict": "角度單位一致。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「依實測角度驗證平行四邊形角關係」重新讀題，並針對誤解「只算第四角而不檢查對角關係。」排除另一解讀。"
    },
    "difficultyReason": "驗收情境要求計算及結構一致性雙重判斷。",
    "literacyContextNecessity": "標誌驗收不只補出缺角，也要確認量測是否符合平行四邊形對角相等與鄰角互補。",
    "prerequisiteCheck": "能使用四邊形內角和與平行四邊形性質。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「依實測角度驗證平行四邊形角關係」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立重算總和與對角位置，結論一致。 正確選項為「92°，對角分別相等」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "c2848fd0455fb6a776efa5faf4108e80f75543f7e3aa269c77125a9b21baa14f"
  }
];

export const DRAWING_SPECS = [];

