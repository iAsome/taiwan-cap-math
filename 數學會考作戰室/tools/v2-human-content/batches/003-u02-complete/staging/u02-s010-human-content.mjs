// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s010-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-fraction-ops",
  "skillId": "fraction-multiply-divide",
  "title": "分數的乘法和除法：用倍量和倒數與每份大小解決比例分裝",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能完成正負分數乘法。",
    "能把除以分數改成乘倒數。",
    "能先約分再乘以降低計算錯誤。",
    "能判斷部分中的部分、份數與反求整體。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-add-subtract",
      "requiredLevel": "能處理分數符號、約分與基本四則順序。"
    }
  ],
  "glossary": [
    {
      "term": "倒數",
      "definition": "兩數乘積為1時互為倒數。"
    },
    {
      "term": "交叉約分",
      "definition": "乘法前在分子分母間約去公因數。"
    },
    {
      "term": "部分中的部分",
      "definition": "一個比例作用在另一部分上，通常用乘法。"
    },
    {
      "term": "份數",
      "definition": "總量可分成多少個指定大小的份。"
    }
  ],
  "notation": [
    {
      "symbol": "(a/b)⁻¹=b/a",
      "meaning": "a、b皆非0時的倒數。"
    }
  ],
  "conceptNarrative": [
    "分數乘法把分子相乘、分母相乘，能先交叉約分。",
    "除以非零分數等於乘它的倒數。",
    "『某量的a/b』是乘法；『總量可分成每份c/d多少份』是除法。",
    "負數乘除的符號依整數規則：同號正、異號負。"
  ],
  "formalDefinitions": [
    {
      "name": "分數乘法",
      "statement": "a/b×c/d=ac/bd。"
    },
    {
      "name": "分數除法",
      "statement": "a/b÷c/d=a/b×d/c，c、d非0。"
    }
  ],
  "formulas": [
    {
      "formula": "a/b×c/d=ac/bd",
      "conditions": [
        "b、d非0"
      ],
      "meaning": "分數乘法。"
    },
    {
      "formula": "a/b÷c/d=ad/bc",
      "conditions": [
        "b、c、d非0"
      ],
      "meaning": "乘倒數。"
    }
  ],
  "nonApplicableCases": [
    "0沒有倒數。",
    "除數不得為0。",
    "分數乘法不需通分。",
    "『其中的』與『平均分成』代表不同運算。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先判斷乘法或除法。",
      "check": "題目問部分量還是份數？"
    },
    {
      "step": 2,
      "instruction": "處理正負號。",
      "check": "同號還是異號？"
    },
    {
      "step": 3,
      "instruction": "除法改乘倒數。",
      "check": "倒的是除數，不是被除數。"
    },
    {
      "step": 4,
      "instruction": "先約分再乘。",
      "check": "可否降低數字？"
    },
    {
      "step": 5,
      "instruction": "化簡並放回情境。",
      "check": "份數、容量或比例是否合理？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "7/12×9/14。",
      "solutionSteps": [
        "交叉約分7與14、9與12。",
        "得3/8。"
      ],
      "answer": "3/8。"
    },
    {
      "exampleId": "L2",
      "prompt": "5/6÷25/18。",
      "solutionSteps": [
        "乘18/25。",
        "約分得3/5。"
      ],
      "answer": "3/5。"
    },
    {
      "exampleId": "L3",
      "prompt": "全班40人的3/8再取其中2/5。",
      "solutionSteps": [
        "40×3/8=15。",
        "15×2/5=6。"
      ],
      "answer": "6人。"
    },
    {
      "exampleId": "L4",
      "prompt": "9公升每瓶3/5公升。",
      "solutionSteps": [
        "9÷3/5。",
        "9×5/3=15。"
      ],
      "answer": "15瓶。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "乘法先通分。",
      "why": "混用加減規則。",
      "correction": "直接分子乘分子、分母乘分母。"
    },
    {
      "mistake": "除法倒錯被除數。",
      "why": "未辨認除數。",
      "correction": "只把第二個分數顛倒。"
    },
    {
      "mistake": "0也取倒數。",
      "why": "忽略倒數存在條件。",
      "correction": "除數為0時無定義。"
    },
    {
      "mistake": "『其中的』用加法。",
      "why": "未理解部分中的部分。",
      "correction": "連續比例相乘。"
    },
    {
      "mistake": "總量乘每份量求份數。",
      "why": "運算方向反。",
      "correction": "份數=總量÷每份量。"
    },
    {
      "mistake": "負號漏掉。",
      "why": "只計算絕對值。",
      "correction": "先判斷符號再算大小。"
    }
  ],
  "selfCheck": [
    "除數是否非0？",
    "倒數是否只作用在除數？",
    "能否先約分？",
    "符號是否正確？",
    "情境問的是部分量還是份數？"
  ],
  "summary": [
    "乘法分子乘分子、分母乘分母。",
    "除法改乘倒數。",
    "乘法前可交叉約分。",
    "部分中的部分用乘法，份數用除法。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-add-subtract，需能完成其基本判斷與計算。",
    "next": [
      "帶分數的乘法和除法前通常化成假分數。",
      "繁分數的主分數線就是除法。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s010-v001",
      "u02-s010-v002",
      "u02-s010-v003",
      "u02-s010-v004",
      "u02-s010-v005",
      "u02-s010-v006",
      "u02-s010-v007",
      "u02-s010-v008",
      "u02-s010-v009",
      "u02-s010-v010",
      "u02-s010-v011",
      "u02-s010-v012"
    ],
    "constructedResponseIds": [
      "u02-s010-cr001",
      "u02-s010-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例均以未約分直接乘與先約分兩路重算；除法結果再乘回除數恢復被除數，符號與0條件單獨檢查。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "bc70c4353731205543e5b45fab81f9ca3d8967e410431d023ceee52b6767cdbb",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s010-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "3/4×2/5 等於多少？",
    "choices": [
      "3/10",
      "5/9",
      "6/9",
      "3/5"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：分子相乘3×2=6，分母相乘4×5=20；6/20約分為3/10。所以答案是「3/10」。",
    "steps": [
      "分子相乘3×2=6，分母相乘4×5=20",
      "6/20約分為3/10"
    ],
    "optionAnalysis": [
      {
        "choice": "3/10",
        "truth": true,
        "reason": "3/10正確。"
      },
      {
        "choice": "5/9",
        "truth": false,
        "reason": "把分子分母相加。"
      },
      {
        "choice": "6/9",
        "truth": false,
        "reason": "未正確乘分母。"
      },
      {
        "choice": "3/5",
        "truth": false,
        "reason": "約分錯誤。"
      }
    ],
    "commonMistake": "分子分母交叉相加。",
    "concept": "分數乘法分子乘分子、分母乘分母，再約分。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "基本分數乘法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "956037bcc79636cf14e14766dc5ccca07bcdc72f4a8c4831673e389c3c790b5e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5/6÷10/9 等於多少？",
    "choices": [
      "25/27",
      "3/4",
      "4/3",
      "50/54"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：除以10/9等於乘9/10；5/6×9/10=45/60=3/4。所以答案是「3/4」。",
    "steps": [
      "除以10/9等於乘9/10",
      "5/6×9/10=45/60=3/4"
    ],
    "optionAnalysis": [
      {
        "choice": "25/27",
        "truth": false,
        "reason": "未取倒數。"
      },
      {
        "choice": "3/4",
        "truth": true,
        "reason": "3/4正確。"
      },
      {
        "choice": "4/3",
        "truth": false,
        "reason": "取倒數方向錯。"
      },
      {
        "choice": "50/54",
        "truth": false,
        "reason": "50/54是錯誤直除。"
      }
    ],
    "commonMistake": "除法直接分子除分子、分母除分母但未處理整除。",
    "concept": "除以分數等於乘它的倒數。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "基本分數除法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c7d70c88954ae1710af10c51e063df59d652ae20a69720b1a71a190715a79dc0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-2/3×9/4 等於多少？",
    "choices": [
      "3/2",
      "-3/4",
      "-3/2",
      "-6"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：先約分9÷3=3、2÷4=1/2；負×正為負，結果-3/2。所以答案是「-3/2」。",
    "steps": [
      "先約分9÷3=3、2÷4=1/2",
      "負×正為負，結果-3/2"
    ],
    "optionAnalysis": [
      {
        "choice": "3/2",
        "truth": false,
        "reason": "符號應為負。"
      },
      {
        "choice": "-3/4",
        "truth": false,
        "reason": "數值少一倍。"
      },
      {
        "choice": "-3/2",
        "truth": true,
        "reason": "-3/2正確。"
      },
      {
        "choice": "-6",
        "truth": false,
        "reason": "未約分且乘錯。"
      }
    ],
    "commonMistake": "忽略負號或負正相乘符號。",
    "concept": "異號相乘結果為負。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "帶符號分數乘法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "99a3d9ccbe54b964734641ef2c5cd7c8db80ffea6882b22a5ae96ccab43feac7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "7/8÷(-14/3) 等於多少？",
    "choices": [
      "-49/24",
      "3/16",
      "-7/12",
      "-3/16"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：7/8×(-3/14)；約去7與14得-3/16。所以答案是「-3/16」。",
    "steps": [
      "7/8×(-3/14)",
      "約去7與14得-3/16"
    ],
    "optionAnalysis": [
      {
        "choice": "-49/24",
        "truth": false,
        "reason": "未取倒數。"
      },
      {
        "choice": "3/16",
        "truth": false,
        "reason": "除以負數後結果必為負，3/16遺漏負號。"
      },
      {
        "choice": "-7/12",
        "truth": false,
        "reason": "約分與倒數都錯。"
      },
      {
        "choice": "-3/16",
        "truth": true,
        "reason": "-3/16正確。"
      }
    ],
    "commonMistake": "取倒數後忘記負號。",
    "concept": "除以負分數等於乘負倒數。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "負分數除法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "31bffcf682096731141e91640c6a47ade954dd89411ba95b7ef16e7c24cc204a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(2/3)²×9/8 等於多少？",
    "choices": [
      "1/2",
      "3/4",
      "1",
      "9/16"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：(2/3)²=4/9；4/9×9/8=4/8=1/2。所以答案是「1/2」。",
    "steps": [
      "(2/3)²=4/9",
      "4/9×9/8=4/8=1/2"
    ],
    "optionAnalysis": [
      {
        "choice": "1/2",
        "truth": true,
        "reason": "1/2正確。"
      },
      {
        "choice": "3/4",
        "truth": false,
        "reason": "約分不完整。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "誤以為9全部消去後為1。"
      },
      {
        "choice": "9/16",
        "truth": false,
        "reason": "只算部分。"
      }
    ],
    "commonMistake": "把(2/3)²算成4/3。",
    "concept": "分數次方要分子分母都乘方。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "結合分數乘方。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ed08e66bb75673353691bc98ae2464786020daa331877f77df4df7bb031da320",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個數的 3/5 是 18，這個數是多少？",
    "choices": [
      "18×3/5",
      "30",
      "18÷5",
      "10又4/5"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：設原數x，3/5×x=18；x=18÷3/5=18×5/3=30。所以答案是「30」。",
    "steps": [
      "設原數x，3/5×x=18",
      "x=18÷3/5=18×5/3=30"
    ],
    "optionAnalysis": [
      {
        "choice": "18×3/5",
        "truth": false,
        "reason": "求的是18的3/5，不是原數。"
      },
      {
        "choice": "30",
        "truth": true,
        "reason": "30正確。"
      },
      {
        "choice": "18÷5",
        "truth": false,
        "reason": "只除分母。"
      },
      {
        "choice": "10又4/5",
        "truth": false,
        "reason": "數值太小。"
      }
    ],
    "commonMistake": "看到『3/5 是18』就再乘3/5。",
    "concept": "已知部分求整體要除以所佔分率。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "由部分反求整體。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7470d23dffb08987c7f32a06ab9f10edec6fdfd9ab0d6ad333a5328019e39cbb",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-3/4)×(8/9)÷(-2/3) 等於多少？",
    "choices": [
      "-1",
      "1/2",
      "1",
      "2"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：先乘得-2/3；再除以-2/3，結果1。所以答案是「1」。",
    "steps": [
      "先乘得-2/3",
      "再除以-2/3，結果1"
    ],
    "optionAnalysis": [
      {
        "choice": "-1",
        "truth": false,
        "reason": "兩負相除應為正。"
      },
      {
        "choice": "1/2",
        "truth": false,
        "reason": "漏掉一次倒數。"
      },
      {
        "choice": "1",
        "truth": true,
        "reason": "同一非零數相除得1。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "多乘倒數。"
      }
    ],
    "commonMistake": "連續運算時只處理第一個負號。",
    "concept": "乘除同級由左到右，除法改乘倒數。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "多步帶符號乘除。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b5fcb79753e0620edb21571ffae6fedf0bc46de7f0503068a223604e184deb04",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 a=5/6，則 (a÷5/12)×3/4 等於多少？",
    "choices": [
      "1",
      "5/8",
      "4/3",
      "3/2"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：5/6÷5/12=2；2×3/4=3/2。所以答案是「3/2」。",
    "steps": [
      "5/6÷5/12=2",
      "2×3/4=3/2"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "漏乘3/4。"
      },
      {
        "choice": "5/8",
        "truth": false,
        "reason": "倒數或約分錯。"
      },
      {
        "choice": "4/3",
        "truth": false,
        "reason": "把最後乘法倒過來。"
      },
      {
        "choice": "3/2",
        "truth": true,
        "reason": "3/2正確。"
      }
    ],
    "commonMistake": "代入後把除法當乘法。",
    "concept": "代入式要保留運算順序與倒數。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "分數代入多步運算。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d1bb3ffce5eb8e1689de342484d34a29251c5cd1f9ab8ad74b73055365e0f260",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某正數乘 7/9 後再除以 14/15，結果為 5/6。原數是多少？",
    "choices": [
      "1",
      "3/5",
      "7/10",
      "5/7"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：設原數x，x×7/9×15/14=5/6；乘數化簡為5/6，所以x=1。所以答案是「1」。",
    "steps": [
      "設原數x，x×7/9×15/14=5/6",
      "乘數化簡為5/6，所以x=1"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": true,
        "reason": "1×5/6=5/6。"
      },
      {
        "choice": "3/5",
        "truth": false,
        "reason": "代回只得1/2。"
      },
      {
        "choice": "7/10",
        "truth": false,
        "reason": "代回不符。"
      },
      {
        "choice": "5/7",
        "truth": false,
        "reason": "把7/9當答案。"
      }
    ],
    "commonMistake": "逆運算時逐步取倒數造成混亂。",
    "concept": "可先合併總乘數，再由結果除回。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "反向解分數的乘法和除法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ba9d6cb35f4abe8c9370b445942968f4c21cef2d5861e844e7843f1a907d536f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一桶油有 12 公升，每瓶裝 3/4 公升，最多可裝滿幾瓶？",
    "choices": [
      "12 瓶",
      "16 瓶",
      "9 瓶",
      "18 瓶"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：瓶數=12÷3/4；=12×4/3=16。所以答案是「16 瓶」。",
    "steps": [
      "瓶數=12÷3/4",
      "=12×4/3=16"
    ],
    "optionAnalysis": [
      {
        "choice": "12 瓶",
        "truth": false,
        "reason": "把公升數當瓶數。"
      },
      {
        "choice": "16 瓶",
        "truth": true,
        "reason": "16瓶正確。"
      },
      {
        "choice": "9 瓶",
        "truth": false,
        "reason": "算成12×3/4。"
      },
      {
        "choice": "18 瓶",
        "truth": false,
        "reason": "除法錯誤。"
      }
    ],
    "commonMistake": "用總量乘每份量。",
    "concept": "份數=總量÷每份量。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "容量分裝。",
    "literacyContextNecessity": "總油量、每瓶容量與「裝滿」限制共同決定要用12÷3/4，不能刪去分裝情境後仍保留相同問題。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "018834dc3e8bb89fd8b3090f151b94978f4a0445964b135e5278a66a12afb5fd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一塊布長 7又1/2 公尺，每件作品用 5/8 公尺。若不拼接，最多可做幾件完整作品？",
    "choices": [
      "10 件",
      "11 件",
      "12 件",
      "13 件"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：7又1/2=15/2；15/2÷5/8=15/2×8/5=12。所以答案是「12 件」。",
    "steps": [
      "7又1/2=15/2",
      "15/2÷5/8=15/2×8/5=12"
    ],
    "optionAnalysis": [
      {
        "choice": "10 件",
        "truth": false,
        "reason": "10件只用6.25公尺。"
      },
      {
        "choice": "11 件",
        "truth": false,
        "reason": "11件非最大。"
      },
      {
        "choice": "12 件",
        "truth": true,
        "reason": "12件正好用完。"
      },
      {
        "choice": "13 件",
        "truth": false,
        "reason": "13件超過總長。"
      }
    ],
    "commonMistake": "帶分數沒有先化成假分數。",
    "concept": "完整件數由總長除以單件用量。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "布料分裝。",
    "literacyContextNecessity": "總布長、單件用量及完整作品要求決定商，且需檢查是否超量。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fbe680e458fb24ecde208eae369777324a94e1e8a0ef18eb59b765304c280f92",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一批果汁為 18 公升，先倒出全量的 2/3，再把倒出的果汁平均裝入每瓶 3/4 公升。共可裝幾瓶？",
    "choices": [
      "12 瓶",
      "18 瓶",
      "20 瓶",
      "16 瓶"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：倒出18×2/3=12公升；12÷3/4=16瓶。所以答案是「16 瓶」。",
    "steps": [
      "倒出18×2/3=12公升",
      "12÷3/4=16瓶"
    ],
    "optionAnalysis": [
      {
        "choice": "12 瓶",
        "truth": false,
        "reason": "只算第一步公升數。"
      },
      {
        "choice": "18 瓶",
        "truth": false,
        "reason": "把18直接當瓶數。"
      },
      {
        "choice": "20 瓶",
        "truth": false,
        "reason": "錯用12÷3/5。"
      },
      {
        "choice": "16 瓶",
        "truth": true,
        "reason": "16瓶正確。"
      }
    ],
    "commonMistake": "未先求倒出的實際量就直接分瓶。",
    "concept": "先求部分量，再除以每份量。",
    "tags": [
      "數與量",
      "分數的乘法和除法",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-add-subtract"
    ],
    "authoringIntent": "兩步比例分裝。",
    "literacyContextNecessity": "全量、倒出比例與瓶容量三筆資料依序決定兩步運算，任何一項都不可刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cafe1bd94500ca0354d6417d97c793fb1176d31dab48fb660ce8a809a87cc06e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s010-cr001",
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "一桶蜂蜜有 15又3/4 公斤，每罐裝 7/8 公斤。可裝滿幾罐？寫出計算與驗算。",
    "requiredWork": [
      "帶分數化假分數。",
      "用總量除每罐量。",
      "乘回驗算。"
    ],
    "fullCreditSolution": [
      "15又3/4=63/4。",
      "63/4÷7/8=63/4×8/7=18。",
      "18×7/8=126/8=63/4，剛好用完。"
    ],
    "alternativeSolutions": [
      "可先把每罐7/8公斤換成小數0.875，但需精確驗算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "18罐、除法與乘回驗算完整。"
      },
      {
        "score": 2,
        "criteria": "答案與主要過程正確但無驗算。"
      },
      {
        "score": 1,
        "criteria": "列出正確除法但計算小錯。"
      },
      {
        "score": 0,
        "criteria": "用乘法求罐數或答案不合理。"
      }
    ],
    "scoringNotes": [
      "沒有剩餘，不需取整。"
    ],
    "commonErrors": [
      "把15又3/4乘7/8。",
      "帶分數轉錯。"
    ],
    "independentReview": {
      "derivedResult": "18罐。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "400d10738eee286aac7a9dc2be638343cc8d13737ed3a6c08d87304026df3d2a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s010-cr002",
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-multiply-divide",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某數先乘 5/6，再除以 3/4，結果為 70。求原數並代回驗證。",
    "requiredWork": [
      "設未知數或逆運算。",
      "代回原流程。"
    ],
    "fullCreditSolution": [
      "設原數x。x×5/6÷3/4=x×5/6×4/3=10x/9。",
      "10x/9=70，所以x=63。",
      "驗證：63×5/6=52.5=105/2，再除3/4得70。"
    ],
    "alternativeSolutions": [
      "可由70先乘3/4再除5/6：70×3/4×6/5=63。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "x=63且完整代回。"
      },
      {
        "score": 2,
        "criteria": "答案正確但驗證略缺。"
      },
      {
        "score": 1,
        "criteria": "逆運算方向基本正確但算錯。"
      },
      {
        "score": 0,
        "criteria": "直接把70當原數。"
      }
    ],
    "scoringNotes": [
      "可全程用分數避免小數。"
    ],
    "commonErrors": [
      "兩個逆運算順序錯。",
      "除以3/4時又除一次。"
    ],
    "independentReview": {
      "derivedResult": "原數63。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "57c39a7937cc783baf12432f1b9ef66ed6d5dfbf14e9a44d222979e3171a3abd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
