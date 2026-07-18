// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s012-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-literacy",
    "skillId": "ratio-literacy",
    "lockedSkillTitle": "比例素養題",
    "title": "比例素養題：讀取資料與檢查條件和公平比較",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "比例素養",
      "skillOrder": 12,
      "lockedPrerequisiteSkillIds": [
        "ratio-composite-problem"
      ],
      "capBoundary": "整合國中比例式範圍的表格、標示、方案與實際限制；不依賴高中統計推論。"
    },
    "prerequisiteBridge": "前 11 個技能提供計算工具。本技能要求先理解資料來源、比較基準與條件，再選擇合適的比率模型。",
    "learningOutcomes": [
      "能從表格、標籤與文字中找出必要資料。",
      "能選擇公平的比較基準，例如每單位價格或每人用量。",
      "能辨認總量比與單位率可能給出不同結論。",
      "能說明假設、限制、四捨五入與結果意義。"
    ],
    "glossary": [
      {
        "term": "比較基準",
        "definition": "為公平比較而統一的單位，例如每 100 公克價格。"
      },
      {
        "term": "單位率",
        "definition": "把分母調成 1 的率。"
      },
      {
        "term": "必要資訊",
        "definition": "足以回答問題且真正進入模型的資料。"
      },
      {
        "term": "限制條件",
        "definition": "容量、整包購買、最低費用、時段或誤差等現實規則。"
      },
      {
        "term": "誤導比較",
        "definition": "使用不同分母、不同範圍或只看總量造成的不公平結論。"
      }
    ],
    "notation": [
      {
        "symbol": "每單位值=總量/單位數",
        "meaning": "統一分母後比較。"
      },
      {
        "symbol": "百分率=部分/總量×100%",
        "meaning": "分母必須是正確總量。"
      },
      {
        "symbol": "約",
        "meaning": "結果經四捨五入，需標明精確程度。"
      }
    ],
    "conceptNarrative": [
      "總價較低不代表更便宜，包裝大小不同時應比較每公克、每毫升或每件價格。",
      "總人數較多的地區案件數可能較多，但每萬人率反而較低；結論取決於問題問總量還是風險率。",
      "圖表中的基準可能不是 0，視覺差距會被放大；比例判斷應讀數值與單位。",
      "現實題常有整包購買、容量上限、起跳費等限制，純比例計算後還要套用規則。",
      "資料不足時，正確作法是指出缺少什麼，而不是自行假設一個數字。"
    ],
    "formalDefinitions": [
      {
        "name": "公平比例比較",
        "statement": "把比較量換到相同分母、相同單位與相同條件後再判斷。"
      },
      {
        "name": "素養解答",
        "statement": "包含數學結果、使用資料、假設限制與對情境的解釋。"
      }
    ],
    "formulas": [
      {
        "formula": "單位價格=價格/數量",
        "conditions": [
          "商品品質與計價條件可比較"
        ],
        "meaning": "價格公平比較。"
      },
      {
        "formula": "每萬人率=事件數/人口×10000",
        "conditions": [
          "期間與事件定義相同"
        ],
        "meaning": "不同人口規模比較。"
      },
      {
        "formula": "所需包數=向上取整(需求量/每包量)",
        "conditions": [
          "只能整包購買"
        ],
        "meaning": "比例結果結合離散限制。"
      }
    ],
    "nonApplicableCases": [
      "分母不同卻直接比較百分比或總數。",
      "忽略活動期間、品質、容量等條件。",
      "只能整包購買時把 2.3 包當可購買答案。",
      "圖表截斷座標軸後僅靠柱高判倍率。",
      "資料不足仍給出唯一結論。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先寫問題真正要比較或求什麼。",
        "check": "總量、單位率、百分率還是實際購買量？"
      },
      {
        "step": 2,
        "instruction": "列出必要資料與單位。",
        "check": "期間、人口、容量、價格條件一致嗎？"
      },
      {
        "step": 3,
        "instruction": "統一比較基準並選模型。",
        "check": "分母是否相同？"
      },
      {
        "step": 4,
        "instruction": "計算後套用現實限制。",
        "check": "需整數、上限、最低費或四捨五入嗎？"
      },
      {
        "step": 5,
        "instruction": "用完整句子解釋結論與限制。",
        "check": "結論是否超出資料能支持的範圍？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "A 包 450 公克 81 元，B 包 700 公克 119 元，哪包每 100 公克較便宜？",
        "solutionSteps": [
          "A 每 100 公克為 81÷450×100=18 元。",
          "B 每 100 公克為 119÷700×100=17 元。"
        ],
        "answer": "B 包較便宜，每 100 公克少 1 元。",
        "why": "包裝總價與重量都不同，直接看八十一元與一百一十九元並不公平。換成每一百公克後，A 為十八元、B 為十七元，才可確認 B 的單位價格確實較低。"
      },
      {
        "exampleId": "L2",
        "prompt": "甲地 40 件、人口 8 萬；乙地 54 件、人口 12 萬，比較每萬人件數。",
        "solutionSteps": [
          "甲為 40/80000×10000=5。",
          "乙為 54/120000×10000=4.5。"
        ],
        "answer": "甲地每萬人件數較高。",
        "why": "事件總數會受到人口規模影響，必須除以人口並統一成每萬人。甲雖只有四十件，但每萬人五件高於乙的四點五件，顯示總數較少不代表相對比率較低。"
      },
      {
        "exampleId": "L3",
        "prompt": "活動需 5.2 公升飲料，每瓶 1.5 公升且只能買整瓶，至少幾瓶？",
        "solutionSteps": [
          "5.2÷1.5≈3.47。",
          "3 瓶不足，需向上取整為 4 瓶。"
        ],
        "answer": "4 瓶。",
        "why": "三點四七是理論瓶數，但購買單位只能是整瓶，而且題目要求至少足夠。三瓶僅四點五公升，不足五點二公升；四瓶有六公升，故必須依限制向上取整。"
      },
      {
        "exampleId": "L4",
        "prompt": "某圖表只顯示 95 到 100 的滿意度，甲 98、乙 96；能否說甲是乙的兩倍？",
        "solutionSteps": [
          "實際比值 98/96≈1.021，不是 2。",
          "截斷軸只放大視覺差距。"
        ],
        "answer": "不能；甲約為乙的 1.02 倍。",
        "why": "截斷縱軸會讓九十八與九十六的兩點差距看起來很大，但倍率必須用原始數值相除。九十八除以九十六約一點零二一，因此圖形外觀不能取代數值計算。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "只看包裝總價。",
        "why": "數量不同，基準不公平。",
        "correction": "換算每公克或每 100 公克。"
      },
      {
        "mistake": "只看事件總數比較風險。",
        "why": "人口分母不同。",
        "correction": "計算相同人口基準的率。"
      },
      {
        "mistake": "3.47 瓶四捨五入成 3 瓶。",
        "why": "最低需求必須向上取整。",
        "correction": "檢查 3 瓶容量不足。"
      },
      {
        "mistake": "把柱狀圖視覺高度當數值倍率。",
        "why": "座標軸可能截斷。",
        "correction": "讀標示數字計算比值。"
      },
      {
        "mistake": "忽略不同期間。",
        "why": "一年與一月資料不可直接比總量。",
        "correction": "先換成同期間率。"
      },
      {
        "mistake": "資料缺少容量仍選最便宜方案。",
        "why": "無法求單位價格。",
        "correction": "指出需要容量資訊。"
      }
    ],
    "selfCheck": [
      "比較基準相同嗎？",
      "分母與期間一致嗎？",
      "有整包、最低費或容量限制嗎？",
      "圖表視覺與數值是否一致？",
      "我的結論有說明假設與範圍嗎？"
    ],
    "summary": [
      "比例素養先決定公平基準，再計算。",
      "總量、單位率與百分率回答不同問題。",
      "現實限制可能使純比例答案需要調整。",
      "資料不足或圖表誤導時，要明確指出。"
    ],
    "connections": {
      "previous": "比例複合應用提供分段建模與中間量檢查。",
      "next": [
        "後續各單元的素養題都會延續同基準、同單位與限制審查。",
        "U18 將完整發展連比與更深入比例分配。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s012-v001",
        "u06-s012-v002",
        "u06-s012-v003",
        "u06-s012-v004",
        "u06-s012-v005",
        "u06-s012-v006",
        "u06-s012-v007",
        "u06-s012-v008",
        "u06-s012-v009",
        "u06-s012-v010",
        "u06-s012-v011",
        "u06-s012-v012"
      ],
      "constructedResponseIds": [
        "u06-s012-cr001",
        "u06-s012-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "四個例題分別重算每百公克價格、每萬人率、向上取整與截斷軸比值；確認結論用語只支持資料範圍，並把不同期間、容量缺失與整包限制明列為必要審查。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "dcfc42a7c20a828e314b23ff0ec30b7ed4d07e70d6cbda4c9b1b2a097d99439b"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s012-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "A包 450 公克 81 元，B包 700 公克 119 元。哪包每100公克較便宜？",
      "text": "A包 450 公克 81 元，B包 700 公克 119 元。哪包每100公克較便宜？",
      "givenConditions": "品質與其他條件相同。",
      "target": "公平比較單位價格",
      "choices": [
        "A包，18元",
        "A包，17元",
        "B包，18元",
        "B包，17元"
      ],
      "answerIndex": 3,
      "independentSolution": "B每100公克少1元。",
      "mainExplanation": "兩包重量不同，必須換成相同的一百公克基準。A 包四百五十公克有四點五個一百公克，每百公克十八元；B 包七百公克有七個一百公克，每百公克十七元，所以 B 包較便宜。",
      "explanation": "兩包重量不同，必須換成相同的一百公克基準。A 包四百五十公克有四點五個一百公克，每百公克十八元；B 包七百公克有七個一百公克，每百公克十七元，所以 B 包較便宜。",
      "steps": [
        "A 包每百公克價格為 81÷450×100=18 元。",
        "B 包每百公克價格為 119÷700×100=17 元。",
        "在同一重量基準下比較，B 包每百公克便宜一元。"
      ],
      "optionAnalysis": [
        {
          "choice": "A包，18元",
          "truth": false,
          "reason": "A計算正確但不是較便宜。"
        },
        {
          "choice": "A包，17元",
          "truth": false,
          "reason": "A不是17元。"
        },
        {
          "choice": "B包，18元",
          "truth": false,
          "reason": "B不是18元。"
        },
        {
          "choice": "B包，17元",
          "truth": true,
          "reason": "A每100公克18元，B每100公克17元。"
        }
      ],
      "misconceptionTarget": "只看八十一元低於一百一十九元，沒有考慮兩包的重量基準不同。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-composite-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-composite-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "元/100公克。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "包裝重量不同。",
      "difficultyReason": "基礎比例素養。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "581458b09312815a686d0797b43d8e612cf1ed5ddeaa7b5cee176fdff87f800e"
    },
    {
      "questionId": "u06-s012-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "甲地 40 件、人口 8 萬；乙地 54 件、人口 12 萬。哪地每萬人件數較高？",
      "text": "甲地 40 件、人口 8 萬；乙地 54 件、人口 12 萬。哪地每萬人件數較高？",
      "givenConditions": "期間與事件定義相同。",
      "target": "每人口率比較",
      "choices": [
        "乙地",
        "相同",
        "甲地",
        "資料不足"
      ],
      "answerIndex": 2,
      "independentSolution": "甲每萬人高0.5件。",
      "mainExplanation": "比較不同人口地區時，要統一成每萬人件數。甲地四十件除以八萬人，等於每萬人五件；乙地五十四件除以十二萬人，等於每萬人四點五件，因此甲地的比率較高。",
      "explanation": "比較不同人口地區時，要統一成每萬人件數。甲地四十件除以八萬人，等於每萬人五件；乙地五十四件除以十二萬人，等於每萬人四點五件，因此甲地的比率較高。",
      "steps": [
        "甲地人口八萬，算每萬人件數 40÷8=5。",
        "乙地人口十二萬，算每萬人件數 54÷12=4.5。",
        "比較五與四點五，判定甲地較高。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙地",
          "truth": false,
          "reason": "只看總件數。"
        },
        {
          "choice": "相同",
          "truth": false,
          "reason": "兩率不同。"
        },
        {
          "choice": "甲地",
          "truth": true,
          "reason": "甲5件/萬人，乙4.5件/萬人。"
        },
        {
          "choice": "資料不足",
          "truth": false,
          "reason": "人口與件數已足夠。"
        }
      ],
      "misconceptionTarget": "直接比較四十件與五十四件的總數，忽略兩地人口規模並不相同。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-composite-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-composite-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 80,
      "unitCheck": "件/萬人。",
      "roundingCheck": "精確到0.1。",
      "ambiguityBoundaryAudit": "人口以萬人為單位可直接除。",
      "difficultyReason": "基礎資料解讀。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b377898499853d9ec44fcef663b578937287e357139451e67f134da41a3c1e40"
    },
    {
      "questionId": "u06-s012-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "活動需 5.2 公升飲料，每瓶 1.5 公升且只能整瓶購買。至少幾瓶？",
      "text": "活動需 5.2 公升飲料，每瓶 1.5 公升且只能整瓶購買。至少幾瓶？",
      "givenConditions": "只能整瓶且可剩餘。",
      "target": "至少與整包限制",
      "choices": [
        "4瓶",
        "3瓶",
        "3.47瓶",
        "5瓶"
      ],
      "answerIndex": 0,
      "independentSolution": "4瓶6公升足夠，3瓶不足。",
      "mainExplanation": "所需五點二公升除以每瓶一點五公升，理論值約為三點四七瓶。因只能購買整瓶且飲料必須足夠，三瓶只有四點五公升，不足需求；四瓶共有六公升，所以至少買四瓶。",
      "explanation": "所需五點二公升除以每瓶一點五公升，理論值約為三點四七瓶。因只能購買整瓶且飲料必須足夠，三瓶只有四點五公升，不足需求；四瓶共有六公升，所以至少買四瓶。",
      "steps": [
        "計算理論瓶數 5.2÷1.5≈3.47。",
        "檢查三瓶容量 3×1.5=4.5 公升，不足五點二公升。",
        "向上取整為四瓶，容量六公升足夠。"
      ],
      "optionAnalysis": [
        {
          "choice": "4瓶",
          "truth": true,
          "reason": "5.2/1.5≈3.47，至少向上取整4。"
        },
        {
          "choice": "3瓶",
          "truth": false,
          "reason": "3瓶只有4.5公升。"
        },
        {
          "choice": "3.47瓶",
          "truth": false,
          "reason": "不能買小數瓶。"
        },
        {
          "choice": "5瓶",
          "truth": false,
          "reason": "不是最少。"
        }
      ],
      "misconceptionTarget": "把三點四七一般四捨五入成三瓶，沒有依『至少且只能整瓶』的限制取整。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-composite-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-composite-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 70,
      "unitCheck": "公升、瓶。",
      "roundingCheck": "向上取整。",
      "ambiguityBoundaryAudit": "容量與需求明確。",
      "difficultyReason": "基礎離散素養。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "14ad1beae72d1bdc42596119f5c821fa087ed0d99876d3fcddf46603bb53259d"
    },
    {
      "questionId": "u06-s012-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "圖表縱軸從 95 開始，甲值98、乙值96。甲是乙的幾倍？",
      "text": "圖表縱軸從 95 開始，甲值98、乙值96。甲是乙的幾倍？",
      "givenConditions": "數值標示明確。",
      "target": "辨認截斷座標軸誤導",
      "choices": [
        "2倍",
        "約1.02倍",
        "3倍",
        "約1.96倍"
      ],
      "answerIndex": 1,
      "independentSolution": "甲只高約2.08%。",
      "mainExplanation": "縱軸從九十五開始只會放大圖柱的視覺差距，不能把露出的高度直接當原數值。應使用標示的九十八與九十六相除，得到約一點零二倍，所以甲僅比乙高約百分之二點零八。",
      "explanation": "縱軸從九十五開始只會放大圖柱的視覺差距，不能把露出的高度直接當原數值。應使用標示的九十八與九十六相除，得到約一點零二倍，所以甲僅比乙高約百分之二點零八。",
      "steps": [
        "忽略截斷軸造成的視覺高度，取實際數值九十八與九十六。",
        "計算 98÷96≈1.0208。",
        "依選項取約值一點零二倍，而不是依圖高猜兩倍。"
      ],
      "optionAnalysis": [
        {
          "choice": "2倍",
          "truth": false,
          "reason": "視覺柱高差誤導。"
        },
        {
          "choice": "約1.02倍",
          "truth": true,
          "reason": "98/96≈1.0208。"
        },
        {
          "choice": "3倍",
          "truth": false,
          "reason": "差2不是倍數3。"
        },
        {
          "choice": "約1.96倍",
          "truth": false,
          "reason": "把98/50。"
        }
      ],
      "misconceptionTarget": "把截斷軸上高出基線的三格與一格相比，誤認甲是乙的三倍。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-composite-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-composite-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "倍數。",
      "roundingCheck": "四捨五入至小數點後2位。",
      "ambiguityBoundaryAudit": "縱軸起點不影響數值比。",
      "difficultyReason": "標準圖表素養。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9fd4a883cded6e80532dce1d0414640cd1282b2792e7511ea870d1cc13f3208f"
    },
    {
      "questionId": "u06-s012-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "兩間學校合格人數：甲90人、考生120人；乙105人、考生150人。哪校合格率較高？",
      "text": "兩間學校合格人數：甲90人、考生120人；乙105人、考生150人。哪校合格率較高？",
      "givenConditions": "考試標準與期間相同。",
      "target": "合格率公平比較",
      "choices": [
        "乙校",
        "相同",
        "甲校",
        "只看人數無法比較"
      ],
      "answerIndex": 2,
      "independentSolution": "甲高5個百分點。",
      "mainExplanation": "合格人數必須除以各校考生總數才可公平比較。甲校九十除以一百二十為百分之七十五；乙校一百零五除以一百五十為百分之七十，所以甲校合格率高五個百分點。",
      "explanation": "合格人數必須除以各校考生總數才可公平比較。甲校九十除以一百二十為百分之七十五；乙校一百零五除以一百五十為百分之七十，所以甲校合格率高五個百分點。",
      "steps": [
        "算甲校合格率 90÷120=0.75=75%。",
        "算乙校合格率 105÷150=0.70=70%。",
        "比較相同百分率基準，甲校高五個百分點。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙校",
          "truth": false,
          "reason": "乙合格人數較多但率較低。"
        },
        {
          "choice": "相同",
          "truth": false,
          "reason": "兩率不同。"
        },
        {
          "choice": "甲校",
          "truth": true,
          "reason": "甲75%，乙70%。"
        },
        {
          "choice": "只看人數無法比較",
          "truth": false,
          "reason": "分母已給。"
        }
      ],
      "misconceptionTarget": "只看乙校合格一百零五人較多，沒有同時考慮乙校考生總數也較多。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-composite-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-composite-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 85,
      "unitCheck": "百分率。",
      "roundingCheck": "精確百分率。",
      "ambiguityBoundaryAudit": "考生總數作分母。",
      "difficultyReason": "標準率比較。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "50221f1903df776605e2c0f2c4d9e29e655b9a1c7199bd25512a87d8cbf03076"
    },
    {
      "questionId": "u06-s012-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "方案甲月費200元含20GB，超量每GB 15元；方案乙無月費、每GB 25元。使用30GB時哪個便宜？",
      "text": "方案甲月費200元含20GB，超量每GB 15元；方案乙無月費、每GB 25元。使用30GB時哪個便宜？",
      "givenConditions": "使用量30GB，含量與超量費明確。",
      "target": "階梯費率比較",
      "choices": [
        "乙便宜400元",
        "甲便宜400元",
        "甲便宜250元",
        "兩者相同"
      ],
      "answerIndex": 1,
      "independentSolution": "甲方案費用為200+10×15=350元，乙方案為30×25=750元，所以甲便宜400元。",
      "mainExplanation": "甲方案的二十 GB 已含在月費中，使用三十 GB 時只有超出的十 GB 另計，費用為二百加十乘十五，等於三百五十元。乙方案費用是三十乘二十五，等於七百五十元，所以甲便宜四百元。",
      "explanation": "甲方案的二十 GB 已含在月費中，使用三十 GB 時只有超出的十 GB 另計，費用為二百加十乘十五，等於三百五十元。乙方案費用是三十乘二十五，等於七百五十元，所以甲便宜四百元。",
      "steps": [
        "甲方案超量為 30-20=10 GB，費用 200+10×15=350 元。",
        "乙方案無含量，費用 30×25=750 元。",
        "比較價差 750-350=400 元，甲方案較便宜。"
      ],
      "optionAnalysis": [
        {
          "choice": "乙便宜400元",
          "truth": false,
          "reason": "方向相反。"
        },
        {
          "choice": "甲便宜400元",
          "truth": true,
          "reason": "甲費用200+10×15=350元；乙30×25=750元，甲便宜400元。"
        },
        {
          "choice": "甲便宜250元",
          "truth": false,
          "reason": "差額750-500並非正確甲費用。"
        },
        {
          "choice": "兩者相同",
          "truth": false,
          "reason": "兩費用相差400。"
        }
      ],
      "misconceptionTarget": "把甲方案全部三十 GB 都按超量費計算，或漏掉月費已包含二十 GB。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-composite-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-composite-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 105,
      "unitCheck": "元、GB。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "固定費與含量使方案甲不是純正比。",
      "difficultyReason": "標準方案素養。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "edbd9236a917514b0c8c5c7c2654336e86dbe50daf5a1f206c3c0c3d3da7583a"
    },
    {
      "questionId": "u06-s012-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某報導比較同一年度、採相同交通事故認定標準的資料：甲區事故 120 件、人口 60 萬；乙區事故 80 件、人口 20 萬。依每萬人事故率判斷何者正確？",
      "text": "某報導比較同一年度、採相同交通事故認定標準的資料：甲區事故 120 件、人口 60 萬；乙區事故 80 件、人口 20 萬。依每萬人事故率判斷何者正確？",
      "givenConditions": "兩區統計期間同為同一年度，交通事故認定標準相同，人口以萬人為單位。",
      "target": "在同期間同定義下比較每萬人交通事故率",
      "choices": [
        "甲區較高",
        "兩區相同",
        "仍無法比較",
        "乙區較高"
      ],
      "answerIndex": 3,
      "independentSolution": "同一年度且事故定義相同時，甲為 120÷60=2 件／萬人，乙為 80÷20=4 件／萬人，所以乙區較高且為甲的兩倍。",
      "mainExplanation": "同一年度且採同一事故定義，兩區資料可用相同人口基準比較。甲區每萬人事故數為一百二十除以六十，等於二；乙區為八十除以二十，等於四，因此乙區比率較高且是甲的兩倍。",
      "explanation": "同一年度且採同一事故定義，兩區資料可用相同人口基準比較。甲區每萬人事故數為一百二十除以六十，等於二；乙區為八十除以二十，等於四，因此乙區比率較高且是甲的兩倍。",
      "steps": [
        "確認兩區使用同一年度與相同交通事故認定標準。",
        "計算甲區每萬人事故數 120÷60=2。",
        "計算乙區 80÷20=4，判定乙區較高且為甲的兩倍。"
      ],
      "optionAnalysis": [
        {
          "choice": "甲區較高",
          "truth": false,
          "reason": "只看總件數。"
        },
        {
          "choice": "兩區相同",
          "truth": false,
          "reason": "兩率不同。"
        },
        {
          "choice": "仍無法比較",
          "truth": false,
          "reason": "人口與事故數足夠，若期間相同。"
        },
        {
          "choice": "乙區較高",
          "truth": true,
          "reason": "甲每萬人2件，乙每萬人4件。"
        }
      ],
      "misconceptionTarget": "只以甲區事故總數一百二十件較多判定風險，沒有除以各區人口基準。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-composite-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-composite-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "兩區均換算為件／萬人。",
      "roundingCheck": "兩個比率均為精確值，不需近似。",
      "ambiguityBoundaryAudit": "統計年度與交通事故認定標準已明定相同。",
      "difficultyReason": "需先審查資料可比性，再以共同人口基準推翻總件數直覺。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9846b6e02be817df63fdc4a0a644de22a3616f7238013b1e5cb7e3f106c951c8"
    },
    {
      "questionId": "u06-s012-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "商品標示『加量20%，價格只加10%』。原每單位價格為 p，新每單位價格是原來的幾倍？",
      "text": "商品標示『加量20%，價格只加10%』。原每單位價格為 p，新每單位價格是原來的幾倍？",
      "givenConditions": "品質與內容相同。",
      "target": "雙百分比單位率",
      "choices": [
        "11/12倍",
        "9/10倍",
        "6/5倍",
        "12/11倍"
      ],
      "answerIndex": 0,
      "independentSolution": "約0.9167，單位價下降約8.33%。",
      "mainExplanation": "新商品的價格是原來的一點一倍，數量是原來的一點二倍。每單位價格倍率等於總價倍率除以數量倍率，所以是一點一除以一點二，化為十二分之十一，約零點九一六七倍。",
      "explanation": "新商品的價格是原來的一點一倍，數量是原來的一點二倍。每單位價格倍率等於總價倍率除以數量倍率，所以是一點一除以一點二，化為十二分之十一，約零點九一六七倍。",
      "steps": [
        "把價格增加 10% 寫成價格倍率 1.1。",
        "把數量增加 20% 寫成數量倍率 1.2。",
        "算新舊單位價倍率 1.1÷1.2=11/12。"
      ],
      "optionAnalysis": [
        {
          "choice": "11/12倍",
          "truth": true,
          "reason": "新價1.1倍、量1.2倍，單位價倍率1.1/1.2=11/12。"
        },
        {
          "choice": "9/10倍",
          "truth": false,
          "reason": "只看價格增加10%。"
        },
        {
          "choice": "6/5倍",
          "truth": false,
          "reason": "只看容量增加。"
        },
        {
          "choice": "12/11倍",
          "truth": false,
          "reason": "取倒數。"
        }
      ],
      "misconceptionTarget": "把加價百分之十與加量百分之二十直接相減，誤認單位價恰好下降百分之十。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-composite-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-composite-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 110,
      "unitCheck": "單位價格倍率。",
      "roundingCheck": "精確分數，可換約0.917。",
      "ambiguityBoundaryAudit": "基準均為原商品。",
      "difficultyReason": "進階比例推理。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0c6a49fa41c2ae29ca86912e93a24d01399a5229a4a8a7b282bda7fc09d6f4d3"
    },
    {
      "questionId": "u06-s012-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "地圖網站量得直線距離 4 公里，導航路線 5.2 公里。導航路線比直線距離多百分之幾？",
      "text": "地圖網站量得直線距離 4 公里，導航路線 5.2 公里。導航路線比直線距離多百分之幾？",
      "givenConditions": "直線距離為原比較基準。",
      "target": "增幅基準判讀",
      "choices": [
        "20%",
        "30%",
        "24%",
        "130%"
      ],
      "answerIndex": 1,
      "independentSolution": "5.2=4×1.3。",
      "mainExplanation": "導航路線比直線距離多五點二減四，等於一點二公里。增加百分率必須以原本的直線距離四公里為分母，所以一點二除以四等於零點三，也就是百分之三十。",
      "explanation": "導航路線比直線距離多五點二減四，等於一點二公里。增加百分率必須以原本的直線距離四公里為分母，所以一點二除以四等於零點三，也就是百分之三十。",
      "steps": [
        "先求增加量 5.2-4=1.2 公里。",
        "以原直線距離為基準，算 1.2÷4=0.3。",
        "把零點三改寫為 30%，並回查 4×1.3=5.2。"
      ],
      "optionAnalysis": [
        {
          "choice": "20%",
          "truth": false,
          "reason": "把1.2/6。"
        },
        {
          "choice": "30%",
          "truth": true,
          "reason": "增加1.2公里，以直線4公里為基準，1.2/4=30%。"
        },
        {
          "choice": "24%",
          "truth": false,
          "reason": "把差除導航距離。"
        },
        {
          "choice": "130%",
          "truth": false,
          "reason": "把導航/直線直接寫130%當增加率。"
        }
      ],
      "misconceptionTarget": "用新的五點二公里作分母，或把五點二除以四的一點三直接寫成增加百分之一百三十。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-composite-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-composite-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "公里相除無單位。",
      "roundingCheck": "精確百分率。",
      "ambiguityBoundaryAudit": "『比直線多』明確指定分母。",
      "difficultyReason": "進階百分率語意。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e68eb0e3af3a55895dcfe9e402e7c066a3ff865f5ffa2cccbd95ee54e273166c"
    },
    {
      "questionId": "u06-s012-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "食品標示每份 30 公克含糖 7.2 公克，一包有 5 份。整包糖占整包重量百分比為何？",
      "text": "食品標示每份 30 公克含糖 7.2 公克，一包有 5 份。整包糖占整包重量百分比為何？",
      "givenConditions": "每份大小相同，共5份。",
      "target": "食品標示比例一致性",
      "choices": [
        "24%",
        "4.8%",
        "12%",
        "120%"
      ],
      "answerIndex": 0,
      "independentSolution": "整包糖36公克、總重150公克。",
      "mainExplanation": "每份糖占每份重量七點二除以三十，等於零點二四，也就是百分之二十四。整包五份時，糖與總重都同乘五，成為三十六除以一百五十，比例仍是百分之二十四。",
      "explanation": "每份糖占每份重量七點二除以三十，等於零點二四，也就是百分之二十四。整包五份時，糖與總重都同乘五，成為三十六除以一百五十，比例仍是百分之二十四。",
      "steps": [
        "算每份含糖率 7.2÷30=0.24。",
        "或求整包糖 7.2×5=36 公克、總重 30×5=150 公克。",
        "驗算 36÷150=0.24，換成 24%。"
      ],
      "optionAnalysis": [
        {
          "choice": "24%",
          "truth": true,
          "reason": "每份比例7.2/30=24%；整包同步乘5，比率不變。"
        },
        {
          "choice": "4.8%",
          "truth": false,
          "reason": "把7.2/150。"
        },
        {
          "choice": "12%",
          "truth": false,
          "reason": "把24%除2。"
        },
        {
          "choice": "120%",
          "truth": false,
          "reason": "百分率超過100且無依據。"
        }
      ],
      "misconceptionTarget": "分子使用每份糖量七點二，分母卻使用整包一百五十公克，混合不同基準。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-composite-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-composite-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 95,
      "unitCheck": "公克相除。",
      "roundingCheck": "精確百分率。",
      "ambiguityBoundaryAudit": "整包不含額外包裝重量。",
      "difficultyReason": "標示素養。",
      "literacyContextNecessity": "每份與整包資料必須使用同一尺度，情境提供一致性檢查。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6bdaf62da37d6c2d622ab0fd198c659733f0ebc16cf09f590a263ca8fa066f99"
    },
    {
      "questionId": "u06-s012-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某班問卷回收率標示為 92%，已回收 46 份。若每位學生只填一份，班級共有多少人？",
      "text": "某班問卷回收率標示為 92%，已回收 46 份。若每位學生只填一份，班級共有多少人？",
      "givenConditions": "每人一份，46為已回收數。",
      "target": "由回收率反推總量",
      "choices": [
        "42人",
        "48人",
        "50人",
        "54人"
      ],
      "answerIndex": 2,
      "independentSolution": "46/50=92%。",
      "mainExplanation": "回收率百分之九十二等於回收份數除以全班人數。設全班 x 人，可列四十六除以 x 等於零點九二，所以 x 等於四十六除以零點九二，得到五十人；四十六除以五十正好是百分之九十二。",
      "explanation": "回收率百分之九十二等於回收份數除以全班人數。設全班 x 人，可列四十六除以 x 等於零點九二，所以 x 等於四十六除以零點九二，得到五十人；四十六除以五十正好是百分之九十二。",
      "steps": [
        "寫出回收率關係 46÷全班人數=0.92。",
        "反求全班人數 46÷0.92=50。",
        "驗算 46÷50=0.92，也就是 92%。"
      ],
      "optionAnalysis": [
        {
          "choice": "42人",
          "truth": false,
          "reason": "46×0.92。"
        },
        {
          "choice": "48人",
          "truth": false,
          "reason": "把未回收2份。"
        },
        {
          "choice": "50人",
          "truth": true,
          "reason": "46/總數=0.92，總數=46/0.92=50。"
        },
        {
          "choice": "54人",
          "truth": false,
          "reason": "用46+8。"
        }
      ],
      "misconceptionTarget": "把已回收四十六份乘百分之九十二，誤把部分量當成求百分率時的總量。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-composite-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-composite-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "人、份一一對應。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "總人數為整數且唯一。",
      "difficultyReason": "素養反推。",
      "literacyContextNecessity": "每人只填一份確保份數可代表人數。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3fc94ec9ef94565c7cad79fbd73faf5c967f2c0245c705ab10c033286b946b4e"
    },
    {
      "questionId": "u06-s012-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某社區用水報告只給『本月比上月增加 15%』，但未給上月用水量。下列哪個結論能確定？",
      "text": "某社區用水報告只給『本月比上月增加 15%』，但未給上月用水量。下列哪個結論能確定？",
      "givenConditions": "只有相對增幅，沒有基準量。",
      "target": "辨認資料充分性",
      "choices": [
        "本月增加15噸",
        "本月用水115噸",
        "兩月共215噸",
        "本月用水量是上月的1.15倍"
      ],
      "answerIndex": 3,
      "independentSolution": "任何正x都符合倍率，絕對差0.15x不固定。",
      "mainExplanation": "設上月用水量為正數 x，本月增加百分之十五後是 x 加零點一五 x，等於一點一五 x。因題目沒有給 x 的數值，無法確定增加幾噸或兩月總量；只能確定本月是上月的一點一五倍。",
      "explanation": "設上月用水量為正數 x，本月增加百分之十五後是 x 加零點一五 x，等於一點一五 x。因題目沒有給 x 的數值，無法確定增加幾噸或兩月總量；只能確定本月是上月的一點一五倍。",
      "steps": [
        "設上月用水量為 x。",
        "依增加 15% 寫出本月 x+0.15x=1.15x。",
        "因 x 未知，只能確定倍率關係，不能求絕對噸數。"
      ],
      "optionAnalysis": [
        {
          "choice": "本月增加15噸",
          "truth": false,
          "reason": "缺少上月量。"
        },
        {
          "choice": "本月用水115噸",
          "truth": false,
          "reason": "把基準假設100噸。"
        },
        {
          "choice": "兩月共215噸",
          "truth": false,
          "reason": "同樣假設數值。"
        },
        {
          "choice": "本月用水量是上月的1.15倍",
          "truth": true,
          "reason": "百分比只確定倍率，無基準量不能求噸數。"
        }
      ],
      "misconceptionTarget": "把百分之十五的基準默認為一百噸，憑空推得增加十五噸或本月一百一十五噸。",
      "prerequisiteCheck": {
        "skillIds": [
          "ratio-composite-problem"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['ratio-composite-problem'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "倍數可確定，噸數不可。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "選項中只有倍率不需額外資料。",
      "difficultyReason": "高階資料不足判斷。",
      "literacyContextNecessity": "報告只提供百分比而隱去基準量，必須解讀資料能支持的結論與不能支持的絕對數值，這正是題目的資料素養核心。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "28db4d6281f0210cf13a1ada605a13424f323b4878aef0aad5d99735d2aede23"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s012-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "兩款米：甲1.2公斤204元，乙750公克120元。比較每100公克價格，並說明只看總價會造成什麼錯誤。",
      "target": "單位價格與比較基準",
      "requiredWork": [
        "統一重量基準。",
        "算兩款每100公克價格。",
        "說明總價比較的限制。"
      ],
      "fullCreditSolution": [
        "先統一重量單位：甲的一點二公斤等於一千二百公克，因此共有十二個一百公克。",
        "甲每一百公克價格為 204÷12=17 元。乙七百五十公克共有七點五個一百公克，每一百公克為 120÷7.5=16 元。",
        "在相同重量基準下，乙每一百公克比甲便宜一元。",
        "只看總價會忽略包裝重量不同；即使此例也選到乙，理由仍不足以支持單位價格較低的結論。"
      ],
      "alternativeSolutions": [
        "可算每公克價格：甲0.17元、乙0.16元。"
      ],
      "reasoningSteps": [
        "把甲的一點二公斤換成一千二百公克。",
        "分別計算兩款每一百公克價格。",
        "比較同一重量基準，並說明總價不能單獨代表單位價。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "甲17、乙16元/100公克，結論乙較便宜並解釋總價分母不一致。"
        },
        {
          "score": 2,
          "criteria": "單位價格與結論正確，但批判說明簡略。"
        },
        {
          "score": 1,
          "criteria": "只正確算出一款單位價或統一單位後算術有小錯。"
        },
        {
          "score": 0,
          "criteria": "只比較204與120且未處理重量。"
        }
      ],
      "partialCreditRules": [
        "結論相同不代表方法正確；必須呈現公平基準。"
      ],
      "followThroughPolicy": "若甲公斤換算錯但乙單位價正確，可給1分；若兩款均採同一錯誤基準但比較方向偶然正確，最多1分。",
      "unitNotationRules": "最後標示元/100公克。",
      "answerOnlyPolicy": "只寫乙較便宜最多1分。",
      "commonErrors": [
        "把一點二公斤誤當一點二公克，導致甲的單位價格異常巨大。",
        "算乙的 120÷750 後忘記乘一百，沒有換成每百公克價格。",
        "只因乙總價一百二十元較低就下結論，未檢查包裝重量。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "甲17、乙16元/100公克，乙較便宜。",
        "ambiguity": "品質相同為公平比較的隱含假設，可在說明中提出。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "d6671f23214cd65a9556f69d61d8c33d817c8a41b374141013d1b3899ff72b57"
    },
    {
      "questionId": "u06-s012-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-literacy",
      "skillId": "ratio-literacy",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "某年度交通事故報告以相同事故認定標準統計：甲區 72 件、人口 18 萬；乙區 55 件、人口 10 萬。計算每萬人事故件數，判斷哪區比率較高，並說明總件數與比率為何會給不同結論。",
      "target": "在同一年度與同一事故定義下比較每萬人交通事故件數",
      "requiredWork": [
        "確認兩區統計期間與交通事故認定標準相同。",
        "計算兩區每萬人的交通事故件數。",
        "比較比率並解釋總件數受人口規模影響。"
      ],
      "fullCreditSolution": [
        "題目明定兩區資料來自同一年度，且使用相同交通事故認定標準，因此可在相同口徑下比較。",
        "甲區每萬人事故件數為 72÷18=4 件；乙區為 55÷10=5.5 件。",
        "乙區每萬人事故件數較高，雖然其事故總件數五十五件少於甲區七十二件。",
        "總件數同時受人口規模影響；乙區人口較少，將事故件數除以人口後，每萬人的相對比率反而較高。"
      ],
      "alternativeSolutions": [
        "可先算每人率再乘10000。"
      ],
      "reasoningSteps": [
        "先核對同年度與同事故定義，確認資料可比較。",
        "把兩區事故件數分別除以以萬人表示的人口。",
        "比較四與五點五，並用人口規模解釋總量與比率差異。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "甲4、乙5.5件/萬人，判乙較高並正確解釋人口分母。"
        },
        {
          "score": 2,
          "criteria": "兩率與結論正確，但解釋只提『人口不同』。"
        },
        {
          "score": 1,
          "criteria": "方法正確但一區除法有單一錯誤，仍呈現相同基準。"
        },
        {
          "score": 0,
          "criteria": "只以72>55判甲較高，或分母用錯。"
        }
      ],
      "partialCreditRules": [
        "期間與事件定義需相同；可在答案中註明此假設。"
      ],
      "followThroughPolicy": "若一區算術錯但另一區與比較方法正確，可給1分；若總件數比較取代比率，不採跟隨。",
      "unitNotationRules": "單位為件/萬人；5.5可寫11/2。",
      "answerOnlyPolicy": "只寫乙區最多1分。",
      "commonErrors": [
        "把十八萬與十萬直接當成十八人與十人，誤解人口單位。",
        "一區算每萬人、另一區仍用總件數，使用不同基準比較。",
        "看到甲區七十二件較多便判甲較高，沒有除以人口規模。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "同年度、同事故定義下，甲為四件／萬人，乙為五點五件／萬人，因此乙區比率較高。",
        "ambiguity": "統計年度與交通事故認定標準均已明示相同，事件及期間口徑完整。",
        "scope": "只比較題目所給年度的每萬人事故件數，不外推其他期間或因果風險。",
        "decision": "pass",
        "reviewedAt": "2026-07-16"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "f27269087048891e2e141335e1b72b3ca2ea0edd6001c43a29136a7e009520c7"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s012-v001-semantic-review-r1",
      "questionId": "u06-s012-v001",
      "unitId": "u06",
      "skillId": "ratio-literacy",
      "contentSha256": "581458b09312815a686d0797b43d8e612cf1ed5ddeaa7b5cee176fdff87f800e",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "B每100公克少1元。",
      "derivedAnswer": "B包，17元",
      "storedAnswer": "B包，17元",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "A計算正確但不是較便宜。",
        "A不是17元。",
        "B不是18元。",
        "A每100公克18元，B每100公克17元。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「公平比較單位價格」，已明示必要條件：品質與其他條件相同。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：元/100公克。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：包裝重量不同。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎比例素養。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：B每100公克少1元。 正確選項為「B包，17元」。逐項檢查後，唯一為真的理由是「A每100公克18元，B每100公克17元。」；其餘三項分別因「A計算正確但不是較便宜。」、「A不是17元。」、「B不是18元。」而排除。邊界與語意再檢查：包裝重量不同。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s012-v002-semantic-review-r1",
      "questionId": "u06-s012-v002",
      "unitId": "u06",
      "skillId": "ratio-literacy",
      "contentSha256": "b377898499853d9ec44fcef663b578937287e357139451e67f134da41a3c1e40",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "甲每萬人高0.5件。",
      "derivedAnswer": "甲地",
      "storedAnswer": "甲地",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "只看總件數。",
        "兩率不同。",
        "甲5件/萬人，乙4.5件/萬人。",
        "人口與件數已足夠。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「每人口率比較」，已明示必要條件：期間與事件定義相同。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：件/萬人。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：人口以萬人為單位可直接除。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確到0.1。。"
      },
      "difficultyReason": "基礎資料解讀。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：甲每萬人高0.5件。 正確選項為「甲地」。逐項檢查後，唯一為真的理由是「甲5件/萬人，乙4.5件/萬人。」；其餘三項分別因「只看總件數。」、「兩率不同。」、「人口與件數已足夠。」而排除。邊界與語意再檢查：人口以萬人為單位可直接除。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s012-v003-semantic-review-r1",
      "questionId": "u06-s012-v003",
      "unitId": "u06",
      "skillId": "ratio-literacy",
      "contentSha256": "14ad1beae72d1bdc42596119f5c821fa087ed0d99876d3fcddf46603bb53259d",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "4瓶6公升足夠，3瓶不足。",
      "derivedAnswer": "4瓶",
      "storedAnswer": "4瓶",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "5.2/1.5≈3.47，至少向上取整4。",
        "3瓶只有4.5公升。",
        "不能買小數瓶。",
        "不是最少。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「至少與整包限制」，已明示必要條件：只能整瓶且可剩餘。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公升、瓶。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：容量與需求明確。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：向上取整。。"
      },
      "difficultyReason": "基礎離散素養。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：4瓶6公升足夠，3瓶不足。 正確選項為「4瓶」。逐項檢查後，唯一為真的理由是「5.2/1.5≈3.47，至少向上取整4。」；其餘三項分別因「3瓶只有4.5公升。」、「不能買小數瓶。」、「不是最少。」而排除。邊界與語意再檢查：容量與需求明確。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s012-v004-semantic-review-r1",
      "questionId": "u06-s012-v004",
      "unitId": "u06",
      "skillId": "ratio-literacy",
      "contentSha256": "9fd4a883cded6e80532dce1d0414640cd1282b2792e7511ea870d1cc13f3208f",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "甲只高約2.08%。",
      "derivedAnswer": "約1.02倍",
      "storedAnswer": "約1.02倍",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "視覺柱高差誤導。",
        "98/96≈1.0208。",
        "差2不是倍數3。",
        "把98/50。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「辨認截斷座標軸誤導」，已明示必要條件：數值標示明確。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：倍數。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：縱軸起點不影響數值比。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：四捨五入至小數點後2位。。"
      },
      "difficultyReason": "標準圖表素養。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：甲只高約2.08%。 正確選項為「約1.02倍」。逐項檢查後，唯一為真的理由是「98/96≈1.0208。」；其餘三項分別因「視覺柱高差誤導。」、「差2不是倍數3。」、「把98/50。」而排除。邊界與語意再檢查：縱軸起點不影響數值比。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s012-v005-semantic-review-r1",
      "questionId": "u06-s012-v005",
      "unitId": "u06",
      "skillId": "ratio-literacy",
      "contentSha256": "50221f1903df776605e2c0f2c4d9e29e655b9a1c7199bd25512a87d8cbf03076",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "甲高5個百分點。",
      "derivedAnswer": "甲校",
      "storedAnswer": "甲校",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "乙合格人數較多但率較低。",
        "兩率不同。",
        "甲75%，乙70%。",
        "分母已給。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「合格率公平比較」，已明示必要條件：考試標準與期間相同。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：百分率。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：考生總數作分母。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確百分率。。"
      },
      "difficultyReason": "標準率比較。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：甲高5個百分點。 正確選項為「甲校」。逐項檢查後，唯一為真的理由是「甲75%，乙70%。」；其餘三項分別因「乙合格人數較多但率較低。」、「兩率不同。」、「分母已給。」而排除。邊界與語意再檢查：考生總數作分母。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s012-v006-semantic-review-r1",
      "questionId": "u06-s012-v006",
      "unitId": "u06",
      "skillId": "ratio-literacy",
      "contentSha256": "edbd9236a917514b0c8c5c7c2654336e86dbe50daf5a1f206c3c0c3d3da7583a",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "甲方案費用為200+10×15=350元，乙方案為30×25=750元，所以甲便宜400元。",
      "derivedAnswer": "甲便宜400元",
      "storedAnswer": "甲便宜400元",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "方向相反。",
        "甲費用200+10×15=350元；乙30×25=750元，甲便宜400元。",
        "差額750-500並非正確甲費用。",
        "兩費用相差400。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「階梯費率比較」，已明示必要條件：使用量30GB，含量與超量費明確。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：元、GB。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：固定費與含量使方案甲不是純正比。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準方案素養。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：甲方案費用為200+10×15=350元，乙方案為30×25=750元，所以甲便宜400元。甲的20GB已包含在月費中，只有超出的10GB另計；逐項比較後，方向、金額與價差都只符合甲便宜400元。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s012-v007-semantic-review-r1",
      "questionId": "u06-s012-v007",
      "unitId": "u06",
      "skillId": "ratio-literacy",
      "contentSha256": "9846b6e02be817df63fdc4a0a644de22a3616f7238013b1e5cb7e3f106c951c8",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "同一年度且事故定義相同時，甲為 120÷60=2 件／萬人，乙為 80÷20=4 件／萬人，所以乙區較高且為甲的兩倍。",
      "derivedAnswer": "乙區較高",
      "storedAnswer": "乙區較高",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "甲每萬人二件，低於乙每萬人四件。",
        "兩區每萬人事故數分別為二與四，並不相同。",
        "同年度、同定義與人口資料皆已提供，足以比較。",
        "乙每萬人四件，高於甲每萬人二件。"
      ],
      "ambiguityChecks": {
        "wording": "題幹明示統計期間與事故認定標準相同，事件口徑一致。",
        "units": "人口皆以萬人表示，計算結果統一為每萬人事故件數。",
        "boundary": "結論只比較本年度每萬人事故率，不外推其他年份或其他風險。",
        "rounding": "兩區比率均為整數精確值，不受近似或取整影響。"
      },
      "difficultyReason": "先確認資料口徑一致，再將總件數改為相同人口基準比較。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：同一年度且事故定義相同時，甲為 120÷60=2 件／萬人，乙為 80÷20=4 件／萬人，所以乙區較高且為甲的兩倍。題目已補足期間與事件定義，資料可比；逐項檢查後只有乙區較高符合計算，答案唯一。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s012-v008-semantic-review-r1",
      "questionId": "u06-s012-v008",
      "unitId": "u06",
      "skillId": "ratio-literacy",
      "contentSha256": "0c6a49fa41c2ae29ca86912e93a24d01399a5229a4a8a7b282bda7fc09d6f4d3",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "約0.9167，單位價下降約8.33%。",
      "derivedAnswer": "11/12倍",
      "storedAnswer": "11/12倍",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "新價1.1倍、量1.2倍，單位價倍率1.1/1.2=11/12。",
        "只看價格增加10%。",
        "只看容量增加。",
        "取倒數。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「雙百分比單位率」，已明示必要條件：品質與內容相同。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：單位價格倍率。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：基準均為原商品。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確分數，可換約0.917。。"
      },
      "difficultyReason": "進階比例推理。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：約0.9167，單位價下降約8.33%。 正確選項為「11/12倍」。逐項檢查後，唯一為真的理由是「新價1.1倍、量1.2倍，單位價倍率1.1/1.2=11/12。」；其餘三項分別因「只看價格增加10%。」、「只看容量增加。」、「取倒數。」而排除。邊界與語意再檢查：基準均為原商品。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s012-v009-semantic-review-r1",
      "questionId": "u06-s012-v009",
      "unitId": "u06",
      "skillId": "ratio-literacy",
      "contentSha256": "e68eb0e3af3a55895dcfe9e402e7c066a3ff865f5ffa2cccbd95ee54e273166c",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "5.2=4×1.3。",
      "derivedAnswer": "30%",
      "storedAnswer": "30%",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "把1.2/6。",
        "增加1.2公里，以直線4公里為基準，1.2/4=30%。",
        "把差除導航距離。",
        "把導航/直線直接寫130%當增加率。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「增幅基準判讀」，已明示必要條件：直線距離為原比較基準。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公里相除無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：『比直線多』明確指定分母。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確百分率。。"
      },
      "difficultyReason": "進階百分率語意。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：5.2=4×1.3。 正確選項為「30%」。逐項檢查後，唯一為真的理由是「增加1.2公里，以直線4公里為基準，1.2/4=30%。」；其餘三項分別因「把1.2/6。」、「把差除導航距離。」、「把導航/直線直接寫130%當增加率。」而排除。邊界與語意再檢查：『比直線多』明確指定分母。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s012-v010-semantic-review-r1",
      "questionId": "u06-s012-v010",
      "unitId": "u06",
      "skillId": "ratio-literacy",
      "contentSha256": "6bdaf62da37d6c2d622ab0fd198c659733f0ebc16cf09f590a263ca8fa066f99",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "整包糖36公克、總重150公克。",
      "derivedAnswer": "24%",
      "storedAnswer": "24%",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "每份比例7.2/30=24%；整包同步乘5，比率不變。",
        "把7.2/150。",
        "把24%除2。",
        "百分率超過100且無依據。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「食品標示比例一致性」，已明示必要條件：每份大小相同，共5份。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公克相除。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：整包不含額外包裝重量。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：精確百分率。。"
      },
      "difficultyReason": "標示素養。",
      "literacyNecessity": "每份與整包資料必須使用同一尺度，情境提供一致性檢查。",
      "reviewerNote": "獨立重算：整包糖36公克、總重150公克。 正確選項為「24%」。逐項檢查後，唯一為真的理由是「每份比例7.2/30=24%；整包同步乘5，比率不變。」；其餘三項分別因「把7.2/150。」、「把24%除2。」、「百分率超過100且無依據。」而排除。邊界與語意再檢查：整包不含額外包裝重量。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s012-v011-semantic-review-r1",
      "questionId": "u06-s012-v011",
      "unitId": "u06",
      "skillId": "ratio-literacy",
      "contentSha256": "3fc94ec9ef94565c7cad79fbd73faf5c967f2c0245c705ab10c033286b946b4e",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "46/50=92%。",
      "derivedAnswer": "50人",
      "storedAnswer": "50人",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "46×0.92。",
        "把未回收2份。",
        "46/總數=0.92，總數=46/0.92=50。",
        "用46+8。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由回收率反推總量」，已明示必要條件：每人一份，46為已回收數。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：人、份一一對應。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：總人數為整數且唯一。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "素養反推。",
      "literacyNecessity": "每人只填一份確保份數可代表人數。",
      "reviewerNote": "獨立重算：46/50=92%。 正確選項為「50人」。逐項檢查後，唯一為真的理由是「46/總數=0.92，總數=46/0.92=50。」；其餘三項分別因「46×0.92。」、「把未回收2份。」、「用46+8。」而排除。邊界與語意再檢查：總人數為整數且唯一。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s012-v012-semantic-review-r1",
      "questionId": "u06-s012-v012",
      "unitId": "u06",
      "skillId": "ratio-literacy",
      "contentSha256": "28db4d6281f0210cf13a1ada605a13424f323b4878aef0aad5d99735d2aede23",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "任何正x都符合倍率，絕對差0.15x不固定。",
      "derivedAnswer": "本月用水量是上月的1.15倍",
      "storedAnswer": "本月用水量是上月的1.15倍",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "缺少上月量。",
        "把基準假設100噸。",
        "同樣假設數值。",
        "百分比只確定倍率，無基準量不能求噸數。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「辨認資料充分性」，已明示必要條件：只有相對增幅，沒有基準量。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：倍數可確定，噸數不可。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：選項中只有倍率不需額外資料。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "高階資料不足判斷。",
      "literacyNecessity": "報告只提供百分比而隱去基準量，必須解讀資料能支持的結論與不能支持的絕對數值，這正是題目的資料素養核心。",
      "reviewerNote": "獨立重算：任何正x都符合倍率，絕對差0.15x不固定。 正確選項為「本月用水量是上月的1.15倍」。逐項檢查後，唯一為真的理由是「百分比只確定倍率，無基準量不能求噸數。」；其餘三項分別因「缺少上月量。」、「把基準假設100噸。」、「同樣假設數值。」而排除。邊界與語意再檢查：選項中只有倍率不需額外資料。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": []
};
