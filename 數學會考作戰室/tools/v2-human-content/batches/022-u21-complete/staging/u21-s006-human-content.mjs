// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE={
  "lectureId": "u21-s006-lecture-r1",
  "unitId": "u21",
  "numericUnitId": 21,
  "topicId": "u21-graphs",
  "skillId": "quadratic-axis-symmetry",
  "lockedTitle": "對稱軸求法",
  "title": "三條路找到對稱軸：頂點與等高點和一般式",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "gradeBand": "9下",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": {
    "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
    "legacyContentImported": false,
    "legacySkillReferenceOnly": "quadratic-axis-symmetry"
  },
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能由頂點式直接寫出對稱軸。",
    "能由一對等高點的橫座標求對稱軸。",
    "能由一般式 y=ax²+bx+c 使用 x=-b/(2a)。",
    "能選擇最少步驟且不超出題目資訊的方法。"
  ],
  "prerequisites": [
    {
      "skillId": "quadratic-opening",
      "requiredLevel": "能讀懂前一技能的定義、圖形與基本運算，並可在本節開始前完成一題檢核。",
      "bridge": "本節會直接使用前一技能的圖形語言與代數表示。"
    }
  ],
  "prerequisiteBridge": "先能判斷開口並理解對稱軸是垂直線；本節把圖形線索與代數係數連接。",
  "glossary": [
    {
      "term": "頂點式",
      "definition": "y=a(x-h)²+k，可直接讀出對稱軸 x=h。"
    },
    {
      "term": "一般式",
      "definition": "y=ax²+bx+c，a≠0。"
    },
    {
      "term": "等高點法",
      "definition": "取相同 y 的兩點橫座標平均。"
    },
    {
      "term": "根的中點",
      "definition": "若圖形與 x 軸交於兩點，兩根的平均也是對稱軸。"
    }
  ],
  "notation": [
    {
      "symbol": "x=h",
      "meaning": "頂點式的對稱軸。"
    },
    {
      "symbol": "x=-b/(2a)",
      "meaning": "一般式的對稱軸公式。"
    },
    {
      "symbol": "(p+q)/2",
      "meaning": "等高點或兩根橫座標的中點。"
    }
  ],
  "conceptNarrative": [
    "對稱軸本質上是左右等距點的中線，所以最直觀方法是等高點平均。",
    "頂點式已把中線位置藏在 (x-h)² 中：當 x=h 時平方最小為 0，因此軸是 x=h。注意括號內符號與 h 相反。",
    "一般式若沒有明顯等高點，可用 x=-b/(2a)。這個公式只需 a、b，不需要 c。",
    "三種方法應得到相同結果。若不同，通常是負號、分母 2a 或括號內符號讀錯。"
  ],
  "formalDefinitions": [
    {
      "name": "對稱軸一般式公式",
      "statement": "對 y=ax²+bx+c（a≠0），對稱軸為 x=-b/(2a)。"
    },
    {
      "name": "等高點中點性質",
      "statement": "同一拋物線上兩個不同等高點的橫座標平均等於對稱軸。"
    }
  ],
  "formulas": [
    {
      "formula": "x=-b/(2a)",
      "conditions": [
        "函數已整理為 y=ax²+bx+c",
        "a≠0"
      ],
      "meaning": "由一般式係數求軸。"
    },
    {
      "formula": "x=(p+q)/2",
      "conditions": [
        "(p,r)、(q,r) 為不同等高點"
      ],
      "meaning": "由對稱性求軸。"
    },
    {
      "formula": "x=h",
      "conditions": [
        "函數為 y=a(x-h)²+k"
      ],
      "meaning": "由頂點式直接讀取。"
    }
  ],
  "nonApplicableCases": [
    "不能把 -b/(2a) 寫成 (-b/2)×a。",
    "兩點 y 不同時不能使用平均法。",
    "頂點式 y=a(x+3)²+k 的 h 是 -3，不是 3。",
    "一般式未合併同類項前，a、b 可能讀錯。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先辨認題目提供哪種資訊。",
      "check": "頂點式、一般式或等高點？"
    },
    {
      "step": 2,
      "instruction": "選對應方法。",
      "check": "能直接讀就不必展開。"
    },
    {
      "step": 3,
      "instruction": "完整代入並保留分母括號。",
      "check": "2a 是否整體在分母？"
    },
    {
      "step": 4,
      "instruction": "把結果寫成直線方程 x=數值。",
      "check": "沒有只寫一個數。"
    },
    {
      "step": 5,
      "instruction": "用對稱點或頂點驗算。",
      "check": "左右距離是否相等？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "求 y=2(x-5)²+1 的對稱軸。",
      "solutionSteps": [
        "頂點式中 h=5。",
        "軸為 x=h。"
      ],
      "answer": "x=5。"
    },
    {
      "exampleId": "L2",
      "prompt": "求 y=-3(x+4)²+7 的對稱軸。",
      "solutionSteps": [
        "x+4=x-(-4)，所以 h=-4。",
        "軸為 x=-4。"
      ],
      "answer": "x=-4。"
    },
    {
      "exampleId": "L3",
      "prompt": "求 y=2x²-12x+5 的對稱軸。",
      "solutionSteps": [
        "a=2、b=-12。",
        "x=-(-12)/(2×2)=3。"
      ],
      "answer": "x=3。"
    },
    {
      "exampleId": "L4",
      "prompt": "同高點 x=-7 與 x=1，求軸。",
      "solutionSteps": [
        "平均為 (-7+1)/2=-3。",
        "兩點到 -3 都是 4 單位。"
      ],
      "answer": "x=-3。"
    },
    {
      "exampleId": "L5",
      "prompt": "圖形與 x 軸交於 x=2、x=8，求軸。",
      "solutionSteps": [
        "兩交點 y 都是 0，屬等高點。",
        "平均 (2+8)/2=5。"
      ],
      "answer": "x=5。"
    }
  ],
  "difficultyConnections": {
    "basic": "頂點式直接讀軸。",
    "standard": "一般式公式代入或等高點平均。",
    "advanced": "由參數使軸符合指定位置。",
    "literacy": "由對稱拱門兩側等高測量點找中心線。"
  },
  "commonMistakes": [
    {
      "mistake": "y=(x+4)² 的軸寫 x=4。",
      "why": "括號內符號未反讀。",
      "correction": "x+4=x-(-4)，故 x=-4。"
    },
    {
      "mistake": "公式漏掉負號。",
      "why": "只記 b/(2a)。",
      "correction": "先寫完整 -b/(2a) 再代。"
    },
    {
      "mistake": "分母只除以 2。",
      "why": "未把 2a 視為整體。",
      "correction": "用括號寫 -b÷(2a)。"
    },
    {
      "mistake": "把 c 代入公式。",
      "why": "混淆係數角色。",
      "correction": "軸公式只用 a、b。"
    },
    {
      "mistake": "等高點平均 y 座標。",
      "why": "未理解軸是垂直線。",
      "correction": "平均的是兩個 x。"
    },
    {
      "mistake": "答案只寫 3。",
      "why": "把直線與數值混淆。",
      "correction": "完整寫 x=3。"
    }
  ],
  "selfCheckItems": [
    {
      "prompt": "y=(x-9)²-2 的軸？",
      "answer": "x=9。"
    },
    {
      "prompt": "y=-2(x+1)² 的軸？",
      "answer": "x=-1。"
    },
    {
      "prompt": "y=x²+6x+4 的軸？",
      "answer": "x=-3。"
    },
    {
      "prompt": "等高點 x=-2、10 的軸？",
      "answer": "x=4。"
    }
  ],
  "summary": [
    "頂點式看 h：軸 x=h。",
    "一般式用 x=-b/(2a)。",
    "等高點或兩根取橫座標平均。",
    "所有方法都要把答案寫成垂直直線 x=常數。"
  ],
  "connections": {
    "previous": "開口方向幫助辨認圖形，但軸的位置需另由式子或對稱資訊求得。",
    "next": [
      "下一技能會完整讀取頂點式中的 a、h、k。",
      "最大最小值會把軸與頂點 y 值一起使用。"
    ]
  },
  "figureReferences": [
    "u21-fig-s006-01"
  ],
  "accessibilityNotes": [
    "圖中等高點以相同水平輔助線連接，對稱軸用虛線並標出中點計算。"
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u21-s006-v001",
      "u21-s006-v002",
      "u21-s006-v003",
      "u21-s006-v004",
      "u21-s006-v005",
      "u21-s006-v006",
      "u21-s006-v007",
      "u21-s006-v008",
      "u21-s006-v009",
      "u21-s006-v010",
      "u21-s006-v011",
      "u21-s006-v012"
    ],
    "constructedResponseIds": [
      "u21-s006-cr001",
      "u21-s006-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "臺灣國中會考二次函數範圍",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一以三種方法驗算：一般式 2x²-12x+5 得 x=3，等高點 -7 與 1 得 x=-3，並特別核對 x+4 對應 h=-4。",
    "reviewVersion": "human-lecture-u21-r1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "fd7e09063b0eb176c0b66f2ed4f7d2acf8f273cfd239eaaba94502fac83cfd27"
};

