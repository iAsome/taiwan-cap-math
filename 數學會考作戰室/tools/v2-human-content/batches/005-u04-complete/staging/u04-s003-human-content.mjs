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
      "exampleId": "u04-s003-example-a",
      "prompt": "檢驗 (1,2) 是否同時符合 x+y=3 與 2x+y=4。",
      "solutionSteps": [
        "第一式代入得 1+2=3。",
        "第二式代入得 2×1+2=4。"
      ],
      "answer": "(1,2) 是這組聯立方程式的解。",
      "why": "同一組 x=1、y=2 分別使兩個方程式左右相等，所以通過全部條件。兩次驗算缺一不可，正是共同解與單一方程式解的差別。"
    },
    {
      "exampleId": "u04-s003-example-b",
      "prompt": "判斷 (5,1) 是否為 x+y=6、x-y=2 的共同解。",
      "solutionSteps": [
        "第一式得 5+1=6，成立。",
        "第二式得 5-1=4，不等於二。"
      ],
      "answer": "不是共同解。",
      "why": "雖然這組數滿足總和條件，卻不滿足差額條件。聯立方程式使用「且」連結限制，任何一式失敗就足以排除候選數對。"
    },
    {
      "exampleId": "u04-s003-example-c",
      "prompt": "已知 (2,3) 是 x-y=-1、kx+y=11 的解，求 k。",
      "solutionSteps": [
        "先驗第一式 2-3=-1。",
        "第二式代入得 2k+3=11，解得 k=4。"
      ],
      "answer": "k=4。",
      "why": "指定數對必須同時符合兩式；第一式確認順序無誤，第二式化為一元方程式。回代可得 4×2+3=11，證明參數四確實有效。"
    },
    {
      "exampleId": "u04-s003-example-d",
      "prompt": "甲乙共十二件且甲比乙多四件，檢查 (8,4) 是否符合。",
      "solutionSteps": [
        "總數檢查為 8+4=12。",
        "差額檢查為 8-4=4。"
      ],
      "answer": "這組數量符合兩項條件。",
      "why": "八件與四件不僅總和為十二，差額也正好為四，因此同時滿足情境形成的兩個方程式。只核對總數不足以確定分配。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "滿足第一式就直接宣稱是共同解。",
      "why": "把聯立條件中的「且」誤讀成「或」。",
      "correction": "同一數對必須逐式檢驗，全部成立才能接受。"
    },
    {
      "mistake": "兩個方程式各代入不同數對。",
      "why": "忽略未知數代表同一組量。",
      "correction": "先固定 x、y 值，再將它們帶入每一式。"
    },
    {
      "mistake": "第二式驗算時交換 x、y。",
      "why": "沒有維持有序數對的固定分量。",
      "correction": "在每個式子旁重寫 x、y 的指定值。"
    },
    {
      "mistake": "含參數時只求參數不驗其他方程式。",
      "why": "未確認指定數對本身是否符合全部條件。",
      "correction": "先驗不含參數式，求參數後再做全式回驗。"
    },
    {
      "mistake": "把同一資訊倍乘後當成新的獨立限制。",
      "why": "沒有比較兩個方程式是否等價。",
      "correction": "檢查係數與常數是否整體成相同比例。"
    },
    {
      "mistake": "情境資料只核對總數。",
      "why": "忽略差額、費用或規格等第二條件。",
      "correction": "把每句限制各列一式並逐項檢查。"
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
  "contentSha256": "dac82f9fded37a80bec80e4d367ea4a1bda6e2cebc6c463b21f87aae18d87d00",
  "conceptNarrative": [
    "聯立方程式把兩個或更多條件同時放在同一組未知數上。它的解是一個有序數對，代入後必須讓每一個方程式都成立；只通過其中一式，只能稱為該單一方程式的解。",
    "檢驗共同解時，每個方程式都使用完全相同的 x、y 值。可把它想成兩道篩選：第一式先保留一群候選，第二式再從中留下同時符合者，不能在兩式間更換數值。",
    "若題目已指定共同解並要求參數，可以把同一數對代入含參數的方程式，化成一元一次方程式求參數；求出後仍應代回全部原式，確認沒有符號或順序錯誤。",
    "生活情境常以總數、差額、費用或規格形成兩條限制。某組資料只有在每一項限制都通過時才合格；表格、裝置或密碼鎖的名稱不會改變共同解必須同時成立的核心意義。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "將候選有序數對依第一分量為 x、第二分量為 y 寫清楚。",
      "check": "兩個方程式將使用同一組 x、y，沒有交換或另取數值。"
    },
    {
      "step": 2,
      "instruction": "代入第一個方程式，計算左邊並與右邊比較。",
      "check": "第一式的代入、運算與相等判定都有完整紀錄。"
    },
    {
      "step": 3,
      "instruction": "不論第一式結果如何，都按題意代入第二個方程式完成檢查。",
      "check": "第二式沒有被省略，負號與係數亦按原式保留。"
    },
    {
      "step": 4,
      "instruction": "將各式結果彙整，只有全部成立才標記為聯立方程式的解。",
      "check": "結論使用「同時成立」，沒有把任一式成立當成充分條件。"
    },
    {
      "step": 5,
      "instruction": "若含參數，解出參數後把參數與數對一起代回所有原式。",
      "check": "每式左右相等，參數值與有序數對順序都經過驗證。"
    }
  ]
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
    "explanation": "聯立方程式用多個方程式共同限制同一組未知數，因此它的解必須讓每一個方程式同時成立。只滿足其中一式的數對，仍可能違反其他條件，不能稱為這組聯立方程式的解。",
    "steps": [
      "確認各方程式使用的是同一組未知數。",
      "把候選數對分別代入每一個方程式。",
      "只有所有等式都成立時才判定為共同解。"
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
    "misconceptionTarget": "只驗算其中一個方程式成立，就過早宣稱找到聯立方程式的解。",
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
    "contentSha256": "b9c86b4f8c70f35398773c66d0bd5b7f0862df58eb1658172b985c740d442c32"
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
    "explanation": "把 (2,1) 代入第一式，2+1=3；代入第二式，2×2-1=3。兩個方程式的左右兩邊都相等，因此這一組數對同時滿足兩式，確實是聯立方程式的解。",
    "steps": [
      "代入第一式 x+y=3，驗得 2+1=3。",
      "代入第二式 2x-y=3，驗得 4-1=3。",
      "確認兩式都成立，判定答案為是。"
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
    "misconceptionTarget": "只因第一式成立便停止檢驗，沒有確認第二式也同時成立。",
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
    "contentSha256": "aee1a6838a2fb06065c44b0b2a68212c8f82d0bc20c66df391a3a8566fce31a7"
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
    "explanation": "(4,0) 代入 x+y=4 確實得到 4+0=4，但代入 x-y=2 卻得到 4-0=4，不等於二。聯立解必須同時通過全部方程式，所以這組數對不是共同解。第一式成立不能抵銷第二式失敗的事實。",
    "steps": [
      "驗算第一式，得到 4+0=4。",
      "驗算第二式，得到 4-0=4≠2。",
      "因第二式不成立，判定不是聯立方程式的解。"
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
    "misconceptionTarget": "把滿足任一方程式誤認為滿足聯立條件，忽略共同解的「同時」要求。",
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
    "contentSha256": "80ab936648cc1495583c9b5956149f715031d80ba43a75da98898c4272cb262b"
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
    "explanation": "既然 (3,-1) 是共同解，代入第二式 kx-y=7 必須成立。得到 3k-(-1)=7，也就是 3k+1=7；兩邊同減一後 3k=6，所以 k=2。第一式也可驗得 3+(-1)=2。把 k=2 回代第二式可得 6+1=7，兩條限制都已核對。",
    "steps": [
      "先代入第一式，確認 3+(-1)=2。",
      "代入第二式，寫成 3k-(-1)=7。",
      "化為 3k+1=7，解得 k=2。"
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
    "misconceptionTarget": "把減去負一仍寫成減一，使參數 k 的方程式符號錯誤。",
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
    "contentSha256": "bcbee1a131fee4bf73ff7005bbe1c3a2b5dbe807532a0e60e93aead6c746de33"
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
    "explanation": "代入 (3,2) 時，第一式左邊為 2×3+2=8，第二式左邊為 3-2=1，兩式皆與右邊相等。因此 (3,2) 是兩個方程式的共同解；其他選項至少有一式不成立。",
    "steps": [
      "把 x=3、y=2 代入 2x+y，算得八。",
      "代入 x-y，算得一。",
      "兩個結果分別符合右邊，選定 (3,2)。"
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
    "misconceptionTarget": "只挑能滿足第一式的數對，沒有再用第二式篩出共同解。",
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
    "contentSha256": "99ba4528ce2032fe1e3e333939b87186bd385cde3d7c162b73b009da50ccf8b8"
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
    "explanation": "把共同解 (1,4) 代入選項 3x+y=7，左邊為 3×1+4=7，等於右邊，因此它可作為聯立方程式的一式。判斷時須代入完整有序數對，而不是只查看係數外觀。",
    "steps": [
      "由共同解讀出 x=1、y=4。",
      "代入選項 3x+y=7，計算 3+4=7。",
      "核對等式成立，選出可用的方程式。"
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
    "misconceptionTarget": "憑選項形式猜測，沒有把指定共同解代入每個候選方程式。",
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
    "contentSha256": "2accb6c9d5f1c24e3e718f671ab2db1974184e784bc30b0df2d3a831ec2b266d"
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
    "explanation": "兩式相加得 2a=14，所以 a=7；再代入 a+b=10，得到 b=3。目標式為 2a+3b=2×7+3×3=14+9=23，因此正確答案是二十三。代回 a-b=4 也能確認七減三正好等於四，兩個解值均無誤。",
    "steps": [
      "將 a+b=10 與 a-b=4 相加，求得 a=7。",
      "代回第一式，求得 b=3。",
      "代入目標式，計算 2×7+3×3=23。"
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
    "misconceptionTarget": "求出 a、b 後直接相加，沒有再依目標式的係數二與三計算。",
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
    "contentSha256": "b98da496432bf3861c8b3d782d222f7cc30956e75c8b0c3dd13efc6ac4c56352"
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
    "explanation": "由第一式 x+y=5 且 x=2，可得 2+m=5，所以 m=3。再用 a=2 代入第二式驗算：2×2+2×3=4+6=10，確實成立，因此共同解的第二分量為三。兩式使用相同的 x=2、y=3，符合共同解定義。",
    "steps": [
      "把 (2,m) 代入 x+y=5，得到 2+m=5。",
      "解出 m=3。",
      "代入第二式 2×2+2×3=10，確認共同成立。"
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
    "misconceptionTarget": "只由其中一式求得 m 就省略第二式驗證，未確認題目的同時滿足條件。",
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
    "contentSha256": "6fb5987272db8f4b972d7c72b06fadfa3034530d43c7d439369ccebed2a2044c"
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
    "explanation": "同一組數使 x+y=6 成立，把等式兩邊同乘二便得到 2x+2y=12。因此第二式若描述相同限制，右邊 k 必須等於十二；只倍乘左邊而不倍乘右邊會破壞等式。",
    "steps": [
      "從 x+y=6 出發。",
      "將等式左右兩邊同乘二，得 2x+2y=12。",
      "與 2x+2y=k 比較，確定 k=12。"
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
    "misconceptionTarget": "把左邊係數都乘二，卻忘記右邊常數六也必須乘二。",
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
    "contentSha256": "3fde283d758bc2d766569b2b63b8d51646bf3bdbe0e46cc95c0fd6e5dbb93b40"
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
    "explanation": "成人五人、學生三人，總人數為 5+3=8；成人比學生多 5-3=2 人。這組人數同時符合總數與差額兩項規則，所以應判定合格，而非只核對其中一項。",
    "steps": [
      "檢查總人數，計算 5+3=8。",
      "檢查人數差，計算 5-3=2。",
      "兩項規則均成立，判定該組合格。"
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
    "misconceptionTarget": "只查看總人數八人，沒有再核對成人比學生多二人的差額規則。",
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
    "contentSha256": "f6a2ac6bcbbd3d4cd1a69dad6e5773764870a97664109c09cb27de3b9ce17834"
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
    "explanation": "將 (4,5) 代入第一式得 4+2×5=14，代入第二式得 3×4+5=17。兩項物流限制都通過，因此這一列表格資料是共同解；任一式失敗都不能選。欄位順序固定為 x、y，兩次代入不可互換。",
    "steps": [
      "按欄位順序取 x=4、y=5。",
      "驗算 x+2y=4+10=14。",
      "再驗算 3x+y=12+5=17，選定該列。"
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
    "misconceptionTarget": "驗完一個物流條件就停止，未把同一列資料代入另一條限制。",
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
    "contentSha256": "8abfd316bf52c2a9c9e0faf041d485713f3bdd9f4bbcbad71f4b80f6e974a214"
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
    "explanation": "把 (4,5) 代入第一個條件，4+5=9；代入第二個條件，2×4-5=8-5=3。兩個等式都成立，所以這組輸入符合密碼鎖的聯立規則，能夠解鎖。共同輸入必須原封不動通過兩道檢查，不能只符合總和。",
    "steps": [
      "將 x=4、y=5 代入 x+y，得到九。",
      "代入 2x-y，得到 8-5=3。",
      "確認兩個指定條件同時成立，選擇 (4,5)。"
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
    "misconceptionTarget": "只符合總和九便判定可解鎖，忽略還要同時符合第二個差值條件。",
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
    "contentSha256": "77aa74d389fa2283a6f6be54a9699229f645e5f5e92909f2cd87932782dfee5d"
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
      "將 (3,2) 代入第一式 2x+y=8，左邊為 2×3+2=8，第一式成立。",
      "將同一組數代入第二式 x-y=1，左邊為 3-2=1，第二式也成立。",
      "因兩式同時成立，所以 (3,2) 是共同解。只驗第一式不夠，因為可能有數對滿足第一式卻違反第二式。"
    ],
    "alternativeMethods": [
      "可舉 (2,4) 滿足第一式但不滿足第二式作為反例。"
    ],
    "reasoningSteps": [
      "按照 x=3、y=2 的順序代入第一個方程式並比較左右兩邊。",
      "再把完全相同的 x、y 值代入第二個方程式並比較。",
      "只有兩次比較都成立時，才依共同解定義下結論。"
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
    "contentSha256": "3033e9e4a89e71026e4f284f5180340fa7422821ae13ac096b0288cb93b3995d",
    "commonErrors": [
      "驗算第一式得到八就停止，忽略共同解必須同時符合第二式。",
      "第二式代入時交換三與二，將 x-y 錯算成二減三。",
      "把兩個方程式各自使用不同數對，違反同一組未知數的要求。"
    ]
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
      "先驗第一式：將 (2,-1) 代入 x+y，得到 2+(-1)=1，因此第一式成立。",
      "代入第二式 kx-3y=9，得 2k-3(-1)=9，即 2k+3=9，所以 2k=6、k=3。",
      "回驗 k=3 時，第二式左邊為 3×2-3×(-1)=6+3=9；兩式都成立，參數值正確。"
    ],
    "alternativeMethods": [
      "可先由第二式整理 k=(9+3y)/x，再代入 x=2、y=-1。"
    ],
    "reasoningSteps": [
      "先用第一式確認指定數對的順序與數值符合題設。",
      "把 x=2、y=-1 代入含 k 的第二式，保留負數括號後解一元方程式。",
      "將 k=3 與原數對一起代回兩個原式，完成雙式驗證。"
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
    "contentSha256": "c4893b70d5dcf743a7f5cb02fd26d6609567b41d0d1c3d543283c9e99abaad8e",
    "commonErrors": [
      "把 -3(-1) 算成負三，漏掉兩個負號相乘後應為正三。",
      "只利用第二式求 k，沒有依題意寫出第一式的共同解驗證。",
      "求得 k=3 後不代回原式，未檢查代數移項是否造成符號錯誤。"
    ]
  }
];

export const DRAWING_SPECS = [];
