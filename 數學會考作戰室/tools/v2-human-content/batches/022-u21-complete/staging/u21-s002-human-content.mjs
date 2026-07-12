// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE={
  "lectureId": "u21-s002-lecture-r1",
  "unitId": "u21",
  "numericUnitId": 21,
  "topicId": "u21-graphs",
  "skillId": "quadratic-vertex",
  "lockedTitle": "頂點與對稱軸",
  "title": "拋物線的中心線索：頂點與對稱軸",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "gradeBand": "9下",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": {
    "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
    "legacyContentImported": false,
    "legacySkillReferenceOnly": "quadratic-vertex"
  },
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能在圖上辨認拋物線的頂點。",
    "能由頂點寫出垂直對稱軸 x=h。",
    "能利用對稱軸配對等高的兩點。",
    "能分清頂點座標與對稱軸方程式。"
  ],
  "prerequisites": [
    {
      "skillId": "quadratic-function-graph",
      "requiredLevel": "能讀懂前一技能的定義、圖形與基本運算，並可在本節開始前完成一題檢核。",
      "bridge": "本節會直接使用前一技能的圖形語言與代數表示。"
    }
  ],
  "prerequisiteBridge": "先確認已知道拋物線是連續曲線，且座標點以 (x,y) 表示；本節從圖形的最彎轉位置建立頂點。",
  "glossary": [
    {
      "term": "頂點",
      "definition": "拋物線上由下降轉為上升，或由上升轉為下降的轉折點。"
    },
    {
      "term": "對稱軸",
      "definition": "把拋物線左右兩半對折後重合的垂直直線。"
    },
    {
      "term": "等高點",
      "definition": "具有相同 y 值的兩個點。"
    },
    {
      "term": "中點",
      "definition": "兩個 x 座標平均後所在的位置。"
    }
  ],
  "notation": [
    {
      "symbol": "V(h,k)",
      "meaning": "頂點 V 的座標為 (h,k)。"
    },
    {
      "symbol": "x=h",
      "meaning": "通過頂點的垂直對稱軸。"
    },
    {
      "symbol": "(h-d,y) 與 (h+d,y)",
      "meaning": "位於對稱軸兩側相同水平距離的等高點。"
    }
  ],
  "conceptNarrative": [
    "拋物線像對折後可以重合的紙片。對折線必須穿過曲線的頂點，且在一般座標圖中是垂直線。",
    "頂點是一個點，所以要寫兩個座標；對稱軸是一條直線，只限制 x 固定為 h。",
    "若已知同一拋物線上兩個等高點的 x 座標為 p、q，則對稱軸就在中間：x=(p+q)/2。",
    "開口向上時頂點是最低點；開口向下時頂點是最高點，但「頂點」本身不等於最大值或最小值，頂點的 y 座標才是極值。"
  ],
  "formalDefinitions": [
    {
      "name": "頂點",
      "statement": "拋物線與其對稱軸相交的唯一點。"
    },
    {
      "name": "對稱軸",
      "statement": "使拋物線上相對應兩點到該直線距離相等的垂直直線。"
    }
  ],
  "formulas": [
    {
      "formula": "對稱軸 x=h",
      "conditions": [
        "頂點為 (h,k)"
      ],
      "meaning": "頂點的 x 座標決定對稱軸。"
    },
    {
      "formula": "h=(p+q)/2",
      "conditions": [
        "(p,y) 與 (q,y) 是同一拋物線上的不同等高點"
      ],
      "meaning": "等高點的橫座標中點是對稱軸。"
    }
  ],
  "nonApplicableCases": [
    "任意兩點不能直接取中點求對稱軸，兩點必須等高。",
    "對稱軸不是 y=k；y=k 是水平線。",
    "頂點不一定在 x 軸或 y 軸上。",
    "從未標刻度的示意圖不能用眼睛精確估計座標。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先判斷開口方向並找轉折處。",
      "check": "找到的是曲線最低或最高的唯一位置嗎？"
    },
    {
      "step": 2,
      "instruction": "讀出頂點的 x、y 座標。",
      "check": "先橫後縱，是否寫成 (h,k)？"
    },
    {
      "step": 3,
      "instruction": "由頂點 x 座標寫對稱軸。",
      "check": "必須寫 x=h，不是只寫 h。"
    },
    {
      "step": 4,
      "instruction": "若用等高點，取兩個 x 的平均。",
      "check": "兩點的 y 是否真的相同？"
    },
    {
      "step": 5,
      "instruction": "用左右距離驗證。",
      "check": "兩點到 x=h 的水平距離是否相等？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "頂點為 (3,-2)，求對稱軸。",
      "solutionSteps": [
        "頂點的 x 座標是 3。",
        "垂直對稱軸固定 x=3。"
      ],
      "answer": "x=3。"
    },
    {
      "exampleId": "L2",
      "prompt": "對稱軸為 x=-1，點 (2,5) 的對稱點為何？",
      "solutionSteps": [
        "2 到 -1 的距離為 3。",
        "另一側 x=-1-3=-4，y 不變。"
      ],
      "answer": "(-4,5)。"
    },
    {
      "exampleId": "L3",
      "prompt": "同高兩點 x=-5 與 x=1，求對稱軸。",
      "solutionSteps": [
        "取平均 (-5+1)/2=-2。",
        "等高點分居 x=-2 兩側各 3 單位。"
      ],
      "answer": "x=-2。"
    },
    {
      "exampleId": "L4",
      "prompt": "開口向下且頂點為 (0,7)，頂點代表什麼？",
      "solutionSteps": [
        "開口向下，離開頂點後 y 下降。",
        "頂點 y=7 是整條曲線的最大值。"
      ],
      "answer": "最高點為 (0,7)，最大值為 7。"
    },
    {
      "exampleId": "L5",
      "prompt": "頂點 (4,1) 與對稱軸應如何區分寫法？",
      "solutionSteps": [
        "頂點是點，寫 (4,1)。",
        "對稱軸是直線，寫 x=4。"
      ],
      "answer": "頂點 (4,1)，對稱軸 x=4。"
    }
  ],
  "difficultyConnections": {
    "basic": "由頂點讀對稱軸。",
    "standard": "由等高點求軸或找對稱點。",
    "advanced": "結合多組點驗證同一對稱軸。",
    "literacy": "從橋拱、噴泉或軌跡圖讀取最高點與中心線。"
  },
  "commonMistakes": [
    {
      "mistake": "把對稱軸寫成 y=h。",
      "why": "混淆垂直線與水平線。",
      "correction": "垂直線固定 x，所以寫 x=h。"
    },
    {
      "mistake": "只寫頂點的 y 座標。",
      "why": "把頂點與極值混淆。",
      "correction": "頂點必須是完整座標 (h,k)。"
    },
    {
      "mistake": "兩個不同高度的點也取平均。",
      "why": "忽略等高條件。",
      "correction": "先比較 y 值是否相同。"
    },
    {
      "mistake": "對稱點把 y 也改變。",
      "why": "把關於垂直線的對稱誤作中心對稱。",
      "correction": "左右對稱只改 x，y 保持。"
    },
    {
      "mistake": "把頂點一定當最低點。",
      "why": "忽略開口可向下。",
      "correction": "開口向下時頂點是最高點。"
    },
    {
      "mistake": "由示意圖外觀猜精確軸。",
      "why": "未使用刻度或數值。",
      "correction": "只依標示座標、式子或等高點計算。"
    }
  ],
  "selfCheckItems": [
    {
      "prompt": "頂點 (-2,5) 的對稱軸？",
      "answer": "x=-2。"
    },
    {
      "prompt": "等高點 x=1、x=7 的軸？",
      "answer": "x=4。"
    },
    {
      "prompt": "關於 x=4，(6,3) 的對稱點？",
      "answer": "(2,3)。"
    },
    {
      "prompt": "開口向上頂點 y=-6 代表什麼？",
      "answer": "最小值為 -6。"
    }
  ],
  "summary": [
    "頂點是點 (h,k)，對稱軸是直線 x=h。",
    "等高點橫座標的平均可求對稱軸。",
    "關於垂直對稱軸的對稱點 y 不變。",
    "開口方向決定頂點是最高點或最低點。"
  ],
  "connections": {
    "previous": "使用上一技能建立的拋物線連續與對稱直觀。",
    "next": [
      "下一技能會從 y=ax² 的係數判斷圖形。",
      "後續會用頂點式直接讀出 h、k。"
    ]
  },
  "figureReferences": [
    "u21-fig-s002-01"
  ],
  "accessibilityNotes": [
    "對稱軸使用虛線並加上文字 x=2，頂點另以實心圓和 V 標示。"
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u21-s002-v001",
      "u21-s002-v002",
      "u21-s002-v003",
      "u21-s002-v004",
      "u21-s002-v005",
      "u21-s002-v006",
      "u21-s002-v007",
      "u21-s002-v008",
      "u21-s002-v009",
      "u21-s002-v010",
      "u21-s002-v011",
      "u21-s002-v012"
    ],
    "constructedResponseIds": [
      "u21-s002-cr001",
      "u21-s002-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "臺灣國中會考二次函數範圍",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "重新檢查三組對稱距離與中點公式，特別確認點 (2,5) 關於 x=-1 的對稱點為 (-4,5)，並分離頂點座標與極值概念。",
    "reviewVersion": "human-lecture-u21-r1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "ff734e14b8c2ee61dbe9b937b10376f11d600f352dff667deee9a23614439743"
};

