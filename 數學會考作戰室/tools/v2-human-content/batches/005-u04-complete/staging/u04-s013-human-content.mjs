// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s013-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-apps",
  "skillId": "system-mixture-basic",
  "lockedSkillTitle": "基礎混合問題",
  "title": "基礎混合問題：總量與成分量都要守恆",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "基礎混合問題",
    "scope": "以總量守恆與成分量或總價守恆建立聯立方程式。"
  },
  "prerequisiteBridge": "先備技能 system-rate-problem 已建立必要基礎；本節將其用於「以總量守恆與成分量或總價守恆建立聯立方程式。」",
  "learningGoals": [
    "能區分混合物總量與其中成分量。",
    "能把百分濃度轉為小數或分數。",
    "能建立總量式與成分量式。",
    "能處理單價混合與基本濃度混合。"
  ],
  "vocabulary": [
    {
      "term": "濃度",
      "definition": "成分量佔混合物總量的比例。"
    },
    {
      "term": "成分量",
      "definition": "濃度乘混合物總量。"
    },
    {
      "term": "總量守恆",
      "definition": "混合前各量相加等於混合後總量。"
    },
    {
      "term": "加權平均",
      "definition": "混合後比例介於原兩比例之間。"
    }
  ],
  "notation": [
    {
      "symbol": "cx",
      "meaning": "濃度 c 的溶液 x 單位中，成分量為 cx。"
    },
    {
      "symbol": "x+y=T",
      "meaning": "兩種混合物總量。"
    },
    {
      "symbol": "c₁x+c₂y=cT",
      "meaning": "成分量守恆。"
    }
  ],
  "conceptDevelopment": [
    "濃度不是直接相加；要先算每一份溶液內含多少成分。",
    "若兩種濃度為 10% 與 30%，混合後濃度必介於 10% 與 30% 之間。",
    "價格混合也使用同樣的加權總價概念。"
  ],
  "definitions": [
    {
      "name": "濃度",
      "statement": "成分量÷總量。"
    },
    {
      "name": "純成分量",
      "statement": "濃度×溶液量。"
    }
  ],
  "formulas": [
    {
      "formula": "x+y=T，c₁x+c₂y=cT",
      "conditions": [
        "各量使用同一重量或容量單位，百分率先化為小數。"
      ],
      "meaning": "標準兩液混合模型。"
    }
  ],
  "invalidUseCases": [
    "10%+20% 不代表混合後 30%。",
    "毫升與公升須先統一。",
    "本單元不處理化學反應、密度變化或體積不守恆等高中情境。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "設兩種混合物用量",
      "check": "統一單位。"
    },
    {
      "step": 2,
      "instruction": "列總量式",
      "check": "x+y=T。"
    },
    {
      "step": 3,
      "instruction": "把百分率化成小數",
      "check": "例如 20%=0.2。"
    },
    {
      "step": 4,
      "instruction": "列成分量式",
      "check": "濃度×用量後相加。"
    },
    {
      "step": 5,
      "instruction": "解並檢查濃度範圍",
      "check": "答案非負。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "10% 與 30% 食鹽水配成 20% 共 500 克。",
      "solutionSteps": [
        "x+y=500。",
        "0.1x+0.3y=100。"
      ],
      "answer": "各 250 克。"
    },
    {
      "exampleId": "L2",
      "prompt": "每公斤 60 元與 90 元米混成每公斤 72 元共 20 公斤。",
      "solutionSteps": [
        "x+y=20。",
        "60x+90y=72×20。"
      ],
      "answer": "便宜米 12 公斤、較貴米 8 公斤。"
    },
    {
      "exampleId": "L3",
      "prompt": "20% 溶液與清水配成 8% 共 300 克。",
      "solutionSteps": [
        "清水濃度 0%。",
        "x+y=300、0.2x=24。"
      ],
      "answer": "20% 溶液 120 克、清水 180 克。"
    },
    {
      "exampleId": "L4",
      "prompt": "40% 與 60% 溶液能否配出 70%？",
      "solutionSteps": [
        "混合後濃度應介於兩者之間。"
      ],
      "answer": "不能以非負用量配出。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "直接平均兩濃度",
      "correction": "只有等量混合時才是算術平均。"
    },
    {
      "mistake": "百分率未除以 100",
      "correction": "20% 應用 0.2。"
    },
    {
      "mistake": "只列成分式不列總量",
      "correction": "缺少第二個條件。"
    },
    {
      "mistake": "忽略混合後濃度範圍",
      "correction": "可快速檢查不合理資料。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "15% 的 200 克含成分多少？",
      "answer": "30 克。"
    },
    {
      "prompt": "清水濃度視為多少？",
      "answer": "0%。"
    },
    {
      "prompt": "混合 10% 與 30% 可得 35% 嗎？",
      "answer": "不可以。"
    },
    {
      "prompt": "兩條守恆式是什麼？",
      "answer": "總量守恆與成分量守恆。"
    }
  ],
  "summary": [
    "先列總量，再列成分量。",
    "濃度要乘用量。",
    "百分率先化小數。",
    "結果應介於原濃度範圍。"
  ],
  "connections": {
    "previous": "先備技能 system-rate-problem 已建立必要基礎；本節將其用於「以總量守恆與成分量或總價守恆建立聯立方程式。」",
    "next": "下一技能「聯立方程式素養題」會延伸目前能力。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "三個可解示例均以總量與成分量獨立回算，另以 70% 反例檢查非負限制；內容明確排除化學反應與密度等高中議題。",
    "reviewNote": "三個可解示例均以總量與成分量獨立回算，另以 70% 反例檢查非負限制；內容明確排除化學反應與密度等高中議題。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "9a24dad26d60facae8807270b8e845d631e9b78b6d9294d894fa9f8351ad3cd7"
};

