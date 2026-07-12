// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE={
  "lectureId": "u21-s009-lecture-r1",
  "unitId": "u21",
  "numericUnitId": 21,
  "topicId": "u21-applications",
  "skillId": "quadratic-max-min",
  "lockedTitle": "最大最小值",
  "title": "從頂點讀極值：最大值與最小值和限制範圍",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "gradeBand": "9下",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": {
    "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
    "legacyContentImported": false,
    "legacySkillReferenceOnly": "quadratic-max-min"
  },
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能由開口與頂點判斷全域最大值或最小值。",
    "能區分極值的數值與發生時的 x。",
    "能在有限區間比較頂點與端點。",
    "能判斷沒有最大值或沒有最小值的情況。"
  ],
  "prerequisites": [
    {
      "skillId": "quadratic-table-graph",
      "requiredLevel": "能讀懂前一技能的定義、圖形與基本運算，並可在本節開始前完成一題檢核。",
      "bridge": "本節會直接使用前一技能的圖形語言與代數表示。"
    }
  ],
  "prerequisiteBridge": "已會由頂點式、表格或圖形找頂點；本節把頂點的 y 座標解讀成函數值的上下界。",
  "glossary": [
    {
      "term": "最小值",
      "definition": "允許範圍內所有函數值中最小的 y。"
    },
    {
      "term": "最大值",
      "definition": "允許範圍內所有函數值中最大的 y。"
    },
    {
      "term": "發生位置",
      "definition": "取得極值時的 x 值。"
    },
    {
      "term": "定義域限制",
      "definition": "題目允許 x 取值的範圍。"
    },
    {
      "term": "端點",
      "definition": "有限區間最左或最右的 x。"
    }
  ],
  "notation": [
    {
      "symbol": "x∈[m,n]",
      "meaning": "x 可從 m 到 n，包含兩端。"
    },
    {
      "symbol": "y≥k",
      "meaning": "所有函數值不小於 k。"
    },
    {
      "symbol": "y≤k",
      "meaning": "所有函數值不大於 k。"
    }
  ],
  "conceptNarrative": [
    "向上拋物線的頂點最低，所以有最小值 k；兩端不斷上升，若 x 不受限便沒有最大值。",
    "向下拋物線的頂點最高，所以有最大值 k；兩端不斷下降，若 x 不受限便沒有最小值。",
    "題目若限制 x 在一段區間，極值候選只需比較：區間內的頂點與兩個端點。若頂點不在區間內，函數在該區間可能一路上升或下降。",
    "回答時要分清「最大值是 12」與「在 x=3 時取得最大值 12」是兩個資訊。"
  ],
  "formalDefinitions": [
    {
      "name": "全域極值",
      "statement": "在完整允許定義域內，函數值達到的最大或最小數。"
    },
    {
      "name": "區間極值候選",
      "statement": "二次函數在閉區間的極值出現在區間內頂點或端點。"
    }
  ],
  "formulas": [
    {
      "formula": "y=a(x-h)²+k",
      "conditions": [
        "a>0"
      ],
      "meaning": "最小值 k，在 x=h 取得。"
    },
    {
      "formula": "y=a(x-h)²+k",
      "conditions": [
        "a<0"
      ],
      "meaning": "最大值 k，在 x=h 取得。"
    }
  ],
  "nonApplicableCases": [
    "沒有定義域限制時，向上拋物線通常沒有最大值。",
    "極值是 y 值，不是頂點整個座標。",
    "若頂點 x 不在限定區間，不能直接把 k 當區間極值。",
    "開區間端點不包含時，可能只有上確界或下確界而未取得；國中題目需依題意處理。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "找頂點 (h,k) 與開口。",
      "check": "a 的符號是否正確？"
    },
    {
      "step": 2,
      "instruction": "確認 x 是否有範圍限制。",
      "check": "端點是否包含？"
    },
    {
      "step": 3,
      "instruction": "若無限制，依開口直接判一側極值。",
      "check": "另一側是否其實不存在？"
    },
    {
      "step": 4,
      "instruction": "若有限閉區間，計算端點與區間內頂點。",
      "check": "頂點 h 是否落在區間？"
    },
    {
      "step": 5,
      "instruction": "比較 y 並同時報告位置。",
      "check": "值與 x 是否分開寫清楚？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "y=2(x-4)²-7 的全域最小值。",
      "solutionSteps": [
        "a=2>0，開口向上。",
        "頂點 (4,-7) 為最低點。"
      ],
      "answer": "最小值 -7，在 x=4 取得；無最大值。"
    },
    {
      "exampleId": "L2",
      "prompt": "y=-(x+1)²+9 的全域最大值。",
      "solutionSteps": [
        "a=-1<0，開口向下。",
        "頂點 (-1,9) 為最高點。"
      ],
      "answer": "最大值 9，在 x=-1 取得；無最小值。"
    },
    {
      "exampleId": "L3",
      "prompt": "y=(x-2)²，限制 0≤x≤5，求最大值。",
      "solutionSteps": [
        "頂點 x=2 在區間，給最小值 0。",
        "端點 y(0)=4、y(5)=9，比較得最大 9。"
      ],
      "answer": "最大值 9，在 x=5 取得。"
    },
    {
      "exampleId": "L4",
      "prompt": "y=-(x-3)²+10，限制 4≤x≤6，求最大值。",
      "solutionSteps": [
        "頂點 x=3 不在區間。",
        "y(4)=9、y(6)=1，區間內最大為 9。"
      ],
      "answer": "最大值 9，在 x=4 取得。"
    },
    {
      "exampleId": "L5",
      "prompt": "某面積 A=-2(t-5)²+50，0≤t≤8，何時最大？",
      "solutionSteps": [
        "頂點 t=5 在允許範圍。",
        "開口向下，頂點給最大值。"
      ],
      "answer": "t=5 時最大，最大面積 50。"
    }
  ],
  "difficultyConnections": {
    "basic": "由頂點式直接讀極值。",
    "standard": "分清值與位置。",
    "advanced": "在有限區間比較端點與頂點。",
    "literacy": "解釋高度、收益或面積模型的最佳時刻與最大量。"
  },
  "commonMistakes": [
    {
      "mistake": "向上拋物線說有最大值。",
      "why": "只看圖中有限畫面。",
      "correction": "無限制時兩端可無限上升。"
    },
    {
      "mistake": "把 h 當最小值。",
      "why": "混淆頂點兩座標。",
      "correction": "h 是位置，k 是極值。"
    },
    {
      "mistake": "限制區間仍直接用頂點。",
      "why": "未檢查 h 是否允許。",
      "correction": "先判 h 是否在區間。"
    },
    {
      "mistake": "只比較兩端，漏掉區間內頂點。",
      "why": "忽略曲線轉折。",
      "correction": "候選為端點加區間內頂點。"
    },
    {
      "mistake": "把最大值寫成座標。",
      "why": "所求量語意不清。",
      "correction": "寫「最大值 y=…，在 x=…」。"
    },
    {
      "mistake": "忽略情境中的非負或時間範圍。",
      "why": "使用不合理的 x。",
      "correction": "先抄下定義域限制。"
    }
  ],
  "selfCheckItems": [
    {
      "prompt": "y=3(x+2)²-4 的最小值？",
      "answer": "-4，在 x=-2。"
    },
    {
      "prompt": "y=-5(x-1)²+6 的最大值？",
      "answer": "6，在 x=1。"
    },
    {
      "prompt": "向上拋物線無限制時有最大值嗎？",
      "answer": "沒有。"
    },
    {
      "prompt": "有限閉區間要檢查哪些點？",
      "answer": "兩端點與區間內頂點。"
    }
  ],
  "summary": [
    "開口向上：頂點給最小值；開口向下：頂點給最大值。",
    "h 是極值發生位置，k 是極值。",
    "無限制時另一側通常不存在極值。",
    "有限閉區間要比較端點與區間內頂點。"
  ],
  "connections": {
    "previous": "由值表與圖形準確找出頂點。",
    "next": [
      "下一技能會把長方形面積寫成二次函數並求最大值。",
      "素養題會要求同時解釋最佳值與實際意義。"
    ]
  },
  "figureReferences": [
    "u21-fig-s009-01"
  ],
  "accessibilityNotes": [
    "限制區間以粗線段標示，端點與頂點均附座標文字，不能只靠曲線顏色判斷。"
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u21-s009-v001",
      "u21-s009-v002",
      "u21-s009-v003",
      "u21-s009-v004",
      "u21-s009-v005",
      "u21-s009-v006",
      "u21-s009-v007",
      "u21-s009-v008",
      "u21-s009-v009",
      "u21-s009-v010",
      "u21-s009-v011",
      "u21-s009-v012"
    ],
    "constructedResponseIds": [
      "u21-s009-cr001",
      "u21-s009-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "臺灣國中會考二次函數範圍",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐項比較區間例：y=(x-2)² 在 [0,5] 的端點值 4、9 與頂點值 0；另核對頂點不在 [4,6] 時最大值來自 x=4。",
    "reviewVersion": "human-lecture-u21-r1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "d8ec1904d41b987005cc2a9f6528360769e377bde8b31260d8633a3d7c18057c"
};

