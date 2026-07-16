// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s005-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-display",
    "skillId": "pie-chart-percent",
    "lockedTitle": "圓形圖與百分比",
    "title": "圓形圖與百分比：部分和全體及角度互換",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "line-chart-text"
      ],
      "explanation": "需能讀統計圖尺度並理解相對次數與百分比。"
    },
    "learningGoals": [
      "理解整圓 360° 對應 100%。",
      "在人數、比例與圓心角間互換。",
      "由缺少部分補完整比例。",
      "比較不同總數圓形圖的實際人數。",
      "審核過半、樣本分母與預算轉移敘述。"
    ],
    "vocabulary": [
      {
        "term": "圓形圖",
        "meaning": "用扇形表示各類占全體比例的圖。"
      },
      {
        "term": "圓心角",
        "meaning": "扇形在圓心形成的角。"
      },
      {
        "term": "百分點",
        "meaning": "兩百分比直接相減的單位。"
      },
      {
        "term": "全體",
        "meaning": "圓形圖的分母，必須由標題或說明確認。"
      }
    ],
    "notation": [
      {
        "symbol": "360°",
        "meaning": "整個圓。"
      },
      {
        "symbol": "p%",
        "meaning": "全體的 p/100。"
      },
      {
        "symbol": "部分量",
        "meaning": "全體量×所占比例。"
      }
    ],
    "conceptDevelopment": [
      "圓形圖只呈現比例；要知道人數仍需全體總數。",
      "圓心角與比例成正比，90°就是四分之一。",
      "同一圖內可以比較角度或比例；不同圖總數不同時，比例高不保證人數多。",
      "兩比例的直接差用百分點，倍數則用比例相除。",
      "解讀調查圓形圖前，要確認圓代表全校、回覆者還是其他群體。",
      "圓形圖以完整圓三百六十度代表全體百分之百，同一類別的圓心角、百分比與人數可依共同總數互相換算。由比例求人數要乘總數，由部分人數反推全體要除以比例；比較不同圓形圖時，不能只看扇形比例，必須先換成相同單位的實際人數。若圖表只涵蓋回覆者，該分母不能在缺乏代表性證據時直接外推到全校或其他母群。"
    ],
    "definitions": [
      {
        "name": "扇形比例",
        "statement": "圓心角除以 360°。"
      },
      {
        "name": "過半",
        "statement": "比例嚴格大於 50%；恰為 50% 不是超過一半。"
      }
    ],
    "formulas": [
      {
        "formula": "比例＝圓心角÷360°",
        "conditions": [
          "角度以度為單位"
        ]
      },
      {
        "formula": "部分量＝全體量×比例",
        "conditions": [
          "比例與全體對應同一分類"
        ]
      },
      {
        "formula": "全體量＝部分量÷比例",
        "conditions": [
          "比例不為 0"
        ]
      }
    ],
    "invalidUseCases": [
      "把 72° 當成 72%。",
      "不同學校只比圓形圖扇形大小便判人數。",
      "把 48% 領先說成已過半。",
      "把回覆者比例直接稱為全校確定比例。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "先找圓代表的全體與總數。"
      },
      {
        "step": 2,
        "action": "統一為比例、角度或人數。"
      },
      {
        "step": 3,
        "action": "使用 360°↔100% 轉換。"
      },
      {
        "step": 4,
        "action": "缺類別用整體扣除。"
      },
      {
        "step": 5,
        "action": "跨圖比較時轉成相同實際量或相同率。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "90° 占多少？",
        "solution": [
          "90÷360＝1/4。"
        ],
        "answer": "25%。",
        "why": "圓形圖以完整圓三百六十度代表全體百分之百，九十度是其中四分之一。用九十除三百六十得到零點二五，再換成百分之二十五；不能把角度數直接當成百分比。"
      },
      {
        "id": "L2",
        "prompt": "72° 類別有 18 人。",
        "solution": [
          "72°＝20%。",
          "18÷0.2＝90。"
        ],
        "answer": "全體 90 人。",
        "why": "七十二度占整圓五分之一，表示十八人是全體五分之一。由部分反推全體要用十八除五分之一得到九十；再用九十乘五分之一回到十八，可驗證運算方向。"
      },
      {
        "id": "L3",
        "prompt": "甲校 200 人占 30%，乙校 300 人占 25%。",
        "solution": [
          "甲 60 人，乙 75 人。"
        ],
        "answer": "乙實際人數較多。",
        "why": "兩個圓形圖的總人數不同，只比較百分之三十與二十五會忽略母體規模。分別乘回總數後，甲六十人、乙七十五人，才是在相同的人數單位上完成比較。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "角度 90 就答 90%。",
        "why": "忽略整圓 360。",
        "fix": "角度除 360。"
      },
      {
        "wrong": "30% 一定比 25% 人多。",
        "why": "兩圖總數不同。",
        "fix": "各自乘總數。"
      },
      {
        "wrong": "教育提高到 20% 就需移 20%總額。",
        "why": "未扣原本 15%。",
        "fix": "只轉移增加的 5 個百分點。"
      },
      {
        "wrong": "48% 是最大類就稱過半。",
        "why": "最大與超過 50%不同。",
        "fix": "直接比 50%。"
      }
    ],
    "selfCheck": [
      "這個圓的分母是誰？",
      "角度、比例與人數是否統一？",
      "跨圖總數相同嗎？",
      "敘述要的是最高、領先還是過半？"
    ],
    "summary": [
      "整圓 360° 對應 100%。",
      "部分量等於全體乘比例。",
      "不同總數不能只比百分比判人數。",
      "圓形圖的分母與樣本範圍決定外推邊界。"
    ],
    "connections": {
      "previous": "相對次數提供圓形圖各扇形比例。",
      "next": [
        "直方圖改用相連長方形呈現連續數值區間。",
        "代表值技能會進一步摘要圓形圖背後的原始資料。"
      ]
    },
    "figureReferences": [
      "u09-fig-pie-01"
    ],
    "accessibilityNotes": "扇形角度與比例皆在文字替代說明列出，不要求依面積目測。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s005-v001",
        "u09-s005-v002",
        "u09-s005-v003",
        "u09-s005-v004",
        "u09-s005-v005",
        "u09-s005-v006",
        "u09-s005-v007",
        "u09-s005-v008",
        "u09-s005-v009",
        "u09-s005-v010",
        "u09-s005-v011",
        "u09-s005-v012"
      ],
      "constructedResponseIds": [
        "u09-s005-cr001",
        "u09-s005-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "涵蓋角度、比例、人數、跨圖比較與分母外推。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需能讀統計圖尺度並理解相對次數與百分比。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "明確區分百分點、過半門檻與樣本內比例。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "15cf7a99956cb0d577587b7fb6351b9c90490801a41e7ce224605d1276affdab"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s005-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "圓形圖中閱讀類占 30%。若全班 40 人，喜歡閱讀的有幾人？",
      "givenConditions": [
        "總數 40 人。"
      ],
      "target": "由百分比求人數",
      "choices": [
        "12 人",
        "10 人",
        "20 人",
        "30 人"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "40×0.3=12。",
        "derivedAnswer": "12 人",
        "trustStoredAnswer": false
      },
      "explanation": "圓形圖百分比乘總數得到該類人數。 百分之三十是全班四十人的零點三，四十乘零點三得十二人；十二除四十也回到百分之三十，故比例與人數一致。",
      "steps": [
        "把 30% 化為 0.3。",
        "乘全班 40 人。",
        "以十二人除四十人回算百分之三十，完成反向驗證。"
      ],
      "optionAnalysis": [
        {
          "choice": "12 人",
          "truth": true,
          "reason": "40×30%=12。"
        },
        {
          "choice": "10 人",
          "truth": false,
          "reason": "10 是 25% 的人數。"
        },
        {
          "choice": "20 人",
          "truth": false,
          "reason": "20 是一半。"
        },
        {
          "choice": "30 人",
          "truth": false,
          "reason": "30 是百分比數字，不是人數。"
        }
      ],
      "misconceptionTarget": "把百分比數字直接當人數 把百分比中的三十直接當三十人，沒有乘上全班總數四十。",
      "prerequisiteCheck": {
        "skillIds": [
          "line-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "結果 12 人為整數。",
      "ambiguityAndBoundaryAudit": "分類比例精確。",
      "difficultyReason": "基本百分比乘法。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "98c2f741f5eaf0c9f25b05e96fcdd017b2934f936e7adc7964a9eade76ffc22f"
    },
    {
      "questionId": "u09-s005-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "圓形圖某一扇形圓心角為 90°，占全體多少？",
      "givenConditions": [
        "整圓為 360°。"
      ],
      "target": "由圓心角求比例",
      "choices": [
        "10%",
        "40%",
        "25%",
        "90%"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "90/360=0.25。",
        "derivedAnswer": "25%",
        "trustStoredAnswer": false
      },
      "explanation": "整個圓 360° 對應 100%。 整圓三百六十度代表百分之百，九十度是四分之一圓，所以比例為四分之一即百分之二十五；角度九十不能直接當百分之九十。",
      "steps": [
        "用扇形角除以 360°。",
        "轉成百分比。",
        "用百分之二十五乘三百六十度回得九十度，核對圖形比例。"
      ],
      "optionAnalysis": [
        {
          "choice": "10%",
          "truth": false,
          "reason": "10% 對應 36°。"
        },
        {
          "choice": "40%",
          "truth": false,
          "reason": "40% 對應 144°。"
        },
        {
          "choice": "25%",
          "truth": true,
          "reason": "90÷360=1/4=25%。"
        },
        {
          "choice": "90%",
          "truth": false,
          "reason": "90° 不能直接當 90%。"
        }
      ],
      "misconceptionTarget": "把角度數當百分比 把扇形角九十度直接抄成百分之九十，沒有除以整圓三百六十度。",
      "prerequisiteCheck": {
        "skillIds": [
          "line-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "25% 精確。",
      "ambiguityAndBoundaryAudit": "扇形角唯一。",
      "difficultyReason": "基本角度比例換算。",
      "literacyNecessityReason": null,
      "figureId": "u09-fig-pie-01",
      "drawingSpecId": "u09-draw-pie-01",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c830a0f6cfb20d3fb224d96712b0e4566d7c0bf44a733f5ab8f03ac9ceb8ca5f"
    },
    {
      "questionId": "u09-s005-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "圓形圖四類比例為 35%、25%、20% 和其餘。其餘占多少？",
      "givenConditions": [
        "分類完整。"
      ],
      "target": "補圓形圖缺少比例",
      "choices": [
        "10%",
        "20%",
        "25%",
        "80%"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "已知合計 80%，其餘 20%。",
        "derivedAnswer": "20%",
        "trustStoredAnswer": false
      },
      "explanation": "完整圓形圖各類比例總和為 100%。 三個已知類別百分之三十五、二十五、二十合為百分之八十，完整圓尚缺百分之二十；加回後四類正好百分之百。",
      "steps": [
        "加總已知比例。",
        "由 100% 扣除。",
        "將其餘百分之二十加回已知百分之八十，驗算完整圓。"
      ],
      "optionAnalysis": [
        {
          "choice": "10%",
          "truth": false,
          "reason": "小數或百分比減法錯誤。"
        },
        {
          "choice": "20%",
          "truth": true,
          "reason": "100%-35%-25%-20%=20%。"
        },
        {
          "choice": "25%",
          "truth": false,
          "reason": "25% 是第二類。"
        },
        {
          "choice": "80%",
          "truth": false,
          "reason": "80% 是已知三類合計。"
        }
      ],
      "misconceptionTarget": "把已知合計當剩餘 把已知合計百分之八十當成其餘比例，沒有由百分之百扣除。",
      "prerequisiteCheck": {
        "skillIds": [
          "line-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案 20%。",
      "ambiguityAndBoundaryAudit": "其餘類別唯一。",
      "difficultyReason": "基本總和補值。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "644fe11d9cc71f745d4bccc11dedbfaf6085a180da13703a12d4c7dde70eb9a7"
    },
    {
      "questionId": "u09-s005-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "某圓形圖中 A 類占 40%，B 類占 25%。A 比 B 多占多少個百分點？",
      "givenConditions": [
        "同一全體。"
      ],
      "target": "比較圓形圖類別占比差",
      "choices": [
        "15%（相對增加率）",
        "65 個百分點",
        "1.6 個百分點",
        "15 個百分點"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "兩比例直接相減：40-25=15。",
        "derivedAnswer": "15 個百分點",
        "trustStoredAnswer": false
      },
      "explanation": "比較兩個百分比的差通常用百分點。 兩個占比直接相減得到四十減二十五等於十五個百分點；若問相對增加率才會再以百分之二十五為分母，兩種量名稱不同。",
      "steps": [
        "讀出兩比例。",
        "相減。",
        "使用百分點單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "15%（相對增加率）",
          "truth": false,
          "reason": "直接差應稱百分點，不是相對增加率。"
        },
        {
          "choice": "65 個百分點",
          "truth": false,
          "reason": "65 是相加。"
        },
        {
          "choice": "1.6 個百分點",
          "truth": false,
          "reason": "1.6 是比例倍數。"
        },
        {
          "choice": "15 個百分點",
          "truth": true,
          "reason": "40%-25%=15 個百分點。"
        }
      ],
      "misconceptionTarget": "混淆百分點與百分比變化率 把十五個百分點寫成相對增加百分之十五，混淆差值與變化率。",
      "prerequisiteCheck": {
        "skillIds": [
          "line-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "15 個百分點。",
      "ambiguityAndBoundaryAudit": "題目明問占比差。",
      "difficultyReason": "需精確使用統計語言，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "992ff9d50482a0ddc9d0006432afacbadeaf6fc0cb32bca4e905fadab2dd9a86"
    },
    {
      "questionId": "u09-s005-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "某圓形圖中 72° 的類別有 18 人，全體有多少人？",
      "givenConditions": [
        "人數須為整數。"
      ],
      "target": "由扇形角與部分量反推總數",
      "choices": [
        "25 人",
        "90 人",
        "72 人",
        "360 人"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "比例為 1/5；總數＝18÷1/5=90。",
        "derivedAnswer": "90 人",
        "trustStoredAnswer": false
      },
      "explanation": "由部分人數與扇形比例可反推全體。 七十二度占整圓五分之一，十八人就是全體五分之一；以十八除五分之一得到九十人，九十乘五分之一再回到十八。",
      "steps": [
        "角度換成比例。",
        "用部分除以比例。",
        "驗證 90×1/5=18。"
      ],
      "optionAnalysis": [
        {
          "choice": "25 人",
          "truth": false,
          "reason": "25 是錯把 18 除以 0.72。"
        },
        {
          "choice": "90 人",
          "truth": true,
          "reason": "72/360=1/5，18 是全體的 1/5，所以全體 90。"
        },
        {
          "choice": "72 人",
          "truth": false,
          "reason": "72 是角度。"
        },
        {
          "choice": "360 人",
          "truth": false,
          "reason": "360 是整圓角度，不是人數。"
        }
      ],
      "misconceptionTarget": "把角度直接當人數 把扇形七十二度當成七十二人，或用十八直接乘五分之一。",
      "prerequisiteCheck": {
        "skillIds": [
          "line-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "90 人精確。",
      "ambiguityAndBoundaryAudit": "18 人與 20% 相容。",
      "difficultyReason": "需反用比例，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7727845e933496d6cb1f3324531dd77c671688a40409e2c7721361e3aee5f9d8"
    },
    {
      "questionId": "u09-s005-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "圓形圖中甲類 144°、乙類 108°。甲類人數是乙類的幾倍？",
      "givenConditions": [
        "倍數無單位。"
      ],
      "target": "用角度比比較類別大小",
      "choices": [
        "4/3 倍",
        "1/3 倍",
        "3/4 倍",
        "36 倍"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "144÷108=4/3。",
        "derivedAnswer": "4/3 倍",
        "trustStoredAnswer": false
      },
      "explanation": "同一圓形圖內，各類人數與圓心角成正比。 同一圓中人數比例等於圓心角比例，甲比乙為一百四十四比一百零八，約分得到四比三，所以甲是乙的三分之四倍。",
      "steps": [
        "建立角度比。",
        "約分 144:108。",
        "以乙角一百零八乘三分之四回得甲角一百四十四，驗證倍數方向。"
      ],
      "optionAnalysis": [
        {
          "choice": "4/3 倍",
          "truth": true,
          "reason": "同一全體下人數比等於角度比 144:108=4:3。"
        },
        {
          "choice": "1/3 倍",
          "truth": false,
          "reason": "1/3 是差比錯誤。"
        },
        {
          "choice": "3/4 倍",
          "truth": false,
          "reason": "3/4 顛倒甲乙。"
        },
        {
          "choice": "36 倍",
          "truth": false,
          "reason": "36 是角度差。"
        }
      ],
      "misconceptionTarget": "把角度差當倍數 用角度差三十六當倍數，或把甲乙次序顛倒成四分之三。",
      "prerequisiteCheck": {
        "skillIds": [
          "line-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "4/3 可保留分數。",
      "ambiguityAndBoundaryAudit": "甲確實大於乙。",
      "difficultyReason": "比例推理，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "94ac17272b87b5dea7e7ff872ebf31828c3b9504d893c501a2a5fcc25884447b"
    },
    {
      "questionId": "u09-s005-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "一圓形圖各類人數皆為整數，總數為 50。下列哪個百分比不可能精確出現？",
      "givenConditions": [
        "百分比宣稱精確。"
      ],
      "target": "檢查百分比與離散總數的可行性",
      "choices": [
        "10%",
        "24%",
        "33%",
        "46%"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "逐一乘 50；只有 0.33×50=16.5 非整數。",
        "derivedAnswer": "33%",
        "trustStoredAnswer": false
      },
      "explanation": "人數型圓形圖若百分比標示為精確值，對應人數必為整數。 精確百分比乘總數五十必須得到整數人；百分之三十三給十六點五人而不可能，其他三個比例分別給五、十二、二十三人。",
      "steps": [
        "將各百分比乘總數。",
        "檢查是否為整數。",
        "逐項列出對應人數，只有百分之三十三產生非整數十六點五。"
      ],
      "optionAnalysis": [
        {
          "choice": "10%",
          "truth": false,
          "reason": "50×10%=5 人可行。"
        },
        {
          "choice": "24%",
          "truth": false,
          "reason": "50×24%=12 人可行。"
        },
        {
          "choice": "33%",
          "truth": true,
          "reason": "50×33%=16.5 人，不是整數。"
        },
        {
          "choice": "46%",
          "truth": false,
          "reason": "50×46%=23 人可行。"
        }
      ],
      "misconceptionTarget": "忽略人數不能是小數 只檢查百分比介於零與一百，忽略人數資料必須是整數。",
      "prerequisiteCheck": {
        "skillIds": [
          "line-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "不做四捨五入。",
      "ambiguityAndBoundaryAudit": "若百分比是約數則可能；題目明示精確。",
      "difficultyReason": "需結合整數限制，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "86adb38a6dc5553321b52441932ab36bc6df4a3e530fa4c8875de096b5ccd92a"
    },
    {
      "questionId": "u09-s005-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "甲校 200 人的圓形圖中運動類占 30%；乙校 300 人中占 25%。哪校運動類人數較多？",
      "givenConditions": [
        "兩校總數不同。"
      ],
      "target": "跨兩個圓形圖比較實際量",
      "choices": [
        "乙校，75 人",
        "甲校，60 人",
        "甲校，因 30% 較高",
        "兩校相同"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "甲 200×0.3=60；乙 300×0.25=75。",
        "derivedAnswer": "乙校，75 人",
        "trustStoredAnswer": false
      },
      "explanation": "比較不同總數的圓形圖，必須把比例轉為實際量。 甲校百分之三十雖較高，但總數較小，換算為六十人；乙校百分之二十五乘三百為七十五人，因此乙校實際人數較多。",
      "steps": [
        "分別算兩校人數。",
        "比較 60 與 75。",
        "把六十與七十五分別除回各校總數，核對原百分比。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙校，75 人",
          "truth": true,
          "reason": "甲 60 人，乙 75 人。"
        },
        {
          "choice": "甲校，60 人",
          "truth": false,
          "reason": "甲確為 60，但少於 75。"
        },
        {
          "choice": "甲校，因 30% 較高",
          "truth": false,
          "reason": "比例較高不代表實際人數較多。"
        },
        {
          "choice": "兩校相同",
          "truth": false,
          "reason": "60 不等於 75。"
        }
      ],
      "misconceptionTarget": "只比較百分比 只比較三十與二十五兩個百分比，沒有把不同學校總人數納入。",
      "prerequisiteCheck": {
        "skillIds": [
          "line-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "人數皆為整數。",
      "ambiguityAndBoundaryAudit": "比較目標是人數，不是比例。",
      "difficultyReason": "跨圖反直覺比較，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a07197cacb090eac46fccfaf3cbe21af0c93eede2e119cd191adc84fe713e235"
    },
    {
      "questionId": "u09-s005-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "圓形圖三類角度為 120°、80°、x°，第四類占 25%。x 為多少？",
      "givenConditions": [
        "角度總和 360°。"
      ],
      "target": "整合角度與百分比補缺值",
      "choices": [
        "45°",
        "90°",
        "160°",
        "70°"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "先將 25% 轉成 90°，再由 360° 扣除其餘三角。",
        "derivedAnswer": "70°",
        "trustStoredAnswer": false
      },
      "explanation": "同一圖可混合角度與百分比，但要先統一表示。 第四類百分之二十五先換成九十度，已知角合為一百二十加八十加九十等於二百九十，整圓剩餘七十度給第三類。",
      "steps": [
        "25% 換成 90°。",
        "加已知角度。",
        "由 360° 扣除。"
      ],
      "optionAnalysis": [
        {
          "choice": "45°",
          "truth": false,
          "reason": "45° 是 12.5%。"
        },
        {
          "choice": "90°",
          "truth": false,
          "reason": "90° 是第四類本身。"
        },
        {
          "choice": "160°",
          "truth": false,
          "reason": "160° 是已知兩角之差或錯算。"
        },
        {
          "choice": "70°",
          "truth": true,
          "reason": "第四類 25%=90°，所以 x=360-120-80-90=70。"
        }
      ],
      "misconceptionTarget": "直接把 25 當 25° 把百分之二十五直接當二十五度，導致角度與比例混在同一算式。",
      "prerequisiteCheck": {
        "skillIds": [
          "line-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "x=70°。",
      "ambiguityAndBoundaryAudit": "四類完整。",
      "difficultyReason": "兩種表示轉換後求缺值，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5b0e4d44d5a6508c5d7168308bab7aa0d3dbb87814e9c0cd3e7acdaca2f0cbff"
    },
    {
      "questionId": "u09-s005-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "家庭支出圓形圖：房租 40%、飲食 25%、交通 10%、教育 15%、其他 10%。月支出 50,000 元，若要把教育支出提高到 20% 且總支出不變，至少需從其他項目移多少元？",
      "givenConditions": [
        "單位元。"
      ],
      "target": "用圓形圖規畫固定總額內的預算轉移",
      "choices": [
        "5,000 元",
        "2,500 元",
        "7,500 元",
        "10,000 元"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "教育由 15% 到 20%，增加 5%；總額固定，所以需轉移 2,500 元。",
        "derivedAnswer": "2,500 元",
        "trustStoredAnswer": false
      },
      "explanation": "圓形圖預算調整要看比例差，不是看新比例全部。 教育比例只增加五個百分點，總支出五萬元固定，所以需轉移五萬元的百分之五即二千五百元；百分之二十是調整後總額，不是新增額。",
      "steps": [
        "求比例增加 5%。",
        "乘固定總支出。",
        "說明其他項合計需減同額。"
      ],
      "optionAnalysis": [
        {
          "choice": "5,000 元",
          "truth": false,
          "reason": "5,000 是 10%。"
        },
        {
          "choice": "2,500 元",
          "truth": true,
          "reason": "教育增加 5 個百分點，50,000×5%=2,500。"
        },
        {
          "choice": "7,500 元",
          "truth": false,
          "reason": "7,500 是原教育支出。"
        },
        {
          "choice": "10,000 元",
          "truth": false,
          "reason": "10,000 是提高後教育支出。"
        }
      ],
      "misconceptionTarget": "把新教育總額當成需移金額 直接算教育新總額一萬元當轉移金額，漏扣原本百分之十五。",
      "prerequisiteCheck": {
        "skillIds": [
          "line-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "2,500 元精確。",
      "ambiguityAndBoundaryAudit": "題目不指定從哪一項移，只問至少總移轉額。",
      "difficultyReason": "需把政策變更轉成比例差。",
      "literacyNecessityReason": "家庭總支出固定使『提高比例』必然伴隨其他項轉移，情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cfce3743952b32c69829073cb2e1eea703267d813e2eea27075caa9c71d9a759"
    },
    {
      "questionId": "u09-s005-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "選舉民調圓形圖顯示甲 48%、乙 47%、未決定 5%，樣本 1,000 人。媒體稱甲『已確定過半』。判斷何者合理？",
      "givenConditions": [
        "樣本 1,000 人。"
      ],
      "target": "審核民調中的過半敘述",
      "choices": [
        "合理，甲比乙多",
        "合理，甲有 480 人",
        "不合理，因未決定者一定全投乙",
        "不合理，48% 尚未超過 50%"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "甲 480 人，占 48%；過半門檻需超過 500 人，故未確定過半。",
        "derivedAnswer": "不合理，48% 尚未超過 50%",
        "trustStoredAnswer": false
      },
      "explanation": "圓形圖敘述要區分『最高』、『領先』與『過半』。 過半必須嚴格超過百分之五十，甲目前百分之四十八只有四百八十人；領先乙一個百分點不等於跨過五百人的過半門檻。",
      "steps": [
        "確認過半門檻。",
        "比較 48% 與 50%。",
        "考慮未決定者的不確定性。"
      ],
      "optionAnalysis": [
        {
          "choice": "合理，甲比乙多",
          "truth": false,
          "reason": "領先 1 個百分點仍未達過半。"
        },
        {
          "choice": "合理，甲有 480 人",
          "truth": false,
          "reason": "480/1000 仍是 48%。"
        },
        {
          "choice": "不合理，因未決定者一定全投乙",
          "truth": false,
          "reason": "未決定者去向未知，不能假定全投乙。"
        },
        {
          "choice": "不合理，48% 尚未超過 50%",
          "truth": true,
          "reason": "48% 小於 50%，領先不等於過半。"
        }
      ],
      "misconceptionTarget": "把相對領先誤當絕對過半 把最高或領先一個百分點誤當已過半，沒有比較百分之五十門檻。",
      "prerequisiteCheck": {
        "skillIds": [
          "line-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "比例皆為標示值。",
      "ambiguityAndBoundaryAudit": "不推論真實選舉結果，只審核圖上敘述。",
      "difficultyReason": "需辨認政治報導用詞門檻。",
      "literacyNecessityReason": "民調中的未決定者與過半門檻決定結論是否成立。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3e543e71862127d01c210a1c670e807ffabce57ba8d2dd4f3fabbdd66d109eac"
    },
    {
      "questionId": "u09-s005-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "學校午餐圓形圖中素食占 12%，但調查只問有回覆的 250 人，全校有 1,000 人。下列敘述何者最適當？",
      "givenConditions": [
        "人數 30 為整數。"
      ],
      "target": "辨認圓形圖分母與外推限制",
      "choices": [
        "全校一定有 120 人素食",
        "全校一定只有 30 人素食",
        "可說回覆者中約 30 人選素食，不能直接斷定全校有 120 人",
        "12% 不能換算任何人數"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "回覆者素食人數約 30；要估全校還需樣本代表性與抽樣資訊。",
        "derivedAnswer": "可說回覆者中約 30 人選素食，不能直接斷定全校有 120 人",
        "trustStoredAnswer": false
      },
      "explanation": "圓形圖的分母是回覆者，不一定是全校。 圖的分母只有二百五十名回覆者，百分之十二約為三十人；未提供抽樣代表性時，不能把同一比例直接套到全校一千人。",
      "steps": [
        "辨認圖的母體是 250 名回覆者。",
        "計算 30 人。",
        "限制外推範圍。"
      ],
      "optionAnalysis": [
        {
          "choice": "全校一定有 120 人素食",
          "truth": false,
          "reason": "把樣本比例直接套到全校並稱確定。"
        },
        {
          "choice": "全校一定只有 30 人素食",
          "truth": false,
          "reason": "30 是回覆樣本內人數，不是全校總數。"
        },
        {
          "choice": "可說回覆者中約 30 人選素食，不能直接斷定全校有 120 人",
          "truth": true,
          "reason": "250×12%=30；樣本未必代表全校。"
        },
        {
          "choice": "12% 不能換算任何人數",
          "truth": false,
          "reason": "可對回覆者換算 30 人。"
        }
      ],
      "misconceptionTarget": "忽略樣本範圍 忽略圖表母群只有回覆者，直接外推全校一定有一百二十人。",
      "prerequisiteCheck": {
        "skillIds": [
          "line-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "若 12% 為四捨五入值則約 30 人。",
      "ambiguityAndBoundaryAudit": "題目明示全校與回覆者不同。",
      "difficultyReason": "需同時處理比例與推論邊界。",
      "literacyNecessityReason": "午餐規畫若錯把回覆樣本當全校，會導致採購錯估，因此情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c901a30ae7f031eac5c9f64b1e4ae2c23af0aa777ac528e1b2f58e82d46bc73c"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s005-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "某校480名學生最喜歡的運動圓形圖中，籃球占35%、羽球占25%、游泳占15%，其餘為其他運動。請求：(1) 其他運動百分比；(2) 羽球與游泳各有多少人；(3) 籃球扇形圓心角。",
      "givenConditions": [],
      "target": "在百分比、人數與圓心角間正確換算。",
      "requiredWork": [
        "百分比總和以100%為全體。",
        "人數用總人數乘比例。",
        "圓心角用360°乘比例。"
      ],
      "standardSolution": [
        "其他=100%-35%-25%-15%=25%。",
        "羽球=480×25%=120人；游泳=480×15%=72人。",
        "籃球圓心角=360°×35%=126°。",
        "檢查人數時，羽球一百二十加游泳七十二只是題目指定兩類；籃球角一百二十六度除三百六十也回到百分之三十五，百分比、人數與角度換算彼此一致。"
      ],
      "alternativeMethod": "可先求1%=4.8人，再乘25與15；角度也可用35/100×360。",
      "reasoningSteps": [
        "補足百分比至100%。",
        "把百分比改成小數或分數。",
        "乘總人數求人數。",
        "乘360°求圓心角。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "其他25%、羽球120人、游泳72人及籃球126°全部正確且有方法。"
        },
        {
          "score": 2,
          "criteria": "三類任務中兩類完整正確，或僅一個乘法算術錯。"
        },
        {
          "score": 1,
          "criteria": "能正確補出25%，或正確完成一項人數或角度換算。"
        },
        {
          "score": 0,
          "criteria": "把百分比直接當人數或角度，無正確換算。"
        }
      ],
      "partialCreditRules": [
        "羽球與其他百分比同為25%，不可因此把其他人數誤當題目要求。",
        "角度少寫°僅扣表達，不全扣。"
      ],
      "followThroughPolicy": "若其他百分比算錯，不影響羽球、游泳與籃球的獨立換算得分。",
      "unitAndNotationRules": "比例用%；人數用人；圓心角用度數符號°。",
      "answerOnlyPolicy": "四個答案全對但無過程，最高2分。",
      "figureId": "u09-fig-pie-01",
      "drawingSpecId": "u09-draw-pie-01",
      "independentReview": {
        "independentDerivation": "剩餘25%；480/4=120，480×0.15=72，360×0.35=126。",
        "boundaryAndAmbiguityAudit": "四類互斥且完整，總人數480可使指定人數為整數。",
        "rubricAlignmentEvidence": "百分比補值、人數換算與角度換算分別受評。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "a620a6ea9619cc1407282613698658bb21fbee76707e4791f34a017b87b3ecfa",
      "commonErrors": [
        "把三個已知比例合計百分之七十五當作其他運動比例，沒有用百分之百扣除。",
        "求籃球圓心角時以四百八十乘百分之三十五，算成人數而非用三百六十度換角。"
      ]
    },
    {
      "questionId": "u09-s005-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "pie-chart-percent",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "一張圓形圖原有A、B、C三類，圓心角分別為144°、90°、126°。若新增一個有30人的D類後，重新作圖時D類占全體20%，請求原全體人數，以及新圖中A類的百分比與圓心角。",
      "givenConditions": [],
      "target": "由新增類別比例反推新舊總數，再重算原類比例。",
      "requiredWork": [
        "以D類30人占新全體20%求新總數。",
        "扣除D類求原總數。",
        "先由舊角度求A舊人數，再用新分母求新比例與角度。"
      ],
      "standardSolution": [
        "新全體=30÷0.20=150人。",
        "原全體=150-30=120人。",
        "A原占144/360=40%，A人數=120×40%=48人。",
        "新圖A比例=48/150=32%，新圓心角=360°×32%=115.2°。",
        "新圖中 A 類四十八人占一百五十人的百分之三十二，對應一百一十五點二度；D 類三十人加原一百二十人也正好給新總數一百五十，前後總量一致。"
      ],
      "alternativeMethod": "A新角度也可用人數比例48:150直接算48/150×360=115.2°。",
      "reasoningSteps": [
        "由已知部分與比例反推新總量。",
        "移除新增D求舊總量。",
        "把A舊角度換成舊比例與人數。",
        "保留A人數不變，改用新總量。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "原總數120、A新比例32%及新角115.2°全部正確且轉換清楚。"
        },
        {
          "score": 2,
          "criteria": "新舊總數與A人數正確，但新比例或角度有一處算術錯。"
        },
        {
          "score": 1,
          "criteria": "能由30÷20%求出新總數150，或能由144°判定A占40%。"
        },
        {
          "score": 0,
          "criteria": "把30人當原總數，或直接保留A為40%而未考慮新分母。"
        }
      ],
      "partialCreditRules": [
        "若新角寫115°但未說明四捨五入，最高2分；精確值115.2°。",
        "若只答新總數150而題目問原總數，該項不完整。"
      ],
      "followThroughPolicy": "若原總數早期算錯，但後續能用A舊比例求人數並以新分母重算，可依一致性給方法分。",
      "unitAndNotationRules": "人數為整數；比例%；角度°，本題角度可有小數。",
      "answerOnlyPolicy": "只寫120、32%、115.2°，無推導最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "D=20%對應30故新總150、舊120；A舊40%=48人；48/150=0.32、角115.2。",
        "boundaryAndAmbiguityAudit": "新增D不改變A、B、C人數已由「新增」語意確立。",
        "rubricAlignmentEvidence": "評分跨越反推總量、保持人數與重新正規化三層推理。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "80b56824e2974309b1a2ca275b6215ff97feaa95abbabeb5b2ae7227f7ada268",
      "commonErrors": [
        "把新增 D 類三十人當成原全體的百分之二十，沒有先反推新全體一百五十。",
        "保留 A 類舊百分之四十不變，忽略新增 D 後 A 人數不變但共同分母已增加。"
      ]
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s005-v001-semantic-r1",
      "questionId": "u09-s005-v001",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "independentRecalculation": "40×0.3=12。",
      "correctChoiceCheck": "獨立計算得到「12 人」，位於索引 0。",
      "distractorAudit": [
        "10 是 25% 的人數。",
        "20 是一半。",
        "30 是百分比數字，不是人數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「12 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「圓形圖與百分比」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "分類比例精確。",
      "difficultyEvidence": "基本百分比乘法。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "28554c98cc6f2bcbe608d088e1593978b2ed3e8d4f1606f8b47853ff89481768"
    },
    {
      "reviewId": "u09-s005-v002-semantic-r1",
      "questionId": "u09-s005-v002",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "independentRecalculation": "90/360=0.25。",
      "correctChoiceCheck": "獨立計算得到「25%」，位於索引 2。",
      "distractorAudit": [
        "10% 對應 36°。",
        "40% 對應 144°。",
        "90° 不能直接當 90%。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「25%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「圓形圖與百分比」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "扇形角唯一。",
      "difficultyEvidence": "基本角度比例換算。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "57ae724f8cb49ddff1773a2a650a38dbc8a6bc7585a32f6005994ae6b6aea0c3"
    },
    {
      "reviewId": "u09-s005-v003-semantic-r1",
      "questionId": "u09-s005-v003",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "independentRecalculation": "已知合計 80%，其餘 20%。",
      "correctChoiceCheck": "獨立計算得到「20%」，位於索引 1。",
      "distractorAudit": [
        "小數或百分比減法錯誤。",
        "25% 是第二類。",
        "80% 是已知三類合計。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「20%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「圓形圖與百分比」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "其餘類別唯一。",
      "difficultyEvidence": "基本總和補值。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "94b4d6161fe490b90389b76559e19a82ed70725532cd56bff222a167360fbfb2"
    },
    {
      "reviewId": "u09-s005-v004-semantic-r1",
      "questionId": "u09-s005-v004",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "independentRecalculation": "兩比例直接相減：40-25=15。",
      "correctChoiceCheck": "獨立計算得到「15 個百分點」，位於索引 3。",
      "distractorAudit": [
        "直接差應稱百分點，不是相對增加率。",
        "65 是相加。",
        "1.6 是比例倍數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「15 個百分點」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「圓形圖與百分比」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目明問占比差。",
      "difficultyEvidence": "需精確使用統計語言，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ee2fb69d5754da2e422ec51e1c4a757feedec3ea57167d16ccd1f58443b6d2e0"
    },
    {
      "reviewId": "u09-s005-v005-semantic-r1",
      "questionId": "u09-s005-v005",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "independentRecalculation": "比例為 1/5；總數＝18÷1/5=90。",
      "correctChoiceCheck": "獨立計算得到「90 人」，位於索引 1。",
      "distractorAudit": [
        "25 是錯把 18 除以 0.72。",
        "72 是角度。",
        "360 是整圓角度，不是人數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「90 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「圓形圖與百分比」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "18 人與 20% 相容。",
      "difficultyEvidence": "需反用比例，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b3aa706e781bb9d00bfc4cbd13a728a2826e76a672ea5193000af912dc5dffbf"
    },
    {
      "reviewId": "u09-s005-v006-semantic-r1",
      "questionId": "u09-s005-v006",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "independentRecalculation": "144÷108=4/3。",
      "correctChoiceCheck": "獨立計算得到「4/3 倍」，位於索引 0。",
      "distractorAudit": [
        "1/3 是差比錯誤。",
        "3/4 顛倒甲乙。",
        "36 是角度差。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「4/3 倍」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「圓形圖與百分比」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "甲確實大於乙。",
      "difficultyEvidence": "比例推理，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "73856295aa5c6a1b431646b3a58b5c788da4116833cf0fb421783729ad4099a0"
    },
    {
      "reviewId": "u09-s005-v007-semantic-r1",
      "questionId": "u09-s005-v007",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "independentRecalculation": "逐一乘 50；只有 0.33×50=16.5 非整數。",
      "correctChoiceCheck": "獨立計算得到「33%」，位於索引 2。",
      "distractorAudit": [
        "50×10%=5 人可行。",
        "50×24%=12 人可行。",
        "50×46%=23 人可行。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「33%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「圓形圖與百分比」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "若百分比是約數則可能；題目明示精確。",
      "difficultyEvidence": "需結合整數限制，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9cac7425ad1fc847bd8298e735401865093e218942062cf030b98f7ecfddcecc"
    },
    {
      "reviewId": "u09-s005-v008-semantic-r1",
      "questionId": "u09-s005-v008",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "independentRecalculation": "甲 200×0.3=60；乙 300×0.25=75。",
      "correctChoiceCheck": "獨立計算得到「乙校，75 人」，位於索引 0。",
      "distractorAudit": [
        "甲確為 60，但少於 75。",
        "比例較高不代表實際人數較多。",
        "60 不等於 75。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「乙校，75 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「圓形圖與百分比」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "比較目標是人數，不是比例。",
      "difficultyEvidence": "跨圖反直覺比較，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "774d282de25938f6a8d8e0ec678fd17783e8cb94a09e3a4b54bb24f33537621c"
    },
    {
      "reviewId": "u09-s005-v009-semantic-r1",
      "questionId": "u09-s005-v009",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "independentRecalculation": "先將 25% 轉成 90°，再由 360° 扣除其餘三角。",
      "correctChoiceCheck": "獨立計算得到「70°」，位於索引 3。",
      "distractorAudit": [
        "45° 是 12.5%。",
        "90° 是第四類本身。",
        "160° 是已知兩角之差或錯算。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「70°」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「圓形圖與百分比」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "四類完整。",
      "difficultyEvidence": "兩種表示轉換後求缺值，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9782d4ae8bb14105efe9f35f9bf645795e819c9cfa14bec756e34ad885834d72"
    },
    {
      "reviewId": "u09-s005-v010-semantic-r1",
      "questionId": "u09-s005-v010",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "independentRecalculation": "教育由 15% 到 20%，增加 5%；總額固定，所以需轉移 2,500 元。",
      "correctChoiceCheck": "獨立計算得到「2,500 元」，位於索引 1。",
      "distractorAudit": [
        "5,000 是 10%。",
        "7,500 是原教育支出。",
        "10,000 是提高後教育支出。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「2,500 元」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「圓形圖與百分比」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目不指定從哪一項移，只問至少總移轉額。",
      "difficultyEvidence": "需把政策變更轉成比例差。",
      "literacyEvidence": "家庭總支出固定使『提高比例』必然伴隨其他項轉移，情境不可刪除。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b388a68886640c02c8da2d692536d583418dd9926af27e25748b87b27a1f6d5d"
    },
    {
      "reviewId": "u09-s005-v011-semantic-r1",
      "questionId": "u09-s005-v011",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "independentRecalculation": "甲 480 人，占 48%；過半門檻需超過 500 人，故未確定過半。",
      "correctChoiceCheck": "獨立計算得到「不合理，48% 尚未超過 50%」，位於索引 3。",
      "distractorAudit": [
        "領先 1 個百分點仍未達過半。",
        "480/1000 仍是 48%。",
        "未決定者去向未知，不能假定全投乙。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「不合理，48% 尚未超過 50%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「圓形圖與百分比」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不推論真實選舉結果，只審核圖上敘述。",
      "difficultyEvidence": "需辨認政治報導用詞門檻。",
      "literacyEvidence": "民調中的未決定者與過半門檻決定結論是否成立。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c94f1c468a61b97b44168b7e30624abcb91acdb9046bf7eeb390395d8cc99ea0"
    },
    {
      "reviewId": "u09-s005-v012-semantic-r1",
      "questionId": "u09-s005-v012",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "independentRecalculation": "回覆者素食人數約 30；要估全校還需樣本代表性與抽樣資訊。",
      "correctChoiceCheck": "獨立計算得到「可說回覆者中約 30 人選素食，不能直接斷定全校有 120 人」，位於索引 2。",
      "distractorAudit": [
        "把樣本比例直接套到全校並稱確定。",
        "30 是回覆樣本內人數，不是全校總數。",
        "可對回覆者換算 30 人。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「可說回覆者中約 30 人選素食，不能直接斷定全校有 120 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「圓形圖與百分比」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目明示全校與回覆者不同。",
      "difficultyEvidence": "需同時處理比例與推論邊界。",
      "literacyEvidence": "午餐規畫若錯把回覆樣本當全校，會導致採購錯估，因此情境不可刪除。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c04e991ea73a4cc73922d5c75b1f3d362b53d6e1d11adca8a040c8ea2fd06e66"
    }
  ],
  "drawingSpecs": [
    {
      "drawingSpecId": "u09-draw-pie-01",
      "unitId": "u09",
      "skillId": "pie-chart-percent",
      "file": "figures/u09/u09-fig-pie-01.svg",
      "purpose": "呈現90°扇形占完整圓的四分之一。",
      "canvas": {
        "width": 520,
        "height": 400,
        "viewBox": "0 0 520 400"
      },
      "coordinateSystem": "圓心(240,210)，半徑130；起始半徑向上，順時針90°至向右。",
      "elements": [
        "完整圓輪廓半徑130。",
        "90°扇形路徑由圓心到(240,80)，沿圓弧到(370,210)，回圓心。",
        "圓心處畫直角記號，弧內標90°。",
        "其餘270°保持未強調。"
      ],
      "labels": {
        "title": "圓形圖中的90°扇形",
        "xAxis": null,
        "yAxis": null
      },
      "scale": {
        "toScale": true,
        "warning": "扇形角度按90°精確繪製；百分比仍須用90÷360計算。"
      },
      "visibleHiddenRules": "圓周與半徑實線；無隱藏線。",
      "altText": "一個完整圓中，自12點方向到3點方向的扇形為90度，佔四分之一圓。",
      "mobileReadability": "圓直徑260px，90°標籤20px，直角記號邊長18px。",
      "answerLeakage": "不在圖上標示25%或四分之一，只標已知90°。",
      "assertions": [
        "circle radius=130",
        "sector path 90 degrees",
        "right-angle marker",
        "text includes 90°",
        "title and desc present"
      ],
      "figureId": "u09-fig-pie-01",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "65568bec8df361ab824162b4750c907fd7aa843e911ae3a9b878c496d5f9f64d"
    }
  ]
};
