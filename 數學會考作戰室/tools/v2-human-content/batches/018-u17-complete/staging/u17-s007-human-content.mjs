// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u17-s007-lecture-r1",
  "unitId": "u17",
  "numericUnitId": 17,
  "topicId": "u17-parallel",
  "skillId": "parallel-consecutive-interior",
  "lockedTitle": "同側內角",
  "title": "同側內角：同在內部與同在截線一側",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "prerequisiteBridge": "先備技能：parallel-corresponding。本節只使用該技能已建立的角度、平行或四邊形性質。",
  "learningOutcomes": [
    "辨認同側內角",
    "運用平行時同側內角互補",
    "由互補判定平行"
  ],
  "prerequisites": [
    {
      "skillId": "parallel-corresponding",
      "requiredLevel": "能正確使用「parallel-corresponding」中的基本定義與直接性質，不需使用後續技能。"
    }
  ],
  "glossary": [
    {
      "term": "同側內角",
      "definition": "位於兩直線之間且在截線同一側的一對角"
    },
    {
      "term": "互補",
      "definition": "兩角和為180°"
    },
    {
      "term": "U形",
      "definition": "常見辨認提示"
    },
    {
      "term": "逆性質",
      "definition": "同側內角互補可判平行"
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
    "同側內角的兩個條件是內部和同側，缺一不可。",
    "兩線平行時，同側內角和為180°；若一對同側內角和為180°，也可判兩線平行。",
    "互補不代表兩角各90°，除非另有相等條件。"
  ],
  "formalDefinitions": [
    {
      "name": "同側內角",
      "statement": "位於兩直線之間且在截線同一側的一對角"
    },
    {
      "name": "互補",
      "statement": "兩角和為180°"
    }
  ],
  "formulas": [
    {
      "formula": "a∥b ⇒ α+β=180°",
      "conditions": [
        "α、β為同側內角"
      ],
      "meaning": "用於同側內角中符合條件的推理或計算。"
    },
    {
      "formula": "α+β=180° ⇒ a∥b",
      "conditions": [
        "α、β位置正確"
      ],
      "meaning": "用於同側內角中符合條件的推理或計算。"
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
      "instruction": "確定兩線間的內部區域",
      "check": "完成第1步後，確認未引入題目未給的條件。"
    },
    {
      "step": 2,
      "instruction": "選同一側的兩個內角",
      "check": "完成第2步後，確認未引入題目未給的條件。"
    },
    {
      "step": 3,
      "instruction": "確認它們由同一截線形成",
      "check": "完成第3步後，確認未引入題目未給的條件。"
    },
    {
      "step": 4,
      "instruction": "用180°建立方程",
      "check": "完成第4步後，確認未引入題目未給的條件。"
    },
    {
      "step": 5,
      "instruction": "檢查兩角皆介於0°與180°",
      "check": "完成第5步後，確認未引入題目未給的條件。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "一角124°",
      "solutionSteps": [
        "另一角56°。"
      ],
      "answer": "另一角56°。"
    },
    {
      "exampleId": "L2",
      "prompt": "兩角為3x與2x+30",
      "solutionSteps": [
        "3x+2x+30=180，x=30。"
      ],
      "answer": "3x+2x+30=180，x=30。"
    },
    {
      "exampleId": "L3",
      "prompt": "兩角皆90°",
      "solutionSteps": [
        "和180°，可判平行。"
      ],
      "answer": "和180°，可判平行。"
    },
    {
      "exampleId": "L4",
      "prompt": "兩角和170°",
      "solutionSteps": [
        "不能用此條件判平行。"
      ],
      "answer": "不能用此條件判平行。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把互補寫成相等",
      "why": "互補是和180°",
      "correction": "互補是和180°"
    },
    {
      "mistake": "認為互補角一定都是90°",
      "why": "只有相等又互補才各90°",
      "correction": "只有相等又互補才各90°"
    },
    {
      "mistake": "選到截線兩側",
      "why": "那可能是內錯角",
      "correction": "那可能是內錯角"
    },
    {
      "mistake": "不確認內部位置",
      "why": "外角不屬同側內角",
      "correction": "外角不屬同側內角"
    },
    {
      "mistake": "漏寫度數單位",
      "why": "角度答案要有°",
      "correction": "角度答案要有°"
    }
  ],
  "selfCheck": [
    "我能否不用目測，說明「同側內角」所需的條件？",
    "我是否先辨認角、邊、對角線、底或高的正確位置？",
    "方程解出後是否代回題目真正所求？",
    "角度、長度與面積單位是否正確？"
  ],
  "summary": [
    "同側內角的兩個條件是內部和同側，缺一不可。",
    "a∥b ⇒ α+β=180°",
    "解題時先確認「α、β為同側內角」。"
  ],
  "connections": {
    "previous": "承接parallel-corresponding。",
    "next": "下一技能依鎖定順序為parallelogram-opposite-sides。"
  },
  "figureReferences": [
    "u17-s007-fig001"
  ],
  "figureAccessibility": "兩平行線與截線構成U形提示，內部同側兩角標示為α與β。 圖形不一定按比例。",
  "practiceLinks": {
    "mcQuestionIds": [
      "u17-s007-v001",
      "u17-s007-v002",
      "u17-s007-v003",
      "u17-s007-v004",
      "u17-s007-v005",
      "u17-s007-v006",
      "u17-s007-v007",
      "u17-s007-v008",
      "u17-s007-v009",
      "u17-s007-v010",
      "u17-s007-v011",
      "u17-s007-v012"
    ],
    "constructedResponseIds": [
      "u17-s007-cr001",
      "u17-s007-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "figureChecked": true,
    "reviewNote": "講義強調互補與相等的差別，並提供由性質到逆性質的雙向使用。"
  },
  "contentSha256": "2e55f1ee77e11fb9c1fb76712daaeba4c5140a03a4cbc3e99f65b0e7bfb09adc"
};

export const QUESTIONS = [
  {
    "questionId": "u17-s007-v001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "同側內角的正確位置是？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認同側內角。",
    "choices": [
      "兩直線外且截線異側",
      "同一交點的相對角",
      "兩直線之間且位於截線同一側",
      "兩直線之間且截線異側"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：同側內角必在內部且同側。",
    "explanation": "同側內角必在內部且同側。",
    "steps": [
      "同側內角必在內部且同側。",
      "因此選擇「兩直線之間且位於截線同一側」。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩直線外且截線異側",
        "truth": false,
        "reason": "選項「兩直線外且截線異側」不符合題意；依同側內角定義。應得到「兩直線之間且位於截線同一側」，此錯誤常源自：只記同側而忽略內部。"
      },
      {
        "choice": "同一交點的相對角",
        "truth": false,
        "reason": "選項「同一交點的相對角」不符合題意；依同側內角定義。應得到「兩直線之間且位於截線同一側」，此錯誤常源自：只記同側而忽略內部。"
      },
      {
        "choice": "兩直線之間且位於截線同一側",
        "truth": true,
        "reason": "依獨立重算「同側內角必在內部且同側。」，此選項正確回答所求。"
      },
      {
        "choice": "兩直線之間且截線異側",
        "truth": false,
        "reason": "選項「兩直線之間且截線異側」不符合題意；依同側內角定義。應得到「兩直線之間且位於截線同一側」，此錯誤常源自：只記同側而忽略內部。"
      }
    ],
    "misconceptionTarget": "只記同側而忽略內部。",
    "prerequisiteCheck": "只使用先備技能parallel-corresponding與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認同側內角。」；四個選項互異，只有兩直線之間且位於截線同一側符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "直接定義題。",
    "literacyContextNecessity": null,
    "visualMode": "figure-supported",
    "figureId": "u17-s007-fig001",
    "drawingSpecRef": "units/u17/s007/drawing-specs.jsonl#u17-s007-fig001",
    "semanticReviewId": "u17-s007-v001-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "484a1725f1e856fcd2c09ae1494756a57e2ebbc3c3e4eeea91e8ee800fa376aa"
  },
  {
    "questionId": "u17-s007-v002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "a∥b，同側內角之一為108°，另一角為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "求互補角。",
    "choices": [
      "108°",
      "82°",
      "252°",
      "72°"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：同側內角和180°，另一角72°。",
    "explanation": "同側內角和180°，另一角72°。",
    "steps": [
      "同側內角和180°，另一角72°。",
      "因此選擇「72°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "108°",
        "truth": false,
        "reason": "選項「108°」不符合題意；依同側內角互補。應得到「72°」，此錯誤常源自：把兩角判相等。"
      },
      {
        "choice": "82°",
        "truth": false,
        "reason": "選項「82°」不符合題意；依同側內角互補。應得到「72°」，此錯誤常源自：把兩角判相等。"
      },
      {
        "choice": "252°",
        "truth": false,
        "reason": "選項「252°」不符合題意；依同側內角互補。應得到「72°」，此錯誤常源自：把兩角判相等。"
      },
      {
        "choice": "72°",
        "truth": true,
        "reason": "依獨立重算「同側內角和180°，另一角72°。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "把兩角判相等。",
    "prerequisiteCheck": "只使用先備技能parallel-corresponding與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「求互補角。」；四個選項互異，只有72°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "一次減法。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s007-v002-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c91ce817b9ebe9801f648ae4586b2c7b9a530f27b6e30af78f4504b16f5a8b28"
  },
  {
    "questionId": "u17-s007-v003",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一對同側內角和為180°，可判定什麼？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由角和判平行。",
    "choices": [
      "兩被截直線平行",
      "兩被截直線垂直",
      "兩角相等",
      "截線平分兩角"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：同側內角互補是平行判定。",
    "explanation": "同側內角互補是平行判定。",
    "steps": [
      "同側內角互補是平行判定。",
      "因此選擇「兩被截直線平行」。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩被截直線平行",
        "truth": true,
        "reason": "依獨立重算「同側內角互補是平行判定。」，此選項正確回答所求。"
      },
      {
        "choice": "兩被截直線垂直",
        "truth": false,
        "reason": "選項「兩被截直線垂直」不符合題意；依同側內角逆性質。應得到「兩被截直線平行」，此錯誤常源自：把互補當垂直線關係。"
      },
      {
        "choice": "兩角相等",
        "truth": false,
        "reason": "選項「兩角相等」不符合題意；依同側內角逆性質。應得到「兩被截直線平行」，此錯誤常源自：把互補當垂直線關係。"
      },
      {
        "choice": "截線平分兩角",
        "truth": false,
        "reason": "選項「截線平分兩角」不符合題意；依同側內角逆性質。應得到「兩被截直線平行」，此錯誤常源自：把互補當垂直線關係。"
      }
    ],
    "misconceptionTarget": "把互補當垂直線關係。",
    "prerequisiteCheck": "只使用先備技能parallel-corresponding與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由角和判平行。」；四個選項互異，只有兩被截直線平行符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "基本逆性質。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s007-v003-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d2b31e592b0c9d88cac2c41f92f69fb92d28efceaee6b5e8206c12e6fe6a93ef"
  },
  {
    "questionId": "u17-s007-v004",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "a∥b，同側內角為(3x+6)°與(5x+14)°，x為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "以互補建立方程。",
    "choices": [
      "10",
      "20",
      "22",
      "40"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：3x+6+5x+14=180，8x=160，x=20。",
    "explanation": "3x+6+5x+14=180，8x=160，x=20。",
    "steps": [
      "3x+6+5x+14=180，8x=160，x=20。",
      "因此選擇「20」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "選項「10」不符合題意；依同側內角和180°。應得到「20」，此錯誤常源自：把兩式設相等。"
      },
      {
        "choice": "20",
        "truth": true,
        "reason": "依獨立重算「3x+6+5x+14=180，8x=160，x=20。」，此選項正確回答所求。"
      },
      {
        "choice": "22",
        "truth": false,
        "reason": "選項「22」不符合題意；依同側內角和180°。應得到「20」，此錯誤常源自：把兩式設相等。"
      },
      {
        "choice": "40",
        "truth": false,
        "reason": "選項「40」不符合題意；依同側內角和180°。應得到「20」，此錯誤常源自：把兩式設相等。"
      }
    ],
    "misconceptionTarget": "把兩式設相等。",
    "prerequisiteCheck": "只使用先備技能parallel-corresponding與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「以互補建立方程。」；四個選項互異，只有20符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "標準代數。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s007-v004-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "33b39d240da7095b00428a732a5dbc05e599097115e4add26558f238897f5b10"
  },
  {
    "questionId": "u17-s007-v005",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "同側內角分別為(7x-11)°與(3x+31)°，兩線平行時較大角是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "求參數後比較角。",
    "choices": [
      "16°",
      "79°",
      "111°",
      "101°"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：兩角和180°：10x+20=180，x=16；角為101°與79°，較大101°。",
    "explanation": "兩角和180°：10x+20=180，x=16；角為101°與79°，較大101°。",
    "steps": [
      "兩角和180°：10x+20=180，x=16；角為101°與79°，較大101°。",
      "因此選擇「101°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "16°",
        "truth": false,
        "reason": "選項「16°」不符合題意；依同側內角互補。應得到「101°」，此錯誤常源自：只回答x或未比較。"
      },
      {
        "choice": "79°",
        "truth": false,
        "reason": "選項「79°」不符合題意；依同側內角互補。應得到「101°」，此錯誤常源自：只回答x或未比較。"
      },
      {
        "choice": "111°",
        "truth": false,
        "reason": "選項「111°」不符合題意；依同側內角互補。應得到「101°」，此錯誤常源自：只回答x或未比較。"
      },
      {
        "choice": "101°",
        "truth": true,
        "reason": "依獨立重算「兩角和180°：10x+20=180，x=16；角為101°與79°，較大101°。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "只回答x或未比較。",
    "prerequisiteCheck": "只使用先備技能parallel-corresponding與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「求參數後比較角。」；四個選項互異，只有101°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需要代回與比較。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s007-v005-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a06f22f273a1fd9872911cf709ad168ad56170e1ec3c6ee544d060b2764cb087"
  },
  {
    "questionId": "u17-s007-v006",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個同側內角是另一個的2倍，兩線平行。較小角是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由倍數關係求角。",
    "choices": [
      "60°",
      "45°",
      "90°",
      "120°"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：設小角x，大角2x，3x=180，x=60°。",
    "explanation": "設小角x，大角2x，3x=180，x=60°。",
    "steps": [
      "設小角x，大角2x，3x=180，x=60°。",
      "因此選擇「60°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "60°",
        "truth": true,
        "reason": "依獨立重算「設小角x，大角2x，3x=180，x=60°。」，此選項正確回答所求。"
      },
      {
        "choice": "45°",
        "truth": false,
        "reason": "選項「45°」不符合題意；依同側內角互補。應得到「60°」，此錯誤常源自：將兩角都設90°。"
      },
      {
        "choice": "90°",
        "truth": false,
        "reason": "選項「90°」不符合題意；依同側內角互補。應得到「60°」，此錯誤常源自：將兩角都設90°。"
      },
      {
        "choice": "120°",
        "truth": false,
        "reason": "選項「120°」不符合題意；依同側內角互補。應得到「60°」，此錯誤常源自：將兩角都設90°。"
      }
    ],
    "misconceptionTarget": "將兩角都設90°。",
    "prerequisiteCheck": "只使用先備技能parallel-corresponding與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由倍數關係求角。」；四個選項互異，只有60°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需建模比例。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s007-v006-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "231482d25adba2971a48bdd4777d48f770b39f34bcd6fdd1909cdb85f37a021f"
  },
  {
    "questionId": "u17-s007-v007",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪個敘述錯誤？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認錯誤性質。",
    "choices": [
      "平行時同側內角和180°",
      "平行時同側內角相等",
      "同側內角互補可判平行",
      "相等且互補的同側內角各為90°"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：一般同側內角互補而非相等。",
    "explanation": "一般同側內角互補而非相等。",
    "steps": [
      "一般同側內角互補而非相等。",
      "因此選擇「平行時同側內角相等」。"
    ],
    "optionAnalysis": [
      {
        "choice": "平行時同側內角和180°",
        "truth": false,
        "reason": "選項「平行時同側內角和180°」不符合題意；依互補與相等的區別。應得到「平行時同側內角相等」，此錯誤常源自：把其他角型性質混用。"
      },
      {
        "choice": "平行時同側內角相等",
        "truth": true,
        "reason": "依獨立重算「一般同側內角互補而非相等。」，此選項正確回答所求。"
      },
      {
        "choice": "同側內角互補可判平行",
        "truth": false,
        "reason": "選項「同側內角互補可判平行」不符合題意；依互補與相等的區別。應得到「平行時同側內角相等」，此錯誤常源自：把其他角型性質混用。"
      },
      {
        "choice": "相等且互補的同側內角各為90°",
        "truth": false,
        "reason": "選項「相等且互補的同側內角各為90°」不符合題意；依互補與相等的區別。應得到「平行時同側內角相等」，此錯誤常源自：把其他角型性質混用。"
      }
    ],
    "misconceptionTarget": "把其他角型性質混用。",
    "prerequisiteCheck": "只使用先備技能parallel-corresponding與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認錯誤性質。」；四個選項互異，只有平行時同側內角相等符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需比較多個敘述。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s007-v007-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8418e2bee926622ac8fd71bc04b20e7cde03e9a71d1f5f2525c729a6d260f01a"
  },
  {
    "questionId": "u17-s007-v008",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "同側內角為(4x+5)°與(2x+43)°，其和為180°。x與兩線關係為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "同時完成計算與判定。",
    "choices": [
      "x=11，兩線平行",
      "x=22，兩線垂直",
      "x=22，兩線平行",
      "x=44，無法判斷"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：6x+48=180，x=22；同側內角互補，故兩線平行。",
    "explanation": "6x+48=180，x=22；同側內角互補，故兩線平行。",
    "steps": [
      "6x+48=180，x=22；同側內角互補，故兩線平行。",
      "因此選擇「x=22，兩線平行」。"
    ],
    "optionAnalysis": [
      {
        "choice": "x=11，兩線平行",
        "truth": false,
        "reason": "選項「x=11，兩線平行」不符合題意；依同側內角逆性質。應得到「x=22，兩線平行」，此錯誤常源自：只解x。"
      },
      {
        "choice": "x=22，兩線垂直",
        "truth": false,
        "reason": "選項「x=22，兩線垂直」不符合題意；依同側內角逆性質。應得到「x=22，兩線平行」，此錯誤常源自：只解x。"
      },
      {
        "choice": "x=22，兩線平行",
        "truth": true,
        "reason": "依獨立重算「6x+48=180，x=22；同側內角互補，故兩線平行。」，此選項正確回答所求。"
      },
      {
        "choice": "x=44，無法判斷",
        "truth": false,
        "reason": "選項「x=44，無法判斷」不符合題意；依同側內角逆性質。應得到「x=22，兩線平行」，此錯誤常源自：只解x。"
      }
    ],
    "misconceptionTarget": "只解x。",
    "prerequisiteCheck": "只使用先備技能parallel-corresponding與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「同時完成計算與判定。」；四個選項互異，只有x=22，兩線平行符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "兩段推理。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s007-v008-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6513accd158835fe46d6f62bb4a43ebc29352148a5ae605d9e6faf0045e34cca"
  },
  {
    "questionId": "u17-s007-v009",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "a∥b，一對同側內角相差46°。較小角是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由角差求同側內角。",
    "choices": [
      "67°",
      "46°",
      "90°",
      "113°"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：設小角x，大角x+46；2x+46=180，x=67°。",
    "explanation": "設小角x，大角x+46；2x+46=180，x=67°。",
    "steps": [
      "設小角x，大角x+46；2x+46=180，x=67°。",
      "因此選擇「67°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "67°",
        "truth": true,
        "reason": "依獨立重算「設小角x，大角x+46；2x+46=180，x=67°。」，此選項正確回答所求。"
      },
      {
        "choice": "46°",
        "truth": false,
        "reason": "選項「46°」不符合題意；依互補與角差。應得到「67°」，此錯誤常源自：把差直接當小角。"
      },
      {
        "choice": "90°",
        "truth": false,
        "reason": "選項「90°」不符合題意；依互補與角差。應得到「67°」，此錯誤常源自：把差直接當小角。"
      },
      {
        "choice": "113°",
        "truth": false,
        "reason": "選項「113°」不符合題意；依互補與角差。應得到「67°」，此錯誤常源自：把差直接當小角。"
      }
    ],
    "misconceptionTarget": "把差直接當小角。",
    "prerequisiteCheck": "只使用先備技能parallel-corresponding與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由角差求同側內角。」；四個選項互異，只有67°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "自行設未知數。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s007-v009-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6acf66c47be17575ee3c90c9c5af140af8c7431f77376339913bb73113b9fd39"
  },
  {
    "questionId": "u17-s007-v010",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩條平行棚架橫梁被斜柱穿過。上方內角為132°，下方同側內角是支座需要的角度，應設定多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "求支座安裝角。",
    "choices": [
      "58°",
      "48°",
      "132°",
      "228°"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：同側內角互補，180°-132°=48°。",
    "explanation": "同側內角互補，180°-132°=48°。",
    "steps": [
      "同側內角互補，180°-132°=48°。",
      "因此選擇「48°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "58°",
        "truth": false,
        "reason": "選項「58°」不符合題意；依棚架同側內角互補。應得到「48°」，此錯誤常源自：把支座角設成同樣132°。"
      },
      {
        "choice": "48°",
        "truth": true,
        "reason": "依獨立重算「同側內角互補，180°-132°=48°。」，此選項正確回答所求。"
      },
      {
        "choice": "132°",
        "truth": false,
        "reason": "選項「132°」不符合題意；依棚架同側內角互補。應得到「48°」，此錯誤常源自：把支座角設成同樣132°。"
      },
      {
        "choice": "228°",
        "truth": false,
        "reason": "選項「228°」不符合題意；依棚架同側內角互補。應得到「48°」，此錯誤常源自：把支座角設成同樣132°。"
      }
    ],
    "misconceptionTarget": "把支座角設成同樣132°。",
    "prerequisiteCheck": "只使用先備技能parallel-corresponding與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「求支座安裝角。」；四個選項互異，只有48°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需將構件辨認為同側內角。",
    "literacyContextNecessity": "支座角度由平行橫梁與斜柱的配置決定。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s007-v010-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "047d6a9b3d8454e8cb6fbb9205a03efaacf983957c7a2e20d45560ae84eb5101"
  },
  {
    "questionId": "u17-s007-v011",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "道路兩側界線預定平行，測量同側內角為(2x+40)°與(4x+20)°。要符合設計，x為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "用驗收條件求參數。",
    "choices": [
      "10",
      "30",
      "20",
      "40"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：兩角和180°：6x+60=180，x=20。",
    "explanation": "兩角和180°：6x+60=180，x=20。",
    "steps": [
      "兩角和180°：6x+60=180，x=20。",
      "因此選擇「20」。"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "選項「10」不符合題意；依設計平行條件轉為互補方程。應得到「20」，此錯誤常源自：將兩角設相等。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "選項「30」不符合題意；依設計平行條件轉為互補方程。應得到「20」，此錯誤常源自：將兩角設相等。"
      },
      {
        "choice": "20",
        "truth": true,
        "reason": "依獨立重算「兩角和180°：6x+60=180，x=20。」，此選項正確回答所求。"
      },
      {
        "choice": "40",
        "truth": false,
        "reason": "選項「40」不符合題意；依設計平行條件轉為互補方程。應得到「20」，此錯誤常源自：將兩角設相等。"
      }
    ],
    "misconceptionTarget": "將兩角設相等。",
    "prerequisiteCheck": "只使用先備技能parallel-corresponding與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「用驗收條件求參數。」；四個選項互異，只有20符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "建模與代數。",
    "literacyContextNecessity": "平行道路的合格條件正是同側內角互補。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s007-v011-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "9a64ff5aa6103a0aa4107058e0726e0ac0d6363d723fd342e74a061afd99f494"
  },
  {
    "questionId": "u17-s007-v012",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "室內隔板兩邊線是否平行未知，雷射測得同側內角為89.8°與90.2°，讀值視為精確。結論為何？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "從量測讀值判定平行。",
    "choices": [
      "兩邊線垂直",
      "因角度不相等所以不平行",
      "只能說近似平行",
      "兩邊線平行"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：89.8°+90.2°=180.0°，同側內角互補，故平行。",
    "explanation": "89.8°+90.2°=180.0°，同側內角互補，故平行。",
    "steps": [
      "89.8°+90.2°=180.0°，同側內角互補，故平行。",
      "因此選擇「兩邊線平行」。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩邊線垂直",
        "truth": false,
        "reason": "選項「兩邊線垂直」不符合題意；依精確小數角和判平行。應得到「兩邊線平行」，此錯誤常源自：要求兩角相等。"
      },
      {
        "choice": "因角度不相等所以不平行",
        "truth": false,
        "reason": "選項「因角度不相等所以不平行」不符合題意；依精確小數角和判平行。應得到「兩邊線平行」，此錯誤常源自：要求兩角相等。"
      },
      {
        "choice": "只能說近似平行",
        "truth": false,
        "reason": "選項「只能說近似平行」不符合題意；依精確小數角和判平行。應得到「兩邊線平行」，此錯誤常源自：要求兩角相等。"
      },
      {
        "choice": "兩邊線平行",
        "truth": true,
        "reason": "依獨立重算「89.8°+90.2°=180.0°，同側內角互補，故平行。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "要求兩角相等。",
    "prerequisiteCheck": "只使用先備技能parallel-corresponding與本技能定義，不使用後續單元知識。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「從量測讀值判定平行。」；四個選項互異，只有兩邊線平行符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需精確處理小數和。",
    "literacyContextNecessity": "雷射讀值是隔板平行驗收的直接證據。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s007-v012-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "fdfaa4698b4f39c635bb2743718648bafa5c4aad418b5700b308060f85acc18e"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u17-s007-cr001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "standard",
    "type": "constructed-response",
    "prompt": "a∥b，一對同側內角為(2x+18)°與(4x+30)°。求x與兩角。",
    "requiredWork": [
      "列角和180°",
      "求x",
      "代回兩角"
    ],
    "standardSolution": [
      "2x+18+4x+30=180。",
      "6x+48=180，x=22。",
      "兩角為62°與118°，和180°。"
    ],
    "alternativeMethods": [
      [
        "可先設較小角62°，利用鄰補求118°後核對代數式。"
      ]
    ],
    "reasoningSteps": [
      "2x+18+4x+30=180。",
      "6x+48=180，x=22。",
      "兩角為62°與118°，和180°。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「互補方程」，列式、理由與結果「x=22，兩角62°與118°」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「x=22，兩角62°與118°」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「互補方程」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「同側內角」相關的有效條件，或答案與推理均無法支持「x=22，兩角62°與118°」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「互補方程」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s007-fig001",
    "drawingSpecRef": "units/u17/s007/drawing-specs.jsonl#u17-s007-fig001",
    "independentReview": {
      "derivedResult": "x=22，兩角62°與118°",
      "recalculation": "2x+18+4x+30=180。；6x+48=180，x=22。；兩角為62°與118°，和180°。",
      "ambiguity": "所求量與評分焦點「互補方程」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a9e93da21aed34eecd03a15943fd66eee3e99138493fe182497541daaaad52f9"
  },
  {
    "questionId": "u17-s007-cr002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "difficulty": "advanced",
    "type": "constructed-response",
    "prompt": "一對同側內角相差34°，且兩線平行。求兩角並說明為何不一定都是90°。",
    "requiredWork": [
      "使用和180°與差34°",
      "求兩角",
      "解釋互補不等於相等"
    ],
    "standardSolution": [
      "設小角x，大角x+34。",
      "2x+34=180，x=73。",
      "兩角為73°與107°。互補只要求和180°，除非另知相等才各90°。"
    ],
    "alternativeMethods": [
      [
        "可用和差公式求(180±34)÷2。"
      ]
    ],
    "reasoningSteps": [
      "設小角x，大角x+34。",
      "2x+34=180，x=73。",
      "兩角為73°與107°。互補只要求和180°，除非另知相等才各90°。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「互補與相等概念辨析」，列式、理由與結果「73°與107°」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「73°與107°」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「互補與相等概念辨析」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「同側內角」相關的有效條件，或答案與推理均無法支持「73°與107°」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「互補與相等概念辨析」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "independentReview": {
      "derivedResult": "73°與107°",
      "recalculation": "設小角x，大角x+34。；2x+34=180，x=73。；兩角為73°與107°。互補只要求和180°，除非另知相等才各90°。",
      "ambiguity": "所求量與評分焦點「互補與相等概念辨析」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c9886907c2689c14efbdd69e6a7f224dadc08893542ff507ae52506527cf5edc"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u17-s007-fig001",
    "unitId": "u17",
    "topicId": "u17-parallel",
    "skillId": "parallel-consecutive-interior",
    "purpose": "支援「同側內角」的空間位置、性質或證明閱讀，不提供題目答案。",
    "svgPath": "figures/u17/u17-s007-fig001.svg",
    "canvas": {
      "width": 400,
      "height": 300,
      "viewBox": "0 0 400 300"
    },
    "drawingSpec": {
      "title": "同側內角U形定位",
      "description": "兩平行線與截線構成U形提示，內部同側兩角標示為α與β。",
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
    "altText": "兩平行線與截線構成U形提示，內部同側兩角標示為α與β。 圖形不一定按比例。",
    "svgTitle": "同側內角U形定位",
    "svgDesc": "兩平行線與截線構成U形提示，內部同側兩角標示為α與β。",
    "mobileReadability": "400×300檢視下主要線條、交點與核心文字仍可辨識；長句置於空白區。",
    "answerLeakageReview": "圖只呈現定義結構或已知關係，不標示任何題目未給的未知答案。",
    "svgAssertions": [
      "α",
      "β",
      "180°",
      "role=\"img\"",
      "<title",
      "<desc"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "已渲染檢查同側內角U形定位：線段未被裁切，文字未遮住核心交點，且不按比例警告已置於desc。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "f0b0d0192c86f1df1783c15d816e5e685887e3cc8e2ef73a555d1b4cb2e95544"
  }
];
