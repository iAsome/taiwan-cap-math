// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s010-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-applications",
    "skillId": "continued-ratio-preview",
    "lockedSkillTitle": "連比預備",
    "title": "連比預備：對齊共同項再合併",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "比例應用",
      "skillOrder": 10,
      "lockedPrerequisiteSkillIds": [
        "ratio-word-problem"
      ],
      "capBoundary": "只建立 A:B 與 B:C 的共同項對齊與簡單三量讀法；U18 才進行完整連比章節與更複雜分配。"
    },
    "prerequisiteBridge": "兩個比若共享同一個量，例如 A:B 與 B:C，可以把 B 的份數調成相同後，得到一致的三量關係。",
    "learningOutcomes": [
      "能辨認兩個比中的共同項。",
      "能以最小公倍數對齊共同項份數。",
      "能寫出簡單 A:B:C 並檢查回原兩比。",
      "能避免把比的項直接相接或相乘。"
    ],
    "glossary": [
      {
        "term": "連比",
        "definition": "用同一份量同時比較三個以上量，例如 A:B:C。"
      },
      {
        "term": "共同項",
        "definition": "出現在兩個比中的同一個量，例如 A:B 與 B:C 的 B。"
      },
      {
        "term": "對齊",
        "definition": "把共同項在兩個等值比中的份數調成相同。"
      },
      {
        "term": "一致性檢查",
        "definition": "從連比取出相鄰兩項，化簡後應回到原比。"
      }
    ],
    "notation": [
      {
        "symbol": "A:B=m:n",
        "meaning": "A 與 B 的份數關係。"
      },
      {
        "symbol": "B:C=p:q",
        "meaning": "B 與 C 的份數關係。"
      },
      {
        "symbol": "A:B:C",
        "meaning": "三量使用同一單位份數的比較。"
      }
    ],
    "conceptNarrative": [
      "不能直接由 A:B=2:3、B:C=4:5 寫 A:B:C=2:3:5，因為 B 在兩個比中分別是 3 份與 4 份。",
      "先找 3 與 4 的最小公倍數 12；第一比乘 4 得 8:12，第二比乘 3 得 12:15。",
      "因此可寫 A:B:C=8:12:15，且 A:B=2:3、B:C=4:5 都能還原。",
      "共同項必須真的是同一量；同名不同時點或不同單位的量不能直接對齊。",
      "本技能重點是建立一致份數，不進入 U18 的複雜多段連比技巧。"
    ],
    "formalDefinitions": [
      {
        "name": "共同項對齊",
        "statement": "將兩個等值比的共同量調整到相同份數，再合併成三量比。"
      },
      {
        "name": "連比檢查",
        "statement": "連比中任兩相關項取出化簡，應符合原給定比。"
      }
    ],
    "formulas": [
      {
        "formula": "若 A:B=m:n、B:C=p:q，令 L=lcm(n,p)",
        "conditions": [
          "B 為同一量",
          "n、p>0"
        ],
        "meaning": "共同項目標份數。"
      },
      {
        "formula": "A:B:C=m(L/n):L:q(L/p)",
        "conditions": [
          "份數為正整數"
        ],
        "meaning": "簡單對齊公式。"
      }
    ],
    "nonApplicableCases": [
      "把 2:3 與 4:5 直接接成 2:3:5。",
      "共同項位於不同位置時未先辨認，例如 A:B 與 C:B。",
      "共同項數值未對齊便合併。",
      "把兩個比的全部項相乘，得到不必要的大比。",
      "把本節預備內容擴張成跨單元的完整連比分配定理。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "圈出兩個比代表的共同量。",
        "check": "真的是同一對象、同一時點與同一單位嗎？"
      },
      {
        "step": 2,
        "instruction": "讀出共同項在兩比中的份數。",
        "check": "位置是前項還是後項？"
      },
      {
        "step": 3,
        "instruction": "找這兩個份數的最小公倍數。",
        "check": "可否用更小共同倍數？"
      },
      {
        "step": 4,
        "instruction": "把每個比整體放大到共同項一致。",
        "check": "前後項是否同乘？"
      },
      {
        "step": 5,
        "instruction": "合併並回代檢查兩個原比。",
        "check": "取出 A:B、B:C 是否化簡正確？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "A:B=2:3，B:C=4:5，求 A:B:C。",
        "solutionSteps": [
          "共同項 B 的份數 3、4，最小公倍數 12。",
          "2:3 放大 4 倍得 8:12；4:5 放大 3 倍得 12:15。"
        ],
        "answer": "8:12:15。"
      },
      {
        "exampleId": "L2",
        "prompt": "甲:乙=5:6，丙:乙=7:4，寫甲:乙:丙。",
        "solutionSteps": [
          "共同項乙為 6 與 4 份，對齊到 12。",
          "甲:乙=10:12；丙:乙=21:12，所以甲:乙:丙=10:12:21。"
        ],
        "answer": "10:12:21。"
      },
      {
        "exampleId": "L3",
        "prompt": "X:Y=3:8，Y:Z=2:7。",
        "solutionSteps": [
          "Y 的 8 與 2 對齊到 8。",
          "第二比乘 4 得 Y:Z=8:28。"
        ],
        "answer": "X:Y:Z=3:8:28。"
      },
      {
        "exampleId": "L4",
        "prompt": "檢查 12:18:25 是否符合 A:B=2:3、B:C=18:25。",
        "solutionSteps": [
          "12:18 化簡為 2:3。",
          "18:25 已最簡，兩個條件皆符合。"
        ],
        "answer": "符合。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "2:3 與 4:5 合成 2:3:5。",
        "why": "B 的份數 3 與 4 不一致。",
        "correction": "先對齊到 12。"
      },
      {
        "mistake": "只放大共同項，其他項不變。",
        "why": "破壞原比值。",
        "correction": "一個比的前後項同乘。"
      },
      {
        "mistake": "甲:乙與丙:乙 中把丙放到中間。",
        "why": "未按照要求順序排列。",
        "correction": "先寫目標順序甲:乙:丙。"
      },
      {
        "mistake": "共同項用兩數相乘而不化最小。",
        "why": "雖可能等值但不簡潔。",
        "correction": "優先用最小公倍數。"
      },
      {
        "mistake": "同名但不同單位仍直接對齊。",
        "why": "量不真正相同。",
        "correction": "先統一單位與語意。"
      },
      {
        "mistake": "合併後不回查原比。",
        "why": "順序錯誤不易發現。",
        "correction": "抽出兩組比化簡驗算。"
      }
    ],
    "selfCheck": [
      "共同項是哪一個量？",
      "它在兩個比中各幾份？",
      "我使用最小公倍數對齊嗎？",
      "每個比是否整體放大？",
      "合併後能還原兩個原比嗎？"
    ],
    "summary": [
      "連比預備的核心是對齊共同項。",
      "對齊時整個比同乘，不能只改共同項。",
      "合併後依指定順序排列。",
      "最後拆回原兩比驗算。"
    ],
    "connections": {
      "previous": "比例應用題提供實際量之間的兩兩比。",
      "next": [
        "比例複合應用會使用對齊後的份數進行多步推算。",
        "完整連比內容保留在 U18。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s010-v001",
        "u06-s010-v002",
        "u06-s010-v003",
        "u06-s010-v004",
        "u06-s010-v005",
        "u06-s010-v006",
        "u06-s010-v007",
        "u06-s010-v008",
        "u06-s010-v009",
        "u06-s010-v010",
        "u06-s010-v011",
        "u06-s010-v012"
      ],
      "constructedResponseIds": [
        "u06-s010-cr001",
        "u06-s010-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "三個合併例題均先用共同項最小公倍數重新對齊，再拆回兩個原比驗證；範圍刻意停在簡單三量一致份數，不引入 U18 的完整連比分配與複雜轉換。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "c3e11b222df171aed18a499665d0dad0e95884474b841da372ca8bd60d2569c8"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s010-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "已知 A:B=2:3、B:C=4:5，則 A:B:C 為何？",
      "text": "已知 A:B=2:3、B:C=4:5，則 A:B:C 為何？",
      "givenConditions": "B為同一量。",
      "target": "對齊共同項",
      "choices": [
        "2:3:5",
        "8:12:15",
        "8:3:15",
        "8:12:5"
      ],
      "answerIndex": 1,
      "independentSolution": "8:12=2:3，12:15=4:5。",
      "mainExplanation": "共同項B需在兩比中相同。",
      "explanation": "共同項B需在兩比中相同。",
      "steps": [
        "2:3→8:12",
        "4:5→12:15",
        "合8:12:15"
      ],
      "optionAnalysis": [
        {
          "choice": "2:3:5",
          "truth": false,
          "reason": "B份數未對齊。"
        },
        {
          "choice": "8:12:15",
          "truth": true,
          "reason": "B份數3、4對齊到12；第一比乘4、第二比乘3。"
        },
        {
          "choice": "8:3:15",
          "truth": false,
          "reason": "只改A與C。"
        },
        {
          "choice": "8:12:5",
          "truth": false,
          "reason": "第二比未整體放大。"
        }
      ],
      "misconceptionTarget": "直接把兩個比接起來。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "三量順序A:B:C明確。",
      "difficultyReason": "基礎共同項對齊。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3ebfdd216c81592284c438f9446cc506dc200f1f9b21d263cfa3e8b5b4f03bfe"
    },
    {
      "questionId": "u06-s010-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "甲:乙=3:5，乙:丙=10:7。甲:乙:丙為何？",
      "text": "甲:乙=3:5，乙:丙=10:7。甲:乙:丙為何？",
      "givenConditions": "共同項乙同一。",
      "target": "簡單連比合併",
      "choices": [
        "6:10:7",
        "3:5:7",
        "3:10:7",
        "6:5:7"
      ],
      "answerIndex": 0,
      "independentSolution": "6:10=3:5，10:7符合。",
      "mainExplanation": "第一比3:5變6:10，與第二比合併。",
      "explanation": "第一比3:5變6:10，與第二比合併。",
      "steps": [
        "3:5×2=6:10",
        "合6:10:7"
      ],
      "optionAnalysis": [
        {
          "choice": "6:10:7",
          "truth": true,
          "reason": "乙的5與10對齊到10，第一比乘2。"
        },
        {
          "choice": "3:5:7",
          "truth": false,
          "reason": "乙未對齊。"
        },
        {
          "choice": "3:10:7",
          "truth": false,
          "reason": "甲未隨乙放大。"
        },
        {
          "choice": "6:5:7",
          "truth": false,
          "reason": "乙仍不一致。"
        }
      ],
      "misconceptionTarget": "只改共同項。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 70,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "順序甲乙丙。",
      "difficultyReason": "基礎整倍對齊。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0fa4782275a008a8ae26fc0e10176abeb167b41401e6a2f667c6a977a91caaee"
    },
    {
      "questionId": "u06-s010-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "已知 X:Y=5:8，Y:Z=2:3。若 X=15，則 Z 等於多少？",
      "text": "已知 X:Y=5:8，Y:Z=2:3。若 X=15，則 Z 等於多少？",
      "givenConditions": "X、Y、Z 都是正數，兩個比中的 Y 代表同一量。",
      "target": "先合併共同比，再依已知量縮放",
      "choices": [
        "24",
        "30",
        "36",
        "40"
      ],
      "answerIndex": 2,
      "independentSolution": "先由 X:Y:Z=5:8:12；X 從5份變15，倍率為3，所以 Z=12×3=36。",
      "mainExplanation": "先把 Y:Z=2:3 同乘4成8:12，得到 X:Y:Z=5:8:12；再用 X=15 求每份是3。",
      "explanation": "先把 Y:Z=2:3 同乘4成8:12，得到 X:Y:Z=5:8:12；再用 X=15 求每份是3。",
      "steps": [
        "把 Y:Z=2:3 化成8:12",
        "合併為 X:Y:Z=5:8:12",
        "15÷5=3",
        "Z=12×3=36"
      ],
      "optionAnalysis": [
        {
          "choice": "24",
          "truth": false,
          "reason": "只把 Y 的8份誤當成 Z 的份數，算成8×3。"
        },
        {
          "choice": "30",
          "truth": false,
          "reason": "把第二比的分子2錯當成調整後的 Z 份數10。"
        },
        {
          "choice": "36",
          "truth": true,
          "reason": "合併比為5:8:12，X=15表示每份3，所以Z=36。"
        },
        {
          "choice": "40",
          "truth": false,
          "reason": "把 Y=8份直接乘5，未依 X=15 求正確倍率。"
        }
      ],
      "misconceptionTarget": "只完成共同比對齊，卻不再依已知實際量縮放。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 85,
      "unitCheck": "X、Y、Z 為同類量，答案使用題目未指定的同一量單位。",
      "roundingCheck": "全部為整數，不需近似。",
      "ambiguityBoundaryAudit": "X、Y、Z 均為正數且 Y 是同一量；只用 U06 的共同比對齊，不延伸到 U18 的完整連比理論。",
      "difficultyReason": "除對齊共同比外，還要用 X 的實際值把份數轉成數量，與單純選出連比的題目不同。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "819d4d404ea2a7b59c5500bedc7d5250fdef68cac5e5261f197ad7c084fd7af0"
    },
    {
      "questionId": "u06-s010-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "甲:乙=5:6，丙:乙=7:4。甲:乙:丙為何？",
      "text": "甲:乙=5:6，丙:乙=7:4。甲:乙:丙為何？",
      "givenConditions": "乙為共同量。",
      "target": "共同項位置不同的合併",
      "choices": [
        "5:6:7",
        "15:12:21",
        "10:12:7",
        "10:12:21"
      ],
      "answerIndex": 3,
      "independentSolution": "10:12=5:6，21:12=7:4。",
      "mainExplanation": "注意第二比是丙:乙，合併時要按甲:乙:丙排列。",
      "explanation": "注意第二比是丙:乙，合併時要按甲:乙:丙排列。",
      "steps": [
        "甲:乙=10:12",
        "丙:乙=21:12",
        "合10:12:21"
      ],
      "optionAnalysis": [
        {
          "choice": "5:6:7",
          "truth": false,
          "reason": "未對齊乙。"
        },
        {
          "choice": "15:12:21",
          "truth": false,
          "reason": "甲倍率錯。"
        },
        {
          "choice": "10:12:7",
          "truth": false,
          "reason": "丙未隨乙放大。"
        },
        {
          "choice": "10:12:21",
          "truth": true,
          "reason": "乙份數6與4對齊到12；甲乙乘2，丙乙乘3。"
        }
      ],
      "misconceptionTarget": "忽略共同項在第二比的後項。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 95,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "目標順序明示。",
      "difficultyReason": "標準位置判讀。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3430868da78a061125f556d9cd5fa5347ff28626f586338d9b95e3d4c5e9fab7"
    },
    {
      "questionId": "u06-s010-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "A:B:C=12:18:25，則 A:B 的最簡比為何？",
      "text": "A:B:C=12:18:25，則 A:B 的最簡比為何？",
      "givenConditions": "三項順序A:B:C。",
      "target": "由連比還原兩量比",
      "choices": [
        "2:3",
        "12:25",
        "18:25",
        "3:2"
      ],
      "answerIndex": 0,
      "independentSolution": "2:3放大6倍回12:18。",
      "mainExplanation": "連比可抽出對應兩項化簡。",
      "explanation": "連比可抽出對應兩項化簡。",
      "steps": [
        "12:18",
        "同除6",
        "2:3"
      ],
      "optionAnalysis": [
        {
          "choice": "2:3",
          "truth": true,
          "reason": "取前兩項12:18，同除6得2:3。"
        },
        {
          "choice": "12:25",
          "truth": false,
          "reason": "跨取A:C。"
        },
        {
          "choice": "18:25",
          "truth": false,
          "reason": "取B:C。"
        },
        {
          "choice": "3:2",
          "truth": false,
          "reason": "把所求比的前後項顛倒，形成原比例的倒比。"
        }
      ],
      "misconceptionTarget": "取錯項或順序。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 65,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "只問A:B。",
      "difficultyReason": "標準讀取。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "dac003e8d4c7cd6036020a81a68a2c25a9db719f89853110fd3ba54965e2879a"
    },
    {
      "questionId": "u06-s010-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 A:B:C=4:7:9，且 B=35，則 C 為何？",
      "text": "若 A:B:C=4:7:9，且 B=35，則 C 為何？",
      "givenConditions": "B對應7份。",
      "target": "由連比份數求量",
      "choices": [
        "20",
        "40",
        "63",
        "45"
      ],
      "answerIndex": 3,
      "independentSolution": "A=20、B=35、C=45。",
      "mainExplanation": "以共同份量求指定項。",
      "explanation": "以共同份量求指定項。",
      "steps": [
        "35/7=5",
        "9×5=45"
      ],
      "optionAnalysis": [
        {
          "choice": "20",
          "truth": false,
          "reason": "20是A。"
        },
        {
          "choice": "40",
          "truth": false,
          "reason": "份數乘錯。"
        },
        {
          "choice": "63",
          "truth": false,
          "reason": "把35乘9/5。"
        },
        {
          "choice": "45",
          "truth": true,
          "reason": "7份是35，每份5，C=9×5=45。"
        }
      ],
      "misconceptionTarget": "用總份數求每份。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "各量可為正數。",
      "difficultyReason": "標準份量。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e5d1d6b763ae232f99478b8633c9bdf5b931db0662d0fd87a0d6a6a3eeaffadf"
    },
    {
      "questionId": "u06-s010-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "已知 A:B=4:9、A:C=6:5。求 A:B:C。",
      "text": "已知 A:B=4:9、A:C=6:5。求 A:B:C。",
      "givenConditions": "A為同一量。",
      "target": "共同前項對齊",
      "choices": [
        "4:9:5",
        "12:27:10",
        "24:54:30",
        "12:9:10"
      ],
      "answerIndex": 1,
      "independentSolution": "12:27=4:9，12:10=6:5。",
      "mainExplanation": "共同項位於兩比前項，也要對齊。",
      "explanation": "共同項位於兩比前項，也要對齊。",
      "steps": [
        "lcm(4,6)=12",
        "A:B=12:27",
        "A:C=12:10"
      ],
      "optionAnalysis": [
        {
          "choice": "4:9:5",
          "truth": false,
          "reason": "A份數不一致。"
        },
        {
          "choice": "12:27:10",
          "truth": true,
          "reason": "共同項A的4與6對齊到12；第一比乘3得12:27，第二比乘2得12:10。"
        },
        {
          "choice": "24:54:30",
          "truth": false,
          "reason": "等值但未最簡，三項可同除2得12:27:15? 且C錯。"
        },
        {
          "choice": "12:9:10",
          "truth": false,
          "reason": "B未隨A放大。"
        }
      ],
      "misconceptionTarget": "只會處理共同項在中間。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 105,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "結果三項最大公因數1。",
      "difficultyReason": "進階位置變化。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3cebff350f5dc37d935b6aadc1648b099f8f44047ffbc452c5bd40e380180fb4"
    },
    {
      "questionId": "u06-s010-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "A:B=2:5，C:B=3:4。若 A+B+C=86，A為何？",
      "text": "A:B=2:5，C:B=3:4。若 A+B+C=86，A為何？",
      "givenConditions": "三量皆為正且構成總量。",
      "target": "連比與總量整合",
      "choices": [
        "12",
        "20",
        "16",
        "30"
      ],
      "answerIndex": 2,
      "independentSolution": "16+40+30=86，且16:40=2:5、30:40=3:4。",
      "mainExplanation": "先對齊共同項，再用總份數求單位份量。",
      "explanation": "先對齊共同項，再用總份數求單位份量。",
      "steps": [
        "A:B=8:20",
        "C:B=15:20",
        "A:B:C=8:20:15",
        "每份2",
        "A=16"
      ],
      "optionAnalysis": [
        {
          "choice": "12",
          "truth": false,
          "reason": "12對應每份1.5。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "20是B的一半但不是A。"
        },
        {
          "choice": "16",
          "truth": true,
          "reason": "B份數5與4對齊20；A:B:C=8:20:15，共43份。86÷43=2，A=16。"
        },
        {
          "choice": "30",
          "truth": false,
          "reason": "30是C。"
        }
      ],
      "misconceptionTarget": "未檢查總量是否對應總份數。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 135,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "86正好是43份的2倍。",
      "difficultyReason": "進階一致性與分配。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e860370070c589c6ac32adc1bb94644302f8a951a5b84d67b87909ece164401d"
    },
    {
      "questionId": "u06-s010-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "甲:乙=3:4，乙:丙=6:5。若甲比丙少 7，乙為何？",
      "text": "甲:乙=3:4，乙:丙=6:5。若甲比丙少 7，乙為何？",
      "givenConditions": "三量為正。",
      "target": "連比差量反推",
      "choices": [
        "42",
        "63",
        "70",
        "84"
      ],
      "answerIndex": 3,
      "independentSolution": "甲63、乙84、丙70，甲比丙少7。",
      "mainExplanation": "共同項乙對齊後，用甲丙的份數差求每份。",
      "explanation": "共同項乙對齊後，用甲丙的份數差求每份。",
      "steps": [
        "3:4×3=9:12",
        "6:5×2=12:10",
        "每份7",
        "乙=12×7=84"
      ],
      "optionAnalysis": [
        {
          "choice": "42",
          "truth": false,
          "reason": "把乙當6份。"
        },
        {
          "choice": "63",
          "truth": false,
          "reason": "63是甲。"
        },
        {
          "choice": "70",
          "truth": false,
          "reason": "70是丙。"
        },
        {
          "choice": "84",
          "truth": true,
          "reason": "對齊得甲:乙:丙=9:12:10；丙比甲多1份=7，所以乙12份=84。"
        }
      ],
      "misconceptionTarget": "未對齊共同項或把差量對應錯份數。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 135,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "甲與丙只差1份，資料唯一決定每份。",
      "difficultyReason": "高階多條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "da5a5338738f1b4794e249a1f899ccac1815c6ba3fd90e656a44079200061160"
    },
    {
      "questionId": "u06-s010-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "食譜中麵粉:糖=5:2，糖:奶油=4:3。若奶油用 180 公克，麵粉需多少？",
      "text": "食譜中麵粉:糖=5:2，糖:奶油=4:3。若奶油用 180 公克，麵粉需多少？",
      "givenConditions": "配方比例固定。",
      "target": "配方共同項應用",
      "choices": [
        "300公克",
        "450公克",
        "600公克",
        "750公克"
      ],
      "answerIndex": 2,
      "independentSolution": "糖240，5:2=600:240；4:3=240:180。",
      "mainExplanation": "兩段配方共同項糖需對齊。",
      "explanation": "兩段配方共同項糖需對齊。",
      "steps": [
        "5:2×2=10:4",
        "奶油3份=180",
        "麵粉10份=600"
      ],
      "optionAnalysis": [
        {
          "choice": "300公克",
          "truth": false,
          "reason": "只用5/3。"
        },
        {
          "choice": "450公克",
          "truth": false,
          "reason": "把每份45。"
        },
        {
          "choice": "600公克",
          "truth": true,
          "reason": "糖份數2與4對齊4；麵粉:糖:奶油=10:4:3。奶油3份180，每份60，麵粉600。"
        },
        {
          "choice": "750公克",
          "truth": false,
          "reason": "把奶油當2份。"
        }
      ],
      "misconceptionTarget": "直接把5:2:3相接。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 110,
      "unitCheck": "公克。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "三種材料角色明確。",
      "difficultyReason": "生活連比預備。",
      "literacyContextNecessity": "共享糖量連接兩個配方比，情境不可移除。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7bb8bed56bca61934f5ea7c99c33380cf8b533d6eabb7d4f36808e24ce725599"
    },
    {
      "questionId": "u06-s010-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "三班回收量關係為甲:乙=7:9、乙:丙=3:5。若甲 42 公斤，丙多少公斤？",
      "text": "三班回收量關係為甲:乙=7:9、乙:丙=3:5。若甲 42 公斤，丙多少公斤？",
      "givenConditions": "同一統計期間與同一重量單位。",
      "target": "回收資料的兩段比",
      "choices": [
        "90公斤",
        "54公斤",
        "70公斤",
        "105公斤"
      ],
      "answerIndex": 0,
      "independentSolution": "乙54；54:90=3:5。",
      "mainExplanation": "先合併，再由甲求單位份量。",
      "explanation": "先合併，再由甲求單位份量。",
      "steps": [
        "乙:丙=9:15",
        "合7:9:15",
        "每份6",
        "丙90"
      ],
      "optionAnalysis": [
        {
          "choice": "90公斤",
          "truth": true,
          "reason": "乙9與3對齊9，甲:乙:丙=7:9:15；甲7份42，每份6，丙90。"
        },
        {
          "choice": "54公斤",
          "truth": false,
          "reason": "54是乙。"
        },
        {
          "choice": "70公斤",
          "truth": false,
          "reason": "丙份數誤作約11.67。"
        },
        {
          "choice": "105公斤",
          "truth": false,
          "reason": "把丙當17.5份。"
        }
      ],
      "misconceptionTarget": "把乙公斤數當丙。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 105,
      "unitCheck": "公斤。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "三班資料可直接比較。",
      "difficultyReason": "情境合併。",
      "literacyContextNecessity": "同期間與同單位使兩個比可透過乙合併。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f04707289e831398857bb437f5c29538a0c1d76fa09fe2a58ff3ae9286619a08"
    },
    {
      "questionId": "u06-s010-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某調查給出甲區:乙區=2:3、乙區:丙區=4:7。若資料分別來自不同年份，能否直接合成甲:乙:丙？",
      "text": "某調查給出甲區:乙區=2:3、乙區:丙區=4:7。若資料分別來自不同年份，能否直接合成甲:乙:丙？",
      "givenConditions": "兩比來自不同年份。",
      "target": "判斷共同項語意有效性",
      "choices": [
        "可以，得到8:12:21",
        "不能，因共同項乙不是同一時點的量",
        "可以，得到2:3:7",
        "不能，因比不能含三項"
      ],
      "answerIndex": 1,
      "independentSolution": "缺少跨年變化資訊，無法建立唯一連比。",
      "mainExplanation": "數學上對齊份數前要審查資料一致性。",
      "explanation": "數學上對齊份數前要審查資料一致性。",
      "steps": [
        "檢查共同項語意",
        "年份不同",
        "拒絕合併"
      ],
      "optionAnalysis": [
        {
          "choice": "可以，得到8:12:21",
          "truth": false,
          "reason": "若同年份才可合成8:12:21。"
        },
        {
          "choice": "不能，因共同項乙不是同一時點的量",
          "truth": true,
          "reason": "共同項必須是同一量、同一時點；不同年份的乙區數值不可直接對齊。"
        },
        {
          "choice": "可以，得到2:3:7",
          "truth": false,
          "reason": "直接相接錯。"
        },
        {
          "choice": "不能，因比不能含三項",
          "truth": false,
          "reason": "連比本身可以含三項。"
        }
      ],
      "misconceptionTarget": "只看名稱相同就當共同項相同。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 105,
      "unitCheck": "區域數量單位未變但時點不同。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "資料不足而非計算困難。",
      "difficultyReason": "素養邊界判讀。",
      "literacyContextNecessity": "年份差異直接破壞共同項一致性，是情境的核心。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e8893501295f43825ae7705765aafdb482d0d40ec4d20f62d05d7be00605e1b4"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s010-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "已知甲:乙=4:7、乙:丙=6:5。求甲:乙:丙，並拆回兩個原比驗算。",
      "target": "共同項對齊與驗算",
      "requiredWork": [
        "找共同項乙的最小公倍數。",
        "整體放大兩個比。",
        "拆回驗算。"
      ],
      "fullCreditSolution": [
        "乙份數7與6的最小公倍數為42。",
        "甲:乙=24:42；乙:丙=42:35。",
        "所以甲:乙:丙=24:42:35。",
        "24:42=4:7，42:35=6:5。"
      ],
      "alternativeSolutions": [
        "可令乙=42k，直接得到甲=24k、丙=35k。"
      ],
      "reasoningSteps": [
        "乙份數7與6的最小公倍數為42。",
        "甲:乙=24:42；乙:丙=42:35。",
        "所以甲:乙:丙=24:42:35。",
        "24:42=4:7，42:35=6:5。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "得到24:42:35，清楚對齊42並完成兩個原比驗算。"
        },
        {
          "score": 2,
          "criteria": "連比數值正確，但未完整驗算兩個原始比例或漏寫對齊理由。"
        },
        {
          "score": 1,
          "criteria": "找到42或寫出其中一個放大後比，合併有錯。"
        },
        {
          "score": 0,
          "criteria": "直接接成4:7:5或只改乙。"
        }
      ],
      "partialCreditRules": [
        "等值倍數如48:84:70若仍可同除2成24:42:35，最多2分直到化最簡。"
      ],
      "followThroughPolicy": "若共同項選84而整體放大正確，最後再約可滿分；若未約但等值，給2分。",
      "unitNotationRules": "無單位，冒號順序甲:乙:丙。",
      "answerOnlyPolicy": "只寫24:42:35最多2分。",
      "commonErrors": [
        "共同項相乘但只改一項。",
        "丙與甲位置交換。",
        "未驗算。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "24:42:35。",
        "ambiguity": "兩比共享同一乙，份數均正。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "b9d37bef4780e522aa295f4b425dcab42d178c635820ed0c67adf9327a50217b"
    },
    {
      "questionId": "u06-s010-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "continued-ratio-preview",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "甲:乙=3:5，丙:乙=7:4，且甲+乙+丙=215。求三量。",
      "target": "連比總量的非整數份量",
      "requiredWork": [
        "按甲:乙:丙順序對齊共同項。",
        "求總份數與每份。",
        "求三量並驗算兩原比。"
      ],
      "fullCreditSolution": [
        "乙份數5與4對齊20。",
        "甲:乙=12:20；丙:乙=35:20，所以甲:乙:丙=12:20:35。",
        "總67份，215÷67不是整數，為215/67每份。",
        "甲=2580/67、乙=4300/67、丙=7525/67。"
      ],
      "alternativeSolutions": [
        "若題意期待整數量，應指出215與67不整除；但一般數量可用分數表示。"
      ],
      "reasoningSteps": [
        "乙份數5與4對齊20。",
        "甲:乙=12:20；丙:乙=35:20，所以甲:乙:丙=12:20:35。",
        "總67份，215÷67不是整數，為215/67每份。",
        "甲=2580/67、乙=4300/67、丙=7525/67。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確對齊12:20:35，指出總67份並給出三個精確分數量。"
        },
        {
          "score": 2,
          "criteria": "連比與每份215/67正確，但漏寫一個量或驗算。"
        },
        {
          "score": 1,
          "criteria": "正確得到12:20:35，但誤認每份為整數或除法錯。"
        },
        {
          "score": 0,
          "criteria": "直接接比或強行把215分成12、20、35。"
        }
      ],
      "partialCreditRules": [
        "指出『若要求整數，資料不合』是加強說明，不取代求一般量。",
        "接受帶分數或小數近似，但需保留足夠精度。"
      ],
      "followThroughPolicy": "若對齊正確但215÷67算錯，後續依錯誤每份一致可給1分；若發現不整除並停在各量為比例倍數，最多2分。",
      "unitNotationRules": "無特定單位；精確分數優先。",
      "answerOnlyPolicy": "只寫12:20:35不是回答實際三量，最多1分。",
      "commonErrors": [
        "把總份數寫55。",
        "要求整數就判無解。",
        "丙:乙順序誤排。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "甲2580/67、乙4300/67、丙7525/67。",
        "ambiguity": "一般量允許分數；題目未稱人數或整件。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "a33b4deebf3d30bf9b5d795297de4aedd03d3e3a8f2e3fcb947bf3b72f80a958"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s010-v001-semantic-review-r1",
      "questionId": "u06-s010-v001",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "3ebfdd216c81592284c438f9446cc506dc200f1f9b21d263cfa3e8b5b4f03bfe",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "8:12=2:3，12:15=4:5。",
      "derivedAnswer": "8:12:15",
      "storedAnswer": "8:12:15",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "B份數未對齊。",
        "B份數3、4對齊到12；第一比乘4、第二比乘3。",
        "只改A與C。",
        "第二比未整體放大。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「對齊共同項」，已明示必要條件：B為同一量。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：三量順序A:B:C明確。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎共同項對齊。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：8:12=2:3，12:15=4:5。 正確選項為「8:12:15」。逐項檢查後，唯一為真的理由是「B份數3、4對齊到12；第一比乘4、第二比乘3。」；其餘三項分別因「B份數未對齊。」、「只改A與C。」、「第二比未整體放大。」而排除。邊界與語意再檢查：三量順序A:B:C明確。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v002-semantic-review-r1",
      "questionId": "u06-s010-v002",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "0fa4782275a008a8ae26fc0e10176abeb167b41401e6a2f667c6a977a91caaee",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "6:10=3:5，10:7符合。",
      "derivedAnswer": "6:10:7",
      "storedAnswer": "6:10:7",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "乙的5與10對齊到10，第一比乘2。",
        "乙未對齊。",
        "甲未隨乙放大。",
        "乙仍不一致。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「簡單連比合併」，已明示必要條件：共同項乙同一。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：順序甲乙丙。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎整倍對齊。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：6:10=3:5，10:7符合。 正確選項為「6:10:7」。逐項檢查後，唯一為真的理由是「乙的5與10對齊到10，第一比乘2。」；其餘三項分別因「乙未對齊。」、「甲未隨乙放大。」、「乙仍不一致。」而排除。邊界與語意再檢查：順序甲乙丙。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v003-semantic-review-r1",
      "questionId": "u06-s010-v003",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "819d4d404ea2a7b59c5500bedc7d5250fdef68cac5e5261f197ad7c084fd7af0",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "先由 X:Y:Z=5:8:12；X 從5份變15，倍率為3，所以 Z=12×3=36。",
      "derivedAnswer": "36",
      "storedAnswer": "36",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "只把 Y 的8份誤當成 Z 的份數，算成8×3。",
        "把第二比的分子2錯當成調整後的 Z 份數10。",
        "合併比為5:8:12，X=15表示每份3，所以Z=36。",
        "把 Y=8份直接乘5，未依 X=15 求正確倍率。"
      ],
      "ambiguityChecks": {
        "wording": "題幹明示 X、Y、Z 為正數且兩式中的 Y 是同一量，所求 Z 不需猜測其他關係。",
        "units": "三量屬同類量，比例計算只改變數值倍率，不會混用不同物理單位。",
        "boundary": "只使用共同比對齊與比例縮放，未教授 U18 才完整處理的連比延伸技巧。",
        "rounding": "所有份數和倍率皆為整數，答案 36 不涉及取整或近似。"
      },
      "difficultyReason": "除對齊共同比外，還要用 X 的實際值把份數轉成數量，與單純選出連比的題目不同。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：先由 X:Y:Z=5:8:12；X 從5份變15，倍率為3，所以 Z=12×3=36。 四個選項逐一代回時，只有36同時維持 X:Y=5:8 與 Y:Z=2:3；24、30、40分別源自錯用 Y 份數、錯誤調整第二比與未依 X 求倍率。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v004-semantic-review-r1",
      "questionId": "u06-s010-v004",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "3430868da78a061125f556d9cd5fa5347ff28626f586338d9b95e3d4c5e9fab7",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "10:12=5:6，21:12=7:4。",
      "derivedAnswer": "10:12:21",
      "storedAnswer": "10:12:21",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "未對齊乙。",
        "甲倍率錯。",
        "丙未隨乙放大。",
        "乙份數6與4對齊到12；甲乙乘2，丙乙乘3。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「共同項位置不同的合併」，已明示必要條件：乙為共同量。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：目標順序明示。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準位置判讀。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：10:12=5:6，21:12=7:4。 正確選項為「10:12:21」。逐項檢查後，唯一為真的理由是「乙份數6與4對齊到12；甲乙乘2，丙乙乘3。」；其餘三項分別因「未對齊乙。」、「甲倍率錯。」、「丙未隨乙放大。」而排除。邊界與語意再檢查：目標順序明示。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v005-semantic-review-r1",
      "questionId": "u06-s010-v005",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "dac003e8d4c7cd6036020a81a68a2c25a9db719f89853110fd3ba54965e2879a",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "2:3放大6倍回12:18。",
      "derivedAnswer": "2:3",
      "storedAnswer": "2:3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "取前兩項12:18，同除6得2:3。",
        "跨取A:C。",
        "取B:C。",
        "把所求比的前後項顛倒，形成原比例的倒比。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由連比還原兩量比」，已明示必要條件：三項順序A:B:C。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：只問A:B。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準讀取。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：2:3放大6倍回12:18。 正確選項為「2:3」。逐項檢查後，四個選項的判斷依序為：取前兩項12:18，同除6得2:3。；跨取A:C。；取B:C。；把所求比的前後項顛倒，形成原比例的倒比。。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v006-semantic-review-r1",
      "questionId": "u06-s010-v006",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "e5d1d6b763ae232f99478b8633c9bdf5b931db0662d0fd87a0d6a6a3eeaffadf",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "A=20、B=35、C=45。",
      "derivedAnswer": "45",
      "storedAnswer": "45",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "20是A。",
        "份數乘錯。",
        "把35乘9/5。",
        "7份是35，每份5，C=9×5=45。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由連比份數求量」，已明示必要條件：B對應7份。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：各量可為正數。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準份量。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：A=20、B=35、C=45。 正確選項為「45」。逐項檢查後，唯一為真的理由是「7份是35，每份5，C=9×5=45。」；其餘三項分別因「20是A。」、「份數乘錯。」、「把35乘9/5。」而排除。邊界與語意再檢查：各量可為正數。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v007-semantic-review-r1",
      "questionId": "u06-s010-v007",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "3cebff350f5dc37d935b6aadc1648b099f8f44047ffbc452c5bd40e380180fb4",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "12:27=4:9，12:10=6:5。",
      "derivedAnswer": "12:27:10",
      "storedAnswer": "12:27:10",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "A份數不一致。",
        "共同項A的4與6對齊到12；第一比乘3得12:27，第二比乘2得12:10。",
        "等值但未最簡，三項可同除2得12:27:15? 且C錯。",
        "B未隨A放大。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「共同前項對齊」，已明示必要條件：A為同一量。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：結果三項最大公因數1。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "進階位置變化。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：12:27=4:9，12:10=6:5。 正確選項為「12:27:10」。逐項檢查後，唯一為真的理由是「共同項A的4與6對齊到12；第一比乘3得12:27，第二比乘2得12:10。」；其餘三項分別因「A份數不一致。」、「等值但未最簡，三項可同除2得12:27:15? 且C錯。」、「B未隨A放大。」而排除。邊界與語意再檢查：結果三項最大公因數1。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v008-semantic-review-r1",
      "questionId": "u06-s010-v008",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "e860370070c589c6ac32adc1bb94644302f8a951a5b84d67b87909ece164401d",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "16+40+30=86，且16:40=2:5、30:40=3:4。",
      "derivedAnswer": "16",
      "storedAnswer": "16",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "12對應每份1.5。",
        "20是B的一半但不是A。",
        "B份數5與4對齊20；A:B:C=8:20:15，共43份。86÷43=2，A=16。",
        "30是C。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「連比與總量整合」，已明示必要條件：三量皆為正且構成總量。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：86正好是43份的2倍。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "進階一致性與分配。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：16+40+30=86，且16:40=2:5、30:40=3:4。 正確選項為「16」。逐項檢查後，唯一為真的理由是「B份數5與4對齊20；A:B:C=8:20:15，共43份。86÷43=2，A=16。」；其餘三項分別因「12對應每份1.5。」、「20是B的一半但不是A。」、「30是C。」而排除。邊界與語意再檢查：86正好是43份的2倍。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v009-semantic-review-r1",
      "questionId": "u06-s010-v009",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "da5a5338738f1b4794e249a1f899ccac1815c6ba3fd90e656a44079200061160",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "甲63、乙84、丙70，甲比丙少7。",
      "derivedAnswer": "84",
      "storedAnswer": "84",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "把乙當6份。",
        "63是甲。",
        "70是丙。",
        "對齊得甲:乙:丙=9:12:10；丙比甲多1份=7，所以乙12份=84。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「連比差量反推」，已明示必要條件：三量為正。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：甲與丙只差1份，資料唯一決定每份。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "高階多條件。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：甲63、乙84、丙70，甲比丙少7。 正確選項為「84」。逐項檢查後，唯一為真的理由是「對齊得甲:乙:丙=9:12:10；丙比甲多1份=7，所以乙12份=84。」；其餘三項分別因「把乙當6份。」、「63是甲。」、「70是丙。」而排除。邊界與語意再檢查：甲與丙只差1份，資料唯一決定每份。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v010-semantic-review-r1",
      "questionId": "u06-s010-v010",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "7bb8bed56bca61934f5ea7c99c33380cf8b533d6eabb7d4f36808e24ce725599",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "糖240，5:2=600:240；4:3=240:180。",
      "derivedAnswer": "600公克",
      "storedAnswer": "600公克",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "只用5/3。",
        "把每份45。",
        "糖份數2與4對齊4；麵粉:糖:奶油=10:4:3。奶油3份180，每份60，麵粉600。",
        "把奶油當2份。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「配方共同項應用」，已明示必要條件：配方比例固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公克。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：三種材料角色明確。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "生活連比預備。",
      "literacyNecessity": "共享糖量連接兩個配方比，情境不可移除。",
      "reviewerNote": "獨立重算：糖240，5:2=600:240；4:3=240:180。 正確選項為「600公克」。逐項檢查後，唯一為真的理由是「糖份數2與4對齊4；麵粉:糖:奶油=10:4:3。奶油3份180，每份60，麵粉600。」；其餘三項分別因「只用5/3。」、「把每份45。」、「把奶油當2份。」而排除。邊界與語意再檢查：三種材料角色明確。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v011-semantic-review-r1",
      "questionId": "u06-s010-v011",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "f04707289e831398857bb437f5c29538a0c1d76fa09fe2a58ff3ae9286619a08",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "乙54；54:90=3:5。",
      "derivedAnswer": "90公斤",
      "storedAnswer": "90公斤",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "乙9與3對齊9，甲:乙:丙=7:9:15；甲7份42，每份6，丙90。",
        "54是乙。",
        "丙份數誤作約11.67。",
        "把丙當17.5份。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「回收資料的兩段比」，已明示必要條件：同一統計期間與同一重量單位。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公斤。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：三班資料可直接比較。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "情境合併。",
      "literacyNecessity": "同期間與同單位使兩個比可透過乙合併。",
      "reviewerNote": "獨立重算：乙54；54:90=3:5。 正確選項為「90公斤」。逐項檢查後，唯一為真的理由是「乙9與3對齊9，甲:乙:丙=7:9:15；甲7份42，每份6，丙90。」；其餘三項分別因「54是乙。」、「丙份數誤作約11.67。」、「把丙當17.5份。」而排除。邊界與語意再檢查：三班資料可直接比較。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v012-semantic-review-r1",
      "questionId": "u06-s010-v012",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "e8893501295f43825ae7705765aafdb482d0d40ec4d20f62d05d7be00605e1b4",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "缺少跨年變化資訊，無法建立唯一連比。",
      "derivedAnswer": "不能，因共同項乙不是同一時點的量",
      "storedAnswer": "不能，因共同項乙不是同一時點的量",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "若同年份才可合成8:12:21。",
        "共同項必須是同一量、同一時點；不同年份的乙區數值不可直接對齊。",
        "直接相接錯。",
        "連比本身可以含三項。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「判斷共同項語意有效性」，已明示必要條件：兩比來自不同年份。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：區域數量單位未變但時點不同。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：資料不足而非計算困難。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "素養邊界判讀。",
      "literacyNecessity": "年份差異直接破壞共同項一致性，是情境的核心。",
      "reviewerNote": "獨立重算：缺少跨年變化資訊，無法建立唯一連比。 正確選項為「不能，因共同項乙不是同一時點的量」。逐項檢查後，唯一為真的理由是「共同項必須是同一量、同一時點；不同年份的乙區數值不可直接對齊。」；其餘三項分別因「若同年份才可合成8:12:21。」、「直接相接錯。」、「連比本身可以含三項。」而排除。邊界與語意再檢查：資料不足而非計算困難。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": []
};
