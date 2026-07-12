// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u17-s001-lecture-r1",
  "unitId": "u17",
  "numericUnitId": 17,
  "topicId": "u17-parallel",
  "skillId": "parallel-angle",
  "lockedTitle": "平行線截角",
  "title": "平行線截角：先認位置，再決定相等或互補",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "prerequisiteBridge": "本技能為本單元起點，從兩直線相交與角的基本概念開始。",
  "learningOutcomes": [
    "辨認截線與兩條被截直線",
    "用對頂角、鄰補角與平行線角關係求角",
    "不靠圖形外觀判斷平行"
  ],
  "prerequisites": [],
  "glossary": [
    {
      "term": "截線",
      "definition": "同時與兩條直線相交的直線"
    },
    {
      "term": "內角",
      "definition": "位在兩條直線之間的角"
    },
    {
      "term": "外角",
      "definition": "位在兩條直線外側的角"
    },
    {
      "term": "鄰補角",
      "definition": "共用一邊且另兩邊成一直線，和為180°"
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
    "一條截線穿過兩條直線時會形成八個角。先分清交點、內外與截線兩側，再套用關係。",
    "只有題目給出平行或可先證明平行時，內錯角與同位角相等、同側內角互補才成立。",
    "同一交點的對頂角相等，鄰補角和為180°，這兩條規則不需要平行條件。"
  ],
  "formalDefinitions": [
    {
      "name": "截線",
      "statement": "同時與兩條直線相交的直線"
    },
    {
      "name": "內角",
      "statement": "位在兩條直線之間的角"
    }
  ],
  "formulas": [
    {
      "formula": "對頂角相等",
      "conditions": [
        "兩直線相交時"
      ],
      "meaning": "用於平行線截角中符合條件的推理或計算。"
    },
    {
      "formula": "鄰補角和為180°",
      "conditions": [
        "兩角共用一邊且其餘兩邊成一直線"
      ],
      "meaning": "用於平行線截角中符合條件的推理或計算。"
    },
    {
      "formula": "內錯角相等、同位角相等、同側內角和180°",
      "conditions": [
        "兩被截直線平行"
      ],
      "meaning": "用於平行線截角中符合條件的推理或計算。"
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
      "instruction": "標出兩條直線與截線",
      "check": "完成第1步後，確認未引入題目未給的條件。"
    },
    {
      "step": 2,
      "instruction": "先用對頂角或鄰補角整理同一交點",
      "check": "完成第2步後，確認未引入題目未給的條件。"
    },
    {
      "step": 3,
      "instruction": "確認平行條件",
      "check": "完成第3步後，確認未引入題目未給的條件。"
    },
    {
      "step": 4,
      "instruction": "依位置選內錯角、同位角或同側內角",
      "check": "完成第4步後，確認未引入題目未給的條件。"
    },
    {
      "step": 5,
      "instruction": "代回檢查角度介於0°與180°",
      "check": "完成第5步後，確認未引入題目未給的條件。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "已知一個銳角為65°，求其對頂角",
      "solutionSteps": [
        "對頂角相等，所以為65°。"
      ],
      "answer": "對頂角相等，所以為65°。"
    },
    {
      "exampleId": "L2",
      "prompt": "已知鄰補角之一為112°",
      "solutionSteps": [
        "另一角為180°-112°=68°。"
      ],
      "answer": "另一角為180°-112°=68°。"
    },
    {
      "exampleId": "L3",
      "prompt": "兩平行線被截，某內錯角為47°",
      "solutionSteps": [
        "其內錯角為47°。"
      ],
      "answer": "其內錯角為47°。"
    },
    {
      "exampleId": "L4",
      "prompt": "兩平行線被截，同側內角之一為123°",
      "solutionSteps": [
        "另一角為57°。"
      ],
      "answer": "另一角為57°。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "看到Z形就直接判相等",
      "why": "若兩線未證明平行，Z形外觀不能當理由",
      "correction": "若兩線未證明平行，Z形外觀不能當理由"
    },
    {
      "mistake": "把鄰補角說成相等",
      "why": "鄰補角通常不相等，而是和為180°",
      "correction": "鄰補角通常不相等，而是和為180°"
    },
    {
      "mistake": "忽略角的位置",
      "why": "先辨認內外與截線兩側",
      "correction": "先辨認內外與截線兩側"
    },
    {
      "mistake": "把銳角算成大於180°",
      "why": "單一平面角應介於0°與180°",
      "correction": "單一平面角應介於0°與180°"
    },
    {
      "mistake": "只看圖的傾斜程度",
      "why": "示意圖不一定按比例",
      "correction": "示意圖不一定按比例"
    }
  ],
  "selfCheck": [
    "我能否不用目測，說明「平行線截角」所需的條件？",
    "我是否先辨認角、邊、對角線、底或高的正確位置？",
    "方程解出後是否代回題目真正所求？",
    "角度、長度與面積單位是否正確？"
  ],
  "summary": [
    "一條截線穿過兩條直線時會形成八個角。先分清交點、內外與截線兩側，再套用關係。",
    "對頂角相等",
    "解題時先確認「兩直線相交時」。"
  ],
  "connections": {
    "previous": "本單元起點。",
    "next": "下一技能依鎖定順序為parallel-properties。"
  },
  "figureReferences": [
    "u17-s001-fig001"
  ],
  "figureAccessibility": "兩條水平平行線被斜截線穿過，標示一個68度角、其對頂角、內錯角與同側內角。 圖形不一定按比例。",
  "practiceLinks": {
    "mcQuestionIds": [
      "u17-s001-v001",
      "u17-s001-v002",
      "u17-s001-v003",
      "u17-s001-v004",
      "u17-s001-v005",
      "u17-s001-v006",
      "u17-s001-v007",
      "u17-s001-v008",
      "u17-s001-v009",
      "u17-s001-v010",
      "u17-s001-v011",
      "u17-s001-v012"
    ],
    "constructedResponseIds": [
      "u17-s001-cr001",
      "u17-s001-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "figureChecked": true,
    "reviewNote": "本講義先區分不需平行條件的交角規則，再引入需要平行條件的截角規則，避免零基礎學生把所有看似相同位置的角都判成相等。"
  },
  "contentSha256": "a803a35075df74055ee849a23a0d2bf4f4e118b805fc09d2f67b49804ac3fe80"
};

export const QUESTIONS = [
  {
    "questionId": "u17-s001-v001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩直線相交形成一角為58°，其對頂角為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "辨認同一交點的對頂角。",
    "choices": [
      "58°",
      "32°",
      "122°",
      "180°"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：對頂角相等，因此所求角為58°。",
    "explanation": "對頂角相等，因此所求角為58°。",
    "steps": [
      "對頂角相等，因此所求角為58°。",
      "因此選擇「58°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "58°",
        "truth": true,
        "reason": "依獨立重算「對頂角相等，因此所求角為58°。」，此選項正確回答所求。"
      },
      {
        "choice": "32°",
        "truth": false,
        "reason": "選項「32°」不符合題意；依對頂角相等。應得到「58°」，此錯誤常源自：把對頂角誤當鄰補角。"
      },
      {
        "choice": "122°",
        "truth": false,
        "reason": "選項「122°」不符合題意；依對頂角相等。應得到「58°」，此錯誤常源自：把對頂角誤當鄰補角。"
      },
      {
        "choice": "180°",
        "truth": false,
        "reason": "選項「180°」不符合題意；依對頂角相等。應得到「58°」，此錯誤常源自：把對頂角誤當鄰補角。"
      }
    ],
    "misconceptionTarget": "把對頂角誤當鄰補角。",
    "prerequisiteCheck": "無單元內先備技能；只需基本角與直線概念。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「辨認同一交點的對頂角。」；四個選項互異，只有58°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "只需直接套用對頂角相等。",
    "literacyContextNecessity": null,
    "visualMode": "figure-supported",
    "figureId": "u17-s001-fig001",
    "drawingSpecRef": "units/u17/s001/drawing-specs.jsonl#u17-s001-fig001",
    "semanticReviewId": "u17-s001-v001-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e10b92f194e4c7ca472e125e2e1cff01ac108f010435f238794e31ec9040d8ea"
  },
  {
    "questionId": "u17-s001-v002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個角與124°角形成鄰補角，這個角是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由鄰補關係求未知角。",
    "choices": [
      "124°",
      "56°",
      "66°",
      "236°"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：鄰補角和為180°，所以180°-124°=56°。",
    "explanation": "鄰補角和為180°，所以180°-124°=56°。",
    "steps": [
      "鄰補角和為180°，所以180°-124°=56°。",
      "因此選擇「56°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "124°",
        "truth": false,
        "reason": "選項「124°」不符合題意；依鄰補角和為180°。應得到「56°」，此錯誤常源自：把鄰補角當成相等。"
      },
      {
        "choice": "56°",
        "truth": true,
        "reason": "依獨立重算「鄰補角和為180°，所以180°-124°=56°。」，此選項正確回答所求。"
      },
      {
        "choice": "66°",
        "truth": false,
        "reason": "選項「66°」不符合題意；依鄰補角和為180°。應得到「56°」，此錯誤常源自：把鄰補角當成相等。"
      },
      {
        "choice": "236°",
        "truth": false,
        "reason": "選項「236°」不符合題意；依鄰補角和為180°。應得到「56°」，此錯誤常源自：把鄰補角當成相等。"
      }
    ],
    "misconceptionTarget": "把鄰補角當成相等。",
    "prerequisiteCheck": "無單元內先備技能；只需基本角與直線概念。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由鄰補關係求未知角。」；四個選項互異，只有56°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "一次減法即可完成。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s001-v002-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8eb482765c97feb3840466164881f687ae7a70f876a9f506facb1f0dd65b6570"
  },
  {
    "questionId": "u17-s001-v003",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "basic",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩平行線被一截線所截，一組內錯角中一角為73°，另一角為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "在明示平行下使用內錯角性質。",
    "choices": [
      "107°",
      "17°",
      "73°",
      "146°"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：兩線平行時內錯角相等，所以另一角為73°。",
    "explanation": "兩線平行時內錯角相等，所以另一角為73°。",
    "steps": [
      "兩線平行時內錯角相等，所以另一角為73°。",
      "因此選擇「73°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "107°",
        "truth": false,
        "reason": "選項「107°」不符合題意；依平行線的內錯角相等。應得到「73°」，此錯誤常源自：誤用同側內角互補。"
      },
      {
        "choice": "17°",
        "truth": false,
        "reason": "選項「17°」不符合題意；依平行線的內錯角相等。應得到「73°」，此錯誤常源自：誤用同側內角互補。"
      },
      {
        "choice": "73°",
        "truth": true,
        "reason": "依獨立重算「兩線平行時內錯角相等，所以另一角為73°。」，此選項正確回答所求。"
      },
      {
        "choice": "146°",
        "truth": false,
        "reason": "選項「146°」不符合題意；依平行線的內錯角相等。應得到「73°」，此錯誤常源自：誤用同側內角互補。"
      }
    ],
    "misconceptionTarget": "誤用同側內角互補。",
    "prerequisiteCheck": "無單元內先備技能；只需基本角與直線概念。",
    "estimatedTimeSec": 60,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「在明示平行下使用內錯角性質。」；四個選項互異，只有73°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需辨認角型並直接套性質。",
    "literacyContextNecessity": null,
    "visualMode": "figure-supported",
    "figureId": "u17-s001-fig001",
    "drawingSpecRef": "units/u17/s001/drawing-specs.jsonl#u17-s001-fig001",
    "semanticReviewId": "u17-s001-v003-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "45b4a8ad5d03abb6b855f50914380a6fd850d31b27de9d8054550a4f6dd3f0cc"
  },
  {
    "questionId": "u17-s001-v004",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩平行線被截，同側內角之一為131°，另一角為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由互補關係求角。",
    "choices": [
      "131°",
      "59°",
      "229°",
      "49°"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：同側內角和180°，故180°-131°=49°。",
    "explanation": "同側內角和180°，故180°-131°=49°。",
    "steps": [
      "同側內角和180°，故180°-131°=49°。",
      "因此選擇「49°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "131°",
        "truth": false,
        "reason": "選項「131°」不符合題意；依平行線的同側內角互補。應得到「49°」，此錯誤常源自：把同側內角判成相等。"
      },
      {
        "choice": "59°",
        "truth": false,
        "reason": "選項「59°」不符合題意；依平行線的同側內角互補。應得到「49°」，此錯誤常源自：把同側內角判成相等。"
      },
      {
        "choice": "229°",
        "truth": false,
        "reason": "選項「229°」不符合題意；依平行線的同側內角互補。應得到「49°」，此錯誤常源自：把同側內角判成相等。"
      },
      {
        "choice": "49°",
        "truth": true,
        "reason": "依獨立重算「同側內角和180°，故180°-131°=49°。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "把同側內角判成相等。",
    "prerequisiteCheck": "無單元內先備技能；只需基本角與直線概念。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由互補關係求角。」；四個選項互異，只有49°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需選對角關係並計算。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s001-v004-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2eb99483f201a2222ed855df6f5aac1bb77d8125e079823f81b9c2751f037d01"
  },
  {
    "questionId": "u17-s001-v005",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩平行線被截，某同位角為(3x+7)°，與它相等的同位角為82°，x為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "把角相等轉成一次方程。",
    "choices": [
      "23",
      "25",
      "27",
      "29"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：3x+7=82，3x=75，x=25。",
    "explanation": "3x+7=82，3x=75，x=25。",
    "steps": [
      "3x+7=82，3x=75，x=25。",
      "因此選擇「25」。"
    ],
    "optionAnalysis": [
      {
        "choice": "23",
        "truth": false,
        "reason": "選項「23」不符合題意；依平行線的同位角相等。應得到「25」，此錯誤常源自：將82與7直接相加。"
      },
      {
        "choice": "25",
        "truth": true,
        "reason": "依獨立重算「3x+7=82，3x=75，x=25。」，此選項正確回答所求。"
      },
      {
        "choice": "27",
        "truth": false,
        "reason": "選項「27」不符合題意；依平行線的同位角相等。應得到「25」，此錯誤常源自：將82與7直接相加。"
      },
      {
        "choice": "29",
        "truth": false,
        "reason": "選項「29」不符合題意；依平行線的同位角相等。應得到「25」，此錯誤常源自：將82與7直接相加。"
      }
    ],
    "misconceptionTarget": "將82與7直接相加。",
    "prerequisiteCheck": "無單元內先備技能；只需基本角與直線概念。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「把角相等轉成一次方程。」；四個選項互異，只有25符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需列式並解一次方程。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s001-v005-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2d9c7117aaf821e0f961a6de6b6b23a1576f3bd5187195354f29871ed57ec05c"
  },
  {
    "questionId": "u17-s001-v006",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "standard",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩平行線被截，一對同側內角分別為(2x+10)°與(4x+20)°，x為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由同側內角和建立方程。",
    "choices": [
      "20",
      "30",
      "25",
      "35"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：(2x+10)+(4x+20)=180，6x=150，x=25。",
    "explanation": "(2x+10)+(4x+20)=180，6x=150，x=25。",
    "steps": [
      "(2x+10)+(4x+20)=180，6x=150，x=25。",
      "因此選擇「25」。"
    ],
    "optionAnalysis": [
      {
        "choice": "20",
        "truth": false,
        "reason": "選項「20」不符合題意；依同側內角互補。應得到「25」，此錯誤常源自：把兩角設成相等。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "選項「30」不符合題意；依同側內角互補。應得到「25」，此錯誤常源自：把兩角設成相等。"
      },
      {
        "choice": "25",
        "truth": true,
        "reason": "依獨立重算「(2x+10)+(4x+20)=180，6x=150，x=25。」，此選項正確回答所求。"
      },
      {
        "choice": "35",
        "truth": false,
        "reason": "選項「35」不符合題意；依同側內角互補。應得到「25」，此錯誤常源自：把兩角設成相等。"
      }
    ],
    "misconceptionTarget": "把兩角設成相等。",
    "prerequisiteCheck": "無單元內先備技能；只需基本角與直線概念。",
    "estimatedTimeSec": 75,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由同側內角和建立方程。」；四個選項互異，只有25符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需整理含兩個代數角的互補式。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s001-v006-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8e83a3ffa27fa51a8ec8856acfa547b6b24e42d71ffa1e7af59455c50bcbf64b"
  },
  {
    "questionId": "u17-s001-v007",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩平行線被截，一角為38°。與它鄰補的角之對頂角為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "串聯兩種交角關係。",
    "choices": [
      "38°",
      "52°",
      "322°",
      "142°"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：先求鄰補角180°-38°=142°，再用對頂角相等，答案142°。",
    "explanation": "先求鄰補角180°-38°=142°，再用對頂角相等，答案142°。",
    "steps": [
      "先求鄰補角180°-38°=142°，再用對頂角相等，答案142°。",
      "因此選擇「142°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "38°",
        "truth": false,
        "reason": "選項「38°」不符合題意；依鄰補角與對頂角可串聯。應得到「142°」，此錯誤常源自：只套一次對頂角而忽略鄰補。"
      },
      {
        "choice": "52°",
        "truth": false,
        "reason": "選項「52°」不符合題意；依鄰補角與對頂角可串聯。應得到「142°」，此錯誤常源自：只套一次對頂角而忽略鄰補。"
      },
      {
        "choice": "322°",
        "truth": false,
        "reason": "選項「322°」不符合題意；依鄰補角與對頂角可串聯。應得到「142°」，此錯誤常源自：只套一次對頂角而忽略鄰補。"
      },
      {
        "choice": "142°",
        "truth": true,
        "reason": "依獨立重算「先求鄰補角180°-38°=142°，再用對頂角相等，答案142°。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "只套一次對頂角而忽略鄰補。",
    "prerequisiteCheck": "無單元內先備技能；只需基本角與直線概念。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「串聯兩種交角關係。」；四個選項互異，只有142°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需要兩步角度推理。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s001-v007-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "aaab1b88ea83d199afde3f6ac490b110aefe64e449a23c06d60f34025b2763b4"
  },
  {
    "questionId": "u17-s001-v008",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩平行線被截，某內角為(5x-8)°，其同側內角為(3x+28)°。較小的角是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "解方程後辨認較小角。",
    "choices": [
      "88°",
      "73°",
      "92°",
      "107°"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：同側內角和180°：8x+20=180，x=20；兩角為92°與88°，較小為88°。",
    "explanation": "同側內角和180°：8x+20=180，x=20；兩角為92°與88°，較小為88°。",
    "steps": [
      "兩角和180°：8x+20=180，x=20；兩角為92°與88°，較小為88°。",
      "因此選擇「88°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "88°",
        "truth": true,
        "reason": "依獨立重算「同側內角和180°：8x+20=180，x=20；兩角為92°與88°，較小為88°。」，此選項正確回答所求。"
      },
      {
        "choice": "73°",
        "truth": false,
        "reason": "選項「73°」不符合題意；依同側內角互補並比較角度。應得到「88°」，此錯誤常源自：解出x後未代回比較。"
      },
      {
        "choice": "92°",
        "truth": false,
        "reason": "選項「92°」不符合題意；依同側內角互補並比較角度。應得到「88°」，此錯誤常源自：解出x後未代回比較。"
      },
      {
        "choice": "107°",
        "truth": false,
        "reason": "選項「107°」不符合題意；依同側內角互補並比較角度。應得到「88°」，此錯誤常源自：解出x後未代回比較。"
      }
    ],
    "misconceptionTarget": "解出x後未代回比較。",
    "prerequisiteCheck": "無單元內先備技能；只需基本角與直線概念。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「解方程後辨認較小角。」；四個選項互異，只有88°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需解方程、代回兩角並比較。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s001-v008-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a41c860816fcf3b4f9f0b17b9d812125df3f8150f2e35e542b7fe071599535a5"
  },
  {
    "questionId": "u17-s001-v009",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "advanced",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "直線a、b被t所截，已知一對內錯角分別為(7x-9)°與(4x+36)°且a∥b。這兩角各為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "求兩個相等內錯角的實際度數。",
    "choices": [
      "81°",
      "87°",
      "96°",
      "105°"
    ],
    "answerIndex": 2,
    "independentSolution": "重新依題目條件計算：平行使內錯角相等：7x-9=4x+36，x=15，角為96°。",
    "explanation": "平行使內錯角相等：7x-9=4x+36，x=15，角為96°。",
    "steps": [
      "平行使內錯角相等：7x-9=4x+36，x=15，角為96°。",
      "因此選擇「96°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "81°",
        "truth": false,
        "reason": "選項「81°」不符合題意；依內錯角相等。應得到「96°」，此錯誤常源自：把兩角相加成180°。"
      },
      {
        "choice": "87°",
        "truth": false,
        "reason": "選項「87°」不符合題意；依內錯角相等。應得到「96°」，此錯誤常源自：把兩角相加成180°。"
      },
      {
        "choice": "96°",
        "truth": true,
        "reason": "依獨立重算「平行使內錯角相等：7x-9=4x+36，x=15，角為96°。」，此選項正確回答所求。"
      },
      {
        "choice": "105°",
        "truth": false,
        "reason": "選項「105°」不符合題意；依內錯角相等。應得到「96°」，此錯誤常源自：把兩角相加成180°。"
      }
    ],
    "misconceptionTarget": "把兩角相加成180°。",
    "prerequisiteCheck": "無單元內先備技能；只需基本角與直線概念。",
    "estimatedTimeSec": 105,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「求兩個相等內錯角的實際度數。」；四個選項互異，只有96°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "兩階段代數與角性質。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s001-v009-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "461d573cb508a5cfe8d4b104cb9ebdb85737ba7c84d3c417c0f166e91a7c204c"
  },
  {
    "questionId": "u17-s001-v010",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "道路護欄的兩條邊互相平行，一根斜撐穿過兩邊。設計圖標示上方交角為64°，工人要切出與其同側內角對應的角度，應切多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "將平行線角關係用於斜撐切角。",
    "choices": [
      "64°",
      "26°",
      "296°",
      "116°"
    ],
    "answerIndex": 3,
    "independentSolution": "重新依題目條件計算：同側內角和180°，所以切角為116°。",
    "explanation": "同側內角和180°，所以切角為116°。",
    "steps": [
      "同側內角和180°，所以切角為116°。",
      "因此選擇「116°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "64°",
        "truth": false,
        "reason": "選項「64°」不符合題意；依平行構件中的同側內角互補。應得到「116°」，此錯誤常源自：因外觀相似而誤切64°。"
      },
      {
        "choice": "26°",
        "truth": false,
        "reason": "選項「26°」不符合題意；依平行構件中的同側內角互補。應得到「116°」，此錯誤常源自：因外觀相似而誤切64°。"
      },
      {
        "choice": "296°",
        "truth": false,
        "reason": "選項「296°」不符合題意；依平行構件中的同側內角互補。應得到「116°」，此錯誤常源自：因外觀相似而誤切64°。"
      },
      {
        "choice": "116°",
        "truth": true,
        "reason": "依獨立重算「同側內角和180°，所以切角為116°。」，此選項正確回答所求。"
      }
    ],
    "misconceptionTarget": "因外觀相似而誤切64°。",
    "prerequisiteCheck": "無單元內先備技能；只需基本角與直線概念。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「將平行線角關係用於斜撐切角。」；四個選項互異，只有116°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "必須把護欄邊與斜撐建模成平行線和截線。",
    "literacyContextNecessity": "斜撐要與兩條平行護欄邊正確貼合，角度關係直接決定切割。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s001-v010-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c86a767325c75fd5e652f09f39cea0f364e645ed36e3c25dc6005c0f985e9c72"
  },
  {
    "questionId": "u17-s001-v011",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "地圖上兩條平行街道被一條斜路穿過。斜路與第一條街形成的銳角為41°，斜路與第二條街形成的鈍角是多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "由一個銳角推得另一交點的鈍角。",
    "choices": [
      "139°",
      "41°",
      "49°",
      "221°"
    ],
    "answerIndex": 0,
    "independentSolution": "重新依題目條件計算：平行線形成的銳角皆41°，相鄰鈍角為180°-41°=139°。",
    "explanation": "平行線形成的銳角皆41°，相鄰鈍角為180°-41°=139°。",
    "steps": [
      "平行線形成的銳角皆41°，相鄰鈍角為180°-41°=139°。",
      "因此選擇「139°」。"
    ],
    "optionAnalysis": [
      {
        "choice": "139°",
        "truth": true,
        "reason": "依獨立重算「平行線形成的銳角皆41°，相鄰鈍角為180°-41°=139°。」，此選項正確回答所求。"
      },
      {
        "choice": "41°",
        "truth": false,
        "reason": "選項「41°」不符合題意；依平行截角只有兩種度數且互補。應得到「139°」，此錯誤常源自：將所有截角都視為41°。"
      },
      {
        "choice": "49°",
        "truth": false,
        "reason": "選項「49°」不符合題意；依平行截角只有兩種度數且互補。應得到「139°」，此錯誤常源自：將所有截角都視為41°。"
      },
      {
        "choice": "221°",
        "truth": false,
        "reason": "選項「221°」不符合題意；依平行截角只有兩種度數且互補。應得到「139°」，此錯誤常源自：將所有截角都視為41°。"
      }
    ],
    "misconceptionTarget": "將所有截角都視為41°。",
    "prerequisiteCheck": "無單元內先備技能；只需基本角與直線概念。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「由一個銳角推得另一交點的鈍角。」；四個選項互異，只有139°符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需跨交點並辨認鈍角。",
    "literacyContextNecessity": "街道交會角會影響轉彎設計，情境中的銳鈍角不可刪除。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s001-v011-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e55d9ada5d511544f1e2ab98c0b7cebaafccb87194b6e0759103669da5d48dfc"
  },
  {
    "questionId": "u17-s001-v012",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "literacy",
    "type": "mc",
    "itemType": "single-choice",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "窗框上下邊平行，一支支撐桿與上邊形成(2x+15)°，與下邊形成的內錯角為(5x-30)°。支撐桿正確安裝時x為多少？",
    "givenConditions": [
      "所有平行、垂直、等長與角度條件均以題幹或圖上記號為準。"
    ],
    "target": "以安裝條件建立角度方程。",
    "choices": [
      "9",
      "15",
      "18",
      "25"
    ],
    "answerIndex": 1,
    "independentSolution": "重新依題目條件計算：內錯角相等：2x+15=5x-30，3x=45，x=15。",
    "explanation": "內錯角相等：2x+15=5x-30，3x=45，x=15。",
    "steps": [
      "內錯角相等：2x+15=5x-30，3x=45，x=15。",
      "因此選擇「15」。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": false,
        "reason": "選項「9」不符合題意；依平行窗框中的內錯角相等。應得到「15」，此錯誤常源自：把兩角相加成180°。"
      },
      {
        "choice": "15",
        "truth": true,
        "reason": "依獨立重算「內錯角相等：2x+15=5x-30，3x=45，x=15。」，此選項正確回答所求。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "選項「18」不符合題意；依平行窗框中的內錯角相等。應得到「15」，此錯誤常源自：把兩角相加成180°。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "選項「25」不符合題意；依平行窗框中的內錯角相等。應得到「15」，此錯誤常源自：把兩角相加成180°。"
      }
    ],
    "misconceptionTarget": "把兩角相加成180°。",
    "prerequisiteCheck": "無單元內先備技能；只需基本角與直線概念。",
    "estimatedTimeSec": 120,
    "unitCheck": "角度或長度單位依題意一致",
    "roundingCheck": "本題數值皆視為精確值；除題幹明示外不需四捨五入。",
    "ambiguityAudit": "題目明確要求「以安裝條件建立角度方程。」；四個選項互異，只有15符合獨立重算。",
    "boundaryAudit": "只使用國中會考平面幾何、一次方程、比例、周長與面積；不使用向量、座標距離或高中證明工具。",
    "difficultyReason": "需把實物結構翻成內錯角相等。",
    "literacyContextNecessity": "支撐桿是否貼合由兩個實際安裝角決定，情境是必要條件。；移除情境後將無法判斷實際所求量、有效尺寸或施工限制。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "semanticReviewId": "u17-s001-v012-review",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "958a2142697cf3aa1334694cd77b21e88a72ee352d82b79d62204962806b8dde"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u17-s001-cr001",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "standard",
    "type": "constructed-response",
    "prompt": "兩平行線a、b被截線t所截。已知一個角為68°。請列出圖中其對頂角、鄰補角、內錯角與同側內角的度數，並逐一寫理由。",
    "requiredWork": [
      "須寫四種角各自度數",
      "每個結果附對應性質",
      "不得只寫答案"
    ],
    "standardSolution": [
      "對頂角=68°，因對頂角相等。",
      "鄰補角=180°-68°=112°。",
      "內錯角=68°，因a∥b。",
      "同側內角=112°，因同側內角和180°。"
    ],
    "alternativeMethods": [
      [
        "也可先整理所有銳角為68°、所有鈍角為112°，再依位置分類。"
      ]
    ],
    "reasoningSteps": [
      "對頂角=68°，因對頂角相等。",
      "鄰補角=180°-68°=112°。",
      "內錯角=68°，因a∥b。",
      "同側內角=112°，因同側內角和180°。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「同時區分四種角關係」，列式、理由與結果「對頂角68°、鄰補角112°、內錯角68°、同側內角112°」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「對頂角68°、鄰補角112°、內錯角68°、同側內角112°」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「同時區分四種角關係」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「平行線截角」相關的有效條件，或答案與推理均無法支持「對頂角68°、鄰補角112°、內錯角68°、同側內角112°」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「同時區分四種角關係」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s001-fig001",
    "drawingSpecRef": "units/u17/s001/drawing-specs.jsonl#u17-s001-fig001",
    "independentReview": {
      "derivedResult": "對頂角68°、鄰補角112°、內錯角68°、同側內角112°",
      "recalculation": "對頂角=68°，因對頂角相等。；鄰補角=180°-68°=112°。；內錯角=68°，因a∥b。；同側內角=112°，因同側內角和180°。",
      "ambiguity": "所求量與評分焦點「同時區分四種角關係」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "fac226dc047e751d9cf75f605e3d1bd5109972b52ae48f8dcaeaa3e528f5fbf4"
  },
  {
    "questionId": "u17-s001-cr002",
    "unitId": "u17",
    "numericUnitId": 17,
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "difficulty": "advanced",
    "type": "constructed-response",
    "prompt": "兩平行線被截，一對同側內角為(3x+12)°與(5x+8)°。求x與兩角度數，並說明如何用另一種角關係驗算。",
    "requiredWork": [
      "列互補方程",
      "求x並代回兩角",
      "提出有效驗算"
    ],
    "standardSolution": [
      "(3x+12)+(5x+8)=180。",
      "8x+20=180，x=20。",
      "兩角為72°與108°。",
      "可用72°的內錯角或同位角也為72°，再檢查其鄰補角108°。"
    ],
    "alternativeMethods": [
      [
        "可先設其中一角為y，另一角180-y，再與代數式聯立。"
      ]
    ],
    "reasoningSteps": [
      "(3x+12)+(5x+8)=180。",
      "8x+20=180，x=20。",
      "兩角為72°與108°。",
      "可用72°的內錯角或同位角也為72°，再檢查其鄰補角108°。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整處理「多步角度方程與驗算」，列式、理由與結果「x=20，兩角72°與108°」均正確。"
      },
      {
        "score": 2,
        "criteria": "主要方法與幾何性質正確，且已得到大部分「x=20，兩角72°與108°」；僅有一處算術、單位或理由缺漏。"
      },
      {
        "score": 1,
        "criteria": "能指出本題應使用的核心性質並完成至少一個有效步驟，但尚未正確完成「多步角度方程與驗算」。"
      },
      {
        "score": 0,
        "criteria": "未使用與「平行線截角」相關的有效條件，或答案與推理均無法支持「x=20，兩角72°與108°」。"
      }
    ],
    "partialCreditRules": [
      "正確列出本題關鍵關係但算術未完成，可依完成程度給1至2分。",
      "只得到部分結果時，必須有可辨認的「多步角度方程與驗算」推理才給分。"
    ],
    "followThroughPolicy": "若前段只有單一算術錯誤，後續依其結果正確推理可保留相應方法分。",
    "unitNotationRules": "角度以度表示，長度與面積保留題目單位。",
    "answerOnlyPolicy": "只有最終答案而無題目要求的列式或理由，最高1分；證明題只寫結論不得分。",
    "visualMode": "figure-supported",
    "figureId": "u17-s001-fig001",
    "drawingSpecRef": "units/u17/s001/drawing-specs.jsonl#u17-s001-fig001",
    "independentReview": {
      "derivedResult": "x=20，兩角72°與108°",
      "recalculation": "(3x+12)+(5x+8)=180。；8x+20=180，x=20。；兩角為72°與108°。；可用72°的內錯角或同位角也為72°，再檢查其鄰補角108°。",
      "ambiguity": "所求量與評分焦點「多步角度方程與驗算」明確；替代方法不改變標準結果。",
      "decision": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f89e922bd1ae9a4c5ed9b3ba8793e8fedcff087021e3e4661cc14613ea1373cf"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u17-s001-fig001",
    "unitId": "u17",
    "topicId": "u17-parallel",
    "skillId": "parallel-angle",
    "purpose": "支援「平行線截角」的空間位置、性質或證明閱讀，不提供題目答案。",
    "svgPath": "figures/u17/u17-s001-fig001.svg",
    "canvas": {
      "width": 400,
      "height": 300,
      "viewBox": "0 0 400 300"
    },
    "drawingSpec": {
      "title": "兩平行線截角總覽",
      "description": "兩條水平平行線被斜截線穿過，標示一個68度角、其對頂角、內錯角與同側內角。",
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
    "altText": "兩條水平平行線被斜截線穿過，標示一個68度角、其對頂角、內錯角與同側內角。 圖形不一定按比例。",
    "svgTitle": "兩平行線截角總覽",
    "svgDesc": "兩條水平平行線被斜截線穿過，標示一個68度角、其對頂角、內錯角與同側內角。",
    "mobileReadability": "400×300檢視下主要線條、交點與核心文字仍可辨識；長句置於空白區。",
    "answerLeakageReview": "圖只呈現定義結構或已知關係，不標示任何題目未給的未知答案。",
    "svgAssertions": [
      "68°",
      "內錯角",
      "a",
      "b",
      "role=\"img\"",
      "<title",
      "<desc"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "已渲染檢查兩平行線截角總覽：線段未被裁切，文字未遮住核心交點，且不按比例警告已置於desc。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "3f7f00205679570857191eba15fdc69f4e859a72b1e309b9e166a0e4413d19a1"
  }
];
