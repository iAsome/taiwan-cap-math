// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s009-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-applications",
    "skillId": "ratio-word-problem",
    "lockedSkillTitle": "比例應用題",
    "title": "比例應用題：從語意找對應量",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "比例應用",
      "skillOrder": 9,
      "lockedPrerequisiteSkillIds": [
        "scale-drawing"
      ],
      "capBoundary": "處理單價、配方、速率、濃度與相似的兩組對應量；不使用尚未學到的高階方程組技巧。"
    },
    "prerequisiteBridge": "已掌握比例式、正比與反比。應用題的主要難點是判斷哪兩量對應、關係是否保持，以及單位是否一致。",
    "learningOutcomes": [
      "能從文字辨認正比、反比或單純比的模型。",
      "能用表格排列對應量並列出正確比例式。",
      "能處理單位價格、配方放大、固定路程與濃度。",
      "能檢查答案的單位、範圍與整數性。"
    ],
    "glossary": [
      {
        "term": "對應量",
        "definition": "在同一情況下彼此配對的數量。"
      },
      {
        "term": "單位量",
        "definition": "每 1 單位所對應的數量，例如每公斤價格。"
      },
      {
        "term": "率",
        "definition": "兩種不同單位量的比，例如公里/小時。"
      },
      {
        "term": "模型條件",
        "definition": "比例成立所需的假設，例如單價固定或總路程相同。"
      }
    ],
    "notation": [
      {
        "symbol": "數量1/數量2=另一組數量1/另一組數量2",
        "meaning": "正比情況的對應比例。"
      },
      {
        "symbol": "單價=總價/數量",
        "meaning": "固定單價時可先求單位量。"
      },
      {
        "symbol": "速度×時間=路程",
        "meaning": "固定路程時速度與時間成反比。"
      }
    ],
    "conceptNarrative": [
      "先問『什麼保持不變』。單價固定時總價與數量正比；路程固定時速度與時間反比。",
      "列直式表格能避免把不同類量交叉配錯，例如上列放公斤，下列放元。",
      "配方放大必須所有成分乘相同倍數；只增加一種成分會改變味道比例。",
      "濃度題要分清溶質、溶液與水，總量通常是各成分和。",
      "算出數值後，還要回答原題要的量，附上正確單位並檢查合理性。"
    ],
    "formalDefinitions": [
      {
        "name": "比例模型",
        "statement": "兩組對應量在條件不變時，維持固定比值或固定乘積。"
      },
      {
        "name": "單位率",
        "statement": "以第二量為 1 時第一量的值，用於比較與推算。"
      }
    ],
    "formulas": [
      {
        "formula": "總價=單價×數量",
        "conditions": [
          "單價固定",
          "無固定費用或折扣門檻"
        ],
        "meaning": "正比應用。"
      },
      {
        "formula": "配方新量=原量×放大倍數",
        "conditions": [
          "配方比例不變"
        ],
        "meaning": "全成分同步縮放。"
      },
      {
        "formula": "v1t1=v2t2",
        "conditions": [
          "路程相同"
        ],
        "meaning": "固定路程的反比。"
      }
    ],
    "nonApplicableCases": [
      "有基本費、階梯折扣時不能直接視為總價正比數量。",
      "不同品牌或規格的單價不可混成同一比例。",
      "總路程不同時不能用速度與時間反比。",
      "濃度分母若是溶液總量，不能只用水量。",
      "把題目給的多餘資料全部塞進比例式。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "圈出問題所求與每個數量的單位。",
        "check": "未知量是價格、重量、時間還是距離？"
      },
      {
        "step": 2,
        "instruction": "判斷固定條件與關係類型。",
        "check": "固定比值、固定乘積，還是只需份數？"
      },
      {
        "step": 3,
        "instruction": "用兩列對應表排資料。",
        "check": "同一列是否是同類量？"
      },
      {
        "step": 4,
        "instruction": "列式並求解。",
        "check": "正比交叉相乘，反比保持乘積。"
      },
      {
        "step": 5,
        "instruction": "用情境估算與單位檢查。",
        "check": "更多商品是否應更貴、更多人是否應更快？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "3 公斤蘋果 210 元，單價不變，5 公斤多少元？",
        "solutionSteps": [
          "每公斤 210÷3=70 元。",
          "5 公斤為 70×5=350 元。"
        ],
        "answer": "350 元。"
      },
      {
        "exampleId": "L2",
        "prompt": "4 杯果汁需糖 60 克，做 10 杯需多少糖？",
        "solutionSteps": [
          "杯數放大 10/4=2.5 倍。",
          "糖量 60×2.5=150 克。"
        ],
        "answer": "150 克。"
      },
      {
        "exampleId": "L3",
        "prompt": "以 72 公里/時行 5 小時的路程，改 90 公里/時需多久？",
        "solutionSteps": [
          "路程固定為 72×5=360 公里。",
          "時間 360÷90=4 小時。"
        ],
        "answer": "4 小時。"
      },
      {
        "exampleId": "L4",
        "prompt": "果汁原液與水比 1:4，要配 2.5 公升飲料，原液多少？",
        "solutionSteps": [
          "總份數 5，原液占 1/5。",
          "2.5×1/5=0.5 公升。"
        ],
        "answer": "0.5 公升。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "公斤列對元，另一邊卻列包數對公斤。",
        "why": "對應表的量不一致。",
        "correction": "同列只放同類量。"
      },
      {
        "mistake": "速度增加卻算出時間增加。",
        "why": "把反比當正比。",
        "correction": "固定路程檢查 v×t。"
      },
      {
        "mistake": "配方只放大主材料。",
        "why": "忽略比例必須全部同步。",
        "correction": "所有成分乘同倍數。"
      },
      {
        "mistake": "有運費仍用總價/件數固定。",
        "why": "固定費使單位平均變動。",
        "correction": "拆成商品費與運費。"
      },
      {
        "mistake": "濃度分母用水量。",
        "why": "混淆溶劑與溶液。",
        "correction": "依題意確認總量。"
      },
      {
        "mistake": "答案沒有單位。",
        "why": "無法判斷所求量。",
        "correction": "列式前標單位，結尾附單位。"
      }
    ],
    "selfCheck": [
      "哪些條件保持不變？",
      "我選的是正比、反比還是份數法？",
      "對應量排列一致嗎？",
      "單位已統一嗎？",
      "答案方向與情境直覺一致嗎？"
    ],
    "summary": [
      "比例應用先辨認固定條件，再列對應量。",
      "單價與配方常用正比，固定路程與工作量常用反比。",
      "濃度與部分總量要先釐清分母。",
      "最後以單位與方向檢查合理性。"
    ],
    "connections": {
      "previous": "比例尺是固定比值的典型應用。",
      "next": [
        "連比預備會把兩個共享中間量的比對齊。",
        "比例複合應用會串接兩種以上關係。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s009-v001",
        "u06-s009-v002",
        "u06-s009-v003",
        "u06-s009-v004",
        "u06-s009-v005",
        "u06-s009-v006",
        "u06-s009-v007",
        "u06-s009-v008",
        "u06-s009-v009",
        "u06-s009-v010",
        "u06-s009-v011",
        "u06-s009-v012"
      ],
      "constructedResponseIds": [
        "u06-s009-cr001",
        "u06-s009-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "以單位率、放大倍數、固定路程與總份數四種互異方法重算例題；逐一檢查運費、路程改變、溶液分母與對應表錯置等模型邊界，避免把所有情境都機械列正比。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "e8d3e78eacf0033438ea9519e4428b6f09a898b95bf6a81b4bd65e66d6fddac6"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s009-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "3 公斤蘋果 210 元，單價固定。5 公斤多少元？",
      "text": "3 公斤蘋果 210 元，單價固定。5 公斤多少元？",
      "givenConditions": "單價不變且無其他費用。",
      "target": "固定單價應用",
      "choices": [
        "350元",
        "280元",
        "315元",
        "420元"
      ],
      "answerIndex": 0,
      "independentSolution": "3:210=5:350。",
      "mainExplanation": "用單位價格或比例式。",
      "explanation": "用單位價格或比例式。",
      "steps": [
        "210÷3=70",
        "70×5=350"
      ],
      "optionAnalysis": [
        {
          "choice": "350元",
          "truth": true,
          "reason": "每公斤70元，5公斤350元。"
        },
        {
          "choice": "280元",
          "truth": false,
          "reason": "4公斤價格。"
        },
        {
          "choice": "315元",
          "truth": false,
          "reason": "把5/3近似1.5。"
        },
        {
          "choice": "420元",
          "truth": false,
          "reason": "6公斤價格。"
        }
      ],
      "misconceptionTarget": "比例倍率計算錯。",
      "prerequisiteCheck": {
        "skillIds": [
          "scale-drawing"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['scale-drawing'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 55,
      "unitCheck": "元/公斤。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "5公斤可購買。",
      "difficultyReason": "基礎生活正比。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7636ac54398707f196976c63278dcecda28d5cdd629a70513aa6b505c008619a"
    },
    {
      "questionId": "u06-s009-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "4 杯果汁需糖 60 公克。配方不變，10 杯需多少糖？",
      "text": "4 杯果汁需糖 60 公克。配方不變，10 杯需多少糖？",
      "givenConditions": "每杯配方相同。",
      "target": "配方放大",
      "choices": [
        "100公克",
        "120公克",
        "240公克",
        "150公克"
      ],
      "answerIndex": 3,
      "independentSolution": "4:60=10:150。",
      "mainExplanation": "杯數與糖量成正比。",
      "explanation": "杯數與糖量成正比。",
      "steps": [
        "60/4=15",
        "15×10=150"
      ],
      "optionAnalysis": [
        {
          "choice": "100公克",
          "truth": false,
          "reason": "只算到部分原料，沒有按完整比例放大到所求份量。"
        },
        {
          "choice": "120公克",
          "truth": false,
          "reason": "只放大2倍。"
        },
        {
          "choice": "240公克",
          "truth": false,
          "reason": "把倍率當4。"
        },
        {
          "choice": "150公克",
          "truth": true,
          "reason": "每杯15公克，10杯150公克。"
        }
      ],
      "misconceptionTarget": "把總份數與倍率混淆。",
      "prerequisiteCheck": {
        "skillIds": [
          "scale-drawing"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['scale-drawing'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 55,
      "unitCheck": "公克。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "不含損耗。",
      "difficultyReason": "基礎配方。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ec1042dfb992e2241edb286b5e82fe448c37ef6381eb8195d2bab05bb6ad25e9"
    },
    {
      "questionId": "u06-s009-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "速度 72 公里/時行駛 5 小時的路程，改以 90 公里/時行駛需多久？",
      "text": "速度 72 公里/時行駛 5 小時的路程，改以 90 公里/時行駛需多久？",
      "givenConditions": "路程相同且不停車。",
      "target": "固定路程應用",
      "choices": [
        "3小時",
        "4小時",
        "5.5小時",
        "6.25小時"
      ],
      "answerIndex": 1,
      "independentSolution": "90×4=360。",
      "mainExplanation": "固定路程下速度與時間反比。",
      "explanation": "固定路程下速度與時間反比。",
      "steps": [
        "72×5=360",
        "360/90=4"
      ],
      "optionAnalysis": [
        {
          "choice": "3小時",
          "truth": false,
          "reason": "距離不足。"
        },
        {
          "choice": "4小時",
          "truth": true,
          "reason": "路程360公里，360÷90=4小時。"
        },
        {
          "choice": "5.5小時",
          "truth": false,
          "reason": "用速度差減時間。"
        },
        {
          "choice": "6.25小時",
          "truth": false,
          "reason": "反比方向錯。"
        }
      ],
      "misconceptionTarget": "把速度時間當正比。",
      "prerequisiteCheck": {
        "skillIds": [
          "scale-drawing"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['scale-drawing'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 70,
      "unitCheck": "公里/時與小時。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "平均速度視為固定。",
      "difficultyReason": "基礎反比情境。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e580b381dd5c59ba4a6fdfca8ded8268ff1982116f342336dcecd4addbf20bcb"
    },
    {
      "questionId": "u06-s009-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "果汁原液:水=1:4，要配 3 公升飲料，原液需多少？",
      "text": "果汁原液:水=1:4，要配 3 公升飲料，原液需多少？",
      "givenConditions": "兩成分構成全部。",
      "target": "配方部分量",
      "choices": [
        "0.5公升",
        "0.75公升",
        "0.6公升",
        "2.4公升"
      ],
      "answerIndex": 2,
      "independentSolution": "原液0.6、水2.4，合3且比1:4。",
      "mainExplanation": "份數法求成分。",
      "explanation": "份數法求成分。",
      "steps": [
        "把3：5改寫成部分占總量的分率3/5",
        "3÷5=0.6，所以百分率為60%"
      ],
      "optionAnalysis": [
        {
          "choice": "0.5公升",
          "truth": false,
          "reason": "對應2.5公升總量。"
        },
        {
          "choice": "0.75公升",
          "truth": false,
          "reason": "把水4份當總份數。"
        },
        {
          "choice": "0.6公升",
          "truth": true,
          "reason": "總5份，原液占1/5，3÷5=0.6。"
        },
        {
          "choice": "2.4公升",
          "truth": false,
          "reason": "2.4是水量。"
        }
      ],
      "misconceptionTarget": "把水量與總量混淆。",
      "prerequisiteCheck": {
        "skillIds": [
          "scale-drawing"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['scale-drawing'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "公升。",
      "roundingCheck": "精確小數。",
      "ambiguityBoundaryAudit": "原液小於總量。",
      "difficultyReason": "標準部分總量。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f31901178b9dc71f0e32b2cdf21ddcc7f48fa14af22f60269996f540608f08e6"
    },
    {
      "questionId": "u06-s009-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "一段 18 公里的路，地圖上長 7.2 公分。此地圖比例尺為何？",
      "text": "一段 18 公里的路，地圖上長 7.2 公分。此地圖比例尺為何？",
      "givenConditions": "圖上與實際對應同一路段。",
      "target": "由情境反求比例尺",
      "choices": [
        "1:25000",
        "1:40000",
        "1:2500000",
        "1:250000"
      ],
      "answerIndex": 3,
      "independentSolution": "7.2×250000=1800000公分。",
      "mainExplanation": "統一單位並用實際/圖上求縮小倍數。",
      "explanation": "統一單位並用實際/圖上求縮小倍數。",
      "steps": [
        "先把18 km換成1,800,000 cm",
        "1,800,000÷7.2=250,000，所以比例尺為1：250,000"
      ],
      "optionAnalysis": [
        {
          "choice": "1:25000",
          "truth": false,
          "reason": "少一個0。"
        },
        {
          "choice": "1:40000",
          "truth": false,
          "reason": "以18/7.2只得到2.5。"
        },
        {
          "choice": "1:2500000",
          "truth": false,
          "reason": "多一個0。"
        },
        {
          "choice": "1:250000",
          "truth": true,
          "reason": "18公里=1800000公分，7.2:1800000=1:250000。"
        }
      ],
      "misconceptionTarget": "公里轉公分錯。",
      "prerequisiteCheck": {
        "skillIds": [
          "scale-drawing"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['scale-drawing'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "公里轉公分。",
      "roundingCheck": "7.2與18為精確值。",
      "ambiguityBoundaryAudit": "比例尺方向圖上:實際。",
      "difficultyReason": "標準跨技能應用。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8d958b1a5e18e8088e7a8389ea5dab263698fc13b722d6fd4838b5317bfcd5bc"
    },
    {
      "questionId": "u06-s009-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "甲車 6 公升油行 84 公里。耗油率不變，行 196 公里需多少公升？",
      "text": "甲車 6 公升油行 84 公里。耗油率不變，行 196 公里需多少公升？",
      "givenConditions": "路況與耗油率視為相同。",
      "target": "固定耗油率應用",
      "choices": [
        "12公升",
        "16公升",
        "14公升",
        "21公升"
      ],
      "answerIndex": 2,
      "independentSolution": "14公升×14公里/公升=196公里。",
      "mainExplanation": "油量與路程在耗油率固定時成正比。",
      "explanation": "油量與路程在耗油率固定時成正比。",
      "steps": [
        "84/6=14公里/公升",
        "196/14=14公升"
      ],
      "optionAnalysis": [
        {
          "choice": "12公升",
          "truth": false,
          "reason": "只能行168公里。"
        },
        {
          "choice": "16公升",
          "truth": false,
          "reason": "能行224公里。"
        },
        {
          "choice": "14公升",
          "truth": true,
          "reason": "每公升14公里，196÷14=14公升。"
        },
        {
          "choice": "21公升",
          "truth": false,
          "reason": "把196/84乘9。"
        }
      ],
      "misconceptionTarget": "單位率方向顛倒。",
      "prerequisiteCheck": {
        "skillIds": [
          "scale-drawing"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['scale-drawing'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 85,
      "unitCheck": "公升、公里。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "結果正且合理。",
      "difficultyReason": "標準單位率。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "06863c7c132242e28c6a7c80580fe6aa5f6962f7fa8aaa55c582e64ab93d6aca"
    },
    {
      "questionId": "u06-s009-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "濃度 12% 的糖水 750 公克，其中糖多少公克？",
      "text": "濃度 12% 的糖水 750 公克，其中糖多少公克？",
      "givenConditions": "750公克是溶液總量。",
      "target": "比例與百分率應用",
      "choices": [
        "90公克",
        "62.5公克",
        "120公克",
        "660公克"
      ],
      "answerIndex": 0,
      "independentSolution": "90/750=0.12。",
      "mainExplanation": "百分率是部分/總量。",
      "explanation": "百分率是部分/總量。",
      "steps": [
        "12%=0.12",
        "750×0.12=90"
      ],
      "optionAnalysis": [
        {
          "choice": "90公克",
          "truth": true,
          "reason": "糖=750×0.12=90。"
        },
        {
          "choice": "62.5公克",
          "truth": false,
          "reason": "750/12錯誤。"
        },
        {
          "choice": "120公克",
          "truth": false,
          "reason": "把12%當0.16。"
        },
        {
          "choice": "660公克",
          "truth": false,
          "reason": "660是水量。"
        }
      ],
      "misconceptionTarget": "把百分數當除數。",
      "prerequisiteCheck": {
        "skillIds": [
          "scale-drawing"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['scale-drawing'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 80,
      "unitCheck": "公克。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "濃度以質量百分率解讀。",
      "difficultyReason": "結合比例概念。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a372a4c12ae5ec8905dd5873239fb388a4fa26ec2299339e06a00682fe125ddf"
    },
    {
      "questionId": "u06-s009-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "A、B 兩種米混合比 3:5，已有 A 米 18 公斤。若比例不變，混合後總重多少？",
      "text": "A、B 兩種米混合比 3:5，已有 A 米 18 公斤。若比例不變，混合後總重多少？",
      "givenConditions": "只有A、B兩種米。",
      "target": "由部分反求總量",
      "choices": [
        "30公斤",
        "48公斤",
        "36公斤",
        "60公斤"
      ],
      "answerIndex": 1,
      "independentSolution": "A18、B30，比3:5。",
      "mainExplanation": "由已知成分反求總量。",
      "explanation": "由已知成分反求總量。",
      "steps": [
        "18/3=6",
        "6×8=48"
      ],
      "optionAnalysis": [
        {
          "choice": "30公斤",
          "truth": false,
          "reason": "30是B米。"
        },
        {
          "choice": "48公斤",
          "truth": true,
          "reason": "3份18，每份6，總8份48。"
        },
        {
          "choice": "36公斤",
          "truth": false,
          "reason": "把A加同量。"
        },
        {
          "choice": "60公斤",
          "truth": false,
          "reason": "總份數錯。"
        }
      ],
      "misconceptionTarget": "把B量當總量。",
      "prerequisiteCheck": {
        "skillIds": [
          "scale-drawing"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['scale-drawing'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 80,
      "unitCheck": "公斤。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "混合不計損耗。",
      "difficultyReason": "標準份數。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b18032a4ca56b8f6930b2b5c7933686305859273b5e5d6d68f68b64555c52f71"
    },
    {
      "questionId": "u06-s009-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某機器 8 分鐘完成 160 件。前 3 分鐘維持同速，之後速度提高 25%。共 8 分鐘完成多少件？",
      "text": "某機器 8 分鐘完成 160 件。前 3 分鐘維持同速，之後速度提高 25%。共 8 分鐘完成多少件？",
      "givenConditions": "速度只在後5分鐘提高。",
      "target": "分段比例應用",
      "choices": [
        "175件",
        "180件",
        "185件",
        "200件"
      ],
      "answerIndex": 2,
      "independentSolution": "60+125=185，且每一段產量均為整件。",
      "mainExplanation": "分段計算，速度改變後不能用單一全程比例。",
      "explanation": "分段計算，速度改變後不能用單一全程比例。",
      "steps": [
        "160÷8=20件/分",
        "前3分60件",
        "新速25件/分",
        "後5分125件",
        "合185件"
      ],
      "optionAnalysis": [
        {
          "choice": "175件",
          "truth": false,
          "reason": "後段只提高15件。"
        },
        {
          "choice": "180件",
          "truth": false,
          "reason": "把提高25%誤成每分24件。"
        },
        {
          "choice": "185件",
          "truth": true,
          "reason": "原速20件/分；前3分60件，後5分每分25件，共185件。"
        },
        {
          "choice": "200件",
          "truth": false,
          "reason": "全程8分鐘都用提高後速度。"
        }
      ],
      "misconceptionTarget": "全程誤用同一速率或提高比例算錯。",
      "prerequisiteCheck": {
        "skillIds": [
          "scale-drawing"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['scale-drawing'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 135,
      "unitCheck": "件數。",
      "roundingCheck": "無近似，結果為整數。",
      "ambiguityBoundaryAudit": "時間分段為3分鐘與5分鐘。",
      "difficultyReason": "高階分段建模。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "29ab396f8cbea1f5204d1beae445afe941f844ad4e874dd3582d891e1154a2e2"
    },
    {
      "questionId": "u06-s009-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "商品甲 600 公克 96 元，商品乙 900 公克 135 元。哪個每 100 公克較便宜？",
      "text": "商品甲 600 公克 96 元，商品乙 900 公克 135 元。哪個每 100 公克較便宜？",
      "givenConditions": "品質與其他條件視為相同。",
      "target": "單位價格比較",
      "choices": [
        "甲，16元",
        "乙，15元",
        "甲，15元",
        "乙，16元"
      ],
      "answerIndex": 1,
      "independentSolution": "乙每100克少1元。",
      "mainExplanation": "統一到每100公克比較。",
      "explanation": "統一到每100公克比較。",
      "steps": [
        "96/600×100=16",
        "135/900×100=15"
      ],
      "optionAnalysis": [
        {
          "choice": "甲，16元",
          "truth": false,
          "reason": "甲16元計算對但不是較便宜。"
        },
        {
          "choice": "乙，15元",
          "truth": true,
          "reason": "甲每100克16元；乙每100克15元。"
        },
        {
          "choice": "甲，15元",
          "truth": false,
          "reason": "甲不是15元。"
        },
        {
          "choice": "乙，16元",
          "truth": false,
          "reason": "乙單價不是16元。"
        }
      ],
      "misconceptionTarget": "只看總價或包裝重量。",
      "prerequisiteCheck": {
        "skillIds": [
          "scale-drawing"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['scale-drawing'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 95,
      "unitCheck": "元/100公克。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "比較基準一致。",
      "difficultyReason": "購物素養。",
      "literacyContextNecessity": "包裝大小不同，情境要求換成同分母才能公平比較。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d6b31f88c761dc55c72656316e9374ee5cf787ca3c6c63403c97a5db298f925b"
    },
    {
      "questionId": "u06-s009-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "活動需準備 84 份點心。每 6 份裝一盒，每 5 盒裝一箱。至少需要幾箱？",
      "text": "活動需準備 84 份點心。每 6 份裝一盒，每 5 盒裝一箱。至少需要幾箱？",
      "givenConditions": "只能整箱準備且可有空位。",
      "target": "層級包裝與整數限制",
      "choices": [
        "2箱",
        "2.8箱",
        "4箱",
        "3箱"
      ],
      "answerIndex": 3,
      "independentSolution": "3箱容量90足夠，2箱不足。",
      "mainExplanation": "先求每箱容量，再向上取整。",
      "explanation": "先求每箱容量，再向上取整。",
      "steps": [
        "6×5=30份/箱",
        "84/30=2.8",
        "向上取整3"
      ],
      "optionAnalysis": [
        {
          "choice": "2箱",
          "truth": false,
          "reason": "2箱僅60份。"
        },
        {
          "choice": "2.8箱",
          "truth": false,
          "reason": "箱數需整數。"
        },
        {
          "choice": "4箱",
          "truth": false,
          "reason": "不是最少。"
        },
        {
          "choice": "3箱",
          "truth": true,
          "reason": "每箱30份，84÷30=2.8，至少需3箱。"
        }
      ],
      "misconceptionTarget": "將純比例結果直接當實際箱數。",
      "prerequisiteCheck": {
        "skillIds": [
          "scale-drawing"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['scale-drawing'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 95,
      "unitCheck": "份、盒、箱。",
      "roundingCheck": "至少故向上取整。",
      "ambiguityBoundaryAudit": "每盒固定6份、每箱5盒。",
      "difficultyReason": "生活離散限制。",
      "literacyContextNecessity": "包裝層級和至少條件共同決定答案。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4485c1f0d5abc2269528aa7202e093dac35ce2668f6462813bebbd5dac89bab2"
    },
    {
      "questionId": "u06-s009-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "一座水池以 4 支相同水管注滿需 9 小時。先開 4 支 3 小時，再增加 2 支，還需幾小時注滿？",
      "text": "一座水池以 4 支相同水管注滿需 9 小時。先開 4 支 3 小時，再增加 2 支，還需幾小時注滿？",
      "givenConditions": "每支流量相同且水池初始空。",
      "target": "分段反比情境",
      "choices": [
        "4小時",
        "3小時",
        "4.5小時",
        "6小時"
      ],
      "answerIndex": 0,
      "independentSolution": "完成量前段1/3、後段2/3。",
      "mainExplanation": "分段用固定總工作量。",
      "explanation": "分段用固定總工作量。",
      "steps": [
        "總36管時",
        "已做12",
        "剩24",
        "24/6=4"
      ],
      "optionAnalysis": [
        {
          "choice": "4小時",
          "truth": true,
          "reason": "總工作36管時；前段12管時，剩24管時；6支需4小時。"
        },
        {
          "choice": "3小時",
          "truth": false,
          "reason": "把剩餘比例誤成一半。"
        },
        {
          "choice": "4.5小時",
          "truth": false,
          "reason": "用原9小時減4.5。"
        },
        {
          "choice": "6小時",
          "truth": false,
          "reason": "未考慮增加水管。"
        }
      ],
      "misconceptionTarget": "直接用全程反比忽略前段。",
      "prerequisiteCheck": {
        "skillIds": [
          "scale-drawing"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['scale-drawing'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 125,
      "unitCheck": "管時與小時。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "增加水管發生在3小時後。",
      "difficultyReason": "需整合包裝比率、剩餘量與整數判讀，屬於比例應用複合素養。",
      "literacyContextNecessity": "時間點與水管數變動決定分段模型，不能刪除。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6fb3eebd7a1fb965ffaa5a3cd4b07325bb1bedd24c5959a057204eb8f943c10d"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s009-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "某配方6人份需麵粉420公克、牛奶300毫升。做15人份時，各需多少？請列出共同放大倍率。",
      "target": "多材料配方放大",
      "requiredWork": [
        "求15/6的倍率。",
        "兩種材料同乘倍率。",
        "檢查配方比保持。"
      ],
      "fullCreditSolution": [
        "放大倍率15/6=5/2=2.5。",
        "麵粉420×2.5=1050公克。",
        "牛奶300×2.5=750毫升。",
        "兩種材料都乘同一倍率，所以配方不變。"
      ],
      "alternativeSolutions": [
        "可先求每人麵粉70公克、牛奶50毫升，再乘15。"
      ],
      "reasoningSteps": [
        "放大倍率15/6=5/2=2.5。",
        "麵粉420×2.5=1050公克。",
        "牛奶300×2.5=750毫升。",
        "兩種材料都乘同一倍率，所以配方不變。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "倍率2.5、麵粉1050公克、牛奶750毫升皆正確並說明同步放大。"
        },
        {
          "score": 2,
          "criteria": "兩個材料量正確但漏倍率或配方檢查。"
        },
        {
          "score": 1,
          "criteria": "倍率正確，只算對一種材料。"
        },
        {
          "score": 0,
          "criteria": "兩材料使用不同倍率或無有效過程。"
        }
      ],
      "partialCreditRules": [
        "不同單位不需彼此換算，因為各自與人份對應。",
        "結果與單位需配對正確。"
      ],
      "followThroughPolicy": "倍率若算錯但兩材料均一致乘同一錯誤倍率，可給1分；若只改一種材料，不給跟隨。",
      "unitNotationRules": "麵粉用公克、牛奶用毫升。",
      "answerOnlyPolicy": "只寫兩答案最多2分。",
      "commonErrors": [
        "把15/6寫成1.5。",
        "只增加9人份的固定量。",
        "交換材料單位。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "麵粉1050公克、牛奶750毫升，倍率2.5。",
        "ambiguity": "配方與人份成正比，條件充分。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "57f06d0a8d47f052b33fc9b93f5ba462f2542c3a47fd063a340603e5192d8f1e"
    },
    {
      "questionId": "u06-s009-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-applications",
      "skillId": "ratio-word-problem",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "一段固定路程，甲車以80公里/時行3小時。乙車前一半路程以60公里/時，後一半以120公里/時。求乙車總時間，並判斷是否等於用平均速度90公里/時計算的時間。",
      "target": "分段速率比例",
      "requiredWork": [
        "先求總路程與每半路程。",
        "分段求時間並相加。",
        "比較錯誤的算術平均速度模型。"
      ],
      "fullCreditSolution": [
        "總路程80×3=240公里，每半120公里。",
        "乙前半時間120÷60=2小時，後半120÷120=1小時，總3小時。",
        "若用90公里/時會得240÷90=8/3小時，不等於3小時；相同距離兩段不能直接以速度算術平均代替。"
      ],
      "alternativeSolutions": [
        "可由總時間3小時得到全程平均速度240÷3=80公里/時。"
      ],
      "reasoningSteps": [
        "總路程80×3=240公里，每半120公里。",
        "乙前半時間120÷60=2小時，後半120÷120=1小時，總3小時。",
        "若用90公里/時會得240÷90=8/3小時，不等於3小時；相同距離兩段不能直接以速度算術平均代替。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "乙總3小時，算出90公里/時模型為8/3小時並清楚否定。"
        },
        {
          "score": 2,
          "criteria": "總時間3小時正確，但平均速度比較說明不完整。"
        },
        {
          "score": 1,
          "criteria": "正確求總路程與一段時間，另一段或相加有錯。"
        },
        {
          "score": 0,
          "criteria": "直接取(60+120)/2=90並作為正確全程速度。"
        }
      ],
      "partialCreditRules": [
        "本題核心是分段比例，不要求高階平均公式。",
        "3小時與8/3小時需區分。"
      ],
      "followThroughPolicy": "若總路程算錯但後續正確分半並以各速度求時，可給1分；若直接用90，不採跟隨。",
      "unitNotationRules": "速度公里/時、路程公里、時間小時。",
      "answerOnlyPolicy": "只寫3小時最多2分。",
      "commonErrors": [
        "直接平均速度。",
        "把一半理解為一半時間。",
        "前後段時間相乘。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "乙總3小時；不等於以90公里/時計算的8/3小時。",
        "ambiguity": "『前一半路程』明確指距離各半，答案唯一。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "3b22bbb3b18d636d8a6c5a2a49316e4d12132b9a1b01a3c5c33907dea63a7420"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s009-v001-semantic-review-r1",
      "questionId": "u06-s009-v001",
      "unitId": "u06",
      "skillId": "ratio-word-problem",
      "contentSha256": "7636ac54398707f196976c63278dcecda28d5cdd629a70513aa6b505c008619a",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "3:210=5:350。",
      "derivedAnswer": "350元",
      "storedAnswer": "350元",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "每公斤70元，5公斤350元。",
        "4公斤價格。",
        "把5/3近似1.5。",
        "6公斤價格。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「固定單價應用」，已明示必要條件：單價不變且無其他費用。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：元/公斤。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：5公斤可購買。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎生活正比。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：3:210=5:350。 正確選項為「350元」。逐項檢查後，唯一為真的理由是「每公斤70元，5公斤350元。」；其餘三項分別因「4公斤價格。」、「把5/3近似1.5。」、「6公斤價格。」而排除。邊界與語意再檢查：5公斤可購買。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s009-v002-semantic-review-r1",
      "questionId": "u06-s009-v002",
      "unitId": "u06",
      "skillId": "ratio-word-problem",
      "contentSha256": "ec1042dfb992e2241edb286b5e82fe448c37ef6381eb8195d2bab05bb6ad25e9",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "4:60=10:150。",
      "derivedAnswer": "150公克",
      "storedAnswer": "150公克",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "只算到部分原料，沒有按完整比例放大到所求份量。",
        "只放大2倍。",
        "把倍率當4。",
        "每杯15公克，10杯150公克。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「配方放大」，已明示必要條件：每杯配方相同。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公克。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：不含損耗。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎配方。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：4:60=10:150。 正確選項為「150公克」。逐項檢查後，四個選項的判斷依序為：只算到部分原料，沒有按完整比例放大到所求份量。；只放大2倍。；把倍率當4。；每杯15公克，10杯150公克。。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s009-v003-semantic-review-r1",
      "questionId": "u06-s009-v003",
      "unitId": "u06",
      "skillId": "ratio-word-problem",
      "contentSha256": "e580b381dd5c59ba4a6fdfca8ded8268ff1982116f342336dcecd4addbf20bcb",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "90×4=360。",
      "derivedAnswer": "4小時",
      "storedAnswer": "4小時",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "距離不足。",
        "路程360公里，360÷90=4小時。",
        "用速度差減時間。",
        "反比方向錯。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「固定路程應用」，已明示必要條件：路程相同且不停車。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公里/時與小時。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：平均速度視為固定。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎反比情境。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：90×4=360。 正確選項為「4小時」。逐項檢查後，唯一為真的理由是「路程360公里，360÷90=4小時。」；其餘三項分別因「距離不足。」、「用速度差減時間。」、「反比方向錯。」而排除。邊界與語意再檢查：平均速度視為固定。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s009-v004-semantic-review-r1",
      "questionId": "u06-s009-v004",
      "unitId": "u06",
      "skillId": "ratio-word-problem",
      "contentSha256": "f31901178b9dc71f0e32b2cdf21ddcc7f48fa14af22f60269996f540608f08e6",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "原液0.6、水2.4，合3且比1:4。",
      "derivedAnswer": "0.6公升",
      "storedAnswer": "0.6公升",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "對應2.5公升總量。",
        "把水4份當總份數。",
        "總5份，原液占1/5，3÷5=0.6。",
        "2.4是水量。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「配方部分量」，已明示必要條件：兩成分構成全部。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公升。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：原液小於總量。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確小數。。"
      },
      "difficultyReason": "標準部分總量。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：原液0.6、水2.4，合3且比1:4。 正確選項為「0.6公升」。逐項檢查後，唯一為真的理由是「總5份，原液占1/5，3÷5=0.6。」；其餘三項分別因「對應2.5公升總量。」、「把水4份當總份數。」、「2.4是水量。」而排除。邊界與語意再檢查：原液小於總量。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s009-v005-semantic-review-r1",
      "questionId": "u06-s009-v005",
      "unitId": "u06",
      "skillId": "ratio-word-problem",
      "contentSha256": "8d958b1a5e18e8088e7a8389ea5dab263698fc13b722d6fd4838b5317bfcd5bc",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "7.2×250000=1800000公分。",
      "derivedAnswer": "1:250000",
      "storedAnswer": "1:250000",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "少一個0。",
        "以18/7.2只得到2.5。",
        "多一個0。",
        "18公里=1800000公分，7.2:1800000=1:250000。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由情境反求比例尺」，已明示必要條件：圖上與實際對應同一路段。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公里轉公分。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：比例尺方向圖上:實際。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：7.2與18為精確值。。"
      },
      "difficultyReason": "標準跨技能應用。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：7.2×250000=1800000公分。 正確選項為「1:250000」。逐項檢查後，唯一為真的理由是「18公里=1800000公分，7.2:1800000=1:250000。」；其餘三項分別因「少一個0。」、「以18/7.2只得到2.5。」、「多一個0。」而排除。邊界與語意再檢查：比例尺方向圖上:實際。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s009-v006-semantic-review-r1",
      "questionId": "u06-s009-v006",
      "unitId": "u06",
      "skillId": "ratio-word-problem",
      "contentSha256": "06863c7c132242e28c6a7c80580fe6aa5f6962f7fa8aaa55c582e64ab93d6aca",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "14公升×14公里/公升=196公里。",
      "derivedAnswer": "14公升",
      "storedAnswer": "14公升",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "只能行168公里。",
        "能行224公里。",
        "每公升14公里，196÷14=14公升。",
        "把196/84乘9。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「固定耗油率應用」，已明示必要條件：路況與耗油率視為相同。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公升、公里。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：結果正且合理。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準單位率。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：14公升×14公里/公升=196公里。 正確選項為「14公升」。逐項檢查後，唯一為真的理由是「每公升14公里，196÷14=14公升。」；其餘三項分別因「只能行168公里。」、「能行224公里。」、「把196/84乘9。」而排除。邊界與語意再檢查：結果正且合理。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s009-v007-semantic-review-r1",
      "questionId": "u06-s009-v007",
      "unitId": "u06",
      "skillId": "ratio-word-problem",
      "contentSha256": "a372a4c12ae5ec8905dd5873239fb388a4fa26ec2299339e06a00682fe125ddf",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "90/750=0.12。",
      "derivedAnswer": "90公克",
      "storedAnswer": "90公克",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "糖=750×0.12=90。",
        "750/12錯誤。",
        "把12%當0.16。",
        "660是水量。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「比例與百分率應用」，已明示必要條件：750公克是溶液總量。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公克。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：濃度以質量百分率解讀。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "結合比例概念。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：90/750=0.12。 正確選項為「90公克」。逐項檢查後，唯一為真的理由是「糖=750×0.12=90。」；其餘三項分別因「750/12錯誤。」、「把12%當0.16。」、「660是水量。」而排除。邊界與語意再檢查：濃度以質量百分率解讀。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s009-v008-semantic-review-r1",
      "questionId": "u06-s009-v008",
      "unitId": "u06",
      "skillId": "ratio-word-problem",
      "contentSha256": "b18032a4ca56b8f6930b2b5c7933686305859273b5e5d6d68f68b64555c52f71",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "A18、B30，比3:5。",
      "derivedAnswer": "48公斤",
      "storedAnswer": "48公斤",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "30是B米。",
        "3份18，每份6，總8份48。",
        "把A加同量。",
        "總份數錯。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由部分反求總量」，已明示必要條件：只有A、B兩種米。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公斤。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：混合不計損耗。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準份數。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：A18、B30，比3:5。 正確選項為「48公斤」。逐項檢查後，唯一為真的理由是「3份18，每份6，總8份48。」；其餘三項分別因「30是B米。」、「把A加同量。」、「總份數錯。」而排除。邊界與語意再檢查：混合不計損耗。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s009-v009-semantic-review-r1",
      "questionId": "u06-s009-v009",
      "unitId": "u06",
      "skillId": "ratio-word-problem",
      "contentSha256": "29ab396f8cbea1f5204d1beae445afe941f844ad4e874dd3582d891e1154a2e2",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "60+125=185，且每一段產量均為整件。",
      "derivedAnswer": "185件",
      "storedAnswer": "185件",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "後段只提高15件。",
        "把提高25%誤成每分24件。",
        "原速20件/分；前3分60件，後5分每分25件，共185件。",
        "全程8分鐘都用提高後速度。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「分段比例應用」，已明示必要條件：速度只在後5分鐘提高。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：件數。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：時間分段為3分鐘與5分鐘。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似，結果為整數。。"
      },
      "difficultyReason": "高階分段建模。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：60+125=185，且每一段產量均為整件。 正確選項為「185件」。逐項檢查後，唯一為真的理由是「原速20件/分；前3分60件，後5分每分25件，共185件。」；其餘三項分別因「後段只提高15件。」、「把提高25%誤成每分24件。」、「全程8分鐘都用提高後速度。」而排除。邊界與語意再檢查：時間分段為3分鐘與5分鐘。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s009-v010-semantic-review-r1",
      "questionId": "u06-s009-v010",
      "unitId": "u06",
      "skillId": "ratio-word-problem",
      "contentSha256": "d6b31f88c761dc55c72656316e9374ee5cf787ca3c6c63403c97a5db298f925b",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "乙每100克少1元。",
      "derivedAnswer": "乙，15元",
      "storedAnswer": "乙，15元",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "甲16元計算對但不是較便宜。",
        "甲每100克16元；乙每100克15元。",
        "甲不是15元。",
        "乙單價不是16元。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「單位價格比較」，已明示必要條件：品質與其他條件視為相同。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：元/100公克。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：比較基準一致。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "購物素養。",
      "literacyNecessity": "包裝大小不同，情境要求換成同分母才能公平比較。",
      "reviewerNote": "獨立重算：乙每100克少1元。 正確選項為「乙，15元」。逐項檢查後，唯一為真的理由是「甲每100克16元；乙每100克15元。」；其餘三項分別因「甲16元計算對但不是較便宜。」、「甲不是15元。」、「乙單價不是16元。」而排除。邊界與語意再檢查：比較基準一致。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s009-v011-semantic-review-r1",
      "questionId": "u06-s009-v011",
      "unitId": "u06",
      "skillId": "ratio-word-problem",
      "contentSha256": "4485c1f0d5abc2269528aa7202e093dac35ce2668f6462813bebbd5dac89bab2",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "3箱容量90足夠，2箱不足。",
      "derivedAnswer": "3箱",
      "storedAnswer": "3箱",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "2箱僅60份。",
        "箱數需整數。",
        "不是最少。",
        "每箱30份，84÷30=2.8，至少需3箱。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「層級包裝與整數限制」，已明示必要條件：只能整箱準備且可有空位。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：份、盒、箱。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：每盒固定6份、每箱5盒。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：至少故向上取整。。"
      },
      "difficultyReason": "生活離散限制。",
      "literacyNecessity": "包裝層級和至少條件共同決定答案。",
      "reviewerNote": "獨立重算：3箱容量90足夠，2箱不足。 正確選項為「3箱」。逐項檢查後，唯一為真的理由是「每箱30份，84÷30=2.8，至少需3箱。」；其餘三項分別因「2箱僅60份。」、「箱數需整數。」、「不是最少。」而排除。邊界與語意再檢查：每盒固定6份、每箱5盒。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s009-v012-semantic-review-r1",
      "questionId": "u06-s009-v012",
      "unitId": "u06",
      "skillId": "ratio-word-problem",
      "contentSha256": "6fb3eebd7a1fb965ffaa5a3cd4b07325bb1bedd24c5959a057204eb8f943c10d",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "完成量前段1/3、後段2/3。",
      "derivedAnswer": "4小時",
      "storedAnswer": "4小時",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "總工作36管時；前段12管時，剩24管時；6支需4小時。",
        "把剩餘比例誤成一半。",
        "用原9小時減4.5。",
        "未考慮增加水管。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「分段反比情境」，已明示必要條件：每支流量相同且水池初始空。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：管時與小時。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：增加水管發生在3小時後。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需整合包裝比率、剩餘量與整數判讀，屬於比例應用複合素養。",
      "literacyNecessity": "時間點與水管數變動決定分段模型，不能刪除。",
      "reviewerNote": "獨立重算：完成量前段1/3、後段2/3。 正確選項為「4小時」。逐項檢查後，唯一為真的理由是「總工作36管時；前段12管時，剩24管時；6支需4小時。」；其餘三項分別因「把剩餘比例誤成一半。」、「用原9小時減4.5。」、「未考慮增加水管。」而排除。邊界與語意再檢查：增加水管發生在3小時後。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": []
};
