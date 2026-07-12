// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s007-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-basics",
  "skillId": "integer-absolute-value-distance",
  "title": "絕對值與距離：用 |a-b| 計算兩點間隔",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能計算兩整數在數線上的距離。",
    "能使用 |a-b| 且理解次序不影響距離。",
    "能求距離某點固定長度的兩個位置。",
    "能處理跨越 0 的溫差與高低差。",
    "能區分有方向的變化量與無方向的距離。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-absolute-value-basic",
      "requiredLevel": "能正確求絕對值，並把絕對值解讀成到 0 的距離。"
    }
  ],
  "glossary": [
    {
      "term": "兩點距離",
      "definition": "兩個坐標之間的長度，必為非負。"
    },
    {
      "term": "坐標差",
      "definition": "一個坐標減另一個坐標，可能帶正負。"
    },
    {
      "term": "絕對差",
      "definition": "坐標差取絕對值，表示不含方向的距離。"
    },
    {
      "term": "等距位置",
      "definition": "位於基準點兩側相同距離的位置。"
    }
  ],
  "notation": [
    {
      "symbol": "|a-b|",
      "meaning": "坐標 a 與 b 的距離。"
    },
    {
      "symbol": "|x-c|=d",
      "meaning": "x 與 c 的距離是 d。"
    },
    {
      "symbol": "d≥0",
      "meaning": "距離 d 不能為負。"
    }
  ],
  "conceptNarrative": [
    "兩點距離可想成數線上跨過的總長度。從 -4 到 5 會跨過 9 個單位。",
    "直接相減可能得到負數，所以要取絕對值：|-4-5|=|-9|=9。",
    "|a-b| 與 |b-a| 相等，因為方向相反但距離相同。",
    "|x-c|=d 表示以 c 為中心，向左與向右各 d 單位；d>0 時通常有兩個位置。"
  ],
  "formalDefinitions": [
    {
      "name": "兩點距離公式",
      "statement": "數線上坐標 a、b 的距離為 |a-b|。"
    },
    {
      "name": "距離對稱性",
      "statement": "|a-b|=|b-a|。"
    },
    {
      "name": "固定距離位置",
      "statement": "若 d>0，|x-c|=d 的解為 x=c+d 或 x=c-d。"
    }
  ],
  "formulas": [
    {
      "formula": "距離＝|a-b|",
      "conditions": [
        "a、b 使用相同單位"
      ],
      "meaning": "消除相減方向，只保留間隔。"
    },
    {
      "formula": "x=c±d",
      "conditions": [
        "|x-c|=d 且 d≥0"
      ],
      "meaning": "找基準點左右兩個等距位置。"
    }
  ],
  "nonApplicableCases": [
    "不能用 a+b 代替距離；兩點位於原點兩側時雖有時碰巧相同，但不是通則。",
    "距離沒有負值，若題目要求距離為 -2，條件不可能。",
    "「從 a 變到 b 的帶號變化」是 b-a，不等同於距離 |b-a|。",
    "溫差若問升高或降低，需要方向；只問相差多少才取絕對值。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "確認兩個位置及相同單位。",
      "check": "是否一個是公尺、一個是公分？"
    },
    {
      "step": 2,
      "instruction": "寫出一個坐標減另一個坐標。",
      "check": "負數是否用括號？"
    },
    {
      "step": 3,
      "instruction": "完成減法後取絕對值。",
      "check": "結果是否非負？"
    },
    {
      "step": 4,
      "instruction": "情境題判斷要距離還是帶號變化。",
      "check": "題目問「相差」還是「增加」？"
    },
    {
      "step": 5,
      "instruction": "等距方程向左右各走一次。",
      "check": "是否漏掉其中一個位置？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "求 -6 與 2 的距離。",
      "solutionSteps": [
        "寫 |-6-2|。",
        "|-8|=8。",
        "距離為 8。"
      ],
      "answer": "8。"
    },
    {
      "exampleId": "L2",
      "prompt": "清晨 -3°C、中午 7°C，溫差多少？",
      "solutionSteps": [
        "溫差是不分方向的距離。",
        "|7-(-3)|=|10|。",
        "結果 10°C。"
      ],
      "answer": "10°C。"
    },
    {
      "exampleId": "L3",
      "prompt": "距離 4 的位置與 1 相距 6，求位置。",
      "solutionSteps": [
        "設位置 x，|x-1|=6。",
        "向右 1+6=7。",
        "向左 1-6=-5。"
      ],
      "answer": "7 或 -5。"
    },
    {
      "exampleId": "L4",
      "prompt": "從 -2 移到 -9，變化量與距離各多少？",
      "solutionSteps": [
        "變化量=-9-(-2)=-7，表示向負方向 7。",
        "距離=|-7|=7。",
        "兩者大小相同但是否帶方向不同。"
      ],
      "answer": "變化量 -7；距離 7。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 -4 與 5 的距離算成 1。",
      "why": "錯用兩數相加。",
      "correction": "使用 |5-(-4)|=9。"
    },
    {
      "mistake": "得到 -9 就把距離寫 -9。",
      "why": "忘記距離非負。",
      "correction": "取絕對值得 9。"
    },
    {
      "mistake": "負數相減漏括號。",
      "why": "把 5-(-4) 寫成 5-4。",
      "correction": "負數必須保留括號。"
    },
    {
      "mistake": "把變化量和距離混為一談。",
      "why": "忽略方向資訊。",
      "correction": "變化量可負，距離不可負。"
    },
    {
      "mistake": "解 |x-2|=3 只寫 x=5。",
      "why": "只向右移。",
      "correction": "還要向左得 x=-1。"
    },
    {
      "mistake": "不同單位直接相減。",
      "why": "未統一尺度。",
      "correction": "先換成同一單位。"
    }
  ],
  "selfCheck": [
    "兩點單位相同嗎？",
    "負數相減有括號嗎？",
    "題目問距離還是變化？",
    "距離答案非負嗎？",
    "固定距離是否有左右兩個位置？"
  ],
  "summary": [
    "數線距離為 |a-b|。",
    "相減次序不影響取絕對值後的距離。",
    "距離無方向，變化量有方向。",
    "|x-c|=d 對應 c 左右各 d。"
  ],
  "connections": {
    "previous": "先備技能是絕對值基本意義。",
    "next": [
      "整數加減會計算有方向的位移。",
      "素養題常用溫差、高低差與帳戶差額。",
      "坐標幾何將把距離概念推廣到平面。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s007-v001",
      "u01-s007-v002",
      "u01-s007-v003",
      "u01-s007-v004",
      "u01-s007-v005",
      "u01-s007-v006",
      "u01-s007-v007",
      "u01-s007-v008",
      "u01-s007-v009",
      "u01-s007-v010",
      "u01-s007-v011",
      "u01-s007-v012"
    ],
    "constructedResponseIds": [
      "u01-s007-cr001",
      "u01-s007-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "重新計算每一組 |a-b|，分開核對帶號變化、兩點距離和分段總路程，避免把距離寫成負數。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "4df73d7e7db050fce587653f0015c66f314a8e56018ae218115831645bdbae95"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s007-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上 -3 與 0 的距離是多少？",
    "choices": [
      "3",
      "-3",
      "0",
      "6"
    ],
    "answerIndex": 0,
    "explanation": "距離為 |-3-0|=3。",
    "steps": [
      "寫坐標差-3。",
      "取絕對值。",
      "得3。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": true,
        "reason": "|-3|=3。"
      },
      {
        "choice": "-3",
        "truth": false,
        "reason": "距離不可負。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "兩點不重合。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "是-3與3的距離。"
      }
    ],
    "commonMistake": "把左側坐標 -3 當作負距離。",
    "concept": "距離是坐標差的絕對值。",
    "tags": [
      "數與量",
      "絕對值與距離",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-basic"
    ],
    "authoringIntent": "求點到原點的距離。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f5216a3009c4ddfb51fc2ae1188bee923ec9f3eb2474232c268c6438817c7134"
  },
  {
    "questionId": "u01-s007-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上 2 與 7 的距離是多少？",
    "choices": [
      "9",
      "5",
      "-5",
      "3"
    ],
    "answerIndex": 1,
    "explanation": "|7-2|=5。",
    "steps": [
      "用較大坐標減較小坐標。",
      "7-2=5。",
      "距離5。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": false,
        "reason": "把兩坐標相加。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "|7-2|=5。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "距離不可負。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "算術錯。"
      }
    ],
    "commonMistake": "用2+7計算距離。",
    "concept": "同側兩點距離為坐標差的絕對值。",
    "tags": [
      "數與量",
      "絕對值與距離",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-basic"
    ],
    "authoringIntent": "求兩個正坐標距離。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ecc21daf8a6f92acff56e017ffe3f2a94475e77276b0d3807aa0921f808f2c3a"
  },
  {
    "questionId": "u01-s007-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-6 與 4 的距離可寫成下列哪一個算式及結果？",
    "choices": [
      "|-6+4|=2",
      "|-6|-|4|=2",
      "|-6-4|=10",
      "-6-4=-10"
    ],
    "answerIndex": 2,
    "explanation": "兩點距離為 |-6-4|=|-10|=10。",
    "steps": [
      "寫一坐標減另一坐標。",
      "-6-4=-10。",
      "取絕對值得10。"
    ],
    "optionAnalysis": [
      {
        "choice": "|-6+4|=2",
        "truth": false,
        "reason": "得到2不是兩點距離。"
      },
      {
        "choice": "|-6|-|4|=2",
        "truth": false,
        "reason": "絕對值相減不是距離公式。"
      },
      {
        "choice": "|-6-4|=10",
        "truth": true,
        "reason": "|-6-4|=10。"
      },
      {
        "choice": "-6-4=-10",
        "truth": false,
        "reason": "未取絕對值且結果為負。"
      }
    ],
    "commonMistake": "把跨越0的距離算成6-4=2。",
    "concept": "跨過0時距離是兩側距離相加，等同絕對差。",
    "tags": [
      "數與量",
      "絕對值與距離",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-basic"
    ],
    "authoringIntent": "選出正確距離公式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c1789062c2a1520be7c9bacd29df6efd5e1a2fef2e8cea765835894732d04adb"
  },
  {
    "questionId": "u01-s007-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "fig-u01-s007-v004",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "依圖，點 M=-4、N=5。MN 的距離是多少？",
    "choices": [
      "1",
      "-9",
      "10",
      "9"
    ],
    "answerIndex": 3,
    "explanation": "MN=|5-(-4)|=|9|=9。",
    "steps": [
      "讀出M=-4,N=5。",
      "計算5-(-4)=9。",
      "距離9。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "錯把5與4相減。"
      },
      {
        "choice": "-9",
        "truth": false,
        "reason": "距離不可負。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "多算一單位。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "|5-(-4)|=9。"
      }
    ],
    "commonMistake": "跨過0時只用絕對值大減小得到1。",
    "concept": "跨零距離等於兩端到0距離之和。",
    "tags": [
      "數與量",
      "絕對值與距離",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-basic"
    ],
    "authoringIntent": "由圖讀取兩點並計算跨零距離。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "299f6437bce570eae6c0a0e5ec7639113e5990a55f41dc6920107c5a5d6610d1"
  },
  {
    "questionId": "u01-s007-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "與坐標 2 的距離為 6 的點有哪些？",
    "choices": [
      "-4 與 8",
      "-8 與 4",
      "-6 與 6",
      "只有 8"
    ],
    "answerIndex": 0,
    "explanation": "從2向左6得到-4，向右6得到8。",
    "steps": [
      "固定中心2。",
      "2-6=-4。",
      "2+6=8。"
    ],
    "optionAnalysis": [
      {
        "choice": "-4 與 8",
        "truth": true,
        "reason": "2±6=-4,8。"
      },
      {
        "choice": "-8 與 4",
        "truth": false,
        "reason": "以0為中心錯誤。"
      },
      {
        "choice": "-6 與 6",
        "truth": false,
        "reason": "把中心忽略。"
      },
      {
        "choice": "只有 8",
        "truth": false,
        "reason": "漏掉左側位置。"
      }
    ],
    "commonMistake": "只向右走得到8。",
    "concept": "距離固定時有中心左右兩個位置。",
    "tags": [
      "數與量",
      "絕對值與距離",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-basic"
    ],
    "authoringIntent": "由中心與距離找等距點。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "92e5ae48ef04b01202d9a521b05a361f290de47e6637ce7b358416308348cdb7"
  },
  {
    "questionId": "u01-s007-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "溫度從 -8°C 變成 -2°C，若只問兩次溫度相差多少，答案是多少？",
    "choices": [
      "-6°C",
      "6°C",
      "10°C",
      "-10°C"
    ],
    "answerIndex": 1,
    "explanation": "相差多少使用距離：|-2-(-8)|=|6|=6°C。",
    "steps": [
      "後值減前值6。",
      "取絕對值。",
      "差距6°C。"
    ],
    "optionAnalysis": [
      {
        "choice": "-6°C",
        "truth": false,
        "reason": "帶號變化不是無方向差距。"
      },
      {
        "choice": "6°C",
        "truth": true,
        "reason": "|-2+8|=6°C。"
      },
      {
        "choice": "10°C",
        "truth": false,
        "reason": "把絕對值相加。"
      },
      {
        "choice": "-10°C",
        "truth": false,
        "reason": "錯誤符號與大小。"
      }
    ],
    "commonMistake": "看到兩個負溫度就把8與2相加。",
    "concept": "同側負數的距離是絕對值之差。",
    "tags": [
      "數與量",
      "絕對值與距離",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-basic"
    ],
    "authoringIntent": "從負溫度求無方向差距。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "97a715e8c68dcfb725a65f7a993a1fe161d77b53f5e5a7c0e82c62ad68af70db"
  },
  {
    "questionId": "u01-s007-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解方程 |x+3|=4。",
    "choices": [
      "x=1",
      "x=-7",
      "x=1 或 x=-7",
      "x=7 或 x=-1"
    ],
    "answerIndex": 2,
    "explanation": "|x+3|=|x-(-3)|，表示 x 與 -3 的距離為4，所以 x=-3+4=1 或 -3-4=-7。",
    "steps": [
      "辨認中心-3。",
      "向右4得1。",
      "向左4得-7。"
    ],
    "optionAnalysis": [
      {
        "choice": "x=1",
        "truth": false,
        "reason": "漏掉左側解。"
      },
      {
        "choice": "x=-7",
        "truth": false,
        "reason": "漏掉右側解。"
      },
      {
        "choice": "x=1 或 x=-7",
        "truth": true,
        "reason": "x=-3±4=1,-7。"
      },
      {
        "choice": "x=7 或 x=-1",
        "truth": false,
        "reason": "中心符號讀錯。"
      }
    ],
    "commonMistake": "把中心誤看成+3。",
    "concept": "|x-c|=d的中心是c；x+3=x-(-3)。",
    "tags": [
      "數與量",
      "絕對值與距離",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-basic"
    ],
    "authoringIntent": "解含負中心的距離方程。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fa645aecdd7296a05ee9d1c79e4c3f95d96e861ec4ee6912d1c47f24bac08371"
  },
  {
    "questionId": "u01-s007-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上三點 A=-6、B=2、C=5。哪一對距離最短？",
    "choices": [
      "A、B",
      "A、C",
      "三對相同",
      "B、C"
    ],
    "answerIndex": 3,
    "explanation": "AB=8，AC=11，BC=3，因此 B、C 最短。",
    "steps": [
      "分別算三對距離。",
      "得到8,11,3。",
      "最小為3。"
    ],
    "optionAnalysis": [
      {
        "choice": "A、B",
        "truth": false,
        "reason": "距離8。"
      },
      {
        "choice": "A、C",
        "truth": false,
        "reason": "距離11。"
      },
      {
        "choice": "三對相同",
        "truth": false,
        "reason": "不相同。"
      },
      {
        "choice": "B、C",
        "truth": true,
        "reason": "AB8,AC11,BC3，選BC。"
      }
    ],
    "commonMistake": "只看A的絕對值最大就猜含A的距離。",
    "concept": "比較多對距離需逐對計算絕對差。",
    "tags": [
      "數與量",
      "絕對值與距離",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-basic"
    ],
    "authoringIntent": "在三點中比較所有成對距離。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8eb5c1549898d38577b4f22686b5491e3f8641baddb0e860d3b9dd54566b4931"
  },
  {
    "questionId": "u01-s007-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上 A=-4、B=3、C=-1。依序從 A 走到 B，再走到 C，總路程是多少？",
    "choices": [
      "11",
      "4",
      "3",
      "7"
    ],
    "answerIndex": 0,
    "explanation": "AB=|3-(-4)|=7，BC=|-1-3|=4，總路程=11。",
    "steps": [
      "算第一段7。",
      "算第二段4。",
      "相加11。"
    ],
    "optionAnalysis": [
      {
        "choice": "11",
        "truth": true,
        "reason": "7+4=11。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "只算起終點距離3。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "把兩段抵消。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "只算第一段。"
      }
    ],
    "commonMistake": "用起點A到終點C的距離3代替實際走過兩段路程。",
    "concept": "總路程是各段距離相加，不等於淨位移。",
    "tags": [
      "數與量",
      "絕對值與距離",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-absolute-value-basic"
    ],
    "authoringIntent": "區分路程與起終點距離。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2b23c0816b5fcfbab251c63b4bacb2d853f156795abebeb15451db769da71367"
  },
  {
    "questionId": "u01-s007-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "fig-u01-s007-v010",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "依圖，清晨溫度為 -6°C，中午為 3°C。當天由清晨到中午的溫差是多少？",
    "choices": [
      "-9°C",
      "9°C",
      "3°C",
      "6°C"
    ],
    "answerIndex": 1,
    "explanation": "溫差=|3-(-6)|=9°C。",
    "steps": [
      "讀圖得到-6與3。",
      "計算3+6=9。",
      "溫差不帶負號。"
    ],
    "optionAnalysis": [
      {
        "choice": "-9°C",
        "truth": false,
        "reason": "差距不可負。"
      },
      {
        "choice": "9°C",
        "truth": true,
        "reason": "|3-(-6)|=9°C。"
      },
      {
        "choice": "3°C",
        "truth": false,
        "reason": "只抄中午溫度。"
      },
      {
        "choice": "6°C",
        "truth": false,
        "reason": "只取清晨絕對值。"
      }
    ],
    "commonMistake": "把3與6相減得到3，忽略兩溫度分居0兩側。",
    "concept": "跨越0的溫差為兩側距離之和。",
    "tags": [
      "數與量",
      "絕對值與距離",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-absolute-value-basic"
    ],
    "authoringIntent": "由溫度圖求跨零溫差。",
    "literacyContextNecessity": "圖中的兩時段溫度與問題「溫差」共同決定絕對差。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "087a697f64afaf4ff60c2266f35d36b8d83d56a9d07815ff4bd186688ddbca10"
  },
  {
    "questionId": "u01-s007-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "礦坑入口高度記為 0 公尺。作業平台在 -48 公尺，救援站在 -15 公尺。兩處垂直距離是多少？",
    "choices": [
      "-63 公尺",
      "63 公尺",
      "33 公尺",
      "-33 公尺"
    ],
    "answerIndex": 2,
    "explanation": "|-48-(-15)|=|-33|=33 公尺。",
    "steps": [
      "兩處都在入口下方。",
      "算坐標差-33。",
      "取絕對值33。"
    ],
    "optionAnalysis": [
      {
        "choice": "-63 公尺",
        "truth": false,
        "reason": "距離不可負且大小錯。"
      },
      {
        "choice": "63 公尺",
        "truth": false,
        "reason": "把兩深度相加。"
      },
      {
        "choice": "33 公尺",
        "truth": true,
        "reason": "|-48+15|=33公尺。"
      },
      {
        "choice": "-33 公尺",
        "truth": false,
        "reason": "距離不可負。"
      }
    ],
    "commonMistake": "兩個負高度就把48與15相加成63。",
    "concept": "同一側兩點距離為深度差。",
    "tags": [
      "數與量",
      "絕對值與距離",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-absolute-value-basic"
    ],
    "authoringIntent": "比較地下兩設施的垂直間隔。",
    "literacyContextNecessity": "入口基準與兩處負高度共同決定同側距離。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "80bd4324903991f7237e9599176eaaabe2214f11935db9072e9c46cc10493b61"
  },
  {
    "questionId": "u01-s007-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某帳戶餘額由 -240 元變成 130 元。若銀行只問兩次餘額相差多少，答案為何？",
    "choices": [
      "-370 元",
      "110 元",
      "240 元",
      "370 元"
    ],
    "answerIndex": 3,
    "explanation": "|130-(-240)|=370 元。",
    "steps": [
      "後值減前值130+240。",
      "得到370。",
      "相差多少不帶方向。"
    ],
    "optionAnalysis": [
      {
        "choice": "-370 元",
        "truth": false,
        "reason": "距離不可負。"
      },
      {
        "choice": "110 元",
        "truth": false,
        "reason": "把絕對值相減。"
      },
      {
        "choice": "240 元",
        "truth": false,
        "reason": "只取原負餘額大小。"
      },
      {
        "choice": "370 元",
        "truth": true,
        "reason": "|130+240|=370元。"
      }
    ],
    "commonMistake": "計算240-130=110，沒有把-240視為負坐標。",
    "concept": "負餘額到正餘額的距離跨越0。",
    "tags": [
      "數與量",
      "絕對值與距離",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-absolute-value-basic"
    ],
    "authoringIntent": "由帳戶負轉正求餘額差距。",
    "literacyContextNecessity": "兩次餘額及「相差多少」措辭決定使用絕對差。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "859f35c4357cd18ce6fdaac21d2eaa241ff4159483563d6719a6026ade0347c3"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s007-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "數線上 A=-8、B=4。求 AB 距離；再找出所有與 B 相距 5 的整數坐標。",
    "requiredWork": [
      "使用絕對差求AB。",
      "固定中心B=4向左右各5。"
    ],
    "fullCreditSolution": [
      "AB=|4-(-8)|=12。",
      "與B相距5的坐標為4-5=-1與4+5=9。"
    ],
    "alternativeSolutions": [
      "可用數線計數得到相同結果。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "AB=12且兩坐標-1、9全部正確。"
      },
      {
        "score": 2,
        "criteria": "方法正確但一個小算術錯；或距離與其中一點正確。"
      },
      {
        "score": 1,
        "criteria": "正確完成其中一個主要要求。"
      },
      {
        "score": 0,
        "criteria": "把距離寫負或只給無關坐標。"
      }
    ],
    "scoringNotes": [
      "兩個等距點都必須列出。"
    ],
    "commonErrors": [
      "AB算4。",
      "只寫9。",
      "把中心當0。"
    ],
    "independentReview": {
      "derivedResult": "AB=12；坐標-1與9。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "75042156c04accba0983c866e1257b5c55c48f6ab880e0c7e6952a5a051aade7"
  },
  {
    "questionId": "u01-s007-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-distance",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "甲從 -5 出發，先走到 6，再返回 -2。求總路程與從起點到終點的距離，並說明兩者為什麼不同。",
    "requiredWork": [
      "分段計算路程。",
      "另算起終點距離。",
      "文字區分走過路線與淨距離。"
    ],
    "fullCreditSolution": [
      "第一段|-5到6|=11，第二段|6到-2|=8，總路程19。",
      "起點-5到終點-2的距離=3。",
      "總路程累加每一段；起終點距離只看最初與最後位置，因此不同。"
    ],
    "alternativeSolutions": [
      "可畫數線標出往返路徑。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "總路程19、起終距離3與差異解釋完整。"
      },
      {
        "score": 2,
        "criteria": "兩數值正確但解釋不完整；或方法正確有一個小錯。"
      },
      {
        "score": 1,
        "criteria": "正確算出其中一個量並知道應分段。"
      },
      {
        "score": 0,
        "criteria": "用|-2-(-5)|=3同時當總路程，未理解返回路徑。"
      }
    ],
    "scoringNotes": [
      "總路程不因方向相反而抵消。"
    ],
    "commonErrors": [
      "只算3。",
      "第二段用6-2=4。",
      "把總路程寫負。"
    ],
    "independentReview": {
      "derivedResult": "總路程19；起終距離3。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "178a73462a5b09b5544f057d762d79505ca665c46b53061c772c6f7762ef852b"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "fig-u01-s007-v004",
    "unitId": "u01",
    "skillId": "integer-absolute-value-distance",
    "altText": "數線上兩點 M=-4、N=5，兩點間跨越 9 個單位。",
    "drawingSpec": {
      "canvas": "820×240，viewBox 0 0 820 240",
      "axis": "水平數線從 -5 到 6，每格 1",
      "points": "M 位於 -4，N 位於 5，皆為實心圓",
      "distanceMark": "在軸上方以雙向箭頭由 M 指向 N，標示「距離？」而不寫 9",
      "labels": "M、N 標在點上方 18 像素；整數坐標標在數線下方。",
      "lineStyle": "數線實線；距離輔助線為 2 像素實線雙箭頭；不得使用會暗示答案的分段著色",
      "accessibility": "距離等於 |5-(-4)|，即 9"
    },
    "svgPath": "figures/u01/fig-u01-s007-v004.svg",
    "reviewStatus": "independently-reviewed",
    "svgAssertions": [
      "<circle cx=\"140\" cy=\"130\"",
      "<circle cx=\"680\" cy=\"130\"",
      ">M</text>",
      ">N</text>",
      ">距離？</text>"
    ],
    "figureReview": {
      "reviewVersion": "human-figure-review-r2.1",
      "coordinateAndScaleCheck": "pass",
      "labelPlacementCheck": "pass",
      "solidDashedLineCheck": "pass",
      "questionConsistencyCheck": "pass",
      "answerLeakCheck": "pass",
      "mobileReadabilityCheck": "pass at 360 CSS px width",
      "accessibilityCheck": "pass: SVG title, desc, role=img and equivalent altText present",
      "reviewNote": "M=-4 與 N=5 的刻度相差 9 格；上方雙向箭頭只標「距離？」而未寫答案 9，M、N 標籤在點上方、坐標在軸下。",
      "reviewedAt": "2026-07-12",
      "decision": "pass"
    },
    "contentSha256": "113dc6927e2a6426a7458b3465afc93e16a48694e51024d986d6bb208df181cc"
  },
  {
    "figureId": "fig-u01-s007-v010",
    "unitId": "u01",
    "skillId": "integer-absolute-value-distance",
    "altText": "溫度刻度上，清晨為 -6°C，中午為 3°C；兩標記相距 9°C。",
    "drawingSpec": {
      "canvas": "760×250，viewBox 0 0 760 250",
      "axis": "水平溫度刻度 -8°C 到 5°C，每格 1°C",
      "markers": "清晨標在 -6°C，中午標在 3°C；以不同形狀但不依賴顏色區分",
      "labels": "清晨使用實心圓及文字；中午使用實心方形及文字",
      "distance": "不在圖中標出數值差，只呈現位置",
      "lineStyle": "全部實線；零度刻度加粗",
      "accessibility": "文字說明清晨 -6°C、中午 3°C，溫差為 |3-(-6)|"
    },
    "svgPath": "figures/u01/fig-u01-s007-v010.svg",
    "reviewStatus": "independently-reviewed",
    "svgAssertions": [
      "<circle cx=\"165.3846\" cy=\"130\"",
      ">清晨 -6°C</text>",
      "<rect x=\"588.0769\" y=\"123\"",
      ">中午 3°C</text>"
    ],
    "figureReview": {
      "reviewVersion": "human-figure-review-r2.1",
      "coordinateAndScaleCheck": "pass",
      "labelPlacementCheck": "pass",
      "solidDashedLineCheck": "pass",
      "questionConsistencyCheck": "pass",
      "answerLeakCheck": "pass",
      "mobileReadabilityCheck": "pass at 360 CSS px width",
      "accessibilityCheck": "pass: SVG title, desc, role=img and equivalent altText present",
      "reviewNote": "清晨圓點對齊 -6°C，中午方形對齊 3°C；兩標記以形狀區分而不依賴顏色，圖中未標示溫差 9°C。",
      "reviewedAt": "2026-07-12",
      "decision": "pass"
    },
    "contentSha256": "ca3f711144b44ef38a979e8ea0d9f70a150c9f1df1603e8afc69a9a5d369fd3a"
  }
];
