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
      "instruction": "先確認邊數 n、圖形為凸多邊形，以及是否為正多邊形。",
      "check": "只有正多邊形才可把角度平均分配。"
    },
    {
      "step": 2,
      "instruction": "求內角和時先算 n−2 個三角形。",
      "check": "再乘一百八十度，不把 n 當三角形數。"
    },
    {
      "step": 3,
      "instruction": "由內角和反求邊數時建立方程。",
      "check": "解完 n−2 後是否記得加回二？"
    },
    {
      "step": 4,
      "instruction": "正多邊形單一外角用三百六十度除以 n。",
      "check": "所得外角乘邊數是否回到三百六十度？"
    },
    {
      "step": 5,
      "instruction": "利用同頂點內角與外角互補互相轉換。",
      "check": "內角加外角是否為一百八十度？"
    },
    {
      "step": 6,
      "instruction": "反求邊數後檢查為大於等於三的整數。",
      "check": "非整數代表正多邊形規格不可行。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "六邊形內角和為多少？",
      "solutionSteps": [
        "n=6，可分成四個三角形。",
        "(6−2)×180°=720°。"
      ],
      "answer": "720°。",
      "why": "從同一頂點分出的四個三角形不重疊且完整覆蓋六邊形，因此四個一百八十度正好就是全部內角和，與外角和三百六十度不同。"
    },
    {
      "exampleId": "L2",
      "prompt": "某凸多邊形內角和為 1260°，有幾邊？",
      "solutionSteps": [
        "列 (n−2)×180°=1260°。",
        "n−2=7，所以 n=9。",
        "代回九邊形內角和驗證。"
      ],
      "answer": "9 邊。",
      "why": "一千二百六十除以一百八十得到的是三角形數七，不是邊數；把二加回後得九，代回公式可防止漏加二的常見錯誤。"
    },
    {
      "exampleId": "L3",
      "prompt": "正八邊形每個外角為多少？",
      "solutionSteps": [
        "正八邊形八個外角相等。",
        "360°÷8=45°。",
        "八個四十五度總和為三百六十度。"
      ],
      "answer": "45°。",
      "why": "沿外圍同方向走一周總轉向量固定為三百六十度，正八邊形又使八次轉角相等，所以平均後的四十五度就是每個外角。"
    },
    {
      "exampleId": "L4",
      "prompt": "正十二邊形每個內角為多少？",
      "solutionSteps": [
        "每個外角=360°÷12=30°。",
        "內角=180°−30°=150°。"
      ],
      "answer": "150°。",
      "why": "先用外角和求出三十度，再利用同頂點內外角互補得到一百五十度；這條路徑同時保留正多邊形等角與轉向性質。"
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
  "contentSha256": "381c8cd66707bee364361c2e0d2ee8baa5db88b962f680ab64951d744fccaef6"
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
    "explanation": "從五邊形一個頂點向不相鄰頂點連線，可把圖形分成 5−2=3 個三角形。每個三角形內角和為一百八十度，因此五邊形內角和是 3×180°=540°，不是外角和三百六十度。",
    "steps": [
      "確認五邊形的邊數 n=5。",
      "由一個頂點分割成 n−2=3 個三角形。",
      "計算 3×180°=540°，選第三項。"
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
    "misconceptionTarget": "把任何多邊形的外角和三百六十度誤當成五邊形內角和。",
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
    "contentSha256": "16dd2537a699d087e6d05a6a968d7bc2a64833179cee49ded445ec63565f9b53"
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
    "explanation": "凸 n 邊形從一個頂點向其餘不相鄰頂點作對角線，會分成 n−2 個三角形，且沒有重疊或遺漏。每個三角形內角和為一百八十度，所以總內角和公式是 (n−2)×180°。",
    "steps": [
      "選一個頂點將凸 n 邊形分割成三角形。",
      "確認三角形數量為 n−2。",
      "把三角形數乘 180°，得到 (n−2)×180°。"
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
    "misconceptionTarget": "把三角形個數誤數成 n 或 n−1，因而得到錯誤的內角和公式。",
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
    "contentSha256": "3356c5c2d6cf81a941092adbeec5b79b15fe38dd69fe372d92d1084a8658e3ad"
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
    "explanation": "任一凸多邊形沿同方向繞行一周，外角和為三百六十度。正六邊形的六個外角相等，所以每個外角為 360°÷6=60°；相對應的內角是一百二十度，不能把兩者混用。",
    "steps": [
      "使用凸多邊形外角和 360°。",
      "由正六邊形確定六個外角都相等。",
      "計算 360°÷6=60°，並以內外角互補檢查。"
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
    "misconceptionTarget": "把正六邊形的一百二十度內角當成外角，或用內角和直接除錯。",
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
    "contentSha256": "0f91665e020917bc2e3c6be8c030fb203c3787181c45340348c90027633a4289"
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
    "text": "某凸多邊形的內角和為 1080°，它是幾邊形？",
    "givenConditions": [
      "凸多邊形，邊數為大於 2 的整數。"
    ],
    "target": "由內角和反求邊數",
    "choices": [
      "七邊形",
      "八邊形",
      "九邊形",
      "十邊形"
    ],
    "answerIndex": 1,
    "independentSolution": "設邊數為 n，(n-2)×180°=1080°，所以 n-2=6，n=8。",
    "explanation": "設邊數為 n，依內角和公式列 (n−2)×180°=1080°。兩邊除以一百八十得 n−2=6，再加二得 n=8；代回 (8−2)×180°=1080°，所以是八邊形。八是合法整數邊數，方程也只有此解。",
    "steps": [
      "設未知邊數為 n，列出內角和方程。",
      "將 1080° 除以 180°，得到 n−2=6。",
      "求得 n=8，再代回公式驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "七邊形",
        "truth": false,
        "reason": "七邊形內角和為 900°。"
      },
      {
        "choice": "八邊形",
        "truth": true,
        "reason": "(8−2)×180°=1080°。"
      },
      {
        "choice": "九邊形",
        "truth": false,
        "reason": "九邊形內角和為 1260°。"
      },
      {
        "choice": "十邊形",
        "truth": false,
        "reason": "十邊形內角和為 1440°。"
      }
    ],
    "misconceptionTarget": "直接用一千零八十除以一百八十回答六邊，忘記把減去的二加回。",
    "prerequisiteCheck": "已會多邊形內角和公式與一元一次式的簡單逆運算。",
    "estimatedTimeSec": 90,
    "unitCheck": "內角和以度為單位，答案是邊數名稱。",
    "roundingCheck": "1080° 與 180° 都是精確值。",
    "ambiguityBoundaryAudit": "限凸多邊形；由公式得到唯一整數邊數 8。",
    "difficultyReason": "標準：反向使用公式並從三角形個數還原邊數。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "42c449d9655600d8aadcd172cd0926c14b9dec15eff024d746060c807e373429"
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
    "explanation": "由 (n−2)×180°=900°，先算 900÷180=5，所以 n−2=5，進而 n=7。七邊形可分成五個三角形，內角和確為 5×180°=900°，與題目相符；七也是大於等於三的合法整數邊數，答案唯一。",
    "steps": [
      "把九百度代入凸多邊形內角和公式。",
      "除以一百八十，得到 n−2=5。",
      "加二求得七邊，並用五個三角形驗算。"
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
    "misconceptionTarget": "把三角形數五誤當成邊數，或把九百度直接除錯而選其他邊數。",
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
    "contentSha256": "e89ed7ed994434f3cec56ecefc55890fa47750395a569c828d146398bd0a691c"
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
    "explanation": "正十邊形每個外角相等，為 360°÷10=36°。同一頂點的內角與外角互補，所以每個內角為 180°−36°=144°；也可用內角和一千四百四十度除以十驗證。",
    "steps": [
      "先用外角和求每個外角 36°。",
      "以 180° 減去 36°，得到內角 144°。",
      "另算內角和後除以十，確認仍為 144°。"
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
    "misconceptionTarget": "把三十六度外角直接當內角，或把內角和一千四百四十度當單一角。",
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
    "contentSha256": "1e2c195eea22e72a234c52f98c1f1e1abc5a23ec024586a92c8c50984747bfb0"
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
    "explanation": "正多邊形各外角相等，且外角總和固定為三百六十度。若每個外角二十四度，邊數就是 360°÷24°=15；十五個外角相加正好三百六十度，且邊數為合法整數。",
    "steps": [
      "使用正多邊形外角和 360°。",
      "用總和除以單一外角，列 360÷24。",
      "算得十五邊，並以 15×24°=360° 驗算。"
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
    "misconceptionTarget": "用一百八十度除外角，或把二十四度直接誤認為邊數。",
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
    "contentSha256": "b737b8a1ed823c859109b5732853e90bf527ed9a5d362e3f5f62ac8bd66dd5ed"
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
    "explanation": "正多邊形每個內角一百五十度，則每個外角為 180°−150°=30°。外角和三百六十度，所以邊數為 360°÷30°=12；十二邊形的內角和除以十二也確為一百五十度。",
    "steps": [
      "將內角轉成互補的外角 30°。",
      "以外角和 360° 除以 30°，得到十二邊。",
      "代入正十二邊形單一內角公式驗證。"
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
    "misconceptionTarget": "直接用三百六十度除以一百五十度，沒有先把內角換成外角。",
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
    "contentSha256": "2612be4a95a3cd1d04da58887c855f5934ae003ae7eba1c5f353df3e324e9ec6"
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
    "explanation": "六邊形內角和是 (6−2)×180°=720°。目標多邊形比它多五百四十度，所以內角和為 1260°；由 (n−2)×180°=1260° 得 n−2=7，故 n=9。代回九邊形內角和正是一千二百六十度，差值也確為五百四十度。",
    "steps": [
      "先算六邊形內角和 720°。",
      "加上 540°，得到目標內角和 1260°。",
      "反解內角和公式，得到九邊形並代回驗證。"
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
    "misconceptionTarget": "把增加五百四十度直接除以一百八十，只算新增邊數卻未加回原邊數。",
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
    "contentSha256": "22fa3e5bfdf227e72dda84a7be5f083c853313756b7cba2e016f2991aa17fa81"
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
    "explanation": "沿正八邊形外圍同方向繞行一周，八次外轉角總和為三百六十度。因正八邊形各外角相等，單次外轉角是 360°÷8=45°；一百三十五度則是每個內角。",
    "steps": [
      "將每到一柱轉向辨認為正八邊形的外角。",
      "使用八個相等外角總和 360°。",
      "計算每次 45°，並以內角 135° 互補檢查。"
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
    "misconceptionTarget": "把涼亭的一百三十五度內角當成施工時沿外圍的外轉角。",
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
    "contentSha256": "d9c0f4fdc315b5875cf0b3d99e35af5791330159ed0e6491e884eb41aafade81"
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
    "explanation": "正十二邊形有十二個相等外角，總和為三百六十度，因此理論外角為 360°÷12=30°。題目的一度是允許誤差，不是要從理論值扣除；實測值應再與二十九至三十一度範圍比較。",
    "steps": [
      "確認齒輪外框是正十二邊形。",
      "用外角和除以十二，求理論值 30°。",
      "把 ±1° 視為驗收範圍，不能改變中心理論角。"
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
    "misconceptionTarget": "把允許誤差一度直接加減到公式中，誤把二十九或三十一度當理論值。",
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
    "contentSha256": "6198d1b6e8d2dc15c64d6fcdb083e9041b137002ae79f29006bbc931def8fd24"
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
    "explanation": "每個內角一百六十五度，對應外角為 180°−165°=15°。正多邊形邊數為 360°÷15°=24，所得是大於等於三的整數；代回正二十四邊形單一內角確為一百六十五度，所以規格可行。",
    "steps": [
      "先由內外角互補算出外角 15°。",
      "用外角和 360° 除以 15°，求得邊數二十四。",
      "檢查二十四是合法整數邊數，並代回內角驗證。"
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
    "misconceptionTarget": "因一百六十五不是一百八十的因數就判不可行，沒有改用外角和檢查。",
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
    "contentSha256": "e2d11427796453c18a3c74b6bf5b4da859bf7c7125eb6002849507162e5bc1a2"
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
      "九邊形從一個頂點可分成 9−2=7 個三角形，所以內角和為 7×180°=1260°。",
      "因為題目是正九邊形，九個內角相等，每一個內角為 1260°÷9=140°。",
      "驗算每個外角為 180°−140°=40°，九個外角總和為 9×40°=360°。"
    ],
    "alternativeMethods": [
      "可先求每個外角360°÷9=40°，再得內角180°−40°=140°；內角和=9×140°。"
    ],
    "reasoningSteps": [
      "確認邊數 n=9，使用多邊形內角和公式。",
      "計算七個三角形的內角和一千二百六十度。",
      "利用正多邊形等角性質除以九，得到一百四十度。",
      "以外角和三百六十度完成交叉驗算。"
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
      "把 9−2 誤寫成 9−1，造成內角和多一百八十度。",
      "算出一千二百六十度後直接當成單一內角。",
      "未確認正多邊形才可把總內角和平均除以邊數。"
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
    "contentSha256": "d50e9d0ca06898d8bb0fba06e14247eba32ce86c281f28f2c5db6cea3e6da9b1"
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
      "正多邊形每個內角為 150°，所以與它互補的每個外角為 180°−150°=30°。",
      "正多邊形外角和固定為三百六十度，且各外角相等，因此邊數 n=360°÷30°=12。",
      "邊數代表線段邊的個數，必須是大於等於三的整數；十二符合，代回單一內角仍為一百五十度。"
    ],
    "alternativeMethods": [
      "可列((n−2)×180°)÷n=150°，解得180n−360=150n，30n=360，n=12。"
    ],
    "reasoningSteps": [
      "將已知內角轉成三十度外角。",
      "用外角和除以單一外角，求得十二邊。",
      "檢查十二為大於等於三的整數。",
      "代回正十二邊形內角公式驗證。"
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
      "直接用三百六十度除以一百五十度，忽略內角不是轉向外角。",
      "算出小數邊數仍接受，沒有檢查邊的個數必須是整數。",
      "把內角與外角相加誤寫成三百六十度，而不是一百八十度。"
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
    "contentSha256": "2af4db3af5dd538769fb243bed6e8c5657fb9f19f2c762fbdbf9622f16835213"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s007-v001",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "16dd2537a699d087e6d05a6a968d7bc2a64833179cee49ded445ec63565f9b53",
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
    "contentSha256": "3356c5c2d6cf81a941092adbeec5b79b15fe38dd69fe372d92d1084a8658e3ad",
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
    "contentSha256": "0f91665e020917bc2e3c6be8c030fb203c3787181c45340348c90027633a4289",
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
    "contentSha256": "42c449d9655600d8aadcd172cd0926c14b9dec15eff024d746060c807e373429",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "1080° 等於 6×180°，表示由一個頂點可分成 6 個三角形；因此 n−2=6，得到 n=8。",
    "derivedAnswer": "八邊形",
    "storedAnswer": "八邊形",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "獨立重算得到「八邊形」。其餘選項逐項檢查：「七邊形」對應 900°；「九邊形」對應 1260°；「十邊形」對應 1440°",
      "undefinedSymbol": "題幹中的符號與用語均已在本技能講義定義；所求為「由內角和反求多邊形邊數」。",
      "unitConflict": "角度以度表示，答案為邊數名稱。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入或近似造成的第二答案。",
      "domainBoundary": "只使用凸多邊形內角和公式。",
      "alternateReading": "常見錯誤只會導向錯誤選項，不形成第二個正解。 即使改從公式或圖形定義重新讀題，也仍得到相同唯一答案。"
    },
    "difficultyReason": "標準：需反向使用內角和公式並辨認 n−2 的意義。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "已會多邊形內角和公式及簡單方程式。",
    "languageCheck": "凸多邊形條件、內角和與所求邊數均明示。",
    "reviewerDecision": "pass",
    "reviewerNote": "已使用與題解不同的方式獨立重算：1080° 等於 6×180°，表示由一個頂點可分成 6 個三角形；因此 n−2=6，得到 n=8。 正確選項為「八邊形」。其餘三項逐項代回後均不符合題目條件；單位、邊界與可能的另一種讀法也已核對，沒有第二個正確答案。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "b2397c5422803003a3d47dcdc33d133c2a6b8e81e3d69b6572ad1aa35bb0a1f1"
  },
  {
    "questionId": "u08-s007-v005",
    "unitId": "u08",
    "skillId": "polygon-angle-basic",
    "contentSha256": "e89ed7ed994434f3cec56ecefc55890fa47750395a569c828d146398bd0a691c",
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
    "contentSha256": "1e2c195eea22e72a234c52f98c1f1e1abc5a23ec024586a92c8c50984747bfb0",
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
    "contentSha256": "b737b8a1ed823c859109b5732853e90bf527ed9a5d362e3f5f62ac8bd66dd5ed",
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
    "contentSha256": "2612be4a95a3cd1d04da58887c855f5934ae003ae7eba1c5f353df3e324e9ec6",
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
    "contentSha256": "22fa3e5bfdf227e72dda84a7be5f083c853313756b7cba2e016f2991aa17fa81",
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
    "contentSha256": "d9c0f4fdc315b5875cf0b3d99e35af5791330159ed0e6491e884eb41aafade81",
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
    "contentSha256": "6198d1b6e8d2dc15c64d6fcdb083e9041b137002ae79f29006bbc931def8fd24",
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
    "contentSha256": "e2d11427796453c18a3c74b6bf5b4da859bf7c7125eb6002849507162e5bc1a2",
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