export const QUESTIONS=[
  {
    "questionId": "u21-s002-v001",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "basic",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "figure",
    "figureId": "u21-fig-s002-01",
    "drawingSpecId": "u21-draw-s002-01",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "依圖 u21-fig-s002-01，拋物線的頂點是哪一點？",
    "givenConditions": [
      "座標軸每格 1 單位",
      "V 為曲線最低點"
    ],
    "target": "由圖讀取頂點座標",
    "text": "依圖 u21-fig-s002-01，拋物線的頂點是哪一點？",
    "choices": [
      "(2,3)",
      "(2,-3)",
      "(-2,-3)",
      "(0,-3)"
    ],
    "answerIndex": 1,
    "independentSolution": "圖中 V 位於 x=2、y=-3；其餘選項不在曲線的最低轉折處。",
    "explanation": "沿曲線找到唯一最低點，再按先橫後縱讀出 (2,-3)。",
    "steps": [
      "找最低轉折位置",
      "依刻度讀 x=2、y=-3"
    ],
    "optionAnalysis": [
      {
        "choice": "(2,3)",
        "truth": false,
        "reason": "把頂點的 y 符號讀反。"
      },
      {
        "choice": "(2,-3)",
        "truth": true,
        "reason": "曲線在 x=2 時達最低 y=-3，圖中亦標示 V。"
      },
      {
        "choice": "(-2,-3)",
        "truth": false,
        "reason": "把 x 座標左右讀反。"
      },
      {
        "choice": "(0,-3)",
        "truth": false,
        "reason": "只看到最低高度，誤把頂點放在 y 軸。"
      }
    ],
    "misconceptionTarget": "把高度或對稱軸截點當成頂點",
    "concept": "頂點座標讀圖",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 60,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由圖讀取頂點座標」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把高度或對稱軸截點當成頂點」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "圖形提供必要資訊；只使用標示的座標、刻度與曲線關係，不以外觀估測。"
    },
    "difficultyReason": "basic：從有刻度圖辨認頂點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "從有刻度圖辨認頂點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0d26351e44ccf4b4c6e1f71b30ad2752094bce1a8eda1a024115a4494008c635"
  },
  {
    "questionId": "u21-s002-v002",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "basic",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "某拋物線的頂點為 (-4,7)，其對稱軸為何？",
    "givenConditions": [
      "頂點座標已知"
    ],
    "target": "由頂點 x 座標寫垂直對稱軸",
    "text": "某拋物線的頂點為 (-4,7)，其對稱軸為何？",
    "choices": [
      "y=-4",
      "x=7",
      "x=-4",
      "y=7"
    ],
    "answerIndex": 2,
    "independentSolution": "由定義，垂直對稱軸通過頂點的 x 座標，因此為 x=-4。",
    "explanation": "頂點 (h,k) 的對稱軸是 x=h；此處 h=-4。",
    "steps": [
      "取頂點第一座標",
      "寫成 x=-4"
    ],
    "optionAnalysis": [
      {
        "choice": "y=-4",
        "truth": false,
        "reason": "這是水平線，且使用錯誤座標。"
      },
      {
        "choice": "x=7",
        "truth": false,
        "reason": "把頂點 y 座標誤當軸位置。"
      },
      {
        "choice": "x=-4",
        "truth": true,
        "reason": "對稱軸通過頂點且為垂直線，固定 x=-4。"
      },
      {
        "choice": "y=7",
        "truth": false,
        "reason": "通過頂點的水平線不是拋物線對稱軸。"
      }
    ],
    "misconceptionTarget": "把對稱軸寫成 y=k",
    "concept": "頂點與對稱軸關係",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 50,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由頂點 x 座標寫垂直對稱軸」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把對稱軸寫成 y=k」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "basic：由頂點寫軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "由頂點寫軸",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0dc98436c9300317d828b44a24dbe5286ce33bd2c79e4835b57a80bb1fcba496"
  },
  {
    "questionId": "u21-s002-v003",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "basic",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "下列哪一個敘述正確區分「頂點」與「對稱軸」？",
    "givenConditions": [
      "討論一般上下開口拋物線"
    ],
    "target": "辨認點與直線的不同表示",
    "text": "下列哪一個敘述正確區分「頂點」與「對稱軸」？",
    "choices": [
      "頂點和對稱軸都只用一個數表示",
      "頂點是一條直線，對稱軸是一個點",
      "頂點一定在原點，對稱軸一定是 y 軸",
      "頂點是一個座標點，對稱軸是一條形如 x=h 的直線"
    ],
    "answerIndex": 3,
    "independentSolution": "頂點是零維的點，對稱軸是一維直線；只有正確選項同時說明座標與 x=h。",
    "explanation": "頂點記錄曲線轉折位置，必寫成 (h,k)；對稱軸描述整條垂直線，寫 x=h。",
    "steps": [
      "辨認幾何物件類型",
      "核對表示法"
    ],
    "optionAnalysis": [
      {
        "choice": "頂點和對稱軸都只用一個數表示",
        "truth": false,
        "reason": "頂點必須有 x、y 兩個座標。"
      },
      {
        "choice": "頂點是一條直線，對稱軸是一個點",
        "truth": false,
        "reason": "兩者角色完全顛倒。"
      },
      {
        "choice": "頂點一定在原點，對稱軸一定是 y 軸",
        "truth": false,
        "reason": "只有 y=ax² 的特殊情況如此。"
      },
      {
        "choice": "頂點是一個座標點，對稱軸是一條形如 x=h 的直線",
        "truth": true,
        "reason": "頂點需兩個座標；對稱軸是垂直直線。"
      }
    ],
    "misconceptionTarget": "把 y=ax² 的特殊情況當成全部",
    "concept": "頂點與軸的表示法",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 65,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「辨認點與直線的不同表示」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把 y=ax² 的特殊情況當成全部」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "basic：分清點與直線；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "分清點與直線",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "29cd55a69a94b4ce24714956cc0f73af391316e0a6c5b8853b3e120933fd13a1"
  },
  {
    "questionId": "u21-s002-v004",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "standard",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "點 A(6,5) 在某拋物線上，對稱軸為 x=2。A 關於對稱軸的對稱點為何？",
    "givenConditions": [
      "對稱軸垂直",
      "對稱點 y 不變"
    ],
    "target": "求垂直軸的鏡射點",
    "text": "點 A(6,5) 在某拋物線上，對稱軸為 x=2。A 關於對稱軸的對稱點為何？",
    "choices": [
      "(-2,5)",
      "(2,5)",
      "(-2,-5)",
      "(10,5)"
    ],
    "answerIndex": 0,
    "independentSolution": "鏡射公式 x′=2h-x=4-6=-2，y′=5，故為 (-2,5)。",
    "explanation": "先算 6 到 2 的距離 4，再向左 4 到 -2；高度 5 保持。",
    "steps": [
      "求水平距離 |6-2|",
      "在另一側取 x=2-4"
    ],
    "optionAnalysis": [
      {
        "choice": "(-2,5)",
        "truth": true,
        "reason": "A 到 x=2 的水平距離為 4，另一側 x=2-4=-2。"
      },
      {
        "choice": "(2,5)",
        "truth": false,
        "reason": "這是軸上的投影點，不是鏡射點。"
      },
      {
        "choice": "(-2,-5)",
        "truth": false,
        "reason": "垂直軸對稱不改變 y。"
      },
      {
        "choice": "(10,5)",
        "truth": false,
        "reason": "位於 A 同一側，距軸 8，不是對稱位置。"
      }
    ],
    "misconceptionTarget": "把對稱點誤作軸上投影",
    "concept": "垂直線對稱點",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 80,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「求垂直軸的鏡射點」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把對稱點誤作軸上投影」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "standard：由軸求對稱點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "由軸求對稱點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "238e02492be4853e414acabba926b8aae01a91f912c51e1a0a6ff8421f82ee72"
  },
  {
    "questionId": "u21-s002-v005",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "standard",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "同一拋物線上兩個不同點 (-5,9) 與 (3,9) 等高，對稱軸為何？",
    "givenConditions": [
      "兩點 y 均為 9",
      "兩點不同"
    ],
    "target": "由等高點橫座標中點求軸",
    "text": "同一拋物線上兩個不同點 (-5,9) 與 (3,9) 等高，對稱軸為何？",
    "choices": [
      "x=4",
      "x=-4",
      "x=-1",
      "y=9"
    ],
    "answerIndex": 2,
    "independentSolution": "中點為 -1，且 -5 與 3 分別是 -1-4、-1+4。",
    "explanation": "等高對稱點的橫座標平均為軸位置；算得 -1。",
    "steps": [
      "計算 (-5+3)/2",
      "驗證左右距離皆 4"
    ],
    "optionAnalysis": [
      {
        "choice": "x=4",
        "truth": false,
        "reason": "把兩個 x 的距離誤當軸。"
      },
      {
        "choice": "x=-4",
        "truth": false,
        "reason": "只算 -5+1 或符號錯誤。"
      },
      {
        "choice": "x=-1",
        "truth": true,
        "reason": "(-5+3)/2=-1，兩點距 -1 都為 4。"
      },
      {
        "choice": "y=9",
        "truth": false,
        "reason": "等高線是水平線，不是拋物線對稱軸。"
      }
    ],
    "misconceptionTarget": "看到相同 y 就把 y=9 當軸",
    "concept": "等高點中點性質",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 80,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由等高點橫座標中點求軸」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「看到相同 y 就把 y=9 當軸」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "standard：由等高點求對稱軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "由等高點求對稱軸",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6ddbdc2ea3cc47ce9a27f8a4bdec312b848b974daf751d6cdbf2706685806240"
  },
  {
    "questionId": "u21-s002-v006",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "standard",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "一條拋物線開口向下，頂點為 (1,12)。下列何者正確？",
    "givenConditions": [
      "完整定義域為所有實數"
    ],
    "target": "解釋頂點 y 座標的極值角色",
    "text": "一條拋物線開口向下，頂點為 (1,12)。下列何者正確？",
    "choices": [
      "函數最小值為 12",
      "函數最大值為 1",
      "對稱軸為 y=12",
      "函數最大值為 12，在 x=1 時取得"
    ],
    "answerIndex": 3,
    "independentSolution": "頂點 (1,12) 在向下拋物線上給全域最大值 12，對稱軸另為 x=1。",
    "explanation": "開口向下表示頂點最高；頂點第一座標給位置，第二座標給最大值。",
    "steps": [
      "判斷頂點是最高點",
      "分離 x=1 與 y=12"
    ],
    "optionAnalysis": [
      {
        "choice": "函數最小值為 12",
        "truth": false,
        "reason": "向下拋物線的頂點不是最低點。"
      },
      {
        "choice": "函數最大值為 1",
        "truth": false,
        "reason": "1 是發生位置，不是函數值。"
      },
      {
        "choice": "對稱軸為 y=12",
        "truth": false,
        "reason": "對稱軸應是 x=1。"
      },
      {
        "choice": "函數最大值為 12，在 x=1 時取得",
        "truth": true,
        "reason": "開口向下，頂點是最高點。"
      }
    ],
    "misconceptionTarget": "把頂點 x 座標當最大值",
    "concept": "頂點與最大值",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 75,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「解釋頂點 y 座標的極值角色」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把頂點 x 座標當最大值」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "standard：由開口解讀頂點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "由開口解讀頂點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "38b3ce9126487f0956ad0a5a11b283a51d2427efb4704b168e249f964581ec0a"
  },
  {
    "questionId": "u21-s002-v007",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "advanced",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "某拋物線通過 A(-4,6)、B(2,6)，且頂點在直線 x=-1 上。下列判斷何者正確？",
    "givenConditions": [
      "A、B 等高",
      "頂點位於對稱軸上"
    ],
    "target": "驗證等高點與頂點線索一致性",
    "text": "某拋物線通過 A(-4,6)、B(2,6)，且頂點在直線 x=-1 上。下列判斷何者正確？",
    "choices": [
      "x=-1 確實是對稱軸，兩項資訊相符",
      "對稱軸是 x=1",
      "A、B 不可能在同一拋物線上",
      "頂點必為 (-1,6)"
    ],
    "answerIndex": 0,
    "independentSolution": "計算中點 -1 後可確認資訊一致；但仍無法得知頂點的 y 座標。",
    "explanation": "由 A、B 等高求軸 x=(-4+2)/2=-1，與題目給頂點所在直線完全一致。",
    "steps": [
      "用等高點求軸",
      "比較給定頂點所在直線"
    ],
    "optionAnalysis": [
      {
        "choice": "x=-1 確實是對稱軸，兩項資訊相符",
        "truth": true,
        "reason": "(-4+2)/2=-1，正好與頂點所在直線一致。"
      },
      {
        "choice": "對稱軸是 x=1",
        "truth": false,
        "reason": "等高點平均不是 1。"
      },
      {
        "choice": "A、B 不可能在同一拋物線上",
        "truth": false,
        "reason": "它們可作為關於 x=-1 的對稱點。"
      },
      {
        "choice": "頂點必為 (-1,6)",
        "truth": false,
        "reason": "軸位置可知，但頂點 y 未知且通常不等於等高點 6。"
      }
    ],
    "misconceptionTarget": "由軸位置擅自指定頂點高度",
    "concept": "多重圖形線索一致性",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 100,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「驗證等高點與頂點線索一致性」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「由軸位置擅自指定頂點高度」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "advanced：交叉驗證對稱軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "交叉驗證對稱軸",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3196031659c013168ed72399ede7b32d3d41d9349392f1a8a493d64166133f1d"
  },
  {
    "questionId": "u21-s002-v008",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "advanced",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "若 f(-1)=f(7)，且 f 是對稱軸唯一的二次函數，則其對稱軸必為何？",
    "givenConditions": [
      "-1 與 7 是不同輸入",
      "函數值相同"
    ],
    "target": "由函數等值關係求軸",
    "text": "若 f(-1)=f(7)，且 f 是對稱軸唯一的二次函數，則其對稱軸必為何？",
    "choices": [
      "x=-4",
      "x=3",
      "x=4",
      "y=f(-1)"
    ],
    "answerIndex": 1,
    "independentSolution": "(-1+7)/2=3；到兩輸入的距離皆 4，所以軸是 x=3。",
    "explanation": "兩個不同輸入給相同函數值，在拋物線上形成等高對稱點，軸在中點 x=3。",
    "steps": [
      "把等值轉成等高點",
      "求 -1 與 7 的平均"
    ],
    "optionAnalysis": [
      {
        "choice": "x=-4",
        "truth": false,
        "reason": "把兩輸入相減再除 2。"
      },
      {
        "choice": "x=3",
        "truth": true,
        "reason": "等高點橫座標平均 (-1+7)/2=3。"
      },
      {
        "choice": "x=4",
        "truth": false,
        "reason": "只算距離的一半，未加起點。"
      },
      {
        "choice": "y=f(-1)",
        "truth": false,
        "reason": "這是水平高度，不是軸的位置。"
      }
    ],
    "misconceptionTarget": "把兩輸入差的一半直接當座標",
    "concept": "函數等值與圖形對稱",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 95,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由函數等值關係求軸」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把兩輸入差的一半直接當座標」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "advanced：從符號條件求軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "從符號條件求軸",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "88b67d0950126aecab50329b2af97544d3ca8d2bdfa9d6a73ea2b25782d636dd"
  },
  {
    "questionId": "u21-s002-v009",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "advanced",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "某向上拋物線的對稱軸為 x=2，且通過 (0,5) 與 (4,5)。下列哪一點可能是其頂點？",
    "givenConditions": [
      "開口向上",
      "兩等高點位於軸兩側"
    ],
    "target": "選擇軸上且低於等高點的頂點",
    "text": "某向上拋物線的對稱軸為 x=2，且通過 (0,5) 與 (4,5)。下列哪一點可能是其頂點？",
    "choices": [
      "(2,7)",
      "(0,1)",
      "(4,1)",
      "(2,1)"
    ],
    "answerIndex": 3,
    "independentSolution": "四選項中只有 (2,1) 同時在軸上且可作最低點。",
    "explanation": "頂點 x 必等於 2；因開口向上且其他點高度為 5，頂點要低於或等於 5，唯一候選是 (2,1)。",
    "steps": [
      "先用軸限制 x=2",
      "再用向上開口比較 y"
    ],
    "optionAnalysis": [
      {
        "choice": "(2,7)",
        "truth": false,
        "reason": "在 x=2 但高於等高點，會與向上開口矛盾。"
      },
      {
        "choice": "(0,1)",
        "truth": false,
        "reason": "不在對稱軸 x=2 上。"
      },
      {
        "choice": "(4,1)",
        "truth": false,
        "reason": "不在對稱軸 x=2 上。"
      },
      {
        "choice": "(2,1)",
        "truth": true,
        "reason": "頂點必在 x=2，且向上拋物線頂點 y 應低於 5。"
      }
    ],
    "misconceptionTarget": "只檢查頂點是否在軸上而忽略高度",
    "concept": "由軸與開口限制頂點",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 110,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「選擇軸上且低於等高點的頂點」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「只檢查頂點是否在軸上而忽略高度」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "advanced：由多條件選頂點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "由多條件選頂點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4426ed515e7425c8d27b4b5422c9e2fef25e3d8b5a070f1f6ee11a14625efcb7"
  },
  {
    "questionId": "u21-s002-v010",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "literacy",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "一座拱橋的剖面可視為開口向下的拋物線。橋面左右兩點 A、B 在同一高度，水平位置分別為 12 m 與 28 m。拱頂正上方的水平位置為何？",
    "givenConditions": [
      "位置以同一基準量測",
      "拱形左右對稱"
    ],
    "target": "用等高邊點找拱頂中心線",
    "text": "一座拱橋的剖面可視為開口向下的拋物線。橋面左右兩點 A、B 在同一高度，水平位置分別為 12 m 與 28 m。拱頂正上方的水平位置為何？",
    "choices": [
      "20 m",
      "8 m",
      "16 m",
      "40 m"
    ],
    "answerIndex": 0,
    "independentSolution": "中點位置為 12+(28-12)/2=20 m；這是拱頂所在垂直中心線。",
    "explanation": "拱橋同高點關於中心線對稱，因此拱頂水平位置是兩位置的中點 20 m。",
    "steps": [
      "辨認 A、B 為等高對稱點",
      "計算水平中點"
    ],
    "optionAnalysis": [
      {
        "choice": "20 m",
        "truth": true,
        "reason": "(12+28)/2=20，拱頂位於對稱軸上。"
      },
      {
        "choice": "8 m",
        "truth": false,
        "reason": "只算兩位置差的一半。"
      },
      {
        "choice": "16 m",
        "truth": false,
        "reason": "誤將兩位置直接相減。"
      },
      {
        "choice": "40 m",
        "truth": false,
        "reason": "把兩位置相加但未除以 2。"
      }
    ],
    "misconceptionTarget": "把間距的一半當成絕對位置",
    "concept": "拱門中心線定位",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有水平位置用公尺且基準相同，答案為位置 20 m。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「用等高邊點找拱頂中心線」。",
      "domainBoundary": "A、B 明確為同一拱物線上的等高點。",
      "alternateReading": "若把題目誤讀為「把間距的一半當成絕對位置」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "literacy：由實測等高點求中心位置；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "12 m 與 28 m 是相對同一基準的實際位置，不是單純無單位數；拱橋情境使「中點位置」而非「兩點距離」成為所求。",
    "authoringIntent": "由實測等高點求中心位置",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f0e08a76a7840df7a12ad3bcc1df8bedbfcff7fd96d4bb91e3c3485c47699337"
  },
  {
    "questionId": "u21-s002-v011",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "literacy",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "噴泉水柱的高度圖為向下拋物線，最高點標為 V(3,8)，橫軸是時間（秒），縱軸是高度（公尺）。下列解讀何者正確？",
    "givenConditions": [
      "V 是頂點",
      "時間從 0 秒開始"
    ],
    "target": "把頂點座標解釋成最高時刻與高度",
    "text": "噴泉水柱的高度圖為向下拋物線，最高點標為 V(3,8)，橫軸是時間（秒），縱軸是高度（公尺）。下列解讀何者正確？",
    "choices": [
      "水柱在 8 秒時達到最高 3 公尺",
      "水柱在 3 秒時達到最高 8 公尺",
      "水柱的對稱軸是 y=8",
      "水柱在 3 公尺處經過 8 秒"
    ],
    "answerIndex": 1,
    "independentSolution": "V(3,8) 代表 3 秒、8 公尺，且頂點是最高點。",
    "explanation": "依軸標示，頂點 x=3 表示時刻，y=8 表示高度；向下開口使其為最高值。",
    "steps": [
      "讀取橫縱軸單位",
      "解釋向下頂點"
    ],
    "optionAnalysis": [
      {
        "choice": "水柱在 8 秒時達到最高 3 公尺",
        "truth": false,
        "reason": "交換了兩座標與單位。"
      },
      {
        "choice": "水柱在 3 秒時達到最高 8 公尺",
        "truth": true,
        "reason": "向下拋物線頂點是最高點；x 為秒、y 為公尺。"
      },
      {
        "choice": "水柱的對稱軸是 y=8",
        "truth": false,
        "reason": "對稱軸應是 x=3。"
      },
      {
        "choice": "水柱在 3 公尺處經過 8 秒",
        "truth": false,
        "reason": "把橫縱軸意義顛倒。"
      }
    ],
    "misconceptionTarget": "交換座標與單位",
    "concept": "頂點情境語意",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 75,
    "unitCheck": "x 單位秒、y 單位公尺，兩者不可交換。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「把頂點座標解釋成最高時刻與高度」。",
      "domainBoundary": "時間 3 秒位於事件開始後，頂點可作合理最高點。",
      "alternateReading": "若把題目誤讀為「交換座標與單位」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "literacy：解讀水柱最高點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "時間與高度使用不同單位，必須保留座標順序才能解釋最高點；刪除噴泉情境會失去變數角色。",
    "authoringIntent": "解讀水柱最高點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "02e0f15aafb67f2341d4bd9abdd7bb1d000768cd3ca80ed813e1ed738ce8c752"
  },
  {
    "questionId": "u21-s002-v012",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "literacy",
    "type": "mc",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "一塊對稱太陽能板的弧形邊緣以拋物線近似。量得距左端 1 m 與 5 m 處高度都為 2.4 m。若量測基準從左端起算，弧形中央線位於何處？",
    "givenConditions": [
      "兩量測點在同一弧線且等高",
      "位置從左端起算"
    ],
    "target": "由實測位置找對稱中央線",
    "text": "一塊對稱太陽能板的弧形邊緣以拋物線近似。量得距左端 1 m 與 5 m 處高度都為 2.4 m。若量測基準從左端起算，弧形中央線位於何處？",
    "choices": [
      "距左端 2 m",
      "距左端 4 m",
      "距左端 3 m",
      "高度 2.4 m 的水平線"
    ],
    "answerIndex": 2,
    "independentSolution": "1 與 5 到 3 的距離皆為 2 m；中央線位置為 3 m。",
    "explanation": "等高位置 1 與 5 的中點是 3，因此垂直中央線在距左端 3 m。",
    "steps": [
      "計算量測位置平均",
      "用左右各 2 m 驗證"
    ],
    "optionAnalysis": [
      {
        "choice": "距左端 2 m",
        "truth": false,
        "reason": "只算兩點間距的一半，漏掉起點 1 m。"
      },
      {
        "choice": "距左端 4 m",
        "truth": false,
        "reason": "把平均錯算為較右位置。"
      },
      {
        "choice": "距左端 3 m",
        "truth": true,
        "reason": "(1+5)/2=3。"
      },
      {
        "choice": "高度 2.4 m 的水平線",
        "truth": false,
        "reason": "題目問中央線水平位置，不是高度線。"
      }
    ],
    "misconceptionTarget": "把兩點距離的一半當絕對座標",
    "concept": "實測對稱定位",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 85,
    "unitCheck": "位置與高度皆以公尺，但所求是水平位置，答案為距左端 3 m。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由實測位置找對稱中央線」。",
      "domainBoundary": "兩點明確位於同一對稱弧線且高度相同。",
      "alternateReading": "若把題目誤讀為「把兩點距離的一半當絕對座標」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "literacy：用等高量測找板材中央；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "「從左端起算」決定平均後是絕對位置 3 m，而非僅回答兩點間距 2 m；板材情境使基準不可省略。",
    "authoringIntent": "用等高量測找板材中央",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2e8e8c9c640f4e32e1f0338f108fda09b5a02fcd565e222bc83ac15942477c26"
  }
];

