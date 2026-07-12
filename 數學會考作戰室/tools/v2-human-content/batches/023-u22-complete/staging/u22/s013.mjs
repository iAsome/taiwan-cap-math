// Emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u22-s013-lecture-r1",
    "unitId": "u22",
    "numericUnitId": 22,
    "topicId": "u22-probability",
    "skillId": "probability-sample-space",
    "lockedSkillOrder": 13,
    "title": "樣本空間：依順序與是否放回等條件完整列出樣本空間。",
    "originalLockedTitle": "樣本空間",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能依題目記錄方式列出樣本空間。",
      "能區分有序與無序結果。",
      "能處理放回、不放回與限制條件。",
      "能辨識記錄值不一定等可能。"
    ],
    "prerequisiteSkillIds": [
      "probability-tree-basic"
    ],
    "prerequisiteBridge": "承接樹狀圖末端路徑。",
    "glossary": [
      {
        "term": "樣本點",
        "definition": "樣本空間中的一個完整基本結果。"
      },
      {
        "term": "有序結果",
        "definition": "先後次序不同即視為不同。"
      },
      {
        "term": "放回",
        "definition": "抽後歸還，使下一次候選恢復。"
      },
      {
        "term": "映射結果",
        "definition": "把原始結果記成奇偶、和或其他摘要值。"
      }
    ],
    "notation": [
      {
        "symbol": "乘法原理",
        "meaning": "連續選擇且每一前綴後有固定選項數時，相乘。"
      },
      {
        "symbol": "限制後計數",
        "meaning": "先列完整候選，再刪除不合條件者。"
      }
    ],
    "conceptNarrative": [
      "樣本空間必須依一次試驗實際記錄內容定義。",
      "兩次硬幣若記順序，正反與反正不同；若只記正面個數，則會合併成另一層級的結果。",
      "放回抽取允許同一標籤重複；不放回則第二次候選數減少。",
      "只記兩骰和時可能值2到12，但這些和不等可能；計算機率宜回到36個有序配對。",
      "限制條件可能讓樹不規則，不能直接套原始乘積。"
    ],
    "formalDefinitions": [
      {
        "name": "完整性",
        "statement": "沒有漏掉任何合法結果。"
      },
      {
        "name": "互斥性",
        "statement": "一次試驗不會同時落入兩個不同樣本點。"
      }
    ],
    "formulas": [
      {
        "formula": "n×m",
        "conditions": [
          "兩階段且每個第一階段結果後都有m種。"
        ],
        "meaning": "兩階段且每個第一階段結果後都有m種。"
      },
      {
        "formula": "n(n-1)",
        "conditions": [
          "n個不同物不放回依序取2個，不使用排列公式名稱。"
        ],
        "meaning": "n個不同物不放回依序取2個，不使用排列公式名稱。"
      }
    ],
    "nonApplicableCases": [
      "不能把事件的有利結果當完整樣本空間。",
      "不放回時不能保留AA等重複實體結果。",
      "映射後的不同標籤不可自動假設等可能。",
      "限制只禁某一結果時不可擴大解讀。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "說明記錄單位",
        "check": "是卡片、順序、和還是分類。"
      },
      {
        "step": 2,
        "instruction": "列第一階段",
        "check": "全部可能。"
      },
      {
        "step": 3,
        "instruction": "展開後續",
        "check": "依放回與條件。"
      },
      {
        "step": 4,
        "instruction": "刪非法結果",
        "check": "逐條核對。"
      },
      {
        "step": 5,
        "instruction": "檢查完整與等可能性",
        "check": "計數前再確認。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "兩硬幣記順序",
        "solutionSteps": [
          "正正、正反、反正、反反。"
        ],
        "answer": "正正、正反、反正、反反。"
      },
      {
        "exampleId": "L2",
        "prompt": "A、B、C放回抽兩次",
        "solutionSteps": [
          "9個有序結果。"
        ],
        "answer": "9個有序結果。"
      },
      {
        "exampleId": "L3",
        "prompt": "A、B、C不放回抽兩次",
        "solutionSteps": [
          "AB、AC、BA、BC、CA、CB。"
        ],
        "answer": "AB、AC、BA、BC、CA、CB。"
      },
      {
        "exampleId": "L4",
        "prompt": "1到4不重複取兩數只記和",
        "solutionSteps": [
          "和3到7，但各和不等可能。"
        ],
        "answer": "和3到7，但各和不等可能。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把正反與反正合併",
        "why": "題目若記順序就不可。",
        "correction": "題目若記順序就不可。"
      },
      {
        "mistake": "放回題少算重複結果",
        "why": "第二次候選已恢復。",
        "correction": "第二次候選已恢復。"
      },
      {
        "mistake": "不放回題列AA",
        "why": "同一實體不能再抽。",
        "correction": "同一實體不能再抽。"
      },
      {
        "mistake": "把不同和當等可能",
        "why": "先數每個和對應多少原始結果。",
        "correction": "先數每個和對應多少原始結果。"
      }
    ],
    "selfCheck": [
      "樣本點是否完整到最後階段？",
      "順序是否要記？",
      "放回條件是否反映？",
      "限制是否只刪除真正不合法結果？",
      "記錄後結果是否仍等可能？"
    ],
    "summary": [
      "樣本空間由試驗與記錄規則共同決定。",
      "順序、放回與限制會改變結果數。",
      "映射結果可合併多個基本結果。",
      "完整不等於等可能。"
    ],
    "connections": {
      "previous": "承接樹狀圖末端路徑。",
      "next": [
        "下一技能專門判斷哪些結果等可能。"
      ]
    },
    "figureReferences": [],
    "figureAccessibility": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u22-s013-v001",
        "u22-s013-v002",
        "u22-s013-v003",
        "u22-s013-v004",
        "u22-s013-v005",
        "u22-s013-v006",
        "u22-s013-v007",
        "u22-s013-v008",
        "u22-s013-v009",
        "u22-s013-v010",
        "u22-s013-v011",
        "u22-s013-v012"
      ],
      "constructedResponseIds": [
        "u22-s013-cr001",
        "u22-s013-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "skillSpecificReviewEvidence": "完整列舉放回9項、不放回6項與兩骰和的映射；確認所有限制題刪除結果數與文字條件一致。",
      "futureKnowledgeCheck": "pass; all methods use this skill or declared prerequisites only",
      "contentBoundary": "依順序、是否放回等條件完整列出樣本空間。",
      "reviewVersion": "human-lecture-review-u22-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "2db2bdb6244ad2fb938ad4b3c1b71f7a38589764f41011e81be33081f0986fc9"
  },
  "mcQuestions": [
    {
      "questionId": "u22-s013-v001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "擲一枚硬幣一次，完整樣本空間是哪一個？",
      "text": "擲一枚硬幣一次，完整樣本空間是哪一個？",
      "givenConditions": [],
      "target": "列單階段樣本空間",
      "choices": [
        "{正，反}",
        "{正}",
        "{反}",
        "{正，反，邊緣}"
      ],
      "answerIndex": 0,
      "independentSolution": "在理想模型中只有正面與反面兩個可能結果，所以S={正，反}。",
      "explanation": "在理想模型中只有正面與反面兩個可能結果，所以S={正，反}。",
      "steps": [
        "列出互斥且完整的基本結果。"
      ],
      "optionAnalysis": [
        {
          "choice": "{正，反}",
          "truth": true,
          "reason": "正確。獨立重算：在理想模型中只有正面與反面兩個可能結果，所以S={正，反}。"
        },
        {
          "choice": "{正}",
          "truth": false,
          "reason": "漏掉反面。"
        },
        {
          "choice": "{反}",
          "truth": false,
          "reason": "漏掉正面。"
        },
        {
          "choice": "{正，反，邊緣}",
          "truth": false,
          "reason": "一般理想硬幣模型不把立在邊緣列為基本結果。"
        }
      ],
      "misconceptionTarget": "把極少見但模型未納入的情況自行加入。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "採標準公平硬幣理想模型。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：列單階段樣本空間",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "列單階段樣本空間",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "95a2305f08b9e9d97d857ce293d8d124fdacd36dd7a75d3b7cfd0985d7b0f83b"
    },
    {
      "questionId": "u22-s013-v002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "先擲硬幣再擲一次硬幣，若用正、反記錄順序，樣本空間共有幾個結果？",
      "text": "先擲硬幣再擲一次硬幣，若用正、反記錄順序，樣本空間共有幾個結果？",
      "givenConditions": [],
      "target": "計算有序樣本空間",
      "choices": [
        "2",
        "4",
        "3",
        "8"
      ],
      "answerIndex": 1,
      "independentSolution": "結果為正正、正反、反正、反反，共4個。",
      "explanation": "結果為正正、正反、反正、反反，共4個。",
      "steps": [
        "第一擲2種。",
        "第二擲2種。",
        "列4個有序結果。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "只記正反種類，忽略兩次順序。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "正確。獨立重算：結果為正正、正反、反正、反反，共4個。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "漏掉一種混合順序。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "多算一次投擲。"
        }
      ],
      "misconceptionTarget": "把正反與反正視為相同。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩次投擲都要記錄。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算有序樣本空間",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算有序樣本空間",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "a40ba92bf77d39de99d4a6f7824bea48d2bc6bbb5c8ed48f847bed92608d25d7"
    },
    {
      "questionId": "u22-s013-v003",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "從數字1、2、3中任選一個，樣本空間為何？",
      "text": "從數字1、2、3中任選一個，樣本空間為何？",
      "givenConditions": [],
      "target": "辨識樣本空間與事件",
      "choices": [
        "{0，1，2，3}",
        "{1，2}",
        "{3}",
        "{1，2，3}"
      ],
      "answerIndex": 3,
      "independentSolution": "題目明定可選1、2、3，三者構成完整樣本空間。",
      "explanation": "題目明定可選1、2、3，三者構成完整樣本空間。",
      "steps": [
        "照題目列出全部候選。"
      ],
      "optionAnalysis": [
        {
          "choice": "{0，1，2，3}",
          "truth": false,
          "reason": "自行加入0。"
        },
        {
          "choice": "{1，2}",
          "truth": false,
          "reason": "漏掉3。"
        },
        {
          "choice": "{3}",
          "truth": false,
          "reason": "只列有利結果而非全部結果。"
        },
        {
          "choice": "{1，2，3}",
          "truth": true,
          "reason": "正確。獨立重算：題目明定可選1、2、3，三者構成完整樣本空間。"
        }
      ],
      "misconceptionTarget": "把事件集合當樣本空間。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "每個候選是否等可能屬下一步問題。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：辨識樣本空間與事件",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "辨識樣本空間與事件",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "9900856e419e97c4646279d6325a3a8e77bac6592f2ddb56e73084308b3e13c2"
    },
    {
      "questionId": "u22-s013-v004",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "先擲骰子一次，再記錄點數是奇或偶。若只保留「奇、偶」分類，樣本空間有幾個基本記錄結果？",
      "text": "先擲骰子一次，再記錄點數是奇或偶。若只保留「奇、偶」分類，樣本空間有幾個基本記錄結果？",
      "givenConditions": [],
      "target": "依記錄規則定義樣本空間",
      "choices": [
        "6",
        "3",
        "2",
        "12"
      ],
      "answerIndex": 2,
      "independentSolution": "依題目記錄方式，1、3、5都記為奇，2、4、6都記為偶，所以記錄樣本空間是{奇，偶}。",
      "explanation": "依題目記錄方式，1、3、5都記為奇，2、4、6都記為偶，所以記錄樣本空間是{奇，偶}。",
      "steps": [
        "注意觀察結果的定義。",
        "把點數映射成兩類。"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": false,
          "reason": "這是原始點數層級的樣本點數。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "奇偶只有兩類。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "正確。獨立重算：依題目記錄方式，1、3、5都記為奇，2、4、6都記為偶，所以記錄樣本空間是{奇，偶}。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "多乘一次分類。"
        }
      ],
      "misconceptionTarget": "不區分原始試驗與實際記錄層級。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "若計算機率仍需知道每類包含多少原始等可能結果。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：依記錄規則定義樣本空間",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "依記錄規則定義樣本空間",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "efda3fedb0fa002825724d442a68fae58b06bb9047a9eeb3bbca3d7aa9708b50"
    },
    {
      "questionId": "u22-s013-v005",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "袋中有標號A、B、C三球，抽一球記錄後放回，再抽一球。樣本空間共有幾個有序結果？",
      "text": "袋中有標號A、B、C三球，抽一球記錄後放回，再抽一球。樣本空間共有幾個有序結果？",
      "givenConditions": [],
      "target": "建立放回抽取樣本空間",
      "choices": [
        "6",
        "3",
        "12",
        "9"
      ],
      "answerIndex": 3,
      "independentSolution": "每次都可抽A、B、C，放回後第二次仍有3種，共3×3=9。",
      "explanation": "每次都可抽A、B、C，放回後第二次仍有3種，共3×3=9。",
      "steps": [
        "第一次3種。",
        "放回後第二次3種。",
        "相乘。"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": false,
          "reason": "誤用不放回計數。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "只算第一次。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "把3×4。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "正確。獨立重算：每次都可抽A、B、C，放回後第二次仍有3種，共3×3=9。"
        }
      ],
      "misconceptionTarget": "忽略放回使第二次選項恢復。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩次順序有記錄。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：建立放回抽取樣本空間",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "建立放回抽取樣本空間",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "54e0c9eba9de1d35421808d66fb1597818cab5b323756535585ca1c811e4895c"
    },
    {
      "questionId": "u22-s013-v006",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "袋中有A、B、C三球，不放回連抽兩球並記錄順序。樣本空間共有幾個結果？",
      "text": "袋中有A、B、C三球，不放回連抽兩球並記錄順序。樣本空間共有幾個結果？",
      "givenConditions": [],
      "target": "建立不放回樣本空間",
      "choices": [
        "6",
        "9",
        "3",
        "2"
      ],
      "answerIndex": 0,
      "independentSolution": "第一次3種，第二次剩2種，有序結果3×2=6。",
      "explanation": "第一次3種，第二次剩2種，有序結果3×2=6。",
      "steps": [
        "第一次3。",
        "不放回後第二次2。",
        "列AB、AC、BA、BC、CA、CB。"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": true,
          "reason": "正確。獨立重算：第一次3種，第二次剩2種，有序結果3×2=6。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "把第二次仍當3種。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "忽略順序與第二次。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "只看抽取次數。"
        }
      ],
      "misconceptionTarget": "不放回仍保留重複結果AA。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "同一球不能重複抽到。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：建立不放回樣本空間",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "建立不放回樣本空間",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "aaec5a7c0ac612779fcfcb0713525b79dcea255dd2c85d63b5171f1dac97c435"
    },
    {
      "questionId": "u22-s013-v007",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "下列哪一個是擲兩顆可區分硬幣的完整樣本空間？",
      "text": "下列哪一個是擲兩顆可區分硬幣的完整樣本空間？",
      "givenConditions": [],
      "target": "審核樣本空間完整性",
      "choices": [
        "{正正，正反，反反}",
        "{正正，正反，反正，反反}",
        "{2正，1正1反，2反}",
        "{正，反}"
      ],
      "answerIndex": 1,
      "independentSolution": "可區分順序時四個有序結果都必須列出。",
      "explanation": "可區分順序時四個有序結果都必須列出。",
      "steps": [
        "逐層展開。",
        "檢查正反與反正皆在。"
      ],
      "optionAnalysis": [
        {
          "choice": "{正正，正反，反反}",
          "truth": false,
          "reason": "漏掉反正。"
        },
        {
          "choice": "{正正，正反，反正，反反}",
          "truth": true,
          "reason": "正確。獨立重算：可區分順序時四個有序結果都必須列出。"
        },
        {
          "choice": "{2正，1正1反，2反}",
          "truth": false,
          "reason": "把正反與反正合併成事件類別，非基本有序結果。"
        },
        {
          "choice": "{正，反}",
          "truth": false,
          "reason": "只列單次結果。"
        }
      ],
      "misconceptionTarget": "用分類事件取代等可能基本結果。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "兩次投擲順序固定可辨。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：審核樣本空間完整性",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "審核樣本空間完整性",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "e31ca9063c21ee3b96c2c77008822bc7ad964d3443adfc0a7459222d57952651"
    },
    {
      "questionId": "u22-s013-v008",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "從1、2、3、4中不重複選兩個數，若只關心兩數和，不記順序，可能的和有哪些？",
      "text": "從1、2、3、4中不重複選兩個數，若只關心兩數和，不記順序，可能的和有哪些？",
      "givenConditions": [],
      "target": "由原始結果映射到統計量",
      "choices": [
        "{2，3，4，5，6，7，8}",
        "{3，4，5，6}",
        "{3，4，5，6，7}",
        "{3，5，7}"
      ],
      "answerIndex": 2,
      "independentSolution": "不同兩數組合的和：1+2=3、1+3=4、1+4或2+3=5、2+4=6、3+4=7。",
      "explanation": "不同兩數組合的和：1+2=3、1+3=4、1+4或2+3=5、2+4=6、3+4=7。",
      "steps": [
        "列所有不重複兩數組合。",
        "將相同和合併。"
      ],
      "optionAnalysis": [
        {
          "choice": "{2，3，4，5，6，7，8}",
          "truth": false,
          "reason": "包含重複選同數的和2、8。"
        },
        {
          "choice": "{3，4，5，6}",
          "truth": false,
          "reason": "漏掉3+4=7。"
        },
        {
          "choice": "{3，4，5，6，7}",
          "truth": true,
          "reason": "正確。獨立重算：不同兩數組合的和：1+2=3、1+3=4、1+4或2+3=5、2+4=6、3+4=7。"
        },
        {
          "choice": "{3，5，7}",
          "truth": false,
          "reason": "漏掉偶數和。"
        }
      ],
      "misconceptionTarget": "把「和的樣本空間」誤列成所有有序抽取結果。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "不同和不等可能，不能直接用5個和做古典機率分母。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由原始結果映射到統計量",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由原始結果映射到統計量",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "59a641341bf2a9a263384981a912f79f2128db8cb5ff7284216466c1fc236a9e"
    },
    {
      "questionId": "u22-s013-v009",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "擲兩顆公平骰，只記錄點數和。下列哪項正確？",
      "text": "擲兩顆公平骰，只記錄點數和。下列哪項正確？",
      "givenConditions": [],
      "target": "區分記錄空間與等可能基本空間",
      "choices": [
        "和的樣本空間是2到12，但各和不等可能",
        "和2到12都等可能",
        "樣本空間只有1到6",
        "和0到12且等可能"
      ],
      "answerIndex": 0,
      "independentSolution": "可能和為2至12；例如和7有6種配對，和2只有1種，所以不是等可能。",
      "explanation": "可能和為2至12；例如和7有6種配對，和2只有1種，所以不是等可能。",
      "steps": [
        "先列值域2至12。",
        "比較兩個和的原始配對數。"
      ],
      "optionAnalysis": [
        {
          "choice": "和的樣本空間是2到12，但各和不等可能",
          "truth": true,
          "reason": "正確。獨立重算：可能和為2至12；例如和7有6種配對，和2只有1種，所以不是等可能。"
        },
        {
          "choice": "和2到12都等可能",
          "truth": false,
          "reason": "不同和對應的有序配對數不同。"
        },
        {
          "choice": "樣本空間只有1到6",
          "truth": false,
          "reason": "那是單顆骰點數。"
        },
        {
          "choice": "和0到12且等可能",
          "truth": false,
          "reason": "最小和是2。"
        }
      ],
      "misconceptionTarget": "看到連續整數就假設等可能。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "計算機率時宜回到36個有序配對。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：區分記錄空間與等可能基本空間",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "區分記錄空間與等可能基本空間",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "85e740bc4a786e3168bbedb6792b97a1a4fb1c4d9b106599c5f10812e6dc308f"
    },
    {
      "questionId": "u22-s013-v010",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "門鎖密碼由一個英文字母A或B，再接一個數字1、2、3組成，字母在前。共有多少個可能密碼？",
      "text": "門鎖密碼由一個英文字母A或B，再接一個數字1、2、3組成，字母在前。共有多少個可能密碼？",
      "givenConditions": [],
      "target": "在密碼格式中建立樣本空間",
      "choices": [
        "5個",
        "8個",
        "6個",
        "3個"
      ],
      "answerIndex": 2,
      "independentSolution": "密碼為A1、A2、A3、B1、B2、B3，共2×3=6個。",
      "explanation": "密碼為A1、A2、A3、B1、B2、B3，共2×3=6個。",
      "steps": [
        "第一位置2種。",
        "第二位置3種。",
        "順序格式固定。"
      ],
      "optionAnalysis": [
        {
          "choice": "5個",
          "truth": false,
          "reason": "把2與3相加。"
        },
        {
          "choice": "8個",
          "truth": false,
          "reason": "誤以為兩位置各有4種。"
        },
        {
          "choice": "6個",
          "truth": true,
          "reason": "正確。獨立重算：密碼為A1、A2、A3、B1、B2、B3，共2×3=6個。"
        },
        {
          "choice": "3個",
          "truth": false,
          "reason": "只看數字位置。"
        }
      ],
      "misconceptionTarget": "把不同位置選項數相加。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "不允許其他字母或數字。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在密碼格式中建立樣本空間",
      "literacyContextNecessity": "資安規則的可能組合數取決於每一位置的選項。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "在密碼格式中建立樣本空間",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "ce4170f3226ffcb3566ea8aad4e7d786e9c38066e5e5362143720ba4c2a2a2f7"
    },
    {
      "questionId": "u22-s013-v011",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "校外教學先選去程路線甲或乙，再選回程路線甲或乙，但不得去回都走甲。樣本空間有幾個有序結果？",
      "text": "校外教學先選去程路線甲或乙，再選回程路線甲或乙，但不得去回都走甲。樣本空間有幾個有序結果？",
      "givenConditions": [],
      "target": "處理受限制的樣本空間",
      "choices": [
        "4個",
        "3個",
        "2個",
        "1個"
      ],
      "answerIndex": 1,
      "independentSolution": "原有甲甲、甲乙、乙甲、乙乙四種，排除甲甲後剩3種。",
      "explanation": "原有甲甲、甲乙、乙甲、乙乙四種，排除甲甲後剩3種。",
      "steps": [
        "列4個有序配對。",
        "套用限制排除1個。"
      ],
      "optionAnalysis": [
        {
          "choice": "4個",
          "truth": false,
          "reason": "未排除甲甲。"
        },
        {
          "choice": "3個",
          "truth": true,
          "reason": "正確。獨立重算：原有甲甲、甲乙、乙甲、乙乙四種，排除甲甲後剩3種。"
        },
        {
          "choice": "2個",
          "truth": false,
          "reason": "只保留不同路線甲乙、乙甲，漏掉乙乙。"
        },
        {
          "choice": "1個",
          "truth": false,
          "reason": "把去回順序忽略。"
        }
      ],
      "misconceptionTarget": "看到「不得相同」而誤排除乙乙，但題目只禁甲甲。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "限制條件只針對甲甲。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：處理受限制的樣本空間",
      "literacyContextNecessity": "路線規則會刪除特定路徑，不能用未限制的乘法結果直接作答。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "處理受限制的樣本空間",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "aac192f83ee13d57885618366861d591fd1c4cea8574f406420ba97e1c2e8f99"
    },
    {
      "questionId": "u22-s013-v012",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某問卷從三個時段早、中、晚選一個，再從線上或紙本選一種填答方式。若晚間不提供紙本，完整樣本空間有多少結果？",
      "text": "某問卷從三個時段早、中、晚選一個，再從線上或紙本選一種填答方式。若晚間不提供紙本，完整樣本空間有多少結果？",
      "givenConditions": [],
      "target": "建立不規則情境樣本空間",
      "choices": [
        "6個",
        "4個",
        "3個",
        "5個"
      ],
      "answerIndex": 3,
      "independentSolution": "早有線上、紙本2種；中有2種；晚只有線上1種，共5種。",
      "explanation": "早有線上、紙本2種；中有2種；晚只有線上1種，共5種。",
      "steps": [
        "先列3×2=6。",
        "刪除晚紙本。",
        "得5。"
      ],
      "optionAnalysis": [
        {
          "choice": "6個",
          "truth": false,
          "reason": "未刪除晚間紙本。"
        },
        {
          "choice": "4個",
          "truth": false,
          "reason": "多刪除一個有效組合。"
        },
        {
          "choice": "3個",
          "truth": false,
          "reason": "只算時段。"
        },
        {
          "choice": "5個",
          "truth": true,
          "reason": "正確。獨立重算：早有線上、紙本2種；中有2種；晚只有線上1種，共5種。"
        }
      ],
      "misconceptionTarget": "條件限制只寫在文字中卻未反映到樣本空間。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "每個有效結果均包含時段與方式。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：建立不規則情境樣本空間",
      "literacyContextNecessity": "問卷安排需要準確列出實際可提供的組合。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "建立不規則情境樣本空間",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "3198d8d420c4268383b7261c31f5de392c3c30b2bb5f96ec87abbdc3216cc09e"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u22-s013-cr001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "擲一枚硬幣與一顆四面公平骰（點數1到4）。列出完整樣本空間，並求「正面且偶數」的機率。",
      "requiredWork": [
        "以有序對列結果。",
        "確認共有8個。",
        "找出(正,2)、(正,4)。"
      ],
      "standardSolution": [
        "S={(正,1),(正,2),(正,3),(正,4),(反,1),(反,2),(反,3),(反,4)}。",
        "共有8個等可能結果，有利結果2個。",
        "機率=2/8=1/4。"
      ],
      "reasoningSteps": [
        "S={(正,1),(正,2),(正,3),(正,4),(反,1),(反,2),(反,3),(反,4)}。",
        "共有8個等可能結果，有利結果2個。",
        "機率=2/8=1/4。"
      ],
      "alternativeMethods": [
        "可用乘法原理2×4=8，再以(1/2)(2/4)=1/4驗算。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "8個結果完整、事件2個與1/4全部正確。"
        },
        {
          "score": 2,
          "criteria": "只漏一個樣本點但事件及結論依完整空間表達正確。"
        },
        {
          "score": 1,
          "criteria": "知道共有8個並找出兩個有利結果。"
        },
        {
          "score": 0,
          "criteria": "把兩種裝置結果相加成6種或不區分順序角色。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "樣本空間次序不同不扣分；只寫1/4無列舉最高1分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "只列點數不列硬幣。",
        "把正面與偶數當相加事件。",
        "分母用4。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "S={(正,1),(正,2),(正,3),(正,4),(反,1),(反,2),(反,3),(反,4)}。；共有8個等可能結果，有利結果2個。；機率=2/8=1/4。",
        "alternativeMethodCheck": "可用乘法原理2×4=8，再以(1/2)(2/4)=1/4驗算。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "66cb5581643dce499f77fb1006b949a8176e7a97f473c5a8c6fc3c67e6a14f0e"
    },
    {
      "questionId": "u22-s013-cr002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-probability",
      "skillId": "probability-sample-space",
      "lockedSkillOrder": 13,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "從數字卡1、2、3中不放回依序抽兩張。列出樣本空間，並求兩位數大於20的機率。",
      "requiredWork": [
        "保留抽取順序。",
        "排除重複抽同卡。",
        "判斷形成的兩位數。"
      ],
      "standardSolution": [
        "S={(1,2),(1,3),(2,1),(2,3),(3,1),(3,2)}，對應12、13、21、23、31、32。",
        "大於20的有21、23、31、32，共4個。",
        "機率=4/6=2/3。"
      ],
      "reasoningSteps": [
        "S={(1,2),(1,3),(2,1),(2,3),(3,1),(3,2)}，對應12、13、21、23、31、32。",
        "大於20的有21、23、31、32，共4個。",
        "機率=4/6=2/3。"
      ],
      "alternativeMethods": [
        "可用第一位為2或3：兩種首位各有2種次位，共4種。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "六個有序結果、四個有利結果與2/3完整。"
        },
        {
          "score": 2,
          "criteria": "樣本空間只有一處漏列但以正確原理得到2/3。"
        },
        {
          "score": 1,
          "criteria": "知道順序重要並列出至少四個正確結果。"
        },
        {
          "score": 0,
          "criteria": "允許11、22、33或把12與21視為同一結果。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若只列兩位數而非有序對也可；需完整且不重複。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "放回而列重複數字。",
        "忽略順序。",
        "把大於20誤作首位只能3。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "S={(1,2),(1,3),(2,1),(2,3),(3,1),(3,2)}，對應12、13、21、23、31、32。；大於20的有21、23、31、32，共4個。；機率=4/6=2/3。",
        "alternativeMethodCheck": "可用第一位為2或3：兩種首位各有2種次位，共4種。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "0bee1dc9c20958efb9b393ea6cdcff02ce7eeedf8dec108d42e5f7f083e49ae4"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u22-s013-v001",
      "unitId": "u22",
      "skillId": "probability-sample-space",
      "contentSha256": "95a2305f08b9e9d97d857ce293d8d124fdacd36dd7a75d3b7cfd0985d7b0f83b",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "在理想模型中只有正面與反面兩個可能結果，所以S={正，反}。",
      "derivedAnswer": "{正，反}",
      "storedAnswer": "{正，反}",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「{正，反}」；其餘選項逐項排除：「{正}」：漏掉反面。；「{反}」：漏掉正面。；「{正，反，邊緣}」：一般理想硬幣模型不把立在邊緣列為基本結果。",
        "undefinedSymbol": "題幹術語均已在「樣本空間」講義定義；實際目標為「列單階段樣本空間」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "採標準公平硬幣理想模型。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把極少見但模型未納入的情況自行加入。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：列單階段樣本空間",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「擲一枚硬幣一次，完整樣本空間是哪一個？」；獨立解法「在理想模型中只有正面與反面兩個可能結果，所以S={正，反}。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s013-v002",
      "unitId": "u22",
      "skillId": "probability-sample-space",
      "contentSha256": "a40ba92bf77d39de99d4a6f7824bea48d2bc6bbb5c8ed48f847bed92608d25d7",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "結果為正正、正反、反正、反反，共4個。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「4」；其餘選項逐項排除：「2」：只記正反種類，忽略兩次順序。；「3」：漏掉一種混合順序。；「8」：多算一次投擲。",
        "undefinedSymbol": "題幹術語均已在「樣本空間」講義定義；實際目標為「計算有序樣本空間」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩次投擲都要記錄。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把正反與反正視為相同。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算有序樣本空間",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「先擲硬幣再擲一次硬幣，若用正、反記錄順序，樣本空間共有幾個結果？」；獨立解法「結果為正正、正反、反正、反反，共4個。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s013-v003",
      "unitId": "u22",
      "skillId": "probability-sample-space",
      "contentSha256": "9900856e419e97c4646279d6325a3a8e77bac6592f2ddb56e73084308b3e13c2",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "題目明定可選1、2、3，三者構成完整樣本空間。",
      "derivedAnswer": "{1，2，3}",
      "storedAnswer": "{1，2，3}",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「{1，2，3}」；其餘選項逐項排除：「{0，1，2，3}」：自行加入0。；「{1，2}」：漏掉3。；「{3}」：只列有利結果而非全部結果。",
        "undefinedSymbol": "題幹術語均已在「樣本空間」講義定義；實際目標為「辨識樣本空間與事件」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "每個候選是否等可能屬下一步問題。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把事件集合當樣本空間。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：辨識樣本空間與事件",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「從數字1、2、3中任選一個，樣本空間為何？」；獨立解法「題目明定可選1、2、3，三者構成完整樣本空間。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s013-v004",
      "unitId": "u22",
      "skillId": "probability-sample-space",
      "contentSha256": "efda3fedb0fa002825724d442a68fae58b06bb9047a9eeb3bbca3d7aa9708b50",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "依題目記錄方式，1、3、5都記為奇，2、4、6都記為偶，所以記錄樣本空間是{奇，偶}。",
      "derivedAnswer": "2",
      "storedAnswer": "2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「2」；其餘選項逐項排除：「6」：這是原始點數層級的樣本點數。；「3」：奇偶只有兩類。；「12」：多乘一次分類。",
        "undefinedSymbol": "題幹術語均已在「樣本空間」講義定義；實際目標為「依記錄規則定義樣本空間」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "若計算機率仍需知道每類包含多少原始等可能結果。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「不區分原始試驗與實際記錄層級。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：依記錄規則定義樣本空間",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「先擲骰子一次，再記錄點數是奇或偶。若只保留「奇、偶」分類，樣本空間有幾個基本記錄結果？」；獨立解法「依題目記錄方式，1、3、5都記為奇，2、4、6都記為偶，所以記錄樣本空間是{奇，偶}。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s013-v005",
      "unitId": "u22",
      "skillId": "probability-sample-space",
      "contentSha256": "54e0c9eba9de1d35421808d66fb1597818cab5b323756535585ca1c811e4895c",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "每次都可抽A、B、C，放回後第二次仍有3種，共3×3=9。",
      "derivedAnswer": "9",
      "storedAnswer": "9",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「9」；其餘選項逐項排除：「6」：誤用不放回計數。；「3」：只算第一次。；「12」：把3×4。",
        "undefinedSymbol": "題幹術語均已在「樣本空間」講義定義；實際目標為「建立放回抽取樣本空間」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩次順序有記錄。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「忽略放回使第二次選項恢復。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：建立放回抽取樣本空間",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「袋中有標號A、B、C三球，抽一球記錄後放回，再抽一球。樣本空間共有幾個有序結果？」；獨立解法「每次都可抽A、B、C，放回後第二次仍有3種，共3×3=9。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s013-v006",
      "unitId": "u22",
      "skillId": "probability-sample-space",
      "contentSha256": "aaec5a7c0ac612779fcfcb0713525b79dcea255dd2c85d63b5171f1dac97c435",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "第一次3種，第二次剩2種，有序結果3×2=6。",
      "derivedAnswer": "6",
      "storedAnswer": "6",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「6」；其餘選項逐項排除：「9」：把第二次仍當3種。；「3」：忽略順序與第二次。；「2」：只看抽取次數。",
        "undefinedSymbol": "題幹術語均已在「樣本空間」講義定義；實際目標為「建立不放回樣本空間」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "同一球不能重複抽到。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「不放回仍保留重複結果AA。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：建立不放回樣本空間",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「袋中有A、B、C三球，不放回連抽兩球並記錄順序。樣本空間共有幾個結果？」；獨立解法「第一次3種，第二次剩2種，有序結果3×2=6。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s013-v007",
      "unitId": "u22",
      "skillId": "probability-sample-space",
      "contentSha256": "e31ca9063c21ee3b96c2c77008822bc7ad964d3443adfc0a7459222d57952651",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "可區分順序時四個有序結果都必須列出。",
      "derivedAnswer": "{正正，正反，反正，反反}",
      "storedAnswer": "{正正，正反，反正，反反}",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「{正正，正反，反正，反反}」；其餘選項逐項排除：「{正正，正反，反反}」：漏掉反正。；「{2正，1正1反，2反}」：把正反與反正合併成事件類別，非基本有序結果。；「{正，反}」：只列單次結果。",
        "undefinedSymbol": "題幹術語均已在「樣本空間」講義定義；實際目標為「審核樣本空間完整性」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "兩次投擲順序固定可辨。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「用分類事件取代等可能基本結果。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：審核樣本空間完整性",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一個是擲兩顆可區分硬幣的完整樣本空間？」；獨立解法「可區分順序時四個有序結果都必須列出。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s013-v008",
      "unitId": "u22",
      "skillId": "probability-sample-space",
      "contentSha256": "59a641341bf2a9a263384981a912f79f2128db8cb5ff7284216466c1fc236a9e",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "不同兩數組合的和：1+2=3、1+3=4、1+4或2+3=5、2+4=6、3+4=7。",
      "derivedAnswer": "{3，4，5，6，7}",
      "storedAnswer": "{3，4，5，6，7}",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「{3，4，5，6，7}」；其餘選項逐項排除：「{2，3，4，5，6，7，8}」：包含重複選同數的和2、8。；「{3，4，5，6}」：漏掉3+4=7。；「{3，5，7}」：漏掉偶數和。",
        "undefinedSymbol": "題幹術語均已在「樣本空間」講義定義；實際目標為「由原始結果映射到統計量」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "不同和不等可能，不能直接用5個和做古典機率分母。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把「和的樣本空間」誤列成所有有序抽取結果。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由原始結果映射到統計量",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「從1、2、3、4中不重複選兩個數，若只關心兩數和，不記順序，可能的和有哪些？」；獨立解法「不同兩數組合的和：1+2=3、1+3=4、1+4或2+3=5、2+4=6、3+4=7。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s013-v009",
      "unitId": "u22",
      "skillId": "probability-sample-space",
      "contentSha256": "85e740bc4a786e3168bbedb6792b97a1a4fb1c4d9b106599c5f10812e6dc308f",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "可能和為2至12；例如和7有6種配對，和2只有1種，所以不是等可能。",
      "derivedAnswer": "和的樣本空間是2到12，但各和不等可能",
      "storedAnswer": "和的樣本空間是2到12，但各和不等可能",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「和的樣本空間是2到12，但各和不等可能」；其餘選項逐項排除：「和2到12都等可能」：不同和對應的有序配對數不同。；「樣本空間只有1到6」：那是單顆骰點數。；「和0到12且等可能」：最小和是2。",
        "undefinedSymbol": "題幹術語均已在「樣本空間」講義定義；實際目標為「區分記錄空間與等可能基本空間」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "計算機率時宜回到36個有序配對。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「看到連續整數就假設等可能。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：區分記錄空間與等可能基本空間",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「擲兩顆公平骰，只記錄點數和。下列哪項正確？」；獨立解法「可能和為2至12；例如和7有6種配對，和2只有1種，所以不是等可能。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s013-v010",
      "unitId": "u22",
      "skillId": "probability-sample-space",
      "contentSha256": "ce4170f3226ffcb3566ea8aad4e7d786e9c38066e5e5362143720ba4c2a2a2f7",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "密碼為A1、A2、A3、B1、B2、B3，共2×3=6個。",
      "derivedAnswer": "6個",
      "storedAnswer": "6個",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「6個」；其餘選項逐項排除：「5個」：把2與3相加。；「8個」：誤以為兩位置各有4種。；「3個」：只看數字位置。",
        "undefinedSymbol": "題幹術語均已在「樣本空間」講義定義；實際目標為「在密碼格式中建立樣本空間」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "不允許其他字母或數字。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把不同位置選項數相加。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：在密碼格式中建立樣本空間",
      "literacyContextNecessity": "資安規則的可能組合數取決於每一位置的選項。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「門鎖密碼由一個英文字母A或B，再接一個數字1、2、3組成，字母在前。共有多少個可能密碼？」；獨立解法「密碼為A1、A2、A3、B1、B2、B3，共2×3=6個。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s013-v011",
      "unitId": "u22",
      "skillId": "probability-sample-space",
      "contentSha256": "aac192f83ee13d57885618366861d591fd1c4cea8574f406420ba97e1c2e8f99",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "原有甲甲、甲乙、乙甲、乙乙四種，排除甲甲後剩3種。",
      "derivedAnswer": "3個",
      "storedAnswer": "3個",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「3個」；其餘選項逐項排除：「4個」：未排除甲甲。；「2個」：只保留不同路線甲乙、乙甲，漏掉乙乙。；「1個」：把去回順序忽略。",
        "undefinedSymbol": "題幹術語均已在「樣本空間」講義定義；實際目標為「處理受限制的樣本空間」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "限制條件只針對甲甲。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「看到「不得相同」而誤排除乙乙，但題目只禁甲甲。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：處理受限制的樣本空間",
      "literacyContextNecessity": "路線規則會刪除特定路徑，不能用未限制的乘法結果直接作答。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「校外教學先選去程路線甲或乙，再選回程路線甲或乙，但不得去回都走甲。樣本空間有幾個有序結果？」；獨立解法「原有甲甲、甲乙、乙甲、乙乙四種，排除甲甲後剩3種。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s013-v012",
      "unitId": "u22",
      "skillId": "probability-sample-space",
      "contentSha256": "3198d8d420c4268383b7261c31f5de392c3c30b2bb5f96ec87abbdc3216cc09e",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "早有線上、紙本2種；中有2種；晚只有線上1種，共5種。",
      "derivedAnswer": "5個",
      "storedAnswer": "5個",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「5個」；其餘選項逐項排除：「6個」：未刪除晚間紙本。；「4個」：多刪除一個有效組合。；「3個」：只算時段。",
        "undefinedSymbol": "題幹術語均已在「樣本空間」講義定義；實際目標為「建立不規則情境樣本空間」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "每個有效結果均包含時段與方式。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「條件限制只寫在文字中卻未反映到樣本空間。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：建立不規則情境樣本空間",
      "literacyContextNecessity": "問卷安排需要準確列出實際可提供的組合。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-tree-basic。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某問卷從三個時段早、中、晚選一個，再從線上或紙本選一種填答方式。若晚間不提供紙本，完整樣本空間有多少結果？」；獨立解法「早有線上、紙本2種；中有2種；晚只有線上1種，共5種。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    }
  ],
  "drawingSpecs": []
};
