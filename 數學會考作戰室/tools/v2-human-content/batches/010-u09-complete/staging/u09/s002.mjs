// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s002-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-display",
    "skillId": "frequency-table",
    "lockedTitle": "次數與相對次數分配表",
    "title": "次數與相對次數分配表：從幾個到占多少",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "data-table-reading"
      ],
      "explanation": "先能正確判讀資料表的列、欄、總計與單位。"
    },
    "learningGoals": [
      "理解資料值、次數、總次數與相對次數。",
      "建立與補完整次數分配表。",
      "在次數和比例之間互換。",
      "比較不同樣本大小的類別比例。",
      "辨識取位造成的相對次數總和誤差。"
    ],
    "vocabulary": [
      {
        "term": "次數",
        "meaning": "某資料值或類別出現的筆數。"
      },
      {
        "term": "總次數",
        "meaning": "所有類別次數的合計。"
      },
      {
        "term": "相對次數",
        "meaning": "某類次數占總次數的比例。"
      },
      {
        "term": "分配表",
        "meaning": "列出各資料值或區間及其次數的表。"
      }
    ],
    "notation": [
      {
        "symbol": "f",
        "meaning": "常用來表示次數。"
      },
      {
        "symbol": "f/n",
        "meaning": "次數 f 除以總數 n，得到相對次數。"
      },
      {
        "symbol": "100%",
        "meaning": "完整分類的精確相對次數總和。"
      }
    ],
    "conceptDevelopment": [
      "次數回答『有幾個』，相對次數回答『占全部多少』。",
      "不同班級人數不同時，只比較次數可能得到錯誤印象，應比較相對次數。",
      "完整分類的次數總和等於總數，精確相對次數總和等於 1。",
      "相對次數可用分數、小數或百分比表示。",
      "若每項先四捨五入，顯示值總和可能略大或略小於 1，需回看精確值。",
      "次數是某類別實際出現的筆數，相對次數則以該類次數除以共同總數；兩者互換時，必須先確認分子所屬類別與分母代表的完整母群。完整分配的次數合計等於總數、精確相對次數合計等於一，但逐項四捨五入後顯示值可能略有偏差。若刪除無效資料使分母改變，即使其他類次數不變，所有類別比例仍須重新計算。"
    ],
    "definitions": [
      {
        "name": "次數",
        "statement": "資料值或類別在資料集合中出現的次數。"
      },
      {
        "name": "相對次數",
        "statement": "某類次數除以全部資料筆數所得的比例。"
      }
    ],
    "formulas": [
      {
        "formula": "相對次數＝類別次數÷總次數",
        "conditions": [
          "總次數大於 0"
        ]
      },
      {
        "formula": "類別次數＝總次數×相對次數",
        "conditions": [
          "結果若代表人數，應檢查整數可行性"
        ]
      },
      {
        "formula": "缺類別次數＝總次數－已知次數合計",
        "conditions": [
          "分類完整"
        ]
      }
    ],
    "invalidUseCases": [
      "用資料值本身代替次數。",
      "不同樣本大小只比較人數。",
      "把 0.35 寫成 35 人而未乘總數。",
      "看到四捨五入後總和 1.01 就立即判定原資料錯。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "確認每列是資料值、類別還是區間。"
      },
      {
        "step": 2,
        "action": "加總次數得到 n。"
      },
      {
        "step": 3,
        "action": "用 f÷n 求相對次數。"
      },
      {
        "step": 4,
        "action": "補值時利用次數總和 n 或比例總和 1。"
      },
      {
        "step": 5,
        "action": "檢查比例範圍與人數整數性。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "40 人中 10 人選甲類。",
        "solution": [
          "相對次數＝10÷40＝0.25。"
        ],
        "answer": "0.25＝25%。",
        "why": "相對次數描述某類占全體的比例，因此分子取甲類十人、分母取全體四十人。十除四十為四分之一，也就是零點二五或百分之二十五；三種寫法代表同一比例。"
      },
      {
        "id": "L2",
        "prompt": "總數 50，某類相對次數 0.24。",
        "solution": [
          "50×0.24＝12。"
        ],
        "answer": "12 人。",
        "why": "相對次數零點二四表示全體五十人的百分之二十四，反推次數要用總數乘比例。所得十二人是整數，且十二除五十回到零點二四，能同時檢查運算方向與結果。"
      },
      {
        "id": "L3",
        "prompt": "精確比例逐項取一位小數後總和 1.1。",
        "solution": [
          "先回算精確分數。",
          "逐項取位的誤差可能累積。"
        ],
        "answer": "不一定是原資料錯誤。",
        "why": "每類比例各自四捨五入時，數個向上取位的誤差會相加，使顯示值總和偏離一。應回到原次數與共同總數計算精確比例；若精確值合為一，便不能因顯示總和一點一就判資料錯誤。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "把最高資料值當最高次數。",
        "why": "混淆表的兩欄。",
        "fix": "讀清『資料值』與『次數』。"
      },
      {
        "wrong": "15 人比 12 人多，所以比例較高。",
        "why": "忽略兩組總數。",
        "fix": "各自除以組總數。"
      },
      {
        "wrong": "比例 0.3 寫成 0.3 人。",
        "why": "混淆無單位比例與人數。",
        "fix": "乘總數後才得人數。"
      },
      {
        "wrong": "取位後總和不為 1 就強制改一格。",
        "why": "未保留精確值。",
        "fix": "先以分數驗算。"
      }
    ],
    "selfCheck": [
      "次數與資料值分清楚了嗎？",
      "相對次數的分母是哪個全體？",
      "完整分類總和是否正確？",
      "顯示值是否經過取位？"
    ],
    "summary": [
      "次數是筆數，相對次數是比例。",
      "不同群體大小要比較相對次數。",
      "完整分配表的精確比例總和為 1。",
      "取位誤差與資料錯誤必須分開。"
    ],
    "connections": {
      "previous": "資料表判讀提供列、欄與總計基礎。",
      "next": [
        "長條圖可把類別次數或相對次數畫成柱高。",
        "累積次數會把依序的組別逐步相加。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s002-v001",
        "u09-s002-v002",
        "u09-s002-v003",
        "u09-s002-v004",
        "u09-s002-v005",
        "u09-s002-v006",
        "u09-s002-v007",
        "u09-s002-v008",
        "u09-s002-v009",
        "u09-s002-v010",
        "u09-s002-v011",
        "u09-s002-v012"
      ],
      "constructedResponseIds": [
        "u09-s002-cr001",
        "u09-s002-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "從次數定義到比例、缺值、跨群體比較與取位誤差逐層推進。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "先能正確判讀資料表的列、欄、總計與單位。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "清楚區分次數、總數、比例、分母與四捨五入顯示值。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "9c5e7f371bde9d80a8183c0edc08b0d65b872cf4f51047dd632df6f905e67b6e"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s002-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "某班最喜歡的水果統計為：蘋果 8 人、香蕉 5 人、芭樂 7 人。蘋果的次數是多少？",
      "givenConditions": [
        "三類互斥且涵蓋受訪者。"
      ],
      "target": "辨認類別次數",
      "choices": [
        "5",
        "8",
        "7",
        "20"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "直接讀取蘋果列的人數，次數為 8。",
        "derivedAnswer": "8",
        "trustStoredAnswer": false
      },
      "explanation": "次數表示某類別出現幾次，不是總人數。 蘋果列直接記錄八人，這就是該類別出現的次數；二十是三類合計，五與七則分別屬香蕉、芭樂，不能混作蘋果資料。",
      "steps": [
        "找到蘋果類別。",
        "讀取其人數 8。",
        "以三類次數相加為二十回查，確認蘋果八人只是其中一類。"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": false,
          "reason": "5 是香蕉次數。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "次數就是選蘋果的人數 8。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7 是芭樂次數。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "20 是全部人數。"
        }
      ],
      "misconceptionTarget": "把總數當單類次數 把全班三類合計當成蘋果單類次數，或沿錯列讀取其他水果。",
      "prerequisiteCheck": {
        "skillIds": [
          "data-table-reading"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "次數是人數，寫 8 人亦可。",
      "ambiguityAndBoundaryAudit": "題目只問次數，不問相對次數。",
      "difficultyReason": "單一類別直接讀值，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "82305511f5206b4f493f01f8e268d12ecf804857eb48cbceac24bf5770dc01d1"
    },
    {
      "questionId": "u09-s002-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "次數分配表中四個分數的次數為：1 分有 2 人、2 分有 5 人、3 分有 4 人、4 分有 1 人。總人數是多少？",
      "givenConditions": [
        "次數單位為人。"
      ],
      "target": "由次數表求樣本數",
      "choices": [
        "10 人",
        "11 人",
        "12 人",
        "14 人"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "把所有次數相加：2+5+4+1=12。",
        "derivedAnswer": "12 人",
        "trustStoredAnswer": false
      },
      "explanation": "總人數是次數欄合計，不能把分數值 1、2、3、4 相加。 資料值一到四只是分數類別，真正代表人數的是次數二、五、四、一；四個次數相加為十二，才是表內全部觀測人數。",
      "steps": [
        "辨認次數欄。",
        "四個次數相加。",
        "保留人數單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "10 人",
          "truth": false,
          "reason": "漏加 4 分組。"
        },
        {
          "choice": "11 人",
          "truth": false,
          "reason": "加總算錯。"
        },
        {
          "choice": "12 人",
          "truth": true,
          "reason": "2+5+4+1=12。"
        },
        {
          "choice": "14 人",
          "truth": false,
          "reason": "把分數值也加入次數。"
        }
      ],
      "misconceptionTarget": "混加資料值與次數 把分數值一二三四加入人數，或只取最高次數五當總人數。",
      "prerequisiteCheck": {
        "skillIds": [
          "data-table-reading"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "總人數是整數。",
      "ambiguityAndBoundaryAudit": "四組無重疊，合計唯一。",
      "difficultyReason": "需合計完整次數欄，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8cba75437450b4402978427d5a7f487f91c3f8fb7216a9760168e300a0bfd981"
    },
    {
      "questionId": "u09-s002-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "20 人中有 6 人選擇步行上學。步行的相對次數是多少？",
      "givenConditions": [
        "總數 20 人且次數 6 人。"
      ],
      "target": "計算相對次數",
      "choices": [
        "0.6",
        "3",
        "14",
        "0.3"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "相對次數＝次數÷總數＝6÷20=0.3。",
        "derivedAnswer": "0.3",
        "trustStoredAnswer": false
      },
      "explanation": "相對次數可寫成 0.3 或 30%。 相對次數以全體二十人為分母、步行六人為分子，六除二十等於零點三，也就是百分之三十；十四只是未步行人數。",
      "steps": [
        "寫出 6÷20。",
        "約分或除法得到 0.3。",
        "用零點三乘回二十得到六人，核對分子與原題一致。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.6",
          "truth": false,
          "reason": "0.6 是把 6 除以 10。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "3 不是 0 到 1 之間的相對次數。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "14 是未步行的人數。"
        },
        {
          "choice": "0.3",
          "truth": true,
          "reason": "6÷20=0.3。"
        }
      ],
      "misconceptionTarget": "把剩餘人數或百分數格式混淆 用剩餘十四人作分子，或把百分之三十錯寫成小數三。",
      "prerequisiteCheck": {
        "skillIds": [
          "data-table-reading"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "0.3=30%，兩者都精確。",
      "ambiguityAndBoundaryAudit": "相對次數必在 0 與 1 之間。",
      "difficultyReason": "一次除法與基本定義，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "46b11c15200ae279d094ad26debc25186d6e4501ad54f925ac8b1d54f817acde"
    },
    {
      "questionId": "u09-s002-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "某次數表總人數 40 人，前三類次數為 9、13、8，第四類次數未知。第四類是多少？",
      "givenConditions": [
        "各類互斥，總數 40。"
      ],
      "target": "由總數補次數缺值",
      "choices": [
        "10 人",
        "8 人",
        "20 人",
        "30 人"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "已知三類共 30 人，所以第四類 40-30=10 人。",
        "derivedAnswer": "10 人",
        "trustStoredAnswer": false
      },
      "explanation": "各類次數總和必須等於樣本總數。 前三類九、十三、八合計三十，完整分配表四類總和必為四十，故缺類是十人；把十加回已知合計恰得總樣本數。",
      "steps": [
        "先加已知次數得 30。",
        "用總數 40 減 30。",
        "代回檢查合計 40。"
      ],
      "optionAnalysis": [
        {
          "choice": "10 人",
          "truth": true,
          "reason": "40-(9+13+8)=10。"
        },
        {
          "choice": "8 人",
          "truth": false,
          "reason": "8 是第三類。"
        },
        {
          "choice": "20 人",
          "truth": false,
          "reason": "20 是把已知三類錯加。"
        },
        {
          "choice": "30 人",
          "truth": false,
          "reason": "30 是前三類總數，不是缺值。"
        }
      ],
      "misconceptionTarget": "把已知合計當缺值 把前三類合計三十直接填入缺格，沒有由總數扣除已知次數。",
      "prerequisiteCheck": {
        "skillIds": [
          "data-table-reading"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "人數為整數。",
      "ambiguityAndBoundaryAudit": "只有一格未知，因此解唯一。",
      "difficultyReason": "需利用總和限制回推，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "43868a8a0844859c4ff4a6ad16cdd1cb2b4051adcd273a11ddc675d7c39770be"
    },
    {
      "questionId": "u09-s002-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "某活動 50 人參加，甲組相對次數為 0.24。甲組有幾人？",
      "givenConditions": [
        "總數 50 人。"
      ],
      "target": "由相對次數回推次數",
      "choices": [
        "2 人",
        "12 人",
        "24 人",
        "38 人"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "次數＝總數×相對次數＝50×0.24=12。",
        "derivedAnswer": "12 人",
        "trustStoredAnswer": false
      },
      "explanation": "相對次數無單位，乘總人數才得到人數。 零點二四表示全體的百分之二十四，五十人的百分之二十四為十二人；十二除五十也回到零點二四，數量與比例互相驗證。",
      "steps": [
        "將 0.24 視為 24%。",
        "計算 50×0.24。",
        "檢查結果為整數人。"
      ],
      "optionAnalysis": [
        {
          "choice": "2 人",
          "truth": false,
          "reason": "把 0.24 當 2%。"
        },
        {
          "choice": "12 人",
          "truth": true,
          "reason": "50×0.24=12。"
        },
        {
          "choice": "24 人",
          "truth": false,
          "reason": "把 0.24 直接寫成 24 人。"
        },
        {
          "choice": "38 人",
          "truth": false,
          "reason": "38 是其餘人數。"
        }
      ],
      "misconceptionTarget": "把百分比數字直接當人數 把零點二四或二十四直接當人數，忘記乘上總樣本五十。",
      "prerequisiteCheck": {
        "skillIds": [
          "data-table-reading"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "12 人為整數，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "0.24×50 恰為整數，資料可行。",
      "difficultyReason": "需反用公式，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "dfda31e35e8207be717c97ccb5fcd057d42098cde776e5968976db5991f88900"
    },
    {
      "questionId": "u09-s002-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "四類相對次數依序是 0.18、0.27、0.31、x。x 為多少？",
      "givenConditions": [
        "四類完整且互斥。"
      ],
      "target": "補相對次數缺值",
      "choices": [
        "0.14",
        "0.76",
        "0.24",
        "1.24"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "前三類合計 0.76，全部類別合計必為 1，所以 x=0.24。",
        "derivedAnswer": "0.24",
        "trustStoredAnswer": false
      },
      "explanation": "完整分配表的相對次數總和為 1。 四類已涵蓋全部資料，比例總和須為一；前三類零點一八、零點二七、零點三一合為零點七六，剩餘比例是一減零點七六等於零點二四。",
      "steps": [
        "加總已知相對次數。",
        "以 1 減已知合計。",
        "確認 x 在 0 與 1 間。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.14",
          "truth": false,
          "reason": "小數加總錯誤。"
        },
        {
          "choice": "0.76",
          "truth": false,
          "reason": "0.76 是前三類合計。"
        },
        {
          "choice": "0.24",
          "truth": true,
          "reason": "1-(0.18+0.27+0.31)=0.24。"
        },
        {
          "choice": "1.24",
          "truth": false,
          "reason": "相對次數總和不得超過 1。"
        }
      ],
      "misconceptionTarget": "忘記總和應為 1 把已知比例合計零點七六當成未知值，或忘記完整分配總和為一。",
      "prerequisiteCheck": {
        "skillIds": [
          "data-table-reading"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案可寫 24%。",
      "ambiguityAndBoundaryAudit": "若題目未涵蓋全部類別才不能強制總和為 1；本題已明示完整。",
      "difficultyReason": "要運用完整分配表性質，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c78a9ce88891b1662ebf51daf271af2905d432c339bdd4a28ee03ac9aab567e9"
    },
    {
      "questionId": "u09-s002-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "資料值 2、3、4 的次數分別為 5、x、3，總共有 14 筆資料。若 3 的相對次數為 3/7，x 為多少？",
      "givenConditions": [
        "總數 14 筆。"
      ],
      "target": "整合次數與相對次數條件",
      "choices": [
        "3",
        "5",
        "9",
        "6"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "由相對次數先算 x=14×3/7=6；再用次數總和驗證。",
        "derivedAnswer": "6",
        "trustStoredAnswer": false
      },
      "explanation": "同一未知量同時受相對次數與總數限制，兩者應一致。 三分之七是資料值三的相對次數，乘總數十四得到次數六；另以五加六加三等於十四驗算，兩個條件同時成立。",
      "steps": [
        "用總數乘相對次數。",
        "得到 x=6。",
        "檢查 5+6+3=14。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3 是資料值或最後一類次數。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "5 是資料值 2 的次數。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9 會使總數為 17。"
        },
        {
          "choice": "6",
          "truth": true,
          "reason": "(3/7)×14=6，且 5+6+3=14。"
        }
      ],
      "misconceptionTarget": "把資料值 3 當成次數 把橫列資料值三誤當次數，或只用總和條件卻未核對相對次數。",
      "prerequisiteCheck": {
        "skillIds": [
          "data-table-reading"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "次數必為非負整數，6 合法。",
      "ambiguityAndBoundaryAudit": "兩個條件相容且唯一。",
      "difficultyReason": "需使用兩種表示交叉驗證，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f4450035f8c2f4025b344ff945ed2bc1ecacb6358046a06595a81fde3e5af73a"
    },
    {
      "questionId": "u09-s002-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "A 班 30 人中 12 人搭公車，B 班 45 人中 15 人搭公車。哪一班搭公車的相對次數較高？",
      "givenConditions": [
        "兩班單位皆為人。"
      ],
      "target": "比較不同樣本大小的相對次數",
      "choices": [
        "A 班",
        "B 班",
        "兩班相同",
        "資料不足"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "計算 A=0.4，B≈0.333，故 A 班較高。",
        "derivedAnswer": "A 班",
        "trustStoredAnswer": false
      },
      "explanation": "比較不同班級時應比較相對次數，不可只看次數 12 與 15。 兩班總人數不同，十二與十五不能直接比較；甲班十二除三十為零點四，乙班十五除四十五為三分之一，因此甲班比例較高。",
      "steps": [
        "分別計算兩班比例。",
        "統一為小數或分數比較。",
        "指出 A 班較高。"
      ],
      "optionAnalysis": [
        {
          "choice": "A 班",
          "truth": true,
          "reason": "A 班 12/30=0.4，B 班 15/45=1/3，A 較高。"
        },
        {
          "choice": "B 班",
          "truth": false,
          "reason": "B 人數較多但比例較低。"
        },
        {
          "choice": "兩班相同",
          "truth": false,
          "reason": "0.4 不等於 1/3。"
        },
        {
          "choice": "資料不足",
          "truth": false,
          "reason": "兩班總數與次數都已知。"
        }
      ],
      "misconceptionTarget": "只看次數不看總數 看到乙班十五人大於甲班十二人，就忽略兩班分母不同而判乙較高。",
      "prerequisiteCheck": {
        "skillIds": [
          "data-table-reading"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "1/3 可保留分數，不需不必要四捨五入。",
      "ambiguityAndBoundaryAudit": "比較目標是比例，資料充分。",
      "difficultyReason": "需排除樣本大小造成的錯覺，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f86d01c5ec81cfaa8be2a6787f1b0775bb6e6e610b75691abdd8c54fe447f24d"
    },
    {
      "questionId": "u09-s002-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某完整分配表的次數為 4、7、9、5，另一欄相對次數只列到小數點後一位：0.2、0.3、0.4、0.2。為何四個小數加起來是 1.1？",
      "givenConditions": [
        "顯示到小數第一位。"
      ],
      "target": "辨識相對次數取位誤差",
      "choices": [
        "表中一定多算 1 人",
        "各項四捨五入後可能使總和不等於 1",
        "相對次數本來就可大於 1",
        "總人數應改成 20"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "總數 25；精確相對次數 0.16、0.28、0.36、0.20，加總 1；各自四捨五入成 0.2、0.3、0.4、0.2 才得 1.1。",
        "derivedAnswer": "各項四捨五入後可能使總和不等於 1",
        "trustStoredAnswer": false
      },
      "explanation": "逐項四捨五入可能使顯示值總和偏離 1，應回看精確值。 精確比例零點一六、零點二八、零點三六、零點二零合為一；各自取到一位小數後誤差同向累積，顯示總和才成為一點一，原次數仍一致。",
      "steps": [
        "先求總數 25。",
        "計算精確相對次數。",
        "比較取位前後總和。"
      ],
      "optionAnalysis": [
        {
          "choice": "表中一定多算 1 人",
          "truth": false,
          "reason": "次數總和 25，沒有多算。"
        },
        {
          "choice": "各項四捨五入後可能使總和不等於 1",
          "truth": true,
          "reason": "精確比例為 4/25、7/25、9/25、5/25，逐項取一位小數後會有累積誤差。"
        },
        {
          "choice": "相對次數本來就可大於 1",
          "truth": false,
          "reason": "每個相對次數仍須介於 0 與 1，完整精確總和為 1。"
        },
        {
          "choice": "總人數應改成 20",
          "truth": false,
          "reason": "總人數由次數決定為 25。"
        }
      ],
      "misconceptionTarget": "看到總和不等於 1 就直接判表錯 看到取位後總和超過一就斷定人數表錯誤，沒有回算精確比例。",
      "prerequisiteCheck": {
        "skillIds": [
          "data-table-reading"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "需區分精確值與顯示值。",
      "ambiguityAndBoundaryAudit": "問題明示有四捨五入，故不把 1.1 視為精確總和。",
      "difficultyReason": "需解釋資料呈現造成的誤差，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0939a12d57615eee9b845a67f998f9df0730f3ae8289ac7f4a33c5351e20549f"
    },
    {
      "questionId": "u09-s002-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "學校調查 200 名學生的早餐方式：在家 90 人、早餐店 70 人、未吃 30 人、其他 10 人。報告寫『超過一半學生在外購買早餐』。此敘述如何判斷？",
      "givenConditions": [
        "樣本 200 人，分類完整。"
      ],
      "target": "用相對次數審核生活化敘述",
      "choices": [
        "正確，因 70 大於 50",
        "正確，因 70+30=100",
        "不正確，外購只有 70 人，占 35%",
        "無法判斷，因有其他類"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "外購若指早餐店，比例 70÷200=0.35=35%，所以報告錯。",
        "derivedAnswer": "不正確，外購只有 70 人，占 35%",
        "trustStoredAnswer": false
      },
      "explanation": "統計敘述中的『超過一半』必須用相對次數檢查。 若外購只指早餐店，七十人除以兩百人為百分之三十五，明顯未超過百分之五十；人數七十不能直接解讀成百分之七十。",
      "steps": [
        "界定外購類別。",
        "計算 70/200。",
        "與 50% 比較。"
      ],
      "optionAnalysis": [
        {
          "choice": "正確，因 70 大於 50",
          "truth": false,
          "reason": "70 與 50 是人數和百分數混比。"
        },
        {
          "choice": "正確，因 70+30=100",
          "truth": false,
          "reason": "未吃不屬外購，不能相加。"
        },
        {
          "choice": "不正確，外購只有 70 人，占 35%",
          "truth": true,
          "reason": "早餐店 70/200=35%，未超過 50%。"
        },
        {
          "choice": "無法判斷，因有其他類",
          "truth": false,
          "reason": "其他類已列出，不影響判斷早餐店比例。"
        }
      ],
      "misconceptionTarget": "把人數 70 誤當 70% 把七十人當成百分之七十，或把未吃早餐者錯併入外購人數。",
      "prerequisiteCheck": {
        "skillIds": [
          "data-table-reading"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "35% 為精確值。",
      "ambiguityAndBoundaryAudit": "『外購』依表中唯一對應早餐店；其他類未說是外購。",
      "difficultyReason": "需把報告文字轉成比例門檻。",
      "literacyNecessityReason": "早餐調查中的『一半』是報告結論核心，沒有情境便無法檢核敘述。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b97b55095726e35f14cbd712301309628548767b5c858f3c0f866faecf67639c"
    },
    {
      "questionId": "u09-s002-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "回收站統計一週 320 公斤回收物，其中紙類相對次數 0.375、塑膠 0.25，其餘為金屬。金屬有多少公斤？",
      "givenConditions": [
        "總量單位公斤。"
      ],
      "target": "在資源分類中由比例求剩餘量",
      "choices": [
        "40 公斤",
        "80 公斤",
        "200 公斤",
        "120 公斤"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "紙與塑膠共 0.625，金屬 0.375；320×3/8=120 公斤。",
        "derivedAnswer": "120 公斤",
        "trustStoredAnswer": false
      },
      "explanation": "先補相對次數，再乘總量。 紙類與塑膠合占零點六二五，金屬占剩餘零點三七五；三百二十乘八分之三得到一百二十公斤，三類重量合計仍為三百二十。",
      "steps": [
        "求剩餘比例。",
        "將 0.375 化為 3/8。",
        "乘 320 得 120。"
      ],
      "optionAnalysis": [
        {
          "choice": "40 公斤",
          "truth": false,
          "reason": "40 是把剩餘比例算成 0.125。"
        },
        {
          "choice": "80 公斤",
          "truth": false,
          "reason": "80 是塑膠重量。"
        },
        {
          "choice": "200 公斤",
          "truth": false,
          "reason": "200 是紙與塑膠合計重量。"
        },
        {
          "choice": "120 公斤",
          "truth": true,
          "reason": "金屬比例 1-0.375-0.25=0.375，320×0.375=120。"
        }
      ],
      "misconceptionTarget": "只算已知類別或誤減 只相加兩個已知比例求重量，或把剩餘比例錯算成零點六二五。",
      "prerequisiteCheck": {
        "skillIds": [
          "data-table-reading"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "結果為整數公斤。",
      "ambiguityAndBoundaryAudit": "三類完整，故剩餘全屬金屬。",
      "difficultyReason": "包含補比例與轉回實際量兩階段。",
      "literacyNecessityReason": "回收總量與分類比例共同決定金屬量，情境資訊不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "713391b2faa4dc9bb64f793f22cd51a66f89bac6ef2a1c56188e58e005690ef1"
    },
    {
      "questionId": "u09-s002-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "某線上問卷寄出 500 份，收到 125 份回覆，其中 75 人支持方案。下列哪個比例可稱為『回覆者中的支持率』？",
      "givenConditions": [
        "人數互相包含：75 是 125 的子集。"
      ],
      "target": "選擇正確分母解讀相對次數",
      "choices": [
        "75÷125=60%",
        "75÷500=15%",
        "125÷500=25%",
        "(75+125)÷500=40%"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "題目限定『回覆者中』，所以 75/125=0.6。",
        "derivedAnswer": "75÷125=60%",
        "trustStoredAnswer": false
      },
      "explanation": "比例的分母由母群範圍決定；支持率與回覆率不能混為一談。 限定語「回覆者中」把母群縮成一百二十五份有效回覆，其中七十五份支持，故支持率為六成；五百份寄出量只適合計算回覆率。",
      "steps": [
        "圈出限定語『回覆者中』。",
        "選分母 125。",
        "計算 60%。"
      ],
      "optionAnalysis": [
        {
          "choice": "75÷125=60%",
          "truth": true,
          "reason": "分母應是實際回覆者 125 人。"
        },
        {
          "choice": "75÷500=15%",
          "truth": false,
          "reason": "15% 是所有受邀者中已知支持者比例。"
        },
        {
          "choice": "125÷500=25%",
          "truth": false,
          "reason": "25% 是回覆率。"
        },
        {
          "choice": "(75+125)÷500=40%",
          "truth": false,
          "reason": "把支持者與回覆者重複相加。"
        }
      ],
      "misconceptionTarget": "把寄出份數當所有比例的分母 一律拿寄出五百份作分母，混淆支持率的母群與整體回覆率。",
      "prerequisiteCheck": {
        "skillIds": [
          "data-table-reading"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "60% 精確。",
      "ambiguityAndBoundaryAudit": "支持率僅描述回覆者，不推論未回覆者。",
      "difficultyReason": "需辨識母集合與子集合。",
      "literacyNecessityReason": "線上問卷的未回覆者使分母選擇成為必要統計判斷。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "218c0fd190d5e2ac73330bd8dc4143f7746e263c2c2d3854dd95bf0f43f613e9"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s002-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "30位學生每日閱讀時間的次數分配為：未滿20分鐘6人、20至未滿40分鐘9人、40至未滿60分鐘10人、60分鐘以上5人。請求各組相對次數（百分比），並判斷閱讀至少40分鐘者占全班多少百分比。",
      "givenConditions": [],
      "target": "由次數與正確分母計算相對次數並合併類別。",
      "requiredWork": [
        "四組都要以30為分母。",
        "百分比總和須檢查為100%。",
        "至少40分鐘須合併後兩組。"
      ],
      "standardSolution": [
        "未滿20：6/30=20%；20至未滿40：9/30=30%；40至未滿60：10/30=33又1/3%；60以上：5/30=16又2/3%。",
        "四組合計100%。",
        "至少40分鐘為(10+5)/30=50%。",
        "以前兩組與後兩組分別核對：六加九加十加五等於三十，各相對次數合為百分之百；至少四十分鐘的十五人正好占三十人的一半。"
      ],
      "alternativeMethod": "可先將次數約分成1/5、3/10、1/3、1/6，再換成百分比。",
      "reasoningSteps": [
        "確認總次數30。",
        "逐組以組次數除以30。",
        "保留精確分數或循環百分比。",
        "合併目標組次數15再除以30。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "四組相對次數、總和檢查及至少40分鐘50%全部正確。"
        },
        {
          "score": 2,
          "criteria": "至少三組比例正確且至少40分鐘50%正確，或僅有一處百分比表示小錯。"
        },
        {
          "score": 1,
          "criteria": "能使用30作分母並正確算出至少兩組，或正確合併10+5。"
        },
        {
          "score": 0,
          "criteria": "分母使用組數4或其他不合理數，且無正確相對次數。"
        }
      ],
      "partialCreditRules": [
        "33.3%與16.7%若註明四捨五入可接受，但總和可能為100.0%；未註明取位扣表達完整性。",
        "至少40分鐘只寫15人而未換百分比，該部分給一半。"
      ],
      "followThroughPolicy": "若總人數誤加但後續所有分母一致，最高2分；題目已給30，無理由改用其他分母。",
      "unitAndNotationRules": "相對次數可寫百分比或等值分數；若用小數須清楚，例如0.2。",
      "answerOnlyPolicy": "只列五個百分比且正確，無計算與總和檢查最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "6、9、10、5總和30；各占20%、30%、1/3、1/6，後兩組15/30=50%。",
        "boundaryAndAmbiguityAudit": "區間互斥且完整；「至少40」明確包含40至未滿60與60以上。",
        "rubricAlignmentEvidence": "評分同時涵蓋逐組比例、分母選擇、總和檢查及合併判讀。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "027f6da87955af970743469acf97c6f4ed9cc1aa70658d01e1e6c95e8115c05d",
      "commonErrors": [
        "把組別端點二十、四十、六十當次數加入分母，沒有固定總樣本三十人。",
        "把「至少四十分鐘」只算四十至未滿六十分鐘一組，漏掉六十分鐘以上五人。"
      ]
    },
    {
      "questionId": "u09-s002-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "frequency-table",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "某次問卷有效樣本原為80人，選A、B、C、D的人數分別為20、28、24、8。後來發現其中選B的4份問卷無效，應刪除。請重算有效樣本數與四選項相對次數，並說明為何不能只把B的百分比扣除5個百分點而保持其他比例不變。",
      "givenConditions": [],
      "target": "處理分母變動後的全表相對次數重算。",
      "requiredWork": [
        "刪除B的4人後同時更新B次數與總分母。",
        "四個比例均用新分母76。",
        "解釋其他比例也因分母變小而改變。"
      ],
      "standardSolution": [
        "新有效樣本=80-4=76人；A20、B24、C24、D8。",
        "A=20/76=5/19≈26.3%；B=24/76=6/19≈31.6%；C=6/19≈31.6%；D=8/76=2/19≈10.5%。",
        "不能只改B，因為所有相對次數的共同分母由80變為76；A、C、D的次數雖不變，比例仍會上升。",
        "新比例約為百分之二十六點三、三十一點六、三十一點六、十點五，四類因四捨五入約合百分之百；共同分母改變正是其餘三類也必須重算的原因。"
      ],
      "alternativeMethod": "可保留精確分數5/19、6/19、6/19、2/19，總和19/19=1。",
      "reasoningSteps": [
        "辨認無效問卷屬於B。",
        "更新B次數28-4=24及總分母80-4=76。",
        "每類重新除以76。",
        "用共同分母說明為何全表都受影響。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "新樣本76、四個正確比例與分母改變說明全部完整。"
        },
        {
          "score": 2,
          "criteria": "新次數與分母正確，但四比例有一處取位或約分錯；或比例全對但解釋不完整。"
        },
        {
          "score": 1,
          "criteria": "至少正確更新B為24與總數76，並知道需重算比例。"
        },
        {
          "score": 0,
          "criteria": "仍以80為分母且只改B，未理解有效樣本改變。"
        }
      ],
      "partialCreditRules": [
        "百分比取到小數點後1位允許總和99.9%或100.0%，須說明四捨五入。",
        "若保留分數，無須再轉百分比。"
      ],
      "followThroughPolicy": "若把某一比例算術做錯但分母76與方法一致，可保留方法分。",
      "unitAndNotationRules": "百分比取到小數點後1位；或使用精確分數。有效樣本以「人」或「份」表達一致。",
      "answerOnlyPolicy": "只寫76與四個數值、未解釋分母效應，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "刪除4份後次數20+24+24+8=76；分數依序5/19、6/19、6/19、2/19。",
        "boundaryAndAmbiguityAudit": "無效問卷來源明確為B；分母必然由80降至76。",
        "rubricAlignmentEvidence": "高分要求處理動態分母，這是本題核心而非單純計算。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "2ba886427280ab2ab2ca94842df3c51d2ae5435b683a6a3b23a4893d6b853a84",
      "commonErrors": [
        "只把 B 類二十八減四，卻仍以原分母八十計算所有相對次數。",
        "將四份無效問卷平均分散到各類，沒有使用題目明示它們全部來自 B 類。"
      ]
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s002-v001-semantic-r1",
      "questionId": "u09-s002-v001",
      "unitId": "u09",
      "skillId": "frequency-table",
      "independentRecalculation": "直接讀取蘋果列的人數，次數為 8。",
      "correctChoiceCheck": "獨立計算得到「8」，位於索引 1。",
      "distractorAudit": [
        "5 是香蕉次數。",
        "7 是芭樂次數。",
        "20 是全部人數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「8」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「次數與相對次數分配表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目只問次數，不問相對次數。",
      "difficultyEvidence": "單一類別直接讀值，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "422a42e55525756a9a6f4beec3e225a51d461eaf5834df243ff58b9981bfeee4"
    },
    {
      "reviewId": "u09-s002-v002-semantic-r1",
      "questionId": "u09-s002-v002",
      "unitId": "u09",
      "skillId": "frequency-table",
      "independentRecalculation": "把所有次數相加：2+5+4+1=12。",
      "correctChoiceCheck": "獨立計算得到「12 人」，位於索引 2。",
      "distractorAudit": [
        "漏加 4 分組。",
        "加總算錯。",
        "把分數值也加入次數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「12 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「次數與相對次數分配表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "四組無重疊，合計唯一。",
      "difficultyEvidence": "需合計完整次數欄，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "4a9666354b5ea002de1effd296cc40b4b3cb9e24116a7107c595cef8268f7f64"
    },
    {
      "reviewId": "u09-s002-v003-semantic-r1",
      "questionId": "u09-s002-v003",
      "unitId": "u09",
      "skillId": "frequency-table",
      "independentRecalculation": "相對次數＝次數÷總數＝6÷20=0.3。",
      "correctChoiceCheck": "獨立計算得到「0.3」，位於索引 3。",
      "distractorAudit": [
        "0.6 是把 6 除以 10。",
        "3 不是 0 到 1 之間的相對次數。",
        "14 是未步行的人數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「0.3」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「次數與相對次數分配表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "相對次數必在 0 與 1 之間。",
      "difficultyEvidence": "一次除法與基本定義，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a473f6380fe3f3ee50641b8f6c26f12fbc46dfc26a866125c6d8567f01d3976a"
    },
    {
      "reviewId": "u09-s002-v004-semantic-r1",
      "questionId": "u09-s002-v004",
      "unitId": "u09",
      "skillId": "frequency-table",
      "independentRecalculation": "已知三類共 30 人，所以第四類 40-30=10 人。",
      "correctChoiceCheck": "獨立計算得到「10 人」，位於索引 0。",
      "distractorAudit": [
        "8 是第三類。",
        "20 是把已知三類錯加。",
        "30 是前三類總數，不是缺值。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「10 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「次數與相對次數分配表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只有一格未知，因此解唯一。",
      "difficultyEvidence": "需利用總和限制回推，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a07e392b10248674b68ac3581029b0fdda29a7a89466d0b0c09a45304cc8d20f"
    },
    {
      "reviewId": "u09-s002-v005-semantic-r1",
      "questionId": "u09-s002-v005",
      "unitId": "u09",
      "skillId": "frequency-table",
      "independentRecalculation": "次數＝總數×相對次數＝50×0.24=12。",
      "correctChoiceCheck": "獨立計算得到「12 人」，位於索引 1。",
      "distractorAudit": [
        "把 0.24 當 2%。",
        "把 0.24 直接寫成 24 人。",
        "38 是其餘人數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「12 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「次數與相對次數分配表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "0.24×50 恰為整數，資料可行。",
      "difficultyEvidence": "需反用公式，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ec019d853b18939c67a6c7fb14ed308fbdc66ab36db12e8b99deee311bcd478e"
    },
    {
      "reviewId": "u09-s002-v006-semantic-r1",
      "questionId": "u09-s002-v006",
      "unitId": "u09",
      "skillId": "frequency-table",
      "independentRecalculation": "前三類合計 0.76，全部類別合計必為 1，所以 x=0.24。",
      "correctChoiceCheck": "獨立計算得到「0.24」，位於索引 2。",
      "distractorAudit": [
        "小數加總錯誤。",
        "0.76 是前三類合計。",
        "相對次數總和不得超過 1。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「0.24」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「次數與相對次數分配表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "若題目未涵蓋全部類別才不能強制總和為 1；本題已明示完整。",
      "difficultyEvidence": "要運用完整分配表性質，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "3b0aa90f32afa39e867dd5131024e701a909ad461440cc9a3df1190c18cb9459"
    },
    {
      "reviewId": "u09-s002-v007-semantic-r1",
      "questionId": "u09-s002-v007",
      "unitId": "u09",
      "skillId": "frequency-table",
      "independentRecalculation": "由相對次數先算 x=14×3/7=6；再用次數總和驗證。",
      "correctChoiceCheck": "獨立計算得到「6」，位於索引 3。",
      "distractorAudit": [
        "3 是資料值或最後一類次數。",
        "5 是資料值 2 的次數。",
        "9 會使總數為 17。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「6」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「次數與相對次數分配表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "兩個條件相容且唯一。",
      "difficultyEvidence": "需使用兩種表示交叉驗證，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d7bcd1b621afb2d2cc59ed6e3a674f7b173df47165a94fa638e746260215b24a"
    },
    {
      "reviewId": "u09-s002-v008-semantic-r1",
      "questionId": "u09-s002-v008",
      "unitId": "u09",
      "skillId": "frequency-table",
      "independentRecalculation": "計算 A=0.4，B≈0.333，故 A 班較高。",
      "correctChoiceCheck": "獨立計算得到「A 班」，位於索引 0。",
      "distractorAudit": [
        "B 人數較多但比例較低。",
        "0.4 不等於 1/3。",
        "兩班總數與次數都已知。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「A 班」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「次數與相對次數分配表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "比較目標是比例，資料充分。",
      "difficultyEvidence": "需排除樣本大小造成的錯覺，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "abdf76e1374619200bcb5a17b5a4d46d61f9c0fe1e90d1b38f2a6639566aa8cd"
    },
    {
      "reviewId": "u09-s002-v009-semantic-r1",
      "questionId": "u09-s002-v009",
      "unitId": "u09",
      "skillId": "frequency-table",
      "independentRecalculation": "總數 25；精確相對次數 0.16、0.28、0.36、0.20，加總 1；各自四捨五入成 0.2、0.3、0.4、0.2 才得 1.1。",
      "correctChoiceCheck": "獨立計算得到「各項四捨五入後可能使總和不等於 1」，位於索引 1。",
      "distractorAudit": [
        "次數總和 25，沒有多算。",
        "每個相對次數仍須介於 0 與 1，完整精確總和為 1。",
        "總人數由次數決定為 25。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「各項四捨五入後可能使總和不等於 1」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「次數與相對次數分配表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "問題明示有四捨五入，故不把 1.1 視為精確總和。",
      "difficultyEvidence": "需解釋資料呈現造成的誤差，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "406b4569e46b5097a3cb0f9f03cec13dd386d9b0be9b762c771f15d8101c8018"
    },
    {
      "reviewId": "u09-s002-v010-semantic-r1",
      "questionId": "u09-s002-v010",
      "unitId": "u09",
      "skillId": "frequency-table",
      "independentRecalculation": "外購若指早餐店，比例 70÷200=0.35=35%，所以報告錯。",
      "correctChoiceCheck": "獨立計算得到「不正確，外購只有 70 人，占 35%」，位於索引 2。",
      "distractorAudit": [
        "70 與 50 是人數和百分數混比。",
        "未吃不屬外購，不能相加。",
        "其他類已列出，不影響判斷早餐店比例。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「不正確，外購只有 70 人，占 35%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「次數與相對次數分配表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "『外購』依表中唯一對應早餐店；其他類未說是外購。",
      "difficultyEvidence": "需把報告文字轉成比例門檻。",
      "literacyEvidence": "早餐調查中的『一半』是報告結論核心，沒有情境便無法檢核敘述。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "5c2c4e023750c666f01abef2d3fa62721f8c7d61f5a269de4991a019ea79f8f2"
    },
    {
      "reviewId": "u09-s002-v011-semantic-r1",
      "questionId": "u09-s002-v011",
      "unitId": "u09",
      "skillId": "frequency-table",
      "independentRecalculation": "紙與塑膠共 0.625，金屬 0.375；320×3/8=120 公斤。",
      "correctChoiceCheck": "獨立計算得到「120 公斤」，位於索引 3。",
      "distractorAudit": [
        "40 是把剩餘比例算成 0.125。",
        "80 是塑膠重量。",
        "200 是紙與塑膠合計重量。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「120 公斤」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「次數與相對次數分配表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "三類完整，故剩餘全屬金屬。",
      "difficultyEvidence": "包含補比例與轉回實際量兩階段。",
      "literacyEvidence": "回收總量與分類比例共同決定金屬量，情境資訊不可刪除。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "725e12f294201e1a01d75927e86b1534d6c6245ab1220b4faabc069b65aab6ff"
    },
    {
      "reviewId": "u09-s002-v012-semantic-r1",
      "questionId": "u09-s002-v012",
      "unitId": "u09",
      "skillId": "frequency-table",
      "independentRecalculation": "題目限定『回覆者中』，所以 75/125=0.6。",
      "correctChoiceCheck": "獨立計算得到「75÷125=60%」，位於索引 0。",
      "distractorAudit": [
        "15% 是所有受邀者中已知支持者比例。",
        "25% 是回覆率。",
        "把支持者與回覆者重複相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「75÷125=60%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「次數與相對次數分配表」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "支持率僅描述回覆者，不推論未回覆者。",
      "difficultyEvidence": "需辨識母集合與子集合。",
      "literacyEvidence": "線上問卷的未回覆者使分母選擇成為必要統計判斷。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7781fff06e31a4f677fb74351539260974008cc4e0ab96f709ee5fa87a315e96"
    }
  ],
  "drawingSpecs": []
};
