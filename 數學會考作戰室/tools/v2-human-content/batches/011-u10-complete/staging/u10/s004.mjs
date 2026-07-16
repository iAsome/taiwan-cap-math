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
      "零多項式沒有本課約定下的次數，不能硬寫 0 次。",
      "多項式次數必須從最後化簡式判定：先展開括號、合併同類項並刪除係數為零的項，再按降冪排列，最高非零項的指數才是次數；首項係數則是該項連同正負號的數字因數。含參數時，若要求恰為某次數，要讓所有更高次係數為零，同時確認目標次項係數非零。非零常數可視為零次，而所有項皆抵消的零多項式不能硬套為零次。"
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
        "answer": "4 次，首項係數 -3。",
        "why": "多項式已按降冪排列且沒有可合併項，所以最高非零項是 -3x⁴。次數讀指數四，首項係數則讀乘在 x⁴ 前且包含負號的 -3；兩種數值來自不同位置，不能互換。"
      },
      {
        "exampleId": "L2",
        "prompt": "判定 5x³-5x³+2x² 的次數。",
        "solutionSteps": [
          "三次項抵消，剩 2x²。"
        ],
        "answer": "2 次。",
        "why": "次數只能從化簡後的最高非零項判定。兩個三次項係數和為零，整項消失；剩下 2x² 的係數非零，因此最高指數降為二，而不能因原式曾出現 x³ 就答三次。"
      },
      {
        "exampleId": "L3",
        "prompt": "常數 -8 的次數。",
        "solutionSteps": [
          "-8=-8x⁰，且係數非零。"
        ],
        "answer": "0 次。",
        "why": "由 x⁰=1，可將任何非零常數寫成常數係數乘 x⁰；-8 的係數非零，所以最高非零指數就是零。這與零多項式所有係數皆為零、無法指定本課次數的情況不同。"
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
      },
      {
        "mistake": "只令高次項消失就判定為指定次數",
        "why": "下一個目標次項也可能同時因參數而消失",
        "correction": "列出高次係數等於零及目標次係數不等於零兩組條件。"
      }
    ],
    "selfCheck": [
      "我是否能判定單項式與多項式的次數？",
      "我是否能指出首項、首項係數及指定次項係數？",
      "我是否能處理最高次項抵消後次數下降的情況？",
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
    "contentSha256": "d6611c884016785fabe7b517db76b54a458a051f46f3823b686bc69c178c5747"
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
      "explanation": "次數看最高非零指數，不看係數大小。 原式已化簡且最高非零項為 -4x³，次數只讀未知數的最高指數三；係數負四的絕對值與共有三項都不是判準。",
      "steps": [
        "最高非零項是 -4x³，最高指數為 3。",
        "確認各項係數皆非零，且不需要再合併同類項。",
        "比較 x 的指數 3、1、0，最大值為 3，所以是三次多項式。"
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
      "misconceptionTarget": "把係數或項數當次數 把最高項係數的絕對值四或多項式的項數，誤當成多項式次數。",
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
      "contentSha256": "ee951c8becf436887541d5b1c2f186ecdf8dd42940e959bdab14a2771aa76c8e"
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
      "explanation": "首項係數包含首項前的數。 按降冪排列後，最先出現的最高次非零項是 5x²；首項係數是乘在 x² 前的數 5，而右上角的 2 是指數。",
      "steps": [
        "按降冪已排列，首項 5x² 的係數是 5。",
        "比較各項指數，確認二次項 5x² 是首項。",
        "將 5x² 分成係數 5 與文字部分 x²，讀出答案 5。"
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
      "misconceptionTarget": "混淆首項係數與指數 把首項的指數二當成首項係數，或改讀後面一次項省略的負一。",
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
      "contentSha256": "9b2878c451932be2cac3e2210ac9d94350a607e172b7ce997712a864367ff995"
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
      "explanation": "非零常數為 0 次多項式。 非零常數 -9 可寫成 -9x⁰，係數仍非零，因此其最高非零指數為 0；負九是係數值，不代表次數為負九。",
      "steps": [
        "-9=-9x⁰，最高非零指數是 0。",
        "用 x⁰=1 將 -9 改寫為 -9x⁰。",
        "最高且唯一的非零指數是 0，所以判定為零次多項式。"
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
      "misconceptionTarget": "認為常數沒有次數 認為常數式沒有出現 x 就沒有次數，或把常數值 -9 本身當作次數。",
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
      "contentSha256": "0d3d34083ab1e512ada9188a14737b69b07e80a978eae09774f060e623c1fe8f"
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
      "explanation": "先化簡再判定次數。 判定次數前須先合併同類項；3x⁴ 與 -3x⁴ 的係數和為零而消失，剩式最高非零項是 2x²，故次數降為二，不能沿用原式最高指數。",
      "steps": [
        "四次項抵消，剩 2x²-x，最高指數 2。",
        "先合併四次項，算得 (3-3)x⁴=0。",
        "刪去零項後比較 2x² 與 -x，最高指數為 2。"
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
      "misconceptionTarget": "未先合併最高次項 看到原式出現 x⁴ 就直接答四次，沒有檢查兩個四次項已完全抵消。",
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
      "contentSha256": "75887a6549260fe03440577cecfa067b6463b98e668f46cb746dc68530d78654"
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
      "explanation": "省略的係數連同負號為 -1。 最高次項是 -x⁵，省略的正數係數為 1，但項前負號屬於係數，所以可改寫成 (-1)x⁵，首項係數為 -1，符號不可省略。",
      "steps": [
        "-x⁵=-1x⁵，所以首項係數 -1。",
        "按最高指數五鎖定首項 -x⁵。",
        "補寫省略係數為 (-1)x⁵，連同符號讀出 -1。"
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
      "misconceptionTarget": "省略係數的符號判讀錯 只補上省略的係數一而忽略項前負號，或把指數五誤當係數。",
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
      "contentSha256": "9c6f19395ed8dc8560677388c4c43d8eba5439cd16e85f158e3134fb6a7a515e"
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
      "explanation": "最高次項係數必須為 0，下一項需非零。 要使最高次數恰為二，三次項必須消失，所以 a-2=0；解得 a=2 後，下一個二次項係數固定為 5 且非零，確保不是更低次。",
      "steps": [
        "要使三次項消失，a-2=0，所以 a=2。",
        "且二次項係數 5≠0。",
        "令三次項係數 a-2=0，解出 a=2。"
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
      "misconceptionTarget": "只看題目稱二次而未令高次係數為零 只看到式中有 5x² 就稱為二次式，沒有先讓更高的三次項係數變成零。",
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
      "contentSha256": "5214a128235070f7d2b173ac8dda8600d04ba68469ffd57bf4c0bc8058c75999"
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
      "explanation": "同時檢查最高項消失與下一項保留。 三次多項式要求四次項消失而三次項保留；先由 m+1=0 得 m=-1，再算 m-1=-2≠0，因此最高非零項確為三次。",
      "steps": [
        "三次要求四次係數 m+1=0，得 m=-1。",
        "此時三次係數 -2≠0。",
        "以 m=-1 回代兩個係數，得到四次係數 0、三次係數 -2。"
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
      "misconceptionTarget": "只令一個係數符合而未檢查下一項 只令四次係數為零就停止，沒有確認同一參數值下三次項係數仍非零。",
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
      "contentSha256": "c7f85deef8cc4d2ba437a90a251c7b91a3e1f8165679188bc12f09a67663097c"
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
      "explanation": "跨括號合併後再判定。 去除加法括號後，分散在兩括號中的 2x³ 與 -2x³ 仍是同類項並抵消；剩下 7x²-x+5，最高指數二、首項係數七。",
      "steps": [
        "三次項 2x³-2x³ 抵消，剩 7x²-x+5，所以 2 次且首項係數 7。",
        "展開加法括號並合併三次項，得到 0x³+7x²-x+5。",
        "刪除零項後鎖定 7x²，讀出二次且首項係數 7。"
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
      "misconceptionTarget": "未合併跨括號同類項 只在各括號內尋找最高次項，未跨括號合併互為相反數的三次項。",
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
      "contentSha256": "57f044ed217a220e02c599135f8c3db5d0ccf34c308ad663ddce50118ac77249"
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
      "explanation": "相同多項式的同次方係數相等。 同一多項式在相同次方的係數必須逐一相等，因此 a=3、b=-4、c=1；連同 b 的負號相加，3-4+1=0，三欄對應皆一致。",
      "steps": [
        "對應係數 a=3、b=-4、c=1，所以 a+b+c=0。",
        "依 x²、x、常數三欄逐一比較，得到 a=3、b=-4、c=1。",
        "代入 a+b+c 計算 3+(-4)+1=0。"
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
      "misconceptionTarget": "係數比較忽略負號 比較係數時把 -4 抄成正四，或未按二次、一次、常數的順序對應 a、b、c。",
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
      "contentSha256": "87b4f98e47d5d67f42d2ad52e3e9a17ee0af12ff434fd99e498b6fd5cfbf66b5"
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
      "explanation": "情境名稱不改變多項式的首項判讀。 情境字母改為 t 仍用同一判準；最高次非零項是 -2t³，乘在 t³ 前的完整數值包含負號，所以係數是 -2。",
      "steps": [
        "最高次項是 -2t³，其係數為 -2。",
        "比較 t 的指數 3、2、0，先鎖定最高次項 -2t³。",
        "分離數字因數與文字部分，讀出首項係數 -2。"
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
      "misconceptionTarget": "把指數或較大數值當首項係數 以數值大小挑出 40 或 15，或把最高指數三當作最高次項係數。",
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
      "contentSha256": "a0339b43011c666cb2dca6e7e1511d3e0804dc5cbe2ebad50d04aeb943b6607a"
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
      "explanation": "面積單位不等於多項式次數；次數由 x 的最高指數決定。 平方公尺是面積 A 的物理單位，與代數次數不是同一概念；式中最高非零項 x² 的指數為二，所以模型是二次多項式。",
      "steps": [
        "最高非零項 x² 的指數是 2。",
        "忽略面積單位，僅比較多項式各項的 x 指數。",
        "最高非零指數是 x² 的 2，因此選二次多項式。"
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
      "misconceptionTarget": "把平方公尺或常數值當多項式次數 把題目中的三個項、常數九或平方公尺的平方字樣，誤當作多項式次數。",
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
      "contentSha256": "38ee2c4818f8bb328be41a96cc52bdee6cb5384ae372799f6a6303b2eb548a80"
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
      "explanation": "排列只改位置，不改符號。 原式按降冪重排為 -0.5n²+120n；搬移完整項時負號不變，最高次項是 -0.5n²，因此首項係數為 -0.5，而非原先排首的 120。",
      "steps": [
        "降冪排列為 -0.5n²+120n，首項係數 -0.5。",
        "將完整二次項 -0.5n² 移到一次項 120n 前。",
        "由最高次項分離係數，保留負號讀出 -0.5。"
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
      "misconceptionTarget": "未降冪或漏首項負號 按原書寫順序把 120 當首項係數，或重排二次項時遺失負號而答正 0.5。",
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
      "contentSha256": "b97b24d16d78a64a9c04a0765879c89ccc7a2e543b080e78492043a83d7edc4d"
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
        "最高非零項為 -3x²，所以次數 2、首項係數 -3。",
        "判定順序不能由原式直接讀四次：先算 5x⁴+(-5x⁴)=0，刪除零項後再按降冪觀察。剩式的最高非零指數為二，且首項 -3x² 的係數包含負號，所以答案為二次、-3。"
      ],
      "alternativeMethods": [
        "可先代數化簡，再以係數表 (0,0,-3,1,-8) 判定。"
      ],
      "reasoningSteps": [
        "四次項抵消，P(x)=-3x²+x-8。",
        "最高非零項為 -3x²，所以次數 2、首項係數 -3。",
        "刪去係數為零的四次項後，按降冪重新排列並連同符號讀取 -3x²。"
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
        "未先合併相反的四次項，看到 x⁴ 就直接判為四次多項式。",
        "次數判為二後卻把首項係數寫成正三，遺失 -3x² 的負號。"
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
      "contentSha256": "f85c1c9fa0b91bc629ad3396e5e6dfed7cff93939395de79db5cf8e6ed5c8f2c"
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
        "此時四次項係數 a-1=-3≠0，所以 P=-3x⁴+3x²，確為四次。",
        "四次多項式需同時滿足五次係數為零與四次係數非零。a=-2 使 a+2=0，而 a-1=-3；代回後 P(x)=0x⁵-3x⁴+3x²，刪去零項後最高指數確為四。"
      ],
      "alternativeMethods": [
        "可用「最高項消失、下一項保留」的係數條件一次判斷。"
      ],
      "reasoningSteps": [
        "a+2=0 得 a=-2。",
        "此時四次項係數 a-1=-3≠0，所以 P=-3x⁴+3x²，確為四次。",
        "將 a=-2 完整代回兩個含參數的係數，刪除五次零項後確認四次項仍保留。"
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
        "誤令四次係數 a-1=0，反而讓目標四次項消失。",
        "只解 a+2=0 而未檢查 a-1 是否非零，沒有完成『恰為四次』的驗證。"
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
      "contentSha256": "4b6200b6b93a984fefcc6861d62c74f3872044c5faf93d4533f51a73d0c9b0e5"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s004-v001-review",
      "questionId": "u10-s004-v001",
      "questionContentSha256": "ee951c8becf436887541d5b1c2f186ecdf8dd42940e959bdab14a2771aa76c8e",
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
      "contentSha256": "7c89b4ddc037b48964671aaa64814ecf800493cebddfbbcd5cd2c6bbac58b5c7"
    },
    {
      "reviewId": "u10-s004-v002-review",
      "questionId": "u10-s004-v002",
      "questionContentSha256": "9b2878c451932be2cac3e2210ac9d94350a607e172b7ce997712a864367ff995",
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
      "contentSha256": "724fdc894011076a55fdc815de20820727e5e0ea2c80dd359257f06b3fcc5746"
    },
    {
      "reviewId": "u10-s004-v003-review",
      "questionId": "u10-s004-v003",
      "questionContentSha256": "0d3d34083ab1e512ada9188a14737b69b07e80a978eae09774f060e623c1fe8f",
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
      "contentSha256": "6bdd2c0065081431bd0abd036949ca2b32dc677e1af8ff8ffaabff692cff56f6"
    },
    {
      "reviewId": "u10-s004-v004-review",
      "questionId": "u10-s004-v004",
      "questionContentSha256": "75887a6549260fe03440577cecfa067b6463b98e668f46cb746dc68530d78654",
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
      "contentSha256": "0aef62746fc72ad3759fc4c934913407cbf462693420f021538962bd5c3222eb"
    },
    {
      "reviewId": "u10-s004-v005-review",
      "questionId": "u10-s004-v005",
      "questionContentSha256": "9c6f19395ed8dc8560677388c4c43d8eba5439cd16e85f158e3134fb6a7a515e",
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
      "contentSha256": "9408829d57ed7eb3ec92c02852a7f75c5780d1134081203273d9d3aea4e57a9b"
    },
    {
      "reviewId": "u10-s004-v006-review",
      "questionId": "u10-s004-v006",
      "questionContentSha256": "5214a128235070f7d2b173ac8dda8600d04ba68469ffd57bf4c0bc8058c75999",
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
      "contentSha256": "9ea8397e0afbf7bc459e8b5cbc0f802b62ea99960903fe2ba8cab30e752a6159"
    },
    {
      "reviewId": "u10-s004-v007-review",
      "questionId": "u10-s004-v007",
      "questionContentSha256": "c7f85deef8cc4d2ba437a90a251c7b91a3e1f8165679188bc12f09a67663097c",
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
      "contentSha256": "e206f0126dc5b78991fb8731f4a9576c59fe9f0580f1feabb7a50199f8aaefaa"
    },
    {
      "reviewId": "u10-s004-v008-review",
      "questionId": "u10-s004-v008",
      "questionContentSha256": "57f044ed217a220e02c599135f8c3db5d0ccf34c308ad663ddce50118ac77249",
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
      "contentSha256": "b16ff4e88ae5d2ab2d0afa50ab56690e396ba6e458d1e720272557ed09f74d90"
    },
    {
      "reviewId": "u10-s004-v009-review",
      "questionId": "u10-s004-v009",
      "questionContentSha256": "87b4f98e47d5d67f42d2ad52e3e9a17ee0af12ff434fd99e498b6fd5cfbf66b5",
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
      "contentSha256": "87719f8ee49c407b0ee00a084f74cdbf5948617f6a726908fb43921d19cac7c5"
    },
    {
      "reviewId": "u10-s004-v010-review",
      "questionId": "u10-s004-v010",
      "questionContentSha256": "a0339b43011c666cb2dca6e7e1511d3e0804dc5cbe2ebad50d04aeb943b6607a",
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
      "contentSha256": "a90d0d1f2825ab322d777070b64299e2f9a145ca8530e4a7a9bba66e2428b273"
    },
    {
      "reviewId": "u10-s004-v011-review",
      "questionId": "u10-s004-v011",
      "questionContentSha256": "38ee2c4818f8bb328be41a96cc52bdee6cb5384ae372799f6a6303b2eb548a80",
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
      "contentSha256": "4b0fc57c6f0e598c6667d26aaaa2e8254e8c56c2b25b3d6a0e9632bba2911d73"
    },
    {
      "reviewId": "u10-s004-v012-review",
      "questionId": "u10-s004-v012",
      "questionContentSha256": "b97b24d16d78a64a9c04a0765879c89ccc7a2e543b080e78492043a83d7edc4d",
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
      "contentSha256": "4ddd96cb262e100c7ad1e3f001ccbbd3acd2ff15719cc66863d8517910cabfef"
    }
  ],
  "drawingSpecs": []
};
