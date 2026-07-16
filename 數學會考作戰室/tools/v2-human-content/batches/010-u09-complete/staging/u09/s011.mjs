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
      "眾數是出現次數最高的資料值，作答時要寫資料值而不是最高次數。先建立每個值的次數表，再找最大次數；若兩個以上資料值並列最高，它們都是眾數。若每個值出現次數完全相同，通常說沒有眾數，因此不能預設每組資料只有一個眾數。",
      "全距等於最大值減最小值，只由資料兩端決定。所有資料同加或同減一個常數時，最大與最小同步平移，差保持不變；替換或加入資料時，只有超出原兩端才會改變全距。極端值會直接擴大全距，所以全距容易受離群值影響。",
      "同一筆資料變動可能對眾數與全距造成不同效果，必須分開檢查：先更新各值次數判眾數，再重找最大、最小求全距。比較兩組散布時，較小全距只表示最大最小跨度較小，不能據此斷言兩組分布其他部分完全相同。"
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
        "prompt": "鞋號為 23、24、24、24、25、25，求眾數。",
        "solution": [
          "二十四出現三次。",
          "二十五出現兩次，其餘各一次。"
        ],
        "answer": "眾數為 24。",
        "why": "補貨關心哪個鞋號實際出現最多，次數表顯示二十四唯一達三次；答案要寫鞋號二十四，而不是把最高次數三誤當成眾數。"
      },
      {
        "id": "L2",
        "prompt": "資料為 2、2、5、5、8，求眾數。",
        "solution": [
          "二與五各出現兩次。",
          "八只出現一次。"
        ],
        "answer": "眾數為 2 與 5。",
        "why": "二、五的次數並列最高，兩者都符合最常出現的定義；強迫只選其中一個會遺漏完整答案，而八並未追平最高次數。"
      },
      {
        "id": "L3",
        "prompt": "資料為 4、7、9、13、13，求全距。",
        "solution": [
          "最大值為 13，最小值為 4。",
          "13-4=9。"
        ],
        "answer": "全距為 9。",
        "why": "全距只量測兩端跨度，中間七、九與十三是否重複都不改變最大減最小；以四加九回到十三也能快速核對相減方向。"
      },
      {
        "id": "L4",
        "prompt": "資料為 10、11、11、12、50，說明眾數與全距。",
        "solution": [
          "十一出現兩次，為眾數。",
          "全距為 50-10=40。",
          "五十是造成大跨度的極端值。"
        ],
        "answer": "眾數 11，全距 40。",
        "why": "眾數由次數決定，所以仍是十一；全距只看兩端，五十使最大最小差擴大到四十。兩個統計量分別揭示最常見值與整體跨度。"
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
    "contentSha256": "a7412d47a06c549f5801dd441d0f16b20d3802f7fde2629b038eaa10f6a5875d"
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
      "explanation": "眾數是出現次數最多的資料值。 逐值計數可得三出現兩次，其餘二、五、七各一次，所以出現次數最高的資料值是三；眾數答案不是最高次數二。",
      "steps": [
        "統計每個值的次數。",
        "找最高次數。",
        "比較次數後確認只有三達到最高兩次。"
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
      "misconceptionTarget": "把最大值當眾數 把出現次數二寫成眾數，而非寫最常出現的資料值三。",
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
      "contentSha256": "e21571b6e367a08a23f1da235fcf7bc11d825608c028536ad7b187ea4216e279"
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
      "explanation": "全距只看兩端值。 全距只比較資料兩端，最大十一減最小四等於七；中間的六與九不影響全距，也不能把最大與最小相加。",
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
      "misconceptionTarget": "把最大值或總和當全距 將最大十一與最小四相加成十五，混淆全距定義。",
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
      "contentSha256": "24ec693e2aa6d9a7abcd8f135ae9be98f82bde0c9264337b36db400138da214b"
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
      "explanation": "眾數可以不只一個。 一與二都各出現兩次且並列最高，三只出現一次，因此本組有兩個眾數一、二；眾數不要求只能有一個。",
      "steps": [
        "統計次數。",
        "保留所有並列最高值。",
        "列出次數一為二次、二為二次、三為一次。"
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
      "misconceptionTarget": "認為眾數只能一個 強迫只選一個眾數，忽略一與二出現次數並列最高。",
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
      "contentSha256": "e1df754b0aaefa8e98b2fd8bb34da28b43c152aba93fc6ea7bc8ad9b51b31071"
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
      "explanation": "眾數條件要檢查所有值的次數。 原本七出現兩次，若未知數取九，九也出現兩次，便形成七與九並列眾數，不再唯一；其餘選項都不會追平七的最高次數。",
      "steps": [
        "代入各選項。",
        "比較最高次數是否唯一。",
        "逐項代入並比較所有資料值次數，找出九造成並列。"
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
      "misconceptionTarget": "只看 x 是否等於 7 只確認七仍出現兩次，沒有檢查其他值是否也並列兩次。",
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
      "contentSha256": "22e367b8f9f07236f6edfe2706971d21b425f9ba66c37306a39a024aa63e0769"
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
      "explanation": "所有資料平移同一常數不改變全距。 每筆都加四後最大與最小分別成三十九、十六，兩端差仍是二十三；同加常數會在相減時互相抵消，因此全距不變。",
      "steps": [
        "更新兩端或用性質。",
        "相減。",
        "計算三十九減十六得二十三，與原三十五減十二一致。"
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
      "misconceptionTarget": "認為全距也加 4 把增加四誤當全距也增加四，沒有重算新兩端差。",
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
      "contentSha256": "0a21647f80f4af42b36f00ec32bb2740fb8189c4a7a763643200c433155ac325"
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
      "explanation": "極端值改變可能影響全距但不一定影響眾數。 四仍出現兩次而保持唯一眾數；最大值由九改為十二、最小仍二，所以全距由七變十，眾數與全距須分別檢查。",
      "steps": [
        "比較更正前後次數。",
        "比較最大最小。",
        "重算次數得眾數四，再用十二減二得全距十。"
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
      "misconceptionTarget": "把新最大值當眾數 看到最大值改動就誤認眾數也變成十二，或把全距寫成十二。",
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
      "contentSha256": "ea038ff257c789b4e019e5336cecf43dfe37301e337c1568cf698afc0dabceae"
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
      "explanation": "已知未知值是最大值，可直接建立全距方程。 已知未知數是最大值而最小值為三，全距八可列未知數減三等於八，解得十一；十一也確實大於既有最大值七。",
      "steps": [
        "寫 x-3=8。",
        "解得 x=11。",
        "解未知數減三等於八得十一，並檢查最大值條件。"
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
      "misconceptionTarget": "把全距直接當最大值 把全距八直接當成最大值，忽略還要加回最小值三。",
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
      "contentSha256": "d454940ed8b91267e6dce1c7067548065f299dc5f559b38e5276a1077c59e10d"
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
      "explanation": "兩個條件都要驗證，不能只解全距。 最小值一、最大值未知數的差為九，所以未知數等於十；代回後四仍出現兩次，其餘值一次，唯一眾數條件也成立。",
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
      "misconceptionTarget": "忽略未知值位置或眾數條件 只解全距方程而未代回檢查未知數是否為最大值及眾數唯一。",
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
      "contentSha256": "4b4630dd8ae2d2888517cc10aad35f3abfaf46e73062ae389b1e5cc1a2f6bf4c"
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
      "explanation": "加入資料可能改變眾數集合而不改最高次數。 加入一筆三後，二、三、四各出現兩次並列最高，因此三個值都是眾數；增加資料可能新增眾數，不代表原眾數一定消失。",
      "steps": [
        "更新 3 的次數。",
        "比較三值次數。",
        "更新三的次數為二次，再與二、四各二次比較。"
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
      "misconceptionTarget": "只看新增值或忽略並列 只看新加入的三而說它是唯一眾數，未比較完整次數。",
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
      "contentSha256": "7a58bc1b47656e21888941a7ca247eb4609d939b81f7b9b4a2791a1fd37695f9"
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
      "explanation": "代表值相同仍可能有不同散布。 兩班平均相同時，以全距衡量散布，甲班十二小於乙班三十，表示甲班最大與最小分數間跨度較小；結論只限全距這項指標。",
      "steps": [
        "分清平均與全距角色。",
        "比較全距大小。",
        "比較十二與三十，依較小全距判甲班較集中。"
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
      "misconceptionTarget": "只看平均相同便認為資料相同 只看到平均相同便判兩班分布完全相同，忽略全距差異。",
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
      "contentSha256": "886dfb33ee377920bbfbb4bb66d629dc628c44db03fcb8c699185fb158877d9e"
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
      "explanation": "庫存補貨關心最常售出的類別，眾數最直接。 補貨要找實際售出次數最多的鞋號，二十五號售二十一雙為最高，因此眾數二十五最直接；平均鞋號可能不是需求最高的規格。",
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
      "misconceptionTarget": "一律使用平均作決策 用平均數或全距決定補貨，沒有比較各鞋號銷售次數。",
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
      "contentSha256": "234efe359a6ef64b82b247735e6300c483d143c041f572cf512f175d60dde524"
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
      "explanation": "統計量描述資料集合，不應誤解成每一個個體值。 全距十四度只說一週資料中的最大溫差減最小溫差等於十四，各天可取介於兩端的不同值；它不是任一天的溫差或平均。",
      "steps": [
        "回顧全距定義。",
        "檢查報導是否把集合指標套到個體。",
        "以最大值減最小值解讀十四度，排除逐日皆相同的說法。"
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
      "misconceptionTarget": "把整體統計量當成每筆資料 把整組資料的最大最小差，錯當每一筆資料都等於十四。",
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
      "contentSha256": "c906387ea77fbdda5f43b86d0ef4a363c701eadd2466b210debfa26a82565bc8"
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
        "最大值仍12、最小值仍4，所以全距仍為8。",
        "新增四只改變四的出現次數，沒有超過九的三次；它也不改變最小值四或最大值十二，所以眾數與全距都維持原值。"
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
      "contentSha256": "36c288aa5c470a3f9fec610021d5342d4cb3a5f43349bb9b0494c15b4cb94b43",
      "commonErrors": [
        "把最高出現次數三寫成眾數，沒有寫出對應的資料值九。",
        "加入四後只看重複值增加便說眾數改成四，未比較九仍出現三次。"
      ]
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
        "把12改成3後資料為1、3、3、3、5、8，眾數仍為3但次數增為3；新全距=8-1=7。",
        "替換十二為三之後必須重新檢查兩項統計量：三的次數由二增為三而仍是眾數，最大值則由十二降為八，使全距從十一降為七。"
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
      "contentSha256": "a150e53d9dc7bd5883b0785c67975d1f55c9e6d5fc8a13f999952e4603c67e6a",
      "commonErrors": [
        "由全距十一直接寫未知數等於十一，忘記最大值還要加回最小值一。",
        "把十二改成三後只更新眾數次數，未重找最大值八而沿用原全距。"
      ]
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
