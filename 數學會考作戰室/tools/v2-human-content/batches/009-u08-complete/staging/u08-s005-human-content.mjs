// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s005-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-elements",
  "skillId": "triangle-basic-classification",
  "lockedSkillTitle": "三角形基本分類",
  "title": "三角形基本分類：按邊與按角是兩套分類",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能依邊長分為不等邊、等腰與正三角形。",
    "能依角度分為銳角、直角與鈍角三角形。",
    "能同時描述一個三角形的邊分類與角分類。",
    "能利用等腰或正三角形的基本角度關係。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "triangle-angle-sum"
    ],
    "bridgeExplanation": "先能求三角形內角，再依三角邊長與角度特徵分類。"
  },
  "prerequisites": [
    {
      "skillId": "triangle-angle-sum",
      "requiredLevel": "能使用三內角和 180°，並判斷角度範圍。"
    }
  ],
  "glossary": [
    {
      "term": "不等邊三角形",
      "definition": "三邊長互不相等。"
    },
    {
      "term": "等腰三角形",
      "definition": "至少有兩邊等長；常指定兩腰與底邊。"
    },
    {
      "term": "正三角形",
      "definition": "三邊等長，也稱等邊三角形。"
    },
    {
      "term": "銳角三角形",
      "definition": "三內角皆為銳角。"
    },
    {
      "term": "直角三角形",
      "definition": "有一個直角。"
    },
    {
      "term": "鈍角三角形",
      "definition": "有一個鈍角。"
    },
    {
      "term": "底角",
      "definition": "等腰三角形底邊兩端的角，兩底角相等。"
    }
  ],
  "notation": [
    {
      "symbol": "AB=AC",
      "meaning": "三角形 ABC 中 AB、AC 為等長的兩腰，底邊為 BC。"
    },
    {
      "symbol": "∠B=∠C",
      "meaning": "若 AB=AC，則底角 B、C 相等。"
    }
  ],
  "conceptDevelopment": [
    "三角形可以同時按邊與按角分類。例如有兩邊相等且一角為鈍角，可稱等腰鈍角三角形。",
    "等腰三角形的兩個底角相等；反過來，若兩角相等，所對的兩邊相等。",
    "正三角形三邊相等，所以三角也相等；三角和 180°，每角為 60°，因此正三角形一定是銳角三角形。",
    "一個三角形不可能同時有兩個直角或兩個鈍角，因為總和會至少達 180°。"
  ],
  "formalDefinitions": [
    {
      "name": "按邊分類",
      "statement": "依三邊相等的數量分類。"
    },
    {
      "name": "按角分類",
      "statement": "看最大內角：小於 90° 為銳角三角形，等於 90° 為直角三角形，大於 90° 為鈍角三角形。"
    }
  ],
  "formulas": [
    {
      "formula": "等腰三角形兩底角相等",
      "conditions": [
        "兩腰等長"
      ],
      "meaning": "由邊的對稱性得到角關係。"
    },
    {
      "formula": "正三角形每角=60°",
      "conditions": [
        "三邊等長"
      ],
      "meaning": "三等角合為 180°。"
    }
  ],
  "invalidUseCases": [
    "等腰三角形不一定是銳角三角形，也可能是直角或鈍角。",
    "正三角形不是與等腰三角形完全無關；依「至少兩邊相等」定義，正三角形是特殊等腰三角形。",
    "只知道兩邊長相等，不能決定頂角確切度數。",
    "圖上看起來對稱但未給等邊或等角條件時，不可自行判等腰。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "先按邊檢查相等邊數。",
      "check": "三邊全等、恰兩邊等或三邊互異。"
    },
    {
      "step": 2,
      "instruction": "再按角找最大內角。",
      "check": "最大角決定銳角、直角或鈍角類型。"
    },
    {
      "step": 3,
      "instruction": "有等腰條件時標出底邊與底角。",
      "check": "等長兩邊夾角是頂角，另一邊是底邊。"
    },
    {
      "step": 4,
      "instruction": "用內角和與相等角求未知量。",
      "check": "最後同時寫出需要的邊分類和角分類。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "邊長 5、5、8 的三角形按邊如何分類？",
      "solutionSteps": [
        "有兩邊同為 5。",
        "因此是等腰三角形。"
      ],
      "answer": "等腰三角形。"
    },
    {
      "exampleId": "L2",
      "prompt": "內角 50°、60°、70° 的三角形按角如何分類？",
      "solutionSteps": [
        "三角都小於 90°。",
        "因此為銳角三角形。"
      ],
      "answer": "銳角三角形。"
    },
    {
      "exampleId": "L3",
      "prompt": "等腰三角形頂角 40°，每個底角為何？",
      "solutionSteps": [
        "兩底角相等，總和為 180°-40°=140°。",
        "每個底角 140°÷2=70°。"
      ],
      "answer": "70°。"
    },
    {
      "exampleId": "L4",
      "prompt": "三角形三邊相等，請同時按邊與按角分類。",
      "solutionSteps": [
        "三邊相等是正三角形。",
        "每角 60°，三角皆銳角。"
      ],
      "answer": "正三角形，也是銳角三角形。"
    }
  ],
  "levelConnections": {
    "basic": "依明確邊長或角度分類。",
    "standard": "同時做邊分類與角分類。",
    "advanced": "利用等腰底角或正三角形 60° 求未知角。",
    "literacy": "結構支架與標誌常用等腰或正三角形，文字規格可決定對稱與角度。"
  },
  "commonMistakes": [
    {
      "mistake": "看到兩角相等卻說是不等邊三角形。",
      "why": "忘記等角對等邊。",
      "correction": "兩角相等表示其對邊相等。"
    },
    {
      "mistake": "認為等腰一定有三邊相等。",
      "why": "把等腰與正三角形混同。",
      "correction": "等腰只要求至少兩邊相等。"
    },
    {
      "mistake": "用最小角判斷按角分類。",
      "why": "忽略最大角最能決定類型。",
      "correction": "找最大內角與 90° 比較。"
    },
    {
      "mistake": "把含 90° 的三角形稱鈍角三角形。",
      "why": "把大於等於 90° 混在一起。",
      "correction": "等於 90° 是直角三角形。"
    },
    {
      "mistake": "認為正三角形可為直角。",
      "why": "未使用每角 60°。",
      "correction": "正三角形一定是銳角三角形。"
    },
    {
      "mistake": "依未按比例圖形猜等腰。",
      "why": "把外觀當條件。",
      "correction": "只採用等邊記號、數值或文字敘述。"
    }
  ],
  "selfCheckItems": [
    "我是否分開處理按邊與按角分類？",
    "我是否用最大內角判斷角分類？",
    "等腰三角形的底角是否正確找出？",
    "正三角形每角是否為 60°？"
  ],
  "conciseSummary": [
    "按邊可分不等邊、等腰與正三角形。",
    "按角可分銳角、直角與鈍角三角形。",
    "等腰三角形兩底角相等。",
    "正三角形每角 60°。"
  ],
  "connections": {
    "previous": "上一技能提供三角形內角和。",
    "next": [
      "下一技能比較四邊形的邊、角與平行關係。"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "檢查按邊與按角兩套分類不互相取代；等腰頂角 40° 的底角重算為 70°，正三角形每角 60°，並明示不依圖形外觀判定。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "26751fd84c780b35600d7e54604e3c01fb9e6a51a5c2446cb74c7c514daa314c"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s005-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "邊長為 7、7、10 的三角形按邊分類為何？",
    "givenConditions": [
      "三邊長 7、7、10。"
    ],
    "target": "依邊長分類三角形",
    "choices": [
      "等腰三角形",
      "不等邊三角形",
      "正三角形",
      "直角三角形"
    ],
    "answerIndex": 0,
    "independentSolution": "7、7 相等，第三邊 10 不同，屬等腰。",
    "explanation": "按邊分類只看相等邊的數量。",
    "steps": [
      "比較三邊。",
      "兩邊相等。"
    ],
    "optionAnalysis": [
      {
        "choice": "等腰三角形",
        "truth": true,
        "reason": "有兩邊同為 7，所以是等腰三角形。"
      },
      {
        "choice": "不等邊三角形",
        "truth": false,
        "reason": "有兩邊相等，不是不等邊。"
      },
      {
        "choice": "正三角形",
        "truth": false,
        "reason": "三邊並非全部相等。"
      },
      {
        "choice": "直角三角形",
        "truth": false,
        "reason": "題目只給邊長相等關係，且本題問按邊分類。"
      }
    ],
    "misconceptionTarget": "看到三個數就誤判不等邊。",
    "prerequisiteCheck": "能比較邊長。",
    "estimatedTimeSec": 90,
    "unitCheck": "三邊使用同一長度單位，分類不受單位省略影響。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "單一相等關係辨認。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "1b5add4b7e00907eceecde752e10dc3f2adce0b6aae40d0c7b2225f2308567a6"
  },
  {
    "questionId": "u08-s005-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "三內角為 40°、60°、80° 的三角形按角分類為何？",
    "givenConditions": [
      "內角 40°、60°、80°。"
    ],
    "target": "依內角分類三角形",
    "choices": [
      "直角三角形",
      "鈍角三角形",
      "銳角三角形",
      "正三角形"
    ],
    "answerIndex": 2,
    "independentSolution": "最大內角小於 90°，故三角皆銳。",
    "explanation": "按角分類看最大角 80° 仍小於 90°。",
    "steps": [
      "找最大角 80°。",
      "80<90。"
    ],
    "optionAnalysis": [
      {
        "choice": "直角三角形",
        "truth": false,
        "reason": "沒有任何一角等於 90°。"
      },
      {
        "choice": "鈍角三角形",
        "truth": false,
        "reason": "沒有任何一角大於 90°。"
      },
      {
        "choice": "銳角三角形",
        "truth": true,
        "reason": "三個內角都小於 90°，所以是銳角三角形。"
      },
      {
        "choice": "正三角形",
        "truth": false,
        "reason": "三角不全相等，且正三角形是按邊名稱。"
      }
    ],
    "misconceptionTarget": "把最大角接近 90° 誤當直角。",
    "prerequisiteCheck": "能辨認銳角範圍。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位均為 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "基礎角分類。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "8f27b8551bf64a04a8559b9d283590d1dcba738f6f75d33a9f6cb35a424c1a69"
  },
  {
    "questionId": "u08-s005-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "正三角形每一個內角是多少？",
    "givenConditions": [
      "三角形為正三角形。"
    ],
    "target": "求正三角形單一內角",
    "choices": [
      "45°",
      "60°",
      "90°",
      "120°"
    ],
    "answerIndex": 1,
    "independentSolution": "每角 60°。",
    "explanation": "三邊相等推出三角相等。",
    "steps": [
      "三角和 180°。",
      "平均分成 3 角。"
    ],
    "optionAnalysis": [
      {
        "choice": "45°",
        "truth": false,
        "reason": "三個 45° 總和只有 135°。"
      },
      {
        "choice": "60°",
        "truth": true,
        "reason": "正三角形三角相等，180°÷3=60°。"
      },
      {
        "choice": "90°",
        "truth": false,
        "reason": "三個直角無法構成三角形。"
      },
      {
        "choice": "120°",
        "truth": false,
        "reason": "三個 120° 總和 360°。"
      }
    ],
    "misconceptionTarget": "把一周角 360° 平均分。",
    "prerequisiteCheck": "能使用三角形內角和。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接平均分配。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "57fc8f643458f6aca1464901f15d545be5f4cc8ea15c9e09c1b4622df9d00845"
  },
  {
    "questionId": "u08-s005-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個三角形有一個內角為 90°，按角分類為何？",
    "givenConditions": [
      "一個內角恰為 90°。"
    ],
    "target": "由單一內角判定角分類",
    "choices": [
      "銳角三角形",
      "鈍角三角形",
      "等腰三角形",
      "直角三角形"
    ],
    "answerIndex": 3,
    "independentSolution": "一個 90° 角已足以分類為直角三角形。",
    "explanation": "按角分類由最大角與 90° 比較。",
    "steps": [
      "辨認 90° 為直角。",
      "套用直角三角形定義。"
    ],
    "optionAnalysis": [
      {
        "choice": "銳角三角形",
        "truth": false,
        "reason": "銳角三角形三角都小於 90°。"
      },
      {
        "choice": "鈍角三角形",
        "truth": false,
        "reason": "鈍角三角形需有一角大於 90°。"
      },
      {
        "choice": "等腰三角形",
        "truth": false,
        "reason": "等腰是按邊分類，題目未給等邊。"
      },
      {
        "choice": "直角三角形",
        "truth": true,
        "reason": "有一個直角的三角形就是直角三角形。"
      }
    ],
    "misconceptionTarget": "把按邊與按角分類混在一起。",
    "prerequisiteCheck": "能辨認直角。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "單一充分條件。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "18ab791b12af9e2e0437402854288d94908d586466d733b6d0eea1003f1e4581"
  },
  {
    "questionId": "u08-s005-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "等腰三角形頂角為 32°，每個底角為多少？",
    "givenConditions": [
      "等腰三角形。",
      "頂角 32°。"
    ],
    "target": "由等腰頂角求底角",
    "choices": [
      "32°",
      "74°",
      "64°",
      "148°"
    ],
    "answerIndex": 1,
    "independentSolution": "底角各 74°，驗算 32+74+74=180。",
    "explanation": "等腰底角相等。",
    "steps": [
      "求剩餘 148°。",
      "除以 2 得 74°。"
    ],
    "optionAnalysis": [
      {
        "choice": "32°",
        "truth": false,
        "reason": "等腰只保證兩底角相等，不保證三角相等。"
      },
      {
        "choice": "74°",
        "truth": true,
        "reason": "兩底角和 180−32=148°，每個 74°。"
      },
      {
        "choice": "64°",
        "truth": false,
        "reason": "這是頂角的兩倍。"
      },
      {
        "choice": "148°",
        "truth": false,
        "reason": "這是兩底角總和。"
      }
    ],
    "misconceptionTarget": "把頂角當底角或忘記除以 2。",
    "prerequisiteCheck": "能使用內角和與等腰底角性質。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位一致。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "兩步標準運算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "d8c2ffa866c04119b921fa2c4ee643acfe09e83a5a4f1194797a20ae3a1fd9d0"
  },
  {
    "questionId": "u08-s005-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "三角形 ABC 中 AB=AC，且 ∠B=68°。∠A 為多少？",
    "givenConditions": [
      "AB=AC。",
      "∠B=68°。"
    ],
    "target": "由等邊條件求頂角",
    "choices": [
      "44°",
      "68°",
      "56°",
      "112°"
    ],
    "answerIndex": 0,
    "independentSolution": "頂角 A 為 44°。",
    "explanation": "先由等邊對等角，再用內角和。",
    "steps": [
      "∠C=68°。",
      "∠A=180−68−68=44°。"
    ],
    "optionAnalysis": [
      {
        "choice": "44°",
        "truth": true,
        "reason": "AB=AC 表示底角 B、C 相等，∠C=68°，所以 ∠A=180−136=44°。"
      },
      {
        "choice": "68°",
        "truth": false,
        "reason": "∠B、∠C 相等，不是 ∠A。"
      },
      {
        "choice": "56°",
        "truth": false,
        "reason": "68+68+56=192。"
      },
      {
        "choice": "112°",
        "truth": false,
        "reason": "這是 180−68，漏掉另一底角。"
      }
    ],
    "misconceptionTarget": "弄錯等長邊所對的底角。",
    "prerequisiteCheck": "能讀三角形頂點與邊的對應。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需要辨認對邊關係再運算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "6e2343911b9de95a5ab43f203da4c09b56176b953ea1ebe8c2cee2aa349db6e6"
  },
  {
    "questionId": "u08-s005-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個等腰三角形有一個內角為 100°。下列何者一定正確？",
    "givenConditions": [
      "等腰三角形。",
      "有一角 100°。"
    ],
    "target": "判定等腰三角形已知鈍角的位置",
    "choices": [
      "100° 是底角，另一底角也 100°",
      "三角形是直角三角形",
      "100° 是頂角，另外兩角各 40°",
      "三角形三角皆為 100°"
    ],
    "answerIndex": 2,
    "independentSolution": "唯一可行角組為 100°、40°、40°。",
    "explanation": "利用等腰底角相等排除位置。",
    "steps": [
      "假設 100° 為底角會超過 180°。",
      "因此為頂角。",
      "底角各 40°。"
    ],
    "optionAnalysis": [
      {
        "choice": "100° 是底角，另一底角也 100°",
        "truth": false,
        "reason": "兩底角和已超過 180°。"
      },
      {
        "choice": "三角形是直角三角形",
        "truth": false,
        "reason": "沒有 90°。"
      },
      {
        "choice": "100° 是頂角，另外兩角各 40°",
        "truth": true,
        "reason": "若 100° 為底角，另一底角也 100°，不可能；所以它是頂角，底角各 (180−100)/2=40°。"
      },
      {
        "choice": "三角形三角皆為 100°",
        "truth": false,
        "reason": "總和不可能為 300°。"
      }
    ],
    "misconceptionTarget": "不檢查角度和就把 100° 當底角。",
    "prerequisiteCheck": "能使用等腰底角相等與內角和。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位一致。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需用反證判定角的位置。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "d741c165b8506c8561009dc5678a62a068489c3701878e790f736c8ced28b22d"
  },
  {
    "questionId": "u08-s005-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "某三角形同時是等腰三角形與直角三角形。其三內角為何？",
    "givenConditions": [
      "三角形等腰。",
      "三角形有一個直角。"
    ],
    "target": "整合按邊與按角分類",
    "choices": [
      "45°、45°、90°",
      "30°、60°、90°",
      "60°、60°、60°",
      "40°、50°、90°"
    ],
    "answerIndex": 0,
    "independentSolution": "角組 45°、45°、90° 同時滿足等腰與直角。",
    "explanation": "結合兩種分類條件。",
    "steps": [
      "扣除直角後剩 90°。",
      "兩相等角各 45°。"
    ],
    "optionAnalysis": [
      {
        "choice": "45°、45°、90°",
        "truth": true,
        "reason": "直角占 90°，剩餘兩角和 90°；等腰且可行的相等角為兩銳角，各 45°。"
      },
      {
        "choice": "30°、60°、90°",
        "truth": false,
        "reason": "這是直角三角形但不是等腰。"
      },
      {
        "choice": "60°、60°、60°",
        "truth": false,
        "reason": "這是正三角形，不是直角。"
      },
      {
        "choice": "40°、50°、90°",
        "truth": false,
        "reason": "沒有兩角相等。"
      }
    ],
    "misconceptionTarget": "以為等腰直角三角形可有兩個直角。",
    "prerequisiteCheck": "能使用內角和與等腰性質。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需交叉兩套分類並排除不可能位置。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "4f3c4528b5cb351615fbe785ea20a6df8a83bf12320dbdbc7eb628057eabce21"
  },
  {
    "questionId": "u08-s005-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "已知某三角形兩邊相等，但沒有提供任何角度。下列何者一定成立？",
    "givenConditions": [
      "只知兩邊相等。",
      "未給角度或第三邊。"
    ],
    "target": "判斷等腰條件能保證的性質",
    "choices": [
      "一定是銳角三角形",
      "頂角一定為 60°",
      "三邊一定相等",
      "兩個底角相等"
    ],
    "answerIndex": 3,
    "independentSolution": "唯一必然結論是底角相等。",
    "explanation": "邊分類不能唯一決定角分類。",
    "steps": [
      "由兩邊相等判等腰。",
      "套用等腰底角相等。"
    ],
    "optionAnalysis": [
      {
        "choice": "一定是銳角三角形",
        "truth": false,
        "reason": "等腰三角形可為銳角、直角或鈍角。"
      },
      {
        "choice": "頂角一定為 60°",
        "truth": false,
        "reason": "只有正三角形每角 60°。"
      },
      {
        "choice": "三邊一定相等",
        "truth": false,
        "reason": "兩邊相等不必第三邊也相等。"
      },
      {
        "choice": "兩個底角相等",
        "truth": true,
        "reason": "等腰三角形的基本性質是兩個底角相等。"
      }
    ],
    "misconceptionTarget": "由等腰過度推論正三角形或銳角。",
    "prerequisiteCheck": "能理解必要性質與資訊不足。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題無數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需區分必然與可能，屬進階判斷。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "fc9446bab696359ed05000bc90bdc5f29b9fcedcaee21acd6312dc03462be650"
  },
  {
    "questionId": "u08-s005-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "帳篷側面支架形成三角形，兩根斜桿等長，底邊水平。若頂角量得 50°，兩個底角應各是多少才能保持對稱？",
    "givenConditions": [
      "兩根斜桿等長。",
      "頂角 50°。"
    ],
    "target": "由對稱帳篷支架求底角",
    "choices": [
      "50°",
      "65°",
      "80°",
      "130°"
    ],
    "answerIndex": 1,
    "independentSolution": "兩底角各 65°，總和檢查為 180°。",
    "explanation": "對稱支架的等腰條件直接決定底角。",
    "steps": [
      "剩餘角和 130°。",
      "平均為 65°。"
    ],
    "optionAnalysis": [
      {
        "choice": "50°",
        "truth": false,
        "reason": "兩斜桿等長只保證底角相等，不是三角皆等。"
      },
      {
        "choice": "65°",
        "truth": true,
        "reason": "等長斜桿形成等腰三角形，底角相等；(180−50)÷2=65°。"
      },
      {
        "choice": "80°",
        "truth": false,
        "reason": "50+80+80=210。"
      },
      {
        "choice": "130°",
        "truth": false,
        "reason": "這是兩底角總和。"
      }
    ],
    "misconceptionTarget": "把外觀對稱當成三邊等長。",
    "prerequisiteCheck": "能使用等腰三角形性質。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "實體支架的等長規格是角度計算必要條件。",
    "literacyContextNecessity": "帳篷的兩斜桿等長與頂角量測共同決定底角；刪除任一條件都不能得到 65°。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "720df2a17bf2e86bdea60dbb64f50ea0dfd29b6c1e4a5cc7fa380b998e44f66e"
  },
  {
    "questionId": "u08-s005-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "交通標誌規格要求三邊等長。下列哪一項可作為每個內角的驗收標準？",
    "givenConditions": [
      "標誌截面為三角形。",
      "三邊要求等長。"
    ],
    "target": "由標誌邊長規格決定角度標準",
    "choices": [
      "45°",
      "90°",
      "120°",
      "60°"
    ],
    "answerIndex": 3,
    "independentSolution": "每角 60° 是三邊等長三角形的必要性質。",
    "explanation": "邊長規格推出角度驗收值。",
    "steps": [
      "辨認正三角形。",
      "180÷3=60。"
    ],
    "optionAnalysis": [
      {
        "choice": "45°",
        "truth": false,
        "reason": "三個 45° 無法閉合成三角形。"
      },
      {
        "choice": "90°",
        "truth": false,
        "reason": "三個直角總和過大。"
      },
      {
        "choice": "120°",
        "truth": false,
        "reason": "三個 120° 為 360°。"
      },
      {
        "choice": "60°",
        "truth": true,
        "reason": "三邊等長表示正三角形，三角相等且總和 180°，每角 60°。"
      }
    ],
    "misconceptionTarget": "只以外觀估計角度或誤用四邊形角度。",
    "prerequisiteCheck": "能使用正三角形性質。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度標準以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "驗收情境要求由邊規格推出角度標準。",
    "literacyContextNecessity": "標誌製作同時需檢查邊長與角度；三邊等長不是裝飾資訊，而是推得 60° 的核心。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "3018ece6db6fc761f6f5a45dd5a9f3eaf4c1f452b627d6ce75cf5f719e39cb44"
  },
  {
    "questionId": "u08-s005-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "三角形木框的三個角量得 88°、46°、46°。下列描述最完整的是何者？",
    "givenConditions": [
      "三內角 88°、46°、46°。"
    ],
    "target": "依實測角度做雙重分類",
    "choices": [
      "不等邊銳角三角形",
      "等腰直角三角形",
      "等腰銳角三角形",
      "正三角形"
    ],
    "answerIndex": 2,
    "independentSolution": "木框同時是等腰與銳角三角形。",
    "explanation": "同時做按邊與按角分類。",
    "steps": [
      "46°=46° 推出兩對邊相等。",
      "88°<90°，三角皆銳。"
    ],
    "optionAnalysis": [
      {
        "choice": "不等邊銳角三角形",
        "truth": false,
        "reason": "兩角相等表示其對邊相等。"
      },
      {
        "choice": "等腰直角三角形",
        "truth": false,
        "reason": "最大角 88°，不是 90°。"
      },
      {
        "choice": "等腰銳角三角形",
        "truth": true,
        "reason": "兩角 46° 相等，所以為等腰；最大角 88° 小於 90°，所以為銳角三角形。"
      },
      {
        "choice": "正三角形",
        "truth": false,
        "reason": "三角不全為 60°。"
      }
    ],
    "misconceptionTarget": "只做一套分類或把 88° 當直角。",
    "prerequisiteCheck": "能使用等角對等邊與角分類。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位一致。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "實測資料要求同時給出結構對稱性與角類型。",
    "literacyContextNecessity": "木框驗收關心是否等腰及是否含直角，三個量測角必須同時用於雙重分類。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "4a122fe678775f2c4483e6875eec6410aa48f75fb5290322e11cefd1505ba451"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s005-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "一個三角形的三邊長為 7 公分、7 公分、10 公分，三個內角中最大角為 92°。請分別按邊與按角分類，並說明理由。",
    "requiredWork": [
      "依邊長相等情形分類。",
      "依最大角度分類。",
      "各寫出一項理由。"
    ],
    "standardSolution": [
      "有兩邊同為7公分，所以按邊是等腰三角形。",
      "最大角92°大於90°，所以按角是鈍角三角形。",
      "完整分類為等腰鈍角三角形。"
    ],
    "alternativeMethods": [
      "可先指出10公分所對角最大且為92°，再完成兩套分類。"
    ],
    "reasoningSteps": [
      "比較三邊是否相等。",
      "比較最大角與90°。",
      "合併兩套分類名稱。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確判為等腰鈍角三角形，並分別以兩等邊與92°說明。"
      },
      {
        "score": 2,
        "criteria": "兩套分類正確但一項理由缺漏；或只完整完成其中一套並正確寫另一名稱。"
      },
      {
        "score": 1,
        "criteria": "至少正確判出等腰或鈍角其中一項且理由有效。"
      },
      {
        "score": 0,
        "criteria": "把按邊與按角混為同一套，或兩項皆錯。"
      }
    ],
    "partialCreditRules": [
      "「等腰三角形且為鈍角三角形」與「等腰鈍角三角形」同義。"
    ],
    "followThroughPolicy": "若將92°抄成其他大於90°的數但分類仍鈍角，可給分類分；若變成小於90°則不給角分類分。",
    "unitAndNotationRules": "邊長附公分，分類名稱不需單位；角度附°。",
    "answerOnlyPolicy": "只答「等腰鈍角」無理由最高2分。",
    "commonErrors": [
      "因有一邊10就判不等邊。",
      "只看另外兩角未知就說不能按角分類。"
    ],
    "independentReview": {
      "derivedResult": "等腰鈍角三角形。",
      "ambiguityAudit": "題目直接給最大角92°，不需知道另外兩角；兩套分類互不排斥。",
      "reviewNote": "獨立檢查兩邊相等與最大角大於90°，分類條件均充分。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "triangle-angle-sum"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "0eec9a19740775429e85152b5696253f78553bc94f31cd37202da9bedeae24d7"
  },
  {
    "questionId": "u08-s005-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-basic-classification",
    "lockedSkillTitle": "三角形基本分類",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "三角形的三邊長為 5、x、12（單位相同），且 x 為整數。若此三角形是等腰三角形，求所有可能的 x，並用三角形兩邊和大於第三邊檢查。",
    "requiredWork": [
      "由等腰條件列出x可能等於5或12。",
      "逐一檢查三角形不等式。",
      "列出所有有效答案。"
    ],
    "standardSolution": [
      "等腰要求 x=5 或 x=12。",
      "若x=5，邊長5、5、12，但5+5=10不大於12，不能成三角形。",
      "若x=12，邊長5、12、12，且5+12>12、12+12>5，成立。",
      "所以唯一可能是x=12。"
    ],
    "alternativeMethods": [
      "可用最短兩邊和檢查：x=5時10≤12失敗；x=12時5+12>12通過。"
    ],
    "reasoningSteps": [
      "找出使兩邊相等的候選。",
      "檢查每個候選的最短兩邊和。",
      "排除退化或不成立情況。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整列出x=5、12兩候選，正確排除5並得到唯一x=12。"
      },
      {
        "score": 2,
        "criteria": "得到x=12且有有效不等式檢查，但未明列另一候選；或候選完整但一個檢查敘述不精確。"
      },
      {
        "score": 1,
        "criteria": "只由等腰列出x=5或12，或只答12無充分檢查。"
      },
      {
        "score": 0,
        "criteria": "接受x=5且未檢查兩邊和，或給出其他無等邊關係的x。"
      }
    ],
    "partialCreditRules": [
      "三角形不等式只檢查最短兩邊和已足夠，但須明確指出原因。"
    ],
    "followThroughPolicy": "若不等式算術抄錯但結論與候選推理清楚，最多2分。",
    "unitAndNotationRules": "x為整數但無長度單位名稱；比較式需使用嚴格大於。",
    "answerOnlyPolicy": "只寫x=12最高1分，因題目要求列候選與檢查。",
    "commonErrors": [
      "忽略5+5≤12。",
      "誤以為x可為任何5到12間整數。"
    ],
    "independentReview": {
      "derivedResult": "x=12。",
      "ambiguityAudit": "等腰只能由x等於既有邊5或12產生；兩個候選有限且可逐一驗證。",
      "reviewNote": "獨立檢查5、12、12滿足全部三角形不等式，而5、5、12失敗。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "triangle-angle-sum"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "e744e4a4c848fbf29f662ace0ccf90ec12d91fa1213fe9be881738ecbb8e8e05"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s005-v001",
    "unitId": "u08",
    "skillId": "triangle-basic-classification",
    "contentSha256": "1b5add4b7e00907eceecde752e10dc3f2adce0b6aae40d0c7b2225f2308567a6",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "依邊分類定義，恰兩邊相等。",
    "derivedAnswer": "等腰三角形",
    "storedAnswer": "等腰三角形",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「等腰三角形」符合目標「依邊長分類三角形」。其餘選項分別違反：有兩邊相等，不是不等邊。；三邊並非全部相等。；題目只給邊長相等關係，且本題問按邊分類。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形基本分類」講義已定義範圍；本題特別使用：三邊長 7、7、10。",
      "unitConflict": "三邊使用同一長度單位，分類不受單位省略影響。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「依邊長分類三角形」重新讀題，並針對誤解「看到三個數就誤判不等邊。」排除另一解讀。"
    },
    "difficultyReason": "單一相等關係辨認。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能比較邊長。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「依邊長分類三角形」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：依邊分類定義，恰兩邊相等。 正確選項為「等腰三角形」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "eabd04addb86b1c87d7d61360d99f38cb2599b35a17856a7927e3cee42fa3d97"
  },
  {
    "questionId": "u08-s005-v002",
    "unitId": "u08",
    "skillId": "triangle-basic-classification",
    "contentSha256": "8f27b8551bf64a04a8559b9d283590d1dcba738f6f75d33a9f6cb35a424c1a69",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "逐角檢查皆在 0° 到 90° 之間。",
    "derivedAnswer": "銳角三角形",
    "storedAnswer": "銳角三角形",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「銳角三角形」符合目標「依內角分類三角形」。其餘選項分別違反：沒有任何一角等於 90°。；沒有任何一角大於 90°。；三角不全相等，且正三角形是按邊名稱。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形基本分類」講義已定義範圍；本題特別使用：內角 40°、60°、80°。",
      "unitConflict": "角度單位均為 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「依內角分類三角形」重新讀題，並針對誤解「把最大角接近 90° 誤當直角。」排除另一解讀。"
    },
    "difficultyReason": "基礎角分類。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認銳角範圍。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「依內角分類三角形」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：逐角檢查皆在 0° 到 90° 之間。 正確選項為「銳角三角形」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "b9a25105003feb9bc38c70e754d4393b1af16df268c7d1228409392427614601"
  },
  {
    "questionId": "u08-s005-v003",
    "unitId": "u08",
    "skillId": "triangle-basic-classification",
    "contentSha256": "57fc8f643458f6aca1464901f15d545be5f4cc8ea15c9e09c1b4622df9d00845",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "180÷3=60，驗算三角皆銳角。",
    "derivedAnswer": "60°",
    "storedAnswer": "60°",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「60°」符合目標「求正三角形單一內角」。其餘選項分別違反：三個 45° 總和只有 135°。；三個直角無法構成三角形。；三個 120° 總和 360°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形基本分類」講義已定義範圍；本題特別使用：三角形為正三角形。",
      "unitConflict": "角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求正三角形單一內角」重新讀題，並針對誤解「把一周角 360° 平均分。」排除另一解讀。"
    },
    "difficultyReason": "直接平均分配。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用三角形內角和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求正三角形單一內角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：180÷3=60，驗算三角皆銳角。 正確選項為「60°」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "75771611f3b5c3a70b5a1a4b4cb3e6540739983d22a37b60d506181aa2d34c59"
  },
  {
    "questionId": "u08-s005-v004",
    "unitId": "u08",
    "skillId": "triangle-basic-classification",
    "contentSha256": "18ab791b12af9e2e0437402854288d94908d586466d733b6d0eea1003f1e4581",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "三角形不可能另有第二個 90°，但不影響分類。",
    "derivedAnswer": "直角三角形",
    "storedAnswer": "直角三角形",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「直角三角形」符合目標「由單一內角判定角分類」。其餘選項分別違反：銳角三角形三角都小於 90°。；鈍角三角形需有一角大於 90°。；等腰是按邊分類，題目未給等邊。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形基本分類」講義已定義範圍；本題特別使用：一個內角恰為 90°。",
      "unitConflict": "角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由單一內角判定角分類」重新讀題，並針對誤解「把按邊與按角分類混在一起。」排除另一解讀。"
    },
    "difficultyReason": "單一充分條件。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認直角。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由單一內角判定角分類」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：三角形不可能另有第二個 90°，但不影響分類。 正確選項為「直角三角形」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "45d0b930f4b5845cb796b6c7469a48bcacac0028d48c86262e3cd2b2b50429bc"
  },
  {
    "questionId": "u08-s005-v005",
    "unitId": "u08",
    "skillId": "triangle-basic-classification",
    "contentSha256": "d8c2ffa866c04119b921fa2c4ee643acfe09e83a5a4f1194797a20ae3a1fd9d0",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "將剩餘角度平均分成兩個底角。",
    "derivedAnswer": "74°",
    "storedAnswer": "74°",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「74°」符合目標「由等腰頂角求底角」。其餘選項分別違反：等腰只保證兩底角相等，不保證三角相等。；這是頂角的兩倍。；這是兩底角總和。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形基本分類」講義已定義範圍；本題特別使用：等腰三角形。",
      "unitConflict": "角度單位一致。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由等腰頂角求底角」重新讀題，並針對誤解「把頂角當底角或忘記除以 2。」排除另一解讀。"
    },
    "difficultyReason": "兩步標準運算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用內角和與等腰底角性質。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由等腰頂角求底角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：將剩餘角度平均分成兩個底角。 正確選項為「74°」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "960db73e7b4e03078f5fddf6412db5d9e44cf3f792cefd1911083e14d0b4dfbf"
  },
  {
    "questionId": "u08-s005-v006",
    "unitId": "u08",
    "skillId": "triangle-basic-classification",
    "contentSha256": "6e2343911b9de95a5ab43f203da4c09b56176b953ea1ebe8c2cee2aa349db6e6",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立確認等長邊 AB、AC 所對角分別 C、B。",
    "derivedAnswer": "44°",
    "storedAnswer": "44°",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「44°」符合目標「由等邊條件求頂角」。其餘選項分別違反：∠B、∠C 相等，不是 ∠A。；68+68+56=192。；這是 180−68，漏掉另一底角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形基本分類」講義已定義範圍；本題特別使用：AB=AC。",
      "unitConflict": "角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由等邊條件求頂角」重新讀題，並針對誤解「弄錯等長邊所對的底角。」排除另一解讀。"
    },
    "difficultyReason": "需要辨認對邊關係再運算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能讀三角形頂點與邊的對應。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由等邊條件求頂角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立確認等長邊 AB、AC 所對角分別 C、B。 正確選項為「44°」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "86333cc1ce33909df6290bb3090369ea5d016f97fce49681390f149657116c8b"
  },
  {
    "questionId": "u08-s005-v007",
    "unitId": "u08",
    "skillId": "triangle-basic-classification",
    "contentSha256": "d741c165b8506c8561009dc5678a62a068489c3701878e790f736c8ced28b22d",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "重查等腰中相等兩角不可能包含 100°，故 100° 必為不等的頂角。",
    "derivedAnswer": "100° 是頂角，另外兩角各 40°",
    "storedAnswer": "100° 是頂角，另外兩角各 40°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「100° 是頂角，另外兩角各 40°」符合目標「判定等腰三角形已知鈍角的位置」。其餘選項分別違反：兩底角和已超過 180°。；沒有 90°。；總和不可能為 300°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形基本分類」講義已定義範圍；本題特別使用：等腰三角形。",
      "unitConflict": "角度單位一致。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判定等腰三角形已知鈍角的位置」重新讀題，並針對誤解「不檢查角度和就把 100° 當底角。」排除另一解讀。"
    },
    "difficultyReason": "需用反證判定角的位置。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用等腰底角相等與內角和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判定等腰三角形已知鈍角的位置」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：重查等腰中相等兩角不可能包含 100°，故 100° 必為不等的頂角。 正確選項為「100° 是頂角，另外兩角各 40°」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "779394a7725983508fd9de17914a645ebd11b4cb5bff2a745584cd5d0f4efbcb"
  },
  {
    "questionId": "u08-s005-v008",
    "unitId": "u08",
    "skillId": "triangle-basic-classification",
    "contentSha256": "4f3c4528b5cb351615fbe785ea20a6df8a83bf12320dbdbc7eb628057eabce21",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "若直角為相等角之一會有兩個直角而不可能，因此相等者是兩銳角。",
    "derivedAnswer": "45°、45°、90°",
    "storedAnswer": "45°、45°、90°",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「45°、45°、90°」符合目標「整合按邊與按角分類」。其餘選項分別違反：這是直角三角形但不是等腰。；這是正三角形，不是直角。；沒有兩角相等。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形基本分類」講義已定義範圍；本題特別使用：三角形等腰。",
      "unitConflict": "角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「整合按邊與按角分類」重新讀題，並針對誤解「以為等腰直角三角形可有兩個直角。」排除另一解讀。"
    },
    "difficultyReason": "需交叉兩套分類並排除不可能位置。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用內角和與等腰性質。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「整合按邊與按角分類」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：若直角為相等角之一會有兩個直角而不可能，因此相等者是兩銳角。 正確選項為「45°、45°、90°」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "3df51102014a5d716d36167b650b29c96d03d01ddd9c6b72f31accd3760670a5"
  },
  {
    "questionId": "u08-s005-v009",
    "unitId": "u08",
    "skillId": "triangle-basic-classification",
    "contentSha256": "fc9446bab696359ed05000bc90bdc5f29b9fcedcaee21acd6312dc03462be650",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "可舉不同頂角的等腰三角形反駁其他選項。",
    "derivedAnswer": "兩個底角相等",
    "storedAnswer": "兩個底角相等",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「兩個底角相等」符合目標「判斷等腰條件能保證的性質」。其餘選項分別違反：等腰三角形可為銳角、直角或鈍角。；只有正三角形每角 60°。；兩邊相等不必第三邊也相等。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形基本分類」講義已定義範圍；本題特別使用：只知兩邊相等。",
      "unitConflict": "本題無數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判斷等腰條件能保證的性質」重新讀題，並針對誤解「由等腰過度推論正三角形或銳角。」排除另一解讀。"
    },
    "difficultyReason": "需區分必然與可能，屬進階判斷。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解必要性質與資訊不足。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷等腰條件能保證的性質」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：可舉不同頂角的等腰三角形反駁其他選項。 正確選項為「兩個底角相等」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "8ca237e5410133ae6512634090fe7fec400b0a458d129b9358fbc32dde0ff64e"
  },
  {
    "questionId": "u08-s005-v010",
    "unitId": "u08",
    "skillId": "triangle-basic-classification",
    "contentSha256": "720df2a17bf2e86bdea60dbb64f50ea0dfd29b6c1e4a5cc7fa380b998e44f66e",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由兩斜桿等長識別等腰，再計算。",
    "derivedAnswer": "65°",
    "storedAnswer": "65°",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「65°」符合目標「由對稱帳篷支架求底角」。其餘選項分別違反：兩斜桿等長只保證底角相等，不是三角皆等。；50+80+80=210。；這是兩底角總和。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形基本分類」講義已定義範圍；本題特別使用：兩根斜桿等長。",
      "unitConflict": "角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由對稱帳篷支架求底角」重新讀題，並針對誤解「把外觀對稱當成三邊等長。」排除另一解讀。"
    },
    "difficultyReason": "實體支架的等長規格是角度計算必要條件。",
    "literacyContextNecessity": "帳篷的兩斜桿等長與頂角量測共同決定底角；刪除任一條件都不能得到 65°。",
    "prerequisiteCheck": "能使用等腰三角形性質。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由對稱帳篷支架求底角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由兩斜桿等長識別等腰，再計算。 正確選項為「65°」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "9ea1ac7ab6e467a780445d0f73a1811a4ed4329940261240e1d7af7ac92fe3fb"
  },
  {
    "questionId": "u08-s005-v011",
    "unitId": "u08",
    "skillId": "triangle-basic-classification",
    "contentSha256": "3018ece6db6fc761f6f5a45dd5a9f3eaf4c1f452b627d6ce75cf5f719e39cb44",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立由等邊對等角與內角和推得 60°。",
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
      "secondCorrectAnswer": "逐一代回題意後，只有「60°」符合目標「由標誌邊長規格決定角度標準」。其餘選項分別違反：三個 45° 無法閉合成三角形。；三個直角總和過大。；三個 120° 為 360°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形基本分類」講義已定義範圍；本題特別使用：標誌截面為三角形。",
      "unitConflict": "角度標準以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由標誌邊長規格決定角度標準」重新讀題，並針對誤解「只以外觀估計角度或誤用四邊形角度。」排除另一解讀。"
    },
    "difficultyReason": "驗收情境要求由邊規格推出角度標準。",
    "literacyContextNecessity": "標誌製作同時需檢查邊長與角度；三邊等長不是裝飾資訊，而是推得 60° 的核心。",
    "prerequisiteCheck": "能使用正三角形性質。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由標誌邊長規格決定角度標準」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立由等邊對等角與內角和推得 60°。 正確選項為「60°」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "1d4fc6ccc129d9f354ae6f55647a69194e51158120b0ea4d171b554f3b8325cf"
  },
  {
    "questionId": "u08-s005-v012",
    "unitId": "u08",
    "skillId": "triangle-basic-classification",
    "contentSha256": "4a122fe678775f2c4483e6875eec6410aa48f75fb5290322e11cefd1505ba451",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "角和 180°，等角對等邊，且最大角未達 90°。",
    "derivedAnswer": "等腰銳角三角形",
    "storedAnswer": "等腰銳角三角形",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「等腰銳角三角形」符合目標「依實測角度做雙重分類」。其餘選項分別違反：兩角相等表示其對邊相等。；最大角 88°，不是 90°。；三角不全為 60°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形基本分類」講義已定義範圍；本題特別使用：三內角 88°、46°、46°。",
      "unitConflict": "角度單位一致。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「依實測角度做雙重分類」重新讀題，並針對誤解「只做一套分類或把 88° 當直角。」排除另一解讀。"
    },
    "difficultyReason": "實測資料要求同時給出結構對稱性與角類型。",
    "literacyContextNecessity": "木框驗收關心是否等腰及是否含直角，三個量測角必須同時用於雙重分類。",
    "prerequisiteCheck": "能使用等角對等邊與角分類。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「依實測角度做雙重分類」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：角和 180°，等角對等邊，且最大角未達 90°。 正確選項為「等腰銳角三角形」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "5929ffba09d1fe2d3b911b4f4032d61e01afb545bcb4abc6490dc54a675604fb"
  }
];

export const DRAWING_SPECS = [];

