// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s011-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-arithmetic",
  "skillId": "integer-mixed-operations",
  "title": "整數四則混合：依序處理括號與乘除和加減",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能遵守整數四則運算順序。",
    "能在同級運算中由左到右。",
    "能把減法改寫為加法以避免符號錯誤。",
    "能利用交換律與結合律簡化純加法部分。",
    "能在情境中建立完整算式而非分段漏項。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-multiplication-division",
      "requiredLevel": "能完成整數的乘法和除法，並理解同級運算由左到右。"
    }
  ],
  "glossary": [
    {
      "term": "運算順序",
      "definition": "同一算式中決定先算哪一部分的規則。"
    },
    {
      "term": "括號",
      "definition": "指定必須先處理的部分。"
    },
    {
      "term": "同級運算",
      "definition": "乘與除同級，加與減同級。"
    },
    {
      "term": "由左到右",
      "definition": "同級且沒有其他括號時，按照出現順序計算。"
    },
    {
      "term": "完整算式",
      "definition": "把情境中的起始量與所有變化一次表達清楚。"
    }
  ],
  "notation": [
    {
      "symbol": "( )",
      "meaning": "括號內先算。"
    },
    {
      "symbol": "×、÷",
      "meaning": "在沒有更內層括號時，先於加減。"
    },
    {
      "symbol": "+、-",
      "meaning": "乘除完成後，由左到右處理。"
    }
  ],
  "conceptNarrative": [
    "四則混合不能只看哪個數容易算。標準順序是先括號，再乘除，最後加減；同級由左到右。",
    "加減部分若全部改寫成帶號加法，可使用交換律與結合律，但乘除與加法混合時不可任意換序。",
    "負數應使用括號，特別是除法與乘法，例如 12÷(-3)。",
    "情境題先列完整式，逐項標示意義，再依順序計算，能避免漏掉固定費或初始值。"
  ],
  "formalDefinitions": [
    {
      "name": "四則順序",
      "statement": "先括號，次乘除，後加減；同級由左到右。"
    },
    {
      "name": "括號層級",
      "statement": "有多層括號時由最內層開始。"
    }
  ],
  "formulas": [
    {
      "formula": "括號 → 乘除 → 加減",
      "conditions": [
        "同級運算由左到右"
      ],
      "meaning": "標準計算流程。"
    },
    {
      "formula": "a-b=a+(-b)",
      "conditions": [
        "用於加減整理"
      ],
      "meaning": "把減法統一為帶號加法。"
    }
  ],
  "nonApplicableCases": [
    "不能把加法先算，只因為它看起來容易。",
    "乘除同級，不是乘法永遠先於除法。",
    "加減同級，不是加法永遠先於減法。",
    "括號前若有負號或乘號，括號值算完後仍要處理外部運算。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "標出最內層括號。",
      "check": "是否有遺漏括號？"
    },
    {
      "step": 2,
      "instruction": "完成所有乘除，由左到右。",
      "check": "除法是否誤跳過？"
    },
    {
      "step": 3,
      "instruction": "完成加減，由左到右。",
      "check": "負號是否跟著數？"
    },
    {
      "step": 4,
      "instruction": "每一步只改一個局部。",
      "check": "抄寫其他項時是否變號？"
    },
    {
      "step": 5,
      "instruction": "以估算與情境檢查。",
      "check": "結果大小和方向合理嗎？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "計算 8+(-3)×5。",
      "solutionSteps": [
        "先乘法：(-3)×5=-15。",
        "算式成 8+(-15)。",
        "結果 -7。"
      ],
      "answer": "-7。"
    },
    {
      "exampleId": "L2",
      "prompt": "計算 24÷(-6)-3。",
      "solutionSteps": [
        "先除法：24÷(-6)=-4。",
        "再算 -4-3。",
        "結果 -7。"
      ],
      "answer": "-7。"
    },
    {
      "exampleId": "L3",
      "prompt": "計算 18-[4+(-7)]×2。",
      "solutionSteps": [
        "括號 4+(-7)=-3。",
        "乘法 (-3)×2=-6。",
        "18-(-6)=24。"
      ],
      "answer": "24。"
    },
    {
      "exampleId": "L4",
      "prompt": "計算 -30÷5×2+9。",
      "solutionSteps": [
        "乘除同級由左到右：-30÷5=-6。",
        "再 -6×2=-12。",
        "最後 -12+9=-3。"
      ],
      "answer": "-3。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "先算 8+(-3)。",
      "why": "忽略乘法優先。",
      "correction": "先算 (-3)×5。"
    },
    {
      "mistake": "乘除式先算右邊乘法。",
      "why": "誤認乘法一定先於除法。",
      "correction": "同級由左到右。"
    },
    {
      "mistake": "加減式先做加法。",
      "why": "誤認加法優先。",
      "correction": "同級由左到右。"
    },
    {
      "mistake": "括號算完後漏掉外部負號。",
      "why": "只關注括號內。",
      "correction": "抄下並處理括號外運算。"
    },
    {
      "mistake": "每一步同時改多處導致變號。",
      "why": "省略中間步驟。",
      "correction": "一次只處理一個局部。"
    },
    {
      "mistake": "情境列式漏掉起始量。",
      "why": "只列變化項。",
      "correction": "先寫起始量，再接全部變化。"
    }
  ],
  "selfCheck": [
    "括號先算了嗎？",
    "乘除是否由左到右？",
    "加減是否由左到右？",
    "負數有括號嗎？",
    "每一步是否只改必要部分？"
  ],
  "summary": [
    "順序：括號、乘除、加減。",
    "同級運算由左到右。",
    "減法可改寫成加上相反數。",
    "完整列式後再計算。"
  ],
  "connections": {
    "previous": "先備技能是整數加減乘除。",
    "next": [
      "指數會在後續加入比乘除更優先的運算。",
      "科學記號運算需要指數與乘除順序。",
      "綜合素養題會以完整算式整合多個條件。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s011-v001",
      "u01-s011-v002",
      "u01-s011-v003",
      "u01-s011-v004",
      "u01-s011-v005",
      "u01-s011-v006",
      "u01-s011-v007",
      "u01-s011-v008",
      "u01-s011-v009",
      "u01-s011-v010",
      "u01-s011-v011",
      "u01-s011-v012"
    ],
    "constructedResponseIds": [
      "u01-s011-cr001",
      "u01-s011-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐式按照括號、乘除、加減順序重算，並核對同級運算由左到右，未以表面順序取代運算規則。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "81ea334152405500f2186a9e2de0a6b6238a643b1f8d15a02eba3b0da4bcefb0",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s011-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "8+(-3)×5 的值是多少？",
    "choices": [
      "-7",
      "25",
      "-25",
      "-55"
    ],
    "answerIndex": 0,
    "explanation": "先乘法：(-3)×5=-15，再8+(-15)=-7。",
    "steps": [
      "先算乘法-15。",
      "再算8-15。",
      "得到-7。"
    ],
    "optionAnalysis": [
      {
        "choice": "-7",
        "truth": true,
        "reason": "8+(-15)=-7。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "先算8-3的錯誤結果。"
      },
      {
        "choice": "-25",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-55",
        "truth": false,
        "reason": "把8也乘5。"
      }
    ],
    "commonMistake": "先算8+(-3)，忽略乘法優先。",
    "concept": "四則混合先乘除後加減。",
    "tags": [
      "數與量",
      "整數四則混合",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "基本乘加順序。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "136cac6e8a2d671a54095cd771c65cbad8ee5fd291c4c1f1677b456ae3513626",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "24÷(-6)-3 的值是多少？",
    "choices": [
      "1",
      "-7",
      "-1",
      "7"
    ],
    "answerIndex": 1,
    "explanation": "先除法24÷(-6)=-4，再-4-3=-7。",
    "steps": [
      "先算除法-4。",
      "再減3。",
      "得-7。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "符號與減法錯。"
      },
      {
        "choice": "-7",
        "truth": true,
        "reason": "-4-3=-7。"
      },
      {
        "choice": "-1",
        "truth": false,
        "reason": "只算24÷-6+3。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "漏負號。"
      }
    ],
    "commonMistake": "把-4-3算成-1。",
    "concept": "先除法，負數再減正數。",
    "tags": [
      "數與量",
      "整數四則混合",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "基本除減順序。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "87e80d28a37cc8ed0278aa4443b2e90d60647e72c39ba6dd5f385af6c00f89e7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "18-[4+(-7)]×2 的值是多少？",
    "choices": [
      "-6",
      "12",
      "24",
      "30"
    ],
    "answerIndex": 2,
    "explanation": "先括號4-7=-3，再乘2得-6，最後18-(-6)=24。",
    "steps": [
      "括號=-3。",
      "乘法=-6。",
      "18+6=24。"
    ],
    "optionAnalysis": [
      {
        "choice": "-6",
        "truth": false,
        "reason": "只算乘積。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把18與-6相加錯。"
      },
      {
        "choice": "24",
        "truth": true,
        "reason": "18-((-3)×2)=18-(-6)=24。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "括號符號錯。"
      }
    ],
    "commonMistake": "括號得-3後，將18-(-6)算成12。",
    "concept": "先括號、再乘法、最後減法。",
    "tags": [
      "數與量",
      "整數四則混合",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "處理括號與減負結果。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e8b9c605d93fe0c5cb13ca77ac1e622ba315bbfa677794b452f0661b71f221f8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-30÷5×2+9 的值是多少？",
    "choices": [
      "-21",
      "3",
      "21",
      "-3"
    ],
    "answerIndex": 3,
    "explanation": "乘除同級由左到右：-30÷5=-6，-6×2=-12，最後-12+9=-3。",
    "steps": [
      "左到右除法=-6。",
      "乘2得-12。",
      "加9得-3。"
    ],
    "optionAnalysis": [
      {
        "choice": "-21",
        "truth": false,
        "reason": "漏乘2。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "錯誤分組。"
      },
      {
        "choice": "21",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-3",
        "truth": true,
        "reason": "((-30÷5)×2)+9=-3。"
      }
    ],
    "commonMistake": "先算5×2=10，再做-30÷10。",
    "concept": "連續乘除同級由左到右。",
    "tags": [
      "數與量",
      "整數四則混合",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "辨認乘除同級順序。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cf18e1699cda88260dacc92dcaa813cb8a0b12787aca6c7609d570aa882a6432",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "16-3×5+2 的值是多少？",
    "choices": [
      "3",
      "67",
      "-1",
      "-33"
    ],
    "answerIndex": 0,
    "explanation": "先3×5=15，再16-15+2=1+2=3。",
    "steps": [
      "乘法15。",
      "16-15=1。",
      "1+2=3。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": true,
        "reason": "16-15+2=3。"
      },
      {
        "choice": "67",
        "truth": false,
        "reason": "先算16-3再乘5。"
      },
      {
        "choice": "-1",
        "truth": false,
        "reason": "漏加2。"
      },
      {
        "choice": "-33",
        "truth": false,
        "reason": "錯誤分組。"
      }
    ],
    "commonMistake": "把16-3先算成13。",
    "concept": "乘法優先於加減。",
    "tags": [
      "數與量",
      "整數四則混合",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "在加減兩側辨認中間乘法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c853b9fc8f7a6f24ede63cda52a160a82f2cd485bd8e8734ef563b6a2bd6636c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-8+5)×(-4) 的值是多少？",
    "choices": [
      "-12",
      "12",
      "-27",
      "27"
    ],
    "answerIndex": 1,
    "explanation": "括號內-8+5=-3，再(-3)×(-4)=12。",
    "steps": [
      "先括號=-3。",
      "負乘負得正。",
      "3×4=12。"
    ],
    "optionAnalysis": [
      {
        "choice": "-12",
        "truth": false,
        "reason": "乘積符號錯。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "(-3)(-4)=12。"
      },
      {
        "choice": "-27",
        "truth": false,
        "reason": "把括號內相加成-13。"
      },
      {
        "choice": "27",
        "truth": false,
        "reason": "大小與符號錯。"
      }
    ],
    "commonMistake": "先做5×(-4)，破壞括號。",
    "concept": "括號優先，負乘負得正。",
    "tags": [
      "數與量",
      "整數四則混合",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "結合括號加法與乘法符號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "484cd483a41dc3882bfdf9c6d82f47296dbe08a1572911179c6647642f463936",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "48÷(-6)-[7-(-2)] 的值是多少？",
    "choices": [
      "1",
      "-1",
      "-17",
      "17"
    ],
    "answerIndex": 2,
    "explanation": "48÷(-6)=-8；括號7-(-2)=9；-8-9=-17。",
    "steps": [
      "除法=-8。",
      "括號=9。",
      "相減=-17。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "把兩部分相加錯。"
      },
      {
        "choice": "-1",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-17",
        "truth": true,
        "reason": "-8-9=-17。"
      },
      {
        "choice": "17",
        "truth": false,
        "reason": "漏負號。"
      }
    ],
    "commonMistake": "把7-(-2)算成5。",
    "concept": "同時處理除法與括號內減負。",
    "tags": [
      "數與量",
      "整數四則混合",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "計算兩個獨立部分後相減。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "667fdd6522e51e24642d06d759b31e5701d77959369cf851796776b240405241",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "20-(-3)×4÷2 的值是多少？",
    "choices": [
      "14",
      "-26",
      "-14",
      "26"
    ],
    "answerIndex": 3,
    "explanation": "乘除由左到右：(-3)×4=-12，-12÷2=-6；20-(-6)=26。",
    "steps": [
      "乘法=-12。",
      "除法=-6。",
      "20+6=26。"
    ],
    "optionAnalysis": [
      {
        "choice": "14",
        "truth": false,
        "reason": "把20-6。"
      },
      {
        "choice": "-26",
        "truth": false,
        "reason": "把所有項相乘。"
      },
      {
        "choice": "-14",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "26",
        "truth": true,
        "reason": "20-[(-3×4)÷2]=26。"
      }
    ],
    "commonMistake": "看到20-(-3)就先算23，忽略乘法。",
    "concept": "減號前的項不能越過尚未完成的乘除。",
    "tags": [
      "數與量",
      "整數四則混合",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "避免錯把減號與負因數先合併。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1c42f057d5ca5b28d255c65be4359134c82392df83f9cee5441132a40c5f4c84",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-2×[5-9]+(-3)×4 的值是多少？",
    "choices": [
      "-4",
      "20",
      "4",
      "-20"
    ],
    "answerIndex": 0,
    "explanation": "括號5-9=-4；-2×(-4)=8；(-3)×4=-12；8-12=-4。",
    "steps": [
      "括號=-4。",
      "兩乘積8與-12。",
      "相加=-4。"
    ],
    "optionAnalysis": [
      {
        "choice": "-4",
        "truth": true,
        "reason": "8+(-12)=-4。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "把兩乘積絕對值相加。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-20",
        "truth": false,
        "reason": "兩部分都錯。"
      }
    ],
    "commonMistake": "只算第一個乘積8，漏掉第二項。",
    "concept": "先各自完成乘積，再合併帶號結果。",
    "tags": [
      "數與量",
      "整數四則混合",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "兩個乘積與括號的綜合。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "94d7160d1fdbbc29a59e9627e9903fb7965e38d09ac0d58dc03808fd8784282f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "會員起始有 120 點。系統連續 4 次各扣 15 點，之後補發 25 點。最後有多少點？",
    "choices": [
      "35 點",
      "85 點",
      "155 點",
      "205 點"
    ],
    "answerIndex": 1,
    "explanation": "120+(-15)×4+25=120-60+25=85。",
    "steps": [
      "四次扣點總變化-60。",
      "120-60=60。",
      "再加25得85。"
    ],
    "optionAnalysis": [
      {
        "choice": "35 點",
        "truth": false,
        "reason": "漏補發或算錯。"
      },
      {
        "choice": "85 點",
        "truth": true,
        "reason": "120-15×4+25=85。"
      },
      {
        "choice": "155 點",
        "truth": false,
        "reason": "把扣點當加點。"
      },
      {
        "choice": "205 點",
        "truth": false,
        "reason": "所有數都加。"
      }
    ],
    "commonMistake": "先算120-15再乘4，把起始點數也重複四次。",
    "concept": "重複固定變化先乘，再加到起始量。",
    "tags": [
      "數與量",
      "整數四則混合",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "建立點數扣除與補發的完整算式。",
    "literacyContextNecessity": "起始點數、每次扣點、次數與補發都不可省略。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "591eb2384553c1bd9f1a31b69656e4125baf48757c9d8bf52c5faf24a683da27",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "帳戶起始餘額為 -50 元，連續 3 天每天存入 40 元，最後再扣手續費 25 元。最終餘額為何？",
    "choices": [
      "-195 元",
      "95 元",
      "45 元",
      "145 元"
    ],
    "answerIndex": 2,
    "explanation": "-50+3×40-25=-50+120-25=45。",
    "steps": [
      "三天存款120。",
      "-50+120=70。",
      "扣25得45。"
    ],
    "optionAnalysis": [
      {
        "choice": "-195 元",
        "truth": false,
        "reason": "把存款與費用都當扣款。"
      },
      {
        "choice": "95 元",
        "truth": false,
        "reason": "漏起始負餘額或手續費。"
      },
      {
        "choice": "45 元",
        "truth": true,
        "reason": "-50+120-25=45。"
      },
      {
        "choice": "145 元",
        "truth": false,
        "reason": "漏手續費。"
      }
    ],
    "commonMistake": "算3×40-25=95後，忘記起始餘額-50。",
    "concept": "起始量與重複交易需依運算順序整合。",
    "tags": [
      "數與量",
      "整數四則混合",
      "literacy"
    ],
    "estimatedTimeSec": "95",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "處理負起始餘額、重複收入與一次費用。",
    "literacyContextNecessity": "起始負餘額、每日金額、天數與手續費共同決定結果。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ce4a0f7d6142ea4d627d15b6f0e3496adfc8ccfd39874d5b9eea10f711f583fd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "遊戲角色起始分數 -10。答對 5 題，每題 +6 分；答錯 3 題，每題 -4 分。最後分數是多少？",
    "choices": [
      "52 分",
      "-8 分",
      "32 分",
      "8 分"
    ],
    "answerIndex": 3,
    "explanation": "-10+5×6+3×(-4)=-10+30-12=8。",
    "steps": [
      "答對總分30。",
      "答錯總分-12。",
      "加起始-10得8。"
    ],
    "optionAnalysis": [
      {
        "choice": "52 分",
        "truth": false,
        "reason": "把負分當正分。"
      },
      {
        "choice": "-8 分",
        "truth": false,
        "reason": "算術錯。"
      },
      {
        "choice": "32 分",
        "truth": false,
        "reason": "漏起始分數。"
      },
      {
        "choice": "8 分",
        "truth": true,
        "reason": "-10+30-12=8。"
      }
    ],
    "commonMistake": "只算30-12=18，漏掉起始-10。",
    "concept": "不同類型的重複得分分別相乘再合併。",
    "tags": [
      "數與量",
      "整數四則混合",
      "literacy"
    ],
    "estimatedTimeSec": "95",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "建立完整遊戲計分模型。",
    "literacyContextNecessity": "起始分數、答對答錯數量與每題分值全部必要。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5a3acea5f01a6c8344938b66c55ecd01829820681982f7ad0d9bba984c2271ba",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s011-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "計算 30-[6+(-8)]×4÷2，要求每一步只處理一個運算層級。",
    "requiredWork": [
      "先括號。",
      "乘除同級由左到右。",
      "最後做減法。"
    ],
    "fullCreditSolution": [
      "括號：6+(-8)=-2。",
      "乘除：(-2)×4=-8，-8÷2=-4。",
      "最後：30-(-4)=34。"
    ],
    "alternativeSolutions": [
      "可寫30-[(-2)×4÷2]=30-(-4)=34。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "順序、每步與答案34全部正確。"
      },
      {
        "score": 2,
        "criteria": "答案正確但中間步略省；或一處抄寫小錯。"
      },
      {
        "score": 1,
        "criteria": "知道先括號且方法大致正確。"
      },
      {
        "score": 0,
        "criteria": "先算30-6或破壞括號，無有效流程。"
      }
    ],
    "scoringNotes": [
      "乘除由左到右，但本題改寫(-2)×(4÷2)也因乘法結合可得同值；須說明等價。"
    ],
    "commonErrors": [
      "括號算14。",
      "30-(-2)先算。",
      "最後減負算26。"
    ],
    "independentReview": {
      "derivedResult": "34。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "335a6e21451f4fd70ba7b1845948ecccbeaca9045060292072a9f917f0a5c1d6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某收費方案：起始點數 200，每週扣 18 點，共 6 週；期間另有兩次各補 25 點，最後再扣一次 12 點。請列一個完整算式並求餘額，說明運算順序。",
    "requiredWork": [
      "完整算式含全部項。",
      "重複扣點與補點使用乘法。",
      "先乘法後加減。"
    ],
    "fullCreditSolution": [
      "算式：200+(-18)×6+25×2-12。",
      "先算乘法：-108與50。",
      "200-108+50-12=130。"
    ],
    "alternativeSolutions": [
      "可寫200-18×6+2×25-12。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整列式、順序與130全部正確。"
      },
      {
        "score": 2,
        "criteria": "列式正確但一處算術小錯；或答案正確但說明略缺。"
      },
      {
        "score": 1,
        "criteria": "能正確表示一組重複變化並保留大部分資料。"
      },
      {
        "score": 0,
        "criteria": "漏掉多項條件或把全部數直接相加。"
      }
    ],
    "scoringNotes": [
      "兩次補25不可只加一次。"
    ],
    "commonErrors": [
      "200-18後再乘6。",
      "漏12。",
      "把扣點記正。"
    ],
    "independentReview": {
      "derivedResult": "130點。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "41d43df13ffc8df06909d73bab47e241afbeae5b3f3d0f47aaa63710415782d8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
