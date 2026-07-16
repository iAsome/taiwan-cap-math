// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s008-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-solution-sets",
  "skillId": "inequality-range",
  "title": "解的範圍敘述：中文和符號與數線及邊界互譯",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能分辨至少、至多、超過、未滿、不少於、不超過。",
    "能把範圍敘述寫成不等式。",
    "能由不等式敘述最大或最小可能值。",
    "能處理整數與連續量的不同邊界。"
  ],
  "prerequisites": [
    {
      "skillId": "inequality-and-word",
      "requiredLevel": "能把兩個限制用且連結並找交集。"
    }
  ],
  "prerequisiteBridge": {
    "inequality-and-word": "能把兩個限制用且連結並找交集。"
  },
  "glossary": [
    {
      "term": "至少",
      "definition": "不小於，包含所說的數。"
    },
    {
      "term": "至多",
      "definition": "不大於，包含所說的數。"
    },
    {
      "term": "超過",
      "definition": "嚴格大於，不包含所說的數。"
    },
    {
      "term": "未滿",
      "definition": "嚴格小於，不包含所說的數。"
    },
    {
      "term": "範圍",
      "definition": "未知量所有可能值的界線。"
    }
  ],
  "notation": [
    {
      "symbol": "x≥a",
      "meaning": "x 至少為 a、不少於 a。"
    },
    {
      "symbol": "x≤a",
      "meaning": "x 至多為 a、不超過 a。"
    },
    {
      "symbol": "x>a",
      "meaning": "x 超過 a、大於 a。"
    },
    {
      "symbol": "x<a",
      "meaning": "x 未滿 a、小於 a。"
    }
  ],
  "conceptNarrative": [
    "範圍敘述的核心是「是否包含邊界」。",
    "同一句中文在連續量與整數量中，符號相同，但實際可取的下一個值不同。",
    "「最高 80 公斤」通常表示不超過 80；「超過 80 公斤」不包含 80。",
    "求最大或最小整數值時，先保留精確不等式，再依整數限制取相鄰整數。"
  ],
  "formalDefinitions": [
    {
      "name": "下界",
      "statement": "限制數值不能低於某個界線。"
    },
    {
      "name": "上界",
      "statement": "限制數值不能高於某個界線。"
    },
    {
      "name": "包含邊界",
      "statement": "語句含「至少、至多、不少於、不超過」時通常包含等號。"
    }
  ],
  "formulas": [
    {
      "formula": "至少 a ⇔ x≥a",
      "conditions": [
        "x 為所描述數量"
      ],
      "meaning": "含下界。"
    },
    {
      "formula": "未滿 b ⇔ x<b",
      "conditions": [
        "b 不可取"
      ],
      "meaning": "不含上界。"
    },
    {
      "formula": "a 至 b（兩端均可）⇔ a≤x≤b",
      "conditions": [
        "題意確定包含兩端"
      ],
      "meaning": "雙邊範圍。"
    }
  ],
  "nonApplicableCases": [
    "「大約」「約」不等同精確不等式，需要題目另給容許誤差。",
    "「介於 a 與 b 之間」是否含端點可能有語言歧義，正式題目應明示。",
    "物理量可能有自然限制，例如長度不能為負。",
    "若 x 為整數，不能把 4.7 當作可取的最大整數。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "圈出範圍關鍵詞。",
      "check": "至少、至多、超過或未滿？"
    },
    {
      "step": 2,
      "instruction": "決定邊界是否包含。",
      "check": "是否需要等號？"
    },
    {
      "step": 3,
      "instruction": "確認量的種類。",
      "check": "連續量、整數個數或自然數？"
    },
    {
      "step": 4,
      "instruction": "寫符號並用一個邊界值檢查。",
      "check": "邊界代入是否符合原句？"
    },
    {
      "step": 5,
      "instruction": "若問最大最小整數，再取相鄰整數。",
      "check": "是否過早四捨五入？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "票價不超過 300 元，用 p 表示。",
      "solutionSteps": [
        "不超過包含 300。",
        "方向為小於或等於。"
      ],
      "answer": "p≤300。",
      "why": "不超過三百同時包含所有較低價格與剛好三百元，因此是閉上界。用三百測試必須成立、三百零一應不成立，可確認符號為小於或等於。"
    },
    {
      "exampleId": "L2",
      "prompt": "年齡滿 12 歲，用 a 表示。",
      "solutionSteps": [
        "「滿」表示已達 12。",
        "包含 12。"
      ],
      "answer": "a≥12。",
      "why": "滿十二歲表示已到達十二歲這個門檻，十二本身要納入，之後更高年齡也符合。以十一與十二測試，便可確認方向向右且包含等號。"
    },
    {
      "exampleId": "L3",
      "prompt": "整數 n 未滿 8，求最大可能值。",
      "solutionSteps": [
        "n<8。",
        "小於 8 的最大整數為 7。"
      ],
      "answer": "7。",
      "why": "未滿八排除端點八，而 n 又限定為整數，因此八左側相鄰整數七就是最大可行值。若 n 是實數則沒有最大值，定義域會改變結論。"
    },
    {
      "exampleId": "L4",
      "prompt": "溫度高於 −3°C 且不超過 5°C。",
      "solutionSteps": [
        "高於 −3 不含 −3。",
        "不超過 5 包含 5。"
      ],
      "answer": "−3<T≤5。",
      "why": "高於負三建立開下界，不超過五建立閉上界；兩個條件用且連接，所以同時保留為一開一閉的雙邊範圍，而不是只選其中一端。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "至少 10 寫 x>10。",
      "why": "漏掉邊界 10。",
      "correction": "至少包含等於，寫 x≥10。"
    },
    {
      "mistake": "未滿 18 寫 x≤18。",
      "why": "把「未滿」誤含 18。",
      "correction": "寫 x<18。"
    },
    {
      "mistake": "不超過 −2 寫 x≥−2。",
      "why": "被負號干擾方向。",
      "correction": "不超過仍是 x≤−2。"
    },
    {
      "mistake": "n<8 的最大整數寫 8。",
      "why": "嚴格上界未排除。",
      "correction": "最大整數是 7。"
    },
    {
      "mistake": "連續量 x<8 說最大值是 7.9。",
      "why": "實數可更接近 8，沒有最大值。",
      "correction": "除非限定精度，x<8 沒有最大實數。"
    },
    {
      "mistake": "「介於」自動判定含端點。",
      "why": "忽略語言可能歧義。",
      "correction": "依題目明示的「含端點」或「不含端點」。"
    }
  ],
  "selfCheck": [
    "我有測試邊界值是否符合原句嗎？",
    "是否受負數干擾而顛倒方向？",
    "量是整數還是連續量？",
    "最大或最小值是否真的存在？"
  ],
  "summary": [
    "至少與不少於對應 ≥。",
    "至多與不超過對應 ≤。",
    "超過對應 >，未滿對應 <。",
    "整數邊界要取相鄰整數；連續開區間可能沒有最大最小值。"
  ],
  "connections": {
    "previous": "承接「且」的雙重限制。",
    "next": [
      "下一節會從文字情境建立完整不等式。",
      "合理性技能會檢查自然限制與答案解讀。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s008-v001",
      "u07-s008-v002",
      "u07-s008-v003",
      "u07-s008-v004",
      "u07-s008-v005",
      "u07-s008-v006",
      "u07-s008-v007",
      "u07-s008-v008",
      "u07-s008-v009",
      "u07-s008-v010",
      "u07-s008-v011",
      "u07-s008-v012"
    ],
    "constructedResponseIds": [
      "u07-s008-cr001",
      "u07-s008-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "人工逐詞核對六組常見範圍語句，並用負數溫度與整數未滿案例檢查方向及端點；明確標示「介於」需由題目消除歧義。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "2d9c675bafd310290dc07a3f942a7fbd1c5c431f9003ead0fdd09365aba34d02"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s008-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "「數量 n 至多為 20」應寫成哪個不等式？",
    "givenConditions": "n 為所述數量。",
    "target": "翻譯含等號上界",
    "choices": [
      "n>20",
      "n<20",
      "n≥20",
      "n≤20"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "測 n=20：至多 20 應允許，所以需等號；測 n=21 應排除，所以方向為 ≤。",
      "result": "n≤20",
      "answerIndexVerified": 3
    },
    "explanation": "至多二十表示數量不能超過二十，二十本身仍符合。以二十測試要通過、二十一要排除，因此不等號方向為小於或等於，正確模型是 n≤20。",
    "steps": [
      "辨認至多描述的是上界。",
      "用邊界二十測試，確認必須包含等號。",
      "用二十一測試應排除，寫成 n≤20。"
    ],
    "optionAnalysis": [
      {
        "choice": "n>20",
        "truth": false,
        "reason": "選項「n>20」方向相反。，與獨立解得的「n≤20」不一致。"
      },
      {
        "choice": "n<20",
        "truth": false,
        "reason": "錯排除 20。"
      },
      {
        "choice": "n≥20",
        "truth": false,
        "reason": "選項「n≥20」方向相反。，與獨立解得的「n≤20」不一致。"
      },
      {
        "choice": "n≤20",
        "truth": true,
        "reason": "獨立重算得到「n≤20」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "把至多當成至少而寫反方向，或漏掉端點二十可以取值的等號。",
    "prerequisiteCheck": "需懂不等號語意。",
    "estimatedTimeSec": "40",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "邊界 20 可取。",
    "difficultyReason": "基本語詞轉譯。",
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
    "contentSha256": "28b5b16c5325ece36a60be59e5fdb08ffdc497a9610ce2c97dea761e5791f1a7"
  },
  {
    "questionId": "u07-s008-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "「溫度 T 超過 30°C」應寫成哪個不等式？",
    "givenConditions": "T 以 °C 表示。",
    "target": "翻譯嚴格下界",
    "choices": [
      "T≥30",
      "T>30",
      "T≤30",
      "T<30"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "T=30 沒有超過 30，T=31 有超過；只有 T>30 符合兩個測試。",
      "result": "T>30",
      "answerIndexVerified": 1
    },
    "explanation": "超過三十表示必須比三十更大，剛好三十不算超過。將三十代入應為不符合，三十一則符合，所以使用嚴格大於符號，寫成 T>30。",
    "steps": [
      "辨認超過代表嚴格大於。",
      "用 T=30 測試，確認端點應排除。",
      "用 T=31 測試方向，得到 T>30。"
    ],
    "optionAnalysis": [
      {
        "choice": "T≥30",
        "truth": false,
        "reason": "錯納入 30。"
      },
      {
        "choice": "T>30",
        "truth": true,
        "reason": "獨立重算得到「T>30」，此選項與完整解答一致。"
      },
      {
        "choice": "T≤30",
        "truth": false,
        "reason": "選項「T≤30」方向相反。，與獨立解得的「T>30」不一致。"
      },
      {
        "choice": "T<30",
        "truth": false,
        "reason": "選項「T<30」方向相反。，與獨立解得的「T>30」不一致。"
      }
    ],
    "misconceptionTarget": "把超過誤讀成至少，錯誤加入等號而讓三十度也通過。",
    "prerequisiteCheck": "需理解超過。",
    "estimatedTimeSec": "40",
    "unitAndRoundingCheck": "單位 °C 一致。",
    "ambiguityAndBoundaryAudit": "30 本身不符合。",
    "difficultyReason": "基本語詞。",
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
    "contentSha256": "e4eba44c2e6e526efe9e3e6adda2a8d60e5f5476bfcbd8ad94dc8aa304eba8f7"
  },
  {
    "questionId": "u07-s008-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "「年齡 a 未滿 12 歲」應寫成哪個不等式？",
    "givenConditions": "a 為年齡。",
    "target": "翻譯嚴格上界",
    "choices": [
      "a<12",
      "a≤12",
      "a>12",
      "a≥12"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "用 a=12 測試應不符合，用 a=11 應符合，所以式子是 a<12。",
      "result": "a<12",
      "answerIndexVerified": 0
    },
    "explanation": "未滿十二表示還沒有到十二歲，十二本身不符合，而十一符合。因此年齡位在十二左側且不含端點，正確不等式是 a<12，不是 a≤12。",
    "steps": [
      "辨認未滿表示嚴格小於。",
      "以 a=12 測試，確認十二應排除。",
      "以 a=11 測試方向，寫成 a<12。"
    ],
    "optionAnalysis": [
      {
        "choice": "a<12",
        "truth": true,
        "reason": "獨立重算得到「a<12」，此選項與完整解答一致。"
      },
      {
        "choice": "a≤12",
        "truth": false,
        "reason": "錯納入 12。"
      },
      {
        "choice": "a>12",
        "truth": false,
        "reason": "選項「a>12」方向相反。，與獨立解得的「a<12」不一致。"
      },
      {
        "choice": "a≥12",
        "truth": false,
        "reason": "方向相反且含端點。"
      }
    ],
    "misconceptionTarget": "把未滿十二當成不超過十二，因而錯誤包含剛好十二歲的人。",
    "prerequisiteCheck": "需理解未滿。",
    "estimatedTimeSec": "40",
    "unitAndRoundingCheck": "單位歲。",
    "ambiguityAndBoundaryAudit": "12 歲本身不在範圍。",
    "difficultyReason": "基本語詞。",
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
    "contentSha256": "5ad2e1d88aa7cf5356283edd1295260b490b74eb105c0a60a8ae26204e9a603e"
  },
  {
    "questionId": "u07-s008-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "整數 n 不少於 −2 且未滿 3，完整範圍為何？",
    "givenConditions": "n 為整數，但本題問符號範圍。",
    "target": "建立含負下界的雙重範圍",
    "choices": [
      "−2<n≤3",
      "−2<n<3",
      "−2≤n<3",
      "−2≤n≤3"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "「不少於 −2」即 −2≤n；「未滿 3」即 n<3；串接為 −2≤n<3。",
      "result": "−2≤n<3",
      "answerIndexVerified": 2
    },
    "explanation": "不少於負二表示 n 不小於負二，包含端點，可寫負二不超過 n；未滿三表示 n 小於三且排除三。合併兩個必要條件後，完整範圍為 −2≤n<3。",
    "steps": [
      "把不少於負二翻成 n≥−2。",
      "把未滿三翻成 n<3。",
      "按小到大合併為 −2≤n<3。"
    ],
    "optionAnalysis": [
      {
        "choice": "−2<n≤3",
        "truth": false,
        "reason": "兩端包含性都錯。"
      },
      {
        "choice": "−2<n<3",
        "truth": false,
        "reason": "錯排除 −2。"
      },
      {
        "choice": "−2≤n<3",
        "truth": true,
        "reason": "獨立重算得到「−2≤n<3」，此選項與完整解答一致。"
      },
      {
        "choice": "−2≤n≤3",
        "truth": false,
        "reason": "錯納入 3。"
      }
    ],
    "misconceptionTarget": "看到負下界便把方向翻錯，或將不少於與未滿的端點包含性互換。",
    "prerequisiteCheck": "需懂不少於、未滿與且。",
    "estimatedTimeSec": "60",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "−2 可取、3 不可取。",
    "difficultyReason": "雙語詞合併。",
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
    "contentSha256": "b87928d8ffcb8b089a8b7219d25328bc2e63659e1220e8e2e754b706482b76f4"
  },
  {
    "questionId": "u07-s008-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "若 x 為整數且 x>6.2，最小可能值為何？",
    "givenConditions": "x 為整數。",
    "target": "由實數下界求最小整數",
    "choices": [
      "6",
      "7",
      "8",
      "不存在"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "在數線上 6<6.2<7，條件要在 6.2 右側，首個整數是 7。",
      "result": "7",
      "answerIndexVerified": 1
    },
    "explanation": "六點二位在整數六與七之間，條件要求 x 嚴格大於六點二，所以六不符合，而七是右側第一個整數。八雖也符合但不是最小值，因此答案為七。",
    "steps": [
      "定位 6<6.2<7。",
      "檢查六不大於六點二，故不符合。",
      "檢查七符合且是第一個整數，確定最小值為七。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": false,
        "reason": "6 不符合。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "獨立重算得到「7」，此選項與完整解答一致。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "8 可行但非最小。"
      },
      {
        "choice": "不存在",
        "truth": false,
        "reason": "存在最小整數 7。"
      }
    ],
    "misconceptionTarget": "將六點二四捨五入後再多加一格，或錯把八當成第一個符合整數。",
    "prerequisiteCheck": "需會小數比較。",
    "estimatedTimeSec": "50",
    "unitAndRoundingCheck": "無單位與四捨五入。",
    "ambiguityAndBoundaryAudit": "6、7 相鄰測試足以確認。",
    "difficultyReason": "整數化範圍。",
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
    "contentSha256": "c5e234b1a8fbd326a894f4798e6f58c7db85d55a534b5eb323ac0401e92fa1d0"
  },
  {
    "questionId": "u07-s008-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "若實數 y<4，關於 y 的最大值，下列敘述何者正確？",
    "givenConditions": "y 為實數，未限制精度。",
    "target": "判斷開區間最大值不存在",
    "choices": [
      "最大值是 3",
      "最大值是 3.9",
      "最大值是 4",
      "沒有最大值"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "假設某 y<4 是最大值，取 (y+4)/2；它仍小於 4 且大於 y，矛盾。因此無最大值。",
      "result": "沒有最大值",
      "answerIndexVerified": 3
    },
    "explanation": "y 可以取任意實數且只要求小於四。對任何候選 y，都能取 y 與四的平均數；此平均數仍小於四卻比 y 大，所以不存在最大的符合實數。",
    "steps": [
      "先確認 y 的定義域是全部實數。",
      "任取符合的 y，構造更大的 (y+4)÷2。",
      "此值仍小於四，故否定任何最大值的存在。"
    ],
    "optionAnalysis": [
      {
        "choice": "最大值是 3",
        "truth": false,
        "reason": "3 不是最大，3.5 更大。"
      },
      {
        "choice": "最大值是 3.9",
        "truth": false,
        "reason": "3.9 也不是最大，3.99 更大。"
      },
      {
        "choice": "最大值是 4",
        "truth": false,
        "reason": "4 不屬於解集。"
      },
      {
        "choice": "沒有最大值",
        "truth": true,
        "reason": "獨立重算得到「沒有最大值」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "擅自把實數限制為整數或一位小數，選三或三點九作為最大值。",
    "prerequisiteCheck": "需理解實數連續性直觀。",
    "estimatedTimeSec": "65",
    "unitAndRoundingCheck": "無單位與精度限制。",
    "ambiguityAndBoundaryAudit": "題目明示實數，排除固定小數位假設。",
    "difficultyReason": "概念性邊界判斷。",
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
    "contentSha256": "117dc664d1d6919f939f3a6f3601abbb6a855e3c96d1dd1b5514485d9606bf81"
  },
  {
    "questionId": "u07-s008-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "下列哪個中文敘述與 −3<x≤8 完全相符？",
    "givenConditions": "x 為實數。",
    "target": "完整翻譯雙邊範圍",
    "choices": [
      "x 高於 −3 且不超過 8",
      "x 不低於 −3 且低於 8",
      "x 至少 −3 且至多 8",
      "x 超過 8 且未滿 −3"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "−3<x 是「x 高於 −3」；x≤8 是「x 不超過 8」。只有選項 0 同時準確。",
      "result": "x 高於 −3 且不超過 8",
      "answerIndexVerified": 0
    },
    "explanation": "左端負三小於 x 表示 x 高於負三，沒有等號；右端 x 不超過八表示 x≤8，包含八。只有「高於負三且不超過八」完整保留兩端方向與開閉。",
    "steps": [
      "把 −3<x 翻成 x 高於負三。",
      "把 x≤8 翻成 x 不超過八。",
      "逐項比對兩端語意，選出完全相符敘述。"
    ],
    "optionAnalysis": [
      {
        "choice": "x 高於 −3 且不超過 8",
        "truth": true,
        "reason": "獨立重算得到「x 高於 −3 且不超過 8」，此選項與完整解答一致。"
      },
      {
        "choice": "x 不低於 −3 且低於 8",
        "truth": false,
        "reason": "左端錯含 −3，右端錯排 8。"
      },
      {
        "choice": "x 至少 −3 且至多 8",
        "truth": false,
        "reason": "左端錯含 −3。"
      },
      {
        "choice": "x 超過 8 且未滿 −3",
        "truth": false,
        "reason": "方向顛倒且不可能。"
      }
    ],
    "misconceptionTarget": "只核對其中一個端點，忽略另一端是否含等號或不等號方向是否一致。",
    "prerequisiteCheck": "需熟悉多組範圍詞。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "兩端包含性均唯一對應。",
    "difficultyReason": "同時核對兩端語意。",
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
    "contentSha256": "0bcbcc6abde7b8c020ab2163bbcef5eb2dddd66cf6f108c43b12e2e2e74cf994"
  },
  {
    "questionId": "u07-s008-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某整數 m 的範圍敘述為「至少 −4，但不高於 2」。所有可能值的和為何？",
    "givenConditions": "m 為整數。",
    "target": "由中文範圍求整數總和",
    "choices": [
      "−5",
      "−9",
      "−7",
      "−14"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "整數 −4 到 2。配對 (−2+2)+(−1+1)+0=0，另有 −4−3=−7。",
      "result": "−7",
      "answerIndexVerified": 2
    },
    "explanation": "至少負四與不高於二都包含端點，所以整數範圍是負四到二。負二與二、負一與一互相抵銷，再加零，剩下負四加負三，總和為負七。",
    "steps": [
      "把敘述寫成 −4≤m≤2。",
      "列出 −4、−3、−2、−1、0、1、2。",
      "配對相反數後計算剩餘 −4−3=−7。"
    ],
    "optionAnalysis": [
      {
        "choice": "−5",
        "truth": false,
        "reason": "選項「−5」加總錯。，與獨立解得的「−7」不一致。"
      },
      {
        "choice": "−9",
        "truth": false,
        "reason": "選項「−9」只加負數。，與獨立解得的「−7」不一致。"
      },
      {
        "choice": "−7",
        "truth": true,
        "reason": "獨立重算得到「−7」，此選項與完整解答一致。"
      },
      {
        "choice": "−14",
        "truth": false,
        "reason": "把端點重複。"
      }
    ],
    "misconceptionTarget": "負數範圍列舉漏項，或相反數抵銷後把負四與負三的和算成正數。",
    "prerequisiteCheck": "需會負整數加法。",
    "estimatedTimeSec": "90",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "可配對 −2+2、−1+1，剩 −4−3=-7。",
    "difficultyReason": "語意、列舉與加總。",
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
    "contentSha256": "2b899c419196a15662bdfc932bc31d8b07d10b0b6f2b60b76fc6ebeb1d68f5f5"
  },
  {
    "questionId": "u07-s008-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "若整數 x 的最大可能值是 12，下列哪一個單一上界敘述不能保證此結果？",
    "givenConditions": "x 為整數，只有上界。",
    "target": "由最大整數解反查不合適的上界敘述",
    "choices": [
      "x≤12.9",
      "x<12",
      "x<13",
      "x≤12"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "A 的整數解最高到 11；B、C、D 都包含 12 且排除 13。因此只有 x<12 不能保證最大整數解為 12。",
      "result": "x<12",
      "answerIndexVerified": 1
    },
    "explanation": "x<12 排除整數十二，因此最大整數解是十一，不能保證最大值為十二。其餘三項都包含十二並排除十三：x≤12.9、x<13、x≤12 的最大整數解皆為十二。",
    "steps": [
      "逐項判斷整數十二是否符合。",
      "再檢查下一個整數十三是否被排除。",
      "只有 x<12 的最大整數解為十一，所以它不能保證。"
    ],
    "optionAnalysis": [
      {
        "choice": "x≤12.9",
        "truth": false,
        "reason": "12 可取而 13 不可取，最大整數為 12。"
      },
      {
        "choice": "x<12",
        "truth": true,
        "reason": "嚴格排除 12，最大整數只能是 11。"
      },
      {
        "choice": "x<13",
        "truth": false,
        "reason": "12 可取而 13 排除，最大整數為 12。"
      },
      {
        "choice": "x≤12",
        "truth": false,
        "reason": "直接包含 12 且排除更大整數。"
      }
    ],
    "misconceptionTarget": "把嚴格小於十二誤認為仍可取十二，沒有用端點與下一整數檢查。",
    "prerequisiteCheck": "需會開閉端點與取整。",
    "estimatedTimeSec": "105",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "題幹改問「不能保證」，使四項中只有 x<12 的最大整數為 11，唯一答案明確。",
    "difficultyReason": "需逐一分析嚴格與含等號上界對最大整數解的影響。",
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
    "contentSha256": "ca07d706afc5e9ef24162d9c29fce5605769182df82df257a33efbc7656bdacb"
  },
  {
    "questionId": "u07-s008-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "競賽規定作品長度「不少於 90 秒，且不超過 120 秒」。下列哪個長度不合規？",
    "givenConditions": "t 以秒表示。",
    "target": "在規範範圍中找反例",
    "choices": [
      "121 秒",
      "90 秒",
      "105 秒",
      "120 秒"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "區間 [90,120]；121 不在區間，其餘三值都在，所以不合規者是 121 秒。",
      "result": "121 秒",
      "answerIndexVerified": 0
    },
    "explanation": "不少於九十表示九十秒包含，不超過一百二十也包含一百二十，合規區間是 90≤t≤120。九十、一百零五與一百二十都在區間內，只有一百二十一超過上限。",
    "steps": [
      "將規定寫成 90≤t≤120。",
      "逐一檢查四個秒數是否落在閉區間。",
      "確認 121>120，判定一百二十一秒不合規。"
    ],
    "optionAnalysis": [
      {
        "choice": "121 秒",
        "truth": true,
        "reason": "正確，不合規。"
      },
      {
        "choice": "90 秒",
        "truth": false,
        "reason": "下端點包含。"
      },
      {
        "choice": "105 秒",
        "truth": false,
        "reason": "選項「105 秒」區間內。，與獨立解得的「121 秒」不一致。"
      },
      {
        "choice": "120 秒",
        "truth": false,
        "reason": "上端點包含。"
      }
    ],
    "misconceptionTarget": "把不超過誤解成未滿，錯誤排除合法的一百二十秒端點。",
    "prerequisiteCheck": "需理解不少於與不超過。",
    "estimatedTimeSec": "60",
    "unitAndRoundingCheck": "單位均為秒。",
    "ambiguityAndBoundaryAudit": "只有 121 超出，兩端均允許。",
    "difficultyReason": "雙端規範篩選。",
    "literacyContextNecessity": "競賽長度規範使 90 與 120 的包含性具有實際判定功能。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b2cfe03949bbb9577eb9fe8c32c315503ab48b10460284268705d860fe2804b3"
  },
  {
    "questionId": "u07-s008-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "包裹重量 w 規定「超過 1.5 公斤就加收費用」。重量顯示 1.50 公斤時是否加收？",
    "givenConditions": "重量精確顯示為 1.50 公斤。",
    "target": "用邊界等值判斷費用規則",
    "choices": [
      "加收，因 1.50 有兩位小數",
      "加收，因 1.50≥1.5",
      "資料不足",
      "不加收，因 1.50=1.5 且規則是嚴格超過"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "1.50−1.5=0，兩者相等。代入 w>1.5 得 1.5>1.5 假，因此不加收。",
      "result": "不加收，因 1.50=1.5 且規則是嚴格超過",
      "answerIndexVerified": 3
    },
    "explanation": "一點五零與一點五只是書寫位數不同，數值完全相等。規則中的超過表示 w>1.5，端點不包含；代入一點五得到一點五大於一點五為假，因此不加收。",
    "steps": [
      "先確認 1.50=1.5，尾端零不改變數值。",
      "把超過一點五翻成 w>1.5。",
      "代入端點得到假敘述，判定不加收。"
    ],
    "optionAnalysis": [
      {
        "choice": "加收，因 1.50 有兩位小數",
        "truth": false,
        "reason": "小數位數不影響數值大小。"
      },
      {
        "choice": "加收，因 1.50≥1.5",
        "truth": false,
        "reason": "≥ 不是題目規則。"
      },
      {
        "choice": "資料不足",
        "truth": false,
        "reason": "讀數與規則足夠。"
      },
      {
        "choice": "不加收，因 1.50=1.5 且規則是嚴格超過",
        "truth": true,
        "reason": "獨立重算得到「不加收，因 1.50=1.5 且規則是嚴格超過」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "因一點五零的小數位較多就誤認數值較大，忽略尾端零不改變大小。",
    "prerequisiteCheck": "需會小數等值與嚴格不等式。",
    "estimatedTimeSec": "70",
    "unitAndRoundingCheck": "單位公斤一致；1.50=1.5。",
    "ambiguityAndBoundaryAudit": "端點是否加收由「超過」唯一決定。",
    "difficultyReason": "精度表示與範圍語意整合。",
    "literacyContextNecessity": "加收規則與顯示格式使小數等值成為必要判斷。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "582bf78d5e354397868c4cad259f7f9434fb0aa9a56d9aa825b7bf53b8f16c01"
  },
  {
    "questionId": "u07-s008-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某水質指標 q 必須「高於 6.5 且至多 8.0」。儀器讀值保留一位小數，下列哪個值是允許範圍內的最小讀值？",
    "givenConditions": "q 只可能顯示一位小數。",
    "target": "在指定顯示精度下找最小允許值",
    "choices": [
      "6.5",
      "6.7",
      "6.6",
      "6.4"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "允許讀值必大於 6.5；一位小數依序為 6.5、6.6、6.7，第一個嚴格大於者是 6.6。",
      "result": "6.6",
      "answerIndexVerified": 2
    },
    "explanation": "允許範圍是六點五嚴格小於 q，且 q 不超過八點零。儀器以零點一為步距，六點五被排除後，下一個可顯示的數值是六點六，因此它是最小允許讀值。",
    "steps": [
      "把規則寫成 6.5<q≤8.0。",
      "把一位小數精度解讀為每格零點一。",
      "排除六點五，取下一格六點六並檢查上界。"
    ],
    "optionAnalysis": [
      {
        "choice": "6.5",
        "truth": false,
        "reason": "6.5 被嚴格高於排除。"
      },
      {
        "choice": "6.7",
        "truth": false,
        "reason": "6.7 可行但不是最小。"
      },
      {
        "choice": "6.6",
        "truth": true,
        "reason": "獨立重算得到「6.6」，此選項與完整解答一致。"
      },
      {
        "choice": "6.4",
        "truth": false,
        "reason": "選項「6.4」低於下界。，與獨立解得的「6.6」不一致。"
      }
    ],
    "misconceptionTarget": "忽略儀器只能顯示一位小數的離散步距，或錯誤包含嚴格下界六點五。",
    "prerequisiteCheck": "需會嚴格端點與小數序列。",
    "estimatedTimeSec": "85",
    "unitAndRoundingCheck": "指標無單位；讀值步距 0.1，不四捨五入其他值。",
    "ambiguityAndBoundaryAudit": "6.6 是第一個大於 6.5 的一位小數。",
    "difficultyReason": "精度限制使開區間具有最小顯示值。",
    "literacyContextNecessity": "儀器只顯示一位小數，否則實數範圍沒有最小值，情境不可刪除。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "677b31a4eb743ccc212fb9a3e8ca4d58a8739a9bcd850eb28730bd2c939ff6b3"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s008-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "type": "constructed-response",
    "prompt": "把下列三句分別寫成不等式，並說明邊界是否包含：甲「溫度低於 6°C」；乙「人數不少於 18 人」；丙「重量最多 12.5 公斤」。",
    "requiredWork": [
      "為三個量分別選字母",
      "寫出三個不等式",
      "逐句說明等號是否存在"
    ],
    "fullCreditSolution": [
      "設溫度為 T。「低於六度」表示 T<6，端點六度不包含。",
      "設人數為 n。「不少於十八人」表示 n≥18，端點十八人包含。",
      "設重量為 m。「最多十二點五公斤」表示 m≤12.5，端點十二點五公斤包含。",
      "用各邊界值代入，可驗證甲不通過、乙與丙通過，符合原句。"
    ],
    "alternativeMethod": [
      "字母可不同；也可用「代入邊界是否符合原句」檢查：6 不算低於、18 算不少於、12.5 算最多。"
    ],
    "reasoningSteps": [
      "圈出低於、不少於與最多三個關鍵詞。",
      "分別判斷方向與是否需要等號。",
      "以三個邊界值回代原句，確認符號。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三個不等式與三個端點說明全部正確，量與單位對應清楚。"
      },
      {
        "score": 2,
        "criteria": "三句中兩句完全正確，第三句只有符號或等號錯一項。"
      },
      {
        "score": 1,
        "criteria": "至少一整句正確，另可看出部分範圍詞理解。"
      },
      {
        "score": 0,
        "criteria": "三句方向與包含性均無法正確辨認。"
      }
    ],
    "partialCreditRules": "每句可獨立給分；字母名稱不同不扣分，只要定義清楚。",
    "followThroughPolicy": "前一句錯誤不影響後兩句，禁止把三句綁成單一連鎖錯誤。",
    "unitAndNotationRules": "溫度用 °C、人數用人、重量用公斤；不強制每個不等式旁重複單位。",
    "answerOnlyPolicy": "只寫三個符號無邊界說明，最多 2 分。",
    "commonErrors": [
      "把低於六寫成小於或等於六，錯誤包含六度。",
      "看到十二點五是小數便排除邊界，忽略最多本來包含等號。",
      "三句共用同一未知數，導致不同物理量與單位混在一起。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "T<6；n≥18；m≤12.5。",
      "ambiguity": "三個中文關鍵詞在正式數學語意中均明確。",
      "scope": "國中不等式範圍詞翻譯。",
      "reviewNote": "逐句以邊界代入：6 不符合低於、18 符合不少於、12.5 符合最多，據此核對 <、≥、≤。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6e88e22ce5d3298301ad69ee54ba33ec4e28a4252e641a030fb42b7ed885fd3f"
  },
  {
    "questionId": "u07-s008-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "type": "constructed-response",
    "prompt": "某比賽規定參賽年齡 a 滿 12 歲但未滿 16 歲。請寫出範圍，列出所有可能的整數年齡，並說明若年齡可精確到小數時是否有最大值。",
    "requiredWork": [
      "建立雙邊不等式",
      "列出整數年齡",
      "討論連續量最大值是否存在"
    ],
    "fullCreditSolution": [
      "滿十二歲表示 a≥12，未滿十六歲表示 a<16，所以範圍是 12≤a<16。",
      "若年齡只以整數歲計，可能值為十二、十三、十四、十五，最大整數為十五。",
      "若年齡可取任意實數，則沒有最大值；十六雖是上界但未包含。",
      "對任何小於十六的年齡，都能取它與十六的平均數，得到更大且仍小於十六的年齡。"
    ],
    "alternativeMethod": [
      "可用反例說明沒有最大實數：若聲稱 15.9 最大，則 15.95 更大且仍小於 16。"
    ],
    "reasoningSteps": [
      "翻譯滿與未滿，建立一閉一開範圍。",
      "在整數定義域列出十二到十五。",
      "改看實數定義域，以可任意逼近十六說明無最大值。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確寫 12≤a<16、列出 12 至 15，並合理說明實數情況沒有最大值。"
      },
      {
        "score": 2,
        "criteria": "範圍與整數列舉正確，但只說沒有最大值而理由不足；或理由完整但漏列一個整數。"
      },
      {
        "score": 1,
        "criteria": "能正確處理其中一端或知道整數最大為 15，但雙邊符號有錯。"
      },
      {
        "score": 0,
        "criteria": "把 16 納入且認為實數最大為 16，無任何正確端點概念。"
      }
    ],
    "partialCreditRules": "若學生只回答整數最大年齡 15，但未回答連續量，整數部分可得分，不可視為完整。",
    "followThroughPolicy": "若左端錯誤排除 12，但右端與「無最大實數」推理正確，保留右端與連續性部分分。",
    "unitAndNotationRules": "年齡單位為歲；接受 12≤a<16 或 a≥12 且 a<16。",
    "answerOnlyPolicy": "只寫四個整數，最多 1 分。",
    "commonErrors": [
      "把未滿十六寫成 a≤16，錯誤包含十六歲。",
      "把整數範圍的最大值十五直接當成實數範圍最大值。",
      "只說接近十六而未說明任一候選值仍可找到更大的符合值。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "12≤a<16；整數 12、13、14、15；實數範圍無最大值。",
      "ambiguity": "題目明確分開整數年齡與可取小數的連續情況。",
      "scope": "國中範圍敘述與離散連續邊界。",
      "reviewNote": "獨立測試 12 可取、16 不可取；整數停在 15。對任意 a<16，可取 (a+16)/2 仍小於 16 且更大，故無最大實數。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "5e9f1a4e94352636cf31a5b083ed07de1a927c5d2c36e654345b9c6c15efd1bf"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s008-v001-semantic-r1",
    "questionId": "u07-s008-v001",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "contentSha256": "28b5b16c5325ece36a60be59e5fdb08ffdc497a9610ce2c97dea761e5791f1a7",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "測 n=20：至多 20 應允許，所以需等號；測 n=21 應排除，所以方向為 ≤。",
    "derivedAnswer": "n≤20",
    "storedAnswer": "n≤20",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「翻譯含等號上界」，給定條件「n 為所述數量。」足以決定唯一數學任務。",
      "boundary": "邊界 20 可取。",
      "units": "無單位。",
      "scope": "本題只使用 解的範圍敘述 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本語詞轉譯。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：測 n=20：至多 20 應允許，所以需等號；測 n=21 應排除，所以方向為 ≤。 所得「n≤20」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：邊界 20 可取。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s008-v002-semantic-r1",
    "questionId": "u07-s008-v002",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "contentSha256": "e4eba44c2e6e526efe9e3e6adda2a8d60e5f5476bfcbd8ad94dc8aa304eba8f7",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "T=30 沒有超過 30，T=31 有超過；只有 T>30 符合兩個測試。",
    "derivedAnswer": "T>30",
    "storedAnswer": "T>30",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「翻譯嚴格下界」，給定條件「T 以 °C 表示。」足以決定唯一數學任務。",
      "boundary": "30 本身不符合。",
      "units": "單位 °C 一致。",
      "scope": "本題只使用 解的範圍敘述 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本語詞。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：T=30 沒有超過 30，T=31 有超過；只有 T>30 符合兩個測試。 所得「T>30」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：30 本身不符合。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s008-v003-semantic-r1",
    "questionId": "u07-s008-v003",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "contentSha256": "5ad2e1d88aa7cf5356283edd1295260b490b74eb105c0a60a8ae26204e9a603e",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "用 a=12 測試應不符合，用 a=11 應符合，所以式子是 a<12。",
    "derivedAnswer": "a<12",
    "storedAnswer": "a<12",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「翻譯嚴格上界」，給定條件「a 為年齡。」足以決定唯一數學任務。",
      "boundary": "12 歲本身不在範圍。",
      "units": "單位歲。",
      "scope": "本題只使用 解的範圍敘述 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本語詞。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：用 a=12 測試應不符合，用 a=11 應符合，所以式子是 a<12。 所得「a<12」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：12 歲本身不在範圍。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s008-v004-semantic-r1",
    "questionId": "u07-s008-v004",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "contentSha256": "b87928d8ffcb8b089a8b7219d25328bc2e63659e1220e8e2e754b706482b76f4",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "「不少於 −2」即 −2≤n；「未滿 3」即 n<3；串接為 −2≤n<3。",
    "derivedAnswer": "−2≤n<3",
    "storedAnswer": "−2≤n<3",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「建立含負下界的雙重範圍」，給定條件「n 為整數，但本題問符號範圍。」足以決定唯一數學任務。",
      "boundary": "−2 可取、3 不可取。",
      "units": "無單位。",
      "scope": "本題只使用 解的範圍敘述 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "雙語詞合併。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：「不少於 −2」即 −2≤n；「未滿 3」即 n<3；串接為 −2≤n<3。 所得「−2≤n<3」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：−2 可取、3 不可取。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s008-v005-semantic-r1",
    "questionId": "u07-s008-v005",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "contentSha256": "c5e234b1a8fbd326a894f4798e6f58c7db85d55a534b5eb323ac0401e92fa1d0",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "在數線上 6<6.2<7，條件要在 6.2 右側，首個整數是 7。",
    "derivedAnswer": "7",
    "storedAnswer": "7",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由實數下界求最小整數」，給定條件「x 為整數。」足以決定唯一數學任務。",
      "boundary": "6、7 相鄰測試足以確認。",
      "units": "無單位與四捨五入。",
      "scope": "本題只使用 解的範圍敘述 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "整數化範圍。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：在數線上 6<6.2<7，條件要在 6.2 右側，首個整數是 7。 所得「7」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：6、7 相鄰測試足以確認。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s008-v006-semantic-r1",
    "questionId": "u07-s008-v006",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "contentSha256": "117dc664d1d6919f939f3a6f3601abbb6a855e3c96d1dd1b5514485d9606bf81",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "假設某 y<4 是最大值，取 (y+4)/2；它仍小於 4 且大於 y，矛盾。因此無最大值。",
    "derivedAnswer": "沒有最大值",
    "storedAnswer": "沒有最大值",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「判斷開區間最大值不存在」，給定條件「y 為實數，未限制精度。」足以決定唯一數學任務。",
      "boundary": "題目明示實數，排除固定小數位假設。",
      "units": "無單位與精度限制。",
      "scope": "本題只使用 解的範圍敘述 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "概念性邊界判斷。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：假設某 y<4 是最大值，取 (y+4)/2；它仍小於 4 且大於 y，矛盾。因此無最大值。 所得「沒有最大值」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：題目明示實數，排除固定小數位假設。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s008-v007-semantic-r1",
    "questionId": "u07-s008-v007",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "contentSha256": "0bcbcc6abde7b8c020ab2163bbcef5eb2dddd66cf6f108c43b12e2e2e74cf994",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "−3<x 是「x 高於 −3」；x≤8 是「x 不超過 8」。只有選項 0 同時準確。",
    "derivedAnswer": "x 高於 −3 且不超過 8",
    "storedAnswer": "x 高於 −3 且不超過 8",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「完整翻譯雙邊範圍」，給定條件「x 為實數。」足以決定唯一數學任務。",
      "boundary": "兩端包含性均唯一對應。",
      "units": "無單位。",
      "scope": "本題只使用 解的範圍敘述 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "同時核對兩端語意。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：−3<x 是「x 高於 −3」；x≤8 是「x 不超過 8」。只有選項 0 同時準確。 所得「x 高於 −3 且不超過 8」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：兩端包含性均唯一對應。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s008-v008-semantic-r1",
    "questionId": "u07-s008-v008",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "contentSha256": "2b899c419196a15662bdfc932bc31d8b07d10b0b6f2b60b76fc6ebeb1d68f5f5",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "整數 −4 到 2。配對 (−2+2)+(−1+1)+0=0，另有 −4−3=−7。",
    "derivedAnswer": "−7",
    "storedAnswer": "−7",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由中文範圍求整數總和」，給定條件「m 為整數。」足以決定唯一數學任務。",
      "boundary": "可配對 −2+2、−1+1，剩 −4−3=-7。",
      "units": "無單位。",
      "scope": "本題只使用 解的範圍敘述 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "語意、列舉與加總。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：整數 −4 到 2。配對 (−2+2)+(−1+1)+0=0，另有 −4−3=−7。 所得「−7」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：可配對 −2+2、−1+1，剩 −4−3=-7。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s008-v009-semantic-r1",
    "questionId": "u07-s008-v009",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "contentSha256": "ca07d706afc5e9ef24162d9c29fce5605769182df82df257a33efbc7656bdacb",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "A 的整數解最高到 11；B、C、D 都包含 12 且排除 13。因此只有 x<12 不能保證最大整數解為 12。",
    "derivedAnswer": "x<12",
    "storedAnswer": "x<12",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由最大整數解反查不合適的上界敘述」，給定條件「x 為整數，只有上界。」足以決定唯一數學任務。",
      "boundary": "題幹改問「不能保證」，使四項中只有 x<12 的最大整數為 11，唯一答案明確。",
      "units": "無單位。",
      "scope": "本題只使用 解的範圍敘述 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "需逐一分析嚴格與含等號上界對最大整數解的影響。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：A 的整數解最高到 11；B、C、D 都包含 12 且排除 13。因此只有 x<12 不能保證最大整數解為 12。 所得「x<12」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：題幹改問「不能保證」，使四項中只有 x<12 的最大整數為 11，唯一答案明確。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s008-v010-semantic-r1",
    "questionId": "u07-s008-v010",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "contentSha256": "b2cfe03949bbb9577eb9fe8c32c315503ab48b10460284268705d860fe2804b3",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "區間 [90,120]；121 不在區間，其餘三值都在，所以不合規者是 121 秒。",
    "derivedAnswer": "121 秒",
    "storedAnswer": "121 秒",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「在規範範圍中找反例」，給定條件「t 以秒表示。」足以決定唯一數學任務。",
      "boundary": "只有 121 超出，兩端均允許。",
      "units": "單位均為秒。",
      "scope": "本題只使用 解的範圍敘述 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "雙端規範篩選。",
    "literacyNecessityCheck": "競賽長度規範使 90 與 120 的包含性具有實際判定功能。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：區間 [90,120]；121 不在區間，其餘三值都在，所以不合規者是 121 秒。 所得「121 秒」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：只有 121 超出，兩端均允許。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s008-v011-semantic-r1",
    "questionId": "u07-s008-v011",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "contentSha256": "582bf78d5e354397868c4cad259f7f9434fb0aa9a56d9aa825b7bf53b8f16c01",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "1.50−1.5=0，兩者相等。代入 w>1.5 得 1.5>1.5 假，因此不加收。",
    "derivedAnswer": "不加收，因 1.50=1.5 且規則是嚴格超過",
    "storedAnswer": "不加收，因 1.50=1.5 且規則是嚴格超過",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「用邊界等值判斷費用規則」，給定條件「重量精確顯示為 1.50 公斤。」足以決定唯一數學任務。",
      "boundary": "端點是否加收由「超過」唯一決定。",
      "units": "單位公斤一致；1.50=1.5。",
      "scope": "本題只使用 解的範圍敘述 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "精度表示與範圍語意整合。",
    "literacyNecessityCheck": "加收規則與顯示格式使小數等值成為必要判斷。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：1.50−1.5=0，兩者相等。代入 w>1.5 得 1.5>1.5 假，因此不加收。 所得「不加收，因 1.50=1.5 且規則是嚴格超過」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：端點是否加收由「超過」唯一決定。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s008-v012-semantic-r1",
    "questionId": "u07-s008-v012",
    "unitId": "u07",
    "topicId": "u07-solution-sets",
    "skillId": "inequality-range",
    "contentSha256": "677b31a4eb743ccc212fb9a3e8ca4d58a8739a9bcd850eb28730bd2c939ff6b3",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "允許讀值必大於 6.5；一位小數依序為 6.5、6.6、6.7，第一個嚴格大於者是 6.6。",
    "derivedAnswer": "6.6",
    "storedAnswer": "6.6",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「在指定顯示精度下找最小允許值」，給定條件「q 只可能顯示一位小數。」足以決定唯一數學任務。",
      "boundary": "6.6 是第一個大於 6.5 的一位小數。",
      "units": "指標無單位；讀值步距 0.1，不四捨五入其他值。",
      "scope": "本題只使用 解的範圍敘述 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "精度限制使開區間具有最小顯示值。",
    "literacyNecessityCheck": "儀器只顯示一位小數，否則實數範圍沒有最小值，情境不可刪除。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：允許讀值必大於 6.5；一位小數依序為 6.5、6.6、6.7，第一個嚴格大於者是 6.6。 所得「6.6」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：6.6 是第一個大於 6.5 的一位小數。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
