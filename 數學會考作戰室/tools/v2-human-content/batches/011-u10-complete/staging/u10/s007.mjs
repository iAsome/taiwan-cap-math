// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s007-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-operations",
    "skillId": "monomial-polynomial-distribute",
    "lockedTitle": "單項式乘多項式",
    "title": "單項式乘多項式：分配律必須乘到每一項",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能把括號外單項式逐項相乘。",
      "能處理括號內負項與缺項。",
      "能先分配再合併所得同類項。"
    ],
    "prerequisites": [
      "monomial-multiply"
    ],
    "prerequisiteBridge": "先備技能 monomial-multiply 已建立下一步所需概念；本節專注於用分配律乘遍每一項並整理。",
    "glossary": [
      {
        "term": "分配律",
        "definition": "a(b+c)=ab+ac。"
      },
      {
        "term": "漏乘",
        "definition": "括號內某項沒有乘到外面的因數。"
      },
      {
        "term": "展開",
        "definition": "去除乘法括號並寫成多項式。"
      }
    ],
    "notation": [
      {
        "symbol": "−2x(3x²−x+4)",
        "meaning": "−2x 分別乘 3x²、−x、4。"
      }
    ],
    "conceptNarrative": [
      "單項式乘多項式是分配律的直接應用，括號外的單項式必須乘到括號內每一項，而且每一項要連同原本正負號一起處理。若括號內有 n 項，在合併或抵消前應得到 n 個乘積項；用箭頭或逐項打勾能檢查漏乘。展開後再按文字與次數辨認同類項，只有同類項才能合併。",
      "遇到負係數時可先只判斷各乘積的正負，再計算係數與文字。例如負二 x 乘負 x 會得到正二 x²；乘常數四只增加係數，不會多出另一個 x。把符號、係數、文字三部分分開能避免一次發生多種錯誤。",
      "巢狀括號依由內向外的順序展開，每完成一層就整理一次。若外面另有多項式要加減，應先完成乘法再合併同類項；最高次項可能因係數互為相反數而抵消，所以不能只看未化簡前的最高次數。"
    ],
    "formalDefinitions": [
      {
        "name": "單項式對多項式的分配",
        "statement": "m(A+B+…)=mA+mB+…。"
      }
    ],
    "formulas": [
      {
        "formula": "axᵐ(bxⁿ+c)=abxᵐ⁺ⁿ+ac",
        "conditions": [
          "所有括號內項都乘 axᵐ"
        ],
        "meaning": "分配律與指數律合用。"
      }
    ],
    "nonApplicableCases": [
      "不能只乘第一項。",
      "括號內負號不能忽略。",
      "分配後不同次方不能任意合併。",
      "若外因數為 0，整式結果為 0。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "標記括號內每一項。",
        "check": "完成此步後，確認內容仍符合「用分配律乘遍每一項並整理」。"
      },
      {
        "step": 2,
        "instruction": "外單項式與第一項相乘。",
        "check": "完成此步後，確認內容仍符合「用分配律乘遍每一項並整理」。"
      },
      {
        "step": 3,
        "instruction": "依序乘完其餘各項並保留符號。",
        "check": "完成此步後，確認內容仍符合「用分配律乘遍每一項並整理」。"
      },
      {
        "step": 4,
        "instruction": "合併可能出現的同類項。",
        "check": "完成此步後，確認內容仍符合「用分配律乘遍每一項並整理」。"
      },
      {
        "step": 5,
        "instruction": "用代入值檢查展開前後相等。",
        "check": "完成此步後，確認內容仍符合「用分配律乘遍每一項並整理」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "展開 3x(2x²-5)。",
        "solutionSteps": [
          "3x·2x²=6x³。",
          "3x·(-5)=-15x。"
        ],
        "answer": "6x³-15x。",
        "why": "括號內二項都必須乘三 x，常數負五也會留下 x 因數；兩個結果次數不同，不能再合併，因此保留三次項與一次項。"
      },
      {
        "exampleId": "L2",
        "prompt": "展開 -2a(3a²-a+4)。",
        "solutionSteps": [
          "三個乘積依序為 -6a³、+2a²、-8a。",
          "依次數遞減排列。"
        ],
        "answer": "-6a³+2a²-8a。",
        "why": "括號外負號與每項符號共同決定正負，特別是負二 a 乘負 a 會變正；三項的次數各異，逐項保留才能避免錯誤合併。"
      },
      {
        "exampleId": "L3",
        "prompt": "化簡 x(x+2)+3x。",
        "solutionSteps": [
          "先展開為 x²+2x+3x。",
          "合併兩個一次同類項。"
        ],
        "answer": "x²+5x。",
        "why": "分配律必須先完成，外加的三 x 並不在括號乘法中；展開後二 x 與三 x 才是同類項，可以合併，而 x² 必須獨立保留。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "漏乘常數項",
        "why": "只注意含未知數的項",
        "correction": "用箭頭逐項標記。"
      },
      {
        "mistake": "負數乘負項仍寫負",
        "why": "符號運算錯誤",
        "correction": "先單獨判正負。"
      },
      {
        "mistake": "把 2x·3 寫成 6x²",
        "why": "常數 3 沒有 x",
        "correction": "文字指數只加實際存在的 0。"
      },
      {
        "mistake": "展開後立刻把不同次數的項相加",
        "why": "只看到相同文字而忽略指數不同",
        "correction": "同時比較文字種類與每個指數，完全一致才合併係數。"
      }
    ],
    "selfCheck": [
      "我是否能把括號外單項式逐項相乘？",
      "我是否能處理括號內負項與缺項？",
      "我是否能先分配再合併所得同類項？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "外因數要乘括號內每一項。",
      "項的符號一起參與乘法。",
      "先展開再合併。",
      "可代入簡單值驗證。"
    ],
    "connections": {
      "previous": "上一技能 單項式乘法 提供本節所需工具。",
      "next": [
        "下一節兩個二項式相乘，每一項都要與另一括號的每一項配對。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s007-v001",
        "u10-s007-v002",
        "u10-s007-v003",
        "u10-s007-v004",
        "u10-s007-v005",
        "u10-s007-v006",
        "u10-s007-v007",
        "u10-s007-v008",
        "u10-s007-v009",
        "u10-s007-v010",
        "u10-s007-v011",
        "u10-s007-v012"
      ],
      "constructedResponseIds": [
        "u10-s007-cr001",
        "u10-s007-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「單項式乘多項式：分配律必須乘到每一項」：定義、3 個例題、錯誤推理與下一技能銜接均針對 monomial-polynomial-distribute；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "de85bd7e1623ff7b6eb5edee5795ac6b34829024c094e76a7e6584bdfa72d33b"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s007-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 3x(x+4)。",
      "givenConditions": [],
      "target": "正單項式分配",
      "choices": [
        "3x²+4",
        "3x+12",
        "3x²+12x",
        "3x²+7x"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "3x·x=3x²，3x·4=12x。",
        "derivedChoice": "3x²+12x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "外因數乘到括號內兩項。 分配律要求括號外三 x 同時乘括號內 x 與四，兩個乘積分別是三 x 二次方與十二 x；常數四也必須被乘且仍帶有一個 x。",
      "steps": [
        "3x·x=3x²，3x·4=12x。",
        "分別計算 3x·x 與 3x·4。",
        "寫成 3x²+12x，確認兩項不可合併。"
      ],
      "optionAnalysis": [
        {
          "choice": "3x²+4",
          "truth": false,
          "reason": "漏乘 4 的 x。"
        },
        {
          "choice": "3x+12",
          "truth": false,
          "reason": "第一項漏乘 x。"
        },
        {
          "choice": "3x²+12x",
          "truth": true,
          "reason": "3x²+12x 正確。"
        },
        {
          "choice": "3x²+7x",
          "truth": false,
          "reason": "把係數相加。"
        }
      ],
      "misconceptionTarget": "只乘部分因子 只把三 x 乘第一項，或把三 x 乘四寫成十二。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「正單項式分配」且四個選項以同一表示層級作答；逐項重算後只有「3x²+12x」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：正單項式分配，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s007-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1c333c8d0f732dad03db780d04a2ac49c4af6914907602acc094ba6c74c40b1d"
    },
    {
      "questionId": "u10-s007-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 -2a(3a-5)。",
      "givenConditions": [],
      "target": "負單項式分配",
      "choices": [
        "-6a²+10a",
        "-6a²-10a",
        "6a²+10a",
        "a²+10a"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "-2a·3a=-6a²；-2a·(-5)=+10a。",
        "derivedChoice": "-6a²+10a",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "負外因數逐項分配。 負二 a 要連同符號逐項分配，乘三 a 得負六 a 二次方，乘負五則負負得正十 a；兩項次數不同，不能再合併。",
      "steps": [
        "-2a·3a=-6a²。",
        "-2a·(-5)=+10a。",
        "保留兩個不同次數項，整理為 -6a²+10a。"
      ],
      "optionAnalysis": [
        {
          "choice": "-6a²+10a",
          "truth": true,
          "reason": "-6a²+10a 正確。"
        },
        {
          "choice": "-6a²-10a",
          "truth": false,
          "reason": "第二項符號錯。"
        },
        {
          "choice": "6a²+10a",
          "truth": false,
          "reason": "第一項符號錯。"
        },
        {
          "choice": "a²+10a",
          "truth": false,
          "reason": "係數乘法錯。"
        }
      ],
      "misconceptionTarget": "負乘負項符號錯 第二項仍寫負十 a，或把兩項誤合併成單一項。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「負單項式分配」且四個選項以同一表示層級作答；逐項重算後只有「-6a²+10a」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：負單項式分配，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s007-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c1428d06a92f3cb8b49461f23d97726eab30463ad130819ac5db14feb726ca84"
    },
    {
      "questionId": "u10-s007-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 x(2x²-x+3)。",
      "givenConditions": [],
      "target": "三項式分配",
      "choices": [
        "2x²-x+3",
        "2x³-x+3x",
        "2x³-x²+3",
        "2x³-x²+3x"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "x 分別乘三項得 2x³、-x²、3x。",
        "derivedChoice": "2x³-x²+3x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "每一項的 x 指數增加 1。 括號外 x 分別乘二 x 二次方、負 x 與三，得到二 x 三次方、負 x 二次方與三 x；三項都有被分配且沒有同類項可合併。",
      "steps": [
        "x 分別乘三項得 2x³、-x²、3x。",
        "逐項保留符號寫出三個乘積。",
        "依次數遞減排列成 2x³-x²+3x。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²-x+3",
          "truth": false,
          "reason": "完全漏乘 x。"
        },
        {
          "choice": "2x³-x+3x",
          "truth": false,
          "reason": "第二與第三項指數錯。"
        },
        {
          "choice": "2x³-x²+3",
          "truth": false,
          "reason": "第三項漏 x。"
        },
        {
          "choice": "2x³-x²+3x",
          "truth": true,
          "reason": "2x³-x²+3x 正確。"
        }
      ],
      "misconceptionTarget": "分配時漏乘某項 漏乘中間負項或常數項，導致項數與次數錯誤。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「三項式分配」且四個選項以同一表示層級作答；逐項重算後只有「2x³-x²+3x」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：三項式分配，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s007-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "dd66d4845193c79ef13955760227adfb4dc34be03ae0b262419d159daabf4750"
    },
    {
      "questionId": "u10-s007-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 2x(3x-1)+4x。",
      "givenConditions": [],
      "target": "分配後合併",
      "choices": [
        "6x²-6x",
        "6x²+2x",
        "10x²-2x",
        "6x²-2"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "先展開 6x²-2x，再合併 +4x，得 6x²+2x。",
        "derivedChoice": "6x²+2x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "展開後才合併同類項。 先用分配律把二 x 乘入括號，得到六 x 二次方減二 x；外面的正四 x 再與負二 x 合併為正二 x，二次項不能與一次項合併。",
      "steps": [
        "先展開 6x²-2x，再合併 +4x，得 6x²+2x。",
        "展開得到 6x²-2x+4x。",
        "合併同類的一次項為 2x，得 6x²+2x。"
      ],
      "optionAnalysis": [
        {
          "choice": "6x²-6x",
          "truth": false,
          "reason": "x 項加法錯。"
        },
        {
          "choice": "6x²+2x",
          "truth": true,
          "reason": "6x²+2x 正確。"
        },
        {
          "choice": "10x²-2x",
          "truth": false,
          "reason": "把 4x 與二次項合併。"
        },
        {
          "choice": "6x²-2",
          "truth": false,
          "reason": "漏掉 x。"
        }
      ],
      "misconceptionTarget": "展開後合併錯誤 把四 x 也乘進括號，或把六 x 二次方與一次項合併。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「分配後合併」且四個選項以同一表示層級作答；逐項重算後只有「6x²+2x」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：分配後合併，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s007-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e267bd3377f8cc8b488d84f3177ade13fa207d7b2b085ecac35b889370c3c32d"
    },
    {
      "questionId": "u10-s007-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 -3y(2y²+y-4)。",
      "givenConditions": [],
      "target": "三項符號分配",
      "choices": [
        "-6y³-3y²+12y",
        "-6y³+3y²-12y",
        "6y³-3y²+12y",
        "-6y³-3y²-12y"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "逐項得 -6y³、-3y²、+12y。",
        "derivedChoice": "-6y³-3y²+12y",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "負因數乘正項為負，乘 -4 為正。 負三 y 逐項乘二 y 二次方、正 y 與負四，符號依序為負、負、正，結果次數依序為三、二、一；負數乘負四產生正十二 y。",
      "steps": [
        "逐項得 -6y³、-3y²、+12y。",
        "計算三個乘積並保留各自符號。",
        "整理為 -6y³-3y²+12y。"
      ],
      "optionAnalysis": [
        {
          "choice": "-6y³-3y²+12y",
          "truth": true,
          "reason": "-6y³-3y²+12y 正確。"
        },
        {
          "choice": "-6y³+3y²-12y",
          "truth": false,
          "reason": "中間與末項符號錯。"
        },
        {
          "choice": "6y³-3y²+12y",
          "truth": false,
          "reason": "全部符號顛倒。"
        },
        {
          "choice": "-6y³-3y²-12y",
          "truth": false,
          "reason": "末項符號錯。"
        }
      ],
      "misconceptionTarget": "多項負號分配錯 漏掉常數負四的負號，將最後一項錯寫成負十二 y。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「三項符號分配」且四個選項以同一表示層級作答；逐項重算後只有「-6y³-3y²+12y」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：三項符號分配，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s007-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "64c71b321afbed0e5751b9b931164d796f02093d002a71198756d40228fbc5eb"
    },
    {
      "questionId": "u10-s007-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 kx(2x+3)=8x²+12x，則 k 為何？",
      "givenConditions": [],
      "target": "反求外因數",
      "choices": [
        "2",
        "3",
        "4",
        "6"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "比較首項係數 2k=8，得 k=4；再驗 3k=12 也成立。",
        "derivedChoice": "4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩項係數同時驗證。 展開左式為二 k x 二次方加三 k x；比較二次項係數得二 k 等於八，所以 k 為四，再以一次項三乘四等於十二確認同一 k 同時成立。",
      "steps": [
        "比較首項係數 2k=8，得 k=4。",
        "再驗 3k=12 也成立。",
        "代回 k=4，兩項係數分別為八與十二。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "展開得 4x²+6x。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "展開得 6x²+9x。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "k=4 正確。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "展開係數過大。"
        }
      ],
      "misconceptionTarget": "只比較一項或係數求解錯 只比較其中一項後不驗算，或把係數 k 漏乘括號內三。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「反求外因數」且四個選項以同一表示層級作答；逐項重算後只有「4」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：反求外因數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s007-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1f142c155429dabd8eaf4821ae40115ef177a4dee3576870b37d36a783a24b4c"
    },
    {
      "questionId": "u10-s007-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 2x[x(x-3)+4]。",
      "givenConditions": [],
      "target": "兩層分配",
      "choices": [
        "2x³-3x²+8",
        "2x³-6x²+8x",
        "2x²-6x+8",
        "2x³+2x"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "內層 x(x-3)+4=x²-3x+4；再乘 2x 得 2x³-6x²+8x。",
        "derivedChoice": "2x³-6x²+8x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "由內向外兩次分配。 巢狀括號由內向外展開，內層 x 乘 x 減三得到 x 二次方減三 x，再保留加四；外層二 x 最後乘遍三項，得到三個不同次數項。",
      "steps": [
        "內層 x(x-3)+4=x²-3x+4。",
        "再乘 2x 得 2x³-6x²+8x。",
        "將 2x 分配到 x²、-3x、4。",
        "得到 2x³-6x²+8x，三項不可再合併。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x³-3x²+8",
          "truth": false,
          "reason": "外層未乘所有項。"
        },
        {
          "choice": "2x³-6x²+8x",
          "truth": true,
          "reason": "完整正確。"
        },
        {
          "choice": "2x²-6x+8",
          "truth": false,
          "reason": "只做一次分配。"
        },
        {
          "choice": "2x³+2x",
          "truth": false,
          "reason": "錯誤合併不同次方。"
        }
      ],
      "misconceptionTarget": "巢狀分配漏步驟 只把外層二 x 乘內括號第一項，或漏乘常數四。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「兩層分配」且四個選項以同一表示層級作答；逐項重算後只有「2x³-6x²+8x」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：兩層分配，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s007-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7d993bb7d5e9ca4972812f4ca11990da4efb6c617a6c84ac96f41b979526160c"
    },
    {
      "questionId": "u10-s007-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 -x(2x²-3x+1)+2x³。",
      "givenConditions": [],
      "target": "分配與抵消",
      "choices": [
        "-4x³+3x²-x",
        "-3x²+x",
        "5x³-3x²+x",
        "3x²-x"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "展開為 -2x³+3x²-x，再加 2x³，三次項抵消，得 3x²-x。",
        "derivedChoice": "3x²-x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "分配後注意最高次項抵消。 負 x 乘入括號後三項符號為負、正、負；再加原式的正二 x 三次方，兩個三次項恰好抵消，只留下三 x 二次方減 x。",
      "steps": [
        "展開為 -2x³+3x²-x，再加 2x³，三次項抵消，得 3x²-x。",
        "寫成 -2x³+3x²-x+2x³。",
        "合併同類項，三次項為零，得 3x²-x。"
      ],
      "optionAnalysis": [
        {
          "choice": "-4x³+3x²-x",
          "truth": false,
          "reason": "把三次項相加錯。"
        },
        {
          "choice": "-3x²+x",
          "truth": false,
          "reason": "整體符號顛倒。"
        },
        {
          "choice": "5x³-3x²+x",
          "truth": false,
          "reason": "負號分配錯。"
        },
        {
          "choice": "3x²-x",
          "truth": true,
          "reason": "3x²-x 正確。"
        }
      ],
      "misconceptionTarget": "未看到分配後高次項抵消 括號前負號未分配到每一項，或抵消後仍保留三次項。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「分配與抵消」且四個選項以同一表示層級作答；逐項重算後只有「3x²-x」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：分配與抵消，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s007-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "250858dc677299148115c8f02e3f57f9cc83190df6c31f5662b8189d94fa0dc0"
    },
    {
      "questionId": "u10-s007-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 ax²(2x-1) 的展開式中 x³ 項係數為 10，則 x² 項係數為何？",
      "givenConditions": [],
      "target": "由一項係數求另一項",
      "choices": [
        "-10",
        "5",
        "10",
        "-5"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "展開為 2ax³-ax²。2a=10 得 a=5，所以 x² 項係數 -a=-5。",
        "derivedChoice": "-5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先由三次係數求 a，再讀二次係數。 展開時二 x 與 a x 二次方相乘產生二 a x 三次方，負一產生負 a x 二次方；由三次項係數十得 a 為五，因此二次項係數是負五。",
      "steps": [
        "展開為 2ax³-ax²。",
        "2a=10 得 a=5，所以 x² 項係數 -a=-5。",
        "把 a=5 代入 -a，得到 x² 項係數 -5。"
      ],
      "optionAnalysis": [
        {
          "choice": "-10",
          "truth": false,
          "reason": "把 -a 寫 -10。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "漏負號。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "直接抄 10。"
        },
        {
          "choice": "-5",
          "truth": true,
          "reason": "-5 正確。"
        }
      ],
      "misconceptionTarget": "參數求出後未代回另一項 求得 a 為五後忽略二次項前的負號，回答正五。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由一項係數求另一項」且四個選項以同一表示層級作答；逐項重算後只有「-5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由一項係數求另一項，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s007-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0459225b1e6744621992e19ac6ed7b802536879d3c06b8abc148e97ae45212ac"
    },
    {
      "questionId": "u10-s007-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "長方形長 3x 公尺、寬 (x+2) 公尺，面積為何？",
      "givenConditions": [],
      "target": "長方形面積",
      "choices": [
        "3x²+2 平方公尺",
        "3x²+6x 平方公尺",
        "4x+2 平方公尺",
        "3x²+5x 平方公尺"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "面積=3x(x+2)=3x²+6x。",
        "derivedChoice": "3x²+6x 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "長乘寬，單項式分配到寬的兩部分。 長方形面積為長乘寬，三 x 乘 x 加二時必須分別乘 x 與二，得到三 x 二次方加六 x；面積答案使用平方公尺。",
      "steps": [
        "面積=3x(x+2)=3x²+6x。",
        "列出 3x(x+2)。",
        "分配得 3x²+6x，並標示平方公尺。"
      ],
      "optionAnalysis": [
        {
          "choice": "3x²+2 平方公尺",
          "truth": false,
          "reason": "漏乘常數項的 x。"
        },
        {
          "choice": "3x²+6x 平方公尺",
          "truth": true,
          "reason": "3x²+6x 正確。"
        },
        {
          "choice": "4x+2 平方公尺",
          "truth": false,
          "reason": "把長寬相加。"
        },
        {
          "choice": "3x²+5x 平方公尺",
          "truth": false,
          "reason": "係數加法錯。"
        }
      ],
      "misconceptionTarget": "面積式漏分配 只將三 x 乘 x，或把二直接加成常數二。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「長方形面積」且四個選項以同一表示層級作答；逐項重算後只有「3x²+6x 平方公尺」成立。",
      "boundaryAudit": "實際長寬要求 x>0。",
      "difficultyReason": "素養：長方形面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "長與寬的幾何關係決定必須相乘，平方單位也由此產生。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s007-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "43f205923cbc5af1b32a245543695fbafdcb057bfb567b67c9630e0b1920756d"
    },
    {
      "questionId": "u10-s007-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "每張票 x 元，團體方案買 (2x+5) 張並另收 30x 元服務費。總費用為何？",
      "givenConditions": [],
      "target": "票價總成本",
      "choices": [
        "2x²+5x+30 元",
        "32x²+5x 元",
        "2x²+35x 元",
        "2x²+30x+5 元"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "票款=x(2x+5)=2x²+5x，再加 30x 得 2x²+35x。",
        "derivedChoice": "2x²+35x 元",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "「每張價格×張數」後再加服務費。 票款由單價 x 乘張數二 x 加五，展開為二 x 二次方加五 x；服務費三十 x 是額外同類的一次項，與五 x 合併為三十五 x。",
      "steps": [
        "票款=x(2x+5)=2x²+5x，再加 30x 得 2x²+35x。",
        "先求票款 2x²+5x。",
        "再加 30x，合併為 2x²+35x 元。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²+5x+30 元",
          "truth": false,
          "reason": "漏把服務費與 x 項合併。"
        },
        {
          "choice": "32x²+5x 元",
          "truth": false,
          "reason": "把服務費係數加到二次項。"
        },
        {
          "choice": "2x²+35x 元",
          "truth": true,
          "reason": "2x²+35x 正確。"
        },
        {
          "choice": "2x²+30x+5 元",
          "truth": false,
          "reason": "常數 5 未乘 x。"
        }
      ],
      "misconceptionTarget": "每單位價格與數量關係建模錯 把服務費也乘進票數，或漏將五 x 與三十 x 合併。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "x 元/張乘張數得元；30x 亦為元。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「票價總成本」且四個選項以同一表示層級作答；逐項重算後只有「2x²+35x 元」成立。",
      "boundaryAudit": "張數 2x+5 應為正整數。",
      "difficultyReason": "素養：票價總成本，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "每張票價、張數與服務費的不同角色決定先乘後加。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s007-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a962f41e5f3f5669bd91bacbd6df5e92f68f41b0ca46890e6c112a0c3cea81eb"
    },
    {
      "questionId": "u10-s007-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一排有 4x 個座位，共有 (x-1) 排。總座位數為何？",
      "givenConditions": [],
      "target": "座位陣列總數",
      "choices": [
        "4x²-4x 個",
        "4x²-1 個",
        "5x-1 個",
        "4x²+4x 個"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "總座位=4x(x-1)=4x²-4x。",
        "derivedChoice": "4x²-4x 個",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "每排座位乘排數。 總座位數是一排四 x 個乘排數 x 減一，分配後四 x 乘 x 得四 x 二次方，四 x 乘負一得負四 x；排數須為可行的正整數。",
      "steps": [
        "總座位=4x(x-1)=4x²-4x。",
        "列出 4x(x-1)。",
        "分配並整理為 4x²-4x 個。"
      ],
      "optionAnalysis": [
        {
          "choice": "4x²-4x 個",
          "truth": true,
          "reason": "4x²-4x 正確。"
        },
        {
          "choice": "4x²-1 個",
          "truth": false,
          "reason": "常數項未乘 4x。"
        },
        {
          "choice": "5x-1 個",
          "truth": false,
          "reason": "把兩量相加。"
        },
        {
          "choice": "4x²+4x 個",
          "truth": false,
          "reason": "負號錯。"
        }
      ],
      "misconceptionTarget": "忽略 x-1 的整體乘法 把每排與排數相加，或漏乘括號中的負一。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "座位/排乘排數得到座位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「座位陣列總數」且四個選項以同一表示層級作答；逐項重算後只有「4x²-4x 個」成立。",
      "boundaryAudit": "x 應使 4x 與 x-1 為正整數，因此 x>1。",
      "difficultyReason": "素養：座位陣列總數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「每排」與「共有幾排」要求乘法，結果為座位個數。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s007-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d11161e65eef153a7c3768dc0319f7f852d5152cfddaf5dc238f13b781df9b9e"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s007-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開並化簡 -2x(3x²-x+4)。",
      "requiredWork": [
        "外因數乘每一項。",
        "處理三個乘積的符號。"
      ],
      "standardSolution": [
        "-2x·3x²=-6x³。",
        "-2x·(-x)=+2x²。",
        "-2x·4=-8x。",
        "結果 -6x³+2x²-8x。",
        "三個乘積的次數依序為三、二、一，彼此不是同類項，故不能再合併；把 x=1 代入原式得 -2(3-1+4)=-12，展開式也得 -6+2-8=-12。",
        "代入檢查證明展開前後等值，負號與常數項均無遺漏。"
      ],
      "alternativeMethods": [
        "可用三格分配表逐格相乘。"
      ],
      "reasoningSteps": [
        "-2x·3x²=-6x³。",
        "-2x·(-x)=+2x²。",
        "-2x·4=-8x。",
        "結果 -6x³+2x²-8x。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "三個乘積與結果全對。"
        },
        {
          "score": 2,
          "criteria": "只一項符號/係數錯。"
        },
        {
          "score": 1,
          "criteria": "至少兩項有正確分配結構。"
        },
        {
          "score": 0,
          "criteria": "只乘第一項或無有效作答。"
        }
      ],
      "partialCreditRules": [
        "項順序不同但等價可接受。"
      ],
      "followThroughPolicy": "漏乘一項但其他兩項正確，給 1至2 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫正確結果無展開過程，最高 2 分。",
      "commonErrorTargets": [
        "括號前負二 x 只乘第一項，漏乘負 x 或常數四。",
        "計算負二 x 乘負 x 時仍寫負二 x²，沒有使用負負得正。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立逐項乘得 -6、+2、-8。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e33ca39f0f021408df8b315048834637a9c397bf8ce10f6f888835d8061bd6dc"
    },
    {
      "questionId": "u10-s007-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "monomial-polynomial-distribute",
      "skillSlot": "s007",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 3x[x(x-2)+5]-3x³，說明最高次項發生什麼變化。",
      "requiredWork": [
        "先處理內層。",
        "外層分配。",
        "合併最高次項。"
      ],
      "standardSolution": [
        "內層 x(x-2)+5=x²-2x+5。",
        "乘 3x 得 3x³-6x²+15x。",
        "再減 3x³，最高次項抵消，結果 -6x²+15x。",
        "最高次項三 x 三次方在前半展開式與後面的減三 x 三次方係數互為相反數，所以完全抵消，化簡後最高次數由三降為二；代入 x=1 時兩式皆為九。"
      ],
      "alternativeMethods": [
        "可先把 3x³ 與外層第一乘積預先配對抵消，再算其餘項。"
      ],
      "reasoningSteps": [
        "內層 x(x-2)+5=x²-2x+5。",
        "乘 3x 得 3x³-6x²+15x。",
        "再減 3x³，最高次項抵消，結果 -6x²+15x。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "完整展開、抵消說明與結果正確。"
        },
        {
          "score": 2,
          "criteria": "結果正確但未說明抵消，或單一算術錯。"
        },
        {
          "score": 1,
          "criteria": "完成內層或外層主要分配。"
        },
        {
          "score": 0,
          "criteria": "無合理分配。"
        }
      ],
      "partialCreditRules": [
        "若最後未合併 3x³-3x³，但其餘正確，給 2 分。"
      ],
      "followThroughPolicy": "早期內層係數錯，後續分配一致可給 1 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫 -6x²+15x，最高 2 分。",
      "commonErrorTargets": [
        "外層三 x 沒有乘到內層常數五，漏掉十五 x。",
        "減三 x³ 時只減係數或錯減二次項，未辨認同類的三次項恰好抵消。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立展開確認三次項係數 3-3=0。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a6e6a36a83161ffcb962dac71ab92aba23a3bcb9f9afab3ad9e0fca11206d041"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s007-v001-review",
      "questionId": "u10-s007-v001",
      "questionContentSha256": "1c333c8d0f732dad03db780d04a2ac49c4af6914907602acc094ba6c74c40b1d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "3x·x=3x²，3x·4=12x。",
      "derivedAnswer": "3x²+12x",
      "storedAnswer": "3x²+12x",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3x²+4：漏乘 4 的 x。；3x+12：第一項漏乘 x。；3x²+12x：3x²+12x 正確。；3x²+7x：把係數相加。",
        "undefinedSymbol": "題幹用語均在「單項式乘多項式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只乘部分因子」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：正單項式分配，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 3x(x+4)。」獨立重算：3x·x=3x²，3x·4=12x。 正解「3x²+12x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "ef8af98bf6b8eab83986335258479549d0a669867e08355bbdfc6a691ff5b948"
    },
    {
      "reviewId": "u10-s007-v002-review",
      "questionId": "u10-s007-v002",
      "questionContentSha256": "c1428d06a92f3cb8b49461f23d97726eab30463ad130819ac5db14feb726ca84",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "-2a·3a=-6a²；-2a·(-5)=+10a。",
      "derivedAnswer": "-6a²+10a",
      "storedAnswer": "-6a²+10a",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-6a²+10a：-6a²+10a 正確。；-6a²-10a：第二項符號錯。；6a²+10a：第一項符號錯。；a²+10a：係數乘法錯。",
        "undefinedSymbol": "題幹用語均在「單項式乘多項式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「負乘負項符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：負單項式分配，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 -2a(3a-5)。」獨立重算：-2a·3a=-6a²；-2a·(-5)=+10a。 正解「-6a²+10a」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "9e5e012a60aff4d52bc9fe48d45160ef65f5700ae383dccf27efd4456abf0cc4"
    },
    {
      "reviewId": "u10-s007-v003-review",
      "questionId": "u10-s007-v003",
      "questionContentSha256": "dd66d4845193c79ef13955760227adfb4dc34be03ae0b262419d159daabf4750",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x 分別乘三項得 2x³、-x²、3x。",
      "derivedAnswer": "2x³-x²+3x",
      "storedAnswer": "2x³-x²+3x",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²-x+3：完全漏乘 x。；2x³-x+3x：第二與第三項指數錯。；2x³-x²+3：第三項漏 x。；2x³-x²+3x：2x³-x²+3x 正確。",
        "undefinedSymbol": "題幹用語均在「單項式乘多項式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「分配時漏乘某項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：三項式分配，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 x(2x²-x+3)。」獨立重算：x 分別乘三項得 2x³、-x²、3x。 正解「2x³-x²+3x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a79c43de0e35d54a962d0dc5a5b44d36e62b8a90b2bb2c19fffa8871135e9357"
    },
    {
      "reviewId": "u10-s007-v004-review",
      "questionId": "u10-s007-v004",
      "questionContentSha256": "e267bd3377f8cc8b488d84f3177ade13fa207d7b2b085ecac35b889370c3c32d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "先展開 6x²-2x，再合併 +4x，得 6x²+2x。",
      "derivedAnswer": "6x²+2x",
      "storedAnswer": "6x²+2x",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：6x²-6x：x 項加法錯。；6x²+2x：6x²+2x 正確。；10x²-2x：把 4x 與二次項合併。；6x²-2：漏掉 x。",
        "undefinedSymbol": "題幹用語均在「單項式乘多項式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「展開後合併錯誤」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：分配後合併，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 2x(3x-1)+4x。」獨立重算：先展開 6x²-2x，再合併 +4x，得 6x²+2x。 正解「6x²+2x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "16f203e4782b177321ec75070456515fa2edc0187e157b5bb9015deb00273373"
    },
    {
      "reviewId": "u10-s007-v005-review",
      "questionId": "u10-s007-v005",
      "questionContentSha256": "64c71b321afbed0e5751b9b931164d796f02093d002a71198756d40228fbc5eb",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "逐項得 -6y³、-3y²、+12y。",
      "derivedAnswer": "-6y³-3y²+12y",
      "storedAnswer": "-6y³-3y²+12y",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-6y³-3y²+12y：-6y³-3y²+12y 正確。；-6y³+3y²-12y：中間與末項符號錯。；6y³-3y²+12y：全部符號顛倒。；-6y³-3y²-12y：末項符號錯。",
        "undefinedSymbol": "題幹用語均在「單項式乘多項式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「多項負號分配錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：三項符號分配，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 -3y(2y²+y-4)。」獨立重算：逐項得 -6y³、-3y²、+12y。 正解「-6y³-3y²+12y」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "851df44b3aab06fdd9691bc4e3d4fece5a5bcd40c825cf7525ee15889a7196b9"
    },
    {
      "reviewId": "u10-s007-v006-review",
      "questionId": "u10-s007-v006",
      "questionContentSha256": "1f142c155429dabd8eaf4821ae40115ef177a4dee3576870b37d36a783a24b4c",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "比較首項係數 2k=8，得 k=4；再驗 3k=12 也成立。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2：展開得 4x²+6x。；3：展開得 6x²+9x。；4：k=4 正確。；6：展開係數過大。",
        "undefinedSymbol": "題幹用語均在「單項式乘多項式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只比較一項或係數求解錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：反求外因數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 kx(2x+3)=8x²+12x，則 k 為何？」獨立重算：比較首項係數 2k=8，得 k=4；再驗 3k=12 也成立。 正解「4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "2ccc220ce3bf2cb989bf99d36a0e6b3cae26c4fab9b4badcb0014b4366e9caab"
    },
    {
      "reviewId": "u10-s007-v007-review",
      "questionId": "u10-s007-v007",
      "questionContentSha256": "7d993bb7d5e9ca4972812f4ca11990da4efb6c617a6c84ac96f41b979526160c",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "內層 x(x-3)+4=x²-3x+4；再乘 2x 得 2x³-6x²+8x。",
      "derivedAnswer": "2x³-6x²+8x",
      "storedAnswer": "2x³-6x²+8x",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x³-3x²+8：外層未乘所有項。；2x³-6x²+8x：完整正確。；2x²-6x+8：只做一次分配。；2x³+2x：錯誤合併不同次方。",
        "undefinedSymbol": "題幹用語均在「單項式乘多項式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「巢狀分配漏步驟」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：兩層分配，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 2x[x(x-3)+4]。」獨立重算：內層 x(x-3)+4=x²-3x+4；再乘 2x 得 2x³-6x²+8x。 正解「2x³-6x²+8x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "b6cf2f2acafb028131387423d2eedb61a430a8aedcfea1b7fb35f1f78e65ddca"
    },
    {
      "reviewId": "u10-s007-v008-review",
      "questionId": "u10-s007-v008",
      "questionContentSha256": "250858dc677299148115c8f02e3f57f9cc83190df6c31f5662b8189d94fa0dc0",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "展開為 -2x³+3x²-x，再加 2x³，三次項抵消，得 3x²-x。",
      "derivedAnswer": "3x²-x",
      "storedAnswer": "3x²-x",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-4x³+3x²-x：把三次項相加錯。；-3x²+x：整體符號顛倒。；5x³-3x²+x：負號分配錯。；3x²-x：3x²-x 正確。",
        "undefinedSymbol": "題幹用語均在「單項式乘多項式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未看到分配後高次項抵消」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：分配與抵消，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 -x(2x²-3x+1)+2x³。」獨立重算：展開為 -2x³+3x²-x，再加 2x³，三次項抵消，得 3x²-x。 正解「3x²-x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "f34961eb40c7a35a91706e46f089be5f136fd42217c50d94bfb2f006a7fe8b12"
    },
    {
      "reviewId": "u10-s007-v009-review",
      "questionId": "u10-s007-v009",
      "questionContentSha256": "0459225b1e6744621992e19ac6ed7b802536879d3c06b8abc148e97ae45212ac",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "展開為 2ax³-ax²。2a=10 得 a=5，所以 x² 項係數 -a=-5。",
      "derivedAnswer": "-5",
      "storedAnswer": "-5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-10：把 -a 寫 -10。；5：漏負號。；10：直接抄 10。；-5：-5 正確。",
        "undefinedSymbol": "題幹用語均在「單項式乘多項式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「參數求出後未代回另一項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由一項係數求另一項，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 ax²(2x-1) 的展開式中 x³ 項係數為 10，則 x² 項係數為何？」獨立重算：展開為 2ax³-ax²。2a=10 得 a=5，所以 x² 項係數 -a=-5。 正解「-5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "6087093ef796ec0b5d6f210c897a097d20594cfd3a7f0a6918819b7e326e2019"
    },
    {
      "reviewId": "u10-s007-v010-review",
      "questionId": "u10-s007-v010",
      "questionContentSha256": "43f205923cbc5af1b32a245543695fbafdcb057bfb567b67c9630e0b1920756d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "面積=3x(x+2)=3x²+6x。",
      "derivedAnswer": "3x²+6x 平方公尺",
      "storedAnswer": "3x²+6x 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3x²+2 平方公尺：漏乘常數項的 x。；3x²+6x 平方公尺：3x²+6x 正確。；4x+2 平方公尺：把長寬相加。；3x²+5x 平方公尺：係數加法錯。",
        "undefinedSymbol": "題幹用語均在「單項式乘多項式」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "實際長寬要求 x>0。",
        "alternateReading": "常見誤讀「面積式漏分配」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：長方形面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "長與寬的幾何關係決定必須相乘，平方單位也由此產生。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「長方形長 3x 公尺、寬 (x+2) 公尺，面積為何？」獨立重算：面積=3x(x+2)=3x²+6x。 正解「3x²+6x 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "f59092b1068f505b1a5b5517b00d4e42badfcd902682896e6b2f6a08508a2b7a"
    },
    {
      "reviewId": "u10-s007-v011-review",
      "questionId": "u10-s007-v011",
      "questionContentSha256": "a962f41e5f3f5669bd91bacbd6df5e92f68f41b0ca46890e6c112a0c3cea81eb",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "票款=x(2x+5)=2x²+5x，再加 30x 得 2x²+35x。",
      "derivedAnswer": "2x²+35x 元",
      "storedAnswer": "2x²+35x 元",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²+5x+30 元：漏把服務費與 x 項合併。；32x²+5x 元：把服務費係數加到二次項。；2x²+35x 元：2x²+35x 正確。；2x²+30x+5 元：常數 5 未乘 x。",
        "undefinedSymbol": "題幹用語均在「單項式乘多項式」講義定義。",
        "unitConflict": "x 元/張乘張數得元；30x 亦為元。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "張數 2x+5 應為正整數。",
        "alternateReading": "常見誤讀「每單位價格與數量關係建模錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：票價總成本，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "每張票價、張數與服務費的不同角色決定先乘後加。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「每張票 x 元，團體方案買 (2x+5) 張並另收 30x 元服務費。總費用為何？」獨立重算：票款=x(2x+5)=2x²+5x，再加 30x 得 2x²+35x。 正解「2x²+35x 元」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "b96a00f4d64e2656499aa930e5611d80e6e23e334d86b629528402443b198b60"
    },
    {
      "reviewId": "u10-s007-v012-review",
      "questionId": "u10-s007-v012",
      "questionContentSha256": "d11161e65eef153a7c3768dc0319f7f852d5152cfddaf5dc238f13b781df9b9e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "總座位=4x(x-1)=4x²-4x。",
      "derivedAnswer": "4x²-4x 個",
      "storedAnswer": "4x²-4x 個",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4x²-4x 個：4x²-4x 正確。；4x²-1 個：常數項未乘 4x。；5x-1 個：把兩量相加。；4x²+4x 個：負號錯。",
        "undefinedSymbol": "題幹用語均在「單項式乘多項式」講義定義。",
        "unitConflict": "座位/排乘排數得到座位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x 應使 4x 與 x-1 為正整數，因此 x>1。",
        "alternateReading": "常見誤讀「忽略 x-1 的整體乘法」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：座位陣列總數，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「每排」與「共有幾排」要求乘法，結果為座位個數。",
      "prerequisiteCheck": "使用先備技能：monomial-multiply；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一排有 4x 個座位，共有 (x-1) 排。總座位數為何？」獨立重算：總座位=4x(x-1)=4x²-4x。 正解「4x²-4x 個」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "4ace9cde23326d3fab9313b427716df6a177daa2bf41becbfc851545598e0f26"
    }
  ],
  "drawingSpecs": []
};
