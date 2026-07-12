export default {
  "lecture": {
    "lectureId": "u13-s015-lecture-r1",
    "unitId": "u13",
    "numericUnitId": 13,
    "topicId": "u13-literacy",
    "skillId": "quadratic-literacy",
    "lockedOrder": 15,
    "originalLockedTitle": "二次方程式素養題",
    "title": "二次方程式素養整合題",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能從表格、規則文字與示意圖擷取必要資料。",
      "能選擇未知數並建立二次模型。",
      "能比較多個代數根與多重限制。",
      "能解釋模型、答案與限制之間的理由。"
    ],
    "prerequisites": [
      {
        "skillId": "quadratic-consecutive-product",
        "requiredLevel": "能說明前一技能的核心規則並完成基本計算，不只記答案。"
      }
    ],
    "prerequisiteBridge": "整合前 14 個技能，從公式與解法提升到跨表格、圖文與限制的完整推理。",
    "glossary": [
      {
        "term": "數學素養",
        "definition": "在真實或仿真情境中辨識數學關係、建立模型、運算並解釋結果。"
      },
      {
        "term": "必要資料",
        "definition": "會影響列式或答案的條件。"
      },
      {
        "term": "多重限制",
        "definition": "例如整數、正數、容量、時間區間同時存在。"
      },
      {
        "term": "模型檢核",
        "definition": "確認方程式與原情境的量、單位與限制一致。"
      }
    ],
    "notation": [
      {
        "symbol": "模型→根→限制→結論",
        "meaning": "素養題的四階段推理鏈。"
      }
    ],
    "conceptNarrative": [
      "素養題不一定計算更難，難點常在資料選擇與語意轉換。",
      "先把文字、表格、圖中的量分成已知、未知、限制與要求。",
      "同一二次方程式可能有兩個代數根，但容量、整數或時間範圍只接受其中一個。",
      "有時兩根都不合限制，正確結論是「無符合方案」。",
      "答案要用完整句子說明為何採用或排除某根，不能只留下數字。"
    ],
    "formalDefinitions": [
      {
        "name": "素養建模",
        "statement": "從情境辨識變量與關係，建立可驗證的數學模型，求解並解釋。"
      }
    ],
    "formulas": [
      {
        "formula": "情境條件集合 = 代數方程式條件 + 定義域限制",
        "conditions": [
          "所有限制均需明列"
        ],
        "meaning": "代數根只是候選，必須通過完整條件集合。"
      }
    ],
    "nonApplicableCases": [
      "圖表中的裝飾資訊不一定需要列式。",
      "不能因答案看起來合理就跳過驗根。",
      "近似值須符合題目精度，若可保留精確值應優先保留。",
      "不同模型可能產生相同單位，但只有符合文字關係者正確。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "整理資料為已知、未知、關係、限制。",
        "check": "是否忽略表格註記或圖說？"
      },
      {
        "step": 2,
        "instruction": "選未知數並寫出各量表示式。",
        "check": "單位是否一致？"
      },
      {
        "step": 3,
        "instruction": "建立二次方程式。",
        "check": "每個情境條件是否有對應？"
      },
      {
        "step": 4,
        "instruction": "求全部代數根並驗根。",
        "check": "是否有計算或抄寫錯誤？"
      },
      {
        "step": 5,
        "instruction": "逐條套用限制並解釋結論。",
        "check": "為何保留或排除是否說清楚？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "座位共有 n 排、每排 n+2 人，總人數 48，求排數與每排人數。",
        "solutionSteps": [
          "列 n(n+2)=48。",
          "根為 6、-8，排數取正整數。",
          "再算 n+2=8。"
        ],
        "answer": "6 排，每排 8 人。"
      },
      {
        "exampleId": "L2",
        "prompt": "商品有 n 位購買者，每人價格 50-n 元，收入 600 元且 n≤25。",
        "solutionSteps": [
          "列 n(50-n)=600。",
          "根為 20、30。",
          "容量限制保留 20。"
        ],
        "answer": "n=20。"
      },
      {
        "exampleId": "L3",
        "prompt": "高度模型 h=-t²+8t+9，求落地的正時間。",
        "solutionSteps": [
          "令 h=0。",
          "方程式根為 9、-1。",
          "時間取 t=9。"
        ],
        "answer": "9 秒。"
      },
      {
        "exampleId": "L4",
        "prompt": "評分模型 (x-3)²=20，規定 0≤x≤5。",
        "solutionSteps": [
          "根為 3±2√5，約 -1.47 與 7.47。",
          "兩者都超出區間。"
        ],
        "answer": "沒有符合規定的 x。"
      },
      {
        "exampleId": "L5",
        "prompt": "180 km 行程提速 15 km/h 後少 1 小時，求原速。",
        "solutionSteps": [
          "180/v-180/(v+15)=1。",
          "得 v²+15v-2700=0。",
          "正根 v=45。"
        ],
        "answer": "45 km/h。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把所有數字都塞進方程式。",
        "why": "未分辨必要與裝飾資料。",
        "correction": "先寫關係表。"
      },
      {
        "mistake": "得到兩根就都作答。",
        "why": "忽略容量或範圍。",
        "correction": "逐條套限制。"
      },
      {
        "mistake": "兩根都不合時硬選較接近者。",
        "why": "把精確限制改成近似。",
        "correction": "結論應為無符合方案。"
      },
      {
        "mistake": "只寫數字不說理由。",
        "why": "素養題要求模型解釋。",
        "correction": "說明列式與排除根。"
      },
      {
        "mistake": "表格單位與公式單位不一致。",
        "why": "量綱錯誤。",
        "correction": "先統一單位。"
      },
      {
        "mistake": "用圖形比例估計未標示量。",
        "why": "示意圖可能不按比例。",
        "correction": "只使用明示資料。"
      }
    ],
    "selfCheck": [
      "必要資料是否完整？",
      "未知數與單位是否清楚？",
      "模型是否對應文字關係？",
      "所有根是否驗證？",
      "每個限制是否逐條套用並解釋？"
    ],
    "summary": [
      "素養題重視資料選擇、建模、運算與解釋。",
      "代數根需通過多重限制。",
      "可能只有一根、兩根或無符合方案。",
      "完整答案應說明保留與排除理由。"
    ],
    "connections": {
      "previous": "整合前 14 個技能，從公式與解法提升到跨表格、圖文與限制的完整推理。",
      "next": [
        "本單元完成後，可在後續函數與幾何情境中辨認二次關係。",
        "跨單元複習時應先確認題目是否真的需要二次方程式。"
      ]
    },
    "figureReferences": [
      "u13-fig-seating-array",
      "u13-fig-literacy-layout"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u13-s015-v001",
        "u13-s015-v002",
        "u13-s015-v003",
        "u13-s015-v004",
        "u13-s015-v005",
        "u13-s015-v006",
        "u13-s015-v007",
        "u13-s015-v008",
        "u13-s015-v009",
        "u13-s015-v010",
        "u13-s015-v011",
        "u13-s015-v012"
      ],
      "constructedResponseIds": [
        "u13-s015-cr001",
        "u13-s015-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "reviewNote": "五例均以原情境重算並逐條套限制；確認價格模型 20、30 兩根中僅 20 符合容量，區間例兩根皆不合而非強選，速度例代回時間差正好 1 小時。",
      "reviewVersion": "human-lecture-review-u13-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "8aa02bc716ebdee5b55bdb4183e6f0cab92b5f30d03e6e799bd924b81fef8b46"
  },
  "mcQuestions": [
    {
      "questionId": "u13-s015-v001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "lockedSkillOrder": 15,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "svg",
      "figureId": "u13-fig-seating-array",
      "text": "活動座位依圖示排成 n 排，每排 n+2 人，共 48 人，且 n 為正整數。每排有幾人？",
      "givenConditions": "n∈正整數。",
      "target": "整合圖示求每排人數",
      "choices": [
        "-8 人",
        "6 人",
        "24 人",
        "8 人"
      ],
      "answerIndex": 3,
      "explanation": "從圖文列 n(n+2)=48，取正根 n=6；題目問每排，所以算 n+2=8，所以答案為「8 人」。",
      "steps": [
        "從圖文列 n(n+2)=48，取正根 n=6",
        "題目問每排，所以算 n+2=8"
      ],
      "optionAnalysis": [
        {
          "choice": "-8 人",
          "truth": false,
          "reason": "排數的負代數根不能轉成實際人數。"
        },
        {
          "choice": "6 人",
          "truth": false,
          "reason": "這是排數，不是每排人數。"
        },
        {
          "choice": "24 人",
          "truth": false,
          "reason": "把總人數平均除以 2，未求排數。"
        },
        {
          "choice": "8 人",
          "truth": true,
          "reason": "n(n+2)=48 得 n=6，因此每排 n+2=8 人。"
        }
      ],
      "misconceptionTarget": "求得 n 後直接把排數當答案",
      "prerequisiteSkillIds": [
        "quadratic-consecutive-product"
      ],
      "estimatedTimeSec": 100,
      "unitCheck": "排數單位為排，每排人數單位為人。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "圖不按比例，只依標示；目標是每排數。",
      "difficultyReason": "圖文建模後需轉換未知數角色。",
      "literacyContextNecessity": "圖示分別標示垂直的排數與水平的每排人數，必須辨認角色才能回答 n+2 而不是 n。",
      "authoringIntent": "整合圖示求每排人數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "68ec1127d58260fb69cad3a6f00730b4a9252bc611fa4e2e660bc3cc3cf3b9f6"
    },
    {
      "questionId": "u13-s015-v002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "lockedSkillOrder": 15,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某方案有 n 位使用者，每人費用為 50-n 元，總收入 600 元，且系統容量 n≤25。n 為何？",
      "givenConditions": "n 為正整數且≤25。",
      "target": "求容量內使用者數",
      "choices": [
        "30",
        "20",
        "25",
        "20 或 30"
      ],
      "answerIndex": 1,
      "explanation": "整理 n²-50n+600=0；根 20、30，依 n≤25 選 20，所以答案為「20」。",
      "steps": [
        "整理 n²-50n+600=0",
        "根 20、30，依 n≤25 選 20"
      ],
      "optionAnalysis": [
        {
          "choice": "30",
          "truth": false,
          "reason": "代數根但超過容量。"
        },
        {
          "choice": "20",
          "truth": true,
          "reason": "n(50-n)=600，根 20、30，容量保留 20。"
        },
        {
          "choice": "25",
          "truth": false,
          "reason": "容量上限不一定是解。"
        },
        {
          "choice": "20 或 30",
          "truth": false,
          "reason": "未套用容量。"
        }
      ],
      "misconceptionTarget": "把上限當根或忽略根篩選",
      "prerequisiteSkillIds": [
        "quadratic-consecutive-product"
      ],
      "estimatedTimeSec": 105,
      "unitCheck": "人數為人，費用與收入為元。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "每人費用需非負，兩根均非負但容量再篩選。",
      "difficultyReason": "價格隨人數變化。",
      "literacyContextNecessity": "單價不是固定值，必須把人數同時代入單價與容量規則。",
      "authoringIntent": "求容量內使用者數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "47da904cec04a18e110f46053898984649d49f581dd2d2e381e2b4c72b22ec3a"
    },
    {
      "questionId": "u13-s015-v003",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "lockedSkillOrder": 15,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "無人機高度模型為 h=-t²+8t+9。起飛後再次到地面時 t 為何？",
      "givenConditions": "t≥0 且問再次到地面。",
      "target": "求起飛後落地時間",
      "choices": [
        "9 秒",
        "-1 秒",
        "8 秒",
        "4 秒"
      ],
      "answerIndex": 0,
      "explanation": "解 -t²+8t+9=0；乘 -1 後 (t-9)(t+1)=0，取 t=9，所以答案為「9 秒」。",
      "steps": [
        "解 -t²+8t+9=0",
        "乘 -1 後 (t-9)(t+1)=0，取 t=9"
      ],
      "optionAnalysis": [
        {
          "choice": "9 秒",
          "truth": true,
          "reason": "令 h=0，根 t=9、-1；起飛後取正時間。"
        },
        {
          "choice": "-1 秒",
          "truth": false,
          "reason": "代數根但在起飛前。"
        },
        {
          "choice": "8 秒",
          "truth": false,
          "reason": "是一次項係數，不是落地時間。"
        },
        {
          "choice": "4 秒",
          "truth": false,
          "reason": "是高度曲線中心時間，不是零點。"
        }
      ],
      "misconceptionTarget": "把中心或負時間當答案",
      "prerequisiteSkillIds": [
        "quadratic-consecutive-product"
      ],
      "estimatedTimeSec": 95,
      "unitCheck": "t 秒，h 為高度單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "t=0 時 h=9，不是地面。",
      "difficultyReason": "模型零點與時間語意。",
      "literacyContextNecessity": "「起飛後再次」排除負時間並要求把高度模型的零點解釋為事件時間。",
      "authoringIntent": "求起飛後落地時間",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "22ef44e70caeb868da46c94d9dc05c20efabc8a6a3146ee68681ab8836e72c6d"
    },
    {
      "questionId": "u13-s015-v004",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "lockedSkillOrder": 15,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "svg",
      "figureId": "u13-fig-literacy-layout",
      "text": "某園區外框尺寸為 x+2 公尺與 x+6 公尺，總面積 96 平方公尺，x>0。x 為何？",
      "givenConditions": "x>0。",
      "target": "求外框基準量",
      "choices": [
        "-14",
        "8",
        "6",
        "12"
      ],
      "answerIndex": 2,
      "explanation": "展開 x²+8x+12=96；(x-6)(x+14)=0，取 6，所以答案為「6」。",
      "steps": [
        "展開 x²+8x+12=96",
        "(x-6)(x+14)=0，取 6"
      ],
      "optionAnalysis": [
        {
          "choice": "-14",
          "truth": false,
          "reason": "使尺寸為負。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "10×14=140。"
        },
        {
          "choice": "6",
          "truth": true,
          "reason": "(x+2)(x+6)=96，根 6、-14，取正。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "14×18=252。"
        }
      ],
      "misconceptionTarget": "展開或正值篩選錯",
      "prerequisiteSkillIds": [
        "quadratic-consecutive-product"
      ],
      "estimatedTimeSec": 100,
      "unitCheck": "公尺與平方公尺。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "兩個尺寸均需正。",
      "difficultyReason": "圖形與範圍。",
      "literacyContextNecessity": "外框圖示中的兩個不同增加量決定方程式，正值限制決定可用根。",
      "authoringIntent": "求外框基準量",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "43d1edf42f0b9c15572e6828ed4229ef2e1cdfa401dac386b49f12ce9c3d699a"
    },
    {
      "questionId": "u13-s015-v005",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "lockedSkillOrder": 15,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "評分模型為 (x-3)²=20，規定 0≤x≤5。符合規定的 x 有幾個？",
      "givenConditions": "閉區間 [0,5]。",
      "target": "求區間內解的個數",
      "choices": [
        "1 個",
        "0 個",
        "2 個",
        "5 個"
      ],
      "answerIndex": 1,
      "explanation": "x=3±2√5；比較 2√5≈4.47，兩根約 -1.47、7.47，所以答案為「0 個」。",
      "steps": [
        "x=3±2√5",
        "比較 2√5≈4.47，兩根約 -1.47、7.47"
      ],
      "optionAnalysis": [
        {
          "choice": "1 個",
          "truth": false,
          "reason": "兩根都超出區間。"
        },
        {
          "choice": "0 個",
          "truth": true,
          "reason": "根約為 -1.47、7.47，兩者都不在區間。"
        },
        {
          "choice": "2 個",
          "truth": false,
          "reason": "只看方程式有兩根，未套區間。"
        },
        {
          "choice": "5 個",
          "truth": false,
          "reason": "區間上界不是解的個數。"
        }
      ],
      "misconceptionTarget": "把代數根數等同可接受解數",
      "prerequisiteSkillIds": [
        "quadratic-consecutive-product"
      ],
      "estimatedTimeSec": 120,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "近似只用於區間判斷；精確根保留 3±2√5。",
      "ambiguityAndBoundaryAudit": "兩端也不滿足方程式。",
      "difficultyReason": "無可接受根的情境。",
      "literacyContextNecessity": "規定區間可能排除全部代數根，需明確判斷「無符合方案」。",
      "authoringIntent": "求區間內解的個數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c9af881b30f6a56a79bbbe338b417d478b78c0f2c46cde89c6c60727672e4553"
    },
    {
      "questionId": "u13-s015-v006",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "lockedSkillOrder": 15,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "180 km 行程中，速度增加 15 km/h 後少 1 小時。原速度為何？",
      "givenConditions": "v>0。",
      "target": "求原速度",
      "choices": [
        "-60 km/h",
        "30 km/h",
        "60 km/h",
        "45 km/h"
      ],
      "answerIndex": 3,
      "explanation": "設 v>0 並清分母；v²+15v-2700=0=(v-45)(v+60)，所以答案為「45 km/h」。",
      "steps": [
        "設 v>0 並清分母",
        "v²+15v-2700=0=(v-45)(v+60)"
      ],
      "optionAnalysis": [
        {
          "choice": "-60 km/h",
          "truth": false,
          "reason": "代數根但速度不合理。"
        },
        {
          "choice": "30 km/h",
          "truth": false,
          "reason": "時間差 6-4=2 小時。"
        },
        {
          "choice": "60 km/h",
          "truth": false,
          "reason": "時間差 3-2.4=0.6 小時。"
        },
        {
          "choice": "45 km/h",
          "truth": true,
          "reason": "180/v-180/(v+15)=1，化簡得 v=45 或 -60，取正。"
        }
      ],
      "misconceptionTarget": "時間差模型或負根處理錯",
      "prerequisiteSkillIds": [
        "quadratic-consecutive-product"
      ],
      "estimatedTimeSec": 150,
      "unitCheck": "km、km/h、h。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "分母 v、v+15 不為 0。",
      "difficultyReason": "分式素養建模。",
      "literacyContextNecessity": "距離固定、速度改變與節省時間三項資訊共同形成分式後的二次方程式。",
      "authoringIntent": "求原速度",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "10dbed50212cbcb2bb03901c66b9533f9f478564a792bfefbbd8e3ffb1b3d02c"
    },
    {
      "questionId": "u13-s015-v007",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "lockedSkillOrder": 15,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "生產模型 n²-18n+65=0 有兩個候選批量，政策規定 n≥10 且 n 為整數。應選哪個？",
      "givenConditions": "n∈整數且 n≥10。",
      "target": "求政策可接受批量",
      "choices": [
        "5",
        "10",
        "13",
        "5 或 13"
      ],
      "answerIndex": 2,
      "explanation": "分解 (n-5)(n-13)=0；比較 n≥10，保留 13，所以答案為「13」。",
      "steps": [
        "分解 (n-5)(n-13)=0",
        "比較 n≥10，保留 13"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": false,
          "reason": "低於政策下限。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "是下限但不是根。"
        },
        {
          "choice": "13",
          "truth": true,
          "reason": "根為 5、13，政策只接受 13。"
        },
        {
          "choice": "5 或 13",
          "truth": false,
          "reason": "未套用政策。"
        }
      ],
      "misconceptionTarget": "把下限當答案或忽略範圍",
      "prerequisiteSkillIds": [
        "quadratic-consecutive-product"
      ],
      "estimatedTimeSec": 105,
      "unitCheck": "n 為批量件數。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "13 唯一。",
      "difficultyReason": "根與政策門檻。",
      "literacyContextNecessity": "政策下限不是方程式資訊，必須在求根後獨立篩選。",
      "authoringIntent": "求政策可接受批量",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c69c1eae4e9f1be3c1d20291042bb4d80f09d2e3a1218da8dc0be99815715daa"
    },
    {
      "questionId": "u13-s015-v008",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "lockedSkillOrder": 15,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "一塊長方形材料寬 x、長 x+4，切去 12 平方單位後剩 48 平方單位。x 為何？",
      "givenConditions": "x>0。",
      "target": "求切除後尺寸",
      "choices": [
        "6",
        "-10",
        "4",
        "8"
      ],
      "answerIndex": 0,
      "explanation": "列 x(x+4)-12=48；x²+4x-60=(x-6)(x+10)=0，所以答案為「6」。",
      "steps": [
        "列 x(x+4)-12=48",
        "x²+4x-60=(x-6)(x+10)=0"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": true,
          "reason": "總面積 x(x+4)=60，整理得 x=6 或 -10，取正。"
        },
        {
          "choice": "-10",
          "truth": false,
          "reason": "代數根但長度不合理。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "4×8-12=20。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8×12-12=84。"
        }
      ],
      "misconceptionTarget": "總面積與剩餘面積關係錯",
      "prerequisiteSkillIds": [
        "quadratic-consecutive-product"
      ],
      "estimatedTimeSec": 120,
      "unitCheck": "面積使用平方單位，x 使用對應長度單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "切除面積固定 12。",
      "difficultyReason": "多區域面積模型。",
      "literacyContextNecessity": "需把切除前總面積與切除後剩餘面積分開建模。",
      "authoringIntent": "求切除後尺寸",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "740fbe0cfce71e74f1a614b470e25a309c30c54df4abf48c66103f3a29e6e3a8"
    },
    {
      "questionId": "u13-s015-v009",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "lockedSkillOrder": 15,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某活動有 x 排攤位、每排 x+5 個，共 104 個，且 x 為正整數。x 為何？",
      "givenConditions": "x∈正整數。",
      "target": "求攤位排數",
      "choices": [
        "-13",
        "13",
        "52",
        "8"
      ],
      "answerIndex": 3,
      "explanation": "x²+5x-104=0；(x-8)(x+13)=0，取 8，所以答案為「8」。",
      "steps": [
        "x²+5x-104=0",
        "(x-8)(x+13)=0，取 8"
      ],
      "optionAnalysis": [
        {
          "choice": "-13",
          "truth": false,
          "reason": "排數不可為負，違反情境。"
        },
        {
          "choice": "13",
          "truth": false,
          "reason": "13×18=234。"
        },
        {
          "choice": "52",
          "truth": false,
          "reason": "把總數除以 2。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "x(x+5)=104，根 8、-13，取正。"
        }
      ],
      "misconceptionTarget": "只做平均或保留負根",
      "prerequisiteSkillIds": [
        "quadratic-consecutive-product"
      ],
      "estimatedTimeSec": 100,
      "unitCheck": "排數與攤位數為整數。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "每排 x+5。",
      "difficultyReason": "大總量陣列。",
      "literacyContextNecessity": "排數與每排數量相依，不能以固定每排數直接相除。",
      "authoringIntent": "求攤位排數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a2c189e0d84855dce180ff6259f3bbaaa3142d68a2f30c55a31984456089bf67"
    },
    {
      "questionId": "u13-s015-v010",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "lockedSkillOrder": 15,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "電池警示模型為 t²-14t+40=0。系統會在較早的零點發出第一次警示。第一次警示時間為何？",
      "givenConditions": "t≥0 隱含時間，兩根皆可但問較早。",
      "target": "求第一次警示時間",
      "choices": [
        "10",
        "7",
        "4",
        "40"
      ],
      "answerIndex": 2,
      "explanation": "分解 (t-4)(t-10)=0；比較兩個非負時間，較早為 4，所以答案為「4」。",
      "steps": [
        "分解 (t-4)(t-10)=0",
        "比較兩個非負時間，較早為 4"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": false,
          "reason": "是第二次零點。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "是兩根中點，不是零點。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "根為 4、10，較早者是 4。"
        },
        {
          "choice": "40",
          "truth": false,
          "reason": "常數項不是時間。"
        }
      ],
      "misconceptionTarget": "求出兩根後未比較先後",
      "prerequisiteSkillIds": [
        "quadratic-consecutive-product"
      ],
      "estimatedTimeSec": 95,
      "unitCheck": "t 使用題目時間單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "4<10。",
      "difficultyReason": "根的排序與事件語意。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為「第一次」要求在兩個合法根中比較時間順序，不能只列解集。",
      "authoringIntent": "求第一次警示時間",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f58b2992103b83eaf0a09dc5abf9575aadd6b66af39d5cde4e7d53f817a2b270"
    },
    {
      "questionId": "u13-s015-v011",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "lockedSkillOrder": 15,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某報告解 x²=6x 時先除以 x，得到 x=6。審核意見何者正確？",
      "givenConditions": "x 可能為 0。",
      "target": "審核解題方法與漏根",
      "choices": [
        "報告漏掉 x=0",
        "報告完全正確",
        "報告應改成只有 x=0",
        "方程式沒有實數根"
      ],
      "answerIndex": 0,
      "explanation": "不除以 x，先移項提因式；零乘積得 0、6，所以答案為「報告漏掉 x=0」。",
      "steps": [
        "不除以 x，先移項提因式",
        "零乘積得 0、6"
      ],
      "optionAnalysis": [
        {
          "choice": "報告漏掉 x=0",
          "truth": true,
          "reason": "移項得 x(x-6)=0，根為 0、6；除以 x 假設 x≠0。"
        },
        {
          "choice": "報告完全正確",
          "truth": false,
          "reason": "x=0 也使原式成立。"
        },
        {
          "choice": "報告應改成只有 x=0",
          "truth": false,
          "reason": "x=6 同樣成立。"
        },
        {
          "choice": "方程式沒有實數根",
          "truth": false,
          "reason": "0、6 都是實根。"
        }
      ],
      "misconceptionTarget": "不當除以未知數",
      "prerequisiteSkillIds": [
        "quadratic-consecutive-product"
      ],
      "estimatedTimeSec": 100,
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "報告只列一根不完整。",
      "difficultyReason": "方法批判型素養。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為題目要求評估一份解題報告，不只算答案；必須指出除法隱含假設造成的漏根。",
      "authoringIntent": "審核解題方法與漏根",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9e9265a956523c48ee90e4b6b7b1765f921d19322bfee1d66a4fb3d68a8cf9f8"
    },
    {
      "questionId": "u13-s015-v012",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "lockedSkillOrder": 15,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "某方案要求正整數 n 滿足 n(n-3)=40，且每組至少 5 人。n 為何？",
      "givenConditions": "n∈正整數且 n-3≥5。",
      "target": "求符合所有規則的 n",
      "choices": [
        "-5",
        "8",
        "5",
        "10"
      ],
      "answerIndex": 1,
      "explanation": "n²-3n-40=(n-8)(n+5)=0；根 8、-5；檢查 n-3≥5，n=8 剛好每組 5，所以答案為「8」。",
      "steps": [
        "n²-3n-40=(n-8)(n+5)=0",
        "根 8、-5；檢查 n-3≥5，n=8 剛好每組 5"
      ],
      "optionAnalysis": [
        {
          "choice": "-5",
          "truth": false,
          "reason": "此值為負，不符合正整數限制。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "方程式根為 8、-5；正整數且 n-3≥5，只有 8。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "5·2=10，不是 40。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "10·7=70。"
        }
      ],
      "misconceptionTarget": "只看正根不驗附加下限",
      "prerequisiteSkillIds": [
        "quadratic-consecutive-product"
      ],
      "estimatedTimeSec": 110,
      "unitCheck": "n 為人數或組數的整數參數。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "n=8 位於邊界並允許等號。",
      "difficultyReason": "多重限制與邊界。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為除二次方程式外還有「每組至少 5 人」的邊界條件，需確認等號可接受。",
      "authoringIntent": "求符合所有規則的 n",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9cd85c68640eda684d59da3fb4b2106f467bafa432e63fd15bdc4933ad2c0bf0"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u13-s015-cr001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "svg",
      "figureId": "u13-fig-seating-array",
      "prompt": "某活動有 n 排座位，每排 n+2 個，共 48 個座位。n 為正整數。求排數與每排座位數。",
      "requiredWork": [
        "從圖文辨認兩個乘數。",
        "列方程式。",
        "解並套正整數。",
        "回答兩個目標量。"
      ],
      "fullCreditSolution": [
        "排數 n，每排 n+2，所以 n(n+2)=48。",
        "n²+2n-48=0=(n-6)(n+8)。",
        "n=6 或 -8，排數取正，故有 6 排，每排 8 個座位。"
      ],
      "alternativeSolutions": [
        "可由 48 的因數對找相差 2 的 6、8，再核對哪一個是排數。"
      ],
      "reasoningSteps": [
        "圖示提供方向角色。",
        "負排數排除。",
        "求 n 後還要算 n+2。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "方程式與解完整，回答 6 排、每排 8 個。"
        },
        {
          "score": 2,
          "criteria": "答案正確但只回答其中一個目標，或列式略省。"
        },
        {
          "score": 1,
          "criteria": "列 n(n+2)=48 正確但解錯，或只由因數對猜中。"
        },
        {
          "score": 0,
          "criteria": "把總座位列成 n+(n+2)。"
        }
      ],
      "partialCreditRules": [
        "只答 n=6，因未回答每排數，最高 2 分。",
        "「個」或「席」可接受。"
      ],
      "followThroughPolicy": "若負根排除正確但 n+2 算錯，給 2 分。",
      "unitNotationRules": [
        "排數單位為排，座位數為個。"
      ],
      "answerOnlyPolicy": "只寫「6、8」且未標角色，最多 1 分。",
      "commonErrors": [
        "把每排寫 2n。",
        "答 8 排、每排 6，未遵照 n 的角色。"
      ],
      "independentReview": {
        "derivedResult": "6 排，每排 8 個座位。",
        "ambiguity": "圖不按比例，只依標示；角色明確。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "18ef352ae64b09f6af1afe0a4f068ff0cc990530ae64b7f03ab142342ed656a4"
    },
    {
      "questionId": "u13-s015-cr002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-literacy",
      "skillId": "quadratic-literacy",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "某票價方案有 n 人參加，每人票價為 80-n 元，總收入為 1200 元。場地規定 0<n≤30，且 n 為整數。求可接受的人數。",
      "requiredWork": [
        "建立收入方程。",
        "求所有代數根。",
        "逐一套用整數與容量限制。",
        "驗算收入。"
      ],
      "fullCreditSolution": [
        "收入為 n(80-n)，故 n(80-n)=1200。",
        "整理 n²-80n+1200=0。",
        "Δ=6400-4800=1600，n=(80±40)/2，得 20 或 60。",
        "場地要求 n≤30，所以只接受 n=20。",
        "驗算每人 60 元，20×60=1200 元。"
      ],
      "alternativeSolutions": [
        "可因式分解 (n-20)(n-60)=0。"
      ],
      "reasoningSteps": [
        "同一 n 同時影響人數與單價。",
        "先求根再套政策。",
        "不能把容量上限當根。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "模型、根 20/60、容量篩選與收入驗算全部正確。"
        },
        {
          "score": 2,
          "criteria": "答案 20 正確且列式正確，但未列另一代數根或驗算略省。"
        },
        {
          "score": 1,
          "criteria": "建立 n(80-n)=1200 正確，但求根或容量判斷錯。"
        },
        {
          "score": 0,
          "criteria": "把收入列成 n+80-n 或直接以 1200÷80。"
        }
      ],
      "partialCreditRules": [
        "n=60 雖代數成立且票價 20 元，但超容量，必須排除。",
        "n 必須為整數。"
      ],
      "followThroughPolicy": "若判別式或分解有單純算術錯，保留正確模型 1 分；若後續用錯根仍不可給答案分。",
      "unitNotationRules": [
        "人數為人；票價與收入為元。"
      ],
      "answerOnlyPolicy": "只寫 20 人無模型，最多 1 分。",
      "commonErrors": [
        "忘記單價隨 n 變化。",
        "把 n≤30 當 n=30。",
        "保留 60。"
      ],
      "independentReview": {
        "derivedResult": "可接受人數為 20 人。",
        "ambiguity": "容量與整數限制清楚，唯一可行根。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "19fd44bc7114d2c3d17b5f6f8c4df668c0d48915b6649e37a26cca4eb780b7dd"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u13-s015-v001",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "contentSha256": "68ec1127d58260fb69cad3a6f00730b4a9252bc611fa4e2e660bc3cc3cf3b9f6",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：6 排、每排 8 人，乘積 48；角色與圖中水平標籤一致",
      "derivedAnswer": "8 人",
      "storedAnswer": "8 人",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「活動座位依圖示排成 n 排，每排 n+2 人，共 48 人，且 n 為正整數。每排有幾人？」的要求量已明示為「整合圖示求每排人數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：n∈正整數。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：圖不按比例，只依標示；目標是每排數。",
        "choices": "四選項逐一代入或反算；正確項理由為「n(n+2)=48 得 n=6，因此每排 n+2=8 人。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "排數單位為排，每排人數單位為人。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "圖文建模後需轉換未知數角色。",
      "literacyNecessityReview": "圖示分別標示垂直的排數與水平的每排人數，必須辨認角色才能回答 n+2 而不是 n。",
      "reviewerNote": "獨立重算「活動座位依圖示排成 n 排，每排 n+2 人，共 48 人，且 n 為正整數。每排有幾人？」：獨立由原始條件重算：6 排、每排 8 人，乘積 48；角色與圖中水平標籤一致。再逐項核對四個選項，只有「8 人」同時符合方程式與限制；圖不按比例，只依標示；目標是每排數。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "5c33d981e69ea1baee4cfbfc4ec963582eec42b6b0a049bce6d555fdae3825de"
    },
    {
      "questionId": "u13-s015-v002",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "contentSha256": "47da904cec04a18e110f46053898984649d49f581dd2d2e381e2b4c72b22ec3a",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：20×30=600；30×20=600 但 30 超容量",
      "derivedAnswer": "20",
      "storedAnswer": "20",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「某方案有 n 位使用者，每人費用為 50-n 元，總收入 600 元，且系統容量 n≤25。n 為何？」的要求量已明示為「求容量內使用者數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：n 為正整數且≤25。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：每人費用需非負，兩根均非負但容量再篩選。",
        "choices": "四選項逐一代入或反算；正確項理由為「n(50-n)=600，根 20、30，容量保留 20。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "人數為人，費用與收入為元。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "價格隨人數變化。",
      "literacyNecessityReview": "單價不是固定值，必須把人數同時代入單價與容量規則。",
      "reviewerNote": "獨立重算「某方案有 n 位使用者，每人費用為 50-n 元，總收入 600 元，且系統容量 n≤25。n 為何？」：獨立由原始條件重算：20×30=600；30×20=600 但 30 超容量。再逐項核對四個選項，只有「20」同時符合方程式與限制；每人費用需非負，兩根均非負但容量再篩選。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "86438e83d1f4dab62a4a7d51e8286fff2dd07c08317296d3d25902e3969fe60d"
    },
    {
      "questionId": "u13-s015-v003",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "contentSha256": "22ef44e70caeb868da46c94d9dc05c20efabc8a6a3146ee68681ab8836e72c6d",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：h(9)=-81+72+9=0；t=-1 排除",
      "derivedAnswer": "9 秒",
      "storedAnswer": "9 秒",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「無人機高度模型為 h=-t²+8t+9。起飛後再次到地面時 t 為何？」的要求量已明示為「求起飛後落地時間」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：t≥0 且問再次到地面。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：t=0 時 h=9，不是地面。",
        "choices": "四選項逐一代入或反算；正確項理由為「令 h=0，根 t=9、-1；起飛後取正時間。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "t 秒，h 為高度單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "模型零點與時間語意。",
      "literacyNecessityReview": "「起飛後再次」排除負時間並要求把高度模型的零點解釋為事件時間。",
      "reviewerNote": "獨立重算「無人機高度模型為 h=-t²+8t+9。起飛後再次到地面時 t 為何？」：獨立由原始條件重算：h(9)=-81+72+9=0；t=-1 排除。再逐項核對四個選項，只有「9 秒」同時符合方程式與限制；t=0 時 h=9，不是地面。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "4b6a6e2acbb31ade025282f2a941d0d19e63ec98be3000aa9e42b09c687ddb0f"
    },
    {
      "questionId": "u13-s015-v004",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "contentSha256": "43d1edf42f0b9c15572e6828ed4229ef2e1cdfa401dac386b49f12ce9c3d699a",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：尺寸 8×12=96；x>0 成立",
      "derivedAnswer": "6",
      "storedAnswer": "6",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「某園區外框尺寸為 x+2 公尺與 x+6 公尺，總面積 96 平方公尺，x>0。x 為何？」的要求量已明示為「求外框基準量」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：兩個尺寸均需正。",
        "choices": "四選項逐一代入或反算；正確項理由為「(x+2)(x+6)=96，根 6、-14，取正。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "公尺與平方公尺。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "圖形與範圍。",
      "literacyNecessityReview": "外框圖示中的兩個不同增加量決定方程式，正值限制決定可用根。",
      "reviewerNote": "獨立重算「某園區外框尺寸為 x+2 公尺與 x+6 公尺，總面積 96 平方公尺，x>0。x 為何？」：獨立由原始條件重算：尺寸 8×12=96；x>0 成立。再逐項核對四個選項，只有「6」同時符合方程式與限制；兩個尺寸均需正。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "576fbb524a3415b87a0bb6fee2006041e1ea5827514eede3f1ff7ec2e67e5446"
    },
    {
      "questionId": "u13-s015-v005",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "contentSha256": "c9af881b30f6a56a79bbbe338b417d478b78c0f2c46cde89c6c60727672e4553",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：不需粗略猜：2√5>4 且 <5；所以較小根< -1，較大根>7，均不在 [0,5]",
      "derivedAnswer": "0 個",
      "storedAnswer": "0 個",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「評分模型為 (x-3)²=20，規定 0≤x≤5。符合規定的 x 有幾個？」的要求量已明示為「求區間內解的個數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：閉區間 [0,5]。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：兩端也不滿足方程式。",
        "choices": "四選項逐一代入或反算；正確項理由為「根約為 -1.47、7.47，兩者都不在區間。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "近似只用於區間判斷；精確根保留 3±2√5。",
      "difficultyReason": "無可接受根的情境。",
      "literacyNecessityReview": "規定區間可能排除全部代數根，需明確判斷「無符合方案」。",
      "reviewerNote": "獨立重算「評分模型為 (x-3)²=20，規定 0≤x≤5。符合規定的 x 有幾個？」：獨立由原始條件重算：不需粗略猜：2√5>4 且 <5；所以較小根< -1，較大根>7，均不在 [0,5]。再逐項核對四個選項，只有「0 個」同時符合方程式與限制；兩端也不滿足方程式。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "eb5e3b6453e9ebcd1ec6dc7413cbc3731e32b731b29f0618c92dcd12983d1311"
    },
    {
      "questionId": "u13-s015-v006",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "contentSha256": "10dbed50212cbcb2bb03901c66b9533f9f478564a792bfefbbd8e3ffb1b3d02c",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：原時間 4 小時，新時間 3 小時；差 1 小時，驗證 45",
      "derivedAnswer": "45 km/h",
      "storedAnswer": "45 km/h",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「180 km 行程中，速度增加 15 km/h 後少 1 小時。原速度為何？」的要求量已明示為「求原速度」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：v>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：分母 v、v+15 不為 0。",
        "choices": "四選項逐一代入或反算；正確項理由為「180/v-180/(v+15)=1，化簡得 v=45 或 -60，取正。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "km、km/h、h。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "分式素養建模。",
      "literacyNecessityReview": "距離固定、速度改變與節省時間三項資訊共同形成分式後的二次方程式。",
      "reviewerNote": "獨立重算「180 km 行程中，速度增加 15 km/h 後少 1 小時。原速度為何？」：獨立由原始條件重算：原時間 4 小時，新時間 3 小時；差 1 小時，驗證 45。再逐項核對四個選項，只有「45 km/h」同時符合方程式與限制；分母 v、v+15 不為 0。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "7bd9454e677d35c21070006c47ef6810a549100257f98319575b6ee6d6e50484"
    },
    {
      "questionId": "u13-s015-v007",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "contentSha256": "c69c1eae4e9f1be3c1d20291042bb4d80f09d2e3a1218da8dc0be99815715daa",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：13²-18·13+65=0；5 也代數成立但不合政策",
      "derivedAnswer": "13",
      "storedAnswer": "13",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「生產模型 n²-18n+65=0 有兩個候選批量，政策規定 n≥10 且 n 為整數。應選哪個？」的要求量已明示為「求政策可接受批量」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：n∈整數且 n≥10。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：13 唯一。",
        "choices": "四選項逐一代入或反算；正確項理由為「根為 5、13，政策只接受 13。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "n 為批量件數。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "根與政策門檻。",
      "literacyNecessityReview": "政策下限不是方程式資訊，必須在求根後獨立篩選。",
      "reviewerNote": "獨立重算「生產模型 n²-18n+65=0 有兩個候選批量，政策規定 n≥10 且 n 為整數。應選哪個？」：獨立由原始條件重算：13²-18·13+65=0；5 也代數成立但不合政策。再逐項核對四個選項，只有「13」同時符合方程式與限制；13 唯一。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "14cc71e9df0eb85ac2b40b43abfaba027d39e52eca5db7ddaad82b39f496ac08"
    },
    {
      "questionId": "u13-s015-v008",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "contentSha256": "740fbe0cfce71e74f1a614b470e25a309c30c54df4abf48c66103f3a29e6e3a8",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：6×10-12=48，符合剩餘面積；另一根 -10 造成負邊長，排除",
      "derivedAnswer": "6",
      "storedAnswer": "6",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「一塊長方形材料寬 x、長 x+4，切去 12 平方單位後剩 48 平方單位。x 為何？」的要求量已明示為「求切除後尺寸」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：切除面積固定 12。",
        "choices": "四選項逐一代入或反算；正確項理由為「總面積 x(x+4)=60，整理得 x=6 或 -10，取正。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "面積使用平方單位，x 使用對應長度單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "多區域面積模型。",
      "literacyNecessityReview": "需把切除前總面積與切除後剩餘面積分開建模。",
      "reviewerNote": "獨立重算「一塊長方形材料寬 x、長 x+4，切去 12 平方單位後剩 48 平方單位。x 為何？」：獨立由原始條件重算：6×10-12=48，符合剩餘面積；另一根 -10 造成負邊長，排除。再逐項核對四個選項，只有「6」同時符合方程式與限制；切除面積固定 12。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "8a1ba951f30acc15dae8c81de2667dc1f42155a9644c6925c852c29f53e07df7"
    },
    {
      "questionId": "u13-s015-v009",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "contentSha256": "a2c189e0d84855dce180ff6259f3bbaaa3142d68a2f30c55a31984456089bf67",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：8 排、每排 13 個，共 104；條件完整",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「某活動有 x 排攤位、每排 x+5 個，共 104 個，且 x 為正整數。x 為何？」的要求量已明示為「求攤位排數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x∈正整數。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：每排 x+5。",
        "choices": "四選項逐一代入或反算；正確項理由為「x(x+5)=104，根 8、-13，取正。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "排數與攤位數為整數。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "大總量陣列。",
      "literacyNecessityReview": "排數與每排數量相依，不能以固定每排數直接相除。",
      "reviewerNote": "獨立重算「某活動有 x 排攤位、每排 x+5 個，共 104 個，且 x 為正整數。x 為何？」：獨立由原始條件重算：8 排、每排 13 個，共 104；條件完整。再逐項核對四個選項，只有「8」同時符合方程式與限制；每排 x+5。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "4e8bb7f538b654d83468baa894d2faa725fe8204993a0731c44dc9598692cd2f"
    },
    {
      "questionId": "u13-s015-v010",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "contentSha256": "f58b2992103b83eaf0a09dc5abf9575aadd6b66af39d5cde4e7d53f817a2b270",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：代入 4 與 10 均使模型為 0；題目要求較早，因此選 4",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「電池警示模型為 t²-14t+40=0。系統會在較早的零點發出第一次警示。第一次警示時間為何？」的要求量已明示為「求第一次警示時間」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：t≥0 隱含時間，兩根皆可但問較早。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：4<10。",
        "choices": "四選項逐一代入或反算；正確項理由為「根為 4、10，較早者是 4。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "t 使用題目時間單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "根的排序與事件語意。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為「第一次」要求在兩個合法根中比較時間順序，不能只列解集。",
      "reviewerNote": "獨立重算「電池警示模型為 t²-14t+40=0。系統會在較早的零點發出第一次警示。第一次警示時間為何？」：獨立由原始條件重算：代入 4 與 10 均使模型為 0；題目要求較早，因此選 4。再逐項核對四個選項，只有「4」同時符合方程式與限制；4<10。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "84d3478bdaa8d115bc88672d77a151f18115bf209d540151141a74376bdd729a"
    },
    {
      "questionId": "u13-s015-v011",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "contentSha256": "9e9265a956523c48ee90e4b6b7b1765f921d19322bfee1d66a4fb3d68a8cf9f8",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：直接驗證 0²=6·0、6²=6·6；兩值均成立",
      "derivedAnswer": "報告漏掉 x=0",
      "storedAnswer": "報告漏掉 x=0",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「某報告解 x²=6x 時先除以 x，得到 x=6。審核意見何者正確？」的要求量已明示為「審核解題方法與漏根」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x 可能為 0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：報告只列一根不完整。",
        "choices": "四選項逐一代入或反算；正確項理由為「移項得 x(x-6)=0，根為 0、6；除以 x 假設 x≠0。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "本題沒有需要換算的物理單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "方法批判型素養。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為題目要求評估一份解題報告，不只算答案；必須指出除法隱含假設造成的漏根。",
      "reviewerNote": "獨立重算「某報告解 x²=6x 時先除以 x，得到 x=6。審核意見何者正確？」：獨立由原始條件重算：直接驗證 0²=6·0、6²=6·6；兩值均成立。再逐項核對四個選項，只有「報告漏掉 x=0」同時符合方程式與限制；報告只列一根不完整。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "dea22cc7df65b217f453bb491441abeaf2bda53204391fa70fd1a1dad8e8cb3c"
    },
    {
      "questionId": "u13-s015-v012",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "contentSha256": "9cd85c68640eda684d59da3fb4b2106f467bafa432e63fd15bdc4933ad2c0bf0",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：代入 8 得 8·5=40；符合正整數與每組至少 5",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「某方案要求正整數 n 滿足 n(n-3)=40，且每組至少 5 人。n 為何？」的要求量已明示為「求符合所有規則的 n」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：n∈正整數且 n-3≥5。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：n=8 位於邊界並允許等號。",
        "choices": "四選項逐一代入或反算；正確項理由為「方程式根為 8、-5；正整數且 n-3≥5，只有 8。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "n 為人數或組數的整數參數。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "多重限制與邊界。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為除二次方程式外還有「每組至少 5 人」的邊界條件，需確認等號可接受。",
      "reviewerNote": "獨立重算「某方案要求正整數 n 滿足 n(n-3)=40，且每組至少 5 人。n 為何？」：獨立由原始條件重算：代入 8 得 8·5=40；符合正整數與每組至少 5。再逐項核對四個選項，只有「8」同時符合方程式與限制；n=8 位於邊界並允許等號。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "4f67e81c2cbbf24f05f83fecd30f16123e4939b8184dcc83ee321d4fab850af2"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u13-fig-seating-array",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "svgPath": "figures/u13/u13-fig-seating-array.svg",
      "canvas": {
        "width": 640,
        "height": 400,
        "viewBox": "0 0 640 400"
      },
      "notToScale": true,
      "visualInferenceWarning": "圖形未按比例繪製，所有計算只能使用標示的代數式與數值。",
      "altText": "座位陣列用圓與省略號表示；共有 n 排，每排 n 加 2 個座位，總數 48 個，圖形未按比例。",
      "drawingSpec": {
        "coordinateSystem": "原點左上，座位以圓形符號排列。",
        "shownRows": [
          105,
          180,
          300
        ],
        "shownColumns": [
          185,
          255,
          395,
          465
        ],
        "horizontalEllipses": [
          [
            325,
            112
          ],
          [
            325,
            187
          ],
          [
            325,
            307
          ]
        ],
        "verticalEllipsis": [
          325,
          265
        ],
        "rowLabel": "共 n 排",
        "columnLabel": "每排 n＋2 個",
        "totalLabel": "總數 48 個",
        "strokeRules": "座位為空心圓，省略部分以 ⋯ 與 ⋮ 表示。",
        "scaleRule": "示意圖不代表實際 n 值。",
        "mobileRule": "縮圖時 n、n＋2、48 仍至少 18 px 等效可讀。",
        "answerLeakageRule": "不畫出完整 6×8 陣列，不顯示 6 或 8。"
      },
      "svgAssertions": [
        "<title",
        "<desc",
        "role=\"img\"",
        "每排 n＋2 個",
        "共 n 排",
        "總數 48 個",
        "未按比例"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "pass",
        "answerLeakage": "pass",
        "manualVisualInspection": "pass",
        "reviewNote": "縮圖檢查可清楚辨識行與列的角色差異；使用省略號避免由數圖直接取得答案，且總數、排數與每排數量的代數標籤均無遮蔽。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ea642918cdff9fc066e133b5f90beeca9f21bc0b41bcee843cb80610d8445ddd"
    },
    {
      "figureId": "u13-fig-literacy-layout",
      "unitId": "u13",
      "skillId": "quadratic-literacy",
      "svgPath": "figures/u13/u13-fig-literacy-layout.svg",
      "canvas": {
        "width": 640,
        "height": 400,
        "viewBox": "0 0 640 400"
      },
      "notToScale": true,
      "visualInferenceWarning": "圖形未按比例繪製，所有計算只能使用標示的代數式與數值。",
      "altText": "園區外框為長方形，水平邊標示 x 加 6 公尺，垂直邊標示 x 加 2 公尺，總面積 96 平方公尺；內部虛線僅為配置示意。",
      "drawingSpec": {
        "coordinateSystem": "原點左上。",
        "outerRectangle": {
          "x": 130,
          "y": 70,
          "width": 390,
          "height": 250
        },
        "innerGuide": {
          "x": 205,
          "y": 125,
          "width": 240,
          "height": 140,
          "dash": "10 8"
        },
        "horizontalLabel": "x＋6 m",
        "verticalLabel": "x＋2 m",
        "areaLabel": "總面積 96 m²",
        "guideLabel": "內部虛線僅示意配置",
        "strokeRules": "外框實線 4 px，內部導引虛線 3 px。",
        "scaleRule": "不按比例；內部虛線不提供任何可計算尺寸。",
        "mobileRule": "主要標籤縮至半寬仍清楚。",
        "answerLeakageRule": "不顯示 x=6 或實際外尺寸 12、8。"
      },
      "svgAssertions": [
        "<title",
        "<desc",
        "role=\"img\"",
        "x＋6 m",
        "x＋2 m",
        "總面積 96 m²",
        "內部虛線僅示意配置",
        "未按比例"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "pass",
        "answerLeakage": "pass",
        "manualVisualInspection": "pass",
        "reviewNote": "人工檢查虛線不會被誤讀成第二個面積條件，外框兩邊標籤位置清楚，且圖中沒有 x=6 或 8×12 的答案提示。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9b13cf2f5404ceae70003ea2151c8a04f15cb2522609a0178408ca5acad3c251"
    }
  ]
};
