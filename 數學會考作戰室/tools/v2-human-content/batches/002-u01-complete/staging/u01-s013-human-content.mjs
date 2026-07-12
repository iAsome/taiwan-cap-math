// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s013-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-exponents",
  "skillId": "integer-exponent-laws",
  "title": "指數律：同底數乘除與冪的乘方",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能使用同底數相乘指數相加。",
    "能使用同底數相除指數相減。",
    "能處理冪的乘方。",
    "能辨認不能套用指數律的加減式。",
    "能把不同底數改寫成共同底數後化簡。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-exponent-meaning",
      "requiredLevel": "能把冪展開成重複乘法，並清楚辨認底數、指數和括號。"
    }
  ],
  "glossary": [
    {
      "term": "同底數",
      "definition": "冪的底數完全相同，包括符號與括號。"
    },
    {
      "term": "冪的乘方",
      "definition": "把一個冪再取次方，例如 (a²)³。"
    },
    {
      "term": "指數相加",
      "definition": "同底數冪相乘時，因數總數相加。"
    },
    {
      "term": "指數相減",
      "definition": "同底數冪相除時，約去共同因數後剩餘個數相減。"
    },
    {
      "term": "共同底數",
      "definition": "把 4、8 等改寫成 2 的冪，便於合併。"
    }
  ],
  "notation": [
    {
      "symbol": "aᵐ·aⁿ",
      "meaning": "同底數相乘。"
    },
    {
      "symbol": "aᵐ÷aⁿ",
      "meaning": "同底數相除；a≠0。"
    },
    {
      "symbol": "(aᵐ)ⁿ",
      "meaning": "冪的乘方。"
    }
  ],
  "conceptNarrative": [
    "aᵐ·aⁿ 中共有 m+n 個 a，因此等於 aᵐ⁺ⁿ。",
    "aᵐ÷aⁿ 透過約去 n 個共同因數，m≥n 時得到 aᵐ⁻ⁿ；底數不能為 0。",
    "(aᵐ)ⁿ 表示把 aᵐ 相乘 n 次，所以總共有 mn 個 a，指數相乘。",
    "指數律主要處理乘除，不適用於 aᵐ+aⁿ；加法不能直接把指數相加。"
  ],
  "formalDefinitions": [
    {
      "name": "同底數乘法",
      "statement": "aᵐ·aⁿ=aᵐ⁺ⁿ。"
    },
    {
      "name": "同底數除法",
      "statement": "aᵐ÷aⁿ=aᵐ⁻ⁿ，a≠0；本節主要處理 m≥n。"
    },
    {
      "name": "冪的乘方",
      "statement": "(aᵐ)ⁿ=aᵐⁿ。"
    },
    {
      "name": "積的乘方",
      "statement": "(ab)ⁿ=aⁿbⁿ。"
    }
  ],
  "formulas": [
    {
      "formula": "aᵐ·aⁿ=aᵐ⁺ⁿ",
      "conditions": [
        "底數完全相同"
      ],
      "meaning": "合併重複因數。"
    },
    {
      "formula": "aᵐ÷aⁿ=aᵐ⁻ⁿ",
      "conditions": [
        "a≠0",
        "本節 m≥n"
      ],
      "meaning": "約去共同因數。"
    },
    {
      "formula": "(aᵐ)ⁿ=aᵐⁿ",
      "conditions": [
        "m、n 為正整數"
      ],
      "meaning": "冪重複相乘。"
    },
    {
      "formula": "(ab)ⁿ=aⁿbⁿ",
      "conditions": [
        "同一個乘積整體取次方"
      ],
      "meaning": "每個因數都取 n 次方。"
    }
  ],
  "nonApplicableCases": [
    "aᵐ+aⁿ 不能用同底數乘法規則。",
    "不同底數不能直接合併，除非先正確改寫成共同底數。",
    "同底數除法要求底數不為 0。",
    "(aᵐ)ⁿ 的指數相乘，不是相加。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先辨認運算是乘、除、冪的乘方或加減。",
      "check": "是否真的符合某條指數律？"
    },
    {
      "step": 2,
      "instruction": "檢查底數是否完全相同。",
      "check": "負號和括號是否一致？"
    },
    {
      "step": 3,
      "instruction": "選擇指數相加、相減或相乘。",
      "check": "運算類型對應正確嗎？"
    },
    {
      "step": 4,
      "instruction": "不同底數時嘗試改寫。",
      "check": "4=2²、8=2³ 是否可用？"
    },
    {
      "step": 5,
      "instruction": "展開少量因數做反查。",
      "check": "合併後因數個數合理嗎？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "化簡 3⁴×3²。",
      "solutionSteps": [
        "同底數相乘。",
        "指數相加 4+2=6。",
        "得到 3⁶。"
      ],
      "answer": "3⁶。"
    },
    {
      "exampleId": "L2",
      "prompt": "化簡 5⁷÷5³。",
      "solutionSteps": [
        "同底數相除且底數非 0。",
        "指數相減 7-3=4。",
        "得到 5⁴。"
      ],
      "answer": "5⁴。"
    },
    {
      "exampleId": "L3",
      "prompt": "化簡 (2³)⁴。",
      "solutionSteps": [
        "這是冪的乘方。",
        "指數相乘 3×4=12。",
        "得到 2¹²。"
      ],
      "answer": "2¹²。"
    },
    {
      "exampleId": "L4",
      "prompt": "化簡 4³×2⁵。",
      "solutionSteps": [
        "4³=(2²)³=2⁶。",
        "2⁶×2⁵=2¹¹。",
        "完成共同底數化簡。"
      ],
      "answer": "2¹¹。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 2³×2⁴ 寫成 4⁷。",
      "why": "同時錯加底數。",
      "correction": "底數保持 2，指數相加得 2⁷。"
    },
    {
      "mistake": "把 3⁶÷3² 寫成 3³。",
      "why": "把指數相除。",
      "correction": "指數應相減，得 3⁴。"
    },
    {
      "mistake": "把 (5²)³ 寫成 5⁵。",
      "why": "把指數相加。",
      "correction": "冪的乘方指數相乘，得 5⁶。"
    },
    {
      "mistake": "把 2³+2⁴ 寫成 2⁷。",
      "why": "把加法當乘法。",
      "correction": "指數律不直接處理加法。"
    },
    {
      "mistake": "不同底數直接加指數。",
      "why": "忽略同底數條件。",
      "correction": "先改寫共同底數或分別計算。"
    },
    {
      "mistake": "同底數除法允許底數 0。",
      "why": "忽略除數可能為 0。",
      "correction": "底數必須非 0。"
    }
  ],
  "selfCheck": [
    "運算類型是什麼？",
    "底數完全相同嗎？",
    "指數該加、減還是乘？",
    "除法底數非 0 嗎？",
    "能用展開驗證嗎？"
  ],
  "summary": [
    "同底數乘法指數相加。",
    "同底數除法指數相減。",
    "冪的乘方指數相乘。",
    "加法不能直接套指數律。"
  ],
  "connections": {
    "previous": "先備技能是指數的意義。",
    "next": [
      "科學記號乘除會使用 10 的冪與指數律。",
      "代數單項式運算會延伸相同規則。",
      "幾何縮放中面積與體積的次方關係可用指數理解。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s013-v001",
      "u01-s013-v002",
      "u01-s013-v003",
      "u01-s013-v004",
      "u01-s013-v005",
      "u01-s013-v006",
      "u01-s013-v007",
      "u01-s013-v008",
      "u01-s013-v009",
      "u01-s013-v010",
      "u01-s013-v011",
      "u01-s013-v012"
    ],
    "constructedResponseIds": [
      "u01-s013-cr001",
      "u01-s013-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "以展開因數的方法獨立驗證同底數乘法、除法、冪的乘方和積的乘方，且未把加法誤套指數律。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "ee427c32de1bbaef93134f61b13abb15679c78d88a82337f38387aa7cc46771b"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s013-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2³×2⁴ 可化簡為何者？",
    "choices": [
      "2⁷",
      "4⁷",
      "2¹²",
      "2¹"
    ],
    "answerIndex": 0,
    "explanation": "同底數相乘，底數不變，指數相加3+4=7。",
    "steps": [
      "確認底數都是2。",
      "相乘用指數相加。",
      "得2⁷。"
    ],
    "optionAnalysis": [
      {
        "choice": "2⁷",
        "truth": true,
        "reason": "2^(3+4)=2⁷。"
      },
      {
        "choice": "4⁷",
        "truth": false,
        "reason": "錯把底數相加或相乘。"
      },
      {
        "choice": "2¹²",
        "truth": false,
        "reason": "錯把指數相乘。"
      },
      {
        "choice": "2¹",
        "truth": false,
        "reason": "錯作相減。"
      }
    ],
    "commonMistake": "把底數也變成4。",
    "concept": "同底數乘法指數相加。",
    "tags": [
      "數與量",
      "指數律",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-meaning"
    ],
    "authoringIntent": "基本同底數乘法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fba3ec4acc94176baa4945ec244d888ea16c7988bb0511aa3ac917706024a74f"
  },
  {
    "questionId": "u01-s013-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5⁸÷5³ 可化簡為何者？",
    "choices": [
      "5¹¹",
      "5⁵",
      "1⁵",
      "5²⁴"
    ],
    "answerIndex": 1,
    "explanation": "同底數相除，指數相減8-3=5，得到5⁵。",
    "steps": [
      "底數同為5且非0。",
      "除法指數相減。",
      "得5⁵。"
    ],
    "optionAnalysis": [
      {
        "choice": "5¹¹",
        "truth": false,
        "reason": "把除法當乘法。"
      },
      {
        "choice": "5⁵",
        "truth": true,
        "reason": "5^(8-3)=5⁵。"
      },
      {
        "choice": "1⁵",
        "truth": false,
        "reason": "底數錯。"
      },
      {
        "choice": "5²⁴",
        "truth": false,
        "reason": "把指數相乘。"
      }
    ],
    "commonMistake": "把8÷3當成指數。",
    "concept": "同底數除法指數相減。",
    "tags": [
      "數與量",
      "指數律",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-meaning"
    ],
    "authoringIntent": "基本同底數除法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2bba81e9242e1fab097b20bee239147cb8e41455a41294f9bb1961def8a7fc00"
  },
  {
    "questionId": "u01-s013-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(3²)⁴ 可化簡為何者？",
    "choices": [
      "3⁶",
      "3¹⁶",
      "3⁸",
      "9⁴⁰"
    ],
    "answerIndex": 2,
    "explanation": "冪的乘方，指數相乘2×4=8，得到3⁸。",
    "steps": [
      "辨認冪的乘方。",
      "指數2×4。",
      "得3⁸。"
    ],
    "optionAnalysis": [
      {
        "choice": "3⁶",
        "truth": false,
        "reason": "把指數相加。"
      },
      {
        "choice": "3¹⁶",
        "truth": false,
        "reason": "把底數與指數混乘。"
      },
      {
        "choice": "3⁸",
        "truth": true,
        "reason": "3^(2×4)=3⁸。"
      },
      {
        "choice": "9⁴⁰",
        "truth": false,
        "reason": "無此規則。"
      }
    ],
    "commonMistake": "把2與4相加成6。",
    "concept": "冪的乘方指數相乘。",
    "tags": [
      "數與量",
      "指數律",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-meaning"
    ],
    "authoringIntent": "基本冪的乘方。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "56722e656d71f8fc24a9fcc7537aad25b53014869521cb565a80020851d042dd"
  },
  {
    "questionId": "u01-s013-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(2×5)³ 的正確展開為何？",
    "choices": [
      "2×5³",
      "2³×5",
      "2⁶×5⁶",
      "2³×5³"
    ],
    "answerIndex": 3,
    "explanation": "積的乘方要讓每個因數都取三次方：(2×5)³=2³×5³。",
    "steps": [
      "整個乘積取三次方。",
      "2與5各出現三次。",
      "得2³×5³。"
    ],
    "optionAnalysis": [
      {
        "choice": "2×5³",
        "truth": false,
        "reason": "2未取三次方。"
      },
      {
        "choice": "2³×5",
        "truth": false,
        "reason": "5未正確分配。"
      },
      {
        "choice": "2⁶×5⁶",
        "truth": false,
        "reason": "指數被多乘一倍。"
      },
      {
        "choice": "2³×5³",
        "truth": true,
        "reason": "(2×5)^3=2^3×5^3。"
      }
    ],
    "commonMistake": "只把指數分配給其中一個因數。",
    "concept": "(ab)ⁿ=aⁿbⁿ。",
    "tags": [
      "數與量",
      "指數律",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-meaning"
    ],
    "authoringIntent": "使用積的乘方。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d8e3414cb4a4faf831af69b6e465271d8ee3385bb0dd5a26583955f7abc7c341"
  },
  {
    "questionId": "u01-s013-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "4³×2⁵ 可化成 2 的幾次方？",
    "choices": [
      "2¹¹",
      "2⁸",
      "2¹⁵",
      "2²³"
    ],
    "answerIndex": 0,
    "explanation": "4³=(2²)³=2⁶，再2⁶×2⁵=2¹¹。",
    "steps": [
      "把4改寫2²。",
      "冪的乘方得2⁶。",
      "同底數相乘得2¹¹。"
    ],
    "optionAnalysis": [
      {
        "choice": "2¹¹",
        "truth": true,
        "reason": "(2²)³×2⁵=2⁶×2⁵=2¹¹。"
      },
      {
        "choice": "2⁸",
        "truth": false,
        "reason": "只算3+5。"
      },
      {
        "choice": "2¹⁵",
        "truth": false,
        "reason": "把指數相乘。"
      },
      {
        "choice": "2²³",
        "truth": false,
        "reason": "把數值混合。"
      }
    ],
    "commonMistake": "看到4與2底數不同就直接把3+5=8。",
    "concept": "先改寫共同底數再使用指數律。",
    "tags": [
      "數與量",
      "指數律",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-meaning"
    ],
    "authoringIntent": "兩階段共同底數化簡。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "171781e8016455367f0ebe78468c87b1cac80fbaa03428db2634f91988ef9f87"
  },
  {
    "questionId": "u01-s013-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "3⁹÷(3⁴×3²) 可化簡為何者？",
    "choices": [
      "3¹⁵",
      "3³",
      "3⁷",
      "3⁸"
    ],
    "answerIndex": 1,
    "explanation": "分母3⁴×3²=3⁶，所以3⁹÷3⁶=3³。",
    "steps": [
      "先合併分母指數4+2=6。",
      "再9-6=3。",
      "得3³。"
    ],
    "optionAnalysis": [
      {
        "choice": "3¹⁵",
        "truth": false,
        "reason": "把所有指數相加。"
      },
      {
        "choice": "3³",
        "truth": true,
        "reason": "3^(9-4-2)=3³。"
      },
      {
        "choice": "3⁷",
        "truth": false,
        "reason": "只減2。"
      },
      {
        "choice": "3⁸",
        "truth": false,
        "reason": "只減1。"
      }
    ],
    "commonMistake": "只把9減4，漏掉分母的3²。",
    "concept": "括號內先合併，再做同底數除法。",
    "tags": [
      "數與量",
      "指數律",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-meaning"
    ],
    "authoringIntent": "處理分母含同底數乘積。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cb2d3f4d54b4c1cc8efe86c04a22e3162070367729d78c5cae80876491828da0"
  },
  {
    "questionId": "u01-s013-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 2ˣ×2³=2⁹，則 x 等於多少？",
    "choices": [
      "3",
      "12",
      "6",
      "27"
    ],
    "answerIndex": 2,
    "explanation": "同底數相乘指數相加，所以x+3=9，x=6。",
    "steps": [
      "建立x+3=9。",
      "兩邊減3。",
      "x=6。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "把x設成另一指數。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把指數相加結果誤作12。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "x+3=9，x=6。"
      },
      {
        "choice": "27",
        "truth": false,
        "reason": "把2³與2⁹數值相除後誤讀。"
      }
    ],
    "commonMistake": "把x×3=9。",
    "concept": "冪相乘對應指數相加。",
    "tags": [
      "數與量",
      "指數律",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-meaning"
    ],
    "authoringIntent": "由指數律反求未知指數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4a1e68f916fe83b3327c8cb939b2c33e30ed7585b29f88165fb592441986a4f8"
  },
  {
    "questionId": "u01-s013-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(5²)³÷5⁴ 可化簡為何者？",
    "choices": [
      "5¹²",
      "5⁵",
      "5¹",
      "5²"
    ],
    "answerIndex": 3,
    "explanation": "(5²)³=5⁶，再5⁶÷5⁴=5²。",
    "steps": [
      "冪的乘方2×3=6。",
      "同底數相除6-4=2。",
      "得5²。"
    ],
    "optionAnalysis": [
      {
        "choice": "5¹²",
        "truth": false,
        "reason": "把2×3×?錯。"
      },
      {
        "choice": "5⁵",
        "truth": false,
        "reason": "只做加法。"
      },
      {
        "choice": "5¹",
        "truth": false,
        "reason": "同底數相除應用指數 9−4=5；寫成 3⁴ 是把指數相減算錯。"
      },
      {
        "choice": "5²",
        "truth": true,
        "reason": "5^(2×3-4)=5²。"
      }
    ],
    "commonMistake": "把(5²)³先寫5⁵。",
    "concept": "先冪的乘方，再同底數除法。",
    "tags": [
      "數與量",
      "指數律",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-meaning"
    ],
    "authoringIntent": "串接兩條指數律。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "549793c721f4583bbd2b28fe93bdab7aaa41adbcf480b6218d76fa60446793ef"
  },
  {
    "questionId": "u01-s013-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個敘述正確？",
    "choices": [
      "2³+2⁴ 不能直接化成 2⁷",
      "2³+2⁴=2⁷",
      "3²×3⁵=9⁷",
      "(4²)³=4⁵"
    ],
    "answerIndex": 0,
    "explanation": "同底數指數相加只適用乘法，不適用加法，所以第一項正確。",
    "steps": [
      "辨認第一式是加法。",
      "檢查其他指數律。",
      "只有第一項正確。"
    ],
    "optionAnalysis": [
      {
        "choice": "2³+2⁴ 不能直接化成 2⁷",
        "truth": true,
        "reason": "正確指出適用條件。"
      },
      {
        "choice": "2³+2⁴=2⁷",
        "truth": false,
        "reason": "誤用乘法規則於加法。"
      },
      {
        "choice": "3²×3⁵=9⁷",
        "truth": false,
        "reason": "底數不應變9。"
      },
      {
        "choice": "(4²)³=4⁵",
        "truth": false,
        "reason": "冪的乘方應4⁶。"
      }
    ],
    "commonMistake": "只看到同底數就不管運算符號。",
    "concept": "指數律有明確運算條件。",
    "tags": [
      "數與量",
      "指數律",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-exponent-meaning"
    ],
    "authoringIntent": "辨認不可直接合併的加法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "52ab7202d5774e2fababcb51032e0bdc0a4e4f04aa6d40e47406dfe35b126c75"
  },
  {
    "questionId": "u01-s013-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料量先連續 3 次各變為原來 2 倍，之後又連續 4 次各變為原來 2 倍。總倍數可寫成何者？",
    "choices": [
      "2¹²",
      "2⁷",
      "4⁷",
      "2¹"
    ],
    "answerIndex": 1,
    "explanation": "前段倍數2³，後段2⁴，連續相乘為2³×2⁴=2⁷。",
    "steps": [
      "前段2³。",
      "後段2⁴。",
      "同底數相乘指數相加得2⁷。"
    ],
    "optionAnalysis": [
      {
        "choice": "2¹²",
        "truth": false,
        "reason": "把指數相乘。"
      },
      {
        "choice": "2⁷",
        "truth": true,
        "reason": "2^(3+4)=2⁷。"
      },
      {
        "choice": "4⁷",
        "truth": false,
        "reason": "底數錯改4。"
      },
      {
        "choice": "2¹",
        "truth": false,
        "reason": "把指數相減。"
      }
    ],
    "commonMistake": "把3次與4次相乘得到12次倍增。",
    "concept": "連續同倍率階段的次數相加。",
    "tags": [
      "數與量",
      "指數律",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-exponent-meaning"
    ],
    "authoringIntent": "用指數律合併兩段倍增。",
    "literacyContextNecessity": "兩段倍增次數與相同倍率2共同決定2³×2⁴。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d073e7d0e46215f47b9a3d6e3b31d947b26aafe804eacf4e647db6cdd023b736"
  },
  {
    "questionId": "u01-s013-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某縮放程序每一輪把面積乘以 10²，連續執行 3 輪後，總倍率為何？",
    "choices": [
      "10⁵",
      "10⁹",
      "10⁶",
      "30²"
    ],
    "answerIndex": 2,
    "explanation": "每輪倍率10²，三輪為(10²)³=10⁶。",
    "steps": [
      "三輪重複乘10²。",
      "寫成冪的乘方。",
      "2×3=6。"
    ],
    "optionAnalysis": [
      {
        "choice": "10⁵",
        "truth": false,
        "reason": "把指數相加一次。"
      },
      {
        "choice": "10⁹",
        "truth": false,
        "reason": "把底數與輪數混合。"
      },
      {
        "choice": "10⁶",
        "truth": true,
        "reason": "(10²)³=10^(2×3)=10⁶。"
      },
      {
        "choice": "30²",
        "truth": false,
        "reason": "把倍率當加法。"
      }
    ],
    "commonMistake": "把(10²)³寫成10⁵。",
    "concept": "相同冪重複相乘形成冪的乘方。",
    "tags": [
      "數與量",
      "指數律",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-exponent-meaning"
    ],
    "authoringIntent": "把多輪面積縮放轉成(10²)³。",
    "literacyContextNecessity": "每輪倍率與輪數都是必要條件。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1150d1a052ae63cdabd02fe5f96828c07b2671c72a6a40f88f9f75e5d8866af3"
  },
  {
    "questionId": "u01-s013-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某運算量為 4⁵×2³。若要全部寫成 2 的冪，結果為何？",
    "choices": [
      "2⁸",
      "2¹⁰",
      "2¹⁵",
      "2¹³"
    ],
    "answerIndex": 3,
    "explanation": "4⁵=(2²)⁵=2¹⁰，再乘2³得2¹³。",
    "steps": [
      "把4改成2²。",
      "冪的乘方得2¹⁰。",
      "同底數相乘得2¹³。"
    ],
    "optionAnalysis": [
      {
        "choice": "2⁸",
        "truth": false,
        "reason": "只加5與3。"
      },
      {
        "choice": "2¹⁰",
        "truth": false,
        "reason": "漏乘底數轉換的2。"
      },
      {
        "choice": "2¹⁵",
        "truth": false,
        "reason": "把5乘3。"
      },
      {
        "choice": "2¹³",
        "truth": true,
        "reason": "(2²)⁵×2³=2¹⁰×2³=2¹³。"
      }
    ],
    "commonMistake": "直接把4⁵看成2⁵。",
    "concept": "不同底數先轉為共同底數。",
    "tags": [
      "數與量",
      "指數律",
      "literacy"
    ],
    "estimatedTimeSec": "95",
    "prerequisiteSkillIds": [
      "integer-exponent-meaning"
    ],
    "authoringIntent": "在資料運算語境中完成共同底數化簡。",
    "literacyContextNecessity": "原式兩個不同底數與要求「全部寫成2的冪」共同決定轉換。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "aee54eb44468ad209387632f3626de3f7b245649a09b4fdcb8b1a2315b01121f"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s013-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "化簡並說明每一步使用哪一條指數律：2⁵×2³÷2⁴。",
    "requiredWork": [
      "指出乘法指數相加。",
      "指出除法指數相減。"
    ],
    "fullCreditSolution": [
      "2⁵×2³=2⁸（同底數乘法）。",
      "2⁸÷2⁴=2⁴（同底數除法）。",
      "結果2⁴=16。"
    ],
    "alternativeSolutions": [
      "可直接寫2^(5+3-4)=2⁴，但須標明兩條規則。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "化簡2⁴、值16與兩條規則全部正確。"
      },
      {
        "score": 2,
        "criteria": "化簡正確但規則說明略缺。"
      },
      {
        "score": 1,
        "criteria": "知道指數應5+3-4但有小算錯。"
      },
      {
        "score": 0,
        "criteria": "把指數相乘或相除。"
      }
    ],
    "scoringNotes": [
      "底數2保持不變。"
    ],
    "commonErrors": [
      "寫4⁴。",
      "5×3÷4。",
      "只算5+3。"
    ],
    "independentReview": {
      "derivedResult": "2⁴=16。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "b95fb01bf87f485fa1f2103a22551043212e4d1953612a64aff835c0cb259982"
  },
  {
    "questionId": "u01-s013-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-laws",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "將 8⁴÷4³×2⁵ 化成 2 的單一冪，並用展開的因數個數檢查指數。",
    "requiredWork": [
      "8、4都改寫成2的冪。",
      "按乘除關係合併指數。",
      "說明因數個數。"
    ],
    "fullCreditSolution": [
      "8⁴=(2³)⁴=2¹²。",
      "4³=(2²)³=2⁶。",
      "2¹²÷2⁶×2⁵=2^(12-6+5)=2¹¹。",
      "展開觀點：12個2約去6個，再加入5個，共11個。"
    ],
    "alternativeSolutions": [
      "可先合併8⁴×2⁵後再除，答案相同。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "所有改寫、2¹¹與因數檢查完整。"
      },
      {
        "score": 2,
        "criteria": "答案與主要改寫正確，但檢查略缺；或一處小錯。"
      },
      {
        "score": 1,
        "criteria": "能正確改寫8⁴或4³並使用部分指數律。"
      },
      {
        "score": 0,
        "criteria": "不同底數直接合併且無有效方法。"
      }
    ],
    "scoringNotes": [
      "連續乘除的指數為12-6+5。"
    ],
    "commonErrors": [
      "把8⁴寫2⁷。",
      "把除法指數相加。",
      "漏掉2⁵。"
    ],
    "independentReview": {
      "derivedResult": "2¹¹。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "474ae89617ea9a76b8cee3026abe8b596e30195ad703a36d1a6947492ba476e3"
  }
];

export const DRAWING_SPECS = [];
