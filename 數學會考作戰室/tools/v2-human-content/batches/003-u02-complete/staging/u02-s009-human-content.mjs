// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s009-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-fraction-ops",
  "skillId": "fraction-add-subtract",
  "title": "分數加減：先統一單位分數，再處理符號和括號與剩餘量",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能完成同分母與異分母加減。",
    "能處理負分數與減去負分數。",
    "能計算含括號的多步分數式。",
    "能把完成、使用與剩餘情境翻成正確加減。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-compare",
      "requiredLevel": "能找共同分母並理解等值分數。"
    }
  ],
  "glossary": [
    {
      "term": "公分母",
      "definition": "能被各分母整除的共同分母。"
    },
    {
      "term": "通分",
      "definition": "把分數改寫成相同分母。"
    },
    {
      "term": "約分",
      "definition": "分子分母同除公因數化簡。"
    },
    {
      "term": "相反數",
      "definition": "與原數相加為0的數。"
    }
  ],
  "notation": [
    {
      "symbol": "a/b±c/d",
      "meaning": "先找bd或更小公分母。"
    }
  ],
  "conceptNarrative": [
    "分母代表單位分數的大小；單位不同不能直接合併，所以異分母加減先通分。",
    "通分只改寫形式，不改變分數值。",
    "負分數的分子可按整數加減規則運算。",
    "減去負分數等於加上正分數；多層括號由內向外。"
  ],
  "formalDefinitions": [
    {
      "name": "異分母加減",
      "statement": "改寫成同分母後加減分子，分母不變。"
    },
    {
      "name": "最簡分數",
      "statement": "分子分母最大公因數為1。"
    }
  ],
  "formulas": [
    {
      "formula": "a/b+c/d=(ad+bc)/bd",
      "conditions": [
        "b、d非0"
      ],
      "meaning": "通用加法公式。"
    },
    {
      "formula": "a/b-c/d=(ad-bc)/bd",
      "conditions": [
        "b、d非0"
      ],
      "meaning": "通用減法公式。"
    }
  ],
  "nonApplicableCases": [
    "分母不能直接相加或相減。",
    "通分後分母保持共同分母。",
    "帶分數若需借位要先統一分母。",
    "情境中的『剩下』通常要用1或總量減去已用量。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "辨認加法、減法與括號。",
      "check": "文字是增加、使用還是剩餘？"
    },
    {
      "step": 2,
      "instruction": "求最小公分母。",
      "check": "是否可用LCM？"
    },
    {
      "step": 3,
      "instruction": "通分。",
      "check": "分數值是否保持？"
    },
    {
      "step": 4,
      "instruction": "加減分子並保留分母。",
      "check": "符號是否正確？"
    },
    {
      "step": 5,
      "instruction": "約分或化帶分數並驗算。",
      "check": "結果大小是否合理？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "2/9+5/12。",
      "solutionSteps": [
        "公分母36。",
        "8/36+15/36=23/36。"
      ],
      "answer": "23/36。"
    },
    {
      "exampleId": "L2",
      "prompt": "7/10-2/15。",
      "solutionSteps": [
        "公分母30。",
        "21/30-4/30=17/30。"
      ],
      "answer": "17/30。"
    },
    {
      "exampleId": "L3",
      "prompt": "-5/8+3/4。",
      "solutionSteps": [
        "3/4=6/8。",
        "-5/8+6/8=1/8。"
      ],
      "answer": "1/8。"
    },
    {
      "exampleId": "L4",
      "prompt": "1-[3/5-(1/4+1/10)]。",
      "solutionSteps": [
        "內括號=7/20。",
        "3/5-7/20=1/4，再用1減。"
      ],
      "answer": "3/4。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "分母直接相加。",
      "why": "把不同單位分數當同單位。",
      "correction": "先通分。"
    },
    {
      "mistake": "通分只乘分母。",
      "why": "沒有等比例改分子。",
      "correction": "分子分母同乘。"
    },
    {
      "mistake": "減負數仍保留減號。",
      "why": "未轉成加相反數。",
      "correction": "a-(-b)=a+b。"
    },
    {
      "mistake": "括號順序錯。",
      "why": "由外向內算。",
      "correction": "先處理最內層。"
    },
    {
      "mistake": "結果未約分。",
      "why": "答案形式不完整。",
      "correction": "以GCD約分。"
    },
    {
      "mistake": "剩餘比例只算已完成量。",
      "why": "問句方向錯。",
      "correction": "用整體1減累計部分。"
    }
  ],
  "selfCheck": [
    "公分母選得正確嗎？",
    "每個分子是否同步放大？",
    "負號與括號是否保留？",
    "結果是否約分？",
    "情境結果是否介於合理範圍？"
  ],
  "summary": [
    "分數加減先統一分母。",
    "通分不改變值。",
    "負號依整數規則處理。",
    "剩餘量通常需要用整體減已用量。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-compare，需能完成其基本判斷與計算。",
    "next": [
      "分數的乘法和除法不需要通分。",
      "帶分數加減會增加借位與進位。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s009-v001",
      "u02-s009-v002",
      "u02-s009-v003",
      "u02-s009-v004",
      "u02-s009-v005",
      "u02-s009-v006",
      "u02-s009-v007",
      "u02-s009-v008",
      "u02-s009-v009",
      "u02-s009-v010",
      "u02-s009-v011",
      "u02-s009-v012"
    ],
    "constructedResponseIds": [
      "u02-s009-cr001",
      "u02-s009-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "以共同分母重新計算四個例題，並用小數估值檢查結果方向；負號、括號與整體1的角色均獨立核對。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "c308268d84edc08474e06cf87b60dbb5faa089eed382bba839e7a3fc5d6f69b5",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s009-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "1/3+1/6 等於多少？",
    "choices": [
      "1/2",
      "2/9",
      "1/9",
      "2/3"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：1/3=2/6；2/6+1/6=3/6=1/2。所以答案是「1/2」。",
    "steps": [
      "1/3=2/6",
      "2/6+1/6=3/6=1/2"
    ],
    "optionAnalysis": [
      {
        "choice": "1/2",
        "truth": true,
        "reason": "通分後得1/2。"
      },
      {
        "choice": "2/9",
        "truth": false,
        "reason": "分子分母分別相加的錯誤。"
      },
      {
        "choice": "1/9",
        "truth": false,
        "reason": "把1/3減1/6。"
      },
      {
        "choice": "2/3",
        "truth": false,
        "reason": "未約分且數值過大。"
      }
    ],
    "commonMistake": "分子、分母直接相加。",
    "concept": "異分母分數先通分再加減。",
    "tags": [
      "數與量",
      "分數加減",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "基本異分母加法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ee1c80369e612d0b37929bf9c8983c58699857ea6903972c195ee54a0b2db940",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5/8-1/4 等於多少？",
    "choices": [
      "1/8",
      "3/8",
      "4/4",
      "1/2"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：1/4=2/8；5/8-2/8=3/8。所以答案是「3/8」。",
    "steps": [
      "1/4=2/8",
      "5/8-2/8=3/8"
    ],
    "optionAnalysis": [
      {
        "choice": "1/8",
        "truth": false,
        "reason": "只減分子得到4/8後又錯約。"
      },
      {
        "choice": "3/8",
        "truth": true,
        "reason": "3/8正確。"
      },
      {
        "choice": "4/4",
        "truth": false,
        "reason": "分母不能相減成4。"
      },
      {
        "choice": "1/2",
        "truth": false,
        "reason": "5/8-2/8不是4/8。"
      }
    ],
    "commonMistake": "沒有把1/4通分成2/8。",
    "concept": "同分母後只加減分子。",
    "tags": [
      "數與量",
      "分數加減",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "基本分數減法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "578b3dc6442800157103f37d46406ffc46688364a89279ab936d6cbd8c5fdecd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-2/5+1/5 等於多少？",
    "choices": [
      "3/5",
      "-3/5",
      "-1/5",
      "1/5"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：同分母相加分子：-2+1=-1；結果為-1/5。所以答案是「-1/5」。",
    "steps": [
      "同分母相加分子：-2+1=-1",
      "結果為-1/5"
    ],
    "optionAnalysis": [
      {
        "choice": "3/5",
        "truth": false,
        "reason": "把符號忽略後相加。"
      },
      {
        "choice": "-3/5",
        "truth": false,
        "reason": "把+1誤作-1。"
      },
      {
        "choice": "-1/5",
        "truth": true,
        "reason": "-1/5正確。"
      },
      {
        "choice": "1/5",
        "truth": false,
        "reason": "只取正數方向。"
      }
    ],
    "commonMistake": "負分數相加時只看絕對值。",
    "concept": "同分母帶號分數按整數規則合併分子。",
    "tags": [
      "數與量",
      "分數加減",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "處理帶負號的分數加法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "38a6fa807c37790b3fa2f8ef90bdf394e947a250e3c9646adce2ee956a05448c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "3/4-(1/2-1/8) 等於多少？",
    "choices": [
      "1/8",
      "1/4",
      "7/8",
      "3/8"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：括號內1/2-1/8=3/8；3/4-3/8=6/8-3/8=3/8。所以答案是「3/8」。",
    "steps": [
      "括號內1/2-1/8=3/8",
      "3/4-3/8=6/8-3/8=3/8"
    ],
    "optionAnalysis": [
      {
        "choice": "1/8",
        "truth": false,
        "reason": "把3/4與括號首項直接相減。"
      },
      {
        "choice": "1/4",
        "truth": false,
        "reason": "錯把括號內算成1/2。"
      },
      {
        "choice": "7/8",
        "truth": false,
        "reason": "錯把減括號當加括號。"
      },
      {
        "choice": "3/8",
        "truth": true,
        "reason": "3/8正確。"
      }
    ],
    "commonMistake": "忽略括號內先算。",
    "concept": "有括號的分數運算先處理括號。",
    "tags": [
      "數與量",
      "分數加減",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "含括號的加減。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c424078aca39df82f30bb8dbbb313131cb4a799f3d6869ec8ac1dc945d9efef7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-3/4+5/6 等於多少？",
    "choices": [
      "1/12",
      "-1/12",
      "19/12",
      "-19/12"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：通分為-9/12+10/12；結果1/12。所以答案是「1/12」。",
    "steps": [
      "通分為-9/12+10/12",
      "結果1/12"
    ],
    "optionAnalysis": [
      {
        "choice": "1/12",
        "truth": true,
        "reason": "-9+10=1，得1/12。"
      },
      {
        "choice": "-1/12",
        "truth": false,
        "reason": "符號方向相反。"
      },
      {
        "choice": "19/12",
        "truth": false,
        "reason": "把絕對值相加。"
      },
      {
        "choice": "-19/12",
        "truth": false,
        "reason": "相加後保留負號。"
      }
    ],
    "commonMistake": "不同號分數直接把絕對值相加。",
    "concept": "通分後依整數加法處理分子。",
    "tags": [
      "數與量",
      "分數加減",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "異號分數相加。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ceb5424134cc16fce7475fe3f1ffafd3224e3b958b4099959352b405586e53ef",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2又1/3+1又5/6 等於多少？",
    "choices": [
      "3又1/6",
      "4又1/6",
      "4又5/6",
      "3又5/6"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：2又1/3=2又2/6；整數部分3，分數2/6+5/6=7/6=1又1/6，合計4又1/6。所以答案是「4又1/6」。",
    "steps": [
      "2又1/3=2又2/6",
      "整數部分3，分數2/6+5/6=7/6=1又1/6，合計4又1/6"
    ],
    "optionAnalysis": [
      {
        "choice": "3又1/6",
        "truth": false,
        "reason": "漏掉分數進位。"
      },
      {
        "choice": "4又1/6",
        "truth": true,
        "reason": "4又1/6正確。"
      },
      {
        "choice": "4又5/6",
        "truth": false,
        "reason": "分數相加錯誤。"
      },
      {
        "choice": "3又5/6",
        "truth": false,
        "reason": "沒有進位且分數錯。"
      }
    ],
    "commonMistake": "分數和超過1時忘記進位。",
    "concept": "帶分數加法需處理分數部分的進位。",
    "tags": [
      "數與量",
      "分數加減",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "帶分數加法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7df5033dd5ea77c8bab10e29fe66307912e7cf7db0d8bc607300e388401bfdac",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x=5/12-(-7/18)，則 x 等於多少？",
    "choices": [
      "1/36",
      "1/18",
      "29/36",
      "-29/36"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：減負數變加：5/12+7/18；通分36得15/36+14/36=29/36。所以答案是「29/36」。",
    "steps": [
      "減負數變加：5/12+7/18",
      "通分36得15/36+14/36=29/36"
    ],
    "optionAnalysis": [
      {
        "choice": "1/36",
        "truth": false,
        "reason": "把分子相減。"
      },
      {
        "choice": "1/18",
        "truth": false,
        "reason": "通分或符號處理錯。"
      },
      {
        "choice": "29/36",
        "truth": true,
        "reason": "29/36正確。"
      },
      {
        "choice": "-29/36",
        "truth": false,
        "reason": "結果應為正。"
      }
    ],
    "commonMistake": "看到兩個負號仍做減法。",
    "concept": "減去負分數等於加上其相反數。",
    "tags": [
      "數與量",
      "分數加減",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "處理減負分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "70a0796d66d9e0156047f801047c319183da9e2f89c00bee7944333ce593f87b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "計算 1-［2/3-(1/4+1/6)］。",
    "choices": [
      "1/4",
      "5/12",
      "7/12",
      "3/4"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：1/4+1/6=5/12；2/3-5/12=8/12-5/12=1/4；1-1/4=3/4。所以答案是「3/4」。",
    "steps": [
      "1/4+1/6=5/12",
      "2/3-5/12=8/12-5/12=1/4；1-1/4=3/4"
    ],
    "optionAnalysis": [
      {
        "choice": "1/4",
        "truth": false,
        "reason": "這是中括號內的值。"
      },
      {
        "choice": "5/12",
        "truth": false,
        "reason": "通分或最後一步錯。"
      },
      {
        "choice": "7/12",
        "truth": false,
        "reason": "漏減一部分。"
      },
      {
        "choice": "3/4",
        "truth": true,
        "reason": "3/4正確。"
      }
    ],
    "commonMistake": "完成中括號後忘記外層的1減。",
    "concept": "多層括號由內而外計算。",
    "tags": [
      "數與量",
      "分數加減",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "多層分數加減。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "425d82983300971303744bc7a6b722c20c2f663475faa10bed71236a06346596",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "a=7/10、b=-3/5，則 a-b 的值為何？",
    "choices": [
      "13/10",
      "1/10",
      "-13/10",
      "4/10"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：a-b=7/10-(-6/10)；=13/10。所以答案是「13/10」。",
    "steps": [
      "a-b=7/10-(-6/10)",
      "=13/10"
    ],
    "optionAnalysis": [
      {
        "choice": "13/10",
        "truth": true,
        "reason": "減負得加，13/10正確。"
      },
      {
        "choice": "1/10",
        "truth": false,
        "reason": "把-3/5直接加成-6/10。"
      },
      {
        "choice": "-13/10",
        "truth": false,
        "reason": "a-b是減去負數，結果應為正；-13/10的符號錯誤。"
      },
      {
        "choice": "4/10",
        "truth": false,
        "reason": "只做7-3。"
      }
    ],
    "commonMistake": "把 b 的負號忽略或未轉為同分母。",
    "concept": "代數式中的減法也要保留括號與符號。",
    "tags": [
      "數與量",
      "分數加減",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "分數代入與減法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "72c1a64cee54414c0ff1709c00d0b312ad30fd6d050f67881a31a3fa9d000830",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "水箱原有全容量的 3/5，上午用掉 1/4 全容量，下午補進 1/10 全容量。最後有全容量的多少？",
    "choices": [
      "7/20",
      "9/20",
      "11/20",
      "13/20"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：3/5-1/4+1/10=12/20-5/20+2/20；=9/20。所以答案是「9/20」。",
    "steps": [
      "3/5-1/4+1/10=12/20-5/20+2/20",
      "=9/20"
    ],
    "optionAnalysis": [
      {
        "choice": "7/20",
        "truth": false,
        "reason": "漏算補水。"
      },
      {
        "choice": "9/20",
        "truth": true,
        "reason": "9/20正確。"
      },
      {
        "choice": "11/20",
        "truth": false,
        "reason": "把用掉當加。"
      },
      {
        "choice": "13/20",
        "truth": false,
        "reason": "把所有量相加。"
      }
    ],
    "commonMistake": "把『用掉』也當成正加法。",
    "concept": "情境變化要先決定正負再通分。",
    "tags": [
      "數與量",
      "分數加減",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "水量的分數加減。",
    "literacyContextNecessity": "初始水量、用掉與補進三筆相對全容量的資料都參與最後量計算。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "34f23bf30cb5003ee87efa979df2859e18bda451c7d3a9792d998c2cc6d7cc1e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一段路第一天完成 2/7，第二天完成 3/14。兩天後尚未完成的比例是多少？",
    "choices": [
      "5/14",
      "6/14",
      "7/14",
      "9/14"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：已完成2/7+3/14=4/14+3/14=7/14；未完成1-7/14=7/14。所以答案是「7/14」。",
    "steps": [
      "已完成2/7+3/14=4/14+3/14=7/14",
      "未完成1-7/14=7/14"
    ],
    "optionAnalysis": [
      {
        "choice": "5/14",
        "truth": false,
        "reason": "5/14是錯誤差值。"
      },
      {
        "choice": "6/14",
        "truth": false,
        "reason": "6/14少算一天。"
      },
      {
        "choice": "7/14",
        "truth": true,
        "reason": "7/14正確。"
      },
      {
        "choice": "9/14",
        "truth": false,
        "reason": "9/14大於剩餘。"
      }
    ],
    "commonMistake": "求出已完成比例後忘記用1減。",
    "concept": "剩餘比例=1-累計完成比例。",
    "tags": [
      "數與量",
      "分數加減",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "求工作剩餘比例。",
    "literacyContextNecessity": "兩天完成比例與『尚未完成』要求共同決定先加後補至1的兩步運算。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cb5e344f89cd3c7b4eb747cace42351557e1a9192100fa7740f87f2a3ded04ed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "食譜需要 2又1/4 杯麵粉，現有 1又2/3 杯，還缺多少杯？",
    "choices": [
      "5/12 杯",
      "3/4 杯",
      "11/12 杯",
      "7/12 杯"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：2又1/4-1又2/3=9/4-5/3；=27/12-20/12=7/12。所以答案是「7/12 杯」。",
    "steps": [
      "2又1/4-1又2/3=9/4-5/3",
      "=27/12-20/12=7/12"
    ],
    "optionAnalysis": [
      {
        "choice": "5/12 杯",
        "truth": false,
        "reason": "差少2/12。"
      },
      {
        "choice": "3/4 杯",
        "truth": false,
        "reason": "3/4杯比正確差額多。"
      },
      {
        "choice": "11/12 杯",
        "truth": false,
        "reason": "接近一杯但不符。"
      },
      {
        "choice": "7/12 杯",
        "truth": true,
        "reason": "7/12杯正確。"
      }
    ],
    "commonMistake": "帶分數相減時直接分別減整數和分子。",
    "concept": "帶分數可化假分數後通分相減。",
    "tags": [
      "數與量",
      "分數加減",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "食譜缺量計算。",
    "literacyContextNecessity": "需求量與現有量都以杯為單位，『還缺』明確指定以需求減現有。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c338d154d19a54653c2ad6e222b308eab3505297fcb47aa8ac9e8c49d99c731d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s009-cr001",
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "計算 2又3/4-［1又1/6-(5/8-1/3)］，寫出每一步。",
    "requiredWork": [
      "由內向外。",
      "通分與約分完整。"
    ],
    "fullCreditSolution": [
      "5/8-1/3=15/24-8/24=7/24。",
      "1又1/6=28/24，所以中括號=28/24-7/24=21/24=7/8。",
      "2又3/4=11/4=22/8，22/8-7/8=15/8=1又7/8。"
    ],
    "alternativeSolutions": [
      "也可全式通分24後計算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "每層括號與答案1又7/8正確。"
      },
      {
        "score": 2,
        "criteria": "方法正確但一處算術小錯。"
      },
      {
        "score": 1,
        "criteria": "能正確完成最內層並建立後續。"
      },
      {
        "score": 0,
        "criteria": "忽略括號或分母直接相加。"
      }
    ],
    "scoringNotes": [
      "最終可寫15/8。"
    ],
    "commonErrors": [
      "先算外層。",
      "把減括號變成逐項都減但符號錯。"
    ],
    "independentReview": {
      "derivedResult": "1又7/8。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "0ab13075802e7dd8223775e14d6ef855a53d1eacb74a805ac9e3ae904143f3ba",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-cr002",
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "水箱初有容量的 7/10，先用掉容量的 1/4，再補入容量的 2/15。求最後比例，並判斷是否超過 3/5。",
    "requiredWork": [
      "三項以總容量為同一基準。",
      "計算最後比例。",
      "與3/5比較。"
    ],
    "fullCreditSolution": [
      "7/10-1/4+2/15，公分母60。",
      "42/60-15/60+8/60=35/60=7/12。",
      "7/12與3/5比較：35<36，所以未超過3/5。"
    ],
    "alternativeSolutions": [
      "可先算7/10-1/4=9/20，再加2/15。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "7/12及未超過3/5均正確。"
      },
      {
        "score": 2,
        "criteria": "最後比例正確但比較說明不足。"
      },
      {
        "score": 1,
        "criteria": "列式正確但算術未完成。"
      },
      {
        "score": 0,
        "criteria": "把用掉當加或基準誤讀。"
      }
    ],
    "scoringNotes": [
      "題目三比例均明確佔總容量。"
    ],
    "commonErrors": [
      "把補入2/15作用於剩餘量。",
      "只答7/12未回應判斷。"
    ],
    "independentReview": {
      "derivedResult": "最後7/12，未超過3/5。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "6681d4716fda0c22ae0be608b7db7d5be631f4c70875e0dd7f756e90d646a37e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