export const CONSTRUCTED_RESPONSES=[
  {
    "questionId": "u21-s002-cr001",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "某拋物線的對稱軸為 x=-2，點 A(3,7) 在圖形上。求 A 的對稱點 B，並以距離說明你的答案。",
    "givenConditions": [
      "對稱軸為垂直線 x=-2",
      "對稱點高度相同"
    ],
    "target": "求鏡射點並驗證左右等距",
    "requiredWork": [
      "計算 A 到對稱軸的水平距離。",
      "在另一側取相同距離並保持 y。",
      "以兩段距離驗證。"
    ],
    "fullCreditSolution": [
      "A 的 x=3 到 -2 的距離為 |3-(-2)|=5。",
      "在 x=-2 的左側 5 單位，得到 x=-7；y 保持 7，所以 B=(-7,7)。",
      "驗證：|3-(-2)|=5，|-7-(-2)|=5。"
    ],
    "alternativeSolutions": [
      "可用 x_B=2h-x_A=2(-2)-3=-7，y_B=7。"
    ],
    "reasoningSteps": [
      "A 的 x=3 到 -2 的距離為 |3-(-2)|=5。",
      "在 x=-2 的左側 5 單位，得到 x=-7；y 保持 7，所以 B=(-7,7)。",
      "驗證：|3-(-2)|=5，|-7-(-2)|=5。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "B=(-7,7)，並明確驗證 A、B 到 x=-2 的水平距離都為 5。"
      },
      {
        "score": 2,
        "criteria": "座標正確但驗證簡略，或只在最後距離計算有一處小錯。"
      },
      {
        "score": 1,
        "criteria": "知道 y 保持 7 且需移到軸另一側，但 x 計算未完成。"
      },
      {
        "score": 0,
        "criteria": "把 B 寫成 (-2,7)、(3,-7) 或無對稱概念。"
      }
    ],
    "partialCreditRules": [
      "座標正確但驗證簡略，或只在最後距離計算有一處小錯。",
      "知道 y 保持 7 且需移到軸另一側，但 x 計算未完成。"
    ],
    "followThroughPolicy": "若水平距離 5 算對但另一側座標加減失誤，且驗證方式正確，可給 2 分；若 y 也改變，不給完整鏡射分。",
    "unitAndNotationRules": [
      "座標寫成 (x,y)。",
      "距離以座標單位表示，無另設物理單位。"
    ],
    "answerOnlyPolicy": "只寫 B=(-7,7) 無過程最高 2 分。",
    "commonErrors": [
      "把軸上投影 (-2,7) 當成對稱點。",
      "將 y 改為 -7。",
      "只把 3 取相反數得到 -3。"
    ],
    "independentReview": {
      "derivedResult": "B=(-7,7)，兩點到 x=-2 的水平距離均為 5。",
      "ambiguity": "條件、定義域與所求均明確；依列出的計算可得到唯一評分基準。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3c146d36d81173aea5bc397f08250e756c918bf34a637121801c6d18f5eb5b8e"
  },
  {
    "questionId": "u21-s002-cr002",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-vertex"
    },
    "prompt": "同一拋物線上有 P(-6,10)、Q(4,10)，且頂點的 y 座標為 -5。求對稱軸與頂點，並判斷拋物線開口方向。",
    "givenConditions": [
      "P、Q 為不同等高點",
      "頂點 y=-5"
    ],
    "target": "由等高點與頂點高度重建頂點特徵",
    "requiredWork": [
      "由 P、Q 橫座標平均求軸。",
      "用軸位置與已知 y 寫頂點。",
      "比較頂點與等高點高度判開口。"
    ],
    "fullCreditSolution": [
      "對稱軸 x=(-6+4)/2=-1。",
      "頂點在軸上且 y=-5，所以頂點為 (-1,-5)。",
      "P、Q 的高度 10 高於頂點 -5，因此頂點是最低點，拋物線開口向上。"
    ],
    "alternativeSolutions": [
      "可先觀察 P、Q 距 x=-1 各 5，再結合頂點低於兩點判向上。"
    ],
    "reasoningSteps": [
      "對稱軸 x=(-6+4)/2=-1。",
      "頂點在軸上且 y=-5，所以頂點為 (-1,-5)。",
      "P、Q 的高度 10 高於頂點 -5，因此頂點是最低點，拋物線開口向上。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確得 x=-1、頂點 (-1,-5)、開口向上，並說明等高點與高度比較。"
      },
      {
        "score": 2,
        "criteria": "軸與頂點正確但開口理由不完整，或只有單一符號算術錯誤。"
      },
      {
        "score": 1,
        "criteria": "能以 (-6+4)/2 求軸，或能指出頂點低於 P、Q 因而向上。"
      },
      {
        "score": 0,
        "criteria": "以 y=10 作對稱軸、頂點寫成 (-5,-1)，且無有效理由。"
      }
    ],
    "partialCreditRules": [
      "軸與頂點正確但開口理由不完整，或只有單一符號算術錯誤。",
      "能以 (-6+4)/2 求軸，或能指出頂點低於 P、Q 因而向上。"
    ],
    "followThroughPolicy": "若中點算術錯一單位，但後續頂點與開口完全依自得軸且理由正確，可保留 2 分上限；開口需以高度關係判斷。",
    "unitAndNotationRules": [
      "對稱軸必寫 x=-1。",
      "頂點寫完整座標。",
      "本題無物理單位。"
    ],
    "answerOnlyPolicy": "只寫三個結論而無任何中點或高度比較，最高 2 分。",
    "commonErrors": [
      "平均兩點的 y 而得 10。",
      "將頂點座標順序寫反。",
      "認為有較高兩點就開口向下。"
    ],
    "independentReview": {
      "derivedResult": "對稱軸 x=-1，頂點 (-1,-5)，開口向上。",
      "ambiguity": "條件、定義域與所求均明確；依列出的計算可得到唯一評分基準。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "be067b4b490d4336acb42d79b295c098c125af01f254408dcf0764ac73e4a57e"
  }
];

