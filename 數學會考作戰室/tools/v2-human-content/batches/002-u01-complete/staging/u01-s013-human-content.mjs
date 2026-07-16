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
    "指數表示同一因數重複相乘的次數。aᵐ×aⁿ 合併後共有 m+n 個因數 a，所以同底數相乘時底數不變、指數相加。",
    "aᵐ÷aⁿ 可由分子、分母約去共同因數理解；底數 a 必須非 0，且在目前非負指數範圍內，m≥n 時結果為 aᵐ⁻ⁿ。",
    "(aᵐ)ⁿ 表示把 aᵐ 重複相乘 n 次，因此共有 mn 個因數 a，指數要相乘；積的乘方則要讓括號內每個因數都取得同一指數。",
    "指數律處理乘法、除法與冪的乘方，不可把 aᵐ+aⁿ 的加法直接改成 aᵐ⁺ⁿ。不同底數時，應先判斷能否改寫成共同底數再合併。"
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
      "prompt": "化簡 3⁴×3²。",
      "answer": "3⁶。",
      "why": "兩個冪的底數都是 3，相乘時底數保持 3，指數相加為 4+2=6，所以得到 3⁶。展開後共有六個因數 3，也能確認不是把底數改成 9。"
    },
    {
      "prompt": "化簡 5⁷÷5³。",
      "answer": "5⁴。",
      "why": "底數 5 非 0，分子、分母可約去三個共同因數 5，原有七個因數便剩四個。因此同底數相除用 7−3=4，結果是 5⁴，不是用 7÷3。"
    },
    {
      "prompt": "化簡 (2³)⁴。",
      "answer": "2¹²。",
      "why": "(2³)⁴ 表示四份 2³ 相乘，每份含三個因數 2，合計有 3×4=12 個 2。因此冪的乘方指數相乘，得到 2¹²，而不是把 3 與 4 相加；展開四份括號也可逐一驗證。"
    },
    {
      "prompt": "化簡 4³×2⁵。",
      "answer": "2¹¹。",
      "why": "先利用 4=2² 把底數統一，4³=(2²)³=2⁶；再算 2⁶×2⁵=2¹¹。改寫後可看出共有十一個因數 2，避免因表面底數不同而直接相加原指數。"
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
  "contentSha256": "2df070584d2ce4ebda7a8ace67be1ff076990b5403553dfd6d55b6581e294fa3",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "2³ 與 2⁴ 的底數同為 2，相乘時底數保持不變，指數相加為 3+4=7，所以化簡成 2⁷。展開檢查時共有七個 2 相乘；4⁷ 改了底數，2¹² 則誤把指數相乘。",
    "steps": [
      "確認底數都是2。",
      "相乘用指數相加。",
      "得2⁷。"
    ],
    "optionAnalysis": [
      {
        "choice": "2⁷",
        "truth": true,
        "reason": "同底數相乘時指數相加，3+4=7，所以得到 2⁷。"
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
    "commonMistake": "同底數冪相乘時把底數二也相加成四，因而錯寫成四的七次方。",
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
    "contentSha256": "1f014eb4b989863ee4831b25da0f569ba76155767bbc90ea4677a42866e42714",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "5⁸÷5³ 是同底數冪相除，且底數 5 不為 0，因此底數保留 5，指數用 8−3=5，得到 5⁵。展開後約去分子、分母共有的三個 5，也確實剩五個 5，與第二個選項相符。",
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
        "reason": "同底數相除時指數相減，8-3=5，所以得到 5⁵。"
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
    "commonMistake": "把同底數相除誤當成指數相除，直接計算八除以三作為新指數。",
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
    "contentSha256": "036a85831f23ff982d1d008280289fa3f43974ce9f3d4df9c65db4cea1ed8d01",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "(3²)⁴ 表示把 3² 連乘四次，每一份都有兩個因數 3，因此總共有 2×4=8 個 3，化簡為 3⁸。冪的乘方要乘指數，不是把 2 與 4 相加成 6；逐項展開也會得到相同結果。",
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
        "reason": "冪的乘方要把指數相乘，2×4=8，所以得到 3⁸。"
      },
      {
        "choice": "9⁴⁰",
        "truth": false,
        "reason": "無此規則。"
      }
    ],
    "commonMistake": "把冪的乘方套成同底數相乘，將二與四相加而錯得三的六次方。",
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
    "contentSha256": "57a1fb45195d67232e06f514f8a214cd813f17e654052c94e54cf3f8845b8e83",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "(2×5)³ 是整個乘積取三次方，可展開為 (2×5)(2×5)(2×5)。整理相同因數後，2 與 5 都各出現三次，所以等於 2³×5³，而不是只讓其中一個因數帶指數。",
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
        "reason": "積的三次方可分配到每個因數，因此 (2×5)³=2³×5³。"
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
    "contentSha256": "dfc381a8b1ee26c96c4f5a531af0614840e1518bac6e8c76019a9d44ec6498b0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "要合併成 2 的單一冪，先把 4 改寫為 2²，因此 4³=(2²)³=2⁶。再用同底數相乘的指數律，2⁶×2⁵=2⁶⁺⁵=2¹¹，所以答案是 2¹¹。展開三個 4 後，每個 4 都提供兩個因數 2，可再次核對。",
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
    "commonMistake": "看到四與二的底數表面不同，未先把四改寫成二的平方就直接相加指數。",
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
    "contentSha256": "e939de0fac1104a425c0ffb092e41b6ec2dd5a36378e5de3b6cab28de07c2207",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "先處理分母的乘法，3⁴×3²=3⁴⁺²=3⁶。原式成為 3⁹÷3⁶，再以同底數相除將指數相減，9−6=3，故結果是 3³；分母的兩個冪都必須納入，逐個約分也會得到相同餘數。",
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
        "reason": "分母兩個同底數因數都要扣除，9-4-2=3，所以得到 3³。"
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
    "commonMistake": "只用分子的指數九減去分母第一項的四，漏掉分母還有三的二次方。",
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
    "contentSha256": "585b1ee8c1ec347f74a1ca1d694b6845def7f10a417fb103757fc63ea971664a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "等式兩邊底數都是 2，可比較指數。同底數相乘時指數相加，所以左邊為 2ˣ⁺³，得到 x+3=9。等式兩邊同減 3，求得 x=6；代回後 2⁶×2³=2⁹，只有第三個選項符合。",
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
    "commonMistake": "把同底數相乘的指數關係誤寫成三乘以未知數等於九。",
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
    "contentSha256": "17691c5e39d74ec9c2228fb760d1903d68091460a185ae3006fb56b1588c1ff7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "先處理冪的乘方，(5²)³=5²ˣ³=5⁶；再以同底數相除，5⁶÷5⁴=5⁶⁻⁴=5²。兩條指數律的順序不可混用，先把 2 與 3 相加會得到錯誤中間式，最後仍保留底數 5。",
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
        "reason": "先將冪的乘方指數相乘，再做同底數相除；2×3-4=2，所以得到 5²。"
      }
    ],
    "commonMistake": "把冪的乘方中二與三相加成五，導致後續除法的指數也跟著錯誤。",
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
    "contentSha256": "2e74a1e51f8adf80c773c3d0e15f89ebdc45558feaa62d07b3ff0002aa6a5e31",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "指數相加只適用同底數冪相乘，2³+2⁴ 是加法，不能直接合成 2⁷，因此第一個敘述正確。其餘選項分別改錯底數、把冪的乘方指數相加，均不符合指數律。",
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
    "contentSha256": "2d94c52b5c7d0de9a5d81c655a3bbf5a43131de3d4ba102a15835a88b1de9d0f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "每次變為原來 2 倍就是乘以 2。前三次的總倍率為 2³，後四次為 2⁴；兩段依序發生，所以總倍率相乘為 2³×2⁴=2³⁺⁴=2⁷，表示共經歷七次倍增。",
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
        "reason": "同底數相乘時指數相加，3+4=7，所以得到 2⁷。"
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
    "commonMistake": "把前後兩段的次數三與四相乘成十二，誤以為總共發生十二次倍增。",
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
    "contentSha256": "bab7a81df6f0bf237c6796becba7f5134601a5ee28a66698ba2b55f1b9959cc3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "每一輪面積都乘以 10²，連續三輪就是把 10² 相乘三次，可寫成 (10²)³。依冪的乘方，指數相乘為 2×3=6，所以總倍率是 10⁶，而不是把 10 與輪數相乘。",
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
        "reason": "冪的乘方要把指數相乘，2×3=6，因此 (10²)³=10⁶。"
      },
      {
        "choice": "30²",
        "truth": false,
        "reason": "把倍率當加法。"
      }
    ],
    "commonMistake": "把冪的乘方誤用指數相加，將二與三相加而寫成十的五次方。",
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
    "contentSha256": "444d88135889ddf1634cd340354012b554d62d404d8df96e927be65b94c4dc5f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "先把 4⁵ 改成共同底數：4⁵=(2²)⁵=2¹⁰。再乘原有的 2³，同底數相乘時指數相加，得到 2¹⁰×2³=2¹³。若直接把 4⁵ 當成 2⁵，會少算每個 4 含有的兩個 2，因此第四個選項正確。",
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
    "commonMistake": "把四的五次方直接改寫成二的五次方，沒有先將四表示成二的平方。",
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
    "contentSha256": "e2be0b64a6129dab0455f7fbc86bd87ef3c600c48829e6009c76a840b9672bb6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "先處理同底數相乘：2⁵×2³=2⁵⁺³=2⁸，因為底數 2 保持不變，指數相加。",
      "再處理同底數相除：2⁸÷2⁴=2⁸⁻⁴=2⁴；底數非 0，指數應相減。",
      "最後計算 2⁴=16。展開檢查時，八個因數 2 約去四個後正好剩四個，與 2⁴ 一致。"
    ],
    "alternativeSolutions": [
      "可直接把指數合併為 5+3-4=4，寫成 2⁴，但須標明使用同底數乘除兩條規則。"
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
      "把同底數相乘時的底數也相乘，將 2⁵×2³ 錯寫成 4⁸。",
      "把除法誤作指數相除，用 8÷4 得到 2²，而不是使用指數相減。",
      "只完成 5+3=8 就停止，漏掉原式後面還要除以 2⁴。"
    ],
    "independentReview": {
      "derivedResult": "2⁴=16。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "2cdd8d44e3baf0d2e806ed249a96f955d05b91b5b4b565ff5f2fb9d079f288e4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "先改寫共同底數：8⁴=(2³)⁴=2¹²，因為冪的乘方使指數 3×4=12。",
      "同理，4³=(2²)³=2⁶，原式成為 2¹²÷2⁶×2⁵。",
      "依原來乘除順序合併指數，12−6+5=11，所以結果為 2¹¹。",
      "以因數個數檢查：十二個 2 約去六個後剩六個，再加入五個，共有十一個 2。"
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
      "把 8⁴ 的底數與指數直接相加，誤寫成 2⁷，沒有使用 8=2³。",
      "遇到除法仍把分母指數六相加，將 12−6+5 錯算成 23。",
      "合併前兩項後就停止，漏掉原式最後仍要乘以 2⁵。"
    ],
    "independentReview": {
      "derivedResult": "2¹¹。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "b03bbc98d5ca54c2527b2f77c19c908ee3ccf87ace605dc2559b5d43e8030e76",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
