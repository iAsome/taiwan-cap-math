// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s014-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-fraction-ratio",
  "skillId": "fraction-base-quantity",
  "title": "基準量判斷：先找百分率的 100%，再決定乘法或除法",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能辨認比較量、基準量與分率。",
    "能從『A是B的p%』找出B為基準。",
    "能由部分與分率反求整體。",
    "能處理『比…多/少』與含稅價的反向問題。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-percent-discount",
      "requiredLevel": "能把百分率轉成倍率並完成基本折扣、增減計算。"
    }
  ],
  "glossary": [
    {
      "term": "基準量",
      "definition": "被視為100%或完整1的量。"
    },
    {
      "term": "比較量",
      "definition": "拿來與基準量比較的量。"
    },
    {
      "term": "分率",
      "definition": "比較量佔基準量的比例。"
    },
    {
      "term": "差額",
      "definition": "新舊兩量相減的變化量。"
    }
  ],
  "notation": [
    {
      "symbol": "比較量=基準量×分率",
      "meaning": "三量基本關係。"
    }
  ],
  "conceptNarrative": [
    "『A是B的p%』中，B是100%的基準，A是比較量。",
    "『A比B多p%』表示A=B×(1+p%)，百分率仍以B為基準。",
    "已知比較量求基準量要除以分率。",
    "含稅價、折後價與增加後的量都是新量，反求原量應除以對應倍率。"
  ],
  "formalDefinitions": [
    {
      "name": "基準量",
      "statement": "百分率所依據的100%量。"
    },
    {
      "name": "比較量",
      "statement": "基準量乘分率後的對應量。"
    }
  ],
  "formulas": [
    {
      "formula": "基準量=比較量÷分率",
      "conditions": [
        "分率非0"
      ],
      "meaning": "反求整體。"
    },
    {
      "formula": "新量=原量×(1±率)",
      "conditions": [
        "原量為基準"
      ],
      "meaning": "增減關係。"
    }
  ],
  "nonApplicableCases": [
    "兩個百分率若基準不同，不能直接相減。",
    "『比A多』與『A比…多』語序會改變基準。",
    "含稅率若題目另有定義要按說明。",
    "分率為0時不能由0部分唯一反求整體。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "圈出『的』『比』『佔』等關係詞。",
      "check": "誰被當作完整100%？"
    },
    {
      "step": 2,
      "instruction": "寫成等式。",
      "check": "比較量=基準量×分率嗎？"
    },
    {
      "step": 3,
      "instruction": "判斷乘或除。",
      "check": "已知整體還是部分？"
    },
    {
      "step": 4,
      "instruction": "多層關係改寫為倍率鏈。",
      "check": "每一步基準是否更新？"
    },
    {
      "step": 5,
      "instruction": "代回原句。",
      "check": "所得量乘分率是否回到已知比較量？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "甲是乙的35%，甲=70。",
      "solutionSteps": [
        "70=乙×0.35。",
        "乙=200。"
      ],
      "answer": "乙為200。"
    },
    {
      "exampleId": "L2",
      "prompt": "今年比去年多12%，今年1120。",
      "solutionSteps": [
        "今年=去年×1.12。",
        "去年=1000。"
      ],
      "answer": "去年1000。"
    },
    {
      "exampleId": "L3",
      "prompt": "女生佔全班48%，女生24人。",
      "solutionSteps": [
        "24=全班×0.48。",
        "全班=50。"
      ],
      "answer": "50人。"
    },
    {
      "exampleId": "L4",
      "prompt": "含稅價1050，稅率5%。",
      "solutionSteps": [
        "1050=未稅×1.05。",
        "未稅=1000。"
      ],
      "answer": "1000元。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把句首量當基準。",
      "why": "未看『的』後物件。",
      "correction": "寫等式確認。"
    },
    {
      "mistake": "比較量求整體仍乘分率。",
      "why": "方向反。",
      "correction": "用除法。"
    },
    {
      "mistake": "比原量多20%寫成0.2倍。",
      "why": "漏掉原來的100%。",
      "correction": "倍率1.2。"
    },
    {
      "mistake": "A比B少25%就用A×0.75求B。",
      "why": "基準錯置。",
      "correction": "A=0.75B，故B=A÷0.75。"
    },
    {
      "mistake": "不同基準百分率直接相減。",
      "why": "百分數看似可比較但對應量不同。",
      "correction": "分別求實際量。"
    },
    {
      "mistake": "反求含稅價直接減5%。",
      "why": "5%以未稅價為基準。",
      "correction": "除以1.05。"
    }
  ],
  "selfCheck": [
    "誰是100%？",
    "能否寫比較量=基準量×分率？",
    "反求整體是否用除法？",
    "『比誰多/少』的物件正確嗎？",
    "代回後是否重現原比較量？"
  ],
  "summary": [
    "基準量是百分率的100%。",
    "比較量=基準量×分率。",
    "反求基準量用除法。",
    "增減語句的基準是『比』後面的量。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-percent-discount，需能完成其基本判斷與計算。",
    "next": [
      "綜合應用會在同題切換多個基準。",
      "一次方程式可處理更復雜的未知基準量。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s014-v001",
      "u02-s014-v002",
      "u02-s014-v003",
      "u02-s014-v004",
      "u02-s014-v005",
      "u02-s014-v006",
      "u02-s014-v007",
      "u02-s014-v008",
      "u02-s014-v009",
      "u02-s014-v010",
      "u02-s014-v011",
      "u02-s014-v012"
    ],
    "constructedResponseIds": [
      "u02-s014-cr001",
      "u02-s014-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例均以代回分率或倍率恢復原比較量；552÷1.15、100÷(5/8)與90/160的基準分母分別核對，不混用新舊量。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "998698f16b1908405742988dbd8f1fe976318987a5b1ca31b1be7f7e972f56fb"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s014-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲是乙的 3/5。這個敘述中，基準量是哪一個？",
    "choices": [
      "乙",
      "甲",
      "3",
      "5"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：『甲是乙的3/5』表示甲=乙×3/5；被乘分率的乙是基準量。所以答案是「乙」。",
    "steps": [
      "『甲是乙的3/5』表示甲=乙×3/5",
      "被乘分率的乙是基準量"
    ],
    "optionAnalysis": [
      {
        "choice": "乙",
        "truth": true,
        "reason": "乙是被比較的整體基準。"
      },
      {
        "choice": "甲",
        "truth": false,
        "reason": "甲是比較量。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "3是分子。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "5是分母。"
      }
    ],
    "commonMistake": "看到句首甲就把甲當基準量。",
    "concept": "『A 是 B 的幾分之幾』中 B 是基準量。",
    "tags": [
      "數與量",
      "基準量判斷",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-percent-discount"
    ],
    "authoringIntent": "辨認分數關係的基準量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d7858f461733a25420709173997d67bae48aad8d2a29f5ac228cb9f3b86ee0c1"
  },
  {
    "questionId": "u02-s014-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "今年產量比去年增加 20%。哪一個量是增加率的基準量？",
    "choices": [
      "今年產量",
      "去年產量",
      "增加後差額",
      "今年與去年平均"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：『比去年增加』以去年作比較起點；20%是增加量佔去年產量的比例。所以答案是「去年產量」。",
    "steps": [
      "『比去年增加』以去年作比較起點",
      "20%是增加量佔去年產量的比例"
    ],
    "optionAnalysis": [
      {
        "choice": "今年產量",
        "truth": false,
        "reason": "今年是比較後的量。"
      },
      {
        "choice": "去年產量",
        "truth": true,
        "reason": "去年是基準量。"
      },
      {
        "choice": "增加後差額",
        "truth": false,
        "reason": "差額是比較量。"
      },
      {
        "choice": "今年與去年平均",
        "truth": false,
        "reason": "平均量未被使用。"
      }
    ],
    "commonMistake": "把新量當作百分率的基準。",
    "concept": "『比原來增加』的基準是原來量。",
    "tags": [
      "數與量",
      "基準量判斷",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-percent-discount"
    ],
    "authoringIntent": "辨認增減率基準。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9eb88cc1ad1e5384f3052f676d20ce4c671d8f887e46c433fdc8b2056b0039cd"
  },
  {
    "questionId": "u02-s014-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一班女生 18 人，佔全班的 45%。全班人數是哪一種量？",
    "choices": [
      "比較量",
      "差額",
      "基準量",
      "百分率"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：女生人數=全班人數×45%；全班人數是被分率作用的整體。所以答案是「基準量」。",
    "steps": [
      "女生人數=全班人數×45%",
      "全班人數是被分率作用的整體"
    ],
    "optionAnalysis": [
      {
        "choice": "比較量",
        "truth": false,
        "reason": "女生18人是比較量。"
      },
      {
        "choice": "差額",
        "truth": false,
        "reason": "沒有差額。"
      },
      {
        "choice": "基準量",
        "truth": true,
        "reason": "全班是基準量。"
      },
      {
        "choice": "百分率",
        "truth": false,
        "reason": "45%是分率。"
      }
    ],
    "commonMistake": "把已知的18人當基準量。",
    "concept": "部分佔整體百分率時，整體是基準量。",
    "tags": [
      "數與量",
      "基準量判斷",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-percent-discount"
    ],
    "authoringIntent": "辨認部分與整體。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "39c2001736f8b638dba1938c03235e393d9b9204f483752ed36cd69372a7bb65"
  },
  {
    "questionId": "u02-s014-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲數是 80，且甲數是乙數的 40%。乙數是多少？",
    "choices": [
      "32",
      "120",
      "160",
      "200"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：80=乙×0.4；乙=80÷0.4=200。所以答案是「200」。",
    "steps": [
      "80=乙×0.4",
      "乙=80÷0.4=200"
    ],
    "optionAnalysis": [
      {
        "choice": "32",
        "truth": false,
        "reason": "這是80的40%。"
      },
      {
        "choice": "120",
        "truth": false,
        "reason": "只加40。"
      },
      {
        "choice": "160",
        "truth": false,
        "reason": "乙數應由80÷0.4求得200；160不是正確反推結果。"
      },
      {
        "choice": "200",
        "truth": true,
        "reason": "200正確。"
      }
    ],
    "commonMistake": "已知比較量卻再次乘百分率。",
    "concept": "基準量=比較量÷分率。",
    "tags": [
      "數與量",
      "基準量判斷",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-percent-discount"
    ],
    "authoringIntent": "反求基準量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "08d966436e681868906eedf0ee310799a1e17a398e87ad66cc25ea62c513b415"
  },
  {
    "questionId": "u02-s014-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某商品漲價 15% 後為 920 元。原價是多少？",
    "choices": [
      "800 元",
      "782 元",
      "905 元",
      "1058 元"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：漲價後=原價×1.15；原價=920÷1.15=800。所以答案是「800 元」。",
    "steps": [
      "漲價後=原價×1.15",
      "原價=920÷1.15=800"
    ],
    "optionAnalysis": [
      {
        "choice": "800 元",
        "truth": true,
        "reason": "800×1.15=920。"
      },
      {
        "choice": "782 元",
        "truth": false,
        "reason": "錯把920乘0.85。"
      },
      {
        "choice": "905 元",
        "truth": false,
        "reason": "只減15元。"
      },
      {
        "choice": "1058 元",
        "truth": false,
        "reason": "又乘1.15。"
      }
    ],
    "commonMistake": "用920減去920的15%，但15%應以原價為基準。",
    "concept": "反求漲價前基準量要除以1+增率。",
    "tags": [
      "數與量",
      "基準量判斷",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-percent-discount"
    ],
    "authoringIntent": "由新量反求原量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "134ed393613c7303bd1b7ffc6612c2c38c196460bab2199ae8fc00b2d8afac43"
  },
  {
    "questionId": "u02-s014-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一條路已修 36 公里，完成率為 60%。全長多少公里？",
    "choices": [
      "21.6 公里",
      "60 公里",
      "96 公里",
      "45 公里"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：36=全長×0.6；全長=36÷0.6=60。所以答案是「60 公里」。",
    "steps": [
      "36=全長×0.6",
      "全長=36÷0.6=60"
    ],
    "optionAnalysis": [
      {
        "choice": "21.6 公里",
        "truth": false,
        "reason": "這是36的60%。"
      },
      {
        "choice": "60 公里",
        "truth": true,
        "reason": "60公里正確。"
      },
      {
        "choice": "96 公里",
        "truth": false,
        "reason": "把完成量與剩餘相加錯。"
      },
      {
        "choice": "45 公里",
        "truth": false,
        "reason": "全長應為36÷0.6=60公里；45公里不能使已修36公里佔60%。"
      }
    ],
    "commonMistake": "把完成率當成剩餘率。",
    "concept": "全長是完成部分的基準量。",
    "tags": [
      "數與量",
      "基準量判斷",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-percent-discount"
    ],
    "authoringIntent": "由完成率求全長。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b08c3b56369626d559cc1f22f75fe3f898ba31fe3a114f70e9cca9435b598155"
  },
  {
    "questionId": "u02-s014-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲比乙少 25%。若甲為 90，乙是多少？",
    "choices": [
      "112.5",
      "67.5",
      "120",
      "115"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：甲=乙×75%；乙=90÷0.75=120。所以答案是「120」。",
    "steps": [
      "甲=乙×75%",
      "乙=90÷0.75=120"
    ],
    "optionAnalysis": [
      {
        "choice": "112.5",
        "truth": false,
        "reason": "用90×1.25，基準錯。"
      },
      {
        "choice": "67.5",
        "truth": false,
        "reason": "又減少25%。"
      },
      {
        "choice": "120",
        "truth": true,
        "reason": "120的75%是90。"
      },
      {
        "choice": "115",
        "truth": false,
        "reason": "不是整確倍率。"
      }
    ],
    "commonMistake": "把『甲比乙少25%』誤作乙比甲多25%。",
    "concept": "少p%表示比較量=(1-p)×基準量。",
    "tags": [
      "數與量",
      "基準量判斷",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-percent-discount"
    ],
    "authoringIntent": "處理反向百分率語句。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0c5f08a3d2262c3b174b2a2270cca424ce505276fff7a25869f08f24adeea89f"
  },
  {
    "questionId": "u02-s014-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A 比 B 多 20%，B 比 C 少 25%。A 與 C 的關係為何？",
    "choices": [
      "A 比 C 多5%",
      "A 比 C 少5%",
      "A 與 C 無固定關係",
      "A 比 C 少10%"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：A=1.2B，B=0.75C；A=1.2×0.75C=0.9C，所以A比C少10%。所以答案是「A 比 C 少10%」。",
    "steps": [
      "A=1.2B，B=0.75C",
      "A=1.2×0.75C=0.9C，所以A比C少10%"
    ],
    "optionAnalysis": [
      {
        "choice": "A 比 C 多5%",
        "truth": false,
        "reason": "百分率不能直接20%-25%。"
      },
      {
        "choice": "A 比 C 少5%",
        "truth": false,
        "reason": "差不是5%。"
      },
      {
        "choice": "A 與 C 無固定關係",
        "truth": false,
        "reason": "關係可由倍率確定。"
      },
      {
        "choice": "A 比 C 少10%",
        "truth": true,
        "reason": "A為C的90%，少10%。"
      }
    ],
    "commonMistake": "直接把20%與25%相減。",
    "concept": "連鎖比較要把各倍率相乘。",
    "tags": [
      "數與量",
      "基準量判斷",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-percent-discount"
    ],
    "authoringIntent": "多層基準量轉換。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5d86602fb756b9a30eef0c1fb08627e5c7d68cc2bdbc5bc62f3577d358ccde54"
  },
  {
    "questionId": "u02-s014-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某數的 40% 比另一數的 30% 多 18。若第一數為 120，第二數是多少？",
    "choices": [
      "100",
      "80",
      "90",
      "120"
    ],
    "answerIndex": 0,
    "explanation": "依題意逐步處理：第一數40%=48；48-0.3×第二數=18，所以0.3×第二數=30，第二數=100。所以答案是「100」。",
    "steps": [
      "第一數40%=48",
      "48-0.3×第二數=18，所以0.3×第二數=30，第二數=100"
    ],
    "optionAnalysis": [
      {
        "choice": "100",
        "truth": true,
        "reason": "100的30%=30，48-30=18。"
      },
      {
        "choice": "80",
        "truth": false,
        "reason": "80的30%=24，差24。"
      },
      {
        "choice": "90",
        "truth": false,
        "reason": "90的30%=27，差21。"
      },
      {
        "choice": "120",
        "truth": false,
        "reason": "120的30%=36，差12。"
      }
    ],
    "commonMistake": "兩個百分率使用不同基準，卻直接相減40%-30%。",
    "concept": "每個百分率都要乘自己的基準量。",
    "tags": [
      "數與量",
      "基準量判斷",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-percent-discount"
    ],
    "authoringIntent": "處理不同基準的百分量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "13c85264f645375ac537d10653e568530be81d18fe61f0fcf519e34a8dd4db8c"
  },
  {
    "questionId": "u02-s014-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一間圖書館今年借閱 13,200 冊，比去年增加 10%。去年借閱多少冊？",
    "choices": [
      "11,880 冊",
      "12,000 冊",
      "14,520 冊",
      "13,190 冊"
    ],
    "answerIndex": 1,
    "explanation": "依題意逐步處理：今年=去年×1.1；去年=13200÷1.1=12000。所以答案是「12,000 冊」。",
    "steps": [
      "今年=去年×1.1",
      "去年=13200÷1.1=12000"
    ],
    "optionAnalysis": [
      {
        "choice": "11,880 冊",
        "truth": false,
        "reason": "把今年減今年的10%。"
      },
      {
        "choice": "12,000 冊",
        "truth": true,
        "reason": "12000×1.1=13200。"
      },
      {
        "choice": "14,520 冊",
        "truth": false,
        "reason": "又增加10%。"
      },
      {
        "choice": "13,190 冊",
        "truth": false,
        "reason": "只減10冊。"
      }
    ],
    "commonMistake": "用今年作為增加量的基準。",
    "concept": "『比去年增加』以去年為基準。",
    "tags": [
      "數與量",
      "基準量判斷",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-percent-discount"
    ],
    "authoringIntent": "借閱量反求去年。",
    "literacyContextNecessity": "今年數量與增加率共同決定去年基準量，不能以今年直接減10%。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cb7bbdebcebf2c3d4dab84d06cc1f0f31ebcc367fcd4736d80b09e8808e28b45"
  },
  {
    "questionId": "u02-s014-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某水庫目前蓄水 540 萬噸，為滿水位的 72%。滿水位容量是多少？",
    "choices": [
      "648 萬噸",
      "720 萬噸",
      "750 萬噸",
      "810 萬噸"
    ],
    "answerIndex": 2,
    "explanation": "依題意逐步處理：540=滿水位×0.72；滿水位=540÷0.72=750。所以答案是「750 萬噸」。",
    "steps": [
      "540=滿水位×0.72",
      "滿水位=540÷0.72=750"
    ],
    "optionAnalysis": [
      {
        "choice": "648 萬噸",
        "truth": false,
        "reason": "這是乘1.2的錯誤。"
      },
      {
        "choice": "720 萬噸",
        "truth": false,
        "reason": "除法估值偏小。"
      },
      {
        "choice": "750 萬噸",
        "truth": true,
        "reason": "750×0.72=540。"
      },
      {
        "choice": "810 萬噸",
        "truth": false,
        "reason": "810萬噸代回72%會超過540。"
      }
    ],
    "commonMistake": "把72%當成少72%，使用錯誤倍率。",
    "concept": "已知百分部分求總容量用除法。",
    "tags": [
      "數與量",
      "基準量判斷",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-percent-discount"
    ],
    "authoringIntent": "容量基準量。",
    "literacyContextNecessity": "目前蓄水與佔滿水位百分率共同界定滿水位這個基準量。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "72ad80eccea13a5b74b20926d103ba094e982bf9e69980d19423ae20939366fe"
  },
  {
    "questionId": "u02-s014-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一件商品售價 1020 元，已包含 5% 稅。未稅價格是多少？",
    "choices": [
      "969 元",
      "970 元",
      "1015 元",
      "約 971.43 元"
    ],
    "answerIndex": 3,
    "explanation": "依題意逐步處理：含稅價=未稅價×1.05；未稅價=1020÷1.05≈971.43。所以答案是「約 971.43 元」。",
    "steps": [
      "含稅價=未稅價×1.05",
      "未稅價=1020÷1.05≈971.43"
    ],
    "optionAnalysis": [
      {
        "choice": "969 元",
        "truth": false,
        "reason": "直接減5%但四捨五入錯。"
      },
      {
        "choice": "970 元",
        "truth": false,
        "reason": "不是整數970。"
      },
      {
        "choice": "1015 元",
        "truth": false,
        "reason": "只減5元。"
      },
      {
        "choice": "約 971.43 元",
        "truth": true,
        "reason": "約971.43元正確。"
      }
    ],
    "commonMistake": "把5%以含稅價為基準直接扣除。",
    "concept": "含稅價反求未稅基準量要除以1.05。",
    "tags": [
      "數與量",
      "基準量判斷",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-percent-discount"
    ],
    "authoringIntent": "稅率基準量。",
    "literacyContextNecessity": "含稅價、稅率與未稅價要求共同決定除以1.05，且需保留近似值。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2a1a029d347a276a9da1f80bd463ef64b17879120d10976a52ce422da41e31dc"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s014-cr001",
    "unitId": "u02",
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某校今年新生 552 人，比去年增加 15%。求去年新生人數，並驗算。",
    "requiredWork": [
      "指出去年為基準量。",
      "用除法反求。",
      "代回增加率。"
    ],
    "fullCreditSolution": [
      "今年=去年×1.15。",
      "去年=552÷1.15=480人。",
      "驗算480×15%=72，480+72=552。"
    ],
    "alternativeSolutions": [
      "可列方程1.15x=552。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "480人、基準說明與驗算完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但驗算略缺。"
      },
      {
        "score": 1,
        "criteria": "列式正確但除法算錯。"
      },
      {
        "score": 0,
        "criteria": "用552×0.85。"
      }
    ],
    "scoringNotes": [
      "人數為整數，結果合理。"
    ],
    "commonErrors": [
      "把今年552人當成100%的基準，直接算552×15%。",
      "用552÷0.15反求去年，混淆增加量與增加後總量。",
      "求得480後沒有代回1.15×480檢查。"
    ],
    "independentReview": {
      "derivedResult": "去年480人。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "31b4225b28836ab9d6c64769fa459d6ff3950c478be5841728d80a7891e07a23"
  },
  {
    "questionId": "u02-s014-cr002",
    "unitId": "u02",
    "topicId": "u02-fraction-ratio",
    "skillId": "fraction-base-quantity",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "甲的 40% 等於乙的 5/8，且甲為 250。求乙，並判斷甲比乙多或少百分之幾（以乙為基準）。",
    "requiredWork": [
      "先求共同比較量。",
      "反求乙。",
      "最後百分率以乙為基準。"
    ],
    "fullCreditSolution": [
      "甲的40%=250×0.4=100。",
      "乙×5/8=100，所以乙=100×8/5=160。",
      "甲比乙多90，增加率=90/160=56.25%。"
    ],
    "alternativeSolutions": [
      "可列0.4×250=0.625乙。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "乙160與甲比乙多56.25%完整。"
      },
      {
        "score": 2,
        "criteria": "乙正確但最後百分率基準錯或略缺。"
      },
      {
        "score": 1,
        "criteria": "求出共同量100。"
      },
      {
        "score": 0,
        "criteria": "把40%與5/8直接比較。"
      }
    ],
    "scoringNotes": [
      "最後比較明確以乙為基準。"
    ],
    "commonErrors": [
      "用90/250計算。",
      "把5/8當5%。"
    ],
    "independentReview": {
      "derivedResult": "乙=160；甲比乙多56.25%。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "0631e7608db837503415a275725530ff151c542c0d4076f565ef6dcea1df2a99"
  }
];

export const DRAWING_SPECS = [];
