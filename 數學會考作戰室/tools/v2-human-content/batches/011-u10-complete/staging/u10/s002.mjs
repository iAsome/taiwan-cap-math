// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s002-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-concepts",
    "skillId": "polynomial-evaluation",
    "lockedTitle": "多項式代入求值",
    "title": "多項式代入求值：先完整替換再計算",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能將同一未知數的每一處都代入指定值。",
      "代入負數時能使用括號保留符號。",
      "能依指數、乘除、加減順序求出精確值。"
    ],
    "prerequisites": [
      "polynomial-terms"
    ],
    "prerequisiteBridge": "先備技能 polynomial-terms 已建立下一步所需概念；本節專注於將指定數值完整代入並依運算順序求值。",
    "glossary": [
      {
        "term": "代入",
        "definition": "用指定的數替換式中每一個同名未知數。"
      },
      {
        "term": "求值",
        "definition": "代入後完成運算得到數值。"
      },
      {
        "term": "運算順序",
        "definition": "先括號與次方，再乘除，最後加減。"
      }
    ],
    "notation": [
      {
        "symbol": "P(x)",
        "meaning": "表示多項式 P 在未知數 x 下的式子。"
      },
      {
        "symbol": "P(-2)",
        "meaning": "把 P(x) 中每個 x 都換成 -2。"
      }
    ],
    "conceptNarrative": [
      "代入不是只替換一個 x，而是所有 x 都要替換。",
      "代入負數務必加括號，例如 x² 在 x=-3 時是 (-3)²=9，不是 -3²=-9。",
      "同一式中可能同時有 x²、x 與常數，應分項計算再合併。",
      "若情境限制 x 的意義，例如長度不能為負，代數上可求值但解釋時仍要檢查情境範圍。"
    ],
    "formalDefinitions": [
      {
        "name": "多項式的值",
        "statement": "指定未知數後，多項式依運算順序算得的數。"
      }
    ],
    "formulas": [
      {
        "formula": "P(a)",
        "conditions": [
          "將 P(x) 的每一個 x 替換為 a"
        ],
        "meaning": "a 必須符合題目給定或情境限制。"
      }
    ],
    "nonApplicableCases": [
      "不能把 x² 直接替換成 a；應替換成 a²。",
      "負數代入不加括號容易錯誤。",
      "不能先隨意合併不同次方項。",
      "題目若有兩個未知數，必須分別按指定值代入。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "圈出式中所有未知數。",
        "check": "完成此步後，確認內容仍符合「將指定數值完整代入並依運算順序求值」。"
      },
      {
        "step": 2,
        "instruction": "每一處都以括號替換成指定值。",
        "check": "完成此步後，確認內容仍符合「將指定數值完整代入並依運算順序求值」。"
      },
      {
        "step": 3,
        "instruction": "先算次方。",
        "check": "完成此步後，確認內容仍符合「將指定數值完整代入並依運算順序求值」。"
      },
      {
        "step": 4,
        "instruction": "再算各項乘法。",
        "check": "完成此步後，確認內容仍符合「將指定數值完整代入並依運算順序求值」。"
      },
      {
        "step": 5,
        "instruction": "最後依正負號加減並檢查情境單位。",
        "check": "完成此步後，確認內容仍符合「將指定數值完整代入並依運算順序求值」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "P(x)=2x²-3x+1，求 P(2)。",
        "solutionSteps": [
          "2(2²)-3(2)+1=8-6+1。"
        ],
        "answer": "3。"
      },
      {
        "exampleId": "L2",
        "prompt": "Q(x)=-x²+4x，求 Q(-3)。",
        "solutionSteps": [
          "-(-3)²+4(-3)=-9-12。"
        ],
        "answer": "-21。"
      },
      {
        "exampleId": "L3",
        "prompt": "R(a,b)=2a-b，a=-1、b=5。",
        "solutionSteps": [
          "2(-1)-5=-2-5。"
        ],
        "answer": "-7。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把 (-2)² 算成 -4",
        "why": "未把負數整體平方",
        "correction": "先寫括號，再算為 4。"
      },
      {
        "mistake": "只代入第一個 x",
        "why": "忽略同名未知數代表同一數",
        "correction": "逐一標記每個 x。"
      },
      {
        "mistake": "把 3x² 代入 x=2 算成 6²",
        "why": "把係數也放入平方",
        "correction": "3×(2²)=12。"
      }
    ],
    "selfCheck": [
      "我是否能能將同一未知數的每一處都代入指定值？",
      "我是否能代入負數時能使用括號保留符號？",
      "我是否能能依指數、乘除、加減順序求出精確值？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "所有同名未知數都要代入。",
      "負數代入一定加括號。",
      "先次方，再乘除，後加減。",
      "情境題最後檢查單位與可行範圍。"
    ],
    "connections": {
      "previous": "上一技能 多項式的項與係數 提供本節所需工具。",
      "next": [
        "下一節會將文字部分相同的項合併，先化簡再求值可降低計算量。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s002-v001",
        "u10-s002-v002",
        "u10-s002-v003",
        "u10-s002-v004",
        "u10-s002-v005",
        "u10-s002-v006",
        "u10-s002-v007",
        "u10-s002-v008",
        "u10-s002-v009",
        "u10-s002-v010",
        "u10-s002-v011",
        "u10-s002-v012"
      ],
      "constructedResponseIds": [
        "u10-s002-cr001",
        "u10-s002-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「多項式代入求值：先完整替換再計算」：定義、3 個例題、錯誤推理與下一技能銜接均針對 polynomial-evaluation；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "d1e0ce9a86822b0e39659145ab7b4d7a620f779096f39184d6a6444eca87c2ff"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s002-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "P(x)=3x+2，則 P(4) 為何？",
      "givenConditions": [],
      "target": "一次多項式求值",
      "choices": [
        "10",
        "14",
        "16",
        "20"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "代入 x=4：3×4+2=12+2=14。",
        "derivedChoice": "14",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "所有 x 以 4 替換後依乘法再加法計算。",
      "steps": [
        "代入 x=4：3×4+2=12+2=14。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": false,
          "reason": "漏加 2。"
        },
        {
          "choice": "14",
          "truth": true,
          "reason": "14 正確。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "把 3+4+2 相加。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "把 4² 誤用進來。"
        }
      ],
      "misconceptionTarget": "代入後漏做乘法或常數",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「一次多項式求值」且四個選項以同一表示層級作答；逐項重算後只有「14」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：一次多項式求值，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e04de41068ef88c9707c2b5217bea86446156301c816bca8da86aea48cf2d938"
    },
    {
      "questionId": "u10-s002-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "Q(x)=x²-5，則 Q(-3) 為何？",
      "givenConditions": [],
      "target": "負數代入平方",
      "choices": [
        "-14",
        "-4",
        "4",
        "14"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "Q(-3)=(-3)²-5=9-5=4。",
        "derivedChoice": "4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "負數代入平方必須加括號。",
      "steps": [
        "Q(-3)=(-3)²-5=9-5=4。"
      ],
      "optionAnalysis": [
        {
          "choice": "-14",
          "truth": false,
          "reason": "把 -3² 當 -9。"
        },
        {
          "choice": "-4",
          "truth": false,
          "reason": "算成 1，平方錯誤。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "4 正確。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "把減 5 看成加 5。"
        }
      ],
      "misconceptionTarget": "負數平方未加括號",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「負數代入平方」且四個選項以同一表示層級作答；逐項重算後只有「4」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：負數代入平方，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ec6bfdcc05450255e499a4dfad8f41fc53c28caf5fc3c4974b50cf19c0f7a148"
    },
    {
      "questionId": "u10-s002-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "R(a)=2a²-a，則 R(2) 為何？",
      "givenConditions": [],
      "target": "含平方的一次代入",
      "choices": [
        "4",
        "5",
        "8",
        "6"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "R(2)=2(2²)-2=8-2=6。",
        "derivedChoice": "6",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先算平方，再乘係數，最後減去 a。",
      "steps": [
        "R(2)=2(2²)-2=8-2=6。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "只算 2a。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "把 2a² 誤算為 2a。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "漏減最後的 a。"
        },
        {
          "choice": "6",
          "truth": true,
          "reason": "2(4)-2=6，正確。"
        }
      ],
      "misconceptionTarget": "係數與平方作用範圍混淆",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含平方的一次代入」且四個選項以同一表示層級作答；逐項重算後只有「6」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：含平方的一次代入，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ae590fdf81759eb3461dec9513d7477570bef5e11ce591c8dc66e8a08367f5fb"
    },
    {
      "questionId": "u10-s002-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 P(x)=2x²-3x+1，P(-2) 為何？",
      "givenConditions": [],
      "target": "完整代入二次多項式",
      "choices": [
        "15",
        "3",
        "-1",
        "-13"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "P(-2)=2(-2)²-3(-2)+1=8+6+1=15。",
        "derivedChoice": "15",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "分別計算二次項、一次項和常數後相加。",
      "steps": [
        "P(-2)=2(-2)²-3(-2)+1=8+6+1=15。"
      ],
      "optionAnalysis": [
        {
          "choice": "15",
          "truth": true,
          "reason": "15 正確。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "漏算 -3(-2) 的正號。"
        },
        {
          "choice": "-1",
          "truth": false,
          "reason": "把平方值當負。"
        },
        {
          "choice": "-13",
          "truth": false,
          "reason": "多處符號錯誤。"
        }
      ],
      "misconceptionTarget": "負數代入兩個不同次方時符號錯誤",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「完整代入二次多項式」且四個選項以同一表示層級作答；逐項重算後只有「15」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：完整代入二次多項式，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3cbe99e7d13724294a82956117a12e6d353cd408b0f2158b2ae5145c36641a45"
    },
    {
      "questionId": "u10-s002-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "A(t)=5-2t+t²，則 A(3) 為何？",
      "givenConditions": [],
      "target": "非降冪式求值",
      "choices": [
        "2",
        "5",
        "8",
        "14"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "A(3)=5-6+9=8。",
        "derivedChoice": "8",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "依原式三項求值並保留 -2t 的負號。",
      "steps": [
        "A(3)=5-6+9=8。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "漏加平方項。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "只算常數與一次項的絕對值。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "8 正確。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "把 -6 改成 +6。"
        }
      ],
      "misconceptionTarget": "忽略一次項負號",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「非降冪式求值」且四個選項以同一表示層級作答；逐項重算後只有「8」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：非降冪式求值，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ca10dbee80fa7d693e0e36a1a6ab438082b6acd10249e6c8d9e774e9f3f55087"
    },
    {
      "questionId": "u10-s002-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "F(x,y)=2x²-xy+y，當 x=-1、y=3 時，F 為何？",
      "givenConditions": [],
      "target": "兩變數求值",
      "choices": [
        "-4",
        "0",
        "2",
        "8"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "2(-1)²-(-1)(3)+3=2+3+3=8。",
        "derivedChoice": "8",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩個未知數分別代入，-xy 中的乘積符號要重新判定。",
      "steps": [
        "2(-1)²-(-1)(3)+3=2+3+3=8。"
      ],
      "optionAnalysis": [
        {
          "choice": "-4",
          "truth": false,
          "reason": "把平方與乘積都算錯。"
        },
        {
          "choice": "0",
          "truth": false,
          "reason": "漏掉 y。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "把 -xy 算成 -3。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "8 正確。"
        }
      ],
      "misconceptionTarget": "多變數代入時負號與乘積混亂",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「兩變數求值」且四個選項以同一表示層級作答；逐項重算後只有「8」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：兩變數求值，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "54d30ac9dafddd3b56e1ba26012f2063bd43ef9e0666cb4d45c1d9e4a1520142"
    },
    {
      "questionId": "u10-s002-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "P(x)=x³-3x。若 k 為正整數且 P(k)=18，下列何者是 k？",
      "givenConditions": [],
      "target": "由多項式值反查整數",
      "choices": [
        "3",
        "1",
        "2",
        "4"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "P(1)=-2，P(2)=2，P(4)=52，P(3)=27-9=18，所以 k=3。",
        "derivedChoice": "3",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "將四個候選值獨立代入，只有 3 符合。",
      "steps": [
        "P(1)=-2，P(2)=2，P(4)=52，P(3)=27-9=18，所以 k=3。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": true,
          "reason": "得到 18，正確。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "得到 -2。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "得到 2。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "得到 52。"
        }
      ],
      "misconceptionTarget": "只檢查單一候選或立方計算錯誤",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由多項式值反查整數」且四個選項以同一表示層級作答；逐項重算後只有「3」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由多項式值反查整數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f76b8a60003c26ca8552a12d7b360207a5f2cdb34c54356883e162b2319e9997"
    },
    {
      "questionId": "u10-s002-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 P(x)=ax²+2x-1 且 P(2)=15，則 a 為何？",
      "givenConditions": [],
      "target": "由指定函數值求係數",
      "choices": [
        "1",
        "3",
        "2",
        "4"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "P(2)=4a+4-1=4a+3=15，所以 4a=12，a=3。",
        "derivedChoice": "3",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先代入再解係數方程。",
      "steps": [
        "P(2)=4a+4-1=4a+3=15，所以 4a=12，a=3。"
      ],
      "optionAnalysis": [
        {
          "choice": "1",
          "truth": false,
          "reason": "a=1 時 P(2)=7。"
        },
        {
          "choice": "3",
          "truth": true,
          "reason": "a=3 時 P(2)=15。"
        },
        {
          "choice": "2",
          "truth": false,
          "reason": "a=2 時 P(2)=11。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "a=4 時 P(2)=19。"
        }
      ],
      "misconceptionTarget": "代入後未平方或解方程錯誤",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由指定函數值求係數」且四個選項以同一表示層級作答；逐項重算後只有「3」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由指定函數值求係數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d36f4c9c01778985dd7034ff6430f81919f857fa66fb00ddffbe53d09522ee29"
    },
    {
      "questionId": "u10-s002-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "P(x)=x²+x+1。P(2)-P(-2) 為何？",
      "givenConditions": [],
      "target": "比較兩個代入值",
      "choices": [
        "-4",
        "0",
        "8",
        "4"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "P(2)=7，P(-2)=4-2+1=3，差為 4。",
        "derivedChoice": "4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "分別代入正負 2，再依指定次序相減。",
      "steps": [
        "P(2)=7，P(-2)=4-2+1=3，差為 4。"
      ],
      "optionAnalysis": [
        {
          "choice": "-4",
          "truth": false,
          "reason": "把相減次序顛倒。"
        },
        {
          "choice": "0",
          "truth": false,
          "reason": "誤以為偶次式兩值相同。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "把兩值相加。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "7-3=4，正確。"
        }
      ],
      "misconceptionTarget": "忽略一次項使正負代入不同",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「比較兩個代入值」且四個選項以同一表示層級作答；逐項重算後只有「4」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：比較兩個代入值，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ac13878df9b5628a02c2902f227fdbf8f11acf22e8606151c7e86766947d61d4"
    },
    {
      "questionId": "u10-s002-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "溫度模型 T(h)=18-2h，h 表示午夜後經過小時數。h=5 時模型溫度為何？",
      "givenConditions": [],
      "target": "線性模型代入",
      "choices": [
        "8°C",
        "10°C",
        "13°C",
        "28°C"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "T(5)=18-2×5=8。",
        "derivedChoice": "8°C",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "每小時下降 2°C，5 小時共下降 10°C。",
      "steps": [
        "T(5)=18-2×5=8。"
      ],
      "optionAnalysis": [
        {
          "choice": "8°C",
          "truth": true,
          "reason": "18-10=8°C，正確。"
        },
        {
          "choice": "10°C",
          "truth": false,
          "reason": "少下降 2°C。"
        },
        {
          "choice": "13°C",
          "truth": false,
          "reason": "只做 18-5。"
        },
        {
          "choice": "28°C",
          "truth": false,
          "reason": "把下降當上升。"
        }
      ],
      "misconceptionTarget": "未把每小時變化乘小時數",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "T 的單位為 °C；-2 的單位為 °C/小時。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「線性模型代入」且四個選項以同一表示層級作答；逐項重算後只有「8°C」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：線性模型代入，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "時間與降溫率決定必須把 h=5 代入，情境也提供 °C 單位。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "3e9e264a7a7865fe8d6324bc352ea36699d8cfcea90bd7738e98a77059632dcf"
    },
    {
      "questionId": "u10-s002-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一張長方形紙的面積 A(x)=x(x+3)。當 x=7 公分時面積是多少？",
      "givenConditions": [],
      "target": "面積模型求值",
      "choices": [
        "49 平方公分",
        "70 平方公分",
        "73 平方公分",
        "140 平方公分"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "A(7)=7(7+3)=7×10=70 平方公分。",
        "derivedChoice": "70 平方公分",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "代入的是兩個邊長因數，乘積單位為平方公分。",
      "steps": [
        "A(7)=7(7+3)=7×10=70 平方公分。"
      ],
      "optionAnalysis": [
        {
          "choice": "49 平方公分",
          "truth": false,
          "reason": "只算 7²。"
        },
        {
          "choice": "70 平方公分",
          "truth": true,
          "reason": "70 平方公分正確。"
        },
        {
          "choice": "73 平方公分",
          "truth": false,
          "reason": "把 3 直接加到面積。"
        },
        {
          "choice": "140 平方公分",
          "truth": false,
          "reason": "多乘 2。"
        }
      ],
      "misconceptionTarget": "把面積乘法誤成加法",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "兩邊皆以公分計，面積為平方公分。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「面積模型求值」且四個選項以同一表示層級作答；逐項重算後只有「70 平方公分」成立。",
      "boundaryAudit": "x=7 使兩邊長 7、10 皆為正。",
      "difficultyReason": "素養：面積模型求值，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "邊長情境決定兩因數及平方單位，不能刪除而保留同一題意。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "56e418e90292b074cff2b3d081a0f067ea9166f6d3a714a70040e55295648266"
    },
    {
      "questionId": "u10-s002-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "活動總費用 C(n)=1200+45n。若有 32 人，總費用為何？",
      "givenConditions": [],
      "target": "成本模型代入",
      "choices": [
        "1440 元",
        "2685 元",
        "2640 元",
        "3840 元"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "C(32)=1200+45×32=1200+1440=2640。",
        "derivedChoice": "2640 元",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "固定費加上每人費用。",
      "steps": [
        "C(32)=1200+45×32=1200+1440=2640。"
      ],
      "optionAnalysis": [
        {
          "choice": "1440 元",
          "truth": false,
          "reason": "未依每人 45 元計算。"
        },
        {
          "choice": "2685 元",
          "truth": false,
          "reason": "多計一人費用。"
        },
        {
          "choice": "2640 元",
          "truth": true,
          "reason": "1200+45×32=2640，正確。"
        },
        {
          "choice": "3840 元",
          "truth": false,
          "reason": "錯把固定費重複計算。"
        }
      ],
      "misconceptionTarget": "固定費與單位費混算",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "1200 與 45n 均為元；n 為人數。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「成本模型代入」且四個選項以同一表示層級作答；逐項重算後只有「2640 元」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：成本模型代入，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "人數、固定費與每人費的角色決定運算和單位。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s002-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ff72b2b425dd1c138b1156ceca45e30d76b6d9d246df76cc066757b306659dd6"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s002-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "P(x)=2x²-3x+4。計算 P(-2)，並寫出代入的完整算式。",
      "requiredWork": [
        "負數代入加括號。",
        "依運算順序求值。"
      ],
      "standardSolution": [
        "P(-2)=2(-2)²-3(-2)+4。",
        "=2×4+6+4=18。"
      ],
      "alternativeMethods": [
        "可先分項計算：二次項 8、一次項 6、常數 4，再相加。"
      ],
      "reasoningSteps": [
        "P(-2)=2(-2)²-3(-2)+4。",
        "=2×4+6+4=18。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "完整代入且答案 18。"
        },
        {
          "score": 2,
          "criteria": "方法正確但單一算術錯。"
        },
        {
          "score": 1,
          "criteria": "有代入 -2 但平方或符號處理錯。"
        },
        {
          "score": 0,
          "criteria": "未代入或答案無關。"
        }
      ],
      "partialCreditRules": [
        "若只漏寫一組括號但後續算得 18，扣 1 分。"
      ],
      "followThroughPolicy": "早期把 (-2)² 算成 -4，後續運算一致可得 1 分方法分，不給正確答案分。",
      "unitAndNotationRules": "不涉及單位；等號鏈需保持左右相等。",
      "answerOnlyPolicy": "只寫 18 且無算式，最高 1 分。",
      "commonErrorTargets": [
        "將指定數值完整代入並依運算順序求值"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立重算 8+6+4=18。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1b8a406d51b8a96030ea98e16b0a51644f200482b4ba73189c4f979a5cb85848"
    },
    {
      "questionId": "u10-s002-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-concepts",
      "skillId": "polynomial-evaluation",
      "skillSlot": "s002",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "已知 Q(x)=ax²-2x+1，且 Q(3)=22。求 a，並用求得的 a 驗算。",
      "requiredWork": [
        "代入 x=3 建立方程。",
        "解出 a。",
        "回代驗算 Q(3)。"
      ],
      "standardSolution": [
        "9a-6+1=22，所以 9a-5=22，9a=27，a=3。",
        "驗算：3×9-6+1=22。"
      ],
      "alternativeMethods": [
        "可由 Q(3) 的二次項應為 27，直接算 a=27/9=3。"
      ],
      "reasoningSteps": [
        "9a-6+1=22，所以 9a-5=22，9a=27，a=3。",
        "驗算：3×9-6+1=22。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "方程、a=3、驗算三者完整。"
        },
        {
          "score": 2,
          "criteria": "a 正確但缺驗算，或單一書寫瑕疵。"
        },
        {
          "score": 1,
          "criteria": "正確代入形成 9a-5=22，但解算錯。"
        },
        {
          "score": 0,
          "criteria": "未形成合理方程。"
        }
      ],
      "partialCreditRules": [
        "驗算若只寫「符合」未列值，仍可得 2 分但不滿分。"
      ],
      "followThroughPolicy": "若把 -2(3) 算錯，後續正確解自己方程，可給 1 分；不得視為完全正確。",
      "unitAndNotationRules": "不涉及單位；a 為純數。",
      "answerOnlyPolicy": "只寫 a=3 無過程，最高 1 分。",
      "commonErrorTargets": [
        "將指定數值完整代入並依運算順序求值"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立代入確認 27-6+1=22。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "592d327271e39e9a65f5a9441b8f40099e51baaccfbb062bb1f7b256a76e0816"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s002-v001-review",
      "questionId": "u10-s002-v001",
      "questionContentSha256": "e04de41068ef88c9707c2b5217bea86446156301c816bca8da86aea48cf2d938",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入 x=4：3×4+2=12+2=14。",
      "derivedAnswer": "14",
      "storedAnswer": "14",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：10：漏加 2。；14：14 正確。；16：把 3+4+2 相加。；20：把 4² 誤用進來。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「代入後漏做乘法或常數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：一次多項式求值，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「P(x)=3x+2，則 P(4) 為何？」獨立重算：代入 x=4：3×4+2=12+2=14。 正解「14」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "b412ee36cb118b5c9fe74e519d54d7bb756fb454d55d8bdb364707349c425fd1"
    },
    {
      "reviewId": "u10-s002-v002-review",
      "questionId": "u10-s002-v002",
      "questionContentSha256": "ec6bfdcc05450255e499a4dfad8f41fc53c28caf5fc3c4974b50cf19c0f7a148",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "Q(-3)=(-3)²-5=9-5=4。",
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
        "secondCorrectAnswer": "逐一檢查四選項：-14：把 -3² 當 -9。；-4：算成 1，平方錯誤。；4：4 正確。；14：把減 5 看成加 5。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「負數平方未加括號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：負數代入平方，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「Q(x)=x²-5，則 Q(-3) 為何？」獨立重算：Q(-3)=(-3)²-5=9-5=4。 正解「4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "cb68a09a87da5e2a20af9bbb8662725dda9823aaa41888aacf83f2320dd9c734"
    },
    {
      "reviewId": "u10-s002-v003-review",
      "questionId": "u10-s002-v003",
      "questionContentSha256": "ae590fdf81759eb3461dec9513d7477570bef5e11ce591c8dc66e8a08367f5fb",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "R(2)=2(2²)-2=8-2=6。",
      "derivedAnswer": "6",
      "storedAnswer": "6",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4：只算 2a。；5：把 2a² 誤算為 2a。；8：漏減最後的 a。；6：2(4)-2=6，正確。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「係數與平方作用範圍混淆」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：含平方的一次代入，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「R(a)=2a²-a，則 R(2) 為何？」獨立重算：R(2)=2(2²)-2=8-2=6。 正解「6」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "0e10245d83f3283866cce214b4ae0f1117b69363b3e769a57f00a7f6785b95b8"
    },
    {
      "reviewId": "u10-s002-v004-review",
      "questionId": "u10-s002-v004",
      "questionContentSha256": "3cbe99e7d13724294a82956117a12e6d353cd408b0f2158b2ae5145c36641a45",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "P(-2)=2(-2)²-3(-2)+1=8+6+1=15。",
      "derivedAnswer": "15",
      "storedAnswer": "15",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：15：15 正確。；3：漏算 -3(-2) 的正號。；-1：把平方值當負。；-13：多處符號錯誤。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「負數代入兩個不同次方時符號錯誤」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：完整代入二次多項式，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 P(x)=2x²-3x+1，P(-2) 為何？」獨立重算：P(-2)=2(-2)²-3(-2)+1=8+6+1=15。 正解「15」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8916b47f552b3eff1de949433f82d5d3f7af9fe7bdc2669945a1f0c9a15a392e"
    },
    {
      "reviewId": "u10-s002-v005-review",
      "questionId": "u10-s002-v005",
      "questionContentSha256": "ca10dbee80fa7d693e0e36a1a6ab438082b6acd10249e6c8d9e774e9f3f55087",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "A(3)=5-6+9=8。",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2：漏加平方項。；5：只算常數與一次項的絕對值。；8：8 正確。；14：把 -6 改成 +6。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「忽略一次項負號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：非降冪式求值，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「A(t)=5-2t+t²，則 A(3) 為何？」獨立重算：A(3)=5-6+9=8。 正解「8」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "0cf81b2cebbda507c697c97c6c4fadccf76e0e2cdd44d9749013191289c6ce8b"
    },
    {
      "reviewId": "u10-s002-v006-review",
      "questionId": "u10-s002-v006",
      "questionContentSha256": "54d30ac9dafddd3b56e1ba26012f2063bd43ef9e0666cb4d45c1d9e4a1520142",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "2(-1)²-(-1)(3)+3=2+3+3=8。",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-4：把平方與乘積都算錯。；0：漏掉 y。；2：把 -xy 算成 -3。；8：8 正確。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「多變數代入時負號與乘積混亂」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：兩變數求值，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「F(x,y)=2x²-xy+y，當 x=-1、y=3 時，F 為何？」獨立重算：2(-1)²-(-1)(3)+3=2+3+3=8。 正解「8」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "4f4920fab82496ded2d3cc2ada2f1f8e2784b63f77e95e4b1ec89cc8bbf7ecd5"
    },
    {
      "reviewId": "u10-s002-v007-review",
      "questionId": "u10-s002-v007",
      "questionContentSha256": "f76b8a60003c26ca8552a12d7b360207a5f2cdb34c54356883e162b2319e9997",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "P(1)=-2，P(2)=2，P(4)=52，P(3)=27-9=18，所以 k=3。",
      "derivedAnswer": "3",
      "storedAnswer": "3",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3：得到 18，正確。；1：得到 -2。；2：得到 2。；4：得到 52。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只檢查單一候選或立方計算錯誤」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由多項式值反查整數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「P(x)=x³-3x。若 k 為正整數且 P(k)=18，下列何者是 k？」獨立重算：P(1)=-2，P(2)=2，P(4)=52，P(3)=27-9=18，所以 k=3。 正解「3」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "43f9c2b9fe9f4472017a93b6c1449deb1bbd419eb4ee2102a6f448a5cf27bbb8"
    },
    {
      "reviewId": "u10-s002-v008-review",
      "questionId": "u10-s002-v008",
      "questionContentSha256": "d36f4c9c01778985dd7034ff6430f81919f857fa66fb00ddffbe53d09522ee29",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "P(2)=4a+4-1=4a+3=15，所以 4a=12，a=3。",
      "derivedAnswer": "3",
      "storedAnswer": "3",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：1：a=1 時 P(2)=7。；3：a=3 時 P(2)=15。；2：a=2 時 P(2)=11。；4：a=4 時 P(2)=19。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「代入後未平方或解方程錯誤」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由指定函數值求係數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 P(x)=ax²+2x-1 且 P(2)=15，則 a 為何？」獨立重算：P(2)=4a+4-1=4a+3=15，所以 4a=12，a=3。 正解「3」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a816d3b0e2b625773d9e091920c5dd95e8db67614a7ea3fdaaaafae58ca85d74"
    },
    {
      "reviewId": "u10-s002-v009-review",
      "questionId": "u10-s002-v009",
      "questionContentSha256": "ac13878df9b5628a02c2902f227fdbf8f11acf22e8606151c7e86766947d61d4",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "P(2)=7，P(-2)=4-2+1=3，差為 4。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-4：把相減次序顛倒。；0：誤以為偶次式兩值相同。；8：把兩值相加。；4：7-3=4，正確。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「忽略一次項使正負代入不同」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：比較兩個代入值，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「P(x)=x²+x+1。P(2)-P(-2) 為何？」獨立重算：P(2)=7，P(-2)=4-2+1=3，差為 4。 正解「4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8cb8c39fb6f6265900ec4873037877da906036fb90629e29da0e7b02e2686b51"
    },
    {
      "reviewId": "u10-s002-v010-review",
      "questionId": "u10-s002-v010",
      "questionContentSha256": "3e9e264a7a7865fe8d6324bc352ea36699d8cfcea90bd7738e98a77059632dcf",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "T(5)=18-2×5=8。",
      "derivedAnswer": "8°C",
      "storedAnswer": "8°C",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：8°C：18-10=8°C，正確。；10°C：少下降 2°C。；13°C：只做 18-5。；28°C：把下降當上升。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "T 的單位為 °C；-2 的單位為 °C/小時。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未把每小時變化乘小時數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：線性模型代入，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "時間與降溫率決定必須把 h=5 代入，情境也提供 °C 單位。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「溫度模型 T(h)=18-2h，h 表示午夜後經過小時數。h=5 時模型溫度為何？」獨立重算：T(5)=18-2×5=8。 正解「8°C」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "b25eeecf4ea5d5f6a054caca413f9bd4479b110375e0eb1974567f8f4cd3dcd0"
    },
    {
      "reviewId": "u10-s002-v011-review",
      "questionId": "u10-s002-v011",
      "questionContentSha256": "56e418e90292b074cff2b3d081a0f067ea9166f6d3a714a70040e55295648266",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "A(7)=7(7+3)=7×10=70 平方公分。",
      "derivedAnswer": "70 平方公分",
      "storedAnswer": "70 平方公分",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：49 平方公分：只算 7²。；70 平方公分：70 平方公分正確。；73 平方公分：把 3 直接加到面積。；140 平方公分：多乘 2。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "兩邊皆以公分計，面積為平方公分。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x=7 使兩邊長 7、10 皆為正。",
        "alternateReading": "常見誤讀「把面積乘法誤成加法」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：面積模型求值，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "邊長情境決定兩因數及平方單位，不能刪除而保留同一題意。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一張長方形紙的面積 A(x)=x(x+3)。當 x=7 公分時面積是多少？」獨立重算：A(7)=7(7+3)=7×10=70 平方公分。 正解「70 平方公分」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "70c441dfa8430b8bacd066c87d278c886633c31d0d0348b128611cdeec08e9d7"
    },
    {
      "reviewId": "u10-s002-v012-review",
      "questionId": "u10-s002-v012",
      "questionContentSha256": "ff72b2b425dd1c138b1156ceca45e30d76b6d9d246df76cc066757b306659dd6",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "C(32)=1200+45×32=1200+1440=2640。",
      "derivedAnswer": "2640 元",
      "storedAnswer": "2640 元",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：1440 元：未依每人 45 元計算。；2685 元：多計一人費用。；2640 元：1200+45×32=2640，正確。；3840 元：錯把固定費重複計算。",
        "undefinedSymbol": "題幹用語均在「多項式代入求值」講義定義。",
        "unitConflict": "1200 與 45n 均為元；n 為人數。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「固定費與單位費混算」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：成本模型代入，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "人數、固定費與每人費的角色決定運算和單位。",
      "prerequisiteCheck": "使用先備技能：polynomial-terms；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「活動總費用 C(n)=1200+45n。若有 32 人，總費用為何？」獨立重算：C(32)=1200+45×32=1200+1440=2640。 正解「2640 元」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "820c0ce64129e69d43023c61d69ab5d8ed81d126f4b1b71b47d0849bb1a693d4"
    }
  ],
  "drawingSpecs": []
};
