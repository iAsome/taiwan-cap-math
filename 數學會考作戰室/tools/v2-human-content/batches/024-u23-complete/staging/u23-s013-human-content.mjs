// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u23-s013-lecture-r1",
  "unitId": "u23",
  "numericUnitId": 23,
  "topicId": "u23-measure",
  "skillId": "volume-unit-conversion",
  "title": "體積單位換算：邊長倍率要立方",
  "lockedSkillTitle": "體積單位換算",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能在立方公尺、立方公分、立方毫米間換算。",
    "能連結立方公分、毫升、公升與立方公尺。",
    "能辨認面積換算平方、體積換算立方。",
    "能在多步情境中先統一單位再計算。"
  ],
  "prerequisites": [
    {
      "skillId": "surface-area-net",
      "requiredLevel": "能辨認表面積使用平方單位、體積使用立方單位。",
      "bridge": "已會計算立體體積。本節確保不同長度單位形成的立方單位能正確轉換，避免只乘一次或平方。"
    }
  ],
  "glossary": [
    [
      "立方單位",
      "以某長度單位為邊長的單位正方體所占體積。"
    ],
    [
      "毫升mL",
      "容量單位，1mL=1cm³。"
    ],
    [
      "公升L",
      "容量單位，1L=1000mL=1000cm³。"
    ],
    [
      "立方公尺m³",
      "邊長1公尺正方體體積，等於1000公升。"
    ]
  ],
  "notation": [
    [
      "1 m=100 cm",
      "長度倍率100。"
    ],
    [
      "1 m³=100³ cm³",
      "體積倍率為長度倍率的三次方。"
    ],
    [
      "1 cm³=1 mL",
      "體積與容量連結。"
    ],
    [
      "1 L=1000 cm³",
      "常用容量換算。"
    ]
  ],
  "conceptNarrative": [
    "長度由公尺換公分乘100；面積要在兩方向各乘100，所以乘100²；體積有三方向，因此乘100³。",
    "1立方公尺=1,000,000立方公分，而不是100或10,000立方公分。",
    "1立方公分恰等於1毫升；1000立方公分等於1公升；因此1立方公尺等於1000公升。",
    "換算前先判斷是長度、面積還是體積，再依指數決定倍率方向。"
  ],
  "formalDefinitions": [
    [
      "公尺立方換公分立方",
      "乘100³=1,000,000。"
    ],
    [
      "公分立方換毫米立方",
      "乘10³=1000。"
    ],
    [
      "容量連結",
      "1cm³=1mL，1000cm³=1L，1m³=1000L。"
    ]
  ],
  "formulas": [
    [
      "1 m³=10⁶ cm³",
      [
        "1m=100cm"
      ],
      "三個方向各放大100倍。"
    ],
    [
      "1 cm³=10³ mm³",
      [
        "1cm=10mm"
      ],
      "三個方向各放大10倍。"
    ],
    [
      "1 L=1000 cm³",
      [
        "標準公升定義"
      ],
      "容量與幾何體積互換。"
    ]
  ],
  "nonApplicableCases": [
    "不能把體積換算只乘長度倍率。",
    "不能把1公升誤認為100立方公分。",
    "平方公分與立方公分是不同種類，不能直接換算。",
    "混合單位計算前不能直接相乘。"
  ],
  "method": [
    [
      "辨認量的種類",
      "是長度、面積、體積或容量？"
    ],
    [
      "寫基本長度關係",
      "例如1m=100cm。"
    ],
    [
      "把倍率提升到相同次方",
      "體積使用三次方。"
    ],
    [
      "決定乘或除",
      "換成較小單位數值變大。"
    ],
    [
      "用單位正方體或容量驗算",
      "1m³是否等於1000L？"
    ]
  ],
  "workedExamples": [
    [
      "L1",
      "2.5立方公尺等於多少立方公分？",
      [
        "2.5×1,000,000。"
      ],
      "2,500,000立方公分。"
    ],
    [
      "L2",
      "3600立方公分等於多少公升？",
      [
        "3600÷1000。"
      ],
      "3.6公升。"
    ],
    [
      "L3",
      "0.8公升等於多少毫升與立方公分？",
      [
        "0.8×1000。"
      ],
      "800毫升=800立方公分。"
    ],
    [
      "L4",
      "45000立方毫米等於多少立方公分？",
      [
        "1立方公分=1000立方毫米。",
        "45000÷1000。"
      ],
      "45立方公分。"
    ]
  ],
  "commonMistakes": [
    [
      "1m³乘100",
      "只看一條邊。",
      "體積倍率為100³。"
    ],
    [
      "1m³乘100²",
      "誤用面積倍率。",
      "三維要乘100³。"
    ],
    [
      "1L=100cm³",
      "少一個10倍。",
      "1L=1000cm³。"
    ],
    [
      "小單位換大單位仍乘",
      "方向判斷錯。",
      "換成較大單位應除以倍率。"
    ],
    [
      "cm²與cm³互換",
      "混淆不同維度。",
      "沒有額外長度資訊不能互換。"
    ],
    [
      "計算後漏改單位",
      "數值與單位不一致。",
      "換算式每一步都帶單位。"
    ]
  ],
  "selfCheck": [
    "我是否先辨認量的次方？",
    "長度倍率是否立方？",
    "換成小單位數值是否變大？",
    "1cm³是否等於1mL？",
    "最終數值與單位是否配對？"
  ],
  "summary": [
    "體積換算倍率是長度倍率的三次方。",
    "1m³=10⁶cm³=1000L。",
    "1cm³=1mL。",
    "1L=1000cm³。",
    "不同維度不能直接互換。"
  ],
  "connections": {
    "previous": "前一節由展開圖處理平方單位；本節強調體積必須使用立方倍率。",
    "next": [
      "下一節組合體體積常混合公分、公尺與容量，須先統一單位。",
      "生活應用會把體積換成水量、材料量或容積。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u23-s013-v001",
      "u23-s013-v002",
      "u23-s013-v003",
      "u23-s013-v004",
      "u23-s013-v005",
      "u23-s013-v006",
      "u23-s013-v007",
      "u23-s013-v008",
      "u23-s013-v009",
      "u23-s013-v010",
      "u23-s013-v011",
      "u23-s013-v012"
    ],
    "constructedResponseIds": [
      "u23-s013-cr001",
      "u23-s013-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐例以100³、1000與10³獨立驗算2,500,000、3.6、800及45；特別檢查平方與立方不可互換、換大單位應除及1m³=1000L。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
  "contentSha256": "aa94de39b399c2dd6d965f7c0eddd57b6e3f39920d640f3f8fd44d76274bfa69"
};

export const QUESTIONS = [
  {
    "prompt": "將一個邊長 1 公尺的正方體，全部切成邊長 1 公分的小正方體，共可得到多少個？",
    "text": "將一個邊長 1 公尺的正方體，全部切成邊長 1 公分的小正方體，共可得到多少個？",
    "choices": [
      "1,000,000",
      "10,000",
      "100,000",
      "100"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：每方向100個；三方向相乘100³。所得結果是「1,000,000」。",
    "explanation": "1公尺=100公分；長、寬、高三方向各切成100段，所以小正方體數=100³=1,000,000個。",
    "steps": [
      "每方向100個",
      "三方向相乘100³"
    ],
    "optionAnalysis": [
      {
        "choice": "1,000,000",
        "truth": true,
        "reason": "依獨立計算「三方向相乘100³」，此選項符合所求「小正方體個數」。"
      },
      {
        "choice": "10,000",
        "truth": false,
        "reason": "平方倍率。"
      },
      {
        "choice": "100,000",
        "truth": false,
        "reason": "少一個10。"
      },
      {
        "choice": "100",
        "truth": false,
        "reason": "只乘一次。"
      }
    ],
    "misconceptionTarget": "把體積換算只用一次或平方倍率。",
    "authoringIntent": "用單位正方體計數理解立方換算。",
    "difficulty": "basic",
    "givenConditions": [
      "大正方體邊長1公尺",
      "小正方體邊長1公分",
      "完全切分無損耗"
    ],
    "target": "小正方體個數",
    "difficultyReason": "基礎：套用長度倍率的三次方。",
    "prerequisiteCheck": "已懂立方單位。 本題只再使用先備「surface-area-net」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "個數無單位，但來源為1m³含多少1cm³單位體。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "切割完整且小正方體無間隙，三方向皆為100個。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s013-v001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "體積單位換算",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "d5b18419245d09818974d66cf68a3365af659b49e156fad21f9cc54457c2062d"
  },
  {
    "prompt": "量杯中有 2500 立方公分的水，若刻度以公升表示，讀數是多少？",
    "text": "量杯中有 2500 立方公分的水，若刻度以公升表示，讀數是多少？",
    "choices": [
      "0.25",
      "2.5",
      "25",
      "250"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：2500÷1000=2.5。所得結果是「2.5」。",
    "explanation": "1000立方公分=1公升，所以2500÷1000=2.5公升。",
    "steps": [
      "2500÷1000=2.5"
    ],
    "optionAnalysis": [
      {
        "choice": "0.25",
        "truth": false,
        "reason": "少10倍。"
      },
      {
        "choice": "2.5",
        "truth": true,
        "reason": "依獨立計算「2500÷1000=2.5」，此選項符合所求「量杯公升讀數」。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "多10倍。"
      },
      {
        "choice": "250",
        "truth": false,
        "reason": "多100倍。"
      }
    ],
    "misconceptionTarget": "把1000立方公分與1公升的關係記錯。",
    "authoringIntent": "把幾何體積轉為容量讀數。",
    "difficulty": "basic",
    "givenConditions": [
      "水量2500立方公分",
      "量杯刻度為公升"
    ],
    "target": "量杯公升讀數",
    "difficultyReason": "基礎：一次容量換算。 本題以「把幾何體積轉為容量讀數。」作為該難度的具體判準。",
    "prerequisiteCheck": "已知容量定義。 本題只再使用先備「surface-area-net」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "cm³換L。 所求「量杯公升讀數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "1公升=1000立方公分，量杯讀數可為小數。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s013-v002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "體積單位換算",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "bab731b74069839ba809bf694082cc8ed30ae8299f0b718ab3f11d057b0a5db6"
  },
  {
    "prompt": "一瓶飲料標示 0.72 公升。若改用每格 1 毫升的刻度表示，液面應對應多少格？",
    "text": "一瓶飲料標示 0.72 公升。若改用每格 1 毫升的刻度表示，液面應對應多少格？",
    "choices": [
      "72",
      "72,000",
      "7200",
      "720"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：乘1000。所得結果是「720」。",
    "explanation": "1公升=1000毫升，所以0.72×1000=720毫升。",
    "steps": [
      "乘1000"
    ],
    "optionAnalysis": [
      {
        "choice": "72",
        "truth": false,
        "reason": "少一個0。"
      },
      {
        "choice": "72,000",
        "truth": false,
        "reason": "多兩個0。"
      },
      {
        "choice": "7200",
        "truth": false,
        "reason": "多一個0。"
      },
      {
        "choice": "720",
        "truth": true,
        "reason": "依獨立計算「乘1000」，此選項符合所求「刻度格數」。"
      }
    ],
    "misconceptionTarget": "小數點移動方向錯誤。 必須依「把容量換算成單位刻度數。」的關係重新核對。",
    "authoringIntent": "把容量換算成單位刻度數。",
    "difficulty": "basic",
    "givenConditions": [
      "飲料0.72公升",
      "每格1毫升"
    ],
    "target": "刻度格數",
    "difficultyReason": "基礎：容量單位直接換算。",
    "prerequisiteCheck": "已知公升毫升關係。 本題只再使用先備「surface-area-net」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "公升換毫升後，每1毫升對應1格。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "每格容量明確為1毫升，因此毫升數等於格數。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s013-v003",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "體積單位換算",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "f6f9d79053cff5f12e36aab491813b618633ffc6118381cb36f75fc5d47e7658"
  },
  {
    "prompt": "3.6 立方公分等於多少立方毫米？",
    "text": "3.6 立方公分等於多少立方毫米？",
    "choices": [
      "36",
      "360",
      "3600",
      "36,000"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：倍率10³=1000；3.6×1000=3600。所得結果是「3600」。",
    "explanation": "1公分=10毫米，所以1立方公分=10³=1000立方毫米；3.6×1000=3600。",
    "steps": [
      "倍率10³=1000",
      "3.6×1000=3600"
    ],
    "optionAnalysis": [
      {
        "choice": "36",
        "truth": false,
        "reason": "只乘10。"
      },
      {
        "choice": "360",
        "truth": false,
        "reason": "乘100。"
      },
      {
        "choice": "3600",
        "truth": true,
        "reason": "依獨立計算「3.6×1000=3600」，此選項符合所求「mm³數」。"
      },
      {
        "choice": "36,000",
        "truth": false,
        "reason": "多乘10。"
      }
    ],
    "misconceptionTarget": "用長度或面積倍率換算體積。",
    "authoringIntent": "公分立方換毫米立方。",
    "difficulty": "standard",
    "givenConditions": [
      "1cm=10mm"
    ],
    "target": "mm³數",
    "difficultyReason": "標準：需把10提升到三次方。",
    "prerequisiteCheck": "已懂立方倍率。 本題只再使用先備「surface-area-net」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "cm³換mm³。 所求「mm³數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "換小單位數值增大。 題幹已完整限制「mm³數」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s013-v004",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "體積單位換算",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "12d1ee82437f648c6f7332fe730d027550352c29eb6738b826ae45b3285cf2f1"
  },
  {
    "prompt": "45,000 立方毫米等於多少立方公分？",
    "text": "45,000 立方毫米等於多少立方公分？",
    "choices": [
      "4.5",
      "450",
      "45",
      "4500"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：除1000。所得結果是「45」。",
    "explanation": "1立方公分=1000立方毫米，所以45000÷1000=45立方公分。",
    "steps": [
      "除1000"
    ],
    "optionAnalysis": [
      {
        "choice": "4.5",
        "truth": false,
        "reason": "多除10。"
      },
      {
        "choice": "450",
        "truth": false,
        "reason": "少除10。"
      },
      {
        "choice": "45",
        "truth": true,
        "reason": "依獨立計算「除1000」，此選項符合所求「cm³數」。"
      },
      {
        "choice": "4500",
        "truth": false,
        "reason": "未除足。"
      }
    ],
    "misconceptionTarget": "換成較大單位時仍乘倍率。",
    "authoringIntent": "毫米立方換公分立方。",
    "difficulty": "standard",
    "givenConditions": [
      "1cm³=1000mm³"
    ],
    "target": "cm³數",
    "difficultyReason": "標準：判斷換大單位需除。",
    "prerequisiteCheck": "已會換算方向。 本題只再使用先備「surface-area-net」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "mm³換cm³。 所求「cm³數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "45000可整除1000。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s013-v005",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "體積單位換算",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "a1e9b07bf9ea46b706d77476932a35da6ec7fcac524eb8592e16bbee16d2bbe4"
  },
  {
    "prompt": "有 0.035 立方公尺的水，全部分裝到每桶 5 公升的容器中，恰好需要幾桶？",
    "text": "有 0.035 立方公尺的水，全部分裝到每桶 5 公升的容器中，恰好需要幾桶？",
    "choices": [
      "5桶",
      "6桶",
      "8桶",
      "7桶"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：0.035m³換35L；35÷5=7。所得結果是「7桶」。",
    "explanation": "0.035立方公尺=35公升；35÷5=7，所以恰好需要7桶。",
    "steps": [
      "0.035m³換35L",
      "35÷5=7"
    ],
    "optionAnalysis": [
      {
        "choice": "5桶",
        "truth": false,
        "reason": "5桶對應的總容量不等於35公升。"
      },
      {
        "choice": "6桶",
        "truth": false,
        "reason": "6桶對應的總容量不等於35公升。"
      },
      {
        "choice": "8桶",
        "truth": false,
        "reason": "8桶對應的總容量不等於35公升。"
      },
      {
        "choice": "7桶",
        "truth": true,
        "reason": "0.035立方公尺=35公升，35÷5=7。"
      }
    ],
    "misconceptionTarget": "只完成單位換算，未再除以每桶容量。",
    "authoringIntent": "先換算容量再求容器數。",
    "difficulty": "standard",
    "givenConditions": [
      "水量0.035立方公尺",
      "每桶5公升",
      "全部分裝"
    ],
    "target": "桶數",
    "difficultyReason": "標準：小數乘容量倍率。 本題以「先換算容量再求容器數。」作為該難度的具體判準。",
    "prerequisiteCheck": "已會m³與L關係。 本題只再使用先備「surface-area-net」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "立方公尺換公升後，公升除以公升/桶得桶。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "35公升恰可被5公升整除，不涉及取整。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s013-v006",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "體積單位換算",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "cc9f26dd3e034220f9bb5a8a32fd51123927819ad8d40946bfefb5b46f6c69e8"
  },
  {
    "prompt": "一個體積數值由立方公尺換成立方公分後變為原數值的幾倍？",
    "text": "一個體積數值由立方公尺換成立方公分後變為原數值的幾倍？",
    "choices": [
      "100倍",
      "1,000,000倍",
      "100,000倍",
      "10,000倍"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：100×100×100。所得結果是「1,000,000倍」。",
    "explanation": "每一方向公尺換公分放大100，體積數值放大100³=1,000,000倍。",
    "steps": [
      "100×100×100"
    ],
    "optionAnalysis": [
      {
        "choice": "100倍",
        "truth": false,
        "reason": "長度倍率。"
      },
      {
        "choice": "1,000,000倍",
        "truth": true,
        "reason": "依獨立計算「100×100×100」，此選項符合所求「數值倍數」。"
      },
      {
        "choice": "100,000倍",
        "truth": false,
        "reason": "少10倍。"
      },
      {
        "choice": "10,000倍",
        "truth": false,
        "reason": "面積倍率。"
      }
    ],
    "misconceptionTarget": "只根據單一邊或面積判斷。",
    "authoringIntent": "說明體積倍率來源。",
    "difficulty": "advanced",
    "givenConditions": [
      "公尺換公分倍率100"
    ],
    "target": "數值倍數",
    "difficultyReason": "進階：需以維度解釋倍率。",
    "prerequisiteCheck": "已理解三維尺度。 本題只再使用先備「surface-area-net」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "倍數無單位。 所求「數值倍數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "比較同一體積的不同單位數值。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s013-v007",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "體積單位換算",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "fc2f664c697f91cea510790b8c1d96b83fbe3e1da812e4b174aa998737065086"
  },
  {
    "prompt": "某數值是 8,000,000 立方公分，寫成立方公尺是多少？",
    "text": "某數值是 8,000,000 立方公分，寫成立方公尺是多少？",
    "choices": [
      "8",
      "0.8",
      "80",
      "800"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：除1,000,000。所得結果是「8」。",
    "explanation": "1立方公尺=1,000,000立方公分，所以8,000,000÷1,000,000=8立方公尺。",
    "steps": [
      "除1,000,000"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": true,
        "reason": "依獨立計算「除1,000,000」，此選項符合所求「m³數」。"
      },
      {
        "choice": "0.8",
        "truth": false,
        "reason": "小數點錯。"
      },
      {
        "choice": "80",
        "truth": false,
        "reason": "少除10。"
      },
      {
        "choice": "800",
        "truth": false,
        "reason": "少除100。"
      }
    ],
    "misconceptionTarget": "大數換算時零的個數判斷錯。",
    "authoringIntent": "大體積由cm³換m³。",
    "difficulty": "advanced",
    "givenConditions": [
      "8,000,000cm³"
    ],
    "target": "m³數",
    "difficultyReason": "進階：處理百萬倍率與大數。",
    "prerequisiteCheck": "已會m³與cm³關係。 本題只再使用先備「surface-area-net」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "cm³換m³。 所求「m³數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "數值恰為8個單位。 題幹已完整限制「m³數」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s013-v008",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "體積單位換算",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "7ab3759fe850662efbe66e46c57f2a8fa7f5494c8607cc17f0e0cdc1ba12caf2"
  },
  {
    "prompt": "下列哪一個等式正確？",
    "text": "下列哪一個等式正確？",
    "choices": [
      "1 cm²=1 mL",
      "1 cm³=1 mL",
      "1 m³=1000 cm³",
      "1 L=100 cm³"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：逐項核對維度與倍率。所得結果是「1 cm³=1 mL」。",
    "explanation": "1立方公分等於1毫升。平方公分是面積，不能等於容量；1立方公尺等於1,000,000立方公分；1公升等於1000立方公分。",
    "steps": [
      "逐項核對維度與倍率"
    ],
    "optionAnalysis": [
      {
        "choice": "1 cm²=1 mL",
        "truth": false,
        "reason": "維度不同。"
      },
      {
        "choice": "1 cm³=1 mL",
        "truth": true,
        "reason": "依獨立計算「逐項核對維度與倍率」，此選項符合所求「正確等式」。"
      },
      {
        "choice": "1 m³=1000 cm³",
        "truth": false,
        "reason": "少1000倍。"
      },
      {
        "choice": "1 L=100 cm³",
        "truth": false,
        "reason": "少10倍。"
      }
    ],
    "misconceptionTarget": "把面積單位與容量直接相等。",
    "authoringIntent": "辨識體積容量換算的維度。",
    "difficulty": "advanced",
    "givenConditions": [
      "常用單位定義"
    ],
    "target": "正確等式",
    "difficultyReason": "進階：四個近似敘述中檢查維度與倍率。",
    "prerequisiteCheck": "已會各單位關係。 本題只再使用先備「surface-area-net」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "單位等式。 所求「正確等式」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "精確。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "僅一項正確。 題幹已完整限制「正確等式」的範圍與取值方向。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s013-v009",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "體積單位換算",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "1bf54e84d5101b3fb4993b5a8a00a8d1a40bc931d48a45085df5a7a73fa434e3"
  },
  {
    "prompt": "一個水箱容量標示 1.2 立方公尺。若每桶可裝 15 公升，至少需要幾桶才能裝下同樣多的水？",
    "text": "一個水箱容量標示 1.2 立方公尺。若每桶可裝 15 公升，至少需要幾桶才能裝下同樣多的水？",
    "choices": [
      "80",
      "8",
      "800",
      "8000"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：換1200公升；除15得80。所得結果是「80」。",
    "explanation": "1.2立方公尺=1200公升。1200÷15=80桶。",
    "steps": [
      "換1200公升",
      "除15得80"
    ],
    "optionAnalysis": [
      {
        "choice": "80",
        "truth": true,
        "reason": "依獨立計算「除15得80」，此選項符合所求「桶數」。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "少10倍。"
      },
      {
        "choice": "800",
        "truth": false,
        "reason": "多10倍。"
      },
      {
        "choice": "8000",
        "truth": false,
        "reason": "多100倍。"
      }
    ],
    "misconceptionTarget": "把立方公尺換公升的倍率用錯。",
    "authoringIntent": "以容量換算決定桶數。",
    "difficulty": "literacy",
    "givenConditions": [
      "水量1.2m³",
      "每桶15L"
    ],
    "target": "桶數",
    "difficultyReason": "素養：不同容量單位須統一，桶數為實際數量。",
    "prerequisiteCheck": "已會m³換L與除法。 本題只再使用先備「surface-area-net」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "m³換L，結果桶。 所求「桶數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "恰整除。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "每桶容量固定且可裝滿。 題幹已完整限制「桶數」的範圍與取值方向。",
    "literacyContextNecessity": "水箱以立方公尺標示、桶以公升標示，且桶數必須向上取整；容量與容器規格共同形成換算與取整任務。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s013-v010",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "體積單位換算",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "a1503b28215bb34e5119b3d9e1724e0f50c41782cdc36b47795c77872a6b12df"
  },
  {
    "prompt": "醫療用注射器每支容量 25 毫升。一桶溶液有 0.8 公升，最多可裝滿幾支注射器？",
    "text": "醫療用注射器每支容量 25 毫升。一桶溶液有 0.8 公升，最多可裝滿幾支注射器？",
    "choices": [
      "3",
      "320",
      "32",
      "3200"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：換800mL；800÷25=32。所得結果是「32」。",
    "explanation": "0.8公升=800毫升；800÷25=32支。",
    "steps": [
      "換800mL",
      "800÷25=32"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "少一個0。"
      },
      {
        "choice": "320",
        "truth": false,
        "reason": "多一個0。"
      },
      {
        "choice": "32",
        "truth": true,
        "reason": "依獨立計算「800÷25=32」，此選項符合所求「支數」。"
      },
      {
        "choice": "3200",
        "truth": false,
        "reason": "多兩個0。"
      }
    ],
    "misconceptionTarget": "公升轉毫升或整數商計算錯誤。",
    "authoringIntent": "由容量決定可裝滿數量。",
    "difficulty": "literacy",
    "givenConditions": [
      "總量0.8L",
      "每支25mL",
      "只算裝滿"
    ],
    "target": "支數",
    "difficultyReason": "素養：需統一容量單位並解讀『裝滿』。",
    "prerequisiteCheck": "已會L換mL。 本題只再使用先備「surface-area-net」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "結果為支。 所求「支數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "恰整除。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "不考慮耗損。 題幹已完整限制「支數」的範圍與取值方向。",
    "literacyContextNecessity": "總溶液用公升而每支注射器用毫升，只有先統一單位並套用「裝滿」限制，才能得到完整支數。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s013-v011",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "體積單位換算",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "500122e3403cda9e256fa54ab510faaba111a830fc2acbcc3f346ce62f9ce2a7"
  },
  {
    "prompt": "一塊石材體積為 0.0045 立方公尺，密度為每立方公分 2.4 公克。其質量是多少公斤？",
    "text": "一塊石材體積為 0.0045 立方公尺，密度為每立方公分 2.4 公克。其質量是多少公斤？",
    "choices": [
      "1.08",
      "1080",
      "108",
      "10.8"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：m³乘1,000,000得4500cm³；乘2.4得10800g；除1000得10.8kg。所得結果是「10.8」。",
    "explanation": "0.0045立方公尺=4500立方公分。質量=4500×2.4=10800公克=10.8公斤。",
    "steps": [
      "m³乘1,000,000得4500cm³",
      "乘2.4得10800g",
      "除1000得10.8kg"
    ],
    "optionAnalysis": [
      {
        "choice": "1.08",
        "truth": false,
        "reason": "少10倍。"
      },
      {
        "choice": "1080",
        "truth": false,
        "reason": "多100倍。"
      },
      {
        "choice": "108",
        "truth": false,
        "reason": "公克未換公斤。"
      },
      {
        "choice": "10.8",
        "truth": true,
        "reason": "依獨立計算「除1000得10.8kg」，此選項符合所求「質量kg」。"
      }
    ],
    "misconceptionTarget": "體積換算與質量換算的倍率方向混淆。",
    "authoringIntent": "串聯體積與質量單位。",
    "difficulty": "literacy",
    "givenConditions": [
      "體積0.0045m³",
      "密度2.4g/cm³"
    ],
    "target": "質量kg",
    "difficultyReason": "素養：跨三種單位完成體積、密度與質量換算。",
    "prerequisiteCheck": "已會密度關係與公克公斤。",
    "estimatedTimeSec": 90,
    "unitCheck": "m³→cm³，g→kg。",
    "roundingCheck": "精確至0.1kg。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "密度固定。 題幹已完整限制「質量kg」的範圍與取值方向。",
    "literacyContextNecessity": "石材體積以立方公尺給出、密度以每立方公分公克給出，情境迫使做立方倍率換算後再求公斤質量。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s013-v012",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "體積單位換算",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "1950166663877998b967881ae1caf435106e1f59135343ca844fc0376d3271c5"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "prompt": "請用『單位正方體』的想法解釋為什麼 1 立方公尺等於 1,000,000 立方公分，不能只寫答案。",
    "requiredWork": [
      "寫出1公尺=100公分。",
      "說明三個互相垂直方向各有100個單位。",
      "計算100³。"
    ],
    "fullCreditSolution": [
      "邊長1公尺的正方體，換成公分後三條邊都是100公分。",
      "沿長、寬、高可分成100×100×100個邊長1公分的小正方體。",
      "因此1立方公尺=1,000,000立方公分。"
    ],
    "alternativeSolutions": [
      "也可用(1m)³=(100cm)³=100³cm³說明。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整說明三方向並得到1,000,000。"
      },
      {
        "score": 2,
        "criteria": "答案與100³正確，但幾何說明略缺。"
      },
      {
        "score": 1,
        "criteria": "知道倍率要超過100，或寫出兩個方向但未完成三次方。"
      },
      {
        "score": 0,
        "criteria": "只寫100或10,000，且無有效解釋。"
      }
    ],
    "partialCreditRules": [
      "答案與100³正確，但幾何說明略缺。",
      "知道倍率要超過100，或寫出兩個方向但未完成三次方。"
    ],
    "followThroughPolicy": "若100³算術有單一錯誤但三維理由正確，可保留概念分。",
    "unitNotationRules": "等式兩側分別用m³與cm³。",
    "answerOnlyPolicy": "只寫1,000,000至多1分，因要求解釋。",
    "difficulty": "standard",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "1m³=1,000,000cm³。",
      "ambiguityAndBoundary": "獨立以三方向各100個小立方體計數，乘積100³=10⁶；維度與方向均清楚。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s013-cr001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "b702d7a09c784cd087a10b88d877da10564193d63cb44c4aafa50dd44ce145d1"
  },
  {
    "prompt": "某容器內有 2.75 公升液體，先倒出 480 毫升，再加入 325 立方公分。最後有多少公升？請保留完整換算。",
    "requiredWork": [
      "把三個量換成同一單位。",
      "做先減後加。",
      "換回公升。"
    ],
    "fullCreditSolution": [
      "2.75公升=2750毫升。",
      "325立方公分=325毫升。",
      "最後量=2750-480+325=2595毫升=2.595公升。"
    ],
    "alternativeSolutions": [
      "也可將480毫升與325立方公分分別換成0.480公升與0.325公升，再算2.75-0.480+0.325。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "換算完整並得2.595公升。"
      },
      {
        "score": 2,
        "criteria": "答案正確但省略一個等值關係。"
      },
      {
        "score": 1,
        "criteria": "方法正確但有一處小數或加減錯誤。"
      },
      {
        "score": 0,
        "criteria": "把cm³視為不同不可相加，或無有效作答。"
      }
    ],
    "partialCreditRules": [
      "答案正確但省略一個等值關係。",
      "方法正確但有一處小數或加減錯誤。"
    ],
    "followThroughPolicy": "若單一換算錯誤但後續加減一致，可給方法分；最終單位錯不給答案分。",
    "unitNotationRules": "1cm³=1mL；1000mL=1L。",
    "answerOnlyPolicy": "只寫2.595公升可得2分，因題目要求完整換算。",
    "difficulty": "advanced",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "2.595公升。",
      "ambiguityAndBoundary": "獨立統一為毫升得到2595，再除1000；加減順序明確且液體量保持正值。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s013-cr002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-measure",
    "skillId": "volume-unit-conversion",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "05c3072a9d871c0bb0cf713b847f36a51d972e772980a14fddef481538913726"
  }
];

export const DRAWING_SPECS = [];
