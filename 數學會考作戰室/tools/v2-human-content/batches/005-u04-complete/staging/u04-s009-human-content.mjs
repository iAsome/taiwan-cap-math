// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s009-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-apps",
  "skillId": "system-chicken-rabbit-problem",
  "lockedSkillTitle": "雞兔同籠問題",
  "title": "雞兔同籠問題：用頭數與腳數建立兩個條件",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "雞兔同籠問題",
    "scope": "以總隻數與總腳數建立聯立方程式，並檢查非負整數解。"
  },
  "prerequisiteBridge": "先備技能 system-word-setup-basic 已建立必要基礎；本節將其用於「以總隻數與總腳數建立聯立方程式，並檢查非負整數解。」",
  "learningGoals": [
    "能以雞數、兔數定義未知數。",
    "能列出頭數式與腳數式。",
    "能用基準法或聯立方程式解題。",
    "能檢查答案是否為非負整數且腳數合理。"
  ],
  "vocabulary": [
    {
      "term": "頭數",
      "definition": "每隻動物計一個頭，因此等於動物總隻數。"
    },
    {
      "term": "腳數",
      "definition": "雞每隻 2 腳，兔每隻 4 腳。"
    },
    {
      "term": "基準假設",
      "definition": "先假設全為雞或全為兔，再用腳數差調整。"
    },
    {
      "term": "整數限制",
      "definition": "動物隻數不可為負數或小數。"
    }
  ],
  "notation": [
    {
      "symbol": "x+y=H",
      "meaning": "H 為總頭數。"
    },
    {
      "symbol": "2x+4y=L",
      "meaning": "x 為雞、y 為兔，L 為總腳數。"
    }
  ],
  "conceptDevelopment": [
    "每隻動物都貢獻一個頭，但貢獻的腳數不同，因此頭數與腳數是兩個獨立條件。",
    "若全是雞，腳數是 2H；每把一隻雞換成兔，腳數增加 2。這提供另一種檢查方法。",
    "合理的腳數必須介於 2H 與 4H 之間且為偶數。"
  ],
  "definitions": [
    {
      "name": "雞兔同籠型",
      "statement": "兩類物件每個都算一個總數，但各自具有不同單位貢獻。"
    }
  ],
  "formulas": [
    {
      "formula": "x+y=H，2x+4y=L",
      "conditions": [
        "x、y 為非負整數。"
      ],
      "meaning": "分別表達頭數與腳數。"
    },
    {
      "formula": "兔數=(L-2H)/2",
      "conditions": [
        "以全雞為基準。"
      ],
      "meaning": "每增加一兔多 2 腳。"
    }
  ],
  "invalidUseCases": [
    "腳數為奇數時，在標準雞兔設定下不可能。",
    "解出負數表示題目資料矛盾或模型錯誤。",
    "不能把頭數式寫成 2x+4y。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "設雞 x 隻、兔 y 隻",
      "check": "寫明非負整數。"
    },
    {
      "step": 2,
      "instruction": "列頭數式 x+y=H",
      "check": "每隻一頭。"
    },
    {
      "step": 3,
      "instruction": "列腳數式 2x+4y=L",
      "check": "按每隻腳數加總。"
    },
    {
      "step": 4,
      "instruction": "解聯立",
      "check": "可消去或用全雞基準。"
    },
    {
      "step": 5,
      "instruction": "檢查範圍與代回",
      "check": "頭、腳都吻合。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "共有 20 隻、56 隻腳。",
      "solutionSteps": [
        "x+y=20。",
        "2x+4y=56。",
        "第二式減 2 倍第一式得 2y=16。"
      ],
      "answer": "雞 12 隻、兔 8 隻。"
    },
    {
      "exampleId": "L2",
      "prompt": "共有 15 隻、44 隻腳。",
      "solutionSteps": [
        "全雞有 30 腳。",
        "多 14 腳，每隻兔多 2 腳。",
        "兔 7、雞 8。"
      ],
      "answer": "雞 8 隻、兔 7 隻。"
    },
    {
      "exampleId": "L3",
      "prompt": "10 個頭卻有 15 隻腳是否可能？",
      "solutionSteps": [
        "雞兔腳數皆為偶數。",
        "總腳數必為偶數。"
      ],
      "answer": "不可能。"
    },
    {
      "exampleId": "L4",
      "prompt": "車棚有腳踏車與汽車共 18 輛、輪子 54 個。",
      "solutionSteps": [
        "設腳踏車 x、汽車 y。",
        "x+y=18、2x+4y=54。"
      ],
      "answer": "腳踏車 9、汽車 9。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "用 2x+4y 表示頭數",
      "correction": "那是腳數式。"
    },
    {
      "mistake": "解出小數隻仍接受",
      "correction": "隻數需為整數。"
    },
    {
      "mistake": "忽略腳數合理範圍",
      "correction": "先做 2H≤L≤4H 檢查。"
    },
    {
      "mistake": "只用一個方程式",
      "correction": "無法唯一決定兩種動物。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "H=12 時全雞有幾腳？",
      "answer": "24。"
    },
    {
      "prompt": "每把雞換兔多幾腳？",
      "answer": "2。"
    },
    {
      "prompt": "腳數 37 可能嗎？",
      "answer": "不可能，總腳數應為偶數。"
    },
    {
      "prompt": "答案要做哪些檢查？",
      "answer": "非負整數且頭、腳式都成立。"
    }
  ],
  "summary": [
    "頭數式 x+y=H。",
    "腳數式 2x+4y=L。",
    "可用消去或全雞基準。",
    "答案必須是非負整數。"
  ],
  "connections": {
    "previous": "先備技能 system-word-setup-basic 已建立必要基礎；本節將其用於「以總隻數與總腳數建立聯立方程式，並檢查非負整數解。」",
    "next": "下一技能「票價問題」會延伸目前能力。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "兩種解法互相驗證例題結果，並加入奇數腳與範圍檢查；車輪類比保留相同數學結構但情境功能必要。",
    "reviewNote": "兩種解法互相驗證例題結果，並加入奇數腳與範圍檢查；車輪類比保留相同數學結構但情境功能必要。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "ea10ba9808716cfc86f7aa12b03c0d710a48affcd7cad7b323794ed945b34771"
};

