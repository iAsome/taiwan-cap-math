// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s008-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-operations",
    "skillId": "binomial-multiply-basic",
    "lockedTitle": "二項式乘法",
    "title": "二項式乘法：四個乘積項完整配對",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能用雙重分配或表格完成二項式乘法。",
      "能合併兩個中間同類項。",
      "能處理係數、負號及不同文字。"
    ],
    "prerequisites": [
      "monomial-polynomial-distribute"
    ],
    "prerequisiteBridge": "先備技能 monomial-polynomial-distribute 已建立下一步所需概念；本節專注於逐項分配後合併中間同類項。",
    "glossary": [
      {
        "term": "二項式",
        "definition": "化簡後恰有兩個非零項的多項式。"
      },
      {
        "term": "雙重分配",
        "definition": "第一括號每一項分別乘第二括號每一項。"
      },
      {
        "term": "中間項",
        "definition": "展開後常由兩個一次乘積合併而成。"
      }
    ],
    "notation": [
      {
        "symbol": "(a+b)(c+d)",
        "meaning": "展開為 ac+ad+bc+bd。"
      }
    ],
    "conceptNarrative": [
      "兩個二項式相乘共有四次配對，不是只乘首項和末項。",
      "以 (x+2)(x+5) 為例，中間項來自 5x 與 2x，合為 7x。",
      "負號會改變交叉乘積的符號。",
      "表格法能降低漏項，但最後仍要合併同類項。"
    ],
    "formalDefinitions": [
      {
        "name": "二項式乘法",
        "statement": "由分配律重複兩次得到四個乘積。"
      }
    ],
    "formulas": [
      {
        "formula": "(a+b)(c+d)=ac+ad+bc+bd",
        "conditions": [
          "四項均須存在或因係數為 0 消失"
        ],
        "meaning": "一般二項式展開。"
      }
    ],
    "nonApplicableCases": [
      "不能只算 ac+bd。",
      "不能把 (a+b)(c+d) 當成 a+b+c+d。",
      "中間項不同類時不能強行合併。",
      "若括號內有三項，需使用更一般的逐項分配。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "固定第一括號第一項，乘遍第二括號。",
        "check": "完成此步後，確認內容仍符合「逐項分配後合併中間同類項」。"
      },
      {
        "step": 2,
        "instruction": "換第一括號第二項，再乘遍第二括號。",
        "check": "完成此步後，確認內容仍符合「逐項分配後合併中間同類項」。"
      },
      {
        "step": 3,
        "instruction": "寫出四個乘積並檢查符號。",
        "check": "完成此步後，確認內容仍符合「逐項分配後合併中間同類項」。"
      },
      {
        "step": 4,
        "instruction": "合併同類項。",
        "check": "完成此步後，確認內容仍符合「逐項分配後合併中間同類項」。"
      },
      {
        "step": 5,
        "instruction": "以常數項乘積與首項乘積快速檢查。",
        "check": "完成此步後，確認內容仍符合「逐項分配後合併中間同類項」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "(x+3)(x+4)。",
        "solutionSteps": [
          "x²+4x+3x+12。"
        ],
        "answer": "x²+7x+12。"
      },
      {
        "exampleId": "L2",
        "prompt": "(2x−1)(x+5)。",
        "solutionSteps": [
          "2x²+10x−x−5。"
        ],
        "answer": "2x²+9x−5。"
      },
      {
        "exampleId": "L3",
        "prompt": "(x+2y)(x−y)。",
        "solutionSteps": [
          "x²−xy+2xy−2y²。"
        ],
        "answer": "x²+xy−2y²。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "只乘首首與尾尾",
        "why": "漏掉交叉乘積",
        "correction": "必須完成 2×2 四格。"
      },
      {
        "mistake": "常數項符號錯",
        "why": "尾項乘法符號未檢查",
        "correction": "先獨立算兩常數乘積。"
      },
      {
        "mistake": "中間項係數只取一個",
        "why": "漏掉另一交叉項",
        "correction": "兩個交叉乘積都寫出再合併。"
      }
    ],
    "selfCheck": [
      "我是否能能用雙重分配或表格完成二項式乘法？",
      "我是否能能合併兩個中間同類項？",
      "我是否能能處理係數、負號及不同文字？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "二項式乘法有四個逐項乘積。",
      "中間項通常由交叉項合併。",
      "首項與常數項可作快速檢查。",
      "負號必須逐次判定。"
    ],
    "connections": {
      "previous": "上一技能 單項式乘多項式 提供本節所需工具。",
      "next": [
        "下一節把兩個相同二項式的乘法整理成和的平方公式。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s008-v001",
        "u10-s008-v002",
        "u10-s008-v003",
        "u10-s008-v004",
        "u10-s008-v005",
        "u10-s008-v006",
        "u10-s008-v007",
        "u10-s008-v008",
        "u10-s008-v009",
        "u10-s008-v010",
        "u10-s008-v011",
        "u10-s008-v012"
      ],
      "constructedResponseIds": [
        "u10-s008-cr001",
        "u10-s008-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「二項式乘法：四個乘積項完整配對」：定義、3 個例題、錯誤推理與下一技能銜接均針對 binomial-multiply-basic；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "848ebf404380110d9a702c8ceae64d17ff7ab9ea748ad27e899853a1f699c962"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s008-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (x+2)(x+3)。",
      "givenConditions": [],
      "target": "基本正二項式乘法",
      "choices": [
        "x²+5",
        "x²+6x+6",
        "2x²+5x+6",
        "x²+5x+6"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "四項展開 x²+3x+2x+6=x²+5x+6。",
        "derivedChoice": "x²+5x+6",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "交叉項合併為 5x。",
      "steps": [
        "四項展開 x²+3x+2x+6=x²+5x+6。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+5",
          "truth": false,
          "reason": "漏交叉項。"
        },
        {
          "choice": "x²+6x+6",
          "truth": false,
          "reason": "中間係數錯。"
        },
        {
          "choice": "2x²+5x+6",
          "truth": false,
          "reason": "首項重複計算。"
        },
        {
          "choice": "x²+5x+6",
          "truth": true,
          "reason": "x²+5x+6 正確。"
        }
      ],
      "misconceptionTarget": "漏掉交叉乘積",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「基本正二項式乘法」且四個選項以同一表示層級作答；逐項重算後只有「x²+5x+6」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：基本正二項式乘法，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5419a365754304806602cc4d7449fba499766b4073d009ff2748e07bb5c91433"
    },
    {
      "questionId": "u10-s008-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某學生用面積模型展開 (x−4)(x+1)：他列出 x²、x、−4x 三個區塊，卻漏掉一個常數區塊。漏掉的區塊面積應記為何？",
      "givenConditions": [
        "兩邊分別為x−4與x+1",
        "四個乘積區塊需全部保留"
      ],
      "target": "找出二項式乘法中遺漏的常數乘積",
      "choices": [
        "4",
        "−4",
        "−3",
        "1"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "常數區塊來自 (−4)×1，因此是 −4；完整展開為 x²+x−4x−4=x²−3x−4。",
        "derivedChoice": "−4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "只計算兩個常數項的乘積，並保留負號。",
      "steps": [
        "找出常數項−4與1。",
        "計算(−4)×1=−4。",
        "核對完整四個乘積。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "4忽略負號。"
        },
        {
          "choice": "−4",
          "truth": true,
          "reason": "常數乘積為−4。"
        },
        {
          "choice": "−3",
          "truth": false,
          "reason": "−3是合併後x項係數。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "1只抄第二括號常數。"
        }
      ],
      "misconceptionTarget": "漏乘常數項或丟失負號。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹明確指定常數區塊。",
      "boundaryAudit": "題幹明確指定常數區塊。",
      "difficultyReason": "基礎：定位面積模型中的遺漏乘積。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "294e2ba75190ea1df4175b0da8a3a74a0a24f921ad9bd67167125c0f49d41e03"
    },
    {
      "questionId": "u10-s008-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (2x+1)(x+5)。",
      "givenConditions": [],
      "target": "含係數二項式",
      "choices": [
        "2x²+11x+5",
        "2x²+6x+5",
        "2x²+10x+1",
        "3x²+6x+5"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "2x²+10x+x+5=2x²+11x+5。",
        "derivedChoice": "2x²+11x+5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "完成四個乘積再合併。",
      "steps": [
        "2x²+10x+x+5=2x²+11x+5。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²+11x+5",
          "truth": true,
          "reason": "2x²+11x+5 正確。"
        },
        {
          "choice": "2x²+6x+5",
          "truth": false,
          "reason": "中間項漏 5x。"
        },
        {
          "choice": "2x²+10x+1",
          "truth": false,
          "reason": "只乘外項。"
        },
        {
          "choice": "3x²+6x+5",
          "truth": false,
          "reason": "首項係數錯。"
        }
      ],
      "misconceptionTarget": "交叉項只算一個",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含係數二項式」且四個選項以同一表示層級作答；逐項重算後只有「2x²+11x+5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：含係數二項式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "79aab0db045ba699aea2f9cb570b4f6694f01a2e14c940ae334b430e1f79b7f7"
    },
    {
      "questionId": "u10-s008-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (3x-2)(2x+5)。",
      "givenConditions": [],
      "target": "雙係數二項式",
      "choices": [
        "6x²+19x-10",
        "5x²+11x-10",
        "6x²+11x-10",
        "6x²+11x+10"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "6x²+15x-4x-10=6x²+11x-10。",
        "derivedChoice": "6x²+11x-10",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "首項、交叉項和常數符號逐一核對。",
      "steps": [
        "6x²+15x-4x-10=6x²+11x-10。"
      ],
      "optionAnalysis": [
        {
          "choice": "6x²+19x-10",
          "truth": false,
          "reason": "把 -4x 當 +4x。"
        },
        {
          "choice": "5x²+11x-10",
          "truth": false,
          "reason": "首項係數相加。"
        },
        {
          "choice": "6x²+11x-10",
          "truth": true,
          "reason": "首項、交叉項和常數符號逐一核對。"
        },
        {
          "choice": "6x²+11x+10",
          "truth": false,
          "reason": "常數負負判錯。"
        }
      ],
      "misconceptionTarget": "中間項或尾項符號錯",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「雙係數二項式」且四個選項以同一表示層級作答；逐項重算後只有「6x²+11x-10」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：雙係數二項式，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "69b947da7433aa7ce7b33f4c6ef4c98656bba29adfc71a514995da74ef0d3131"
    },
    {
      "questionId": "u10-s008-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (x+2y)(x-3y)。",
      "givenConditions": [],
      "target": "含兩文字二項式",
      "choices": [
        "x²-6y²",
        "x²-xy-6y²",
        "x²+5xy-6y²",
        "x²-5xy+6y²"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "x²-3xy+2xy-6y²=x²-xy-6y²。",
        "derivedChoice": "x²-xy-6y²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "xy 交叉項可合併。",
      "steps": [
        "x²-3xy+2xy-6y²=x²-xy-6y²。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-6y²",
          "truth": false,
          "reason": "漏 xy 中間項。"
        },
        {
          "choice": "x²-xy-6y²",
          "truth": true,
          "reason": "x²-xy-6y² 正確。"
        },
        {
          "choice": "x²+5xy-6y²",
          "truth": false,
          "reason": "中間項係數錯。"
        },
        {
          "choice": "x²-5xy+6y²",
          "truth": false,
          "reason": "中間與尾符號錯。"
        }
      ],
      "misconceptionTarget": "雙文字交叉項合併錯",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含兩文字二項式」且四個選項以同一表示層級作答；逐項重算後只有「x²-xy-6y²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：含兩文字二項式，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2008fd9f01654d4b2c810a6d6b6e76aa7a10a4794a0c7736e15bd18e40958edc"
    },
    {
      "questionId": "u10-s008-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (x+a)(x+4)=x²+9x+20，則 a 為何？",
      "givenConditions": [],
      "target": "由展開式反求參數",
      "choices": [
        "4",
        "9",
        "16",
        "5"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "展開左式 x²+(a+4)x+4a。比較常數 4a=20 得 a=5，且 a+4=9。",
        "derivedChoice": "5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "用兩個係數交叉驗證。",
      "steps": [
        "展開左式 x²+(a+4)x+4a。",
        "比較常數 4a=20 得 a=5，且 a+4=9。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "常數變 16。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "把中間係數直接當 a。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "誤用 4²。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "a=5 正確。"
        }
      ],
      "misconceptionTarget": "只比較中間項或常數項錯",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由展開式反求參數」且四個選項以同一表示層級作答；逐項重算後只有「5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：由展開式反求參數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ed00928f372baf17c72582e198f07ba57741227398e12ca12789234885fac9c3"
    },
    {
      "questionId": "u10-s008-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (x+1)(x+2)-(x-1)(x-2)。",
      "givenConditions": [],
      "target": "兩乘積相減",
      "choices": [
        "2x²+4",
        "4x",
        "6x",
        "2x"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "第一式 x²+3x+2；第二式 x²-3x+2；相減得 6x。",
        "derivedChoice": "6x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩個二次式的平方項與常數抵消。",
      "steps": [
        "第一式 x²+3x+2。",
        "第二式 x²-3x+2。",
        "相減得 6x。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²+4",
          "truth": false,
          "reason": "把兩式相加。"
        },
        {
          "choice": "4x",
          "truth": false,
          "reason": "少算一組 3x。"
        },
        {
          "choice": "6x",
          "truth": true,
          "reason": "6x 正確。"
        },
        {
          "choice": "2x",
          "truth": false,
          "reason": "係數差錯。"
        }
      ],
      "misconceptionTarget": "展開後相減時未逐項變號",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「兩乘積相減」且四個選項以同一表示層級作答；逐項重算後只有「6x」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：兩乘積相減，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5546a09a429c9f43a56ee6fababeb9275faf5a4ace9dc4e27a6b17351d1281aa"
    },
    {
      "questionId": "u10-s008-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "(2x+m)(x-3) 的 x 項係數為 1，則 m 為何？",
      "givenConditions": [],
      "target": "由中間項求參數",
      "choices": [
        "7",
        "-7",
        "-5",
        "5"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "展開 2x²+(m-6)x-3m。令 m-6=1，得 m=7。",
        "derivedChoice": "7",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "只比較一次項係數。",
      "steps": [
        "展開 2x²+(m-6)x-3m。",
        "令 m-6=1，得 m=7。"
      ],
      "optionAnalysis": [
        {
          "choice": "7",
          "truth": true,
          "reason": "m=7 正確。"
        },
        {
          "choice": "-7",
          "truth": false,
          "reason": "m-6=-13。"
        },
        {
          "choice": "-5",
          "truth": false,
          "reason": "m-6=-11。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "m-6=-1。"
        }
      ],
      "misconceptionTarget": "中間項係數由兩交叉項組成",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由中間項求參數」且四個選項以同一表示層級作答；逐項重算後只有「7」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由中間項求參數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e80b6ed91a1eaeedbf14814c1dc05dc10a7bc679c094c23fe4c6a41b165dfe08"
    },
    {
      "questionId": "u10-s008-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (ax+2)(3x-1) 的 x² 項係數為 12，常數項為何？",
      "givenConditions": [],
      "target": "由首項資訊判尾項",
      "choices": [
        "-2",
        "-8",
        "2",
        "8"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "x² 係數 3a=12 得 a=4；常數只由 2×(-1)=-2，與 a 無關。",
        "derivedChoice": "-2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先確認常數項來自尾尾乘積。",
      "steps": [
        "x² 係數 3a=12 得 a=4。",
        "常數只由 2×(-1)=-2，與 a 無關。"
      ],
      "optionAnalysis": [
        {
          "choice": "-2",
          "truth": true,
          "reason": "-2 正確。"
        },
        {
          "choice": "-8",
          "truth": false,
          "reason": "把 a 代入常數。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "漏負號。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "把 2×4。"
        }
      ],
      "misconceptionTarget": "把首項參數誤帶入常數項",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由首項資訊判尾項」且四個選項以同一表示層級作答；逐項重算後只有「-2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由首項資訊判尾項，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8e3019c772e57a55a4d91b96363641c2a4d1de76e6a1472494319ce9f4393c6c"
    },
    {
      "questionId": "u10-s008-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "長方形長 (x+5) 公尺、寬 (x+2) 公尺，面積為何？",
      "givenConditions": [],
      "target": "長方形面積二項式",
      "choices": [
        "x²+10x+7 平方公尺",
        "2x²+7x+10 平方公尺",
        "x²+7x+10 平方公尺",
        "x²+3x+10 平方公尺"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "面積=(x+5)(x+2)=x²+7x+10。",
        "derivedChoice": "x²+7x+10 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩邊長相乘並合併交叉項。",
      "steps": [
        "面積=(x+5)(x+2)=x²+7x+10。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+10x+7 平方公尺",
          "truth": false,
          "reason": "中間係數誤用 5×2。"
        },
        {
          "choice": "2x²+7x+10 平方公尺",
          "truth": false,
          "reason": "首項重複。"
        },
        {
          "choice": "x²+7x+10 平方公尺",
          "truth": true,
          "reason": "兩邊長相乘並合併交叉項。"
        },
        {
          "choice": "x²+3x+10 平方公尺",
          "truth": false,
          "reason": "把 5-2 當中間係數。"
        }
      ],
      "misconceptionTarget": "面積展開中間項錯",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「長方形面積二項式」且四個選項以同一表示層級作答；逐項重算後只有「x²+7x+10 平方公尺」成立。",
      "boundaryAudit": "x>-2 可使兩邊為正；若 x 表示長度通常 x≥0。",
      "difficultyReason": "素養：長方形面積二項式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "幾何邊長決定兩個二項式相乘，平方公尺單位不可由純代數題得知。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7ec7eb8468c43e51fc9f0587365fd33518ca7b517d4928782cde81c328f5037f"
    },
    {
      "questionId": "u10-s008-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一個商品每件售價 (x+20) 元，售出 (x-5) 件。總銷售額為何？",
      "givenConditions": [],
      "target": "銷售額模型",
      "choices": [
        "x²+15x+100 元",
        "x²+25x-100 元",
        "x²-15x-100 元",
        "x²+15x-100 元"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "銷售額=(x+20)(x-5)=x²+15x-100。",
        "derivedChoice": "x²+15x-100 元",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "單價乘件數，常數項 20×(-5) 為負。",
      "steps": [
        "銷售額=(x+20)(x-5)=x²+15x-100。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+15x+100 元",
          "truth": false,
          "reason": "尾項符號錯。"
        },
        {
          "choice": "x²+25x-100 元",
          "truth": false,
          "reason": "中間項錯。"
        },
        {
          "choice": "x²-15x-100 元",
          "truth": false,
          "reason": "中間符號錯。"
        },
        {
          "choice": "x²+15x-100 元",
          "truth": true,
          "reason": "x²+15x-100 正確。"
        }
      ],
      "misconceptionTarget": "單價與數量乘法的尾項符號錯",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "元/件乘件數得到元。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「銷售額模型」且四個選項以同一表示層級作答；逐項重算後只有「x²+15x-100 元」成立。",
      "boundaryAudit": "件數 x-5 應為非負整數，因此 x≥5。",
      "difficultyReason": "素養：銷售額模型，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「每件售價×售出件數」是情境必要乘法，並需保留元。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7f6d1efd5d37a9d7cab27a5c36a1dc13188fea5781f3428ae52d855f5aa0464e"
    },
    {
      "questionId": "u10-s008-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某矩形花圃原邊長為 (x+1) 與 (x+4) 公尺。面積模型的 x 項係數是多少？",
      "givenConditions": [],
      "target": "由面積模型讀係數",
      "choices": [
        "4",
        "5",
        "6",
        "8"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "展開為 x²+5x+4，所以 x 項係數 5。",
        "derivedChoice": "5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "交叉面積 x·4 與 1·x 合成 5x。",
      "steps": [
        "展開為 x²+5x+4，所以 x 項係數 5。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "只取一邊常數。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "5 正確。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "把常數相乘後加 2。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "把兩常數相乘。"
        }
      ],
      "misconceptionTarget": "只計一個交叉區域",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "展開式各項合計表示平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由面積模型讀係數」且四個選項以同一表示層級作答；逐項重算後只有「5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：由面積模型讀係數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "兩邊增加量各形成一個交叉面積，係數 5 有幾何來源。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s008-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a8e0b83574c96c6fbc7a02e8c48c4e14b6a681adf208d085684157ccc89e7987"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s008-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (2x-3)(x+4)，並用四個乘積說明。",
      "requiredWork": [
        "列出四個逐項乘積。",
        "合併中間同類項。"
      ],
      "standardSolution": [
        "2x·x=2x²，2x·4=8x，(-3)·x=-3x，(-3)·4=-12。",
        "合併得 2x²+5x-12。"
      ],
      "alternativeMethods": [
        "可用 2×2 表格，每格填一個乘積。"
      ],
      "reasoningSteps": [
        "2x·x=2x²，2x·4=8x，(-3)·x=-3x，(-3)·4=-12。",
        "合併得 2x²+5x-12。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "四乘積與結果全對。"
        },
        {
          "score": 2,
          "criteria": "四格方法正確但一格或合併錯。"
        },
        {
          "score": 1,
          "criteria": "至少兩個乘積正確且看出需逐項相乘。"
        },
        {
          "score": 0,
          "criteria": "只算首尾或無作答。"
        }
      ],
      "partialCreditRules": [
        "若結果正確但未列四乘積，最高 2 分。"
      ],
      "followThroughPolicy": "某一乘積早期錯，後續合併一致可給 2 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫答案最高 2 分。",
      "commonErrorTargets": [
        "逐項分配後合併中間同類項"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立重算中間係數 8-3=5。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1bad5c82d8253c5cdc055fbb936dc298ed717da8b561be2f016e160cb12d7658"
    },
    {
      "questionId": "u10-s008-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "binomial-multiply-basic",
      "skillSlot": "s008",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (x+a)(2x-3)=2x²+7x-15，求 a，並以兩個係數驗證。",
      "requiredWork": [
        "展開含 a 的乘積。",
        "比較 x 項與常數項。"
      ],
      "standardSolution": [
        "左式=2x²+(2a-3)x-3a。",
        "比較常數 -3a=-15 得 a=5。",
        "再驗 x 項 2a-3=10-3=7，符合。"
      ],
      "alternativeMethods": [
        "可先由常數項求 a，再用中間項檢查。"
      ],
      "reasoningSteps": [
        "左式=2x²+(2a-3)x-3a。",
        "比較常數 -3a=-15 得 a=5。",
        "再驗 x 項 2a-3=10-3=7，符合。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "a=5 且兩係數驗證完整。"
        },
        {
          "score": 2,
          "criteria": "a 正確但只比較一個係數。"
        },
        {
          "score": 1,
          "criteria": "正確展開含 a 的式子但求解錯。"
        },
        {
          "score": 0,
          "criteria": "未建立係數關係。"
        }
      ],
      "partialCreditRules": [
        "只由 x 項求出 a=5 也可，但需驗常數才滿分。"
      ],
      "followThroughPolicy": "若展開中間係數寫 2a+3，後續一致，最多 1 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫 a=5，最高 2 分。",
      "commonErrorTargets": [
        "逐項分配後合併中間同類項"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立代回 (x+5)(2x-3)=2x²+7x-15。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "635f959859db5e8adafb945824efac478e050e48bd0465fa3a4a368f02d24a4f"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s008-v001-review",
      "questionId": "u10-s008-v001",
      "questionContentSha256": "5419a365754304806602cc4d7449fba499766b4073d009ff2748e07bb5c91433",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "四項展開 x²+3x+2x+6=x²+5x+6。",
      "derivedAnswer": "x²+5x+6",
      "storedAnswer": "x²+5x+6",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+5：漏交叉項。；x²+6x+6：中間係數錯。；2x²+5x+6：首項重複計算。；x²+5x+6：x²+5x+6 正確。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「漏掉交叉乘積」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：基本正二項式乘法，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (x+2)(x+3)。」獨立重算：四項展開 x²+3x+2x+6=x²+5x+6。 正解「x²+5x+6」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8ed5dac425a1bc7397136e64b0a4b6de9659df40c6e3a2a554d9ff9479093bc8"
    },
    {
      "reviewId": "u10-s008-v002-review",
      "questionId": "u10-s008-v002",
      "questionContentSha256": "294e2ba75190ea1df4175b0da8a3a74a0a24f921ad9bd67167125c0f49d41e03",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "常數區塊來自 (−4)×1，因此是 −4；完整展開為 x²+x−4x−4=x²−3x−4。",
      "derivedAnswer": "−4",
      "storedAnswer": "−4",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「−4」成立；其他三項分別因：4忽略負號。；−3是合併後x項係數。；1只抄第二括號常數。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "題幹明確指定常數區塊。",
        "alternateReading": "題幹明確要求「找出二項式乘法中遺漏的常數乘積」，沒有第二種合理所求。"
      },
      "difficultyReason": "基礎：定位面積模型中的遺漏乘積。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u10-s008-v002 中央修訂後獨立重算：常數區塊來自 (−4)×1，因此是 −4；完整展開為 x²+x−4x−4=x²−3x−4。 四個選項逐項核對，唯一正解為「−4」；其餘選項排除理由為：4忽略負號。；−3是合併後x項係數。；1只抄第二括號常數。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "0e140592f07eb1d4b69c5d9479935a710525f97f2396fd9ba9be6cf6d2afb060"
    },
    {
      "reviewId": "u10-s008-v003-review",
      "questionId": "u10-s008-v003",
      "questionContentSha256": "79aab0db045ba699aea2f9cb570b4f6694f01a2e14c940ae334b430e1f79b7f7",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "2x²+10x+x+5=2x²+11x+5。",
      "derivedAnswer": "2x²+11x+5",
      "storedAnswer": "2x²+11x+5",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²+11x+5：2x²+11x+5 正確。；2x²+6x+5：中間項漏 5x。；2x²+10x+1：只乘外項。；3x²+6x+5：首項係數錯。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「交叉項只算一個」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：含係數二項式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (2x+1)(x+5)。」獨立重算：2x²+10x+x+5=2x²+11x+5。 正解「2x²+11x+5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "459a2f5e8ca2e59030b05e1c5ab9967cd1d57a9d2caa6225aa3dd3368a7e3d9a"
    },
    {
      "reviewId": "u10-s008-v004-review",
      "questionId": "u10-s008-v004",
      "questionContentSha256": "69b947da7433aa7ce7b33f4c6ef4c98656bba29adfc71a514995da74ef0d3131",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "6x²+15x-4x-10=6x²+11x-10。",
      "derivedAnswer": "6x²+11x-10",
      "storedAnswer": "6x²+11x-10",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：6x²+19x-10：把 -4x 當 +4x。；5x²+11x-10：首項係數相加。；6x²+11x-10：首項、交叉項和常數符號逐一核對。；6x²+11x+10：常數負負判錯。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「中間項或尾項符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：雙係數二項式，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (3x-2)(2x+5)。」獨立重算：6x²+15x-4x-10=6x²+11x-10。 正解「6x²+11x-10」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "e6d1e7b7c82f111ec67df64a610c395e22481e86e287078acd251f8bc5bc56f7"
    },
    {
      "reviewId": "u10-s008-v005-review",
      "questionId": "u10-s008-v005",
      "questionContentSha256": "2008fd9f01654d4b2c810a6d6b6e76aa7a10a4794a0c7736e15bd18e40958edc",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x²-3xy+2xy-6y²=x²-xy-6y²。",
      "derivedAnswer": "x²-xy-6y²",
      "storedAnswer": "x²-xy-6y²",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-6y²：漏 xy 中間項。；x²-xy-6y²：x²-xy-6y² 正確。；x²+5xy-6y²：中間項係數錯。；x²-5xy+6y²：中間與尾符號錯。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「雙文字交叉項合併錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：含兩文字二項式，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (x+2y)(x-3y)。」獨立重算：x²-3xy+2xy-6y²=x²-xy-6y²。 正解「x²-xy-6y²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "67492c476e99d920bf8db8e74a6828a263a16b213d1d4d3c3912bfaf0da82697"
    },
    {
      "reviewId": "u10-s008-v006-review",
      "questionId": "u10-s008-v006",
      "questionContentSha256": "ed00928f372baf17c72582e198f07ba57741227398e12ca12789234885fac9c3",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "展開左式 x²+(a+4)x+4a。比較常數 4a=20 得 a=5，且 a+4=9。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4：常數變 16。；9：把中間係數直接當 a。；16：誤用 4²。；5：a=5 正確。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只比較中間項或常數項錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：由展開式反求參數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (x+a)(x+4)=x²+9x+20，則 a 為何？」獨立重算：展開左式 x²+(a+4)x+4a。比較常數 4a=20 得 a=5，且 a+4=9。 正解「5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "20805951a13572e5bbbe0cf5fe57a52e99837f386a1e39a5b230d6649423e6c5"
    },
    {
      "reviewId": "u10-s008-v007-review",
      "questionId": "u10-s008-v007",
      "questionContentSha256": "5546a09a429c9f43a56ee6fababeb9275faf5a4ace9dc4e27a6b17351d1281aa",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "第一式 x²+3x+2；第二式 x²-3x+2；相減得 6x。",
      "derivedAnswer": "6x",
      "storedAnswer": "6x",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²+4：把兩式相加。；4x：少算一組 3x。；6x：6x 正確。；2x：係數差錯。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「展開後相減時未逐項變號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：兩乘積相減，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (x+1)(x+2)-(x-1)(x-2)。」獨立重算：第一式 x²+3x+2；第二式 x²-3x+2；相減得 6x。 正解「6x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "f8c35cbb7d99f60a6532cfd6723e1f60e39579ca6083743947b9d4c07cb12a9c"
    },
    {
      "reviewId": "u10-s008-v008-review",
      "questionId": "u10-s008-v008",
      "questionContentSha256": "e80b6ed91a1eaeedbf14814c1dc05dc10a7bc679c094c23fe4c6a41b165dfe08",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "展開 2x²+(m-6)x-3m。令 m-6=1，得 m=7。",
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
        "secondCorrectAnswer": "逐一檢查四選項：7：m=7 正確。；-7：m-6=-13。；-5：m-6=-11。；5：m-6=-1。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「中間項係數由兩交叉項組成」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由中間項求參數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「(2x+m)(x-3) 的 x 項係數為 1，則 m 為何？」獨立重算：展開 2x²+(m-6)x-3m。令 m-6=1，得 m=7。 正解「7」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "6a4999ed74a4e0153c0e7398991807f1e6aa60e29e3aa2ce0c2ee2053ae42a93"
    },
    {
      "reviewId": "u10-s008-v009-review",
      "questionId": "u10-s008-v009",
      "questionContentSha256": "8e3019c772e57a55a4d91b96363641c2a4d1de76e6a1472494319ce9f4393c6c",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x² 係數 3a=12 得 a=4；常數只由 2×(-1)=-2，與 a 無關。",
      "derivedAnswer": "-2",
      "storedAnswer": "-2",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-2：-2 正確。；-8：把 a 代入常數。；2：漏負號。；8：把 2×4。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把首項參數誤帶入常數項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由首項資訊判尾項，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (ax+2)(3x-1) 的 x² 項係數為 12，常數項為何？」獨立重算：x² 係數 3a=12 得 a=4；常數只由 2×(-1)=-2，與 a 無關。 正解「-2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "af0edea9d772ebb04c29b896495470a282630fbf14ad5a8246444cb8bafdb487"
    },
    {
      "reviewId": "u10-s008-v010-review",
      "questionId": "u10-s008-v010",
      "questionContentSha256": "7ec7eb8468c43e51fc9f0587365fd33518ca7b517d4928782cde81c328f5037f",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "面積=(x+5)(x+2)=x²+7x+10。",
      "derivedAnswer": "x²+7x+10 平方公尺",
      "storedAnswer": "x²+7x+10 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+10x+7 平方公尺：中間係數誤用 5×2。；2x²+7x+10 平方公尺：首項重複。；x²+7x+10 平方公尺：兩邊長相乘並合併交叉項。；x²+3x+10 平方公尺：把 5-2 當中間係數。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x>-2 可使兩邊為正；若 x 表示長度通常 x≥0。",
        "alternateReading": "常見誤讀「面積展開中間項錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：長方形面積二項式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "幾何邊長決定兩個二項式相乘，平方公尺單位不可由純代數題得知。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「長方形長 (x+5) 公尺、寬 (x+2) 公尺，面積為何？」獨立重算：面積=(x+5)(x+2)=x²+7x+10。 正解「x²+7x+10 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "459723a3c46a3b26b4c6de4d4accda130af184a7d53025f021fa71027a58e028"
    },
    {
      "reviewId": "u10-s008-v011-review",
      "questionId": "u10-s008-v011",
      "questionContentSha256": "7f6d1efd5d37a9d7cab27a5c36a1dc13188fea5781f3428ae52d855f5aa0464e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "銷售額=(x+20)(x-5)=x²+15x-100。",
      "derivedAnswer": "x²+15x-100 元",
      "storedAnswer": "x²+15x-100 元",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+15x+100 元：尾項符號錯。；x²+25x-100 元：中間項錯。；x²-15x-100 元：中間符號錯。；x²+15x-100 元：x²+15x-100 正確。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "元/件乘件數得到元。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "件數 x-5 應為非負整數，因此 x≥5。",
        "alternateReading": "常見誤讀「單價與數量乘法的尾項符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：銷售額模型，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「每件售價×售出件數」是情境必要乘法，並需保留元。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個商品每件售價 (x+20) 元，售出 (x-5) 件。總銷售額為何？」獨立重算：銷售額=(x+20)(x-5)=x²+15x-100。 正解「x²+15x-100 元」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "cd0c58a57b278d0b6464e8ee61442fe74500f08002b954d4d5309b3180394d15"
    },
    {
      "reviewId": "u10-s008-v012-review",
      "questionId": "u10-s008-v012",
      "questionContentSha256": "a8e0b83574c96c6fbc7a02e8c48c4e14b6a681adf208d085684157ccc89e7987",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "展開為 x²+5x+4，所以 x 項係數 5。",
      "derivedAnswer": "5",
      "storedAnswer": "5",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4：只取一邊常數。；5：5 正確。；6：把常數相乘後加 2。；8：把兩常數相乘。",
        "undefinedSymbol": "題幹用語均在「二項式乘法」講義定義。",
        "unitConflict": "展開式各項合計表示平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只計一個交叉區域」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：由面積模型讀係數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "兩邊增加量各形成一個交叉面積，係數 5 有幾何來源。",
      "prerequisiteCheck": "使用先備技能：monomial-polynomial-distribute；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某矩形花圃原邊長為 (x+1) 與 (x+4) 公尺。面積模型的 x 項係數是多少？」獨立重算：展開為 x²+5x+4，所以 x 項係數 5。 正解「5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "789653ae37af288a59bb515edde45c5f70fd4980f319bb8cc64116e8fc85d4a5"
    }
  ],
  "drawingSpecs": []
};
