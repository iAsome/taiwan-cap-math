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
    "質數不是「不能分」，而是只能分成 1×本身的正整數乘積。",
    "1 只有一個正因數，因此既不是質數也不是合數。",
    "除了 2 以外的偶數都可被 2 整除，所以都是合數。",
    "判斷 n 是否為質數，只需檢查不大於 √n 的質數是否整除。",
    "若找到任何介於 1 與本身之間的正因數，就已證明該數是合數，不必繼續試除。"
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
      "prompt": "判斷 19 是質數或合數。",
      "solutionSteps": [
        "因為 4<√19<5，只需檢查不大於 √19 的質數 2、3。",
        "19 不是偶數，且各位數和 1+9=10 不是 3 的倍數，所以 19 不被 2 或 3 整除。",
        "19 沒有 1 與本身以外的正因數，因此是質數。"
      ],
      "answer": "19 是質數。",
      "why": "19 大於 1，且 √19 小於 5，只需檢查質數 2、3。19 不是偶數，各位數和 10 也非 3 的倍數，因此沒有非平凡因數，可依定義判定為質數。"
    },
    {
      "prompt": "判斷 57 是質數或合數。",
      "solutionSteps": [
        "計算各位數和 5+7=12，12 是 3 的倍數，所以 57 可被 3 整除。",
        "計算 57÷3=19，得到 57=3×19。",
        "57 有 1 與本身之外的因數 3、19，因此判定為合數。"
      ],
      "answer": "57 是合數。",
      "why": "57 的各位數和為 12，可被 3 整除，且 57=3×19。找到 1 與本身之外的因數 3、19，便足以判定它是合數，不必再列出所有正因數。"
    },
    {
      "prompt": "說明 2 為什麼是特殊的質數。",
      "solutionSteps": [
        "列出 2 的正因數為 1、2，恰有兩個正因數，所以 2 是質數。",
        "任一大於 2 的偶數都可寫成 2×k，其中 k>1，因此除 1 與本身外還有因數 2。",
        "所以大於 2 的偶數都是合數，2 便是唯一的偶質數。"
      ],
      "answer": "2 是唯一的偶質數。",
      "why": "2 的正因數只有 1、2，符合質數恰有兩個正因數的定義；任何大於 2 的偶數都還能被 2 整除，所以必有額外因數而成為合數。"
    },
    {
      "prompt": "29 人能否排成兩邊都大於 1 的完整長方形？",
      "solutionSteps": [
        "完整長方形的兩邊人數須為大於 1 的整數，且兩數乘積為 29。",
        "檢查不大於 √29 的質數 2、3、5，29 都不能被它們整除，所以 29 是質數。",
        "29 只能寫成 1×29，含有一邊為 1，不符合兩邊都大於 1，因此不能排成。"
      ],
      "answer": "不能。",
      "why": "完整長方形需把 29 寫成兩個都大於 1 的整數乘積，但 29 是質數，正因數只有 1、29。唯一排列 1×29 有一邊不大於 1，所以不符題目限制。"
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
  "contentSha256": "730fb6dae7423848103a07269ce33fa68886f5e581690351c381149b118660a4",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "質數必須大於 1 且恰有 1 與本身兩個正因數。13 不能被 2、3 整除，所以只有 1、13 兩個正因數；15=3×5、21=3×7、27=3×9，三者都是合數，唯有 13 符合定義，因此它是唯一可選的質數。",
    "steps": [
      "先依質數定義檢查 13 的正因數。",
      "確認 13 不能被不大於 √13 的質數 2、3 整除。",
      "用乘積分解排除 15、21、27。"
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
    "commonMistake": "把十五、二十一、二十七也因為是奇數而誤判成質數。",
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
    "contentSha256": "894c1911e4aa37317ed47c79155ac2cbcbffaa2b8d0eb9535a8dade7123adb01",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "合數是大於 1 且正因數超過兩個的整數。22=2×11，所以除 1、22 外還有 2、11，是合數；17、29、31 都無法被其平方根以下的質數整除，均為質數，因此答案為 22。",
    "steps": [
      "嘗試把四個選項分解成大於 1 的整數乘積。",
      "找到 22=2×11，確定它有非平凡因數。",
      "檢查 17、29、31 為質數後選 22。"
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
    "contentSha256": "d865a203ea096d98362ebe353657c7c0d25ae9eaea7e0fd6b6978c221075443f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "列出 1 唯一的正因數就是 1。",
      "比較質數需恰有兩個、合數需多於兩個正因數。",
      "判定 1 既不是質數，也不是合數。"
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
    "contentSha256": "398ac46bdfe122b2f9ea6b554a6bcdcd5ce23012ef3b2a2179150d7a18d4dd30",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "2 的正因數只有 1、2，恰好兩個，所以 2 是質數。任何大於 2 的偶數都可被 2 整除，除 1 與本身外還有因數 2，因此必為合數，故 2 是唯一偶質數。",
    "steps": [
      "列出 2 的正因數只有 1、2。",
      "說明大於 2 的偶數都有額外因數 2。",
      "排除 0、1、4 後確認唯一偶質數為 2。"
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
    "commonMistake": "把所有偶數一律判為合數，因而漏掉唯一的偶質數二。",
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
    "contentSha256": "87ea2463e084086b0092efc60aad30abd2ac11ed47c308847d5a5f14ff3981a7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "10 到 20 之間的整數逐一檢查後，11、13、17、19 只有 1 與本身兩個正因數。其餘數不是偶數，就是能被 3 或 5 整除，所以共有 4 個質數，列舉後計數即可。",
    "steps": [
      "先排除區間內大於 2 的偶數。",
      "再用 3、5 的整除性排除 15 等合數。",
      "列出 11、13、17、19 並計得 4 個。"
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
    "commonMistake": "把十五列為質數，沒有檢查它可同時被三與五整除。",
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
    "contentSha256": "1e569678031afc1154ee945e2018f2c6b3e0b9c183ff617285b57cd0fd7394ce",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "先分解 91=7×13，兩個質因數為 7、13。題目又限制 p 小於 10，因此只能保留 7；5 不能整除 91，而 11、13 均不符合小於 10 的條件，故 p 唯一可能是 7，並且 91÷7=13 沒有餘數。",
    "steps": [
      "將 91 分解成質因數 7×13。",
      "從質因數中套用 p<10 的限制。",
      "確認 7 能整除 91 且符合範圍。"
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
    "commonMistake": "找到質因數十三便作答，忽略題目限定質數必須小於十。",
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
    "contentSha256": "3b9a738dc22fa0fb1a484a4928b864b3245b400275191260b49bb8d599efb2bb",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "77=7×11，7、11 都是質數且彼此不同，完全符合條件。49=7×7 的兩質數相同；75=3×5×5、81=3⁴ 都不是恰由兩個不同質數相乘，因此唯一答案是 77，且其質因數分解已完整。",
    "steps": [
      "分解四個選項的質因數。",
      "確認 77 的分解恰為 7×11。",
      "檢查 7、11 均為質數且不同，排除其餘選項。"
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
    "contentSha256": "a3481708464326ea9fa67b50179fca59a3f0e3830ed5989cef06ea6fbf169d8e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "40、50 之間的質數是 41、43、47。再檢查 q+2：41+2=43 仍是質數；43+2=45=3×15，47+2=49=7²，後兩者為合數，所以 q=41。這是唯一同時滿足 q 與 q+2 皆為質數的選項，兩個條件均已檢查。",
    "steps": [
      "先列出區間內質數 41、43、47。",
      "分別計算三個候選值的 q+2。",
      "確認只有 41 與 43 同為質數。"
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
    "contentSha256": "a3d3bc37f3d9cc3be873a2636f6210ef4aecb90d2a6ad04b0d242cecbc1a11e1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "相鄰兩整數一奇一偶；若兩者都為質數，其中的偶數只能是唯一偶質數 2。因此這對相鄰質數只能是 2、3，較小的 n=2；3、5、7 的下一個整數皆為大於 2 的偶合數。",
    "steps": [
      "利用相鄰兩整數必有一個偶數。",
      "套用唯一偶質數是 2 的性質。",
      "驗算 n=2 時 2、3 都是質數。"
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
    "contentSha256": "c78a1d2fac5f9c920d35b099a3e7313fe6b04e026854180b314c567667e28fa2",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "確認 29 的正因數只有 1、29。",
      "把長方形兩邊都大於 1 翻成非平凡因數分解。",
      "判定 29 無此分解，故不能排成符合條件的隊形。"
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
    "contentSha256": "1939d90c9da210c4dcc7035e577e20158697ec2b255b6ed561497bd39443f3d1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "51=3×17、55=5×11、57=3×19，三者都有非平凡因數。√59 小於 8，只需檢查質數 2、3、5、7，均不能整除 59，因此 59 是區間內符合條件的質數，也是唯一符合者，因數檢查已覆蓋必要範圍。",
    "steps": [
      "先用整除性分解 51、55、57。",
      "對 59 試除不大於 √59 的質數 2、3、5、7。",
      "確認都不整除後判定 59 為質數。"
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
    "contentSha256": "9204af3fe0f5f210244bf25df1cc08fe861a24dece1c08309c2e6a8c628d9735",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "43 是質數，只能寫成 1×43。若袋數與每袋張數都至少 2，就需要把 43 分解成兩個都大於 1 的整數，但這不可能；分成 43 袋又會每袋僅 1 張，所以無法依條件分袋。",
    "steps": [
      "判定 43 的正因數只有 1、43。",
      "將分袋條件翻成兩個因數都至少為 2。",
      "排除每袋 1 張後判定沒有可行分法。"
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
    "contentSha256": "1454436c7d64164cd6a2eeeab3f17bf99a2940474caa0c9ecd3a7e9cc6ff0d51",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "1 的正因數只有 1，共一個；質數需恰有兩個正因數，合數則有兩個以上但不只兩個。",
      "因此 1 的因數個數既不符合質數，也不符合合數定義，所以 1 兩者皆非。",
      "例如 7 的正因數只有 1、7，是質數；8=2×4，另有因數 2、4，是合數。"
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
    "contentSha256": "0e285e11fd814c25a9e08efb9bfc7d920264daa84b122da2e415fdd77bd1f019",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "因為 √221 約為 14.9，只需檢查不大於它的質數 2、3、5、7、11、13。",
      "221 不是偶數、各位數和不是 3 的倍數、末位不是 0 或 5，且除以 7、11 也不整除。",
      "檢查 13 時得到 221=13×17，找到非平凡因數，因此 221 是合數而不是質數。"
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
    "contentSha256": "92681ad4214868b765d4b8312640eede3b70fb834da2e22e6372521c0fa580ce",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
