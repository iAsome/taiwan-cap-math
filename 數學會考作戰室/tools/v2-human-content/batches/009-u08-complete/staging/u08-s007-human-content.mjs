// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s007-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-elements",
  "skillId": "polygon-angle-basic",
  "lockedSkillTitle": "多邊形內角和",
  "title": "多邊形內角和：從一個頂點分成 n−2 個三角形",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能使用 (n−2)×180° 求凸 n 邊形內角和。",
    "能由內角和反求邊數。",
    "能求正多邊形每個內角與外角。",
    "能分辨內角和、單一內角與外角和。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "quadrilateral-basic"
    ],
    "bridgeExplanation": "四邊形可分成兩個三角形；同理，凸 n 邊形由一個頂點可分成 n−2 個三角形。"
  },
  "prerequisites": [
    {
      "skillId": "quadrilateral-basic",
      "requiredLevel": "能使用四邊形內角和 360°，並理解對角線分割。"
    }
  ],
  "glossary": [
    {
      "term": "多邊形",
      "definition": "由至少三條線段首尾相接形成的封閉平面圖形。"
    },
    {
      "term": "n 邊形",
      "definition": "有 n 條邊與 n 個頂點的多邊形。"
    },
    {
      "term": "正多邊形",
      "definition": "各邊等長且各內角相等的多邊形。"
    },
    {
      "term": "外角",
      "definition": "沿一邊前進後轉向下一邊時形成的外部轉角。"
    }
  ],
  "notation": [
    {
      "symbol": "(n−2)×180°",
      "meaning": "凸 n 邊形內角和。"
    },
    {
      "symbol": "360°/n",
      "meaning": "正 n 邊形每個外角。"
    },
    {
      "symbol": "180°−360°/n",
      "meaning": "正 n 邊形每個內角。"
    }
  ],
  "conceptDevelopment": [
    "從凸 n 邊形的一個頂點連到所有不相鄰頂點，可分成 n−2 個互不重疊三角形，因此內角和為 (n−2)×180°。",
    "公式中的 n 是邊數，不是三角形數。三角形數是 n−2。",
    "任意凸多邊形每個頂點各取同方向外角，外角和為 360°。若是正多邊形，每個外角相等，所以為 360°÷n。",
    "正多邊形每個內角與相鄰外角互補，因此可用 180°−360°/n。"
  ],
  "formalDefinitions": [
    {
      "name": "凸多邊形",
      "statement": "任兩點連線都位於圖形內部或邊界；本技能公式以國中常見凸多邊形為主。"
    },
    {
      "name": "內角和",
      "statement": "所有內角度數相加的總量。"
    },
    {
      "name": "外角和",
      "statement": "沿同一方向在每個頂點取一個外角的總和，為 360°。"
    }
  ],
  "formulas": [
    {
      "formula": "內角和=(n−2)×180°",
      "conditions": [
        "n 為整數且 n≥3；本技能採凸多邊形"
      ],
      "meaning": "求總內角。"
    },
    {
      "formula": "正 n 邊形每個內角=((n−2)×180°)/n",
      "conditions": [
        "各內角相等"
      ],
      "meaning": "把內角和平均分。"
    },
    {
      "formula": "正 n 邊形每個外角=360°/n",
      "conditions": [
        "每頂點取同方向外角"
      ],
      "meaning": "用一周轉角平均分。"
    }
  ],
  "invalidUseCases": [
    "不能把 n×180° 當內角和。",
    "一般多邊形各內角不一定相等，不能直接用內角和除以 n，除非題目說正多邊形或等角。",
    "外角和 360° 不等於每個外角 360°。",
    "反求 n 後必須是大於等於 3 的整數。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "先確認邊數 n 與是否為正多邊形。",
      "check": "只有正多邊形才能平均分內角。"
    },
    {
      "step": 2,
      "instruction": "求內角和先算 n−2。",
      "check": "再乘 180°。"
    },
    {
      "step": 3,
      "instruction": "反求邊數時令 (n−2)×180°=已知內角和。",
      "check": "解出 n 並檢查整數。"
    },
    {
      "step": 4,
      "instruction": "求正多邊形單角可由內角和除 n 或先求外角。",
      "check": "最後檢查內角與外角相加 180°。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "六邊形內角和為多少？",
      "solutionSteps": [
        "n=6。",
        "(6−2)×180°=720°。"
      ],
      "answer": "720°。"
    },
    {
      "exampleId": "L2",
      "prompt": "某凸多邊形內角和為 1260°，有幾邊？",
      "solutionSteps": [
        "(n−2)×180=1260。",
        "n−2=7，n=9。"
      ],
      "answer": "9 邊。"
    },
    {
      "exampleId": "L3",
      "prompt": "正八邊形每個外角為多少？",
      "solutionSteps": [
        "外角和 360°。",
        "360°÷8=45°。"
      ],
      "answer": "45°。"
    },
    {
      "exampleId": "L4",
      "prompt": "正十二邊形每個內角為多少？",
      "solutionSteps": [
        "每個外角=360°÷12=30°。",
        "內角=180°−30°=150°。"
      ],
      "answer": "150°。"
    }
  ],
  "levelConnections": {
    "basic": "代入邊數求內角和。",
    "standard": "由內角和反求邊數。",
    "advanced": "結合正多邊形的單一內角與外角。",
    "literacy": "鋪面、標誌與機械零件的正多邊形規格可由邊數推算轉角。"
  },
  "commonMistakes": [
    {
      "mistake": "六邊形算 6×180°。",
      "why": "漏掉從一頂點分割後只有 n−2 個三角形。",
      "correction": "應算 (6−2)×180°。"
    },
    {
      "mistake": "一般六邊形每角都算 120°。",
      "why": "未確認等角。",
      "correction": "只有正六邊形或等角六邊形才能平均分。"
    },
    {
      "mistake": "把外角和寫成 180°。",
      "why": "與三角形內角和混淆。",
      "correction": "沿一周的外角和為 360°。"
    },
    {
      "mistake": "反求 n 得小數仍接受。",
      "why": "邊數必須是整數。",
      "correction": "檢查內角和是否可能。"
    },
    {
      "mistake": "正多邊形內角用 360°÷n。",
      "why": "那是每個外角。",
      "correction": "內角=180°−外角。"
    },
    {
      "mistake": "n=2 代入公式。",
      "why": "二邊形不是本課多邊形。",
      "correction": "要求 n≥3。"
    }
  ],
  "selfCheckItems": [
    "n 是邊數嗎？",
    "我是否先算 n−2？",
    "只有正多邊形才把內角和平均嗎？",
    "內角與相鄰外角是否合為 180°？"
  ],
  "conciseSummary": [
    "凸 n 邊形內角和為 (n−2)×180°。",
    "外角和為 360°。",
    "正 n 邊形每個外角為 360°/n。",
    "反求邊數要得到 n≥3 的整數。"
  ],
  "connections": {
    "previous": "上一技能以兩個三角形說明四邊形內角和。",
    "next": [
      "下一技能轉向垂直平分線與線對稱，使用等距與鏡射關係。"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "重新計算六、九、八、十二邊形例題；1260÷180=7 後加 2 得 9，正十二邊形外角 30°、內角 150°，公式條件限定 n≥3 與正多邊形平均。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "144ce2e9284087542a5831d84f3c670bd5a33d5d399327d96bfb48bb3d7f0e4b"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s007-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "五邊形的內角和是多少？",
    "givenConditions": [
      "凸五邊形，n=5。"
    ],
    "target": "求五邊形內角和",
    "choices": [
      "360°",
      "720°",
      "540°",
      "900°"
    ],
    "answerIndex": 2,
    "independentSolution": "內角和 540°。",
    "explanation": "五邊形可由一頂點分成三個三角形。",
    "steps": [
      "n=5。",
      "n−2=3。",
      "3×180=540。"
    ],
    "optionAnalysis": [
      {
        "choice": "360°",
        "truth": false,
        "reason": "360° 是四邊形內角和。"
      },
      {
        "choice": "720°",
        "truth": false,
        "reason": "720° 是六邊形內角和。"
      },
      {
        "choice": "540°",
        "truth": true,
        "reason": "(5−2)×180°=3×180°=540°。"
      },
      {
        "choice": "900°",
        "truth": false,
        "reason": "把 5×180° 當公式。"
      }
    ],
    "misconceptionTarget": "直接算 n×180°。",
    "prerequisiteCheck": "能使用三角形內角和。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "基礎代公式。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "2d36cda64f6b6743194162a640b591bb9424038e5031a6c68b5f1135d45a0e09"
  },
  {
    "questionId": "u08-s007-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "凸 n 邊形的內角和公式為何？",
    "givenConditions": [
      "n≥3 且為凸 n 邊形。"
    ],
    "target": "辨認多邊形內角和公式",
    "choices": [
      "(n−2)×180°",
      "n×180°",
      "(n−1)×180°",
      "360°÷n"
    ],
    "answerIndex": 0,
    "independentSolution": "公式為 (n−2)×180°。",
    "explanation": "每個三角形內角和 180°。",
    "steps": [
      "三角形數 n−2。",
      "乘 180°。"
    ],
    "optionAnalysis": [
      {
        "choice": "(n−2)×180°",
        "truth": true,
        "reason": "從一個頂點可分成 n−2 個三角形。"
      },
      {
        "choice": "n×180°",
        "truth": false,
        "reason": "多算兩個三角形。"
      },
      {
        "choice": "(n−1)×180°",
        "truth": false,
        "reason": "從一頂點分割的三角形數不是 n−1。"
      },
      {
        "choice": "360°÷n",
        "truth": false,
        "reason": "這是正 n 邊形每個外角。"
      }
    ],
    "misconceptionTarget": "把邊數或外角公式混入。",
    "prerequisiteCheck": "能理解三角形分割。",
    "estimatedTimeSec": 90,
    "unitCheck": "n 為邊數，結果角度單位為 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "公式辨認。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "59eb0d04bee6150e3ca599c37b90348e6404c845bd36a4a07c4e40b18612d592"
  },
  {
    "questionId": "u08-s007-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "正六邊形每個外角是多少？",
    "givenConditions": [
      "正六邊形，n=6。"
    ],
    "target": "求正六邊形每個外角",
    "choices": [
      "30°",
      "120°",
      "540°",
      "60°"
    ],
    "answerIndex": 3,
    "independentSolution": "每個外角 60°。",
    "explanation": "六個外角相等。",
    "steps": [
      "360÷6=60。"
    ],
    "optionAnalysis": [
      {
        "choice": "30°",
        "truth": false,
        "reason": "360÷6 不是 30。"
      },
      {
        "choice": "120°",
        "truth": false,
        "reason": "120° 是每個內角。"
      },
      {
        "choice": "540°",
        "truth": false,
        "reason": "540° 是總內角和。"
      },
      {
        "choice": "60°",
        "truth": true,
        "reason": "正多邊形外角和 360°，每角 360°÷6=60°。"
      }
    ],
    "misconceptionTarget": "把內角或內角和當外角。",
    "prerequisiteCheck": "能做除法並理解外角和。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位為 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接平均外角和。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "53b1ca120ba883bd47abafd863ba2100579132f26a2ea59a08205e2753964535"
  },
  {
    "questionId": "u08-s007-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "八邊形的內角和是多少？",
    "givenConditions": [
      "凸八邊形。"
    ],
    "target": "求八邊形內角和",
    "choices": [
      "900°",
      "1080°",
      "1260°",
      "1440°"
    ],
    "answerIndex": 1,
    "independentSolution": "八邊形內角和 1080°。",
    "explanation": "代入內角和公式。",
    "steps": [
      "8−2=6。",
      "6×180=1080。"
    ],
    "optionAnalysis": [
      {
        "choice": "900°",
        "truth": false,
        "reason": "900° 是七邊形內角和。"
      },
      {
        "choice": "1080°",
        "truth": true,
        "reason": "(8−2)×180=6×180=1080°。"
      },
      {
        "choice": "1260°",
        "truth": false,
        "reason": "1260° 是九邊形內角和。"
      },
      {
        "choice": "1440°",
        "truth": false,
        "reason": "把 8×180°。"
      }
    ],
    "misconceptionTarget": "忘記減 2。",
    "prerequisiteCheck": "能使用多邊形公式。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "標準數值代入。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "87094416ccdd6cd2a72821df0f1fc4e0c7d5fd980247966cbd48859c190d5422"
  },
  {
    "questionId": "u08-s007-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "某凸多邊形內角和為 900°，它有幾邊？",
    "givenConditions": [
      "內角和精確為 900°。"
    ],
    "target": "由內角和反求邊數",
    "choices": [
      "5 邊",
      "6 邊",
      "9 邊",
      "7 邊"
    ],
    "answerIndex": 3,
    "independentSolution": "多邊形為七邊形。",
    "explanation": "由總和反解邊數。",
    "steps": [
      "900÷180=5。",
      "n=5+2=7。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 邊",
        "truth": false,
        "reason": "五邊形內角和 540°。"
      },
      {
        "choice": "6 邊",
        "truth": false,
        "reason": "六邊形內角和 720°。"
      },
      {
        "choice": "9 邊",
        "truth": false,
        "reason": "九邊形內角和 1260°。"
      },
      {
        "choice": "7 邊",
        "truth": true,
        "reason": "(n−2)×180=900，n−2=5，所以 n=7。"
      }
    ],
    "misconceptionTarget": "忘記把三角形數加回 2。",
    "prerequisiteCheck": "能解簡單方程。",
    "estimatedTimeSec": 90,
    "unitCheck": "邊數以「邊」計數，須為整數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "反向使用公式。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "70e18698843a88ab8b3689d492dbc4b8f28baccea94612db205a1e1eded540e1"
  },
  {
    "questionId": "u08-s007-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "正十邊形每個內角是多少？",
    "givenConditions": [
      "正十邊形。"
    ],
    "target": "求正十邊形單一內角",
    "choices": [
      "36°",
      "162°",
      "144°",
      "180°"
    ],
    "answerIndex": 2,
    "independentSolution": "每個內角 144°。",
    "explanation": "正多邊形內外角互補。",
    "steps": [
      "求外角 36°。",
      "180−36=144°。"
    ],
    "optionAnalysis": [
      {
        "choice": "36°",
        "truth": false,
        "reason": "36° 是每個外角。"
      },
      {
        "choice": "162°",
        "truth": false,
        "reason": "162° 是正二十邊形內角。"
      },
      {
        "choice": "144°",
        "truth": true,
        "reason": "每個外角 360÷10=36°，內角 180−36=144°。"
      },
      {
        "choice": "180°",
        "truth": false,
        "reason": "有限邊正多邊形內角小於 180°。"
      }
    ],
    "misconceptionTarget": "把外角當內角。",
    "prerequisiteCheck": "能使用正多邊形外角。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需兩步轉換。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "53c33b52b2f4b80e1c725636b97fda8cab03f8e957f7baa351dfddc24cf6a937"
  },
  {
    "questionId": "u08-s007-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "正多邊形每個外角為 24°，它有幾邊？",
    "givenConditions": [
      "每個外角 24°。",
      "圖形為正多邊形。"
    ],
    "target": "由正多邊形外角反求邊數",
    "choices": [
      "15 邊",
      "12 邊",
      "24 邊",
      "156 邊"
    ],
    "answerIndex": 0,
    "independentSolution": "有 15 個相等外角，所以為十五邊形。",
    "explanation": "正多邊形各外角相等。",
    "steps": [
      "360÷24=15。"
    ],
    "optionAnalysis": [
      {
        "choice": "15 邊",
        "truth": true,
        "reason": "外角和 360°，邊數 n=360÷24=15。"
      },
      {
        "choice": "12 邊",
        "truth": false,
        "reason": "360÷12=30°。"
      },
      {
        "choice": "24 邊",
        "truth": false,
        "reason": "把外角數值直接當邊數。"
      },
      {
        "choice": "156 邊",
        "truth": false,
        "reason": "把內角 156° 當邊數。"
      }
    ],
    "misconceptionTarget": "用 180° 除外角或直接取 24。",
    "prerequisiteCheck": "能使用外角和。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度除以角度後得到無單位邊數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "反推整數邊數。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "1e1b29eb7b1727ea3f81137c7edcbb2f2aa11021b9b4b5dd394958f6b895bf60"
  },
  {
    "questionId": "u08-s007-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個正多邊形每個內角為 150°，它有幾邊？",
    "givenConditions": [
      "正多邊形單一內角 150°。"
    ],
    "target": "由正多邊形內角反求邊數",
    "choices": [
      "10 邊",
      "15 邊",
      "12 邊",
      "30 邊"
    ],
    "answerIndex": 2,
    "independentSolution": "正十二邊形每角 150°。",
    "explanation": "由內角先求外角再反求邊數。",
    "steps": [
      "外角 30°。",
      "360÷30=12。"
    ],
    "optionAnalysis": [
      {
        "choice": "10 邊",
        "truth": false,
        "reason": "正十邊形內角 144°。"
      },
      {
        "choice": "15 邊",
        "truth": false,
        "reason": "正十五邊形外角 24°、內角 156°。"
      },
      {
        "choice": "12 邊",
        "truth": true,
        "reason": "每個外角=180−150=30°，n=360÷30=12。"
      },
      {
        "choice": "30 邊",
        "truth": false,
        "reason": "把外角 30° 誤當邊數。"
      }
    ],
    "misconceptionTarget": "直接以 360÷150 或把外角當邊數。",
    "prerequisiteCheck": "能使用內外角互補與外角和。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度比例消去，答案為整數邊數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "兩層反推。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "38ed2489a8adfe431100d6e8d3e3227bf75d23c8f2b5ed7e974ebac81d20c857"
  },
  {
    "questionId": "u08-s007-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "某凸多邊形內角和比六邊形多 540°。該多邊形有幾邊？",
    "givenConditions": [
      "基準為六邊形。",
      "內角和多 540°。"
    ],
    "target": "由內角和差推邊數",
    "choices": [
      "7 邊",
      "9 邊",
      "8 邊",
      "12 邊"
    ],
    "answerIndex": 1,
    "independentSolution": "九邊形內角和 1260°，比 720° 多 540°。",
    "explanation": "也可先算六邊形 720°，目標 1260° 反求 n=9。",
    "steps": [
      "540÷180=3。",
      "6+3=9。"
    ],
    "optionAnalysis": [
      {
        "choice": "7 邊",
        "truth": false,
        "reason": "七邊形只比六邊形多 180°。"
      },
      {
        "choice": "9 邊",
        "truth": true,
        "reason": "每增加一邊內角和增加 180°；多 540° 等於多 3 邊，所以 6+3=9。"
      },
      {
        "choice": "8 邊",
        "truth": false,
        "reason": "八邊形多 360°。"
      },
      {
        "choice": "12 邊",
        "truth": false,
        "reason": "十二邊形比六邊形多 1080°。"
      }
    ],
    "misconceptionTarget": "把多出的三角形數當總邊數。",
    "prerequisiteCheck": "能理解每增一邊內角和增 180°。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度差以 ° 表示，答案為邊數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需比較兩多邊形而非單次代入。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "083035e8f748a10b44ac7022161c3ae02cf415a8eb49c0508a2d7eaf3c9fbc38"
  },
  {
    "questionId": "u08-s007-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一座正八邊形涼亭，每個柱位位於一個頂點。施工時沿外圍每到一柱轉向一次，單次外轉角應是多少？",
    "givenConditions": [
      "涼亭為正八邊形。",
      "每頂點轉向一次。"
    ],
    "target": "由正八邊形涼亭求施工轉角",
    "choices": [
      "135°",
      "22.5°",
      "1080°",
      "45°"
    ],
    "answerIndex": 3,
    "independentSolution": "每柱外轉 45°。",
    "explanation": "柱位數等於外角數。",
    "steps": [
      "八個相等轉角。",
      "360÷8=45。"
    ],
    "optionAnalysis": [
      {
        "choice": "135°",
        "truth": false,
        "reason": "135° 是內角。"
      },
      {
        "choice": "22.5°",
        "truth": false,
        "reason": "把 360° 多除一次。"
      },
      {
        "choice": "1080°",
        "truth": false,
        "reason": "這是八邊形總內角和。"
      },
      {
        "choice": "45°",
        "truth": true,
        "reason": "沿正八邊形一周外轉角總和 360°，每次 360÷8=45°。"
      }
    ],
    "misconceptionTarget": "把內角當成行進方向的外轉角。",
    "prerequisiteCheck": "能區分內角與外角。",
    "estimatedTimeSec": 90,
    "unitCheck": "轉角以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "施工路徑中的轉向角必須使用外角而非內角。",
    "literacyContextNecessity": "工人沿外圍行進時實際操作的是每一頂點的外轉角；涼亭邊數與正多邊形條件直接決定 45°。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "d0df7e5f589f0c146b6b830f228f596b2fe087ab1ceea1b6b7db19464fec04a4"
  },
  {
    "questionId": "u08-s007-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "齒輪外框設計為正十二邊形。若每一邊方向轉換的外角誤差不得超過 1°，理論外角是多少？",
    "givenConditions": [
      "外框為正十二邊形。",
      "誤差上限 1°。",
      "所求理論值。"
    ],
    "target": "求正十二邊形齒輪的理論外角",
    "choices": [
      "15°",
      "30°",
      "150°",
      "2160°"
    ],
    "answerIndex": 1,
    "independentSolution": "理論外角為 30°，實測可再與 ±1° 範圍比較。",
    "explanation": "誤差規格以 30° 為中心值。",
    "steps": [
      "360÷12=30。"
    ],
    "optionAnalysis": [
      {
        "choice": "15°",
        "truth": false,
        "reason": "360÷12=30，不是 15。"
      },
      {
        "choice": "30°",
        "truth": true,
        "reason": "正十二邊形每外角 360°÷12=30°。"
      },
      {
        "choice": "150°",
        "truth": false,
        "reason": "150° 是內角。"
      },
      {
        "choice": "2160°",
        "truth": false,
        "reason": "這是 12×180°，不是任何所求角。"
      }
    ],
    "misconceptionTarget": "把誤差直接加到理論角或混用內角。",
    "prerequisiteCheck": "能使用正多邊形外角。",
    "estimatedTimeSec": 90,
    "unitCheck": "理論角與誤差皆以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "製造誤差資訊要求先求中心規格值。",
    "literacyContextNecessity": "齒輪加工需要明確的理論轉角才能判斷 ±1° 是否合格；情境中的正十二邊形是必要條件。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "b2ecf06175bc684632dbbf9cab0cd3ff8cd3bdcb15ebfed33d3fbf4a47b2beac"
  },
  {
    "questionId": "u08-s007-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "廣場鋪面採正多邊形模組，每個內角為 165°。若模組必須有整數邊數，這項規格是否可行？",
    "givenConditions": [
      "每內角 165°。",
      "要求正多邊形且邊數為整數。"
    ],
    "target": "判斷正多邊形角度規格是否可行",
    "choices": [
      "可行，為 24 邊形",
      "不可行，因 165° 不是 180° 的因數",
      "可行，為 15 邊形",
      "可行，為 12 邊形"
    ],
    "answerIndex": 0,
    "independentSolution": "規格可行，正二十四邊形每內角 165°。",
    "explanation": "檢查反求邊數的整數性。",
    "steps": [
      "求外角 15°。",
      "360÷15=24。",
      "24 為有效整數邊數。"
    ],
    "optionAnalysis": [
      {
        "choice": "可行，為 24 邊形",
        "truth": true,
        "reason": "外角=180−165=15°，n=360÷15=24，為整數且至少 3。"
      },
      {
        "choice": "不可行，因 165° 不是 180° 的因數",
        "truth": false,
        "reason": "邊數由外角 15° 決定，不要求內角整除 180°。"
      },
      {
        "choice": "可行，為 15 邊形",
        "truth": false,
        "reason": "15 是外角度數，不是邊數。"
      },
      {
        "choice": "可行，為 12 邊形",
        "truth": false,
        "reason": "正十二邊形內角是 150°。"
      }
    ],
    "misconceptionTarget": "只看角度大小而未反求整數邊數。",
    "prerequisiteCheck": "能由內角反求邊數並檢查有效性。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度相除得到邊數，答案需以「邊形」表達。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "規格可行性是實際情境核心，不只計算角度。",
    "literacyContextNecessity": "鋪面模組能否製造取決於反算邊數是否為有效整數；165° 必須轉成外角再驗證。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "26596032e0256b0a4d4b5bbcf734d700171c506cae3f0235fcba6e15b0f8eba6"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s007-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "一個正九邊形的內角和是多少？每一個內角是多少？請寫出計算過程。",
    "requiredWork": [
      "用(n−2)×180°求內角和。",
      "利用正九邊形內角相等求單角。",
      "保留角度單位。"
    ],
    "standardSolution": [
      "內角和=(9−2)×180°=1260°。",
      "每一內角=1260°÷9=140°。"
    ],
    "alternativeMethods": [
      "可先求每個外角360°÷9=40°，再得內角180°−40°=140°；內角和=9×140°。"
    ],
    "reasoningSteps": [
      "辨認n=9。",
      "求1260°。",
      "因正多邊形而除以9。",
      "驗算9×140=1260。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "內角和1260°、每角140°，公式與正多邊形平均理由完整。"
      },
      {
        "score": 2,
        "criteria": "兩結果正確但過程少一步；或內角和正確、單角有輕微除法錯。"
      },
      {
        "score": 1,
        "criteria": "正確寫(9−2)×180或求出其中一個正確結果。"
      },
      {
        "score": 0,
        "criteria": "用9×180求內角和，或未利用正多邊形條件就任意平均。"
      }
    ],
    "partialCreditRules": [
      "外角法與三角形分割法均接受。"
    ],
    "followThroughPolicy": "若1260算錯但公式正確，後續用錯誤總和除9可給方法分，最高2分。",
    "unitAndNotationRules": "角度附°；九邊形的n取9。",
    "answerOnlyPolicy": "只答1260°與140°無過程最高2分。",
    "commonErrors": [
      "把n−2寫成n−1。",
      "把內角和當單一內角。"
    ],
    "independentReview": {
      "derivedResult": "內角和1260°；每角140°。",
      "ambiguityAudit": "「正九邊形」明確保證九角相等，故可平均。",
      "reviewNote": "獨立用外角40°驗算內角140°，九角總和1260°。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "quadrilateral-basic"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "ce487575e41a8e78502dab67a58a683a14d833d82fd15007a07742551fa0b65d"
  },
  {
    "questionId": "u08-s007-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "polygon-angle-basic",
    "lockedSkillTitle": "多邊形內角和",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "某正多邊形的每一個內角為 150°。求它的邊數，並說明為何答案必須是整數。",
    "requiredWork": [
      "建立正多邊形單一內角與邊數的關係。",
      "求n。",
      "檢查n為至少3的整數。"
    ],
    "standardSolution": [
      "每個外角=180°−150°=30°。",
      "正多邊形外角和360°，所以邊數 n=360°÷30°=12。",
      "邊數是圖形邊的個數，必須是整數且12≥3。"
    ],
    "alternativeMethods": [
      "可列((n−2)×180°)÷n=150°，解得180n−360=150n，30n=360，n=12。"
    ],
    "reasoningSteps": [
      "把內角轉成外角30°。",
      "用外角和360°除以單一外角。",
      "檢查12是合法邊數。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "求得12邊，過程正確並說明邊數為離散計數。"
      },
      {
        "score": 2,
        "criteria": "答案12與主要方程正確，但整數合法性說明不完整；或有一處非核心算術小錯。"
      },
      {
        "score": 1,
        "criteria": "知道外角30°或列出正確方程，但未完成求n。"
      },
      {
        "score": 0,
        "criteria": "用360÷150或得到非整數後直接接受。"
      }
    ],
    "partialCreditRules": [
      "使用外角法雖本技能標題為內角和，仍屬合法且更直接的方法。"
    ],
    "followThroughPolicy": "若180−150算錯但後續外角和方法正確，最多2分。",
    "unitAndNotationRules": "n沒有角度單位；最終可稱正十二邊形。",
    "answerOnlyPolicy": "只答12最高1分，因缺乏公式與整數說明。",
    "commonErrors": [
      "把內角和360°誤當單一內角總和。",
      "忽略邊數不得是小數。"
    ],
    "independentReview": {
      "derivedResult": "n=12，為正十二邊形。",
      "ambiguityAudit": "150°介於0與180°且外角30°能整除360°，存在唯一正多邊形。",
      "reviewNote": "獨立代回(12−2)×180÷12=150，確認唯一且合法。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "quadrilateral-basic"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "3daa6943bdf5ab5a8ff9e83288d33893085d2338d56d2ce569b5654fe4fc2061"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s007-v001",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "2d36cda64f6b6743194162a640b591bb9424038e5031a6c68b5f1135d45a0e09",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由三個三角形重算得到 540°。",
    "derivedAnswer": "540°",
    "storedAnswer": "540°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「540°」符合目標「求五邊形內角和」。其餘選項分別違反：360° 是四邊形內角和。；720° 是六邊形內角和。；把 5×180° 當公式。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「多邊形內角和」講義已定義範圍；本題特別使用：凸五邊形，n=5。",
      "unitConflict": "角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求五邊形內角和」重新讀題，並針對誤解「直接算 n×180°。」排除另一解讀。"
    },
    "difficultyReason": "基礎代公式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用三角形內角和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求五邊形內角和」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由三個三角形重算得到 540°。 正確選項為「540°」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "6505c99f11e7c5a8899200255d56a255e80ea060c74027f5f61a979ade6e142d"
  },
  {
    "questionId": "u08-s007-v002",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "59eb0d04bee6150e3ca599c37b90348e6404c845bd36a4a07c4e40b18612d592",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "以 n=3、4 檢查分別得 180°、360°。",
    "derivedAnswer": "(n−2)×180°",
    "storedAnswer": "(n−2)×180°",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「(n−2)×180°」符合目標「辨認多邊形內角和公式」。其餘選項分別違反：多算兩個三角形。；從一頂點分割的三角形數不是 n−1。；這是正 n 邊形每個外角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「多邊形內角和」講義已定義範圍；本題特別使用：n≥3 且為凸 n 邊形。",
      "unitConflict": "n 為邊數，結果角度單位為 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「辨認多邊形內角和公式」重新讀題，並針對誤解「把邊數或外角公式混入。」排除另一解讀。"
    },
    "difficultyReason": "公式辨認。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解三角形分割。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「辨認多邊形內角和公式」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：以 n=3、4 檢查分別得 180°、360°。 正確選項為「(n−2)×180°」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "0a9bc22305bfeb9c5a5fb6581dc94231b67f9532e7e821f64e940c2e0ef19ab1"
  },
  {
    "questionId": "u08-s007-v003",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "53b1ca120ba883bd47abafd863ba2100579132f26a2ea59a08205e2753964535",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "驗算六個外角總和 360°。",
    "derivedAnswer": "60°",
    "storedAnswer": "60°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「60°」符合目標「求正六邊形每個外角」。其餘選項分別違反：360÷6 不是 30。；120° 是每個內角。；540° 是總內角和。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「多邊形內角和」講義已定義範圍；本題特別使用：正六邊形，n=6。",
      "unitConflict": "角度單位為 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求正六邊形每個外角」重新讀題，並針對誤解「把內角或內角和當外角。」排除另一解讀。"
    },
    "difficultyReason": "直接平均外角和。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能做除法並理解外角和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求正六邊形每個外角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：驗算六個外角總和 360°。 正確選項為「60°」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "4356aefbad39ecf68b6ca578d328d36b8c575e7c66dc2988dda74c724adb671c"
  },
  {
    "questionId": "u08-s007-v004",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "87094416ccdd6cd2a72821df0f1fc4e0c7d5fd980247966cbd48859c190d5422",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由一頂點分成六個三角形確認。",
    "derivedAnswer": "1080°",
    "storedAnswer": "1080°",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「1080°」符合目標「求八邊形內角和」。其餘選項分別違反：900° 是七邊形內角和。；1260° 是九邊形內角和。；把 8×180°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「多邊形內角和」講義已定義範圍；本題特別使用：凸八邊形。",
      "unitConflict": "角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求八邊形內角和」重新讀題，並針對誤解「忘記減 2。」排除另一解讀。"
    },
    "difficultyReason": "標準數值代入。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用多邊形公式。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求八邊形內角和」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由一頂點分成六個三角形確認。 正確選項為「1080°」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "d8e44bea0f6cac6eaf13a3b38c3ecdf9af82d1af11b0ec2759d3a046c66edbae"
  },
  {
    "questionId": "u08-s007-v005",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "70e18698843a88ab8b3689d492dbc4b8f28baccea94612db205a1e1eded540e1",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "回代 (7−2)×180=900。",
    "derivedAnswer": "7 邊",
    "storedAnswer": "7 邊",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「7 邊」符合目標「由內角和反求邊數」。其餘選項分別違反：五邊形內角和 540°。；六邊形內角和 720°。；九邊形內角和 1260°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「多邊形內角和」講義已定義範圍；本題特別使用：內角和精確為 900°。",
      "unitConflict": "邊數以「邊」計數，須為整數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由內角和反求邊數」重新讀題，並針對誤解「忘記把三角形數加回 2。」排除另一解讀。"
    },
    "difficultyReason": "反向使用公式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能解簡單方程。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由內角和反求邊數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：回代 (7−2)×180=900。 正確選項為「7 邊」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "754b376a2b74cfaef56d5406ef3392352cc89d741c9a2961f38b802a0066eccc"
  },
  {
    "questionId": "u08-s007-v006",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "53c33b52b2f4b80e1c725636b97fda8cab03f8e957f7baa351dfddc24cf6a937",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "也可用 (10−2)×180÷10=144。",
    "derivedAnswer": "144°",
    "storedAnswer": "144°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「144°」符合目標「求正十邊形單一內角」。其餘選項分別違反：36° 是每個外角。；162° 是正二十邊形內角。；有限邊正多邊形內角小於 180°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「多邊形內角和」講義已定義範圍；本題特別使用：正十邊形。",
      "unitConflict": "角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求正十邊形單一內角」重新讀題，並針對誤解「把外角當內角。」排除另一解讀。"
    },
    "difficultyReason": "需兩步轉換。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用正多邊形外角。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求正十邊形單一內角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：也可用 (10−2)×180÷10=144。 正確選項為「144°」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "cf96cc5de02790fc20709511bff9690a7616058e734cd6a2fe9ace4ffaf4d78f"
  },
  {
    "questionId": "u08-s007-v007",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "1e1b29eb7b1727ea3f81137c7edcbb2f2aa11021b9b4b5dd394958f6b895bf60",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "驗算 15×24=360。",
    "derivedAnswer": "15 邊",
    "storedAnswer": "15 邊",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「15 邊」符合目標「由正多邊形外角反求邊數」。其餘選項分別違反：360÷12=30°。；把外角數值直接當邊數。；把內角 156° 當邊數。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「多邊形內角和」講義已定義範圍；本題特別使用：每個外角 24°。",
      "unitConflict": "角度除以角度後得到無單位邊數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由正多邊形外角反求邊數」重新讀題，並針對誤解「用 180° 除外角或直接取 24。」排除另一解讀。"
    },
    "difficultyReason": "反推整數邊數。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用外角和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由正多邊形外角反求邊數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：驗算 15×24=360。 正確選項為「15 邊」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "1a6cbb72f79f51321c1ec6d62bddd1cbb7ea0c90c991f8c5d9def8dc3b03a1dc"
  },
  {
    "questionId": "u08-s007-v008",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "38ed2489a8adfe431100d6e8d3e3227bf75d23c8f2b5ed7e974ebac81d20c857",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "回代 (12−2)×180÷12=150。",
    "derivedAnswer": "12 邊",
    "storedAnswer": "12 邊",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「12 邊」符合目標「由正多邊形內角反求邊數」。其餘選項分別違反：正十邊形內角 144°。；正十五邊形外角 24°、內角 156°。；把外角 30° 誤當邊數。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「多邊形內角和」講義已定義範圍；本題特別使用：正多邊形單一內角 150°。",
      "unitConflict": "角度比例消去，答案為整數邊數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由正多邊形內角反求邊數」重新讀題，並針對誤解「直接以 360÷150 或把外角當邊數。」排除另一解讀。"
    },
    "difficultyReason": "兩層反推。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用內外角互補與外角和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由正多邊形內角反求邊數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：回代 (12−2)×180÷12=150。 正確選項為「12 邊」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "daf49865ba296d6258a14e53f5c85ae6a4f724f88b97e6c9ad7e55a6bc38113f"
  },
  {
    "questionId": "u08-s007-v009",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "083035e8f748a10b44ac7022161c3ae02cf415a8eb49c0508a2d7eaf3c9fbc38",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "以公式差 [(n−2)−4]×180=540 得 n=9。",
    "derivedAnswer": "9 邊",
    "storedAnswer": "9 邊",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「9 邊」符合目標「由內角和差推邊數」。其餘選項分別違反：七邊形只比六邊形多 180°。；八邊形多 360°。；十二邊形比六邊形多 1080°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「多邊形內角和」講義已定義範圍；本題特別使用：基準為六邊形。",
      "unitConflict": "角度差以 ° 表示，答案為邊數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由內角和差推邊數」重新讀題，並針對誤解「把多出的三角形數當總邊數。」排除另一解讀。"
    },
    "difficultyReason": "需比較兩多邊形而非單次代入。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解每增一邊內角和增 180°。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由內角和差推邊數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：以公式差 [(n−2)−4]×180=540 得 n=9。 正確選項為「9 邊」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "68ad45a396dd82dc0b3e10c9c870617c804150f88be36c93758330273585a8ab"
  },
  {
    "questionId": "u08-s007-v010",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "d0df7e5f589f0c146b6b830f228f596b2fe087ab1ceea1b6b7db19464fec04a4",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "驗算 8×45=360。",
    "derivedAnswer": "45°",
    "storedAnswer": "45°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「45°」符合目標「由正八邊形涼亭求施工轉角」。其餘選項分別違反：135° 是內角。；把 360° 多除一次。；這是八邊形總內角和。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「多邊形內角和」講義已定義範圍；本題特別使用：涼亭為正八邊形。",
      "unitConflict": "轉角以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由正八邊形涼亭求施工轉角」重新讀題，並針對誤解「把內角當成行進方向的外轉角。」排除另一解讀。"
    },
    "difficultyReason": "施工路徑中的轉向角必須使用外角而非內角。",
    "literacyContextNecessity": "工人沿外圍行進時實際操作的是每一頂點的外轉角；涼亭邊數與正多邊形條件直接決定 45°。",
    "prerequisiteCheck": "能區分內角與外角。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由正八邊形涼亭求施工轉角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：驗算 8×45=360。 正確選項為「45°」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "ae9303edbf07124155cecf74e27be55a5d2a13953a2b98e7ecc6a7e4bdf0803c"
  },
  {
    "questionId": "u08-s007-v011",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "b2ecf06175bc684632dbbf9cab0cd3ff8cd3bdcb15ebfed33d3fbf4a47b2beac",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "十二個 30° 外轉角合為 360°。",
    "derivedAnswer": "30°",
    "storedAnswer": "30°",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「30°」符合目標「求正十二邊形齒輪的理論外角」。其餘選項分別違反：360÷12=30，不是 15。；150° 是內角。；這是 12×180°，不是任何所求角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「多邊形內角和」講義已定義範圍；本題特別使用：外框為正十二邊形。",
      "unitConflict": "理論角與誤差皆以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求正十二邊形齒輪的理論外角」重新讀題，並針對誤解「把誤差直接加到理論角或混用內角。」排除另一解讀。"
    },
    "difficultyReason": "製造誤差資訊要求先求中心規格值。",
    "literacyContextNecessity": "齒輪加工需要明確的理論轉角才能判斷 ±1° 是否合格；情境中的正十二邊形是必要條件。",
    "prerequisiteCheck": "能使用正多邊形外角。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求正十二邊形齒輪的理論外角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：十二個 30° 外轉角合為 360°。 正確選項為「30°」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "be9a04156493101385730ba92e62420e710812fe17d35eb97874ad1b4484ba7c"
  },
  {
    "questionId": "u08-s007-v012",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "26596032e0256b0a4d4b5bbcf734d700171c506cae3f0235fcba6e15b0f8eba6",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "回代 180−360/24=165。",
    "derivedAnswer": "可行，為 24 邊形",
    "storedAnswer": "可行，為 24 邊形",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「可行，為 24 邊形」符合目標「判斷正多邊形角度規格是否可行」。其餘選項分別違反：邊數由外角 15° 決定，不要求內角整除 180°。；15 是外角度數，不是邊數。；正十二邊形內角是 150°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「多邊形內角和」講義已定義範圍；本題特別使用：每內角 165°。",
      "unitConflict": "角度相除得到邊數，答案需以「邊形」表達。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判斷正多邊形角度規格是否可行」重新讀題，並針對誤解「只看角度大小而未反求整數邊數。」排除另一解讀。"
    },
    "difficultyReason": "規格可行性是實際情境核心，不只計算角度。",
    "literacyContextNecessity": "鋪面模組能否製造取決於反算邊數是否為有效整數；165° 必須轉成外角再驗證。",
    "prerequisiteCheck": "能由內角反求邊數並檢查有效性。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷正多邊形角度規格是否可行」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：回代 180−360/24=165。 正確選項為「可行，為 24 邊形」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "d78b0f4e14ab99335d8d04652395c896b1d2ccac1e688379990a6caed676b772"
  }
];

export const DRAWING_SPECS = [];

