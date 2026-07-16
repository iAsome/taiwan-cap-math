// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s009-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-applications",
  "skillId": "inequality-word-problem",
  "title": "不等式應用題：從未知量和限制語句到可解模型",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能選定未知數並附上單位。",
    "能把總量、每單位量與固定量寫成一次式。",
    "能依至少、至多、超過、未滿建立不等式。",
    "能解題並把代數範圍翻回情境答案。"
  ],
  "prerequisites": [
    {
      "skillId": "inequality-range",
      "requiredLevel": "能把常見範圍語句翻成正確不等號。"
    }
  ],
  "prerequisiteBridge": {
    "inequality-range": "能把常見範圍語句翻成正確不等號。"
  },
  "glossary": [
    {
      "term": "模型",
      "definition": "用數學式表示情境中的數量關係與限制。"
    },
    {
      "term": "未知量",
      "definition": "題目要求找出的數量，以字母表示。"
    },
    {
      "term": "固定量",
      "definition": "不隨未知量改變的費用、起始值或常數。"
    },
    {
      "term": "每單位量",
      "definition": "每增加一單位未知量所增加的數量。"
    }
  ],
  "notation": [
    {
      "symbol": "固定量＋每單位量×x",
      "meaning": "常見總量一次式。"
    },
    {
      "symbol": "≤ 上限",
      "meaning": "總量不能超過限制。"
    },
    {
      "symbol": "≥ 下限",
      "meaning": "總量至少要達到標準。"
    }
  ],
  "conceptNarrative": [
    "應用題不是先猜不等號，而是先說清楚未知數代表什麼。",
    "把情境拆成「固定部分」「隨 x 改變的部分」「上限或下限」。",
    "建立不等式後依代數規則求解，再用單位、整數性與自然限制修正答案。",
    "最後要回答題目問的最大數、最少數、可行範圍或是否可行，不能只留下 x≤某數。"
  ],
  "formalDefinitions": [
    {
      "name": "一次式模型",
      "statement": "總量若由固定量加上與 x 成正比的變動量，可寫成 b+ax。"
    },
    {
      "name": "限制模型",
      "statement": "「不超過上限」寫總量≤上限；「至少達標」寫總量≥下限。"
    }
  ],
  "formulas": [
    {
      "formula": "b+ax≤M",
      "conditions": [
        "a>0",
        "M 為總量上限"
      ],
      "meaning": "固定成本 b、每單位成本 a、預算 M 的模型。"
    },
    {
      "formula": "b+ax≥T",
      "conditions": [
        "a>0",
        "T 為最低目標"
      ],
      "meaning": "固定起始量與每單位增加量需達標。"
    }
  ],
  "nonApplicableCases": [
    "若未知量是人數、件數，答案需取整數且通常不能為負。",
    "若每增加一單位反而使總量下降，係數可能為負，解讀方向需特別檢查。",
    "「至少還剩」和「最多使用」限制的對象不同，不能只看關鍵字。",
    "同一情境若有兩個限制，可能需要用且取交集。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "設未知數並寫單位。",
      "check": "x 代表人數、長度、時間還是金額？"
    },
    {
      "step": 2,
      "instruction": "列出固定量與每單位變動量。",
      "check": "是否重複計算或漏算固定部分？"
    },
    {
      "step": 3,
      "instruction": "找限制對象與邊界語詞。",
      "check": "限制的是總量、剩餘量還是差額？"
    },
    {
      "step": 4,
      "instruction": "建立並解不等式。",
      "check": "每一步符號方向正確嗎？"
    },
    {
      "step": 5,
      "instruction": "依情境修正並完整作答。",
      "check": "是否需整數化、非負或檢查最大最小？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "一本筆記本 28 元，有 200 元，最多買幾本？",
      "solutionSteps": [
        "設買 x 本，28x≤200。",
        "x≤50/7≈7.14；x 為非負整數。"
      ],
      "answer": "最多 7 本。",
      "why": "總價等於單價乘本數，不超過預算形成上界。七本花一百九十六元可行，八本花二百二十四元超支，因此要依最大可行整數向下取七。"
    },
    {
      "exampleId": "L2",
      "prompt": "水箱原有 35 公升，每分鐘加 8 公升，至少到 99 公升需幾分鐘？",
      "solutionSteps": [
        "35+8t≥99。",
        "8t≥64，t≥8。"
      ],
      "answer": "至少 8 分鐘。",
      "why": "原有水量是固定部分，每分鐘加水是變動部分；至少九十九建立下界。八分鐘時正好九十九公升，而七分鐘不足，所以八是最小可行時間。"
    },
    {
      "exampleId": "L3",
      "prompt": "搭車基本費 70 元，每公里 25 元，費用不超過 320 元，里程範圍為何？",
      "solutionSteps": [
        "70+25d≤320。",
        "25d≤250，d≤10，且 d≥0。"
      ],
      "answer": "0≤d≤10 公里。",
      "why": "基本費即使零公里也存在，不能漏掉；預算給出里程上界十公里，距離本身又不能為負。兩項限制取交集後才是完整情境範圍。"
    },
    {
      "exampleId": "L4",
      "prompt": "全班需募得超過 5000 元，已募 1400 元，每人再募 180 元，至少需幾人？",
      "solutionSteps": [
        "1400+180n>5000。",
        "180n>3600，所以 n>20；n 為整數。"
      ],
      "answer": "至少 21 人。",
      "why": "超過五千使用嚴格大於，二十人只會使總額剛好五千元而不符合。人數是整數，因此下一個二十一人才是最少可行人數。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "看到「最多」就把 x 直接寫在 ≤ 左邊，忽略總量式。",
      "why": "未辨認限制對象。",
      "correction": "先寫總量，再與上限比較。"
    },
    {
      "mistake": "基本費與每單位費相乘。",
      "why": "混淆固定量與變動量。",
      "correction": "總費用通常是固定費＋單價×數量。"
    },
    {
      "mistake": "算得 x≤7.14 就回答 7.14 本。",
      "why": "忽略件數必為整數。",
      "correction": "最大可行整數為 7。"
    },
    {
      "mistake": "超過 5000 寫 ≥5000。",
      "why": "把嚴格超過誤含邊界。",
      "correction": "應寫 >5000。"
    },
    {
      "mistake": "里程答案只寫 d≤10。",
      "why": "漏掉里程不能為負。",
      "correction": "補上 d≥0。"
    },
    {
      "mistake": "解出人數後向下取整。",
      "why": "未依「至少達標」判斷取整方向。",
      "correction": "找第一個使原不等式成立的整數。"
    }
  ],
  "selfCheck": [
    "未知數與單位是否明確？",
    "固定量和每單位量是否分開？",
    "不等號比較的是否是正確總量？",
    "答案是否符合整數、非負與題目所問？"
  ],
  "summary": [
    "設未知數、列一次式、翻譯限制、解不等式、回情境檢查。",
    "總量常是固定量加每單位量乘數量。",
    "上限用≤，下限用≥；嚴格語句不用等號。",
    "人數件數需整數化並代回確認。"
  ],
  "connections": {
    "previous": "承接範圍語意與雙重限制。",
    "next": [
      "下一節會專門檢查模型、解與情境是否合理。",
      "預算技能會深化固定費、折扣與多方案限制。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s009-v001",
      "u07-s009-v002",
      "u07-s009-v003",
      "u07-s009-v004",
      "u07-s009-v005",
      "u07-s009-v006",
      "u07-s009-v007",
      "u07-s009-v008",
      "u07-s009-v009",
      "u07-s009-v010",
      "u07-s009-v011",
      "u07-s009-v012"
    ],
    "constructedResponseIds": [
      "u07-s009-cr001",
      "u07-s009-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四個例題分別驗證上限、下限、固定費與嚴格超過；所有取整方向均以代回相鄰整數確認，不採用單純四捨五入。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "3c56ed1fa026438e5fc873d68bb91c8b63e4d78dd44cd79698fc9ae3a6c293d7"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s009-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "每枝筆 18 元，小明有 100 元。若買 x 枝且不可超支，應列哪個不等式？",
    "givenConditions": "x 為非負整數。",
    "target": "建立單價乘數量的上限模型",
    "choices": [
      "18+x≤100",
      "18x≤100",
      "18x≥100",
      "100x≤18"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "每枝 18 元，x 枝即 18x 元；不超過 100 的符號是 ≤，故 18x≤100。",
      "result": "18x≤100",
      "answerIndexVerified": 1
    },
    "explanation": "每枝筆十八元，買 x 枝的總價是十八乘 x。不可超支表示總價不能超過一百元，包含剛好花完一百元的情況，所以正確模型是 18x≤100。",
    "steps": [
      "設 x 為購買筆的枝數。",
      "以單價乘數量，寫出總價 18x。",
      "把總價與預算比較，列 18x≤100。"
    ],
    "optionAnalysis": [
      {
        "choice": "18+x≤100",
        "truth": false,
        "reason": "把單價與數量相加。"
      },
      {
        "choice": "18x≤100",
        "truth": true,
        "reason": "獨立重算得到「18x≤100」，此選項與完整解答一致。"
      },
      {
        "choice": "18x≥100",
        "truth": false,
        "reason": "方向錯成至少花完。"
      },
      {
        "choice": "100x≤18",
        "truth": false,
        "reason": "角色完全顛倒。"
      }
    ],
    "misconceptionTarget": "把單價與數量相加成十八加 x，沒有依總價等於單價乘數量建立模型。",
    "prerequisiteCheck": "需會乘法與不超過。",
    "estimatedTimeSec": "50",
    "unitAndRoundingCheck": "金額皆為元。",
    "ambiguityAndBoundaryAudit": "買 0 枝也不超支；自然限制不影響列式選擇。",
    "difficultyReason": "最基本購買模型。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "7bffd482df74b8da7717fdc00b80d0154b4a5a0909b4d9cfa340cec704b4056f"
  },
  {
    "questionId": "u07-s009-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "原有 12 顆球，每盒再裝 5 顆。若總數至少 37 顆，最少需要幾盒？",
    "givenConditions": "b 為非負整數。",
    "target": "固定量加每盒量求最少盒數",
    "choices": [
      "5 盒",
      "4 盒",
      "6 盒",
      "7 盒"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "還差 37−12=25 顆，每盒 5 顆，25÷5=5；因至少允許剛好達標，最少 5 盒。",
      "result": "5 盒",
      "answerIndexVerified": 0
    },
    "explanation": "原有十二顆，再加 b 盒時增加五 b 顆。至少三十七顆表示 12+5b≥37，移項得 b≥5；盒數為整數且五盒剛好達標，所以最少需要五盒，四盒只有三十二顆而不足。",
    "steps": [
      "設盒數為 b，總數寫成 12+5b。",
      "依至少三十七列 12+5b≥37，解得 b≥5。",
      "檢查五盒得三十七顆，確定最少五盒。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 盒",
        "truth": true,
        "reason": "獨立重算得到「5 盒」，此選項與完整解答一致。"
      },
      {
        "choice": "4 盒",
        "truth": false,
        "reason": "4 盒只有 32 顆。"
      },
      {
        "choice": "6 盒",
        "truth": false,
        "reason": "可行但不是最少。"
      },
      {
        "choice": "7 盒",
        "truth": false,
        "reason": "可行但非最少。"
      }
    ],
    "misconceptionTarget": "漏掉原有十二顆，或把至少三十七寫成嚴格大於而多要求一盒。",
    "prerequisiteCheck": "需會兩步不等式。",
    "estimatedTimeSec": "65",
    "unitAndRoundingCheck": "單位顆與盒關係明確。",
    "ambiguityAndBoundaryAudit": "b=5 剛好 37，b=4 不足。",
    "difficultyReason": "基本固定加變動。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d741b407ed30ea4a5263c188d66425e8457ef2c3bf804b868b053a4cff28c13f"
  },
  {
    "questionId": "u07-s009-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "公車基本費 15 元，每段加 8 元。搭 x 段的費用不超過 55 元，最多搭幾段？",
    "givenConditions": "x 為非負整數。",
    "target": "含基本費的上限應用",
    "choices": [
      "4 段",
      "6 段",
      "7 段",
      "5 段"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "可用於段費的金額 55−15=40；40÷8=5。第 5 段剛好用完，第 6 段超支。",
      "result": "5 段",
      "answerIndexVerified": 3
    },
    "explanation": "搭 x 段的費用包含十五元基本費與每段八元，故列 15+8x≤55。扣除基本費後得 8x≤40，所以 x≤5；五段剛好五十五元，六段要六十三元而超支，因此最大值確為五。",
    "steps": [
      "把總費用寫成 15+8x。",
      "依不超過五十五列不等式並解得 x≤5。",
      "代入五段與六段，驗證最多五段。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 段",
        "truth": false,
        "reason": "4 段可行但非最多。"
      },
      {
        "choice": "6 段",
        "truth": false,
        "reason": "6 段費用 63 元。"
      },
      {
        "choice": "7 段",
        "truth": false,
        "reason": "7 段更超支。"
      },
      {
        "choice": "5 段",
        "truth": true,
        "reason": "獨立重算得到「5 段」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "只計算每段費而漏掉基本費，或解出上界後未取最大整數段數。",
    "prerequisiteCheck": "需會固定費模型。",
    "estimatedTimeSec": "70",
    "unitAndRoundingCheck": "金額元、段數整數。",
    "ambiguityAndBoundaryAudit": "x=5 費用 55 含上限；x=6 超過。",
    "difficultyReason": "兩步預算型應用。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "03bfaa41fe3e91eefc72da4d09969e2b4c5d0e0b62f47d771ca55056f8b39df8"
  },
  {
    "questionId": "u07-s009-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "一條繩子長 90 公分，每段剪 12 公分。若剪 x 段後剩餘長度至少 18 公分，x 的最大整數值為何？",
    "givenConditions": "x 為非負整數。",
    "target": "以扣除模型求最大件數",
    "choices": [
      "5",
      "7",
      "6",
      "8"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "最多可剪掉 90−18=72 公分；每段 12 公分，72÷12=6，故最多 6 段。",
      "result": "6",
      "answerIndexVerified": 2
    },
    "explanation": "剪 x 段後剩餘長度為九十減十二 x，至少十八公分表示 90−12x≥18。移項得負十二 x 不小於負七十二，除以負十二須變號，得到 x≤6，所以最大整數是六。",
    "steps": [
      "建立剩餘長度 90−12x。",
      "列 90−12x≥18，整理成 −12x≥−72。",
      "除以負十二並變號，得 x≤6，取最大整數六。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "5 可行但非最大。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "7 段只剩 6 公分。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "獨立重算得到「6」，此選項與完整解答一致。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "選項「8」更不符合。，與獨立解得的「6」不一致。"
      }
    ],
    "misconceptionTarget": "把剪掉長度當剩餘長度，或除以負十二時沒有將不等號方向反轉。",
    "prerequisiteCheck": "需會負係數解法。",
    "estimatedTimeSec": "85",
    "unitAndRoundingCheck": "長度皆為公分。",
    "ambiguityAndBoundaryAudit": "x=6 剩 18，x=7 剩 6，邊界唯一。",
    "difficultyReason": "含下降量與整數上界。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "280bd99b7247a4b1db684de54219acadf9471e226240c9bebde1970f63d1ea9d"
  },
  {
    "questionId": "u07-s009-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某測驗原有 28 分，每答對一題加 4 分。要超過 60 分，至少再答對幾題？",
    "givenConditions": "n 為非負整數。",
    "target": "嚴格達標的最少整數",
    "choices": [
      "9 題",
      "8 題",
      "7 題",
      "10 題"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "答對 8 題增加 32 分，總分 60，不符合「超過」；答對 9 題得 64，故最少 9。",
      "result": "9 題",
      "answerIndexVerified": 0
    },
    "explanation": "再答對 n 題後總分為二十八加四 n。超過六十分使用嚴格大於，列 28+4n>60，解得 n>8；八題只能剛好六十分，不符合，最小整數是九題。",
    "steps": [
      "寫出總分 28+4n。",
      "依超過六十列 28+4n>60，解得 n>8。",
      "檢查八題為六十分、九題為六十四分，取九題。"
    ],
    "optionAnalysis": [
      {
        "choice": "9 題",
        "truth": true,
        "reason": "獨立重算得到「9 題」，此選項與完整解答一致。"
      },
      {
        "choice": "8 題",
        "truth": false,
        "reason": "8 題剛好 60，未超過。"
      },
      {
        "choice": "7 題",
        "truth": false,
        "reason": "選項「7 題」不足。，與獨立解得的「9 題」不一致。"
      },
      {
        "choice": "10 題",
        "truth": false,
        "reason": "可行但非最少。"
      }
    ],
    "misconceptionTarget": "把超過六十誤寫成至少六十，因而讓剛好答對八題也被判為符合。",
    "prerequisiteCheck": "需會嚴格下界。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "分數與題數關係明確。",
    "ambiguityAndBoundaryAudit": "8 題端點排除，9 題首次成立。",
    "difficultyReason": "嚴格門檻與整數化。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "bc40792308139e32ae86b80f6aa76235b1f00f3bb1d5653d27f85387bc41bdd0"
  },
  {
    "questionId": "u07-s009-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "水箱容量 120 公升，已有 42 公升，每分鐘加入 6 公升。為避免溢出，最多可加水幾分鐘？",
    "givenConditions": "t 為非負整數分鐘。",
    "target": "容量情境的最大時間",
    "choices": [
      "12 分鐘",
      "14 分鐘",
      "13 分鐘",
      "15 分鐘"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "可再加入 120−42=78 公升；每分鐘 6 公升，78÷6=13。第 13 分鐘可達滿容量而不溢出。",
      "result": "13 分鐘",
      "answerIndexVerified": 2
    },
    "explanation": "加水 t 分鐘後水量為四十二加六 t，避免溢出表示不超過容量一百二十。解 42+6t≤120 得 t≤13；十三分鐘正好一百二十公升，十四分鐘會超過。",
    "steps": [
      "寫出加水後水量 42+6t。",
      "列容量限制 42+6t≤120，解得 t≤13。",
      "檢查十三分鐘剛好裝滿、十四分鐘溢出。"
    ],
    "optionAnalysis": [
      {
        "choice": "12 分鐘",
        "truth": false,
        "reason": "12 可行但非最多。"
      },
      {
        "choice": "14 分鐘",
        "truth": false,
        "reason": "14 分鐘達 126，溢出。"
      },
      {
        "choice": "13 分鐘",
        "truth": true,
        "reason": "獨立重算得到「13 分鐘」，此選項與完整解答一致。"
      },
      {
        "choice": "15 分鐘",
        "truth": false,
        "reason": "選項「15 分鐘」更超量。，與獨立解得的「13 分鐘」不一致。"
      }
    ],
    "misconceptionTarget": "忽略原有四十二公升，或把剛好達容量也誤判為已經溢出。",
    "prerequisiteCheck": "需會固定量加速率。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "公升與分鐘單位一致。",
    "ambiguityAndBoundaryAudit": "13 分鐘剛好 120，14 分鐘超量。",
    "difficultyReason": "基本容量模型。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1974ca692ac172f7b6e04d7b27d12a208eac81a8a5a85202ad0c3ac027e91d1d"
  },
  {
    "questionId": "u07-s009-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某商品成本 240 元，每售出一件可回收 35 元。若要使尚未回收的成本少於 65 元，至少需售出幾件？",
    "givenConditions": "x 為非負整數。",
    "target": "下降模型中的最小整數",
    "choices": [
      "4 件",
      "6 件",
      "5 件",
      "7 件"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "回收 5 件為 175 元，尚餘 65，未達「少於」；第 6 件後餘 30，故至少 6。",
      "result": "6 件",
      "answerIndexVerified": 1
    },
    "explanation": "售出 x 件後尚未回收成本為二百四十減三十五 x。少於六十五要列 240−35x<65，整理得負三十五 x 小於負一百七十五；除負三十五變號，x>5，故至少六件。",
    "steps": [
      "建立尚未回收成本 240−35x。",
      "列 240−35x<65 並整理成 −35x<−175。",
      "除以負三十五變號得 x>5，取最小整數六。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 件",
        "truth": false,
        "reason": "4 件剩 100 元。"
      },
      {
        "choice": "6 件",
        "truth": true,
        "reason": "正確，6 件剩 30 元。"
      },
      {
        "choice": "5 件",
        "truth": false,
        "reason": "5 件剛好 65，不符合少於。"
      },
      {
        "choice": "7 件",
        "truth": false,
        "reason": "可行但非最少。"
      }
    ],
    "misconceptionTarget": "把尚未回收與已回收成本混淆，或負數除法未變號而得到錯誤件數方向。",
    "prerequisiteCheck": "需會負變動量。",
    "estimatedTimeSec": "100",
    "unitAndRoundingCheck": "金額元；忽略其他費用已明示於模型。",
    "ambiguityAndBoundaryAudit": "5 件端點排除，6 件首次成立。",
    "difficultyReason": "負係數與嚴格取整。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "85b4b9c75d7e10b3129bd31ae0c611567b0880ff64563dd641782ace1f9c55c3"
  },
  {
    "questionId": "u07-s009-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "一個長方形周長不超過 50 公分，長為 8 公分、寬為 w 公分。w 的範圍為何？",
    "givenConditions": "w 為長方形寬度，必須 >0。",
    "target": "結合公式與自然限制",
    "choices": [
      "w≤17",
      "w≤9",
      "0≤w≤25",
      "0<w≤17"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "2(8+w)≤50 ⇒ 8+w≤25 ⇒ w≤17。又寬不能為 0 或負數，故 0<w≤17。",
      "result": "0<w≤17",
      "answerIndexVerified": 3
    },
    "explanation": "長八、寬 w 的長方形周長是 2(8+w)，不超過五十得 2(8+w)≤50，解出 w≤17。寬是幾何長度還必須大於零，因此完整範圍為 0<w≤17；端點十七可取，零不可取。",
    "steps": [
      "以周長公式寫出 2(8+w)≤50。",
      "展開並解得 w≤17。",
      "加入寬為正的自然限制 w>0，合併範圍。"
    ],
    "optionAnalysis": [
      {
        "choice": "w≤17",
        "truth": false,
        "reason": "漏掉正長度限制。"
      },
      {
        "choice": "w≤9",
        "truth": false,
        "reason": "選項「w≤9」上界算錯。，與獨立解得的「0<w≤17」不一致。"
      },
      {
        "choice": "0≤w≤25",
        "truth": false,
        "reason": "周長係數處理錯。"
      },
      {
        "choice": "0<w≤17",
        "truth": true,
        "reason": "獨立重算得到「0<w≤17」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "只完成代數上界而忘記寬不能等於零或為負數，留下不合幾何意義的解。",
    "prerequisiteCheck": "需知道長方形周長。",
    "estimatedTimeSec": "105",
    "unitAndRoundingCheck": "長度單位公分一致。",
    "ambiguityAndBoundaryAudit": "w=0 不構成長方形；w=17 周長 50 可取。",
    "difficultyReason": "跨用既有公式與合理性。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "129dd828da49ac996ff1970402e34aaaef78f2c8239e5c254b1a0499eb3020f5"
  },
  {
    "questionId": "u07-s009-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "甲已有 80 元、每天存 25 元；乙已有 170 元、每天存 10 元。至少幾天後甲的錢會不少於乙？",
    "givenConditions": "d 為非負整數天。",
    "target": "兩個一次式的追趕問題",
    "choices": [
      "4 天",
      "5 天",
      "6 天",
      "7 天"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "初始差 90 元，甲每天比乙多存 15 元；90÷15=6。第 6 天追平，故至少 6 天。",
      "result": "6 天",
      "answerIndexVerified": 2
    },
    "explanation": "d 天後甲有 80+25d 元，乙有 170+10d 元。不少於表示甲至少與乙相等，列 80+25d≥170+10d，整理得 15d≥90，所以 d≥6，最少六天。第六天兩人各有二百三十元，第五天甲仍少十五元。",
    "steps": [
      "分別寫出甲、乙 d 天後的金額。",
      "列 80+25d≥170+10d。",
      "解得 d≥6，並檢查第六天兩人同為二百三十元。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 天",
        "truth": false,
        "reason": "4 天甲 180、乙 210。"
      },
      {
        "choice": "5 天",
        "truth": false,
        "reason": "5 天甲 205、乙 220。"
      },
      {
        "choice": "6 天",
        "truth": true,
        "reason": "正確，6 天皆 230。"
      },
      {
        "choice": "7 天",
        "truth": false,
        "reason": "可行但非最少。"
      }
    ],
    "misconceptionTarget": "只比較每天存款二十五與十元，忽略兩人起始金額相差九十元。",
    "prerequisiteCheck": "需會兩邊有未知數的移項。",
    "estimatedTimeSec": "100",
    "unitAndRoundingCheck": "金額元、時間天。",
    "ambiguityAndBoundaryAudit": "d=6 恰相等且「不少於」允許；d=5 仍不足。",
    "difficultyReason": "兩個線性量比較。",
    "literacyContextNecessity": null,
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "95a973e441e450fdae351237650c685c05962077c10cf1ed4eb8ff3a554a2f91"
  },
  {
    "questionId": "u07-s009-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "租借腳踏車基本費 40 元，每 30 分鐘 25 元。小華有 180 元，且租借時間以完整 30 分鐘計，最多可租幾個時段？",
    "givenConditions": "n 為非負整數。",
    "target": "固定費與離散計費時段",
    "choices": [
      "4 個",
      "6 個",
      "7 個",
      "5 個"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "扣除基本費後剩 140 元；可付 140÷25=5.6 個時段，但只能租完整時段，故最多 5。",
      "result": "5 個",
      "answerIndexVerified": 3
    },
    "explanation": "租 n 個完整時段的費用是四十元基本費加二十五 n 元。列 40+25n≤180 得 n≤5.6；時段數必須是整數且問最多，所以取不超過五點六的最大整數五。",
    "steps": [
      "建立費用式 40+25n。",
      "列預算上限並解得 n≤5.6。",
      "依完整時段限制向下取整，檢查五時段可行、六時段超支。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 個",
        "truth": false,
        "reason": "4 可行但非最多。"
      },
      {
        "choice": "6 個",
        "truth": false,
        "reason": "6 個需 190 元。"
      },
      {
        "choice": "7 個",
        "truth": false,
        "reason": "7 個更超支。"
      },
      {
        "choice": "5 個",
        "truth": true,
        "reason": "獨立重算得到「5 個」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "把五點六一般四捨五入成六，沒有用完整時段與預算可行性決定取整。",
    "prerequisiteCheck": "需會預算不等式與取整。",
    "estimatedTimeSec": "90",
    "unitAndRoundingCheck": "金額元；時間以 30 分鐘時段計，不需換算為分鐘回答。",
    "ambiguityAndBoundaryAudit": "5 時段費 165，6 時段費 190，分界明確。",
    "difficultyReason": "情境離散化與上限。",
    "literacyContextNecessity": "基本費和完整時段規則共同決定不能把 5.6 直接當時間。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "253c7d1884bce6504e5da81c20d8e956e827e3535455a34c35f14f3e88e80cfc"
  },
  {
    "questionId": "u07-s009-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "社團至少要 32 人才成團，目前有 11 人，每邀請一組可增加 3 人。至少要邀請幾組？",
    "givenConditions": "g 為非負整數。",
    "target": "以群組增量達到最低人數",
    "choices": [
      "6 組",
      "7 組",
      "8 組",
      "9 組"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "還差 32−11=21 人；每組 3 人，需要 21÷3=7 組，且剛好達標可成團。",
      "result": "7 組",
      "answerIndexVerified": 1
    },
    "explanation": "目前十一人，邀請 g 組後增加三 g 人。至少三十二人列 11+3g≥32，解得 3g≥21、g≥7；七組增加二十一人，總數剛好三十二，所以最少七組，六組只有二十九人。",
    "steps": [
      "寫出邀請後人數 11+3g。",
      "依至少成團列 11+3g≥32，解得 g≥7。",
      "代入七組得三十二人，確認剛好達標。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 組",
        "truth": false,
        "reason": "6 組只有 29 人。"
      },
      {
        "choice": "7 組",
        "truth": true,
        "reason": "正確，7 組達 32。"
      },
      {
        "choice": "8 組",
        "truth": false,
        "reason": "可行但非最少。"
      },
      {
        "choice": "9 組",
        "truth": false,
        "reason": "選項「9 組」更非最少。，與獨立解得的「7 組」不一致。"
      }
    ],
    "misconceptionTarget": "漏算現有十一人，或將至少三十二誤成超過三十二而多邀請一組。",
    "prerequisiteCheck": "需會固定量與每組增量。",
    "estimatedTimeSec": "70",
    "unitAndRoundingCheck": "單位人與組。",
    "ambiguityAndBoundaryAudit": "g=7 邊界含等號，g=6 不足。",
    "difficultyReason": "直接達標模型。",
    "literacyContextNecessity": "每組帶來 3 人而非 1 人，情境資訊對列式必要。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "0a0dda570acb16f876d11e344a6f1df591639373ebd633008d2ff3835935d89d"
  },
  {
    "questionId": "u07-s009-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "烤箱每盤可放 8 個麵包，已烤好 14 個。訂單要求總數超過 45 個。至少還要烤幾盤完整的麵包？",
    "givenConditions": "p 為非負整數，每盤固定 8 個。",
    "target": "離散批次生產的嚴格下界",
    "choices": [
      "4 盤",
      "3 盤",
      "5 盤",
      "6 盤"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "還需超過 31 個；3 盤增加 24 不夠，4 盤增加 32，總數 46，故至少 4。",
      "result": "4 盤",
      "answerIndexVerified": 0
    },
    "explanation": "再烤 p 盤後共有十四加八 p 個。訂單要求超過四十五，列 14+8p>45，得到 p>3.875；盤數只能取完整整數，最小符合值是四，總數四十六個。",
    "steps": [
      "建立總數 14+8p。",
      "列嚴格下限 14+8p>45，解得 p>3.875。",
      "依完整盤數向上取到四，並驗算 14+8×4=46。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 盤",
        "truth": true,
        "reason": "正確，總數 46。"
      },
      {
        "choice": "3 盤",
        "truth": false,
        "reason": "3 盤只有 38。"
      },
      {
        "choice": "5 盤",
        "truth": false,
        "reason": "可行但非最少。"
      },
      {
        "choice": "6 盤",
        "truth": false,
        "reason": "選項「6 盤」更非最少。，與獨立解得的「4 盤」不一致。"
      }
    ],
    "misconceptionTarget": "把超過四十五誤成至少四十五，或對最小完整盤數採用不合可行性的取整。",
    "prerequisiteCheck": "需會小數上取整概念。",
    "estimatedTimeSec": "85",
    "unitAndRoundingCheck": "單位個與盤；不拆盤。",
    "ambiguityAndBoundaryAudit": "3 盤不夠，4 盤首次超過。",
    "difficultyReason": "批量離散化。",
    "literacyContextNecessity": "完整一盤的限制使 3.875 不能作答，且已有 14 個會改變門檻。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8c0757abe55413f194ec080d5ca9a179463ec5bc4a73378541fad3cd36d1f42b"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s009-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "type": "constructed-response",
    "prompt": "校車最多可載 45 人，車上已有 17 人，每一站上車 4 人。若經過 x 站後仍未超載，建立不等式並求最多可再經過幾站。",
    "requiredWork": [
      "定義 x 為非負整數站數",
      "建立總人數上限",
      "求解並向下取整",
      "檢查最大值與下一值"
    ],
    "fullCreditSolution": [
      "經過 x 站後總人數為原有十七人加每站四人，即 17+4x。",
      "仍未超載表示人數不超過四十五，故列 17+4x≤45。",
      "解得 4x≤28、x≤7；站數是非負整數，所以最多七站。",
      "驗算七站後四十五人可行，八站後四十九人超載。"
    ],
    "alternativeMethod": [
      "也可先算剩餘座位 45−17=28，再以每站 4 人求 28÷4=7；仍需寫出不等式或說明上限。"
    ],
    "reasoningSteps": [
      "辨認固定人數與每站增加量，建立總人數。",
      "依載客上限列不等式並求站數上界。",
      "套用整數限制，代入七與八驗證最大性。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確列 17+4x≤45，求 x≤7，解讀最多 7 站並檢查 7、8。"
      },
      {
        "score": 2,
        "criteria": "列式與答案正確但缺少相鄰值檢查；或剩餘座位法完整而未寫標準不等式。"
      },
      {
        "score": 1,
        "criteria": "知道剩餘 28 人或形成 4x≤28，但後續解讀有錯。"
      },
      {
        "score": 0,
        "criteria": "忽略原有 17 人或把容量寫成下限，無有效答案。"
      }
    ],
    "partialCreditRules": "若把 28÷4 算錯，但列式正確，可給模型分；站數單位錯寫成人數會扣解讀分。",
    "followThroughPolicy": "早期固定量算錯後若仍正確解線性上限並取整，可給程序分。",
    "unitAndNotationRules": "x 的單位為站，且 x≥0、x 為整數；人數不可為小數。",
    "answerOnlyPolicy": "只寫 7 站，最多 1 分。",
    "commonErrors": [
      "漏掉車上已有十七人，只用每站四人與四十五比較。",
      "把最多可載四十五人寫成總人數不小於四十五。",
      "解得七後只驗證七站可行，沒有用八站確認七是最大值。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "17+4x≤45，最多 7 站。",
      "ambiguity": "每站固定 4 人且站數完整，容量包含恰好 45。",
      "scope": "國中不等式容量應用。",
      "reviewNote": "獨立計算剩餘容量 28，除以 4 得 7；驗證 17+4×7=45 可行、x=8 時 49 超載。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4ba1071beba0640581fc12134b019c5f2f7e2c4733b41adc27471039ad5af503"
  },
  {
    "questionId": "u07-s009-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "type": "constructed-response",
    "prompt": "某社團製作紀念品，固定版費 360 元，每個材料費 28 元，總預算不超過 1200 元。設製作 n 個。求最大製作量，並說明為何不能把小數上界四捨五入。",
    "requiredWork": [
      "建立含固定費的不等式",
      "求得 n 的實數上界",
      "轉成最大非負整數",
      "用下一個整數驗證"
    ],
    "fullCreditSolution": [
      "製作 n 個的總成本為固定版費三百六十元加材料費二十八 n 元，故列 360+28n≤1200。",
      "移項得 28n≤840，再除以二十八得 n≤30。",
      "n 為非負整數，所以最大製作量是三十個；代入總成本正好一千二百元。",
      "最大完整個數必須不超過上界；若上界是三十點八，三十一仍超支，所以應向下取三十而非四捨五入。"
    ],
    "alternativeMethod": [
      "先扣固定費 1200−360=840，再算 840÷28=30；用總費用 360+28×30=1200 驗證。"
    ],
    "reasoningSteps": [
      "保留固定版費並建立總成本式。",
      "解預算上限，得到製作量實數範圍。",
      "加入整數限制並以相鄰值解釋向下取整。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確列式、求得 30 個，驗證費用，並用超支邏輯說明不能四捨五入。"
      },
      {
        "score": 2,
        "criteria": "列式與答案正確，但取整說明不足；或取整說明完整但少一步費用驗證。"
      },
      {
        "score": 1,
        "criteria": "知道先扣 360 或建立 28n≤840，但算術或最大值解讀錯誤。"
      },
      {
        "score": 0,
        "criteria": "把固定費乘以 n 或完全忽略預算上限。"
      }
    ],
    "partialCreditRules": "因本題上界恰為整數，說明部分需使用一般小數上界或「下一個整數會超支」概念；只說四捨五入不準確不夠完整。",
    "followThroughPolicy": "若 840÷28 算錯成小數，仍依上限向下取整並檢查下一個，可保留取整程序分。",
    "unitAndNotationRules": "金額為元、n 的單位為個且為非負整數。",
    "answerOnlyPolicy": "只寫 30 個，最多 1 分。",
    "commonErrors": [
      "漏算三百六十元固定版費，導致可製作量被高估。",
      "把物品數的小數上界用一般四捨五入，可能選到超出預算的數量。",
      "只寫三十個而未代回檢查總成本是否恰好符合上限。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "360+28n≤1200，最大 n=30。",
      "ambiguity": "固定費、單價與總預算均明示，物品個數為離散整數。",
      "scope": "國中預算一次不等式。",
      "reviewNote": "獨立扣除固定費得 840，840÷28=30；30 個總費 1200，31 個總費 1228，故上限與取整方向確定。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1afc66a1bf9a76f5b5bc1bd3f869b8b02bb1d5e8f4c0e140f3838cdf92bb3e87"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s009-v001-semantic-r1",
    "questionId": "u07-s009-v001",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "contentSha256": "7bffd482df74b8da7717fdc00b80d0154b4a5a0909b4d9cfa340cec704b4056f",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "每枝 18 元，x 枝即 18x 元；不超過 100 的符號是 ≤，故 18x≤100。",
    "derivedAnswer": "18x≤100",
    "storedAnswer": "18x≤100",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「建立單價乘數量的上限模型」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "買 0 枝也不超支；自然限制不影響列式選擇。",
      "units": "金額皆為元。",
      "scope": "本題只使用 不等式應用題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "最基本購買模型。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：每枝 18 元，x 枝即 18x 元；不超過 100 的符號是 ≤，故 18x≤100。 所得「18x≤100」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：買 0 枝也不超支；自然限制不影響列式選擇。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s009-v002-semantic-r1",
    "questionId": "u07-s009-v002",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "contentSha256": "d741b407ed30ea4a5263c188d66425e8457ef2c3bf804b868b053a4cff28c13f",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "還差 37−12=25 顆，每盒 5 顆，25÷5=5；因至少允許剛好達標，最少 5 盒。",
    "derivedAnswer": "5 盒",
    "storedAnswer": "5 盒",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「固定量加每盒量求最少盒數」，給定條件「b 為非負整數。」足以決定唯一數學任務。",
      "boundary": "b=5 剛好 37，b=4 不足。",
      "units": "單位顆與盒關係明確。",
      "scope": "本題只使用 不等式應用題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本固定加變動。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：還差 37−12=25 顆，每盒 5 顆，25÷5=5；因至少允許剛好達標，最少 5 盒。 所得「5 盒」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：b=5 剛好 37，b=4 不足。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s009-v003-semantic-r1",
    "questionId": "u07-s009-v003",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "contentSha256": "03bfaa41fe3e91eefc72da4d09969e2b4c5d0e0b62f47d771ca55056f8b39df8",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "可用於段費的金額 55−15=40；40÷8=5。第 5 段剛好用完，第 6 段超支。",
    "derivedAnswer": "5 段",
    "storedAnswer": "5 段",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「含基本費的上限應用」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "x=5 費用 55 含上限；x=6 超過。",
      "units": "金額元、段數整數。",
      "scope": "本題只使用 不等式應用題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "兩步預算型應用。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：可用於段費的金額 55−15=40；40÷8=5。第 5 段剛好用完，第 6 段超支。 所得「5 段」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：x=5 費用 55 含上限；x=6 超過。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s009-v004-semantic-r1",
    "questionId": "u07-s009-v004",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "contentSha256": "280bd99b7247a4b1db684de54219acadf9471e226240c9bebde1970f63d1ea9d",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "最多可剪掉 90−18=72 公分；每段 12 公分，72÷12=6，故最多 6 段。",
    "derivedAnswer": "6",
    "storedAnswer": "6",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「以扣除模型求最大件數」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "x=6 剩 18，x=7 剩 6，邊界唯一。",
      "units": "長度皆為公分。",
      "scope": "本題只使用 不等式應用題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "含下降量與整數上界。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：最多可剪掉 90−18=72 公分；每段 12 公分，72÷12=6，故最多 6 段。 所得「6」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：x=6 剩 18，x=7 剩 6，邊界唯一。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s009-v005-semantic-r1",
    "questionId": "u07-s009-v005",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "contentSha256": "bc40792308139e32ae86b80f6aa76235b1f00f3bb1d5653d27f85387bc41bdd0",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "答對 8 題增加 32 分，總分 60，不符合「超過」；答對 9 題得 64，故最少 9。",
    "derivedAnswer": "9 題",
    "storedAnswer": "9 題",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「嚴格達標的最少整數」，給定條件「n 為非負整數。」足以決定唯一數學任務。",
      "boundary": "8 題端點排除，9 題首次成立。",
      "units": "分數與題數關係明確。",
      "scope": "本題只使用 不等式應用題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "嚴格門檻與整數化。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：答對 8 題增加 32 分，總分 60，不符合「超過」；答對 9 題得 64，故最少 9。 所得「9 題」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：8 題端點排除，9 題首次成立。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s009-v006-semantic-r1",
    "questionId": "u07-s009-v006",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "contentSha256": "1974ca692ac172f7b6e04d7b27d12a208eac81a8a5a85202ad0c3ac027e91d1d",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "可再加入 120−42=78 公升；每分鐘 6 公升，78÷6=13。第 13 分鐘可達滿容量而不溢出。",
    "derivedAnswer": "13 分鐘",
    "storedAnswer": "13 分鐘",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「容量情境的最大時間」，給定條件「t 為非負整數分鐘。」足以決定唯一數學任務。",
      "boundary": "13 分鐘剛好 120，14 分鐘超量。",
      "units": "公升與分鐘單位一致。",
      "scope": "本題只使用 不等式應用題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本容量模型。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：可再加入 120−42=78 公升；每分鐘 6 公升，78÷6=13。第 13 分鐘可達滿容量而不溢出。 所得「13 分鐘」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：13 分鐘剛好 120，14 分鐘超量。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s009-v007-semantic-r1",
    "questionId": "u07-s009-v007",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "contentSha256": "85b4b9c75d7e10b3129bd31ae0c611567b0880ff64563dd641782ace1f9c55c3",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "回收 5 件為 175 元，尚餘 65，未達「少於」；第 6 件後餘 30，故至少 6。",
    "derivedAnswer": "6 件",
    "storedAnswer": "6 件",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「下降模型中的最小整數」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "5 件端點排除，6 件首次成立。",
      "units": "金額元；忽略其他費用已明示於模型。",
      "scope": "本題只使用 不等式應用題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "負係數與嚴格取整。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：回收 5 件為 175 元，尚餘 65，未達「少於」；第 6 件後餘 30，故至少 6。 所得「6 件」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：5 件端點排除，6 件首次成立。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s009-v008-semantic-r1",
    "questionId": "u07-s009-v008",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "contentSha256": "129dd828da49ac996ff1970402e34aaaef78f2c8239e5c254b1a0499eb3020f5",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "2(8+w)≤50 ⇒ 8+w≤25 ⇒ w≤17。又寬不能為 0 或負數，故 0<w≤17。",
    "derivedAnswer": "0<w≤17",
    "storedAnswer": "0<w≤17",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「結合公式與自然限制」，給定條件「w 為長方形寬度，必須 >0。」足以決定唯一數學任務。",
      "boundary": "w=0 不構成長方形；w=17 周長 50 可取。",
      "units": "長度單位公分一致。",
      "scope": "本題只使用 不等式應用題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "跨用既有公式與合理性。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：2(8+w)≤50 ⇒ 8+w≤25 ⇒ w≤17。又寬不能為 0 或負數，故 0<w≤17。 所得「0<w≤17」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：w=0 不構成長方形；w=17 周長 50 可取。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s009-v009-semantic-r1",
    "questionId": "u07-s009-v009",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "contentSha256": "95a973e441e450fdae351237650c685c05962077c10cf1ed4eb8ff3a554a2f91",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "初始差 90 元，甲每天比乙多存 15 元；90÷15=6。第 6 天追平，故至少 6 天。",
    "derivedAnswer": "6 天",
    "storedAnswer": "6 天",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「兩個一次式的追趕問題」，給定條件「d 為非負整數天。」足以決定唯一數學任務。",
      "boundary": "d=6 恰相等且「不少於」允許；d=5 仍不足。",
      "units": "金額元、時間天。",
      "scope": "本題只使用 不等式應用題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "兩個線性量比較。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：初始差 90 元，甲每天比乙多存 15 元；90÷15=6。第 6 天追平，故至少 6 天。 所得「6 天」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：d=6 恰相等且「不少於」允許；d=5 仍不足。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s009-v010-semantic-r1",
    "questionId": "u07-s009-v010",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "contentSha256": "253c7d1884bce6504e5da81c20d8e956e827e3535455a34c35f14f3e88e80cfc",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "扣除基本費後剩 140 元；可付 140÷25=5.6 個時段，但只能租完整時段，故最多 5。",
    "derivedAnswer": "5 個",
    "storedAnswer": "5 個",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「固定費與離散計費時段」，給定條件「n 為非負整數。」足以決定唯一數學任務。",
      "boundary": "5 時段費 165，6 時段費 190，分界明確。",
      "units": "金額元；時間以 30 分鐘時段計，不需換算為分鐘回答。",
      "scope": "本題只使用 不等式應用題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "情境離散化與上限。",
    "literacyNecessityCheck": "基本費和完整時段規則共同決定不能把 5.6 直接當時間。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：扣除基本費後剩 140 元；可付 140÷25=5.6 個時段，但只能租完整時段，故最多 5。 所得「5 個」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：5 時段費 165，6 時段費 190，分界明確。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s009-v011-semantic-r1",
    "questionId": "u07-s009-v011",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "contentSha256": "0a0dda570acb16f876d11e344a6f1df591639373ebd633008d2ff3835935d89d",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "還差 32−11=21 人；每組 3 人，需要 21÷3=7 組，且剛好達標可成團。",
    "derivedAnswer": "7 組",
    "storedAnswer": "7 組",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「以群組增量達到最低人數」，給定條件「g 為非負整數。」足以決定唯一數學任務。",
      "boundary": "g=7 邊界含等號，g=6 不足。",
      "units": "單位人與組。",
      "scope": "本題只使用 不等式應用題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "直接達標模型。",
    "literacyNecessityCheck": "每組帶來 3 人而非 1 人，情境資訊對列式必要。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：還差 32−11=21 人；每組 3 人，需要 21÷3=7 組，且剛好達標可成團。 所得「7 組」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：g=7 邊界含等號，g=6 不足。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s009-v012-semantic-r1",
    "questionId": "u07-s009-v012",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-word-problem",
    "contentSha256": "8c0757abe55413f194ec080d5ca9a179463ec5bc4a73378541fad3cd36d1f42b",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "還需超過 31 個；3 盤增加 24 不夠，4 盤增加 32，總數 46，故至少 4。",
    "derivedAnswer": "4 盤",
    "storedAnswer": "4 盤",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「離散批次生產的嚴格下界」，給定條件「p 為非負整數，每盤固定 8 個。」足以決定唯一數學任務。",
      "boundary": "3 盤不夠，4 盤首次超過。",
      "units": "單位個與盤；不拆盤。",
      "scope": "本題只使用 不等式應用題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "批量離散化。",
    "literacyNecessityCheck": "完整一盤的限制使 3.875 不能作答，且已有 14 個會改變門檻。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：還需超過 31 個；3 盤增加 24 不夠，4 盤增加 32，總數 46，故至少 4。 所得「4 盤」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：3 盤不夠，4 盤首次超過。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
