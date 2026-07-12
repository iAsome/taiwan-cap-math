// Generated only by serialization from approved reviewed source. Do not edit.
export const sourceDigest="493af84fff873aa4a42ae59b3e748077d8466bf656486dc5b589e5c9f2c468a5";
export const skillBundle={
  "lecture": {
    "lectureId": "u20-s014-lecture-r1",
    "unitId": "u20",
    "numericUnitId": 20,
    "topicId": "u20-centers",
    "skillId": "triangle-center-word",
    "skillSlot": "s014",
    "lockedSkillTitle": "三角形的心應用",
    "title": "三角形的心應用：先辨認服務點邊面積或高度",
    "audience": "臺灣國中零基礎至會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能由文字需求選擇外心、內心、重心或垂心。",
      "能評估中心是否可能落在區域外。",
      "能辨認均勻、垂直距離與不共線等隱藏前提。"
    ],
    "prerequisites": [
      {
        "skillId": "orthocenter-identify",
        "requiredLevel": "能使用該技能的核心定義與基本推理。"
      }
    ],
    "prerequisiteBridge": "若無單元內先備技能，從已知、圖形標記與國中基本線角概念開始；若有先備技能，先回想「orthocenter-identify」再進入本節。",
    "glossary": [
      {
        "term": "服務對象",
        "definition": "需求中要等距、平衡或對齊的實際物件。"
      },
      {
        "term": "模型假設",
        "definition": "把真實問題化成幾何中心問題時必須成立的條件。"
      },
      {
        "term": "可行域",
        "definition": "實務上允許設置設備的範圍。"
      }
    ],
    "notation": [
      {
        "symbol": "頂點等距→外心",
        "meaning": "基地台、入口、村落等離散點。"
      },
      {
        "symbol": "邊等距→內心",
        "meaning": "牆、邊界、道路邊線等。"
      },
      {
        "symbol": "均勻平衡→重心",
        "meaning": "面積或質量平均。"
      },
      {
        "symbol": "三高共點→垂心",
        "meaning": "高度基準或垂直結構線。"
      }
    ],
    "conceptNarrative": [
      "讀到『中心』不能立即作答，因一般三角形有多種不同中心。第一步是找需求中的對象：三個點、三條邊、均勻面積，或三條高。",
      "選對中心後還要檢查位置與假設。鈍角三角形的外心可能在可行域外；重心作平衡點要求材質均勻；外心要求三個站點不共線。",
      "真實最佳位置可能還受道路、成本與權重影響。若條件超出幾何中心模型，應明確說明限制，而不是硬套。"
    ],
    "formalDefinitions": [
      {
        "name": "功能配對",
        "statement": "頂點等距外心、邊距等距內心、均勻平衡重心、高線交會垂心。"
      },
      {
        "name": "模型審查",
        "statement": "選出中心後，檢查角型、均勻性、非退化與可行域限制。"
      }
    ],
    "formulas": [
      {
        "formula": "文字需求 → 幾何對象 → 特殊線 → 中心",
        "conditions": [
          "每一步都能由情境明確對應"
        ],
        "meaning": "應用題轉譯流程。"
      }
    ],
    "nonApplicableCases": [
      "『最中央』不是足夠的數學規格。",
      "重心不是到三頂點等距點。",
      "外心數學上存在不代表實務上一定能設置。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "圈出要比較的對象。",
        "check": "是入口點還是牆線？"
      },
      {
        "step": 2,
        "instruction": "翻成幾何條件。",
        "check": "等距是點距、垂距，還是平衡？"
      },
      {
        "step": 3,
        "instruction": "選擇對應中心。",
        "check": "特殊線是否匹配？"
      },
      {
        "step": 4,
        "instruction": "檢查隱藏前提與實務限制。",
        "check": "角型、均勻、共線、可行域是否影響？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "三個村落等距基地台。",
        "solutionSteps": [
          "村落是頂點。",
          "到頂點等距。"
        ],
        "answer": "外心。"
      },
      {
        "exampleId": "L2",
        "prompt": "三角形公園到三面圍牆等距。",
        "solutionSteps": [
          "圍牆是邊。",
          "距離取垂距。"
        ],
        "answer": "內心。"
      },
      {
        "exampleId": "L3",
        "prompt": "均勻招牌吊點。",
        "solutionSteps": [
          "質量均勻。",
          "面積平衡。"
        ],
        "answer": "重心。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "看到圓就選外心。",
        "why": "內切圓的圓心是內心。",
        "correction": "看圓通過頂點還是與邊相切。"
      },
      {
        "mistake": "看到等距就選外心。",
        "why": "可能是到邊等距。",
        "correction": "先確認等距對象。"
      },
      {
        "mistake": "把幾何重心當物流最佳點。",
        "why": "需求權重可能不同。",
        "correction": "檢查均勻或等權假設。"
      }
    ],
    "selfCheck": [
      "需求中的物件是點、線還是面？",
      "距離是否為垂直距離？",
      "材料或需求是否均勻？",
      "中心位置是否落在允許區域？"
    ],
    "summary": [
      "先分類服務對象，再選中心。",
      "外心服務頂點，內心服務邊界。",
      "重心處理均勻平衡，垂心處理高度線。",
      "應用必須審查模型假設。"
    ],
    "connections": {
      "previous": "先備：orthocenter-identify",
      "next": [
        "最後一技能會整合圖例、證明、反例與規格審查。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u20-s014-v001",
        "u20-s014-v002",
        "u20-s014-v003",
        "u20-s014-v004",
        "u20-s014-v005",
        "u20-s014-v006",
        "u20-s014-v007",
        "u20-s014-v008",
        "u20-s014-v009",
        "u20-s014-v010",
        "u20-s014-v011",
        "u20-s014-v012"
      ],
      "constructedResponseIds": [
        "u20-s014-cr001",
        "u20-s014-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "skillSpecificEvidence": "講義不把中心當萬用最佳化答案，明確納入模型與可行域限制。",
      "reviewerDecision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "legacyContentUsed": false,
    "contentSha256": "edaefbfc5ea1a4a99ff170b4837f2e466e8e150fee4f156941c1970fd1e21160"
  },
  "mcQuestions": [
    {
      "questionId": "u20-s014-v001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "要找一點，使它到三角形三個頂點距離相等，應找哪一個心？",
      "givenConditions": [],
      "target": "依文字需求選擇外心",
      "choices": [
        "內心",
        "外心",
        "重心",
        "垂心"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "到三頂點等距是外心的定義性質。",
        "result": "外心"
      },
      "explanation": "到三頂點等距是外心的定義性質。",
      "steps": [
        "辨認服務對象是三個頂點",
        "對應三邊垂直平分線",
        "選外心"
      ],
      "optionAnalysis": [
        {
          "choice": "內心",
          "truth": false,
          "reason": "到三邊等距。"
        },
        {
          "choice": "外心",
          "truth": true,
          "reason": "依獨立推導可得到此結果；到三頂點等距是外心的定義性質。"
        },
        {
          "choice": "重心",
          "truth": false,
          "reason": "三中線交點。"
        },
        {
          "choice": "垂心",
          "truth": false,
          "reason": "三高交點。"
        }
      ],
      "misconceptionTarget": "未分辨等距對象是頂點或邊。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「依文字需求選擇外心」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「外心」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：依文字需求選擇外心。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "5d3b58cda1e933806c0f411184dfb463cf82a301a7cc657986de984d76d75284"
    },
    {
      "questionId": "u20-s014-v002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "要找一點，使它到三角形三邊的最短距離相等，應找哪一個心？",
      "givenConditions": [],
      "target": "依邊距需求選擇內心",
      "choices": [
        "外心",
        "重心",
        "內心",
        "垂心"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "點到直線的最短距離是垂直距離；到三邊垂距相等的點是內心。",
        "result": "內心"
      },
      "explanation": "點到直線的最短距離是垂直距離；到三邊垂距相等的點是內心。",
      "steps": [
        "辨認服務對象是三邊",
        "最短距離為垂距",
        "選內心"
      ],
      "optionAnalysis": [
        {
          "choice": "外心",
          "truth": false,
          "reason": "到三頂點等距。"
        },
        {
          "choice": "重心",
          "truth": false,
          "reason": "與三邊等距無固定關係。"
        },
        {
          "choice": "內心",
          "truth": true,
          "reason": "依獨立推導可得到此結果；點到直線的最短距離是垂直距離；到三邊垂距相等的點是內心。"
        },
        {
          "choice": "垂心",
          "truth": false,
          "reason": "是高的交點。"
        }
      ],
      "misconceptionTarget": "看到距離相等就一律選外心。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「依邊距需求選擇內心」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「內心」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：依邊距需求選擇內心。",
      "literacyContextNecessity": null,
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "ecbf0fb28477c81d52081e324e465d4485450bbff0a2d47211c7f3702fab4954"
    },
    {
      "questionId": "u20-s014-v003",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "basic",
      "itemType": "mc",
      "prompt": "均勻三角形薄板的理想單點平衡位置是哪一個心？",
      "givenConditions": [],
      "target": "依平衡需求選擇重心",
      "choices": [
        "重心",
        "外心",
        "內心",
        "垂心"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "均勻三角形薄板的質量中心位於三中線交點，即重心。",
        "result": "重心"
      },
      "explanation": "均勻三角形薄板的質量中心位於三中線交點，即重心。",
      "steps": [
        "辨認均勻薄板",
        "需求是平衡",
        "選重心"
      ],
      "optionAnalysis": [
        {
          "choice": "重心",
          "truth": true,
          "reason": "依獨立推導可得到此結果；均勻三角形薄板的質量中心位於三中線交點，即重心。"
        },
        {
          "choice": "外心",
          "truth": false,
          "reason": "只保證到頂點等距。"
        },
        {
          "choice": "內心",
          "truth": false,
          "reason": "只保證到邊等距。"
        },
        {
          "choice": "垂心",
          "truth": false,
          "reason": "無一般平衡性質。"
        }
      ],
      "misconceptionTarget": "把任何幾何中心都視為平衡點。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「依平衡需求選擇重心」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「重心」符合全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：依平衡需求選擇重心。",
      "literacyContextNecessity": "薄板均勻是把幾何重心視為質量中心的必要條件。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "593c19d83ca9a96831be95c9cf23d01c7aee532fdb10ac0a8dd10e41f3520f24"
    },
    {
      "questionId": "u20-s014-v004",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "三個村落形成鈍角三角形，要設等距基地台。應選哪個點，且位置可能如何？",
      "givenConditions": [],
      "target": "結合需求與角型判斷中心位置",
      "choices": [
        "內心，且一定在外",
        "重心，且可能在外",
        "垂心，且到三站等距",
        "外心，且可能位於三角形外"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "等距對象是三村落頂點，所以選外心；鈍角三角形外心在三角形外。",
        "result": "外心，且可能位於三角形外"
      },
      "explanation": "等距對象是三村落頂點，所以選外心；鈍角三角形外心在三角形外。",
      "steps": [
        "需求為到三頂點等距",
        "選外心",
        "鈍角決定外心在外部"
      ],
      "optionAnalysis": [
        {
          "choice": "內心，且一定在外",
          "truth": false,
          "reason": "內心到邊等距且在內部。"
        },
        {
          "choice": "重心，且可能在外",
          "truth": false,
          "reason": "重心在內部。"
        },
        {
          "choice": "垂心，且到三站等距",
          "truth": false,
          "reason": "垂心不保證頂點等距。"
        },
        {
          "choice": "外心，且可能位於三角形外",
          "truth": true,
          "reason": "依獨立推導可得到此結果；等距對象是三村落頂點，所以選外心；鈍角三角形外心在三角形外。"
        }
      ],
      "misconceptionTarget": "只選對中心，未考慮位置風險。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「結合需求與角型判斷中心位置」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「外心，且可能位於三角形外」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：結合需求與角型判斷中心位置。",
      "literacyContextNecessity": "村落鈍角配置會讓等距基地台落區域外，直接影響規劃。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "a791911c345121923ea2d1f703eea77c406360f51d1c6166bfa146a579a7f9e0"
    },
    {
      "questionId": "u20-s014-v005",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "三角形廣場要設一個圓形舞台，要求圓與三邊界都相切。圓心應設在哪裡？",
      "givenConditions": [],
      "target": "依內切圓需求選擇內心",
      "choices": [
        "外心",
        "重心",
        "內心",
        "垂心"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "與三邊相切要求圓心到三邊垂直距離相等，因此是內心。",
        "result": "內心"
      },
      "explanation": "與三邊相切要求圓心到三邊垂直距離相等，因此是內心。",
      "steps": [
        "圓與邊相切",
        "半徑垂直邊",
        "三垂距相等"
      ],
      "optionAnalysis": [
        {
          "choice": "外心",
          "truth": false,
          "reason": "外接圓通過三頂點。"
        },
        {
          "choice": "重心",
          "truth": false,
          "reason": "不保證可同時相切。"
        },
        {
          "choice": "內心",
          "truth": true,
          "reason": "依獨立推導可得到此結果；與三邊相切要求圓心到三邊垂直距離相等，因此是內心。"
        },
        {
          "choice": "垂心",
          "truth": false,
          "reason": "高的交點不提供相切條件。"
        }
      ],
      "misconceptionTarget": "看到圓就直接選外心。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「依內切圓需求選擇內心」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「內心」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：依內切圓需求選擇內心。",
      "literacyContextNecessity": "舞台必須同時貼住三邊界，圓與邊相切條件決定中心。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "faee0dcec56dc37ea8aa04f5939b4c9a39efecf496626570aad9520d04e40ce1"
    },
    {
      "questionId": "u20-s014-v006",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "standard",
      "itemType": "mc",
      "prompt": "三角形紙片材質均勻，要用針穿過一點使其較容易平衡，應先標哪一點？",
      "givenConditions": [],
      "target": "在手作情境選擇重心",
      "choices": [
        "重心",
        "外心",
        "內心",
        "垂心"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "均勻面積的平衡點是重心。",
        "result": "重心"
      },
      "explanation": "均勻面積的平衡點是重心。",
      "steps": [
        "材質均勻",
        "單點支撐",
        "三中線交點"
      ],
      "optionAnalysis": [
        {
          "choice": "重心",
          "truth": true,
          "reason": "依獨立推導可得到此結果；均勻面積的平衡點是重心。"
        },
        {
          "choice": "外心",
          "truth": false,
          "reason": "頂點等距與平衡無關。"
        },
        {
          "choice": "內心",
          "truth": false,
          "reason": "邊距等距與平衡無關。"
        },
        {
          "choice": "垂心",
          "truth": false,
          "reason": "高共點與平衡無關。"
        }
      ],
      "misconceptionTarget": "忽略均勻材質與面積分布。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「在手作情境選擇重心」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「重心」符合全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：在手作情境選擇重心。",
      "literacyContextNecessity": "紙片材質均勻是重心作為實際平衡點的模型前提。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "3c6adf84aef0512f84c153372fb50ae300e76ebd694c3f8a342d6791f52a8472"
    },
    {
      "questionId": "u20-s014-v007",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "三個感測器形成直角三角形。若控制站需到三點等距，哪個描述正確？",
      "givenConditions": [],
      "target": "綜合直角三角形與外心應用",
      "choices": [
        "控制站在直角頂點，距三點皆相等",
        "控制站在內心，距頂點皆相等",
        "控制站在重心，距三點皆為中線的一半",
        "控制站在斜邊中點，距三感測器皆為斜邊的一半"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "需選外心；直角三角形外心是斜邊中點，等距半徑為斜邊一半。",
        "result": "控制站在斜邊中點，距三感測器皆為斜邊的一半"
      },
      "explanation": "需選外心；直角三角形外心是斜邊中點，等距半徑為斜邊一半。",
      "steps": [
        "等距頂點→外心",
        "直角外心在斜邊中點",
        "半徑=斜邊/2"
      ],
      "optionAnalysis": [
        {
          "choice": "控制站在直角頂點，距三點皆相等",
          "truth": false,
          "reason": "直角頂點到自身距離0。"
        },
        {
          "choice": "控制站在內心，距頂點皆相等",
          "truth": false,
          "reason": "內心到邊等距。"
        },
        {
          "choice": "控制站在重心，距三點皆為中線的一半",
          "truth": false,
          "reason": "重心不平分中線且不到頂點等距。"
        },
        {
          "choice": "控制站在斜邊中點，距三感測器皆為斜邊的一半",
          "truth": true,
          "reason": "依獨立推導可得到此結果；需選外心；直角三角形外心是斜邊中點，等距半徑為斜邊一半。"
        }
      ],
      "misconceptionTarget": "將直角頂點的垂心誤作等距點。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「綜合直角三角形與外心應用」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「控制站在斜邊中點，距三感測器皆為斜邊的一半」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：綜合直角三角形與外心應用。",
      "literacyContextNecessity": "感測器配置為直角使服務半徑可由斜邊直接決定。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "245df3289ad7218ed064322b5489ee6718980f2735eee1d93b5863280931091a"
    },
    {
      "questionId": "u20-s014-v008",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "製作均勻三角形吊牌，沿一條中線量測定位重心。吊孔位置如何？",
      "givenConditions": [],
      "target": "將重心比例轉為製作尺寸",
      "choices": [
        "吊孔應在中線中點",
        "吊孔應距頂點到對邊中點的三分之二處",
        "吊孔應在任一垂足",
        "吊孔應距頂點四分之一中線"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "重心從頂點量起位於中線的2/3處，也就是距對邊中點1/3處。",
        "result": "吊孔應距頂點到對邊中點的三分之二處"
      },
      "explanation": "重心從頂點量起位於中線的2/3處，也就是距對邊中點1/3處。",
      "steps": [
        "重心分中線2:1",
        "整條為3份",
        "從頂點取2份"
      ],
      "optionAnalysis": [
        {
          "choice": "吊孔應在中線中點",
          "truth": false,
          "reason": "重心不在1/2處。"
        },
        {
          "choice": "吊孔應距頂點到對邊中點的三分之二處",
          "truth": true,
          "reason": "依獨立推導可得到此結果；重心從頂點量起位於中線的2/3處，也就是距對邊中點1/3處。"
        },
        {
          "choice": "吊孔應在任一垂足",
          "truth": false,
          "reason": "那是高的相關點。"
        },
        {
          "choice": "吊孔應距頂點四分之一中線",
          "truth": false,
          "reason": "比例錯誤。"
        }
      ],
      "misconceptionTarget": "2比1未轉成從頂點量的2/3。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「將重心比例轉為製作尺寸」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「吊孔應距頂點到對邊中點的三分之二處」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：將重心比例轉為製作尺寸。",
      "literacyContextNecessity": "吊牌製作必須把抽象2比1轉為可量測的中線位置。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "5fe3c9d8f8c226aeb2efdfb31a0ea1975dc0c9f7e0b347c1b22f1ab31f002e28"
    },
    {
      "questionId": "u20-s014-v009",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "advanced",
      "itemType": "mc",
      "prompt": "結構圖要求標出三個頂點向對邊作垂線的交點。該點是哪一個心，理由為何？",
      "givenConditions": [],
      "target": "依結構線描述辨認垂心",
      "choices": [
        "垂心；因三條結構高度線共點",
        "外心；因到頂點等距",
        "內心；因到邊等距",
        "重心；因中線分2比1"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "頂點向對邊所在直線的垂線是高，三高交點是垂心。",
        "result": "垂心；因三條結構高度線共點"
      },
      "explanation": "頂點向對邊所在直線的垂線是高，三高交點是垂心。",
      "steps": [
        "辨認三條線為高",
        "三高共點",
        "命名垂心"
      ],
      "optionAnalysis": [
        {
          "choice": "垂心；因三條結構高度線共點",
          "truth": true,
          "reason": "依獨立推導可得到此結果；頂點向對邊所在直線的垂線是高，三高交點是垂心。"
        },
        {
          "choice": "外心；因到頂點等距",
          "truth": false,
          "reason": "外心由垂直平分線形成。"
        },
        {
          "choice": "內心；因到邊等距",
          "truth": false,
          "reason": "內心由角平分線形成。"
        },
        {
          "choice": "重心；因中線分2比1",
          "truth": false,
          "reason": "中線連到對邊中點，不要求垂直。"
        }
      ],
      "misconceptionTarget": "看到垂線便選外心，未檢查是否通過頂點。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「依結構線描述辨認垂心」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「垂心；因三條結構高度線共點」符合全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：依結構線描述辨認垂心。",
      "literacyContextNecessity": "結構圖明確描述頂點到對邊的垂線，線的用途決定中心名稱。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "e83d65d4e17554e3c3596c5ad584d7e5f609df9ef704dc869558ce97ab459ccf"
    },
    {
      "questionId": "u20-s014-v010",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "三角形園區比較兩個設點方案：方案甲要求到三個入口等距；方案乙要求到三面圍牆等距。正確配對為何？",
      "givenConditions": [],
      "target": "比較外心與內心的服務情境",
      "choices": [
        "兩方案完全相同",
        "外心服務圍牆，內心服務入口",
        "重心同時保證兩種等距",
        "外心方案服務三個入口；內心方案服務三面圍牆"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "入口是三個頂點，使用外心；圍牆是三邊，使用內心。",
        "result": "外心方案服務三個入口；內心方案服務三面圍牆"
      },
      "explanation": "入口是三個頂點，使用外心；圍牆是三邊，使用內心。",
      "steps": [
        "辨認入口為點",
        "辨認圍牆為邊",
        "分別配對外心與內心"
      ],
      "optionAnalysis": [
        {
          "choice": "兩方案完全相同",
          "truth": false,
          "reason": "一般三角形外心與內心不同。"
        },
        {
          "choice": "外心服務圍牆，內心服務入口",
          "truth": false,
          "reason": "配對顛倒。"
        },
        {
          "choice": "重心同時保證兩種等距",
          "truth": false,
          "reason": "重心沒有這兩種等距性質。"
        },
        {
          "choice": "外心方案服務三個入口；內心方案服務三面圍牆",
          "truth": true,
          "reason": "依獨立推導可得到此結果；入口是三個頂點，使用外心；圍牆是三邊，使用內心。"
        }
      ],
      "misconceptionTarget": "沒有先分類需求對象。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「比較外心與內心的服務情境」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「外心方案服務三個入口；內心方案服務三面圍牆」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：比較外心與內心的服務情境。",
      "literacyContextNecessity": "入口與圍牆分別是點和線，實際服務對象決定中心，情境不可刪除。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "bb6533822a3750e09463257e20c73f424470b52b6be724561c11b1a0d8e5f112"
    },
    {
      "questionId": "u20-s014-v011",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "三角形招牌左側裝有沉重燈具。即使已作出幾何重心，吊掛時還應注意什麼？",
      "givenConditions": [],
      "target": "判斷重心應用的模型限制",
      "choices": [
        "外心會自動取代重心",
        "若板材密度不均，幾何重心未必是實際平衡點",
        "內心一定是實際平衡點",
        "垂心可消除重量差"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "附加燈具使質量分布不均，實際質心會向左偏；幾何重心只適用於均勻薄板模型。",
        "result": "若板材密度不均，幾何重心未必是實際平衡點"
      },
      "explanation": "附加燈具使質量分布不均，實際質心會向左偏；幾何重心只適用於均勻薄板模型。",
      "steps": [
        "辨認附加重量",
        "檢查均勻假設失效",
        "預期實際平衡點偏移"
      ],
      "optionAnalysis": [
        {
          "choice": "外心會自動取代重心",
          "truth": false,
          "reason": "外心不處理質量分布。"
        },
        {
          "choice": "若板材密度不均，幾何重心未必是實際平衡點",
          "truth": true,
          "reason": "依獨立推導可得到此結果；附加燈具使質量分布不均，實際質心會向左偏；幾何重心只適用於均勻薄板模型。"
        },
        {
          "choice": "內心一定是實際平衡點",
          "truth": false,
          "reason": "內心只處理邊距。"
        },
        {
          "choice": "垂心可消除重量差",
          "truth": false,
          "reason": "垂心無此物理功能。"
        }
      ],
      "misconceptionTarget": "把幾何中心當成不受材料影響的物理平衡點。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「判斷重心應用的模型限制」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「若板材密度不均，幾何重心未必是實際平衡點」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：判斷重心應用的模型限制。",
      "literacyContextNecessity": "燈具造成的不均勻質量是決定實際吊點偏移的必要資訊。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "b5568ba1d00ad40a584504446a6095441c244396f8276871f6cd95bb9fafef1e"
    },
    {
      "questionId": "u20-s014-v012",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "literacy",
      "itemType": "mc",
      "prompt": "規劃報告只寫「把設備放在三角形中心」，但未說明功能。審查者最應要求補充什麼？",
      "givenConditions": [],
      "target": "審查含糊的三角形中心需求",
      "choices": [
        "直接選圖上最中央的點",
        "四個中心可任意互換",
        "應先確認需求是到角落等距、到邊界等距、平衡，或高度線交會",
        "只看哪個點位於三角形內"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "method": "不讀取儲存答案，直接由題設重算或重建推理。",
        "derivation": "『中心』不唯一；必須依功能選外心、內心、重心或垂心，所以要說明等距、平衡或結構需求。",
        "result": "應先確認需求是到角落等距、到邊界等距、平衡，或高度線交會"
      },
      "explanation": "『中心』不唯一；必須依功能選外心、內心、重心或垂心，所以要說明等距、平衡或結構需求。",
      "steps": [
        "列出可能的不同中心",
        "辨認每個中心對應不同條件",
        "要求明確功能與衡量對象"
      ],
      "optionAnalysis": [
        {
          "choice": "直接選圖上最中央的點",
          "truth": false,
          "reason": "視覺中央沒有唯一數學定義。"
        },
        {
          "choice": "四個中心可任意互換",
          "truth": false,
          "reason": "一般三角形四心不同。"
        },
        {
          "choice": "應先確認需求是到角落等距、到邊界等距、平衡，或高度線交會",
          "truth": true,
          "reason": "依獨立推導可得到此結果；『中心』不唯一；必須依功能選外心、內心、重心或垂心，所以要說明等距、平衡或結構需求。"
        },
        {
          "choice": "只看哪個點位於三角形內",
          "truth": false,
          "reason": "內心與重心都在內，仍無法決定功能。"
        }
      ],
      "misconceptionTarget": "把日常語言『中心』當成唯一數學點。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "estimatedTimeSec": 90,
      "unitCheck": "不涉及單位換算。",
      "roundingCheck": "答案為精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": {
        "uniqueTarget": "題幹明確要求「審查含糊的三角形中心需求」。",
        "scope": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "已排除把題設標記當外觀、把性質方向顛倒或忽略邊界的常見讀法。",
        "secondCorrectChoice": "逐項檢查後只有「應先確認需求是到角落等距、到邊界等距、平衡，或高度線交會」符合全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：審查含糊的三角形中心需求。",
      "literacyContextNecessity": "規劃功能缺失會使中心選擇不唯一，情境要求辨認規格不完整。",
      "figureId": null,
      "drawingSpecId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "noTemplateDeclaration": true,
      "contentSha256": "340b097c470ce7a20513bd29f4d54124939c70489c3635ef1e928acc892024e2"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u20-s014-cr001",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "literacy",
      "itemType": "constructed-response",
      "prompt": "三角形園區有三個入口在頂點、三面圍牆在三邊。請分別為「到三入口等距的服務台」與「到三圍牆等距的安全點」選擇中心，並解釋等距對象。",
      "requiredWork": [
        "服務台選外心。",
        "安全點選內心。",
        "明確區分頂點距離與邊的垂距。"
      ],
      "standardSolution": [
        "三入口是三個頂點，到三頂點等距的點是外心，所以服務台選外心。",
        "三圍牆是三邊，點到牆的最短距離為垂直距離；到三邊垂距相等的點是內心，所以安全點選內心。"
      ],
      "alternativeMethods": [
        "可再說明若園區為鈍角三角形，外心服務台可能落在園區外，但內心仍在內部。"
      ],
      "reasoningSteps": [
        "三入口是三個頂點，到三頂點等距的點是外心，所以服務台選外心。",
        "三圍牆是三邊，點到牆的最短距離為垂直距離；到三邊垂距相等的點是內心，所以安全點選內心。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "兩中心配對與等距對象完整正確。"
        },
        {
          "score": 2,
          "criteria": "配對正確但只簡述理由，未明說邊距是垂直距離。"
        },
        {
          "score": 1,
          "criteria": "只答對其中一個中心。"
        },
        {
          "score": 0,
          "criteria": "兩者顛倒或選重心、垂心。"
        }
      ],
      "partialCreditRules": [
        "評分依題目專屬rubric判定；方法正確但敘述略簡可保留方法分。",
        "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。"
      ],
      "followThroughPolicy": "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。",
      "unitRules": "依題目所給單位作答；純幾何關係不另加單位。",
      "notationRules": "角以 ∠ 表示，線段相等與平行、垂直符號須對應正確對象。",
      "answerOnlyPolicy": "只寫最終結論且沒有題目要求的理由，最高給1分；若結論也錯則0分。",
      "commonErrors": [
        "看到等距一律選外心。",
        "把牆角當圍牆。",
        "未考慮垂直距離。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "三入口是三個頂點，到三頂點等距的點是外心，所以服務台選外心。；三圍牆是三邊，點到牆的最短距離為垂直距離；到三邊垂距相等的點是內心，所以安全點選內心。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "d481d7c2aea1e4f7835a4f422d6e7f701a59c60524a42b9c4e2de3dd35e8dfd4"
    },
    {
      "questionId": "u20-s014-cr002",
      "unitId": "u20",
      "numericUnitId": 20,
      "topicId": "u20-centers",
      "skillId": "triangle-center-word",
      "skillSlot": "s014",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "prompt": "某規劃書只寫「設備設在三角形中心」。請提出至少三個可能功能，分別對應外心、內心、重心或垂心，並說明為何原規格不足。",
      "requiredWork": [
        "至少三種功能與中心正確配對。",
        "指出中心不唯一。",
        "說明需補充衡量對象或目的。"
      ],
      "standardSolution": [
        "可能功能一：到三個頂點等距，對應外心。",
        "功能二：到三邊垂直距離相等或作內切圓，對應內心。",
        "功能三：均勻三角形板的平衡或面積中心，對應重心。",
        "功能四：三條高度基準線的交會，對應垂心。",
        "原規格只說『中心』，沒有說明距離對象、平衡假設或結構線，因此一般三角形中無法唯一選點。"
      ],
      "alternativeMethods": [
        "回答任三種即可；若指出等邊三角形四心重合，仍需強調一般規格不能假設等邊。"
      ],
      "reasoningSteps": [
        "可能功能一：到三個頂點等距，對應外心。",
        "功能二：到三邊垂直距離相等或作內切圓，對應內心。",
        "功能三：均勻三角形板的平衡或面積中心，對應重心。",
        "功能四：三條高度基準線的交會，對應垂心。",
        "原規格只說『中心』，沒有說明距離對象、平衡假設或結構線，因此一般三角形中無法唯一選點。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "至少三種中心與功能配對正確，且清楚說明規格不唯一。"
        },
        {
          "score": 2,
          "criteria": "配對三種但其中一個理由簡略，或只配對兩種且說明不足非常清楚。"
        },
        {
          "score": 1,
          "criteria": "只列中心名稱，或只給一個正確功能。"
        },
        {
          "score": 0,
          "criteria": "認為四心可任意替換，或未指出規格問題。"
        }
      ],
      "partialCreditRules": [
        "評分依題目專屬rubric判定；方法正確但敘述略簡可保留方法分。",
        "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。"
      ],
      "followThroughPolicy": "若前段僅有單一算術錯誤，後續推理方法正確，可依錯誤數值一致作答並保留方法分。",
      "unitRules": "依題目所給單位作答；純幾何關係不另加單位。",
      "notationRules": "角以 ∠ 表示，線段相等與平行、垂直符號須對應正確對象。",
      "answerOnlyPolicy": "只寫最終結論且沒有題目要求的理由，最高給1分；若結論也錯則0分。",
      "commonErrors": [
        "用『最中央』代替功能。",
        "把外心與內心等距對象互換。",
        "把垂心說成平衡點。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "reSolvedWithoutStoredAnswer": true,
        "derivedResult": "可能功能一：到三個頂點等距，對應外心。；功能二：到三邊垂直距離相等或作內切圓，對應內心。；功能三：均勻三角形板的平衡或面積中心，對應重心。；功能四：三條高度基準線的交會，對應垂心。；原規格只說『中心』，沒有說明距離對象、平衡假設或結構線，因此一般三角形中無法唯一選點。",
        "rubricAlignment": "每一級分均依本題要求的具體推理、計算或審查內容撰寫。",
        "ambiguity": "題目所需工作與評分對象明確；替代方法只在數學上合法時接受。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "legacyContentUsed": false,
      "contentSha256": "40d12ec47da85ac5d9b939ba075787fadd3860338efeec204f41ee00ca603757"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u20-s014-v001",
      "contentSha256": "5d3b58cda1e933806c0f411184dfb463cf82a301a7cc657986de984d76d75284",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "到三頂點等距是外心的定義性質。",
      "derivedAnswer": "外心",
      "storedAnswer": "外心",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「外心」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「未分辨等距對象是頂點或邊。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：依文字需求選擇外心。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「要找一點，使它到三角形三個頂點距離相等，應找哪一個心？」要求依文字需求選擇外心。獨立推導為：到三頂點等距是外心的定義性質。 四選項依序判定：內心=假，到三邊等距。；外心=真，依獨立推導可得到此結果；到三頂點等距是外心的定義性質。；重心=假，三中線交點。；垂心=假，三高交點。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "021463eea1da8bb17b6feab5bb9d8ea57ecf15e9f5c2a251f388618e1705f214"
    },
    {
      "questionId": "u20-s014-v002",
      "contentSha256": "ecbf0fb28477c81d52081e324e465d4485450bbff0a2d47211c7f3702fab4954",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "點到直線的最短距離是垂直距離；到三邊垂距相等的點是內心。",
      "derivedAnswer": "內心",
      "storedAnswer": "內心",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「內心」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「看到距離相等就一律選外心。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：依邊距需求選擇內心。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「要找一點，使它到三角形三邊的最短距離相等，應找哪一個心？」要求依邊距需求選擇內心。獨立推導為：點到直線的最短距離是垂直距離；到三邊垂距相等的點是內心。 四選項依序判定：外心=假，到三頂點等距。；重心=假，與三邊等距無固定關係。；內心=真，依獨立推導可得到此結果；點到直線的最短距離是垂直距離；到三邊垂距相等的點是內心。；垂心=假，是高的交點。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "80f02632532a365d323c2dadc7c5c7b691ccd61180fb967f583e1dc509e745cd"
    },
    {
      "questionId": "u20-s014-v003",
      "contentSha256": "593c19d83ca9a96831be95c9cf23d01c7aee532fdb10ac0a8dd10e41f3520f24",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "均勻三角形薄板的質量中心位於三中線交點，即重心。",
      "derivedAnswer": "重心",
      "storedAnswer": "重心",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「重心」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把任何幾何中心都視為平衡點。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "只需辨認單一定義、直接性質或一步計算，但仍需排除三個具體誤解。 本題特定工作：依平衡需求選擇重心。",
      "literacyContextNecessity": "薄板均勻是把幾何重心視為質量中心的必要條件。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「均勻三角形薄板的理想單點平衡位置是哪一個心？」要求依平衡需求選擇重心。獨立推導為：均勻三角形薄板的質量中心位於三中線交點，即重心。 四選項依序判定：重心=真，依獨立推導可得到此結果；均勻三角形薄板的質量中心位於三中線交點，即重心。；外心=假，只保證到頂點等距。；內心=假，只保證到邊等距。；垂心=假，無一般平衡性質。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "5995fb85c895a5554a60d4439358b8fd54c8ccfe0f99c2e2c6d6e84284eae739"
    },
    {
      "questionId": "u20-s014-v004",
      "contentSha256": "a791911c345121923ea2d1f703eea77c406360f51d1c6166bfa146a579a7f9e0",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "等距對象是三村落頂點，所以選外心；鈍角三角形外心在三角形外。",
      "derivedAnswer": "外心，且可能位於三角形外",
      "storedAnswer": "外心，且可能位於三角形外",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「外心，且可能位於三角形外」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「只選對中心，未考慮位置風險。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：結合需求與角型判斷中心位置。",
      "literacyContextNecessity": "村落鈍角配置會讓等距基地台落區域外，直接影響規劃。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三個村落形成鈍角三角形，要設等距基地台。應選哪個點，且位置可能如何？」要求結合需求與角型判斷中心位置。獨立推導為：等距對象是三村落頂點，所以選外心；鈍角三角形外心在三角形外。 四選項依序判定：內心，且一定在外=假，內心到邊等距且在內部。；重心，且可能在外=假，重心在內部。；垂心，且到三站等距=假，垂心不保證頂點等距。；外心，且可能位於三角形外=真，依獨立推導可得到此結果；等距對象是三村落頂點，所以選外心；鈍角三角形外心在三角形外。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "0cd609b280c085529f80d2c4b018a0e736d93241e77ff66f337cac3ee2c42416"
    },
    {
      "questionId": "u20-s014-v005",
      "contentSha256": "faee0dcec56dc37ea8aa04f5939b4c9a39efecf496626570aad9520d04e40ce1",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "與三邊相切要求圓心到三邊垂直距離相等，因此是內心。",
      "derivedAnswer": "內心",
      "storedAnswer": "內心",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「內心」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「看到圓就直接選外心。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：依內切圓需求選擇內心。",
      "literacyContextNecessity": "舞台必須同時貼住三邊界，圓與邊相切條件決定中心。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形廣場要設一個圓形舞台，要求圓與三邊界都相切。圓心應設在哪裡？」要求依內切圓需求選擇內心。獨立推導為：與三邊相切要求圓心到三邊垂直距離相等，因此是內心。 四選項依序判定：外心=假，外接圓通過三頂點。；重心=假，不保證可同時相切。；內心=真，依獨立推導可得到此結果；與三邊相切要求圓心到三邊垂直距離相等，因此是內心。；垂心=假，高的交點不提供相切條件。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "0f95c85d68f5f5e090147d3687ea1a6fdc5120abb243b0d88d5cc73d54987bad"
    },
    {
      "questionId": "u20-s014-v006",
      "contentSha256": "3c6adf84aef0512f84c153372fb50ae300e76ebd694c3f8a342d6791f52a8472",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "均勻面積的平衡點是重心。",
      "derivedAnswer": "重心",
      "storedAnswer": "重心",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「重心」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「忽略均勻材質與面積分布。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需連接兩個條件、選擇正確性質方向或完成兩至三步推理。 本題特定工作：在手作情境選擇重心。",
      "literacyContextNecessity": "紙片材質均勻是重心作為實際平衡點的模型前提。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形紙片材質均勻，要用針穿過一點使其較容易平衡，應先標哪一點？」要求在手作情境選擇重心。獨立推導為：均勻面積的平衡點是重心。 四選項依序判定：重心=真，依獨立推導可得到此結果；均勻面積的平衡點是重心。；外心=假，頂點等距與平衡無關。；內心=假，邊距等距與平衡無關。；垂心=假，高共點與平衡無關。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "37feb7f93d8078b45b235a6e29ca3650b8c3f619ca228582e7a71fe450a3f1cc"
    },
    {
      "questionId": "u20-s014-v007",
      "contentSha256": "245df3289ad7218ed064322b5489ee6718980f2735eee1d93b5863280931091a",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "需選外心；直角三角形外心是斜邊中點，等距半徑為斜邊一半。",
      "derivedAnswer": "控制站在斜邊中點，距三感測器皆為斜邊的一半",
      "storedAnswer": "控制站在斜邊中點，距三感測器皆為斜邊的一半",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「控制站在斜邊中點，距三感測器皆為斜邊的一半」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「將直角頂點的垂心誤作等距點。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：綜合直角三角形與外心應用。",
      "literacyContextNecessity": "感測器配置為直角使服務半徑可由斜邊直接決定。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三個感測器形成直角三角形。若控制站需到三點等距，哪個描述正確？」要求綜合直角三角形與外心應用。獨立推導為：需選外心；直角三角形外心是斜邊中點，等距半徑為斜邊一半。 四選項依序判定：控制站在直角頂點，距三點皆相等=假，直角頂點到自身距離0。；控制站在內心，距頂點皆相等=假，內心到邊等距。；控制站在重心，距三點皆為中線的一半=假，重心不平分中線且不到頂點等距。；控制站在斜邊中點，距三感測器皆為斜邊的一半=真，依獨立推導可得到此結果；需選外心；直角三角形外心是斜邊中點，等距半徑為斜邊一半。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "bab2fe97af62ccfa580196f56ac1d76dd22fdd6a1fb030163fe60a33cf1545fe"
    },
    {
      "questionId": "u20-s014-v008",
      "contentSha256": "5fe3c9d8f8c226aeb2efdfb31a0ea1975dc0c9f7e0b347c1b22f1ab31f002e28",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "重心從頂點量起位於中線的2/3處，也就是距對邊中點1/3處。",
      "derivedAnswer": "吊孔應距頂點到對邊中點的三分之二處",
      "storedAnswer": "吊孔應距頂點到對邊中點的三分之二處",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「吊孔應距頂點到對邊中點的三分之二處」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「2比1未轉成從頂點量的2/3。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：將重心比例轉為製作尺寸。",
      "literacyContextNecessity": "吊牌製作必須把抽象2比1轉為可量測的中線位置。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「製作均勻三角形吊牌，沿一條中線量測定位重心。吊孔位置如何？」要求將重心比例轉為製作尺寸。獨立推導為：重心從頂點量起位於中線的2/3處，也就是距對邊中點1/3處。 四選項依序判定：吊孔應在中線中點=假，重心不在1/2處。；吊孔應距頂點到對邊中點的三分之二處=真，依獨立推導可得到此結果；重心從頂點量起位於中線的2/3處，也就是距對邊中點1/3處。；吊孔應在任一垂足=假，那是高的相關點。；吊孔應距頂點四分之一中線=假，比例錯誤。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "3406a11a3c40b414eb0da1fe10d36be359ea6d1c0dc9b8522fe71533dab3e8da"
    },
    {
      "questionId": "u20-s014-v009",
      "contentSha256": "e83d65d4e17554e3c3596c5ad584d7e5f609df9ef704dc869558ce97ab459ccf",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "頂點向對邊所在直線的垂線是高，三高交點是垂心。",
      "derivedAnswer": "垂心；因三條結構高度線共點",
      "storedAnswer": "垂心；因三條結構高度線共點",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「垂心；因三條結構高度線共點」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「看到垂線便選外心，未檢查是否通過頂點。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "需處理多步依賴、逆向辨識、邊界條件或審查不充分論證。 本題特定工作：依結構線描述辨認垂心。",
      "literacyContextNecessity": "結構圖明確描述頂點到對邊的垂線，線的用途決定中心名稱。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「結構圖要求標出三個頂點向對邊作垂線的交點。該點是哪一個心，理由為何？」要求依結構線描述辨認垂心。獨立推導為：頂點向對邊所在直線的垂線是高，三高交點是垂心。 四選項依序判定：垂心；因三條結構高度線共點=真，依獨立推導可得到此結果；頂點向對邊所在直線的垂線是高，三高交點是垂心。；外心；因到頂點等距=假，外心由垂直平分線形成。；內心；因到邊等距=假，內心由角平分線形成。；重心；因中線分2比1=假，中線連到對邊中點，不要求垂直。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "e0d51d1e07661aad0f444f891cacbd1bf5ebb18e9f1675d4a18b82f158c2b3e1"
    },
    {
      "questionId": "u20-s014-v010",
      "contentSha256": "bb6533822a3750e09463257e20c73f424470b52b6be724561c11b1a0d8e5f112",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "入口是三個頂點，使用外心；圍牆是三邊，使用內心。",
      "derivedAnswer": "外心方案服務三個入口；內心方案服務三面圍牆",
      "storedAnswer": "外心方案服務三個入口；內心方案服務三面圍牆",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「外心方案服務三個入口；內心方案服務三面圍牆」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「沒有先分類需求對象。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：比較外心與內心的服務情境。",
      "literacyContextNecessity": "入口與圍牆分別是點和線，實際服務對象決定中心，情境不可刪除。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形園區比較兩個設點方案：方案甲要求到三個入口等距；方案乙要求到三面圍牆等距。正確配對為何？」要求比較外心與內心的服務情境。獨立推導為：入口是三個頂點，使用外心；圍牆是三邊，使用內心。 四選項依序判定：兩方案完全相同=假，一般三角形外心與內心不同。；外心服務圍牆，內心服務入口=假，配對顛倒。；重心同時保證兩種等距=假，重心沒有這兩種等距性質。；外心方案服務三個入口；內心方案服務三面圍牆=真，依獨立推導可得到此結果；入口是三個頂點，使用外心；圍牆是三邊，使用內心。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "213bd09f5645f76a3c7b4be4fe9bb0a9bd856d4ed9a5b95b783c243b567a2392"
    },
    {
      "questionId": "u20-s014-v011",
      "contentSha256": "b5568ba1d00ad40a584504446a6095441c244396f8276871f6cd95bb9fafef1e",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "附加燈具使質量分布不均，實際質心會向左偏；幾何重心只適用於均勻薄板模型。",
      "derivedAnswer": "若板材密度不均，幾何重心未必是實際平衡點",
      "storedAnswer": "若板材密度不均，幾何重心未必是實際平衡點",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「若板材密度不均，幾何重心未必是實際平衡點」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把幾何中心當成不受材料影響的物理平衡點。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：判斷重心應用的模型限制。",
      "literacyContextNecessity": "燈具造成的不均勻質量是決定實際吊點偏移的必要資訊。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形招牌左側裝有沉重燈具。即使已作出幾何重心，吊掛時還應注意什麼？」要求判斷重心應用的模型限制。獨立推導為：附加燈具使質量分布不均，實際質心會向左偏；幾何重心只適用於均勻薄板模型。 四選項依序判定：外心會自動取代重心=假，外心不處理質量分布。；若板材密度不均，幾何重心未必是實際平衡點=真，依獨立推導可得到此結果；附加燈具使質量分布不均，實際質心會向左偏；幾何重心只適用於均勻薄板模型。；內心一定是實際平衡點=假，內心只處理邊距。；垂心可消除重量差=假，垂心無此物理功能。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "04a0484613f8d1d8b05416ae6879451afdee47ee92b209b6417279754015f346"
    },
    {
      "questionId": "u20-s014-v012",
      "contentSha256": "340b097c470ce7a20513bd29f4d54124939c70489c3635ef1e928acc892024e2",
      "reviewVersion": "human-review-u20-r1",
      "independentSolution": "『中心』不唯一；必須依功能選外心、內心、重心或垂心，所以要說明等距、平衡或結構需求。",
      "derivedAnswer": "應先確認需求是到角落等距、到邊界等距、平衡，或高度線交會",
      "storedAnswer": "應先確認需求是到角落等距、到邊界等距、平衡，或高度線交會",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回全部條件後，僅「應先確認需求是到角落等距、到邊界等距、平衡，或高度線交會」成立；其他三項各有具體排除理由。",
        "undefinedSymbol": "題幹中的符號與名詞皆在本技能講義或鎖定先備技能中定義。",
        "unitConflict": "不涉及單位換算。",
        "roundingConflict": "答案為精確值，不需四捨五入。",
        "domainBoundary": "題意限定在國中會考幾何與基本邏輯範圍內。",
        "alternateReading": "常見誤讀為「把日常語言『中心』當成唯一數學點。」，此讀法不能同時滿足題幹全部條件。"
      },
      "difficultyReason": "必須把實際圖例、規格、位置或模型限制轉為數學條件後才能作答。 本題特定工作：審查含糊的三角形中心需求。",
      "literacyContextNecessity": "規劃功能缺失會使中心選擇不唯一，情境要求辨認規格不完整。",
      "prerequisiteCheck": "只使用本技能、鎖定先備技能與國中已學過的基本幾何或整數運算。",
      "languageCheck": "使用臺灣繁體中文；題意、對象、方向與範圍皆明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「規劃報告只寫「把設備放在三角形中心」，但未說明功能。審查者最應要求補充什麼？」要求審查含糊的三角形中心需求。獨立推導為：『中心』不唯一；必須依功能選外心、內心、重心或垂心，所以要說明等距、平衡或結構需求。 四選項依序判定：直接選圖上最中央的點=假，視覺中央沒有唯一數學定義。；四個中心可任意互換=假，一般三角形四心不同。；應先確認需求是到角落等距、到邊界等距、平衡，或高度線交會=真，依獨立推導可得到此結果；『中心』不唯一；必須依功能選外心、內心、重心或垂心，所以要說明等距、平衡或結構需求。；只看哪個點位於三角形內=假，內心與重心都在內，仍無法決定功能。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "0d7dcccd4955ea5ad023f064a028d1ea7a109bf644ea2e8bd9f3ff386896c038"
    }
  ],
  "drawingSpecs": []
};
export default skillBundle;