export const QUESTIONS=[
  {
    "questionId": "u21-s006-v001",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
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
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "函數 y=3(x-4)²+2 的對稱軸為何？",
    "givenConditions": [
      "頂點式已知"
    ],
    "target": "由 x-h 直接讀軸",
    "text": "函數 y=3(x-4)²+2 的對稱軸為何？",
    "choices": [
      "x=-4",
      "x=4",
      "y=4",
      "y=2"
    ],
    "answerIndex": 1,
    "independentSolution": "平方項在 x=4 時為 0，頂點通過此垂直線。",
    "explanation": "頂點式 y=a(x-h)²+k 中，括號為 x-4，所以 h=4。",
    "steps": [
      "辨認 h=4",
      "寫成 x=4"
    ],
    "optionAnalysis": [
      {
        "choice": "x=-4",
        "truth": false,
        "reason": "把括號符號錯誤反向兩次。"
      },
      {
        "choice": "x=4",
        "truth": true,
        "reason": "h=4，所以對稱軸 x=h。"
      },
      {
        "choice": "y=4",
        "truth": false,
        "reason": "對稱軸是垂直線，應固定 x。"
      },
      {
        "choice": "y=2",
        "truth": false,
        "reason": "2 是頂點 y 座標，不是軸。"
      }
    ],
    "misconceptionTarget": "把 x-h 的符號直接照抄成 -h",
    "concept": "頂點式對稱軸",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 45,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由 x-h 直接讀軸」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把 x-h 的符號直接照抄成 -h」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "basic：直接讀頂點式軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "直接讀頂點式軸",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "df64b9fe65bc9138c716b5130f916c861622c4f8fbef3eaf480abd56ad632cdf"
  },
  {
    "questionId": "u21-s006-v002",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
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
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "函數 y=-(x+6)²+1 的對稱軸為何？",
    "givenConditions": [
      "x+6=x-(-6)"
    ],
    "target": "正確反讀括號內加號",
    "text": "函數 y=-(x+6)²+1 的對稱軸為何？",
    "choices": [
      "x=6",
      "y=-6",
      "y=1",
      "x=-6"
    ],
    "answerIndex": 3,
    "independentSolution": "頂點為 (-6,1)，所以對稱軸 x=-6。",
    "explanation": "令平方括號為 0：x+6=0 得 x=-6，因此軸在 x=-6。",
    "steps": [
      "解 x+6=0",
      "寫垂直軸方程"
    ],
    "optionAnalysis": [
      {
        "choice": "x=6",
        "truth": false,
        "reason": "未把 x+6 改寫成 x-(-6)。"
      },
      {
        "choice": "y=-6",
        "truth": false,
        "reason": "把垂直線寫成水平線。"
      },
      {
        "choice": "y=1",
        "truth": false,
        "reason": "1 是頂點高度。"
      },
      {
        "choice": "x=-6",
        "truth": true,
        "reason": "h=-6，故軸 x=-6。"
      }
    ],
    "misconceptionTarget": "看到 +6 就回答 +6",
    "concept": "括號符號與軸",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 50,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「正確反讀括號內加號」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「看到 +6 就回答 +6」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "basic：處理頂點式加號；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "處理頂點式加號",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0ec2b7f315caf88e94428ea812d2406bb7572a82aeec27634890881a6a8eadc4"
  },
  {
    "questionId": "u21-s006-v003",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
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
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "二次函數 y=2x²-8x+3 的對稱軸為何？",
    "givenConditions": [
      "a=2",
      "b=-8"
    ],
    "target": "使用 x=-b/(2a)",
    "text": "二次函數 y=2x²-8x+3 的對稱軸為何？",
    "choices": [
      "x=-2",
      "x=4",
      "x=2",
      "x=8"
    ],
    "answerIndex": 2,
    "independentSolution": "x=-(-8)/(4)=2。",
    "explanation": "代入完整公式，分子是 8，分母是 4，得到 x=2。",
    "steps": [
      "辨認 a=2,b=-8",
      "計算 -b/(2a)"
    ],
    "optionAnalysis": [
      {
        "choice": "x=-2",
        "truth": false,
        "reason": "漏掉公式前的負號。"
      },
      {
        "choice": "x=4",
        "truth": false,
        "reason": "分母只除以 2，漏乘 a。"
      },
      {
        "choice": "x=2",
        "truth": true,
        "reason": "x=-(-8)/(2×2)=8/4=2。"
      },
      {
        "choice": "x=8",
        "truth": false,
        "reason": "未除以 2a。"
      }
    ],
    "misconceptionTarget": "把 b 的負號處理錯誤",
    "concept": "一般式軸公式",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 65,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「使用 x=-b/(2a)」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把 b 的負號處理錯誤」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "basic：基礎公式代入；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "基礎公式代入",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6ec74b1bc0969b6f9c83468a10fd78a8ed4cc3e6d2e5f0598f330c0f181928c5"
  },
  {
    "questionId": "u21-s006-v004",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
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
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "同一拋物線上兩個等高點的 x 座標為 -3 與 9，對稱軸為何？",
    "givenConditions": [
      "兩點 y 相同且不同"
    ],
    "target": "用等高點平均求軸",
    "text": "同一拋物線上兩個等高點的 x 座標為 -3 與 9，對稱軸為何？",
    "choices": [
      "x=3",
      "x=6",
      "x=-6",
      "y=3"
    ],
    "answerIndex": 0,
    "independentSolution": "兩點到 x=3 都相距 6，驗證正確。",
    "explanation": "軸在兩個等高輸入的中點，位置為 3。",
    "steps": [
      "相加 -3+9=6",
      "除以 2 並寫 x=3"
    ],
    "optionAnalysis": [
      {
        "choice": "x=3",
        "truth": true,
        "reason": "(-3+9)/2=3。"
      },
      {
        "choice": "x=6",
        "truth": false,
        "reason": "只算兩點距離 12 的一半。"
      },
      {
        "choice": "x=-6",
        "truth": false,
        "reason": "符號運算錯誤。"
      },
      {
        "choice": "y=3",
        "truth": false,
        "reason": "軸應為垂直線。"
      }
    ],
    "misconceptionTarget": "把半距 6 當絕對位置",
    "concept": "等高點中點法",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 65,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「用等高點平均求軸」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把半距 6 當絕對位置」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "standard：用兩點求軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "用兩點求軸",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4d78182c9c04b73726291a87396c2cfbf50f567650feca297ce8bdb08512b617"
  },
  {
    "questionId": "u21-s006-v005",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
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
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "某拋物線與 x 軸交於 (1,0)、(7,0)。其對稱軸為何？",
    "givenConditions": [
      "兩交點等高 y=0"
    ],
    "target": "用兩根中點求軸",
    "text": "某拋物線與 x 軸交於 (1,0)、(7,0)。其對稱軸為何？",
    "choices": [
      "x=3",
      "x=8",
      "y=0",
      "x=4"
    ],
    "answerIndex": 3,
    "independentSolution": "根 1、7 分居 x=4 兩側各 3。",
    "explanation": "兩個 x 軸交點是等高對稱點，所以軸在橫座標中點 4。",
    "steps": [
      "辨認兩根皆 y=0",
      "計算平均"
    ],
    "optionAnalysis": [
      {
        "choice": "x=3",
        "truth": false,
        "reason": "只算兩根差的一半。"
      },
      {
        "choice": "x=8",
        "truth": false,
        "reason": "把兩根相加未除 2。"
      },
      {
        "choice": "y=0",
        "truth": false,
        "reason": "x 軸是交點所在水平線，不是拋物線對稱軸。"
      },
      {
        "choice": "x=4",
        "truth": true,
        "reason": "(1+7)/2=4。"
      }
    ],
    "misconceptionTarget": "把 x 軸本身當對稱軸",
    "concept": "兩根中點法",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 70,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「用兩根中點求軸」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把 x 軸本身當對稱軸」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "standard：由零點求軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "由零點求軸",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "021b0e860978fbe5759b624db711ff9d1fa44cc39505b4a14347d4ee8d5c8bba"
  },
  {
    "questionId": "u21-s006-v006",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
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
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "若 y=ax²+bx+c 的 a=-3、b=12，對稱軸為何？",
    "givenConditions": [
      "c 未知但不影響軸"
    ],
    "target": "在負 a 下正確使用公式",
    "text": "若 y=ax²+bx+c 的 a=-3、b=12，對稱軸為何？",
    "choices": [
      "x=-2",
      "x=2",
      "x=4",
      "無法判斷"
    ],
    "answerIndex": 1,
    "independentSolution": "對稱軸 x=2；c 只影響垂直位置。",
    "explanation": "代入 -b/(2a)，兩個負號相消得到正 2。",
    "steps": [
      "寫 -12/(2×-3)",
      "計算商 2"
    ],
    "optionAnalysis": [
      {
        "choice": "x=-2",
        "truth": false,
        "reason": "只看 -b 而漏分母負號。"
      },
      {
        "choice": "x=2",
        "truth": true,
        "reason": "x=-12/(2×-3)=-12/-6=2。"
      },
      {
        "choice": "x=4",
        "truth": false,
        "reason": "用 -b/a 而漏 2。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "c 不需要，a、b 已足夠。"
      }
    ],
    "misconceptionTarget": "認為缺 c 就不能求軸",
    "concept": "一般式軸與 c 無關",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 75,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「在負 a 下正確使用公式」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「認為缺 c 就不能求軸」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "standard：含負係數公式計算；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "含負係數公式計算",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "05e39bf83917d3844ecc4f0369e9b5878cbcf5c6848e5673a54e6441ea361c73"
  },
  {
    "questionId": "u21-s006-v007",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
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
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "函數 y=(x-5)(x+1) 的對稱軸為何？",
    "givenConditions": [
      "可用兩根或展開"
    ],
    "target": "選擇簡潔方法求軸",
    "text": "函數 y=(x-5)(x+1) 的對稱軸為何？",
    "choices": [
      "x=2",
      "x=4",
      "x=-2",
      "x=5"
    ],
    "answerIndex": 0,
    "independentSolution": "亦可展開 y=x²-4x-5，用 -b/(2a)=4/2=2。",
    "explanation": "因乘積為 0 時 x=5 或 -1，兩根中點就是對稱軸 x=2。",
    "steps": [
      "找兩根 5 與 -1",
      "取平均 2"
    ],
    "optionAnalysis": [
      {
        "choice": "x=2",
        "truth": true,
        "reason": "兩根為 5、-1，平均 (5-1)/2=2。"
      },
      {
        "choice": "x=4",
        "truth": false,
        "reason": "把 5 與 1 平均，忽略根 -1。"
      },
      {
        "choice": "x=-2",
        "truth": false,
        "reason": "符號平均錯誤。"
      },
      {
        "choice": "x=5",
        "truth": false,
        "reason": "只取其中一根。"
      }
    ],
    "misconceptionTarget": "把因式 x+1 的根讀成 1",
    "concept": "因式形式的兩根中點",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 90,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「選擇簡潔方法求軸」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把因式 x+1 的根讀成 1」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "advanced：由因式式快速求軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "由因式式快速求軸",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "76c104399e4f34a486956845692316a8f29673f7a63ac3228c1a14697d4b32b3"
  },
  {
    "questionId": "u21-s006-v008",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
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
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "二次函數 y=mx²+8x-1 的對稱軸為 x=-2，m 為何？",
    "givenConditions": [
      "m≠0"
    ],
    "target": "由指定軸反求係數",
    "text": "二次函數 y=mx²+8x-1 的對稱軸為 x=-2，m 為何？",
    "choices": [
      "-2",
      "4",
      "2",
      "-4"
    ],
    "answerIndex": 2,
    "independentSolution": "化簡 -4/m=-2，所以 m=2；代回 a=2 得軸 -8/4=-2。",
    "explanation": "把 a=m、b=8 代入軸公式並令等於 -2，解得 m=2。",
    "steps": [
      "建立 -8/(2m)=-2",
      "交叉相乘解 m"
    ],
    "optionAnalysis": [
      {
        "choice": "-2",
        "truth": false,
        "reason": "代回會得軸 x=2。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "把 2m 的 2 漏失或移項錯。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "-8/(2m)=-2，故 -8=-4m，m=2。"
      },
      {
        "choice": "-4",
        "truth": false,
        "reason": "同時符號與倍數錯誤。"
      }
    ],
    "misconceptionTarget": "只把軸值直接當 m",
    "concept": "由軸反求參數",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 105,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由指定軸反求係數」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「只把軸值直接當 m」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "advanced：參數逆向求解；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "參數逆向求解",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2f12b708457317d3adedd87cf59322be1024317c0df34a2471361583f4175aad"
  },
  {
    "questionId": "u21-s006-v009",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
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
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "某二次函數一般式的 a=4，對稱軸為 x=3。其 b 必為何？",
    "givenConditions": [
      "x=-b/(2a)"
    ],
    "target": "由 a 與軸反求一次項係數",
    "text": "某二次函數一般式的 a=4，對稱軸為 x=3。其 b 必為何？",
    "choices": [
      "24",
      "-24",
      "-12",
      "12"
    ],
    "answerIndex": 1,
    "independentSolution": "檢查 -(-24)/(2×4)=24/8=3。",
    "explanation": "將 a=4 與軸 3 代入：3=-b/8，乘 8 得 24=-b。",
    "steps": [
      "寫 3=-b/8",
      "解 b=-24"
    ],
    "optionAnalysis": [
      {
        "choice": "24",
        "truth": false,
        "reason": "漏掉公式前負號。"
      },
      {
        "choice": "-24",
        "truth": true,
        "reason": "3=-b/8，所以 -b=24，b=-24。"
      },
      {
        "choice": "-12",
        "truth": false,
        "reason": "分母誤用 a 而非 2a。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "符號與分母都錯。"
      }
    ],
    "misconceptionTarget": "把公式改成 b/(2a)",
    "concept": "由軸反求 b",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 100,
    "unitCheck": "不涉及單位換算。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由 a 與軸反求一次項係數」。",
      "domainBoundary": "題幹已給足定義域與比較條件。",
      "alternateReading": "若把題目誤讀為「把公式改成 b/(2a)」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "advanced：逆向運用對稱軸公式；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "authoringIntent": "逆向運用對稱軸公式",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ac1e565a859cc89c24741551bf9ca3f833e0fc693625bd4d78074739b3fd9ee8"
  },
  {
    "questionId": "u21-s006-v010",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
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
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "隧道拱頂剖面左右兩側在高度 4 m 處的水平位置為 6 m 與 18 m。以同一基準量測，拱頂中心線位置為何？",
    "givenConditions": [
      "兩側點等高",
      "拱形近似對稱拋物線"
    ],
    "target": "由等高位置求隧道中心線",
    "text": "隧道拱頂剖面左右兩側在高度 4 m 處的水平位置為 6 m 與 18 m。以同一基準量測，拱頂中心線位置為何？",
    "choices": [
      "12 m",
      "6 m",
      "24 m",
      "高度 4 m"
    ],
    "answerIndex": 0,
    "independentSolution": "中心線 x=12 m，兩量測點分別在其左右 6 m。",
    "explanation": "隧道同高兩側關於中心線對稱，位置平均為 12 m。",
    "steps": [
      "取 6、18 平均",
      "驗證左右各 6 m"
    ],
    "optionAnalysis": [
      {
        "choice": "12 m",
        "truth": true,
        "reason": "(6+18)/2=12。"
      },
      {
        "choice": "6 m",
        "truth": false,
        "reason": "把兩位置差的一半當絕對位置。"
      },
      {
        "choice": "24 m",
        "truth": false,
        "reason": "只相加未平均。"
      },
      {
        "choice": "高度 4 m",
        "truth": false,
        "reason": "所求是水平中心位置。"
      }
    ],
    "misconceptionTarget": "把半寬當中心絕對位置",
    "concept": "隧道等高測量",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 75,
    "unitCheck": "水平位置單位公尺，平均後仍為公尺。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由等高位置求隧道中心線」。",
      "domainBoundary": "兩點屬同一對稱拱形且高度相同。",
      "alternateReading": "若把題目誤讀為「把半寬當中心絕對位置」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "literacy：定位隧道中心線；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "同一量測基準使 6 m、18 m 是位置而非單純距離；隧道情境要求回答中心線的實際位置。",
    "authoringIntent": "定位隧道中心線",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "146223d02741cf53bc5acda5dcdc2a07157eecca14742ecb04eb03b51a2a3ead"
  },
  {
    "questionId": "u21-s006-v011",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
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
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "某橋拱模型與水面 y=0 交於 x=14 m 與 x=26 m。橋拱最高點位於哪條垂直線上？",
    "givenConditions": [
      "兩交點是同高零點",
      "模型開口向下"
    ],
    "target": "由兩個水面交點找最高點中心線",
    "text": "某橋拱模型與水面 y=0 交於 x=14 m 與 x=26 m。橋拱最高點位於哪條垂直線上？",
    "choices": [
      "x=12 m",
      "x=6 m",
      "y=20 m",
      "x=20 m"
    ],
    "answerIndex": 3,
    "independentSolution": "14、26 到 20 都是 6 m，所以最高點位於 x=20。",
    "explanation": "最高點位於對稱軸，軸是兩個等高水面交點的中點 x=20。",
    "steps": [
      "辨認水面交點為兩根",
      "取橫座標平均"
    ],
    "optionAnalysis": [
      {
        "choice": "x=12 m",
        "truth": false,
        "reason": "只算兩根差。"
      },
      {
        "choice": "x=6 m",
        "truth": false,
        "reason": "只算半寬。"
      },
      {
        "choice": "y=20 m",
        "truth": false,
        "reason": "最高點在垂直線 x=20 上，不是水平線。"
      },
      {
        "choice": "x=20 m",
        "truth": true,
        "reason": "兩根中點 (14+26)/2=20。"
      }
    ],
    "misconceptionTarget": "把橋拱寬度或半寬當位置",
    "concept": "橋拱零點中點",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 80,
    "unitCheck": "x 為公尺位置，答案可寫垂直線 x=20 m。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由兩個水面交點找最高點中心線」。",
      "domainBoundary": "兩交點同屬水面 y=0，且最高點在其間的對稱軸上。",
      "alternateReading": "若把題目誤讀為「把橋拱寬度或半寬當位置」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "literacy：由跨度端點找中心；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "橋拱與水面的交點提供實際跨度端點；題目問的是最高點所在垂直位置，而非跨度或高度。",
    "authoringIntent": "由跨度端點找中心",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c5a8d942dd7075fa5df0c53bd4e60c4f3c1ea84306da154e6434a31ec31b4f35"
  },
  {
    "questionId": "u21-s006-v012",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
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
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "太陽能集熱槽的剖面方程為 y=0.5x²-6x+10，x、y 單位為公尺。槽底中心線為何？",
    "givenConditions": [
      "a=0.5",
      "b=-6"
    ],
    "target": "由一般式求實物最低中心線",
    "text": "太陽能集熱槽的剖面方程為 y=0.5x²-6x+10，x、y 單位為公尺。槽底中心線為何？",
    "choices": [
      "x=-6 m",
      "x=3 m",
      "x=6 m",
      "y=10 m"
    ],
    "answerIndex": 2,
    "independentSolution": "對稱軸 x=6 m；因 a>0，它也是槽底最低點所在中心線。",
    "explanation": "用軸公式，分母 2a=1，分子 -b=6，所以 x=6 m。",
    "steps": [
      "辨認 a=0.5,b=-6",
      "計算 6/(1)"
    ],
    "optionAnalysis": [
      {
        "choice": "x=-6 m",
        "truth": false,
        "reason": "漏掉 b 的負號。"
      },
      {
        "choice": "x=3 m",
        "truth": false,
        "reason": "把分母誤作 2。"
      },
      {
        "choice": "x=6 m",
        "truth": true,
        "reason": "x=-(-6)/(2×0.5)=6/1=6。"
      },
      {
        "choice": "y=10 m",
        "truth": false,
        "reason": "10 是 y 截距，不是中心線。"
      }
    ],
    "misconceptionTarget": "把常數項當中心位置",
    "concept": "一般式實物中心線",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "estimatedTimeSec": 90,
    "unitCheck": "x 為水平公尺位置；軸方程寫 x=6 m。",
    "roundingCheck": "全程使用精確值，不需四捨五入。",
    "ambiguityAndBoundaryAudit": {
      "uniqueTarget": "所求明確為「由一般式求實物最低中心線」。",
      "domainBoundary": "模型為完整二次剖面，a≠0，公式適用。",
      "alternateReading": "若把題目誤讀為「把常數項當中心位置」，會落入幹擾選項，但不會形成第二個正確答案。",
      "figureInference": "本題不依賴未提供的圖形外觀。"
    },
    "difficultyReason": "literacy：求集熱槽中心線；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "集熱槽的「中心線」是實際水平位置，必須保留公尺並結合 a>0 解釋為槽底，而非只得到抽象數字。",
    "authoringIntent": "求集熱槽中心線",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "48fe68b707fdda8e332ef5bc275f61fd639260df737d24fb2406e21dafb987ca"
  }
];

