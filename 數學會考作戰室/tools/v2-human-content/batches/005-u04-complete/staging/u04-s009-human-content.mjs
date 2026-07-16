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
      "prompt": "雞兔共20隻、56隻腳，求各有幾隻。",
      "solutionSteps": [
        "設雞x隻、兔y隻，列x＋y＝20與2x＋4y＝56。",
        "腳數式減總數式的兩倍，得2y＝16，所以y＝8。",
        "由總數求x＝12，代回腳數式驗算。"
      ],
      "answer": "雞12隻、兔8隻。",
      "why": "總隻數式與總腳數式分別保存兩種不同資訊。用腳數式減去總數式兩倍，相當於扣除全雞基準，只留下每隻兔多出的兩隻腳；求得八隻兔後，雞數由二十減八得到十二。"
    },
    {
      "exampleId": "L2",
      "prompt": "雞兔共15隻、44隻腳，用基準法求各有幾隻。",
      "solutionSteps": [
        "假設全是雞，基準腳數為15×2＝30。",
        "實際多44－30＝14隻腳，所以兔有14÷2＝7隻。",
        "雞有15－7＝8隻，代回得到44隻腳。"
      ],
      "answer": "雞8隻、兔7隻。",
      "why": "全雞基準使用每隻兩腳，將雞換成兔時每隻只增加兩腳，因此十四隻額外腳必須除以二，不能直接當成兔數。再以總數求雞，八雞七兔的腳數確實是十六加二十八。"
    },
    {
      "exampleId": "L3",
      "prompt": "十個頭卻只有15隻腳，判斷資料是否可能。",
      "solutionSteps": [
        "十隻全是雞至少要有10×2＝20隻腳。",
        "雞兔的每隻腳數都是偶數，所以總腳數也必為偶數。",
        "十五既低於二十又是奇數，資料不可能成立。"
      ],
      "answer": "不可能。",
      "why": "合理性檢查可在列式求解前排除錯誤資料。十隻動物的最少腳數是二十，最多是四十，且任何二與四的整數組合都為偶數；十五同時違反下界與偶數性，因此無須繼續求解。"
    },
    {
      "exampleId": "L4",
      "prompt": "車棚有腳踏車與汽車共18輛、輪子54個，求各幾輛。",
      "solutionSteps": [
        "設腳踏車x輛、汽車y輛，列x＋y＝18與2x＋4y＝54。",
        "輪數式減總數式兩倍，得2y＝18，所以汽車9輛。",
        "腳踏車也有9輛，回算總輪數為18＋36＝54。"
      ],
      "answer": "腳踏車9輛、汽車9輛。",
      "why": "這個停車場問題與雞兔模型同構：兩類車各算一輛，但輪子貢獻分別為二與四。兩個獨立總量能唯一求解；基準差額顯示九輛汽車，其餘九輛腳踏車，兩項總數都吻合。"
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
  "contentSha256": "cbedfb78d91bca44a627cc898a9e08d0a179291541f13a89ffc2c7c50d34dce4",
  "concept": "雞兔同籠問題利用兩類物件在第一種計量上貢獻相同、在第二種計量上貢獻不同來建立聯立方程式。雞與兔每隻都有一個頭，所以總隻數式是x加y等於總數；雞有兩腳、兔有四腳，所以腳數式是2x加4y等於總腳數。也可先假設全為雞，再用每換一隻兔多兩隻腳的差額求兔數。答案必須是非負整數，總腳數還應介於全雞與全兔的腳數之間並且為偶數。",
  "method": [
    {
      "step": 1,
      "instruction": "設雞x隻、兔y隻，或依同構情境明確定義兩類物件與各自單位。",
      "check": "兩個未知數都代表非負整數，後續係數不會配錯物件。"
    },
    {
      "step": 2,
      "instruction": "由每類各貢獻一個頭建立總隻數式x＋y＝H。",
      "check": "頭數式沒有誤放二與四的腳數係數。"
    },
    {
      "step": 3,
      "instruction": "由雞兩腳、兔四腳建立2x＋4y＝L，或寫出對應同構計量式。",
      "check": "每類的單位貢獻乘上正確變數，總量單位一致。"
    },
    {
      "step": 4,
      "instruction": "用消去法求解，或以全雞基準計算額外腳數再除以每隻增加量。",
      "check": "基準差額除的是每換一類所增加的二隻腳，不是總腳數。"
    },
    {
      "step": 5,
      "instruction": "將兩類數量代回，檢查總數、總腳數、非負整數、範圍與奇偶性。",
      "check": "答案回應題目所問物件，沒有把雞數與兔數對調。"
    }
  ]
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
    "explanation": "x表示雞的隻數、y表示兔的隻數，每一隻動物都恰好有一個頭，所以頭的總數也等於動物總隻數。把兩類相加並令其等於二十，得到x＋y＝20；腳數二與四不應放入頭數式。",
    "steps": [
      "依變數定義列出雞x隻與兔y隻。",
      "確認每隻雞與每隻兔各貢獻1個頭。",
      "把兩類頭數相加，寫成x＋y＝20。"
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
    "contentSha256": "fb124ad8e06b54314dac99473d2a62289786dbaa7f3543a5fdea2985aef9dfac",
    "commonMistake": "把雞兔各自的腳數係數誤放進頭數方程式。"
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
    "explanation": "每隻雞有兩隻腳，x隻雞共貢獻2x隻腳；每隻兔有四隻腳，y隻兔共貢獻4y隻腳。兩類腳數相加等於五十六，所以正確方程式是2x＋4y＝56。",
    "steps": [
      "用每隻雞2隻腳乘雞數x，得到2x。",
      "用每隻兔4隻腳乘兔數y，得到4y。",
      "合計兩類腳數並令其等於56，列出2x＋4y＝56。"
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
    "contentSha256": "e55e67a3deb276076f74c3faa95571267232fe2e2765393ebb3c1e378725f3a1",
    "commonMistake": "把雞的兩腳與兔的四腳對調，造成係數配錯變數。"
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
    "independentSolution": "10 隻時腳數應為 20 到 40 之間的偶數；28 符合。",
    "explanation": "若十隻全是雞，最少有二十隻腳；若全是兔，最多有四十隻腳。每把一隻雞換成兔，總腳數增加二，所以可能值必為二十到四十之間的偶數。四個選項中只有二十八符合。",
    "steps": [
      "計算全為雞的下界：10×2＝20隻腳。",
      "計算全為兔的上界：10×4＝40隻腳。",
      "檢查範圍與偶數性，選出介於20和40之間的偶數28。"
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
    "contentSha256": "534ec5341cc5c6dc68abe8274f43b1244e8993d061e3bb03c7cab7fb48489b93",
    "commonMistake": "只看數值大小，沒有同時檢查腳數必為偶數與上下界。"
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
    "explanation": "先假設二十隻全是雞，會有四十隻腳；實際五十六隻腳比基準多十六。每把一隻雞換成兔會多兩隻腳，所以兔有16÷2＝8隻，其餘十二隻是雞，代回腳數正好五十六。",
    "steps": [
      "建立全雞基準，計算20×2＝40隻腳。",
      "以56－40求出多出的16隻腳。",
      "每隻兔比雞多2隻腳，算16÷2＝8並代回驗證。"
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
    "contentSha256": "603d4defd211a8d6d54aabf16be7063b1843f570eb480c3990d9eb8ec789e2aa",
    "commonMistake": "把多出的十六隻腳直接當成兔數，忘記每隻兔只比雞多兩隻腳。"
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
    "explanation": "十五隻若全是雞共有三十隻腳，實際四十四隻腳多出十四。每隻兔相較雞多兩隻腳，因此兔有14÷2＝7隻；題目問雞數，所以再算15－7＝8隻，並以2×8＋4×7＝44驗算。",
    "steps": [
      "算全雞基準15×2＝30，求出額外腳數44－30＝14。",
      "用14÷2得到兔有7隻。",
      "由總數求雞15－7＝8隻，代回腳數式驗算。"
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
    "contentSha256": "e0306926df20014ed0bf6235071ab88124a8ed89d9b2810ced54125066505425",
    "commonMistake": "求得七隻兔後直接作答，沒有看清題目問的是雞的隻數。"
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
    "explanation": "設腳踏車x輛、汽車y輛，可列x＋y＝18與2x＋4y＝54。第二式減去第一式的兩倍，得到2y＝18，所以汽車九輛，再由總數得腳踏車也九輛；輪子數18＋36＝54，兩個原方程式都成立。",
    "steps": [
      "依總輛數列x＋y＝18，依輪子數列2x＋4y＝54。",
      "用第二式減2倍第一式，得到2y＝18並求y＝9。",
      "由x＝18－9求得腳踏車9輛，代回輪數確認。"
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
    "contentSha256": "1b52ce54fed06bf2aaa911e137513a606fc13cca106ca5605153d4c2712bba70",
    "commonMistake": "沒有固定腳踏車與汽車的輪數係數，或求出汽車後答錯物件。"
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
    "explanation": "若n隻全為雞，腳數基準是2n；題目給的2n＋18比基準多十八隻腳。每把一隻雞換成兔只增加兩隻腳，因此兔數是18÷2＝9，與總隻數n的具體大小無關，但情境需有n至少為九。",
    "steps": [
      "以全雞情形建立2n隻腳的基準。",
      "比較實際腳數2n＋18，找出額外18隻腳。",
      "每隻兔多2隻腳，計算18÷2＝9隻兔。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": true,
        "reason": "9隻兔相對全雞基準恰好多出18隻腳。"
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
    "contentSha256": "92ec064dc78e39bfe7d97ec6b2802c2cfa1448a3d9d83daf0dee804fa1b2b897",
    "commonMistake": "把額外十八隻腳直接當成兔數，或把總數n不必要地混入除法。"
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
    "explanation": "兔數是雞數的二分之三倍，所以雞與兔的數量比為二比三。設雞2k隻、兔3k隻，總數5k＝25得k＝5，因此雞十隻、兔十五隻；總腳數為2×10＋4×15＝80。",
    "steps": [
      "把兔是雞的3/2倍轉成雞比兔為2比3。",
      "設雞2k、兔3k，由5k＝25求得k＝5。",
      "算雞腳20與兔腳60，合計80隻腳。"
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
    "misconceptionTarget": "把兔倍數直接乘總隻數",
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
    "contentSha256": "29e2a0641c03ef5433d2354f3a9040158824059ac6887260782078f4cc4440a0",
    "commonMistake": "把倍數三分之二直接乘總隻數，沒有先按比例分出雞兔數量。"
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
    "independentSolution": "更換後仍有12隻動物、32隻腳。全雞基準為24隻腳，多8隻腳，所以更換後有4隻兔；原來兔有4＋2＝6隻。",
    "explanation": "更換後動物總數仍是十二隻，先解更換後狀態：全雞基準二十四隻腳，實際多八隻腳，每隻兔多兩隻腳，所以更換後有四隻兔。因原先換走兩隻兔，原來兔數為4＋2＝6隻。",
    "steps": [
      "以更換後12隻全雞為基準，計算24隻腳。",
      "由32－24＝8，再除以每隻多2腳，得換後兔4隻。",
      "把換成雞的2隻兔加回，求得原來兔有6隻。"
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
    "contentSha256": "59f87f27fc4974bb715157f96970a4e99a2172171f427cd5cd5183790b58e3a1",
    "commonMistake": "求得更換後四隻兔就直接作答，沒有逆推加回被換走的兩隻兔。"
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
    "independentSolution": "總隻數與腳數是獨立條件；每隻一個碗使碗數只是總數重複。",
    "explanation": "「共三十隻」提供雞兔總數式；若每隻動物一個碗，「三十個碗」只是同一總數條件的重複。雞與兔的腳數不同，所以總腳數八十四能形成另一個獨立方程式，才可區分兩類動物數量。",
    "steps": [
      "把共30隻翻成雞數加兔數等於30。",
      "判斷每隻一碗使碗數式與總隻數式相依。",
      "用雞2腳、兔4腳列總腳數式，確認它提供獨立限制。"
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
        "reason": "每隻一個碗，與總隻數重複。"
      },
      {
        "choice": "腳共 84 隻",
        "truth": true,
        "reason": "腳數對雞、兔的貢獻不同，提供第二獨立條件。"
      },
      {
        "choice": "三項都同樣必要",
        "truth": false,
        "reason": "碗數資料與總隻數相依。"
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
    "contentSha256": "01564782cbe2007a36696b111ebdcb320bba84be7db9d379659d85fa15ae27b7",
    "commonMistake": "認為表格每一欄都同樣必要，沒有檢查飼料碗資料只是總數重複。"
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
    "explanation": "若四十輛全是機車，共有八十個輪子；實際一百一十六個，比基準多三十六。每把一輛機車換成汽車會多兩個輪子，所以汽車有36÷2＝18輛，其餘二十二輛是機車。",
    "steps": [
      "建立全機車基準，計算40×2＝80個輪子。",
      "以116－80求出額外36個輪子。",
      "用36÷2求得汽車18輛，並以22輛機車代回驗算。"
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
        "reason": "把116個輪子全視為汽車輪子並計算116÷4，才會得到29。"
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
    "contentSha256": "a8737c678f08a5bf61a854c4cb3615f94b8e0013198ddc848868b9897ec61fbe",
    "commonMistake": "把全部一百一十六個輪子都除以四，誤認每輛車都是汽車。"
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
    "explanation": "題幹一開始已明確定義x為雙腳椅件數、y為四腳桌件數。代數運算不會改變變數的意義，所以解出的y必須解讀為四腳桌的件數，並附上「件」的單位，而不是總件數或多出的腳數。",
    "steps": [
      "回看題幹的變數定義：x代表椅、y代表桌。",
      "確認解聯立過程不會改變y所代表的物件。",
      "把y的數值翻回「四腳桌的件數」並補上單位。"
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
    "contentSha256": "07b4ec6504795bf0647fba1318f3313e1b1ee677f4004bc6cd953d7d6392ec20",
    "commonMistake": "只報代數數值而忘記變數定義，將桌數誤說成椅數或總數。"
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
      "設雞x隻、兔y隻，列總隻數式x＋y＝28與總腳數式2x＋4y＝76。",
      "把第一式乘二得2x＋2y＝56；用腳數式減去此式，得到2y＝20，所以y＝10。",
      "由x＋y＝28求得x＝18，因此雞十八隻、兔十隻。",
      "合理性檢查：18＋10＝28，2×18＋4×10＝76，且兩數皆為非負整數。"
    ],
    "alternativeMethods": [
      "全雞有 56 腳，多 20；每兔多 2 腳，所以兔 10。"
    ],
    "reasoningSteps": [
      "定義雞兔隻數並建立總隻數與總腳數兩式。",
      "用總隻數式的兩倍消去雞數，求出兔數。",
      "由總數回推雞數，保留各變數的物件對應。",
      "檢查非負整數、總隻數與總腳數三項條件。"
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
      "derivedResult": "雞18隻、兔10隻。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立用聯立與全雞基準兩法得到相同結果。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c76152a219b9af89cddfa3416f20c6db56921b1fea033f0f94e7d9a86d74ec8e",
    "commonErrors": [
      "把雞與兔的腳數係數對調，列成4x加2y等於七十六。",
      "求得兔十隻後忘記由總隻數求雞，或沒有代回兩個原方程式驗算。"
    ]
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
      "設機車x輛、汽車y輛。總輛數給出x＋y＝45，總輪數給出2x＋4y＝134。",
      "先檢查資料：四十五輛的輪數應介於全機車九十個與全汽車一百八十個之間，且必為偶數；一百三十四符合。",
      "腳數式減去總輛數式的兩倍，得到2y＝44，所以汽車y＝22，機車x＝23。",
      "回算：23＋22＝45，2×23＋4×22＝134；兩數為非負整數，因此資料合理。"
    ],
    "alternativeMethods": [
      "全機車 90 輪，多 44；每輛汽車多 2 輪，汽車 22。"
    ],
    "reasoningSteps": [
      "依兩類車輛定義未知數，建立輛數與輪數方程式。",
      "用上下界與偶數性先檢查總輪數是否可能。",
      "消去機車數求汽車數，再由總數求機車數。",
      "代回兩式並檢查答案為非負整數。"
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
    "contentSha256": "84ef9f74451a0ee168cf85fa02490f94681fd7ab57be8d672fe14763ed38bd7f",
    "commonErrors": [
      "把機車兩輪與汽車四輪的係數配反，造成兩類車輛數量對調。",
      "只算出整數答案便宣稱合理，未檢查總輪數範圍與代回結果。"
    ]
  }
];

export const DRAWING_SPECS = [];
