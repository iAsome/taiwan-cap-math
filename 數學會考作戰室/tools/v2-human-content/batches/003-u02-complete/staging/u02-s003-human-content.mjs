// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s003-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-factors",
  "skillId": "fraction-prime-factorization",
  "title": "質因數分解：把合數拆成唯一的質數乘積",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能用短除法或因數樹完成質因數分解。",
    "能用指數整理重複質因數。",
    "能由分解式還原原數。",
    "能用指數奇偶判斷完全平方。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-prime-composite",
      "requiredLevel": "能辨認質數與合數，知道分解必須持續到質數。"
    }
  ],
  "glossary": [
    {
      "term": "質因數",
      "definition": "同時是質數又是某數因數的數。"
    },
    {
      "term": "質因數分解",
      "definition": "把大於1的整數寫成質數乘積。"
    },
    {
      "term": "因數樹",
      "definition": "把合數逐層拆成兩因數直到葉節點皆為質數。"
    },
    {
      "term": "指數",
      "definition": "相同質因數重複出現的次數。"
    }
  ],
  "notation": [
    {
      "symbol": "p^a",
      "meaning": "質數p連乘a次。"
    }
  ],
  "conceptNarrative": [
    "任何大於1的合數都能持續拆成質數乘積。",
    "分解路徑可以不同，但質因數及其指數最後相同。",
    "因數樹所有葉節點都要納入乘積，不能只讀一條分支。",
    "完全平方數的每個質因數指數都是偶數。"
  ],
  "formalDefinitions": [
    {
      "name": "質因數分解",
      "statement": "n>1寫成p₁^a₁p₂^a₂…，各p為不同質數。"
    },
    {
      "name": "標準排列",
      "statement": "通常依質因數由小到大排列。"
    }
  ],
  "formulas": [
    {
      "formula": "n=p₁^a₁p₂^a₂…",
      "conditions": [
        "n為大於1的正整數",
        "各p為質數"
      ],
      "meaning": "標準質因數分解。"
    }
  ],
  "nonApplicableCases": [
    "1沒有質因數分解。",
    "因數中仍有合數時，分解尚未完成。",
    "指數0的質因數通常不寫。",
    "完全平方判斷只看質因數指數，不看數字外觀。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先用最小質數2試除。",
      "check": "是否為偶數？"
    },
    {
      "step": 2,
      "instruction": "依序嘗試3、5、7。",
      "check": "每次除後商仍須繼續分解。"
    },
    {
      "step": 3,
      "instruction": "直到商為1。",
      "check": "所有除數是否皆為質數？"
    },
    {
      "step": 4,
      "instruction": "把相同質因數合併成指數。",
      "check": "出現幾次？"
    },
    {
      "step": 5,
      "instruction": "乘回驗算。",
      "check": "乘積是否回到原數？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "分解 90。",
      "solutionSteps": [
        "90=2×45。",
        "45=3²×5。"
      ],
      "answer": "2×3²×5。"
    },
    {
      "exampleId": "L2",
      "prompt": "由因數樹 72→8×9。",
      "solutionSteps": [
        "8=2³。",
        "9=3²。"
      ],
      "answer": "72=2³×3²。"
    },
    {
      "exampleId": "L3",
      "prompt": "還原 2⁴×3×5。",
      "solutionSteps": [
        "2⁴=16。",
        "16×3×5=240。"
      ],
      "answer": "240。"
    },
    {
      "exampleId": "L4",
      "prompt": "使 18 乘最小整數成完全平方。",
      "solutionSteps": [
        "18=2×3²。",
        "補一個2得2²×3²。"
      ],
      "answer": "乘2。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "寫成6×15就停止。",
      "why": "兩因數仍為合數。",
      "correction": "繼續拆到每個因數都是質數。"
    },
    {
      "mistake": "漏掉因數樹某分支。",
      "why": "只沿一條路徑讀葉節點。",
      "correction": "收集全部葉節點並乘回。"
    },
    {
      "mistake": "把2×2×3寫成2×3²。",
      "why": "重複次數配錯底數。",
      "correction": "同底數才合併指數。"
    },
    {
      "mistake": "把2³算成2×3。",
      "why": "誤解指數。",
      "correction": "2³=2×2×2。"
    },
    {
      "mistake": "把1寫進質因數分解。",
      "why": "把因數與質因數混淆。",
      "correction": "1不是質數，不寫入。"
    },
    {
      "mistake": "未乘回驗算。",
      "why": "分解過程算術錯誤未被發現。",
      "correction": "最後計算質數乘積。"
    }
  ],
  "selfCheck": [
    "所有末端因數都是質數嗎？",
    "相同質因數出現次數正確嗎？",
    "是否由小到大整理？",
    "乘回是否等於原數？",
    "完全平方題是否逐一檢查指數奇偶？"
  ],
  "summary": [
    "質因數分解把合數拆成質數乘積。",
    "不同分解路徑得到同一標準結果。",
    "指數記錄重複質因數。",
    "完全平方的質因數指數皆為偶數。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-prime-composite，需能完成其基本判斷與計算。",
    "next": [
      "最大公因數會取共同質因數較小指數。",
      "最小公倍數會取所有質因數較大指數。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s003-v001",
      "u02-s003-v002",
      "u02-s003-v003",
      "u02-s003-v004",
      "u02-s003-v005",
      "u02-s003-v006",
      "u02-s003-v007",
      "u02-s003-v008",
      "u02-s003-v009",
      "u02-s003-v010",
      "u02-s003-v011",
      "u02-s003-v012"
    ],
    "constructedResponseIds": [
      "u02-s003-cr001",
      "u02-s003-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "以短除、因數樹與乘回三種方式交叉核對90、72、240；完全平方補因數的指數由奇轉偶，未超出會考範圍。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "60591f297aab82ff815152f3bb5c276bbef1ca4817e18b6b892a88dd0398006c"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s003-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "60 的質因數分解為何？",
    "choices": [
      "2²×3×5",
      "2×3×10",
      "4×15",
      "2³×3×5"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：60=2×30=2×2×15=2²×3×5；所有因數皆為質數。所以答案是「2²×3×5」。",
    "steps": [
      "60=2×30=2×2×15=2²×3×5",
      "所有因數皆為質數"
    ],
    "optionAnalysis": [
      {
        "choice": "2²×3×5",
        "truth": true,
        "reason": "2²×3×5=60，且皆為質數。"
      },
      {
        "choice": "2×3×10",
        "truth": false,
        "reason": "10 不是質數。"
      },
      {
        "choice": "4×15",
        "truth": false,
        "reason": "4、15 都不是質數。"
      },
      {
        "choice": "2³×3×5",
        "truth": false,
        "reason": "2³×3×5=120。"
      }
    ],
    "commonMistake": "只要乘積正確就稱為質因數分解，未確認每個因數是質數。",
    "concept": "質因數分解的每個因數都必須是質數。",
    "tags": [
      "數與量",
      "質因數分解",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-prime-composite"
    ],
    "authoringIntent": "完成基本質因數分解。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6c9cdb9d1b6af53fe887759a0bf29c89d63bac7c730dd18d178b55b345e34aad"
  },
  {
    "questionId": "u02-s003-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "84 的質因數分解中，質因數 2 的指數是多少？",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：84=2×42=2²×21=2²×3×7；因此 2 的指數為 2。所以答案是「2」。",
    "steps": [
      "84=2×42=2²×21=2²×3×7",
      "因此 2 的指數為 2"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "只除一次 2，漏掉第二次。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "2 出現兩次，指數是 2。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "2³ 不整除 84。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "2⁴ 不整除 84。"
      }
    ],
    "commonMistake": "把質因數 2 本身誤當成指數。",
    "concept": "指數表示相同質因數重複相乘的次數。",
    "tags": [
      "數與量",
      "質因數分解",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-prime-composite"
    ],
    "authoringIntent": "讀取質因數指數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a5b22e696f9bd2ca51974d647b6f15b023fe2c7ebc2afdcb1090a38441c4f25d"
  },
  {
    "questionId": "u02-s003-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個等式是 126 的質因數分解？",
    "choices": [
      "126=6×21",
      "126=2×63",
      "126=2×3²×7",
      "126=3×42"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：126÷2=63，63=3²×7；所以 126=2×3²×7。所以答案是「126=2×3²×7」。",
    "steps": [
      "126÷2=63，63=3²×7",
      "所以 126=2×3²×7"
    ],
    "optionAnalysis": [
      {
        "choice": "126=6×21",
        "truth": false,
        "reason": "6 和 21 不是質數。"
      },
      {
        "choice": "126=2×63",
        "truth": false,
        "reason": "63 不是質數，尚未分解完成。"
      },
      {
        "choice": "126=2×3²×7",
        "truth": true,
        "reason": "2、3、7 都是質數且乘積為126。"
      },
      {
        "choice": "126=3×42",
        "truth": false,
        "reason": "42 不是質數。"
      }
    ],
    "commonMistake": "分解到合數就停止。",
    "concept": "必須持續分解直到所有因數都是質數。",
    "tags": [
      "數與量",
      "質因數分解",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-prime-composite"
    ],
    "authoringIntent": "辨認完整質因數分解。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e0f16aed5e74b858efa2c3e9caf7b93a551c1dbb393f564b5840c9754ec2e87d"
  },
  {
    "questionId": "u02-s003-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "質因數分解為 2³×3² 的數是多少？",
    "choices": [
      "36",
      "48",
      "54",
      "72"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：2³=8，3²=9；8×9=72。所以答案是「72」。",
    "steps": [
      "2³=8，3²=9",
      "8×9=72"
    ],
    "optionAnalysis": [
      {
        "choice": "36",
        "truth": false,
        "reason": "36=2²×3²。"
      },
      {
        "choice": "48",
        "truth": false,
        "reason": "48=2⁴×3。"
      },
      {
        "choice": "54",
        "truth": false,
        "reason": "54=2×3³。"
      },
      {
        "choice": "72",
        "truth": true,
        "reason": "72=2³×3²。"
      }
    ],
    "commonMistake": "把指數相加或把底數相加。",
    "concept": "由質因數分解還原原數要計算各次方後相乘。",
    "tags": [
      "數與量",
      "質因數分解",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-prime-composite"
    ],
    "authoringIntent": "由分解式還原整數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "790dd2f5fd51411da388a214e67e47d6c6059be192c0b554cb21f2503ad8309e"
  },
  {
    "questionId": "u02-s003-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "360=2ᵃ×3ᵇ×5，則 a+b 等於多少？",
    "choices": [
      "5",
      "4",
      "6",
      "7"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：360=36×10=(2²×3²)×(2×5)=2³×3²×5；a+b=3+2=5。所以答案是「5」。",
    "steps": [
      "360=36×10=(2²×3²)×(2×5)=2³×3²×5",
      "a+b=3+2=5"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": true,
        "reason": "a=3、b=2，所以和為5。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "只算 2 的指數會得3或誤得4。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "把底數相加會偏大。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "沒有任何指數和為7。"
      }
    ],
    "commonMistake": "分解正確後讀錯指數或漏加。",
    "concept": "先完整分解，再讀取各質因數指數。",
    "tags": [
      "數與量",
      "質因數分解",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-prime-composite"
    ],
    "authoringIntent": "從分解式求引數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0174f8ed44e96b47d3a1039478df843465090b9f445333a58a7b4edbe857d168"
  },
  {
    "questionId": "u02-s003-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "fig-u02-s003-v006",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "觀察質因數分解樹：根節點 180 分成 18 與 10，18 分成 2 與 9，9 分成 3 與 3，10 分成 2 與 5。180 的質因數分解為何？",
    "choices": [
      "2×3²×5",
      "2²×3²×5",
      "2²×3×5²",
      "2³×3²×5"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：葉節點依序為 2、3、3、2、5；整理得 2²×3²×5。所以答案是「2²×3²×5」。",
    "steps": [
      "葉節點依序為 2、3、3、2、5",
      "整理得 2²×3²×5"
    ],
    "optionAnalysis": [
      {
        "choice": "2×3²×5",
        "truth": false,
        "reason": "漏掉一個 2。"
      },
      {
        "choice": "2²×3²×5",
        "truth": true,
        "reason": "兩個2、兩個3、一個5，正確。"
      },
      {
        "choice": "2²×3×5²",
        "truth": false,
        "reason": "把一個3錯記成5。"
      },
      {
        "choice": "2³×3²×5",
        "truth": false,
        "reason": "多寫一個2。"
      }
    ],
    "commonMistake": "只讀一條分支，漏掉另一分支的質因數。",
    "concept": "因數樹的所有葉節點都要乘回原數。",
    "tags": [
      "數與量",
      "質因數分解",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-prime-composite"
    ],
    "authoringIntent": "讀取因數樹。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8866e2e34fcfee7aa7c14f0b5e93ecc449e465ffc64004049fa60e639d551922"
  },
  {
    "questionId": "u02-s003-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "要使 72×k 成為完全平方數，k 的最小正整數是多少？",
    "choices": [
      "6",
      "3",
      "2",
      "8"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：72=2³×3²；只需補一個2，使指數變成2⁴×3²。所以答案是「2」。",
    "steps": [
      "72=2³×3²",
      "只需補一個2，使指數變成2⁴×3²"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": false,
        "reason": "乘6會使2、3指數都成奇數。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "乘3使3的指數變3。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "乘2得到144，是最小完全平方。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "乘8也成平方但不是最小。"
      }
    ],
    "commonMistake": "沒有逐一檢查各質因數指數的奇偶。",
    "concept": "完全平方數的質因數指數皆為偶數。",
    "tags": [
      "數與量",
      "質因數分解",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-prime-composite"
    ],
    "authoringIntent": "用指數奇偶補成平方數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e4f75f1a0131acf7c246cf41bcbc534a5e82a4b28083e8f8a53479436dfddff0"
  },
  {
    "questionId": "u02-s003-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 N=2⁴×3×5²，N 的最大質因數是多少？",
    "choices": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：質因數只有 2、3、5；其中最大是 5。所以答案是「5」。",
    "steps": [
      "質因數只有 2、3、5",
      "其中最大是 5"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "2 是質因數但不是最大。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "3 是質因數但不是最大。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "4 是合數，不是質因數。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "5 是最大質因數。"
      }
    ],
    "commonMistake": "把指數最大的底數誤認為最大質因數。",
    "concept": "最大質因數比較的是底數大小，不是指數。",
    "tags": [
      "數與量",
      "質因數分解",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-prime-composite"
    ],
    "authoringIntent": "解讀分解式中的質因數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c2ff16c70669a4bf6da9a7218b78121e0b220f488394b595b728a0a405123efd"
  },
  {
    "questionId": "u02-s003-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 A=2²×3×7，B=2×3²×5。A×B 的質因數分解為何？",
    "choices": [
      "2³×3³×5×7",
      "2²×3²×5×7",
      "2³×3²×5×7",
      "2²×3³×5×7"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：相同質因數的指數相加；A×B=2³×3³×5×7。所以答案是「2³×3³×5×7」。",
    "steps": [
      "相同質因數的指數相加",
      "A×B=2³×3³×5×7"
    ],
    "optionAnalysis": [
      {
        "choice": "2³×3³×5×7",
        "truth": true,
        "reason": "2 指數2+1=3，3指數1+2=3，正確。"
      },
      {
        "choice": "2²×3²×5×7",
        "truth": false,
        "reason": "兩個指數都少算。"
      },
      {
        "choice": "2³×3²×5×7",
        "truth": false,
        "reason": "3 的指數少1。"
      },
      {
        "choice": "2²×3³×5×7",
        "truth": false,
        "reason": "2 的指數少1。"
      }
    ],
    "commonMistake": "相乘時把相同底數的指數相乘。",
    "concept": "相同質因數相乘時指數相加。",
    "tags": [
      "數與量",
      "質因數分解",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-prime-composite"
    ],
    "authoringIntent": "合併兩個分解式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a8e3214830346f8ed10f10005dc38f7a2511ffcb39797c74c824f86fa861f3f9"
  },
  {
    "questionId": "u02-s003-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某工廠每箱零件數為 2³×3²×5。若改寫成一般整數，每箱有多少個零件？",
    "choices": [
      "180 個",
      "360 個",
      "720 個",
      "90 個"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：2³×3²×5=8×9×5；8×45=360。所以答案是「360 個」。",
    "steps": [
      "2³×3²×5=8×9×5",
      "8×45=360"
    ],
    "optionAnalysis": [
      {
        "choice": "180 個",
        "truth": false,
        "reason": "少乘一個2，得到180。"
      },
      {
        "choice": "360 個",
        "truth": true,
        "reason": "完整乘積是360。"
      },
      {
        "choice": "720 個",
        "truth": false,
        "reason": "多乘一個2，得到720。"
      },
      {
        "choice": "90 個",
        "truth": false,
        "reason": "只算一半。"
      }
    ],
    "commonMistake": "把指數當成乘數，例如把2³算成2×3。",
    "concept": "次方表示重複相乘。",
    "tags": [
      "數與量",
      "質因數分解",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-prime-composite"
    ],
    "authoringIntent": "在包裝標示中還原數量。",
    "literacyContextNecessity": "箱標上的質因數次方是實際數量的唯一表示，必須正確還原才能知道每箱零件數。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b372e4f016d481f8ba650e6fccc3a428334366cb769c383ea3a22dfeac9eaa22"
  },
  {
    "questionId": "u02-s003-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個正方形地磚面積為 2⁶×3² 平方公分。若邊長為整數，邊長是多少？",
    "choices": [
      "12 公分",
      "18 公分",
      "24 公分",
      "36 公分"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：面積=(2³×3)²；邊長=2³×3=24。所以答案是「24 公分」。",
    "steps": [
      "面積=(2³×3)²",
      "邊長=2³×3=24"
    ],
    "optionAnalysis": [
      {
        "choice": "12 公分",
        "truth": false,
        "reason": "12²=144，不符。"
      },
      {
        "choice": "18 公分",
        "truth": false,
        "reason": "18²=324，不符。"
      },
      {
        "choice": "24 公分",
        "truth": true,
        "reason": "24²=576=2⁶×3²。"
      },
      {
        "choice": "36 公分",
        "truth": false,
        "reason": "36² 過大。"
      }
    ],
    "commonMistake": "直接把面積中的底數相乘，忽略指數要除以2。",
    "concept": "平方根會把完全平方質因數的指數除以2。",
    "tags": [
      "數與量",
      "質因數分解",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-prime-composite"
    ],
    "authoringIntent": "用質因數分解求整數邊長。",
    "literacyContextNecessity": "正方形面積與整數邊長條件使各質因數指數必須對半，情境資料不可省略。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "56b476e25cc58a2a23b1ddf8e2b603d4485b9f5391bf631d39fc7642107f5e0a"
  },
  {
    "questionId": "u02-s003-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料庫把檔案數量記為 2⁴×3×5²。若每個資料夾放 100 個檔案，最多可裝滿多少個資料夾？",
    "choices": [
      "6 個",
      "8 個",
      "10 個",
      "12 個"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：總數=16×3×25=1200；1200÷100=12。所以答案是「12 個」。",
    "steps": [
      "總數=16×3×25=1200",
      "1200÷100=12"
    ],
    "optionAnalysis": [
      {
        "choice": "6 個",
        "truth": false,
        "reason": "600 檔案才是6個。"
      },
      {
        "choice": "8 個",
        "truth": false,
        "reason": "800檔案才是8個。"
      },
      {
        "choice": "10 個",
        "truth": false,
        "reason": "1000檔案才是10個。"
      },
      {
        "choice": "12 個",
        "truth": true,
        "reason": "1200÷100=12。"
      }
    ],
    "commonMistake": "只計算質因數乘積的一部分。",
    "concept": "先還原總數，再依每份大小分組。",
    "tags": [
      "數與量",
      "質因數分解",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-prime-composite"
    ],
    "authoringIntent": "將分解式用於資料分組。",
    "literacyContextNecessity": "質因數表示、每資料夾容量與求滿資料夾數三項資料共同決定兩步運算。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "852ca27581495b23ea40dd5fdb5a99c2087d53211bb3c85af0d8f9f7ca4a6ab2"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s003-cr001",
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "用兩種不同方法完成 420 的質因數分解，並乘回驗算。",
    "requiredWork": [
      "至少一種為短除或因數樹。",
      "寫成指數形式。",
      "乘回420。"
    ],
    "fullCreditSolution": [
      "方法一：420÷2=210÷2=105÷3=35÷5=7÷7=1。",
      "方法二：420=42×10=(2×3×7)(2×5)。",
      "所以420=2²×3×5×7，乘回為420。"
    ],
    "alternativeSolutions": [
      "因數樹分支可不同，只要葉節點完整。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩種方法、標準分解與乘回均正確。"
      },
      {
        "score": 2,
        "criteria": "一種方法完整，另一種有輕微書寫缺漏。"
      },
      {
        "score": 1,
        "criteria": "能分解出部分質因數但未完成。"
      },
      {
        "score": 0,
        "criteria": "結果含合數因數或乘積不為420。"
      }
    ],
    "scoringNotes": [
      "質因數次序可不同。"
    ],
    "commonErrors": [
      "漏掉第二個2。",
      "把35當質數停止。"
    ],
    "independentReview": {
      "derivedResult": "420=2²×3×5×7。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "9638247d9cb06cb25092f8d0ff379e2eb9f343f12ba829f57f60ce06cd256915"
  },
  {
    "questionId": "u02-s003-cr002",
    "unitId": "u02",
    "topicId": "u02-factors",
    "skillId": "fraction-prime-factorization",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "求最小正整數 k，使 540k 為完全平方數，並寫出理由。",
    "requiredWork": [
      "先分解540。",
      "依據指數奇偶補因數。",
      "說明最小性。"
    ],
    "fullCreditSolution": [
      "540=2²×3³×5。",
      "完全平方需各指數為偶數，因此3與5各補一次。",
      "k=3×5=15，此時540×15=2²×3⁴×5²。"
    ],
    "alternativeSolutions": [
      "也可寫540=36×15，需再乘15成為(90)²。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "分解、k=15與指數偶數理由完整。"
      },
      {
        "score": 2,
        "criteria": "k正確但最小性說明不足。"
      },
      {
        "score": 1,
        "criteria": "知道補奇指數但漏一個因數。"
      },
      {
        "score": 0,
        "criteria": "k錯誤且無有效分解。"
      }
    ],
    "scoringNotes": [
      "不能乘0，題目要求正整數。"
    ],
    "commonErrors": [
      "只乘3。",
      "把指數變成更大的奇數。"
    ],
    "independentReview": {
      "derivedResult": "k=15。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "5e162100d6afde3fa6176f511ad8b928fdbcbfded86605b4caab58cd38f05445"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "fig-u02-s003-v006",
    "unitId": "u02",
    "skillId": "fraction-prime-factorization",
    "altText": "因數樹從 180 開始，第一層分成 18 與 10；18 分成 2 與 9，9 再分成 3 與 3；10 分成 2 與 5。所有葉節點為 2、3、3、2、5。",
    "drawingSpec": {
      "canvas": "820×460，viewBox 0 0 820 460，四周至少留白40畫素",
      "root": "180 置於 (410,55)，使用直徑74畫素圓框，字置中",
      "firstBranches": "由根節點下緣分別以3畫素實線連至 (255,145) 的18與 (565,145) 的10",
      "leftSubtree": "18 連至 (165,245) 的2與 (345,245) 的9；9再連至 (300,355) 的3與 (390,355) 的3",
      "rightSubtree": "10 連至 (510,245) 的2與 (620,245) 的5",
      "nodeStyle": "合數節點使用白底黑框圓；質數葉節點使用淺灰實心圓與粗體字",
      "lineStyle": "所有樹枝為3畫素黑色實線，不使用箭頭或虛線",
      "labels": "每個節點只標數字；底部另標『葉節點皆為質數』，不得直接寫出2²×3²×5",
      "proportionNote": "版面不表示數值大小，只表示分解關係",
      "accessibility": "閱讀順序為180→18與10→各分支，altText完整列出所有葉節點"
    },
    "svgPath": "figures/u02/fig-u02-s003-v006.svg",
    "svgAssertions": [
      "<text x=\"410\" y=\"64\"",
      "<text x=\"255\" y=\"154\"",
      "<text x=\"565\" y=\"154\"",
      "<text x=\"300\" y=\"364\"",
      "<text x=\"620\" y=\"254\""
    ],
    "figureReview": {
      "reviewVersion": "human-figure-review-r3.0",
      "coordinateAndScaleCheck": "pass",
      "labelPlacementCheck": "pass",
      "solidDashedLineCheck": "pass",
      "questionConsistencyCheck": "pass",
      "answerLeakCheck": "pass",
      "mobileReadabilityCheck": "pass at 360 CSS px width",
      "accessibilityCheck": "pass: title, desc, role=img and equivalent altText present",
      "reviewNote": "逐支核對乘積：18×10=180、2×9=18、3×3=9、2×5=10；五個葉節點位置與題幹敘述完全一致，未在圖中直接揭示整理後答案。",
      "reviewedAt": "2026-07-12",
      "decision": "pass"
    },
    "reviewStatus": "independently-reviewed",
    "contentSha256": "133d912a24493b67d999bed0b98fa793b1f81d7242c159080b90710e506ce2f7"
  }
];
