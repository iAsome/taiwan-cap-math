// GENERATED ONLY AS A SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT. DO NOT ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s001-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-basics",
  "skillId": "integer-number-classification",
  "title": "數的分類：整數與有理數和無理數",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能說出正整數、0、負整數與整數的關係。",
    "能用 p/q（q≠0）判斷有理數。",
    "能辨認有限小數與循環小數都是有理數。",
    "能先化簡根號數，再判斷它是有理數或無理數。",
    "能利用反例檢查「全部、一定、只要」等敘述。"
  ],
  "prerequisites": [
    {
      "name": "基本四則與分數寫法",
      "requiredLevel": "知道分子、分母及分母不能為 0。"
    },
    {
      "name": "平方的意義",
      "requiredLevel": "知道 7²=49，因此 √49=7。"
    }
  ],
  "glossary": [
    {
      "term": "正整數",
      "definition": "1、2、3、……這些大於 0 且沒有分數部分的整數。"
    },
    {
      "term": "負整數",
      "definition": "-1、-2、-3、……這些小於 0 且沒有分數部分的整數。"
    },
    {
      "term": "整數",
      "definition": "正整數、0 和負整數合在一起。"
    },
    {
      "term": "有理數",
      "definition": "能寫成 p/q 的數，其中 p、q 都是整數，而且 q≠0。"
    },
    {
      "term": "有限小數",
      "definition": "小數點後只有有限個數字，例如 0.25。"
    },
    {
      "term": "循環小數",
      "definition": "小數點後有一段數字按照固定週期不斷重複，例如 0.272727…。"
    },
    {
      "term": "無理數",
      "definition": "不能寫成兩整數之比的小數；其小數表示無限且不循環，例如 π、√2。"
    },
    {
      "term": "完全平方數",
      "definition": "某個整數平方所得的數，例如 49=7²，所以 49 是完全平方數。"
    }
  ],
  "notation": [
    {
      "symbol": "p/q",
      "meaning": "p 除以 q；在有理數定義中，p、q 必須是整數且 q≠0。"
    },
    {
      "symbol": "√a",
      "meaning": "非負平方根；例如 √49=7，因為 7²=49。"
    },
    {
      "symbol": "…",
      "meaning": "依照題目已說明的規律繼續下去；只有明確循環時才能直接判為循環小數。"
    }
  ],
  "conceptNarrative": [
    "數的分類不是看外觀，而是看它符合哪一個定義。同一個數可以同時屬於多個集合。例如 -3 是負整數、整數，也是有理數。",
    "整數可以寫成分母為 1 的分數，所以所有整數都是有理數；但 1/2 是有理數卻不是整數，因此不能把包含關係倒過來。",
    "有限小數一定能化成分母為 10、100、1000 等的分數；循環小數也能化成分數，所以兩者都是有理數。",
    "看到根號不能立刻判為無理數。必須先化簡：√49=7 是有理數；√2 無法化成分數，才是無理數。",
    "0 是整數與有理數，但不是正整數也不是負整數。這是分類題最常考的邊界。"
  ],
  "formalDefinitions": [
    {
      "name": "整數",
      "statement": "整數集合由負整數、0、正整數構成。"
    },
    {
      "name": "有理數",
      "statement": "若一個數可寫成 p/q，其中 p、q∈整數且 q≠0，則它是有理數。"
    },
    {
      "name": "無理數",
      "statement": "不能寫成上述 p/q 形式的實數稱為無理數。"
    }
  ],
  "classificationMap": [
    {
      "number": "-8",
      "classifications": [
        "負整數",
        "整數",
        "有理數"
      ]
    },
    {
      "number": "0",
      "classifications": [
        "整數",
        "有理數",
        "不是正整數",
        "不是負整數"
      ]
    },
    {
      "number": "3/5",
      "classifications": [
        "正有理數",
        "不是整數"
      ]
    },
    {
      "number": "0.125",
      "classifications": [
        "有限小數",
        "有理數",
        "不是整數"
      ]
    },
    {
      "number": "0.333…（3 持續循環）",
      "classifications": [
        "循環小數",
        "有理數",
        "不是整數"
      ]
    },
    {
      "number": "√16",
      "classifications": [
        "化簡為 4",
        "正整數",
        "有理數"
      ]
    },
    {
      "number": "√2",
      "classifications": [
        "無理數"
      ]
    },
    {
      "number": "π",
      "classifications": [
        "無理數"
      ]
    }
  ],
  "formulas": [
    {
      "formula": "有理數 = p/q",
      "conditions": [
        "p、q 都是整數",
        "q≠0"
      ],
      "meaning": "用兩整數之比表示。"
    },
    {
      "formula": "有限小數 a/10ⁿ",
      "conditions": [
        "小數點後有 n 位"
      ],
      "meaning": "把小數去掉小數點作分子，10ⁿ 作分母，再約分。"
    }
  ],
  "nonApplicableCases": [
    "p/0 不是有理數表示，因為除以 0 沒有定義。",
    "只看到根號符號時不能直接判斷，必須先化簡根號內的數。",
    "只知道小數位數很多時不能直接判無理數；要知道它是否循環。",
    "近似值 3.14 是有理數，但它不等於無理數 π；近似表示不能取代精確分類。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "讀出題目要判斷的類別或條件。",
      "check": "是否有「不是、但不是、全部」等限制詞？"
    },
    {
      "step": 2,
      "instruction": "先完成必要化簡。",
      "check": "根號是否可化簡？算式是否尚未算完？"
    },
    {
      "step": 3,
      "instruction": "先判斷是否為整數。",
      "check": "結果是否沒有非零分數或小數部分？"
    },
    {
      "step": 4,
      "instruction": "再判斷是否可寫成 p/q。",
      "check": "有限小數、循環小數、整數都可以。"
    },
    {
      "step": 5,
      "instruction": "無法寫成 p/q 才判為無理數。",
      "check": "是否只是因外觀含根號或小數就武斷分類？"
    },
    {
      "step": 6,
      "instruction": "逐一驗證選項或敘述。",
      "check": "是否存在反例？是否同時滿足所有條件？"
    }
  ],
  "workedExamples": [
    {
      "prompt": "把 −6、5/4、√25、√6 分類。",
      "answer": "−6：負整數、整數、有理數；5/4：有理數但不是整數；√25：正整數、整數、有理數；√6：無理數。",
      "why": "分類不能只看符號外形。−6 沒有分數部分，5/4 是分母不為零的整數比，√25 要先化成 5；而 6 不是完全平方數，所以 √6 才是無理數。"
    },
    {
      "prompt": "說明 0.625 為什麼是有理數。",
      "answer": "0.625=625/1000=5/8，因此是有理數。",
      "why": "有限小數有三位小數時，可先寫成分母為 1000 的分數。625/1000 同除以 125 得 5/8，分子與分母都是整數且分母不為零，正好符合有理數定義。"
    },
    {
      "prompt": "判斷「所有含根號的數都是無理數」是否正確。",
      "answer": "錯誤；√121=11 是反例。",
      "why": "要否定「所有」只需提出一個確定的反例。121 是完全平方數，所以 √121 可化成整數 11；11 又可寫成 11/1，這證明含根號的數不一定是無理數。"
    },
    {
      "prompt": "在 −2、0、3/2、0.6、√3 中，哪些是有理數？",
      "answer": "−2、0、3/2、0.6 是有理數；√3 是無理數。",
      "why": "−2 與 0 都能寫成分母為 1 的分數，3/2 本身是整數比，0.6 可化成 3/5；只有 √3 因 3 不是完全平方數而不能化成整數比。逐項實際改寫後，四個有理數與唯一的無理數便能清楚分開。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把負數排除在整數之外。",
      "why": "誤把負號當成小數或分數記號。",
      "correction": "-7 沒有分數部分，是負整數。"
    },
    {
      "mistake": "把 0 當成正整數。",
      "why": "把「非負」和「正」混為一談。",
      "correction": "正數必須大於 0；0 不是正數也不是負數。"
    },
    {
      "mistake": "把所有小數當成無理數。",
      "why": "只看小數外觀，沒有轉成分數。",
      "correction": "有限小數與循環小數都能化成分數。"
    },
    {
      "mistake": "看到根號便判成無理數。",
      "why": "忘記先化簡完全平方數。",
      "correction": "√64=8，是整數與有理數。"
    },
    {
      "mistake": "把「所有整數都是有理數」倒成「所有有理數都是整數」。",
      "why": "不理解集合包含只有一個方向。",
      "correction": "1/2 是反例。"
    },
    {
      "mistake": "用近似值取代精確值。",
      "why": "把 π≈3.14 誤解成 π=3.14。",
      "correction": "3.14 是有理數，但 π 仍是無理數。"
    },
    {
      "mistake": "忽略分母不能為 0。",
      "why": "只記得 p/q 的外形。",
      "correction": "q=0 時除法無定義，不能作為有理數表示。"
    }
  ],
  "selfCheck": [
    "我是否先化簡根號與算式？",
    "我是否同時檢查題目中的每一個限制？",
    "我能否把判定為有理數的數實際寫成一個分數？",
    "若題目使用「所有」，我是否嘗試找反例？",
    "我是否正確處理 0？"
  ],
  "summary": [
    "整數＝負整數、0、正整數。",
    "所有整數都是有理數。",
    "有理數可寫成 p/q，且 q≠0。",
    "有限小數與循環小數是有理數。",
    "根號數先化簡；不能化為有理數者才是無理數。",
    "0 是整數與有理數，但不是正整數或負整數。"
  ],
  "connections": {
    "previous": "本技能是 U01 起點，無前置技能。",
    "next": [
      "正負數的意義會使用正數、負數與 0 的分類。",
      "數線與大小比較會使用整數與有理數的位置觀念。",
      "平方根單元會更深入判斷根號數是否為有理數。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s001-v001",
      "u01-s001-v002",
      "u01-s001-v003",
      "u01-s001-v004",
      "u01-s001-v005",
      "u01-s001-v006",
      "u01-s001-v007",
      "u01-s001-v008",
      "u01-s001-v009",
      "u01-s001-v010",
      "u01-s001-v011",
      "u01-s001-v012"
    ],
    "constructedResponseIds": [
      "u01-s001-cr001",
      "u01-s001-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "Every definition, edge case, worked example and counterexample was checked independently."
  },
  "contentSha256": "9d39fa67ff7ae0b40c1926906565963c76e4f74d1f5f0aeb5c2b5d3f6d121ce4",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s001-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個數是整數？",
    "choices": [
      "2/5",
      "-12",
      "0.4",
      "√3"
    ],
    "answerIndex": 1,
    "explanation": "整數包含正整數、0 和負整數，而且沒有分數部分。-12 是負整數；2/5 是非整數分數，0.4 雖是有理數但不是整數，√3 是無理數，因此答案是 -12。",
    "steps": [
      "先讀清楚題目要找的是「整數」。",
      "逐項判斷是否有非零的小數或分數部分。",
      "只有 -12 屬於整數，所以選第二項。"
    ],
    "optionAnalysis": [
      {
        "choice": "2/5",
        "truth": false,
        "reason": "2/5 不是整數，因為它不能化成沒有分數部分的整數。"
      },
      {
        "choice": "-12",
        "truth": true,
        "reason": "-12 是負整數。"
      },
      {
        "choice": "0.4",
        "truth": false,
        "reason": "0.4=2/5，是有理數但不是整數。"
      },
      {
        "choice": "√3",
        "truth": false,
        "reason": "√3 不能寫成兩整數之比，是無理數。"
      }
    ],
    "commonMistake": "把「負數」誤認為「不是整數」。負號只表示位置在 0 的左邊，不影響它是不是整數。",
    "concept": "整數包括正整數、0 和負整數。",
    "tags": [
      "數與量",
      "數的分類",
      "basic"
    ],
    "estimatedTimeSec": "45",
    "prerequisiteSkillIds": [],
    "authoringIntent": "辨認負整數並區分整數、非整數有理數與無理數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "971cd90eb756d2e3c06293b5750d774ab91d5698bcc3de971214633e170c59e6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s001-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個數是有理數？",
    "choices": [
      "π",
      "√11",
      "-7/9",
      "√2"
    ],
    "answerIndex": 2,
    "explanation": "依有理數定義，能寫成兩個整數之比且分母不為零的數才是有理數。−7/9 已符合這個形式；π、√11 與 √2 都不能寫成這種整數比，因此只有 −7/9 正確。",
    "steps": [
      "回想有理數的判準：能寫成兩整數之比。",
      "檢查四個選項是否符合 p/q 且分母不為 0。",
      "-7/9 符合，其餘三項是無理數。"
    ],
    "optionAnalysis": [
      {
        "choice": "π",
        "truth": false,
        "reason": "π 的小數無限且不循環，不能寫成兩整數之比。"
      },
      {
        "choice": "√11",
        "truth": false,
        "reason": "11 不是完全平方數，因此 √11 是無理數。"
      },
      {
        "choice": "-7/9",
        "truth": true,
        "reason": "分子 -7、分母 9 都是整數且 9≠0。"
      },
      {
        "choice": "√2",
        "truth": false,
        "reason": "√2 是典型無理數。"
      }
    ],
    "commonMistake": "只因為分數帶負號就排除它。正負不影響有理數的判定。",
    "concept": "有理數可以表示成 p/q，其中 p、q 為整數且 q≠0。",
    "tags": [
      "數與量",
      "數的分類",
      "basic"
    ],
    "estimatedTimeSec": "45",
    "prerequisiteSkillIds": [],
    "authoringIntent": "直接使用有理數定義辨認分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a49fca1ce95444ddf35cfdbc47261be43741fbc4fac0d0753793d9ef10a9c04d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s001-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "關於 0 的分類，下列敘述何者正確？",
    "choices": [
      "0 是正整數",
      "0 是負整數",
      "0 是無理數",
      "0 是整數也是有理數，但不是正整數或負整數"
    ],
    "answerIndex": 3,
    "explanation": "整數包含負整數、0 與正整數，所以 0 是整數；又可把 0 寫成 0/1，分母不為零，因此也是有理數。不過 0 既不大於 0 也不小於 0，不能歸為正整數或負整數。",
    "steps": [
      "先確認 0 是否屬於整數：答案是是。",
      "把 0 寫成 0/1，可知它也是有理數。",
      "再檢查正負性：0 不大於 0，也不小於 0。"
    ],
    "optionAnalysis": [
      {
        "choice": "0 是正整數",
        "truth": false,
        "reason": "正整數必須大於 0。"
      },
      {
        "choice": "0 是負整數",
        "truth": false,
        "reason": "負整數必須小於 0。"
      },
      {
        "choice": "0 是無理數",
        "truth": false,
        "reason": "0=0/1，是有理數。"
      },
      {
        "choice": "0 是整數也是有理數，但不是正整數或負整數",
        "truth": true,
        "reason": "同時符合整數與有理數定義，且不具正負性。"
      }
    ],
    "commonMistake": "把「不是正數」誤推成「一定是負數」。0 是正負數之間的界點。",
    "concept": "0 是整數與有理數，但不是正整數或負整數。",
    "tags": [
      "數與量",
      "數的分類",
      "basic"
    ],
    "estimatedTimeSec": "50",
    "prerequisiteSkillIds": [],
    "authoringIntent": "處理數的分類中最常見的邊界值 0。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a758a430f9f1f6a2a07493763cfe821c69b7d8dace3c56986d779f171e62c2df",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s001-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列敘述何者一定正確？",
    "choices": [
      "每一個整數都是有理數",
      "每一個有理數都是整數",
      "每一個負數都是負整數",
      "每一個有根號符號的數都是無理數"
    ],
    "answerIndex": 0,
    "explanation": "任一整數 n 都能寫成 n/1，因此每一個整數都是有理數。反過來不成立，例如 1/2 是有理數但不是整數；負數可能是 -0.5，不一定是負整數；√9=3，所以有根號符號不代表一定無理。",
    "steps": [
      "對每個敘述尋找定義或反例。",
      "整數 n 可寫成 n/1，第一項成立。",
      "用 1/2、-0.5、√9 分別否定其餘三項。"
    ],
    "optionAnalysis": [
      {
        "choice": "每一個整數都是有理數",
        "truth": true,
        "reason": "任一整數 n=n/1，分母 1 不為 0。"
      },
      {
        "choice": "每一個有理數都是整數",
        "truth": false,
        "reason": "1/2 是有理數但不是整數。"
      },
      {
        "choice": "每一個負數都是負整數",
        "truth": false,
        "reason": "-0.5 是負數但不是整數。"
      },
      {
        "choice": "每一個有根號符號的數都是無理數",
        "truth": false,
        "reason": "√9=3，是整數與有理數。"
      }
    ],
    "commonMistake": "把集合包含關係倒過來。整數都在有理數裡，但有理數不全是整數。",
    "concept": "整數集合是有理數集合的一部分。",
    "tags": [
      "數與量",
      "數的分類",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "檢查集合包含關係與反例能力。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "43f02e10e09a5e21b947b22ed4cdf1b64d58e0d500113bdf7a05928f92f27711",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s001-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 √49 化簡後，它屬於下列哪一類？",
    "choices": [
      "無理數，但不是有理數",
      "正分數，但不是整數",
      "正整數，也是有理數",
      "只能說是實數，無法再分類"
    ],
    "answerIndex": 2,
    "explanation": "分類含根號的數要先化簡。因為 49=7²，所以 √49=7；7 大於 0 且沒有分數部分，是正整數，又能寫成 7/1，因此同時也是有理數，不能只看根號外形判成無理數。",
    "steps": [
      "先判斷 49 是否為完全平方數。",
      "√49=7。",
      "7 是正整數，且 7=7/1，所以也是有理數。"
    ],
    "optionAnalysis": [
      {
        "choice": "無理數，但不是有理數",
        "truth": false,
        "reason": "√49 可化簡為 7。"
      },
      {
        "choice": "正分數，但不是整數",
        "truth": false,
        "reason": "7 本身是整數。"
      },
      {
        "choice": "正整數，也是有理數",
        "truth": true,
        "reason": "7 是正整數且可寫成 7/1。"
      },
      {
        "choice": "只能說是實數，無法再分類",
        "truth": false,
        "reason": "可以更精確分類為正整數與有理數。"
      }
    ],
    "commonMistake": "看到根號就直接判為無理數，忘記先檢查根號內是否為完全平方數。",
    "concept": "根號數必須先化簡再分類。",
    "tags": [
      "數與量",
      "數的分類",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [],
    "authoringIntent": "測量根號化簡與分類的連結。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "dfda79a7d2c015609af71492381e84b7f08903363f9342078c9838965916ecab",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s001-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "小數 0.272727… 中，「27」持續重複。下列敘述何者正確？",
    "choices": [
      "它是無理數，因為小數位數無限",
      "它是有理數，因為它是循環小數",
      "它是整數，因為重複規律固定",
      "無法判斷，因為沒有寫完所有小數位"
    ],
    "answerIndex": 1,
    "explanation": "小數部分的 27 按固定週期持續重複，所以這是循環小數。它可精確化成 27/99，再約分為 3/11；既然能寫成分母不為零的整數比，0.272727… 就是有理數而不是整數。",
    "steps": [
      "辨認小數是否有固定循環節。",
      "循環節是 27，因此它是循環小數。",
      "循環小數能化成分數，所以屬於有理數。"
    ],
    "optionAnalysis": [
      {
        "choice": "它是無理數，因為小數位數無限",
        "truth": false,
        "reason": "無限循環小數屬於有理數。"
      },
      {
        "choice": "它是有理數，因為它是循環小數",
        "truth": true,
        "reason": "0.272727…=27/99=3/11。"
      },
      {
        "choice": "它是整數，因為重複規律固定",
        "truth": false,
        "reason": "它介於 0 與 1 之間且不等於 0，不是整數。"
      },
      {
        "choice": "無法判斷，因為沒有寫完所有小數位",
        "truth": false,
        "reason": "省略號和已知循環規律已足夠分類。"
      }
    ],
    "commonMistake": "把「無限小數」全部歸為無理數。關鍵是循環或不循環，而不是位數有限或無限。",
    "concept": "有限小數與循環小數都是有理數。",
    "tags": [
      "數與量",
      "數的分類",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [],
    "authoringIntent": "區分無限循環小數與無限不循環小數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4bbe94777b1f3bde2354583435cee19f343c17ea6340bb3d446e81c73aabe905",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s001-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一組中的四個數全部都是有理數？",
    "choices": [
      "-5、0、3/8、√81",
      "2/3、π、-4、0.6",
      "√2、7、0.125、-9/2",
      "√5、√16、1/7、-3"
    ],
    "answerIndex": 0,
    "explanation": "第一組的 −5、0 都是整數，3/8 本身是整數比，√81 化簡為 9，因此四個數全是有理數。其餘三組分別含 π、√2 或 √5，任一個無理數就使整組不符合條件。",
    "steps": [
      "每組逐項檢查，不因某一項熟悉就提前作答。",
      "根號數先化簡：√81=9、√16=4。",
      "只有第一組完全沒有無理數。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5、0、3/8、√81",
        "truth": true,
        "reason": "√81=9，其餘本來就是整數或分數。"
      },
      {
        "choice": "2/3、π、-4、0.6",
        "truth": false,
        "reason": "π 是無理數。"
      },
      {
        "choice": "√2、7、0.125、-9/2",
        "truth": false,
        "reason": "√2 是無理數。"
      },
      {
        "choice": "√5、√16、1/7、-3",
        "truth": false,
        "reason": "√5 是無理數；√16 雖然有理，但整組仍不合。"
      }
    ],
    "commonMistake": "只檢查每組前三個數，漏看最後一個；或看到根號就不化簡。",
    "concept": "判斷一整組數時，每一項都必須符合條件。",
    "tags": [
      "數與量",
      "數的分類",
      "advanced"
    ],
    "estimatedTimeSec": "105",
    "prerequisiteSkillIds": [],
    "authoringIntent": "同時處理整數、分數、小數與可化簡根號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5f43375a32ab9a3536e809144bb9d3af0742b6cd5206a05280ff38c9009fee9b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s001-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個數是「有理數但不是整數」？",
    "choices": [
      "6",
      "√7",
      "π",
      "-11/4"
    ],
    "answerIndex": 3,
    "explanation": "題目要求同時符合有理數與不是整數兩個條件。−11/4 是分母不為零的整數比，且等於 −2.75，所以不是整數；6 雖是有理數卻也是整數，√7 與 π 則都是無理數。",
    "steps": [
      "題目有兩個條件：必須是有理數，而且不能是整數。",
      "排除無理數 √7 與 π。",
      "在 6 與 -11/4 中，只有 -11/4 不是整數。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": false,
        "reason": "6 是有理數，但也是整數，不符合「不是整數」。"
      },
      {
        "choice": "√7",
        "truth": false,
        "reason": "7 不是完全平方數，√7 是無理數。"
      },
      {
        "choice": "π",
        "truth": false,
        "reason": "π 是無理數。"
      },
      {
        "choice": "-11/4",
        "truth": true,
        "reason": "是分母不為 0 的整數比，且值為 -2.75，不是整數。"
      }
    ],
    "commonMistake": "只檢查「有理數」而忽略「但不是整數」，因此錯選 6。",
    "concept": "複合條件題必須同時滿足每一個限制。",
    "tags": [
      "數與量",
      "數的分類",
      "advanced"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [],
    "authoringIntent": "利用交集與排除概念判斷精確分類。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b25255d1fec16a54c5b6f3fb9c9048e1673975c7fbca286070bab4bafff02d58",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s001-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 x=(√36-8)/2，則 x 的分類何者正確？",
    "choices": [
      "x 是正整數，也是有理數",
      "x 是負整數，也是有理數",
      "x 是有理數但不是整數",
      "x 是無理數"
    ],
    "answerIndex": 1,
    "explanation": "先化簡 √36=6，再依運算順序算得 x=(6−8)/2=−2/2=−1。−1 小於 0 且沒有分數部分，所以是負整數；又能寫成 −1/1，因此 x 同時也是有理數。代回原算式後數值與符號都一致，不能因原式含根號便判為無理數。",
    "steps": [
      "先化簡 √36 得 6。",
      "依序計算括號與除法：x=(6-8)/2=-1。",
      "依 -1 的性質分類為負整數與有理數。"
    ],
    "optionAnalysis": [
      {
        "choice": "x 是正整數，也是有理數",
        "truth": false,
        "reason": "x=-1，不是正數。"
      },
      {
        "choice": "x 是負整數，也是有理數",
        "truth": true,
        "reason": "x=-1，符合負整數且可寫成 -1/1。"
      },
      {
        "choice": "x 是有理數但不是整數",
        "truth": false,
        "reason": "-1 本身就是整數。"
      },
      {
        "choice": "x 是無理數",
        "truth": false,
        "reason": "根號已化簡，最後結果為 -1。"
      }
    ],
    "commonMistake": "在完成化簡前就因為式子含有根號而判成無理數。",
    "concept": "含根號的算式應先算出或化簡結果，再分類。",
    "tags": [
      "數與量",
      "數的分類",
      "advanced"
    ],
    "estimatedTimeSec": "105",
    "prerequisiteSkillIds": [],
    "authoringIntent": "把運算與分類連結，避免以式子外觀作答。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "329c18332422dbe1f507e73952654754bd3fa40b9aaf65ff4e8afedb180cd72c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s001-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某資料庫只能以「兩個整數的比」精確儲存數值。工程師要輸入下列四筆校正值，哪一筆無法用此格式精確儲存？",
    "choices": [
      "0.125",
      "√25",
      "π",
      "-7/3"
    ],
    "answerIndex": 2,
    "explanation": "資料庫能精確儲存的正是有理數。0.125=1/8，√25=5，-7/3 本來就是整數比；π 是無理數，不能表示成兩整數之比，因此無法用指定格式精確儲存。",
    "steps": [
      "把資料庫規則翻譯成數學條件：只接受有理數。",
      "逐項化簡或改寫成分數。",
      "π 無法寫成兩整數之比，因此選第三項。"
    ],
    "optionAnalysis": [
      {
        "choice": "0.125",
        "truth": false,
        "reason": "0.125=125/1000=1/8，可精確儲存。"
      },
      {
        "choice": "√25",
        "truth": false,
        "reason": "√25=5=5/1，可精確儲存。"
      },
      {
        "choice": "π",
        "truth": true,
        "reason": "π 是無理數，不能以兩整數之比精確表示。"
      },
      {
        "choice": "-7/3",
        "truth": false,
        "reason": "本身就是兩整數之比。"
      }
    ],
    "commonMistake": "把小數近似值 3.14 當作 π 本身。3.14 是有理數，但只近似 π，不是精確值。",
    "concept": "實際系統若限定分數格式，其可精確表示的範圍就是有理數。",
    "tags": [
      "數與量",
      "數的分類",
      "literacy"
    ],
    "estimatedTimeSec": "120",
    "prerequisiteSkillIds": [],
    "authoringIntent": "把技術限制轉譯成有理數定義。",
    "literacyContextNecessity": "情境提供「只能用兩整數之比精確儲存」的操作限制；若移除限制，就沒有「哪筆無法儲存」這個問題。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c951d70d22f35445a50c81b4ad70e8c42451551ee8f0a579246556013d8e55c3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s001-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "木工圖面要求每一個長度都必須能精確改寫成整數或分數公分，不能只填近似值。下列哪一段長度無法符合此規定？",
    "choices": [
      "√2 公分",
      "1.25 公分",
      "7/4 公分",
      "√9 公分"
    ],
    "answerIndex": 0,
    "explanation": "圖面規定長度必須能精確改寫成整數或分數，也就是必須是有理數。1.25=5/4，7/4 已是分數，√9=3；只有 √2 是無理數，不能用整數或分數公分精確表示。",
    "steps": [
      "把圖面規定轉成「長度必須是有理數」。",
      "將有限小數與可化簡根號改寫。",
      "只有 √2 無法精確寫成整數或分數。"
    ],
    "optionAnalysis": [
      {
        "choice": "√2 公分",
        "truth": true,
        "reason": "√2 是無理數，不能精確表示為整數或分數。"
      },
      {
        "choice": "1.25 公分",
        "truth": false,
        "reason": "1.25=5/4，符合規定。"
      },
      {
        "choice": "7/4 公分",
        "truth": false,
        "reason": "已是分數，符合規定。"
      },
      {
        "choice": "√9 公分",
        "truth": false,
        "reason": "√9=3，符合規定。"
      }
    ],
    "commonMistake": "把 1.25 視為「不是分數」。有限小數可以化成分數，形式不同不代表分類不同。",
    "concept": "精確尺寸格式的限制可用有理數與無理數分類判斷。",
    "tags": [
      "數與量",
      "數的分類",
      "literacy"
    ],
    "estimatedTimeSec": "120",
    "prerequisiteSkillIds": [],
    "authoringIntent": "在精確製圖規則中判斷哪些量可用分數表達。",
    "literacyContextNecessity": "「不得使用近似小數」使精確可分數化成為必要條件，直接影響可接受的尺寸。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "37ee47f5e66b40c52477470972e63b6856ca086228d21ed52694b4a2afc33eee",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s001-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "檢測程式會先把輸入式化簡，再將有理數標記為「可用分數精確表示」。下列哪一筆最後不會被標記？",
    "choices": [
      "(√64)/4",
      "0.444…（4 持續循環）",
      "(5-9)/2",
      "√10"
    ],
    "answerIndex": 3,
    "explanation": "依程式規則逐筆先化簡：(√64)/4=8/4=2，0.444… 是循環小數且等於 4/9，(5−9)/2=−2，前三筆都是有理數。10 不是完全平方數，所以 √10 是無理數，最後不會被標記。",
    "steps": [
      "依程式規則，先化簡每一個輸入式。",
      "將循環小數辨認為有理數。",
      "只有 √10 化簡後仍是無理數。"
    ],
    "optionAnalysis": [
      {
        "choice": "(√64)/4",
        "truth": false,
        "reason": "化簡為 2，是有理數。"
      },
      {
        "choice": "0.444…（4 持續循環）",
        "truth": false,
        "reason": "等於 4/9，是有理數。"
      },
      {
        "choice": "(5-9)/2",
        "truth": false,
        "reason": "等於 -2，是整數與有理數。"
      },
      {
        "choice": "√10",
        "truth": true,
        "reason": "10 不是完全平方數，√10 是無理數。"
      }
    ],
    "commonMistake": "程式規則已說明要先化簡；若只看原始外觀，會錯把 √64/4 判為無理數。",
    "concept": "分類前先完成必要化簡，尤其是根號與運算式。",
    "tags": [
      "數與量",
      "數的分類",
      "literacy"
    ],
    "estimatedTimeSec": "135",
    "prerequisiteSkillIds": [],
    "authoringIntent": "綜合處理根號、循環小數與算式化簡。",
    "literacyContextNecessity": "程式的「先化簡再標記」流程決定判斷順序；若忽略此流程，會得到錯誤分類。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d9f49d6a63f7bfd9db6d46283b32a765a21b4b04932405e4742cdebaada7783c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s001-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "將下列各數分成「整數」、「有理數但不是整數」、「無理數」三類，並在每一個數後寫出判斷理由：-4、0.75、0、√36、√7、0.181818…（18 持續循環）。",
    "requiredWork": [
      "每個數只能放入題目要求的其中一類。",
      "有限小數或循環小數須寫出可化成分數的理由。",
      "根號數須先化簡或說明根號內不是完全平方數。"
    ],
    "fullCreditSolution": [
      "先處理整數：−4 與 0 本來就是整數，√36=6，所以 √36 也應歸入整數類。",
      "再處理非整數有理數：0.75=3/4，0.181818…=18/99=2/11，兩者都能化成分數但不是整數。",
      "最後判斷 √7；因為 7 不是完全平方數，√7 不能寫成分母不為零的整數比，所以歸入無理數類。"
    ],
    "alternativeSolutions": [
      "循環小數可用設 x=0.181818…，再以 100x-x 求得 18/99。",
      "若學生以「有限小數必為有理數」判斷 0.75，也可接受，但須明確指出它不是整數。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "六個數全部分類正確，且有限小數、循環小數、兩個根號數的理由完整。"
      },
      {
        "score": 2,
        "criteria": "至少五個數分類正確，主要方法正確；至多有一個化簡、約分或理由不完整。"
      },
      {
        "score": 1,
        "criteria": "至少三個數分類正確，或能正確說明有理數判準但應用不完整。"
      },
      {
        "score": 0,
        "criteria": "少於三個數分類正確，且未呈現可判讀的分類依據。"
      }
    ],
    "scoringNotes": [
      "同一數若同時放入多個題目指定類別，該數不得分。",
      "把 √36 留在無理數類表示未先化簡。",
      "只寫最終三組但完全正確，可給 2 分；理由完整才給 3 分。",
      "文字敘述與分數化簡等價者均可接受。"
    ],
    "commonErrors": [
      "把 0.75 當無理數。",
      "把 0 當成非整數。",
      "看到根號就把 √36、√7 一起歸為無理數。",
      "把循環小數當作無法分類。"
    ],
    "independentReview": {
      "derivedResult": "整數：-4、0、√36；有理非整數：0.75、0.181818…；無理數：√7",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "17d7e7aabcf29a535eb842d492116f5004199f1e35c46dd993dbacb2b4af5709",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s001-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-classification",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "小芸說：「只要數字有根號就是無理數；只要寫成小數就是有理數。」請判斷這兩句話是否正確。每一句若不正確，請各舉一個反例並解釋。",
    "requiredWork": [
      "分別判斷兩句話，不得只寫「都錯」。",
      "第一句反例需含根號但化簡後為有理數。",
      "第二句反例需是以小數形式表示的無理數，或明確說明無限不循環小數。"
    ],
    "fullCreditSolution": [
      "第一句錯。例如 √49=7，雖有根號符號，化簡後是整數與有理數。",
      "第二句錯。例如 π=3.1415926… 是無限不循環小數，仍是無理數。",
      "因此分類不能只看符號外觀；根號要先化簡，小數要看是否有限或循環。"
    ],
    "alternativeSolutions": [
      "第一句可用 √1、√4、√9、√16 等完全平方數的平方根。",
      "第二句可用 √2 的小數表示 1.4142135…，並指出它無限不循環。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩句均判錯，兩個反例都有效，且分別解釋根號化簡與無限不循環。"
      },
      {
        "score": 2,
        "criteria": "兩句判斷正確，但只有一個反例與解釋完整；或兩個反例有效但說明略缺。"
      },
      {
        "score": 1,
        "criteria": "只正確處理其中一句，且提供有效反例或合理理由。"
      },
      {
        "score": 0,
        "criteria": "判斷錯誤，或所舉例子不能否定原敘述。"
      }
    ],
    "scoringNotes": [
      "用 3.14 作第二句反例無效，因為 3.14 本身是有限小數與有理數。",
      "只寫 √4 而未指出 √4=2，可視作理由不完整。",
      "使用其他正確完全平方根或無理數小數表示均可。"
    ],
    "commonErrors": [
      "以 √2 作第一句反例，實際上 √2 支持而非否定原句。",
      "以 0.333… 作第二句反例，但循環小數是有理數。",
      "把 π 近似成 3.14 後說 π 是有理數。"
    ],
    "independentReview": {
      "derivedResult": "兩句皆錯；有效反例可為 √49=7 與 π 的無限不循環小數表示。",
      "ambiguity": "allow equivalent valid counterexamples",
      "decision": "pass"
    },
    "contentSha256": "ae63e8f8049370b9c7704d31769a3ea64308ceedb5247c9c6462427746ea9741",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];
