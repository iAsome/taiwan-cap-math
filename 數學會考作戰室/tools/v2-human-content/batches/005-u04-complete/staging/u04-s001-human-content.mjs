// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s001-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-basics",
  "skillId": "system-two-variable-equation-definition",
  "lockedSkillTitle": "二元一次方程式的判斷",
  "title": "二元一次方程式的判斷：看未知數種類與次數",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "二元一次方程式的判斷",
    "scope": "判斷式子是否同時只有兩個未知數，且每個未知數的次數都是 1。"
  },
  "prerequisiteBridge": "本技能是本單元起點；先備只需能讀等號、未知數與一次項。",
  "learningGoals": [
    "能說出二元、一次與方程式三個條件。",
    "能將式子整理後再判斷，而不是隻看表面。",
    "能排除含 xy、平方、未知數在分母等非一次形式。",
    "能辨認缺少某一未知數係數為 0 的特殊寫法。"
  ],
  "vocabulary": [
    {
      "term": "未知數",
      "definition": "尚未確定的數，常用 x、y 表示。"
    },
    {
      "term": "二元",
      "definition": "式中實際出現兩種未知數。"
    },
    {
      "term": "一次",
      "definition": "每一項中未知數的最高次數都是 1，且未知數彼此不相乘。"
    },
    {
      "term": "方程式",
      "definition": "含等號，表示左右兩邊相等的式子。"
    },
    {
      "term": "係數",
      "definition": "乘在未知數前面的數，例如 3x 的係數是 3。"
    }
  ],
  "notation": [
    {
      "symbol": "ax+by=c",
      "meaning": "二元一次方程式的一般形式，其中 a、b 不可同時為 0。"
    },
    {
      "symbol": "x²",
      "meaning": "x 的二次方，因此不是一次。"
    },
    {
      "symbol": "xy",
      "meaning": "兩個未知數相乘，總次數為 2，因此不是一次。"
    }
  ],
  "conceptDevelopment": [
    "判斷時要逐項檢查：有沒有等號、未知數是不是恰有兩種、未知數是否都只出現一次。",
    "式子可先移項與合併同類項。例如 x+y=x-y+4 整理成 2y=4，只剩一種未知數，因此不屬於真正含兩元的方程式。",
    "一般形式 ax+by=c 中，a、b 可以有一個是 0，但若課程要求「實際含兩個未知數」，題目通常需兩個係數皆非 0；本單元採用實際出現兩未知數的判準。"
  ],
  "definitions": [
    {
      "name": "二元一次方程式",
      "statement": "含有兩種未知數，且每一未知數的次數都是 1 的等式。"
    },
    {
      "name": "一次項",
      "statement": "未知數只乘一次，例如 -5y。"
    },
    {
      "name": "常數項",
      "statement": "不含未知數的項，例如 7。"
    }
  ],
  "formulas": [
    {
      "formula": "ax+by=c",
      "conditions": [
        "a、b、c 為已知數，且 a、b 皆非 0 時，式中實際含 x、y 兩元。"
      ],
      "meaning": "用係數與常數表示所有二元一次方程式。"
    }
  ],
  "invalidUseCases": [
    "沒有等號的 3x+2y 只是代數式，不是方程式。",
    "含 x²、xy、1/x、√x 的式子不是二元一次方程式。",
    "整理後若一個未知數消失，要依整理後的實際形式判斷。",
    "未知數名稱不限 x、y，但必須只有兩種。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "先找等號",
      "check": "沒有等號立即排除。"
    },
    {
      "step": 2,
      "instruction": "列出未知數種類",
      "check": "確認恰有兩種。"
    },
    {
      "step": 3,
      "instruction": "整理左右兩邊",
      "check": "移項並合併同類項。"
    },
    {
      "step": 4,
      "instruction": "檢查每一項",
      "check": "不可有平方、相乘、分母含未知數或根號。"
    },
    {
      "step": 5,
      "instruction": "檢查兩元是否仍存在",
      "check": "整理後兩種未知數的係數都不可消失。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "判斷 3x-2y=7。",
      "solutionSteps": [
        "有等號。",
        "未知數為 x、y。",
        "x、y 都是一次且沒有相乘。"
      ],
      "answer": "是二元一次方程式。"
    },
    {
      "exampleId": "L2",
      "prompt": "判斷 x+y=xy。",
      "solutionSteps": [
        "右邊含 xy。",
        "xy 是兩個未知數相乘，總次數為 2。"
      ],
      "answer": "不是二元一次方程式。"
    },
    {
      "exampleId": "L3",
      "prompt": "判斷 2(x+y)-x=5。",
      "solutionSteps": [
        "展開得 2x+2y-x=5。",
        "合併成 x+2y=5。"
      ],
      "answer": "整理後仍是二元一次方程式。"
    },
    {
      "exampleId": "L4",
      "prompt": "判斷 x+y=x-y+4。",
      "solutionSteps": [
        "兩邊同減 x 得 y=-y+4。",
        "整理成 2y=4，只剩 y。"
      ],
      "answer": "整理後不是實際含兩元的方程式。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只看到 x、y 就判定是二元一次",
      "correction": "還要檢查等號與次數。"
    },
    {
      "mistake": "把 xy 當成兩個一次項",
      "correction": "xy 是乘積，不是 x 項加 y 項。"
    },
    {
      "mistake": "不先化簡",
      "correction": "化簡後可能有未知數消失。"
    },
    {
      "mistake": "認為係數是分數就不是一次",
      "correction": "係數可為整數、分數或小數，只要未知數次數為 1。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "2a+3b=9 是否符合？",
      "answer": "符合；有兩元且皆一次。"
    },
    {
      "prompt": "m/n+2m=1 是否符合？",
      "answer": "不符合；n 在分母。"
    },
    {
      "prompt": "p+q-p=6 是否符合？",
      "answer": "化簡後 q=6，只剩一元。"
    },
    {
      "prompt": "為何 4x+5y 不算方程式？",
      "answer": "缺少等號。"
    }
  ],
  "summary": [
    "二元指兩種未知數，一次指未知數不平方、不相乘、不在分母。",
    "判斷前先整理。",
    "有等號才是方程式。",
    "ax+by=c 是一般形式。"
  ],
  "connections": {
    "previous": "本技能是本單元起點；先備只需能讀等號、未知數與一次項。",
    "next": "下一技能「有序數對與解的判斷」會延伸目前能力。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "逐一核對「等號、未知數種類、化簡後次數」三層判準；特別檢查了 xy、未知數在分母與化簡消去一元等邊界，未引入坐標圖形。",
    "reviewNote": "逐一核對「等號、未知數種類、化簡後次數」三層判準；特別檢查了 xy、未知數在分母與化簡消去一元等邊界，未引入坐標圖形。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "1b312439695d757e953bfc7616955f6c98399d993047767a9a883fa9df93e8d1"
};

