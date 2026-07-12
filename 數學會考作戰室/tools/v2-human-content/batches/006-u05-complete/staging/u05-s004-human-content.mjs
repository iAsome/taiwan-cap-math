// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s004-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-coordinate-basics",
  "skillId": "coordinate-plot-description",
  "lockedTitle": "描點與位置描述",
  "title": "描點與位置描述：把路線翻成坐標",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能依文字指令從原點描出一個點。",
    "能由起點與移動步數寫出終點坐標。",
    "能由兩個點描述水平與垂直方向差。",
    "能區分絕對位置與相對移動。"
  ],
  "prerequisites": [
    {
      "skillId": "coordinate-axis-points",
      "requiredLevel": "能說明並正確使用「坐標軸上的點」的核心規則，且不混淆坐標分量順序。"
    }
  ],
  "glossary": [
    {
      "term": "描點",
      "definition": "依坐標在平面上標出點的位置。"
    },
    {
      "term": "絕對位置",
      "definition": "相對原點所表示的坐標。"
    },
    {
      "term": "相對移動",
      "definition": "相對目前位置的方向與步數。"
    },
    {
      "term": "單位格",
      "definition": "相鄰刻度之間代表的一個固定長度。"
    },
    {
      "term": "路線",
      "definition": "依序執行的多段水平或垂直移動。"
    }
  ],
  "notation": [
    {
      "symbol": "(x,y)",
      "meaning": "由原點描述的絕對位置。"
    },
    {
      "symbol": "Δx",
      "meaning": "水平方向的改變量。"
    },
    {
      "symbol": "Δy",
      "meaning": "垂直方向的改變量。"
    }
  ],
  "conceptNarrative": [
    "描點時先處理 x，再處理 y；但路線題必須照題目給的時間順序執行每一步。",
    "由原點出發時，向右、向上分別增加 x、y；向左、向下分別減少 x、y。",
    "若起點不是原點，坐標表示目前位置，移動量必須加到目前坐標上。",
    "只說『走 3 格』而沒有方向，不能唯一決定終點。"
  ],
  "formalDefinitions": [
    {
      "name": "描點程序",
      "statement": "從原點沿 x 軸方向移到指定橫坐標，再平行 y 軸移到指定縱坐標。"
    },
    {
      "name": "相對位移",
      "statement": "終點坐標 = 起點坐標 + 各方向帶符號的總移動量。"
    }
  ],
  "formulas": [
    {
      "formula": "終點=(x0+Δx,y0+Δy)",
      "conditions": [
        "每段移動均平行坐標軸",
        "右與上取正、左與下取負"
      ],
      "meaning": "把路線的水平、垂直改變分別累加。"
    }
  ],
  "nonApplicableCases": [
    "斜向移動若未拆成水平與垂直分量，不能直接套用。",
    "沒有方向的步數不足以決定終點。",
    "相對移動不能取代點的絕對坐標。",
    "不同單位格不可直接相加。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "寫出起點。",
      "check": "是原點還是指定點？"
    },
    {
      "step": 2,
      "instruction": "把每段方向改成正負改變量。",
      "check": "右/上為正，左/下為負嗎？"
    },
    {
      "step": 3,
      "instruction": "水平方向合併。",
      "check": "只改 x，沒有誤改 y？"
    },
    {
      "step": 4,
      "instruction": "垂直方向合併。",
      "check": "只改 y，沒有誤改 x？"
    },
    {
      "step": 5,
      "instruction": "用反向路線驗算。",
      "check": "從終點倒走能回起點嗎？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "從原點向右 5、向下 2，終點在哪？",
      "solutionSteps": [
        "x=0+5。",
        "y=0-2。"
      ],
      "answer": "(5,-2)。"
    },
    {
      "exampleId": "L2",
      "prompt": "由 A=(-3,4) 向左 2、向上 1。",
      "solutionSteps": [
        "x=-3-2=-5。",
        "y=4+1=5。"
      ],
      "answer": "(-5,5)。"
    },
    {
      "exampleId": "L3",
      "prompt": "從 B=(6,-1) 到 C=(2,-1) 如何描述？",
      "solutionSteps": [
        "y 不變。",
        "x 由 6 變 2，減少 4。"
      ],
      "answer": "向左 4 單位。"
    },
    {
      "exampleId": "L4",
      "prompt": "一條路線右 7、上 3、左 2、下 5，從原點出發。",
      "solutionSteps": [
        "水平淨移動 7-2=5。",
        "垂直淨移動 3-5=-2。"
      ],
      "answer": "(5,-2)。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "每一步都從原點重新開始。",
      "why": "混淆絕對位置與連續路線。",
      "correction": "除非題目重設起點，下一步從目前位置繼續。"
    },
    {
      "mistake": "向左卻把 x 加上正數。",
      "why": "沒有把方向轉成帶符號改變量。",
      "correction": "左為負、右為正。"
    },
    {
      "mistake": "向下改變 x。",
      "why": "混淆水平與垂直分量。",
      "correction": "左右只改 x，上下只改 y。"
    },
    {
      "mistake": "把路線次序完全忽略在有中途條件的題目。",
      "why": "只看淨位移而漏掉經過點限制。",
      "correction": "若問經過位置，必須逐步追蹤。"
    },
    {
      "mistake": "坐標寫成 y 在前。",
      "why": "忘記有序數對順序。",
      "correction": "終點仍寫成 (x,y)。"
    }
  ],
  "selfCheck": [
    "我是否先寫清楚起點？",
    "每段移動是否只改一個分量？",
    "方向是否轉成正負號？",
    "最後是否仍以 (x,y) 表示？"
  ],
  "summary": [
    "描點由原點先 x 後 y。",
    "路線題從目前位置依序移動。",
    "左右改 x，上下改 y。",
    "終點等於起點加上帶符號位移。"
  ],
  "connections": {
    "previous": "承接軸上點與坐標讀法，已能把方向翻成正負數。",
    "next": [
      "下一節正式整理點的平移規則。",
      "後續距離題會比較起點與終點坐標差。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s004-v001",
      "u05-s004-v002",
      "u05-s004-v003",
      "u05-s004-v004",
      "u05-s004-v005",
      "u05-s004-v006",
      "u05-s004-v007",
      "u05-s004-v008",
      "u05-s004-v009",
      "u05-s004-v010",
      "u05-s004-v011",
      "u05-s004-v012"
    ],
    "constructedResponseIds": [
      "u05-s004-cr001",
      "u05-s004-cr002"
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
    "reviewNote": "人工重走四條路線，分別核對原點起步、非原點起步、反向描述與多段淨位移；特別檢查左下方向的負號及坐標順序，未使用尚未教授的向量記號。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "cb862976d4013d271dea6e95a43c9bc2a89608b0e6dc19c6e5ccdc3435717424"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s004-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "從原點向右 3 單位、向上 4 單位，終點坐標為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由原點描出終點",
    "choices": [
      "(-3,4)",
      "(4,3)",
      "(3,-4)",
      "(3,4)"
    ],
    "answerIndex": 3,
    "independentSolution": "向右使 x=3，向上使 y=4，所以終點為 (3,4)。",
    "explanation": "向右使 x=3，向上使 y=4，所以終點為 (3,4)。",
    "steps": [
      "由水平移動得 x=3。",
      "由垂直移動得 y=4。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-3,4)",
        "truth": false,
        "reason": "把向右寫成負 x。"
      },
      {
        "choice": "(4,3)",
        "truth": false,
        "reason": "交換 x、y。"
      },
      {
        "choice": "(3,-4)",
        "truth": false,
        "reason": "把向上寫成負 y。"
      },
      {
        "choice": "(3,4)",
        "truth": true,
        "reason": "方向與順序皆正確。"
      }
    ],
    "misconceptionTarget": "方向符號或坐標順序錯誤。",
    "prerequisiteCheck": "需會坐標讀寫。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩段移動均平行坐標軸，終點唯一。",
    "difficultyReason": "單一水平與垂直移動，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "由原點描出終點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "39001efab7a28bcad312b23f7948177c2bf2753b4b92fa21d43b7adf87250bbd"
  },
  {
    "questionId": "u05-s004-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "從 A=(-2,5) 向下 7 單位後到哪一點？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "從非原點進行垂直移動",
    "choices": [
      "(5,-9)",
      "(-9,5)",
      "(-2,-2)",
      "(-2,12)"
    ],
    "answerIndex": 2,
    "independentSolution": "向下只改變 y：5-7=-2；x 保持 -2。",
    "explanation": "向下只改變 y：5-7=-2；x 保持 -2。",
    "steps": [
      "保留 x=-2。",
      "計算 y=5-7=-2。"
    ],
    "optionAnalysis": [
      {
        "choice": "(5,-9)",
        "truth": false,
        "reason": "誤將 x、y 混合運算。"
      },
      {
        "choice": "(-9,5)",
        "truth": false,
        "reason": "錯把向下改成 x-7。"
      },
      {
        "choice": "(-2,-2)",
        "truth": true,
        "reason": "只有 y 減少 7。"
      },
      {
        "choice": "(-2,12)",
        "truth": false,
        "reason": "把向下當成加 7。"
      }
    ],
    "misconceptionTarget": "上下移動卻改變橫坐標。",
    "prerequisiteCheck": "需能辨認上下只改 y。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "起點明確且沒有重設原點。",
    "difficultyReason": "只需更新一個分量，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "從非原點進行垂直移動",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7e79edbcd16527b899052e689f39426288d74652a4351e34023b0ce84b317098"
  },
  {
    "questionId": "u05-s004-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 B=(6,-1) 要移到 C=(2,-1)，應如何移動？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由起終點描述移動",
    "choices": [
      "向右 4 單位",
      "向左 4 單位",
      "向下 4 單位",
      "向左 8 單位"
    ],
    "answerIndex": 1,
    "independentSolution": "兩點 y 相同；x 由 6 變 2，減少 4，因此向左 4 單位。",
    "explanation": "兩點 y 相同；x 由 6 變 2，減少 4，因此向左 4 單位。",
    "steps": [
      "比較 y：不變。",
      "比較 x：2-6=-4。"
    ],
    "optionAnalysis": [
      {
        "choice": "向右 4 單位",
        "truth": false,
        "reason": "方向相反。"
      },
      {
        "choice": "向左 4 單位",
        "truth": true,
        "reason": "x 減少 4。"
      },
      {
        "choice": "向下 4 單位",
        "truth": false,
        "reason": "誤改 y。"
      },
      {
        "choice": "向左 8 單位",
        "truth": false,
        "reason": "把兩個 x 的絕對值相加。"
      }
    ],
    "misconceptionTarget": "知道距離但方向或分量判斷錯。",
    "prerequisiteCheck": "需會比較整數大小。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩點同 y，移動可唯一描述為水平左移 4。",
    "difficultyReason": "需要比較兩點坐標而非直接讀一點，仍屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "由起終點描述移動",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e2c01eb6f97664d437fb5748718c65ba8a53621603b46ae40b862cf9ed3e90b3"
  },
  {
    "questionId": "u05-s004-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "從 P=(1,-3) 先向右 5，再向上 2，終點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "連續兩步描點",
    "choices": [
      "(6,-1)",
      "(4,-8)",
      "(6,-5)",
      "(-4,-1)"
    ],
    "answerIndex": 0,
    "independentSolution": "先右移使 x=1+5=6；再上移使 y=-3+2=-1，所以為 (6,-1)。",
    "explanation": "先右移使 x=1+5=6；再上移使 y=-3+2=-1，所以為 (6,-1)。",
    "steps": [
      "水平更新 x=6。",
      "垂直更新 y=-1。"
    ],
    "optionAnalysis": [
      {
        "choice": "(6,-1)",
        "truth": true,
        "reason": "兩步分別作用在正確分量。"
      },
      {
        "choice": "(4,-8)",
        "truth": false,
        "reason": "把正向移動做成減法。"
      },
      {
        "choice": "(6,-5)",
        "truth": false,
        "reason": "向上卻令 y 減少。"
      },
      {
        "choice": "(-4,-1)",
        "truth": false,
        "reason": "向右卻令 x 減少。"
      }
    ],
    "misconceptionTarget": "負數起點使學生誤以為上移仍更負。",
    "prerequisiteCheck": "需能做整數加法與坐標平移。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "路線無中途限制，分步或合併皆得同一終點。",
    "difficultyReason": "需依序處理兩個分量，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "連續兩步描點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c5b61bb55a227f858db99789761225c4aea534d0489da3eab33efc47c6540c7d"
  },
  {
    "questionId": "u05-s004-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "一條路線由原點出發：右 8、上 3、左 5、下 7。終點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "合併多段路線的淨位移",
    "choices": [
      "(13,10)",
      "(-3,4)",
      "(3,4)",
      "(3,-4)"
    ],
    "answerIndex": 3,
    "independentSolution": "水平淨移動 8-5=3；垂直淨移動 3-7=-4，所以終點 (3,-4)。",
    "explanation": "水平淨移動 8-5=3；垂直淨移動 3-7=-4，所以終點 (3,-4)。",
    "steps": [
      "合併水平：3。",
      "合併垂直：-4。"
    ],
    "optionAnalysis": [
      {
        "choice": "(13,10)",
        "truth": false,
        "reason": "把所有步數相加且忽略方向。"
      },
      {
        "choice": "(-3,4)",
        "truth": false,
        "reason": "兩個淨方向都反。"
      },
      {
        "choice": "(3,4)",
        "truth": false,
        "reason": "下移較多卻寫正 y。"
      },
      {
        "choice": "(3,-4)",
        "truth": true,
        "reason": "水平與垂直淨移動正確。"
      }
    ],
    "misconceptionTarget": "只加步數不處理相反方向。",
    "prerequisiteCheck": "需會同類方向相減。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目只問終點，因此可使用淨位移，不必保留中途點。",
    "difficultyReason": "需分類並合併四段路線，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "合併多段路線的淨位移",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6947d8ad0900ea2597825d069ccaa3ef76d65343817635449e4e13e135b24689"
  },
  {
    "questionId": "u05-s004-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "從 A=(-4,2) 出發，先到 B=(-4,-3)，再到 C=(5,-3)。下列路線描述何者正確？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由三個點還原分段路線",
    "choices": [
      "先向上 5，再向右 9",
      "先向下 1，再向右 9",
      "先向下 5，再向右 9",
      "先向下 5，再向左 9"
    ],
    "answerIndex": 2,
    "independentSolution": "A 到 B 同 x，y 由 2 變 -3，向下 5；B 到 C 同 y，x 由 -4 變 5，向右 9。",
    "explanation": "A 到 B 同 x，y 由 2 變 -3，向下 5；B 到 C 同 y，x 由 -4 變 5，向右 9。",
    "steps": [
      "比較 A、B 的 y 差。",
      "比較 B、C 的 x 差。"
    ],
    "optionAnalysis": [
      {
        "choice": "先向上 5，再向右 9",
        "truth": false,
        "reason": "第一段方向反。"
      },
      {
        "choice": "先向下 1，再向右 9",
        "truth": false,
        "reason": "第一段錯把坐標相加。"
      },
      {
        "choice": "先向下 5，再向右 9",
        "truth": true,
        "reason": "兩段方向與距離都正確。"
      },
      {
        "choice": "先向下 5，再向左 9",
        "truth": false,
        "reason": "第二段方向反。"
      }
    ],
    "misconceptionTarget": "跨越 0 時把距離算成絕對值之差。",
    "prerequisiteCheck": "需會水平與垂直坐標差。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "路線順序由 A→B→C 明定，不能交換。",
    "difficultyReason": "需分段比較並正確計算跨越原點的距離。",
    "literacyContextNecessity": null,
    "authoringIntent": "由三個點還原分段路線",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "468926e932fae1d1c4455d029de61eb01b54045f0716e00ca53d9496f9f1206d"
  },
  {
    "questionId": "u05-s004-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "某點從 (a,3) 向左 4 單位後到 (-1,3)，則 a 等於多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由終點反推起點分量",
    "choices": [
      "-5",
      "3",
      "-3",
      "5"
    ],
    "answerIndex": 1,
    "independentSolution": "向左 4 後橫坐標為 a-4=-1，所以 a=3。",
    "explanation": "向左 4 後橫坐標為 a-4=-1，所以 a=3。",
    "steps": [
      "列 a-4=-1。",
      "兩邊加 4 得 a=3。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5",
        "truth": false,
        "reason": "-5-4=-9。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "3-4=-1。"
      },
      {
        "choice": "-3",
        "truth": false,
        "reason": "-3-4=-7。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "5-4=1。"
      }
    ],
    "misconceptionTarget": "把反推原點仍做同方向減法。",
    "prerequisiteCheck": "需會由平移式反解。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "y 坐標全程不變，a 唯一。",
    "difficultyReason": "需建立一元一次方程式反推，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由終點反推起點分量",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "27ed10f550c682f93ad20ae1fa74c2eb6495472fdbd6c1ed333dddca901a4750"
  },
  {
    "questionId": "u05-s004-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "從 Q=(2,b) 向上 6，再向下 10，終點縱坐標為 -1。求 b。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由多步終點反推起點",
    "choices": [
      "3",
      "-5",
      "5",
      "15"
    ],
    "answerIndex": 0,
    "independentSolution": "縱坐標淨改變為 +6-10=-4，所以 b-4=-1，得 b=3。",
    "explanation": "縱坐標淨改變為 +6-10=-4，所以 b-4=-1，得 b=3。",
    "steps": [
      "合併垂直淨位移 -4。",
      "解 b-4=-1。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": true,
        "reason": "3+6-10=-1。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "代入後為 -9。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "代入後為 1。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "代入後為 11。"
      }
    ],
    "misconceptionTarget": "沒有先合併相反方向，或反解符號錯。",
    "prerequisiteCheck": "需會整數運算與方程式。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "只涉及 y 分量，x=2 不影響答案。",
    "difficultyReason": "需合併位移並反解未知數，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由多步終點反推起點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b744ac28f57828ddd7be911e974e6b5ed1d8084cf16f14d7b13cb776857141aa"
  },
  {
    "questionId": "u05-s004-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "從原點依序右 2、上 2、左 2、下 2，途中總共經過幾個不同的頂點位置（含起點與最後回到起點，但重複位置只算一次）？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "追蹤路線中的不同位置",
    "choices": [
      "3 個",
      "5 個",
      "8 個",
      "4 個"
    ],
    "answerIndex": 3,
    "independentSolution": "位置依序為 (0,0)、(2,0)、(2,2)、(0,2)、(0,0)。最後回到起點重複，因此不同位置共 4 個。",
    "explanation": "位置依序為 (0,0)、(2,0)、(2,2)、(0,2)、(0,0)。最後回到起點重複，因此不同位置共 4 個。",
    "steps": [
      "逐步列出五次紀錄。",
      "合併重複的原點。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 個",
        "truth": false,
        "reason": "漏算一個轉折點。"
      },
      {
        "choice": "5 個",
        "truth": false,
        "reason": "把最後重回原點重複計數。"
      },
      {
        "choice": "8 個",
        "truth": false,
        "reason": "把每單位途中格點誤當題目所稱頂點位置。"
      },
      {
        "choice": "4 個",
        "truth": true,
        "reason": "正方形四個頂點各一次。"
      }
    ],
    "misconceptionTarget": "只看步數或未處理重複位置。",
    "prerequisiteCheck": "需能依序描點並辨認重複。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目明確只計每段結束的頂點位置，不計線段中間格點。",
    "difficultyReason": "需逐步追蹤並處理集合去重，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "追蹤路線中的不同位置",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "855b0cdf4a031cb834cf412999b4060f93058e420e5514c77924728d67f78a21"
  },
  {
    "questionId": "u05-s004-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "校園尋寶從司令台 (1,1) 出發，提示為「向西 4 格，再向南 3 格」。寶箱坐標為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "在尋寶情境執行路線",
    "choices": [
      "(5,-2)",
      "(-2,-3)",
      "(-3,-2)",
      "(-3,4)"
    ],
    "answerIndex": 2,
    "independentSolution": "西使 x 減 4：1-4=-3；南使 y 減 3：1-3=-2。",
    "explanation": "西使 x 減 4：1-4=-3；南使 y 減 3：1-3=-2。",
    "steps": [
      "把西轉成 x-4。",
      "把南轉成 y-3。"
    ],
    "optionAnalysis": [
      {
        "choice": "(5,-2)",
        "truth": false,
        "reason": "把西當東。"
      },
      {
        "choice": "(-2,-3)",
        "truth": false,
        "reason": "交換步數。"
      },
      {
        "choice": "(-3,-2)",
        "truth": true,
        "reason": "兩個方向與起點都正確。"
      },
      {
        "choice": "(-3,4)",
        "truth": false,
        "reason": "把南當北。"
      }
    ],
    "misconceptionTarget": "忽略起點不是原點，或把方位正負弄反。",
    "prerequisiteCheck": "需會從非原點平移。",
    "estimatedTimeSec": 150,
    "unitCheck": "坐標單位為格，答案保留格線坐標。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "預設東、北為正向已由一般坐標地圖語境配合題意；路線無其他障礙。",
    "difficultyReason": "起點與兩段方位都是必要資訊，需轉換後計算。",
    "literacyContextNecessity": "寶箱位置取決於司令台起點與西南兩段提示；情境資訊直接形成坐標運算。",
    "authoringIntent": "在尋寶情境執行路線",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "885b97882574e904713b1be6d05162f228010a4045c03ef3874871b617fbae02"
  },
  {
    "questionId": "u05-s004-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "棋盤機器人起點為 (-2,4)。指令 R3 表示向右 3 格，D5 表示向下 5 格。執行 R3、D5 後的位置為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "解讀機器人指令並描點",
    "choices": [
      "(-5,-1)",
      "(1,-1)",
      "(1,9)",
      "(3,-5)"
    ],
    "answerIndex": 1,
    "independentSolution": "R3 使 x=-2+3=1；D5 使 y=4-5=-1，所以為 (1,-1)。",
    "explanation": "R3 使 x=-2+3=1；D5 使 y=4-5=-1，所以為 (1,-1)。",
    "steps": [
      "解碼 R3 更新 x。",
      "解碼 D5 更新 y。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-5,-1)",
        "truth": false,
        "reason": "R3 誤做左移。"
      },
      {
        "choice": "(1,-1)",
        "truth": true,
        "reason": "兩個指令均正確執行。"
      },
      {
        "choice": "(1,9)",
        "truth": false,
        "reason": "D5 誤做上移。"
      },
      {
        "choice": "(3,-5)",
        "truth": false,
        "reason": "直接把指令數字當坐標。"
      }
    ],
    "misconceptionTarget": "將控制碼數字取代坐標，而不是從起點累加。",
    "prerequisiteCheck": "需會平移。",
    "estimatedTimeSec": 150,
    "unitCheck": "每指令單位均為棋盤格。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "R、D 的定義已明示，執行順序不影響本題終點但仍逐步記錄。",
    "difficultyReason": "需先解碼再運算，情境不可刪除。",
    "literacyContextNecessity": "R3、D5 是情境特定語法；必須理解控制碼才可轉成坐標改變。",
    "authoringIntent": "解讀機器人指令並描點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "fd7871c39c2234c1dc3eea68cf1d4e8d42f1be9fa412a5e5538549055cd9091a"
  },
  {
    "questionId": "u05-s004-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "配送員從站點 A=(4,-2) 前往 B=(4,5)，再前往 C=(-1,5)。哪段敘述可完整描述路線？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "依站點順序描述配送路線",
    "choices": [
      "先向北 7 格，再向西 5 格",
      "先向南 7 格，再向西 5 格",
      "先向北 3 格，再向東 5 格",
      "先向西 5 格，再向北 7 格"
    ],
    "answerIndex": 0,
    "independentSolution": "A 到 B 同 x，y 增加 7，向北；B 到 C 同 y，x 減少 5，向西。",
    "explanation": "A 到 B 同 x，y 增加 7，向北；B 到 C 同 y，x 減少 5，向西。",
    "steps": [
      "A→B：5-(-2)=7，北移。",
      "B→C：-1-4=-5，西移 5。"
    ],
    "optionAnalysis": [
      {
        "choice": "先向北 7 格，再向西 5 格",
        "truth": true,
        "reason": "順序、方向與距離皆正確。"
      },
      {
        "choice": "先向南 7 格，再向西 5 格",
        "truth": false,
        "reason": "第一段方向反。"
      },
      {
        "choice": "先向北 3 格，再向東 5 格",
        "truth": false,
        "reason": "兩段距離或方向錯。"
      },
      {
        "choice": "先向西 5 格，再向北 7 格",
        "truth": false,
        "reason": "淨終點相同但不符合指定經過 B 的順序。"
      }
    ],
    "misconceptionTarget": "只看總位移，忽略必須先經過 B 的路線順序。",
    "prerequisiteCheck": "需會分段比較坐標。",
    "estimatedTimeSec": 150,
    "unitCheck": "所有距離以格表示，兩段分開計算。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目要求完整描述 A→B→C，交換兩段雖終點相同但不符合路線。",
    "difficultyReason": "中途站點使順序成為必要條件，不能只算淨位移。",
    "literacyContextNecessity": "配送必須依序經過 B；中途站點使路線次序成為數學條件，而非裝飾。",
    "authoringIntent": "依站點順序描述配送路線",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4835cff7920f6a405f4b4fbf81d47c5f130210aee88d300dbe304384219c3053"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s004-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "從 A=(-3,2) 出發，依序向右 8、向下 5、向左 2。寫出每一步後的位置與最後終點。",
    "requiredWork": [
      "保留每一步的中間坐標。",
      "最後寫出終點。"
    ],
    "fullCreditSolution": [
      "右 8 後：(-3+8,2)=(5,2)。",
      "下 5 後：(5,2-5)=(5,-3)。",
      "左 2 後：(5-2,-3)=(3,-3)。",
      "終點為 (3,-3)。"
    ],
    "alternativeSolutions": [
      "也可列坐標表，逐列更新 x 或 y。"
    ],
    "reasoningSteps": [
      "右 8 後：(-3+8,2)=(5,2)。",
      "下 5 後：(5,2-5)=(5,-3)。",
      "左 2 後：(5-2,-3)=(3,-3)。",
      "終點為 (3,-3)。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三個中間或終點坐標全正確，且顯示每步只改一個分量。"
      },
      {
        "score": 2,
        "criteria": "終點正確但漏一個中間位置，或只有一個單步算術錯。"
      },
      {
        "score": 1,
        "criteria": "方向規則大致正確，但至少兩步運算錯或只寫部分路線。"
      },
      {
        "score": 0,
        "criteria": "每一步都從原點重算，無法反映連續移動。"
      }
    ],
    "partialCreditRules": [
      "題目要求每一步，僅給淨位移不足滿分。"
    ],
    "followThroughPolicy": "若某一步坐標算錯，後續都從該錯誤點依正確方向與步數移動，後續方法可按結果追隨給分；原錯誤步驟不給分。",
    "unitAndNotationRules": "每一步均以有序對表示，依序寫出三個中間或終點坐標；移動量以格或單位計。",
    "answerOnlyPolicy": "只寫最後終點 (3,-3) 而沒有每一步位置，最高給 2 分。",
    "commonErrors": [
      "向下改 x。",
      "第三步又從 A 開始。"
    ],
    "independentReview": {
      "derivedResult": "若早期算術錯但後續都從自己的錯誤中間點正確平移，採結果追隨，可保留後續方法分。",
      "ambiguity": "位置均寫成 (x,y)；步數單位可省略於坐標內。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若早期算術錯但後續都從自己的錯誤中間點正確平移，採結果追隨，可保留後續方法分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8ebc756ad61db4bc311d4cec39a346523da994a303c7b5a8201324a3642431ee"
  },
  {
    "questionId": "u05-s004-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某路線從 P=(a,b) 出發，向右 4、向上 7 後到 Q=(1,2)。求 P，並用反向路線驗算。",
    "requiredWork": [
      "逆向求原坐標。",
      "寫出驗算。"
    ],
    "fullCreditSolution": [
      "由終點反推，原橫坐標 a=1-4=-3。",
      "原縱坐標 b=2-7=-5。",
      "所以 P=(-3,-5)。",
      "驗算：(-3,-5) 向右 4 到 (1,-5)，再向上 7 到 (1,2)，正好是 Q。"
    ],
    "alternativeSolutions": [
      "可列 a+4=1、b+7=2，解出 a、b。"
    ],
    "reasoningSteps": [
      "由終點反推，原橫坐標 a=1-4=-3。",
      "原縱坐標 b=2-7=-5。",
      "所以 P=(-3,-5)。",
      "驗算：(-3,-5) 向右 4 到 (1,-5)，再向上 7 到 (1,2)，正好是 Q。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "求得 P=(-3,-5)，並完整回做兩步驗算。"
      },
      {
        "score": 2,
        "criteria": "P 正確但未驗算，或驗算有一個抄寫錯。"
      },
      {
        "score": 1,
        "criteria": "能列出 a+4=1、b+7=2，但解算錯一項。"
      },
      {
        "score": 0,
        "criteria": "把 Q 再向右、向上得到 (5,9) 當原點。"
      }
    ],
    "partialCreditRules": [
      "方程式法與逆向移動法等價。"
    ],
    "followThroughPolicy": "若反推起點時一個分量算錯，但能用所得起點正確執行向右 4、向上 7 的驗算，可給驗算方法分。",
    "unitAndNotationRules": "起點寫成 P=(-3,-5)，終點寫成 Q=(1,2)；反向移動需明確寫左 4、下 7。",
    "answerOnlyPolicy": "只寫 P=(-3,-5) 而沒有反向推導或驗算，最高給 2 分。",
    "commonErrors": [
      "反推仍做同方向。",
      "把 a、b 對調。"
    ],
    "independentReview": {
      "derivedResult": "若 a 算錯但 b 與相應驗算正確，可給該分量方法分。",
      "ambiguity": "答案為點坐標；驗算須從 P 回到 Q。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若 a 算錯但 b 與相應驗算正確，可給該分量方法分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "1ca5388c2a10b7f472f44ef25bfb71530c0e8555010c4b6be915d0eac7a23b72"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s004-v001",
    "contentSha256": "39001efab7a28bcad312b23f7948177c2bf2753b4b92fa21d43b7adf87250bbd",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "向右使 x=3，向上使 y=4，所以終點為 (3,4)。",
    "derivedAnswer": "(3,4)",
    "storedAnswer": "(3,4)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(3,4)」；其餘三項逐項檢查：「(-3,4)」不成立，把向右寫成負 x。；「(4,3)」不成立，交換 x、y。；「(3,-4)」不成立，把向上寫成負 y。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩段移動均平行坐標軸，終點唯一。",
      "alternateReading": "常見誤讀是「方向符號或坐標順序錯誤。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "單一水平與垂直移動，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會坐標讀寫。",
    "languageCheck": "題幹所求為「由原點描出終點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「從原點向右 3 單位、向上 4 單位，終點坐標為何？」重新依序處理：向右使 x=3，向上使 y=4，所以終點為 (3,4)。 正確選項為「(3,4)」。三個干擾項均對應不同錯誤：「(-3,4)」不成立，把向右寫成負 x。；「(4,3)」不成立，交換 x、y。；「(3,-4)」不成立，把向上寫成負 y。。邊界審查：兩段移動均平行坐標軸，終點唯一。 難度理由：單一水平與垂直移動，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v002",
    "contentSha256": "7e79edbcd16527b899052e689f39426288d74652a4351e34023b0ce84b317098",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "向下只改變 y：5-7=-2；x 保持 -2。",
    "derivedAnswer": "(-2,-2)",
    "storedAnswer": "(-2,-2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(-2,-2)」；其餘三項逐項檢查：「(5,-9)」不成立，誤將 x、y 混合運算。；「(-9,5)」不成立，錯把向下改成 x-7。；「(-2,12)」不成立，把向下當成加 7。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "起點明確且沒有重設原點。",
      "alternateReading": "常見誤讀是「上下移動卻改變橫坐標。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "只需更新一個分量，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能辨認上下只改 y。",
    "languageCheck": "題幹所求為「從非原點進行垂直移動」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「從 A=(-2,5) 向下 7 單位後到哪一點？」重新依序處理：向下只改變 y：5-7=-2；x 保持 -2。 正確選項為「(-2,-2)」。三個干擾項均對應不同錯誤：「(5,-9)」不成立，誤將 x、y 混合運算。；「(-9,5)」不成立，錯把向下改成 x-7。；「(-2,12)」不成立，把向下當成加 7。。邊界審查：起點明確且沒有重設原點。 難度理由：只需更新一個分量，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v003",
    "contentSha256": "e2c01eb6f97664d437fb5748718c65ba8a53621603b46ae40b862cf9ed3e90b3",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "兩點 y 相同；x 由 6 變 2，減少 4，因此向左 4 單位。",
    "derivedAnswer": "向左 4 單位",
    "storedAnswer": "向左 4 單位",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「向左 4 單位」；其餘三項逐項檢查：「向右 4 單位」不成立，方向相反。；「向下 4 單位」不成立，誤改 y。；「向左 8 單位」不成立，把兩個 x 的絕對值相加。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩點同 y，移動可唯一描述為水平左移 4。",
      "alternateReading": "常見誤讀是「知道距離但方向或分量判斷錯。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需要比較兩點坐標而非直接讀一點，仍屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會比較整數大小。",
    "languageCheck": "題幹所求為「由起終點描述移動」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 B=(6,-1) 要移到 C=(2,-1)，應如何移動？」重新依序處理：兩點 y 相同；x 由 6 變 2，減少 4，因此向左 4 單位。 正確選項為「向左 4 單位」。三個干擾項均對應不同錯誤：「向右 4 單位」不成立，方向相反。；「向下 4 單位」不成立，誤改 y。；「向左 8 單位」不成立，把兩個 x 的絕對值相加。。邊界審查：兩點同 y，移動可唯一描述為水平左移 4。 難度理由：需要比較兩點坐標而非直接讀一點，仍屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v004",
    "contentSha256": "c5b61bb55a227f858db99789761225c4aea534d0489da3eab33efc47c6540c7d",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "先右移使 x=1+5=6；再上移使 y=-3+2=-1，所以為 (6,-1)。",
    "derivedAnswer": "(6,-1)",
    "storedAnswer": "(6,-1)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(6,-1)」；其餘三項逐項檢查：「(4,-8)」不成立，把正向移動做成減法。；「(6,-5)」不成立，向上卻令 y 減少。；「(-4,-1)」不成立，向右卻令 x 減少。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "路線無中途限制，分步或合併皆得同一終點。",
      "alternateReading": "常見誤讀是「負數起點使學生誤以為上移仍更負。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需依序處理兩個分量，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能做整數加法與坐標平移。",
    "languageCheck": "題幹所求為「連續兩步描點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「從 P=(1,-3) 先向右 5，再向上 2，終點為何？」重新依序處理：先右移使 x=1+5=6；再上移使 y=-3+2=-1，所以為 (6,-1)。 正確選項為「(6,-1)」。三個干擾項均對應不同錯誤：「(4,-8)」不成立，把正向移動做成減法。；「(6,-5)」不成立，向上卻令 y 減少。；「(-4,-1)」不成立，向右卻令 x 減少。。邊界審查：路線無中途限制，分步或合併皆得同一終點。 難度理由：需依序處理兩個分量，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v005",
    "contentSha256": "6947d8ad0900ea2597825d069ccaa3ef76d65343817635449e4e13e135b24689",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "水平淨移動 8-5=3；垂直淨移動 3-7=-4，所以終點 (3,-4)。",
    "derivedAnswer": "(3,-4)",
    "storedAnswer": "(3,-4)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(3,-4)」；其餘三項逐項檢查：「(13,10)」不成立，把所有步數相加且忽略方向。；「(-3,4)」不成立，兩個淨方向都反。；「(3,4)」不成立，下移較多卻寫正 y。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目只問終點，因此可使用淨位移，不必保留中途點。",
      "alternateReading": "常見誤讀是「只加步數不處理相反方向。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需分類並合併四段路線，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會同類方向相減。",
    "languageCheck": "題幹所求為「合併多段路線的淨位移」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「一條路線由原點出發：右 8、上 3、左 5、下 7。終點為何？」重新依序處理：水平淨移動 8-5=3；垂直淨移動 3-7=-4，所以終點 (3,-4)。 正確選項為「(3,-4)」。三個干擾項均對應不同錯誤：「(13,10)」不成立，把所有步數相加且忽略方向。；「(-3,4)」不成立，兩個淨方向都反。；「(3,4)」不成立，下移較多卻寫正 y。。邊界審查：題目只問終點，因此可使用淨位移，不必保留中途點。 難度理由：需分類並合併四段路線，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v006",
    "contentSha256": "468926e932fae1d1c4455d029de61eb01b54045f0716e00ca53d9496f9f1206d",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "A 到 B 同 x，y 由 2 變 -3，向下 5；B 到 C 同 y，x 由 -4 變 5，向右 9。",
    "derivedAnswer": "先向下 5，再向右 9",
    "storedAnswer": "先向下 5，再向右 9",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「先向下 5，再向右 9」；其餘三項逐項檢查：「先向上 5，再向右 9」不成立，第一段方向反。；「先向下 1，再向右 9」不成立，第一段錯把坐標相加。；「先向下 5，再向左 9」不成立，第二段方向反。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "路線順序由 A→B→C 明定，不能交換。",
      "alternateReading": "常見誤讀是「跨越 0 時把距離算成絕對值之差。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需分段比較並正確計算跨越原點的距離。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會水平與垂直坐標差。",
    "languageCheck": "題幹所求為「由三個點還原分段路線」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「從 A=(-4,2) 出發，先到 B=(-4,-3)，再到 C=(5,-3)。下列路線描述何者正確？」重新依序處理：A 到 B 同 x，y 由 2 變 -3，向下 5；B 到 C 同 y，x 由 -4 變 5，向右 9。 正確選項為「先向下 5，再向右 9」。三個干擾項均對應不同錯誤：「先向上 5，再向右 9」不成立，第一段方向反。；「先向下 1，再向右 9」不成立，第一段錯把坐標相加。；「先向下 5，再向左 9」不成立，第二段方向反。。邊界審查：路線順序由 A→B→C 明定，不能交換。 難度理由：需分段比較並正確計算跨越原點的距離。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v007",
    "contentSha256": "27ed10f550c682f93ad20ae1fa74c2eb6495472fdbd6c1ed333dddca901a4750",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "向左 4 後橫坐標為 a-4=-1，所以 a=3。",
    "derivedAnswer": "3",
    "storedAnswer": "3",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「3」；其餘三項逐項檢查：「-5」不成立，-5-4=-9。；「-3」不成立，-3-4=-7。；「5」不成立，5-4=1。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "y 坐標全程不變，a 唯一。",
      "alternateReading": "常見誤讀是「把反推原點仍做同方向減法。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需建立一元一次方程式反推，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會由平移式反解。",
    "languageCheck": "題幹所求為「由終點反推起點分量」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「某點從 (a,3) 向左 4 單位後到 (-1,3)，則 a 等於多少？」重新依序處理：向左 4 後橫坐標為 a-4=-1，所以 a=3。 正確選項為「3」。三個干擾項均對應不同錯誤：「-5」不成立，-5-4=-9。；「-3」不成立，-3-4=-7。；「5」不成立，5-4=1。。邊界審查：y 坐標全程不變，a 唯一。 難度理由：需建立一元一次方程式反推，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v008",
    "contentSha256": "b744ac28f57828ddd7be911e974e6b5ed1d8084cf16f14d7b13cb776857141aa",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "縱坐標淨改變為 +6-10=-4，所以 b-4=-1，得 b=3。",
    "derivedAnswer": "3",
    "storedAnswer": "3",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「3」；其餘三項逐項檢查：「-5」不成立，代入後為 -9。；「5」不成立，代入後為 1。；「15」不成立，代入後為 11。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "只涉及 y 分量，x=2 不影響答案。",
      "alternateReading": "常見誤讀是「沒有先合併相反方向，或反解符號錯。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需合併位移並反解未知數，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會整數運算與方程式。",
    "languageCheck": "題幹所求為「由多步終點反推起點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「從 Q=(2,b) 向上 6，再向下 10，終點縱坐標為 -1。求 b。」重新依序處理：縱坐標淨改變為 +6-10=-4，所以 b-4=-1，得 b=3。 正確選項為「3」。三個干擾項均對應不同錯誤：「-5」不成立，代入後為 -9。；「5」不成立，代入後為 1。；「15」不成立，代入後為 11。。邊界審查：只涉及 y 分量，x=2 不影響答案。 難度理由：需合併位移並反解未知數，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v009",
    "contentSha256": "855b0cdf4a031cb834cf412999b4060f93058e420e5514c77924728d67f78a21",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "位置依序為 (0,0)、(2,0)、(2,2)、(0,2)、(0,0)。最後回到起點重複，因此不同位置共 4 個。",
    "derivedAnswer": "4 個",
    "storedAnswer": "4 個",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「4 個」；其餘三項逐項檢查：「3 個」不成立，漏算一個轉折點。；「5 個」不成立，把最後重回原點重複計數。；「8 個」不成立，把每單位途中格點誤當題目所稱頂點位置。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目明確只計每段結束的頂點位置，不計線段中間格點。",
      "alternateReading": "常見誤讀是「只看步數或未處理重複位置。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需逐步追蹤並處理集合去重，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能依序描點並辨認重複。",
    "languageCheck": "題幹所求為「追蹤路線中的不同位置」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「從原點依序右 2、上 2、左 2、下 2，途中總共經過幾個不同的頂點位置（含起點與最後回到起點，但重複位置只算一次）？」重新依序處理：位置依序為 (0,0)、(2,0)、(2,2)、(0,2)、(0,0)。最後回到起點重複，因此不同位置共 4 個。 正確選項為「4 個」。三個干擾項均對應不同錯誤：「3 個」不成立，漏算一個轉折點。；「5 個」不成立，把最後重回原點重複計數。；「8 個」不成立，把每單位途中格點誤當題目所稱頂點位置。。邊界審查：題目明確只計每段結束的頂點位置，不計線段中間格點。 難度理由：需逐步追蹤並處理集合去重，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v010",
    "contentSha256": "885b97882574e904713b1be6d05162f228010a4045c03ef3874871b617fbae02",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "西使 x 減 4：1-4=-3；南使 y 減 3：1-3=-2。",
    "derivedAnswer": "(-3,-2)",
    "storedAnswer": "(-3,-2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(-3,-2)」；其餘三項逐項檢查：「(5,-2)」不成立，把西當東。；「(-2,-3)」不成立，交換步數。；「(-3,4)」不成立，把南當北。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標單位為格，答案保留格線坐標。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "預設東、北為正向已由一般坐標地圖語境配合題意；路線無其他障礙。",
      "alternateReading": "常見誤讀是「忽略起點不是原點，或把方位正負弄反。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "起點與兩段方位都是必要資訊，需轉換後計算。",
    "literacyContextNecessity": "寶箱位置取決於司令台起點與西南兩段提示；情境資訊直接形成坐標運算。",
    "prerequisiteCheck": "需會從非原點平移。",
    "languageCheck": "題幹所求為「在尋寶情境執行路線」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「校園尋寶從司令台 (1,1) 出發，提示為「向西 4 格，再向南 3 格」。寶箱坐標為何？」重新依序處理：西使 x 減 4：1-4=-3；南使 y 減 3：1-3=-2。 正確選項為「(-3,-2)」。三個干擾項均對應不同錯誤：「(5,-2)」不成立，把西當東。；「(-2,-3)」不成立，交換步數。；「(-3,4)」不成立，把南當北。。邊界審查：預設東、北為正向已由一般坐標地圖語境配合題意；路線無其他障礙。 難度理由：起點與兩段方位都是必要資訊，需轉換後計算。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v011",
    "contentSha256": "fd7871c39c2234c1dc3eea68cf1d4e8d42f1be9fa412a5e5538549055cd9091a",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "R3 使 x=-2+3=1；D5 使 y=4-5=-1，所以為 (1,-1)。",
    "derivedAnswer": "(1,-1)",
    "storedAnswer": "(1,-1)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(1,-1)」；其餘三項逐項檢查：「(-5,-1)」不成立，R3 誤做左移。；「(1,9)」不成立，D5 誤做上移。；「(3,-5)」不成立，直接把指令數字當坐標。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "每指令單位均為棋盤格。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "R、D 的定義已明示，執行順序不影響本題終點但仍逐步記錄。",
      "alternateReading": "常見誤讀是「將控制碼數字取代坐標，而不是從起點累加。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需先解碼再運算，情境不可刪除。",
    "literacyContextNecessity": "R3、D5 是情境特定語法；必須理解控制碼才可轉成坐標改變。",
    "prerequisiteCheck": "需會平移。",
    "languageCheck": "題幹所求為「解讀機器人指令並描點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「棋盤機器人起點為 (-2,4)。指令 R3 表示向右 3 格，D5 表示向下 5 格。執行 R3、D5 後的位置為何？」重新依序處理：R3 使 x=-2+3=1；D5 使 y=4-5=-1，所以為 (1,-1)。 正確選項為「(1,-1)」。三個干擾項均對應不同錯誤：「(-5,-1)」不成立，R3 誤做左移。；「(1,9)」不成立，D5 誤做上移。；「(3,-5)」不成立，直接把指令數字當坐標。。邊界審查：R、D 的定義已明示，執行順序不影響本題終點但仍逐步記錄。 難度理由：需先解碼再運算，情境不可刪除。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v012",
    "contentSha256": "4835cff7920f6a405f4b4fbf81d47c5f130210aee88d300dbe304384219c3053",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "A 到 B 同 x，y 增加 7，向北；B 到 C 同 y，x 減少 5，向西。",
    "derivedAnswer": "先向北 7 格，再向西 5 格",
    "storedAnswer": "先向北 7 格，再向西 5 格",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「先向北 7 格，再向西 5 格」；其餘三項逐項檢查：「先向南 7 格，再向西 5 格」不成立，第一段方向反。；「先向北 3 格，再向東 5 格」不成立，兩段距離或方向錯。；「先向西 5 格，再向北 7 格」不成立，淨終點相同但不符合指定經過 B 的順序。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "所有距離以格表示，兩段分開計算。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目要求完整描述 A→B→C，交換兩段雖終點相同但不符合路線。",
      "alternateReading": "常見誤讀是「只看總位移，忽略必須先經過 B 的路線順序。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "中途站點使順序成為必要條件，不能只算淨位移。",
    "literacyContextNecessity": "配送必須依序經過 B；中途站點使路線次序成為數學條件，而非裝飾。",
    "prerequisiteCheck": "需會分段比較坐標。",
    "languageCheck": "題幹所求為「依站點順序描述配送路線」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「配送員從站點 A=(4,-2) 前往 B=(4,5)，再前往 C=(-1,5)。哪段敘述可完整描述路線？」重新依序處理：A 到 B 同 x，y 增加 7，向北；B 到 C 同 y，x 減少 5，向西。 正確選項為「先向北 7 格，再向西 5 格」。三個干擾項均對應不同錯誤：「先向南 7 格，再向西 5 格」不成立，第一段方向反。；「先向北 3 格，再向東 5 格」不成立，兩段距離或方向錯。；「先向西 5 格，再向北 7 格」不成立，淨終點相同但不符合指定經過 B 的順序。。邊界審查：題目要求完整描述 A→B→C，交換兩段雖終點相同但不符合路線。 難度理由：中途站點使順序成為必要條件，不能只算淨位移。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
