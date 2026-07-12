// Emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u22-s017-lecture-r1",
    "unitId": "u22",
    "numericUnitId": 22,
    "topicId": "u22-literacy",
    "skillId": "probability-literacy",
    "lockedSkillOrder": 17,
    "title": "機率素養題：解讀規則與風險與期望次數與公平性。",
    "originalLockedTitle": "機率素養題",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能區分機率、相對次數與期望值。",
      "能計算簡單長期期望。",
      "能辨識賭徒謬誤與誤導宣傳。",
      "能在期望與風險之間作有限比較。"
    ],
    "prerequisiteSkillIds": [
      "probability-word"
    ],
    "prerequisiteBridge": "承接機率應用題與兩階段計算。",
    "glossary": [
      {
        "term": "期望值",
        "definition": "大量重複時每次結果的理論平均。"
      },
      {
        "term": "相對次數",
        "definition": "事件發生次數除以試驗總次數。"
      },
      {
        "term": "獨立",
        "definition": "前一次結果不改變下一次機率。"
      },
      {
        "term": "賭徒謬誤",
        "definition": "誤認隨機結果會因過去偏向而短期補償。"
      }
    ],
    "notation": [
      {
        "symbol": "E=Σ(結果值×機率)",
        "meaning": "離散結果的簡單期望。"
      },
      {
        "symbol": "期望次數=試驗次數×單次機率",
        "meaning": "條件穩定時。"
      }
    ],
    "conceptNarrative": [
      "期望值可能不是任何一次實際可得到的結果，例如每局期望3分但單局只得0或12。",
      "機率20%描述長期比例傾向，不保證每5次恰好一次。",
      "公平硬幣連出5次正面，第6次仍是1/2；獨立性排除「該出反面」的想法。",
      "比較遊戲時要把固定成本扣除，再比較淨收益期望。",
      "期望相同的方案風險可不同，題目若只問期望就不能偷偷加入個人風險偏好。"
    ],
    "formalDefinitions": [
      {
        "name": "公平遊戲",
        "statement": "以淨收益期望0作為一種數學判準。"
      },
      {
        "name": "模擬估計",
        "statement": "用大量隨機試驗相對次數近似理論機率。"
      }
    ],
    "formulas": [
      {
        "formula": "淨期望=獎金期望-固定成本",
        "conditions": [
          "每局成本固定。"
        ],
        "meaning": "每局成本固定。"
      },
      {
        "formula": "E=aP(a)+bP(b)+…",
        "conditions": [
          "結果互斥且完整。"
        ],
        "meaning": "結果互斥且完整。"
      }
    ],
    "nonApplicableCases": [
      "期望不是保證。",
      "短期連續結果不改變獨立試驗下一次機率。",
      "模擬27%不能證明理論機率恰為27%。",
      "高期望不代表每個人都應選，若題目問風險需另分析。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "列結果與機率",
        "check": "含負分與成本。"
      },
      {
        "step": 2,
        "instruction": "各自相乘",
        "check": "保持正負號。"
      },
      {
        "step": 3,
        "instruction": "加總期望",
        "check": "確認單位。"
      },
      {
        "step": 4,
        "instruction": "比較題目指定指標",
        "check": "期望、保證或風險。"
      },
      {
        "step": 5,
        "instruction": "審核語句",
        "check": "拒絕必然、補償與誇大。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "1/4得12，其餘0",
        "solutionSteps": [
          "期望3分。"
        ],
        "answer": "期望3分。"
      },
      {
        "exampleId": "L2",
        "prompt": "入場6，1/5得20",
        "solutionSteps": [
          "獎金期望4，淨期望-2元。"
        ],
        "answer": "獎金期望4，淨期望-2元。"
      },
      {
        "exampleId": "L3",
        "prompt": "骰6得10，其餘扣1",
        "solutionSteps": [
          "期望5/6點。"
        ],
        "answer": "期望5/6點。"
      },
      {
        "exampleId": "L4",
        "prompt": "100次事件率1%",
        "solutionSteps": [
          "期望1次，但實際可不同。"
        ],
        "answer": "期望1次，但實際可不同。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "最高獎金當平均",
        "why": "要乘機率。",
        "correction": "要乘機率。"
      },
      {
        "mistake": "只計獎金不扣成本",
        "why": "比較淨收益時要扣。",
        "correction": "比較淨收益時要扣。"
      },
      {
        "mistake": "連敗後說下一次較易中",
        "why": "若獨立則不變。",
        "correction": "若獨立則不變。"
      },
      {
        "mistake": "相對次數等同理論值",
        "why": "有限模擬有波動。",
        "correction": "有限模擬有波動。"
      }
    ],
    "selfCheck": [
      "結果是否互斥且完整？",
      "成本與負值是否納入？",
      "答案是期望還是單次保證？",
      "是否誤用過去結果改變獨立機率？",
      "模擬次數是否揭露？"
    ],
    "summary": [
      "機率描述不確定性，期望描述長期平均。",
      "獨立試驗不因連勝連敗自動補償。",
      "遊戲公平要看淨期望。",
      "模擬是估計，不是證明。"
    ],
    "connections": {
      "previous": "承接機率應用題與兩階段計算。",
      "next": [
        "最後技能整合統計摘要、抽樣與機率推論。"
      ]
    },
    "figureReferences": [],
    "figureAccessibility": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u22-s017-v001",
        "u22-s017-v002",
        "u22-s017-v003",
        "u22-s017-v004",
        "u22-s017-v005",
        "u22-s017-v006",
        "u22-s017-v007",
        "u22-s017-v008",
        "u22-s017-v009",
        "u22-s017-v010",
        "u22-s017-v011",
        "u22-s017-v012"
      ],
      "constructedResponseIds": [
        "u22-s017-cr001",
        "u22-s017-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "skillSpecificReviewEvidence": "重算四個期望案例並核對負號與成本；所有宣稱題均檢查獨立條件，避免把長期比例改寫為固定週期。",
      "futureKnowledgeCheck": "pass; all methods use this skill or declared prerequisites only",
      "contentBoundary": "解讀規則、風險、期望次數與公平性。",
      "reviewVersion": "human-lecture-review-u22-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "ec904cdc83a0a5b8b3009999e1d8c279bcd8c548ddad3e2a8ebc3ae68e9754ca"
  },
  "mcQuestions": [
    {
      "questionId": "u22-s017-v001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一個公平遊戲中，玩家有1/4機率得12分，其餘得0分。長期每局平均得分的理論值為何？",
      "text": "一個公平遊戲中，玩家有1/4機率得12分，其餘得0分。長期每局平均得分的理論值為何？",
      "givenConditions": [],
      "target": "計算簡單期望值",
      "choices": [
        "3分",
        "4分",
        "9分",
        "12分"
      ],
      "answerIndex": 0,
      "independentSolution": "長期平均可用12×1/4+0×3/4=3分。",
      "explanation": "長期平均可用12×1/4+0×3/4=3分。",
      "steps": [
        "每種結果乘其機率。",
        "加總。"
      ],
      "optionAnalysis": [
        {
          "choice": "3分",
          "truth": true,
          "reason": "正確。獨立重算：長期平均可用12×1/4+0×3/4=3分。"
        },
        {
          "choice": "4分",
          "truth": false,
          "reason": "用12÷3。"
        },
        {
          "choice": "9分",
          "truth": false,
          "reason": "把未得分機率乘12。"
        },
        {
          "choice": "12分",
          "truth": false,
          "reason": "把最高得分當平均。"
        }
      ],
      "misconceptionTarget": "把可能最高獎勵當每局平均。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "這是長期理論平均，不保證單局得到3分。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算簡單期望值",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算簡單期望值",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "c2c608fbc77d9c47c049d4119149da6e3e4d3b1eea0dbeb4d7d7041653845001"
    },
    {
      "questionId": "u22-s017-v002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某事件機率為20%。下列哪句最正確？",
      "text": "某事件機率為20%。下列哪句最正確？",
      "givenConditions": [],
      "target": "解讀機率意義",
      "choices": [
        "每5次一定發生1次",
        "下一次有80%會發生",
        "大量重複試驗時，發生比例通常會接近20%",
        "連續4次沒發生，第5次必發生"
      ],
      "answerIndex": 2,
      "independentSolution": "機率描述長期傾向，不規定每一小段試驗的確切排列。",
      "explanation": "機率描述長期傾向，不規定每一小段試驗的確切排列。",
      "steps": [
        "區分長期比例與短期保證。"
      ],
      "optionAnalysis": [
        {
          "choice": "每5次一定發生1次",
          "truth": false,
          "reason": "短期不保證固定週期。"
        },
        {
          "choice": "下一次有80%會發生",
          "truth": false,
          "reason": "把餘事機率顛倒。"
        },
        {
          "choice": "大量重複試驗時，發生比例通常會接近20%",
          "truth": true,
          "reason": "正確。獨立重算：機率描述長期傾向，不規定每一小段試驗的確切排列。"
        },
        {
          "choice": "連續4次沒發生，第5次必發生",
          "truth": false,
          "reason": "犯賭徒謬誤。"
        }
      ],
      "misconceptionTarget": "把機率當週期表。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "假設試驗條件穩定。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：解讀機率意義",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "解讀機率意義",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "00e5862632d59bf7d28bf1d12524ca8ad8972bacc804f35b49b5043d73dbf307"
    },
    {
      "questionId": "u22-s017-v003",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "甲遊戲中獎率1/10，乙遊戲中獎率1/5。若獎品價值相同且成本相同，哪個較有利？",
      "text": "甲遊戲中獎率1/10，乙遊戲中獎率1/5。若獎品價值相同且成本相同，哪個較有利？",
      "givenConditions": [],
      "target": "在控制條件下比較遊戲",
      "choices": [
        "甲",
        "一樣",
        "不能比較任何事",
        "乙"
      ],
      "answerIndex": 3,
      "independentSolution": "獎值、成本相同時，中獎率較高的乙較有利。",
      "explanation": "獎值、成本相同時，中獎率較高的乙較有利。",
      "steps": [
        "比較1/10與1/5。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲",
          "truth": false,
          "reason": "1/10小於1/5。"
        },
        {
          "choice": "一樣",
          "truth": false,
          "reason": "機率不同。"
        },
        {
          "choice": "不能比較任何事",
          "truth": false,
          "reason": "在題目已固定獎值與成本後可比較。"
        },
        {
          "choice": "乙",
          "truth": true,
          "reason": "正確。獨立重算：獎值、成本相同時，中獎率較高的乙較有利。"
        }
      ],
      "misconceptionTarget": "忽略題目已控制其他條件。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "若獎值或成本不同則需額外資訊。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：在控制條件下比較遊戲",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "在控制條件下比較遊戲",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "476859208e41be5d9509151ac46e383efe26f3fedadae53feb64c3f779189e76"
    },
    {
      "questionId": "u22-s017-v004",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "遊戲A：1/2機率得4分，1/2得0分。遊戲B：1/4機率得8分，其餘0分。兩者長期平均得分如何？",
      "text": "遊戲A：1/2機率得4分，1/2得0分。遊戲B：1/4機率得8分，其餘0分。兩者長期平均得分如何？",
      "givenConditions": [],
      "target": "比較兩遊戲期望",
      "choices": [
        "A較高",
        "相同，都是2分",
        "B較高",
        "都為4分"
      ],
      "answerIndex": 1,
      "independentSolution": "A期望2分；B期望2分。雖波動不同，長期平均相同。",
      "explanation": "A期望2分；B期望2分。雖波動不同，長期平均相同。",
      "steps": [
        "分別算獎勵×機率。",
        "比較。"
      ],
      "optionAnalysis": [
        {
          "choice": "A較高",
          "truth": false,
          "reason": "A期望4×1/2=2。"
        },
        {
          "choice": "相同，都是2分",
          "truth": true,
          "reason": "正確。獨立重算：A期望2分；B期望2分。雖波動不同，長期平均相同。"
        },
        {
          "choice": "B較高",
          "truth": false,
          "reason": "B期望8×1/4=2。"
        },
        {
          "choice": "都為4分",
          "truth": false,
          "reason": "把最高獎勵平均。"
        }
      ],
      "misconceptionTarget": "只看中獎率或最高獎勵。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "未比較風險或變異，只比較平均。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：比較兩遊戲期望",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "比較兩遊戲期望",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "01c64f5694e6d7052351b65f8ff700199182589b430e6f920c613a30e7628504"
    },
    {
      "questionId": "u22-s017-v005",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某檢測誤報率1%。對100次檢測，下列何者最合理？",
      "text": "某檢測誤報率1%。對100次檢測，下列何者最合理？",
      "givenConditions": [],
      "target": "解讀期望次數",
      "choices": [
        "一定恰好1次",
        "不可能有2次誤報",
        "每次檢測到第100次才誤報",
        "預期約1次誤報，但實際可能不是恰好1次"
      ],
      "answerIndex": 3,
      "independentSolution": "100×1%=1是期望次數，實際重複結果可為0、1、2或更多。",
      "explanation": "100×1%=1是期望次數，實際重複結果可為0、1、2或更多。",
      "steps": [
        "機率乘次數得期望。",
        "補充隨機波動。"
      ],
      "optionAnalysis": [
        {
          "choice": "一定恰好1次",
          "truth": false,
          "reason": "期望不是保證。"
        },
        {
          "choice": "不可能有2次誤報",
          "truth": false,
          "reason": "隨機波動可能造成。"
        },
        {
          "choice": "每次檢測到第100次才誤報",
          "truth": false,
          "reason": "機率不指定順序。"
        },
        {
          "choice": "預期約1次誤報，但實際可能不是恰好1次",
          "truth": true,
          "reason": "正確。獨立重算：100×1%=1是期望次數，實際重複結果可為0、1、2或更多。"
        }
      ],
      "misconceptionTarget": "把期望值當確定次數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "假設每次條件相近；未要求完整二項分布。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：解讀期望次數",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "解讀期望次數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "ba7c7d826ea5f50a1c78b0a723e20f596d74635629628b9a9f8f976ec2e48214"
    },
    {
      "questionId": "u22-s017-v006",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一枚硬幣連續出現5次正面。若硬幣公平且每次獨立，第6次正面的機率為何？",
      "text": "一枚硬幣連續出現5次正面。若硬幣公平且每次獨立，第6次正面的機率為何？",
      "givenConditions": [],
      "target": "辨識賭徒謬誤",
      "choices": [
        "1/6",
        "1/2",
        "小於1/2，因反面該出現了",
        "大於1/2，因正在連勝"
      ],
      "answerIndex": 1,
      "independentSolution": "獨立公平硬幣每次正面機率皆1/2，過去連續結果不影響下一次。",
      "explanation": "獨立公平硬幣每次正面機率皆1/2，過去連續結果不影響下一次。",
      "steps": [
        "使用獨立性。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/6",
          "truth": false,
          "reason": "把連續次數放入分母。"
        },
        {
          "choice": "1/2",
          "truth": true,
          "reason": "正確。獨立重算：獨立公平硬幣每次正面機率皆1/2，過去連續結果不影響下一次。"
        },
        {
          "choice": "小於1/2，因反面該出現了",
          "truth": false,
          "reason": "賭徒謬誤。"
        },
        {
          "choice": "大於1/2，因正在連勝",
          "truth": false,
          "reason": "過去結果不改變獨立試驗。"
        }
      ],
      "misconceptionTarget": "認為隨機結果會自動補償或延續。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "題目明定硬幣公平且獨立。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：辨識賭徒謬誤",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "辨識賭徒謬誤",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "dff1feda978a30fc1ac90a77a70d5a35a527b8c3ef420ed62e5a8a0e0f37841a"
    },
    {
      "questionId": "u22-s017-v007",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某遊戲入場費6元，1/5機率得20元獎金，其餘得0元。以淨收益計，長期每局平均為何？",
      "text": "某遊戲入場費6元，1/5機率得20元獎金，其餘得0元。以淨收益計，長期每局平均為何？",
      "givenConditions": [],
      "target": "計算含固定成本的期望",
      "choices": [
        "4元",
        "14元",
        "-2元",
        "-6元"
      ],
      "answerIndex": 2,
      "independentSolution": "獎金期望=4元，扣入場費6元，淨收益期望=4-6=-2元。",
      "explanation": "獎金期望=4元，扣入場費6元，淨收益期望=4-6=-2元。",
      "steps": [
        "算獎金期望4。",
        "每局固定扣6。"
      ],
      "optionAnalysis": [
        {
          "choice": "4元",
          "truth": false,
          "reason": "只算獎金期望20×1/5，未扣費。"
        },
        {
          "choice": "14元",
          "truth": false,
          "reason": "用20-6而忽略中獎率。"
        },
        {
          "choice": "-2元",
          "truth": true,
          "reason": "正確。獨立重算：獎金期望=4元，扣入場費6元，淨收益期望=4-6=-2元。"
        },
        {
          "choice": "-6元",
          "truth": false,
          "reason": "忽略可能獎金。"
        }
      ],
      "misconceptionTarget": "只看獎金，不計成本。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "負值表示長期平均虧損，不代表每局都虧2元。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：計算含固定成本的期望",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算含固定成本的期望",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "36d5cefc0a62a47ff4e7d2be7d0382748c4b4c48facce6fe05d29c993781e9a8"
    },
    {
      "questionId": "u22-s017-v008",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "遊戲規則：擲公平骰，出6得10點，其他點數扣1點。每局期望分數是多少？",
      "text": "遊戲規則：擲公平骰，出6得10點，其他點數扣1點。每局期望分數是多少？",
      "givenConditions": [],
      "target": "以期望判斷遊戲公平性",
      "choices": [
        "5/6點",
        "-1/6點",
        "3/2點",
        "0點"
      ],
      "answerIndex": 0,
      "independentSolution": "期望=10×1/6+(-1)×5/6=(10-5)/6=5/6點。",
      "explanation": "期望=10×1/6+(-1)×5/6=(10-5)/6=5/6點。",
      "steps": [
        "列兩類結果與機率。",
        "加權相加。"
      ],
      "optionAnalysis": [
        {
          "choice": "5/6點",
          "truth": true,
          "reason": "正確。獨立重算：期望=10×1/6+(-1)×5/6=(10-5)/6=5/6點。"
        },
        {
          "choice": "-1/6點",
          "truth": false,
          "reason": "負分權重計算錯。"
        },
        {
          "choice": "3/2點",
          "truth": false,
          "reason": "把得10點機率高估。"
        },
        {
          "choice": "0點",
          "truth": false,
          "reason": "誤認公平骰遊戲必公平。"
        }
      ],
      "misconceptionTarget": "把「公平骰」誤認為「遊戲公平」。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "公平遊戲通常指期望淨值0，本題為正5/6。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：以期望判斷遊戲公平性",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "以期望判斷遊戲公平性",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "4373baf4d46361e9331f144e756302705a469f73c780a1cdedaf5ad8c911f3ed"
    },
    {
      "questionId": "u22-s017-v009",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "兩個方案：甲有90%機率省10元、10%省0元；乙一定省8元。若只比較期望省下金額，何者較大？",
      "text": "兩個方案：甲有90%機率省10元、10%省0元；乙一定省8元。若只比較期望省下金額，何者較大？",
      "givenConditions": [],
      "target": "比較確定與隨機方案期望",
      "choices": [
        "乙，因8元是保證",
        "兩者相同",
        "甲，期望9元",
        "無法計算"
      ],
      "answerIndex": 2,
      "independentSolution": "甲期望=0.9×10=9元；乙=8元，所以只看期望甲較大。",
      "explanation": "甲期望=0.9×10=9元；乙=8元，所以只看期望甲較大。",
      "steps": [
        "計算兩方案期望。",
        "依題目限定只比期望。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙，因8元是保證",
          "truth": false,
          "reason": "保證性不等於期望較大。"
        },
        {
          "choice": "兩者相同",
          "truth": false,
          "reason": "9不等於8。"
        },
        {
          "choice": "甲，期望9元",
          "truth": true,
          "reason": "正確。獨立重算：甲期望=0.9×10=9元；乙=8元，所以只看期望甲較大。"
        },
        {
          "choice": "無法計算",
          "truth": false,
          "reason": "機率與金額完整。"
        }
      ],
      "misconceptionTarget": "把風險偏好混入題目未問的比較。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "若重視保證或風險，選擇可能不同。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：比較確定與隨機方案期望",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "比較確定與隨機方案期望",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "d6e71c8fa23ad2e3185ae6afbd000838b5255c0d81c8ae387d11b7fb491afcb0"
    },
    {
      "questionId": "u22-s017-v010",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "彩券宣傳「本期已有連續20人未中，下一人中獎機會更高」。若每張票獨立且中獎率固定，評語何者正確？",
      "text": "彩券宣傳「本期已有連續20人未中，下一人中獎機會更高」。若每張票獨立且中獎率固定，評語何者正確？",
      "givenConditions": [],
      "target": "審核機率宣傳",
      "choices": [
        "宣傳錯誤，前面結果不改變下一張機率",
        "正確，未中次數會累積機會",
        "正確，下一張必定中獎",
        "無法判斷，因不知道前20人姓名"
      ],
      "answerIndex": 0,
      "independentSolution": "固定獨立抽獎中，每張票的中獎率不因先前連續未中而改變。",
      "explanation": "固定獨立抽獎中，每張票的中獎率不因先前連續未中而改變。",
      "steps": [
        "辨認獨立性。",
        "拒絕賭徒謬誤。"
      ],
      "optionAnalysis": [
        {
          "choice": "宣傳錯誤，前面結果不改變下一張機率",
          "truth": true,
          "reason": "正確。獨立重算：固定獨立抽獎中，每張票的中獎率不因先前連續未中而改變。"
        },
        {
          "choice": "正確，未中次數會累積機會",
          "truth": false,
          "reason": "獨立性否定累積。"
        },
        {
          "choice": "正確，下一張必定中獎",
          "truth": false,
          "reason": "沒有此保證。"
        },
        {
          "choice": "無法判斷，因不知道前20人姓名",
          "truth": false,
          "reason": "姓名與固定獨立機率無關。"
        }
      ],
      "misconceptionTarget": "把長期比例誤用成短期補償。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "若票池不放回或獎項數會變，才需另算；題目明定固定獨立。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：審核機率宣傳",
      "literacyContextNecessity": "廣告常利用連敗心理，必須核對抽獎機制。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "審核機率宣傳",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "5803eacdf04716bef5dd9f76e17e721e9eff7ebaaeff8b50226c1fe02a5fe9a4"
    },
    {
      "questionId": "u22-s017-v011",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某保險方案一年事故機率2%，事故損失50,000元，不計其他因素。年度損失期望值為何？",
      "text": "某保險方案一年事故機率2%，事故損失50,000元，不計其他因素。年度損失期望值為何？",
      "givenConditions": [],
      "target": "量化低機率高損失風險",
      "choices": [
        "50,000元",
        "1,000元",
        "2,500元",
        "0元"
      ],
      "answerIndex": 1,
      "independentSolution": "50,000×0.02=1,000元。這是長期平均風險成本，不是每年實際支付。",
      "explanation": "50,000×0.02=1,000元。這是長期平均風險成本，不是每年實際支付。",
      "steps": [
        "百分比轉0.02。",
        "乘損失金額。",
        "解讀期望。"
      ],
      "optionAnalysis": [
        {
          "choice": "50,000元",
          "truth": false,
          "reason": "把事故損失當每年必然。"
        },
        {
          "choice": "1,000元",
          "truth": true,
          "reason": "正確。獨立重算：50,000×0.02=1,000元。這是長期平均風險成本，不是每年實際支付。"
        },
        {
          "choice": "2,500元",
          "truth": false,
          "reason": "百分比換算錯。"
        },
        {
          "choice": "0元",
          "truth": false,
          "reason": "低機率不等於無風險。"
        }
      ],
      "misconceptionTarget": "把期望損失當單次事故賠款或零。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "estimatedTimeSec": 180,
      "unitCheck": "金額單位為元。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "不含保費、免賠額與風險偏好。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：量化低機率高損失風險",
      "literacyContextNecessity": "保險比較需要把低機率的大額損失轉成共同尺度。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "量化低機率高損失風險",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "8a7aa84e3901955db3961fa66508f831af551d904462e2555550e08c1487eead"
    },
    {
      "questionId": "u22-s017-v012",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一個模擬程式跑100次得到事件A 27次。下列哪句最合理？",
      "text": "一個模擬程式跑100次得到事件A 27次。下列哪句最合理？",
      "givenConditions": [],
      "target": "解讀模擬證據",
      "choices": [
        "理論機率一定是27%",
        "再跑100次一定也27次",
        "事件A不可能有25%的理論機率",
        "27%是這次模擬的相對次數，可用來估計但不必等於理論機率"
      ],
      "answerIndex": 3,
      "independentSolution": "27/100=27%是觀察比例；重複次數增加通常更穩定，但單次模擬不等同證明。",
      "explanation": "27/100=27%是觀察比例；重複次數增加通常更穩定，但單次模擬不等同證明。",
      "steps": [
        "計算相對次數。",
        "區分估計與理論值。"
      ],
      "optionAnalysis": [
        {
          "choice": "理論機率一定是27%",
          "truth": false,
          "reason": "有限模擬有抽樣波動。"
        },
        {
          "choice": "再跑100次一定也27次",
          "truth": false,
          "reason": "結果不固定。"
        },
        {
          "choice": "事件A不可能有25%的理論機率",
          "truth": false,
          "reason": "27次與25%可因波動並存。"
        },
        {
          "choice": "27%是這次模擬的相對次數，可用來估計但不必等於理論機率",
          "truth": true,
          "reason": "正確。獨立重算：27/100=27%是觀察比例；重複次數增加通常更穩定，但單次模擬不等同證明。"
        }
      ],
      "misconceptionTarget": "把模擬結果當精確真值。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "estimatedTimeSec": 180,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "程式需正確模擬目標機制，題目未保證。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：解讀模擬證據",
      "literacyContextNecessity": "模擬是估計工具，報告應同時揭露試驗次數。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "解讀模擬證據",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "a33a7051223ae160bfc6a45f50efae6e4226089fcdbbadd9e6c2814e29fc8799"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u22-s017-cr001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "某遊戲每局花20元，1/10機率獲得100元獎金，其餘無獎。計算每局獎金的期望值與扣除費用後的平均淨結果，並說明「期望淨值-10元」不代表每局一定輸10元。",
      "requiredWork": [
        "以機率加權獎金。",
        "扣除固定費用。",
        "解釋長期平均與單次結果不同。"
      ],
      "standardSolution": [
        "期望獎金=(1/10)×100+(9/10)×0=10元。",
        "平均淨結果=10-20=-10元。",
        "-10元是大量重複遊戲的長期平均趨勢；單局可能淨得80元或淨損20元，不會固定恰好-10元。"
      ],
      "reasoningSteps": [
        "期望獎金=(1/10)×100+(9/10)×0=10元。",
        "平均淨結果=10-20=-10元。",
        "-10元是大量重複遊戲的長期平均趨勢；單局可能淨得80元或淨損20元，不會固定恰好-10元。"
      ],
      "alternativeMethods": [
        "可用10局平均模型：預期約1局中獎，共得100元、付費200元，平均每局-10元。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩個期望值與單次/長期解釋完整。"
        },
        {
          "score": 2,
          "criteria": "數值正確但解釋只寫「不一定」而未舉單局結果。"
        },
        {
          "score": 1,
          "criteria": "能算出期望獎金10或淨值-10。"
        },
        {
          "score": 0,
          "criteria": "把中獎時淨得100而未扣費，或宣稱每局必輸10。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若使用10局頻率模型且說明只是長期平均，可滿分。",
      "unitNotationRules": "金額單位為元。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "機率直接乘費用20。",
        "忽略未中獎機率。",
        "把期望當保證。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "期望獎金=(1/10)×100+(9/10)×0=10元。；平均淨結果=10-20=-10元。；-10元是大量重複遊戲的長期平均趨勢；單局可能淨得80元或淨損20元，不會固定恰好-10元。",
        "alternativeMethodCheck": "可用10局平均模型：預期約1局中獎，共得100元、付費200元，平均每局-10元。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "52baacf733a1c47bc3fde1f1594ac7dcceee33d25bd84727c2e6bff03a73df71"
    },
    {
      "questionId": "u22-s017-cr002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-literacy",
      "skillId": "probability-literacy",
      "lockedSkillOrder": 17,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "一項疾病在某篩檢族群盛行率為2%。檢驗對患者陽性率90%，對非患者誤報陽性率5%。用10000人作自然頻率估算陽性者中真正患者比例，並說明為何不能只回答90%。",
      "requiredWork": [
        "估算患者與非患者人數。",
        "分別算真陽性與假陽性。",
        "以真陽性除以全部陽性。"
      ],
      "standardSolution": [
        "10000人中患者約200人，真陽性約200×0.9=180人。",
        "非患者9800人，假陽性約9800×0.05=490人。",
        "陽性共約670人，其中真患者比例=180/670≈26.9%。90%是患者被驗出率，不是陽性後患病率。"
      ],
      "reasoningSteps": [
        "10000人中患者約200人，真陽性約200×0.9=180人。",
        "非患者9800人，假陽性約9800×0.05=490人。",
        "陽性共約670人，其中真患者比例=180/670≈26.9%。90%是患者被驗出率，不是陽性後患病率。"
      ],
      "alternativeMethods": [
        "可畫二層樹狀圖，先分患者/非患者，再分陽性/陰性。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "180、490、670與約26.9%，以及90%角色辨析全部正確。"
        },
        {
          "score": 2,
          "criteria": "自然頻率只有一處乘法錯，但分母結構與概念正確。"
        },
        {
          "score": 1,
          "criteria": "能分出真陽性與假陽性並建立180/(180+490)。"
        },
        {
          "score": 0,
          "criteria": "直接回答90%或忽略非患者的假陽性。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若百分率四捨五入為27%可接受；前步算術錯後依自己的真/假陽性正確組成比例，可給追蹤分。",
      "unitNotationRules": "人數為估算人次；最終比例可寫26.9%或約27%。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "把5%作用在200患者。",
        "分母只用患者200。",
        "把盛行率與敏感度相加。"
      ],
      "visualMode": "figure",
      "figureId": "fig-u22-tree-conditional",
      "drawingSpecReference": "fig-u22-tree-conditional",
      "independentReview": {
        "recomputedResult": "10000人中患者約200人，真陽性約200×0.9=180人。；非患者9800人，假陽性約9800×0.05=490人。；陽性共約670人，其中真患者比例=180/670≈26.9%。90%是患者被驗出率，不是陽性後患病率。",
        "alternativeMethodCheck": "可畫二層樹狀圖，先分患者/非患者，再分陽性/陰性。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "1e4b93ecf582b4e19d01bf252e71145e8dbe5943794385b99f3182686850f388"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u22-s017-v001",
      "unitId": "u22",
      "skillId": "probability-literacy",
      "contentSha256": "c2c608fbc77d9c47c049d4119149da6e3e4d3b1eea0dbeb4d7d7041653845001",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "長期平均可用12×1/4+0×3/4=3分。",
      "derivedAnswer": "3分",
      "storedAnswer": "3分",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「3分」；其餘選項逐項排除：「4分」：用12÷3。；「9分」：把未得分機率乘12。；「12分」：把最高得分當平均。",
        "undefinedSymbol": "題幹術語均已在「機率素養題」講義定義；實際目標為「計算簡單期望值」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "這是長期理論平均，不保證單局得到3分。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把可能最高獎勵當每局平均。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算簡單期望值",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個公平遊戲中，玩家有1/4機率得12分，其餘得0分。長期每局平均得分的理論值為何？」；獨立解法「長期平均可用12×1/4+0×3/4=3分。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s017-v002",
      "unitId": "u22",
      "skillId": "probability-literacy",
      "contentSha256": "00e5862632d59bf7d28bf1d12524ca8ad8972bacc804f35b49b5043d73dbf307",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "機率描述長期傾向，不規定每一小段試驗的確切排列。",
      "derivedAnswer": "大量重複試驗時，發生比例通常會接近20%",
      "storedAnswer": "大量重複試驗時，發生比例通常會接近20%",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「大量重複試驗時，發生比例通常會接近20%」；其餘選項逐項排除：「每5次一定發生1次」：短期不保證固定週期。；「下一次有80%會發生」：把餘事機率顛倒。；「連續4次沒發生，第5次必發生」：犯賭徒謬誤。",
        "undefinedSymbol": "題幹術語均已在「機率素養題」講義定義；實際目標為「解讀機率意義」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "假設試驗條件穩定。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把機率當週期表。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：解讀機率意義",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某事件機率為20%。下列哪句最正確？」；獨立解法「機率描述長期傾向，不規定每一小段試驗的確切排列。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s017-v003",
      "unitId": "u22",
      "skillId": "probability-literacy",
      "contentSha256": "476859208e41be5d9509151ac46e383efe26f3fedadae53feb64c3f779189e76",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "獎值、成本相同時，中獎率較高的乙較有利。",
      "derivedAnswer": "乙",
      "storedAnswer": "乙",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「乙」；其餘選項逐項排除：「甲」：1/10小於1/5。；「一樣」：機率不同。；「不能比較任何事」：在題目已固定獎值與成本後可比較。",
        "undefinedSymbol": "題幹術語均已在「機率素養題」講義定義；實際目標為「在控制條件下比較遊戲」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "若獎值或成本不同則需額外資訊。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「忽略題目已控制其他條件。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：在控制條件下比較遊戲",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「甲遊戲中獎率1/10，乙遊戲中獎率1/5。若獎品價值相同且成本相同，哪個較有利？」；獨立解法「獎值、成本相同時，中獎率較高的乙較有利。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s017-v004",
      "unitId": "u22",
      "skillId": "probability-literacy",
      "contentSha256": "01c64f5694e6d7052351b65f8ff700199182589b430e6f920c613a30e7628504",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "A期望2分；B期望2分。雖波動不同，長期平均相同。",
      "derivedAnswer": "相同，都是2分",
      "storedAnswer": "相同，都是2分",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「相同，都是2分」；其餘選項逐項排除：「A較高」：A期望4×1/2=2。；「B較高」：B期望8×1/4=2。；「都為4分」：把最高獎勵平均。",
        "undefinedSymbol": "題幹術語均已在「機率素養題」講義定義；實際目標為「比較兩遊戲期望」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "未比較風險或變異，只比較平均。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只看中獎率或最高獎勵。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：比較兩遊戲期望",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「遊戲A：1/2機率得4分，1/2得0分。遊戲B：1/4機率得8分，其餘0分。兩者長期平均得分如何？」；獨立解法「A期望2分；B期望2分。雖波動不同，長期平均相同。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s017-v005",
      "unitId": "u22",
      "skillId": "probability-literacy",
      "contentSha256": "ba7c7d826ea5f50a1c78b0a723e20f596d74635629628b9a9f8f976ec2e48214",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "100×1%=1是期望次數，實際重複結果可為0、1、2或更多。",
      "derivedAnswer": "預期約1次誤報，但實際可能不是恰好1次",
      "storedAnswer": "預期約1次誤報，但實際可能不是恰好1次",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「預期約1次誤報，但實際可能不是恰好1次」；其餘選項逐項排除：「一定恰好1次」：期望不是保證。；「不可能有2次誤報」：隨機波動可能造成。；「每次檢測到第100次才誤報」：機率不指定順序。",
        "undefinedSymbol": "題幹術語均已在「機率素養題」講義定義；實際目標為「解讀期望次數」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "假設每次條件相近；未要求完整二項分布。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把期望值當確定次數。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：解讀期望次數",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某檢測誤報率1%。對100次檢測，下列何者最合理？」；獨立解法「100×1%=1是期望次數，實際重複結果可為0、1、2或更多。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s017-v006",
      "unitId": "u22",
      "skillId": "probability-literacy",
      "contentSha256": "dff1feda978a30fc1ac90a77a70d5a35a527b8c3ef420ed62e5a8a0e0f37841a",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "獨立公平硬幣每次正面機率皆1/2，過去連續結果不影響下一次。",
      "derivedAnswer": "1/2",
      "storedAnswer": "1/2",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1/2」；其餘選項逐項排除：「1/6」：把連續次數放入分母。；「小於1/2，因反面該出現了」：賭徒謬誤。；「大於1/2，因正在連勝」：過去結果不改變獨立試驗。",
        "undefinedSymbol": "題幹術語均已在「機率素養題」講義定義；實際目標為「辨識賭徒謬誤」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "題目明定硬幣公平且獨立。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「認為隨機結果會自動補償或延續。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：辨識賭徒謬誤",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一枚硬幣連續出現5次正面。若硬幣公平且每次獨立，第6次正面的機率為何？」；獨立解法「獨立公平硬幣每次正面機率皆1/2，過去連續結果不影響下一次。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s017-v007",
      "unitId": "u22",
      "skillId": "probability-literacy",
      "contentSha256": "36d5cefc0a62a47ff4e7d2be7d0382748c4b4c48facce6fe05d29c993781e9a8",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "獎金期望=4元，扣入場費6元，淨收益期望=4-6=-2元。",
      "derivedAnswer": "-2元",
      "storedAnswer": "-2元",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「-2元」；其餘選項逐項排除：「4元」：只算獎金期望20×1/5，未扣費。；「14元」：用20-6而忽略中獎率。；「-6元」：忽略可能獎金。",
        "undefinedSymbol": "題幹術語均已在「機率素養題」講義定義；實際目標為「計算含固定成本的期望」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "負值表示長期平均虧損，不代表每局都虧2元。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只看獎金，不計成本。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：計算含固定成本的期望",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某遊戲入場費6元，1/5機率得20元獎金，其餘得0元。以淨收益計，長期每局平均為何？」；獨立解法「獎金期望=4元，扣入場費6元，淨收益期望=4-6=-2元。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s017-v008",
      "unitId": "u22",
      "skillId": "probability-literacy",
      "contentSha256": "4373baf4d46361e9331f144e756302705a469f73c780a1cdedaf5ad8c911f3ed",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "期望=10×1/6+(-1)×5/6=(10-5)/6=5/6點。",
      "derivedAnswer": "5/6點",
      "storedAnswer": "5/6點",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「5/6點」；其餘選項逐項排除：「-1/6點」：負分權重計算錯。；「3/2點」：把得10點機率高估。；「0點」：誤認公平骰遊戲必公平。",
        "undefinedSymbol": "題幹術語均已在「機率素養題」講義定義；實際目標為「以期望判斷遊戲公平性」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "公平遊戲通常指期望淨值0，本題為正5/6。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把「公平骰」誤認為「遊戲公平」。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：以期望判斷遊戲公平性",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「遊戲規則：擲公平骰，出6得10點，其他點數扣1點。每局期望分數是多少？」；獨立解法「期望=10×1/6+(-1)×5/6=(10-5)/6=5/6點。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s017-v009",
      "unitId": "u22",
      "skillId": "probability-literacy",
      "contentSha256": "d6e71c8fa23ad2e3185ae6afbd000838b5255c0d81c8ae387d11b7fb491afcb0",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "甲期望=0.9×10=9元；乙=8元，所以只看期望甲較大。",
      "derivedAnswer": "甲，期望9元",
      "storedAnswer": "甲，期望9元",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「甲，期望9元」；其餘選項逐項排除：「乙，因8元是保證」：保證性不等於期望較大。；「兩者相同」：9不等於8。；「無法計算」：機率與金額完整。",
        "undefinedSymbol": "題幹術語均已在「機率素養題」講義定義；實際目標為「比較確定與隨機方案期望」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "若重視保證或風險，選擇可能不同。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把風險偏好混入題目未問的比較。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：比較確定與隨機方案期望",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩個方案：甲有90%機率省10元、10%省0元；乙一定省8元。若只比較期望省下金額，何者較大？」；獨立解法「甲期望=0.9×10=9元；乙=8元，所以只看期望甲較大。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s017-v010",
      "unitId": "u22",
      "skillId": "probability-literacy",
      "contentSha256": "5803eacdf04716bef5dd9f76e17e721e9eff7ebaaeff8b50226c1fe02a5fe9a4",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "固定獨立抽獎中，每張票的中獎率不因先前連續未中而改變。",
      "derivedAnswer": "宣傳錯誤，前面結果不改變下一張機率",
      "storedAnswer": "宣傳錯誤，前面結果不改變下一張機率",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「宣傳錯誤，前面結果不改變下一張機率」；其餘選項逐項排除：「正確，未中次數會累積機會」：獨立性否定累積。；「正確，下一張必定中獎」：沒有此保證。；「無法判斷，因不知道前20人姓名」：姓名與固定獨立機率無關。",
        "undefinedSymbol": "題幹術語均已在「機率素養題」講義定義；實際目標為「審核機率宣傳」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "若票池不放回或獎項數會變，才需另算；題目明定固定獨立。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把長期比例誤用成短期補償。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：審核機率宣傳",
      "literacyContextNecessity": "廣告常利用連敗心理，必須核對抽獎機制。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「彩券宣傳「本期已有連續20人未中，下一人中獎機會更高」。若每張票獨立且中獎率固定，評語何者正確？」；獨立解法「固定獨立抽獎中，每張票的中獎率不因先前連續未中而改變。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s017-v011",
      "unitId": "u22",
      "skillId": "probability-literacy",
      "contentSha256": "8a7aa84e3901955db3961fa66508f831af551d904462e2555550e08c1487eead",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "50,000×0.02=1,000元。這是長期平均風險成本，不是每年實際支付。",
      "derivedAnswer": "1,000元",
      "storedAnswer": "1,000元",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「1,000元」；其餘選項逐項排除：「50,000元」：把事故損失當每年必然。；「2,500元」：百分比換算錯。；「0元」：低機率不等於無風險。",
        "undefinedSymbol": "題幹術語均已在「機率素養題」講義定義；實際目標為「量化低機率高損失風險」。",
        "unitConflict": "金額單位為元。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "不含保費、免賠額與風險偏好。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把期望損失當單次事故賠款或零。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：量化低機率高損失風險",
      "literacyContextNecessity": "保險比較需要把低機率的大額損失轉成共同尺度。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某保險方案一年事故機率2%，事故損失50,000元，不計其他因素。年度損失期望值為何？」；獨立解法「50,000×0.02=1,000元。這是長期平均風險成本，不是每年實際支付。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s017-v012",
      "unitId": "u22",
      "skillId": "probability-literacy",
      "contentSha256": "a33a7051223ae160bfc6a45f50efae6e4226089fcdbbadd9e6c2814e29fc8799",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "27/100=27%是觀察比例；重複次數增加通常更穩定，但單次模擬不等同證明。",
      "derivedAnswer": "27%是這次模擬的相對次數，可用來估計但不必等於理論機率",
      "storedAnswer": "27%是這次模擬的相對次數，可用來估計但不必等於理論機率",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「27%是這次模擬的相對次數，可用來估計但不必等於理論機率」；其餘選項逐項排除：「理論機率一定是27%」：有限模擬有抽樣波動。；「再跑100次一定也27次」：結果不固定。；「事件A不可能有25%的理論機率」：27次與25%可因波動並存。",
        "undefinedSymbol": "題幹術語均已在「機率素養題」講義定義；實際目標為「解讀模擬證據」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "程式需正確模擬目標機制，題目未保證。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把模擬結果當精確真值。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：解讀模擬證據",
      "literacyContextNecessity": "模擬是估計工具，報告應同時揭露試驗次數。",
      "prerequisiteCheck": "僅使用本技能與已鎖定先備技能：probability-word。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個模擬程式跑100次得到事件A 27次。下列哪句最合理？」；獨立解法「27/100=27%是觀察比例；重複次數增加通常更穩定，但單次模擬不等同證明。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    }
  ],
  "drawingSpecs": []
};