export const CONSTRUCTED_RESPONSES=[
  {
    "questionId": "u21-s006-cr001",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "分別用兩種方法求 y=x²-10x+16 的對稱軸：方法一使用 x=-b/(2a)；方法二先因式分解找兩個 x 軸交點再取中點。",
    "givenConditions": [
      "函數可因式分解"
    ],
    "target": "以公式與根中點交叉驗證",
    "requiredWork": [
      "方法一辨認 a、b 並代公式。",
      "方法二因式分解、找兩根、取平均。",
      "比較兩結果。"
    ],
    "fullCreditSolution": [
      "方法一：a=1、b=-10，x=-(-10)/(2×1)=5。",
      "方法二：x²-10x+16=(x-2)(x-8)，兩根 2、8，中點 (2+8)/2=5。",
      "兩法皆得對稱軸 x=5。"
    ],
    "alternativeSolutions": [
      "也可完成平方為 y=(x-5)²-9，直接讀 x=5，作為第三種驗算。"
    ],
    "reasoningSteps": [
      "方法一：a=1、b=-10，x=-(-10)/(2×1)=5。",
      "方法二：x²-10x+16=(x-2)(x-8)，兩根 2、8，中點 (2+8)/2=5。",
      "兩法皆得對稱軸 x=5。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "公式法與因式分解法皆完整正確，兩者均得 x=5 並明確比較。"
      },
      {
        "score": 2,
        "criteria": "一種方法完整正確，另一種有小錯但核心步驟可辨。"
      },
      {
        "score": 1,
        "criteria": "能正確使用任一方法得到 x=5，但未完成另一法。"
      },
      {
        "score": 0,
        "criteria": "公式與因式分解皆無有效步驟，或把軸寫 y=5。"
      }
    ],
    "partialCreditRules": [
      "一種方法完整正確，另一種有小錯但核心步驟可辨。",
      "能正確使用任一方法得到 x=5，但未完成另一法。"
    ],
    "followThroughPolicy": "兩種方法分開評分；其中一法算錯不影響另一法。若最終只寫 5 未寫 x=5，扣表示分但保留計算分。",
    "unitAndNotationRules": [
      "對稱軸寫 x=5。",
      "本題無物理單位。"
    ],
    "answerOnlyPolicy": "只寫答案 x=5 而無兩種方法，最高 1 分。",
    "commonErrors": [
      "公式漏負號。",
      "因式分解成 (x-4)(x-4)。",
      "兩根差的一半寫成 3 而未加起點。"
    ],
    "independentReview": {
      "derivedResult": "公式法與根中點法都得到對稱軸 x=5。",
      "ambiguity": "條件、定義域與所求均明確；依列出的計算可得到唯一評分基準。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "42e60060a183e74f502a11f97a16d7690acac0dec07cdd9b6579377376f26fe0"
  },
  {
    "questionId": "u21-s006-cr002",
    "unitId": "u21",
    "numericUnitId": 21,
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": {
      "replaceMatchingLegacyRecordOnlyAtFinalIntegration": true,
      "legacyContentImported": false,
      "legacySkillReferenceOnly": "quadratic-axis-symmetry"
    },
    "prompt": "已知 y=2x²+bx-7 的對稱軸為 x=-3。求 b，並找出與點 P(-1,9) 關於此軸對稱的點 Q。",
    "givenConditions": [
      "a=2",
      "軸 x=-3",
      "P 為圖上點僅用於鏡射"
    ],
    "target": "由軸反求 b 並求鏡射點",
    "requiredWork": [
      "用 -b/(2a)=-3 求 b。",
      "計算 P 到軸的水平距離。",
      "求另一側同高點 Q。"
    ],
    "fullCreditSolution": [
      "-b/(2×2)=-3，所以 -b=-12，b=12。",
      "P 的 x=-1 到軸 -3 的距離為 2。",
      "另一側 x=-3-2=-5，y 保持 9，所以 Q=(-5,9)。"
    ],
    "alternativeSolutions": [
      "鏡射點可用 x_Q=2(-3)-(-1)=-5。"
    ],
    "reasoningSteps": [
      "-b/(2×2)=-3，所以 -b=-12，b=12。",
      "P 的 x=-1 到軸 -3 的距離為 2。",
      "另一側 x=-3-2=-5，y 保持 9，所以 Q=(-5,9)。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "b=12、Q=(-5,9) 全對，並有公式與距離或鏡射計算。"
      },
      {
        "score": 2,
        "criteria": "b 或 Q 其中一部分完整正確，另一部分只有單一算術錯誤。"
      },
      {
        "score": 1,
        "criteria": "能建立 -b/4=-3，或知道 Q 的 y=9 且位於軸另一側。"
      },
      {
        "score": 0,
        "criteria": "b=-12 且 Q 改變 y 或落在軸同側，無有效更正。"
      }
    ],
    "partialCreditRules": [
      "b 或 Q 其中一部分完整正確，另一部分只有單一算術錯誤。",
      "能建立 -b/4=-3，或知道 Q 的 y=9 且位於軸另一側。"
    ],
    "followThroughPolicy": "b 與鏡射點兩部分獨立給分；若 b 算錯不影響 Q 的幾何計分。",
    "unitAndNotationRules": [
      "b 無單位。",
      "Q 使用座標格式。"
    ],
    "answerOnlyPolicy": "只寫 b=12 或只寫 Q，最高 2 分，依完成部分判定。",
    "commonErrors": [
      "把 -b/4=-3 解成 b=-12。",
      "把 P 的鏡射點當軸上 (-3,9)。",
      "將 y 變成 -9。"
    ],
    "independentReview": {
      "derivedResult": "b=12，Q=(-5,9)。",
      "ambiguity": "條件、定義域與所求均明確；依列出的計算可得到唯一評分基準。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fd4552e26405367c3ea7df1d0200c36dbf62ee4c196cdaa911667fc3e005e95f"
  }
];

