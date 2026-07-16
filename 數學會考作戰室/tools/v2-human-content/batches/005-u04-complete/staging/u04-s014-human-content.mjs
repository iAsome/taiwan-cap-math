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
        "設成人票 x 張、學生票 y 張，列 x+y=80。",
        "依票價列 250x+150y=15600。",
        "減去 150(x+y)=12000，得 100x=3600，所以 x=36、y=44。"
      ],
      "answer": "成人 36、學生 44。",
      "why": "票數與收入是兩個獨立條件，票價須分別乘自己的張數。求得成人三十六、學生四十四時，張數合計八十，收入九千加六千六百恰為一萬五千六百元。"
    },
    {
      "exampleId": "L2",
      "prompt": "某方案基本費 100 元，每次 20 元；另一方案基本費 220 元，每次 10 元。何時同價？",
      "solutionSteps": [
        "使用 x 次時，兩方案費用分別為 100+20x 與 220+10x。",
        "同價列 100+20x=220+10x，整理得 10x=120。",
        "求得 x=12，代回兩式都為三百四十元。"
      ],
      "answer": "12 次時同價。",
      "why": "兩方案一個固定費低但單位費高，另一個相反，交點需由完整費用式相等求得。十二次時兩式確實同為三百四十元，不能只比較每次費用。"
    },
    {
      "exampleId": "L3",
      "prompt": "表格顯示兩種餐盒的熱量與蛋白質，需選共 5 盒且蛋白質 90 克。",
      "solutionSteps": [
        "先定義兩種盒數，將總盒數五與蛋白質九十克選為必要條件。",
        "用各餐盒蛋白質乘盒數建立第二式，解出兩種盒數。",
        "盒數確定後，才把各盒熱量乘盒數相加，回答延伸的總熱量。"
      ],
      "answer": "先由必要欄求盒數，再用冗餘欄回答延伸問題。",
      "why": "表格中的每一欄都有意義，但不必同時放入求盒數的兩個方程式。先用盒數與蛋白質兩欄求解，可避免單位混雜；熱量欄保留到解後計算延伸結果。"
    },
    {
      "exampleId": "L4",
      "prompt": "判斷「每超過 10 次後單價改變」是否可直接用一條一次式。",
      "solutionSteps": [
        "找出十次是費率改變的分界點。",
        "比較分界前後每增加一次的費用，確認增加率不同。",
        "依使用量分成兩個區間表示，不能用同一固定斜率涵蓋。"
      ],
      "answer": "不屬單一線性規則。",
      "why": "單一一次式要求每增加一單位時費用增量固定，但題目在十次後更換單價，增加率已改變。必須分別表示前十次與超過部分，否則會把所有次數都用錯誤費率計算。"
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
  "contentSha256": "b55b4e8266e3e4d5248372b97959a3015c8df13905ef0492afc3012ed6a780be",
  "conceptNarrative": [
    "聯立方程式素養題先考資訊辨識，再考運算。應先寫清楚所求的兩個量及單位，從文字、表格或費率規則中挑出能形成兩個獨立等式的資料；數字多不代表每個數字都要放進方程式。",
    "表格欄名與複合單位能協助建模。例如元／次乘次得到元，每盒蛋白質乘盒數得到克。只有單位相容的量才能相加，熱量、蛋白質、盒數等不同欄位不可混成同一總量。",
    "方案費用常是固定費加單位費乘用量。求出同價點只表示兩方案在該點相等；要判斷哪一側較便宜，還須比較單位費造成的增加速度，並留意『超過』是否排除交點本身。",
    "兩個方程式必須提供獨立資訊。若第二式只是第一式的倍數，會有多組解；若費率在門檻前後改變，規則則是分段的，不能用一條固定斜率的一次式涵蓋所有用量。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "圈出題目真正所求，定義兩個未知數並附上單位。",
      "check": "答案對象明確，變數不會在不同欄位間改變意義。"
    },
    {
      "step": 2,
      "instruction": "整理表格欄名、固定費、單位費、總量與限制，區分必要及延伸資訊。",
      "check": "沒有為了使用所有數字而混加不同單位。"
    },
    {
      "step": 3,
      "instruction": "以單位分析建立兩個線性等式，並檢查兩式是否彼此獨立。",
      "check": "第二式不是第一式的倍數，也沒有漏掉固定費。"
    },
    {
      "step": 4,
      "instruction": "解聯立方程式；若是方案比較，先求交點再判斷交點兩側。",
      "check": "嚴格超過、至少、整數與非負等限制已正確處理。"
    },
    {
      "step": 5,
      "instruction": "回到情境回答比較、價差或延伸欄位，並將答案代回原資料。",
      "check": "不只報數字，單位、對象與決策理由都完整。"
    }
  ]
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
    "explanation": "基本費一百元只收一次，不會隨使用次數改變；每次二十元使用 x 次，變動費是 20x 元。兩部分相加得到 100+20x。寫成 120x 會把基本費也錯誤地按每次重複收取。",
    "steps": [
      "辨認固定不變的基本費為一百元。",
      "用每次二十元乘使用次數 x，得到 20x。",
      "將固定費與變動費相加，得到 100+20x。"
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
    "misconceptionTarget": "把基本費一百元也乘使用次數，誤當成每次都要重複收取。",
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
    "contentSha256": "ab62045f9b2cf4f8481ae42ffc88fd99eb9c41de55ba0474b7f7fef6ea2bd393"
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
    "explanation": "每次多少元的單位是元／次，乘上使用次數後，(元／次)×次中的『次』相消，只留下元。因此結果代表總費用。單位分析也能檢查是否誤把乘法寫成除法或遺漏單價係數。",
    "steps": [
      "寫出單位乘法 (元／次)×次。",
      "將分母與乘數中相同的『次』約去。",
      "確認剩下的單位是表示總費用的元。"
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
    "misconceptionTarget": "忽略元／次是複合單位，誤以為所有單位會一起消失或變成次。",
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
    "contentSha256": "3f5af1321cfcb57961960a466066c3d126ed740c32d19c11a7739c1d6d642ff6"
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
    "explanation": "兩個未知數通常需要兩個彼此獨立的線性條件，才能把可能解限制為唯一一組。重點不是文字有兩句或資料很多，而是第二個方程式不能只是第一個的倍數；若兩式相依，仍只提供同一項資訊。",
    "steps": [
      "先辨認問題中有兩個未知量。",
      "把可用資訊分別改寫成線性方程式。",
      "檢查兩式不成整體倍數，確認條件彼此獨立。"
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
    "misconceptionTarget": "用句子或數字的數量判斷條件夠不夠，沒有檢查兩方程式是否相依。",
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
    "contentSha256": "d4dfd40534968a61e11b85e982621ea461ac62672718bee7b79dcc858d5243a5"
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
    "explanation": "同價時兩個費用式相等，列 100+20x=220+10x。移項後得 10x=120，所以 x=12 次。代回檢查，方案 A 為一百加二百四十、方案 B 為二百二十加一百二十，皆為三百四十元。",
    "steps": [
      "將兩方案費用設為相等，列 100+20x=220+10x。",
      "移項整理成 10x=120，求得 x=12。",
      "把十二次代回兩方案，確認費用都為三百四十元。"
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
    "misconceptionTarget": "只比較每次費用而忽略基本費，或把兩個固定費相加來求同價次數。",
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
    "contentSha256": "5caab261f5a0d2ec775fc48729651082731205f2a3468a8ed33cde99f12604a0"
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
    "explanation": "設 A、B 餐盒為 x、y 盒，總盒數給出 x+y=6，蛋白質總量給出 20x+10y=90。減去十倍盒數式得到 10x=30，所以 A 餐盒三盒，B 也三盒；回算蛋白質六十加三十等於九十克。",
    "steps": [
      "依餐盒種類列總盒數式 x+y=6。",
      "依每盒蛋白質列 20x+10y=90。",
      "消去 y 得 x=3，並回算總蛋白質。"
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
    "misconceptionTarget": "把每盒二十克與十克直接相加，沒有分別乘上兩種餐盒盒數。",
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
    "contentSha256": "eb0cc6fefceecfbf6e2cca2467c3ef049db89a39979dbd3f85730c727b28f51c"
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
    "explanation": "若四十人全是學生，收入為 40×180=7200 元，比實際少二千四百元。每把一名學生換成成人會增加一百二十元，因此成人有 2400÷120=20 人，剩下的學生也是二十人；題目所求是學生。",
    "steps": [
      "計算全為學生的基準收入 40×180=7200 元。",
      "求實際多出的收入 9600-7200=2400 元。",
      "除以票價差求成人二十人，再由總數得學生二十人。"
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
    "misconceptionTarget": "由價差先求出成人數後直接作答，沒有回到題目指定的學生人數。",
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
    "contentSha256": "914f8601680c7fd03a9794c7447734004e9b3ca2f27e2fee6c8034c8c97f9783"
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
    "explanation": "先求同價點：80+15x=200+5x，整理得 10x=120，所以十二 GB 時兩方案同價。A 每增加一 GB 比 B 多增加十元，因此使用量大於十二 GB 後 A 費用較高，B 才是較便宜方案；等於十二時不能說較便宜。",
    "steps": [
      "把兩方案費用設相等，求得同價點十二 GB。",
      "比較單位費，A 每 GB 比 B 多增加十元。",
      "判斷十二 GB 之後 B 較便宜，回答嚴格超過十二。"
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
    "misconceptionTarget": "求出十二的交點就當成 B 已較便宜，忽略同價與嚴格不等的差別。",
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
    "contentSha256": "dd6990a1e28ae5a67c5e1bb872949b224c7e168937aea229c12f979bfa086093"
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
    "explanation": "第二式 400x+400y=3200 可提出四百，化為 400(x+y)=3200，再除以四百就是 x+y=8，與第一式完全相同。因此兩欄只提供同一條件，(4,4)、(8,0) 等都可能，不能唯一決定各盒數。",
    "steps": [
      "將第二式提出公因數四百，寫成 400(x+y)=3200。",
      "兩邊除以四百，得到 x+y=8。",
      "比較後確認兩式相依，判定無法唯一求解。"
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
    "misconceptionTarget": "看到表格有兩欄就認定條件獨立，沒有檢查第二式只是第一式的倍數。",
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
    "contentSha256": "d9ba9ec2aec25a51e297eccc4f2801aa66f7ffa3b1a3dd91bc2303f0670ee0c6"
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
    "explanation": "前十次每次二十元，但第十一次起的超過部分每次十二元，費用增加率在十次處改變。單一式 20x 假設每一次都收二十元，只適用前十次；超過十次後須分成前十次費用與超過部分費用。",
    "steps": [
      "找出費率改變的分界點為十次。",
      "辨認十次前後每增加一次的費用不同。",
      "判定規則必須分段表示，不能全程使用 20x。"
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
    "misconceptionTarget": "看到題目出現單價就一律寫單價乘總次數，忽略費率在門檻後改變。",
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
    "contentSha256": "94c0a14a664fd5c71d1753d567050a47df08b04416a395fab69bac32fb6e9fde"
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
    "explanation": "騎 x 分鐘時，A 的費用為 10+2x，B 無基本費所以為 3x。同價條件 10+2x=3x，解得 x=10 分鐘。代回時 A 為十加二十、B 為三十，兩者都是三十元。這也確認基本費只收一次，沒有被錯誤按分鐘重複計算。",
    "steps": [
      "依基本費與每分鐘費建立 A=10+2x、B=3x。",
      "把兩式設為相等，列 10+2x=3x。",
      "解得 x=10，並代回確認兩方案都是三十元。"
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
    "misconceptionTarget": "忽略 A 的十元基本費，只比較每分鐘二元與三元便判斷同價時間。",
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
    "contentSha256": "c37f382d5b705e7928fc237d5bba3926bf049dee4403144e861b60fe3c66d00e"
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
    "explanation": "設甲組 x 組、乙組 y 組，總組數列 x+y=10，佔地列 2x+3y=24。減去兩倍總組數式得 y=4，所以乙組四組、甲組六組。座位數欄不是求盒數所必需，可在解後算總座位作延伸檢查。",
    "steps": [
      "從資料中選出總組數與總佔地兩個必要條件。",
      "列 x+y=10 與 2x+3y=24。",
      "減去兩倍第一式求 y=4，並回算佔地。"
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
    "misconceptionTarget": "把座位數等所有欄位都強行塞入方程式，沒有先篩選與所求相關的條件。",
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
    "contentSha256": "c70d3edf7201cc533390a475c30f822567b68424d4f74121e41b322f2af50df6"
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
    "explanation": "設甲、乙運作時間為 x、y 小時，列 x+y=14、5x+3y=58。用耗電式減去三倍時間式，得到 2x=16，所以甲運作八小時、乙六小時。回算耗電四十加十八等於五十八度。",
    "steps": [
      "依總運作時間列 x+y=14。",
      "依每小時耗電量列 5x+3y=58。",
      "消去 y 得 x=8，並以乙六小時回算總耗電。"
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
    "misconceptionTarget": "把十四小時平均分給兩裝置，忽略兩者每小時耗電量不同。",
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
    "contentSha256": "8d41be45d34e53e175527a79bb4bf5ab023158614461c95e34c37fb46e206345"
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
      "設使用量為 x GB。方案 A 費用為 80+15x 元，方案 B 費用為 200+5x 元。",
      "同價時列 80+15x=200+5x，整理得 10x=120，所以 x=12；代回可得兩方案皆為二百六十元。",
      "使用二十 GB 時，A 費用為 80+15×20=380 元，B 費用為 200+5×20=300 元，因此 B 較便宜 380-300=80 元。"
    ],
    "alternativeMethods": [
      "可先觀察交點後 A 每GB 比B多增加10元；20比12多8GB，因此B便宜80元。"
    ],
    "reasoningSteps": [
      "依固定費與每 GB 費用建立兩個線性費用式。",
      "令兩方案費用相等，求同價用量並代回驗證。",
      "把二十 GB 代入兩式，明確比較較便宜方案與價差。"
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
    "contentSha256": "f73db5d6b4aa95a5a8ba6de9458cf2edea46341370b97735fa7e9e177391f956",
    "commonErrors": [
      "只比較每 GB 十五元與五元，完全漏掉兩方案固定費。",
      "求得十二 GB 同價後直接說 B 已較便宜，沒有區分相等與較小。",
      "二十 GB 時計算價差只減單位費，沒有先求兩方案完整總費用。"
    ]
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
      "設 A 餐盒 x 盒、B 餐盒 y 盒。由總盒數列 x+y=8；由蛋白質總量列 20x+10y=120。",
      "將盒數式乘十得 10x+10y=80，與蛋白質式相減得 10x=40，所以 x=4、y=4。",
      "盒數求出後再使用熱量欄：總熱量為 500×4+350×4=2000+1400=3400 大卡。回算盒數八盒、蛋白質一百二十克。"
    ],
    "alternativeMethods": [
      "蛋白質平均15克/盒，正好是20與10中點，所以兩種等量，各4盒。"
    ],
    "reasoningSteps": [
      "先篩選總盒數與蛋白質欄，建立求盒數所需的兩式。",
      "用消去法求得 A、B 各四盒，並回代兩個必要條件。",
      "再使用尚未用到的熱量欄，計算八盒的總熱量。"
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
    "contentSha256": "28dde81a738a45fba6216003ace836b5d0a7714be4e812b3d3c500c6018440e2",
    "commonErrors": [
      "一開始把盒數、蛋白質與熱量三欄全塞進同一式，造成單位混雜。",
      "蛋白質式只寫二十加十，沒有分別乘 A、B 盒數。",
      "求得各四盒後就停止，漏答題目要求的總熱量三千四百大卡。"
    ]
  }
];

export const DRAWING_SPECS = [];
