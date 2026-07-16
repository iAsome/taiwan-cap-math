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
        "answer": "8:12:15。",
        "why": "B 在兩個比中分別代表三份與四份，不能直接串接。對齊成十二份後，兩個比都保持原值，合併的八比十二比十五再拆回也正好是二比三與四比五。"
      },
      {
        "exampleId": "L2",
        "prompt": "甲:乙=5:6，丙:乙=7:4，寫甲:乙:丙。",
        "solutionSteps": [
          "共同項乙為 6 與 4 份，對齊到 12。",
          "甲:乙=10:12；丙:乙=21:12，所以甲:乙:丙=10:12:21。"
        ],
        "answer": "10:12:21。",
        "why": "共同項乙都在後項，對齊後還要依題目指定的甲、乙、丙順序排列。十比十二與二十一比十二分別可化回五比六與七比四，所以順序與比值都正確。"
      },
      {
        "exampleId": "L3",
        "prompt": "X:Y=3:8，Y:Z=2:7。",
        "solutionSteps": [
          "Y 的 8 與 2 對齊到 8。",
          "第二比乘 4 得 Y:Z=8:28。"
        ],
        "answer": "X:Y:Z=3:8:28。",
        "why": "第二個比的 Y 只有兩份，把整個二比七乘四便成八比二十八，可直接接上第一個比。若只把 Y 改成八而留下 Z 為七，就會破壞原本二比七的關係。"
      },
      {
        "exampleId": "L4",
        "prompt": "檢查 12:18:25 是否符合 A:B=2:3、B:C=18:25。",
        "solutionSteps": [
          "12:18 化簡為 2:3。",
          "18:25 已最簡，兩個條件皆符合。"
        ],
        "answer": "符合。",
        "why": "檢查連比時要按字母取出相應的兩項。前兩項十二比十八化簡為二比三，後兩項十八比二十五保持不變，兩組都符合，才能判定整個連比一致。"
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
    "contentSha256": "1471c18eb747e676b8b24055b07b071f0411df88a4ca39ad311f1e4a204bbb03"
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
      "mainExplanation": "兩個比中的共同項都是 B，但 B 分別是三份與四份，不能直接接在一起。把 B 對齊為十二份後，第一比成為八比十二，第二比成為十二比十五，所以連比是八比十二比十五。",
      "explanation": "兩個比中的共同項都是 B，但 B 分別是三份與四份，不能直接接在一起。把 B 對齊為十二份後，第一比成為八比十二，第二比成為十二比十五，所以連比是八比十二比十五。",
      "steps": [
        "辨認共同項 B 的份數分別為三與四。",
        "以最小公倍數十二對齊，得 A:B=8:12、B:C=12:15。",
        "合併為 A:B:C=8:12:15，並拆回兩個原比驗算。"
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
      "misconceptionTarget": "看到共同字母便直接接成二比三比五，沒有先讓 B 的份數一致。",
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
      "contentSha256": "35443a2e1d4823c49ae250619352683b5bdaba87b0df52eddac81a76bf0b3c3a"
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
      "mainExplanation": "共同項乙在第一個比中是五份，在第二個比中是十份。把甲比乙三比五整體乘二，得到六比十，再與乙比丙十比七合併，所以甲比乙比丙是六比十比七。",
      "explanation": "共同項乙在第一個比中是五份，在第二個比中是十份。把甲比乙三比五整體乘二，得到六比十，再與乙比丙十比七合併，所以甲比乙比丙是六比十比七。",
      "steps": [
        "找出共同項乙的份數五與十。",
        "將甲:乙=3:5 整體乘二，改寫成 6:10。",
        "接上乙:丙=10:7，得到 6:10:7，並拆回驗算。"
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
      "misconceptionTarget": "只把共同項乙從五改成十，卻沒有把甲的三份同時乘二。",
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
      "contentSha256": "18c915f78273af419de67b69a75afa0ec476edd08ada7eb508c13eb91ef2c13a"
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
      "mainExplanation": "先把 Y 比 Z 的二比三整體乘四，改寫成八比十二，便可與 X 比 Y 的五比八合併成五比八比十二。X 的五份等於十五，所以每份是三，Z 的十二份就是三十六。",
      "explanation": "先把 Y 比 Z 的二比三整體乘四，改寫成八比十二，便可與 X 比 Y 的五比八合併成五比八比十二。X 的五份等於十五，所以每份是三，Z 的十二份就是三十六。",
      "steps": [
        "將 Y:Z=2:3 整體乘四，得到 8:12。",
        "合併成 X:Y:Z=5:8:12。",
        "由 X=15 求每份 15÷5=3，再算 Z=12×3=36。"
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
      "misconceptionTarget": "完成共同項對齊後便把十二當成答案，沒有再依 X 的實際值求倍率。",
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
      "contentSha256": "7d4d3e7a9d5be201da0cad9c1ba9e39763a6b06475427f35ad21b4837b742725"
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
      "mainExplanation": "第二個比寫成丙比乙，所以共同項乙位在後項。把乙的六份與四份對齊為十二份，可得甲比乙十比十二、丙比乙二十一比十二；依甲、乙、丙順序排列為十比十二比二十一。",
      "explanation": "第二個比寫成丙比乙，所以共同項乙位在後項。把乙的六份與四份對齊為十二份，可得甲比乙十比十二、丙比乙二十一比十二；依甲、乙、丙順序排列為十比十二比二十一。",
      "steps": [
        "確認共同項乙在第一比後項、第二比後項。",
        "對齊乙為十二份，得甲:乙=10:12、丙:乙=21:12。",
        "按甲:乙:丙順序寫成 10:12:21，並還原兩個原比。"
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
      "misconceptionTarget": "忽略丙比乙的項次，直接把七放到乙的位置或將三量順序排錯。",
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
      "contentSha256": "75388593d5f7c4a2559aee1ce38376514d91dc95bb106569e63e40c6619a52c5"
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
      "mainExplanation": "從連比十二比十八比二十五中取 A 與 B 對應的前兩項，得到十二比十八。兩項同除以最大公因數六，化為二比三；第三項二十五與本題所問的 A 比 B 無關。",
      "explanation": "從連比十二比十八比二十五中取 A 與 B 對應的前兩項，得到十二比十八。兩項同除以最大公因數六，化為二比三；第三項二十五與本題所問的 A 比 B 無關。",
      "steps": [
        "依 A:B:C 順序取出 A 與 B 的份數 12:18。",
        "求十二與十八的最大公因數六。",
        "前後項同除以六，得到最簡比 2:3。"
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
      "misconceptionTarget": "取成 A 與 C 的十二比二十五，或化簡時顛倒 A、B 的先後順序。",
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
      "contentSha256": "c2ed95a1de02fe42395ef8b7ff3888190f5c8b6a105a04dd9ab7f62ea6421a0d"
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
      "mainExplanation": "連比中 B 對應七份，已知 B 是三十五，所以每份為三十五除以七，等於五。C 對應九份，因此 C 是九乘五，等於四十五；A 則為二十，可一併回查三量倍率相同。",
      "explanation": "連比中 B 對應七份，已知 B 是三十五，所以每份為三十五除以七，等於五。C 對應九份，因此 C 是九乘五，等於四十五；A 則為二十，可一併回查三量倍率相同。",
      "steps": [
        "辨認 B 在 4:7:9 中對應七份。",
        "求每份 35÷7=5。",
        "計算 C=9×5=45，並以 B:C=35:45=7:9 驗算。"
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
      "misconceptionTarget": "用三量總份數二十去除三十五，誤把已知的 B 當成三量總和。",
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
      "contentSha256": "306f3c4bff62e50f31c4a5e05f3e1dc205f02b4fcdbceeabd901c4e62527a80a"
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
      "mainExplanation": "共同項 A 位在兩個比的前項，仍須先對齊。四與六的最小公倍數是十二，所以 A 比 B 四比九放大三倍成十二比二十七，A 比 C 六比五放大二倍成十二比十，合為十二比二十七比十。",
      "explanation": "共同項 A 位在兩個比的前項，仍須先對齊。四與六的最小公倍數是十二，所以 A 比 B 四比九放大三倍成十二比二十七，A 比 C 六比五放大二倍成十二比十，合為十二比二十七比十。",
      "steps": [
        "辨認共同項 A 的份數四與六，最小公倍數為十二。",
        "把 A:B 放大成 12:27，把 A:C 放大成 12:10。",
        "依 A:B:C 排列成 12:27:10，再拆回驗算。"
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
      "misconceptionTarget": "以為共同項只能位在第一比後項，未將兩個比前項的 A 對齊。",
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
      "contentSha256": "e565f7fa57da6319f4e6d51d7db5f458948438b7da44411184b7aa30f41664b7"
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
      "prompt": "同學把 A:B=3:4、C:B=5:8 直接寫成 A:B:C=3:4:5。下列修正何者正確？",
      "text": "同學把 A:B=3:4、C:B=5:8 直接寫成 A:B:C=3:4:5。下列修正何者正確？",
      "givenConditions": "A:B=3:4，C:B=5:8；要求依 A:B:C 排列。",
      "target": "診斷共同項未對齊並選出正確連比",
      "choices": [
        "保留 3:4:5，因三個字母都已出現",
        "只把 B 改成 8 份，寫成 3:8:5",
        "把 B 對齊成 8 份，寫成 6:8:5",
        "依 C:B 排列，寫成 6:5:8"
      ],
      "answerIndex": 2,
      "independentSolution": "A:B=3:4 整體乘二得 6:8；C:B=5:8 已對齊，所以依 A:B:C 排列為 6:8:5。",
      "mainExplanation": "共同項 B 在兩個比中分別是四份與八份，必須先調成相同。把 A 比 B 三比四整體乘二得六比八，另一個 C 比 B 已是五比八；依 A、B、C 排列便得到六比八比五。",
      "explanation": "共同項 B 在兩個比中分別是四份與八份，必須先調成相同。把 A 比 B 三比四整體乘二得六比八，另一個 C 比 B 已是五比八；依 A、B、C 排列便得到六比八比五。",
      "steps": [
        "指出原寫法中的 B 同時被當成四份與八份，份數不一致。",
        "將 A:B=3:4 整體乘二，得到 6:8。",
        "與 C:B=5:8 合併並按 A:B:C 排列，得到 6:8:5。"
      ],
      "optionAnalysis": [
        {
          "choice": "保留 3:4:5，因三個字母都已出現",
          "truth": false,
          "reason": "字母雖齊全，但 B 在兩個原比中不是同一份數，不能直接接合。"
        },
        {
          "choice": "只把 B 改成 8 份，寫成 3:8:5",
          "truth": false,
          "reason": "把 B 乘二時 A 也必須乘二，只改共同項會破壞 A:B=3:4。"
        },
        {
          "choice": "把 B 對齊成 8 份，寫成 6:8:5",
          "truth": true,
          "reason": "6:8 化簡為3:4，且 C:B=5:8，兩個原比都能還原。"
        },
        {
          "choice": "依 C:B 排列，寫成 6:5:8",
          "truth": false,
          "reason": "題目要求 A:B:C，不能把 C 與 B 的位置互換。"
        }
      ],
      "misconceptionTarget": "只看到三個字母便直接串接，或只改共同項而沒有將整個比等比例放大。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 135,
      "unitCheck": "本題只比較無單位份數。",
      "roundingCheck": "全為精確整數比，不需近似。",
      "ambiguityBoundaryAudit": "題目明定 C:B 的順序與輸出 A:B:C 的順序。",
      "difficultyReason": "需先診斷錯誤連比，再處理共同項位於兩比後項的排列。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "258474de4b4df0dd174b4a06749f1a2940116d8f26d25cba60fa3e3b2b00a79f"
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
      "prompt": "把甲:乙=2:7 與乙:丙=14:3 合併後，再拆回兩個原比檢查。哪個連比通過檢查？",
      "text": "把甲:乙=2:7 與乙:丙=14:3 合併後，再拆回兩個原比檢查。哪個連比通過檢查？",
      "givenConditions": "甲:乙=2:7，乙:丙=14:3；輸出順序為甲:乙:丙。",
      "target": "以共同項對齊與拆回驗算辨認連比",
      "choices": [
        "2:7:3",
        "2:14:3",
        "4:7:3",
        "4:14:3"
      ],
      "answerIndex": 3,
      "independentSolution": "乙的七份與十四份對齊為十四份，甲:乙=4:14；接上乙:丙=14:3，得 4:14:3。",
      "mainExplanation": "共同項乙在兩個比中是七份與十四份。把甲比乙二比七整體乘二得四比十四，再接上乙比丙十四比三，得到四比十四比三；拆回後四比十四化簡為二比七，另一比也完全相符。",
      "explanation": "共同項乙在兩個比中是七份與十四份。把甲比乙二比七整體乘二得四比十四，再接上乙比丙十四比三，得到四比十四比三；拆回後四比十四化簡為二比七，另一比也完全相符。",
      "steps": [
        "找出乙的份數七與十四，決定對齊為十四份。",
        "把甲:乙=2:7 整體乘二，得到 4:14。",
        "合併成 4:14:3，再拆回 4:14=2:7 與 14:3 驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "2:7:3",
          "truth": false,
          "reason": "乙為七份時，乙比丙七比三不等於十四比三。"
        },
        {
          "choice": "2:14:3",
          "truth": false,
          "reason": "乙改為十四份時甲仍留二份，會破壞甲比乙二比七。"
        },
        {
          "choice": "4:7:3",
          "truth": false,
          "reason": "四比七不等於二比七，且乙仍未與十四份對齊。"
        },
        {
          "choice": "4:14:3",
          "truth": true,
          "reason": "四比十四化簡為二比七，十四比三也符合第二個原比。"
        }
      ],
      "misconceptionTarget": "合併後不拆回兩個原比檢查，因而沒有發現共同項或非共同項只改一邊。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 135,
      "unitCheck": "本題只比較無單位份數。",
      "roundingCheck": "全為精確整數比，不需近似。",
      "ambiguityBoundaryAudit": "兩個原比及甲、乙、丙的輸出順序均已明示。",
      "difficultyReason": "須完成對齊，並以拆回驗算排除三個看似接近的連比。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a3070a2f05fa0c27a679ce59852c97339089381f30e081ae5f2171ff026a5dc8"
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
      "prompt": "飲料標示濃縮汁:水=1:4，水:冰塊=8:3。只依標示關係，濃縮汁:水:冰塊應寫成何者？",
      "text": "飲料標示濃縮汁:水=1:4，水:冰塊=8:3。只依標示關係，濃縮汁:水:冰塊應寫成何者？",
      "givenConditions": "兩個標示中的水是同一批飲料內的相同量。",
      "target": "讀取標示並對齊共同項水",
      "choices": [
        "1:4:3",
        "2:4:3",
        "2:8:3",
        "2:8:6"
      ],
      "answerIndex": 2,
      "independentSolution": "水的四份與八份對齊為八份，濃縮汁:水=2:8；接上水:冰塊=8:3，得 2:8:3。",
      "mainExplanation": "共同項水在第一個標示中是四份，在第二個標示中是八份。把濃縮汁比水一比四整體乘二，得到二比八，再接上水比冰塊八比三，所以正確連比是二比八比三。",
      "explanation": "共同項水在第一個標示中是四份，在第二個標示中是八份。把濃縮汁比水一比四整體乘二，得到二比八，再接上水比冰塊八比三，所以正確連比是二比八比三。",
      "steps": [
        "確認兩個標示的共同項都是同一批飲料中的水。",
        "把濃縮汁:水=1:4 整體乘二，得到 2:8。",
        "接上水:冰塊=8:3，寫成 2:8:3 並拆回檢查。"
      ],
      "optionAnalysis": [
        {
          "choice": "1:4:3",
          "truth": false,
          "reason": "水四份尚未與第二個比的水八份對齊。"
        },
        {
          "choice": "2:4:3",
          "truth": false,
          "reason": "濃縮汁比水二比四化簡為一比二，不符合一比四。"
        },
        {
          "choice": "2:8:3",
          "truth": true,
          "reason": "二比八化簡為一比四，八比三也符合第二個標示。"
        },
        {
          "choice": "2:8:6",
          "truth": false,
          "reason": "水比冰塊八比六化簡為四比三，不符合八比三。"
        }
      ],
      "misconceptionTarget": "把飲料標示中的兩個比直接串接，沒有把共同項水的份數先調成一致。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 110,
      "unitCheck": "三項都以相同容量單位比較。",
      "roundingCheck": "標示為精確整數比，不需近似。",
      "ambiguityBoundaryAudit": "題幹明定兩個水量來自同一批飲料，語意可合併。",
      "difficultyReason": "需把生活標示翻成同一份量基準並完成拆回檢查。",
      "literacyContextNecessity": "飲料標示分別提供兩組成分比，必須確認共同成分水是同一量後才能合併。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fc086eec16686cb471dd31aca43bce660def633f78a80e720d5155b83c9c215d"
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
      "prompt": "校隊公告記錄七年級:八年級=2:3、八年級:九年級=9:4。改寫成同一份量基準時，七年級:八年級:九年級為何？",
      "text": "校隊公告記錄七年級:八年級=2:3、八年級:九年級=9:4。改寫成同一份量基準時，七年級:八年級:九年級為何？",
      "givenConditions": "兩組比來自同一份校隊公告，八年級指同一群學生。",
      "target": "把分開記錄的年級比對齊為三項比",
      "choices": [
        "6:9:4",
        "2:3:4",
        "6:3:4",
        "6:9:12"
      ],
      "answerIndex": 0,
      "independentSolution": "八年級的三份與九份對齊為九份，七年級:八年級=6:9；接上 9:4，得 6:9:4。",
      "mainExplanation": "八年級是兩組記錄的共同項，份數分別為三與九。把七年級比八年級二比三整體乘三，得到六比九，再接上八年級比九年級九比四，所以三年級連比是六比九比四。",
      "explanation": "八年級是兩組記錄的共同項，份數分別為三與九。把七年級比八年級二比三整體乘三，得到六比九，再接上八年級比九年級九比四，所以三年級連比是六比九比四。",
      "steps": [
        "確認共同項八年級指同一群學生，份數為三與九。",
        "將七年級:八年級=2:3 整體乘三，得 6:9。",
        "接上八年級:九年級=9:4，得到 6:9:4 並拆回驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "6:9:4",
          "truth": true,
          "reason": "六比九化簡為二比三，九比四也符合公告第二組比。"
        },
        {
          "choice": "2:3:4",
          "truth": false,
          "reason": "八年級比九年級三比四不等於九比四。"
        },
        {
          "choice": "6:3:4",
          "truth": false,
          "reason": "七年級比八年級六比三不等於二比三。"
        },
        {
          "choice": "6:9:12",
          "truth": false,
          "reason": "八年級比九年級九比十二化簡為三比四。"
        }
      ],
      "misconceptionTarget": "只把兩組年級比依序接在一起，沒有先確認八年級的份數三與九一致。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-word-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-word-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 105,
      "unitCheck": "三項皆代表同一公告中的學生人數。",
      "roundingCheck": "人數關係以精確整數比表示。",
      "ambiguityBoundaryAudit": "公告來源與八年級共同群體均已明示。",
      "difficultyReason": "需讀懂分開記錄的年級關係，再對齊共同年級。",
      "literacyContextNecessity": "公告把三個年級拆成兩組比，讀者須確認共同年級同源後才能合併。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5537d02b32d4afc1709c3e79d1936ab6307534a7d1f3c2c40ce3d07011abcc1d"
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
      "mainExplanation": "連比對齊的共同項必須代表同一時點、同一口徑的量。兩個比中的乙區雖然名稱相同，卻來自不同年份；若不知道乙區跨年的變化，就不能把兩個乙區數值當同一份量，因此無法建立唯一連比。",
      "explanation": "連比對齊的共同項必須代表同一時點、同一口徑的量。兩個比中的乙區雖然名稱相同，卻來自不同年份；若不知道乙區跨年的變化，就不能把兩個乙區數值當同一份量，因此無法建立唯一連比。",
      "steps": [
        "先辨認兩組比的共同名稱都是乙區。",
        "檢查資料時點，發現兩個乙區來自不同年份。",
        "因缺少跨年換算資訊，拒絕直接合併成甲:乙:丙。"
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
      "misconceptionTarget": "只看共同項名稱相同便直接對齊，忽略資料年份與統計口徑並不一致。",
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
      "contentSha256": "7586bb3dc9d08b4483311c62cf94e574f91ea41141c07c7558eddbe3457c0f22"
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
        "共同項乙在兩個比中分別是七份與六份，最小公倍數為四十二份。",
        "將甲:乙=4:7 整體乘六，得到 24:42；將乙:丙=6:5 整體乘七，得到 42:35。",
        "依甲、乙、丙順序合併，得到甲:乙:丙=24:42:35。",
        "拆回驗算：24:42 同除六為 4:7，42:35 同除七為 6:5，兩個原比都成立。"
      ],
      "alternativeSolutions": [
        "可令乙=42k，直接得到甲=24k、丙=35k。"
      ],
      "reasoningSteps": [
        "找共同項乙的兩個份數，取最小公倍數四十二。",
        "將兩個比各自整體放大，使乙都成四十二份。",
        "合併後依序排列，再拆回原比完成驗算。"
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
        "只把共同項乙改成四十二，沒有同步放大同一比的另一項。",
        "合併時把甲、乙、丙位置交換，得到不符合題目順序的連比。",
        "寫出連比後沒有拆回驗算，因而未發現放大倍率或排列錯誤。"
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
      "contentSha256": "2e6415ee56e2a33bcbd7f640669f72af7a0b869fd2111a02042c6ffdaaaf4b9a"
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
      "prompt": "同學把 A:B=3:4、C:B=5:6 直接寫成 A:B:C=3:4:5。請指出問題，依 A:B:C 順序改正，並拆回兩個原比驗算。",
      "target": "診斷共同項未對齊，改正連比並驗算",
      "requiredWork": [
        "指出 B 在兩個原比中的份數不同，不能直接串接。",
        "把共同項 B 對齊後依 A:B:C 排列。",
        "拆回 A:B 與 C:B，分別化簡驗算。"
      ],
      "fullCreditSolution": [
        "原寫法把同一個 B 同時當成四份與六份，份數不一致，因此 3:4:5 不能代表兩個原比。",
        "四與六的最小公倍數是十二。將 A:B=3:4 整體乘三得 9:12；將 C:B=5:6 整體乘二得 10:12。",
        "依 A:B:C 順序排列，正確連比為 9:12:10。",
        "拆回驗算：A:B=9:12=3:4；C:B=10:12=5:6，兩個條件都成立。"
      ],
      "alternativeSolutions": [
        "也可先任取 B 的共同倍數二十四，得 18:24:20，再將三項同除二，化為 9:12:10。"
      ],
      "reasoningSteps": [
        "比較 B 在兩比中的四份與六份，說明原連比的矛盾。",
        "以最小公倍數十二對齊 B，並將兩個比各自整體放大。",
        "按 A:B:C 排列後，拆回 A:B 與 C:B 驗證。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "清楚指出共同項不一致，正確求得 9:12:10，並完整拆回兩個原比驗算。"
        },
        {
          "score": 2,
          "criteria": "對齊與答案正確，但錯誤說明或其中一個拆回驗算不完整。"
        },
        {
          "score": 1,
          "criteria": "知道要對齊共同項並有合理計算，但連比排列或倍率有一處錯誤。"
        },
        {
          "score": 0,
          "criteria": "仍直接串接成 3:4:5，或作答與共同項對齊無關。"
        }
      ],
      "partialCreditRules": [
        "若使用二十四等非最小共同倍數，只要最後得到等值連比並驗算，仍可給滿分。",
        "答案三項為等比例放大的 9:12:10 時視為同一連比，不因未化到最小而扣分。"
      ],
      "followThroughPolicy": "若對齊時有單一算術錯誤，但後續依自得連比一致拆回檢查，可依正確方法給部分分。",
      "unitNotationRules": "A、B、C 為無單位份數，冒號順序必須維持 A:B:C。",
      "answerOnlyPolicy": "只寫 9:12:10 而未指出原錯誤及拆回驗算，不給完整作答分。",
      "commonErrors": [
        "看到 A、B、C 都出現便直接串成三比四比五，忽略 B 份數不同。",
        "只把 B 改成十二，沒有將 A 或 C 按同一倍率放大。",
        "把 C:B=10:12 排成 B:C=10:12，導致最後兩項順序顛倒。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "共同項 B 對齊十二份後，A:B:C=9:12:10，拆回兩個原比均成立。",
        "ambiguity": "題幹明示兩個原比與輸出順序，錯誤診斷及驗算要求皆唯一。",
        "scope": "只處理簡單三量的共同項對齊與拆回驗算，未進入總量、差量或實際分配。",
        "decision": "pass",
        "reviewedAt": "2026-07-16"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "57958e3adaf105c5cd85ccd9df86909177398c864d26a33b3afd3cc573efa3f8"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s010-v001-semantic-review-r1",
      "questionId": "u06-s010-v001",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "35443a2e1d4823c49ae250619352683b5bdaba87b0df52eddac81a76bf0b3c3a",
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
      "contentSha256": "18c915f78273af419de67b69a75afa0ec476edd08ada7eb508c13eb91ef2c13a",
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
      "contentSha256": "7d4d3e7a9d5be201da0cad9c1ba9e39763a6b06475427f35ad21b4837b742725",
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
      "contentSha256": "75388593d5f7c4a2559aee1ce38376514d91dc95bb106569e63e40c6619a52c5",
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
      "contentSha256": "c2ed95a1de02fe42395ef8b7ff3888190f5c8b6a105a04dd9ab7f62ea6421a0d",
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
      "contentSha256": "306f3c4bff62e50f31c4a5e05f3e1dc205f02b4fcdbceeabd901c4e62527a80a",
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
      "contentSha256": "e565f7fa57da6319f4e6d51d7db5f458948438b7da44411184b7aa30f41664b7",
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
      "contentSha256": "258474de4b4df0dd174b4a06749f1a2940116d8f26d25cba60fa3e3b2b00a79f",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "A:B=3:4 整體乘二得 6:8；C:B=5:8 已對齊，所以依 A:B:C 排列為 6:8:5。",
      "derivedAnswer": "把 B 對齊成 8 份，寫成 6:8:5",
      "storedAnswer": "把 B 對齊成 8 份，寫成 6:8:5",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "共同項 B 的四份與八份尚未對齊。",
        "只改 B 會破壞 A:B 的等值關係。",
        "6:8=3:4 且 C:B=5:8，並符合指定順序。",
        "六比五比八不是題目要求的 A:B:C 排列。"
      ],
      "ambiguityChecks": {
        "wording": "題幹明示兩個原比及輸出順序，不需猜測字母位置。",
        "units": "所有數字都是無單位份數，不存在單位換算衝突。",
        "boundary": "只做共同項對齊、合併與拆回檢查，留在連比預備範圍。",
        "rounding": "計算全為精確整數比，沒有四捨五入或近似值。"
      },
      "difficultyReason": "先判讀錯誤來源，再同時處理共同項對齊與指定順序。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：A:B=3:4 整體乘二得 6:8；C:B=5:8 已對齊，所以依 A:B:C 排列為 6:8:5。拆回可得 6:8=3:4、5:8=5:8；其餘選項不是 B 未對齊，就是只改一項或排列錯誤，因此正確答案唯一。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v009-semantic-review-r1",
      "questionId": "u06-s010-v009",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "a3070a2f05fa0c27a679ce59852c97339089381f30e081ae5f2171ff026a5dc8",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "乙的七份與十四份對齊為十四份，甲:乙=4:14；接上乙:丙=14:3，得 4:14:3。",
      "derivedAnswer": "4:14:3",
      "storedAnswer": "4:14:3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "乙比丙七比三不符合十四比三。",
        "只改乙而未同步放大甲，破壞第一個比。",
        "第一比四比七不符合二比七。",
        "兩組相鄰比拆回後都與原條件一致。"
      ],
      "ambiguityChecks": {
        "wording": "題目明示合併後還要拆回檢查，判準完整且一致。",
        "units": "本題使用無單位份數，所有選項可直接作比值比較。",
        "boundary": "僅涉及一個共同項的對齊及驗算，未進入總量或差量分配。",
        "rounding": "各比均為精確整數，答案不受近似或取整影響。"
      },
      "difficultyReason": "除對齊共同項外，還要逐項拆回驗證兩個原比。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：乙的七份與十四份對齊為十四份，甲:乙=4:14；接上乙:丙=14:3，得 4:14:3。拆回後四比十四化簡為二比七，十四比三保持不變；其餘三個選項至少違反一個原比，因此答案唯一。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v010-semantic-review-r1",
      "questionId": "u06-s010-v010",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "fc086eec16686cb471dd31aca43bce660def633f78a80e720d5155b83c9c215d",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "水的四份與八份對齊為八份，濃縮汁:水=2:8；接上水:冰塊=8:3，得 2:8:3。",
      "derivedAnswer": "2:8:3",
      "storedAnswer": "2:8:3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "第一個水量未對齊第二個水量。",
        "第一組成分比被改成一比二。",
        "拆回兩組成分比均與標示相同。",
        "第二組成分比被改成四比三。"
      ],
      "ambiguityChecks": {
        "wording": "題幹明示兩個水都是同一批飲料內的相同量。",
        "units": "三項皆以相同容量單位表示，沒有跨單位換算問題。",
        "boundary": "只依標示完成共同項對齊，不求實際容量或進行分配。",
        "rounding": "成分比全為精確整數，不需要四捨五入。"
      },
      "difficultyReason": "需從生活標示辨認共同成分，再正確排列三項。",
      "literacyNecessity": "兩張成分標示必須以共同的水量銜接，情境直接決定能否合併。",
      "reviewerNote": "獨立重算：水的四份與八份對齊為八份，濃縮汁:水=2:8；接上水:冰塊=8:3，得 2:8:3。拆回可得二比八等於一比四，八比三保持不變；其他選項至少破壞一個標示比，因此答案唯一。題幹也明定兩處水是同一批飲料中的相同量，不存在跨配方誤接。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v011-semantic-review-r1",
      "questionId": "u06-s010-v011",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "5537d02b32d4afc1709c3e79d1936ab6307534a7d1f3c2c40ce3d07011abcc1d",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "八年級的三份與九份對齊為九份，七年級:八年級=6:9；接上 9:4，得 6:9:4。",
      "derivedAnswer": "6:9:4",
      "storedAnswer": "6:9:4",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "拆回後同時符合二比三與九比四。",
        "第二組年級比不符合九比四。",
        "第一組年級比不符合二比三。",
        "第二組年級比變成三比四。"
      ],
      "ambiguityChecks": {
        "wording": "題幹說明兩組比取自同一公告，八年級群體相同。",
        "units": "各項都代表學生人數，沒有單位或統計口徑衝突。",
        "boundary": "只將兩組年級比對齊成三項比，未進行實際人數分配。",
        "rounding": "所有份數均為精確整數，不涉及近似與取整。"
      },
      "difficultyReason": "要先判讀公告來源一致，再完成共同年級對齊。",
      "literacyNecessity": "公告分兩列呈現年級關係，共同群體判讀是合併的必要條件。",
      "reviewerNote": "獨立重算：八年級的三份與九份對齊為九份，七年級:八年級=6:9；接上 9:4，得 6:9:4。拆回後六比九化簡為二比三，九比四與原公告相同；其餘三項各違反至少一組比，答案唯一。題幹已確認兩組資料來自同一公告，八年級不是不同時點的群體。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s010-v012-semantic-review-r1",
      "questionId": "u06-s010-v012",
      "unitId": "u06",
      "skillId": "continued-ratio-preview",
      "contentSha256": "7586bb3dc9d08b4483311c62cf94e574f91ea41141c07c7558eddbe3457c0f22",
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
