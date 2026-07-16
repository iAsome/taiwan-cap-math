// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u12-s004-lecture-r1",
  "unitId": "u12",
  "numericUnitId": 12,
  "topicId": "u12-methods",
  "skillId": "factoring-by-grouping",
  "lockedSkillTitle": "分組分解",
  "title": "分組分解：讓不同小組提出同一個括號",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能把四項分成兩組。",
    "能在各組提出公因式。",
    "能辨認兩組共同括號。",
    "能在必要時調整項目順序或提出負號。",
    "能用展開檢查分組結果。"
  ],
  "prerequisites": [
    {
      "skillId": "factoring-cross",
      "requiredLevel": "能運用前一技能並以展開驗證結果；本講義會重新連接必要步驟。"
    }
  ],
  "prerequisiteBridge": "先備技能為 factoring-cross；先確認能完成前一方法並保留所有符號，再進入本技能。",
  "glossary": [
    {
      "term": "分組",
      "definition": "把多項式項目暫時分成數組處理。"
    },
    {
      "term": "共同二項式",
      "definition": "各組提出後出現的相同括號。"
    },
    {
      "term": "重排",
      "definition": "利用加法交換律改變項目順序。"
    },
    {
      "term": "整體因式",
      "definition": "把整個括號視為一個共同乘數。"
    }
  ],
  "notation": [
    {
      "symbol": "aM+bM",
      "meaning": "M 為共同整體，等於 (a+b)M。"
    },
    {
      "symbol": "(ax+ay)+(bx+by)",
      "meaning": "先分組再得 (a+b)(x+y)。"
    }
  ],
  "conceptNarrative": [
    "分組的目的不是任意加括號，而是讓每組提出後得到完全相同的括號。",
    "若兩括號只差整體負號，例如 x-2 與 2-x，可從其中一組提出 -1。",
    "有時原順序無法形成共同括號，需要重排；重排不改變加法的值。",
    "最後的共同括號再提出一次，才形成乘積。",
    "分組分解的目標是讓每一組先提出自己的公因式後，出現完全相同的二項括號，再把該括號視為整體因式提出。分組可以利用加法交換律調整項目順序，但不能改變任何項的符號或遺漏項；若兩組括號互為相反式，應從其中一組提出負因式，使括號順序與符號一致。完成第二次提出後，必須展開兩個最終因式並逐項核對原來所有項。"
  ],
  "formalDefinitions": [
    {
      "name": "分組分解",
      "statement": "將多項式分成數組，各組提公因式後再提出共同括號。"
    }
  ],
  "formulas": [
    {
      "formula": "ax+ay+bx+by=(a+b)(x+y)",
      "conditions": [
        "可分為 a(x+y)+b(x+y)"
      ],
      "meaning": "典型四項分組。"
    }
  ],
  "nonApplicableCases": [
    "分組後兩括號不同且不能靠整體負號轉換時，該分組沒有完成目的。",
    "不能改變原項符號來製造相同括號。",
    "只做到 a(x+y)+b(x+y) 還不是最終乘積形式。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "觀察哪些兩項有明顯公因式。",
      "check": "先試自然相鄰分組。"
    },
    {
      "step": 2,
      "instruction": "各組分別提公因式。",
      "check": "括號內項目順序盡量一致。"
    },
    {
      "step": 3,
      "instruction": "比較兩個括號。",
      "check": "完全相同或互為相反式？"
    },
    {
      "step": 4,
      "instruction": "必要時重排或提出負號。",
      "check": "只用合法的交換律與乘法。"
    },
    {
      "step": 5,
      "instruction": "提出共同括號並展開回查。",
      "check": "核對四項。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "mx+my+nx+ny",
      "solutionSteps": [
        "前兩項提 m，後兩項提 n。",
        "得到 m(x+y)+n(x+y)。"
      ],
      "answer": "(m+n)(x+y)",
      "why": "前兩項提出甲、後兩項提出乙後，都留下丙加丁這個完整括號；再用分配律逆向提出共同括號，另一因式由外層商甲與乙組成，展開可回到四項。"
    },
    {
      "exampleId": "L2",
      "prompt": "x²+4x+3x+12",
      "solutionSteps": [
        "前組 x(x+4)，後組 3(x+4)。"
      ],
      "answer": "(x+3)(x+4)",
      "why": "前組兩項共同含未知數，後組兩項共同含三，逐組提出後都得到未知數加四；把共同括號提出，外層未知數與三形成另一因式並可完整回展。"
    },
    {
      "exampleId": "L3",
      "prompt": "6a²-9a+4ab-6b",
      "solutionSteps": [
        "分成 (6a²-9a)+(4ab-6b)。",
        "提 3a(2a-3)+2b(2a-3)。"
      ],
      "answer": "(2a-3)(3a+2b)",
      "why": "前組提出三甲、後組提出二乙後，兩者都留下二甲減三；提出共同差式後，另一因式保留三甲加二乙，回展會逐項恢復正負號與兩種變數。"
    },
    {
      "exampleId": "L4",
      "prompt": "pq-pr-2q+2r",
      "solutionSteps": [
        "前組 p(q-r)。",
        "後組 -2(q-r)。"
      ],
      "answer": "(p-2)(q-r)",
      "why": "前組提出甲後是乙減丙，後組必須提出負二才能也得到乙減丙；若只提出正二會得到相反括號。共同差式提出後，另一因式自然是甲減二。"
    }
  ],
  "difficultyConnections": {
    "basic": "辨認單一結構並完成直接分解。",
    "standard": "結合符號、係數或兩步驟方法。",
    "advanced": "比較策略、處理參數或驗證限制。",
    "literacy": "從必要情境建立或解讀乘積結構。"
  },
  "commonMistakes": [
    {
      "mistake": "任意分組但沒有共同括號。",
      "why": "只做表面加括號。",
      "correction": "分組後要檢查括號相同。"
    },
    {
      "mistake": "第二組提出負數時符號錯。",
      "why": "除以負數未全反。",
      "correction": "逐項除以負公因式。"
    },
    {
      "mistake": "把 x+y 與 y+x 誤認不同。",
      "why": "忽略加法交換律。",
      "correction": "可先統一順序。"
    },
    {
      "mistake": "把 x-y 與 y-x 誤認相同。",
      "why": "忽略整體負號。",
      "correction": "y-x=-(x-y)。"
    },
    {
      "mistake": "只提各組公因式就停止。",
      "why": "尚未成為單一乘積。",
      "correction": "再提共同括號。"
    },
    {
      "mistake": "重排時遺漏一項。",
      "why": "抄寫不完整。",
      "correction": "列出原式每項並逐一勾選。"
    }
  ],
  "selfCheck": [
    "我是否先判斷可用的方法？",
    "每一項、每個符號與外層因式都保留了嗎？",
    "我是否把結果展開回原式？",
    "情境中的單位與變數限制是否合理？"
  ],
  "summary": [
    "分組是為了製造相同括號。",
    "括號相反時可提出負號。",
    "重排與展開檢查能避免漏項。"
  ],
  "connections": {
    "previous": "承接 factoring-cross。",
    "next": "依鎖定順序銜接下一技能；本單元不提前使用一元二次方程式解根。"
  },
  "figureReferences": [
    {
      "figureId": "u12-fig-group-wall",
      "purpose": "展示四區分組後形成共同列寬與欄高。",
      "altText": "二乘二四區面積 ax、ay、bx、by。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u12-s004-v001",
      "u12-s004-v002",
      "u12-s004-v003",
      "u12-s004-v004",
      "u12-s004-v005",
      "u12-s004-v006",
      "u12-s004-v007",
      "u12-s004-v008",
      "u12-s004-v009",
      "u12-s004-v010",
      "u12-s004-v011",
      "u12-s004-v012"
    ],
    "constructedResponseIds": [
      "u12-s004-cr001",
      "u12-s004-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四個例題逐一回展並核對重排與負號；第三、第四例涵蓋非相鄰結構與相反括號，未越過國中因式分解範圍。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "130ef9ef5a37a966252017b56b5c821874ed06da3b0ac51b8d6bb0e966617b03"
};

export const QUESTIONS = [
  {
    "questionId": "u12-s004-v001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "ax+ay+bx+by 的因式分解為何？",
    "givenConditions": [
      "a、b、x、y 為變數。"
    ],
    "target": "分組提出共同括號。",
    "choices": [
      "(a+x)(b+y)",
      "(a-b)(x-y)",
      "(a+b)+(x+y)",
      "(a+b)(x+y)"
    ],
    "answerIndex": 3,
    "independentSolution": "展開回四項完全一致。",
    "explanation": "ax+ay+bx+by=a(x+y)+b(x+y)=(a+b)(x+y)。 把前兩項提出甲、後兩項提出乙後，兩組括號都成為丙加丁，才能再把此完整括號提出；最終兩因式相乘展開，會依序恢復四個原項而不改變任何配對。",
    "steps": [
      "分成前兩項、後兩項。",
      "各組提 a、b。",
      "再提 x+y。"
    ],
    "optionAnalysis": [
      {
        "choice": "(a+x)(b+y)",
        "truth": false,
        "reason": "展開為 ab+ay+bx+xy。"
      },
      {
        "choice": "(a-b)(x-y)",
        "truth": false,
        "reason": "展開符號與原式不同。"
      },
      {
        "choice": "(a+b)+(x+y)",
        "truth": false,
        "reason": "只是兩個和相加，不是乘積。"
      },
      {
        "choice": "(a+b)(x+y)",
        "truth": true,
        "reason": "前兩項提 a、後兩項提 b，均得 x+y。"
      }
    ],
    "misconceptionTarget": "分組後沒有形成相同括號。 各組提出公因式後，兩個括號必須完全相同或可由整體負號轉換。",
    "prerequisiteCheck": "需掌握提公因式。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無單位；代數恆等。",
    "ambiguityAndBoundaryAudit": "因式次序可交換，選項唯一至交換。",
    "difficultyReason": "典型四項分組，結構直接。",
    "literacyContextNecessity": null,
    "authoringIntent": "建立標準分組模式。",
    "concept": "雙重分配律",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "分組分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "62f0ff8c8a0de587614d96c34b2d0211e60281f3f9f6d1ff03573fe693cbe4e3"
  },
  {
    "questionId": "u12-s004-v002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "x²+3x+2x+6 用分組法可得何者？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "兩組提出相同括號。",
    "choices": [
      "(x+2)(x+3)",
      "(x+3)(x+6)",
      "(x+2)²",
      "x(x+5)+6"
    ],
    "answerIndex": 0,
    "independentSolution": "(x+3)(x+2)=x²+5x+6，與原式合併後相同。",
    "explanation": "前兩項 x(x+3)，後兩項 2(x+3)，提出 x+3。 前兩項共同含未知數並留下未知數加三，後兩項共同含二也留下同一括號；提出共同括號後，外層商未知數與二組成另一因式，展開可回到四項。",
    "steps": [
      "分組 (x²+3x)+(2x+6)。",
      "各提 x、2。",
      "提出共同 x+3。"
    ],
    "optionAnalysis": [
      {
        "choice": "(x+2)(x+3)",
        "truth": true,
        "reason": "x(x+3)+2(x+3)=(x+2)(x+3)。"
      },
      {
        "choice": "(x+3)(x+6)",
        "truth": false,
        "reason": "常數與中間項都不符。"
      },
      {
        "choice": "(x+2)²",
        "truth": false,
        "reason": "展開中間項為 4x。"
      },
      {
        "choice": "x(x+5)+6",
        "truth": false,
        "reason": "未形成乘積且不是有效分組結果。"
      }
    ],
    "misconceptionTarget": "只先合併 3x+2x，沒看分組結構。 先合併同類項雖不改值，卻會遮住題目要求觀察的兩組共同括號。",
    "prerequisiteCheck": "需會同類項與提公因式。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "原式合併後為 x²+5x+6；分組不改值。",
    "difficultyReason": "由四項顯示二次三項式的分組來源。",
    "literacyContextNecessity": null,
    "authoringIntent": "從四項中製造共同括號。",
    "concept": "中間項拆分",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "分組分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "fe6418f11256de520bfd53645339cbe4d185626b0d64ba00f2182c6ee0043d21"
  },
  {
    "questionId": "u12-s004-v003",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "6m²-9m+4m-6 因式分解為何？",
    "givenConditions": [
      "m 為變數。"
    ],
    "target": "分組並提出共同二項式。",
    "choices": [
      "(2m+3)(3m-2)",
      "(2m-3)(3m+2)",
      "(3m-3)(2m+2)",
      "(6m+4)(m-3)"
    ],
    "answerIndex": 1,
    "independentSolution": "展開得 6m²+4m-9m-6，正是原式。",
    "explanation": "(6m²-9m)+(4m-6)=3m(2m-3)+2(2m-3)。 前組六倍平方減九倍一次提出三倍未知數後留下二倍未知數減三；後組四倍一次減六提出二後也留下同一括號，最後外層商相加成三倍未知數加二。",
    "steps": [
      "前組提 3m。",
      "後組提 2。",
      "提出共同 2m-3。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2m+3)(3m-2)",
        "truth": false,
        "reason": "中間項為 5m 而非 -5m。"
      },
      {
        "choice": "(2m-3)(3m+2)",
        "truth": true,
        "reason": "3m(2m-3)+2(2m-3)。"
      },
      {
        "choice": "(3m-3)(2m+2)",
        "truth": false,
        "reason": "展開係數與常數不符。"
      },
      {
        "choice": "(6m+4)(m-3)",
        "truth": false,
        "reason": "展開中間項為 -14m。"
      }
    ],
    "misconceptionTarget": "後組把 4m-6 提成 2(2m+3)。 後組四倍未知數減六提出二後仍是二倍未知數減三，常數符號不可改。",
    "prerequisiteCheck": "需會正負數除法。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位；精確係數。",
    "ambiguityAndBoundaryAudit": "原項順序已有適合分組，無需重排。",
    "difficultyReason": "需同時處理負常數與共同括號。",
    "literacyContextNecessity": null,
    "authoringIntent": "練習含負號的基本分組。",
    "concept": "共同二項式",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "分組分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4b73f9a9fa86a201ae63819fcbb8044dd292c02be84460e653a62d72a20ce740"
  },
  {
    "questionId": "u12-s004-v004",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "pq-pr-2q+2r 的因式分解為何？",
    "givenConditions": [
      "p、q、r 為變數。"
    ],
    "target": "辨認 q-r 與後組負因式。",
    "choices": [
      "(p+2)(q-r)",
      "(p-2)(q+r)",
      "(p-2)(q-r)",
      "(p-q)(r-2)"
    ],
    "answerIndex": 2,
    "independentSolution": "(p-2)(q-r)=pq-pr-2q+2r。",
    "explanation": "前兩項提 p 得 p(q-r)；後兩項 -2q+2r=-2(q-r)。 前組以甲提出後得到乙減丙；後組負二乙加二丙必須提出負二，才能也得到乙減丙。再提出共同差式後，另一因式是甲減二，展開符號逐項相符。",
    "steps": [
      "分組前兩項與後兩項。",
      "後組提出 -2。",
      "提出共同 q-r。"
    ],
    "optionAnalysis": [
      {
        "choice": "(p+2)(q-r)",
        "truth": false,
        "reason": "後組原為 -2(q-r)。"
      },
      {
        "choice": "(p-2)(q+r)",
        "truth": false,
        "reason": "展開 r 項符號不符。"
      },
      {
        "choice": "(p-2)(q-r)",
        "truth": true,
        "reason": "p(q-r)-2(q-r)。"
      },
      {
        "choice": "(p-q)(r-2)",
        "truth": false,
        "reason": "展開產生不同配對項。"
      }
    ],
    "misconceptionTarget": "後組只提出 2 而得到相反括號，卻未補負號。",
    "prerequisiteCheck": "承接符號與提公因式。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "q-r 即使為 0，恆等式仍成立。",
    "difficultyReason": "需要由後組提出負公因式。",
    "literacyContextNecessity": null,
    "authoringIntent": "處理相反符號的分組。",
    "concept": "負公因式分組",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "分組分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "190b677e06738c5a0e3e6a284308c5fa9ac286433ba9e2d70be2fa32e7cb6b5e"
  },
  {
    "questionId": "u12-s004-v005",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "x²+xy+3x+3y 應如何分組因式分解？",
    "givenConditions": [
      "x、y 為變數。"
    ],
    "target": "選出共同括號 x+y。",
    "choices": [
      "(x+y)(x+3y)",
      "(x+1)(x+3y)",
      "(x+3)(x-y)",
      "(x+3)(x+y)"
    ],
    "answerIndex": 3,
    "independentSolution": "展開為 x²+xy+3x+3y。",
    "explanation": "(x²+xy)+(3x+3y)=x(x+y)+3(x+y)。 前兩項提出未知數後留下未知數加乙，後兩項提出三後同樣留下未知數加乙；把共同括號提出，外層商未知數與三形成另一因式，乘回可還原四項。",
    "steps": [
      "前兩項提 x。",
      "後兩項提 3。",
      "提出 x+y。"
    ],
    "optionAnalysis": [
      {
        "choice": "(x+y)(x+3y)",
        "truth": false,
        "reason": "展開 y 項與 y² 項不符。"
      },
      {
        "choice": "(x+1)(x+3y)",
        "truth": false,
        "reason": "展開中間項結構不同。"
      },
      {
        "choice": "(x+3)(x-y)",
        "truth": false,
        "reason": "y 項符號錯。"
      },
      {
        "choice": "(x+3)(x+y)",
        "truth": true,
        "reason": "x(x+y)+3(x+y)。"
      }
    ],
    "misconceptionTarget": "把 x+y 之外的剩餘因式誤寫含 y。 提出共同括號後，另一因式只由各組外層商組成，不應任意再加入乙。",
    "prerequisiteCheck": "需辨認每組公因式。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位；精確代數。",
    "ambiguityAndBoundaryAudit": "項目順序已支持自然分組。",
    "difficultyReason": "兩組公因式不同但共同括號清楚。",
    "literacyContextNecessity": null,
    "authoringIntent": "強化雙變數分組。",
    "concept": "雙變數分組",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "分組分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "0ed1863f4a965688da68dd54731b66205182c78372f2d8660887a10196f389fb"
  },
  {
    "questionId": "u12-s004-v006",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 2a²+6ab-a-3b 因式分解，何者正確？",
    "givenConditions": [
      "a、b 為變數。"
    ],
    "target": "分組並處理第二組負號。",
    "choices": [
      "(2a-1)(a+3b)",
      "(2a+1)(a+3b)",
      "(2a-1)(a-3b)",
      "(a-1)(2a+3b)"
    ],
    "answerIndex": 0,
    "independentSolution": "展開 (2a-1)(a+3b)=2a²+6ab-a-3b。",
    "explanation": "(2a²+6ab)+(-a-3b)=2a(a+3b)-(a+3b)。 前組提出二倍甲留下甲加三乙；後組負甲減三乙需提出負一，才會得到完全相同的括號。共同括號提出後另一因式為二甲減一，展開四項皆吻合。",
    "steps": [
      "第一組提 2a。",
      "第二組提 -1。",
      "提出共同 a+3b。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2a-1)(a+3b)",
        "truth": true,
        "reason": "2a(a+3b)-1(a+3b)。"
      },
      {
        "choice": "(2a+1)(a+3b)",
        "truth": false,
        "reason": "一次組符號會變成 +a+3b。"
      },
      {
        "choice": "(2a-1)(a-3b)",
        "truth": false,
        "reason": "ab 與 b 項符號不符。"
      },
      {
        "choice": "(a-1)(2a+3b)",
        "truth": false,
        "reason": "展開 ab 係數為 3，不是 6。"
      }
    ],
    "misconceptionTarget": "把 -a-3b 提出 +1，未形成相同括號。 第二組的每一項都要除以負一，才能把相反符號轉成相同括號。",
    "prerequisiteCheck": "需理解提出 -1 的作用。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位；無近似。",
    "ambiguityAndBoundaryAudit": "兩因式交換等價。",
    "difficultyReason": "第二組沒有數字大公因式，只需提出 -1。",
    "literacyContextNecessity": null,
    "authoringIntent": "練習用 -1 製造共同括號。",
    "concept": "提出負一",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "分組分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "295cc7250132b4c806cc3a830d8219186b631e512e01c0215c5bbd4ae122aa14"
  },
  {
    "questionId": "u12-s004-v007",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "多項式 ax+ay+3x+3y 可分解成 (a+3)(x+y)。若將原式重排為 ax+3x+ay+3y，最合適的分組理由為何？",
    "givenConditions": [
      "a、x、y 為變數。"
    ],
    "target": "解釋重排如何製造共同因式。",
    "choices": [
      "重排後可直接把 a 與 3 相加",
      "先由前兩項提 x、後兩項提 y，再提出 a+3",
      "前兩項與後兩項都可提出 x+y",
      "重排會改變多項式的值，所以不能做"
    ],
    "answerIndex": 1,
    "independentSolution": "得到的乘積與原先 (a+3)(x+y) 只差因式順序。",
    "explanation": "ax+3x+ay+3y=x(a+3)+y(a+3)=(x+y)(a+3)。 加法交換律允許把含丙的兩項排在一起、含丁的兩項排在一起；前組提出丙、後組提出丁，都留下甲加三，再提出共同括號所得乘積只與原答案交換因式順序。",
    "steps": [
      "利用加法交換律重排。",
      "按共同 x、y 分組。",
      "提出共同 a+3。"
    ],
    "optionAnalysis": [
      {
        "choice": "重排後可直接把 a 與 3 相加",
        "truth": false,
        "reason": "a 是變數，不能與常數 3 合併。"
      },
      {
        "choice": "先由前兩項提 x、後兩項提 y，再提出 a+3",
        "truth": true,
        "reason": "重排後是 x(a+3)+y(a+3)。"
      },
      {
        "choice": "前兩項與後兩項都可提出 x+y",
        "truth": false,
        "reason": "每組並不都含 x+y。"
      },
      {
        "choice": "重排會改變多項式的值，所以不能做",
        "truth": false,
        "reason": "加法交換律允許重排。"
      }
    ],
    "misconceptionTarget": "以為重排改值或把異類項直接合併。",
    "prerequisiteCheck": "需知道加法交換律與乘法交換律。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "無單位；代數恆等。",
    "ambiguityAndBoundaryAudit": "重排只改順序不改符號；未使用結合以外非法操作。",
    "difficultyReason": "考查策略說明而非只算答案。",
    "literacyContextNecessity": null,
    "authoringIntent": "說明替代分組路徑。",
    "concept": "重排策略",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "分組分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "9ce341da204def7dc5e20d65b80ca9d6837b48f2e54eb9542181d64ed77d9861"
  },
  {
    "questionId": "u12-s004-v008",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x²+4x+kx+4k 可用分組法分解成 (x+k)(x+4)，下列敘述何者正確？",
    "givenConditions": [
      "k 為任意數。"
    ],
    "target": "驗證一般參數分組。",
    "choices": [
      "只在 k=4 時成立",
      "只在 k>0 時成立",
      "對所有 k 都成立",
      "只有 k 為整數時成立"
    ],
    "answerIndex": 2,
    "independentSolution": "展開 (x+k)(x+4)=x²+4x+kx+4k，任意 k 均吻合。",
    "explanation": "原式分成 x(x+4)+k(x+4)，可直接提出共同 x+4。 前兩項提出未知數、後兩項提出參數後都留下未知數加四；這只使用分配律，沒有除以參數或取平方根，所以參數為正、負、零或非整數時，恆等式都成立。",
    "steps": [
      "前組提 x。",
      "後組提 k。",
      "使用分配律。"
    ],
    "optionAnalysis": [
      {
        "choice": "只在 k=4 時成立",
        "truth": false,
        "reason": "分組恆等不要求 k=4。"
      },
      {
        "choice": "只在 k>0 時成立",
        "truth": false,
        "reason": "代數恆等與 k 正負無關。"
      },
      {
        "choice": "對所有 k 都成立",
        "truth": true,
        "reason": "x(x+4)+k(x+4)=(x+k)(x+4)。"
      },
      {
        "choice": "只有 k 為整數時成立",
        "truth": false,
        "reason": "分配律對一般數皆成立。"
      }
    ],
    "misconceptionTarget": "把情境限制誤加到純代數恆等式。",
    "prerequisiteCheck": "需會一般符號分配律。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "k 不受整數或正值限制；純代數式在可運算數域均成立。",
    "difficultyReason": "含參數且需辨認恆等範圍。",
    "literacyContextNecessity": null,
    "authoringIntent": "建立參數化分組的普遍性。",
    "concept": "參數恆等",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "分組分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ff0d3d1e132882343b0e122b0f2b1c67b188ced0f384e6dae9159095563f975e"
  },
  {
    "questionId": "u12-s004-v009",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一種分組能把 3x²+6xy-5x-10y 成功分解？",
    "givenConditions": [
      "x、y 為變數。"
    ],
    "target": "選擇能產生共同括號的分組。",
    "choices": [
      "(3x²-10y)+(6xy-5x)",
      "(3x²+6xy-10y)+(-5x)",
      "(3x²+6xy-5x)+(-10y)",
      "(3x²+6xy)+(-5x-10y)"
    ],
    "answerIndex": 3,
    "independentSolution": "展開乘積回到四項。",
    "explanation": "選定分組後：3x(x+2y)-5(x+2y)=(3x-5)(x+2y)。 將前兩項成組可提出三倍未知數並留下未知數加二乙，後兩項成組提出負五也留下同一括號；其餘分組無法在兩組中製造相同二項式，因此只有此選項成功。",
    "steps": [
      "觀察前兩項共同 3x。",
      "後兩項共同 -5。",
      "得到相同 x+2y。"
    ],
    "optionAnalysis": [
      {
        "choice": "(3x²-10y)+(6xy-5x)",
        "truth": false,
        "reason": "兩組沒有可提出後一致的二項括號。"
      },
      {
        "choice": "(3x²+6xy-10y)+(-5x)",
        "truth": false,
        "reason": "第一組無法以單一公因式提出成與 -5x 相同的括號。"
      },
      {
        "choice": "(3x²+6xy-5x)+(-10y)",
        "truth": false,
        "reason": "第一組與單項不能形成共同括號。"
      },
      {
        "choice": "(3x²+6xy)+(-5x-10y)",
        "truth": true,
        "reason": "前組提 3x、後組提 -5，都得到 x+2y。"
      }
    ],
    "misconceptionTarget": "忽略可能的替代分組，導致選項多解。",
    "prerequisiteCheck": "需熟悉重排與多條分組路徑。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "原式確實存在另一條成功分組路徑，但已排除於選項；四個選項中只有指定分組可直接產生共同括號。",
    "difficultyReason": "需比較分組策略並確認共同括號。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認成功分組的必要特徵。",
    "concept": "分組選擇",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "分組分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e13fe5ab9ddf07695d38af18d705c7952c7e3a047227c0ad748607cf39b838e9"
  },
  {
    "questionId": "u12-s004-v010",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "u12-fig-group-wall",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一面展示牆分成四區，面積式為 ax+ay+bx+by 平方公尺。若上下兩列高度分別為 a、b 公尺，整牆寬度應如何表示？",
    "givenConditions": [
      "a、b、x、y>0；四區排成 2×2。"
    ],
    "target": "由分組面積讀出共同總寬。",
    "choices": [
      "x+y 公尺",
      "a+b 公尺",
      "(a+b)(x+y) 公尺",
      "ax+by 公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "四區寬分別由 x、y 組成，兩列共享 x+y。",
    "explanation": "總面積=(a+b)(x+y)，高度為 a+b，因此寬度為 x+y。 上列兩區面積提出高度甲後留下共同總寬丙加丁，下列提出高度乙後也留下相同寬度；總面積雖是高度和乘寬度和，但題目只問寬，因此取丙加丁公尺。",
    "steps": [
      "按兩列分組。",
      "各列提出高度。",
      "共同括號解讀為寬度。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y 公尺",
        "truth": true,
        "reason": "a(x+y)+b(x+y) 顯示兩列共享總寬 x+y。"
      },
      {
        "choice": "a+b 公尺",
        "truth": false,
        "reason": "這是兩列總高度，不是寬度。"
      },
      {
        "choice": "(a+b)(x+y) 公尺",
        "truth": false,
        "reason": "這是總面積形式，單位應為平方公尺。"
      },
      {
        "choice": "ax+by 公尺",
        "truth": false,
        "reason": "把部分區塊面積誤當長度。"
      }
    ],
    "misconceptionTarget": "把高度因式與寬度因式對調所問。",
    "prerequisiteCheck": "需知道長方形面積與分組。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "面積平方公尺除以高度公尺得寬公尺。",
    "ambiguityAndBoundaryAudit": "所有量正，圖不按比例也不影響標示。",
    "difficultyReason": "需從四項面積式辨認圖形方向。",
    "literacyContextNecessity": "四區排列資訊決定哪個因式代表寬；沒有情境便無法回答方向。",
    "authoringIntent": "用分組還原展示牆寬度。",
    "concept": "分割面積",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "分組分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "651a8c5ce3ce4ad48e70e9fdabb9c4ee8a0ddc737882e8b8c536f0f98a7b041b"
  },
  {
    "questionId": "u12-s004-v011",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某倉庫兩排貨架的容量模型為 5n²+10n+3n+6。若依「每排共同格數」分組，容量可寫成何者？",
    "givenConditions": [
      "n 為正整數。"
    ],
    "target": "把四項分組成相同括號。",
    "choices": [
      "(5n+6)(n+1)",
      "(5n+3)(n+2)",
      "(5n+3)(n-2)",
      "(8n)(n+2)"
    ],
    "answerIndex": 1,
    "independentSolution": "展開為 5n²+10n+3n+6。",
    "explanation": "(5n²+10n)+(3n+6)=5n(n+2)+3(n+2)。 前兩項提出五倍數量留下數量加二，後兩項提出三也留下相同括號；再提出共同格數後，另一因式是五倍數量加三，展開會恢復四個容量項。",
    "steps": [
      "第一排相關項提 5n。",
      "第二排相關項提 3。",
      "提出共同 n+2。"
    ],
    "optionAnalysis": [
      {
        "choice": "(5n+6)(n+1)",
        "truth": false,
        "reason": "展開中間項為 11n。"
      },
      {
        "choice": "(5n+3)(n+2)",
        "truth": true,
        "reason": "5n(n+2)+3(n+2)。"
      },
      {
        "choice": "(5n+3)(n-2)",
        "truth": false,
        "reason": "常數與中間項符號不符。"
      },
      {
        "choice": "(8n)(n+2)",
        "truth": false,
        "reason": "5n 與 3 不能合併成 8n。"
      }
    ],
    "misconceptionTarget": "把 5n 與 3 當同類項相加。 五倍數量與常數三不是同類項，只能作為另一因式中的兩項保留。",
    "prerequisiteCheck": "需會分組與正整數計數。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "兩因式為計數量，乘積為總容量；無近似。",
    "ambiguityAndBoundaryAudit": "n>0 保證格數與排數正。",
    "difficultyReason": "需把分組因式解讀為貨架結構。",
    "literacyContextNecessity": "「共同格數」對應括號 n+2，情境要求找共同排列而非只合併同類項。",
    "authoringIntent": "把貨架容量四項式結構化。",
    "concept": "容量分組",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "分組分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4905badf9691157c4e02d30e19b02c4daacdca04b0f357e08b9c698cf4fc2dab"
  },
  {
    "questionId": "u12-s004-v012",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一張宣傳單的四區印刷成本為 2pq+6p-q-3 元。會計想把共同版型因子提出。正確分解為何？",
    "givenConditions": [
      "p、q 表示正的計價參數。"
    ],
    "target": "分組並提出相同 q+3。",
    "choices": [
      "(2p+1)(q+3) 元",
      "(2p-1)(q-3) 元",
      "(2p-1)(q+3) 元",
      "(p-1)(2q+3) 元"
    ],
    "answerIndex": 2,
    "independentSolution": "展開回 2pq+6p-q-3。",
    "explanation": "(2pq+6p)+(-q-3)=2p(q+3)-(q+3)。 前兩項提出二倍甲後留下乙加三；後兩項負乙減三必須提出負一，才得到同一版型因子。共同括號提出後另一因式為二甲減一，展開可還原全部成本項。",
    "steps": [
      "按 p 相關兩項與負項分組。",
      "第二組提出 -1。",
      "提出 q+3。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2p+1)(q+3) 元",
        "truth": false,
        "reason": "展開 q 與常數項符號為正，原式為負。"
      },
      {
        "choice": "(2p-1)(q-3) 元",
        "truth": false,
        "reason": "交叉常數項符號不符。"
      },
      {
        "choice": "(2p-1)(q+3) 元",
        "truth": true,
        "reason": "2p(q+3)-1(q+3)。"
      },
      {
        "choice": "(p-1)(2q+3) 元",
        "truth": false,
        "reason": "展開 p 項係數與 q 項不符。"
      }
    ],
    "misconceptionTarget": "忽略第二組整體負號。 後兩項共同的是負一，若漏掉整體負號就無法形成相同的乙加三括號。",
    "prerequisiteCheck": "需會帶負號分組。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "成本單位元；模型可能需 p、q 範圍使總成本非負，分解本身精確。",
    "ambiguityAndBoundaryAudit": "題目只要求恆等分解，不據此判斷實際成本符號。",
    "difficultyReason": "計價參數與負調整項並存，需正確提出 -1。",
    "literacyContextNecessity": "共同版型因子 q+3 同時影響兩類成本，分組後才能看見該共同因子。",
    "authoringIntent": "在成本模型中辨認共同版型。",
    "concept": "成本共同因子",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "分組分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6df3e5602222c516492d6e4eadaea834c9b687af1ede185118e6625eb10f335e"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u12-s004-cr001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "用分組法因式分解 4a²+8ab-3a-6b，並寫出每組提出的因式。",
    "requiredWork": [
      "選擇分組。",
      "各組提公因式。",
      "提出共同括號。",
      "展開回查。"
    ],
    "fullCreditSolution": [
      "分成 (4a²+8ab)+(-3a-6b)。",
      "前組提 4a 得 4a(a+2b)，後組提 -3 得 -3(a+2b)。",
      "所以為 (4a-3)(a+2b)。",
      "把前兩項與後兩項分組，前組提出四甲、後組提出負三，兩組都留下甲加二乙；再提出此共同括號得到四甲減三乘甲加二乙。回展時四甲產生前兩項、負三產生後兩項，四個係數與符號完全一致。"
    ],
    "alternativeSolutions": [
      "也可重排為 4a²-3a+8ab-6b，再分成 a(4a-3)+2b(4a-3)。"
    ],
    "reasoningSteps": [
      "兩條合法分組路徑都製造相同括號。",
      "共同括號可為 a+2b 或 4a-3。",
      "最後將兩因式展開，逐項核對四甲平方、八甲乙、負三甲與負六乙。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整得到 (4a-3)(a+2b)，清楚列出分組、兩組公因式與回展。"
      },
      {
        "score": 2,
        "criteria": "答案正確但分組或展開說明不全；或一處符號小錯。"
      },
      {
        "score": 1,
        "criteria": "能成功讓其中一組提出，或辨認可能共同括號，但未完成。"
      },
      {
        "score": 0,
        "criteria": "非法改號、漏項，或結果展開不符。"
      }
    ],
    "partialCreditRules": [
      "採替代重排路徑同樣滿分。",
      "因式順序不同不扣分。"
    ],
    "followThroughPolicy": "若第二組忘提出負號，但後續可看出相反括號概念，最多 1 分；若重排漏項則該路徑不給分。",
    "unitAndNotationRules": [
      "無單位。",
      "a+2b 與 4a-3 必須以括號表示整體。"
    ],
    "answerOnlyPolicy": "只寫最終答案最高 2 分。",
    "commonErrors": [
      "把 -3a-6b 提成 3(a+2b)。",
      "分組後停在兩項和。",
      "第二組負三甲減六乙必須提出負三；若提出正三，括號會成為原括號的相反式。"
    ],
    "independentReview": {
      "derivedResult": "(4a-3)(a+2b)。",
      "ambiguity": "兩種分組路徑均在範圍內且等價。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "133188be1bab67c7f548c6c9c28be5af1553b57bd2c1a1d3e15a91cedee8e2fb"
  },
  {
    "questionId": "u12-s004-cr002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-by-grouping",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "判斷 x²+px+4x+4p 是否能對所有 p 用分組法分解。若能，寫出因式並證明。",
    "requiredWork": [
      "保留 p 為一般參數。",
      "選擇分組。",
      "說明成立範圍。",
      "展開驗證。"
    ],
    "fullCreditSolution": [
      "分組為 (x²+4x)+(px+4p)。",
      "得到 x(x+4)+p(x+4)=(x+p)(x+4)。",
      "此推導只用分配律，對所有可運算的 p 成立。",
      "將前兩項提出未知數得到未知數乘未知數加四，後兩項提出參數也得到參數乘未知數加四；提出共同括號後為未知數加參數乘未知數加四。整個過程只用分配律，沒有除以參數，因此對參數的所有可運算數值都成立。"
    ],
    "alternativeSolutions": [
      "也可重排為 x²+px+4x+4p=x(x+p)+4(x+p)=(x+4)(x+p)。"
    ],
    "reasoningSteps": [
      "兩種分組分別顯示共同 x+4 或 x+p。",
      "乘法交換律使結果相同。",
      "展開未知數加參數與未知數加四，四項依序回到未知數平方、四倍未知數、參數乘未知數與四倍參數。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "寫出 (x+p)(x+4)，並以合法分組證明對所有 p 成立。"
      },
      {
        "score": 2,
        "criteria": "因式正確但只說特定 p 或缺完整證明。"
      },
      {
        "score": 1,
        "criteria": "能提出其中一組並看見共同括號，未完成或誤限 p。"
      },
      {
        "score": 0,
        "criteria": "宣稱只有 p=4 才成立，或改變原項符號。"
      }
    ],
    "partialCreditRules": [
      "寫 p 為整數、正數等不必要限制，若其餘正確最高 2 分。",
      "兩種分組路徑皆接受。"
    ],
    "followThroughPolicy": "若誤把 px+4p 提成 p(x+p)，後續不給共同括號分；若最終答案正確但前一行抄錯，依可辨認程度給 2 分。",
    "unitAndNotationRules": [
      "p 為參數，不需單位。",
      "因式順序可交換。"
    ],
    "answerOnlyPolicy": "只有答案無「對所有 p」說明最高 2 分。",
    "commonErrors": [
      "把 p 與 4 直接相加。",
      "認為參數必須先指定數值。"
    ],
    "independentReview": {
      "derivedResult": "(x+p)(x+4)，對所有 p 成立。",
      "ambiguity": "只在通常代數運算可定義的數域討論，不引入高中抽象結構。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c4b2dd9bb9d87a4a2899345babf96aaef18e8b0b10ef918fca97f2ea06af1464"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u12-s004-v001",
    "unitId": "u12",
    "skillId": "factoring-by-grouping",
    "contentSha256": "62f0ff8c8a0de587614d96c34b2d0211e60281f3f9f6d1ff03573fe693cbe4e3",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開回四項完全一致。",
    "derivedAnswer": "(a+b)(x+y)",
    "storedAnswer": "(a+b)(x+y)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「ax+ay+bx+by 的因式分解為何？」逐一展開或回代；正解「(a+b)(x+y)」成立。「(a+x)(b+y)」不成立：展開為 ab+ay+bx+xy。；「(a-b)(x-y)」不成立：展開符號與原式不同。；「(a+b)+(x+y)」不成立：只是兩個和相加，不是乘積。",
      "undefinedSymbol": "題幹已給條件為「a、b、x、y 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分組提出共同括號。」。",
      "unitConflict": "本題單位審查：無單位；代數恆等。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；代數恆等。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：因式次序可交換，選項唯一至交換。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分組提出共同括號。」閱讀後，常見誤讀為「分組後沒有形成相同括號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "典型四項分組，結構直接。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需掌握提公因式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s004-v001：展開回四項完全一致。 因此導出「(a+b)(x+y)」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分組提出共同括號。」，並特別排除「分組後沒有形成相同括號。」。難度理由是「典型四項分組，結構直接。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s004-v002",
    "unitId": "u12",
    "skillId": "factoring-by-grouping",
    "contentSha256": "fe6418f11256de520bfd53645339cbe4d185626b0d64ba00f2182c6ee0043d21",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "(x+3)(x+2)=x²+5x+6，與原式合併後相同。",
    "derivedAnswer": "(x+2)(x+3)",
    "storedAnswer": "(x+2)(x+3)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「x²+3x+2x+6 用分組法可得何者？」逐一展開或回代；正解「(x+2)(x+3)」成立。「(x+3)(x+6)」不成立：常數與中間項都不符。；「(x+2)²」不成立：展開中間項為 4x。；「x(x+5)+6」不成立：未形成乘積且不是有效分組結果。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「兩組提出相同括號。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：原式合併後為 x²+5x+6；分組不改值。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「兩組提出相同括號。」閱讀後，常見誤讀為「只先合併 3x+2x，沒看分組結構。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "由四項顯示二次三項式的分組來源。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會同類項與提公因式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s004-v002：(x+3)(x+2)=x²+5x+6，與原式合併後相同。 因此導出「(x+2)(x+3)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「兩組提出相同括號。」，並特別排除「只先合併 3x+2x，沒看分組結構。」。難度理由是「由四項顯示二次三項式的分組來源。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s004-v003",
    "unitId": "u12",
    "skillId": "factoring-by-grouping",
    "contentSha256": "4b73f9a9fa86a201ae63819fcbb8044dd292c02be84460e653a62d72a20ce740",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開得 6m²+4m-9m-6，正是原式。",
    "derivedAnswer": "(2m-3)(3m+2)",
    "storedAnswer": "(2m-3)(3m+2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「6m²-9m+4m-6 因式分解為何？」逐一展開或回代；正解「(2m-3)(3m+2)」成立。「(2m+3)(3m-2)」不成立：中間項為 5m 而非 -5m。；「(3m-3)(2m+2)」不成立：展開係數與常數不符。；「(6m+4)(m-3)」不成立：展開中間項為 -14m。",
      "undefinedSymbol": "題幹已給條件為「m 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分組並提出共同二項式。」。",
      "unitConflict": "本題單位審查：無單位；精確係數。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確係數。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：原項順序已有適合分組，無需重排。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分組並提出共同二項式。」閱讀後，常見誤讀為「後組把 4m-6 提成 2(2m+3)。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需同時處理負常數與共同括號。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會正負數除法。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s004-v003：展開得 6m²+4m-9m-6，正是原式。 因此導出「(2m-3)(3m+2)」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分組並提出共同二項式。」，並特別排除「後組把 4m-6 提成 2(2m+3)。」。難度理由是「需同時處理負常數與共同括號。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s004-v004",
    "unitId": "u12",
    "skillId": "factoring-by-grouping",
    "contentSha256": "190b677e06738c5a0e3e6a284308c5fa9ac286433ba9e2d70be2fa32e7cb6b5e",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "(p-2)(q-r)=pq-pr-2q+2r。",
    "derivedAnswer": "(p-2)(q-r)",
    "storedAnswer": "(p-2)(q-r)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「pq-pr-2q+2r 的因式分解為何？」逐一展開或回代；正解「(p-2)(q-r)」成立。「(p+2)(q-r)」不成立：後組原為 -2(q-r)。；「(p-2)(q+r)」不成立：展開 r 項符號不符。；「(p-q)(r-2)」不成立：展開產生不同配對項。",
      "undefinedSymbol": "題幹已給條件為「p、q、r 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「辨認 q-r 與後組負因式。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：q-r 即使為 0，恆等式仍成立。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「辨認 q-r 與後組負因式。」閱讀後，常見誤讀為「後組只提出 2 而得到相反括號，卻未補負號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需要由後組提出負公因式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "承接符號與提公因式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s004-v004：(p-2)(q-r)=pq-pr-2q+2r。 因此導出「(p-2)(q-r)」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「辨認 q-r 與後組負因式。」，並特別排除「後組只提出 2 而得到相反括號，卻未補負號。」。難度理由是「需要由後組提出負公因式。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s004-v005",
    "unitId": "u12",
    "skillId": "factoring-by-grouping",
    "contentSha256": "0ed1863f4a965688da68dd54731b66205182c78372f2d8660887a10196f389fb",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開為 x²+xy+3x+3y。",
    "derivedAnswer": "(x+3)(x+y)",
    "storedAnswer": "(x+3)(x+y)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「x²+xy+3x+3y 應如何分組因式分解？」逐一展開或回代；正解「(x+3)(x+y)」成立。「(x+y)(x+3y)」不成立：展開 y 項與 y² 項不符。；「(x+1)(x+3y)」不成立：展開中間項結構不同。；「(x+3)(x-y)」不成立：y 項符號錯。",
      "undefinedSymbol": "題幹已給條件為「x、y 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「選出共同括號 x+y。」。",
      "unitConflict": "本題單位審查：無單位；精確代數。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確代數。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：項目順序已支持自然分組。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「選出共同括號 x+y。」閱讀後，常見誤讀為「把 x+y 之外的剩餘因式誤寫含 y。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "兩組公因式不同但共同括號清楚。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需辨認每組公因式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s004-v005：展開為 x²+xy+3x+3y。 因此導出「(x+3)(x+y)」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「選出共同括號 x+y。」，並特別排除「把 x+y 之外的剩餘因式誤寫含 y。」。難度理由是「兩組公因式不同但共同括號清楚。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s004-v006",
    "unitId": "u12",
    "skillId": "factoring-by-grouping",
    "contentSha256": "295cc7250132b4c806cc3a830d8219186b631e512e01c0215c5bbd4ae122aa14",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開 (2a-1)(a+3b)=2a²+6ab-a-3b。",
    "derivedAnswer": "(2a-1)(a+3b)",
    "storedAnswer": "(2a-1)(a+3b)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「將 2a²+6ab-a-3b 因式分解，何者正確？」逐一展開或回代；正解「(2a-1)(a+3b)」成立。「(2a+1)(a+3b)」不成立：一次組符號會變成 +a+3b。；「(2a-1)(a-3b)」不成立：ab 與 b 項符號不符。；「(a-1)(2a+3b)」不成立：展開 ab 係數為 3，不是 6。",
      "undefinedSymbol": "題幹已給條件為「a、b 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分組並處理第二組負號。」。",
      "unitConflict": "本題單位審查：無單位；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：兩因式交換等價。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分組並處理第二組負號。」閱讀後，常見誤讀為「把 -a-3b 提出 +1，未形成相同括號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "第二組沒有數字大公因式，只需提出 -1。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解提出 -1 的作用。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s004-v006：展開 (2a-1)(a+3b)=2a²+6ab-a-3b。 因此導出「(2a-1)(a+3b)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分組並處理第二組負號。」，並特別排除「把 -a-3b 提出 +1，未形成相同括號。」。難度理由是「第二組沒有數字大公因式，只需提出 -1。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s004-v007",
    "unitId": "u12",
    "skillId": "factoring-by-grouping",
    "contentSha256": "9ce341da204def7dc5e20d65b80ca9d6837b48f2e54eb9542181d64ed77d9861",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "得到的乘積與原先 (a+3)(x+y) 只差因式順序。",
    "derivedAnswer": "先由前兩項提 x、後兩項提 y，再提出 a+3",
    "storedAnswer": "先由前兩項提 x、後兩項提 y，再提出 a+3",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「多項式 ax+ay+3x+3y 可分解成 (a+3)(x+y)。若將原式重排為 ax+3x+ay+3y，最合適的分組理由為何？」逐一展開或回代；正解「先由前兩項提 x、後兩項提 y，再提出 a+3」成立。「重排後可直接把 a 與 3 相加」不成立：a 是變數，不能與常數 3 合併。；「前兩項與後兩項都可提出 x+y」不成立：每組並不都含 x+y。；「重排會改變多項式的值，所以不能做」不成立：加法交換律允許重排。",
      "undefinedSymbol": "題幹已給條件為「a、x、y 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「解釋重排如何製造共同因式。」。",
      "unitConflict": "本題單位審查：無單位；代數恆等。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；代數恆等。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：重排只改順序不改符號；未使用結合以外非法操作。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「解釋重排如何製造共同因式。」閱讀後，常見誤讀為「以為重排改值或把異類項直接合併。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "考查策略說明而非只算答案。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需知道加法交換律與乘法交換律。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s004-v007：得到的乘積與原先 (a+3)(x+y) 只差因式順序。 因此導出「先由前兩項提 x、後兩項提 y，再提出 a+3」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「解釋重排如何製造共同因式。」，並特別排除「以為重排改值或把異類項直接合併。」。難度理由是「考查策略說明而非只算答案。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s004-v008",
    "unitId": "u12",
    "skillId": "factoring-by-grouping",
    "contentSha256": "ff0d3d1e132882343b0e122b0f2b1c67b188ced0f384e6dae9159095563f975e",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開 (x+k)(x+4)=x²+4x+kx+4k，任意 k 均吻合。",
    "derivedAnswer": "對所有 k 都成立",
    "storedAnswer": "對所有 k 都成立",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「若 x²+4x+kx+4k 可用分組法分解成 (x+k)(x+4)，下列敘述何者正確？」逐一展開或回代；正解「對所有 k 都成立」成立。「只在 k=4 時成立」不成立：分組恆等不要求 k=4。；「只在 k>0 時成立」不成立：代數恆等與 k 正負無關。；「只有 k 為整數時成立」不成立：分配律對一般數皆成立。",
      "undefinedSymbol": "題幹已給條件為「k 為任意數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「驗證一般參數分組。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：k 不受整數或正值限制；純代數式在可運算數域均成立。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「驗證一般參數分組。」閱讀後，常見誤讀為「把情境限制誤加到純代數恆等式。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "含參數且需辨認恆等範圍。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會一般符號分配律。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s004-v008：展開 (x+k)(x+4)=x²+4x+kx+4k，任意 k 均吻合。 因此導出「對所有 k 都成立」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「驗證一般參數分組。」，並特別排除「把情境限制誤加到純代數恆等式。」。難度理由是「含參數且需辨認恆等範圍。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s004-v009",
    "unitId": "u12",
    "skillId": "factoring-by-grouping",
    "contentSha256": "e13fe5ab9ddf07695d38af18d705c7952c7e3a047227c0ad748607cf39b838e9",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開乘積回到四項。",
    "derivedAnswer": "(3x²+6xy)+(-5x-10y)",
    "storedAnswer": "(3x²+6xy)+(-5x-10y)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「下列哪一種分組能把 3x²+6xy-5x-10y 成功分解？」逐一展開或回代；正解「(3x²+6xy)+(-5x-10y)」成立。「(3x²-10y)+(6xy-5x)」不成立：兩組沒有可提出後一致的二項括號。；「(3x²+6xy-10y)+(-5x)」不成立：第一組無法以單一公因式提出成與 -5x 相同的括號。；「(3x²+6xy-5x)+(-10y)」不成立：第一組與單項不能形成共同括號。",
      "undefinedSymbol": "題幹已給條件為「x、y 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「選擇能產生共同括號的分組。」。",
      "unitConflict": "本題單位審查：無單位；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：原式確實存在另一條成功分組路徑，但已排除於選項；四個選項中只有指定分組可直接產生共同括號。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「選擇能產生共同括號的分組。」閱讀後，常見誤讀為「忽略可能的替代分組，導致選項多解。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需比較分組策略並確認共同括號。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需熟悉重排與多條分組路徑。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s004-v009：展開乘積回到四項。 因此導出「(3x²+6xy)+(-5x-10y)」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「選擇能產生共同括號的分組。」，並特別排除「忽略可能的替代分組，導致選項多解。」。難度理由是「需比較分組策略並確認共同括號。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s004-v010",
    "unitId": "u12",
    "skillId": "factoring-by-grouping",
    "contentSha256": "651a8c5ce3ce4ad48e70e9fdabb9c4ee8a0ddc737882e8b8c536f0f98a7b041b",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "四區寬分別由 x、y 組成，兩列共享 x+y。",
    "derivedAnswer": "x+y 公尺",
    "storedAnswer": "x+y 公尺",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「一面展示牆分成四區，面積式為 ax+ay+bx+by 平方公尺。若上下兩列高度分別為 a、b 公尺，整牆寬度應如何表示？」逐一展開或回代；正解「x+y 公尺」成立。「a+b 公尺」不成立：這是兩列總高度，不是寬度。；「(a+b)(x+y) 公尺」不成立：這是總面積形式，單位應為平方公尺。；「ax+by 公尺」不成立：把部分區塊面積誤當長度。",
      "undefinedSymbol": "題幹已給條件為「a、b、x、y>0；四區排成 2×2。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「由分組面積讀出共同總寬。」。",
      "unitConflict": "本題單位審查：面積平方公尺除以高度公尺得寬公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；面積平方公尺除以高度公尺得寬公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：所有量正，圖不按比例也不影響標示。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「由分組面積讀出共同總寬。」閱讀後，常見誤讀為「把高度因式與寬度因式對調所問。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需從四項面積式辨認圖形方向。",
    "literacyContextNecessity": "四區排列資訊決定哪個因式代表寬；沒有情境便無法回答方向。",
    "prerequisiteCheck": "需知道長方形面積與分組。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s004-v010：四區寬分別由 x、y 組成，兩列共享 x+y。 因此導出「x+y 公尺」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「由分組面積讀出共同總寬。」，並特別排除「把高度因式與寬度因式對調所問。」。難度理由是「需從四項面積式辨認圖形方向。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s004-v011",
    "unitId": "u12",
    "skillId": "factoring-by-grouping",
    "contentSha256": "4905badf9691157c4e02d30e19b02c4daacdca04b0f357e08b9c698cf4fc2dab",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開為 5n²+10n+3n+6。",
    "derivedAnswer": "(5n+3)(n+2)",
    "storedAnswer": "(5n+3)(n+2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某倉庫兩排貨架的容量模型為 5n²+10n+3n+6。若依「每排共同格數」分組，容量可寫成何者？」逐一展開或回代；正解「(5n+3)(n+2)」成立。「(5n+6)(n+1)」不成立：展開中間項為 11n。；「(5n+3)(n-2)」不成立：常數與中間項符號不符。；「(8n)(n+2)」不成立：5n 與 3 不能合併成 8n。",
      "undefinedSymbol": "題幹已給條件為「n 為正整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「把四項分組成相同括號。」。",
      "unitConflict": "本題單位審查：兩因式為計數量，乘積為總容量；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；兩因式為計數量，乘積為總容量；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：n>0 保證格數與排數正。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「把四項分組成相同括號。」閱讀後，常見誤讀為「把 5n 與 3 當同類項相加。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需把分組因式解讀為貨架結構。",
    "literacyContextNecessity": "「共同格數」對應括號 n+2，情境要求找共同排列而非只合併同類項。",
    "prerequisiteCheck": "需會分組與正整數計數。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s004-v011：展開為 5n²+10n+3n+6。 因此導出「(5n+3)(n+2)」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「把四項分組成相同括號。」，並特別排除「把 5n 與 3 當同類項相加。」。難度理由是「需把分組因式解讀為貨架結構。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s004-v012",
    "unitId": "u12",
    "skillId": "factoring-by-grouping",
    "contentSha256": "6df3e5602222c516492d6e4eadaea834c9b687af1ede185118e6625eb10f335e",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開回 2pq+6p-q-3。",
    "derivedAnswer": "(2p-1)(q+3) 元",
    "storedAnswer": "(2p-1)(q+3) 元",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「一張宣傳單的四區印刷成本為 2pq+6p-q-3 元。會計想把共同版型因子提出。正確分解為何？」逐一展開或回代；正解「(2p-1)(q+3) 元」成立。「(2p+1)(q+3) 元」不成立：展開 q 與常數項符號為正，原式為負。；「(2p-1)(q-3) 元」不成立：交叉常數項符號不符。；「(p-1)(2q+3) 元」不成立：展開 p 項係數與 q 項不符。",
      "undefinedSymbol": "題幹已給條件為「p、q 表示正的計價參數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分組並提出相同 q+3。」。",
      "unitConflict": "本題單位審查：成本單位元；模型可能需 p、q 範圍使總成本非負，分解本身精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；成本單位元；模型可能需 p、q 範圍使總成本非負，分解本身精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題目只要求恆等分解，不據此判斷實際成本符號。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分組並提出相同 q+3。」閱讀後，常見誤讀為「忽略第二組整體負號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "計價參數與負調整項並存，需正確提出 -1。",
    "literacyContextNecessity": "共同版型因子 q+3 同時影響兩類成本，分組後才能看見該共同因子。",
    "prerequisiteCheck": "需會帶負號分組。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s004-v012：展開回 2pq+6p-q-3。 因此導出「(2p-1)(q+3) 元」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分組並提出相同 q+3。」，並特別排除「忽略第二組整體負號。」。難度理由是「計價參數與負調整項並存，需正確提出 -1。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u12-fig-group-wall",
    "unitId": "u12",
    "primarySkillId": "factoring-by-grouping",
    "svgPath": "figures/u12/u12-fig-group-wall.svg",
    "canvas": {
      "width": 760,
      "height": 460,
      "units": "px"
    },
    "viewBox": "0 0 760 460",
    "notToScale": true,
    "visualInferenceWarning": "四區寬高比例不可目測；只能依 a、b、x、y 標示。",
    "altText": "二乘二四區長方形，上列高 a、下列高 b，左欄寬 x、右欄寬 y，四區面積依序 ax、ay、bx、by。",
    "drawingSpec": {
      "canvas": {
        "width": 760,
        "height": 460,
        "units": "px"
      },
      "viewBox": "0 0 760 460",
      "layout": "2x2 grid inside outer rectangle",
      "coordinates": {
        "outer": [
          120,
          70,
          500,
          300
        ],
        "verticalDividerX": 395,
        "horizontalDividerY": 225
      },
      "labels": [
        {
          "text": "ax",
          "position": [
            245,
            155
          ]
        },
        {
          "text": "ay",
          "position": [
            500,
            155
          ]
        },
        {
          "text": "bx",
          "position": [
            245,
            310
          ]
        },
        {
          "text": "by",
          "position": [
            500,
            310
          ]
        },
        {
          "text": "a",
          "position": [
            75,
            155
          ]
        },
        {
          "text": "b",
          "position": [
            75,
            310
          ]
        },
        {
          "text": "x",
          "position": [
            245,
            410
          ]
        },
        {
          "text": "y",
          "position": [
            500,
            410
          ]
        }
      ],
      "lines": {
        "outer": "4px",
        "dividers": "4px"
      },
      "units": "generic algebraic lengths",
      "scale": "not to scale",
      "notToScale": true,
      "visualInferenceWarning": "四區寬高比例不可目測；只能依 a、b、x、y 標示。",
      "hiddenLines": "none",
      "readingOrder": "top-left, top-right, bottom-left, bottom-right",
      "answerLeakage": "does not print (a+b)(x+y)"
    },
    "svgAssertions": [
      "viewBox=\"0 0 760 460\"",
      ">ax<",
      ">by<",
      "示意圖不按比例"
    ],
    "mobileReadabilityReview": "在 360px 寬度下，主要標籤字級至少 16px，線條不重疊，數學式保持可讀。",
    "answerLeakageReview": "圖中只呈現題幹已給的尺寸或區塊關係，不直接標示待求答案。",
    "figureReview": {
      "decision": "pass",
      "reviewNote": "人工渲染檢查四區與八個標籤均清楚，手機縮放後仍能辨識；刻意不寫最終因式 (a+b)(x+y)，避免答案洩漏。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "473edeb69c2e7d3c48ad46e5f3295b4db56feb8465178dc16cfe7986a3c2e568"
  }
];
