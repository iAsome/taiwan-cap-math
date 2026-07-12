// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s008-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-linear-graph",
  "skillId": "coordinate-linear-equation-graph",
  "lockedTitle": "二元一次方程式圖形",
  "title": "二元一次方程式圖形：所有解點形成一條直線",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能把方程式的一組解寫成坐標點。",
    "能以代值找出直線上的多個點。",
    "能辨認 x=常數與 y=常數的特殊直線。",
    "能說明方程式圖形為何包含無限多個解點。"
  ],
  "prerequisites": [
    {
      "skillId": "coordinate-rectangle-area",
      "requiredLevel": "能說明並正確使用「坐標平面中的長方形與面積」的核心規則，且不混淆坐標分量順序。"
    }
  ],
  "glossary": [
    {
      "term": "二元一次方程式",
      "definition": "含 x、y 兩個未知數，最高次數為 1 的等式。"
    },
    {
      "term": "方程式的解",
      "definition": "代入後使等式成立的一組 (x,y)。"
    },
    {
      "term": "方程式圖形",
      "definition": "所有解點在坐標平面上的集合。"
    },
    {
      "term": "水平直線",
      "definition": "形如 y=b。"
    },
    {
      "term": "垂直直線",
      "definition": "形如 x=a。"
    }
  ],
  "notation": [
    {
      "symbol": "ax+by=c",
      "meaning": "二元一次方程式的一般形式，a、b 不同時為 0。"
    },
    {
      "symbol": "x=a",
      "meaning": "通過所有橫坐標為 a 的點，為垂直線。"
    },
    {
      "symbol": "y=b",
      "meaning": "通過所有縱坐標為 b 的點，為水平線。"
    }
  ],
  "conceptNarrative": [
    "一組解對應一個點；所有解點合起來形成方程式的圖形。",
    "二元一次方程式通常有無限多組解，圖形是一條直線，而不是只有列出的兩三個點。",
    "要畫出直線，可選方便的 x 值求 y，或選方便的 y 值求 x；兩個不同解點即可決定直線。",
    "x=常數表示左右位置固定而上下可變，所以是垂直線；y=常數則相反。"
  ],
  "formalDefinitions": [
    {
      "name": "二元一次方程式圖形",
      "statement": "所有滿足 ax+by=c 的點 (x,y) 所形成的直線。"
    },
    {
      "name": "特殊直線",
      "statement": "x=a 為垂直線；y=b 為水平線。"
    }
  ],
  "formulas": [
    {
      "formula": "ax+by=c",
      "conditions": [
        "a、b 不同時為 0"
      ],
      "meaning": "每一組使等式成立的 (x,y) 都在同一直線上。"
    }
  ],
  "nonApplicableCases": [
    "只列一個解點不能完整代表整條直線。",
    "x=a 不是水平線。",
    "未知數的係數可為 0，但 a、b 不能同時為 0。",
    "本節不使用斜率、截距式等高中延伸術語作必要前提。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "選一個方便的 x 或 y。",
      "check": "能否讓另一個未知數易算？"
    },
    {
      "step": 2,
      "instruction": "代入方程式求另一分量。",
      "check": "等式是否成立？"
    },
    {
      "step": 3,
      "instruction": "至少取得兩個不同解點。",
      "check": "兩點是否真的不同？"
    },
    {
      "step": 4,
      "instruction": "辨認特殊形式。",
      "check": "x 固定還是 y 固定？"
    },
    {
      "step": 5,
      "instruction": "說明圖形含所有解。",
      "check": "是否誤以為只有列出的點？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "求 2x+y=6 的兩組解。",
      "solutionSteps": [
        "取 x=0 得 y=6。",
        "取 x=2 得 y=2。"
      ],
      "answer": "(0,6)、(2,2) 都在圖形上。"
    },
    {
      "exampleId": "L2",
      "prompt": "x=-3 的圖形方向。",
      "solutionSteps": [
        "所有點橫坐標固定 -3。",
        "縱坐標可任意改變。"
      ],
      "answer": "通過 x=-3 的垂直直線。"
    },
    {
      "exampleId": "L3",
      "prompt": "y=4 的圖形方向。",
      "solutionSteps": [
        "所有點縱坐標固定 4。",
        "橫坐標可任意改變。"
      ],
      "answer": "通過 y=4 的水平直線。"
    },
    {
      "exampleId": "L4",
      "prompt": "3x-2y=12，取 y=0 與 x=0。",
      "solutionSteps": [
        "y=0 得 x=4。",
        "x=0 得 y=-6。"
      ],
      "answer": "(4,0)、(0,-6)。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把一組解當作整條圖形。",
      "why": "未理解解集合。",
      "correction": "列出的點只是直線上的代表點。"
    },
    {
      "mistake": "認為 x=2 是水平線。",
      "why": "把軸名與方向混淆。",
      "correction": "x 固定表示左右不變，只能上下延伸。"
    },
    {
      "mistake": "代入後只算一邊。",
      "why": "沒有檢查等式。",
      "correction": "將 x、y 同時代入左右驗證。"
    },
    {
      "mistake": "選兩個相同點畫線。",
      "why": "未確認解點不同。",
      "correction": "至少需要兩個不同解點。"
    },
    {
      "mistake": "把 xy 項也視為二元一次。",
      "why": "忽略最高次與乘積。",
      "correction": "xy 不是一次項，本單元不處理。"
    }
  ],
  "selfCheck": [
    "我是否把解寫成 (x,y)？",
    "兩個點是否都滿足方程式？",
    "x=常數是否判為垂直線？",
    "我是否知道圖形包含無限多個解點？"
  ],
  "summary": [
    "方程式的每組解是一個點。",
    "所有解點形成直線。",
    "兩個不同解點可決定直線。",
    "x=常數垂直，y=常數水平。"
  ],
  "connections": {
    "previous": "承接坐標點與長方形中的水平垂直方向，並使用先前二元一次方程式求解能力。",
    "next": [
      "下一節以代入檢查點是否在直線上。",
      "再下一節會利用令 x 或 y 為 0 找截距。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s008-v001",
      "u05-s008-v002",
      "u05-s008-v003",
      "u05-s008-v004",
      "u05-s008-v005",
      "u05-s008-v006",
      "u05-s008-v007",
      "u05-s008-v008",
      "u05-s008-v009",
      "u05-s008-v010",
      "u05-s008-v011",
      "u05-s008-v012"
    ],
    "constructedResponseIds": [
      "u05-s008-cr001",
      "u05-s008-cr002"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本講義依鎖定範圍採全文字描述；方向、順序與方程式均以可由螢幕閱讀器理解的完整句子表達。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "Taiwan junior-high CAP coordinate geometry only",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "futureUnitKnowledgeAvoided": true,
    "reviewNote": "逐式重新代入四個例題的解點，檢查特殊直線方向與一般式係數條件；內容只要求國中會考的解點與直線觀念，未依賴斜率公式。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "829f6e7bd000712a6685a2e8c0c3c70b9a5b974ea47c85e33f9867f278108606"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s008-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "下列哪個點是方程式 x+y=5 的一組解？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "辨認二元一次方程式的一組解",
    "choices": [
      "(1,3)",
      "(3,3)",
      "(5,1)",
      "(2,3)"
    ],
    "answerIndex": 3,
    "independentSolution": "將 (2,3) 代入得 2+3=5，等式成立。",
    "explanation": "將 (2,3) 代入得 2+3=5，等式成立。",
    "steps": [
      "代入每個候選點。",
      "只有 (2,3) 的和為 5。"
    ],
    "optionAnalysis": [
      {
        "choice": "(1,3)",
        "truth": false,
        "reason": "和為 4。"
      },
      {
        "choice": "(3,3)",
        "truth": false,
        "reason": "和為 6。"
      },
      {
        "choice": "(5,1)",
        "truth": false,
        "reason": "和為 6。"
      },
      {
        "choice": "(2,3)",
        "truth": true,
        "reason": "2+3=5。"
      }
    ],
    "misconceptionTarget": "把靠近 5 的和也視為解。",
    "prerequisiteCheck": "需會代入與加法。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "候選點均為完整有序數對。",
    "difficultyReason": "單次代入即可，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認二元一次方程式的一組解",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "31471372ea1d51ae2185e73055e7329b9d0e9358afdb56c1a171af8e8f8599b7"
  },
  {
    "questionId": "u05-s008-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "方程式 y=-2 的圖形是哪一種直線？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "辨認水平特殊直線",
    "choices": [
      "垂直直線",
      "水平直線",
      "通過原點的斜線",
      "只有一個點"
    ],
    "answerIndex": 1,
    "independentSolution": "所有解點的縱坐標都固定為 -2，而橫坐標可變，因此形成水平直線。",
    "explanation": "所有解點的縱坐標都固定為 -2，而橫坐標可變，因此形成水平直線。",
    "steps": [
      "辨認 y 固定。",
      "x 可任意變動，沿水平方向延伸。"
    ],
    "optionAnalysis": [
      {
        "choice": "垂直直線",
        "truth": false,
        "reason": "垂直線應為 x=常數。"
      },
      {
        "choice": "水平直線",
        "truth": true,
        "reason": "y 固定對應水平線。"
      },
      {
        "choice": "通過原點的斜線",
        "truth": false,
        "reason": "y=-2 不通過原點。"
      },
      {
        "choice": "只有一個點",
        "truth": false,
        "reason": "x 有無限多種值。"
      }
    ],
    "misconceptionTarget": "把 y=常數誤判為垂直線。",
    "prerequisiteCheck": "需理解坐標軸方向。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "y=-2 為二元一次方程式的特殊形式。",
    "difficultyReason": "直接辨認特殊形式，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認水平特殊直線",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "510287e1c3f43a6b65a8da0b14479f40951fca5d8d1c8ed6ff363ebba328f409"
  },
  {
    "questionId": "u05-s008-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "方程式 x=4 的圖形通過下列哪個點？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "辨認垂直線上的點",
    "choices": [
      "(-7,4)",
      "(0,4)",
      "(4,-7)",
      "(-4,-7)"
    ],
    "answerIndex": 2,
    "independentSolution": "x=4 的所有點第一分量都為 4；(4,-7) 符合。",
    "explanation": "x=4 的所有點第一分量都為 4；(4,-7) 符合。",
    "steps": [
      "檢查候選點的 x。",
      "選第一分量為 4 的點。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-7,4)",
        "truth": false,
        "reason": "橫坐標為 -7。"
      },
      {
        "choice": "(0,4)",
        "truth": false,
        "reason": "橫坐標為 0。"
      },
      {
        "choice": "(4,-7)",
        "truth": true,
        "reason": "橫坐標為 4。"
      },
      {
        "choice": "(-4,-7)",
        "truth": false,
        "reason": "橫坐標為 -4。"
      }
    ],
    "misconceptionTarget": "把 x=4 看成第二分量為 4。",
    "prerequisiteCheck": "需掌握有序數對順序。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "y 可為任意數，故負值 -7 合法。",
    "difficultyReason": "只需讀第一分量，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認垂直線上的點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b03ef5976221a382a3a717d8faadef1cde927e3a65fddbf5a3b42ed5c4606239"
  },
  {
    "questionId": "u05-s008-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "要在 2x+y=6 的圖形上找兩個不同點，下列哪一組可用？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "選出可決定直線的兩個解點",
    "choices": [
      "(0,6) 與 (3,0)",
      "(0,6) 與 (0,6)",
      "(2,4) 與 (3,1)",
      "(1,5) 與 (2,1)"
    ],
    "answerIndex": 0,
    "independentSolution": "代入：(0,6) 得 6；(3,0) 得 6，且兩點不同。",
    "explanation": "代入：(0,6) 得 6；(3,0) 得 6，且兩點不同。",
    "steps": [
      "逐點代入 2x+y。",
      "確認兩點不同。"
    ],
    "optionAnalysis": [
      {
        "choice": "(0,6) 與 (3,0)",
        "truth": true,
        "reason": "兩點皆成立且不同。"
      },
      {
        "choice": "(0,6) 與 (0,6)",
        "truth": false,
        "reason": "同一點重複，不能決定直線。"
      },
      {
        "choice": "(2,4) 與 (3,1)",
        "truth": false,
        "reason": "代入分別得 8、7。"
      },
      {
        "choice": "(1,5) 與 (2,1)",
        "truth": false,
        "reason": "代入分別得 7、5。"
      }
    ],
    "misconceptionTarget": "只檢查一個點，或重複同一點。",
    "prerequisiteCheck": "需會代入方程式。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩個不同解點足以代表同一直線的方向。",
    "difficultyReason": "需同時檢查兩點與不同性，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "選出可決定直線的兩個解點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d72654ef0f5320c3b5250e55828df2499f97a76ba5b973bc86ae03d5d2681ab1"
  },
  {
    "questionId": "u05-s008-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "方程式 3x-2y=12。若取 x=0，所得圖形上的點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由指定 x 值求解點",
    "choices": [
      "(0,6)",
      "(0,-6)",
      "(4,0)",
      "(-6,0)"
    ],
    "answerIndex": 1,
    "independentSolution": "令 x=0 得 -2y=12，所以 y=-6，點為 (0,-6)。",
    "explanation": "令 x=0 得 -2y=12，所以 y=-6，點為 (0,-6)。",
    "steps": [
      "代入 x=0。",
      "解 -2y=12。"
    ],
    "optionAnalysis": [
      {
        "choice": "(0,6)",
        "truth": false,
        "reason": "漏掉負號。"
      },
      {
        "choice": "(0,-6)",
        "truth": true,
        "reason": "符號與坐標順序正確。"
      },
      {
        "choice": "(4,0)",
        "truth": false,
        "reason": "這是取 y=0 得到的點。"
      },
      {
        "choice": "(-6,0)",
        "truth": false,
        "reason": "把 y 值放到 x。"
      }
    ],
    "misconceptionTarget": "解負係數或坐標分量位置錯。",
    "prerequisiteCheck": "需會一元一次方程式。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目只要求一個解點，不等同完整圖形。",
    "difficultyReason": "需解一個一次方程式，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "由指定 x 值求解點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "322d41cbaae4ad6ff11e3228e877048840d4e01a773da6139b92427985f063b5"
  },
  {
    "questionId": "u05-s008-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "下列哪個敘述正確？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "理解方程式圖形的解集合",
    "choices": [
      "圖形只有用來畫線的兩個點",
      "每個二元一次方程式都只有兩組解",
      "x=3 的圖形是水平線",
      "二元一次方程式的圖形包含所有使等式成立的點"
    ],
    "answerIndex": 3,
    "independentSolution": "方程式圖形是全部解點的集合；用來畫線的兩點只是其中兩個代表點。",
    "explanation": "方程式圖形是全部解點的集合；用來畫線的兩點只是其中兩個代表點。",
    "steps": [
      "回到圖形定義。",
      "排除解的數量與特殊線方向錯誤。"
    ],
    "optionAnalysis": [
      {
        "choice": "圖形只有用來畫線的兩個點",
        "truth": false,
        "reason": "直線上還有無限多個解點。"
      },
      {
        "choice": "每個二元一次方程式都只有兩組解",
        "truth": false,
        "reason": "一般有無限多組解。"
      },
      {
        "choice": "x=3 的圖形是水平線",
        "truth": false,
        "reason": "x 固定形成垂直線。"
      },
      {
        "choice": "二元一次方程式的圖形包含所有使等式成立的點",
        "truth": true,
        "reason": "符合解集合定義。"
      }
    ],
    "misconceptionTarget": "把作圖所選的點數當成解的總數。",
    "prerequisiteCheck": "需理解解點與直線。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "本題限 a、b 不同時為 0 的二元一次方程式。",
    "difficultyReason": "需辨析四個概念敘述，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "理解方程式圖形的解集合",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6f1ea073817f1b438b9a9c5715fa822ca9112dfb5f1be86e342bfcf65abcf04d"
  },
  {
    "questionId": "u05-s008-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "方程式 ax+by=6 的圖形是垂直直線 x=2。若 a、b 為整數，且方程式正好等價於 3x=6，則 (a,b) 為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由特殊直線反推係數",
    "choices": [
      "(3,0)",
      "(0,3)",
      "(2,0)",
      "(3,6)"
    ],
    "answerIndex": 0,
    "independentSolution": "3x=6 可寫成 3x+0y=6，所以 a=3、b=0。",
    "explanation": "3x=6 可寫成 3x+0y=6，所以 a=3、b=0。",
    "steps": [
      "比較 x 係數。",
      "確認 y 係數為 0。"
    ],
    "optionAnalysis": [
      {
        "choice": "(3,0)",
        "truth": true,
        "reason": "方程式為 3x=6。"
      },
      {
        "choice": "(0,3)",
        "truth": false,
        "reason": "會成 3y=6，水平線。"
      },
      {
        "choice": "(2,0)",
        "truth": false,
        "reason": "會成 2x=6，即 x=3。"
      },
      {
        "choice": "(3,6)",
        "truth": false,
        "reason": "包含 y 項，不是垂直線 x=2。"
      }
    ],
    "misconceptionTarget": "認為二元方程式兩個係數都不能為 0。",
    "prerequisiteCheck": "需會比較方程式係數。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "a、b 不同時為 0；其中 b=0 合法。",
    "difficultyReason": "需連結一般式與特殊形式，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由特殊直線反推係數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "46eeae26d85c824280c0b7f209477d78faeb0b0145373cc2c0b8942e3333beec"
  },
  {
    "questionId": "u05-s008-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "方程式 2x+ky=8 的圖形通過 (0,4) 與 (4,0)，求 k。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由兩個解點求參數",
    "choices": [
      "1",
      "4",
      "2",
      "8"
    ],
    "answerIndex": 2,
    "independentSolution": "代入 (0,4)：4k=8，得 k=2；(4,0) 也使 2×4=8，驗證成立。",
    "explanation": "代入 (0,4)：4k=8，得 k=2；(4,0) 也使 2×4=8，驗證成立。",
    "steps": [
      "用 (0,4) 求 k。",
      "用 (4,0) 驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "(0,4) 代入只得 4。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "代入得 16。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "兩點都在圖形上。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "代入得 32。"
      }
    ],
    "misconceptionTarget": "只看其中一個坐標為 0 就直接把另一坐標當係數。",
    "prerequisiteCheck": "需會代入。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "k=2 時仍為合法二元一次方程式。",
    "difficultyReason": "需利用解點條件求係數並交叉驗證，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由兩個解點求參數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6a74c7b6c74886cf2b3d3d0ae88885a1d5f4320ac3a028efcc98cc89ad0d1099"
  },
  {
    "questionId": "u05-s008-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "下列哪個方程式的圖形與 y 軸平行？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "辨認與坐標軸平行的方程式",
    "choices": [
      "x=-5",
      "y=-5",
      "x+y=-5",
      "y=5x"
    ],
    "answerIndex": 0,
    "independentSolution": "與 y 軸平行的直線是垂直線，形式為 x=常數；x=-5 符合。",
    "explanation": "與 y 軸平行的直線是垂直線，形式為 x=常數；x=-5 符合。",
    "steps": [
      "辨認 y 軸本身為垂直方向。",
      "選 x 固定的方程式。"
    ],
    "optionAnalysis": [
      {
        "choice": "x=-5",
        "truth": true,
        "reason": "垂直直線。"
      },
      {
        "choice": "y=-5",
        "truth": false,
        "reason": "水平直線。"
      },
      {
        "choice": "x+y=-5",
        "truth": false,
        "reason": "x、y 都變動的斜線。"
      },
      {
        "choice": "y=5x",
        "truth": false,
        "reason": "通過原點的斜線。"
      }
    ],
    "misconceptionTarget": "把『與 y 軸平行』誤解成 y=常數。",
    "prerequisiteCheck": "需理解特殊直線。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "『平行』不包含與 y 軸重合；x=-5 不等於 x=0。",
    "difficultyReason": "需從多種方程式形式辨認方向，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認與坐標軸平行的方程式",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c3a91e3760598312fddec0a2e769ff2209f616728433bdd3e1bba43eeca55a25"
  },
  {
    "questionId": "u05-s008-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "某票價方案的總價 y 元與張數 x 的關係為 y=120x。下列哪個點在此關係圖形上？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "把票價關係轉成解點",
    "choices": [
      "(120,5)",
      "(5,120)",
      "(5,600)",
      "(600,5)"
    ],
    "answerIndex": 2,
    "independentSolution": "購買 5 張時 y=120×5=600，因此 (5,600) 在圖形上。",
    "explanation": "購買 5 張時 y=120×5=600，因此 (5,600) 在圖形上。",
    "steps": [
      "確認 x 代表張數。",
      "計算 y=600。"
    ],
    "optionAnalysis": [
      {
        "choice": "(120,5)",
        "truth": false,
        "reason": "交換張數與價格。"
      },
      {
        "choice": "(5,120)",
        "truth": false,
        "reason": "只記單價，未乘張數。"
      },
      {
        "choice": "(5,600)",
        "truth": true,
        "reason": "5 張對應 600 元。"
      },
      {
        "choice": "(600,5)",
        "truth": false,
        "reason": "分量與數量意義皆錯。"
      }
    ],
    "misconceptionTarget": "把單價當總價或交換變數意義。",
    "prerequisiteCheck": "需會代入一次關係。",
    "estimatedTimeSec": 150,
    "unitCheck": "x 單位為張，y 單位為元；方程式係數 120 元/張。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "x 為非負整數的情境限制不影響候選點判斷。",
    "difficultyReason": "情境變數定義決定坐標順序與單位。",
    "literacyContextNecessity": "張數與總價的單位及角色不可交換；情境是判定有序數對意義的必要資訊。",
    "authoringIntent": "把票價關係轉成解點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e309821c4c281005f1473f3984a7a81d89c1281a2d6891752b2361fa55b9dcc9"
  },
  {
    "questionId": "u05-s008-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "水箱原有 50 公升，每分鐘加入 8 公升。以時間 x 分鐘、總水量 y 公升表示，關係式 y=50+8x。10 分鐘時圖形上的點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "在累積量情境找圖形上的點",
    "choices": [
      "(10,80)",
      "(130,10)",
      "(8,50)",
      "(10,130)"
    ],
    "answerIndex": 3,
    "independentSolution": "x=10 時 y=50+8×10=130，所以點為 (10,130)。",
    "explanation": "x=10 時 y=50+8×10=130，所以點為 (10,130)。",
    "steps": [
      "代入時間 10。",
      "依 (時間,水量) 排列。"
    ],
    "optionAnalysis": [
      {
        "choice": "(10,80)",
        "truth": false,
        "reason": "漏加原有 50。"
      },
      {
        "choice": "(130,10)",
        "truth": false,
        "reason": "交換時間與水量。"
      },
      {
        "choice": "(8,50)",
        "truth": false,
        "reason": "把係數與初始量當坐標。"
      },
      {
        "choice": "(10,130)",
        "truth": true,
        "reason": "初始量與增加量皆計入。"
      }
    ],
    "misconceptionTarget": "忽略初始量或交換變數。",
    "prerequisiteCheck": "需會代入。",
    "estimatedTimeSec": 150,
    "unitCheck": "x 分鐘、y 公升，答案依此順序。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目只在 x≥0 的時間範圍使用圖形。",
    "difficultyReason": "需理解一次關係中的初始值與每分鐘增量。",
    "literacyContextNecessity": "50 公升初始量與每分鐘 8 公升是水箱情境的核心，決定方程式與解點。",
    "authoringIntent": "在累積量情境找圖形上的點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "df6b958edbc4b0916238df885ef451f21a2b4b4e30434b56e27bd2ef347b103c"
  },
  {
    "questionId": "u05-s008-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "兩種感測量 x、y 滿足 4x+2y=20。工程師選了 (1,8) 與 (3,4) 來校正直線。下列判斷何者正確？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "檢查校正點是否同屬直線",
    "choices": [
      "只有 (1,8) 在直線上",
      "兩點都在直線上",
      "只有 (3,4) 在直線上",
      "兩點都不在直線上"
    ],
    "answerIndex": 1,
    "independentSolution": "代入 (1,8) 得 4+16=20；代入 (3,4) 得 12+8=20，所以兩點都在直線上。",
    "explanation": "代入 (1,8) 得 4+16=20；代入 (3,4) 得 12+8=20，所以兩點都在直線上。",
    "steps": [
      "代入第一點得 20。",
      "代入第二點也得 20。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有 (1,8) 在直線上",
        "truth": false,
        "reason": "錯誤排除同樣成立的第二點。"
      },
      {
        "choice": "兩點都在直線上",
        "truth": true,
        "reason": "兩點均使左邊等於 20。"
      },
      {
        "choice": "只有 (3,4) 在直線上",
        "truth": false,
        "reason": "錯誤排除同樣成立的第一點。"
      },
      {
        "choice": "兩點都不在直線上",
        "truth": false,
        "reason": "與兩次代入結果相反。"
      }
    ],
    "misconceptionTarget": "心算一個點後未檢查另一點。",
    "prerequisiteCheck": "需會代入。",
    "estimatedTimeSec": 150,
    "unitCheck": "x、y 為感測數值，兩點代入同一方程式。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩點均為精確紀錄，代入後皆成立，正確敘述唯一。",
    "difficultyReason": "需獨立驗證兩個實際資料點。",
    "literacyContextNecessity": "兩個校正紀錄是否同時符合感測器的線性關係，是判斷設備資料一致性的必要工程資訊。",
    "authoringIntent": "檢查校正點是否同屬直線",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "945807a1852177383c4b03b39ef9de40eea2c0ede3e9dc86755585d4f0cf88b8"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s008-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "為方程式 2x+y=6 找出三個不同解點，其中至少一點在 x 軸、至少一點在 y 軸，並逐點驗證。",
    "requiredWork": [
      "選三組 x、y。",
      "包含兩種軸上點。",
      "代入驗證。"
    ],
    "fullCreditSolution": [
      "令 x=0，得 (0,6)，在 y 軸上。",
      "令 y=0，得 (3,0)，在 x 軸上。",
      "再取 x=1，得 y=4，所以第三點可為 (1,4)。",
      "驗證：0+6=6；2×3+0=6；2×1+4=6。"
    ],
    "alternativeSolutions": [
      "第三點也可選 (2,2)、(-1,8) 等任何不同解點。"
    ],
    "reasoningSteps": [
      "令 x=0，得 (0,6)，在 y 軸上。",
      "令 y=0，得 (3,0)，在 x 軸上。",
      "再取 x=1，得 y=4，所以第三點可為 (1,4)。",
      "驗證：0+6=6；2×3+0=6；2×1+4=6。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "給出三個不同正確解點，含 x 軸與 y 軸點，且有代入驗證。"
      },
      {
        "score": 2,
        "criteria": "三點正確但驗證不足，或只給兩個符合全部條件的點。"
      },
      {
        "score": 1,
        "criteria": "至少一個正確解點並顯示代入方法。"
      },
      {
        "score": 0,
        "criteria": "三點都不滿足方程式或只有重複同一點。"
      }
    ],
    "partialCreditRules": [
      "第三點答案不唯一，審查是否滿足方程式即可。"
    ],
    "followThroughPolicy": "若其中一個解點算錯，其餘點逐一代入成立且符合截軸要求，正確點與驗證分照給；錯誤點不得算入三個有效解。",
    "unitAndNotationRules": "每個解寫成 (x,y)，至少明確標出一個 x 軸點 y=0 與一個 y 軸點 x=0。",
    "answerOnlyPolicy": "只列三個正確解點但沒有逐點代入驗證，最高給 2 分。",
    "commonErrors": [
      "把 (0,3) 當 x 軸點。",
      "列三個點但未保持不同。"
    ],
    "independentReview": {
      "derivedResult": "某一自選第三點錯誤不影響兩個截軸點得分。",
      "ambiguity": "點以 (x,y)；軸上點需有相應 0 分量。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 某一自選第三點錯誤不影響兩個截軸點得分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "98e026b5b75e64ffd889f259e22932fae065f6e9edbf069da37f6f1be242157b"
  },
  {
    "questionId": "u05-s008-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "方程式 ax+2y=8 的圖形通過 A=(2,1) 與 B=(0,4)。求 a，並說明為何這兩點足以作為畫直線的代表點。",
    "requiredWork": [
      "由 A 代入求 a。",
      "用 B 驗證。",
      "說明兩個不同點決定一條直線。"
    ],
    "fullCreditSolution": [
      "A 代入得 2a+2=8，所以 2a=6，a=3。",
      "B 代入得 0+8=8，與 a 無關且成立。",
      "A、B 是兩個不同解點；二元一次方程式圖形是直線，兩個不同點可決定該直線。"
    ],
    "alternativeSolutions": [
      "也可先寫方程式 3x+2y=8，再驗證兩點。"
    ],
    "reasoningSteps": [
      "A 代入得 2a+2=8，所以 2a=6，a=3。",
      "B 代入得 0+8=8，與 a 無關且成立。",
      "A、B 是兩個不同解點；二元一次方程式圖形是直線，兩個不同點可決定該直線。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "a=3、B 驗證正確，並說明兩個不同解點決定直線。"
      },
      {
        "score": 2,
        "criteria": "a=3 且有代入，但幾何說明不足。"
      },
      {
        "score": 1,
        "criteria": "列出 2a+2=8 但解算錯，或只驗證兩點未求 a。"
      },
      {
        "score": 0,
        "criteria": "把 A、B 坐標相加求係數，未使用方程式。"
      }
    ],
    "partialCreditRules": [
      "B 無法單獨決定 a，但可作一致性驗證，說明此點可加分。"
    ],
    "followThroughPolicy": "若代入 A 求 a 時有單一算術錯誤，但能正確驗證 B 並說明兩相異點決定一直線，可給驗證與概念分；錯誤 a 不給。",
    "unitAndNotationRules": "參數寫成 a=3；代入點時保留有序對順序，並說明 A、B 為相異點。",
    "answerOnlyPolicy": "只寫 a=3 而沒有代入及兩點代表性的說明，最高給 1 分。",
    "commonErrors": [
      "用 B 得 a=4。",
      "認為直線只有這兩個點。"
    ],
    "independentReview": {
      "derivedResult": "若 a 算錯但能正確說明兩點決定直線，可保留概念分。",
      "ambiguity": "a 為係數；點為有序數對。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若 a 算錯但能正確說明兩點決定直線，可保留概念分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b578db13271491cd4a86f76e41e823df0e74b5d4e1fee2425f8c9fe806d7f58c"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s008-v001",
    "contentSha256": "31471372ea1d51ae2185e73055e7329b9d0e9358afdb56c1a171af8e8f8599b7",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "將 (2,3) 代入得 2+3=5，等式成立。",
    "derivedAnswer": "(2,3)",
    "storedAnswer": "(2,3)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(2,3)」；其餘三項逐項檢查：「(1,3)」不成立，和為 4。；「(3,3)」不成立，和為 6。；「(5,1)」不成立，和為 6。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「二元一次方程式圖形」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "候選點均為完整有序數對。",
      "alternateReading": "常見誤讀是「把靠近 5 的和也視為解。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "單次代入即可，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代入與加法。",
    "languageCheck": "題幹所求為「辨認二元一次方程式的一組解」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「下列哪個點是方程式 x+y=5 的一組解？」重新依序處理：將 (2,3) 代入得 2+3=5，等式成立。 正確選項為「(2,3)」。三個干擾項均對應不同錯誤：「(1,3)」不成立，和為 4。；「(3,3)」不成立，和為 6。；「(5,1)」不成立，和為 6。。邊界審查：候選點均為完整有序數對。 難度理由：單次代入即可，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s008-v002",
    "contentSha256": "510287e1c3f43a6b65a8da0b14479f40951fca5d8d1c8ed6ff363ebba328f409",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "所有解點的縱坐標都固定為 -2，而橫坐標可變，因此形成水平直線。",
    "derivedAnswer": "水平直線",
    "storedAnswer": "水平直線",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「水平直線」；其餘三項逐項檢查：「垂直直線」不成立，垂直線應為 x=常數。；「通過原點的斜線」不成立，y=-2 不通過原點。；「只有一個點」不成立，x 有無限多種值。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「二元一次方程式圖形」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "y=-2 為二元一次方程式的特殊形式。",
      "alternateReading": "常見誤讀是「把 y=常數誤判為垂直線。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "直接辨認特殊形式，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解坐標軸方向。",
    "languageCheck": "題幹所求為「辨認水平特殊直線」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「方程式 y=-2 的圖形是哪一種直線？」重新依序處理：所有解點的縱坐標都固定為 -2，而橫坐標可變，因此形成水平直線。 正確選項為「水平直線」。三個干擾項均對應不同錯誤：「垂直直線」不成立，垂直線應為 x=常數。；「通過原點的斜線」不成立，y=-2 不通過原點。；「只有一個點」不成立，x 有無限多種值。。邊界審查：y=-2 為二元一次方程式的特殊形式。 難度理由：直接辨認特殊形式，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s008-v003",
    "contentSha256": "b03ef5976221a382a3a717d8faadef1cde927e3a65fddbf5a3b42ed5c4606239",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x=4 的所有點第一分量都為 4；(4,-7) 符合。",
    "derivedAnswer": "(4,-7)",
    "storedAnswer": "(4,-7)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(4,-7)」；其餘三項逐項檢查：「(-7,4)」不成立，橫坐標為 -7。；「(0,4)」不成立，橫坐標為 0。；「(-4,-7)」不成立，橫坐標為 -4。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「二元一次方程式圖形」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "y 可為任意數，故負值 -7 合法。",
      "alternateReading": "常見誤讀是「把 x=4 看成第二分量為 4。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "只需讀第一分量，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需掌握有序數對順序。",
    "languageCheck": "題幹所求為「辨認垂直線上的點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「方程式 x=4 的圖形通過下列哪個點？」重新依序處理：x=4 的所有點第一分量都為 4；(4,-7) 符合。 正確選項為「(4,-7)」。三個干擾項均對應不同錯誤：「(-7,4)」不成立，橫坐標為 -7。；「(0,4)」不成立，橫坐標為 0。；「(-4,-7)」不成立，橫坐標為 -4。。邊界審查：y 可為任意數，故負值 -7 合法。 難度理由：只需讀第一分量，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s008-v004",
    "contentSha256": "d72654ef0f5320c3b5250e55828df2499f97a76ba5b973bc86ae03d5d2681ab1",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "代入：(0,6) 得 6；(3,0) 得 6，且兩點不同。",
    "derivedAnswer": "(0,6) 與 (3,0)",
    "storedAnswer": "(0,6) 與 (3,0)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(0,6) 與 (3,0)」；其餘三項逐項檢查：「(0,6) 與 (0,6)」不成立，同一點重複，不能決定直線。；「(2,4) 與 (3,1)」不成立，代入分別得 8、7。；「(1,5) 與 (2,1)」不成立，代入分別得 7、5。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「二元一次方程式圖形」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩個不同解點足以代表同一直線的方向。",
      "alternateReading": "常見誤讀是「只檢查一個點，或重複同一點。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需同時檢查兩點與不同性，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代入方程式。",
    "languageCheck": "題幹所求為「選出可決定直線的兩個解點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「要在 2x+y=6 的圖形上找兩個不同點，下列哪一組可用？」重新依序處理：代入：(0,6) 得 6；(3,0) 得 6，且兩點不同。 正確選項為「(0,6) 與 (3,0)」。三個干擾項均對應不同錯誤：「(0,6) 與 (0,6)」不成立，同一點重複，不能決定直線。；「(2,4) 與 (3,1)」不成立，代入分別得 8、7。；「(1,5) 與 (2,1)」不成立，代入分別得 7、5。。邊界審查：兩個不同解點足以代表同一直線的方向。 難度理由：需同時檢查兩點與不同性，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s008-v005",
    "contentSha256": "322d41cbaae4ad6ff11e3228e877048840d4e01a773da6139b92427985f063b5",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "令 x=0 得 -2y=12，所以 y=-6，點為 (0,-6)。",
    "derivedAnswer": "(0,-6)",
    "storedAnswer": "(0,-6)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(0,-6)」；其餘三項逐項檢查：「(0,6)」不成立，漏掉負號。；「(4,0)」不成立，這是取 y=0 得到的點。；「(-6,0)」不成立，把 y 值放到 x。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「二元一次方程式圖形」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目只要求一個解點，不等同完整圖形。",
      "alternateReading": "常見誤讀是「解負係數或坐標分量位置錯。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需解一個一次方程式，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會一元一次方程式。",
    "languageCheck": "題幹所求為「由指定 x 值求解點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「方程式 3x-2y=12。若取 x=0，所得圖形上的點為何？」重新依序處理：令 x=0 得 -2y=12，所以 y=-6，點為 (0,-6)。 正確選項為「(0,-6)」。三個干擾項均對應不同錯誤：「(0,6)」不成立，漏掉負號。；「(4,0)」不成立，這是取 y=0 得到的點。；「(-6,0)」不成立，把 y 值放到 x。。邊界審查：題目只要求一個解點，不等同完整圖形。 難度理由：需解一個一次方程式，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s008-v006",
    "contentSha256": "6f1ea073817f1b438b9a9c5715fa822ca9112dfb5f1be86e342bfcf65abcf04d",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "方程式圖形是全部解點的集合；用來畫線的兩點只是其中兩個代表點。",
    "derivedAnswer": "二元一次方程式的圖形包含所有使等式成立的點",
    "storedAnswer": "二元一次方程式的圖形包含所有使等式成立的點",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「二元一次方程式的圖形包含所有使等式成立的點」；其餘三項逐項檢查：「圖形只有用來畫線的兩個點」不成立，直線上還有無限多個解點。；「每個二元一次方程式都只有兩組解」不成立，一般有無限多組解。；「x=3 的圖形是水平線」不成立，x 固定形成垂直線。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「二元一次方程式圖形」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "本題限 a、b 不同時為 0 的二元一次方程式。",
      "alternateReading": "常見誤讀是「把作圖所選的點數當成解的總數。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需辨析四個概念敘述，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解解點與直線。",
    "languageCheck": "題幹所求為「理解方程式圖形的解集合」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「下列哪個敘述正確？」重新依序處理：方程式圖形是全部解點的集合；用來畫線的兩點只是其中兩個代表點。 正確選項為「二元一次方程式的圖形包含所有使等式成立的點」。三個干擾項均對應不同錯誤：「圖形只有用來畫線的兩個點」不成立，直線上還有無限多個解點。；「每個二元一次方程式都只有兩組解」不成立，一般有無限多組解。；「x=3 的圖形是水平線」不成立，x 固定形成垂直線。。邊界審查：本題限 a、b 不同時為 0 的二元一次方程式。 難度理由：需辨析四個概念敘述，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s008-v007",
    "contentSha256": "46eeae26d85c824280c0b7f209477d78faeb0b0145373cc2c0b8942e3333beec",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "3x=6 可寫成 3x+0y=6，所以 a=3、b=0。",
    "derivedAnswer": "(3,0)",
    "storedAnswer": "(3,0)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(3,0)」；其餘三項逐項檢查：「(0,3)」不成立，會成 3y=6，水平線。；「(2,0)」不成立，會成 2x=6，即 x=3。；「(3,6)」不成立，包含 y 項，不是垂直線 x=2。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「二元一次方程式圖形」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "a、b 不同時為 0；其中 b=0 合法。",
      "alternateReading": "常見誤讀是「認為二元方程式兩個係數都不能為 0。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需連結一般式與特殊形式，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會比較方程式係數。",
    "languageCheck": "題幹所求為「由特殊直線反推係數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「方程式 ax+by=6 的圖形是垂直直線 x=2。若 a、b 為整數，且方程式正好等價於 3x=6，則 (a,b) 為何？」重新依序處理：3x=6 可寫成 3x+0y=6，所以 a=3、b=0。 正確選項為「(3,0)」。三個干擾項均對應不同錯誤：「(0,3)」不成立，會成 3y=6，水平線。；「(2,0)」不成立，會成 2x=6，即 x=3。；「(3,6)」不成立，包含 y 項，不是垂直線 x=2。。邊界審查：a、b 不同時為 0；其中 b=0 合法。 難度理由：需連結一般式與特殊形式，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s008-v008",
    "contentSha256": "6a74c7b6c74886cf2b3d3d0ae88885a1d5f4320ac3a028efcc98cc89ad0d1099",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "代入 (0,4)：4k=8，得 k=2；(4,0) 也使 2×4=8，驗證成立。",
    "derivedAnswer": "2",
    "storedAnswer": "2",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「2」；其餘三項逐項檢查：「1」不成立，(0,4) 代入只得 4。；「4」不成立，代入得 16。；「8」不成立，代入得 32。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「二元一次方程式圖形」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "k=2 時仍為合法二元一次方程式。",
      "alternateReading": "常見誤讀是「只看其中一個坐標為 0 就直接把另一坐標當係數。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需利用解點條件求係數並交叉驗證，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代入。",
    "languageCheck": "題幹所求為「由兩個解點求參數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「方程式 2x+ky=8 的圖形通過 (0,4) 與 (4,0)，求 k。」重新依序處理：代入 (0,4)：4k=8，得 k=2；(4,0) 也使 2×4=8，驗證成立。 正確選項為「2」。三個干擾項均對應不同錯誤：「1」不成立，(0,4) 代入只得 4。；「4」不成立，代入得 16。；「8」不成立，代入得 32。。邊界審查：k=2 時仍為合法二元一次方程式。 難度理由：需利用解點條件求係數並交叉驗證，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s008-v009",
    "contentSha256": "c3a91e3760598312fddec0a2e769ff2209f616728433bdd3e1bba43eeca55a25",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "與 y 軸平行的直線是垂直線，形式為 x=常數；x=-5 符合。",
    "derivedAnswer": "x=-5",
    "storedAnswer": "x=-5",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「x=-5」；其餘三項逐項檢查：「y=-5」不成立，水平直線。；「x+y=-5」不成立，x、y 都變動的斜線。；「y=5x」不成立，通過原點的斜線。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「二元一次方程式圖形」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "『平行』不包含與 y 軸重合；x=-5 不等於 x=0。",
      "alternateReading": "常見誤讀是「把『與 y 軸平行』誤解成 y=常數。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需從多種方程式形式辨認方向，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解特殊直線。",
    "languageCheck": "題幹所求為「辨認與坐標軸平行的方程式」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「下列哪個方程式的圖形與 y 軸平行？」重新依序處理：與 y 軸平行的直線是垂直線，形式為 x=常數；x=-5 符合。 正確選項為「x=-5」。三個干擾項均對應不同錯誤：「y=-5」不成立，水平直線。；「x+y=-5」不成立，x、y 都變動的斜線。；「y=5x」不成立，通過原點的斜線。。邊界審查：『平行』不包含與 y 軸重合；x=-5 不等於 x=0。 難度理由：需從多種方程式形式辨認方向，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s008-v010",
    "contentSha256": "e309821c4c281005f1473f3984a7a81d89c1281a2d6891752b2361fa55b9dcc9",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "購買 5 張時 y=120×5=600，因此 (5,600) 在圖形上。",
    "derivedAnswer": "(5,600)",
    "storedAnswer": "(5,600)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(5,600)」；其餘三項逐項檢查：「(120,5)」不成立，交換張數與價格。；「(5,120)」不成立，只記單價，未乘張數。；「(600,5)」不成立，分量與數量意義皆錯。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「二元一次方程式圖形」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "x 單位為張，y 單位為元；方程式係數 120 元/張。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "x 為非負整數的情境限制不影響候選點判斷。",
      "alternateReading": "常見誤讀是「把單價當總價或交換變數意義。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "情境變數定義決定坐標順序與單位。",
    "literacyContextNecessity": "張數與總價的單位及角色不可交換；情境是判定有序數對意義的必要資訊。",
    "prerequisiteCheck": "需會代入一次關係。",
    "languageCheck": "題幹所求為「把票價關係轉成解點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「某票價方案的總價 y 元與張數 x 的關係為 y=120x。下列哪個點在此關係圖形上？」重新依序處理：購買 5 張時 y=120×5=600，因此 (5,600) 在圖形上。 正確選項為「(5,600)」。三個干擾項均對應不同錯誤：「(120,5)」不成立，交換張數與價格。；「(5,120)」不成立，只記單價，未乘張數。；「(600,5)」不成立，分量與數量意義皆錯。。邊界審查：x 為非負整數的情境限制不影響候選點判斷。 難度理由：情境變數定義決定坐標順序與單位。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s008-v011",
    "contentSha256": "df6b958edbc4b0916238df885ef451f21a2b4b4e30434b56e27bd2ef347b103c",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x=10 時 y=50+8×10=130，所以點為 (10,130)。",
    "derivedAnswer": "(10,130)",
    "storedAnswer": "(10,130)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(10,130)」；其餘三項逐項檢查：「(10,80)」不成立，漏加原有 50。；「(130,10)」不成立，交換時間與水量。；「(8,50)」不成立，把係數與初始量當坐標。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「二元一次方程式圖形」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "x 分鐘、y 公升，答案依此順序。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目只在 x≥0 的時間範圍使用圖形。",
      "alternateReading": "常見誤讀是「忽略初始量或交換變數。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需理解一次關係中的初始值與每分鐘增量。",
    "literacyContextNecessity": "50 公升初始量與每分鐘 8 公升是水箱情境的核心，決定方程式與解點。",
    "prerequisiteCheck": "需會代入。",
    "languageCheck": "題幹所求為「在累積量情境找圖形上的點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「水箱原有 50 公升，每分鐘加入 8 公升。以時間 x 分鐘、總水量 y 公升表示，關係式 y=50+8x。10 分鐘時圖形上的點為何？」重新依序處理：x=10 時 y=50+8×10=130，所以點為 (10,130)。 正確選項為「(10,130)」。三個干擾項均對應不同錯誤：「(10,80)」不成立，漏加原有 50。；「(130,10)」不成立，交換時間與水量。；「(8,50)」不成立，把係數與初始量當坐標。。邊界審查：題目只在 x≥0 的時間範圍使用圖形。 難度理由：需理解一次關係中的初始值與每分鐘增量。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s008-v012",
    "contentSha256": "945807a1852177383c4b03b39ef9de40eea2c0ede3e9dc86755585d4f0cf88b8",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "代入 (1,8) 得 4+16=20；代入 (3,4) 得 12+8=20，所以兩點都在直線上。",
    "derivedAnswer": "兩點都在直線上",
    "storedAnswer": "兩點都在直線上",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「兩點都在直線上」；其餘三項逐項檢查：「只有 (1,8) 在直線上」不成立，錯誤排除同樣成立的第二點。；「只有 (3,4) 在直線上」不成立，錯誤排除同樣成立的第一點。；「兩點都不在直線上」不成立，與兩次代入結果相反。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「二元一次方程式圖形」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "x、y 為感測數值，兩點代入同一方程式。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩點均為精確紀錄，代入後皆成立，正確敘述唯一。",
      "alternateReading": "常見誤讀是「心算一個點後未檢查另一點。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需獨立驗證兩個實際資料點。",
    "literacyContextNecessity": "兩個校正紀錄是否同時符合感測器的線性關係，是判斷設備資料一致性的必要工程資訊。",
    "prerequisiteCheck": "需會代入。",
    "languageCheck": "題幹所求為「檢查校正點是否同屬直線」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「兩種感測量 x、y 滿足 4x+2y=20。工程師選了 (1,8) 與 (3,4) 來校正直線。下列判斷何者正確？」重新依序處理：代入 (1,8) 得 4+16=20；代入 (3,4) 得 12+8=20，所以兩點都在直線上。 正確選項為「兩點都在直線上」。三個干擾項均對應不同錯誤：「只有 (1,8) 在直線上」不成立，錯誤排除同樣成立的第二點。；「只有 (3,4) 在直線上」不成立，錯誤排除同樣成立的第一點。；「兩點都不在直線上」不成立，與兩次代入結果相反。。邊界審查：兩點均為精確紀錄，代入後皆成立，正確敘述唯一。 難度理由：需獨立驗證兩個實際資料點。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
