// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u17-s006-lecture-r1",
  "unitId": "u17",
  "numericUnitId": 17,
  "topicId": "u17-parallel",
  "skillId": "parallel-corresponding",
  "lockedTitle": "同位角",
  "title": "同位角：在兩個交點找到相同方位",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "prerequisiteBridge": "先備技能：parallel-alternate-interior。本節只使用該技能已建立的角度、平行或四邊形性質。",
  "learningOutcomes": [
    "辨認同位角的相同方位",
    "運用平行時同位角相等",
    "以同位角相等判定平行"
  ],
  "prerequisites": [
    {
      "skillId": "parallel-alternate-interior",
      "requiredLevel": "能正確使用「parallel-alternate-interior」中的基本定義與直接性質，不需使用後續技能。"
    }
  ],
  "glossary": [
    {
      "term": "同位角",
      "definition": "在兩交點占相同相對方位的一對角"
    },
    {
      "term": "相對方位",
      "definition": "例如都在各交點右上方"
    },
    {
      "term": "F形",
      "definition": "常見辨認提示"
    },
    {
      "term": "同位角逆性質",
      "definition": "同位角相等可判兩線平行"
    }
  ],
  "notation": [
    {
      "symbol": "∥",
      "meaning": "平行"
    },
    {
      "symbol": "⊥",
      "meaning": "垂直"
    },
    {
      "symbol": "∠",
      "meaning": "角；度數以°表示"
    },
    {
      "symbol": "=",
      "meaning": "數值或長度相等，不表示圖形必全等"
    }
  ],
  "conceptNarrative": [
    "同位角一個可能在內部、一個可能在外部，重點是兩個交點的方位相同。",
    "兩線平行時，同位角相等；若一對同位角相等，也可判兩線平行。",
    "將圖旋轉後，右上、左下等口語方位會改變，因此最好沿著兩條被截線比較相同位置。"
  ],
  "formalDefinitions": [
    {
      "name": "同位角",
      "statement": "在兩交點占相同相對方位的一對角"
    },
    {
      "name": "相對方位",
      "statement": "例如都在各交點右上方"
    }
  ],
  "formulas": [
    {
      "formula": "a∥b ⇒ 同位角相等",
      "conditions": [
        "同一截線"
      ],
      "meaning": "用於同位角中符合條件的推理或計算。"
    },
    {
      "formula": "同位角相等 ⇒ a∥b",
      "conditions": [
        "角的位置確為同位角"
      ],
      "meaning": "用於同位角中符合條件的推理或計算。"
    }
  ],
  "nonApplicableCases": [
    "未標示或未證明平行時，不得只依外觀套用平行線角性質。",
    "圖形不一定按比例，長短、角度與垂直關係以題幹和記號為準。",
    "使用面積公式時，高必須垂直於所選底；長度與面積單位不可混用。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "標出兩個交點",
      "check": "完成第1步後，確認未引入題目未給的條件。"
    },
    {
      "step": 2,
      "instruction": "選定第一個角相對截線與被截線的位置",
      "check": "完成第2步後，確認未引入題目未給的條件。"
    },
    {
      "step": 3,
      "instruction": "到另一交點找相同方位",
      "check": "完成第3步後，確認未引入題目未給的條件。"
    },
    {
      "step": 4,
      "instruction": "確認為同位角",
      "check": "完成第4步後，確認未引入題目未給的條件。"
    },
    {
      "step": 5,
      "instruction": "套用性質或逆性質",
      "check": "完成第5步後，確認未引入題目未給的條件。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "a∥b，同位角之一101°",
      "solutionSteps": [
        "另一角101°。"
      ],
      "answer": "另一角101°。"
    },
    {
      "exampleId": "L2",
      "prompt": "同位角為7x-4與5x+20",
      "solutionSteps": [
        "相等得x=12。"
      ],
      "answer": "相等得x=12。"
    },
    {
      "exampleId": "L3",
      "prompt": "同一交點的兩角",
      "solutionSteps": [
        "不稱為同位角。"
      ],
      "answer": "不稱為同位角。"
    },
    {
      "exampleId": "L4",
      "prompt": "同位角相等",
      "solutionSteps": [
        "可判兩被截線平行。"
      ],
      "answer": "可判兩被截線平行。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把對頂角叫同位角",
      "why": "同位角位於不同交點",
      "correction": "同位角位於不同交點"
    },
    {
      "mistake": "只看角是否同大",
      "why": "還要確認位置",
      "correction": "還要確認位置"
    },
    {
      "mistake": "把同側內角誤認同位角",
      "why": "同側內角都在內部且同側",
      "correction": "同側內角都在內部且同側"
    },
    {
      "mistake": "未有平行就使用相等性質",
      "why": "要區分性質與逆性質",
      "correction": "要區分性質與逆性質"
    },
    {
      "mistake": "圖旋轉後依固定上下判斷",
      "why": "應比較相對方位",
      "correction": "應比較相對方位"
    }
  ],
  "selfCheck": [
    "我能否不用目測，說明「同位角」所需的條件？",
    "我是否先辨認角、邊、對角線、底或高的正確位置？",
    "方程解出後是否代回題目真正所求？",
    "角度、長度與面積單位是否正確？"
  ],
  "summary": [
    "同位角一個可能在內部、一個可能在外部，重點是兩個交點的方位相同。",
    "a∥b ⇒ 同位角相等",
    "解題時先確認「同一截線」。"
  ],
  "connections": {
    "previous": "承接parallel-alternate-interior。",
    "next": "下一技能依鎖定順序為parallel-consecutive-interior。"
  },
  "figureReferences": [
    "u17-s006-fig001"
  ],
  "figureAccessibility": "兩平行線被截線穿過，兩個相同方位角以弧線標示。 圖形不一定按比例。",
  "practiceLinks": {
    "mcQuestionIds": [
      "u17-s006-v001",
      "u17-s006-v002",
      "u17-s006-v003",
      "u17-s006-v004",
      "u17-s006-v005",
      "u17-s006-v006",
      "u17-s006-v007",
      "u17-s006-v008",
      "u17-s006-v009",
      "u17-s006-v010",
      "u17-s006-v011",
      "u17-s006-v012"
    ],
    "constructedResponseIds": [
      "u17-s006-cr001",
      "u17-s006-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "figureChecked": true,
    "reviewNote": "本講義以「不同交點的相同相對方位」作核心定義，處理圖形旋轉後仍能辨認的需求。"
  },
  "contentSha256": "df67bcd9f8a762e7885c3c1e5ae711dff4ffdaaf8febf5840e3c6248fb6101d4"
};