export const QUESTIONS = [
  {
    "questionId": "u04-s013-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "20% 溶液 200 克中，成分量為多少？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "計算單份成分量",
    "choices": [
      "40 克",
      "20 克",
      "100 克",
      "4000 克"
    ],
    "answerIndex": 0,
    "independentSolution": "0.2×200=40 克。",
    "explanation": "成分量=濃度×總量。",
    "steps": [
      "20%=0.2。",
      "乘 200。"
    ],
    "optionAnalysis": [
      {
        "choice": "40 克",
        "truth": true,
        "reason": "200 的 20% 是 40。"
      },
      {
        "choice": "20 克",
        "truth": false,
        "reason": "把百分數直接當克數。"
      },
      {
        "choice": "100 克",
        "truth": false,
        "reason": "誤取一半。"
      },
      {
        "choice": "4000 克",
        "truth": false,
        "reason": "未把百分率除以 100。"
      }
    ],
    "misconceptionTarget": "百分率未轉小數",
    "prerequisiteCheck": "只需先備 system-rate-problem，並使用本技能「基礎混合問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "比例×克=克。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「計算單份成分量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "基礎公式。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "be9d5248c8e1306280e87c92c5eb576ffcf93f59195b2de2492368447ba64a18"
  },
  {
    "questionId": "u04-s013-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "清水在基本濃度混合模型中可視為濃度多少？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "識別 0% 混合物",
    "choices": [
      "1%",
      "0%",
      "50%",
      "100%"
    ],
    "answerIndex": 1,
    "independentSolution": "若討論鹽或糖的濃度，清水所含該成分為 0。",
    "explanation": "清水可作為 0% 溶液。",
    "steps": [
      "確認所討論成分。",
      "設濃度 0。"
    ],
    "optionAnalysis": [
      {
        "choice": "1%",
        "truth": false,
        "reason": "清水不含題設成分。"
      },
      {
        "choice": "0%",
        "truth": true,
        "reason": "題設成分量為 0。"
      },
      {
        "choice": "50%",
        "truth": false,
        "reason": "沒有平均依據。"
      },
      {
        "choice": "100%",
        "truth": false,
        "reason": "100% 代表純成分。"
      }
    ],
    "misconceptionTarget": "把純水誤為 100% 溶質",
    "prerequisiteCheck": "只需先備 system-rate-problem，並使用本技能「基礎混合問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「識別 0% 混合物」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "定義題。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "0e85bdfe92075c1825b098d490ef4c07036785a92937c577cb5ea2de7aed5714"
  },
  {
    "questionId": "u04-s013-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "10% 與 30% 溶液混合後，濃度不可能是哪一個？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "用加權平均範圍判斷",
    "choices": [
      "15%",
      "20%",
      "25%",
      "35%"
    ],
    "answerIndex": 3,
    "independentSolution": "非負用量混合的加權平均必須介於原濃度 10% 與 30% 之間。",
    "explanation": "範圍檢查可先排除不可能目標。",
    "steps": [
      "找原濃度最小與最大。",
      "檢查目標範圍。"
    ],
    "optionAnalysis": [
      {
        "choice": "15%",
        "truth": false,
        "reason": "介於 10 與 30。"
      },
      {
        "choice": "20%",
        "truth": false,
        "reason": "介於兩者。"
      },
      {
        "choice": "25%",
        "truth": false,
        "reason": "介於兩者。"
      },
      {
        "choice": "35%",
        "truth": true,
        "reason": "35% 高於兩種原液的最高濃度。"
      }
    ],
    "misconceptionTarget": "認為濃度可以直接相加",
    "prerequisiteCheck": "只需先備 system-rate-problem，並使用本技能「基礎混合問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「用加權平均範圍判斷」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "基礎合理性。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "aa36149971c2bec77ddfbce44fbc922acf1ae0779220e7cdd16b45fcccd32e71"
  },
  {
    "questionId": "u04-s013-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "10% 與 30% 食鹽水配成 20% 共 500 克，30% 溶液需多少克？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "標準兩濃度混合",
    "choices": [
      "100 克",
      "200 克",
      "250 克",
      "300 克"
    ],
    "answerIndex": 2,
    "independentSolution": "設 10% 為 x、30% 為 y：x+y=500，0.1x+0.3y=100。減 0.1(x+y)=50 得 0.2y=50，y=250。",
    "explanation": "目標濃度正好居中，因此等量。",
    "steps": [
      "列總量式。",
      "列鹽量式。",
      "消去求 y。"
    ],
    "optionAnalysis": [
      {
        "choice": "100 克",
        "truth": false,
        "reason": "成分量不足。"
      },
      {
        "choice": "200 克",
        "truth": false,
        "reason": "混合濃度為 18%。"
      },
      {
        "choice": "250 克",
        "truth": true,
        "reason": "250 克各自混合的鹽量為 25+75=100 克。"
      },
      {
        "choice": "300 克",
        "truth": false,
        "reason": "混合濃度為 22%。"
      }
    ],
    "misconceptionTarget": "直接平均但未確認等量",
    "prerequisiteCheck": "只需先備 system-rate-problem，並使用本技能「基礎混合問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "克。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「標準兩濃度混合」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "完整守恆。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9792b9e3cb83c3f7e91156b5f4ed2e6e7601a4eae637e5a831f61070ef005bc9"
  },
  {
    "questionId": "u04-s013-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "20% 溶液與清水配成 8% 共 300 克，20% 溶液多少克？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "與清水混合",
    "choices": [
      "80 克",
      "180 克",
      "120 克",
      "240 克"
    ],
    "answerIndex": 2,
    "independentSolution": "最終成分量 0.08×300=24 克，來自 20% 溶液；0.2x=24，x=120。",
    "explanation": "清水貢獻 0 成分。",
    "steps": [
      "算目標成分 24。",
      "解 0.2x=24。"
    ],
    "optionAnalysis": [
      {
        "choice": "80 克",
        "truth": false,
        "reason": "只把百分數當克數。"
      },
      {
        "choice": "180 克",
        "truth": false,
        "reason": "這是清水量。"
      },
      {
        "choice": "120 克",
        "truth": true,
        "reason": "120×20%=24 克，混合總量 300 克時為 8%。"
      },
      {
        "choice": "240 克",
        "truth": false,
        "reason": "成分量過多。"
      }
    ],
    "misconceptionTarget": "把清水也計成分",
    "prerequisiteCheck": "只需先備 system-rate-problem，並使用本技能「基礎混合問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "克。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「與清水混合」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "標準稀釋。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "691edd634294d6ff88a367a76f27dacc94b2f09ec36a7c77a8b1eba3d95be1c1"
  },
  {
    "questionId": "u04-s013-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "每公斤 60 元與 90 元的米混成 20 公斤、平均 72 元/公斤，90 元米幾公斤？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "價格型混合",
    "choices": [
      "6 公斤",
      "12 公斤",
      "16 公斤",
      "8 公斤"
    ],
    "answerIndex": 3,
    "independentSolution": "全 60 元米成本 1200；目標成本 1440，多 240；每公斤貴米多 30，所以 8 公斤。",
    "explanation": "價格混合與濃度混合同為加權總量。",
    "steps": [
      "算目標總成本。",
      "求額外成本。",
      "除價差。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 公斤",
        "truth": false,
        "reason": "平均價為 69。"
      },
      {
        "choice": "12 公斤",
        "truth": false,
        "reason": "這是 60 元米數量。"
      },
      {
        "choice": "16 公斤",
        "truth": false,
        "reason": "平均價為 84。"
      },
      {
        "choice": "8 公斤",
        "truth": true,
        "reason": "12×60+8×90=1440。"
      }
    ],
    "misconceptionTarget": "把平均價直接當數量",
    "prerequisiteCheck": "只需先備 system-rate-problem，並使用本技能「基礎混合問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "公斤。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「價格型混合」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "標準遷移。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "3de50fe0a976ce84604fe713c39b3a52976176c9873f59ce1a64e0ab80d913b3"
  },
  {
    "questionId": "u04-s013-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "15% 與 45% 溶液混合成 30% 共 800 克，兩種用量關係為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "利用濃度對稱性",
    "choices": [
      "200 克與 600 克",
      "各 400 克",
      "600 克與 200 克",
      "100 克與 700 克"
    ],
    "answerIndex": 1,
    "independentSolution": "目標 30% 正好是 15% 與 45% 的中點，所以兩種用量相等；總量 800，各 400。",
    "explanation": "可用對稱加權或聯立驗證。",
    "steps": [
      "比較目標到兩端距離相等。",
      "由總量平分。"
    ],
    "optionAnalysis": [
      {
        "choice": "200 克與 600 克",
        "truth": false,
        "reason": "混合濃度 37.5%。"
      },
      {
        "choice": "各 400 克",
        "truth": true,
        "reason": "等量時平均濃度為 (15%+45%)/2=30%。"
      },
      {
        "choice": "600 克與 200 克",
        "truth": false,
        "reason": "混合濃度 22.5%。"
      },
      {
        "choice": "100 克與 700 克",
        "truth": false,
        "reason": "混合濃度 41.25%。"
      }
    ],
    "misconceptionTarget": "看到中點卻仍按濃度比例分配錯誤",
    "prerequisiteCheck": "只需先備 system-rate-problem，並使用本技能「基礎混合問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「利用濃度對稱性」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "策略性推理。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "189dff4195b662fa1c8f64f55f1f5be2ef3c3aaad4a0ad7b10d9982553c44b0d"
  },
  {
    "questionId": "u04-s013-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "25% 溶液 x 克與 10% 溶液 y 克混成 400 克、濃度 16%。x 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "非對稱濃度混合",
    "choices": [
      "160 克",
      "120 克",
      "240 克",
      "280 克"
    ],
    "answerIndex": 0,
    "independentSolution": "x+y=400；0.25x+0.10y=64。減 0.10(x+y)=40，得 0.15x=24，x=160。",
    "explanation": "以低濃度為基準消去。",
    "steps": [
      "列總量與成分量。",
      "作基準相減。",
      "求 x。"
    ],
    "optionAnalysis": [
      {
        "choice": "160 克",
        "truth": true,
        "reason": "160×0.25+240×0.10=64。"
      },
      {
        "choice": "120 克",
        "truth": false,
        "reason": "成分量為 58 克而非 64。"
      },
      {
        "choice": "240 克",
        "truth": false,
        "reason": "這是較低濃度溶液量。"
      },
      {
        "choice": "280 克",
        "truth": false,
        "reason": "混合濃度過高。"
      }
    ],
    "misconceptionTarget": "把 16% 與兩濃度簡單平均",
    "prerequisiteCheck": "只需先備 system-rate-problem，並使用本技能「基礎混合問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「非對稱濃度混合」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需要小數聯立。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "56df6f3f2e590199011fd0befbe4c2c5afd642b9aa2829102f63d5e402cf7eed"
  },
  {
    "questionId": "u04-s013-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "40% 與 60% 溶液欲配成 70%，若用量限制為非負，解的判斷為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "判斷混合資料不可行",
    "choices": [
      "可各半混合",
      "無可行解",
      "只用 60% 即可",
      "加入更多 40% 即可"
    ],
    "answerIndex": 1,
    "independentSolution": "70% 超過原液最高 60%，非負加權平均無法達到。",
    "explanation": "先做範圍檢查，無需列式。",
    "steps": [
      "比較目標與範圍。",
      "判不可行。"
    ],
    "optionAnalysis": [
      {
        "choice": "可各半混合",
        "truth": false,
        "reason": "各半僅得 50%。"
      },
      {
        "choice": "無可行解",
        "truth": true,
        "reason": "目標濃度不在 [40%,60%] 內。"
      },
      {
        "choice": "只用 60% 即可",
        "truth": false,
        "reason": "最高仍為 60%。"
      },
      {
        "choice": "加入更多 40% 即可",
        "truth": false,
        "reason": "會使濃度更低。"
      }
    ],
    "misconceptionTarget": "機械列式後接受負用量",
    "prerequisiteCheck": "只需先備 system-rate-problem，並使用本技能「基礎混合問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「判斷混合資料不可行」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "高階合理性。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "919a89eed5eb659a2d79975cd84d6132dde65dc34ca557ba8f5958fca8f5bb57"
  },
  {
    "questionId": "u04-s013-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "飲料配方表：果汁濃度 30% 與 10% 混合成 20% 共 2 公升。高濃度果汁需多少公升？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從飲料配方求用量",
    "choices": [
      "0.5 公升",
      "1.5 公升",
      "2 公升",
      "1 公升"
    ],
    "answerIndex": 3,
    "independentSolution": "目標 20% 是兩濃度中點，因此兩種液體等量，各 1 公升。",
    "explanation": "配方表中的濃度與總量都必要。",
    "steps": [
      "確認對稱。",
      "將 2 公升平分。"
    ],
    "optionAnalysis": [
      {
        "choice": "0.5 公升",
        "truth": false,
        "reason": "混合濃度 15%。"
      },
      {
        "choice": "1.5 公升",
        "truth": false,
        "reason": "混合濃度 25%。"
      },
      {
        "choice": "2 公升",
        "truth": false,
        "reason": "濃度仍為 30%。"
      },
      {
        "choice": "1 公升",
        "truth": true,
        "reason": "1 公升各自提供 0.3 與 0.1 公升成分，共 0.4/2=20%。"
      }
    ],
    "misconceptionTarget": "只看總量或只看濃度",
    "prerequisiteCheck": "只需先備 system-rate-problem，並使用本技能「基礎混合問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "公升。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從飲料配方求用量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "配方資訊必要。",
    "literacyContextNecessity": "兩種濃度與目標濃度決定比例，總量決定實際公升數。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4e1fdfdf7c24411ebff3a8efe3296c1ef03c4831f3d102a94e967a05b17d90a4"
  },
  {
    "questionId": "u04-s013-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "咖啡豆調配：每公斤 500 元與 800 元，配成 10 公斤、平均 620 元/公斤。800 元豆幾公斤？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從調配成本表反求用量",
    "choices": [
      "3 公斤",
      "6 公斤",
      "4 公斤",
      "8 公斤"
    ],
    "answerIndex": 2,
    "independentSolution": "目標總成本 6200；全 500 元豆 5000，多 1200；每公斤高價豆多 300，故 4 公斤。",
    "explanation": "價格配方需要加權總成本。",
    "steps": [
      "算目標成本。",
      "算基準成本。",
      "除價差。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 公斤",
        "truth": false,
        "reason": "平均價 590。"
      },
      {
        "choice": "6 公斤",
        "truth": false,
        "reason": "平均價 680。"
      },
      {
        "choice": "4 公斤",
        "truth": true,
        "reason": "6×500+4×800=6200。"
      },
      {
        "choice": "8 公斤",
        "truth": false,
        "reason": "平均價 740。"
      }
    ],
    "misconceptionTarget": "平均價直接除單價",
    "prerequisiteCheck": "只需先備 system-rate-problem，並使用本技能「基礎混合問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "公斤。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從調配成本表反求用量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "價格差與總重量必要。",
    "literacyContextNecessity": "兩種豆單價、平均價和總重量共同決定用量。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "741e06d099cb94c771cd124bf74d0eac35ae47c6f0349d619dad2fccf216e54b"
  },
  {
    "questionId": "u04-s013-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "清潔液標示要配製 500 毫升、含有效成分 60 毫升。若原液濃度 20%，其餘加水，需原液多少毫升？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由標籤成分量求原液量",
    "choices": [
      "300 毫升",
      "60 毫升",
      "200 毫升",
      "440 毫升"
    ],
    "answerIndex": 0,
    "independentSolution": "0.2x=60，x=300；加水 200，合計 500。",
    "explanation": "標籤直接給成分量時先用成分式。",
    "steps": [
      "設原液 x。",
      "解 20%×x=60。",
      "檢查總量。"
    ],
    "optionAnalysis": [
      {
        "choice": "300 毫升",
        "truth": true,
        "reason": "300 毫升原液含 60 毫升有效成分。"
      },
      {
        "choice": "60 毫升",
        "truth": false,
        "reason": "這是有效成分量，不是原液量。"
      },
      {
        "choice": "200 毫升",
        "truth": false,
        "reason": "只含 40 毫升成分。"
      },
      {
        "choice": "440 毫升",
        "truth": false,
        "reason": "把加水量與原液量混淆。"
      }
    ],
    "misconceptionTarget": "把成分量直接當溶液量",
    "prerequisiteCheck": "只需先備 system-rate-problem，並使用本技能「基礎混合問題」。",
    "estimatedTimeSec": 90,
    "unitCheck": "毫升。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由標籤成分量求原液量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "標示資料不可刪。",
    "literacyContextNecessity": "有效成分 60 與原液濃度 20% 直接決定原液用量。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e3901ee0dc0d26fc5141d604323338963c0a484da46e3390ec98b69aabd33579"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s013-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "standard",
    "itemType": "constructed-response",
    "prompt": "用 10% 與 30% 食鹽水配成 20% 食鹽水 600 克。求兩種原液各多少克，並驗算食鹽量。",
    "requiredWork": [
      "列總量與鹽量。",
      "百分率轉小數。"
    ],
    "standardSolution": [
      "設10%為 x 克、30%為 y 克。",
      "x+y=600，0.1x+0.3y=0.2×600=120。",
      "減0.1(x+y)=60，得0.2y=60，y=300，x=300。",
      "驗算鹽量30+90=120克。"
    ],
    "alternativeMethods": [
      "目標20%是兩濃度中點，所以等量，再用總量得各300克。"
    ],
    "reasoningSteps": [
      "總量。",
      "成分量。",
      "求解與驗算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "各300克且鹽量驗算完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但未驗算或百分率寫法略缺。"
      },
      {
        "score": 1,
        "criteria": "兩式正確但算術錯。"
      },
      {
        "score": 0,
        "criteria": "直接將10%+30%=20%或不乘用量。"
      }
    ],
    "partialCreditRules": [
      "總量一分，成分量一分，結果檢查一分。"
    ],
    "followThroughPolicy": "若把百分率寫10、30但全式同除100且邏輯清楚，不扣分。",
    "unitNotationRules": "重量為克；鹽量也為克。",
    "answerOnlyPolicy": "只答各300克最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "各300克。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立用對稱與聯立兩法驗證。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d170f5671216aa947911a8ede5303ac0543d2ac5e236beb9ec7eb4d37b9b7d24"
  },
  {
    "questionId": "u04-s013-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "咖啡豆每公斤 500 元與 800 元，欲調成 15 公斤、平均 620 元/公斤。求兩種豆各多少公斤，並做平均價格範圍檢查。",
    "requiredWork": [
      "先求目標總成本。",
      "列總量與總價。"
    ],
    "standardSolution": [
      "設500元豆 x、800元豆 y。",
      "x+y=15，500x+800y=620×15=9300。",
      "減500(x+y)=7500，300y=1800，y=6，x=9。",
      "620介於500與800之間，且兩用量非負，合理。"
    ],
    "alternativeMethods": [
      "全用低價豆為基準，多1800元，每公斤高價豆多300元，所以高價豆6公斤。"
    ],
    "reasoningSteps": [
      "計算目標成本。",
      "求解。",
      "範圍與非負檢查。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "低價9公斤、高價6公斤，檢查完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但少範圍或非負檢查。"
      },
      {
        "score": 1,
        "criteria": "模型正確且求出高價豆，另一量或檢查錯誤。"
      },
      {
        "score": 0,
        "criteria": "把平均價620直接當總價。"
      }
    ],
    "partialCreditRules": [
      "總成本/模型一分，結果一分，合理性一分。"
    ],
    "followThroughPolicy": "若總成本乘法錯但後續基於其值一致，最多 2 分。",
    "unitNotationRules": "公斤與元/公斤、元必須對應。",
    "answerOnlyPolicy": "只答9、6最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "500元豆9公斤、800元豆6公斤。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立回算4500+4800=9300，9300/15=620。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "2e2904864ac8e28ebb40844db9e3a770410f537061407991df48aab04623d010"
  }
];

export const DRAWING_SPECS = [];