export const QUESTIONS = [
  {
    "questionId": "u04-s001-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "下列哪一個是二元一次方程式？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認標準形式的二元一次方程式",
    "choices": [
      "2x+3y=7",
      "2x+3",
      "x²+y=5",
      "xy=6"
    ],
    "answerIndex": 0,
    "independentSolution": "逐項檢查後，只有 2x+3y=7 有等號、兩個未知數且皆為一次。",
    "explanation": "二元一次方程式必須有兩種未知數、等號，且沒有平方或未知數相乘。",
    "steps": [
      "先找等號。",
      "確認未知數是 x、y。",
      "檢查每個未知數次數均為 1。"
    ],
    "optionAnalysis": [
      {
        "choice": "2x+3y=7",
        "truth": true,
        "reason": "同時符合二元、一次與方程式三項條件。"
      },
      {
        "choice": "2x+3",
        "truth": false,
        "reason": "沒有等號，只是代數式。"
      },
      {
        "choice": "x²+y=5",
        "truth": false,
        "reason": "含 x²，x 的次數為 2。"
      },
      {
        "choice": "xy=6",
        "truth": false,
        "reason": "含未知數乘積 xy。"
      }
    ],
    "misconceptionTarget": "只看到兩個字母就忽略次數",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認標準形式的二元一次方程式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "直接辨認三個必要條件，計算量最低。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8fcce3c756b89c6a32de102d215991bbbe7ffae553c835585d80f0ef1899a38c"
  },
  {
    "questionId": "u04-s001-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "式子 5a-2b=9 中，未知數有幾種？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "計數未知數種類",
    "choices": [
      "1 種",
      "2 種",
      "3 種",
      "5 種"
    ],
    "answerIndex": 1,
    "independentSolution": "未知數字母只有 a、b，因此共有 2 種。",
    "explanation": "係數與常數不算未知數；只數不同的未知數字母。",
    "steps": [
      "列出字母 a、b。",
      "排除數字係數與常數。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 種",
        "truth": false,
        "reason": "只數到 a，漏掉 b。"
      },
      {
        "choice": "2 種",
        "truth": true,
        "reason": "a、b 是兩種不同未知數。"
      },
      {
        "choice": "3 種",
        "truth": false,
        "reason": "把常數 9 當未知數。"
      },
      {
        "choice": "5 種",
        "truth": false,
        "reason": "把係數 5 當未知數種類。"
      }
    ],
    "misconceptionTarget": "把係數或常數視為未知數",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「計數未知數種類」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "只需辨認字母角色，屬定義入門。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "fc58b60fb69165529f33cdc82054a5da8e1176de098d6548515cb72e0cc66d75"
  },
  {
    "questionId": "u04-s001-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "下列哪個原因使 x+y²=4 不是二元一次方程式？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "指出非一次的具體原因",
    "choices": [
      "沒有等號",
      "只有一個未知數",
      "y 的次數是 2",
      "常數項是 4"
    ],
    "answerIndex": 2,
    "independentSolution": "y² 表示 y 的最高次數為 2，違反一次條件。",
    "explanation": "一次方程式中未知數最高次數必須是 1。",
    "steps": [
      "辨認 y²。",
      "判定 y 的次數為 2。",
      "因此排除。"
    ],
    "optionAnalysis": [
      {
        "choice": "沒有等號",
        "truth": false,
        "reason": "式中明明有等號。"
      },
      {
        "choice": "只有一個未知數",
        "truth": false,
        "reason": "式中有 x、y 兩個未知數。"
      },
      {
        "choice": "y 的次數是 2",
        "truth": true,
        "reason": "平方項直接違反一次條件。"
      },
      {
        "choice": "常數項是 4",
        "truth": false,
        "reason": "常數項可以是任何數。"
      }
    ],
    "misconceptionTarget": "誤認只要有兩個未知數就符合",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「指出非一次的具體原因」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需精確指出平方造成的違規。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "215b08f58f93e4b43302a188c0375d8a0ecb9e711d85315c8ce8a36a9c95a6fa"
  },
  {
    "questionId": "u04-s001-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "將 2(x+y)-x=5 化簡後，判斷其類型。",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "化簡後判斷方程式類型",
    "choices": [
      "是一元一次方程式",
      "不是方程式",
      "是二元二次方程式",
      "是二元一次方程式"
    ],
    "answerIndex": 3,
    "independentSolution": "展開得 2x+2y-x=5，即 x+2y=5，仍含 x、y 且皆一次。",
    "explanation": "應先展開與合併同類項，再依整理後形式判斷。",
    "steps": [
      "展開括號。",
      "合併 x 項。",
      "檢查未知數種類與次數。"
    ],
    "optionAnalysis": [
      {
        "choice": "是一元一次方程式",
        "truth": false,
        "reason": "化簡後仍有 x、y。"
      },
      {
        "choice": "不是方程式",
        "truth": false,
        "reason": "仍有等號。"
      },
      {
        "choice": "是二元二次方程式",
        "truth": false,
        "reason": "沒有平方或乘積項。"
      },
      {
        "choice": "是二元一次方程式",
        "truth": true,
        "reason": "化簡為 x+2y=5，符合定義。"
      }
    ],
    "misconceptionTarget": "只看原式括號而不化簡",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「化簡後判斷方程式類型」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "多一步分配律與同類項整理。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4e834e0724aba06a0ecb7740c8bc932c17749624ff17be6c1754d4bb67b58152"
  },
  {
    "questionId": "u04-s001-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "方程式 x+y=x-y+4 化簡後為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認化簡後未知數消失",
    "choices": [
      "2y=4",
      "2x=4",
      "x+2y=4",
      "0=4"
    ],
    "answerIndex": 0,
    "independentSolution": "兩邊同減 x 得 y=-y+4，再兩邊同加 y 得 2y=4。",
    "explanation": "化簡後 x 消失，只剩一元方程式。",
    "steps": [
      "兩邊同減 x。",
      "兩邊同加 y。",
      "得到 2y=4。"
    ],
    "optionAnalysis": [
      {
        "choice": "2y=4",
        "truth": true,
        "reason": "等值整理後 x 相消，留下 2y=4。"
      },
      {
        "choice": "2x=4",
        "truth": false,
        "reason": "x 項其實會相消。"
      },
      {
        "choice": "x+2y=4",
        "truth": false,
        "reason": "未把右邊 x 移除。"
      },
      {
        "choice": "0=4",
        "truth": false,
        "reason": "y 項不會全部消失。"
      }
    ],
    "misconceptionTarget": "移項時未對兩邊做同樣運算",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認化簡後未知數消失」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需正確整理左右均含未知數的式子。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f0f5e556187268ae5b08696c614d45f094c7634169321a7d052bb693c7f4b1e2"
  },
  {
    "questionId": "u04-s001-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "下列哪一式不是二元一次方程式，即使係數可為分數？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "區分合法分數係數與非線性分式",
    "choices": [
      "(1/2)x+3y=4",
      "x/y+2x=3",
      "0.3m-n=8",
      "-p+5q=0"
    ],
    "answerIndex": 1,
    "independentSolution": "x/y 中 y 位於分母，不能整理成兩未知數皆一次的 ax+by=c。",
    "explanation": "係數可以是分數或小數，但未知數不可出現在分母。",
    "steps": [
      "區分「分數係數」與「未知數在分母」。",
      "檢查 x/y。"
    ],
    "optionAnalysis": [
      {
        "choice": "(1/2)x+3y=4",
        "truth": false,
        "reason": "分數只是 x 的係數。"
      },
      {
        "choice": "x/y+2x=3",
        "truth": true,
        "reason": "y 在分母使式子不是一次形式。"
      },
      {
        "choice": "0.3m-n=8",
        "truth": false,
        "reason": "小數係數不影響一次性。"
      },
      {
        "choice": "-p+5q=0",
        "truth": false,
        "reason": "負係數仍可。"
      }
    ],
    "misconceptionTarget": "看到分數線就一律判錯",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「區分合法分數係數與非線性分式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需要辨別分母是否含未知數。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4c77945ace13312acc96a772b75b14f87055d8b9fad1e5ae2979aa553395408b"
  },
  {
    "questionId": "u04-s001-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "若 (k-2)x+3y=7 要實際含 x、y 兩元，k 不可等於多少？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由參數判斷兩元是否消失",
    "choices": [
      "0",
      "3",
      "2",
      "-2"
    ],
    "answerIndex": 2,
    "independentSolution": "x 的係數 k-2 必須非 0；k-2=0 得 k=2。",
    "explanation": "若 x 係數變成 0，整理後只剩 y，不再實際含兩元。",
    "steps": [
      "令 x 係數不為 0。",
      "找使 k-2=0 的值。",
      "排除 k=2。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "k=0 時 x 係數為 -2。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "k=3 時 x 係數為 1。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "k=2 時 x 項消失。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "k=-2 時 x 係數為 -4。"
      }
    ],
    "misconceptionTarget": "忽略係數可能為零",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由參數判斷兩元是否消失」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需把定義轉成參數限制。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9fae0a84671f19c6d4f1e19a34e3d0806d8682f2660effcb2fe923ff694b7364"
  },
  {
    "questionId": "u04-s001-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "式子 (x+y)(x-y)=5 展開後，為何不屬於二元一次方程式？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認隱藏在乘積中的二次結構",
    "choices": [
      "展開後沒有等號",
      "未知數超過兩種",
      "常數 5 太大",
      "展開後含 x² 與 y²"
    ],
    "answerIndex": 3,
    "independentSolution": "乘法公式得 x²-y²=5，含二次項。",
    "explanation": "括號相乘可能產生高次項，必須展開判斷。",
    "steps": [
      "展開乘積。",
      "辨認 x²、y²。",
      "判定非一次。"
    ],
    "optionAnalysis": [
      {
        "choice": "展開後沒有等號",
        "truth": false,
        "reason": "等號仍存在。"
      },
      {
        "choice": "未知數超過兩種",
        "truth": false,
        "reason": "仍只有 x、y。"
      },
      {
        "choice": "常數 5 太大",
        "truth": false,
        "reason": "常數大小與次數無關。"
      },
      {
        "choice": "展開後含 x² 與 y²",
        "truth": true,
        "reason": "乘積展開產生二次項。"
      }
    ],
    "misconceptionTarget": "只看每個括號內都是一次就誤判",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認隱藏在乘積中的二次結構」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需先展開乘積再判次數。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "17be58c6da8dde73781953f261114a3fdb972d9e7b791583943dedc991ac70fa"
  },
  {
    "questionId": "u04-s001-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "已知 ax+by=6 是二元一次方程式，哪一組係數一定不符合「實際含兩元」？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "判斷一般形式的係數限制",
    "choices": [
      "a=0，b=5",
      "a=2，b=1",
      "a=-1，b=3",
      "a=1/2，b=-4"
    ],
    "answerIndex": 0,
    "independentSolution": "實際含 x、y 要求 a、b 皆非 0；a=0、b=5 只剩 5y=6。",
    "explanation": "兩個係數中任一為 0 都會使對應未知數消失。",
    "steps": [
      "檢查 a 是否為 0。",
      "檢查 b 是否為 0。",
      "確認兩元都實際出現。"
    ],
    "optionAnalysis": [
      {
        "choice": "a=0，b=5",
        "truth": true,
        "reason": "a=0 使 x 項消失，只剩一元。"
      },
      {
        "choice": "a=2，b=1",
        "truth": false,
        "reason": "兩係數皆非 0，實際含 x、y。"
      },
      {
        "choice": "a=-1，b=3",
        "truth": false,
        "reason": "兩係數皆非 0。"
      },
      {
        "choice": "a=1/2，b=-4",
        "truth": false,
        "reason": "分數與負係數皆可。"
      }
    ],
    "misconceptionTarget": "誤以為一般形式允許任一係數為零仍算實際兩元",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「判斷一般形式的係數限制」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需理解「實際含兩元」的鎖定判準。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "72bcd0814efe917b35aea6fd952aa23a02ff40e36c1a0fedd07887733e393d83"
  },
  {
    "questionId": "u04-s001-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "某社團以 x 表示成人數、y 表示學生數。「每位成人繳 120 元、每位學生繳 80 元，共收 4000 元」應用哪個二元一次方程式表示？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "把收費敘述轉成二元一次方程式",
    "choices": [
      "x+y=4000",
      "120x+80y=4000",
      "120+80=x+y",
      "120xy=4000"
    ],
    "answerIndex": 1,
    "independentSolution": "成人費用為 120x，學生費用為 80y，總收入相加為 4000。",
    "explanation": "情境中的「單價×人數」形成一次項，兩類費用相加。",
    "steps": [
      "定義兩類人數。",
      "各自乘單價。",
      "總額設為 4000。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=4000",
        "truth": false,
        "reason": "把人數總和誤當金額。"
      },
      {
        "choice": "120x+80y=4000",
        "truth": true,
        "reason": "兩類費用加總正好是 4000 元。"
      },
      {
        "choice": "120+80=x+y",
        "truth": false,
        "reason": "左右單位不相容。"
      },
      {
        "choice": "120xy=4000",
        "truth": false,
        "reason": "把兩類人數相乘。"
      }
    ],
    "misconceptionTarget": "忽略單價與人數的配對",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "120 元/人×人與 80 元/人×人皆為元，左右單位一致。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「把收費敘述轉成二元一次方程式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "收費語境不可刪除，因單價決定係數。",
    "literacyContextNecessity": "成人與學生的不同繳費標準是建立係數 120、80 的必要資訊。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "3bbfffcd5bd701481d1f9222ba56cbd371bc0a6f5649e80970c94d5fdc72a023"
  },
  {
    "questionId": "u04-s001-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "倉庫紀錄：「A 箱每箱 x 公斤、B 箱每箱 y 公斤；2 箱 A 與 3 箱 B 共 41 公斤。」哪個式子正確？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由包裝紀錄建立重量方程式",
    "choices": [
      "x+y=41",
      "6xy=41",
      "2x+3y=41",
      "2x+3y"
    ],
    "answerIndex": 2,
    "independentSolution": "2 箱 A 重 2x，3 箱 B 重 3y，合計 41。",
    "explanation": "箱數乘每箱重量後相加，得到方程式。",
    "steps": [
      "辨認每箱重量。",
      "乘上箱數。",
      "合計等於 41。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=41",
        "truth": false,
        "reason": "漏掉箱數 2 與 3。"
      },
      {
        "choice": "6xy=41",
        "truth": false,
        "reason": "把總重量誤寫成乘積。"
      },
      {
        "choice": "2x+3y=41",
        "truth": true,
        "reason": "2x 與 3y 分別代表兩類箱子的總重量。"
      },
      {
        "choice": "2x+3y",
        "truth": false,
        "reason": "缺少等號與總重量。"
      }
    ],
    "misconceptionTarget": "把箱數忽略或把兩重量相乘",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "箱×公斤/箱=公斤，左右皆為公斤。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由包裝紀錄建立重量方程式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "箱數資料直接決定係數，情境不可省略。",
    "literacyContextNecessity": "「2 箱與 3 箱」是係數來源，「41 公斤」是等號右側，均為必要資料。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "48dbb056e305b7984cce9a3f55d5324f3be9c94c7c427fb24b1ba5f072aee435"
  },
  {
    "questionId": "u04-s001-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "一份試算表公式寫成 x+y=30，另一欄寫成 xy=200。若 x、y 是兩種商品數量，哪一欄不是二元一次方程式？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從資料公式辨認線性與非線性",
    "choices": [
      "x+y=30",
      "兩欄都是",
      "兩欄都不是",
      "xy=200"
    ],
    "answerIndex": 3,
    "independentSolution": "xy=200 含兩未知數相乘，總次數為 2；x+y=30 是一次。",
    "explanation": "試算表中的乘積符號改變了模型類型。",
    "steps": [
      "逐欄檢查。",
      "辨認 xy 是乘積。",
      "保留 x+y=30。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=30",
        "truth": false,
        "reason": "兩未知數皆為一次且相加。"
      },
      {
        "choice": "兩欄都是",
        "truth": false,
        "reason": "xy 含未知數乘積。"
      },
      {
        "choice": "兩欄都不是",
        "truth": false,
        "reason": "第一欄符合定義。"
      },
      {
        "choice": "xy=200",
        "truth": true,
        "reason": "未知數乘積 xy 不符合一次形式。"
      }
    ],
    "misconceptionTarget": "把商品情境誤當成所有公式都線性",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從資料公式辨認線性與非線性」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "公式用途不同，xy 的乘積結構是必要判斷點。",
    "literacyContextNecessity": "試算表兩欄的公式型態正是題目要比較的資訊，移除後無法判斷。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "760934fc66c251761ea431cb81c796287bde864aadcf3c008851a45a943746a4"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s001-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "itemType": "constructed-response",
    "prompt": "判斷下列各式是否為二元一次方程式，並逐式寫出理由：① 3x-2y=7；② x²+y=4；③ 2a+5b；④ m/n+n=1；⑤ 2(p+q)-p=6；⑥ x+y=x-y+4。",
    "requiredWork": [
      "每式先化簡再判斷。",
      "理由必須指出等號、未知數種類或次數。"
    ],
    "standardSolution": [
      "①是：含 x、y，皆一次且有等號。",
      "②否：含 x²。",
      "③否：沒有等號。",
      "④否：n 在分母。",
      "⑤是：化簡為 p+2q=6。",
      "⑥否：化簡為 2y=4，只剩一元。"
    ],
    "alternativeMethods": [
      "可將所有式子整理成 ax+by=c 再檢查兩係數是否非 0。"
    ],
    "reasoningSteps": [
      "逐式檢查等號。",
      "整理括號與同類項。",
      "檢查未知數是否恰有兩種且皆一次。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "六式分類與理由全部正確，且⑥說明化簡後一元。"
      },
      {
        "score": 2,
        "criteria": "至少五式正確，或六式分類正確但一處理由不完整。"
      },
      {
        "score": 1,
        "criteria": "至少三式分類正確並有一項具體理由。"
      },
      {
        "score": 0,
        "criteria": "少於三式正確或只寫「是/不是」且無可辨識理由。"
      }
    ],
    "partialCreditRules": [
      "分類與理由各佔判斷依據；⑥若未化簡最高 2 分。"
    ],
    "followThroughPolicy": "若前面化簡有單一符號錯誤，但後續依自己化簡結果判斷合理，可保留該式一半分數。",
    "unitNotationRules": "符號需使用 x²、xy、分母等清楚寫法；本題無單位。",
    "answerOnlyPolicy": "只列六個答案而無理由，最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "①是、②否、③否、④否、⑤是、⑥否。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立逐式化簡，確認⑤仍含 p、q，⑥的 x 完全消去。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "2ec85abefd796b61dc0af6b8134f6aa1fd871d27de3af4ade4505ceb4b4f3d20"
  },
  {
    "questionId": "u04-s001-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "方程式 (k-1)x+(k+2)y=6 要在本單元判準下「實際含 x、y 兩元且皆一次」，求 k 的限制，並解釋。",
    "requiredWork": [
      "分別檢查 x、y 係數不可為 0。",
      "答案用不等於條件表示。"
    ],
    "standardSolution": [
      "x 係數 k-1≠0，所以 k≠1。",
      "y 係數 k+2≠0，所以 k≠-2。",
      "因此 k≠1 且 k≠-2。"
    ],
    "alternativeMethods": [
      "可分情況說明 k=1 時只剩 y，k=-2 時只剩 x，其餘均為二元一次。"
    ],
    "reasoningSteps": [
      "把“實際含兩元”轉成兩係數非 0。",
      "分別解兩個不等式。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確得到並說明 k≠1、-2。"
      },
      {
        "score": 2,
        "criteria": "條件正確但只解釋其中一個係數，或有輕微記號缺失。"
      },
      {
        "score": 1,
        "criteria": "只排除其中一個值，且理由可辨認。"
      },
      {
        "score": 0,
        "criteria": "未把係數為 0 與未知數消失連結。"
      }
    ],
    "partialCreditRules": [
      "兩個排除值各為核心一分，完整解釋為第三分。"
    ],
    "followThroughPolicy": "若把 k+2=0 算成 k=2，但方法正確，最高 2 分。",
    "unitNotationRules": "k 無單位；須寫 k≠1、k≠-2，不可用含糊的“其他值”。",
    "answerOnlyPolicy": "只答兩個數未寫不等於，最高 2 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "k 可為任何實數，但不可等於 1 或 -2。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立檢驗 k=1、-2 兩邊界，分別使 x 或 y 項消失。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6ad93cbce9f0f380f4caf86a4554713d689fc7bcbb6a7cede2704f91d93ea9f1"
  }
];

export const DRAWING_SPECS = [];
