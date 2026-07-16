// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s011-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-applications",
    "skillId": "ratio-composite-problem",
    "lockedSkillTitle": "比例複合應用",
    "title": "比例複合應用：分段建模與中間量檢查",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "比例應用",
      "skillOrder": 11,
      "lockedPrerequisiteSkillIds": [
        "continued-ratio-preview"
      ],
      "capBoundary": "串接兩至三個國中比例步驟，例如先求實際量再分配；不使用高中函數合成或複雜聯立模型。"
    },
    "prerequisiteBridge": "已能處理單一比例應用與簡單共同項。複合題的關鍵是把長題拆成每一步只處理一個固定關係。",
    "learningOutcomes": [
      "能畫出已知量到所求量的步驟鏈。",
      "能辨認各步是正比、反比、比例尺或份數分配。",
      "能保留精確中間值並避免過早四捨五入。",
      "能用逆向或總量檢查整個結果。"
    ],
    "glossary": [
      {
        "term": "複合應用",
        "definition": "需要連續使用兩個以上比例關係才能求解的問題。"
      },
      {
        "term": "中間量",
        "definition": "不是最後答案，但連接前後步驟的量。"
      },
      {
        "term": "步驟鏈",
        "definition": "用箭頭表示已知量、轉換規則與所求量。"
      },
      {
        "term": "一致條件",
        "definition": "每一步成立所需的固定單價、同比例、同效率等假設。"
      }
    ],
    "notation": [
      {
        "symbol": "已知 → 中間量 → 所求",
        "meaning": "先拆解再計算。"
      },
      {
        "symbol": "×r 或 ÷r",
        "meaning": "標示每一步的放大或縮小倍數。"
      },
      {
        "symbol": "精確值",
        "meaning": "分數或未四捨五入小數，供下一步使用。"
      }
    ],
    "conceptNarrative": [
      "長題不應一次列一個巨大比例式。先決定第一步能求什麼，再把結果帶入下一步。",
      "每一步的關係可能不同，例如地圖比例尺是正比，行車時間在固定路程下是反比。",
      "中間量的單位必須清楚，否則公里、公分、分鐘可能混用。",
      "若題目要求最後四捨五入，只在最後一步處理；過早近似會累積誤差。",
      "完成後可逆向檢查：把最後答案代回最後一步，再一路返回原已知。"
    ],
    "formalDefinitions": [
      {
        "name": "分段建模",
        "statement": "把複合情境分成數個各自有明確比例條件的子問題。"
      },
      {
        "name": "中間量一致性",
        "statement": "前一步輸出量的意義與單位，必須正好是下一步所需輸入。"
      }
    ],
    "formulas": [
      {
        "formula": "總倍率=r1×r2×…",
        "conditions": [
          "各步皆為連續乘法縮放"
        ],
        "meaning": "可用於檢查，但仍需理解每步。"
      },
      {
        "formula": "最後值=起始值×各步倍率",
        "conditions": [
          "無加減固定項"
        ],
        "meaning": "純比例鏈。"
      },
      {
        "formula": "先精確、後近似",
        "conditions": [
          "題目允許或要求近似"
        ],
        "meaning": "控制誤差。"
      }
    ],
    "nonApplicableCases": [
      "把正比與反比步驟使用同一方向。",
      "中間量單位不符合下一步。",
      "未完成第一步便直接使用最後比例。",
      "每一步都有固定加項時仍只乘總倍率。",
      "過早四捨五入造成最後答案偏差。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "寫出最後所求與可直接使用的已知量。",
        "check": "缺少哪個中間量？"
      },
      {
        "step": 2,
        "instruction": "畫步驟鏈並為每箭頭標關係。",
        "check": "正比、反比、比例尺或份數？"
      },
      {
        "step": 3,
        "instruction": "逐步計算且保留單位與精確值。",
        "check": "前一步答案能直接帶入下一步嗎？"
      },
      {
        "step": 4,
        "instruction": "只在最後依題意取近似。",
        "check": "位數與單位要求清楚嗎？"
      },
      {
        "step": 5,
        "instruction": "做逆向、總量或數量級檢查。",
        "check": "能否回到原始資料？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "地圖比例尺 1:50000，圖上路線 7.2 公分；車速 60 公里/時，行駛需幾分鐘？",
        "solutionSteps": [
          "實際距離 7.2×50000=360000 公分=3.6 公里。",
          "時間 3.6÷60=0.06 小時=3.6 分鐘。"
        ],
        "answer": "3.6 分鐘。",
        "why": "這題連接比例尺、速率與時間兩層關係。先將圖上距離換成三點六公里，再以每小時六十公里求零點零六小時；最後乘六十換成三點六分鐘，單位才一致。"
      },
      {
        "exampleId": "L2",
        "prompt": "食譜 6 人需麵粉 450 克；改做 14 人份後，每袋 700 克可做幾次完整份量？",
        "solutionSteps": [
          "14 人份需 450×14/6=1050 克。",
          "每袋 700 克不足一次 14 人份，因此 0 次完整份量；若問需幾袋則要 2 袋。"
        ],
        "answer": "0 次完整份量。",
        "why": "先按人數比例求出一次十四人份需一千零五十克，再比較一袋七百克的容量。題目問可完成幾次，材料不足一次時是零次；這與問至少購買幾袋的向上取整不同。"
      },
      {
        "exampleId": "L3",
        "prompt": "商品原價按 4:5 售出，再從售價折 9:10，最後 720 元，求原價。",
        "solutionSteps": [
          "最後價=原價×4/5×9/10=原價×18/25。",
          "原價=720×25/18=1000。"
        ],
        "answer": "1000 元。",
        "why": "兩次折扣依序作用，因此最後價是原價乘二十五分之十八。已知最後七百二十元時要除以這個總倍率，也就是乘二十五分之十八的倒數，才能回推原價一千元。"
      },
      {
        "exampleId": "L4",
        "prompt": "甲乙獎金比 3:5，乙再捐出所得的 20%，兩人保留金額合計 8400 元，且甲未捐，求原總獎金。",
        "solutionSteps": [
          "令每份 k，甲 3k，乙原 5k、保留 4k。",
          "保留合計 7k=8400，k=1200；原總 8k=9600。"
        ],
        "answer": "9600 元。",
        "why": "捐款只改變乙的保留額，甲仍保留三份，乙由五份留下四份，所以保留合計是七份。七份等於八千四百元可求每份，再用原本總共八份回推總獎金。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把 3.6 公里與 60 公里/時直接相乘。",
        "why": "求時間應用距離÷速度。",
        "correction": "先檢查單位得到小時。"
      },
      {
        "mistake": "食譜題看到 700 克就四捨五入成一次。",
        "why": "完整份量不能用近似補足。",
        "correction": "比較所需 1050 克與現有量。"
      },
      {
        "mistake": "連續折扣直接相加為 30%。",
        "why": "第二折扣作用在已折後價格。",
        "correction": "倍率相乘。"
      },
      {
        "mistake": "捐出 20% 後把乙剩餘當 3k。",
        "why": "5k 的 80% 是 4k。",
        "correction": "先算保留倍率。"
      },
      {
        "mistake": "中間步驟不寫單位。",
        "why": "容易把小時當分鐘。",
        "correction": "每一行附單位。"
      },
      {
        "mistake": "第一步近似後帶入第二步。",
        "why": "誤差會放大。",
        "correction": "保留分數或完整小數到最後。"
      }
    ],
    "selfCheck": [
      "我能指出每個中間量嗎？",
      "每一步的比例類型正確嗎？",
      "單位在步驟間相容嗎？",
      "連續倍率是相乘而非相加嗎？",
      "最後答案可逆向回到原資料嗎？"
    ],
    "summary": [
      "複合題要拆成清楚的步驟鏈。",
      "每一步只使用一種明確關係與條件。",
      "中間量保留單位和精確值。",
      "最後用逆向與數量級驗算。"
    ],
    "connections": {
      "previous": "連比預備提供共享中間量的對齊觀念。",
      "next": [
        "比例素養題會加入表格、限制條件與資訊判讀。",
        "跨單元整合時仍可使用分段建模。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s011-v001",
        "u06-s011-v002",
        "u06-s011-v003",
        "u06-s011-v004",
        "u06-s011-v005",
        "u06-s011-v006",
        "u06-s011-v007",
        "u06-s011-v008",
        "u06-s011-v009",
        "u06-s011-v010",
        "u06-s011-v011",
        "u06-s011-v012"
      ],
      "constructedResponseIds": [
        "u06-s011-cr001",
        "u06-s011-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐步重算 7.2 公分至 3.6 公里再至 3.6 分鐘、連續倍率 18/25、乙保留 4k 等中間量；食譜例特別區分『可做幾次完整份量』與『需要幾袋』，修正可能的語意混淆。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "9ce67d21a9d7c96174672b1922254a19b204c1e2e5a0b42b96ffeaa7caa7deb9"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s011-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "商品售價是原價的 4/5，再折售價的 9/10。最後價是原價的幾分之幾？",
      "text": "商品售價是原價的 4/5，再折售價的 9/10。最後價是原價的幾分之幾？",
      "givenConditions": "無固定費。",
      "target": "連續比例倍率",
      "choices": [
        "13/15",
        "7/10",
        "18/25",
        "36/25"
      ],
      "answerIndex": 2,
      "independentSolution": "原價1000時最後720，比例18/25。",
      "mainExplanation": "第一次售價是原價的五分之四，第二次九折作用在第一次折後價，因此總倍率為五分之四乘十分之九，化簡成二十五分之十八。兩次折扣不可把折數直接相加或相減。",
      "explanation": "第一次售價是原價的五分之四，第二次九折作用在第一次折後價，因此總倍率為五分之四乘十分之九，化簡成二十五分之十八。兩次折扣不可把折數直接相加或相減。",
      "steps": [
        "寫出第一次折後倍率 4/5。",
        "第二次再乘 9/10，得到 4/5×9/10=36/50。",
        "將 36/50 約分為 18/25，確認小於一。"
      ],
      "optionAnalysis": [
        {
          "choice": "13/15",
          "truth": false,
          "reason": "把分子分母相加。"
        },
        {
          "choice": "7/10",
          "truth": false,
          "reason": "把折扣率相加成30%。"
        },
        {
          "choice": "18/25",
          "truth": true,
          "reason": "連續倍率相乘4/5×9/10=36/50=18/25。"
        },
        {
          "choice": "36/25",
          "truth": false,
          "reason": "分數乘積未約且倒置。"
        }
      ],
      "misconceptionTarget": "把兩次折扣的折數直接相加，沒有依序乘上每一階段的價格倍率。",
      "prerequisiteCheck": {
        "skillIds": [
          "continued-ratio-preview"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['continued-ratio-preview'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 65,
      "unitCheck": "比例無單位。",
      "roundingCheck": "精確分數。",
      "ambiguityBoundaryAudit": "兩次折扣依序作用。",
      "difficultyReason": "基礎複合倍率。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6a4df3ed2811b98a72504293161d1922386ca561d114d5cf2dad66089509569a"
    },
    {
      "questionId": "u06-s011-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "地圖比例尺 1:50000，圖上 6 公分；以 60 公里/時行駛，需多少分鐘？",
      "text": "地圖比例尺 1:50000，圖上 6 公分；以 60 公里/時行駛，需多少分鐘？",
      "givenConditions": "同一路線且速度固定。",
      "target": "比例尺與速率複合",
      "choices": [
        "0.05分鐘",
        "3分鐘",
        "5分鐘",
        "30分鐘"
      ],
      "answerIndex": 1,
      "independentSolution": "60公里/時等於1公里/分，3公里需3分。",
      "mainExplanation": "圖上六公分在一比五萬的比例尺下代表三十萬公分，也就是三公里。每小時六十公里等於每分鐘一公里，所以三公里需要三分鐘；距離與速率的時間單位已統一。",
      "explanation": "圖上六公分在一比五萬的比例尺下代表三十萬公分，也就是三公里。每小時六十公里等於每分鐘一公里，所以三公里需要三分鐘；距離與速率的時間單位已統一。",
      "steps": [
        "算實際距離 6×50,000=300,000 公分。",
        "將 300,000 公分換成 3 公里。",
        "由 60 公里／時=1 公里／分，求時間 3÷1=3 分鐘。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.05分鐘",
          "truth": false,
          "reason": "把0.05小時當分鐘。"
        },
        {
          "choice": "3分鐘",
          "truth": true,
          "reason": "實距3公里；時間3/60小時=0.05小時=3分鐘。"
        },
        {
          "choice": "5分鐘",
          "truth": false,
          "reason": "距離或速度換算錯。"
        },
        {
          "choice": "30分鐘",
          "truth": false,
          "reason": "多一個10。"
        }
      ],
      "misconceptionTarget": "求得三公里後直接除以六十卻把小時結果當分鐘，漏做時間單位換算。",
      "prerequisiteCheck": {
        "skillIds": [
          "continued-ratio-preview"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['continued-ratio-preview'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "公分、公里、時、分。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "不含停等。",
      "difficultyReason": "基礎兩步鏈。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5cbce16a3c92a42b558354db1a7cdec7c0088bdc082df1b5481afa88b96c58a4"
    },
    {
      "questionId": "u06-s011-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "6 人份食譜需 450 公克麵粉。做 14 人份後再加原需求的 10% 備用，共需多少公克？",
      "text": "6 人份食譜需 450 公克麵粉。做 14 人份後再加原需求的 10% 備用，共需多少公克？",
      "givenConditions": "備用以14人份需求為基準。",
      "target": "配方與百分比串接",
      "choices": [
        "1050公克",
        "1100公克",
        "1260公克",
        "1155公克"
      ],
      "answerIndex": 3,
      "independentSolution": "備用量105公克，合1155。",
      "mainExplanation": "先按人數由六人份放大到十四人份，麵粉需求為四百五十乘十四除以六，等於一千零五十公克。備用百分之十以這個新需求為基準，所以再乘一點一，得到一千一百五十五公克。",
      "explanation": "先按人數由六人份放大到十四人份，麵粉需求為四百五十乘十四除以六，等於一千零五十公克。備用百分之十以這個新需求為基準，所以再乘一點一，得到一千一百五十五公克。",
      "steps": [
        "先求人份放大倍率 14÷6。",
        "計算十四人份基本需求 450×14÷6=1050 公克。",
        "加備用量：1050×1.10=1155 公克。"
      ],
      "optionAnalysis": [
        {
          "choice": "1050公克",
          "truth": false,
          "reason": "未加備用。"
        },
        {
          "choice": "1100公克",
          "truth": false,
          "reason": "把10%當50公克。"
        },
        {
          "choice": "1260公克",
          "truth": false,
          "reason": "把450乘2.8。"
        },
        {
          "choice": "1155公克",
          "truth": true,
          "reason": "14人份1050公克，再乘1.1得1155。"
        }
      ],
      "misconceptionTarget": "把備用百分之十仍以原六人份四百五十公克為基準，少算放大後備料。",
      "prerequisiteCheck": {
        "skillIds": [
          "continued-ratio-preview"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['continued-ratio-preview'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 85,
      "unitCheck": "公克。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "人份可按比例。",
      "difficultyReason": "基礎複合正比。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c23497257030050f49fccdacfda10baf800e4616961a0e990945cff1f2af61fa"
    },
    {
      "questionId": "u06-s011-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "甲乙獎金比 3:5，總額 6400 元。乙捐出所得的 20%，乙保留多少？",
      "text": "甲乙獎金比 3:5，總額 6400 元。乙捐出所得的 20%，乙保留多少？",
      "givenConditions": "捐款只作用於乙所得。",
      "target": "分配後百分比變動",
      "choices": [
        "3200元",
        "800元",
        "2400元",
        "4000元"
      ],
      "answerIndex": 0,
      "independentSolution": "3200+800=4000，分配與捐款兩步一致。",
      "mainExplanation": "甲乙共八份，乙占五份，所以乙原得六千四百乘八分之五，等於四千元。乙捐出所得的百分之二十後保留百分之八十，四千乘零點八等於三千二百元。",
      "explanation": "甲乙共八份，乙占五份，所以乙原得六千四百乘八分之五，等於四千元。乙捐出所得的百分之二十後保留百分之八十，四千乘零點八等於三千二百元。",
      "steps": [
        "由 3:5 求乙占總額的 5/8。",
        "算乙原得 6400×5/8=4000 元。",
        "乙保留 4000×(1-20%)=3200 元。"
      ],
      "optionAnalysis": [
        {
          "choice": "3200元",
          "truth": true,
          "reason": "乙原得6400×5/8=4000元，保留80%為3200元。"
        },
        {
          "choice": "800元",
          "truth": false,
          "reason": "800元是乙捐出的金額。"
        },
        {
          "choice": "2400元",
          "truth": false,
          "reason": "2400元是甲原得。"
        },
        {
          "choice": "4000元",
          "truth": false,
          "reason": "4000元是乙捐前所得。"
        }
      ],
      "misconceptionTarget": "把乙捐出的百分之二十套在獎金總額，或把捐出八百誤當保留金額。",
      "prerequisiteCheck": {
        "skillIds": [
          "continued-ratio-preview"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['continued-ratio-preview'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 95,
      "unitCheck": "元。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "總額與比均明確。",
      "difficultyReason": "標準兩階段。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "03d965a123cf5b3395c4f27233d5ff4d8f5e9a9613619ccc7512ae27bdbe6dae"
    },
    {
      "questionId": "u06-s011-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某飲料濃縮液:水=1:5。先配 3 公升，再加入 0.6 公升水。新濃縮液:水的最簡整數比為何？",
      "text": "某飲料濃縮液:水=1:5。先配 3 公升，再加入 0.6 公升水。新濃縮液:水的最簡整數比為何？",
      "givenConditions": "只增加水，濃縮液量不變。",
      "target": "混合後重算最簡比",
      "choices": [
        "1:6",
        "5:31",
        "5:30",
        "6:31"
      ],
      "answerIndex": 1,
      "independentSolution": "5與31互質，且5/31=0.5/3.1。",
      "mainExplanation": "原液與水共六份，三公升飲料的每份是零點五公升，因此原液零點五、水二點五公升。再加零點六公升水後，水成三點一公升，零點五比三點一同乘十為五比三十一。",
      "explanation": "原液與水共六份，三公升飲料的每份是零點五公升，因此原液零點五、水二點五公升。再加零點六公升水後，水成三點一公升，零點五比三點一同乘十為五比三十一。",
      "steps": [
        "由總量三公升除以六份，得每份 0.5 公升。",
        "原液為 0.5 公升，水由 2.5 增至 3.1 公升。",
        "將 0.5:3.1 同乘十，化成最簡整數比 5:31。"
      ],
      "optionAnalysis": [
        {
          "choice": "1:6",
          "truth": false,
          "reason": "1:6把3.1近似成3。"
        },
        {
          "choice": "5:31",
          "truth": true,
          "reason": "原濃縮液0.5L、水2.5L；加水後水3.1L，0.5:3.1=5:31。"
        },
        {
          "choice": "5:30",
          "truth": false,
          "reason": "5:30等同1:6，未反映新增0.1L。"
        },
        {
          "choice": "6:31",
          "truth": false,
          "reason": "6:31把濃縮液錯算0.6L。"
        }
      ],
      "misconceptionTarget": "把新增的零點六公升直接加在原本五份上，混用實際量與比例份數。",
      "prerequisiteCheck": {
        "skillIds": [
          "continued-ratio-preview"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['continued-ratio-preview'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 110,
      "unitCheck": "公升先同單位。",
      "roundingCheck": "精確小數轉整數比。",
      "ambiguityBoundaryAudit": "題幹明確要求最簡整數比。",
      "difficultyReason": "標準成分變動。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "652d72423203d18477a62540327ef59410b103e40884df222add28b1a5ab558d"
    },
    {
      "questionId": "u06-s011-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "模型比例尺 1:40，模型面積 75 平方公分。實物面積為多少平方公尺？",
      "text": "模型比例尺 1:40，模型面積 75 平方公分。實物面積為多少平方公尺？",
      "givenConditions": "模型與實物相似。",
      "target": "比例尺面積複合",
      "choices": [
        "12平方公尺",
        "0.3平方公尺",
        "3平方公尺",
        "120平方公尺"
      ],
      "answerIndex": 0,
      "independentSolution": "若模型為5×15公分，實物2×6公尺，面積12平方公尺。",
      "mainExplanation": "比例尺一比四十表示每個長度方向都放大四十倍，所以面積要放大四十的平方，即一千六百倍。七十五平方公分乘一千六百得十二萬平方公分，再除以一萬換成十二平方公尺。",
      "explanation": "比例尺一比四十表示每個長度方向都放大四十倍，所以面積要放大四十的平方，即一千六百倍。七十五平方公分乘一千六百得十二萬平方公分，再除以一萬換成十二平方公尺。",
      "steps": [
        "由長度倍率四十求面積倍率 40²=1600。",
        "實物面積為 75×1600=120,000 平方公分。",
        "用 1 平方公尺=10,000 平方公分，換得 12 平方公尺。"
      ],
      "optionAnalysis": [
        {
          "choice": "12平方公尺",
          "truth": true,
          "reason": "面積倍率40²=1600；75×1600=120000平方公分=12平方公尺。"
        },
        {
          "choice": "0.3平方公尺",
          "truth": false,
          "reason": "只乘長度倍率後又錯換單位。"
        },
        {
          "choice": "3平方公尺",
          "truth": false,
          "reason": "只乘40得到3000平方公分=0.3平方公尺，且選項也不符。"
        },
        {
          "choice": "120平方公尺",
          "truth": false,
          "reason": "平方公分轉平方公尺少除10。"
        }
      ],
      "misconceptionTarget": "面積只乘一次四十，或把平方公分換平方公尺時只除以一百。",
      "prerequisiteCheck": {
        "skillIds": [
          "continued-ratio-preview"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['continued-ratio-preview'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 125,
      "unitCheck": "平方公分轉平方公尺。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "1平方公尺=10000平方公分。",
      "difficultyReason": "標準面積倍率。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "581108a98f36bda9bab10017a81363006691b30ef4736d1e5172167e57443fa2"
    },
    {
      "questionId": "u06-s011-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "8 人做 15 天可完成工程。先由 8 人做 6 天，之後增至 12 人，還需幾天？",
      "text": "8 人做 15 天可完成工程。先由 8 人做 6 天，之後增至 12 人，還需幾天？",
      "givenConditions": "效率相同、工作量固定。",
      "target": "分段工作反比",
      "choices": [
        "4天",
        "8天",
        "6天",
        "9天"
      ],
      "answerIndex": 2,
      "independentSolution": "總時間12天，完成量48+72=120人日。",
      "mainExplanation": "工程總量是八人乘十五天，共一百二十人日。前六天八人完成四十八人日，剩下七十二人日；增至十二人後，需要七十二除以十二，等於六天，前後合計完成全部工程。",
      "explanation": "工程總量是八人乘十五天，共一百二十人日。前六天八人完成四十八人日，剩下七十二人日；增至十二人後，需要七十二除以十二，等於六天，前後合計完成全部工程。",
      "steps": [
        "求總工作量 8×15=120 人日。",
        "前段完成 8×6=48 人日，剩 120-48=72 人日。",
        "十二人完成剩餘工作需 72÷12=6 天。"
      ],
      "optionAnalysis": [
        {
          "choice": "4天",
          "truth": false,
          "reason": "剩48人日的錯算。"
        },
        {
          "choice": "8天",
          "truth": false,
          "reason": "把總工期直接按8/12。"
        },
        {
          "choice": "6天",
          "truth": true,
          "reason": "總120人日，已做48，剩72；12人需6天。"
        },
        {
          "choice": "9天",
          "truth": false,
          "reason": "只用15-6。"
        }
      ],
      "misconceptionTarget": "直接把十五天依八人與十二人作全程反比，沒有扣除前六天已做工作。",
      "prerequisiteCheck": {
        "skillIds": [
          "continued-ratio-preview"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['continued-ratio-preview'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 115,
      "unitCheck": "人日、天。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "增員在6天後。",
      "difficultyReason": "進階分段。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fe964b84c1e9dd689b16537f85cbed821756343aea8ec8181e482ced744b428c"
    },
    {
      "questionId": "u06-s011-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "原液:水=2:7。現有 1.8 公升原液，先按比例配製，再裝入每瓶 0.75 公升的瓶子。最多可裝滿幾瓶？",
      "text": "原液:水=2:7。現有 1.8 公升原液，先按比例配製，再裝入每瓶 0.75 公升的瓶子。最多可裝滿幾瓶？",
      "givenConditions": "只能計完整裝滿瓶。",
      "target": "配方與裝瓶離散限制",
      "choices": [
        "9瓶",
        "10.8瓶",
        "12瓶",
        "10瓶"
      ],
      "answerIndex": 3,
      "independentSolution": "10瓶用7.5L，剩0.6L；11瓶需8.25L不足。",
      "mainExplanation": "原液二份是一點八公升，所以每份零點九公升，九份飲料總量為八點一公升。八點一除以每瓶零點七五得十點八，但只能計算裝滿的瓶數，因此向下取整為十瓶，餘零點六公升。",
      "explanation": "原液二份是一點八公升，所以每份零點九公升，九份飲料總量為八點一公升。八點一除以每瓶零點七五得十點八，但只能計算裝滿的瓶數，因此向下取整為十瓶，餘零點六公升。",
      "steps": [
        "由原液二份等於 1.8 公升，求每份 0.9 公升。",
        "總份數九份，飲料總量為 9×0.9=8.1 公升。",
        "計算 8.1÷0.75=10.8，向下取整得十瓶。"
      ],
      "optionAnalysis": [
        {
          "choice": "9瓶",
          "truth": false,
          "reason": "9瓶忽略部分容量。"
        },
        {
          "choice": "10.8瓶",
          "truth": false,
          "reason": "10.8不是整瓶數。"
        },
        {
          "choice": "12瓶",
          "truth": false,
          "reason": "12瓶需9公升。"
        },
        {
          "choice": "10瓶",
          "truth": true,
          "reason": "原液2份1.8，每份0.9，總9份8.1公升；8.1÷0.75=10.8，最多裝滿10瓶。"
        }
      ],
      "misconceptionTarget": "把十點八瓶向上取整成十一瓶，忽略題目問的是能完全裝滿的瓶數。",
      "prerequisiteCheck": {
        "skillIds": [
          "continued-ratio-preview"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['continued-ratio-preview'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "公升與瓶。",
      "roundingCheck": "『最多裝滿』向下取整。",
      "ambiguityBoundaryAudit": "不計製程損耗。",
      "difficultyReason": "進階複合限制。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c54f309d519040558826ad473250016b0bdb4074fa7a9b5b9feb6160c67356bb"
    },
    {
      "questionId": "u06-s011-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "A、B 兩種票價比 4:7，售出票數比 5:3。若 A 票收入 4000 元，B 票收入多少？",
      "text": "A、B 兩種票價比 4:7，售出票數比 5:3。若 A 票收入 4000 元，B 票收入多少？",
      "givenConditions": "票價與票數比對應同兩類票。",
      "target": "雙重比例形成收入比",
      "choices": [
        "4200元",
        "2400元",
        "5600元",
        "7000元"
      ],
      "answerIndex": 0,
      "independentSolution": "若A單價400、售10張，B單價700、售6張，收入4000與4200。",
      "mainExplanation": "收入等於票價乘票數。A、B 的收入比為四乘五比七乘三，也就是二十比二十一；A 收入四千元對應二十份，每份二百元，所以 B 的二十一份收入為四千二百元。",
      "explanation": "收入等於票價乘票數。A、B 的收入比為四乘五比七乘三，也就是二十比二十一；A 收入四千元對應二十份，每份二百元，所以 B 的二十一份收入為四千二百元。",
      "steps": [
        "把票價比與票數比相乘，得收入比 4×5:7×3。",
        "化成 A:B 收入比 20:21。",
        "由 A 的二十份等於四千元，算 B=4000×21÷20=4200 元。"
      ],
      "optionAnalysis": [
        {
          "choice": "4200元",
          "truth": true,
          "reason": "設A票價4p、B7p；票數A5q、B3q。收入比A:B=20:21，B=4000×21/20=4200。"
        },
        {
          "choice": "2400元",
          "truth": false,
          "reason": "只用票數比。"
        },
        {
          "choice": "5600元",
          "truth": false,
          "reason": "只用票價比。"
        },
        {
          "choice": "7000元",
          "truth": false,
          "reason": "把兩比相乘錯。"
        }
      ],
      "misconceptionTarget": "只使用票價比或票數比中的一組，沒有認出收入同時受兩個因素影響。",
      "prerequisiteCheck": {
        "skillIds": [
          "continued-ratio-preview"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['continued-ratio-preview'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 130,
      "unitCheck": "元。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "比例可用共同倍率表示。",
      "difficultyReason": "進階複合比。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e0419dfe0fb886d03d9838181ba0236f4e417770f0f6d214406b222f7b27a0e7"
    },
    {
      "questionId": "u06-s011-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "地圖上甲乙距離 8 公分，比例尺 1:75000。沿路實際比直線距離多 20%，以每分鐘 75 公尺步行，約需幾分鐘？",
      "text": "地圖上甲乙距離 8 公分，比例尺 1:75000。沿路實際比直線距離多 20%，以每分鐘 75 公尺步行，約需幾分鐘？",
      "givenConditions": "沿路增量以直線距離為基準，步速固定。",
      "target": "多段比例素養",
      "choices": [
        "80分鐘",
        "100分鐘",
        "120分鐘",
        "96分鐘"
      ],
      "answerIndex": 3,
      "independentSolution": "75×96=7200公尺。",
      "mainExplanation": "圖上八公分按比例尺換得直線距離六公里。沿路距離比直線多百分之二十，所以是七點二公里，即七千二百公尺；以每分鐘七十五公尺步行，時間為七千二百除以七十五，等於九十六分鐘。",
      "explanation": "圖上八公分按比例尺換得直線距離六公里。沿路距離比直線多百分之二十，所以是七點二公里，即七千二百公尺；以每分鐘七十五公尺步行，時間為七千二百除以七十五，等於九十六分鐘。",
      "steps": [
        "換算直線距離：8×75,000=600,000 公分=6 公里。",
        "求沿路距離：6×1.2=7.2 公里=7200 公尺。",
        "求步行時間：7200÷75=96 分鐘。"
      ],
      "optionAnalysis": [
        {
          "choice": "80分鐘",
          "truth": false,
          "reason": "80只走直線距離。"
        },
        {
          "choice": "100分鐘",
          "truth": false,
          "reason": "把96粗略取整到百但題目未要求。"
        },
        {
          "choice": "120分鐘",
          "truth": false,
          "reason": "計算速率錯。"
        },
        {
          "choice": "96分鐘",
          "truth": true,
          "reason": "直線6公里；沿路7.2公里=7200公尺；7200÷75=96。"
        }
      ],
      "misconceptionTarget": "漏乘沿路增加的百分之二十，或用公里直接除以每分鐘公尺而混淆單位。",
      "prerequisiteCheck": {
        "skillIds": [
          "continued-ratio-preview"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['continued-ratio-preview'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 135,
      "unitCheck": "公分、公里、公尺、分鐘。",
      "roundingCheck": "結果整數，不需再近似。",
      "ambiguityBoundaryAudit": "『約』反映模型估計，不改變算術。",
      "difficultyReason": "三步鏈。",
      "literacyContextNecessity": "沿路比直線多20%是必要中間倍率。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0684fd13f8434cee1af36b6f72896d8139c1b16e1993eff75ff616f041137e05"
    },
    {
      "questionId": "u06-s011-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某方案收固定費 120 元，再按用量每單位 8 元。另一方案無固定費、每單位 11 元。用量多少時兩方案費用相同？",
      "text": "某方案收固定費 120 元，再按用量每單位 8 元。另一方案無固定費、每單位 11 元。用量多少時兩方案費用相同？",
      "givenConditions": "用量非負，費率固定。",
      "target": "辨認固定加項後比較",
      "choices": [
        "15單位",
        "40單位",
        "24單位",
        "120單位"
      ],
      "answerIndex": 1,
      "independentSolution": "方案一440元，方案二440元。",
      "mainExplanation": "設用量為 x，第一方案總費用是固定一百二十元加每單位八元，即一百二十加八 x；第二方案是十一 x。令兩式相等得三 x 等於一百二十，所以 x 等於四十，兩方案均為四百四十元。",
      "explanation": "設用量為 x，第一方案總費用是固定一百二十元加每單位八元，即一百二十加八 x；第二方案是十一 x。令兩式相等得三 x 等於一百二十，所以 x 等於四十，兩方案均為四百四十元。",
      "steps": [
        "設用量 x，列第一方案 120+8x、第二方案 11x。",
        "令費用相同：120+8x=11x，整理得 3x=120。",
        "求 x=40，代回兩式都得 440 元。"
      ],
      "optionAnalysis": [
        {
          "choice": "15單位",
          "truth": false,
          "reason": "120/8。"
        },
        {
          "choice": "40單位",
          "truth": true,
          "reason": "120+8x=11x，3x=120，x=40。"
        },
        {
          "choice": "24單位",
          "truth": false,
          "reason": "120/(11-6)錯。"
        },
        {
          "choice": "120單位",
          "truth": false,
          "reason": "把固定費當用量。"
        }
      ],
      "misconceptionTarget": "只比較每單位八元與十一元，忽略第一方案另有一百二十元固定費。",
      "prerequisiteCheck": {
        "skillIds": [
          "continued-ratio-preview"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['continued-ratio-preview'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "元與單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "x=40符合可用範圍。",
      "difficultyReason": "高階模型邊界。",
      "literacyContextNecessity": "固定費使純比例模型失效，情境資訊不可刪除。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fc3e2de3636b7ef061bafe6cc3a3e79ae58333eb1ac8407640aacdd0ca4908d9"
    },
    {
      "questionId": "u06-s011-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "一批 150 公斤原料先有 8% 損耗，剩餘按 2:3 分給甲乙。乙再損耗 10%，乙最後得到多少公斤？",
      "text": "一批 150 公斤原料先有 8% 損耗，剩餘按 2:3 分給甲乙。乙再損耗 10%，乙最後得到多少公斤？",
      "givenConditions": "損耗基準分別為當時剩餘量。",
      "target": "多階段比例損耗",
      "choices": [
        "69公斤",
        "82.8公斤",
        "74.52公斤",
        "90公斤"
      ],
      "answerIndex": 2,
      "independentSolution": "逆推74.52/0.9=82.8。",
      "mainExplanation": "原料先損耗百分之八，剩一百五十乘零點九二，等於一百三十八公斤。乙按二比三分配取得五分之三，即八十二點八公斤；乙再損耗百分之十後保留九成，得到七十四點五二公斤。",
      "explanation": "原料先損耗百分之八，剩一百五十乘零點九二，等於一百三十八公斤。乙按二比三分配取得五分之三，即八十二點八公斤；乙再損耗百分之十後保留九成，得到七十四點五二公斤。",
      "steps": [
        "先算總原料損耗後剩 150×0.92=138 公斤。",
        "乙分得 138×3/5=82.8 公斤。",
        "乙再保留 90%，得 82.8×0.9=74.52 公斤。"
      ],
      "optionAnalysis": [
        {
          "choice": "69公斤",
          "truth": false,
          "reason": "69是138的一半。"
        },
        {
          "choice": "82.8公斤",
          "truth": false,
          "reason": "82.8未扣第二次損耗。"
        },
        {
          "choice": "74.52公斤",
          "truth": true,
          "reason": "先剩138公斤；乙占3/5得82.8；再留90%得74.52。"
        },
        {
          "choice": "90公斤",
          "truth": false,
          "reason": "用原料150的60%。"
        }
      ],
      "misconceptionTarget": "把兩次損耗百分率直接相加，或先分配原始一百五十公斤再處理總損耗。",
      "prerequisiteCheck": {
        "skillIds": [
          "continued-ratio-preview"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['continued-ratio-preview'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 135,
      "unitCheck": "公斤。",
      "roundingCheck": "精確到0.01公斤。",
      "ambiguityBoundaryAudit": "各步比例清楚。",
      "difficultyReason": "綜合素養。",
      "literacyContextNecessity": "兩次損耗作用基準不同，必須保留流程情境。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "92660cc8457a3dbaad879e09b20b74cd2d230eda063d19fdef6d1f383c4007eb"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s011-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "地圖比例尺1:60000，圖上路線9公分。實際路線因坡度比平面距離多10%，若步速每分鐘75公尺，需走幾分鐘？",
      "target": "比例尺坡度與速率複合",
      "requiredWork": [
        "由比例尺求平面距離。",
        "增加10%得到路線距離。",
        "用步速求時間。"
      ],
      "fullCreditSolution": [
        "圖上九公分按一比六萬換得平面距離 9×60,000=540,000 公分，也就是五點四公里。",
        "實際路線比平面距離多百分之十，所以路線長為 5.4×1.1=5.94 公里，換成五千九百四十公尺。",
        "步行時間為 5940÷75=79.2 分鐘。",
        "回查每分鐘七十五公尺走七十九點二分鐘，路程正好五千九百四十公尺。"
      ],
      "alternativeSolutions": [
        "可先算75公尺/分=4.5公里/時，再以5.94÷4.5小時轉分鐘。"
      ],
      "reasoningSteps": [
        "依比例尺把圖上公分換為實際公里。",
        "以平面距離為基準增加百分之十，再把公里換成公尺。",
        "用實際路線距離除以每分鐘步速，求得分鐘數並回查。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "依序得到5.4公里、5.94公里與79.2分鐘，單位完整。"
        },
        {
          "score": 2,
          "criteria": "最後79.2分鐘正確，但中間單位或10%說明略缺。"
        },
        {
          "score": 1,
          "criteria": "正確求出5.4公里，只漏或算錯後一比例步驟。"
        },
        {
          "score": 0,
          "criteria": "把圖上9公分直接當路程，或把10%加成10公里。"
        }
      ],
      "partialCreditRules": [
        "每一步可獨立辨認；但錯誤單位若造成數量級完全不合理，不能只依後續一致給高分。"
      ],
      "followThroughPolicy": "若平面距離算錯但後續正確乘1.1並除75，可給1分；若只漏公尺轉換，依錯誤嚴重度給1分。",
      "unitNotationRules": "公里需換公尺後才能除以公尺/分鐘；最後單位分鐘。",
      "answerOnlyPolicy": "只寫79.2分鐘最多2分。",
      "commonErrors": [
        "把比例尺分母六萬直接當成公里數，沒有維持公分單位。",
        "增加百分之十時誤以五點九四公里為基準，形成重複增加。",
        "用公尺除以每小時速率或把七十九點二分鐘誤寫成七十九點二小時。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "79.2分鐘。",
        "ambiguity": "三段條件順序明確，無取整要求。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "0228b3a52c8b5f04be37d98220290c0296cfdc0e504a2b2b57d5e57d5b08cd4d"
    },
    {
      "questionId": "u06-s011-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-composite-problem",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "原料200公斤先損耗5%，剩餘按甲:乙=2:3分配。甲再加入自身重量的20%輔料，求甲最後重量與乙重量，並求兩者最後比。",
      "target": "多階段損耗分配",
      "requiredWork": [
        "先處理總損耗。",
        "按2:3分配。",
        "只對甲加20%並重算比。"
      ],
      "fullCreditSolution": [
        "原料先損耗百分之五，剩餘重量為 200×0.95=190 公斤。",
        "按甲:乙=2:3 分配，甲得 190×2/5=76 公斤，乙得 190×3/5=114 公斤。",
        "只有甲加入自身重量百分之二十的輔料，所以甲最後為 76×1.2=91.2 公斤，乙仍為一百一十四公斤。",
        "最後比為 91.2:114，同乘十並約分得 912:1140=4:5。"
      ],
      "alternativeSolutions": [
        "可用份數每份38公斤，甲76、乙114，再處理甲。"
      ],
      "reasoningSteps": [
        "先處理整批原料的百分之五損耗。",
        "將剩餘一百九十公斤依二比三分給甲乙。",
        "只對甲乘一點二，再把兩個最後重量化成最簡比。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "得到甲91.2公斤、乙114公斤、最後比4:5，三階段完整。"
        },
        {
          "score": 2,
          "criteria": "兩個最後重量正確但比未化簡，或比正確但漏一個中間量。"
        },
        {
          "score": 1,
          "criteria": "正確得到損耗後190或分配76、114，但後續錯。"
        },
        {
          "score": 0,
          "criteria": "把5%與20%直接合併，或把輔料加入乙。"
        }
      ],
      "partialCreditRules": [
        "最後比可寫91.2:114，但未化最簡最多2分。"
      ],
      "followThroughPolicy": "若損耗後總量算錯，後續按2:3及甲乘1.2一致可給1分；若加20%作用對象錯誤，不採跟隨。",
      "unitNotationRules": "重量用公斤；比的兩項同單位後可省略單位。",
      "answerOnlyPolicy": "只寫4:5最多1分。",
      "commonErrors": [
        "把甲增加的百分之二十以原總量二百公斤為基準。",
        "誤以為乙也要乘一點二，使兩者比仍維持二比三。",
        "忽略先發生的整批損耗，仍直接用二百公斤進行分配。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "甲91.2公斤、乙114公斤、最後4:5。",
        "ambiguity": "損耗與加料作用基準分別明示。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "ee395f3aaf7777084590cb0b04717f3aae545e24d520e3e7bb2e8d33f9dc364a"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s011-v001-semantic-review-r1",
      "questionId": "u06-s011-v001",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "6a4df3ed2811b98a72504293161d1922386ca561d114d5cf2dad66089509569a",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "原價1000時最後720，比例18/25。",
      "derivedAnswer": "18/25",
      "storedAnswer": "18/25",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "把分子分母相加。",
        "把折扣率相加成30%。",
        "連續倍率相乘4/5×9/10=36/50=18/25。",
        "分數乘積未約且倒置。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「連續比例倍率」，已明示必要條件：無固定費。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：比例無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：兩次折扣依序作用。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確分數。。"
      },
      "difficultyReason": "基礎複合倍率。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：原價1000時最後720，比例18/25。 正確選項為「18/25」。逐項檢查後，唯一為真的理由是「連續倍率相乘4/5×9/10=36/50=18/25。」；其餘三項分別因「把分子分母相加。」、「把折扣率相加成30%。」、「分數乘積未約且倒置。」而排除。邊界與語意再檢查：兩次折扣依序作用。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s011-v002-semantic-review-r1",
      "questionId": "u06-s011-v002",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "5cbce16a3c92a42b558354db1a7cdec7c0088bdc082df1b5481afa88b96c58a4",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "60公里/時等於1公里/分，3公里需3分。",
      "derivedAnswer": "3分鐘",
      "storedAnswer": "3分鐘",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "把0.05小時當分鐘。",
        "實距3公里；時間3/60小時=0.05小時=3分鐘。",
        "距離或速度換算錯。",
        "多一個10。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「比例尺與速率複合」，已明示必要條件：同一路線且速度固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公分、公里、時、分。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：不含停等。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎兩步鏈。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：60公里/時等於1公里/分，3公里需3分。 正確選項為「3分鐘」。逐項檢查後，唯一為真的理由是「實距3公里；時間3/60小時=0.05小時=3分鐘。」；其餘三項分別因「把0.05小時當分鐘。」、「距離或速度換算錯。」、「多一個10。」而排除。邊界與語意再檢查：不含停等。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s011-v003-semantic-review-r1",
      "questionId": "u06-s011-v003",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "c23497257030050f49fccdacfda10baf800e4616961a0e990945cff1f2af61fa",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "備用量105公克，合1155。",
      "derivedAnswer": "1155公克",
      "storedAnswer": "1155公克",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "未加備用。",
        "把10%當50公克。",
        "把450乘2.8。",
        "14人份1050公克，再乘1.1得1155。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「配方與百分比串接」，已明示必要條件：備用以14人份需求為基準。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公克。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：人份可按比例。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎複合正比。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：備用量105公克，合1155。 正確選項為「1155公克」。逐項檢查後，唯一為真的理由是「14人份1050公克，再乘1.1得1155。」；其餘三項分別因「未加備用。」、「把10%當50公克。」、「把450乘2.8。」而排除。邊界與語意再檢查：人份可按比例。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s011-v004-semantic-review-r1",
      "questionId": "u06-s011-v004",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "03d965a123cf5b3395c4f27233d5ff4d8f5e9a9613619ccc7512ae27bdbe6dae",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "3200+800=4000，分配與捐款兩步一致。",
      "derivedAnswer": "3200元",
      "storedAnswer": "3200元",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "乙原得6400×5/8=4000元，保留80%為3200元。",
        "800元是乙捐出的金額。",
        "2400元是甲原得。",
        "4000元是乙捐前所得。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「分配後百分比變動」，已明示必要條件：捐款只作用於乙所得。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：元。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：總額與比均明確。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準兩階段。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：3200+800=4000，分配與捐款兩步一致。 正確選項為「3200元」。逐項檢查後，唯一為真的理由是「乙原得6400×5/8=4000元，保留80%為3200元。」；其餘三項分別因「800元是乙捐出的金額。」、「2400元是甲原得。」、「4000元是乙捐前所得。」而排除。邊界與語意再檢查：總額與比均明確。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s011-v005-semantic-review-r1",
      "questionId": "u06-s011-v005",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "652d72423203d18477a62540327ef59410b103e40884df222add28b1a5ab558d",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "5與31互質，且5/31=0.5/3.1。",
      "derivedAnswer": "5:31",
      "storedAnswer": "5:31",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "1:6把3.1近似成3。",
        "原濃縮液0.5L、水2.5L；加水後水3.1L，0.5:3.1=5:31。",
        "5:30等同1:6，未反映新增0.1L。",
        "6:31把濃縮液錯算0.6L。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「混合後重算最簡比」，已明示必要條件：只增加水，濃縮液量不變。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公升先同單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題幹明確要求最簡整數比。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確小數轉整數比。。"
      },
      "difficultyReason": "標準成分變動。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：5與31互質，且5/31=0.5/3.1。 正確選項為「5:31」。逐項檢查後，唯一為真的理由是「原濃縮液0.5L、水2.5L；加水後水3.1L，0.5:3.1=5:31。」；其餘三項分別因「1:6把3.1近似成3。」、「5:30等同1:6，未反映新增0.1L。」、「6:31把濃縮液錯算0.6L。」而排除。邊界與語意再檢查：題幹明確要求最簡整數比。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s011-v006-semantic-review-r1",
      "questionId": "u06-s011-v006",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "581108a98f36bda9bab10017a81363006691b30ef4736d1e5172167e57443fa2",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "若模型為5×15公分，實物2×6公尺，面積12平方公尺。",
      "derivedAnswer": "12平方公尺",
      "storedAnswer": "12平方公尺",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "面積倍率40²=1600；75×1600=120000平方公分=12平方公尺。",
        "只乘長度倍率後又錯換單位。",
        "只乘40得到3000平方公分=0.3平方公尺，且選項也不符。",
        "平方公分轉平方公尺少除10。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「比例尺面積複合」，已明示必要條件：模型與實物相似。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：平方公分轉平方公尺。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：1平方公尺=10000平方公分。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準面積倍率。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：若模型為5×15公分，實物2×6公尺，面積12平方公尺。 正確選項為「12平方公尺」。逐項檢查後，唯一為真的理由是「面積倍率40²=1600；75×1600=120000平方公分=12平方公尺。」；其餘三項分別因「只乘長度倍率後又錯換單位。」、「只乘40得到3000平方公分=0.3平方公尺，且選項也不符。」、「平方公分轉平方公尺少除10。」而排除。邊界與語意再檢查：1平方公尺=10000平方公分。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s011-v007-semantic-review-r1",
      "questionId": "u06-s011-v007",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "fe964b84c1e9dd689b16537f85cbed821756343aea8ec8181e482ced744b428c",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "總時間12天，完成量48+72=120人日。",
      "derivedAnswer": "6天",
      "storedAnswer": "6天",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "剩48人日的錯算。",
        "把總工期直接按8/12。",
        "總120人日，已做48，剩72；12人需6天。",
        "只用15-6。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「分段工作反比」，已明示必要條件：效率相同、工作量固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：人日、天。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：增員在6天後。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "進階分段。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：總時間12天，完成量48+72=120人日。 正確選項為「6天」。逐項檢查後，唯一為真的理由是「總120人日，已做48，剩72；12人需6天。」；其餘三項分別因「剩48人日的錯算。」、「把總工期直接按8/12。」、「只用15-6。」而排除。邊界與語意再檢查：增員在6天後。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s011-v008-semantic-review-r1",
      "questionId": "u06-s011-v008",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "c54f309d519040558826ad473250016b0bdb4074fa7a9b5b9feb6160c67356bb",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "10瓶用7.5L，剩0.6L；11瓶需8.25L不足。",
      "derivedAnswer": "10瓶",
      "storedAnswer": "10瓶",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "9瓶忽略部分容量。",
        "10.8不是整瓶數。",
        "12瓶需9公升。",
        "原液2份1.8，每份0.9，總9份8.1公升；8.1÷0.75=10.8，最多裝滿10瓶。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「配方與裝瓶離散限制」，已明示必要條件：只能計完整裝滿瓶。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公升與瓶。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：不計製程損耗。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：『最多裝滿』向下取整。。"
      },
      "difficultyReason": "進階複合限制。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：10瓶用7.5L，剩0.6L；11瓶需8.25L不足。 正確選項為「10瓶」。逐項檢查後，唯一為真的理由是「原液2份1.8，每份0.9，總9份8.1公升；8.1÷0.75=10.8，最多裝滿10瓶。」；其餘三項分別因「9瓶忽略部分容量。」、「10.8不是整瓶數。」、「12瓶需9公升。」而排除。邊界與語意再檢查：不計製程損耗。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s011-v009-semantic-review-r1",
      "questionId": "u06-s011-v009",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "e0419dfe0fb886d03d9838181ba0236f4e417770f0f6d214406b222f7b27a0e7",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "若A單價400、售10張，B單價700、售6張，收入4000與4200。",
      "derivedAnswer": "4200元",
      "storedAnswer": "4200元",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "設A票價4p、B7p；票數A5q、B3q。收入比A:B=20:21，B=4000×21/20=4200。",
        "只用票數比。",
        "只用票價比。",
        "把兩比相乘錯。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「雙重比例形成收入比」，已明示必要條件：票價與票數比對應同兩類票。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：元。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：比例可用共同倍率表示。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "進階複合比。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：若A單價400、售10張，B單價700、售6張，收入4000與4200。 正確選項為「4200元」。逐項檢查後，唯一為真的理由是「設A票價4p、B7p；票數A5q、B3q。收入比A:B=20:21，B=4000×21/20=4200。」；其餘三項分別因「只用票數比。」、「只用票價比。」、「把兩比相乘錯。」而排除。邊界與語意再檢查：比例可用共同倍率表示。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s011-v010-semantic-review-r1",
      "questionId": "u06-s011-v010",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "0684fd13f8434cee1af36b6f72896d8139c1b16e1993eff75ff616f041137e05",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "75×96=7200公尺。",
      "derivedAnswer": "96分鐘",
      "storedAnswer": "96分鐘",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "80只走直線距離。",
        "把96粗略取整到百但題目未要求。",
        "計算速率錯。",
        "直線6公里；沿路7.2公里=7200公尺；7200÷75=96。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「多段比例素養」，已明示必要條件：沿路增量以直線距離為基準，步速固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公分、公里、公尺、分鐘。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：『約』反映模型估計，不改變算術。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：結果整數，不需再近似。。"
      },
      "difficultyReason": "三步鏈。",
      "literacyNecessity": "沿路比直線多20%是必要中間倍率。",
      "reviewerNote": "獨立重算：75×96=7200公尺。 正確選項為「96分鐘」。逐項檢查後，唯一為真的理由是「直線6公里；沿路7.2公里=7200公尺；7200÷75=96。」；其餘三項分別因「80只走直線距離。」、「把96粗略取整到百但題目未要求。」、「計算速率錯。」而排除。邊界與語意再檢查：『約』反映模型估計，不改變算術。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s011-v011-semantic-review-r1",
      "questionId": "u06-s011-v011",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "fc3e2de3636b7ef061bafe6cc3a3e79ae58333eb1ac8407640aacdd0ca4908d9",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "方案一440元，方案二440元。",
      "derivedAnswer": "40單位",
      "storedAnswer": "40單位",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "120/8。",
        "120+8x=11x，3x=120，x=40。",
        "120/(11-6)錯。",
        "把固定費當用量。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「辨認固定加項後比較」，已明示必要條件：用量非負，費率固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：元與單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：x=40符合可用範圍。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "高階模型邊界。",
      "literacyNecessity": "固定費使純比例模型失效，情境資訊不可刪除。",
      "reviewerNote": "獨立重算：方案一440元，方案二440元。 正確選項為「40單位」。逐項檢查後，唯一為真的理由是「120+8x=11x，3x=120，x=40。」；其餘三項分別因「120/8。」、「120/(11-6)錯。」、「把固定費當用量。」而排除。邊界與語意再檢查：x=40符合可用範圍。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s011-v012-semantic-review-r1",
      "questionId": "u06-s011-v012",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "92660cc8457a3dbaad879e09b20b74cd2d230eda063d19fdef6d1f383c4007eb",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "逆推74.52/0.9=82.8。",
      "derivedAnswer": "74.52公斤",
      "storedAnswer": "74.52公斤",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "69是138的一半。",
        "82.8未扣第二次損耗。",
        "先剩138公斤；乙占3/5得82.8；再留90%得74.52。",
        "用原料150的60%。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「多階段比例損耗」，已明示必要條件：損耗基準分別為當時剩餘量。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公斤。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：各步比例清楚。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確到0.01公斤。。"
      },
      "difficultyReason": "綜合素養。",
      "literacyNecessity": "兩次損耗作用基準不同，必須保留流程情境。",
      "reviewerNote": "獨立重算：逆推74.52/0.9=82.8。 正確選項為「74.52公斤」。逐項檢查後，唯一為真的理由是「先剩138公斤；乙占3/5得82.8；再留90%得74.52。」；其餘三項分別因「69是138的一半。」、「82.8未扣第二次損耗。」、「用原料150的60%。」而排除。邊界與語意再檢查：各步比例清楚。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": []
};
