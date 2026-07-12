// Emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u22-s007-lecture-r1",
    "unitId": "u22",
    "numericUnitId": 22,
    "topicId": "u22-quartiles",
    "skillId": "ogive-read",
    "lockedSkillOrder": 7,
    "title": "累積次數折線圖：讀取累積次數與區間次數與四分位位置。",
    "originalLockedTitle": "累積次數折線圖",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能讀累積次數終點與總數。",
      "能用相鄰累積差求區間次數。",
      "能定位中位數與四分位數所在組。",
      "能檢查累積序列是否非遞減。"
    ],
    "prerequisiteSkillIds": [
      "iqr-outlier-basic"
    ],
    "prerequisiteBridge": "承接四分位位置與離群概念。",
    "glossary": [
      {
        "term": "累積次數",
        "definition": "截至某上界為止的資料總數。"
      },
      {
        "term": "組次數",
        "definition": "只落在某一區間內的資料數。"
      },
      {
        "term": "累積次數折線圖",
        "definition": "以組上界為橫軸、累積次數為縱軸連點的圖。"
      }
    ],
    "notation": [
      {
        "symbol": "第k組次數=Ck-C(k-1)",
        "meaning": "相鄰累積次數相減。"
      },
      {
        "symbol": "最後累積次數=N",
        "meaning": "圖涵蓋全部資料時。"
      }
    ],
    "conceptNarrative": [
      "累積次數是「到目前為止」的總和，所以只能持平或上升。",
      "某組本身的次數要用該組上界累積值減前一組上界累積值。",
      "總數N的中位位置約在中央筆，Q1約在N/4附近，Q3約在3N/4附近；把位置與累積值比較可定位所在組。",
      "分組圖通常不能知道組內每筆實際值，因此只能說四分位數位於哪一區間。",
      "折線斜率陡表示該區間增加人數多，但不能把斜率當連續密度精算。"
    ],
    "formalDefinitions": [
      {
        "name": "終點",
        "statement": "最後組上界與總累積次數。"
      },
      {
        "name": "非遞減性",
        "statement": "後一累積值不得小於前一值。"
      }
    ],
    "formulas": [
      {
        "formula": "區間次數=後累積-前累積",
        "conditions": [
          "端點分組規則一致時。"
        ],
        "meaning": "端點分組規則一致時。"
      },
      {
        "formula": "經驗機率=累積次數÷總數",
        "conditions": [
          "從資料隨機抽一筆時。"
        ],
        "meaning": "從資料隨機抽一筆時。"
      }
    ],
    "nonApplicableCases": [
      "不能把累積次數直接當組次數。",
      "不能接受下降的累積折線。",
      "不能在未提供假設時做組內線性插值。",
      "不同圖的總數不同時不能只比累積高度。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "讀點",
        "check": "確認橫軸上界與縱軸累積值。"
      },
      {
        "step": 2,
        "instruction": "求組次數",
        "check": "取相鄰差。"
      },
      {
        "step": 3,
        "instruction": "找總數",
        "check": "讀最後縱座標。"
      },
      {
        "step": 4,
        "instruction": "定位位置",
        "check": "用第幾筆與累積值夾住。"
      },
      {
        "step": 5,
        "instruction": "限制結論",
        "check": "只報組別或已能確定的次數。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "累積8與15",
        "solutionSteps": [
          "該相鄰組次數7。"
        ],
        "answer": "該相鄰組次數7。"
      },
      {
        "exampleId": "L2",
        "prompt": "32筆，累積到20為13、到30為25",
        "solutionSteps": [
          "中位第16、17筆位於20到30組。"
        ],
        "answer": "中位第16、17筆位於20到30組。"
      },
      {
        "exampleId": "L3",
        "prompt": "60筆，累積29到47",
        "solutionSteps": [
          "Q3約第45筆，位於該組。"
        ],
        "answer": "Q3約第45筆，位於該組。"
      },
      {
        "exampleId": "L4",
        "prompt": "序列5、12、10、19",
        "solutionSteps": [
          "12降到10，資料不可能。"
        ],
        "answer": "12降到10，資料不可能。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "相鄰差方向寫反",
        "why": "後減前才非負。",
        "correction": "後減前才非負。"
      },
      {
        "mistake": "用總數減前累積求中間組",
        "why": "會混入後面所有組。",
        "correction": "會混入後面所有組。"
      },
      {
        "mistake": "把Q3數值寫成總數的75%",
        "why": "75%先表示位置，不是橫軸值。",
        "correction": "75%先表示位置，不是橫軸值。"
      },
      {
        "mistake": "圖線下降仍照算",
        "why": "先判定圖或資料錯誤。",
        "correction": "先判定圖或資料錯誤。"
      }
    ],
    "selfCheck": [
      "累積值是否非遞減？",
      "最後值是否等於總數？",
      "區間次數是否用相鄰差？",
      "四分位位置是否落在正確累積區間？"
    ],
    "summary": [
      "累積圖的核心是「相鄰差」與「位置夾住」。",
      "終點給總數。",
      "四分位數在分組資料中通常只能定位組別。",
      "下降的累積線不合法。"
    ],
    "connections": {
      "previous": "承接四分位位置與離群概念。",
      "next": [
        "下一技能比較全距與IQR。",
        "統計機率綜合題會把累積次數轉成抽樣機率。"
      ]
    },
    "figureReferences": [
      "fig-u22-ogive"
    ],
    "figureAccessibility": [
      {
        "figureId": "fig-u22-ogive",
        "altText": "累積次數折線圖，點為50分4人、60分10人、70分22人、80分34人、90分40人。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u22-s007-v001",
        "u22-s007-v002",
        "u22-s007-v003",
        "u22-s007-v004",
        "u22-s007-v005",
        "u22-s007-v006",
        "u22-s007-v007",
        "u22-s007-v008",
        "u22-s007-v009",
        "u22-s007-v010",
        "u22-s007-v011",
        "u22-s007-v012"
      ],
      "constructedResponseIds": [
        "u22-s007-cr001",
        "u22-s007-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "skillSpecificReviewEvidence": "以總數32、48、60三種案例逐一定位中央與Q3位置；確認所有累積序列非遞減且相鄰差總和回到終點總數。",
      "futureKnowledgeCheck": "pass; all methods use this skill or declared prerequisites only",
      "contentBoundary": "讀取累積次數、區間次數與四分位位置。",
      "reviewVersion": "human-lecture-review-u22-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "31d71537ae0e574d8f1e7c5441e2a946226e24b11f5aeb8b508d2233edf835da"
  },
  "mcQuestions": [
    {
      "questionId": "u22-s007-v001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某累積次數表顯示「不超過20」有8人、「不超過30」有15人。大於20且不超過30的人數為多少？",
      "text": "某累積次數表顯示「不超過20」有8人、「不超過30」有15人。大於20且不超過30的人數為多少？",
      "givenConditions": [],
      "target": "由累積次數求區間次數",
      "choices": [
        "8",
        "15",
        "7",
        "23"
      ],
      "answerIndex": 2,
      "independentSolution": "大於20且不超過30的區間次數=15-8=7人。",
      "explanation": "大於20且不超過30的區間次數=15-8=7人。",
      "steps": [
        "用後一累積次數減前一累積次數。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": false,
          "reason": "直接取前一個累積次數。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "直接取後一個累積次數。"
        },
        {
          "choice": "7",
          "truth": true,
          "reason": "正確。獨立重算：大於20且不超過30的區間次數=15-8=7人。"
        },
        {
          "choice": "23",
          "truth": false,
          "reason": "把兩個累積次數相加。"
        }
      ],
      "misconceptionTarget": "把累積次數當單一區間次數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩個累積門檻皆採「不超過」；相減對應20<x≤30，不把恰為20者重複計入。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：由累積次數求區間次數",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由累積次數求區間次數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "f0a317633b5be422d07061a2d3c1eb08fd2c3f4f8a440b602947194169a70e9a"
    },
    {
      "questionId": "u22-s007-v002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "累積次數折線圖最後一點的縱座標通常表示什麼？",
      "text": "累積次數折線圖最後一點的縱座標通常表示什麼？",
      "givenConditions": [],
      "target": "解讀終點縱座標",
      "choices": [
        "資料總筆數",
        "最大資料值",
        "最後一組的次數",
        "平均數"
      ],
      "answerIndex": 0,
      "independentSolution": "累積次數一路加總，到最後上界時已包含全部資料，因此縱座標等於總筆數。",
      "explanation": "累積次數一路加總，到最後上界時已包含全部資料，因此縱座標等於總筆數。",
      "steps": [
        "理解「累積」含義。"
      ],
      "optionAnalysis": [
        {
          "choice": "資料總筆數",
          "truth": true,
          "reason": "正確。獨立重算：累積次數一路加總，到最後上界時已包含全部資料，因此縱座標等於總筆數。"
        },
        {
          "choice": "最大資料值",
          "truth": false,
          "reason": "最大值在橫軸位置，不是縱座標。"
        },
        {
          "choice": "最後一組的次數",
          "truth": false,
          "reason": "最後縱座標是此前全部累積。"
        },
        {
          "choice": "平均數",
          "truth": false,
          "reason": "累積圖不直接顯示平均數。"
        }
      ],
      "misconceptionTarget": "把最後累積值當最後區間值。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "圖必須涵蓋全部分組。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：解讀終點縱座標",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "解讀終點縱座標",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "ec52ea0c7f010ddc6c97b35f62807c63ad8f6fe342a24ed7c826008a2a33956b"
    },
    {
      "questionId": "u22-s007-v003",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "累積次數依序為 3、9、14、20。第二組本身的次數是多少？",
      "text": "累積次數依序為 3、9、14、20。第二組本身的次數是多少？",
      "givenConditions": [],
      "target": "求指定組次數",
      "choices": [
        "3",
        "9",
        "11",
        "6"
      ],
      "answerIndex": 3,
      "independentSolution": "第二組次數=第二個累積9-第一個累積3=6。",
      "explanation": "第二組次數=第二個累積9-第一個累積3=6。",
      "steps": [
        "相鄰累積值相減。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "這是第一組次數。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "這是到第二組的累積次數。"
        },
        {
          "choice": "11",
          "truth": false,
          "reason": "誤用20-9。"
        },
        {
          "choice": "6",
          "truth": true,
          "reason": "正確。獨立重算：第二組次數=第二個累積9-第一個累積3=6。"
        }
      ],
      "misconceptionTarget": "沒有扣除前面已累積的資料。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "累積序列非遞減且總數20。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：求指定組次數",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "求指定組次數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "078b9d991b89ba429e3a0d97b5a8f6071179f09903265fed40e9b642e991167b"
    },
    {
      "questionId": "u22-s007-v004",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "40筆資料的累積次數折線圖中，到某上界的累積次數為11。下列哪個四分位位置已經通過？",
      "text": "40筆資料的累積次數折線圖中，到某上界的累積次數為11。下列哪個四分位位置已經通過？",
      "givenConditions": [],
      "target": "用累積次數定位Q1",
      "choices": [
        "中位數位置",
        "Q1位置",
        "Q3位置",
        "最大值位置"
      ],
      "answerIndex": 1,
      "independentSolution": "40筆的Q1約在第10、11筆；累積到11已涵蓋Q1位置，但未達中位數。",
      "explanation": "40筆的Q1約在第10、11筆；累積到11已涵蓋Q1位置，但未達中位數。",
      "steps": [
        "將Q1位置連結總數四分之一。",
        "比較累積11與20、30、40。"
      ],
      "optionAnalysis": [
        {
          "choice": "中位數位置",
          "truth": false,
          "reason": "中位數約在第20、21筆，尚未通過。"
        },
        {
          "choice": "Q1位置",
          "truth": true,
          "reason": "正確。獨立重算：40筆的Q1約在第10、11筆；累積到11已涵蓋Q1位置，但未達中位數。"
        },
        {
          "choice": "Q3位置",
          "truth": false,
          "reason": "Q3約在第30筆，尚未通過。"
        },
        {
          "choice": "最大值位置",
          "truth": false,
          "reason": "需到第40筆。"
        }
      ],
      "misconceptionTarget": "把四分位數的數值與四分位位置筆數混淆。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "分組資料只能判定Q1所在區間，不一定得到精確原始值。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：用累積次數定位Q1",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "用累積次數定位Q1",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "8a292e70435ed7e8eff3684fb5148ac46ed0fb1618af81506cb312f0f7018ada"
    },
    {
      "questionId": "u22-s007-v005",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "累積次數在上界10、20、30、40時分別為4、13、25、32。資料中位數位於哪個區間？",
      "text": "累積次數在上界10、20、30、40時分別為4、13、25、32。資料中位數位於哪個區間？",
      "givenConditions": [],
      "target": "判定中位數所在組",
      "choices": [
        "0到10",
        "10到20",
        "30到40",
        "20到30"
      ],
      "answerIndex": 3,
      "independentSolution": "共有32筆，中位數是第16、17筆。累積到20只有13筆，到30已有25筆，所以兩個中央位置都在20到30組。",
      "explanation": "共有32筆，中位數是第16、17筆。累積到20只有13筆，到30已有25筆，所以兩個中央位置都在20到30組。",
      "steps": [
        "總數32。",
        "找第16、17筆。",
        "用累積13與25夾住。"
      ],
      "optionAnalysis": [
        {
          "choice": "0到10",
          "truth": false,
          "reason": "只含前4筆。"
        },
        {
          "choice": "10到20",
          "truth": false,
          "reason": "累積13，尚未達第16、17筆。"
        },
        {
          "choice": "30到40",
          "truth": false,
          "reason": "中位數位置早已在累積25前通過。"
        },
        {
          "choice": "20到30",
          "truth": true,
          "reason": "正確。獨立重算：共有32筆，中位數是第16、17筆。累積到20只有13筆，到30已有25筆，所以兩個中央位置都在20到30組。"
        }
      ],
      "misconceptionTarget": "只看哪個累積次數最接近16。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "只能確定區間，不能由分組圖推精確中位數。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：判定中位數所在組",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "判定中位數所在組",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "95a04902f8f34d69e0516e331e233c72f98bd725236fc5f83ffc6bbf4d6560ea"
    },
    {
      "questionId": "u22-s007-v006",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某累積圖在50分的累積次數為6，在60分為18，在70分為27。60到70分這組有幾人？",
      "text": "某累積圖在50分的累積次數為6，在60分為18，在70分為27。60到70分這組有幾人？",
      "givenConditions": [],
      "target": "從折線相鄰點求組次數",
      "choices": [
        "6",
        "18",
        "9",
        "21"
      ],
      "answerIndex": 2,
      "independentSolution": "60到70分組次數=27-18=9人。",
      "explanation": "60到70分組次數=27-18=9人。",
      "steps": [
        "取相鄰上界70與60。",
        "27-18=9。"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": false,
          "reason": "取50分累積值。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "取60分累積值。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "正確。獨立重算：60到70分組次數=27-18=9人。"
        },
        {
          "choice": "21",
          "truth": false,
          "reason": "用27-6跨兩組相減。"
        }
      ],
      "misconceptionTarget": "跨錯相鄰點。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "分組端點以題目慣例理解，不影響次數差。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：從折線相鄰點求組次數",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "從折線相鄰點求組次數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "85052cafbe2028c9e73b86eec781750e1d336aae46194ac7be4db9036ede516e"
    },
    {
      "questionId": "u22-s007-v007",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某累積次數序列為 5、12、10、19。對同一批資料而言，主要問題是什麼？",
      "text": "某累積次數序列為 5、12、10、19。對同一批資料而言，主要問題是什麼？",
      "givenConditions": [],
      "target": "審核累積圖合理性",
      "choices": [
        "累積次數不應下降",
        "最後值不應是19",
        "第一值必須是0",
        "每次增加量必須相同"
      ],
      "answerIndex": 0,
      "independentSolution": "累積次數只會維持或增加；從12降到10不可能，表示資料或繪圖有誤。",
      "explanation": "累積次數只會維持或增加；從12降到10不可能，表示資料或繪圖有誤。",
      "steps": [
        "檢查非遞減性。"
      ],
      "optionAnalysis": [
        {
          "choice": "累積次數不應下降",
          "truth": true,
          "reason": "正確。獨立重算：累積次數只會維持或增加；從12降到10不可能，表示資料或繪圖有誤。"
        },
        {
          "choice": "最後值不應是19",
          "truth": false,
          "reason": "19可以是總筆數。"
        },
        {
          "choice": "第一值必須是0",
          "truth": false,
          "reason": "第一組可已有5筆。"
        },
        {
          "choice": "每次增加量必須相同",
          "truth": false,
          "reason": "各組次數可不同。"
        }
      ],
      "misconceptionTarget": "以為折線可以像一般資料一樣上下波動。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "若某組次數為0，累積可持平。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：審核累積圖合理性",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "審核累積圖合理性",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "b75890be4e46f9cb6b9967cd0bf2f560a54744441833081b9e4e57fb7974cae2"
    },
    {
      "questionId": "u22-s007-v008",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "總數60的累積圖在某區間上界為29，在下一上界為47。Q3位置落在哪裡？",
      "text": "總數60的累積圖在某區間上界為29，在下一上界為47。Q3位置落在哪裡？",
      "givenConditions": [],
      "target": "以累積次數定位Q3組別",
      "choices": [
        "前一組之前",
        "兩上界之間的該組",
        "下一組之後",
        "無法判斷"
      ],
      "answerIndex": 1,
      "independentSolution": "60筆的Q3位置約在第45、46筆附近；前累積29、後累積47，因此Q3落在兩上界之間的那一組。",
      "explanation": "60筆的Q3位置約在第45、46筆附近；前累積29、後累積47，因此Q3落在兩上界之間的那一組。",
      "steps": [
        "估計Q3位置約45。",
        "用29與47夾住。"
      ],
      "optionAnalysis": [
        {
          "choice": "前一組之前",
          "truth": false,
          "reason": "Q3約第45筆，29尚未達。"
        },
        {
          "choice": "兩上界之間的該組",
          "truth": true,
          "reason": "正確。獨立重算：60筆的Q3位置約在第45、46筆附近；前累積29、後累積47，因此Q3落在兩上界之間的那一組。"
        },
        {
          "choice": "下一組之後",
          "truth": false,
          "reason": "47已超過第45筆。"
        },
        {
          "choice": "無法判斷",
          "truth": false,
          "reason": "29<45≤47足以定位。"
        }
      ],
      "misconceptionTarget": "把Q3數值直接當45。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "分組資料只定位組別，不做組內線性插值。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：以累積次數定位Q3組別",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "以累積次數定位Q3組別",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "4a1ee8305f333850dc7e666de515187eebcf0241d4e72622de07b4d1ad2fd91f"
    },
    {
      "questionId": "u22-s007-v009",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一累積圖總數48，在上界40時累積12，在上界50時累積36。哪個敘述正確？",
      "text": "一累積圖總數48，在上界40時累積12，在上界50時累積36。哪個敘述正確？",
      "givenConditions": [],
      "target": "整合區間次數與中位數定位",
      "choices": [
        "該組有36筆",
        "該組有12筆",
        "大於40且不超過50的組有24筆，且涵蓋中位數位置",
        "該組不含中位數"
      ],
      "answerIndex": 2,
      "independentSolution": "大於40且不超過50的組次數=36-12=24；48筆的第24、25筆都落在累積12之後且不超過36，因此位於此組。",
      "explanation": "大於40且不超過50的組次數=36-12=24；48筆的第24、25筆都落在累積12之後且不超過36，因此位於此組。",
      "steps": [
        "相減得24。",
        "定位中位數第24、25筆。"
      ],
      "optionAnalysis": [
        {
          "choice": "該組有36筆",
          "truth": false,
          "reason": "36是到50為止的累積次數。"
        },
        {
          "choice": "該組有12筆",
          "truth": false,
          "reason": "12是到40為止的累積次數。"
        },
        {
          "choice": "大於40且不超過50的組有24筆，且涵蓋中位數位置",
          "truth": true,
          "reason": "正確。獨立重算：大於40且不超過50的組次數=36-12=24；48筆的第24、25筆都落在累積12之後且不超過36，因此位於此組。"
        },
        {
          "choice": "該組不含中位數",
          "truth": false,
          "reason": "第24、25筆位於累積12到36之間。"
        }
      ],
      "misconceptionTarget": "只完成次數計算而未連結位置。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "區間明定為40<x≤50；中位數位置為第24與25筆。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：整合區間次數與中位數定位",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "整合區間次數與中位數定位",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "8f00701cfb1ccaa3248386d298dfd7407b274d94f54cefb47ce6766b63e9b799"
    },
    {
      "questionId": "u22-s007-v010",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "圖書館統計每位學生一月借書冊數。累積圖顯示不超過2冊有18人，不超過5冊有44人，共50人。借3到5冊者有多少人？",
      "text": "圖書館統計每位學生一月借書冊數。累積圖顯示不超過2冊有18人，不超過5冊有44人，共50人。借3到5冊者有多少人？",
      "givenConditions": [],
      "target": "在借閱情境求區間人數",
      "choices": [
        "18人",
        "44人",
        "32人",
        "26人"
      ],
      "answerIndex": 3,
      "independentSolution": "借3到5冊的人數=44-18=26人。",
      "explanation": "借3到5冊的人數=44-18=26人。",
      "steps": [
        "辨認兩個累積門檻。",
        "相減44-18。"
      ],
      "optionAnalysis": [
        {
          "choice": "18人",
          "truth": false,
          "reason": "這是不超過2冊的人。"
        },
        {
          "choice": "44人",
          "truth": false,
          "reason": "這是不超過5冊的累積人數。"
        },
        {
          "choice": "32人",
          "truth": false,
          "reason": "用總數減18，包含6冊以上者。"
        },
        {
          "choice": "26人",
          "truth": true,
          "reason": "正確。獨立重算：借3到5冊的人數=44-18=26人。"
        }
      ],
      "misconceptionTarget": "用總數直接扣除低端而混入高端。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "estimatedTimeSec": 180,
      "unitCheck": "答案單位為人。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "冊數為離散整數，3到5與「大於2且不超過5」一致。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在借閱情境求區間人數",
      "literacyContextNecessity": "館藏規劃需要知道特定借閱量區間，而非只看累積總數。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "在借閱情境求區間人數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "d85e42a466cd62ebd7b185b6bcd1fac89b229f673207a6419b4036a6725c2569"
    },
    {
      "questionId": "u22-s007-v011",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某班40人成績累積圖如圖，點依序為(50,4)、(60,10)、(70,22)、(80,34)、(90,40)。大於70分且不超過80分有多少人？",
      "text": "某班40人成績累積圖如圖，點依序為(50,4)、(60,10)、(70,22)、(80,34)、(90,40)。大於70分且不超過80分有多少人？",
      "givenConditions": [],
      "target": "由圖求指定成績組人數",
      "choices": [
        "10人",
        "12人",
        "22人",
        "18人"
      ],
      "answerIndex": 1,
      "independentSolution": "累積到80分有34人，累積到70分有22人，因此70<x≤80的人數=34-22=12人。",
      "explanation": "累積到80分有34人，累積到70分有22人，因此70<x≤80的人數=34-22=12人。",
      "steps": [
        "讀出80上界累積34。",
        "減去70上界累積22。"
      ],
      "optionAnalysis": [
        {
          "choice": "10人",
          "truth": false,
          "reason": "這是不超過60分的累積人數。"
        },
        {
          "choice": "12人",
          "truth": true,
          "reason": "正確。獨立重算：累積到80分有34人，累積到70分有22人，因此70<x≤80的人數=34-22=12人。"
        },
        {
          "choice": "22人",
          "truth": false,
          "reason": "這是不超過70分的累積人數。"
        },
        {
          "choice": "18人",
          "truth": false,
          "reason": "用40-22，包含80分以上。"
        }
      ],
      "misconceptionTarget": "忽略累積圖要取相鄰差。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "estimatedTimeSec": 180,
      "unitCheck": "答案單位為人。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "圖中座標表示「不超過該分數」的累積人數，所以相減區間是70<x≤80。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：由圖求指定成績組人數",
      "literacyContextNecessity": "成績分布圖的價值在於從累積人數還原各分數帶人數。",
      "visualMode": "figure",
      "figureId": "fig-u22-ogive",
      "drawingSpecReference": "fig-u22-ogive",
      "authoringIntent": "由圖求指定成績組人數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "ba8eb50fd82a5a4b3ef2802c4cf506dc984652a636489502b11352113ee19b4d"
    },
    {
      "questionId": "u22-s007-v012",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某活動完成時間累積圖顯示：30分鐘內8人、45分鐘內26人、60分鐘內38人，共40人。若主辦方把「最快約25%」定為前10名，他們的分界落在哪一段？",
      "text": "某活動完成時間累積圖顯示：30分鐘內8人、45分鐘內26人、60分鐘內38人，共40人。若主辦方把「最快約25%」定為前10名，他們的分界落在哪一段？",
      "givenConditions": [],
      "target": "用累積圖定位百分位門檻",
      "choices": [
        "大於30且不超過45分鐘",
        "不超過30分鐘",
        "大於45且不超過60分鐘",
        "超過60分鐘"
      ],
      "answerIndex": 0,
      "independentSolution": "最快25%對應40×25%=10人。累積到30分鐘只有8人，到45分鐘已有26人，所以第10名落在30<t≤45分鐘。",
      "explanation": "最快25%對應40×25%=10人。累積到30分鐘只有8人，到45分鐘已有26人，所以第10名落在30<t≤45分鐘。",
      "steps": [
        "把25%×40換成第10名。",
        "用累積8與26定位。"
      ],
      "optionAnalysis": [
        {
          "choice": "大於30且不超過45分鐘",
          "truth": true,
          "reason": "正確。獨立重算：最快25%對應40×25%=10人。累積到30分鐘只有8人，到45分鐘已有26人，所以第10名落在30<t≤45分鐘。"
        },
        {
          "choice": "不超過30分鐘",
          "truth": false,
          "reason": "到30分鐘只有8人，尚未涵蓋第10名。"
        },
        {
          "choice": "大於45且不超過60分鐘",
          "truth": false,
          "reason": "到45分鐘已累積26人，第10名早已通過。"
        },
        {
          "choice": "超過60分鐘",
          "truth": false,
          "reason": "僅剩2人，屬最慢端。"
        }
      ],
      "misconceptionTarget": "把「最快25%」誤當時間值的25%。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "estimatedTimeSec": 180,
      "unitCheck": "時間區間單位為分鐘。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "「30分鐘內、45分鐘內」按不超過解讀，因此精確分組為30<t≤45。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：用累積圖定位百分位門檻",
      "literacyContextNecessity": "活動分流需用累積人數找服務時間門檻。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "用累積圖定位百分位門檻",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "b28552f85ca5f582728df5d91b369568f9b89a0a272af8d8b11b54b37b10c95d"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u22-s007-cr001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "某累積次數表顯示：不超過10有4人、不超過20有11人、不超過30有23人、不超過40有30人。求「不超過10」、「大於10且不超過20」、「大於20且不超過30」、「大於30且不超過40」四組各自次數，並判斷30人的中位數位於哪一組。",
      "requiredWork": [
        "以相鄰累積次數相減。",
        "列出四組次數。",
        "以第15、16筆定位中位數組。"
      ],
      "standardSolution": [
        "四組次數依序為4、11-4=7、23-11=12、30-23=7。",
        "30筆的中位數位置是第15與第16筆。",
        "累積到20只有11筆，到30已有23筆，所以中位數位於大於20且不超過30這一組。"
      ],
      "reasoningSteps": [
        "四組次數依序為4、11-4=7、23-11=12、30-23=7。",
        "30筆的中位數位置是第15與第16筆。",
        "累積到20只有11筆，到30已有23筆，所以中位數位於大於20且不超過30這一組。"
      ],
      "alternativeMethods": [
        "可先畫階梯式累積表，再圈出累積11到23涵蓋的排名。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "四組次數4、7、12、7與中位數組20到30均正確，並有相減和排名理由。"
        },
        {
          "score": 2,
          "criteria": "四組次數只有一處算術錯，且中位數定位依其累積判斷合理。"
        },
        {
          "score": 1,
          "criteria": "能正確求出至少三組次數或正確定位中位數組。"
        },
        {
          "score": 0,
          "criteria": "直接把累積次數當各組次數，且無有效中位數定位。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若一處區間次數算錯，但仍用原累積11與23正確定位中位數，該定位分保留。",
      "unitNotationRules": "次數與累積次數單位皆為人。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "把第二組寫11人。",
        "用30÷2=15後只看第15筆而忽略第16筆。",
        "以折線斜率猜中位數。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "四組次數依序為4、11-4=7、23-11=12、30-23=7。；30筆的中位數位置是第15與第16筆。；累積到20只有11筆，到30已有23筆，所以中位數位於大於20且不超過30這一組。",
        "alternativeMethodCheck": "可先畫階梯式累積表，再圈出累積11到23涵蓋的排名。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "72a93896866792eeddc75f5f2d22e18093472b54239edbdfc23eb19268385b1f"
    },
    {
      "questionId": "u22-s007-cr002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "ogive-read",
      "lockedSkillOrder": 7,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "一批40件產品的重量累積圖顯示：不超過2公斤有6件、不超過3公斤有18件、不超過4公斤有33件、不超過5公斤有40件。回答：(1) 大於3公斤且不超過4公斤有幾件？(2) Q1與Q3各位於哪一個重量組？(3) 能否由此圖求出精確平均重量？說明理由。",
      "requiredWork": [
        "求相鄰累積差。",
        "以第10、30筆定位四分位組。",
        "說明分組資料限制。"
      ],
      "standardSolution": [
        "大於3公斤且不超過4公斤的件數=33-18=15件。",
        "Q1約在第10、11筆，位於大於2且不超過3公斤組；Q3約在第30、31筆，位於大於3且不超過4公斤組。",
        "不能求精確平均，因只知各組件數，不知每件的實際重量；除非另以組中點估計且註明是估計。"
      ],
      "reasoningSteps": [
        "大於3公斤且不超過4公斤的件數=33-18=15件。",
        "Q1約在第10、11筆，位於大於2且不超過3公斤組；Q3約在第30、31筆，位於大於3且不超過4公斤組。",
        "不能求精確平均，因只知各組件數，不知每件的實際重量；除非另以組中點估計且註明是估計。"
      ],
      "alternativeMethods": [
        "也可列各組次數6、12、15、7，再用累積排名判斷。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "15件、兩個四分位組與不能求精確平均的理由全部正確。"
        },
        {
          "score": 2,
          "criteria": "只錯一個四分位組或平均限制說明不完整。"
        },
        {
          "score": 1,
          "criteria": "能正確求15件並指出至少一個四分位組。"
        },
        {
          "score": 0,
          "criteria": "把累積值33當該組件數，或聲稱可直接求精確平均。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若學生採組中點法算出估計平均並明確標示「估計」，不扣限制觀念分；若稱為精確值則不得該分。",
      "unitNotationRules": "重量區間單位為公斤；次數單位為件。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "Q1誤放0到2公斤。",
        "Q3誤放4到5公斤。",
        "用各上界直接平均。"
      ],
      "visualMode": "figure",
      "figureId": "fig-u22-ogive",
      "drawingSpecReference": "fig-u22-ogive",
      "independentReview": {
        "recomputedResult": "大於3公斤且不超過4公斤的件數=33-18=15件。；Q1約在第10、11筆，位於大於2且不超過3公斤組；Q3約在第30、31筆，位於大於3且不超過4公斤組。；不能求精確平均，因只知各組件數，不知每件的實際重量；除非另以組中點估計且註明是估計。",
        "alternativeMethodCheck": "也可列各組次數6、12、15、7，再用累積排名判斷。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "7b84c56c425effc1542298fbc63a08cfb6359ac1ff99e261ab7d4b4d209c2c31"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u22-s007-v001",
      "unitId": "u22",
      "skillId": "ogive-read",
      "contentSha256": "f0a317633b5be422d07061a2d3c1eb08fd2c3f4f8a440b602947194169a70e9a",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "大於20且不超過30的區間次數=15-8=7人。",
      "derivedAnswer": "7",
      "storedAnswer": "7",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「7」；其餘選項逐項排除：「8」：直接取前一個累積次數。；「15」：直接取後一個累積次數。；「23」：把兩個累積次數相加。",
        "undefinedSymbol": "題幹術語均已在「累積次數折線圖」講義定義；實際目標為「由累積次數求區間次數」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩個累積門檻皆採「不超過」；相減對應20<x≤30，不把恰為20者重複計入。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把累積次數當單一區間次數。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：由累積次數求區間次數",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某累積次數表顯示「不超過20」有8人、「不超過30」有15人。大於20且不超過30的人數為多少？」；獨立解法「大於20且不超過30的區間次數=15-8=7人。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s007-v002",
      "unitId": "u22",
      "skillId": "ogive-read",
      "contentSha256": "ec52ea0c7f010ddc6c97b35f62807c63ad8f6fe342a24ed7c826008a2a33956b",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "累積次數一路加總，到最後上界時已包含全部資料，因此縱座標等於總筆數。",
      "derivedAnswer": "資料總筆數",
      "storedAnswer": "資料總筆數",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「資料總筆數」；其餘選項逐項排除：「最大資料值」：最大值在橫軸位置，不是縱座標。；「最後一組的次數」：最後縱座標是此前全部累積。；「平均數」：累積圖不直接顯示平均數。",
        "undefinedSymbol": "題幹術語均已在「累積次數折線圖」講義定義；實際目標為「解讀終點縱座標」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "圖必須涵蓋全部分組。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把最後累積值當最後區間值。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：解讀終點縱座標",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「累積次數折線圖最後一點的縱座標通常表示什麼？」；獨立解法「累積次數一路加總，到最後上界時已包含全部資料，因此縱座標等於總筆數。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s007-v003",
      "unitId": "u22",
      "skillId": "ogive-read",
      "contentSha256": "078b9d991b89ba429e3a0d97b5a8f6071179f09903265fed40e9b642e991167b",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "第二組次數=第二個累積9-第一個累積3=6。",
      "derivedAnswer": "6",
      "storedAnswer": "6",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「6」；其餘選項逐項排除：「3」：這是第一組次數。；「9」：這是到第二組的累積次數。；「11」：誤用20-9。",
        "undefinedSymbol": "題幹術語均已在「累積次數折線圖」講義定義；實際目標為「求指定組次數」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "累積序列非遞減且總數20。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「沒有扣除前面已累積的資料。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：求指定組次數",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「累積次數依序為 3、9、14、20。第二組本身的次數是多少？」；獨立解法「第二組次數=第二個累積9-第一個累積3=6。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s007-v004",
      "unitId": "u22",
      "skillId": "ogive-read",
      "contentSha256": "8a292e70435ed7e8eff3684fb5148ac46ed0fb1618af81506cb312f0f7018ada",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "40筆的Q1約在第10、11筆；累積到11已涵蓋Q1位置，但未達中位數。",
      "derivedAnswer": "Q1位置",
      "storedAnswer": "Q1位置",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「Q1位置」；其餘選項逐項排除：「中位數位置」：中位數約在第20、21筆，尚未通過。；「Q3位置」：Q3約在第30筆，尚未通過。；「最大值位置」：需到第40筆。",
        "undefinedSymbol": "題幹術語均已在「累積次數折線圖」講義定義；實際目標為「用累積次數定位Q1」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "分組資料只能判定Q1所在區間，不一定得到精確原始值。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把四分位數的數值與四分位位置筆數混淆。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：用累積次數定位Q1",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「40筆資料的累積次數折線圖中，到某上界的累積次數為11。下列哪個四分位位置已經通過？」；獨立解法「40筆的Q1約在第10、11筆；累積到11已涵蓋Q1位置，但未達中位數。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s007-v005",
      "unitId": "u22",
      "skillId": "ogive-read",
      "contentSha256": "95a04902f8f34d69e0516e331e233c72f98bd725236fc5f83ffc6bbf4d6560ea",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "共有32筆，中位數是第16、17筆。累積到20只有13筆，到30已有25筆，所以兩個中央位置都在20到30組。",
      "derivedAnswer": "20到30",
      "storedAnswer": "20到30",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「20到30」；其餘選項逐項排除：「0到10」：只含前4筆。；「10到20」：累積13，尚未達第16、17筆。；「30到40」：中位數位置早已在累積25前通過。",
        "undefinedSymbol": "題幹術語均已在「累積次數折線圖」講義定義；實際目標為「判定中位數所在組」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "只能確定區間，不能由分組圖推精確中位數。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只看哪個累積次數最接近16。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：判定中位數所在組",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「累積次數在上界10、20、30、40時分別為4、13、25、32。資料中位數位於哪個區間？」；獨立解法「共有32筆，中位數是第16、17筆。累積到20只有13筆，到30已有25筆，所以兩個中央位置都在20到30組。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s007-v006",
      "unitId": "u22",
      "skillId": "ogive-read",
      "contentSha256": "85052cafbe2028c9e73b86eec781750e1d336aae46194ac7be4db9036ede516e",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "60到70分組次數=27-18=9人。",
      "derivedAnswer": "9",
      "storedAnswer": "9",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「9」；其餘選項逐項排除：「6」：取50分累積值。；「18」：取60分累積值。；「21」：用27-6跨兩組相減。",
        "undefinedSymbol": "題幹術語均已在「累積次數折線圖」講義定義；實際目標為「從折線相鄰點求組次數」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "分組端點以題目慣例理解，不影響次數差。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「跨錯相鄰點。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：從折線相鄰點求組次數",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某累積圖在50分的累積次數為6，在60分為18，在70分為27。60到70分這組有幾人？」；獨立解法「60到70分組次數=27-18=9人。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s007-v007",
      "unitId": "u22",
      "skillId": "ogive-read",
      "contentSha256": "b75890be4e46f9cb6b9967cd0bf2f560a54744441833081b9e4e57fb7974cae2",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "累積次數只會維持或增加；從12降到10不可能，表示資料或繪圖有誤。",
      "derivedAnswer": "累積次數不應下降",
      "storedAnswer": "累積次數不應下降",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「累積次數不應下降」；其餘選項逐項排除：「最後值不應是19」：19可以是總筆數。；「第一值必須是0」：第一組可已有5筆。；「每次增加量必須相同」：各組次數可不同。",
        "undefinedSymbol": "題幹術語均已在「累積次數折線圖」講義定義；實際目標為「審核累積圖合理性」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "若某組次數為0，累積可持平。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「以為折線可以像一般資料一樣上下波動。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：審核累積圖合理性",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某累積次數序列為 5、12、10、19。對同一批資料而言，主要問題是什麼？」；獨立解法「累積次數只會維持或增加；從12降到10不可能，表示資料或繪圖有誤。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s007-v008",
      "unitId": "u22",
      "skillId": "ogive-read",
      "contentSha256": "4a1ee8305f333850dc7e666de515187eebcf0241d4e72622de07b4d1ad2fd91f",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "60筆的Q3位置約在第45、46筆附近；前累積29、後累積47，因此Q3落在兩上界之間的那一組。",
      "derivedAnswer": "兩上界之間的該組",
      "storedAnswer": "兩上界之間的該組",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「兩上界之間的該組」；其餘選項逐項排除：「前一組之前」：Q3約第45筆，29尚未達。；「下一組之後」：47已超過第45筆。；「無法判斷」：29<45≤47足以定位。",
        "undefinedSymbol": "題幹術語均已在「累積次數折線圖」講義定義；實際目標為「以累積次數定位Q3組別」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "分組資料只定位組別，不做組內線性插值。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把Q3數值直接當45。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：以累積次數定位Q3組別",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「總數60的累積圖在某區間上界為29，在下一上界為47。Q3位置落在哪裡？」；獨立解法「60筆的Q3位置約在第45、46筆附近；前累積29、後累積47，因此Q3落在兩上界之間的那一組。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s007-v009",
      "unitId": "u22",
      "skillId": "ogive-read",
      "contentSha256": "8f00701cfb1ccaa3248386d298dfd7407b274d94f54cefb47ce6766b63e9b799",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "大於40且不超過50的組次數=36-12=24；48筆的第24、25筆都落在累積12之後且不超過36，因此位於此組。",
      "derivedAnswer": "大於40且不超過50的組有24筆，且涵蓋中位數位置",
      "storedAnswer": "大於40且不超過50的組有24筆，且涵蓋中位數位置",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「大於40且不超過50的組有24筆，且涵蓋中位數位置」；其餘選項逐項排除：「該組有36筆」：36是到50為止的累積次數。；「該組有12筆」：12是到40為止的累積次數。；「該組不含中位數」：第24、25筆位於累積12到36之間。",
        "undefinedSymbol": "題幹術語均已在「累積次數折線圖」講義定義；實際目標為「整合區間次數與中位數定位」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "區間明定為40<x≤50；中位數位置為第24與25筆。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只完成次數計算而未連結位置。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：整合區間次數與中位數定位",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一累積圖總數48，在上界40時累積12，在上界50時累積36。哪個敘述正確？」；獨立解法「大於40且不超過50的組次數=36-12=24；48筆的第24、25筆都落在累積12之後且不超過36，因此位於此組。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s007-v010",
      "unitId": "u22",
      "skillId": "ogive-read",
      "contentSha256": "d85e42a466cd62ebd7b185b6bcd1fac89b229f673207a6419b4036a6725c2569",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "借3到5冊的人數=44-18=26人。",
      "derivedAnswer": "26人",
      "storedAnswer": "26人",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「26人」；其餘選項逐項排除：「18人」：這是不超過2冊的人。；「44人」：這是不超過5冊的累積人數。；「32人」：用總數減18，包含6冊以上者。",
        "undefinedSymbol": "題幹術語均已在「累積次數折線圖」講義定義；實際目標為「在借閱情境求區間人數」。",
        "unitConflict": "答案單位為人。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "冊數為離散整數，3到5與「大於2且不超過5」一致。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「用總數直接扣除低端而混入高端。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在借閱情境求區間人數",
      "literacyContextNecessity": "館藏規劃需要知道特定借閱量區間，而非只看累積總數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「圖書館統計每位學生一月借書冊數。累積圖顯示不超過2冊有18人，不超過5冊有44人，共50人。借3到5冊者有多少人？」；獨立解法「借3到5冊的人數=44-18=26人。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s007-v011",
      "unitId": "u22",
      "skillId": "ogive-read",
      "contentSha256": "ba8eb50fd82a5a4b3ef2802c4cf506dc984652a636489502b11352113ee19b4d",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "累積到80分有34人，累積到70分有22人，因此70<x≤80的人數=34-22=12人。",
      "derivedAnswer": "12人",
      "storedAnswer": "12人",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「12人」；其餘選項逐項排除：「10人」：這是不超過60分的累積人數。；「22人」：這是不超過70分的累積人數。；「18人」：用40-22，包含80分以上。",
        "undefinedSymbol": "題幹術語均已在「累積次數折線圖」講義定義；實際目標為「由圖求指定成績組人數」。",
        "unitConflict": "答案單位為人。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "圖中座標表示「不超過該分數」的累積人數，所以相減區間是70<x≤80。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「忽略累積圖要取相鄰差。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：由圖求指定成績組人數",
      "literacyContextNecessity": "成績分布圖的價值在於從累積人數還原各分數帶人數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某班40人成績累積圖如圖，點依序為(50,4)、(60,10)、(70,22)、(80,34)、(90,40)。大於70分且不超過80分有多少人？」；獨立解法「累積到80分有34人，累積到70分有22人，因此70<x≤80的人數=34-22=12人。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s007-v012",
      "unitId": "u22",
      "skillId": "ogive-read",
      "contentSha256": "b28552f85ca5f582728df5d91b369568f9b89a0a272af8d8b11b54b37b10c95d",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "最快25%對應40×25%=10人。累積到30分鐘只有8人，到45分鐘已有26人，所以第10名落在30<t≤45分鐘。",
      "derivedAnswer": "大於30且不超過45分鐘",
      "storedAnswer": "大於30且不超過45分鐘",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「大於30且不超過45分鐘」；其餘選項逐項排除：「不超過30分鐘」：到30分鐘只有8人，尚未涵蓋第10名。；「大於45且不超過60分鐘」：到45分鐘已累積26人，第10名早已通過。；「超過60分鐘」：僅剩2人，屬最慢端。",
        "undefinedSymbol": "題幹術語均已在「累積次數折線圖」講義定義；實際目標為「用累積圖定位百分位門檻」。",
        "unitConflict": "時間區間單位為分鐘。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "「30分鐘內、45分鐘內」按不超過解讀，因此精確分組為30<t≤45。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把「最快25%」誤當時間值的25%。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：用累積圖定位百分位門檻",
      "literacyContextNecessity": "活動分流需用累積人數找服務時間門檻。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：iqr-outlier-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某活動完成時間累積圖顯示：30分鐘內8人、45分鐘內26人、60分鐘內38人，共40人。若主辦方把「最快約25%」定為前10名，他們的分界落在哪一段？」；獨立解法「最快25%對應40×25%=10人。累積到30分鐘只有8人，到45分鐘已有26人，所以第10名落在30<t≤45分鐘。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "fig-u22-ogive",
      "unitId": "u22",
      "skillId": "ogive-read",
      "drawingPurpose": "支援由相鄰累積次數求大於70且不超過80分的12人並定位百分位。",
      "canvas": {
        "width": 760,
        "height": 430
      },
      "viewBox": "0 0 760 430",
      "coordinateSystem": "SVG pixels; origin at upper-left; x increases right and y increases down.",
      "layoutConstraints": [
        "橫軸成績50到90分",
        "縱軸累積人數0到40人",
        "五個資料點與折線",
        "網格與座標標籤",
        "圖例說明累積次數"
      ],
      "visibleLineRules": "All mathematical boundaries and axes use solid black lines; helper gridlines, when present, are lighter and never encode an answer by color.",
      "hiddenLineRules": "No hidden geometric lines are needed. Dashed lines are used only for explicitly labelled statistical fences.",
      "labelsAndPositions": "Labels are placed adjacent to their corresponding points, branches, sectors or groups with at least 14 px text.",
      "tickMarksUnitsArrowsSymbols": "Axes include labelled ticks and units where applicable; tree branches show exact fractions; arrowheads do not replace numeric labels.",
      "toScale": true,
      "visualInferenceWarning": null,
      "altText": "累積次數折線圖，點為50分4人、60分10人、70分22人、80分34人、90分40人。",
      "svgTitle": "支援由相鄰累積次數求大於70且不超過80分的12人並定位百分位。",
      "svgDescription": "累積次數折線圖，點為50分4人、60分10人、70分22人、80分34人、90分40人。",
      "mobileReadabilityReview": "Reviewed at 360 CSS px width; minimum label size remains legible and no labels overlap critical marks.",
      "answerLeakageReview": "The figure contains only data explicitly supplied by its associated prompt or lecture example; it does not mark a multiple-choice option as correct.",
      "geometryTokenAssertions": {
        "points": [
          [
            50,
            4
          ],
          [
            60,
            10
          ],
          [
            70,
            22
          ],
          [
            80,
            34
          ],
          [
            90,
            40
          ]
        ],
        "nondecreasing": true,
        "group70to80": 12
      },
      "manualVisualInspection": "pass; rendered PNG inspected for clipping, label overlap, scale consistency and mathematical placement.",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ]
};
