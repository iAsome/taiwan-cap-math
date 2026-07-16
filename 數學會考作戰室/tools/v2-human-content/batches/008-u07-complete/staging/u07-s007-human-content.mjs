// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s007-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-solution-sets",
  "skillId": "inequality-and-word",
  "title": "不等式與且的語意：同時成立就是交集",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能把「且」翻成兩個條件同時成立。",
    "能求兩個單邊不等式的共同解集。",
    "能辨識無解、單點與區間。",
    "能由情境中的雙重限制建立複合不等式。"
  ],
  "prerequisites": [
    {
      "skillId": "inequality-integer-solutions",
      "requiredLevel": "能判斷端點包含性並列出範圍內整數。"
    }
  ],
  "prerequisiteBridge": {
    "inequality-integer-solutions": "能判斷端點包含性並列出範圍內整數。"
  },
  "glossary": [
    {
      "term": "且",
      "definition": "兩個條件都必須成立。"
    },
    {
      "term": "共同解集",
      "definition": "同時屬於兩個解集的部分。"
    },
    {
      "term": "交集",
      "definition": "兩個集合共有的元素。"
    },
    {
      "term": "雙邊不等式",
      "definition": "用兩個不等號同時限制同一未知數，例如 2<x≤5。"
    }
  ],
  "notation": [
    {
      "symbol": "x>2 且 x≤5",
      "meaning": "同時大於 2 且不超過 5，可寫 2<x≤5。"
    },
    {
      "symbol": "∩",
      "meaning": "集合交集，本單元以「共同部分」理解即可。"
    }
  ],
  "conceptNarrative": [
    "「且」像兩道門，數值必須同時通過兩個條件。",
    "在數線上畫出兩個解集後，只保留重疊部分。",
    "若條件方向相向，常形成有限區間；若彼此分離，可能無解。",
    "兩個含等號條件若只在同一端點相遇，交集可能只有一個數。"
  ],
  "formalDefinitions": [
    {
      "name": "且的解集",
      "statement": "條件 A 且 B 的解集，是 A 的解集與 B 的解集的共同部分。"
    },
    {
      "name": "雙邊寫法",
      "statement": "a<x≤b 同時表示 x>a 與 x≤b。"
    }
  ],
  "formulas": [
    {
      "formula": "x>a 且 x≤b ⇔ a<x≤b",
      "conditions": [
        "a<b 時形成非空區間"
      ],
      "meaning": "合併雙重限制。"
    },
    {
      "formula": "x≥a 且 x≤a ⇔ x=a",
      "conditions": [
        "兩端都包含同一點"
      ],
      "meaning": "交集可退化成單點。"
    }
  ],
  "nonApplicableCases": [
    "「且」不能把兩個解集直接全部合併，那是「或」的概念。",
    "若左端大於右端，不能照樣寫成區間，應判斷是否無解。",
    "雙邊不等式三部分需保持由小到大排列。",
    "解複合不等式時，每個子不等式都需獨立遵守負數變號。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "把語句拆成兩個不等式。",
      "check": "每個條件是否都必要？"
    },
    {
      "step": 2,
      "instruction": "各自求解。",
      "check": "負數乘除是否正確變號？"
    },
    {
      "step": 3,
      "instruction": "在同一數線找共同部分。",
      "check": "只留下重疊區域。"
    },
    {
      "step": 4,
      "instruction": "整理成雙邊不等式或說明無解。",
      "check": "端點包含性是否保留？"
    },
    {
      "step": 5,
      "instruction": "用交集內外的代表值回代兩式。",
      "check": "代表值是否同時通過兩個條件？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "求 x>1 且 x≤4 的共同解。",
      "solutionSteps": [
        "第一條件在 1 右側，第二條件在 4 左側含 4。",
        "重疊為 1<x≤4。"
      ],
      "answer": "1<x≤4。",
      "why": "且要求同一個 x 同時位於一的右側與四的左側，所以只留下兩段重疊區。端點一因嚴格大於而排除，端點四因小於或等於而保留。"
    },
    {
      "exampleId": "L2",
      "prompt": "求 x≤−2 且 x>3 的共同解。",
      "solutionSteps": [
        "第一解集在 −2 左側，第二在 3 右側。",
        "兩者沒有重疊。"
      ],
      "answer": "無解。",
      "why": "負二左側與三右側是分離的兩段數線，沒有任何數能同時落在兩段中。兩個單獨條件雖各自有解，但取交集後仍可能成為空集合。"
    },
    {
      "exampleId": "L3",
      "prompt": "求 x≥5 且 x≤5。",
      "solutionSteps": [
        "兩條件都只共同包含 5。",
        "交集為單點。"
      ],
      "answer": "x=5。",
      "why": "第一段從五向右、第二段從五向左，而且兩者都包含五。除五以外，小數或大數都會違反其中一式，因此交集可以只有單一點。"
    },
    {
      "exampleId": "L4",
      "prompt": "某遊樂設施要求身高至少 120 公分且未滿 150 公分。",
      "solutionSteps": [
        "至少 120 表示 h≥120。",
        "未滿 150 表示 h<150。"
      ],
      "answer": "120≤h<150。",
      "why": "至少包含一百二十，未滿則排除一百五十；兩項規則要同時通過，才能搭乘。雙邊式保留一閉一開的端點，也直接表達可搭乘身高範圍。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 x>1 且 x≤4 寫成 x>1 或 x≤4 的全部。",
      "why": "把且誤解成聯集。",
      "correction": "只取同時成立的 1<x≤4。"
    },
    {
      "mistake": "x≤−2 且 x>3 仍列出兩段。",
      "why": "沒有找共同部分。",
      "correction": "兩段不重疊，答案無解。"
    },
    {
      "mistake": "至少 120 寫 h>120。",
      "why": "漏掉「至少」包含等於。",
      "correction": "應為 h≥120。"
    },
    {
      "mistake": "未滿 150 寫 h≤150。",
      "why": "把「未滿」誤成「不超過」。",
      "correction": "未滿不含 150，寫 h<150。"
    },
    {
      "mistake": "雙邊寫成 4≥x>1 後誤讀方向。",
      "why": "未按小到大排列。",
      "correction": "標準寫成 1<x≤4。"
    },
    {
      "mistake": "兩條件各自成立就選答案，未驗證同一 x 同時成立。",
      "why": "忽略共同性。",
      "correction": "用同一候選值代入兩條件。"
    }
  ],
  "selfCheck": [
    "我是否把每個語意詞翻成正確不等號？",
    "我取得的是重疊而不是全部嗎？",
    "端點是否可能形成單點？",
    "左右界順序是否合理？"
  ],
  "summary": [
    "且代表同時成立，取共同部分。",
    "雙邊不等式可濃縮兩個相向限制。",
    "交集可能是區間、單點或空集合。",
    "端點是否包含由原條件決定。"
  ],
  "connections": {
    "previous": "承接整數解與數線端點判讀。",
    "next": [
      "下一節將練習更多中文範圍敘述與最大最小語意。",
      "應用題常用「至少且至多」建立可行範圍。"
    ]
  },
  "figureReferences": [
    "u07-fig-and-intersection"
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s007-v001",
      "u07-s007-v002",
      "u07-s007-v003",
      "u07-s007-v004",
      "u07-s007-v005",
      "u07-s007-v006",
      "u07-s007-v007",
      "u07-s007-v008",
      "u07-s007-v009",
      "u07-s007-v010",
      "u07-s007-v011",
      "u07-s007-v012"
    ],
    "constructedResponseIds": [
      "u07-s007-cr001",
      "u07-s007-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "以區間、無解、單點與身高限制四種型態檢查「且」的交集語意；圖形的兩層射線與重疊帶均人工核對端點包含性。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "a8a9808a877dc8b0ee509e7f5a179f31e9015cda7c915c7398cfa289814a016d"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s007-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "「x 大於 2 且小於或等於 6」可寫成哪一個雙邊不等式？",
    "givenConditions": "兩條件同時成立。",
    "target": "把「且」語句合併成區間",
    "choices": [
      "2≥x>6",
      "2≤x<6",
      "2<x≤6",
      "2<x<6"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "條件一給 2<x，條件二給 x≤6，把共同的 x 放中間即 2<x≤6。",
      "result": "2<x≤6",
      "answerIndexVerified": 2
    },
    "explanation": "大於二表示 x 位在二的右側且不包含二，可寫二小於 x；小於或等於六表示 x 不超過六且包含六。把同一個 x 放中間，得到二小於 x 且 x 不超過六。",
    "steps": [
      "將大於二翻成 2<x，排除端點二。",
      "將小於或等於六翻成 x≤6，包含端點六。",
      "把共同未知數放中間，合併為 2<x≤6。"
    ],
    "optionAnalysis": [
      {
        "choice": "2≥x>6",
        "truth": false,
        "reason": "方向與順序錯。"
      },
      {
        "choice": "2≤x<6",
        "truth": false,
        "reason": "兩端包含性相反。"
      },
      {
        "choice": "2<x≤6",
        "truth": true,
        "reason": "獨立重算得到「2<x≤6」，此選項與完整解答一致。"
      },
      {
        "choice": "2<x<6",
        "truth": false,
        "reason": "錯排除 6。"
      }
    ],
    "misconceptionTarget": "把兩端的含等號狀態交換，或沒有讓同一個 x 同時滿足兩個條件。",
    "prerequisiteCheck": "需懂四種不等號。",
    "estimatedTimeSec": "50",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "左端排除、右端包含，唯一選項 2。",
    "difficultyReason": "基本語意合併。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "705370a9a893ce40cb26d093923cd9cc2282bff8ae3bacec1169e3272768f312"
  },
  {
    "questionId": "u07-s007-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "figure-supported",
    "figureId": "u07-fig-and-intersection",
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "x≥−1 且 x<3 的共同解集為何？",
    "givenConditions": "兩條件以且連結。",
    "target": "求兩個解集交集",
    "choices": [
      "−1≤x<3",
      "x<−1",
      "x≥3",
      "無解"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "測 −1：兩式皆真；測 2：兩式皆真；測 3：第二式假。共同部分恰是 [−1,3)。",
      "result": "−1≤x<3",
      "answerIndexVerified": 0
    },
    "explanation": "第一個解集由負一向右延伸並包含負一，第二個解集位在三左側且不包含三。且表示兩條件同時成立，所以只保留兩段重疊的負一到三之間，得到負一不超過 x 且 x 小於三。",
    "steps": [
      "表示 x≥−1 的向右範圍，保留實心端點負一。",
      "表示 x<3 的向左範圍，排除端點三。",
      "只取兩範圍重疊處，寫成 −1≤x<3。"
    ],
    "optionAnalysis": [
      {
        "choice": "−1≤x<3",
        "truth": true,
        "reason": "獨立重算得到「−1≤x<3」，此選項與完整解答一致。"
      },
      {
        "choice": "x<−1",
        "truth": false,
        "reason": "只保留第一條件反方向。"
      },
      {
        "choice": "x≥3",
        "truth": false,
        "reason": "只保留第二條件外側。"
      },
      {
        "choice": "無解",
        "truth": false,
        "reason": "兩區間有重疊。"
      }
    ],
    "misconceptionTarget": "把『且』誤當任一條件成立即可，取成兩個解集的聯集而不是交集。",
    "prerequisiteCheck": "需會數線方向。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "−1 包含、3 排除。",
    "difficultyReason": "單純交集。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b5c577b06708eed228986b4674a9ae23d2ecc40780e8b0e1d14f2ef1f962d4ca"
  },
  {
    "questionId": "u07-s007-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "x<0 且 x≥4 的解集為何？",
    "givenConditions": "使用「且」。",
    "target": "辨識互斥條件無解",
    "choices": [
      "x<0",
      "x≥4",
      "0≤x<4",
      "無解"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "若 x<0，必有 x<4，因此不可能 x≥4；故不存在同時滿足者。",
      "result": "無解",
      "answerIndexVerified": 3
    },
    "explanation": "若 x 小於零，就一定在四的左側，不可能同時大於或等於四。兩個單邊解集彼此分離，沒有任何實數能同時通過，因此共同解集是空集合，也就是無解。",
    "steps": [
      "畫出 x<0 在零左側的範圍。",
      "畫出 x≥4 從四向右的範圍。",
      "確認兩段沒有重疊，判定共同解集無解。"
    ],
    "optionAnalysis": [
      {
        "choice": "x<0",
        "truth": false,
        "reason": "只保留第一條。"
      },
      {
        "choice": "x≥4",
        "truth": false,
        "reason": "只保留第二條。"
      },
      {
        "choice": "0≤x<4",
        "truth": false,
        "reason": "此區間兩條都不滿足。"
      },
      {
        "choice": "無解",
        "truth": true,
        "reason": "獨立重算得到「無解」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "分別看到兩個非空解集就認為有答案，沒有檢查同一個 x 必須同時符合。",
    "prerequisiteCheck": "需會比較 0 與 4。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "任意候選數至少違反一條。",
    "difficultyReason": "基本無解型。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8e8b4ef238c274b4ad75c7d35191d34cdac739ca00785b0151670fc9e913911a"
  },
  {
    "questionId": "u07-s007-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "x≥5 且 x≤5 的共同解集為何？",
    "givenConditions": "兩端都使用含等號符號。",
    "target": "辨識交集退化為單點",
    "choices": [
      "無解",
      "x=5",
      "x>5",
      "所有實數"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "x≥5 給 [5,∞)，x≤5 給 (−∞,5]；共同元素只有 5。",
      "result": "x=5",
      "answerIndexVerified": 1
    },
    "explanation": "x 不小於五的解集從五向右，x 不大於五的解集從五向左，兩者都包含端點五。小於五會違反第一條，大於五會違反第二條，所以唯一共同值是 x 等於五。",
    "steps": [
      "確認 x≥5 與 x≤5 都包含端點五。",
      "排除所有小於五的數，因它們不符合第一式。",
      "排除所有大於五的數，得到交集只有 x=5。"
    ],
    "optionAnalysis": [
      {
        "choice": "無解",
        "truth": false,
        "reason": "端點共同包含，不是無解。"
      },
      {
        "choice": "x=5",
        "truth": true,
        "reason": "獨立重算得到「x=5」，此選項與完整解答一致。"
      },
      {
        "choice": "x>5",
        "truth": false,
        "reason": "大於 5 違反 x≤5。"
      },
      {
        "choice": "所有實數",
        "truth": false,
        "reason": "大多數數不符合。"
      }
    ],
    "misconceptionTarget": "以為交集一定要有一段長度，忽略兩個閉區間可以只在單一端點相交。",
    "prerequisiteCheck": "需理解端點交集。",
    "estimatedTimeSec": "60",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "只有單一數 5 符合，答案唯一。",
    "difficultyReason": "單點交集。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "dd4d164a14b3241b2e6328100c56f3628d9ed79b428474640bc2bceb1ac6681e"
  },
  {
    "questionId": "u07-s007-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解 x+2>5 且 2x≤10，答案為何？",
    "givenConditions": "第二式除以正 2。",
    "target": "解兩個基本不等式並取交集",
    "choices": [
      "3<x≤5",
      "x>3",
      "x≤5",
      "無解"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "x+2>5 ⇒ x>3；2x≤10 ⇒ x≤5。兩者同時成立只在 (3,5]。",
      "result": "3<x≤5",
      "answerIndexVerified": 0
    },
    "explanation": "第一式兩邊減二得 x 大於三；第二式除以正二得 x 不超過五。且要求兩式同時成立，因此取兩解集重疊部分，左端三不含、右端五包含，答案為三小於 x 且 x 不超過五。",
    "steps": [
      "解 x+2>5，得到 x>3。",
      "解 2x≤10，得到 x≤5。",
      "取交集並保留端點性，寫成 3<x≤5。"
    ],
    "optionAnalysis": [
      {
        "choice": "3<x≤5",
        "truth": true,
        "reason": "獨立重算得到「3<x≤5」，此選項與完整解答一致。"
      },
      {
        "choice": "x>3",
        "truth": false,
        "reason": "選項「x>3」漏掉上界。，與獨立解得的「3<x≤5」不一致。"
      },
      {
        "choice": "x≤5",
        "truth": false,
        "reason": "選項「x≤5」漏掉下界。，與獨立解得的「3<x≤5」不一致。"
      },
      {
        "choice": "無解",
        "truth": false,
        "reason": "兩解集有重疊。"
      }
    ],
    "misconceptionTarget": "分別解完兩式卻沒有取共同部分，或在合併時弄反三與五的端點符號。",
    "prerequisiteCheck": "需會基本解法。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "3 排除、5 包含。",
    "difficultyReason": "代數與交集兩階段。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "546086b0a2684a419cabd5e3f948abe3de19a565d93b7362dc670a55431050e7"
  },
  {
    "questionId": "u07-s007-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "下列哪個整數同時滿足 −2<x≤2？",
    "givenConditions": "候選題問整數。",
    "target": "判斷候選值是否同時通過雙界",
    "choices": [
      "−2",
      "3",
      "2.5",
      "0"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "代入 0：−2<0 真且 0≤2 真；其他各值至少一條失敗，所以選 0。",
      "result": "0",
      "answerIndexVerified": 3
    },
    "explanation": "候選值必須同時大於負二且不超過二。負二被嚴格左界排除，三與二點五都超過右界；零位在兩端之間，代入兩個條件都成立，所以唯一正確選項是零。",
    "steps": [
      "逐項檢查是否滿足 −2<x。",
      "再檢查是否同時滿足 x≤2。",
      "只有零通過兩個界限，因此選零。"
    ],
    "optionAnalysis": [
      {
        "choice": "−2",
        "truth": false,
        "reason": "−2 不大於 −2。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "選項「3」3>2。，與獨立解得的「0」不一致。"
      },
      {
        "choice": "2.5",
        "truth": false,
        "reason": "2.5>2 且非整數。"
      },
      {
        "choice": "0",
        "truth": true,
        "reason": "獨立重算得到「0」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "只檢查左界或右界其中一個條件，沒有把候選值同時代入兩邊。",
    "prerequisiteCheck": "需會代入雙邊不等式。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "只有 0 同時符合且為整數。",
    "difficultyReason": "雙條件篩選。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "9de529ffce19c936963e6dd41efde0d38449b86d30768225779cd14fd85af007"
  },
  {
    "questionId": "u07-s007-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解 2x−1≥5 且 3x+2<17，答案為何？",
    "givenConditions": "係數皆正。",
    "target": "解兩個多步不等式的交集",
    "choices": [
      "x≥3",
      "3≤x<5",
      "x<5",
      "3<x≤5"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "2x−1≥5 ⇒ 2x≥6 ⇒ x≥3；3x+2<17 ⇒ 3x<15 ⇒ x<5。交集 [3,5)。",
      "result": "3≤x<5",
      "answerIndexVerified": 1
    },
    "explanation": "第一式兩邊加一再除以正二，得到 x 不小於三；第二式兩邊減二再除以正三，得到 x 小於五。兩條件的共同部分由三到五，包含三而排除五，所以是三不超過 x 且 x 小於五。",
    "steps": [
      "解 2x−1≥5，得到 x≥3。",
      "解 3x+2<17，得到 x<5。",
      "取交集並保留左閉右開，寫成 3≤x<5。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≥3",
        "truth": false,
        "reason": "選項「x≥3」漏掉上界。，與獨立解得的「3≤x<5」不一致。"
      },
      {
        "choice": "3≤x<5",
        "truth": true,
        "reason": "獨立重算得到「3≤x<5」，此選項與完整解答一致。"
      },
      {
        "choice": "x<5",
        "truth": false,
        "reason": "選項「x<5」漏掉下界。，與獨立解得的「3≤x<5」不一致。"
      },
      {
        "choice": "3<x≤5",
        "truth": false,
        "reason": "端點包含性相反。"
      }
    ],
    "misconceptionTarget": "合併兩個解集時交換端點的等號，使三被排除或五被錯誤納入。",
    "prerequisiteCheck": "需會多步解法。",
    "estimatedTimeSec": "95",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "x=3 符合兩式，x=5 不符合第二式。",
    "difficultyReason": "兩式各需整理並保留端點。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "62271d36ea1997905621c52081fe07cba1462504a8ae5ead38457e36b7a6afa3"
  },
  {
    "questionId": "u07-s007-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "若條件為 x>a 且 x≤b，且其解集中恰有整數 2、3、4 三個，a、b 皆為整數，則下列哪組可能？",
    "givenConditions": "a、b 為整數。",
    "target": "由整數交集反推雙邊端點",
    "choices": [
      "a=2,b=4",
      "a=0,b=4",
      "a=1,b=4",
      "a=1,b=5"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "要包含 2 但不包含 1，開下界只能是 1；要包含 4 且不包含 5，閉上界應是 4。",
      "result": "a=1,b=4",
      "answerIndexVerified": 2
    },
    "explanation": "解集中最小整數是二，而下界形式為 x 大於整數 a，所以 a 必須是前一個整數一。最大整數是四且上界包含 b，因此 b 必須為四；代回一小於 x 且 x 不超過四，整數正好二、三、四。",
    "steps": [
      "由最小整數解二反推開下界整數 a=1。",
      "由最大整數解四反推閉上界 b=4。",
      "代回 1<x≤4，確認整數解恰為二、三、四。"
    ],
    "optionAnalysis": [
      {
        "choice": "a=2,b=4",
        "truth": false,
        "reason": "a=2 會排除 2。"
      },
      {
        "choice": "a=0,b=4",
        "truth": false,
        "reason": "會多出整數 1。"
      },
      {
        "choice": "a=1,b=4",
        "truth": true,
        "reason": "獨立重算得到「a=1,b=4」，此選項與完整解答一致。"
      },
      {
        "choice": "a=1,b=5",
        "truth": false,
        "reason": "會多出整數 5。"
      }
    ],
    "misconceptionTarget": "沒有利用 a、b 是整數與一開一閉的端點性，選到會多含一或五的範圍。",
    "prerequisiteCheck": "需會整數邊界反推。",
    "estimatedTimeSec": "110",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "只有 a=1,b=4 使整數交集正好三個。",
    "difficultyReason": "參數與離散解集反向推理。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "91e45b4e2bf8bf2a29a0042c63c7d7de02906528df3d3968709104a96ff75df1"
  },
  {
    "questionId": "u07-s007-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解 −x<2 且 2x−3≤7，答案為何？",
    "givenConditions": "x 為實數。",
    "target": "含負係數的複合不等式",
    "choices": [
      "x<−2",
      "x≤5",
      "−2≤x≤5",
      "−2<x≤5"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "−x<2 ⇒ x>−2；2x−3≤7 ⇒ x≤5。共同部分是 (−2,5]。",
      "result": "−2<x≤5",
      "answerIndexVerified": 3
    },
    "explanation": "第一式負 x 小於二，兩邊除以負一時不等號反向，得到 x 大於負二；第二式移項得二 x 不超過十，所以 x 不超過五。取共同部分為負二小於 x 且 x 不超過五。",
    "steps": [
      "將 −x<2 除以負一並變號，得 x>−2。",
      "解 2x−3≤7，得到 x≤5。",
      "取兩解集交集，寫成 −2<x≤5。"
    ],
    "optionAnalysis": [
      {
        "choice": "x<−2",
        "truth": false,
        "reason": "第一式方向錯。"
      },
      {
        "choice": "x≤5",
        "truth": false,
        "reason": "選項「x≤5」漏下界。，與獨立解得的「−2<x≤5」不一致。"
      },
      {
        "choice": "−2≤x≤5",
        "truth": false,
        "reason": "錯含 −2。"
      },
      {
        "choice": "−2<x≤5",
        "truth": true,
        "reason": "獨立重算得到「−2<x≤5」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "第一式除以負數未變號，或交集時把負二與五的開閉端點弄反。",
    "prerequisiteCheck": "需會負數變號。",
    "estimatedTimeSec": "100",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "−2 排除、5 包含，均可代回驗證。",
    "difficultyReason": "負數變號與交集整合。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "cb9cd6de6ea0a5862d31941e0349f2314a1df826d806f5dc7e448daeeae8b85f"
  },
  {
    "questionId": "u07-s007-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "遊樂設施規定身高 h 至少 120 公分且未滿 150 公分。哪位可以搭乘？",
    "givenConditions": "身高以公分表示。",
    "target": "在雙重安全限制中找共同可行值",
    "choices": [
      "119 公分",
      "149 公分",
      "150 公分",
      "151 公分"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "建立 120≤h<150。代入 149：兩邊皆真；其餘各值至少違反一邊。",
      "result": "149 公分",
      "answerIndexVerified": 1
    },
    "explanation": "至少一百二十包含一百二十，未滿一百五十排除一百五十，所以規則是 h 不小於一百二十且 h 小於一百五十。四個選項中只有一百四十九同時通過上下限。",
    "steps": [
      "把至少 120 翻成 h≥120。",
      "把未滿 150 翻成 h<150。",
      "逐項代入共同範圍，只有 149 公分符合。"
    ],
    "optionAnalysis": [
      {
        "choice": "119 公分",
        "truth": false,
        "reason": "低於 120。"
      },
      {
        "choice": "149 公分",
        "truth": true,
        "reason": "獨立重算得到「149 公分」，此選項與完整解答一致。"
      },
      {
        "choice": "150 公分",
        "truth": false,
        "reason": "150 被未滿排除。"
      },
      {
        "choice": "151 公分",
        "truth": false,
        "reason": "選項「151 公分」超過上限。，與獨立解得的「149 公分」不一致。"
      }
    ],
    "misconceptionTarget": "只符合最低或最高限制之一便判定可搭，沒有同時檢查兩個身高門檻。",
    "prerequisiteCheck": "需理解至少與未滿。",
    "estimatedTimeSec": "65",
    "unitAndRoundingCheck": "單位均為公分。",
    "ambiguityAndBoundaryAudit": "下界含、上界不含，唯一 149 合規。",
    "difficultyReason": "情境中兩條規則同時必要。",
    "literacyContextNecessity": "身高安全規則必須同時檢查最低與最高限制，情境不可刪除。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "914091b354f31d6ae9c3043e8cd85c64435bb7fd02b78161d106d7c42e2da103"
  },
  {
    "questionId": "u07-s007-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某食品保存期要求溫度 T 高於 −5°C 且不超過 3°C。若儀器只顯示整數，允許的讀數共有幾個？",
    "givenConditions": "T 為整數 °C。",
    "target": "在保存規範中計數整數交集",
    "choices": [
      "7 個",
      "10 個",
      "8 個",
      "9 個"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "第一個允許整數是 −4，最後是 3；個數 3−(−4)+1=8。",
      "result": "8 個",
      "answerIndexVerified": 2
    },
    "explanation": "高於負五排除負五，不超過三包含三，因此整數讀數從負四到三。依序為負四、負三、負二、負一、零、一、二、三，用末減首加一可驗得共有八個。",
    "steps": [
      "將保存範圍寫成 −5<T≤3。",
      "列出負四到三的全部整數讀數。",
      "以 3−(−4)+1=8 驗證個數。"
    ],
    "optionAnalysis": [
      {
        "choice": "7 個",
        "truth": false,
        "reason": "漏算一個端點附近值。"
      },
      {
        "choice": "10 個",
        "truth": false,
        "reason": "錯含 −5 或多算。"
      },
      {
        "choice": "8 個",
        "truth": true,
        "reason": "獨立重算得到「8 個」，此選項與完整解答一致。"
      },
      {
        "choice": "9 個",
        "truth": false,
        "reason": "多算 −5。"
      }
    ],
    "misconceptionTarget": "把負五納入或把三排除，並因負數端點造成連續整數計數差一。",
    "prerequisiteCheck": "需會負整數列舉。",
    "estimatedTimeSec": "85",
    "unitAndRoundingCheck": "單位 °C，讀數整數化已明示。",
    "ambiguityAndBoundaryAudit": "−5 排除、3 包含，共 8 個。",
    "difficultyReason": "語意、交集與整數計數整合。",
    "literacyContextNecessity": "儀器顯示精度使連續範圍轉為有限整數讀數，情境必要。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3d98598ffbb06d962b9df8dad8d77d3fc07ac63ea426c524f8c74c170bf13a99"
  },
  {
    "questionId": "u07-s007-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "報名規則要求年齡 a 不低於 13 歲且不高於 15 歲。若 a 以整數歲計，哪一組是完整允許年齡？",
    "givenConditions": "a 為整數年齡。",
    "target": "列出雙重年齡限制的所有整數解",
    "choices": [
      "13、14、15",
      "14、15",
      "13、14",
      "12、13、14、15"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "13≤a≤15 且 a 為整數，因此依序只有 13、14、15。",
      "result": "13、14、15",
      "answerIndexVerified": 0
    },
    "explanation": "不低於十三表示年齡至少十三，不高於十五表示至多十五，兩端都包含。年齡又以整數歲計，所以從十三到十五的完整共同解只有十三、十四、十五。",
    "steps": [
      "將不低於十三翻成 a≥13。",
      "將不高於十五翻成 a≤15。",
      "取整數交集並列出十三、十四、十五。"
    ],
    "optionAnalysis": [
      {
        "choice": "13、14、15",
        "truth": true,
        "reason": "獨立重算得到「13、14、15」，此選項與完整解答一致。"
      },
      {
        "choice": "14、15",
        "truth": false,
        "reason": "漏掉 13。"
      },
      {
        "choice": "13、14",
        "truth": false,
        "reason": "漏掉 15。"
      },
      {
        "choice": "12、13、14、15",
        "truth": false,
        "reason": "多算 12。"
      }
    ],
    "misconceptionTarget": "把不低於或不高於誤讀成嚴格不等式，錯誤排除十三或十五的端點。",
    "prerequisiteCheck": "需理解不低於與不高於。",
    "estimatedTimeSec": "60",
    "unitAndRoundingCheck": "單位歲一致。",
    "ambiguityAndBoundaryAudit": "兩端均包含，完整集合唯一。",
    "difficultyReason": "基本但需同時保留兩端。",
    "literacyContextNecessity": "報名資格由兩個含邊界條件共同決定，列舉年齡不可只看單一門檻。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "32ace9c5f1aa7299f49e8c4a289e3f78dfcbb588f081512bd92f4f1d6856e02e"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s007-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "type": "constructed-response",
    "prompt": "求不等式組 x>−3 且 2x+1≤9 的共同解集，並列出其中所有整數解。",
    "requiredWork": [
      "分別解兩個條件",
      "取共同部分而非全部",
      "寫成雙邊不等式",
      "列出整數解"
    ],
    "fullCreditSolution": [
      "第一條件已是 x>−3，表示負三右側且不含負三。",
      "第二條件 2x+1≤9，兩邊減一得 2x≤8，再除以正二得 x≤4。",
      "且表示取交集，因此共同解集為 −3<x≤4。",
      "其中整數解為 −2、−1、0、1、2、3、4。"
    ],
    "alternativeMethod": [
      "可在同一數線畫出 x>−3 與 x≤4，再讀出重疊區；整數只取重疊帶內的刻度。"
    ],
    "reasoningSteps": [
      "分別解兩個不等式，保留各自端點性。",
      "在同一數線取負三右側與四左側的重疊。",
      "從共同實數解集中列出全部整數。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確解第二式、得到 −3<x≤4，並完整列出 −2 至 4 的七個整數。"
      },
      {
        "score": 2,
        "criteria": "共同解集正確但整數列舉漏一個；或整數全部正確但雙邊寫法略有缺漏。"
      },
      {
        "score": 1,
        "criteria": "兩個子解集至少一個正確，且知道要找重疊，但交集端點或列舉錯誤。"
      },
      {
        "score": 0,
        "criteria": "把且當或而保留兩側全部，且無有效解題。"
      }
    ],
    "partialCreditRules": "若把 −3 誤列入但其餘皆正確，視為單一嚴格端點錯誤；若把 4 排除，視為含等號錯誤。",
    "followThroughPolicy": "第二式若算術錯誤但交集方法正確，可給程序分；把且誤作或屬核心錯誤，不完全跟隨。",
    "unitAndNotationRules": "接受 −3<x≤4 或 x>−3 且 x≤4；整數清單無單位。",
    "answerOnlyPolicy": "只列七個整數而未展示兩個條件，最多 2 分；只寫範圍最多 2 分。",
    "commonErrors": [
      "把且誤成聯集，保留兩個單邊解集的全部範圍。",
      "把負三畫成實心或把四畫成空心，顛倒端點包含性。",
      "解得共同實數範圍後漏列整數解或錯把負三列入。"
    ],
    "figureId": "u07-fig-and-intersection",
    "independentReview": {
      "decision": "pass",
      "derivedResult": "−3<x≤4；整數解 −2、−1、0、1、2、3、4。",
      "ambiguity": "「且」明確要求同時成立，兩端符號明確。",
      "scope": "國中複合不等式交集與整數解。",
      "reviewNote": "獨立求第二式 x≤4，和 x>−3 疊合為 −3<x≤4；逐端檢查 −3 排除、4 納入，再列七個整數。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "5b2aa2ec32a93a49842a2ba35ddf1ea598e10d8e6db5b6d41baaab8570334bc7"
  },
  {
    "questionId": "u07-s007-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "type": "constructed-response",
    "prompt": "某設施規定體重至少 35 公斤且不超過 80 公斤。小杰體重為 w 公斤。請建立不等式，判斷 35、80、80.1 是否符合，並解釋「且」的作用。",
    "requiredWork": [
      "建立雙邊不等式",
      "逐一判斷三個體重",
      "解釋同時滿足兩界"
    ],
    "fullCreditSolution": [
      "至少三十五表示 w≥35；不超過八十表示 w≤80。",
      "同一體重必須同時符合兩條規定，所以合併為 35≤w≤80。",
      "三十五與八十都位於閉區間端點，均符合；八十點一超過上限，不符合。",
      "且的作用是只保留最低與最高限制重疊的體重範圍。"
    ],
    "alternativeMethod": [
      "也可分別代入 w≥35 與 w≤80；候選值只有兩式都為真時才符合。"
    ],
    "reasoningSteps": [
      "翻譯至少與不超過，建立兩個單邊不等式。",
      "取兩條件交集，寫成雙邊範圍。",
      "代入兩個端點與一個外側值，說明且的交集語意。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確寫 35≤w≤80，判斷符合、符合、不符合，並清楚說明且取共同部分。"
      },
      {
        "score": 2,
        "criteria": "不等式與三個判斷正確，但「且」說明不完整；或只錯一個端點包含性。"
      },
      {
        "score": 1,
        "criteria": "知道有最低與最高限制，但符號或候選值判斷有兩處錯誤。"
      },
      {
        "score": 0,
        "criteria": "寫成 w≤35 或 w≥80 的外側範圍，且無共同限制概念。"
      }
    ],
    "partialCreditRules": "單位「公斤」若只在定義中出現一次即可；80.1 的判斷必須依上限而非四捨五入。",
    "followThroughPolicy": "若上界錯寫 <80，後續排除 80 可按其錯誤式給程序分，但原語意「不超過」不得分。",
    "unitAndNotationRules": "w 的單位為公斤；接受分開寫 w≥35 且 w≤80。",
    "answerOnlyPolicy": "只寫 35≤w≤80，無判斷與解釋，最多 1 分。",
    "commonErrors": [
      "把至少三十五寫成嚴格大於，使合法端點三十五被排除。",
      "把且誤讀成符合任一條即可，因而讓八十點一通過最低限制。",
      "只寫雙邊式卻沒有依題意逐一判斷三個指定數值。"
    ],
    "figureId": "u07-fig-and-intersection",
    "independentReview": {
      "decision": "pass",
      "derivedResult": "35≤w≤80；35、80 符合，80.1 不符合。",
      "ambiguity": "最低與最高語句均明確包含等號，體重可為小數。",
      "scope": "國中範圍語意與交集。",
      "reviewNote": "獨立把至少轉 ≥、不超過轉 ≤；代入三值後，35 與 80 分別在邊界且含等號，80.1 只違反上界，因此不符。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "7a01615c28de59bb0e75a5cfedd95969dbbb35625d9262f42534d6efa66ad20e"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s007-v001-semantic-r1",
    "questionId": "u07-s007-v001",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "contentSha256": "705370a9a893ce40cb26d093923cd9cc2282bff8ae3bacec1169e3272768f312",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "條件一給 2<x，條件二給 x≤6，把共同的 x 放中間即 2<x≤6。",
    "derivedAnswer": "2<x≤6",
    "storedAnswer": "2<x≤6",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「把「且」語句合併成區間」，給定條件「兩條件同時成立。」足以決定唯一數學任務。",
      "boundary": "左端排除、右端包含，唯一選項 2。",
      "units": "無單位。",
      "scope": "本題只使用 不等式與且的語意 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本語意合併。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：條件一給 2<x，條件二給 x≤6，把共同的 x 放中間即 2<x≤6。 所得「2<x≤6」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：左端排除、右端包含，唯一選項 2。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s007-v002-semantic-r1",
    "questionId": "u07-s007-v002",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "contentSha256": "b5c577b06708eed228986b4674a9ae23d2ecc40780e8b0e1d14f2ef1f962d4ca",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "測 −1：兩式皆真；測 2：兩式皆真；測 3：第二式假。共同部分恰是 [−1,3)。",
    "derivedAnswer": "−1≤x<3",
    "storedAnswer": "−1≤x<3",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「求兩個解集交集」，給定條件「兩條件以且連結。」足以決定唯一數學任務。",
      "boundary": "−1 包含、3 排除。",
      "units": "無單位。",
      "scope": "本題只使用 不等式與且的語意 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "單純交集。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：測 −1：兩式皆真；測 2：兩式皆真；測 3：第二式假。共同部分恰是 [−1,3)。 所得「−1≤x<3」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：−1 包含、3 排除。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s007-v003-semantic-r1",
    "questionId": "u07-s007-v003",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "contentSha256": "8e8b4ef238c274b4ad75c7d35191d34cdac739ca00785b0151670fc9e913911a",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "若 x<0，必有 x<4，因此不可能 x≥4；故不存在同時滿足者。",
    "derivedAnswer": "無解",
    "storedAnswer": "無解",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「辨識互斥條件無解」，給定條件「使用「且」。」足以決定唯一數學任務。",
      "boundary": "任意候選數至少違反一條。",
      "units": "無單位。",
      "scope": "本題只使用 不等式與且的語意 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本無解型。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：若 x<0，必有 x<4，因此不可能 x≥4；故不存在同時滿足者。 所得「無解」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：任意候選數至少違反一條。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s007-v004-semantic-r1",
    "questionId": "u07-s007-v004",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "contentSha256": "dd4d164a14b3241b2e6328100c56f3628d9ed79b428474640bc2bceb1ac6681e",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "x≥5 給 [5,∞)，x≤5 給 (−∞,5]；共同元素只有 5。",
    "derivedAnswer": "x=5",
    "storedAnswer": "x=5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「辨識交集退化為單點」，給定條件「兩端都使用含等號符號。」足以決定唯一數學任務。",
      "boundary": "只有單一數 5 符合，答案唯一。",
      "units": "無單位。",
      "scope": "本題只使用 不等式與且的語意 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "單點交集。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：x≥5 給 [5,∞)，x≤5 給 (−∞,5]；共同元素只有 5。 所得「x=5」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：只有單一數 5 符合，答案唯一。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s007-v005-semantic-r1",
    "questionId": "u07-s007-v005",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "contentSha256": "546086b0a2684a419cabd5e3f948abe3de19a565d93b7362dc670a55431050e7",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "x+2>5 ⇒ x>3；2x≤10 ⇒ x≤5。兩者同時成立只在 (3,5]。",
    "derivedAnswer": "3<x≤5",
    "storedAnswer": "3<x≤5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「解兩個基本不等式並取交集」，給定條件「第二式除以正 2。」足以決定唯一數學任務。",
      "boundary": "3 排除、5 包含。",
      "units": "無單位。",
      "scope": "本題只使用 不等式與且的語意 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "代數與交集兩階段。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：x+2>5 ⇒ x>3；2x≤10 ⇒ x≤5。兩者同時成立只在 (3,5]。 所得「3<x≤5」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：3 排除、5 包含。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s007-v006-semantic-r1",
    "questionId": "u07-s007-v006",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "contentSha256": "9de529ffce19c936963e6dd41efde0d38449b86d30768225779cd14fd85af007",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "代入 0：−2<0 真且 0≤2 真；其他各值至少一條失敗，所以選 0。",
    "derivedAnswer": "0",
    "storedAnswer": "0",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「判斷候選值是否同時通過雙界」，給定條件「候選題問整數。」足以決定唯一數學任務。",
      "boundary": "只有 0 同時符合且為整數。",
      "units": "無單位。",
      "scope": "本題只使用 不等式與且的語意 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "雙條件篩選。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：代入 0：−2<0 真且 0≤2 真；其他各值至少一條失敗，所以選 0。 所得「0」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：只有 0 同時符合且為整數。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s007-v007-semantic-r1",
    "questionId": "u07-s007-v007",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "contentSha256": "62271d36ea1997905621c52081fe07cba1462504a8ae5ead38457e36b7a6afa3",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "2x−1≥5 ⇒ 2x≥6 ⇒ x≥3；3x+2<17 ⇒ 3x<15 ⇒ x<5。交集 [3,5)。",
    "derivedAnswer": "3≤x<5",
    "storedAnswer": "3≤x<5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「解兩個多步不等式的交集」，給定條件「係數皆正。」足以決定唯一數學任務。",
      "boundary": "x=3 符合兩式，x=5 不符合第二式。",
      "units": "無單位。",
      "scope": "本題只使用 不等式與且的語意 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "兩式各需整理並保留端點。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：2x−1≥5 ⇒ 2x≥6 ⇒ x≥3；3x+2<17 ⇒ 3x<15 ⇒ x<5。交集 [3,5)。 所得「3≤x<5」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：x=3 符合兩式，x=5 不符合第二式。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s007-v008-semantic-r1",
    "questionId": "u07-s007-v008",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "contentSha256": "91e45b4e2bf8bf2a29a0042c63c7d7de02906528df3d3968709104a96ff75df1",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "要包含 2 但不包含 1，開下界只能是 1；要包含 4 且不包含 5，閉上界應是 4。",
    "derivedAnswer": "a=1,b=4",
    "storedAnswer": "a=1,b=4",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由整數交集反推雙邊端點」，給定條件「a、b 為整數。」足以決定唯一數學任務。",
      "boundary": "只有 a=1,b=4 使整數交集正好三個。",
      "units": "無單位。",
      "scope": "本題只使用 不等式與且的語意 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "參數與離散解集反向推理。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：要包含 2 但不包含 1，開下界只能是 1；要包含 4 且不包含 5，閉上界應是 4。 所得「a=1,b=4」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：只有 a=1,b=4 使整數交集正好三個。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s007-v009-semantic-r1",
    "questionId": "u07-s007-v009",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "contentSha256": "cb9cd6de6ea0a5862d31941e0349f2314a1df826d806f5dc7e448daeeae8b85f",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "−x<2 ⇒ x>−2；2x−3≤7 ⇒ x≤5。共同部分是 (−2,5]。",
    "derivedAnswer": "−2<x≤5",
    "storedAnswer": "−2<x≤5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「含負係數的複合不等式」，給定條件「x 為實數。」足以決定唯一數學任務。",
      "boundary": "−2 排除、5 包含，均可代回驗證。",
      "units": "無單位。",
      "scope": "本題只使用 不等式與且的語意 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "負數變號與交集整合。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：−x<2 ⇒ x>−2；2x−3≤7 ⇒ x≤5。共同部分是 (−2,5]。 所得「−2<x≤5」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：−2 排除、5 包含，均可代回驗證。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s007-v010-semantic-r1",
    "questionId": "u07-s007-v010",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "contentSha256": "914091b354f31d6ae9c3043e8cd85c64435bb7fd02b78161d106d7c42e2da103",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "建立 120≤h<150。代入 149：兩邊皆真；其餘各值至少違反一邊。",
    "derivedAnswer": "149 公分",
    "storedAnswer": "149 公分",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「在雙重安全限制中找共同可行值」，給定條件「身高以公分表示。」足以決定唯一數學任務。",
      "boundary": "下界含、上界不含，唯一 149 合規。",
      "units": "單位均為公分。",
      "scope": "本題只使用 不等式與且的語意 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "情境中兩條規則同時必要。",
    "literacyNecessityCheck": "身高安全規則必須同時檢查最低與最高限制，情境不可刪除。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：建立 120≤h<150。代入 149：兩邊皆真；其餘各值至少違反一邊。 所得「149 公分」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：下界含、上界不含，唯一 149 合規。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s007-v011-semantic-r1",
    "questionId": "u07-s007-v011",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "contentSha256": "3d98598ffbb06d962b9df8dad8d77d3fc07ac63ea426c524f8c74c170bf13a99",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "第一個允許整數是 −4，最後是 3；個數 3−(−4)+1=8。",
    "derivedAnswer": "8 個",
    "storedAnswer": "8 個",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「在保存規範中計數整數交集」，給定條件「T 為整數 °C。」足以決定唯一數學任務。",
      "boundary": "−5 排除、3 包含，共 8 個。",
      "units": "單位 °C，讀數整數化已明示。",
      "scope": "本題只使用 不等式與且的語意 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "語意、交集與整數計數整合。",
    "literacyNecessityCheck": "儀器顯示精度使連續範圍轉為有限整數讀數，情境必要。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：第一個允許整數是 −4，最後是 3；個數 3−(−4)+1=8。 所得「8 個」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：−5 排除、3 包含，共 8 個。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s007-v012-semantic-r1",
    "questionId": "u07-s007-v012",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "contentSha256": "32ace9c5f1aa7299f49e8c4a289e3f78dfcbb588f081512bd92f4f1d6856e02e",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "13≤a≤15 且 a 為整數，因此依序只有 13、14、15。",
    "derivedAnswer": "13、14、15",
    "storedAnswer": "13、14、15",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「列出雙重年齡限制的所有整數解」，給定條件「a 為整數年齡。」足以決定唯一數學任務。",
      "boundary": "兩端均包含，完整集合唯一。",
      "units": "單位歲一致。",
      "scope": "本題只使用 不等式與且的語意 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本但需同時保留兩端。",
    "literacyNecessityCheck": "報名資格由兩個含邊界條件共同決定，列舉年齡不可只看單一門檻。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：13≤a≤15 且 a 為整數，因此依序只有 13、14、15。 所得「13、14、15」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：兩端均包含，完整集合唯一。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u07-fig-and-intersection",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-and-word",
    "svgPath": "figures/u07/u07-fig-and-intersection.svg",
    "canvas": {
      "width": 720,
      "height": 240,
      "unit": "px"
    },
    "viewBox": "0 0 720 240",
    "drawingSpec": {
      "coordinateSystem": "三條共用 x 座標的水平數線",
      "baselinesY": [
        55,
        115,
        185
      ],
      "leftMargin": 130,
      "rightMargin": 650,
      "pCoordinate": [
        300,
        55
      ],
      "qCoordinate": [
        500,
        115
      ],
      "conditionA": {
        "endpoint": "p open",
        "direction": "right"
      },
      "conditionB": {
        "endpoint": "q closed",
        "direction": "left"
      },
      "intersection": {
        "fromX": 310,
        "toX": 490,
        "leftEndpoint": "open",
        "rightEndpoint": "closed"
      },
      "lineWeights": "baseline default, conditions 6px, overlap 10px",
      "labels": "條件 A、條件 B、A 且 B、p、q、共同部分",
      "arrows": "兩個條件射線顯示延伸方向",
      "hiddenLines": "none",
      "units": "abstract number line",
      "scalePolicy": "not-to-scale"
    },
    "toScale": false,
    "noVisualInferenceWarning": "本圖用於說明端點與方向，不按數值距離比例繪製；不得由線段長短推論答案。",
    "altText": "三條對齊數線。條件 A 從空心端點 p 向右；條件 B 從實心端點 q 向左；最下方只以粗線保留 p 與 q 之間的共同部分。",
    "svgTitle": "且表示兩解集共同部分",
    "svgDesc": "以一般端點 p 與 q 展示兩個單邊範圍及其交集；p 小於 q，圖不按比例。",
    "mobileReadability": "在 360px 寬度檢查後，端點直徑、箭頭、刻度與標籤仍可分辨；文字不小於 18px。",
    "answerLeakageReview": "圖中使用一般字母與不同於題目數值的示例，不標示任何題目的正確選項或最終數值答案。",
    "svgAssertions": [
      "id=\"condition-a\"",
      "id=\"condition-b\"",
      "id=\"intersection-band\"",
      "A 且 B",
      "共同部分",
      "fill=\"white\"",
      "fill=\"#111\""
    ],
    "figureReview": {
      "decision": "pass",
      "manualVisualInspection": true,
      "geometryCheck": "pass",
      "mobileCheck": "pass",
      "answerLeakageCheck": "pass",
      "reviewNote": "人工檢查三條數線 p、q 垂直對齊，最下層只標重疊區；左端空心、右端實心與上兩條一致，未寫任何數值或特定題目答案。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "97f16349ec5d310d8fac30df4326f6352580b6a345ded26406c1c326cca6a81e"
  }
];
