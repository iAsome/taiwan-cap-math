// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s004-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-concepts",
    "skillId": "polynomial-degree-coefficient",
    "lockedTitle": "多項式次數與係數符號",
    "title": "多項式次數與係數符號：先化簡再找最高非零次方",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能判定單項式與多項式的次數。",
      "能指出首項、首項係數及指定次項係數。",
      "能處理最高次項抵消後次數下降的情況。"
    ],
    "prerequisites": [
      "like-terms-combine"
    ],
    "prerequisiteBridge": "先備技能 like-terms-combine 已建立下一步所需概念；本節專注於化簡後判定次數、首項係數與各項符號。",
    "glossary": [
      {
        "term": "次數",
        "definition": "多項式化簡後，非零項中未知數指數的最大值。"
      },
      {
        "term": "首項",
        "definition": "按降冪排列後最前面的非零項。"
      },
      {
        "term": "首項係數",
        "definition": "首項的數字係數。"
      },
      {
        "term": "零多項式",
        "definition": "所有係數皆為 0；本課不指定其次數。"
      }
    ],
    "notation": [
      {
        "symbol": "−4x³+2x−1",
        "meaning": "三次多項式，首項係數 -4。"
      },
      {
        "symbol": "0x⁴+3x²",
        "meaning": "化簡後為 3x²，次數是 2。"
      }
    ],
    "conceptNarrative": [
      "判定次數前一定要合併同類項，因為最高次項可能抵消。",
      "係數的正負號屬於係數；-x⁵ 的首項係數是 -1。",
      "常數多項式如 7 的次數是 0。",
      "零多項式沒有本課約定下的次數，不能硬寫 0 次。"
    ],
    "formalDefinitions": [
      {
        "name": "多項式次數",
        "statement": "化簡後最高非零次項的指數。"
      }
    ],
    "formulas": [
      {
        "formula": "deg P=n",
        "conditions": [
          "P 的最高非零項為 aₙxⁿ 且 aₙ≠0"
        ],
        "meaning": "只有化簡後才能判定。"
      }
    ],
    "nonApplicableCases": [
      "未合併前不能只看表面最高指數。",
      "0x⁵ 不構成五次項。",
      "不能把項數當成次數。",
      "零多項式不套用一般最高次項定義。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "展開必要括號並合併同類項。",
        "check": "完成此步後，確認內容仍符合「化簡後判定次數、首項係數與各項符號」。"
      },
      {
        "step": 2,
        "instruction": "刪除係數為 0 的項。",
        "check": "完成此步後，確認內容仍符合「化簡後判定次數、首項係數與各項符號」。"
      },
      {
        "step": 3,
        "instruction": "按指數由大到小排列。",
        "check": "完成此步後，確認內容仍符合「化簡後判定次數、首項係數與各項符號」。"
      },
      {
        "step": 4,
        "instruction": "找最高非零指數。",
        "check": "完成此步後，確認內容仍符合「化簡後判定次數、首項係數與各項符號」。"
      },
      {
        "step": 5,
        "instruction": "連同符號讀出所問係數。",
        "check": "完成此步後，確認內容仍符合「化簡後判定次數、首項係數與各項符號」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "判定 -3x⁴+2x-7 的次數與首項係數。",
        "solutionSteps": [
          "最高非零指數 4；首項 -3x⁴。"
        ],
        "answer": "4 次，首項係數 -3。"
      },
      {
        "exampleId": "L2",
        "prompt": "判定 5x³-5x³+2x² 的次數。",
        "solutionSteps": [
          "三次項抵消，剩 2x²。"
        ],
        "answer": "2 次。"
      },
      {
        "exampleId": "L3",
        "prompt": "常數 -8 的次數。",
        "solutionSteps": [
          "-8=-8x⁰，且係數非零。"
        ],
        "answer": "0 次。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "看到 x⁵ 就直接判五次",
        "why": "未檢查係數是否為 0 或是否抵消",
        "correction": "先完整化簡。"
      },
      {
        "mistake": "把 -x³ 的係數寫成 1",
        "why": "忽略負號",
        "correction": "係數是 -1。"
      },
      {
        "mistake": "把三項式稱三次式",
        "why": "混淆項數與次數",
        "correction": "次數看最高指數。"
      }
    ],
    "selfCheck": [
      "我是否能能判定單項式與多項式的次數？",
      "我是否能能指出首項、首項係數及指定次項係數？",
      "我是否能能處理最高次項抵消後次數下降的情況？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "次數判定前先化簡。",
      "最高非零指數就是次數。",
      "係數包含正負號。",
      "非零常數是 0 次，零多項式不指定次數。"
    ],
    "connections": {
      "previous": "上一技能 同類項合併 提供本節所需工具。",
      "next": [
        "下一節把對齊同類項的觀念用於兩個多項式的加減。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s004-v001",
        "u10-s004-v002",
        "u10-s004-v003",
        "u10-s004-v004",
        "u10-s004-v005",
        "u10-s004-v006",
        "u10-s004-v007",
        "u10-s004-v008",
        "u10-s004-v009",
        "u10-s004-v010",
        "u10-s004-v011",
        "u10-s004-v012"
      ],
      "constructedResponseIds": [
        "u10-s004-cr001",
        "u10-s004-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「多項式次數與係數符號：先化簡再找最高非零次方」：定義、3 個例題、錯誤推理與下一技能銜接均針對 polynomial-degree-coefficient；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "97a41aed40a91e689d52726d040c6bb278344e7ec8c09912480dcce13d23c774"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s004-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "多項式 -4x³+2x-1 的次數為何？",
      "givenConditions": [],
      "target": "判斷基本次數",
      "choices": [
        "1",
        "2",
        "4",
        "3"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "最高非零項是 -4x³，最高指數為 3。",
        "derivedChoice": "3",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "次數看最高非零指數，不看係數大小。",
      "steps": [
        "最高非零項是 -4x³，最高指數為 3。"
      ],
      "optionAnalysis": [
        {
          "choice": "1",
          "truth": false,
          "reason": "只看常數或項數。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "看到 2 誤判。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "把係數 4 當次數。"
        },
        {
          "choice": "3",
          "truth": true,
          "reason": "3 正確。"
        }
      ],
      "misconceptionTarget": "把係數或項數當次數",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「判斷基本次數」且四個選項以同一表示層級作答；逐項重算後只有「3」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：判斷基本次數，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s004-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a769592245306e68c9c2640a84190d11a839ec734f1d7cc0a9f286219012aebb"
    },
    {
      "questionId": "u10-s004-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "多項式 5x²-x+7 的首項係數為何？",
      "givenConditions": [],
      "target": "辨認首項係數",
      "choices": [
        "5",
        "2",
        "-1",
        "7"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "按降冪已排列，首項 5x² 的係數是 5。",
        "derivedChoice": "5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "首項係數包含首項前的數。",
      "steps": [
        "按降冪已排列，首項 5x² 的係數是 5。"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": true,
          "reason": "5 正確。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "2 是指數。"
        },
        {
          "choice": "-1",
          "truth": false,
          "reason": "-1 是一次項係數。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "7 是常數。"
        }
      ],
      "misconceptionTarget": "混淆首項係數與指數",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認首項係數」且四個選項以同一表示層級作答；逐項重算後只有「5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：辨認首項係數，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s004-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f25842971fcd74c64527c515aad1adb45209be1cb8f4c3cb8a480998804aa9bc"
    },
    {
      "questionId": "u10-s004-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "非零常數多項式 -9 的次數為何？",
      "givenConditions": [],
      "target": "判斷常數次數",
      "choices": [
        "-9",
        "0",
        "1",
        "無法判定"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "-9=-9x⁰，最高非零指數是 0。",
        "derivedChoice": "0",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "非零常數為 0 次多項式。",
      "steps": [
        "-9=-9x⁰，最高非零指數是 0。"
      ],
      "optionAnalysis": [
        {
          "choice": "-9",
          "truth": false,
          "reason": "係數不是次數。"
        },
        {
          "choice": "0",
          "truth": true,
          "reason": "0 正確。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "常數不是一次。"
        },
        {
          "choice": "無法判定",
          "truth": false,
          "reason": "只有零多項式另作處理。"
        }
      ],
      "misconceptionTarget": "認為常數沒有次數",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「判斷常數次數」且四個選項以同一表示層級作答；逐項重算後只有「0」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：判斷常數次數，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s004-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "89e7485c968c1e92c8948b875eeea7717f247f268a90d7abf602186808a7ea1f"
    },
    {
      "questionId": "u10-s004-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 3x⁴-3x⁴+2x²-x 後，其次數為何？",
      "givenConditions": [],
      "target": "抵消後判次數",
      "choices": [
        "4",
        "3",
        "2",
        "1"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "四次項抵消，剩 2x²-x，最高指數 2。",
        "derivedChoice": "2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先化簡再判定次數。",
      "steps": [
        "四次項抵消，剩 2x²-x，最高指數 2。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "只看原式最高指數。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "原式沒有非零三次項。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "2 正確。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "忽略二次項。"
        }
      ],
      "misconceptionTarget": "未先合併最高次項",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「抵消後判次數」且四個選項以同一表示層級作答；逐項重算後只有「2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：抵消後判次數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s004-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bda9e75fab531ccfd4c405ac169dbda9ee2b5fa330956e498cb5c0d52b09054e"
    },
    {
      "questionId": "u10-s004-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "多項式 -x⁵+4x²-3 的首項係數是多少？",
      "givenConditions": [],
      "target": "辨認省略的首項係數",
      "choices": [
        "-1",
        "1",
        "5",
        "4"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "-x⁵=-1x⁵，所以首項係數 -1。",
        "derivedChoice": "-1",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "省略的係數連同負號為 -1。",
      "steps": [
        "-x⁵=-1x⁵，所以首項係數 -1。"
      ],
      "optionAnalysis": [
        {
          "choice": "-1",
          "truth": true,
          "reason": "-1 正確。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "忽略負號。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "5 是指數。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "4 是二次項係數。"
        }
      ],
      "misconceptionTarget": "省略係數的符號判讀錯",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認省略的首項係數」且四個選項以同一表示層級作答；逐項重算後只有「-1」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：辨認省略的首項係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s004-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bf47937cf9482c536b76e9cc7a38264705867bfbca2cf4a58007382e9bb40a78"
    },
    {
      "questionId": "u10-s004-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 P(x)=(a-2)x³+5x²-1 是二次多項式，則 a 為何？",
      "givenConditions": [],
      "target": "由次數條件求參數",
      "choices": [
        "0",
        "2",
        "1",
        "3"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "要使三次項消失，a-2=0，所以 a=2；且二次項係數 5≠0。",
        "derivedChoice": "2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "最高次項係數必須為 0，下一項需非零。",
      "steps": [
        "要使三次項消失，a-2=0，所以 a=2。",
        "且二次項係數 5≠0。"
      ],
      "optionAnalysis": [
        {
          "choice": "0",
          "truth": false,
          "reason": "三次係數 -2。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "a=2 正確。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "三次係數 -1。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "三次係數 1。"
        }
      ],
      "misconceptionTarget": "只看題目稱二次而未令高次係數為零",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由次數條件求參數」且四個選項以同一表示層級作答；逐項重算後只有「2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：由次數條件求參數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s004-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "726a59d5944df70342c59fb094ed14ee0e23a168d6c5044551068b76026314ff"
    },
    {
      "questionId": "u10-s004-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "P(x)=(m+1)x⁴+(m-1)x³+2。若 P 為三次多項式，m 為何？",
      "givenConditions": [],
      "target": "精確控制多項式次數",
      "choices": [
        "0",
        "1",
        "-1",
        "不存在"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "三次要求四次係數 m+1=0，得 m=-1；此時三次係數 -2≠0。",
        "derivedChoice": "-1",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "同時檢查最高項消失與下一項保留。",
      "steps": [
        "三次要求四次係數 m+1=0，得 m=-1。",
        "此時三次係數 -2≠0。"
      ],
      "optionAnalysis": [
        {
          "choice": "0",
          "truth": false,
          "reason": "四次項不消失。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "四次項不消失且三次項消失。"
        },
        {
          "choice": "-1",
          "truth": true,
          "reason": "m=-1 符合。"
        },
        {
          "choice": "不存在",
          "truth": false,
          "reason": "其實存在 m=-1。"
        }
      ],
      "misconceptionTarget": "只令一個係數符合而未檢查下一項",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「精確控制多項式次數」且四個選項以同一表示層級作答；逐項重算後只有「-1」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：精確控制多項式次數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s004-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d0adedeb15d6441b64faf08ff1c6c2592ab35ce130d2ad8d79c125a073d1dfa9"
    },
    {
      "questionId": "u10-s004-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "多項式 (2x³-x)+(−2x³+7x²)+5 的次數與首項係數為何？",
      "givenConditions": [],
      "target": "跨式化簡後讀次數",
      "choices": [
        "3 次，2",
        "3 次，-2",
        "2 次，5",
        "2 次，7"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "三次項 2x³-2x³ 抵消，剩 7x²-x+5，所以 2 次且首項係數 7。",
        "derivedChoice": "2 次，7",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "跨括號合併後再判定。",
      "steps": [
        "三次項 2x³-2x³ 抵消，剩 7x²-x+5，所以 2 次且首項係數 7。"
      ],
      "optionAnalysis": [
        {
          "choice": "3 次，2",
          "truth": false,
          "reason": "忽略抵消。"
        },
        {
          "choice": "3 次，-2",
          "truth": false,
          "reason": "只看第二括號。"
        },
        {
          "choice": "2 次，5",
          "truth": false,
          "reason": "次數對但係數錯。"
        },
        {
          "choice": "2 次，7",
          "truth": true,
          "reason": "2 次、7 正確。"
        }
      ],
      "misconceptionTarget": "未合併跨括號同類項",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「跨式化簡後讀次數」且四個選項以同一表示層級作答；逐項重算後只有「2 次，7」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：跨式化簡後讀次數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s004-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8590a005fad5f2b11214b872681a20e530fa9de10b3c2536774136a4fca0acb5"
    },
    {
      "questionId": "u10-s004-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 ax²+bx+c 與 3x²-4x+1 是同一多項式，則 a+b+c 為何？",
      "givenConditions": [],
      "target": "由多項式相等比較係數",
      "choices": [
        "-2",
        "0",
        "2",
        "8"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "對應係數 a=3、b=-4、c=1，所以 a+b+c=0。",
        "derivedChoice": "0",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "相同多項式的同次方係數相等。",
      "steps": [
        "對應係數 a=3、b=-4、c=1，所以 a+b+c=0。"
      ],
      "optionAnalysis": [
        {
          "choice": "-2",
          "truth": false,
          "reason": "符號或加法錯。"
        },
        {
          "choice": "0",
          "truth": true,
          "reason": "0 正確。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "把 -4 當 +4 的部分錯誤。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "使用係數絕對值相加。"
        }
      ],
      "misconceptionTarget": "係數比較忽略負號",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由多項式相等比較係數」且四個選項以同一表示層級作答；逐項重算後只有「0」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由多項式相等比較係數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s004-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4ed370fd18bee594269d2b4f5578e6bb37e686f422e0fe17f3ae06ba9ce9669b"
    },
    {
      "questionId": "u10-s004-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一模型 S(t)=-2t³+15t²+40 中，最高次項係數為何？",
      "givenConditions": [],
      "target": "讀取模型首項係數",
      "choices": [
        "3",
        "15",
        "-2",
        "40"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "最高次項是 -2t³，其係數為 -2。",
        "derivedChoice": "-2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "情境名稱不改變多項式的首項判讀。",
      "steps": [
        "最高次項是 -2t³，其係數為 -2。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3 是指數。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "15 是二次項係數。"
        },
        {
          "choice": "-2",
          "truth": true,
          "reason": "-2 正確。"
        },
        {
          "choice": "40",
          "truth": false,
          "reason": "40 是常數。"
        }
      ],
      "misconceptionTarget": "把指數或較大數值當首項係數",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "係數單位依 S 與 t 的單位而定；本題只問數值。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「讀取模型首項係數」且四個選項以同一表示層級作答；逐項重算後只有「-2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：讀取模型首項係數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "模型語境要求在 t 的各次項中辨認支配最高次變化的係數。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s004-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9964fe4a2cf54b2e2deb45455bc44d0c664f07349dab7881cc3139ef8a3fa4a7"
    },
    {
      "questionId": "u10-s004-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某正方形擴建後面積 A(x)=x²+6x+9 平方公尺。這個面積模型是幾次多項式？",
      "givenConditions": [],
      "target": "情境模型判次數",
      "choices": [
        "1 次",
        "3 次",
        "9 次",
        "2 次"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "最高非零項 x² 的指數是 2。",
        "derivedChoice": "2 次",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "面積單位不等於多項式次數；次數由 x 的最高指數決定。",
      "steps": [
        "最高非零項 x² 的指數是 2。"
      ],
      "optionAnalysis": [
        {
          "choice": "1 次",
          "truth": false,
          "reason": "忽略平方項。"
        },
        {
          "choice": "3 次",
          "truth": false,
          "reason": "把項數當次數。"
        },
        {
          "choice": "9 次",
          "truth": false,
          "reason": "把常數 9 當次數。"
        },
        {
          "choice": "2 次",
          "truth": true,
          "reason": "2 次正確。"
        }
      ],
      "misconceptionTarget": "把平方公尺或常數值當多項式次數",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "A 的單位為平方公尺；多項式次數無單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「情境模型判次數」且四個選項以同一表示層級作答；逐項重算後只有「2 次」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：情境模型判次數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "面積情境容易使學生把「平方單位」與「二次多項式」混為同一判準，必須正確區分。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s004-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "17ff8db2d308eb6108f92c7cf60e8812597077debae98d659c355bdeb4619a50"
    },
    {
      "questionId": "u10-s004-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "營收模型 R(n)=120n-0.5n²。按降冪排列後的首項係數為何？",
      "givenConditions": [],
      "target": "非標準順序模型讀首項",
      "choices": [
        "-0.5",
        "0.5",
        "120",
        "2"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "降冪排列為 -0.5n²+120n，首項係數 -0.5。",
        "derivedChoice": "-0.5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "排列只改位置，不改符號。",
      "steps": [
        "降冪排列為 -0.5n²+120n，首項係數 -0.5。"
      ],
      "optionAnalysis": [
        {
          "choice": "-0.5",
          "truth": true,
          "reason": "-0.5 正確。"
        },
        {
          "choice": "0.5",
          "truth": false,
          "reason": "忽略負號。"
        },
        {
          "choice": "120",
          "truth": false,
          "reason": "120 是一次項係數。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "2 是指數。"
        }
      ],
      "misconceptionTarget": "未降冪或漏首項負號",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "係數單位由營收與 n 定義決定；本題只判數值。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「非標準順序模型讀首項」且四個選項以同一表示層級作答；逐項重算後只有「-0.5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：非標準順序模型讀首項，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "營收模型的項原本未按降冪排列，必須重排才能辨認首項係數。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s004-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2e0e0bad3a3c84d7dde1ad55702642e77e07ead9567c7a60afca177a651daf95"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s004-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "判定 P(x)=5x⁴-5x⁴-3x²+x-8 的次數與首項係數，並說明判定順序。",
      "requiredWork": [
        "先合併最高次同類項。",
        "按降冪讀取最高非零項。"
      ],
      "standardSolution": [
        "四次項抵消，P(x)=-3x²+x-8。",
        "最高非零項為 -3x²，所以次數 2、首項係數 -3。"
      ],
      "alternativeMethods": [
        "可先代數化簡，再以係數表 (0,0,-3,1,-8) 判定。"
      ],
      "reasoningSteps": [
        "四次項抵消，P(x)=-3x²+x-8。",
        "最高非零項為 -3x²，所以次數 2、首項係數 -3。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "化簡、次數 2、首項係數 -3 均完整。"
        },
        {
          "score": 2,
          "criteria": "答案正確但未說明先化簡。"
        },
        {
          "score": 1,
          "criteria": "知道四次項抵消但次數或係數其一錯。"
        },
        {
          "score": 0,
          "criteria": "直接答 4 次且無修正。"
        }
      ],
      "partialCreditRules": [
        "排列順序不同不扣分。"
      ],
      "followThroughPolicy": "若化簡時只誤常數，不影響次數與首項係數，可給 2 分。",
      "unitAndNotationRules": "不涉及單位；係數需含負號。",
      "answerOnlyPolicy": "只寫「2 次，-3」最高 2 分。",
      "commonErrorTargets": [
        "化簡後判定次數、首項係數與各項符號"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立確認最高非零指數 2。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1d4328374a3ecadbcbea52bd4e92572b51003e49cea23c0d1be7a0074152cf8b"
    },
    {
      "questionId": "u10-s004-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-degree-coefficient",
      "skillSlot": "s004",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "P(x)=(a+2)x⁵+(a-1)x⁴+3x²。求使 P 為四次多項式的 a，並驗證。",
      "requiredWork": [
        "令五次項係數為 0。",
        "確認四次項係數不為 0。"
      ],
      "standardSolution": [
        "a+2=0 得 a=-2。",
        "此時四次項係數 a-1=-3≠0，所以 P=-3x⁴+3x²，確為四次。"
      ],
      "alternativeMethods": [
        "可用「最高項消失、下一項保留」的係數條件一次判斷。"
      ],
      "reasoningSteps": [
        "a+2=0 得 a=-2。",
        "此時四次項係數 a-1=-3≠0，所以 P=-3x⁴+3x²，確為四次。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "a=-2 且檢查 -3≠0。"
        },
        {
          "score": 2,
          "criteria": "a 正確但未檢查四次項。"
        },
        {
          "score": 1,
          "criteria": "列 a+2=0 但解錯，或只談條件。"
        },
        {
          "score": 0,
          "criteria": "令 a-1=0 或無有效方法。"
        }
      ],
      "partialCreditRules": [
        "若解出 -2 後把 -3 誤寫 3，但仍確認非零，扣 1 分。"
      ],
      "followThroughPolicy": "早期解 a 錯但後續正確檢查自己所得值，最多 1 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫 a=-2，最高 2 分。",
      "commonErrorTargets": [
        "化簡後判定次數、首項係數與各項符號"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立代回得到 -3x⁴+3x²。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "38156ad6fd7ab3634c9809be88be30ac919a0f96b0a80bc37ad254ae2ef7678e"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s004-v001-review",
      "questionId": "u10-s004-v001",
      "questionContentSha256": "a769592245306e68c9c2640a84190d11a839ec734f1d7cc0a9f286219012aebb",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "最高非零項是 -4x³，最高指數為 3。",
      "derivedAnswer": "3",
      "storedAnswer": "3",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：1：只看常數或項數。；2：看到 2 誤判。；4：把係數 4 當次數。；3：3 正確。",
        "undefinedSymbol": "題幹用語均在「多項式次數與係數符號」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把係數或項數當次數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：判斷基本次數，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「多項式 -4x³+2x-1 的次數為何？」獨立重算：最高非零項是 -4x³，最高指數為 3。 正解「3」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "07145e4585f154a081993df421decbe34fa83c0f96f05d20655175a1a221d252"
    },
    {
      "reviewId": "u10-s004-v002-review",
      "questionId": "u10-s004-v002",
      "questionContentSha256": "f25842971fcd74c64527c515aad1adb45209be1cb8f4c3cb8a480998804aa9bc",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "按降冪已排列，首項 5x² 的係數是 5。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：5：5 正確。；2：2 是指數。；-1：-1 是一次項係數。；7：7 是常數。",
        "undefinedSymbol": "題幹用語均在「多項式次數與係數符號」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「混淆首項係數與指數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：辨認首項係數，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「多項式 5x²-x+7 的首項係數為何？」獨立重算：按降冪已排列，首項 5x² 的係數是 5。 正解「5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "77bcbd90da90c2a1af3c9e41b4abbf0a36a48328b84e3bd68ddad9222fad8f11"
    },
    {
      "reviewId": "u10-s004-v003-review",
      "questionId": "u10-s004-v003",
      "questionContentSha256": "89e7485c968c1e92c8948b875eeea7717f247f268a90d7abf602186808a7ea1f",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "-9=-9x⁰，最高非零指數是 0。",
      "derivedAnswer": "0",
      "storedAnswer": "0",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-9：係數不是次數。；0：0 正確。；1：常數不是一次。；無法判定：只有零多項式另作處理。",
        "undefinedSymbol": "題幹用語均在「多項式次數與係數符號」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「認為常數沒有次數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：判斷常數次數，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「非零常數多項式 -9 的次數為何？」獨立重算：-9=-9x⁰，最高非零指數是 0。 正解「0」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "e9a8a972671f27ee4174395d509955c3ff5844050ab7cea148521bceff7927cd"
    },
    {
      "reviewId": "u10-s004-v004-review",
      "questionId": "u10-s004-v004",
      "questionContentSha256": "bda9e75fab531ccfd4c405ac169dbda9ee2b5fa330956e498cb5c0d52b09054e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "四次項抵消，剩 2x²-x，最高指數 2。",
      "derivedAnswer": "2",
      "storedAnswer": "2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4：只看原式最高指數。；3：原式沒有非零三次項。；2：2 正確。；1：忽略二次項。",
        "undefinedSymbol": "題幹用語均在「多項式次數與係數符號」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未先合併最高次項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：抵消後判次數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 3x⁴-3x⁴+2x²-x 後，其次數為何？」獨立重算：四次項抵消，剩 2x²-x，最高指數 2。 正解「2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "aaa7de401e8f0ceede489c15482cff8129b4621ee20a98478b1c914f6813300b"
    },
    {
      "reviewId": "u10-s004-v005-review",
      "questionId": "u10-s004-v005",
      "questionContentSha256": "bf47937cf9482c536b76e9cc7a38264705867bfbca2cf4a58007382e9bb40a78",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "-x⁵=-1x⁵，所以首項係數 -1。",
      "derivedAnswer": "-1",
      "storedAnswer": "-1",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-1：-1 正確。；1：忽略負號。；5：5 是指數。；4：4 是二次項係數。",
        "undefinedSymbol": "題幹用語均在「多項式次數與係數符號」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「省略係數的符號判讀錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：辨認省略的首項係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「多項式 -x⁵+4x²-3 的首項係數是多少？」獨立重算：-x⁵=-1x⁵，所以首項係數 -1。 正解「-1」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "c7f6171cae93ac19451acd25a6e9be14cce737909aa826c52953ff9ac3e26a1b"
    },
    {
      "reviewId": "u10-s004-v006-review",
      "questionId": "u10-s004-v006",
      "questionContentSha256": "726a59d5944df70342c59fb094ed14ee0e23a168d6c5044551068b76026314ff",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "要使三次項消失，a-2=0，所以 a=2；且二次項係數 5≠0。",
      "derivedAnswer": "2",
      "storedAnswer": "2",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：0：三次係數 -2。；2：a=2 正確。；1：三次係數 -1。；3：三次係數 1。",
        "undefinedSymbol": "題幹用語均在「多項式次數與係數符號」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只看題目稱二次而未令高次係數為零」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：由次數條件求參數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 P(x)=(a-2)x³+5x²-1 是二次多項式，則 a 為何？」獨立重算：要使三次項消失，a-2=0，所以 a=2；且二次項係數 5≠0。 正解「2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "ca52b7cf944c7d21b11097f755560be50ae84af55d0f96dd5b2cbc59385ef1e1"
    },
    {
      "reviewId": "u10-s004-v007-review",
      "questionId": "u10-s004-v007",
      "questionContentSha256": "d0adedeb15d6441b64faf08ff1c6c2592ab35ce130d2ad8d79c125a073d1dfa9",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "三次要求四次係數 m+1=0，得 m=-1；此時三次係數 -2≠0。",
      "derivedAnswer": "-1",
      "storedAnswer": "-1",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：0：四次項不消失。；1：四次項不消失且三次項消失。；-1：m=-1 符合。；不存在：其實存在 m=-1。",
        "undefinedSymbol": "題幹用語均在「多項式次數與係數符號」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只令一個係數符合而未檢查下一項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：精確控制多項式次數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「P(x)=(m+1)x⁴+(m-1)x³+2。若 P 為三次多項式，m 為何？」獨立重算：三次要求四次係數 m+1=0，得 m=-1；此時三次係數 -2≠0。 正解「-1」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "915013a41ec06681ebb5b314304056fb24ec8d33b5f4beaa9f93e81be7075df1"
    },
    {
      "reviewId": "u10-s004-v008-review",
      "questionId": "u10-s004-v008",
      "questionContentSha256": "8590a005fad5f2b11214b872681a20e530fa9de10b3c2536774136a4fca0acb5",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "三次項 2x³-2x³ 抵消，剩 7x²-x+5，所以 2 次且首項係數 7。",
      "derivedAnswer": "2 次，7",
      "storedAnswer": "2 次，7",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3 次，2：忽略抵消。；3 次，-2：只看第二括號。；2 次，5：次數對但係數錯。；2 次，7：2 次、7 正確。",
        "undefinedSymbol": "題幹用語均在「多項式次數與係數符號」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未合併跨括號同類項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：跨式化簡後讀次數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「多項式 (2x³-x)+(−2x³+7x²)+5 的次數與首項係數為何？」獨立重算：三次項 2x³-2x³ 抵消，剩 7x²-x+5，所以 2 次且首項係數 7。 正解「2 次，7」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "f7f68cb7198c216a8e5080747e9e0a821821bb3693f4a89e54a44028e8143c26"
    },
    {
      "reviewId": "u10-s004-v009-review",
      "questionId": "u10-s004-v009",
      "questionContentSha256": "4ed370fd18bee594269d2b4f5578e6bb37e686f422e0fe17f3ae06ba9ce9669b",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "對應係數 a=3、b=-4、c=1，所以 a+b+c=0。",
      "derivedAnswer": "0",
      "storedAnswer": "0",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-2：符號或加法錯。；0：0 正確。；2：把 -4 當 +4 的部分錯誤。；8：使用係數絕對值相加。",
        "undefinedSymbol": "題幹用語均在「多項式次數與係數符號」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「係數比較忽略負號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由多項式相等比較係數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 ax²+bx+c 與 3x²-4x+1 是同一多項式，則 a+b+c 為何？」獨立重算：對應係數 a=3、b=-4、c=1，所以 a+b+c=0。 正解「0」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a09c7ddc7b7d58e049f4a3741d148eead78ad53dc02b5c4865429985cd74dceb"
    },
    {
      "reviewId": "u10-s004-v010-review",
      "questionId": "u10-s004-v010",
      "questionContentSha256": "9964fe4a2cf54b2e2deb45455bc44d0c664f07349dab7881cc3139ef8a3fa4a7",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "最高次項是 -2t³，其係數為 -2。",
      "derivedAnswer": "-2",
      "storedAnswer": "-2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3：3 是指數。；15：15 是二次項係數。；-2：-2 正確。；40：40 是常數。",
        "undefinedSymbol": "題幹用語均在「多項式次數與係數符號」講義定義。",
        "unitConflict": "係數單位依 S 與 t 的單位而定；本題只問數值。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把指數或較大數值當首項係數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：讀取模型首項係數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "模型語境要求在 t 的各次項中辨認支配最高次變化的係數。",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一模型 S(t)=-2t³+15t²+40 中，最高次項係數為何？」獨立重算：最高次項是 -2t³，其係數為 -2。 正解「-2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "c60e026f6431caecfe01d25919a5d54c11ed4896c462c211345bccf63922f6b2"
    },
    {
      "reviewId": "u10-s004-v011-review",
      "questionId": "u10-s004-v011",
      "questionContentSha256": "17ff8db2d308eb6108f92c7cf60e8812597077debae98d659c355bdeb4619a50",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "最高非零項 x² 的指數是 2。",
      "derivedAnswer": "2 次",
      "storedAnswer": "2 次",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：1 次：忽略平方項。；3 次：把項數當次數。；9 次：把常數 9 當次數。；2 次：2 次正確。",
        "undefinedSymbol": "題幹用語均在「多項式次數與係數符號」講義定義。",
        "unitConflict": "A 的單位為平方公尺；多項式次數無單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把平方公尺或常數值當多項式次數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：情境模型判次數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "面積情境容易使學生把「平方單位」與「二次多項式」混為同一判準，必須正確區分。",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某正方形擴建後面積 A(x)=x²+6x+9 平方公尺。這個面積模型是幾次多項式？」獨立重算：最高非零項 x² 的指數是 2。 正解「2 次」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a50c15294109d642947540cd21e70b7aa748c97f07047114ef82117843126846"
    },
    {
      "reviewId": "u10-s004-v012-review",
      "questionId": "u10-s004-v012",
      "questionContentSha256": "2e0e0bad3a3c84d7dde1ad55702642e77e07ead9567c7a60afca177a651daf95",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "降冪排列為 -0.5n²+120n，首項係數 -0.5。",
      "derivedAnswer": "-0.5",
      "storedAnswer": "-0.5",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-0.5：-0.5 正確。；0.5：忽略負號。；120：120 是一次項係數。；2：2 是指數。",
        "undefinedSymbol": "題幹用語均在「多項式次數與係數符號」講義定義。",
        "unitConflict": "係數單位由營收與 n 定義決定；本題只判數值。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未降冪或漏首項負號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：非標準順序模型讀首項，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "營收模型的項原本未按降冪排列，必須重排才能辨認首項係數。",
      "prerequisiteCheck": "使用先備技能：like-terms-combine；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「營收模型 R(n)=120n-0.5n²。按降冪排列後的首項係數為何？」獨立重算：降冪排列為 -0.5n²+120n，首項係數 -0.5。 正解「-0.5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "33323ece150ad9c5c2215e01e0d64c085f4532e39f57dc811d4f90429565585b"
    }
  ],
  "drawingSpecs": []
};
