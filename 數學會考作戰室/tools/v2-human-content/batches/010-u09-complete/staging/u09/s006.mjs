// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s006-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-display",
    "skillId": "histogram-read",
    "lockedTitle": "直方圖文字判讀",
    "title": "直方圖文字判讀：相連柱子表示連續區間",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "pie-chart-percent"
      ],
      "explanation": "需理解圓形圖比例、長條圖刻度，並能讀次數分配表。"
    },
    "learningGoals": [
      "區分直方圖與長條圖。",
      "讀懂組界、組距與柱高次數。",
      "處理端點歸屬。",
      "由多柱求總數、門檻內人數與缺柱。",
      "限制由最高柱推論平均或個別值。"
    ],
    "vocabulary": [
      {
        "term": "直方圖",
        "meaning": "以相連長方形呈現連續數值區間次數的圖。"
      },
      {
        "term": "組界",
        "meaning": "相鄰分組的邊界值。"
      },
      {
        "term": "組距",
        "meaning": "組上限與組下限的差。"
      },
      {
        "term": "左含右不含",
        "meaning": "區間 [a,b) 包含 a 但不包含 b。"
      },
      {
        "term": "眾數組",
        "meaning": "次數最高的組。"
      }
    ],
    "notation": [
      {
        "symbol": "[a,b)",
        "meaning": "a≤x<b。"
      },
      {
        "symbol": "f",
        "meaning": "該區間內的次數。"
      }
    ],
    "conceptDevelopment": [
      "直方圖橫軸是連續數值區間，因此柱子通常相連。",
      "在本單元會考範圍內採相同組距且縱軸為次數，柱高可直接比較次數。",
      "邊界值要依括號規則歸組，不能重複或漏掉。",
      "門檻若恰為組界，可精確累加整組；若落在組內，僅靠直方圖通常不能知道組內細分。",
      "最高柱只說哪個區間最常見，不能單獨決定平均。"
    ],
    "definitions": [
      {
        "name": "組次數",
        "statement": "落在指定區間內的資料筆數。"
      },
      {
        "name": "完整分組",
        "statement": "各組互不重疊且合起來涵蓋全部資料。"
      }
    ],
    "formulas": [
      {
        "formula": "總次數＝各柱高度相加",
        "conditions": [
          "縱軸為次數且各組互斥"
        ]
      },
      {
        "formula": "缺柱高度＝總數－其他柱高合計",
        "conditions": [
          "只有一組缺值"
        ]
      },
      {
        "formula": "區間累積次數＝相關完整組柱高相加",
        "conditions": [
          "門檻與組界對齊"
        ]
      }
    ],
    "invalidUseCases": [
      "把組上限 20 當作該柱次數。",
      "資料值 20 同時計入 [10,20) 與 [20,30)。",
      "門檻落在組內卻聲稱精確人數。",
      "由最高柱斷言平均一定在該組。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "讀橫軸組界與縱軸意義。"
      },
      {
        "step": 2,
        "action": "確認端點包含規則。"
      },
      {
        "step": 3,
        "action": "讀柱高作為各組次數。"
      },
      {
        "step": 4,
        "action": "按門檻選完整組累加或相減。"
      },
      {
        "step": 5,
        "action": "判斷結論是否超出分組資料能支持的範圍。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "[10,20) 柱高 7。",
        "solution": [
          "表示 10≤x<20 有 7 筆。"
        ],
        "answer": "7 筆。"
      },
      {
        "id": "L2",
        "prompt": "資料值由 9.8 更正為 10.2，組界是 10。",
        "solution": [
          "原在 [5,10)，新在 [10,15)。"
        ],
        "answer": "前組減 1、後組加 1。"
      },
      {
        "id": "L3",
        "prompt": "20 分鐘內的候診人數。",
        "solution": [
          "若門檻是組界，累加 0–10 與 10–20 兩柱。"
        ],
        "answer": "由前兩柱合計。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "柱子相連只是美觀。",
        "why": "未理解連續區間。",
        "fix": "把每柱寫成不等式。"
      },
      {
        "wrong": "20 算進前後兩組。",
        "why": "忽略端點規則。",
        "fix": "採左含右不含。"
      },
      {
        "wrong": "最高柱就是平均。",
        "why": "混淆眾數組與平均。",
        "fix": "平均需全部資料。"
      },
      {
        "wrong": "只加門檻所在柱。",
        "why": "忽略更低區間也符合。",
        "fix": "累加所有門檻內完整組。"
      }
    ],
    "selfCheck": [
      "每一柱代表哪個不等式？",
      "端點歸哪一組？",
      "縱軸是次數嗎？",
      "我的結論需要組內細節嗎？"
    ],
    "summary": [
      "直方圖呈現連續區間，柱子相連。",
      "組界資料只歸一組。",
      "總數是柱高合計。",
      "分組圖不能支持不存在的組內精確資訊。"
    ],
    "connections": {
      "previous": "長條圖刻度與次數表提供讀圖基礎。",
      "next": [
        "累積次數把直方圖各組從左到右逐步加總。",
        "中位數可由排序位置理解，但本單元不以四分位數解讀圖。"
      ]
    },
    "figureReferences": [
      "u09-fig-hist-01"
    ],
    "accessibilityNotes": "圖的組界、柱高與端點規則完整列於 alt text。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s006-v001",
        "u09-s006-v002",
        "u09-s006-v003",
        "u09-s006-v004",
        "u09-s006-v005",
        "u09-s006-v006",
        "u09-s006-v007",
        "u09-s006-v008",
        "u09-s006-v009",
        "u09-s006-v010",
        "u09-s006-v011",
        "u09-s006-v012"
      ],
      "constructedResponseIds": [
        "u09-s006-cr001",
        "u09-s006-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "明確限制相同組距、縱軸為次數的會考範圍，避免引入密度圖。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需理解圓形圖比例、長條圖刻度，並能讀次數分配表。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "邊界、門檻、資料更正與過度推論均有具體例子。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "3897066e45b5f5ecd801b209d97b50f6001851a7d0e2c0bc5ce46dd9327d3f3a"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s006-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "直方圖中區間 10≤x<20 的柱高為 7，表示什麼？",
      "givenConditions": [
        "區間規則已明示。"
      ],
      "target": "解讀直方圖單一組",
      "choices": [
        "資料值一定是 7",
        "有 7 筆資料介於 10（含）與 20（不含）之間",
        "有 10 筆資料",
        "有 20 筆資料"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "直方圖橫軸是連續區間，縱軸是次數；該柱高 7。",
        "derivedAnswer": "有 7 筆資料介於 10（含）與 20（不含）之間",
        "trustStoredAnswer": false
      },
      "explanation": "要同時讀懂組界與柱高。",
      "steps": [
        "讀橫軸區間。",
        "讀縱軸柱高 7。",
        "套用左含右不含。"
      ],
      "optionAnalysis": [
        {
          "choice": "資料值一定是 7",
          "truth": false,
          "reason": "7 是次數，不是所有資料值。"
        },
        {
          "choice": "有 7 筆資料介於 10（含）與 20（不含）之間",
          "truth": true,
          "reason": "柱高 7 是該組次數。"
        },
        {
          "choice": "有 10 筆資料",
          "truth": false,
          "reason": "10 是組下限。"
        },
        {
          "choice": "有 20 筆資料",
          "truth": false,
          "reason": "20 是組上限。"
        }
      ],
      "misconceptionTarget": "把組界或柱高角色混淆",
      "prerequisiteCheck": {
        "skillIds": [
          "pie-chart-percent"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案單位為筆。",
      "ambiguityAndBoundaryAudit": "20 應歸下一組。",
      "difficultyReason": "直接讀單柱，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": "u09-fig-hist-01",
      "drawingSpecId": "u09-draw-hist-01",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0ccf0b5ca5d50fb967ea228526f4842b90b3a7954ae22aa9831adc0125f6134b"
    },
    {
      "questionId": "u09-s006-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "直方圖三組次數為 4、9、7，資料總數是多少？",
      "givenConditions": [
        "各組互不重疊。"
      ],
      "target": "由直方圖求總次數",
      "choices": [
        "3",
        "9",
        "63",
        "20"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "所有柱高相加得總次數 20。",
        "derivedAnswer": "20",
        "trustStoredAnswer": false
      },
      "explanation": "直方圖的總資料筆數是各組次數合計。",
      "steps": [
        "讀出三柱高度。",
        "相加。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3 是組數。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9 是最高柱。"
        },
        {
          "choice": "63",
          "truth": false,
          "reason": "63 是錯誤相乘。"
        },
        {
          "choice": "20",
          "truth": true,
          "reason": "4+9+7=20。"
        }
      ],
      "misconceptionTarget": "把組數或最高柱當總數",
      "prerequisiteCheck": {
        "skillIds": [
          "pie-chart-percent"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "總數為整數。",
      "ambiguityAndBoundaryAudit": "三組涵蓋全部資料。",
      "difficultyReason": "基礎加總。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "404d29a0434e81916e1a5ffc2c58c3ad98e1b91da997ab5c38b5f44118927c18"
    },
    {
      "questionId": "u09-s006-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "組距相同的直方圖中，哪一柱次數最多？",
      "givenConditions": [
        "限定組距相同且縱軸為次數。"
      ],
      "target": "辨認直方圖高度意義",
      "choices": [
        "最寬的柱",
        "最靠右的柱",
        "最高的柱",
        "最靠左的柱"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "比較縱軸高度即可找到最大次數。",
        "derivedAnswer": "最高的柱",
        "trustStoredAnswer": false
      },
      "explanation": "直方圖的柱相連；組距相同時高度代表次數大小。",
      "steps": [
        "確認縱軸標示次數。",
        "比較柱高。"
      ],
      "optionAnalysis": [
        {
          "choice": "最寬的柱",
          "truth": false,
          "reason": "所有柱寬相同，寬度不表示次數。"
        },
        {
          "choice": "最靠右的柱",
          "truth": false,
          "reason": "位置表示數值區間，不保證次數多。"
        },
        {
          "choice": "最高的柱",
          "truth": true,
          "reason": "組距相同且縱軸為次數時，高度直接表示次數。"
        },
        {
          "choice": "最靠左的柱",
          "truth": false,
          "reason": "位置表示數值區間，不保證次數多。"
        }
      ],
      "misconceptionTarget": "把位置或寬度當次數",
      "prerequisiteCheck": {
        "skillIds": [
          "pie-chart-percent"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無數值運算。",
      "ambiguityAndBoundaryAudit": "條件排除不等組距密度圖。",
      "difficultyReason": "概念辨識，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "80d0b08d524162847396fc8e179c80d4e3906dcdda3a27b1ee0273ec6e75305b"
    },
    {
      "questionId": "u09-s006-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "直方圖各組次數為 [0,10)：3、[10,20)：8、[20,30)：6、[30,40)：3。小於 30 的資料有幾筆？",
      "givenConditions": [
        "左含右不含。"
      ],
      "target": "由直方圖計算門檻以下次數",
      "choices": [
        "17 筆",
        "6 筆",
        "11 筆",
        "20 筆"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "小於 30 包含前三組，合計 3+8+6=17。",
        "derivedAnswer": "17 筆",
        "trustStoredAnswer": false
      },
      "explanation": "門檻 30 位於組界，應完整納入前三組。",
      "steps": [
        "判斷涵蓋哪些區間。",
        "相加前三柱。"
      ],
      "optionAnalysis": [
        {
          "choice": "17 筆",
          "truth": true,
          "reason": "3+8+6=17。"
        },
        {
          "choice": "6 筆",
          "truth": false,
          "reason": "6 只算 20 到 30 組。"
        },
        {
          "choice": "11 筆",
          "truth": false,
          "reason": "11 漏掉 20 到 30 組。"
        },
        {
          "choice": "20 筆",
          "truth": false,
          "reason": "20 是全部資料。"
        }
      ],
      "misconceptionTarget": "只取相鄰一柱",
      "prerequisiteCheck": {
        "skillIds": [
          "pie-chart-percent"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "17 筆。",
      "ambiguityAndBoundaryAudit": "30 不在 [20,30) 但所有小於 30 已完整包含。",
      "difficultyReason": "跨組累加，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6b2e3dd326c554da67e363e078e23021241e2fec1bccd1f935dc669a0070a1d5"
    },
    {
      "questionId": "u09-s006-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "某直方圖總數 30，四柱高度為 5、9、x、6。x 為多少？",
      "givenConditions": [
        "四組完整。"
      ],
      "target": "補直方圖缺柱",
      "choices": [
        "8",
        "9",
        "10",
        "20"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "已知柱合計 20，缺柱 10。",
        "derivedAnswer": "10",
        "trustStoredAnswer": false
      },
      "explanation": "所有柱高總和等於資料總數。",
      "steps": [
        "加總已知柱。",
        "總數扣除。",
        "檢查非負整數。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": false,
          "reason": "減法錯誤。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9 是第二柱。"
        },
        {
          "choice": "10",
          "truth": true,
          "reason": "30-(5+9+6)=10。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "20 是已知合計。"
        }
      ],
      "misconceptionTarget": "把已知合計當缺值",
      "prerequisiteCheck": {
        "skillIds": [
          "pie-chart-percent"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "x=10。",
      "ambiguityAndBoundaryAudit": "唯一缺柱。",
      "difficultyReason": "逆推缺值，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "277ff5d9ae28c362ef4d9ae98bc40697beab9c5b8345944000f35abc5f3a728c"
    },
    {
      "questionId": "u09-s006-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "一資料值恰為 20，分組採 [10,20)、[20,30)。它應落在哪一組？",
      "givenConditions": [
        "區間定義明確。"
      ],
      "target": "判定組界資料歸屬",
      "choices": [
        "[10,20)",
        "[20,30)",
        "兩組都算",
        "兩組都不算"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "依左含右不含規則，20 屬於第二組。",
        "derivedAnswer": "[20,30)",
        "trustStoredAnswer": false
      },
      "explanation": "組界處資料的歸屬必須依區間符號判定。",
      "steps": [
        "讀括號意義。",
        "檢查 20 是否滿足不等式。"
      ],
      "optionAnalysis": [
        {
          "choice": "[10,20)",
          "truth": false,
          "reason": "[10,20) 的右端不包含。"
        },
        {
          "choice": "[20,30)",
          "truth": true,
          "reason": "前組不含 20，後組含 20。"
        },
        {
          "choice": "兩組都算",
          "truth": false,
          "reason": "分組不可重複計數。"
        },
        {
          "choice": "兩組都不算",
          "truth": false,
          "reason": "後組左端包含 20。"
        }
      ],
      "misconceptionTarget": "把端點重複或漏算",
      "prerequisiteCheck": {
        "skillIds": [
          "pie-chart-percent"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案為區間。",
      "ambiguityAndBoundaryAudit": "不涉及估讀。",
      "difficultyReason": "需要精確處理邊界，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e47ce30af9db48a04830b6bdbbf8e107274ec8de4bbd8d7df6adbf1cdeaed5a4"
    },
    {
      "questionId": "u09-s006-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "兩個直方圖各有 40 筆資料。甲圖在中間兩組共有 28 筆，乙圖在中間兩組共有 18 筆。哪一敘述必然正確？",
      "givenConditions": [
        "兩圖組界相同。"
      ],
      "target": "在雙直方圖中判斷可支持結論",
      "choices": [
        "甲圖平均數一定較大",
        "乙圖全距一定較大",
        "甲圖每一筆都比乙圖小",
        "甲圖落在中間兩組的比例較高"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "甲中間比例 70%，乙 45%，因此甲較高；其他敘述資料不足。",
        "derivedAnswer": "甲圖落在中間兩組的比例較高",
        "trustStoredAnswer": false
      },
      "explanation": "直方圖能支持的是組內比例，不應過度推論個別值。",
      "steps": [
        "確認兩圖總數相同。",
        "計算中間兩組比例。",
        "檢查其他選項是否必然。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲圖平均數一定較大",
          "truth": false,
          "reason": "僅憑組次數不能必然比較平均。"
        },
        {
          "choice": "乙圖全距一定較大",
          "truth": false,
          "reason": "未給最小與最大所在位置細節。"
        },
        {
          "choice": "甲圖每一筆都比乙圖小",
          "truth": false,
          "reason": "分組分布不能推出逐筆大小。"
        },
        {
          "choice": "甲圖落在中間兩組的比例較高",
          "truth": true,
          "reason": "同樣總數下 28/40>18/40。"
        }
      ],
      "misconceptionTarget": "由分布外觀過度推論平均或個別值",
      "prerequisiteCheck": {
        "skillIds": [
          "pie-chart-percent"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "比例可寫 70% 與 45%。",
      "ambiguityAndBoundaryAudit": "只主張可由已知次數必然推出者。",
      "difficultyReason": "需要辨識證據界線，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d4b5650cee35bcd5701743bdd5699912a9243523163752a114a7569e8380e1c4"
    },
    {
      "questionId": "u09-s006-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "直方圖五組次數依序 2、7、12、7、2。下列哪一描述最符合？",
      "givenConditions": [
        "組距相同。"
      ],
      "target": "描述直方圖整體形狀",
      "choices": [
        "資料全部相同",
        "資料主要集中在中央組，兩側大致對稱",
        "資料主要集中在最左組",
        "圖呈單調增加"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "觀察柱高序列 2,7,12,7,2，中央集中且左右對稱。",
        "derivedAnswer": "資料主要集中在中央組，兩側大致對稱",
        "trustStoredAnswer": false
      },
      "explanation": "分布形狀要依整體柱高，不可只看最高值。",
      "steps": [
        "比較中央與兩側。",
        "檢查左右對應柱。"
      ],
      "optionAnalysis": [
        {
          "choice": "資料全部相同",
          "truth": false,
          "reason": "仍分布在五組，不是全部相同。"
        },
        {
          "choice": "資料主要集中在中央組，兩側大致對稱",
          "truth": true,
          "reason": "中央最高，兩側成對 7、7 與 2、2。"
        },
        {
          "choice": "資料主要集中在最左組",
          "truth": false,
          "reason": "最左組只有 2。"
        },
        {
          "choice": "圖呈單調增加",
          "truth": false,
          "reason": "到中央後開始下降。"
        }
      ],
      "misconceptionTarget": "把最高柱誤解為所有資料相同",
      "prerequisiteCheck": {
        "skillIds": [
          "pie-chart-percent"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "不涉及計算。",
      "ambiguityAndBoundaryAudit": "只描述組層級形狀，不推論精確平均。",
      "difficultyReason": "整體模式判讀，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "48734b4873763f6ecb0af688a20202ad0a5ff82a8dd3574cd6299cff15251c21"
    },
    {
      "questionId": "u09-s006-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某直方圖各組為 [0,5)、[5,10)、[10,15)，次數 6、9、5。若一筆原記為 9.8，後更正為 10.2，圖會如何改變？",
      "givenConditions": [
        "總數維持 20。"
      ],
      "target": "分析資料更正對直方圖的影響",
      "choices": [
        "第二組減 1，第三組加 1",
        "第一組減 1，第二組加 1",
        "只有第三組加 1",
        "圖完全不變"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "更正前 5≤9.8<10；更正後 10≤10.2<15，所以移動一筆。",
        "derivedAnswer": "第二組減 1，第三組加 1",
        "trustStoredAnswer": false
      },
      "explanation": "單筆更正跨組界時，一柱減一、另一柱加一。",
      "steps": [
        "判定更正前組別。",
        "判定更正後組別。",
        "更新兩組次數。"
      ],
      "optionAnalysis": [
        {
          "choice": "第二組減 1，第三組加 1",
          "truth": true,
          "reason": "9.8 屬第二組，10.2 屬第三組。"
        },
        {
          "choice": "第一組減 1，第二組加 1",
          "truth": false,
          "reason": "9.8 不在第一組。"
        },
        {
          "choice": "只有第三組加 1",
          "truth": false,
          "reason": "資料總數不變，原組也須減 1。"
        },
        {
          "choice": "圖完全不變",
          "truth": false,
          "reason": "跨越組界會改變兩柱。"
        }
      ],
      "misconceptionTarget": "只增不減或忽略組界",
      "prerequisiteCheck": {
        "skillIds": [
          "pie-chart-percent"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "次數變化皆為 1。",
      "ambiguityAndBoundaryAudit": "10 是清楚組界。",
      "difficultyReason": "需動態更新分組，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "36a016dc58cd19a56af8e218440821eea796017bd437fe85a6e2ac8f18f4e65e"
    },
    {
      "questionId": "u09-s006-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "健走活動的步數直方圖中，[8000,10000) 有 35 人，[10000,12000) 有 20 人。活動規定至少 10000 步達標。僅依這兩柱，哪一群可確定達標？",
      "givenConditions": [
        "步數為整數但區間表示仍適用。"
      ],
      "target": "以直方圖判斷門檻資格",
      "choices": [
        "兩組共 55 人",
        "[8000,10000) 的 35 人",
        "[10000,12000) 的 20 人",
        "無人可確定"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "達標門檻恰為組界 10000；第二組左端包含 10000。",
        "derivedAnswer": "[10000,12000) 的 20 人",
        "trustStoredAnswer": false
      },
      "explanation": "門檻與組界重合時可精確判斷整組。",
      "steps": [
        "將門檻對照區間。",
        "套用左含右不含。",
        "計數確定達標者。"
      ],
      "optionAnalysis": [
        {
          "choice": "兩組共 55 人",
          "truth": false,
          "reason": "第一組都小於 10000，不能算達標。"
        },
        {
          "choice": "[8000,10000) 的 35 人",
          "truth": false,
          "reason": "第一組不達標。"
        },
        {
          "choice": "[10000,12000) 的 20 人",
          "truth": true,
          "reason": "第二組所有值都至少 10000。"
        },
        {
          "choice": "無人可確定",
          "truth": false,
          "reason": "第二組可確定達標。"
        }
      ],
      "misconceptionTarget": "忽略端點包含規則",
      "prerequisiteCheck": {
        "skillIds": [
          "pie-chart-percent"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "20 人。",
      "ambiguityAndBoundaryAudit": "只依題列兩柱作答，不推論其他組。",
      "difficultyReason": "需把活動規則對應組界。",
      "literacyNecessityReason": "健走門檻與直方圖組界共同決定可確定達標人數。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9ad042f042dc7d6153097049e6028ed6084f8a0dacff36ed6617835e71346fe3"
    },
    {
      "questionId": "u09-s006-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "醫院候診時間直方圖顯示 0 至未滿 10 分鐘有 12 人、10 至未滿 20 分鐘有 18 人、20 至未滿 30 分鐘有 10 人。公告稱『超過一半病人在未滿 20 分鐘內看診』。判斷為何？",
      "givenConditions": [
        "各區間採左端包含、右端不包含。"
      ],
      "target": "用直方圖檢核服務公告",
      "choices": [
        "合理，30/40=75%",
        "不合理，只有 18 人",
        "合理，因最高柱是 18",
        "無法判斷，因沒有平均數"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "總數40；未滿20分鐘包含前兩組，共12+18=30人；30/40=75%>50%。",
        "derivedAnswer": "合理，30/40=75%",
        "trustStoredAnswer": false
      },
      "explanation": "『未滿20分鐘』需要累加所有上界不超過20的前兩組。",
      "steps": [
        "加總總人數。",
        "加總門檻內組別。",
        "計算比例。"
      ],
      "optionAnalysis": [
        {
          "choice": "合理，30/40=75%",
          "truth": true,
          "reason": "未滿20分鐘含前兩組，共30人，占75%。"
        },
        {
          "choice": "不合理，只有 18 人",
          "truth": false,
          "reason": "只算第二組漏掉 0–10。"
        },
        {
          "choice": "合理，因最高柱是 18",
          "truth": false,
          "reason": "最高柱不能直接表示累積比例。"
        },
        {
          "choice": "無法判斷，因沒有平均數",
          "truth": false,
          "reason": "不需平均數即可算比例。"
        }
      ],
      "misconceptionTarget": "只看單一最高柱",
      "prerequisiteCheck": {
        "skillIds": [
          "pie-chart-percent"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "75% 精確。",
      "ambiguityAndBoundaryAudit": "使用『未滿20分鐘』並明示左含右不含，排除恰為20分鐘的歸組歧義。",
      "difficultyReason": "需處理累積與公告門檻。",
      "literacyNecessityReason": "候診服務承諾必須由門檻內累積人數驗證。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2f447773a21fdf6d0b2703117d1b015fa51bd291893e9fa0eb768a6ed677f62c"
    },
    {
      "questionId": "u09-s006-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "降雨量直方圖以每 10 毫米分組。報告說『最多天數落在 20–30 毫米，因此平均降雨量一定在 20–30 毫米』。何者最適當？",
      "givenConditions": [
        "不需精確原始資料。"
      ],
      "target": "限制由直方圖最高柱推論平均",
      "choices": [
        "一定正確，最高柱就是平均",
        "不一定，因平均必在最左組",
        "一定錯，平均不能落在最高柱",
        "不一定，最高柱只指出眾多資料所在組，不能單獨決定平均"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "直方圖最高柱描述最常出現的區間；若其他組有極端高值，平均可能被拉高。",
        "derivedAnswer": "不一定，最高柱只指出眾多資料所在組，不能單獨決定平均",
        "trustStoredAnswer": false
      },
      "explanation": "不可把眾數組與平均數混為一談。",
      "steps": [
        "辨識最高柱意義。",
        "回想平均使用全部資料。",
        "判斷結論只能說不一定。"
      ],
      "optionAnalysis": [
        {
          "choice": "一定正確，最高柱就是平均",
          "truth": false,
          "reason": "最高柱代表最高次數，不等於平均。"
        },
        {
          "choice": "不一定，因平均必在最左組",
          "truth": false,
          "reason": "平均不必在最左組。"
        },
        {
          "choice": "一定錯，平均不能落在最高柱",
          "truth": false,
          "reason": "平均可能落在最高柱，只是不一定。"
        },
        {
          "choice": "不一定，最高柱只指出眾多資料所在組，不能單獨決定平均",
          "truth": true,
          "reason": "平均受所有組的資料影響。"
        }
      ],
      "misconceptionTarget": "把眾數組當平均所在組",
      "prerequisiteCheck": {
        "skillIds": [
          "pie-chart-percent"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "無取位。",
      "ambiguityAndBoundaryAudit": "結論採『不一定』而非斷定相反。",
      "difficultyReason": "需評估統計敘述可否由圖支持。",
      "literacyNecessityReason": "降雨報告的結論涉及平均，單靠最高柱不足，情境是素養判斷核心。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "16bcc5a0998fd66612324488cd700045fcd9ad703deb2190f4a2962e78b3e96a"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s006-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "某班40位學生的通勤時間直方圖分組次數如下：0至未滿10分鐘5人、10至未滿20分鐘12人、20至未滿30分鐘15人、30至未滿40分鐘8人。請找出次數最多組、計算未滿20分鐘者比例，並說明邊界值20分鐘應歸在哪一組。",
      "givenConditions": [],
      "target": "正確判讀連續區間、合併次數與邊界歸屬。",
      "requiredWork": [
        "指出最高次數15所對應組。",
        "未滿20合併前兩組。",
        "依左含右不含規則處理20。"
      ],
      "standardSolution": [
        "次數最多組為20至未滿30分鐘，共15人。",
        "未滿20分鐘者=5+12=17人，占17/40=42.5%。",
        "20分鐘不屬於10至未滿20，而屬於20至未滿30組。"
      ],
      "alternativeMethod": "可用區間符號寫[0,10)、[10,20)、[20,30)、[30,40)。",
      "reasoningSteps": [
        "確認柱子代表連續區間。",
        "比較各組次數。",
        "合併所有上界小於等於20的前兩組。",
        "依『至未滿』判斷邊界。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "最多組、17人與42.5%、20分鐘歸屬全部正確。"
        },
        {
          "score": 2,
          "criteria": "最多組與邊界正確，但比例或合併有一處小錯；或三項中兩項完整。"
        },
        {
          "score": 1,
          "criteria": "能正確指出最多組，或明確知道20分鐘進入下一組。"
        },
        {
          "score": 0,
          "criteria": "把直方圖柱間區間當類別且邊界重複計入。"
        }
      ],
      "partialCreditRules": [
        "17/40可保留分數；只寫17人而無比例，該部分一半。",
        "區間符號若端點括號寫反，邊界項不給分。"
      ],
      "followThroughPolicy": "比例算術錯誤不影響區間判讀分。",
      "unitAndNotationRules": "通勤時間以分鐘；相對次數可用42.5%或0.425。",
      "answerOnlyPolicy": "只列三個答案且全對，最高2分。",
      "figureId": "u09-fig-hist-01",
      "drawingSpecId": "u09-draw-hist-01",
      "independentReview": {
        "independentDerivation": "最高15在20至未滿30；未滿20為17/40；20由左含右不含進第三組。",
        "boundaryAndAmbiguityAudit": "所有組距相同，無密度圖需求；本題只讀次數。",
        "rubricAlignmentEvidence": "同時考查柱高、合併區間與端點規則。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "571d4f38f219e7c665359c1ffb475eccdbde140c30a757380cbf22e78a02df9c"
    },
    {
      "questionId": "u09-s006-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "histogram-read",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "兩份直方圖都整理100筆成績。甲圖組距10分，某柱顯示60至未滿70分有18人；乙圖組距20分，某柱顯示60至未滿80分有35人。有人說乙圖該柱較高，所以60至未滿70分的人一定比甲圖多。請評估這個說法，並寫出乙圖目前能確定的資訊。",
      "givenConditions": [],
      "target": "辨認不同組距使柱子涵蓋範圍不同，不能直接比較子區間。",
      "requiredWork": [
        "比較兩柱所代表區間。",
        "指出乙圖35人包含60至未滿70與70至未滿80。",
        "說明無法由合併組推知前半組確切次數。"
      ],
      "standardSolution": [
        "說法不成立。甲柱只代表60至未滿70，共18人；乙柱代表60至未滿80，共35人，範圍是甲的兩倍寬。",
        "乙圖只能確定60至未滿80合計35人；其中60至未滿70可能少於、等於或多於18人，只要與70至未滿80合計35即可。"
      ],
      "alternativeMethod": "可舉兩個可能分配反證：乙可為10與25，或20與15；同一柱35卻導致前半組不同。",
      "reasoningSteps": [
        "讀出兩圖組距。",
        "比較柱子涵蓋的資料範圍。",
        "將乙柱視為兩個10分子區間的合計。",
        "用不唯一分配說明資訊不足。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "否定說法、清楚比較10與20分組距，並說明乙只能確定合計35且子區間不唯一。"
        },
        {
          "score": 2,
          "criteria": "結論正確且知道乙範圍較寬，但未舉例或未完整說明子區間不確定。"
        },
        {
          "score": 1,
          "criteria": "能指出兩柱區間不同，不能只比柱高。"
        },
        {
          "score": 0,
          "criteria": "直接以35>18判定乙在60至未滿70較多。"
        }
      ],
      "partialCreditRules": [
        "若舉例兩子區間次數需皆為非負整數且合計35。",
        "只說『組距不同』而無指出乙含兩段，最高1分。"
      ],
      "followThroughPolicy": "不涉及算術跟隨錯誤；重點是資訊範圍。",
      "unitAndNotationRules": "成績以分；人數以人。區間端點需維持左含右不含語意。",
      "answerOnlyPolicy": "只寫『不一定』無理由，最高1分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "乙的35是[60,80)總數，不能識別[60,70)；例如10+25或20+15都可。",
        "boundaryAndAmbiguityAudit": "兩圖樣本量相同但組距不同，排除分母差異，聚焦組距。",
        "rubricAlignmentEvidence": "滿分需展示不可識別性，而非僅否定。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "befa903ef915fe50f0a54ca413f37587440fcf58c0df61384ae3b5c4d7bf4418"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s006-v001-semantic-r1",
      "questionId": "u09-s006-v001",
      "unitId": "u09",
      "skillId": "histogram-read",
      "independentRecalculation": "直方圖橫軸是連續區間，縱軸是次數；該柱高 7。",
      "correctChoiceCheck": "獨立計算得到「有 7 筆資料介於 10（含）與 20（不含）之間」，位於索引 1。",
      "distractorAudit": [
        "7 是次數，不是所有資料值。",
        "10 是組下限。",
        "20 是組上限。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「有 7 筆資料介於 10（含）與 20（不含）之間」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「直方圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "20 應歸下一組。",
      "difficultyEvidence": "直接讀單柱，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b98fc4a123aa1057183cf5dd2da58d14f071c0c5ab17598d7e152f2431097fc9"
    },
    {
      "reviewId": "u09-s006-v002-semantic-r1",
      "questionId": "u09-s006-v002",
      "unitId": "u09",
      "skillId": "histogram-read",
      "independentRecalculation": "所有柱高相加得總次數 20。",
      "correctChoiceCheck": "獨立計算得到「20」，位於索引 3。",
      "distractorAudit": [
        "3 是組數。",
        "9 是最高柱。",
        "63 是錯誤相乘。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「20」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「直方圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "三組涵蓋全部資料。",
      "difficultyEvidence": "基礎加總。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "e6a3d691c7636b115b2e245503f86a0d871630b9cfc010febdf8a061e93451d9"
    },
    {
      "reviewId": "u09-s006-v003-semantic-r1",
      "questionId": "u09-s006-v003",
      "unitId": "u09",
      "skillId": "histogram-read",
      "independentRecalculation": "比較縱軸高度即可找到最大次數。",
      "correctChoiceCheck": "獨立計算得到「最高的柱」，位於索引 2。",
      "distractorAudit": [
        "所有柱寬相同，寬度不表示次數。",
        "位置表示數值區間，不保證次數多。",
        "位置表示數值區間，不保證次數多。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「最高的柱」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「直方圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "條件排除不等組距密度圖。",
      "difficultyEvidence": "概念辨識，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "aa723490c566c587b47c68abe3bc22d01439910290d4eeae15ec31ae097c1878"
    },
    {
      "reviewId": "u09-s006-v004-semantic-r1",
      "questionId": "u09-s006-v004",
      "unitId": "u09",
      "skillId": "histogram-read",
      "independentRecalculation": "小於 30 包含前三組，合計 3+8+6=17。",
      "correctChoiceCheck": "獨立計算得到「17 筆」，位於索引 0。",
      "distractorAudit": [
        "6 只算 20 到 30 組。",
        "11 漏掉 20 到 30 組。",
        "20 是全部資料。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「17 筆」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「直方圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "30 不在 [20,30) 但所有小於 30 已完整包含。",
      "difficultyEvidence": "跨組累加，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "277f0f6c571d3a9a062a332a2ebade196ccb367208ad4068370a56645f3735b1"
    },
    {
      "reviewId": "u09-s006-v005-semantic-r1",
      "questionId": "u09-s006-v005",
      "unitId": "u09",
      "skillId": "histogram-read",
      "independentRecalculation": "已知柱合計 20，缺柱 10。",
      "correctChoiceCheck": "獨立計算得到「10」，位於索引 2。",
      "distractorAudit": [
        "減法錯誤。",
        "9 是第二柱。",
        "20 是已知合計。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「10」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「直方圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "唯一缺柱。",
      "difficultyEvidence": "逆推缺值，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "f21d487262ba5a4bb846469e9daf89b110ddfceb7ae744f64a694ab2428b23a7"
    },
    {
      "reviewId": "u09-s006-v006-semantic-r1",
      "questionId": "u09-s006-v006",
      "unitId": "u09",
      "skillId": "histogram-read",
      "independentRecalculation": "依左含右不含規則，20 屬於第二組。",
      "correctChoiceCheck": "獨立計算得到「[20,30)」，位於索引 1。",
      "distractorAudit": [
        "[10,20) 的右端不包含。",
        "分組不可重複計數。",
        "後組左端包含 20。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「[20,30)」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「直方圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不涉及估讀。",
      "difficultyEvidence": "需要精確處理邊界，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "3fbeeb53e5bfed7f3084e5349a8e6596618f21dc9651f18b51246c227ada5fd9"
    },
    {
      "reviewId": "u09-s006-v007-semantic-r1",
      "questionId": "u09-s006-v007",
      "unitId": "u09",
      "skillId": "histogram-read",
      "independentRecalculation": "甲中間比例 70%，乙 45%，因此甲較高；其他敘述資料不足。",
      "correctChoiceCheck": "獨立計算得到「甲圖落在中間兩組的比例較高」，位於索引 3。",
      "distractorAudit": [
        "僅憑組次數不能必然比較平均。",
        "未給最小與最大所在位置細節。",
        "分組分布不能推出逐筆大小。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「甲圖落在中間兩組的比例較高」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「直方圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只主張可由已知次數必然推出者。",
      "difficultyEvidence": "需要辨識證據界線，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "4a21cc4f9d912bc665f0bfef746e62302f1d1ebe6c38faab6652210779921c95"
    },
    {
      "reviewId": "u09-s006-v008-semantic-r1",
      "questionId": "u09-s006-v008",
      "unitId": "u09",
      "skillId": "histogram-read",
      "independentRecalculation": "觀察柱高序列 2,7,12,7,2，中央集中且左右對稱。",
      "correctChoiceCheck": "獨立計算得到「資料主要集中在中央組，兩側大致對稱」，位於索引 1。",
      "distractorAudit": [
        "仍分布在五組，不是全部相同。",
        "最左組只有 2。",
        "到中央後開始下降。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「資料主要集中在中央組，兩側大致對稱」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「直方圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只描述組層級形狀，不推論精確平均。",
      "difficultyEvidence": "整體模式判讀，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "355b5bd4a346db9398cf6197fbe556297b5019dee55ac421337898f0a6703ad6"
    },
    {
      "reviewId": "u09-s006-v009-semantic-r1",
      "questionId": "u09-s006-v009",
      "unitId": "u09",
      "skillId": "histogram-read",
      "independentRecalculation": "更正前 5≤9.8<10；更正後 10≤10.2<15，所以移動一筆。",
      "correctChoiceCheck": "獨立計算得到「第二組減 1，第三組加 1」，位於索引 0。",
      "distractorAudit": [
        "9.8 不在第一組。",
        "資料總數不變，原組也須減 1。",
        "跨越組界會改變兩柱。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「第二組減 1，第三組加 1」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「直方圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "10 是清楚組界。",
      "difficultyEvidence": "需動態更新分組，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b2c0e8614f287b20bb25e2ae0e495461d61791eb2b49a2eb027d72ea06636782"
    },
    {
      "reviewId": "u09-s006-v010-semantic-r1",
      "questionId": "u09-s006-v010",
      "unitId": "u09",
      "skillId": "histogram-read",
      "independentRecalculation": "達標門檻恰為組界 10000；第二組左端包含 10000。",
      "correctChoiceCheck": "獨立計算得到「[10000,12000) 的 20 人」，位於索引 2。",
      "distractorAudit": [
        "第一組都小於 10000，不能算達標。",
        "第一組不達標。",
        "第二組可確定達標。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「[10000,12000) 的 20 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「直方圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只依題列兩柱作答，不推論其他組。",
      "difficultyEvidence": "需把活動規則對應組界。",
      "literacyEvidence": "健走門檻與直方圖組界共同決定可確定達標人數。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "73dac72f73c6b4c1adf0791adc5f0965d8da2a94a1a3b152176e32ee21782820"
    },
    {
      "reviewId": "u09-s006-v011-semantic-r1",
      "questionId": "u09-s006-v011",
      "unitId": "u09",
      "skillId": "histogram-read",
      "independentRecalculation": "總數40；未滿20分鐘包含前兩組，共12+18=30人；30/40=75%>50%。",
      "correctChoiceCheck": "獨立計算得到「合理，30/40=75%」，位於索引 0。",
      "distractorAudit": [
        "只算第二組漏掉 0–10。",
        "最高柱不能直接表示累積比例。",
        "不需平均數即可算比例。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「合理，30/40=75%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「直方圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "使用『未滿20分鐘』並明示左含右不含，排除恰為20分鐘的歸組歧義。",
      "difficultyEvidence": "需處理累積與公告門檻。",
      "literacyEvidence": "候診服務承諾必須由門檻內累積人數驗證。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "90b5ee6fc8c193c7225144112d06350b3f4b6eeafccc11ddcb946a48bdca8f63"
    },
    {
      "reviewId": "u09-s006-v012-semantic-r1",
      "questionId": "u09-s006-v012",
      "unitId": "u09",
      "skillId": "histogram-read",
      "independentRecalculation": "直方圖最高柱描述最常出現的區間；若其他組有極端高值，平均可能被拉高。",
      "correctChoiceCheck": "獨立計算得到「不一定，最高柱只指出眾多資料所在組，不能單獨決定平均」，位於索引 3。",
      "distractorAudit": [
        "最高柱代表最高次數，不等於平均。",
        "平均不必在最左組。",
        "平均可能落在最高柱，只是不一定。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「不一定，最高柱只指出眾多資料所在組，不能單獨決定平均」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「直方圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "結論採『不一定』而非斷定相反。",
      "difficultyEvidence": "需評估統計敘述可否由圖支持。",
      "literacyEvidence": "降雨報告的結論涉及平均，單靠最高柱不足，情境是素養判斷核心。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "cd9aeeaa1e7581d90579ab546c6dc1e117703415f6486dc5fb9938c7d33d3f95"
    }
  ],
  "drawingSpecs": [
    {
      "drawingSpecId": "u09-draw-hist-01",
      "unitId": "u09",
      "skillId": "histogram-read",
      "file": "figures/u09/u09-fig-hist-01.svg",
      "purpose": "展示連續等組距直方圖與10≤x<20柱高7。",
      "canvas": {
        "width": 640,
        "height": 400,
        "viewBox": "0 0 640 400"
      },
      "coordinateSystem": "基線y=330；x=100對應0，每10單位100像素；每1次數30像素，上限8。",
      "elements": [
        "四個相連柱：[0,10)高4、[10,20)高7、[20,30)高5、[30,40)高3。",
        "柱x=100,200,300,400且各寬100，無間隙。",
        "橫軸標0、10、20、30、40；縱軸標0至8。",
        "第二柱頂標7。"
      ],
      "labels": {
        "title": "連續資料的次數直方圖",
        "xAxis": "資料值x",
        "yAxis": "次數"
      },
      "scale": {
        "toScale": true,
        "warning": "柱子相連表示連續區間；左端含、右端不含依題目規則判讀。"
      },
      "visibleHiddenRules": "柱與座標軸實線；相鄰柱共享邊界；無隱藏線。",
      "altText": "直方圖四組次數依序4、7、5、3；10含至20不含區間的柱高是7。",
      "mobileReadability": "組寬100px，端點標籤16px，第二柱頂數值18px。",
      "answerLeakage": "圖不寫出完整句子答案，只呈現區間與次數。",
      "assertions": [
        "four adjacent rect bars",
        "second bar height corresponds 7",
        "x labels 0,10,20,30,40",
        "title and desc present"
      ],
      "figureId": "u09-fig-hist-01",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "f483f484e0f656a26d7909849f29ef528adb259baeeffe4748a63ef7751fbb49"
    }
  ]
};
