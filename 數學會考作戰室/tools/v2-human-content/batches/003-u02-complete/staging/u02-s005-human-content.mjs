// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s005-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-factors",
  "skillId": "fraction-lcm-basic",
  "title": "最小公倍數：找出多個週期第一次共同重合的位置",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能列倍數或用質因數分解求LCM。",
    "能求三數最小公倍數。",
    "能處理一數為另一數倍數的特例。",
    "能由LCM反向判斷可能的原數。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-gcd-basic",
      "requiredLevel": "能分解質因數並區分共同因數與共同倍數。"
    }
  ],
  "glossary": [
    {
      "term": "公倍數",
      "definition": "同時是兩個或多個整數倍數的數。"
    },
    {
      "term": "最小公倍數",
      "definition": "正公倍數中最小者。"
    },
    {
      "term": "LCM",
      "definition": "least common multiple 的縮寫。"
    },
    {
      "term": "共同週期",
      "definition": "多個週期同時完成一次整數次迴圈的時間。"
    }
  ],
  "notation": [
    {
      "symbol": "lcm(a,b)",
      "meaning": "a與b的最小公倍數。"
    }
  ],
  "conceptNarrative": [
    "LCM要包含每個原數需要的全部質因數。",
    "同一質因數取各數中最大指數，才能讓結果被所有原數整除。",
    "若a是b的倍數，lcm(a,b)=a。",
    "所有正共同倍數都是LCM的正整數倍。"
  ],
  "formalDefinitions": [
    {
      "name": "最小公倍數",
      "statement": "同時被所有指定正整數整除的最小正整數。"
    }
  ],
  "formulas": [
    {
      "formula": "lcm=所有質因數的較大指數乘積",
      "conditions": [
        "先完成各數質因數分解"
      ],
      "meaning": "質因數法。"
    }
  ],
  "nonApplicableCases": [
    "不能把0當作要求的最小正公倍數。",
    "求GCD時不使用最大指數。",
    "只找到任一共同倍數仍須檢查更小者。",
    "時間情境需再把分鐘換成實際時刻。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "分解各數。",
      "check": "底數與指數是否正確？"
    },
    {
      "step": 2,
      "instruction": "收集出現過的所有質因數。",
      "check": "有無只出現在某一數的底數？"
    },
    {
      "step": 3,
      "instruction": "各底數取最大指數。",
      "check": "是否足以被每個原數整除？"
    },
    {
      "step": 4,
      "instruction": "相乘得到LCM。",
      "check": "用原數逐一除結果。"
    },
    {
      "step": 5,
      "instruction": "檢查最小性與情境。",
      "check": "是否是第一次共同時刻？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "求 lcm(8,12)。",
      "solutionSteps": [
        "8=2³，12=2²×3。",
        "取2³×3。"
      ],
      "answer": "24。"
    },
    {
      "exampleId": "L2",
      "prompt": "求 lcm(18,30,40)。",
      "solutionSteps": [
        "分解為2×3²、2×3×5、2³×5。",
        "取2³×3²×5。"
      ],
      "answer": "360。"
    },
    {
      "exampleId": "L3",
      "prompt": "已知9整除45。",
      "solutionSteps": [
        "45同時是9與45的倍數。",
        "最小者就是45。"
      ],
      "answer": "lcm(9,45)=45。"
    },
    {
      "exampleId": "L4",
      "prompt": "共同週期為36分鐘的事件，若每12分鐘發生一次，在第1分鐘至第36分鐘內（含第36分鐘）共發生幾次？",
      "solutionSteps": [
        "發生時刻為第12、24、36分鐘。",
        "不含起點，含共同終點，共3次。"
      ],
      "answer": "3次。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "共同質因數取最小指數。",
      "why": "混用GCD規則。",
      "correction": "LCM取最大指數。"
    },
    {
      "mistake": "漏掉只出現在一數的質因數。",
      "why": "只找共同部分。",
      "correction": "LCM要包含聯集。"
    },
    {
      "mistake": "取兩數乘積不約去重複。",
      "why": "雖是共同倍數但不一定最小。",
      "correction": "用最大指數法。"
    },
    {
      "mistake": "一數是另一數倍數仍相乘。",
      "why": "忽略整除特例。",
      "correction": "直接取較大數。"
    },
    {
      "mistake": "求得分鐘數卻答鐘點錯。",
      "why": "未從起始時刻換算。",
      "correction": "把週期加到起點。"
    },
    {
      "mistake": "區間計數含不含端點不清。",
      "why": "未讀『不含今天』『含終點』。",
      "correction": "逐一列LCM倍數。"
    }
  ],
  "selfCheck": [
    "結果是否被所有原數整除？",
    "所有質因數是否都收集？",
    "指數是否取最大？",
    "是否為最小正共同倍數？",
    "時間答案是否完成時刻換算？"
  ],
  "summary": [
    "LCM是第一次共同重合的正位置。",
    "質因數法取所有底數最大指數。",
    "一數為另一數倍數時取較大數。",
    "後續共同倍數都是LCM的倍數。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-gcd-basic，需能完成其基本判斷與計算。",
    "next": [
      "最大公因數應用處理最大分組。",
      "最小公倍數應用處理事件同步。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s005-v001",
      "u02-s005-v002",
      "u02-s005-v003",
      "u02-s005-v004",
      "u02-s005-v005",
      "u02-s005-v006",
      "u02-s005-v007",
      "u02-s005-v008",
      "u02-s005-v009",
      "u02-s005-v010",
      "u02-s005-v011",
      "u02-s005-v012"
    ],
    "constructedResponseIds": [
      "u02-s005-cr001",
      "u02-s005-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "以倍數列表與質因數最大指數交叉驗算24、360與45；每個結果均可被所有原數整除且無更小共同倍數。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "e10257f94f47cfd0fbeb68e5285fbc41b4a26374e95dbd39a7d72ac52996e4ad",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s005-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "6 和 8 的最小公倍數是多少？",
    "choices": [
      "24",
      "12",
      "36",
      "48"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：6的倍數12、18、24；8的倍數16、24；最小共同者是24。所以答案是「24」。",
    "steps": [
      "6的倍數12、18、24；8的倍數16、24",
      "最小共同者是24"
    ],
    "optionAnalysis": [
      {
        "choice": "24",
        "truth": true,
        "reason": "24是第一個共同倍數。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "12不是8的倍數。"
      },
      {
        "choice": "36",
        "truth": false,
        "reason": "36不是8的倍數。"
      },
      {
        "choice": "48",
        "truth": false,
        "reason": "48是共同倍數但不是最小。"
      }
    ],
    "commonMistake": "找到共同倍數後沒有確認是否最小。",
    "concept": "最小公倍數是正共同倍數中最小者。",
    "tags": [
      "數與量",
      "最小公倍數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "直接求 LCM。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "05c21b1801a7c56c1fae2b17af1b87c16d304b4e6c9e8263aefd4396cd97130d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s005-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "12 和 18 的最小公倍數是多少？",
    "choices": [
      "24",
      "36",
      "54",
      "72"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：12=2²×3，18=2×3²；取較大指數得2²×3²=36。所以答案是「36」。",
    "steps": [
      "12=2²×3，18=2×3²",
      "取較大指數得2²×3²=36"
    ],
    "optionAnalysis": [
      {
        "choice": "24",
        "truth": false,
        "reason": "24不是18的倍數。"
      },
      {
        "choice": "36",
        "truth": true,
        "reason": "36同時為兩數倍數且最小。"
      },
      {
        "choice": "54",
        "truth": false,
        "reason": "54不是12的倍數。"
      },
      {
        "choice": "72",
        "truth": false,
        "reason": "72是共同倍數但較大。"
      }
    ],
    "commonMistake": "求 LCM 時把共同因數只取一次。",
    "concept": "LCM 對所有質因數取較大指數。",
    "tags": [
      "數與量",
      "最小公倍數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "用質因數分解求 LCM。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "024adb7f41dd58d9694bace81f16c9e0870aab2f0718ca32766b3a44da5fb1f6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s005-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個數同時是 9 和 15 的倍數？",
    "choices": [
      "30",
      "36",
      "45",
      "60"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：45=9×5=15×3；其餘至少不被其中一數整除。所以答案是「45」。",
    "steps": [
      "45=9×5=15×3",
      "其餘至少不被其中一數整除"
    ],
    "optionAnalysis": [
      {
        "choice": "30",
        "truth": false,
        "reason": "30不是9的倍數。"
      },
      {
        "choice": "36",
        "truth": false,
        "reason": "36不是15的倍數。"
      },
      {
        "choice": "45",
        "truth": true,
        "reason": "45是共同倍數。"
      },
      {
        "choice": "60",
        "truth": false,
        "reason": "60不是9的倍數。"
      }
    ],
    "commonMistake": "只檢查一個倍數條件。",
    "concept": "共同倍數必須同時被兩數整除。",
    "tags": [
      "數與量",
      "最小公倍數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "辨認共同倍數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4da6004af5d9b9a816dfcf1675c05ffb45ad9ff9b2aa49228883d8dbf061a7ea",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s005-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 a 是 b 的倍數，則 a 與 b 的最小公倍數為何？",
    "choices": [
      "1",
      "b",
      "a+b",
      "a"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：a已同時是a與b的倍數；不可能有比a更小且仍為a倍數的正數。所以答案是「a」。",
    "steps": [
      "a已同時是a與b的倍數",
      "不可能有比a更小且仍為a倍數的正數"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "不一定互質。"
      },
      {
        "choice": "b",
        "truth": false,
        "reason": "b未必是a的倍數。"
      },
      {
        "choice": "a+b",
        "truth": false,
        "reason": "和不是最小共同倍數。"
      },
      {
        "choice": "a",
        "truth": true,
        "reason": "LCM(a,b)=a。"
      }
    ],
    "commonMistake": "把一數整除另一數的 GCD 與 LCM 結論混淆。",
    "concept": "一數為另一數倍數時，較大者就是 LCM。",
    "tags": [
      "數與量",
      "最小公倍數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "由倍數包含關係判定兩數的最小公倍數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "34e4b7396f42dc29f26ee4abefbf8b996c1180f8be534aacdccfd4d08ffc647d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s005-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "20、30、45 的最小公倍數是多少？",
    "choices": [
      "180",
      "90",
      "270",
      "360"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：20=2²×5，30=2×3×5，45=3²×5；取最大指數2²×3²×5=180。所以答案是「180」。",
    "steps": [
      "20=2²×5，30=2×3×5，45=3²×5",
      "取最大指數2²×3²×5=180"
    ],
    "optionAnalysis": [
      {
        "choice": "180",
        "truth": true,
        "reason": "180同時整除三數且最小。"
      },
      {
        "choice": "90",
        "truth": false,
        "reason": "90不能被20整除。"
      },
      {
        "choice": "270",
        "truth": false,
        "reason": "270不能被20整除。"
      },
      {
        "choice": "360",
        "truth": false,
        "reason": "360是共同倍數但不是最小。"
      }
    ],
    "commonMistake": "只求其中兩數的 LCM，未納入第三數。",
    "concept": "多數 LCM 取所有質因數最大指數。",
    "tags": [
      "數與量",
      "最小公倍數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "求三數 LCM。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e614996c4e371c1c6bed2ad817c56fde9f1dd1662dfb5aaa2458ec5221145468",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s005-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 lcm(12,n)=60。下列哪一個可能是 n？",
    "choices": [
      "8",
      "15",
      "18",
      "24"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：lcm(12,15)=60；其餘三數與12的最小公倍數分別為24、36、24。所以答案是「15」。",
    "steps": [
      "lcm(12,15)=60",
      "其餘三數與12的最小公倍數分別為24、36、24"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "lcm(12,8)=24。"
      },
      {
        "choice": "15",
        "truth": true,
        "reason": "lcm(12,15)=60。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "lcm(12,18)=36。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "lcm(12,24)=24。"
      }
    ],
    "commonMistake": "只檢查 n 是否整除60，沒有確認與12合併後的最小公倍數。",
    "concept": "指定 LCM 需同時考慮兩數質因數指數。",
    "tags": [
      "數與量",
      "最小公倍數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "反向檢查 LCM。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3bf09f04fb697f8a0588f560655b0a794089d9c87dab84d68e9b71c8a58acd4a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s005-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 lcm(2³×3², 2⁵×3×5)=2ᵃ×3ᵇ×5，則 a+b 等於多少？",
    "choices": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：LCM對2取5、對3取2；a+b=5+2=7。所以答案是「7」。",
    "steps": [
      "LCM對2取5、對3取2",
      "a+b=5+2=7"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "只取一部分指數會得5。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "把3指數取1會得6。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "5+2=7。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "沒有必要把5的指數也加進a+b。"
      }
    ],
    "commonMistake": "求 LCM 時對共同質因數取較小指數。",
    "concept": "LCM 對每個出現的質因數取最大指數。",
    "tags": [
      "數與量",
      "最小公倍數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "從分解式求 LCM 引數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f147293535c4806efadb664f9983bc75a45db96e8e547bc4457895ff61537430",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s005-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三個正整數的最小公倍數為 2³×3²×5。下列哪一個數不可能是這三數之一？",
    "choices": [
      "45",
      "72",
      "120",
      "54"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：每個原數都必須整除LCM=360；54含3³，不能整除只有3²的360。所以答案是「54」。",
    "steps": [
      "每個原數都必須整除LCM=360",
      "54含3³，不能整除只有3²的360"
    ],
    "optionAnalysis": [
      {
        "choice": "45",
        "truth": false,
        "reason": "45=3²×5，整除360。"
      },
      {
        "choice": "72",
        "truth": false,
        "reason": "72=2³×3²，整除360。"
      },
      {
        "choice": "120",
        "truth": false,
        "reason": "120=2³×3×5，整除360。"
      },
      {
        "choice": "54",
        "truth": true,
        "reason": "54=2×3³，含過多3。"
      }
    ],
    "commonMistake": "只看數值小於360就認為可能。",
    "concept": "成員必須在各質因數指數上不超過 LCM。",
    "tags": [
      "數與量",
      "最小公倍數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "由 LCM 反推可能成員。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c98da9cb990b5dfa5021a5fd15e10f385125b14c4ec62a0447780e3390a6b7b1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s005-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 gcd(18,30)=g、lcm(18,30)=m，則 m÷g 等於多少？",
    "choices": [
      "15",
      "10",
      "20",
      "30"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：g=6，m=90；90÷6=15。所以答案是「15」。",
    "steps": [
      "g=6，m=90",
      "90÷6=15"
    ],
    "optionAnalysis": [
      {
        "choice": "15",
        "truth": true,
        "reason": "90÷6=15。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "10是30÷3，無關。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "20不是比值。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "30是其中一個原數。"
      }
    ],
    "commonMistake": "混淆 GCD、LCM 或把兩者相加。",
    "concept": "兩數的 GCD 與 LCM 可同時計算並比較。",
    "tags": [
      "數與量",
      "最小公倍數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "整合 GCD 與 LCM。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "be01c1d58265475fafa66f977a6b89080457432faee174c0da75d0d984198700",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s005-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲燈每 8 秒閃一次，乙燈每 12 秒閃一次，現在同時閃。最少幾秒後再同時閃？",
    "choices": [
      "12 秒",
      "24 秒",
      "36 秒",
      "48 秒"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：再次同時閃的時間是8、12的最小公倍數；lcm(8,12)=24。所以答案是「24 秒」。",
    "steps": [
      "再次同時閃的時間是8、12的最小公倍數",
      "lcm(8,12)=24"
    ],
    "optionAnalysis": [
      {
        "choice": "12 秒",
        "truth": false,
        "reason": "12不是8的倍數。"
      },
      {
        "choice": "24 秒",
        "truth": true,
        "reason": "24是最早共同時刻。"
      },
      {
        "choice": "36 秒",
        "truth": false,
        "reason": "36不是8的倍數。"
      },
      {
        "choice": "48 秒",
        "truth": false,
        "reason": "48較晚。"
      }
    ],
    "commonMistake": "找到共同時刻但沒選最早。",
    "concept": "同步週期是各週期的 LCM。",
    "tags": [
      "數與量",
      "最小公倍數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "用 LCM 求再次同步時間。",
    "literacyContextNecessity": "兩個閃燈週期與『最少多久後』共同指定最小公倍數，情境不可刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "de6b4c538b925a30499b13c4f2cf707bac910c418becefb81098b0242b0c5f64",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s005-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "公車 A 每 15 分鐘一班，公車 B 每 20 分鐘一班，上午 8:00 同時發車。下一次同時發車是幾點？",
    "choices": [
      "8:20",
      "8:40",
      "9:00",
      "9:20"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：lcm(15,20)=60分鐘；8:00後60分鐘是9:00。所以答案是「9:00」。",
    "steps": [
      "lcm(15,20)=60分鐘",
      "8:00後60分鐘是9:00"
    ],
    "optionAnalysis": [
      {
        "choice": "8:20",
        "truth": false,
        "reason": "20分鐘不是15的倍數。"
      },
      {
        "choice": "8:40",
        "truth": false,
        "reason": "40分鐘不是15的倍數。"
      },
      {
        "choice": "9:00",
        "truth": true,
        "reason": "60分鐘後為9:00。"
      },
      {
        "choice": "9:20",
        "truth": false,
        "reason": "80分鐘不是最早共同週期。"
      }
    ],
    "commonMistake": "只取較大的週期20分鐘。",
    "concept": "先求 LCM，再換算成鐘面時間。",
    "tags": [
      "數與量",
      "最小公倍數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "用 LCM 解時刻問題。",
    "literacyContextNecessity": "班距、起始時刻和下一次三項資料都必須保留，才能由週期換算到實際鐘點。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b407b65de2cbb72f96f05b439712efb1c949d2927115019673ee0b8d21a0f475",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s005-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三個警示器分別每 6、10、15 分鐘響一次，下午 1:00 同時響。下一次同時響是何時？",
    "choices": [
      "1:15",
      "1:20",
      "1:25",
      "1:30"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：lcm(6,10,15)=30分鐘；1:00後30分鐘是1:30。所以答案是「1:30」。",
    "steps": [
      "lcm(6,10,15)=30分鐘",
      "1:00後30分鐘是1:30"
    ],
    "optionAnalysis": [
      {
        "choice": "1:15",
        "truth": false,
        "reason": "15不是6、10共同倍數。"
      },
      {
        "choice": "1:20",
        "truth": false,
        "reason": "20不是6、15倍數。"
      },
      {
        "choice": "1:25",
        "truth": false,
        "reason": "25不是任何完整共同週期。"
      },
      {
        "choice": "1:30",
        "truth": true,
        "reason": "30是最小共同週期。"
      }
    ],
    "commonMistake": "只求其中兩個週期的最小公倍數。",
    "concept": "三個週期同步需三數 LCM。",
    "tags": [
      "數與量",
      "最小公倍數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "求三事件同步時刻。",
    "literacyContextNecessity": "三個週期、共同起點與下一次同步共同決定三數最小公倍數及鐘面換算。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8410ce6cd8825a0f97fc7ac804bef2b43d1ba797142cd3b0a98068487bbe011f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s005-cr001",
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "用質因數分解求 24、36、90 的最小公倍數，並驗證。",
    "requiredWork": [
      "三數分解。",
      "所有質因數取最大指數。",
      "用除法驗證。"
    ],
    "fullCreditSolution": [
      "24=2³×3，36=2²×3²，90=2×3²×5。",
      "LCM=2³×3²×5=360。",
      "360÷24=15、÷36=10、÷90=4。"
    ],
    "alternativeSolutions": [
      "也可逐步求lcm(24,36)=72，再求lcm(72,90)=360。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "分解、LCM=360與三項驗證完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但驗證或一個分解略缺。"
      },
      {
        "score": 1,
        "criteria": "得到共同倍數但非最小。"
      },
      {
        "score": 0,
        "criteria": "結果不是三數共同倍數。"
      }
    ],
    "scoringNotes": [
      "驗證商須為整數。"
    ],
    "commonErrors": [
      "漏質因數5。",
      "對2取較小指數。"
    ],
    "independentReview": {
      "derivedResult": "lcm=360。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "d40e0c28462d4c2732c7341821ae324f5ee03586cccc33272a2a6b42872d55b5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s005-cr002",
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-lcm-basic",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "找出所有小於 100、且與 12 的最小公倍數為 60 的正整數 n。",
    "requiredWork": [
      "使用質因數指數限制。",
      "列出全部並說明完整性。"
    ],
    "fullCreditSolution": [
      "12=2²×3，60=2²×3×5。",
      "n必須整除60、必須含質因數5，且2、3指數不能超過60；同時與12合併要產生5。",
      "滿足者為5、10、15、20、30、60。逐項與12求LCM均為60。"
    ],
    "alternativeSolutions": [
      "可列60的正因數後篩選含5者，並排除lcm不足者。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "六個值完整且有指數/因數篩選理由。"
      },
      {
        "score": 2,
        "criteria": "漏一個值但方法正確。"
      },
      {
        "score": 1,
        "criteria": "列出至少兩個有效值。"
      },
      {
        "score": 0,
        "criteria": "多數值不滿足LCM=60。"
      }
    ],
    "scoringNotes": [
      "n小於100，60可列入。"
    ],
    "commonErrors": [
      "只列15。",
      "列25，導致質因數5²。"
    ],
    "independentReview": {
      "derivedResult": "n=5、10、15、20、30、60。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "7e7aa78874072bd11a872715c033b7ff68f58fb845a65a501025d3ba324f1b82",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
