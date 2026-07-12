// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s011-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-apps",
  "skillId": "system-quantity-price-problem",
  "lockedSkillTitle": "數量與總價問題",
  "title": "數量與總價問題：每種商品各自乘單價",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "數量與總價問題",
    "scope": "以兩種商品的數量關係與總價關係建立並解聯立方程式。"
  },
  "prerequisiteBridge": "先備技能 system-ticket-price-problem 已建立必要基礎；本節將其用於「以兩種商品的數量關係與總價關係建立並解聯立方程式。」",
  "learningGoals": [
    "能依商品種類固定變數意義。",
    "能建立總數量與總價方程式。",
    "能處理包裝數、重量或價差條件。",
    "能用單位分析檢查列式。"
  ],
  "vocabulary": [
    {
      "term": "單價",
      "definition": "每一單位商品的價格。"
    },
    {
      "term": "數量",
      "definition": "購買的件、包、公斤等。"
    },
    {
      "term": "總價",
      "definition": "單價乘數量後加總。"
    },
    {
      "term": "價差",
      "definition": "兩種單價或兩筆總價的差。"
    }
  ],
  "notation": [
    {
      "symbol": "ax+by=M",
      "meaning": "a、b 是單價，x、y 是相應數量。"
    },
    {
      "symbol": "x+y=N",
      "meaning": "數量單位相同時的總量式。"
    }
  ],
  "conceptDevelopment": [
    "單價與數量要一一配對，不能交叉。",
    "商品以公斤計價時，未知數可代表公斤；以包計價時，則代表包數。",
    "有時第二個條件不是總件數，而是數量差或一種商品比另一種多幾件。"
  ],
  "definitions": [
    {
      "name": "單位價格模型",
      "statement": "總價由各類商品的「單價×數量」加總。"
    }
  ],
  "formulas": [
    {
      "formula": "總價=Σ(單價×數量)",
      "conditions": [
        "各項價格使用相同貨幣單位。"
      ],
      "meaning": "建立金額守恆。"
    }
  ],
  "invalidUseCases": [
    "公斤與公克須先換成同單位。",
    "不可把總價除以商品總數就直接當成某一單價。",
    "變數若代表包數，不能在中途當成個數。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "定義兩種商品數量",
      "check": "寫清單位。"
    },
    {
      "step": 2,
      "instruction": "列數量條件",
      "check": "總數、差或倍數。"
    },
    {
      "step": 3,
      "instruction": "列總價條件",
      "check": "逐項單價乘數量。"
    },
    {
      "step": 4,
      "instruction": "解聯立",
      "check": "選簡便方法。"
    },
    {
      "step": 5,
      "instruction": "檢查單位與合理性",
      "check": "代回總數和總價。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "30 元筆與 50 元筆共 18 枝，總價 660 元。",
      "solutionSteps": [
        "x+y=18。",
        "30x+50y=660。"
      ],
      "answer": "30 元筆 12 枝、50 元筆 6 枝。"
    },
    {
      "exampleId": "L2",
      "prompt": "蘋果每公斤 80 元、梨每公斤 120 元，共 7 公斤、680 元。",
      "solutionSteps": [
        "x+y=7。",
        "80x+120y=680。"
      ],
      "answer": "蘋果 4 公斤、梨 3 公斤。"
    },
    {
      "exampleId": "L3",
      "prompt": "A 包 6 個 90 元、B 包 4 個 68 元，共買 10 包花 790 元。",
      "solutionSteps": [
        "設 A、B 包數 x、y。",
        "x+y=10、90x+68y=790。"
      ],
      "answer": "A 5 包、B 5 包。"
    },
    {
      "exampleId": "L4",
      "prompt": "甲商品比乙多 4 件，單價 25、40 元，共 360 元。",
      "solutionSteps": [
        "x-y=4。",
        "25x+40y=360。"
      ],
      "answer": "甲 8 件、乙 4 件。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "單價與變數配錯",
      "correction": "先在變數旁標商品名稱。"
    },
    {
      "mistake": "總價式只加單價",
      "correction": "必須乘數量。"
    },
    {
      "mistake": "重量單位未統一",
      "correction": "先換算公斤或公克。"
    },
    {
      "mistake": "把包數與內容物個數混用",
      "correction": "變數單位全題一致。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "80 元/公斤乘 3 公斤得到什麼？",
      "answer": "240 元。"
    },
    {
      "prompt": "x+y 可在公斤與包混加嗎？",
      "answer": "不可。"
    },
    {
      "prompt": "甲比乙多 4 如何列？",
      "answer": "x-y=4。"
    },
    {
      "prompt": "最後至少代回哪兩個條件？",
      "answer": "數量關係與總價。"
    }
  ],
  "summary": [
    "每種單價只乘自己的數量。",
    "先統一單位。",
    "第二條件可為總數、差或倍數。"
  ],
  "connections": {
    "previous": "先備技能 system-ticket-price-problem 已建立必要基礎；本節將其用於「以兩種商品的數量關係與總價關係建立並解聯立方程式。」",
    "next": "下一技能「速率與行程問題」會延伸目前能力。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "四個例題涵蓋件數、重量、包數與數量差，均以單位分析重算；每組答案代回總價正確。",
    "reviewNote": "四個例題涵蓋件數、重量、包數與數量差，均以單位分析重算；每組答案代回總價正確。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "b94ff6b982886f41abc98a00cc00b2c14a1ca69c029f7406e45669dec579adff"
};

