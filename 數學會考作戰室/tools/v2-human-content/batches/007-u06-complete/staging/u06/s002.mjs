// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s002-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-ratio-basics",
    "skillId": "proportion-solve",
    "lockedSkillTitle": "比例式求解",
    "title": "比例式求解：對應順序與交叉相乘",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "比與比例式基礎",
      "skillOrder": 2,
      "lockedPrerequisiteSkillIds": [
        "ratio-simplify"
      ],
      "capBoundary": "限一元未知數的比例式與國中範圍代數整理；分母為零的值必須排除。"
    },
    "prerequisiteBridge": "先會把比化成等值比，並理解 a:b=a/b。比例式就是兩個比值相等，因此可用等式性質與交叉相乘求未知數。",
    "learningOutcomes": [
      "能將 a:b=c:d 改寫成 a/b=c/d。",
      "能在分母非零條件下使用 ad=bc。",
      "能解含整數、分數、小數與簡單括號的比例式。",
      "能把答案代回原式檢查對應順序與分母限制。"
    ],
    "glossary": [
      {
        "term": "比例式",
        "definition": "兩個比相等的等式，例如 2:3=8:12。"
      },
      {
        "term": "內項",
        "definition": "a:b=c:d 中的 b、c。"
      },
      {
        "term": "外項",
        "definition": "a:b=c:d 中的 a、d。"
      },
      {
        "term": "交叉相乘",
        "definition": "由 a/b=c/d 得到 ad=bc 的運算，前提是 b、d 不為 0。"
      }
    ],
    "notation": [
      {
        "symbol": "a:b=c:d",
        "meaning": "a/b=c/d，b≠0、d≠0。"
      },
      {
        "symbol": "ad=bc",
        "meaning": "比例式的外項乘積等於內項乘積。"
      },
      {
        "symbol": "x≠r",
        "meaning": "若 x=r 會使原分母為 0，必須排除。"
      }
    ],
    "conceptNarrative": [
      "比例式要求同一種比較順序。若左邊是長:寬，右邊也必須是長:寬。",
      "交叉相乘不是背箭頭，而是等式兩邊同乘兩個分母：a/b=c/d 同乘 bd 後得到 ad=bc。",
      "未知數可能在任一位置。先寫乘積等式，再用一元一次方程式方法整理。",
      "若未知數出現在分母，先記錄不能使分母為 0 的值，解完仍要代回。",
      "情境題中數學解還要符合正數、整數、件數等條件。"
    ],
    "formalDefinitions": [
      {
        "name": "比例式成立",
        "statement": "兩個有定義的比具有相同比值。"
      },
      {
        "name": "比例中項與外項",
        "statement": "a:b=c:d 中，b、c 為內項，a、d 為外項。"
      }
    ],
    "formulas": [
      {
        "formula": "a:b=c:d ⇔ ad=bc",
        "conditions": [
          "b≠0",
          "d≠0"
        ],
        "meaning": "外項乘積等於內項乘積。"
      },
      {
        "formula": "x/a=b/c ⇒ cx=ab",
        "conditions": [
          "a≠0",
          "c≠0"
        ],
        "meaning": "交叉相乘後解 x。"
      }
    ],
    "nonApplicableCases": [
      "任一後項為 0 時不能使用比例式。",
      "對應量顛倒，例如甲長:甲寬=乙寬:乙長，通常不成立。",
      "交叉相乘後仍須解方程式，不能把乘積直接當答案。",
      "代數解若使原分母為 0，必須捨去。",
      "件數題若算出非整數，應回頭檢查模型或題目限制。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "標出兩邊比的比較順序。",
        "check": "相同位置是否代表同類量？"
      },
      {
        "step": 2,
        "instruction": "寫出分母不為 0 的限制。",
        "check": "未知數是否在後項或分母？"
      },
      {
        "step": 3,
        "instruction": "交叉相乘形成一元一次方程式。",
        "check": "左上乘右下、左下乘右上是否正確？"
      },
      {
        "step": 4,
        "instruction": "解方程式並整理。",
        "check": "負號、括號、分數是否處理完整？"
      },
      {
        "step": 5,
        "instruction": "代回原比例式與情境驗算。",
        "check": "兩邊比值是否相同，答案是否符合量的限制？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "解 4:x=6:15。",
        "solutionSteps": [
          "寫成 4/x=6/15，且 x≠0。",
          "交叉相乘得 60=6x，所以 x=10。"
        ],
        "answer": "x=10。"
      },
      {
        "exampleId": "L2",
        "prompt": "解 (x+1):9=4:6。",
        "solutionSteps": [
          "交叉相乘得 6(x+1)=36。",
          "x+1=6，所以 x=5。"
        ],
        "answer": "x=5。"
      },
      {
        "exampleId": "L3",
        "prompt": "解 0.8:1.2=x:9。",
        "solutionSteps": [
          "0.8/1.2=2/3。",
          "x/9=2/3，所以 3x=18，x=6。"
        ],
        "answer": "x=6。"
      },
      {
        "exampleId": "L4",
        "prompt": "解 5:(x-2)=3:6。",
        "solutionSteps": [
          "先記 x≠2。",
          "30=3(x-2)，得 x=12；12 不違反限制。"
        ],
        "answer": "x=12。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把 3:x=6:10 寫成 3x=60。",
        "why": "交叉配對錯誤。",
        "correction": "3×10=6x。"
      },
      {
        "mistake": "左右兩比的量次序不一致。",
        "why": "只看數字，未標示量的名稱。",
        "correction": "先寫單位或量名再列式。"
      },
      {
        "mistake": "解出 x 後不代回。",
        "why": "容易漏掉算術錯誤或分母限制。",
        "correction": "比較代回後兩邊比值。"
      },
      {
        "mistake": "5:(x-2) 中忘記 x≠2。",
        "why": "忽略後項不可為 0。",
        "correction": "列式時先寫限制。"
      },
      {
        "mistake": "把 0.6:1.5 當成 6:15 後直接令 x=9。",
        "why": "沒有完成比例求解。",
        "correction": "先化簡為 2:5，再依對應比例求值。"
      },
      {
        "mistake": "得到負的箱數仍接受。",
        "why": "只看代數，不檢查情境。",
        "correction": "量的性質也屬答案條件。"
      }
    ],
    "selfCheck": [
      "兩邊比的順序一致嗎？",
      "所有後項都不為 0 嗎？",
      "交叉乘積配對正確嗎？",
      "方程式整理有處理括號與負號嗎？",
      "代回後兩個比值相等嗎？"
    ],
    "summary": [
      "比例式是兩個有定義的比相等。",
      "交叉相乘來自等式兩邊同乘分母。",
      "未知數在分母時先列排除值。",
      "解後必須代回並檢查情境限制。"
    ],
    "connections": {
      "previous": "使用比的化簡辨認等值比。",
      "next": [
        "部分量與總量可用比例式或份數法求解。",
        "比例式性質會進一步整理等值關係。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s002-v001",
        "u06-s002-v002",
        "u06-s002-v003",
        "u06-s002-v004",
        "u06-s002-v005",
        "u06-s002-v006",
        "u06-s002-v007",
        "u06-s002-v008",
        "u06-s002-v009",
        "u06-s002-v010",
        "u06-s002-v011",
        "u06-s002-v012"
      ],
      "constructedResponseIds": [
        "u06-s002-cr001",
        "u06-s002-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "四個例題均以交叉乘積重新求值並代回；特別檢查 x=2 的分母排除、0.8:1.2 的小數化簡以及括號展開，確保沒有把交叉相乘當成無條件公式。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "8eef71b04cad20d81ad28776ca60ef3e7223926d1bdd1ecabf23408725d724ee"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s002-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 x:5=6:15。",
      "text": "解比例式 x:5=6:15。",
      "givenConditions": "兩個後項5、15均非0。",
      "target": "求比例式未知前項",
      "choices": [
        "1",
        "2",
        "3",
        "6"
      ],
      "answerIndex": 1,
      "independentSolution": "右比6/15=2/5，因此x/5=2/5，x=2。",
      "mainExplanation": "交叉相乘：15x=5×6=30，x=2。",
      "explanation": "交叉相乘：15x=5×6=30，x=2。",
      "steps": [
        "x/5=6/15",
        "15x=30",
        "x=2"
      ],
      "optionAnalysis": [
        {
          "choice": "1",
          "truth": false,
          "reason": "代入1得1/5≠2/5。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "15x=30，所以 x=2。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "把15÷5誤當答案。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "直接取右比前項。"
        }
      ],
      "misconceptionTarget": "交叉乘積配錯或未解方程式。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 55,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "x=2唯一使兩邊比值相等。",
      "difficultyReason": "基礎一元比例式。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0a5790ebefc1bd496aee20dbdd661734636f3db5eabd9bcf0b7da3807cc16716"
    },
    {
      "questionId": "u06-s002-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 4:x=6:15。",
      "text": "解比例式 4:x=6:15。",
      "givenConditions": "x不可為0。",
      "target": "求未知後項",
      "choices": [
        "8",
        "12",
        "10",
        "15"
      ],
      "answerIndex": 2,
      "independentSolution": "4/10=2/5，而6/15=2/5，故x=10。",
      "mainExplanation": "外項乘積4×15等於內項x×6。",
      "explanation": "外項乘積4×15等於內項x×6。",
      "steps": [
        "先列x≠0",
        "60=6x",
        "x=10"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": false,
          "reason": "8代入得1/2≠2/5。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12來自60÷5。"
        },
        {
          "choice": "10",
          "truth": true,
          "reason": "4×15=6x，60=6x，x=10。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "15把未知數直接等同右後項。"
        }
      ],
      "misconceptionTarget": "把 x 與 15 對應相等。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 65,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "正數解且代回有定義。",
      "difficultyReason": "未知數位於分母，需注意限制。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f76507de213fd6174903ee497fb99abf3068aae3069b6b19b95a91072fecb3a2"
    },
    {
      "questionId": "u06-s002-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 5:6=x:18。",
      "text": "解比例式 5:6=x:18。",
      "givenConditions": "後項6、18非0。",
      "target": "以等值比求未知項",
      "choices": [
        "12",
        "18",
        "30",
        "15"
      ],
      "answerIndex": 3,
      "independentSolution": "18是6的3倍，前項5也乘3得15。",
      "mainExplanation": "由5/6=x/18，交叉相乘6x=90。",
      "explanation": "由5/6=x/18，交叉相乘6x=90。",
      "steps": [
        "5×18=90",
        "6x=90",
        "x=15"
      ],
      "optionAnalysis": [
        {
          "choice": "12",
          "truth": false,
          "reason": "12使右比2/3，不等於5/6。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "18使右比1。"
        },
        {
          "choice": "30",
          "truth": false,
          "reason": "30來自5×6而非交叉相乘。"
        },
        {
          "choice": "15",
          "truth": true,
          "reason": "6x=90，x=15。"
        }
      ],
      "misconceptionTarget": "只看後項倍率卻對前項做錯運算。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 55,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "倍率法與交叉相乘一致。",
      "difficultyReason": "可用整數倍快速求解。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "42084e8563afb8c1af3eaf3ac43c1e9a7a0f0d1199da5c886de4034e0d70b366"
    },
    {
      "questionId": "u06-s002-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 (x+2):7=5:14。",
      "text": "解比例式 (x+2):7=5:14。",
      "givenConditions": "7、14非0。",
      "target": "解含括號的比例式",
      "choices": [
        "1/2",
        "3/2",
        "2",
        "5/2"
      ],
      "answerIndex": 0,
      "independentSolution": "右比5/14，所以(x+2)/7=5/14，得x+2=5/2，x=1/2。",
      "mainExplanation": "先求整個前項x+2，再還原x。",
      "explanation": "先求整個前項x+2，再還原x。",
      "steps": [
        "14(x+2)=35",
        "x+2=5/2",
        "x=1/2"
      ],
      "optionAnalysis": [
        {
          "choice": "1/2",
          "truth": true,
          "reason": "14(x+2)=35，x+2=2.5，x=0.5。"
        },
        {
          "choice": "3/2",
          "truth": false,
          "reason": "3/2是忘記減2的一種結果。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "2把x+2誤作x。"
        },
        {
          "choice": "5/2",
          "truth": false,
          "reason": "5/2是x+2的值，不是x。"
        }
      ],
      "misconceptionTarget": "求出括號值後未減回常數。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 95,
      "unitCheck": "無單位。",
      "roundingCheck": "精確分數。",
      "ambiguityBoundaryAudit": "x不在分母，無額外排除值。",
      "difficultyReason": "兩階段代數整理。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "44c7cddcf995be3d5e150202d172602c6a53e302ecb66a08f65e981ba6689125"
    },
    {
      "questionId": "u06-s002-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "校園平面圖採相同比例：圖上 4 公分代表實際 6 公尺。另一段道路在圖上長 6 公分，實際長度是多少公尺？",
      "text": "校園平面圖採相同比例：圖上 4 公分代表實際 6 公尺。另一段道路在圖上長 6 公分，實際長度是多少公尺？",
      "givenConditions": "4公分對應6公尺；比例固定；所求為6公分對應的實際公尺數",
      "target": "用比例求對應實際長度",
      "choices": [
        "4",
        "7.2",
        "9",
        "13.5"
      ],
      "answerIndex": 2,
      "independentSolution": "設實際長度為 x 公尺，4:6=6:x。交叉相乘得 4x=36，所以 x=9。",
      "mainExplanation": "建立「圖上長度:實際長度」的同順序比例，再交叉相乘。",
      "explanation": "建立「圖上長度:實際長度」的同順序比例，再交叉相乘。",
      "steps": [
        "依序寫成圖上:實際=4:6=6:x。",
        "交叉相乘得4x=36。",
        "解得x=9並代回比值。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "4是直接沿用第一段圖上長度。"
        },
        {
          "choice": "7.2",
          "truth": false,
          "reason": "7.2使用了錯誤倍率。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "4:6與6:9比值相同。"
        },
        {
          "choice": "13.5",
          "truth": false,
          "reason": "13.5使用了錯誤放大倍數。"
        }
      ],
      "misconceptionTarget": "比例兩側單位順序不一致或把倍率倒置。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "無單位。",
      "roundingCheck": "0.8、1.2為精確小數。",
      "ambiguityBoundaryAudit": "兩組比均以圖上公分在前、實際公尺在後。",
      "difficultyReason": "標準：維持對應順序並解實際尺度比例。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "64e8747982d30ff1a82ef185762040d9ffed5f7da06d679235943f6f6b96d6de"
    },
    {
      "questionId": "u06-s002-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 3/5:x=9/10:6。",
      "text": "解比例式 3/5:x=9/10:6。",
      "givenConditions": "x≠0，其他分母5、10、6非0。",
      "target": "解分數作為比例項的比例式",
      "choices": [
        "2",
        "3",
        "12",
        "4"
      ],
      "answerIndex": 3,
      "independentSolution": "代入x=4，左比3/20；右比9/60=3/20。",
      "mainExplanation": "把比改寫成分數等式，再交叉相乘。",
      "explanation": "把比改寫成分數等式，再交叉相乘。",
      "steps": [
        "(3/5)/x=(9/10)/6",
        "3/(5x)=3/20",
        "60=15x",
        "x=4"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "2使左比3/10。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "3把兩個3直接約掉。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12是交叉乘積中間值。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "右比(9/10)÷6=3/20；(3/5)/x=3/20，故12=3x，x=4。"
        }
      ],
      "misconceptionTarget": "連續分數除法處理錯誤。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "無單位。",
      "roundingCheck": "精確分數。",
      "ambiguityBoundaryAudit": "題式中的冒號代表除法，括號關係已明確。",
      "difficultyReason": "多層分數運算。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ef6fa42c9ebec5622ae0d0a4c0868c8e89dbcab28d6ed5f4a7678dd1be30b765"
    },
    {
      "questionId": "u06-s002-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 5:(x-2)=3:6。",
      "text": "解比例式 5:(x-2)=3:6。",
      "givenConditions": "x-2不可為0。",
      "target": "解未知數在後項且含平移的比例式",
      "choices": [
        "12",
        "7",
        "8",
        "10"
      ],
      "answerIndex": 0,
      "independentSolution": "代入12後左比5:10=1:2，右比3:6=1:2。",
      "mainExplanation": "交叉相乘並記得最後加回2。",
      "explanation": "交叉相乘並記得最後加回2。",
      "steps": [
        "限制x≠2",
        "5×6=3(x-2)",
        "x-2=10",
        "x=12"
      ],
      "optionAnalysis": [
        {
          "choice": "12",
          "truth": true,
          "reason": "30=3(x-2)，x-2=10，x=12。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7來自5+2。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8把6÷3加2。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "10是x-2的值。"
        }
      ],
      "misconceptionTarget": "忘記分母限制或把x-2當最後答案。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "解12不等於排除值2。",
      "difficultyReason": "兼具定義域與括號。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fafd825b9e8f055f1411b840f3ab8b64cb866ead003362a3cfa53a4cccb83ca1"
    },
    {
      "questionId": "u06-s002-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 (2x-1):9=(x+5):18，則 x 為何？",
      "text": "若 (2x-1):9=(x+5):18，則 x 為何？",
      "givenConditions": "9、18非0。",
      "target": "解兩邊皆含未知數的比例式",
      "choices": [
        "3",
        "7/3",
        "5",
        "7"
      ],
      "answerIndex": 1,
      "independentSolution": "代入x=7/3：左側(11/3):9=11/27，右側(22/3):18=11/27。",
      "mainExplanation": "兩邊都有未知數，交叉相乘後展開括號並合併同類項。",
      "explanation": "兩邊都有未知數，交叉相乘後展開括號並合併同類項。",
      "steps": [
        "18(2x-1)=9(x+5)",
        "36x-18=9x+45",
        "27x=63",
        "x=7/3"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "代入3時左右比值不同。"
        },
        {
          "choice": "7/3",
          "truth": true,
          "reason": "18(2x-1)=9(x+5)，整理得27x=63，所以x=7/3。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "只比較常數會誤得5。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7漏除以係數27。"
        }
      ],
      "misconceptionTarget": "展開括號或最後除法錯誤。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 130,
      "unitCheck": "無單位。",
      "roundingCheck": "精確分數。",
      "ambiguityBoundaryAudit": "兩邊分母固定非0，所得解唯一。",
      "difficultyReason": "多步一元一次方程式。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f93fcf7e86740743a39b3e112b549677d287e55d107a0859fbed993e5120af1e"
    },
    {
      "questionId": "u06-s002-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "解比例式 (x-1):4=(x+5):10。",
      "text": "解比例式 (x-1):4=(x+5):10。",
      "givenConditions": "固定後項4、10非0。",
      "target": "解雙邊含未知數比例式",
      "choices": [
        "3",
        "7",
        "9",
        "5"
      ],
      "answerIndex": 3,
      "independentSolution": "代入5：左4/4=1，右10/10=1。",
      "mainExplanation": "兩邊都有x時，交叉相乘後按一元一次方程式整理。",
      "explanation": "兩邊都有x時，交叉相乘後按一元一次方程式整理。",
      "steps": [
        "10x-10=4x+20",
        "6x=30",
        "x=5"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3使左右分別1/2與4/5。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7來自錯誤移項。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9把常數直接相加。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "10(x-1)=4(x+5)，10x-10=4x+20，6x=30，x=5。"
        }
      ],
      "misconceptionTarget": "交叉相乘後同類項移錯邊。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "代回兩邊皆為1，唯一解。",
      "difficultyReason": "多步代數但仍在國中範圍。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9814e5f04474dada5e35fb5fd725f530c33cf5843ee0ffc74ecd9b6fc8d45952"
    },
    {
      "questionId": "u06-s002-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "影印 12 頁需 18 秒，速度固定。影印 30 頁需多少秒？",
      "text": "影印 12 頁需 18 秒，速度固定。影印 30 頁需多少秒？",
      "givenConditions": "影印速度固定且無啟動時間。",
      "target": "用比例式處理固定速率",
      "choices": [
        "45秒",
        "36秒",
        "40秒",
        "54秒"
      ],
      "answerIndex": 0,
      "independentSolution": "12:18=30:t，12t=540，t=45。",
      "mainExplanation": "每頁18/12=1.5秒，30頁需45秒。",
      "explanation": "每頁18/12=1.5秒，30頁需45秒。",
      "steps": [
        "求每頁時間1.5秒",
        "乘30頁",
        "得45秒"
      ],
      "optionAnalysis": [
        {
          "choice": "45秒",
          "truth": true,
          "reason": "頁數與時間成正比，30/12=2.5，所以18×2.5=45。"
        },
        {
          "choice": "36秒",
          "truth": false,
          "reason": "36秒只乘2。"
        },
        {
          "choice": "40秒",
          "truth": false,
          "reason": "40秒以錯誤單位率計算。"
        },
        {
          "choice": "54秒",
          "truth": false,
          "reason": "54秒把倍數當3。"
        }
      ],
      "misconceptionTarget": "未維持固定速度或倍數算錯。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "頁與秒的對應順序一致。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "情境明示速度固定，故正比模型成立。",
      "difficultyReason": "需把生活敘述轉成比例式。",
      "literacyContextNecessity": "頁數與時間的固定速率是解題必要條件，刪除情境便無法判定正比。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e9d0bee7cc0b61cb8ec98dc539403830b3ebedf8ff2cb2477c6a3e3ab28b7d4f"
    },
    {
      "questionId": "u06-s002-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "4 人份湯需 600 毫升高湯，配方比例不變。做 10 人份需多少毫升？",
      "text": "4 人份湯需 600 毫升高湯，配方比例不變。做 10 人份需多少毫升？",
      "givenConditions": "配方比例固定。",
      "target": "用比例式放大配方",
      "choices": [
        "1000毫升",
        "1500毫升",
        "1200毫升",
        "2400毫升"
      ],
      "answerIndex": 1,
      "independentSolution": "比例式4:600=10:x，4x=6000，x=1500。",
      "mainExplanation": "每人高湯150毫升，10人需1500毫升。",
      "explanation": "每人高湯150毫升，10人需1500毫升。",
      "steps": [
        "600÷4=150",
        "150×10=1500"
      ],
      "optionAnalysis": [
        {
          "choice": "1000毫升",
          "truth": false,
          "reason": "1000把每人量誤算100。"
        },
        {
          "choice": "1500毫升",
          "truth": true,
          "reason": "10/4=2.5倍，600×2.5=1500。"
        },
        {
          "choice": "1200毫升",
          "truth": false,
          "reason": "1200只放大2倍。"
        },
        {
          "choice": "2400毫升",
          "truth": false,
          "reason": "2400把10/4誤成4。"
        }
      ],
      "misconceptionTarget": "人份與材料量對應順序錯誤。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "人份對毫升。",
      "roundingCheck": "無需近似。",
      "ambiguityBoundaryAudit": "未涉及整包限制。",
      "difficultyReason": "情境轉譯與單位率。",
      "literacyContextNecessity": "配方保持不變決定材料量與人份成正比。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ff2296451880261bffc719e1dde1d2d1a26d0818a3b6ee2622931d72353684df"
    },
    {
      "questionId": "u06-s002-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "地圖上 3 公分代表實際 1.2 公里。同一比例尺下，圖上 7.5 公分代表實際多遠？",
      "text": "地圖上 3 公分代表實際 1.2 公里。同一比例尺下，圖上 7.5 公分代表實際多遠？",
      "givenConditions": "同一地圖與比例尺。",
      "target": "以比例式處理比例尺資料",
      "choices": [
        "2.4公里",
        "3.6公里",
        "3公里",
        "4公里"
      ],
      "answerIndex": 2,
      "independentSolution": "3:1.2=7.5:x，3x=9，x=3。",
      "mainExplanation": "同一比例尺下圖上距離與實際距離成正比。",
      "explanation": "同一比例尺下圖上距離與實際距離成正比。",
      "steps": [
        "求圖上倍率2.5",
        "實際距離同乘2.5",
        "得3公里"
      ],
      "optionAnalysis": [
        {
          "choice": "2.4公里",
          "truth": false,
          "reason": "2.4只放大2倍。"
        },
        {
          "choice": "3.6公里",
          "truth": false,
          "reason": "3.6把倍數當3。"
        },
        {
          "choice": "3公里",
          "truth": true,
          "reason": "7.5/3=2.5倍，1.2×2.5=3公里。"
        },
        {
          "choice": "4公里",
          "truth": false,
          "reason": "4來自錯誤相加。"
        }
      ],
      "misconceptionTarget": "把公分與公里直接約分為數值比而忽略對應。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-simplify"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-simplify'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "對應單位分列，不必在比例式中混為同類比。",
      "roundingCheck": "1.2與7.5為精確值。",
      "ambiguityBoundaryAudit": "題目給的是兩組對應量，不是要求化簡公分:公里的單一比。",
      "difficultyReason": "需辨認對應比例。",
      "literacyContextNecessity": "同一比例尺是正比成立的必要資訊。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "14c6f1269588c833ec41f3752485d027988977f9a840b658abc18bfa9764fb0b"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s002-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "解比例式 5:(x-3)=4:10，列出 x 的限制並代回驗算。",
      "target": "含分母限制的比例式",
      "requiredWork": [
        "寫出使比例式有定義的限制。",
        "交叉相乘求x。",
        "代回比較兩邊比值。"
      ],
      "fullCreditSolution": [
        "因x-3不可為0，所以x≠3。",
        "5×10=4(x-3)，50=4x-12，4x=62，x=31/2。",
        "代回x-3=25/2，左比5÷(25/2)=2/5，右比4/10=2/5。"
      ],
      "alternativeSolutions": [
        "可先把4:10化為2:5，再由5:(x-3)=2:5求得2(x-3)=25。"
      ],
      "reasoningSteps": [
        "因x-3不可為0，所以x≠3。",
        "5×10=4(x-3)，50=4x-12，4x=62，x=31/2。",
        "代回x-3=25/2，左比5÷(25/2)=2/5，右比4/10=2/5。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "列x≠3，求得31/2並代回兩邊皆2/5。"
        },
        {
          "score": 2,
          "criteria": "求得31/2且運算完整，但漏限制或驗算其中一項。"
        },
        {
          "score": 1,
          "criteria": "交叉相乘正確但方程整理有單一算術錯誤。"
        },
        {
          "score": 0,
          "criteria": "比例配對錯誤、答案使分母為0或無有效過程。"
        }
      ],
      "partialCreditRules": [
        "限制、求解、驗算各為實質得分點。",
        "答案31/2無過程最多1分。"
      ],
      "followThroughPolicy": "若交叉乘積正確但展開常數出錯，後續依錯誤方程一致求解可保留1分；若比例配對一開始錯誤，不採跟隨給分。",
      "unitNotationRules": "x可寫31/2或15.5；代回分母不得為0。",
      "answerOnlyPolicy": "只答x=15.5，最多1分。",
      "commonErrors": [
        "漏寫x≠3。",
        "50=4x-3。",
        "把x-3解成x。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "x=31/2，且x≠3、代回成立。",
        "ambiguity": "比例式分母固定10與未知後項x-3，限制清楚。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "c02254be95034bf17754995f4775168ad0f5f6b53a7e0047493d2955d9ddc048"
    },
    {
      "questionId": "u06-s002-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-ratio-basics",
      "skillId": "proportion-solve",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "解 (2x+1):6=(x-2):3，並說明是否有解。",
      "target": "判斷比例式無解",
      "requiredWork": [
        "交叉相乘並展開。",
        "判斷等式是否產生矛盾或恆等。",
        "用完整句子說明解集合。"
      ],
      "fullCreditSolution": [
        "3(2x+1)=6(x-2)。",
        "6x+3=6x-12，消去6x後得到3=-12，矛盾。",
        "因此沒有任何x能使原比例式成立；固定後項6、3均非0。"
      ],
      "alternativeSolutions": [
        "也可比較兩邊比值：(2x+1)/6 與 (x-2)/3，通分後分子相差固定15，不可能相等。"
      ],
      "reasoningSteps": [
        "3(2x+1)=6(x-2)。",
        "6x+3=6x-12，消去6x後得到3=-12，矛盾。",
        "因此沒有任何x能使原比例式成立；固定後項6、3均非0。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確得到矛盾3=-12並結論無解。"
        },
        {
          "score": 2,
          "criteria": "判斷無解正確且有主要代數，但展開說明略簡。"
        },
        {
          "score": 1,
          "criteria": "交叉相乘正確，後續整理出現算術錯誤但顯示在判斷解的存在性。"
        },
        {
          "score": 0,
          "criteria": "給出某個數值解且未驗證，或無有效過程。"
        }
      ],
      "partialCreditRules": [
        "無解的理由比只寫『無解』重要。",
        "固定分母無額外排除值。"
      ],
      "followThroughPolicy": "若學生因移項錯誤得到數值，再代回發現不成立並改判無解，可給2分；未修正則最多1分。",
      "unitNotationRules": "使用『無解』或『沒有任何實數解』皆可；本題不需單位。",
      "answerOnlyPolicy": "只寫無解最多1分。",
      "commonErrors": [
        "把6x消去後寫15=0卻未判矛盾。",
        "錯把矛盾當任意解。",
        "直接令對應分子相等。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "無解。",
        "ambiguity": "兩邊固定後項皆非0，矛盾結論不受定義域影響。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "f1a1ad26ad649a892b7936e1fd6d7ebbd2849edf95d57e9deb05939d9e625a51"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s002-v001-semantic-review-r1",
      "questionId": "u06-s002-v001",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "0a5790ebefc1bd496aee20dbdd661734636f3db5eabd9bcf0b7da3807cc16716",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "右比6/15=2/5，因此x/5=2/5，x=2。",
      "derivedAnswer": "2",
      "storedAnswer": "2",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "代入1得1/5≠2/5。",
        "15x=30，所以 x=2。",
        "把15÷5誤當答案。",
        "直接取右比前項。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「求比例式未知前項」，已明示必要條件：兩個後項5、15均非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：x=2唯一使兩邊比值相等。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎一元比例式。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：右比6/15=2/5，因此x/5=2/5，x=2。 正確選項為「2」。逐項檢查後，唯一為真的理由是「15x=30，所以 x=2。」；其餘三項分別因「代入1得1/5≠2/5。」、「把15÷5誤當答案。」、「直接取右比前項。」而排除。邊界與語意再檢查：x=2唯一使兩邊比值相等。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v002-semantic-review-r1",
      "questionId": "u06-s002-v002",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "f76507de213fd6174903ee497fb99abf3068aae3069b6b19b95a91072fecb3a2",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "4/10=2/5，而6/15=2/5，故x=10。",
      "derivedAnswer": "10",
      "storedAnswer": "10",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "8代入得1/2≠2/5。",
        "12來自60÷5。",
        "4×15=6x，60=6x，x=10。",
        "15把未知數直接等同右後項。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「求未知後項」，已明示必要條件：x不可為0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：正數解且代回有定義。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "未知數位於分母，需注意限制。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：4/10=2/5，而6/15=2/5，故x=10。 正確選項為「10」。逐項檢查後，唯一為真的理由是「4×15=6x，60=6x，x=10。」；其餘三項分別因「8代入得1/2≠2/5。」、「12來自60÷5。」、「15把未知數直接等同右後項。」而排除。邊界與語意再檢查：正數解且代回有定義。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v003-semantic-review-r1",
      "questionId": "u06-s002-v003",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "42084e8563afb8c1af3eaf3ac43c1e9a7a0f0d1199da5c886de4034e0d70b366",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "18是6的3倍，前項5也乘3得15。",
      "derivedAnswer": "15",
      "storedAnswer": "15",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "12使右比2/3，不等於5/6。",
        "18使右比1。",
        "30來自5×6而非交叉相乘。",
        "6x=90，x=15。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「以等值比求未知項」，已明示必要條件：後項6、18非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：倍率法與交叉相乘一致。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "可用整數倍快速求解。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：18是6的3倍，前項5也乘3得15。 正確選項為「15」。逐項檢查後，唯一為真的理由是「6x=90，x=15。」；其餘三項分別因「12使右比2/3，不等於5/6。」、「18使右比1。」、「30來自5×6而非交叉相乘。」而排除。邊界與語意再檢查：倍率法與交叉相乘一致。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v004-semantic-review-r1",
      "questionId": "u06-s002-v004",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "44c7cddcf995be3d5e150202d172602c6a53e302ecb66a08f65e981ba6689125",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "右比5/14，所以(x+2)/7=5/14，得x+2=5/2，x=1/2。",
      "derivedAnswer": "1/2",
      "storedAnswer": "1/2",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "14(x+2)=35，x+2=2.5，x=0.5。",
        "3/2是忘記減2的一種結果。",
        "2把x+2誤作x。",
        "5/2是x+2的值，不是x。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「解含括號的比例式」，已明示必要條件：7、14非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：x不在分母，無額外排除值。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確分數。。"
      },
      "difficultyReason": "兩階段代數整理。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：右比5/14，所以(x+2)/7=5/14，得x+2=5/2，x=1/2。 正確選項為「1/2」。逐項檢查後，唯一為真的理由是「14(x+2)=35，x+2=2.5，x=0.5。」；其餘三項分別因「3/2是忘記減2的一種結果。」、「2把x+2誤作x。」、「5/2是x+2的值，不是x。」而排除。邊界與語意再檢查：x不在分母，無額外排除值。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v005-semantic-review-r1",
      "questionId": "u06-s002-v005",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "64e8747982d30ff1a82ef185762040d9ffed5f7da06d679235943f6f6b96d6de",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "設實際長度為 x 公尺，4:6=6:x。交叉相乘得 4x=36，所以 x=9。",
      "derivedAnswer": "9",
      "storedAnswer": "9",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "4是直接沿用第一段圖上長度。",
        "7.2使用了錯誤倍率。",
        "4:6與6:9比值相同。",
        "13.5使用了錯誤放大倍數。"
      ],
      "ambiguityChecks": {
        "wording": "題幹明確要求「用比例求對應實際長度」，沒有第二種合理所求。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "兩組比均以圖上公分在前、實際公尺在後。",
        "rounding": "近似與取整審查：0.8、1.2為精確小數。。"
      },
      "difficultyReason": "標準：維持對應順序並解實際尺度比例。",
      "literacyNecessity": null,
      "reviewerNote": "u06-s002-v005 中央修訂後獨立重算：設實際長度為 x 公尺，4:6=6:x。交叉相乘得 4x=36，所以 x=9。 四個選項逐項核對，唯一正解為「9」；其餘選項排除理由為：4是直接沿用第一段圖上長度。；7.2使用了錯誤倍率。；13.5使用了錯誤放大倍數。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v006-semantic-review-r1",
      "questionId": "u06-s002-v006",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "ef6fa42c9ebec5622ae0d0a4c0868c8e89dbcab28d6ed5f4a7678dd1be30b765",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入x=4，左比3/20；右比9/60=3/20。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "2使左比3/10。",
        "3把兩個3直接約掉。",
        "12是交叉乘積中間值。",
        "右比(9/10)÷6=3/20；(3/5)/x=3/20，故12=3x，x=4。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「解分數作為比例項的比例式」，已明示必要條件：x≠0，其他分母5、10、6非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題式中的冒號代表除法，括號關係已明確。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確分數。。"
      },
      "difficultyReason": "多層分數運算。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入x=4，左比3/20；右比9/60=3/20。 正確選項為「4」。逐項檢查後，唯一為真的理由是「右比(9/10)÷6=3/20；(3/5)/x=3/20，故12=3x，x=4。」；其餘三項分別因「2使左比3/10。」、「3把兩個3直接約掉。」、「12是交叉乘積中間值。」而排除。邊界與語意再檢查：題式中的冒號代表除法，括號關係已明確。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v007-semantic-review-r1",
      "questionId": "u06-s002-v007",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "fafd825b9e8f055f1411b840f3ab8b64cb866ead003362a3cfa53a4cccb83ca1",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入12後左比5:10=1:2，右比3:6=1:2。",
      "derivedAnswer": "12",
      "storedAnswer": "12",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "30=3(x-2)，x-2=10，x=12。",
        "7來自5+2。",
        "8把6÷3加2。",
        "10是x-2的值。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「解未知數在後項且含平移的比例式」，已明示必要條件：x-2不可為0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：解12不等於排除值2。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "兼具定義域與括號。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入12後左比5:10=1:2，右比3:6=1:2。 正確選項為「12」。逐項檢查後，唯一為真的理由是「30=3(x-2)，x-2=10，x=12。」；其餘三項分別因「7來自5+2。」、「8把6÷3加2。」、「10是x-2的值。」而排除。邊界與語意再檢查：解12不等於排除值2。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v008-semantic-review-r1",
      "questionId": "u06-s002-v008",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "f93fcf7e86740743a39b3e112b549677d287e55d107a0859fbed993e5120af1e",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入x=7/3：左側(11/3):9=11/27，右側(22/3):18=11/27。",
      "derivedAnswer": "7/3",
      "storedAnswer": "7/3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "代入3時左右比值不同。",
        "18(2x-1)=9(x+5)，整理得27x=63，所以x=7/3。",
        "只比較常數會誤得5。",
        "7漏除以係數27。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「解兩邊皆含未知數的比例式」，已明示必要條件：9、18非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：兩邊分母固定非0，所得解唯一。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確分數。。"
      },
      "difficultyReason": "多步一元一次方程式。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入x=7/3：左側(11/3):9=11/27，右側(22/3):18=11/27。 正確選項為「7/3」。逐項檢查後，唯一為真的理由是「18(2x-1)=9(x+5)，整理得27x=63，所以x=7/3。」；其餘三項分別因「代入3時左右比值不同。」、「只比較常數會誤得5。」、「7漏除以係數27。」而排除。邊界與語意再檢查：兩邊分母固定非0，所得解唯一。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v009-semantic-review-r1",
      "questionId": "u06-s002-v009",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "9814e5f04474dada5e35fb5fd725f530c33cf5843ee0ffc74ecd9b6fc8d45952",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入5：左4/4=1，右10/10=1。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "3使左右分別1/2與4/5。",
        "7來自錯誤移項。",
        "9把常數直接相加。",
        "10(x-1)=4(x+5)，10x-10=4x+20，6x=30，x=5。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「解雙邊含未知數比例式」，已明示必要條件：固定後項4、10非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：代回兩邊皆為1，唯一解。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "多步代數但仍在國中範圍。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入5：左4/4=1，右10/10=1。 正確選項為「5」。逐項檢查後，唯一為真的理由是「10(x-1)=4(x+5)，10x-10=4x+20，6x=30，x=5。」；其餘三項分別因「3使左右分別1/2與4/5。」、「7來自錯誤移項。」、「9把常數直接相加。」而排除。邊界與語意再檢查：代回兩邊皆為1，唯一解。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v010-semantic-review-r1",
      "questionId": "u06-s002-v010",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "e9d0bee7cc0b61cb8ec98dc539403830b3ebedf8ff2cb2477c6a3e3ab28b7d4f",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "12:18=30:t，12t=540，t=45。",
      "derivedAnswer": "45秒",
      "storedAnswer": "45秒",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "頁數與時間成正比，30/12=2.5，所以18×2.5=45。",
        "36秒只乘2。",
        "40秒以錯誤單位率計算。",
        "54秒把倍數當3。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「用比例式處理固定速率」，已明示必要條件：影印速度固定且無啟動時間。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：頁與秒的對應順序一致。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：情境明示速度固定，故正比模型成立。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需把生活敘述轉成比例式。",
      "literacyNecessity": "頁數與時間的固定速率是解題必要條件，刪除情境便無法判定正比。",
      "reviewerNote": "獨立重算：12:18=30:t，12t=540，t=45。 正確選項為「45秒」。逐項檢查後，唯一為真的理由是「頁數與時間成正比，30/12=2.5，所以18×2.5=45。」；其餘三項分別因「36秒只乘2。」、「40秒以錯誤單位率計算。」、「54秒把倍數當3。」而排除。邊界與語意再檢查：情境明示速度固定，故正比模型成立。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v011-semantic-review-r1",
      "questionId": "u06-s002-v011",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "ff2296451880261bffc719e1dde1d2d1a26d0818a3b6ee2622931d72353684df",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "比例式4:600=10:x，4x=6000，x=1500。",
      "derivedAnswer": "1500毫升",
      "storedAnswer": "1500毫升",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "1000把每人量誤算100。",
        "10/4=2.5倍，600×2.5=1500。",
        "1200只放大2倍。",
        "2400把10/4誤成4。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「用比例式放大配方」，已明示必要條件：配方比例固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：人份對毫升。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：未涉及整包限制。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無需近似。。"
      },
      "difficultyReason": "情境轉譯與單位率。",
      "literacyNecessity": "配方保持不變決定材料量與人份成正比。",
      "reviewerNote": "獨立重算：比例式4:600=10:x，4x=6000，x=1500。 正確選項為「1500毫升」。逐項檢查後，唯一為真的理由是「10/4=2.5倍，600×2.5=1500。」；其餘三項分別因「1000把每人量誤算100。」、「1200只放大2倍。」、「2400把10/4誤成4。」而排除。邊界與語意再檢查：未涉及整包限制。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s002-v012-semantic-review-r1",
      "questionId": "u06-s002-v012",
      "unitId": "u06",
      "skillId": "proportion-solve",
      "contentSha256": "14c6f1269588c833ec41f3752485d027988977f9a840b658abc18bfa9764fb0b",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "3:1.2=7.5:x，3x=9，x=3。",
      "derivedAnswer": "3公里",
      "storedAnswer": "3公里",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "2.4只放大2倍。",
        "3.6把倍數當3。",
        "7.5/3=2.5倍，1.2×2.5=3公里。",
        "4來自錯誤相加。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「以比例式處理比例尺資料」，已明示必要條件：同一地圖與比例尺。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：對應單位分列，不必在比例式中混為同類比。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題目給的是兩組對應量，不是要求化簡公分:公里的單一比。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：1.2與7.5為精確值。。"
      },
      "difficultyReason": "需辨認對應比例。",
      "literacyNecessity": "同一比例尺是正比成立的必要資訊。",
      "reviewerNote": "獨立重算：3:1.2=7.5:x，3x=9，x=3。 正確選項為「3公里」。逐項檢查後，唯一為真的理由是「7.5/3=2.5倍，1.2×2.5=3公里。」；其餘三項分別因「2.4只放大2倍。」、「3.6把倍數當3。」、「4來自錯誤相加。」而排除。邊界與語意再檢查：題目給的是兩組對應量，不是要求化簡公分:公里的單一比。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": []
};