export const QUESTIONS=[
  {
    "questionId": "u21-s009-v001",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
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
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "函數 y=2(x-3)²-5 的最小值為何？",
    "givenConditions": [
      "定義域為所有實數"
    ],
    "target": "由向上頂點式讀最小值",
    "text": "函數 y=2(x-3)²-5 的最小值為何？",
    "choices": [
      "-5",
      "3",
      "2",
      "沒有最小值"
    ],
    "answerIndex": 0,
    "independentSolution": "x=3 時平方項為 0，取得 y=-5。",
    "explanation": "平方項非負，乘 2 後仍非負，所以 y≥-5。",
    "steps": [
      "判 a>0",
      "讀 k=-5"
    ],
    "optionAnalysis": [
      {
        "choice": "-5",
        "truth": true,
        "reason": "a=2>0，頂點 y=-5 是最小值。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "3 是最小值發生的 x。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "2 是外係數。"
      },
      {
        "choice": "沒有最小值",
        "truth": false,
        "reason": "向上拋物線有最低頂點。"
      }
    ],
    "misconceptionTarget": "把 h 或 a 當最小值",
    "concept": "頂點式最小值",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 45,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由向上頂點式讀最小值」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把 h 或 a 當最小值」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "basic：直接讀最小值；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "直接讀最小值",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "575e775270a8b9e1ab524f6147b37f754952f493fd59c9990efeec8924310405"
  },
  {
    "questionId": "u21-s009-v002",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
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
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "函數 y=-(x+4)²+10 的最大值為何？",
    "givenConditions": [
      "定義域為所有實數"
    ],
    "target": "由向下頂點式讀最大值",
    "text": "函數 y=-(x+4)²+10 的最大值為何？",
    "choices": [
      "-4",
      "-10",
      "沒有最大值",
      "10"
    ],
    "answerIndex": 3,
    "independentSolution": "x=-4 時取得 10，其他 x 都使 y 小於 10。",
    "explanation": "負的平方項不大於 0，所以 y≤10。",
    "steps": [
      "判 a<0",
      "讀 k=10"
    ],
    "optionAnalysis": [
      {
        "choice": "-4",
        "truth": false,
        "reason": "-4 是發生位置 x。"
      },
      {
        "choice": "-10",
        "truth": false,
        "reason": "把 k 的符號讀反。"
      },
      {
        "choice": "沒有最大值",
        "truth": false,
        "reason": "向下拋物線有最高頂點。"
      },
      {
        "choice": "10",
        "truth": true,
        "reason": "a=-1<0，頂點 y=10 是最大值。"
      }
    ],
    "misconceptionTarget": "把頂點 x 當最大值",
    "concept": "頂點式最大值",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 45,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由向下頂點式讀最大值」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把頂點 x 當最大值」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "basic：直接讀最大值；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "直接讀最大值",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "56122df8ff681f53c0d28fb47482d6bf43236672ebff246c494ab136729005b4"
  },
  {
    "questionId": "u21-s009-v003",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
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
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "對 y=3(x-2)²+1，哪個敘述正確？",
    "givenConditions": [
      "定義域為所有實數"
    ],
    "target": "辨認存在的極值與不存在的極值",
    "text": "對 y=3(x-2)²+1，哪個敘述正確？",
    "choices": [
      "最大值為 1，沒有最小值",
      "最小值為 1，沒有最大值",
      "最大值與最小值都是 1",
      "最小值為 2"
    ],
    "answerIndex": 1,
    "independentSolution": "y≥1，且 y 可隨 |x| 增大而任意大。",
    "explanation": "a>0 代表向上；頂點給最小值，完整實數域沒有最大值。",
    "steps": [
      "讀頂點與方向",
      "判斷另一側無界"
    ],
    "optionAnalysis": [
      {
        "choice": "最大值為 1，沒有最小值",
        "truth": false,
        "reason": "把開口方向判反。"
      },
      {
        "choice": "最小值為 1，沒有最大值",
        "truth": true,
        "reason": "向上拋物線最低為 1，兩端可無限上升。"
      },
      {
        "choice": "最大值與最小值都是 1",
        "truth": false,
        "reason": "頂點只提供一側極值。"
      },
      {
        "choice": "最小值為 2",
        "truth": false,
        "reason": "2 是 x 位置。"
      }
    ],
    "misconceptionTarget": "只看畫面有限範圍認為有最大值",
    "concept": "全域極值存在性",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 60,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「辨認存在的極值與不存在的極值」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「只看畫面有限範圍認為有最大值」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "basic：分辨有無極值；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "分辨有無極值",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "564798eeb530737d4a2a93b03af93718c00dc397b25d1a56aa23397d8789af50"
  },
  {
    "questionId": "u21-s009-v004",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
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
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "函數 y=-2(x-5)²+18 的最大值與發生位置分別為何？",
    "givenConditions": [
      "a<0"
    ],
    "target": "區分極值數值與 x 位置",
    "text": "函數 y=-2(x-5)²+18 的最大值與發生位置分別為何？",
    "choices": [
      "最大值 5，在 x=18 時取得",
      "最小值 18，在 x=5 時取得",
      "最大值 18，在 x=5 時取得",
      "最大值 18，在 x=-5 時取得"
    ],
    "answerIndex": 2,
    "independentSolution": "最大函數值是 18，對應輸入是 5。",
    "explanation": "頂點式給頂點 (5,18)，負 a 使其為最高點。",
    "steps": [
      "讀 h=5,k=18",
      "由 a<0 判最大"
    ],
    "optionAnalysis": [
      {
        "choice": "最大值 5，在 x=18 時取得",
        "truth": false,
        "reason": "交換兩座標。"
      },
      {
        "choice": "最小值 18，在 x=5 時取得",
        "truth": false,
        "reason": "向下頂點不是最小。"
      },
      {
        "choice": "最大值 18，在 x=5 時取得",
        "truth": true,
        "reason": "頂點為 (5,18)。"
      },
      {
        "choice": "最大值 18，在 x=-5 時取得",
        "truth": false,
        "reason": "括號符號讀反。"
      }
    ],
    "misconceptionTarget": "只寫頂點座標卻不分角色",
    "concept": "極值與位置",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 65,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「區分極值數值與 x 位置」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「只寫頂點座標卻不分角色」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "standard：同時報告值與位置；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "同時報告值與位置",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "46718212c72a586723c2c044bdfa15df474a6eb719b8701a6584b8629632977d"
  },
  {
    "questionId": "u21-s009-v005",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
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
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "函數 y=(x-1)²，限制 -1≤x≤4。最大值為何？",
    "givenConditions": [
      "區間含兩端",
      "頂點 x=1 在區間內"
    ],
    "target": "閉區間比較端點與頂點",
    "text": "函數 y=(x-1)²，限制 -1≤x≤4。最大值為何？",
    "choices": [
      "0",
      "4",
      "16",
      "9"
    ],
    "answerIndex": 3,
    "independentSolution": "閉區間最大值 9，在 x=4。",
    "explanation": "列候選：頂點 x=1 得 0，兩端得 4、9，最大是 9。",
    "steps": [
      "計算 y(-1),y(1),y(4)",
      "比較三值"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "0 是區間最小值。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "只檢查左端點。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "把 x=4 直接平方但忘記 x-1。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "y(-1)=4，y(4)=9；向上頂點給最小，最大在 x=4。"
      }
    ],
    "misconceptionTarget": "看到向上就說沒有最大值而忽略區間",
    "concept": "有限區間最大值",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 85,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「閉區間比較端點與頂點」。",
      "domainBoundary": "x 限制在包含端點的 [-1,4]，頂點 x=1 在區間內。",
      "alternateReading": "若把題目誤讀為「看到向上就說沒有最大值而忽略區間」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "standard：在閉區間求最大；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "在閉區間求最大",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4ba200c185e2e103a22681283a49fa4303c2153c1f5417824a5a9dbbb1d81331"
  },
  {
    "questionId": "u21-s009-v006",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
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
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "函數 y=-(x-2)²+5，限制 3≤x≤6。最大值為何？",
    "givenConditions": [
      "頂點 x=2 不在區間",
      "區間含端點"
    ],
    "target": "頂點在區間外時求最大值",
    "text": "函數 y=-(x-2)²+5，限制 3≤x≤6。最大值為何？",
    "choices": [
      "4",
      "5",
      "-11",
      "沒有最大值"
    ],
    "answerIndex": 0,
    "independentSolution": "區間內最大值為 4，在 x=3。",
    "explanation": "先排除不在範圍的頂點 x=2，再比較端點，左端 x=3 取得 4。",
    "steps": [
      "檢查 h=2 是否在區間",
      "計算 y(3),y(6)"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": true,
        "reason": "在 x≥3 的區間函數向右下降；y(3)=4、y(6)=-11，最大 4。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "全域最大值在 x=2，但 x=2 不允許。"
      },
      {
        "choice": "-11",
        "truth": false,
        "reason": "這是右端點的較小值。"
      },
      {
        "choice": "沒有最大值",
        "truth": false,
        "reason": "閉區間上會取得最大值。"
      }
    ],
    "misconceptionTarget": "忽略定義域直接用 k",
    "concept": "區間外頂點處理",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 90,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「頂點在區間外時求最大值」。",
      "domainBoundary": "允許範圍為閉區間 [3,6]，全域頂點 x=2 不可使用。",
      "alternateReading": "若把題目誤讀為「忽略定義域直接用 k」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "standard：在截取區間求極值；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "在截取區間求極值",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "48e621067ed04ad8dd06ed527ccaa7f002f77285e5bafc877df045fbbcbe758b"
  },
  {
    "questionId": "u21-s009-v007",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
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
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "函數 y=x²-6x+11 的最小值為何？",
    "givenConditions": [
      "可完成平方"
    ],
    "target": "由一般式轉頂點式求最小值",
    "text": "函數 y=x²-6x+11 的最小值為何？",
    "choices": [
      "3",
      "11",
      "2",
      "-2"
    ],
    "answerIndex": 2,
    "independentSolution": "a=1>0，頂點 (3,2)，最小值 2。",
    "explanation": "完成平方：x²-6x+9+2=(x-3)²+2。",
    "steps": [
      "補成 (x-3)²",
      "讀向上頂點 y=2"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "3 是發生位置。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "11 是 y 截距。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "y=(x-3)²+2，最小值 2。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "完成平方常數符號錯誤。"
      }
    ],
    "misconceptionTarget": "把常數項當最小值",
    "concept": "一般式極值",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 95,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由一般式轉頂點式求最小值」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把常數項當最小值」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "advanced：完成平方求極值；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "完成平方求極值",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "193481a34332748358bedbd0450b2df0619fca0cb810dc8f5627cd9b70ea574e"
  },
  {
    "questionId": "u21-s009-v008",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
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
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "函數 y=-x²+8x-7 的最大值為何？",
    "givenConditions": [
      "可完成平方或用軸公式"
    ],
    "target": "由一般式求最大值",
    "text": "函數 y=-x²+8x-7 的最大值為何？",
    "choices": [
      "4",
      "9",
      "-7",
      "16"
    ],
    "answerIndex": 1,
    "independentSolution": "頂點 (4,9)，故最大值 9。",
    "explanation": "提出負號並完成平方：-(x²-8x)-7=-(x-4)²+9。",
    "steps": [
      "化為頂點式",
      "由 a<0 讀 k"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "4 是最大值發生的 x。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "y=-(x-4)²+9，最大值 9。"
      },
      {
        "choice": "-7",
        "truth": false,
        "reason": "-7 是 y 截距。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "只用 -b/(2a) 後平方錯誤。"
      }
    ],
    "misconceptionTarget": "把軸位置當最大值",
    "concept": "一般式最大值",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 100,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由一般式求最大值」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把軸位置當最大值」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "advanced：完成平方判最大；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "完成平方判最大",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f0e1bad5cf48360ae539d63d0a0d36488e11694bc5f44c16730a4f8522488216"
  },
  {
    "questionId": "u21-s009-v009",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
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
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "函數 f(x)=2(x+1)²-3，限制 -4≤x≤0。最大值在哪個 x 取得？",
    "givenConditions": [
      "頂點 x=-1 在區間",
      "比較端點"
    ],
    "target": "求閉區間極值發生位置",
    "text": "函數 f(x)=2(x+1)²-3，限制 -4≤x≤0。最大值在哪個 x 取得？",
    "choices": [
      "x=-1",
      "x=0",
      "x=4",
      "x=-4"
    ],
    "answerIndex": 3,
    "independentSolution": "最大值 15 在 x=-4 取得。",
    "explanation": "向上曲線在頂點最低；比較兩端，左端離軸更遠，值最大。",
    "steps": [
      "算三個候選值",
      "選擇最大對應 x"
    ],
    "optionAnalysis": [
      {
        "choice": "x=-1",
        "truth": false,
        "reason": "這是最小值位置。"
      },
      {
        "choice": "x=0",
        "truth": false,
        "reason": "右端值 -1 小於 15。"
      },
      {
        "choice": "x=4",
        "truth": false,
        "reason": "不在允許區間。"
      },
      {
        "choice": "x=-4",
        "truth": true,
        "reason": "f(-4)=15，f(0)=-1，頂點 f(-1)=-3；最大在 -4。"
      }
    ],
    "misconceptionTarget": "只選頂點或絕對值較大的端點而不算距離軸",
    "concept": "有限區間極值位置",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 105,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「求閉區間極值發生位置」。",
      "domainBoundary": "閉區間 [-4,0] 包含端點與頂點 -1。",
      "alternateReading": "若把題目誤讀為「只選頂點或絕對值較大的端點而不算距離軸」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "advanced：比較不對稱端點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "比較不對稱端點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1ec49c4ff58be91c18f9211f0f1ff3b703b9aaadf13d634f01fcc33426da980a"
  },
  {
    "questionId": "u21-s009-v010",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
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
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "冷藏設備耗電模型 E(t)=0.5(t-6)²+20，t 為設定溫度（°C），只允許 2≤t≤8。最低耗電量與設定為何？",
    "givenConditions": [
      "a>0",
      "頂點 t=6 在範圍"
    ],
    "target": "解釋情境中的最小值與位置",
    "text": "冷藏設備耗電模型 E(t)=0.5(t-6)²+20，t 為設定溫度（°C），只允許 2≤t≤8。最低耗電量與設定為何？",
    "choices": [
      "6 單位，在 t=20°C 時",
      "20 單位，在 t=6°C 時",
      "20 單位，在 t=-6°C 時",
      "沒有最低值"
    ],
    "answerIndex": 1,
    "independentSolution": "E(6)=20，任何其他允許 t 都加上非負平方項。",
    "explanation": "頂點給最低耗電 20，對應設定溫度 6°C。",
    "steps": [
      "確認頂點在 [2,8]",
      "分別解釋 t 與 E"
    ],
    "optionAnalysis": [
      {
        "choice": "6 單位，在 t=20°C 時",
        "truth": false,
        "reason": "交換頂點座標與單位，且 20°C 不在範圍。"
      },
      {
        "choice": "20 單位，在 t=6°C 時",
        "truth": true,
        "reason": "向上頂點 (6,20) 位於允許區間。"
      },
      {
        "choice": "20 單位，在 t=-6°C 時",
        "truth": false,
        "reason": "括號符號讀反。"
      },
      {
        "choice": "沒有最低值",
        "truth": false,
        "reason": "閉區間且向上頂點可行。"
      }
    ],
    "misconceptionTarget": "交換輸入溫度與輸出耗電",
    "concept": "設備最佳設定",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 80,
    "unitCheck": "t 單位 °C，E 的題設單位為耗電單位；答案分別標示。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「解釋情境中的最小值與位置」。",
      "domainBoundary": "t=6 位於允許範圍 2≤t≤8。",
      "alternateReading": "若把題目誤讀為「交換輸入溫度與輸出耗電」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "literacy：解讀最省電溫度；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "設備情境要求同時報告耗電量和溫度，且溫度範圍決定頂點是否可採用；兩種量的單位不可交換。",
    "authoringIntent": "解讀最省電溫度",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a3c45a8a2b60d66cdb01a84795fe2780945434c681d1e843cf7b4342c64df69b"
  },
  {
    "questionId": "u21-s009-v011",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
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
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "活動收益模型 R(n)=-50(n-12)²+7200，n 為參加人數且 0≤n≤20。最大收益為何？",
    "givenConditions": [
      "n 可取整數",
      "頂點 n=12 可行"
    ],
    "target": "由頂點式讀取最大收益",
    "text": "活動收益模型 R(n)=-50(n-12)²+7200，n 為參加人數且 0≤n≤20。最大收益為何？",
    "choices": [
      "7200 元",
      "12 元",
      "50 元",
      "沒有最大值"
    ],
    "answerIndex": 0,
    "independentSolution": "最大收益 7200 元，在 12 人時取得。",
    "explanation": "負平方項只會從 7200 扣除，n=12 時扣除 0。",
    "steps": [
      "判開口向下",
      "檢查 n=12 合理"
    ],
    "optionAnalysis": [
      {
        "choice": "7200 元",
        "truth": true,
        "reason": "a<0，頂點 n=12 的 R=7200。"
      },
      {
        "choice": "12 元",
        "truth": false,
        "reason": "12 是人數。"
      },
      {
        "choice": "50 元",
        "truth": false,
        "reason": "50 是係數絕對值。"
      },
      {
        "choice": "沒有最大值",
        "truth": false,
        "reason": "向下模型在可行範圍有最高點。"
      }
    ],
    "misconceptionTarget": "把人數當金額",
    "concept": "活動收益最大值",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 65,
    "unitCheck": "R 單位元；n 單位人且為整數。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由頂點式讀取最大收益」。",
      "domainBoundary": "n=12 是 0 到 20 之間的整數。",
      "alternateReading": "若把題目誤讀為「把人數當金額」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "literacy：讀取情境最大值；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "參與人數與收益單位不同，模型頂點必須轉譯為「12 人時 7200 元」，不能只給一個數字。",
    "authoringIntent": "讀取情境最大值",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0bbca6677eda69c5b3f88fd291d173d233b6443582084fdfa2ba6dc1a35963f8"
  },
  {
    "questionId": "u21-s009-v012",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
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
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "一段道路拱形高度模型 h(x)=-0.2(x-5)²+4，安全檢查只看 1≤x≤9。此區間內最低高度為何？",
    "givenConditions": [
      "頂點 x=5 是最高點",
      "區間對稱含端點"
    ],
    "target": "向下曲線在閉區間求最低值",
    "text": "一段道路拱形高度模型 h(x)=-0.2(x-5)²+4，安全檢查只看 1≤x≤9。此區間內最低高度為何？",
    "choices": [
      "4 公尺",
      "3.2 公尺",
      "0.8 公尺",
      "沒有最低值"
    ],
    "answerIndex": 2,
    "independentSolution": "h(1)=h(9)=0.8，其他區間點更接近頂點，故不低於 0.8。",
    "explanation": "向下曲線中央最高，區間最低在最遠的兩個端點；代入得 0.8 公尺。",
    "steps": [
      "識別頂點為最大",
      "計算任一端點並用對稱"
    ],
    "optionAnalysis": [
      {
        "choice": "4 公尺",
        "truth": false,
        "reason": "4 是區間最大高度。"
      },
      {
        "choice": "3.2 公尺",
        "truth": false,
        "reason": "只計算扣除量 0.8 或算錯乘法。"
      },
      {
        "choice": "0.8 公尺",
        "truth": true,
        "reason": "h(1)=h(9)=-0.2×16+4=0.8。"
      },
      {
        "choice": "沒有最低值",
        "truth": false,
        "reason": "閉區間端點都包含。"
      }
    ],
    "misconceptionTarget": "直接把頂點高度當最低",
    "concept": "安全區間最低高度",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 95,
    "unitCheck": "h 為公尺，最低高度需附公尺。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「向下曲線在閉區間求最低值」。",
      "domainBoundary": "只在閉區間 1≤x≤9 比較，端點包含。",
      "alternateReading": "若把題目誤讀為「直接把頂點高度當最低」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "literacy：求道路區間最低點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "安全檢查關注指定路段內最小淨高，而不是全域無下界；區間端點與公尺單位是題目不可刪除的核心。",
    "authoringIntent": "求道路區間最低點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b7aaea5673817d5c7317379b5735075cd0eeb4341aa244ba8ad394d181092b3e"
  }
];

