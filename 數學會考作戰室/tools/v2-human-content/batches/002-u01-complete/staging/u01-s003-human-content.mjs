// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s003-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-basics",
  "skillId": "integer-number-line-position",
  "title": "數線位置：從原點與方向和刻度讀出坐標",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能辨認原點、正方向與刻度單位。",
    "能由點的位置讀出整數坐標。",
    "能由坐標在數線上定位。",
    "能處理每格不等於 1 的數線。",
    "能計算移動後的位置。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-positive-negative-meaning",
      "requiredLevel": "能依基準判斷正方向與負方向，理解正數、負數和 0 的相對位置。"
    }
  ],
  "glossary": [
    {
      "term": "數線",
      "definition": "用一直線上的位置表示數的圖。"
    },
    {
      "term": "原點",
      "definition": "坐標為 0 的基準點。"
    },
    {
      "term": "正方向",
      "definition": "通常以箭頭指向右方，數值沿此方向增加。"
    },
    {
      "term": "坐標",
      "definition": "表示某點在數線上位置的數。"
    },
    {
      "term": "刻度單位",
      "definition": "相鄰兩個刻度所代表的數值差。"
    }
  ],
  "notation": [
    {
      "symbol": "O",
      "meaning": "常用來表示原點。"
    },
    {
      "symbol": "A(a)",
      "meaning": "點 A 的坐標是 a。"
    },
    {
      "symbol": "→",
      "meaning": "數線的正方向或移動方向。"
    }
  ],
  "conceptNarrative": [
    "數線把正負數變成可見的位置。通常越往右數值越大，越往左數值越小。",
    "讀點前不能只數格子，必須先找兩個已標數字來判斷每格代表多少。",
    "坐標同時包含方向和距離：原點左側 4 單位是 -4，不是 4。",
    "移動問題使用「新坐標＝原坐標＋帶號移動量」；向右為正、向左為負，但仍以題目箭頭為準。"
  ],
  "formalDefinitions": [
    {
      "name": "數線坐標",
      "statement": "原點坐標為 0；沿正方向每增加一個刻度單位，坐標增加相同數值。"
    },
    {
      "name": "位置唯一性",
      "statement": "在固定數線上，每一個數對應唯一位置，每一個標定位置也有唯一坐標。"
    }
  ],
  "formulas": [
    {
      "formula": "新坐標＝原坐標＋移動量",
      "conditions": [
        "向右移記正，向左移記負",
        "移動量與刻度使用相同單位"
      ],
      "meaning": "求移動後的位置。"
    },
    {
      "formula": "每格單位＝兩個已知刻度的數值差÷間隔格數",
      "conditions": [
        "已知刻度位於同一數線"
      ],
      "meaning": "判斷非單位刻度。"
    }
  ],
  "nonApplicableCases": [
    "若箭頭方向或數值標示顯示右方不是正方向，不能套用左負右正。",
    "每格代表 2 時，走三格是 6 個單位，不是 3。",
    "點在兩刻度中間時，若未說明中間刻度，不得自行估讀。",
    "坐標和從原點的距離不同；-5 的坐標是 -5，距離是 5。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "找原點與正方向。",
      "check": "0 在哪裡？箭頭朝哪邊？"
    },
    {
      "step": 2,
      "instruction": "求每格代表多少。",
      "check": "相鄰已標數字的差是多少？"
    },
    {
      "step": 3,
      "instruction": "從已知刻度數到目標點。",
      "check": "向右加、向左減是否正確？"
    },
    {
      "step": 4,
      "instruction": "寫出帶正負號的坐標。",
      "check": "左側點是否漏了負號？"
    },
    {
      "step": 5,
      "instruction": "把坐標放回圖上檢查。",
      "check": "結果位置是否與圖一致？"
    }
  ],
  "workedExamples": [
    {
      "prompt": "數線每格 1，A 在原點左邊 5 格。A 的坐標是多少？",
      "answer": "A 的坐標是 −5。",
      "why": "原點坐標為 0，題目又說每格代表 1。從原點向左每走一格坐標減 1，連走五格依序到 −1、−2、−3、−4、−5，所以坐標必須帶負號。"
    },
    {
      "prompt": "數線上 −4 與 2 相隔三格，每格代表多少？",
      "answer": "每格代表 2。",
      "why": "先求兩個已知坐標的數值差，2−(−4)=6，這段長度被平均分成三格，所以每格代表 6÷3=2。格數與坐標差是不同的量，不能看到三格就回答 3。"
    },
    {
      "prompt": "B 從 −3 向右移 7 單位，終點坐標是多少？",
      "answer": "終點坐標是 4。",
      "why": "在通常向右為正的數線上，向右移 7 單位要把 +7 加到起點 −3，得到 −3+7=4。移動會跨過原點，先走三單位到 0，再走四單位到 4。"
    },
    {
      "prompt": "C 在坐標 6，向左移 9 單位，終點坐標是多少？",
      "answer": "終點坐標是 −3。",
      "why": "向左移 9 單位的帶號移動量是 −9，所以新坐標為 6+(−9)=−3。因移動距離大於起點到原點的 6 單位，終點會跨過 0 並落在原點左側 3 單位。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只數格數，沒有確認每格單位。",
      "why": "把圖形間距當成數值。",
      "correction": "先用已知刻度求每格大小。"
    },
    {
      "mistake": "原點左側寫成正數。",
      "why": "只記距離不記方向。",
      "correction": "左側通常為負坐標。"
    },
    {
      "mistake": "向左移 4 卻加 4。",
      "why": "移動方向的符號判斷錯誤。",
      "correction": "向左移動量記 -4。"
    },
    {
      "mistake": "把 -6 的距離和坐標都寫成 6。",
      "why": "混淆位置與距離。",
      "correction": "坐標 -6，離原點距離 6。"
    },
    {
      "mistake": "忽略題目另定正方向。",
      "why": "死背右正左負。",
      "correction": "以圖上箭頭與數值標示為準。"
    },
    {
      "mistake": "跨過 0 時停止計數。",
      "why": "誤把 0 當成不能跨越的端點。",
      "correction": "數線可連續跨過 0。"
    }
  ],
  "selfCheck": [
    "我找到 0 了嗎？",
    "每格是多少？",
    "方向符號正確嗎？",
    "坐標和距離有分開嗎？",
    "將答案放回圖上合理嗎？"
  ],
  "summary": [
    "原點是 0，通常向右增加、向左減少。",
    "讀點必須先確認刻度單位。",
    "新坐標＝原坐標＋帶號移動量。",
    "坐標可為負，距離不可為負。"
  ],
  "connections": {
    "previous": "先備技能是正負數的意義，需能把左右方向轉成正負。",
    "next": [
      "數的大小比較可直接利用數線左右位置。",
      "相反數與絕對值會使用關於原點的對稱與距離。",
      "整數加法可解釋成數線上的連續移動。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s003-v001",
      "u01-s003-v002",
      "u01-s003-v003",
      "u01-s003-v004",
      "u01-s003-v005",
      "u01-s003-v006",
      "u01-s003-v007",
      "u01-s003-v008",
      "u01-s003-v009",
      "u01-s003-v010",
      "u01-s003-v011",
      "u01-s003-v012"
    ],
    "constructedResponseIds": [
      "u01-s003-cr001",
      "u01-s003-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一重畫數線刻度，核對每格單位、左右移動和中點位置；四個例題的坐標均由刻度重新讀取。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "9ce0a715535d3a73edf55eae46633713ad9ab430c11ef6582c74b9a5e2d998d4",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s003-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上，點 A 位在原點左側 4 個單位。A 的坐標是多少？",
    "choices": [
      "-4",
      "4",
      "0",
      "-5"
    ],
    "answerIndex": 0,
    "explanation": "數線以原點為 0，通常向右是正方向、向左是負方向。點 A 在原點左側，故坐標必須帶負號；它與原點相距 4 個單位，所以 A 的坐標是 −4，而不是只表示距離的 4。",
    "steps": [
      "以原點為 0。",
      "向左四格。",
      "得到 -4。"
    ],
    "optionAnalysis": [
      {
        "choice": "-4",
        "truth": true,
        "reason": "0向左4單位到-4。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "4 是右側四單位。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "0 是原點。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "多走一格。"
      }
    ],
    "commonMistake": "只寫距離 4 而忽略左側的負號。",
    "concept": "數線左側通常為負坐標。",
    "tags": [
      "數與量",
      "數線位置",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-positive-negative-meaning"
    ],
    "authoringIntent": "由原點左側距離讀出負坐標。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "dc0a3c18d035f5627da6c4a38fa8df71f0ca62dc98e470e2ce345ed2c3d1cc54",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s003-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "在通常向右為正的數線上，坐標 +6 的點位於何處？",
    "choices": [
      "原點左側 6 單位",
      "原點右側 6 單位",
      "原點左側 5 單位",
      "原點"
    ],
    "answerIndex": 1,
    "explanation": "題目採用通常向右為正的數線，因此正坐標位於原點右側。+6 的正號指出方向向右，數字 6 表示離原點 6 個單位，所以位置是原點右側 6 單位。",
    "steps": [
      "正號表示正方向。",
      "通常正方向向右。",
      "距離為 6 單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "原點左側 6 單位",
        "truth": false,
        "reason": "左側應為 -6。"
      },
      {
        "choice": "原點右側 6 單位",
        "truth": true,
        "reason": "+6在0右側6單位。"
      },
      {
        "choice": "原點左側 5 單位",
        "truth": false,
        "reason": "距離與坐標均不符。"
      },
      {
        "choice": "原點",
        "truth": false,
        "reason": "原點坐標是0。"
      }
    ],
    "commonMistake": "把正號誤配成向左方向，因而把加六畫在原點左側。",
    "concept": "正坐標位於原點的正方向。",
    "tags": [
      "數與量",
      "數線位置",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-positive-negative-meaning"
    ],
    "authoringIntent": "由正坐標描述數線位置。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9eb9a6cffc38f6771727c86348f2920200a793a749e64e18ef4722db424e2548",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s003-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "fig-u01-s003-v003",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "依圖判斷點 P 的坐標。",
    "choices": [
      "-2",
      "-4",
      "-3",
      "3"
    ],
    "answerIndex": 2,
    "explanation": "先從圖上的相鄰刻度確認每格代表 1，再以標示的 0 為原點讀位置。P 位在原點左側三格，左側坐標要帶負號，因此依圖讀得 P=−3；3 只表示距離，不能作為坐標。",
    "steps": [
      "找到刻度 0。",
      "確認每格 1。",
      "向左數三格到 P。"
    ],
    "optionAnalysis": [
      {
        "choice": "-2",
        "truth": false,
        "reason": "-2 在P右一格。"
      },
      {
        "choice": "-4",
        "truth": false,
        "reason": "-4 在P左一格。"
      },
      {
        "choice": "-3",
        "truth": true,
        "reason": "正確讀值。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "符號方向錯。"
      }
    ],
    "commonMistake": "只數到原點的格數 3，卻漏寫負號。",
    "concept": "讀數線必須同時使用刻度與方向。",
    "tags": [
      "數與量",
      "數線位置",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-positive-negative-meaning"
    ],
    "authoringIntent": "從具體數線圖讀出負坐標。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "418506db530e740c6785b97dbeec658a46e149c09d73f935fd4cfb7f6c4030c4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s003-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "點 B 的起始坐標是 -2，向右移動 5 個單位後，終點坐標是多少？",
    "choices": [
      "-7",
      "-3",
      "2",
      "3"
    ],
    "answerIndex": 3,
    "explanation": "向右移動 5 個單位要記成 +5，並加在起始坐標 −2 上。計算 −2+5 時先由 −2 向右走 2 單位到 0，再走 3 單位到 3，所以終點坐標為 3。終點在原點右側，也符合移動方向。",
    "steps": [
      "起點 -2。",
      "向右移動量 +5。",
      "-2+5=3。"
    ],
    "optionAnalysis": [
      {
        "choice": "-7",
        "truth": false,
        "reason": "把向右誤寫成-5。"
      },
      {
        "choice": "-3",
        "truth": false,
        "reason": "只移一格或計算錯。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "把起點負號忽略。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "-2+5=3。"
      }
    ],
    "commonMistake": "把 -2 的絕對值與移動量相加得到 7。",
    "concept": "新坐標＝原坐標＋帶號移動量。",
    "tags": [
      "數與量",
      "數線位置",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-positive-negative-meaning"
    ],
    "authoringIntent": "計算跨過原點的向右移動。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3b47f6aba7398749733b65bcd0563dbf2ee10d3e6be037693e9697ef046322b9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s003-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上坐標 -6 與 2 的中點坐標是多少？",
    "choices": [
      "-2",
      "-4",
      "2",
      "4"
    ],
    "answerIndex": 0,
    "explanation": "中點坐標等於兩端坐標的平均數，因此 (−6+2)÷2=−4÷2=−2。也可從 −6 向右走兩端距離 8 的一半 4 個單位，會到 −2，與平均數計算相符。檢查 −2 到兩端的距離都同為 4。",
    "steps": [
      "兩坐標相加 -4。",
      "除以2。",
      "得到 -2。"
    ],
    "optionAnalysis": [
      {
        "choice": "-2",
        "truth": true,
        "reason": "(-6+2)/2=-2。"
      },
      {
        "choice": "-4",
        "truth": false,
        "reason": "只把兩數相加未除2。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "誤把右端當中點。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "符號錯。"
      }
    ],
    "commonMistake": "用兩端距離 8 除以 2 得 4，卻忘記從 -6 向右移 4 到 -2。",
    "concept": "數線中點位於兩坐標的平均位置。",
    "tags": [
      "數與量",
      "數線位置",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-positive-negative-meaning"
    ],
    "authoringIntent": "由兩端整數坐標求中點。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "82f8fc14d6bfee1950b522d3462be07d3fab5501a10b8de7678412e743d3b290",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s003-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "fig-u01-s003-v006",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "依圖判斷點 Q 的坐標。",
    "choices": [
      "5",
      "4",
      "6",
      "2"
    ],
    "answerIndex": 1,
    "explanation": "讀圖時先用已標刻度判斷單位，圖上相鄰刻度的數值相差 2，所以一格代表 2 而不是 1。點 Q 正好落在標示 4 的刻度上，因此它的坐標是 4；不能把到原點的格數 2 當答案。",
    "steps": [
      "讀出刻度序列每格2。",
      "找到Q所在刻度。",
      "刻度標示4。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "把格數誤當坐標。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "Q在標示4的刻度。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "讀成右一格。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "少算一格。"
      }
    ],
    "commonMistake": "數 Q 到原點有兩格就答 2，忽略每格代表 2。",
    "concept": "非單位刻度要先求每格代表的數值。",
    "tags": [
      "數與量",
      "數線位置",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-positive-negative-meaning"
    ],
    "authoringIntent": "讀取每格為2的數線。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "423a19cf136418cc1828d7385388956a4c8359c0420a4dfa04b59c271187b9a3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s003-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "點 P 的坐標是 -4。點 Q 與 P 關於坐標 1 的點對稱，Q 的坐標是多少？",
    "choices": [
      "-6",
      "4",
      "6",
      "5"
    ],
    "answerIndex": 2,
    "explanation": "關於坐標 1 的點對稱表示 1 是 P、Q 的中點。P=−4 到 1 的距離是 1−(−4)=5，所以 Q 要在 1 的另一側同樣距離 5，得到 1+5=6；不能只對 −4 取相反數。代回後 −4 與 6 的平均數確為 1。",
    "steps": [
      "算P到1的距離 1-(-4)=5。",
      "向中心另一側移5。",
      "1+5=6。"
    ],
    "optionAnalysis": [
      {
        "choice": "-6",
        "truth": false,
        "reason": "在錯誤方向再移2。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "只取P相反數，對稱中心不是0。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "Q=2×1-(-4)=6。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "少移一單位。"
      }
    ],
    "commonMistake": "看到「對稱」就直接取相反數 4，忽略對稱中心是 1。",
    "concept": "關於 c 對稱的兩點以 c 為中點。",
    "tags": [
      "數與量",
      "數線位置",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-positive-negative-meaning"
    ],
    "authoringIntent": "處理非原點中心的數線對稱。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "913679d0c682a7f94c471057e676bd6fac4f895b7ecdc765fcd2a3bb109921d8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s003-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A、B 的坐標分別為 -7、3。點 C 位在 AB 中點的右側 2 個單位，C 的坐標是多少？",
    "choices": [
      "-4",
      "-2",
      "2",
      "0"
    ],
    "answerIndex": 3,
    "explanation": "先求 A、B 的中點坐標：(−7+3)÷2=−4÷2=−2。題目還說 C 在中點右側 2 個單位，因此要再算 −2+2=0；−2 只是中點，不是 C 的最後坐標。結果 0 位於 −2 右側，方向也符合題意。",
    "steps": [
      "求中點 -2。",
      "向右記 +2。",
      "-2+2=0。"
    ],
    "optionAnalysis": [
      {
        "choice": "-4",
        "truth": false,
        "reason": "只算端點差的一半。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "停在中點。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "符號與移動錯。"
      },
      {
        "choice": "0",
        "truth": true,
        "reason": "中點-2，右移2到0。"
      }
    ],
    "commonMistake": "求出中點負二後立即作答，漏掉還要向右移二個單位。",
    "concept": "複合位置題先找中點，再套用位移。",
    "tags": [
      "數與量",
      "數線位置",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-positive-negative-meaning"
    ],
    "authoringIntent": "結合中點與帶號移動。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f71eacdad6bbc6a481981300a9efbd031657678631d9995e34e85be14dc2f964",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s003-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "數線上有一點與 -1 的距離為 5，且該點位於 -1 的右方。此點坐標為何？",
    "choices": [
      "4",
      "-6",
      "5",
      "-4"
    ],
    "answerIndex": 0,
    "explanation": "與 −1 距離 5 的位置原有左右兩個：右方是 −1+5=4，左方是 −1−5=−6。題目明確限制該點位於 −1 的右方，所以保留坐標 4，排除左方的 −6。檢查 |4−(−1)|=5，距離條件也成立。",
    "steps": [
      "固定點 -1。",
      "右方移動 +5。",
      "得到4。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": true,
        "reason": "-1+5=4，且4在-1右方。"
      },
      {
        "choice": "-6",
        "truth": false,
        "reason": "是左方等距點。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "把起點忽略。"
      },
      {
        "choice": "-4",
        "truth": false,
        "reason": "只減3。"
      }
    ],
    "commonMistake": "只解出距離方程的左側位置 -6，沒有讀「右方」。",
    "concept": "固定距離有左右兩點，附加方向可選出唯一位置。",
    "tags": [
      "數與量",
      "數線位置",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-positive-negative-meaning"
    ],
    "authoringIntent": "用方向條件排除另一個等距解。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "73910fb32ca258cc64e30dcb08fed1967d4abc7d7aafb03dcabfc13827b215ec",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s003-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "倉庫把中央閘門記為 0，向東的貨架編號為正、向西為負。搬運車從 -3 號位先向東移 8 格，再向西移 4 格，最後停在哪一號位？",
    "choices": [
      "-15",
      "1",
      "5",
      "9"
    ],
    "answerIndex": 1,
    "explanation": "依倉庫規則，向東移 8 格記 +8，向西移 4 格記 −4。從起點 −3 依序計算 −3+8−4：先到 5 號位，再向西到 1 號位，因此最後位置是 1。由起點看淨東移 4 格，−3+4 也得到 1。",
    "steps": [
      "起點 -3。",
      "東移8到5。",
      "西移4到1。"
    ],
    "optionAnalysis": [
      {
        "choice": "-15",
        "truth": false,
        "reason": "把兩次移動都當西移。"
      },
      {
        "choice": "1",
        "truth": true,
        "reason": "-3+8-4=1。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "只完成第一次移動。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "忽略起點。"
      }
    ],
    "commonMistake": "只計算兩段移動的淨值四格，忘記還要從起點負三開始。",
    "concept": "連續位移要從起點累加帶號移動量。",
    "tags": [
      "數與量",
      "數線位置",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-positive-negative-meaning"
    ],
    "authoringIntent": "利用倉庫位置規則計算多段移動。",
    "literacyContextNecessity": "閘門基準、東西正負規則、起點與兩段移動都影響答案。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "649cd3460d0b9b1d932d771ef075ac2a86652e844659d2b629960cd710a3c631",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s003-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "捷運施工以中央站為 0 公里，向西記負。A 標記位於 -12 公里，B 標記在 A 的東方 5 公里。B 的位置紀錄是多少？",
    "choices": [
      "-17 公里",
      "5 公里",
      "-7 公里",
      "17 公里"
    ],
    "answerIndex": 2,
    "explanation": "中央站為 0 且向西記負，因此 A 的位置是 −12 公里。B 在 A 的東方 5 公里，東移要加 5，故 B=−12+5=−7 公里；+5 只是相對 A 的位移量，不是 B 的位置。−7 仍在中央站西方，且比 A 更靠東。",
    "steps": [
      "A在-12。",
      "東移記+5。",
      "-12+5=-7。"
    ],
    "optionAnalysis": [
      {
        "choice": "-17 公里",
        "truth": false,
        "reason": "把東移誤作負。"
      },
      {
        "choice": "5 公里",
        "truth": false,
        "reason": "只寫移動量。"
      },
      {
        "choice": "-7 公里",
        "truth": true,
        "reason": "B=-12+5=-7公里。"
      },
      {
        "choice": "17 公里",
        "truth": false,
        "reason": "忽略負起點並相加絕對值。"
      }
    ],
    "commonMistake": "把「東方 5 公里」直接記成 B=+5，忽略它是相對 A 的位移。",
    "concept": "位置與相對位移必須相加。",
    "tags": [
      "數與量",
      "數線位置",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-positive-negative-meaning"
    ],
    "authoringIntent": "由施工里程基準與相對位置求新坐標。",
    "literacyContextNecessity": "中央站基準、向西為負、A位置與B相對位移都是必要資訊。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a4a4dfedd3bfae68fa009b395f6435d11662223dca42db98aaa435125633e260",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s003-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "桌遊計分軸上，棋子原在 4 分位置。第一回合向左移 9 格，第二回合向右移 2 格，每格 1 分。最後位置為何？",
    "choices": [
      "15",
      "-7",
      "7",
      "-3"
    ],
    "answerIndex": 3,
    "explanation": "每格 1 分，向左移 9 格記為 −9，向右移 2 格記為 +2。從原來的 4 分依序計算 4−9+2：第一回合到 −5，第二回合再到 −3，所以最後位置是 −3。兩回合的淨移動為向左 7 格，結果相同。",
    "steps": [
      "起點4。",
      "左移9到-5。",
      "右移2到-3。"
    ],
    "optionAnalysis": [
      {
        "choice": "15",
        "truth": false,
        "reason": "把兩次移動都當右。"
      },
      {
        "choice": "-7",
        "truth": false,
        "reason": "停在第一回合後再算錯。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "只加移動距離。"
      },
      {
        "choice": "-3",
        "truth": true,
        "reason": "4+(-9)+2=-3。"
      }
    ],
    "commonMistake": "把左移9與右移2的距離相加，沒有保留方向。",
    "concept": "數線遊戲的每次位移都要使用帶號數。",
    "tags": [
      "數與量",
      "數線位置",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-positive-negative-meaning"
    ],
    "authoringIntent": "在遊戲規則中追蹤跨零點的連續位置。",
    "literacyContextNecessity": "起始分數、左右方向、兩回合移動與每格單位共同決定結果。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d43e8296f6f06fad171dd3645dec73d20a7d98c29ae2f05123628dda99aeb201",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s003-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "在一條每格代表 2 的數線上，已知點 A 的坐標為 -6。請描述如何標出 A，並求從 A 向右移 5 格後的點 B 坐標。",
    "requiredWork": [
      "說明原點與每格單位。",
      "「5 格」必須換成數值 10。",
      "寫出 B 的帶號計算。"
    ],
    "fullCreditSolution": [
      "每格代表 2，坐標 −6 表示從原點向左 6 個單位，所以 A 應標在原點左側 6÷2=3 格處。",
      "從 A 向右移 5 格等於向右移 5×2=10 個單位，帶號移動量為 +10。",
      "因此 B 的坐標為 −6+10=4；檢查圖上 B 應在原點右側 2 格，正好對應坐標 4。"
    ],
    "alternativeSolutions": [
      "可直接從 -6 依序讀 -4、-2、0、2、4，得到 B=4。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "A 的標法、5 格=10 與 B=4 全部正確。"
      },
      {
        "score": 2,
        "criteria": "B=4 且計算主要正確，但 A 標法或刻度說明略缺。"
      },
      {
        "score": 1,
        "criteria": "知道向右增加，但把5格誤作5單位或只完成部分。"
      },
      {
        "score": 0,
        "criteria": "方向、刻度與結果皆無法辨認。"
      }
    ],
    "scoringNotes": [
      "若只寫 B=4 無過程，最高2分。",
      "圖畫等價且刻度清楚可接受。"
    ],
    "commonErrors": [
      "把 A 畫在左六格。",
      "算 -6+5=-1。",
      "向右卻使用負號。"
    ],
    "independentReview": {
      "derivedResult": "A左3格；B=4。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "28abd84d1d5862731ba7129ba8f5971b1b140c93f6e8b281231929b2a1bb4016",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s003-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-line-position",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "數線上 P=-5、Q=7。點 R 是 PQ 的中點，點 S 又在 R 左側 4 單位。求 R、S 坐標，並用位置關係檢查答案。",
    "requiredWork": [
      "先求中點。",
      "再由 R 向左移 4。",
      "檢查 R 到 P、Q 等距。"
    ],
    "fullCreditSolution": [
      "R 是 P、Q 的中點，所以 R=(−5+7)÷2=2÷2=1，而不是只取兩端距離的一半 6 當坐標。",
      "S 在 R 的左側 4 單位，向左記負，因此 S=1−4=−3。",
      "檢查：R 到 P 的距離 |1−(−5)|=6，到 Q 的距離 |7−1|=6；S=−3 也確實位於 R=1 左側 4 單位。"
    ],
    "alternativeSolutions": [
      "可在數線上從 -5 到 7 共12單位，走一半6單位到1，再左移4到-3。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "R=1、S=-3，且兩項位置檢查完整。"
      },
      {
        "score": 2,
        "criteria": "兩坐標正確但檢查不完整；或方法正確有一個小算術錯。"
      },
      {
        "score": 1,
        "criteria": "正確求出 R 或呈現正確中點方法。"
      },
      {
        "score": 0,
        "criteria": "未理解中點與左移。"
      }
    ],
    "scoringNotes": [
      "中點不得只取端點差的一半6作坐標。",
      "距離檢查可用文字或算式。"
    ],
    "commonErrors": [
      "把端點距離 12 的一半 6 誤寫成中點坐標，忽略坐標起點不是 0。",
      "由 R=1 向左移 4 單位時反而做加法，將 S 誤寫成 5。",
      "只列出 R、S 數值，沒有用兩端等距與左右位置完成檢查。"
    ],
    "independentReview": {
      "derivedResult": "R=1，S=-3。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "5887fa5826c9d6a6b90a5303f1ed0f5b132b8d30e38e8bb0d0ee63a43d8a73fc",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "fig-u01-s003-v003",
    "unitId": "u01",
    "skillId": "integer-number-line-position",
    "altText": "水平數線從 -4 到 4，每一格代表 1。點 P 位在 -3。",
    "drawingSpec": {
      "canvas": "720×220，viewBox 0 0 720 220，四周至少留白 45 像素",
      "axis": "水平實線由 (80,110) 到 (640,110)，左右端各有箭頭",
      "scale": "刻度 -4 到 4，相鄰刻度 70 像素，每格代表 1",
      "point": "P 位於 -3 的刻度上，中心 (150,110)，使用半徑 7 的實心圓",
      "labels": "各整數標在軸下 28 像素；P 標在點上方 28 像素",
      "lineStyle": "軸 3 像素黑色實線；刻度 2 像素；不得使用虛線",
      "proportionNote": "按比例繪製，可由刻度讀值",
      "accessibility": "讀圖時先找 0，再向左數三格得到 -3"
    },
    "svgPath": "figures/u01/fig-u01-s003-v003.svg",
    "reviewStatus": "independently-reviewed",
    "svgAssertions": [
      "<circle cx=\"150\" cy=\"110\"",
      ">P</text>",
      "x=\"150\" y=\"150\" text-anchor=\"middle\" font-size=\"20\">-3</text>"
    ],
    "figureReview": {
      "reviewVersion": "human-figure-review-r2.1",
      "coordinateAndScaleCheck": "pass",
      "labelPlacementCheck": "pass",
      "solidDashedLineCheck": "pass",
      "questionConsistencyCheck": "pass",
      "answerLeakCheck": "pass",
      "mobileReadabilityCheck": "pass at 360 CSS px width",
      "accessibilityCheck": "pass: SVG title, desc, role=img and equivalent altText present",
      "reviewNote": "逐刻度核對 -4 至 4 每格 1；P 的圓心在 x=150，與 -3 刻度完全重合，標籤在點上方且未遮住刻度。",
      "reviewedAt": "2026-07-12",
      "decision": "pass"
    },
    "contentSha256": "3c4c6a9118cf075fd7168a982603b44608054021a3185744e38587a3a7edffb4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "figureId": "fig-u01-s003-v006",
    "unitId": "u01",
    "skillId": "integer-number-line-position",
    "altText": "水平數線的刻度標示 -6、-4、-2、0、2、4、6；每格代表 2。點 Q 位在 4。",
    "drawingSpec": {
      "canvas": "720×220，viewBox 0 0 720 220",
      "axis": "水平實線由 (80,110) 到 (640,110)，左右箭頭",
      "scale": "七個刻度依序為 -6、-4、-2、0、2、4、6；相鄰刻度 80 像素，每格 2 單位",
      "point": "Q 位於數值 4 的刻度，中心 (480,110)，實心圓半徑 7",
      "labels": "刻度值在下方；Q 在上方；不可另標答案提示",
      "lineStyle": "全部實線，無虛線",
      "proportionNote": "按比例繪製",
      "accessibility": "不能把五格誤當坐標 5，必須依每格 2 單位讀成 4"
    },
    "svgPath": "figures/u01/fig-u01-s003-v006.svg",
    "reviewStatus": "independently-reviewed",
    "svgAssertions": [
      "<circle cx=\"480\" cy=\"110\"",
      ">Q</text>",
      "x=\"480\" y=\"150\" text-anchor=\"middle\" font-size=\"20\">4</text>"
    ],
    "figureReview": {
      "reviewVersion": "human-figure-review-r2.1",
      "coordinateAndScaleCheck": "pass",
      "labelPlacementCheck": "pass",
      "solidDashedLineCheck": "pass",
      "questionConsistencyCheck": "pass",
      "answerLeakCheck": "pass",
      "mobileReadabilityCheck": "pass at 360 CSS px width",
      "accessibilityCheck": "pass: SVG title, desc, role=img and equivalent altText present",
      "reviewNote": "重新計算七個刻度位置：-6 至 6 每格 2；數值 4 對應 x=480，Q 的圓心與文字均已由錯誤的 x=560 修正為 x=480。",
      "reviewedAt": "2026-07-12",
      "decision": "pass"
    },
    "contentSha256": "1e6283781e3a2102f7edd00867c1524225518928249bdd76bb7d5ede22767aa1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];
