// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s009-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-summary",
    "skillId": "mean-basic",
    "lockedTitle": "平均數",
    "title": "平均數：先合計再平均分配",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "contingency-table"
      ],
      "explanation": "需能從資料表取出完整資料，並能做整數、小數與分數的四則運算。"
    },
    "learningGoals": [
      "理解平均數是總和平均分給每一筆的結果。",
      "正確計算一組資料的平均數。",
      "由平均數與筆數回推總和或缺值。",
      "判斷極端值對平均數的影響。",
      "在有單位與取位要求時正確表達答案。"
    ],
    "vocabulary": [
      {
        "term": "平均數",
        "meaning": "所有資料總和除以資料筆數所得的代表值。"
      },
      {
        "term": "資料總和",
        "meaning": "把每一筆資料依原符號相加的結果。"
      },
      {
        "term": "資料筆數",
        "meaning": "資料值的個數，不是不同數值的種類數。"
      },
      {
        "term": "極端值",
        "meaning": "明顯大於或小於大多數資料的值，可能拉動平均數。"
      },
      {
        "term": "平均分配",
        "meaning": "在總量不變下，把總量平均分到每一筆。"
      }
    ],
    "notation": [
      {
        "symbol": "x̄",
        "meaning": "一組資料的平均數；讀作 x bar，本單元可直接寫「平均數」。"
      },
      {
        "symbol": "n",
        "meaning": "資料筆數。"
      },
      {
        "symbol": "Σx",
        "meaning": "資料總和；Σ 表示把所有資料相加。"
      }
    ],
    "conceptDevelopment": [
      "平均數不是一定出現在原資料中的數；它描述把總量平均分配後每一筆應有多少。",
      "計算順序是先求資料總和，再除以資料筆數。筆數要逐筆計，不可只數不同數值。",
      "若已知平均數與筆數，資料總和等於平均數乘筆數，這是解缺值的重要橋梁。",
      "增加一筆高於原平均的資料，平均數會上升；增加一筆低於原平均的資料，平均數會下降。",
      "平均數會受極端值影響，因此比較資料時不能只看平均數，還要配合全距或資料分布。"
    ],
    "definitions": [
      {
        "name": "算術平均數",
        "statement": "對 n 筆數值資料，將所有資料相加後除以 n。"
      },
      {
        "name": "平均數的平衡意義",
        "statement": "每筆資料與平均數的差相加為 0；高於平均的總量可平衡低於平均的總量。"
      }
    ],
    "formulas": [
      {
        "formula": "平均數＝資料總和÷資料筆數",
        "conditions": [
          "資料均屬同一量與相同單位",
          "筆數不為 0"
        ]
      },
      {
        "formula": "資料總和＝平均數×資料筆數",
        "conditions": [
          "平均數與筆數屬於同一組資料"
        ]
      },
      {
        "formula": "未知值＝所需總和－已知資料總和",
        "conditions": [
          "先由平均數乘筆數求所需總和"
        ]
      }
    ],
    "invalidUseCases": [
      "把最大值與最小值相加再除以 2，除非題目問的是兩數平均。",
      "資料重複出現時只算一次。",
      "平均數有小數就自行四捨五入，忽略題目要求。",
      "以平均數代表每個人實際值，或推論所有資料都接近平均。",
      "不同單位未換算就相加。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "確認資料屬於同一群體、同一單位，並數出筆數。"
      },
      {
        "step": 2,
        "action": "逐筆相加求總和，保留負號與小數。"
      },
      {
        "step": 3,
        "action": "用總和除以筆數。"
      },
      {
        "step": 4,
        "action": "依題意處理單位與取位。"
      },
      {
        "step": 5,
        "action": "用平均數×筆數回算總和，檢查是否一致。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "5 次小考分數為 72、81、85、76、86。",
        "solution": [
          "總和=400。",
          "筆數=5。",
          "400÷5=80。"
        ],
        "answer": "平均 80 分。"
      },
      {
        "id": "L2",
        "prompt": "4 天用水量平均 18 公升，前三天為 16、20、17 公升。",
        "solution": [
          "4 天總量=18×4=72。",
          "前三天總量=53。",
          "第四天=72-53=19。"
        ],
        "answer": "19 公升。"
      },
      {
        "id": "L3",
        "prompt": "資料 8、9、9、10、44。",
        "solution": [
          "平均數=80÷5=16。",
          "44 明顯高於其餘資料，將平均數拉高。"
        ],
        "answer": "平均 16，但不代表典型值接近 16。"
      },
      {
        "id": "L4",
        "prompt": "3 筆長度為 1.2、0.85、95 公分。",
        "solution": [
          "先將 1.2 公尺改為 120 公分（若原題單位如此）。",
          "統一單位後才能相加。"
        ],
        "answer": "先統一單位，再依總和除以 3。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "把 4、4、7、9 的筆數算成 3。",
        "why": "只數不同數值。",
        "fix": "重複的 4 是兩筆，筆數為 4。"
      },
      {
        "wrong": "平均數=(最大值+最小值)÷2。",
        "why": "忽略中間資料。",
        "fix": "所有資料都要納入總和。"
      },
      {
        "wrong": "平均 75 分、6 人，總分寫 75÷6。",
        "why": "逆向關係用錯。",
        "fix": "總分=75×6。"
      },
      {
        "wrong": "平均收入高就說每個人都收入高。",
        "why": "平均數不揭露分布。",
        "fix": "檢查中位數、全距與極端值。"
      }
    ],
    "selfCheck": [
      "我是否數對資料筆數？",
      "每一筆資料都相加了嗎？",
      "單位是否一致？",
      "是否依題目要求取位？",
      "極端值是否使平均數失去代表性？"
    ],
    "summary": [
      "平均數＝總和÷筆數。",
      "總和＝平均數×筆數。",
      "平均數可不在原資料中。",
      "極端值會拉動平均數。"
    ],
    "connections": {
      "previous": "列聯表訓練完整讀取資料與總數，現在把數值資料濃縮成代表值。",
      "next": [
        "中位數將用排序後的位置代表資料中心。",
        "由次數表求平均會把重複資料改寫成乘法。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s009-v001",
        "u09-s009-v002",
        "u09-s009-v003",
        "u09-s009-v004",
        "u09-s009-v005",
        "u09-s009-v006",
        "u09-s009-v007",
        "u09-s009-v008",
        "u09-s009-v009",
        "u09-s009-v010",
        "u09-s009-v011",
        "u09-s009-v012"
      ],
      "constructedResponseIds": [
        "u09-s009-cr001",
        "u09-s009-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "從平均分配意義出發，涵蓋直接計算、逆推總和、缺值與極端值判讀。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需能從資料表取出完整資料，並能做整數、小數與分數的四則運算。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "例題分別檢驗直接平均、平均反推、極端值與單位一致性。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "b683005092c5f9e79a2091b1270ce6d7615acf42e6609c4a32df22f934a2f5e5"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s009-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "資料 6、8、10 的平均數是多少？",
      "givenConditions": [
        "三筆資料同一單位。"
      ],
      "target": "計算基本平均數",
      "choices": [
        "8",
        "6",
        "10",
        "24"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "總和 24，資料個數 3，平均 24÷3=8。",
        "derivedAnswer": "8",
        "trustStoredAnswer": false
      },
      "explanation": "平均數是總和除以個數。",
      "steps": [
        "加總資料。",
        "除以資料個數。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": true,
          "reason": "(6+8+10)÷3=8。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "6 是最小值。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "10 是最大值。"
        },
        {
          "choice": "24",
          "truth": false,
          "reason": "24 是總和。"
        }
      ],
      "misconceptionTarget": "只答總和或極值",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "結果 8 精確。",
      "ambiguityAndBoundaryAudit": "資料個數為 3。",
      "difficultyReason": "直接套定義，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7905e580f600bdd8d1989ebbced34864e7c545e63d291c712994c8f2c95df714"
    },
    {
      "questionId": "u09-s009-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "5 筆資料的平均數是 12，總和是多少？",
      "givenConditions": [
        "5 筆資料。"
      ],
      "target": "由平均反推總和",
      "choices": [
        "17",
        "60",
        "12",
        "2.4"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "總和＝平均×個數＝12×5=60。",
        "derivedAnswer": "60",
        "trustStoredAnswer": false
      },
      "explanation": "平均公式可反推總和。",
      "steps": [
        "辨認平均與個數。",
        "相乘。"
      ],
      "optionAnalysis": [
        {
          "choice": "17",
          "truth": false,
          "reason": "17 是 12+5。"
        },
        {
          "choice": "60",
          "truth": true,
          "reason": "12×5=60。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12 是平均本身。"
        },
        {
          "choice": "2.4",
          "truth": false,
          "reason": "2.4 是 12÷5。"
        }
      ],
      "misconceptionTarget": "把平均加上個數",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "60。",
      "ambiguityAndBoundaryAudit": "個數明確。",
      "difficultyReason": "基礎反向運算。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "15cb72571e24d7c2f92212f4baf161548d274704812d4f740d04f052c9a37d01"
    },
    {
      "questionId": "u09-s009-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "每筆資料都增加 3，平均數會如何變化？",
      "givenConditions": [
        "每筆都增加相同 3。"
      ],
      "target": "理解平均數平移性質",
      "choices": [
        "不變",
        "乘以 3",
        "增加 3",
        "增加資料個數"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "設原平均為 m、共 n 筆；新總和為 nm+3n=n(m+3)，新平均 m+3。",
        "derivedAnswer": "增加 3",
        "trustStoredAnswer": false
      },
      "explanation": "所有資料加同一常數，平均加同一常數。",
      "steps": [
        "用小例子或代數檢查。"
      ],
      "optionAnalysis": [
        {
          "choice": "不變",
          "truth": false,
          "reason": "全部資料平移會使平均同步平移。"
        },
        {
          "choice": "乘以 3",
          "truth": false,
          "reason": "只有每筆乘 3 時平均才乘 3。"
        },
        {
          "choice": "增加 3",
          "truth": true,
          "reason": "總和增加 3n，除以 n 後平均增加 3。"
        },
        {
          "choice": "增加資料個數",
          "truth": false,
          "reason": "變化與資料個數本身不同。"
        }
      ],
      "misconceptionTarget": "認為平均不受所有資料同幅變化影響",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無單位特定。",
      "ambiguityAndBoundaryAudit": "若只有部分資料增加則不能直接套用。",
      "difficultyReason": "概念性基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e2fea01aed7edc438e8c3e97e022bf84d0533b48950ef5ca0c8dbd185a7b6807"
    },
    {
      "questionId": "u09-s009-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "四個數 7、9、11、x 的平均是 10，x 是多少？",
      "givenConditions": [
        "四筆同尺度。"
      ],
      "target": "由平均求單一缺值",
      "choices": [
        "10",
        "12",
        "17",
        "13"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "10×4=40；7+9+11=27；x=40-27=13。",
        "derivedAnswer": "13",
        "trustStoredAnswer": false
      },
      "explanation": "先由平均求總和，再扣已知資料。",
      "steps": [
        "求目標總和。",
        "加總已知數。",
        "相減。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": false,
          "reason": "平均不一定等於缺值。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12 會使平均 9.75。"
        },
        {
          "choice": "17",
          "truth": false,
          "reason": "17 會使平均 11。"
        },
        {
          "choice": "13",
          "truth": true,
          "reason": "總和應為 40，已知和 27，x=13。"
        }
      ],
      "misconceptionTarget": "把平均直接填入",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "13 精確。",
      "ambiguityAndBoundaryAudit": "唯一缺值。",
      "difficultyReason": "兩步逆推，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0e45de17840f6600706d3212e6980e554a96f66428a4485a36a760e19dcbe89c"
    },
    {
      "questionId": "u09-s009-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "甲組 4 人平均 15，乙組 4 人平均 19。兩組合併平均是多少？",
      "givenConditions": [
        "兩組各 4 人。"
      ],
      "target": "合併等人數群組平均",
      "choices": [
        "17",
        "34",
        "16",
        "19"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "總分 4×15+4×19=136，總人數 8，平均 17。",
        "derivedAnswer": "17",
        "trustStoredAnswer": false
      },
      "explanation": "只有在人數相同時，兩組平均可直接再平均。",
      "steps": [
        "求兩組總和。",
        "除以總人數。"
      ],
      "optionAnalysis": [
        {
          "choice": "17",
          "truth": true,
          "reason": "兩組人數相同，可平均 15 與 19 得 17。"
        },
        {
          "choice": "34",
          "truth": false,
          "reason": "34 是相加未除 2。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "16 計算錯誤。"
        },
        {
          "choice": "19",
          "truth": false,
          "reason": "19 只取乙組。"
        }
      ],
      "misconceptionTarget": "忽略群組人數",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "17。",
      "ambiguityAndBoundaryAudit": "人數相同條件已明示。",
      "difficultyReason": "標準群組整合。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b6c329d7f578c1d99a6b1e81fd1116f8a09aa9a04e1302fbb94bd2799755c790"
    },
    {
      "questionId": "u09-s009-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "原有 5 筆資料平均 20，加入一筆 26 後，新平均是多少？",
      "givenConditions": [
        "新個數為 6。"
      ],
      "target": "更新加入資料後的平均",
      "choices": [
        "20",
        "21",
        "23",
        "46"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "5×20=100；(100+26)÷6=21。",
        "derivedAnswer": "21",
        "trustStoredAnswer": false
      },
      "explanation": "加入資料後需更新總和與個數。",
      "steps": [
        "還原原總和。",
        "加入新值。",
        "除以新個數。"
      ],
      "optionAnalysis": [
        {
          "choice": "20",
          "truth": false,
          "reason": "加入較大值後平均不會仍為 20。"
        },
        {
          "choice": "21",
          "truth": true,
          "reason": "原總和 100，加 26 得 126，除 6 得 21。"
        },
        {
          "choice": "23",
          "truth": false,
          "reason": "直接平均 20 與 26 忽略原有 5 筆權重。"
        },
        {
          "choice": "46",
          "truth": false,
          "reason": "46 是相加。"
        }
      ],
      "misconceptionTarget": "直接平均舊平均與新值",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "21 精確。",
      "ambiguityAndBoundaryAudit": "26 是一筆而非一組平均。",
      "difficultyReason": "需要權重觀念，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4b4505e7376b7504356dc6b6254bc8867fbc32a8aaa81fd296ef141457391175"
    },
    {
      "questionId": "u09-s009-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "六筆資料平均 14，其中一筆 9 誤登為 19。更正後平均是多少？",
      "givenConditions": [
        "六筆資料不變。"
      ],
      "target": "處理資料更正對平均的影響",
      "choices": [
        "13",
        "14",
        "12⅓",
        "15⅔"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "錯誤總和 6×14=84；改 19 為 9，總和減 10 成 74；74÷6=37/3。",
        "derivedAnswer": "12⅓",
        "trustStoredAnswer": false
      },
      "explanation": "資料更正影響平均＝總和變化÷個數。",
      "steps": [
        "還原錯誤總和。",
        "調整錯誤差值。",
        "重新除以 6。"
      ],
      "optionAnalysis": [
        {
          "choice": "13",
          "truth": false,
          "reason": "13 是四捨五入錯誤。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "未更正仍為 14。"
        },
        {
          "choice": "12⅓",
          "truth": true,
          "reason": "原錯誤總和 84，更正減少 10，正確總和 74，平均 74/6=12⅓。"
        },
        {
          "choice": "15⅔",
          "truth": false,
          "reason": "方向反了，像是增加 10。"
        }
      ],
      "misconceptionTarget": "把 9 與 19 的差方向弄反",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案可寫 37/3 或 12⅓。",
      "ambiguityAndBoundaryAudit": "題目未要求小數取位。",
      "difficultyReason": "需多步校正，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "50678bc84f9f7226208080afc63c97c744008aac50f2824f7d862e06da17798d"
    },
    {
      "questionId": "u09-s009-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "甲組 10 人平均 72，乙組 20 人平均 81。合併平均是多少？",
      "givenConditions": [
        "總人數 30。"
      ],
      "target": "計算不同群組大小的合併平均",
      "choices": [
        "76.5",
        "81",
        "153",
        "78"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "10×72+20×81=2340；2340÷30=78。",
        "derivedAnswer": "78",
        "trustStoredAnswer": false
      },
      "explanation": "不同人數群組必須依人數加權。",
      "steps": [
        "求各組總分。",
        "加總。",
        "除以 30。"
      ],
      "optionAnalysis": [
        {
          "choice": "76.5",
          "truth": false,
          "reason": "直接平均 72 與 81 得 76.5，忽略人數。"
        },
        {
          "choice": "81",
          "truth": false,
          "reason": "只取較大組平均。"
        },
        {
          "choice": "153",
          "truth": false,
          "reason": "兩平均相加。"
        },
        {
          "choice": "78",
          "truth": true,
          "reason": "總分 720+1620=2340，除 30 得 78。"
        }
      ],
      "misconceptionTarget": "直接平均群組平均",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "78。",
      "ambiguityAndBoundaryAudit": "群組互斥。",
      "difficultyReason": "加權合併，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ac2bca3f6e0727749f84880fdfdb1fd773657cd5ca26cea64308a1948d201979"
    },
    {
      "questionId": "u09-s009-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "資料平均為 50。若刪除一筆 50，剩餘資料平均如何？",
      "givenConditions": [
        "原資料至少兩筆。"
      ],
      "target": "判斷刪除資料對平均的影響",
      "choices": [
        "仍為 50",
        "一定變大",
        "一定變小",
        "無法判斷"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "原有 n 筆總和 50n；刪除 50 後為 50(n-1)，除以 n-1 仍 50。",
        "derivedAnswer": "仍為 50",
        "trustStoredAnswer": false
      },
      "explanation": "刪除恰等於平均的資料，平均不變。",
      "steps": [
        "用總和表示驗證。"
      ],
      "optionAnalysis": [
        {
          "choice": "仍為 50",
          "truth": true,
          "reason": "刪除值等於原平均，總和與個數同比例減少，平均不變。"
        },
        {
          "choice": "一定變大",
          "truth": false,
          "reason": "刪除平均值不會使平均變大。"
        },
        {
          "choice": "一定變小",
          "truth": false,
          "reason": "也不會變小。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "由等於平均即可確定。"
        }
      ],
      "misconceptionTarget": "認為刪除任何資料都無法判斷",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "50。",
      "ambiguityAndBoundaryAudit": "刪除值明確等於平均。",
      "difficultyReason": "代數性質判斷，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9fde82e323f819906d22f229d5afb88ab70f1d93ad96cde001815d20b559469c"
    },
    {
      "questionId": "u09-s009-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "某班三次小考平均為 76、82、79 分，但每次參加人數分別 30、28、32。若要算所有應試成績的總平均，哪個方法正確？",
      "givenConditions": [
        "每次成績單位分。"
      ],
      "target": "選擇多次測驗總平均公式",
      "choices": [
        "(76+82+79)÷3",
        "(76×30+82×28+79×32)÷90",
        "(76×30+82×28+79×32)÷3",
        "(30+28+32)÷(76+82+79)"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "總平均＝各次總分合計÷總應試人次，公式如正解。",
        "derivedAnswer": "(76×30+82×28+79×32)÷90",
        "trustStoredAnswer": false
      },
      "explanation": "參加人數不同使加權不可省略。",
      "steps": [
        "求各次總分。",
        "加總總人次。",
        "相除。"
      ],
      "optionAnalysis": [
        {
          "choice": "(76+82+79)÷3",
          "truth": false,
          "reason": "直接平均忽略人數差異。"
        },
        {
          "choice": "(76×30+82×28+79×32)÷90",
          "truth": true,
          "reason": "各次平均需乘參加人數還原總分，再除總人次 90。"
        },
        {
          "choice": "(76×30+82×28+79×32)÷3",
          "truth": false,
          "reason": "分母應是總人次，不是場次 3。"
        },
        {
          "choice": "(30+28+32)÷(76+82+79)",
          "truth": false,
          "reason": "分子分母意義顛倒。"
        }
      ],
      "misconceptionTarget": "直接平均不同人數的平均",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "題目只問方法，不要求算小數。",
      "ambiguityAndBoundaryAudit": "同一學生可能重複參加，但目標是所有應試成績，分母用人次合理。",
      "difficultyReason": "需解讀統計對象與權重。",
      "literacyNecessityReason": "不同測驗參加人數直接決定各平均的權重，情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2caa25f39f5a5ec3a52021b94a81d4f811a395bd44a19a7c1d9994c3e92c4934"
    },
    {
      "questionId": "u09-s009-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "某公司公布員工平均月薪 55,000 元，但 10 人中 1 位主管薪資 190,000 元，其餘 9 人皆 40,000 元。下列解讀何者適當？",
      "givenConditions": [
        "金額單位元。"
      ],
      "target": "解讀平均數受極端值影響",
      "choices": [
        "平均計算錯誤",
        "至少 5 人領超過 55,000",
        "平均 55,000 正確，但不代表多數員工領 55,000",
        "每人薪資都接近 55,000"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "總薪資 550,000，除 10 得 55,000；但 9 人為 40,000。",
        "derivedAnswer": "平均 55,000 正確，但不代表多數員工領 55,000",
        "trustStoredAnswer": false
      },
      "explanation": "平均能描述總量分攤，不保證典型個體接近平均。",
      "steps": [
        "驗算平均。",
        "查看個別分布。",
        "限制平均的代表性解讀。"
      ],
      "optionAnalysis": [
        {
          "choice": "平均計算錯誤",
          "truth": false,
          "reason": "計算正確。"
        },
        {
          "choice": "至少 5 人領超過 55,000",
          "truth": false,
          "reason": "只有主管超過 55000。"
        },
        {
          "choice": "平均 55,000 正確，但不代表多數員工領 55,000",
          "truth": true,
          "reason": "總薪資 190000+9×40000=550000，平均 55000；多數其實 40000。"
        },
        {
          "choice": "每人薪資都接近 55,000",
          "truth": false,
          "reason": "極端高值使平均偏高。"
        }
      ],
      "misconceptionTarget": "把平均當成多數人的薪資",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "平均精確。",
      "ambiguityAndBoundaryAudit": "只評論這 10 人，不外推公司其他群體。",
      "difficultyReason": "需區分計算正確與解讀合理。",
      "literacyNecessityReason": "薪資平均常被用於公共溝通，極端值使情境成為統計素養核心。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f02b4cb928c2c9a1e6af7104674cbbcdb619f9b77a5ed135ebbf7d505517f1f0"
    },
    {
      "questionId": "u09-s009-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "某球員前 4 場平均得 18 分。第 5 場後平均升為 20 分。第 5 場得幾分？",
      "givenConditions": [
        "每場得分同一單位。"
      ],
      "target": "由前後平均反推新增資料",
      "choices": [
        "20 分",
        "22 分",
        "38 分",
        "28 分"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "4×18=72；5×20=100；100-72=28。",
        "derivedAnswer": "28 分",
        "trustStoredAnswer": false
      },
      "explanation": "新平均提升 2 分不表示新增那場只高 2 分。",
      "steps": [
        "還原前總分。",
        "求五場總分。",
        "相減。"
      ],
      "optionAnalysis": [
        {
          "choice": "20 分",
          "truth": false,
          "reason": "20 是新平均。"
        },
        {
          "choice": "22 分",
          "truth": false,
          "reason": "22 是平均增加 2 的錯誤加法。"
        },
        {
          "choice": "38 分",
          "truth": false,
          "reason": "38 是錯誤相加。"
        },
        {
          "choice": "28 分",
          "truth": true,
          "reason": "前四場總分 72，五場總分 100，第五場 28。"
        }
      ],
      "misconceptionTarget": "把平均增幅直接加到新值",
      "prerequisiteCheck": {
        "skillIds": [
          "contingency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "28 分。",
      "ambiguityAndBoundaryAudit": "第 5 場唯一。",
      "difficultyReason": "多階段平均逆推，屬素養。",
      "literacyNecessityReason": "運動紀錄以累積平均呈現，必須還原總分才能推得單場表現。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "60b32b1285c131aaa65529ffa25ae161d3762a3a48a7671e8b818751cc97a1e3"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s009-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "一名學生5次數學小考分數為72、84、76、88、x，已知平均數為80。求x，並說明若第5次分數誤記為90，則用誤記資料算出的平均數會比正確平均高多少。",
      "givenConditions": [],
      "target": "由平均數反推缺值，再分析單筆誤植對平均的影響。",
      "requiredWork": [
        "先由80×5求正確總分。",
        "扣除四筆已知分數求x。",
        "誤植後平均差以錯值與正值的差除以5。"
      ],
      "standardSolution": [
        "正確總分=80×5=400。",
        "已知四次總分=72+84+76+88=320，所以x=400-320=80。",
        "若誤記為90，總分多10分，平均數多10÷5=2分；誤記平均為82分。"
      ],
      "alternativeMethod": "可直接列方程式(72+84+76+88+x)/5=80，解得x=80；誤植平均再計算一次。",
      "reasoningSteps": [
        "把平均轉成總和。",
        "求已知資料和。",
        "以所需總和減已知和。",
        "比較錯值與正值對總和的差，再平均到5筆。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "x=80、誤記平均82及高2分，且總和反推過程完整。"
        },
        {
          "score": 2,
          "criteria": "x正確但誤植影響有一處小錯，或方法完整但四數加總小錯並一致跟隨。"
        },
        {
          "score": 1,
          "criteria": "能寫出總分400，或正確建立含x的平均方程。"
        },
        {
          "score": 0,
          "criteria": "把80當x而無理由，且未理解平均與總和關係。"
        }
      ],
      "partialCreditRules": [
        "只答高10分是總分差，不是平均差，誤植部分不完整。",
        "方程式正確但算錯可給方法分。"
      ],
      "followThroughPolicy": "若四次總和算錯，x與誤植平均依該錯誤一致計算，最高2分；誤植差10÷5仍可獨立得分。",
      "unitAndNotationRules": "分數與平均均以「分」；x為單次分數。",
      "answerOnlyPolicy": "只寫80與2，無任何推導，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "5筆總和400，已知和320，缺80；誤加10使平均增加2。",
        "boundaryAndAmbiguityAudit": "分數範圍未造成衝突；x=80合理且唯一。",
        "rubricAlignmentEvidence": "逆推缺值與誤植敏感度各有清楚配分。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "46ca86c2c7edd51072ccdeff28dd8c61377de0cba8b4b4954355fab4a1953d66"
    },
    {
      "questionId": "u09-s009-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-basic",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "甲組6人的平均體重為52公斤，乙組4人的平均體重為58公斤。兩組合併後又加入一位體重x公斤的新成員，使11人的平均體重變為54公斤。求x，並判斷x相對於原10人平均是高或低，以及為何新平均會往該方向移動。",
      "givenConditions": [],
      "target": "由分組平均還原總量，再分析新增資料對平均的方向影響。",
      "requiredWork": [
        "甲乙總量須依各組人數加權。",
        "由新平均×11求新總量。",
        "比較x與原10人平均。"
      ],
      "standardSolution": [
        "甲組總重=52×6=312公斤；乙組=58×4=232公斤；原10人總重544公斤，原平均54.4公斤。",
        "新11人總重=54×11=594公斤，所以x=594-544=50公斤。",
        "50低於原平均54.4，因此加入後平均由54.4下降到54。"
      ],
      "alternativeMethod": "可用平均變化式：原總重544，加x後為594，直接得x=50；方向再比較50與54.4。",
      "reasoningSteps": [
        "把各組平均乘人數還原總重。",
        "相加求原總重與原平均。",
        "由目標新平均求新總重。",
        "新舊總重相減求x。",
        "用x與原平均比較解釋方向。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "x=50、原平均54.4及低於原平均所以新平均下降的解釋全部正確。"
        },
        {
          "score": 2,
          "criteria": "x正確且方向正確，但漏算或未明示原平均54.4；或一處乘法小錯而後續一致。"
        },
        {
          "score": 1,
          "criteria": "能正確算出任一組總重，或正確寫出52×6+58×4+x=54×11。"
        },
        {
          "score": 0,
          "criteria": "直接平均52與58，且未按人數還原總量。"
        }
      ],
      "partialCreditRules": [
        "若原平均誤寫55但仍知道50低於原平均，概念部分可給分。",
        "只算x而未回答方向與理由，最高2分。"
      ],
      "followThroughPolicy": "早期總重算術錯誤可依方程式結構與一致後續給至2分，但x若不合理應檢查。",
      "unitAndNotationRules": "體重與平均均為公斤；人數無單位或寫人。",
      "answerOnlyPolicy": "只寫50公斤，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "312+232=544，594-544=50；544/10=54.4，50較低，故平均下降。",
        "boundaryAndAmbiguityAudit": "所有權重與總人數6+4+1=11一致，解唯一。",
        "rubricAlignmentEvidence": "評分涵蓋分組加權、缺值與平均移動方向。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "4a0af5f958a94576c475259e83617ea86b875ddb4af43f81b409c3444a29cd0e"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s009-v001-semantic-r1",
      "questionId": "u09-s009-v001",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "總和 24，資料個數 3，平均 24÷3=8。",
      "correctChoiceCheck": "獨立計算得到「8」，位於索引 0。",
      "distractorAudit": [
        "6 是最小值。",
        "10 是最大值。",
        "24 是總和。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「8」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "資料個數為 3。",
      "difficultyEvidence": "直接套定義，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "75acfaaa5ef4c8526aa985cc4bcb7516740241f2d2826cfa3e027cb833b68880"
    },
    {
      "reviewId": "u09-s009-v002-semantic-r1",
      "questionId": "u09-s009-v002",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "總和＝平均×個數＝12×5=60。",
      "correctChoiceCheck": "獨立計算得到「60」，位於索引 1。",
      "distractorAudit": [
        "17 是 12+5。",
        "12 是平均本身。",
        "2.4 是 12÷5。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「60」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "個數明確。",
      "difficultyEvidence": "基礎反向運算。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "dd87ea10f0e7664a47b0d85eb195fb0c294813374c1d44d3422e480a9fd67c5e"
    },
    {
      "reviewId": "u09-s009-v003-semantic-r1",
      "questionId": "u09-s009-v003",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "設原平均為 m、共 n 筆；新總和為 nm+3n=n(m+3)，新平均 m+3。",
      "correctChoiceCheck": "獨立計算得到「增加 3」，位於索引 2。",
      "distractorAudit": [
        "全部資料平移會使平均同步平移。",
        "只有每筆乘 3 時平均才乘 3。",
        "變化與資料個數本身不同。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「增加 3」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "若只有部分資料增加則不能直接套用。",
      "difficultyEvidence": "概念性基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6947d525d034e8e0147061fe4a24bbad337f19f7f40a0faea645d3db86884f6d"
    },
    {
      "reviewId": "u09-s009-v004-semantic-r1",
      "questionId": "u09-s009-v004",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "10×4=40；7+9+11=27；x=40-27=13。",
      "correctChoiceCheck": "獨立計算得到「13」，位於索引 3。",
      "distractorAudit": [
        "平均不一定等於缺值。",
        "12 會使平均 9.75。",
        "17 會使平均 11。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「13」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "唯一缺值。",
      "difficultyEvidence": "兩步逆推，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "94184ec52bcf138ad7b27a6b5926746b81874a65de3937bafe351432ba083455"
    },
    {
      "reviewId": "u09-s009-v005-semantic-r1",
      "questionId": "u09-s009-v005",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "總分 4×15+4×19=136，總人數 8，平均 17。",
      "correctChoiceCheck": "獨立計算得到「17」，位於索引 0。",
      "distractorAudit": [
        "34 是相加未除 2。",
        "16 計算錯誤。",
        "19 只取乙組。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「17」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "人數相同條件已明示。",
      "difficultyEvidence": "標準群組整合。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "bdc2cf211f9fd7d81e3d16c91bc3ac119c54805bd3e1318045c5d830d10170e2"
    },
    {
      "reviewId": "u09-s009-v006-semantic-r1",
      "questionId": "u09-s009-v006",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "5×20=100；(100+26)÷6=21。",
      "correctChoiceCheck": "獨立計算得到「21」，位於索引 1。",
      "distractorAudit": [
        "加入較大值後平均不會仍為 20。",
        "直接平均 20 與 26 忽略原有 5 筆權重。",
        "46 是相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「21」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "26 是一筆而非一組平均。",
      "difficultyEvidence": "需要權重觀念，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "673a4c041da154c1fa6c22c48c8f005d7c94213bf74de99f13d4c7820dddfe52"
    },
    {
      "reviewId": "u09-s009-v007-semantic-r1",
      "questionId": "u09-s009-v007",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "錯誤總和 6×14=84；改 19 為 9，總和減 10 成 74；74÷6=37/3。",
      "correctChoiceCheck": "獨立計算得到「12⅓」，位於索引 2。",
      "distractorAudit": [
        "13 是四捨五入錯誤。",
        "未更正仍為 14。",
        "方向反了，像是增加 10。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「12⅓」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目未要求小數取位。",
      "difficultyEvidence": "需多步校正，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "0294cb31830afa04b7769dcf822acd9de4e0a9772e566283c983f277216827f3"
    },
    {
      "reviewId": "u09-s009-v008-semantic-r1",
      "questionId": "u09-s009-v008",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "10×72+20×81=2340；2340÷30=78。",
      "correctChoiceCheck": "獨立計算得到「78」，位於索引 3。",
      "distractorAudit": [
        "直接平均 72 與 81 得 76.5，忽略人數。",
        "只取較大組平均。",
        "兩平均相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「78」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "群組互斥。",
      "difficultyEvidence": "加權合併，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "e4562c4d898fefc433360107d1029c5375e0807e315345653a7d3f8c326c7ed1"
    },
    {
      "reviewId": "u09-s009-v009-semantic-r1",
      "questionId": "u09-s009-v009",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "原有 n 筆總和 50n；刪除 50 後為 50(n-1)，除以 n-1 仍 50。",
      "correctChoiceCheck": "獨立計算得到「仍為 50」，位於索引 0。",
      "distractorAudit": [
        "刪除平均值不會使平均變大。",
        "也不會變小。",
        "由等於平均即可確定。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「仍為 50」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "刪除值明確等於平均。",
      "difficultyEvidence": "代數性質判斷，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "cf3a1bf581dc7cbcb7a89cc0e3717c9ca1b4b704e51920e4c10bade08b3a4c9b"
    },
    {
      "reviewId": "u09-s009-v010-semantic-r1",
      "questionId": "u09-s009-v010",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "總平均＝各次總分合計÷總應試人次，公式如正解。",
      "correctChoiceCheck": "獨立計算得到「(76×30+82×28+79×32)÷90」，位於索引 1。",
      "distractorAudit": [
        "直接平均忽略人數差異。",
        "分母應是總人次，不是場次 3。",
        "分子分母意義顛倒。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「(76×30+82×28+79×32)÷90」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "同一學生可能重複參加，但目標是所有應試成績，分母用人次合理。",
      "difficultyEvidence": "需解讀統計對象與權重。",
      "literacyEvidence": "不同測驗參加人數直接決定各平均的權重，情境不可刪除。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c5ba5612c73e4b1803aa756e604e946fb03801d569fc04de981ebc6ed778cedd"
    },
    {
      "reviewId": "u09-s009-v011-semantic-r1",
      "questionId": "u09-s009-v011",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "總薪資 550,000，除 10 得 55,000；但 9 人為 40,000。",
      "correctChoiceCheck": "獨立計算得到「平均 55,000 正確，但不代表多數員工領 55,000」，位於索引 2。",
      "distractorAudit": [
        "計算正確。",
        "只有主管超過 55000。",
        "極端高值使平均偏高。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「平均 55,000 正確，但不代表多數員工領 55,000」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只評論這 10 人，不外推公司其他群體。",
      "difficultyEvidence": "需區分計算正確與解讀合理。",
      "literacyEvidence": "薪資平均常被用於公共溝通，極端值使情境成為統計素養核心。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "348e51288984701a80027a61b0191247785dad64bd2110b5b16020a81d7921ad"
    },
    {
      "reviewId": "u09-s009-v012-semantic-r1",
      "questionId": "u09-s009-v012",
      "unitId": "u09",
      "skillId": "mean-basic",
      "independentRecalculation": "4×18=72；5×20=100；100-72=28。",
      "correctChoiceCheck": "獨立計算得到「28 分」，位於索引 3。",
      "distractorAudit": [
        "20 是新平均。",
        "22 是平均增加 2 的錯誤加法。",
        "38 是錯誤相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「28 分」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「平均數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "第 5 場唯一。",
      "difficultyEvidence": "多階段平均逆推，屬素養。",
      "literacyEvidence": "運動紀錄以累積平均呈現，必須還原總分才能推得單場表現。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8d2a5233b536774ded9b2ad3739b9c0e2890675484cee8a578e3eabd7e158407"
    }
  ],
  "drawingSpecs": []
};