export const CONSTRUCTED_RESPONSES=[
  {
    "questionId": "u21-s009-cr001",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "函數 y=-2(x-3)²+18。求全域最大值與發生位置；再限制 5≤x≤8，求此區間的最大值與最小值，並寫出各自位置。",
    "givenConditions": [
      "第一部分定義域所有實數",
      "第二部分閉區間 [5,8]"
    ],
    "target": "比較全域與限制區間極值",
    "requiredWork": [
      "先讀全域頂點。",
      "檢查頂點是否在 [5,8]。",
      "計算兩個端點並比較。"
    ],
    "fullCreditSolution": [
      "全域：a<0，頂點 (3,18)，最大值 18，在 x=3。",
      "區間 [5,8] 不含頂點 x=3，曲線在該區間向右下降。",
      "y(5)=-2×4+18=10，y(8)=-2×25+18=-32，所以區間最大值 10 在 x=5，最小值 -32 在 x=8。"
    ],
    "alternativeSolutions": [
      "也可比較到對稱軸 x=3 的距離：5 距 2、8 距 5，向下曲線越遠值越小。"
    ],
    "reasoningSteps": [
      "全域：a<0，頂點 (3,18)，最大值 18，在 x=3。",
      "區間 [5,8] 不含頂點 x=3，曲線在該區間向右下降。",
      "y(5)=-2×4+18=10，y(8)=-2×25+18=-32，所以區間最大值 10 在 x=5，最小值 -32 在 x=8。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "全域最大值與位置、區間最大最小及兩位置全部正確，並明確檢查頂點不在區間。"
      },
      {
        "score": 2,
        "criteria": "全域部分正確，區間端點最多一處算術錯；或區間兩值正確但缺全域說明。"
      },
      {
        "score": 1,
        "criteria": "能正確讀頂點 (3,18)，或正確計算至少一個端點值。"
      },
      {
        "score": 0,
        "criteria": "直接把 18 當區間最大且未檢查範圍，端點計算也無效。"
      }
    ],
    "partialCreditRules": [
      "全域部分正確，區間端點最多一處算術錯；或區間兩值正確但缺全域說明。",
      "能正確讀頂點 (3,18)，或正確計算至少一個端點值。"
    ],
    "followThroughPolicy": "全域與區間分開計分；若端點單一算術錯，後續比較按自得值一致可保留方法分。",
    "unitAndNotationRules": [
      "x 無物理單位。",
      "函數值與發生位置分開寫。"
    ],
    "answerOnlyPolicy": "只寫三個數無位置與過程，最高 2 分。",
    "commonErrors": [
      "忽略頂點 x=3 不在 [5,8]。",
      "把 y(8) 的平方算成 5²=10。",
      "把最大值與位置交換。"
    ],
    "independentReview": {
      "derivedResult": "全域最大 18 在 x=3；[5,8] 最大 10 在 x=5，最小 -32 在 x=8。",
      "ambiguity": "條件、定義域與所求均明確；依列出的計算可得到唯一評分基準。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "af27b85e544ba66e4f278ebb9fa2bd4565670115ac72d50a60a1c1df2f4d77d0"
  },
  {
    "questionId": "u21-s009-cr002",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-max-min"
    },
    "prompt": "函數 y=x²-4x-5，限制 -1≤x≤6。請用完成平方找頂點，再求此區間的最大值與最小值，並說明為何只需比較三個候選點。",
    "givenConditions": [
      "閉區間包含頂點"
    ],
    "target": "由一般式求閉區間極值並論證候選點",
    "requiredWork": [
      "完成平方。",
      "列頂點與兩端點函數值。",
      "比較並說明二次函數只有一個轉折點。"
    ],
    "fullCreditSolution": [
      "y=x²-4x+4-9=(x-2)²-9，頂點 (2,-9)，開口向上。",
      "候選：x=-1 時 y=0；x=2 時 y=-9；x=6 時 y=7。",
      "區間最小值 -9 在 x=2，最大值 7 在 x=6。閉區間內曲線只在頂點改變單調方向，因此極值只可能在區間內頂點或兩端點。"
    ],
    "alternativeSolutions": [
      "也可用軸 x=2 判斷兩端離軸距離，x=6 距離 4 大於 x=-1 距離 3，故右端值較大。"
    ],
    "reasoningSteps": [
      "y=x²-4x+4-9=(x-2)²-9，頂點 (2,-9)，開口向上。",
      "候選：x=-1 時 y=0；x=2 時 y=-9；x=6 時 y=7。",
      "區間最小值 -9 在 x=2，最大值 7 在 x=6。閉區間內曲線只在頂點改變單調方向，因此極值只可能在區間內頂點或兩端點。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完成平方、三候選值、最大最小與候選點理由全部正確。"
      },
      {
        "score": 2,
        "criteria": "極值結論正確且有大部分計算，但候選點理由簡略或單一端點算錯。"
      },
      {
        "score": 1,
        "criteria": "正確完成平方或正確找到頂點 (2,-9)。"
      },
      {
        "score": 0,
        "criteria": "頂點、端點與極值均無有效計算。"
      }
    ],
    "partialCreditRules": [
      "極值結論正確且有大部分計算，但候選點理由簡略或單一端點算錯。",
      "正確完成平方或正確找到頂點 (2,-9)。"
    ],
    "followThroughPolicy": "若完成平方常數錯但後續端點直接代原式正確，可保留端點與比較分；候選點理由獨立評分。",
    "unitAndNotationRules": [
      "對稱軸可寫 x=2。",
      "本題無物理單位。"
    ],
    "answerOnlyPolicy": "只寫最大 7、最小 -9 無過程，最高 2 分。",
    "commonErrors": [
      "完成平方常數寫成 +9。",
      "只比較兩端漏掉頂點。",
      "看到向上就說區間沒有最大值。"
    ],
    "independentReview": {
      "derivedResult": "頂點 (2,-9)；區間最小 -9 在 x=2，最大 7 在 x=6。",
      "ambiguity": "條件、定義域與所求均明確；依列出的計算可得到唯一評分基準。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1be4b214bff194069543ae5ac1f52db041008c791b36f398e85c3889382a0719"
  }
];

