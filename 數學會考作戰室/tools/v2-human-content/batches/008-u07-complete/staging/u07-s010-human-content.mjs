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
      "answer": "最多 6 張。",
      "why": "最多形成上界，票數又不可分割。六張符合不超過六點八，七張則超過，因此取整不是看小數是否大於零點五，而是保留最大可行整數。"
    },
    {
      "exampleId": "L2",
      "prompt": "題目說至少 40 分，學生列 s<40，是否合理？",
      "solutionSteps": [
        "至少包含 40。",
        "正確應為 s≥40。"
      ],
      "answer": "不合理，方向與等號都錯。",
      "why": "至少四十分表示四十分與更高分都通過，所以範圍由四十向右且包含端點。把四十與五十分代入原式即可看出 s<40 的方向和端點都相反。"
    },
    {
      "exampleId": "L3",
      "prompt": "容量 50 人，代數解得 n≤62，完整範圍為何？",
      "solutionSteps": [
        "情境另有 0≤n≤50。",
        "與 n≤62 取交集。"
      ],
      "answer": "0≤n≤50，若 n 為人數則 n 為整數。",
      "why": "代數上界六十二不能凌駕場地容量五十，兩項限制必須取交集；人數還不能為負且需為整數。完整答案要同時保留代數與現實限制。"
    },
    {
      "exampleId": "L4",
      "prompt": "化簡後得到 3<8，原未知數沒有其他限制，解集為何？",
      "solutionSteps": [
        "3<8 對所有 x 都成立。",
        "因此所有允許範圍內的 x 都是解。"
      ],
      "answer": "所有原定義域中的 x。",
      "why": "未知數消去後只剩恆真的常數敘述，表示原式不再限制 x。若剩下的是假敘述則無解；不能在未知數消失後自行創造一個數值邊界。"
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
  "contentSha256": "4bfd3f9ce8d1c8ab8c295cbdebc07763b6f69a109363159a8efeb01a421c5c9b"
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
    "explanation": "書本數只能是非負整數，而最多四點七本表示本數不得超過四點七。整數四符合，五已超過上界，所以最大可行值是四，應作答最多四本。",
    "steps": [
      "確認書本數是不可分割的整數。",
      "比較相鄰整數四與五是否符合 x≤4.7。",
      "四可行、五不可行，寫成最多四本。"
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
    "misconceptionTarget": "用一般四捨五入把四點七變成五，沒有檢查五本已超過可行上界。",
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
    "contentSha256": "66f116d33358d21c2f527425519135380d04f29532e7b924e1755da89c0aa302"
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
    "explanation": "至少六十分表示六十分本身合格，且所有更高分也合格。因此範圍由六十向右並包含端點，模型是 s≥60；把六十代入可驗證等號不可省略。",
    "steps": [
      "辨認至少描述下界。",
      "用 s=60 測試，確認六十必須包含。",
      "用較高分測試方向，寫成 s≥60。"
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
    "misconceptionTarget": "把至少誤寫成嚴格大於，漏掉剛好六十分也達到門檻的情況。",
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
    "contentSha256": "b267ed857a6eaedf28017c5ec4a4a2f4f468a8a2254652de81dd84f8bfd0ca34"
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
    "explanation": "最多三十公升表示容器中的體積不能大於三十，應寫 V≤30。原式 V≥30 反而會讓四十公升等超過容量的數值通過，因此主要錯誤是不等號方向相反。",
    "steps": [
      "把最多三十翻成上界 V≤30。",
      "用 V=40 檢查原式會錯誤判定可行。",
      "比較兩式，指出不等號方向錯誤。"
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
    "misconceptionTarget": "只看式子含有 V 與三十就認為合理，沒有用超過容量的數值檢查方向。",
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
    "contentSha256": "dfae936c9d940cb85bbe569a7695baf451990ed8219ec72eb78de122671efd31"
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
    "explanation": "代數結果給 n≤45，場地另給更嚴格的 n≤40，兩項必須同時成立，所以共同上界是四十。人數又是非負整數，因此完整實數範圍寫成 0≤n≤40，並保留整數限制。",
    "steps": [
      "把代數上界四十五與場地上界四十取交集。",
      "選較嚴格上界 n≤40。",
      "加入人數非負限制，得到 0≤n≤40 且 n 為整數。"
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
    "misconceptionTarget": "只採代數算出的四十五，忽略場地容量與人數非負、整數等情境限制。",
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
    "contentSha256": "5fefd2b4962190640ecd06a4a57e56b0d42d75dabb3a14383a1d7a62b248bf74"
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
    "explanation": "至少需要六點二輛表示車數不小於六點二，而車輛不能分割。六輛小於六點二而不足，七輛是第一個符合下界的整數，所以合理答案是至少七輛。",
    "steps": [
      "確認至少需要形成下界 n≥6.2。",
      "檢查六輛不符合、七輛符合。",
      "依最小可行整數向上取整，作答至少七輛。"
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
    "misconceptionTarget": "把最低需求也向下取整成六輛，沒有檢查六其實低於六點二。",
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
    "contentSha256": "59a0ce28783080a41563e85b36f1eaba11f3fe9516a808ddc931dbdd5729adce"
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
    "explanation": "要證明最多十二件，不只要確認十二件符合限制，還要確認下一個整數十三件不符合。若十三也可行，十二便不是最大值；因此同時驗證候選值與相鄰超界值最有力。",
    "steps": [
      "把十二件代回原限制，確認候選值可行。",
      "把下一個整數十三件代回，確認不可行。",
      "由一真一假證明分界確在十二，故為最多。"
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
    "misconceptionTarget": "只驗證十二件本身可行，沒有排除更大的十三件也可能可行。",
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
    "contentSha256": "f402e47162332276bb1c3e4be6e8a4f771bcef1713459b4a87f7c4140ecc2943"
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
    "explanation": "兩邊同減二 x 後，未知數完全消去，只剩五不超過九。這個常數敘述永遠為真，所以原不等式對每個實數 x 都成立，不能憑空寫出 x≤2。",
    "steps": [
      "兩邊同減 2x，得到 5≤9。",
      "判斷五不超過九為真敘述。",
      "因結果與 x 無關且恆真，結論是所有實數皆解。"
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
    "misconceptionTarget": "未知數消去後仍硬把常數相減結果當成 x 的邊界，創造不存在的限制。",
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
    "contentSha256": "6e389dbe6b8646329ea68c5be4cdac60a64d0b289a33919711315e6f3982fbfe"
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
    "explanation": "兩邊同減三 x 後只剩負一大於四，這是假敘述，且不再含 x。任何 x 都無法改變負一與四的大小關係，因此原式沒有解，不是 x 大於五。",
    "steps": [
      "兩邊同減 3x，得到 −1>4。",
      "判斷負一大於四為假敘述。",
      "因結果對所有 x 都是假，結論為無解。"
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
    "misconceptionTarget": "未知數消去後錯誤移動常數，硬造 x 大於五或其他虛假範圍。",
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
    "contentSha256": "da1a77cb4ec28560b1caac38e7bf56b5a1113ff1bed1a9050fc69f080a94b1ee"
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
    "explanation": "加法的各項必須代表同一種類與單位的量。三小時是時間，四十公里乘 x 若仍代表距離，兩者不能直接相加；必須先透過速度等關係換成同一量綱。",
    "steps": [
      "標出三的單位為小時。",
      "判讀四十公里相關項代表距離。",
      "確認時間與距離量綱不同，指出不能直接相加。"
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
    "misconceptionTarget": "只檢查代數式外形與係數，沒有檢查相加各項的物理單位是否一致。",
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
    "contentSha256": "562d812d1d30e4d81c497f658fae98355ba3cb09e962e084a04f8fdc8edb69b2"
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
    "explanation": "扣除四位乘客五百二十公斤後，只剩八十公斤載重。四箱重七十二公斤可行，五箱重九十公斤，使總重六百一十公斤超限，所以原答案不合理，最多只能四箱。",
    "steps": [
      "求剩餘載重 600−520=80 公斤。",
      "比較四箱 72 公斤與五箱 90 公斤。",
      "確認四箱可行、五箱超限，作答最多四箱。"
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
    "misconceptionTarget": "用四點四四接近五或四捨五入決定箱數，忽略五箱實際會超過載重。",
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
    "contentSha256": "453b85f1ee26f04574bd50ac19692f56f8f844f9cfbf80afd2818d9fa3e65496"
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
    "explanation": "二點四公里與九百公尺是不同單位，不能直接做二點四減九百。可把二點四公里換成二千四百公尺，或把九百公尺換成零點九公里，再計算剩餘距離。",
    "steps": [
      "辨認兩個距離分別用公里與公尺。",
      "選同一單位換算成 2400 公尺與 900 公尺。",
      "單位一致後才做相減，得到剩餘一千五百公尺。"
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
    "misconceptionTarget": "忽略公里與公尺相差一千倍，直接把二點四與九百放進同一減法式。",
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
    "contentSha256": "0c923017073c86710e649aeaa2310da3a0a777e15a22c48c35db743313a5fa2a"
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
    "explanation": "至少二十人要求 n≥20，場地最多十八人要求 n≤18。兩個範圍沒有重疊：達到二十就超過十八，不超過十八又未達二十，所以沒有任何可行人數。",
    "steps": [
      "把最低要求寫成 n≥20。",
      "把場地上限寫成 n≤18。",
      "取兩範圍交集，確認是空集合，作答無可行人數。"
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
    "misconceptionTarget": "分別看到十八或二十符合其中一條便判可行，沒有檢查兩條件要同時成立。",
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
    "contentSha256": "a5bc2f9d89949f9517cd0816a77e32c6b3082696677b3a9333793c0b05539ee9"
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
      "盒數 x 必須是非負整數，不能實際購買六點七盒。",
      "不等式 x≤6.7 給的是上界，符合此上界的最大整數是六，所以應寫最多買六盒。",
      "驗算六盒時 6≤6.7，符合；下一個整數七滿足 7>6.7，不符合。",
      "不能四捨五入成七，因為取整必須保留原不等式的可行性。"
    ],
    "alternativeMethod": [
      "可用數線判斷：6.7 左側的整數中最大為 6；再回原情境確認。"
    ],
    "reasoningSteps": [
      "加入盒數非負且為整數的自然限制。",
      "從實數上界取最大可行整數六。",
      "代入六與七，驗證答案與最大性。"
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
      "把盒數當連續量，直接回答六點七盒。",
      "用一般四捨五入得到七，卻沒有檢查七已超過上界。",
      "只驗證六盒可行，沒有用七盒確認六是最大值。"
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
    "contentSha256": "0084d20c635351531677945e9c71e0c1848d99ea760748d47475cfe1be425faf"
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
      "x≥4.2 是最低需求，車輛數又只能是整數；四小於四點二，所以四輛不符合。",
      "第一個不小於四點二的整數是五，因此正確答案為至少需要五輛。",
      "驗算四輛不足，五輛符合，證明取整分界正確。",
      "至少需要是在下界找最小可行整數，通常向上取；最多可裝是在上界找最大可行整數，通常向下取。"
    ],
    "alternativeMethod": [
      "可在數線上標出 4.2，向右找第一個整數 5；上界則向左找最後一個整數。"
    ],
    "reasoningSteps": [
      "辨認至少需要形成下界，並加入整數限制。",
      "比較相鄰整數四與五，找最小可行值。",
      "對照最大容量上界題，解釋兩種取整方向。"
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
      "認為所有小數結果一律向下取整，把不足的四輛當答案。",
      "把至少需要誤讀為不得超過，將下界問題當上界問題。",
      "只寫五輛而沒有說明為何與最多可裝題的取整方向不同。"
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
    "contentSha256": "0bcd9898fa7ac6a21b609d0cc6135a6fae8e5588d4c59ad874803530f3543849"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s010-v001-semantic-r1",
    "questionId": "u07-s010-v001",
    "unitId": "u07",
    "topicId": "u07-applications",
    "skillId": "inequality-reasonableness",
    "contentSha256": "66f116d33358d21c2f527425519135380d04f29532e7b924e1755da89c0aa302",
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
    "contentSha256": "b267ed857a6eaedf28017c5ec4a4a2f4f468a8a2254652de81dd84f8bfd0ca34",
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
    "contentSha256": "dfae936c9d940cb85bbe569a7695baf451990ed8219ec72eb78de122671efd31",
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
    "contentSha256": "5fefd2b4962190640ecd06a4a57e56b0d42d75dabb3a14383a1d7a62b248bf74",
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
    "contentSha256": "59a0ce28783080a41563e85b36f1eaba11f3fe9516a808ddc931dbdd5729adce",
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
    "contentSha256": "f402e47162332276bb1c3e4be6e8a4f771bcef1713459b4a87f7c4140ecc2943",
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
    "contentSha256": "6e389dbe6b8646329ea68c5be4cdac60a64d0b289a33919711315e6f3982fbfe",
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
    "contentSha256": "da1a77cb4ec28560b1caac38e7bf56b5a1113ff1bed1a9050fc69f080a94b1ee",
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
    "contentSha256": "562d812d1d30e4d81c497f658fae98355ba3cb09e962e084a04f8fdc8edb69b2",
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
    "contentSha256": "453b85f1ee26f04574bd50ac19692f56f8f844f9cfbf80afd2818d9fa3e65496",
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
    "contentSha256": "0c923017073c86710e649aeaa2310da3a0a777e15a22c48c35db743313a5fa2a",
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
    "contentSha256": "a5bc2f9d89949f9517cd0816a77e32c6b3082696677b3a9333793c0b05539ee9",
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
