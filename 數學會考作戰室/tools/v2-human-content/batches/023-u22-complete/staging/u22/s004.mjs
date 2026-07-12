// Emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u22-s004-lecture-r1",
    "unitId": "u22",
    "numericUnitId": 22,
    "topicId": "u22-quartiles",
    "skillId": "quartile-position",
    "lockedSkillOrder": 4,
    "title": "四分位數位置：在已排序資料中定位 Q1與Q2與Q3，處理奇偶筆數。",
    "originalLockedTitle": "四分位數位置",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能在n筆排序資料中標出Q2位置。",
      "能依半分法換算Q1、Q3在原資料的位置。",
      "能處理插入或刪除資料後的位置改變。",
      "能指出分組資料只能定位區間。"
    ],
    "prerequisiteSkillIds": [
      "box-plot-interpret"
    ],
    "prerequisiteBridge": "建立在四分位數計算與盒狀圖位置解讀上。",
    "glossary": [
      {
        "term": "位置編號",
        "definition": "排序後從第1筆開始的名次。"
      },
      {
        "term": "中央位置",
        "definition": "奇數筆的一個中央名次或偶數筆的兩個中央名次。"
      },
      {
        "term": "位置換算",
        "definition": "把半部內的名次轉回整組名次。"
      }
    ],
    "notation": [
      {
        "symbol": "n為偶數：Q2取第n/2與第n/2+1筆平均",
        "meaning": "整組中位數位置。"
      },
      {
        "symbol": "n為奇數：Q2取第(n+1)/2筆",
        "meaning": "整組中央位置。"
      }
    ],
    "conceptNarrative": [
      "位置問題先問的是「哪幾筆」，不是先算資料值。",
      "偶數筆分半後，每半筆數可能是奇數或偶數，必須再判一次。",
      "例如18筆分成9與9，Q1是前9筆中央的原第5筆，Q3是後9筆中央的原第14筆。",
      "例如20筆分成10與10，Q1由原第5、6筆平均，Q3由原第15、16筆平均。",
      "新增最小值會使所有舊資料名次加1；刪除某位置後則需重新定位，不能沿用舊Q。"
    ],
    "formalDefinitions": [
      {
        "name": "位置規則",
        "statement": "由筆數與半分法唯一決定所取名次。"
      },
      {
        "name": "分組定位",
        "statement": "累積次數可判斷四分位位置落在哪組，但通常不能得精確值。"
      }
    ],
    "formulas": [
      {
        "formula": "偶數中央位置=n/2與n/2+1",
        "conditions": [
          "位置從1起算。"
        ],
        "meaning": "位置從1起算。"
      },
      {
        "formula": "奇數中央位置=(n+1)/2",
        "conditions": [
          "結果為整數。"
        ],
        "meaning": "結果為整數。"
      }
    ],
    "nonApplicableCases": [
      "不能把n/4直接當Q1資料值。",
      "奇數筆是否排除Q2必須依題幹規則。",
      "插入資料後若不知道插入位置，不能直接換算。",
      "分組資料不可任意在組內插值，除非題目提供規則。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "編號",
        "check": "排序後標第1到第n筆。"
      },
      {
        "step": 2,
        "instruction": "找Q2位置",
        "check": "依n奇偶。"
      },
      {
        "step": 3,
        "instruction": "圈出上下半部",
        "check": "按題幹排除或平分。"
      },
      {
        "step": 4,
        "instruction": "在半部找中央",
        "check": "再判半部奇偶。"
      },
      {
        "step": 5,
        "instruction": "換回原編號",
        "check": "尤其是上半部位置。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "12筆",
        "solutionSteps": [
          "Q2第6、7；Q1第3、4；Q3第9、10。"
        ],
        "answer": "Q2第6、7；Q1第3、4；Q3第9、10。"
      },
      {
        "exampleId": "L2",
        "prompt": "15筆排除第8",
        "solutionSteps": [
          "Q1原第4；Q3原第12。"
        ],
        "answer": "Q1原第4；Q3原第12。"
      },
      {
        "exampleId": "L3",
        "prompt": "20筆",
        "solutionSteps": [
          "Q1第5、6；Q3第15、16。"
        ],
        "answer": "Q1第5、6；Q3第15、16。"
      },
      {
        "exampleId": "L4",
        "prompt": "9筆前插一個新最小值",
        "solutionSteps": [
          "新Q2第5筆對應舊第4筆。"
        ],
        "answer": "新Q2第5筆對應舊第4筆。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "上半部重新編號後忘記加偏移",
        "why": "先寫出原位置範圍再換算。",
        "correction": "先寫出原位置範圍再換算。"
      },
      {
        "mistake": "18筆Q1取第4、5平均",
        "why": "前半9筆應取單一第5筆。",
        "correction": "前半9筆應取單一第5筆。"
      },
      {
        "mistake": "25筆Q3只取第19筆",
        "why": "上半12筆應平均原第19、20筆。",
        "correction": "上半12筆應平均原第19、20筆。"
      },
      {
        "mistake": "刪除資料仍使用舊位置",
        "why": "筆數與位置都要重算。",
        "correction": "筆數與位置都要重算。"
      }
    ],
    "selfCheck": [
      "位置是否從1開始？",
      "整組與半部的奇偶是否分別判斷？",
      "上半部位置是否正確換回原編號？",
      "題幹是否指定排除中位數？"
    ],
    "summary": [
      "先定位，再代值。",
      "整組偶數不代表半部也偶數。",
      "上半部名次換算是高風險步驟。",
      "資料增刪後必須重新編號。"
    ],
    "connections": {
      "previous": "建立在四分位數計算與盒狀圖位置解讀上。",
      "next": [
        "下一技能用位置得到五數摘要。",
        "累積圖技能會用累積次數定位Q1、Q2、Q3組別。"
      ]
    },
    "figureReferences": [],
    "figureAccessibility": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u22-s004-v001",
        "u22-s004-v002",
        "u22-s004-v003",
        "u22-s004-v004",
        "u22-s004-v005",
        "u22-s004-v006",
        "u22-s004-v007",
        "u22-s004-v008",
        "u22-s004-v009",
        "u22-s004-v010",
        "u22-s004-v011",
        "u22-s004-v012"
      ],
      "constructedResponseIds": [
        "u22-s004-cr001",
        "u22-s004-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "skillSpecificReviewEvidence": "人工核對7、9、12、15、18、20、25筆的中央位置；修正初稿中18筆與25筆把半部奇偶判錯的兩處位置敘述。",
      "futureKnowledgeCheck": "pass; all methods use this skill or declared prerequisites only",
      "contentBoundary": "在已排序資料中定位 Q1、Q2、Q3，處理奇偶筆數。",
      "reviewVersion": "human-lecture-review-u22-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "ef817aba49de51561337d6813ca5a576a3c1affbb91f935ee5f1fdc9e7731496"
  },
  "mcQuestions": [
    {
      "questionId": "u22-s004-v001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一組10筆資料已排序。中位數 Q2 應由哪兩個位置的資料平均？",
      "text": "一組10筆資料已排序。中位數 Q2 應由哪兩個位置的資料平均？",
      "givenConditions": [],
      "target": "定位偶數筆資料的Q2",
      "choices": [
        "第4與第5筆",
        "第6與第7筆",
        "只取第5筆",
        "第5與第6筆"
      ],
      "answerIndex": 3,
      "independentSolution": "10筆資料的中央分界在5與6之間，所以Q2由第5與第6筆平均。",
      "explanation": "10筆資料的中央分界在5與6之間，所以Q2由第5與第6筆平均。",
      "steps": [
        "確認n=10為偶數。",
        "中央位置為n÷2與n÷2+1。"
      ],
      "optionAnalysis": [
        {
          "choice": "第4與第5筆",
          "truth": false,
          "reason": "這兩筆位於中央左側。"
        },
        {
          "choice": "第6與第7筆",
          "truth": false,
          "reason": "這兩筆位於中央右側。"
        },
        {
          "choice": "只取第5筆",
          "truth": false,
          "reason": "偶數筆需平均兩個中央位置。"
        },
        {
          "choice": "第5與第6筆",
          "truth": true,
          "reason": "正確。獨立重算：10筆資料的中央分界在5與6之間，所以Q2由第5與第6筆平均。"
        }
      ],
      "misconceptionTarget": "偶數筆只取單一中央位置。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "位置從1開始編號。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：定位偶數筆資料的Q2",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "定位偶數筆資料的Q2",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "3f5af9989eb2edbd35687f8e4065c3ab8c58d52249a64bbfa62c1170bbdec46c"
    },
    {
      "questionId": "u22-s004-v002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "12筆已排序資料使用半分法。Q1 由原資料的哪兩個位置平均？",
      "text": "12筆已排序資料使用半分法。Q1 由原資料的哪兩個位置平均？",
      "givenConditions": [],
      "target": "定位Q1的兩個位置",
      "choices": [
        "第3與第4筆",
        "第2與第3筆",
        "第4與第5筆",
        "第6與第7筆"
      ],
      "answerIndex": 0,
      "independentSolution": "下半部是第1到第6筆，其中位數由其第3、4筆，也就是原資料第3、4筆平均。",
      "explanation": "下半部是第1到第6筆，其中位數由其第3、4筆，也就是原資料第3、4筆平均。",
      "steps": [
        "取前6筆。",
        "找前6筆中央位置3與4。"
      ],
      "optionAnalysis": [
        {
          "choice": "第3與第4筆",
          "truth": true,
          "reason": "正確。獨立重算：下半部是第1到第6筆，其中位數由其第3、4筆，也就是原資料第3、4筆平均。"
        },
        {
          "choice": "第2與第3筆",
          "truth": false,
          "reason": "下半部6筆的中央不是2與3。"
        },
        {
          "choice": "第4與第5筆",
          "truth": false,
          "reason": "這是下半部偏右位置。"
        },
        {
          "choice": "第6與第7筆",
          "truth": false,
          "reason": "這兩筆用於整組中位數。"
        }
      ],
      "misconceptionTarget": "直接用12的四分之一等於3而只取第3筆。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "採半分法，不做線性插值。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：定位Q1的兩個位置",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "定位Q1的兩個位置",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "fbebe720366f1ea1db62c13ea3f3b17a5094527cb8f6ae29187d74071f477e2f"
    },
    {
      "questionId": "u22-s004-v003",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "將12筆已排序資料分成前6筆與後6筆後，Q3應由上半部哪兩筆對應的原資料位置平均？",
      "text": "將12筆已排序資料分成前6筆與後6筆後，Q3應由上半部哪兩筆對應的原資料位置平均？",
      "givenConditions": [],
      "target": "定位Q3的兩個位置",
      "choices": [
        "第8與第9筆",
        "第9與第10筆",
        "第10與第11筆",
        "第6與第7筆"
      ],
      "answerIndex": 1,
      "independentSolution": "上半部是原資料第7到第12筆，共6筆；上半部中央第3、4筆分別對應原資料第9、10筆，所以Q3由第9與第10筆平均。",
      "explanation": "上半部是原資料第7到第12筆，共6筆；上半部中央第3、4筆分別對應原資料第9、10筆，所以Q3由第9與第10筆平均。",
      "steps": [
        "取後6筆。",
        "換算上半部中央位置。"
      ],
      "optionAnalysis": [
        {
          "choice": "第8與第9筆",
          "truth": false,
          "reason": "上半部中央應再向右一位。"
        },
        {
          "choice": "第9與第10筆",
          "truth": true,
          "reason": "正確。獨立重算：上半部是原資料第7到第12筆，共6筆；上半部中央第3、4筆分別對應原資料第9、10筆，所以Q3由第9與第10筆平均。"
        },
        {
          "choice": "第10與第11筆",
          "truth": false,
          "reason": "這兩筆偏向上端。"
        },
        {
          "choice": "第6與第7筆",
          "truth": false,
          "reason": "這是Q2位置。"
        }
      ],
      "misconceptionTarget": "在上半部重新編號時換算錯誤。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "位置從原資料第1筆起算。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：定位Q3的兩個位置",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "定位Q3的兩個位置",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "3851f5581e58f0ffbebed07b69ca76b213b161b416035fe7ac569d411a509427"
    },
    {
      "questionId": "u22-s004-v004",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "9筆資料排序後，規定求Q1與Q3時排除第5筆中位數。Q1由哪兩筆平均？",
      "text": "9筆資料排序後，規定求Q1與Q3時排除第5筆中位數。Q1由哪兩筆平均？",
      "givenConditions": [],
      "target": "定位奇數筆資料的Q1",
      "choices": [
        "第1與第2筆",
        "第3與第4筆",
        "第2與第3筆",
        "第4與第5筆"
      ],
      "answerIndex": 2,
      "independentSolution": "排除第5筆後，下半部為第1到第4筆，中央位置是第2與第3筆。",
      "explanation": "排除第5筆後，下半部為第1到第4筆，中央位置是第2與第3筆。",
      "steps": [
        "找Q2位置第5筆。",
        "排除後取前4筆。",
        "選第2、3筆。"
      ],
      "optionAnalysis": [
        {
          "choice": "第1與第2筆",
          "truth": false,
          "reason": "下半部4筆的中央不是最前兩筆。"
        },
        {
          "choice": "第3與第4筆",
          "truth": false,
          "reason": "偏向下半部右端。"
        },
        {
          "choice": "第2與第3筆",
          "truth": true,
          "reason": "正確。獨立重算：排除第5筆後，下半部為第1到第4筆，中央位置是第2與第3筆。"
        },
        {
          "choice": "第4與第5筆",
          "truth": false,
          "reason": "錯把總中位數放入下半部。"
        }
      ],
      "misconceptionTarget": "奇數筆時把總中位數納入下半部。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "題幹已指定排除中位數。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：定位奇數筆資料的Q1",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "定位奇數筆資料的Q1",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "5d753527aa2f789c0976d7cf2275109d1ca9aae55d749141183f85c2830dc297"
    },
    {
      "questionId": "u22-s004-v005",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "15筆資料已排序，求Q3時排除整組中位數。Q3是原資料第幾筆？",
      "text": "15筆資料已排序，求Q3時排除整組中位數。Q3是原資料第幾筆？",
      "givenConditions": [],
      "target": "定位奇數筆資料的Q3",
      "choices": [
        "第11筆",
        "第13筆",
        "第8筆",
        "第12筆"
      ],
      "answerIndex": 3,
      "independentSolution": "第8筆是Q2；上半部為第9到第15筆，共7筆，其中位數是上半部第4筆，即原資料第12筆。",
      "explanation": "第8筆是Q2；上半部為第9到第15筆，共7筆，其中位數是上半部第4筆，即原資料第12筆。",
      "steps": [
        "Q2在第8筆。",
        "上半部第9至15筆。",
        "第4個是原第12筆。"
      ],
      "optionAnalysis": [
        {
          "choice": "第11筆",
          "truth": false,
          "reason": "把上半部起點換算少1。"
        },
        {
          "choice": "第13筆",
          "truth": false,
          "reason": "把上半部中位數往右多1。"
        },
        {
          "choice": "第8筆",
          "truth": false,
          "reason": "這是整組中位數。"
        },
        {
          "choice": "第12筆",
          "truth": true,
          "reason": "正確。獨立重算：第8筆是Q2；上半部為第9到第15筆，共7筆，其中位數是上半部第4筆，即原資料第12筆。"
        }
      ],
      "misconceptionTarget": "只用15×3/4取近似位置而未依半分法。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "15筆且排除中位數時位置唯一。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：定位奇數筆資料的Q3",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "定位奇數筆資料的Q3",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "e36c0d8ef661ba30b9995d4ac511733f08fba003e16d1bacdd5f713d73b97b3d"
    },
    {
      "questionId": "u22-s004-v006",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "已排序資料共有7筆。若排除第4筆後求四分位數，Q1與Q3分別位於哪裡？",
      "text": "已排序資料共有7筆。若排除第4筆後求四分位數，Q1與Q3分別位於哪裡？",
      "givenConditions": [],
      "target": "處理各半部為奇數筆的位置",
      "choices": [
        "第2筆與第6筆",
        "第1筆與第7筆",
        "第2、3筆平均與第5、6筆平均",
        "第3筆與第5筆"
      ],
      "answerIndex": 0,
      "independentSolution": "下半部第1到3筆的中位數是第2筆；上半部第5到7筆的中位數是第6筆。",
      "explanation": "下半部第1到3筆的中位數是第2筆；上半部第5到7筆的中位數是第6筆。",
      "steps": [
        "排除第4筆。",
        "各半部3筆取中央。"
      ],
      "optionAnalysis": [
        {
          "choice": "第2筆與第6筆",
          "truth": true,
          "reason": "正確。獨立重算：下半部第1到3筆的中位數是第2筆；上半部第5到7筆的中位數是第6筆。"
        },
        {
          "choice": "第1筆與第7筆",
          "truth": false,
          "reason": "這是最小值與最大值。"
        },
        {
          "choice": "第2、3筆平均與第5、6筆平均",
          "truth": false,
          "reason": "每半部只有3筆，不需平均。"
        },
        {
          "choice": "第3筆與第5筆",
          "truth": false,
          "reason": "各半部的中位數位置判錯。"
        }
      ],
      "misconceptionTarget": "看到奇數筆就一律平均兩筆。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "採明定的排除中位數規則。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：處理各半部為奇數筆的位置",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "處理各半部為奇數筆的位置",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "7c0dcab3d2ab4495c49fafc6520e86fff9b4c579cb2804ea8841e9ab94aa8b2a"
    },
    {
      "questionId": "u22-s004-v007",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "8筆已排序資料中，在最前面再加入一個更小的數，成為9筆。依排除中位數規則，新的Q2原本是第幾筆資料？",
      "text": "8筆已排序資料中，在最前面再加入一個更小的數，成為9筆。依排除中位數規則，新的Q2原本是第幾筆資料？",
      "givenConditions": [],
      "target": "追蹤插入資料後的位置",
      "choices": [
        "原第3筆",
        "原第4筆",
        "原第5筆",
        "原第6筆"
      ],
      "answerIndex": 1,
      "independentSolution": "加入新最小值後，原第1到第8筆依序變成新第2到第9筆。9筆的Q2是新第5筆，對應原第4筆。",
      "explanation": "加入新最小值後，原第1到第8筆依序變成新第2到第9筆。9筆的Q2是新第5筆，對應原第4筆。",
      "steps": [
        "所有原位置加1。",
        "新Q2在第5筆。",
        "回推原第4筆。"
      ],
      "optionAnalysis": [
        {
          "choice": "原第3筆",
          "truth": false,
          "reason": "加入新最小值後原第3筆成為第4位置。"
        },
        {
          "choice": "原第4筆",
          "truth": true,
          "reason": "正確。獨立重算：加入新最小值後，原第1到第8筆依序變成新第2到第9筆。9筆的Q2是新第5筆，對應原第4筆。"
        },
        {
          "choice": "原第5筆",
          "truth": false,
          "reason": "新第5位置不是原第5筆。"
        },
        {
          "choice": "原第6筆",
          "truth": false,
          "reason": "位置移動過多。"
        }
      ],
      "misconceptionTarget": "資料增加後忽略原位置整體平移。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "新增值明確小於原最小值，不會插入中間。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：追蹤插入資料後的位置",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "追蹤插入資料後的位置",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "1308177b264d18328a735997e43f421117a27c707d17030b2abb7287a554934f"
    },
    {
      "questionId": "u22-s004-v008",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一組11筆已排序資料的Q1是第3筆、Q2是第6筆、Q3是第9筆。若刪除第1筆，成為10筆，新的Q2由原資料哪兩筆平均？",
      "text": "一組11筆已排序資料的Q1是第3筆、Q2是第6筆、Q3是第9筆。若刪除第1筆，成為10筆，新的Q2由原資料哪兩筆平均？",
      "givenConditions": [],
      "target": "刪除資料後重新定位中位數",
      "choices": [
        "原第5與第6筆",
        "原第7與第8筆",
        "原第6與第7筆",
        "原第3與第9筆"
      ],
      "answerIndex": 2,
      "independentSolution": "刪除原第1筆後，新10筆的第5與第6筆分別是原第6與第7筆，所以新Q2取兩者平均。",
      "explanation": "刪除原第1筆後，新10筆的第5與第6筆分別是原第6與第7筆，所以新Q2取兩者平均。",
      "steps": [
        "新Q2位置為第5、6筆。",
        "刪除首筆使新第k筆對應原第k+1筆。"
      ],
      "optionAnalysis": [
        {
          "choice": "原第5與第6筆",
          "truth": false,
          "reason": "刪除第1筆後新第5、6筆對應原第6、7筆。"
        },
        {
          "choice": "原第7與第8筆",
          "truth": false,
          "reason": "整體換算多1。"
        },
        {
          "choice": "原第6與第7筆",
          "truth": true,
          "reason": "正確。獨立重算：刪除原第1筆後，新10筆的第5與第6筆分別是原第6與第7筆，所以新Q2取兩者平均。"
        },
        {
          "choice": "原第3與第9筆",
          "truth": false,
          "reason": "把原四分位位置拿來平均。"
        }
      ],
      "misconceptionTarget": "只記原中位數位置，未重算新筆數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "刪除的是確定最小值，位置對應清楚。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：刪除資料後重新定位中位數",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "刪除資料後重新定位中位數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "e64c584003bcf081044c9cd076013db0c30cd332e9884dc5ebd6ffd35d02dc36"
    },
    {
      "questionId": "u22-s004-v009",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "有20筆排序資料。若只知道第5筆=30、第6筆=34、第15筆=52、第16筆=60，依半分法，IQR是多少？",
      "text": "有20筆排序資料。若只知道第5筆=30、第6筆=34、第15筆=52、第16筆=60，依半分法，IQR是多少？",
      "givenConditions": [],
      "target": "由關鍵位置求IQR",
      "choices": [
        "18",
        "26",
        "30",
        "24"
      ],
      "answerIndex": 3,
      "independentSolution": "下半部10筆的Q1=(第5+第6)÷2=32；上半部10筆的Q3=(第15+第16)÷2=56；IQR=56-32=24。",
      "explanation": "下半部10筆的Q1=(第5+第6)÷2=32；上半部10筆的Q3=(第15+第16)÷2=56；IQR=56-32=24。",
      "steps": [
        "定位Q1為第5、6筆平均。",
        "定位Q3為第15、16筆平均。",
        "相減得24。"
      ],
      "optionAnalysis": [
        {
          "choice": "18",
          "truth": false,
          "reason": "用52-34。"
        },
        {
          "choice": "26",
          "truth": false,
          "reason": "用60-34。"
        },
        {
          "choice": "30",
          "truth": false,
          "reason": "用60-30。"
        },
        {
          "choice": "24",
          "truth": true,
          "reason": "正確。獨立重算：下半部10筆的Q1=(第5+第6)÷2=32；上半部10筆的Q3=(第15+第16)÷2=56；IQR=56-32=24。"
        }
      ],
      "misconceptionTarget": "知道位置但只取內側或外側單一值。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "不需其餘16筆的值，只要排序成立。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由關鍵位置求IQR",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由關鍵位置求IQR",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "d1867c93ff931245058275964d0b94b5ac8b0d56670e05e2e15d40a39503ff54"
    },
    {
      "questionId": "u22-s004-v010",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "路跑活動有18名完賽者，依時間由短到長排序。主辦方要找中間50%完賽者的時間範圍，應讀取哪些位置？",
      "text": "路跑活動有18名完賽者，依時間由短到長排序。主辦方要找中間50%完賽者的時間範圍，應讀取哪些位置？",
      "givenConditions": [],
      "target": "在實際排名中定位四分位數",
      "choices": [
        "Q1第5筆；Q3第14筆",
        "Q1由第4、5筆平均；Q3由第14、15筆平均",
        "Q1第4筆；Q3第15筆",
        "Q1第9筆；Q3第10筆"
      ],
      "answerIndex": 0,
      "independentSolution": "18筆分成前9筆與後9筆。前9筆中位數是原第5筆；後9筆中位數是原第14筆，因此正確位置應為第5筆與第14筆。",
      "explanation": "18筆分成前9筆與後9筆。前9筆中位數是原第5筆；後9筆中位數是原第14筆，因此正確位置應為第5筆與第14筆。",
      "steps": [
        "前半9筆取第5個。",
        "後半9筆第5個對應原第14筆。"
      ],
      "optionAnalysis": [
        {
          "choice": "Q1第5筆；Q3第14筆",
          "truth": true,
          "reason": "正確。獨立重算：18筆分成前9筆與後9筆。前9筆中位數是原第5筆；後9筆中位數是原第14筆，因此正確位置應為第5筆與第14筆。"
        },
        {
          "choice": "Q1由第4、5筆平均；Q3由第14、15筆平均",
          "truth": false,
          "reason": "18筆分成兩組各9筆，各半部中位數是單一第5個。"
        },
        {
          "choice": "Q1第4筆；Q3第15筆",
          "truth": false,
          "reason": "把半部中位位置向外移一格。"
        },
        {
          "choice": "Q1第9筆；Q3第10筆",
          "truth": false,
          "reason": "這是整組中央兩位置。"
        }
      ],
      "misconceptionTarget": "把半部筆數的奇偶判斷錯誤。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "estimatedTimeSec": 180,
      "unitCheck": "本題只問排名位置，不涉及時間單位。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "18筆的上下半部各9筆，Q1與Q3都是原資料中的單一值。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在實際排名中定位四分位數",
      "literacyContextNecessity": "路跑分組需要以排名位置界定中段完賽者。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "在實際排名中定位四分位數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "be65e45f8f563b73837b1866fef17d43beeb114b68c5423d45f29def1d804898"
    },
    {
      "questionId": "u22-s004-v011",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一所學校將13位學生的閱讀頁數排序，採排除中位數的半分法。若Q1是下半部第3、4筆的平均，這兩筆在整組中是第幾筆？",
      "text": "一所學校將13位學生的閱讀頁數排序，採排除中位數的半分法。若Q1是下半部第3、4筆的平均，這兩筆在整組中是第幾筆？",
      "givenConditions": [],
      "target": "把半部位置換回整組排名",
      "choices": [
        "第4與第5筆",
        "第3與第4筆",
        "第6與第7筆",
        "第10與第11筆"
      ],
      "answerIndex": 1,
      "independentSolution": "13筆的中位數是第7筆；下半部為第1到6筆，其中央就是整組第3與第4筆。",
      "explanation": "13筆的中位數是第7筆；下半部為第1到6筆，其中央就是整組第3與第4筆。",
      "steps": [
        "找整組中位數第7筆。",
        "辨認下半部第1至6筆。",
        "取第3、4筆。"
      ],
      "optionAnalysis": [
        {
          "choice": "第4與第5筆",
          "truth": false,
          "reason": "下半部從整組第1筆開始。"
        },
        {
          "choice": "第3與第4筆",
          "truth": true,
          "reason": "正確。獨立重算：13筆的中位數是第7筆；下半部為第1到6筆，其中央就是整組第3與第4筆。"
        },
        {
          "choice": "第6與第7筆",
          "truth": false,
          "reason": "第7筆是整組中位數。"
        },
        {
          "choice": "第10與第11筆",
          "truth": false,
          "reason": "這是上半部位置。"
        }
      ],
      "misconceptionTarget": "把整組中位數附近的位置誤當Q1。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "題幹明定排除第7筆。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：把半部位置換回整組排名",
      "literacyContextNecessity": "頁數資料以排序排名定位，無需知道實際頁數。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "把半部位置換回整組排名",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "5f1061e6881a6710441c260ef1bb1b1680c0378237ee36a6847d3f635e3cf37a"
    },
    {
      "questionId": "u22-s004-v012",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某網站公布25筆商品到貨天數的Q3，並註明採排除中位數的半分法。Q3應取原排序資料的第幾筆？",
      "text": "某網站公布25筆商品到貨天數的Q3，並註明採排除中位數的半分法。Q3應取原排序資料的第幾筆？",
      "givenConditions": [],
      "target": "辨識大樣本Q3位置",
      "choices": [
        "第19筆",
        "第20筆",
        "第19與第20筆的平均",
        "第13筆"
      ],
      "answerIndex": 2,
      "independentSolution": "25筆的Q2是第13筆。上半部為第14到25筆，共12筆，Q3是上半部第6、7筆平均，即原第19與20筆的平均。",
      "explanation": "25筆的Q2是第13筆。上半部為第14到25筆，共12筆，Q3是上半部第6、7筆平均，即原第19與20筆的平均。",
      "steps": [
        "排除第13筆。",
        "上半部12筆取第6、7筆。",
        "對應原第19、20筆。"
      ],
      "optionAnalysis": [
        {
          "choice": "第19筆",
          "truth": false,
          "reason": "上半部有12筆，需平均中央兩筆。"
        },
        {
          "choice": "第20筆",
          "truth": false,
          "reason": "只取上半部第7筆。"
        },
        {
          "choice": "第19與第20筆的平均",
          "truth": true,
          "reason": "正確。獨立重算：25筆的Q2是第13筆。上半部為第14到25筆，共12筆，Q3是上半部第6、7筆平均，即原第19與20筆的平均。"
        },
        {
          "choice": "第13筆",
          "truth": false,
          "reason": "這是整組中位數。"
        }
      ],
      "misconceptionTarget": "上半部為偶數筆卻只取其中一筆。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "estimatedTimeSec": 180,
      "unitCheck": "本題只判斷排序位置。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "正確Q3是第19與20筆平均，不是單一位置。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：辨識大樣本Q3位置",
      "literacyContextNecessity": "到貨天數的Q3常作為較慢四分之一的服務門檻，位置規則影響公告值。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "辨識大樣本Q3位置",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "d969a99e50bdee015cda59d3038e6380d910508a14c6503c6228393d4b969453"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u22-s004-cr001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "共有18筆資料已排序。請寫出Q1、Q2、Q3應取原資料哪些位置，採半分法。",
      "requiredWork": [
        "分出前9與後9筆。",
        "標示整組中央位置。",
        "換算三個四分位位置。"
      ],
      "standardSolution": [
        "Q2由第9與第10筆平均。",
        "前9筆的中位數是原第5筆，所以Q1取第5筆。",
        "後9筆的中位數是原第14筆，所以Q3取第14筆。"
      ],
      "reasoningSteps": [
        "Q2由第9與第10筆平均。",
        "前9筆的中位數是原第5筆，所以Q1取第5筆。",
        "後9筆的中位數是原第14筆，所以Q3取第14筆。"
      ],
      "alternativeMethods": [
        "可先編號1到18，在第9、10間切分，再圈兩半各自第5個。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "Q1第5、Q2第9與10平均、Q3第14全部正確且理由完整。"
        },
        {
          "score": 2,
          "criteria": "三者中一處位置換算錯，其餘與分半方法正確。"
        },
        {
          "score": 1,
          "criteria": "能正確寫出Q2並知道上下各9筆。"
        },
        {
          "score": 0,
          "criteria": "以18/4直接取第4.5筆等不符合半分法。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若上下半部正確但上半部換算差1，可給2分；若未分半則最高1分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "Q1取第4、5平均。",
        "Q3取第13、14平均。",
        "Q2只取第9筆。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "Q2由第9與第10筆平均。；前9筆的中位數是原第5筆，所以Q1取第5筆。；後9筆的中位數是原第14筆，所以Q3取第14筆。",
        "alternativeMethodCheck": "可先編號1到18，在第9、10間切分，再圈兩半各自第5個。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "107a8ca432f5efff77b9de9a8c11b3ac58a86114704c3348e3a8d7cf2fa32dce"
    },
    {
      "questionId": "u22-s004-cr002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-position",
      "lockedSkillOrder": 4,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "25筆資料已排序，採排除總中位數的半分法。請說明Q2位置，以及Q1、Q3由哪些原位置平均。",
      "requiredWork": [
        "找總中位數。",
        "排除後各12筆。",
        "換算上下半部中央兩位置。"
      ],
      "standardSolution": [
        "Q2是第13筆。",
        "下半部第1到12筆，Q1由原第6與第7筆平均。",
        "上半部第14到25筆，Q3由原第19與第20筆平均。"
      ],
      "reasoningSteps": [
        "Q2是第13筆。",
        "下半部第1到12筆，Q1由原第6與第7筆平均。",
        "上半部第14到25筆，Q3由原第19與第20筆平均。"
      ],
      "alternativeMethods": [
        "可把上半部重新編1到12；其第6、7個分別對應原19、20。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "第13、6與7、19與20位置全部正確且換算說明完整。"
        },
        {
          "score": 2,
          "criteria": "只錯一個上半部換算位置。"
        },
        {
          "score": 1,
          "criteria": "正確找第13筆並知道兩半各12筆。"
        },
        {
          "score": 0,
          "criteria": "把Q1、Q3各取單一位置或納入第13筆。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若半部中央位置6、7正確但轉回原位置錯，可給2分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "Q3只取第19筆。",
        "Q1取第5、6筆。",
        "把第13筆同時放進兩半。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "Q2是第13筆。；下半部第1到12筆，Q1由原第6與第7筆平均。；上半部第14到25筆，Q3由原第19與第20筆平均。",
        "alternativeMethodCheck": "可把上半部重新編1到12；其第6、7個分別對應原19、20。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "c5e297dea2c5a344c41fd587d2a9be67c96225d71e32c9f47bdbec348e1e7f61"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u22-s004-v001",
      "unitId": "u22",
      "skillId": "quartile-position",
      "contentSha256": "3f5af9989eb2edbd35687f8e4065c3ab8c58d52249a64bbfa62c1170bbdec46c",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "10筆資料的中央分界在5與6之間，所以Q2由第5與第6筆平均。",
      "derivedAnswer": "第5與第6筆",
      "storedAnswer": "第5與第6筆",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「第5與第6筆」；其餘選項逐項排除：「第4與第5筆」：這兩筆位於中央左側。；「第6與第7筆」：這兩筆位於中央右側。；「只取第5筆」：偶數筆需平均兩個中央位置。",
        "undefinedSymbol": "題幹術語均已在「四分位數位置」講義定義；實際目標為「定位偶數筆資料的Q2」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "位置從1開始編號。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「偶數筆只取單一中央位置。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：定位偶數筆資料的Q2",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一組10筆資料已排序。中位數 Q2 應由哪兩個位置的資料平均？」；獨立解法「10筆資料的中央分界在5與6之間，所以Q2由第5與第6筆平均。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s004-v002",
      "unitId": "u22",
      "skillId": "quartile-position",
      "contentSha256": "fbebe720366f1ea1db62c13ea3f3b17a5094527cb8f6ae29187d74071f477e2f",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "下半部是第1到第6筆，其中位數由其第3、4筆，也就是原資料第3、4筆平均。",
      "derivedAnswer": "第3與第4筆",
      "storedAnswer": "第3與第4筆",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「第3與第4筆」；其餘選項逐項排除：「第2與第3筆」：下半部6筆的中央不是2與3。；「第4與第5筆」：這是下半部偏右位置。；「第6與第7筆」：這兩筆用於整組中位數。",
        "undefinedSymbol": "題幹術語均已在「四分位數位置」講義定義；實際目標為「定位Q1的兩個位置」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "採半分法，不做線性插值。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「直接用12的四分之一等於3而只取第3筆。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：定位Q1的兩個位置",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「12筆已排序資料使用半分法。Q1 由原資料的哪兩個位置平均？」；獨立解法「下半部是第1到第6筆，其中位數由其第3、4筆，也就是原資料第3、4筆平均。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s004-v003",
      "unitId": "u22",
      "skillId": "quartile-position",
      "contentSha256": "3851f5581e58f0ffbebed07b69ca76b213b161b416035fe7ac569d411a509427",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "上半部是原資料第7到第12筆，共6筆；上半部中央第3、4筆分別對應原資料第9、10筆，所以Q3由第9與第10筆平均。",
      "derivedAnswer": "第9與第10筆",
      "storedAnswer": "第9與第10筆",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「第9與第10筆」；其餘選項逐項排除：「第8與第9筆」：上半部中央應再向右一位。；「第10與第11筆」：這兩筆偏向上端。；「第6與第7筆」：這是Q2位置。",
        "undefinedSymbol": "題幹術語均已在「四分位數位置」講義定義；實際目標為「定位Q3的兩個位置」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "位置從原資料第1筆起算。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「在上半部重新編號時換算錯誤。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：定位Q3的兩個位置",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「將12筆已排序資料分成前6筆與後6筆後，Q3應由上半部哪兩筆對應的原資料位置平均？」；獨立解法「上半部是原資料第7到第12筆，共6筆；上半部中央第3、4筆分別對應原資料第9、10筆，所以Q3由第9與第10筆平均。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s004-v004",
      "unitId": "u22",
      "skillId": "quartile-position",
      "contentSha256": "5d753527aa2f789c0976d7cf2275109d1ca9aae55d749141183f85c2830dc297",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "排除第5筆後，下半部為第1到第4筆，中央位置是第2與第3筆。",
      "derivedAnswer": "第2與第3筆",
      "storedAnswer": "第2與第3筆",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「第2與第3筆」；其餘選項逐項排除：「第1與第2筆」：下半部4筆的中央不是最前兩筆。；「第3與第4筆」：偏向下半部右端。；「第4與第5筆」：錯把總中位數放入下半部。",
        "undefinedSymbol": "題幹術語均已在「四分位數位置」講義定義；實際目標為「定位奇數筆資料的Q1」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "題幹已指定排除中位數。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「奇數筆時把總中位數納入下半部。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：定位奇數筆資料的Q1",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「9筆資料排序後，規定求Q1與Q3時排除第5筆中位數。Q1由哪兩筆平均？」；獨立解法「排除第5筆後，下半部為第1到第4筆，中央位置是第2與第3筆。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s004-v005",
      "unitId": "u22",
      "skillId": "quartile-position",
      "contentSha256": "e36c0d8ef661ba30b9995d4ac511733f08fba003e16d1bacdd5f713d73b97b3d",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "第8筆是Q2；上半部為第9到第15筆，共7筆，其中位數是上半部第4筆，即原資料第12筆。",
      "derivedAnswer": "第12筆",
      "storedAnswer": "第12筆",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「第12筆」；其餘選項逐項排除：「第11筆」：把上半部起點換算少1。；「第13筆」：把上半部中位數往右多1。；「第8筆」：這是整組中位數。",
        "undefinedSymbol": "題幹術語均已在「四分位數位置」講義定義；實際目標為「定位奇數筆資料的Q3」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "15筆且排除中位數時位置唯一。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只用15×3/4取近似位置而未依半分法。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：定位奇數筆資料的Q3",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「15筆資料已排序，求Q3時排除整組中位數。Q3是原資料第幾筆？」；獨立解法「第8筆是Q2；上半部為第9到第15筆，共7筆，其中位數是上半部第4筆，即原資料第12筆。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s004-v006",
      "unitId": "u22",
      "skillId": "quartile-position",
      "contentSha256": "7c0dcab3d2ab4495c49fafc6520e86fff9b4c579cb2804ea8841e9ab94aa8b2a",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "下半部第1到3筆的中位數是第2筆；上半部第5到7筆的中位數是第6筆。",
      "derivedAnswer": "第2筆與第6筆",
      "storedAnswer": "第2筆與第6筆",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「第2筆與第6筆」；其餘選項逐項排除：「第1筆與第7筆」：這是最小值與最大值。；「第2、3筆平均與第5、6筆平均」：每半部只有3筆，不需平均。；「第3筆與第5筆」：各半部的中位數位置判錯。",
        "undefinedSymbol": "題幹術語均已在「四分位數位置」講義定義；實際目標為「處理各半部為奇數筆的位置」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "採明定的排除中位數規則。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「看到奇數筆就一律平均兩筆。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：處理各半部為奇數筆的位置",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已排序資料共有7筆。若排除第4筆後求四分位數，Q1與Q3分別位於哪裡？」；獨立解法「下半部第1到3筆的中位數是第2筆；上半部第5到7筆的中位數是第6筆。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s004-v007",
      "unitId": "u22",
      "skillId": "quartile-position",
      "contentSha256": "1308177b264d18328a735997e43f421117a27c707d17030b2abb7287a554934f",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "加入新最小值後，原第1到第8筆依序變成新第2到第9筆。9筆的Q2是新第5筆，對應原第4筆。",
      "derivedAnswer": "原第4筆",
      "storedAnswer": "原第4筆",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「原第4筆」；其餘選項逐項排除：「原第3筆」：加入新最小值後原第3筆成為第4位置。；「原第5筆」：新第5位置不是原第5筆。；「原第6筆」：位置移動過多。",
        "undefinedSymbol": "題幹術語均已在「四分位數位置」講義定義；實際目標為「追蹤插入資料後的位置」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "新增值明確小於原最小值，不會插入中間。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「資料增加後忽略原位置整體平移。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：追蹤插入資料後的位置",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「8筆已排序資料中，在最前面再加入一個更小的數，成為9筆。依排除中位數規則，新的Q2原本是第幾筆資料？」；獨立解法「加入新最小值後，原第1到第8筆依序變成新第2到第9筆。9筆的Q2是新第5筆，對應原第4筆。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s004-v008",
      "unitId": "u22",
      "skillId": "quartile-position",
      "contentSha256": "e64c584003bcf081044c9cd076013db0c30cd332e9884dc5ebd6ffd35d02dc36",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "刪除原第1筆後，新10筆的第5與第6筆分別是原第6與第7筆，所以新Q2取兩者平均。",
      "derivedAnswer": "原第6與第7筆",
      "storedAnswer": "原第6與第7筆",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「原第6與第7筆」；其餘選項逐項排除：「原第5與第6筆」：刪除第1筆後新第5、6筆對應原第6、7筆。；「原第7與第8筆」：整體換算多1。；「原第3與第9筆」：把原四分位位置拿來平均。",
        "undefinedSymbol": "題幹術語均已在「四分位數位置」講義定義；實際目標為「刪除資料後重新定位中位數」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "刪除的是確定最小值，位置對應清楚。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只記原中位數位置，未重算新筆數。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：刪除資料後重新定位中位數",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一組11筆已排序資料的Q1是第3筆、Q2是第6筆、Q3是第9筆。若刪除第1筆，成為10筆，新的Q2由原資料哪兩筆平均？」；獨立解法「刪除原第1筆後，新10筆的第5與第6筆分別是原第6與第7筆，所以新Q2取兩者平均。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s004-v009",
      "unitId": "u22",
      "skillId": "quartile-position",
      "contentSha256": "d1867c93ff931245058275964d0b94b5ac8b0d56670e05e2e15d40a39503ff54",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "下半部10筆的Q1=(第5+第6)÷2=32；上半部10筆的Q3=(第15+第16)÷2=56；IQR=56-32=24。",
      "derivedAnswer": "24",
      "storedAnswer": "24",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「24」；其餘選項逐項排除：「18」：用52-34。；「26」：用60-34。；「30」：用60-30。",
        "undefinedSymbol": "題幹術語均已在「四分位數位置」講義定義；實際目標為「由關鍵位置求IQR」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "不需其餘16筆的值，只要排序成立。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「知道位置但只取內側或外側單一值。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由關鍵位置求IQR",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「有20筆排序資料。若只知道第5筆=30、第6筆=34、第15筆=52、第16筆=60，依半分法，IQR是多少？」；獨立解法「下半部10筆的Q1=(第5+第6)÷2=32；上半部10筆的Q3=(第15+第16)÷2=56；IQR=56-32=24。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s004-v010",
      "unitId": "u22",
      "skillId": "quartile-position",
      "contentSha256": "be65e45f8f563b73837b1866fef17d43beeb114b68c5423d45f29def1d804898",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "18筆分成前9筆與後9筆。前9筆中位數是原第5筆；後9筆中位數是原第14筆，因此正確位置應為第5筆與第14筆。",
      "derivedAnswer": "Q1第5筆；Q3第14筆",
      "storedAnswer": "Q1第5筆；Q3第14筆",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「Q1第5筆；Q3第14筆」；其餘選項逐項排除：「Q1由第4、5筆平均；Q3由第14、15筆平均」：18筆分成兩組各9筆，各半部中位數是單一第5個。；「Q1第4筆；Q3第15筆」：把半部中位位置向外移一格。；「Q1第9筆；Q3第10筆」：這是整組中央兩位置。",
        "undefinedSymbol": "題幹術語均已在「四分位數位置」講義定義；實際目標為「在實際排名中定位四分位數」。",
        "unitConflict": "本題只問排名位置，不涉及時間單位。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "18筆的上下半部各9筆，Q1與Q3都是原資料中的單一值。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把半部筆數的奇偶判斷錯誤。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在實際排名中定位四分位數",
      "literacyContextNecessity": "路跑分組需要以排名位置界定中段完賽者。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「路跑活動有18名完賽者，依時間由短到長排序。主辦方要找中間50%完賽者的時間範圍，應讀取哪些位置？」；獨立解法「18筆分成前9筆與後9筆。前9筆中位數是原第5筆；後9筆中位數是原第14筆，因此正確位置應為第5筆與第14筆。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s004-v011",
      "unitId": "u22",
      "skillId": "quartile-position",
      "contentSha256": "5f1061e6881a6710441c260ef1bb1b1680c0378237ee36a6847d3f635e3cf37a",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "13筆的中位數是第7筆；下半部為第1到6筆，其中央就是整組第3與第4筆。",
      "derivedAnswer": "第3與第4筆",
      "storedAnswer": "第3與第4筆",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「第3與第4筆」；其餘選項逐項排除：「第4與第5筆」：下半部從整組第1筆開始。；「第6與第7筆」：第7筆是整組中位數。；「第10與第11筆」：這是上半部位置。",
        "undefinedSymbol": "題幹術語均已在「四分位數位置」講義定義；實際目標為「把半部位置換回整組排名」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "題幹明定排除第7筆。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把整組中位數附近的位置誤當Q1。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：把半部位置換回整組排名",
      "literacyContextNecessity": "頁數資料以排序排名定位，無需知道實際頁數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一所學校將13位學生的閱讀頁數排序，採排除中位數的半分法。若Q1是下半部第3、4筆的平均，這兩筆在整組中是第幾筆？」；獨立解法「13筆的中位數是第7筆；下半部為第1到6筆，其中央就是整組第3與第4筆。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s004-v012",
      "unitId": "u22",
      "skillId": "quartile-position",
      "contentSha256": "d969a99e50bdee015cda59d3038e6380d910508a14c6503c6228393d4b969453",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "25筆的Q2是第13筆。上半部為第14到25筆，共12筆，Q3是上半部第6、7筆平均，即原第19與20筆的平均。",
      "derivedAnswer": "第19與第20筆的平均",
      "storedAnswer": "第19與第20筆的平均",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「第19與第20筆的平均」；其餘選項逐項排除：「第19筆」：上半部有12筆，需平均中央兩筆。；「第20筆」：只取上半部第7筆。；「第13筆」：這是整組中位數。",
        "undefinedSymbol": "題幹術語均已在「四分位數位置」講義定義；實際目標為「辨識大樣本Q3位置」。",
        "unitConflict": "本題只判斷排序位置。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "正確Q3是第19與20筆平均，不是單一位置。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「上半部為偶數筆卻只取其中一筆。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：辨識大樣本Q3位置",
      "literacyContextNecessity": "到貨天數的Q3常作為較慢四分之一的服務門檻，位置規則影響公告值。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：box-plot-interpret。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某網站公布25筆商品到貨天數的Q3，並註明採排除中位數的半分法。Q3應取原排序資料的第幾筆？」；獨立解法「25筆的Q2是第13筆。上半部為第14到25筆，共12筆，Q3是上半部第6、7筆平均，即原第19與20筆的平均。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    }
  ],
  "drawingSpecs": []
};
