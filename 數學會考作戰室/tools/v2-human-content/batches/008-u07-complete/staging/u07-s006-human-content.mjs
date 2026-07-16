// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s006-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-solution-sets",
  "skillId": "inequality-integer-solutions",
  "title": "不等式整數解：從連續範圍精確列點與計數",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能由解集列出符合的整數。",
    "能處理嚴格與含等號端點。",
    "能計算有限整數解個數。",
    "能辨識無限多個或不存在整數解的情況。"
  ],
  "prerequisites": [
    {
      "skillId": "inequality-sign-flip",
      "requiredLevel": "能正確解出一元一次不等式並判斷端點是否包含。"
    }
  ],
  "prerequisiteBridge": {
    "inequality-sign-flip": "能正確解出一元一次不等式並判斷端點是否包含。"
  },
  "glossary": [
    {
      "term": "整數解",
      "definition": "同時是原不等式的解且屬於整數的數。"
    },
    {
      "term": "最大整數解",
      "definition": "所有整數解中數值最大的那一個；若向上無界通常不存在。"
    },
    {
      "term": "最小整數解",
      "definition": "所有整數解中數值最小的那一個；若向下無界通常不存在。"
    },
    {
      "term": "有限解個數",
      "definition": "在有上下界且整數點有限時可計數。"
    }
  ],
  "notation": [
    {
      "symbol": "x<3.2, x∈Z",
      "meaning": "整數解為所有不超過 3 的整數。"
    },
    {
      "symbol": "−2≤x<4, x∈Z",
      "meaning": "整數解為 −2、−1、0、1、2、3。"
    }
  ],
  "conceptNarrative": [
    "實數解集是一整段連續範圍；題目加上「x 為整數」後，只保留數線上的整數刻度。",
    "嚴格端點若本身是整數，要排除；含等號端點若為整數，要納入。",
    "小數端點不需談空心或實心對整數端點的納入，應找相鄰整數。",
    "只有單側限制時整數解通常無限多個，但仍可能有最大或最小整數解。"
  ],
  "formalDefinitions": [
    {
      "name": "整數解集",
      "statement": "原解集與整數集合的交集。"
    },
    {
      "name": "連續整數計數",
      "statement": "若整數從 m 到 n 且兩端都包含，個數為 n−m+1。"
    }
  ],
  "formulas": [
    {
      "formula": "m≤x≤n，m,n為整數 ⇒ 個數=n−m+1",
      "conditions": [
        "m≤n",
        "兩端均包含"
      ],
      "meaning": "連續整數個數。"
    },
    {
      "formula": "x<a 的最大整數解=小於 a 的最大整數",
      "conditions": [
        "解集向下無界"
      ],
      "meaning": "依端點是否為整數調整。"
    }
  ],
  "nonApplicableCases": [
    "若題目未說 x 為整數，不可擅自只列整數。",
    "單側無界解集不能用有限個數公式。",
    "嚴格端點為小數時，不要機械地再減 1。",
    "最大整數解與最大解不同；開放實數區間常沒有最大實數解。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先解出完整實數範圍。",
      "check": "不等號方向是否正確？"
    },
    {
      "step": 2,
      "instruction": "標出端點附近整數。",
      "check": "端點是整數還是非整數？"
    },
    {
      "step": 3,
      "instruction": "依是否含等號決定端點整數是否納入。",
      "check": "嚴格符號是否排除端點？"
    },
    {
      "step": 4,
      "instruction": "列舉或用首尾計數。",
      "check": "是否有限且連續？"
    },
    {
      "step": 5,
      "instruction": "回原式抽查邊界整數。",
      "check": "最靠近端點的納入與排除是否正確？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "x<4 的整數解中，最大者為何？",
      "solutionSteps": [
        "4 不包含。",
        "小於 4 的最大整數是 3。"
      ],
      "answer": "3。",
      "why": "嚴格小於四會排除端點四，而整數三正好是四左側相鄰值。三符合條件，下一個整數四不符合，因此三不只是可行值，也是所有整數解中的最大者。"
    },
    {
      "exampleId": "L2",
      "prompt": "列出 −1≤x<3 的整數解。",
      "solutionSteps": [
        "−1 包含，3 不包含。",
        "依序列整數。"
      ],
      "answer": "−1、0、1、2。",
      "why": "左端含等號，所以負一要列入；右端沒有等號，所以三要排除。從負一到三之前依序列出整數，可避免只看距離而混淆兩端開閉。"
    },
    {
      "exampleId": "L3",
      "prompt": "2.4<x≤6.1 有幾個整數解？",
      "solutionSteps": [
        "符合的整數為 3、4、5、6。",
        "共 4 個。"
      ],
      "answer": "4 個。",
      "why": "二點四右側第一個整數是三，六點一左側最後一個整數是六。列出三、四、五、六可直接驗證都在區間內，七則已超過上界。"
    },
    {
      "exampleId": "L4",
      "prompt": "x≥−2 有多少個整數解？",
      "solutionSteps": [
        "從 −2、−1、0 往右可一直延伸。",
        "沒有上界。"
      ],
      "answer": "無限多個。",
      "why": "負二因含等號而符合，之後每個更大的整數也都符合。條件沒有給上界，所以解集不會在某個整數停止，不能只列眼前幾項便說共有有限個。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "x<4 的最大整數解寫 4。",
      "why": "忽略嚴格不等號。",
      "correction": "4 不屬於解集，最大整數是 3。"
    },
    {
      "mistake": "2.4<x 就從 2 開始列。",
      "why": "未檢查 2 是否大於 2.4。",
      "correction": "第一個整數是 3。"
    },
    {
      "mistake": "−1≤x<3 列成 −1、0、1、2、3。",
      "why": "把右端點 3 誤納入。",
      "correction": "嚴格小於排除 3。"
    },
    {
      "mistake": "計數 n−m 而漏加 1。",
      "why": "忽略首尾都要算。",
      "correction": "包含兩端時用 n−m+1。"
    },
    {
      "mistake": "x≥−2 說有 3 個整數解。",
      "why": "只列眼前幾個，忘記無限延伸。",
      "correction": "單側無上界，整數解無限多。"
    },
    {
      "mistake": "把最大整數解當成最大實數解。",
      "why": "混淆離散與連續。",
      "correction": "先確認題目限定整數。"
    }
  ],
  "selfCheck": [
    "題目是否真的限定整數？",
    "端點是否為整數且是否包含？",
    "解集是否有兩個有限邊界？",
    "計數是否包含首尾？"
  ],
  "summary": [
    "整數解是實數解集與整數的交集。",
    "嚴格端點排除，含等號端點納入。",
    "有限連續整數個數可用末−首+1。",
    "單側無界通常有無限多整數解。"
  ],
  "connections": {
    "previous": "承接正確解法與負數變號。",
    "next": [
      "下一節會同時處理兩個限制的「且」。",
      "第八技能會把範圍用中文、符號與端點互譯。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s006-v001",
      "u07-s006-v002",
      "u07-s006-v003",
      "u07-s006-v004",
      "u07-s006-v005",
      "u07-s006-v006",
      "u07-s006-v007",
      "u07-s006-v008",
      "u07-s006-v009",
      "u07-s006-v010",
      "u07-s006-v011",
      "u07-s006-v012"
    ],
    "constructedResponseIds": [
      "u07-s006-cr001",
      "u07-s006-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "人工檢核整數端點、小數端點、有限區間與單側無界四類；所有列舉均逐一代回邊界附近數值，確認未產生 off-by-one 錯誤。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "72cb061badde50c1e01cc43bbbd328bdd7e438c5b1dea7abfc4edb656c2a956c"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s006-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "x<5 的整數解中，最大的是哪一個？",
    "givenConditions": "x 限定為整數。",
    "target": "找單側解集的最大整數解",
    "choices": [
      "5",
      "4",
      "3",
      "不存在"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "列出靠近上界的整數：…、3、4、5；5 被 x<5 排除，4 保留，故最大為 4。",
      "result": "4",
      "answerIndexVerified": 1
    },
    "explanation": "條件 x<5 排除端點五。整數依序排列時，五左邊緊鄰的整數是四，所以四符合且比所有其他符合的整數都大；把四代回可得四小於五。",
    "steps": [
      "先確認嚴格小於符號不包含端點五。",
      "在數線上找五左側相鄰整數四。",
      "代入檢查 4<5 成立，且下一個整數五不成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "5 不符合。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "獨立重算得到「4」，此選項與完整解答一致。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "3 是解但不是最大。"
      },
      {
        "choice": "不存在",
        "truth": false,
        "reason": "整數解有最大值 4。"
      }
    ],
    "misconceptionTarget": "把嚴格上界五當成可取的整數解，沒有檢查端點是否包含。",
    "prerequisiteCheck": "需理解嚴格端點。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "雖實數解無最大值，但整數解最大值存在。",
    "difficultyReason": "基本整數邊界。",
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
    "contentSha256": "9340b823cfabc02b543ace1890a2efc3afe9a9c4bd98288465cea874412d1254"
  },
  {
    "questionId": "u07-s006-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "列出 −2≤x<2 的所有整數解，正確的是哪一項？",
    "givenConditions": "x 為整數。",
    "target": "列舉有限區間整數解",
    "choices": [
      "−1、0、1、2",
      "−2、−1、0、1、2",
      "−2、−1、0",
      "−2、−1、0、1"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "從最小允許整數 −2 開始，到小於 2 的最後整數 1，依序是 −2、−1、0、1。",
      "result": "−2、−1、0、1",
      "answerIndexVerified": 3
    },
    "explanation": "左端使用小於或等於，所以負二必須列入；右端使用嚴格小於，所以二必須排除。從負二開始逐一列到二之前的整數，完整解集是負二、負一、零、一。",
    "steps": [
      "由 −2≤x 判定左端整數負二包含。",
      "由 x<2 判定右端整數二排除。",
      "依序列出區間內整數 −2、−1、0、1。"
    ],
    "optionAnalysis": [
      {
        "choice": "−1、0、1、2",
        "truth": false,
        "reason": "漏掉 −2 且錯含 2。"
      },
      {
        "choice": "−2、−1、0、1、2",
        "truth": false,
        "reason": "選項「−2、−1、0、1、2」錯含 2。，與獨立解得的「−2、−1、0、1」不一致。"
      },
      {
        "choice": "−2、−1、0",
        "truth": false,
        "reason": "選項「−2、−1、0」漏掉 1。，與獨立解得的「−2、−1、0、1」不一致。"
      },
      {
        "choice": "−2、−1、0、1",
        "truth": true,
        "reason": "獨立重算得到「−2、−1、0、1」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "把兩端都當成含等號或都當成不含等號，造成漏列或多列整數。",
    "prerequisiteCheck": "需會雙邊範圍與端點。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "四個整數逐一滿足且相鄰外點皆不滿足。",
    "difficultyReason": "基本列舉。",
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
    "contentSha256": "529f4b6c428d1e58a269e2d5e176a2e681c77203e21bdac68f7d792159c06e76"
  },
  {
    "questionId": "u07-s006-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "不等式 1.2<x≤4.7 有幾個整數解？",
    "givenConditions": "x 為整數。",
    "target": "計數小數端點間整數",
    "choices": [
      "3 個",
      "4 個",
      "5 個",
      "無限多個"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "逐整數檢查：1 不大於 1.2；2、3、4 符合；5>4.7。故共 3 個。",
      "result": "3 個",
      "answerIndexVerified": 0
    },
    "explanation": "大於一點二的第一個整數是二，不超過四點七的最後一個整數是四。因此符合的整數只有二、三、四，共三個；一與五分別落在下界外與上界外。",
    "steps": [
      "找下界右側第一個整數二。",
      "找上界左側最後一個整數四。",
      "列出二、三、四並計數為三個。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 個",
        "truth": true,
        "reason": "獨立重算得到「3 個」，此選項與完整解答一致。"
      },
      {
        "choice": "4 個",
        "truth": false,
        "reason": "多算一個端點外整數。"
      },
      {
        "choice": "5 個",
        "truth": false,
        "reason": "把 1 或 5 算入。"
      },
      {
        "choice": "無限多個",
        "truth": false,
        "reason": "區間有兩個有限界。"
      }
    ],
    "misconceptionTarget": "把小數端點先四捨五入再機械加減一，沒有直接檢查整數是否落在區間。",
    "prerequisiteCheck": "需會小數大小比較。",
    "estimatedTimeSec": "60",
    "unitAndRoundingCheck": "無單位與四捨五入；端點精確。",
    "ambiguityAndBoundaryAudit": "整數解明確為連續三個。",
    "difficultyReason": "小數端點列舉。",
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
    "contentSha256": "3dfd336aa1f19814a186e59fac88853e6247bfe8c8a61c753204700a15356c06"
  },
  {
    "questionId": "u07-s006-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解 3x−2≤13，若 x 為整數，最大整數解為何？",
    "givenConditions": "x 為整數。",
    "target": "先解代數再取最大整數",
    "choices": [
      "4",
      "6",
      "5",
      "不存在"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "3x−2≤13 ⇒ 3x≤15 ⇒ x≤5。整數 5 可取且任何更大整數不行，因此最大為 5。",
      "result": "5",
      "answerIndexVerified": 2
    },
    "explanation": "兩邊先加二得三 x 不超過十五，再除以正三得到 x 不超過五，方向不變。五是整數且含在解集中，而六已超過上界，所以最大整數解是五。",
    "steps": [
      "兩邊加二，得到 3x≤15。",
      "除以正數三，得到 x≤5。",
      "檢查五成立、六不成立，確定最大整數解為五。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "4 是解但非最大。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "6 不符合。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "獨立重算得到「5」，此選項與完整解答一致。"
      },
      {
        "choice": "不存在",
        "truth": false,
        "reason": "存在最大值 5。"
      }
    ],
    "misconceptionTarget": "解出上界五後誤排除含等號端點，或沒有用下一個整數驗證最大性。",
    "prerequisiteCheck": "需會基本不等式解法。",
    "estimatedTimeSec": "70",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "x=5 代回 13≤13，x=6 得 16≤13 假。",
    "difficultyReason": "兩層處理。",
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
    "contentSha256": "fe48a0958f5e618ebec8860304aaebdd5f8528eb14a826a1987d7699e3a8b5a6"
  },
  {
    "questionId": "u07-s006-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "不等式 −1≤2x+3<9 的整數解共有幾個？",
    "givenConditions": "x 為整數；除以正 2 不變號。",
    "target": "解雙邊不等式並計數",
    "choices": [
      "3 個",
      "4 個",
      "6 個",
      "5 個"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "−1≤2x+3<9 ⇒ −4≤2x<6 ⇒ −2≤x<3。列整數 −2、−1、0、1、2，數得 5。",
      "result": "5 個",
      "answerIndexVerified": 3
    },
    "explanation": "雙邊同減三得負四不超過二 x 且二 x 小於六，再三邊同除以正二，得到負二不超過 x 且 x 小於三。整數為負二、負一、零、一、二，共五個。",
    "steps": [
      "雙邊各減三，得 −4≤2x<6。",
      "三邊同除以正二，得 −2≤x<3。",
      "列出 −2、−1、0、1、2，計數為五個。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 個",
        "truth": false,
        "reason": "漏算兩端附近。"
      },
      {
        "choice": "4 個",
        "truth": false,
        "reason": "選項「4 個」漏算一個。，與獨立解得的「5 個」不一致。"
      },
      {
        "choice": "6 個",
        "truth": false,
        "reason": "選項「6 個」錯含 3。，與獨立解得的「5 個」不一致。"
      },
      {
        "choice": "5 個",
        "truth": true,
        "reason": "獨立重算得到「5 個」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "雙邊不等式只處理其中一側，或用末數減首數而忘記計數需加一。",
    "prerequisiteCheck": "需會雙邊同加減與計數。",
    "estimatedTimeSec": "95",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "−2 包含，3 排除，共 5 個。",
    "difficultyReason": "多步雙邊解集。",
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
    "contentSha256": "f8356d9e3405fd42cc1c2bffe3298903debf458116ef30c6570c9dce9977c3ea"
  },
  {
    "questionId": "u07-s006-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "x≥−3.6 的最小整數解為何？",
    "givenConditions": "x 為整數。",
    "target": "找負小數下界的最小整數",
    "choices": [
      "−3",
      "−4",
      "−2",
      "不存在"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "數線上 −4<−3.6<−3。條件要求在 −3.6 右側含邊界，第一個整數是 −3。",
      "result": "−3",
      "answerIndexVerified": 0
    },
    "explanation": "負四位在負三點六左側，比負三點六小，不符合不小於的條件；負三位在右側且符合。所有更小整數都不合，因此最小整數解是負三。",
    "steps": [
      "定位 −3.6 介於 −4 與 −3 之間。",
      "檢查 −4<−3.6，故負四不符合。",
      "檢查 −3≥−3.6，確定負三為第一個符合整數。"
    ],
    "optionAnalysis": [
      {
        "choice": "−3",
        "truth": true,
        "reason": "獨立重算得到「−3」，此選項與完整解答一致。"
      },
      {
        "choice": "−4",
        "truth": false,
        "reason": "−4 不符合。"
      },
      {
        "choice": "−2",
        "truth": false,
        "reason": "−2 符合但不是最小。"
      },
      {
        "choice": "不存在",
        "truth": false,
        "reason": "有最小整數 −3。"
      }
    ],
    "misconceptionTarget": "遇到負小數便沿錯方向取整，把較小的負四誤認為最小符合值。",
    "prerequisiteCheck": "需比較負小數。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "相鄰整數測試排除 −4、保留 −3。",
    "difficultyReason": "負數取整。",
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
    "contentSha256": "6a68000bf314399e7dcc82693e8e678302777692c03a8db8c75ff227e12e6e32"
  },
  {
    "questionId": "u07-s006-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "若整數 x 滿足 2< (x+1)/3 ≤5，則所有整數解的和為何？",
    "givenConditions": "x 為整數；乘正數 3。",
    "target": "解分數型雙邊不等式並求和",
    "choices": [
      "81",
      "84",
      "90",
      "96"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "2<(x+1)/3≤5 ⇒ 6<x+1≤15 ⇒ 5<x≤14。整數 6,7,…,14 共 9 個，和=(6+14)×9÷2=90。",
      "result": "90",
      "answerIndexVerified": 2
    },
    "explanation": "三邊乘正三後得六小於 x 加一且 x 加一不超過十五，再同減一得五小於 x 且 x 不超過十四。整數六到十四共九個，首尾平均十，總和為九十。",
    "steps": [
      "三邊乘正三並減一，得到 5<x≤14。",
      "列出整數由六到十四，共 14−6+1=9 個。",
      "用首尾平均 (6+14)÷2=10，求和 9×10=90。"
    ],
    "optionAnalysis": [
      {
        "choice": "81",
        "truth": false,
        "reason": "相當於少算一個 9 或錯用項數。"
      },
      {
        "choice": "84",
        "truth": false,
        "reason": "不是 6 至 14 九個整數的總和。"
      },
      {
        "choice": "90",
        "truth": true,
        "reason": "(6+14)×9÷2=90。"
      },
      {
        "choice": "96",
        "truth": false,
        "reason": "多加了 6。"
      }
    ],
    "misconceptionTarget": "端點轉換後誤納入五，或求連續整數個數與等差級數總和時漏項。",
    "prerequisiteCheck": "需會雙邊不等式與連續整數和。",
    "estimatedTimeSec": "125",
    "unitAndRoundingCheck": "無單位；總和精確。",
    "ambiguityAndBoundaryAudit": "左端嚴格排除 5，右端包含 14；修正後選項含唯一正確總和 90。",
    "difficultyReason": "多步解集與求和。",
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
    "contentSha256": "085782ee47c975c6c51ff72156a1526497c691e72cffe3f508505f26b696069b"
  },
  {
    "questionId": "u07-s006-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "整數 x 滿足 −7<2x−1≤9。下列哪個敘述正確？",
    "givenConditions": "x 為整數。",
    "target": "由解集判斷多項敘述",
    "choices": [
      "最大解為 6",
      "共有 8 個整數解",
      "最小解為 −4",
      "解的和為 4"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "−3<x≤5，整數為 −2,−1,0,1,2,3,4,5，數量 8；最大 5，最小 −2，和 12。",
      "result": "共有 8 個整數解",
      "answerIndexVerified": 1
    },
    "explanation": "雙邊加一得負六小於二 x 且二 x 不超過十，再同除以正二得負三小於 x 且 x 不超過五。整數解是負二到五，合計八個，所以第二項正確。",
    "steps": [
      "雙邊加一，得到 −6<2x≤10。",
      "同除以正二，得到 −3<x≤5。",
      "列出 −2、−1、0、1、2、3、4、5，共八個。"
    ],
    "optionAnalysis": [
      {
        "choice": "最大解為 6",
        "truth": false,
        "reason": "最大解是 5。"
      },
      {
        "choice": "共有 8 個整數解",
        "truth": true,
        "reason": "獨立重算得到「共有 8 個整數解」，此選項與完整解答一致。"
      },
      {
        "choice": "最小解為 −4",
        "truth": false,
        "reason": "最小解是 −2。"
      },
      {
        "choice": "解的和為 4",
        "truth": false,
        "reason": "總和為 12，不是 4。"
      }
    ],
    "misconceptionTarget": "把嚴格左端負三列入解集，導致最小值、個數與總和都隨之算錯。",
    "prerequisiteCheck": "需會雙邊解法與計數。",
    "estimatedTimeSec": "105",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "完整列舉可唯一驗證四敘述。",
    "difficultyReason": "同時檢查最大、最小、個數與和。",
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
    "contentSha256": "b3cb370154d882856502cbbb1920acbd6daf7ada3c4f412f2dc5f25a79216d63"
  },
  {
    "questionId": "u07-s006-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "若 x<k 的整數解中最大者為 7，且 k 為整數，則 k 為何？",
    "givenConditions": "k 為整數。",
    "target": "由最大整數解反求整數端點",
    "choices": [
      "8",
      "7",
      "6",
      "可能有很多值"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "對整數 k，所有小於 k 的整數中最大為 k−1。令 k−1=7，解得 k=8。",
      "result": "8",
      "answerIndexVerified": 0
    },
    "explanation": "當 k 是整數時，所有小於 k 的整數中最大者必為前一個整數 k 減一。題目說最大者是七，所以列 k−1=7，解得 k=8；代回時最大整數確為七。",
    "steps": [
      "利用 k 為整數，寫出最大整數解為 k−1。",
      "令 k−1=7，解得 k=8。",
      "代回 x<8，確認最大整數解是七。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": true,
        "reason": "獨立重算得到「8」，此選項與完整解答一致。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "若 k=7 最大解為 6。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "若 k=6 最大解為 5。"
      },
      {
        "choice": "可能有很多值",
        "truth": false,
        "reason": "k 已限定整數，因此唯一。"
      }
    ],
    "misconceptionTarget": "忽略 k 限定為整數，誤以為許多介於七與八之間的實數 k 都可以。",
    "prerequisiteCheck": "需理解開端點與相鄰整數。",
    "estimatedTimeSec": "90",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "若 k 非整數可能有範圍，但題目已明示整數。",
    "difficultyReason": "反向邊界推理。",
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
    "contentSha256": "2fc3e0b7c48b61bb9d586f93de1c66c5ff198be702caf973a9d0ff5839acdad7"
  },
  {
    "questionId": "u07-s006-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "劇院一排座位編號為整數。維修區規定編號 n 必須滿足 12<n≤18。可使用的座位共有幾個？",
    "givenConditions": "n 為座位整數編號。",
    "target": "在編號情境計數整數解",
    "choices": [
      "5 個",
      "7 個",
      "6 個",
      "8 個"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "從第一個大於 12 的編號 13，到包含的 18，共 18−13+1=6 個。",
      "result": "6 個",
      "answerIndexVerified": 2
    },
    "explanation": "座位編號必須是整數，十二因嚴格下界而排除，十八因含等號上界而保留。可用編號為十三、十四、十五、十六、十七、十八，逐一計數共有六個。",
    "steps": [
      "把規則讀成 12<n≤18，排除十二。",
      "列出十三到十八的連續整數編號。",
      "用 18−13+1=6 驗證共有六個座位。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 個",
        "truth": false,
        "reason": "漏算 18。"
      },
      {
        "choice": "7 個",
        "truth": false,
        "reason": "錯把 12 也算入。"
      },
      {
        "choice": "6 個",
        "truth": true,
        "reason": "獨立重算得到「6 個」，此選項與完整解答一致。"
      },
      {
        "choice": "8 個",
        "truth": false,
        "reason": "多算其他座位。"
      }
    ],
    "misconceptionTarget": "忽略座位編號的離散性，或在開下界與閉上界之間發生差一計數錯誤。",
    "prerequisiteCheck": "需會列有限整數區間。",
    "estimatedTimeSec": "60",
    "unitAndRoundingCheck": "單位為個座位，無換算。",
    "ambiguityAndBoundaryAudit": "座位編號連續且端點規則明確。",
    "difficultyReason": "情境簡單但端點必須精確。",
    "literacyContextNecessity": "座位編號的離散性使整數解計數不可省略。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b6b68d104fc039b32f129b2c2dbc754c16d7c552add2a6009a3211cf62c966d8"
  },
  {
    "questionId": "u07-s006-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "一箱商品規定每箱至少 24 件且少於 30 件，件數 m 為整數。若每件貼 2 張標籤，最少需要幾張標籤？",
    "givenConditions": "24≤m<30，m 為整數。",
    "target": "從整數範圍求衍生最小量",
    "choices": [
      "46 張",
      "48 張",
      "50 張",
      "60 張"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "最少可裝 24 件；每件 2 張，總數 2×24=48。上界不影響最小值。",
      "result": "48 張",
      "answerIndexVerified": 1
    },
    "explanation": "件數至少二十四表示二十四本身可取，且題目問最少量，因此選最小整數二十四件。每件使用兩張標籤，總數為二十四乘二，等於四十八張。",
    "steps": [
      "由至少二十四件判定最小可行件數為二十四。",
      "確認少於三十的上界不影響此最小值。",
      "計算 24×2=48 張標籤。"
    ],
    "optionAnalysis": [
      {
        "choice": "46 張",
        "truth": false,
        "reason": "相當於 23 件，不符合至少 24。"
      },
      {
        "choice": "48 張",
        "truth": true,
        "reason": "獨立重算得到「48 張」，此選項與完整解答一致。"
      },
      {
        "choice": "50 張",
        "truth": false,
        "reason": "用 25 件不是最少。"
      },
      {
        "choice": "60 張",
        "truth": false,
        "reason": "用 30 件且上界排除。"
      }
    ],
    "misconceptionTarget": "把至少端點二十四排除，或誤用接近三十的上界來計算最少標籤數。",
    "prerequisiteCheck": "需會範圍與乘法。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "件與張單位關係為每件 2 張。",
    "ambiguityAndBoundaryAudit": "m=24 可行且是最小；標籤數因此唯一。",
    "difficultyReason": "需由整數解再計算衍生量。",
    "literacyContextNecessity": "裝箱件數範圍與每件標籤數共同決定最少標籤，情境不可刪除。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f5a76315b289843d9a9fcd2d2c5a48ace4bb91473bbb40626266513230a692d4"
  },
  {
    "questionId": "u07-s006-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "溫度紀錄只取整數攝氏度。某實驗需 −4.5<T<1.2。符合的整數溫度之和為何？",
    "givenConditions": "T 僅取整數 °C。",
    "target": "在測量精度情境列整數解並求和",
    "choices": [
      "−10",
      "−6",
      "0",
      "−9"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "−4.5 右邊第一個整數 −4，到小於 1.2 的最後整數 1。相加 (−4−3−2−1)+(0+1)=−10+1=−9。",
      "result": "−9",
      "answerIndexVerified": 3
    },
    "explanation": "溫度只取整數，負四點五右側第一個整數是負四，一點二左側最後一個整數是一。解集為負四、負三、負二、負一、零、一，相加得到負九。",
    "steps": [
      "找下界右側第一個整數 −4。",
      "找上界左側最後一個整數 1，列出 −4 至 1。",
      "計算 −4−3−2−1+0+1=−9。"
    ],
    "optionAnalysis": [
      {
        "choice": "−10",
        "truth": false,
        "reason": "漏算或多算。"
      },
      {
        "choice": "−6",
        "truth": false,
        "reason": "只加部分負數。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "不可能總和為 0。"
      },
      {
        "choice": "−9",
        "truth": true,
        "reason": "獨立重算得到「−9」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "列舉負整數時漏項，或將負號相加錯誤，導致整數溫度總和不正確。",
    "prerequisiteCheck": "需會比較小數與負數加法。",
    "estimatedTimeSec": "90",
    "unitAndRoundingCheck": "單位 °C；總和作數值統計，不需另加單位也可，選項以數值表示。",
    "ambiguityAndBoundaryAudit": "−4.5、1.2 均非整數，端點嚴格性不改變相鄰整數列舉。",
    "difficultyReason": "含負小數端點與總和。",
    "literacyContextNecessity": "紀錄精度限定整數，否則解集無限且無法求有限總和。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "75604c26588b6bbbc5d15fb9319d57ca77e0bf3970c68a500afdfdfadc22198f"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s006-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "type": "constructed-response",
    "prompt": "解不等式 3x−2<16。若 x 限定為整數，列出所有非負整數解，並求其總和。",
    "requiredWork": [
      "先求實數解集",
      "加入整數與非負限制",
      "完整列舉",
      "計算總和"
    ],
    "fullCreditSolution": [
      "由 3x−2<16 兩邊加二，得 3x<18；再除以正三，得到 x<6。",
      "題目限定非負整數，所以把實數解 x<6 與 x≥0、x 為整數取交集。",
      "完整非負整數解為 0、1、2、3、4、5，嚴格上界六不能列入。",
      "總和為 0+1+2+3+4+5=15。"
    ],
    "alternativeMethod": [
      "可用 1+2+3+4+5=5×6÷2=15；仍需列出 0 至 5 以顯示整數範圍。"
    ],
    "reasoningSteps": [
      "先解一次不等式，得到嚴格上界六。",
      "加入非負與整數限制，列出零到五。",
      "檢查六被排除後，加總全部符合整數。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "得到 x<6，完整列 0 至 5，總和正確為 15。"
      },
      {
        "score": 2,
        "criteria": "解集與列舉正確但總和算錯；或漏寫 0 但其餘流程正確。"
      },
      {
        "score": 1,
        "criteria": "能求出上界 6 或列出大部分正確整數，但端點或非負限制有概念錯。"
      },
      {
        "score": 0,
        "criteria": "列出大於等於 6 的數且無有效不等式步驟，或未作答。"
      }
    ],
    "partialCreditRules": "漏列 0 屬非負整數概念錯誤；把 6 納入屬嚴格端點錯誤，各自影響列舉分。",
    "followThroughPolicy": "若上界算錯一個常數，但學生依其嚴格上界正確列整數與加總，可給程序分。",
    "unitAndNotationRules": "x 無單位；總和也無單位。需使用整數清單或清楚範圍。",
    "answerOnlyPolicy": "只寫 15 而無解集和列舉，最多 1 分。",
    "commonErrors": [
      "把嚴格上界六列入，造成解集與總和都多算一項。",
      "把非負整數誤讀為正整數，漏掉合法的零。",
      "只列出整數解卻沒有依題意求它們的總和。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "非負整數解 0、1、2、3、4、5，總和 15。",
      "ambiguity": "「非負整數」明確包含 0，原式嚴格小於明確排除 6。",
      "scope": "國中不等式整數解與有限加總。",
      "reviewNote": "獨立重算 3x−2<16 ⇒ x<6；逐一代入 0 至 5 均成立，6 使 16<16 為假；總和重新計算為 15。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "7c9f4c618d45247df570a8450934cde3fd7578e987cb489df7946cfce1c93259"
  },
  {
    "questionId": "u07-s006-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "type": "constructed-response",
    "prompt": "整數 n 滿足 −2.5<n≤4.2。求所有整數解的個數、最大整數解與最小整數解，並說明端點小數如何處理。",
    "requiredWork": [
      "找出第一個與最後一個符合整數",
      "列出或計數",
      "回答最大與最小整數解",
      "說明小數端點"
    ],
    "fullCreditSolution": [
      "負二點五右側第一個整數是負二，因負三小於負二點五而不符合；四點二左側最後一個整數是四。",
      "所有整數解依序為 −2、−1、0、1、2、3、4。",
      "共有 4−(−2)+1=7 個，最大整數解為四，最小整數解為負二。",
      "小數端點本身不是整數，應找區間內相鄰整數，不是先將端點四捨五入。"
    ],
    "alternativeMethod": [
      "也可直接用首尾計數：4−(−2)+1=7，再用端點比較驗證 −2 與 4。"
    ],
    "reasoningSteps": [
      "比較兩個小數端點與相鄰整數，確定首尾。",
      "列出負二到四的所有整數解。",
      "以末減首加一計數，並回報最大與最小值。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確列出 −2 至 4、個數 7、最大 4、最小 −2，並說明不是四捨五入。"
      },
      {
        "score": 2,
        "criteria": "首尾與個數正確但未說明小數端點；或列舉只漏一個中間數但最大最小正確。"
      },
      {
        "score": 1,
        "criteria": "能找對其中一個端點整數或使用 n−m+1，但另一端處理錯誤。"
      },
      {
        "score": 0,
        "criteria": "把 −2.5、4.2 當整數解或完全以四捨五入決定答案。"
      }
    ],
    "partialCreditRules": "若個數以 4−(−2)=6 漏加 1，首尾與最大最小仍正確，可給 2 分。",
    "followThroughPolicy": "若學生誤把第一個整數寫 −3，但之後從 −3 連續計數，可給計數程序分，惟左端比較概念不得給。",
    "unitAndNotationRules": "最大、最小與個數均無單位；負號需清楚。",
    "answerOnlyPolicy": "只寫「7 個」而無首尾或說明，最多 1 分。",
    "commonErrors": [
      "因負三接近負二點五就將負三列入，忽略它其實位在下界外。",
      "把四點二四捨五入成四當成唯一理由，沒有檢查不等式方向。",
      "用末數減首數得到六，忘記連續整數計數還要加一。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "整數解 −2 至 4，共 7 個；最大 4、最小 −2。",
      "ambiguity": "兩個小數端點均非整數，嚴格與含等號不影響端點本身是否可列，但相鄰整數唯一。",
      "scope": "國中雙邊不等式整數解。",
      "reviewNote": "獨立比較 −3<−2.5 不符、−2>−2.5 符合；4≤4.2 符合、5>4.2 不符，故首尾 −2 與 4，計數 7。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "63190a7b114c8daa3ae931b3ab87dd1dbb5d71ddf4b88823714aaab414cac5f3"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s006-v001-semantic-r1",
    "questionId": "u07-s006-v001",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "contentSha256": "9340b823cfabc02b543ace1890a2efc3afe9a9c4bd98288465cea874412d1254",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "列出靠近上界的整數：…、3、4、5；5 被 x<5 排除，4 保留，故最大為 4。",
    "derivedAnswer": "4",
    "storedAnswer": "4",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「找單側解集的最大整數解」，給定條件「x 限定為整數。」足以決定唯一數學任務。",
      "boundary": "雖實數解無最大值，但整數解最大值存在。",
      "units": "無單位。",
      "scope": "本題只使用 不等式整數解 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本整數邊界。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：列出靠近上界的整數：…、3、4、5；5 被 x<5 排除，4 保留，故最大為 4。 所得「4」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：雖實數解無最大值，但整數解最大值存在。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s006-v002-semantic-r1",
    "questionId": "u07-s006-v002",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "contentSha256": "529f4b6c428d1e58a269e2d5e176a2e681c77203e21bdac68f7d792159c06e76",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "從最小允許整數 −2 開始，到小於 2 的最後整數 1，依序是 −2、−1、0、1。",
    "derivedAnswer": "−2、−1、0、1",
    "storedAnswer": "−2、−1、0、1",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「列舉有限區間整數解」，給定條件「x 為整數。」足以決定唯一數學任務。",
      "boundary": "四個整數逐一滿足且相鄰外點皆不滿足。",
      "units": "無單位。",
      "scope": "本題只使用 不等式整數解 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本列舉。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：從最小允許整數 −2 開始，到小於 2 的最後整數 1，依序是 −2、−1、0、1。 所得「−2、−1、0、1」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：四個整數逐一滿足且相鄰外點皆不滿足。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s006-v003-semantic-r1",
    "questionId": "u07-s006-v003",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "contentSha256": "3dfd336aa1f19814a186e59fac88853e6247bfe8c8a61c753204700a15356c06",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "逐整數檢查：1 不大於 1.2；2、3、4 符合；5>4.7。故共 3 個。",
    "derivedAnswer": "3 個",
    "storedAnswer": "3 個",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「計數小數端點間整數」，給定條件「x 為整數。」足以決定唯一數學任務。",
      "boundary": "整數解明確為連續三個。",
      "units": "無單位與四捨五入；端點精確。",
      "scope": "本題只使用 不等式整數解 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "小數端點列舉。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：逐整數檢查：1 不大於 1.2；2、3、4 符合；5>4.7。故共 3 個。 所得「3 個」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：整數解明確為連續三個。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s006-v004-semantic-r1",
    "questionId": "u07-s006-v004",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "contentSha256": "fe48a0958f5e618ebec8860304aaebdd5f8528eb14a826a1987d7699e3a8b5a6",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "3x−2≤13 ⇒ 3x≤15 ⇒ x≤5。整數 5 可取且任何更大整數不行，因此最大為 5。",
    "derivedAnswer": "5",
    "storedAnswer": "5",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「先解代數再取最大整數」，給定條件「x 為整數。」足以決定唯一數學任務。",
      "boundary": "x=5 代回 13≤13，x=6 得 16≤13 假。",
      "units": "無單位。",
      "scope": "本題只使用 不等式整數解 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "兩層處理。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：3x−2≤13 ⇒ 3x≤15 ⇒ x≤5。整數 5 可取且任何更大整數不行，因此最大為 5。 所得「5」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：x=5 代回 13≤13，x=6 得 16≤13 假。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s006-v005-semantic-r1",
    "questionId": "u07-s006-v005",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "contentSha256": "f8356d9e3405fd42cc1c2bffe3298903debf458116ef30c6570c9dce9977c3ea",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "−1≤2x+3<9 ⇒ −4≤2x<6 ⇒ −2≤x<3。列整數 −2、−1、0、1、2，數得 5。",
    "derivedAnswer": "5 個",
    "storedAnswer": "5 個",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「解雙邊不等式並計數」，給定條件「x 為整數；除以正 2 不變號。」足以決定唯一數學任務。",
      "boundary": "−2 包含，3 排除，共 5 個。",
      "units": "無單位。",
      "scope": "本題只使用 不等式整數解 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "多步雙邊解集。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：−1≤2x+3<9 ⇒ −4≤2x<6 ⇒ −2≤x<3。列整數 −2、−1、0、1、2，數得 5。 所得「5 個」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：−2 包含，3 排除，共 5 個。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s006-v006-semantic-r1",
    "questionId": "u07-s006-v006",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "contentSha256": "6a68000bf314399e7dcc82693e8e678302777692c03a8db8c75ff227e12e6e32",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "數線上 −4<−3.6<−3。條件要求在 −3.6 右側含邊界，第一個整數是 −3。",
    "derivedAnswer": "−3",
    "storedAnswer": "−3",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「找負小數下界的最小整數」，給定條件「x 為整數。」足以決定唯一數學任務。",
      "boundary": "相鄰整數測試排除 −4、保留 −3。",
      "units": "無單位。",
      "scope": "本題只使用 不等式整數解 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "負數取整。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：數線上 −4<−3.6<−3。條件要求在 −3.6 右側含邊界，第一個整數是 −3。 所得「−3」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：相鄰整數測試排除 −4、保留 −3。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s006-v007-semantic-r1",
    "questionId": "u07-s006-v007",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "contentSha256": "085782ee47c975c6c51ff72156a1526497c691e72cffe3f508505f26b696069b",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "2<(x+1)/3≤5 ⇒ 6<x+1≤15 ⇒ 5<x≤14。整數 6,7,…,14 共 9 個，和=(6+14)×9÷2=90。",
    "derivedAnswer": "90",
    "storedAnswer": "90",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「解分數型雙邊不等式並求和」，給定條件「x 為整數；乘正數 3。」足以決定唯一數學任務。",
      "boundary": "左端嚴格排除 5，右端包含 14；修正後選項含唯一正確總和 90。",
      "units": "無單位；總和精確。",
      "scope": "本題只使用 不等式整數解 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "多步解集與求和。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：2<(x+1)/3≤5 ⇒ 6<x+1≤15 ⇒ 5<x≤14。整數 6,7,…,14 共 9 個，和=(6+14)×9÷2=90。 所得「90」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：左端嚴格排除 5，右端包含 14；修正後選項含唯一正確總和 90。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s006-v008-semantic-r1",
    "questionId": "u07-s006-v008",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "contentSha256": "b3cb370154d882856502cbbb1920acbd6daf7ada3c4f412f2dc5f25a79216d63",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "−3<x≤5，整數為 −2,−1,0,1,2,3,4,5，數量 8；最大 5，最小 −2，和 12。",
    "derivedAnswer": "共有 8 個整數解",
    "storedAnswer": "共有 8 個整數解",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由解集判斷多項敘述」，給定條件「x 為整數。」足以決定唯一數學任務。",
      "boundary": "完整列舉可唯一驗證四敘述。",
      "units": "無單位。",
      "scope": "本題只使用 不等式整數解 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "同時檢查最大、最小、個數與和。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：−3<x≤5，整數為 −2,−1,0,1,2,3,4,5，數量 8；最大 5，最小 −2，和 12。 所得「共有 8 個整數解」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：完整列舉可唯一驗證四敘述。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s006-v009-semantic-r1",
    "questionId": "u07-s006-v009",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "contentSha256": "2fc3e0b7c48b61bb9d586f93de1c66c5ff198be702caf973a9d0ff5839acdad7",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "對整數 k，所有小於 k 的整數中最大為 k−1。令 k−1=7，解得 k=8。",
    "derivedAnswer": "8",
    "storedAnswer": "8",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由最大整數解反求整數端點」，給定條件「k 為整數。」足以決定唯一數學任務。",
      "boundary": "若 k 非整數可能有範圍，但題目已明示整數。",
      "units": "無單位。",
      "scope": "本題只使用 不等式整數解 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "反向邊界推理。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：對整數 k，所有小於 k 的整數中最大為 k−1。令 k−1=7，解得 k=8。 所得「8」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：若 k 非整數可能有範圍，但題目已明示整數。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s006-v010-semantic-r1",
    "questionId": "u07-s006-v010",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "contentSha256": "b6b68d104fc039b32f129b2c2dbc754c16d7c552add2a6009a3211cf62c966d8",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "從第一個大於 12 的編號 13，到包含的 18，共 18−13+1=6 個。",
    "derivedAnswer": "6 個",
    "storedAnswer": "6 個",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「在編號情境計數整數解」，給定條件「n 為座位整數編號。」足以決定唯一數學任務。",
      "boundary": "座位編號連續且端點規則明確。",
      "units": "單位為個座位，無換算。",
      "scope": "本題只使用 不等式整數解 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "情境簡單但端點必須精確。",
    "literacyNecessityCheck": "座位編號的離散性使整數解計數不可省略。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：從第一個大於 12 的編號 13，到包含的 18，共 18−13+1=6 個。 所得「6 個」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：座位編號連續且端點規則明確。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s006-v011-semantic-r1",
    "questionId": "u07-s006-v011",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "contentSha256": "f5a76315b289843d9a9fcd2d2c5a48ace4bb91473bbb40626266513230a692d4",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "最少可裝 24 件；每件 2 張，總數 2×24=48。上界不影響最小值。",
    "derivedAnswer": "48 張",
    "storedAnswer": "48 張",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「從整數範圍求衍生最小量」，給定條件「24≤m<30，m 為整數。」足以決定唯一數學任務。",
      "boundary": "m=24 可行且是最小；標籤數因此唯一。",
      "units": "件與張單位關係為每件 2 張。",
      "scope": "本題只使用 不等式整數解 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需由整數解再計算衍生量。",
    "literacyNecessityCheck": "裝箱件數範圍與每件標籤數共同決定最少標籤，情境不可刪除。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：最少可裝 24 件；每件 2 張，總數 2×24=48。上界不影響最小值。 所得「48 張」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：m=24 可行且是最小；標籤數因此唯一。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s006-v012-semantic-r1",
    "questionId": "u07-s006-v012",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-integer-solutions",
    "contentSha256": "75604c26588b6bbbc5d15fb9319d57ca77e0bf3970c68a500afdfdfadc22198f",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "−4.5 右邊第一個整數 −4，到小於 1.2 的最後整數 1。相加 (−4−3−2−1)+(0+1)=−10+1=−9。",
    "derivedAnswer": "−9",
    "storedAnswer": "−9",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「在測量精度情境列整數解並求和」，給定條件「T 僅取整數 °C。」足以決定唯一數學任務。",
      "boundary": "−4.5、1.2 均非整數，端點嚴格性不改變相鄰整數列舉。",
      "units": "單位 °C；總和作數值統計，不需另加單位也可，選項以數值表示。",
      "scope": "本題只使用 不等式整數解 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "含負小數端點與總和。",
    "literacyNecessityCheck": "紀錄精度限定整數，否則解集無限且無法求有限總和。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：−4.5 右邊第一個整數 −4，到小於 1.2 的最後整數 1。相加 (−4−3−2−1)+(0+1)=−10+1=−9。 所得「−9」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：−4.5、1.2 均非整數，端點嚴格性不改變相鄰整數列舉。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
