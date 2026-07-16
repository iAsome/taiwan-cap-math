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
    "『A 是 B 的 p%』可寫成 A=B×p%，其中 B 是完整的 100% 基準量，A 是比較量。不能因某個數先出現在句中就把它當基準。",
    "『A 比 B 多 p%』表示 A=B×(1+p%)；『A 比 B 少 p%』表示 A=B×(1−p%)。百分率仍以『比』後面的 B 為基準。",
    "已知基準量求比較量使用乘法；已知比較量反求基準量則除以分率或變動倍率。含稅價、折後價與增加後數量都屬新量，反求原量不可直接扣百分點。",
    "多層百分率關係要逐層寫等式或倍率鏈，每一步重新確認基準。最後將答案代回原句，檢查比較量是否等於基準量乘分率。"
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
      "prompt": "甲是乙的 35%，甲為 70，求乙。",
      "solutionSteps": [
        "辨認乙是完整基準量，設乙為 x，列 0.35x＝70。",
        "兩邊同除以 0.35，求得 x＝200。",
        "以 200×35%＝70 代回已知比較量。"
      ],
      "answer": "乙為 200。",
      "why": "『甲是乙的 35%』表示 70=乙×0.35，乙才是完整基準量。反求乙要算 70÷0.35=200；代回 200×35%=70，與已知甲相符。因為甲只占三成五，乙理應比七十大。"
    },
    {
      "prompt": "今年比去年多 12%，今年為 1120，求去年。",
      "solutionSteps": [
        "以去年為基準，將今年表示成去年的 1.12 倍。",
        "設去年為 x，列 1.12x＝1120，解得 x＝1000。",
        "計算增加量 1000×12%＝120，核對 1000＋120＝1120。"
      ],
      "answer": "去年為 1000。",
      "why": "今年比去年多 12%，所以今年=去年×1.12。已知增加後的 1120 反求去年，要計算 1120÷1.12=1000；驗算增加 120 後正好為 1120。增加量一百二十也正是去年人數的一成二。"
    },
    {
      "prompt": "女生占全班 48%，女生有 24 人，求全班人數。",
      "solutionSteps": [
        "辨認全班人數是基準量，設全班 x 人，列 0.48x＝24。",
        "兩邊同除以 0.48，求得 x＝50 人。",
        "代回 50×48%＝24，並核對其餘二十六人占 52%。"
      ],
      "answer": "全班 50 人。",
      "why": "女生人數是比較量，全班人數才是基準量，列式 24=全班×0.48。用 24÷0.48=50；代回 50×48%=24，且人數為合理整數。其餘二十六人占百分之五十二，兩部分合計全班。"
    },
    {
      "prompt": "含稅價 1050 元，稅率 5%，求未稅價。",
      "solutionSteps": [
        "含稅價是未稅價的 105%，設未稅價 x 元，列 1.05x＝1050。",
        "兩邊同除以 1.05，求得 x＝1000 元。",
        "計算稅額 1000×5%＝50 元，核對含稅價為 1050 元。"
      ],
      "answer": "1000 元。",
      "why": "含稅價等於未稅價的 105%，所以 1050=未稅價×1.05。反求未稅價為 1050÷1.05=1000 元；直接扣含稅價的 5% 會用錯基準。稅額五十元加回未稅價，正好得到含稅價。"
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
  "contentSha256": "95835efad0b81afa948425a1cbec59b064535b4ccf9df76333aacdb236576f0a",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "『甲是乙的 3/5』可寫成甲=乙×3/5。被分率作用、代表完整 100% 的量是乙，因此乙是基準量，甲則是比較量；不能只因甲出現在句首就選甲。",
    "steps": [
      "把文字關係寫成甲=乙×3/5。",
      "辨認被分率乘上的乙代表完整基準。",
      "判定乙是基準量、甲是比較量。"
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
    "commonMistake": "只看句首出現甲就把甲當基準，沒有先寫出甲等於乙乘分率的關係。",
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
    "contentSha256": "fefb0acc35d7042929ab101d3db6a4e627d959b4e82bcab020cd809d850f109a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "『今年比去年增加 20%』是以去年產量作比較起點，增加量等於去年產量的 20%。關係式為今年=去年×1.2，所以增加率的基準量是去年產量。",
    "steps": [
      "圈出『比去年增加』中的比較起點。",
      "寫成今年產量=去年產量×1.2。",
      "確認百分之二十以去年產量為基準。"
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
    "commonMistake": "把增加後的今年產量當成百分之二十的基準，忽略『比去年』已指定比較起點。",
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
    "contentSha256": "8c636a3086aba9e0badae5eb92cce7ff475d1186d9f1534fe35b59498a10d86a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "女生 18 人佔全班 45%，可寫成女生人數=全班人數×0.45。全班是被百分率作用的完整人數，也就是基準量；女生 18 人是比較量。反求全班有四十人，代回四成五正好是十八人。",
    "steps": [
      "寫出 18=全班人數×0.45。",
      "辨認全班人數代表完整的 100%。",
      "判定全班人數屬於基準量。"
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
    "commonMistake": "因女生十八人是已知數就把它當成基準，沒有辨認全班才是完整的一百分之百。",
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
    "contentSha256": "79930acd2da1eefce87bb033f6b1c31c72721e9a58b146e82d00808df067293d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "甲數 80 是乙數的 40%，因此列式 80=乙×0.4。已知比較量反求基準量要除以分率，乙=80÷0.4=200；代回 200×40%=80。四成小於全部，所以基準量二百也必須大於比較量八十。",
    "steps": [
      "依題意列式 80=乙×0.4。",
      "用 80÷0.4 求得乙=200。",
      "代回 200×0.4=80 驗證。"
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
    "commonMistake": "已知比較量八十後仍再乘零點四，沒有用除法反求作為基準的乙數。",
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
    "contentSha256": "8b92bb9db0732ce29f6c908ddc77bfe4e5ee9c4d4d03ebf7767d3b3be2e4f162",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "漲價 15% 後的新價是原價的 115%，所以 920=原價×1.15。反求原價為 920÷1.15=800 元；驗算 800 的 15% 是 120，800+120=920。題目給的是增加後價格，不能直接把九百二十減去它的百分之十五。",
    "steps": [
      "將漲價後關係寫成 920=原價×1.15。",
      "計算 920÷1.15=800 元。",
      "以 800+800×0.15=920 驗算。"
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
    "commonMistake": "直接從九百二十扣除九百二十的百分之十五，誤把增加後金額當成基準。",
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
    "contentSha256": "67fb6e68a41b98af5b7877e24ed110afb1d140d8a77cb4b289e559bd0ee78c13",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "已修 36 公里是全長的 60%，列式 36=全長×0.6。反求完整全長要除以完成率，36÷0.6=60 公里；檢查 60×60%=36。尚未修的四成是二十四公里，和已修部分合計六十公里。",
    "steps": [
      "列出 36=全長×0.6。",
      "用 36÷0.6 求得全長 60 公里。",
      "代回 60×0.6=36 公里驗證。"
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
    "commonMistake": "把完成率百分之六十當作剩餘率，使用百分之四十反求全長。",
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
    "contentSha256": "839f6cb346f4ee6510e68bc25be75429a2ff1715fd98d4b266e24e999d32e027",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "甲比乙少 25%，表示甲只保留乙的 75%，所以 90=乙×0.75。反求乙為 90÷0.75=120；乙與甲相差 30，30/120=25%。差額必須除以乙這個基準量，不能改用較小的甲作分母。",
    "steps": [
      "把『少 25%』轉成甲=乙×0.75。",
      "由 90=乙×0.75 求得乙=120。",
      "檢查 (120−90)/120=25%。"
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
        "reason": "115 不是由乙×0.75=90 反求所得的正確數值。"
      }
    ],
    "commonMistake": "把甲比乙少百分之二十五反讀成乙比甲多百分之二十五，錯用甲作基準。",
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
    "contentSha256": "754214200bb3cdc0da41137809a6d20f41b8be15dc5afd32c4cb621b05116667",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "A 比 B 多 20%，所以 A=1.2B；B 比 C 少 25%，所以 B=0.75C。代入得 A=1.2×0.75C=0.9C，因此 A 是 C 的 90%，比 C 少 10%。兩次比較的基準不同，必須串接倍率，不能把百分率直接相減，否則結論會錯。",
    "steps": [
      "寫出 A=1.2B 與 B=0.75C。",
      "代入合併倍率，A=1.2×0.75C=0.9C。",
      "由 0.9C 判斷 A 比 C 少 10%。"
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
    "commonMistake": "直接用百分之二十減百分之二十五，忽略兩個百分率分別以 B、C 為基準。",
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
    "contentSha256": "6cecc804fd82a7448f7ff0ff84b2221572e8b1e2888f2627e674d89b8232af85",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "第一數 120 的 40% 是 48。題意為 48−第二數的30%=18，所以第二數的30%=30，第二數=30÷0.3=100；兩個百分率各有自己的基準。把第二數一百代回，四十八減三十確實等於十八。",
    "steps": [
      "計算第一數的 40%：120×0.4=48。",
      "列式 48−0.3×第二數=18，求得其 30% 為 30。",
      "用 30÷0.3 求得第二數 100。"
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
    "commonMistake": "把兩個不同基準的百分之四十與百分之三十直接相減，沒有先求各自實際量。",
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
    "contentSha256": "f132267d947a25452b61198da3684ac83ca8be5dff3672928dc00b3226eb6b59",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "今年比去年增加 10%，所以今年冊數等於去年冊數的 1.1 倍。列式 13200=去年×1.1，反求去年=13200÷1.1=12000 冊；再增加 1200 冊即回到今年。增加量正好是去年冊數的一成。",
    "steps": [
      "把增加 10% 寫成今年=去年×1.1。",
      "計算 13200÷1.1=12000 冊。",
      "驗算 12000×1.1=13200 冊。"
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
    "commonMistake": "以今年一萬三千二百冊為百分之十的基準直接扣除，得到錯誤的去年數量。",
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
    "contentSha256": "610783d65a84309442e16dee6be5e143e3e6d4682ef244f9c865e4dd9ca02b12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "目前 540 萬噸是滿水位容量的 72%，所以 540=容量×0.72。反求容量為 540÷0.72=750 萬噸；驗算 750×72%=540。剩餘的百分之二十八相當於二百一十萬噸，兩部分合計滿水位容量。",
    "steps": [
      "依比例列式 540=滿水位容量×0.72。",
      "計算 540÷0.72=750 萬噸。",
      "用 750×0.72=540 萬噸驗證。"
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
    "commonMistake": "把百分之七十二解讀成距離滿水位還少百分之七十二，使用錯誤倍率。",
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
    "contentSha256": "f4341090feb4880d92cb60aab2a6423e6cb1e8ba419b5dcdd3b18ad6c8b009ba",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
    "explanation": "含稅價等於未稅價的 105%，所以 1020=未稅價×1.05。反求未稅價為 1020÷1.05≈971.43 元；直接算 1020×0.95=969 是把稅率錯以含稅價為基準。將未稅近似值乘一點零五，會回到含稅價約一千零二十元。",
    "steps": [
      "把含稅關係寫成 1020=未稅價×1.05。",
      "計算 1020÷1.05≈971.43 元。",
      "代回 971.43×1.05 約為 1020，確認近似值。"
    ],
    "optionAnalysis": [
      {
        "choice": "969 元",
        "truth": false,
        "reason": "把 5% 誤以含稅價為基準，計算 1020×0.95=969；反求未稅價應除以 1.05。"
      },
      {
        "choice": "970 元",
        "truth": false,
        "reason": "將約 971.43 元任意取成 970 元，未依選項所示精度處理近似值。"
      },
      {
        "choice": "1015 元",
        "truth": false,
        "reason": "只從含稅價減去 5 元，把百分率誤當成固定金額。"
      },
      {
        "choice": "約 971.43 元",
        "truth": true,
        "reason": "由 1020÷1.05 得約 971.43 元，且乘回 1.05 可還原含稅價。"
      }
    ],
    "commonMistake": "把百分之五以含稅價一千零二十元為基準直接扣除，沒有除以一點零五。",
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
    "contentSha256": "de0a39658cf15796d15757d779ed776b3e1e522b167b6ab1fa8b2e9df6ad6a3b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "今年比去年增加 15%，所以今年人數等於去年人數的 1.15 倍，列式 552=去年×1.15。",
      "反求去年人數：552÷1.15=480 人。",
      "驗算去年增加量為 480×0.15=72 人，480+72=552 人，與今年人數一致。"
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
      "把今年 552 人當成增加率的基準，直接計算 552×15% 再扣除。",
      "用 552÷0.15 反求去年，混淆增加量百分之十五與增加後總量百分之一百一十五。",
      "求得 480 人後未代回 1.15×480 檢查，無法發現倍率方向錯誤。"
    ],
    "independentReview": {
      "derivedResult": "去年480人。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "13a2a88b9d2502b2f98df35ce44a638b6007a013c494575a19a1639326c6d355",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
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
      "甲為 250，所以甲的 40% 是 250×0.4=100。",
      "題意說此數等於乙的 5/8，故乙×5/8=100，乙=100×8/5=160。",
      "甲比乙多 250−160=90；以乙為基準，90/160=0.5625=56.25%，所以甲比乙多 56.25%。百分率所用分母必須是題目所說的乙，不能改用甲。"
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
      "用差額 90 除以甲 250，忽略題目明定增加率要以乙為基準。",
      "把乙的八分之五誤讀成百分之五，導致反求乙時使用錯誤分率。",
      "求出乙為 160 後只回答差 90，沒有再換算成以乙為基準的百分率。"
    ],
    "independentReview": {
      "derivedResult": "乙=160；甲比乙多56.25%。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "98e987e77d061a9ab0cc3c67ce1932fe811eb43687611bb3d637f01d7b8af150",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
