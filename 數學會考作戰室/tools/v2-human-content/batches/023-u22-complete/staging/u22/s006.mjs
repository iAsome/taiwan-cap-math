// Emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u22-s006-lecture-r1",
    "unitId": "u22",
    "numericUnitId": 22,
    "topicId": "u22-quartiles",
    "skillId": "iqr-outlier-basic",
    "lockedSkillOrder": 6,
    "title": "IQR 與離群值：計算 IQR 並以 1.5×IQR 判斷離群值界線。",
    "originalLockedTitle": "IQR 與離群值",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能計算IQR與1.5倍IQR。",
      "能求上下離群界線。",
      "能分辨等於界線與超出界線。",
      "能把離群標記解讀為查核訊號而非定罪。"
    ],
    "prerequisiteSkillIds": [
      "box-plot-components"
    ],
    "prerequisiteBridge": "承接五數摘要與IQR。",
    "glossary": [
      {
        "term": "下界",
        "definition": "Q1-1.5×IQR。"
      },
      {
        "term": "上界",
        "definition": "Q3+1.5×IQR。"
      },
      {
        "term": "離群值候選",
        "definition": "小於下界或大於上界的觀測值。"
      },
      {
        "term": "穩健性",
        "definition": "統計量對少數極端值相對不敏感的性質。"
      }
    ],
    "notation": [
      {
        "symbol": "IQR=Q3-Q1",
        "meaning": "中間50%跨度。"
      },
      {
        "symbol": "下界=Q1-1.5IQR",
        "meaning": "低端判定界線。"
      },
      {
        "symbol": "上界=Q3+1.5IQR",
        "meaning": "高端判定界線。"
      }
    ],
    "conceptNarrative": [
      "離群規則先以Q1、Q3得到IQR，再向兩側延伸1.5倍IQR。",
      "觀測值必須嚴格小於下界或嚴格大於上界才被標記；等於界線不算超出。",
      "離群值可能來自量測錯誤、輸入錯誤、罕見但真實事件或不同族群，規則本身不判定原因。",
      "刪除離群值會改變分析，必須有事先規則與實質理由。",
      "IQR=0時上下界重合，任何不同值都會超界，這是數學結果但需審慎解讀。"
    ],
    "formalDefinitions": [
      {
        "name": "1.5IQR規則",
        "statement": "以四分位距建立內圍欄的常用判定。"
      },
      {
        "name": "界線值",
        "statement": "恰好等於上下界，仍位於允許範圍內。"
      }
    ],
    "formulas": [
      {
        "formula": "x<Q1-1.5IQR",
        "conditions": [
          "x為下端離群候選。"
        ],
        "meaning": "x為下端離群候選。"
      },
      {
        "formula": "x>Q3+1.5IQR",
        "conditions": [
          "x為上端離群候選。"
        ],
        "meaning": "x為上端離群候選。"
      }
    ],
    "nonApplicableCases": [
      "不能把低於Q1的所有值都當離群。",
      "不能把等於界線的值標為離群。",
      "不能僅由離群標記判定作弊、故障或造假。",
      "題目若使用不同倍數或定義，必須依題幹。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "算IQR",
        "check": "Q3-Q1。"
      },
      {
        "step": 2,
        "instruction": "算延伸量",
        "check": "1.5×IQR。"
      },
      {
        "step": 3,
        "instruction": "算兩界線",
        "check": "Q1減、Q3加。"
      },
      {
        "step": 4,
        "instruction": "逐值比較",
        "check": "注意嚴格不等號。"
      },
      {
        "step": 5,
        "instruction": "說明後續",
        "check": "標記後查核，不直接刪除。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "Q1=12、Q3=20",
        "solutionSteps": [
          "IQR8，界線0與32。"
        ],
        "answer": "IQR8，界線0與32。"
      },
      {
        "exampleId": "L2",
        "prompt": "Q1=20、Q3=32",
        "solutionSteps": [
          "IQR12，界線2與50；2與50不算離群。"
        ],
        "answer": "IQR12，界線2與50；2與50不算離群。"
      },
      {
        "exampleId": "L3",
        "prompt": "Q1=15、Q3=23，候選-1、3、36",
        "solutionSteps": [
          "界線3與35，所以-1與36離群。"
        ],
        "answer": "界線3與35，所以-1與36離群。"
      },
      {
        "exampleId": "L4",
        "prompt": "IQR=0且Q1=Q3=7",
        "solutionSteps": [
          "界線都7，任何非7值超界。"
        ],
        "answer": "界線都7，任何非7值超界。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "用Q1、Q3直接作界線",
        "why": "還需加減1.5IQR。",
        "correction": "還需加減1.5IQR。"
      },
      {
        "mistake": "只檢查一側",
        "why": "兩端都要檢查。",
        "correction": "兩端都要檢查。"
      },
      {
        "mistake": "界線值也刪除",
        "why": "規則是嚴格超出。",
        "correction": "規則是嚴格超出。"
      },
      {
        "mistake": "發現離群就改資料",
        "why": "先保留原始值並查核。",
        "correction": "先保留原始值並查核。"
      }
    ],
    "selfCheck": [
      "IQR是否算對？",
      "1.5倍是否乘對？",
      "上下界是否從正確四分位數出發？",
      "比較符號是否嚴格？",
      "結論是否超過統計證據？"
    ],
    "summary": [
      "IQR建立中段尺度。",
      "上下界是Q1與Q3向外延伸1.5IQR。",
      "等於界線不算離群。",
      "離群是查核起點，不是原因判決。"
    ],
    "connections": {
      "previous": "承接五數摘要與IQR。",
      "next": [
        "下一技能用累積圖定位四分位位置。",
        "之後比較全距與IQR對端點的敏感度。"
      ]
    },
    "figureReferences": [
      "fig-u22-boxplot-outlier"
    ],
    "figureAccessibility": [
      {
        "figureId": "fig-u22-boxplot-outlier",
        "altText": "數軸顯示Q1為18、Q3為30、下離群界線0、上離群界線48，候選點負1、0、48、49。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u22-s006-v001",
        "u22-s006-v002",
        "u22-s006-v003",
        "u22-s006-v004",
        "u22-s006-v005",
        "u22-s006-v006",
        "u22-s006-v007",
        "u22-s006-v008",
        "u22-s006-v009",
        "u22-s006-v010",
        "u22-s006-v011",
        "u22-s006-v012"
      ],
      "constructedResponseIds": [
        "u22-s006-cr001",
        "u22-s006-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "skillSpecificReviewEvidence": "手算三組界線並逐值比較；初稿曾出現一題下界與上界無法同時成立，已改為一致資料並將矛盾檢查列入稽核。",
      "futureKnowledgeCheck": "pass; all methods use this skill or declared prerequisites only",
      "contentBoundary": "計算 IQR 並以 1.5×IQR 判斷離群值界線。",
      "reviewVersion": "human-lecture-review-u22-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "776dda15408e7bfbeacdb84d915b987bc79a0495b8a28ca316799526f1e25b0d"
  },
  "mcQuestions": [
    {
      "questionId": "u22-s006-v001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "若 Q1=10、Q3=18，IQR是多少？",
      "text": "若 Q1=10、Q3=18，IQR是多少？",
      "givenConditions": [],
      "target": "計算IQR",
      "choices": [
        "10",
        "8",
        "18",
        "28"
      ],
      "answerIndex": 1,
      "independentSolution": "IQR=Q3-Q1=18-10=8。",
      "explanation": "IQR=Q3-Q1=18-10=8。",
      "steps": [
        "套用IQR公式。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": false,
          "reason": "把Q1本身當IQR。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "正確。獨立重算：IQR=Q3-Q1=18-10=8。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "把Q3本身當IQR。"
        },
        {
          "choice": "28",
          "truth": false,
          "reason": "把兩者相加。"
        }
      ],
      "misconceptionTarget": "把四分位距誤作加總。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "Q3≥Q1，結果非負。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算IQR",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算IQR",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "477701c4fa35b56af41ea266f7c236ecc28ca074f7cccbcb01631c6b31ccfaa6"
    },
    {
      "questionId": "u22-s006-v002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "Q1=12、Q3=20，依1.5×IQR規則，下界為多少？",
      "text": "Q1=12、Q3=20，依1.5×IQR規則，下界為多少？",
      "givenConditions": [],
      "target": "計算離群下界",
      "choices": [
        "-8",
        "4",
        "8",
        "0"
      ],
      "answerIndex": 3,
      "independentSolution": "IQR=8，1.5IQR=12，下界=Q1-12=0。",
      "explanation": "IQR=8，1.5IQR=12，下界=Q1-12=0。",
      "steps": [
        "算IQR=8。",
        "算1.5IQR=12。",
        "12-12=0。"
      ],
      "optionAnalysis": [
        {
          "choice": "-8",
          "truth": false,
          "reason": "誤用Q1-2.5×IQR。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "只減1×IQR。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "把IQR的一半當扣除量。"
        },
        {
          "choice": "0",
          "truth": true,
          "reason": "正確。獨立重算：IQR=8，1.5IQR=12，下界=Q1-12=0。"
        }
      ],
      "misconceptionTarget": "忘記先算1.5倍IQR。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "界線等於0本身不算超出。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算離群下界",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算離群下界",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "96c08c5c9774abc62c4f3ffa7de2e7b81654798e3f35643539da878b8f38d9e7"
    },
    {
      "questionId": "u22-s006-v003",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某盒狀圖的Q3=14、IQR=8。依1.5×IQR規則，高端資料必須大於哪個界線才會被標記為離群候選？",
      "text": "某盒狀圖的Q3=14、IQR=8。依1.5×IQR規則，高端資料必須大於哪個界線才會被標記為離群候選？",
      "givenConditions": [],
      "target": "計算離群上界",
      "choices": [
        "22",
        "20",
        "26",
        "30"
      ],
      "answerIndex": 2,
      "independentSolution": "高端界線=Q3+1.5×IQR=14+1.5×8=14+12=26；只有嚴格大於26才會被標記。",
      "explanation": "高端界線=Q3+1.5×IQR=14+1.5×8=14+12=26；只有嚴格大於26才會被標記。",
      "steps": [
        "算1.5×8=12。",
        "由Q3向高端加12。",
        "界線為26並保留嚴格大於。"
      ],
      "optionAnalysis": [
        {
          "choice": "22",
          "truth": false,
          "reason": "只在Q3上加1倍IQR。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "把1.5IQR誤算成6。"
        },
        {
          "choice": "26",
          "truth": true,
          "reason": "正確。獨立重算：高端界線=Q3+1.5×IQR=14+1.5×8=14+12=26；只有嚴格大於26才會被標記。"
        },
        {
          "choice": "30",
          "truth": false,
          "reason": "在Q3上加2倍IQR。"
        }
      ],
      "misconceptionTarget": "把IQR倍數或嚴格超界條件讀錯。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "等於26不算超出；本題問的是界線，不是某一候選值是否離群。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：由Q3與IQR求高端離群界線",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由Q3與IQR求高端離群界線",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "ff845b93b9ea46499b7dfc5e7557ad3fecb25a08ee9faba78890abb7f3e84bf1"
    },
    {
      "questionId": "u22-s006-v004",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一組資料Q1=20、Q3=32。下列哪個值依1.5×IQR規則屬離群值？",
      "text": "一組資料Q1=20、Q3=32。下列哪個值依1.5×IQR規則屬離群值？",
      "givenConditions": [],
      "target": "依界線分類候選值",
      "choices": [
        "55",
        "2",
        "14",
        "50"
      ],
      "answerIndex": 0,
      "independentSolution": "IQR=12，1.5IQR=18；界線為2與50。只有55>50，所以55是離群值。",
      "explanation": "IQR=12，1.5IQR=18；界線為2與50。只有55>50，所以55是離群值。",
      "steps": [
        "算兩界線2、50。",
        "逐項比較並注意嚴格超出。"
      ],
      "optionAnalysis": [
        {
          "choice": "55",
          "truth": true,
          "reason": "正確。獨立重算：IQR=12，1.5IQR=18；界線為2與50。只有55>50，所以55是離群值。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "下界=2，等於界線不算離群。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "介於界線內。"
        },
        {
          "choice": "50",
          "truth": false,
          "reason": "上界=50，等於界線不算離群。"
        }
      ],
      "misconceptionTarget": "把等於界線的值也判為離群。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "採「小於下界或大於上界」才算離群。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：依界線分類候選值",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "依界線分類候選值",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "06fa9761490b206c3ebbe58443e0032fbf8e3564ec9cff6ca01015b959271b52"
    },
    {
      "questionId": "u22-s006-v005",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "Q1=15、Q3=23，資料中有 -1、3、15、23、36。哪些是離群值？",
      "text": "Q1=15、Q3=23，資料中有 -1、3、15、23、36。哪些是離群值？",
      "givenConditions": [],
      "target": "同時判斷上下端離群值",
      "choices": [
        "只有-1",
        "只有36",
        "-1 與 36",
        "3與36"
      ],
      "answerIndex": 2,
      "independentSolution": "IQR=8，1.5IQR=12；下界3，上界35。-1<3、36>35，兩者為離群值；3在界線上。",
      "explanation": "IQR=8，1.5IQR=12；下界3，上界35。-1<3、36>35，兩者為離群值；3在界線上。",
      "steps": [
        "求界線3與35。",
        "比較每個候選值。"
      ],
      "optionAnalysis": [
        {
          "choice": "只有-1",
          "truth": false,
          "reason": "漏看上端離群。"
        },
        {
          "choice": "只有36",
          "truth": false,
          "reason": "漏看下端離群。"
        },
        {
          "choice": "-1 與 36",
          "truth": true,
          "reason": "正確。獨立重算：IQR=8，1.5IQR=12；下界3，上界35。-1<3、36>35，兩者為離群值；3在界線上。"
        },
        {
          "choice": "3與36",
          "truth": false,
          "reason": "3等於下界，不算超出。"
        }
      ],
      "misconceptionTarget": "只檢查單側或把界線值算離群。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "負數資料允許，界線規則照常。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：同時判斷上下端離群值",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "同時判斷上下端離群值",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "7c365b951ddbfb50b976c60ebe3cb10e7d28345ed0b5b524f5656ee0e6d07ac0"
    },
    {
      "questionId": "u22-s006-v006",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某資料IQR=0。依1.5×IQR規則，下列敘述何者正確？",
      "text": "某資料IQR=0。依1.5×IQR規則，下列敘述何者正確？",
      "givenConditions": [],
      "target": "處理零IQR邊界",
      "choices": [
        "不存在離群值",
        "上下界都等於Q1=Q3，任何不同值都會被標記",
        "所有值都不是離群值",
        "只能有上端離群值"
      ],
      "answerIndex": 1,
      "independentSolution": "IQR=0表示Q1=Q3=q，界線均為q；小於q或大於q的值都超出界線。",
      "explanation": "IQR=0表示Q1=Q3=q，界線均為q；小於q或大於q的值都超出界線。",
      "steps": [
        "代入1.5×0=0。",
        "上下界皆為q。"
      ],
      "optionAnalysis": [
        {
          "choice": "不存在離群值",
          "truth": false,
          "reason": "IQR=0反而使界線重合。"
        },
        {
          "choice": "上下界都等於Q1=Q3，任何不同值都會被標記",
          "truth": true,
          "reason": "正確。獨立重算：IQR=0表示Q1=Q3=q，界線均為q；小於q或大於q的值都超出界線。"
        },
        {
          "choice": "所有值都不是離群值",
          "truth": false,
          "reason": "不同於共同四分位值者會超界。"
        },
        {
          "choice": "只能有上端離群值",
          "truth": false,
          "reason": "上下兩端都可能。"
        }
      ],
      "misconceptionTarget": "以為IQR為0會讓規則失效。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "此為規則的數學結果，實務解讀仍需說明大量重複值。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：處理零IQR邊界",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "處理零IQR邊界",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "5170bfd7f42bf579b97b9e3c8bdb8e1f3db558476ef231cf41ba1a492696b4d1"
    },
    {
      "questionId": "u22-s006-v007",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "若Q1=8、某候選值32恰為上界，且使用1.5×IQR規則，Q3可能是多少？",
      "text": "若Q1=8、某候選值32恰為上界，且使用1.5×IQR規則，Q3可能是多少？",
      "givenConditions": [],
      "target": "由離群界線反求Q3",
      "choices": [
        "16",
        "18",
        "20",
        "17.6"
      ],
      "answerIndex": 3,
      "independentSolution": "設Q3=x，IQR=x-8，上界x+1.5(x-8)=32。2.5x-12=32，x=17.6。",
      "explanation": "設Q3=x，IQR=x-8，上界x+1.5(x-8)=32。2.5x-12=32，x=17.6。",
      "steps": [
        "建立x+1.5(x-8)=32。",
        "解得2.5x=44。",
        "x=17.6。"
      ],
      "optionAnalysis": [
        {
          "choice": "16",
          "truth": false,
          "reason": "上界=16+1.5×8=28。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "上界=18+15=33。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "上界=20+18=38。"
        },
        {
          "choice": "17.6",
          "truth": true,
          "reason": "正確。獨立重算：設Q3=x，IQR=x-8，上界x+1.5(x-8)=32。2.5x-12=32，x=17.6。"
        }
      ],
      "misconceptionTarget": "把IQR固定誤認為Q1。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "x≥8且17.6符合；32等於界線不算離群。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由離群界線反求Q3",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由離群界線反求Q3",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "936f61f1cbc0a489189333edcf8804a5dd182a30477bfc15f494a7db456684e1"
    },
    {
      "questionId": "u22-s006-v008",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一組資料加入一個非常大的值後，Q1與Q3都不變。下列何者一定不變？",
      "text": "一組資料加入一個非常大的值後，Q1與Q3都不變。下列何者一定不變？",
      "givenConditions": [],
      "target": "分析加入極端值的影響",
      "choices": [
        "IQR與兩條離群界線",
        "全距",
        "平均數",
        "資料筆數"
      ],
      "answerIndex": 0,
      "independentSolution": "IQR只由Q1、Q3決定，兩者不變則IQR和Q1±1.5IQR、Q3±1.5IQR都不變。",
      "explanation": "IQR只由Q1、Q3決定，兩者不變則IQR和Q1±1.5IQR、Q3±1.5IQR都不變。",
      "steps": [
        "鎖定Q1、Q3不變。",
        "推得IQR與界線不變。"
      ],
      "optionAnalysis": [
        {
          "choice": "IQR與兩條離群界線",
          "truth": true,
          "reason": "正確。獨立重算：IQR只由Q1、Q3決定，兩者不變則IQR和Q1±1.5IQR、Q3±1.5IQR都不變。"
        },
        {
          "choice": "全距",
          "truth": false,
          "reason": "最大值可能改變，使全距增加。"
        },
        {
          "choice": "平均數",
          "truth": false,
          "reason": "加入大值通常改變平均數。"
        },
        {
          "choice": "資料筆數",
          "truth": false,
          "reason": "加入資料後筆數必變。"
        }
      ],
      "misconceptionTarget": "把穩健位置量與端點、平均混淆。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "題目已明定Q1、Q3不變，無需判斷其是否通常會變。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：分析加入極端值的影響",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "分析加入極端值的影響",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "f2c7ceba7c4051190bae412898a1f5d6a10c679b5960d6eb2685a04af8c6887d"
    },
    {
      "questionId": "u22-s006-v009",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某資料的下離群界線為5，且Q1=11。依1.5×IQR規則，Q3為何？",
      "text": "某資料的下離群界線為5，且Q1=11。依1.5×IQR規則，Q3為何？",
      "givenConditions": [],
      "target": "檢查離群界線資料是否相容",
      "choices": [
        "13",
        "15",
        "17",
        "19"
      ],
      "answerIndex": 1,
      "independentSolution": "設IQR=d。由11-1.5d=5，得1.5d=6、d=4，因此Q3=11+4=15。",
      "explanation": "設IQR=d。由11-1.5d=5，得1.5d=6、d=4，因此Q3=11+4=15。",
      "steps": [
        "列11-1.5d=5。",
        "解得d=4。",
        "Q3=Q1+IQR=15。"
      ],
      "optionAnalysis": [
        {
          "choice": "13",
          "truth": false,
          "reason": "會使IQR=2，下界為8。"
        },
        {
          "choice": "15",
          "truth": true,
          "reason": "正確。獨立重算：設IQR=d。由11-1.5d=5，得1.5d=6、d=4，因此Q3=11+4=15。"
        },
        {
          "choice": "17",
          "truth": false,
          "reason": "會使IQR=6，下界為2。"
        },
        {
          "choice": "19",
          "truth": false,
          "reason": "會使IQR=8，下界為-1。"
        }
      ],
      "misconceptionTarget": "由單一界線反求IQR時漏除以1.5。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "Q3=15≥Q1，代回下界15? 應以Q1=11：11-1.5×4=5，條件一致。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由下界反求Q3",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由下界反求Q3",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "ba6606996d3718cb367a5008056224fd489e58432efae2928bd6c39070643b45"
    },
    {
      "questionId": "u22-s006-v010",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "感測器讀值的Q1=98、Q3=102。依1.5×IQR規則，哪個讀值應先列為高端異常候選？",
      "text": "感測器讀值的Q1=98、Q3=102。依1.5×IQR規則，哪個讀值應先列為高端異常候選？",
      "givenConditions": [],
      "target": "用IQR規則篩選異常讀值",
      "choices": [
        "106",
        "108",
        "109",
        "102"
      ],
      "answerIndex": 2,
      "independentSolution": "IQR=4，上界=102+6=108；109>108，因此列為高端離群候選。",
      "explanation": "IQR=4，上界=102+6=108；109>108，因此列為高端離群候選。",
      "steps": [
        "算IQR=4。",
        "算上界108。",
        "比較109。"
      ],
      "optionAnalysis": [
        {
          "choice": "106",
          "truth": false,
          "reason": "上界=108，106仍在界內。"
        },
        {
          "choice": "108",
          "truth": false,
          "reason": "等於上界，不屬超出。"
        },
        {
          "choice": "109",
          "truth": true,
          "reason": "正確。獨立重算：IQR=4，上界=102+6=108；109>108，因此列為高端離群候選。"
        },
        {
          "choice": "102",
          "truth": false,
          "reason": "只是Q3。"
        }
      ],
      "misconceptionTarget": "把等於上界的讀值標為離群。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "estimatedTimeSec": 180,
      "unitCheck": "讀值使用同一校正尺度。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "統計離群只表示需查核，不等於儀器必故障。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：用IQR規則篩選異常讀值",
      "literacyContextNecessity": "感測器維護需要客觀篩選異常候選，再配合工程判斷。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "用IQR規則篩選異常讀值",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "7aed3663a52e6d05418646943081e7f6931f30367324c473133fd66d39349b79"
    },
    {
      "questionId": "u22-s006-v011",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一批包裹重量Q1=2.4、Q3=3.2公斤。重量0.9公斤是否為下端離群值？",
      "text": "一批包裹重量Q1=2.4、Q3=3.2公斤。重量0.9公斤是否為下端離群值？",
      "givenConditions": [],
      "target": "在有單位情境判斷離群",
      "choices": [
        "是，因下界為1.2公斤",
        "否，因0.9仍為正數",
        "否，因下界為0.8公斤",
        "是，因下界為2.4公斤"
      ],
      "answerIndex": 0,
      "independentSolution": "IQR=0.8公斤，1.5IQR=1.2公斤，下界=2.4-1.2=1.2公斤；0.9<1.2，所以是下端離群值。",
      "explanation": "IQR=0.8公斤，1.5IQR=1.2公斤，下界=2.4-1.2=1.2公斤；0.9<1.2，所以是下端離群值。",
      "steps": [
        "IQR=0.8。",
        "下界=1.2。",
        "0.9小於1.2。"
      ],
      "optionAnalysis": [
        {
          "choice": "是，因下界為1.2公斤",
          "truth": true,
          "reason": "正確。獨立重算：IQR=0.8公斤，1.5IQR=1.2公斤，下界=2.4-1.2=1.2公斤；0.9<1.2，所以是下端離群值。"
        },
        {
          "choice": "否，因0.9仍為正數",
          "truth": false,
          "reason": "是否離群與正負無關。"
        },
        {
          "choice": "否，因下界為0.8公斤",
          "truth": false,
          "reason": "IQR或1.5倍計算錯誤。"
        },
        {
          "choice": "是，因下界為2.4公斤",
          "truth": false,
          "reason": "把Q1直接當下界。"
        }
      ],
      "misconceptionTarget": "只以數值是否合理或為正判斷。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "estimatedTimeSec": 180,
      "unitCheck": "計算與答案均使用公斤。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "所有重量以公斤表示，無需換算。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在有單位情境判斷離群",
      "literacyContextNecessity": "包裹重量異常會影響運費與分流，離群判斷有實務作用。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "在有單位情境判斷離群",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "a43d72161d411da978055d006d0250b189395297f177ca944caced273bd77a0a"
    },
    {
      "questionId": "u22-s006-v012",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某班測驗Q1=60、Q3=84。依1.5×IQR規則得到下界24、上界120。老師說「25分學生一定作弊」。哪個評語最恰當？",
      "text": "某班測驗Q1=60、Q3=84。依1.5×IQR規則得到下界24、上界120。老師說「25分學生一定作弊」。哪個評語最恰當？",
      "givenConditions": [],
      "target": "限制離群值的解釋",
      "choices": [
        "25分低於Q1，所以一定離群",
        "25分高於下界，所以一定正常且不需關心",
        "只要低於中位數就可判作弊",
        "25分不是統計離群值，而且離群也不能直接證明作弊"
      ],
      "answerIndex": 3,
      "independentSolution": "25介於24與120之間，依規則不是離群值；即使某分數超界，也只表示統計上異常，需要其他證據。",
      "explanation": "25介於24與120之間，依規則不是離群值；即使某分數超界，也只表示統計上異常，需要其他證據。",
      "steps": [
        "比較25與下界24。",
        "區分統計標記與因果判定。"
      ],
      "optionAnalysis": [
        {
          "choice": "25分低於Q1，所以一定離群",
          "truth": false,
          "reason": "低於Q1不等於低於下界。"
        },
        {
          "choice": "25分高於下界，所以一定正常且不需關心",
          "truth": false,
          "reason": "非離群也不代表無需教育診斷。"
        },
        {
          "choice": "只要低於中位數就可判作弊",
          "truth": false,
          "reason": "中位數與作弊無直接關係。"
        },
        {
          "choice": "25分不是統計離群值，而且離群也不能直接證明作弊",
          "truth": true,
          "reason": "正確。獨立重算：25介於24與120之間，依規則不是離群值；即使某分數超界，也只表示統計上異常，需要其他證據。"
        }
      ],
      "misconceptionTarget": "把統計離群等同不當行為證據。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "界線已由題目提供，不需重算；結論限定統計判斷。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：限制離群值的解釋",
      "literacyContextNecessity": "教育資料涉及個人判斷，必須避免由單一統計標記推定行為。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "限制離群值的解釋",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "807cfb594b4e1c21a17afebebcbe8d8805f4105bd341e7ab2c6ea5f1dfa6702e"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u22-s006-cr001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "某資料Q1=18、Q3=30。依1.5×IQR規則求上下界，並判斷 -1、0、48、49 哪些是離群值。",
      "requiredWork": [
        "計算IQR與1.5IQR。",
        "求上下界。",
        "注意等於界線不算超出。"
      ],
      "standardSolution": [
        "IQR=12，1.5IQR=18。",
        "下界=18-18=0，上界=30+18=48。",
        "-1<0與49>48為離群值；0與48等於界線，不算離群。"
      ],
      "reasoningSteps": [
        "IQR=12，1.5IQR=18。",
        "下界=18-18=0，上界=30+18=48。",
        "-1<0與49>48為離群值；0與48等於界線，不算離群。"
      ],
      "alternativeMethods": [
        "可在數線標0與48，再逐點比較。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "IQR12、界線0與48、分類-1與49均正確並說明嚴格不等號。"
        },
        {
          "score": 2,
          "criteria": "界線正確但把其中一個等號值誤判。"
        },
        {
          "score": 1,
          "criteria": "能正確算IQR與至少一條界線。"
        },
        {
          "score": 0,
          "criteria": "以Q1、Q3直接作離群界線。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若IQR算錯，後續上下界依其IQR公式正確可給方法分，最高2分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "把0或48也列離群。",
        "上界用Q1+18。",
        "只檢查高端。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "IQR=12，1.5IQR=18。；下界=18-18=0，上界=30+18=48。；-1<0與49>48為離群值；0與48等於界線，不算離群。",
        "alternativeMethodCheck": "可在數線標0與48，再逐點比較。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "0d81204383b566353051038d59f5b2674345796aec55c11faac1f625bf06dcb9"
    },
    {
      "questionId": "u22-s006-cr002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "iqr-outlier-basic",
      "lockedSkillOrder": 6,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "一批讀值原本Q1=98、Q3=102。加入讀值130後，題目保證Q1、Q3不變。說明IQR與離群界線是否改變，並判斷130。",
      "requiredWork": [
        "計算原IQR與界線。",
        "利用Q1、Q3不變。",
        "解釋離群只是查核候選。"
      ],
      "standardSolution": [
        "IQR=4，界線為92與108。",
        "因Q1、Q3不變，IQR與兩界線都不變。",
        "130>108，是高端離群候選，應查核但不能僅此判定儀器故障。"
      ],
      "reasoningSteps": [
        "IQR=4，界線為92與108。",
        "因Q1、Q3不變，IQR與兩界線都不變。",
        "130>108，是高端離群候選，應查核但不能僅此判定儀器故障。"
      ],
      "alternativeMethods": [
        "也可先說所有公式只依Q1、Q3，再代入計算。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "數值、是否改變、130分類與解釋限制全部正確。"
        },
        {
          "score": 2,
          "criteria": "數值正確但缺少查核限制，或限制正確但一處算術錯。"
        },
        {
          "score": 1,
          "criteria": "知道IQR與界線不變且130偏高。"
        },
        {
          "score": 0,
          "criteria": "說加入大值必使IQR增加或直接判故障。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若只缺統計倫理說明，最高2分；數學與解釋均完整才3分。",
      "unitNotationRules": "讀值使用同一校正尺度；機率與界線本身無額外單位。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "把全距增加誤寫成IQR增加。",
        "說130一定是錯誤資料。",
        "上界算成104。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "IQR=4，界線為92與108。；因Q1、Q3不變，IQR與兩界線都不變。；130>108，是高端離群候選，應查核但不能僅此判定儀器故障。",
        "alternativeMethodCheck": "也可先說所有公式只依Q1、Q3，再代入計算。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "b242e75dacb0e9583f688d22fa1940858b82b70a10a044cb2378e93f72665822"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u22-s006-v001",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "contentSha256": "477701c4fa35b56af41ea266f7c236ecc28ca074f7cccbcb01631c6b31ccfaa6",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "IQR=Q3-Q1=18-10=8。",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「8」；其餘選項逐項排除：「10」：把Q1本身當IQR。；「18」：把Q3本身當IQR。；「28」：把兩者相加。",
        "undefinedSymbol": "題幹術語均已在「IQR 與離群值」講義定義；實際目標為「計算IQR」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "Q3≥Q1，結果非負。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把四分位距誤作加總。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算IQR",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 Q1=10、Q3=18，IQR是多少？」；獨立解法「IQR=Q3-Q1=18-10=8。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s006-v002",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "contentSha256": "96c08c5c9774abc62c4f3ffa7de2e7b81654798e3f35643539da878b8f38d9e7",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "IQR=8，1.5IQR=12，下界=Q1-12=0。",
      "derivedAnswer": "0",
      "storedAnswer": "0",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「0」；其餘選項逐項排除：「-8」：誤用Q1-2.5×IQR。；「4」：只減1×IQR。；「8」：把IQR的一半當扣除量。",
        "undefinedSymbol": "題幹術語均已在「IQR 與離群值」講義定義；實際目標為「計算離群下界」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "界線等於0本身不算超出。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「忘記先算1.5倍IQR。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算離群下界",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「Q1=12、Q3=20，依1.5×IQR規則，下界為多少？」；獨立解法「IQR=8，1.5IQR=12，下界=Q1-12=0。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s006-v003",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "contentSha256": "ff845b93b9ea46499b7dfc5e7557ad3fecb25a08ee9faba78890abb7f3e84bf1",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "高端界線=Q3+1.5×IQR=14+1.5×8=14+12=26；只有嚴格大於26才會被標記。",
      "derivedAnswer": "26",
      "storedAnswer": "26",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「26」；其餘選項逐項排除：「22」：只在Q3上加1倍IQR。；「20」：把1.5IQR誤算成6。；「30」：在Q3上加2倍IQR。",
        "undefinedSymbol": "題幹術語均已在「IQR 與離群值」講義定義；實際目標為「由Q3與IQR求高端離群界線」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "等於26不算超出；本題問的是界線，不是某一候選值是否離群。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把IQR倍數或嚴格超界條件讀錯。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：由Q3與IQR求高端離群界線",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某盒狀圖的Q3=14、IQR=8。依1.5×IQR規則，高端資料必須大於哪個界線才會被標記為離群候選？」；獨立解法「高端界線=Q3+1.5×IQR=14+1.5×8=14+12=26；只有嚴格大於26才會被標記。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s006-v004",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "contentSha256": "06fa9761490b206c3ebbe58443e0032fbf8e3564ec9cff6ca01015b959271b52",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "IQR=12，1.5IQR=18；界線為2與50。只有55>50，所以55是離群值。",
      "derivedAnswer": "55",
      "storedAnswer": "55",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「55」；其餘選項逐項排除：「2」：下界=2，等於界線不算離群。；「14」：介於界線內。；「50」：上界=50，等於界線不算離群。",
        "undefinedSymbol": "題幹術語均已在「IQR 與離群值」講義定義；實際目標為「依界線分類候選值」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "採「小於下界或大於上界」才算離群。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把等於界線的值也判為離群。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：依界線分類候選值",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一組資料Q1=20、Q3=32。下列哪個值依1.5×IQR規則屬離群值？」；獨立解法「IQR=12，1.5IQR=18；界線為2與50。只有55>50，所以55是離群值。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s006-v005",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "contentSha256": "7c365b951ddbfb50b976c60ebe3cb10e7d28345ed0b5b524f5656ee0e6d07ac0",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "IQR=8，1.5IQR=12；下界3，上界35。-1<3、36>35，兩者為離群值；3在界線上。",
      "derivedAnswer": "-1 與 36",
      "storedAnswer": "-1 與 36",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「-1 與 36」；其餘選項逐項排除：「只有-1」：漏看上端離群。；「只有36」：漏看下端離群。；「3與36」：3等於下界，不算超出。",
        "undefinedSymbol": "題幹術語均已在「IQR 與離群值」講義定義；實際目標為「同時判斷上下端離群值」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "負數資料允許，界線規則照常。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只檢查單側或把界線值算離群。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：同時判斷上下端離群值",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「Q1=15、Q3=23，資料中有 -1、3、15、23、36。哪些是離群值？」；獨立解法「IQR=8，1.5IQR=12；下界3，上界35。-1<3、36>35，兩者為離群值；3在界線上。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s006-v006",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "contentSha256": "5170bfd7f42bf579b97b9e3c8bdb8e1f3db558476ef231cf41ba1a492696b4d1",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "IQR=0表示Q1=Q3=q，界線均為q；小於q或大於q的值都超出界線。",
      "derivedAnswer": "上下界都等於Q1=Q3，任何不同值都會被標記",
      "storedAnswer": "上下界都等於Q1=Q3，任何不同值都會被標記",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「上下界都等於Q1=Q3，任何不同值都會被標記」；其餘選項逐項排除：「不存在離群值」：IQR=0反而使界線重合。；「所有值都不是離群值」：不同於共同四分位值者會超界。；「只能有上端離群值」：上下兩端都可能。",
        "undefinedSymbol": "題幹術語均已在「IQR 與離群值」講義定義；實際目標為「處理零IQR邊界」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "此為規則的數學結果，實務解讀仍需說明大量重複值。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「以為IQR為0會讓規則失效。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：處理零IQR邊界",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某資料IQR=0。依1.5×IQR規則，下列敘述何者正確？」；獨立解法「IQR=0表示Q1=Q3=q，界線均為q；小於q或大於q的值都超出界線。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s006-v007",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "contentSha256": "936f61f1cbc0a489189333edcf8804a5dd182a30477bfc15f494a7db456684e1",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "設Q3=x，IQR=x-8，上界x+1.5(x-8)=32。2.5x-12=32，x=17.6。",
      "derivedAnswer": "17.6",
      "storedAnswer": "17.6",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「17.6」；其餘選項逐項排除：「16」：上界=16+1.5×8=28。；「18」：上界=18+15=33。；「20」：上界=20+18=38。",
        "undefinedSymbol": "題幹術語均已在「IQR 與離群值」講義定義；實際目標為「由離群界線反求Q3」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "x≥8且17.6符合；32等於界線不算離群。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把IQR固定誤認為Q1。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由離群界線反求Q3",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若Q1=8、某候選值32恰為上界，且使用1.5×IQR規則，Q3可能是多少？」；獨立解法「設Q3=x，IQR=x-8，上界x+1.5(x-8)=32。2.5x-12=32，x=17.6。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s006-v008",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "contentSha256": "f2c7ceba7c4051190bae412898a1f5d6a10c679b5960d6eb2685a04af8c6887d",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "IQR只由Q1、Q3決定，兩者不變則IQR和Q1±1.5IQR、Q3±1.5IQR都不變。",
      "derivedAnswer": "IQR與兩條離群界線",
      "storedAnswer": "IQR與兩條離群界線",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「IQR與兩條離群界線」；其餘選項逐項排除：「全距」：最大值可能改變，使全距增加。；「平均數」：加入大值通常改變平均數。；「資料筆數」：加入資料後筆數必變。",
        "undefinedSymbol": "題幹術語均已在「IQR 與離群值」講義定義；實際目標為「分析加入極端值的影響」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "題目已明定Q1、Q3不變，無需判斷其是否通常會變。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把穩健位置量與端點、平均混淆。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：分析加入極端值的影響",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一組資料加入一個非常大的值後，Q1與Q3都不變。下列何者一定不變？」；獨立解法「IQR只由Q1、Q3決定，兩者不變則IQR和Q1±1.5IQR、Q3±1.5IQR都不變。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s006-v009",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "contentSha256": "ba6606996d3718cb367a5008056224fd489e58432efae2928bd6c39070643b45",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "設IQR=d。由11-1.5d=5，得1.5d=6、d=4，因此Q3=11+4=15。",
      "derivedAnswer": "15",
      "storedAnswer": "15",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「15」；其餘選項逐項排除：「13」：會使IQR=2，下界為8。；「17」：會使IQR=6，下界為2。；「19」：會使IQR=8，下界為-1。",
        "undefinedSymbol": "題幹術語均已在「IQR 與離群值」講義定義；實際目標為「由下界反求Q3」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "Q3=15≥Q1，代回下界15? 應以Q1=11：11-1.5×4=5，條件一致。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「由單一界線反求IQR時漏除以1.5。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由下界反求Q3",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某資料的下離群界線為5，且Q1=11。依1.5×IQR規則，Q3為何？」；獨立解法「設IQR=d。由11-1.5d=5，得1.5d=6、d=4，因此Q3=11+4=15。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s006-v010",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "contentSha256": "7aed3663a52e6d05418646943081e7f6931f30367324c473133fd66d39349b79",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "IQR=4，上界=102+6=108；109>108，因此列為高端離群候選。",
      "derivedAnswer": "109",
      "storedAnswer": "109",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「109」；其餘選項逐項排除：「106」：上界=108，106仍在界內。；「108」：等於上界，不屬超出。；「102」：只是Q3。",
        "undefinedSymbol": "題幹術語均已在「IQR 與離群值」講義定義；實際目標為「用IQR規則篩選異常讀值」。",
        "unitConflict": "讀值使用同一校正尺度。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "統計離群只表示需查核，不等於儀器必故障。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把等於上界的讀值標為離群。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：用IQR規則篩選異常讀值",
      "literacyContextNecessity": "感測器維護需要客觀篩選異常候選，再配合工程判斷。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「感測器讀值的Q1=98、Q3=102。依1.5×IQR規則，哪個讀值應先列為高端異常候選？」；獨立解法「IQR=4，上界=102+6=108；109>108，因此列為高端離群候選。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s006-v011",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "contentSha256": "a43d72161d411da978055d006d0250b189395297f177ca944caced273bd77a0a",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "IQR=0.8公斤，1.5IQR=1.2公斤，下界=2.4-1.2=1.2公斤；0.9<1.2，所以是下端離群值。",
      "derivedAnswer": "是，因下界為1.2公斤",
      "storedAnswer": "是，因下界為1.2公斤",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「是，因下界為1.2公斤」；其餘選項逐項排除：「否，因0.9仍為正數」：是否離群與正負無關。；「否，因下界為0.8公斤」：IQR或1.5倍計算錯誤。；「是，因下界為2.4公斤」：把Q1直接當下界。",
        "undefinedSymbol": "題幹術語均已在「IQR 與離群值」講義定義；實際目標為「在有單位情境判斷離群」。",
        "unitConflict": "計算與答案均使用公斤。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "所有重量以公斤表示，無需換算。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只以數值是否合理或為正判斷。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在有單位情境判斷離群",
      "literacyContextNecessity": "包裹重量異常會影響運費與分流，離群判斷有實務作用。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一批包裹重量Q1=2.4、Q3=3.2公斤。重量0.9公斤是否為下端離群值？」；獨立解法「IQR=0.8公斤，1.5IQR=1.2公斤，下界=2.4-1.2=1.2公斤；0.9<1.2，所以是下端離群值。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s006-v012",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "contentSha256": "807cfb594b4e1c21a17afebebcbe8d8805f4105bd341e7ab2c6ea5f1dfa6702e",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "25介於24與120之間，依規則不是離群值；即使某分數超界，也只表示統計上異常，需要其他證據。",
      "derivedAnswer": "25分不是統計離群值，而且離群也不能直接證明作弊",
      "storedAnswer": "25分不是統計離群值，而且離群也不能直接證明作弊",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「25分不是統計離群值，而且離群也不能直接證明作弊」；其餘選項逐項排除：「25分低於Q1，所以一定離群」：低於Q1不等於低於下界。；「25分高於下界，所以一定正常且不需關心」：非離群也不代表無需教育診斷。；「只要低於中位數就可判作弊」：中位數與作弊無直接關係。",
        "undefinedSymbol": "題幹術語均已在「IQR 與離群值」講義定義；實際目標為「限制離群值的解釋」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "界線已由題目提供，不需重算；結論限定統計判斷。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把統計離群等同不當行為證據。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：限制離群值的解釋",
      "literacyContextNecessity": "教育資料涉及個人判斷，必須避免由單一統計標記推定行為。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-components。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某班測驗Q1=60、Q3=84。依1.5×IQR規則得到下界24、上界120。老師說「25分學生一定作弊」。哪個評語最恰當？」；獨立解法「25介於24與120之間，依規則不是離群值；即使某分數超界，也只表示統計上異常，需要其他證據。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "fig-u22-boxplot-outlier",
      "unitId": "u22",
      "skillId": "iqr-outlier-basic",
      "drawingPurpose": "支援界線等號不算超出以及上下端離群值判斷。",
      "canvas": {
        "width": 760,
        "height": 250
      },
      "viewBox": "0 0 760 250",
      "coordinateSystem": "SVG pixels; origin at upper-left; x increases right and y increases down.",
      "layoutConstraints": [
        "數軸-5到55",
        "Q1=18與Q3=30的箱體",
        "虛線界線0與48",
        "候選點-1、0、48、49",
        "界線與候選標籤"
      ],
      "visibleLineRules": "All mathematical boundaries and axes use solid black lines; helper gridlines, when present, are lighter and never encode an answer by color.",
      "hiddenLineRules": "No hidden geometric lines are needed. Dashed lines are used only for explicitly labelled statistical fences.",
      "labelsAndPositions": "Labels are placed adjacent to their corresponding points, branches, sectors or groups with at least 14 px text.",
      "tickMarksUnitsArrowsSymbols": "Axes include labelled ticks and units where applicable; tree branches show exact fractions; arrowheads do not replace numeric labels.",
      "toScale": true,
      "visualInferenceWarning": null,
      "altText": "數軸顯示Q1為18、Q3為30、下離群界線0、上離群界線48，候選點負1、0、48、49。",
      "svgTitle": "支援界線等號不算超出以及上下端離群值判斷。",
      "svgDescription": "數軸顯示Q1為18、Q3為30、下離群界線0、上離群界線48，候選點負1、0、48、49。",
      "mobileReadabilityReview": "Reviewed at 360 CSS px width; minimum label size remains legible and no labels overlap critical marks.",
      "answerLeakageReview": "The figure contains only data explicitly supplied by its associated prompt or lecture example; it does not mark a multiple-choice option as correct.",
      "geometryTokenAssertions": {
        "lowerFence": 0,
        "upperFence": 48,
        "outliers": [
          -1,
          49
        ],
        "boundaryValues": [
          0,
          48
        ]
      },
      "manualVisualInspection": "pass; rendered PNG inspected for clipping, label overlap, scale consistency and mathematical placement.",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ]
};
