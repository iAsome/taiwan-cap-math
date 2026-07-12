// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s010-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-arithmetic",
  "skillId": "integer-multiplication-division",
  "title": "整數的乘法和除法：先判符號，再算絕對值",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能判斷兩整數乘積或商的符號。",
    "能計算整數乘法與整除。",
    "能處理多個負因數的乘積。",
    "能使用乘除互逆檢查。",
    "能解釋重複變化與平均分配情境。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-subtraction",
      "requiredLevel": "能完成整數加減，並正確處理負號、括號和帶號數。"
    }
  ],
  "glossary": [
    {
      "term": "因數",
      "definition": "乘法中相乘的數。"
    },
    {
      "term": "乘積",
      "definition": "乘法的結果。"
    },
    {
      "term": "被除數",
      "definition": "除號前要被分配或分組的數。"
    },
    {
      "term": "除數",
      "definition": "除號後用來分配或分組的數，不能為 0。"
    },
    {
      "term": "商",
      "definition": "除法所得結果。"
    }
  ],
  "notation": [
    {
      "symbol": "a×b",
      "meaning": "a 與 b 相乘。"
    },
    {
      "symbol": "a÷b",
      "meaning": "a 除以 b；b≠0。"
    },
    {
      "symbol": "(-1)^n",
      "meaning": "可用負因數個數的奇偶判斷乘積符號。"
    }
  ],
  "conceptNarrative": [
    "乘除符號規則相同：同號得正，異號得負。符號判斷與絕對值計算可分兩步完成。",
    "多個因數相乘時，只需數負因數個數：偶數個負號得正，奇數個負號得負。",
    "整數除法本節只處理可整除或結果仍在題目指定範圍內的情況；除數不能為 0。",
    "可用乘法檢查除法：若 a÷b=c，則 b×c 應回到 a。"
  ],
  "formalDefinitions": [
    {
      "name": "乘法符號規則",
      "statement": "同號兩數相乘得正，異號兩數相乘得負。"
    },
    {
      "name": "除法符號規則",
      "statement": "同號兩數相除得正，異號兩數相除得負。"
    },
    {
      "name": "零的乘法",
      "statement": "任何整數乘 0 都是 0。"
    },
    {
      "name": "除數限制",
      "statement": "0 不能作除數。"
    }
  ],
  "formulas": [
    {
      "formula": "(-a)(-b)=ab",
      "conditions": [
        "a、b≥0"
      ],
      "meaning": "兩個負方向相乘得正。"
    },
    {
      "formula": "(-a)b=-(ab)",
      "conditions": [
        "a、b≥0"
      ],
      "meaning": "一正一負得負。"
    },
    {
      "formula": "a÷b=c ⇔ b×c=a",
      "conditions": [
        "b≠0"
      ],
      "meaning": "乘除互逆。"
    }
  ],
  "nonApplicableCases": [
    "除以 0 沒有定義。",
    "a÷b 不可交換成 b÷a。",
    "負因數個數判斷只適用乘積，不能直接套在加減式。",
    "若題目要求整數答案，要先確認是否整除。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先數負號或比較兩數符號。",
      "check": "同號還是異號？"
    },
    {
      "step": 2,
      "instruction": "決定結果正負。",
      "check": "負因數個數奇數還偶數？"
    },
    {
      "step": 3,
      "instruction": "用絕對值完成乘或除。",
      "check": "基本乘法與除法是否正確？"
    },
    {
      "step": 4,
      "instruction": "加回結果符號。",
      "check": "是否漏寫負號？"
    },
    {
      "step": 5,
      "instruction": "用互逆運算或估算檢查。",
      "check": "除法結果乘回除數等於被除數嗎？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "計算 (-7)×5。",
      "solutionSteps": [
        "一負一正，異號得負。",
        "7×5=35。",
        "結果 -35。"
      ],
      "answer": "-35。"
    },
    {
      "exampleId": "L2",
      "prompt": "計算 (-48)÷(-6)。",
      "solutionSteps": [
        "同為負數，同號得正。",
        "48÷6=8。",
        "結果 8。"
      ],
      "answer": "8。"
    },
    {
      "exampleId": "L3",
      "prompt": "計算 (-2)×(-3)×(-4)。",
      "solutionSteps": [
        "共有三個負因數，是奇數個。",
        "2×3×4=24。",
        "結果為負。"
      ],
      "answer": "-24。"
    },
    {
      "exampleId": "L4",
      "prompt": "某設備每小時下降 3 單位，連續 8 小時總變化？",
      "solutionSteps": [
        "每小時變化 -3。",
        "重複 8 次寫 (-3)×8。",
        "得到 -24。"
      ],
      "answer": "-24 單位。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "負乘負仍寫負。",
      "why": "只看到負號未判斷同號。",
      "correction": "同號相乘得正。"
    },
    {
      "mistake": "異號相除寫正。",
      "why": "把絕對值計算當完整答案。",
      "correction": "異號相除得負。"
    },
    {
      "mistake": "三個負因數判成正。",
      "why": "只兩兩消掉一次後忘了剩餘負號。",
      "correction": "奇數個負因數得負。"
    },
    {
      "mistake": "0÷5 說無定義。",
      "why": "混淆被除數與除數。",
      "correction": "0÷5=0；只有除數為 0 不可。"
    },
    {
      "mistake": "5÷0=0。",
      "why": "誤認任何含 0 的除法都為 0。",
      "correction": "除以 0 沒有定義。"
    },
    {
      "mistake": "把 a÷b 與 b÷a 當相同。",
      "why": "誤用交換律。",
      "correction": "除法一般不可交換。"
    }
  ],
  "selfCheck": [
    "符號先判了嗎？",
    "負因數是奇數個或偶數個？",
    "除數是否為 0？",
    "絕對值運算正確嗎？",
    "能乘回去檢查嗎？"
  ],
  "summary": [
    "同號乘除得正，異號乘除得負。",
    "偶數個負因數乘積為正，奇數個為負。",
    "任何數乘 0 得 0。",
    "0 不能作除數。"
  ],
  "connections": {
    "previous": "先備技能是整數減法，且需熟悉正負號。",
    "next": [
      "四則混合會把乘除放在加減之前。",
      "指數可表示重複乘法。",
      "素養題會把固定速率的重複變化寫成乘法。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s010-v001",
      "u01-s010-v002",
      "u01-s010-v003",
      "u01-s010-v004",
      "u01-s010-v005",
      "u01-s010-v006",
      "u01-s010-v007",
      "u01-s010-v008",
      "u01-s010-v009",
      "u01-s010-v010",
      "u01-s010-v011",
      "u01-s010-v012"
    ],
    "constructedResponseIds": [
      "u01-s010-cr001",
      "u01-s010-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "先數負因數個數判符號，再計算絕對值；除數皆非 0，連續乘除依原順序重算。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "077535f4d9b44d3c57ddab2e2fc73418a1d3b22d94508648359d574c4da3ea02",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s010-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-4)×6 的值是多少？",
    "choices": [
      "-24",
      "24",
      "-10",
      "10"
    ],
    "answerIndex": 0,
    "explanation": "一負一正，異號相乘得負；4×6=24，所以結果-24。",
    "steps": [
      "判斷異號。",
      "算4×6=24。",
      "加負號。"
    ],
    "optionAnalysis": [
      {
        "choice": "-24",
        "truth": true,
        "reason": "(-4)×6=-24。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "漏負號。"
      },
      {
        "choice": "-10",
        "truth": false,
        "reason": "把乘法當加法。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "大小錯。"
      }
    ],
    "commonMistake": "只計算4×6而漏寫負號。",
    "concept": "異號相乘得負。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "基本負乘正。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a86eedc6949d0aa204707b7cb99bedf6526a1b6d20389d753bded996dfe40bee",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-35)÷7 的值是多少？",
    "choices": [
      "5",
      "-5",
      "-28",
      "-42"
    ],
    "answerIndex": 1,
    "explanation": "一負一正，異號相除得負；35÷7=5，所以-5。",
    "steps": [
      "判斷異號。",
      "算35÷7=5。",
      "結果-5。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-5",
        "truth": true,
        "reason": "-35÷7=-5。"
      },
      {
        "choice": "-28",
        "truth": false,
        "reason": "把除法當減法。"
      },
      {
        "choice": "-42",
        "truth": false,
        "reason": "把除法當加法。"
      }
    ],
    "commonMistake": "認為除法會把負號消掉。",
    "concept": "異號相除得負。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "基本負除正。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6afe45500a8c61b9daff7a0754b4b6a87e07e8253e1dca65342f5efa42b66ed9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-8)×(-3) 的值是多少？",
    "choices": [
      "-24",
      "-11",
      "24",
      "11"
    ],
    "answerIndex": 2,
    "explanation": "兩個負數同號相乘得正，8×3=24。",
    "steps": [
      "兩因數同為負。",
      "同號得正。",
      "8×3=24。"
    ],
    "optionAnalysis": [
      {
        "choice": "-24",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-11",
        "truth": false,
        "reason": "把乘法當加法。"
      },
      {
        "choice": "24",
        "truth": true,
        "reason": "(-8)(-3)=24。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "大小錯。"
      }
    ],
    "commonMistake": "看到負因數就直接讓結果為負。",
    "concept": "負乘負得正。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "基本負乘負。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5ca3d6940550dcf012a89e07204243bebacf22a236d60d31d93019b2dd16a8cc",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "72÷(-9) 的值是多少？",
    "choices": [
      "8",
      "-63",
      "63",
      "-8"
    ],
    "answerIndex": 3,
    "explanation": "正數除以負數，異號得負；72÷9=8，因此-8。",
    "steps": [
      "判斷異號。",
      "72÷9=8。",
      "結果-8。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-63",
        "truth": false,
        "reason": "誤作減法。"
      },
      {
        "choice": "63",
        "truth": false,
        "reason": "誤作加法。"
      },
      {
        "choice": "-8",
        "truth": true,
        "reason": "72÷(-9)=-8。"
      }
    ],
    "commonMistake": "把72÷9算對後忘記負除數。",
    "concept": "正除負得負。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "正數除以負數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "14dc13eefa44896e4146f33f2a7be1519553e6623c775f21886ce40b89c44efa",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-2)×(-3)×(-5) 的結果符號與值為何？",
    "choices": [
      "-30",
      "30",
      "-10",
      "10"
    ],
    "answerIndex": 0,
    "explanation": "共有三個負因數，奇數個負號使乘積為負；2×3×5=30。",
    "steps": [
      "數負因數3個。",
      "奇數個得負。",
      "絕對值乘積30。"
    ],
    "optionAnalysis": [
      {
        "choice": "-30",
        "truth": true,
        "reason": "負號3個，結果-30。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "忽略第三個負號。"
      },
      {
        "choice": "-10",
        "truth": false,
        "reason": "大小錯。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "大小與符號錯。"
      }
    ],
    "commonMistake": "只看前兩個負數相乘為正，就忘記再乘第三個負數。",
    "concept": "奇數個負因數的乘積為負。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "判斷三個負因數的乘積。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9dfde0e1dd454547bf2274630c5b964339c77dc654216220762f4cf5c717a991",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-96)÷(-12) 的值是多少？",
    "choices": [
      "-8",
      "8",
      "-108",
      "108"
    ],
    "answerIndex": 1,
    "explanation": "兩數同號相除得正；96÷12=8。",
    "steps": [
      "同為負數。",
      "同號商為正。",
      "96÷12=8。"
    ],
    "optionAnalysis": [
      {
        "choice": "-8",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "8",
        "truth": true,
        "reason": "(-96)/(-12)=8。"
      },
      {
        "choice": "-108",
        "truth": false,
        "reason": "誤作加法。"
      },
      {
        "choice": "108",
        "truth": false,
        "reason": "漏除法。"
      }
    ],
    "commonMistake": "負被除數使答案固定為負。",
    "concept": "負除負得正。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "負數除以負數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d96d2417a49955b124c955560cc10c6bf4283ed38906c036711ef5b2af33c21a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-2)×5×(-3)×(-1) 的值是多少？",
    "choices": [
      "30",
      "-10",
      "-30",
      "10"
    ],
    "answerIndex": 2,
    "explanation": "負因數有 -2、-3、-1，共三個，乘積為負；2×5×3×1=30，所以-30。",
    "steps": [
      "數出3個負因數。",
      "奇數個得負。",
      "算絕對值30。"
    ],
    "optionAnalysis": [
      {
        "choice": "30",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-10",
        "truth": false,
        "reason": "漏乘3。"
      },
      {
        "choice": "-30",
        "truth": true,
        "reason": "三負因數，絕對值30，得-30。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "大小與符號錯。"
      }
    ],
    "commonMistake": "把-1當作不影響符號。",
    "concept": "乘以-1會改變符號。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "處理含-1的多因數乘積。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bc2f2f899a4e7177fc2e5dff7cef9ce3dbe8ed129b8e04410f79220e276eaab9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x×(-7)=56，則 x 等於多少？",
    "choices": [
      "8",
      "-49",
      "49",
      "-8"
    ],
    "answerIndex": 3,
    "explanation": "x=56÷(-7)=-8。檢查(-8)×(-7)=56。",
    "steps": [
      "用除法反求x。",
      "56÷(-7)=-8。",
      "乘回檢查。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "8×-7=-56。"
      },
      {
        "choice": "-49",
        "truth": false,
        "reason": "大小錯。"
      },
      {
        "choice": "49",
        "truth": false,
        "reason": "49×-7不等56。"
      },
      {
        "choice": "-8",
        "truth": true,
        "reason": "x=-8。"
      }
    ],
    "commonMistake": "只算56÷7=8，沒有判斷異號商。",
    "concept": "未知因數＝積÷已知因數。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "由積反求負因數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1e1c90c47512232fa5048ca97ce5a0734a271f8392c09ade9f988c8307a15105",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-144)÷8÷(-3) 的值是多少？",
    "choices": [
      "6",
      "-6",
      "54",
      "-54"
    ],
    "answerIndex": 0,
    "explanation": "乘除同級由左到右：-144÷8=-18，再-18÷(-3)=6。",
    "steps": [
      "先-144÷8=-18。",
      "再-18÷-3。",
      "同號得6。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": true,
        "reason": "(-144÷8)÷(-3)=6。"
      },
      {
        "choice": "-6",
        "truth": false,
        "reason": "漏第二次符號轉正。"
      },
      {
        "choice": "54",
        "truth": false,
        "reason": "錯誤分組。"
      },
      {
        "choice": "-54",
        "truth": false,
        "reason": "大小與符號錯。"
      }
    ],
    "commonMistake": "先算8÷(-3)，造成非整數並破壞原順序。",
    "concept": "連續乘除同級由左到右。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "處理連續除法與兩次符號判斷。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "918b1195d00fba18bca2a07acbaac2a19a15975e818ac6fa100fa0979cd34fcb",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某設備每小時效能變化為 -4 單位，連續運轉 9 小時，總變化量是多少？",
    "choices": [
      "36 單位",
      "-36 單位",
      "-13 單位",
      "5 單位"
    ],
    "answerIndex": 1,
    "explanation": "每小時-4，重複9次，總變化=(-4)×9=-36。",
    "steps": [
      "固定每小時變化-4。",
      "乘以9小時。",
      "得到-36。"
    ],
    "optionAnalysis": [
      {
        "choice": "36 單位",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-36 單位",
        "truth": true,
        "reason": "-4×9=-36。"
      },
      {
        "choice": "-13 單位",
        "truth": false,
        "reason": "把乘法當加法。"
      },
      {
        "choice": "5 單位",
        "truth": false,
        "reason": "錯誤相減。"
      }
    ],
    "commonMistake": "只回答效能剩下多少，但題目沒有提供起始效能。",
    "concept": "固定帶號速率的重複變化用乘法。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "literacy"
    ],
    "estimatedTimeSec": "80",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "把每小時下降轉成負數乘法。",
    "literacyContextNecessity": "每小時變化、持續時間與「總變化」措辭共同決定算式。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "995e5e1f3d1edffbff602616662e51a9654998fd9ee8374de7c84898dfa1ce3d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "冷藏室起始溫度 5°C，控制器每小時使溫度變化 -2°C，連續 6 小時後溫度為何？",
    "choices": [
      "17°C",
      "-12°C",
      "-7°C",
      "7°C"
    ],
    "answerIndex": 2,
    "explanation": "總變化=(-2)×6=-12°C；最後溫度=5+(-12)=-7°C。",
    "steps": [
      "求總變化-12。",
      "加到起始5。",
      "得到-7。"
    ],
    "optionAnalysis": [
      {
        "choice": "17°C",
        "truth": false,
        "reason": "把降溫當升溫。"
      },
      {
        "choice": "-12°C",
        "truth": false,
        "reason": "是總變化不是最後值。"
      },
      {
        "choice": "-7°C",
        "truth": true,
        "reason": "5+(-2)×6=-7°C。"
      },
      {
        "choice": "7°C",
        "truth": false,
        "reason": "只減一次2。"
      }
    ],
    "commonMistake": "算出-12後直接當作最後溫度。",
    "concept": "最後量＝起始量＋速率×時間。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "結合負速率乘法與起始溫度。",
    "literacyContextNecessity": "起始值、每小時變化、時間及求最後值都必要。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c35b70bfbdcf80e5f8b127496389389e1669a818dfd5582bb33714f11477f374",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "共同債務記為 -840 元，由 7 人平均分擔。每人分擔的帶號金額是多少？",
    "choices": [
      "120 元",
      "-5,880 元",
      "5,880 元",
      "-120 元"
    ],
    "answerIndex": 3,
    "explanation": "-840÷7=-120 元，負號表示每人的帳戶各承擔120元債務。",
    "steps": [
      "總債務-840。",
      "平均分7份。",
      "-840÷7=-120。"
    ],
    "optionAnalysis": [
      {
        "choice": "120 元",
        "truth": false,
        "reason": "漏負號。"
      },
      {
        "choice": "-5,880 元",
        "truth": false,
        "reason": "把除法當乘法且負。"
      },
      {
        "choice": "5,880 元",
        "truth": false,
        "reason": "把除法當乘法。"
      },
      {
        "choice": "-120 元",
        "truth": true,
        "reason": "-840/7=-120元。"
      }
    ],
    "commonMistake": "平均分擔後只寫120，沒有保留債務方向。",
    "concept": "負總量平均分配給正份數，商為負。",
    "tags": [
      "數與量",
      "整數的乘法和除法",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-subtraction"
    ],
    "authoringIntent": "在債務分攤中使用負除正。",
    "literacyContextNecessity": "帶號總債務、分擔人數與平均分配語意共同決定商。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0c0f8389103f793a5c066fe9d10566713fb1313fc541308feb38998c4c688f69",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s010-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "計算：(-6)×4、(-45)÷(-5)、(-2)×(-3)×7。每題先判斷符號，再算絕對值。",
    "requiredWork": [
      "每題分成符號與絕對值兩步。",
      "除數不得忽略。"
    ],
    "fullCreditSolution": [
      "(-6)×4：異號得負，6×4=24，答案-24。",
      "(-45)÷(-5)：同號得正，45÷5=9。",
      "(-2)×(-3)×7：兩個負因數，乘積為正，2×3×7=42。"
    ],
    "alternativeSolutions": [
      "可用逐步相乘，但須顯示符號判斷。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三題符號、值與步驟全部正確。"
      },
      {
        "score": 2,
        "criteria": "三個答案正確但一處說明缺漏；或一題小錯。"
      },
      {
        "score": 1,
        "criteria": "至少一題完整正確且符號規則可辨認。"
      },
      {
        "score": 0,
        "criteria": "同號異號規則大多顛倒。"
      }
    ],
    "scoringNotes": [
      "第三題只有兩個負因數。"
    ],
    "commonErrors": [
      "負乘負寫負。",
      "負除負寫負。",
      "漏乘7。"
    ],
    "independentReview": {
      "derivedResult": "-24、9、42。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "63b8d35221236007a03734d7aec20ecc3612d774629eb44d0f6748155c076669",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s010-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-multiplication-division",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某潛水器起始深度為 -20 公尺，每分鐘下沉 3 公尺，連續 8 分鐘後，再平均分成 4 段回報這段總深度變化。求最後深度、總變化量，以及每段平均變化量。",
    "requiredWork": [
      "下沉速率記-3。",
      "最後深度與總變化分開。",
      "平均變化量保留負號。"
    ],
    "fullCreditSolution": [
      "總變化=(-3)×8=-24 公尺。",
      "最後深度=-20+(-24)=-44 公尺。",
      "每段平均變化=-24÷4=-6 公尺。"
    ],
    "alternativeSolutions": [
      "可先求最後深度，再用-44-(-20)驗算總變化。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三個量-24、-44、-6及意義全部正確。"
      },
      {
        "score": 2,
        "criteria": "兩個量正確且方法完整；或一處算術小錯。"
      },
      {
        "score": 1,
        "criteria": "正確建立-3×8或求出一個主要量。"
      },
      {
        "score": 0,
        "criteria": "把下沉記正且無可辨認方法。"
      }
    ],
    "scoringNotes": [
      "每段是總變化平均，不是最後深度除4。"
    ],
    "commonErrors": [
      "把-44÷4當平均變化。",
      "總變化寫24。",
      "最後深度寫4。"
    ],
    "independentReview": {
      "derivedResult": "總變化-24公尺，最後-44公尺，每段-6公尺。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "bed7b714446afe44b3c93ed67bbf55bff5c60a8273b87f31da2456cc4af2a332",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
