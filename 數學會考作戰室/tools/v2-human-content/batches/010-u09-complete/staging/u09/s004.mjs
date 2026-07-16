// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s004-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-display",
    "skillId": "line-chart-text",
    "lockedTitle": "折線圖與次數分配折線圖",
    "title": "折線圖與次數分配折線圖：讀出時序與組中點",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "bar-chart-text"
      ],
      "explanation": "需能讀取座標刻度、類別數值與柱圖比較。"
    },
    "learningGoals": [
      "由資料點讀取指定時點值。",
      "計算相鄰變化與平均變化率。",
      "比較兩條折線的水準與波動。",
      "理解次數分配折線圖的橫軸組中點。",
      "審核門檻、恢復與改善幅度等敘述。"
    ],
    "vocabulary": [
      {
        "term": "資料點",
        "meaning": "一個橫軸位置與縱軸數值組成的點。"
      },
      {
        "term": "相鄰變化",
        "meaning": "後一點減前一點。"
      },
      {
        "term": "平均變化率",
        "meaning": "縱向改變除以橫向經過量。"
      },
      {
        "term": "組中點",
        "meaning": "組下限與上限的平均，作為次數分配折線圖橫座標。"
      },
      {
        "term": "水平線段",
        "meaning": "相鄰兩點數值相同。"
      }
    ],
    "notation": [
      {
        "symbol": "(x,y)",
        "meaning": "x 為時間或組中點，y 為測量值或次數。"
      },
      {
        "symbol": "後值－前值",
        "meaning": "帶正負方向的變化量。"
      }
    ],
    "conceptDevelopment": [
      "折線圖通常用於具有順序的時間或數值區間。",
      "連線幫助看趨勢，但已測資料仍是各資料點；未測時刻不能自動當成真實測值。",
      "增加最多要逐段計算後值減前值，而不是只找最高點。",
      "平均變化率還要除以橫軸間隔。",
      "次數分配折線圖的縱座標才是次數，橫座標是組中點。",
      "折線圖的每個資料點對應一個實際時點或組中點，連線主要協助觀察變化方向，不能自行創造未測時刻的精確數值。分析變化時先以後值減前值求相鄰差，再依題意區分總變化、下降幅度、百分點差與平均變化率；後者還要除以橫軸間隔。次數分配折線的橫座標是組中點、縱座標才是次數，因此總筆數只加縱座標。"
    ],
    "definitions": [
      {
        "name": "折線圖",
        "statement": "依橫軸順序連接資料點，呈現變化的統計圖。"
      },
      {
        "name": "次數分配折線圖",
        "statement": "以各組組中點為橫座標、次數為縱座標後連線的圖。"
      }
    ],
    "formulas": [
      {
        "formula": "相鄰變化量＝後值－前值",
        "conditions": [
          "兩點同單位"
        ]
      },
      {
        "formula": "平均每單位變化＝縱差÷橫差",
        "conditions": [
          "橫差不為 0"
        ]
      },
      {
        "formula": "總次數＝各資料點縱座標相加",
        "conditions": [
          "縱軸為次數"
        ]
      }
    ],
    "invalidUseCases": [
      "把折線中間任意位置當成實際觀測。",
      "只看最高點判斷哪一段增加最多。",
      "把組中點相加當總次數。",
      "用終值較高判斷改善幅度一定較大。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "讀橫軸順序與縱軸單位。"
      },
      {
        "step": 2,
        "action": "只在資料點讀值。"
      },
      {
        "step": 3,
        "action": "比較變化時逐段做後減前。"
      },
      {
        "step": 4,
        "action": "若問每小時或每單位，除以橫軸間隔。"
      },
      {
        "step": 5,
        "action": "次數分配折線圖只加縱座標求總數。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "數值 80、92、88、104，哪段增加最多？",
        "solution": [
          "變化為＋12、－4、＋16。"
        ],
        "answer": "第 3 到第 4 段。",
        "why": "增加最多比較的是每一對相鄰時點的後值減前值，不是找整列最高點。三段變化中只有十二與十六為增加，十六較大，因此第三到第四段才是最大上升區間。"
      },
      {
        "id": "L2",
        "prompt": "點 (2,18)、(5,30) 的平均每小時增加。",
        "solution": [
          "縱差 12，橫差 3。",
          "12÷3＝4。"
        ],
        "answer": "每小時 4。",
        "why": "平均變化率同時使用縱向總增加與橫向經過時間。由二到五共三小時，而數值增加十二，十二除三才得到每小時四；若只答十二，就只是總變化而非每小時。"
      },
      {
        "id": "L3",
        "prompt": "次數點 (5,2)、(15,6)、(25,4)。",
        "solution": [
          "只加縱座標 2＋6＋4。"
        ],
        "answer": "總次數 12。",
        "why": "次數分配折線的橫座標是各組中點，用來安排資料點位置；縱座標才代表該組次數。總筆數只加二、六、四得到十二，不能把五、十五、二十五混入。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "最高點 104 所以前一段一定增最多。",
        "why": "未比較每段起點。",
        "fix": "逐段算差。"
      },
      {
        "wrong": "30-18=12 就答每小時 12。",
        "why": "忽略經過 3 小時。",
        "fix": "再除橫差。"
      },
      {
        "wrong": "組中點 15 當次數。",
        "why": "混淆兩軸。",
        "fix": "次數讀縱軸。"
      },
      {
        "wrong": "最近一期回升就說已恢復起始水準。",
        "why": "未與起點比較。",
        "fix": "直接比起始與終值。"
      }
    ],
    "selfCheck": [
      "我讀的是資料點嗎？",
      "問的是總變化還是每單位變化？",
      "兩條線比較的是終值還是改善幅度？",
      "次數圖的縱座標是否被正確加總？"
    ],
    "summary": [
      "折線圖強調順序與變化。",
      "增加最多需逐段算差。",
      "平均變化率還要除橫差。",
      "次數分配折線圖以組中點作橫座標。"
    ],
    "connections": {
      "previous": "長條圖建立座標尺度與比較基礎。",
      "next": [
        "圓形圖把各類比例轉為整圓的百分比或角度。",
        "累積次數圖表也會利用順序，但數值代表截至某點的總和。"
      ]
    },
    "figureReferences": [
      "u09-fig-line-01",
      "u09-fig-line-02"
    ],
    "accessibilityNotes": "圖形數值同時寫入替代文字，連線不承載未在文字出現的關鍵資訊。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s004-v001",
        "u09-s004-v002",
        "u09-s004-v003",
        "u09-s004-v004",
        "u09-s004-v005",
        "u09-s004-v006",
        "u09-s004-v007",
        "u09-s004-v008",
        "u09-s004-v009",
        "u09-s004-v010",
        "u09-s004-v011",
        "u09-s004-v012"
      ],
      "constructedResponseIds": [
        "u09-s004-cr001",
        "u09-s004-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "區分單點、相鄰差、平均變化率、雙線比較與組中點。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需能讀取座標刻度、類別數值與柱圖比較。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "百分點、門檻與改善幅度均有精確語言限制。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "0e3c19767279530e3914a827c2036ec7daaa9322757a03ffa636b506a92dc010"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s004-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "折線圖記錄週一至週五氣溫為 20、23、21、25、24°C。週四氣溫是多少？",
      "givenConditions": [
        "每日一個資料點。"
      ],
      "target": "讀取指定時點資料",
      "choices": [
        "20°C",
        "21°C",
        "24°C",
        "25°C"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "依橫軸找到週四，再由資料點讀縱軸 25°C。",
        "derivedAnswer": "25°C",
        "trustStoredAnswer": false
      },
      "explanation": "折線只是連接資料點，指定日期要讀該點。 沿橫軸定位週四，再垂直讀該資料點為二十五度；週五二十四度與週三二十一度是其他日期，連線中間也不是已測點。",
      "steps": [
        "定位週四。",
        "讀取對應高度 25。",
        "將二十五度對回週四標籤，核對日期與溫度單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "20°C",
          "truth": false,
          "reason": "20°C 是週一。"
        },
        {
          "choice": "21°C",
          "truth": false,
          "reason": "21°C 是週三。"
        },
        {
          "choice": "24°C",
          "truth": false,
          "reason": "24°C 是週五。"
        },
        {
          "choice": "25°C",
          "truth": true,
          "reason": "週四資料點位於 25°C。"
        }
      ],
      "misconceptionTarget": "沿線中段估讀而非讀資料點 沿折線估讀相鄰位置，沒有先鎖定週四這個實際資料點。",
      "prerequisiteCheck": {
        "skillIds": [
          "bar-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案 25°C。",
      "ambiguityAndBoundaryAudit": "週四資料點清楚落在刻度上。",
      "difficultyReason": "單點讀值，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": "u09-fig-line-01",
      "drawingSpecId": "u09-draw-line-01",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c479196c6cb912eb29272c90edb50b6fffa10a711ad57b56ab279840302101f8"
    },
    {
      "questionId": "u09-s004-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "某折線圖四時點數值依序為 12、15、15、19。哪兩個相鄰時點沒有變化？",
      "givenConditions": [
        "時點等距與否不影響數值相同判斷。"
      ],
      "target": "辨認水平線段與不變",
      "choices": [
        "第 2 與第 3 時點",
        "第 1 與第 2 時點",
        "第 1 與第 4 時點",
        "第 3 與第 4 時點"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "比較相鄰差：+3、0、+4，只有第 2 到第 3 為 0。",
        "derivedAnswer": "第 2 與第 3 時點",
        "trustStoredAnswer": false
      },
      "explanation": "水平線段表示相鄰資料值相同。 相鄰變化依序為增加三、零、增加四，只有第二到第三時點數值都為十五，折線段呈水平；斜率很小仍不等於完全不變。",
      "steps": [
        "列出相鄰差。",
        "找到差為 0 的區段。",
        "用十五減十五等於零回查，確認水平段唯一出現在第二、三時點。"
      ],
      "optionAnalysis": [
        {
          "choice": "第 2 與第 3 時點",
          "truth": true,
          "reason": "兩點都為 15，線段水平。"
        },
        {
          "choice": "第 1 與第 2 時點",
          "truth": false,
          "reason": "12 到 15 有增加。"
        },
        {
          "choice": "第 1 與第 4 時點",
          "truth": false,
          "reason": "兩者不相鄰且數值不同。"
        },
        {
          "choice": "第 3 與第 4 時點",
          "truth": false,
          "reason": "15 到 19 有增加。"
        }
      ],
      "misconceptionTarget": "把斜率小誤認為不變 只憑線段看似平緩就判定不變，沒有檢查兩端數值是否相等。",
      "prerequisiteCheck": {
        "skillIds": [
          "bar-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案需指出兩個時點。",
      "ambiguityAndBoundaryAudit": "只有相鄰區段才對應一段折線。",
      "difficultyReason": "辨認簡單趨勢，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0265e8979eab8f1a8a85e677fa416b5ef16516f809b9593bec7263d6769ac32a"
    },
    {
      "questionId": "u09-s004-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "折線圖數值由 30 降到 24，下降多少？",
      "givenConditions": [
        "同一單位。"
      ],
      "target": "由兩點求下降量",
      "choices": [
        "-6",
        "6",
        "24",
        "54"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "30-24=6；若問變化量可寫 -6，但下降多少通常答 6。",
        "derivedAnswer": "6",
        "trustStoredAnswer": false
      },
      "explanation": "要區分變化方向與變化大小。 若問帶方向的變化量可寫負六，但題目問「下降多少」是下降幅度，應答正的六；二十四是末值，五十四則是無意義的相加。",
      "steps": [
        "確認起值 30、末值 24。",
        "相減求差 6。",
        "以末值二十四加下降六回到起值三十，驗證下降幅度。"
      ],
      "optionAnalysis": [
        {
          "choice": "-6",
          "truth": false,
          "reason": "-6 是帶方向變化量，不是問『下降多少』的大小。"
        },
        {
          "choice": "6",
          "truth": true,
          "reason": "下降量大小為 30-24=6。"
        },
        {
          "choice": "24",
          "truth": false,
          "reason": "24 是後值。"
        },
        {
          "choice": "54",
          "truth": false,
          "reason": "54 是相加。"
        }
      ],
      "misconceptionTarget": "把末值或負變化量當答案 未區分帶方向變化量與下降幅度，把負六或末值二十四當答案。",
      "prerequisiteCheck": {
        "skillIds": [
          "bar-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "題目問大小，答案不帶負號。",
      "ambiguityAndBoundaryAudit": "語句『下降多少』明確要求正的差距。",
      "difficultyReason": "基礎差值判讀。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bfda822fce86ab187114c9e8ee013714fa6129151ae6129e7a880fa7c069972b"
    },
    {
      "questionId": "u09-s004-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "某店四週營業額為 80、92、88、104 萬元。哪一週到下一週增加最多？",
      "givenConditions": [
        "單位萬元。"
      ],
      "target": "比較折線各段增量",
      "choices": [
        "第 1 週到第 2 週",
        "第 2 週到第 3 週",
        "第 3 週到第 4 週",
        "第 1 週到第 4 週"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "逐段算差：92-80=12、88-92=-4、104-88=16。",
        "derivedAnswer": "第 3 週到第 4 週",
        "trustStoredAnswer": false
      },
      "explanation": "比較增加最多需看相鄰差，不是最高點本身。 三段相鄰變化分別為增加十二、減少四、增加十六，最大正變化十六發生在第三到第四週；第四週最高不等於任何跨期比較都可選。",
      "steps": [
        "計算每段變化量。",
        "只保留正增加。",
        "比較 12 與 16。"
      ],
      "optionAnalysis": [
        {
          "choice": "第 1 週到第 2 週",
          "truth": false,
          "reason": "+12 小於 +16。"
        },
        {
          "choice": "第 2 週到第 3 週",
          "truth": false,
          "reason": "此段是下降 4。"
        },
        {
          "choice": "第 3 週到第 4 週",
          "truth": true,
          "reason": "相鄰變化為 +12、-4、+16，最大增加是 +16。"
        },
        {
          "choice": "第 1 週到第 4 週",
          "truth": false,
          "reason": "不是相鄰兩週的變化。"
        }
      ],
      "misconceptionTarget": "只看最高終點或跨多期差 只看到第四週數值最高，未逐段計算相鄰週的增加量。",
      "prerequisiteCheck": {
        "skillIds": [
          "bar-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "增加量 16 萬元。",
      "ambiguityAndBoundaryAudit": "題目限定『一週到下一週』。",
      "difficultyReason": "需逐段計算，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "38194d88187d2f7c09ea241d319daf4d21124d058eb1b91e6f64bbbd1cf469ff"
    },
    {
      "questionId": "u09-s004-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "次數分配折線圖的組中點與次數為 (5,2)、(15,6)、(25,4)。總次數是多少？",
      "givenConditions": [
        "次數無需乘組距。"
      ],
      "target": "由次數分配折線圖求總數",
      "choices": [
        "3",
        "15",
        "30",
        "12"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "總次數只加縱座標：2+6+4=12。",
        "derivedAnswer": "12",
        "trustStoredAnswer": false
      },
      "explanation": "次數分配折線圖的橫座標是組中點，不能與次數混加。 三個點的橫座標五、十五、二十五是組中點，縱座標二、六、四才是各組次數；總資料筆數為二加六加四等於十二。",
      "steps": [
        "辨識縱座標代表次數。",
        "加總三個次數。",
        "確認三個縱座標合計十二，橫座標完全不參與總次數。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3 是資料點個數。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "15 是中間組中點。"
        },
        {
          "choice": "30",
          "truth": false,
          "reason": "把組中點相加。"
        },
        {
          "choice": "12",
          "truth": true,
          "reason": "2+6+4=12。"
        }
      ],
      "misconceptionTarget": "把橫座標組中點當次數 把組中點五、十五、二十五加入次數，混淆兩座標軸的統計意義。",
      "prerequisiteCheck": {
        "skillIds": [
          "bar-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "總次數是整數。",
      "ambiguityAndBoundaryAudit": "三個點代表三組，資料完整。",
      "difficultyReason": "需要辨認兩軸角色，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "dfc4026bdd6c323b508b77e0424163613503b0b8aceca5e233db73e09576d7b6"
    },
    {
      "questionId": "u09-s004-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "折線圖某兩點為 (2,18) 與 (5,30)。若橫軸每單位代表 1 小時，平均每小時增加多少？",
      "givenConditions": [
        "單位為原數量／小時。"
      ],
      "target": "計算平均變化率",
      "choices": [
        "4",
        "12",
        "6",
        "48"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "總增加 12，時間經過 3 小時，所以平均每小時 4。",
        "derivedAnswer": "4",
        "trustStoredAnswer": false
      },
      "explanation": "平均變化率要同時考慮縱向差與橫向間隔。 縱向由十八增至三十共十二，橫向由二到五經過三小時，平均每小時為十二除三等於四；只答十二會漏掉時間尺度。",
      "steps": [
        "求縱差 12。",
        "求橫差 3。",
        "12÷3=4。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": true,
          "reason": "(30-18)÷(5-2)=12÷3=4。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12 是總增加量。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "6 是錯把 12 除以 2。"
        },
        {
          "choice": "48",
          "truth": false,
          "reason": "48 是相加或相乘錯誤。"
        }
      ],
      "misconceptionTarget": "只報總變化而忽略時間間隔 把總增加十二當成每小時增加量，沒有除以三小時的橫向間隔。",
      "prerequisiteCheck": {
        "skillIds": [
          "bar-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "結果精確為 4。",
      "ambiguityAndBoundaryAudit": "兩點間未要求線性逐時變化，只求平均。",
      "difficultyReason": "需結合兩軸差值，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "93c4f88714e0ecc54290bc433ac2d2cb52f917035c7a8d77137fe164564141b4"
    },
    {
      "questionId": "u09-s004-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某折線圖五日數值為 10、x、18、16、20，五日平均為 16。x 為多少？",
      "givenConditions": [
        "各日同單位。"
      ],
      "target": "由折線序列與平均補缺值",
      "choices": [
        "14",
        "16",
        "18",
        "20"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "16×5=80；10+18+16+20=64；x=80-64=16。",
        "derivedAnswer": "16",
        "trustStoredAnswer": false
      },
      "explanation": "折線圖提供序列資料，平均條件可回推遺失點。 五日平均十六代表總和八十，四個已知值十、十八、十六、二十合為六十四，缺值為十六；代回後總和及平均皆一致。",
      "steps": [
        "由平均求總和。",
        "加總已知四點。",
        "相減並代回。"
      ],
      "optionAnalysis": [
        {
          "choice": "14",
          "truth": false,
          "reason": "14 會使平均 15.6。"
        },
        {
          "choice": "16",
          "truth": true,
          "reason": "總和 80，已知和 64，故 x=16。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "18 會使平均 16.4。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "20 會使平均 16.8。"
        }
      ],
      "misconceptionTarget": "把鄰點平均直接當缺值 直接取缺值兩側十八與十的平均，沒有使用題目給定的五日平均。",
      "prerequisiteCheck": {
        "skillIds": [
          "bar-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "x 為整數。",
      "ambiguityAndBoundaryAudit": "未假設線性插值，僅使用平均條件。",
      "difficultyReason": "需逆推缺值，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9d7d875fa087c2ccd4dd46dcbe77fe700d927db5c6e6a5d8195000b49e93a87b"
    },
    {
      "questionId": "u09-s004-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "甲折線三期為 20、30、25；乙為 24、26、25。哪一敘述正確？",
      "givenConditions": [
        "同一尺度與單位。"
      ],
      "target": "比較兩條折線的終值與波動",
      "choices": [
        "甲每期都較高",
        "乙總增加較多",
        "兩組最後相同，但甲波動較大",
        "兩組三期平均一定不同"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "比較終值皆 25；範圍甲 30-20=10，乙 26-24=2。",
        "derivedAnswer": "兩組最後相同，但甲波動較大",
        "trustStoredAnswer": false
      },
      "explanation": "折線比較不能只看交會點，也要看整段變動。 兩組末期都為二十五，但甲的最大最小差十，乙只有二，故甲波動較大；末點相同不代表中間過程、範圍或各期高低相同。",
      "steps": [
        "比較各期數值。",
        "計算兩組範圍。",
        "核驗平均或淨變化。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲每期都較高",
          "truth": false,
          "reason": "第一期甲 20 小於乙 24。"
        },
        {
          "choice": "乙總增加較多",
          "truth": false,
          "reason": "甲淨增 5，乙淨增 1。"
        },
        {
          "choice": "兩組最後相同，但甲波動較大",
          "truth": true,
          "reason": "最後皆 25；甲範圍 10，乙範圍 2。"
        },
        {
          "choice": "兩組三期平均一定不同",
          "truth": false,
          "reason": "甲平均 25，乙平均 25。"
        }
      ],
      "misconceptionTarget": "只看最後交會便認為過程相同 只看到最後交會在二十五，就宣稱兩組整段走勢與波動完全相同。",
      "prerequisiteCheck": {
        "skillIds": [
          "bar-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "不需四捨五入。",
      "ambiguityAndBoundaryAudit": "『波動較大』以觀察範圍支持，資料充分。",
      "difficultyReason": "同時比較位置與變化，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "93ee82efe85a847b2d591deb2477f9ca9038401b40d6dcf044bbd7019e8b2d24"
    },
    {
      "questionId": "u09-s004-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "次數分配折線圖三點 (10,4)、(20,9)、(30,7)。若遺漏了組中點 40 的一組，且總次數為 25，該點縱座標是多少？",
      "givenConditions": [
        "次數為非負整數。"
      ],
      "target": "補次數分配折線圖缺點",
      "choices": [
        "3",
        "15",
        "40",
        "5"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "已知次數合計 20，缺組次數 25-20=5，因此點為 (40,5)。",
        "derivedAnswer": "5",
        "trustStoredAnswer": false
      },
      "explanation": "橫座標 40 是組中點，縱座標才是待求次數。 已知縱座標四、九、七合計二十，總次數二十五尚缺五；橫座標四十已由組中點指定，因此遺漏點只能是四十、五。",
      "steps": [
        "加總已知縱座標。",
        "由總次數扣除。",
        "組成缺點座標。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3 是點數。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "15 是 25-10 的錯算。"
        },
        {
          "choice": "40",
          "truth": false,
          "reason": "40 是橫座標。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "25-(4+9+7)=5。"
        }
      ],
      "misconceptionTarget": "把組中點當缺次數 把橫座標四十當成待求次數，沒有由縱座標合計回推缺值。",
      "prerequisiteCheck": {
        "skillIds": [
          "bar-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案問縱座標，寫 5。",
      "ambiguityAndBoundaryAudit": "總次數唯一決定缺值。",
      "difficultyReason": "需整合圖點與總數，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d7f192a88f002c7ae91ce30d2d54c003575cf8e91951f1ad967b67af6230dc24"
    },
    {
      "questionId": "u09-s004-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "空氣品質折線圖顯示某日 8、10、12、14 時的 PM2.5 為 18、26、42、30。公告門檻為 35。在哪個已測時點超過門檻？",
      "givenConditions": [
        "PM2.5 單位依公告一致。"
      ],
      "target": "用折線資料判斷門檻事件",
      "choices": [
        "12 時",
        "10 時",
        "12 時與14 時",
        "無任何時點"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "逐點與 35 比較：18、26、30 未超過；42 超過。",
        "derivedAnswer": "12 時",
        "trustStoredAnswer": false
      },
      "explanation": "公告只適用已測資料點，不能由連線任意推測未測時刻。 四個已測值逐一與三十五比較，只有十二時的四十二超過門檻；折線穿越門檻只表示兩測點間可能曾通過，不能新增一個精確測值。",
      "steps": [
        "標出門檻 35。",
        "比較四個測值。",
        "回到時間標籤。"
      ],
      "optionAnalysis": [
        {
          "choice": "12 時",
          "truth": true,
          "reason": "只有 42 大於 35，對應 12 時。"
        },
        {
          "choice": "10 時",
          "truth": false,
          "reason": "10 時為 26。"
        },
        {
          "choice": "12 時與14 時",
          "truth": false,
          "reason": "14 時為 30，未超過。"
        },
        {
          "choice": "無任何時點",
          "truth": false,
          "reason": "12 時已超過。"
        }
      ],
      "misconceptionTarget": "把連線經過門檻當成額外測值 把折線與門檻的交點當成額外量測時刻，或把十四時三十誤判超標。",
      "prerequisiteCheck": {
        "skillIds": [
          "bar-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 110,
      "unitAndRoundingCheck": "答案為 12 時。",
      "ambiguityAndBoundaryAudit": "題目問已測時點，不要求估計穿越時間。",
      "difficultyReason": "需結合時序圖與健康門檻。",
      "literacyNecessityReason": "空品門檻決定哪些資料點需警示，情境是判斷核心。",
      "figureId": "u09-fig-line-02",
      "drawingSpecId": "u09-draw-line-02",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f4b67a725431947787daec989fc7cfb7d568b7b0d8498d5f9b45ed6c7edf51f3"
    },
    {
      "questionId": "u09-s004-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "水庫蓄水率連續四週為 62%、58%、55%、57%。管理單位稱『第四週已恢復到第一週水準』。何者正確？",
      "givenConditions": [
        "同為蓄水率百分比。"
      ],
      "target": "審核折線趨勢敘述與百分點",
      "choices": [
        "正確，因第四週比第三週高",
        "不正確，第四週仍比第一週低 5 個百分點",
        "不正確，低 5%（表示相對少 5%）",
        "無法比較百分比"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "第一週 62%，第四週 57%，差 5 個百分點，所以尚未恢復。",
        "derivedAnswer": "不正確，第四週仍比第一週低 5 個百分點",
        "trustStoredAnswer": false
      },
      "explanation": "百分比指標的直接差應稱百分點，避免與相對變化率混淆。 第四週五十七雖比第三週五十五回升，但仍比第一週六十二低五個百分點，所以尚未恢復；百分點差不同於以第一週為分母的相對降幅。",
      "steps": [
        "讀第一週與第四週。",
        "相減 62-57。",
        "用百分點表述。"
      ],
      "optionAnalysis": [
        {
          "choice": "正確，因第四週比第三週高",
          "truth": false,
          "reason": "回升 2 個百分點不等於恢復到 62%。"
        },
        {
          "choice": "不正確，第四週仍比第一週低 5 個百分點",
          "truth": true,
          "reason": "57%-62%=-5 個百分點。"
        },
        {
          "choice": "不正確，低 5%（表示相對少 5%）",
          "truth": false,
          "reason": "此處直接差是 5 個百分點，不宜說相對少 5%。"
        },
        {
          "choice": "無法比較百分比",
          "truth": false,
          "reason": "同一指標可直接比較。"
        }
      ],
      "misconceptionTarget": "只看最近一期回升就宣稱完全恢復 只見最近一期上升便說完全恢復，沒有把第四週直接與第一週比較。",
      "prerequisiteCheck": {
        "skillIds": [
          "bar-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "差為 5 個百分點。",
      "ambiguityAndBoundaryAudit": "『恢復到』要求數值至少回到原水準。",
      "difficultyReason": "需判讀長期基準與用詞。",
      "literacyNecessityReason": "水庫公告中的『恢復』必須對照起始水準，刪除情境會失去敘述審核目的。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "200ad03e656ccee1e59feeb8a90b27bcdf1123c077282a7f025d57d7398e392d"
    },
    {
      "questionId": "u09-s004-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "公車準點率折線圖：甲線三月 88%、四月 92%；乙線三月 94%、四月 95%。報導稱『甲線改善幅度較大』。判斷為何？",
      "givenConditions": [
        "率的差使用百分點。"
      ],
      "target": "比較兩條百分比折線的變化幅度",
      "choices": [
        "不合理，乙四月較高",
        "合理，甲增加 4% 而乙增加 1%",
        "合理，甲增加 4 個百分點，乙增加 1 個百分點",
        "資料不足，因沒有乘客數"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "甲：92-88=4 個百分點；乙：95-94=1 個百分點，甲較大。",
        "derivedAnswer": "合理，甲增加 4 個百分點，乙增加 1 個百分點",
        "trustStoredAnswer": false
      },
      "explanation": "比較『水準』與『改善幅度』是不同問題。 改善幅度看同一路線前後差，甲由八十八到九十二增加四個百分點，乙由九十四到九十五只增加一個百分點；乙的最終水準較高是另一問題。",
      "steps": [
        "分別算兩線前後差。",
        "統一以百分點表達。",
        "比較 4 與 1。"
      ],
      "optionAnalysis": [
        {
          "choice": "不合理，乙四月較高",
          "truth": false,
          "reason": "終值較高不等於改善幅度較大。"
        },
        {
          "choice": "合理，甲增加 4% 而乙增加 1%",
          "truth": false,
          "reason": "應表述為百分點；若說相對百分比需另算。"
        },
        {
          "choice": "合理，甲增加 4 個百分點，乙增加 1 個百分點",
          "truth": true,
          "reason": "改善幅度比較同一路線前後差：甲 +4、乙 +1 個百分點。"
        },
        {
          "choice": "資料不足，因沒有乘客數",
          "truth": false,
          "reason": "比較準點率變化不一定需要乘客數。"
        }
      ],
      "misconceptionTarget": "用最後高低代替改善幅度 以四月準點率乙較高取代前後差比較，混淆水準與改善幅度。",
      "prerequisiteCheck": {
        "skillIds": [
          "bar-chart-text"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "不需四捨五入。",
      "ambiguityAndBoundaryAudit": "報導只談圖示期間的改善，不外推其他月份。",
      "difficultyReason": "需分清終值與變化量。",
      "literacyNecessityReason": "公車服務評估中的改善幅度取決於各線前後變化，而非單一終值。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "55f419c6a4a4dd1ee05a09657379b98729d9756a251905384bceea2f46b186e9"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s004-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "某地週一至週五最高溫依序為20、23、21、25、24°C。請列出每日相較前一日的變化量，指出最大上升發生在哪兩日之間，並求五日最高溫的全距。",
      "givenConditions": [],
      "target": "由折線資料計算相鄰變化、辨認趨勢與全距。",
      "requiredWork": [
        "四個變化量依後日減前日。",
        "指出最大上升的日期區間。",
        "全距用最高值減最低值。"
      ],
      "standardSolution": [
        "週二-週一=+3°C；週三-週二=-2°C；週四-週三=+4°C；週五-週四=-1°C。",
        "最大上升為週三到週四，上升4°C。",
        "全距=25-20=5°C。",
        "四段變化量正負方向均以後日減前日定義；最大上升四度與全距五度分別回答相鄰變化及五日整體跨度，兩者不可混為同一統計量。"
      ],
      "alternativeMethod": "可在折線各線段旁標+3、-2、+4、-1後比較。",
      "reasoningSteps": [
        "按時間順序讀值。",
        "逐段做後值減前值。",
        "比較正變化找最大上升。",
        "找五日最大與最小求全距。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "四個變化量、週三至週四最大上升4°C及全距5°C全部正確。"
        },
        {
          "score": 2,
          "criteria": "趨勢區間與全距正確，但一個變化量符號或算術錯。"
        },
        {
          "score": 1,
          "criteria": "至少算對兩個相鄰變化，或正確指出最大上升區間。"
        },
        {
          "score": 0,
          "criteria": "把各日溫度當變化量，且無正確趨勢或全距。"
        }
      ],
      "partialCreditRules": [
        "變化量若只寫3、2、4、1而漏符號，最多2分。",
        "只答週四最高不等於最大上升，該部分不給分。"
      ],
      "followThroughPolicy": "單一日讀值錯誤會影響相鄰兩段；若後續一致，最多扣該局部。",
      "unitAndNotationRules": "溫度與變化量均寫°C；上升與下降文字可代替正負號。",
      "answerOnlyPolicy": "只列答案無相減過程且全對，最高2分。",
      "figureId": "u09-fig-line-01",
      "drawingSpecId": "u09-draw-line-01",
      "independentReview": {
        "independentDerivation": "相鄰差3、-2、4、-1；最大正差4在週三至週四；25-20=5。",
        "boundaryAndAmbiguityAudit": "日期順序固定，最高溫而非平均溫度；全距定義明確。",
        "rubricAlignmentEvidence": "同時評估線段變化與整體跨度。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "dbaa2292d721b365eb1d53436ce53cea6c3852a5676a89a505fe0bec3be97611",
      "commonErrors": [
        "把前日減後日而顛倒所有升降符號，導致最大上升區段判錯。",
        "用週四到週三的四度當全距，沒有以五日最大二十五減最小二十。"
      ]
    },
    {
      "questionId": "u09-s004-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "line-chart-text",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "某次數分配折線圖以各組組中點10、20、30、40、50表示次數，對應次數為2、7、11、6、4。請求總次數、次數最多組的組中點，並解釋為何不能據此斷言該組每一筆資料都等於30。",
      "givenConditions": [],
      "target": "判讀次數分配折線圖的組中點與次數，避免把代表位置當原始資料。",
      "requiredWork": [
        "加總五個次數。",
        "找最高點所對應的組中點。",
        "說明組中點代表區間而非所有觀測值。"
      ],
      "standardSolution": [
        "總次數=2+7+11+6+4=30。",
        "最高次數11對應組中點30，所以該組為次數最多組。",
        "圖上的30是該組區間的組中點，用來畫點；組內資料可分布在該區間，不必全部等於30。",
        "最高點的橫座標三十只標示該組區間中心，十一筆資料可分散在中心兩側；折線保留組次數，不提供每筆原始觀測值，因此不能推出十一筆全等於三十。"
      ],
      "alternativeMethod": "若組距為10，可說明組中點30通常代表25至未滿35一組；即使未給端點，也能確定30只是代表位置。",
      "reasoningSteps": [
        "辨認橫軸是組中點，縱軸是次數。",
        "將所有縱軸次數相加。",
        "找最高點並讀其橫座標。",
        "區分組中點與原始觀測值。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "總次數30、組中點30及不能斷言每筆等於30的理由完整。"
        },
        {
          "score": 2,
          "criteria": "兩個數值正確但概念解釋僅說「不一定」；或解釋完整但加總一處小錯。"
        },
        {
          "score": 1,
          "criteria": "能讀出最高點為11對應30，或知道橫軸為組中點。"
        },
        {
          "score": 0,
          "criteria": "把橫軸數值相加當總次數，並認定11筆都等於30。"
        }
      ],
      "partialCreditRules": [
        "若學生自行假定組距10並寫25≤x<35，須明示是假設；不影響核心分。",
        "只答最高次數11而未答組中點30，該部分不完整。"
      ],
      "followThroughPolicy": "加總算術錯誤不應影響組中點與概念解釋的得分。",
      "unitAndNotationRules": "總次數可寫「筆」或「人」但需一致；組中點30依原量單位，題目未給可不加。",
      "answerOnlyPolicy": "只寫30、30、不一定，最高1分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "次數和30；最大11位於橫座標30；組中點是區間代表，不是11筆的共同實值。",
        "boundaryAndAmbiguityAudit": "題目未給組端點，因此答案不強制推定25至35，只要求組中點概念。",
        "rubricAlignmentEvidence": "數值判讀與統計圖表示法限制各有獨立配分。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "e1ce1b6dc2cc048efa729c3f71e360016278e301a7e2d942a71f01acff63578b",
      "commonErrors": [
        "把橫座標組中點十、二十等加入縱座標次數，錯算總資料筆數。",
        "看到最高點位於三十就宣稱十一筆資料都等於三十，忽略分組已隱去組內細節。"
      ]
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s004-v001-semantic-r1",
      "questionId": "u09-s004-v001",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "independentRecalculation": "依橫軸找到週四，再由資料點讀縱軸 25°C。",
      "correctChoiceCheck": "獨立計算得到「25°C」，位於索引 3。",
      "distractorAudit": [
        "20°C 是週一。",
        "21°C 是週三。",
        "24°C 是週五。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「25°C」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「折線圖與次數分配折線圖」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "週四資料點清楚落在刻度上。",
      "difficultyEvidence": "單點讀值，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c8193fb96540fb63e555cddcfc25fc2499033a2013283b1c1775be1109c20346"
    },
    {
      "reviewId": "u09-s004-v002-semantic-r1",
      "questionId": "u09-s004-v002",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "independentRecalculation": "比較相鄰差：+3、0、+4，只有第 2 到第 3 為 0。",
      "correctChoiceCheck": "獨立計算得到「第 2 與第 3 時點」，位於索引 0。",
      "distractorAudit": [
        "12 到 15 有增加。",
        "兩者不相鄰且數值不同。",
        "15 到 19 有增加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「第 2 與第 3 時點」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「折線圖與次數分配折線圖」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只有相鄰區段才對應一段折線。",
      "difficultyEvidence": "辨認簡單趨勢，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d8cf1913ecdfea552716e672dd866126538718eb27fe8791f3bba069597d5cd6"
    },
    {
      "reviewId": "u09-s004-v003-semantic-r1",
      "questionId": "u09-s004-v003",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "independentRecalculation": "30-24=6；若問變化量可寫 -6，但下降多少通常答 6。",
      "correctChoiceCheck": "獨立計算得到「6」，位於索引 1。",
      "distractorAudit": [
        "-6 是帶方向變化量，不是問『下降多少』的大小。",
        "24 是後值。",
        "54 是相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「6」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「折線圖與次數分配折線圖」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "語句『下降多少』明確要求正的差距。",
      "difficultyEvidence": "基礎差值判讀。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c12349fc6bc2c85cc625c14fe181e19aed043210c9384e856d7f67723204fba0"
    },
    {
      "reviewId": "u09-s004-v004-semantic-r1",
      "questionId": "u09-s004-v004",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "independentRecalculation": "逐段算差：92-80=12、88-92=-4、104-88=16。",
      "correctChoiceCheck": "獨立計算得到「第 3 週到第 4 週」，位於索引 2。",
      "distractorAudit": [
        "+12 小於 +16。",
        "此段是下降 4。",
        "不是相鄰兩週的變化。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「第 3 週到第 4 週」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「折線圖與次數分配折線圖」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目限定『一週到下一週』。",
      "difficultyEvidence": "需逐段計算，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "89a4a2de8ec2f8b6e78fdbb855d4b468c4396b2bef2816739ee5a7eb0a63fe19"
    },
    {
      "reviewId": "u09-s004-v005-semantic-r1",
      "questionId": "u09-s004-v005",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "independentRecalculation": "總次數只加縱座標：2+6+4=12。",
      "correctChoiceCheck": "獨立計算得到「12」，位於索引 3。",
      "distractorAudit": [
        "3 是資料點個數。",
        "15 是中間組中點。",
        "把組中點相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「12」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「折線圖與次數分配折線圖」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "三個點代表三組，資料完整。",
      "difficultyEvidence": "需要辨認兩軸角色，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a9a438776b5c1180364bebdd33c12e584d46e3ad3483e8b485ad6f6401a69d10"
    },
    {
      "reviewId": "u09-s004-v006-semantic-r1",
      "questionId": "u09-s004-v006",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "independentRecalculation": "總增加 12，時間經過 3 小時，所以平均每小時 4。",
      "correctChoiceCheck": "獨立計算得到「4」，位於索引 0。",
      "distractorAudit": [
        "12 是總增加量。",
        "6 是錯把 12 除以 2。",
        "48 是相加或相乘錯誤。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「4」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「折線圖與次數分配折線圖」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "兩點間未要求線性逐時變化，只求平均。",
      "difficultyEvidence": "需結合兩軸差值，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7878d2497241bb2310ac76b88d0883ec492f34d39e9a3d8b31f690c1fa13db39"
    },
    {
      "reviewId": "u09-s004-v007-semantic-r1",
      "questionId": "u09-s004-v007",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "independentRecalculation": "16×5=80；10+18+16+20=64；x=80-64=16。",
      "correctChoiceCheck": "獨立計算得到「16」，位於索引 1。",
      "distractorAudit": [
        "14 會使平均 15.6。",
        "18 會使平均 16.4。",
        "20 會使平均 16.8。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「16」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「折線圖與次數分配折線圖」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "未假設線性插值，僅使用平均條件。",
      "difficultyEvidence": "需逆推缺值，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "5992351de7a846ddb670737156ad67e4d5b9abee905fdfae5afe67785fca0b1c"
    },
    {
      "reviewId": "u09-s004-v008-semantic-r1",
      "questionId": "u09-s004-v008",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "independentRecalculation": "比較終值皆 25；範圍甲 30-20=10，乙 26-24=2。",
      "correctChoiceCheck": "獨立計算得到「兩組最後相同，但甲波動較大」，位於索引 2。",
      "distractorAudit": [
        "第一期甲 20 小於乙 24。",
        "甲淨增 5，乙淨增 1。",
        "甲平均 25，乙平均 25。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「兩組最後相同，但甲波動較大」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「折線圖與次數分配折線圖」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "『波動較大』以觀察範圍支持，資料充分。",
      "difficultyEvidence": "同時比較位置與變化，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "cc3a60de752b2ea0f6498eb79fa4779fe3186c37405ec926107cd14ef4edb22f"
    },
    {
      "reviewId": "u09-s004-v009-semantic-r1",
      "questionId": "u09-s004-v009",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "independentRecalculation": "已知次數合計 20，缺組次數 25-20=5，因此點為 (40,5)。",
      "correctChoiceCheck": "獨立計算得到「5」，位於索引 3。",
      "distractorAudit": [
        "3 是點數。",
        "15 是 25-10 的錯算。",
        "40 是橫座標。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「5」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「折線圖與次數分配折線圖」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "總次數唯一決定缺值。",
      "difficultyEvidence": "需整合圖點與總數，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "16243a079438f73c3181cd4435048af29fc41c6059034dac4908ade72592249e"
    },
    {
      "reviewId": "u09-s004-v010-semantic-r1",
      "questionId": "u09-s004-v010",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "independentRecalculation": "逐點與 35 比較：18、26、30 未超過；42 超過。",
      "correctChoiceCheck": "獨立計算得到「12 時」，位於索引 0。",
      "distractorAudit": [
        "10 時為 26。",
        "14 時為 30，未超過。",
        "12 時已超過。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「12 時」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「折線圖與次數分配折線圖」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目問已測時點，不要求估計穿越時間。",
      "difficultyEvidence": "需結合時序圖與健康門檻。",
      "literacyEvidence": "空品門檻決定哪些資料點需警示，情境是判斷核心。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "cb50115c84048af0a18787fc6b7fd9db362f31848cd24f0ed97f32dcf04b6f5c"
    },
    {
      "reviewId": "u09-s004-v011-semantic-r1",
      "questionId": "u09-s004-v011",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "independentRecalculation": "第一週 62%，第四週 57%，差 5 個百分點，所以尚未恢復。",
      "correctChoiceCheck": "獨立計算得到「不正確，第四週仍比第一週低 5 個百分點」，位於索引 1。",
      "distractorAudit": [
        "回升 2 個百分點不等於恢復到 62%。",
        "此處直接差是 5 個百分點，不宜說相對少 5%。",
        "同一指標可直接比較。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「不正確，第四週仍比第一週低 5 個百分點」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「折線圖與次數分配折線圖」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "『恢復到』要求數值至少回到原水準。",
      "difficultyEvidence": "需判讀長期基準與用詞。",
      "literacyEvidence": "水庫公告中的『恢復』必須對照起始水準，刪除情境會失去敘述審核目的。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6996e17e2e61d8e8178a6c58a087c16d6e811df5faf469a07ea9d9e89e80bfe5"
    },
    {
      "reviewId": "u09-s004-v012-semantic-r1",
      "questionId": "u09-s004-v012",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "independentRecalculation": "甲：92-88=4 個百分點；乙：95-94=1 個百分點，甲較大。",
      "correctChoiceCheck": "獨立計算得到「合理，甲增加 4 個百分點，乙增加 1 個百分點」，位於索引 2。",
      "distractorAudit": [
        "終值較高不等於改善幅度較大。",
        "應表述為百分點；若說相對百分比需另算。",
        "比較準點率變化不一定需要乘客數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「合理，甲增加 4 個百分點，乙增加 1 個百分點」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「折線圖與次數分配折線圖」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "報導只談圖示期間的改善，不外推其他月份。",
      "difficultyEvidence": "需分清終值與變化量。",
      "literacyEvidence": "公車服務評估中的改善幅度取決於各線前後變化，而非單一終值。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2b02201a57565156d6d5aa7e43295696f4899b99894610125502afef91935096"
    }
  ],
  "drawingSpecs": [
    {
      "drawingSpecId": "u09-draw-line-01",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "file": "figures/u09/u09-fig-line-01.svg",
      "purpose": "判讀週一至週五20、23、21、25、24°C的時序折線。",
      "canvas": {
        "width": 640,
        "height": 400,
        "viewBox": "0 0 640 400"
      },
      "coordinateSystem": "x座標130,240,350,460,570對應週一至週五；y=330代表18°C，每1°C30像素，上限26°C。",
      "elements": [
        "資料點(130,270),(240,180),(350,240),(460,120),(570,150)。",
        "依時間順序以折線連接，資料點為半徑6圓。",
        "縱軸刻度18、20、22、24、26；各點旁標20、23、21、25、24。"
      ],
      "labels": {
        "title": "週一至週五最高溫",
        "xAxis": "日期",
        "yAxis": "最高溫（°C）"
      },
      "scale": {
        "toScale": true,
        "warning": "折線只連接已測日期，不能推定日期之間未測時刻的精確溫度。"
      },
      "visibleHiddenRules": "折線與座標軸實線；水平輔助線細實線；無隱藏線。",
      "altText": "折線圖：週一20、週二23、週三21、週四25、週五24°C。",
      "mobileReadability": "資料點直徑12px、日期間距110px、數值標籤16px。",
      "answerLeakage": "不額外強調週四或最大變化線段。",
      "assertions": [
        "polyline has five points",
        "circle count=5",
        "text includes 週一..週五 and 20,23,21,25,24",
        "title and desc present"
      ],
      "figureId": "u09-fig-line-01",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "cf54496c21bc9bfa73d9dd2b1219b1c7685877a899543c8b0a06b3aa9e9ab322"
    },
    {
      "drawingSpecId": "u09-draw-line-02",
      "unitId": "u09",
      "skillId": "line-chart-text",
      "file": "figures/u09/u09-fig-line-02.svg",
      "purpose": "將PM2.5時序資料與公告門檻35比較。",
      "canvas": {
        "width": 640,
        "height": 400,
        "viewBox": "0 0 640 400"
      },
      "coordinateSystem": "x=140,280,420,560對應8、10、12、14時；y=330代表0，每1單位6像素，上限50。",
      "elements": [
        "資料點18、26、42、30對應(140,222),(280,174),(420,78),(560,150)。",
        "y=120畫門檻35虛線並標「門檻35」。",
        "折線依時間連接，點旁標數值。"
      ],
      "labels": {
        "title": "單日PM2.5測值",
        "xAxis": "時間",
        "yAxis": "PM2.5"
      },
      "scale": {
        "toScale": true,
        "warning": "只比較已測四個時點；不可推斷其他時刻是否超標。"
      },
      "visibleHiddenRules": "資料折線實線；門檻線虛線；無隱藏線。",
      "altText": "折線圖：8時18、10時26、12時42、14時30；門檻35，只有12時已測值超過。",
      "mobileReadability": "點與門檻標籤至少16px，四時點間距140px。",
      "answerLeakage": "圖未以特殊顏色圈出超標點，需自行比較42與35。",
      "assertions": [
        "polyline four points",
        "threshold dasharray",
        "text includes 18,26,42,30,35",
        "title and desc present"
      ],
      "figureId": "u09-fig-line-02",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "82fbb01977ef3e9c8c499328ee18547f9c4f427b86b4c11cfe4f5dc553960d57"
    }
  ]
};
