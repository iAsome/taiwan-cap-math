// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s014-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-apps",
  "skillId": "system-literacy-context",
  "lockedSkillTitle": "聯立方程式素養題",
  "title": "聯立方程式素養題：從資料規則找出兩個獨立條件",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "聯立方程式素養題",
    "scope": "從表格、方案與活動規則中辨認兩個條件，建立模型並解釋答案。"
  },
  "prerequisiteBridge": "先備技能 system-mixture-basic 已建立必要基礎；本節將其用於「從表格、方案與活動規則中辨認兩個條件，建立模型並解釋答案。」",
  "learningGoals": [
    "能讀懂表格、方案或活動規則中的量與單位。",
    "能排除無關資訊並定義適當未知數。",
    "能建立、求解並解釋聯立方程式。",
    "能比較方案、驗證限制並說明模型假設。"
  ],
  "vocabulary": [
    {
      "term": "資料欄位",
      "definition": "表格中每一欄代表的量。"
    },
    {
      "term": "固定費用",
      "definition": "不隨使用量改變的費用。"
    },
    {
      "term": "變動費用",
      "definition": "隨數量或時間改變的費用。"
    },
    {
      "term": "模型假設",
      "definition": "為使方程式成立而依題意採用的條件。"
    },
    {
      "term": "敏感資訊",
      "definition": "會改變答案的關鍵資料。"
    }
  ],
  "notation": [
    {
      "symbol": "總費用=固定費+單位費×用量",
      "meaning": "線性方案常見模型。"
    },
    {
      "symbol": "ax+by=c",
      "meaning": "把表格中的單位貢獻轉成總量。"
    }
  ],
  "conceptDevelopment": [
    "素養題的難點常在辨認資訊，而不是計算本身。先問：未知的是哪兩個量？哪兩段資料能形成獨立等式？",
    "表格的欄名與單位是方程式的一部分；同一數字在「元/次」與「次」欄中意義不同。",
    "算出數值後仍要回答題目真正問的比較、限制或決策。"
  ],
  "definitions": [
    {
      "name": "必要資訊",
      "statement": "缺少後就不能唯一建立模型的資料。"
    },
    {
      "name": "冗餘資訊",
      "statement": "可用於檢查，但不是求解所必需。"
    },
    {
      "name": "線性規則",
      "statement": "每增加一單位，總量固定增加同一數值。"
    }
  ],
  "formulas": [
    {
      "formula": "固定量+單位貢獻×數量=總量",
      "conditions": [
        "單位貢獻固定且無階梯費率。"
      ],
      "meaning": "把方案或表格轉為一次式。"
    }
  ],
  "invalidUseCases": [
    "階梯費率、平方成長或乘積型關係不一定是二元一次。",
    "不能忽略表格註記，例如費用是否含基本量。",
    "題目問最省方案時，僅求交點還要比較指定使用量。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "標記所求與單位",
      "check": "先不急著算。"
    },
    {
      "step": 2,
      "instruction": "整理必要資料",
      "check": "可改寫成小表格。"
    },
    {
      "step": 3,
      "instruction": "定義兩未知數",
      "check": "保持意義固定。"
    },
    {
      "step": 4,
      "instruction": "建立兩個獨立等式",
      "check": "檢查是否線性。"
    },
    {
      "step": 5,
      "instruction": "求解並回到情境回答",
      "check": "比較、取整與限制都要說明。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "兩種活動票共 80 張，成人每張 250 元、學生 150 元，收入 15600 元。",
      "solutionSteps": [
        "設成人 x、學生 y。",
        "x+y=80、250x+150y=15600。"
      ],
      "answer": "成人 36、學生 44。"
    },
    {
      "exampleId": "L2",
      "prompt": "某方案基本費 100 元，每次 20 元；另一方案基本費 220 元，每次 10 元。何時同價？",
      "solutionSteps": [
        "100+20x=220+10x。",
        "10x=120。"
      ],
      "answer": "12 次時同價。"
    },
    {
      "exampleId": "L3",
      "prompt": "表格顯示兩種餐盒的熱量與蛋白質，需選共 5 盒且蛋白質 90 克。",
      "solutionSteps": [
        "設兩種盒數 x、y。",
        "以盒數總和和蛋白質總和列式。",
        "熱量欄可用來計算解後總熱量。"
      ],
      "answer": "先由必要欄求盒數，再用冗餘欄回答延伸問題。"
    },
    {
      "exampleId": "L4",
      "prompt": "判斷「每超過 10 次後單價改變」是否可直接用一條一次式。",
      "solutionSteps": [
        "單價分段改變。",
        "需分情況，不能用單一固定斜率。"
      ],
      "answer": "不屬單一線性規則。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "看到所有數字都塞進方程式",
      "correction": "先區分必要與延伸資訊。"
    },
    {
      "mistake": "忽略固定費",
      "correction": "方案費用不只是單價乘次數。"
    },
    {
      "mistake": "解出交點就直接判某方案永遠較便宜",
      "correction": "還要比較交點兩側。"
    },
    {
      "mistake": "把分段費率當單一一次式",
      "correction": "須依區間分情況。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "固定費會隨使用量改變嗎？",
      "answer": "不會。"
    },
    {
      "prompt": "元/次乘次得到什麼單位？",
      "answer": "元。"
    },
    {
      "prompt": "兩式完全成比例能唯一求解嗎？",
      "answer": "不能。"
    },
    {
      "prompt": "算出數字後最後一步？",
      "answer": "用題目語言解釋並檢查限制。"
    }
  ],
  "summary": [
    "先找所求與必要資料。",
    "單位與表格註記不可忽略。",
    "建立兩個獨立線性條件。",
    "解後要做情境決策與限制檢查。"
  ],
  "connections": {
    "previous": "先備技能 system-mixture-basic 已建立必要基礎；本節將其用於「從表格、方案與活動規則中辨認兩個條件，建立模型並解釋答案。」",
    "next": "下一技能將把本單元方法整合到較長的資料情境。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "示例涵蓋表格、固定費、延伸欄與分段規則邊界；每一情境都說明資料為何必要，沒有將裝飾性故事當素養。",
    "reviewNote": "示例涵蓋表格、固定費、延伸欄與分段規則邊界；每一情境都說明資料為何必要，沒有將裝飾性故事當素養。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "78caf834182d850f0cc4c667300c833180b1fa8b9c1515780b811cc255b2db95"
};

