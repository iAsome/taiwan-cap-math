// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s001-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-factors",
  "skillId": "fraction-factor-multiple",
  "title": "因數與倍數：從整除關係理解分組和排列與週期",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能用整除判斷因數與倍數。",
    "能分清「a 是 b 的因數」與「b 是 a 的倍數」。",
    "能列出有限範圍內的因數與倍數。",
    "能把平均分組與等長切割翻成整除條件。"
  ],
  "prerequisites": [],
  "glossary": [
    {
      "term": "因數",
      "definition": "能把某整數整除的整數。"
    },
    {
      "term": "倍數",
      "definition": "某整數乘上一個整數所得的數。"
    },
    {
      "term": "整除",
      "definition": "除法的商是整數且餘數為0。"
    },
    {
      "term": "共同倍數",
      "definition": "同時是兩個或多個數的倍數。"
    }
  ],
  "notation": [
    {
      "symbol": "a∣b",
      "meaning": "a 能整除 b，也就是 a 是 b 的因數。"
    },
    {
      "symbol": "b=ak",
      "meaning": "b 是 a 的倍數，k 為整數。"
    }
  ],
  "conceptNarrative": [
    "因數與倍數描述同一個乘法事實的兩個方向，例如6×4=24，因此6是24的因數，24是6的倍數。",
    "因數通常在固定正整數下數量有限；倍數則可持續乘1、2、3而有無限多個。",
    "平均分且不剩，表示組數或每組大小必須整除總量。",
    "0 是每個非零整數的倍數，但0不能作為除數，因此不把0當成正整數的因數。"
  ],
  "formalDefinitions": [
    {
      "name": "因數",
      "statement": "若 b÷a 為整數，則 a 是 b 的因數。"
    },
    {
      "name": "倍數",
      "statement": "若 b=a×k，k 為整數，則 b 是 a 的倍數。"
    },
    {
      "name": "整除",
      "statement": "除法餘數為0的關係。"
    }
  ],
  "formulas": [
    {
      "formula": "b=a×k",
      "conditions": [
        "a、b、k皆為整數"
      ],
      "meaning": "連結因數與倍數。"
    }
  ],
  "nonApplicableCases": [
    "只因一個數較小，不能判定它是因數。",
    "除數為0的式子沒有定義。",
    "題目若限定正因數，不納入負因數。",
    "平均分配若允許剩餘，就不再是整除問題。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先找出誰是總量。",
      "check": "題目問因數、倍數、組數或每組大小？"
    },
    {
      "step": 2,
      "instruction": "把文字改寫成除法或乘法。",
      "check": "是否能寫成總量=每組×組數？"
    },
    {
      "step": 3,
      "instruction": "檢查餘數。",
      "check": "商是否為整數？"
    },
    {
      "step": 4,
      "instruction": "處理範圍限制。",
      "check": "是否要求小於、介於或最多？"
    },
    {
      "step": 5,
      "instruction": "用原情境驗算。",
      "check": "分組後是否真的不剩？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "判斷 9 是否為 63 的因數。",
      "solutionSteps": [
        "63÷9=7。",
        "商為整數且無餘數。"
      ],
      "answer": "9 是 63 的因數。"
    },
    {
      "exampleId": "L2",
      "prompt": "列出 16 的所有正因數。",
      "solutionSteps": [
        "成對找乘積16：1×16、2×8、4×4。",
        "整理不重複因數。"
      ],
      "answer": "1、2、4、8、16。"
    },
    {
      "exampleId": "L3",
      "prompt": "找出小於 40 的 7 的正倍數。",
      "solutionSteps": [
        "依序算7×1到7×5。",
        "7×6=42超出範圍。"
      ],
      "answer": "7、14、21、28、35。"
    },
    {
      "exampleId": "L4",
      "prompt": "60顆球平均分成每袋12顆，可裝幾袋？",
      "solutionSteps": [
        "60÷12=5。",
        "沒有餘數。"
      ],
      "answer": "5袋。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把所有小於原數的數都當因數。",
      "why": "忽略整除條件。",
      "correction": "逐一做除法檢查餘數。"
    },
    {
      "mistake": "把因數與倍數方向說反。",
      "why": "未從乘法等式判讀角色。",
      "correction": "由 a×k=b 判定a是b因數、b是a倍數。"
    },
    {
      "mistake": "認為0是每個數的因數。",
      "why": "把0是倍數的性質混到因數。",
      "correction": "記住不能除以0。"
    },
    {
      "mistake": "列因數時漏掉原數本身。",
      "why": "以為因數一定更小。",
      "correction": "正整數本身永遠是最大正因數。"
    },
    {
      "mistake": "列倍數時包含不是整數倍的數。",
      "why": "只看接近。",
      "correction": "每項都應能寫成原數×整數。"
    },
    {
      "mistake": "分組題未檢查是否有剩。",
      "why": "只做近似除法。",
      "correction": "題目說平均且不剩時，商必須是整數。"
    }
  ],
  "selfCheck": [
    "我是否分清因數與倍數方向？",
    "除法是否沒有餘數？",
    "是否處理正因數或範圍限制？",
    "0 是否被錯放到除數位置？",
    "答案能否放回分組情境驗算？"
  ],
  "summary": [
    "因數與倍數是同一乘法關係的兩個方向。",
    "整除是判斷核心。",
    "因數有限，倍數通常無限。",
    "平均分、不剩與等長切割常轉成整除。"
  ],
  "connections": {
    "previous": "本節為 U02 起點，使用 U01 的整數整除與乘法觀念。",
    "next": [
      "質數與合數會依正因數個數分類。",
      "GCD與LCM會建立在共同因數、共同倍數上。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s001-v001",
      "u02-s001-v002",
      "u02-s001-v003",
      "u02-s001-v004",
      "u02-s001-v005",
      "u02-s001-v006",
      "u02-s001-v007",
      "u02-s001-v008",
      "u02-s001-v009",
      "u02-s001-v010",
      "u02-s001-v011",
      "u02-s001-v012"
    ],
    "constructedResponseIds": [
      "u02-s001-cr001",
      "u02-s001-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐題檢查整除方向、0的角色、正因數邊界與四個例題的餘數；16的因數配對、7的倍數範圍和60÷12均乘回原數驗證。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "07784bf21675e841eaafef0996e3e22c377867c442c4b68f0d160c1ad993b8e6",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s001-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個數是 24 的因數？",
    "choices": [
      "6",
      "10",
      "14",
      "18"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：24÷6=4，商為整數；其餘三個選項除 24 都有餘數。所以答案是「6」。",
    "steps": [
      "24÷6=4，商為整數",
      "其餘三個選項除 24 都有餘數"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": true,
        "reason": "24÷6=4，確實整除。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "24÷10 有餘數。"
      },
      {
        "choice": "14",
        "truth": false,
        "reason": "24÷14 有餘數。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "24÷18 有餘數。"
      }
    ],
    "commonMistake": "只看選項是否小於 24，沒有檢查整除。",
    "concept": "因數必須能把原數整除。",
    "tags": [
      "數與量",
      "因數與倍數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "辨認單一因數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5a321674d35efc99e8995c003dcedfb21a8a64e2f21a7dc251fe5cbdacad1607",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個數是 8 的倍數？",
    "choices": [
      "30",
      "40",
      "54",
      "62"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：40=8×5；其餘選項除以 8 都不是整數。所以答案是「40」。",
    "steps": [
      "40=8×5",
      "其餘選項除以 8 都不是整數"
    ],
    "optionAnalysis": [
      {
        "choice": "30",
        "truth": false,
        "reason": "30÷8 有餘數。"
      },
      {
        "choice": "40",
        "truth": true,
        "reason": "40=8×5，成立。"
      },
      {
        "choice": "54",
        "truth": false,
        "reason": "54÷8 有餘數。"
      },
      {
        "choice": "62",
        "truth": false,
        "reason": "62÷8 有餘數。"
      }
    ],
    "commonMistake": "把所有偶數都當成 8 的倍數。",
    "concept": "倍數可寫成原數乘整數。",
    "tags": [
      "數與量",
      "因數與倍數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "辨認倍數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a37494acf400f56ff741237608184b6bb7123f503d6278121a7993fedef47881",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 7 是 n 的因數，下列哪一個可能是 n？",
    "choices": [
      "30",
      "32",
      "35",
      "38"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：條件表示 n 必須是 7 的倍數；35=7×5。所以答案是「35」。",
    "steps": [
      "條件表示 n 必須是 7 的倍數",
      "35=7×5"
    ],
    "optionAnalysis": [
      {
        "choice": "30",
        "truth": false,
        "reason": "30 不是 7 的倍數。"
      },
      {
        "choice": "32",
        "truth": false,
        "reason": "32 不是 7 的倍數。"
      },
      {
        "choice": "35",
        "truth": true,
        "reason": "35=7×5。"
      },
      {
        "choice": "38",
        "truth": false,
        "reason": "38 不是 7 的倍數。"
      }
    ],
    "commonMistake": "把「7 是 n 的因數」反讀成「n 是 7 的因數」。",
    "concept": "因數與倍數是方向相反的關係。",
    "tags": [
      "數與量",
      "因數與倍數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "判讀因數敘述。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7e48d7ac6cebe6b680480e66344dff578a9280788ea2d2d76caca956fe29027d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "36 的所有正因數中，最大的是哪一個？",
    "choices": [
      "1",
      "6",
      "18",
      "36"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：36÷36=1；任何正整數本身都是自己的最大正因數。所以答案是「36」。",
    "steps": [
      "36÷36=1",
      "任何正整數本身都是自己的最大正因數"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "1 是最小正因數。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "6 是因數但不是最大。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "18 是因數但仍小於 36。"
      },
      {
        "choice": "36",
        "truth": true,
        "reason": "36 是本身，也是最大正因數。"
      }
    ],
    "commonMistake": "以為因數一定要比原數小。",
    "concept": "正整數的最大正因數是本身。",
    "tags": [
      "數與量",
      "因數與倍數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "掌握因數的邊界。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e565b7acb13739346667b0400e3cf99c5866dacf819b1c601ad245c885f80982",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "關於正整數的因數與倍數，下列哪一個敘述正確？",
    "choices": [
      "1 是每個正整數的因數",
      "0 是每個正整數的因數",
      "每個正整數都有無限多個正因數",
      "12 是 5 的倍數"
    ],
    "answerIndex": 0,
    "explanation": "依因數與倍數的定義逐項判斷。任一正整數 n 都可寫成 1×n，因此 1 是每個正整數的因數。",
    "steps": [
      "以 n 表示任一正整數，n÷1=n 為整數。",
      "排除除以 0、無限多個正因數及 12 是 5 的倍數等錯誤敘述。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 是每個正整數的因數",
        "truth": true,
        "reason": "n÷1=n，對每個正整數都成立。"
      },
      {
        "choice": "0 是每個正整數的因數",
        "truth": false,
        "reason": "因數判斷需要作除法，而除以 0 沒有定義。"
      },
      {
        "choice": "每個正整數都有無限多個正因數",
        "truth": false,
        "reason": "每個固定正整數只有有限個正因數。"
      },
      {
        "choice": "12 是 5 的倍數",
        "truth": false,
        "reason": "12÷5 不是整數，所以 12 不是 5 的倍數。"
      }
    ],
    "commonMistake": "忽略因數定義中的整除條件，或把 0 當成可作除數。",
    "concept": "因數與倍數必須以整除關係判斷。",
    "tags": [
      "數與量",
      "因數與倍數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "用正整數範圍內的定義判斷因數與倍數性質。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "264fe2e7a3aa222eeff5fcc896b66fad168e34ba5c77dd77f595e8b2fbcb3dd8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "小於 50 的正整數中，同時是 6 和 9 的倍數者有幾個？",
    "choices": [
      "1 個",
      "2 個",
      "3 個",
      "4 個"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：6 和 9 的共同倍數是 18 的倍數；小於 50 的有 18、36，共 2 個。所以答案是「2 個」。",
    "steps": [
      "6 和 9 的共同倍數是 18 的倍數",
      "小於 50 的有 18、36，共 2 個"
    ],
    "optionAnalysis": [
      {
        "choice": "1 個",
        "truth": false,
        "reason": "只算 18，漏掉 36。"
      },
      {
        "choice": "2 個",
        "truth": true,
        "reason": "18、36 共 2 個。"
      },
      {
        "choice": "3 個",
        "truth": false,
        "reason": "第三個 54 已超過 50。"
      },
      {
        "choice": "4 個",
        "truth": false,
        "reason": "沒有第四個符合者。"
      }
    ],
    "commonMistake": "列倍數時漏列或把超出範圍的數算入。",
    "concept": "共同倍數可由最小共同週期依序列出。",
    "tags": [
      "數與量",
      "因數與倍數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "計數共同倍數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8419eeebc431aba025028b4e1daed669233ec593517de155388b188d1ebbd341",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某正整數 n 滿足：6 是 n 的因數、n 是 54 的因數，且 n>10。下列哪一個可能是 n？",
    "choices": [
      "12",
      "15",
      "18",
      "24"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：n 必須同時是 6 的倍數和 54 的因數；54 的因數中符合者只有 18。所以答案是「18」。",
    "steps": [
      "n 必須同時是 6 的倍數和 54 的因數",
      "54 的因數中符合者只有 18"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "12 不是 54 的因數。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "15 不是 6 的倍數。"
      },
      {
        "choice": "18",
        "truth": true,
        "reason": "18=6×3 且 54÷18=3。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "24 不是 54 的因數。"
      }
    ],
    "commonMistake": "只檢查其中一個條件。",
    "concept": "複合條件必須同時滿足因數與倍數關係。",
    "tags": [
      "數與量",
      "因數與倍數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "交集式判斷。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f98f7befaa75fe10489a42a6d5ed88c797829bb35ba4899b30aed334bf5170c6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個正整數有且只有 6 個正因數。下列哪一個數符合？",
    "choices": [
      "16",
      "24",
      "25",
      "20"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：20 的正因數為 1、2、4、5、10、20；正好有 6 個。所以答案是「20」。",
    "steps": [
      "20 的正因數為 1、2、4、5、10、20",
      "正好有 6 個"
    ],
    "optionAnalysis": [
      {
        "choice": "16",
        "truth": false,
        "reason": "16 有 5 個正因數。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "24 有 8 個正因數。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "25 有 3 個正因數。"
      },
      {
        "choice": "20",
        "truth": true,
        "reason": "20 有 6 個正因數。"
      }
    ],
    "commonMistake": "只列部分因數就下結論。",
    "concept": "判斷因數個數時必須完整列舉。",
    "tags": [
      "數與量",
      "因數與倍數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "由因數個數辨認整數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "35d43924652dadf664e2a52dde4e78b0e14869526d6617db926316a05f8097a8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "介於 40 與 70 之間的整數中，同時以 5 和 6 為因數的數是哪一個？",
    "choices": [
      "60",
      "50",
      "54",
      "65"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：同時以 5 和 6 為因數，表示是 30 的倍數；40 到 70 之間只有 60。所以答案是「60」。",
    "steps": [
      "同時以 5 和 6 為因數，表示是 30 的倍數",
      "40 到 70 之間只有 60"
    ],
    "optionAnalysis": [
      {
        "choice": "60",
        "truth": true,
        "reason": "60=5×12=6×10。"
      },
      {
        "choice": "50",
        "truth": false,
        "reason": "50 不能被 6 整除。"
      },
      {
        "choice": "54",
        "truth": false,
        "reason": "54 不能被 5 整除。"
      },
      {
        "choice": "65",
        "truth": false,
        "reason": "65 不能被 6 整除。"
      }
    ],
    "commonMistake": "把「以 5 和 6 為因數」只檢查其中一個。",
    "concept": "同時含兩個因數就是兩者共同倍數。",
    "tags": [
      "數與量",
      "因數與倍數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "在區間中找共同倍數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2de44adbc8aa0d788110b6075ba0a24f192f13512f1937822cd6f24f66bd9ee1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "老師有 72 張卡片，要平均分成若干組，每組張數相同且不剩。下列哪一個組數不可行？",
    "choices": [
      "6 組",
      "10 組",
      "8 組",
      "12 組"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：組數必須是 72 的因數；72÷10 不是整數，所以 10 組會有剩餘。所以答案是「10 組」。",
    "steps": [
      "組數必須是 72 的因數",
      "72÷10 不是整數，所以 10 組會有剩餘"
    ],
    "optionAnalysis": [
      {
        "choice": "6 組",
        "truth": false,
        "reason": "72÷6=12，可行。"
      },
      {
        "choice": "10 組",
        "truth": true,
        "reason": "72÷10=7 餘 2，不可行。"
      },
      {
        "choice": "8 組",
        "truth": false,
        "reason": "72÷8=9，可行。"
      },
      {
        "choice": "12 組",
        "truth": false,
        "reason": "72÷12=6，可行。"
      }
    ],
    "commonMistake": "把接近整數的商也當成平均分配。",
    "concept": "平均分組要求組數整除總數。",
    "tags": [
      "數與量",
      "因數與倍數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "用因數判斷分組可行性。",
    "literacyContextNecessity": "「平均分且不剩」決定了必須檢查組數是否為 72 的因數；刪除情境就無法判定所問的分組條件。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "23214a5deec47f76d2c219b58596ddb22a919afa85c8dc1ad64b935434e6a649",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一條 96 公分的緞帶要剪成等長且每段為整數公分。下列哪一個長度可以完全剪完？",
    "choices": [
      "5 公分",
      "7 公分",
      "8 公分",
      "10 公分"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：每段長度必須是 96 的因數；96÷8=12，沒有剩餘。所以答案是「8 公分」。",
    "steps": [
      "每段長度必須是 96 的因數",
      "96÷8=12，沒有剩餘"
    ],
    "optionAnalysis": [
      {
        "choice": "5 公分",
        "truth": false,
        "reason": "96÷5 有餘數。"
      },
      {
        "choice": "7 公分",
        "truth": false,
        "reason": "96÷7 有餘數。"
      },
      {
        "choice": "8 公分",
        "truth": true,
        "reason": "96÷8=12。"
      },
      {
        "choice": "10 公分",
        "truth": false,
        "reason": "96÷10 有餘數。"
      }
    ],
    "commonMistake": "只看段長是否小於總長。",
    "concept": "等長剪裁的段長必須整除總長。",
    "tags": [
      "數與量",
      "因數與倍數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "用因數決定切割長度。",
    "literacyContextNecessity": "緞帶總長、整數公分與完全剪完三項資料共同限定整除關係，情境不可刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a39a23e94ed9fc80fd176ea073ef2c95fbee5fd2da70b1f415012b5721e3a12a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某展場每 14 個座位編成一區。若共有 196 個座位且全部編完，總區數是多少？",
    "choices": [
      "12 區",
      "13 區",
      "15 區",
      "14 區"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：196÷14=14；14 是區數，196 也是 14 的倍數。所以答案是「14 區」。",
    "steps": [
      "196÷14=14",
      "14 是區數，196 也是 14 的倍數"
    ],
    "optionAnalysis": [
      {
        "choice": "12 區",
        "truth": false,
        "reason": "14×12=168，少 28。"
      },
      {
        "choice": "13 區",
        "truth": false,
        "reason": "14×13=182，少 14。"
      },
      {
        "choice": "15 區",
        "truth": false,
        "reason": "14×15=210，超過。"
      },
      {
        "choice": "14 區",
        "truth": true,
        "reason": "14×14=196。"
      }
    ],
    "commonMistake": "把每區座位數誤當成區數，不做除法驗證。",
    "concept": "已知倍數與每份大小，可用除法求倍數倍數。",
    "tags": [
      "數與量",
      "因數與倍數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "由倍數關係求分組數。",
    "literacyContextNecessity": "每區 14 席和總席數 196 是求區數的必要資料，必須依實際編區條件相除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4d2ec5d318566c169c72d9717d88f6d0660614b81df918b87ce25bb57b1c34b3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s001-cr001",
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "列出 48 的所有正因數，並說明你如何確認沒有遺漏。",
    "requiredWork": [
      "以因數配對方式列出。",
      "因數由小到大且不重複。",
      "說明檢查到平方根即可。"
    ],
    "fullCreditSolution": [
      "因數配對：1×48、2×24、3×16、4×12、6×8。",
      "所以正因數為1、2、3、4、6、8、12、16、24、48。",
      "因數成對出現；只需檢查不超過 √48 的正整數，所有配對商都已列入，因此沒有遺漏。"
    ],
    "alternativeSolutions": [
      "也可逐一用48除以1到6，記錄無餘數者及對應商。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "十個正因數完整且說明配對/平方根檢查。"
      },
      {
        "score": 2,
        "criteria": "因數只漏一個或說明不完整。"
      },
      {
        "score": 1,
        "criteria": "列出至少五個正確因數並顯示整除概念。"
      },
      {
        "score": 0,
        "criteria": "多數數字不能整除48或未作答。"
      }
    ],
    "scoringNotes": [
      "負因數不在本題要求。",
      "順序不影響得分，但不得重複。"
    ],
    "commonErrors": [
      "漏掉48本身。",
      "把5列為因數。",
      "只列較小一側。"
    ],
    "independentReview": {
      "derivedResult": "1、2、3、4、6、8、12、16、24、48。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "c6dfdafebf3845151a4383a45b2aea0753f4c176e9c2ab8a265d0eb30cfe7186",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s001-cr002",
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-factor-multiple",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "正整數 n 小於 80，且 6、8 都是 n 的因數。列出所有可能的 n，並解釋。",
    "requiredWork": [
      "n必須同時是6與8的倍數。",
      "列出所有小於80的可能值。",
      "說明為何沒有其他值。"
    ],
    "fullCreditSolution": [
      "6與8的最小共同倍數是24。",
      "同時含6、8為因數的n必須是24的倍數。",
      "小於80的正倍數為24、48、72。"
    ],
    "alternativeSolutions": [
      "可分別列6與8的倍數後取交集。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "列出24、48、72並正確說明共同倍數。"
      },
      {
        "score": 2,
        "criteria": "答案完整但理由簡略，或漏一個值。"
      },
      {
        "score": 1,
        "criteria": "知道要找共同倍數並得到至少一個正確值。"
      },
      {
        "score": 0,
        "criteria": "把6、8的因數當候選或全部錯誤。"
      }
    ],
    "scoringNotes": [
      "80不包含在範圍。",
      "若寫0不計，因題目要求正整數。"
    ],
    "commonErrors": [
      "寫成14。",
      "只列24。",
      "把96列入。"
    ],
    "independentReview": {
      "derivedResult": "n=24、48、72。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "be132995c5de5382ff23672f79354735fc3966adad314ef08e140d3525005f33",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