export const SEMANTIC_REVIEWS=[
  {
    "questionId": "u21-s006-v001",
    "unitId": "u21",
    "skillId": "quadratic-axis-symmetry",
    "contentSha256": "df64b9fe65bc9138c716b5130f916c861622c4f8fbef3eaf480abd56ad632cdf",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "平方項在 x=4 時為 0，頂點通過此垂直線。",
    "derivedAnswer": "x=4",
    "storedAnswer": "x=4",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=4」。逐項反證其餘選項：「x=-4」不成立，因為把括號符號錯誤反向兩次。；「y=4」不成立，因為對稱軸是垂直線，應固定 x。；「y=2」不成立，因為2 是頂點 y 座標，不是軸。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-axis-symmetry」講義中先定義；本題目標是由 x-h 直接讀軸，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由 x-h 直接讀軸」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把 x-h 的符號直接照抄成 -h」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=4」。"
    },
    "difficultyReason": "basic：直接讀頂點式軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由 x-h 直接讀軸，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 y=3(x-4)²+2 的對稱軸為何？」獨立重算：平方項在 x=4 時為 0，頂點通過此垂直線。；所得答案為「x=4」。四選項逐項核對：「x=-4」=假，把括號符號錯誤反向兩次。；「x=4」=真，h=4，所以對稱軸 x=h。；「y=4」=假，對稱軸是垂直線，應固定 x。；「y=2」=假，2 是頂點 y 座標，不是軸。。難度判定依據：basic：直接讀頂點式軸；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s006-v002",
    "unitId": "u21",
    "skillId": "quadratic-axis-symmetry",
    "contentSha256": "0ec2b7f315caf88e94428ea812d2406bb7572a82aeec27634890881a6a8eadc4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "頂點為 (-6,1)，所以對稱軸 x=-6。",
    "derivedAnswer": "x=-6",
    "storedAnswer": "x=-6",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=-6」。逐項反證其餘選項：「x=6」不成立，因為未把 x+6 改寫成 x-(-6)。；「y=-6」不成立，因為把垂直線寫成水平線。；「y=1」不成立，因為1 是頂點高度。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-axis-symmetry」講義中先定義；本題目標是正確反讀括號內加號，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「正確反讀括號內加號」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「看到 +6 就回答 +6」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=-6」。"
    },
    "difficultyReason": "basic：處理頂點式加號；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求正確反讀括號內加號，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 y=-(x+6)²+1 的對稱軸為何？」獨立重算：頂點為 (-6,1)，所以對稱軸 x=-6。；所得答案為「x=-6」。四選項逐項核對：「x=6」=假，未把 x+6 改寫成 x-(-6)。；「y=-6」=假，把垂直線寫成水平線。；「y=1」=假，1 是頂點高度。；「x=-6」=真，h=-6，故軸 x=-6。。難度判定依據：basic：處理頂點式加號；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s006-v003",
    "unitId": "u21",
    "skillId": "quadratic-axis-symmetry",
    "contentSha256": "6ec74b1bc0969b6f9c83468a10fd78a8ed4cc3e6d2e5f0598f330c0f181928c5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "x=-(-8)/(4)=2。",
    "derivedAnswer": "x=2",
    "storedAnswer": "x=2",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=2」。逐項反證其餘選項：「x=-2」不成立，因為漏掉公式前的負號。；「x=4」不成立，因為分母只除以 2，漏乘 a。；「x=8」不成立，因為未除以 2a。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-axis-symmetry」講義中先定義；本題目標是使用 x=-b/(2a)，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「使用 x=-b/(2a)」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把 b 的負號處理錯誤」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=2」。"
    },
    "difficultyReason": "basic：基礎公式代入；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求使用 x=-b/(2a)，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「二次函數 y=2x²-8x+3 的對稱軸為何？」獨立重算：x=-(-8)/(4)=2。；所得答案為「x=2」。四選項逐項核對：「x=-2」=假，漏掉公式前的負號。；「x=4」=假，分母只除以 2，漏乘 a。；「x=2」=真，x=-(-8)/(2×2)=8/4=2。；「x=8」=假，未除以 2a。。難度判定依據：basic：基礎公式代入；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s006-v004",
    "unitId": "u21",
    "skillId": "quadratic-axis-symmetry",
    "contentSha256": "4d78182c9c04b73726291a87396c2cfbf50f567650feca297ce8bdb08512b617",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "兩點到 x=3 都相距 6，驗證正確。",
    "derivedAnswer": "x=3",
    "storedAnswer": "x=3",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=3」。逐項反證其餘選項：「x=6」不成立，因為只算兩點距離 12 的一半。；「x=-6」不成立，因為符號運算錯誤。；「y=3」不成立，因為軸應為垂直線。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-axis-symmetry」講義中先定義；本題目標是用等高點平均求軸，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「用等高點平均求軸」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把半距 6 當絕對位置」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=3」。"
    },
    "difficultyReason": "standard：用兩點求軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求用等高點平均求軸，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「同一拋物線上兩個等高點的 x 座標為 -3 與 9，對稱軸為何？」獨立重算：兩點到 x=3 都相距 6，驗證正確。；所得答案為「x=3」。四選項逐項核對：「x=3」=真，(-3+9)/2=3。；「x=6」=假，只算兩點距離 12 的一半。；「x=-6」=假，符號運算錯誤。；「y=3」=假，軸應為垂直線。。難度判定依據：standard：用兩點求軸；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s006-v005",
    "unitId": "u21",
    "skillId": "quadratic-axis-symmetry",
    "contentSha256": "021b0e860978fbe5759b624db711ff9d1fa44cc39505b4a14347d4ee8d5c8bba",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "根 1、7 分居 x=4 兩側各 3。",
    "derivedAnswer": "x=4",
    "storedAnswer": "x=4",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=4」。逐項反證其餘選項：「x=3」不成立，因為只算兩根差的一半。；「x=8」不成立，因為把兩根相加未除 2。；「y=0」不成立，因為x 軸是交點所在水平線，不是拋物線對稱軸。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-axis-symmetry」講義中先定義；本題目標是用兩根中點求軸，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「用兩根中點求軸」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把 x 軸本身當對稱軸」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=4」。"
    },
    "difficultyReason": "standard：由零點求軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求用兩根中點求軸，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「某拋物線與 x 軸交於 (1,0)、(7,0)。其對稱軸為何？」獨立重算：根 1、7 分居 x=4 兩側各 3。；所得答案為「x=4」。四選項逐項核對：「x=3」=假，只算兩根差的一半。；「x=8」=假，把兩根相加未除 2。；「y=0」=假，x 軸是交點所在水平線，不是拋物線對稱軸。；「x=4」=真，(1+7)/2=4。。難度判定依據：standard：由零點求軸；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s006-v006",
    "unitId": "u21",
    "skillId": "quadratic-axis-symmetry",
    "contentSha256": "05e39bf83917d3844ecc4f0369e9b5878cbcf5c6848e5673a54e6441ea361c73",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "對稱軸 x=2；c 只影響垂直位置。",
    "derivedAnswer": "x=2",
    "storedAnswer": "x=2",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=2」。逐項反證其餘選項：「x=-2」不成立，因為只看 -b 而漏分母負號。；「x=4」不成立，因為用 -b/a 而漏 2。；「無法判斷」不成立，因為c 不需要，a、b 已足夠。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-axis-symmetry」講義中先定義；本題目標是在負 a 下正確使用公式，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「在負 a 下正確使用公式」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「認為缺 c 就不能求軸」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=2」。"
    },
    "difficultyReason": "standard：含負係數公式計算；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求在負 a 下正確使用公式，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「若 y=ax²+bx+c 的 a=-3、b=12，對稱軸為何？」獨立重算：對稱軸 x=2；c 只影響垂直位置。；所得答案為「x=2」。四選項逐項核對：「x=-2」=假，只看 -b 而漏分母負號。；「x=2」=真，x=-12/(2×-3)=-12/-6=2。；「x=4」=假，用 -b/a 而漏 2。；「無法判斷」=假，c 不需要，a、b 已足夠。。難度判定依據：standard：含負係數公式計算；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s006-v007",
    "unitId": "u21",
    "skillId": "quadratic-axis-symmetry",
    "contentSha256": "76c104399e4f34a486956845692316a8f29673f7a63ac3228c1a14697d4b32b3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "亦可展開 y=x²-4x-5，用 -b/(2a)=4/2=2。",
    "derivedAnswer": "x=2",
    "storedAnswer": "x=2",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=2」。逐項反證其餘選項：「x=4」不成立，因為把 5 與 1 平均，忽略根 -1。；「x=-2」不成立，因為符號平均錯誤。；「x=5」不成立，因為只取其中一根。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-axis-symmetry」講義中先定義；本題目標是選擇簡潔方法求軸，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「選擇簡潔方法求軸」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把因式 x+1 的根讀成 1」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=2」。"
    },
    "difficultyReason": "advanced：由因式式快速求軸；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求選擇簡潔方法求軸，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「函數 y=(x-5)(x+1) 的對稱軸為何？」獨立重算：亦可展開 y=x²-4x-5，用 -b/(2a)=4/2=2。；所得答案為「x=2」。四選項逐項核對：「x=2」=真，兩根為 5、-1，平均 (5-1)/2=2。；「x=4」=假，把 5 與 1 平均，忽略根 -1。；「x=-2」=假，符號平均錯誤。；「x=5」=假，只取其中一根。。難度判定依據：advanced：由因式式快速求軸；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s006-v008",
    "unitId": "u21",
    "skillId": "quadratic-axis-symmetry",
    "contentSha256": "2f12b708457317d3adedd87cf59322be1024317c0df34a2471361583f4175aad",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "化簡 -4/m=-2，所以 m=2；代回 a=2 得軸 -8/4=-2。",
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
      "secondCorrectAnswer": "重新解題得到「2」。逐項反證其餘選項：「-2」不成立，因為代回會得軸 x=2。；「4」不成立，因為把 2m 的 2 漏失或移項錯。；「-4」不成立，因為同時符號與倍數錯誤。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-axis-symmetry」講義中先定義；本題目標是由指定軸反求係數，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由指定軸反求係數」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「只把軸值直接當 m」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「2」。"
    },
    "difficultyReason": "advanced：參數逆向求解；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由指定軸反求係數，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「二次函數 y=mx²+8x-1 的對稱軸為 x=-2，m 為何？」獨立重算：化簡 -4/m=-2，所以 m=2；代回 a=2 得軸 -8/4=-2。；所得答案為「2」。四選項逐項核對：「-2」=假，代回會得軸 x=2。；「4」=假，把 2m 的 2 漏失或移項錯。；「2」=真，-8/(2m)=-2，故 -8=-4m，m=2。；「-4」=假，同時符號與倍數錯誤。。難度判定依據：advanced：參數逆向求解；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s006-v009",
    "unitId": "u21",
    "skillId": "quadratic-axis-symmetry",
    "contentSha256": "ac1e565a859cc89c24741551bf9ca3f833e0fc693625bd4d78074739b3fd9ee8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "檢查 -(-24)/(2×4)=24/8=3。",
    "derivedAnswer": "-24",
    "storedAnswer": "-24",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「-24」。逐項反證其餘選項：「24」不成立，因為漏掉公式前負號。；「-12」不成立，因為分母誤用 a 而非 2a。；「12」不成立，因為符號與分母都錯。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-axis-symmetry」講義中先定義；本題目標是由 a 與軸反求一次項係數，沒有未定義的新符號。",
      "unitConflict": "單位審查：不涉及單位換算。 本題四個選項皆回應同一所求量「由 a 與軸反求一次項係數」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：題幹已給足定義域與比較條件。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把公式改成 b/(2a)」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「-24」。"
    },
    "difficultyReason": "advanced：逆向運用對稱軸公式；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由 a 與軸反求一次項係數，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「某二次函數一般式的 a=4，對稱軸為 x=3。其 b 必為何？」獨立重算：檢查 -(-24)/(2×4)=24/8=3。；所得答案為「-24」。四選項逐項核對：「24」=假，漏掉公式前負號。；「-24」=真，3=-b/8，所以 -b=24，b=-24。；「-12」=假，分母誤用 a 而非 2a。；「12」=假，符號與分母都錯。。難度判定依據：advanced：逆向運用對稱軸公式；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s006-v010",
    "unitId": "u21",
    "skillId": "quadratic-axis-symmetry",
    "contentSha256": "146223d02741cf53bc5acda5dcdc2a07157eecca14742ecb04eb03b51a2a3ead",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "中心線 x=12 m，兩量測點分別在其左右 6 m。",
    "derivedAnswer": "12 m",
    "storedAnswer": "12 m",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「12 m」。逐項反證其餘選項：「6 m」不成立，因為把兩位置差的一半當絕對位置。；「24 m」不成立，因為只相加未平均。；「高度 4 m」不成立，因為所求是水平中心位置。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-axis-symmetry」講義中先定義；本題目標是由等高位置求隧道中心線，沒有未定義的新符號。",
      "unitConflict": "單位審查：水平位置單位公尺，平均後仍為公尺。 本題四個選項皆回應同一所求量「由等高位置求隧道中心線」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：兩點屬同一對稱拱形且高度相同。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把半寬當中心絕對位置」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「12 m」。"
    },
    "difficultyReason": "literacy：定位隧道中心線；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "同一量測基準使 6 m、18 m 是位置而非單純距離；隧道情境要求回答中心線的實際位置。",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由等高位置求隧道中心線，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「隧道拱頂剖面左右兩側在高度 4 m 處的水平位置為 6 m 與 18 m。以同一基準量測，拱頂中心線位置為何？」獨立重算：中心線 x=12 m，兩量測點分別在其左右 6 m。；所得答案為「12 m」。四選項逐項核對：「12 m」=真，(6+18)/2=12。；「6 m」=假，把兩位置差的一半當絕對位置。；「24 m」=假，只相加未平均。；「高度 4 m」=假，所求是水平中心位置。。難度判定依據：literacy：定位隧道中心線；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s006-v011",
    "unitId": "u21",
    "skillId": "quadratic-axis-symmetry",
    "contentSha256": "c5a8d942dd7075fa5df0c53bd4e60c4f3c1ea84306da154e6434a31ec31b4f35",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "14、26 到 20 都是 6 m，所以最高點位於 x=20。",
    "derivedAnswer": "x=20 m",
    "storedAnswer": "x=20 m",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=20 m」。逐項反證其餘選項：「x=12 m」不成立，因為只算兩根差。；「x=6 m」不成立，因為只算半寬。；「y=20 m」不成立，因為最高點在垂直線 x=20 上，不是水平線。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-axis-symmetry」講義中先定義；本題目標是由兩個水面交點找最高點中心線，沒有未定義的新符號。",
      "unitConflict": "單位審查：x 為公尺位置，答案可寫垂直線 x=20 m。 本題四個選項皆回應同一所求量「由兩個水面交點找最高點中心線」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：兩交點同屬水面 y=0，且最高點在其間的對稱軸上。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把橋拱寬度或半寬當位置」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=20 m」。"
    },
    "difficultyReason": "literacy：由跨度端點找中心；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "橋拱與水面的交點提供實際跨度端點；題目問的是最高點所在垂直位置，而非跨度或高度。",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由兩個水面交點找最高點中心線，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「某橋拱模型與水面 y=0 交於 x=14 m 與 x=26 m。橋拱最高點位於哪條垂直線上？」獨立重算：14、26 到 20 都是 6 m，所以最高點位於 x=20。；所得答案為「x=20 m」。四選項逐項核對：「x=12 m」=假，只算兩根差。；「x=6 m」=假，只算半寬。；「y=20 m」=假，最高點在垂直線 x=20 上，不是水平線。；「x=20 m」=真，兩根中點 (14+26)/2=20。。難度判定依據：literacy：由跨度端點找中心；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  },
  {
    "questionId": "u21-s006-v012",
    "unitId": "u21",
    "skillId": "quadratic-axis-symmetry",
    "contentSha256": "48fe68b707fdda8e332ef5bc275f61fd639260df737d24fb2406e21dafb987ca",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewVersion": "human-review-u21-r1",
    "reviewedAt": "2026-07-12",
    "independentSolution": "對稱軸 x=6 m；因 a>0，它也是槽底最低點所在中心線。",
    "derivedAnswer": "x=6 m",
    "storedAnswer": "x=6 m",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新解題得到「x=6 m」。逐項反證其餘選項：「x=-6 m」不成立，因為漏掉 b 的負號。；「x=3 m」不成立，因為把分母誤作 2。；「y=10 m」不成立，因為10 是 y 截距，不是中心線。。",
      "undefinedSymbol": "題幹用語均在技能「quadratic-axis-symmetry」講義中先定義；本題目標是由一般式求實物最低中心線，沒有未定義的新符號。",
      "unitConflict": "單位審查：x 為水平公尺位置；軸方程寫 x=6 m。 本題四個選項皆回應同一所求量「由一般式求實物最低中心線」，沒有把輸入、輸出、座標或物理單位互換。",
      "roundingConflict": "數值審查：全程使用精確值，不需四捨五入。 因此答案位置不受近似規則改變。",
      "domainBoundary": "範圍審查：模型為完整二次剖面，a≠0，公式適用。 題幹端點、正值條件與可行輸入均依原文處理；獨立解題未超出國中會考二次函數範圍。",
      "alternateReading": "語意審查：若把題目誤讀為「把常數項當中心位置」，會落入幹擾選項，但不會形成第二個正確答案。 正確讀法仍唯一指向「x=6 m」。"
    },
    "difficultyReason": "literacy：求集熱槽中心線；需完成 2 個明確推理步驟並排除三種具體錯誤。",
    "literacyContextNecessity": "集熱槽的「中心線」是實際水平位置，必須保留公尺並結合 a>0 解釋為槽底，而非只得到抽象數字。",
    "prerequisiteCheck": "需先能使用 quadratic-opening 的核心概念；本題沒有借用後續技能。",
    "languageCheck": "題幹以臺灣繁體中文寫成，明確要求由一般式求實物最低中心線，條件與選項語法一致。",
    "reviewerDecision": "pass",
    "reviewerNote": "本題「太陽能集熱槽的剖面方程為 y=0.5x²-6x+10，x、y 單位為公尺。槽底中心線為何？」獨立重算：對稱軸 x=6 m；因 a>0，它也是槽底最低點所在中心線。；所得答案為「x=6 m」。四選項逐項核對：「x=-6 m」=假，漏掉 b 的負號。；「x=3 m」=假，把分母誤作 2。；「x=6 m」=真，x=-(-6)/(2×0.5)=6/1=6。；「y=10 m」=假，10 是 y 截距，不是中心線。。難度判定依據：literacy：求集熱槽中心線；需完成 2 個明確推理步驟並排除三種具體錯誤。"
  }
];

export const DRAWING_SPECS=[
  {
    "figureId": "u21-fig-s006-01",
    "drawingSpecId": "u21-draw-s006-01",
    "unitId": "u21",
    "topicId": "u21-graphs",
    "skillId": "quadratic-axis-symmetry",
    "title": "等高點求對稱軸",
    "svgPath": "figures/u21/u21-fig-s006-01.svg",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "altText": "本圖以高對比線條與文字標籤呈現：等高點 A(-5,6)、B(1,6) 的中點垂直線 x=-2 是對稱軸。",
    "drawingSpec": {
      "canvas": {
        "width": 680,
        "height": 400
      },
      "viewBox": "0 0 680 400",
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
      "reviewNote": "人工檢視 u21-fig-s006-01：等高點 A(-5,6)、B(1,6) 的中點垂直線 x=-2 是對稱軸。 已核對曲線方向、標記座標、虛實線語意、文字可讀性與畫布邊界，未以未標刻度洩漏額外答案。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "917a7e9133e809067e49d872a7a39dc85777d49b634b6850b7edc2ad0167f064"
  }
];