export const QUESTIONS = [
  {
    "questionId": "u04-s011-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "30 元的筆 x 枝、50 元的筆 y 枝，總價式為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "列商品總價式",
    "choices": [
      "x+y=總價",
      "80xy=總價",
      "30x+50y=總價",
      "30+50+x+y=總價"
    ],
    "answerIndex": 2,
    "independentSolution": "每種筆的價格乘其枝數再相加。",
    "explanation": "固定商品與變數配對。",
    "steps": [
      "寫 30x。",
      "寫 50y。",
      "加總。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=總價",
        "truth": false,
        "reason": "左邊單位為枝。"
      },
      {
        "choice": "80xy=總價",
        "truth": false,
        "reason": "錯誤把數量相乘。"
      },
      {
        "choice": "30x+50y=總價",
        "truth": true,
        "reason": "兩種筆款合計為總價。"
      },
      {
        "choice": "30+50+x+y=總價",
        "truth": false,
        "reason": "沒有做單價乘數量。"
      }
    ],
    "misconceptionTarget": "只加單價或交叉配對",
    "prerequisiteCheck": "只需先備 system-ticket-price-problem，並使用本技能「數量與總價問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "元/枝×枝=元。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「列商品總價式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "直接加權式。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "0892bb70e377e88acca7c60ebc3a0d5a77bdb2898a581c48a50439a8f1594b57"
  },
  {
    "questionId": "u04-s011-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "蘋果 x 公斤、梨 y 公斤，共 7 公斤，重量式為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "列重量總量式",
    "choices": [
      "80x+120y=7",
      "x+y=7",
      "x-y=7",
      "xy=7"
    ],
    "answerIndex": 1,
    "independentSolution": "兩種水果重量相加為總重量。",
    "explanation": "同單位總量直接相加。",
    "steps": [
      "確認 x、y 均為公斤。",
      "相加。"
    ],
    "optionAnalysis": [
      {
        "choice": "80x+120y=7",
        "truth": false,
        "reason": "把價格混入重量式。"
      },
      {
        "choice": "x+y=7",
        "truth": true,
        "reason": "x 與 y 的重量合計 7 公斤。"
      },
      {
        "choice": "x-y=7",
        "truth": false,
        "reason": "不是重量差。"
      },
      {
        "choice": "xy=7",
        "truth": false,
        "reason": "不是乘積。"
      }
    ],
    "misconceptionTarget": "把總價資訊混入重量",
    "prerequisiteCheck": "只需先備 system-ticket-price-problem，並使用本技能「數量與總價問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "公斤。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「列重量總量式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "基礎總量。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d92c75c8c2d9edb396a7f1857e4e5b0e1b6491c5af649c9ed326021b5fceed4b"
  },
  {
    "questionId": "u04-s011-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "每公斤 80 元的蘋果買 3 公斤，價錢為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "單項價格計算",
    "choices": [
      "240 元",
      "83 元",
      "24 元",
      "640 元"
    ],
    "answerIndex": 0,
    "independentSolution": "80×3=240。",
    "explanation": "單價乘數量。",
    "steps": [
      "確認單位元/公斤。",
      "乘 3 公斤。"
    ],
    "optionAnalysis": [
      {
        "choice": "240 元",
        "truth": true,
        "reason": "80×3=240。"
      },
      {
        "choice": "83 元",
        "truth": false,
        "reason": "把單價與數量相加。"
      },
      {
        "choice": "24 元",
        "truth": false,
        "reason": "漏一個 0。"
      },
      {
        "choice": "640 元",
        "truth": false,
        "reason": "把總重量誤用 8。"
      }
    ],
    "misconceptionTarget": "把乘法寫成加法",
    "prerequisiteCheck": "只需先備 system-ticket-price-problem，並使用本技能「數量與總價問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "元/公斤×公斤=元。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「單項價格計算」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "最基礎單位乘法。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6597faaa95e480670d7ef75b46422aa2c804921a8bc89d05bd954d66c1af2944"
  },
  {
    "questionId": "u04-s011-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "30 元筆與 50 元筆共 18 枝，總價 660 元，50 元筆有幾枝？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "標準數量總價題",
    "choices": [
      "12",
      "9",
      "15",
      "6"
    ],
    "answerIndex": 3,
    "independentSolution": "全買 30 元筆為 540 元，實際多 120；每換一枝 50 元筆多 20，故 6 枝。",
    "explanation": "基準法快速求較貴商品數量。",
    "steps": [
      "算全便宜商品總價。",
      "求額外金額。",
      "除價差。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "這是 30 元筆數量。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "平均分配後總價 720。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "總價過高。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "12×30+6×50=660。"
      }
    ],
    "misconceptionTarget": "把額外金額直接當數量",
    "prerequisiteCheck": "只需先備 system-ticket-price-problem，並使用本技能「數量與總價問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「標準數量總價題」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "兩步基準。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c15ecfc32bb235e4a580ab74aec866848accb393f1915699df3e8ea90d23032d"
  },
  {
    "questionId": "u04-s011-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "蘋果 80 元/公斤、梨 120 元/公斤，共 7 公斤、680 元，梨有幾公斤？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "重量與總價聯立",
    "choices": [
      "3 公斤",
      "4 公斤",
      "2 公斤",
      "5 公斤"
    ],
    "answerIndex": 0,
    "independentSolution": "全蘋果為 560 元，多 120；每公斤梨多 40，所以梨 3 公斤。",
    "explanation": "重量可作為連續量，但本題解為整數。",
    "steps": [
      "算基準總價。",
      "除每公斤價差。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 公斤",
        "truth": true,
        "reason": "4 公斤蘋果與 3 公斤梨共 680 元。"
      },
      {
        "choice": "4 公斤",
        "truth": false,
        "reason": "這是蘋果重量。"
      },
      {
        "choice": "2 公斤",
        "truth": false,
        "reason": "總價為 640。"
      },
      {
        "choice": "5 公斤",
        "truth": false,
        "reason": "總價為 760。"
      }
    ],
    "misconceptionTarget": "把公斤與件數規則混淆",
    "prerequisiteCheck": "只需先備 system-ticket-price-problem，並使用本技能「數量與總價問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "公斤與元。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「重量與總價聯立」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "標準加權重量。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8b6e85368b132bd4809069e2cf438322c357d1dfe9908e02752f957d41087aaa"
  },
  {
    "questionId": "u04-s011-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "A 商品比 B 商品多 4 件，設 A 為 x、B 為 y，數量關係為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "列數量差式",
    "choices": [
      "x+y=4",
      "x-y=4",
      "y-x=4",
      "x=4y"
    ],
    "answerIndex": 1,
    "independentSolution": "A 的數量減 B 等於多出的 4。",
    "explanation": "差額語句固定減法順序。",
    "steps": [
      "找較多者。",
      "較多減較少。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=4",
        "truth": false,
        "reason": "不是總數。"
      },
      {
        "choice": "x-y=4",
        "truth": true,
        "reason": "x 比 y 大 4。"
      },
      {
        "choice": "y-x=4",
        "truth": false,
        "reason": "比較方向相反。"
      },
      {
        "choice": "x=4y",
        "truth": false,
        "reason": "不是四倍。"
      }
    ],
    "misconceptionTarget": "把多 4 與 4 倍混淆",
    "prerequisiteCheck": "只需先備 system-ticket-price-problem，並使用本技能「數量與總價問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「列數量差式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "方向判讀。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "67f687d83cd74ab29881a82834a3be190c03a3c94dd03114f1261cc73f0f8ea3"
  },
  {
    "questionId": "u04-s011-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "甲商品 25 元、乙商品 40 元，甲比乙多 4 件，共 360 元。乙有幾件？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "差額與總價綜合",
    "choices": [
      "8",
      "6",
      "10",
      "4"
    ],
    "answerIndex": 3,
    "independentSolution": "x-y=4，x=y+4。代入 25(y+4)+40y=360，65y=260，y=4。",
    "explanation": "差額式代入總價式。",
    "steps": [
      "把 x 寫成 y+4。",
      "代入並整理。",
      "求 y=4。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "這是甲數量。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "代回總價 490。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "代回總價 650。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "甲 8 件、乙 4 件，總價 200+160=360。"
      }
    ],
    "misconceptionTarget": "把較多者與較少者答反",
    "prerequisiteCheck": "只需先備 system-ticket-price-problem，並使用本技能「數量與總價問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「差額與總價綜合」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需要代入與兩步運算。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b0c6e1f0b4df303aa154bae295c62818edc8e39c59b9320148b07eb807007818"
  },
  {
    "questionId": "u04-s011-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "某商品以「包」計價：A 包 6 個售 90 元，B 包 4 個售 68 元，共買 10 包花 790 元。A 包買幾包？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "區分包數與個數",
    "choices": [
      "4",
      "6",
      "5",
      "8"
    ],
    "answerIndex": 2,
    "independentSolution": "設 A x、B y：x+y=10，90x+68y=790。全 B 680，多 110，每 A 多 22，x=5。",
    "explanation": "變數是包數，不是內容物個數。",
    "steps": [
      "列包數總和。",
      "用全 B 基準。",
      "求 A 包數。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "總價 768。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "總價 812。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "5×90+5×68=790。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "總價 856。"
      }
    ],
    "misconceptionTarget": "把每包內容物數量放入總價式",
    "prerequisiteCheck": "只需先備 system-ticket-price-problem，並使用本技能「數量與總價問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "元/包×包=元。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「區分包數與個數」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "包裝資訊會干擾但計價按包。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6d67aa60042f0420705fb7ef839b5e128c67ea3d41a0bc1b53a86554f6a7baff"
  },
  {
    "questionId": "u04-s011-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "兩種材料共 12 公斤，單價 45 元與 75 元，總價 720 元。較貴材料幾公斤？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "較大總量的重量混購",
    "choices": [
      "4 公斤",
      "8 公斤",
      "10 公斤",
      "6 公斤"
    ],
    "answerIndex": 3,
    "independentSolution": "全便宜材料 12×45=540，多 180；每公斤貴材料多 30，所以 6 公斤。",
    "explanation": "連續重量的加權價格可用基準差。",
    "steps": [
      "算基準 540。",
      "求價差 180。",
      "除 30。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 公斤",
        "truth": false,
        "reason": "總價 660。"
      },
      {
        "choice": "8 公斤",
        "truth": false,
        "reason": "總價 780。"
      },
      {
        "choice": "10 公斤",
        "truth": false,
        "reason": "總價 840。"
      },
      {
        "choice": "6 公斤",
        "truth": true,
        "reason": "6×45+6×75=720。"
      }
    ],
    "misconceptionTarget": "把平均價直接當數量",
    "prerequisiteCheck": "只需先備 system-ticket-price-problem，並使用本技能「數量與總價問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "公斤。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「較大總量的重量混購」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "多步但結構清楚。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "10edd5ac410ac50cb1a28630e8ff8cdbbf40457eb95d51ace30030c3ef3c02c8"
  },
  {
    "questionId": "u04-s011-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "採購表：筆記本每本 35 元、資料夾每個 20 元，共買 40 件、花 1100 元。筆記本幾本？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從採購表求高價商品數",
    "choices": [
      "20",
      "10",
      "30",
      "35"
    ],
    "answerIndex": 0,
    "independentSolution": "全資料夾 800 元，多 300；每本筆記本多 15，故 20 本。",
    "explanation": "採購表的單價欄與數量總欄共同建模。",
    "steps": [
      "設全低價基準。",
      "求額外金額。",
      "除單價差。"
    ],
    "optionAnalysis": [
      {
        "choice": "20",
        "truth": true,
        "reason": "20×35+20×20=1100。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "總價 950。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "總價 1250。"
      },
      {
        "choice": "35",
        "truth": false,
        "reason": "把單價當數量。"
      }
    ],
    "misconceptionTarget": "單價與數量欄混淆",
    "prerequisiteCheck": "只需先備 system-ticket-price-problem，並使用本技能「數量與總價問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "元/件×件=元。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從採購表求高價商品數」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "表格欄位必要。",
    "literacyContextNecessity": "兩種單價、總件數與總金額共同決定採購組合。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "1c133f30781d33a552e2e44a5beea708af7d968e53e82b7dfe5aaf660b90eea5"
  },
  {
    "questionId": "u04-s011-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "烘焙紀錄：麵粉每公斤 50 元、堅果每公斤 200 元，共 5 公斤、總成本 550 元。堅果用了多少公斤？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從配方成本反求用量",
    "choices": [
      "1 公斤",
      "3 公斤",
      "2 公斤",
      "4 公斤"
    ],
    "answerIndex": 2,
    "independentSolution": "全麵粉成本 250 元，多 300；每公斤堅果多 150，故 2 公斤。",
    "explanation": "成本表把重量與單價相乘。",
    "steps": [
      "求全低價成本。",
      "求額外成本。",
      "除價差。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 公斤",
        "truth": false,
        "reason": "總成本 400。"
      },
      {
        "choice": "3 公斤",
        "truth": false,
        "reason": "總成本 700。"
      },
      {
        "choice": "2 公斤",
        "truth": true,
        "reason": "3 公斤麵粉與 2 公斤堅果共 550 元。"
      },
      {
        "choice": "4 公斤",
        "truth": false,
        "reason": "總成本 850。"
      }
    ],
    "misconceptionTarget": "把總成本除高單價",
    "prerequisiteCheck": "只需先備 system-ticket-price-problem，並使用本技能「數量與總價問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "公斤。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從配方成本反求用量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "配方成本是數學必要情境。",
    "literacyContextNecessity": "兩種原料單價差決定額外成本與堅果用量。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "75dd1e5c498d05eab9289e1b90c1dd08be8684ed49ba8acc01c27efebd4036af"
  },
  {
    "questionId": "u04-s011-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "商店促銷：A 商品每件 60 元，B 商品每件 40 元；顧客共買 15 件，使用總折價 100 元後實付 700 元。A 商品買幾件？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由促銷後實付金額反求兩種商品數量",
    "choices": [
      "5 件",
      "10 件",
      "8 件",
      "12 件"
    ],
    "answerIndex": 1,
    "independentSolution": "先加回折價，折價前總價為 800 元。設 A 商品 x 件、B 商品 y 件，則 x+y=15、60x+40y=800。用第二式減去第一式的 40 倍，得 20x=200，所以 x=10。",
    "explanation": "折價規則先決定總價方程式右邊，再由總件數與兩種單價求商品組合。",
    "steps": [
      "將 100 元折價加回，得到 800 元。",
      "列 x+y=15 與 60x+40y=800。",
      "消去 y，求得 x=10。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 件",
        "truth": false,
        "reason": "這是 B 商品的件數。"
      },
      {
        "choice": "10 件",
        "truth": true,
        "reason": "10 件 A 與 5 件 B 的折價前總價為 800 元，折價後正好實付 700 元。"
      },
      {
        "choice": "8 件",
        "truth": false,
        "reason": "代回折價前總價只有 760 元。"
      },
      {
        "choice": "12 件",
        "truth": false,
        "reason": "代回折價前總價為 840 元。"
      }
    ],
    "misconceptionTarget": "忘記加回折價、重複扣除折價或答錯商品",
    "prerequisiteCheck": "只需先備 system-ticket-price-problem，並使用本技能「數量與總價問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "件與元；60、40 的單位為元/件。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由促銷後實付金額反求兩種商品數量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "須先還原資料，再解二元一次聯立方程式。",
    "literacyContextNecessity": "折價改變總價方程式右邊；兩種單價與總件數共同決定商品組合，情境資訊不可刪除。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e8b81c5566e4b5a91f1ebe505da3a86901354a193a57554c7e2fd209652738db"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s011-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "standard",
    "itemType": "constructed-response",
    "prompt": "30 元筆與 50 元筆共買 26 枝，總價 980 元。求兩種筆各幾枝。",
    "requiredWork": [
      "列數量與總價式。",
      "答案要回算。"
    ],
    "standardSolution": [
      "設 30 元筆 x、50 元筆 y。",
      "x+y=26，30x+50y=980。",
      "減 30(x+y)=780，得 20y=200，y=10。",
      "x=16。",
      "回算 480+500=980。"
    ],
    "alternativeMethods": [
      "全買 30 元筆為 780 元，多 200，每枝貴筆多 20，所以貴筆 10。"
    ],
    "reasoningSteps": [
      "建模。",
      "消去或基準。",
      "檢查。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "30元筆16枝、50元筆10枝且過程完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但少回算。"
      },
      {
        "score": 1,
        "criteria": "兩式正確，後續算術錯誤。"
      },
      {
        "score": 0,
        "criteria": "總價式未乘單價。"
      }
    ],
    "partialCreditRules": [
      "兩式一分，求解一分，檢查一分。"
    ],
    "followThroughPolicy": "若變數定義相反但全程一致，不扣分。",
    "unitNotationRules": "單位為枝與元。",
    "answerOnlyPolicy": "只答數量最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "16枝與10枝。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立基準法與聯立法一致。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8664ba9fbb1c9115aedb0f225359b1b29cf2047bbd64767f0d97a4e539650b0b"
  },
  {
    "questionId": "u04-s011-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "蘋果 80 元/公斤、梨 120 元/公斤，共買 9 公斤、花 840 元。求各重量，並說明重量是否一定要是整數。",
    "requiredWork": [
      "列重量與總價式。",
      "回答連續量問題。"
    ],
    "standardSolution": [
      "設蘋果 x 公斤、梨 y 公斤。",
      "x+y=9，80x+120y=840。",
      "減 80(x+y)=720，40y=120，y=3，x=6。",
      "重量原則上可為非整數，因為可購買部分公斤；本題資料恰得整數。"
    ],
    "alternativeMethods": [
      "以平均單價 840÷9=93又1/3 元/公斤檢查介於 80 與 120。"
    ],
    "reasoningSteps": [
      "求解。",
      "解釋單位連續性。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "蘋果6公斤、梨3公斤，並正確說明重量可非整數。"
      },
      {
        "score": 2,
        "criteria": "數值正確但連續量說明略少。"
      },
      {
        "score": 1,
        "criteria": "方程式正確但算術錯，或只說明重量可小數。"
      },
      {
        "score": 0,
        "criteria": "把公斤強制當件數整數且模型錯誤。"
      }
    ],
    "partialCreditRules": [
      "模型與結果兩分，單位解釋一分。"
    ],
    "followThroughPolicy": "若求得小數但滿足兩式，不因非整數自動扣分；本題標準答案仍為 6、3。",
    "unitNotationRules": "公斤可用分數或小數；金額為元。",
    "answerOnlyPolicy": "只答 6、3 最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "蘋果6公斤、梨3公斤。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立回算 480+360=840，並確認公斤是連續量。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "aca7b57bcf652f326e03cca3e8efc40b2c7727974103615f32b162e27ac7bc13"
  }
];

export const DRAWING_SPECS = [];
