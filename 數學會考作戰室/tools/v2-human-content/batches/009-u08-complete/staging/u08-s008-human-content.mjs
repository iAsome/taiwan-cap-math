// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s008-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-symmetry",
  "skillId": "perpendicular-bisector-symmetry",
  "lockedSkillTitle": "垂直平分線與線對稱",
  "title": "垂直平分線與線對稱：等距和垂直與鏡射",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能辨認線段垂直平分線的兩個必要條件。",
    "能使用垂直平分線上的點到兩端點等距。",
    "能由到兩端點等距反推點在垂直平分線上。",
    "能描述線對稱圖形中對應點、對稱軸與垂直平分關係。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "polygon-angle-basic"
    ],
    "bridgeExplanation": "先前已會辨認垂直與線段端點，現在把『垂直』和『通過中點』合併成垂直平分線。"
  },
  "prerequisites": [
    {
      "skillId": "polygon-angle-basic",
      "requiredLevel": "能使用點線記號、垂直關係與基本圖形語言；多邊形內角和不是本技能計算重點。"
    }
  ],
  "glossary": [
    {
      "term": "中點",
      "definition": "把線段分成兩段等長的點。"
    },
    {
      "term": "垂直平分線",
      "definition": "垂直於一線段且通過該線段中點的直線。"
    },
    {
      "term": "等距",
      "definition": "到兩個指定點的距離相等。"
    },
    {
      "term": "線對稱",
      "definition": "圖形沿某直線翻折後可完全重合。"
    },
    {
      "term": "對稱軸",
      "definition": "使圖形翻折重合的直線。"
    },
    {
      "term": "對應點",
      "definition": "翻折前後互相重合的一對點。"
    }
  ],
  "notation": [
    {
      "symbol": "PA=PB",
      "meaning": "點 P 到 A、B 的距離相等。"
    },
    {
      "symbol": "l ⟂ AB",
      "meaning": "直線 l 垂直線段 AB 所在直線。"
    },
    {
      "symbol": "M 為 AB 中點",
      "meaning": "AM=MB 且 M 在線段 AB 上。"
    }
  ],
  "conceptDevelopment": [
    "『垂直平分線』同時要求垂直與平分，少一個條件都不成立。只通過中點但斜著穿過，或垂直但不經中點，都不是垂直平分線。",
    "若 P 在 AB 的垂直平分線上，則 PA=PB。反過來，若 PA=PB，則 P 位於 AB 的垂直平分線上。這是雙向性質。",
    "在線對稱中，對稱軸是每一對對應點連線的垂直平分線。因此對應點到對稱軸距離相等，連線與軸垂直。",
    "位在對稱軸上的點翻折後仍在原位置，它可以視為自己的對應點。"
  ],
  "formalDefinitions": [
    {
      "name": "垂直平分線定理",
      "statement": "線段垂直平分線上的任一點，到線段兩端點等距。"
    },
    {
      "name": "垂直平分線定理逆敘述",
      "statement": "到線段兩端點等距的點，位於該線段的垂直平分線上。"
    },
    {
      "name": "線對稱圖形",
      "statement": "存在至少一條直線，使圖形沿該直線翻折後與原圖完全重合。"
    }
  ],
  "formulas": [
    {
      "formula": "P 在 AB 的垂直平分線上 ⇒ PA=PB",
      "conditions": [
        "P 為平面上的點"
      ],
      "meaning": "由位置推出距離相等。"
    },
    {
      "formula": "PA=PB ⇒ P 在 AB 的垂直平分線上",
      "conditions": [
        "A、B 為相異點"
      ],
      "meaning": "由等距反推位置。"
    },
    {
      "formula": "對應點到對稱軸距離相等",
      "conditions": [
        "兩點關於該軸對稱"
      ],
      "meaning": "鏡射保持距離。"
    }
  ],
  "invalidUseCases": [
    "一條線只與 AB 垂直，不一定平分 AB。",
    "一條線只通過 AB 中點，不一定與 AB 垂直。",
    "PA=PB 不能推出 P 是 AB 的中點；P 可能在垂直平分線上任何位置。",
    "圖形看起來平衡不等於一定線對稱，必須能翻折重合。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "判斷垂直平分線時分開檢查垂直與中點。",
      "check": "兩個條件必須同時成立。"
    },
    {
      "step": 2,
      "instruction": "遇到 PA=PB，先辨認被比較的兩端 A、B。",
      "check": "等距點屬於 AB 的哪一條軌跡？"
    },
    {
      "step": 3,
      "instruction": "依推理方向選正定理或逆定理。",
      "check": "從在軸上推等距，或從等距推在軸上，不可顛倒理由。"
    },
    {
      "step": 4,
      "instruction": "線對稱題配對原點與對應點。",
      "check": "對稱軸是否垂直平分對應點連線？"
    },
    {
      "step": 5,
      "instruction": "串連多個等距式時找共同距離。",
      "check": "例如 PA=PB 與 PA=PC 可推出三者相等。"
    },
    {
      "step": 6,
      "instruction": "檢查兩點是否相異及軸上點的退化情況。",
      "check": "重合點能否決定唯一直線或方向？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "直線 l 垂直 AB 且通過 AB 中點 M，l 是什麼？",
      "solutionSteps": [
        "l 與 AB 垂直。",
        "l 通過 AB 中點，兩項條件皆成立。"
      ],
      "answer": "l 是 AB 的垂直平分線。",
      "why": "垂直只限制方向，通過中點才保證平分位置；題目同時給齊兩項必要條件，因此可以直接套用垂直平分線的完整定義。"
    },
    {
      "exampleId": "L2",
      "prompt": "P 在 AB 的垂直平分線上，PA=7 公分，PB 為多少？",
      "solutionSteps": [
        "垂直平分線上的點到兩端等距。",
        "PB=PA=7 公分。"
      ],
      "answer": "7 公分。",
      "why": "已知位置在垂直平分線上，應使用正向等距定理；PB 不需加上或扣除 AB 長度，直接等於同一點到另一端的距離。"
    },
    {
      "exampleId": "L3",
      "prompt": "若 QA=QB，Q 的位置必在哪一條直線上？",
      "solutionSteps": [
        "Q 到 A、B 等距。",
        "依逆敘述，Q 在 AB 的垂直平分線上。"
      ],
      "answer": "線段 AB 的垂直平分線。",
      "why": "題目從距離相等反推位置，使用的是逆定理；所有等距點形成整條垂直平分線，不應把可能位置縮成唯一的中點。"
    },
    {
      "exampleId": "L4",
      "prompt": "A 與 A' 關於直線 k 對稱，線段 AA' 與 k 有何關係？",
      "solutionSteps": [
        "對稱軸垂直平分對應點連線。",
        "所以 k⊥AA' 且通過 AA' 中點。"
      ],
      "answer": "k 是 AA' 的垂直平分線。",
      "why": "鏡射使兩點分居軸兩側且到軸距離相等，軸與連線交於中點並成直角；兩個幾何條件合併才完整描述對稱軸。"
    }
  ],
  "levelConnections": {
    "basic": "辨認垂直與中點兩條件。",
    "standard": "由垂直平分線求等距長度。",
    "advanced": "使用逆敘述與多個等距條件定位點。",
    "literacy": "基地臺、救援站或道路設施若需到兩地等距，其可能位置形成一條垂直平分線。"
  },
  "commonMistakes": [
    {
      "mistake": "只見垂直就稱垂直平分線。",
      "why": "漏掉通過中點。",
      "correction": "同時核對垂直與平分。"
    },
    {
      "mistake": "只見中點就稱垂直平分線。",
      "why": "漏掉 90°。",
      "correction": "還需證明與線段垂直。"
    },
    {
      "mistake": "PA=PB 就說 P 是 AB 中點。",
      "why": "把等距點與中點混淆。",
      "correction": "P 在 AB 的垂直平分線上，不必在線段 AB 上。"
    },
    {
      "mistake": "對稱點連線平行對稱軸。",
      "why": "誤解鏡射方向。",
      "correction": "對應點連線應垂直對稱軸。"
    },
    {
      "mistake": "認為軸上點會移到另一側。",
      "why": "忽略軸上距離為 0。",
      "correction": "軸上點翻折後位置不變。"
    },
    {
      "mistake": "用圖形看起來相似判線對稱。",
      "why": "相似不等於重合。",
      "correction": "應檢查每一點翻折後是否對應。"
    }
  ],
  "selfCheckItems": [
    "我是否同時檢查垂直和中點？",
    "從在垂直平分線上能推出哪個等距式？",
    "從 PA=PB 能反推什麼位置？",
    "對稱軸如何處理一對對應點的連線？"
  ],
  "conciseSummary": [
    "垂直平分線同時垂直且通過中點。",
    "軸上點到線段兩端等距。",
    "到兩端等距的點在垂直平分線上。",
    "對稱軸垂直平分對應點連線。"
  ],
  "connections": {
    "previous": "前面技能提供點線、垂直與多邊形語言。",
    "next": [
      "下一技能進入周長與面積，線對稱可協助分割或重組圖形。"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "逐一檢查正定理與逆敘述的方向；PA=PB 只推出 P 在線段 AB 的垂直平分線上，未誤寫為中點，線對稱對應點連線的垂直平分關係完整。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "16741e41f5e403b734f3a31d1ac05a8b510244488c8581b184d4d27c50155ef6"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s008-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一條直線要成為線段 AB 的垂直平分線，必須同時具備哪兩個條件？",
    "givenConditions": [
      "線段端點為 A、B。"
    ],
    "target": "辨認垂直平分線定義",
    "choices": [
      "只要垂直 AB",
      "只要通過 AB 的中點",
      "平行 AB 且通過 A",
      "垂直 AB 且通過 AB 的中點"
    ],
    "answerIndex": 3,
    "independentSolution": "同時垂直且經中點才成立。",
    "explanation": "線段 AB 的垂直平分線必須同時與 AB 垂直，並通過 AB 的中點。只有垂直可能交在非中點，只有通過中點也可能是斜線；因此兩個條件缺一不可，第四項才是完整定義。",
    "steps": [
      "把名稱拆成垂直與平分兩個要求。",
      "將平分翻譯為通過線段 AB 的中點。",
      "逐項檢查，只有第四項同時滿足兩個條件。"
    ],
    "optionAnalysis": [
      {
        "choice": "只要垂直 AB",
        "truth": false,
        "reason": "可能沒有平分 AB。"
      },
      {
        "choice": "只要通過 AB 的中點",
        "truth": false,
        "reason": "可能不是垂直。"
      },
      {
        "choice": "平行 AB 且通過 A",
        "truth": false,
        "reason": "與垂直平分完全不同。"
      },
      {
        "choice": "垂直 AB 且通過 AB 的中點",
        "truth": true,
        "reason": "『垂直』與『平分』兩項缺一不可。"
      }
    ],
    "misconceptionTarget": "只檢查垂直或只檢查中點，把單一必要條件誤當成完整定義。",
    "prerequisiteCheck": "能辨認垂直與中點。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接定義辨認。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "eacd92a3b977a7024a090d71cd9d6ed229c7f4de4d7ba949ba949966645b19d6"
  },
  {
    "questionId": "u08-s008-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "點 P 在線段 AB 的垂直平分線上。若 PA=6 公分，PB 為多少？",
    "givenConditions": [
      "P 在 AB 的垂直平分線上。",
      "PA=6 公分。"
    ],
    "target": "由垂直平分線求另一端距離",
    "choices": [
      "3 公分",
      "6 公分",
      "12 公分",
      "無法判斷"
    ],
    "answerIndex": 1,
    "independentSolution": "PB=6 公分。",
    "explanation": "垂直平分線上的任一點到線段兩端距離相等。P 在線段 AB 的垂直平分線上，所以 PA=PB；已知 PA=6 公分，直接得到 PB=6 公分，不必知道 AB 的長度或 P 的實際位置。",
    "steps": [
      "辨認 P 位於 AB 的垂直平分線上。",
      "使用垂直平分線上點到 A、B 等距的性質。",
      "由 PA=6 公分推出 PB=6 公分。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 公分",
        "truth": false,
        "reason": "垂直平分的是 AB，不是把 PA 對半。"
      },
      {
        "choice": "6 公分",
        "truth": true,
        "reason": "垂直平分線上的點到兩端點等距，所以 PB=PA=6 公分。"
      },
      {
        "choice": "12 公分",
        "truth": false,
        "reason": "等距不是相加。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "垂直平分線性質已足以判斷。"
      }
    ],
    "misconceptionTarget": "把六公分再乘二或除二，沒有使用兩端距離相等的定理。",
    "prerequisiteCheck": "能讀等長式。",
    "estimatedTimeSec": 90,
    "unitCheck": "兩距離均以公分表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "單一步驟定理。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "840bc6e11021049cfe7d3d24824e9d99193d03fc6422d6c43e6d7c9d5e00fa04"
  },
  {
    "questionId": "u08-s008-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "若點 Q 到 A、B 兩點的距離相等，則 Q 必位於何處？",
    "givenConditions": [
      "QA=QB。",
      "A、B 為相異點。"
    ],
    "target": "由等距反推點的位置",
    "choices": [
      "線段 AB 的垂直平分線上",
      "線段 AB 的中點",
      "射線 AB 上",
      "任一通過 A 的直線上"
    ],
    "answerIndex": 0,
    "independentSolution": "Q 的軌跡是 AB 的垂直平分線。",
    "explanation": "到相異兩點 A、B 距離相等的所有點，恰好形成線段 AB 的垂直平分線。已知 QA=QB，依垂直平分線定理的逆敘述，Q 必在這條直線上；Q 不必就是 AB 的中點。",
    "steps": [
      "把 QA=QB 解讀為 Q 到線段兩端等距。",
      "套用等距點必在垂直平分線上的逆敘述。",
      "判定 Q 在 AB 的垂直平分線上，並排除只限中點的說法。"
    ],
    "optionAnalysis": [
      {
        "choice": "線段 AB 的垂直平分線上",
        "truth": true,
        "reason": "到兩端點等距的點位於連線的垂直平分線上。"
      },
      {
        "choice": "線段 AB 的中點",
        "truth": false,
        "reason": "Q 不一定在線段 AB 上。"
      },
      {
        "choice": "射線 AB 上",
        "truth": false,
        "reason": "等距點一般不在由 A 指向 B 的射線。"
      },
      {
        "choice": "任一通過 A 的直線上",
        "truth": false,
        "reason": "與 QB 無關。"
      }
    ],
    "misconceptionTarget": "把所有等距點縮成唯一中點，忽略整條垂直平分線都是等距軌跡。",
    "prerequisiteCheck": "能理解定理逆敘述。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及特定長度單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接使用逆敘述。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "e9f474f25b5b47c2c7fd4cc6afc7e7db8306f92467e469769603bcac556119af"
  },
  {
    "questionId": "u08-s008-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "A 與 A' 關於直線 l 對稱。下列哪一項一定正確？",
    "givenConditions": [
      "A、A' 為關於 l 的相異對應點。"
    ],
    "target": "判斷對稱軸與對應點連線關係",
    "choices": [
      "l 平行 AA'",
      "A、A' 都不在 l 的同一側",
      "l 垂直平分線段 AA'",
      "AA' 的長度等於 0"
    ],
    "answerIndex": 2,
    "independentSolution": "l 必垂直 AA' 且通過其中點。",
    "explanation": "互為鏡射對應點的 A、A' 到對稱軸 l 距離相等，且連線 AA' 與軸垂直，交點又是 AA' 的中點。因此 l 必垂直平分 AA'；AA' 不必長度為零，也不可能由鏡射推出與 l 平行。",
    "steps": [
      "辨認 A、A' 是關於 l 的一對對應點。",
      "使用對稱軸垂直對應點連線且通過其中點。",
      "合併成 l 垂直平分 AA'，選第三項。"
    ],
    "optionAnalysis": [
      {
        "choice": "l 平行 AA'",
        "truth": false,
        "reason": "對稱軸與對應點連線垂直。"
      },
      {
        "choice": "A、A' 都不在 l 的同一側",
        "truth": false,
        "reason": "兩點位於軸兩側；若點在軸上則與自身重合，本題以相異對應點理解。"
      },
      {
        "choice": "l 垂直平分線段 AA'",
        "truth": true,
        "reason": "對稱軸是每對相異對應點連線的垂直平分線。"
      },
      {
        "choice": "AA' 的長度等於 0",
        "truth": false,
        "reason": "相異對應點距離通常大於 0。"
      }
    ],
    "misconceptionTarget": "只記得兩點在軸兩側，卻忘記對稱軸還要垂直平分兩點連線。",
    "prerequisiteCheck": "能理解線對稱。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "題目以 A、A' 為相異對應點；若點在對稱軸上會與自身重合，線段退化情形不在本題。",
    "difficultyReason": "標準性質辨認。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "8c51fde36d8fd2616e47458a707f7e489dc9118fc38ba161a93945f5474c82d5"
  },
  {
    "questionId": "u08-s008-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "M 是 AB 的中點，直線 l 通過 M，但未說 l 與 AB 垂直。能否確定 l 是 AB 的垂直平分線？",
    "givenConditions": [
      "M 為 AB 中點。",
      "l 通過 M。",
      "未給垂直。"
    ],
    "target": "判斷中點條件是否足以保證垂直平分線",
    "choices": [
      "不能，還缺少 l ⟂ AB",
      "能，通過中點已足夠",
      "能，任何過中點的線都平分 AB",
      "不能，因為垂直平分線不能通過中點"
    ],
    "answerIndex": 0,
    "independentSolution": "不能確定；可能是一條斜過中點的直線。",
    "explanation": "直線 l 通過中點 M，只能確定它平分線段 AB 的位置，不能確定 l 與 AB 形成九十度。斜過中點的直線就是反例，因此還必須補上 l⊥AB，才能判定 l 是垂直平分線。",
    "steps": [
      "由 M 是中點確認 l 已具備通過中點的條件。",
      "檢查題目未提供 l 與 AB 垂直。",
      "用斜過 M 的直線作反例，判定尚不能確定。"
    ],
    "optionAnalysis": [
      {
        "choice": "不能，還缺少 l ⟂ AB",
        "truth": true,
        "reason": "題目只給平分位置，沒有 90° 條件。"
      },
      {
        "choice": "能，通過中點已足夠",
        "truth": false,
        "reason": "垂直平分線還需垂直。"
      },
      {
        "choice": "能，任何過中點的線都平分 AB",
        "truth": false,
        "reason": "雖通過中點，但不一定垂直。"
      },
      {
        "choice": "不能，因為垂直平分線不能通過中點",
        "truth": false,
        "reason": "恰好相反，必須通過中點。"
      }
    ],
    "misconceptionTarget": "把通過中點這一項條件當成充分條件，漏掉必須垂直線段。",
    "prerequisiteCheck": "能區分垂直與平分。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "資訊充分性判斷。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "38059cb88a121873031bc0443fec7826965c54e2f24ccfc1217213e9272a491a"
  },
  {
    "questionId": "u08-s008-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "線段 AB 長 14 公分，M 是 AB 中點。AM 與 MB 各是多少？",
    "givenConditions": [
      "AB=14 公分。",
      "M 為中點。"
    ],
    "target": "由中點求兩半線段長",
    "choices": [
      "各 14 公分",
      "AM=6 公分、MB=8 公分",
      "各 28 公分",
      "各 7 公分"
    ],
    "answerIndex": 3,
    "independentSolution": "AM=MB=7 公分。",
    "explanation": "M 是 AB 的中點，表示 AM=MB 且 AM+MB=AB=14 公分。把總長平均分成兩段，14÷2=7，所以 AM、MB 各七公分；兩段相加仍為十四公分，符合中點定義，結果答案唯一。",
    "steps": [
      "由中點定義寫 AM=MB。",
      "用 AM+MB=14，把十四平均分成兩份。",
      "求得兩段各七公分，再相加驗算總長。"
    ],
    "optionAnalysis": [
      {
        "choice": "各 14 公分",
        "truth": false,
        "reason": "中點把線段分成兩個等長部分。"
      },
      {
        "choice": "AM=6 公分、MB=8 公分",
        "truth": false,
        "reason": "雖相加 14，但不相等。"
      },
      {
        "choice": "各 28 公分",
        "truth": false,
        "reason": "把總長錯誤加倍。"
      },
      {
        "choice": "各 7 公分",
        "truth": true,
        "reason": "中點使 AM=MB，且 AM+MB=14，所以各 7。"
      }
    ],
    "misconceptionTarget": "把中點到兩端的距離各寫成十四公分，造成分段總長加倍。",
    "prerequisiteCheck": "能使用線段加法。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有長度以公分表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "標準中點計算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "67e20743fe3c0d716c4564755d13a5b11d12ba0d8b9e286dbb763ec836655fff"
  },
  {
    "questionId": "u08-s008-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "P 同時在線段 AB 與 AC 的垂直平分線上。下列哪一項一定成立？",
    "givenConditions": [
      "P 在 AB 的垂直平分線上。",
      "P 在 AC 的垂直平分線上。"
    ],
    "target": "由兩條垂直平分線交點推三點等距",
    "choices": [
      "AB=AC",
      "PA=PB=PC",
      "P 是 A、B、C 的中點",
      "∠A 一定是直角"
    ],
    "answerIndex": 1,
    "independentSolution": "P 到三點 A、B、C 等距。",
    "explanation": "P 在 AB 的垂直平分線上，所以 PA=PB；P 同時在 AC 的垂直平分線上，所以 PA=PC。以共同的 PA 串連兩式，可得 PA=PB=PC；這不表示 AB=AC，也不能推出 A 角為直角。",
    "steps": [
      "由第一條垂直平分線寫出 PA=PB。",
      "由第二條垂直平分線寫出 PA=PC。",
      "利用共同量 PA 合併，得到 P 到 A、B、C 三點等距。"
    ],
    "optionAnalysis": [
      {
        "choice": "AB=AC",
        "truth": false,
        "reason": "P 的等距不必推出原三角形兩邊相等。"
      },
      {
        "choice": "PA=PB=PC",
        "truth": true,
        "reason": "P 在 AB 的垂直平分線上得 PA=PB；在 AC 的垂直平分線上得 PA=PC，因此三者相等。"
      },
      {
        "choice": "P 是 A、B、C 的中點",
        "truth": false,
        "reason": "一個點不可能同時是三條連線的中點。"
      },
      {
        "choice": "∠A 一定是直角",
        "truth": false,
        "reason": "等距條件不能決定頂角。"
      }
    ],
    "misconceptionTarget": "把點到端點等距誤改成兩條線段 AB、AC 等長，或推出無關角度。",
    "prerequisiteCheck": "能使用兩次垂直平分線定理。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不給數值，等距單位自然一致。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需合併兩條等式。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "3f39ec990bc02402dbbec1e5bede889d09122ccf01c2741501e719463967e184"
  },
  {
    "questionId": "u08-s008-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個圖形關於直線 k 線對稱。點 R 位在 k 上。翻折後 R 的對應點在哪裡？",
    "givenConditions": [
      "圖形沿 k 翻折。",
      "R 位在 k 上。"
    ],
    "target": "判斷對稱軸上點的像",
    "choices": [
      "在 k 的另一側且距離相同",
      "在 k 上任意其他位置",
      "無法判斷",
      "仍是 R 本身"
    ],
    "answerIndex": 3,
    "independentSolution": "R 是自己的對應點。",
    "explanation": "點 R 位在對稱軸 k 上，到軸的垂直距離為零。鏡射會把點移到軸另一側相同距離的位置，但零距離的另一側位置仍是原點本身，所以 R 的對應點就是 R，不會沿著軸任意移動。",
    "steps": [
      "確認 R 本來就在對稱軸 k 上。",
      "使用鏡射前後到軸距離相等的性質。",
      "由距離為零判定對應點仍與 R 重合。"
    ],
    "optionAnalysis": [
      {
        "choice": "在 k 的另一側且距離相同",
        "truth": false,
        "reason": "R 到 k 的距離為 0，另一側同距離仍是原點。"
      },
      {
        "choice": "在 k 上任意其他位置",
        "truth": false,
        "reason": "鏡射不會沿軸平移。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "軸上點在鏡射下固定。"
      },
      {
        "choice": "仍是 R 本身",
        "truth": true,
        "reason": "對稱軸上的點翻折後位置不變。"
      }
    ],
    "misconceptionTarget": "誤以為所有點鏡射後都一定移到另一側，忽略軸上點保持不動。",
    "prerequisiteCheck": "能理解線對稱。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "軸上邊界情形。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "4d7e04968742cfd994b4cf1ed3d221c9321311b71f03749ce8568d5c15fcc249"
  },
  {
    "questionId": "u08-s008-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "A、B 為相異點，P、Q 都滿足 PA=PB 且 QA=QB。下列何者一定正確？",
    "givenConditions": [
      "A、B 相異。",
      "P、Q 各自到 A、B 等距。"
    ],
    "target": "描述多個等距點的共同軌跡",
    "choices": [
      "P、Q 必為同一點",
      "PQ 必垂直 AB，但 P、Q 可能重合時無法稱線段方向",
      "P、Q 都在 AB 的垂直平分線上",
      "P、Q 都是 AB 的中點"
    ],
    "answerIndex": 2,
    "independentSolution": "兩點都屬於同一條垂直平分線，但不必重合。",
    "explanation": "由 PA=PB 可知 P 在 AB 的垂直平分線上；由 QA=QB 可知 Q 也在同一條垂直平分線上。P、Q 不必是同一點，也不必是 AB 中點；若兩點重合，還不能談 PQ 的方向，因此第三項最完整且必然成立。",
    "steps": [
      "分別對 P 的等距條件使用逆定理。",
      "再對 Q 的等距條件使用逆定理。",
      "得到兩點都在線段 AB 的垂直平分線上，且不加入 P、Q 相異的假設。"
    ],
    "optionAnalysis": [
      {
        "choice": "P、Q 必為同一點",
        "truth": false,
        "reason": "垂直平分線上有無限多個等距點。"
      },
      {
        "choice": "PQ 必垂直 AB，但 P、Q 可能重合時無法稱線段方向",
        "truth": false,
        "reason": "若 P、Q 相異，連線在同一垂直平分線上會垂直 AB；但題目未說相異。"
      },
      {
        "choice": "P、Q 都在 AB 的垂直平分線上",
        "truth": true,
        "reason": "每個到 A、B 等距的點都位於 AB 的垂直平分線。"
      },
      {
        "choice": "P、Q 都是 AB 的中點",
        "truth": false,
        "reason": "等距點不必在線段 AB 上。"
      }
    ],
    "misconceptionTarget": "自行假設 P、Q 必相異而斷言 PQ 有固定方向，忽略兩點可能重合的邊界。",
    "prerequisiteCheck": "能使用逆敘述與軌跡概念。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需處理多點與可能重合的邊界。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "2f951d3e13a476d2aac2a62753b9115645aa3b4a0226fe229c0f3c9518a9a0c4"
  },
  {
    "questionId": "u08-s008-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩個村落 A、B 要設置一座到兩村距離相同的消防站。若不考慮道路限制，消防站所有可能位置形成什麼？",
    "givenConditions": [
      "A、B 為兩村位置。",
      "站點到兩村距離相同。"
    ],
    "target": "把等距設施設置轉成垂直平分線軌跡",
    "choices": [
      "線段 AB 的垂直平分線",
      "只有 AB 的中點",
      "以 A 為圓心的圓",
      "直線 AB 本身"
    ],
    "answerIndex": 0,
    "independentSolution": "所有可行點形成 AB 的垂直平分線。",
    "explanation": "若消防站位置為 P，到兩村距離相同就是 PA=PB。所有滿足這個等距條件的點形成線段 AB 的垂直平分線，不只中點一處；道路限制已排除，所以整條直線上的位置都符合幾何條件。",
    "steps": [
      "以 P 表示消防站，把情境翻成 PA=PB。",
      "使用兩定點等距軌跡是其連線垂直平分線。",
      "判定所有可能位置形成一條直線，而不是單一中點或圓。"
    ],
    "optionAnalysis": [
      {
        "choice": "線段 AB 的垂直平分線",
        "truth": true,
        "reason": "到兩固定點等距的點集是兩點連線的垂直平分線。"
      },
      {
        "choice": "只有 AB 的中點",
        "truth": false,
        "reason": "平面上還有其他到 A、B 等距的點。"
      },
      {
        "choice": "以 A 為圓心的圓",
        "truth": false,
        "reason": "圓上點只保證到 A 距離相同，未固定與 B 相等。"
      },
      {
        "choice": "直線 AB 本身",
        "truth": false,
        "reason": "除中點外，AB 上其他點到兩端距離不同。"
      }
    ],
    "misconceptionTarget": "只想到 AB 中點一個位置，沒有辨認整條垂直平分線上的點都等距。",
    "prerequisiteCheck": "能使用等距軌跡。",
    "estimatedTimeSec": 90,
    "unitCheck": "距離單位未指定，但兩距離以同一尺度比較。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "設施選址中的等距條件是不可刪除的幾何模型。",
    "literacyContextNecessity": "消防站位置不是任意生活背景；『到兩村距離相同』直接決定可行位置是一條垂直平分線。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "93c02f531b16086b0e6f294299129bb3cf8a1a9b17235912cfdd0da807f581c2"
  },
  {
    "questionId": "u08-s008-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "紙張沿摺線 l 對摺後，孔 A 與孔 B 完全重合。下列哪一項可用來檢查摺線是否正確？",
    "givenConditions": [
      "沿 l 對摺。",
      "A 與 B 重合。"
    ],
    "target": "由摺紙重合條件判定摺線",
    "choices": [
      "l 應平行 AB",
      "l 必通過 A 而不通過 B",
      "l 應垂直平分 AB",
      "l 到 A 的距離可與到 B 不同"
    ],
    "answerIndex": 2,
    "independentSolution": "檢查 90° 與中點即可驗證摺線。",
    "explanation": "對摺後 A、B 完全重合，表示它們關於摺線 l 互為對稱點。對稱軸必與對應點連線 AB 垂直，並通過 AB 中點，所以檢查 l 是否垂直平分 AB，就能同時驗證方向與位置。",
    "steps": [
      "將孔 A、B 重合辨認為關於摺線的鏡射對應。",
      "使用對稱軸垂直平分對應點連線的性質。",
      "檢查 l 與 AB 垂直且通過中點，選第三項。"
    ],
    "optionAnalysis": [
      {
        "choice": "l 應平行 AB",
        "truth": false,
        "reason": "平行摺線不會把 A、B 互相映射。"
      },
      {
        "choice": "l 必通過 A 而不通過 B",
        "truth": false,
        "reason": "若 A 不在軸上，軸不通過任一對應點。"
      },
      {
        "choice": "l 應垂直平分 AB",
        "truth": true,
        "reason": "摺線是 A、B 這對對應點連線的垂直平分線。"
      },
      {
        "choice": "l 到 A 的距離可與到 B 不同",
        "truth": false,
        "reason": "對稱點到軸距離必相等。"
      }
    ],
    "misconceptionTarget": "只檢查摺線到兩孔距離，或誤判摺線應與兩孔連線平行。",
    "prerequisiteCheck": "能理解對應點與對稱軸。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "實際摺紙操作對應線對稱定義。",
    "literacyContextNecessity": "孔能否重合完全取決於摺線是否垂直平分兩孔連線；情境提供可操作的驗收條件。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "5e2424930e0ef281ca0ade66709e916f7b5e6991c09e2faca33bf79e42e286e2"
  },
  {
    "questionId": "u08-s008-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "公園設計一條對稱步道，中心線 k 為對稱軸。座椅 S 距 k 為 2.4 公尺，另一側對稱座椅 S' 到 k 的距離應為多少？",
    "givenConditions": [
      "k 為對稱軸。",
      "S 與 S' 為對應座椅。",
      "S 到 k 2.4 公尺。"
    ],
    "target": "由對稱步道求對應物到軸距離",
    "choices": [
      "1.2 公尺",
      "2.4 公尺",
      "4.8 公尺",
      "0 公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "S' 到 k 也是 2.4 公尺。",
    "explanation": "線對稱會保留點到對稱軸的垂直距離。座椅 S 與 S' 分居 k 的兩側，中心線 k 垂直平分 SS'，所以兩座椅到 k 的距離相同；S 距軸二點四公尺，S' 也距軸二點四公尺。",
    "steps": [
      "辨認 S、S' 是關於中心線 k 的對稱點。",
      "使用對應點到對稱軸距離相等的性質。",
      "把 S 的 2.4 公尺距離轉給 S'，並保留長度單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "1.2 公尺",
        "truth": false,
        "reason": "對稱不是把距離減半。"
      },
      {
        "choice": "2.4 公尺",
        "truth": true,
        "reason": "對稱點到對稱軸的垂直距離相等。"
      },
      {
        "choice": "4.8 公尺",
        "truth": false,
        "reason": "4.8 公尺是兩座椅間距離，前提是連線垂直 k。"
      },
      {
        "choice": "0 公尺",
        "truth": false,
        "reason": "只有位在對稱軸上的點距離為 0。"
      }
    ],
    "misconceptionTarget": "把兩座椅間總距離四點八公尺誤當成單一座椅到對稱軸的距離。",
    "prerequisiteCheck": "能理解對稱點等距。",
    "estimatedTimeSec": 90,
    "unitCheck": "兩距離均以公尺表示。",
    "roundingCheck": "2.4 為題目精確給定值，不需四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "空間配置中的軸距是核心設計量。",
    "literacyContextNecessity": "座椅必須鏡射配置，2.4 公尺的軸距直接決定另一側位置與步道平衡。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "8bd863d114195e9b79c5dce626a79c6fe412a1bd05c6a9778be4c3971f4ce8d5"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s008-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "線段 AB 長 14 公分，點 M 是其中點，直線 l 通過 M 且垂直 AB。點 P 在 l 上，PA=10 公分。求 AM、BM 與 PB，並說明理由。",
    "requiredWork": [
      "由中點求AM、BM。",
      "使用垂直平分線等距性求PB。",
      "附單位與性質。"
    ],
    "standardSolution": [
      "M 是長十四公分線段 AB 的中點，所以 AM=BM=14÷2=7 公分。",
      "直線 l 通過中點 M 且垂直 AB，兩項定義條件都成立，因此 l 是線段 AB 的垂直平分線。",
      "P 在 l 上，依垂直平分線上點到兩端等距，PA=PB；已知 PA=10 公分，所以 PB=10 公分。"
    ],
    "alternativeMethods": [
      "可由直角三角形全等說明PA=PB，但本題直接用垂直平分線定理即可。"
    ],
    "reasoningSteps": [
      "由中點定義將 AB 平分，求 AM、BM 各七公分。",
      "同時檢查 l 垂直 AB 且通過中點，判定為垂直平分線。",
      "使用垂直平分線上的等距性質寫 PA=PB。",
      "代入 PA 十公分，得到 PB 十公分並核對單位。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "AM=BM=7公分、PB=10公分，並完整說明l為垂直平分線。"
      },
      {
        "score": 2,
        "criteria": "數值全對但等距理由或中點理由缺一；或只少一個單位。"
      },
      {
        "score": 1,
        "criteria": "至少正確求出7公分或由PA=PB得PB=10。"
      },
      {
        "score": 0,
        "criteria": "把垂直線任意點誤認等距而未使用中點，且數值錯誤。"
      }
    ],
    "partialCreditRules": [
      "PA與PB是距離，不使用負數。"
    ],
    "followThroughPolicy": "若14÷2算錯，不影響以PA=PB求PB的獨立得分；兩部分分開評分。",
    "unitAndNotationRules": "所有長度使用公分；線段長可寫AM=7。",
    "answerOnlyPolicy": "只列7、7、10無理由最高2分。",
    "commonErrors": [
      "把 PB 算成 PA+AB=24 公分，錯把兩段距離首尾相接。",
      "只因 l 垂直 AB 就使用等距定理，漏查它是否通過中點。",
      "把十四公分直接當 AM 與 BM 各自長度，造成總長加倍。"
    ],
    "independentReview": {
      "derivedResult": "AM=BM=7公分，PB=10公分。",
      "ambiguityAudit": "中點、垂直與P在線上三個條件完整，等距結論唯一。",
      "reviewNote": "獨立檢查l符合垂直平分線定義，再套用軌跡性質，數值無衝突。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "polygon-angle-basic"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "5836442d19e4c863df1093c341cca37e085cf8b96413057a6ec2b80625638e96"
  },
  {
    "questionId": "u08-s008-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-symmetry",
    "skillId": "perpendicular-bisector-symmetry",
    "lockedSkillTitle": "垂直平分線與線對稱",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "點 P、Q 位於線段 AB 的同一側，且 PA=PB、QA=QB。證明直線 PQ 是線段 AB 的垂直平分線；並說明若 P、Q 是同一點時為何不能下此結論。",
    "requiredWork": [
      "用等距點的逆性質判斷P、Q位置。",
      "由兩個不同點決定一直線。",
      "說明P=Q時缺少唯一直線。"
    ],
    "standardSolution": [
      "由 PA=PB，依等距點的逆定理，P 在線段 AB 的垂直平分線上；同理由 QA=QB，Q 也在同一條垂直平分線上。",
      "若 P、Q 是不同點，兩相異點決定唯一一直線，而既有的 AB 垂直平分線同時通過 P、Q，所以直線 PQ 就是 AB 的垂直平分線。",
      "若 P=Q，只得到一個等距點；通過單一點有無數條直線，且線段 PQ 退化沒有方向，因此不能由此唯一判定直線 PQ。"
    ],
    "alternativeMethods": [
      "也可設AB中點M，分別由等距構造證明PM⊥AB、QM⊥AB，再用過一點到已知直線的垂線唯一。"
    ],
    "reasoningSteps": [
      "將 P 的等距條件轉成它位於 AB 垂直平分線上。",
      "將 Q 的等距條件轉成它位於同一條直線上。",
      "在 P、Q 相異時使用兩點決定一直線，完成證明。",
      "另行檢查 P=Q 的退化情況，指出唯一方向不存在。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整證明P、Q均在垂直平分線且P≠Q時PQ唯一，並正確處理P=Q。"
      },
      {
        "score": 2,
        "criteria": "主證明完整但退化情況說明略缺；或結論正確且有兩個等距逆性質但唯一性未明說。"
      },
      {
        "score": 1,
        "criteria": "至少指出P、Q各在AB垂直平分線上，或指出同一點不能決定直線。"
      },
      {
        "score": 0,
        "criteria": "只因PA=PB就直接說PQ垂直AB，未處理Q或直線唯一性。"
      }
    ],
    "partialCreditRules": [
      "題目首句未明說P≠Q，因此作答必須條件化；這是本題核心邊界。"
    ],
    "followThroughPolicy": "若把P、Q字母互換不影響；若漏一個等距式但推理架構清楚，最高2分。",
    "unitAndNotationRules": "線段與直線名稱用大寫點名；等距式需對應同一端點。",
    "answerOnlyPolicy": "只答「是」或「不是」均不得分，必須證明與處理例外。",
    "commonErrors": [
      "只找到 P 一個等距點就宣稱任何通過 P 的直線都是垂直平分線。",
      "未說明 P、Q 必須相異，忽略重合時無法決定直線方向。",
      "把 PA=PB 錯解成 P 是 AB 中點，限制了所有其他等距位置。"
    ],
    "independentReview": {
      "derivedResult": "當P≠Q時，PQ為AB的垂直平分線；P=Q時不能確定。",
      "ambiguityAudit": "『同一側』不影響等距軌跡，但P與Q是否不同影響直線唯一性，題目已要求說明。",
      "reviewNote": "獨立使用等距軌跡的充要關係與兩點定一直線，確認結論需加P≠Q。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "polygon-angle-basic"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "98b490fb01e5448ee5eef54b74d13176a5ad8beac4fcc112d98d1f5ff2a1b27c"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s008-v001",
    "unitId": "u08",
    "skillId": "perpendicular-bisector-symmetry",
    "contentSha256": "eacd92a3b977a7024a090d71cd9d6ed229c7f4de4d7ba949ba949966645b19d6",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "逐字拆解名稱，兩必要條件完整。",
    "derivedAnswer": "垂直 AB 且通過 AB 的中點",
    "storedAnswer": "垂直 AB 且通過 AB 的中點",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「垂直 AB 且通過 AB 的中點」符合目標「辨認垂直平分線定義」。其餘選項分別違反：可能沒有平分 AB。；可能不是垂直。；與垂直平分完全不同。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「垂直平分線與線對稱」講義已定義範圍；本題特別使用：線段端點為 A、B。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「辨認垂直平分線定義」重新讀題，並針對誤解「只滿足垂直或中點其中一項。」排除另一解讀。"
    },
    "difficultyReason": "直接定義辨認。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認垂直與中點。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「辨認垂直平分線定義」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：逐字拆解名稱，兩必要條件完整。 正確選項為「垂直 AB 且通過 AB 的中點」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "b66c3a3d5071498bc8030f1950d41af206dc3d4f29a819566c2912d8400f8b9a"
  },
  {
    "questionId": "u08-s008-v002",
    "unitId": "u08",
    "skillId": "perpendicular-bisector-symmetry",
    "contentSha256": "840bc6e11021049cfe7d3d24824e9d99193d03fc6422d6c43e6d7c9d5e00fa04",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由定理直接代入 PA 的長度。",
    "derivedAnswer": "6 公分",
    "storedAnswer": "6 公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「6 公分」符合目標「由垂直平分線求另一端距離」。其餘選項分別違反：垂直平分的是 AB，不是把 PA 對半。；等距不是相加。；垂直平分線性質已足以判斷。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「垂直平分線與線對稱」講義已定義範圍；本題特別使用：P 在 AB 的垂直平分線上。",
      "unitConflict": "兩距離均以公分表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由垂直平分線求另一端距離」重新讀題，並針對誤解「把『平分』誤用到 PA 或 PB。」排除另一解讀。"
    },
    "difficultyReason": "單一步驟定理。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能讀等長式。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由垂直平分線求另一端距離」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由定理直接代入 PA 的長度。 正確選項為「6 公分」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "f1566d034b87234d4a04b3a9cbc2262ea904f98a0f2e1d1b8613e79f91e00b60"
  },
  {
    "questionId": "u08-s008-v003",
    "unitId": "u08",
    "skillId": "perpendicular-bisector-symmetry",
    "contentSha256": "e9f474f25b5b47c2c7fd4cc6afc7e7db8306f92467e469769603bcac556119af",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "等距條件不限制 Q 為中點，而是一整條直線。",
    "derivedAnswer": "線段 AB 的垂直平分線上",
    "storedAnswer": "線段 AB 的垂直平分線上",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「線段 AB 的垂直平分線上」符合目標「由等距反推點的位置」。其餘選項分別違反：Q 不一定在線段 AB 上。；等距點一般不在由 A 指向 B 的射線。；與 QB 無關。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「垂直平分線與線對稱」講義已定義範圍；本題特別使用：QA=QB。",
      "unitConflict": "本題不涉及特定長度單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由等距反推點的位置」重新讀題，並針對誤解「把所有等距點縮成唯一中點。」排除另一解讀。"
    },
    "difficultyReason": "直接使用逆敘述。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解定理逆敘述。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由等距反推點的位置」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：等距條件不限制 Q 為中點，而是一整條直線。 正確選項為「線段 AB 的垂直平分線上」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "0fde8c86f8789035d558a3e6618b68a2586ea1645f5912c4bf8fb20f7af5fa77"
  },
  {
    "questionId": "u08-s008-v004",
    "unitId": "u08",
    "skillId": "perpendicular-bisector-symmetry",
    "contentSha256": "8c51fde36d8fd2616e47458a707f7e489dc9118fc38ba161a93945f5474c82d5",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由鏡射定義重新核對。",
    "derivedAnswer": "l 垂直平分線段 AA'",
    "storedAnswer": "l 垂直平分線段 AA'",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「l 垂直平分線段 AA'」符合目標「判斷對稱軸與對應點連線關係」。其餘選項分別違反：對稱軸與對應點連線垂直。；兩點位於軸兩側；若點在軸上則與自身重合，本題以相異對應點理解。；相異對應點距離通常大於 0。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「垂直平分線與線對稱」講義已定義範圍；本題特別使用：A、A' 為關於 l 的相異對應點。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "題目以 A、A' 為相異對應點；若點在對稱軸上會與自身重合，線段退化情形不在本題。",
      "alternateReading": "已以所求量「判斷對稱軸與對應點連線關係」重新讀題，並針對誤解「把對稱軸誤認為與連線平行。」排除另一解讀。"
    },
    "difficultyReason": "標準性質辨認。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解線對稱。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷對稱軸與對應點連線關係」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由鏡射定義重新核對。 正確選項為「l 垂直平分線段 AA'」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：題目以 A、A' 為相異對應點；若點在對稱軸上會與自身重合，線段退化情形不在本題。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "80d3a2694cc38bba09572957f1b75424b5332649720f925b5b706df067adcbe4"
  },
  {
    "questionId": "u08-s008-v005",
    "unitId": "u08",
    "skillId": "perpendicular-bisector-symmetry",
    "contentSha256": "38059cb88a121873031bc0443fec7826965c54e2f24ccfc1217213e9272a491a",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "構造反例：任何非垂直的過 M 直線都不成立。",
    "derivedAnswer": "不能，還缺少 l ⟂ AB",
    "storedAnswer": "不能，還缺少 l ⟂ AB",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「不能，還缺少 l ⟂ AB」符合目標「判斷中點條件是否足以保證垂直平分線」。其餘選項分別違反：垂直平分線還需垂直。；雖通過中點，但不一定垂直。；恰好相反，必須通過中點。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「垂直平分線與線對稱」講義已定義範圍；本題特別使用：M 為 AB 中點。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判斷中點條件是否足以保證垂直平分線」重新讀題，並針對誤解「把必要條件之一當充分條件。」排除另一解讀。"
    },
    "difficultyReason": "資訊充分性判斷。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能區分垂直與平分。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷中點條件是否足以保證垂直平分線」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：構造反例：任何非垂直的過 M 直線都不成立。 正確選項為「不能，還缺少 l ⟂ AB」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "c55f77b4543965dd929198eb7745245994b58b610658c13d707b7134601fcd8f"
  },
  {
    "questionId": "u08-s008-v006",
    "unitId": "u08",
    "skillId": "perpendicular-bisector-symmetry",
    "contentSha256": "67e20743fe3c0d716c4564755d13a5b11d12ba0d8b9e286dbb763ec836655fff",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立驗算 7+7=14。",
    "derivedAnswer": "各 7 公分",
    "storedAnswer": "各 7 公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「各 7 公分」符合目標「由中點求兩半線段長」。其餘選項分別違反：中點把線段分成兩個等長部分。；雖相加 14，但不相等。；把總長錯誤加倍。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「垂直平分線與線對稱」講義已定義範圍；本題特別使用：AB=14 公分。",
      "unitConflict": "所有長度以公分表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由中點求兩半線段長」重新讀題，並針對誤解「只檢查總和而忘記兩段相等。」排除另一解讀。"
    },
    "difficultyReason": "標準中點計算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用線段加法。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由中點求兩半線段長」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立驗算 7+7=14。 正確選項為「各 7 公分」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "e74b81f30544de5acb8c845353435f895335d0259e0586a205fea2f67b389a70"
  },
  {
    "questionId": "u08-s008-v007",
    "unitId": "u08",
    "skillId": "perpendicular-bisector-symmetry",
    "contentSha256": "3f39ec990bc02402dbbec1e5bede889d09122ccf01c2741501e719463967e184",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由兩個定理結果以共同 PA 傳遞相等。",
    "derivedAnswer": "PA=PB=PC",
    "storedAnswer": "PA=PB=PC",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「PA=PB=PC」符合目標「由兩條垂直平分線交點推三點等距」。其餘選項分別違反：P 的等距不必推出原三角形兩邊相等。；一個點不可能同時是三條連線的中點。；等距條件不能決定頂角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「垂直平分線與線對稱」講義已定義範圍；本題特別使用：P 在 AB 的垂直平分線上。",
      "unitConflict": "本題不給數值，等距單位自然一致。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由兩條垂直平分線交點推三點等距」重新讀題，並針對誤解「由點到端點等距錯推原邊長或角度。」排除另一解讀。"
    },
    "difficultyReason": "需合併兩條等式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用兩次垂直平分線定理。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由兩條垂直平分線交點推三點等距」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由兩個定理結果以共同 PA 傳遞相等。 正確選項為「PA=PB=PC」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "522a2d9489cb9af0e08b72db7d7c704e4b100a41359fb07673eac84dcb428f10"
  },
  {
    "questionId": "u08-s008-v008",
    "unitId": "u08",
    "skillId": "perpendicular-bisector-symmetry",
    "contentSha256": "4d7e04968742cfd994b4cf1ed3d221c9321311b71f03749ce8568d5c15fcc249",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由鏡射固定點性質確認。",
    "derivedAnswer": "仍是 R 本身",
    "storedAnswer": "仍是 R 本身",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「仍是 R 本身」符合目標「判斷對稱軸上點的像」。其餘選項分別違反：R 到 k 的距離為 0，另一側同距離仍是原點。；鏡射不會沿軸平移。；軸上點在鏡射下固定。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「垂直平分線與線對稱」講義已定義範圍；本題特別使用：圖形沿 k 翻折。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判斷對稱軸上點的像」重新讀題，並針對誤解「認為所有點都必移到另一側。」排除另一解讀。"
    },
    "difficultyReason": "軸上邊界情形。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解線對稱。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷對稱軸上點的像」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由鏡射固定點性質確認。 正確選項為「仍是 R 本身」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "40f8d6266c42f9e163b5ea74d68402aac15412d5cdcd66fe8712fe9dcd1de549"
  },
  {
    "questionId": "u08-s008-v009",
    "unitId": "u08",
    "skillId": "perpendicular-bisector-symmetry",
    "contentSha256": "2f951d3e13a476d2aac2a62753b9115645aa3b4a0226fe229c0f3c9518a9a0c4",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "等距軌跡是一條直線，含無限多點。",
    "derivedAnswer": "P、Q 都在 AB 的垂直平分線上",
    "storedAnswer": "P、Q 都在 AB 的垂直平分線上",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「P、Q 都在 AB 的垂直平分線上」符合目標「描述多個等距點的共同軌跡」。其餘選項分別違反：垂直平分線上有無限多個等距點。；若 P、Q 相異，連線在同一垂直平分線上會垂直 AB；但題目未說相異。；等距點不必在線段 AB 上。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「垂直平分線與線對稱」講義已定義範圍；本題特別使用：A、B 相異。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「描述多個等距點的共同軌跡」重新讀題，並針對誤解「以為垂直平分線只含中點或單一點。」排除另一解讀。"
    },
    "difficultyReason": "需處理多點與可能重合的邊界。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用逆敘述與軌跡概念。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「描述多個等距點的共同軌跡」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：等距軌跡是一條直線，含無限多點。 正確選項為「P、Q 都在 AB 的垂直平分線上」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "9e4d5061c927970622bddd7f1d2d19d43b45720026c0eea47be99b3259a4bcf3"
  },
  {
    "questionId": "u08-s008-v010",
    "unitId": "u08",
    "skillId": "perpendicular-bisector-symmetry",
    "contentSha256": "93c02f531b16086b0e6f294299129bb3cf8a1a9b17235912cfdd0da807f581c2",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "不是單一中點，而是一整條等距軌跡。",
    "derivedAnswer": "線段 AB 的垂直平分線",
    "storedAnswer": "線段 AB 的垂直平分線",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「線段 AB 的垂直平分線」符合目標「把等距設施設置轉成垂直平分線軌跡」。其餘選項分別違反：平面上還有其他到 A、B 等距的點。；圓上點只保證到 A 距離相同，未固定與 B 相等。；除中點外，AB 上其他點到兩端距離不同。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「垂直平分線與線對稱」講義已定義範圍；本題特別使用：A、B 為兩村位置。",
      "unitConflict": "距離單位未指定，但兩距離以同一尺度比較。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「把等距設施設置轉成垂直平分線軌跡」重新讀題，並針對誤解「只選中點，忽略平面其他等距位置。」排除另一解讀。"
    },
    "difficultyReason": "設施選址中的等距條件是不可刪除的幾何模型。",
    "literacyContextNecessity": "消防站位置不是任意生活背景；『到兩村距離相同』直接決定可行位置是一條垂直平分線。",
    "prerequisiteCheck": "能使用等距軌跡。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「把等距設施設置轉成垂直平分線軌跡」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：不是單一中點，而是一整條等距軌跡。 正確選項為「線段 AB 的垂直平分線」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "f32388abc1a2cb5508f42b4df0cb5474cbf01a3d4d71b66833a138dd3a9a2217"
  },
  {
    "questionId": "u08-s008-v011",
    "unitId": "u08",
    "skillId": "perpendicular-bisector-symmetry",
    "contentSha256": "5e2424930e0ef281ca0ade66709e916f7b5e6991c09e2faca33bf79e42e286e2",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "鏡射條件要求 l 經 AB 中點且與 AB 垂直。",
    "derivedAnswer": "l 應垂直平分 AB",
    "storedAnswer": "l 應垂直平分 AB",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「l 應垂直平分 AB」符合目標「由摺紙重合條件判定摺線」。其餘選項分別違反：平行摺線不會把 A、B 互相映射。；若 A 不在軸上，軸不通過任一對應點。；對稱點到軸距離必相等。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「垂直平分線與線對稱」講義已定義範圍；本題特別使用：沿 l 對摺。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由摺紙重合條件判定摺線」重新讀題，並針對誤解「只檢查摺線通過某一孔。」排除另一解讀。"
    },
    "difficultyReason": "實際摺紙操作對應線對稱定義。",
    "literacyContextNecessity": "孔能否重合完全取決於摺線是否垂直平分兩孔連線；情境提供可操作的驗收條件。",
    "prerequisiteCheck": "能理解對應點與對稱軸。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由摺紙重合條件判定摺線」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：鏡射條件要求 l 經 AB 中點且與 AB 垂直。 正確選項為「l 應垂直平分 AB」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "d4cb7c714e013d520208b472e15da66fdf717f88a550a8203034bd2a33f69b97"
  },
  {
    "questionId": "u08-s008-v012",
    "unitId": "u08",
    "skillId": "perpendicular-bisector-symmetry",
    "contentSha256": "8bd863d114195e9b79c5dce626a79c6fe412a1bd05c6a9778be4c3971f4ce8d5",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "兩座椅間若沿垂線相隔 4.8，但題目只問單側軸距。",
    "derivedAnswer": "2.4 公尺",
    "storedAnswer": "2.4 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「2.4 公尺」符合目標「由對稱步道求對應物到軸距離」。其餘選項分別違反：對稱不是把距離減半。；4.8 公尺是兩座椅間距離，前提是連線垂直 k。；只有位在對稱軸上的點距離為 0。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「垂直平分線與線對稱」講義已定義範圍；本題特別使用：k 為對稱軸。",
      "unitConflict": "兩距離均以公尺表示。",
      "roundingConflict": "2.4 為題目精確給定值，不需四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由對稱步道求對應物到軸距離」重新讀題，並針對誤解「把兩對稱點間距離當成單側軸距。」排除另一解讀。"
    },
    "difficultyReason": "空間配置中的軸距是核心設計量。",
    "literacyContextNecessity": "座椅必須鏡射配置，2.4 公尺的軸距直接決定另一側位置與步道平衡。",
    "prerequisiteCheck": "能理解對稱點等距。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由對稱步道求對應物到軸距離」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：兩座椅間若沿垂線相隔 4.8，但題目只問單側軸距。 正確選項為「2.4 公尺」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "1d2c49b24764f8131ba4e72ee5a7ac2f68fd2aae23aa57faab61a0a3f3101b3b"
  }
];

export const DRAWING_SPECS = [];

