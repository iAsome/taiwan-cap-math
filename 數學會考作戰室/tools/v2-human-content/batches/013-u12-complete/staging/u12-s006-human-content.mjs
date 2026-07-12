// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u12-s006-lecture-r1",
  "unitId": "u12",
  "numericUnitId": 12,
  "topicId": "u12-methods",
  "skillId": "factoring-common-mistake-sign",
  "lockedSkillTitle": "分解符號陷阱",
  "title": "分解符號陷阱：負號要穿過整個括號",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能處理提出負公因式。",
    "能辨認 a-b 與 b-a 的關係。",
    "能正確判斷完全平方中間項符號。",
    "能找出十字交乘的符號錯誤。",
    "能用展開定位錯在哪一項。"
  ],
  "prerequisites": [
    {
      "skillId": "factoring-quadratic-trinomial",
      "requiredLevel": "能運用前一技能並以展開驗證結果；本講義會重新連接必要步驟。"
    }
  ],
  "prerequisiteBridge": "先備技能為 factoring-quadratic-trinomial；先確認能完成前一方法並保留所有符號，再進入本技能。",
  "glossary": [
    {
      "term": "整體負號",
      "definition": "乘在整個式子外的 -1。"
    },
    {
      "term": "相反式",
      "definition": "兩式互為 -1 倍，例如 a-b 與 b-a。"
    },
    {
      "term": "符號回查",
      "definition": "展開後逐項核對正負。"
    },
    {
      "term": "首項正化",
      "definition": "提出負因式使括號首項係數為正。"
    }
  ],
  "notation": [
    {
      "symbol": "-(a-b)",
      "meaning": "等於 -a+b，也等於 b-a。"
    },
    {
      "symbol": "(a-b)^2",
      "meaning": "展開為 a^2-2ab+b^2。"
    }
  ],
  "conceptNarrative": [
    "負號乘進括號時，每一項都要改號。",
    "a-b 與 b-a 不相等，而是互為相反式；這常決定分組能否成功。",
    "常數為正的二次三項式若中間項為負，兩個常數因數通常同負。",
    "最可靠的除錯不是看外觀，而是展開後比較每一項。"
  ],
  "formalDefinitions": [
    {
      "name": "相反括號",
      "statement": "若 B= -A，則含 B 的一組可提出負號轉成 A。"
    }
  ],
  "formulas": [
    {
      "formula": "b-a=-(a-b)",
      "conditions": [
        "整個括號都反號"
      ],
      "meaning": "相反式關係。"
    },
    {
      "formula": "(a-b)^2=a^2-2ab+b^2",
      "conditions": [
        "中間項必為負 2ab"
      ],
      "meaning": "差的平方。"
    }
  ],
  "nonApplicableCases": [
    "不能只改括號第一項的符號。",
    "不能把 -(a+b) 寫成 -a+b。",
    "不能因兩個因式看起來相近就省略展開。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "標記每個負號作用範圍。",
      "check": "它乘單項還是整個括號？"
    },
    {
      "step": 2,
      "instruction": "若提出負公因式，逐項做除法。",
      "check": "每項都檢查。"
    },
    {
      "step": 3,
      "instruction": "比對括號方向。",
      "check": "是否相同、相反或完全不同？"
    },
    {
      "step": 4,
      "instruction": "寫出完整展開。",
      "check": "保留交叉項。"
    },
    {
      "step": 5,
      "instruction": "指出第一個不一致的係數或符號。",
      "check": "精確修正。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "-8x^2+12x",
      "solutionSteps": [
        "-8x^2÷(-4x)=2x。",
        "12x÷(-4x)=-3。"
      ],
      "answer": "-4x(2x-3)"
    },
    {
      "exampleId": "L2",
      "prompt": "x(a-b)-3(b-a)",
      "solutionSteps": [
        "b-a=-(a-b)。",
        "-3(b-a)=+3(a-b)。"
      ],
      "answer": "(a-b)(x+3)"
    },
    {
      "exampleId": "L3",
      "prompt": "y^2-10y+25",
      "solutionSteps": [
        "中間項為負。",
        "兩括號都用 -5。"
      ],
      "answer": "(y-5)^2"
    },
    {
      "exampleId": "L4",
      "prompt": "-2m^2-7m-3",
      "solutionSteps": [
        "先提出 -1。",
        "2m^2+7m+3=(2m+1)(m+3)。"
      ],
      "answer": "-(2m+1)(m+3)"
    }
  ],
  "difficultyConnections": {
    "basic": "辨認單一結構並完成直接分解。",
    "standard": "結合符號、係數或兩步驟方法。",
    "advanced": "比較策略、處理參數或驗證限制。",
    "literacy": "從必要情境建立或解讀乘積結構。"
  },
  "commonMistakes": [
    {
      "mistake": "-(a-b) 寫成 -a-b。",
      "why": "沒有把負號分配到第二項。",
      "correction": "正確為 -a+b。"
    },
    {
      "mistake": "提出 -g 後括號照抄。",
      "why": "未做除法。",
      "correction": "每項除以 -g。"
    },
    {
      "mistake": "負中間項卻用 (x+p)^2。",
      "why": "只看末項正。",
      "correction": "中間項決定括號符號。"
    },
    {
      "mistake": "常數負時兩因式同號。",
      "why": "忽略乘積符號。",
      "correction": "常數負代表異號。"
    },
    {
      "mistake": "把相反括號直接當相同。",
      "why": "漏掉 -1。",
      "correction": "先寫 b-a=-(a-b)。"
    },
    {
      "mistake": "只代一個數檢查。",
      "why": "單點相等不代表恆等。",
      "correction": "完整展開比係數。"
    }
  ],
  "selfCheck": [
    "我是否先判斷可用的方法？",
    "每一項、每個符號與外層因式都保留了嗎？",
    "我是否把結果展開回原式？",
    "情境中的單位與變數限制是否合理？"
  ],
  "summary": [
    "負號作用整個括號時要全體改號。",
    "相反括號差一個 -1。",
    "展開可精確定位符號錯誤。"
  ],
  "connections": {
    "previous": "承接 factoring-quadratic-trinomial。",
    "next": "依鎖定順序銜接下一技能；本單元不提前使用一元二次方程式解根。"
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u12-s006-v001",
      "u12-s006-v002",
      "u12-s006-v003",
      "u12-s006-v004",
      "u12-s006-v005",
      "u12-s006-v006",
      "u12-s006-v007",
      "u12-s006-v008",
      "u12-s006-v009",
      "u12-s006-v010",
      "u12-s006-v011",
      "u12-s006-v012"
    ],
    "constructedResponseIds": [
      "u12-s006-cr001",
      "u12-s006-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "所有例題以逐項除法和展開雙重核對；相反括號、負完全平方中間項與外層負號皆有具體錯誤對照。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "3349b30710567e855899003cbf1777179cb674962ddd6b74ac8310326235b20e"
};