export const QUESTIONS = [
  {
    "questionId": "u04-s009-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "雞 x 隻、兔 y 隻，共 20 隻，頭數方程式為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "列頭數式",
    "choices": [
      "x+y=20",
      "2x+4y=20",
      "x+2y=20",
      "xy=20"
    ],
    "answerIndex": 0,
    "independentSolution": "每隻雞與兔都各有一個頭，所以總只數為 x+y。",
    "explanation": "頭數式只計動物數量。",
    "steps": [
      "每隻動物貢獻 1。",
      "相加等於 20。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=20",
        "truth": true,
        "reason": "x 與 y 的總只數為 20。"
      },
      {
        "choice": "2x+4y=20",
        "truth": false,
        "reason": "這是腳數式。"
      },
      {
        "choice": "x+2y=20",
        "truth": false,
        "reason": "把兔子算成兩個頭。"
      },
      {
        "choice": "xy=20",
        "truth": false,
        "reason": "不是乘積關係。"
      }
    ],
    "misconceptionTarget": "把腳數貢獻混入頭數",
    "prerequisiteCheck": "只需先備 system-word-setup-basic，並使用本技能「雞兔同籠問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「列頭數式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "直接定義。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "92beec73ae7d96beec1f20b0e4c0026c14d203d75ffc2b94acb1de5ef6a8694f"
  },
  {
    "questionId": "u04-s009-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "雞 x 隻、兔 y 隻，腳共 56 隻，腳數方程式為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "列腳數式",
    "choices": [
      "x+y=56",
      "4x+2y=56",
      "6xy=56",
      "2x+4y=56"
    ],
    "answerIndex": 3,
    "independentSolution": "雞每隻 2 腳貢獻 2x，兔每隻 4 腳貢獻 4y。",
    "explanation": "腳數加權總和。",
    "steps": [
      "配對雞 2 腳。",
      "配對兔 4 腳。",
      "相加。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=56",
        "truth": false,
        "reason": "漏掉每隻腳數。"
      },
      {
        "choice": "4x+2y=56",
        "truth": false,
        "reason": "雞兔腳數配反。"
      },
      {
        "choice": "6xy=56",
        "truth": false,
        "reason": "錯誤相乘。"
      },
      {
        "choice": "2x+4y=56",
        "truth": true,
        "reason": "2x+4y 正確表示總腳數。"
      }
    ],
    "misconceptionTarget": "雞兔腳數配錯",
    "prerequisiteCheck": "只需先備 system-word-setup-basic，並使用本技能「雞兔同籠問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "腳/只×只=腳。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「列腳數式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "單一加權條件。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d873cbae4aca1627b4b13281f69f6d74012dc12f3c8dd57f0edc9dc416a4ab45"
  },
  {
    "questionId": "u04-s009-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "10 隻雞兔的總腳數可能是下列哪一個？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "檢查腳數資料合理性",
    "choices": [
      "15",
      "42",
      "28",
      "8"
    ],
    "answerIndex": 2,
    "independentSolution": "10 只時腳數應為 20 到 40 之間的偶數；28 符合。",
    "explanation": "先做範圍與奇偶檢查。",
    "steps": [
      "算全雞 20。",
      "算全兔 40。",
      "檢查偶數。"
    ],
    "optionAnalysis": [
      {
        "choice": "15",
        "truth": false,
        "reason": "總腳數必須是偶數。"
      },
      {
        "choice": "42",
        "truth": false,
        "reason": "超過全兔 40 腳。"
      },
      {
        "choice": "28",
        "truth": true,
        "reason": "28 是 20 至 40 之間的偶數。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "少於全雞 20 腳。"
      }
    ],
    "misconceptionTarget": "忽略範圍與奇偶",
    "prerequisiteCheck": "只需先備 system-word-setup-basic，並使用本技能「雞兔同籠問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「檢查腳數資料合理性」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "不求具體只數的基礎判斷。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4315c505bbb6918735fd64b362196076cf848064cec27255a3220a8abb607db7"
  },
  {
    "questionId": "u04-s009-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "雞兔共 20 隻、56 隻腳，兔有幾隻？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "用基準法求兔數",
    "choices": [
      "6",
      "8",
      "12",
      "18"
    ],
    "answerIndex": 1,
    "independentSolution": "全為雞有 40 腳，比實際少 16；每換一兔多 2 腳，兔數 16÷2=8。",
    "explanation": "可用全雞基準或聯立消去。",
    "steps": [
      "算全雞腳數。",
      "求多出的腳。",
      "除以 2。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": false,
        "reason": "腳數差換算錯誤。"
      },
      {
        "choice": "8",
        "truth": true,
        "reason": "8 兔與 12 雞共 56 腳。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "這是雞的只數。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "未除每隻多 2 腳。"
      }
    ],
    "misconceptionTarget": "把多出腳數直接當兔數",
    "prerequisiteCheck": "只需先備 system-word-setup-basic，並使用本技能「雞兔同籠問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「用基準法求兔數」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "標準雞兔同籠。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "cce532aeb6f8577f05e228dcdfc28d3d5b30fdc249801b4e576d26565fb74caf"
  },
  {
    "questionId": "u04-s009-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "雞兔共 15 隻、44 隻腳，雞有幾隻？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由兔數回推雞數",
    "choices": [
      "7",
      "9",
      "8",
      "11"
    ],
    "answerIndex": 2,
    "independentSolution": "全雞 30 腳，多 14 腳，所以兔 7，雞 15-7=8。",
    "explanation": "先求兔再由總數求雞。",
    "steps": [
      "基準求兔 7。",
      "總數減去。"
    ],
    "optionAnalysis": [
      {
        "choice": "7",
        "truth": false,
        "reason": "這是兔數。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "代回腳數為 42。"
      },
      {
        "choice": "8",
        "truth": true,
        "reason": "8×2+7×4=44。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "代回腳數為 38。"
      }
    ],
    "misconceptionTarget": "求出一類後忘記總數關係",
    "prerequisiteCheck": "只需先備 system-word-setup-basic，並使用本技能「雞兔同籠問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由兔數回推雞數」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "兩步標準題。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "26998e5af0c3a3943582527288dd55480883573d787c69fff1bf2df08557de86"
  },
  {
    "questionId": "u04-s009-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "腳踏車與汽車共 18 輛、輪子 54 個，腳踏車有幾輛？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "遷移雞兔模型到車輛",
    "choices": [
      "6",
      "9",
      "12",
      "15"
    ],
    "answerIndex": 1,
    "independentSolution": "設腳踏車 x、汽車 y：x+y=18、2x+4y=54；消去得 2y=18，y=9，x=9。",
    "explanation": "車輪情境與雞兔結構相同。",
    "steps": [
      "列車輛總數。",
      "列輪子總數。",
      "解聯立。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": false,
        "reason": "輪數為 60。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "9 輛腳踏車與 9 輛汽車共有 54 輪。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "輪數為 48。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "輪數為 42。"
      }
    ],
    "misconceptionTarget": "不確認每類輪數",
    "prerequisiteCheck": "只需先備 system-word-setup-basic，並使用本技能「雞兔同籠問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "輪/輛×輛=輪。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「遷移雞兔模型到車輛」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "相同結構不同物件。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "61463f696cbfd26ba44e34cfc39ce08c28971ca96f1176908b95731bc759a5d5"
  },
  {
    "questionId": "u04-s009-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "雞兔共 n 隻、腳共 2n+18 隻，兔有幾隻？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "含參數總數的結構推理",
    "choices": [
      "9",
      "18",
      "n-9",
      "2n+9"
    ],
    "answerIndex": 0,
    "independentSolution": "全雞腳數為 2n；實際多 18，每兔多 2，因此兔為 9。",
    "explanation": "用符號總數仍可採用基準法。",
    "steps": [
      "建立全雞基準 2n。",
      "求額外 18。",
      "除以 2。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": true,
        "reason": "9 只兔恰好多 18 腳。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "忘記每兔只比雞多 2 腳。"
      },
      {
        "choice": "n-9",
        "truth": false,
        "reason": "這是雞數。"
      },
      {
        "choice": "2n+9",
        "truth": false,
        "reason": "未消去基準腳數。"
      }
    ],
    "misconceptionTarget": "把 n 混入額外腳數",
    "prerequisiteCheck": "只需先備 system-word-setup-basic，並使用本技能「雞兔同籠問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「含參數總數的結構推理」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "抽象化基準法。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7447670b54f1fd662e699ca64085c2af212f89371aad276dcd81f757f34963be"
  },
  {
    "questionId": "u04-s009-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "雞兔共 25 隻。若兔數是雞數的 3/2 倍，總腳數為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "結合比例與腳數",
    "choices": [
      "50",
      "75",
      "100",
      "80"
    ],
    "answerIndex": 3,
    "independentSolution": "設雞 2k、兔 3k，總數 5k=25，k=5；雞 10、兔 15，腳數 20+60=80。",
    "explanation": "先由比例與總數求兩類數量。",
    "steps": [
      "用 2:3 表示數量。",
      "求 k=5。",
      "計算腳數。"
    ],
    "optionAnalysis": [
      {
        "choice": "50",
        "truth": false,
        "reason": "當成全雞。"
      },
      {
        "choice": "75",
        "truth": false,
        "reason": "把平均腳數誤為 3。"
      },
      {
        "choice": "100",
        "truth": false,
        "reason": "當成全兔。"
      },
      {
        "choice": "80",
        "truth": true,
        "reason": "10 雞與 15 兔共 80 腳。"
      }
    ],
    "misconceptionTarget": "把兔倍數直接乘總只數",
    "prerequisiteCheck": "只需先備 system-word-setup-basic，並使用本技能「雞兔同籠問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「結合比例與腳數」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需先解整數比例。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b3c6c1a934e2d70a6a9ba57745303ef4f99fd5a019c1edff110fa5213227408f"
  },
  {
    "questionId": "u04-s009-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "某籠雞兔共 12 隻。若把 2 隻兔換成 2 隻雞，腳數變成 32 隻。原來兔有幾隻？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "處理變化後的雞兔模型",
    "choices": [
      "4",
      "6",
      "8",
      "10"
    ],
    "answerIndex": 1,
    "independentSolution": "更換後仍 12 只、32 腳。全雞 24 腳，多 8 腳，所以更換後兔 4 只；原來有 4+2=6 只兔。",
    "explanation": "先解更換後的狀態，再逆推原狀態。",
    "steps": [
      "求換後兔數 4。",
      "加回被換成雞的 2 只。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "這是更換後的兔數。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "原來 6 兔換走 2 兔後剩 4 兔，腳數為 32。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把每兔多腳數重複計算。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "代回原腳數過高。"
      }
    ],
    "misconceptionTarget": "把換後數量當原數量",
    "prerequisiteCheck": "只需先備 system-word-setup-basic，並使用本技能「雞兔同籠問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「處理變化後的雞兔模型」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "包含狀態轉換與逆推。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "478775e8a7358b2649df5b13f919576fe49f422389a44d0d90348c2c11df1259"
  },
  {
    "questionId": "u04-s009-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "動物照護紀錄：雞與兔共 30 隻，飼料碗共 30 個，腳共 84 隻。哪一項資料可用來區分雞兔數？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "篩選獨立條件",
    "choices": [
      "共 30 隻",
      "飼料碗 30 個",
      "腳共 84 隻",
      "三項都同樣必要"
    ],
    "answerIndex": 2,
    "independentSolution": "總只數與腳數是獨立條件；每隻一個碗使碗數只是總數重複。",
    "explanation": "素養題要篩選真正新增限制的資料。",
    "steps": [
      "辨認每項資料對應方程式。",
      "比較是否重複。"
    ],
    "optionAnalysis": [
      {
        "choice": "共 30 隻",
        "truth": false,
        "reason": "只提供總數。"
      },
      {
        "choice": "飼料碗 30 個",
        "truth": false,
        "reason": "每隻一個碗，與總只數重複。"
      },
      {
        "choice": "腳共 84 隻",
        "truth": true,
        "reason": "腳數對雞、兔的貢獻不同，提供第二獨立條件。"
      },
      {
        "choice": "三項都同樣必要",
        "truth": false,
        "reason": "碗數資料與總只數相依。"
      }
    ],
    "misconceptionTarget": "認為所有表格欄都必須使用",
    "prerequisiteCheck": "只需先備 system-word-setup-basic，並使用本技能「雞兔同籠問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "腳數與只數分別形成不同單位的兩條守恆式。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「篩選獨立條件」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "照護記錄中的碗數是冗餘欄。",
    "literacyContextNecessity": "腳數因雞兔貢獻不同而能區分數量，情境資料不可替換。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "314ffc0f28de60e4f7df81b64befe4399c8507480648cfe479d754e93faa06a9"
  },
  {
    "questionId": "u04-s009-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "停車場有機車與汽車共 40 輛、輪子 116 個。若每輛機車 2 輪、汽車 4 輪，汽車有幾輛？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從停車統計求車輛分類",
    "choices": [
      "12",
      "22",
      "29",
      "18"
    ],
    "answerIndex": 3,
    "independentSolution": "全機車有 80 輪，多 36 輪；每輛汽車多 2 輪，所以汽車 18。",
    "explanation": "車輛情境需要總輛數與總輪數。",
    "steps": [
      "算全機車輪數。",
      "求額外輪數。",
      "除以 2。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "代回輪子為 104。"
      },
      {
        "choice": "22",
        "truth": false,
        "reason": "這是機車數。"
      },
      {
        "choice": "29",
        "truth": false,
        "reason": "把額外輪數直接除 2 後未處理總數。"
      },
      {
        "choice": "18",
        "truth": true,
        "reason": "18 汽車與 22 機車共 116 輪。"
      }
    ],
    "misconceptionTarget": "把機車與汽車貢獻配反",
    "prerequisiteCheck": "只需先備 system-word-setup-basic，並使用本技能「雞兔同籠問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "輪/輛×輛=輪。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從停車統計求車輛分類」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "輪子記錄是分類必要資料。",
    "literacyContextNecessity": "每類車輛輪數不同，使總輪數成為必要第二條件。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e8011e117741187939ec9a4f82f663e7cd47cc9d05deb613d06015c6d716bb89"
  },
  {
    "questionId": "u04-s009-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "園遊會準備雙腳椅與四腳桌共 25 件，總腳數 76。若 x 為椅、y 為桌，解出 y 後應如何解讀？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "解釋模型變數答案",
    "choices": [
      "四腳桌的件數",
      "所有傢俱件數",
      "雙腳椅的件數",
      "多出的腳數"
    ],
    "answerIndex": 0,
    "independentSolution": "題幹已定義 y 為四腳桌件數；解出的代數值必須回到變數定義。",
    "explanation": "同構模型仍要正確解釋變數。",
    "steps": [
      "回看變數定義。",
      "附上件數單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "四腳桌的件數",
        "truth": true,
        "reason": "y 自始至終代表四腳桌件數。"
      },
      {
        "choice": "所有傢俱件數",
        "truth": false,
        "reason": "這是 x+y。"
      },
      {
        "choice": "雙腳椅的件數",
        "truth": false,
        "reason": "變數 x 才是椅。"
      },
      {
        "choice": "多出的腳數",
        "truth": false,
        "reason": "y 的定義是桌數。"
      }
    ],
    "misconceptionTarget": "只報數字不說明物件",
    "prerequisiteCheck": "只需先備 system-word-setup-basic，並使用本技能「雞兔同籠問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「解釋模型變數答案」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "情境解讀是必要步驟。",
    "literacyContextNecessity": "傢俱類型定義決定 y 的實際含義。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "66b2057b061a42b2abbf0901adafa059bef32b23061c483968a6cc49af2a543c"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s009-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "standard",
    "itemType": "constructed-response",
    "prompt": "雞兔共 28 隻、腳共 76 隻。求雞與兔各幾隻，並做合理性檢查。",
    "requiredWork": [
      "列頭數腳數式。",
      "答案需非負整數並代回。"
    ],
    "standardSolution": [
      "設雞 x、兔 y。",
      "x+y=28，2x+4y=76。",
      "第二式減 2 倍第一式：2y=20，y=10。",
      "x=18。",
      "檢查：18+10=28，36+40=76。"
    ],
    "alternativeMethods": [
      "全雞有 56 腳，多 20；每兔多 2 腳，所以兔 10。"
    ],
    "reasoningSteps": [
      "建模。",
      "消去或基準。",
      "檢查。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "雞 18、兔 10 且列式與檢查完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但檢查或單位略缺。"
      },
      {
        "score": 1,
        "criteria": "列式正確但後續算術錯。"
      },
      {
        "score": 0,
        "criteria": "頭數腳數式混淆。"
      }
    ],
    "partialCreditRules": [
      "頭數式一分，腳數式與求解一分，檢查一分。"
    ],
    "followThroughPolicy": "若腳數算術錯但得到非負整數並依自己答案檢查，可給方法分，不給正確答案分。",
    "unitNotationRules": "單位寫“只”；腳數寫“只腳”或“腳”。",
    "answerOnlyPolicy": "只答 18、10 最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "雞18只、兔10只。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立用聯立與全雞基準兩法得到相同結果。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "386d131bb5fb12bdbf94e7588e19e42cb3afbe98d76c0ed4ed12e3de6b1687dd"
  },
  {
    "questionId": "u04-s009-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "停車場有機車與汽車共 45 輛、輪子 134 個。求各幾輛，並說明資料是否合理。",
    "requiredWork": [
      "車輛模型與整數檢查。"
    ],
    "standardSolution": [
      "設機車 x、汽車 y。",
      "x+y=45，2x+4y=134。",
      "減 2 倍第一式得 2y=44，y=22。",
      "x=23。",
      "兩者為非負整數，輪數在 90 至 180 之間且為偶數，合理。"
    ],
    "alternativeMethods": [
      "全機車 90 輪，多 44；每輛汽車多 2 輪，汽車 22。"
    ],
    "reasoningSteps": [
      "先做範圍檢查。",
      "求解。",
      "回算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "機車23、汽車22，並完成合理性說明。"
      },
      {
        "score": 2,
        "criteria": "答案正確但少一項合理性檢查。"
      },
      {
        "score": 1,
        "criteria": "模型正確且求出其中一類，後續小錯。"
      },
      {
        "score": 0,
        "criteria": "把汽車機車輪數配反或接受非整數。"
      }
    ],
    "partialCreditRules": [
      "模型一分，結果一分，合理性一分。"
    ],
    "followThroughPolicy": "若 x、y 變數定義相反但全程一致，不扣分。",
    "unitNotationRules": "單位為輛、輪。",
    "answerOnlyPolicy": "只答數量最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "機車23輛、汽車22輛。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立基準法：134-90=44，汽車=22，機車=23。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6397aed4b59d63d273905f3fd0c57b4305deb9cecacd2d065461d558894d915b"
  }
];

export const DRAWING_SPECS = [];
