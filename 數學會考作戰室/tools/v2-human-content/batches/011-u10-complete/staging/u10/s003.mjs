// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s003-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-concepts",
    "skillId": "like-terms-combine",
    "lockedTitle": "同類項合併",
    "title": "同類項合併：文字部分完全相同才可相加減",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能判斷係數不同但文字部分相同的同類項。",
      "能只對係數做加減並保留文字部分。",
      "能辨認 x、x²、xy 與 yx 的關係。"
    ],
    "prerequisites": [
      "polynomial-evaluation"
    ],
    "prerequisiteBridge": "先備技能 polynomial-evaluation 已建立下一步所需概念；本節專注於判斷同類項並只合併係數。",
    "glossary": [
      {
        "term": "同類項",
        "definition": "文字及各文字指數完全相同的項。"
      },
      {
        "term": "合併同類項",
        "definition": "將同類項的係數相加減，文字部分不變。"
      },
      {
        "term": "文字部分",
        "definition": "去除數字係數後留下的未知數及其指數。"
      }
    ],
    "notation": [
      {
        "symbol": "3x² 與 -5x²",
        "meaning": "文字部分同為 x²，是同類項。"
      },
      {
        "symbol": "2xy 與 -7yx",
        "meaning": "因 xy=yx，文字部分相同。"
      }
    ],
    "conceptNarrative": [
      "合併的本質是分配律反向使用：3x+5x=(3+5)x。",
      "只有文字部分完全相同才能合併；x 與 x² 不同，x 與 y 也不同。",
      "常數項彼此是同類項。",
      "係數合為 0 時整項消失，但其他項不受影響。"
    ],
    "formalDefinitions": [
      {
        "name": "同類項條件",
        "statement": "每個未知數種類與其指數都一致。"
      }
    ],
    "formulas": [
      {
        "formula": "axᵐ+bxᵐ=(a+b)xᵐ",
        "conditions": [
          "a、b 為數，文字部分 xᵐ 相同"
        ],
        "meaning": "合併時只運算係數。"
      }
    ],
    "nonApplicableCases": [
      "x 與 x² 不能合併。",
      "2x 與 2y 不能因係數相同而合併。",
      "乘法中的 3x·2x 不是合併同類項，而是單項式乘法。",
      "括號前有負號時要先正確去括號。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先按文字部分分類。",
        "check": "完成此步後，確認內容仍符合「判斷同類項並只合併係數」。"
      },
      {
        "step": 2,
        "instruction": "將每組係數連同符號寫出。",
        "check": "完成此步後，確認內容仍符合「判斷同類項並只合併係數」。"
      },
      {
        "step": 3,
        "instruction": "計算係數和。",
        "check": "完成此步後，確認內容仍符合「判斷同類項並只合併係數」。"
      },
      {
        "step": 4,
        "instruction": "抄回原文字部分。",
        "check": "完成此步後，確認內容仍符合「判斷同類項並只合併係數」。"
      },
      {
        "step": 5,
        "instruction": "按降冪排列並檢查是否有係數 0。",
        "check": "完成此步後，確認內容仍符合「判斷同類項並只合併係數」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "化簡 4x+7x-3。",
        "solutionSteps": [
          "(4+7)x-3。"
        ],
        "answer": "11x-3。"
      },
      {
        "exampleId": "L2",
        "prompt": "化簡 5x²-2x+3x²+x。",
        "solutionSteps": [
          "x² 項係數 5+3；x 項係數 -2+1。"
        ],
        "answer": "8x²-x。"
      },
      {
        "exampleId": "L3",
        "prompt": "化簡 2xy-5yx+4。",
        "solutionSteps": [
          "xy=yx，所以 2xy-5xy。"
        ],
        "answer": "-3xy+4。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把 3x+4 合併成 7x",
        "why": "常數 4 沒有 x",
        "correction": "保留為 3x+4。"
      },
      {
        "mistake": "把 2x²+5x 合併成 7x³",
        "why": "誤把加法當指數相加",
        "correction": "不同文字部分不可合併。"
      },
      {
        "mistake": "係數相加後又改變指數",
        "why": "混淆加法與乘法法則",
        "correction": "合併後文字部分完全不變。"
      }
    ],
    "selfCheck": [
      "我是否能能判斷係數不同但文字部分相同的同類項？",
      "我是否能能只對係數做加減並保留文字部分？",
      "我是否能能辨認 x、x²、xy 與 yx 的關係？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "同類項要看文字與指數是否完全相同。",
      "合併只加減係數。",
      "常數彼此可合併。",
      "係數為 0 時該項消失。"
    ],
    "connections": {
      "previous": "上一技能 多項式代入求值 提供本節所需工具。",
      "next": [
        "下一節先化簡再判斷多項式的最高次數與係數符號。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s003-v001",
        "u10-s003-v002",
        "u10-s003-v003",
        "u10-s003-v004",
        "u10-s003-v005",
        "u10-s003-v006",
        "u10-s003-v007",
        "u10-s003-v008",
        "u10-s003-v009",
        "u10-s003-v010",
        "u10-s003-v011",
        "u10-s003-v012"
      ],
      "constructedResponseIds": [
        "u10-s003-cr001",
        "u10-s003-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「同類項合併：文字部分完全相同才可相加減」：定義、3 個例題、錯誤推理與下一技能銜接均針對 like-terms-combine；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "34a8e02513fb3968dfda01dbbae0d4c787bf18327560fd6f702b84faf455a5fa"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s003-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "小安把 4x+3x 化簡成 7x²。下列哪一項最能指出他的錯誤？",
      "givenConditions": [
        "小安的錯誤結果為 7x²。"
      ],
      "target": "診斷同類項合併時誤改指數的錯誤",
      "choices": [
        "係數應相乘，所以應得到 12x",
        "常數項沒有一起相加",
        "同類項相加只加係數，字母與指數保持不變",
        "x 與 x 相加時應把指數加成 2"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "4x 與 3x 是同類項，相加時只把係數 4 和 3 相加，x 的指數仍是 1；正確結果是 7x。",
        "derivedChoice": "同類項相加只加係數，字母與指數保持不變",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "同類項相加只處理係數，字母部分和指數保持不變。",
      "steps": [
        "辨認 4x 與 3x 的字母部分同為 x。",
        "計算係數 4+3=7。",
        "保留 x¹，得到 7x，因此 7x² 的錯誤是改變了指數。"
      ],
      "optionAnalysis": [
        {
          "choice": "係數應相乘，所以應得到 12x",
          "truth": false,
          "reason": "同類項相加不是把係數相乘。"
        },
        {
          "choice": "常數項沒有一起相加",
          "truth": false,
          "reason": "原式沒有常數項，問題不在漏加常數。"
        },
        {
          "choice": "同類項相加只加係數，字母與指數保持不變",
          "truth": true,
          "reason": "這正確指出只加係數並保留字母與指數。"
        },
        {
          "choice": "x 與 x 相加時應把指數加成 2",
          "truth": false,
          "reason": "指數相加是同底數相乘的規則，不適用於同類項相加。"
        }
      ],
      "misconceptionTarget": "把同類項加法誤套用為同底數乘法的指數規則",
      "prerequisiteCheck": "只使用多項式項、係數與同類項定義。",
      "estimatedTimeSec": 90,
      "unitCheck": "純代數表示，不涉及單位。",
      "roundingCheck": "全程精確運算。",
      "ambiguityAudit": "題目要求診斷 7x² 的錯誤，只有第三項正確描述規則。",
      "boundaryAudit": "只使用國中多項式同類項合併。",
      "difficultyReason": "基礎：辨認同類項合併時係數與字母部分的角色。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s003-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cc0ad5477cf29a6c8992dac25e80cfa70946b954bdd9da59d708e02b801d2b24"
    },
    {
      "questionId": "u10-s003-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "下列哪一組是同類項？",
      "givenConditions": [],
      "target": "辨認同類項",
      "choices": [
        "2x 與 2y",
        "x 與 x²",
        "3ab 與 3a",
        "4x² 與 -7x²"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "4x² 與 -7x² 的文字部分都為 x²。",
        "derivedChoice": "4x² 與 -7x²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "係數可以不同，文字種類與指數必須相同。",
      "steps": [
        "4x² 與 -7x² 的文字部分都為 x²。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x 與 2y",
          "truth": false,
          "reason": "未知數不同。"
        },
        {
          "choice": "x 與 x²",
          "truth": false,
          "reason": "指數不同。"
        },
        {
          "choice": "3ab 與 3a",
          "truth": false,
          "reason": "第二項缺 b。"
        },
        {
          "choice": "4x² 與 -7x²",
          "truth": true,
          "reason": "文字部分相同，正確。"
        }
      ],
      "misconceptionTarget": "只看係數或部分文字",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認同類項」且四個選項以同一表示層級作答；逐項重算後只有「4x² 與 -7x²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：辨認同類項，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s003-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c70eaa78e3ee561079d6bf6b4e8ebf16f350eedd5b60e1f3df73fd18775c2acf"
    },
    {
      "questionId": "u10-s003-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "將 6a−2b+3a+5 合併同類項，結果為何？",
      "givenConditions": [
        "a 項、b 項與常數項必須分別處理。"
      ],
      "target": "辨認不同字母項並正確合併同類項",
      "choices": [
        "9a−2b+5",
        "7a+b+5",
        "9ab+5",
        "9a−2b"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "6a 與 3a 可合併為 9a；−2b 沒有其他 b 項，常數 5 也保留，所以得到 9a−2b+5。",
        "derivedChoice": "9a−2b+5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "只有 6a 和 3a 是同類項；−2b 與常數 5 都必須保留。",
      "steps": [
        "將 a 項分組：6a+3a=9a。",
        "b 項只有 −2b，保持不變。",
        "常數 5 保持不變，得到 9a−2b+5。"
      ],
      "optionAnalysis": [
        {
          "choice": "9a−2b+5",
          "truth": true,
          "reason": "正確合併 a 項並保留 b 項與常數。"
        },
        {
          "choice": "7a+b+5",
          "truth": false,
          "reason": "把 a 項與 b 項錯誤混合。"
        },
        {
          "choice": "9ab+5",
          "truth": false,
          "reason": "把加減項誤寫成乘積 ab。"
        },
        {
          "choice": "9a−2b",
          "truth": false,
          "reason": "漏掉常數 5。"
        }
      ],
      "misconceptionTarget": "把不同字母的項合併，或在化簡時漏掉未合併項",
      "prerequisiteCheck": "只使用項、同類項與加減法。",
      "estimatedTimeSec": 90,
      "unitCheck": "純代數表示，不涉及單位。",
      "roundingCheck": "全程精確運算。",
      "ambiguityAudit": "a 項、b 項與常數項分類唯一，只有第一項等價於原式。",
      "boundaryAudit": "只使用國中多項式同類項合併。",
      "difficultyReason": "基礎：需先分類不同字母項，再合併唯一一組同類項。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s003-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4cd8ac514837bbf3e049b27f1a19f7a0c28fb9cd0844eba47847be60b3a1ede0"
    },
    {
      "questionId": "u10-s003-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 5x²-3x+2x²+x。",
      "givenConditions": [],
      "target": "多組同類項合併",
      "choices": [
        "7x²-4x",
        "7x²-2x",
        "3x²-2x",
        "7x³-2x"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "x² 項係數 5+2=7；x 項係數 -3+1=-2。",
        "derivedChoice": "7x²-2x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "分組合併得 7x²-2x。",
      "steps": [
        "x² 項係數 5+2=7。",
        "x 項係數 -3+1=-2。"
      ],
      "optionAnalysis": [
        {
          "choice": "7x²-4x",
          "truth": false,
          "reason": "x 項符號錯。"
        },
        {
          "choice": "7x²-2x",
          "truth": true,
          "reason": "分組合併得 7x²-2x。"
        },
        {
          "choice": "3x²-2x",
          "truth": false,
          "reason": "二次項係數相減錯。"
        },
        {
          "choice": "7x³-2x",
          "truth": false,
          "reason": "把二次項相加變三次。"
        }
      ],
      "misconceptionTarget": "不同次方分組或負係數計算錯誤",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「多組同類項合併」且四個選項以同一表示層級作答；逐項重算後只有「7x²-2x」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：多組同類項合併，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s003-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e2ddaeb7b230bf371723d22561e9c5fc31e6f0e667728edea647a421206fb60d"
    },
    {
      "questionId": "u10-s003-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 2xy-5yx+4xy。",
      "givenConditions": [],
      "target": "雙文字同類項",
      "choices": [
        "11xy",
        "-7xy",
        "xy+4",
        "xy"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "yx=xy，所以係數 2-5+4=1，結果 xy。",
        "derivedChoice": "xy",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "交換律使 yx 與 xy 文字部分相同。",
      "steps": [
        "yx=xy，所以係數 2-5+4=1，結果 xy。"
      ],
      "optionAnalysis": [
        {
          "choice": "11xy",
          "truth": false,
          "reason": "把 -5 當 +5。"
        },
        {
          "choice": "-7xy",
          "truth": false,
          "reason": "漏加 4xy。"
        },
        {
          "choice": "xy+4",
          "truth": false,
          "reason": "把 4 誤看常數。"
        },
        {
          "choice": "xy",
          "truth": true,
          "reason": "係數為 1，正確。"
        }
      ],
      "misconceptionTarget": "未辨認 xy=yx 或符號錯",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「雙文字同類項」且四個選項以同一表示層級作答；逐項重算後只有「xy」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：雙文字同類項，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s003-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ae22ce01b1ded23ff77fdb6248479168f6a13e390f4914cbe3fa1d226c8dc026"
    },
    {
      "questionId": "u10-s003-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 3x²+kx²=10x²，則 k 為何？",
      "givenConditions": [],
      "target": "由合併結果求係數",
      "choices": [
        "7",
        "3",
        "5",
        "13"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "(3+k)x²=10x²，所以 3+k=10，k=7。",
        "derivedChoice": "7",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "比較同類項係數。",
      "steps": [
        "(3+k)x²=10x²，所以 3+k=10，k=7。"
      ],
      "optionAnalysis": [
        {
          "choice": "7",
          "truth": true,
          "reason": "7 正確。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "只抄已有係數。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "10-3 計算錯。"
        },
        {
          "choice": "13",
          "truth": false,
          "reason": "把係數相加結果當 k。"
        }
      ],
      "misconceptionTarget": "未建立係數等式",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由合併結果求係數」且四個選項以同一表示層級作答；逐項重算後只有「7」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：由合併結果求係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s003-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e3858c2ae8802751cd8b510c228edb286d395e3a5906220003a54480d02072e2"
    },
    {
      "questionId": "u10-s003-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 4x-(2x-3)+x。",
      "givenConditions": [],
      "target": "去括號後合併",
      "choices": [
        "3x-3",
        "3x+3",
        "7x-3",
        "7x+3"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "去括號得 4x-2x+3+x=3x+3。",
        "derivedChoice": "3x+3",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "負號使 -3 變 +3，再合併 x 項。",
      "steps": [
        "去括號得 4x-2x+3+x=3x+3。"
      ],
      "optionAnalysis": [
        {
          "choice": "3x-3",
          "truth": false,
          "reason": "常數符號錯。"
        },
        {
          "choice": "3x+3",
          "truth": true,
          "reason": "3x+3 正確。"
        },
        {
          "choice": "7x-3",
          "truth": false,
          "reason": "把 -2x 當 +2x 且常數錯。"
        },
        {
          "choice": "7x+3",
          "truth": false,
          "reason": "把括號全變正。"
        }
      ],
      "misconceptionTarget": "括號前負號未逐項分配",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「去括號後合併」且四個選項以同一表示層級作答；逐項重算後只有「3x+3」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：去括號後合併，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s003-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9603cd06efdc7389d7d5361c5696699f1028dc4e4ef3526cd5c20dc8328636c9"
    },
    {
      "questionId": "u10-s003-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 2(x²-x)+3x-(x²+1)。",
      "givenConditions": [],
      "target": "分配與合併綜合",
      "choices": [
        "x²-5x-1",
        "3x²+x+1",
        "x²+x-1",
        "x²+x+1"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "展開得 2x²-2x+3x-x²-1=x²+x-1。",
        "derivedChoice": "x²+x-1",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先分配，再依次方合併。",
      "steps": [
        "展開得 2x²-2x+3x-x²-1=x²+x-1。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-5x-1",
          "truth": false,
          "reason": "x 項係數錯。"
        },
        {
          "choice": "3x²+x+1",
          "truth": false,
          "reason": "二次項與常數符號錯。"
        },
        {
          "choice": "x²+x-1",
          "truth": true,
          "reason": "先分配，再依次方合併。"
        },
        {
          "choice": "x²+x+1",
          "truth": false,
          "reason": "末項 -1 誤為 +1。"
        }
      ],
      "misconceptionTarget": "多重括號展開後分類錯",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「分配與合併綜合」且四個選項以同一表示層級作答；逐項重算後只有「x²+x-1」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：分配與合併綜合，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s003-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1b5652884696adfcc4d22b0b5d19e7736d9f492c4bed870f832bd9e6c87b8464"
    },
    {
      "questionId": "u10-s003-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (m-1)x+(2-m)x 化簡後為 5x，則 m 為何？",
      "givenConditions": [],
      "target": "判斷恆等與矛盾",
      "choices": [
        "無解",
        "-4",
        "4",
        "任意數"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "係數和 (m-1)+(2-m)=1，無論 m 為何都只得到 x，不可能是 5x。",
        "derivedChoice": "無解",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "化簡後 m 抵消，條件矛盾，所以無解。",
      "steps": [
        "係數和 (m-1)+(2-m)=1，無論 m 為何都只得到 x，不可能是 5x。"
      ],
      "optionAnalysis": [
        {
          "choice": "無解",
          "truth": true,
          "reason": "無解正確。"
        },
        {
          "choice": "-4",
          "truth": false,
          "reason": "代入猜值得到錯誤。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "同樣無法改變係數 1。"
        },
        {
          "choice": "任意數",
          "truth": false,
          "reason": "雖係數固定，但不能任意滿足 5x。"
        }
      ],
      "misconceptionTarget": "未先化簡參數即猜答案",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「判斷恆等與矛盾」且四個選項以同一表示層級作答；逐項重算後只有「無解」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：判斷恆等與矛盾，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s003-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "63ac11d05b31e3bfea9dfdad5207da386853e6c227d549aba8c583308d3d4a27"
    },
    {
      "questionId": "u10-s003-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "商店第一天賣出 (3x+5) 件，第二天賣出 (2x-1) 件。兩天共賣出多少件？",
      "givenConditions": [],
      "target": "合併兩日數量",
      "choices": [
        "x+6 件",
        "5x+4 件",
        "6x+4 件",
        "5x+6 件"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "(3x+5)+(2x-1)=5x+4。",
        "derivedChoice": "5x+4 件",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "同類項分別代表隨 x 變動與固定件數。",
      "steps": [
        "(3x+5)+(2x-1)=5x+4。"
      ],
      "optionAnalysis": [
        {
          "choice": "x+6 件",
          "truth": false,
          "reason": "錯把兩式相減。"
        },
        {
          "choice": "5x+4 件",
          "truth": true,
          "reason": "5x+4 正確。"
        },
        {
          "choice": "6x+4 件",
          "truth": false,
          "reason": "x 係數相乘。"
        },
        {
          "choice": "5x+6 件",
          "truth": false,
          "reason": "常數把 -1 當 +1。"
        }
      ],
      "misconceptionTarget": "情境加總時常數符號錯",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "各項與答案單位均為件。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「合併兩日數量」且四個選項以同一表示層級作答；逐項重算後只有「5x+4 件」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：合併兩日數量，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「兩天共」決定使用加法，件數語意要求合併同類量。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s003-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9693641131f0aebc3bba930b605351bacf892a375c697c4ecb339e1f71ef43a1"
    },
    {
      "questionId": "u10-s003-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一條步道由三段組成，長度分別為 (2x+1)、(x+4)、(3x-2) 公尺。總長為何？",
      "givenConditions": [],
      "target": "總長模型化簡",
      "choices": [
        "5x+3 公尺",
        "6x+7 公尺",
        "6x+3 公尺",
        "5x+7 公尺"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "三段相加：(2+1+3)x+(1+4-2)=6x+3。",
        "derivedChoice": "6x+3 公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "變動長度與固定長度分別合併。",
      "steps": [
        "三段相加：(2+1+3)x+(1+4-2)=6x+3。"
      ],
      "optionAnalysis": [
        {
          "choice": "5x+3 公尺",
          "truth": false,
          "reason": "漏加一段 x。"
        },
        {
          "choice": "6x+7 公尺",
          "truth": false,
          "reason": "常數符號錯。"
        },
        {
          "choice": "6x+3 公尺",
          "truth": true,
          "reason": "6x+3 正確。"
        },
        {
          "choice": "5x+7 公尺",
          "truth": false,
          "reason": "係數與常數皆錯。"
        }
      ],
      "misconceptionTarget": "多段合併時漏項",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "所有長度同為公尺，可相加。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「總長模型化簡」且四個選項以同一表示層級作答；逐項重算後只有「6x+3 公尺」成立。",
      "boundaryAudit": "各段長需為正；題目只要求代數總長。",
      "difficultyReason": "素養：總長模型化簡，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "步道分段決定三個式子必須相加，且答案須保留公尺。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s003-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1b81c231ae5a1f29867b98b817d34703e1c4f98d1d648191b84a2c2a244d4a93"
    },
    {
      "questionId": "u10-s003-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "工廠上午產量為 4x²+3x，下午產量為 2x²-5x，報廢 x²-x 件。合格總產量為何？",
      "givenConditions": [],
      "target": "生產與損耗合併",
      "choices": [
        "5x²-3x",
        "7x²-3x",
        "5x²-x+1",
        "5x²-x"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "合格量=(4x²+3x)+(2x²-5x)-(x²-x)=5x²-x。",
        "derivedChoice": "5x²-x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先加兩時段，再減去報廢量的每一項。",
      "steps": [
        "合格量=(4x²+3x)+(2x²-5x)-(x²-x)=5x²-x。"
      ],
      "optionAnalysis": [
        {
          "choice": "5x²-3x",
          "truth": false,
          "reason": "x 項少加回 x。"
        },
        {
          "choice": "7x²-3x",
          "truth": false,
          "reason": "二次項未減報廢。"
        },
        {
          "choice": "5x²-x+1",
          "truth": false,
          "reason": "平白增加常數。"
        },
        {
          "choice": "5x²-x",
          "truth": true,
          "reason": "5x²-x 正確。"
        }
      ],
      "misconceptionTarget": "減去報廢多項式時未逐項變號",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "所有式子均表示件數。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「生產與損耗合併」且四個選項以同一表示層級作答；逐項重算後只有「5x²-x」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：生產與損耗合併，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「合格」要求總產量減報廢，情境中的三種量決定加減順序。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s003-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ffd0dd8b877800f46d317901c1b7cac3f56957aac66cf58943b9a51bb82e373e"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s003-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 4x²-3x+2+5x²+x-7，並說明哪些項互為同類項。",
      "requiredWork": [
        "分類 x²、x、常數。",
        "合併係數。"
      ],
      "standardSolution": [
        "x² 項：4x²+5x²=9x²。",
        "x 項：-3x+x=-2x。",
        "常數：2-7=-5。",
        "結果 9x²-2x-5。"
      ],
      "alternativeMethods": [
        "可用三欄直式對齊 x²、x、常數後相加。"
      ],
      "reasoningSteps": [
        "x² 項：4x²+5x²=9x²。",
        "x 項：-3x+x=-2x。",
        "常數：2-7=-5。",
        "結果 9x²-2x-5。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "分類說明與 9x²-2x-5 全對。"
        },
        {
          "score": 2,
          "criteria": "只一組係數計算錯。"
        },
        {
          "score": 1,
          "criteria": "知道同次方合併但結果多處錯。"
        },
        {
          "score": 0,
          "criteria": "把不同次方合併或無作答。"
        }
      ],
      "partialCreditRules": [
        "結果順序不同但等價不扣分。"
      ],
      "followThroughPolicy": "若早期誤抄一個係數，後續同類項分類完全正確，可給 1至2 分。",
      "unitAndNotationRules": "不涉及單位；-2x 可寫成 (-2)x。",
      "answerOnlyPolicy": "只寫正確化簡式但不說明分類，最高 2 分。",
      "commonErrorTargets": [
        "判斷同類項並只合併係數"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立分三組重算得 9、-2、-5。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9dafac6ec78aff6c7570e275ab47f260f3a560ee4eff991d2d350c612bc9f56b"
    },
    {
      "questionId": "u10-s003-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "like-terms-combine",
      "skillSlot": "s003",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (m-2)x²+(3-m)x²+4x 化簡後的二次項係數為 5，判斷是否存在 m，並說明。",
      "requiredWork": [
        "先合併二次項係數。",
        "判斷方程是否可能。"
      ],
      "standardSolution": [
        "二次項係數為 (m-2)+(3-m)=1。",
        "它與 m 無關，不可能等於 5，所以不存在 m。"
      ],
      "alternativeMethods": [
        "可任取兩個不同 m 代入觀察係數固定為 1，但仍須用代數說明一般性。"
      ],
      "reasoningSteps": [
        "二次項係數為 (m-2)+(3-m)=1。",
        "它與 m 無關，不可能等於 5，所以不存在 m。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "化簡係數為 1 並明確判定無解。"
        },
        {
          "score": 2,
          "criteria": "結論無解正確但化簡說明不完整。"
        },
        {
          "score": 1,
          "criteria": "寫出係數式但計算錯或未下結論。"
        },
        {
          "score": 0,
          "criteria": "任意給一個 m。"
        }
      ],
      "partialCreditRules": [
        "只用單一代入例子不能證明全部，最高 1 分。"
      ],
      "followThroughPolicy": "若係數常數算成其他非 5 的固定值但能說明 m 抵消，給 1 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫「無解」無理由，最高 1 分。",
      "commonErrorTargets": [
        "判斷同類項並只合併係數"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立合併 m-m-2+3=1，條件矛盾。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0f453675b39410c078efd3f14b3a38760f722fe7412b12935804ff165c572e45"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s003-v001-review",
      "questionId": "u10-s003-v001",
      "questionContentSha256": "cc0ad5477cf29a6c8992dac25e80cfa70946b954bdd9da59d708e02b801d2b24",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "4x 與 3x 是同類項，相加時只把係數 4 和 3 相加，x 的指數仍是 1；正確結果是 7x。",
      "derivedAnswer": "同類項相加只加係數，字母與指數保持不變",
      "storedAnswer": "同類項相加只加係數，字母與指數保持不變",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「同類項相加只加係數，字母與指數保持不變」。其餘選項逐項檢查：「係數應相乘，所以應得到 12x」誤用係數乘法；「常數項沒有一起相加」提到不存在的常數項；「x 與 x 相加時應把指數加成 2」誤用同底數乘法規則",
        "undefinedSymbol": "題幹中的符號與用語均已在本技能講義定義；所求為「診斷同類項合併錯誤」。",
        "unitConflict": "純數或代數表示，不涉及不相容單位。",
        "roundingConflict": "全部資料為精確值，不涉及四捨五入或近似造成的第二答案。",
        "domainBoundary": "只使用國中教育會考範圍與該技能已定義內容。",
        "alternateReading": "常見錯誤只會導向錯誤選項，不形成第二個正解。"
      },
      "difficultyReason": "基礎：不只計算結果，還要指出指數不應改變的原因。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用項、係數、字母部分與同類項定義。",
      "languageCheck": "錯誤結果與診斷目標均明示，四個選項互斥。",
      "reviewerDecision": "pass",
      "reviewerNote": "本題已由和 U03 完全相同的直接化簡，改為錯誤診斷；唯一正確為第三項。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8d34f5d0b6d826aa75f43dd710850d20643abe10a37d60827c856464ab060e28"
    },
    {
      "reviewId": "u10-s003-v002-review",
      "questionId": "u10-s003-v002",
      "questionContentSha256": "c70eaa78e3ee561079d6bf6b4e8ebf16f350eedd5b60e1f3df73fd18775c2acf",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "4x² 與 -7x² 的文字部分都為 x²。",
      "derivedAnswer": "4x² 與 -7x²",
      "storedAnswer": "4x² 與 -7x²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x 與 2y：未知數不同。；x 與 x²：指數不同。；3ab 與 3a：第二項缺 b。；4x² 與 -7x²：文字部分相同，正確。",
        "undefinedSymbol": "題幹用語均在「同類項合併」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只看係數或部分文字」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：辨認同類項，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一組是同類項？」獨立重算：4x² 與 -7x² 的文字部分都為 x²。 正解「4x² 與 -7x²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "36e01b082d3c7698d36c886a681cd96364e395bda09fc1c86f035cf0f9effc69"
    },
    {
      "reviewId": "u10-s003-v003-review",
      "questionId": "u10-s003-v003",
      "questionContentSha256": "4cd8ac514837bbf3e049b27f1a19f7a0c28fb9cd0844eba47847be60b3a1ede0",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "6a 與 3a 可合併為 9a；−2b 沒有其他 b 項，常數 5 也保留，所以得到 9a−2b+5。",
      "derivedAnswer": "9a−2b+5",
      "storedAnswer": "9a−2b+5",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「9a−2b+5」。其餘選項逐項檢查：「7a+b+5」混合不同字母項；「9ab+5」誤成乘法；「9a−2b」漏掉常數",
        "undefinedSymbol": "題幹中的符號與用語均已在本技能講義定義；所求為「辨認並合併同類項」。",
        "unitConflict": "純數或代數表示，不涉及不相容單位。",
        "roundingConflict": "全部資料為精確值，不涉及四捨五入或近似造成的第二答案。",
        "domainBoundary": "只使用國中教育會考範圍與該技能已定義內容。",
        "alternateReading": "常見錯誤只會導向錯誤選項，不形成第二個正解。"
      },
      "difficultyReason": "基礎：需分辨 a 項、b 項及常數項，避免跨類合併。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只使用多項式項與同類項定義。",
      "languageCheck": "式子與所求結果完整，使用一致代數符號。",
      "reviewerDecision": "pass",
      "reviewerNote": "本題改為多類項分類，與 U03 的單一字母直接合併題區隔。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "153f61004fe4f5872b5320e2da72d051a4bfaf8777a3641c9b2dfa7efc87fc3e"
    },
    {
      "reviewId": "u10-s003-v004-review",
      "questionId": "u10-s003-v004",
      "questionContentSha256": "e2ddaeb7b230bf371723d22561e9c5fc31e6f0e667728edea647a421206fb60d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x² 項係數 5+2=7；x 項係數 -3+1=-2。",
      "derivedAnswer": "7x²-2x",
      "storedAnswer": "7x²-2x",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：7x²-4x：x 項符號錯。；7x²-2x：分組合併得 7x²-2x。；3x²-2x：二次項係數相減錯。；7x³-2x：把二次項相加變三次。",
        "undefinedSymbol": "題幹用語均在「同類項合併」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「不同次方分組或負係數計算錯誤」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：多組同類項合併，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 5x²-3x+2x²+x。」獨立重算：x² 項係數 5+2=7；x 項係數 -3+1=-2。 正解「7x²-2x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a4eacc986836cceff896f39054a1e740f23601f58d8fa32f3e5f234ebbf709f4"
    },
    {
      "reviewId": "u10-s003-v005-review",
      "questionId": "u10-s003-v005",
      "questionContentSha256": "ae22ce01b1ded23ff77fdb6248479168f6a13e390f4914cbe3fa1d226c8dc026",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "yx=xy，所以係數 2-5+4=1，結果 xy。",
      "derivedAnswer": "xy",
      "storedAnswer": "xy",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：11xy：把 -5 當 +5。；-7xy：漏加 4xy。；xy+4：把 4 誤看常數。；xy：係數為 1，正確。",
        "undefinedSymbol": "題幹用語均在「同類項合併」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未辨認 xy=yx 或符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：雙文字同類項，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 2xy-5yx+4xy。」獨立重算：yx=xy，所以係數 2-5+4=1，結果 xy。 正解「xy」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "5596117fdc1a5c16ce9f6ce7d9ab7c902f2ed1947538b1426c8d97d79e998227"
    },
    {
      "reviewId": "u10-s003-v006-review",
      "questionId": "u10-s003-v006",
      "questionContentSha256": "e3858c2ae8802751cd8b510c228edb286d395e3a5906220003a54480d02072e2",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(3+k)x²=10x²，所以 3+k=10，k=7。",
      "derivedAnswer": "7",
      "storedAnswer": "7",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：7：7 正確。；3：只抄已有係數。；5：10-3 計算錯。；13：把係數相加結果當 k。",
        "undefinedSymbol": "題幹用語均在「同類項合併」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未建立係數等式」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：由合併結果求係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 3x²+kx²=10x²，則 k 為何？」獨立重算：(3+k)x²=10x²，所以 3+k=10，k=7。 正解「7」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "73f36d633e1ded525421f9c714c155759edac94970cd863d454bce386d389417"
    },
    {
      "reviewId": "u10-s003-v007-review",
      "questionId": "u10-s003-v007",
      "questionContentSha256": "9603cd06efdc7389d7d5361c5696699f1028dc4e4ef3526cd5c20dc8328636c9",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "去括號得 4x-2x+3+x=3x+3。",
      "derivedAnswer": "3x+3",
      "storedAnswer": "3x+3",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3x-3：常數符號錯。；3x+3：3x+3 正確。；7x-3：把 -2x 當 +2x 且常數錯。；7x+3：把括號全變正。",
        "undefinedSymbol": "題幹用語均在「同類項合併」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「括號前負號未逐項分配」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：去括號後合併，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 4x-(2x-3)+x。」獨立重算：去括號得 4x-2x+3+x=3x+3。 正解「3x+3」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "74299c0ee541aa4744010a1764cdeaa8a0986d21b035a68afd087ccf7bbdefba"
    },
    {
      "reviewId": "u10-s003-v008-review",
      "questionId": "u10-s003-v008",
      "questionContentSha256": "1b5652884696adfcc4d22b0b5d19e7736d9f492c4bed870f832bd9e6c87b8464",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "展開得 2x²-2x+3x-x²-1=x²+x-1。",
      "derivedAnswer": "x²+x-1",
      "storedAnswer": "x²+x-1",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-5x-1：x 項係數錯。；3x²+x+1：二次項與常數符號錯。；x²+x-1：先分配，再依次方合併。；x²+x+1：末項 -1 誤為 +1。",
        "undefinedSymbol": "題幹用語均在「同類項合併」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「多重括號展開後分類錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：分配與合併綜合，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 2(x²-x)+3x-(x²+1)。」獨立重算：展開得 2x²-2x+3x-x²-1=x²+x-1。 正解「x²+x-1」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "3ec95176449a3f84e6292fe1e2e4be3aa8024f56301ef7bec694ee7fe354266b"
    },
    {
      "reviewId": "u10-s003-v009-review",
      "questionId": "u10-s003-v009",
      "questionContentSha256": "63ac11d05b31e3bfea9dfdad5207da386853e6c227d549aba8c583308d3d4a27",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "係數和 (m-1)+(2-m)=1，無論 m 為何都只得到 x，不可能是 5x。",
      "derivedAnswer": "無解",
      "storedAnswer": "無解",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：無解：無解正確。；-4：代入猜值得到錯誤。；4：同樣無法改變係數 1。；任意數：雖係數固定，但不能任意滿足 5x。",
        "undefinedSymbol": "題幹用語均在「同類項合併」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未先化簡參數即猜答案」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：判斷恆等與矛盾，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (m-1)x+(2-m)x 化簡後為 5x，則 m 為何？」獨立重算：係數和 (m-1)+(2-m)=1，無論 m 為何都只得到 x，不可能是 5x。 正解「無解」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "fe2c95a37be0a752fc2b3489be39a74e7dd10861047994071491211d95fb036f"
    },
    {
      "reviewId": "u10-s003-v010-review",
      "questionId": "u10-s003-v010",
      "questionContentSha256": "9693641131f0aebc3bba930b605351bacf892a375c697c4ecb339e1f71ef43a1",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(3x+5)+(2x-1)=5x+4。",
      "derivedAnswer": "5x+4 件",
      "storedAnswer": "5x+4 件",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x+6 件：錯把兩式相減。；5x+4 件：5x+4 正確。；6x+4 件：x 係數相乘。；5x+6 件：常數把 -1 當 +1。",
        "undefinedSymbol": "題幹用語均在「同類項合併」講義定義。",
        "unitConflict": "各項與答案單位均為件。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「情境加總時常數符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：合併兩日數量，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「兩天共」決定使用加法，件數語意要求合併同類量。",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「商店第一天賣出 (3x+5) 件，第二天賣出 (2x-1) 件。兩天共賣出多少件？」獨立重算：(3x+5)+(2x-1)=5x+4。 正解「5x+4 件」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "c6ffc8cb4a9bedc6ba3aff749c760d53953f1d1b6c210ba9f72dc7afcf8308ae"
    },
    {
      "reviewId": "u10-s003-v011-review",
      "questionId": "u10-s003-v011",
      "questionContentSha256": "1b81c231ae5a1f29867b98b817d34703e1c4f98d1d648191b84a2c2a244d4a93",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "三段相加：(2+1+3)x+(1+4-2)=6x+3。",
      "derivedAnswer": "6x+3 公尺",
      "storedAnswer": "6x+3 公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：5x+3 公尺：漏加一段 x。；6x+7 公尺：常數符號錯。；6x+3 公尺：6x+3 正確。；5x+7 公尺：係數與常數皆錯。",
        "undefinedSymbol": "題幹用語均在「同類項合併」講義定義。",
        "unitConflict": "所有長度同為公尺，可相加。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "各段長需為正；題目只要求代數總長。",
        "alternateReading": "常見誤讀「多段合併時漏項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：總長模型化簡，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "步道分段決定三個式子必須相加，且答案須保留公尺。",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一條步道由三段組成，長度分別為 (2x+1)、(x+4)、(3x-2) 公尺。總長為何？」獨立重算：三段相加：(2+1+3)x+(1+4-2)=6x+3。 正解「6x+3 公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "4583ee57d923d0c8d04510ca1960b183bcdafaef9e8adbc6d7648c26cdaedd2e"
    },
    {
      "reviewId": "u10-s003-v012-review",
      "questionId": "u10-s003-v012",
      "questionContentSha256": "ffd0dd8b877800f46d317901c1b7cac3f56957aac66cf58943b9a51bb82e373e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "合格量=(4x²+3x)+(2x²-5x)-(x²-x)=5x²-x。",
      "derivedAnswer": "5x²-x",
      "storedAnswer": "5x²-x",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：5x²-3x：x 項少加回 x。；7x²-3x：二次項未減報廢。；5x²-x+1：平白增加常數。；5x²-x：5x²-x 正確。",
        "undefinedSymbol": "題幹用語均在「同類項合併」講義定義。",
        "unitConflict": "所有式子均表示件數。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「減去報廢多項式時未逐項變號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：生產與損耗合併，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「合格」要求總產量減報廢，情境中的三種量決定加減順序。",
      "prerequisiteCheck": "使用先備技能：polynomial-evaluation；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「工廠上午產量為 4x²+3x，下午產量為 2x²-5x，報廢 x²-x 件。合格總產量為何？」獨立重算：合格量=(4x²+3x)+(2x²-5x)-(x²-x)=5x²-x。 正解「5x²-x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a317e9e42da8a1c58d9c74fc9e062c2080d063defba3276e86026e5e4b7645c1"
    }
  ],
  "drawingSpecs": []
};
