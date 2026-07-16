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
    "百分率 p% 表示 p/100。折數以十分制表示，八折就是原價的 80%；成數也可換成百分率，例如一成五等於 15%。",
    "已知原量求增加或減少後的新量，可把變動轉成倍率：增加 p% 乘 1+p%，減少 p% 乘 1−p%。已知新量反求原量則要除以倍率。",
    "連續折扣、漲價或加稅的基準會隨每一步更新，因此應依題目順序相乘倍率，不能把百分點直接相加減。定額折價券則要在指定時點做金額加減。",
    "完成後應比較答案與原價的大小，並把總倍率轉回百分率解釋。例如總倍率 1.02 表示最後是原價的 102%，也就是增加 2%。"
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
      "prompt": "一件 1500 元商品打七折，售價是多少？",
      "solutionSteps": [
        "把七折寫成原價的 70%，倍率為 0.7。",
        "計算 1500×0.7＝1050 元。",
        "另算折掉的 30% 為 450 元，以 1500－450 驗得 1050 元。"
      ],
      "answer": "1050 元。",
      "why": "七折表示支付原價的 70%，倍率為 0.7，所以售價是 1500×0.7=1050 元。也可先算折掉 30% 為 450 元，再以 1500−450 驗算。折後價低於原價，符合七折情境。"
    },
    {
      "prompt": "某商品八折售價為 680 元，原價是多少？",
      "solutionSteps": [
        "八折價是原價的 80%，設原價 x 元，列 0.8x＝680。",
        "兩邊同除以 0.8，求得 x＝850 元。",
        "以 850×0.8＝680 代回驗算折後價。"
      ],
      "answer": "850 元。",
      "why": "八折價等於原價的 80%，所以 680=原價×0.8。已知折後價反求原價要除以倍率，680÷0.8=850 元；代回 850×0.8=680。折後價比原價少一百七十元，正是原價的兩成。"
    },
    {
      "prompt": "價格先漲 10% 再降 10%，最後與原價相比如何？",
      "solutionSteps": [
        "先漲 10% 的倍率為 1.1，再降 10% 的倍率為 0.9。",
        "依順序相乘 1.1×0.9＝0.99。",
        "把 0.99 轉為原價的 99%，判定比原價少 1%。"
      ],
      "answer": "比原價少 1%。",
      "why": "兩次變動的基準不同，要相乘倍率 1.1×0.9=0.99。最後是原價的 99%，因此少 1%；直接用加十個百分點再減十個百分點會誤判為相同。"
    },
    {
      "prompt": "商品九折後再加 5% 稅，實付是原價的多少？",
      "solutionSteps": [
        "九折倍率為 0.9，加 5% 稅的倍率為 1.05。",
        "按題目順序計算 0.9×1.05＝0.945。",
        "將總倍率轉成百分率，得到實付為原價的 94.5%。"
      ],
      "answer": "原價的 94.5%。",
      "why": "九折倍率是 0.9，加稅倍率是 1.05，依順序相乘得 0.9×1.05=0.945，所以實付為原價的 94.5%；稅率作用在折後價。總倍率小於一，表示實付仍低於原價。"
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
  "contentSha256": "91777573af1b1196ef9c32321a7d690b1a6b13353e59d77b5a8dd7e54e94f728",
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
    "explanation": "百分率表示以 100 為分母的分數，所以 25%=25/100。分子、分母同除以最大公因數 25，得到 1/4；反向計算 1÷4=0.25，也就是 25%。分子與分母已互質，因此四分之一就是最簡分數。",
    "steps": [
      "將 25% 寫成 25/100。",
      "分子、分母同除以 25，約成 1/4。",
      "把 1/4 化成 0.25 驗證等於 25%。"
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
    "commonMistake": "把百分號誤認為除以十，將百分之二十五錯寫成二十五分之十。",
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
    "contentSha256": "90708e754ea2fe642e3a6230c03b265c7954d85d2d2c49f1bef805e8a4f18d0d",
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
    "explanation": "八折表示售價是原價的 80%，不是減少 8%。因此售價為 800×0.8=640 元；也可先算折掉 20% 為 160 元，再以 800−160 得到 640 元。兩種算法都以原價八百元為相同基準，結果一致。",
    "steps": [
      "把八折轉成倍率 0.8。",
      "計算 800×0.8=640。",
      "以原價減去 20% 的折扣額驗算，仍得 640 元。"
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
    "commonMistake": "把八折讀成只減少百分之八，使用零點九二的錯誤倍率。",
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
    "contentSha256": "a3a8178b14a2dd24f26dc19d86d899df0b3a5824eaa8a83ed9318562038448fc",
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
    "explanation": "設原數為 x，題意是 x 的 30% 等於 45，因此 0.3x=45。已知部分反求整體要除以分率，x=45÷0.3=150；驗算 150×30%=45。因為三成小於全部，原數一百五十也應大於已知部分四十五。",
    "steps": [
      "設原數為 x，列式 0.3x=45。",
      "兩邊除以 0.3，得到 x=150。",
      "代回計算 150×0.3=45，確認符合題意。"
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
    "commonMistake": "已知百分之三十所對應的部分量後仍再乘零點三，沒有用除法反求整體。",
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
    "contentSha256": "01c949a8b0772587f8618c9ee14e758ac7f0e178ca0de8c57f5101fb6a9b24e3",
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
    "explanation": "優惠有明確順序，先打九折得 1200×0.9=1080 元，再從折後價扣 100 元，得到 1080−100=980 元。若先減 100 再打折，折扣基準會改變。原價先少一百二十元，再少一百元，合計也可核對實付金額。",
    "steps": [
      "先依九折計算 1200×0.9=1080 元。",
      "再使用定額折價，1080−100=980 元。",
      "依題目順序檢查兩個優惠都已套用。"
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
    "commonMistake": "先從原價扣一百元再打九折，顛倒題目指定的優惠順序而改變結果。",
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
    "contentSha256": "4f8b7dcd555c83a9d342518e3d8d6947ef61388f4249624676df274dd45939c9",
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
    "explanation": "漲價 20% 表示新價格包含原來的 100% 和增加的 20%，總倍率為 1.2。計算 500×1.2=600 元；增加額 100 元也等於 500×20%。把原價五百元與增加額一百元相加，同樣得到六百元。",
    "steps": [
      "把漲價 20% 轉成新價倍率 1.2。",
      "計算 500×1.2=600 元。",
      "以增加額 500×0.2=100 元驗算。"
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
    "commonMistake": "把百分之二十當成固定二十元，只在原價上加二十而忽略百分率基準。",
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
    "contentSha256": "f80310bb55ea64a65512f8bdf109182f3c71342495f60c0ab0533d87e0f127f3",
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
    "explanation": "八折售價等於原價的 80%，所以 720=原價×0.8。反求原價要用 720÷0.8=900 元；代回 900×0.8=720，可確認不是再把售價乘 0.8。折後價小於原價，七百二十小於九百也符合情境。",
    "steps": [
      "依八折關係列式 720=原價×0.8。",
      "用 720÷0.8 求得原價 900 元。",
      "代回 900×0.8=720 驗證。"
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
    "commonMistake": "看到八折就把已知售價七百二十再乘零點八，混淆原價與折後價。",
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
    "contentSha256": "1ff965dde26b5b1e24d36d754961910a09b9a9507ee6682fb64e37ec87f79f46",
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
    "explanation": "先漲價 25% 的倍率是 1.25，再打八折的倍率是 0.8。連續變動應相乘，1.25×0.8=1，所以最後價格等於原價；不能直接用 25%−20%。後一次折扣是對漲價後金額計算，兩個百分率的基準並不相同。",
    "steps": [
      "把漲價 25% 寫成倍率 1.25。",
      "把八折寫成倍率 0.8，計算 1.25×0.8=1。",
      "總倍率為 1，判斷最後與原價相同。"
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
    "commonMistake": "把百分之二十五與八折所減少的百分之二十直接相減，忽略兩次基準不同。",
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
    "contentSha256": "19a509936d581ff689d8479df9649ac02971bbb660bd17b5f3aa3d17e883f357",
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
    "explanation": "七五折使價格成為原價的 0.75，營業稅以折後價為基準再乘 1.05。總倍率 0.75×1.05=0.7875，因此實付為原價的 78.75%，不是直接加五個百分點。實付仍低於原價，和倍率小於一相符。",
    "steps": [
      "把七五折轉成倍率 0.75。",
      "將加稅 5% 轉成倍率 1.05。",
      "相乘得 0.7875，換成百分率 78.75%。"
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
    "commonMistake": "把折後百分之七十五直接加上五個百分點，沒有讓稅率作用在折後價格。",
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
    "contentSha256": "9e03c28a591eeaee434b2f684a8c9f776f5c131ee96c84eba8aa96d6107f1ced",
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
    "explanation": "A 店售價為 1000×0.8=800 元。B 店先減 150 元再打九折，售價為 (1000−150)×0.9=765 元。比較後 B 店少 800−765=35 元。兩家都先各自完成全部優惠，才可用相同的實付金額作比較。",
    "steps": [
      "計算 A 店售價 1000×0.8=800 元。",
      "依順序計算 B 店售價 (1000−150)×0.9=765 元。",
      "比較 800−765=35，得 B 店便宜 35 元。"
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
    "commonMistake": "只比較八折與九折便判斷 A 店較便宜，漏掉 B 店先減一百五十元。",
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
    "contentSha256": "4689ef0c070e45b3c13c220692b875f485676cfda091ef616757d109aedff87b",
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
    "explanation": "第二件六折只適用第二件。第一件仍為 500 元，第二件為 500×0.6=300 元，兩件合計 500+300=800 元；不能把兩件都打六折。平均每件四百元，相當於兩件合計為原總價的八折。",
    "steps": [
      "第一件按原價計算為 500 元。",
      "第二件六折，計算 500×0.6=300 元。",
      "相加得到兩件總價 800 元。"
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
    "commonMistake": "把第二件六折誤套用到兩件商品，或只計算折扣後的第二件價格。",
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
    "contentSha256": "1e40b53191400a9b543e98e612b9709eb60f1bcfea4839ce65772883f7e63849",
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
    "explanation": "出席率 92.5%=0.925，出席人數是全班 40 人的 0.925 倍。計算 40×0.925=37，因此出席 37 人；結果為整數且不超過全班人數。缺席三人占全班百分之七點五，與出席率互補為百分之百。",
    "steps": [
      "將 92.5% 化成小數 0.925。",
      "計算 40×0.925=37。",
      "檢查 37 為整數且介於 0 與 40 之間。"
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
    "commonMistake": "百分率化小數時小數點只左移一位，將九十二點五百分比誤寫成九點二五。",
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
    "contentSha256": "5f4a0a5cda488d1a202fc8048b0e0feba985322de101401251f72392488566d6",
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
    "explanation": "一成五表示 15%，今年比去年增加 15%，新量倍率為 1.15。以去年 800 公斤計算，800×1.15=920 公斤；增加量 120 公斤也等於 800×0.15。去年產量與增加量相加，同樣得到今年九百二十公斤。",
    "steps": [
      "把一成五換成 15%，新量倍率為 1.15。",
      "計算 800×1.15=920 公斤。",
      "用增加量 800×0.15=120 公斤驗算。"
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
    "commonMistake": "把一成五讀成百分之一點五，將成數與百分率的小數位置混淆。",
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
    "contentSha256": "a44aa9c2ae096c196b7b5a25384ec19acaa9e4d0a1b5ebe27d5c4d22eb194035",
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
      "先依八八折計算折後價：2500×0.88=2200 元。",
      "再按題目順序使用 150 元折價券，2200−150=2050 元。",
      "服務費以使用折價券後金額為基準，實付為 2050×1.05=2152.5 元；其中服務費為 102.5 元，與折價券後金額相加可驗算。"
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
      "先從原價扣除折價券再打八八折，顛倒優惠順序而改變折扣基準。",
      "用原價 2500 元計算百分之五服務費，忽略題目指定以券後金額為基準。",
      "把加收百分之五寫成只乘零點零五，漏掉原來應支付的一百分之百。"
    ],
    "independentReview": {
      "derivedResult": "實付2152.5元。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "60bee3bd1f7541f682d944073c4cb706246f14db0b8f615a5010a5d3e29bf502",
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
      "漲價 20% 的倍率為 1.2，之後降價 15% 的倍率為 0.85，總倍率是 1.2×0.85=1.02。",
      "最後售價 1224 元等於原價的 1.02 倍，所以原價=1224÷1.02=1200 元。",
      "總倍率 1.02 表示最後為原價的 102%，因此最後相對原價增加 2%；1200×1.02=1224 可驗算。"
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
      "直接用漲百分之二十減降百分之十五得到增加百分之五，忽略第二次基準已更新。",
      "用最後售價 1224 元直接減去它的百分之二，沒有用除法反求原價。",
      "把降價百分之十五的倍率寫成零點一五，而不是保留原價百分之八十五。"
    ],
    "independentReview": {
      "derivedResult": "原價1200元，最後增加2%。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "ec1126e36f14e5f123e0e74e89563d69509d74361911084d76be1bfef152d5f3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
