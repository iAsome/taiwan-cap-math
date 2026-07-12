// Generated only by serializing reviewed source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u09-s007-lecture-r1",
    "unitId": "u09",
    "numericUnitId": 9,
    "topicId": "u09-display",
    "skillId": "cumulative-frequency",
    "lockedTitle": "累積次數",
    "title": "累積次數：截至某處一共有多少",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reviewStatus": "independently-reviewed",
    "prerequisiteBridge": {
      "skillIds": [
        "histogram-read"
      ],
      "explanation": "需能由直方圖或次數表讀出依序排列的組次數。"
    },
    "learningGoals": [
      "由單組次數建立累積次數。",
      "由相鄰累積值還原單組次數。",
      "處理小於、至少與區間語句。",
      "由累積相對次數求實際筆數。",
      "辨識累積量與新增量的不同趨勢。"
    ],
    "vocabulary": [
      {
        "term": "累積次數",
        "meaning": "從第一組加到指定組的總次數。"
      },
      {
        "term": "單組次數",
        "meaning": "只屬於該組的筆數。"
      },
      {
        "term": "截至",
        "meaning": "包含前面所有組到指定位置。"
      },
      {
        "term": "新增量",
        "meaning": "相鄰兩次累積值的差。"
      }
    ],
    "notation": [
      {
        "symbol": "F_k",
        "meaning": "到第 k 組的累積次數。"
      },
      {
        "symbol": "f_k=F_k-F_{k-1}",
        "meaning": "第 k 組次數由相鄰累積值相減。"
      }
    ],
    "conceptDevelopment": [
      "累積次數會隨組序不減，最後一個累積值就是總數。",
      "第一組單組次數等於第一個累積值；其餘單組次數用相鄰累積值相減。",
      "『小於 40』的累積值與『至少 40』互為全體中的補集。",
      "兩個門檻累積值相減，可得到中間區間人數。",
      "累積值一直上升是自然結果，不代表每期新增量一直增加。"
    ],
    "definitions": [
      {
        "name": "累積次數",
        "statement": "依指定順序，把前面各組次數連同本組一起相加。"
      },
      {
        "name": "累積相對次數",
        "statement": "累積次數除以總數所得的比例。"
      }
    ],
    "formulas": [
      {
        "formula": "F_k=f_1+f_2+…+f_k",
        "conditions": [
          "組別有明確順序"
        ]
      },
      {
        "formula": "f_k=F_k-F_{k-1}",
        "conditions": [
          "k≥2"
        ]
      },
      {
        "formula": "門檻以上次數＝總數－門檻以下累積次數",
        "conditions": [
          "兩範圍互補"
        ]
      }
    ],
    "invalidUseCases": [
      "把累積欄全部相加求總數。",
      "看到最後累積最大便說最後組次數最大。",
      "累積增加就宣稱新增量增加。",
      "用小於 20 的累積值回答 10 到 20 區間人數。"
    ],
    "stepByStepMethod": [
      {
        "step": 1,
        "action": "確認表列的是單組還是累積。"
      },
      {
        "step": 2,
        "action": "單組轉累積就由前往後加。"
      },
      {
        "step": 3,
        "action": "累積轉單組就相鄰相減。"
      },
      {
        "step": 4,
        "action": "把小於、至少、區間翻成範圍。"
      },
      {
        "step": 5,
        "action": "用總數與非負性檢查。"
      }
    ],
    "workedExamples": [
      {
        "id": "L1",
        "prompt": "單組 3、5、4。",
        "solution": [
          "累積為 3、8、12。"
        ],
        "answer": "第二組累積 8。"
      },
      {
        "id": "L2",
        "prompt": "累積 3、10、18、25、30。",
        "solution": [
          "單組為 3、7、8、7、5。"
        ],
        "answer": "第三組次數最多。"
      },
      {
        "id": "L3",
        "prompt": "小於 40 有 27，總數 35。",
        "solution": [
          "至少 40=35-27。"
        ],
        "answer": "8 筆。"
      }
    ],
    "commonMistakes": [
      {
        "wrong": "最後累積 30，所以第五組有 30。",
        "why": "累積包含前面全部。",
        "fix": "30-25=5。"
      },
      {
        "wrong": "截至週四 198 就說週四新增 198。",
        "why": "混淆存量與流量。",
        "fix": "198-150。"
      },
      {
        "wrong": "小於 20 的 11 人就是 10–20 有 11。",
        "why": "未扣小於 10。",
        "fix": "11-4。"
      },
      {
        "wrong": "累積曲線上升就說速度加快。",
        "why": "未比較相鄰差。",
        "fix": "還原每期新增量。"
      }
    ],
    "selfCheck": [
      "這個數是否已包含前面組？",
      "求單組時有相減嗎？",
      "『至少』是否用補集？",
      "趨勢比較的是累積還是新增？"
    ],
    "summary": [
      "累積是從前面一路加到指定位置。",
      "相鄰累積值相減可還原單組。",
      "最後累積值是總數。",
      "累積上升不代表新增量持續增加。"
    ],
    "connections": {
      "previous": "直方圖與次數表提供依序組次數。",
      "next": [
        "列聯表會改成兩個分類交叉，不再是單一順序累積。",
        "中位數位置可利用累積次數判斷，但四分位數留在 U22。"
      ]
    },
    "figureReferences": [],
    "accessibilityNotes": "本講義可完全以文字理解；若有圖形，替代文字提供所有必要數值。",
    "practiceLinks": {
      "mcQuestionIds": [
        "u09-s007-v001",
        "u09-s007-v002",
        "u09-s007-v003",
        "u09-s007-v004",
        "u09-s007-v005",
        "u09-s007-v006",
        "u09-s007-v007",
        "u09-s007-v008",
        "u09-s007-v009",
        "u09-s007-v010",
        "u09-s007-v011",
        "u09-s007-v012"
      ],
      "constructedResponseIds": [
        "u09-s007-cr001",
        "u09-s007-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "用存量與流量語言區分累積值和新增值。",
      "scopeCheck": "符合國中會考範圍；未引入四分位數與盒狀圖。",
      "prerequisiteAudit": "需能由直方圖或次數表讀出依序排列的組次數。",
      "symbolAndUnitAudit": "所有符號在使用前定義；單位與取位規則在例題中明示。",
      "skillSpecificEvidence": "包含門檻補集、區間相減、累積相對次數與趨勢審核。",
      "legacyContentUsed": false,
      "decision": "pass"
    },
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "contentSha256": "98a3ccc279a21ecaa77bff287adccba85cba02cefa774b616abfafac1d779f1d"
  },
  "mcQuestions": [
    {
      "questionId": "u09-s007-v001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "次數依序為 3、5、4。第二組的累積次數是多少？",
      "givenConditions": [
        "組別依序排列。"
      ],
      "target": "計算指定組累積次數",
      "choices": [
        "5",
        "4",
        "8",
        "12"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "累積到第二組要加前兩組：3+5=8。",
        "derivedAnswer": "8",
        "trustStoredAnswer": false
      },
      "explanation": "累積次數是從第一組一路加到指定組。",
      "steps": [
        "加第一組與第二組。"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": false,
          "reason": "5 是第二組單獨次數。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "4 是第三組次數。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "3+5=8。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12 是全部累積次數。"
        }
      ],
      "misconceptionTarget": "只抄該組次數",
      "prerequisiteCheck": {
        "skillIds": [
          "histogram-read"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案為筆數。",
      "ambiguityAndBoundaryAudit": "第二組不包含第三組。",
      "difficultyReason": "一次加法，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "07815a8a62d26214e8d621236808d4eab6a5a5697aa48286afcb14086e66af24"
    },
    {
      "questionId": "u09-s007-v002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "累積次數表為 4、9、15、20。總資料數是多少？",
      "givenConditions": [
        "表格完整。"
      ],
      "target": "由最後累積值讀總數",
      "choices": [
        "20",
        "4",
        "15",
        "48"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "累積到最後一組已包含所有資料，因此總數 20。",
        "derivedAnswer": "20",
        "trustStoredAnswer": false
      },
      "explanation": "不能把累積次數欄再次全部加總。",
      "steps": [
        "找到最後一列累積次數。"
      ],
      "optionAnalysis": [
        {
          "choice": "20",
          "truth": true,
          "reason": "最後一個累積次數就是總數 20。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "4 是第一組。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "15 尚未包含最後一組。"
        },
        {
          "choice": "48",
          "truth": false,
          "reason": "把累積值再相加會重複計數。"
        }
      ],
      "misconceptionTarget": "把累積欄再加總",
      "prerequisiteCheck": {
        "skillIds": [
          "histogram-read"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "總數 20。",
      "ambiguityAndBoundaryAudit": "最後組涵蓋全部資料。",
      "difficultyReason": "直接讀取，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7fb67acb15a0b5ff1ddafc44322aa5c29d1964792d7830eca3a824c995883ae8"
    },
    {
      "questionId": "u09-s007-v003",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "某累積次數表前兩組為 6、14。第二組本身的次數是多少？",
      "givenConditions": [
        "累積次數非遞減。"
      ],
      "target": "由相鄰累積值求單組次數",
      "choices": [
        "6",
        "14",
        "20",
        "8"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "第二組次數＝第二組累積－前一組累積＝14-6=8。",
        "derivedAnswer": "8",
        "trustStoredAnswer": false
      },
      "explanation": "由累積值還原單組次數要相鄰相減。",
      "steps": [
        "用 14 減 6。"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": false,
          "reason": "6 是第一組累積次數。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "14 是第二組累積值。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "20 是相加。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "14-6=8。"
        }
      ],
      "misconceptionTarget": "把累積值當單組次數",
      "prerequisiteCheck": {
        "skillIds": [
          "histogram-read"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "8 筆。",
      "ambiguityAndBoundaryAudit": "只有兩個相鄰累積值。",
      "difficultyReason": "基本逆推，屬基礎。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8b606904f42dbdb454eb3252ecd949fe0f99507795ede5cdc51cb12af3b783d8"
    },
    {
      "questionId": "u09-s007-v004",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "各組次數為 2、7、5、6。第三組累積次數是多少？",
      "givenConditions": [
        "組序固定。"
      ],
      "target": "多組累積加總",
      "choices": [
        "5",
        "14",
        "9",
        "20"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "累積到第三組：2+7+5=14。",
        "derivedAnswer": "14",
        "trustStoredAnswer": false
      },
      "explanation": "要包含指定組本身。",
      "steps": [
        "依序加前三組。"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": false,
          "reason": "5 是第三組次數。"
        },
        {
          "choice": "14",
          "truth": true,
          "reason": "2+7+5=14。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9 只累積前兩組。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "20 是最後總數。"
        }
      ],
      "misconceptionTarget": "漏掉指定組或多加後組",
      "prerequisiteCheck": {
        "skillIds": [
          "histogram-read"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "14 筆。",
      "ambiguityAndBoundaryAudit": "第三組界線明確。",
      "difficultyReason": "三項加總，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e03445dac66ba26ed481f2185c18c3b3306d35e14d05e509578599ffb204e780"
    },
    {
      "questionId": "u09-s007-v005",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "累積次數依序 5、12、x、25，第三組次數為 8。x 是多少？",
      "givenConditions": [
        "累積值須介於 12 與 25。"
      ],
      "target": "利用單組次數補累積缺值",
      "choices": [
        "8",
        "17",
        "33",
        "20"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "累積值 x=12+8=20。",
        "derivedAnswer": "20",
        "trustStoredAnswer": false
      },
      "explanation": "單組次數應加在前一累積值上。",
      "steps": [
        "找前一累積 12。",
        "加第三組次數 8。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": false,
          "reason": "8 是單組次數。"
        },
        {
          "choice": "17",
          "truth": false,
          "reason": "17 是 12+5。"
        },
        {
          "choice": "33",
          "truth": false,
          "reason": "33 是 25+8。"
        },
        {
          "choice": "20",
          "truth": true,
          "reason": "第三組累積＝第二組累積 12+第三組次數 8=20。"
        }
      ],
      "misconceptionTarget": "把單組次數直接填入",
      "prerequisiteCheck": {
        "skillIds": [
          "histogram-read"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "20。",
      "ambiguityAndBoundaryAudit": "與最後累積 25 相容。",
      "difficultyReason": "需連結兩種欄位，屬標準。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "71a6af5964cc8f627c9ce911ba969137431d4dda4baf8bfd1c89d1c667e53283"
    },
    {
      "questionId": "u09-s007-v006",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "累積次數表顯示小於 10 有 4 人、小於 20 有 11 人、小於 30 有 18 人。介於 10（含）到 20（不含）有幾人？",
      "givenConditions": [
        "採左含右不含。"
      ],
      "target": "由門檻累積值求區間次數",
      "choices": [
        "4 人",
        "11 人",
        "7 人",
        "14 人"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "該區間次數＝小於 20 的累積－小於 10 的累積＝7。",
        "derivedAnswer": "7 人",
        "trustStoredAnswer": false
      },
      "explanation": "累積門檻相減可得到中間區間人數。",
      "steps": [
        "辨認兩個門檻。",
        "用較大門檻累積減較小門檻累積。"
      ],
      "optionAnalysis": [
        {
          "choice": "4 人",
          "truth": false,
          "reason": "4 是小於 10。"
        },
        {
          "choice": "11 人",
          "truth": false,
          "reason": "11 是小於 20 的累積人數。"
        },
        {
          "choice": "7 人",
          "truth": true,
          "reason": "11-4=7。"
        },
        {
          "choice": "14 人",
          "truth": false,
          "reason": "14 是錯誤相加。"
        }
      ],
      "misconceptionTarget": "把累積人數直接當區間人數",
      "prerequisiteCheck": {
        "skillIds": [
          "histogram-read"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "7 人。",
      "ambiguityAndBoundaryAudit": "門檻與區間完全對應。",
      "difficultyReason": "標準相減應用。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d1623fc7277781c5b0ea33ca87018e82117326a671ad8c7081d0482251c42f36"
    },
    {
      "questionId": "u09-s007-v007",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "累積次數依序為 3、10、18、25、30。哪一組的單組次數最多？",
      "givenConditions": [
        "累積值非遞減。"
      ],
      "target": "由累積表還原完整次數分布",
      "choices": [
        "第三組",
        "第一組",
        "第二組",
        "第五組"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "相鄰相減還原次數：3, 7, 8, 7, 5。",
        "derivedAnswer": "第三組",
        "trustStoredAnswer": false
      },
      "explanation": "比較累積表時需先還原每組，不能直接找最大累積值。",
      "steps": [
        "第一組次數等於首累積。",
        "其餘相鄰相減。",
        "比較還原值。"
      ],
      "optionAnalysis": [
        {
          "choice": "第三組",
          "truth": true,
          "reason": "單組次數為 3、7、8、7、5，第三組最大 8。"
        },
        {
          "choice": "第一組",
          "truth": false,
          "reason": "第一組只有 3。"
        },
        {
          "choice": "第二組",
          "truth": false,
          "reason": "第二組 7。"
        },
        {
          "choice": "第五組",
          "truth": false,
          "reason": "第五組 30-25=5。"
        }
      ],
      "misconceptionTarget": "把最後累積值最大誤認為最後組次數最多",
      "prerequisiteCheck": {
        "skillIds": [
          "histogram-read"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "答案為第三組。",
      "ambiguityAndBoundaryAudit": "每組次數唯一。",
      "difficultyReason": "需多次相減與比較，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "db1b9bfbd8b2052b8817da3039563d97673911652818134d306a2b59921d52d2"
    },
    {
      "questionId": "u09-s007-v008",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "某表小於 20 的累積次數 12，小於 40 為 27，總數 35。至少 40 的資料有幾筆？",
      "givenConditions": [
        "總數 35。"
      ],
      "target": "以補集求門檻以上次數",
      "choices": [
        "15 筆",
        "23 筆",
        "8 筆",
        "27 筆"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "work": "至少 40 是全體扣掉小於 40：35-27=8。",
        "derivedAnswer": "8 筆",
        "trustStoredAnswer": false
      },
      "explanation": "『至少』與『小於』互為補集。",
      "steps": [
        "找總數 35。",
        "扣除小於 40 的 27。"
      ],
      "optionAnalysis": [
        {
          "choice": "15 筆",
          "truth": false,
          "reason": "15 是 20 到 40 的人數。"
        },
        {
          "choice": "23 筆",
          "truth": false,
          "reason": "23 是 35-12。"
        },
        {
          "choice": "8 筆",
          "truth": true,
          "reason": "35-27=8。"
        },
        {
          "choice": "27 筆",
          "truth": false,
          "reason": "27 是小於 40。"
        }
      ],
      "misconceptionTarget": "用錯累積門檻",
      "prerequisiteCheck": {
        "skillIds": [
          "histogram-read"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "8 筆。",
      "ambiguityAndBoundaryAudit": "若資料恰為 40，應包含在至少 40。",
      "difficultyReason": "需處理語意補集，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8d21ee853ce3d202fe00cb560e87ceaba2322fcab5dd2afb0a5115d7f321844b"
    },
    {
      "questionId": "u09-s007-v009",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "累積相對次數到某組為 0.72，總數 50。若各次數為整數，該累積次數是多少？",
      "givenConditions": [
        "總數 50。"
      ],
      "target": "由累積相對次數求累積次數",
      "choices": [
        "22",
        "36",
        "50",
        "72"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "累積次數＝50×0.72=36。",
        "derivedAnswer": "36",
        "trustStoredAnswer": false
      },
      "explanation": "相對次數乘總數回到實際筆數。",
      "steps": [
        "轉成 72%。",
        "乘 50。",
        "檢查為整數。"
      ],
      "optionAnalysis": [
        {
          "choice": "22",
          "truth": false,
          "reason": "22 是剩餘比例 0.28×約 80 的錯算。"
        },
        {
          "choice": "36",
          "truth": true,
          "reason": "0.72×50=36。"
        },
        {
          "choice": "50",
          "truth": false,
          "reason": "50 是總數。"
        },
        {
          "choice": "72",
          "truth": false,
          "reason": "72 是百分數數字。"
        }
      ],
      "misconceptionTarget": "把百分數數字當筆數",
      "prerequisiteCheck": {
        "skillIds": [
          "histogram-read"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 90,
      "unitAndRoundingCheck": "36 筆精確。",
      "ambiguityAndBoundaryAudit": "0.72 與 50 相容。",
      "difficultyReason": "跨表示轉換，屬進階。",
      "literacyNecessityReason": null,
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b75efaf3ffa3e9915bbad1a8094a16c145e8cd4ee4dd485bc1e1c628f971c8e8"
    },
    {
      "questionId": "u09-s007-v010",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "閱讀測驗完成時間累積表：10 分鐘內 8 人、15 分鐘內 21 人、20 分鐘內 30 人。老師要找『超過 10 分鐘但不超過 15 分鐘』的人數，應算多少？",
      "givenConditions": [
        "分鐘邊界依表定義。"
      ],
      "target": "用累積表回答時間區間問題",
      "choices": [
        "8 人",
        "21 人",
        "22 人",
        "13 人"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "work": "15 分鐘內扣除 10 分鐘內，得到 13。",
        "derivedAnswer": "13 人",
        "trustStoredAnswer": false
      },
      "explanation": "累積資料可求兩門檻間人數。",
      "steps": [
        "辨認上限與下限累積值。",
        "相減。"
      ],
      "optionAnalysis": [
        {
          "choice": "8 人",
          "truth": false,
          "reason": "8 是 10 分鐘內。"
        },
        {
          "choice": "21 人",
          "truth": false,
          "reason": "21 是 15 分鐘內累積。"
        },
        {
          "choice": "22 人",
          "truth": false,
          "reason": "加法或邊界誤算。"
        },
        {
          "choice": "13 人",
          "truth": true,
          "reason": "21-8=13。"
        }
      ],
      "misconceptionTarget": "直接抄上限累積值",
      "prerequisiteCheck": {
        "skillIds": [
          "histogram-read"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 120,
      "unitAndRoundingCheck": "13 人。",
      "ambiguityAndBoundaryAudit": "『超過 10』排除前一累積；『不超過 15』包含上限。",
      "difficultyReason": "時間限制語句是必要條件。",
      "literacyNecessityReason": "完成時間區間決定學生是否需要額外輔導，情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "74060990b1a0db96a1ceab7c20a02f669b89ba251b07744c06d2c8ee50922ab7"
    },
    {
      "questionId": "u09-s007-v011",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "圖書館借閱量累積表顯示：截至週一 40 本、週二 95 本、週三 150 本、週四 198 本。哪一天單日借閱最多？",
      "givenConditions": [
        "單位本。"
      ],
      "target": "由累積營運資料還原每日量",
      "choices": [
        "週四，198 本",
        "週二與週三並列，各 55 本",
        "週三，150 本",
        "週一，40 本"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "work": "相鄰相減：週一 40；週二 95-40=55；週三 150-95=55；週四 198-150=48。",
        "derivedAnswer": "週二與週三並列，各 55 本",
        "trustStoredAnswer": false
      },
      "explanation": "累積量不能直接比較單日表現。",
      "steps": [
        "還原每日新增量。",
        "比較四個單日值。",
        "處理並列。"
      ],
      "optionAnalysis": [
        {
          "choice": "週四，198 本",
          "truth": false,
          "reason": "198 是累積總量，不是週四單日。"
        },
        {
          "choice": "週二與週三並列，各 55 本",
          "truth": true,
          "reason": "單日量為 40、55、55、48，週二週三並列。"
        },
        {
          "choice": "週三，150 本",
          "truth": false,
          "reason": "150 是累積到週三。"
        },
        {
          "choice": "週一，40 本",
          "truth": false,
          "reason": "週一 40 小於 55。"
        }
      ],
      "misconceptionTarget": "把最高累積值當最高單日量",
      "prerequisiteCheck": {
        "skillIds": [
          "histogram-read"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "兩日各 55 本。",
      "ambiguityAndBoundaryAudit": "題目允許並列，選項唯一。",
      "difficultyReason": "需完整還原並辨識並列。",
      "literacyNecessityReason": "圖書館累積紀錄若直接看最大值會錯判每日工作量，情境必要。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ee4264bbd9401e3e2f4cbb337627b5ad12384e7b68406df928745372338b6732"
    },
    {
      "questionId": "u09-s007-v012",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "疫苗接種累積人數為第 1 週 120、第 2 週 260、第 3 週 390、第 4 週 500。報告說『每週新增人數持續增加』。判斷何者正確？",
      "givenConditions": [
        "單位人。"
      ],
      "target": "審核累積資料的趨勢敘述",
      "choices": [
        "不正確，新增人數為 120、140、130、110",
        "正確，因累積人數每週增加",
        "正確，因第 4 週累積最多",
        "無法由累積資料判斷新增人數"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "work": "逐週新增：120；260-120=140；390-260=130；500-390=110。",
        "derivedAnswer": "不正確，新增人數為 120、140、130、110",
        "trustStoredAnswer": false
      },
      "explanation": "檢核趨勢敘述時要分析新增量，而非累積曲線本身。",
      "steps": [
        "將累積值轉為週增量。",
        "比較增量序列。",
        "判定敘述錯誤。"
      ],
      "optionAnalysis": [
        {
          "choice": "不正確，新增人數為 120、140、130、110",
          "truth": true,
          "reason": "新增量先增後減，並非持續增加。"
        },
        {
          "choice": "正確，因累積人數每週增加",
          "truth": false,
          "reason": "累積值必然不減，不代表新增量增加。"
        },
        {
          "choice": "正確，因第 4 週累積最多",
          "truth": false,
          "reason": "最後累積最多是正常結果。"
        },
        {
          "choice": "無法由累積資料判斷新增人數",
          "truth": false,
          "reason": "相鄰相減即可判斷。"
        }
      ],
      "misconceptionTarget": "把累積持續增加誤當新增量持續增加",
      "prerequisiteCheck": {
        "skillIds": [
          "histogram-read"
        ],
        "evidence": "只需運用已鎖定先備概念；未借用後續技能。"
      },
      "estimatedTimeSec": 130,
      "unitAndRoundingCheck": "新增量皆整數。",
      "ambiguityAndBoundaryAudit": "第一週新增視為從 0 到 120。",
      "difficultyReason": "需辨識累積與流量差異。",
      "literacyNecessityReason": "公共衛生報告關心每週施打速度，必須由累積值還原新增量。",
      "figureId": null,
      "drawingSpecId": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "07200fdb70eb835bc78f6ad1c3b7428d8c88a63d1a77ff382a6e9e7ffbd6dd3f"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u09-s007-cr001",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "prompt": "某測驗成績的累積次數表如下：未滿50分3人、未滿60分8人、未滿70分17人、未滿80分26人、未滿90分30人。請求各分數區間50至未滿60、60至未滿70、70至未滿80、80至未滿90的次數，並求未滿70分者比例。",
      "givenConditions": [],
      "target": "由相鄰累積次數相減還原各組次數。",
      "requiredWork": [
        "各區間用後一累積值減前一累積值。",
        "未滿70直接讀累積17。",
        "以總人數30求比例。"
      ],
      "standardSolution": [
        "50至未滿60：8-3=5人。",
        "60至未滿70：17-8=9人。",
        "70至未滿80：26-17=9人。",
        "80至未滿90：30-26=4人。",
        "未滿70分占17/30=56又2/3%（約56.7%）。"
      ],
      "alternativeMethod": "可先補上未滿50分3人，得到各組3、5、9、9、4，總和30作檢查。",
      "reasoningSteps": [
        "辨認累積次數是截至上界的總數。",
        "相鄰兩個累積值相減。",
        "直接讀未滿70累積次數17。",
        "除以最後累積次數30。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "四區間5、9、9、4及未滿70比例17/30全部正確。"
        },
        {
          "score": 2,
          "criteria": "四區間僅一處相減錯且比例正確，或區間全對但未換算比例。"
        },
        {
          "score": 1,
          "criteria": "至少正確用一次相鄰累積值相減，或正確讀出未滿70為17人。"
        },
        {
          "score": 0,
          "criteria": "把8、17、26、30直接當各區間次數，無相減概念。"
        }
      ],
      "partialCreditRules": [
        "56.7%須視為近似；17/30為精確答案。",
        "漏算未滿50不影響題目要求的四區間，但總和檢查可用。"
      ],
      "followThroughPolicy": "某一相減算錯不應連扣其他獨立區間；比例用直接累積值17。",
      "unitAndNotationRules": "次數以人；比例可用分數或百分比。",
      "answerOnlyPolicy": "只列5、9、9、4、17/30全對，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "相鄰差5、9、9、4；最後總30，未滿70為17，比例17/30。",
        "boundaryAndAmbiguityAudit": "『未滿』上界明確，不包含端點；總樣本由最後累積值30確定。",
        "rubricAlignmentEvidence": "區間還原與直接累積讀值分開評量。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "f331be880c6797df63a0f2ccfc6dfb434c9cb71e6afa461872ddaa88ddf46901"
    },
    {
      "questionId": "u09-s007-cr002",
      "unitId": "u09",
      "numericUnitId": 9,
      "topicId": "u09-display",
      "skillId": "cumulative-frequency",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "活動報名累積人數紀錄為：第1天12人、第2天累積27人、第3天累積45人、第4天累積63人、第5天累積80人。主辦方原本誤把這些數字相加，宣稱五天共有227人報名。請說明錯誤、求每天新增人數與正確總報名人數，並找出新增最多的一天。",
      "givenConditions": [],
      "target": "區分累積總量與單期新增量，避免重複計數。",
      "requiredWork": [
        "說明累積數已包含前日。",
        "每天新增由相鄰累積值相減。",
        "正確總數取最後累積值。"
      ],
      "standardSolution": [
        "累積值會重複包含先前報名者，不能相加。",
        "每天新增：第1天12；第2天27-12=15；第3天45-27=18；第4天63-45=18；第5天80-63=17。",
        "正確總人數為第5天累積80人。",
        "新增最多為第3與第4天，皆18人。"
      ],
      "alternativeMethod": "可畫階梯或以累積差分表呈現；所有新增量相加12+15+18+18+17=80作驗算。",
      "reasoningSteps": [
        "辨認每個數是截至當日累積。",
        "第一日新增等於第一個累積值。",
        "其餘日做今日累積減昨日累積。",
        "最後累積即總數，再比較新增量。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "重複計數解釋、五日新增12、15、18、18、17、總80及並列最多日全部正確。"
        },
        {
          "score": 2,
          "criteria": "核心解釋與總數正確，但一個新增量或並列判斷有小錯。"
        },
        {
          "score": 1,
          "criteria": "知道總數是80，或至少正確算出三個相鄰差。"
        },
        {
          "score": 0,
          "criteria": "接受227為總數，且未將累積值轉成新增量。"
        }
      ],
      "partialCreditRules": [
        "漏寫第1天新增12但其餘正確，最高2分。",
        "只寫第3天而漏第4天並列，最多2分。"
      ],
      "followThroughPolicy": "相鄰相減的一處錯誤只影響該日；若後續新增總和檢查發現不為80應主動修正。",
      "unitAndNotationRules": "報名次數與累積總數均以人；天次須明確。",
      "answerOnlyPolicy": "只列每日新增與80、無錯誤說明，最高2分。",
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "independentDerivation": "差分序列12,15,18,18,17，和80；最大18有兩天。",
        "boundaryAndAmbiguityAudit": "每人只報名一次的常規由「累積報名人數」語意確立。",
        "rubricAlignmentEvidence": "滿分要求概念解釋、差分、總量與最大值四層。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "a293bc6e151228ddd12d7532005e484b3da33060ffe02156a6642ed671e1c62c"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u09-s007-v001-semantic-r1",
      "questionId": "u09-s007-v001",
      "unitId": "u09",
      "skillId": "cumulative-frequency",
      "independentRecalculation": "累積到第二組要加前兩組：3+5=8。",
      "correctChoiceCheck": "獨立計算得到「8」，位於索引 2。",
      "distractorAudit": [
        "5 是第二組單獨次數。",
        "4 是第三組次數。",
        "12 是全部累積次數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「8」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「累積次數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "第二組不包含第三組。",
      "difficultyEvidence": "一次加法，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "19c0388e9256e5f080c2a97902ece7217e8068071119a0e90a31d28bc8f5e41d"
    },
    {
      "reviewId": "u09-s007-v002-semantic-r1",
      "questionId": "u09-s007-v002",
      "unitId": "u09",
      "skillId": "cumulative-frequency",
      "independentRecalculation": "累積到最後一組已包含所有資料，因此總數 20。",
      "correctChoiceCheck": "獨立計算得到「20」，位於索引 0。",
      "distractorAudit": [
        "4 是第一組。",
        "15 尚未包含最後一組。",
        "把累積值再相加會重複計數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「20」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「累積次數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "最後組涵蓋全部資料。",
      "difficultyEvidence": "直接讀取，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "92ccffdfbfe5378b5251cdb701ad494d7a6a6cbfce1afbff49308bcd41fa133e"
    },
    {
      "reviewId": "u09-s007-v003-semantic-r1",
      "questionId": "u09-s007-v003",
      "unitId": "u09",
      "skillId": "cumulative-frequency",
      "independentRecalculation": "第二組次數＝第二組累積－前一組累積＝14-6=8。",
      "correctChoiceCheck": "獨立計算得到「8」，位於索引 3。",
      "distractorAudit": [
        "6 是第一組累積次數。",
        "14 是第二組累積值。",
        "20 是相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「8」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「累積次數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "只有兩個相鄰累積值。",
      "difficultyEvidence": "基本逆推，屬基礎。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9394c0d03c24a1b3a4b8589b7772f59940205eab310e6ae83b0207f38cc97776"
    },
    {
      "reviewId": "u09-s007-v004-semantic-r1",
      "questionId": "u09-s007-v004",
      "unitId": "u09",
      "skillId": "cumulative-frequency",
      "independentRecalculation": "累積到第三組：2+7+5=14。",
      "correctChoiceCheck": "獨立計算得到「14」，位於索引 1。",
      "distractorAudit": [
        "5 是第三組次數。",
        "9 只累積前兩組。",
        "20 是最後總數。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「14」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「累積次數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "第三組界線明確。",
      "difficultyEvidence": "三項加總，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2222f9b929ef4e0b61b8c064ece84f512322bd1feeb754f19399c3f5a8f73056"
    },
    {
      "reviewId": "u09-s007-v005-semantic-r1",
      "questionId": "u09-s007-v005",
      "unitId": "u09",
      "skillId": "cumulative-frequency",
      "independentRecalculation": "累積值 x=12+8=20。",
      "correctChoiceCheck": "獨立計算得到「20」，位於索引 3。",
      "distractorAudit": [
        "8 是單組次數。",
        "17 是 12+5。",
        "33 是 25+8。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「20」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「累積次數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "與最後累積 25 相容。",
      "difficultyEvidence": "需連結兩種欄位，屬標準。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "5ca1216d12c4d4a0bc9e312800c9921210e7bee8b952a8a7ede6eb1d576be2ad"
    },
    {
      "reviewId": "u09-s007-v006-semantic-r1",
      "questionId": "u09-s007-v006",
      "unitId": "u09",
      "skillId": "cumulative-frequency",
      "independentRecalculation": "該區間次數＝小於 20 的累積－小於 10 的累積＝7。",
      "correctChoiceCheck": "獨立計算得到「7 人」，位於索引 2。",
      "distractorAudit": [
        "4 是小於 10。",
        "11 是小於 20 的累積人數。",
        "14 是錯誤相加。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「7 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「累積次數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "門檻與區間完全對應。",
      "difficultyEvidence": "標準相減應用。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ef258aaa0b4416c1d9fa851800e78ef2a0b95fc4c1a3cba9fc1360a0130b8b39"
    },
    {
      "reviewId": "u09-s007-v007-semantic-r1",
      "questionId": "u09-s007-v007",
      "unitId": "u09",
      "skillId": "cumulative-frequency",
      "independentRecalculation": "相鄰相減還原次數：3, 7, 8, 7, 5。",
      "correctChoiceCheck": "獨立計算得到「第三組」，位於索引 0。",
      "distractorAudit": [
        "第一組只有 3。",
        "第二組 7。",
        "第五組 30-25=5。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「第三組」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「累積次數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "每組次數唯一。",
      "difficultyEvidence": "需多次相減與比較，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a82db9b216d128a9ee9907f3efd44ff478be5d4daff98dbc5be1edde651723d6"
    },
    {
      "reviewId": "u09-s007-v008-semantic-r1",
      "questionId": "u09-s007-v008",
      "unitId": "u09",
      "skillId": "cumulative-frequency",
      "independentRecalculation": "至少 40 是全體扣掉小於 40：35-27=8。",
      "correctChoiceCheck": "獨立計算得到「8 筆」，位於索引 2。",
      "distractorAudit": [
        "15 是 20 到 40 的人數。",
        "23 是 35-12。",
        "27 是小於 40。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「8 筆」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「累積次數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "若資料恰為 40，應包含在至少 40。",
      "difficultyEvidence": "需處理語意補集，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b10267aa9b5f89cb2ab7be2269c0a6600ccfe0072e81589b90beff3f23959e85"
    },
    {
      "reviewId": "u09-s007-v009-semantic-r1",
      "questionId": "u09-s007-v009",
      "unitId": "u09",
      "skillId": "cumulative-frequency",
      "independentRecalculation": "累積次數＝50×0.72=36。",
      "correctChoiceCheck": "獨立計算得到「36」，位於索引 1。",
      "distractorAudit": [
        "22 是剩餘比例 0.28×約 80 的錯算。",
        "50 是總數。",
        "72 是百分數數字。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「36」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「累積次數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "0.72 與 50 相容。",
      "difficultyEvidence": "跨表示轉換，屬進階。",
      "literacyEvidence": "非素養題，未以無關情境包裝。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "1d2235a685d3ce66064b6b684fa035de35f34b4ca11202174dcff0cb0e88b6f9"
    },
    {
      "reviewId": "u09-s007-v010-semantic-r1",
      "questionId": "u09-s007-v010",
      "unitId": "u09",
      "skillId": "cumulative-frequency",
      "independentRecalculation": "15 分鐘內扣除 10 分鐘內，得到 13。",
      "correctChoiceCheck": "獨立計算得到「13 人」，位於索引 3。",
      "distractorAudit": [
        "8 是 10 分鐘內。",
        "21 是 15 分鐘內累積。",
        "加法或邊界誤算。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「13 人」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「累積次數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "『超過 10』排除前一累積；『不超過 15』包含上限。",
      "difficultyEvidence": "時間限制語句是必要條件。",
      "literacyEvidence": "完成時間區間決定學生是否需要額外輔導，情境不可刪除。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8fbcd361a22ebf47a9b4b1005a6bf7115373e492fb2c9807c30b663ba274964c"
    },
    {
      "reviewId": "u09-s007-v011-semantic-r1",
      "questionId": "u09-s007-v011",
      "unitId": "u09",
      "skillId": "cumulative-frequency",
      "independentRecalculation": "相鄰相減：週一 40；週二 95-40=55；週三 150-95=55；週四 198-150=48。",
      "correctChoiceCheck": "獨立計算得到「週二與週三並列，各 55 本」，位於索引 1。",
      "distractorAudit": [
        "198 是累積總量，不是週四單日。",
        "150 是累積到週三。",
        "週一 40 小於 55。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「週二與週三並列，各 55 本」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「累積次數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "題目允許並列，選項唯一。",
      "difficultyEvidence": "需完整還原並辨識並列。",
      "literacyEvidence": "圖書館累積紀錄若直接看最大值會錯判每日工作量，情境必要。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "53d9b61c5d25577a81321bd4b893e2ebea4d980ce4cb8c0ebc1ced43ccd11a07"
    },
    {
      "reviewId": "u09-s007-v012-semantic-r1",
      "questionId": "u09-s007-v012",
      "unitId": "u09",
      "skillId": "cumulative-frequency",
      "independentRecalculation": "逐週新增：120；260-120=140；390-260=130；500-390=110。",
      "correctChoiceCheck": "獨立計算得到「不正確，新增人數為 120、140、130、110」，位於索引 0。",
      "distractorAudit": [
        "累積值必然不減，不代表新增量增加。",
        "最後累積最多是正常結果。",
        "相鄰相減即可判斷。"
      ],
      "singleCorrectAnswerEvidence": "四個選項中只有「不正確，新增人數為 120、140、130、110」符合題意與計算。",
      "scopeEvidence": "題目直接檢核「累積次數」，未使用四分位數、盒狀圖或高中統計。",
      "languageAudit": "使用臺灣繁體中文，數值、單位與比較語句明確。",
      "ambiguityDecision": "第一週新增視為從 0 到 120。",
      "difficultyEvidence": "需辨識累積與流量差異。",
      "literacyEvidence": "公共衛生報告關心每週施打速度，必須由累積值還原新增量。",
      "decision": "pass",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "fdb193c32e8928dca8567ab4579bd79ba68a4bc1edeffe70b6c100c031c02cad"
    }
  ],
  "drawingSpecs": []
};
