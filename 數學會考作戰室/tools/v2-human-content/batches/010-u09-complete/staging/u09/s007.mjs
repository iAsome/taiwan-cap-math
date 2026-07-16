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
      "累積次數是從第一組開始一路加到目前組別的總和，因此數列必須保持不減，最後一個累積值就是資料總數。反向還原時，第一組次數等於第一個累積值，其餘每組用本組累積減前組累積；所有差值都應是非負整數，且重新累加後必須回到原表，這兩項可作完整驗算。",
      "區間語句須配合門檻解讀：小於較大上界的累積值減去小於較小上界的累積值，會留下兩門檻之間的人數；至少某門檻則可用全體減去小於該門檻。端點是否包含仍須依題目中的含或不含判定。",
      "累積量與每期新增量不能混用。累積值上升只表示總量沒有減少，不代表新增速度增加；要比較哪一期新增最多，必須先做相鄰差。累積相對次數則先乘全體筆數還原累積次數，再檢查結果是否符合整數資料。"
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
        "prompt": "單組次數依序為 3、5、4，求各組累積次數。",
        "solution": [
          "第一組累積為 3。",
          "第二組為 3+5=8。",
          "第三組為 8+4=12。"
        ],
        "answer": "累積次數為 3、8、12。",
        "why": "累積表的每一格都包含前面資料，所以要沿組序逐步加總；最後十二也等於三組次數總和，可同時驗證沒有漏組或重複計數。"
      },
      {
        "id": "L2",
        "prompt": "累積次數為 3、10、18、25、30，哪組本身次數最多？",
        "solution": [
          "相鄰相減得 3、7、8、7、5。",
          "比較單組次數，最大值 8 在第三組。"
        ],
        "answer": "第三組。",
        "why": "累積值天然越來越大，直接找最大一定偏向末組；先還原相鄰差才能比較同一意義的單組次數，並能看出第三組八次是唯一最大。"
      },
      {
        "id": "L3",
        "prompt": "小於 40 有 27 筆，全體 35 筆，求至少 40 的筆數。",
        "solution": [
          "全體分成小於 40 與至少 40 兩個互斥部分。",
          "35-27=8。"
        ],
        "answer": "8 筆。",
        "why": "小於四十與至少四十正好覆蓋全體且沒有重疊，所以用補集相減最直接；答案八與二十七相加回到三十五，可檢查門檻方向沒有顛倒。"
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
    "contentSha256": "dcadb6d98650e0fbe68710f1a8bb4ff2ca4561de47c1687aecd50c6f893421aa"
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
      "explanation": "累積次數是從第一組一路加到指定組。 累積次數表示從第一組一路加到指定組，因此第二組累積值同時包含第一、二組，計算三加五得八；第三組的四次尚未納入。",
      "steps": [
        "加第一組與第二組。",
        "先確認題目問到第二組為止。",
        "將第一組三次與第二組五次相加並選八。"
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
      "misconceptionTarget": "只抄該組次數 只抄第二組次數五，沒有把第一組一併累加。",
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
      "contentSha256": "8d9f061741bfd6aa7e2ac1babd7f4ca551a8cc0654ae124cd2a68172f7c8238d"
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
      "explanation": "不能把累積次數欄再次全部加總。 最後一個累積次數已把前面四組的資料各計一次，所以二十就是全體資料筆數；把四個累積值再相加會重複計入早期資料。",
      "steps": [
        "找到最後一列累積次數。",
        "找出累積表最後一組的數值。",
        "直接讀得總資料數二十並排除重複加總。"
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
      "misconceptionTarget": "把累積欄再加總 將各組累積值再次相加，造成同一資料重複計數。",
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
      "contentSha256": "8e3c375984156d98ff2dea3199000e1434810377422a4fd0233881a442ad5b6f"
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
      "explanation": "由累積值還原單組次數要相鄰相減。 第二個累積值十四包含第一組的六次與第二組本身次數，因此以十四減六還原第二組為八次；十四不是單組次數。",
      "steps": [
        "用 14 減 6。",
        "用第二組累積十四減去前一組累積六。",
        "得到八並以六加八等於十四驗算。"
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
      "misconceptionTarget": "把累積值當單組次數 把第二個累積值十四直接當成第二組本身次數。",
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
      "contentSha256": "652a6f388e78a33e82d09da5db2fa9ef6c262e6a83986cd5e32e8fd58770b367"
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
      "explanation": "要包含指定組本身。 第三組累積次數須包含前三組的二、七、五次，依序相加為十四；第四組六次位於指定範圍之後，不能提前加入。",
      "steps": [
        "依序加前三組。",
        "圈出第一至第三組三個次數。",
        "計算二加七加五等於十四並選第二項。"
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
      "misconceptionTarget": "漏掉指定組或多加後組 只加第二、三組或誤把第四組也納入第三組累積值。",
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
      "contentSha256": "204183769554a669de44273ed9e996c499b472f49d91fcfefd8399505d69269f"
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
      "explanation": "單組次數應加在前一累積值上。 第三組累積值等於前兩組累積十二再加第三組本身八次，所以未知數為二十；最後累積二十五還含第四組，不能用來代替。",
      "steps": [
        "找前一累積 12。",
        "加第三組次數 8。",
        "以十二加八得二十，再確認二十不超過末累積二十五。"
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
      "misconceptionTarget": "把單組次數直接填入 把第三組單組次數八當成累積值，或直接抄最後累積。",
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
      "contentSha256": "4aa83b6869db42c92b3a8610e6fd39394ec283b5cbebe8c666d7a557ee5bb98c"
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
      "explanation": "累積門檻相減可得到中間區間人數。 小於二十的十一人已包含小於十的四人，兩個門檻相減正好留下十以上且未滿二十的七人；小於三十的數值與本區間無關。",
      "steps": [
        "辨認兩個門檻。",
        "用較大門檻累積減較小門檻累積。",
        "以十一減四得七，並核對區間端點為十含、二十不含。"
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
      "misconceptionTarget": "把累積人數直接當區間人數 直接抄小於二十的十一人，忘記扣掉小於十者。",
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
      "contentSha256": "eb9c6aae66378b2372fcd1eb6446eb168b1aa9667892ba2a657f878ddcc2b4ce"
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
      "explanation": "比較累積表時需先還原每組，不能直接找最大累積值。 各組本身次數要由相鄰累積值作差，依序為三、七、八、七、五；最大值八只出現在第三組，因此答案唯一，不是累積值最大的第五組。",
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
      "misconceptionTarget": "把最後累積值最大誤認為最後組次數最多 用累積值大小判單組最多，誤選最後一組而未相減。",
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
      "contentSha256": "13a723a8234be7b132931fa49e58726b4ca97b2b7fd2b3d30c6ed4ebe57449a7"
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
      "explanation": "『至少』與『小於』互為補集。 全體三十五筆可分成小於四十的二十七筆與至少四十的其餘資料，所以用補集得八筆；小於二十的十二筆早已包含於二十七筆。",
      "steps": [
        "找總數 35。",
        "扣除小於 40 的 27。",
        "以總數三十五減小於四十的二十七，得到至少四十共八筆。"
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
      "misconceptionTarget": "用錯累積門檻 用三十五減十二，錯把至少二十當成至少四十。",
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
      "contentSha256": "838949371b5fb62d43102ca2da2f6fcf10342d646fe861694b0f4eee86672cea"
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
      "explanation": "相對次數乘總數回到實際筆數。 累積相對次數零點七二代表到該組占全體百分之七十二，乘總數五十得到三十六筆；三十六是整數，也符合題目條件。",
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
      "misconceptionTarget": "把百分數數字當筆數 把零點七二當成七十二筆，沒有乘上總資料數。",
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
      "contentSha256": "591b839afb58b0a704a1396e6b4b6a25456899c495e08fe7052189e4b5c3d96c"
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
      "explanation": "累積資料可求兩門檻間人數。 十五分鐘內的二十一人包含十分鐘內八人，兩個累積門檻相減得十三，正好保留超過十分鐘且不超過十五分鐘的人。",
      "steps": [
        "辨認上限與下限累積值。",
        "相減。",
        "依題意用二十一減八得十三人，並核對兩端點描述。"
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
      "misconceptionTarget": "直接抄上限累積值 直接讀十五分鐘內二十一人，未扣除十分鐘內八人。",
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
      "contentSha256": "815ebce178177c394a2fe8528548d8b25364d63d9839cd640b66fb91eb5dd99b"
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
      "explanation": "累積量不能直接比較單日表現。 逐日新增量須以前後累積值相減，週二與週三都增加五十五本，週四只增加四十八本；因此最大值是並列而非單獨週三。",
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
      "misconceptionTarget": "把最高累積值當最高單日量 把累積一百九十八當成週四單日量，或漏看並列。",
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
      "contentSha256": "2beb19aff6d7a7af1e30a3f97f5be30940c26b518ef057792e7f9025fd22dd5b"
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
      "explanation": "檢核趨勢敘述時要分析新增量，而非累積曲線本身。 累積人數增加只表示總量沒有下降，是否持續加速必須比較每週相鄰差；新增量由一百四十降為一百三十再降為一百一十，故報告不成立。",
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
      "misconceptionTarget": "把累積持續增加誤當新增量持續增加 看到累積折線上升，就誤認每週新增量也持續增加。",
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
      "contentSha256": "86abfdbb58cdf1d7bba031a33847825dfca6185d39f6e490af65d54394e94d01"
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
        "未滿70分占17/30=56又2/3%（約56.7%）。",
        "四個區間次數加上未滿五十分的三人為三十人，與最後累積值一致；比例分母必須用全體三十人，而不是只用已列出的某一區間。"
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
      "contentSha256": "f3dce116329bde5a4087d5f8f3dc453c9976e8f46d277f54ba0924755f73525f",
      "commonErrors": [
        "把八、十七、二十六、三十等累積值直接當成各區間次數，未作相鄰相減。",
        "計算未滿七十分比例時以十七除以二十六，錯把未滿八十分者當全體。"
      ]
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
      "contentSha256": "d0ad405143e448b99aba0840ae61c5fc7cfe0050aa52bc9fa4ff997aa17d9b5a",
      "commonErrors": [
        "把五天累積值全部相加而重複計入早期報名者，得到二百二十七人。",
        "相鄰相減後漏看第三、四天同為十八人，錯把新增最多寫成單獨一天。"
      ]
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
