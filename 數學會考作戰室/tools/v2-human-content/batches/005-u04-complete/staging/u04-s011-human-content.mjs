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
        "設三十元筆 x 枝、五十元筆 y 枝，列 x+y=18。",
        "列總價式 30x+50y=660，再減去 30(x+y)=540。",
        "得到 20y=120，所以 y=6、x=12，並回算總價。"
      ],
      "answer": "30 元筆 12 枝、50 元筆 6 枝。",
      "why": "每枝五十元筆比三十元筆多二十元；實際總價比全買三十元筆多一百二十元，所以有六枝較貴的筆。其餘十二枝與總價回算都符合題意。"
    },
    {
      "exampleId": "L2",
      "prompt": "蘋果每公斤 80 元、梨每公斤 120 元，共 7 公斤、680 元。",
      "solutionSteps": [
        "設蘋果 x 公斤、梨 y 公斤，列 x+y=7。",
        "列 80x+120y=680，減去 80(x+y)=560。",
        "得到 40y=120，所以梨三公斤、蘋果四公斤。"
      ],
      "answer": "蘋果 4 公斤、梨 3 公斤。",
      "why": "七公斤全買蘋果的基準費用是五百六十元，實際多一百二十元；每公斤梨比蘋果貴四十元，因此需要三公斤梨。重量與價格兩式回代皆成立。"
    },
    {
      "exampleId": "L3",
      "prompt": "A 包 6 個 90 元、B 包 4 個 68 元，共買 10 包花 790 元。",
      "solutionSteps": [
        "變數代表包數，設 A 包 x 包、B 包 y 包，列 x+y=10。",
        "按包價列 90x+68y=790，以全買 B 的六百八十元作基準。",
        "每換一包 A 多二十二元，110÷22=5，所以兩種各五包。"
      ],
      "answer": "A 5 包、B 5 包。",
      "why": "本題按包計價，六個與四個只是包裝內容，不能再乘進包價。十包全買 B 為六百八十元，與實際相差一百一十元，恰等於五個二十二元價差。"
    },
    {
      "exampleId": "L4",
      "prompt": "甲商品比乙多 4 件，單價 25、40 元，共 360 元。",
      "solutionSteps": [
        "設甲 x 件、乙 y 件，由甲多四件列 x-y=4。",
        "將 x=y+4 代入 25x+40y=360，得到 65y+100=360。",
        "解得 y=4、x=8，回算 8×25+4×40=360。"
      ],
      "answer": "甲 8 件、乙 4 件。",
      "why": "『甲比乙多四件』決定 x=y+4，而非總數為四。代入總價式後求得乙四件、甲八件；兩者相差四且各自乘正確單價後總價為三百六十元。"
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
  "contentSha256": "b6154a5c3fc4759c01b45ce5788b918a43d5f8dca58ff60b511adaec6d4f8207",
  "conceptNarrative": [
    "數量與總價題的核心是讓每一種商品的單價與自己的數量配對。若第一種單價為 a、數量為 x，第二種單價為 b、數量為 y，總價式就是 ax+by=M；不能交叉配對，也不能只把單價相加。",
    "另一個方程式通常來自總件數、總重量、數量差或倍數關係。列式前要把變數單位固定：x 若代表包數，就不能中途改成包內個數；若代表公斤，則可以是小數，不必套用件數的整數限制。",
    "基準法可視為消去法的情境版本。先假設全部買較便宜商品，再用實際總價與基準總價的差，除以每替換一單位所增加的價差，即可求較貴商品數量。",
    "求解後必須同時回代數量關係與總價關係，並檢查數量非負、單位一致及所答商品正確。若有折價，應先判斷總價式使用折價前或折價後金額，避免重複扣除。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "定義兩種商品的數量並在變數旁標明商品與單位。",
      "check": "全題的 x、y 意義固定，沒有混用件、包、公斤或包內個數。"
    },
    {
      "step": 2,
      "instruction": "依總數、總重量、數量差或倍數語句建立第一個方程式。",
      "check": "相加與相減方向符合題意，方程式兩邊單位相同。"
    },
    {
      "step": 3,
      "instruction": "讓每種單價乘自己的數量，再相加建立總價方程式。",
      "check": "單價與變數沒有交叉，折價或附加費已放在正確一側。"
    },
    {
      "step": 4,
      "instruction": "使用代入法、消去法或等價的基準差求出兩個未知量。",
      "check": "每一步等量運算完整，所得數量符合非負與情境限制。"
    },
    {
      "step": 5,
      "instruction": "把答案代回數量式與總價式，最後用題目指定的商品名稱回答。",
      "check": "總數與總價都吻合，沒有把另一種商品數量當成答案。"
    }
  ]
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
    "explanation": "三十元的筆每枝三十元，買 x 枝的費用是 30x；五十元的筆買 y 枝的費用是 50y。總價要把兩類費用相加，因此應列 30x+50y=總價，不能只加單價或把兩種數量相乘。",
    "steps": [
      "依商品配對，寫出三十元筆的費用 30x。",
      "寫出五十元筆的費用 50y。",
      "將兩筆費用相加，得到 30x+50y=總價。"
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
    "misconceptionTarget": "只把兩種單價相加，或將單價與另一種商品的數量交叉配對。",
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
    "contentSha256": "6b1b84a78a54e6c25459b77a64033f6e9301af3004533de655e7a25d2d48618b"
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
    "explanation": "x 與 y 都以公斤為單位，分別代表蘋果與梨的重量；兩種水果合計七公斤，所以同單位的重量直接相加為 x+y=7。價格資料不屬於這個重量條件，不能把每公斤單價放入此式。",
    "steps": [
      "確認 x、y 分別代表兩種水果的公斤數。",
      "辨認題目給的是總重量七公斤。",
      "將同為公斤的兩個量相加，列出 x+y=7。"
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
    "misconceptionTarget": "把總價模型的每公斤單價混入重量方程式，造成左右單位不一致。",
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
    "contentSha256": "cfa800b2a396d5210daf2e8b8a5189e0713ba60bf6bc6df6040fb6caa130b00d"
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
    "explanation": "每公斤八十元表示一公斤的價格，購買三公斤應用單價乘重量。計算 80×3=240，單位中的公斤相消後留下元，所以價錢是二百四十元；八十三元是誤把兩數相加。",
    "steps": [
      "寫出單價八十元／公斤與重量三公斤。",
      "依總價等於單價乘數量，計算 80×3=240。",
      "檢查單位為元，得到二百四十元。"
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
    "misconceptionTarget": "把單價八十與重量三直接相加，沒有使用單價乘數量的關係。",
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
    "contentSha256": "0e5f7f3621c9fb1b0e71fa3d7526bdc1c400fc08a93c10d972f4ae9d0dfff3de"
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
    "explanation": "若十八枝全買三十元筆，總價是 18×30=540 元，比實際少一百二十元。每把一枝改成五十元筆會增加二十元，所以五十元筆有 120÷20=6 枝，其餘十二枝是三十元筆。",
    "steps": [
      "計算全買三十元筆的基準總價 18×30=540 元。",
      "求實際多出的金額 660-540=120 元。",
      "以 120÷(50-30)=6，求得五十元筆六枝。"
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
    "misconceptionTarget": "把多出的一百二十元直接當枝數，或求得便宜筆十二枝後答錯商品。",
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
    "contentSha256": "de4aef1604d2b37002ee729540140bba8dcd4959f41da65834b9f8ec70a2b222"
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
    "explanation": "若七公斤全是每公斤八十元的蘋果，費用為 560 元；實際費用多一百二十元。每用一公斤梨取代蘋果會多四十元，所以梨為 120÷40=3 公斤，蘋果則為四公斤。",
    "steps": [
      "計算全買蘋果的基準費用 7×80=560 元。",
      "求實際比基準多 680-560=120 元。",
      "除以每公斤價差四十元，求得梨三公斤。"
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
    "misconceptionTarget": "求得梨的公斤數後誤當成件數限制，或把剩下的蘋果四公斤當答案。",
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
    "contentSha256": "181e75985d871d9a626bc40135a0f93d08d4d4c985ba6aeff98a96858e3e3745"
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
    "explanation": "A 商品比 B 商品多四件，表示用較多的 A 數量減去較少的 B 數量，差為四。依變數定義 A 為 x、B 為 y，應列 x-y=4；這是固定差，不是總數四，也不是 A 為 B 的四倍。",
    "steps": [
      "依語句辨認 A 是較多者、B 是較少者。",
      "用較多數量減較少數量，寫成 x-y。",
      "令數量差等於四，得到 x-y=4。"
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
    "misconceptionTarget": "把『多四件』誤讀成總數為四或四倍關係，並顛倒相減順序。",
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
    "contentSha256": "c5a45c1d2b246acd0e5be1a124126f226d9cd1c1ad330274a4b9d1a51d3053bb"
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
    "explanation": "設甲為 x 件、乙為 y 件，甲比乙多四件給出 x=y+4。代入總價式 25x+40y=360，得 25(y+4)+40y=360，整理為 65y=260，所以乙為四件，甲為八件。最後應依題目指定回答乙，並將兩種數量各自乘正確單價驗算。",
    "steps": [
      "由 x-y=4 改寫為 x=y+4。",
      "代入 25x+40y=360，整理得 65y=260。",
      "求得 y=4，並以甲八件、乙四件回算總價。"
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
        "reason": "若乙十件，甲十四件，總價為 14×25+10×40=750 元。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "甲 8 件、乙 4 件，總價 200+160=360。"
      }
    ],
    "misconceptionTarget": "代入後把較多的甲八件當成所求乙數量，或讓單價與商品錯配。",
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
    "contentSha256": "ded3944913cd7cf0053374f7e182be6cf2333a7f5494a5553ebe8d602cfff66d"
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
    "explanation": "x、y 分別代表 A 包與 B 包的包數，內容物六個與四個不影響本題按包計價。若十包全買 B，費用為六百八十元；實際多一百一十元，每換成一包 A 多二十二元，因此 A 買五包。",
    "steps": [
      "確認變數單位是包，列出 x+y=10。",
      "以全買 B 的 10×68=680 元作基準，求差 110 元。",
      "用 110÷(90-68)=5，求得 A 包五包。"
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
    "misconceptionTarget": "把每包六個、四個當成包價的乘數，混用內容物個數與購買包數。",
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
    "contentSha256": "2a5c08aba02cc9a979accfdc00f6943ae862d53e091e92e4c6a4cc1ab1916396"
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
    "explanation": "若十二公斤全用每公斤四十五元的材料，費用為 540 元；實際七百二十元比基準多一百八十元。較貴材料每公斤多三十元，所以重量為 180÷30=6 公斤，另一種也為六公斤。",
    "steps": [
      "算出全用便宜材料的基準費用 12×45=540 元。",
      "求額外費用 720-540=180 元。",
      "以 180÷(75-45)=6，得到較貴材料六公斤。"
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
    "misconceptionTarget": "把七百二十除以平均單價猜重量，沒有使用總重量與兩種單價差。",
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
    "contentSha256": "8842670215219ce520e4b22ad48227d9cb5efac7a172ce2b4cd067b9a8a4fdc5"
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
    "explanation": "若四十件全買二十元的資料夾，費用為八百元，比實際少三百元。每把一個資料夾換成三十五元筆記本會增加十五元，因此筆記本有 300÷15=20 本，資料夾也是二十個。",
    "steps": [
      "以四十個資料夾計算基準費用 40×20=800 元。",
      "求採購金額多出的 1100-800=300 元。",
      "用 300÷(35-20)=20，求得筆記本二十本。"
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
    "misconceptionTarget": "把採購表中的三十五元單價當成本數，或混淆單價欄與數量欄。",
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
    "contentSha256": "76e13f5110f74ea3dd1851e5d36af96636521313670e5109f5316cf5b34d270d"
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
    "explanation": "若五公斤全是每公斤五十元的麵粉，成本是二百五十元；實際多三百元。每用一公斤堅果取代麵粉會多一百五十元，因此堅果重量為 300÷150=2 公斤，麵粉三公斤。",
    "steps": [
      "計算全用麵粉的基準成本 5×50=250 元。",
      "求額外成本 550-250=300 元。",
      "除以每公斤價差 200-50=150，得到堅果二公斤。"
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
    "misconceptionTarget": "直接用總成本除以堅果單價，忽略另外三公斤麵粉也會產生成本。",
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
    "contentSha256": "6849ff2d10a87af2689526657e755aec0fa381a5b6f9a4c40816ff8d0f148995"
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
    "explanation": "實付七百元已扣除一百元，所以折價前商品總價是八百元。設 A、B 件數為 x、y，列 x+y=15、60x+40y=800。第二式減第一式的四十倍得 20x=200，所以 A 有十件。",
    "steps": [
      "把折價一百元加回實付金額，得到原總價八百元。",
      "列出 x+y=15 與 60x+40y=800。",
      "消去 y 得 20x=200，求得 A 商品十件。"
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
    "misconceptionTarget": "把七百元直接當折價前總價、重複扣折價，或求得 B 五件後答錯商品。",
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
    "contentSha256": "8509eaa790ad844cf6dc80284e9f96898e77e10358c97cac85403282fd6b4518"
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
      "設三十元筆為 x 枝、五十元筆為 y 枝。由總枝數得 x+y=26，由總價得 30x+50y=980。",
      "將數量式乘三十得 30x+30y=780，再用總價式相減，得到 20y=200，所以 y=10。",
      "由 x+y=26 求得 x=16。回算枝數 16+10=26，總價 16×30+10×50=980，兩條件都成立。"
    ],
    "alternativeMethods": [
      "全買 30 元筆為 780 元，多 200，每枝貴筆多 20，所以貴筆 10。"
    ],
    "reasoningSteps": [
      "定義兩種筆的枝數，分別建立總數量式與總價式。",
      "用三十倍的數量式消去 x，解出五十元筆的枝數。",
      "求另一種筆的枝數，並回代總數與總價完成檢查。"
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
    "contentSha256": "60349c06cd3a9c5a0d9836124f05818d6517e057575e7c5cb40246aa8c4996a1",
    "commonErrors": [
      "只列總價式而漏掉總枝數條件，無法唯一求出兩種筆的數量。",
      "總價式相減時把 980-780 算錯，或忘記 y 的係數差是二十。",
      "求得 y=10 後未求 x，或把十枝誤標成三十元筆。"
    ]
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
      "設蘋果 x 公斤、梨 y 公斤。由總重量與總價分別列出 x+y=9、80x+120y=840。",
      "把重量式乘八十得 80x+80y=720，與總價式相減得 40y=120，所以 y=3、x=6。",
      "驗算 6+3=9，且 6×80+3×120=480+360=840。公斤是連續量，原則上可有小數；本題資料恰好得到整數重量。"
    ],
    "alternativeMethods": [
      "以平均單價 840÷9=93又1/3 元/公斤檢查介於 80 與 120。"
    ],
    "reasoningSteps": [
      "以公斤為固定單位定義兩種水果重量並建立兩個方程式。",
      "用每公斤八十元的基準式消去 x，求出梨與蘋果重量。",
      "回算總重量與總價，再說明重量不必受整數限制。"
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
    "contentSha256": "1b0535c8119846aa2cc9651531b03ca6a142fcc2e9323d7dd232bcec9af545db",
    "commonErrors": [
      "把公斤當成只能取整數的件數，誤以為所有重量題都必須有整數解。",
      "列總價式時只寫 80+120，而沒有讓單價分別乘相應重量。",
      "求得梨三公斤後忘記用總重量求蘋果六公斤，答案不完整。"
    ]
  }
];

export const DRAWING_SPECS = [];