export const SEMANTIC_REVIEWS=[
  {
    "questionId": "u21-s009-v001",
    "unitId": "u21",
    "skillId": "quadratic-max-min",
    "contentSha256": "575e775270a8b9e1ab524f6147b37f754952f493fd59c9990efeec8924310405",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "x=3 時平方項為 0，取得 y=-5。",
    "derivedAnswer": "-5",
    "storedAnswer": "-5",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「-5」。逐項反證其餘選項：「3」不成立，因為3 是最小值發生的 x。；「2」不成立，因為2 是外係數。；「沒有最小值」不成立，因為向上拋物線有最低頂點。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-max-min」講義中先定義；本題目標是由向上頂點式讀最小值，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由向上頂點式讀最小值」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把 h 或 a 當最小值」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「-5」。"
    },
    "difficultyReason": "basic：直接讀最小值；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由向上頂點式讀最小值，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 y=2(x-3)²-5 的最小值為何？」獨立重算：x=3 時平方項為 0，取得 y=-5。；所得答案為「-5」。四選項逐項核對：「-5」=真，a=2>0，頂點 y=-5 是最小值。；「3」=假，3 是最小值發生的 x。；「2」=假，2 是外係數。；「沒有最小值」=假，向上拋物線有最低頂點。。難度判定依據：basic：直接讀最小值；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s009-v002",
    "unitId": "u21",
    "skillId": "quadratic-max-min",
    "contentSha256": "56122df8ff681f53c0d28fb47482d6bf43236672ebff246c494ab136729005b4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "x=-4 時取得 10，其他 x 都使 y 小於 10。",
    "derivedAnswer": "10",
    "storedAnswer": "10",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「10」。逐項反證其餘選項：「-4」不成立，因為-4 是發生位置 x。；「-10」不成立，因為把 k 的符號讀反。；「沒有最大值」不成立，因為向下拋物線有最高頂點。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-max-min」講義中先定義；本題目標是由向下頂點式讀最大值，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由向下頂點式讀最大值」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把頂點 x 當最大值」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「10」。"
    },
    "difficultyReason": "basic：直接讀最大值；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由向下頂點式讀最大值，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 y=-(x+4)²+10 的最大值為何？」獨立重算：x=-4 時取得 10，其他 x 都使 y 小於 10。；所得答案為「10」。四選項逐項核對：「-4」=假，-4 是發生位置 x。；「-10」=假，把 k 的符號讀反。；「沒有最大值」=假，向下拋物線有最高頂點。；「10」=真，a=-1<0，頂點 y=10 是最大值。。難度判定依據：basic：直接讀最大值；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s009-v003",
    "unitId": "u21",
    "skillId": "quadratic-max-min",
    "contentSha256": "564798eeb530737d4a2a93b03af93718c00dc397b25d1a56aa23397d8789af50",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "y≥1，且 y 可隨 |x| 增大而任意大。",
    "derivedAnswer": "最小值為 1，沒有最大值",
    "storedAnswer": "最小值為 1，沒有最大值",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「最小值為 1，沒有最大值」。逐項反證其餘選項：「最大值為 1，沒有最小值」不成立，因為把開口方向判反。；「最大值與最小值都是 1」不成立，因為頂點只提供一側極值。；「最小值為 2」不成立，因為2 是 x 位置。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-max-min」講義中先定義；本題目標是辨認存在的極值與不存在的極值，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「辨認存在的極值與不存在的極值」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「只看畫面有限範圍認為有最大值」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「最小值為 1，沒有最大值」。"
    },
    "difficultyReason": "basic：分辨有無極值；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求辨認存在的極值與不存在的極值，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「對 y=3(x-2)²+1，哪個敘述正確？」獨立重算：y≥1，且 y 可隨 |x| 增大而任意大。；所得答案為「最小值為 1，沒有最大值」。四選項逐項核對：「最大值為 1，沒有最小值」=假，把開口方向判反。；「最小值為 1，沒有最大值」=真，向上拋物線最低為 1，兩端可無限上升。；「最大值與最小值都是 1」=假，頂點只提供一側極值。；「最小值為 2」=假，2 是 x 位置。。難度判定依據：basic：分辨有無極值；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s009-v004",
    "unitId": "u21",
    "skillId": "quadratic-max-min",
    "contentSha256": "46718212c72a586723c2c044bdfa15df474a6eb719b8701a6584b8629632977d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "最大函數值是 18，對應輸入是 5。",
    "derivedAnswer": "最大值 18，在 x=5 時取得",
    "storedAnswer": "最大值 18，在 x=5 時取得",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「最大值 18，在 x=5 時取得」。逐項反證其餘選項：「最大值 5，在 x=18 時取得」不成立，因為交換兩座標。；「最小值 18，在 x=5 時取得」不成立，因為向下頂點不是最小。；「最大值 18，在 x=-5 時取得」不成立，因為括號符號讀反。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-max-min」講義中先定義；本題目標是區分極值數值與 x 位置，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「區分極值數值與 x 位置」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「只寫頂點座標卻不分角色」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「最大值 18，在 x=5 時取得」。"
    },
    "difficultyReason": "standard：同時報告值與位置；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求區分極值數值與 x 位置，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 y=-2(x-5)²+18 的最大值與發生位置分別為何？」獨立重算：最大函數值是 18，對應輸入是 5。；所得答案為「最大值 18，在 x=5 時取得」。四選項逐項核對：「最大值 5，在 x=18 時取得」=假，交換兩座標。；「最小值 18，在 x=5 時取得」=假，向下頂點不是最小。；「最大值 18，在 x=5 時取得」=真，頂點為 (5,18)。；「最大值 18，在 x=-5 時取得」=假，括號符號讀反。。難度判定依據：standard：同時報告值與位置；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s009-v005",
    "unitId": "u21",
    "skillId": "quadratic-max-min",
    "contentSha256": "4ba200c185e2e103a22681283a49fa4303c2153c1f5417824a5a9dbbb1d81331",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "閉區間最大值 9，在 x=4。",
    "derivedAnswer": "9",
    "storedAnswer": "9",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「9」。逐項反證其餘選項：「0」不成立，因為0 是區間最小值。；「4」不成立，因為只檢查左端點。；「16」不成立，因為把 x=4 直接平方但忘記 x-1。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-max-min」講義中先定義；本題目標是閉區間比較端點與頂點，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「閉區間比較端點與頂點」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：x 限制在包含端點的 [-1,4]，頂點 x=1 在區間內。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「看到向上就說沒有最大值而忽略區間」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「9」。"
    },
    "difficultyReason": "standard：在閉區間求最大；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求閉區間比較端點與頂點，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 y=(x-1)²，限制 -1≤x≤4。最大值為何？」獨立重算：閉區間最大值 9，在 x=4。；所得答案為「9」。四選項逐項核對：「0」=假，0 是區間最小值。；「4」=假，只檢查左端點。；「16」=假，把 x=4 直接平方但忘記 x-1。；「9」=真，y(-1)=4，y(4)=9；向上頂點給最小，最大在 x=4。。難度判定依據：standard：在閉區間求最大；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s009-v006",
    "unitId": "u21",
    "skillId": "quadratic-max-min",
    "contentSha256": "48e621067ed04ad8dd06ed527ccaa7f002f77285e5bafc877df045fbbcbe758b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "區間內最大值為 4，在 x=3。",
    "derivedAnswer": "4",
    "storedAnswer": "4",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「4」。逐項反證其餘選項：「5」不成立，因為全域最大值在 x=2，但 x=2 不允許。；「-11」不成立，因為這是右端點的較小值。；「沒有最大值」不成立，因為閉區間上會取得最大值。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-max-min」講義中先定義；本題目標是頂點在區間外時求最大值，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「頂點在區間外時求最大值」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：允許範圍為閉區間 [3,6]，全域頂點 x=2 不可使用。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「忽略定義域直接用 k」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「4」。"
    },
    "difficultyReason": "standard：在截取區間求極值；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求頂點在區間外時求最大值，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 y=-(x-2)²+5，限制 3≤x≤6。最大值為何？」獨立重算：區間內最大值為 4，在 x=3。；所得答案為「4」。四選項逐項核對：「4」=真，在 x≥3 的區間函數向右下降；y(3)=4、y(6)=-11，最大 4。；「5」=假，全域最大值在 x=2，但 x=2 不允許。；「-11」=假，這是右端點的較小值。；「沒有最大值」=假，閉區間上會取得最大值。。難度判定依據：standard：在截取區間求極值；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s009-v007",
    "unitId": "u21",
    "skillId": "quadratic-max-min",
    "contentSha256": "193481a34332748358bedbd0450b2df0619fca0cb810dc8f5627cd9b70ea574e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "a=1>0，頂點 (3,2)，最小值 2。",
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
      "secondCorrectAnswer": "重新解題得到「2」。逐項反證其餘選項：「3」不成立，因為3 是發生位置。；「11」不成立，因為11 是 y 截距。；「-2」不成立，因為完成平方常數符號錯誤。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-max-min」講義中先定義；本題目標是由一般式轉頂點式求最小值，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由一般式轉頂點式求最小值」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把常數項當最小值」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「2」。"
    },
    "difficultyReason": "advanced：完成平方求極值；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由一般式轉頂點式求最小值，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 y=x²-6x+11 的最小值為何？」獨立重算：a=1>0，頂點 (3,2)，最小值 2。；所得答案為「2」。四選項逐項核對：「3」=假，3 是發生位置。；「11」=假，11 是 y 截距。；「2」=真，y=(x-3)²+2，最小值 2。；「-2」=假，完成平方常數符號錯誤。。難度判定依據：advanced：完成平方求極值；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s009-v008",
    "unitId": "u21",
    "skillId": "quadratic-max-min",
    "contentSha256": "f0e1bad5cf48360ae539d63d0a0d36488e11694bc5f44c16730a4f8522488216",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "頂點 (4,9)，故最大值 9。",
    "derivedAnswer": "9",
    "storedAnswer": "9",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「9」。逐項反證其餘選項：「4」不成立，因為4 是最大值發生的 x。；「-7」不成立，因為-7 是 y 截距。；「16」不成立，因為只用 -b/(2a) 後平方錯誤。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-max-min」講義中先定義；本題目標是由一般式求最大值，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由一般式求最大值」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把軸位置當最大值」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「9」。"
    },
    "difficultyReason": "advanced：完成平方判最大；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由一般式求最大值，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 y=-x²+8x-7 的最大值為何？」獨立重算：頂點 (4,9)，故最大值 9。；所得答案為「9」。四選項逐項核對：「4」=假，4 是最大值發生的 x。；「9」=真，y=-(x-4)²+9，最大值 9。；「-7」=假，-7 是 y 截距。；「16」=假，只用 -b/(2a) 後平方錯誤。。難度判定依據：advanced：完成平方判最大；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s009-v009",
    "unitId": "u21",
    "skillId": "quadratic-max-min",
    "contentSha256": "1ec49c4ff58be91c18f9211f0f1ff3b703b9aaadf13d634f01fcc33426da980a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "最大值 15 在 x=-4 取得。",
    "derivedAnswer": "x=-4",
    "storedAnswer": "x=-4",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=-4」。逐項反證其餘選項：「x=-1」不成立，因為這是最小值位置。；「x=0」不成立，因為右端值 -1 小於 15。；「x=4」不成立，因為不在允許區間。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-max-min」講義中先定義；本題目標是求閉區間極值發生位置，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「求閉區間極值發生位置」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：閉區間 [-4,0] 包含端點與頂點 -1。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「只選頂點或絕對值較大的端點而不算距離軸」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=-4」。"
    },
    "difficultyReason": "advanced：比較不對稱端點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求求閉區間極值發生位置，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 f(x)=2(x+1)²-3，限制 -4≤x≤0。最大值在哪個 x 取得？」獨立重算：最大值 15 在 x=-4 取得。；所得答案為「x=-4」。四選項逐項核對：「x=-1」=假，這是最小值位置。；「x=0」=假，右端值 -1 小於 15。；「x=4」=假，不在允許區間。；「x=-4」=真，f(-4)=15，f(0)=-1，頂點 f(-1)=-3；最大在 -4。。難度判定依據：advanced：比較不對稱端點；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s009-v010",
    "unitId": "u21",
    "skillId": "quadratic-max-min",
    "contentSha256": "a3c45a8a2b60d66cdb01a84795fe2780945434c681d1e843cf7b4342c64df69b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "E(6)=20，任何其他允許 t 都加上非負平方項。",
    "derivedAnswer": "20 單位，在 t=6°C 時",
    "storedAnswer": "20 單位，在 t=6°C 時",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「20 單位，在 t=6°C 時」。逐項反證其餘選項：「6 單位，在 t=20°C 時」不成立，因為交換頂點座標與單位，且 20°C 不在範圍。；「20 單位，在 t=-6°C 時」不成立，因為括號符號讀反。；「沒有最低值」不成立，因為閉區間且向上頂點可行。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-max-min」講義中先定義；本題目標是解釋情境中的最小值與位置，沒有未定義的新符號。",
      "unitConflict": "單位審查：t 單位 °C，E 的題設單位為耗電單位；答案分別標示。 本題四個選項皆回應同一所求量「解釋情境中的最小值與位置」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：t=6 位於允許範圍 2≤t≤8。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「交換輸入溫度與輸出耗電」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「20 單位，在 t=6°C 時」。"
    },
    "difficultyReason": "literacy：解讀最省電溫度；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "設備情境要求同時報告耗電量和溫度，且溫度範圍決定頂點是否可採用；兩種量的單位不可交換。",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求解釋情境中的最小值與位置，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「冷藏設備耗電模型 E(t)=0.5(t-6)²+20，t 為設定溫度（°C），只允許 2≤t≤8。最低耗電量與設定為何？」獨立重算：E(6)=20，任何其他允許 t 都加上非負平方項。；所得答案為「20 單位，在 t=6°C 時」。四選項逐項核對：「6 單位，在 t=20°C 時」=假，交換頂點座標與單位，且 20°C 不在範圍。；「20 單位，在 t=6°C 時」=真，向上頂點 (6,20) 位於允許區間。；「20 單位，在 t=-6°C 時」=假，括號符號讀反。；「沒有最低值」=假，閉區間且向上頂點可行。。難度判定依據：literacy：解讀最省電溫度；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s009-v011",
    "unitId": "u21",
    "skillId": "quadratic-max-min",
    "contentSha256": "0bbca6677eda69c5b3f88fd291d173d233b6443582084fdfa2ba6dc1a35963f8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "最大收益 7200 元，在 12 人時取得。",
    "derivedAnswer": "7200 元",
    "storedAnswer": "7200 元",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「7200 元」。逐項反證其餘選項：「12 元」不成立，因為12 是人數。；「50 元」不成立，因為50 是係數絕對值。；「沒有最大值」不成立，因為向下模型在可行範圍有最高點。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-max-min」講義中先定義；本題目標是由頂點式讀取最大收益，沒有未定義的新符號。",
      "unitConflict": "單位審查：R 單位元；n 單位人且為整數。 本題四個選項皆回應同一所求量「由頂點式讀取最大收益」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：n=12 是 0 到 20 之間的整數。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把人數當金額」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「7200 元」。"
    },
    "difficultyReason": "literacy：讀取情境最大值；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "參與人數與收益單位不同，模型頂點必須轉譯為「12 人時 7200 元」，不能只給一個數字。",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由頂點式讀取最大收益，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「活動收益模型 R(n)=-50(n-12)²+7200，n 為參加人數且 0≤n≤20。最大收益為何？」獨立重算：最大收益 7200 元，在 12 人時取得。；所得答案為「7200 元」。四選項逐項核對：「7200 元」=真，a<0，頂點 n=12 的 R=7200。；「12 元」=假，12 是人數。；「50 元」=假，50 是係數絕對值。；「沒有最大值」=假，向下模型在可行範圍有最高點。。難度判定依據：literacy：讀取情境最大值；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s009-v012",
    "unitId": "u21",
    "skillId": "quadratic-max-min",
    "contentSha256": "b7aaea5673817d5c7317379b5735075cd0eeb4341aa244ba8ad394d181092b3e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "h(1)=h(9)=0.8，其他區間點更接近頂點，故不低於 0.8。",
    "derivedAnswer": "0.8 公尺",
    "storedAnswer": "0.8 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「0.8 公尺」。逐項反證其餘選項：「4 公尺」不成立，因為4 是區間最大高度。；「3.2 公尺」不成立，因為只計算扣除量 0.8 或算錯乘法。；「沒有最低值」不成立，因為閉區間端點都包含。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-max-min」講義中先定義；本題目標是向下曲線在閉區間求最低值，沒有未定義的新符號。",
      "unitConflict": "單位審查：h 為公尺，最低高度需附公尺。 本題四個選項皆回應同一所求量「向下曲線在閉區間求最低值」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：只在閉區間 1≤x≤9 比較，端點包含。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「直接把頂點高度當最低」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「0.8 公尺」。"
    },
    "difficultyReason": "literacy：求道路區間最低點；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "安全檢查關注指定路段內最小淨高，而不是全域無下界；區間端點與公尺單位是題目不可刪除的核心。",
    "prerequisiteCheck": "需先能使用 quadratic-table-graph 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求向下曲線在閉區間求最低值，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「一段道路拱形高度模型 h(x)=-0.2(x-5)²+4，安全檢查只看 1≤x≤9。此區間內最低高度為何？」獨立重算：h(1)=h(9)=0.8，其他區間點更接近頂點，故不低於 0.8。；所得答案為「0.8 公尺」。四選項逐項核對：「4 公尺」=假，4 是區間最大高度。；「3.2 公尺」=假，只計算扣除量 0.8 或算錯乘法。；「0.8 公尺」=真，h(1)=h(9)=-0.2×16+4=0.8。；「沒有最低值」=假，閉區間端點都包含。。難度判定依據：literacy：求道路區間最低點；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  }
];

export const DRAWING_SPECS=[
  {
    "figureId": "u21-fig-s009-01",
    "drawingSpecId": "u21-draw-s009-01",
    "unitId": "u21",
    "topicId": "u21-applications",
    "skillId": "quadratic-max-min",
    "title": "限制區間的極值",
    "svgPath": "figures/u21/u21-fig-s009-01.svg",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "altText": "本圖以高對比線條與文字標籤呈現：y=(x-1)² 在閉區間 [-1,4] 上標出兩端與頂點，右端取得區間最大值。",
    "drawingSpec": {
      "canvas": {
        "width": 680,
        "height": 410
      },
      "viewBox": "0 0 680 410",
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
      "reviewNote": "人工檢視 u21-fig-s009-01：y=(x-1)² 在閉區間 [-1,4] 上標出兩端與頂點，右端取得區間最大值。 已核對曲線方向、標記座標、虛實線語意、文字可讀性與畫布邊界，未以未標刻度洩漏額外答案。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "9ca644c612dee30019a3648437d2f19b8bf38884338881c4c6c2288c65da73ee"
  }
];