export const QUESTIONS = [
  {
    "questionId": "u12-s006-v001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 -6x+9 提出 -3，括號內應為何？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "逐項除以負公因式。",
    "choices": [
      "2x+3",
      "2x-3",
      "-2x-3",
      "-2x+3"
    ],
    "answerIndex": 1,
    "independentSolution": "-3·2x=-6x，-3·(-3)=+9。",
    "explanation": "-6x+9=-3(2x-3)。",
    "steps": [
      "每項除以 -3。",
      "兩個商分別 2x、-3。",
      "展開回查。"
    ],
    "optionAnalysis": [
      {
        "choice": "2x+3",
        "truth": false,
        "reason": "展開第二項為 -9。"
      },
      {
        "choice": "2x-3",
        "truth": true,
        "reason": "-6x÷(-3)=2x，9÷(-3)=-3。"
      },
      {
        "choice": "-2x-3",
        "truth": false,
        "reason": "展開第一項為 +6x。"
      },
      {
        "choice": "-2x+3",
        "truth": false,
        "reason": "展開為 6x-9。"
      }
    ],
    "misconceptionTarget": "提出負數後忘記常數項也要改號。",
    "prerequisiteCheck": "需會負數除法。",
    "estimatedTimeSec": 60,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "題幹固定提出 -3，答案形式唯一。",
    "difficultyReason": "單一步驟負號分配。",
    "literacyContextNecessity": null,
    "authoringIntent": "建立負公因式逐項除法。",
    "concept": "負號穿括號",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "分解符號陷阱"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "395bb1b3ccb08978e172c2fb35fd5d0b1a687fc5c104d66d13749dc4d9de4161"
  },
  {
    "questionId": "u12-s006-v002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪個等式正確？",
    "givenConditions": [
      "a、b 為變數。"
    ],
    "target": "辨認相反括號。",
    "choices": [
      "b-a=a-b",
      "-(a-b)=-a-b",
      "a-b=-(a+b)",
      "b-a=-(a-b)"
    ],
    "answerIndex": 3,
    "independentSolution": "等式對所有 a、b 成立。",
    "explanation": "-(a-b)=-a+b=b-a。",
    "steps": [
      "把負號乘入兩項。",
      "重新排列為 b-a。",
      "與左式比較。"
    ],
    "optionAnalysis": [
      {
        "choice": "b-a=a-b",
        "truth": false,
        "reason": "除非 a=b，否則不成立。"
      },
      {
        "choice": "-(a-b)=-a-b",
        "truth": false,
        "reason": "第二項應變為 +b。"
      },
      {
        "choice": "a-b=-(a+b)",
        "truth": false,
        "reason": "右式為 -a-b。"
      },
      {
        "choice": "b-a=-(a-b)",
        "truth": true,
        "reason": "負號分配後為 -a+b。"
      }
    ],
    "misconceptionTarget": "只改第一項或把順序相反誤當相等。",
    "prerequisiteCheck": "需會分配律。",
    "estimatedTimeSec": 60,
    "unitAndRoundingChecks": "無單位。",
    "ambiguityAndBoundaryAudit": "純恆等式，不以特殊 a=b 值判斷。",
    "difficultyReason": "基礎符號關係但需整體負號。",
    "literacyContextNecessity": null,
    "authoringIntent": "建立相反式關係。",
    "concept": "相反括號",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "分解符號陷阱"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "5b4e7d8b2ca4a99a428d6aca25a40d55fdd00965d4bad6446457a2042876e17e"
  },
  {
    "questionId": "u12-s006-v003",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "x²-8x+16 的正確因式分解為何？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "依負中間項選括號符號。",
    "choices": [
      "(x+4)²",
      "(x-4)(x+4)",
      "(x-4)²",
      "(x-8)(x-2)"
    ],
    "answerIndex": 2,
    "independentSolution": "(x-4)²=x²-8x+16。",
    "explanation": "首末項是 x²、4²，中間項為負兩倍乘積。",
    "steps": [
      "找平方根 x、4。",
      "用中間負號選差的平方。",
      "展開檢查。"
    ],
    "optionAnalysis": [
      {
        "choice": "(x+4)²",
        "truth": false,
        "reason": "中間項為 +8x。"
      },
      {
        "choice": "(x-4)(x+4)",
        "truth": false,
        "reason": "沒有一次項，常數為 -16。"
      },
      {
        "choice": "(x-4)²",
        "truth": true,
        "reason": "中間項為 -2·x·4=-8x。"
      },
      {
        "choice": "(x-8)(x-2)",
        "truth": false,
        "reason": "中間項 -10x，常數 16。"
      }
    ],
    "misconceptionTarget": "只看末項正就使用加號。",
    "prerequisiteCheck": "需會公式法。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "平方因式可寫成兩個相同括號。",
    "difficultyReason": "辨認完全平方的符號。",
    "literacyContextNecessity": null,
    "authoringIntent": "練習中間項決定符號。",
    "concept": "完全平方符號",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "分解符號陷阱"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ca2de22f1dd0f5f44c4ceb8ebb0194bf24c9feec056828e2ef1509473902833a"
  },
  {
    "questionId": "u12-s006-v004",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "x(a-b)-2(b-a) 的因式分解為何？",
    "givenConditions": [
      "a、b、x 為變數。"
    ],
    "target": "利用 b-a=-(a-b)。",
    "choices": [
      "(a-b)(x+2)",
      "(a-b)(x-2)",
      "(b-a)(x+2)",
      "(a+b)(x-2)"
    ],
    "answerIndex": 0,
    "independentSolution": "展開 (a-b)(x+2)=x(a-b)+2(a-b)=x(a-b)-2(b-a)。",
    "explanation": "將 b-a 改寫為 -(a-b)，原式成 x(a-b)+2(a-b)。",
    "steps": [
      "標記兩括號互為相反式。",
      "把第二組轉成共同 a-b。",
      "提出 a-b。"
    ],
    "optionAnalysis": [
      {
        "choice": "(a-b)(x+2)",
        "truth": true,
        "reason": "-2(b-a)=+2(a-b)。"
      },
      {
        "choice": "(a-b)(x-2)",
        "truth": false,
        "reason": "忽略相反括號造成的額外負號。"
      },
      {
        "choice": "(b-a)(x+2)",
        "truth": false,
        "reason": "展開第一項為 x(b-a)，與原第一項相反。"
      },
      {
        "choice": "(a+b)(x-2)",
        "truth": false,
        "reason": "共同括號辨認錯。"
      }
    ],
    "misconceptionTarget": "直接把相反括號當相同，導致 x-2。",
    "prerequisiteCheck": "需掌握相反式與提共同括號。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位。",
    "ambiguityAndBoundaryAudit": "a=b 時兩式皆 0，但驗證基於恆等轉換，不是特殊值。",
    "difficultyReason": "需要兩層負號處理。",
    "literacyContextNecessity": null,
    "authoringIntent": "應用相反括號完成分組。",
    "concept": "雙重負號",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "分解符號陷阱"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1397823990c4f895f3e57bddb6dae85c4564420a0aacfc5d7abaa3cb30009c7d"
  },
  {
    "questionId": "u12-s006-v005",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生把 -4x²-12x 分解成 -4x(x-3)。他的錯誤是什麼？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "展開定位括號符號。",
    "choices": [
      "括號外應改成 +4x",
      "括號內應為 x+3",
      "應寫成 -4(x²+3x)",
      "原答案完全正確"
    ],
    "answerIndex": 1,
    "independentSolution": "原式的第二項是負，但外層已負，因此括號常數需正。",
    "explanation": "-4x²÷(-4x)=x，-12x÷(-4x)=3，所以 -4x(x+3)。",
    "steps": [
      "逐項除以 -4x。",
      "注意負除負為正。",
      "展開修正版。"
    ],
    "optionAnalysis": [
      {
        "choice": "括號外應改成 +4x",
        "truth": false,
        "reason": "若提出 +4x，括號首項會是 -x。"
      },
      {
        "choice": "括號內應為 x+3",
        "truth": true,
        "reason": "-12x÷(-4x)=+3。"
      },
      {
        "choice": "應寫成 -4(x²+3x)",
        "truth": false,
        "reason": "雖等值但未提出共同 x。"
      },
      {
        "choice": "原答案完全正確",
        "truth": false,
        "reason": "原答案展開第二項為 +12x。"
      }
    ],
    "misconceptionTarget": "看到原式兩項都負就把括號也全寫負。",
    "prerequisiteCheck": "需會負數除法與展開。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "修正版以最大公因式 -4x 且括號首項正。",
    "difficultyReason": "錯誤分析而非直接計算。",
    "literacyContextNecessity": null,
    "authoringIntent": "定位他人答案的符號錯誤。",
    "concept": "錯誤診斷",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "分解符號陷阱"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "9d3cf03696b9f733850a5cc086f3c148b20599e52a34195cc10a50ff0957ecc3"
  },
  {
    "questionId": "u12-s006-v006",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "先提出整體負號後，-2m²-7m-3 應完整改寫成哪個乘積？",
    "givenConditions": [
      "m 為變數；外層保留負號。"
    ],
    "target": "提出 -1 後十字交乘。",
    "choices": [
      "-(2m-1)(m-3)",
      "(2m+1)(m+3)",
      "-(2m+3)(m+1)",
      "-(2m+1)(m+3)"
    ],
    "answerIndex": 3,
    "independentSolution": "展開內部為 2m²+7m+3，再乘 -1 得原式。",
    "explanation": "-2m²-7m-3=-(2m²+7m+3)=-(2m+1)(m+3)。",
    "steps": [
      "提出 -1。",
      "對正三項式做十字交乘。",
      "保留外層負號。"
    ],
    "optionAnalysis": [
      {
        "choice": "-(2m-1)(m-3)",
        "truth": false,
        "reason": "內部中間項為 -7m。"
      },
      {
        "choice": "(2m+1)(m+3)",
        "truth": false,
        "reason": "缺少外層負號。"
      },
      {
        "choice": "-(2m+3)(m+1)",
        "truth": false,
        "reason": "內部中間項為 5m。"
      },
      {
        "choice": "-(2m+1)(m+3)",
        "truth": true,
        "reason": "2m²+7m+3=(2m+1)(m+3)。"
      }
    ],
    "misconceptionTarget": "分解內部正確但漏掉外層負號。",
    "prerequisiteCheck": "需會十字交乘與負公因式。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "外層負號也可併入任一因式，但題幹要求保留外層。",
    "difficultyReason": "兩層符號與非首一分解。",
    "literacyContextNecessity": null,
    "authoringIntent": "整合負首項與十字交乘。",
    "concept": "外層負號",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "分解符號陷阱"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3d708714906a7fbc24f35e45ef1181685f197daa102c54e0ed05dc1836999672"
  },
  {
    "questionId": "u12-s006-v007",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 (x-p)(x-q)=x²-9x+20，且 p、q 為正整數，則 p+q 為何？",
    "givenConditions": [
      "p、q>0。"
    ],
    "target": "由負中間項判斷 p+q。",
    "choices": [
      "20",
      "4",
      "9",
      "5"
    ],
    "answerIndex": 2,
    "independentSolution": "(x-4)(x-5)=x²-9x+20。",
    "explanation": "比較係數得 p+q=9、pq=20；實際配對為 4、5。",
    "steps": [
      "展開一般式。",
      "比對一次項係數。",
      "用正整數配對回查。"
    ],
    "optionAnalysis": [
      {
        "choice": "20",
        "truth": false,
        "reason": "這是 pq。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "只是其中一個可能因數。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "展開為 x²-(p+q)x+pq，因此 p+q=9。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "只是另一個可能因數。"
      }
    ],
    "misconceptionTarget": "把常數乘積當因數和。",
    "prerequisiteCheck": "需會一般展開與係數比對。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位。",
    "ambiguityAndBoundaryAudit": "p、q 可交換但和唯一。",
    "difficultyReason": "參數符號與係數比對。",
    "literacyContextNecessity": null,
    "authoringIntent": "由負中間項反推符號資訊。",
    "concept": "參數符號",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "分解符號陷阱"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2005523ddeb28ce5b613975f282eef9b809cf6278ad50f3a665c8aebaa8d2c8c"
  },
  {
    "questionId": "u12-s006-v008",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪個候選分解展開後的「一次項符號」與原式 6x²-7x-3 相同？",
    "givenConditions": [
      "只問一次項符號與係數是否相同。"
    ],
    "target": "完整展開候選。",
    "choices": [
      "(3x+1)(2x-3)",
      "(3x-1)(2x+3)",
      "(6x+1)(x-3)",
      "(2x+1)(3x-3)"
    ],
    "answerIndex": 0,
    "independentSolution": "正解同時也給首項 6x²、常數 -3。",
    "explanation": "逐一算交叉項，只有 (3x+1)(2x-3) 得 -7x。",
    "steps": [
      "不只看常數異號。",
      "計算兩個交叉乘積。",
      "比對 -7。"
    ],
    "optionAnalysis": [
      {
        "choice": "(3x+1)(2x-3)",
        "truth": true,
        "reason": "交叉項 -9x+2x=-7x。"
      },
      {
        "choice": "(3x-1)(2x+3)",
        "truth": false,
        "reason": "交叉項 +9x-2x=+7x。"
      },
      {
        "choice": "(6x+1)(x-3)",
        "truth": false,
        "reason": "交叉項 -18x+x=-17x。"
      },
      {
        "choice": "(2x+1)(3x-3)",
        "truth": false,
        "reason": "交叉項 -6x+3x=-3x。"
      }
    ],
    "misconceptionTarget": "只判斷異號而未比較交叉積大小。",
    "prerequisiteCheck": "需會十字交乘。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "題幹雖聚焦一次項，正解也完全等於原式。",
    "difficultyReason": "專門聚焦一次項符號陷阱。",
    "literacyContextNecessity": null,
    "authoringIntent": "訓練精確交叉符號。",
    "concept": "一次項符號",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "分解符號陷阱"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3b9a75ab55e7fc0271f942032250d3b6bba727e4f80f52cc44da6726fc35aaa6"
  },
  {
    "questionId": "u12-s006-v009",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 A=(2x-5)²，B=4x²-25。下列敘述何者正確？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "分辨差的平方與平方差。",
    "choices": [
      "A=B，因為兩式都含 2x 與 5",
      "A=4x²-20x+25，B=(2x+5)(2x-5)",
      "A=(2x+5)(2x-5)，B=(2x-5)²",
      "A=4x²+25，B=(2x-5)²"
    ],
    "answerIndex": 1,
    "independentSolution": "兩個結果分別正確且一般不相等。",
    "explanation": "展開 A 得 4x²-20x+25；B 是 (2x)²-5²。",
    "steps": [
      "對 A 使用差的平方。",
      "對 B 使用平方差。",
      "比較有無一次項。"
    ],
    "optionAnalysis": [
      {
        "choice": "A=B，因為兩式都含 2x 與 5",
        "truth": false,
        "reason": "形式相似不代表展開相同。"
      },
      {
        "choice": "A=4x²-20x+25，B=(2x+5)(2x-5)",
        "truth": true,
        "reason": "兩式結構不同，A 有一次項，B 沒有。"
      },
      {
        "choice": "A=(2x+5)(2x-5)，B=(2x-5)²",
        "truth": false,
        "reason": "兩個公式對調。"
      },
      {
        "choice": "A=4x²+25，B=(2x-5)²",
        "truth": false,
        "reason": "A 漏交叉項，B 公式錯。"
      }
    ],
    "misconceptionTarget": "把 (a-b)² 與 a²-b² 混為一談。",
    "prerequisiteCheck": "需會兩種公式。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "無單位或近似。",
    "ambiguityAndBoundaryAudit": "特殊 x 值可能偶然相等，不影響恆等式判斷。",
    "difficultyReason": "比較兩個高度相似公式。",
    "literacyContextNecessity": null,
    "authoringIntent": "釐清最常見公式混淆。",
    "concept": "公式辨析",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "分解符號陷阱"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4d626688380f9701e93340514ba0765fb6bd4d37bab207119152142bfac15458"
  },
  {
    "questionId": "u12-s006-v010",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一份自動批改紀錄把 -12y+18 寫成 -6(2y+3)。系統應判定哪一項錯誤？",
    "givenConditions": [
      "y 為變數。"
    ],
    "target": "展開候選並比對常數符號。",
    "choices": [
      "括號外應為 +6",
      "2y 應改成 -2y",
      "沒有錯誤",
      "括號內常數應為 -3"
    ],
    "answerIndex": 3,
    "independentSolution": "修正版展開為 -12y+18。",
    "explanation": "-12y÷(-6)=2y，18÷(-6)=-3。",
    "steps": [
      "逐項除以 -6。",
      "檢查兩項符號。",
      "修正為 -6(2y-3)。"
    ],
    "optionAnalysis": [
      {
        "choice": "括號外應為 +6",
        "truth": false,
        "reason": "+6 無法同時得到首項 -12y 且括號首項 2y。"
      },
      {
        "choice": "2y 應改成 -2y",
        "truth": false,
        "reason": "會使首項變成 +12y。"
      },
      {
        "choice": "沒有錯誤",
        "truth": false,
        "reason": "原候選展開常數為 -18。"
      },
      {
        "choice": "括號內常數應為 -3",
        "truth": true,
        "reason": "-6·(-3)=+18。"
      }
    ],
    "misconceptionTarget": "批改只看第一項符合就通過。",
    "prerequisiteCheck": "需會負公因式。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無實際單位；係數精確。",
    "ambiguityAndBoundaryAudit": "題幹只問哪一項錯誤，修正版唯一。",
    "difficultyReason": "情境要求定位自動批改規則的特定錯誤。",
    "literacyContextNecessity": "系統審核必須逐項展開，否則會把常數符號錯誤誤判為正確。",
    "authoringIntent": "用展開檢查批改系統。",
    "concept": "自動批改除錯",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "分解符號陷阱"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "70bf7cfe5891a0d66c27def041b29f0dfc76743d1ca7e36e00d784464671938e"
  },
  {
    "questionId": "u12-s006-v011",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "倉庫淨庫存調整式為 -3n²+15n。管理者想提出 -3n，使括號首項為正。正確表示為何？",
    "givenConditions": [
      "n 為正整數；負值代表減少。"
    ],
    "target": "提出負共同因式。",
    "choices": [
      "-3n(n-5)",
      "-3n(n+5)",
      "3n(-n-5)",
      "-3(n²-5n)"
    ],
    "answerIndex": 0,
    "independentSolution": "結果保留淨調整方向，且括號首項 n 為正。",
    "explanation": "兩項除以 -3n，商為 n、-5。",
    "steps": [
      "辨認共同 3n。",
      "依指定提出負值。",
      "逐項除法與回展。"
    ],
    "optionAnalysis": [
      {
        "choice": "-3n(n-5)",
        "truth": true,
        "reason": "-3n·n=-3n²，-3n·(-5)=+15n。"
      },
      {
        "choice": "-3n(n+5)",
        "truth": false,
        "reason": "第二項展開為 -15n。"
      },
      {
        "choice": "3n(-n-5)",
        "truth": false,
        "reason": "第二項展開為 -15n。"
      },
      {
        "choice": "-3(n²-5n)",
        "truth": false,
        "reason": "等值但未提出共同 n，不符合指定。"
      }
    ],
    "misconceptionTarget": "把原式第二項正號直接抄進括號。",
    "prerequisiteCheck": "需會帶號量與提公因式。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "庫存單位件；n 為計數，乘積仍為件數模型。",
    "ambiguityAndBoundaryAudit": "n>0，但 n-5 可正可負，反映淨調整方向而非實體負件數。",
    "difficultyReason": "需同時遵守呈現條件與庫存帶號語意。",
    "literacyContextNecessity": "負號代表總調整方向，題目指定外層形式以便管理者讀取，情境影響符號配置。",
    "authoringIntent": "正確配置庫存調整負號。",
    "concept": "帶號庫存",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "分解符號陷阱"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "04b51f19a5c6213fc5e2f7f6ec167f04c1937f2917f6a40e7a34c21aa512930e"
  },
  {
    "questionId": "u12-s006-v012",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一份工程報表將區域差式 a(b-c)+d(c-b) 合併為 (a+d)(b-c)。此合併是否正確？",
    "givenConditions": [
      "a、b、c、d 為參數。"
    ],
    "target": "利用 c-b=-(b-c) 判斷。",
    "choices": [
      "正確，兩項都有 b-c",
      "不正確，應為 (a+d)(c-b)",
      "不正確，應為 (a-d)(b-c)",
      "不正確，因完全不能因式分解"
    ],
    "answerIndex": 2,
    "independentSolution": "展開修正版回到原式。",
    "explanation": "a(b-c)+d(c-b)=a(b-c)-d(b-c)=(a-d)(b-c)。",
    "steps": [
      "標出 c-b 的相反關係。",
      "把第二項轉成共同 b-c。",
      "提出共同括號。"
    ],
    "optionAnalysis": [
      {
        "choice": "正確，兩項都有 b-c",
        "truth": false,
        "reason": "第二項原括號方向相反。"
      },
      {
        "choice": "不正確，應為 (a+d)(c-b)",
        "truth": false,
        "reason": "第一項改成 c-b 時也要帶負號。"
      },
      {
        "choice": "不正確，應為 (a-d)(b-c)",
        "truth": true,
        "reason": "d(c-b)=-d(b-c)。"
      },
      {
        "choice": "不正確，因完全不能因式分解",
        "truth": false,
        "reason": "可利用相反括號分解。"
      }
    ],
    "misconceptionTarget": "把方向相反的差直接視為同一括號。",
    "prerequisiteCheck": "需會相反式與分組。",
    "estimatedTimeSec": 135,
    "unitAndRoundingChecks": "參數可帶單位但各項須相容；題目抽象化且無近似。",
    "ambiguityAndBoundaryAudit": "不需假設 b>c；恆等關係對所有值成立。",
    "difficultyReason": "情境中的差值方向容易造成整體符號錯。",
    "literacyContextNecessity": "工程差值有方向，交換 b、c 會改號；情境使相反括號的判讀不可省略。",
    "authoringIntent": "審核方向差報表。",
    "concept": "方向差符號",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "分解符號陷阱"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "99f35bed3f41c707f8a9989245748d60e009aa59020eb73111f0a58e4853f5d3"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u12-s006-cr001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "修正錯誤分解：-8x²+20x=-4x(2x+5)。請指出錯誤、寫出正確答案並展開驗證。",
    "requiredWork": [
      "指出括號常數符號。",
      "逐項除以 -4x。",
      "寫正確分解。",
      "展開驗證。"
    ],
    "fullCreditSolution": [
      "原候選展開第二項為 -20x，與原式 +20x 不符。",
      "20x÷(-4x)=-5。",
      "正確為 -4x(2x-5)。",
      "展開為 -8x²+20x。"
    ],
    "alternativeSolutions": [
      "也可提出 4x 得 4x(-2x+5)，但題目以修正原形式為主。"
    ],
    "reasoningSteps": [
      "負公因式使第二個商改號。",
      "完整驗證兩項。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "精確指出第二項符號錯，寫 -4x(2x-5) 並展開驗證。"
      },
      {
        "score": 2,
        "criteria": "正確修正但錯誤原因或展開不完整。"
      },
      {
        "score": 1,
        "criteria": "知道要改括號符號但未完整說明，或給等價 4x(-2x+5)。"
      },
      {
        "score": 0,
        "criteria": "保留原錯誤或改成不等值形式。"
      }
    ],
    "partialCreditRules": [
      "等價正確分解可給至少 2 分；若完全符合題目修正格式才有格式完整分。",
      "只說「符號錯」而不指出哪一項最高 1 分。"
    ],
    "followThroughPolicy": "若 20÷(-4) 算錯但能指出外負號使括號改號，可給 1 分；展開沿錯誤結果不補正確性分。",
    "unitAndNotationRules": [
      "無單位。",
      "負號作用範圍需以括號清楚表示。"
    ],
    "answerOnlyPolicy": "只寫 -4x(2x-5) 最高 2 分。",
    "commonErrors": [
      "認為兩項都負所以括號都正。",
      "提出負號後只改第一項。"
    ],
    "independentReview": {
      "derivedResult": "-4x(2x-5)。",
      "ambiguity": "4x(-2x+5) 等價，但題目要求修正原候選時以外層 -4x 最清楚。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1ccf6fbbb2b8e0b04a2ff2e3f50a4f7f8ed8fdfdc51b4971de3fac543c78075a"
  },
  {
    "questionId": "u12-s006-cr002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-common-mistake-sign",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "化簡並因式分解 A=p(q-r)-4(r-q)。說明 r-q 與 q-r 的關係，並用展開驗證。",
    "requiredWork": [
      "寫出相反括號關係。",
      "正確處理 -4(r-q)。",
      "提出共同括號。"
    ],
    "fullCreditSolution": [
      "r-q=-(q-r)。",
      "-4(r-q)=+4(q-r)。",
      "A=p(q-r)+4(q-r)=(p+4)(q-r)。",
      "展開回 p(q-r)-4(r-q)。"
    ],
    "alternativeSolutions": [
      "也可共同改用 r-q：p(q-r)=-p(r-q)，所以 A=-(p+4)(r-q)。"
    ],
    "reasoningSteps": [
      "兩種最終形式互為等價。",
      "雙重負號是核心。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "清楚寫 r-q=-(q-r)，得到 (p+4)(q-r) 或等價式，並完成驗證。"
      },
      {
        "score": 2,
        "criteria": "答案正確但相反關係或展開說明缺漏。"
      },
      {
        "score": 1,
        "criteria": "辨認兩括號相反，但外層 -4 的處理仍有一處錯。"
      },
      {
        "score": 0,
        "criteria": "直接把兩括號當相同而得到 (p-4)(q-r)。"
      }
    ],
    "partialCreditRules": [
      "-(p+4)(r-q) 完全等價。",
      "因式順序交換不扣分。"
    ],
    "followThroughPolicy": "若先錯寫 -4(r-q)=-4[-(q-r)] 但下一步改正，可按整體過程給 2 分；若雙重負號始終錯，最高 1 分。",
    "unitAndNotationRules": [
      "無單位。",
      "括號方向必須明示。"
    ],
    "answerOnlyPolicy": "只寫正確答案最高 2 分。",
    "commonErrors": [
      "把 r-q 與 q-r 當相等。",
      "雙重負號算成負。"
    ],
    "independentReview": {
      "derivedResult": "(p+4)(q-r)，等價為 -(p+4)(r-q)。",
      "ambiguity": "接受兩種方向，但需符號配套一致。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c95f058d5b6abeae43adfbd444436af5a853b76532e73e61dd8b99b38da4c942"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u12-s006-v001",
    "unitId": "u12",
    "skillId": "factoring-common-mistake-sign",
    "contentSha256": "395bb1b3ccb08978e172c2fb35fd5d0b1a687fc5c104d66d13749dc4d9de4161",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "-3·2x=-6x，-3·(-3)=+9。",
    "derivedAnswer": "2x-3",
    "storedAnswer": "2x-3",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「將 -6x+9 提出 -3，括號內應為何？」逐一展開或回代；正解「2x-3」成立。「2x+3」不成立：展開第二項為 -9。；「-2x-3」不成立：展開第一項為 +6x。；「-2x+3」不成立：展開為 6x-9。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「逐項除以負公因式。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題幹固定提出 -3，答案形式唯一。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「逐項除以負公因式。」閱讀後，常見誤讀為「提出負數後忘記常數項也要改號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "單一步驟負號分配。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會負數除法。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s006-v001：-3·2x=-6x，-3·(-3)=+9。 因此導出「2x-3」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「逐項除以負公因式。」，並特別排除「提出負數後忘記常數項也要改號。」。難度理由是「單一步驟負號分配。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s006-v002",
    "unitId": "u12",
    "skillId": "factoring-common-mistake-sign",
    "contentSha256": "5b4e7d8b2ca4a99a428d6aca25a40d55fdd00965d4bad6446457a2042876e17e",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "等式對所有 a、b 成立。",
    "derivedAnswer": "b-a=-(a-b)",
    "storedAnswer": "b-a=-(a-b)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「下列哪個等式正確？」逐一展開或回代；正解「b-a=-(a-b)」成立。「b-a=a-b」不成立：除非 a=b，否則不成立。；「-(a-b)=-a-b」不成立：第二項應變為 +b。；「a-b=-(a+b)」不成立：右式為 -a-b。",
      "undefinedSymbol": "題幹已給條件為「a、b 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「辨認相反括號。」。",
      "unitConflict": "本題單位審查：無單位。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：純恆等式，不以特殊 a=b 值判斷。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「辨認相反括號。」閱讀後，常見誤讀為「只改第一項或把順序相反誤當相等。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "基礎符號關係但需整體負號。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會分配律。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s006-v002：等式對所有 a、b 成立。 因此導出「b-a=-(a-b)」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「辨認相反括號。」，並特別排除「只改第一項或把順序相反誤當相等。」。難度理由是「基礎符號關係但需整體負號。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s006-v003",
    "unitId": "u12",
    "skillId": "factoring-common-mistake-sign",
    "contentSha256": "ca2de22f1dd0f5f44c4ceb8ebb0194bf24c9feec056828e2ef1509473902833a",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "(x-4)²=x²-8x+16。",
    "derivedAnswer": "(x-4)²",
    "storedAnswer": "(x-4)²",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「x²-8x+16 的正確因式分解為何？」逐一展開或回代；正解「(x-4)²」成立。「(x+4)²」不成立：中間項為 +8x。；「(x-4)(x+4)」不成立：沒有一次項，常數為 -16。；「(x-8)(x-2)」不成立：中間項 -10x，常數 16。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「依負中間項選括號符號。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：平方因式可寫成兩個相同括號。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「依負中間項選括號符號。」閱讀後，常見誤讀為「只看末項正就使用加號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "辨認完全平方的符號。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會公式法。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s006-v003：(x-4)²=x²-8x+16。 因此導出「(x-4)²」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「依負中間項選括號符號。」，並特別排除「只看末項正就使用加號。」。難度理由是「辨認完全平方的符號。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s006-v004",
    "unitId": "u12",
    "skillId": "factoring-common-mistake-sign",
    "contentSha256": "1397823990c4f895f3e57bddb6dae85c4564420a0aacfc5d7abaa3cb30009c7d",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開 (a-b)(x+2)=x(a-b)+2(a-b)=x(a-b)-2(b-a)。",
    "derivedAnswer": "(a-b)(x+2)",
    "storedAnswer": "(a-b)(x+2)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「x(a-b)-2(b-a) 的因式分解為何？」逐一展開或回代；正解「(a-b)(x+2)」成立。「(a-b)(x-2)」不成立：忽略相反括號造成的額外負號。；「(b-a)(x+2)」不成立：展開第一項為 x(b-a)，與原第一項相反。；「(a+b)(x-2)」不成立：共同括號辨認錯。",
      "undefinedSymbol": "題幹已給條件為「a、b、x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「利用 b-a=-(a-b)。」。",
      "unitConflict": "本題單位審查：無單位。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：a=b 時兩式皆 0，但驗證基於恆等轉換，不是特殊值。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「利用 b-a=-(a-b)。」閱讀後，常見誤讀為「直接把相反括號當相同，導致 x-2。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需要兩層負號處理。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需掌握相反式與提共同括號。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s006-v004：展開 (a-b)(x+2)=x(a-b)+2(a-b)=x(a-b)-2(b-a)。 因此導出「(a-b)(x+2)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「利用 b-a=-(a-b)。」，並特別排除「直接把相反括號當相同，導致 x-2。」。難度理由是「需要兩層負號處理。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s006-v005",
    "unitId": "u12",
    "skillId": "factoring-common-mistake-sign",
    "contentSha256": "9d3cf03696b9f733850a5cc086f3c148b20599e52a34195cc10a50ff0957ecc3",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "原式的第二項是負，但外層已負，因此括號常數需正。",
    "derivedAnswer": "括號內應為 x+3",
    "storedAnswer": "括號內應為 x+3",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某生把 -4x²-12x 分解成 -4x(x-3)。他的錯誤是什麼？」逐一展開或回代；正解「括號內應為 x+3」成立。「括號外應改成 +4x」不成立：若提出 +4x，括號首項會是 -x。；「應寫成 -4(x²+3x)」不成立：雖等值但未提出共同 x。；「原答案完全正確」不成立：原答案展開第二項為 +12x。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「展開定位括號符號。」。",
      "unitConflict": "本題單位審查：無單位；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：修正版以最大公因式 -4x 且括號首項正。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「展開定位括號符號。」閱讀後，常見誤讀為「看到原式兩項都負就把括號也全寫負。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "錯誤分析而非直接計算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會負數除法與展開。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s006-v005：原式的第二項是負，但外層已負，因此括號常數需正。 因此導出「括號內應為 x+3」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「展開定位括號符號。」，並特別排除「看到原式兩項都負就把括號也全寫負。」。難度理由是「錯誤分析而非直接計算。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s006-v006",
    "unitId": "u12",
    "skillId": "factoring-common-mistake-sign",
    "contentSha256": "3d708714906a7fbc24f35e45ef1181685f197daa102c54e0ed05dc1836999672",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開內部為 2m²+7m+3，再乘 -1 得原式。",
    "derivedAnswer": "-(2m+1)(m+3)",
    "storedAnswer": "-(2m+1)(m+3)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「先提出整體負號後，-2m²-7m-3 應完整改寫成哪個乘積？」逐一展開或回代；正解「-(2m+1)(m+3)」成立。「-(2m-1)(m-3)」不成立：內部中間項為 -7m。；「(2m+1)(m+3)」不成立：缺少外層負號。；「-(2m+3)(m+1)」不成立：內部中間項為 5m。",
      "undefinedSymbol": "題幹已給條件為「m 為變數；外層保留負號。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「提出 -1 後十字交乘。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：外層負號也可併入任一因式，但題幹要求保留外層。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「提出 -1 後十字交乘。」閱讀後，常見誤讀為「分解內部正確但漏掉外層負號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "兩層符號與非首一分解。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會十字交乘與負公因式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s006-v006：展開內部為 2m²+7m+3，再乘 -1 得原式。 因此導出「-(2m+1)(m+3)」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「提出 -1 後十字交乘。」，並特別排除「分解內部正確但漏掉外層負號。」。難度理由是「兩層符號與非首一分解。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s006-v007",
    "unitId": "u12",
    "skillId": "factoring-common-mistake-sign",
    "contentSha256": "2005523ddeb28ce5b613975f282eef9b809cf6278ad50f3a665c8aebaa8d2c8c",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "(x-4)(x-5)=x²-9x+20。",
    "derivedAnswer": "9",
    "storedAnswer": "9",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「若 (x-p)(x-q)=x²-9x+20，且 p、q 為正整數，則 p+q 為何？」逐一展開或回代；正解「9」成立。「20」不成立：這是 pq。；「4」不成立：只是其中一個可能因數。；「5」不成立：只是另一個可能因數。",
      "undefinedSymbol": "題幹已給條件為「p、q>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「由負中間項判斷 p+q。」。",
      "unitConflict": "本題單位審查：無單位。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：p、q 可交換但和唯一。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「由負中間項判斷 p+q。」閱讀後，常見誤讀為「把常數乘積當因數和。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "參數符號與係數比對。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會一般展開與係數比對。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s006-v007：(x-4)(x-5)=x²-9x+20。 因此導出「9」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「由負中間項判斷 p+q。」，並特別排除「把常數乘積當因數和。」。難度理由是「參數符號與係數比對。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s006-v008",
    "unitId": "u12",
    "skillId": "factoring-common-mistake-sign",
    "contentSha256": "3b9a75ab55e7fc0271f942032250d3b6bba727e4f80f52cc44da6726fc35aaa6",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "正解同時也給首項 6x²、常數 -3。",
    "derivedAnswer": "(3x+1)(2x-3)",
    "storedAnswer": "(3x+1)(2x-3)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「下列哪個候選分解展開後的「一次項符號」與原式 6x²-7x-3 相同？」逐一展開或回代；正解「(3x+1)(2x-3)」成立。「(3x-1)(2x+3)」不成立：交叉項 +9x-2x=+7x。；「(6x+1)(x-3)」不成立：交叉項 -18x+x=-17x。；「(2x+1)(3x-3)」不成立：交叉項 -6x+3x=-3x。",
      "undefinedSymbol": "題幹已給條件為「只問一次項符號與係數是否相同。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「完整展開候選。」。",
      "unitConflict": "本題單位審查：無單位；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題幹雖聚焦一次項，正解也完全等於原式。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「完整展開候選。」閱讀後，常見誤讀為「只判斷異號而未比較交叉積大小。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "專門聚焦一次項符號陷阱。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會十字交乘。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s006-v008：正解同時也給首項 6x²、常數 -3。 因此導出「(3x+1)(2x-3)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「完整展開候選。」，並特別排除「只判斷異號而未比較交叉積大小。」。難度理由是「專門聚焦一次項符號陷阱。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s006-v009",
    "unitId": "u12",
    "skillId": "factoring-common-mistake-sign",
    "contentSha256": "4d626688380f9701e93340514ba0765fb6bd4d37bab207119152142bfac15458",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "兩個結果分別正確且一般不相等。",
    "derivedAnswer": "A=4x²-20x+25，B=(2x+5)(2x-5)",
    "storedAnswer": "A=4x²-20x+25，B=(2x+5)(2x-5)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「已知 A=(2x-5)²，B=4x²-25。下列敘述何者正確？」逐一展開或回代；正解「A=4x²-20x+25，B=(2x+5)(2x-5)」成立。「A=B，因為兩式都含 2x 與 5」不成立：形式相似不代表展開相同。；「A=(2x+5)(2x-5)，B=(2x-5)²」不成立：兩個公式對調。；「A=4x²+25，B=(2x-5)²」不成立：A 漏交叉項，B 公式錯。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分辨差的平方與平方差。」。",
      "unitConflict": "本題單位審查：無單位或近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位或近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：特殊 x 值可能偶然相等，不影響恆等式判斷。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分辨差的平方與平方差。」閱讀後，常見誤讀為「把 (a-b)² 與 a²-b² 混為一談。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "比較兩個高度相似公式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會兩種公式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s006-v009：兩個結果分別正確且一般不相等。 因此導出「A=4x²-20x+25，B=(2x+5)(2x-5)」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分辨差的平方與平方差。」，並特別排除「把 (a-b)² 與 a²-b² 混為一談。」。難度理由是「比較兩個高度相似公式。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s006-v010",
    "unitId": "u12",
    "skillId": "factoring-common-mistake-sign",
    "contentSha256": "70bf7cfe5891a0d66c27def041b29f0dfc76743d1ca7e36e00d784464671938e",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "修正版展開為 -12y+18。",
    "derivedAnswer": "括號內常數應為 -3",
    "storedAnswer": "括號內常數應為 -3",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「一份自動批改紀錄把 -12y+18 寫成 -6(2y+3)。系統應判定哪一項錯誤？」逐一展開或回代；正解「括號內常數應為 -3」成立。「括號外應為 +6」不成立：+6 無法同時得到首項 -12y 且括號首項 2y。；「2y 應改成 -2y」不成立：會使首項變成 +12y。；「沒有錯誤」不成立：原候選展開常數為 -18。",
      "undefinedSymbol": "題幹已給條件為「y 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「展開候選並比對常數符號。」。",
      "unitConflict": "本題單位審查：無實際單位；係數精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無實際單位；係數精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題幹只問哪一項錯誤，修正版唯一。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「展開候選並比對常數符號。」閱讀後，常見誤讀為「批改只看第一項符合就通過。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "情境要求定位自動批改規則的特定錯誤。",
    "literacyContextNecessity": "系統審核必須逐項展開，否則會把常數符號錯誤誤判為正確。",
    "prerequisiteCheck": "需會負公因式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s006-v010：修正版展開為 -12y+18。 因此導出「括號內常數應為 -3」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「展開候選並比對常數符號。」，並特別排除「批改只看第一項符合就通過。」。難度理由是「情境要求定位自動批改規則的特定錯誤。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s006-v011",
    "unitId": "u12",
    "skillId": "factoring-common-mistake-sign",
    "contentSha256": "04b51f19a5c6213fc5e2f7f6ec167f04c1937f2917f6a40e7a34c21aa512930e",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "結果保留淨調整方向，且括號首項 n 為正。",
    "derivedAnswer": "-3n(n-5)",
    "storedAnswer": "-3n(n-5)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「倉庫淨庫存調整式為 -3n²+15n。管理者想提出 -3n，使括號首項為正。正確表示為何？」逐一展開或回代；正解「-3n(n-5)」成立。「-3n(n+5)」不成立：第二項展開為 -15n。；「3n(-n-5)」不成立：第二項展開為 -15n。；「-3(n²-5n)」不成立：等值但未提出共同 n，不符合指定。",
      "undefinedSymbol": "題幹已給條件為「n 為正整數；負值代表減少。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「提出負共同因式。」。",
      "unitConflict": "本題單位審查：庫存單位件；n 為計數，乘積仍為件數模型。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；庫存單位件；n 為計數，乘積仍為件數模型。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：n>0，但 n-5 可正可負，反映淨調整方向而非實體負件數。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「提出負共同因式。」閱讀後，常見誤讀為「把原式第二項正號直接抄進括號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需同時遵守呈現條件與庫存帶號語意。",
    "literacyContextNecessity": "負號代表總調整方向，題目指定外層形式以便管理者讀取，情境影響符號配置。",
    "prerequisiteCheck": "需會帶號量與提公因式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s006-v011：結果保留淨調整方向，且括號首項 n 為正。 因此導出「-3n(n-5)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「提出負共同因式。」，並特別排除「把原式第二項正號直接抄進括號。」。難度理由是「需同時遵守呈現條件與庫存帶號語意。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s006-v012",
    "unitId": "u12",
    "skillId": "factoring-common-mistake-sign",
    "contentSha256": "99f35bed3f41c707f8a9989245748d60e009aa59020eb73111f0a58e4853f5d3",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開修正版回到原式。",
    "derivedAnswer": "不正確，應為 (a-d)(b-c)",
    "storedAnswer": "不正確，應為 (a-d)(b-c)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「一份工程報表將區域差式 a(b-c)+d(c-b) 合併為 (a+d)(b-c)。此合併是否正確？」逐一展開或回代；正解「不正確，應為 (a-d)(b-c)」成立。「正確，兩項都有 b-c」不成立：第二項原括號方向相反。；「不正確，應為 (a+d)(c-b)」不成立：第一項改成 c-b 時也要帶負號。；「不正確，因完全不能因式分解」不成立：可利用相反括號分解。",
      "undefinedSymbol": "題幹已給條件為「a、b、c、d 為參數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「利用 c-b=-(b-c) 判斷。」。",
      "unitConflict": "本題單位審查：參數可帶單位但各項須相容；題目抽象化且無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；參數可帶單位但各項須相容；題目抽象化且無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：不需假設 b>c；恆等關係對所有值成立。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「利用 c-b=-(b-c) 判斷。」閱讀後，常見誤讀為「把方向相反的差直接視為同一括號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "情境中的差值方向容易造成整體符號錯。",
    "literacyContextNecessity": "工程差值有方向，交換 b、c 會改號；情境使相反括號的判讀不可省略。",
    "prerequisiteCheck": "需會相反式與分組。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s006-v012：展開修正版回到原式。 因此導出「不正確，應為 (a-d)(b-c)」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「利用 c-b=-(b-c) 判斷。」，並特別排除「把方向相反的差直接視為同一括號。」。難度理由是「情境中的差值方向容易造成整體符號錯。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
