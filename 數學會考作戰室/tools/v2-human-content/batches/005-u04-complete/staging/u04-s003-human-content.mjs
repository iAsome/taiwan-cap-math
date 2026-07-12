// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s003-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-basics",
  "skillId": "system-solution-meaning",
  "lockedSkillTitle": "聯立方程式解的意義",
  "title": "聯立方程式解的意義：同一組數要同時滿足兩個條件",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "聯立方程式解的意義",
    "scope": "理解聯立方程式的解必須同時滿足兩個方程式。"
  },
  "prerequisiteBridge": "先備技能 system-ordered-pair-solution-check 已建立必要基礎；本節將其用於「理解聯立方程式的解必須同時滿足兩個方程式。」",
  "learningGoals": [
    "理解大括號內兩式必須同時成立。",
    "能檢驗一個有序數對是否為聯立方程式的解。",
    "能由共同解反求參數。",
    "能辨別只滿足其中一式不算解。"
  ],
  "vocabulary": [
    {
      "term": "聯立方程式",
      "definition": "把兩個含相同未知數的方程式一起考慮。"
    },
    {
      "term": "共同解",
      "definition": "同時滿足所有方程式的有序數對。"
    },
    {
      "term": "條件",
      "definition": "每一個方程式代表一項限制。"
    },
    {
      "term": "參數",
      "definition": "題目中待由條件確定的字母常數。"
    }
  ],
  "notation": [
    {
      "symbol": "{…",
      "meaning": "大括號表示方程式要同時成立。"
    },
    {
      "symbol": "(x,y)=(a,b)",
      "meaning": "表示共同解為 x=a、y=b。"
    }
  ],
  "conceptDevelopment": [
    "單一方程式像一個條件，通常容許許多數對；兩個條件同時套用後，可能剩一組、沒有或仍有很多組。",
    "檢驗共同解時，必須把同一組 x、y 分別代入兩式。",
    "若題目說某數對是解，就能把它代入每一式，反求其中的未知參數。"
  ],
  "definitions": [
    {
      "name": "聯立方程式的解",
      "statement": "同時使聯立中每個方程式成立的有序數對。"
    },
    {
      "name": "只滿足一式",
      "statement": "不具備共同解資格。"
    }
  ],
  "formulas": [
    {
      "formula": "共同解集合＝各方程式解集合的共同部分",
      "conditions": [
        "本單元以語意理解，不使用高中集合符號運算。"
      ],
      "meaning": "強調同時滿足。"
    }
  ],
  "invalidUseCases": [
    "不能分別用不同的數對滿足兩式。",
    "不能只檢查較簡單的一式。",
    "參數反求時，每一式給出的參數條件都要一致。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "寫出候選 x、y",
      "check": "保持同一組數。"
    },
    {
      "step": 2,
      "instruction": "代入第一式",
      "check": "計算並記錄是否成立。"
    },
    {
      "step": 3,
      "instruction": "代入第二式",
      "check": "重新計算。"
    },
    {
      "step": 4,
      "instruction": "兩式都成立才接受",
      "check": "任一式不成立就排除。"
    },
    {
      "step": 5,
      "instruction": "需要時解參數",
      "check": "利用成立的等式求參數。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "判斷 (2,1) 是否為 x+y=3、2x-y=3 的共同解。",
      "solutionSteps": [
        "第一式 2+1=3。",
        "第二式 4-1=3。"
      ],
      "answer": "是共同解。"
    },
    {
      "exampleId": "L2",
      "prompt": "判斷 (1,2) 是否為同一聯立的解。",
      "solutionSteps": [
        "第一式成立。",
        "第二式 2-2=0≠3。"
      ],
      "answer": "不是共同解。"
    },
    {
      "exampleId": "L3",
      "prompt": "已知 (3,-1) 為 x+ay=5 的解，求 a。",
      "solutionSteps": [
        "代入 3-a=5。",
        "-a=2。"
      ],
      "answer": "a=-2。"
    },
    {
      "exampleId": "L4",
      "prompt": "若 (p,q) 同時滿足 p+q=8 與 p-q=2，說明兩式提供的資訊。",
      "solutionSteps": [
        "第一式限制總和。",
        "第二式限制差。",
        "同一組 p、q 必須兼顧兩者。"
      ],
      "answer": "共同解同時符合總和 8、差 2。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "兩式各找一組不同的解",
      "correction": "聯立要求同一組數。"
    },
    {
      "mistake": "第一式成立就停止",
      "correction": "仍需檢查第二式。"
    },
    {
      "mistake": "把參數當成第三個未知數任意變動",
      "correction": "參數在同一題中是固定數。"
    },
    {
      "mistake": "誤認無法立刻看出就代表無解",
      "correction": "需要用解法或檢驗判斷。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "(2,2) 是否同時滿足 x+y=4、x-y=0？",
      "answer": "是。"
    },
    {
      "prompt": "(4,0) 呢？",
      "answer": "只滿足第一式，不是共同解。"
    },
    {
      "prompt": "共同解可用兩組不同數代入兩式嗎？",
      "answer": "不可以。"
    },
    {
      "prompt": "已知解能做什麼？",
      "answer": "可代入每一式檢驗或反求參數。"
    }
  ],
  "summary": [
    "聯立方程式的解必須同時滿足全部方程式。",
    "檢驗時同一組數要代入兩式。",
    "只滿足一式不算共同解。"
  ],
  "connections": {
    "previous": "先備技能 system-ordered-pair-solution-check 已建立必要基礎；本節將其用於「理解聯立方程式的解必須同時滿足兩個方程式。」",
    "next": "下一技能「代入消去法」會延伸目前能力。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "檢查了「同一組數」這個核心語意，示例包含只滿足一式的反例與參數反求；未使用圖形交點或矩陣等後續知識。",
    "reviewNote": "檢查了「同一組數」這個核心語意，示例包含只滿足一式的反例與參數反求；未使用圖形交點或矩陣等後續知識。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "79e30672d7335b1aa1ac0cdf7d2d3f7765f7a788906cdd6d4bb37903dd7c2de6"
};