export const QUESTIONS = [
  {
    "questionId": "u04-s014-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "方案 A：基本費 100 元，每次 20 元。使用 x 次的總費用為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "建立線性費用式",
    "choices": [
      "120x",
      "100+20x",
      "100x+20",
      "20+x"
    ],
    "answerIndex": 1,
    "independentSolution": "固定費只收一次，變動費為 20×x。",
    "explanation": "線性方案=固定費+單位費×用量。",
    "steps": [
      "寫固定費 100。",
      "寫變動費 20x。",
      "相加。"
    ],
    "optionAnalysis": [
      {
        "choice": "120x",
        "truth": false,
        "reason": "把基本費也按次計。"
      },
      {
        "choice": "100+20x",
        "truth": true,
        "reason": "100 元固定加上每次 20 元。"
      },
      {
        "choice": "100x+20",
        "truth": false,
        "reason": "基本費與單次費對調。"
      },
      {
        "choice": "20+x",
        "truth": false,
        "reason": "漏掉金額係數。"
      }
    ],
    "misconceptionTarget": "把固定費重複計費",
    "prerequisiteCheck": "只需先備 system-mixture-basic，並使用本技能「聯立方程式素養題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "元。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「建立線性費用式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "基礎資料轉式。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6bb0848032bee8ba514bf0758c6efcc256310a83a7036fa48f842048e682c047"
  },
  {
    "questionId": "u04-s014-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "表格欄位「元/次」乘上「次」後，單位為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "判斷表格單位",
    "choices": [
      "次",
      "元/次²",
      "元",
      "無單位"
    ],
    "answerIndex": 2,
    "independentSolution": "(元/次)×次=元。",
    "explanation": "單位分析可檢查費用模型。",
    "steps": [
      "約去次。",
      "保留元。"
    ],
    "optionAnalysis": [
      {
        "choice": "次",
        "truth": false,
        "reason": "遺漏單價單位。"
      },
      {
        "choice": "元/次²",
        "truth": false,
        "reason": "錯誤相除。"
      },
      {
        "choice": "元",
        "truth": true,
        "reason": "次數單位相消，留下金額單位。"
      },
      {
        "choice": "無單位",
        "truth": false,
        "reason": "單位會約掉“次”但保留元。"
      }
    ],
    "misconceptionTarget": "忽略複合單位",
    "prerequisiteCheck": "只需先備 system-mixture-basic，並使用本技能「聯立方程式素養題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「判斷表格單位」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "直接單位。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f0b0010c4161ecb16684d149e127d1d458f32267a4702d61da6fff6c28493d0e"
  },
  {
    "questionId": "u04-s014-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "兩個未知數要唯一求解，通常需要什麼？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "理解資料充分性",
    "choices": [
      "兩個獨立的線性條件",
      "兩句文字即可",
      "一個總數條件",
      "所有資料都放進同一式"
    ],
    "answerIndex": 0,
    "independentSolution": "兩個未知量通常需兩個不相依的一次方程式。",
    "explanation": "重點是獨立而非資料條數。",
    "steps": [
      "辨認未知數數量。",
      "檢查條件是否相依。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩個獨立的線性條件",
        "truth": true,
        "reason": "兩個獨立條件可共同限制兩個未知數。"
      },
      {
        "choice": "兩句文字即可",
        "truth": false,
        "reason": "文字可能無關或重複。"
      },
      {
        "choice": "一個總數條件",
        "truth": false,
        "reason": "一個方程式通常有許多解。"
      },
      {
        "choice": "所有資料都放進同一式",
        "truth": false,
        "reason": "仍只有一個條件。"
      }
    ],
    "misconceptionTarget": "以句子數量代替條件獨立性",
    "prerequisiteCheck": "只需先備 system-mixture-basic，並使用本技能「聯立方程式素養題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「理解資料充分性」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "素養建模基礎。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "23a2979817af237d2005e0357eb87e31d15b4d366ef1c4b8b5d3e11dbee6283e"
  },
  {
    "questionId": "u04-s014-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "方案 A：100+20x 元；方案 B：220+10x 元。使用幾次時同價？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "比較兩方案同價點",
    "choices": [
      "10 次",
      "22 次",
      "32 次",
      "12 次"
    ],
    "answerIndex": 3,
    "independentSolution": "100+20x=220+10x，10x=120，x=12。",
    "explanation": "同價點由兩費用式相等求得。",
    "steps": [
      "設兩式相等。",
      "移項求 x。"
    ],
    "optionAnalysis": [
      {
        "choice": "10 次",
        "truth": false,
        "reason": "A=300、B=320。"
      },
      {
        "choice": "22 次",
        "truth": false,
        "reason": "把固定費相加。"
      },
      {
        "choice": "32 次",
        "truth": false,
        "reason": "把差額與單價和相除。"
      },
      {
        "choice": "12 次",
        "truth": true,
        "reason": "兩方案費用都為 340 元。"
      }
    ],
    "misconceptionTarget": "只比較單位費",
    "prerequisiteCheck": "只需先備 system-mixture-basic，並使用本技能「聯立方程式素養題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「比較兩方案同價點」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "標準一元化的聯立語意。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "852e93b58084819442175fa28dbccb2f59d70a4e25be05a03a7adab2e3881713"
  },
  {
    "questionId": "u04-s014-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "餐盒 A 每盒蛋白質 20 克，B 每盒 10 克，共 6 盒、蛋白質 90 克。A 餐盒幾盒？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從營養表求組合",
    "choices": [
      "2 盒",
      "4 盒",
      "5 盒",
      "3 盒"
    ],
    "answerIndex": 3,
    "independentSolution": "x+y=6，20x+10y=90。減 10(x+y)=60 得 10x=30，x=3。",
    "explanation": "盒數欄與蛋白質欄形成兩條件。",
    "steps": [
      "列盒數。",
      "列蛋白質。",
      "消去。"
    ],
    "optionAnalysis": [
      {
        "choice": "2 盒",
        "truth": false,
        "reason": "總蛋白質 80。"
      },
      {
        "choice": "4 盒",
        "truth": false,
        "reason": "總蛋白質 100。"
      },
      {
        "choice": "5 盒",
        "truth": false,
        "reason": "總蛋白質 110。"
      },
      {
        "choice": "3 盒",
        "truth": true,
        "reason": "3 盒各類時蛋白質 60+30=90 克。"
      }
    ],
    "misconceptionTarget": "把每盒數值直接相加",
    "prerequisiteCheck": "只需先備 system-mixture-basic，並使用本技能「聯立方程式素養題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "克/盒×盒=克。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從營養表求組合」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "表格資料整合。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "098511b02ad14c6267bc087d8af0572f0424d4fd8b4bbb234b0fd80c97484332"
  },
  {
    "questionId": "u04-s014-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "某活動成人每人 300 元、學生每人 180 元，共 40 人、收入 9600 元。學生有幾人？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從活動收入求指定類別",
    "choices": [
      "20 人",
      "10 人",
      "30 人",
      "32 人"
    ],
    "answerIndex": 0,
    "independentSolution": "全學生收入 7200，多 2400；每成人多 120，成人 20，學生 20。",
    "explanation": "活動收費表是票價模型。",
    "steps": [
      "算全學生基準。",
      "求成人 20。",
      "由總數求學生。"
    ],
    "optionAnalysis": [
      {
        "choice": "20 人",
        "truth": true,
        "reason": "20 成人與 20 學生收入 9600。"
      },
      {
        "choice": "10 人",
        "truth": false,
        "reason": "收入 10800。"
      },
      {
        "choice": "30 人",
        "truth": false,
        "reason": "收入 8400。"
      },
      {
        "choice": "32 人",
        "truth": false,
        "reason": "收入 8160。"
      }
    ],
    "misconceptionTarget": "求出成人後答錯物件",
    "prerequisiteCheck": "只需先備 system-mixture-basic，並使用本技能「聯立方程式素養題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從活動收入求指定類別」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "標準建模加物件解釋。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b0a85396d5e43c4a9a1956c8efcb1fdecd0ac167c80e1948e6c504aea12e1f72"
  },
  {
    "questionId": "u04-s014-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "方案 A：固定 80 元，每 GB 15 元；方案 B：固定 200 元，每 GB 5 元。使用量超過多少 GB 後 B 較便宜？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "比較方案交點兩側",
    "choices": [
      "少於 12 GB",
      "恰好 12 GB",
      "超過 12 GB",
      "超過 20 GB"
    ],
    "answerIndex": 2,
    "independentSolution": "同價點 80+15x=200+5x，x=12。因為 A 每 GB 增加更快，x>12 時 B 較便宜。",
    "explanation": "求交點後還要判斷兩側。",
    "steps": [
      "求同價點。",
      "比較單位費斜率。",
      "回答嚴格超過。"
    ],
    "optionAnalysis": [
      {
        "choice": "少於 12 GB",
        "truth": false,
        "reason": "此區間 A 較便宜。"
      },
      {
        "choice": "恰好 12 GB",
        "truth": false,
        "reason": "此時同價，不是 B 較便宜。"
      },
      {
        "choice": "超過 12 GB",
        "truth": true,
        "reason": "12 GB 同價，之後 A 每增加 1 GB 多漲 10 元。"
      },
      {
        "choice": "超過 20 GB",
        "truth": false,
        "reason": "B 從 12 後即較便宜，不必等到 20。"
      }
    ],
    "misconceptionTarget": "求出交點就當作較便宜區間",
    "prerequisiteCheck": "只需先備 system-mixture-basic，並使用本技能「聯立方程式素養題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「比較方案交點兩側」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只用一次費用式與基本大小比較，不使用函式圖形。",
    "difficultyReason": "需要不等判斷。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "ed5a000b8cbf1952fe91dc36f8cba3fdbefdd8410c2dc19bb51d95fb24e20626"
  },
  {
    "questionId": "u04-s014-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "某表格兩欄：盒數總和 x+y=8；熱量總和 400x+400y=3200。能否由此求出各盒數？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "審查表格獨立性",
    "choices": [
      "能，各 4 盒",
      "不能，第二欄只是第一欄的 400 倍",
      "能，x=8,y=0",
      "不能，因為兩式矛盾"
    ],
    "answerIndex": 1,
    "independentSolution": "400(x+y)=3200 與第一式完全相同。",
    "explanation": "不同欄位可能沒有提供獨立資訊。",
    "steps": [
      "比較整式倍數。",
      "判斷資訊重複。"
    ],
    "optionAnalysis": [
      {
        "choice": "能，各 4 盒",
        "truth": false,
        "reason": "這只是一組可能。"
      },
      {
        "choice": "不能，第二欄只是第一欄的 400 倍",
        "truth": true,
        "reason": "熱量欄無法區分兩種盒，因為每盒熱量相同。"
      },
      {
        "choice": "能，x=8,y=0",
        "truth": false,
        "reason": "也只是一組可能。"
      },
      {
        "choice": "不能，因為兩式矛盾",
        "truth": false,
        "reason": "兩式相容。"
      }
    ],
    "misconceptionTarget": "認為不同單位欄必然獨立",
    "prerequisiteCheck": "只需先備 system-mixture-basic，並使用本技能「聯立方程式素養題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「審查表格獨立性」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "資料品質高階判斷。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "65460847845fd0cd03f5be660804ad495b0589e63c3da95b9460442044943ae0"
  },
  {
    "questionId": "u04-s014-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "某折扣規則為「前 10 次每次 20 元，超過部分每次 12 元」。為何不能用單一式 20x 表示所有 x？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認非單一線性規則",
    "choices": [
      "因為有固定費",
      "因為 x 不是整數",
      "單價在 10 次後改變，規則是分段的",
      "因為 12 小於 20"
    ],
    "answerIndex": 2,
    "independentSolution": "x≤10 與 x>10 的費用增加率不同，需區間表示。",
    "explanation": "單一線性式要求單位增量固定。",
    "steps": [
      "找費率改變點。",
      "判斷分段。"
    ],
    "optionAnalysis": [
      {
        "choice": "因為有固定費",
        "truth": false,
        "reason": "題目沒有固定費。"
      },
      {
        "choice": "因為 x 不是整數",
        "truth": false,
        "reason": "次數可為整數但不是核心。"
      },
      {
        "choice": "單價在 10 次後改變，規則是分段的",
        "truth": true,
        "reason": "超過 10 次後的邊際費用改變。"
      },
      {
        "choice": "因為 12 小於 20",
        "truth": false,
        "reason": "大小本身不是不能用一次式的理由。"
      }
    ],
    "misconceptionTarget": "看到單價就直接寫單價×次數",
    "prerequisiteCheck": "只需先備 system-mixture-basic，並使用本技能「聯立方程式素養題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認非單一線性規則」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只判斷是否可用單一一次式，不展開高中分段函式符號。",
    "difficultyReason": "模型邊界判斷。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6b32a82bb399c2d69b5127daa27463b39ab78dd0bca7cb6250ae5d3537bcdb89"
  },
  {
    "questionId": "u04-s014-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "共享單車 A 收基本費 10 元，每分鐘 2 元；B 無基本費，每分鐘 3 元。騎多久兩方案同價？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從共享服務規則求同價點",
    "choices": [
      "10 分鐘",
      "5 分鐘",
      "20 分鐘",
      "30 分鐘"
    ],
    "answerIndex": 0,
    "independentSolution": "A=10+2x，B=3x；10+2x=3x，x=10。",
    "explanation": "基本費與每分鐘費共同決定同價時間。",
    "steps": [
      "建立兩費用式。",
      "設相等。",
      "解 x。"
    ],
    "optionAnalysis": [
      {
        "choice": "10 分鐘",
        "truth": true,
        "reason": "10+2×10=30，3×10=30。"
      },
      {
        "choice": "5 分鐘",
        "truth": false,
        "reason": "A=20、B=15。"
      },
      {
        "choice": "20 分鐘",
        "truth": false,
        "reason": "A=50、B=60。"
      },
      {
        "choice": "30 分鐘",
        "truth": false,
        "reason": "A=70、B=90。"
      }
    ],
    "misconceptionTarget": "忽略基本費",
    "prerequisiteCheck": "只需先備 system-mixture-basic，並使用本技能「聯立方程式素養題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "分鐘。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從共享服務規則求同價點」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "情境費用結構必要。",
    "literacyContextNecessity": "A 的基本費與兩方案分鐘費是決定交點的全部必要資料。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "0af75966912b910f9ea0a8e8a1dc11303c9b1a6196adbc95b0b0cb3f0945df26"
  },
  {
    "questionId": "u04-s014-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "學校採購兩種桌椅組：甲組佔 2 平方公尺、可坐 4 人；乙組佔 3 平方公尺、可坐 6 人。若共 10 組、總佔地 24 平方公尺，乙組幾組？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從多欄採購表篩選必要欄",
    "choices": [
      "2 組",
      "4 組",
      "6 組",
      "8 組"
    ],
    "answerIndex": 1,
    "independentSolution": "x+y=10，2x+3y=24。減 2(x+y)=20 得 y=4。",
    "explanation": "人數欄在本問可作為解後檢查，不是求乙組所必需。",
    "steps": [
      "列組數與佔地。",
      "消去 x。"
    ],
    "optionAnalysis": [
      {
        "choice": "2 組",
        "truth": false,
        "reason": "總佔地 22。"
      },
      {
        "choice": "4 組",
        "truth": true,
        "reason": "6 甲組佔 12，加 4 乙組佔 12，共 24。"
      },
      {
        "choice": "6 組",
        "truth": false,
        "reason": "總佔地 26。"
      },
      {
        "choice": "8 組",
        "truth": false,
        "reason": "總佔地 28。"
      }
    ],
    "misconceptionTarget": "把所有欄都強行放入方程式",
    "prerequisiteCheck": "只需先備 system-mixture-basic，並使用本技能「聯立方程式素養題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公尺/組×組=平方公尺。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從多欄採購表篩選必要欄」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "表格素養。",
    "literacyContextNecessity": "組數與佔地足以求解；座位數是可用於延伸檢驗的冗餘資料。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7066a78e26b31b923e0086a91f27bb60d6cd534da135b744eb811de45a9dad6a"
  },
  {
    "questionId": "u04-s014-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "能源報表顯示兩裝置共運作 14 小時；裝置甲每小時 5 度、乙每小時 3 度，共耗 58 度。甲運作多久？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從能源報表反推執行時數",
    "choices": [
      "6 小時",
      "7 小時",
      "10 小時",
      "8 小時"
    ],
    "answerIndex": 3,
    "independentSolution": "x+y=14，5x+3y=58。減 3(x+y)=42 得 2x=16，x=8。",
    "explanation": "執行時間與單位耗電量建立加權總量。",
    "steps": [
      "列總時間。",
      "列總耗電。",
      "消去。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 小時",
        "truth": false,
        "reason": "這是乙時間。"
      },
      {
        "choice": "7 小時",
        "truth": false,
        "reason": "總耗電 56。"
      },
      {
        "choice": "10 小時",
        "truth": false,
        "reason": "總耗電 62。"
      },
      {
        "choice": "8 小時",
        "truth": true,
        "reason": "甲 8 小時耗 40，乙 6 小時耗 18，共 58。"
      }
    ],
    "misconceptionTarget": "平均分配時數",
    "prerequisiteCheck": "只需先備 system-mixture-basic，並使用本技能「聯立方程式素養題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "度/小時×小時=度。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從能源報表反推執行時數」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "耗電率欄是必要資料。",
    "literacyContextNecessity": "兩裝置每小時耗電不同，故總耗電能區分執行時數。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "cea5f44e2fc55082f20eeb19c30f26ebe56af0e406280468519234412200a9af"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s014-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "網路方案 A：基本費 80 元，每 GB 15 元；方案 B：基本費 200 元，每 GB 5 元。求同價用量，並判斷 20 GB 時哪個較便宜、便宜多少。",
    "requiredWork": [
      "建立兩費用式。",
      "求交點後比較20GB。"
    ],
    "standardSolution": [
      "A=80+15x，B=200+5x。",
      "同價：80+15x=200+5x，10x=120，x=12GB。",
      "20GB時 A=380元，B=300元。",
      "B較便宜80元。"
    ],
    "alternativeMethods": [
      "可先觀察交點後 A 每GB 比B多增加10元；20比12多8GB，因此B便宜80元。"
    ],
    "reasoningSteps": [
      "建模。",
      "求交點。",
      "代入指定用量並解釋。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "12GB同價，20GB時B便宜80元，過程完整。"
      },
      {
        "score": 2,
        "criteria": "結論正確但一項費用式或差額說明略缺。"
      },
      {
        "score": 1,
        "criteria": "正確求出同價12GB，但未完成20GB比較。"
      },
      {
        "score": 0,
        "criteria": "只比較每GB費用而忽略基本費。"
      }
    ],
    "partialCreditRules": [
      "交點一分，兩方案20GB費用一分，決策與差額一分。"
    ],
    "followThroughPolicy": "若交點算錯但20GB兩費用獨立算對，可給2分。",
    "unitNotationRules": "用量為GB，費用為元。",
    "answerOnlyPolicy": "只答“B”無計算最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "12GB同價；20GB時B便宜80元。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立直接代入與邊際差兩法得到80元。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9246c65c3c28357bb2b155a12f62ac965f0cf363e5e71ad7e8a4d55ba19b8f36"
  },
  {
    "questionId": "u04-s014-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "餐盒表：A 每盒 500 大卡、蛋白質 20 克；B 每盒 350 大卡、蛋白質 10 克。學校買 8 盒，共有蛋白質 120 克。求 A、B 各幾盒，再求總熱量。",
    "requiredWork": [
      "先用盒數和蛋白質求組合。",
      "熱量欄用於解後計算。"
    ],
    "standardSolution": [
      "設A x盒、B y盒。",
      "x+y=8，20x+10y=120。",
      "減10(x+y)=80，10x=40，x=4，y=4。",
      "總熱量=500×4+350×4=3400大卡。"
    ],
    "alternativeMethods": [
      "蛋白質平均15克/盒，正好是20與10中點，所以兩種等量，各4盒。"
    ],
    "reasoningSteps": [
      "篩選必要欄。",
      "求盒數。",
      "使用熱量欄回答延伸問題。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "A4盒、B4盒、3400大卡，且資料使用順序清楚。"
      },
      {
        "score": 2,
        "criteria": "盒數正確但熱量一處算術錯，或未說明熱量欄為延伸。"
      },
      {
        "score": 1,
        "criteria": "正確列兩式並求出一種盒數。"
      },
      {
        "score": 0,
        "criteria": "把熱量與蛋白質單位混在同一式。"
      }
    ],
    "partialCreditRules": [
      "組合兩分，熱量一分。"
    ],
    "followThroughPolicy": "若盒數早期小錯但熱量依其盒數正確計算，可給熱量方法分。",
    "unitNotationRules": "盒數為非負整數；蛋白質克與熱量大卡不可相加。",
    "answerOnlyPolicy": "只答4、4、3400無過程最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "A4盒、B4盒、總熱量3400大卡。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立回算盒數8、蛋白質120、熱量3400。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7a40938bf47c2d874d5e83ff73fc9674c1e7fb2eafec9d349e310e5e69458b10"
  }
];

export const DRAWING_SPECS = [];
