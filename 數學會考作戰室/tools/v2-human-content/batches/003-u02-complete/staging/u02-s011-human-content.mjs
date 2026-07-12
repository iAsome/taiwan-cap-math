// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s011-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-fraction-ops",
  "skillId": "fraction-mixed-number",
  "title": "帶分數與假分數：在完整單位和餘數與分數運算間正確轉換",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能互換帶分數與假分數。",
    "能用圖形解釋整數部分與分數部分。",
    "能完成帶分數加減的進位與借位。",
    "能在乘除前把帶分數化成假分數。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-multiply-divide",
      "requiredLevel": "能把分數通分、約分並完成分數加減乘除，且知道整數可寫成分母為1的分數。"
    }
  ],
  "glossary": [
    {
      "term": "真分數",
      "definition": "分子小於分母的正分數。"
    },
    {
      "term": "假分數",
      "definition": "分子大於或等於分母的分數。"
    },
    {
      "term": "帶分數",
      "definition": "整數部分加上一個真分數。"
    },
    {
      "term": "借位",
      "definition": "把一個完整單位改寫成分母/分母。"
    }
  ],
  "notation": [
    {
      "symbol": "a b/c",
      "meaning": "代表a+b/c，不是a×b/c。"
    }
  ],
  "conceptNarrative": [
    "假分數的分子除以分母，商是完整單位數，餘數是剩餘份數。",
    "帶分數化假分數時，整數部分包含每個完整單位的所有分母份數。",
    "加法分數部分超過1要進位；減法分數部分不夠減要借1。",
    "乘除帶分數前化成假分數，可避免把整數與分數分開錯算。"
  ],
  "formalDefinitions": [
    {
      "name": "帶分數轉假分數",
      "statement": "a b/c=(ac+b)/c。"
    },
    {
      "name": "假分數轉帶分數",
      "statement": "分子÷分母的商為整數部分，餘數為新分子。"
    }
  ],
  "formulas": [
    {
      "formula": "a b/c=(ac+b)/c",
      "conditions": [
        "a為非負整數",
        "0≤b<c"
      ],
      "meaning": "帶分數轉換。"
    }
  ],
  "nonApplicableCases": [
    "負帶分數的符號需作用於整個值，本節以清楚括號表示。",
    "分數部分等於1時應進位成整數。",
    "乘除時不能把整數部分與分數部分各自運算。",
    "圖形比較必須使用等大的完整單位。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "辨認目前形式。",
      "check": "是假分數還是帶分數？"
    },
    {
      "step": 2,
      "instruction": "依方向轉換。",
      "check": "乘分母加分子或做除法？"
    },
    {
      "step": 3,
      "instruction": "加減時先通分。",
      "check": "是否需要進位或借位？"
    },
    {
      "step": 4,
      "instruction": "乘除時先化假分數。",
      "check": "是否可約分？"
    },
    {
      "step": 5,
      "instruction": "回到題目要求形式。",
      "check": "要最簡分數、假分數或帶分數？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "17/5 化帶分數。",
      "solutionSteps": [
        "17÷5=3餘2。",
        "分母保持5。"
      ],
      "answer": "3又2/5。"
    },
    {
      "exampleId": "L2",
      "prompt": "4又3/7 化假分數。",
      "solutionSteps": [
        "4×7+3=31。",
        "分母7。"
      ],
      "answer": "31/7。"
    },
    {
      "exampleId": "L3",
      "prompt": "3又5/8+2又7/8。",
      "solutionSteps": [
        "分數和12/8=1又4/8。",
        "整數合併並約分。"
      ],
      "answer": "6又1/2。"
    },
    {
      "exampleId": "L4",
      "prompt": "7-3又4/5。",
      "solutionSteps": [
        "7改寫成6又5/5。",
        "6又5/5-3又4/5=3又1/5。"
      ],
      "answer": "3又1/5。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把3又2/5寫成5/5。",
      "why": "忽略整數部分含三個完整單位。",
      "correction": "算3×5+2。"
    },
    {
      "mistake": "假分數除法的商餘數互換。",
      "why": "未理解商與餘數角色。",
      "correction": "商作整數、餘數作分子。"
    },
    {
      "mistake": "加法超過1不進位。",
      "why": "答案仍是假分數部分。",
      "correction": "把分數部分化帶分數。"
    },
    {
      "mistake": "減法不夠減直接得到負分子。",
      "why": "未借完整單位。",
      "correction": "把1改寫成分母/分母。"
    },
    {
      "mistake": "乘法分開算整數和分數。",
      "why": "把加法結構誤作乘法分配。",
      "correction": "先全部化假分數。"
    },
    {
      "mistake": "圖示完整單位大小不同。",
      "why": "基準單位不一致。",
      "correction": "每個完整圖形必須等大。"
    }
  ],
  "selfCheck": [
    "整數部分乘分母後是否加分子？",
    "假分數除法的餘數是否小於分母？",
    "加法是否需要進位？",
    "減法是否需要借位？",
    "乘除前是否化假分數？"
  ],
  "summary": [
    "帶分數是整數加真分數。",
    "轉假分數用整數×分母+分子。",
    "假分數轉換用商與餘數。",
    "加減處理進借位，乘除先化假分數。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-multiply-divide，需能完成其基本判斷與計算。",
    "next": [
      "繁分數會把分數或帶分數放在主分數線上下。",
      "百分率可與帶分數實際量結合。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s011-v001",
      "u02-s011-v002",
      "u02-s011-v003",
      "u02-s011-v004",
      "u02-s011-v005",
      "u02-s011-v006",
      "u02-s011-v007",
      "u02-s011-v008",
      "u02-s011-v009",
      "u02-s011-v010",
      "u02-s011-v011",
      "u02-s011-v012"
    ],
    "constructedResponseIds": [
      "u02-s011-cr001",
      "u02-s011-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一用反向轉換核對17/5與31/7；加法例題化為52/8=13/2，減法例題化為35/5-19/5=16/5，與3又1/5一致。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "fd81a7d986f1a7a29cd306d41ec137c424f07d0d9a9c4265f41b75a73897dce3",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s011-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "假分數 11/4 化成帶分數為何？",
    "choices": [
      "2又3/4",
      "3又1/4",
      "2又1/4",
      "3又3/4"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：11÷4=2餘3；所以11/4=2又3/4。所以答案是「2又3/4」。",
    "steps": [
      "11÷4=2餘3",
      "所以11/4=2又3/4"
    ],
    "optionAnalysis": [
      {
        "choice": "2又3/4",
        "truth": true,
        "reason": "2又3/4正確。"
      },
      {
        "choice": "3又1/4",
        "truth": false,
        "reason": "商誤成3。"
      },
      {
        "choice": "2又1/4",
        "truth": false,
        "reason": "餘數誤成1。"
      },
      {
        "choice": "3又3/4",
        "truth": false,
        "reason": "商與餘數都錯。"
      }
    ],
    "commonMistake": "把分子直接拆成整數部分與分數部分。",
    "concept": "假分數化帶分數用分子除以分母。",
    "tags": [
      "數與量",
      "帶分數與假分數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-multiply-divide"
    ],
    "authoringIntent": "假分數轉帶分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cb38e6f4eac8e2ff4bf6c691455bee88fd830ec4c7068da1142a47830a3f2508",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s011-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "帶分數 3又2/5 化成假分數為何？",
    "choices": [
      "13/5",
      "17/5",
      "15/5",
      "11/5"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：3×5+2=17；分母仍為5，所以17/5。所以答案是「17/5」。",
    "steps": [
      "3×5+2=17",
      "分母仍為5，所以17/5"
    ],
    "optionAnalysis": [
      {
        "choice": "13/5",
        "truth": false,
        "reason": "漏加部分分子。"
      },
      {
        "choice": "17/5",
        "truth": true,
        "reason": "17/5正確。"
      },
      {
        "choice": "15/5",
        "truth": false,
        "reason": "只把整數化成分數。"
      },
      {
        "choice": "11/5",
        "truth": false,
        "reason": "把3×3+2錯算。"
      }
    ],
    "commonMistake": "整數部分只與分子相加，未乘分母。",
    "concept": "帶分數化假分數為(整數×分母+分子)/分母。",
    "tags": [
      "數與量",
      "帶分數與假分數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-multiply-divide"
    ],
    "authoringIntent": "帶分數轉假分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8b8eb3bee9681e1390c9595e1ae3c6dc8e584f974cf2c0bfb6b0cfeffce06d61",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s011-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個假分數等於 1又3/7？",
    "choices": [
      "8/7",
      "9/7",
      "10/7",
      "11/7"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：1×7+3=10；所以1又3/7=10/7。所以答案是「10/7」。",
    "steps": [
      "1×7+3=10",
      "所以1又3/7=10/7"
    ],
    "optionAnalysis": [
      {
        "choice": "8/7",
        "truth": false,
        "reason": "只加1與7。"
      },
      {
        "choice": "9/7",
        "truth": false,
        "reason": "分子少1。"
      },
      {
        "choice": "10/7",
        "truth": true,
        "reason": "10/7正確。"
      },
      {
        "choice": "11/7",
        "truth": false,
        "reason": "分子多1。"
      }
    ],
    "commonMistake": "分母也跟著改變。",
    "concept": "等值轉換時分母保持不變。",
    "tags": [
      "數與量",
      "帶分數與假分數",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-multiply-divide"
    ],
    "authoringIntent": "辨認等值形式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "41efe2e42e734da78c001544e2442ac69fde62b22eb2e56e849209e8891d9a88",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s011-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "把 2又5/6 化成假分數，再判斷它位於哪兩個相鄰整數之間。下列哪一個敘述正確？",
    "choices": [
      "13/6，介於 1 和 2 之間",
      "15/6，介於 2 和 3 之間",
      "16/6，介於 2 和 3 之間",
      "17/6，介於 2 和 3 之間"
    ],
    "answerIndex": 3,
    "explanation": "先以「整數×分母＋分子」得到 17/6，再和 12/6、18/6 比較，可知介於 2 和 3 之間。",
    "steps": [
      "2×6+5=17，所以 2又5/6=17/6。",
      "2=12/6，3=18/6。",
      "12/6＜17/6＜18/6。"
    ],
    "optionAnalysis": [
      {
        "choice": "13/6，介於 1 和 2 之間",
        "truth": false,
        "reason": "13/6 不是 2又5/6 的轉換結果。"
      },
      {
        "choice": "15/6，介於 2 和 3 之間",
        "truth": false,
        "reason": "15/6=2又1/2，不等於原數。"
      },
      {
        "choice": "16/6，介於 2 和 3 之間",
        "truth": false,
        "reason": "16/6=2又2/3，不等於原數。"
      },
      {
        "choice": "17/6，介於 2 和 3 之間",
        "truth": true,
        "reason": "17/6 等於 2又5/6，且介於 2 和 3 之間。"
      }
    ],
    "commonMistake": "只做 2+5，沒有以整數部分乘分母。",
    "concept": "帶分數化假分數後可用相鄰整數的同分母表示判斷位置。",
    "tags": [
      "數與量",
      "帶分數與假分數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-multiply-divide"
    ],
    "authoringIntent": "結合帶分數轉換與大小定位。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "859d2747a478fda4856b719450da6bf0110f093c4a569ba81fe0b15346aa773c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s011-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "假分數 23/5 化成帶分數後，哪一個表示正確？",
    "choices": [
      "4又3/5",
      "4又2/5",
      "5又3/5",
      "3又4/5"
    ],
    "answerIndex": 0,
    "explanation": "用 23 除以 5，商 4 是整數部分，餘數 3 是分子，分母仍為 5，所以為 4又3/5。",
    "steps": [
      "計算 23÷5=4 餘 3。",
      "將商寫成整數部分，餘數寫在原分母 5 上。"
    ],
    "optionAnalysis": [
      {
        "choice": "4又3/5",
        "truth": true,
        "reason": "4×5+3=23。"
      },
      {
        "choice": "4又2/5",
        "truth": false,
        "reason": "4×5+2=22，不等於 23。"
      },
      {
        "choice": "5又3/5",
        "truth": false,
        "reason": "整數部分應是除法的商 4，不是 5。"
      },
      {
        "choice": "3又4/5",
        "truth": false,
        "reason": "3×5+4=19，不等於 23。"
      }
    ],
    "commonMistake": "把除數 5 當成整數部分，或把商與餘數對調。",
    "concept": "假分數化帶分數時，商為整數部分、餘數為分子。",
    "tags": [
      "數與量",
      "帶分數與假分數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-multiply-divide"
    ],
    "authoringIntent": "由除法的商與餘數完成假分數轉換。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5ab8d8446bde2cbc7136de1a13e5e30a8c8a8a9687e15aa8d78dbf39ed558123",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s011-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "fig-u02-s011-v006",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "觀察圖中三個相同大小的長方形：前兩個全部塗色，第三個分成三等份且只有一份塗色。全部塗色部分表示哪一個數？",
    "choices": [
      "1又2/3",
      "2又1/3",
      "2又2/3",
      "3又1/3"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：前兩個完整長方形表示2。；第三個長方形塗1份、共3等份，表示1/3。；合計2+1/3=2又1/3。。所以答案是「2又1/3」。",
    "steps": [
      "前兩個完整長方形表示2。",
      "第三個長方形塗1份、共3等份，表示1/3。",
      "合計2+1/3=2又1/3。"
    ],
    "optionAnalysis": [
      {
        "choice": "1又2/3",
        "truth": false,
        "reason": "只計成一個完整單位，漏掉另一個完整長方形。"
      },
      {
        "choice": "2又1/3",
        "truth": true,
        "reason": "兩個完整單位加三分之一，正確。"
      },
      {
        "choice": "2又2/3",
        "truth": false,
        "reason": "第三個長方形只塗一份，不是三分之二。"
      },
      {
        "choice": "3又1/3",
        "truth": false,
        "reason": "把三個外框都算成完整塗色，與圖不符。"
      }
    ],
    "commonMistake": "看到三個外框就把第三個也當成完整單位，忽略它只有三分之一塗色。",
    "concept": "帶分數由完整單位數與不足一個單位的真分數組成。",
    "tags": [
      "數與量",
      "帶分數與假分數",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-multiply-divide"
    ],
    "authoringIntent": "從實際塗色模型辨認帶分數的整數部分與分數部分。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5403718a4207c8a17ae2e8610d1f7b277387f796037d8845742d29d27ac61c51",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s011-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 3又a/8=27/8，則 a 等於多少？",
    "choices": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：3又a/8=(24+a)/8；24+a=27，所以a=3。所以答案是「3」。",
    "steps": [
      "3又a/8=(24+a)/8",
      "24+a=27，所以a=3"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "a=1只得25/8。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "a=2只得26/8。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "a=3得27/8。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "a=4得28/8。"
      }
    ],
    "commonMistake": "把整數3直接與分子27相減，不先換成24/8。",
    "concept": "整數部分要換成相同分母。",
    "tags": [
      "數與量",
      "帶分數與假分數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-multiply-divide"
    ],
    "authoringIntent": "由等值形式求未知分子。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bccc157b4f266b75c172e9b6850cb0714192e906a2db44276a1ec71594573973",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s011-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "計算 5-2又7/9，結果為何？",
    "choices": [
      "2又7/9",
      "3又2/9",
      "3又7/9",
      "2又2/9"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：5可借1寫成4又9/9；4又9/9-2又7/9=2又2/9。所以答案是「2又2/9」。",
    "steps": [
      "5可借1寫成4又9/9",
      "4又9/9-2又7/9=2又2/9"
    ],
    "optionAnalysis": [
      {
        "choice": "2又7/9",
        "truth": false,
        "reason": "未做減法。"
      },
      {
        "choice": "3又2/9",
        "truth": false,
        "reason": "整數部分錯。"
      },
      {
        "choice": "3又7/9",
        "truth": false,
        "reason": "分數部分未減。"
      },
      {
        "choice": "2又2/9",
        "truth": true,
        "reason": "2又2/9正確。"
      }
    ],
    "commonMistake": "整數減帶分數時無法借1。",
    "concept": "整數可改寫成前一整數加分母/分母。",
    "tags": [
      "數與量",
      "帶分數與假分數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-multiply-divide"
    ],
    "authoringIntent": "借位的帶分數減法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bc98926086ba102a70fda5d6c9b9a2695c8607083aba3377c3bdf4d747d87dde",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s011-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2又3/4×1又1/3 等於多少？",
    "choices": [
      "3又2/3",
      "3又1/12",
      "2又11/12",
      "4又1/12"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：2又3/4=11/4，1又1/3=4/3；11/4×4/3=11/3=3又2/3。所以答案是「3又2/3」。",
    "steps": [
      "2又3/4=11/4，1又1/3=4/3",
      "11/4×4/3=11/3=3又2/3"
    ],
    "optionAnalysis": [
      {
        "choice": "3又2/3",
        "truth": true,
        "reason": "3又2/3正確。"
      },
      {
        "choice": "3又1/12",
        "truth": false,
        "reason": "分數部分直接相乘。"
      },
      {
        "choice": "2又11/12",
        "truth": false,
        "reason": "整數與分數分開乘錯。"
      },
      {
        "choice": "4又1/12",
        "truth": false,
        "reason": "乘積估值過大。"
      }
    ],
    "commonMistake": "帶分數直接把整數部分與分數部分分別相乘。",
    "concept": "乘除前先化為假分數。",
    "tags": [
      "數與量",
      "帶分數與假分數",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-multiply-divide"
    ],
    "authoringIntent": "帶分數乘法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3b995c21609be8b6d84360d14093e1043a670865abf68f86ec6ed4f4e0dd10f0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s011-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一桶水有 6又1/2 公升，倒出 2又3/4 公升後剩多少？",
    "choices": [
      "3又1/4 公升",
      "3又3/4 公升",
      "4又1/4 公升",
      "4又3/4 公升"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：6又1/2=6又2/4；6又2/4-2又3/4需借1，得5又6/4-2又3/4=3又3/4。所以答案是「3又3/4 公升」。",
    "steps": [
      "6又1/2=6又2/4",
      "6又2/4-2又3/4需借1，得5又6/4-2又3/4=3又3/4"
    ],
    "optionAnalysis": [
      {
        "choice": "3又1/4 公升",
        "truth": false,
        "reason": "借位或分數差錯。"
      },
      {
        "choice": "3又3/4 公升",
        "truth": true,
        "reason": "3又3/4正確。"
      },
      {
        "choice": "4又1/4 公升",
        "truth": false,
        "reason": "少減1公升。"
      },
      {
        "choice": "4又3/4 公升",
        "truth": false,
        "reason": "分數未相減。"
      }
    ],
    "commonMistake": "分數部分2/4小於3/4時直接得到負分數。",
    "concept": "帶分數減法可借1個完整單位。",
    "tags": [
      "數與量",
      "帶分數與假分數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-multiply-divide"
    ],
    "authoringIntent": "容量剩餘量。",
    "literacyContextNecessity": "起始容量與倒出容量都是帶分數，『剩』明確指定減法與借位。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e343784f2ed8bfd459b1665c1cc8774a081068d0c714ffc3ff9fb35864f4f189",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s011-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "每盒彩紙有 1又1/4 平方公尺，4 盒共有多少平方公尺？",
    "choices": [
      "4又1/4",
      "4又1/2",
      "5",
      "5又1/4"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：1又1/4=5/4；5/4×4=5。所以答案是「5」。",
    "steps": [
      "1又1/4=5/4",
      "5/4×4=5"
    ],
    "optionAnalysis": [
      {
        "choice": "4又1/4",
        "truth": false,
        "reason": "只把整數部分乘4。"
      },
      {
        "choice": "4又1/2",
        "truth": false,
        "reason": "分數部分乘錯。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "總面積5平方公尺。"
      },
      {
        "choice": "5又1/4",
        "truth": false,
        "reason": "多加1/4。"
      }
    ],
    "commonMistake": "整數倍只乘帶分數的整數部分。",
    "concept": "帶分數乘整數先化假分數最穩定。",
    "tags": [
      "數與量",
      "帶分數與假分數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-multiply-divide"
    ],
    "authoringIntent": "帶分數倍量。",
    "literacyContextNecessity": "每盒面積與盒數共同決定總面積，單位平方公尺必須保留。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "aa09d5d8bfb39eb707b2981fde567d367129e354d38cc368944a2192c6a5cfb1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s011-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "步道全長 8又1/3 公里，已走 5又5/6 公里，還剩多少公里？",
    "choices": [
      "2又1/3",
      "3又1/2",
      "2又5/6",
      "2又1/2"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：8又1/3=8又2/6；借位為7又8/6，減5又5/6=2又3/6=2又1/2。所以答案是「2又1/2」。",
    "steps": [
      "8又1/3=8又2/6",
      "借位為7又8/6，減5又5/6=2又3/6=2又1/2"
    ],
    "optionAnalysis": [
      {
        "choice": "2又1/3",
        "truth": false,
        "reason": "未正確借位。"
      },
      {
        "choice": "3又1/2",
        "truth": false,
        "reason": "差距過大。"
      },
      {
        "choice": "2又5/6",
        "truth": false,
        "reason": "分數部分錯。"
      },
      {
        "choice": "2又1/2",
        "truth": true,
        "reason": "2又1/2正確。"
      }
    ],
    "commonMistake": "1/3直接與5/6相減。",
    "concept": "異分母且需借位時先通分再借1。",
    "tags": [
      "數與量",
      "帶分數與假分數",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-multiply-divide"
    ],
    "authoringIntent": "路程剩餘。",
    "literacyContextNecessity": "步道全長、已走距離與「還剩」共同決定帶分數減法；刪除情境就無法判定兩個帶分數的先後角色。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4146216af394bc6bad981aec41582d99431ed879fba78a954bddacee1063bf66",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s011-cr001",
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "計算 6又1/3-2又5/6，並用假分數方法與借位方法各做一次。",
    "requiredWork": [
      "兩種方法。",
      "結果化最簡帶分數。"
    ],
    "fullCreditSolution": [
      "假分數法：19/3-17/6=38/6-17/6=21/6=3又1/2。",
      "借位法：6又2/6改為5又8/6，減2又5/6=3又3/6=3又1/2。"
    ],
    "alternativeSolutions": [
      "兩種方法次序可交換。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩種方法與3又1/2均正確。"
      },
      {
        "score": 2,
        "criteria": "一種完整、另一種有小錯。"
      },
      {
        "score": 1,
        "criteria": "只用一種方法得到正確答案。"
      },
      {
        "score": 0,
        "criteria": "未通分或借位錯誤。"
      }
    ],
    "scoringNotes": [
      "3又1/2與7/2均可作答案，但須依題意呈現帶分數。"
    ],
    "commonErrors": [
      "假分數法把6又1/3誤化成19/3以外的分數。",
      "借位時只把整數6改成5，卻沒有把借來的1改成6/6加入分數部分。",
      "最後3/6未約成1/2。"
    ],
    "independentReview": {
      "derivedResult": "3又1/2。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "8cb714470e0f5ac5d71e807ad5d44b7d0328e14158a48aa6bb6b7af996a0e9b9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s011-cr002",
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-mixed-number",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "一條繩長 12又1/2 公尺，先剪下 3又3/4 公尺，再把剩下的平均剪成 7 段。每段多長？",
    "requiredWork": [
      "先求剩餘。",
      "再除以7。",
      "單位完整。"
    ],
    "fullCreditSolution": [
      "12又1/2-3又3/4=12又2/4-3又3/4=8又3/4=35/4。",
      "35/4÷7=35/28=5/4=1又1/4。"
    ],
    "alternativeSolutions": [
      "可全部化假分數：(25/2-15/4)÷7。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "剩餘35/4與每段1又1/4公尺完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但中間量略缺。"
      },
      {
        "score": 1,
        "criteria": "第一步正確但除法錯誤。"
      },
      {
        "score": 0,
        "criteria": "未先減已剪長度。"
      }
    ],
    "scoringNotes": [
      "每段長度為正且7段乘回剩餘量。"
    ],
    "commonErrors": [
      "把總長直接除7。",
      "帶分數減法未借位。"
    ],
    "independentReview": {
      "derivedResult": "每段1又1/4公尺。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "7d265fb4bdd4cf114b57498a6dbe644c0bf8deb039990afab60bd980e2fac5e5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "fig-u02-s011-v006",
    "unitId": "u02",
    "skillId": "fraction-mixed-number",
    "altText": "三個相同長方形水平排列。前兩個長方形全部塗滿；第三個長方形被分成三個等寬部分，只有左側一份塗色。",
    "drawingSpec": {
      "canvas": "900×300，viewBox 0 0 900 300",
      "units": "三個外框尺寸均為220×120，左上角依序為 (70,75)、(340,75)、(610,75)",
      "firstUnit": "第一長方形全部填充斜線紋理，邊框3畫素實線",
      "secondUnit": "第二長方形全部填充點狀紋理，邊框3畫素實線",
      "thirdUnit": "第三長方形以兩條垂直實線在x=683.33與756.67處分成三等份，僅第一份填充交叉紋理",
      "labels": "上方只標「相同大小的完整單位」；下方不得標1、1或1/3，讓學生由塗色與三等分自行判讀。",
      "lineStyle": "外框3畫素、分割線2畫素，全部實線；紋理區分不依賴顏色",
      "proportionNote": "三個完整單位必須同寬同高，第三個確實三等分",
      "answerLeakNote": "不得直接寫出1、1、1/3或總量；答案只能由兩個全塗單位與第三單位的一格塗色推得。",
      "accessibility": "altText說明兩個完整單位加第三單位的三分之一"
    },
    "svgPath": "figures/u02/fig-u02-s011-v006.svg",
    "svgAssertions": [
      "x=\"70\" y=\"75\" width=\"220\" height=\"120\"",
      "x=\"340\" y=\"75\" width=\"220\" height=\"120\"",
      "x=\"610\" y=\"75\" width=\"220\" height=\"120\"",
      "x1=\"683.33\"",
      "x1=\"756.67\"",
      "width=\"73.33\" height=\"120\" fill=\"url(#cross)\""
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
      "reviewNote": "三個外框均為220×120；第三框兩條分割線位於三等分位置，只有第一格填充。圖面不再印出1、1與1/3，避免文字直接揭示帶分數答案。",
      "reviewedAt": "2026-07-12",
      "decision": "pass"
    },
    "reviewStatus": "independently-reviewed",
    "contentSha256": "29711cb0a11bbd0d6e78a7701ee66fe75b146ef1692e0d68f304df1b3353afdd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];
