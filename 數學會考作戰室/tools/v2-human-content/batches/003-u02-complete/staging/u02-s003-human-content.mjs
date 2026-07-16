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
      "symbol": "pᵃ",
      "meaning": "質數 p 連乘 a 次。"
    }
  ],
  "conceptNarrative": [
    "任何大於 1 的合數都能持續拆成質數乘積。",
    "分解路徑可以不同，但質因數及其指數最後相同。",
    "因數樹所有葉節點都要納入乘積，不能只讀一條分支。",
    "完全平方數的每個質因數指數都是偶數。",
    "完成分解後應把所有質因數乘回原數，藉此檢查有沒有漏掉分支或抄錯指數。"
  ],
  "formalDefinitions": [
    {
      "name": "質因數分解",
      "statement": "n>1 寫成 p₁的 a₁ 次方、p₂的 a₂ 次方等項的乘積，各 p 為不同質數。"
    },
    {
      "name": "標準排列",
      "statement": "通常依質因數由小到大排列。"
    }
  ],
  "formulas": [
    {
      "formula": "n＝p₁ᵃ¹×p₂ᵃ²×…",
      "conditions": [
        "n 為大於 1 的正整數",
        "各 p 為質數"
      ],
      "meaning": "標準質因數分解，a₁、a₂ 依序為各質因數的指數。"
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
      "prompt": "分解 90。",
      "solutionSteps": [
        "90 是偶數，先取出質因數 2，得 90=2×45。",
        "再分解 45=3×15=3×3×5。",
        "合併相同質因數得 90=2×3²×5，並以 2×9×5=90 驗算。"
      ],
      "answer": "90=2×3²×5。",
      "why": "先取出 2 得 45，再把 45 分解為 3×15=3²×5。最後 2、3、5 都是質數，且乘回 2×9×5=90，確認分解完整。這次乘回也能檢查指數與質因數沒有遺漏。"
    },
    {
      "prompt": "由因數樹 72→8×9 完成質因數分解。",
      "solutionSteps": [
        "沿第一支分解 8=2×4=2×2×2=2³。",
        "沿第二支分解 9=3×3=3²。",
        "收集兩支的質因數得 72=2³×3²，乘回 8×9=72 完成驗算。"
      ],
      "answer": "72=2³×3²。",
      "why": "因數樹兩支都要繼續拆解：8=2×2×2=2³，9=3×3=3²。收集全部葉節點後得到 2³×3²，乘回為 72。若只處理其中一支，就會漏掉另一支的質因數。"
    },
    {
      "prompt": "把 2⁴×3×5 還原成一般整數。",
      "solutionSteps": [
        "先依次方定義計算 2⁴=2×2×2×2=16。",
        "再依序相乘，16×3=48。",
        "最後計算 48×5=240。"
      ],
      "answer": "240。",
      "why": "先依次方定義算 2⁴=16，再依序乘 16×3×5=48×5=240。指數表示底數重複相乘四次，不能算成 2×4，這是還原次方形式的關鍵，最後才把各質因數乘起來。"
    },
    {
      "prompt": "使 18 乘最小正整數成為完全平方數。",
      "solutionSteps": [
        "先做質因數分解：18=2¹×3²。",
        "完全平方數的各質因數指數須為偶數；3 的指數 2 已符合，2 的指數 1 還缺一個 2。",
        "補乘 2 後得 18×2=2²×3²=36，因此最小正整數是 2。"
      ],
      "answer": "乘 2。",
      "why": "18=2×3²，質因數 3 的指數 2 已是偶數，只有質因數 2 的指數 1 為奇數。補乘一個 2 後得 2²×3²=36，是完全平方數，且補的質因數個數最少。"
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
  "contentSha256": "da0f8b6b36c4047413b708354d65dd9e6984c20e82e4efa8bf02ba8ff665e94c",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "持續分解 60=2×30=2×2×15=2²×3×5，最後的 2、3、5 都是質數，乘回也得到 60。其他選項含 10、4、15 等合數，或乘積變成 120，並非正確質因數分解，所以只有這一式符合。",
    "steps": [
      "先連續用質數 2 除 60，得到兩個因數 2。",
      "再把 15 分解為 3×5，合併成 2²×3×5。",
      "確認所有因數為質數並乘回驗算 60。"
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
    "contentSha256": "d573e5db4ff6edf97ad0fac491a41bc003c678a38d00b3cb98d2529e8c755160",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "84=2×42，再把 42 分成 2×21，得到 84=2²×3×7。質因數 2 共出現兩次，所以它的指數為 2；指數記錄重複次數，不是把底數 2 直接當答案的理由，這裡兩者剛好同值。",
    "steps": [
      "連續將 84 除以 2，得到 2×2×21。",
      "把 21 分解成 3×7，寫成 2²×3×7。",
      "數出質因數 2 出現兩次，指數為 2。"
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
    "commonMistake": "直接把質因數二本身當作指數，沒有從分解式數出它出現兩次。",
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
    "contentSha256": "5d4b2652cf3ae4cc29752a789404ab4b3166d26d4f50ad8202be53c79abdcf80",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "126÷2=63，而 63=3×21=3²×7，所以完整分解為 126=2×3²×7，且 2、3、7 全是質數。6×21、2×63、3×42 雖乘積正確，仍含合數，不能稱為質因數分解，還必須繼續分解到質數為止，才符合題目所求的形式。",
    "steps": [
      "先取出質因數 2，得到商 63。",
      "將 63 繼續分解為 3²×7。",
      "確認只剩質數後寫成 2×3²×7。"
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
    "commonMistake": "看到乘積已等於一百二十六就停止，未把合數因數繼續拆成質數。",
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
    "contentSha256": "0514123a42ed1149b9b7392a0f19fc1bf71942627346ac35a22a5d58ed9967c0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "先分別計算次方：2³=2×2×2=8，3²=3×3=9，再相乘 8×9=72。指數表示同底數重複相乘，不能把底數或指數直接相加，因此答案為 72，乘法次序不會改變結果。",
    "steps": [
      "把 2³ 展開並算得 8。",
      "把 3² 展開並算得 9。",
      "計算 8×9=72，對應第四個選項。"
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
    "commonMistake": "把底數二、三或指數三、二直接相加，沒有按次方定義重複相乘。",
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
    "contentSha256": "10f109dac54885ab7c004383a122e3a7c6158debd49f3cafc6c41284ca225672",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "將 360 拆成 36×10=(2²×3²)×(2×5)=2³×3²×5，因此 a=3、b=2。題目問 a+b，所以 3+2=5；要讀的是指數，不是把質因數底數相加。回代後可驗得原數 360，所以兩個指數的數值無誤且總和為 5。",
    "steps": [
      "把 360 分解為 2³×3²×5。",
      "對照題式讀出 a=3、b=2。",
      "計算 a+b=3+2=5。"
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
    "contentSha256": "6654e271cbae9ad57784bc357319bbb99a815e7926d632d1efe9f4e451f67f21",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "因數樹的全部葉節點為 2、3、3、2、5，不能只讀其中一條分支。整理相同質因數後有兩個 2、兩個 3、一個 5，故 180=2²×3²×5；乘回可驗得 180，每個葉節點也都是質數。",
    "steps": [
      "沿每條分支收集所有質數葉節點。",
      "將 2、3、3、2、5 合併成 2²×3²×5。",
      "乘回 4×9×5=180 驗證沒有遺漏。"
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
    "contentSha256": "bc3d2ac55cbe12dbcba6ce4e572ce6016a93ddb22a0fe38bc7d7449025b444cd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "72=2³×3²。完全平方數的每個質因數指數都須為偶數；3 的指數 2 已是偶數，2 的指數 3 只差一個 2 就成 4，所以最小 k=2，且 72×2=144=12²，無需再補其他質因數。",
    "steps": [
      "先把 72 分解成 2³×3²。",
      "找出唯一奇指數是質因數 2 的指數 3。",
      "補乘一個 2 得 2⁴×3²，驗算為 144。"
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
    "contentSha256": "bb62a5753290ea908569565374895b53a611f214e9a84754373943b853e14097",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "分解式 N=2⁴×3×5² 中的質因數底數只有 2、3、5，指數只表示各質因數重複的次數。比較底數可知最大質因數是 5；4 是合數，也不是分解式中的質因數。",
    "steps": [
      "從分解式讀出質因數底數 2、3、5。",
      "忽略指數大小，直接比較三個質因數。",
      "確認最大底數為質數 5。"
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
    "contentSha256": "3b6f5e953966890b12970e39e06772d8f3d3cc4308c080119c3331d1426fe290",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "A、B 相乘時，同底數次方的指數相加：質因數 2 的指數為 2+1=3，質因數 3 的指數為 1+2=3；另外保留 5、7，所以 A×B=2³×3³×5×7，不能把不同底數合併，也不能遺漏單獨出現的質因數。",
    "steps": [
      "把 A、B 中相同的質因數排在一起。",
      "分別將 2 與 3 的指數相加得 3、3。",
      "保留只出現一次的 5、7，寫出完整分解式。"
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
    "contentSha256": "fd6d39dc6e512105343d28caef07460eeaed3a9f6f935b6edd0aba3d68847eff",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "依次方定義，2³=8、3²=9，所以每箱零件數為 8×9×5。先算 9×5=45，再算 8×45=360，因此每箱有 360 個；不能把 2³ 誤算成 2×3，否則整體乘積會錯誤，並得到不同的零件總數。",
    "steps": [
      "先計算 2³=8 與 3²=9。",
      "將分解式改寫為 8×9×5。",
      "完成乘法得到每箱 360 個零件。"
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
    "contentSha256": "1246ba4761f02827604c690542a2ed058615f585dc855d96876fa125b994c61e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "正方形面積是邊長平方。將 2⁶×3² 寫成 (2³×3)²，所以邊長為 2³×3=8×3=24 公分；驗算 24²=576，與原面積的質因數分解相同，所以邊長值正確，並已取正邊長而不是負值。",
    "steps": [
      "將面積各質因數的偶指數除以 2。",
      "得到邊長的分解式 2³×3。",
      "計算 8×3=24 並平方驗算。"
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
    "contentSha256": "4069d1ee294222a8b805193378e40a3c2fc7556a194a6d6ce07532dad9129685",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "先還原檔案總數：2⁴×3×5²=16×3×25=1,200。每個資料夾放 100 個，1,200÷100=12，且沒有剩餘，所以最多可裝滿 12 個資料夾，每個容量都完全使用，答案也是整數個資料夾。",
    "steps": [
      "計算 2⁴=16、5²=25。",
      "相乘 16×3×25 得總檔案數 1,200。",
      "以 1,200÷100 算得 12 個裝滿的資料夾。"
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
    "contentSha256": "b06652e287b8c28ca7d3f6c16a3f6683dc8da22658848e9994923af28a64273b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "短除法：420÷2=210、210÷2=105、105÷3=35、35÷5=7、7÷7=1，依序取得質因數後，得到 2²×3×5×7。",
      "因數樹法：420=42×10=(2×3×7)×(2×5)，整理後同樣是 2²×3×5×7，所有葉節點都已是質數。",
      "乘回驗算 2²×3×5×7=4×3×5×7=420，兩種路徑得到相同且完整的質因數分解。"
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
      "分解時漏掉第二個質因數二，使乘回結果不再等於原數。",
      "把三十五誤判為質數而停止，沒有再分解成五乘以七。"
    ],
    "independentReview": {
      "derivedResult": "420=2²×3×5×7。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "bafa733c30ee0bd549b95e30eb43904b5058bdbcefc81a09ba4b3647cfb4a8cf",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "先分解 540=54×10=(2×3³)×(2×5)=2²×3³×5。",
      "完全平方數的每個質因數指數都須為偶數；2 的指數已偶數，3、5 的指數各缺一。",
      "最小需補乘 k=3×5=15，此時 540×15=2²×3⁴×5²，各指數皆為偶數。"
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
    "contentSha256": "c6b8fbfb8dad3be84f9252b57430bb212d9afaca702e3d9f4d7bc78b507ef6df",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "contentSha256": "64a92d89bf301d60ea28d9ed4ea60ed9395a24a906e334947fccab0bfd9062cc",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];
