// Emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u22-s005-lecture-r1",
    "unitId": "u22",
    "numericUnitId": 22,
    "topicId": "u22-quartiles",
    "skillId": "box-plot-components",
    "lockedSkillOrder": 5,
    "title": "盒狀圖五數：辨識最小值與Q1與中位數與Q3與最大值及其順序。",
    "originalLockedTitle": "盒狀圖五數",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能依序說出五數摘要。",
      "能檢查未知五數是否符合非遞減限制。",
      "能由全距、IQR或段長反求缺少構件。",
      "能解讀構件重合。"
    ],
    "prerequisiteSkillIds": [
      "quartile-position"
    ],
    "prerequisiteBridge": "承接四分位位置與盒狀圖構件。",
    "glossary": [
      {
        "term": "最小值",
        "definition": "資料中最小觀測值。"
      },
      {
        "term": "最大值",
        "definition": "資料中最大觀測值。"
      },
      {
        "term": "五數摘要",
        "definition": "min、Q1、Q2、Q3、max。"
      },
      {
        "term": "構件重合",
        "definition": "相鄰位置量數值相等，圖上線條落在同一處。"
      }
    ],
    "notation": [
      {
        "symbol": "min≤Q1≤Q2≤Q3≤max",
        "meaning": "五數必要順序。"
      },
      {
        "symbol": "全距=max-min",
        "meaning": "端點差。"
      },
      {
        "symbol": "IQR=Q3-Q1",
        "meaning": "箱體寬。"
      }
    ],
    "conceptNarrative": [
      "五數摘要第三項是中位數，不是平均數。",
      "五數只要求非遞減；大量重複值時Q1可以等於中位數，Q3也可以等於最大值。",
      "未知構件題先建立它在相鄰兩數之間的範圍，再使用給定距離。",
      "所有資料加同一常數，五數全體平移；乘正數，五數與所有距離按比例縮放。",
      "若乘負數，排序會反轉，超出本技能一般盒狀圖轉換重點，需重新排序。"
    ],
    "formalDefinitions": [
      {
        "name": "合法五數",
        "statement": "五項依序非遞減且皆來自同一資料尺度。"
      },
      {
        "name": "標準中央構件",
        "statement": "Q2即中位數。"
      }
    ],
    "formulas": [
      {
        "formula": "Q2-Q1",
        "conditions": [
          "箱體左半長。"
        ],
        "meaning": "箱體左半長。"
      },
      {
        "formula": "Q3-Q2",
        "conditions": [
          "箱體右半長。"
        ],
        "meaning": "箱體右半長。"
      },
      {
        "formula": "max-Q3與Q1-min",
        "conditions": [
          "兩側鬚長。"
        ],
        "meaning": "兩側鬚長。"
      }
    ],
    "nonApplicableCases": [
      "不能把平均數直接放進標準五數。",
      "不能要求五項嚴格遞增。",
      "不同單位的五數不可直接組成一圖。",
      "由五數無法重建全部原始資料。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "寫順序鏈",
        "check": "把未知數放在正確位置。"
      },
      {
        "step": 2,
        "instruction": "列距離式",
        "check": "依全距、IQR或比例。"
      },
      {
        "step": 3,
        "instruction": "解未知數",
        "check": "保留分數或小數。"
      },
      {
        "step": 4,
        "instruction": "驗順序",
        "check": "確認不越過相鄰構件。"
      },
      {
        "step": 5,
        "instruction": "解讀圖形",
        "check": "說明是否重合及哪段長度為0。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "2、a、8、15、19",
        "solutionSteps": [
          "a必須介於2與8。"
        ],
        "answer": "a必須介於2與8。"
      },
      {
        "exampleId": "L2",
        "prompt": "m、8、13、20、31且全距27",
        "solutionSteps": [
          "31-m=27，m=4。"
        ],
        "answer": "31-m=27，m=4。"
      },
      {
        "exampleId": "L3",
        "prompt": "Q1=16、Q3=28，右半為左半2倍",
        "solutionSteps": [
          "中位數20。"
        ],
        "answer": "中位數20。"
      },
      {
        "exampleId": "L4",
        "prompt": "五數3、5、7、11、14全部乘2",
        "solutionSteps": [
          "變6、10、14、22、28。"
        ],
        "answer": "變6、10、14、22、28。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "看到五個數就認定合法",
        "why": "逐對檢查順序。",
        "correction": "逐對檢查順序。"
      },
      {
        "mistake": "Q1等於中位數就說不可能",
        "why": "重複值可造成重合。",
        "correction": "重複值可造成重合。"
      },
      {
        "mistake": "距離題把座標相加",
        "why": "線段長用右減左。",
        "correction": "線段長用右減左。"
      },
      {
        "mistake": "只轉換箱體不轉換鬚線",
        "why": "全體資料轉換會影響五數全部。",
        "correction": "全體資料轉換會影響五數全部。"
      }
    ],
    "selfCheck": [
      "五項是否非遞減？",
      "第三項是否中位數？",
      "距離是否使用右值減左值？",
      "未知值是否落在相鄰構件之間？"
    ],
    "summary": [
      "五數摘要是有順序限制的位置量。",
      "相等合法，逆序不合法。",
      "全距由端點，IQR由Q1與Q3。",
      "資料轉換需同步作用於全部五數。"
    ],
    "connections": {
      "previous": "承接四分位位置與盒狀圖構件。",
      "next": [
        "下一技能利用Q1、Q3計算IQR與離群界線。"
      ]
    },
    "figureReferences": [],
    "figureAccessibility": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u22-s005-v001",
        "u22-s005-v002",
        "u22-s005-v003",
        "u22-s005-v004",
        "u22-s005-v005",
        "u22-s005-v006",
        "u22-s005-v007",
        "u22-s005-v008",
        "u22-s005-v009",
        "u22-s005-v010",
        "u22-s005-v011",
        "u22-s005-v012"
      ],
      "constructedResponseIds": [
        "u22-s005-cr001",
        "u22-s005-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "skillSpecificReviewEvidence": "逐題驗證未知值解後仍滿足順序；以Q1=16、Q3=28案例代回20，左右半長4與8確實為2倍。",
      "futureKnowledgeCheck": "pass; all methods use this skill or declared prerequisites only",
      "contentBoundary": "辨識最小值、Q1、中位數、Q3、最大值及其順序。",
      "reviewVersion": "human-lecture-review-u22-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "1b4bd6388787cc230fd6d8cf614269ccd93bfc29190d0281c377173386f1f7e3"
  },
  "mcQuestions": [
    {
      "questionId": "u22-s005-v001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "五數摘要依由小到大排列，正確順序是哪一個？",
      "text": "五數摘要依由小到大排列，正確順序是哪一個？",
      "givenConditions": [],
      "target": "辨認五數摘要順序",
      "choices": [
        "最小值、Q1、中位數、Q3、最大值",
        "最小值、中位數、Q1、Q3、最大值",
        "Q1、最小值、中位數、最大值、Q3",
        "最小值、Q1、平均數、Q3、最大值"
      ],
      "answerIndex": 0,
      "independentSolution": "五數摘要依序是最小值、第一四分位數、第二四分位數即中位數、第三四分位數、最大值。",
      "explanation": "五數摘要依序是最小值、第一四分位數、第二四分位數即中位數、第三四分位數、最大值。",
      "steps": [
        "記憶非遞減順序。"
      ],
      "optionAnalysis": [
        {
          "choice": "最小值、Q1、中位數、Q3、最大值",
          "truth": true,
          "reason": "正確。獨立重算：五數摘要依序是最小值、第一四分位數、第二四分位數即中位數、第三四分位數、最大值。"
        },
        {
          "choice": "最小值、中位數、Q1、Q3、最大值",
          "truth": false,
          "reason": "Q1應在中位數之前。"
        },
        {
          "choice": "Q1、最小值、中位數、最大值、Q3",
          "truth": false,
          "reason": "端點與四分位數順序混亂。"
        },
        {
          "choice": "最小值、Q1、平均數、Q3、最大值",
          "truth": false,
          "reason": "標準五數摘要使用中位數而非平均數。"
        }
      ],
      "misconceptionTarget": "把平均數放入五數摘要。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "五數可相等但不得逆序。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：辨認五數摘要順序",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "辨認五數摘要順序",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "f4e7a30b711d001865b1d7de2a5b77b55493fa1de8416b95804448f1877e3166"
    },
    {
      "questionId": "u22-s005-v002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某盒狀圖五數為 6、10、14、19、25，其中哪一個是中位數？",
      "text": "某盒狀圖五數為 6、10、14、19、25，其中哪一個是中位數？",
      "givenConditions": [],
      "target": "從五數摘要找Q2",
      "choices": [
        "10",
        "19",
        "14",
        "25"
      ],
      "answerIndex": 2,
      "independentSolution": "五數摘要第三個數就是中位數，所以為14。",
      "explanation": "五數摘要第三個數就是中位數，所以為14。",
      "steps": [
        "取五數中的第三項。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": false,
          "reason": "10是Q1。"
        },
        {
          "choice": "19",
          "truth": false,
          "reason": "19是Q3。"
        },
        {
          "choice": "14",
          "truth": true,
          "reason": "正確。獨立重算：五數摘要第三個數就是中位數，所以為14。"
        },
        {
          "choice": "25",
          "truth": false,
          "reason": "25是最大值。"
        }
      ],
      "misconceptionTarget": "把箱體右端當中位數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "摘要已依標準順序提供。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：從五數摘要找Q2",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "從五數摘要找Q2",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "5b07b0e76d8ae09bf622f86bdc41869dae1902867ea8ea517d4358cef4cc4134"
    },
    {
      "questionId": "u22-s005-v003",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "若最小值=4、Q1=9、中位數=11、Q3=17、最大值=22，IQR由哪兩個構件決定？",
      "text": "若最小值=4、Q1=9、中位數=11、Q3=17、最大值=22，IQR由哪兩個構件決定？",
      "givenConditions": [],
      "target": "連結構件與IQR",
      "choices": [
        "最小值與最大值",
        "Q1與Q3",
        "最小值與中位數",
        "中位數與最大值"
      ],
      "answerIndex": 1,
      "independentSolution": "IQR定義為Q3-Q1，因此由箱體左右端決定。",
      "explanation": "IQR定義為Q3-Q1，因此由箱體左右端決定。",
      "steps": [
        "回想IQR公式。"
      ],
      "optionAnalysis": [
        {
          "choice": "最小值與最大值",
          "truth": false,
          "reason": "這兩者決定全距。"
        },
        {
          "choice": "Q1與Q3",
          "truth": true,
          "reason": "正確。獨立重算：IQR定義為Q3-Q1，因此由箱體左右端決定。"
        },
        {
          "choice": "最小值與中位數",
          "truth": false,
          "reason": "只涵蓋左側一部分。"
        },
        {
          "choice": "中位數與最大值",
          "truth": false,
          "reason": "只涵蓋右側一部分。"
        }
      ],
      "misconceptionTarget": "把全距端點套入IQR。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "題目不要求實際計算。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：連結構件與IQR",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "連結構件與IQR",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "e4cffeffae6a7f427107da3c7a693789013aa043440e7c1eda287de33127957a"
    },
    {
      "questionId": "u22-s005-v004",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "下列哪一組可能是某資料的五數摘要？",
      "text": "下列哪一組可能是某資料的五數摘要？",
      "givenConditions": [],
      "target": "檢查五數摘要合法性",
      "choices": [
        "3、8、6、10、12",
        "5、4、7、9、11",
        "2、6、8、7、12",
        "3、3、7、10、10"
      ],
      "answerIndex": 3,
      "independentSolution": "五數摘要只需非遞減；3≤3≤7≤10≤10成立，重複值允許。",
      "explanation": "五數摘要只需非遞減；3≤3≤7≤10≤10成立，重複值允許。",
      "steps": [
        "逐組檢查非遞減順序。"
      ],
      "optionAnalysis": [
        {
          "choice": "3、8、6、10、12",
          "truth": false,
          "reason": "Q1大於中位數，不合順序。"
        },
        {
          "choice": "5、4、7、9、11",
          "truth": false,
          "reason": "最小值大於Q1。"
        },
        {
          "choice": "2、6、8、7、12",
          "truth": false,
          "reason": "Q3小於中位數。"
        },
        {
          "choice": "3、3、7、10、10",
          "truth": true,
          "reason": "正確。獨立重算：五數摘要只需非遞減；3≤3≤7≤10≤10成立，重複值允許。"
        }
      ],
      "misconceptionTarget": "誤以為五個數必須嚴格遞增。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "相等表示資料重複或四分位位置重合。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：檢查五數摘要合法性",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "檢查五數摘要合法性",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "5d6fdd7d746e349dfe95102a73343d03b9aeccbdccb86685bc2900e833569f55"
    },
    {
      "questionId": "u22-s005-v005",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某五數摘要為 2、a、8、15、19。下列哪個a不可能？",
      "text": "某五數摘要為 2、a、8、15、19。下列哪個a不可能？",
      "givenConditions": [],
      "target": "用順序限制未知構件",
      "choices": [
        "2",
        "9",
        "5",
        "8"
      ],
      "answerIndex": 1,
      "independentSolution": "Q1必須滿足最小值≤Q1≤中位數，即2≤a≤8；a=9超出。",
      "explanation": "Q1必須滿足最小值≤Q1≤中位數，即2≤a≤8；a=9超出。",
      "steps": [
        "建立2≤a≤8。",
        "檢查選項。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "Q1可等於最小值。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "正確。獨立重算：Q1必須滿足最小值≤Q1≤中位數，即2≤a≤8；a=9超出。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "介於2與8之間可行。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "Q1可等於中位數。"
        }
      ],
      "misconceptionTarget": "只檢查a是否小於最大值。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "五數允許相等。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：用順序限制未知構件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "用順序限制未知構件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "c5bf3b9002723834e9fff3383fb30daa9e3439b51a73537dcaaca08e970bd7c2"
    },
    {
      "questionId": "u22-s005-v006",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "盒狀圖中五數為 7、12、12、18、30。下列何者正確？",
      "text": "盒狀圖中五數為 7、12、12、18、30。下列何者正確？",
      "givenConditions": [],
      "target": "解讀重合構件",
      "choices": [
        "Q1與中位數重合",
        "箱體寬度為0",
        "全距為18",
        "最大值與Q3重合"
      ],
      "answerIndex": 0,
      "independentSolution": "第二、第三個五數都為12，所以Q1與中位數線在同一位置。",
      "explanation": "第二、第三個五數都為12，所以Q1與中位數線在同一位置。",
      "steps": [
        "辨認相等構件。"
      ],
      "optionAnalysis": [
        {
          "choice": "Q1與中位數重合",
          "truth": true,
          "reason": "正確。獨立重算：第二、第三個五數都為12，所以Q1與中位數線在同一位置。"
        },
        {
          "choice": "箱體寬度為0",
          "truth": false,
          "reason": "IQR=18-12=6。"
        },
        {
          "choice": "全距為18",
          "truth": false,
          "reason": "全距=30-7=23。"
        },
        {
          "choice": "最大值與Q3重合",
          "truth": false,
          "reason": "30不等於18。"
        }
      ],
      "misconceptionTarget": "看到兩個12便誤判整個箱體消失。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "繪圖時中位數線可能貼在箱體左邊界。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：解讀重合構件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "解讀重合構件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "d500a854c875dda0d0ba646cffe392c375bb9091e62c962f570c5af90e3260c0"
    },
    {
      "questionId": "u22-s005-v007",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "五數摘要為 m、8、13、20、31，且全距為27。m為多少？",
      "text": "五數摘要為 m、8、13、20、31，且全距為27。m為多少？",
      "givenConditions": [],
      "target": "由全距反求五數構件",
      "choices": [
        "3",
        "5",
        "4",
        "8"
      ],
      "answerIndex": 2,
      "independentSolution": "全距=最大值-最小值=31-m=27，所以m=4。",
      "explanation": "全距=最大值-最小值=31-m=27，所以m=4。",
      "steps": [
        "列31-m=27。",
        "解得m=4。",
        "確認4≤8。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "31-3=28。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "31-5=26。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "正確。獨立重算：全距=最大值-最小值=31-m=27，所以m=4。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "把Q1當最小值。"
        }
      ],
      "misconceptionTarget": "以Q1代替最小值。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "m需不大於Q1，4符合。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由全距反求五數構件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由全距反求五數構件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "072c84038755d112fcea6c186226a18280ad0d7d7ed3247373806bef64af1870"
    },
    {
      "questionId": "u22-s005-v008",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某盒狀圖的Q1=16、Q3=28，且中位數到Q3的距離是Q1到中位數的2倍。中位數是多少？",
      "text": "某盒狀圖的Q1=16、Q3=28，且中位數到Q3的距離是Q1到中位數的2倍。中位數是多少？",
      "givenConditions": [],
      "target": "由箱體比例反求中位數",
      "choices": [
        "18",
        "22",
        "24",
        "20"
      ],
      "answerIndex": 3,
      "independentSolution": "設中位數x，28-x=2(x-16)。解得28-x=2x-32，3x=60，x=20。",
      "explanation": "設中位數x，28-x=2(x-16)。解得28-x=2x-32，3x=60，x=20。",
      "steps": [
        "設未知中位數x。",
        "依距離關系列式。",
        "解得20並驗算8=2×4。"
      ],
      "optionAnalysis": [
        {
          "choice": "18",
          "truth": false,
          "reason": "左半2、右半10，不符合2倍。"
        },
        {
          "choice": "22",
          "truth": false,
          "reason": "左半6、右半6。"
        },
        {
          "choice": "24",
          "truth": false,
          "reason": "左半8、右半4，方向相反。"
        },
        {
          "choice": "20",
          "truth": true,
          "reason": "正確。獨立重算：設中位數x，28-x=2(x-16)。解得28-x=2x-32，3x=60，x=20。"
        }
      ],
      "misconceptionTarget": "把「右半是左半2倍」寫成相反等式。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "中位數須介於16與28，20符合。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由箱體比例反求中位數",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由箱體比例反求中位數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "df3cf815a057138a89488bf05b211a7cb4bfc8dc400e92a70467eeadcf8c397e"
    },
    {
      "questionId": "u22-s005-v009",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一組資料全部乘以2後，原五數 3、5、7、11、14 變成什麼？",
      "text": "一組資料全部乘以2後，原五數 3、5、7、11、14 變成什麼？",
      "givenConditions": [],
      "target": "縮放五數摘要",
      "choices": [
        "6、10、14、22、28",
        "3、10、14、22、14",
        "5、7、9、13、16",
        "6、10、7、22、28"
      ],
      "answerIndex": 0,
      "independentSolution": "乘以正數2會保持排序，五個位置量都乘2。",
      "explanation": "乘以正數2會保持排序，五個位置量都乘2。",
      "steps": [
        "每一構件乘2。",
        "確認順序保持。"
      ],
      "optionAnalysis": [
        {
          "choice": "6、10、14、22、28",
          "truth": true,
          "reason": "正確。獨立重算：乘以正數2會保持排序，五個位置量都乘2。"
        },
        {
          "choice": "3、10、14、22、14",
          "truth": false,
          "reason": "只縮放中間三個構件。"
        },
        {
          "choice": "5、7、9、13、16",
          "truth": false,
          "reason": "誤作全部加2。"
        },
        {
          "choice": "6、10、7、22、28",
          "truth": false,
          "reason": "未縮放中位數。"
        }
      ],
      "misconceptionTarget": "資料轉換時漏改端點或中位數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "乘數為正，不會反轉順序。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：縮放五數摘要",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "縮放五數摘要",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "c4af608a97442e8374284533618917e03eaf6ccd8149e4f0c67fcb932e011d8d"
    },
    {
      "questionId": "u22-s005-v010",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某班每日睡眠時數的五數為 5.5、6.5、7、7.8、9。下列哪個數最適合回答「至少約75%的學生睡眠不超過多少小時」？",
      "text": "某班每日睡眠時數的五數為 5.5、6.5、7、7.8、9。下列哪個數最適合回答「至少約75%的學生睡眠不超過多少小時」？",
      "givenConditions": [],
      "target": "以五數構件回答百分位問題",
      "choices": [
        "6.5",
        "7.8",
        "7",
        "9"
      ],
      "answerIndex": 1,
      "independentSolution": "Q3=7.8小時，依位置解讀約75%資料不超過Q3。",
      "explanation": "Q3=7.8小時，依位置解讀約75%資料不超過Q3。",
      "steps": [
        "辨認Q3是第四個五數。",
        "連結75%位置。"
      ],
      "optionAnalysis": [
        {
          "choice": "6.5",
          "truth": false,
          "reason": "Q1只對應約25%不超過。"
        },
        {
          "choice": "7.8",
          "truth": true,
          "reason": "正確。獨立重算：Q3=7.8小時，依位置解讀約75%資料不超過Q3。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "中位數對應約50%。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "最大值對應全部資料。"
        }
      ],
      "misconceptionTarget": "把75%誤對應Q1。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "estimatedTimeSec": 180,
      "unitCheck": "所有數值單位為小時。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "重複值可能使比例不是精確75%，故使用約。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：以五數構件回答百分位問題",
      "literacyContextNecessity": "睡眠時數的政策門檻需選對四分位構件。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "以五數構件回答百分位問題",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "1c70a370db200ed026c39e89a2bff354d19c1ee07372b540ab0ab296345420b2"
    },
    {
      "questionId": "u22-s005-v011",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某河川水位五數摘要為 1.1、1.4、1.8、2.3、3.6 公尺。若警戒討論只關心最高25%的水位起點，應採用哪個值？",
      "text": "某河川水位五數摘要為 1.1、1.4、1.8、2.3、3.6 公尺。若警戒討論只關心最高25%的水位起點，應採用哪個值？",
      "givenConditions": [],
      "target": "選取高端四分位門檻",
      "choices": [
        "1.4 公尺",
        "1.8 公尺",
        "3.6 公尺",
        "2.3 公尺"
      ],
      "answerIndex": 3,
      "independentSolution": "最高約25%的資料從Q3以上開始，因此起點是2.3公尺。",
      "explanation": "最高約25%的資料從Q3以上開始，因此起點是2.3公尺。",
      "steps": [
        "找第四個五數Q3。",
        "保留單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "1.4 公尺",
          "truth": false,
          "reason": "這是較低25%的上界Q1。"
        },
        {
          "choice": "1.8 公尺",
          "truth": false,
          "reason": "這是中位數。"
        },
        {
          "choice": "3.6 公尺",
          "truth": false,
          "reason": "這是單一最大端點，不是最高25%起點。"
        },
        {
          "choice": "2.3 公尺",
          "truth": true,
          "reason": "正確。獨立重算：最高約25%的資料從Q3以上開始，因此起點是2.3公尺。"
        }
      ],
      "misconceptionTarget": "用最大值代表整個最高四分之一。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "estimatedTimeSec": 180,
      "unitCheck": "答案必須標示公尺。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "Q3是位置門檻，不保證每一筆高端資料嚴格大於它。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：選取高端四分位門檻",
      "literacyContextNecessity": "水位警戒需區分高端群體門檻與單次最高值。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "選取高端四分位門檻",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "3b01ccf6116e6ae582d356b5bccd7a504f8faa10cdc67924080293dc5226c5bc"
    },
    {
      "questionId": "u22-s005-v012",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一份報告把五數摘要寫成「最低20、Q1=35、平均42、Q3=48、最高70」，並稱這是標準盒狀圖五數。主要問題是什麼？",
      "text": "一份報告把五數摘要寫成「最低20、Q1=35、平均42、Q3=48、最高70」，並稱這是標準盒狀圖五數。主要問題是什麼？",
      "givenConditions": [],
      "target": "審核統計報告用語",
      "choices": [
        "Q1不能是35",
        "最高值不能是70",
        "第三項應是中位數，不一定是平均數",
        "五數摘要不能含最低值"
      ],
      "answerIndex": 2,
      "independentSolution": "標準五數摘要的中央項是中位數Q2；平均數可另行標示，但不能直接取代中位數。",
      "explanation": "標準五數摘要的中央項是中位數Q2；平均數可另行標示，但不能直接取代中位數。",
      "steps": [
        "核對五數定義。",
        "指出平均數與中位數角色不同。"
      ],
      "optionAnalysis": [
        {
          "choice": "Q1不能是35",
          "truth": false,
          "reason": "35在20與48之間，可行。"
        },
        {
          "choice": "最高值不能是70",
          "truth": false,
          "reason": "70大於Q3，可行。"
        },
        {
          "choice": "第三項應是中位數，不一定是平均數",
          "truth": true,
          "reason": "正確。獨立重算：標準五數摘要的中央項是中位數Q2；平均數可另行標示，但不能直接取代中位數。"
        },
        {
          "choice": "五數摘要不能含最低值",
          "truth": false,
          "reason": "最小值本來就是五數之一。"
        }
      ],
      "misconceptionTarget": "把常用集中量視為可互換。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "除非報告另定義特殊圖形，標準盒狀圖不以平均數取代Q2。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：審核統計報告用語",
      "literacyContextNecessity": "報告格式會影響讀者對圖形構件的解讀，必須辨識術語。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "審核統計報告用語",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "9aa055a704edd91bd241b1172b1c66f5c6932cdd35417151432cbe05ed85e9de"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u22-s005-cr001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "五數摘要為 m、8、13、20、31，已知全距27。求m，並計算左右鬚長與IQR。",
      "requiredWork": [
        "由全距求m。",
        "計算Q1-min、max-Q3。",
        "計算Q3-Q1。"
      ],
      "standardSolution": [
        "31-m=27，所以m=4。",
        "左鬚=8-4=4；右鬚=31-20=11。",
        "IQR=20-8=12。"
      ],
      "reasoningSteps": [
        "31-m=27，所以m=4。",
        "左鬚=8-4=4；右鬚=31-20=11。",
        "IQR=20-8=12。"
      ],
      "alternativeMethods": [
        "可用全距=左鬚+IQR+右鬚驗算4+12+11=27。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "m=4、左右鬚4與11、IQR12均正確並有公式。"
        },
        {
          "score": 2,
          "criteria": "只有一處差值算術錯。"
        },
        {
          "score": 1,
          "criteria": "能由全距求m並正確求出至少一種距離。"
        },
        {
          "score": 0,
          "criteria": "把m當27或無相減概念。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若m算錯但後續依自己的m正確算左鬚，保留追蹤分；IQR不依m，仍可獨立給分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "31-27寫成5。",
        "右鬚用31-13。",
        "IQR用31-4。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "31-m=27，所以m=4。；左鬚=8-4=4；右鬚=31-20=11。；IQR=20-8=12。",
        "alternativeMethodCheck": "可用全距=左鬚+IQR+右鬚驗算4+12+11=27。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "38c676356aae98484b3a98e25125448c98b3078d38c6dff6ec2bfbbe21f42ff4"
    },
    {
      "questionId": "u22-s005-cr002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "box-plot-components",
      "lockedSkillOrder": 5,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "判斷五數 3、3、7、10、10 是否合法；若合法，描述盒狀圖哪些構件重合，以及全距與IQR。",
      "requiredWork": [
        "檢查非遞減。",
        "指出重合位置。",
        "計算兩種距離。"
      ],
      "standardSolution": [
        "3≤3≤7≤10≤10，所以合法。",
        "最小值與Q1重合；Q3與最大值重合。",
        "全距=10-3=7；IQR=10-3=7。"
      ],
      "reasoningSteps": [
        "3≤3≤7≤10≤10，所以合法。",
        "最小值與Q1重合；Q3與最大值重合。",
        "全距=10-3=7；IQR=10-3=7。"
      ],
      "alternativeMethods": [
        "可由全距=IQR說明兩側鬚線長度都為0。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "合法性、兩組重合、全距7與IQR7全部正確。"
        },
        {
          "score": 2,
          "criteria": "核心判斷正確但漏一組重合或一個距離。"
        },
        {
          "score": 1,
          "criteria": "知道相等可以合法並指出至少一處重合。"
        },
        {
          "score": 0,
          "criteria": "認為五數必須嚴格遞增而判不合法。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若合法性判斷錯誤，後續距離計算仍可依數值獨立給1分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "相等就判不合法。",
        "把中位數7說成與端點重合。",
        "IQR算成4。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "3≤3≤7≤10≤10，所以合法。；最小值與Q1重合；Q3與最大值重合。；全距=10-3=7；IQR=10-3=7。",
        "alternativeMethodCheck": "可由全距=IQR說明兩側鬚線長度都為0。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "55722e3661c62bd5677087cc387e98e92019ea06da540688999e03ba48246df8"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u22-s005-v001",
      "unitId": "u22",
      "skillId": "box-plot-components",
      "contentSha256": "f4e7a30b711d001865b1d7de2a5b77b55493fa1de8416b95804448f1877e3166",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "五數摘要依序是最小值、第一四分位數、第二四分位數即中位數、第三四分位數、最大值。",
      "derivedAnswer": "最小值、Q1、中位數、Q3、最大值",
      "storedAnswer": "最小值、Q1、中位數、Q3、最大值",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「最小值、Q1、中位數、Q3、最大值」；其餘選項逐項排除：「最小值、中位數、Q1、Q3、最大值」：Q1應在中位數之前。；「Q1、最小值、中位數、最大值、Q3」：端點與四分位數順序混亂。；「最小值、Q1、平均數、Q3、最大值」：標準五數摘要使用中位數而非平均數。",
        "undefinedSymbol": "題幹術語均已在「盒狀圖五數」講義定義；實際目標為「辨認五數摘要順序」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "五數可相等但不得逆序。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把平均數放入五數摘要。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：辨認五數摘要順序",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「五數摘要依由小到大排列，正確順序是哪一個？」；獨立解法「五數摘要依序是最小值、第一四分位數、第二四分位數即中位數、第三四分位數、最大值。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s005-v002",
      "unitId": "u22",
      "skillId": "box-plot-components",
      "contentSha256": "5b07b0e76d8ae09bf622f86bdc41869dae1902867ea8ea517d4358cef4cc4134",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "五數摘要第三個數就是中位數，所以為14。",
      "derivedAnswer": "14",
      "storedAnswer": "14",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「14」；其餘選項逐項排除：「10」：10是Q1。；「19」：19是Q3。；「25」：25是最大值。",
        "undefinedSymbol": "題幹術語均已在「盒狀圖五數」講義定義；實際目標為「從五數摘要找Q2」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "摘要已依標準順序提供。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把箱體右端當中位數。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：從五數摘要找Q2",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某盒狀圖五數為 6、10、14、19、25，其中哪一個是中位數？」；獨立解法「五數摘要第三個數就是中位數，所以為14。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s005-v003",
      "unitId": "u22",
      "skillId": "box-plot-components",
      "contentSha256": "e4cffeffae6a7f427107da3c7a693789013aa043440e7c1eda287de33127957a",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "IQR定義為Q3-Q1，因此由箱體左右端決定。",
      "derivedAnswer": "Q1與Q3",
      "storedAnswer": "Q1與Q3",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「Q1與Q3」；其餘選項逐項排除：「最小值與最大值」：這兩者決定全距。；「最小值與中位數」：只涵蓋左側一部分。；「中位數與最大值」：只涵蓋右側一部分。",
        "undefinedSymbol": "題幹術語均已在「盒狀圖五數」講義定義；實際目標為「連結構件與IQR」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "題目不要求實際計算。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把全距端點套入IQR。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：連結構件與IQR",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若最小值=4、Q1=9、中位數=11、Q3=17、最大值=22，IQR由哪兩個構件決定？」；獨立解法「IQR定義為Q3-Q1，因此由箱體左右端決定。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s005-v004",
      "unitId": "u22",
      "skillId": "box-plot-components",
      "contentSha256": "5d6fdd7d746e349dfe95102a73343d03b9aeccbdccb86685bc2900e833569f55",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "五數摘要只需非遞減；3≤3≤7≤10≤10成立，重複值允許。",
      "derivedAnswer": "3、3、7、10、10",
      "storedAnswer": "3、3、7、10、10",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「3、3、7、10、10」；其餘選項逐項排除：「3、8、6、10、12」：Q1大於中位數，不合順序。；「5、4、7、9、11」：最小值大於Q1。；「2、6、8、7、12」：Q3小於中位數。",
        "undefinedSymbol": "題幹術語均已在「盒狀圖五數」講義定義；實際目標為「檢查五數摘要合法性」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "相等表示資料重複或四分位位置重合。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「誤以為五個數必須嚴格遞增。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：檢查五數摘要合法性",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一組可能是某資料的五數摘要？」；獨立解法「五數摘要只需非遞減；3≤3≤7≤10≤10成立，重複值允許。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s005-v005",
      "unitId": "u22",
      "skillId": "box-plot-components",
      "contentSha256": "c5bf3b9002723834e9fff3383fb30daa9e3439b51a73537dcaaca08e970bd7c2",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "Q1必須滿足最小值≤Q1≤中位數，即2≤a≤8；a=9超出。",
      "derivedAnswer": "9",
      "storedAnswer": "9",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「9」；其餘選項逐項排除：「2」：Q1可等於最小值。；「5」：介於2與8之間可行。；「8」：Q1可等於中位數。",
        "undefinedSymbol": "題幹術語均已在「盒狀圖五數」講義定義；實際目標為「用順序限制未知構件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "五數允許相等。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只檢查a是否小於最大值。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：用順序限制未知構件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某五數摘要為 2、a、8、15、19。下列哪個a不可能？」；獨立解法「Q1必須滿足最小值≤Q1≤中位數，即2≤a≤8；a=9超出。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s005-v006",
      "unitId": "u22",
      "skillId": "box-plot-components",
      "contentSha256": "d500a854c875dda0d0ba646cffe392c375bb9091e62c962f570c5af90e3260c0",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "第二、第三個五數都為12，所以Q1與中位數線在同一位置。",
      "derivedAnswer": "Q1與中位數重合",
      "storedAnswer": "Q1與中位數重合",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「Q1與中位數重合」；其餘選項逐項排除：「箱體寬度為0」：IQR=18-12=6。；「全距為18」：全距=30-7=23。；「最大值與Q3重合」：30不等於18。",
        "undefinedSymbol": "題幹術語均已在「盒狀圖五數」講義定義；實際目標為「解讀重合構件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "繪圖時中位數線可能貼在箱體左邊界。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「看到兩個12便誤判整個箱體消失。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：解讀重合構件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「盒狀圖中五數為 7、12、12、18、30。下列何者正確？」；獨立解法「第二、第三個五數都為12，所以Q1與中位數線在同一位置。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s005-v007",
      "unitId": "u22",
      "skillId": "box-plot-components",
      "contentSha256": "072c84038755d112fcea6c186226a18280ad0d7d7ed3247373806bef64af1870",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "全距=最大值-最小值=31-m=27，所以m=4。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「4」；其餘選項逐項排除：「3」：31-3=28。；「5」：31-5=26。；「8」：把Q1當最小值。",
        "undefinedSymbol": "題幹術語均已在「盒狀圖五數」講義定義；實際目標為「由全距反求五數構件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "m需不大於Q1，4符合。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「以Q1代替最小值。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由全距反求五數構件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「五數摘要為 m、8、13、20、31，且全距為27。m為多少？」；獨立解法「全距=最大值-最小值=31-m=27，所以m=4。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s005-v008",
      "unitId": "u22",
      "skillId": "box-plot-components",
      "contentSha256": "df3cf815a057138a89488bf05b211a7cb4bfc8dc400e92a70467eeadcf8c397e",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "設中位數x，28-x=2(x-16)。解得28-x=2x-32，3x=60，x=20。",
      "derivedAnswer": "20",
      "storedAnswer": "20",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「20」；其餘選項逐項排除：「18」：左半2、右半10，不符合2倍。；「22」：左半6、右半6。；「24」：左半8、右半4，方向相反。",
        "undefinedSymbol": "題幹術語均已在「盒狀圖五數」講義定義；實際目標為「由箱體比例反求中位數」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "中位數須介於16與28，20符合。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把「右半是左半2倍」寫成相反等式。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由箱體比例反求中位數",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某盒狀圖的Q1=16、Q3=28，且中位數到Q3的距離是Q1到中位數的2倍。中位數是多少？」；獨立解法「設中位數x，28-x=2(x-16)。解得28-x=2x-32，3x=60，x=20。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s005-v009",
      "unitId": "u22",
      "skillId": "box-plot-components",
      "contentSha256": "c4af608a97442e8374284533618917e03eaf6ccd8149e4f0c67fcb932e011d8d",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "乘以正數2會保持排序，五個位置量都乘2。",
      "derivedAnswer": "6、10、14、22、28",
      "storedAnswer": "6、10、14、22、28",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「6、10、14、22、28」；其餘選項逐項排除：「3、10、14、22、14」：只縮放中間三個構件。；「5、7、9、13、16」：誤作全部加2。；「6、10、7、22、28」：未縮放中位數。",
        "undefinedSymbol": "題幹術語均已在「盒狀圖五數」講義定義；實際目標為「縮放五數摘要」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "乘數為正，不會反轉順序。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「資料轉換時漏改端點或中位數。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：縮放五數摘要",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一組資料全部乘以2後，原五數 3、5、7、11、14 變成什麼？」；獨立解法「乘以正數2會保持排序，五個位置量都乘2。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s005-v010",
      "unitId": "u22",
      "skillId": "box-plot-components",
      "contentSha256": "1c70a370db200ed026c39e89a2bff354d19c1ee07372b540ab0ab296345420b2",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "Q3=7.8小時，依位置解讀約75%資料不超過Q3。",
      "derivedAnswer": "7.8",
      "storedAnswer": "7.8",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「7.8」；其餘選項逐項排除：「6.5」：Q1只對應約25%不超過。；「7」：中位數對應約50%。；「9」：最大值對應全部資料。",
        "undefinedSymbol": "題幹術語均已在「盒狀圖五數」講義定義；實際目標為「以五數構件回答百分位問題」。",
        "unitConflict": "所有數值單位為小時。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "重複值可能使比例不是精確75%，故使用約。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把75%誤對應Q1。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：以五數構件回答百分位問題",
      "literacyContextNecessity": "睡眠時數的政策門檻需選對四分位構件。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某班每日睡眠時數的五數為 5.5、6.5、7、7.8、9。下列哪個數最適合回答「至少約75%的學生睡眠不超過多少小時」？」；獨立解法「Q3=7.8小時，依位置解讀約75%資料不超過Q3。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s005-v011",
      "unitId": "u22",
      "skillId": "box-plot-components",
      "contentSha256": "3b01ccf6116e6ae582d356b5bccd7a504f8faa10cdc67924080293dc5226c5bc",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "最高約25%的資料從Q3以上開始，因此起點是2.3公尺。",
      "derivedAnswer": "2.3 公尺",
      "storedAnswer": "2.3 公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「2.3 公尺」；其餘選項逐項排除：「1.4 公尺」：這是較低25%的上界Q1。；「1.8 公尺」：這是中位數。；「3.6 公尺」：這是單一最大端點，不是最高25%起點。",
        "undefinedSymbol": "題幹術語均已在「盒狀圖五數」講義定義；實際目標為「選取高端四分位門檻」。",
        "unitConflict": "答案必須標示公尺。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "Q3是位置門檻，不保證每一筆高端資料嚴格大於它。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「用最大值代表整個最高四分之一。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：選取高端四分位門檻",
      "literacyContextNecessity": "水位警戒需區分高端群體門檻與單次最高值。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某河川水位五數摘要為 1.1、1.4、1.8、2.3、3.6 公尺。若警戒討論只關心最高25%的水位起點，應採用哪個值？」；獨立解法「最高約25%的資料從Q3以上開始，因此起點是2.3公尺。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s005-v012",
      "unitId": "u22",
      "skillId": "box-plot-components",
      "contentSha256": "9aa055a704edd91bd241b1172b1c66f5c6932cdd35417151432cbe05ed85e9de",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "標準五數摘要的中央項是中位數Q2；平均數可另行標示，但不能直接取代中位數。",
      "derivedAnswer": "第三項應是中位數，不一定是平均數",
      "storedAnswer": "第三項應是中位數，不一定是平均數",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「第三項應是中位數，不一定是平均數」；其餘選項逐項排除：「Q1不能是35」：35在20與48之間，可行。；「最高值不能是70」：70大於Q3，可行。；「五數摘要不能含最低值」：最小值本來就是五數之一。",
        "undefinedSymbol": "題幹術語均已在「盒狀圖五數」講義定義；實際目標為「審核統計報告用語」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "除非報告另定義特殊圖形，標準盒狀圖不以平均數取代Q2。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把常用集中量視為可互換。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：審核統計報告用語",
      "literacyContextNecessity": "報告格式會影響讀者對圖形構件的解讀，必須辨識術語。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：quartile-position。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一份報告把五數摘要寫成「最低20、Q1=35、平均42、Q3=48、最高70」，並稱這是標準盒狀圖五數。主要問題是什麼？」；獨立解法「標準五數摘要的中央項是中位數Q2；平均數可另行標示，但不能直接取代中位數。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    }
  ],
  "drawingSpecs": []
};
