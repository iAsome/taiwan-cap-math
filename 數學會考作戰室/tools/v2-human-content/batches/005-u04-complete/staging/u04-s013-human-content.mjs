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
        "設兩種原液為 x、y 克，列 x+y=500。",
        "目標食鹽量為一百克，列 0.1x+0.3y=100。",
        "減去低濃度基準式得 0.2y=50，所以 x=y=250。"
      ],
      "answer": "各 250 克。",
      "why": "總量式與食鹽量式同時成立才是完整模型。目標百分之二十恰在兩濃度中點，因此等量結果合理；回算食鹽量二十五加七十五等於一百克。"
    },
    {
      "exampleId": "L2",
      "prompt": "每公斤 60 元與 90 元米混成每公斤 72 元共 20 公斤。",
      "solutionSteps": [
        "設便宜米 x 公斤、較貴米 y 公斤，列 x+y=20。",
        "目標成本為 72×20=1440，列 60x+90y=1440。",
        "減去 60(x+y)=1200，得 30y=240，所以 y=8、x=12。"
      ],
      "answer": "便宜米 12 公斤、較貴米 8 公斤。",
      "why": "平均單價須先乘二十公斤轉成總成本。全用便宜米比目標少二百四十元，每公斤高價米補三十元差額，所以需要八公斤，回算總成本為一千四百四十元。"
    },
    {
      "exampleId": "L3",
      "prompt": "20% 溶液與清水配成 8% 共 300 克。",
      "solutionSteps": [
        "設百分之二十原液 x 克、清水 y 克，列 x+y=300。",
        "目標成分量為 0.08×300=24 克，清水貢獻為零。",
        "由 0.2x=24 得 x=120，再求 y=180。"
      ],
      "answer": "20% 溶液 120 克、清水 180 克。",
      "why": "清水在題設成分的濃度為百分之零，因此所有二十四克成分都由原液提供。原液一百二十克含二十四克成分，加入一百八十克水後總量三百克，濃度正為百分之八。"
    },
    {
      "exampleId": "L4",
      "prompt": "40% 與 60% 溶液能否配出 70%？",
      "solutionSteps": [
        "先找兩種原液濃度範圍為百分之四十到百分之六十。",
        "目標百分之七十高於兩種原液的最高濃度。",
        "依非負加權平均的範圍性質，判定沒有可行用量。"
      ],
      "answer": "不能以非負用量配出。",
      "why": "兩種非負用量的混合濃度只能位於原濃度之間，無法超過百分之六十。若硬解方程式出現負用量，那只是代數形式的結果，不符合實際混合情境。"
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
  "contentSha256": "8f6485c792abd2c11cfdbc9269ce358dd55b446627798b5ed8727da36930373b",
  "conceptNarrative": [
    "混合問題同時使用總量守恆與成分量守恆。若兩種溶液用量為 x、y，總量為 T，先列 x+y=T；再把每種濃度化成小數，分別乘自己的用量後相加，等於混合後的成分量。",
    "濃度不能直接相加或任意平均。只有兩種用量相等時，混合濃度才是兩濃度的算術平均；一般情況必須依用量加權。清水對題設成分的濃度視為百分之零。",
    "以非負用量混合時，結果濃度必在原液最低與最高濃度之間。列式前先做範圍檢查，可立刻排除百分之四十與百分之六十配出百分之七十等不可能資料，也能拒絕負用量。",
    "價格調配與濃度混合具有相同結構：總成本等於各單價乘重量後相加，平均單價乘總重量就是目標總成本。基準差法與消去法等價，但仍應回算總量及加權總值。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "定義兩種原液或材料用量，統一克、公斤、公升或毫升等單位。",
      "check": "兩變數與總量使用同一單位，且用量可接受非負限制。"
    },
    {
      "step": 2,
      "instruction": "建立總量守恆式 x+y=T。",
      "check": "沒有把濃度、單價或成分量混入總量方程式。"
    },
    {
      "step": 3,
      "instruction": "將百分率化成小數，計算目標成分量或目標總成本。",
      "check": "百分之二十寫成零點二，平均單價已乘總重量。"
    },
    {
      "step": 4,
      "instruction": "建立成分量或總成本守恆式，使用消去法或基準差求解。",
      "check": "每個濃度或單價只乘自己的用量，兩式彼此獨立。"
    },
    {
      "step": 5,
      "instruction": "回算總量與成分量，並檢查濃度範圍、平均價格與用量非負。",
      "check": "結果落在原值範圍內，沒有接受負用量或答錯材料。"
    }
  ]
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
    "explanation": "百分之二十要先改寫成小數零點二，成分量等於濃度乘溶液總量。計算 0.2×200=40 克，所以成分為四十克；二十克是把百分率數字直接當重量，四千公克則忘了除以一百。",
    "steps": [
      "把百分之二十改寫為小數零點二。",
      "用濃度乘總量，列出 0.2×200。",
      "計算得四十克，並檢查小於總量二百克。"
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
    "misconceptionTarget": "沒有把百分率除以一百，或直接把百分之二十當成二十克。",
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
    "contentSha256": "cf5eae839239efaf030053139635ca0ac712ed8afc50c9169e699bdf8b10e2e3"
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
    "explanation": "濃度是題目指定成分占溶液總量的比例。討論食鹽或糖時，清水不含該成分，成分量為零，因此在基本混合模型中視為百分之零溶液；百分之百則代表純成分，不是純水。",
    "steps": [
      "先確認濃度所指的是食鹽、糖等題設成分。",
      "判斷清水中該成分量為零。",
      "用零除以清水總量，得到濃度百分之零。"
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
    "misconceptionTarget": "把『純水』的純誤解為百分之百溶質，沒有先確認濃度所指成分。",
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
    "contentSha256": "6ab5a73399a135ab8f00224820d9abd302f2a6cf79d989da06aaa9ee8b331352"
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
    "explanation": "以非負用量混合百分之十與百分之三十溶液，混合濃度是兩者的加權平均，必須介於百分之十與百分之三十之間。百分之十五、二十、二十五都有可能，百分之三十五高於原液最高濃度，因此不可能。",
    "steps": [
      "找出兩種原液濃度的下界百分之十與上界百分之三十。",
      "用加權平均必在兩端之間的性質檢查選項。",
      "排除高於百分之三十的百分之三十五。"
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
    "misconceptionTarget": "把兩種濃度直接相加，誤認混合後濃度可以高於所有原液。",
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
    "contentSha256": "022e0637329d84ba7c0bcf6ad42d3e7e7358a4f34aa20eb418845fc48c5f2bd9"
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
    "explanation": "設百分之十溶液 x 克、百分之三十溶液 y 克，列 x+y=500。目標食鹽量是 0.2×500=100 克，所以 0.1x+0.3y=100。減去 0.1(x+y)=50 得 0.2y=50，因此 y=250 克。另一種也為二百五十克，兩者食鹽量相加正好一百克。",
    "steps": [
      "列總量式 x+y=500，並算目標食鹽量一百克。",
      "列成分式 0.1x+0.3y=100。",
      "減去低濃度基準式，解得百分之三十溶液二百五十克。"
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
    "misconceptionTarget": "因目標濃度位於中點就直接平分，卻沒有用總量與成分量驗證等量條件。",
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
    "contentSha256": "68b8b53995d0707b4067dbf604fbe099eb04c752843466d738e18a8bcaacbd10"
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
    "explanation": "三百克百分之八溶液含成分 0.08×300=24 克。清水不提供該成分，所以這二十四克全來自百分之二十原液。設原液 x 克，0.2x=24，解得 x=120 克，其餘一百八十克是水。",
    "steps": [
      "計算混合後成分量 0.08×300=24 克。",
      "因清水濃度為零，列出 0.2x=24。",
      "解得原液一百二十克，並求清水一百八十克驗算。"
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
    "misconceptionTarget": "把清水也算成含有溶質，或把百分之八直接當作八十克原液。",
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
    "contentSha256": "5647037511be14b9b12c7c3a8eea28ea3a03b597ed593e0d2adcd671847a0714"
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
    "explanation": "目標總成本為 20×72=1440 元。若二十公斤全是六十元米，成本一千二百元，實際多二百四十元；每換成一公斤九十元米多三十元，因此高價米為 240÷30=8 公斤。",
    "steps": [
      "以平均單價乘總重量，算目標總成本一千四百四十元。",
      "計算全用六十元米的基準成本一千二百元。",
      "以成本差除每公斤價差，求得九十元米八公斤。"
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
    "misconceptionTarget": "把平均單價七十二直接當成重量，或忘記先換成二十公斤的總成本。",
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
    "contentSha256": "d22741269e6d109751b30e1303edfd99e83533ea4c06d23a9478d75eaf116ff7"
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
    "explanation": "目標百分之三十到百分之十五與百分之四十五的距離都為十五個百分點，所以兩種原液必須等量，才能讓加權平均落在正中點。總量八百克平分後各四百克，成分量為六十加一百八十等於二百四十克。",
    "steps": [
      "比較目標到兩端濃度的距離，確認都是十五個百分點。",
      "由對稱加權判定兩種溶液用量相等。",
      "將八百克平分，得到兩種各四百克並驗算成分量。"
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
    "misconceptionTarget": "看到濃度數字後按十五比四十五分配，忽略目標正好是兩端中點。",
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
    "contentSha256": "8cb474a507c69adbda87638cfc8509a63a47c3fb092aa94ca71f4e060700135d"
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
    "explanation": "總量式為 x+y=400，目標成分量是 0.16×400=64 克，所以 0.25x+0.10y=64。減去 0.10(x+y)=40，得到 0.15x=24，故百分之二十五溶液 x=160 克，另一種為二百四十克。回算兩份成分量為四十克與二十四克，合計六十四克。",
    "steps": [
      "列 x+y=400，並計算目標成分量六十四克。",
      "列 0.25x+0.10y=64。",
      "減去低濃度基準式，解得 x=160 克。"
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
    "misconceptionTarget": "把百分之十六當作兩濃度的簡單平均，沒有依兩種實際用量加權。",
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
    "contentSha256": "6162fc4281d48cbbdcc4f083167f6c629099c2afa5cbcf1434bdfe2d4c071410"
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
    "explanation": "百分之四十與百分之六十溶液以非負用量混合，結果是兩濃度的加權平均，最高只能到百分之六十。目標百分之七十超過最高原液，因此沒有可行解；若代數算出負用量，也應由情境限制排除。",
    "steps": [
      "確定原液濃度範圍為百分之四十至百分之六十。",
      "比較目標百分之七十，發現高於範圍上界。",
      "依用量非負判定無可行解，不接受負用量。"
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
    "misconceptionTarget": "機械解方程式後接受負的溶液用量，沒有先做濃度範圍檢查。",
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
    "contentSha256": "186e1fb86edc4a8a47f6bf01877aa86040d8a75f4a61e79ea31b2a86809fcb14"
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
    "explanation": "目標百分之二十恰為百分之十與百分之三十的中點，因此高、低濃度飲料須等量，才能得到中間濃度。總量二公升平分為各一公升；成分量為 0.3×1+0.1×1=0.4 公升，占總量二公升的百分之二十。",
    "steps": [
      "比較目標到百分之十與百分之三十的距離，確認相等。",
      "由等距判定兩種液體用量相同。",
      "將二公升平分，得到高濃度果汁一公升並驗算。"
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
    "misconceptionTarget": "只把濃度數字相加或只平分總量，卻沒有確認中點與等量加權的關係。",
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
    "contentSha256": "74156b352299cadd6a5f8844e8a0b9f990c05902705b6339726781286e1c22eb"
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
    "explanation": "十公斤、平均每公斤六百二十元，目標總成本是六千二百元。全用五百元豆的基準成本是五千元，尚差一千二百元；每換一公斤八百元豆增加三百元，所以高價豆為四公斤。",
    "steps": [
      "計算目標總成本 10×620=6200 元。",
      "計算全用五百元豆的基準成本五千元與差額一千二百元。",
      "以 1200÷(800-500)=4，求得八百元豆四公斤。"
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
    "misconceptionTarget": "直接用平均單價除某一單價猜重量，沒有把平均價格換算成總成本。",
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
    "contentSha256": "800a83d428270ca50cd5a39c3d28f14961702fa19d581fa01b6c8f166deec4ed"
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
    "explanation": "有效成分六十毫升全部由百分之二十原液提供。設原液 x 毫升，列 0.2x=60，解得 x=300 毫升。配製總量五百毫升，因此再加水二百毫升；驗算原液確實含六十毫升有效成分。",
    "steps": [
      "設需要百分之二十原液 x 毫升。",
      "由成分量列 0.2x=60，解得 x=300。",
      "用 500-300=200 求加水量，並回算成分量。"
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
        "reason": "把總量五百直接減有效成分六十，忽略原液中還有非有效成分。"
      }
    ],
    "misconceptionTarget": "把有效成分六十毫升直接當成原液量，或用總量減成分量當加水量。",
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
    "contentSha256": "b9206771a470d54438972ceff3d0a8ad433dbbf921c4199ef67afa3cb2b62d56"
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
      "設百分之十食鹽水 x 克、百分之三十食鹽水 y 克。總量六百克給出 x+y=600。",
      "目標食鹽量為 0.2×600=120 克，所以 0.1x+0.3y=120。減去 0.1(x+y)=60，得 0.2y=60，因此 y=300、x=300。",
      "驗算總量 300+300=600 克；食鹽量為 0.1×300+0.3×300=30+90=120 克，濃度為 120÷600=20%。"
    ],
    "alternativeMethods": [
      "目標20%是兩濃度中點，所以等量，再用總量得各300克。"
    ],
    "reasoningSteps": [
      "以兩種原液重量建立總量守恆方程式。",
      "計算目標食鹽量並建立成分量守恆式，解出兩種用量。",
      "回算總重量、食鹽量與最終濃度三項結果。"
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
    "contentSha256": "2bf11f048740d45a1f16365eda08380931195abed793a31514cc4bbc06c582b0",
    "commonErrors": [
      "把百分之十與百分之三十直接相加成百分之四十，沒有依用量加權。",
      "成分式右邊誤寫成二十，未計算六百克的百分之二十是一百二十克。",
      "只驗算兩種用量相加為六百，沒有再核對食鹽量守恆。"
    ]
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
      "設每公斤五百元咖啡豆 x 公斤、每公斤八百元咖啡豆 y 公斤。由總重量列 x+y=15。",
      "目標總成本為 620×15=9300 元，所以 500x+800y=9300。減去 500(x+y)=7500 得 300y=1800，因此 y=6、x=9。",
      "驗算總成本 9×500+6×800=4500+4800=9300 元，平均為 9300÷15=620 元／公斤。六百二十介於五百與八百之間，且兩用量都非負，結果合理。"
    ],
    "alternativeMethods": [
      "全用低價豆為基準，多1800元，每公斤高價豆多300元，所以高價豆6公斤。"
    ],
    "reasoningSteps": [
      "先把平均單價乘總重量，換算成目標總成本。",
      "以總重量與總成本建立聯立方程式，求兩種咖啡豆重量。",
      "檢查平均價格落在兩單價之間，並回算成本與非負限制。"
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
    "contentSha256": "b4be6c8470a9329f7d94382df58ac7cd33b93e36dab2b4414aff5e1ceb808a10",
    "commonErrors": [
      "把平均每公斤六百二十元直接當成總成本，漏乘十五公斤。",
      "列成本式時把五百與八百直接相加，沒有各自乘相應重量。",
      "算出代數解後未檢查平均價範圍與重量非負，可能接受不合理結果。"
    ]
  }
];

export const DRAWING_SPECS = [];
