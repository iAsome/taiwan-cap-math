// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s012-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-summary",
    "skillId": "weighted-average-basic",
    "lockedTitle": "加權平均",
    "title": "加權平均：影響力不同時不能直接平均",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "mode-range-basic"
      ],
      "explanation": "需理解一般平均數，並會處理百分比、分數與括號運算。"
    },
    "learningGoals": [
      "辨認權數代表的次數、比例或重要程度。",
      "用加權總和除以權數總和。",
      "區分權數總和為1、100%或其他數值。",
      "由目標加權平均反求未知分數。",
      "避免將各組平均數不加權直接平均。"
    ],
    "vocabulary": [
      {
        "term": "權數",
        "meaning": "某資料值在總結果中的次數、比例或重要程度。"
      },
      {
        "term": "加權總和",
        "meaning": "每個資料值乘其權數後再相加。"
      },
      {
        "term": "加權平均",
        "meaning": "加權總和除以權數總和。"
      },
      {
        "term": "權重百分比",
        "meaning": "以百分比表示的權數，總和通常為100%。"
      },
      {
        "term": "組別人數",
        "meaning": "合併各組平均時，各組平均的權數。"
      }
    ],
    "notation": [
      {
        "symbol": "w",
        "meaning": "權數。"
      },
      {
        "symbol": "Σ(wx)",
        "meaning": "各資料值與權數乘積的總和。"
      },
      {
        "symbol": "Σw",
        "meaning": "所有權數的總和。"
      }
    ],
    "conceptDevelopment": [
      "一般平均數是假設每一筆權數相同；當各項次數或重要性不同時，要使用加權平均。",
      "若權數是次數，先做「數值×次數」；若權數是百分比，先將百分比改成小數或分數。",
      "當百分比總和為100%時，加權平均可直接相加各項「分數×比例」。",
      "合併兩組平均時，權數是各組人數，不是把兩個平均數直接平均。",
      "加權平均一定落在有正權數的最小資料值與最大資料值之間。",
      "加權平均的核心不是把幾個代表值再平均，而是先把每一組的平均還原成對總量的貢獻，再用全部權重的總和分攤。權重可以是人數、件數、百分比、學分或金額，但分子與分母必須使用同一種權重；算完還要檢查結果是否落在各資料值之間，並偏向權重較大的資料值。"
    ],
    "definitions": [
      {
        "name": "加權平均",
        "statement": "各資料值乘其權數之總和，再除以權數總和。"
      },
      {
        "name": "正規化權重",
        "statement": "權數總和為1或100%的權重，可直接形成各項貢獻比例。"
      }
    ],
    "formulas": [
      {
        "formula": "加權平均＝Σ(資料值×權數)÷Σ權數",
        "conditions": [
          "權數非負且總和大於0",
          "資料值與結果單位一致"
        ]
      },
      {
        "formula": "百分比加權平均＝Σ(資料值×百分比小數)",
        "conditions": [
          "各百分比總和為100%"
        ]
      },
      {
        "formula": "合併平均＝(A組平均×A組人數＋B組平均×B組人數)÷總人數",
        "conditions": [
          "各組不重複且完整"
        ]
      }
    ],
    "invalidUseCases": [
      "兩組人數不同卻直接平均兩組平均數。",
      "把30%當作30相乘後不除以100。",
      "權數總和不是1卻省略除以權數總和。",
      "把分數乘錯其他項權重。",
      "加權結果超出所有資料值範圍卻不檢查。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "列出每個資料值與對應權數。"
      },
      {
        "step": 2,
        "action": "確認權數是次數、比例或百分比。"
      },
      {
        "step": 3,
        "action": "逐項計算資料值×權數。"
      },
      {
        "step": 4,
        "action": "加總乘積，必要時除以權數總和。"
      },
      {
        "step": 5,
        "action": "檢查結果位於最小值與最大值之間，並依題意取位。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "某成績由80分占30%、90分占70%組成，求加權成績。",
        "solution": [
          "把30%、70%寫成0.3、0.7。",
          "計算80×0.3＝24、90×0.7＝63。",
          "相加得24＋63＝87。"
        ],
        "answer": "87分。",
        "why": "百分比權重總和已是1，所以各分數乘權重後直接相加即可；結果87介於80與90之間，且較靠近權重較大的90，也通過合理性檢查。"
      },
      {
        "id": "L2",
        "prompt": "甲組10人平均70分，乙組15人平均80分，求全體平均。",
        "solution": [
          "甲組總分為10×70＝700。",
          "乙組總分為15×80＝1200，合計1900。",
          "總人數25，所以1900÷25＝76。"
        ],
        "answer": "76分。",
        "why": "兩組人數不同，不能把70與80直接除以2；先還原總分再除以總人數，才能讓每位學生具有相同權重，結果也合理地較靠近人數較多的80分。"
      },
      {
        "id": "L3",
        "prompt": "商品單價20、30、50元，購買量分別為2、3、1件，求平均每件單價。",
        "solution": [
          "總價為20×2＋30×3＋50×1＝180元。",
          "總件數為2＋3＋1＝6件。",
          "平均每件180÷6＝30元。"
        ],
        "answer": "30元／件。",
        "why": "題目要的是每一件商品的平均單價，因此數量就是權重；只平均三種標價會把買一件與買三件視為同等重要，無法反映實際支出結構。"
      },
      {
        "id": "L4",
        "prompt": "第一次80分占40%，第二次x分占60%，總成績至少84分，若x為整數，最少多少？",
        "solution": [
          "列不等式0.4×80＋0.6x≥84。",
          "整理得32＋0.6x≥84，所以0.6x≥52。",
          "x≥86又2/3，故最小整數是87。"
        ],
        "answer": "87分。",
        "why": "不等式解出的86又2/3是最低實數門檻，但題目限定分數取整數，所以必須向上取到87；代回可得84.2，而86只得83.6，邊界也驗證無誤。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "70與80平均得到75。",
        "why": "忽略兩組人數10與15。",
        "fix": "以人數加權，得到76。"
      },
      {
        "wrong": "80×30+90×70。",
        "why": "百分比未轉成0.3、0.7。",
        "fix": "除以100或改用小數。"
      },
      {
        "wrong": "權數2、3、1時只除以3種。",
        "why": "權數是件數，總件數為6。",
        "fix": "除以權數總和6。"
      },
      {
        "wrong": "加權平均92，高於所有分數90。",
        "why": "乘法或權數總和錯。",
        "fix": "正權數加權平均不超出資料範圍。"
      }
    ],
    "selfCheck": [
      "每個值配到正確權數嗎？",
      "百分比總和為100%嗎？",
      "是否需要除以權數總和？",
      "合併平均的權數是否為人數？",
      "結果是否落在合理範圍？"
    ],
    "summary": [
      "加權平均＝加權總和÷權數總和。",
      "百分比權重先轉成小數。",
      "合併平均要依人數加權。",
      "結果應在資料最小值與最大值之間。"
    ],
    "connections": {
      "previous": "一般平均數假設每筆影響相同；加權平均允許影響不同。",
      "next": [
        "由次數表求平均就是以次數作權數。",
        "目標平均與缺值題會反向使用加權總和。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s012-v001",
        "u09-s012-v002",
        "u09-s012-v003",
        "u09-s012-v004",
        "u09-s012-v005",
        "u09-s012-v006",
        "u09-s012-v007",
        "u09-s012-v008",
        "u09-s012-v009",
        "u09-s012-v010",
        "u09-s012-v011",
        "u09-s012-v012"
      ],
      "constructedResponseIds": [
        "u09-s012-cr001",
        "u09-s012-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "涵蓋百分比權重、次數權重、合併平均與目標分數不等式。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需理解一般平均數，並會處理百分比、分數與括號運算。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "例題採用成績、人數、單價數量與最低門檻四種不同權數意義。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "7f20a2e350c76daee219ce1c6ebfe5a9a8b036920cf91151faea8cc1c19dcb60"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s012-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "平時成績 80 占 40%，期末 90 占 60%。加權平均是多少？",
      "givenConditions": [
        "權重和 100%。"
      ],
      "target": "計算百分比加權平均",
      "choices": [
        "85",
        "84",
        "170",
        "86"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "依權重相乘後加總，得 86。",
        "derivedAnswer": "86",
        "trustStoredAnswer": false
      },
      "explanation": "加權平均要讓權重反映各部分重要性。 依權重直接計算為80×0.4＋90×0.6＝32＋54＝86；兩個權重相加為1，所以不需再除以其他數。若誤算成85或87，代回兩項貢獻便無法同時得到原題的加權總和。",
      "steps": [
        "權重化為小數。",
        "各分數乘權重。",
        "加總。",
        "把40%、60%分別寫成0.4、0.6。",
        "驗算86介於80與90之間且偏向權重較大的90。"
      ],
      "optionAnalysis": [
        {
          "choice": "85",
          "truth": false,
          "reason": "85 是直接平均。"
        },
        {
          "choice": "84",
          "truth": false,
          "reason": "權重乘法計算錯。"
        },
        {
          "choice": "170",
          "truth": false,
          "reason": "把兩分數相加。"
        },
        {
          "choice": "86",
          "truth": true,
          "reason": "80×0.4+90×0.6=32+54=86。"
        }
      ],
      "misconceptionTarget": "直接平均兩分數 或把40與60當人數後又多除一次，沒有先確認權重總和為百分之百。",
      "prerequisiteCheck": {
        "skillIds": [
          "mode-range-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "86 分。",
      "ambiguityAndBoundaryAudit": "權重完整且無重疊。",
      "difficultyReason": "基本加權平均。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "13f78aea458dffa4b52ec01ba4f788e26bedce073346d3032855dcc89ec70358"
    },
    {
      "questionId": "u09-s012-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "商品 A 每公斤 60 元買 2 公斤，B 每公斤 90 元買 1 公斤。平均每公斤價格是多少？",
      "givenConditions": [
        "重量單位公斤。"
      ],
      "target": "用數量加權求平均單價",
      "choices": [
        "70 元",
        "75 元",
        "80 元",
        "150 元"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "平均單價＝總價÷總重量＝210÷3=70。",
        "derivedAnswer": "70 元",
        "trustStoredAnswer": false
      },
      "explanation": "重量是單價的權重。 兩件60元與一件90元的總價是60×2＋90＝210元，總件數為3，因此平均每件210÷3＝70元。用70×3＝210反向檢查，正好還原實際支出，故分母與單位都一致。",
      "steps": [
        "求各項總價。",
        "加總重量與總價。",
        "相除。",
        "先以單價乘數量求每類商品總價。",
        "用總價210元除以總件數3並保留元／件。"
      ],
      "optionAnalysis": [
        {
          "choice": "70 元",
          "truth": true,
          "reason": "總價 120+90=210，總重 3 公斤，210÷3=70。"
        },
        {
          "choice": "75 元",
          "truth": false,
          "reason": "75 是兩單價直接平均。"
        },
        {
          "choice": "80 元",
          "truth": false,
          "reason": "80 是錯誤加權。"
        },
        {
          "choice": "150 元",
          "truth": false,
          "reason": "150 是單價相加。"
        }
      ],
      "misconceptionTarget": "直接平均單價 或只平均60與90兩種標價而忽略60元商品買了兩件。",
      "prerequisiteCheck": {
        "skillIds": [
          "mode-range-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "70 元／公斤。",
      "ambiguityAndBoundaryAudit": "兩批商品可合併計價。",
      "difficultyReason": "基礎生活加權。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1d8dee4d306ad63b76584c4dc88341c2b95e93d779006f12d1a29a87b4c1f27d"
    },
    {
      "questionId": "u09-s012-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "三次測驗分數 70、80、90，權重分別 1、1、2。加權平均是多少？",
      "givenConditions": [
        "權重比 1:1:2。"
      ],
      "target": "以整數權重求加權平均",
      "choices": [
        "80",
        "82.5",
        "85",
        "330"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "加權總和 330，權重和 4，平均 82.5。",
        "derivedAnswer": "82.5",
        "trustStoredAnswer": false
      },
      "explanation": "權重可用比例數，不一定寫成百分比。 權數比1：1：2的總權數是4，加權總分為70＋80＋2×90＝330，所以加權平均為330÷4＝82.5。把90展開成兩份後，四份資料70、80、90、90的普通平均也同樣為82.5。",
      "steps": [
        "乘上各權重。",
        "加總權重。",
        "相除。",
        "依1、1、2展開加權總分330。",
        "除以總權數4，並檢查結果較靠近權重最大的90。"
      ],
      "optionAnalysis": [
        {
          "choice": "80",
          "truth": false,
          "reason": "80 是未加權平均。"
        },
        {
          "choice": "82.5",
          "truth": true,
          "reason": "(70+80+180)÷4=82.5。"
        },
        {
          "choice": "85",
          "truth": false,
          "reason": "85 是錯算。"
        },
        {
          "choice": "330",
          "truth": false,
          "reason": "330 是加權總分未除權重和。"
        }
      ],
      "misconceptionTarget": "忘記除以權重總和 或把三個分數直接平均，漏掉90分在加權總分中要計兩次。",
      "prerequisiteCheck": {
        "skillIds": [
          "mode-range-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "82.5 分。",
      "ambiguityAndBoundaryAudit": "權重皆正。",
      "difficultyReason": "基本權重比。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cdbded3737f8d50b01f7ea43045b81d893c7791bf1de3b15e03a7dc4048f693c"
    },
    {
      "questionId": "u09-s012-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "甲項 75 分占 30%，乙項 x 分占 70%，總成績 82 分。x 是多少？",
      "givenConditions": [
        "權重和 1。"
      ],
      "target": "由加權平均反推分項分數",
      "choices": [
        "79",
        "82",
        "85",
        "87"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "22.5+0.7x=82，解得 x=85。",
        "derivedAnswer": "85",
        "trustStoredAnswer": false
      },
      "explanation": "未知分項可由加權方程反推。 由0.3×75＋0.7x＝82，先得22.5＋0.7x＝82，再算0.7x＝59.5，所以x＝85。代回可得22.5＋59.5＝82，且未知項權重較大，85高於目標82也符合拉升平均的方向。",
      "steps": [
        "寫加權方程。",
        "移項。",
        "除以 0.7。",
        "將已知部分算成22.5後移項。",
        "以0.7除59.5得85，代回可得82。"
      ],
      "optionAnalysis": [
        {
          "choice": "79",
          "truth": false,
          "reason": "79 不符合加權總分。"
        },
        {
          "choice": "82",
          "truth": false,
          "reason": "82 是總成績。"
        },
        {
          "choice": "85",
          "truth": true,
          "reason": "75×0.3+0.7x=82，0.7x=59.5，x=85。"
        },
        {
          "choice": "87",
          "truth": false,
          "reason": "87 會使總成績 83.4。"
        }
      ],
      "misconceptionTarget": "把總成績直接當未知分數 或把目標82直接減75，未依30%與70%的權重建立方程式。",
      "prerequisiteCheck": {
        "skillIds": [
          "mode-range-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "85 分。",
      "ambiguityAndBoundaryAudit": "解在合理 0–100 範圍。",
      "difficultyReason": "標準反推。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "47eb252a7a93b5fbb0053eef100a0ddc6d8821c773b04896f0a46679b5af40e3"
    },
    {
      "questionId": "u09-s012-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "A 班20人平均72分，B班30人平均78分。小華直接計算 (72+78)÷2=75。下列哪一項最精確說明他的錯誤，並給出正確合併平均？",
      "givenConditions": [
        "A班20人",
        "B班30人",
        "兩班人數不同"
      ],
      "target": "診斷未依人數加權的平均數計算",
      "choices": [
        "錯在總人數應為40，正確是75分",
        "錯在人數不同但仍可直接平均，正確是76分",
        "錯在B班平均不能使用，正確是72分",
        "錯在沒有依20與30加權，正確是75.6分"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "兩班總分20×72+30×78=3780，總人數50，合併平均3780÷50=75.6分。",
        "derivedAnswer": "75.6",
        "trustStoredAnswer": false
      },
      "explanation": "先把各班平均還原成總分，再除以合併總人數。 兩組總分為20×72＋30×78＝3780，總人數為50，所以全體平均3780÷50＝75.6分。因78分組占三十人，合併平均75.6應比兩平均的中點75更靠近78，結果合理。",
      "steps": [
        "把各班平均乘以人數求總分。",
        "兩班總分相加。",
        "除以總人數50。",
        "把各組平均還原成總分1440與2340。",
        "相加後除以50人，並檢查75.6較接近人數較多的78。"
      ],
      "optionAnalysis": [
        {
          "choice": "錯在總人數應為40，正確是75分",
          "truth": false,
          "reason": "總人數是50，不是40。"
        },
        {
          "choice": "錯在人數不同但仍可直接平均，正確是76分",
          "truth": false,
          "reason": "人數不同不能把兩個平均等權處理。"
        },
        {
          "choice": "錯在B班平均不能使用，正確是72分",
          "truth": false,
          "reason": "B班資料必須納入。"
        },
        {
          "choice": "錯在沒有依20與30加權，正確是75.6分",
          "truth": true,
          "reason": "依20與30加權得到75.6分。"
        }
      ],
      "misconceptionTarget": "把群組平均直接再平均，忽略各組人數。 或把兩班平均72與78再除以2，忽略兩班人數20與30不同。",
      "prerequisiteCheck": {
        "skillIds": [
          "mode-range-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "75.6 分，題目未要求四捨五入。",
      "ambiguityAndBoundaryAudit": "兩班互斥且合併涵蓋50人，未要求取整數。",
      "difficultyReason": "標準：以錯誤分析檢查加權概念。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c866bb7e99eb5035c6e418f56e97f8bd060f6600213c044375292446c6f39782"
    },
    {
      "questionId": "u09-s012-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "配方中濃度 10% 的溶液 300 克與 25% 的溶液 200 克混合。混合濃度是多少？",
      "givenConditions": [
        "重量單位一致。"
      ],
      "target": "在混合情境計算加權平均",
      "choices": [
        "16%",
        "17.5%",
        "15%",
        "35%"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "300×0.10+200×0.25=80；80÷500=0.16。",
        "derivedAnswer": "16%",
        "trustStoredAnswer": false
      },
      "explanation": "混合濃度以溶液重量為權重。 第一份溶質30克、第二份溶質50克，混合後溶質共80克、溶液共500克，濃度為80÷500＝16%。此值介於10%與25%之間，且較靠近重量較大的10%溶液，符合加權結果。",
      "steps": [
        "求兩份溶質量。",
        "加總溶質與溶液。",
        "相除。",
        "分別求出30克與50克溶質。",
        "以總溶質80克除以總溶液500克再化成百分率。"
      ],
      "optionAnalysis": [
        {
          "choice": "16%",
          "truth": true,
          "reason": "溶質 30+50=80 克，總量 500 克，80/500=16%。"
        },
        {
          "choice": "17.5%",
          "truth": false,
          "reason": "17.5% 是直接平均兩濃度。"
        },
        {
          "choice": "15%",
          "truth": false,
          "reason": "15% 是錯誤加權。"
        },
        {
          "choice": "35%",
          "truth": false,
          "reason": "35% 是濃度相加。"
        }
      ],
      "misconceptionTarget": "直接平均濃度 或直接平均10%與25%，沒有用兩份溶液的300克與200克作權重。",
      "prerequisiteCheck": {
        "skillIds": [
          "mode-range-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "16% 精確。",
      "ambiguityAndBoundaryAudit": "假設混合無損失。",
      "difficultyReason": "標準應用。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "87699a500de9b0ff8e9766f4bfb177a1233212ec220d25067c9a53cba24a7710"
    },
    {
      "questionId": "u09-s012-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某科成績：作業 20%、小考 30%、期末 50%。學生作業 90、小考 80、期末 x，總成績至少 85。若分數為整數，x 最少是多少？",
      "givenConditions": [
        "權重和 1。"
      ],
      "target": "由加權門檻反推最低分",
      "choices": [
        "82",
        "86",
        "84",
        "85"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "已知加權分 42，需 0.5x≥43，故 x≥86。",
        "derivedAnswer": "86",
        "trustStoredAnswer": false
      },
      "explanation": "『至少』形成不等式，且分數為整數。 依人數加權得(20×90＋30×80＋50x)÷100≥85，整理為4200＋50x≥8500，因此x≥86。邊界值86代回時總分8500、總人數100，平均恰為85，較小值即不合格。",
      "steps": [
        "算已知加權分。",
        "建立不等式。",
        "求最小整數解。",
        "把總人數100乘回不等式兩側。",
        "由50x≥4300得x≥86，並以x＝86代入確認恰為85。"
      ],
      "optionAnalysis": [
        {
          "choice": "82",
          "truth": false,
          "reason": "82 使總成績 83。"
        },
        {
          "choice": "86",
          "truth": true,
          "reason": "18+24+0.5x≥85，所以 x≥86。"
        },
        {
          "choice": "84",
          "truth": false,
          "reason": "84 使總成績 84。"
        },
        {
          "choice": "85",
          "truth": false,
          "reason": "85 使總成績 84.5。"
        }
      ],
      "misconceptionTarget": "把至少門檻或權重算錯 或把三組平均直接相加平均，漏掉三組人數20、30、50形成的不同權重。",
      "prerequisiteCheck": {
        "skillIds": [
          "mode-range-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "86 分。",
      "ambiguityAndBoundaryAudit": "86 使總成績恰為 85。",
      "difficultyReason": "進階不等式。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0f80e91dabd974981fb404a36cad38b68180774fa402c5503aef08e514bbd2f1"
    },
    {
      "questionId": "u09-s012-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "兩種原料單價 40 元與 70 元，要混成平均單價 52 元。若 40 元原料用 3 公斤，70 元原料需用多少公斤？",
      "givenConditions": [
        "公斤與元／公斤一致。"
      ],
      "target": "由目標加權平均反推權重",
      "choices": [
        "1 公斤",
        "3 公斤",
        "2 公斤",
        "5 公斤"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "120+70x=156+52x，18x=36，x=2。",
        "derivedAnswer": "2 公斤",
        "trustStoredAnswer": false
      },
      "explanation": "未知權重需由平均單價方程求解。 設70元商品為x公斤，依平均單價得(40×3＋70x)÷(3＋x)＝52，解得120＋70x＝156＋52x，所以x＝2。此時兩種商品總價260元、總重5公斤，260÷5確為每公斤52元。",
      "steps": [
        "建立總價／總重方程。",
        "交叉相乘。",
        "解 x 並驗證。",
        "交叉相乘並把含x項移到同一側。",
        "以x＝2驗算總價260元、總重5公斤，平均52元。"
      ],
      "optionAnalysis": [
        {
          "choice": "1 公斤",
          "truth": false,
          "reason": "x=1 時平均 47.5。"
        },
        {
          "choice": "3 公斤",
          "truth": false,
          "reason": "x=3 時平均 55。"
        },
        {
          "choice": "2 公斤",
          "truth": true,
          "reason": "(40×3+70x)/(3+x)=52，解得 x=2。"
        },
        {
          "choice": "5 公斤",
          "truth": false,
          "reason": "x=5 時平均 58.75。"
        }
      ],
      "misconceptionTarget": "直接用單價差相減 或只平均40元與70元兩個單價，沒有把公斤數同時放入總價與總重量。",
      "prerequisiteCheck": {
        "skillIds": [
          "mode-range-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "2 公斤。",
      "ambiguityAndBoundaryAudit": "目標 52 位於 40 與 70 間，解為正。",
      "difficultyReason": "進階未知權重。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f6ad645be1a71fe921567922063164fda48e10503100432462d493ef69caac4d"
    },
    {
      "questionId": "u09-s012-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "甲、乙兩項權重比 2:3，加權平均 74。甲分數 65，乙分數是多少？",
      "givenConditions": [
        "權重總和 5。"
      ],
      "target": "以權重比反推未知分數",
      "choices": [
        "74",
        "78",
        "83",
        "80"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "130+3x=370，解 x=80。",
        "derivedAnswer": "80",
        "trustStoredAnswer": false
      },
      "explanation": "整數權重比也要除以權重總和。 A、B權重為2：3且平均74，故2×65＋3B＝5×74＝370；3B＝240，因此B＝80。代回得到130＋240＝370，再除以5為74，也顯示較大權重的B高於整體平均，答案與權重方向完全一致。",
      "steps": [
        "寫加權方程。",
        "解未知分數。",
        "代回。",
        "把平均74乘總權數5還原成加權總和370。",
        "移去A的貢獻130後除以3，並代回驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "74",
          "truth": false,
          "reason": "74 是總平均。"
        },
        {
          "choice": "78",
          "truth": false,
          "reason": "78 不滿足方程。"
        },
        {
          "choice": "83",
          "truth": false,
          "reason": "83 使平均 75.8。"
        },
        {
          "choice": "80",
          "truth": true,
          "reason": "(2×65+3x)/5=74，3x=240，x=80。"
        }
      ],
      "misconceptionTarget": "忽略權重總和 或把65與未知數做普通平均，忽略B的權重3大於A的權重2。",
      "prerequisiteCheck": {
        "skillIds": [
          "mode-range-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "80 分。",
      "ambiguityAndBoundaryAudit": "解在分數合理範圍。",
      "difficultyReason": "進階逆算。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "192514721b04045c9c8cd549aa2d176dddd668148928ff8ce51d650138216ee2"
    },
    {
      "questionId": "u09-s012-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "大學申請評分：學測 50%、面試 30%、備審 20%。甲生 82、90、88；乙生 86、84、85。誰的加權總分較高？",
      "givenConditions": [
        "權重總和 100%。"
      ],
      "target": "在多指標制度中比較加權總分",
      "choices": [
        "甲生，85.6 分",
        "乙生，85.5 分",
        "甲生，86.7 分",
        "兩人相同"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "甲 85.6；乙 85.2；甲高 0.4。",
        "derivedAnswer": "甲生，85.6 分",
        "trustStoredAnswer": false
      },
      "explanation": "各項權重不同，不能只比較單項或未加權平均。 依題示權重分別計算，A的加權分數為85.6，B為85.2；兩者使用同一規則，所以A以0.4分領先。",
      "steps": [
        "分別計算兩人加權分。",
        "比較。",
        "逐項列出A、B的加權貢獻後各自相加。",
        "以85.6－85.2＝0.4確認A的總分較高。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲生，85.6 分",
          "truth": true,
          "reason": "甲=41+27+17.6=85.6；乙=43+25.2+17=85.2。"
        },
        {
          "choice": "乙生，85.5 分",
          "truth": false,
          "reason": "乙不是 85.5，且低於甲。"
        },
        {
          "choice": "甲生，86.7 分",
          "truth": false,
          "reason": "86.7 是加總錯誤。"
        },
        {
          "choice": "兩人相同",
          "truth": false,
          "reason": "兩值不同。"
        }
      ],
      "misconceptionTarget": "只看學測較高者 或只比較某一單項最高分，沒有把每一項分數乘上相同的評選權重。",
      "prerequisiteCheck": {
        "skillIds": [
          "mode-range-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 140,
      "unitAndRoundingCheck": "保留一位小數，兩人計算皆精確到一位。",
      "ambiguityAndBoundaryAudit": "同一評分制度。",
      "difficultyReason": "素養多指標決策。",
      "literacyNecessityReason": "招生制度明確指定權重，各項表現的貢獻不同，情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "318c68ba2ca6e0158c771f5049eacd3a823b6b0b86fc4e40825134a8928dd6a1"
    },
    {
      "questionId": "u09-s012-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "電價分兩時段：尖峰每度 5 元用 120 度、離峰每度 2 元用 280 度。平均每度電價是多少？",
      "givenConditions": [
        "費用元、用電度。"
      ],
      "target": "計算分時電價的實際平均單價",
      "choices": [
        "3.5 元",
        "2.9 元",
        "2.5 元",
        "7 元"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "尖峰費 600、離峰費 560，總費 1160；總用電 400 度，平均 2.9。",
        "derivedAnswer": "2.9 元",
        "trustStoredAnswer": false
      },
      "explanation": "用電量是單價的權重。 各級用電費加總為1160元、總用電量400度，若題目問整體平均每度電價，應以1160÷400＝2.9元回答。這是實付總額攤到每一度的平均，不等於各級公告費率的算術平均。",
      "steps": [
        "求兩時段費用。",
        "加總費用與度數。",
        "相除。",
        "先按級距求費用並合計1160元。",
        "再除以400度，確認單位是元／度而非總費用。"
      ],
      "optionAnalysis": [
        {
          "choice": "3.5 元",
          "truth": false,
          "reason": "3.5 是兩電價直接平均。"
        },
        {
          "choice": "2.9 元",
          "truth": true,
          "reason": "(5×120+2×280)÷400=1160÷400=2.9。"
        },
        {
          "choice": "2.5 元",
          "truth": false,
          "reason": "2.5 是錯誤加權。"
        },
        {
          "choice": "7 元",
          "truth": false,
          "reason": "7 是單價相加。"
        }
      ],
      "misconceptionTarget": "直接平均兩種費率 或把各級費率直接平均，忽略每一級實際使用的度數並不相同。",
      "prerequisiteCheck": {
        "skillIds": [
          "mode-range-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "2.9 元／度。",
      "ambiguityAndBoundaryAudit": "未計基本費與稅，題目已限定電價部分。",
      "difficultyReason": "素養加權應用。",
      "literacyNecessityReason": "實際平均電價由各時段用電量決定，不能刪除尖離峰情境。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5fcb4223314515215bc5cc5806fd18b1af2bb9d2079ded34b13cfe42ac9b6c76"
    },
    {
      "questionId": "u09-s012-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "兩家店評分：甲店 5 顆星 90 人、1 顆星 10 人；乙店 5 顆星 9 人、1 顆星 1 人。兩店平均星等都為 4.6。下列敘述何者最適當？",
      "givenConditions": [
        "星等 1 至 5。"
      ],
      "target": "解讀相同加權平均下的樣本量差異",
      "choices": [
        "乙店一定比較好",
        "甲店一定比較差",
        "平均相同，但甲店樣本數較大，評估穩定性資訊較多",
        "平均相同就代表兩店所有評價完全相同"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "甲平均=(450+10)/100=4.6；乙=(45+1)/10=4.6；再比較樣本數。",
        "derivedAnswer": "平均相同，但甲店樣本數較大，評估穩定性資訊較多",
        "trustStoredAnswer": false
      },
      "explanation": "加權平均相同不代表證據量相同。 兩組樣本平均都為4.6，只能說目前中心值相同；A有100人、B僅10人，樣本量差異會影響穩定性，但仍需抽樣方式與分布資訊。",
      "steps": [
        "驗算兩店平均。",
        "比較評論數。",
        "限制結論。",
        "先區分已知的樣本平均與未知的母群特性。",
        "比較樣本數後保留抽樣方法、變異與代表性等限制。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙店一定比較好",
          "truth": false,
          "reason": "平均相同無法判乙一定較好。"
        },
        {
          "choice": "甲店一定比較差",
          "truth": false,
          "reason": "也不能判甲較差。"
        },
        {
          "choice": "平均相同，但甲店樣本數較大，評估穩定性資訊較多",
          "truth": true,
          "reason": "兩店比例相同所以平均同，但甲有 100 則、乙 10 則。"
        },
        {
          "choice": "平均相同就代表兩店所有評價完全相同",
          "truth": false,
          "reason": "資料筆數與個別評價仍不同。"
        }
      ],
      "misconceptionTarget": "只看平均忽略資料量 或只見平均相同就宣稱兩母群完全相同，也可能只憑樣本較大就保證沒有偏誤。",
      "prerequisiteCheck": {
        "skillIds": [
          "mode-range-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "4.6 精確。",
      "ambiguityAndBoundaryAudit": "不宣稱樣本大必然真實較好，只說資訊較多。",
      "difficultyReason": "素養解讀。",
      "literacyNecessityReason": "網路評分決策同時受平均星等與評論數影響，情境提供不可缺少的證據強度資訊。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cf26e68bdc88fca145147ace42ddc7b3e30cfc9d3cbb3310e629481843eeb75f"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s012-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "某科成績由作業25%、小考35%、期末考40%組成。小安三項分數依序為88、76、90。求加權平均。若學校規定小數點後第一位四捨五入到整數，最後成績為何？",
      "givenConditions": [],
      "target": "正確配對百分比權重並依指定取位。",
      "requiredWork": [
        "百分比轉成0.25、0.35、0.40。",
        "逐項相乘後相加。",
        "最後才進行四捨五入。"
      ],
      "standardSolution": [
        "作業貢獻=88×0.25=22。",
        "小考貢獻=76×0.35=26.6。",
        "期末貢獻=90×0.40=36。",
        "加權平均=22+26.6+36=84.6分。",
        "四捨五入到整數為85分。",
        "驗算三項加權貢獻22、26.6、36的總和為84.6，依題意四捨五入到整數才得到85分。"
      ],
      "alternativeMethod": "可用(88×25+76×35+90×40)÷100=84.6。",
      "reasoningSteps": [
        "核對權重總和100%。",
        "配對各分數與權重。",
        "計算加權貢獻。",
        "相加得精確平均。",
        "依規則取整數。",
        "最後檢查權重總和為100%，且84.6位於各原始分數的合理範圍內。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "權重配對、84.6分及取整85分全部正確。"
        },
        {
          "score": 2,
          "criteria": "方法與配對正確，但一項乘法小錯；或84.6正確但漏取整。"
        },
        {
          "score": 1,
          "criteria": "能正確列出完整加權式，或至少算對兩項貢獻。"
        },
        {
          "score": 0,
          "criteria": "直接將三分數平均，未使用權重。"
        }
      ],
      "partialCreditRules": [
        "若過早把26.6取成27再相加導致85，雖最終同值但過程不規範，最高2分。",
        "權重寫25、35、40時必須整體除以100。"
      ],
      "followThroughPolicy": "單一乘法算錯可依正確加權式與後續一致給方法分。",
      "unitAndNotationRules": "成績以分；加權平均84.6保留一位小數，最後取整85。",
      "answerOnlyPolicy": "只寫84.6與85，無加權式，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "22+26.6+36=84.6，十分位6故取85。",
        "boundaryAndAmbiguityAudit": "權重總和100%，無缺項或重疊。",
        "rubricAlignmentEvidence": "配對、精確計算與取位時點均受評。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "f8137a9e8c90f9124df9a3b0dd687f01805c880d5fb03f4227c904d3a68af6ef",
      "commonErrors": [
        "把各項分數直接平均，沒有乘上題目給定的權重。",
        "算得84.6後過早把中間貢獻四捨五入，或漏寫最後取整數為85分。"
      ]
    },
    {
      "questionId": "u09-s012-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "weighted-average-basic",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "A班12人平均72分，B班18人平均78分，C班x人平均84分。三班合併平均為78分。求x，並檢查答案是否符合人數限制。",
      "givenConditions": [],
      "target": "以組別人數作權數，反求未知人數並檢查整數性。",
      "requiredWork": [
        "三班總分用平均×人數。",
        "合併總人數為30+x。",
        "解方程並確認x為正整數。"
      ],
      "standardSolution": [
        "A總分=72×12=864；B總分=78×18=1404；C總分=84x。",
        "(864+1404+84x)/(30+x)=78。",
        "2268+84x=2340+78x，所以6x=72，x=12。",
        "12為正整數，符合人數限制。",
        "代回x＝12時，總分為12×72＋18×78＋12×84＝3276，總人數42，3276÷42＝78，符合題意。這也確認C班人數同時正確計入分子加權總分與分母總人數，而非只改其中一處。"
      ],
      "alternativeMethod": "因B平均正好78，B對偏差平衡為0；A每人低6共-72，C每人高6，需12人提供+72，因此x=12。",
      "reasoningSteps": [
        "還原各班總分或使用相對78的偏差。",
        "建立總分=78×總人數。",
        "解一元一次方程。",
        "檢查分母正、x為正整數。",
        "解得人數後必須代回總分與總人數，確認加權平均確為78。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "方程正確、解x=12，並明確檢查正整數人數。"
        },
        {
          "score": 2,
          "criteria": "方法正確且x=12，但總分細節或限制檢查漏一項。"
        },
        {
          "score": 1,
          "criteria": "能寫出84x與總人數30+x，或用偏差平衡正確指出A缺72分。"
        },
        {
          "score": 0,
          "criteria": "將72、78、84直接平均，或把x當分數而非人數。"
        }
      ],
      "partialCreditRules": [
        "使用偏差法無需展開全部總分，但必須清楚說明每人相對78的差。",
        "解出非整數若未回頭檢查，不得滿分。"
      ],
      "followThroughPolicy": "若A或B總分一處乘法錯，但方程結構與整數檢查完整，可給至2分。",
      "unitAndNotationRules": "x以人；平均與總分以分。最終答案x=12人。",
      "answerOnlyPolicy": "只寫12人，無方程或偏差理由，最高1分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "2268+84x=78(30+x)=2340+78x，x=12，為正整數。",
        "boundaryAndAmbiguityAudit": "30+x>0且各平均在合理範圍；解唯一。",
        "rubricAlignmentEvidence": "權數建模、代數求解與離散人數限制三部分完整。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "4381f3d53b42c6308ab562032fb1b53ef56b95082e97f82bfedf109b79016167",
      "commonErrors": [
        "把三班平均72、78、84直接除以3，忽略各班人數。",
        "建立方程式時漏把C班的x同時加進總人數，導致只改分子不改分母。"
      ]
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s012-v001-semantic-r1",
      "questionId": "u09-s012-v001",
      "unitId": "u09",
      "skillId": "weighted-average-basic",
      "independentRecalculation": "依權重相乘後加總，得 86。",
      "correctChoiceCheck": "獨立計算得到「86」，位於索引 3。",
      "distractorAudit": [
        "85 是直接平均。",
        "權重乘法計算錯。",
        "把兩分數相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「86」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「加權平均」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "權重完整且無重疊。",
      "difficultyEvidence": "基本加權平均。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "3440f3c1c6924764d350969a4db09ad57228e72ff723020809b998c43efd2b70"
    },
    {
      "reviewId": "u09-s012-v002-semantic-r1",
      "questionId": "u09-s012-v002",
      "unitId": "u09",
      "skillId": "weighted-average-basic",
      "independentRecalculation": "平均單價＝總價÷總重量＝210÷3=70。",
      "correctChoiceCheck": "獨立計算得到「70 元」，位於索引 0。",
      "distractorAudit": [
        "75 是兩單價直接平均。",
        "80 是錯誤加權。",
        "150 是單價相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「70 元」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「加權平均」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "兩批商品可合併計價。",
      "difficultyEvidence": "基礎生活加權。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "28ebe4cb40f35476830d01255896d0bf3b91e13f99adeb57e7d2ff2111937464"
    },
    {
      "reviewId": "u09-s012-v003-semantic-r1",
      "questionId": "u09-s012-v003",
      "unitId": "u09",
      "skillId": "weighted-average-basic",
      "independentRecalculation": "加權總和 330，權重和 4，平均 82.5。",
      "correctChoiceCheck": "獨立計算得到「82.5」，位於索引 1。",
      "distractorAudit": [
        "80 是未加權平均。",
        "85 是錯算。",
        "330 是加權總分未除權重和。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「82.5」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「加權平均」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "權重皆正。",
      "difficultyEvidence": "基本權重比。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c77b82fdb596a887d4f1c791b4f329baea697f213210db6d04a63d25b4c24754"
    },
    {
      "reviewId": "u09-s012-v004-semantic-r1",
      "questionId": "u09-s012-v004",
      "unitId": "u09",
      "skillId": "weighted-average-basic",
      "independentRecalculation": "22.5+0.7x=82，解得 x=85。",
      "correctChoiceCheck": "獨立計算得到「85」，位於索引 2。",
      "distractorAudit": [
        "79 不符合加權總分。",
        "82 是總成績。",
        "87 會使總成績 83.4。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「85」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「加權平均」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "解在合理 0–100 範圍。",
      "difficultyEvidence": "標準反推。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "78c122722b06389b404091d4b126eaf0953f773730e7128d3629691fa4630947"
    },
    {
      "reviewId": "u09-s012-v005-semantic-r1",
      "questionId": "u09-s012-v005",
      "unitId": "u09",
      "skillId": "weighted-average-basic",
      "independentRecalculation": "不使用儲存答案，先算兩班總分：20×72=1440、30×78=2340；合計3780分，除以50人得75.6分。",
      "correctChoiceCheck": "獨立重算得到「錯在沒有依20與30加權，正確是75.6分」，位於索引 3。",
      "distractorAudit": [
        "總人數是50，不是40。",
        "人數不同不能把兩個平均等權處理。",
        "B班資料必須納入。"
      ],
      "singleCorrectAnswerEvidence": "四個選項逐項代回後，只有「錯在沒有依20與30加權，正確是75.6分」符合題意。",
      "scopeEvidence": "題目直接檢核「加權平均」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "ambiguityDecision": "兩班人數與平均數均明示，兩班互斥且合併總人數為50；題目未要求四捨五入，因此75.6分是唯一精確答案。",
      "difficultyEvidence": "標準：以錯誤分析檢查加權概念。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7234af237c743582b74dc88426379bd12cd28a68c1f134107837ff2728cd9ef9"
    },
    {
      "reviewId": "u09-s012-v006-semantic-r1",
      "questionId": "u09-s012-v006",
      "unitId": "u09",
      "skillId": "weighted-average-basic",
      "independentRecalculation": "300×0.10+200×0.25=80；80÷500=0.16。",
      "correctChoiceCheck": "獨立計算得到「16%」，位於索引 0。",
      "distractorAudit": [
        "17.5% 是直接平均兩濃度。",
        "15% 是錯誤加權。",
        "35% 是濃度相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「16%」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「加權平均」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "假設混合無損失。",
      "difficultyEvidence": "標準應用。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "20629682e2270f5a1d55847cdd229479e4507e71f4de1d26ff3d91d39e3d938a"
    },
    {
      "reviewId": "u09-s012-v007-semantic-r1",
      "questionId": "u09-s012-v007",
      "unitId": "u09",
      "skillId": "weighted-average-basic",
      "independentRecalculation": "已知加權分 42，需 0.5x≥43，故 x≥86。",
      "correctChoiceCheck": "獨立計算得到「86」，位於索引 1。",
      "distractorAudit": [
        "82 使總成績 83。",
        "84 使總成績 84。",
        "85 使總成績 84.5。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「86」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「加權平均」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "86 使總成績恰為 85。",
      "difficultyEvidence": "進階不等式。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9490f010eb4bb826db438efa6be227a30f3a8fd08763b4699e05a15e45d6d681"
    },
    {
      "reviewId": "u09-s012-v008-semantic-r1",
      "questionId": "u09-s012-v008",
      "unitId": "u09",
      "skillId": "weighted-average-basic",
      "independentRecalculation": "120+70x=156+52x，18x=36，x=2。",
      "correctChoiceCheck": "獨立計算得到「2 公斤」，位於索引 2。",
      "distractorAudit": [
        "x=1 時平均 47.5。",
        "x=3 時平均 55。",
        "x=5 時平均 58.75。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「2 公斤」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「加權平均」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "目標 52 位於 40 與 70 間，解為正。",
      "difficultyEvidence": "進階未知權重。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "18a4f4baa06baf07aaf41e2036d82cd71d60e273a52aa036447987bab36b7874"
    },
    {
      "reviewId": "u09-s012-v009-semantic-r1",
      "questionId": "u09-s012-v009",
      "unitId": "u09",
      "skillId": "weighted-average-basic",
      "independentRecalculation": "130+3x=370，解 x=80。",
      "correctChoiceCheck": "獨立計算得到「80」，位於索引 3。",
      "distractorAudit": [
        "74 是總平均。",
        "78 不滿足方程。",
        "83 使平均 75.8。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「80」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「加權平均」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "解在分數合理範圍。",
      "difficultyEvidence": "進階逆算。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "bcdb3b789802ab4678d1fdd83de91ddf3c0be107913545106192388e6e8428a7"
    },
    {
      "reviewId": "u09-s012-v010-semantic-r1",
      "questionId": "u09-s012-v010",
      "unitId": "u09",
      "skillId": "weighted-average-basic",
      "independentRecalculation": "甲 85.6；乙 85.2；甲高 0.4。",
      "correctChoiceCheck": "獨立計算得到「甲生，85.6 分」，位於索引 0。",
      "distractorAudit": [
        "乙不是 85.5，且低於甲。",
        "86.7 是加總錯誤。",
        "兩值不同。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「甲生，85.6 分」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「加權平均」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "同一評分制度。",
      "difficultyEvidence": "素養多指標決策。",
      "literacyEvidence": "招生制度明確指定權重，各項表現的貢獻不同，情境不可刪除。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9f5e3e8cf0905c580821d164655ded1a07bace66e267c404f1b83b10a2688422"
    },
    {
      "reviewId": "u09-s012-v011-semantic-r1",
      "questionId": "u09-s012-v011",
      "unitId": "u09",
      "skillId": "weighted-average-basic",
      "independentRecalculation": "尖峰費 600、離峰費 560，總費 1160；總用電 400 度，平均 2.9。",
      "correctChoiceCheck": "獨立計算得到「2.9 元」，位於索引 1。",
      "distractorAudit": [
        "3.5 是兩電價直接平均。",
        "2.5 是錯誤加權。",
        "7 是單價相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「2.9 元」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「加權平均」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "未計基本費與稅，題目已限定電價部分。",
      "difficultyEvidence": "素養加權應用。",
      "literacyEvidence": "實際平均電價由各時段用電量決定，不能刪除尖離峰情境。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "44482083b9ba0481e72ed2cdd369e9c7425aa8259b4444a8ab41e9a43a2a8ba9"
    },
    {
      "reviewId": "u09-s012-v012-semantic-r1",
      "questionId": "u09-s012-v012",
      "unitId": "u09",
      "skillId": "weighted-average-basic",
      "independentRecalculation": "甲平均=(450+10)/100=4.6；乙=(45+1)/10=4.6；再比較樣本數。",
      "correctChoiceCheck": "獨立計算得到「平均相同，但甲店樣本數較大，評估穩定性資訊較多」，位於索引 2。",
      "distractorAudit": [
        "平均相同無法判乙一定較好。",
        "也不能判甲較差。",
        "資料筆數與個別評價仍不同。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「平均相同，但甲店樣本數較大，評估穩定性資訊較多」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「加權平均」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不宣稱樣本大必然真實較好，只說資訊較多。",
      "difficultyEvidence": "素養解讀。",
      "literacyEvidence": "網路評分決策同時受平均星等與評論數影響，情境提供不可缺少的證據強度資訊。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "3265f4d48a9e915510ff22276bd501a509645e1e5f4e43aa1b3600bd81dd93c0"
    }
  ],
  "drawingSpecs": []
};
