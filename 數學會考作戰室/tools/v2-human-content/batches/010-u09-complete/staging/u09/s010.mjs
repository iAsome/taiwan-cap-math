// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s010-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-summary",
    "skillId": "median-basic",
    "lockedTitle": "中位數與位置",
    "title": "中位數與位置：排序後找正中央",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "mean-basic"
      ],
      "explanation": "需能計算平均數，並能依大小排列整數、小數與分數。"
    },
    "learningGoals": [
      "先排序再找中位數。",
      "分辨奇數筆與偶數筆資料的位置公式。",
      "由次數分配判斷中位數所在值或組別。",
      "理解中位數不易受極端值影響。",
      "處理加入或刪除資料後的中位數變化。"
    ],
    "vocabulary": [
      {
        "term": "中位數",
        "meaning": "資料排序後，位在正中央的值；偶數筆時取中央兩值平均。"
      },
      {
        "term": "排序",
        "meaning": "依數值由小到大或由大到小排列。"
      },
      {
        "term": "位置",
        "meaning": "排序後從一端數第幾筆。"
      },
      {
        "term": "中央兩值",
        "meaning": "偶數筆資料中第 n/2 筆與第 n/2+1 筆。"
      },
      {
        "term": "抗極端值",
        "meaning": "極端值通常不直接改變中央位置，因此中位數較穩定。"
      }
    ],
    "notation": [
      {
        "symbol": "n",
        "meaning": "資料筆數。"
      },
      {
        "symbol": "(n+1)/2",
        "meaning": "n 為奇數時，中位數所在位置。"
      },
      {
        "symbol": "n/2、n/2+1",
        "meaning": "n 為偶數時，中央兩筆的位置。"
      }
    ],
    "conceptDevelopment": [
      "中位數描述排序後的中央位置，第一步一定是將資料由小到大排列並逐筆計數，重複值也各占一個位置。奇數筆的中位位置為筆數加一後除以二；偶數筆則取正中央兩個位置的數值平均。中位數不使用全部資料總和，因此不能拿平均數公式替代。",
      "加入、刪除或更改資料後，即使新值位在最左或最右，也要更新總筆數並重新確認中央位置。極端值留在兩端時常不會大幅改變中位數，但若筆數奇偶改變，單一中央值可能變成中央兩值平均，所以中位數仍可能小幅移動。",
      "已排序且含未知數的題目要同時使用位置與排序限制。奇數筆可把中央未知數直接等同中位數；偶數筆則由中央兩值建立方程，解得後還要檢查未知數是否落在前後值之間。次數表也可用累積次數判斷中央位置落在哪個資料值。"
    ],
    "definitions": [
      {
        "name": "奇數筆中位數",
        "statement": "排序後第 (n+1)/2 筆資料。"
      },
      {
        "name": "偶數筆中位數",
        "statement": "排序後第 n/2 筆與第 n/2+1 筆的算術平均。"
      }
    ],
    "formulas": [
      {
        "formula": "奇數筆位置＝(n+1)÷2",
        "conditions": [
          "n 為正奇數",
          "資料已排序"
        ]
      },
      {
        "formula": "偶數筆中位數＝(第 n/2 筆＋第 n/2+1 筆)÷2",
        "conditions": [
          "n 為正偶數",
          "資料已排序"
        ]
      }
    ],
    "invalidUseCases": [
      "直接取題目書寫順序的中央值。",
      "偶數筆只取較小或較大的中央值。",
      "把中位數位置與中位數數值混為一談。",
      "次數表只數不同數值，不計各值出現次數。",
      "把四分位數或盒狀圖方法帶入本技能；這些屬 U22。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "將全部資料由小到大排序。"
      },
      {
        "step": 2,
        "action": "數出總筆數 n。"
      },
      {
        "step": 3,
        "action": "判斷 n 是奇數或偶數。"
      },
      {
        "step": 4,
        "action": "依位置公式定位中央一筆或兩筆。"
      },
      {
        "step": 5,
        "action": "偶數筆對中央兩值取平均，並寫單位。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "資料為 9、3、7、4、12，求中位數。",
        "solution": [
          "排序為 3、4、7、9、12。",
          "五筆中央位置為第三筆。"
        ],
        "answer": "中位數為 7。",
        "why": "原題第三個數七雖巧合是答案，仍必須先排序才能確定；排序後第三筆左右各有兩筆，位置完全平衡，這才是中位數的定義依據。"
      },
      {
        "id": "L2",
        "prompt": "資料為 2、8、5、11、6、20，求中位數。",
        "solution": [
          "排序為 2、5、6、8、11、20。",
          "中央為第三、四筆六與八。",
          "(6+8)÷2=7。"
        ],
        "answer": "中位數為 7。",
        "why": "六筆是偶數，中央落在兩個位置之間，所以必須平均六與八；只取其中一個會使左右資料筆數不對稱，而兩端二與二十不參與中央計算。"
      },
      {
        "id": "L3",
        "prompt": "1 出現 2 次、4 出現 3 次、9 出現 4 次，求中位數。",
        "solution": [
          "總筆數為 9，中位位置是第五筆。",
          "累積到 1 為 2 筆，累積到 4 為 5 筆。"
        ],
        "answer": "中位數為 4。",
        "why": "不必展開九筆資料，只要用累積次數定位第五筆；第五筆已落在數值四的區段，後面四個九都在中央位置右側，不會改變答案。"
      },
      {
        "id": "L4",
        "prompt": "薪資為 30、31、31、32、300 千元，哪個數較能描述中央員工？",
        "solution": [
          "排序後中央第三筆為 31 千元。",
          "三百千元位在最右端，是極端高值。"
        ],
        "answer": "中位數 31 千元較合適。",
        "why": "極端薪資會明顯增加總和與平均，但它仍在排序末端，不改變第三筆；因此中位數三十一更接近其餘四名員工，不代表平均計算錯誤。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "8、1、5 的中位數是1。",
        "why": "未排序就取書寫中央。",
        "fix": "排序1、5、8，中位數5。"
      },
      {
        "wrong": "6筆資料只取第3筆。",
        "why": "偶數筆有兩個中央位置。",
        "fix": "取第3與第4筆平均。"
      },
      {
        "wrong": "中位位置第5筆，所以中位數是5。",
        "why": "位置不是數值。",
        "fix": "讀取第5筆的資料值。"
      },
      {
        "wrong": "資料增加一筆但仍沿用原中央位置。",
        "why": "筆數改變。",
        "fix": "重新數筆數與定位。"
      }
    ],
    "selfCheck": [
      "資料排序了嗎？",
      "筆數 n 是否含重複資料？",
      "奇偶判斷正確嗎？",
      "位置與數值有分開嗎？",
      "偶數筆是否對中央兩值取平均？"
    ],
    "summary": [
      "中位數必須先排序。",
      "奇數筆取一個中央值。",
      "偶數筆取中央兩值平均。",
      "中位數通常較不受極端值影響。"
    ],
    "connections": {
      "previous": "平均數由所有資料總量決定；中位數改用排序位置。",
      "next": [
        "眾數會看出現次數最多的值。",
        "代表值比較時要依資料分布選平均數或中位數。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s010-v001",
        "u09-s010-v002",
        "u09-s010-v003",
        "u09-s010-v004",
        "u09-s010-v005",
        "u09-s010-v006",
        "u09-s010-v007",
        "u09-s010-v008",
        "u09-s010-v009",
        "u09-s010-v010",
        "u09-s010-v011",
        "u09-s010-v012"
      ],
      "constructedResponseIds": [
        "u09-s010-cr001",
        "u09-s010-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "明確區隔排序、位置與數值，並涵蓋奇偶筆、次數表及極端值。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需能計算平均數，並能依大小排列整數、小數與分數。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "例題包含亂序資料、偶數中央平均、累積位置與偏態薪資。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "9dcea6a22de4aac35f79f5f948c2c3716b7d7ba6be5e68bfa955af2665a063b5"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s010-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "將資料 3、8、5 排序後，中位數是多少？",
      "givenConditions": [
        "三筆資料。"
      ],
      "target": "計算奇數筆資料中位數",
      "choices": [
        "3",
        "5",
        "8",
        "16/3"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "先排序 3,5,8；三筆資料的第 2 個是 5。",
        "derivedAnswer": "5",
        "trustStoredAnswer": false
      },
      "explanation": "求中位數前必須排序。 中位數要先將三筆由小到大排成三、五、八，奇數筆資料只有一個正中央位置，因此第二筆五就是中位數，不需計算總和。",
      "steps": [
        "由小到大排列。",
        "取正中央位置。",
        "三筆資料取排序後第二個值，得到中位數五。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3 是最小值。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "排序為 3、5、8，中間值是 5。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8 是最大值。"
        },
        {
          "choice": "16/3",
          "truth": false,
          "reason": "16/3 是平均數。"
        }
      ],
      "misconceptionTarget": "未排序或改算平均 未排序就取原列中間的八，或誤用平均數公式。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "5。",
      "ambiguityAndBoundaryAudit": "資料無重複也不影響定義。",
      "difficultyReason": "基本中位數。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bade8146a8dfd7998c5e1cd1bba6d75b93f120d67dec38cf72014811f0e47930"
    },
    {
      "questionId": "u09-s010-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "資料 2、4、7、9 的中位數是多少？",
      "givenConditions": [
        "四筆資料。"
      ],
      "target": "計算偶數筆資料中位數",
      "choices": [
        "4",
        "7",
        "5.5",
        "6"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "(4+7)÷2=5.5。",
        "derivedAnswer": "5.5",
        "trustStoredAnswer": false
      },
      "explanation": "偶數筆中位數是排序後中間兩數的平均。 四筆已排序資料沒有單一中央值，中央位置是第二、三筆的四與七，兩者相加除二得五點五；兩端二與九不參與。",
      "steps": [
        "確認已排序。",
        "取第 2、3 個。",
        "求平均。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "4 只取左中間值。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7 只取右中間值。"
        },
        {
          "choice": "5.5",
          "truth": true,
          "reason": "中間兩數 4、7，平均為 5.5。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "6 是錯誤平均。"
        }
      ],
      "misconceptionTarget": "只取一個中央值 偶數筆只取第二筆或第三筆，沒有平均中央兩值。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "5.5 精確。",
      "ambiguityAndBoundaryAudit": "四個選項數值互異。",
      "difficultyReason": "基礎偶數位置。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a41a70ee25e81595d33cda0d964c1ed7d03deb50ea6ae6ff86eff17250ea46cd"
    },
    {
      "questionId": "u09-s010-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "7 筆已排序資料的中位數位在第幾個位置？",
      "givenConditions": [
        "資料已排序。"
      ],
      "target": "找奇數筆中位位置",
      "choices": [
        "第 3 個",
        "第 5 個",
        "第 7 個",
        "第 4 個"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "奇數 n=7，中位位置 (n+1)/2=4。",
        "derivedAnswer": "第 4 個",
        "trustStoredAnswer": false
      },
      "explanation": "位置公式只適用已排序資料。 七是奇數，中央位置左右各要保留三筆，所以位於第四個；也可用七加一再除二得到四，前提是資料已排序。",
      "steps": [
        "確認筆數 7。",
        "計算中央位置。",
        "確認排序後第四個值左右各有三筆，因此位置正確。"
      ],
      "optionAnalysis": [
        {
          "choice": "第 3 個",
          "truth": false,
          "reason": "第 3 個偏左。"
        },
        {
          "choice": "第 5 個",
          "truth": false,
          "reason": "第 5 個偏右。"
        },
        {
          "choice": "第 7 個",
          "truth": false,
          "reason": "第 7 個是最大值位置。"
        },
        {
          "choice": "第 4 個",
          "truth": true,
          "reason": "(7+1)÷2=4。"
        }
      ],
      "misconceptionTarget": "把筆數本身當位置 用七除二後無條件捨去成第三個位置。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案為序位。",
      "ambiguityAndBoundaryAudit": "未要求中位數數值。",
      "difficultyReason": "基本位置判斷。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4417fb1356705980df982fc7a574b402db3dd3944e1c0cf384f92309447b960b"
    },
    {
      "questionId": "u09-s010-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "資料 1、3、x、8、10 已由小到大排列，中位數為 6。x 是多少？",
      "givenConditions": [
        "需滿足 3≤x≤8，6 合法。"
      ],
      "target": "由中位數與排序位置求缺值",
      "choices": [
        "6",
        "3",
        "5",
        "8"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "五筆排序資料的第 3 個為中位數，所以 x=6。",
        "derivedAnswer": "6",
        "trustStoredAnswer": false
      },
      "explanation": "已排序條件使中央位置直接決定 x。 五筆已依序排列，第三筆未知數正是唯一中央位置；既然中位數指定為六，未知數必為六，且三小於等於六小於等於八符合排序。",
      "steps": [
        "找第 3 個位置。",
        "令 x 等於中位數 6。",
        "將第三筆直接等同中位數六，再檢查排序限制。"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": true,
          "reason": "五筆資料中位數是第 3 個，即 x=6。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "3 是第二個資料。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "5 並不符合中位數 6。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8 是第四個資料。"
        }
      ],
      "misconceptionTarget": "把相鄰值平均 把五筆資料平均設為六，誤列總和方程式。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "6。",
      "ambiguityAndBoundaryAudit": "排序條件與中位數唯一決定。",
      "difficultyReason": "標準位置反推。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "efa18af8fe31d5880666ebe7a2c0569d29f1e9c2a9006a32a51b91581dbd75f0"
    },
    {
      "questionId": "u09-s010-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "資料 4、6、8、10、12 中加入 100，新中位數是多少？",
      "givenConditions": [
        "六筆資料。"
      ],
      "target": "更新新增極端值後的中位數",
      "choices": [
        "8",
        "9",
        "10",
        "23.3"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "(8+10)÷2=9。",
        "derivedAnswer": "9",
        "trustStoredAnswer": false
      },
      "explanation": "加入極大值會改變筆數與中央位置，但中位數不會被拉到 100 附近。 加入一百後排序為四、六、八、十、十二、一百，共六筆；中央第三與第四值為八、十，平均得九，極端值本身不直接進入計算。",
      "steps": [
        "加入並排序。",
        "取第 3、4 個。",
        "求平均。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": false,
          "reason": "8 只取左中央。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "排序後 4、6、8、10、12、100，中間兩數 8、10，平均 9。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "10 只取右中央。"
        },
        {
          "choice": "23.3",
          "truth": false,
          "reason": "23.3 近似新平均。"
        }
      ],
      "misconceptionTarget": "把中位數當平均受極端值大幅拉動 仍取原第三筆八，沒有因筆數由奇數變偶數而重新定位。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "9 精確。",
      "ambiguityAndBoundaryAudit": "100 位於最右端。",
      "difficultyReason": "需更新位置，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2862c8f12ed28179073e0199845e64363dc1acddfc46662c37e491702c3d2f1c"
    },
    {
      "questionId": "u09-s010-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "資料 2、5、7、9、x 已排序且中位數為 7。下列哪個 x 可能？",
      "givenConditions": [
        "資料列明示已排序。"
      ],
      "target": "結合中位數與排序限制判斷未知值",
      "choices": [
        "6",
        "7",
        "12",
        "8"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "已排序且 x 在最後，所以 x≥9；選項只有 12。",
        "derivedAnswer": "12",
        "trustStoredAnswer": false
      },
      "explanation": "中位數 7 由第 3 個決定，但排序條件仍限制 x。 題目已聲明資料排序且未知數在九之後，所以未知數至少為九；四個選項只有十二符合，中央第三筆七仍不受末項數值影響。",
      "steps": [
        "辨認 x 的位置。",
        "套用 x≥9。",
        "由末項條件列未知數大於等於九，篩出十二。"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": false,
          "reason": "6 會破壞已排序位置。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7 小於前一個 9，破壞排序。"
        },
        {
          "choice": "12",
          "truth": true,
          "reason": "若 x 是最後一個，需 x≥9；12 合法。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8 也小於 9。"
        }
      ],
      "misconceptionTarget": "只看中位數而忽略排序 只看中位數七便選七，忽略未知數位於排序末端。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "12。",
      "ambiguityAndBoundaryAudit": "多個大於等於 9 都可能，但選項中只有一個。",
      "difficultyReason": "標準條件判斷。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0f60acc78e3ac728344c1e3b09d546ef175a90e922c2d25731daa8ad1056e207"
    },
    {
      "questionId": "u09-s010-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "7 筆資料加入一筆新資料後成為 8 筆。原中位數是第 4 個值。新中位數如何求？",
      "givenConditions": [
        "新資料可能落在任何位置。"
      ],
      "target": "判斷新增資料後的中位規則",
      "choices": [
        "仍取原第 4 個",
        "取第 5 個值",
        "取最大與最小的平均",
        "排序後第 4 與第 5 個值的平均"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "重新排序 8 筆後，中位數=(第4值+第5值)/2。",
        "derivedAnswer": "排序後第 4 與第 5 個值的平均",
        "trustStoredAnswer": false
      },
      "explanation": "新增資料後必須重新排序，不能沿用原中央值。 加入新資料後必須把八筆全部重新排序，偶數筆的中央落在第四、五位置，取兩值平均；新資料可能插入任何位置，不能沿用原第四值。",
      "steps": [
        "更新筆數。",
        "重新排序。",
        "依偶數規則。"
      ],
      "optionAnalysis": [
        {
          "choice": "仍取原第 4 個",
          "truth": false,
          "reason": "加入資料可能改變排序與位置。"
        },
        {
          "choice": "取第 5 個值",
          "truth": false,
          "reason": "只取第 5 個不完整。"
        },
        {
          "choice": "取最大與最小的平均",
          "truth": false,
          "reason": "最大最小平均不是中位數。"
        },
        {
          "choice": "排序後第 4 與第 5 個值的平均",
          "truth": true,
          "reason": "8 筆偶數資料取中央兩值平均。"
        }
      ],
      "misconceptionTarget": "固定沿用原中位數 資料增加後仍沿用原中位位置，沒有重新排序與計數。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "公式表述。",
      "ambiguityAndBoundaryAudit": "不需知道具體新值即可確定方法。",
      "difficultyReason": "概念性進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "885188ee21aad24b8170e392e348c2db6381bb525836ac1f9767d5a70bef7aae"
    },
    {
      "questionId": "u09-s010-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "已排序資料 1、4、6、x、12、15 的中位數為 8。x 是多少？",
      "givenConditions": [
        "x 介於 6 與 12。"
      ],
      "target": "由偶數中位數建立方程求缺值",
      "choices": [
        "10",
        "8",
        "6",
        "12"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "(6+x)/2=8，故 6+x=16，x=10；且 6≤10≤12。",
        "derivedAnswer": "10",
        "trustStoredAnswer": false
      },
      "explanation": "偶數筆中位數條件形成一元方程。 六筆資料的中央是第三項六與第四項未知數，平均為八可列六加未知數等於十六，解得十；十也落在六與十二之間，排序成立。",
      "steps": [
        "找中間兩數 6、x。",
        "建立平均方程。",
        "檢查排序。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": true,
          "reason": "中位數=(6+x)/2=8，所以 x=10。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8 是中位數，不是 x。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "x=6 時中位數 6。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "x=12 時中位數 9。"
        }
      ],
      "misconceptionTarget": "把中位數直接填入未知 把未知數本身直接設成中位數八，忽略偶數筆有兩個中央值。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "10。",
      "ambiguityAndBoundaryAudit": "方程解符合排序，唯一。",
      "difficultyReason": "需代數與邊界檢查，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a2e4487b999b0605fb922c54baeb38abd12e23cbe10ff018ece483aa50235d99"
    },
    {
      "questionId": "u09-s010-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "資料 2、4、7、9、11 中，若把 11 改成 100，中位數如何？",
      "givenConditions": [
        "五筆資料。"
      ],
      "target": "分析極端值對中位數的影響",
      "choices": [
        "變成 25",
        "仍為 7",
        "變成 9",
        "變成 100"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "更改最大值但仍位於最右端，排序後中央位置不變。",
        "derivedAnswer": "仍為 7",
        "trustStoredAnswer": false
      },
      "explanation": "中位數對單一極端值通常較不敏感。 把最大值十一改為更大的百後，排序中央第三筆仍是七，所以中位數不變；極端值會大幅影響平均數，卻未跨過中央位置。",
      "steps": [
        "重新排列確認。",
        "讀第 3 個。",
        "重排為二、四、七、九、一百，讀取第三筆仍為七。"
      ],
      "optionAnalysis": [
        {
          "choice": "變成 25",
          "truth": false,
          "reason": "25 是平均相關錯算。"
        },
        {
          "choice": "仍為 7",
          "truth": true,
          "reason": "排序中央第 3 個仍是 7。"
        },
        {
          "choice": "變成 9",
          "truth": false,
          "reason": "9 是第 4 個。"
        },
        {
          "choice": "變成 100",
          "truth": false,
          "reason": "100 是最大值。"
        }
      ],
      "misconceptionTarget": "認為任何數值變大都使中位數變大 看到最大值變大就認為所有集中量數都一定增加。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "7。",
      "ambiguityAndBoundaryAudit": "更改後仍保持 100 最大。",
      "difficultyReason": "概念與穩健性，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6de457668daac579e9c46ce5910fd77a7f2f3814a09ec76899a85cb285b72b9c"
    },
    {
      "questionId": "u09-s010-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "急診等候時間為 12、15、18、20、95 分鐘。院方要描述『典型病人』等候時間，平均為 32 分、中位數為 18 分。哪個較適合？",
      "givenConditions": [
        "時間單位分鐘。"
      ],
      "target": "在有極端值情境選擇代表值",
      "choices": [
        "平均 32 分，因平均一定代表多數",
        "95 分，因是最嚴重個案",
        "中位數 18 分，因 95 分的極端值拉高平均",
        "兩者都不能計算"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "排序已如題列；中位數第 3 個為 18，平均 160/5=32；比較分布後選中位數。",
        "derivedAnswer": "中位數 18 分，因 95 分的極端值拉高平均",
        "trustStoredAnswer": false
      },
      "explanation": "代表值選擇要考慮極端值與溝通目的。 九十五分鐘遠高於其餘四筆，使總和與平均被拉升到三十二；中位數只取排序中央十八，較能表示這個偏斜小樣本中的典型等候時間。",
      "steps": [
        "計算或核對兩代表值。",
        "辨識 95 為極端值。",
        "依『典型』目的選中位數。"
      ],
      "optionAnalysis": [
        {
          "choice": "平均 32 分，因平均一定代表多數",
          "truth": false,
          "reason": "平均受 95 大幅影響，不等於多數。"
        },
        {
          "choice": "95 分，因是最嚴重個案",
          "truth": false,
          "reason": "最大值不代表典型。"
        },
        {
          "choice": "中位數 18 分，因 95 分的極端值拉高平均",
          "truth": true,
          "reason": "中位數較能反映多數集中在 12–20 分鐘。"
        },
        {
          "choice": "兩者都不能計算",
          "truth": false,
          "reason": "兩者都可計算。"
        }
      ],
      "misconceptionTarget": "一律認為平均最好 認為平均數一定最具代表性，忽略九十五分鐘極端值。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "平均與中位數皆精確。",
      "ambiguityAndBoundaryAudit": "只描述這五名病人。",
      "difficultyReason": "需結合計算與解讀。",
      "literacyNecessityReason": "急診管理的『典型等候』會影響資訊揭露，中位數選擇由極端個案決定。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2dc987b3c7bc1253acc823f1b7a5aa4ca6696b843bd2b85fd7ea29a154892247"
    },
    {
      "questionId": "u09-s010-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "住宅成交價 5 筆為 800、820、850、880、3000 萬元。廣告稱『本區典型房價為平均 1270 萬元』。哪個修正較合理？",
      "givenConditions": [
        "金額單位萬元。"
      ],
      "target": "審核房價代表值與樣本說明",
      "choices": [
        "保留平均，因 1270 最大",
        "改用最小值 800 萬元",
        "改稱每戶都約 1270 萬元",
        "改用中位數 850 萬元並說明樣本僅 5 筆"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "排序後中位數 850；平均=(800+820+850+880+3000)/5=1270，但受豪宅影響。",
        "derivedAnswer": "改用中位數 850 萬元並說明樣本僅 5 筆",
        "trustStoredAnswer": false
      },
      "explanation": "合理報導需選適當代表值並交代樣本範圍。 三千萬元豪宅使平均升至一千二百七十萬元，但排序中央仍是八百五十萬元；以中位數描述典型值較合理，且五筆樣本限制也須揭露。",
      "steps": [
        "核算平均與中位數。",
        "辨識極端值。",
        "限制推論。"
      ],
      "optionAnalysis": [
        {
          "choice": "保留平均，因 1270 最大",
          "truth": false,
          "reason": "平均不是最大值概念。"
        },
        {
          "choice": "改用最小值 800 萬元",
          "truth": false,
          "reason": "最小值也不代表典型。"
        },
        {
          "choice": "改稱每戶都約 1270 萬元",
          "truth": false,
          "reason": "個別成交價差距很大。"
        },
        {
          "choice": "改用中位數 850 萬元並說明樣本僅 5 筆",
          "truth": true,
          "reason": "中位數不受 3000 萬元單筆豪宅大幅拉高，且應揭露樣本小。"
        }
      ],
      "misconceptionTarget": "用高平均製造普遍高價印象 把受極端豪宅拉高的平均當成每戶都接近的典型價格。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 140,
      "unitAndRoundingCheck": "兩代表值精確。",
      "ambiguityAndBoundaryAudit": "不外推整個城市。",
      "difficultyReason": "需兼顧代表值與資料揭露。",
      "literacyNecessityReason": "房價廣告可能利用平均誤導，極端交易與小樣本都是必要判斷資訊。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e87890c5aad255a30e86301ea6fdc292f131a2037bb8749798708e03f4d8ef8e"
    },
    {
      "questionId": "u09-s010-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "比賽裁判 7 個分數排序為 6、7、7、8、8、9、10，規則刪除最高與最低後取中位數。結果是多少？",
      "givenConditions": [
        "分數無單位。"
      ],
      "target": "依評分規則處理後求中位數",
      "choices": [
        "8",
        "7",
        "8.2",
        "9"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "刪除後重新確認 5 筆，中間值 8。",
        "derivedAnswer": "8",
        "trustStoredAnswer": false
      },
      "explanation": "程序規則先改變資料集，再求中位數。 刪除最低六與最高十後剩七、七、八、八、九，共五筆；重新定位中央第三筆為八，不能沿用原七筆的位置編號。",
      "steps": [
        "刪除兩端。",
        "重新列出剩餘資料。",
        "取中央值。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": true,
          "reason": "刪除 6、10 後為 7、7、8、8、9，中位數第 3 個是 8。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7 是偏左值。"
        },
        {
          "choice": "8.2",
          "truth": false,
          "reason": "8.2 是平均數。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9 是最大剩餘值。"
        }
      ],
      "misconceptionTarget": "先求原中位數或改算平均 刪除兩端後未重新計數，或錯把剩餘五筆求平均數。",
      "prerequisiteCheck": {
        "skillIds": [
          "mean-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "8。",
      "ambiguityAndBoundaryAudit": "刪除規則明確。",
      "difficultyReason": "多步規則題，屬素養。",
      "literacyNecessityReason": "競賽評分制度指定先刪極端值，程序本身決定資料集與答案。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2009fcd6052bfd3591b1bbe5bc8c1fb2eaae856c1a8e502bf6a53b843cbf464c"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s010-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "資料為12、7、15、9、9、20、11。請由小到大排序，求中位數；若再加入數值100，求新中位數並比較兩次中位數。",
      "givenConditions": [],
      "target": "處理奇數筆與加入資料後的偶數筆中位數。",
      "requiredWork": [
        "完整排序原7筆。",
        "原中位數取第4筆。",
        "加入100後重新確認8筆中央兩值。"
      ],
      "standardSolution": [
        "排序：7、9、9、11、12、15、20。",
        "7筆中位數為第4筆11。",
        "加入100後：7、9、9、11、12、15、20、100。",
        "8筆中位數=(第4筆11+第5筆12)÷2=11.5。",
        "中位數增加0.5。",
        "新增的一百雖遠大於原資料，但它排在最右端；中位數由原本第四筆十一改為八筆中的第四、五筆平均，所以只上升零點五，而不是被一百直接拉高。"
      ],
      "alternativeMethod": "因100大於原所有值，可直接放在末端；原排序不必全部重做。",
      "reasoningSteps": [
        "排序原資料。",
        "用(7+1)/2=4定位。",
        "加入100並更新筆數為8。",
        "取第4與第5筆平均。",
        "比較新舊中位數。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "排序正確、原中位11、新中位11.5及增加0.5全部正確。"
        },
        {
          "score": 2,
          "criteria": "兩個中位數正確但排序或比較差值漏寫；或僅一個位置判斷小錯。"
        },
        {
          "score": 1,
          "criteria": "能正確排序原資料並找到11，或知道8筆需取中央兩值平均。"
        },
        {
          "score": 0,
          "criteria": "未排序，或把100與原平均混用求中位數。"
        }
      ],
      "partialCreditRules": [
        "排序中相同的9必須出現兩次。",
        "只說新中位數變大而無差值，可得部分分。"
      ],
      "followThroughPolicy": "原排序一處錯誤若後續中位位置方法正確，可依一致資料給方法分。",
      "unitAndNotationRules": "本題數值無特定單位；中位數可為小數。",
      "answerOnlyPolicy": "只寫11與11.5，無排序與方法，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "原第4=11；加入最大值後第4、第5為11、12，新中位11.5，差0.5。",
        "boundaryAndAmbiguityAudit": "100明確為最大值，不會有插入位置歧義。",
        "rubricAlignmentEvidence": "原排序、奇偶位置與變動比較三部分皆納入。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "df0333b7ae612b2db19ee1e258118760c2b30413863ff1b23b2691a1e90cfc0e",
      "commonErrors": [
        "未先排序原資料便取題目列出的第四項九，錯認原中位數。",
        "加入一百後仍取單一第四筆十一，忘記八筆資料須平均第四與第五筆。"
      ]
    },
    {
      "questionId": "u09-s010-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "median-basic",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "某組已排序資料共有10筆，其中前8筆為3、5、7、8、10、12、14、16，後兩筆為a、b，且16≤a≤b。已知中位數為9。判斷條件是否可能成立；若不可能，指出矛盾原因。接著把題目中的中位數改成11，說明a、b可取哪些範圍而不影響中位數。",
      "givenConditions": [],
      "target": "由偶數筆中央位置檢查條件一致性，辨認尾端資料不影響中央值。",
      "requiredWork": [
        "10筆中位數由第5與第6筆決定。",
        "用已知前8筆讀出中央兩值。",
        "分別判斷中位9與11的可能性。"
      ],
      "standardSolution": [
        "10筆中位數=(第5筆+第6筆)÷2。因a、b位於16之後，第5與第6筆固定為10與12，所以中位數固定為(10+12)÷2=11。",
        "因此中位數為9不可能，矛盾在中央位置已被前8筆固定。",
        "若中位數改為11，只要維持16≤a≤b，a、b可為任何符合此排序條件的實數，中位數仍為11。"
      ],
      "alternativeMethod": "可指出最後兩筆只占第9、第10位置，無法改動第5、第6位置。",
      "reasoningSteps": [
        "確認總筆數10為偶數。",
        "定位中央第5、第6筆。",
        "由排序讀得10與12。",
        "計算固定中位11。",
        "分析尾端a、b的可行範圍。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確判定9不可能、指出中央10與12固定，並說明改為11時任意16≤a≤b皆可。"
        },
        {
          "score": 2,
          "criteria": "判定與固定中位11正確，但a、b範圍說明不完整。"
        },
        {
          "score": 1,
          "criteria": "知道應看第5、第6筆，或正確算出(10+12)/2=11。"
        },
        {
          "score": 0,
          "criteria": "嘗試用a、b调整中位數，未辨認其位於第9、第10筆。"
        }
      ],
      "partialCreditRules": [
        "若只說a、b≥16而漏a≤b，因題目已有排序條件可視為基本正確但表達不完整。",
        "不可要求a、b等於11，這會破壞已給順序。"
      ],
      "followThroughPolicy": "本題無早期算術容錯核心；若中央位置選錯但後續一致，最高1分。",
      "unitAndNotationRules": "a、b為無單位實數；範圍用不等式或文字皆可。",
      "answerOnlyPolicy": "只寫「不可能；11」無矛盾說明，最高1分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "第5=10、第6=12，故中位恒11；尾兩值只需保持≥16且有序。",
        "boundaryAndAmbiguityAudit": "前8筆已排序且第8筆16，條件16≤a≤b保證中央位置不變。",
        "rubricAlignmentEvidence": "滿分重點是位置不變性，而非代數猜值。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "c5f9ef2c23fd165afe968a36ef32d06e9f2b690f6278aa532d9c8f9ba6a295f4",
      "commonErrors": [
        "看到未知數甲乙便試圖由中位數九解方程，忽略它們位在第九、十位置。",
        "把偶數十筆的中位數誤取第五筆十，沒有平均第五、六筆十與十二。"
      ]
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s010-v001-semantic-r1",
      "questionId": "u09-s010-v001",
      "unitId": "u09",
      "skillId": "median-basic",
      "independentRecalculation": "先排序 3,5,8；三筆資料的第 2 個是 5。",
      "correctChoiceCheck": "獨立計算得到「5」，位於索引 1。",
      "distractorAudit": [
        "3 是最小值。",
        "8 是最大值。",
        "16/3 是平均數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「5」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「中位數與位置」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "資料無重複也不影響定義。",
      "difficultyEvidence": "基本中位數。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7d880f3969f498b3adba0845df2ccf6a29f590faa3386e709d7b2e49b9b69577"
    },
    {
      "reviewId": "u09-s010-v002-semantic-r1",
      "questionId": "u09-s010-v002",
      "unitId": "u09",
      "skillId": "median-basic",
      "independentRecalculation": "(4+7)÷2=5.5。",
      "correctChoiceCheck": "獨立計算得到「5.5」，位於索引 2。",
      "distractorAudit": [
        "4 只取左中間值。",
        "7 只取右中間值。",
        "6 是錯誤平均。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「5.5」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「中位數與位置」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "四個選項數值互異。",
      "difficultyEvidence": "基礎偶數位置。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "f4037cb74b93a3f6fda1601cbcb9c987808f485fafef69e01f354fafb5bd05c9"
    },
    {
      "reviewId": "u09-s010-v003-semantic-r1",
      "questionId": "u09-s010-v003",
      "unitId": "u09",
      "skillId": "median-basic",
      "independentRecalculation": "奇數 n=7，中位位置 (n+1)/2=4。",
      "correctChoiceCheck": "獨立計算得到「第 4 個」，位於索引 3。",
      "distractorAudit": [
        "第 3 個偏左。",
        "第 5 個偏右。",
        "第 7 個是最大值位置。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「第 4 個」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「中位數與位置」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "未要求中位數數值。",
      "difficultyEvidence": "基本位置判斷。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8edbc98778c3ee346efcf88ee40f854b73efc130df71b7766c783b2ebab9bb4d"
    },
    {
      "reviewId": "u09-s010-v004-semantic-r1",
      "questionId": "u09-s010-v004",
      "unitId": "u09",
      "skillId": "median-basic",
      "independentRecalculation": "五筆排序資料的第 3 個為中位數，所以 x=6。",
      "correctChoiceCheck": "獨立計算得到「6」，位於索引 0。",
      "distractorAudit": [
        "3 是第二個資料。",
        "5 並不符合中位數 6。",
        "8 是第四個資料。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「6」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「中位數與位置」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "排序條件與中位數唯一決定。",
      "difficultyEvidence": "標準位置反推。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9fa582eafc383d7dacf4f50f7de4f062c9f8c8eea69e918a0cd2a1646d74fd21"
    },
    {
      "reviewId": "u09-s010-v005-semantic-r1",
      "questionId": "u09-s010-v005",
      "unitId": "u09",
      "skillId": "median-basic",
      "independentRecalculation": "(8+10)÷2=9。",
      "correctChoiceCheck": "獨立計算得到「9」，位於索引 1。",
      "distractorAudit": [
        "8 只取左中央。",
        "10 只取右中央。",
        "23.3 近似新平均。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「9」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「中位數與位置」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "100 位於最右端。",
      "difficultyEvidence": "需更新位置，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "40a7e90784078b02d3dcc592947feed1402bc794ca72ddf7153ce7d13c813200"
    },
    {
      "reviewId": "u09-s010-v006-semantic-r1",
      "questionId": "u09-s010-v006",
      "unitId": "u09",
      "skillId": "median-basic",
      "independentRecalculation": "已排序且 x 在最後，所以 x≥9；選項只有 12。",
      "correctChoiceCheck": "獨立計算得到「12」，位於索引 2。",
      "distractorAudit": [
        "6 會破壞已排序位置。",
        "7 小於前一個 9，破壞排序。",
        "8 也小於 9。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「12」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「中位數與位置」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "多個大於等於 9 都可能，但選項中只有一個。",
      "difficultyEvidence": "標準條件判斷。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "761723ff28a898442df8f0fa6102606a85eac689327bcf33b09641f19849094c"
    },
    {
      "reviewId": "u09-s010-v007-semantic-r1",
      "questionId": "u09-s010-v007",
      "unitId": "u09",
      "skillId": "median-basic",
      "independentRecalculation": "重新排序 8 筆後，中位數=(第4值+第5值)/2。",
      "correctChoiceCheck": "獨立計算得到「排序後第 4 與第 5 個值的平均」，位於索引 3。",
      "distractorAudit": [
        "加入資料可能改變排序與位置。",
        "只取第 5 個不完整。",
        "最大最小平均不是中位數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「排序後第 4 與第 5 個值的平均」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「中位數與位置」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不需知道具體新值即可確定方法。",
      "difficultyEvidence": "概念性進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "39d24cdf95e0a1c792215a29256bb13c4408be23899aeabb8475c0dd1c074bcf"
    },
    {
      "reviewId": "u09-s010-v008-semantic-r1",
      "questionId": "u09-s010-v008",
      "unitId": "u09",
      "skillId": "median-basic",
      "independentRecalculation": "(6+x)/2=8，故 6+x=16，x=10；且 6≤10≤12。",
      "correctChoiceCheck": "獨立計算得到「10」，位於索引 0。",
      "distractorAudit": [
        "8 是中位數，不是 x。",
        "x=6 時中位數 6。",
        "x=12 時中位數 9。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「10」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「中位數與位置」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "方程解符合排序，唯一。",
      "difficultyEvidence": "需代數與邊界檢查，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d5ad99c43d5c8da9a724637121bce5a301a20b67066fb8f7f415d19f08bcca3c"
    },
    {
      "reviewId": "u09-s010-v009-semantic-r1",
      "questionId": "u09-s010-v009",
      "unitId": "u09",
      "skillId": "median-basic",
      "independentRecalculation": "更改最大值但仍位於最右端，排序後中央位置不變。",
      "correctChoiceCheck": "獨立計算得到「仍為 7」，位於索引 1。",
      "distractorAudit": [
        "25 是平均相關錯算。",
        "9 是第 4 個。",
        "100 是最大值。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「仍為 7」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「中位數與位置」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "更改後仍保持 100 最大。",
      "difficultyEvidence": "概念與穩健性，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "e6eb2bac0f1080857544005834c5cfacfc8a621304b477b1dcfa2c5c36d1a6bd"
    },
    {
      "reviewId": "u09-s010-v010-semantic-r1",
      "questionId": "u09-s010-v010",
      "unitId": "u09",
      "skillId": "median-basic",
      "independentRecalculation": "排序已如題列；中位數第 3 個為 18，平均 160/5=32；比較分布後選中位數。",
      "correctChoiceCheck": "獨立計算得到「中位數 18 分，因 95 分的極端值拉高平均」，位於索引 2。",
      "distractorAudit": [
        "平均受 95 大幅影響，不等於多數。",
        "最大值不代表典型。",
        "兩者都可計算。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「中位數 18 分，因 95 分的極端值拉高平均」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「中位數與位置」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只描述這五名病人。",
      "difficultyEvidence": "需結合計算與解讀。",
      "literacyEvidence": "急診管理的『典型等候』會影響資訊揭露，中位數選擇由極端個案決定。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6ebf154bcbd822e92d4f1543ae188280f91b761d85fc23a935558a28755d60e6"
    },
    {
      "reviewId": "u09-s010-v011-semantic-r1",
      "questionId": "u09-s010-v011",
      "unitId": "u09",
      "skillId": "median-basic",
      "independentRecalculation": "排序後中位數 850；平均=(800+820+850+880+3000)/5=1270，但受豪宅影響。",
      "correctChoiceCheck": "獨立計算得到「改用中位數 850 萬元並說明樣本僅 5 筆」，位於索引 3。",
      "distractorAudit": [
        "平均不是最大值概念。",
        "最小值也不代表典型。",
        "個別成交價差距很大。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「改用中位數 850 萬元並說明樣本僅 5 筆」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「中位數與位置」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不外推整個城市。",
      "difficultyEvidence": "需兼顧代表值與資料揭露。",
      "literacyEvidence": "房價廣告可能利用平均誤導，極端交易與小樣本都是必要判斷資訊。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "986424813afd6ff7b34469e9fa23ab9e1310a213dcfa3b7d410cf7f9e76d12e2"
    },
    {
      "reviewId": "u09-s010-v012-semantic-r1",
      "questionId": "u09-s010-v012",
      "unitId": "u09",
      "skillId": "median-basic",
      "independentRecalculation": "刪除後重新確認 5 筆，中間值 8。",
      "correctChoiceCheck": "獨立計算得到「8」，位於索引 0。",
      "distractorAudit": [
        "7 是偏左值。",
        "8.2 是平均數。",
        "9 是最大剩餘值。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「8」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「中位數與位置」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "刪除規則明確。",
      "difficultyEvidence": "多步規則題，屬素養。",
      "literacyEvidence": "競賽評分制度指定先刪極端值，程序本身決定資料集與答案。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "1ac633066bdaab758c698a70d00d259d40ce9b0a5b8c40a87b711220559de66b"
    }
  ],
  "drawingSpecs": []
};
