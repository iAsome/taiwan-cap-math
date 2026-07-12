// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s005-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-basics",
  "skillId": "integer-opposite-number",
  "title": "相反數：關於原點對稱且和為 0",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能求任意整數的相反數。",
    "能解釋相反數在數線上的對稱關係。",
    "能正確處理負數外再加負號。",
    "能利用相反數和為 0 解題。",
    "能辨認 0 的相反數仍是 0。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-number-comparison",
      "requiredLevel": "能比較整數大小，並辨認原點兩側等距的位置。"
    }
  ],
  "glossary": [
    {
      "term": "相反數",
      "definition": "與原數距離 0 相同、方向相反的數。"
    },
    {
      "term": "關於原點對稱",
      "definition": "兩點分居 0 的兩側且離 0 等距。"
    },
    {
      "term": "互為相反數",
      "definition": "兩數相加為 0，例如 6 與 -6。"
    },
    {
      "term": "負號運算",
      "definition": "數前的負號表示取該數的相反數。"
    }
  ],
  "notation": [
    {
      "symbol": "-a",
      "meaning": "a 的相反數；若 a=-4，則 -a=4。"
    },
    {
      "symbol": "a+(-a)=0",
      "meaning": "一個數和它的相反數相加為 0。"
    },
    {
      "symbol": "-(-a)=a",
      "meaning": "連續取兩次相反數會回到原數。"
    }
  ],
  "conceptNarrative": [
    "相反數不是「一定變成負數」，而是改變方向。正數的相反數為負，負數的相反數為正。",
    "在數線上，a 與 -a 關於原點對稱，所以兩者到 0 的距離相同。",
    "0 沒有左右方向，取相反數後仍是 0，因此 0 是自己的相反數。",
    "符號 -(-8) 的外層負號表示取 -8 的相反數，結果是 8，不能只把兩個負號機械刪除而不理解。"
  ],
  "formalDefinitions": [
    {
      "name": "相反數",
      "statement": "若兩數的和為 0，則它們互為相反數。"
    },
    {
      "name": "唯一性",
      "statement": "每一個數都有且只有一個相反數。"
    },
    {
      "name": "零的相反數",
      "statement": "0 的相反數是 0。"
    }
  ],
  "formulas": [
    {
      "formula": "a 的相反數＝-a",
      "conditions": [
        "a 可為正、負或 0"
      ],
      "meaning": "改變原數方向。"
    },
    {
      "formula": "a+(-a)=0",
      "conditions": [
        "兩數確實互為相反數"
      ],
      "meaning": "檢查相反數。"
    }
  ],
  "nonApplicableCases": [
    "倒數與相反數不同；2 的相反數是 -2，倒數是 1/2。",
    "絕對值與相反數不同；|-5|=5，而 -(-5)=5，兩式在此同值但意義不同。",
    "若原數是代數式，負號要作用於整個式子；本單元只做基礎辨認。",
    "不能說「0 沒有相反數」，因為 0+0=0。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "確定原數完整內容。",
      "check": "負號是否屬於原數本身？"
    },
    {
      "step": 2,
      "instruction": "把方向改成相反。",
      "check": "正變負、負變正、0 不變。"
    },
    {
      "step": 3,
      "instruction": "必要時加括號再處理。",
      "check": "-(-8) 是否先看內層 -8？"
    },
    {
      "step": 4,
      "instruction": "用和為 0 檢查。",
      "check": "原數加答案是否等於 0？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "求 13 的相反數。",
      "solutionSteps": [
        "13 位於 0 右側 13 單位。",
        "對稱位置在左側 13 單位。",
        "坐標是 -13。"
      ],
      "answer": "-13。"
    },
    {
      "exampleId": "L2",
      "prompt": "求 -9 的相反數。",
      "solutionSteps": [
        "-9 位於 0 左側 9 單位。",
        "對稱到右側 9 單位。",
        "結果為 9。"
      ],
      "answer": "9。"
    },
    {
      "exampleId": "L3",
      "prompt": "化簡 -(-12)。",
      "solutionSteps": [
        "內層數是 -12。",
        "外層負號表示取其相反數。",
        "-12 的相反數是 12。"
      ],
      "answer": "12。"
    },
    {
      "exampleId": "L4",
      "prompt": "已知 x 與 -7 互為相反數，求 x。",
      "solutionSteps": [
        "互為相反數的和為 0。",
        "x+(-7)=0。",
        "x=7。"
      ],
      "answer": "7。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 5 的相反數寫成 1/5。",
      "why": "混淆相反數與倒數。",
      "correction": "相反數是 -5。"
    },
    {
      "mistake": "把 -6 的相反數寫成 -6。",
      "why": "認為相反數一定帶負號。",
      "correction": "改變方向後是 6。"
    },
    {
      "mistake": "認為 0 沒有相反數。",
      "why": "只想到正負成對。",
      "correction": "0+0=0，所以 0 的相反數是 0。"
    },
    {
      "mistake": "把 -(-4) 算成 -4。",
      "why": "忽略外層負號。",
      "correction": "外層取相反數，結果 4。"
    },
    {
      "mistake": "只看絕對值就說互為相反數。",
      "why": "同距離還需方向相反。",
      "correction": "例如 4 和 4 絕對值相同但不是互為相反數。"
    },
    {
      "mistake": "用乘積為 1 檢查相反數。",
      "why": "那是倒數的檢查。",
      "correction": "相反數用和為 0 檢查。"
    }
  ],
  "selfCheck": [
    "原數是正、負還是 0？",
    "我是否改變方向而非取倒數？",
    "括號中的負號有處理嗎？",
    "原數與答案相加等於 0 嗎？"
  ],
  "summary": [
    "a 的相反數是 -a。",
    "相反數在數線上關於 0 對稱。",
    "互為相反數的兩數和為 0。",
    "0 的相反數仍是 0。"
  ],
  "connections": {
    "previous": "先備技能是數的大小比較與數線位置。",
    "next": [
      "絕對值會比較相反數到 0 的共同距離。",
      "整數加法中相反數相加可直接得到 0。",
      "減去一個數可改寫成加上它的相反數。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s005-v001",
      "u01-s005-v002",
      "u01-s005-v003",
      "u01-s005-v004",
      "u01-s005-v005",
      "u01-s005-v006",
      "u01-s005-v007",
      "u01-s005-v008",
      "u01-s005-v009",
      "u01-s005-v010",
      "u01-s005-v011",
      "u01-s005-v012"
    ],
    "constructedResponseIds": [
      "u01-s005-cr001",
      "u01-s005-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "用「相加為 0」和原點對稱兩種方法重算全部例題，並確認 0 的相反數仍為 0、相反數不等於倒數。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "4cc92fbe0bfb35b7c5bf34d3840a0e98c3df080e4d0cf9ae13e57b599d432eb5"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s005-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "7 的相反數是多少？",
    "choices": [
      "-7",
      "7",
      "1/7",
      "0"
    ],
    "answerIndex": 0,
    "explanation": "相反數與原數相加為 0，因此 7 的相反數是 -7。",
    "steps": [
      "原數7為正。",
      "改到0另一側同距離。",
      "得到-7。"
    ],
    "optionAnalysis": [
      {
        "choice": "-7",
        "truth": true,
        "reason": "7+(-7)=0。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "是原數本身。"
      },
      {
        "choice": "1/7",
        "truth": false,
        "reason": "是倒數。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "與7相加不為0。"
      }
    ],
    "commonMistake": "把相反數誤寫成倒數1/7。",
    "concept": "a的相反數是-a。",
    "tags": [
      "數與量",
      "相反數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "求正整數的相反數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7b4f8bb2d9bbd542f8d06dd8b70b208a10831dc5df8aa4a24ce11d356b972029"
  },
  {
    "questionId": "u01-s005-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-12 的相反數是多少？",
    "choices": [
      "-12",
      "12",
      "1/12",
      "0"
    ],
    "answerIndex": 1,
    "explanation": "-12 位於 0 左側 12 單位，其對稱位置是 12。",
    "steps": [
      "原數為-12。",
      "方向改成正。",
      "結果12。"
    ],
    "optionAnalysis": [
      {
        "choice": "-12",
        "truth": false,
        "reason": "未改方向。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "-12+12=0。"
      },
      {
        "choice": "1/12",
        "truth": false,
        "reason": "不是倒數。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "距離不符。"
      }
    ],
    "commonMistake": "認為相反數一定帶負號。",
    "concept": "負數的相反數是對應正數。",
    "tags": [
      "數與量",
      "相反數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "求負整數的相反數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fa99159394c0e7ebff8820cd36e982995193631b12dbdfcfb67cdacc9eff9b34"
  },
  {
    "questionId": "u01-s005-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "0 的相反數是多少？",
    "choices": [
      "不存在",
      "1",
      "0",
      "-1"
    ],
    "answerIndex": 2,
    "explanation": "0 與自己相加仍為 0，因此 0 的相反數是 0。",
    "steps": [
      "相反數需與原數和為0。",
      "0+0=0。",
      "所以是0。"
    ],
    "optionAnalysis": [
      {
        "choice": "不存在",
        "truth": false,
        "reason": "每個數都有相反數。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "0+1不為0。"
      },
      {
        "choice": "0",
        "truth": true,
        "reason": "0+0=0，故0。"
      },
      {
        "choice": "-1",
        "truth": false,
        "reason": "0+(-1)不為0。"
      }
    ],
    "commonMistake": "認為相反數一定成正負一對，所以0沒有相反數。",
    "concept": "0是自己的相反數。",
    "tags": [
      "數與量",
      "相反數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "辨認相反數的邊界情況。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3b2ae9fa6139ba57e3f0e01be90db8c454abd734e13ece6bd46445e75eab61c9"
  },
  {
    "questionId": "u01-s005-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "化簡 -(-8) 的結果為何？",
    "choices": [
      "-16",
      "-8",
      "0",
      "8"
    ],
    "answerIndex": 3,
    "explanation": "外層負號表示取 -8 的相反數，所以結果是 8。",
    "steps": [
      "內層數是-8。",
      "取它的相反數。",
      "得到8。"
    ],
    "optionAnalysis": [
      {
        "choice": "-16",
        "truth": false,
        "reason": "把兩數相加。"
      },
      {
        "choice": "-8",
        "truth": false,
        "reason": "忽略外層負號。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "誤認互相抵消成0。"
      },
      {
        "choice": "8",
        "truth": true,
        "reason": "-8的相反數為8。"
      }
    ],
    "commonMistake": "看到兩個負號就不分層次地寫0。",
    "concept": "連續取兩次相反數回到原數。",
    "tags": [
      "數與量",
      "相反數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "處理負號套在負數外。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "dc282db7650d2299459ec5384ce1ef57cdb977d4b0960ca4e03620fd1552bd50"
  },
  {
    "questionId": "u01-s005-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一組數互為相反數？",
    "choices": [
      "-15 與 15",
      "-5 與 1/5",
      "0 與 1",
      "8 與 8"
    ],
    "answerIndex": 0,
    "explanation": "-15+15=0，因此互為相反數。其他各組和不為 0。",
    "steps": [
      "逐組相加。",
      "只有第一組和為0。",
      "選第一項。"
    ],
    "optionAnalysis": [
      {
        "choice": "-15 與 15",
        "truth": true,
        "reason": "四組和依序0,-4.8,1,16，只有第一組。"
      },
      {
        "choice": "-5 與 1/5",
        "truth": false,
        "reason": "這組接近倒數概念。"
      },
      {
        "choice": "0 與 1",
        "truth": false,
        "reason": "和為1。"
      },
      {
        "choice": "8 與 8",
        "truth": false,
        "reason": "和為16。"
      }
    ],
    "commonMistake": "選 -5 與 1/5，混淆相反數和倒數。",
    "concept": "互為相反數的兩數和為0。",
    "tags": [
      "數與量",
      "相反數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "用和為0辨認數對。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "557dcd5da54064f2acf2c47fe2c732c65cde5f766bcf53df5f3e89074ad77649"
  },
  {
    "questionId": "u01-s005-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 a 的相反數是 -5，則 a 等於多少？",
    "choices": [
      "-5",
      "5",
      "0",
      "10"
    ],
    "answerIndex": 1,
    "explanation": "a 與 -5 相加為 0，所以 a=5。",
    "steps": [
      "寫a+(-5)=0。",
      "a=5。",
      "用5與-5相加檢查。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5",
        "truth": false,
        "reason": "-5的相反數不是自己。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "a-5=0，因此a=5。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "0與-5不互為相反數。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "10與-5和不為0。"
      }
    ],
    "commonMistake": "直接抄題目中的 -5 當 a。",
    "concept": "若-a已知，可用和為0回推原數。",
    "tags": [
      "數與量",
      "相反數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "由相反數反求原數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1ed6fdb2e726062cdf61df122c57e79dbec74e408bdd567217fb06d2a516b913"
  },
  {
    "questionId": "u01-s005-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "a=-3，b 是 a 的相反數。則 2a+b 的值為何？",
    "choices": [
      "9",
      "3",
      "-3",
      "-9"
    ],
    "answerIndex": 2,
    "explanation": "b=3，所以 2a+b=2(-3)+3=-6+3=-3。",
    "steps": [
      "先求b=3。",
      "代入2(-3)+3。",
      "得到-3。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": false,
        "reason": "把2a算成6。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "只取b。"
      },
      {
        "choice": "-3",
        "truth": true,
        "reason": "b=3，2a+b=-6+3=-3。"
      },
      {
        "choice": "-9",
        "truth": false,
        "reason": "把兩項都取負後相加。"
      }
    ],
    "commonMistake": "知道b=3後，仍把2(-3)算成+6。",
    "concept": "先利用相反數求未知量，再代入整數算式。",
    "tags": [
      "數與量",
      "相反數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "結合相反數與代入運算。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "aeeee535832b184890c64a8aaac8bb2801157d11f4d0c45a4cc3221dc69e507a"
  },
  {
    "questionId": "u01-s005-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "先計算 -(-6)，再求所得結果的相反數，最後答案是多少？",
    "choices": [
      "12",
      "6",
      "0",
      "-6"
    ],
    "answerIndex": 3,
    "explanation": "-(-6)=6；6 的相反數是 -6。",
    "steps": [
      "第一步取-6的相反數得6。",
      "第二步取6的相反數。",
      "回到-6。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "把兩步當加法。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "只完成第一步。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "誤認兩步抵消為0。"
      },
      {
        "choice": "-6",
        "truth": true,
        "reason": "第一次得6，第二次得-6。"
      }
    ],
    "commonMistake": "只看到 -(-6)=6 就停止，漏掉題目要求再取一次相反數。",
    "concept": "取相反數兩次會回到原數。",
    "tags": [
      "數與量",
      "相反數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "追蹤連續兩次相反運算。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4a6ec4e7114b7284c7a294682a78555ca62d0599c36259c509d9f4e81afae889"
  },
  {
    "questionId": "u01-s005-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上 P 的坐標是 -9，Q 與 P 關於原點對稱。Q 的坐標是多少？",
    "choices": [
      "9",
      "-9",
      "0",
      "18"
    ],
    "answerIndex": 0,
    "explanation": "關於原點對稱的坐標互為相反數，-9 的相反數是 9。",
    "steps": [
      "原點是對稱中心。",
      "P距原點9單位在左側。",
      "Q在右側9單位，坐標9。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": true,
        "reason": "Q=-(-9)=9。"
      },
      {
        "choice": "-9",
        "truth": false,
        "reason": "沒有對稱。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "是中心而非對稱點。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "是兩點距離。"
      }
    ],
    "commonMistake": "把 P、Q 的距離18當成Q的坐標。",
    "concept": "關於原點對稱的兩點坐標互為相反數。",
    "tags": [
      "數與量",
      "相反數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "把幾何對稱轉成相反數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1db45f1f7aa848e32eddde76959e717b4b74ed0eda97166eaa6a895992b9641c"
  },
  {
    "questionId": "u01-s005-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "帳務系統發現一筆 -450 元的扣款誤登，現在要用一筆「完全沖銷」紀錄使兩筆合計為 0。新紀錄應為何？",
    "choices": [
      "-900 元",
      "+450 元",
      "0 元",
      "+900 元"
    ],
    "answerIndex": 1,
    "explanation": "完全沖銷需要加上原紀錄的相反數。-450 的相反數是 +450，兩筆和為0。",
    "steps": [
      "原錯誤紀錄-450。",
      "找使總和為0的數。",
      "新紀錄+450。"
    ],
    "optionAnalysis": [
      {
        "choice": "-900 元",
        "truth": false,
        "reason": "會使總額更負。"
      },
      {
        "choice": "+450 元",
        "truth": true,
        "reason": "正確沖銷。"
      },
      {
        "choice": "0 元",
        "truth": false,
        "reason": "不會改變原紀錄。"
      },
      {
        "choice": "+900 元",
        "truth": false,
        "reason": "超過需要的金額。"
      }
    ],
    "commonMistake": "再次登記 -450，以為重複同樣動作能取消。",
    "concept": "沖銷紀錄使用原金額的相反數。",
    "tags": [
      "數與量",
      "相反數",
      "literacy"
    ],
    "estimatedTimeSec": "80",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "在帳務語境中使用相反數抵消。",
    "literacyContextNecessity": "「完全沖銷」與原扣款金額共同決定新紀錄，情境不能刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b3c422676d9d3b0b6299d45d4a839942f20ccc84dba8cc9bccaf46db72813008"
  },
  {
    "questionId": "u01-s005-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "電梯控制器把向上 6 層記為 +6。若要執行與此位移大小相同、方向相反的指令，應輸入何者？",
    "choices": [
      "+12",
      "0",
      "-6",
      "-12"
    ],
    "answerIndex": 2,
    "explanation": "大小相同、方向相反就是取相反數，+6 的相反數是 -6。",
    "steps": [
      "原位移+6。",
      "方向相反且大小不變。",
      "輸入-6。"
    ],
    "optionAnalysis": [
      {
        "choice": "+12",
        "truth": false,
        "reason": "大小改變且方向相同。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "沒有移動。"
      },
      {
        "choice": "-6",
        "truth": true,
        "reason": "+6的相反數是-6。"
      },
      {
        "choice": "-12",
        "truth": false,
        "reason": "大小也改變。"
      }
    ],
    "commonMistake": "把「方向相反」誤解成把位移加倍。",
    "concept": "相反數保持絕對值、改變方向。",
    "tags": [
      "數與量",
      "相反數",
      "literacy"
    ],
    "estimatedTimeSec": "80",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "從控制指令語意辨認相反位移。",
    "literacyContextNecessity": "控制器的正方向約定、位移大小與反向要求都是必要資訊。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4f7f0a8c07d905c1da06073f4b3abdefeb02137ddf849f0167b515a426fba4e6"
  },
  {
    "questionId": "u01-s005-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "產品目標值為 100。某次檢測偏差是 +8；下一次偏差恰為它的相反數。下一次的實際值是多少？",
    "choices": [
      "108",
      "100",
      "84",
      "92"
    ],
    "answerIndex": 3,
    "explanation": "+8 的相反數是 -8。實際值＝100+(-8)=92。",
    "steps": [
      "求下一次偏差-8。",
      "加回基準100。",
      "得到92。"
    ],
    "optionAnalysis": [
      {
        "choice": "108",
        "truth": false,
        "reason": "是第一次實際值。"
      },
      {
        "choice": "100",
        "truth": false,
        "reason": "把偏差相反誤作0。"
      },
      {
        "choice": "84",
        "truth": false,
        "reason": "減了兩次8。"
      },
      {
        "choice": "92",
        "truth": true,
        "reason": "相反偏差-8，100-8=92。"
      }
    ],
    "commonMistake": "只回答偏差 -8，沒有求題目要求的實際值。",
    "concept": "先取相反偏差，再加回基準。",
    "tags": [
      "數與量",
      "相反數",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-number-comparison"
    ],
    "authoringIntent": "結合相反數與基準偏差還原。",
    "literacyContextNecessity": "目標值、第一次偏差與「相反數」條件共同決定下一次實際值。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bc7b710e7a501962f9d009a1e0a18ee4b9ef2133736c617e5ed63ca997357c05"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s005-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "求下列各數的相反數，並用「兩數相加為 0」逐一檢查：14、-9、0、-(-5)。",
    "requiredWork": [
      "先化簡 -(-5)。",
      "每題都寫出相反數。",
      "至少列出一次完整和為0的檢查形式。"
    ],
    "fullCreditSolution": [
      "14 的相反數 -14，14+(-14)=0。",
      "-9 的相反數 9，-9+9=0。",
      "0 的相反數 0，0+0=0。",
      "-(-5)=5，其相反數 -5，5+(-5)=0。"
    ],
    "alternativeSolutions": [
      "可用數線對稱說明，但答案必須相同。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "四項答案與檢查全部正確。"
      },
      {
        "score": 2,
        "criteria": "四項答案正確但檢查略缺；或一項小錯。"
      },
      {
        "score": 1,
        "criteria": "至少兩項正確且知道用和為0檢查。"
      },
      {
        "score": 0,
        "criteria": "相反數與倒數混淆，少於兩項正確。"
      }
    ],
    "scoringNotes": [
      "若把最後一項直接視為-5，表示未先化簡。"
    ],
    "commonErrors": [
      "把14相反數寫1/14。",
      "認為0無相反數。",
      "最後一項漏做第二次取相反。"
    ],
    "independentReview": {
      "derivedResult": "-14、9、0、-5。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "431b9abeda5ff2667319bd2c82012c582b1ec391b6f2664cbf1a766b865c2c53"
  },
  {
    "questionId": "u01-s005-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-opposite-number",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "數線上 A 與 B 關於原點對稱，A=-7。C 又與 B 關於坐標 2 的點對稱。求 B、C，並說明第二次對稱為什麼不能只取相反數。",
    "requiredWork": [
      "先利用原點對稱求B。",
      "把2視為B、C中點。",
      "說明取相反數只適用以0為中心。"
    ],
    "fullCreditSolution": [
      "B=7。",
      "2=(B+C)÷2，所以 B+C=4，C=4-7=-3。",
      "第二次對稱中心是2，不是0，因此C不是B的相反數；應保持B、C到2的距離相等。"
    ],
    "alternativeSolutions": [
      "可用距離：B=7距2為5，另一側C=2-5=-3。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "B=7、C=-3且中心非0的解釋完整。"
      },
      {
        "score": 2,
        "criteria": "兩坐標正確但理由不完整；或方法正確有小算錯。"
      },
      {
        "score": 1,
        "criteria": "正確求出B並知道第二次中心為2。"
      },
      {
        "score": 0,
        "criteria": "兩次都只取相反數而得錯誤C。"
      }
    ],
    "scoringNotes": [
      "若只答C=-7，表示把中心2忽略。"
    ],
    "commonErrors": [
      "B符號錯。",
      "把C取成-7。",
      "把B、C距離當坐標。"
    ],
    "independentReview": {
      "derivedResult": "B=7，C=-3。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "91a4257de60e005448180631ab3028582fe2c456258276b5359909a0c2cbea46"
  }
];

export const DRAWING_SPECS = [];
