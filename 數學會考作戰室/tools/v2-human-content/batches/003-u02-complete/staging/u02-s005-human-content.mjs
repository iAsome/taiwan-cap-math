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
    "最小公倍數要包含每個原數需要的全部質因數。",
    "同一質因數取各數中最大指數，才能讓結果被所有原數整除。",
    "若 a 是 b 的倍數，lcm(a,b)=a。",
    "所有正共同倍數都是最小公倍數的正整數倍。",
    "週期同步題除了求共同週期，還要把週期加到題目給的起始時刻，並注意端點是否計入。"
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
      "prompt": "求 lcm(8,12)。",
      "solutionSteps": [
        "分解兩數：8=2³，12=2²×3。",
        "收集質因數 2、3 並各取較大指數，得到 lcm(8,12)=2³×3=24。",
        "驗算 24÷8=3、24÷12=2，確認 24 是兩數的共同倍數。"
      ],
      "answer": "24。",
      "why": "8=2³、12=2²×3，收集底數 2、3 並各取最大指數，得 2³×3=24。24÷8=3、24÷12=2，且沒有更小正共同倍數。對任一指數減少一都會使其中一數無法整除。"
    },
    {
      "prompt": "求 lcm(18,30,40)。",
      "solutionSteps": [
        "分解三數：18=2×3²、30=2×3×5、40=2³×5。",
        "質因數 2、3、5 分別取三數中最大的指數 3、2、1。",
        "所以 lcm(18,30,40)=2³×3²×5=8×9×5=360。"
      ],
      "answer": "360。",
      "why": "三數分解為 2×3²、2×3×5、2³×5。質因數 2、3、5 的最大指數為 3、2、1，所以最小公倍數是 2³×3²×5=360。這個乘積同時包含三數各自需要的所有質因數。"
    },
    {
      "prompt": "已知 9 整除 45，求兩數最小公倍數。",
      "solutionSteps": [
        "由 45=9×5 可知 45 是 9 的倍數，同時也當然是 45 的倍數。",
        "因此 45 已是兩數的共同倍數。",
        "任何 45 的正倍數都不小於 45，所以 lcm(9,45)=45。"
      ],
      "answer": "lcm(9,45)=45。",
      "why": "45 本身是 45 的倍數，也因 45=9×5 而是 9 的倍數，所以它已是共同倍數。任何 45 的正倍數都不小於 45，因此最小值就是 45，可直接利用整除關係判斷。"
    },
    {
      "prompt": "事件每 12 分鐘發生一次，第 1 至第 36 分鐘內含終點共發生幾次？",
      "solutionSteps": [
        "發生時刻是 12 的正倍數，列出不超過 36 的時刻：12、24、36。",
        "第 36 分鐘包含在題目區間內，而起點不另算一次。",
        "符合條件的時刻共有 3 個，所以發生 3 次。"
      ],
      "answer": "3 次。",
      "why": "從第 1 分鐘後開始列 12 的正倍數，符合區間的時刻為第 12、24、36 分鐘。題目包含第 36 分鐘且不把起點算一次，因此共 3 次。"
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
  "contentSha256": "8cd3ad90c3088e6095ed271574d87c069eec8ddf082cf5f8b515f098df115a25",
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
    "explanation": "依序列倍數：6 的正倍數有 6、12、18、24，8 的正倍數有 8、16、24；第一次共同出現的是 24，所以最小公倍數為 24。48 雖也是共同倍數，但不是最小，因此不能選 48。",
    "steps": [
      "列出 6 的倍數直到 24。",
      "列出 8 的倍數並找到共同的 24。",
      "確認 24 是第一個正共同倍數。"
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
    "contentSha256": "62ad79fdd78ad72e0bc173e5ba30dd209d82e5a6f343ef52062f2061a58f100b",
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
    "text": "已知 12=2²×3，18=2×3²。求最小公倍數時，應取各質因數的較大指數，得到哪一個算式？",
    "choices": [
      "2×3²",
      "2²×3²",
      "2²×3",
      "2³×3²"
    ],
    "answerIndex": 1,
    "explanation": "最小公倍數必須包含兩數需要的所有質因數。比較 12=2²×3、18=2×3²，質因數 2、3 的較大指數都為 2，因此得到 2²×3²=36，且 36 可同時被 12、18 整除，所以答案為 36。",
    "steps": [
      "比較 12=2²×3 與 18=2×3²。",
      "2 的較大指數為 2，3 的較大指數為 2。",
      "得到 2²×3²。"
    ],
    "optionAnalysis": [
      {
        "choice": "2×3²",
        "truth": false,
        "reason": "2 只取一次，不能涵蓋 12 中的 2²。"
      },
      {
        "choice": "2²×3²",
        "truth": true,
        "reason": "2 和 3 都取兩數中較大的指數 2。"
      },
      {
        "choice": "2²×3",
        "truth": false,
        "reason": "3 只取一次，不能涵蓋 18 中的 3²。"
      },
      {
        "choice": "2³×3²",
        "truth": false,
        "reason": "2 的指數 3 超過必要值，所得共同倍數不是最小。"
      }
    ],
    "commonMistake": "把較大指數取錯，或取超過必要的指數。",
    "concept": "求 LCM 時，各質因數取兩數中較大指數。",
    "tags": [
      "數與量",
      "最小公倍數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-basic"
    ],
    "authoringIntent": "辨認質因數分解法中最小公倍數的指數選擇。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "24c6e1bcd08bc3b9e821190b293dbc55fda45e660b53d8f56e944d77cad815ce",
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
    "explanation": "共同倍數要同時能被 9、15 整除。45÷9=5、45÷15=3，兩個商都是整數；30、36、60 各至少有一個除法有餘數，所以唯一符合的是 45，兩個整除條件都不能省略。",
    "steps": [
      "逐項檢查是否能被 9 整除。",
      "再檢查同一選項是否也能被 15 整除。",
      "確認只有 45=9×5=15×3。"
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
    "commonMistake": "只檢查候選數是九或十五其中一個的倍數，沒有同時滿足兩條件。",
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
    "contentSha256": "4952bbc3cd2feca5c06879c7e283f2895b8d62fa8754e8b53104c592afa5b3a1",
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
    "explanation": "a 是 b 的倍數，表示 a=b×正整數，所以 a 已同時是 a、b 的倍數。任何 a 的正倍數都不小於 a，因此不可能有更小的正共同倍數，故 lcm(a,b)=a，此結論不需再列舉倍數。",
    "steps": [
      "把 a 是 b 的倍數寫成 a=b×正整數。",
      "確認 a 同時是 a 與 b 的倍數。",
      "利用 a 是自身最小正倍數，判定最小公倍數為 a。"
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
    "contentSha256": "e6859517c8d8bf9bfd2058d6e5a8cd04e39a84e611c762ef4d98d052783a4226",
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
    "explanation": "20=2²×5、30=2×3×5、45=3²×5。最小公倍數收集所有底數並取最大指數，得 2²×3²×5=180；180÷20=9、÷30=6、÷45=4，均為整數。若少取任一質因數或指數，就會有原數無法整除所得數，因此 180 確為最小值。",
    "steps": [
      "分解 20、30、45 的質因數。",
      "對質因數 2、3、5 分別取最大指數。",
      "算得 180，並逐一驗證可被三數整除。"
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
    "contentSha256": "49bdd6fbaee3318d7aedd8ef0cdb4b1dea1485f62ba6124850f49f3d6f6437c7",
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
    "explanation": "逐項反查：lcm(12,15)=60，符合題意；12 與 8、18、24 的最小公倍數分別為 24、36、24。只有 n=15 能補入質因數 5，又不加入超過 60 所需的指數，所以其他選項都不符條件。",
    "steps": [
      "先分解 12=2²×3 與目標 60=2²×3×5。",
      "逐項計算 12 與候選 n 的最小公倍數。",
      "確認只有 n=15 時結果恰為 60。"
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
    "contentSha256": "90b43ee1cffccfe6c8383e68bb788a8cd0f7047dfc508da493d48f052047dda6",
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
    "explanation": "求最小公倍數時，同底數取較大指數。質因數 2 的指數取 max(3,5)=5，質因數 3 取 max(2,1)=2，並保留 5，所以 a=5、b=2，a+b=7。字母代表的是指數，不是質因數底數。",
    "steps": [
      "收集兩式出現的質因數 2、3、5。",
      "對 2、3 分別取較大指數 5、2。",
      "讀出 a=5、b=2，計算 a+b=7。"
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
    "contentSha256": "568ac88093fece09f725a2e699b4548cb02acddade8df7416edf7386bc7188cd",
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
    "explanation": "三個原數都必須整除其最小公倍數 2³×3²×5=360。54=2×3³，所需的 3 指數為 3，超過 360 中的 3²，因此不能整除 360；45、72、120 都能整除，所以 54 不可能是原數，其餘三項才符合必要條件。",
    "steps": [
      "先將給定最小公倍數還原為 360。",
      "檢查每個選項的質因數指數是否超過 2³×3²×5。",
      "發現 54 含 3³，故不可能是原數之一。"
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
    "commonMistake": "只比較候選數小於三百六十，沒有檢查它是否整除最小公倍數。",
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
    "contentSha256": "5a0df17cfcc98e96a3d8d2c52f3db6f932bc46facc1baf857e92de6b0f1f42e8",
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
    "explanation": "18=2×3²、30=2×3×5，所以最大公因數 g=2×3=6，最小公倍數 m=2×3²×5=90。依題意計算 m÷g=90÷6=15，不能把兩者相加。兩個量分別要取共同質因數的小指數與大指數，順序不可混淆。",
    "steps": [
      "由共同質因數的較小指數求 g=6。",
      "由全部質因數的較大指數求 m=90。",
      "代入 m÷g，計算 90÷6=15。"
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
    "commonMistake": "混淆最大公因數與最小公倍數，或把兩個結果誤做加法。",
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
    "contentSha256": "3b3620f44265f8f3303ea9763d57e0f3c8b0b107b289bbe97ade6de010b14ca4",
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
    "explanation": "再次同時閃的秒數必須同時是 8、12 的倍數，且要求最早，所以求最小公倍數。8=2³、12=2²×3，lcm=2³×3=24，因此 24 秒後兩燈再次同時閃，而非把兩個週期相加。",
    "steps": [
      "把再次同步時間轉成 8、12 的共同倍數。",
      "求 lcm(8,12)=24。",
      "確認 24÷8=3、24÷12=2，且是最早正時刻。"
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
    "commonMistake": "找到四十八秒也是共同時刻便作答，沒有選最早的二十四秒。",
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
    "contentSha256": "3a242a09d1ae58e40d0c31de0c226486bc2527ca584f0b384ebf2824b9c9ef00",
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
    "explanation": "下一次同時發車的間隔是 15、20 分鐘的最小公倍數。15=3×5、20=2²×5，lcm=2²×3×5=60 分鐘；上午 8:00 加 60 分鐘是 9:00。在這一小時內兩班車分別經過四個與三個週期，因此確實同時發車。",
    "steps": [
      "把共同發車間隔轉成 15、20 的最小公倍數。",
      "求得共同週期為 60 分鐘。",
      "從上午 8:00 加 60 分鐘，得到 9:00。"
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
    "commonMistake": "只取較大的二十分鐘週期，沒有確認十五分鐘班次也同時發車。",
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
    "contentSha256": "f742327e3bdf9cd12b57ba9cbea6f576bdac7c603742be3cee074a94b28724d3",
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
    "explanation": "三個警示器再次同時響的間隔是 6、10、15 的最小公倍數。分解後取 2×3×5=30 分鐘；下午 1:00 加 30 分鐘得到 1:30，且 30 可被三個週期整除，所以三者都完成整數次週期。",
    "steps": [
      "將再次同步時間轉成三個週期的最小公倍數。",
      "求 lcm(6,10,15)=30 分鐘。",
      "從下午 1:00 加 30 分鐘，得到 1:30。"
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
    "contentSha256": "518c8e58d7b6f84e94a0e8edd5da2a9c6659c434a556037b7919855567045f3b",
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
      "先分解：24=2³×3、36=2²×3²、90=2×3²×5，三式都已完成質因數分解。",
      "收集質因數 2、3、5 並各取最大指數，得到 LCM=2³×3²×5=360，確保包含每個原數所需的質因數。",
      "驗算 360÷24=15、360÷36=10、360÷90=4，商皆為整數，確認 360 是共同倍數。"
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
      "求最小公倍數時漏掉質因數五，所得數便不能被含五的原數整除。",
      "質因數二的指數誤取較小值，混用了最大公因數的選取規則。"
    ],
    "independentReview": {
      "derivedResult": "lcm=360。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "fb8a3bb7e20f595d4ed593841d82481859b81594dd5ac945aec6c012dbc3b853",
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
      "12=2²×3、60=2²×3×5；要使 lcm(12,n)=60，n 必須整除 60 且提供質因數 5。",
      "n 的 2、3 指數不得超過 60 中的指數，5 的指數須恰為 1，因此候選為 5、10、15、20、30、60。",
      "六個候選都小於 100，逐項與 12 合併後的最大指數皆為 2²×3×5，所以最小公倍數均為 60。"
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
      "只列出十五而沒有依題目範圍繼續檢查十五的其他倍數。",
      "列入二十五會帶入質因數五的平方，與指定的最小公倍數不符。"
    ],
    "independentReview": {
      "derivedResult": "n=5、10、15、20、30、60。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "ea4909ffed79f865ed40f4943fa715f12fa9dcac5e432a5754e3a5721fe59de2",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
