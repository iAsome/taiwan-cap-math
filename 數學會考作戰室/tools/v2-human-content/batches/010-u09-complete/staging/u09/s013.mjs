// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s013-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-summary",
    "skillId": "mean-from-table",
    "lockedTitle": "由次數表求平均與缺值",
    "title": "由次數表求平均與缺值：把重複相加改成乘法",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "weighted-average-basic"
      ],
      "explanation": "需會次數分配表、一般平均數與加權平均，並能解一元一次方程式。"
    },
    "learningGoals": [
      "由數值與次數建立加權總和。",
      "由次數表計算平均數。",
      "由平均數反求未知資料值或未知次數。",
      "處理誤植資料對平均數的修正。",
      "確認次數必須是非負整數。"
    ],
    "vocabulary": [
      {
        "term": "次數加權",
        "meaning": "每個資料值以其出現次數作權數。"
      },
      {
        "term": "總次數",
        "meaning": "各類次數相加，也就是資料總筆數。"
      },
      {
        "term": "缺值",
        "meaning": "表中未知的資料值或未知次數。"
      },
      {
        "term": "誤植修正",
        "meaning": "先扣除錯誤資料，再加入正確資料。"
      },
      {
        "term": "整數限制",
        "meaning": "人數或次數通常必須是0以上的整數。"
      }
    ],
    "notation": [
      {
        "symbol": "x",
        "meaning": "資料值。"
      },
      {
        "symbol": "f",
        "meaning": "資料值 x 出現的次數。"
      },
      {
        "symbol": "Σfx",
        "meaning": "所有資料值乘次數後的總和。"
      },
      {
        "symbol": "Σf",
        "meaning": "總次數。"
      }
    ],
    "conceptDevelopment": [
      "次數表把相同資料合併；值 x 出現 f 次，對總和的貢獻是 x×f。",
      "由次數表求平均就是加權平均，分母是總次數，不是類別數。",
      "若未知的是資料值，乘上已知次數；若未知的是次數，該次數也要加入總筆數。",
      "修正錯誤資料時，可用正確總和＝原總和−錯值＋正值，無須重列全部資料。",
      "解出的次數若不是非負整數，表示設定或計算有問題。",
      "頻數表只是把重複資料壓縮呈現，每一列的數值仍須依頻數重複計入。計算平均時，分子是各數值乘頻數後的總和，分母是頻數總和；遇到未知頻數、誤登或漏登資料，應同時追蹤總和與筆數。方程式化簡成恆等式表示有多個解，化成矛盾式才表示無解，兩者不能混為一談。"
    ],
    "definitions": [
      {
        "name": "次數表平均",
        "statement": "Σfx÷Σf。"
      },
      {
        "name": "缺值方程",
        "statement": "以目標平均×總次數等於加權總和，建立未知值或次數的方程。"
      }
    ],
    "formulas": [
      {
        "formula": "平均數＝Σfx÷Σf",
        "conditions": [
          "次數為非負整數",
          "總次數大於0"
        ]
      },
      {
        "formula": "目標總和＝平均數×總次數",
        "conditions": [
          "平均數與總次數屬同一資料集"
        ]
      },
      {
        "formula": "修正後總和＝原總和－錯誤值＋正確值",
        "conditions": [
          "只有一筆誤植且筆數不變"
        ]
      }
    ],
    "invalidUseCases": [
      "分母用不同資料值的種類數。",
      "未知次數只放在分子，不放入總次數。",
      "把次數與資料值相加而不是相乘。",
      "誤植修正只加正確值而未扣錯誤值。",
      "接受負數或非整數人數。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "逐列計算資料值×次數。"
      },
      {
        "step": 2,
        "action": "加總得到Σfx，並加總次數得到Σf。"
      },
      {
        "step": 3,
        "action": "直接題用Σfx÷Σf；缺值題用平均×總次數。"
      },
      {
        "step": 4,
        "action": "建立並解方程式。"
      },
      {
        "step": 5,
        "action": "將答案代回，並檢查次數整數性、平均範圍與單位。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "數值60、70、80的頻數分別為2、3、5，求平均。",
        "solution": [
          "總和為60×2＋70×3＋80×5＝730。",
          "總頻數為2＋3＋5＝10。",
          "平均為730÷10＝73。"
        ],
        "answer": "73。",
        "why": "頻數代表每個數值實際出現幾次，所以必須先把壓縮表還原成加權總和；73介於60與80之間，且靠近頻數最大的80，數值方向合理。"
      },
      {
        "id": "L2",
        "prompt": "數值2、5、8的頻數為3、x、2，若平均為5，判斷x。",
        "solution": [
          "列式2×3＋5x＋8×2＝5(3＋x＋2)。",
          "化簡左邊為22＋5x，右邊為25＋5x。",
          "得到22＝25的矛盾，因此不存在符合條件的x。"
        ],
        "answer": "無解。",
        "why": "數值5本身等於目標平均，增加多少個5都不會抵消兩端既有資料造成的總和差；方程式消去x後成為錯誤等式，表示不是特定x算錯，而是條件彼此不相容。"
      },
      {
        "id": "L3",
        "prompt": "10筆資料平均72，其中一筆62誤登為82，求正確平均。",
        "solution": [
          "誤登資料的總和為72×10＝720。",
          "把82改回62，總和減少20成為700。",
          "資料仍為10筆，所以正確平均700÷10＝70。"
        ],
        "answer": "70。",
        "why": "更正數值不會改變資料筆數，只會讓總和減少82－62＝20；平均因此下降20÷10＝2，也可由原平均72直接減2快速驗證結果70。"
      },
      {
        "id": "L4",
        "prompt": "數值50、70、90的頻數為2、4、x，若平均75，求整數頻數x。",
        "solution": [
          "列式50×2＋70×4＋90x＝75(6＋x)。",
          "化簡得380＋90x＝450＋75x，所以15x＝70。",
          "x＝14/3，不是非負整數頻數，因此無符合條件的頻數。"
        ],
        "answer": "無符合條件的整數頻數。",
        "why": "代數方程雖有實數解14/3，但頻數表示資料出現次數，必須是非負整數；把情境限制帶回代數解，才能避免接受數學上可算、資料上不可能的答案。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "(60+70+80)÷3。",
        "why": "忽略各分數出現次數。",
        "fix": "用60×2+70×3+80×5。"
      },
      {
        "wrong": "未知次數x時分母仍用已知次數。",
        "why": "忘記未知者也是資料筆數。",
        "fix": "分母加上x。"
      },
      {
        "wrong": "誤植82應改62，只做720-20。",
        "why": "此例雖結果相同，但未清楚表達移除與加入，複雜情況易錯。",
        "fix": "寫720-82+62。"
      },
      {
        "wrong": "解出x=4.67人仍接受。",
        "why": "忽略次數的整數限制。",
        "fix": "判定條件矛盾或重算。"
      }
    ],
    "selfCheck": [
      "每列是否做值×次數？",
      "分母是總次數嗎？",
      "未知次數有同時進入分子和分母嗎？",
      "修正是否先扣錯再加對？",
      "次數答案是非負整數嗎？"
    ],
    "summary": [
      "次數表平均＝Σfx÷Σf。",
      "缺值題先用平均×筆數求總和。",
      "未知次數同時影響分子與分母。",
      "誤植修正要扣錯加對。"
    ],
    "connections": {
      "previous": "加權平均提供值×權數的結構；本技能把權數具體化為次數。",
      "next": [
        "兩組資料比較會使用平均數、中位數、眾數與全距。",
        "統計敘述合理性會檢查缺值與取樣是否被誤用。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s013-v001",
        "u09-s013-v002",
        "u09-s013-v003",
        "u09-s013-v004",
        "u09-s013-v005",
        "u09-s013-v006",
        "u09-s013-v007",
        "u09-s013-v008",
        "u09-s013-v009",
        "u09-s013-v010",
        "u09-s013-v011",
        "u09-s013-v012"
      ],
      "constructedResponseIds": [
        "u09-s013-cr001",
        "u09-s013-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "除直接計算外，加入不可能條件與整數限制，避免只會機械代公式。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需會次數分配表、一般平均數與加權平均，並能解一元一次方程式。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "例題涵蓋直接次數平均、矛盾方程、誤植修正與次數整數檢查。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "595fb5e7b11c076a354dd0a1370b048db99ce661632261df1c1d32da638212f3"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s013-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "次數表中資料值 1、2、3 的次數為 2、3、1。平均數是多少？",
      "givenConditions": [
        "資料值無單位。"
      ],
      "target": "由離散次數表求平均",
      "choices": [
        "11/6",
        "2",
        "6",
        "11"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "總和 11、筆數 6，所以平均 11/6。",
        "derivedAnswer": "11/6",
        "trustStoredAnswer": false
      },
      "explanation": "由次數表求平均要用資料值乘次數。 資料總和為1×2＋2×3＋3×1＝11，總次數為2＋3＋1＝6，所以平均是11÷6＝11/6。結果約1.83，介於最小值1與最大值3之間，也較靠近頻數最高的2。",
      "steps": [
        "算加權總和。",
        "算總次數。",
        "相除。",
        "用數值乘頻數求加權總和11。",
        "以總頻數6作分母，並確認結果介於1與3之間。"
      ],
      "optionAnalysis": [
        {
          "choice": "11/6",
          "truth": true,
          "reason": "加權總和 1×2+2×3+3×1=11，總次數 6，平均 11/6。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "2 是資料值的未加權平均。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "6 是總次數。"
        },
        {
          "choice": "11",
          "truth": false,
          "reason": "11 是加權總和。"
        }
      ],
      "misconceptionTarget": "只平均資料值或忘記除法 或只把1、2、3三種數值平均，忽略每個數值出現的次數。",
      "prerequisiteCheck": {
        "skillIds": [
          "weighted-average-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "保留分數 11/6。",
      "ambiguityAndBoundaryAudit": "三類完整。",
      "difficultyReason": "基本次數加權。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "49999125e233dffe0525ca5981e20877dc3fe0fe21a2fb76a61ba8205ca4c09d"
    },
    {
      "questionId": "u09-s013-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "分數 60、70、80 的次數為 1、2、1。平均是多少？",
      "givenConditions": [
        "分數同量尺。"
      ],
      "target": "計算整數結果的次數表平均",
      "choices": [
        "67.5",
        "75",
        "70",
        "280"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "總分 280、總人數 4，平均 70。",
        "derivedAnswer": "70",
        "trustStoredAnswer": false
      },
      "explanation": "重複出現的資料值要按次數計入。 總分為60×1＋70×2＋80×1＝280，總人數4，所以平均為280÷4＝70分。60與80各出現一次且關於70對稱，另外兩筆也是70，能再確認平均確為70。",
      "steps": [
        "乘次數。",
        "加總。",
        "除總次數。",
        "計算各分數乘頻數後的總分280。",
        "除以頻數總和4，並以對稱分布檢查平均為70。"
      ],
      "optionAnalysis": [
        {
          "choice": "67.5",
          "truth": false,
          "reason": "67.5 是加權錯誤。"
        },
        {
          "choice": "75",
          "truth": false,
          "reason": "75 是忽略 60。"
        },
        {
          "choice": "70",
          "truth": true,
          "reason": "(60+140+80)÷4=70。"
        },
        {
          "choice": "280",
          "truth": false,
          "reason": "280 是總分。"
        }
      ],
      "misconceptionTarget": "每個資料值只算一次 或看到三種分數就除以3，沒有讓出現兩次的70分計入兩份。",
      "prerequisiteCheck": {
        "skillIds": [
          "weighted-average-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "70 分。",
      "ambiguityAndBoundaryAudit": "次數合計 4。",
      "difficultyReason": "基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "18968d77b7bce5be041a6e2278358e26d7a912035f88edf70a5132825fe8a8f5"
    },
    {
      "questionId": "u09-s013-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "某次數表總次數 20，平均 4。資料總和是多少？",
      "givenConditions": [
        "20 筆資料。"
      ],
      "target": "由表的平均與總次數求總和",
      "choices": [
        "5",
        "80",
        "16",
        "24"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "總和＝4×20=80。",
        "derivedAnswer": "80",
        "trustStoredAnswer": false
      },
      "explanation": "可由平均與筆數還原加權總和。 平均數＝總和÷總次數，因此已知平均4、總次數20時，資料總和必為4×20＝80。將答案80再除以資料筆數20，會回到題給平均4，公式方向與單位均相符。",
      "steps": [
        "相乘。",
        "把平均公式改寫成總和＝平均×總次數。",
        "計算4×20＝80，並以80÷20＝4反向驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": false,
          "reason": "5 是 20÷4。"
        },
        {
          "choice": "80",
          "truth": true,
          "reason": "平均×總次數=4×20=80。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "16 是 4²。"
        },
        {
          "choice": "24",
          "truth": false,
          "reason": "24 是相加。"
        }
      ],
      "misconceptionTarget": "用除法或相加 或把平均4再除以20，顛倒平均、總和與資料筆數的關係。",
      "prerequisiteCheck": {
        "skillIds": [
          "weighted-average-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "80。",
      "ambiguityAndBoundaryAudit": "資料值細節不影響總和。",
      "difficultyReason": "基本反推。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9192bac2c9884f397dbabe7609fd3b3ceb90f877b45b70af13b0e5674c447b67"
    },
    {
      "questionId": "u09-s013-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "資料值 2、4、6 的次數為 3、x、2，總次數 10。x 是多少？",
      "givenConditions": [
        "次數為非負整數。"
      ],
      "target": "補次數缺值",
      "choices": [
        "2",
        "3",
        "7",
        "5"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "x=10-5=5。",
        "derivedAnswer": "5",
        "trustStoredAnswer": false
      },
      "explanation": "次數欄總和等於總筆數。 三類頻數為3、x、2且總次數10，所以3＋x＋2＝10，解得x＝5；此題不需用數值欄。代回後三個頻數合計3＋5＋2＝10，恰好等於題給總資料數。",
      "steps": [
        "加已知次數。",
        "由總次數扣除。",
        "只加總頻數欄而不是數值欄。",
        "由x＋5＝10得x＝5，再驗算頻數合計確為10。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "2 是第三類次數。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "3 是第一類次數。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7 是 10-3。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "3+x+2=10，所以 x=5。"
        }
      ],
      "misconceptionTarget": "把資料值混入次數和 或把表中數值也加進總次數，只因題目出現平均單元就過度建立加權式。",
      "prerequisiteCheck": {
        "skillIds": [
          "weighted-average-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "5。",
      "ambiguityAndBoundaryAudit": "唯一缺值。",
      "difficultyReason": "標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "df60c80cafa14e4ec744ae51840434e87f0cd39f5e65fe0134eb4f2f4b6f70ae"
    },
    {
      "questionId": "u09-s013-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "資料值 1、3、5 的次數為 2、x、2，平均為 3。x 可能為何？",
      "givenConditions": [
        "x 為非負整數。"
      ],
      "target": "判斷缺次數是否唯一",
      "choices": [
        "只能是 0",
        "任意非負整數",
        "只能是 2",
        "只能是 4"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "總和=12+3x，總次數=4+x；商恆為 3。",
        "derivedAnswer": "任意非負整數",
        "trustStoredAnswer": false
      },
      "explanation": "平均條件可能形成恆等式，不一定唯一決定未知次數。 平均條件給2×1＋3x＋2×5＝3(4＋x)，左右都化為12＋3x，因此所有非負整數x皆成立，無法唯一決定。",
      "steps": [
        "建立平均方程。",
        "化簡。",
        "辨認恆等。",
        "以加權總和＝平均×總次數列式。",
        "化簡後比較兩邊完全相同，故依頻數限制判定任意非負整數皆可。"
      ],
      "optionAnalysis": [
        {
          "choice": "只能是 0",
          "truth": false,
          "reason": "x=0 可行但非唯一。"
        },
        {
          "choice": "任意非負整數",
          "truth": true,
          "reason": "兩端 1 與 5 次數相同，對稱於 3；加入任意個 3 都維持平均 3。"
        },
        {
          "choice": "只能是 2",
          "truth": false,
          "reason": "x=2 可行但非唯一。"
        },
        {
          "choice": "只能是 4",
          "truth": false,
          "reason": "x=4 可行但非唯一。"
        }
      ],
      "misconceptionTarget": "假設未知必有唯一解 或把恆等式消去後的0＝0當成無解，而沒有區分恆等式與矛盾式。",
      "prerequisiteCheck": {
        "skillIds": [
          "weighted-average-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "無取位。",
      "ambiguityAndBoundaryAudit": "任意非負整數皆符合。",
      "difficultyReason": "標準概念。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4744cd196065f1d210e48f74fa962c48b0790e2de6caca45cb70c5cfddad5fbd"
    },
    {
      "questionId": "u09-s013-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "資料值 10、20、30 的次數為 2、5、3。若 20 的次數誤寫成 4，錯誤平均比正確平均如何？",
      "givenConditions": [
        "總次數由 10 變 9。"
      ],
      "target": "分析次數誤植對平均的影響",
      "choices": [
        "錯誤平均較高 1/9",
        "錯誤平均較低 1",
        "兩者相同",
        "錯誤平均較高 2"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "正確 21；誤表 190/9；相減得 1/9。",
        "derivedAnswer": "錯誤平均較高 1/9",
        "trustStoredAnswer": false
      },
      "explanation": "更正次數時總和與總次數都會改變。 正確總和為9×21＝189；某筆多登1使總和變190，錯誤平均190÷9＝21又1/9，因此高估1/9。平均誤差等於總和誤差1除以資料筆數9，與逐筆重算結果一致。",
      "steps": [
        "算正確平均。",
        "算誤表平均。",
        "比較。",
        "由正確平均還原總和189。",
        "將總和誤差1除以資料數9，確認平均誤差為1/9。"
      ],
      "optionAnalysis": [
        {
          "choice": "錯誤平均較高 1/9",
          "truth": true,
          "reason": "正確平均 210/10=21；錯誤平均 190/9=21又1/9，高 1/9。"
        },
        {
          "choice": "錯誤平均較低 1",
          "truth": false,
          "reason": "刪除低於原平均的 20 不會使平均降低。"
        },
        {
          "choice": "兩者相同",
          "truth": false,
          "reason": "兩平均不同。"
        },
        {
          "choice": "錯誤平均較高 2",
          "truth": false,
          "reason": "差值不是 2。"
        }
      ],
      "misconceptionTarget": "只看總和變化忽略分母 或認為一筆多1會讓平均也多1，忽略誤差要分攤到9筆資料。",
      "prerequisiteCheck": {
        "skillIds": [
          "weighted-average-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "差 1/9。",
      "ambiguityAndBoundaryAudit": "兩個商均精確。",
      "difficultyReason": "標準資料校正。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a6dfa3cea72277b6c67b952effa7b57804f29aa1d793ef8789a4ee7a5948431d"
    },
    {
      "questionId": "u09-s013-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "資料值 2、5、8 的次數為 3、x、1，平均為 4。x 是多少？",
      "givenConditions": [
        "x 非負整數。"
      ],
      "target": "由平均反推未知次數",
      "choices": [
        "1",
        "3",
        "2",
        "5"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "14+5x=16+4x，故 x=2。",
        "derivedAnswer": "2",
        "trustStoredAnswer": false
      },
      "explanation": "未知次數由加權平均方程決定。 依表列出2×3＋5x＋8×1＝4(3＋x＋1)，得14＋5x＝16＋4x，因此x＝2。代回時總和為24、總頻數為6，24÷6＝4，未知頻數也符合非負整數限制，整張頻數表可成立。",
      "steps": [
        "寫方程。",
        "交叉相乘。",
        "檢查整數解。",
        "同時寫出加權總和與總頻數。",
        "解得x＝2後代回，總和24、總次數6，平均確為4。"
      ],
      "optionAnalysis": [
        {
          "choice": "1",
          "truth": false,
          "reason": "x=1 時平均 19/5=3.8。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "x=3 時平均 29/7。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "(14+5x)/(4+x)=4，解得 x=2。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "x=5 時平均 39/9。"
        }
      ],
      "misconceptionTarget": "把平均值當次數 或只把2、5、8做普通平均，沒有使用頻數3、x、1。",
      "prerequisiteCheck": {
        "skillIds": [
          "weighted-average-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "2。",
      "ambiguityAndBoundaryAudit": "解唯一且表格可行。",
      "difficultyReason": "進階方程。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "13f8f1e61dc139a2e1db8c6062aa38c9a4df7d445e417b0a58fee65f4ec15f9f"
    },
    {
      "questionId": "u09-s013-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "次數表資料值 0、1、2、3，次數 2、4、x、2，平均 1.5。x 是多少？",
      "givenConditions": [
        "x 為次數。"
      ],
      "target": "解較複雜缺次數",
      "choices": [
        "4",
        "2",
        "3",
        "6"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "2(10+2x)=3(8+x)，20+4x=24+3x，x=4。",
        "derivedAnswer": "4",
        "trustStoredAnswer": false
      },
      "explanation": "含小數平均可先化分數。 加權總和為0×2＋1×4＋2x＋3×2＝10＋2x，總頻數8＋x；令(10＋2x)/(8＋x)＝1.5，解得x＝4。代回得到18÷12＝1.5，並確認零值兩筆只影響分母、不增加分子，這是本題最容易漏算之處。",
      "steps": [
        "建立方程。",
        "清除小數。",
        "解並代回。",
        "特別把0的兩次出現算入總頻數。",
        "代入x＝4驗算總和18、總次數12，平均為1.5。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": true,
          "reason": "加權總和 10+2x；總次數 8+x；解得 x=4。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "x=2 時平均 1.4。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "x=3 時平均 16/11。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "x=6 時平均 22/14。"
        }
      ],
      "misconceptionTarget": "小數交叉相乘錯誤 或漏掉數值0雖不增加總和，仍有頻數2要計入分母。",
      "prerequisiteCheck": {
        "skillIds": [
          "weighted-average-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "4。",
      "ambiguityAndBoundaryAudit": "代回平均 1.5。",
      "difficultyReason": "進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fd4e0d9d3b5f910cec93fd5b0845f43f6b7bdc6ec98920c03574d36647c2a9c6"
    },
    {
      "questionId": "u09-s013-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某次數表平均為 6，總次數 15。若新增資料值 9 共 5 次，新平均是多少？",
      "givenConditions": [
        "次數新增 5。"
      ],
      "target": "更新次數表後的平均",
      "choices": [
        "6.5",
        "7",
        "7.5",
        "6.75"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "15×6=90；(90+5×9)/(15+5)=135/20=6.75。",
        "derivedAnswer": "6.75",
        "trustStoredAnswer": false
      },
      "explanation": "新增整組資料需同時更新總和與次數。 原15筆總和為15×6＝90，新增5筆9後總和135、筆數20，所以新平均135÷20＝6.75。新增資料只占四分之一且數值高於舊平均，所以結果應介於6與9之間並較靠近6。",
      "steps": [
        "還原原總和。",
        "加入新組總和。",
        "除新總次數。",
        "把舊平均還原成15筆的總和90。",
        "加上45並除以20，確認平均只向9移動到6.75。"
      ],
      "optionAnalysis": [
        {
          "choice": "6.5",
          "truth": false,
          "reason": "6.5 是錯誤更新。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7 未精確計算。"
        },
        {
          "choice": "7.5",
          "truth": false,
          "reason": "7.5 是直接平均 6 與 9。"
        },
        {
          "choice": "6.75",
          "truth": true,
          "reason": "原總和 90，新增 45，總和 135、次數 20，平均 6.75。"
        }
      ],
      "misconceptionTarget": "直接平均新舊平均 或直接平均舊平均6與新值9，忽略兩部分各代表15筆與5筆。",
      "prerequisiteCheck": {
        "skillIds": [
          "weighted-average-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "6.75。",
      "ambiguityAndBoundaryAudit": "9 是每筆資料值。",
      "difficultyReason": "進階更新。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "411bb532df81f73a427464b012c00cee0dbe7a6f1c11d0e0c03aad80b7936c46"
    },
    {
      "questionId": "u09-s013-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "捷運進站人次表：6、7、8、9 時的人次分別 20、80、150、50。以整點代表各時段，平均進站時間取到小數第一位約為何？",
      "givenConditions": [
        "時段以小時表示。"
      ],
      "target": "由營運次數表估計平均時間",
      "choices": [
        "7.5 時",
        "7.8 時",
        "8.0 時",
        "8.5 時"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "2330÷300≈7.7667，四捨五入到小數第一位為 7.8。",
        "derivedAnswer": "7.8 時",
        "trustStoredAnswer": false
      },
      "explanation": "時段代表值以人次作權重。 各時段等待總時間依人數加權後共2330分鐘，總人數300，故平均2330÷300＝7.766…分鐘，依題意取到小數一位為7.8。",
      "steps": [
        "乘時段與人次。",
        "加總。",
        "除總人次並取位。",
        "用每時段平均乘該時段人數並合計2330。",
        "除以300後依題目指定精度四捨五入為7.8分鐘。"
      ],
      "optionAnalysis": [
        {
          "choice": "7.5 時",
          "truth": false,
          "reason": "7.5 低估。"
        },
        {
          "choice": "7.8 時",
          "truth": true,
          "reason": "加權總和 2330，除總人次 300 得 7.766...，取一位為 7.8。"
        },
        {
          "choice": "8.0 時",
          "truth": false,
          "reason": "8.0 是不當取整數。"
        },
        {
          "choice": "8.5 時",
          "truth": false,
          "reason": "8.5 過高。"
        }
      ],
      "misconceptionTarget": "直接平均時段或錯誤取位 或把各時段平均等待時間直接平均，沒有以各時段人數作權重。",
      "prerequisiteCheck": {
        "skillIds": [
          "weighted-average-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 140,
      "unitAndRoundingCheck": "取到小數第一位為 7.8 時。",
      "ambiguityAndBoundaryAudit": "題目明示代表值與取位。",
      "difficultyReason": "素養應用。",
      "literacyNecessityReason": "通勤人次是時段權重，營運分析需估計整體平均進站時間。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "61343e9d67c6123b01835be5c7a57bfb1da09b0fefb3d226446919510faad765"
    },
    {
      "questionId": "u09-s013-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "家庭每日用電量次數表：8 度 3 天、10 度 4 天、12 度 3 天。十天平均每日用電量為何？",
      "givenConditions": [
        "度／天。"
      ],
      "target": "由生活次數表求平均用量",
      "choices": [
        "9.6 度",
        "10.5 度",
        "100 度",
        "10 度"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "加權總量 100 度，除 10 天得 10 度／天。",
        "derivedAnswer": "10 度",
        "trustStoredAnswer": false
      },
      "explanation": "每日值的次數是天數。 三種每日用量乘天數後的總量為100單位，總天數3＋4＋3＝10，因此每日平均為100÷10＝10單位。以10單位乘回10天會還原總量100，表示天數權重與每日單位均使用一致。",
      "steps": [
        "求十天總用電。",
        "除以天數。",
        "分別以每日用量乘3、4、3天後加總100。",
        "再除以10天，保留單位為每日平均用量。"
      ],
      "optionAnalysis": [
        {
          "choice": "9.6 度",
          "truth": false,
          "reason": "9.6 是加權錯誤。"
        },
        {
          "choice": "10.5 度",
          "truth": false,
          "reason": "10.5 不符總和。"
        },
        {
          "choice": "100 度",
          "truth": false,
          "reason": "100 是十天總用電量。"
        },
        {
          "choice": "10 度",
          "truth": true,
          "reason": "(24+40+36)÷10=10。"
        }
      ],
      "misconceptionTarget": "把總量當平均 或平均三種每日用量，沒有讓持續4天的那一種用量多計一天。",
      "prerequisiteCheck": {
        "skillIds": [
          "weighted-average-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "10 度／天。",
      "ambiguityAndBoundaryAudit": "三類天數合計 10。",
      "difficultyReason": "素養直接應用。",
      "literacyNecessityReason": "家庭用電管理需要把不同用電日數加權，情境提供權重。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "73c1d9ae3787f7b6f0e4e701a2b44b323bbbb30181b4382a158fdb6662415e74"
    },
    {
      "questionId": "u09-s013-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "客服評分表：1 分 2 人、2 分 3 人、3 分 x 人、4 分 5 人、5 分 4 人，共 20 人。若報告稱平均 3.5 分，x 應是多少？",
      "givenConditions": [
        "20 人、分數 1 至 5。"
      ],
      "target": "檢查次數表與摘要平均是否相容",
      "choices": [
        "6 且平均正好 3.5",
        "4",
        "6，但此時平均其實是 3.3，報告不一致",
        "8"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "先用次數總和求 x=6；再驗算加權總分為 66，平均 66/20=3.3，指出報告不一致。",
        "derivedAnswer": "6，但此時平均其實是 3.3，報告不一致",
        "trustStoredAnswer": false
      },
      "explanation": "表格缺值可能由總數決定，摘要平均仍需獨立核對。 先由總人數20解出未知頻數x＝6，再算分數總和66，得到平均66÷20＝3.3；若報告寫成其他值，便與表中頻數不一致。",
      "steps": [
        "補次數。",
        "算加權平均。",
        "檢查報告一致性。",
        "用頻數合計先求未知頻數6。",
        "把6代回計算總分66，再以20人驗算平均3.3並判斷報告。"
      ],
      "optionAnalysis": [
        {
          "choice": "6 且平均正好 3.5",
          "truth": false,
          "reason": "x=6 但平均不是 3.5。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "x=4 時總人數 18。"
        },
        {
          "choice": "6，但此時平均其實是 3.3，報告不一致",
          "truth": true,
          "reason": "由總人數得 x=6；加權總分 66，平均 3.3，故兩條資訊矛盾。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "x=8 時總人數 22。"
        }
      ],
      "misconceptionTarget": "只求缺值不驗算摘要 或只解出未知頻數就停止，沒有再用完整頻數表核對報告中的平均。",
      "prerequisiteCheck": {
        "skillIds": [
          "weighted-average-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 140,
      "unitAndRoundingCheck": "3.3 是精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "正確選項完整陳述矛盾。",
      "difficultyReason": "素養資料品質檢查。",
      "literacyNecessityReason": "客服報告若摘要與原表不一致會影響決策，必須同時驗證總數與平均。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cb4af849c0fd5c2531ef21c43a9b43e4cdb7b4c60a3f560087f42ff42398b6ef"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s013-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "某次測驗成績次數表為：60分有3人、70分有5人、80分有x人、90分有2人。全班平均75分。求x，並將答案代回驗算。",
      "givenConditions": [],
      "target": "由次數表平均建立含未知次數的方程並檢查整數解。",
      "requiredWork": [
        "分子包含60×3、70×5、80x、90×2。",
        "分母包含3+5+x+2。",
        "解出後代回總分與總人數。"
      ],
      "standardSolution": [
        "加權總分=180+350+80x+180=710+80x。",
        "總人數=10+x。",
        "(710+80x)/(10+x)=75。",
        "710+80x=750+75x，5x=40，所以x=8。",
        "驗算：總分1350、總人數18，1350÷18=75。",
        "代回x＝8時總人數為18、總分為1350，1350÷18＝75，因此未知頻數與平均條件一致。各分數的頻數也都是非負整數，沒有只在代數上成立而不符合資料情境的問題。"
      ],
      "alternativeMethod": "用相對75分的偏差平衡：60的3人貢獻-45，70的5人-25，90的2人+30，尚缺+40；每位80分貢獻+5，故x=8。",
      "reasoningSteps": [
        "把每個分數乘次數。",
        "總次數中加入x。",
        "以加權總和除以總次數等於75。",
        "解方程。",
        "檢查x為非負整數並代回。",
        "以代回後的總人數與總分重新算平均，排除移項或頻數加總錯誤。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "方程、x=8、總分1350與18人驗算全部正確。"
        },
        {
          "score": 2,
          "criteria": "方程與x正確但漏驗算，或一處加法小錯而方法完整。"
        },
        {
          "score": 1,
          "criteria": "能正確寫出分子710+80x與分母10+x其中之一，並知道次數要進入兩者。"
        },
        {
          "score": 0,
          "criteria": "分母固定為4類或10人，且未把x視為次數。"
        }
      ],
      "partialCreditRules": [
        "若只列偏差法且邏輯完整可得滿分。",
        "x=8但無任何方程或理由，最高1分。"
      ],
      "followThroughPolicy": "早期常數總分算錯可依一致方程與整數檢查給至2分；代回若不等75應發現。",
      "unitAndNotationRules": "x為人數，必須是非負整數；分數以分。",
      "answerOnlyPolicy": "只寫8人最高1分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "710+80x=750+75x得x=8；1350/18=75。",
        "boundaryAndAmbiguityAudit": "解為正整數且平均75落在60至90之間，條件一致。",
        "rubricAlignmentEvidence": "建模、解方程與代回三層皆有明確要求。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "61898cfd9faaa4aade6860450344a2e394b56c5881b7a53a0563841b387c23e2",
      "commonErrors": [
        "只加總60、70、80、90四個分數，沒有乘各自頻數。",
        "解出x後未代回，或把總人數誤寫成10＋x而漏算90分的2人。"
      ]
    },
    {
      "questionId": "u09-s013-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mean-from-table",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "某班20人的平均閱讀時間原記為7.8小時。後來發現其中一人的6小時被誤登為16小時，另有一人的資料漏登；補登後全班應為21人，正確平均為7.5小時。求漏登者的閱讀時間。",
      "givenConditions": [],
      "target": "同時修正誤植與缺漏，正確處理總量及筆數變化。",
      "requiredWork": [
        "原記錄20人總量由7.8×20求得。",
        "先扣錯值16、加回正值6。",
        "再由21人正確總量求漏登值。"
      ],
      "standardSolution": [
        "原記錄總時數=7.8×20=156小時。",
        "修正誤植後，原20人的正確總量=156-16+6=146小時。",
        "補登後21人的正確總量=7.5×21=157.5小時。",
        "漏登者=157.5-146=11.5小時。",
        "檢查修正後20筆總和146，再加入11.5得到157.5；157.5÷21＝7.5，與更正後平均相符。"
      ],
      "alternativeMethod": "可列方程(156-16+6+x)/21=7.5，直接解x=11.5。",
      "reasoningSteps": [
        "由原平均還原已登錄總量。",
        "執行扣錯加對，筆數仍20。",
        "由正確平均與21人求最終總量。",
        "兩總量相減求漏登值。",
        "每次更正都同步追蹤總和與資料筆數，最後用21筆反向驗算。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "156、146、157.5與漏登11.5小時全部正確，且筆數變化處理清楚。"
        },
        {
          "score": 2,
          "criteria": "方程結構正確但一個乘法或小數算術錯；或答案正確但修正步驟略寫。"
        },
        {
          "score": 1,
          "criteria": "能寫出156-16+6+x=7.5×21，或正確求出任一總量。"
        },
        {
          "score": 0,
          "criteria": "只把平均7.8與7.5相減，未處理總量與筆數。"
        }
      ],
      "partialCreditRules": [
        "誤植修正應為淨減10，但寫成156-10亦可。",
        "漏登值若算成負數卻未檢查，不得超過1分。"
      ],
      "followThroughPolicy": "乘法小錯可依正確方程結構給方法分；最後值應位於合理非負範圍。",
      "unitAndNotationRules": "平均與個人資料均以小時；可保留11.5小時。",
      "answerOnlyPolicy": "只寫11.5小時，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "7.8×20=156；修正為146；7.5×21=157.5；差11.5。",
        "boundaryAndAmbiguityAudit": "誤植者已包含在20筆，漏登者使筆數由20變21，無重複。",
        "rubricAlignmentEvidence": "題目核心是兩種資料錯誤對總量與筆數的不同影響。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "9058e2348662595fa565ace1850c6215d7f335e2a42cf84cde8642ea3f75ad5a",
      "commonErrors": [
        "把誤登16改回6時加上10而非減去10，導致修正總和方向相反。",
        "補入缺漏資料後仍用20作分母，沒有把資料筆數改成21。"
      ]
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s013-v001-semantic-r1",
      "questionId": "u09-s013-v001",
      "unitId": "u09",
      "skillId": "mean-from-table",
      "independentRecalculation": "總和 11、筆數 6，所以平均 11/6。",
      "correctChoiceCheck": "獨立計算得到「11/6」，位於索引 0。",
      "distractorAudit": [
        "2 是資料值的未加權平均。",
        "6 是總次數。",
        "11 是加權總和。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「11/6」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「由次數表求平均與缺值」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "三類完整。",
      "difficultyEvidence": "基本次數加權。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "950443432f760977065b82d7fac7391bb9193eb3d4014e8391111ce6d25e564e"
    },
    {
      "reviewId": "u09-s013-v002-semantic-r1",
      "questionId": "u09-s013-v002",
      "unitId": "u09",
      "skillId": "mean-from-table",
      "independentRecalculation": "總分 280、總人數 4，平均 70。",
      "correctChoiceCheck": "獨立計算得到「70」，位於索引 2。",
      "distractorAudit": [
        "67.5 是加權錯誤。",
        "75 是忽略 60。",
        "280 是總分。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「70」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「由次數表求平均與缺值」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "次數合計 4。",
      "difficultyEvidence": "基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "49b5fe25939d15c5562649526a6d65c801cd204da6a65fb46b888704f4311647"
    },
    {
      "reviewId": "u09-s013-v003-semantic-r1",
      "questionId": "u09-s013-v003",
      "unitId": "u09",
      "skillId": "mean-from-table",
      "independentRecalculation": "總和＝4×20=80。",
      "correctChoiceCheck": "獨立計算得到「80」，位於索引 1。",
      "distractorAudit": [
        "5 是 20÷4。",
        "16 是 4²。",
        "24 是相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「80」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「由次數表求平均與缺值」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "資料值細節不影響總和。",
      "difficultyEvidence": "基本反推。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "3fb3be63d72a8a073408952e22e18222f671f1d517971967068d76dc03c42db5"
    },
    {
      "reviewId": "u09-s013-v004-semantic-r1",
      "questionId": "u09-s013-v004",
      "unitId": "u09",
      "skillId": "mean-from-table",
      "independentRecalculation": "x=10-5=5。",
      "correctChoiceCheck": "獨立計算得到「5」，位於索引 3。",
      "distractorAudit": [
        "2 是第三類次數。",
        "3 是第一類次數。",
        "7 是 10-3。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「5」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「由次數表求平均與缺值」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "唯一缺值。",
      "difficultyEvidence": "標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "67802da49e36d31db2fa3779bc25de1a0dbd6a1036aa99565b34a646de0242aa"
    },
    {
      "reviewId": "u09-s013-v005-semantic-r1",
      "questionId": "u09-s013-v005",
      "unitId": "u09",
      "skillId": "mean-from-table",
      "independentRecalculation": "總和=12+3x，總次數=4+x；商恆為 3。",
      "correctChoiceCheck": "獨立計算得到「任意非負整數」，位於索引 1。",
      "distractorAudit": [
        "x=0 可行但非唯一。",
        "x=2 可行但非唯一。",
        "x=4 可行但非唯一。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「任意非負整數」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「由次數表求平均與缺值」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "任意非負整數皆符合。",
      "difficultyEvidence": "標準概念。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a96016aeb279900a832c6e308bca8fa2830fe4c6e5c6644808662ad70a725a00"
    },
    {
      "reviewId": "u09-s013-v006-semantic-r1",
      "questionId": "u09-s013-v006",
      "unitId": "u09",
      "skillId": "mean-from-table",
      "independentRecalculation": "正確 21；誤表 190/9；相減得 1/9。",
      "correctChoiceCheck": "獨立計算得到「錯誤平均較高 1/9」，位於索引 0。",
      "distractorAudit": [
        "刪除低於原平均的 20 不會使平均降低。",
        "兩平均不同。",
        "差值不是 2。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「錯誤平均較高 1/9」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「由次數表求平均與缺值」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "兩個商均精確。",
      "difficultyEvidence": "標準資料校正。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d65821f884d7561e3cb941c660673d8c7e8a30ab99c42c32668d96ff38c6005f"
    },
    {
      "reviewId": "u09-s013-v007-semantic-r1",
      "questionId": "u09-s013-v007",
      "unitId": "u09",
      "skillId": "mean-from-table",
      "independentRecalculation": "14+5x=16+4x，故 x=2。",
      "correctChoiceCheck": "獨立計算得到「2」，位於索引 2。",
      "distractorAudit": [
        "x=1 時平均 19/5=3.8。",
        "x=3 時平均 29/7。",
        "x=5 時平均 39/9。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「2」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「由次數表求平均與缺值」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "解唯一且表格可行。",
      "difficultyEvidence": "進階方程。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "4cb935262fbc3c8812effb124ef9d86aead02d66fd7f72db5170e18280e54773"
    },
    {
      "reviewId": "u09-s013-v008-semantic-r1",
      "questionId": "u09-s013-v008",
      "unitId": "u09",
      "skillId": "mean-from-table",
      "independentRecalculation": "2(10+2x)=3(8+x)，20+4x=24+3x，x=4。",
      "correctChoiceCheck": "獨立計算得到「4」，位於索引 0。",
      "distractorAudit": [
        "x=2 時平均 1.4。",
        "x=3 時平均 16/11。",
        "x=6 時平均 22/14。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「4」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「由次數表求平均與缺值」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "代回平均 1.5。",
      "difficultyEvidence": "進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "31fdc2fab4207955af070a70e8b230849ef3d8941c53957ff82eb8926b9028ba"
    },
    {
      "reviewId": "u09-s013-v009-semantic-r1",
      "questionId": "u09-s013-v009",
      "unitId": "u09",
      "skillId": "mean-from-table",
      "independentRecalculation": "15×6=90；(90+5×9)/(15+5)=135/20=6.75。",
      "correctChoiceCheck": "獨立計算得到「6.75」，位於索引 3。",
      "distractorAudit": [
        "6.5 是錯誤更新。",
        "7 未精確計算。",
        "7.5 是直接平均 6 與 9。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「6.75」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「由次數表求平均與缺值」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "9 是每筆資料值。",
      "difficultyEvidence": "進階更新。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "40a9cc1794826d2fe14190cc2448c218eab2598e1009578b5eb7edc46385ee39"
    },
    {
      "reviewId": "u09-s013-v010-semantic-r1",
      "questionId": "u09-s013-v010",
      "unitId": "u09",
      "skillId": "mean-from-table",
      "independentRecalculation": "2330÷300≈7.7667，四捨五入到小數第一位為 7.8。",
      "correctChoiceCheck": "獨立計算得到「7.8 時」，位於索引 1。",
      "distractorAudit": [
        "7.5 低估。",
        "8.0 是不當取整數。",
        "8.5 過高。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「7.8 時」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「由次數表求平均與缺值」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目明示代表值與取位。",
      "difficultyEvidence": "素養應用。",
      "literacyEvidence": "通勤人次是時段權重，營運分析需估計整體平均進站時間。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "3ee74ee3600137cf77eafae6515aec78524cc2e26bd19cd6bc0d042d1688562e"
    },
    {
      "reviewId": "u09-s013-v011-semantic-r1",
      "questionId": "u09-s013-v011",
      "unitId": "u09",
      "skillId": "mean-from-table",
      "independentRecalculation": "加權總量 100 度，除 10 天得 10 度／天。",
      "correctChoiceCheck": "獨立計算得到「10 度」，位於索引 3。",
      "distractorAudit": [
        "9.6 是加權錯誤。",
        "10.5 不符總和。",
        "100 是十天總用電量。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「10 度」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「由次數表求平均與缺值」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "三類天數合計 10。",
      "difficultyEvidence": "素養直接應用。",
      "literacyEvidence": "家庭用電管理需要把不同用電日數加權，情境提供權重。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "1029840de558b359a3ce6aa9ec4d60ed9679a403ad358271b85e61a38954e672"
    },
    {
      "reviewId": "u09-s013-v012-semantic-r1",
      "questionId": "u09-s013-v012",
      "unitId": "u09",
      "skillId": "mean-from-table",
      "independentRecalculation": "先用次數總和求 x=6；再驗算加權總分為 66，平均 66/20=3.3，指出報告不一致。",
      "correctChoiceCheck": "獨立計算得到「6，但此時平均其實是 3.3，報告不一致」，位於索引 2。",
      "distractorAudit": [
        "x=6 但平均不是 3.5。",
        "x=4 時總人數 18。",
        "x=8 時總人數 22。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「6，但此時平均其實是 3.3，報告不一致」同時符合總人數與平均驗算。",
      "scopeEvidence": "題目直接檢核「由次數表求平均與缺值」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "正確選項完整陳述矛盾。",
      "difficultyEvidence": "素養資料品質檢查。",
      "literacyEvidence": "客服報告若摘要與原表不一致會影響決策，必須同時驗證總數與平均。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "56d30b80a04b15a272811335f1e8757cc67de2157c9c7c66bddf7f3b6792f516"
    }
  ],
  "drawingSpecs": []
};
