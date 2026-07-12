// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s011-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-summary",
    "skillId": "mode-range-basic",
    "lockedTitle": "眾數與全距",
    "title": "眾數與全距：看最常出現與整體跨度",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "median-basic"
      ],
      "explanation": "需能排序資料並辨認中位數的位置，且會做最大值減最小值。"
    },
    "learningGoals": [
      "找出一組資料的眾數。",
      "辨認無眾數、單一眾數與多眾數。",
      "計算全距。",
      "說明眾數與全距各自描述的面向。",
      "判斷資料變動對眾數與全距的影響。"
    ],
    "vocabulary": [
      {
        "term": "眾數",
        "meaning": "一組資料中出現次數最多的資料值。"
      },
      {
        "term": "多眾數",
        "meaning": "有兩個以上資料值並列最高次數。"
      },
      {
        "term": "無眾數",
        "meaning": "所有資料值出現次數相同，沒有誰特別最多。"
      },
      {
        "term": "全距",
        "meaning": "最大值減最小值，表示資料總跨度。"
      },
      {
        "term": "離散程度",
        "meaning": "資料彼此分散的程度；全距是最簡單的描述之一。"
      }
    ],
    "notation": [
      {
        "symbol": "眾數",
        "meaning": "以資料原單位表示，不是出現次數本身。"
      },
      {
        "symbol": "R",
        "meaning": "全距，R=最大值−最小值。"
      },
      {
        "symbol": "f",
        "meaning": "某資料值的次數。"
      }
    ],
    "conceptDevelopment": [
      "眾數回答「哪個值最常見」，所以要比較次數；答案是資料值，不是最高次數。",
      "可能有一個、兩個或更多眾數；若每個值次數相同，通常說沒有眾數。",
      "全距只由最大值與最小值決定，中間資料怎麼變通常不影響全距。",
      "極端值會直接擴大全距，因此全距容易受離群值影響。",
      "眾數適用於類別資料，例如最受歡迎口味；平均數則不一定能用於類別。"
    ],
    "definitions": [
      {
        "name": "眾數",
        "statement": "出現次數達到全組最高的資料值；並列者全部列出。"
      },
      {
        "name": "全距",
        "statement": "一組數值資料的最大值減最小值。"
      }
    ],
    "formulas": [
      {
        "formula": "全距＝最大值－最小值",
        "conditions": [
          "資料為可比較大小的數值",
          "至少有一筆資料"
        ]
      },
      {
        "formula": "眾數＝次數最高所對應的資料值",
        "conditions": [
          "需比較所有資料值的次數",
          "並列最高時全部列出"
        ]
      }
    ],
    "invalidUseCases": [
      "把最高次數本身當眾數。",
      "只因某值重複就認定是眾數，未檢查是否有其他值更多。",
      "所有值各一次時挑最大值當眾數。",
      "全距用最大值加最小值。",
      "對顏色、口味等類別資料計算全距。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "整理各資料值及其出現次數。"
      },
      {
        "step": 2,
        "action": "找最高次數並列出所有並列資料值。"
      },
      {
        "step": 3,
        "action": "判斷是無眾數、單一眾數或多眾數。"
      },
      {
        "step": 4,
        "action": "找最大值與最小值。"
      },
      {
        "step": 5,
        "action": "用最大值減最小值求全距，並解釋資料跨度。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "鞋號 23、24、24、24、25、25。",
        "solution": [
          "24 出現3次，25出現2次，其餘1次。"
        ],
        "answer": "眾數24。"
      },
      {
        "id": "L2",
        "prompt": "資料 2、2、5、5、8。",
        "solution": [
          "2與5都出現2次，並列最高。"
        ],
        "answer": "眾數為2與5。"
      },
      {
        "id": "L3",
        "prompt": "資料 4、7、9、13、13。",
        "solution": [
          "最大13，最小4。",
          "13-4=9。"
        ],
        "answer": "全距9。"
      },
      {
        "id": "L4",
        "prompt": "資料 10、11、11、12、50。",
        "solution": [
          "眾數11。",
          "全距=50-10=40。",
          "50 使全距很大。"
        ],
        "answer": "最常見為11，但跨度40顯示有極端值。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "24出現3次，所以眾數是3。",
        "why": "混淆資料值與次數。",
        "fix": "眾數是24。"
      },
      {
        "wrong": "2、2、5、5只有眾數2。",
        "why": "漏掉並列最高。",
        "fix": "2與5都是眾數。"
      },
      {
        "wrong": "1、3、5的眾數是5。",
        "why": "所有值都只出現一次。",
        "fix": "此組沒有眾數。"
      },
      {
        "wrong": "全距=最大值+最小值。",
        "why": "不理解跨度。",
        "fix": "最大值−最小值。"
      }
    ],
    "selfCheck": [
      "我找的是資料值還是次數？",
      "是否有並列最高？",
      "所有值次數相同嗎？",
      "最大值與最小值辨認正確嗎？",
      "全距是否用減法且保留單位？"
    ],
    "summary": [
      "眾數是出現最頻繁的資料值。",
      "眾數可能沒有或不只一個。",
      "全距＝最大值−最小值。",
      "全距受極端值影響大。"
    ],
    "connections": {
      "previous": "中位數看中央位置；眾數改看出現頻率。",
      "next": [
        "加權平均會讓不同資料對結果有不同影響。",
        "兩組資料比較會同時考慮代表值與全距。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s011-v001",
        "u09-s011-v002",
        "u09-s011-v003",
        "u09-s011-v004",
        "u09-s011-v005",
        "u09-s011-v006",
        "u09-s011-v007",
        "u09-s011-v008",
        "u09-s011-v009",
        "u09-s011-v010",
        "u09-s011-v011",
        "u09-s011-v012"
      ],
      "constructedResponseIds": [
        "u09-s011-cr001",
        "u09-s011-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "完整處理無眾數、多眾數、類別資料與全距的極端值敏感性。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需能排序資料並辨認中位數的位置，且會做最大值減最小值。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "例題涵蓋單眾數、雙眾數、全距及眾數與跨度同時判讀。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "20bf2d63e4e08cf20541ba6bf7857fd32e5785e63cac14a2a3b777b61cff21c8"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s011-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "資料 2、3、3、5、7 的眾數是多少？",
      "givenConditions": [
        "資料值可重複。"
      ],
      "target": "求單一眾數",
      "choices": [
        "2",
        "5",
        "3",
        "7"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "計算各值出現次數，3 最多。",
        "derivedAnswer": "3",
        "trustStoredAnswer": false
      },
      "explanation": "眾數是出現次數最多的資料值。",
      "steps": [
        "統計每個值的次數。",
        "找最高次數。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "2 只出現一次。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "5 只出現一次。"
        },
        {
          "choice": "3",
          "truth": true,
          "reason": "3 出現 2 次，其他各 1 次。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7 只出現一次。"
        }
      ],
      "misconceptionTarget": "把最大值當眾數",
      "prerequisiteCheck": {
        "skillIds": [
          "median-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "3。",
      "ambiguityAndBoundaryAudit": "最高次數唯一。",
      "difficultyReason": "基本眾數。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "77346876e1225b7caa9678b1a2e538f0743ab90553d79847955e455b82ec1344"
    },
    {
      "questionId": "u09-s011-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "資料 4、6、9、11 的全距是多少？",
      "givenConditions": [
        "四筆同單位。"
      ],
      "target": "計算全距",
      "choices": [
        "15",
        "11",
        "4",
        "7"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "全距＝最大值－最小值＝11-4=7。",
        "derivedAnswer": "7",
        "trustStoredAnswer": false
      },
      "explanation": "全距只看兩端值。",
      "steps": [
        "找最大值 11。",
        "找最小值 4。",
        "相減。"
      ],
      "optionAnalysis": [
        {
          "choice": "15",
          "truth": false,
          "reason": "15 是最大最小相加。"
        },
        {
          "choice": "11",
          "truth": false,
          "reason": "11 是最大值。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "4 是最小值。"
        },
        {
          "choice": "7",
          "truth": true,
          "reason": "11-4=7。"
        }
      ],
      "misconceptionTarget": "把最大值或總和當全距",
      "prerequisiteCheck": {
        "skillIds": [
          "median-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "7。",
      "ambiguityAndBoundaryAudit": "最大最小唯一。",
      "difficultyReason": "基本全距。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c497a6515224524918e8a68db5d2f5aa07523815ad833329cb4c6d1c57423f99"
    },
    {
      "questionId": "u09-s011-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "資料 1、1、2、2、3 的眾數為何？",
      "givenConditions": [
        "最高次數並列。"
      ],
      "target": "辨認多眾數",
      "choices": [
        "1 與 2",
        "只有 1",
        "只有 2",
        "沒有眾數"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "次數為 1→2 次、2→2 次、3→1 次，所以 1 與 2 都是眾數。",
        "derivedAnswer": "1 與 2",
        "trustStoredAnswer": false
      },
      "explanation": "眾數可以不只一個。",
      "steps": [
        "統計次數。",
        "保留所有並列最高值。"
      ],
      "optionAnalysis": [
        {
          "choice": "1 與 2",
          "truth": true,
          "reason": "1、2 都出現 2 次，並列最多。"
        },
        {
          "choice": "只有 1",
          "truth": false,
          "reason": "2 也同樣最多。"
        },
        {
          "choice": "只有 2",
          "truth": false,
          "reason": "1 也同樣最多。"
        },
        {
          "choice": "沒有眾數",
          "truth": false,
          "reason": "有兩個眾數，不是沒有。"
        }
      ],
      "misconceptionTarget": "認為眾數只能一個",
      "prerequisiteCheck": {
        "skillIds": [
          "median-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案列出兩值。",
      "ambiguityAndBoundaryAudit": "次數比較明確。",
      "difficultyReason": "基礎概念延伸。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d643404b8437b9d6a274a0295192089300c71d09727369084cc2cd2f9149c4b4"
    },
    {
      "questionId": "u09-s011-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "資料 5、7、7、9、x 的眾數要唯一為 7。下列哪個 x 不可取？",
      "givenConditions": [
        "x 可與既有值相同。"
      ],
      "target": "依唯一眾數條件判斷未知值",
      "choices": [
        "4",
        "9",
        "7",
        "10"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "逐一代入檢查次數；x=4、7、10 時 7 仍唯一最多，只有 x=9 造成 7、9 並列。",
        "derivedAnswer": "9",
        "trustStoredAnswer": false
      },
      "explanation": "眾數條件要檢查所有值的次數。",
      "steps": [
        "代入各選項。",
        "比較最高次數是否唯一。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "x=4 時 4 只出現1次，7仍唯一出現2次。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "x=9 時 7 與 9 都各 2 次，眾數不唯一。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "x=7 時 7 出現 3 次。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "x=10 時 7 仍唯一最多。"
        }
      ],
      "misconceptionTarget": "只看 x 是否等於 7",
      "prerequisiteCheck": {
        "skillIds": [
          "median-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "9。",
      "ambiguityAndBoundaryAudit": "『不可取』語意明確。",
      "difficultyReason": "標準條件排除。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7eccf5c08f05d0774feff87dc80237b4b164e9156c69cb60a89ed18840ff96db"
    },
    {
      "questionId": "u09-s011-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "一組資料最小值 12、最大值 35。若所有資料都加 4，新全距是多少？",
      "givenConditions": [
        "每筆都加同一數。"
      ],
      "target": "判斷平移對全距的影響",
      "choices": [
        "19",
        "27",
        "23",
        "31"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "新最大 39、新最小 16，39-16=23。",
        "derivedAnswer": "23",
        "trustStoredAnswer": false
      },
      "explanation": "所有資料平移同一常數不改變全距。",
      "steps": [
        "更新兩端或用性質。",
        "相減。"
      ],
      "optionAnalysis": [
        {
          "choice": "19",
          "truth": false,
          "reason": "19 是 23-4。"
        },
        {
          "choice": "27",
          "truth": false,
          "reason": "27 是 23+4。"
        },
        {
          "choice": "23",
          "truth": true,
          "reason": "原全距 35-12=23；兩端同加 4，全距不變。"
        },
        {
          "choice": "31",
          "truth": false,
          "reason": "31 是錯誤更新。"
        }
      ],
      "misconceptionTarget": "認為全距也加 4",
      "prerequisiteCheck": {
        "skillIds": [
          "median-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "23。",
      "ambiguityAndBoundaryAudit": "資料順序不變。",
      "difficultyReason": "標準性質。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "045f3e6e69f67b2c9cbd313681ef60283b7b92307e11755db6023143c063a14a"
    },
    {
      "questionId": "u09-s011-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "資料 2、4、4、6、9 中把 9 改為 12。眾數與全距如何變化？",
      "givenConditions": [
        "最小值維持 2。"
      ],
      "target": "同時分析眾數與全距變化",
      "choices": [
        "眾數變 12，全距不變",
        "眾數仍 4，全距變 8",
        "眾數變 4，全距由 9 變 12",
        "眾數仍為 4，全距由 7 變 10"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "更正前眾數 4、全距 7；更正後眾數 4、全距 10。",
        "derivedAnswer": "眾數仍為 4，全距由 7 變 10",
        "trustStoredAnswer": false
      },
      "explanation": "極端值改變可能影響全距但不一定影響眾數。",
      "steps": [
        "比較更正前後次數。",
        "比較最大最小。"
      ],
      "optionAnalysis": [
        {
          "choice": "眾數變 12，全距不變",
          "truth": false,
          "reason": "12 只出現 1 次。"
        },
        {
          "choice": "眾數仍 4，全距變 8",
          "truth": false,
          "reason": "新全距不是 8。"
        },
        {
          "choice": "眾數變 4，全距由 9 變 12",
          "truth": false,
          "reason": "全距不是直接列端點。"
        },
        {
          "choice": "眾數仍為 4，全距由 7 變 10",
          "truth": true,
          "reason": "4 仍出現 2 次；原全距 9-2=7，新全距 12-2=10。"
        }
      ],
      "misconceptionTarget": "把新最大值當眾數",
      "prerequisiteCheck": {
        "skillIds": [
          "median-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "全距為數值差。",
      "ambiguityAndBoundaryAudit": "更正只影響一筆。",
      "difficultyReason": "雙指標分析，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "65ab5ccd1010f7baabb8f6c084cc2319ec242dbccfc1bd338189b56ea0e6691a"
    },
    {
      "questionId": "u09-s011-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "資料 3、5、5、7、x 的全距為 8，且 x 為最大值。x 是多少？",
      "givenConditions": [
        "x≥7，11 合法。"
      ],
      "target": "由全距反推未知最大值",
      "choices": [
        "11",
        "8",
        "10",
        "13"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "最大 x 減最小 3 等於 8，故 x=11。",
        "derivedAnswer": "11",
        "trustStoredAnswer": false
      },
      "explanation": "已知未知值是最大值，可直接建立全距方程。",
      "steps": [
        "寫 x-3=8。",
        "解得 x=11。"
      ],
      "optionAnalysis": [
        {
          "choice": "11",
          "truth": true,
          "reason": "x-3=8，所以 x=11。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8 是全距本身。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "10 使全距 7。"
        },
        {
          "choice": "13",
          "truth": false,
          "reason": "13 使全距 10。"
        }
      ],
      "misconceptionTarget": "把全距直接當最大值",
      "prerequisiteCheck": {
        "skillIds": [
          "median-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "11。",
      "ambiguityAndBoundaryAudit": "最大值條件排除其他位置。",
      "difficultyReason": "進階反推。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f030fedd95857cb79a2b5bc1bc63899ed1c67e97e9b0a9a23a1b360a06a64997"
    },
    {
      "questionId": "u09-s011-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "資料 1、4、4、6、8、x 中，x 已知是最大值；眾數唯一為 4，且全距為 9。x 是多少？",
      "givenConditions": [
        "x 為最大值。"
      ],
      "target": "整合眾數與全距條件",
      "choices": [
        "9",
        "10",
        "12",
        "13"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "由最大值條件得 x-1=9，解 x=10，再檢查眾數仍為 4。",
        "derivedAnswer": "10",
        "trustStoredAnswer": false
      },
      "explanation": "兩個條件都要驗證，不能只解全距。",
      "steps": [
        "由全距求 x。",
        "檢查 x 是最大值。",
        "檢查眾數唯一。"
      ],
      "optionAnalysis": [
        {
          "choice": "9",
          "truth": false,
          "reason": "x=9 時全距 8。"
        },
        {
          "choice": "10",
          "truth": true,
          "reason": "x-1=9，所以 x=10；4 仍唯一出現 2 次。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "x=12 時全距 11。"
        },
        {
          "choice": "13",
          "truth": false,
          "reason": "x=13 時全距 12。"
        }
      ],
      "misconceptionTarget": "忽略未知值位置或眾數條件",
      "prerequisiteCheck": {
        "skillIds": [
          "median-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "10。",
      "ambiguityAndBoundaryAudit": "條件足以唯一決定 x。",
      "difficultyReason": "多條件進階題。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4dcdac33a8a28e91e36fd9468898d9f559c6b7e722c33512128f36282c9d9450"
    },
    {
      "questionId": "u09-s011-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "資料 2、2、3、4、4 的眾數是 2 與 4。加入一筆 3 後，眾數如何？",
      "givenConditions": [
        "共 6 筆資料。"
      ],
      "target": "分析新增資料對多眾數的影響",
      "choices": [
        "只剩 3",
        "仍只有 2 與 4",
        "2、3、4 都是眾數",
        "沒有眾數"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "原次數 2:2、3:1、4:2；加入 3 後皆為 2 次。",
        "derivedAnswer": "2、3、4 都是眾數",
        "trustStoredAnswer": false
      },
      "explanation": "加入資料可能改變眾數集合而不改最高次數。",
      "steps": [
        "更新 3 的次數。",
        "比較三值次數。"
      ],
      "optionAnalysis": [
        {
          "choice": "只剩 3",
          "truth": false,
          "reason": "3 沒有超過其他兩值。"
        },
        {
          "choice": "仍只有 2 與 4",
          "truth": false,
          "reason": "3 也加入並列。"
        },
        {
          "choice": "2、3、4 都是眾數",
          "truth": true,
          "reason": "加入後三個值都各出現 2 次。"
        },
        {
          "choice": "沒有眾數",
          "truth": false,
          "reason": "有三個並列最高值。"
        }
      ],
      "misconceptionTarget": "只看新增值或忽略並列",
      "prerequisiteCheck": {
        "skillIds": [
          "median-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案列出三值。",
      "ambiguityAndBoundaryAudit": "三者次數完全相同。",
      "difficultyReason": "進階動態更新。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8492e7622a3001936b9369461a4f5270023d1a24b666e27dcd06033c1ed25714"
    },
    {
      "questionId": "u09-s011-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "兩班測驗：甲班平均 80、全距 12；乙班平均 80、全距 30。若只比較分數散布，下列何者較合理？",
      "givenConditions": [
        "同一測驗量尺。"
      ],
      "target": "用全距比較資料集中程度",
      "choices": [
        "乙班分數較集中",
        "兩班一定完全相同",
        "全距不能比較散布",
        "甲班分數較集中"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "甲全距 12<30，因此以全距衡量時甲較集中。",
        "derivedAnswer": "甲班分數較集中",
        "trustStoredAnswer": false
      },
      "explanation": "代表值相同仍可能有不同散布。",
      "steps": [
        "分清平均與全距角色。",
        "比較全距大小。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙班分數較集中",
          "truth": false,
          "reason": "乙全距 30 較大。"
        },
        {
          "choice": "兩班一定完全相同",
          "truth": false,
          "reason": "相同平均不代表分布相同。"
        },
        {
          "choice": "全距不能比較散布",
          "truth": false,
          "reason": "全距雖粗略，仍可比較兩端散布。"
        },
        {
          "choice": "甲班分數較集中",
          "truth": true,
          "reason": "平均相同時，較小全距表示兩端差距較小。"
        }
      ],
      "misconceptionTarget": "只看平均相同便認為資料相同",
      "prerequisiteCheck": {
        "skillIds": [
          "median-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "不需運算取位。",
      "ambiguityAndBoundaryAudit": "只說『以全距衡量』，不過度推論其他散布特徵。",
      "difficultyReason": "需整合代表值與散布。",
      "literacyNecessityReason": "班級教學診斷需知道成績是否集中，平均相同不足以回答。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4c84045a0574061b1998572c45500992ac7f108bc55ad2f3e00d9eae55d52155"
    },
    {
      "questionId": "u09-s011-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "鞋店統計售出鞋號：23 號 8 雙、24 號 15 雙、25 號 21 雙、26 號 12 雙、27 號 4 雙。若決定補貨優先順序，哪個統計量最直接？",
      "givenConditions": [
        "鞋號是離散類別。"
      ],
      "target": "在類別需求情境選用眾數",
      "choices": [
        "眾數 25 號",
        "平均鞋號",
        "全距 4 號",
        "中位數一定是 27 號"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "比較各鞋號次數，25 號 21 雙最高，所以眾數 25。",
        "derivedAnswer": "眾數 25 號",
        "trustStoredAnswer": false
      },
      "explanation": "庫存補貨關心最常售出的類別，眾數最直接。",
      "steps": [
        "找最高次數。",
        "對應鞋號。",
        "連結決策目的。"
      ],
      "optionAnalysis": [
        {
          "choice": "眾數 25 號",
          "truth": true,
          "reason": "售出次數最多的 25 號最能反映最常需求。"
        },
        {
          "choice": "平均鞋號",
          "truth": false,
          "reason": "平均鞋號可能不是實際鞋號需求峰值。"
        },
        {
          "choice": "全距 4 號",
          "truth": false,
          "reason": "全距只描述尺寸跨度。"
        },
        {
          "choice": "中位數一定是 27 號",
          "truth": false,
          "reason": "中位數不會必然是最大鞋號。"
        }
      ],
      "misconceptionTarget": "一律使用平均作決策",
      "prerequisiteCheck": {
        "skillIds": [
          "median-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "答案為 25 號。",
      "ambiguityAndBoundaryAudit": "不表示只補 25 號，只說優先。",
      "difficultyReason": "需依決策目的選統計量。",
      "literacyNecessityReason": "鞋店補貨的核心是最常售出尺寸，眾數具有實際決策意義。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "78fc59ff80c82843ceaa9e6b586a4ec0a0d763ffe22d561f1e8a6714499475e5"
    },
    {
      "questionId": "u09-s011-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "某地一週日夜溫差資料全距為 14°C。報導寫『每天溫差都是 14°C』。何者正確？",
      "givenConditions": [
        "單位 °C。"
      ],
      "target": "審核全距的生活化敘述",
      "choices": [
        "正確，全距就是每筆資料",
        "不正確，全距 14°C 只表示最大值與最小值相差 14°C",
        "不正確，因全距一定小於每筆資料",
        "正確，表示平均也是 14°C"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "設一週最大溫差 M、最小 m，M-m=14；其他天可有不同數值。",
        "derivedAnswer": "不正確，全距 14°C 只表示最大值與最小值相差 14°C",
        "trustStoredAnswer": false
      },
      "explanation": "統計量描述資料集合，不應誤解成每一個個體值。",
      "steps": [
        "回顧全距定義。",
        "檢查報導是否把集合指標套到個體。"
      ],
      "optionAnalysis": [
        {
          "choice": "正確，全距就是每筆資料",
          "truth": false,
          "reason": "全距不是每一天的值。"
        },
        {
          "choice": "不正確，全距 14°C 只表示最大值與最小值相差 14°C",
          "truth": true,
          "reason": "全距只由最大與最小決定。"
        },
        {
          "choice": "不正確，因全距一定小於每筆資料",
          "truth": false,
          "reason": "全距與各筆大小無此必然關係。"
        },
        {
          "choice": "正確，表示平均也是 14°C",
          "truth": false,
          "reason": "全距不能推出平均。"
        }
      ],
      "misconceptionTarget": "把整體統計量當成每筆資料",
      "prerequisiteCheck": {
        "skillIds": [
          "median-basic"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "14°C 是差值。",
      "ambiguityAndBoundaryAudit": "不需要知道各日具體值也能否定『都是』。",
      "difficultyReason": "需判斷統計語句層次。",
      "literacyNecessityReason": "氣象報導把全距誤述為每日數值會直接誤導讀者，情境必要。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "723bc21b3e4727d626384f39c46549ee74f751995e3ba2da0f9026f7cb7fb501"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s011-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "一組資料為4、6、6、7、9、9、9、12。求眾數與全距。若再加入一筆4，眾數是否改變？全距是否改變？請分別說明。",
      "givenConditions": [],
      "target": "同時分析次數變動與極值不變對眾數、全距的影響。",
      "requiredWork": [
        "列出原眾數與全距。",
        "更新4的次數後重新比較最高次數。",
        "檢查最大值與最小值是否改變。"
      ],
      "standardSolution": [
        "原資料中9出現3次，為眾數。全距=12-4=8。",
        "加入4後，4出現2次，9仍出現3次，因此眾數仍是9。",
        "最大值仍12、最小值仍4，所以全距仍為8。"
      ],
      "alternativeMethod": "可用次數表：4:1→2、6:2、7:1、9:3、12:1，直接比較。",
      "reasoningSteps": [
        "計數每個值出現次數。",
        "找最高次數對應值。",
        "最大減最小。",
        "加入資料後只更新受影響次數與極值。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "原眾數9、全距8，加入後兩者均不變且理由正確。"
        },
        {
          "score": 2,
          "criteria": "四個結論正確但一項理由不完整，或僅全距算術小錯。"
        },
        {
          "score": 1,
          "criteria": "至少正確求出原眾數或全距，並知道加入4需重新計次。"
        },
        {
          "score": 0,
          "criteria": "把最高次數3當眾數，且全距使用加法。"
        }
      ],
      "partialCreditRules": [
        "只寫『不變』未分別說明次數與極值，最多2分。",
        "加入4後4並未與9並列，不可列雙眾數。"
      ],
      "followThroughPolicy": "原全距算錯不應影響眾數分析；兩部分獨立計分。",
      "unitAndNotationRules": "資料無指定單位；全距與原資料同單位。",
      "answerOnlyPolicy": "只列9、8、不變、不變且全對，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "9頻數3最高；R=8。新增4使其頻數2，極值仍4與12。",
        "boundaryAndAmbiguityAudit": "加入值4等於原最小值，不產生新極值。",
        "rubricAlignmentEvidence": "次數結構與極值結構分別要求說明。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "444827ec87061dde61501fc9f37818bb5d7cc7a7b071b129608864ee98b65672"
    },
    {
      "questionId": "u09-s011-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-summary",
      "skillId": "mode-range-basic",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "已知資料1、3、3、5、8、x，其中x為最大值且x≥8。若全距為11，求x，並判斷眾數。接著若把x改成3，新的眾數與全距為何？",
      "givenConditions": [],
      "target": "由全距反推最大值，並分析資料替換對眾數與全距的雙重影響。",
      "requiredWork": [
        "利用最大值x與最小值1建立x-1=11。",
        "原資料重新計次判斷眾數。",
        "替換x為3後重新找最大、最小與次數。"
      ],
      "standardSolution": [
        "x-1=11，所以x=12，符合x≥8且為最大值。",
        "原資料1、3、3、5、8、12中，3出現2次，其餘1次，眾數為3。",
        "把12改成3後資料為1、3、3、3、5、8，眾數仍為3但次數增為3；新全距=8-1=7。"
      ],
      "alternativeMethod": "可先由全距定義直接寫最大值=最小值+11=12。",
      "reasoningSteps": [
        "辨認最小值1。",
        "由全距求最大值x。",
        "統計原資料次數。",
        "替換資料後重算次數與極值。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "x=12、原眾數3、新眾數3及新全距7全部正確，並展示全距方程。"
        },
        {
          "score": 2,
          "criteria": "x與兩次眾數正確，但新全距或解釋有一處錯。"
        },
        {
          "score": 1,
          "criteria": "能由x-1=11求12，或正確判斷任一次眾數。"
        },
        {
          "score": 0,
          "criteria": "把全距11當x，且無正確眾數判斷。"
        }
      ],
      "partialCreditRules": [
        "原眾數與新眾數數值相同，但必須重新計次；只說『不變』未說明最多2分。",
        "若誤認新最大仍12，顯示未執行替換。"
      ],
      "followThroughPolicy": "x若早期算錯但仍依替換後資料1、3、3、3、5、8算出眾數3與全距7，可保留後半分。",
      "unitAndNotationRules": "無指定單位；x與全距為數值。",
      "answerOnlyPolicy": "只寫12、3、3、7，無過程最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "12-1=11；3原頻數2、新頻數3；替換後最大8、最小1、全距7。",
        "boundaryAndAmbiguityAudit": "x為最大值且≥8排除另一端未知造成的雙解。",
        "rubricAlignmentEvidence": "滿分需完成反推與資料替換後的兩種統計量更新。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "fc073afe543dbd1f09b07c9a107dc794ccd8b2e4034f0b26324f58b2c37f1c82"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s011-v001-semantic-r1",
      "questionId": "u09-s011-v001",
      "unitId": "u09",
      "skillId": "mode-range-basic",
      "independentRecalculation": "計算各值出現次數，3 最多。",
      "correctChoiceCheck": "獨立計算得到「3」，位於索引 2。",
      "distractorAudit": [
        "2 只出現一次。",
        "5 只出現一次。",
        "7 只出現一次。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「3」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「眾數與全距」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "最高次數唯一。",
      "difficultyEvidence": "基本眾數。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c28ae468f917b5733cc90858ec621a890c5c447e46715243633b2d5aabcbb5b0"
    },
    {
      "reviewId": "u09-s011-v002-semantic-r1",
      "questionId": "u09-s011-v002",
      "unitId": "u09",
      "skillId": "mode-range-basic",
      "independentRecalculation": "全距＝最大值－最小值＝11-4=7。",
      "correctChoiceCheck": "獨立計算得到「7」，位於索引 3。",
      "distractorAudit": [
        "15 是最大最小相加。",
        "11 是最大值。",
        "4 是最小值。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「7」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「眾數與全距」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "最大最小唯一。",
      "difficultyEvidence": "基本全距。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9cb404ce3b38a32625c4df43551de6b206a6b9608f7d772b67dfbaa917e78959"
    },
    {
      "reviewId": "u09-s011-v003-semantic-r1",
      "questionId": "u09-s011-v003",
      "unitId": "u09",
      "skillId": "mode-range-basic",
      "independentRecalculation": "次數為 1→2 次、2→2 次、3→1 次，所以 1 與 2 都是眾數。",
      "correctChoiceCheck": "獨立計算得到「1 與 2」，位於索引 0。",
      "distractorAudit": [
        "2 也同樣最多。",
        "1 也同樣最多。",
        "有兩個眾數，不是沒有。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「1 與 2」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「眾數與全距」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "次數比較明確。",
      "difficultyEvidence": "基礎概念延伸。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "90607ae54d57a9257479e588eb6ba47e87dfac9d0387f04efd24bf0a77211bc0"
    },
    {
      "reviewId": "u09-s011-v004-semantic-r1",
      "questionId": "u09-s011-v004",
      "unitId": "u09",
      "skillId": "mode-range-basic",
      "independentRecalculation": "逐一代入檢查次數；x=4、7、10 時 7 仍唯一最多，只有 x=9 造成 7、9 並列。",
      "correctChoiceCheck": "獨立計算得到「9」，位於索引 1。",
      "distractorAudit": [
        "x=4 時 4 只出現1次，7仍唯一出現2次。",
        "x=7 時 7 出現 3 次。",
        "x=10 時 7 仍唯一最多。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有 x=9 使9也出現2次，破壞7為唯一眾數。",
      "scopeEvidence": "題目直接檢核「眾數與全距」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "『不可取』語意明確。",
      "difficultyEvidence": "標準條件排除。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "63a77f479c851601458045e6e6350a2ae568876fe47159dea5bc3693158e7799"
    },
    {
      "reviewId": "u09-s011-v005-semantic-r1",
      "questionId": "u09-s011-v005",
      "unitId": "u09",
      "skillId": "mode-range-basic",
      "independentRecalculation": "新最大 39、新最小 16，39-16=23。",
      "correctChoiceCheck": "獨立計算得到「23」，位於索引 2。",
      "distractorAudit": [
        "19 是 23-4。",
        "27 是 23+4。",
        "31 是錯誤更新。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「23」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「眾數與全距」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "資料順序不變。",
      "difficultyEvidence": "標準性質。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "fa3e85ffcb8e3a3ba28dc90058106dbd3816dbdf2d96896acfd5e3356179fc84"
    },
    {
      "reviewId": "u09-s011-v006-semantic-r1",
      "questionId": "u09-s011-v006",
      "unitId": "u09",
      "skillId": "mode-range-basic",
      "independentRecalculation": "更正前眾數 4、全距 7；更正後眾數 4、全距 10。",
      "correctChoiceCheck": "獨立計算得到「眾數仍為 4，全距由 7 變 10」，位於索引 3。",
      "distractorAudit": [
        "12 只出現 1 次。",
        "新全距不是 8。",
        "全距不是直接列端點。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「眾數仍為 4，全距由 7 變 10」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「眾數與全距」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "更正只影響一筆。",
      "difficultyEvidence": "雙指標分析，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "dd228e06243fea5df199efc59037f055337f61cbe232a5923f29e29a4bc3486a"
    },
    {
      "reviewId": "u09-s011-v007-semantic-r1",
      "questionId": "u09-s011-v007",
      "unitId": "u09",
      "skillId": "mode-range-basic",
      "independentRecalculation": "最大 x 減最小 3 等於 8，故 x=11。",
      "correctChoiceCheck": "獨立計算得到「11」，位於索引 0。",
      "distractorAudit": [
        "8 是全距本身。",
        "10 使全距 7。",
        "13 使全距 10。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「11」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「眾數與全距」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "最大值條件排除其他位置。",
      "difficultyEvidence": "進階反推。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "5ca567498f9f9b32063b459b924331c443a9e1405cf025124a850b656e461410"
    },
    {
      "reviewId": "u09-s011-v008-semantic-r1",
      "questionId": "u09-s011-v008",
      "unitId": "u09",
      "skillId": "mode-range-basic",
      "independentRecalculation": "由最大值條件得 x-1=9，解 x=10，再檢查眾數仍為 4。",
      "correctChoiceCheck": "獨立計算得到「10」，位於索引 1。",
      "distractorAudit": [
        "x=9 時全距 8。",
        "x=12 時全距 11。",
        "x=13 時全距 12。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「10」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「眾數與全距」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "條件足以唯一決定 x。",
      "difficultyEvidence": "多條件進階題。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d2f85fef4648dab61d9ae65cc004cf94d30e94ec1e2785d5a4b76897a3e945a3"
    },
    {
      "reviewId": "u09-s011-v009-semantic-r1",
      "questionId": "u09-s011-v009",
      "unitId": "u09",
      "skillId": "mode-range-basic",
      "independentRecalculation": "原次數 2:2、3:1、4:2；加入 3 後皆為 2 次。",
      "correctChoiceCheck": "獨立計算得到「2、3、4 都是眾數」，位於索引 2。",
      "distractorAudit": [
        "3 沒有超過其他兩值。",
        "3 也加入並列。",
        "有三個並列最高值。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「2、3、4 都是眾數」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「眾數與全距」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "三者次數完全相同。",
      "difficultyEvidence": "進階動態更新。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "95f160b54621a2aed200b1d13fd7a0854eb397b9b1e6f2e0270f28a37454e6c2"
    },
    {
      "reviewId": "u09-s011-v010-semantic-r1",
      "questionId": "u09-s011-v010",
      "unitId": "u09",
      "skillId": "mode-range-basic",
      "independentRecalculation": "甲全距 12<30，因此以全距衡量時甲較集中。",
      "correctChoiceCheck": "獨立計算得到「甲班分數較集中」，位於索引 3。",
      "distractorAudit": [
        "乙全距 30 較大。",
        "相同平均不代表分布相同。",
        "全距雖粗略，仍可比較兩端散布。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「甲班分數較集中」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「眾數與全距」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只說『以全距衡量』，不過度推論其他散布特徵。",
      "difficultyEvidence": "需整合代表值與散布。",
      "literacyEvidence": "班級教學診斷需知道成績是否集中，平均相同不足以回答。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "f3a19b98b763c4fdf7f968ce60869b7608c8900013eab52a9edfc268f6882e5a"
    },
    {
      "reviewId": "u09-s011-v011-semantic-r1",
      "questionId": "u09-s011-v011",
      "unitId": "u09",
      "skillId": "mode-range-basic",
      "independentRecalculation": "比較各鞋號次數，25 號 21 雙最高，所以眾數 25。",
      "correctChoiceCheck": "獨立計算得到「眾數 25 號」，位於索引 0。",
      "distractorAudit": [
        "平均鞋號可能不是實際鞋號需求峰值。",
        "全距只描述尺寸跨度。",
        "中位數不會必然是最大鞋號。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「眾數 25 號」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「眾數與全距」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不表示只補 25 號，只說優先。",
      "difficultyEvidence": "需依決策目的選統計量。",
      "literacyEvidence": "鞋店補貨的核心是最常售出尺寸，眾數具有實際決策意義。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "33ebdefe6dce9a1832290a20a62167d351eeb57467afddb49ce708fec7386cc7"
    },
    {
      "reviewId": "u09-s011-v012-semantic-r1",
      "questionId": "u09-s011-v012",
      "unitId": "u09",
      "skillId": "mode-range-basic",
      "independentRecalculation": "設一週最大溫差 M、最小 m，M-m=14；其他天可有不同數值。",
      "correctChoiceCheck": "獨立計算得到「不正確，全距 14°C 只表示最大值與最小值相差 14°C」，位於索引 1。",
      "distractorAudit": [
        "全距不是每一天的值。",
        "全距與各筆大小無此必然關係。",
        "全距不能推出平均。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「不正確，全距 14°C 只表示最大值與最小值相差 14°C」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「眾數與全距」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "不需要知道各日具體值也能否定『都是』。",
      "difficultyEvidence": "需判斷統計語句層次。",
      "literacyEvidence": "氣象報導把全距誤述為每日數值會直接誤導讀者，情境必要。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "56e2301256bc3d2bdf13bdf1da007f22c78a03a9fbc213bd66dd23403851ea47"
    }
  ],
  "drawingSpecs": []
};
