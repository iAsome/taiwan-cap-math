// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s002-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-factors",
  "skillId": "fraction-prime-composite",
  "title": "質數與合數：用正因數個數辨認整數結構",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能說明質數、合數與1的差異。",
    "能用試除法判斷中小型整數是否為質數。",
    "知道2是唯一偶質數。",
    "能把矩形排列與質合數連結。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-factor-multiple",
      "requiredLevel": "能列出一個正整數的正因數，並判斷整除。"
    }
  ],
  "glossary": [
    {
      "term": "質數",
      "definition": "大於1且正因數恰有1與本身兩個的整數。"
    },
    {
      "term": "合數",
      "definition": "大於1且正因數多於兩個的整數。"
    },
    {
      "term": "非平凡因數",
      "definition": "除了1與本身以外的正因數。"
    },
    {
      "term": "試除",
      "definition": "依序檢查可能質因數是否整除。"
    }
  ],
  "notation": [
    {
      "symbol": "p",
      "meaning": "常用來代表質數。"
    }
  ],
  "conceptNarrative": [
    "質數不是『不能分』，而是隻能分成1×本身的正整數乘積。",
    "1只有一個正因數，因此既不是質數也不是合數。",
    "除了2以外的偶數都可被2整除，所以都是合數。",
    "判斷n是否為質數，只需檢查不大於√n的質數是否整除。"
  ],
  "formalDefinitions": [
    {
      "name": "質數",
      "statement": "大於1且只有兩個正因數的整數。"
    },
    {
      "name": "合數",
      "statement": "大於1且可寫成兩個都大於1的整數乘積。"
    },
    {
      "name": "數1",
      "statement": "只有一個正因數，獨立於質數與合數之外。"
    }
  ],
  "formulas": [],
  "nonApplicableCases": [
    "負整數不在本節正質數分類範圍。",
    "不能因為是奇數就直接判定為質數。",
    "判斷大型數若未檢查到平方根，可能漏掉因數。",
    "0與1都不是質數。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "確認數大於1。",
      "check": "0或1要先排除。"
    },
    {
      "step": 2,
      "instruction": "先檢查2、3、5等小質數。",
      "check": "是否可快速整除？"
    },
    {
      "step": 3,
      "instruction": "只檢查到平方根。",
      "check": "若有較大因數，必伴隨較小因數。"
    },
    {
      "step": 4,
      "instruction": "找到非平凡因數就判合數。",
      "check": "能否寫成兩個大於1的整數乘積？"
    },
    {
      "step": 5,
      "instruction": "未找到則判質數。",
      "check": "是否已完成必要試除？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "判斷 19。",
      "solutionSteps": [
        "19大於1。",
        "不能被2、3整除，且√19<5。"
      ],
      "answer": "19是質數。"
    },
    {
      "exampleId": "L2",
      "prompt": "判斷 57。",
      "solutionSteps": [
        "各位數和為12。",
        "57可被3整除，57=3×19。"
      ],
      "answer": "57是合數。"
    },
    {
      "exampleId": "L3",
      "prompt": "說明2為何特殊。",
      "solutionSteps": [
        "2的正因數只有1、2。",
        "任何更大的偶數還有因數2。"
      ],
      "answer": "2是唯一偶質數。"
    },
    {
      "exampleId": "L4",
      "prompt": "29人能否排成兩邊都大於1的完整長方形？",
      "solutionSteps": [
        "29是質數。",
        "沒有非平凡因數。"
      ],
      "answer": "不能。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把1列為質數。",
      "why": "只記得1不能再分。",
      "correction": "用正因數個數判斷：1只有一個正因數。"
    },
    {
      "mistake": "把所有奇數列為質數。",
      "why": "忽略9、15等奇合數。",
      "correction": "檢查是否可被小質數整除。"
    },
    {
      "mistake": "把2列為合數。",
      "why": "看到偶數就一概排除。",
      "correction": "2只有兩個正因數。"
    },
    {
      "mistake": "只檢查2就宣稱質數。",
      "why": "忽略3、5、7等因數。",
      "correction": "試除到平方根。"
    },
    {
      "mistake": "把負數也稱為質數。",
      "why": "未依課程定義限制正整數。",
      "correction": "本節質合數分類物件是大於1的正整數。"
    },
    {
      "mistake": "矩形排列容許剩餘。",
      "why": "忽略『平均、不剩』。",
      "correction": "質數只能排成1×本身。"
    }
  ],
  "selfCheck": [
    "數是否大於1？",
    "正因數是否恰有兩個？",
    "是否檢查2的例外？",
    "試除是否做到平方根？",
    "情境中的兩個乘數是否都要求大於1？"
  ],
  "summary": [
    "質數恰有兩個正因數。",
    "合數可分成兩個都大於1的整數乘積。",
    "1既非質數也非合數。",
    "2是唯一偶質數。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-factor-multiple，需能完成其基本判斷與計算。",
    "next": [
      "質因數分解會把合數拆成質數乘積。",
      "GCD與LCM將使用質因數指數。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s002-v001",
      "u02-s002-v002",
      "u02-s002-v003",
      "u02-s002-v004",
      "u02-s002-v005",
      "u02-s002-v006",
      "u02-s002-v007",
      "u02-s002-v008",
      "u02-s002-v009",
      "u02-s002-v010",
      "u02-s002-v011",
      "u02-s002-v012"
    ],
    "constructedResponseIds": [
      "u02-s002-cr001",
      "u02-s002-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "重新列出所有例題的正因數或試除結果，特別核對1、2與奇合數；7、8、29與91的分類均以實際因數個數驗證。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "e4b73516627d5f6a3ff9efca5bb7bd9d853605a38d8490ad793d422a3aee42c1"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s002-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個數是質數？",
    "choices": [
      "13",
      "15",
      "21",
      "27"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：13 的正因數只有 1 和 13；其餘三數都可分解成兩個大於 1 的整數相乘。所以答案是「13」。",
    "steps": [
      "13 的正因數只有 1 和 13",
      "其餘三數都可分解成兩個大於 1 的整數相乘"
    ],
    "optionAnalysis": [
      {
        "choice": "13",
        "truth": true,
        "reason": "13 只有 1 和 13 兩個正因數。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "15=3×5。"
      },
      {
        "choice": "21",
        "truth": false,
        "reason": "21=3×7。"
      },
      {
        "choice": "27",
        "truth": false,
        "reason": "27=3×9。"
      }
    ],
    "commonMistake": "把所有奇數都當成質數。",
    "concept": "質數恰有兩個正因數。",
    "tags": [
      "數與量",
      "質數與合數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-factor-multiple"
    ],
    "authoringIntent": "辨認質數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bd80f80913eeda0cf08844c69d7610965ec8aa1acc0673d6df7d0134dc9afd07"
  },
  {
    "questionId": "u02-s002-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個數是合數？",
    "choices": [
      "17",
      "22",
      "29",
      "31"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：22=2×11；因此除了 1 和 22，還有 2、11 等因數。所以答案是「22」。",
    "steps": [
      "22=2×11",
      "因此除了 1 和 22，還有 2、11 等因數"
    ],
    "optionAnalysis": [
      {
        "choice": "17",
        "truth": false,
        "reason": "17 是質數。"
      },
      {
        "choice": "22",
        "truth": true,
        "reason": "22=2×11，是合數。"
      },
      {
        "choice": "29",
        "truth": false,
        "reason": "29 是質數。"
      },
      {
        "choice": "31",
        "truth": false,
        "reason": "31 是質數。"
      }
    ],
    "commonMistake": "只用奇偶判斷，忽略偶數 2 的特殊性。",
    "concept": "合數有兩個以上的非平凡因數。",
    "tags": [
      "數與量",
      "質數與合數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-factor-multiple"
    ],
    "authoringIntent": "辨認合數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "05619a218ce9e45bc1c6b1f4abfbf82b5214b4a0206fce7ce97e09eb87c0dd2c"
  },
  {
    "questionId": "u02-s002-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "關於數 1，下列敘述何者正確？",
    "choices": [
      "1 是最小質數",
      "1 是最小合數",
      "1 既不是質數也不是合數",
      "1 同時是質數和合數"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：1 只有一個正因數 1；質數需恰有兩個正因數，合數需多於兩個。所以答案是「1 既不是質數也不是合數」。",
    "steps": [
      "1 只有一個正因數 1",
      "質數需恰有兩個正因數，合數需多於兩個"
    ],
    "optionAnalysis": [
      {
        "choice": "1 是最小質數",
        "truth": false,
        "reason": "1 不是質數。"
      },
      {
        "choice": "1 是最小合數",
        "truth": false,
        "reason": "1 不是合數。"
      },
      {
        "choice": "1 既不是質數也不是合數",
        "truth": true,
        "reason": "1 既非質數也非合數。"
      },
      {
        "choice": "1 同時是質數和合數",
        "truth": false,
        "reason": "不可能同時屬兩類。"
      }
    ],
    "commonMistake": "把 1 當成質數，導致質因數分解不唯一。",
    "concept": "1 是質數與合數分類之外的特殊數。",
    "tags": [
      "數與量",
      "質數與合數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-factor-multiple"
    ],
    "authoringIntent": "辨認 1 的分類。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "93e616426e1f91917632448890f5cc6f7d6715f7aaccfb5a9012c93127a1384e"
  },
  {
    "questionId": "u02-s002-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "唯一的偶質數是哪一個？",
    "choices": [
      "0",
      "1",
      "4",
      "2"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：2 的正因數只有 1、2；其他偶數都至少可被 1、2、本身整除。所以答案是「2」。",
    "steps": [
      "2 的正因數只有 1、2",
      "其他偶數都至少可被 1、2、本身整除"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "0 不列入正質數。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "1 不是質數。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "4=2×2，是合數。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "2 是唯一偶質數。"
      }
    ],
    "commonMistake": "把所有偶數都排除為質數。",
    "concept": "2 是唯一的偶質數。",
    "tags": [
      "數與量",
      "質數與合數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-factor-multiple"
    ],
    "authoringIntent": "掌握質數例外。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7d02075b4ff5fc80a7564ecc86209f201f3d77a59422f893c2e6200b077fc6c6"
  },
  {
    "questionId": "u02-s002-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "10 到 20 之間共有幾個質數？",
    "choices": [
      "4 個",
      "5 個",
      "6 個",
      "7 個"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：逐一檢查得到 11、13、17、19；共有 4 個。所以答案是「4 個」。",
    "steps": [
      "逐一檢查得到 11、13、17、19",
      "共有 4 個"
    ],
    "optionAnalysis": [
      {
        "choice": "4 個",
        "truth": true,
        "reason": "11、13、17、19，共 4 個。"
      },
      {
        "choice": "5 個",
        "truth": false,
        "reason": "把 15 誤列後會得到 5 個。"
      },
      {
        "choice": "6 個",
        "truth": false,
        "reason": "把更多合數誤列才會得到 6 個。"
      },
      {
        "choice": "7 個",
        "truth": false,
        "reason": "區間內沒有 7 個質數。"
      }
    ],
    "commonMistake": "未檢查 15 是否可被 3、5 整除。",
    "concept": "列舉區間質數要排除每個合數。",
    "tags": [
      "數與量",
      "質數與合數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-factor-multiple"
    ],
    "authoringIntent": "計數區間中的質數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "523003eca7e01faef474c16bc3c8b4c0125f22c2831bf3175a7a7f94b0aa3b07"
  },
  {
    "questionId": "u02-s002-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 p 是小於 10 的質數，且 p 能整除 91，則 p 是多少？",
    "choices": [
      "5",
      "7",
      "11",
      "13"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：91=7×13；小於 10 的質因數只有 7。所以答案是「7」。",
    "steps": [
      "91=7×13",
      "小於 10 的質因數只有 7"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "5 不能整除 91。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "7×13=91，且 7<10。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "11 不符合小於 10。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "13 不符合小於 10。"
      }
    ],
    "commonMistake": "忽略小於 10 的限制。",
    "concept": "多條件題要同時檢查質數、整除與範圍。",
    "tags": [
      "數與量",
      "質數與合數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-factor-multiple"
    ],
    "authoringIntent": "由限制找質因數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f569420e5b1477988da80b7ac7609289bc5fa355eb106a70e95ab1d3734a47fd"
  },
  {
    "questionId": "u02-s002-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個數可以寫成兩個不同質數的乘積？",
    "choices": [
      "49",
      "75",
      "77",
      "81"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：77=7×11；7 與 11 都是質數且彼此不同。所以答案是「77」。",
    "steps": [
      "77=7×11",
      "7 與 11 都是質數且彼此不同"
    ],
    "optionAnalysis": [
      {
        "choice": "49",
        "truth": false,
        "reason": "49=7×7，兩質數相同。"
      },
      {
        "choice": "75",
        "truth": false,
        "reason": "75=3×5×5，不只兩個質因數。"
      },
      {
        "choice": "77",
        "truth": true,
        "reason": "77=7×11，符合。"
      },
      {
        "choice": "81",
        "truth": false,
        "reason": "81=3×3×3×3。"
      }
    ],
    "commonMistake": "只看能否分解，沒有核對因數是否恰為兩個不同質數。",
    "concept": "乘積型態要檢查因數個數、質數性與是否相同。",
    "tags": [
      "數與量",
      "質數與合數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-factor-multiple"
    ],
    "authoringIntent": "辨認質數乘積結構。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "af46b6801d7de9a4ccb428bd11492165ccf4a25dbd14ee15bd1cb8bbf711f75f"
  },
  {
    "questionId": "u02-s002-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某質數 q 介於 40 與 50 之間，且 q+2 也是質數。q 是多少？",
    "choices": [
      "43",
      "45",
      "47",
      "41"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：區間內質數為 41、43、47；41+2=43 是質數；43+2=45、47+2=49 都不是質數。所以答案是「41」。",
    "steps": [
      "區間內質數為 41、43、47",
      "41+2=43 是質數；43+2=45、47+2=49 都不是質數"
    ],
    "optionAnalysis": [
      {
        "choice": "43",
        "truth": false,
        "reason": "43+2=45，不是質數。"
      },
      {
        "choice": "45",
        "truth": false,
        "reason": "45 本身不是質數。"
      },
      {
        "choice": "47",
        "truth": false,
        "reason": "47+2=49=7²。"
      },
      {
        "choice": "41",
        "truth": true,
        "reason": "41 與 43 都是質數。"
      }
    ],
    "commonMistake": "只檢查 q 本身是否為質數，未檢查 q+2。",
    "concept": "孿生質數條件需同時檢查兩個數。",
    "tags": [
      "數與量",
      "質數與合數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-factor-multiple"
    ],
    "authoringIntent": "處理相鄰質數條件。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fffd0a0b4a4e0881139af06568a38b0262d546052f3ee7a21a2e9eb38554b5fb"
  },
  {
    "questionId": "u02-s002-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 n 是大於 1 的整數，且 n 與 n+1 都是質數，則 n 是多少？",
    "choices": [
      "2",
      "3",
      "5",
      "7"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：相鄰兩整數中必有一個偶數；唯一可為質數的偶數是 2，所以相鄰質數只能是 2、3。所以答案是「2」。",
    "steps": [
      "相鄰兩整數中必有一個偶數",
      "唯一可為質數的偶數是 2，所以相鄰質數只能是 2、3"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": true,
        "reason": "2 與 3 都是質數。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "3 與 4 中 4 合數。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "5 與 6 中 6 合數。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "7 與 8 中 8 合數。"
      }
    ],
    "commonMistake": "逐項猜測，沒有利用相鄰數一奇一偶。",
    "concept": "唯一偶質數 2 可快速限制相鄰質數。",
    "tags": [
      "數與量",
      "質數與合數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-factor-multiple"
    ],
    "authoringIntent": "用性質推導唯一解。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "52b1dcadaaacfa97666397ab1eb2256f0a1198aa99a33fc1534bd2287c004ce8"
  },
  {
    "questionId": "u02-s002-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班要把 29 位學生排成每列人數相同、列數也大於 1 的長方形隊形。下列判斷何者正確？",
    "choices": [
      "可以排成 1×29 以外的隊形",
      "無法排成符合條件的長方形",
      "可以排成 2×14 並剩 1 人",
      "可以排成 29×29"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：29 是質數，正因數只有 1 和 29；若列數與每列人數都大於 1，就不存在整除分法。所以答案是「無法排成符合條件的長方形」。",
    "steps": [
      "29 是質數，正因數只有 1 和 29",
      "若列數與每列人數都大於 1，就不存在整除分法"
    ],
    "optionAnalysis": [
      {
        "choice": "可以排成 1×29 以外的隊形",
        "truth": false,
        "reason": "1×29 的一邊不大於1，不符合。"
      },
      {
        "choice": "無法排成符合條件的長方形",
        "truth": true,
        "reason": "質數 29 無非平凡因數，正確。"
      },
      {
        "choice": "可以排成 2×14 並剩 1 人",
        "truth": false,
        "reason": "題目要求不剩人。"
      },
      {
        "choice": "可以排成 29×29",
        "truth": false,
        "reason": "29×29 需要 841 人。"
      }
    ],
    "commonMistake": "把有餘數的排列也當成平均隊形。",
    "concept": "質數無法分成兩個都大於 1 的整數乘積。",
    "tags": [
      "數與量",
      "質數與合數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-factor-multiple"
    ],
    "authoringIntent": "用質數性判斷矩形排列。",
    "literacyContextNecessity": "學生總數、不得剩人及兩邊都大於 1 共同決定要檢查 29 是否有非平凡因數。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b5b79a59efdff815b95013b4e37daa621aa00e91a6038a209b50d454e0a2ed2e"
  },
  {
    "questionId": "u02-s002-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個商品條碼末兩位是一個介於 50 與 60 的質數，且十位數為 5。下列哪一個可能是末兩位？",
    "choices": [
      "51",
      "55",
      "59",
      "57"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：51=3×17、55=5×11、57=3×19；59 除 2、3、5、7 都不整除，所以是質數。所以答案是「59」。",
    "steps": [
      "51=3×17、55=5×11、57=3×19",
      "59 除 2、3、5、7 都不整除，所以是質數"
    ],
    "optionAnalysis": [
      {
        "choice": "51",
        "truth": false,
        "reason": "51 可被 3 整除。"
      },
      {
        "choice": "55",
        "truth": false,
        "reason": "55 可被 5 整除。"
      },
      {
        "choice": "59",
        "truth": true,
        "reason": "59 是質數。"
      },
      {
        "choice": "57",
        "truth": false,
        "reason": "57 可被 3 整除。"
      }
    ],
    "commonMistake": "只因末位不是偶數就判定為質數。",
    "concept": "檢查小於平方根的質因數即可判定質數。",
    "tags": [
      "數與量",
      "質數與合數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-factor-multiple"
    ],
    "authoringIntent": "在範圍內辨認質數。",
    "literacyContextNecessity": "條碼範圍與十位數限制界定候選值，質數判定是情境中的必要條件。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a85ea9de9e771717317f3a15875f2888d624930d66105c87da6391e8907b1c47"
  },
  {
    "questionId": "u02-s002-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "園遊會有 43 張抽獎券。若要平均裝成至少 2 袋，每袋也至少 2 張且不剩，應如何處理？",
    "choices": [
      "分成 2 袋",
      "分成 4 袋",
      "分成 43 袋",
      "無法照條件平均分袋"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：43 是質數；不存在袋數與每袋張數都至少 2 的整數分解。所以答案是「無法照條件平均分袋」。",
    "steps": [
      "43 是質數",
      "不存在袋數與每袋張數都至少 2 的整數分解"
    ],
    "optionAnalysis": [
      {
        "choice": "分成 2 袋",
        "truth": false,
        "reason": "43÷2 有餘數。"
      },
      {
        "choice": "分成 4 袋",
        "truth": false,
        "reason": "43÷4 有餘數。"
      },
      {
        "choice": "分成 43 袋",
        "truth": false,
        "reason": "每袋 1 張違反條件。"
      },
      {
        "choice": "無法照條件平均分袋",
        "truth": true,
        "reason": "質數無符合條件的分袋方式。"
      }
    ],
    "commonMistake": "看到 43 袋可整除就忽略每袋至少 2 張。",
    "concept": "質數只能分成 1×本身。",
    "tags": [
      "數與量",
      "質數與合數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-factor-multiple"
    ],
    "authoringIntent": "用質數性處理分袋限制。",
    "literacyContextNecessity": "至少 2 袋、每袋至少 2 張及不剩三項條件共同排除質數的兩種平凡分法。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6d062a3cd64b6168ecf2aaee8cdf5729e84b2b4650dd98b80ec3d94c43ab1f19"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s002-cr001",
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "說明為什麼 1 既不是質數也不是合數，並分別舉一個質數與合數。",
    "requiredWork": [
      "用正因數個數定義解釋。",
      "質數與合數例子各一。"
    ],
    "fullCreditSolution": [
      "1只有正因數1，共一個。",
      "質數需恰有兩個正因數，合數需多於兩個，因此1兩者皆非。",
      "例如7是質數，8=2×4是合數。"
    ],
    "alternativeSolutions": [
      "可用不可寫成兩個大於1整數乘積補充合數定義。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "定義、1的因數個數及兩個正確例子完整。"
      },
      {
        "score": 2,
        "criteria": "核心解釋正確但例子漏一或定義略簡。"
      },
      {
        "score": 1,
        "criteria": "知道1兩者皆非但理由不完整。"
      },
      {
        "score": 0,
        "criteria": "把1歸入質數或合數。"
      }
    ],
    "scoringNotes": [
      "例子可替換為其他正確正整數。"
    ],
    "commonErrors": [
      "把2寫成合數。",
      "說1不能被任何數整除。"
    ],
    "independentReview": {
      "derivedResult": "1既非質數也非合數；示例7與8。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "db81a863db9534d4a932a02035280703ecb8a31fa5de747f230873cb40678991"
  },
  {
    "questionId": "u02-s002-cr002",
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-prime-composite",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "判斷 221 是否為質數，寫出足以支援結論的檢查過程。",
    "requiredWork": [
      "說明只需檢查不大於√221的質數。",
      "實際試除並給出結論。"
    ],
    "fullCreditSolution": [
      "√221約14.9，所以檢查2、3、5、7、11、13。",
      "221不能被2、3、5、7、11整除。",
      "221=13×17，因此221是合數。"
    ],
    "alternativeSolutions": [
      "可直接發現221÷13=17，但須說明13為非平凡因數。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "找到13×17並說明因此為合數。"
      },
      {
        "score": 2,
        "criteria": "結論正確且找到13，但檢查範圍說明不足。"
      },
      {
        "score": 1,
        "criteria": "判為合數但未給有效因數，或試除接近完成。"
      },
      {
        "score": 0,
        "criteria": "判為質數或過程無關。"
      }
    ],
    "scoringNotes": [
      "不要求檢查17，因為發現13已足夠。"
    ],
    "commonErrors": [
      "只看末位1就判質數。",
      "試除到11後過早停止。"
    ],
    "independentReview": {
      "derivedResult": "221=13×17，是合數。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "7e40a41222a7967657e80bdbb643926509bd1688aa62f87bdd2d976d9d9fb660"
  }
];

export const DRAWING_SPECS = [];