export const QUESTIONS = [
  {
    "questionId": "u04-s003-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "聯立方程式的解必須滿足什麼條件？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "說出聯立解的核心定義",
    "choices": [
      "只滿足第一式",
      "分別用不同數對滿足各式",
      "同時滿足所有方程式",
      "使兩式左邊相等即可"
    ],
    "answerIndex": 2,
    "independentSolution": "依定義，聯立解是同一組 x、y 使每個方程式都成立。",
    "explanation": "「聯立」表示條件同時成立。",
    "steps": [
      "讀取共同解定義。",
      "排除只滿足部分條件。"
    ],
    "optionAnalysis": [
      {
        "choice": "只滿足第一式",
        "truth": false,
        "reason": "另一式仍可能不成立。"
      },
      {
        "choice": "分別用不同數對滿足各式",
        "truth": false,
        "reason": "共同解必須是同一組數。"
      },
      {
        "choice": "同時滿足所有方程式",
        "truth": true,
        "reason": "共同解必須滿足聯立中的每一個條件。"
      },
      {
        "choice": "使兩式左邊相等即可",
        "truth": false,
        "reason": "還必須各自等於右邊。"
      }
    ],
    "misconceptionTarget": "把兩式分開處理",
    "prerequisiteCheck": "只需先備 system-ordered-pair-solution-check，並使用本技能「聯立方程式解的意義」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「說出聯立解的核心定義」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "純定義辨認。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "5b3fc1b7c93dcf8d3de0af41964276648cda948826850a0b524a484937951d32"
  },
  {
    "questionId": "u04-s003-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "(2,1) 是否為 {x+y=3，2x-y=3} 的解？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "檢驗簡單共同解",
    "choices": [
      "否，只滿足第一式",
      "否，只滿足第二式",
      "無法判斷",
      "是"
    ],
    "answerIndex": 3,
    "independentSolution": "第一式 2+1=3；第二式 4-1=3，兩式都成立。",
    "explanation": "同一數對滿足兩個等式，因此為共同解。",
    "steps": [
      "代入第一式。",
      "代入第二式。",
      "確認皆成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "否，只滿足第一式",
        "truth": false,
        "reason": "第二式 4-1=3 也成立。"
      },
      {
        "choice": "否，只滿足第二式",
        "truth": false,
        "reason": "第一式 2+1=3 也成立。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "直接代入兩式即可。"
      },
      {
        "choice": "是",
        "truth": true,
        "reason": "兩個方程式代入後都成立。"
      }
    ],
    "misconceptionTarget": "只檢查一式",
    "prerequisiteCheck": "只需先備 system-ordered-pair-solution-check，並使用本技能「聯立方程式解的意義」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「檢驗簡單共同解」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "兩次直接代入。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "2242e79f614de6904c7251843cf54ea2fe7e8b0ea258e4a9f132a0afe3b9d493"
  },
  {
    "questionId": "u04-s003-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "(4,0) 滿足 x+y=4，但不滿足 x-y=2。它是這組聯立方程式的解嗎？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認只滿足一式的反例",
    "choices": [
      "不是",
      "是，因為第一式成立",
      "是，因為 y=0",
      "要看是否為整數"
    ],
    "answerIndex": 0,
    "independentSolution": "第二式代入為 4-0=4≠2，因此不是共同解。",
    "explanation": "任一方程式不成立就排除。",
    "steps": [
      "保留第一式成立資訊。",
      "檢查第二式。",
      "因第二式失敗而否決。"
    ],
    "optionAnalysis": [
      {
        "choice": "不是",
        "truth": true,
        "reason": "第二個條件不成立，所以不具共同解資格。"
      },
      {
        "choice": "是，因為第一式成立",
        "truth": false,
        "reason": "只滿足一式不夠。"
      },
      {
        "choice": "是，因為 y=0",
        "truth": false,
        "reason": "y 的值不保證第二式。"
      },
      {
        "choice": "要看是否為整數",
        "truth": false,
        "reason": "整數性不是共同解的充分條件。"
      }
    ],
    "misconceptionTarget": "第一式成立就停止",
    "prerequisiteCheck": "只需先備 system-ordered-pair-solution-check，並使用本技能「聯立方程式解的意義」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認只滿足一式的反例」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需要理解全稱條件。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "dcab19109e41d64096a8fdde8beeb3c5d28aad5159a8619f51477a3a61881c29"
  },
  {
    "questionId": "u04-s003-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "已知 (3,-1) 是 {x+y=2，kx-y=7} 的解，k 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由共同解反求參數",
    "choices": [
      "8/3",
      "2",
      "3",
      "-2"
    ],
    "answerIndex": 1,
    "independentSolution": "第二式代入得 3k-(-1)=7，即 3k+1=7，k=2；第一式也成立。",
    "explanation": "已知共同解可代入含參數的方程式。",
    "steps": [
      "先確認第一式 3-1=2。",
      "第二式代入並解 3k+1=7。"
    ],
    "optionAnalysis": [
      {
        "choice": "8/3",
        "truth": false,
        "reason": "把 -y 寫成 -1。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "k=2 時第二式為 6+1=7。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "直接取 x 值。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "忽略 y=-1 使 -y=+1。"
      }
    ],
    "misconceptionTarget": "負數代入 -y 時符號錯",
    "prerequisiteCheck": "只需先備 system-ordered-pair-solution-check，並使用本技能「聯立方程式解的意義」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由共同解反求參數」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "包含雙式確認與參數求解。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f87c444e7b388901e56b1be5617e649207b054ccfcd3c855b6282bd0c871c8db"
  },
  {
    "questionId": "u04-s003-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "哪一組是 {2x+y=8，x-y=1} 的共同解？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從候選中找共同解",
    "choices": [
      "(2,4)",
      "(4,0)",
      "(1,6)",
      "(3,2)"
    ],
    "answerIndex": 3,
    "independentSolution": "(3,2) 代入第一式 6+2=8，第二式 3-2=1。",
    "explanation": "多個選項可能滿足第一式，必須再用第二式篩選。",
    "steps": [
      "逐組檢查第一式。",
      "再檢查第二式。",
      "保留兩式均成立者。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2,4)",
        "truth": false,
        "reason": "第一式成立但第二式 -2。"
      },
      {
        "choice": "(4,0)",
        "truth": false,
        "reason": "第一式成立但第二式 4。"
      },
      {
        "choice": "(1,6)",
        "truth": false,
        "reason": "第一式成立但第二式 -5。"
      },
      {
        "choice": "(3,2)",
        "truth": true,
        "reason": "(3,2) 同時使兩式成立。"
      }
    ],
    "misconceptionTarget": "只用一個方程式篩選",
    "prerequisiteCheck": "只需先備 system-ordered-pair-solution-check，並使用本技能「聯立方程式解的意義」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從候選中找共同解」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "設計多個第一式解，迫使使用第二條件。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "764e4d739957ca5d2f0aafb2071210c194d07df72a6b29fa40dfd69f38504cd2"
  },
  {
    "questionId": "u04-s003-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "若聯立方程式的共同解為 (1,4)，下列哪個方程式可作為其中一式？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由共同解反向選擇方程式",
    "choices": [
      "3x+y=7",
      "x+y=4",
      "2x-y=0",
      "x-2y=7"
    ],
    "answerIndex": 0,
    "independentSolution": "代入 (1,4)：3×1+4=7。",
    "explanation": "任何聯立中的方程式都必須被共同解滿足。",
    "steps": [
      "將候選解代入各式。",
      "找等號成立者。"
    ],
    "optionAnalysis": [
      {
        "choice": "3x+y=7",
        "truth": true,
        "reason": "(1,4) 代入後左右相等。"
      },
      {
        "choice": "x+y=4",
        "truth": false,
        "reason": "代入得 5。"
      },
      {
        "choice": "2x-y=0",
        "truth": false,
        "reason": "代入得 -2。"
      },
      {
        "choice": "x-2y=7",
        "truth": false,
        "reason": "代入得 -7。"
      }
    ],
    "misconceptionTarget": "只看式子外觀不代入",
    "prerequisiteCheck": "只需先備 system-ordered-pair-solution-check，並使用本技能「聯立方程式解的意義」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由共同解反向選擇方程式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "逆向運用解的定義。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "ab0f6734205fa23bbed28e75fb8168540f74fc3d0ae23f11c1bd850bab02c36c"
  },
  {
    "questionId": "u04-s003-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "已知 (a,b) 是 {a+b=10，a-b=4} 的共同解，2a+3b 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由共同解求線性衍生量",
    "choices": [
      "17",
      "20",
      "23",
      "27"
    ],
    "answerIndex": 2,
    "independentSolution": "兩式相加得 2a=14，所以 a=7；代回 a+b=10 得 b=3，因此 2a+3b=14+9=23。",
    "explanation": "先由兩個共同條件求出有序數對，再計算指定的一次式。",
    "steps": [
      "將兩式相加求 a=7。",
      "代回求 b=3。",
      "計算 2a+3b=23。"
    ],
    "optionAnalysis": [
      {
        "choice": "17",
        "truth": false,
        "reason": "只使用其中一個條件，未正確求出 a、b。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "把 2(a+b) 當成完整答案，漏算額外的 b。"
      },
      {
        "choice": "23",
        "truth": true,
        "reason": "a=7、b=3，所以 2×7+3×3=23。"
      },
      {
        "choice": "27",
        "truth": false,
        "reason": "把 a、b 的順序交換後代入。"
      }
    ],
    "misconceptionTarget": "只使用一式或交換 a、b 的順序",
    "prerequisiteCheck": "只需先備 system-ordered-pair-solution-check，並使用本技能「聯立方程式解的意義」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由共同解求線性衍生量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本單元的加減、回代與一次式運算。",
    "difficultyReason": "需要整合兩個條件、回代並再計算一次式。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "58dd465ef6e7bca54be301e2828eef3e2db1084ba131abfb643f644a26e0be80"
  },
  {
    "questionId": "u04-s003-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "若 (2,m) 同時滿足 x+y=5 與 ax+2y=10，且 a=2，m 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "選擇較簡單條件並雙式驗證",
    "choices": [
      "1",
      "3",
      "4",
      "6"
    ],
    "answerIndex": 1,
    "independentSolution": "第一式給 2+m=5，m=3；第二式驗證 4+6=10。",
    "explanation": "共同解可先由較簡單一式求值，再用另一式檢驗。",
    "steps": [
      "用第一式求 m。",
      "代入第二式確認。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "由第二式單獨誤解。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "m=3 同時滿足兩式。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "把 x=2 當 y。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "將 5+1 誤作答案。"
      }
    ],
    "misconceptionTarget": "求出後未檢查第二式",
    "prerequisiteCheck": "只需先備 system-ordered-pair-solution-check，並使用本技能「聯立方程式解的意義」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「選擇較簡單條件並雙式驗證」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需要策略選式與驗證。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b8cde10dc25b52cdfe12c0c020f7f96e32005243803817879b68ee6eb8b28949"
  },
  {
    "questionId": "u04-s003-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "若同一組 (x,y) 分別滿足 x+y=6 與 2x+2y=k，k 必須是多少？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由共同解條件反求相依方程式常數",
    "choices": [
      "12",
      "6",
      "8",
      "18"
    ],
    "answerIndex": 0,
    "independentSolution": "第二式左邊是 2(x+y)，而 x+y=6，所以 k=12。",
    "explanation": "第二條件若是第一式左邊的兩倍，右邊也必須兩倍。",
    "steps": [
      "提取 2(x+y)。",
      "代入 x+y=6。",
      "得到 k=12。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": true,
        "reason": "2x+2y=2(x+y)=12。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "漏乘 2。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "任意改變常數。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "把 6 加倍後再加 6。"
      }
    ],
    "misconceptionTarget": "只放大左邊不放大右邊",
    "prerequisiteCheck": "只需先備 system-ordered-pair-solution-check，並使用本技能「聯立方程式解的意義」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由共同解條件反求相依方程式常數」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需辨認整式倍數關係。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7bcc6129f6284cdbf7e0687f5dcfd6cd213e548bf0dc204dbc90ad81dfe2e754"
  },
  {
    "questionId": "u04-s003-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "活動規則要求每組同時滿足「總人數 8」與「成人比學生多 2」。若某組為成人 5 人、學生 3 人，是否合格？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "用共同解語意檢查活動資格",
    "choices": [
      "不合格，因成人不是 8 人",
      "不合格，因差為 8",
      "只符合其中一項",
      "合格"
    ],
    "answerIndex": 3,
    "independentSolution": "設成人 x、學生 y；(5,3) 同時滿足 x+y=8、x-y=2。",
    "explanation": "兩項活動規則等同兩個聯立條件。",
    "steps": [
      "檢查總人數。",
      "檢查人數差。",
      "兩者均通過。"
    ],
    "optionAnalysis": [
      {
        "choice": "不合格，因成人不是 8 人",
        "truth": false,
        "reason": "8 是總人數。"
      },
      {
        "choice": "不合格，因差為 8",
        "truth": false,
        "reason": "差是 2。"
      },
      {
        "choice": "只符合其中一項",
        "truth": false,
        "reason": "5+3=8 且 5-3=2。"
      },
      {
        "choice": "合格",
        "truth": true,
        "reason": "5+3=8 且 5-3=2。"
      }
    ],
    "misconceptionTarget": "把總數條件套到單一類別",
    "prerequisiteCheck": "只需先備 system-ordered-pair-solution-check，並使用本技能「聯立方程式解的意義」。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有人數單位皆為人。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「用共同解語意檢查活動資格」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "兩條規則都是合格判定的必要條件。",
    "literacyContextNecessity": "若刪除任一規則，合格判定會改變，因此情境是數學必要資訊。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "1e978a226997ffdfabdadd67039970667f34743031c69db4a9117b75141b7b5b"
  },
  {
    "questionId": "u04-s003-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "某物流方案要求箱數 (x,y) 同時滿足 x+2y=14 與 3x+y=17。表格中的哪列通過兩項檢查？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從表格選共同解",
    "choices": [
      "(2,6)",
      "(4,5)",
      "(6,4)",
      "(10,2)"
    ],
    "answerIndex": 1,
    "independentSolution": "(4,5)：4+2×5=14，3×4+5=17，兩項都成立。",
    "explanation": "逐列檢查可避免只符合第一限制的假候選。",
    "steps": [
      "代入第一限制。",
      "代入第二限制。",
      "確認同時成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2,6)",
        "truth": false,
        "reason": "第一式成立，但第二式 12。"
      },
      {
        "choice": "(4,5)",
        "truth": true,
        "reason": "(4,5) 代入兩式分別得到 14 與 17。"
      },
      {
        "choice": "(6,4)",
        "truth": false,
        "reason": "第一式成立，但第二式 22。"
      },
      {
        "choice": "(10,2)",
        "truth": false,
        "reason": "第一式成立，但第二式 32。"
      }
    ],
    "misconceptionTarget": "只檢查第一條限制",
    "prerequisiteCheck": "只需先備 system-ordered-pair-solution-check，並使用本技能「聯立方程式解的意義」。",
    "estimatedTimeSec": 90,
    "unitCheck": "x、y 都是箱數，兩式各項單位依模型為標準化容量單位。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從表格選共同解」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "多個候選都滿足第一式，必須使用第二式。",
    "literacyContextNecessity": "兩項物流容量規則共同決定可接受列，情境不可刪除。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "11a8ead6891a6d8483cc8f6184e6348c2d855e5e0aae2351317d85ab61051b82"
  },
  {
    "questionId": "u04-s003-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "一個密碼鎖接受數對 (x,y) 的條件是 x+y=9 且 2x-y=3。哪組輸入會解鎖？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "用雙條件判定輸入",
    "choices": [
      "(5,4)",
      "(3,6)",
      "(4,5)",
      "(6,3)"
    ],
    "answerIndex": 2,
    "independentSolution": "(4,5)：4+5=9，8-5=3，兩條規則均成立。",
    "explanation": "解鎖條件具有聯立語意，任一規則失敗都不接受。",
    "steps": [
      "檢查和。",
      "檢查加權差。",
      "確認同時成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "(5,4)",
        "truth": false,
        "reason": "第一式成立，但第二式 6。"
      },
      {
        "choice": "(3,6)",
        "truth": false,
        "reason": "第二式 0。"
      },
      {
        "choice": "(4,5)",
        "truth": true,
        "reason": "(4,5) 同時通過兩條檢查。"
      },
      {
        "choice": "(6,3)",
        "truth": false,
        "reason": "第二式 9。"
      }
    ],
    "misconceptionTarget": "只通過一條規則就接受",
    "prerequisiteCheck": "只需先備 system-ordered-pair-solution-check，並使用本技能「聯立方程式解的意義」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「用雙條件判定輸入」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "情境中的雙重驗證不可刪除。",
    "literacyContextNecessity": "密碼鎖要求兩條規則同時成立，正是共同解的必要語意。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "cf8f52ee565f75a0624c5b7c4c00f474ffb8c8090fd666b23b4b5340feea0dc5"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s003-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "standard",
    "itemType": "constructed-response",
    "prompt": "檢驗 (3,2) 是否為聯立方程式 2x+y=8、x-y=1 的解；若是，解釋為何只驗第一式不夠。",
    "requiredWork": [
      "分別代入兩式。",
      "說明“同時滿足”。"
    ],
    "standardSolution": [
      "第一式：2×3+2=8。",
      "第二式：3-2=1。",
      "兩式都成立，所以 (3,2) 是共同解。",
      "只驗第一式無法排除滿足第一式但不滿足第二式的數對。"
    ],
    "alternativeMethods": [
      "可舉 (2,4) 滿足第一式但不滿足第二式作為反例。"
    ],
    "reasoningSteps": [
      "同一數對代入兩式。",
      "解釋共同解邏輯。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩次代入、結論與邏輯說明完整。"
      },
      {
        "score": 2,
        "criteria": "兩式均驗對但解釋略短，或有一處書寫瑕疵。"
      },
      {
        "score": 1,
        "criteria": "只正確檢驗一式並提到需兩式都成立。"
      },
      {
        "score": 0,
        "criteria": "只寫答案而無檢驗，或誤認為一式成立即可。"
      }
    ],
    "partialCreditRules": [
      "兩式驗證各一分，解釋共同解一分。"
    ],
    "followThroughPolicy": "若一式有算術小錯，但明確執行兩式驗證，仍可給方法分。",
    "unitNotationRules": "本題無單位。",
    "answerOnlyPolicy": "只答「是」最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "(3,2) 是共同解。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立核對兩式左值為 8 與 1，並以反例確認雙式檢驗必要。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "ac6d3a68ea6300c449a7b65850e7276b1def036ba8dfa12726e8484107b1f791"
  },
  {
    "questionId": "u04-s003-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "已知 (2,-1) 是聯立方程式 x+y=1、kx-3y=9 的解。求 k，並用兩式驗證。",
    "requiredWork": [
      "用第二式求 k。",
      "第一式與第二式都要回驗。"
    ],
    "standardSolution": [
      "第一式：2+(-1)=1。",
      "第二式：2k-3(-1)=9，2k+3=9，k=3。",
      "回驗 k=3：6+3=9。"
    ],
    "alternativeMethods": [
      "可先由第二式整理 k=(9+3y)/x，再代入 x=2、y=-1。"
    ],
    "reasoningSteps": [
      "先確認共同解第一條件。",
      "求參數。",
      "回驗。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "k=3 且兩式驗證完整。"
      },
      {
        "score": 2,
        "criteria": "k 正確但少一式驗證。"
      },
      {
        "score": 1,
        "criteria": "列出 2k+3=9 但後續算錯，或只驗證一式。"
      },
      {
        "score": 0,
        "criteria": "未正確代入負數。"
      }
    ],
    "partialCreditRules": [
      "參數求解兩分，完整共同解驗證一分。"
    ],
    "followThroughPolicy": "若把 -3(-1) 算成 -3，後續依該式求 k可給 1 分方法分。",
    "unitNotationRules": "k 無單位；負數代入須加括號。",
    "answerOnlyPolicy": "只答 k=3 最高 2 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "k=3。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立代入確認 (2,-1) 同時使兩式成為 1=1 與 9=9。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "706e99484bd504c0c0be2686bd55960640461ccede7838199dd01641d5bc6000"
  }
];

export const DRAWING_SPECS = [];
