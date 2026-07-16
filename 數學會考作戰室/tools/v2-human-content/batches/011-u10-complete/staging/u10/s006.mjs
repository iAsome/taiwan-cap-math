// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s006-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-operations",
    "skillId": "monomial-multiply",
    "lockedTitle": "單項式乘法",
    "title": "單項式乘法：係數相乘，同底數指數相加",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能處理正負係數與分數係數的乘法。",
      "能對每個同底數未知數使用指數相加。",
      "能分辨乘法與同類項加法的規則。"
    ],
    "prerequisites": [
      "polynomial-add-subtract"
    ],
    "prerequisiteBridge": "先備技能 polynomial-add-subtract 已建立下一步所需概念；本節專注於係數相乘並使用同底數指數相加。",
    "glossary": [
      {
        "term": "單項式",
        "definition": "數與未知數非負整數次方的乘積。"
      },
      {
        "term": "同底數冪相乘",
        "definition": "底數相同時保留底數並把指數相加。"
      },
      {
        "term": "總次數",
        "definition": "多個未知數單項式中各指數的和。"
      }
    ],
    "notation": [
      {
        "symbol": "(3x²)(−2x³)",
        "meaning": "係數 3×(−2)，x 的指數 2+3。"
      },
      {
        "symbol": "x=x¹",
        "meaning": "未標指數時指數為 1。"
      }
    ],
    "conceptNarrative": [
      "單項式相乘可拆成三個互不干擾的工作：先依有理數乘法決定正負並相乘係數，再把相同文字的因數集中，最後使用同底數冪相乘時指數相加。沒有明寫指數的文字視為一次方；不同文字如 x、y 必須各自整理，不能把所有指數混加。完成後以係數與每種文字指數逐項核對。",
      "整個單項式平方時，括號內的係數與每個文字因數都要平方。例如 (-2x²y)² 中負號平方後變正，係數變四，x 指數二乘外指數二成四，y 指數一乘二成二；之後若再與其他單項式相乘，才使用同底數指數相加。",
      "總次數是化簡後單項式中所有文字指數的總和，不包含數字係數。情境題則先依數量關係建立乘法，例如總重量等於個數乘單重；最後要保留題目所問量的單位，面積乘純計數後仍是面積單位。"
    ],
    "formalDefinitions": [
      {
        "name": "單項式乘法",
        "statement": "係數乘係數；每個同底數文字的指數相加。"
      }
    ],
    "formulas": [
      {
        "formula": "(axᵐ)(bxⁿ)=abxᵐ⁺ⁿ",
        "conditions": [
          "m、n 為非負整數"
        ],
        "meaning": "同底數冪乘法。"
      }
    ],
    "nonApplicableCases": [
      "x²+x³ 不是乘法，不能寫 x⁵。",
      "x²·y³ 底數不同，不能合成單一冪。",
      "係數為負時不能漏負號。",
      "0 乘任何單項式仍為 0。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先判斷結果正負。",
        "check": "完成此步後，確認內容仍符合「係數相乘並使用同底數指數相加」。"
      },
      {
        "step": 2,
        "instruction": "相乘所有數字係數。",
        "check": "完成此步後，確認內容仍符合「係數相乘並使用同底數指數相加」。"
      },
      {
        "step": 3,
        "instruction": "按未知數種類分類。",
        "check": "完成此步後，確認內容仍符合「係數相乘並使用同底數指數相加」。"
      },
      {
        "step": 4,
        "instruction": "同底數指數相加。",
        "check": "完成此步後，確認內容仍符合「係數相乘並使用同底數指數相加」。"
      },
      {
        "step": 5,
        "instruction": "整理標準次序並檢查總次數。",
        "check": "完成此步後，確認內容仍符合「係數相乘並使用同底數指數相加」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "計算 (4x²)(-3x)。",
        "solutionSteps": [
          "係數 4×(-3)=-12。",
          "x 指數 2+1=3。"
        ],
        "answer": "-12x³。",
        "why": "係數乘法與同底數冪分開處理可避免把四與負三相加，或把指數二與一相乘；最後只有一個負因數，所以答案必須保留負號。"
      },
      {
        "exampleId": "L2",
        "prompt": "計算 (-2a²b)(5ab³)。",
        "solutionSteps": [
          "係數為 -10。",
          "a 指數 2+1=3，b 指數 1+3=4。"
        ],
        "answer": "-10a³b⁴。",
        "why": "a、b 是不同底數，須分別累加各自指數；把所有指數合在一起會失去文字結構。代入 a=b=1 時兩式都等於負十，可核對係數符號。"
      },
      {
        "exampleId": "L3",
        "prompt": "計算 (1/2 x³)(8x²)。",
        "solutionSteps": [
          "分數係數二分之一乘八為四。",
          "x 指數 3+2=5。"
        ],
        "answer": "4x⁵。",
        "why": "分數係數仍使用一般有理數乘法，不會改變文字冪規則；先得到正四，再將同底數的五個 x 因數整理成 x 五次方即可。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把 x²·x³ 寫成 x⁶",
        "why": "誤把指數相乘",
        "correction": "同底數相乘要指數相加。"
      },
      {
        "mistake": "只乘係數未處理文字",
        "why": "漏掉同底數冪法則",
        "correction": "每種未知數都要整理。"
      },
      {
        "mistake": "負負得負",
        "why": "符號法則錯誤",
        "correction": "兩個負因數相乘為正。"
      },
      {
        "mistake": "把不同底數 x²y³ 合併成單一五次方文字",
        "why": "總次數與單項式寫法混淆",
        "correction": "保留 x²y³；只有求總次數時才計算 2+3。"
      }
    ],
    "selfCheck": [
      "我是否能處理正負係數與分數係數的乘法？",
      "我是否能對每個同底數未知數使用指數相加？",
      "我是否能分辨乘法與同類項加法的規則？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "係數相乘並先判符號。",
      "同底數指數相加。",
      "不同底數分別保留。",
      "加法與乘法法則不可混用。"
    ],
    "connections": {
      "previous": "上一技能 多項式加減 提供本節所需工具。",
      "next": [
        "下一節將單項式分配給括號內每一項。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s006-v001",
        "u10-s006-v002",
        "u10-s006-v003",
        "u10-s006-v004",
        "u10-s006-v005",
        "u10-s006-v006",
        "u10-s006-v007",
        "u10-s006-v008",
        "u10-s006-v009",
        "u10-s006-v010",
        "u10-s006-v011",
        "u10-s006-v012"
      ],
      "constructedResponseIds": [
        "u10-s006-cr001",
        "u10-s006-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「單項式乘法：係數相乘，同底數指數相加」：定義、3 個例題、錯誤推理與下一技能銜接均針對 monomial-multiply；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "2f5f49fc6f360aea4ef0e60de4d7b74750435c1879c47a11cf4591356a41a0f8"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s006-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 (3x²)(-2x)。",
      "givenConditions": [],
      "target": "基本單項式相乘",
      "choices": [
        "-5x³",
        "-6x³",
        "6x²",
        "-6x²"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "係數 3×(-2)=-6；x 指數 2+1=3。",
        "derivedChoice": "-6x³",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "結果為 -6x³。 單項式相乘要把係數與同底數冪分開處理：三乘負二得負六，兩個 x 因數的指數二與一相加成三，所以唯一結果為負六 x 三次方。",
      "steps": [
        "係數 3×(-2)=-6。",
        "x 指數 2+1=3。",
        "合併係數與文字部分，寫成 -6x³ 並核對負號。"
      ],
      "optionAnalysis": [
        {
          "choice": "-5x³",
          "truth": false,
          "reason": "係數相加。"
        },
        {
          "choice": "-6x³",
          "truth": true,
          "reason": "-6x³ 正確。"
        },
        {
          "choice": "6x²",
          "truth": false,
          "reason": "指數未相加且符號錯。"
        },
        {
          "choice": "-6x²",
          "truth": false,
          "reason": "指數未相加。"
        }
      ],
      "misconceptionTarget": "係數符號或指數法則錯 把係數相加成負五，或把同底數指數保留為二。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「基本單項式相乘」且四個選項以同一表示層級作答；逐項重算後只有「-6x³」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：基本單項式相乘，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s006-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7592923487dd174841329e67d4e3575aa451366d8629f6d432975c7f48653126"
    },
    {
      "questionId": "u10-s006-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 (-4a)(-5a²)。",
      "givenConditions": [],
      "target": "兩負單項式相乘",
      "choices": [
        "-20a³",
        "9a³",
        "20a²",
        "20a³"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "負負得正，係數 20；a¹·a²=a³。",
        "derivedChoice": "20a³",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "結果 20a³。 兩個負係數相乘為正，四乘五得二十；a 的一次方與二次方相乘，指數一加二為三，因此結果是正二十 a 三次方。",
      "steps": [
        "負負得正，係數 20。",
        "a¹·a²=a³。",
        "合併正係數二十與 a³，選擇 20a³。"
      ],
      "optionAnalysis": [
        {
          "choice": "-20a³",
          "truth": false,
          "reason": "符號錯。"
        },
        {
          "choice": "9a³",
          "truth": false,
          "reason": "係數相加。"
        },
        {
          "choice": "20a²",
          "truth": false,
          "reason": "指數未相加。"
        },
        {
          "choice": "20a³",
          "truth": true,
          "reason": "20a³ 正確。"
        }
      ],
      "misconceptionTarget": "負負符號或指數相加錯 負負仍寫成負，或把 a 的指數相乘成二。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「兩負單項式相乘」且四個選項以同一表示層級作答；逐項重算後只有「20a³」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：兩負單項式相乘，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s006-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "34a23cde8cce923f294037c387a03112b5a1b8a5d973387f5dc1b82cdc9721a1"
    },
    {
      "questionId": "u10-s006-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 (2xy)(3x²y)。",
      "givenConditions": [],
      "target": "雙文字單項式乘法",
      "choices": [
        "5x³y²",
        "6x²y",
        "6x³y²",
        "6x³y"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "係數 6；x¹⁺²=x³；y¹⁺¹=y²。",
        "derivedChoice": "6x³y²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "每種未知數分別合併指數。 係數二乘三為六，x 的指數一加二為三，y 的指數一加一為二；不同文字分別整理後得到六 x 三次方 y 二次方。",
      "steps": [
        "係數 6。",
        "x¹⁺²=x³。",
        "y¹⁺¹=y²。"
      ],
      "optionAnalysis": [
        {
          "choice": "5x³y²",
          "truth": false,
          "reason": "係數誤加。"
        },
        {
          "choice": "6x²y",
          "truth": false,
          "reason": "指數未完整相加。"
        },
        {
          "choice": "6x³y²",
          "truth": true,
          "reason": "6x³y² 正確。"
        },
        {
          "choice": "6x³y",
          "truth": false,
          "reason": "漏掉 y 的指數。"
        }
      ],
      "misconceptionTarget": "多未知數時漏合併一種指數 只整理 x 而漏掉 y，或把兩種文字的指數混在一起。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「雙文字單項式乘法」且四個選項以同一表示層級作答；逐項重算後只有「6x³y²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：雙文字單項式乘法，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s006-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7d1b4df6508534442fe6db9bb4491ead6cc4028029ae91363c2c738692c3a9c7"
    },
    {
      "questionId": "u10-s006-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 (-1/2 x³)(8x²)。",
      "givenConditions": [],
      "target": "分數係數乘法",
      "choices": [
        "-4x⁵",
        "4x⁵",
        "-8x⁶",
        "-4x⁶"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "(-1/2)×8=-4，x³·x²=x⁵。",
        "derivedChoice": "-4x⁵",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "分數係數與指數分別運算。 先算分數係數，負二分之一乘八等於負四；再以同底數相乘法則把 x 的指數三與二相加為五，分數係數不會改變指數規則。",
      "steps": [
        "(-1/2)×8=-4，x³·x²=x⁵。",
        "計算 x³·x²=x⁵。",
        "合併得到 -4x⁵，並確認只有一個負因數。"
      ],
      "optionAnalysis": [
        {
          "choice": "-4x⁵",
          "truth": true,
          "reason": "-4x⁵ 正確。"
        },
        {
          "choice": "4x⁵",
          "truth": false,
          "reason": "漏負號。"
        },
        {
          "choice": "-8x⁶",
          "truth": false,
          "reason": "係數與指數都錯。"
        },
        {
          "choice": "-4x⁶",
          "truth": false,
          "reason": "指數誤相乘。"
        }
      ],
      "misconceptionTarget": "分數係數符號或指數錯 把二分之一與八算成負八，或把指數三乘二成六。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「分數係數乘法」且四個選項以同一表示層級作答；逐項重算後只有「-4x⁵」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：分數係數乘法，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s006-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e82b3ac30d07cde58a77ed1a9b89c26b91a6079aec20b43b255b8c1f675a8cb7"
    },
    {
      "questionId": "u10-s006-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 (3a²b³)(-2ab²)。",
      "givenConditions": [],
      "target": "多文字高次乘法",
      "choices": [
        "-6a²b⁵",
        "6a³b⁶",
        "-5a³b⁵",
        "-6a³b⁵"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "係數 -6；a²⁺¹=a³；b³⁺²=b⁵。",
        "derivedChoice": "-6a³b⁵",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "結果 -6a³b⁵。 三乘負二得到負六，a 的指數二加一為三，b 的指數三加二為五；每種底數各自相加，所以答案為負六 a 三次方 b 五次方。",
      "steps": [
        "係數 -6。",
        "a²⁺¹=a³。",
        "b³⁺²=b⁵。"
      ],
      "optionAnalysis": [
        {
          "choice": "-6a²b⁵",
          "truth": false,
          "reason": "a 指數未加。"
        },
        {
          "choice": "6a³b⁶",
          "truth": false,
          "reason": "符號與 b 指數錯。"
        },
        {
          "choice": "-5a³b⁵",
          "truth": false,
          "reason": "係數誤加。"
        },
        {
          "choice": "-6a³b⁵",
          "truth": true,
          "reason": "-6a³b⁵ 正確。"
        }
      ],
      "misconceptionTarget": "多底數指數相加不完整 把 a、b 的所有指數混加，或誤把負係數寫成正。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「多文字高次乘法」且四個選項以同一表示層級作答；逐項重算後只有「-6a³b⁵」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：多文字高次乘法，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s006-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1788c9434f7698ea5abbb98d6c289f578478bb4ce6a5d4bafb2c96d9de9803ed"
    },
    {
      "questionId": "u10-s006-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (mx²)(-3x³)=12x⁵，則 m 為何？",
      "givenConditions": [],
      "target": "反求單項式係數",
      "choices": [
        "4",
        "-4",
        "-9",
        "9"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "係數比較：-3m=12，所以 m=-4；指數 2+3=5 已符合。",
        "derivedChoice": "-4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "由乘積係數反求 m。 左式文字部分必為 x 五次方，已與右式吻合；只需比較係數，負三乘 m 等於十二，兩邊除以負三得到 m 等於負四。",
      "steps": [
        "係數比較：-3m=12，所以 m=-4。",
        "指數 2+3=5 已符合。",
        "代回 m=-4，係數 (-4)(-3)=12 完成驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "忽略負號。"
        },
        {
          "choice": "-4",
          "truth": true,
          "reason": "m=-4 正確。"
        },
        {
          "choice": "-9",
          "truth": false,
          "reason": "把係數相加。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "錯解 -3m=12。"
        }
      ],
      "misconceptionTarget": "由乘積係數反求時符號錯 由十二除三得到正四，忽略左式係數的負號。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「反求單項式係數」且四個選項以同一表示層級作答；逐項重算後只有「-4」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：反求單項式係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s006-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d80b0a6df58e19a4228638602e65f1101fe884d993e1bf8e7e4b8466cd828d18"
    },
    {
      "questionId": "u10-s006-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 [(-2x²y)²](3xy³)。",
      "givenConditions": [],
      "target": "冪與乘法綜合",
      "choices": [
        "12x⁵y⁵",
        "-12x⁵y⁵",
        "12x⁴y⁶",
        "6x⁵y⁵"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "先平方：(-2x²y)²=4x⁴y²；再乘 3xy³ 得 12x⁵y⁵。",
        "derivedChoice": "12x⁵y⁵",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "冪先作用於係數和每個文字，再做單項式乘法。 括號內整個單項式平方時，負二、x 二次方與 y 都要平方，得到正四 x 四次方 y 二次方；再乘三 x y 三次方，係數與各指數分別合併。",
      "steps": [
        "先平方：(-2x²y)²=4x⁴y²。",
        "再乘 3xy³ 得 12x⁵y⁵。",
        "合併係數 4×3 與指數 4+1、2+3，得 12x⁵y⁵。"
      ],
      "optionAnalysis": [
        {
          "choice": "12x⁵y⁵",
          "truth": true,
          "reason": "12x⁵y⁵ 正確。"
        },
        {
          "choice": "-12x⁵y⁵",
          "truth": false,
          "reason": "平方後仍保留負號。"
        },
        {
          "choice": "12x⁴y⁶",
          "truth": false,
          "reason": "指數分配錯。"
        },
        {
          "choice": "6x⁵y⁵",
          "truth": false,
          "reason": "係數未平方。"
        }
      ],
      "misconceptionTarget": "單項式平方未作用到所有因子 平方後保留負號，或只平方係數而漏乘文字指數。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「冪與乘法綜合」且四個選項以同一表示層級作答；逐項重算後只有「12x⁵y⁵」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：冪與乘法綜合，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s006-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1151097e84a80db41f4bc5ddf29d741290d87f8aad3632a44ee5746cd34097d9"
    },
    {
      "questionId": "u10-s006-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 A=-2x³y²，B=3x²y⁴，則 AB 的總次數為何？",
      "givenConditions": [],
      "target": "乘積的總次數",
      "choices": [
        "7",
        "9",
        "11",
        "13"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "AB=-6x⁵y⁶，總次數為 5+6=11。",
        "derivedChoice": "11",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先合併各文字指數，再相加求總次數。 相乘後 x 指數三加二為五，y 指數二加四為六，單項式總次數是所有文字指數相加，所以五加六等於十一；係數負六不計入次數。",
      "steps": [
        "AB=-6x⁵y⁶，總次數為 5+6=11。",
        "先分別求得 x⁵ 與 y⁶。",
        "以 5+6=11 判定乘積的總次數。"
      ],
      "optionAnalysis": [
        {
          "choice": "7",
          "truth": false,
          "reason": "只加原 A 次數。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "只取最大指數。"
        },
        {
          "choice": "11",
          "truth": true,
          "reason": "11 正確。"
        },
        {
          "choice": "13",
          "truth": false,
          "reason": "把所有係數也算入。"
        }
      ],
      "misconceptionTarget": "把總次數誤作最大指數 把係數或兩因式原次數加入，未依結果文字指數求總次數。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「乘積的總次數」且四個選項以同一表示層級作答；逐項重算後只有「11」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：乘積的總次數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s006-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0c97ce7b7e7a7ff10c2efc523d39de73e973de12d6f672c7209d27658b1b02fd"
    },
    {
      "questionId": "u10-s006-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "(2xᵐ)(3x⁴)=6x⁹，則 m 為何？",
      "givenConditions": [],
      "target": "由乘積指數反求",
      "choices": [
        "3",
        "4",
        "5",
        "13"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "同底數指數相加：m+4=9，所以 m=5。",
        "derivedChoice": "5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "比較乘積指數建立方程。 係數二乘三已是六，文字部分同底數相乘使指數 m 加四；要等於右式九次方，建立 m 加四等於九，解得 m 為五。",
      "steps": [
        "同底數指數相加：m+4=9，所以 m=5。",
        "列出 m+4=9。",
        "兩邊減四得 m=5，代回指數和為九。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "m+4=7。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "直接抄已知 4。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "5 正確。"
        },
        {
          "choice": "13",
          "truth": false,
          "reason": "把指數相加結果再加。"
        }
      ],
      "misconceptionTarget": "指數比較方程錯 把指數 m 與四相乘，或用九加四而得到十三。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由乘積指數反求」且四個選項以同一表示層級作答；逐項重算後只有「5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由乘積指數反求，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s006-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e17f8bb9c42782b934a3373c66c6d2aa3e682d621a12b863c6d0093d8af7cd65"
    },
    {
      "questionId": "u10-s006-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "正方形邊長為 3x² 公分，其面積為何？",
      "givenConditions": [],
      "target": "正方形面積",
      "choices": [
        "9x⁴ 平方公分",
        "6x² 平方公分",
        "9x² 平方公分",
        "3x⁴ 平方公分"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "面積=(3x²)²=9x⁴ 平方公分。",
        "derivedChoice": "9x⁴ 平方公分",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "邊長自乘，係數與 x² 都要平方。 正方形面積是邊長乘自己，因此整個三 x 二次方都要平方；三的平方為九，x 二次方的平方為 x 四次方，面積單位使用平方公分。",
      "steps": [
        "面積=(3x²)²=9x⁴ 平方公分。",
        "列面積 (3x²)(3x²)。",
        "相乘得 9x⁴，並標示平方公分。"
      ],
      "optionAnalysis": [
        {
          "choice": "9x⁴ 平方公分",
          "truth": true,
          "reason": "9x⁴ 正確。"
        },
        {
          "choice": "6x² 平方公分",
          "truth": false,
          "reason": "把面積當周長的一半。"
        },
        {
          "choice": "9x² 平方公分",
          "truth": false,
          "reason": "只平方係數。"
        },
        {
          "choice": "3x⁴ 平方公分",
          "truth": false,
          "reason": "只平方文字。"
        }
      ],
      "misconceptionTarget": "平方單項式時只平方一部分 只把 x 平方而漏掉係數三，或沿用長度單位公分。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公分×公分=平方公分。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「正方形面積」且四個選項以同一表示層級作答；逐項重算後只有「9x⁴ 平方公分」成立。",
      "boundaryAudit": "邊長 3x² 不為負；作實際正方形時需 x≠0。",
      "difficultyReason": "素養：正方形面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "正方形面積要求邊長乘自身，並將公分轉為平方公分。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s006-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9c5c712cc111264e83bb17ee65246e29fbb68a9b935df4174833948639bc9c8b"
    },
    {
      "questionId": "u10-s006-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一箱有 4x³ 個零件，每個零件重 2x² 公克。整箱零件總重為何？",
      "givenConditions": [],
      "target": "總重量乘法模型",
      "choices": [
        "6x⁵ 公克",
        "8x⁵ 公克",
        "8x⁶ 公克",
        "6x⁶ 公克"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "總重=(4x³)(2x²)=8x⁵ 公克。",
        "derivedChoice": "8x⁵ 公克",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "數量乘單件重量，係數相乘、指數相加。 總重量等於零件個數乘每個重量，四 x 三次方乘二 x 二次方時係數得八、指數三加二得五；個數消去後答案單位仍為公克。",
      "steps": [
        "總重=(4x³)(2x²)=8x⁵ 公克。",
        "列出 (4x³)(2x²)。",
        "整理為 8x⁵ 公克並檢查重量單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "6x⁵ 公克",
          "truth": false,
          "reason": "係數相加。"
        },
        {
          "choice": "8x⁵ 公克",
          "truth": true,
          "reason": "8x⁵ 正確。"
        },
        {
          "choice": "8x⁶ 公克",
          "truth": false,
          "reason": "指數相乘。"
        },
        {
          "choice": "6x⁶ 公克",
          "truth": false,
          "reason": "係數與指數皆錯。"
        }
      ],
      "misconceptionTarget": "把數量與單重相加 把個數與單重相加，或誤將指數三乘二成六。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "件數為無量綱計數，乘公克/件得到公克。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「總重量乘法模型」且四個選項以同一表示層級作答；逐項重算後只有「8x⁵ 公克」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：總重量乘法模型，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「每個」與「一箱有」決定總重使用乘法，且單位最後為公克。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s006-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7834bfe1a4cbc265a18329fb65461b7560dcd95831a6b4496263983eef5d309d"
    },
    {
      "questionId": "u10-s006-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "每個相同區域的面積為 5x² 平方公尺，共有 3x 個區域，總面積為何？",
      "givenConditions": [],
      "target": "多區總面積",
      "choices": [
        "8x³ 平方公尺",
        "15x² 平方公尺",
        "15x 平方公尺",
        "15x³ 平方公尺"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "總面積=(5x²)(3x)=15x³ 平方公尺。",
        "derivedChoice": "15x³ 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "區域數乘每區面積。 總面積是每區面積乘區域數，五 x 二次方乘三 x 得係數十五、x 指數二加一為三；區域數是純計數，結果仍用平方公尺。",
      "steps": [
        "總面積=(5x²)(3x)=15x³ 平方公尺。",
        "計算 (5x²)(3x)=15x³。",
        "保留總面積單位平方公尺。"
      ],
      "optionAnalysis": [
        {
          "choice": "8x³ 平方公尺",
          "truth": false,
          "reason": "係數相加。"
        },
        {
          "choice": "15x² 平方公尺",
          "truth": false,
          "reason": "漏加 x 指數。"
        },
        {
          "choice": "15x 平方公尺",
          "truth": false,
          "reason": "漏掉 x²。"
        },
        {
          "choice": "15x³ 平方公尺",
          "truth": true,
          "reason": "15x³ 正確。"
        }
      ],
      "misconceptionTarget": "忽略情境中的乘法關係 只乘係數而漏掉區域數中的 x，或把面積單位改成立方。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "3x 是區域數，乘平方公尺得到平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「多區總面積」且四個選項以同一表示層級作答；逐項重算後只有「15x³ 平方公尺」成立。",
      "boundaryAudit": "x 應為使 3x 為正整數的值；題目只求代數式。",
      "difficultyReason": "素養：多區總面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "區域數與單區面積決定相乘；題幹同時要求辨認面積單位。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s006-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "158fbdf1bbc53abb017d9c36a5c8147354d00535e7a5911fdcf1ae8b5bf64a88"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s006-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 (-3a²b)(4ab³)，並說明各係數與指數如何得到。",
      "requiredWork": [
        "係數相乘。",
        "a、b 指數分別相加。"
      ],
      "standardSolution": [
        "係數 (-3)×4=-12。",
        "a²·a=a³；b·b³=b⁴。",
        "結果 -12a³b⁴。",
        "將係數、a 因數與 b 因數分別整理後，負十二、a 三次方、b 四次方同時成立；代入 a=b=1 時左、右兩式皆為負十二，也可核對符號。"
      ],
      "alternativeMethods": [
        "可先把同底數的因數排在一起，寫成 -12·a²·a·b·b³，再化為 -12a³b⁴。"
      ],
      "reasoningSteps": [
        "係數 (-3)×4=-12。",
        "a²·a=a³；b·b³=b⁴。",
        "結果 -12a³b⁴。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "結果與係數/指數說明全對。"
        },
        {
          "score": 2,
          "criteria": "只一個指數或符號錯。"
        },
        {
          "score": 1,
          "criteria": "知道係數相乘或指數相加其中一項。"
        },
        {
          "score": 0,
          "criteria": "使用加法合併規則或無作答。"
        }
      ],
      "partialCreditRules": [
        "文字順序 a³b⁴、b⁴a³ 等價。"
      ],
      "followThroughPolicy": "若係數符號錯但指數全對，給 2 分。",
      "unitAndNotationRules": "不涉及實際單位；指數須為非負整數。",
      "answerOnlyPolicy": "只寫 -12a³b⁴ 無說明，最高 2 分。",
      "commonErrorTargets": [
        "把 a²·a 的指數二與一相乘，錯寫成 a²，而不是相加成 a³。",
        "只處理係數與 a，漏掉 b·b³ 應整理為 b⁴，或將負係數寫成正。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立重算總次數由 3+4=7。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f8e889c5d37a99ba02f16fcd9acadfca8248e5d4ce86d426eb9efc969ad1f5ff"
    },
    {
      "questionId": "u10-s006-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-multiply",
      "skillSlot": "s006",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "已知 (mx³y²)(-2x²y⁴)=10x⁵y⁶。求 m，並檢查所有文字指數。",
      "requiredWork": [
        "比較係數。",
        "檢查 x、y 指數。"
      ],
      "standardSolution": [
        "係數 -2m=10，所以 m=-5。",
        "x 指數 3+2=5，y 指數 2+4=6，皆符合。",
        "代回 m=-5 後左式係數為 (-5)(-2)=10，x 與 y 的指數也分別為五與六，故乘積完整等於右式，沒有只靠單一係數判斷。"
      ],
      "alternativeMethods": [
        "可先以文字部分相除確認只需解係數。"
      ],
      "reasoningSteps": [
        "係數 -2m=10，所以 m=-5。",
        "x 指數 3+2=5，y 指數 2+4=6，皆符合。",
        "代回 m=-5，同時驗證係數、x 指數與 y 指數三項條件。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "m=-5 且兩個指數檢查完整。"
        },
        {
          "score": 2,
          "criteria": "m 正確但未檢查指數。"
        },
        {
          "score": 1,
          "criteria": "列出 -2m=10 但解錯，或只檢查指數。"
        },
        {
          "score": 0,
          "criteria": "無合理比較。"
        }
      ],
      "partialCreditRules": [
        "若只漏寫一種指數檢查，最高 2 分。"
      ],
      "followThroughPolicy": "係數早期符號錯但後續一致，最多 1 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫 m=-5，最高 2 分。",
      "commonErrorTargets": [
        "解負二 m 等於十時漏掉負號，將 m 錯寫成正五。",
        "只比較係數而沒有檢查 x、y 的同底數指數和是否分別為五、六。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立代回 (-5)(-2)=10，指數均吻合。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e3b6aa5bde818920534534b6ebd0585ff73379e9c0e08a9a26187c104707112e"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s006-v001-review",
      "questionId": "u10-s006-v001",
      "questionContentSha256": "7592923487dd174841329e67d4e3575aa451366d8629f6d432975c7f48653126",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "係數 3×(-2)=-6；x 指數 2+1=3。",
      "derivedAnswer": "-6x³",
      "storedAnswer": "-6x³",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-5x³：係數相加。；-6x³：-6x³ 正確。；6x²：指數未相加且符號錯。；-6x²：指數未相加。",
        "undefinedSymbol": "題幹用語均在「單項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「係數符號或指數法則錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：基本單項式相乘，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「計算 (3x²)(-2x)。」獨立重算：係數 3×(-2)=-6；x 指數 2+1=3。 正解「-6x³」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "bb8d8d5e4b942bbbdf34df75b9d6beb6651cc89fdcc313d551cfd3a3b5f0cea5"
    },
    {
      "reviewId": "u10-s006-v002-review",
      "questionId": "u10-s006-v002",
      "questionContentSha256": "34a23cde8cce923f294037c387a03112b5a1b8a5d973387f5dc1b82cdc9721a1",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "負負得正，係數 20；a¹·a²=a³。",
      "derivedAnswer": "20a³",
      "storedAnswer": "20a³",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-20a³：符號錯。；9a³：係數相加。；20a²：指數未相加。；20a³：20a³ 正確。",
        "undefinedSymbol": "題幹用語均在「單項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「負負符號或指數相加錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：兩負單項式相乘，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「計算 (-4a)(-5a²)。」獨立重算：負負得正，係數 20；a¹·a²=a³。 正解「20a³」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "aa6de84f4f8705966fbdfaa4312934fefd3868557d98d1d30d040f1f4862c0bf"
    },
    {
      "reviewId": "u10-s006-v003-review",
      "questionId": "u10-s006-v003",
      "questionContentSha256": "7d1b4df6508534442fe6db9bb4491ead6cc4028029ae91363c2c738692c3a9c7",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "係數 6；x¹⁺²=x³；y¹⁺¹=y²。",
      "derivedAnswer": "6x³y²",
      "storedAnswer": "6x³y²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：5x³y²：係數誤加。；6x²y：指數未完整相加。；6x³y²：6x³y² 正確。；6x³y：漏掉 y 的指數。",
        "undefinedSymbol": "題幹用語均在「單項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「多未知數時漏合併一種指數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：雙文字單項式乘法，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「計算 (2xy)(3x²y)。」獨立重算：係數 6；x¹⁺²=x³；y¹⁺¹=y²。 正解「6x³y²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "0eb06c294fefd24aef722317bfb00d745a0394e4d29fe3f20851125de0fd1c71"
    },
    {
      "reviewId": "u10-s006-v004-review",
      "questionId": "u10-s006-v004",
      "questionContentSha256": "e82b3ac30d07cde58a77ed1a9b89c26b91a6079aec20b43b255b8c1f675a8cb7",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(-1/2)×8=-4，x³·x²=x⁵。",
      "derivedAnswer": "-4x⁵",
      "storedAnswer": "-4x⁵",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-4x⁵：-4x⁵ 正確。；4x⁵：漏負號。；-8x⁶：係數與指數都錯。；-4x⁶：指數誤相乘。",
        "undefinedSymbol": "題幹用語均在「單項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「分數係數符號或指數錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：分數係數乘法，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「計算 (-1/2 x³)(8x²)。」獨立重算：(-1/2)×8=-4，x³·x²=x⁵。 正解「-4x⁵」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "1c455e4b299dd1bdc2373e9f551c31a5d3ffc649aef2c82d22d71ea42f68d03b"
    },
    {
      "reviewId": "u10-s006-v005-review",
      "questionId": "u10-s006-v005",
      "questionContentSha256": "1788c9434f7698ea5abbb98d6c289f578478bb4ce6a5d4bafb2c96d9de9803ed",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "係數 -6；a²⁺¹=a³；b³⁺²=b⁵。",
      "derivedAnswer": "-6a³b⁵",
      "storedAnswer": "-6a³b⁵",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-6a²b⁵：a 指數未加。；6a³b⁶：符號與 b 指數錯。；-5a³b⁵：係數誤加。；-6a³b⁵：-6a³b⁵ 正確。",
        "undefinedSymbol": "題幹用語均在「單項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「多底數指數相加不完整」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：多文字高次乘法，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「計算 (3a²b³)(-2ab²)。」獨立重算：係數 -6；a²⁺¹=a³；b³⁺²=b⁵。 正解「-6a³b⁵」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "20eff4c622f84451e9884717a2f6c7e8ee3330c08f02a138e55bde10fc53d145"
    },
    {
      "reviewId": "u10-s006-v006-review",
      "questionId": "u10-s006-v006",
      "questionContentSha256": "d80b0a6df58e19a4228638602e65f1101fe884d993e1bf8e7e4b8466cd828d18",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "係數比較：-3m=12，所以 m=-4；指數 2+3=5 已符合。",
      "derivedAnswer": "-4",
      "storedAnswer": "-4",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4：忽略負號。；-4：m=-4 正確。；-9：把係數相加。；9：錯解 -3m=12。",
        "undefinedSymbol": "題幹用語均在「單項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「由乘積係數反求時符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：反求單項式係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (mx²)(-3x³)=12x⁵，則 m 為何？」獨立重算：係數比較：-3m=12，所以 m=-4；指數 2+3=5 已符合。 正解「-4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "487efa66dda13fa097f48926b45546dbc415a0f4fd665a75f2e496715e6b8a3c"
    },
    {
      "reviewId": "u10-s006-v007-review",
      "questionId": "u10-s006-v007",
      "questionContentSha256": "1151097e84a80db41f4bc5ddf29d741290d87f8aad3632a44ee5746cd34097d9",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "先平方：(-2x²y)²=4x⁴y²；再乘 3xy³ 得 12x⁵y⁵。",
      "derivedAnswer": "12x⁵y⁵",
      "storedAnswer": "12x⁵y⁵",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：12x⁵y⁵：12x⁵y⁵ 正確。；-12x⁵y⁵：平方後仍保留負號。；12x⁴y⁶：指數分配錯。；6x⁵y⁵：係數未平方。",
        "undefinedSymbol": "題幹用語均在「單項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「單項式平方未作用到所有因子」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：冪與乘法綜合，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「計算 [(-2x²y)²](3xy³)。」獨立重算：先平方：(-2x²y)²=4x⁴y²；再乘 3xy³ 得 12x⁵y⁵。 正解「12x⁵y⁵」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "07a7fb008a7c3cccd2dbfbcfeb0c2aabbe4d116f1772477877c1d1cea355416e"
    },
    {
      "reviewId": "u10-s006-v008-review",
      "questionId": "u10-s006-v008",
      "questionContentSha256": "0c97ce7b7e7a7ff10c2efc523d39de73e973de12d6f672c7209d27658b1b02fd",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "AB=-6x⁵y⁶，總次數為 5+6=11。",
      "derivedAnswer": "11",
      "storedAnswer": "11",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：7：只加原 A 次數。；9：只取最大指數。；11：11 正確。；13：把所有係數也算入。",
        "undefinedSymbol": "題幹用語均在「單項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把總次數誤作最大指數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：乘積的總次數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 A=-2x³y²，B=3x²y⁴，則 AB 的總次數為何？」獨立重算：AB=-6x⁵y⁶，總次數為 5+6=11。 正解「11」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "371abf1cdc5d3551c1f15aa13dd21e1158298ee5ef27e86c499e50bf289048d9"
    },
    {
      "reviewId": "u10-s006-v009-review",
      "questionId": "u10-s006-v009",
      "questionContentSha256": "e17f8bb9c42782b934a3373c66c6d2aa3e682d621a12b863c6d0093d8af7cd65",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "同底數指數相加：m+4=9，所以 m=5。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3：m+4=7。；4：直接抄已知 4。；5：5 正確。；13：把指數相加結果再加。",
        "undefinedSymbol": "題幹用語均在「單項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「指數比較方程錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由乘積指數反求，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「(2xᵐ)(3x⁴)=6x⁹，則 m 為何？」獨立重算：同底數指數相加：m+4=9，所以 m=5。 正解「5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "63b2381e661bb5f9444d5b485e275b77ab328e459e229f63185dedea870efe2c"
    },
    {
      "reviewId": "u10-s006-v010-review",
      "questionId": "u10-s006-v010",
      "questionContentSha256": "9c5c712cc111264e83bb17ee65246e29fbb68a9b935df4174833948639bc9c8b",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "面積=(3x²)²=9x⁴ 平方公分。",
      "derivedAnswer": "9x⁴ 平方公分",
      "storedAnswer": "9x⁴ 平方公分",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：9x⁴ 平方公分：9x⁴ 正確。；6x² 平方公分：把面積當周長的一半。；9x² 平方公分：只平方係數。；3x⁴ 平方公分：只平方文字。",
        "undefinedSymbol": "題幹用語均在「單項式乘法」講義定義。",
        "unitConflict": "公分×公分=平方公分。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "邊長 3x² 不為負；作實際正方形時需 x≠0。",
        "alternateReading": "常見誤讀「平方單項式時只平方一部分」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：正方形面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "正方形面積要求邊長乘自身，並將公分轉為平方公分。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「正方形邊長為 3x² 公分，其面積為何？」獨立重算：面積=(3x²)²=9x⁴ 平方公分。 正解「9x⁴ 平方公分」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8a1b7421800711f71f180ab1a87b36f7bf297081ca184ba229fe457deddbd53e"
    },
    {
      "reviewId": "u10-s006-v011-review",
      "questionId": "u10-s006-v011",
      "questionContentSha256": "7834bfe1a4cbc265a18329fb65461b7560dcd95831a6b4496263983eef5d309d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "總重=(4x³)(2x²)=8x⁵ 公克。",
      "derivedAnswer": "8x⁵ 公克",
      "storedAnswer": "8x⁵ 公克",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：6x⁵ 公克：係數相加。；8x⁵ 公克：8x⁵ 正確。；8x⁶ 公克：指數相乘。；6x⁶ 公克：係數與指數皆錯。",
        "undefinedSymbol": "題幹用語均在「單項式乘法」講義定義。",
        "unitConflict": "件數為無量綱計數，乘公克/件得到公克。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把數量與單重相加」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：總重量乘法模型，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「每個」與「一箱有」決定總重使用乘法，且單位最後為公克。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一箱有 4x³ 個零件，每個零件重 2x² 公克。整箱零件總重為何？」獨立重算：總重=(4x³)(2x²)=8x⁵ 公克。 正解「8x⁵ 公克」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "ba6f2cac9fa2411677080c2c18efecf5049dee353108f60d3848167b3add0e65"
    },
    {
      "reviewId": "u10-s006-v012-review",
      "questionId": "u10-s006-v012",
      "questionContentSha256": "158fbdf1bbc53abb017d9c36a5c8147354d00535e7a5911fdcf1ae8b5bf64a88",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "總面積=(5x²)(3x)=15x³ 平方公尺。",
      "derivedAnswer": "15x³ 平方公尺",
      "storedAnswer": "15x³ 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：8x³ 平方公尺：係數相加。；15x² 平方公尺：漏加 x 指數。；15x 平方公尺：漏掉 x²。；15x³ 平方公尺：15x³ 正確。",
        "undefinedSymbol": "題幹用語均在「單項式乘法」講義定義。",
        "unitConflict": "3x 是區域數，乘平方公尺得到平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x 應為使 3x 為正整數的值；題目只求代數式。",
        "alternateReading": "常見誤讀「忽略情境中的乘法關係」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：多區總面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "區域數與單區面積決定相乘；題幹同時要求辨認面積單位。",
      "prerequisiteCheck": "使用先備技能：polynomial-add-subtract；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「每個相同區域的面積為 5x² 平方公尺，共有 3x 個區域，總面積為何？」獨立重算：總面積=(5x²)(3x)=15x³ 平方公尺。 正解「15x³ 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "3677024c15d6967feb8b39d0a45bd83e80aea3eee4c5cb9b684f5e22b8dcbcfa"
    }
  ],
  "drawingSpecs": []
};