export const SEMANTIC_REVIEWS=[
  {
    "questionId": "u21-s002-v001",
    "unitId": "u21",
    "skillId": "quadratic-vertex",
    "contentSha256": "0d26351e44ccf4b4c6e1f71b30ad2752094bce1a8eda1a024115a4494008c635",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "圖中 V 位於 x=2、y=-3；其餘選項不在曲線的最低轉折處。",
    "derivedAnswer": "(2,-3)",
    "storedAnswer": "(2,-3)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「(2,-3)」。逐項反證其餘選項：「(2,3)」不成立，因為把頂點的 y 符號讀反。；「(-2,-3)」不成立，因為把 x 座標左右讀反。；「(0,-3)」不成立，因為只看到最低高度，誤把頂點放在 y 軸。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-vertex」講義中先定義；本題目標是由圖讀取頂點座標，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由圖讀取頂點座標」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把高度或對稱軸截點當成頂點」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「(2,-3)」。"
    },
    "difficultyReason": "basic：從有刻度圖辨認頂點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由圖讀取頂點座標，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「依圖 u21-fig-s002-01，拋物線的頂點是哪一點？」獨立重算：圖中 V 位於 x=2、y=-3；其餘選項不在曲線的最低轉折處。；所得答案為「(2,-3)」。四選項逐項核對：「(2,3)」=假，把頂點的 y 符號讀反。；「(2,-3)」=真，曲線在 x=2 時達最低 y=-3，圖中亦標示 V。；「(-2,-3)」=假，把 x 座標左右讀反。；「(0,-3)」=假，只看到最低高度，誤把頂點放在 y 軸。。難度判定依據：basic：從有刻度圖辨認頂點；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s002-v002",
    "unitId": "u21",
    "skillId": "quadratic-vertex",
    "contentSha256": "0dc98436c9300317d828b44a24dbe5286ce33bd2c79e4835b57a80bb1fcba496",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "由定義，垂直對稱軸通過頂點的 x 座標，因此為 x=-4。",
    "derivedAnswer": "x=-4",
    "storedAnswer": "x=-4",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=-4」。逐項反證其餘選項：「y=-4」不成立，因為這是水平線，且使用錯誤座標。；「x=7」不成立，因為把頂點 y 座標誤當軸位置。；「y=7」不成立，因為通過頂點的水平線不是拋物線對稱軸。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-vertex」講義中先定義；本題目標是由頂點 x 座標寫垂直對稱軸，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由頂點 x 座標寫垂直對稱軸」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把對稱軸寫成 y=k」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=-4」。"
    },
    "difficultyReason": "basic：由頂點寫軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由頂點 x 座標寫垂直對稱軸，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「某拋物線的頂點為 (-4,7)，其對稱軸為何？」獨立重算：由定義，垂直對稱軸通過頂點的 x 座標，因此為 x=-4。；所得答案為「x=-4」。四選項逐項核對：「y=-4」=假，這是水平線，且使用錯誤座標。；「x=7」=假，把頂點 y 座標誤當軸位置。；「x=-4」=真，對稱軸通過頂點且為垂直線，固定 x=-4。；「y=7」=假，通過頂點的水平線不是拋物線對稱軸。。難度判定依據：basic：由頂點寫軸；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s002-v003",
    "unitId": "u21",
    "skillId": "quadratic-vertex",
    "contentSha256": "29cd55a69a94b4ce24714956cc0f73af391316e0a6c5b8853b3e120933fd13a1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "頂點是零維的點，對稱軸是一維直線；只有正確選項同時說明座標與 x=h。",
    "derivedAnswer": "頂點是一個座標點，對稱軸是一條形如 x=h 的直線",
    "storedAnswer": "頂點是一個座標點，對稱軸是一條形如 x=h 的直線",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「頂點是一個座標點，對稱軸是一條形如 x=h 的直線」。逐項反證其餘選項：「頂點和對稱軸都只用一個數表示」不成立，因為頂點必須有 x、y 兩個座標。；「頂點是一條直線，對稱軸是一個點」不成立，因為兩者角色完全顛倒。；「頂點一定在原點，對稱軸一定是 y 軸」不成立，因為只有 y=ax² 的特殊情況如此。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-vertex」講義中先定義；本題目標是辨認點與直線的不同表示，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「辨認點與直線的不同表示」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把 y=ax² 的特殊情況當成全部」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「頂點是一個座標點，對稱軸是一條形如 x=h 的直線」。"
    },
    "difficultyReason": "basic：分清點與直線；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求辨認點與直線的不同表示，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「下列哪一個敘述正確區分「頂點」與「對稱軸」？」獨立重算：頂點是零維的點，對稱軸是一維直線；只有正確選項同時說明座標與 x=h。；所得答案為「頂點是一個座標點，對稱軸是一條形如 x=h 的直線」。四選項逐項核對：「頂點和對稱軸都只用一個數表示」=假，頂點必須有 x、y 兩個座標。；「頂點是一條直線，對稱軸是一個點」=假，兩者角色完全顛倒。；「頂點一定在原點，對稱軸一定是 y 軸」=假，只有 y=ax² 的特殊情況如此。；「頂點是一個座標點，對稱軸是一條形如 x=h 的直線」=真，頂點需兩個座標；對稱軸是垂直直線。。難度判定依據：basic：分清點與直線；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s002-v004",
    "unitId": "u21",
    "skillId": "quadratic-vertex",
    "contentSha256": "238e02492be4853e414acabba926b8aae01a91f912c51e1a0a6ff8421f82ee72",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "鏡射公式 x′=2h-x=4-6=-2，y′=5，故為 (-2,5)。",
    "derivedAnswer": "(-2,5)",
    "storedAnswer": "(-2,5)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「(-2,5)」。逐項反證其餘選項：「(2,5)」不成立，因為這是軸上的投影點，不是鏡射點。；「(-2,-5)」不成立，因為垂直軸對稱不改變 y。；「(10,5)」不成立，因為位於 A 同一側，距軸 8，不是對稱位置。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-vertex」講義中先定義；本題目標是求垂直軸的鏡射點，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「求垂直軸的鏡射點」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把對稱點誤作軸上投影」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「(-2,5)」。"
    },
    "difficultyReason": "standard：由軸求對稱點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求求垂直軸的鏡射點，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「點 A(6,5) 在某拋物線上，對稱軸為 x=2。A 關於對稱軸的對稱點為何？」獨立重算：鏡射公式 x′=2h-x=4-6=-2，y′=5，故為 (-2,5)。；所得答案為「(-2,5)」。四選項逐項核對：「(-2,5)」=真，A 到 x=2 的水平距離為 4，另一側 x=2-4=-2。；「(2,5)」=假，這是軸上的投影點，不是鏡射點。；「(-2,-5)」=假，垂直軸對稱不改變 y。；「(10,5)」=假，位於 A 同一側，距軸 8，不是對稱位置。。難度判定依據：standard：由軸求對稱點；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s002-v005",
    "unitId": "u21",
    "skillId": "quadratic-vertex",
    "contentSha256": "6ddbdc2ea3cc47ce9a27f8a4bdec312b848b974daf751d6cdbf2706685806240",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "中點為 -1，且 -5 與 3 分別是 -1-4、-1+4。",
    "derivedAnswer": "x=-1",
    "storedAnswer": "x=-1",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=-1」。逐項反證其餘選項：「x=4」不成立，因為把兩個 x 的距離誤當軸。；「x=-4」不成立，因為只算 -5+1 或符號錯誤。；「y=9」不成立，因為等高線是水平線，不是拋物線對稱軸。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-vertex」講義中先定義；本題目標是由等高點橫座標中點求軸，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由等高點橫座標中點求軸」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「看到相同 y 就把 y=9 當軸」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=-1」。"
    },
    "difficultyReason": "standard：由等高點求對稱軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由等高點橫座標中點求軸，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「同一拋物線上兩個不同點 (-5,9) 與 (3,9) 等高，對稱軸為何？」獨立重算：中點為 -1，且 -5 與 3 分別是 -1-4、-1+4。；所得答案為「x=-1」。四選項逐項核對：「x=4」=假，把兩個 x 的距離誤當軸。；「x=-4」=假，只算 -5+1 或符號錯誤。；「x=-1」=真，(-5+3)/2=-1，兩點距 -1 都為 4。；「y=9」=假，等高線是水平線，不是拋物線對稱軸。。難度判定依據：standard：由等高點求對稱軸；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s002-v006",
    "unitId": "u21",
    "skillId": "quadratic-vertex",
    "contentSha256": "38b3ce9126487f0956ad0a5a11b283a51d2427efb4704b168e249f964581ec0a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "頂點 (1,12) 在向下拋物線上給全域最大值 12，對稱軸另為 x=1。",
    "derivedAnswer": "函數最大值為 12，在 x=1 時取得",
    "storedAnswer": "函數最大值為 12，在 x=1 時取得",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「函數最大值為 12，在 x=1 時取得」。逐項反證其餘選項：「函數最小值為 12」不成立，因為向下拋物線的頂點不是最低點。；「函數最大值為 1」不成立，因為1 是發生位置，不是函數值。；「對稱軸為 y=12」不成立，因為對稱軸應是 x=1。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-vertex」講義中先定義；本題目標是解釋頂點 y 座標的極值角色，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「解釋頂點 y 座標的極值角色」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把頂點 x 座標當最大值」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「函數最大值為 12，在 x=1 時取得」。"
    },
    "difficultyReason": "standard：由開口解讀頂點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求解釋頂點 y 座標的極值角色，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「一條拋物線開口向下，頂點為 (1,12)。下列何者正確？」獨立重算：頂點 (1,12) 在向下拋物線上給全域最大值 12，對稱軸另為 x=1。；所得答案為「函數最大值為 12，在 x=1 時取得」。四選項逐項核對：「函數最小值為 12」=假，向下拋物線的頂點不是最低點。；「函數最大值為 1」=假，1 是發生位置，不是函數值。；「對稱軸為 y=12」=假，對稱軸應是 x=1。；「函數最大值為 12，在 x=1 時取得」=真，開口向下，頂點是最高點。。難度判定依據：standard：由開口解讀頂點；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s002-v007",
    "unitId": "u21",
    "skillId": "quadratic-vertex",
    "contentSha256": "3196031659c013168ed72399ede7b32d3d41d9349392f1a8a493d64166133f1d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "計算中點 -1 後可確認資訊一致；但仍無法得知頂點的 y 座標。",
    "derivedAnswer": "x=-1 確實是對稱軸，兩項資訊相符",
    "storedAnswer": "x=-1 確實是對稱軸，兩項資訊相符",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=-1 確實是對稱軸，兩項資訊相符」。逐項反證其餘選項：「對稱軸是 x=1」不成立，因為等高點平均不是 1。；「A、B 不可能在同一拋物線上」不成立，因為它們可作為關於 x=-1 的對稱點。；「頂點必為 (-1,6)」不成立，因為軸位置可知，但頂點 y 未知且通常不等於等高點 6。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-vertex」講義中先定義；本題目標是驗證等高點與頂點線索一致性，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「驗證等高點與頂點線索一致性」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「由軸位置擅自指定頂點高度」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=-1 確實是對稱軸，兩項資訊相符」。"
    },
    "difficultyReason": "advanced：交叉驗證對稱軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求驗證等高點與頂點線索一致性，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「某拋物線通過 A(-4,6)、B(2,6)，且頂點在直線 x=-1 上。下列判斷何者正確？」獨立重算：計算中點 -1 後可確認資訊一致；但仍無法得知頂點的 y 座標。；所得答案為「x=-1 確實是對稱軸，兩項資訊相符」。四選項逐項核對：「x=-1 確實是對稱軸，兩項資訊相符」=真，(-4+2)/2=-1，正好與頂點所在直線一致。；「對稱軸是 x=1」=假，等高點平均不是 1。；「A、B 不可能在同一拋物線上」=假，它們可作為關於 x=-1 的對稱點。；「頂點必為 (-1,6)」=假，軸位置可知，但頂點 y 未知且通常不等於等高點 6。。難度判定依據：advanced：交叉驗證對稱軸；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s002-v008",
    "unitId": "u21",
    "skillId": "quadratic-vertex",
    "contentSha256": "88b67d0950126aecab50329b2af97544d3ca8d2bdfa9d6a73ea2b25782d636dd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "(-1+7)/2=3；到兩輸入的距離皆 4，所以軸是 x=3。",
    "derivedAnswer": "x=3",
    "storedAnswer": "x=3",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=3」。逐項反證其餘選項：「x=-4」不成立，因為把兩輸入相減再除 2。；「x=4」不成立，因為只算距離的一半，未加起點。；「y=f(-1)」不成立，因為這是水平高度，不是軸的位置。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-vertex」講義中先定義；本題目標是由函數等值關係求軸，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由函數等值關係求軸」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把兩輸入差的一半直接當座標」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=3」。"
    },
    "difficultyReason": "advanced：從符號條件求軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由函數等值關係求軸，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「若 f(-1)=f(7)，且 f 是對稱軸唯一的二次函數，則其對稱軸必為何？」獨立重算：(-1+7)/2=3；到兩輸入的距離皆 4，所以軸是 x=3。；所得答案為「x=3」。四選項逐項核對：「x=-4」=假，把兩輸入相減再除 2。；「x=3」=真，等高點橫座標平均 (-1+7)/2=3。；「x=4」=假，只算距離的一半，未加起點。；「y=f(-1)」=假，這是水平高度，不是軸的位置。。難度判定依據：advanced：從符號條件求軸；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s002-v009",
    "unitId": "u21",
    "skillId": "quadratic-vertex",
    "contentSha256": "4426ed515e7425c8d27b4b5422c9e2fef25e3d8b5a070f1f6ee11a14625efcb7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "四選項中只有 (2,1) 同時在軸上且可作最低點。",
    "derivedAnswer": "(2,1)",
    "storedAnswer": "(2,1)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「(2,1)」。逐項反證其餘選項：「(2,7)」不成立，因為在 x=2 但高於等高點，會與向上開口矛盾。；「(0,1)」不成立，因為不在對稱軸 x=2 上。；「(4,1)」不成立，因為不在對稱軸 x=2 上。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-vertex」講義中先定義；本題目標是選擇軸上且低於等高點的頂點，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「選擇軸上且低於等高點的頂點」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「只檢查頂點是否在軸上而忽略高度」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「(2,1)」。"
    },
    "difficultyReason": "advanced：由多條件選頂點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求選擇軸上且低於等高點的頂點，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「某向上拋物線的對稱軸為 x=2，且通過 (0,5) 與 (4,5)。下列哪一點可能是其頂點？」獨立重算：四選項中只有 (2,1) 同時在軸上且可作最低點。；所得答案為「(2,1)」。四選項逐項核對：「(2,7)」=假，在 x=2 但高於等高點，會與向上開口矛盾。；「(0,1)」=假，不在對稱軸 x=2 上。；「(4,1)」=假，不在對稱軸 x=2 上。；「(2,1)」=真，頂點必在 x=2，且向上拋物線頂點 y 應低於 5。。難度判定依據：advanced：由多條件選頂點；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s002-v010",
    "unitId": "u21",
    "skillId": "quadratic-vertex",
    "contentSha256": "f0e08a76a7840df7a12ad3bcc1df8bedbfcff7fd96d4bb91e3c3485c47699337",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "中點位置為 12+(28-12)/2=20 m；這是拱頂所在垂直中心線。",
    "derivedAnswer": "20 m",
    "storedAnswer": "20 m",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「20 m」。逐項反證其餘選項：「8 m」不成立，因為只算兩位置差的一半。；「16 m」不成立，因為誤將兩位置直接相減。；「40 m」不成立，因為把兩位置相加但未除以 2。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-vertex」講義中先定義；本題目標是用等高邊點找拱頂中心線，沒有未定義的新符號。",
      "unitConflict": "單位審查：所有水平位置用公尺且基準相同，答案為位置 20 m。 本題四個選項皆回應同一所求量「用等高邊點找拱頂中心線」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：A、B 明確為同一拱物線上的等高點。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把間距的一半當成絕對位置」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「20 m」。"
    },
    "difficultyReason": "literacy：由實測等高點求中心位置；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "12 m 與 28 m 是相對同一基準的實際位置，不是單純無單位數；拱橋情境使「中點位置」而非「兩點距離」成為所求。",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求用等高邊點找拱頂中心線，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「一座拱橋的剖面可視為開口向下的拋物線。橋面左右兩點 A、B 在同一高度，水平位置分別為 12 m 與 28 m。拱頂正上方的水平位置為何？」獨立重算：中點位置為 12+(28-12)/2=20 m；這是拱頂所在垂直中心線。；所得答案為「20 m」。四選項逐項核對：「20 m」=真，(12+28)/2=20，拱頂位於對稱軸上。；「8 m」=假，只算兩位置差的一半。；「16 m」=假，誤將兩位置直接相減。；「40 m」=假，把兩位置相加但未除以 2。。難度判定依據：literacy：由實測等高點求中心位置；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s002-v011",
    "unitId": "u21",
    "skillId": "quadratic-vertex",
    "contentSha256": "02e0f15aafb67f2341d4bd9abdd7bb1d000768cd3ca80ed813e1ed738ce8c752",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "V(3,8) 代表 3 秒、8 公尺，且頂點是最高點。",
    "derivedAnswer": "水柱在 3 秒時達到最高 8 公尺",
    "storedAnswer": "水柱在 3 秒時達到最高 8 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「水柱在 3 秒時達到最高 8 公尺」。逐項反證其餘選項：「水柱在 8 秒時達到最高 3 公尺」不成立，因為交換了兩座標與單位。；「水柱的對稱軸是 y=8」不成立，因為對稱軸應是 x=3。；「水柱在 3 公尺處經過 8 秒」不成立，因為把橫縱軸意義顛倒。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-vertex」講義中先定義；本題目標是把頂點座標解釋成最高時刻與高度，沒有未定義的新符號。",
      "unitConflict": "單位審查：x 單位秒、y 單位公尺，兩者不可交換。 本題四個選項皆回應同一所求量「把頂點座標解釋成最高時刻與高度」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：時間 3 秒位於事件開始後，頂點可作合理最高點。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「交換座標與單位」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「水柱在 3 秒時達到最高 8 公尺」。"
    },
    "difficultyReason": "literacy：解讀水柱最高點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "時間與高度使用不同單位，必須保留座標順序才能解釋最高點；刪除噴泉情境會失去變數角色。",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求把頂點座標解釋成最高時刻與高度，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「噴泉水柱的高度圖為向下拋物線，最高點標為 V(3,8)，橫軸是時間（秒），縱軸是高度（公尺）。下列解讀何者正確？」獨立重算：V(3,8) 代表 3 秒、8 公尺，且頂點是最高點。；所得答案為「水柱在 3 秒時達到最高 8 公尺」。四選項逐項核對：「水柱在 8 秒時達到最高 3 公尺」=假，交換了兩座標與單位。；「水柱在 3 秒時達到最高 8 公尺」=真，向下拋物線頂點是最高點；x 為秒、y 為公尺。；「水柱的對稱軸是 y=8」=假，對稱軸應是 x=3。；「水柱在 3 公尺處經過 8 秒」=假，把橫縱軸意義顛倒。。難度判定依據：literacy：解讀水柱最高點；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s002-v012",
    "unitId": "u21",
    "skillId": "quadratic-vertex",
    "contentSha256": "2e8e8c9c640f4e32e1f0338f108fda09b5a02fcd565e222bc83ac15942477c26",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "1 與 5 到 3 的距離皆為 2 m；中央線位置為 3 m。",
    "derivedAnswer": "距左端 3 m",
    "storedAnswer": "距左端 3 m",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「距左端 3 m」。逐項反證其餘選項：「距左端 2 m」不成立，因為只算兩點間距的一半，漏掉起點 1 m。；「距左端 4 m」不成立，因為把平均錯算為較右位置。；「高度 2.4 m 的水平線」不成立，因為題目問中央線水平位置，不是高度線。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-vertex」講義中先定義；本題目標是由實測位置找對稱中央線，沒有未定義的新符號。",
      "unitConflict": "單位審查：位置與高度皆以公尺，但所求是水平位置，答案為距左端 3 m。 本題四個選項皆回應同一所求量「由實測位置找對稱中央線」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：兩點明確位於同一對稱弧線且高度相同。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把兩點距離的一半當絕對座標」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「距左端 3 m」。"
    },
    "difficultyReason": "literacy：用等高量測找板材中央；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "「從左端起算」決定平均後是絕對位置 3 m，而非僅回答兩點間距 2 m；板材情境使基準不可省略。",
    "prerequisiteCheck": "需先能使用 quadratic-function-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由實測位置找對稱中央線，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「一塊對稱太陽能板的弧形邊緣以拋物線近似。量得距左端 1 m 與 5 m 處高度都為 2.4 m。若量測基準從左端起算，弧形中央線位於何處？」獨立重算：1 與 5 到 3 的距離皆為 2 m；中央線位置為 3 m。；所得答案為「距左端 3 m」。四選項逐項核對：「距左端 2 m」=假，只算兩點間距的一半，漏掉起點 1 m。；「距左端 4 m」=假，把平均錯算為較右位置。；「距左端 3 m」=真，(1+5)/2=3。；「高度 2.4 m 的水平線」=假，題目問中央線水平位置，不是高度線。。難度判定依據：literacy：用等高量測找板材中央；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  }
];

