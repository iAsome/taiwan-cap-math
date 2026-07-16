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
      "definition": "依臺灣國中教材，只有一組對邊平行，且另一組對邊不平行的四邊形。"
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
    "同樣的局部條件可能不足以唯一分類。若只有一組對邊平行，還要確認另一組對邊不平行，才能依臺灣教材定義判為梯形；兩組對邊都平行時應判為平行四邊形。"
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
    "依本專案臺灣國中課程用語，梯形必須只有一組對邊平行；兩組都平行的圖形應歸入平行四邊形。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "列出題目明示的平行、等長、直角與角度條件。",
      "check": "只採題目給定性質，不從外觀自行補條件。"
    },
    {
      "step": 2,
      "instruction": "先用最基本定義判斷一般類別。",
      "check": "兩組對邊分別平行才可直接判為平行四邊形。"
    },
    {
      "step": 3,
      "instruction": "依臺灣教材檢查梯形是否只有一組對邊平行。",
      "check": "另一組也平行時應歸入平行四邊形，不稱梯形。"
    },
    {
      "step": 4,
      "instruction": "再用四直角或四邊等長縮小到特殊類別。",
      "check": "長方形、菱形、正方形的附加條件是否完整？"
    },
    {
      "step": 5,
      "instruction": "求角度時使用內角和、鄰角互補與對角相等。",
      "check": "代回後四角總和是否為三百六十度？"
    },
    {
      "step": 6,
      "instruction": "以最精確且必然成立的名稱或性質作答。",
      "check": "有沒有把可能成立誤寫成一定成立？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "四邊形三內角為 80°、95°、105°，第四角為何？",
      "solutionSteps": [
        "四邊形內角和 360°。",
        "360°−80°−95°−105°=80°。",
        "四角相加為三百六十度。"
      ],
      "answer": "80°。",
      "why": "先把三個已知角合計為二百八十度，再由四邊形固定內角和求差；代回總和驗證，能避免誤套三角形的一百八十度。"
    },
    {
      "exampleId": "L2",
      "prompt": "某四邊形兩組對邊分別平行，可先判定為何種圖形？",
      "solutionSteps": [
        "兩組對邊分別平行正是平行四邊形定義。",
        "未給直角或四邊等長，不能再縮小類別。"
      ],
      "answer": "平行四邊形。",
      "why": "答案只使用題目明示的兩組平行條件，既能直接套定義，也保留未給的角與邊資訊，不會過度判成長方形、菱形或正方形。"
    },
    {
      "exampleId": "L3",
      "prompt": "某平行四邊形四邊等長，但沒有直角，最精確可稱為何？",
      "solutionSteps": [
        "四邊等長的平行四邊形符合菱形定義。",
        "沒有直角，因此不符合正方形的附加條件。"
      ],
      "answer": "菱形。",
      "why": "四邊等長足以從平行四邊形縮小到菱形，而沒有直角明確排除正方形；這個判斷同時使用了正向條件與排除條件。"
    },
    {
      "exampleId": "L4",
      "prompt": "某四邊形四邊等長且四角皆為 90°，它同時屬於哪些常見類別？",
      "solutionSteps": [
        "四角直角符合長方形；四邊等長符合菱形。",
        "兩組對邊也分別平行，因此同時是平行四邊形。",
        "最具體名稱為正方形。"
      ],
      "answer": "正方形、長方形、菱形與平行四邊形。",
      "why": "特殊四邊形可同時屬於較一般類別；四直角與四等邊共同決定正方形，並不會取消它原本符合的長方形、菱形與平行四邊形定義。"
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
      "mistake": "把平行四邊形也當成梯形。",
      "why": "誤以為有一組對邊平行就足夠。",
      "correction": "再檢查另一組對邊不平行，才能判為梯形。"
    }
  ],
  "selfCheckItems": [
    "我是否只使用題目提供的條件？",
    "內角和是否用 360°？",
    "我能說明正方形與長方形、菱形的包含關係嗎？",
    "我是否檢查梯形只有一組對邊平行？"
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
    "skillSpecificEvidence": "逐項以定義檢查特殊四邊形包含關係；內角例題重算 80+95+105+80=360，並依臺灣國中教材確認梯形只有一組對邊平行。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "d86f1fb2316d441dc7242e9ff204072c1228d2f18a2bd18b570dbaeed5cb1868"
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
    "explanation": "從四邊形任一頂點連到不相鄰頂點，可分成兩個不重疊三角形。每個三角形內角和是一百八十度，所以四邊形內角和為 2×180°=360°；此性質不要求四邊形是特殊類型。",
    "steps": [
      "在四邊形內連一條對角線，把圖形分成兩個三角形。",
      "將兩個三角形內角和相加，得到 180°+180°。",
      "確認四個內角總和為 360°，選第二項。"
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
    "misconceptionTarget": "把四邊形誤當一個三角形而回答一百八十度，或誤用五邊形公式。",
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
    "contentSha256": "af0a555bb495c4993fbbfd508b8e6c3e936097babb72d0a2bf0e273c29de13b9"
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
    "explanation": "平行四邊形的定義就是兩組對邊分別平行，題目已完整給出這項條件，所以最精確可判為平行四邊形。依臺灣教材，梯形只有一組對邊平行；風箏形則要求鄰邊成對等長，都不符合所給的最精確資訊。",
    "steps": [
      "將題目給的兩組對邊分別平行與各類四邊形定義比對。",
      "確認此條件正好滿足平行四邊形的定義。",
      "排除只有一組對邊平行的梯形與需要鄰邊等長的風箏形。"
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
    "misconceptionTarget": "只說一般四邊形而忽略更精確定義，或把兩組平行誤判成梯形。",
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
    "contentSha256": "0e1589edf529ee8dca80e029defec0f43f4e5ea448eeb43c0ad905fbf808d2ec"
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
    "explanation": "四邊等長使圖形具備菱形條件，四個角都是直角又具備長方形條件；同時滿足兩組條件的最精確名稱是正方形。雖然正方形也屬於長方形、菱形和平行四邊形，但題目要求最精確類別。",
    "steps": [
      "由四邊等長辨認菱形性質。",
      "由四角皆為直角辨認長方形性質。",
      "合併兩項條件，選同時具有兩種性質的正方形。"
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
    "misconceptionTarget": "只使用其中一項條件選長方形或菱形，沒有選最精確的正方形。",
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
    "contentSha256": "a266e8e99e5323882b1b21511e3ac6ff0e56b30b3309a90e8a0af1e6bb60db35"
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
    "explanation": "四邊形內角和為三百六十度。三個已知角相加為 75°+110°+95°=280°，所以第四角為 360°−280°=80°；代回四角總和確為三百六十度，且八十度是合理的內角。",
    "steps": [
      "先將三個已知內角相加，得到 280°。",
      "用四邊形內角和 360° 減去 280°。",
      "得到第四角 80°，再把四角相加完成驗算。"
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
    "misconceptionTarget": "把三角形內角和一百八十度套到四邊形，或只減去其中兩個角。",
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
    "contentSha256": "392396589be2e326b2d1b34323eaff242718beb9aa231780829b9044d181a997"
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
    "explanation": "平行四邊形的相鄰內角互補，因此相鄰角與六十八度的總和為一百八十度。計算 180°−68°=112°，所以相鄰角是一百一十二度；六十八度會出現在對角位置，而不是相鄰位置。",
    "steps": [
      "辨認題目問的是平行四邊形的相鄰角。",
      "使用鄰角互補，列出未知角加 68° 等於 180°。",
      "相減得 112°，並以 68°+112°=180° 驗算。"
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
    "misconceptionTarget": "把對角相等的性質誤用到相鄰角，直接回答六十八度。",
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
    "contentSha256": "1ff1f15b5e8f2da84d145129ce01178db005cf59238377096141814a9cbf0df4"
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
    "explanation": "菱形四條邊都等長，已知其中一邊九公分，四邊便各為九公分。周長是邊界長度總和，所以 9×4=36 公分；平方公分是面積單位，不能用在本題的周長答案。",
    "steps": [
      "由菱形定義確定四條邊都長九公分。",
      "把四邊長相加，或計算 4×9。",
      "得到三十六公分，並檢查答案使用長度單位。"
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
    "misconceptionTarget": "把邊長平方當成周長，或只把兩條邊相加而少算另外兩邊。",
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
    "contentSha256": "acb593b7b26c5367782ceb1093dcd8091306896376d7108876dfdfb1aba4d752"
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
    "explanation": "平行四邊形相鄰內角互補，故 (3x+12)+(5x−8)=180。整理得 8x+4=180，8x=176，所以 x=22；代回兩角為七十八度與一百零二度，相加一百八十度且皆為正角，答案唯一。",
    "steps": [
      "以鄰角互補列出兩個角式的和等於 180°。",
      "合併同類項得 8x+4=180，解得 x=22。",
      "代回算出 78°、102°，驗證兩角互補。"
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
    "misconceptionTarget": "把相鄰角設成相等，或展開負八時符號錯誤而得到其他數值。",
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
    "contentSha256": "5de3269568a7a5b5e11a4f1f7580c4505c5b6c6ed3fda7badbc3267d5d2fd7cf"
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
    "explanation": "只有一組對邊平行時，依臺灣教材可形成梯形，不能保證另一組也平行，所以不足以判定平行四邊形。其餘三項分別是定義、兩組對邊等長判定，以及一組對邊同時平行且等長判定，皆足以保證。",
    "steps": [
      "逐項比對平行四邊形的定義與常用充分判定。",
      "確認只有一組對邊平行仍可能是梯形，無法推出第二組平行。",
      "檢查其餘三項都能排除非平行四邊形，因此選第二項。"
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
    "misconceptionTarget": "誤以為出現任何一組平行邊就能判為平行四邊形，忽略第二組對邊。",
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
    "contentSha256": "5cc30da4cf6ea9a2aa79edfcf75f12732d8ea5916169a2eea3be3dd71ad4cd9d"
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
      "每個梯形的兩組對邊都互相平行"
    ],
    "answerIndex": 0,
    "independentSolution": "正方形有四個直角，符合長方形定義，所以第一項必然正確。依臺灣國中教材，梯形只有一組對邊平行，故第四項錯誤。",
    "explanation": "正方形具有四個直角，因此一定同時是長方形。長方形不一定四邊等長，菱形不一定有直角；臺灣教材中的梯形只有一組對邊平行，不會有兩組對邊都平行。",
    "steps": [
      "逐一列出正方形、長方形、菱形與梯形的定義條件。",
      "檢查正方形的四個直角，確認它一定符合長方形定義。",
      "以非正方形的長方形、無直角的菱形與梯形定義排除其餘三項。"
    ],
    "optionAnalysis": [
      {
        "choice": "每個正方形都是長方形",
        "truth": true,
        "reason": "正方形的四個內角都是90°，完全符合長方形有四個直角的定義。"
      },
      {
        "choice": "每個長方形都是正方形",
        "truth": false,
        "reason": "長方形只要四角為直角，不要求四邊等長，所以可以不是正方形。"
      },
      {
        "choice": "每個菱形都有四個直角",
        "truth": false,
        "reason": "菱形要求四邊等長，但內角不一定是直角。"
      },
      {
        "choice": "每個梯形的兩組對邊都互相平行",
        "truth": false,
        "reason": "臺灣國中教材定義梯形只有一組對邊平行，另一組對邊不平行。"
      }
    ],
    "misconceptionTarget": "把正方形、長方形、菱形的包含關係當成互斥分類，或誤用廣義梯形定義。",
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
    "contentSha256": "dfc9415912636a63254b4c7e68c2bf94d28ddf70fedf017c1d5eafd9e03163a9"
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
    "explanation": "兩組對邊分別平行且四角都是九十度，完整符合長方形定義。正方形還必須四邊等長，題目未給；菱形也需四邊等長。因此最精確能保證的是長方形，不能由外觀自行補上等邊條件。",
    "steps": [
      "整理規格中的兩組對邊平行與四個直角。",
      "用四角皆為直角判定此平行四邊形是長方形。",
      "檢查題目未給四邊等長，排除必然為正方形或菱形。"
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
    "misconceptionTarget": "看到四個直角就自行假設四邊等長，將一般長方形誤判為正方形。",
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
    "contentSha256": "6148eed6733d2ac295a5a27739bd3a9a41c898964414326545c615a7e6d8be0f"
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
    "explanation": "四邊等長是菱形的核心條件，而內角不一定是直角正好說明它不必是正方形。長方形需要四個直角，梯形則只有一組對邊平行；因此在所列類別中，菱形最完整符合標示且不加入未給條件。",
    "steps": [
      "由四邊等長先辨認菱形條件。",
      "利用內角不一定為直角，確認不能保證是正方形或長方形。",
      "比對各選項後選菱形，並保留它可有非直角內角的特性。"
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
    "misconceptionTarget": "把所有四邊等長圖形都視為正方形，忽略正方形還要四個直角。",
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
    "contentSha256": "d08eaa9b47b12989fac5dcdbb35195e537aba7df96c1b9273d126caefab2ab6e"
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
    "text": "一個四邊形標誌的三角量測為 88°、92°、88°，且已知它是平行四邊形。第四角及必然成立的角關係為何？",
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
    "explanation": "三個已知內角和為 88°+92°+88°=268°，第四角為 360°−268°=92°。已知圖形是平行四邊形，所以對角必相等、相鄰角必互補；四角依序八十八、九十二、八十八、九十二，唯一必然成立的是第四項。",
    "steps": [
      "先用四邊形內角和算出第四角為 92°。",
      "依平行四邊形對角相等，配對兩個 88° 與兩個 92°。",
      "再檢查每對相鄰角和為 180°，排除其餘三項。"
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
    "misconceptionTarget": "只補出第四角卻不檢查必然角關係，或把相鄰角誤判成相等。",
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
    "contentSha256": "e48bf3bb7715b8fd474087d2af81e252d73788bba971ee759eb8be51b470a2cd"
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
      "平行四邊形相鄰內角互補，因此列 (4x+8)+(2x+28)=180。整理為 6x+36=180，得到 6x=144，所以 x=24。",
      "代回第一角為 4×24+8=104°，第二角為 2×24+28=76°；兩角相加為一百八十度。",
      "平行四邊形對角相等，故四個內角依序為 104°、76°、104°、76°，總和三百六十度。"
    ],
    "alternativeMethods": [
      "可先利用四邊形內角和與兩對對角相等，列2(4x+8)+2(2x+28)=360。"
    ],
    "reasoningSteps": [
      "辨認兩個角相鄰，使用平行四邊形鄰角互補。",
      "建立並解一元一次方程，求得 x=24。",
      "將 x 代回兩個角式，求出 104° 與 76°。",
      "以對角相等補齊四角，並用內角和驗算。"
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
      "把相鄰角誤當成對角相等，列成 4x+8=2x+28。",
      "解得 x 後只寫兩個角，沒有依對角相等補齊另外兩角。",
      "代回時漏算常數八或二十八，導致兩個相鄰角不再互補。"
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
    "contentSha256": "6dde9523bd876f7ed4721ace209426d1f7924300d90292b2ee6001b94b17b09f"
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
    "contentSha256": "af0a555bb495c4993fbbfd508b8e6c3e936097babb72d0a2bf0e273c29de13b9",
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
    "contentSha256": "0e1589edf529ee8dca80e029defec0f43f4e5ea448eeb43c0ad905fbf808d2ec",
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
    "contentSha256": "a266e8e99e5323882b1b21511e3ac6ff0e56b30b3309a90e8a0af1e6bb60db35",
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
    "contentSha256": "392396589be2e326b2d1b34323eaff242718beb9aa231780829b9044d181a997",
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
    "contentSha256": "1ff1f15b5e8f2da84d145129ce01178db005cf59238377096141814a9cbf0df4",
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
    "contentSha256": "acb593b7b26c5367782ceb1093dcd8091306896376d7108876dfdfb1aba4d752",
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
    "contentSha256": "5de3269568a7a5b5e11a4f1f7580c4505c5b6c6ed3fda7badbc3267d5d2fd7cf",
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
    "contentSha256": "5cc30da4cf6ea9a2aa79edfcf75f12732d8ea5916169a2eea3be3dd71ad4cd9d",
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
    "contentSha256": "dfc9415912636a63254b4c7e68c2bf94d28ddf70fedf017c1d5eafd9e03163a9",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "正方形有四個直角，符合長方形定義；非正方形的長方形、無直角的菱形與只一組對邊平行的梯形均可排除其餘項。",
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
      "secondCorrectAnswer": "依臺灣國中教材的梯形定義，梯形只有一組對邊平行，所以第四項錯誤；其餘兩項也各有反例，只有第一項必然正確。",
      "undefinedSymbol": "題幹所用的正方形、長方形、菱形與梯形均由本技能講義依臺灣國中教材明確定義，沒有未定義符號。",
      "unitConflict": "本題判斷圖形定義與包含關係，不涉及數值單位。",
      "roundingConflict": "本題沒有近似值或四捨五入。",
      "domainBoundary": "只使用 U08 的特殊四邊形定義與包含關係。",
      "alternateReading": "梯形的定義已在講義固定為『只有一組對邊平行』，不採用至少一組對邊平行的廣義讀法，因此不產生另一答案。"
    },
    "difficultyReason": "需判斷命題方向與反例。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認長方形、菱形、正方形性質。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷特殊四邊形包含關係」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "正方形有四個直角，符合長方形定義；非正方形的長方形、無直角的菱形與只一組對邊平行的梯形均可排除其餘項。正方形四角都是直角，所以必然符合長方形定義。長方形不必四邊等長，菱形不必有直角；臺灣國中教材的梯形只有一組對邊平行，不是兩組都平行。因此真值唯一為第一項。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "949102d84d42905abc295c2008991081c79ac9c8b9990bb088c04116a0ef7ed5"
  },
  {
    "questionId": "u08-s006-v010",
    "unitId": "u08",
    "skillId": "quadrilateral-basic",
    "contentSha256": "6148eed6733d2ac295a5a27739bd3a9a41c898964414326545c615a7e6d8be0f",
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
    "contentSha256": "d08eaa9b47b12989fac5dcdbb35195e537aba7df96c1b9273d126caefab2ab6e",
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
    "contentSha256": "e48bf3bb7715b8fd474087d2af81e252d73788bba971ee759eb8be51b470a2cd",
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
      "secondCorrectAnswer": "逐項代入後，只有第四項同時給出第四角九十二度與平行四邊形對角分別相等；其餘選項違反內角和或鄰角互補，因此沒有第二個正確答案。",
      "undefinedSymbol": "題幹明示三個數值都是依序量得的內角，且圖形已知為平行四邊形；沒有未定義符號或未標示角的位置。",
      "unitConflict": "四個角度都以度為單位，角關係比較沒有單位衝突。",
      "roundingConflict": "所有量測值在題目中作為精確角度使用，不涉及近似或四捨五入。",
      "domainBoundary": "只使用四邊形內角和、平行四邊形對角相等與鄰角互補，不依未提供的圖形外觀推論。",
      "alternateReading": "題幹經 semantic correction 明確問『必然成立的角關係』，不是依外觀猜測最可能關係；第四項是唯一由已知條件必然推出的敘述。"
    },
    "difficultyReason": "驗收情境要求計算及結構一致性雙重判斷。",
    "literacyContextNecessity": "標誌驗收不只補出缺角，也要確認量測是否符合平行四邊形對角相等與鄰角互補。",
    "prerequisiteCheck": "能使用四邊形內角和與平行四邊形性質。",
    "languageCheck": "題幹使用『必然成立』固定判定強度，答案須同時符合精確角度與平行四邊形性質，沒有機率或外觀推測語意。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立重算總和與對角位置，結論一致。 三個已知角和為二百六十八度，所以第四角必為九十二度；四角依序交替為八十八度與九十二度，對角分別相等且鄰角互補。修正後題幹問必然成立的角關係，只有第四項符合，真值序列為 [false,false,false,true]。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "f5fc1d0c7664273cf93f27a7134ff68c4c132db2350167148a69a1761d2aaa49"
  }
];

export const DRAWING_SPECS = [];

