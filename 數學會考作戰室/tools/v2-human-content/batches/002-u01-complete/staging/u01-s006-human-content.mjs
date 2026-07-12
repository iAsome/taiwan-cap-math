// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s006-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-basics",
  "skillId": "integer-absolute-value-basic",
  "title": "絕對值的基本意義：只看離 0 多遠",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能把絕對值解釋為到 0 的距離。",
    "能計算正數、負數與 0 的絕對值。",
    "能區分絕對值與原數。",
    "能解出 |x|=a 的整數解。",
    "能正確處理絕對值外的負號。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-opposite-number",
      "requiredLevel": "能辨認相反數與原點對稱，並區分方向和距離大小。"
    }
  ],
  "glossary": [
    {
      "term": "絕對值",
      "definition": "一個數在數線上到 0 的距離。"
    },
    {
      "term": "距離",
      "definition": "兩位置間的長度，不帶負號。"
    },
    {
      "term": "絕對值符號",
      "definition": "以兩條直線包住數或算式，例如 |-7|。"
    },
    {
      "term": "等距點",
      "definition": "到同一基準距離相同的點。"
    }
  ],
  "notation": [
    {
      "symbol": "|a|",
      "meaning": "a 到 0 的距離。"
    },
    {
      "symbol": "|a|≥0",
      "meaning": "任何數的絕對值都不小於 0。"
    },
    {
      "symbol": "|x|=k",
      "meaning": "x 到 0 的距離是 k；k>0 時通常有正負兩個解。"
    }
  ],
  "conceptNarrative": [
    "絕對值只保留距離大小，不保留左右方向，所以 |-8|=8。",
    "正數的絕對值是自己，負數的絕對值是其相反數，0 的絕對值是 0。",
    "若 |x|=5，表示 x 在 0 左右各 5 單位，因此 x=5 或 -5。",
    "外層負號不在絕對值符號內，例如 -|-4| 先算 |-4|=4，再取負得到 -4。"
  ],
  "formalDefinitions": [
    {
      "name": "絕對值",
      "statement": "|a| 是 a 與 0 在數線上的距離。"
    },
    {
      "name": "非負性",
      "statement": "對任何 a，|a|≥0。"
    },
    {
      "name": "分段規則",
      "statement": "a≥0 時 |a|=a；a<0 時 |a|=-a。"
    }
  ],
  "formulas": [
    {
      "formula": "|a|=a（a≥0）",
      "conditions": [
        "a 為非負數"
      ],
      "meaning": "右側或原點位置的距離等於坐標本身。"
    },
    {
      "formula": "|a|=-a（a<0）",
      "conditions": [
        "a 為負數"
      ],
      "meaning": "把負坐標改成正距離。"
    }
  ],
  "nonApplicableCases": [
    "距離不能是負數，因此 |x|=-3 無解。",
    "|a| 不一定等於 a；只有 a≥0 時成立。",
    "|a+b| 通常不等於 |a|+|b|。",
    "絕對值符號外的運算必須在取絕對值後再做。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先算絕對值符號內的數或算式。",
      "check": "內部是否尚有運算？"
    },
    {
      "step": 2,
      "instruction": "判斷結果在 0 的哪一側。",
      "check": "是正、負還是 0？"
    },
    {
      "step": 3,
      "instruction": "把到 0 的距離寫成非負數。",
      "check": "答案是否錯帶負號？"
    },
    {
      "step": 4,
      "instruction": "再處理絕對值外的運算。",
      "check": "外層負號或加減是否遺漏？"
    },
    {
      "step": 5,
      "instruction": "方程題用數線左右兩點檢查。",
      "check": "是否漏掉相反數解？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "計算 |-15|。",
      "solutionSteps": [
        "-15 距離 0 有 15 單位。",
        "距離為非負。",
        "所以結果是 15。"
      ],
      "answer": "15。"
    },
    {
      "exampleId": "L2",
      "prompt": "計算 -|-7|。",
      "solutionSteps": [
        "先算 |-7|=7。",
        "外層仍有負號。",
        "結果為 -7。"
      ],
      "answer": "-7。"
    },
    {
      "exampleId": "L3",
      "prompt": "解 |x|=4。",
      "solutionSteps": [
        "x 到 0 的距離是 4。",
        "右側坐標 4，左側坐標 -4。",
        "兩者都符合。"
      ],
      "answer": "x=4 或 x=-4。"
    },
    {
      "exampleId": "L4",
      "prompt": "比較 |-9| 與 |6|。",
      "solutionSteps": [
        "|-9|=9。",
        "|6|=6。",
        "9>6。"
      ],
      "answer": "|-9|>|6|。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "認為 |-6|=-6。",
      "why": "把原坐標當距離。",
      "correction": "到 0 的距離是 6。"
    },
    {
      "mistake": "把 |0| 寫成沒有答案。",
      "why": "誤以為絕對值只處理正負成對。",
      "correction": "0 到 0 距離為 0。"
    },
    {
      "mistake": "解 |x|=7 只寫 x=7。",
      "why": "忽略數線左側等距點。",
      "correction": "還有 x=-7。"
    },
    {
      "mistake": "認為 |x|=-2 有 x=±2。",
      "why": "忽略絕對值非負。",
      "correction": "右邊為負，無解。"
    },
    {
      "mistake": "把 -|-3| 算成 3。",
      "why": "把外層負號一起消掉。",
      "correction": "先得 3，再取負為 -3。"
    },
    {
      "mistake": "任意拆開 |a+b|。",
      "why": "誤用不存在的分配規則。",
      "correction": "先算括號內總和再取絕對值。"
    }
  ],
  "selfCheck": [
    "絕對值是否代表距離？",
    "答案是否非負？",
    "外層符號是否另行處理？",
    "|x|=正數時是否有兩個方向？",
    "我是否先算符號內部？"
  ],
  "summary": [
    "|a| 是 a 到 0 的距離。",
    "絕對值永遠不小於 0。",
    "負數取絕對值後成為正距離。",
    "|x|=k（k>0）有 x=±k。"
  ],
  "connections": {
    "previous": "先備技能是相反數，需知道對稱點與方向相反。",
    "next": [
      "絕對值與距離會把基準從 0 推廣到任意兩點。",
      "整數加減可用絕對值比較變化量大小。",
      "大小比較不能只看絕對值，仍須保留原數方向。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s006-v001",
      "u01-s006-v002",
      "u01-s006-v003",
      "u01-s006-v004",
      "u01-s006-v005",
      "u01-s006-v006",
      "u01-s006-v007",
      "u01-s006-v008",
      "u01-s006-v009",
      "u01-s006-v010",
      "u01-s006-v011",
      "u01-s006-v012"
    ],
    "constructedResponseIds": [
      "u01-s006-cr001",
      "u01-s006-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐項檢查絕對值先算內部、結果非負及外層負號；含 |x|=a 的雙解與 a=0 邊界。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "f615f825696fcb423538b4556251c533e751fc5051651d02b1b8e2422c396da0"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s006-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "|-8| 的值是多少？",
    "choices": [
      "8",
      "-8",
      "0",
      "16"
    ],
    "answerIndex": 0,
    "explanation": "絕對值表示到 0 的距離。-8 到 0 的距離是 8。",
    "steps": [
      "找 -8 在數線的位置。",
      "計算到0的距離。",
      "距離為8。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": true,
        "reason": "|-8|=8。"
      },
      {
        "choice": "-8",
        "truth": false,
        "reason": "-8是坐標，不是距離。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "-8不在原點。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "16是-8與8的距離。"
      }
    ],
    "commonMistake": "把原坐標 -8 直接當作絕對值。",
    "concept": "負數的絕對值是對應正距離。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "計算負整數的絕對值。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "543a8b2088f56977ef74f0383b1fe7581a06d1290b2a781e5562a207a74b8560"
  },
  {
    "questionId": "u01-s006-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "|0| 的值是多少？",
    "choices": [
      "不存在",
      "0",
      "-1",
      "1"
    ],
    "answerIndex": 1,
    "explanation": "0 到 0 的距離是 0，所以 |0|=0。",
    "steps": [
      "絕對值是到0的距離。",
      "0與0重合。",
      "距離為0。"
    ],
    "optionAnalysis": [
      {
        "choice": "不存在",
        "truth": false,
        "reason": "0有絕對值。"
      },
      {
        "choice": "0",
        "truth": true,
        "reason": "0到0距離0，答案0。"
      },
      {
        "choice": "-1",
        "truth": false,
        "reason": "|-1|=1，不是0。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "|1|=1，不是0。"
      }
    ],
    "commonMistake": "認為絕對值只適用於非零數。",
    "concept": "0的絕對值是0。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "辨認絕對值的零值邊界。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7278791255260ae046da388b22888d37fdf628ab33808a42a2d0957300f49ad6"
  },
  {
    "questionId": "u01-s006-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個等式正確？",
    "choices": [
      "|-5|=-5",
      "|4|=-4",
      "|-5|=5",
      "|0|=1"
    ],
    "answerIndex": 2,
    "explanation": "-5 到 0 的距離是 5，所以 |-5|=5。",
    "steps": [
      "逐項把絕對值解釋成距離。",
      "距離不能為負。",
      "第三項成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "|-5|=-5",
        "truth": false,
        "reason": "絕對值不為負。"
      },
      {
        "choice": "|4|=-4",
        "truth": false,
        "reason": "正數4的絕對值是4。"
      },
      {
        "choice": "|-5|=5",
        "truth": true,
        "reason": "只有|-5|=5成立。"
      },
      {
        "choice": "|0|=1",
        "truth": false,
        "reason": "0到0距離為0。"
      }
    ],
    "commonMistake": "認為絕對值符號只是把數原樣抄出。",
    "concept": "絕對值必為非負。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "從多個敘述辨認絕對值規則。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ae3554ef7b4ca6c82eb347e9d80217f35e42184e9edfa1b81b84f545c143de77"
  },
  {
    "questionId": "u01-s006-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 |x|=5，則 x 的可能值為何？",
    "choices": [
      "只有 5",
      "只有 -5",
      "0 或 5",
      "5 或 -5"
    ],
    "answerIndex": 3,
    "explanation": "到 0 距離 5 的點有兩個：右側 5 與左側 -5。",
    "steps": [
      "把|x|=5解讀為距離。",
      "向右5得到5。",
      "向左5得到-5。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有 5",
        "truth": false,
        "reason": "漏掉左側解。"
      },
      {
        "choice": "只有 -5",
        "truth": false,
        "reason": "漏掉右側解。"
      },
      {
        "choice": "0 或 5",
        "truth": false,
        "reason": "0距離不是5。"
      },
      {
        "choice": "5 或 -5",
        "truth": true,
        "reason": "x=±5。"
      }
    ],
    "commonMistake": "只寫正數解5。",
    "concept": "|x|=正數通常有一對相反數解。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "由固定絕對值找兩個整數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a40d014942d860b61ea30a9ca7bb6566784dc5a4391175939c50800c021c1e63"
  },
  {
    "questionId": "u01-s006-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 |-9| 與 |6|，下列何者正確？",
    "choices": [
      "|-9|>|6|",
      "|-9|<|6|",
      "|-9|=|6|",
      "無法比較"
    ],
    "answerIndex": 0,
    "explanation": "|-9|=9，|6|=6，所以 9>6。",
    "steps": [
      "先算兩個絕對值。",
      "得到9與6。",
      "比較9>6。"
    ],
    "optionAnalysis": [
      {
        "choice": "|-9|>|6|",
        "truth": true,
        "reason": "9>6，因此第一項。"
      },
      {
        "choice": "|-9|<|6|",
        "truth": false,
        "reason": "方向相反。"
      },
      {
        "choice": "|-9|=|6|",
        "truth": false,
        "reason": "9不等於6。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "兩值皆可算。"
      }
    ],
    "commonMistake": "直接比較原數 -9 與 6，誤認左式較小。",
    "concept": "比較絕對值就是比較到0的距離。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "先取絕對值再比較。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "03d446b409d16c8c0662b82f9ee363a87e9452fd3b72da4a13cac8016e5b8835"
  },
  {
    "questionId": "u01-s006-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-|-4| 的值是多少？",
    "choices": [
      "4",
      "-4",
      "0",
      "-8"
    ],
    "answerIndex": 1,
    "explanation": "先算 |-4|=4，再處理外面的負號，得到 -4。",
    "steps": [
      "絕對值內部得4。",
      "外層負號仍保留。",
      "結果-4。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "漏掉外層負號。"
      },
      {
        "choice": "-4",
        "truth": true,
        "reason": "-|-4|=-(4)=-4。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "不是相反數相加。"
      },
      {
        "choice": "-8",
        "truth": false,
        "reason": "把4加倍。"
      }
    ],
    "commonMistake": "看到絕對值就把所有負號都消掉。",
    "concept": "絕對值外的負號是另一個運算。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "區分符號內外的運算順序。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b2879405545a5fbe31d3398f3433abad2969e83a2493bb0a78745ff817526505"
  },
  {
    "questionId": "u01-s006-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 a<0 且 |a|=3，則 a 等於多少？",
    "choices": [
      "3 或 -3",
      "0",
      "-3",
      "3"
    ],
    "answerIndex": 2,
    "explanation": "|a|=3 原有 a=±3，但條件 a<0 排除 3，所以 a=-3。",
    "steps": [
      "由絕對值得a=3或-3。",
      "使用a<0。",
      "保留-3。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 或 -3",
        "truth": false,
        "reason": "未使用負數條件。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "絕對值不為3。"
      },
      {
        "choice": "-3",
        "truth": true,
        "reason": "候選±3，負數條件選-3。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "不符合a<0。"
      }
    ],
    "commonMistake": "只看到|a|=3就保留兩個答案。",
    "concept": "附加符號條件可從一對相反數解中選一個。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "結合絕對值方程與不等條件。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1b7b2981528c168c08d7a02aef2692288ed00cd45e3c6b40c37bac96474ccbab"
  },
  {
    "questionId": "u01-s006-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "整數 x 滿足 |x|<2，共有幾個可能值？",
    "choices": [
      "1 個",
      "2 個",
      "4 個",
      "3 個"
    ],
    "answerIndex": 3,
    "explanation": "到 0 的距離小於 2 的整數是 -1、0、1，共 3 個。",
    "steps": [
      "在數線找-2與2之間。",
      "只取整數且不含端點。",
      "列出-1,0,1，共3個。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 個",
        "truth": false,
        "reason": "只算0。"
      },
      {
        "choice": "2 個",
        "truth": false,
        "reason": "漏掉0或一側。"
      },
      {
        "choice": "4 個",
        "truth": false,
        "reason": "錯把端點納入。"
      },
      {
        "choice": "3 個",
        "truth": true,
        "reason": "x∈{-1,0,1}，3個。"
      }
    ],
    "commonMistake": "把 -2、2 也列入，忽略嚴格小於。",
    "concept": "|x|<k表示x位於-k與k之間。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "把絕對值不等條件轉成整數區間。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "26183ab5d2c1da1c0ad483e29cdcca25da20dcdeb745623b11e943cdea2c8a2c"
  },
  {
    "questionId": "u01-s006-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "|-7|-|2| 的值是多少？",
    "choices": [
      "5",
      "-5",
      "9",
      "-9"
    ],
    "answerIndex": 0,
    "explanation": "|-7|=7，|2|=2，所以 7-2=5。",
    "steps": [
      "先算兩個絕對值。",
      "得到7與2。",
      "相減得5。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": true,
        "reason": "7-2=5。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "把減法次序反轉。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "把兩值相加。"
      },
      {
        "choice": "-9",
        "truth": false,
        "reason": "保留錯誤負號。"
      }
    ],
    "commonMistake": "把 |-7|-|2| 當成 |-7-2|=9。",
    "concept": "分開的絕對值符號要各自計算，再做外部運算。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "處理兩個絕對值的差。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "dcee6158fadfeb1a4fb3d58ef49f2264fb3c6b75d7bb7dd36b596d435f593e4e"
  },
  {
    "questionId": "u01-s006-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "機器目標溫度為 250°C，實際溫度為 243°C。若只問「與目標相差多少」，答案為何？",
    "choices": [
      "-7°C",
      "7°C",
      "243°C",
      "493°C"
    ],
    "answerIndex": 1,
    "explanation": "相差多少是距離，使用 |243-250|=7°C，不帶方向。",
    "steps": [
      "寫實際-目標=-7。",
      "取絕對值得7。",
      "附單位°C。"
    ],
    "optionAnalysis": [
      {
        "choice": "-7°C",
        "truth": false,
        "reason": "-7是帶號偏差，不是無方向差距。"
      },
      {
        "choice": "7°C",
        "truth": true,
        "reason": "|243-250|=7°C。"
      },
      {
        "choice": "243°C",
        "truth": false,
        "reason": "是實際溫度。"
      },
      {
        "choice": "493°C",
        "truth": false,
        "reason": "把兩溫度相加。"
      }
    ],
    "commonMistake": "把偏差 -7°C 直接當作「相差多少」的答案。",
    "concept": "絕對值把帶號偏差轉成無方向差距。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "literacy"
    ],
    "estimatedTimeSec": "80",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "區分偏差方向與允差大小。",
    "literacyContextNecessity": "目標值、實際值與問題用語「相差多少」共同決定是否取絕對值。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "dffaba33a1324f8b74895252fa35da7987a9bbaac3dbc23a66c0fed0790de5e0"
  },
  {
    "questionId": "u01-s006-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲隊分數變化為 -12，乙隊為 +5。兩隊變化量的「大小」相差多少？",
    "choices": [
      "17",
      "-7",
      "7",
      "-17"
    ],
    "answerIndex": 2,
    "explanation": "變化量大小分別為 |-12|=12、|5|=5，相差 12-5=7。",
    "steps": [
      "取兩個變化量絕對值。",
      "得到12與5。",
      "大小差7。"
    ],
    "optionAnalysis": [
      {
        "choice": "17",
        "truth": false,
        "reason": "17是兩原值距離，不是大小差。"
      },
      {
        "choice": "-7",
        "truth": false,
        "reason": "差距不帶負號。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "12與5相差7。"
      },
      {
        "choice": "-17",
        "truth": false,
        "reason": "錯誤負號。"
      }
    ],
    "commonMistake": "看到一正一負就直接求兩分數在數線上的距離17。",
    "concept": "「變化量的大小」先各取絕對值，再比較。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "辨認原值距離與絕對值大小差的不同問題。",
    "literacyContextNecessity": "隊伍、帶號變化與「大小相差」這個措辭都不可刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d3df019b740b70214f2d4f6510a60003763cd4be506ab91902eae172146cf412"
  },
  {
    "questionId": "u01-s006-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "感測器規定偏差的絕對值不得超過 4。四次偏差依序為 3、-4、0、-5，哪一次超出規定？",
    "choices": [
      "第一次",
      "第二次",
      "第三次",
      "第四次"
    ],
    "answerIndex": 3,
    "explanation": "絕對值依序 3、4、0、5，只有第四次的5超過4。",
    "steps": [
      "逐一取絕對值。",
      "比較是否>4。",
      "第四次超標。"
    ],
    "optionAnalysis": [
      {
        "choice": "第一次",
        "truth": false,
        "reason": "3未超過4。"
      },
      {
        "choice": "第二次",
        "truth": false,
        "reason": "4等於上限，未超過。"
      },
      {
        "choice": "第三次",
        "truth": false,
        "reason": "0未超過。"
      },
      {
        "choice": "第四次",
        "truth": true,
        "reason": "正確，|-5|=5。"
      }
    ],
    "commonMistake": "把 -5 視為小於4，所以判定未超標。",
    "concept": "允差通常比較絕對偏差，不比較原偏差大小。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "依絕對值上限篩選異常紀錄。",
    "literacyContextNecessity": "允差規則與四筆偏差都參與判斷，等於上限不算超過。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6492fc51c21b1cce18b0b3a56361d6af7fe1e9b20151625937bf8bb721228123"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s006-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "計算並說明：|-13|、|0|、-|7|、-|-6|。每一項都要指出絕對值符號內外的處理順序。",
    "requiredWork": [
      "四項都需有過程。",
      "外層負號必須在取絕對值後處理。"
    ],
    "fullCreditSolution": [
      "|-13|=13。",
      "|0|=0。",
      "-|7|=-7。",
      "-|-6|=-6。"
    ],
    "alternativeSolutions": [
      "可用「距離」說明前兩項，用運算順序說明後兩項。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "四項答案與內外順序說明全部正確。"
      },
      {
        "score": 2,
        "criteria": "四項答案正確但說明略缺；或一項符號小錯。"
      },
      {
        "score": 1,
        "criteria": "至少兩項正確且知道絕對值非負。"
      },
      {
        "score": 0,
        "criteria": "大多把外層負號消去或認為絕對值可負。"
      }
    ],
    "scoringNotes": [
      "-|7|與-|-6|的結果都為負，不可因絕對值而刪除外層負號。"
    ],
    "commonErrors": [
      "把|-13|寫-13。",
      "把-|7|寫7。",
      "把-|-6|寫6。"
    ],
    "independentReview": {
      "derivedResult": "13、0、-7、-6。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "de597b2859b72a6f2672a175a6f352fa6be1d4f3f3e1d3ead8c8f2b2372056be"
  },
  {
    "questionId": "u01-s006-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "列出所有滿足 |x|≤3 的整數 x，並求這些整數的總和。請用數線對稱解釋總和。",
    "requiredWork": [
      "端點±3包含。",
      "只列整數。",
      "解釋相反數配對。"
    ],
    "fullCreditSolution": [
      "x=-3、-2、-1、0、1、2、3。",
      "相反數配對 (-3+3)、(-2+2)、(-1+1) 都為0，再加0。",
      "總和為0。"
    ],
    "alternativeSolutions": [
      "可直接逐項相加，但須補充對稱解釋才得滿分。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "七個整數、總和0與對稱配對說明完整。"
      },
      {
        "score": 2,
        "criteria": "七個整數與總和正確但對稱說明不完整。"
      },
      {
        "score": 1,
        "criteria": "列出大部分正確整數或知道總和因對稱為0。"
      },
      {
        "score": 0,
        "criteria": "端點與範圍理解錯誤，無有效結果。"
      }
    ],
    "scoringNotes": [
      "≤包含-3與3。"
    ],
    "commonErrors": [
      "漏掉0。",
      "把±4納入。",
      "只列非負整數。"
    ],
    "independentReview": {
      "derivedResult": "x=-3至3的所有整數，總和0。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "9fab3ffa68032eb032a7f8c0e6aa85e6fdb94d9884354c09dd0e25675b243713"
  }
];

export const DRAWING_SPECS = [];