export const QUESTIONS = [
  {
    "questionId": "u17-s006-v001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "同位角位於哪裡？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認同位角。",
    "choices": [
      "同一交點的相對兩側",
      "兩個交點中相同的相對方位",
      "兩直線內部且截線異側",
      "兩直線內部且截線同側"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：同位角在不同交點占相同方位。",
    "explanation": "同位角在不同交點占相同方位。",
    "steps": [
      "同位角在不同交點占相同方位。",
      "因此選擇「兩個交點中相同的相對方位」。"
    ],
    "optionAnalysis": [
      {
        "choice": "同一交點的相對兩側",
        "truth": false,
        "reason": "選項「同一交點的相對兩側」不符合題意；依同位角的位置定義。應得到「兩個交點中相同的相對方位」，此錯誤常源自：把同位角與對頂角混淆。"
      },
      {
        "choice": "兩個交點中相同的相對方位",
        "truth": true,
        "reason": "依獨立重算「同位角在不同交點占相同方位。」，此選項正確回答所求。"
      },
      {
        "choice": "兩直線內部且截線異側",
        "truth": false,
        "reason": "選項「兩直線內部且截線異側」不符合題意；依同位角的位置定義。應得到「兩個交點中相同的相對方位」，此錯誤常源自：把同位角與對頂角混淆。"
      },
      {
        "choice": "兩直線內部且截線同側",
        "truth": false,
        "reason": "選項「兩直線內部且截線同側」不符合題意；依同位角的位置定義。應得到「兩個交點中相同的相對方位」，此錯誤常源自：把同位角與對頂角混淆。"
      }
    ],
    "misconceptionTarget": "把同位角與對頂角混淆。",
    "prerequisiteCheck": "只使用先備技能parallel-alternate-interior與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認同位角。」；四個選項互異，只有兩個交點中相同的相對方位符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "直接概念辨認。",
    "literacyContextNecessity": null,
    "visualMode": "figure-supported",
    "figureId": "u17-s006-fig001",
    "drawingSpecRef": "units/u17/s006/drawing-specs.jsonl#u17-s006-fig001",
    "semanticReviewId": "u17-s006-v001-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ebe629d41a1c1cdf6925e6b566be09d2bc4bd21dff847fc48250ec15c9605792"
  },
  {
    "questionId": "u17-s006-v002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "a∥b，一對同位角之一為67°，另一角為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "直接使用同位角性質。",
    "choices": [
      "23°",
      "113°",
      "67°",
      "134°"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：平行線的同位角相等。",
    "explanation": "平行線的同位角相等。",
    "steps": [
      "平行線的同位角相等。",
      "因此選擇「67°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "23°",
        "truth": false,
        "reason": "選項「23°」不符合題意；依同位角相等。應得到「67°」，此錯誤常源自：誤選互補角。"
      },
      {
        "choice": "113°",
        "truth": false,
        "reason": "選項「113°」不符合題意；依同位角相等。應得到「67°」，此錯誤常源自：誤選互補角。"
      },
      {
        "choice": "67°",
        "truth": true,
        "reason": "依獨立重算「平行線的同位角相等。」，此選項正確回答所求。"
      },
      {
        "choice": "134°",
        "truth": false,
        "reason": "選項「134°」不符合題意；依同位角相等。應得到「67°」，此錯誤常源自：誤選互補角。"
      }
    ],
    "misconceptionTarget": "誤選互補角。",
    "prerequisiteCheck": "只使用先備技能parallel-alternate-interior與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「直接使用同位角性質。」；四個選項互異，只有67°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "單一步驟。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s006-v002-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "87f6b14c195d47a31d2c3b8fe54968811036153538f4f4d3d687780abd0f610a"
  },
  {
    "questionId": "u17-s006-v003",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若一對同位角相等，可判定什麼？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由角判平行。",
    "choices": [
      "兩被截直線垂直",
      "截線平分兩角",
      "兩直線長度相等",
      "兩被截直線平行"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：同位角相等是平行判定。",
    "explanation": "同位角相等是平行判定。",
    "steps": [
      "同位角相等是平行判定。",
      "因此選擇「兩被截直線平行」。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩被截直線垂直",
        "truth": false,
        "reason": "選項「兩被截直線垂直」不符合題意；依同位角逆性質。應得到「兩被截直線平行」，此錯誤常源自：以角相等誤判垂直。"
      },
      {
        "choice": "截線平分兩角",
        "truth": false,
        "reason": "選項「截線平分兩角」不符合題意；依同位角逆性質。應得到「兩被截直線平行」，此錯誤常源自：以角相等誤判垂直。"
      },
      {
        "choice": "兩直線長度相等",
        "truth": false,
        "reason": "選項「兩直線長度相等」不符合題意；依同位角逆性質。應得到「兩被截直線平行」，此錯誤常源自：以角相等誤判垂直。"
      },
      {
        "choice": "兩被截直線平行",
        "truth": true,
        "reason": "依獨立重算「同位角相等是平行判定。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "以角相等誤判垂直。",
    "prerequisiteCheck": "只使用先備技能parallel-alternate-interior與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由角判平行。」；四個選項互異，只有兩被截直線平行符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "基本逆性質。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s006-v003-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "64d29284008e74dacfab911755e88bd60fc822079293cc00cabfa92755b79118"
  },
  {
    "questionId": "u17-s006-v004",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "a∥b，同位角為(4x-9)°與75°，x為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "以同位角建立方程。",
    "choices": [
      "21",
      "16",
      "24",
      "42"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：4x-9=75，4x=84，x=21。",
    "explanation": "4x-9=75，4x=84，x=21。",
    "steps": [
      "4x-9=75，4x=84，x=21。",
      "因此選擇「21」。"
    ],
    "optionAnalysis": [
      {
        "choice": "21",
        "truth": true,
        "reason": "依獨立重算「4x-9=75，4x=84，x=21。」，此選項正確回答所求。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "選項「16」不符合題意；依同位角相等。應得到「21」，此錯誤常源自：忽略負9。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "選項「24」不符合題意；依同位角相等。應得到「21」，此錯誤常源自：忽略負9。"
      },
      {
        "choice": "42",
        "truth": false,
        "reason": "選項「42」不符合題意；依同位角相等。應得到「21」，此錯誤常源自：忽略負9。"
      }
    ],
    "misconceptionTarget": "忽略負9。",
    "prerequisiteCheck": "只使用先備技能parallel-alternate-interior與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「以同位角建立方程。」；四個選項互異，只有21符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "一次方程。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s006-v004-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "40d891ac2d4cc01a566a2525213b8b9e0f3a03282f038753b004a178151bcdb1"
  },
  {
    "questionId": "u17-s006-v005",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "同位角為(6x+2)°與(4x+30)°，兩線平行時兩角各是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "解參數並求角。",
    "choices": [
      "14°",
      "58°",
      "86°",
      "94°"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：6x+2=4x+30，x=14；代回得86°。",
    "explanation": "6x+2=4x+30，x=14；代回得86°。",
    "steps": [
      "6x+2=4x+30，x=14；代回得86°。",
      "因此選擇「86°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "14°",
        "truth": false,
        "reason": "選項「14°」不符合題意；依同位角相等。應得到「86°」，此錯誤常源自：只回答x。"
      },
      {
        "choice": "58°",
        "truth": false,
        "reason": "選項「58°」不符合題意；依同位角相等。應得到「86°」，此錯誤常源自：只回答x。"
      },
      {
        "choice": "86°",
        "truth": true,
        "reason": "依獨立重算「6x+2=4x+30，x=14；代回得86°。」，此選項正確回答所求。"
      },
      {
        "choice": "94°",
        "truth": false,
        "reason": "選項「94°」不符合題意；依同位角相等。應得到「86°」，此錯誤常源自：只回答x。"
      }
    ],
    "misconceptionTarget": "只回答x。",
    "prerequisiteCheck": "只使用先備技能parallel-alternate-interior與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「解參數並求角。」；四個選項互異，只有86°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需代回。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s006-v005-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "863f5db2347b9008cfc7fa7a6dfc7d943b9a3a501f43e55f11ff8222dc58615d"
  },
  {
    "questionId": "u17-s006-v006",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某同位角為103°，與另一交點所求角相鄰的是它的同位角。所求角是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "跨交點後求鄰角。",
    "choices": [
      "103°",
      "13°",
      "257°",
      "77°"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：同位角為103°，所求角與它鄰補，故180°-103°=77°。",
    "explanation": "同位角為103°，所求角與它鄰補，故180°-103°=77°。",
    "steps": [
      "同位角為103°，所求角與它鄰補，故180°-103°=77°。",
      "因此選擇「77°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "103°",
        "truth": false,
        "reason": "選項「103°」不符合題意；依同位角與鄰補角串聯。應得到「77°」，此錯誤常源自：直接將103°當所求角。"
      },
      {
        "choice": "13°",
        "truth": false,
        "reason": "選項「13°」不符合題意；依同位角與鄰補角串聯。應得到「77°」，此錯誤常源自：直接將103°當所求角。"
      },
      {
        "choice": "257°",
        "truth": false,
        "reason": "選項「257°」不符合題意；依同位角與鄰補角串聯。應得到「77°」，此錯誤常源自：直接將103°當所求角。"
      },
      {
        "choice": "77°",
        "truth": true,
        "reason": "依獨立重算「同位角為103°，所求角與它鄰補，故180°-103°=77°。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "直接將103°當所求角。",
    "prerequisiteCheck": "只使用先備技能parallel-alternate-interior與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「跨交點後求鄰角。」；四個選項互異，只有77°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "兩步角度推理。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s006-v006-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d7797af14274f13bf3e09342e311b2369ebdc9e7803cf1bbe465e5beb82acb4c"
  },
  {
    "questionId": "u17-s006-v007",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一對角不可能是同位角？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認不符合定義者。",
    "choices": [
      "位於同一交點的兩角",
      "都在各交點右上方的兩角",
      "都在截線同側且相同方位的兩角",
      "一內一外但相對方位相同的兩角"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：同位角必位於兩個不同交點。",
    "explanation": "同位角必位於兩個不同交點。",
    "steps": [
      "同位角必位於兩個不同交點。",
      "因此選擇「位於同一交點的兩角」。"
    ],
    "optionAnalysis": [
      {
        "choice": "位於同一交點的兩角",
        "truth": true,
        "reason": "依獨立重算「同位角必位於兩個不同交點。」，此選項正確回答所求。"
      },
      {
        "choice": "都在各交點右上方的兩角",
        "truth": false,
        "reason": "選項「都在各交點右上方的兩角」不符合題意；依同位角的交點條件。應得到「位於同一交點的兩角」，此錯誤常源自：以為同位角一定都在內部。"
      },
      {
        "choice": "都在截線同側且相同方位的兩角",
        "truth": false,
        "reason": "選項「都在截線同側且相同方位的兩角」不符合題意；依同位角的交點條件。應得到「位於同一交點的兩角」，此錯誤常源自：以為同位角一定都在內部。"
      },
      {
        "choice": "一內一外但相對方位相同的兩角",
        "truth": false,
        "reason": "選項「一內一外但相對方位相同的兩角」不符合題意；依同位角的交點條件。應得到「位於同一交點的兩角」，此錯誤常源自：以為同位角一定都在內部。"
      }
    ],
    "misconceptionTarget": "以為同位角一定都在內部。",
    "prerequisiteCheck": "只使用先備技能parallel-alternate-interior與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認不符合定義者。」；四個選項互異，只有位於同一交點的兩角符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需排除三個可能位置。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s006-v007-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d660da2f23e319de344d09eefc3ad8aaea1d3f3b88e6a6937a9999deda12574d"
  },
  {
    "questionId": "u17-s006-v008",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "同位角分別為(7x-20)°與(3x+44)°且相等。x與兩線關係為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "求參數與直線關係。",
    "choices": [
      "x=8，兩線平行",
      "x=16，兩線平行",
      "x=16，兩線垂直",
      "x=32，無法判斷"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：7x-20=3x+44，4x=64，x=16；同位角相等，兩線平行。",
    "explanation": "7x-20=3x+44，4x=64，x=16；同位角相等，兩線平行。",
    "steps": [
      "7x-20=3x+44，4x=64，x=16；同位角相等，兩線平行。",
      "因此選擇「x=16，兩線平行」。"
    ],
    "optionAnalysis": [
      {
        "choice": "x=8，兩線平行",
        "truth": false,
        "reason": "選項「x=8，兩線平行」不符合題意；依同位角逆性質。應得到「x=16，兩線平行」，此錯誤常源自：只解方程未判平行。"
      },
      {
        "choice": "x=16，兩線平行",
        "truth": true,
        "reason": "依獨立重算「7x-20=3x+44，4x=64，x=16；同位角相等，兩線平行。」，此選項正確回答所求。"
      },
      {
        "choice": "x=16，兩線垂直",
        "truth": false,
        "reason": "選項「x=16，兩線垂直」不符合題意；依同位角逆性質。應得到「x=16，兩線平行」，此錯誤常源自：只解方程未判平行。"
      },
      {
        "choice": "x=32，無法判斷",
        "truth": false,
        "reason": "選項「x=32，無法判斷」不符合題意；依同位角逆性質。應得到「x=16，兩線平行」，此錯誤常源自：只解方程未判平行。"
      }
    ],
    "misconceptionTarget": "只解方程未判平行。",
    "prerequisiteCheck": "只使用先備技能parallel-alternate-interior與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「求參數與直線關係。」；四個選項互異，只有x=16，兩線平行符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "結合代數與逆性質。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s006-v008-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "38f1c12e5392bf12bff5afd241eb3062ebca5078eff659cc73374b4c4789ae03"
  },
  {
    "questionId": "u17-s006-v009",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "a∥b，一個銳同位角與其鄰補角的比為2:3。銳角是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由角比求同位角。",
    "choices": [
      "36°",
      "90°",
      "108°",
      "72°"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：設兩角2k、3k，和180°，k=36°，銳角2k=72°。",
    "explanation": "設兩角2k、3k，和180°，k=36°，銳角2k=72°。",
    "steps": [
      "設兩角2k、3k，和180°，k=36°，銳角2k=72°。",
      "因此選擇「72°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "36°",
        "truth": false,
        "reason": "選項「36°」不符合題意；依同位角定位後使用鄰補比例。應得到「72°」，此錯誤常源自：把2:3直接當2°與3°。"
      },
      {
        "choice": "90°",
        "truth": false,
        "reason": "選項「90°」不符合題意；依同位角定位後使用鄰補比例。應得到「72°」，此錯誤常源自：把2:3直接當2°與3°。"
      },
      {
        "choice": "108°",
        "truth": false,
        "reason": "選項「108°」不符合題意；依同位角定位後使用鄰補比例。應得到「72°」，此錯誤常源自：把2:3直接當2°與3°。"
      },
      {
        "choice": "72°",
        "truth": true,
        "reason": "依獨立重算「設兩角2k、3k，和180°，k=36°，銳角2k=72°。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "把2:3直接當2°與3°。",
    "prerequisiteCheck": "只使用先備技能parallel-alternate-interior與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由角比求同位角。」；四個選項互異，只有72°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "比例與角度關係整合。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s006-v009-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "be3e512eb1ae8736e5c4312b5c5f85248dd0c8485f6d09ce4be45c7f81d10098"
  },
  {
    "questionId": "u17-s006-v010",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩條平行輸送帶邊線被一根定位尺穿過。定位尺與第一邊線的同位角為54°，第二邊線同方位角應為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "將同位角用於定位。",
    "choices": [
      "54°",
      "36°",
      "126°",
      "108°"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：平行邊線的同位角相等。",
    "explanation": "平行邊線的同位角相等。",
    "steps": [
      "平行邊線的同位角相等。",
      "因此選擇「54°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "54°",
        "truth": true,
        "reason": "依獨立重算「平行邊線的同位角相等。」，此選項正確回答所求。"
      },
      {
        "choice": "36°",
        "truth": false,
        "reason": "選項「36°」不符合題意；依工程定位中的同位角。應得到「54°」，此錯誤常源自：把同方位角誤作互補。"
      },
      {
        "choice": "126°",
        "truth": false,
        "reason": "選項「126°」不符合題意；依工程定位中的同位角。應得到「54°」，此錯誤常源自：把同方位角誤作互補。"
      },
      {
        "choice": "108°",
        "truth": false,
        "reason": "選項「108°」不符合題意；依工程定位中的同位角。應得到「54°」，此錯誤常源自：把同方位角誤作互補。"
      }
    ],
    "misconceptionTarget": "把同方位角誤作互補。",
    "prerequisiteCheck": "只使用先備技能parallel-alternate-interior與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「將同位角用於定位。」；四個選項互異，只有54°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "情境要求辨認同方位。",
    "literacyContextNecessity": "兩端定位尺角度一致是裝配需求。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s006-v010-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d43bea82cc03e95beede9848d8f4219e2385b30a995ec296517d66bf0f2b5608"
  },
  {
    "questionId": "u17-s006-v011",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "地圖上兩條平行道路被河岸線穿過。第一交點右上角為117°，第二交點右上角標示為(5x+12)°，x為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "從同位角標示求參數。",
    "choices": [
      "15",
      "21",
      "24",
      "33"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：同位角相等，5x+12=117，x=21。",
    "explanation": "同位角相等，5x+12=117，x=21。",
    "steps": [
      "同位角相等，5x+12=117，x=21。",
      "因此選擇「21」。"
    ],
    "optionAnalysis": [
      {
        "choice": "15",
        "truth": false,
        "reason": "選項「15」不符合題意；依地圖同方位角相等。應得到「21」，此錯誤常源自：把117減5後直接作答。"
      },
      {
        "choice": "21",
        "truth": true,
        "reason": "依獨立重算「同位角相等，5x+12=117，x=21。」，此選項正確回答所求。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "選項「24」不符合題意；依地圖同方位角相等。應得到「21」，此錯誤常源自：把117減5後直接作答。"
      },
      {
        "choice": "33",
        "truth": false,
        "reason": "選項「33」不符合題意；依地圖同方位角相等。應得到「21」，此錯誤常源自：把117減5後直接作答。"
      }
    ],
    "misconceptionTarget": "把117減5後直接作答。",
    "prerequisiteCheck": "只使用先備技能parallel-alternate-interior與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「從同位角標示求參數。」；四個選項互異，只有21符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需解析方位與方程。",
    "literacyContextNecessity": "道路圖中的右上方位是必要辨識資訊。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s006-v011-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8d97a50ea85b7dd20c72d0c3b8f75da654e369508a44d8f564b286ca76a51ae6"
  },
  {
    "questionId": "u17-s006-v012",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "品質檢查時，兩條板邊被測線所截，一對同位角讀值均為90°。最適當的結論是？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由特殊同位角讀值作完整判定。",
    "choices": [
      "兩板邊互相垂直",
      "只能知道兩角相等，不能判平行",
      "兩板邊互相平行，且測線垂直兩者",
      "兩板邊長度相等"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：同位角相等可判兩板邊平行；角為90°又表示測線垂直兩者。",
    "explanation": "同位角相等可判兩板邊平行；角為90°又表示測線垂直兩者。",
    "steps": [
      "同位角相等可判兩板邊平行；角為90°又表示測線垂直兩者。",
      "因此選擇「兩板邊互相平行，且測線垂直兩者」。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩板邊互相垂直",
        "truth": false,
        "reason": "選項「兩板邊互相垂直」不符合題意；依同位角判定與垂直定義。應得到「兩板邊互相平行，且測線垂直兩者」，此錯誤常源自：只取其中一個結論。"
      },
      {
        "choice": "只能知道兩角相等，不能判平行",
        "truth": false,
        "reason": "選項「只能知道兩角相等，不能判平行」不符合題意；依同位角判定與垂直定義。應得到「兩板邊互相平行，且測線垂直兩者」，此錯誤常源自：只取其中一個結論。"
      },
      {
        "choice": "兩板邊互相平行，且測線垂直兩者",
        "truth": true,
        "reason": "依獨立重算「同位角相等可判兩板邊平行；角為90°又表示測線垂直兩者。」，此選項正確回答所求。"
      },
      {
        "choice": "兩板邊長度相等",
        "truth": false,
        "reason": "選項「兩板邊長度相等」不符合題意；依同位角判定與垂直定義。應得到「兩板邊互相平行，且測線垂直兩者」，此錯誤常源自：只取其中一個結論。"
      }
    ],
    "misconceptionTarget": "只取其中一個結論。",
    "prerequisiteCheck": "只使用先備技能parallel-alternate-interior與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由特殊同位角讀值作完整判定。」；四個選項互異，只有兩板邊互相平行，且測線垂直兩者符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需同時解讀平行與直角。",
    "literacyContextNecessity": "驗收資料同時關乎平行度與垂直度。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s006-v012-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c10076f1ab279a33f4c8abb00d6b027228f3a3b1b26fba2a0b3ab9e81c3ceaab"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u17-s006-cr001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "standard",
    "type": "constructed-response",
    "prompt": "兩平行線被截，一對同位角為(6x-11)°與(4x+25)°。求x與兩角，並說明同位角的位置特徵。",
    "requiredWork": [
      "列相等方程",
      "代回角度",
      "說明不同交點相同方位"
    ],
    "standardSolution": [
      "6x-11=4x+25，2x=36，x=18。",
      "兩角皆97°。",
      "它們位於不同交點，但相對截線與被截線占相同方位。"
    ],
    "alternativeMethods": [
      [
        "可用F形協助辨認，但正式理由仍是相同相對方位。"
      ]
    ],
    "reasoningSteps": [
      "6x-11=4x+25，2x=36，x=18。",
      "兩角皆97°。",
      "它們位於不同交點，但相對截線與被截線占相同方位。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「同位角計算與位置辨識」，列式、理由與結果「x=18，兩角97°」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「x=18，兩角97°」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「同位角計算與位置辨識」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「同位角」相關的有效條件，或答案與推理均無法支持「x=18，兩角97°」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「同位角計算與位置辨識」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s006-fig001",
    "drawingSpecRef": "units/u17/s006/drawing-specs.jsonl#u17-s006-fig001",
    "independentReview": {
      "derivedResult": "x=18，兩角97°",
      "recalculation": "6x-11=4x+25，2x=36，x=18。；兩角皆97°。；它們位於不同交點，但相對截線與被截線占相同方位。",
      "ambiguity": "所求量與評分焦點「同位角計算與位置辨識」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "950371c1a9ef899dad332ca24c5c9279ad00efd25233ace39aa84b6a8741d651"
  },
  {
    "questionId": "u17-s006-cr002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "difficulty": "advanced",
    "type": "constructed-response",
    "prompt": "檢測兩板邊是否平行，測線形成的同位角為89.7°與89.7°。請寫驗收結論，並說明為何不能只寫「看起來平行」。",
    "requiredWork": [
      "引用同位角判定",
      "說明讀值精確前提",
      "排除目測理由"
    ],
    "standardSolution": [
      "兩同位角讀值相等。",
      "依同位角相等的逆性質，兩板邊平行。",
      "目測不提供可驗證的角度條件，不能代替幾何證據。"
    ],
    "alternativeMethods": [
      [
        "可附上兩角差為0.0°作量化證據。"
      ]
    ],
    "reasoningSteps": [
      "兩同位角讀值相等。",
      "依同位角相等的逆性質，兩板邊平行。",
      "目測不提供可驗證的角度條件，不能代替幾何證據。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「從量測資料撰寫證明」，列式、理由與結果「兩板邊平行」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「兩板邊平行」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「從量測資料撰寫證明」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「同位角」相關的有效條件，或答案與推理均無法支持「兩板邊平行」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「從量測資料撰寫證明」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "independentReview": {
      "derivedResult": "兩板邊平行",
      "recalculation": "兩同位角讀值相等。；依同位角相等的逆性質，兩板邊平行。；目測不提供可驗證的角度條件，不能代替幾何證據。",
      "ambiguity": "所求量與評分焦點「從量測資料撰寫證明」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c308e80376da9191bf28991d920d498bcf02cddb14488cf57cbde666eeeb5f73"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u17-s006-fig001",
    "unitId": "u17",
    "topicId": "u17-parallel",
    "skillId": "parallel-corresponding",
    "purpose": "支援「同位角」的空間位置、性質或證明閱讀，不提供題目答案。",
    "svgPath": "figures/u17/u17-s006-fig001.svg",
    "canvas": {
      "width": 400,
      "height": 300,
      "viewBox": "0 0 400 300"
    },
    "drawingSpec": {
      "title": "同位角F形定位",
      "description": "兩平行線被截線穿過，兩個相同方位角以弧線標示。",
      "coordinateSystem": "SVG user space, origin at upper-left",
      "layoutConstraints": "主要線段與文字保留至少20單位邊界；標籤不得遮住交點與角弧。",
      "visibleLineRule": "實線表示題目已知邊或直線。",
      "hiddenLineRule": "本平面幾何圖無隱藏線；輔助垂線可用虛線。",
      "labels": "所有字母、角度、等式與關係均按本技能專屬配置。",
      "tickMarks": "等長、平行、直角只在數學上需要時標示。",
      "units": "示意圖不直接量長；數值單位由題幹提供。",
      "arrowsAndSymbols": "平行箭頭、直角記號或角弧依技能使用。",
      "scale": "not-to-scale",
      "scaleWarning": "圖形不一定按比例，禁止以目測長短或角度作答。"
    },
    "altText": "兩平行線被截線穿過，兩個相同方位角以弧線標示。 圖形不一定按比例。",
    "svgTitle": "同位角F形定位",
    "svgDesc": "兩平行線被截線穿過，兩個相同方位角以弧線標示。",
    "mobileReadability": "400×300檢視下主要線條、交點與核心文字仍可辨識；長句置於空白區。",
    "answerLeakageReview": "圖只呈現定義結構或已知關係，不標示任何題目未給的未知答案。",
    "svgAssertions": [
      "不同交點的相同方位",
      "role=\"img\"",
      "<title",
      "<desc"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "已渲染檢查同位角F形定位：線段未被裁切，文字未遮住核心交點，且不按比例警告已置於desc。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "79a4d11603b81b1d710b49fb68b410b8e533a6e19a0260ae65ff447a16eaf68c"
  }
];
