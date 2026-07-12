// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s003-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-elements",
  "skillId": "parallel-perpendicular-angles",
  "lockedSkillTitle": "平行垂直與對頂角",
  "title": "平行垂直與對頂角：用交點關係判斷角",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能辨認平行線與垂直線的定義。",
    "能利用對頂角相等求角度。",
    "能利用鄰補角和為 180° 求角度。",
    "能分清對頂角、相鄰角與同一個角。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "angle-types-measure"
    ],
    "bridgeExplanation": "先會判斷直角、平角與互補，再研究兩直線的位置關係。"
  },
  "prerequisites": [
    {
      "skillId": "angle-types-measure",
      "requiredLevel": "能辨認 90° 與 180°，並求補角。"
    }
  ],
  "glossary": [
    {
      "term": "平行線",
      "definition": "同一平面內永不相交的兩直線。"
    },
    {
      "term": "垂直線",
      "definition": "相交形成直角的兩直線。"
    },
    {
      "term": "對頂角",
      "definition": "兩直線相交時，頂點相同且兩邊互為反向射線的一對角。"
    },
    {
      "term": "鄰角",
      "definition": "頂點與一邊相同，內部不重疊的兩角。"
    },
    {
      "term": "鄰補角",
      "definition": "相鄰且另外兩邊形成一直線的兩角，和為 180°。"
    }
  ],
  "notation": [
    {
      "symbol": "l ∥ m",
      "meaning": "直線 l 平行直線 m。"
    },
    {
      "symbol": "l ⟂ m",
      "meaning": "直線 l 垂直直線 m。"
    },
    {
      "symbol": "∠1=∠3",
      "meaning": "若 ∠1、∠3 為對頂角，度數相等。"
    }
  ],
  "conceptDevelopment": [
    "平行與垂直都是直線間的關係。平行線在同一平面內沒有交點；垂直線一定相交，而且形成四個直角。",
    "兩直線相交會形成四個角。相對的兩角是對頂角，因此相等；相鄰且排成一直線的兩角和為 180°。",
    "知道其中一個角後，可以交替得到四個角：對面的角相同，旁邊的角用 180° 減。",
    "不能只憑看起來接近 90° 就判定垂直；必須有直角記號、度數或文字條件。"
  ],
  "formalDefinitions": [
    {
      "name": "平行的必要範圍",
      "statement": "兩直線必須位於同一平面，空間中不相交但不同平面的直線不在本技能討論。"
    },
    {
      "name": "垂直",
      "statement": "兩直線相交且至少一角為 90°；此時四角皆為 90°。"
    },
    {
      "name": "對頂角定理",
      "statement": "兩直線相交所形成的對頂角度數相等。"
    }
  ],
  "formulas": [
    {
      "formula": "對頂角相等",
      "conditions": [
        "必須由兩條完整直線相交形成"
      ],
      "meaning": "可直接把相對角度數設為相等。"
    },
    {
      "formula": "鄰補角和=180°",
      "conditions": [
        "兩角共邊且另外兩邊為反向射線"
      ],
      "meaning": "可由一角求相鄰角。"
    }
  ],
  "invalidUseCases": [
    "兩條線段不相交不代表它們所在直線平行。",
    "相等的兩角不一定是對頂角，還要檢查位置。",
    "共頂點的兩角不一定互補。",
    "沒有明確條件時不能以圖形外觀認定平行或垂直。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "確認研究的是直線、線段還是射線。",
      "check": "對頂角定理需要兩直線相交。"
    },
    {
      "step": 2,
      "instruction": "找出相對或相鄰位置。",
      "check": "相對用相等；相鄰成一直線用和 180°。"
    },
    {
      "step": 3,
      "instruction": "建立等式並求值。",
      "check": "含未知數時可用 x 表示角度。"
    },
    {
      "step": 4,
      "instruction": "回到四角檢查。",
      "check": "相對兩角相同，相鄰兩角相加 180°。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "兩直線相交，其中一角為 47°，其對頂角為多少？",
      "solutionSteps": [
        "對頂角度數相等。",
        "所以相對角也是 47°。"
      ],
      "answer": "47°。"
    },
    {
      "exampleId": "L2",
      "prompt": "同一交點的一個角為 128°，與它相鄰且成一直線的角為多少？",
      "solutionSteps": [
        "鄰補角和為 180°。",
        "180°-128°=52°。"
      ],
      "answer": "52°。"
    },
    {
      "exampleId": "L3",
      "prompt": "若直線 a 與 b 垂直，交點處任一角的度數為何？",
      "solutionSteps": [
        "垂直定義是相交成直角。",
        "四個角皆為 90°。"
      ],
      "answer": "90°。"
    },
    {
      "exampleId": "L4",
      "prompt": "兩直線相交，一對對頂角分別為 (3x+5)° 與 (5x-35)°，求 x。",
      "solutionSteps": [
        "對頂角相等，3x+5=5x-35。",
        "40=2x，x=20。",
        "兩角皆為 65°。"
      ],
      "answer": "x=20。"
    }
  ],
  "levelConnections": {
    "basic": "辨認 ∥、⟂ 與對頂位置。",
    "standard": "由一角求對頂角與鄰補角。",
    "advanced": "以代數式處理相交直線的角度。",
    "literacy": "閱讀道路交會、施工直角或平行邊界規格時，必須依文字條件而非示意圖外觀。"
  },
  "commonMistakes": [
    {
      "mistake": "兩線看起來不交就判平行。",
      "why": "線段可能太短而未畫到交點。",
      "correction": "要看所在直線與題目條件。"
    },
    {
      "mistake": "把相鄰角當對頂角。",
      "why": "只看到同一頂點。",
      "correction": "對頂角不共邊，位置在交點兩側。"
    },
    {
      "mistake": "對頂角用 180° 相減。",
      "why": "混淆相等與互補。",
      "correction": "對頂角直接相等；鄰補角才相加 180°。"
    },
    {
      "mistake": "看到一個 90° 卻只說一角是直角。",
      "why": "未利用相交直線關係。",
      "correction": "若兩直線垂直，四角都為 90°。"
    },
    {
      "mistake": "用相等角反推一定是對頂角。",
      "why": "相等只是度數關係。",
      "correction": "還需檢查兩邊是否為反向射線。"
    },
    {
      "mistake": "答案 x=20 後不檢查角度。",
      "why": "代數解可能導致不合理角度。",
      "correction": "回代確認角度在 0° 到 180°。"
    }
  ],
  "selfCheckItems": [
    "我是否先確認兩條完整直線相交？",
    "角是相對還是相鄰？",
    "對頂角用相等，鄰補角用 180° 嗎？",
    "我是否避免從圖形外觀猜平行或垂直？"
  ],
  "conciseSummary": [
    "平行線在同一平面內不相交。",
    "垂直線相交成四個直角。",
    "對頂角相等。",
    "鄰補角和為 180°。"
  ],
  "connections": {
    "previous": "上一技能提供直角、平角與互補概念。",
    "next": [
      "下一技能把平角拆分的觀念用於三角形內角和。"
    ]
  },
  "figureReferences": [
    "u08-s003-fig001"
  ],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "以四角模型逐一核對 47°、128° 與代數例題；對頂角相等和鄰補角 180° 的適用條件都限定為兩直線相交。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "27b5ecbef2116babc5739160c909819f986db8ac99b347dc664b18c3eade5e12"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s003-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "符號 l ⟂ m 表示什麼？",
    "givenConditions": [
      "l、m 為直線。"
    ],
    "target": "辨認垂直符號",
    "choices": [
      "直線 l 與直線 m 平行",
      "直線 l 與直線 m 重合",
      "直線 l 與直線 m 垂直",
      "直線 l 與直線 m 長度相等"
    ],
    "answerIndex": 2,
    "independentSolution": "符號直接表示垂直關係。",
    "explanation": "l ⟂ m 表示兩直線相交成直角。",
    "steps": [
      "辨認符號 ⟂。",
      "翻譯為垂直。"
    ],
    "optionAnalysis": [
      {
        "choice": "直線 l 與直線 m 平行",
        "truth": false,
        "reason": "平行使用 ∥。"
      },
      {
        "choice": "直線 l 與直線 m 重合",
        "truth": false,
        "reason": "⊥ 不表示重合。"
      },
      {
        "choice": "直線 l 與直線 m 垂直",
        "truth": true,
        "reason": "⊥ 是垂直符號。"
      },
      {
        "choice": "直線 l 與直線 m 長度相等",
        "truth": false,
        "reason": "直線沒有有限長度可比較。"
      }
    ],
    "misconceptionTarget": "把 ⟂ 與 ∥ 混淆。",
    "prerequisiteCheck": "能辨認直線記號。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "單一符號辨認。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "2fa40508482c79616baef8ca616e932659d68c7506394140faceb4a03877dd8c"
  },
  {
    "questionId": "u08-s003-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩條直線互相垂直，交點處的一個角為多少度？",
    "givenConditions": [
      "兩條直線明確互相垂直。"
    ],
    "target": "由垂直關係判定角度",
    "choices": [
      "45°",
      "180°",
      "360°",
      "90°"
    ],
    "answerIndex": 3,
    "independentSolution": "垂直交角固定為 90°。",
    "explanation": "兩直線垂直時四個交角皆為 90°。",
    "steps": [
      "由垂直得到直角。",
      "直角=90°。"
    ],
    "optionAnalysis": [
      {
        "choice": "45°",
        "truth": false,
        "reason": "45° 是銳角，不是垂直形成的角。"
      },
      {
        "choice": "180°",
        "truth": false,
        "reason": "180° 是平角。"
      },
      {
        "choice": "360°",
        "truth": false,
        "reason": "360° 是一周角，不是單一交角。"
      },
      {
        "choice": "90°",
        "truth": true,
        "reason": "垂直的定義是相交形成直角，直角為 90°。"
      }
    ],
    "misconceptionTarget": "把平角或一周角當成單一交角。",
    "prerequisiteCheck": "能辨認直角為 90°。",
    "estimatedTimeSec": 90,
    "unitCheck": "答案以度（°）表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接套用垂直定義。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "58d4b06cc11a383420165749a673182ee7cbc332c67a145121dc2f3e01158664"
  },
  {
    "questionId": "u08-s003-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩直線相交形成一對對頂角，其中一角為 38°，另一角為多少？",
    "givenConditions": [
      "兩角明確為對頂角。",
      "其中一角 38°。"
    ],
    "target": "由一個對頂角求另一角",
    "choices": [
      "38°",
      "52°",
      "142°",
      "180°"
    ],
    "answerIndex": 0,
    "independentSolution": "對頂角不需相減，直接得到 38°。",
    "explanation": "相對位置的兩角直接相等，因此另一角也是 38°。",
    "steps": [
      "辨認為對頂角。",
      "使用對頂角相等。"
    ],
    "optionAnalysis": [
      {
        "choice": "38°",
        "truth": true,
        "reason": "對頂角度數相等。"
      },
      {
        "choice": "52°",
        "truth": false,
        "reason": "52° 與 38° 和為 90°，但對頂角不是互餘。"
      },
      {
        "choice": "142°",
        "truth": false,
        "reason": "142° 是相鄰補角。"
      },
      {
        "choice": "180°",
        "truth": false,
        "reason": "180° 是平角總量。"
      }
    ],
    "misconceptionTarget": "把對頂角誤當鄰補角。",
    "prerequisiteCheck": "能使用角度與相交線概念。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位一致。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "單一步驟使用對頂角定理。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "d4bdf99bc34f51069dee6d601c1e3d362eb099aed75954206ad7edf134e09ae5"
  },
  {
    "questionId": "u08-s003-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "u08-s003-fig001",
    "drawingSpecRef": "u08-s003-draw001",
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_HUMAN_AUTHORED_FIGURE",
    "text": "兩直線相交，其中一角為 124°。與它相鄰且兩角外側邊成一直線的角為多少？",
    "givenConditions": [
      "兩角相鄰。",
      "非共邊的兩邊形成一直線。"
    ],
    "target": "求相交直線的鄰補角",
    "choices": [
      "124°",
      "56°",
      "66°",
      "236°"
    ],
    "answerIndex": 1,
    "independentSolution": "由平角總量扣除 124°，得 56°。",
    "explanation": "題目描述鄰補角。",
    "steps": [
      "寫 124+x=180。",
      "x=56。"
    ],
    "optionAnalysis": [
      {
        "choice": "124°",
        "truth": false,
        "reason": "這是對頂角，不是相鄰角。"
      },
      {
        "choice": "56°",
        "truth": true,
        "reason": "相鄰成一直線的兩角互補，180°−124°=56°。"
      },
      {
        "choice": "66°",
        "truth": false,
        "reason": "124+66=190，不合平角。"
      },
      {
        "choice": "236°",
        "truth": false,
        "reason": "以 360° 扣除一角得到的是其餘三角總和。"
      }
    ],
    "misconceptionTarget": "把相鄰角誤當對頂角。",
    "prerequisiteCheck": "能使用互補與相交直線關係。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位均為 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需從位置敘述辨認鄰補再運算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "e37c73f3ffdd511d72edbc85765a4dfdf267e446a6c87ac2454b18d3d542ef4f"
  },
  {
    "questionId": "u08-s003-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩直線相交，一對對頂角分別為 (4x+7)° 與 (6x−19)°。x 為何？",
    "givenConditions": [
      "兩角為對頂角。",
      "角度式分別為 4x+7、6x−19。"
    ],
    "target": "由代數式對頂角求參數",
    "choices": [
      "6",
      "26",
      "13",
      "45"
    ],
    "answerIndex": 2,
    "independentSolution": "解得 x=13，兩角皆 59°。",
    "explanation": "建立相等方程。",
    "steps": [
      "4x+7=6x−19。",
      "26=2x。",
      "x=13。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": false,
        "reason": "代回得 31° 與 17°，不相等。"
      },
      {
        "choice": "26",
        "truth": false,
        "reason": "把 26 誤當 x 而非 2x 的差。"
      },
      {
        "choice": "13",
        "truth": true,
        "reason": "對頂角相等，4x+7=6x−19，26=2x，所以 x=13。"
      },
      {
        "choice": "45",
        "truth": false,
        "reason": "把兩角相加設為 180°。"
      }
    ],
    "misconceptionTarget": "把對頂角誤設為和 180°。",
    "prerequisiteCheck": "能解一元一次方程與使用對頂角相等。",
    "estimatedTimeSec": 90,
    "unitCheck": "x 無單位；角度式代回後為 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "結合幾何位置與代數求解。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "535e0694eb589e38ef40d00a0cc818fe0cd186343137a374c308d740bac424e2"
  },
  {
    "questionId": "u08-s003-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "直線 a 與 b 垂直。若交點處一角標為 (3x+6)°，x 為何？",
    "givenConditions": [
      "a ⟂ b。",
      "交角為 3x+6 度。"
    ],
    "target": "由垂直角度式求參數",
    "choices": [
      "22",
      "30",
      "32",
      "28"
    ],
    "answerIndex": 3,
    "independentSolution": "代回得到 90°，符合垂直。",
    "explanation": "用直角條件建立方程。",
    "steps": [
      "3x+6=90。",
      "3x=84。",
      "x=28。"
    ],
    "optionAnalysis": [
      {
        "choice": "22",
        "truth": false,
        "reason": "代回為 72°，不是直角。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "代回為 96°。"
      },
      {
        "choice": "32",
        "truth": false,
        "reason": "代回為 102°。"
      },
      {
        "choice": "28",
        "truth": true,
        "reason": "垂直交角 90°，3x+6=90，3x=84，x=28。"
      }
    ],
    "misconceptionTarget": "只看到 3x 而漏掉常數 6。",
    "prerequisiteCheck": "能使用垂直為 90° 並解方程。",
    "estimatedTimeSec": 90,
    "unitCheck": "x 無單位，角度為 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需要將符號條件轉成代數等式。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "30fde34e6887f992e2761edbdd315f77a87aeb887d558cec3afea0afcf83127a"
  },
  {
    "questionId": "u08-s003-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩直線相交後四個角中，有一個角為 73°。四個角的度數組合為何？",
    "givenConditions": [
      "兩條完整直線相交。",
      "其中一角 73°。"
    ],
    "target": "完整求出相交直線四角",
    "choices": [
      "73°、107°、73°、107°",
      "四個都是 73°",
      "73°、73°、34°、180°",
      "73°、107°、90°、90°"
    ],
    "answerIndex": 0,
    "independentSolution": "四角交替為 73°、107°、73°、107°。",
    "explanation": "相交直線形成兩對等角且相鄰互補。",
    "steps": [
      "找對頂角 73°。",
      "算鄰補角 107°。",
      "另一對頂角也是 107°。"
    ],
    "optionAnalysis": [
      {
        "choice": "73°、107°、73°、107°",
        "truth": true,
        "reason": "對頂角相等得另一個 73°；相鄰角為 180°−73°=107°，其對頂角也 107°。"
      },
      {
        "choice": "四個都是 73°",
        "truth": false,
        "reason": "只有垂直時四角相等，73° 不是直角。"
      },
      {
        "choice": "73°、73°、34°、180°",
        "truth": false,
        "reason": "不符合對頂相等與鄰補。"
      },
      {
        "choice": "73°、107°、90°、90°",
        "truth": false,
        "reason": "同一交點四角須成兩對對頂角。"
      }
    ],
    "misconceptionTarget": "只使用對頂相等而漏求相鄰角。",
    "prerequisiteCheck": "能同時使用對頂角與鄰補角。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度總和檢查為 360°。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需串連兩個定理並驗算一周角。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "cac9c95390aa71a21ee532c6d03c2c285cd23d6383e91db74b4fda5fa2f7c835"
  },
  {
    "questionId": "u08-s003-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "已知 ∠1 與 ∠2 度數相等且有共同頂點。能否據此斷定它們是對頂角？",
    "givenConditions": [
      "兩角相等。",
      "兩角共頂點。"
    ],
    "target": "判斷相等角是否足以反推對頂關係",
    "choices": [
      "能，相等角一定是對頂角",
      "不能，還要知道兩角的邊互為反向射線",
      "能，只要共同頂點即可",
      "不能，因為對頂角一定不相等"
    ],
    "answerIndex": 1,
    "independentSolution": "資訊不足，可能是兩個分離但同度數的角。",
    "explanation": "相等是對頂角的結果，不是充分判定條件。",
    "steps": [
      "列出已知：相等、共頂點。",
      "比較對頂角定義還缺反向射線位置。"
    ],
    "optionAnalysis": [
      {
        "choice": "能，相等角一定是對頂角",
        "truth": false,
        "reason": "相等只是度數關係，位置可能不同。"
      },
      {
        "choice": "不能，還要知道兩角的邊互為反向射線",
        "truth": true,
        "reason": "對頂角除了相等，還必須由兩直線相交且兩邊分別互為反向射線。"
      },
      {
        "choice": "能，只要共同頂點即可",
        "truth": false,
        "reason": "共頂點的角可能相鄰或重疊。"
      },
      {
        "choice": "不能，因為對頂角一定不相等",
        "truth": false,
        "reason": "對頂角正是相等的，但相等不足以反推位置。"
      }
    ],
    "misconceptionTarget": "把定理『對頂角相等』錯當成逆命題。",
    "prerequisiteCheck": "能理解對頂角位置定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題為邏輯判斷，不涉及單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需評估條件充分性並提出缺少條件。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "c4331d97649667430b2371e21c13193b118af616c2da944f4b72380d66ed2c38"
  },
  {
    "questionId": "u08-s003-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩條不同直線在同一平面內沒有交點。下列何者可由此確定？",
    "givenConditions": [
      "兩直線不同。",
      "位於同一平面。",
      "沒有交點。"
    ],
    "target": "由同平面不相交判定平行",
    "choices": [
      "兩直線垂直",
      "兩直線重合",
      "兩直線平行",
      "兩直線形成對頂角"
    ],
    "answerIndex": 2,
    "independentSolution": "三個條件完整符合平行線定義。",
    "explanation": "平行定義包含同平面、不同且不相交。",
    "steps": [
      "確認同一平面。",
      "確認不同直線。",
      "確認沒有交點。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩直線垂直",
        "truth": false,
        "reason": "垂直線必相交。"
      },
      {
        "choice": "兩直線重合",
        "truth": false,
        "reason": "題目明示為不同直線。"
      },
      {
        "choice": "兩直線平行",
        "truth": true,
        "reason": "同一平面內兩條不同直線若無交點，依定義平行。"
      },
      {
        "choice": "兩直線形成對頂角",
        "truth": false,
        "reason": "沒有交點就不形成交角。"
      }
    ],
    "misconceptionTarget": "漏掉『同一平面』而把空間異面線也稱平行。",
    "prerequisiteCheck": "能辨認平行定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需完整核對定義的三個條件。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "8758c3c24d2ff106d2277b6bcec134c051a68b7c697605695abb3c91de1246de"
  },
  {
    "questionId": "u08-s003-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "十字路口的兩條道路中心線互相垂直。若其中一條道路與正東方向夾角為 28°，另一條道路與正東方向的較小夾角可能為多少？",
    "givenConditions": [
      "兩道路中心線垂直。",
      "第一路與正東夾 28°。",
      "求第二路與正東的較小夾角。"
    ],
    "target": "由垂直道路與共同基準求方向夾角",
    "choices": [
      "28°",
      "90°",
      "152°",
      "62°"
    ],
    "answerIndex": 3,
    "independentSolution": "以正東為 0°，垂直方向可為 28°+90°=118°；與正東較小夾角是 180°−118°=62°。",
    "explanation": "正東作共同基準，兩道路較小夾角互餘。",
    "steps": [
      "兩道路方向差 90°。",
      "一條與正東 28°。",
      "另一條較小方向角為 62°。"
    ],
    "optionAnalysis": [
      {
        "choice": "28°",
        "truth": false,
        "reason": "兩方向相同時不會垂直。"
      },
      {
        "choice": "90°",
        "truth": false,
        "reason": "這是兩道路彼此的夾角，不一定是第二路與正東的夾角。"
      },
      {
        "choice": "152°",
        "truth": false,
        "reason": "152° 是另一方向的鈍角表示，不是題目所問較小夾角。"
      },
      {
        "choice": "62°",
        "truth": true,
        "reason": "垂直方向相差 90°，較小方向角為 90°−28°=62°。"
      }
    ],
    "misconceptionTarget": "直接把道路間 90° 當成對基準的角。",
    "prerequisiteCheck": "能使用互餘與垂直關係。",
    "estimatedTimeSec": 90,
    "unitCheck": "方向角以 ° 表示，求較小夾角限定在 0° 到 90°。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "道路方向與共同基準都是必要資訊，需處理直線方向的較小夾角。",
    "literacyContextNecessity": "路口方向規畫必須把兩道路的垂直關係轉成對同一方位基準的角度，情境不可刪除。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "3009a6cf89420bd01d576c366526f46133773459ba19744be07cf00d28af5c19"
  },
  {
    "questionId": "u08-s003-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "木工師傅用直角尺檢查板邊 a 與 b，量得交角為 90°。下列哪一項結論最符合量測？",
    "givenConditions": [
      "板邊所在直線相交。",
      "量得交角 90°。"
    ],
    "target": "依實測直角判定板邊關係",
    "choices": [
      "a 與 b 垂直",
      "a 與 b 平行",
      "a 與 b 必等長",
      "a 與 b 的交角是平角"
    ],
    "answerIndex": 0,
    "independentSolution": "90° 交角唯一支持垂直，不涉及長度。",
    "explanation": "直角尺量測提供垂直判定的必要角度條件。",
    "steps": [
      "讀取交角 90°。",
      "依垂直定義判定。"
    ],
    "optionAnalysis": [
      {
        "choice": "a 與 b 垂直",
        "truth": true,
        "reason": "兩線相交成 90° 正是垂直的定義。"
      },
      {
        "choice": "a 與 b 平行",
        "truth": false,
        "reason": "平行線不會形成 90° 交角。"
      },
      {
        "choice": "a 與 b 必等長",
        "truth": false,
        "reason": "角度不能推出邊長。"
      },
      {
        "choice": "a 與 b 的交角是平角",
        "truth": false,
        "reason": "平角為 180°。"
      }
    ],
    "misconceptionTarget": "由垂直錯推等長。",
    "prerequisiteCheck": "能辨認直角與垂直。",
    "estimatedTimeSec": 90,
    "unitCheck": "量測角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "量測情境要求把數值轉成施工幾何關係。",
    "literacyContextNecessity": "直角尺的量測值是施工驗收依據；只有把 90° 解讀為垂直才能判定板邊是否合格。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "04ff8acb740d0c02b351f037e2c77670f65f4951ea9c4591e1feeba7480c787f"
  },
  {
    "questionId": "u08-s003-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩條鐵軌設計為平行。檢修報告只寫『在目前可見的 20 公尺範圍內沒有相交』。單憑這句話能否確定兩軌所在直線平行？",
    "givenConditions": [
      "只觀察 20 公尺範圍。",
      "未提供方向角或等距條件。"
    ],
    "target": "評估有限觀察是否足以判定平行",
    "choices": [
      "能，任何不相交線段都平行",
      "不能，有限範圍未相交不保證延長後不相交",
      "能，20 公尺已足夠長",
      "不能，因為平行線必須相交一次"
    ],
    "answerIndex": 1,
    "independentSolution": "資訊只能證明目前兩段未交，不能證明兩條完整直線永不相交。",
    "explanation": "報告缺少延長方向或平行量測條件。",
    "steps": [
      "區分可見線段與完整直線。",
      "有限範圍未交仍可能延長相交。"
    ],
    "optionAnalysis": [
      {
        "choice": "能，任何不相交線段都平行",
        "truth": false,
        "reason": "線段不相交可能只是尚未延伸到交點。"
      },
      {
        "choice": "不能，有限範圍未相交不保證延長後不相交",
        "truth": true,
        "reason": "平行是所在直線在同一平面內永不相交；有限線段未交不足以證明。"
      },
      {
        "choice": "能，20 公尺已足夠長",
        "truth": false,
        "reason": "平行性與觀察長度無固定門檻。"
      },
      {
        "choice": "不能，因為平行線必須相交一次",
        "truth": false,
        "reason": "平行線正是不相交。"
      }
    ],
    "misconceptionTarget": "把線段未交直接當成直線平行。",
    "prerequisiteCheck": "能區分線段與直線。",
    "estimatedTimeSec": 90,
    "unitCheck": "20 公尺只描述觀察範圍，不參與運算。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需判斷工程報告資訊是否充分，而非單純套定義。",
    "literacyContextNecessity": "鐵軌安全檢查不能只靠短距離目視未交；有限範圍是判斷資訊充分性的核心。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "02f3aa22cc34c538e86cabf6c61c243f44bdc8a060b65aff28d72acefeb53885"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s003-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "兩直線相交形成四個角。已知其中一角為 67°。請求其對頂角與兩個相鄰角，並說明所用性質。",
    "requiredWork": [
      "指出對頂角度數。",
      "求兩個相鄰角。",
      "說明對頂角相等與鄰補角和180°。"
    ],
    "standardSolution": [
      "對頂角與已知角相等，所以為67°。",
      "每個相鄰角與67°形成平角，所以是180°−67°=113°。",
      "兩個相鄰角皆為113°，且它們彼此也是對頂角。"
    ],
    "alternativeMethods": [
      "可先用四角總和360°與對頂角相等，得到其餘兩角共226°且相等，各113°。"
    ],
    "reasoningSteps": [
      "套用對頂角相等。",
      "套用鄰補角和180°。",
      "檢查四角67+113+67+113=360。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "對頂角67°、兩相鄰角各113°，並正確敘述兩項性質。"
      },
      {
        "score": 2,
        "criteria": "數值全對但性質說明缺一；或方法正確有一處標示不清。"
      },
      {
        "score": 1,
        "criteria": "至少正確說出對頂角67°或列出180−67求相鄰角。"
      },
      {
        "score": 0,
        "criteria": "把四個角都判為67°，或無法使用相交線性質。"
      }
    ],
    "partialCreditRules": [
      "相鄰角可稱鄰補角；答案要清楚表明有兩個113°。"
    ],
    "followThroughPolicy": "若180−67算錯但性質和列式正確，方法部分給分，總分最高2分。",
    "unitAndNotationRules": "角度必須有°；不要求自訂角名。",
    "answerOnlyPolicy": "只列「67、113、113」無性質說明最高2分。",
    "commonErrors": [
      "把對頂角與相鄰角混淆。",
      "用90−67求相鄰角。"
    ],
    "independentReview": {
      "derivedResult": "對頂角67°；兩相鄰角各113°。",
      "ambiguityAudit": "相交直線形成的四角關係固定，沒有平行線或垂直線的額外假設。",
      "reviewNote": "獨立以對頂與線性對重算，四角總和360°，結果一致。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "angle-types-measure"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "7bb36cee96152ed353540d21231d8a70a3dc3ab4828f46623872222f504cccf8"
  },
  {
    "questionId": "u08-s003-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "parallel-perpendicular-angles",
    "lockedSkillTitle": "平行垂直與對頂角",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "直線 l 與 m 平行，一條截線與它們相交。某一對同旁內角分別為 (3x+12)° 與 (5x−8)°。求 x 與兩角度數，並檢查是否符合平行線性質。",
    "requiredWork": [
      "使用同旁內角互補。",
      "解 x。",
      "求兩角並驗算。"
    ],
    "standardSolution": [
      "因 l∥m，同旁內角和180°。",
      "(3x+12)+(5x−8)=180，得8x+4=180，x=22。",
      "兩角為78°與102°，總和180°。"
    ],
    "alternativeMethods": [
      "可由其中一角為180°減另一角建立 3x+12=180−(5x−8)，同樣得x=22。"
    ],
    "reasoningSteps": [
      "辨認同旁內角。",
      "列互補方程。",
      "解x=22。",
      "代回並相加驗證。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "x=22，兩角78°、102°，且完整說明平行使同旁內角互補。"
      },
      {
        "score": 2,
        "criteria": "方程與x正確，但只算出一角或漏驗算；或單一代入小錯。"
      },
      {
        "score": 1,
        "criteria": "正確列出兩式和180°但未完成解答；或只答x=22無角度。"
      },
      {
        "score": 0,
        "criteria": "把同旁內角當相等，列3x+12=5x−8且未修正。"
      }
    ],
    "partialCreditRules": [
      "兩角順序可依題目排列，不影響分數。"
    ],
    "followThroughPolicy": "若解方程算錯但後續代回自洽，列式與性質仍可得1分，最多2分。",
    "unitAndNotationRules": "x無單位；角度附°；平行符號可寫 l∥m。",
    "answerOnlyPolicy": "只寫x=22最高1分，因題目要求角度與檢查。",
    "commonErrors": [
      "把內錯角性質誤套到同旁內角。",
      "代回時漏掉常數。"
    ],
    "independentReview": {
      "derivedResult": "x=22；兩角78°與102°。",
      "ambiguityAudit": "題目明示是一對同旁內角且直線平行，關係唯一為互補。",
      "reviewNote": "獨立代入22得到3×22+12=78、5×22−8=102，和為180。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "angle-types-measure"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "20dd7c3756d2443347e56d9e4a06ecbf43b80e3a99858540049ea6da1d20dc8a"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s003-v001",
    "unitId": "u08",
    "skillId": "parallel-perpendicular-angles",
    "contentSha256": "2fa40508482c79616baef8ca616e932659d68c7506394140faceb4a03877dd8c",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "依幾何記號，⊥ 唯一對應垂直。",
    "derivedAnswer": "直線 l 與直線 m 垂直",
    "storedAnswer": "直線 l 與直線 m 垂直",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「直線 l 與直線 m 垂直」符合目標「辨認垂直符號」。其餘選項分別違反：平行使用 ∥。；⊥ 不表示重合。；直線沒有有限長度可比較。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平行垂直與對頂角」講義已定義範圍；本題特別使用：l、m 為直線。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「辨認垂直符號」重新讀題，並針對誤解「把 ⟂ 與 ∥ 混淆。」排除另一解讀。"
    },
    "difficultyReason": "單一符號辨認。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認直線記號。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「辨認垂直符號」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：依幾何記號，⊥ 唯一對應垂直。 正確選項為「直線 l 與直線 m 垂直」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "afc3cd9761dd4cfa75eb43ffe5317302acd28560485de787ffcff5236884a5fb"
  },
  {
    "questionId": "u08-s003-v002",
    "unitId": "u08",
    "skillId": "parallel-perpendicular-angles",
    "contentSha256": "58d4b06cc11a383420165749a673182ee7cbc332c67a145121dc2f3e01158664",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "依定義，任一交點角為 90°。",
    "derivedAnswer": "90°",
    "storedAnswer": "90°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「90°」符合目標「由垂直關係判定角度」。其餘選項分別違反：45° 是銳角，不是垂直形成的角。；180° 是平角。；360° 是一周角，不是單一交角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平行垂直與對頂角」講義已定義範圍；本題特別使用：兩條直線明確互相垂直。",
      "unitConflict": "答案以度（°）表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由垂直關係判定角度」重新讀題，並針對誤解「把平角或一周角當成單一交角。」排除另一解讀。"
    },
    "difficultyReason": "直接套用垂直定義。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認直角為 90°。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由垂直關係判定角度」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：依定義，任一交點角為 90°。 正確選項為「90°」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "ad2d986c9e1a3fa4c80af910fe9949b68decab426d43adefd8c6db8a8f27144f"
  },
  {
    "questionId": "u08-s003-v003",
    "unitId": "u08",
    "skillId": "parallel-perpendicular-angles",
    "contentSha256": "d4bdf99bc34f51069dee6d601c1e3d362eb099aed75954206ad7edf134e09ae5",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "重查相交直線四角，與 38° 相對的角同為 38°。",
    "derivedAnswer": "38°",
    "storedAnswer": "38°",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「38°」符合目標「由一個對頂角求另一角」。其餘選項分別違反：52° 與 38° 和為 90°，但對頂角不是互餘。；142° 是相鄰補角。；180° 是平角總量。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平行垂直與對頂角」講義已定義範圍；本題特別使用：兩角明確為對頂角。",
      "unitConflict": "角度單位一致。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由一個對頂角求另一角」重新讀題，並針對誤解「把對頂角誤當鄰補角。」排除另一解讀。"
    },
    "difficultyReason": "單一步驟使用對頂角定理。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用角度與相交線概念。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由一個對頂角求另一角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：重查相交直線四角，與 38° 相對的角同為 38°。 正確選項為「38°」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "fe3fc26a3b8cfa2a72a9e43e383ee5af0c24aa98d8fc0e452d4ecc4f1e175dd8"
  },
  {
    "questionId": "u08-s003-v004",
    "unitId": "u08",
    "skillId": "parallel-perpendicular-angles",
    "contentSha256": "e37c73f3ffdd511d72edbc85765a4dfdf267e446a6c87ac2454b18d3d542ef4f",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "相鄰兩角的外側邊成一直線，所以兩角和為180°；未知角=180°−124°=56°。",
    "derivedAnswer": "56°",
    "storedAnswer": "56°",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐項代回後只有「56°」成立；其他三項分別因：這是對頂角，不是相鄰角。；124+66=190，不合平角。；以 360° 扣除一角得到的是其餘三角總和。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平行垂直與對頂角」講義已定義範圍；本題特別使用：兩角相鄰。；已逐一對照題幹、圖示與四個選項，確認不會形成第二個合理答案。",
      "unitConflict": "角度單位均為 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "題幹明確要求「求相交直線的鄰補角」，沒有第二種合理所求。；已逐一對照題幹、圖示與四個選項，確認不會形成第二個合理答案。"
    },
    "difficultyReason": "需從位置敘述辨認鄰補再運算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用互補與相交直線關係。",
    "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
    "reviewerDecision": "pass",
    "reviewerNote": "u08-s003-v004 的中央獨立審查使用另一條推導路徑：相鄰兩角的外側邊成一直線，所以兩角和為180°；未知角=180°−124°=56°。 這段推導不依賴儲存答案；再將四個選項逐一代回題幹與圖示，確認只有儲存答案符合，並檢查單位、比例、未按比例警語與第二種解讀。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "644b742a56765ce394ad0f8bbe12181abc8941835e359af631500815cb4c5386"
  },
  {
    "questionId": "u08-s003-v005",
    "unitId": "u08",
    "skillId": "parallel-perpendicular-angles",
    "contentSha256": "535e0694eb589e38ef40d00a0cc818fe0cd186343137a374c308d740bac424e2",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立代回：4×13+7=59，6×13−19=59。",
    "derivedAnswer": "13",
    "storedAnswer": "13",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「13」符合目標「由代數式對頂角求參數」。其餘選項分別違反：代回得 31° 與 17°，不相等。；把 26 誤當 x 而非 2x 的差。；把兩角相加設為 180°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平行垂直與對頂角」講義已定義範圍；本題特別使用：兩角為對頂角。",
      "unitConflict": "x 無單位；角度式代回後為 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由代數式對頂角求參數」重新讀題，並針對誤解「把對頂角誤設為和 180°。」排除另一解讀。"
    },
    "difficultyReason": "結合幾何位置與代數求解。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能解一元一次方程與使用對頂角相等。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由代數式對頂角求參數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立代回：4×13+7=59，6×13−19=59。 正確選項為「13」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "2911ce70fa562f174cbda21d885a389b7391340a0e98e98e8f9f604c4620cfb8"
  },
  {
    "questionId": "u08-s003-v006",
    "unitId": "u08",
    "skillId": "parallel-perpendicular-angles",
    "contentSha256": "30fde34e6887f992e2761edbdd315f77a87aeb887d558cec3afea0afcf83127a",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由垂直定義獨立解 3x+6=90，得 28。",
    "derivedAnswer": "28",
    "storedAnswer": "28",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「28」符合目標「由垂直角度式求參數」。其餘選項分別違反：代回為 72°，不是直角。；代回為 96°。；代回為 102°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平行垂直與對頂角」講義已定義範圍；本題特別使用：a ⟂ b。",
      "unitConflict": "x 無單位，角度為 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由垂直角度式求參數」重新讀題，並針對誤解「只看到 3x 而漏掉常數 6。」排除另一解讀。"
    },
    "difficultyReason": "需要將符號條件轉成代數等式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用垂直為 90° 並解方程。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由垂直角度式求參數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由垂直定義獨立解 3x+6=90，得 28。 正確選項為「28」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "4135cbec5bbded210fff393ea7c4653169d86afd7c4f7623581a2ae30628396c"
  },
  {
    "questionId": "u08-s003-v007",
    "unitId": "u08",
    "skillId": "parallel-perpendicular-angles",
    "contentSha256": "cac9c95390aa71a21ee532c6d03c2c285cd23d6383e91db74b4fda5fa2f7c835",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "重建交點一周，兩對對頂角各相等，且 2×73+2×107=360。",
    "derivedAnswer": "73°、107°、73°、107°",
    "storedAnswer": "73°、107°、73°、107°",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「73°、107°、73°、107°」符合目標「完整求出相交直線四角」。其餘選項分別違反：只有垂直時四角相等，73° 不是直角。；不符合對頂相等與鄰補。；同一交點四角須成兩對對頂角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平行垂直與對頂角」講義已定義範圍；本題特別使用：兩條完整直線相交。",
      "unitConflict": "角度總和檢查為 360°。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「完整求出相交直線四角」重新讀題，並針對誤解「只使用對頂相等而漏求相鄰角。」排除另一解讀。"
    },
    "difficultyReason": "需串連兩個定理並驗算一周角。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能同時使用對頂角與鄰補角。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「完整求出相交直線四角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：重建交點一周，兩對對頂角各相等，且 2×73+2×107=360。 正確選項為「73°、107°、73°、107°」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "c304a475ba516d465ddd4344233cf4f8f34f8cc5b4833186fba950e54e99b8f2"
  },
  {
    "questionId": "u08-s003-v008",
    "unitId": "u08",
    "skillId": "parallel-perpendicular-angles",
    "contentSha256": "c4331d97649667430b2371e21c13193b118af616c2da944f4b72380d66ed2c38",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "反例可取同頂點兩個不同方向的 40° 角，它們相等卻非對頂。",
    "derivedAnswer": "不能，還要知道兩角的邊互為反向射線",
    "storedAnswer": "不能，還要知道兩角的邊互為反向射線",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「不能，還要知道兩角的邊互為反向射線」符合目標「判斷相等角是否足以反推對頂關係」。其餘選項分別違反：相等只是度數關係，位置可能不同。；共頂點的角可能相鄰或重疊。；對頂角正是相等的，但相等不足以反推位置。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平行垂直與對頂角」講義已定義範圍；本題特別使用：兩角相等。",
      "unitConflict": "本題為邏輯判斷，不涉及單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判斷相等角是否足以反推對頂關係」重新讀題，並針對誤解「把定理『對頂角相等』錯當成逆命題。」排除另一解讀。"
    },
    "difficultyReason": "需評估條件充分性並提出缺少條件。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解對頂角位置定義。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷相等角是否足以反推對頂關係」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：反例可取同頂點兩個不同方向的 40° 角，它們相等卻非對頂。 正確選項為「不能，還要知道兩角的邊互為反向射線」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "6aaac30a2398b423b1b7957198abc50dd8da6e58838b40879436be27a179aee9"
  },
  {
    "questionId": "u08-s003-v009",
    "unitId": "u08",
    "skillId": "parallel-perpendicular-angles",
    "contentSha256": "8758c3c24d2ff106d2277b6bcec134c051a68b7c697605695abb3c91de1246de",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "排除重合與空間異面後，無交點即平行。",
    "derivedAnswer": "兩直線平行",
    "storedAnswer": "兩直線平行",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「兩直線平行」符合目標「由同平面不相交判定平行」。其餘選項分別違反：垂直線必相交。；題目明示為不同直線。；沒有交點就不形成交角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平行垂直與對頂角」講義已定義範圍；本題特別使用：兩直線不同。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由同平面不相交判定平行」重新讀題，並針對誤解「漏掉『同一平面』而把空間異面線也稱平行。」排除另一解讀。"
    },
    "difficultyReason": "需完整核對定義的三個條件。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認平行定義。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由同平面不相交判定平行」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：排除重合與空間異面後，無交點即平行。 正確選項為「兩直線平行」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "f51dc14ad16e428a777dd97062c4cda38dce7eaaeee234e657785665227a990c"
  },
  {
    "questionId": "u08-s003-v010",
    "unitId": "u08",
    "skillId": "parallel-perpendicular-angles",
    "contentSha256": "3009a6cf89420bd01d576c366526f46133773459ba19744be07cf00d28af5c19",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "方向線無箭頭，118° 與其反向 298° 表示同一路線，較小夾角為 62°。",
    "derivedAnswer": "62°",
    "storedAnswer": "62°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「62°」符合目標「由垂直道路與共同基準求方向夾角」。其餘選項分別違反：兩方向相同時不會垂直。；這是兩道路彼此的夾角，不一定是第二路與正東的夾角。；152° 是另一方向的鈍角表示，不是題目所問較小夾角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平行垂直與對頂角」講義已定義範圍；本題特別使用：兩道路中心線垂直。",
      "unitConflict": "方向角以 ° 表示，求較小夾角限定在 0° 到 90°。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由垂直道路與共同基準求方向夾角」重新讀題，並針對誤解「直接把道路間 90° 當成對基準的角。」排除另一解讀。"
    },
    "difficultyReason": "道路方向與共同基準都是必要資訊，需處理直線方向的較小夾角。",
    "literacyContextNecessity": "路口方向規畫必須把兩道路的垂直關係轉成對同一方位基準的角度，情境不可刪除。",
    "prerequisiteCheck": "能使用互餘與垂直關係。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由垂直道路與共同基準求方向夾角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：方向線無箭頭，118° 與其反向 298° 表示同一路線，較小夾角為 62°。 正確選項為「62°」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "fa01b2a3cfc1dccec079db7991f36ed8a04b0e1564a79fc8606e50d926a18c9d"
  },
  {
    "questionId": "u08-s003-v011",
    "unitId": "u08",
    "skillId": "parallel-perpendicular-angles",
    "contentSha256": "04ff8acb740d0c02b351f037e2c77670f65f4951ea9c4591e1feeba7480c787f",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由量測值直接判 a ⟂ b。",
    "derivedAnswer": "a 與 b 垂直",
    "storedAnswer": "a 與 b 垂直",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「a 與 b 垂直」符合目標「依實測直角判定板邊關係」。其餘選項分別違反：平行線不會形成 90° 交角。；角度不能推出邊長。；平角為 180°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平行垂直與對頂角」講義已定義範圍；本題特別使用：板邊所在直線相交。",
      "unitConflict": "量測角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「依實測直角判定板邊關係」重新讀題，並針對誤解「由垂直錯推等長。」排除另一解讀。"
    },
    "difficultyReason": "量測情境要求把數值轉成施工幾何關係。",
    "literacyContextNecessity": "直角尺的量測值是施工驗收依據；只有把 90° 解讀為垂直才能判定板邊是否合格。",
    "prerequisiteCheck": "能辨認直角與垂直。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「依實測直角判定板邊關係」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由量測值直接判 a ⟂ b。 正確選項為「a 與 b 垂直」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "49f84241f7a34bfa2f3bf054cff567ec69ccb4a0bcfbd698d56b795f8a1f9432"
  },
  {
    "questionId": "u08-s003-v012",
    "unitId": "u08",
    "skillId": "parallel-perpendicular-angles",
    "contentSha256": "02f3aa22cc34c538e86cabf6c61c243f44bdc8a060b65aff28d72acefeb53885",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "可構造兩條緩慢靠近的直線，在 20 公尺內未交、遠處相交，故不能確定。",
    "derivedAnswer": "不能，有限範圍未相交不保證延長後不相交",
    "storedAnswer": "不能，有限範圍未相交不保證延長後不相交",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「不能，有限範圍未相交不保證延長後不相交」符合目標「評估有限觀察是否足以判定平行」。其餘選項分別違反：線段不相交可能只是尚未延伸到交點。；平行性與觀察長度無固定門檻。；平行線正是不相交。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平行垂直與對頂角」講義已定義範圍；本題特別使用：只觀察 20 公尺範圍。",
      "unitConflict": "20 公尺只描述觀察範圍，不參與運算。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「評估有限觀察是否足以判定平行」重新讀題，並針對誤解「把線段未交直接當成直線平行。」排除另一解讀。"
    },
    "difficultyReason": "需判斷工程報告資訊是否充分，而非單純套定義。",
    "literacyContextNecessity": "鐵軌安全檢查不能只靠短距離目視未交；有限範圍是判斷資訊充分性的核心。",
    "prerequisiteCheck": "能區分線段與直線。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「評估有限觀察是否足以判定平行」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：可構造兩條緩慢靠近的直線，在 20 公尺內未交、遠處相交，故不能確定。 正確選項為「不能，有限範圍未相交不保證延長後不相交」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "ffda1a0e2bf46ad81400476dab2a959ef54de0fe3108ac0a5b8815e368bf25ef"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u08-s003-fig001",
    "drawingSpecId": "u08-s003-draw001",
    "unitId": "u08",
    "skillSlot": "s003",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "purpose": "相交直線上 124° 與右側未知鄰補角",
    "svgPath": "figures/u08/u08-s003-fig001.svg",
    "canvas": {
      "width": 720,
      "height": 320,
      "viewBox": "0 0 720 320"
    },
    "drawingSpec": {
      "coordinateSystem": "SVG 左上為原點，所有關鍵點與標籤位置固定於對應 SVG。",
      "visibleLineRules": "主要輪廓使用至少3px實線；標籤使用18px以上文字。",
      "hiddenLineRules": "本圖不使用隱藏線；不可由未畫出的邊推論。",
      "labelsAndPositions": "所有點名、角度、尺寸與觀察方向均固定在 SVG 內。",
      "tickMarksUnitsArrowsSymbols": "角弧、箭頭、度數與公分單位依題目需要完整標示。",
      "scaleStatus": "not-to-scale",
      "visualInferenceWarning": "示意圖未按比例，作答必須依題幹與標示資料。"
    },
    "altText": "右側未知角與124度角相鄰，非共邊形成一直線。",
    "svgTitle": "相交直線上 124° 與右側未知鄰補角",
    "svgDescription": "右側未知角與124度角相鄰，非共邊形成一直線。",
    "mobileReadabilityReview": "在360px寬螢幕縮放後，主要標籤仍保持可辨識；不依顏色傳遞必要資訊。",
    "answerLeakageReview": "只呈現題幹已知結構與數值，不標示答案或計算結果。",
    "svgAssertions": [
      "<title",
      "<desc",
      "role=\"img\"",
      "未按比例"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "u08-s003-fig001 已核對線段、標籤、題幹資料、縮放警語與答案不外洩。",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "3cd80dc60b3a305e764115a630451a74d2e2514f163c20f72038e970bc62fffc"
  }
];

