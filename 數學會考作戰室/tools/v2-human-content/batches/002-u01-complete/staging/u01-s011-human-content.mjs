// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s011-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-arithmetic",
  "skillId": "integer-mixed-operations",
  "title": "整數四則混合：依序處理括號與乘除和加減",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能遵守整數四則運算順序。",
    "能在同級運算中由左到右。",
    "能把減法改寫為加法以避免符號錯誤。",
    "能利用交換律與結合律簡化純加法部分。",
    "能在情境中建立完整算式而非分段漏項。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-multiplication-division",
      "requiredLevel": "能完成整數的乘法和除法，並理解同級運算由左到右。"
    }
  ],
  "glossary": [
    {
      "term": "運算順序",
      "definition": "同一算式中決定先算哪一部分的規則。"
    },
    {
      "term": "括號",
      "definition": "指定必須先處理的部分。"
    },
    {
      "term": "同級運算",
      "definition": "乘與除同級，加與減同級。"
    },
    {
      "term": "由左到右",
      "definition": "同級且沒有其他括號時，按照出現順序計算。"
    },
    {
      "term": "完整算式",
      "definition": "把情境中的起始量與所有變化一次表達清楚。"
    }
  ],
  "notation": [
    {
      "symbol": "( )",
      "meaning": "括號內先算。"
    },
    {
      "symbol": "×、÷",
      "meaning": "在沒有更內層括號時，先於加減。"
    },
    {
      "symbol": "+、-",
      "meaning": "乘除完成後，由左到右處理。"
    }
  ],
  "conceptNarrative": [
    "整數四則混合運算的順序是先括號，再乘除，最後加減；乘與除彼此同級，加與減也彼此同級，同級運算必須由左到右，不能挑看起來容易的部分先算。",
    "每一步只化簡一個局部，其他項連同前面的正負號完整抄回，可以降低變號或漏項風險。負數作為因數或除數時宜保留括號，讓運算符號與數本身的符號清楚分開。",
    "情境題先寫起始量，再依時間順序列出每筆帶號變化；重複發生的變化用乘法合併。列成完整算式後仍依標準順序計算，最後檢查所得方向與實際情境是否合理。"
  ],
  "formalDefinitions": [
    {
      "name": "四則順序",
      "statement": "先括號，次乘除，後加減；同級由左到右。"
    },
    {
      "name": "括號層級",
      "statement": "有多層括號時由最內層開始。"
    }
  ],
  "formulas": [
    {
      "formula": "括號 → 乘除 → 加減",
      "conditions": [
        "同級運算由左到右"
      ],
      "meaning": "標準計算流程。"
    },
    {
      "formula": "a-b=a+(-b)",
      "conditions": [
        "用於加減整理"
      ],
      "meaning": "把減法統一為帶號加法。"
    }
  ],
  "nonApplicableCases": [
    "不能把加法先算，只因為它看起來容易。",
    "乘除同級，不是乘法永遠先於除法。",
    "加減同級，不是加法永遠先於減法。",
    "括號前若有負號或乘號，括號值算完後仍要處理外部運算。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "完整抄下算式並標出最內層括號，先只計算括號內部。",
      "check": "括號外的負號、乘除與其他項都原樣保留，沒有提早合併。"
    },
    {
      "step": 2,
      "instruction": "處理所有乘法與除法；若連續出現，嚴格依原式由左向右。",
      "check": "沒有因乘法看似容易就跳過前方同級除法，也沒有擅自改變分組。"
    },
    {
      "step": 3,
      "instruction": "乘除完成後，再把剩餘加法與減法由左向右逐項合併。",
      "check": "減去負數已正確轉為加上相反數，每個數前的符號都跟著抄寫。"
    },
    {
      "step": 4,
      "instruction": "每一行只改一個運算層級，保留足以追查符號來源的中間式。",
      "check": "前後兩行除已處理局部外完全一致，沒有漏項或無故變號。"
    },
    {
      "step": 5,
      "instruction": "情境題核對起始量、每筆變化、重複次數與單次費用是否全都列入。",
      "check": "結果單位正確，且增加、扣除或下降後的大小方向符合題目敘述。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u01-s011-example-a",
      "prompt": "計算 14+(-4)×6。",
      "answer": "-10。",
      "why": "先算優先級較高的乘法，負四乘六等於負二十四，原式再化為十四加負二十四。完成加法得到負十；若先算十四加負四就會破壞順序。"
    },
    {
      "exampleId": "u01-s011-example-b",
      "prompt": "計算 36÷(-4)+[3-8]。",
      "answer": "-14。",
      "why": "除法三十六除以負四等於負九，中括號三減八等於負五；兩部分都化簡後相加，負九加負五等於負十四，且每個負號都有明確來源。"
    },
    {
      "exampleId": "u01-s011-example-c",
      "prompt": "起始有 150 點，連續 5 次各扣 12 點，再補回 20 點，最後有多少點？",
      "answer": "110 點。",
      "why": "五次扣點先合併為負十二乘五等於負六十，再把起始、扣點與補點完整列成一百五十減六十加二十，依序計算得到一百一十點。"
    },
    {
      "exampleId": "u01-s011-ex04-r4",
      "prompt": "計算 48÷[3×(-2)]-5。",
      "answer": "-13。",
      "why": "先算中括號 3×(-2)=-6，使原式成 48÷(-6)-5；再完成除法得 -8，最後做加減得到 -13，每一步只處理一個運算層級，也保留中括號作為完整除數的意義。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "一律從算式最左邊開始，不先處理後方的乘法或除法。",
      "correction": "先按括號、乘除、加減分層；只有同一層級才由左向右。"
    },
    {
      "mistake": "認為乘法永遠先於除法，將右側乘法跨過左側除法先算。",
      "correction": "乘法與除法同級，沒有括號時必須依它們出現的順序由左到右。"
    },
    {
      "mistake": "括號算完只抄數值，漏掉括號外原有的減號或負號。",
      "correction": "每次化簡後重抄完整算式，讓外部運算符號繼續保留到該層處理。"
    },
    {
      "mistake": "同一行同時改動多個局部，導致無法查出哪一步發生變號。",
      "correction": "一行只處理一個運算層級，其餘項原樣抄回以保留可追溯性。"
    },
    {
      "mistake": "情境列式只寫重複變化，漏掉起始量或最後一次單獨費用。",
      "correction": "依時間順序建立清單，逐一核對起始量、重複項與單次項都已進入算式。"
    },
    {
      "mistake": "先算 48÷3，再把所得結果乘 -2，忽略中括號指定的整體除數。",
      "correction": "中括號內的乘積是完整除數，必須先求 -6，才能進行 48÷(-6)。"
    }
  ],
  "selfCheck": [
    "括號先算了嗎？",
    "乘除是否由左到右？",
    "加減是否由左到右？",
    "負數有括號嗎？",
    "每一步是否只改必要部分？"
  ],
  "summary": [
    "順序：括號、乘除、加減。",
    "同級運算由左到右。",
    "減法可改寫成加上相反數。",
    "完整列式後再計算。"
  ],
  "connections": {
    "previous": "先備技能是整數加減乘除。",
    "next": [
      "指數會在後續加入比乘除更優先的運算。",
      "科學記號運算需要指數與乘除順序。",
      "綜合素養題會以完整算式整合多個條件。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s011-v001",
      "u01-s011-v002",
      "u01-s011-v003",
      "u01-s011-v004",
      "u01-s011-v005",
      "u01-s011-v006",
      "u01-s011-v007",
      "u01-s011-v008",
      "u01-s011-v009",
      "u01-s011-v010",
      "u01-s011-v011",
      "u01-s011-v012"
    ],
    "constructedResponseIds": [
      "u01-s011-cr001",
      "u01-s011-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐式按照括號、乘除、加減順序重算，並核對同級運算由左到右，未以表面順序取代運算規則。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "78abe1df08b67e27a0d123c7d3cd131d7046d8033737b2a735fadb84987e9825",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s011-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "8+(-3)×5 的值是多少？",
    "choices": [
      "-7",
      "25",
      "-25",
      "-55"
    ],
    "answerIndex": 0,
    "explanation": "算式同時含加法與乘法，依運算順序要先算乘法。負三乘五等於負十五，原式化為八加負十五；從八向負方向移十五得到負七，所以答案是負七。",
    "steps": [
      "先處理優先級較高的乘法，計算 (-3)×5=-15。",
      "將原式重寫為 8+(-15)，保留負十五的符號。",
      "完成整數加法得到 -7，並確認未先算 8+(-3)。"
    ],
    "optionAnalysis": [
      {
        "choice": "-7",
        "truth": true,
        "reason": "8+(-15)=-7。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "先算8-3的錯誤結果。"
      },
      {
        "choice": "-25",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-55",
        "truth": false,
        "reason": "把8也乘5。"
      }
    ],
    "commonMistake": "從左端先算八加負三，忽略乘法必須在外部加法之前完成。",
    "concept": "四則混合先乘除後加減。",
    "tags": [
      "數與量",
      "整數四則混合",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "基本乘加順序。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "79cbcb447abf24bd1d297d258025acf16a84371c734cb7e3b9f23a0d6ab517ba",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "24÷(-6)-3 的值是多少？",
    "choices": [
      "1",
      "-7",
      "-1",
      "7"
    ],
    "answerIndex": 1,
    "explanation": "除法的優先級高於後面的減法，先計算二十四除以負六得負四。接著原式成為負四減三，也就是再向負方向移三，結果為負七。",
    "steps": [
      "先算 24÷(-6)，異號相除得到 -4。",
      "把尚未處理的減三抄回，形成 -4-3。",
      "計算 -4-3=-7，並檢查沒有把減三誤成加三。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "符號與減法錯。"
      },
      {
        "choice": "-7",
        "truth": true,
        "reason": "-4-3=-7。"
      },
      {
        "choice": "-1",
        "truth": false,
        "reason": "只算24÷-6+3。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "漏負號。"
      }
    ],
    "commonMistake": "將負四減三錯算成負一，把減去正三誤當成往零方向移動。",
    "concept": "先除法，負數再減正數。",
    "tags": [
      "數與量",
      "整數四則混合",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "基本除減順序。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0035add63b48ea7cffccd4a5b18cd9e9cd4f1ae28e95354bd5b4a8e274060cc8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "18-[4+(-7)]×2 的值是多少？",
    "choices": [
      "-6",
      "12",
      "24",
      "30"
    ],
    "answerIndex": 2,
    "explanation": "先計算括號內四加負七等於負三，再乘二得到負六。最後原式為十八減負六；減去負數等於加上其相反數，所以十八加六等於二十四。",
    "steps": [
      "先算中括號 [4+(-7)]=-3。",
      "依序完成乘法 (-3)×2=-6，原式化為 18-(-6)。",
      "把減負六改成加六，計算 18+6=24。"
    ],
    "optionAnalysis": [
      {
        "choice": "-6",
        "truth": false,
        "reason": "只算乘積。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把18與-6相加錯。"
      },
      {
        "choice": "24",
        "truth": true,
        "reason": "18-((-3)×2)=18-(-6)=24。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "括號符號錯。"
      }
    ],
    "commonMistake": "括號與乘法都算對後，仍把十八減負六當作十八減六而得到十二。",
    "concept": "先括號、再乘法、最後減法。",
    "tags": [
      "數與量",
      "整數四則混合",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "處理括號與減負結果。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "93b889c536d0999a61c66d520668e72f2196aede802bd9ae501e3bb9fc2e79c6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-30÷5×2+9 的值是多少？",
    "choices": [
      "-21",
      "3",
      "21",
      "-3"
    ],
    "answerIndex": 3,
    "explanation": "乘法與除法屬於同一優先級，必須由左到右。先算負三十除以五得負六，再乘二得負十二；最後加九，負十二加九等於負三。",
    "steps": [
      "由左到右先做除法，計算 (-30)÷5=-6。",
      "接著完成同級乘法 (-6)×2=-12。",
      "最後做加法 -12+9=-3，得到原式值為 -3。"
    ],
    "optionAnalysis": [
      {
        "choice": "-21",
        "truth": false,
        "reason": "漏乘2。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "錯誤分組。"
      },
      {
        "choice": "21",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-3",
        "truth": true,
        "reason": "((-30÷5)×2)+9=-3。"
      }
    ],
    "commonMistake": "誤認乘法一定優先於除法，先把五乘二組成十而改變原式結合順序。",
    "concept": "連續乘除同級由左到右。",
    "tags": [
      "數與量",
      "整數四則混合",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "辨認乘除同級順序。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "546eef88785bcedbf64c4e10ea6e3025c613bea08fb8a7bf0c171b3443bc5505",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "16-3×5+2 的值是多少？",
    "choices": [
      "3",
      "67",
      "-1",
      "-33"
    ],
    "answerIndex": 0,
    "explanation": "算式中間的三乘五要先於兩側加減，先得到十五。原式化成十六減十五加二；加減同級由左到右，先得一，再加二得到三。",
    "steps": [
      "先計算乘法 3×5=15，其他項保持不變。",
      "由左到右計算 16-15=1。",
      "再算 1+2=3，確認後方的加二沒有漏掉。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": true,
        "reason": "16-15+2=3。"
      },
      {
        "choice": "67",
        "truth": false,
        "reason": "先算16-3再乘5。"
      },
      {
        "choice": "-1",
        "truth": false,
        "reason": "漏加2。"
      },
      {
        "choice": "-33",
        "truth": false,
        "reason": "錯誤分組。"
      }
    ],
    "commonMistake": "先把十六減三算成十三，再乘五，違反乘法優先於加減的規則。",
    "concept": "乘法優先於加減。",
    "tags": [
      "數與量",
      "整數四則混合",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "在加減兩側辨認中間乘法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "37563d2cbedbd8fe9d8946cb110e7c94ddf43a7b75d7cf881dcac88e39eef6a3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-8+5)×(-4) 的值是多少？",
    "choices": [
      "-12",
      "12",
      "-27",
      "27"
    ],
    "answerIndex": 1,
    "explanation": "括號把負八加五指定為一個整體，因此先算括號得到負三。接著負三乘負四是同號相乘，結果為正；三乘四等於十二，所以原式值為十二。",
    "steps": [
      "先處理括號 (-8+5)=-3，不能先把五與外部負四相乘。",
      "將原式化為 (-3)×(-4)，判定同號乘積為正。",
      "計算 3×4=12，合併符號得到 12。"
    ],
    "optionAnalysis": [
      {
        "choice": "-12",
        "truth": false,
        "reason": "乘積符號錯。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "(-3)(-4)=12。"
      },
      {
        "choice": "-27",
        "truth": false,
        "reason": "把括號內相加成-13。"
      },
      {
        "choice": "27",
        "truth": false,
        "reason": "大小與符號錯。"
      }
    ],
    "commonMistake": "跳過括號先算五乘負四，破壞題目明確指定的運算範圍。",
    "concept": "括號優先，負乘負得正。",
    "tags": [
      "數與量",
      "整數四則混合",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "結合括號加法與乘法符號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "772cbae2b91f33588984975eeef1a8aa4b0053fa021848c6a8815b879cedc04d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "48÷(-6)-[7-(-2)] 的值是多少？",
    "choices": [
      "1",
      "-1",
      "-17",
      "17"
    ],
    "answerIndex": 2,
    "explanation": "先分別處理除法與中括號：四十八除以負六得負八，七減負二等於九。原式因此變成負八減九，兩個負向量合計為負十七。",
    "steps": [
      "計算除法 48÷(-6)=-8。",
      "計算中括號 [7-(-2)]=7+2=9。",
      "把兩部分代回成 -8-9，得到 -17。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "把兩部分相加錯。"
      },
      {
        "choice": "-1",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-17",
        "truth": true,
        "reason": "-8-9=-17。"
      },
      {
        "choice": "17",
        "truth": false,
        "reason": "漏負號。"
      }
    ],
    "commonMistake": "把七減負二錯看成七減二得到五，使後續兩部分的差也跟著錯誤。",
    "concept": "同時處理除法與括號內減負。",
    "tags": [
      "數與量",
      "整數四則混合",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "計算兩個獨立部分後相減。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5ae1cded6967b8bc33febeb752c6f3390046400aa24c6db82207b3a0a104e9da",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "20-(-3)×4÷2 的值是多少？",
    "choices": [
      "14",
      "-26",
      "-14",
      "26"
    ],
    "answerIndex": 3,
    "explanation": "先依乘除同級由左到右，負三乘四得負十二，再除以二得負六。此時原式是二十減負六，等於二十加六，所以結果為二十六。",
    "steps": [
      "先完成乘法 (-3)×4=-12，不先處理左側減號。",
      "接著由左到右算 (-12)÷2=-6。",
      "最後計算 20-(-6)=20+6=26。"
    ],
    "optionAnalysis": [
      {
        "choice": "14",
        "truth": false,
        "reason": "把20-6。"
      },
      {
        "choice": "-26",
        "truth": false,
        "reason": "把所有項相乘。"
      },
      {
        "choice": "-14",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "26",
        "truth": true,
        "reason": "20-[(-3×4)÷2]=26。"
      }
    ],
    "commonMistake": "看到二十減負三便先算二十三，忽略負三仍屬於後方乘除項。",
    "concept": "減號前的項不能越過尚未完成的乘除。",
    "tags": [
      "數與量",
      "整數四則混合",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "避免錯把減號與負因數先合併。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1dbbc301fb0b7018a60f51b25544f905647ab84971d7cfa3d8a9450e6ffe37ec",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-2×[5-9]+(-3)×4 的值是多少？",
    "choices": [
      "-4",
      "20",
      "4",
      "-20"
    ],
    "answerIndex": 0,
    "explanation": "先算中括號五減九等於負四，第一個乘積負二乘負四得八；第二個乘積負三乘四得負十二。最後把兩個乘積相加，八加負十二等於負四。",
    "steps": [
      "先算 [5-9]=-4，再得 (-2)×(-4)=8。",
      "獨立計算第二項 (-3)×4=-12。",
      "合併兩項 8+(-12)=-4，確認沒有漏掉第二個乘積。"
    ],
    "optionAnalysis": [
      {
        "choice": "-4",
        "truth": true,
        "reason": "8+(-12)=-4。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "把兩乘積絕對值相加。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "-20",
        "truth": false,
        "reason": "兩部分都錯。"
      }
    ],
    "commonMistake": "算出第一個乘積八便停止，沒有把後面的負十二視為完整第二項相加。",
    "concept": "先各自完成乘積，再合併帶號結果。",
    "tags": [
      "數與量",
      "整數四則混合",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "兩個乘積與括號的綜合。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cebd0142cc0e5ffa13d8cedae7f2e0a3c86b3823640d0e6abf2839f47ee9d8d9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "會員起始有 120 點。系統連續 4 次各扣 15 點，之後補發 25 點。最後有多少點？",
    "choices": [
      "35 點",
      "85 點",
      "155 點",
      "205 點"
    ],
    "answerIndex": 1,
    "explanation": "四次各扣十五點的總變化是 (-15)×4=-60 點。從起始一百二十點先扣六十剩六十，再補發二十五點，最後得到八十五點，起始量、扣點與補點三者都已計入。",
    "steps": [
      "將四次扣點合併為 (-15)×4=-60 點。",
      "用起始點數加總扣點，計算 120+(-60)=60 點。",
      "再加補發的 25 點，得到最後 85 點。"
    ],
    "optionAnalysis": [
      {
        "choice": "35 點",
        "truth": false,
        "reason": "漏補發或算錯。"
      },
      {
        "choice": "85 點",
        "truth": true,
        "reason": "120-15×4+25=85。"
      },
      {
        "choice": "155 點",
        "truth": false,
        "reason": "把扣點當加點。"
      },
      {
        "choice": "205 點",
        "truth": false,
        "reason": "所有數都加。"
      }
    ],
    "commonMistake": "先把一百二十減十五後整體乘四，錯把起始點數也重複計算四次。",
    "concept": "重複固定變化先乘，再加到起始量。",
    "tags": [
      "數與量",
      "整數四則混合",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "建立點數扣除與補發的完整算式。",
    "literacyContextNecessity": "起始點數、每次扣點、次數與補發都不可省略。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cfaeb47774aa8ca3ffe56393062f7c8a664602b5d562bd144bbcacb330cfcb17",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "帳戶起始餘額為 -50 元，連續 3 天每天存入 40 元，最後再扣手續費 25 元。最終餘額為何？",
    "choices": [
      "-195 元",
      "95 元",
      "45 元",
      "145 元"
    ],
    "answerIndex": 2,
    "explanation": "三天每天存四十元，總存款為三乘四十等於一百二十元。把它加到起始負五十元得到七十元，再扣二十五元手續費，最終餘額是四十五元。",
    "steps": [
      "先計算三天存款總額 3×40=120 元。",
      "加到起始餘額，算 -50+120=70 元。",
      "最後扣除手續費，70-25=45 元。"
    ],
    "optionAnalysis": [
      {
        "choice": "-195 元",
        "truth": false,
        "reason": "把存款與費用都當扣款。"
      },
      {
        "choice": "95 元",
        "truth": false,
        "reason": "漏起始負餘額或手續費。"
      },
      {
        "choice": "45 元",
        "truth": true,
        "reason": "-50+120-25=45。"
      },
      {
        "choice": "145 元",
        "truth": false,
        "reason": "漏手續費。"
      }
    ],
    "commonMistake": "只計算三天存款減手續費，漏掉起始餘額本來是負五十元。",
    "concept": "起始量與重複交易需依運算順序整合。",
    "tags": [
      "數與量",
      "整數四則混合",
      "literacy"
    ],
    "estimatedTimeSec": "95",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "處理負起始餘額、重複收入與一次費用。",
    "literacyContextNecessity": "起始負餘額、每日金額、天數與手續費共同決定結果。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "11f4cf16934a3649202ba59c2e4f3184ed3e5aff77f2b527c2853f911709f93d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s011-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "遊戲角色起始分數 -10。答對 5 題，每題 +6 分；答錯 3 題，每題 -4 分。最後分數是多少？",
    "choices": [
      "52 分",
      "-8 分",
      "32 分",
      "8 分"
    ],
    "answerIndex": 3,
    "explanation": "答對五題增加五乘六等於三十分，答錯三題的變化為三乘負四等於負十二分。把兩筆變化都加到起始負十分，負十加三十再減十二等於八分。",
    "steps": [
      "計算答對得分 5×6=30 分。",
      "計算答錯變化 3×(-4)=-12 分。",
      "合併起始分與兩筆變化，-10+30-12=8 分。"
    ],
    "optionAnalysis": [
      {
        "choice": "52 分",
        "truth": false,
        "reason": "把負分當正分。"
      },
      {
        "choice": "-8 分",
        "truth": false,
        "reason": "算術錯。"
      },
      {
        "choice": "32 分",
        "truth": false,
        "reason": "漏起始分數。"
      },
      {
        "choice": "8 分",
        "truth": true,
        "reason": "-10+30-12=8。"
      }
    ],
    "commonMistake": "只把答對與答錯的變化相加，忘記最後分數還必須包含起始的負十分。",
    "concept": "不同類型的重複得分分別相乘再合併。",
    "tags": [
      "數與量",
      "整數四則混合",
      "literacy"
    ],
    "estimatedTimeSec": "95",
    "prerequisiteSkillIds": [
      "integer-multiplication-division"
    ],
    "authoringIntent": "建立完整遊戲計分模型。",
    "literacyContextNecessity": "起始分數、答對答錯數量與每題分值全部必要。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "214d2e2942f59c8623151248ba706e3dff1c125429c6decd874174ffb9586617",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s011-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "計算 30-[6+(-8)]×4÷2，要求每一步只處理一個運算層級。",
    "requiredWork": [
      "先括號。",
      "乘除同級由左到右。",
      "最後做減法。"
    ],
    "fullCreditSolution": [
      "先處理括號：6+(-8)=-2，因此原式化為 30-(-2)×4÷2，括號外的運算全部保留。",
      "乘除同級由左到右，先算 (-2)×4=-8，再算 (-8)÷2=-4，不能任意交換順序。",
      "最後處理減法：30-(-4)=30+4=34，所以原式值為 34，並以減負等於加正檢查符號。"
    ],
    "alternativeSolutions": [
      "可寫30-[(-2)×4÷2]=30-(-4)=34。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "順序、每步與答案34全部正確。"
      },
      {
        "score": 2,
        "criteria": "答案正確但中間步略省；或一處抄寫小錯。"
      },
      {
        "score": 1,
        "criteria": "知道先括號且方法大致正確。"
      },
      {
        "score": 0,
        "criteria": "先算30-6或破壞括號，無有效流程。"
      }
    ],
    "scoringNotes": [
      "乘除由左到右，但本題改寫(-2)×(4÷2)也因乘法結合可得同值；須說明等價。"
    ],
    "commonErrors": [
      "把括號內六加負八錯算成十四，沒有依異號加法求差。",
      "在括號化簡後先算三十減負二，跳過後方尚未完成的乘除運算。",
      "最後把三十減負四仍當作三十減四，因而錯答二十六。"
    ],
    "independentReview": {
      "derivedResult": "34。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "748dfc231b50f7f2402166d79ba0c48575910c404580bf7aee7bc6cbffe019ce",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "只計算最內層括號並完整抄回括號外的乘除與減法。",
      "完成乘除時嚴格由左到右，一次只化簡一個局部。",
      "最後將減去負四轉成加四，得到三十四並檢查符號。"
    ]
  },
  {
    "questionId": "u01-s011-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-arithmetic",
    "skillId": "integer-mixed-operations",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某收費方案：起始點數 200，每週扣 18 點，共 6 週；期間另有兩次各補 25 點，最後再扣一次 12 點。請列一個完整算式並求餘額，說明運算順序。",
    "requiredWork": [
      "完整算式含全部項。",
      "重複扣點與補點使用乘法。",
      "先乘法後加減。"
    ],
    "fullCreditSolution": [
      "完整算式為 200+(-18)×6+25×2-12，其中起始點數、六週扣點、兩次補點與最後扣點都已列入。",
      "依先乘後加減，算得 (-18)×6=-108，25×2=50，原式化為 200-108+50-12。",
      "加減同級由左到右：200-108=92，92+50=142，142-12=130，因此餘額為 130 點。"
    ],
    "alternativeSolutions": [
      "可寫200-18×6+2×25-12。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整列式、順序與130全部正確。"
      },
      {
        "score": 2,
        "criteria": "列式正確但一處算術小錯；或答案正確但說明略缺。"
      },
      {
        "score": 1,
        "criteria": "能正確表示一組重複變化並保留大部分資料。"
      },
      {
        "score": 0,
        "criteria": "漏掉多項條件或把全部數直接相加。"
      }
    ],
    "scoringNotes": [
      "兩次補25不可只加一次。"
    ],
    "commonErrors": [
      "先計算二百減十八再乘六，錯把起始二百點也重複計算六次。",
      "只算六週扣點與兩次補點，漏掉最後另外扣除的十二點。",
      "把每週扣十八點寫成正十八，造成六週變化方向與情境相反。"
    ],
    "independentReview": {
      "derivedResult": "130點。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "92e8b4e14cfd6e0c0ccede74a8eee111203f1765aecba29d71e428fd469afeff",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "先把每一筆變化翻成帶號數，重複六次與兩次的項目分別用乘法表示。",
      "先算兩個乘積得到負一百零八與正五十，起始值和單次扣點保持不變。",
      "由左到右合併所有加減項，並逐一核對四類資料都已計入。"
    ]
  }
];

export const DRAWING_SPECS = [];
