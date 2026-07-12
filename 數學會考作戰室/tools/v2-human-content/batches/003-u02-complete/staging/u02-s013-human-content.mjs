// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s013-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-fraction-ratio",
  "skillId": "fraction-percent-discount",
  "title": "百分率和折扣與成數：把百分率轉成倍率，正確處理連續價格變動",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能在百分率、分數與小數間互換。",
    "能計算折扣、漲價、降價與成數。",
    "能由折後價反求原價。",
    "能用倍率處理連續變動、稅率與促銷比較。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-complex-fraction-basic",
      "requiredLevel": "能以分數除法反求整體，並處理基本比例式。"
    }
  ],
  "glossary": [
    {
      "term": "百分率",
      "definition": "以100為基準的比率。"
    },
    {
      "term": "折數",
      "definition": "售價佔原價的十分之幾。"
    },
    {
      "term": "成數",
      "definition": "增減量佔基準量的十分之幾。"
    },
    {
      "term": "倍率",
      "definition": "新量除以原量，例如增加20%對應1.2。"
    }
  ],
  "notation": [
    {
      "symbol": "p%",
      "meaning": "p/100。"
    },
    {
      "symbol": "八五折",
      "meaning": "原價的85%。"
    },
    {
      "symbol": "一成五",
      "meaning": "15%。"
    }
  ],
  "conceptNarrative": [
    "p%=p/100。",
    "八折表示付80%，不是減少8%。",
    "增加p%後乘1+p%，減少p%後乘1-p%。",
    "連續變動的基準會更新，因此倍率相乘，百分點不能直接相加減。"
  ],
  "formalDefinitions": [
    {
      "name": "折扣",
      "statement": "售價=原價×折數。"
    },
    {
      "name": "增減率",
      "statement": "變化量÷原基準量。"
    }
  ],
  "formulas": [
    {
      "formula": "售價=原價×折數",
      "conditions": [
        "折數轉為小數或分數"
      ],
      "meaning": "折扣計算。"
    },
    {
      "formula": "新量=原量×(1±率)",
      "conditions": [
        "增加用+、減少用-"
      ],
      "meaning": "增減變化。"
    }
  ],
  "nonApplicableCases": [
    "『減20%』與『打八折』等價，但『打二折』不是減20%。",
    "第二件折扣只作用第二件。",
    "加稅百分率通常以未稅或折後價為基準。",
    "連續變動不能用百分率簡單相抵。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "確認基準量。",
      "check": "百分率以誰為100%？"
    },
    {
      "step": 2,
      "instruction": "把百分率、折數或成數轉為倍率。",
      "check": "八折=0.8嗎？"
    },
    {
      "step": 3,
      "instruction": "依順序相乘或相除。",
      "check": "已知原量還是新量？"
    },
    {
      "step": 4,
      "instruction": "處理定額優惠。",
      "check": "先後順序是否明確？"
    },
    {
      "step": 5,
      "instruction": "比較與驗算。",
      "check": "折扣後是否合理降低？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "1500元打七折。",
      "solutionSteps": [
        "七折=0.7。",
        "1500×0.7。"
      ],
      "answer": "1050元。"
    },
    {
      "exampleId": "L2",
      "prompt": "售價680元為八折價。",
      "solutionSteps": [
        "原價×0.8=680。",
        "680÷0.8。"
      ],
      "answer": "850元。"
    },
    {
      "exampleId": "L3",
      "prompt": "先漲10%再降10%。",
      "solutionSteps": [
        "倍率1.1×0.9=0.99。",
        "不是回到原價。"
      ],
      "answer": "比原價少1%。"
    },
    {
      "exampleId": "L4",
      "prompt": "九折後加5%稅。",
      "solutionSteps": [
        "總倍率0.9×1.05。",
        "=0.945。"
      ],
      "answer": "實付原價94.5%。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把八折當減8%。",
      "why": "混淆十分制與百分制。",
      "correction": "八折=80%。"
    },
    {
      "mistake": "已知折後價仍乘折數。",
      "why": "運算方向錯。",
      "correction": "反求原價要除。"
    },
    {
      "mistake": "漲20%後倍率寫0.2。",
      "why": "只寫增加部分。",
      "correction": "新量倍率是1.2。"
    },
    {
      "mistake": "連續百分率直接相加減。",
      "why": "忽略基準更新。",
      "correction": "倍率相乘。"
    },
    {
      "mistake": "第二件優惠套到兩件。",
      "why": "未讀適用範圍。",
      "correction": "逐件列價。"
    },
    {
      "mistake": "百分率與金額直接相加。",
      "why": "單位不同。",
      "correction": "先求百分金額。"
    }
  ],
  "selfCheck": [
    "百分率的基準量是誰？",
    "折數是否轉成正確倍率？",
    "已知的是原價還是售價？",
    "連續變化是否用乘法？",
    "定額優惠順序是否照題意？"
  ],
  "summary": [
    "百分率以100為基準。",
    "折數以10為基準。",
    "增減後使用1±率倍率。",
    "連續變化倍率相乘。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-complex-fraction-basic，需能完成其基本判斷與計算。",
    "next": [
      "基準量判斷會系統處理百分語句中的比較物件。",
      "綜合應用會比較方案與多階段變化。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s013-v001",
      "u02-s013-v002",
      "u02-s013-v003",
      "u02-s013-v004",
      "u02-s013-v005",
      "u02-s013-v006",
      "u02-s013-v007",
      "u02-s013-v008",
      "u02-s013-v009",
      "u02-s013-v010",
      "u02-s013-v011",
      "u02-s013-v012"
    ],
    "constructedResponseIds": [
      "u02-s013-cr001",
      "u02-s013-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "折扣、成數、漲跌與稅率例題均以代回原價方式核對；八八折、折價券與5%服務費的先後基準已逐步重算，連續倍率不誤加。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "91aa06921655eb57e41b6754ee13af8f250aab680ae874cd221957c37eb9e7c3",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s013-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "25% 化成最簡分數為何？",
    "choices": [
      "1/4",
      "1/25",
      "25/10",
      "3/4"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：25%=25/100；約分得1/4。所以答案是「1/4」。",
    "steps": [
      "25%=25/100",
      "約分得1/4"
    ],
    "optionAnalysis": [
      {
        "choice": "1/4",
        "truth": true,
        "reason": "1/4正確。"
      },
      {
        "choice": "1/25",
        "truth": false,
        "reason": "把百分號誤作除25。"
      },
      {
        "choice": "25/10",
        "truth": false,
        "reason": "分母應為100。"
      },
      {
        "choice": "3/4",
        "truth": false,
        "reason": "3/4是75%。"
      }
    ],
    "commonMistake": "把25%寫成25/10。",
    "concept": "百分率表示以100為分母。",
    "tags": [
      "數與量",
      "百分率和折扣與成數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-complex-fraction-basic"
    ],
    "authoringIntent": "百分率轉分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c25aba97823b9d4551bcf164326b09b0c24cb0f59fe602a745ad792cd1738d39",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s013-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一件 800 元商品打八折，售價是多少？",
    "choices": [
      "80 元",
      "640 元",
      "720 元",
      "1000 元"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：八折=原價的80%；800×0.8=640。所以答案是「640 元」。",
    "steps": [
      "八折=原價的80%",
      "800×0.8=640"
    ],
    "optionAnalysis": [
      {
        "choice": "80 元",
        "truth": false,
        "reason": "只取10%。"
      },
      {
        "choice": "640 元",
        "truth": true,
        "reason": "640元正確。"
      },
      {
        "choice": "720 元",
        "truth": false,
        "reason": "這是九折。"
      },
      {
        "choice": "1000 元",
        "truth": false,
        "reason": "售價不會高於原價。"
      }
    ],
    "commonMistake": "把八折當成減少8%。",
    "concept": "八折表示付原價的80%。",
    "tags": [
      "數與量",
      "百分率和折扣與成數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-complex-fraction-basic"
    ],
    "authoringIntent": "基本折扣計算。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8bba34b4a079e92d692ed703dd36aec88bda77c01b1d73015afe840d4dbcdf51",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s013-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某數的 30% 是 45，該數是多少？",
    "choices": [
      "13.5",
      "105",
      "150",
      "135"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：設原數x，0.3x=45；x=45÷0.3=150。所以答案是「150」。",
    "steps": [
      "設原數x，0.3x=45",
      "x=45÷0.3=150"
    ],
    "optionAnalysis": [
      {
        "choice": "13.5",
        "truth": false,
        "reason": "這是45的30%。"
      },
      {
        "choice": "105",
        "truth": false,
        "reason": "只加60。"
      },
      {
        "choice": "150",
        "truth": true,
        "reason": "150正確。"
      },
      {
        "choice": "135",
        "truth": false,
        "reason": "應以45÷0.3反求原數；135不是此除法的結果。"
      }
    ],
    "commonMistake": "已知部分求整體時又乘百分率。",
    "concept": "整體=部分÷百分率。",
    "tags": [
      "數與量",
      "百分率和折扣與成數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-complex-fraction-basic"
    ],
    "authoringIntent": "百分率反求總量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e413a775e38148812c9c3336af76d92f5a21d93a7cbbda0a0111dc95fef23c90",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s013-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "原價 1200 元先打九折，再折 100 元，售價為何？",
    "choices": [
      "900 元",
      "1000 元",
      "1100 元",
      "980 元"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：1200×0.9=1080；1080-100=980。所以答案是「980 元」。",
    "steps": [
      "1200×0.9=1080",
      "1080-100=980"
    ],
    "optionAnalysis": [
      {
        "choice": "900 元",
        "truth": false,
        "reason": "優惠過多。"
      },
      {
        "choice": "1000 元",
        "truth": false,
        "reason": "把兩種優惠錯合併。"
      },
      {
        "choice": "1100 元",
        "truth": false,
        "reason": "只減100。"
      },
      {
        "choice": "980 元",
        "truth": true,
        "reason": "980元正確。"
      }
    ],
    "commonMistake": "把100元先減再打折，改變題目順序。",
    "concept": "連續優惠依題意順序計算。",
    "tags": [
      "數與量",
      "百分率和折扣與成數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-complex-fraction-basic"
    ],
    "authoringIntent": "折扣與定額優惠。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1e794f6c22ba06e2d71a4754a6a4de019b4855393d767378acdbab20f45114e6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s013-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某商品由 500 元漲價 20%，新價格是多少？",
    "choices": [
      "600 元",
      "520 元",
      "400 元",
      "625 元"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：漲價20%表示新價為原價120%；500×1.2=600。所以答案是「600 元」。",
    "steps": [
      "漲價20%表示新價為原價120%",
      "500×1.2=600"
    ],
    "optionAnalysis": [
      {
        "choice": "600 元",
        "truth": true,
        "reason": "600元正確。"
      },
      {
        "choice": "520 元",
        "truth": false,
        "reason": "只加20元。"
      },
      {
        "choice": "400 元",
        "truth": false,
        "reason": "這是降價20%。"
      },
      {
        "choice": "625 元",
        "truth": false,
        "reason": "錯用除法。"
      }
    ],
    "commonMistake": "把20%當成20元。",
    "concept": "增加p%後為原量×(1+p)。",
    "tags": [
      "數與量",
      "百分率和折扣與成數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-complex-fraction-basic"
    ],
    "authoringIntent": "漲價百分率。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "aef636ca2d93bf894214a642f6635bb92812df6e802ff18758b468874525be85",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s013-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "售價 720 元是原價打八折後的價格，原價是多少？",
    "choices": [
      "576 元",
      "900 元",
      "864 元",
      "1000 元"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：720=原價×0.8；原價=720÷0.8=900。所以答案是「900 元」。",
    "steps": [
      "720=原價×0.8",
      "原價=720÷0.8=900"
    ],
    "optionAnalysis": [
      {
        "choice": "576 元",
        "truth": false,
        "reason": "又乘0.8。"
      },
      {
        "choice": "900 元",
        "truth": true,
        "reason": "900元正確。"
      },
      {
        "choice": "864 元",
        "truth": false,
        "reason": "錯用1.2。"
      },
      {
        "choice": "1000 元",
        "truth": false,
        "reason": "估值過高。"
      }
    ],
    "commonMistake": "看到八折就直接乘0.8，忽略已知的是售價。",
    "concept": "已知折後價求原價要除以折數。",
    "tags": [
      "數與量",
      "百分率和折扣與成數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-complex-fraction-basic"
    ],
    "authoringIntent": "折扣反求原價。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "28f63d7320efc8f5f949209eaf72bc4b10d915295dfba1a23584d24beb041f75",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s013-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "商品先漲價 25%，再打八折，最後價格與原價相比如何？",
    "choices": [
      "增加5%",
      "減少5%",
      "相同",
      "增加20%"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：總倍率1.25×0.8=1；最後等於原價。所以答案是「相同」。",
    "steps": [
      "總倍率1.25×0.8=1",
      "最後等於原價"
    ],
    "optionAnalysis": [
      {
        "choice": "增加5%",
        "truth": false,
        "reason": "倍率不是1.05。"
      },
      {
        "choice": "減少5%",
        "truth": false,
        "reason": "沒有減少。"
      },
      {
        "choice": "相同",
        "truth": true,
        "reason": "總倍率1，價格相同。"
      },
      {
        "choice": "增加20%",
        "truth": false,
        "reason": "不能只看八折。"
      }
    ],
    "commonMistake": "把25%-20%=5%作為結果。",
    "concept": "連續百分率要乘倍率，不能直接加減百分點。",
    "tags": [
      "數與量",
      "百分率和折扣與成數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-complex-fraction-basic"
    ],
    "authoringIntent": "連續變動倍率。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "eafe79e11df49fe152579771df07fb4e09542f212ffc5fe0b4a60f88c594d06a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s013-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某商品打七五折後再加 5% 營業稅，實付相當於原價的多少？",
    "choices": [
      "70%",
      "75%",
      "80%",
      "78.75%"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：折後倍率0.75；加稅倍率1.05，總倍率0.7875=78.75%。所以答案是「78.75%」。",
    "steps": [
      "折後倍率0.75",
      "加稅倍率1.05，總倍率0.7875=78.75%"
    ],
    "optionAnalysis": [
      {
        "choice": "70%",
        "truth": false,
        "reason": "只取70%既不等於七五折，也漏掉折後再乘1.05的稅率。"
      },
      {
        "choice": "75%",
        "truth": false,
        "reason": "只算折扣。"
      },
      {
        "choice": "80%",
        "truth": false,
        "reason": "把5%直接加到75%得80%。"
      },
      {
        "choice": "78.75%",
        "truth": true,
        "reason": "78.75%正確。"
      }
    ],
    "commonMistake": "把加稅5%直接加5個百分點。",
    "concept": "後續百分率以當時金額為基準，相乘處理。",
    "tags": [
      "數與量",
      "百分率和折扣與成數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-complex-fraction-basic"
    ],
    "authoringIntent": "折扣後加稅。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fe7e93a17778c033fea48eb07e225735f3b0cdb0374cbd40858d111a2e70899d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s013-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A 店打八折；B 店先減 150 元再打九折。原價 1000 元商品在哪店較便宜，差多少？",
    "choices": [
      "B 店便宜 35 元",
      "A 店便宜 35 元",
      "A 店便宜 50 元",
      "兩店同價"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：A=800元；B=(1000-150)×0.9=765元，所以B便宜35元。所以答案是「B 店便宜 35 元」。",
    "steps": [
      "A=800元",
      "B=(1000-150)×0.9=765元，所以B便宜35元"
    ],
    "optionAnalysis": [
      {
        "choice": "B 店便宜 35 元",
        "truth": true,
        "reason": "B比A少35元。"
      },
      {
        "choice": "A 店便宜 35 元",
        "truth": false,
        "reason": "方向相反。"
      },
      {
        "choice": "A 店便宜 50 元",
        "truth": false,
        "reason": "差額不是50。"
      },
      {
        "choice": "兩店同價",
        "truth": false,
        "reason": "兩店價格不同。"
      }
    ],
    "commonMistake": "只比較折數，忽略B店先減150元。",
    "concept": "比較方案要完整計算每個優惠流程。",
    "tags": [
      "數與量",
      "百分率和折扣與成數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-complex-fraction-basic"
    ],
    "authoringIntent": "比較兩種促銷方案。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "03b2c31dcbb00f91611dc1e2c6a0f7bacc64d4f38ef3d6c22780fce88ed317a1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s013-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "商店標示『第二件六折』。兩件同價各 500 元，總價是多少？",
    "choices": [
      "600 元",
      "800 元",
      "1000 元",
      "1100 元"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：第一件500元，第二件500×0.6=300元；總價800元。所以答案是「800 元」。",
    "steps": [
      "第一件500元，第二件500×0.6=300元",
      "總價800元"
    ],
    "optionAnalysis": [
      {
        "choice": "600 元",
        "truth": false,
        "reason": "只付第二件折後價。"
      },
      {
        "choice": "800 元",
        "truth": true,
        "reason": "500+300=800。"
      },
      {
        "choice": "1000 元",
        "truth": false,
        "reason": "未使用優惠。"
      },
      {
        "choice": "1100 元",
        "truth": false,
        "reason": "把六折當加價。"
      }
    ],
    "commonMistake": "把兩件都打六折或只算第二件。",
    "concept": "優惠文字要確認適用範圍。",
    "tags": [
      "數與量",
      "百分率和折扣與成數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-complex-fraction-basic"
    ],
    "authoringIntent": "第二件折扣。",
    "literacyContextNecessity": "兩件同價與『只有第二件六折』的適用範圍是計算總價的必要資訊。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "96a6a8dca17e7c82aee719b4b1013a4b8f18f35fd3f3de93513edf323a49ead0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s013-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班 40 人，出席率為 92.5%。出席幾人？",
    "choices": [
      "35 人",
      "36 人",
      "37 人",
      "38 人"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：40×0.925=37；人數為37。所以答案是「37 人」。",
    "steps": [
      "40×0.925=37",
      "人數為37"
    ],
    "optionAnalysis": [
      {
        "choice": "35 人",
        "truth": false,
        "reason": "35對應87.5%。"
      },
      {
        "choice": "36 人",
        "truth": false,
        "reason": "36對應90%。"
      },
      {
        "choice": "37 人",
        "truth": true,
        "reason": "37人正確。"
      },
      {
        "choice": "38 人",
        "truth": false,
        "reason": "38對應95%。"
      }
    ],
    "commonMistake": "百分率小數轉換錯一位。",
    "concept": "人數=總人數×出席率，結果應符合整數人數。",
    "tags": [
      "數與量",
      "百分率和折扣與成數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-complex-fraction-basic"
    ],
    "authoringIntent": "出席率計算。",
    "literacyContextNecessity": "班級總人數與出席率共同決定實際出席人數，且答案必須回到整數人數檢查，情境資料不可刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4f3a8235f1dcdd84e0309be0dc7991162e5d65194cf8401f6e6cb5973938b45d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s013-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某農產品今年產量比去年增加一成五。若去年 800 公斤，今年多少公斤？",
    "choices": [
      "815 公斤",
      "880 公斤",
      "900 公斤",
      "920 公斤"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：一成五=15%；800×1.15=920。所以答案是「920 公斤」。",
    "steps": [
      "一成五=15%",
      "800×1.15=920"
    ],
    "optionAnalysis": [
      {
        "choice": "815 公斤",
        "truth": false,
        "reason": "把15%當15公斤。"
      },
      {
        "choice": "880 公斤",
        "truth": false,
        "reason": "只增加10%。"
      },
      {
        "choice": "900 公斤",
        "truth": false,
        "reason": "增加12.5%。"
      },
      {
        "choice": "920 公斤",
        "truth": true,
        "reason": "920公斤正確。"
      }
    ],
    "commonMistake": "不熟悉成數，把一成五讀成1.5%。",
    "concept": "一成=10%，一成五=15%。",
    "tags": [
      "數與量",
      "百分率和折扣與成數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-complex-fraction-basic"
    ],
    "authoringIntent": "成數增長。",
    "literacyContextNecessity": "去年產量是100%的基準，「增加一成五」決定倍率1.15；缺少任一情境資料都無法求今年公斤數。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8007e161df0979884250b8eff785f72be1ddd5cd5409669456629833cd9e8b29",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s013-cr001",
    "unitId": "u02",
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "一件商品原價 2500 元，先打八八折，再使用 150 元折價券；店家最後以使用折價券後的金額為基準，加收 5% 服務費。求實付金額。",
    "requiredWork": [
      "按題目順序。",
      "服務費基準是使用折價券後的金額。"
    ],
    "fullCreditSolution": [
      "2500×0.88=2200元。",
      "2200-150=2050元。",
      "2050×1.05=2152.5元。"
    ],
    "alternativeSolutions": [
      "可將最後一步寫2050+102.5。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三步驟與2152.5元完整。"
      },
      {
        "score": 2,
        "criteria": "順序正確但一處算術小錯。"
      },
      {
        "score": 1,
        "criteria": "能正確算出折後2200或券後2050。"
      },
      {
        "score": 0,
        "criteria": "優惠順序錯誤且答案不合理。"
      }
    ],
    "scoringNotes": [
      "金額可寫2152元5角；不得擅自四捨五入到整數。"
    ],
    "commonErrors": [
      "折價券先從原價扣。",
      "服務費以原價計算。"
    ],
    "independentReview": {
      "derivedResult": "實付2152.5元。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "a324ce41003ff5e6bad6a794da02a84c3172ead7b0f862c72c47118547414160",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s013-cr002",
    "unitId": "u02",
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-percent-discount",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某商品先漲價 20%，再降價 15%，最後售價為 1224 元。求原價，並說明最後相對原價增減多少百分比。",
    "requiredWork": [
      "用連續倍率。",
      "反求原價。",
      "比較總倍率。"
    ],
    "fullCreditSolution": [
      "總倍率1.2×0.85=1.02。",
      "原價=1224÷1.02=1200元。",
      "最後為原價102%，即增加2%。"
    ],
    "alternativeSolutions": [
      "可設原價x，列1.02x=1224。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "原價1200與增加2%均正確。"
      },
      {
        "score": 2,
        "criteria": "原價正確但百分比說明略缺。"
      },
      {
        "score": 1,
        "criteria": "總倍率1.02正確但未完成。"
      },
      {
        "score": 0,
        "criteria": "直接20%-15%=5%。"
      }
    ],
    "scoringNotes": [
      "百分率以原價為基準。"
    ],
    "commonErrors": [
      "把漲跌率直接相減。",
      "用1224減2%求原價。"
    ],
    "independentReview": {
      "derivedResult": "原價1200元，最後增加2%。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "6f0ace583618903ece033146069cce1a6c05650eea688807fce01abba0129528",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