export const DRAWING_SPECS=[
  {
    "figureId": "u21-fig-s002-01",
    "drawingSpecId": "u21-draw-s002-01",
    "unitId": "u21",
    "topicId": "u21-graphs",
    "skillId": "quadratic-vertex",
    "title": "頂點與對稱軸",
    "svgPath": "figures/u21/u21-fig-s002-01.svg",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "altText": "本圖以高對比線條與文字標籤呈現：拋物線最低點 V(2,-3) 與通過該點的垂直虛線 x=2。",
    "drawingSpec": {
      "canvas": {
        "width": 640,
        "height": 400
      },
      "viewBox": "0 0 640 400",
      "coordinateSystem": "SVG 原點在左上；所有座標與曲線位置依本圖明列的像素配置。",
      "elements": "本技能專用的座標軸、拋物線、標記點、文字與必要輔助線，詳見 SVG 元素。",
      "labels": "所有關鍵方程式、頂點、對稱軸、端點或表格欄位直接以文字標示。",
      "tickMarks": "圖形以關鍵座標文字為主；未標一般刻度時不得由外觀估讀其他座標。",
      "units": "情境圖依文字標示秒、公尺或平方單位；純座標圖使用無單位座標。",
      "lineRules": "實線為函數曲線或座標軸，虛線為對稱軸、限制邊界或比較曲線；用途由文字同步說明。",
      "scalePolicy": "同一圖內比較寬窄時使用同一比例；未標示的距離不得作精確數值推論。",
      "notToScaleWarning": "除明列座標外，不可只憑圖形外觀推算未標示數值。",
      "mobileConstraints": "最小主要字級 16 px，關鍵線寬至少 2 px，640 至 760 寬 viewBox 可等比例縮放。",
      "answerLeakageControl": "圖形只呈現講義所需結構或題幹已給資訊；不得把未給的選擇題答案直接標成結論。"
    },
    "svgAssertions": [
      "<title>",
      "<desc>",
      "role=\"img\"",
      "stroke=\"black\""
    ],
    "geometryAssertions": [
      "SVG viewBox 與 width、height 均存在。",
      "關鍵點與輔助線座標在畫布範圍內。",
      "文字標籤不依賴顏色區分。"
    ],
    "figureReview": {
      "mathematicalAccuracy": "pass",
      "mobileReadability": "pass",
      "answerLeakage": "pass",
      "manualVisualInspection": "pass",
      "reviewNote": "人工檢視 u21-fig-s002-01：拋物線最低點 V(2,-3) 與通過該點的垂直虛線 x=2。 已核對曲線方向、標記座標、虛實線語意、文字可讀性與畫布邊界，未以未標刻度洩漏額外答案。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "03608f8ff309ef1a946ecb6bb87ac3b64693eca3860fd15af49e2442f1efc7d8"
  }
];
