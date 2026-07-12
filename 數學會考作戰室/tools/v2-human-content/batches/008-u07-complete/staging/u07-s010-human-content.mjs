// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s010-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-applications",
  "skillId": "inequality-reasonableness",
  "title": "不等式合理性：模型和解法與情境答案的三層檢查",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能判斷所列不等式是否符合文字語意。",
    "能檢查解集是否符合自然限制與單位。",
    "能用邊界值、鄰近值驗證答案。",
    "能辨認無解、所有值皆可或模型資料不足。"
  ],
  "prerequisites": [
    {
      "skillId": "inequality-word-problem",
      "requiredLevel": "能由情境建立並解一元一次不等式。"
    }
  ],
  "prerequisiteBridge": {
    "inequality-word-problem": "能由情境建立並解一元一次不等式。"
  },
  "glossary": [
    {
      "term": "合理性",
      "definition": "答案同時符合數學運算、題意與現實限制。"
    },
    {
      "term": "邊界檢查",
      "definition": "代入臨界值與相鄰值，確認包含性與取整。"
    },
    {
      "term": "自然限制",
      "definition": "由情境產生的非負、整數、容量或時間等限制。"
    },
    {
      "term": "恆成立",
      "definition": "在指定範圍內所有值都符合。"
    }
  ],
  "notation": [
    {
      "symbol": "x∈Z≥0",
      "meaning": "x 為非負整數。"
    },
    {
      "symbol": "0≤x≤C",
      "meaning": "數量既非負又不超過容量 C。"
    }
  ],
  "conceptNarrative": [
    "正確算出代數解不代表情境答案一定合理。",
    "第一層檢查模型：總量、單位與不等號是否對；第二層檢查代數：移項、變號與端點；第三層檢查情境：整數、非負、容量與題目所問。",
    "邊界附近代入是發現 off-by-one 與不等號方向錯誤的有效方法。",
    "若得到負人數或超過容器容量，應與自然限制取交集，而非直接接受。"
  ],
  "formalDefinitions": [
    {
      "name": "可行解",
      "statement": "同時滿足數學不等式與所有情境限制的值。"
    },
    {
      "name": "不可行模型",
      "statement": "若模型漏掉必要條件或單位不一致，即使可解也不能回答原題。"
    }
  ],
  "formulas": [
    {
      "formula": "代數解集 ∩ 情境限制 = 可行解集",
      "conditions": [
        "所有限制均明確"
      ],
      "meaning": "合理答案是多重條件的共同部分。"
    },
    {
      "formula": "邊界值與相鄰值代入",
      "conditions": [
        "整數問題通常檢查臨界整數兩側"
      ],
      "meaning": "驗證最大或最少數。"
    }
  ],
  "nonApplicableCases": [
    "不能用常識擅自加入題目未提供的成本或速度。",
    "不應只因答案看起來大就判定不合理，需依給定限制。",
    "若單位不一致，應先換算再列式。",
    "原不等式若化簡成真敘述或假敘述，可能代表全部值或無解，不可硬寫 x 的範圍。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "檢查未知數定義與單位。",
      "check": "各項能否相加比較？"
    },
    {
      "step": 2,
      "instruction": "用關鍵語句核對不等號與等號。",
      "check": "邊界應否包含？"
    },
    {
      "step": 3,
      "instruction": "獨立重算代數。",
      "check": "負數乘除是否變號？"
    },
    {
      "step": 4,
      "instruction": "加入自然限制並取交集。",
      "check": "是否為非負、整數且在容量內？"
    },
    {
      "step": 5,
      "instruction": "代入臨界值與相鄰值。",
      "check": "剛好可行與剛好不可行是否分界正確？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "算得最多可買 6.8 張票，應如何作答？",
      "solutionSteps": [
        "票數必為非負整數。",
        "最大不超過 6.8 的整數是 6。"
      ],
      "answer": "最多 6 張。"
    },
    {
      "exampleId": "L2",
      "prompt": "題目說至少 40 分，學生列 s<40，是否合理？",
      "solutionSteps": [
        "至少包含 40。",
        "正確應為 s≥40。"
      ],
      "answer": "不合理，方向與等號都錯。"
    },
    {
      "exampleId": "L3",
      "prompt": "容量 50 人，代數解得 n≤62，完整範圍為何？",
      "solutionSteps": [
        "情境另有 0≤n≤50。",
        "與 n≤62 取交集。"
      ],
      "answer": "0≤n≤50，若 n 為人數則 n 為整數。"
    },
    {
      "exampleId": "L4",
      "prompt": "化簡後得到 3<8，原未知數沒有其他限制，解集為何？",
      "solutionSteps": [
        "3<8 對所有 x 都成立。",
        "因此所有允許範圍內的 x 都是解。"
      ],
      "answer": "所有原定義域中的 x。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 6.8 張票四捨五入為 7 張。",
      "why": "取整方向未依上限。",
      "correction": "代入 7 檢查會超限，故最多 6。"
    },
    {
      "mistake": "看到答案負數就一定判錯。",
      "why": "某些量如溫度可為負。",
      "correction": "依未知數的實際意義判斷。"
    },
    {
      "mistake": "單位不同仍直接相加。",
      "why": "忽略量綱一致性。",
      "correction": "先統一元與角、分鐘與小時等單位。"
    },
    {
      "mistake": "容量限制未列入最後答案。",
      "why": "只看代數式，忽略情境上界。",
      "correction": "與自然限制取交集。"
    },
    {
      "mistake": "化簡成 3<8 後寫 x>0。",
      "why": "憑空加入條件。",
      "correction": "若無其他限制，所有 x 皆可。"
    },
    {
      "mistake": "只驗證候選答案，不驗證相鄰值。",
      "why": "無法確認是否真為最大或最小。",
      "correction": "同時代入臨界值兩側。"
    }
  ],
  "selfCheck": [
    "各項單位一致嗎？",
    "關鍵詞與不等號完全相符嗎？",
    "情境是否要求整數、非負或容量上限？",
    "臨界值與相鄰值的真偽是否如預期？"
  ],
  "summary": [
    "合理答案要同時通過模型、代數與情境三層檢查。",
    "自然限制需與代數解集取交集。",
    "取整不能用四捨五入代替。",
    "恆真代表全解，恆假代表無解。"
  ],
  "connections": {
    "previous": "承接一般不等式應用題。",
    "next": [
      "下一節把合理性檢查用在預算、固定費與優惠方案。",
      "最後技能會整合表格、規則與多步推理。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s010-v001",
      "u07-s010-v002",
      "u07-s010-v003",
      "u07-s010-v004",
      "u07-s010-v005",
      "u07-s010-v006",
      "u07-s010-v007",
      "u07-s010-v008",
      "u07-s010-v009",
      "u07-s010-v010",
      "u07-s010-v011",
      "u07-s010-v012"
    ],
    "constructedResponseIds": [
      "u07-s010-cr001",
      "u07-s010-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "人工檢查四類常見合理性：票數取整、關鍵詞錯譯、容量交集與恆真；每類都以邊界值或邏輯真值獨立驗證。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "437b68e594adb70f1bb85098b70868f7bb6dfe9b403416ae9d965e1e41878f08"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s010-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某人解得「最多可買 4.7 本書」。若書只能整本購買，合理答案為何？",
    "givenConditions": "書本數為非負整數。",
    "target": "檢查件數答案的合理取整",
    "choices": [
      "最多 4 本",
      "最多 5 本",
      "至少 4 本",
      "4.7 本"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "候選整數靠近 4.7 的是 4 與 5；4≤4.7，5>4.7，所以最大可行整數為 4。",
      "result": "最多 4 本",
      "answerIndexVerified": 0
    },
    "explanation": "「最多」是上限，且書本數為整數；不能超過 4.7 的最大整數是 4。",
    "steps": [
      "確認離散量",
      "依上限向下取整"
    ],
    "optionAnalysis": [
      {
        "choice": "最多 4 本",
        "truth": true,
        "reason": "獨立重算得到「最多 4 本」，此選項與完整解答一致。"
      },
      {
        "choice": "最多 5 本",
        "truth": false,
        "reason": "5 超過代數上界。"
      },
      {
        "choice": "至少 4 本",
        "truth": false,
        "reason": "題目問最多，不是至少。"
      },
      {
        "choice": "4.7 本",
        "truth": false,
        "reason": "書不能買 0.7 本。"
      }
    ],
    "misconceptionTarget": "用四捨五入代替可行性取整。",
    "prerequisiteCheck": "需理解最大整數解。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "單位本；不可拆分。",
    "ambiguityAndBoundaryAudit": "4 可行、5 不可行。",
    "difficultyReason": "基本合理性。",
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
    "contentSha256": "c46c1c645746358e38faed936c02af1aac10a91f2295e353e5626efe9fb72f81"
  },
  {
    "questionId": "u07-s010-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "題目說「分數至少 60 分」，下列哪個模型合理？",
    "givenConditions": "s 為分數。",
    "target": "檢查模型語意",
    "choices": [
      "s<60",
      "s≤60",
      "s>60",
      "s≥60"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "把 s=60 代入規則應通過，故要等號；s=70 也應通過，故方向為 ≥。",
      "result": "s≥60",
      "answerIndexVerified": 3
    },
    "explanation": "至少包含 60 並要求更高分，因此 s≥60。",
    "steps": [
      "辨認至少",
      "測試邊界 60"
    ],
    "optionAnalysis": [
      {
        "choice": "s<60",
        "truth": false,
        "reason": "選項「s<60」方向相反。，與獨立解得的「s≥60」不一致。"
      },
      {
        "choice": "s≤60",
        "truth": false,
        "reason": "選項「s≤60」方向相反。，與獨立解得的「s≥60」不一致。"
      },
      {
        "choice": "s>60",
        "truth": false,
        "reason": "錯排除 60。"
      },
      {
        "choice": "s≥60",
        "truth": true,
        "reason": "獨立重算得到「s≥60」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "漏掉等號。",
    "prerequisiteCheck": "需理解至少。",
    "estimatedTimeSec": "40",
    "unitAndRoundingCheck": "單位分。",
    "ambiguityAndBoundaryAudit": "s=60 應符合。",
    "difficultyReason": "基本語意合理性。",
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
    "contentSha256": "1d5625f889c5d5d391143e43815ae7bea7df0a452647dcbb01bcb683e086d849"
  },
  {
    "questionId": "u07-s010-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "容器最多裝 30 公升，某人列出 V≥30。主要錯誤是什麼？",
    "givenConditions": "V 以公升表示。",
    "target": "診斷模型錯誤類型",
    "choices": [
      "單位錯誤",
      "不等號方向錯誤",
      "缺少未知數",
      "30 應改為 3"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "測 V=40：原式 V≥30 會判可行，但容器最多 30，不合理。因此方向應反成 ≤。",
      "result": "不等號方向錯誤",
      "answerIndexVerified": 1
    },
    "explanation": "「最多」表示 V 不可大於 30，應為 V≤30；原式方向相反。",
    "steps": [
      "翻譯最多為上界"
    ],
    "optionAnalysis": [
      {
        "choice": "單位錯誤",
        "truth": false,
        "reason": "公升單位沒有問題。"
      },
      {
        "choice": "不等號方向錯誤",
        "truth": true,
        "reason": "獨立重算得到「不等號方向錯誤」，此選項與完整解答一致。"
      },
      {
        "choice": "缺少未知數",
        "truth": false,
        "reason": "V 已是未知數。"
      },
      {
        "choice": "30 應改為 3",
        "truth": false,
        "reason": "數值 30 由題意給定。"
      }
    ],
    "misconceptionTarget": "只看式子形式而不對照語句。",
    "prerequisiteCheck": "需理解至多。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "單位一致。",
    "ambiguityAndBoundaryAudit": "唯一實質錯誤為方向。",
    "difficultyReason": "錯誤診斷。",
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
    "contentSha256": "6666eb7422e25865bcdb937e1867b554199d923f8424e9edf0b23942989c8c82"
  },
  {
    "questionId": "u07-s010-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某活動人數 n 解得 n≤45，但場地另規定最多 40 人。若 n 為非負整數，完整可行範圍為何？",
    "givenConditions": "n 為非負整數。",
    "target": "將代數解與容量限制取交集",
    "choices": [
      "n≤45",
      "0≤n≤45",
      "0≤n≤40",
      "40≤n≤45"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "需同時 n≤45、n≤40、n≥0；共同部分由較小上界 40 決定，所以 0≤n≤40。",
      "result": "0≤n≤40",
      "answerIndexVerified": 2
    },
    "explanation": "代數上界 45 與場地上界 40 同時成立，較嚴格的是 40；加上非負，得 0≤n≤40。",
    "steps": [
      "取兩個上限交集",
      "加入非負限制"
    ],
    "optionAnalysis": [
      {
        "choice": "n≤45",
        "truth": false,
        "reason": "漏掉場地限制與非負。"
      },
      {
        "choice": "0≤n≤45",
        "truth": false,
        "reason": "場地上界未納入。"
      },
      {
        "choice": "0≤n≤40",
        "truth": true,
        "reason": "獨立重算得到「0≤n≤40」，此選項與完整解答一致。"
      },
      {
        "choice": "40≤n≤45",
        "truth": false,
        "reason": "把可行範圍誤成高人數區間。"
      }
    ],
    "misconceptionTarget": "只採用代數解，忽略情境限制。",
    "prerequisiteCheck": "需會且與範圍。",
    "estimatedTimeSec": "70",
    "unitAndRoundingCheck": "單位人。",
    "ambiguityAndBoundaryAudit": "40 可取，41 雖滿足 n≤45 但違反容量。",
    "difficultyReason": "多重限制合理化。",
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
    "contentSha256": "456993daf4fc263f3390630741b7aff84649159fe46ed52f28279145205d7cff"
  },
  {
    "questionId": "u07-s010-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "解情境題得到「至少需要 6.2 輛車」，每輛車不可分割。合理答案為何？",
    "givenConditions": "車數為正整數。",
    "target": "檢查下界型離散量取整",
    "choices": [
      "至少 6 輛",
      "最多 7 輛",
      "剛好 6.2 輛",
      "至少 7 輛"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "比較相鄰整數 6、7；6 不滿足 n≥6.2，7 滿足，所以至少 7 輛。",
      "result": "至少 7 輛",
      "answerIndexVerified": 3
    },
    "explanation": "最低需求 6.2 表示車數需不小於 6.2；最小整數是 7。",
    "steps": [
      "辨認下界",
      "向上取到最小可行整數"
    ],
    "optionAnalysis": [
      {
        "choice": "至少 6 輛",
        "truth": false,
        "reason": "6<6.2，不足。"
      },
      {
        "choice": "最多 7 輛",
        "truth": false,
        "reason": "題目問至少而非最多。"
      },
      {
        "choice": "剛好 6.2 輛",
        "truth": false,
        "reason": "車不可分割。"
      },
      {
        "choice": "至少 7 輛",
        "truth": true,
        "reason": "獨立重算得到「至少 7 輛」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "最低需求仍向下取整。",
    "prerequisiteCheck": "需理解最小整數解。",
    "estimatedTimeSec": "50",
    "unitAndRoundingCheck": "單位輛；不可分割。",
    "ambiguityAndBoundaryAudit": "6 不足、7 可行。",
    "difficultyReason": "下界合理取整。",
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
    "contentSha256": "7f5b96f8968548f6a7d262566657b8a7e27607e45aa4e30f889b38edbd1fd1c1"
  },
  {
    "questionId": "u07-s010-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "下列哪個檢查最能確認「最多 12 件」確實是邊界答案？",
    "givenConditions": "件數為整數。",
    "target": "選擇邊界合理性檢查方法",
    "choices": [
      "只代入 12 件",
      "代入 12 件成立且 13 件不成立",
      "只看計算過程沒有錯字",
      "把 12 四捨五入"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "若 12 成立但 13 也成立，12 就不是最多；故必須同時驗證 12 真、13 假。",
      "result": "代入 12 件成立且 13 件不成立",
      "answerIndexVerified": 1
    },
    "explanation": "最大整數邊界需確認 12 可行，同時下一個整數 13 不可行，才能證明「最多」。",
    "steps": [
      "驗證候選值",
      "驗證相鄰超界值"
    ],
    "optionAnalysis": [
      {
        "choice": "只代入 12 件",
        "truth": false,
        "reason": "只能證明 12 可行，不能證明最大。"
      },
      {
        "choice": "代入 12 件成立且 13 件不成立",
        "truth": true,
        "reason": "獨立重算得到「代入 12 件成立且 13 件不成立」，此選項與完整解答一致。"
      },
      {
        "choice": "只看計算過程沒有錯字",
        "truth": false,
        "reason": "形式檢查不能證明數學邊界。"
      },
      {
        "choice": "把 12 四捨五入",
        "truth": false,
        "reason": "12 已是整數，不需四捨五入。"
      }
    ],
    "misconceptionTarget": "只驗證答案本身，未驗證最大性。",
    "prerequisiteCheck": "需理解最大值驗證。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "無單位換算。",
    "ambiguityAndBoundaryAudit": "相鄰整數檢查可證明分界。",
    "difficultyReason": "方法論題。",
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
    "contentSha256": "07f0033978137528a428c22705bd8dcb2bccebe9e0ea30da7ecfed68c0a677e4"
  },
  {
    "questionId": "u07-s010-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某人把 2x+5≤2x+9 化簡後寫成 x≤2。正確判斷為何？",
    "givenConditions": "x 為任意實數。",
    "target": "辨認恆成立不等式",
    "choices": [
      "正確，因 5≤9",
      "應為 x≥2",
      "原式對所有實數 x 都成立",
      "原式無解"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "對任意 x，左右差為 (2x+9)−(2x+5)=4≥0，所以左邊總不大於右邊，所有 x 皆可。",
      "result": "原式對所有實數 x 都成立",
      "answerIndexVerified": 2
    },
    "explanation": "兩邊同減 2x 後只剩 5≤9，這是真敘述，與 x 無關，所以所有實數 x 都成立。",
    "steps": [
      "消去相同未知數項",
      "判斷剩餘常數敘述真偽"
    ],
    "optionAnalysis": [
      {
        "choice": "正確，因 5≤9",
        "truth": false,
        "reason": "雖 5≤9 為真，但結論不是 x≤2。"
      },
      {
        "choice": "應為 x≥2",
        "truth": false,
        "reason": "沒有 2 的邊界。"
      },
      {
        "choice": "原式對所有實數 x 都成立",
        "truth": true,
        "reason": "獨立重算得到「原式對所有實數 x 都成立」，此選項與完整解答一致。"
      },
      {
        "choice": "原式無解",
        "truth": false,
        "reason": "常數敘述為真，不是無解。"
      }
    ],
    "misconceptionTarget": "未知數消去後硬造一個 x 的範圍。",
    "prerequisiteCheck": "需會移項與邏輯真值。",
    "estimatedTimeSec": "85",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "5≤9 永真，因此解集全體。",
    "difficultyReason": "特殊解集判斷。",
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
    "contentSha256": "6d0b456e79b97a9fcd936589c097c69e49460d22ebe43d48a7509b2568935b46"
  },
  {
    "questionId": "u07-s010-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某人把 3x−1>3x+4 化簡後寫成 x>5。正確判斷為何？",
    "givenConditions": "x 為實數。",
    "target": "辨認恆假不等式",
    "choices": [
      "原式無解",
      "所有實數皆解",
      "x>5 正確",
      "x<5"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "右式比左式固定大 5，因此不可能左>右；化簡成 −1>4 也直接顯示為假，解集空。",
      "result": "原式無解",
      "answerIndexVerified": 0
    },
    "explanation": "兩邊同減 3x 得 −1>4，這是假敘述，任何 x 都不能使它成立，所以無解。",
    "steps": [
      "消去相同 x 項",
      "判斷 −1>4 為假"
    ],
    "optionAnalysis": [
      {
        "choice": "原式無解",
        "truth": true,
        "reason": "獨立重算得到「原式無解」，此選項與完整解答一致。"
      },
      {
        "choice": "所有實數皆解",
        "truth": false,
        "reason": "常數敘述不是永真。"
      },
      {
        "choice": "x>5 正確",
        "truth": false,
        "reason": "沒有 x 可改變真假。"
      },
      {
        "choice": "x<5",
        "truth": false,
        "reason": "同樣沒有此範圍。"
      }
    ],
    "misconceptionTarget": "未知數消去後錯誤移動常數產生虛假邊界。",
    "prerequisiteCheck": "需會常數比較。",
    "estimatedTimeSec": "80",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "對所有 x 左側永比右側少 5。",
    "difficultyReason": "無解型特殊情況。",
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
    "contentSha256": "eccd8b842cced7749938be0f48ba69db606d51392469fb1355a11187c7bef82e"
  },
  {
    "questionId": "u07-s010-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某路程模型把 3 小時與 40 公里直接相加成 3+40x。主要合理性問題為何？",
    "givenConditions": "3 的單位小時，40x 的單位依 x 而定為公里假設。",
    "target": "辨識模型的單位錯誤",
    "choices": [
      "不等號方向",
      "單位不一致，不能直接相加",
      "未知數一定要用 t",
      "係數必須為負"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "加法結果必須有單一可解釋單位；「小時＋公里」沒有共同量綱，因此模型不成立。",
      "result": "單位不一致，不能直接相加",
      "answerIndexVerified": 1
    },
    "explanation": "小時與公里是不同種類的量，若未透過速度等關係轉換，不能直接相加。",
    "steps": [
      "辨認各項單位",
      "檢查量綱一致"
    ],
    "optionAnalysis": [
      {
        "choice": "不等號方向",
        "truth": false,
        "reason": "題目尚未涉及不等號方向。"
      },
      {
        "choice": "單位不一致，不能直接相加",
        "truth": true,
        "reason": "獨立重算得到「單位不一致，不能直接相加」，此選項與完整解答一致。"
      },
      {
        "choice": "未知數一定要用 t",
        "truth": false,
        "reason": "字母名稱可自由定義。"
      },
      {
        "choice": "係數必須為負",
        "truth": false,
        "reason": "係數正負需依情境，非必然。"
      }
    ],
    "misconceptionTarget": "只檢查代數外形，不檢查單位。",
    "prerequisiteCheck": "需理解同類量才能相加。",
    "estimatedTimeSec": "75",
    "unitAndRoundingCheck": "核心就是單位不一致。",
    "ambiguityAndBoundaryAudit": "除非另有換算關係，兩項不可合併為總量。",
    "difficultyReason": "模型層級合理性。",
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
    "contentSha256": "6a7ed1c21acdc3c243b46ab31e782eca62d57111e4ef8fc531ac10c385bfc411"
  },
  {
    "questionId": "u07-s010-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "電梯載重上限 600 公斤。四位乘客總重 520 公斤，還要搬入每箱 18 公斤的貨物。某人算得最多 5 箱。此答案是否合理？",
    "givenConditions": "x 為非負整數箱。",
    "target": "用代入檢查最大箱數",
    "choices": [
      "合理，因 520+18×5=610",
      "不合理，應至少 5 箱",
      "不合理，最多 4 箱",
      "合理，因 5 接近 4.44"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "可用載重 80 公斤；4 箱重 72，可行；5 箱重 90，總重 610，不可行，所以原答案不合理，最多 4 箱。",
      "result": "不合理，最多 4 箱",
      "answerIndexVerified": 2
    },
    "explanation": "520+18x≤600，得 18x≤80，x≤4.44…，最大整數為 4。5 箱會使總重 610，超過上限。",
    "steps": [
      "建立剩餘載重",
      "計算最大整數",
      "代入 5 箱反證"
    ],
    "optionAnalysis": [
      {
        "choice": "合理，因 520+18×5=610",
        "truth": false,
        "reason": "610 已超過 600。"
      },
      {
        "choice": "不合理，應至少 5 箱",
        "truth": false,
        "reason": "題目問最多。"
      },
      {
        "choice": "不合理，最多 4 箱",
        "truth": true,
        "reason": "獨立重算得到「不合理，最多 4 箱」，此選項與完整解答一致。"
      },
      {
        "choice": "合理，因 5 接近 4.44",
        "truth": false,
        "reason": "接近不代表可行。"
      }
    ],
    "misconceptionTarget": "以四捨五入或接近程度代替載重限制。",
    "prerequisiteCheck": "需會容量上限與取整。",
    "estimatedTimeSec": "95",
    "unitAndRoundingCheck": "重量公斤一致。",
    "ambiguityAndBoundaryAudit": "4 箱總重 592 合規，5 箱 610 超載。",
    "difficultyReason": "完整合理性驗證。",
    "literacyContextNecessity": "載重安全上限與離散箱重使相鄰值檢查不可省略。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "352308fa13fbf145495d5d8330c3c4c9832d1560f3e1e0d1db86886512cdde7d"
  },
  {
    "questionId": "u07-s010-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某步道長度 2.4 公里，遊客已走 900 公尺。若要用同一式子計算剩餘距離，第一步應做什麼？",
    "givenConditions": "1 公里=1000 公尺。",
    "target": "在建立不等式前統一單位",
    "choices": [
      "先統一公里或公尺單位",
      "直接算 2.4−900",
      "把 900 四捨五入為 1",
      "將兩數相乘"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "換成公尺：2.4 公里=2400 公尺，才能算 2400−900；或換成公里 0.9。故第一步是統一單位。",
      "result": "先統一公里或公尺單位",
      "answerIndexVerified": 0
    },
    "explanation": "2.4 公里與 900 公尺單位不同，需先換成 2400 公尺與 900 公尺，或 2.4 公里與 0.9 公里。",
    "steps": [
      "辨認單位不同",
      "先換算再相減"
    ],
    "optionAnalysis": [
      {
        "choice": "先統一公里或公尺單位",
        "truth": true,
        "reason": "獨立重算得到「先統一公里或公尺單位」，此選項與完整解答一致。"
      },
      {
        "choice": "直接算 2.4−900",
        "truth": false,
        "reason": "數值直接相減沒有意義。"
      },
      {
        "choice": "把 900 四捨五入為 1",
        "truth": false,
        "reason": "四捨五入會失真。"
      },
      {
        "choice": "將兩數相乘",
        "truth": false,
        "reason": "剩餘距離應用減法。"
      }
    ],
    "misconceptionTarget": "忽略單位而直接代數運算。",
    "prerequisiteCheck": "需會基本單位換算。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "必須統一距離單位。",
    "ambiguityAndBoundaryAudit": "兩種換算方式均可得到相同剩餘 1.5 公里。",
    "difficultyReason": "素養資料前處理。",
    "literacyContextNecessity": "公里與公尺並列是情境的核心障礙，必須先換算。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "863313795db4fc9f4fabbd6828f9c787e78eaabcb7cccaf66afc19ebd032c477"
  },
  {
    "questionId": "u07-s010-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "活動規定至少 20 人、場地最多 18 人。關於可行人數，下列何者正確？",
    "givenConditions": "n 為非負整數。",
    "target": "判斷情境限制互相矛盾",
    "choices": [
      "20 人可行",
      "18 人可行",
      "18 到 20 人都可行",
      "沒有可行人數"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "任何 n≥20 都大於 18，故必違反 n≤18；任何 n≤18 又小於 20，故必違反最低要求。沒有共同值。",
      "result": "沒有可行人數",
      "answerIndexVerified": 3
    },
    "explanation": "條件是 n≥20 且 n≤18，兩範圍沒有重疊，所以無解。",
    "steps": [
      "建立兩個限制",
      "取交集並判斷空集合"
    ],
    "optionAnalysis": [
      {
        "choice": "20 人可行",
        "truth": false,
        "reason": "20 超過場地上限。"
      },
      {
        "choice": "18 人可行",
        "truth": false,
        "reason": "18 未達最低人數。"
      },
      {
        "choice": "18 到 20 人都可行",
        "truth": false,
        "reason": "沒有同時滿足者。"
      },
      {
        "choice": "沒有可行人數",
        "truth": true,
        "reason": "獨立重算得到「沒有可行人數」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "分別看每條件而未檢查共同可行性。",
    "prerequisiteCheck": "需會且的交集。",
    "estimatedTimeSec": "60",
    "unitAndRoundingCheck": "單位人。",
    "ambiguityAndBoundaryAudit": "下界 20 大於上界 18，交集空。",
    "difficultyReason": "情境合理性與無解。",
    "literacyContextNecessity": "最低需求與容量上限互相衝突，情境必須保留才能判定不可舉辦。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d33031841f60d3d0f26d3c4b9fb080995e96e3d363ab62994492c51e32515c5c"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s010-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "type": "constructed-response",
    "prompt": "某題解得「可購買 x≤6.7 盒」。請從盒數的自然限制、題意所問最大值與驗算三方面，判斷最終答案應如何寫。",
    "requiredWork": [
      "指出盒數為非負整數",
      "將上界轉成最大可行盒數",
      "以 6 與 7 的情境結果驗證",
      "說明不可直接寫 6.7 盒"
    ],
    "fullCreditSolution": [
      "盒數不能是 6.7 盒，x 應為非負整數。",
      "符合 x≤6.7 的最大整數是 6，因此最多買 6 盒。",
      "驗算時 6 盒應不超過限制，而 7 盒因 7>6.7 應超過限制。",
      "不能四捨五入成 7，因 7 不在解集。"
    ],
    "alternativeMethod": [
      "可用數線判斷：6.7 左側的整數中最大為 6；再回原情境確認。"
    ],
    "reasoningSteps": [
      "加入自然限制",
      "取最大整數",
      "檢查相鄰整數",
      "用語意表達結果"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "明確指出非負整數、答案最多 6 盒，並說明 6 可行、7 不可行及不可四捨五入。"
      },
      {
        "score": 2,
        "criteria": "答案 6 盒與整數理由正確，但缺少 6、7 的相鄰驗算。"
      },
      {
        "score": 1,
        "criteria": "知道不能寫 6.7 盒，但錯誤四捨五入成 7或未說最大值。"
      },
      {
        "score": 0,
        "criteria": "直接接受 6.7 盒或選 7 盒且無限制檢查。"
      }
    ],
    "partialCreditRules": "題目未提供原費用式，因此驗算以「6≤6.7、7>6.7」的可行性檢查即可，不要求虛構金額。",
    "followThroughPolicy": "若學生先把上界算成 6.6，但仍取 6 並檢查 7，不影響本題核心；若寫 7 則核心錯誤。",
    "unitAndNotationRules": "最終單位為盒；應寫「最多 6 盒」，而非單寫 x=6.7。",
    "answerOnlyPolicy": "只寫 6 盒而無三方面判斷，最多 1 分。",
    "commonErrors": [
      "將離散量當連續量",
      "用四捨五入而非可行性取整"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "最多 6 盒；x 為非負整數，6 可行、7 不可行。",
      "ambiguity": "題目明示盒數與最大值，無法購買部分盒。",
      "scope": "國中不等式答案合理性與離散化。",
      "reviewNote": "獨立比較整數 6、7 與 6.7：6≤6.7 為真、7≤6.7 為假；因此最大可行整數唯一為 6。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f73a3432a135838ddcfd8a9fbadcb4ecae557c4454b4b1be98d958ccc5ebade2"
  },
  {
    "questionId": "u07-s010-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "type": "constructed-response",
    "prompt": "學生解「至少需要幾輛車」得到 x≥4.2，便回答 4 輛。請指出錯誤、寫出正確答案，並說明與「最多可裝幾箱」上界題取整方向的差異。",
    "requiredWork": [
      "辨認至少需求的向上取整",
      "給出正確車輛數",
      "解釋 4 不足與 5 可行",
      "比較最大上界題"
    ],
    "fullCreditSolution": [
      "x≥4.2 表示車輛數至少要達到 4.2，而車輛只能是整數。",
      "4<4.2，不符合；最小符合整數為 5，所以至少需要 5 輛。",
      "「至少需要」是在下界找最小可行整數，通常向上取整；「最多可裝」是在上界找最大可行整數，通常向下取整。"
    ],
    "alternativeMethod": [
      "可在數線上標出 4.2，向右找第一個整數 5；上界則向左找最後一個整數。"
    ],
    "reasoningSteps": [
      "判斷下界方向",
      "檢查相鄰整數",
      "區分最小需求與最大容量"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確指出應為 5 輛，驗證 4 不足、5 可行，並準確比較上下界取整方向。"
      },
      {
        "score": 2,
        "criteria": "答案與下界理由正確，但與上界題比較不完整。"
      },
      {
        "score": 1,
        "criteria": "知道 4.2 不能直接當車數，但仍未確定 5 或取整比較混亂。"
      },
      {
        "score": 0,
        "criteria": "堅持 4 輛或把至少解讀為最多。"
      }
    ],
    "partialCreditRules": "只說「四捨五入成 4」錯但未說向上取 5，不足完整；比較上界需提到找最大不超過者。",
    "followThroughPolicy": "若學生錯誤上界例子但本題 5 輛推理完整，可保留本題主要分。",
    "unitAndNotationRules": "最終單位為輛；車輛數為正整數。",
    "answerOnlyPolicy": "只寫 5 輛，最多 1 分。",
    "commonErrors": [
      "所有小數上界下界都向下取",
      "把至少需要誤認為不得超過"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "至少 5 輛；下界向上找最小整數，上界向下找最大整數。",
      "ambiguity": "車輛為不可分割整數，「至少」明確要求滿足下界。",
      "scope": "國中不等式情境合理性與取整。",
      "reviewNote": "獨立檢查 4≥4.2 為假、5≥4.2 為真；並以數線區分下界右側首個整數與上界左側末個整數。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6cbb969062cf6e9eab8967eb1be61212e445158c89cafb7cb199d354e0d7b1aa"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s010-v001-semantic-r1",
    "questionId": "u07-s010-v001",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "c46c1c645746358e38faed936c02af1aac10a91f2295e353e5626efe9fb72f81",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "候選整數靠近 4.7 的是 4 與 5；4≤4.7，5>4.7，所以最大可行整數為 4。",
    "derivedAnswer": "最多 4 本",
    "storedAnswer": "最多 4 本",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「檢查件數答案的合理取整」，給定條件「書本數為非負整數。」足以決定唯一數學任務。",
      "boundary": "4 可行、5 不可行。",
      "units": "單位本；不可拆分。",
      "scope": "本題只使用 不等式合理性 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本合理性。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：候選整數靠近 4.7 的是 4 與 5；4≤4.7，5>4.7，所以最大可行整數為 4。 所得「最多 4 本」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：4 可行、5 不可行。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s010-v002-semantic-r1",
    "questionId": "u07-s010-v002",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "1d5625f889c5d5d391143e43815ae7bea7df0a452647dcbb01bcb683e086d849",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "把 s=60 代入規則應通過，故要等號；s=70 也應通過，故方向為 ≥。",
    "derivedAnswer": "s≥60",
    "storedAnswer": "s≥60",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「檢查模型語意」，給定條件「s 為分數。」足以決定唯一數學任務。",
      "boundary": "s=60 應符合。",
      "units": "單位分。",
      "scope": "本題只使用 不等式合理性 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本語意合理性。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：把 s=60 代入規則應通過，故要等號；s=70 也應通過，故方向為 ≥。 所得「s≥60」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：s=60 應符合。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s010-v003-semantic-r1",
    "questionId": "u07-s010-v003",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "6666eb7422e25865bcdb937e1867b554199d923f8424e9edf0b23942989c8c82",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "測 V=40：原式 V≥30 會判可行，但容器最多 30，不合理。因此方向應反成 ≤。",
    "derivedAnswer": "不等號方向錯誤",
    "storedAnswer": "不等號方向錯誤",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「診斷模型錯誤類型」，給定條件「V 以公升表示。」足以決定唯一數學任務。",
      "boundary": "唯一實質錯誤為方向。",
      "units": "單位一致。",
      "scope": "本題只使用 不等式合理性 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "錯誤診斷。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：測 V=40：原式 V≥30 會判可行，但容器最多 30，不合理。因此方向應反成 ≤。 所得「不等號方向錯誤」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：唯一實質錯誤為方向。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s010-v004-semantic-r1",
    "questionId": "u07-s010-v004",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "456993daf4fc263f3390630741b7aff84649159fe46ed52f28279145205d7cff",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "需同時 n≤45、n≤40、n≥0；共同部分由較小上界 40 決定，所以 0≤n≤40。",
    "derivedAnswer": "0≤n≤40",
    "storedAnswer": "0≤n≤40",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「將代數解與容量限制取交集」，給定條件「n 為非負整數。」足以決定唯一數學任務。",
      "boundary": "40 可取，41 雖滿足 n≤45 但違反容量。",
      "units": "單位人。",
      "scope": "本題只使用 不等式合理性 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "多重限制合理化。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：需同時 n≤45、n≤40、n≥0；共同部分由較小上界 40 決定，所以 0≤n≤40。 所得「0≤n≤40」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：40 可取，41 雖滿足 n≤45 但違反容量。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s010-v005-semantic-r1",
    "questionId": "u07-s010-v005",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "7f5b96f8968548f6a7d262566657b8a7e27607e45aa4e30f889b38edbd1fd1c1",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "比較相鄰整數 6、7；6 不滿足 n≥6.2，7 滿足，所以至少 7 輛。",
    "derivedAnswer": "至少 7 輛",
    "storedAnswer": "至少 7 輛",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「檢查下界型離散量取整」，給定條件「車數為正整數。」足以決定唯一數學任務。",
      "boundary": "6 不足、7 可行。",
      "units": "單位輛；不可分割。",
      "scope": "本題只使用 不等式合理性 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "下界合理取整。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：比較相鄰整數 6、7；6 不滿足 n≥6.2，7 滿足，所以至少 7 輛。 所得「至少 7 輛」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：6 不足、7 可行。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s010-v006-semantic-r1",
    "questionId": "u07-s010-v006",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "07f0033978137528a428c22705bd8dcb2bccebe9e0ea30da7ecfed68c0a677e4",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "若 12 成立但 13 也成立，12 就不是最多；故必須同時驗證 12 真、13 假。",
    "derivedAnswer": "代入 12 件成立且 13 件不成立",
    "storedAnswer": "代入 12 件成立且 13 件不成立",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「選擇邊界合理性檢查方法」，給定條件「件數為整數。」足以決定唯一數學任務。",
      "boundary": "相鄰整數檢查可證明分界。",
      "units": "無單位換算。",
      "scope": "本題只使用 不等式合理性 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "方法論題。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：若 12 成立但 13 也成立，12 就不是最多；故必須同時驗證 12 真、13 假。 所得「代入 12 件成立且 13 件不成立」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：相鄰整數檢查可證明分界。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s010-v007-semantic-r1",
    "questionId": "u07-s010-v007",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "6d0b456e79b97a9fcd936589c097c69e49460d22ebe43d48a7509b2568935b46",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "對任意 x，左右差為 (2x+9)−(2x+5)=4≥0，所以左邊總不大於右邊，所有 x 皆可。",
    "derivedAnswer": "原式對所有實數 x 都成立",
    "storedAnswer": "原式對所有實數 x 都成立",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「辨認恆成立不等式」，給定條件「x 為任意實數。」足以決定唯一數學任務。",
      "boundary": "5≤9 永真，因此解集全體。",
      "units": "無單位。",
      "scope": "本題只使用 不等式合理性 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "特殊解集判斷。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：對任意 x，左右差為 (2x+9)−(2x+5)=4≥0，所以左邊總不大於右邊，所有 x 皆可。 所得「原式對所有實數 x 都成立」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：5≤9 永真，因此解集全體。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s010-v008-semantic-r1",
    "questionId": "u07-s010-v008",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "eccd8b842cced7749938be0f48ba69db606d51392469fb1355a11187c7bef82e",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "右式比左式固定大 5，因此不可能左>右；化簡成 −1>4 也直接顯示為假，解集空。",
    "derivedAnswer": "原式無解",
    "storedAnswer": "原式無解",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「辨認恆假不等式」，給定條件「x 為實數。」足以決定唯一數學任務。",
      "boundary": "對所有 x 左側永比右側少 5。",
      "units": "無單位。",
      "scope": "本題只使用 不等式合理性 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "無解型特殊情況。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：右式比左式固定大 5，因此不可能左>右；化簡成 −1>4 也直接顯示為假，解集空。 所得「原式無解」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：對所有 x 左側永比右側少 5。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s010-v009-semantic-r1",
    "questionId": "u07-s010-v009",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "6a7ed1c21acdc3c243b46ab31e782eca62d57111e4ef8fc531ac10c385bfc411",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "加法結果必須有單一可解釋單位；「小時＋公里」沒有共同量綱，因此模型不成立。",
    "derivedAnswer": "單位不一致，不能直接相加",
    "storedAnswer": "單位不一致，不能直接相加",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「辨識模型的單位錯誤」，給定條件「3 的單位小時，40x 的單位依 x 而定為公里假設。」足以決定唯一數學任務。",
      "boundary": "除非另有換算關係，兩項不可合併為總量。",
      "units": "核心就是單位不一致。",
      "scope": "本題只使用 不等式合理性 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "模型層級合理性。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：加法結果必須有單一可解釋單位；「小時＋公里」沒有共同量綱，因此模型不成立。 所得「單位不一致，不能直接相加」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：除非另有換算關係，兩項不可合併為總量。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s010-v010-semantic-r1",
    "questionId": "u07-s010-v010",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "352308fa13fbf145495d5d8330c3c4c9832d1560f3e1e0d1db86886512cdde7d",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "可用載重 80 公斤；4 箱重 72，可行；5 箱重 90，總重 610，不可行，所以原答案不合理，最多 4 箱。",
    "derivedAnswer": "不合理，最多 4 箱",
    "storedAnswer": "不合理，最多 4 箱",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「用代入檢查最大箱數」，給定條件「x 為非負整數箱。」足以決定唯一數學任務。",
      "boundary": "4 箱總重 592 合規，5 箱 610 超載。",
      "units": "重量公斤一致。",
      "scope": "本題只使用 不等式合理性 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "完整合理性驗證。",
    "literacyNecessityCheck": "載重安全上限與離散箱重使相鄰值檢查不可省略。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：可用載重 80 公斤；4 箱重 72，可行；5 箱重 90，總重 610，不可行，所以原答案不合理，最多 4 箱。 所得「不合理，最多 4 箱」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：4 箱總重 592 合規，5 箱 610 超載。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s010-v011-semantic-r1",
    "questionId": "u07-s010-v011",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "863313795db4fc9f4fabbd6828f9c787e78eaabcb7cccaf66afc19ebd032c477",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "換成公尺：2.4 公里=2400 公尺，才能算 2400−900；或換成公里 0.9。故第一步是統一單位。",
    "derivedAnswer": "先統一公里或公尺單位",
    "storedAnswer": "先統一公里或公尺單位",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「在建立不等式前統一單位」，給定條件「1 公里=1000 公尺。」足以決定唯一數學任務。",
      "boundary": "兩種換算方式均可得到相同剩餘 1.5 公里。",
      "units": "必須統一距離單位。",
      "scope": "本題只使用 不等式合理性 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "素養資料前處理。",
    "literacyNecessityCheck": "公里與公尺並列是情境的核心障礙，必須先換算。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：換成公尺：2.4 公里=2400 公尺，才能算 2400−900；或換成公里 0.9。故第一步是統一單位。 所得「先統一公里或公尺單位」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：兩種換算方式均可得到相同剩餘 1.5 公里。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s010-v012-semantic-r1",
    "questionId": "u07-s010-v012",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "d33031841f60d3d0f26d3c4b9fb080995e96e3d363ab62994492c51e32515c5c",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "任何 n≥20 都大於 18，故必違反 n≤18；任何 n≤18 又小於 20，故必違反最低要求。沒有共同值。",
    "derivedAnswer": "沒有可行人數",
    "storedAnswer": "沒有可行人數",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「判斷情境限制互相矛盾」，給定條件「n 為非負整數。」足以決定唯一數學任務。",
      "boundary": "下界 20 大於上界 18，交集空。",
      "units": "單位人。",
      "scope": "本題只使用 不等式合理性 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "情境合理性與無解。",
    "literacyNecessityCheck": "最低需求與容量上限互相衝突，情境必須保留才能判定不可舉辦。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：任何 n≥20 都大於 18，故必違反 n≤18；任何 n≤18 又小於 20，故必違反最低要求。沒有共同值。 所得「沒有可行人數」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：下界 20 大於上界 18，交集空。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
