// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s003-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-display",
    "skillId": "bar-chart-text",
    "lockedTitle": "長條圖文字判讀",
    "title": "長條圖文字判讀：刻度比柱子外觀更重要",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "frequency-table"
      ],
      "explanation": "需能由次數表讀出類別、次數與相對次數。"
    },
    "learningGoals": [
      "辨認橫軸類別、縱軸尺度與單位。",
      "精確讀取柱高並求差、和與比例。",
      "判讀分組長條圖與圖例。",
      "辨識縱軸截斷造成的視覺誤導。",
      "在不同總量下選擇公平比較指標。"
    ],
    "vocabulary": [
      {
        "term": "長條圖",
        "meaning": "用分離的長條表示離散類別大小。"
      },
      {
        "term": "刻度",
        "meaning": "座標軸每格代表的數值。"
      },
      {
        "term": "基線",
        "meaning": "長條開始的位置，通常是 0。"
      },
      {
        "term": "圖例",
        "meaning": "說明顏色或紋理對應群組的標示。"
      },
      {
        "term": "截斷軸",
        "meaning": "座標軸未從 0 開始的呈現方式。"
      }
    ],
    "notation": [
      {
        "symbol": "Δ",
        "meaning": "兩柱數值差，可用大值減小值。"
      },
      {
        "symbol": "每萬人",
        "meaning": "把不同人口規模標準化後的比較單位。"
      }
    ],
    "conceptDevelopment": [
      "長條圖適合比較不同類別，柱子通常彼此分開。",
      "柱高要依縱軸刻度換算；6 格不一定是 6，若每格 5 就是 30。",
      "分組長條圖要先讀圖例，再在同一類別內比較。",
      "縱軸不從 0 開始時，視覺差異會被放大，實際比較仍以刻度數值為準。",
      "若類別背後總人口不同，總數柱高未必能代表個人資源或風險。",
      "判讀長條圖要把橫軸類別、縱軸單位、刻度間距與柱頂高度一起閱讀；柱寬、顏色或排列位置若未被定義，就不能當成資料。比較多組資料時，先依圖例配對再計算合計、差距或比例。遇到截斷縱軸，必須使用刻度上的完整數值而非可見柱長倍數；遇到不同母體規模，則應換算成每人、每萬人等共同基準後再作公平比較。"
    ],
    "definitions": [
      {
        "name": "柱高",
        "statement": "長條頂端在縱軸對應的資料值。"
      },
      {
        "name": "公平比較",
        "statement": "將不同規模群體換算到共同分母後再比較。"
      }
    ],
    "formulas": [
      {
        "formula": "差值＝較大柱值－較小柱值",
        "conditions": [
          "同單位同尺度"
        ]
      },
      {
        "formula": "部分占比＝指定柱值合計÷全部柱值合計",
        "conditions": [
          "類別互斥且完整"
        ]
      },
      {
        "formula": "每單位人口率＝事件數÷人口數×標準人口",
        "conditions": [
          "比較不同人口規模"
        ]
      }
    ],
    "invalidUseCases": [
      "只比較柱子的可見長度，不看軸起點。",
      "把柱寬或排列位置當成資料大小。",
      "分組圖未讀圖例就相加。",
      "人口不同時直接說公園總數多者服務一定較好。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "讀圖名與兩軸。"
      },
      {
        "step": 2,
        "action": "確認縱軸從哪裡開始及每格多少。"
      },
      {
        "step": 3,
        "action": "依圖例讀取指定柱。"
      },
      {
        "step": 4,
        "action": "按題意算差、和、比例或門檻。"
      },
      {
        "step": 5,
        "action": "檢查是否需要用人口或期間標準化。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "柱高 6 格，每格 5 件。",
        "solution": [
          "6×5＝30。"
        ],
        "answer": "30 件。",
        "why": "柱高的六格是圖面距離，不等於資料件數；縱軸明示每格代表五件，所以必須把格數乘上刻度單位。三十件再除以每格五件回到六格，能核對讀圖與換算。"
      },
      {
        "id": "L2",
        "prompt": "軸從 50 起，兩值 54、58。",
        "solution": [
          "實際差 58－54＝4。",
          "可見柱段 4 與 8 不代表資料倍數。"
        ],
        "answer": "差 4。",
        "why": "截斷軸把五十以下共同部分隱去，使可見柱長四與八呈二比一，但完整數值五十四、五十八只差四。比較資料必須讀刻度標示，不能以截斷後的圖形長度推論倍數。"
      },
      {
        "id": "L3",
        "prompt": "A 區 12 座公園／6 萬人，B 區 18 座／18 萬人。",
        "solution": [
          "A 每萬人 2 座。",
          "B 每萬人 1 座。"
        ],
        "answer": "以每萬人比較時 A 較高。",
        "why": "兩區人口規模差三倍，直接比較公園總數會把規模效應誤當服務程度。用公園數除以萬人口後，A 為二、B 為一，才是在相同分母下比較居民可享的公共資源。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "柱高 6 格答 6 件。",
        "why": "忽略每格代表 5。",
        "fix": "格數乘刻度。"
      },
      {
        "wrong": "58 看起來是 54 的兩倍。",
        "why": "截斷軸從 50 起。",
        "fix": "比較軸標數值。"
      },
      {
        "wrong": "乙班男生柱最高，所以乙班總人數較多。",
        "why": "只看一個子群。",
        "fix": "同班各柱合計。"
      },
      {
        "wrong": "公園 18 座一定優於 12 座。",
        "why": "忽略人口分母。",
        "fix": "換算每萬人數。"
      }
    ],
    "selfCheck": [
      "縱軸是否從 0 開始？",
      "每格代表多少？",
      "圖例配對正確嗎？",
      "比較的是總數還是率？"
    ],
    "summary": [
      "長條圖先讀刻度，再看高度。",
      "截斷軸可能放大視覺差。",
      "分組圖必須先辨識圖例。",
      "不同規模群體常需換算成率。"
    ],
    "connections": {
      "previous": "次數與相對次數分配表提供柱高資料。",
      "next": [
        "折線圖將有順序的資料點連起來，重點轉為變化。",
        "直方圖雖像長條圖，但表示連續區間且柱子相連。"
      ]
    },
    "figureReferences": [
      "u09-fig-bar-01",
      "u09-fig-bar-02",
      "u09-fig-bar-03"
    ],
    "accessibilityNotes": "三張圖皆附完整 alt text；即使不看圖，也可由文字數值完成計算。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s003-v001",
        "u09-s003-v002",
        "u09-s003-v003",
        "u09-s003-v004",
        "u09-s003-v005",
        "u09-s003-v006",
        "u09-s003-v007",
        "u09-s003-v008",
        "u09-s003-v009",
        "u09-s003-v010",
        "u09-s003-v011",
        "u09-s003-v012"
      ],
      "constructedResponseIds": [
        "u09-s003-cr001",
        "u09-s003-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "特別建立長條圖與視覺誤導、圖例、標準化比較的區別。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需能由次數表讀出類別、次數與相對次數。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "包含正常零基線、截斷軸、雙組圖與門檻線四種判讀。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "e73d2712b41efdcc61133c40a9e68afaf06a9903fa5b703efb9fb0f5fb937fb7"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s003-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "長條圖顯示四種社團人數：籃球 18、音樂 12、美術 15、科學 9。最高的長條代表哪個社團？",
      "givenConditions": [
        "縱軸單位為人。"
      ],
      "target": "讀取最大長條",
      "choices": [
        "音樂社",
        "美術社",
        "籃球社",
        "科學社"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "比較四根長條高度 18、12、15、9，最大為 18。",
        "derivedAnswer": "籃球社",
        "trustStoredAnswer": false
      },
      "explanation": "長條圖的類別由橫軸標籤辨認，高度由縱軸刻度讀取。 四柱實值十八、十二、十五、九中，十八最大且橫軸標籤為籃球社；柱寬與由左到右的位置沒有代表人數大小。",
      "steps": [
        "確認橫軸類別。",
        "讀取各柱高度。",
        "找最大值對應籃球社。"
      ],
      "optionAnalysis": [
        {
          "choice": "音樂社",
          "truth": false,
          "reason": "音樂社只有 12 人。"
        },
        {
          "choice": "美術社",
          "truth": false,
          "reason": "美術社 15 人，小於 18。"
        },
        {
          "choice": "籃球社",
          "truth": true,
          "reason": "18 是最大值，對應籃球社。"
        },
        {
          "choice": "科學社",
          "truth": false,
          "reason": "科學社 9 人最少。"
        }
      ],
      "misconceptionTarget": "只看柱寬或排列位置 把最寬或最靠前的柱當最高，沒有依縱軸高度對回社團標籤。",
      "prerequisiteCheck": {
        "skillIds": [
          "frequency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案是社團名稱。",
      "ambiguityAndBoundaryAudit": "四根長條基線相同，尺度一致。",
      "difficultyReason": "直接比較高度，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": "u09-fig-bar-01",
      "drawingSpecId": "u09-draw-bar-01",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a8baeffd10d47252589ae2f880f565377ad34130bb42a1dcac791dad79a8580b"
    },
    {
      "questionId": "u09-s003-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "某長條圖的縱軸每一小格代表 5 件。甲柱高 6 格，甲類有幾件？",
      "givenConditions": [
        "每格等距且由 0 起。"
      ],
      "target": "依刻度換算柱高",
      "choices": [
        "6 件",
        "11 件",
        "35 件",
        "30 件"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "柱高 6 格，每格 5 件，所以 6×5=30 件。",
        "derivedAnswer": "30 件",
        "trustStoredAnswer": false
      },
      "explanation": "讀長條圖不能忽略縱軸每格代表的數量。 六格只是圖上高度，縱軸規定每格五件，所以資料值為六乘五等於三十件；若直接答六件，就漏用了刻度倍率。",
      "steps": [
        "讀出每格 5 件。",
        "數出柱高 6 格。",
        "相乘得到 30。"
      ],
      "optionAnalysis": [
        {
          "choice": "6 件",
          "truth": false,
          "reason": "6 是格數，不是件數。"
        },
        {
          "choice": "11 件",
          "truth": false,
          "reason": "把格數與每格數量相加。"
        },
        {
          "choice": "35 件",
          "truth": false,
          "reason": "多算一格。"
        },
        {
          "choice": "30 件",
          "truth": true,
          "reason": "6×5=30。"
        }
      ],
      "misconceptionTarget": "把格數直接當資料值 把柱子跨越的六格直接當六件，沒有乘上每格代表的五件。",
      "prerequisiteCheck": {
        "skillIds": [
          "frequency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "結果為整數件。",
      "ambiguityAndBoundaryAudit": "柱頂恰在格線上，不需估讀。",
      "difficultyReason": "一次尺度換算，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5f056b32fed0d76eeb73f3a89794482f6568e4ef144612dd482b20abb1b1b8cf"
    },
    {
      "questionId": "u09-s003-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "長條圖中甲為 24 人、乙為 17 人。甲比乙多多少人？",
      "givenConditions": [
        "同一圖同一尺度。"
      ],
      "target": "比較兩柱差值",
      "choices": [
        "7 人",
        "41 人",
        "17 人",
        "8 人"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "由圖讀得 24 與 17，再算差 7。",
        "derivedAnswer": "7 人",
        "trustStoredAnswer": false
      },
      "explanation": "『多多少』求兩柱高度差。 「甲比乙多多少」問的是兩柱差距，以二十四減十七得到七人；四十一是合計，十七是乙本身，八則不是正確差值。",
      "steps": [
        "讀兩柱數值。",
        "大數減小數。",
        "保留人數單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "7 人",
          "truth": true,
          "reason": "24-17=7。"
        },
        {
          "choice": "41 人",
          "truth": false,
          "reason": "41 是相加。"
        },
        {
          "choice": "17 人",
          "truth": false,
          "reason": "17 是乙的人數。"
        },
        {
          "choice": "8 人",
          "truth": false,
          "reason": "減法計算錯一。"
        }
      ],
      "misconceptionTarget": "把比較誤算為總和 將比較差距誤算成兩柱總和，或直接抄較小的乙柱數值。",
      "prerequisiteCheck": {
        "skillIds": [
          "frequency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "差值 7 人。",
      "ambiguityAndBoundaryAudit": "甲明確高於乙，方向唯一。",
      "difficultyReason": "直接讀值後作減法，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7cb1acb50fed4e045d4bfebd89879721ec9e454c5d8726a2671b0d0aab44f728"
    },
    {
      "questionId": "u09-s003-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "長條圖顯示週一至週四訂單：32、28、41、39。週三與週四合計占四天總數多少？",
      "givenConditions": [
        "單位相同，比例無單位。"
      ],
      "target": "由多柱求部分占比",
      "choices": [
        "80/100=4/5",
        "80/140=4/7",
        "70/140=1/2",
        "41/140"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "總數 32+28+41+39=140；後兩天 80；比例 80/140=4/7。",
        "derivedAnswer": "80/140=4/7",
        "trustStoredAnswer": false
      },
      "explanation": "要先由多根長條求部分與全部，再形成比例。 週三與週四合計八十是部分量，四天合計一百四十是全體量，所占比例為八十除一百四十約成七分之四；分母不能只取後兩天。",
      "steps": [
        "加總指定兩天得 80。",
        "加總全部得 140。",
        "約分為 4/7。"
      ],
      "optionAnalysis": [
        {
          "choice": "80/100=4/5",
          "truth": false,
          "reason": "分母漏掉週一週二的 40。"
        },
        {
          "choice": "80/140=4/7",
          "truth": true,
          "reason": "週三週四合計 80，總數 140，所以 80/140=4/7。"
        },
        {
          "choice": "70/140=1/2",
          "truth": false,
          "reason": "分子誤用前兩天 60 或計算錯。"
        },
        {
          "choice": "41/140",
          "truth": false,
          "reason": "只取週三，漏週四。"
        }
      ],
      "misconceptionTarget": "分母只取部分資料 把部分八十當分母，或漏加週一、週二而錯估四天總數。",
      "prerequisiteCheck": {
        "skillIds": [
          "frequency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "4/7 可保留分數。",
      "ambiguityAndBoundaryAudit": "四天皆納入總數，沒有遺漏類別。",
      "difficultyReason": "需兩次加總與比例，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "001916a0fc137a08e5c210de8161493e0bac084f8c77025677ff73cdaba7d52d"
    },
    {
      "questionId": "u09-s003-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "一張長條圖縱軸從 50 開始，甲為 54、乙為 58。下列敘述何者正確？",
      "givenConditions": [
        "兩值同一單位。"
      ],
      "target": "辨識截斷縱軸造成的視覺誤導",
      "choices": [
        "乙是甲的兩倍",
        "甲比乙多 4",
        "乙實際只比甲多 4，不是看起來的兩倍",
        "截斷縱軸不影響視覺比例"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "由刻度讀實值 54 與 58，差為 4；柱長可因基線 50 而顯得 2 倍，但資料不是。",
        "derivedAnswer": "乙實際只比甲多 4，不是看起來的兩倍",
        "trustStoredAnswer": false
      },
      "explanation": "判讀長條圖要看刻度數字，不可只看可見柱段長度。 截斷軸使可見高度分別為四與八，看似二倍，但完整資料是五十四與五十八，只相差四；實際倍數也遠小於二。",
      "steps": [
        "確認縱軸起點 50。",
        "讀出兩實值。",
        "用實值比較而非圖形比例。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙是甲的兩倍",
          "truth": false,
          "reason": "58 不是 54 的兩倍。"
        },
        {
          "choice": "甲比乙多 4",
          "truth": false,
          "reason": "乙較大，不是甲較大。"
        },
        {
          "choice": "乙實際只比甲多 4，不是看起來的兩倍",
          "truth": true,
          "reason": "58-54=4；截斷軸會放大視覺差異。"
        },
        {
          "choice": "截斷縱軸不影響視覺比例",
          "truth": false,
          "reason": "截斷軸正會影響視覺印象。"
        }
      ],
      "misconceptionTarget": "把可見柱長比當資料比 用截斷基線以上的可見柱長比，取代刻度標示的完整資料值比。",
      "prerequisiteCheck": {
        "skillIds": [
          "frequency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "差值為 4。",
      "ambiguityAndBoundaryAudit": "題目區分『實際值』與『視覺長度』。",
      "difficultyReason": "需審查圖軸設計，屬標準。",
      "literacyNecessityReason": null,
      "figureId": "u09-fig-bar-02",
      "drawingSpecId": "u09-draw-bar-02",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "21db061d9e8facde07b3f3fb2443b9926f4eea044c15ff13b91ff4d890eeaf92"
    },
    {
      "questionId": "u09-s003-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "某雙組長條圖顯示甲、乙兩班男女人數：甲男 14、甲女 16；乙男 18、乙女 12。哪一班總人數較多？",
      "givenConditions": [
        "單位皆為人。"
      ],
      "target": "判讀雙組長條圖並加總",
      "choices": [
        "甲班較多",
        "乙班較多",
        "無法由圖得知",
        "兩班相同，都是 30 人"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "分組內加總：甲 30、乙 30，所以相同。",
        "derivedAnswer": "兩班相同，都是 30 人",
        "trustStoredAnswer": false
      },
      "explanation": "雙組長條圖需先辨識圖例，再在同一班內合計。 依圖例把甲班男女十四、十六相加得三十，乙班十八、十二也得三十；最高單柱乙男十八不能代表乙班總人數較多。",
      "steps": [
        "依圖例配對男女。",
        "分別計算班級總數。",
        "比較兩個總數。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲班較多",
          "truth": false,
          "reason": "甲的女生較多不代表總數較多。"
        },
        {
          "choice": "乙班較多",
          "truth": false,
          "reason": "乙的男生較多不代表總數較多。"
        },
        {
          "choice": "無法由圖得知",
          "truth": false,
          "reason": "四個柱值足以加總。"
        },
        {
          "choice": "兩班相同，都是 30 人",
          "truth": true,
          "reason": "甲 14+16=30，乙 18+12=30。"
        }
      ],
      "misconceptionTarget": "只看單一子群最高柱 只比較乙男最高柱與甲女柱，沒有先把同班的男女兩柱合計。",
      "prerequisiteCheck": {
        "skillIds": [
          "frequency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "總數為整數。",
      "ambiguityAndBoundaryAudit": "圖例與班級配對唯一。",
      "difficultyReason": "同時使用圖例與群組合計，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c8be60c13caa30e5a4fa37874786979abbdcc588bf09d02edd16cb29091ef562"
    },
    {
      "questionId": "u09-s003-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "長條圖四柱為 20、x、35、25，平均柱高為 27.5。x 為多少？",
      "givenConditions": [
        "柱高使用同一量尺。"
      ],
      "target": "由平均與圖值回推缺柱",
      "choices": [
        "30",
        "20",
        "27.5",
        "40"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "四柱總和＝27.5×4=110；x=110-(20+35+25)=30。",
        "derivedAnswer": "30",
        "trustStoredAnswer": false
      },
      "explanation": "圖形提供的是資料值，平均條件可用來回推缺柱。 平均二十七點五乘四給總和一百一十，已知三柱合為八十，所以缺柱三十；代回四柱總和與平均都吻合。",
      "steps": [
        "由平均求總和。",
        "加總已知三柱。",
        "相減求 x 並驗證。"
      ],
      "optionAnalysis": [
        {
          "choice": "30",
          "truth": true,
          "reason": "總和應為 110，已知和 80，故 x=30。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "20 是第一柱。"
        },
        {
          "choice": "27.5",
          "truth": false,
          "reason": "平均不等於缺值。"
        },
        {
          "choice": "40",
          "truth": false,
          "reason": "40 會使平均 30。"
        }
      ],
      "misconceptionTarget": "把平均直接填入缺值 把平均二十七點五直接填成缺柱，忽略其他三柱並非對稱分布。",
      "prerequisiteCheck": {
        "skillIds": [
          "frequency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "x=30 精確。",
      "ambiguityAndBoundaryAudit": "唯一缺值且平均精確，解唯一。",
      "difficultyReason": "需逆用平均與圖表資料，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f9a8b5ca7ee738067b687a0aa05f50c13202ace3b719f4b1eccdd240133c11f9"
    },
    {
      "questionId": "u09-s003-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "甲圖顯示銷量 100、120、140；乙圖顯示同一資料但縱軸只畫 90 到 150。哪一敘述正確？",
      "givenConditions": [
        "兩圖單位相同。"
      ],
      "target": "比較不同尺度下的同組資料",
      "choices": [
        "乙圖代表銷量增加更快",
        "兩圖資料相同，乙圖只是放大差異",
        "甲圖資料較可信",
        "乙圖的 140 等於甲圖的 150"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "逐一對照刻度，三筆值完全一致；乙圖因縮小顯示範圍而差異更醒目。",
        "derivedAnswer": "兩圖資料相同，乙圖只是放大差異",
        "trustStoredAnswer": false
      },
      "explanation": "比較不同圖時，先比數值與尺度，不能只看視覺衝擊。 兩圖三個柱頂都對應一百、一百二十、一百四十，資料完全相同；乙圖只因縱軸從九十起畫，使相同差距顯得更大。",
      "steps": [
        "讀出兩圖三筆數值。",
        "比較軸起點與範圍。",
        "區分資料與呈現。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙圖代表銷量增加更快",
          "truth": false,
          "reason": "視覺斜率或柱長不能改變原資料。"
        },
        {
          "choice": "兩圖資料相同，乙圖只是放大差異",
          "truth": true,
          "reason": "刻度標示相同數值，只有軸範圍不同。"
        },
        {
          "choice": "甲圖資料較可信",
          "truth": false,
          "reason": "兩圖都可正確，只是呈現效果不同。"
        },
        {
          "choice": "乙圖的 140 等於甲圖的 150",
          "truth": false,
          "reason": "同一數值在兩圖仍是 140。"
        }
      ],
      "misconceptionTarget": "把視覺差異當資料差異 把乙圖較強烈的視覺斜率或柱差，誤認成另一組成長更快的資料。",
      "prerequisiteCheck": {
        "skillIds": [
          "frequency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "不涉及運算取位。",
      "ambiguityAndBoundaryAudit": "題目明示同一資料；結論只關於呈現。",
      "difficultyReason": "需從雙圖辨識尺度效應，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "427dfea3f2fb247592732b2da928b80708001b6bb679ad282f301aed6e24aaa2"
    },
    {
      "questionId": "u09-s003-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某長條圖三類相對次數為 0.25、0.40、0.20，另有『其他』柱未標值。若分類完整，其他柱應多高？",
      "givenConditions": [
        "柱高無單位，可寫 15%。"
      ],
      "target": "由完整相對次數圖補缺柱",
      "choices": [
        "0.05",
        "0.45",
        "0.15",
        "0.85"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "已知合計 0.85，完整分類總和 1，因此其他 0.15。",
        "derivedAnswer": "0.15",
        "trustStoredAnswer": false
      },
      "explanation": "相對次數長條圖的全體柱高總和應為 1。 已知三柱零點二五、零點四、零點二合為零點八五，完整分類剩餘零點一五；加回後四柱相對次數正好為一。",
      "steps": [
        "加總已知柱高。",
        "以 1 減合計。",
        "確認結果非負。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.05",
          "truth": false,
          "reason": "加減小數錯誤。"
        },
        {
          "choice": "0.45",
          "truth": false,
          "reason": "把前兩類相加。"
        },
        {
          "choice": "0.15",
          "truth": true,
          "reason": "1-0.25-0.40-0.20=0.15。"
        },
        {
          "choice": "0.85",
          "truth": false,
          "reason": "0.85 是已知三類合計。"
        }
      ],
      "misconceptionTarget": "把已知合計當未知 把已知合計零點八五填成其他類，或用一百減小數而混淆表示。",
      "prerequisiteCheck": {
        "skillIds": [
          "frequency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "0.15 精確。",
      "ambiguityAndBoundaryAudit": "只有在完整分類下總和才是 1；題目已明示。",
      "difficultyReason": "結合圖表與相對次數總和，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f7d60d72bdfc92825a57fc5bd924a9ceaae7ab43ce1c7ce701a61eaf7a298756"
    },
    {
      "questionId": "u09-s003-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "市府公布各區公園數的長條圖，A 區 12 座、B 區 18 座，但 A 區人口 6 萬、B 區人口 18 萬。若要比較居民享有公園的程度，哪個指標較合理？",
      "givenConditions": [
        "公園數除以萬人口。"
      ],
      "target": "選擇合理標準化指標",
      "choices": [
        "公園總數",
        "人口總數",
        "兩區公園數相加",
        "每萬人公園數"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "A 區每萬人 12/6=2 座，B 區 18/18=1 座；使用每萬人公園數公平。",
        "derivedAnswer": "每萬人公園數",
        "trustStoredAnswer": false
      },
      "explanation": "公共資源比較需把不同人口規模納入分母。 公園總數必須配合服務人口才公平；A 每萬人兩座，B 每萬人一座，雖然 B 總數十八較高，居民平均可享資源反而較少。",
      "steps": [
        "辨認比較目的。",
        "找出人口差異。",
        "選用每萬人公園數。"
      ],
      "optionAnalysis": [
        {
          "choice": "公園總數",
          "truth": false,
          "reason": "總數未考慮人口差異。"
        },
        {
          "choice": "人口總數",
          "truth": false,
          "reason": "人口本身不是公園供給指標。"
        },
        {
          "choice": "兩區公園數相加",
          "truth": false,
          "reason": "相加無法比較兩區。"
        },
        {
          "choice": "每萬人公園數",
          "truth": true,
          "reason": "人口規模不同，應以公園數除以人口標準化。"
        }
      ],
      "misconceptionTarget": "只看最高長條判定服務較好 只看 B 區公園柱較高，就忽略其人口也是 A 區的三倍。",
      "prerequisiteCheck": {
        "skillIds": [
          "frequency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "可報 2 與 1 座／萬人。",
      "ambiguityAndBoundaryAudit": "不評估公園面積或品質，只比較題目可得的數量指標。",
      "difficultyReason": "需結合圖與人口資料作公平比較。",
      "literacyNecessityReason": "居民資源享有程度必須以人口作分母，公園情境決定指標意義。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "06a5945eda4f343e470a2094581364cb35b37756ee5fb40fae59b8830f6e9739"
    },
    {
      "questionId": "u09-s003-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "電力公司長條圖顯示某戶 1 月 300 度、2 月 270 度、3 月 330 度。報導稱『3 月比 2 月增加約 22%』。此說法如何驗證？",
      "givenConditions": [
        "用電單位度；百分比無單位。"
      ],
      "target": "由長條圖驗證百分比變化敘述",
      "choices": [
        "(330-270)÷270≈22.2%，合理",
        "60÷330≈18.2%，所以不合理",
        "330÷270≈122%，所以增加 122%",
        "只看增加 60 度就能說 60%"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "增加量 60；60/270=2/9≈0.222=22.2%，與約 22% 相符。",
        "derivedAnswer": "(330-270)÷270≈22.2%，合理",
        "trustStoredAnswer": false
      },
      "explanation": "百分比變化的分母應是比較基準 2 月用電量。 三月比二月多六十度，百分比增加須以二月二百七十度為基準，六十除二百七十約為百分之二十二點二，支持報導的約數。",
      "steps": [
        "讀取兩月數值。",
        "求增加量 60。",
        "除以原值 270 並轉百分比。"
      ],
      "optionAnalysis": [
        {
          "choice": "(330-270)÷270≈22.2%，合理",
          "truth": true,
          "reason": "百分比增加以原值 270 作分母。"
        },
        {
          "choice": "60÷330≈18.2%，所以不合理",
          "truth": false,
          "reason": "330 是新值，不是增加率分母。"
        },
        {
          "choice": "330÷270≈122%，所以增加 122%",
          "truth": false,
          "reason": "122% 是新值占原值，不是增加百分比。"
        },
        {
          "choice": "只看增加 60 度就能說 60%",
          "truth": false,
          "reason": "60 是度數差，不是百分比。"
        }
      ],
      "misconceptionTarget": "用新值或差值直接當百分比 改用三月新值三百三十作分母，或把增加六十度直接寫成百分之六十。",
      "prerequisiteCheck": {
        "skillIds": [
          "frequency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "22.2% 四捨五入到整數為 22%。",
      "ambiguityAndBoundaryAudit": "『約』容許合理四捨五入。",
      "difficultyReason": "需跨圖讀值並審核媒體百分比。",
      "literacyNecessityReason": "用電報導中的增加率必須以先前月份為基準，情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1de496382c9e6b0116e1d7ea03d9d18f5f1fd55489ae86ef8b2a8792d984f69e"
    },
    {
      "questionId": "u09-s003-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "募款長條圖列出四隊金額：甲 48 千元、乙 52 千元、丙 45 千元、丁 55 千元。活動規定達 50 千元才可獲加碼。共有幾隊符合？",
      "givenConditions": [
        "單位千元，門檻同單位。"
      ],
      "target": "依政策門檻統計達標類別",
      "choices": [
        "1 隊",
        "2 隊",
        "3 隊",
        "4 隊"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "逐隊比較門檻 50：48 否、52 是、45 否、55 是，合計 2。",
        "derivedAnswer": "2 隊",
        "trustStoredAnswer": false
      },
      "explanation": "門檻判讀要使用『大於或等於』，不是只找最高柱。 門檻「達五十」包含等於五十，逐柱檢查只有乙五十二與丁五十五達標，甲四十八、丙四十五未達，因此共兩隊。",
      "steps": [
        "標出門檻 50。",
        "逐柱判斷是否達標。",
        "計數符合者。"
      ],
      "optionAnalysis": [
        {
          "choice": "1 隊",
          "truth": false,
          "reason": "只算最高的丁。"
        },
        {
          "choice": "2 隊",
          "truth": true,
          "reason": "乙 52、丁 55 達標，共 2 隊。"
        },
        {
          "choice": "3 隊",
          "truth": false,
          "reason": "把甲 48 也誤判達標。"
        },
        {
          "choice": "4 隊",
          "truth": false,
          "reason": "丙 45 也未達標。"
        }
      ],
      "misconceptionTarget": "把接近門檻或最高柱概念混淆 只數最高的丁隊，或把接近五十但仍低於門檻的甲隊也算達標。",
      "prerequisiteCheck": {
        "skillIds": [
          "frequency-table"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 110,
      "unitAndRoundingCheck": "答案為隊數。",
      "ambiguityAndBoundaryAudit": "『達 50』包含恰好 50；本圖無恰好值，不影響結果。",
      "difficultyReason": "需要將圖值逐一與規則比較。",
      "literacyNecessityReason": "加碼資格由長條值與政策門檻共同決定，情境是運算必要條件。",
      "figureId": "u09-fig-bar-03",
      "drawingSpecId": "u09-draw-bar-03",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a2969cb4ac3febb8703e4249234689099cd6a04c2ad19a2a6422db04f5a7a8de"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s003-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "長條圖顯示四個班級回收電池數量：甲18公斤、乙24公斤、丙15公斤、丁21公斤，縱軸每一大格代表3公斤。請說明每根柱頂應位於第幾大格，找出最多與最少班級，並求差距。",
      "givenConditions": [],
      "target": "把刻度轉成柱高格數，並由實際數值比較。",
      "requiredWork": [
        "每根柱高格數以數量÷3。",
        "指出最多與最少。",
        "用實際公斤數求差距。"
      ],
      "standardSolution": [
        "甲18÷3=6格；乙24÷3=8格；丙15÷3=5格；丁21÷3=7格。",
        "乙班最多24公斤，丙班最少15公斤。",
        "差距=24-15=9公斤。",
        "柱頂格數六、八、五、七乘回每格三公斤，分別還原十八、二十四、十五、二十一；最大與最小相差九公斤，圖上格差三格也給出同一結果。"
      ],
      "alternativeMethod": "可先排列15、18、21、24，再對照班級；柱高格數仍須另算。",
      "reasoningSteps": [
        "讀取每大格3公斤。",
        "用資料值除以3定位柱頂。",
        "比較原始數值找極值。",
        "最大減最小求差距。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "四個格數6、8、5、7，乙最多、丙最少及9公斤差距全部正確。"
        },
        {
          "score": 2,
          "criteria": "極值與差距正確，但一個格數錯；或格數全對但漏寫差距單位。"
        },
        {
          "score": 1,
          "criteria": "至少兩個柱高格數正確，或能正確找出乙與丙。"
        },
        {
          "score": 0,
          "criteria": "忽略每格3公斤，將格數直接當公斤且比較錯誤。"
        }
      ],
      "partialCreditRules": [
        "格數不需要寫公斤；資料值與差距才需公斤。",
        "只畫對柱高但未標數值，可依可辨識程度給至2分。"
      ],
      "followThroughPolicy": "若學生把一根柱高算錯，後續只要用原資料正確比較，不連帶扣其他部分。",
      "unitAndNotationRules": "柱高用「大格」，回收量與差距用「公斤」。",
      "answerOnlyPolicy": "只寫乙、丙、9公斤，未回答柱高，最高1分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "18、24、15、21除以3為6、8、5、7；最大24、最小15、差9。",
        "boundaryAndAmbiguityAudit": "所有數值均為3的倍數，柱頂不落在半格；刻度無歧義。",
        "rubricAlignmentEvidence": "把尺度換算與資料比較分開計分，避免只憑外觀。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "d6f107ce22f24e5a0e0581fc877e4466a41705b0301429118e8d73f3d5b9f8de",
      "commonErrors": [
        "把每根柱的格數直接當公斤數，漏乘縱軸每大格三公斤。",
        "找出乙最高與丙最低後用八減五只答三格，沒有換回九公斤。"
      ]
    },
    {
      "questionId": "u09-s003-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "bar-chart-text",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "某報告用縱軸從50開始的長條圖比較甲校54%、乙校58%的達標率，圖中乙柱可見高度是甲柱的2倍。請計算兩校實際差多少個百分點、乙相對甲高多少百分比，並評估「乙校達標率是甲校的2倍」是否合理。",
      "givenConditions": [],
      "target": "辨認截斷軸造成的視覺比例錯覺，區分百分點與相對增幅。",
      "requiredWork": [
        "直接差用58%-54%。",
        "相對增幅以54%為分母。",
        "解釋可見柱高比不等於數值比。"
      ],
      "standardSolution": [
        "實際差=58%-54%=4個百分點。",
        "相對甲校的增幅=4/54≈7.4%。",
        "乙校達標率與甲校的比為58/54≈1.074，不是2倍。可見柱高分別為4與8（相對50基線），才會呈現2倍。",
        "四個百分點是兩校達標率的直接差，約百分之七點四才是以甲校為基準的相對增幅；兩者都顯示乙校並非甲校的兩倍，二倍錯覺只來自五十的截斷基線。"
      ],
      "alternativeMethod": "可比較58:54=29:27，直接證明數值比遠小於2:1，再補述截斷基線。",
      "reasoningSteps": [
        "忽略柱高外觀，先讀軸上實際值。",
        "算百分點差4。",
        "以原值54算相對增幅。",
        "比較真實數值比與截斷後可見高度比。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "4個百分點、約7.4%及「不是2倍」的截斷軸理由完整。"
        },
        {
          "score": 2,
          "criteria": "差值與結論正確，但相對增幅算錯或未明確寫出50基線造成4與8。"
        },
        {
          "score": 1,
          "criteria": "能指出實際值54與58不是2倍，或正確算出4個百分點。"
        },
        {
          "score": 0,
          "criteria": "直接接受可見柱高比，宣稱58是54的2倍。"
        }
      ],
      "partialCreditRules": [
        "7.41%、7.4%均可；若寫58/54≈107.4%，需說明這是乙為甲的107.4%，而非增加107.4%。",
        "將4個百分點誤寫4%但其餘推理正確，最高2分。"
      ],
      "followThroughPolicy": "早期差值若算錯，但仍用「差÷54」且合理否定2倍，可保留方法分。",
      "unitAndNotationRules": "百分點與百分比用語必須區分；比值可無單位。",
      "answerOnlyPolicy": "只寫「不合理」而無數值或截斷軸說明，最高1分。",
      "figureId": "u09-fig-bar-02",
      "drawingSpecId": "u09-draw-bar-02",
      "independentReview": {
        "independentDerivation": "真實差4，4/54=0.07407；58/54=1.07407。截斷後高度8與4才為2倍。",
        "boundaryAndAmbiguityAudit": "「2倍」明確指達標率而非可見柱高；題目提供軸起點50。",
        "rubricAlignmentEvidence": "視覺審查、百分點與相對增幅三項都是本技能核心。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "12c7055dd017a246bc651bb9b2509d6fa14cadffb0f9d9b4eb1de169d80599cf",
      "commonErrors": [
        "用可見柱高八除四便宣稱達標率二倍，忽略縱軸基線從五十開始。",
        "把四個百分點直接稱為增加百分之四，沒有區分百分點差與相對增幅。"
      ]
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s003-v001-semantic-r1",
      "questionId": "u09-s003-v001",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "independentRecalculation": "比較四根長條高度 18、12、15、9，最大為 18。",
      "correctChoiceCheck": "獨立計算得到「籃球社」，位於索引 2。",
      "distractorAudit": [
        "音樂社只有 12 人。",
        "美術社 15 人，小於 18。",
        "科學社 9 人最少。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「籃球社」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「長條圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "四根長條基線相同，尺度一致。",
      "difficultyEvidence": "直接比較高度，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "1ea7c2598342ee9b8c3246a88d2d38b21d5bc728e31bc080d12fa81d7dec5bee"
    },
    {
      "reviewId": "u09-s003-v002-semantic-r1",
      "questionId": "u09-s003-v002",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "independentRecalculation": "柱高 6 格，每格 5 件，所以 6×5=30 件。",
      "correctChoiceCheck": "獨立計算得到「30 件」，位於索引 3。",
      "distractorAudit": [
        "6 是格數，不是件數。",
        "把格數與每格數量相加。",
        "多算一格。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「30 件」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「長條圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "柱頂恰在格線上，不需估讀。",
      "difficultyEvidence": "一次尺度換算，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "db395ecffd35f06512fd13f10772476090881c1afc8b418c565944645cc19a28"
    },
    {
      "reviewId": "u09-s003-v003-semantic-r1",
      "questionId": "u09-s003-v003",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "independentRecalculation": "由圖讀得 24 與 17，再算差 7。",
      "correctChoiceCheck": "獨立計算得到「7 人」，位於索引 0。",
      "distractorAudit": [
        "41 是相加。",
        "17 是乙的人數。",
        "減法計算錯一。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「7 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「長條圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "甲明確高於乙，方向唯一。",
      "difficultyEvidence": "直接讀值後作減法，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "062f67e0c3cd9e15e7d6233dcdc3ad46765dd18963db719133a6fef839033e5f"
    },
    {
      "reviewId": "u09-s003-v004-semantic-r1",
      "questionId": "u09-s003-v004",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "independentRecalculation": "總數 32+28+41+39=140；後兩天 80；比例 80/140=4/7。",
      "correctChoiceCheck": "獨立計算得到「80/140=4/7」，位於索引 1。",
      "distractorAudit": [
        "分母漏掉週一週二的 40。",
        "分子誤用前兩天 60 或計算錯。",
        "只取週三，漏週四。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「80/140=4/7」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「長條圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "四天皆納入總數，沒有遺漏類別。",
      "difficultyEvidence": "需兩次加總與比例，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8f7ab8f83926d5564a285746b330f10c40074ade5497db642f48ddabb9ed3cbf"
    },
    {
      "reviewId": "u09-s003-v005-semantic-r1",
      "questionId": "u09-s003-v005",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "independentRecalculation": "由刻度讀實值 54 與 58，差為 4；柱長可因基線 50 而顯得 2 倍，但資料不是。",
      "correctChoiceCheck": "獨立計算得到「乙實際只比甲多 4，不是看起來的兩倍」，位於索引 2。",
      "distractorAudit": [
        "58 不是 54 的兩倍。",
        "乙較大，不是甲較大。",
        "截斷軸正會影響視覺印象。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「乙實際只比甲多 4，不是看起來的兩倍」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「長條圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目區分『實際值』與『視覺長度』。",
      "difficultyEvidence": "需審查圖軸設計，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8d5a7f349e4cfb6dbab16e8e2544c88627d73ac259d5cda5b39c3493dc1e98f8"
    },
    {
      "reviewId": "u09-s003-v006-semantic-r1",
      "questionId": "u09-s003-v006",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "independentRecalculation": "分組內加總：甲 30、乙 30，所以相同。",
      "correctChoiceCheck": "獨立計算得到「兩班相同，都是 30 人」，位於索引 3。",
      "distractorAudit": [
        "甲的女生較多不代表總數較多。",
        "乙的男生較多不代表總數較多。",
        "四個柱值足以加總。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「兩班相同，都是 30 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「長條圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "圖例與班級配對唯一。",
      "difficultyEvidence": "同時使用圖例與群組合計，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6bfd9609f5f664613af6281a7e4c10e20516b04ab8273ac0d5c59a03e11ab101"
    },
    {
      "reviewId": "u09-s003-v007-semantic-r1",
      "questionId": "u09-s003-v007",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "independentRecalculation": "四柱總和＝27.5×4=110；x=110-(20+35+25)=30。",
      "correctChoiceCheck": "獨立計算得到「30」，位於索引 0。",
      "distractorAudit": [
        "20 是第一柱。",
        "平均不等於缺值。",
        "40 會使平均 30。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「30」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「長條圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "唯一缺值且平均精確，解唯一。",
      "difficultyEvidence": "需逆用平均與圖表資料，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "79cea7761780acaadfe9e515ad6a3edc1d9cfab27249a7877a635d0c511c40be"
    },
    {
      "reviewId": "u09-s003-v008-semantic-r1",
      "questionId": "u09-s003-v008",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "independentRecalculation": "逐一對照刻度，三筆值完全一致；乙圖因縮小顯示範圍而差異更醒目。",
      "correctChoiceCheck": "獨立計算得到「兩圖資料相同，乙圖只是放大差異」，位於索引 1。",
      "distractorAudit": [
        "視覺斜率或柱長不能改變原資料。",
        "兩圖都可正確，只是呈現效果不同。",
        "同一數值在兩圖仍是 140。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「兩圖資料相同，乙圖只是放大差異」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「長條圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目明示同一資料；結論只關於呈現。",
      "difficultyEvidence": "需從雙圖辨識尺度效應，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7d02e3f36326269e121fa096fbf11febf456bfc1965c4a96467691e1b5036db7"
    },
    {
      "reviewId": "u09-s003-v009-semantic-r1",
      "questionId": "u09-s003-v009",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "independentRecalculation": "已知合計 0.85，完整分類總和 1，因此其他 0.15。",
      "correctChoiceCheck": "獨立計算得到「0.15」，位於索引 2。",
      "distractorAudit": [
        "加減小數錯誤。",
        "把前兩類相加。",
        "0.85 是已知三類合計。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「0.15」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「長條圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只有在完整分類下總和才是 1；題目已明示。",
      "difficultyEvidence": "結合圖表與相對次數總和，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ec2ee580095a283844af64f581df829c2b50e52c916aae18c6539038b3c5fe51"
    },
    {
      "reviewId": "u09-s003-v010-semantic-r1",
      "questionId": "u09-s003-v010",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "independentRecalculation": "A 區每萬人 12/6=2 座，B 區 18/18=1 座；使用每萬人公園數公平。",
      "correctChoiceCheck": "獨立計算得到「每萬人公園數」，位於索引 3。",
      "distractorAudit": [
        "總數未考慮人口差異。",
        "人口本身不是公園供給指標。",
        "相加無法比較兩區。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「每萬人公園數」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「長條圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不評估公園面積或品質，只比較題目可得的數量指標。",
      "difficultyEvidence": "需結合圖與人口資料作公平比較。",
      "literacyEvidence": "居民資源享有程度必須以人口作分母，公園情境決定指標意義。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c3b33ede06db4e929aa3336db9da546359b9f3817eaec856cad9ff0f5b513208"
    },
    {
      "reviewId": "u09-s003-v011-semantic-r1",
      "questionId": "u09-s003-v011",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "independentRecalculation": "增加量 60；60/270=2/9≈0.222=22.2%，與約 22% 相符。",
      "correctChoiceCheck": "獨立計算得到「(330-270)÷270≈22.2%，合理」，位於索引 0。",
      "distractorAudit": [
        "330 是新值，不是增加率分母。",
        "122% 是新值占原值，不是增加百分比。",
        "60 是度數差，不是百分比。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「(330-270)÷270≈22.2%，合理」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「長條圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "『約』容許合理四捨五入。",
      "difficultyEvidence": "需跨圖讀值並審核媒體百分比。",
      "literacyEvidence": "用電報導中的增加率必須以先前月份為基準，情境不可刪除。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d206b76c57b59479a61683ecc996120bb7870ac57f9103a31fe17f729a53e60a"
    },
    {
      "reviewId": "u09-s003-v012-semantic-r1",
      "questionId": "u09-s003-v012",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "independentRecalculation": "逐隊比較門檻 50：48 否、52 是、45 否、55 是，合計 2。",
      "correctChoiceCheck": "獨立計算得到「2 隊」，位於索引 1。",
      "distractorAudit": [
        "只算最高的丁。",
        "把甲 48 也誤判達標。",
        "丙 45 也未達標。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「2 隊」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「長條圖文字判讀」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "『達 50』包含恰好 50；本圖無恰好值，不影響結果。",
      "difficultyEvidence": "需要將圖值逐一與規則比較。",
      "literacyEvidence": "加碼資格由長條值與政策門檻共同決定，情境是運算必要條件。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "13982718e4a2a0122908ab61acdf7fab39543982e6fb8456ef7414cd79951320"
    }
  ],
  "drawingSpecs": [
    {
      "drawingSpecId": "u09-draw-bar-01",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "file": "figures/u09/u09-fig-bar-01.svg",
      "purpose": "讀取四個社團人數並辨認最高長條。",
      "canvas": {
        "width": 640,
        "height": 400,
        "viewBox": "0 0 640 400"
      },
      "coordinateSystem": "繪圖區左上(90,40)，基線y=330；縱軸0至20人，每1人14像素，每5人一主刻度。",
      "elements": [
        "x軸從(90,330)到(600,330)，y軸從(90,330)到(90,40)。",
        "四柱x=130,250,370,490，寬70；高度依18,12,15,9人分別252,168,210,126像素。",
        "柱頂數值標籤18、12、15、9；類別標籤籃球、音樂、美術、科學。",
        "主刻度0、5、10、15、20與水平輔助線。"
      ],
      "labels": {
        "title": "四種社團人數",
        "xAxis": "社團",
        "yAxis": "人數（人）"
      },
      "scale": {
        "toScale": true,
        "warning": "柱高依縱軸等比例繪製；仍應以刻度與數值標籤判讀。"
      },
      "visibleHiddenRules": "所有柱與座標軸實線；無隱藏線。",
      "altText": "長條圖：籃球18人、音樂12人、美術15人、科學9人；籃球最高。",
      "mobileReadability": "640×400，最小文字16px；四柱間距50px以上。",
      "answerLeakage": "圖呈現題目已給資料，不以顏色或符號額外標示正確選項。",
      "assertions": [
        "viewBox=0 0 640 400",
        "rect count=4 data bars",
        "text includes 籃球,音樂,美術,科學,18,12,15,9",
        "title and desc present"
      ],
      "figureId": "u09-fig-bar-01",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "fc4ac8559aa6f3c32c101846b2d9759befecd8fa3a2157236b972264524591d7"
    },
    {
      "drawingSpecId": "u09-draw-bar-02",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "file": "figures/u09/u09-fig-bar-02.svg",
      "purpose": "展示縱軸從50開始時54與58的可見高度比例錯覺。",
      "canvas": {
        "width": 640,
        "height": 400,
        "viewBox": "0 0 640 400"
      },
      "coordinateSystem": "繪圖區左上(110,45)，截斷基線y=330代表50；每1單位30像素，上限59。",
      "elements": [
        "截斷縱軸從50至59，標50、52、54、56、58。",
        "甲柱x=210寬100，值54，高120像素；乙柱x=390寬100，值58，高240像素。",
        "y軸基線附近畫雙斜線斷軸符號，並標註「縱軸從50開始」。",
        "柱頂顯示54與58。"
      ],
      "labels": {
        "title": "達標率比較（截斷縱軸示意）",
        "xAxis": "學校",
        "yAxis": "達標率（%）"
      },
      "scale": {
        "toScale": true,
        "warning": "可見柱高以50為基線，不可用柱高倍數當作實際達標率倍數。"
      },
      "visibleHiddenRules": "座標軸與柱實線；斷軸以兩條斜短線表示；無隱藏線。",
      "altText": "截斷縱軸長條圖：甲54%、乙58%，縱軸從50%開始，所以可見高度4與8呈二倍，但實際數值不是二倍。",
      "mobileReadability": "斷軸符號、50基線與柱頂值皆大於16px，手機寬度下仍可辨。",
      "answerLeakage": "圖只呈現數據與必要警告，不直接寫出差4或相對增幅答案。",
      "assertions": [
        "viewBox=0 0 640 400",
        "two data bars",
        "axis label 50",
        "break symbol paths=2",
        "title and desc present"
      ],
      "figureId": "u09-fig-bar-02",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "c274f0018eea3546ab9300163ef6f24e7fe1fda36b49718435c52ae3502fd292"
    },
    {
      "drawingSpecId": "u09-draw-bar-03",
      "unitId": "u09",
      "skillId": "bar-chart-text",
      "file": "figures/u09/u09-fig-bar-03.svg",
      "purpose": "依50千元門檻判斷四隊是否達標。",
      "canvas": {
        "width": 640,
        "height": 400,
        "viewBox": "0 0 640 400"
      },
      "coordinateSystem": "繪圖區左上(90,40)，基線y=330代表0千元；每5千元25像素，上限60。",
      "elements": [
        "甲乙丙丁四柱值48、52、45、55千元。",
        "柱寬70，中心x=165,285,405,525。",
        "y=80畫50千元水平虛線並標「加碼門檻50」。",
        "柱頂顯示48、52、45、55。"
      ],
      "labels": {
        "title": "四隊募款金額",
        "xAxis": "隊別",
        "yAxis": "金額（千元）"
      },
      "scale": {
        "toScale": true,
        "warning": "依數值與門檻線判讀，不以顏色推測。"
      },
      "visibleHiddenRules": "柱與座標軸實線；門檻線使用虛線；無隱藏線。",
      "altText": "募款長條圖：甲48、乙52、丙45、丁55千元；水平門檻為50千元。",
      "mobileReadability": "柱頂值與門檻標籤16px以上，虛線與柱保持足夠對比。",
      "answerLeakage": "沒有把達標柱另行上色或打勾，必須自行比較。",
      "assertions": [
        "four data bars",
        "threshold line dasharray",
        "text includes 48,52,45,55,50",
        "title and desc present"
      ],
      "figureId": "u09-fig-bar-03",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "44e89b335d4ac2a8a73a493db3e34276fbbcbe1ed33d6ad85c6cc2d6946edafa"
    }
  ]
};
