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
        "answer": "3.6 分鐘。"
      },
      {
        "exampleId": "L2",
        "prompt": "食譜 6 人需麵粉 450 克；改做 14 人份後，每袋 700 克可做幾次完整份量？",
        "solutionSteps": [
          "14 人份需 450×14/6=1050 克。",
          "每袋 700 克不足一次 14 人份，因此 0 次完整份量；若問需幾袋則要 2 袋。"
        ],
        "answer": "0 次完整份量。"
      },
      {
        "exampleId": "L3",
        "prompt": "商品原價按 4:5 售出，再從售價折 9:10，最後 720 元，求原價。",
        "solutionSteps": [
          "最後價=原價×4/5×9/10=原價×18/25。",
          "原價=720×25/18=1000。"
        ],
        "answer": "1000 元。"
      },
      {
        "exampleId": "L4",
        "prompt": "甲乙獎金比 3:5，乙再捐出所得的 20%，兩人保留金額合計 8400 元，且甲未捐，求原總獎金。",
        "solutionSteps": [
          "令每份 k，甲 3k，乙原 5k、保留 4k。",
          "保留合計 7k=8400，k=1200；原總 8k=9600。"
        ],
        "answer": "9600 元。"
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
    "contentSha256": "5317824b005a973b76b9dc24000283927be530d45e080c500d4468ee4bb35eb4"
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
      "mainExplanation": "第二次折扣作用在第一次後價格。",
      "explanation": "第二次折扣作用在第一次後價格。",
      "steps": [
        "4/5×9/10",
        "=18/25"
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
      "misconceptionTarget": "連續折扣直接相加。",
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
      "contentSha256": "094f17747ab3bcf4aa2d66feb307657d71f468f7fa81de3a0743c387505f036c"
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
      "mainExplanation": "先比例尺，再速度時間。",
      "explanation": "先比例尺，再速度時間。",
      "steps": [
        "6×50000=300000公分=3公里",
        "3/60小時",
        "×60=3分鐘"
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
      "misconceptionTarget": "小時分鐘未轉換。",
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
      "contentSha256": "cdcf8239a96ca42276dc6760f8f41c292546be7e0fa5fe655740caa08dd516a5"
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
      "mainExplanation": "先按人份放大，再按新需求加10%。",
      "explanation": "先按人份放大，再按新需求加10%。",
      "steps": [
        "450×14/6=1050",
        "1050×1.1=1155"
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
      "misconceptionTarget": "10%基準用成原6人份。",
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
      "contentSha256": "26201ce0908307648f220518240235f6c40e6002cb3c5f59dadc843eec11a010"
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
      "mainExplanation": "先按3:5分配總額，再對乙的所得乘0.8。",
      "explanation": "先按3:5分配總額，再對乙的所得乘0.8。",
      "steps": [
        "乙原得4000",
        "捐出800",
        "保留3200"
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
      "misconceptionTarget": "把20%作用於總額或未區分捐出與保留。",
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
      "contentSha256": "d589b7ed260e194fb136d776614c0ce3bdba010a9418bae9456b0b2f6dbd6218"
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
      "mainExplanation": "原總量6份，每份0.5L；更新水量後同乘10化整數。",
      "explanation": "原總量6份，每份0.5L；更新水量後同乘10化整數。",
      "steps": [
        "濃縮液0.5L",
        "水2.5+0.6=3.1L",
        "0.5:3.1=5:31"
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
      "misconceptionTarget": "把新增實量直接加到份數或提前近似。",
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
      "contentSha256": "b1b5e88a2ee09e051e5657a802a70c6fdbe69f02eeadf8e662ca5e22939c88d8"
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
      "mainExplanation": "比例尺作用於兩個長度方向，所以面積倍率平方。",
      "explanation": "比例尺作用於兩個長度方向，所以面積倍率平方。",
      "steps": [
        "75×1600=120000平方公分",
        "120000÷10000=12平方公尺"
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
      "misconceptionTarget": "忘記平方倍率或平方單位換算。",
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
      "contentSha256": "b60f202bcb4375e245cf6010d97e99d149ab273d21e726d18d1d50f7d3fb7db9"
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
      "mainExplanation": "工作量分段計算。",
      "explanation": "工作量分段計算。",
      "steps": [
        "8×15=120",
        "8×6=48",
        "剩72",
        "72/12=6"
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
      "misconceptionTarget": "忽略已完成工作。",
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
      "contentSha256": "d457d71115da5c09c559a077ee31de7817f4cb738713bf1200deda5e608b38bc"
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
      "mainExplanation": "先求總飲料，再向下取整裝滿瓶數。",
      "explanation": "先求總飲料，再向下取整裝滿瓶數。",
      "steps": [
        "總量8.1L",
        "除0.75=10.8",
        "向下取整10"
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
      "misconceptionTarget": "向上取整或只看小數。",
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
      "contentSha256": "a5503c06a2dcbad38e74f7d8ea877cb27f261875f7540cd642279e5fdfe18f3a"
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
      "mainExplanation": "收入同時受票價與票數影響，倍率相乘。",
      "explanation": "收入同時受票價與票數影響，倍率相乘。",
      "steps": [
        "收入比4×5:7×3=20:21",
        "B=4200"
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
      "misconceptionTarget": "只使用一個比。",
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
      "contentSha256": "05dff5d05a285281b59c298ca43c18bf4682e446272df7a09135108753ddd7f2"
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
      "mainExplanation": "比例尺、路線增量、速率三步。",
      "explanation": "比例尺、路線增量、速率三步。",
      "steps": [
        "8×75000=600000cm=6km",
        "×1.2=7.2km",
        "7200/75=96"
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
      "misconceptionTarget": "漏掉起伏倍率或單位。",
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
      "contentSha256": "ca2504e39fcc22e9b8b9424136b8f624091e0ddb29baba3a17ac0eb2ccd04350"
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
      "mainExplanation": "此題不是純正比，需拆固定費與變動費。",
      "explanation": "此題不是純正比，需拆固定費與變動費。",
      "steps": [
        "列兩總費用",
        "120+8x=11x",
        "x=40"
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
      "misconceptionTarget": "把有固定費方案仍當正比。",
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
      "contentSha256": "eb948234ff8746eeeac2346e93d435637a79029ab397b254e6f12c81157b01dd"
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
      "mainExplanation": "損耗與分配依序處理。",
      "explanation": "損耗與分配依序處理。",
      "steps": [
        "150×0.92=138",
        "138×3/5=82.8",
        "82.8×0.9=74.52"
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
      "misconceptionTarget": "把兩次百分比直接相減或順序錯。",
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
      "contentSha256": "76d916e65244bbd934b89250e2d235031ca5eb4a504a57dc66c08ac007aeed80"
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
        "平面距離9×60000=540000公分=5.4公里。",
        "實際路線5.4×1.1=5.94公里=5940公尺。",
        "時間5940÷75=79.2分鐘。"
      ],
      "alternativeSolutions": [
        "可先算75公尺/分=4.5公里/時，再以5.94÷4.5小時轉分鐘。"
      ],
      "reasoningSteps": [
        "平面距離9×60000=540000公分=5.4公里。",
        "實際路線5.4×1.1=5.94公里=5940公尺。",
        "時間5940÷75=79.2分鐘。"
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
        "比例尺分母當公里。",
        "增加率基準用5.94。",
        "小時分鐘混淆。"
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
      "contentSha256": "fa47007240bf6c32f6fa42687d47006276e4ee5f5357e2683341d27035e562c2"
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
        "損耗後200×0.95=190公斤。",
        "甲=190×2/5=76公斤，乙=190×3/5=114公斤。",
        "甲加輔料後=76×1.2=91.2公斤。",
        "最後比91.2:114=912:1140=4:5。"
      ],
      "alternativeSolutions": [
        "可用份數每份38公斤，甲76、乙114，再處理甲。"
      ],
      "reasoningSteps": [
        "損耗後200×0.95=190公斤。",
        "甲=190×2/5=76公斤，乙=190×3/5=114公斤。",
        "甲加輔料後=76×1.2=91.2公斤。",
        "最後比91.2:114=912:1140=4:5。"
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
        "20%以原總量為基準。",
        "乙也乘1.2。",
        "損耗後仍用200分配。"
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
      "contentSha256": "a21819f9b1713c8fa783fd0aa9e37ba00ae17b8966cb66f54d1d9b52129b56aa"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s011-v001-semantic-review-r1",
      "questionId": "u06-s011-v001",
      "unitId": "u06",
      "skillId": "ratio-composite-problem",
      "contentSha256": "094f17747ab3bcf4aa2d66feb307657d71f468f7fa81de3a0743c387505f036c",
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
      "contentSha256": "cdcf8239a96ca42276dc6760f8f41c292546be7e0fa5fe655740caa08dd516a5",
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
      "contentSha256": "26201ce0908307648f220518240235f6c40e6002cb3c5f59dadc843eec11a010",
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
      "contentSha256": "d589b7ed260e194fb136d776614c0ce3bdba010a9418bae9456b0b2f6dbd6218",
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
      "contentSha256": "b1b5e88a2ee09e051e5657a802a70c6fdbe69f02eeadf8e662ca5e22939c88d8",
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
      "contentSha256": "b60f202bcb4375e245cf6010d97e99d149ab273d21e726d18d1d50f7d3fb7db9",
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
      "contentSha256": "d457d71115da5c09c559a077ee31de7817f4cb738713bf1200deda5e608b38bc",
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
      "contentSha256": "a5503c06a2dcbad38e74f7d8ea877cb27f261875f7540cd642279e5fdfe18f3a",
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
      "contentSha256": "05dff5d05a285281b59c298ca43c18bf4682e446272df7a09135108753ddd7f2",
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
      "contentSha256": "ca2504e39fcc22e9b8b9424136b8f624091e0ddb29baba3a17ac0eb2ccd04350",
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
      "contentSha256": "eb948234ff8746eeeac2346e93d435637a79029ab397b254e6f12c81157b01dd",
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
      "contentSha256": "76d916e65244bbd934b89250e2d235031ca5eb4a504a57dc66c08ac007aeed80",
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
