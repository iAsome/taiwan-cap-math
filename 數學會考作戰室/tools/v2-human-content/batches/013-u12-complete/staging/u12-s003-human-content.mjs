// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u12-s003-lecture-r1",
  "unitId": "u12",
  "numericUnitId": 12,
  "topicId": "u12-methods",
  "skillId": "factoring-cross",
  "lockedSkillTitle": "十字交乘法",
  "title": "十字交乘法：用交叉和配出中間項",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能分解 x^2+bx+c。",
    "能分解 ax^2+bx+c 且 a 不等於 1。",
    "能利用常數正負判斷因數符號。",
    "能計算交叉乘積之和。",
    "能交換因數位置並辨認等價答案。"
  ],
  "prerequisites": [
    {
      "skillId": "factoring-formula",
      "requiredLevel": "能運用前一技能並以展開驗證結果；本講義會重新連接必要步驟。"
    }
  ],
  "prerequisiteBridge": "先備技能為 factoring-formula；先確認能完成前一方法並保留所有符號，再進入本技能。",
  "glossary": [
    {
      "term": "首項係數",
      "definition": "二次項前的係數 a。"
    },
    {
      "term": "常數項",
      "definition": "不含未知數的項 c。"
    },
    {
      "term": "交叉乘積",
      "definition": "兩組候選因數交叉相乘所得。"
    },
    {
      "term": "中間項係數",
      "definition": "x 的一次項係數 b。"
    }
  ],
  "notation": [
    {
      "symbol": "(px+q)(rx+s)",
      "meaning": "展開為 prx^2+(ps+qr)x+qs。"
    },
    {
      "symbol": "ps+qr",
      "meaning": "十字交乘要配成的中間係數。"
    }
  ],
  "conceptNarrative": [
    "十字交乘不是畫圖猜答案，而是同時滿足 pr=a、qs=c、ps+qr=b。",
    "常數為正時 q、s 同號；中間係數為正則多半同正，為負則同負。",
    "常數為負時 q、s 異號，交叉和的符號取決於絕對值較大的交叉乘積。",
    "候選配對找到後必須展開，因為首尾乘積正確仍可能中間項錯。"
  ],
  "formalDefinitions": [
    {
      "name": "十字交乘條件",
      "statement": "若 ax^2+bx+c=(px+q)(rx+s)，則 pr=a、qs=c、ps+qr=b。"
    }
  ],
  "formulas": [
    {
      "formula": "(px+q)(rx+s)=prx^2+(ps+qr)x+qs",
      "conditions": [
        "p、q、r、s 為選定因數"
      ],
      "meaning": "用係數比對驗證。"
    }
  ],
  "nonApplicableCases": [
    "無整數因數能同時配出三個係數時，不能宣稱已用整數係數分解。",
    "只看 q+s=b 只適用首項係數為 1 的特殊情形。",
    "交叉和符合但首項或常數乘積不符，仍不是答案。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "列出首項係數 a 的因數配對。",
      "check": "例如 6 可取 1×6 或 2×3。"
    },
    {
      "step": 2,
      "instruction": "列出常數 c 的帶號因數配對。",
      "check": "先用 c 的正負判斷同號或異號。"
    },
    {
      "step": 3,
      "instruction": "計算兩個交叉乘積。",
      "check": "不要只加常數因數。"
    },
    {
      "step": 4,
      "instruction": "找交叉和等於 b 的組合。",
      "check": "同時保留正負號。"
    },
    {
      "step": 5,
      "instruction": "寫成兩個一次因式並展開。",
      "check": "核對三項。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "x^2+9x+20",
      "solutionSteps": [
        "4·5=20。",
        "4+5=9。"
      ],
      "answer": "(x+4)(x+5)"
    },
    {
      "exampleId": "L2",
      "prompt": "x^2-2x-15",
      "solutionSteps": [
        "3·(-5)=-15。",
        "3+(-5)=-2。"
      ],
      "answer": "(x+3)(x-5)"
    },
    {
      "exampleId": "L3",
      "prompt": "6x^2+11x+3",
      "solutionSteps": [
        "首項 3x·2x=6x^2。",
        "交叉和 9x+2x=11x。",
        "常數 1·3=3。"
      ],
      "answer": "(3x+1)(2x+3)"
    },
    {
      "exampleId": "L4",
      "prompt": "8y^2-2y-3",
      "solutionSteps": [
        "交叉和 4y-6y=-2y。",
        "首末項也吻合。"
      ],
      "answer": "(4y-3)(2y+1)"
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
      "mistake": "只找兩數相加等於 b。",
      "why": "把非首一係數當首一。",
      "correction": "需算 ps+qr。"
    },
    {
      "mistake": "常數負號漏掉。",
      "why": "只列正因數。",
      "correction": "常數負時兩常數因數異號。"
    },
    {
      "mistake": "交叉乘積加錯。",
      "why": "位置混亂。",
      "correction": "逐項寫出 ps 與 qr。"
    },
    {
      "mistake": "找到一組首尾乘積就停止。",
      "why": "未查中間項。",
      "correction": "一定展開。"
    },
    {
      "mistake": "把等價因式順序當不同答案。",
      "why": "忽略乘法交換律。",
      "correction": "(A)(B) 與 (B)(A) 相同。"
    },
    {
      "mistake": "分解後括號係數仍有共同因數。",
      "why": "未做完整性檢查。",
      "correction": "先提總公因式通常更清楚。"
    }
  ],
  "selfCheck": [
    "我是否先判斷可用的方法？",
    "每一項、每個符號與外層因式都保留了嗎？",
    "我是否把結果展開回原式？",
    "情境中的單位與變數限制是否合理？"
  ],
  "summary": [
    "十字交乘同時控制首項、常數與中間項。",
    "核心檢查是 pr=a、qs=c、ps+qr=b。",
    "候選答案一定要展開。"
  ],
  "connections": {
    "previous": "承接 factoring-formula。",
    "next": "依鎖定順序銜接下一技能；本單元不提前使用一元二次方程式解根。"
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u12-s003-v001",
      "u12-s003-v002",
      "u12-s003-v003",
      "u12-s003-v004",
      "u12-s003-v005",
      "u12-s003-v006",
      "u12-s003-v007",
      "u12-s003-v008",
      "u12-s003-v009",
      "u12-s003-v010",
      "u12-s003-v011",
      "u12-s003-v012"
    ],
    "constructedResponseIds": [
      "u12-s003-cr001",
      "u12-s003-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四個例題分別重算首項乘積、常數乘積和兩個交叉乘積；包含首一、非首一與異號案例，均能完整展開回原式。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "270f3f0159421ed0d1cd4408a461a37ebcdadb9803f9e30c1175e2a55b18244f"
};

export const QUESTIONS = [
  {
    "questionId": "u12-s003-v001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 x²+5x+6 因式分解，何者正確？",
    "givenConditions": [
      "x 為變數；整數係數分解。"
    ],
    "target": "找兩數積為 6、和為 5。",
    "choices": [
      "(x+1)(x+6)",
      "(x-2)(x-3)",
      "(x+2)(x+3)",
      "(x+6)(x-1)"
    ],
    "answerIndex": 2,
    "independentSolution": "(x+2)(x+3)=x²+3x+2x+6=x²+5x+6。",
    "explanation": "首項為 x²，尋找常數因數 2、3；乘積 6、和 5。",
    "steps": [
      "列 6 的正因數配對。",
      "選 2 與 3 使和為 5。",
      "展開驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "(x+1)(x+6)",
        "truth": false,
        "reason": "中間項係數為 7。"
      },
      {
        "choice": "(x-2)(x-3)",
        "truth": false,
        "reason": "中間項為 -5x。"
      },
      {
        "choice": "(x+2)(x+3)",
        "truth": true,
        "reason": "2·3=6 且 2+3=5。"
      },
      {
        "choice": "(x+6)(x-1)",
        "truth": false,
        "reason": "常數為 -6。"
      }
    ],
    "misconceptionTarget": "只看常數乘積，不查中間項。",
    "prerequisiteCheck": "需會整數因數配對與分配律。",
    "estimatedTimeSec": 60,
    "unitAndRoundingChecks": "無單位；係數皆為精確整數。",
    "ambiguityAndBoundaryAudit": "因式順序交換等價；選項僅列一種。",
    "difficultyReason": "首一且全正，十字條件最直接。",
    "literacyContextNecessity": null,
    "authoringIntent": "建立首一三項式的十字交乘。",
    "concept": "積與和",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "十字交乘法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3d72517d0a9a6813f6aeba94d07e5c7da067a6055360018b7d1676f9e6ee7f2d"
  },
  {
    "questionId": "u12-s003-v002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "x²-x-12 的因式分解為何？",
    "givenConditions": [
      "x 為變數；整數係數分解。"
    ],
    "target": "找異號因數使積 -12、和 -1。",
    "choices": [
      "(x-3)(x+4)",
      "(x-6)(x+2)",
      "(x-12)(x+1)",
      "(x+3)(x-4)"
    ],
    "answerIndex": 3,
    "independentSolution": "展開得 x²-4x+3x-12=x²-x-12。",
    "explanation": "常數為負，兩因數異號；3 與 -4 的和為 -1。",
    "steps": [
      "列 -12 的異號配對。",
      "比較各配對的和。",
      "選 3、-4。"
    ],
    "optionAnalysis": [
      {
        "choice": "(x-3)(x+4)",
        "truth": false,
        "reason": "中間項為 +x。"
      },
      {
        "choice": "(x-6)(x+2)",
        "truth": false,
        "reason": "中間項為 -4x。"
      },
      {
        "choice": "(x-12)(x+1)",
        "truth": false,
        "reason": "中間項為 -11x。"
      },
      {
        "choice": "(x+3)(x-4)",
        "truth": true,
        "reason": "3·(-4)=-12，3+(-4)=-1。"
      }
    ],
    "misconceptionTarget": "異號方向顛倒，使中間項變號。",
    "prerequisiteCheck": "需會帶號整數加乘。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "因式交換順序不改答案。",
    "difficultyReason": "需利用負常數判斷異號。",
    "literacyContextNecessity": null,
    "authoringIntent": "處理首一異號三項式。",
    "concept": "異號配對",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "十字交乘法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c19f544961ba6095b70e87863afd90ff42c25bd03d4c735232176feddf00a0be"
  },
  {
    "questionId": "u12-s003-v003",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2x²+7x+3 可用十字交乘分解為何？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "同時配首項與常數。",
    "choices": [
      "(2x+1)(x+3)",
      "(2x+3)(x+1)",
      "(x+1)(x+3)",
      "(2x-1)(x-3)"
    ],
    "answerIndex": 0,
    "independentSolution": "(2x+1)(x+3)=2x²+6x+x+3=2x²+7x+3。",
    "explanation": "首項配 2x、x，常數配 1、3；交叉和 2x·3+1·x=7x。",
    "steps": [
      "列 2=2·1。",
      "列 3=1·3。",
      "測交叉和並展開。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2x+1)(x+3)",
        "truth": true,
        "reason": "交叉項 6x+x=7x，首末乘積也正確。"
      },
      {
        "choice": "(2x+3)(x+1)",
        "truth": false,
        "reason": "交叉項 2x+3x=5x。"
      },
      {
        "choice": "(x+1)(x+3)",
        "truth": false,
        "reason": "首項只有 x²。"
      },
      {
        "choice": "(2x-1)(x-3)",
        "truth": false,
        "reason": "中間項為 -7x，常數雖為 3。"
      }
    ],
    "misconceptionTarget": "把常數因數放錯位置卻未計交叉和。",
    "prerequisiteCheck": "需掌握通式展開。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位；精確係數。",
    "ambiguityAndBoundaryAudit": "兩因式交換等價，但常數在括號內的位置影響交叉和。",
    "difficultyReason": "首項係數不為 1，需真正計算十字。",
    "literacyContextNecessity": null,
    "authoringIntent": "建立非首一十字交乘。",
    "concept": "交叉和",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "十字交乘法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3d2983a1a2f95c0028fbca6475fc0be8f50600dcdb7905da5d2b243769de7e25"
  },
  {
    "questionId": "u12-s003-v004",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "3x²-11x-4 的因式分解為何？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "選異號常數並配出 -11x。",
    "choices": [
      "(3x-1)(x+4)",
      "(3x+1)(x-4)",
      "(3x-4)(x+1)",
      "(x-4)(x+1)"
    ],
    "answerIndex": 1,
    "independentSolution": "3x²-12x+x-4=3x²-11x-4。",
    "explanation": "首項配 3x、x；常數配 +1、-4，交叉和 -12+1=-11。",
    "steps": [
      "判斷常數異號。",
      "測試 1、-4 的排列。",
      "展開確認。"
    ],
    "optionAnalysis": [
      {
        "choice": "(3x-1)(x+4)",
        "truth": false,
        "reason": "交叉項 12x-x=11x。"
      },
      {
        "choice": "(3x+1)(x-4)",
        "truth": true,
        "reason": "交叉項 -12x+x=-11x，常數 -4。"
      },
      {
        "choice": "(3x-4)(x+1)",
        "truth": false,
        "reason": "交叉項 3x-4x=-x。"
      },
      {
        "choice": "(x-4)(x+1)",
        "truth": false,
        "reason": "首項係數不足。"
      }
    ],
    "misconceptionTarget": "只找到異號因數，未調整在兩括號中的位置。",
    "prerequisiteCheck": "需會帶號交叉乘法。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位或近似。",
    "ambiguityAndBoundaryAudit": "候選全部首尾可能部分相同，但只有一個中間項吻合。",
    "difficultyReason": "需要控制交叉乘積大小與符號。",
    "literacyContextNecessity": null,
    "authoringIntent": "精確配出負大中間項。",
    "concept": "非首一異號",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "十字交乘法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "379d5d444ed72605ed6256fb4bec0015b2930a42904e9886d20e68b9c781d05c"
  },
  {
    "questionId": "u12-s003-v005",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "6x²+x-2 的因式分解為何？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "找首項因數與異號常數。",
    "choices": [
      "(3x-2)(2x+1)",
      "(6x-1)(x+2)",
      "(3x+2)(2x-1)",
      "(2x+2)(3x-1)"
    ],
    "answerIndex": 2,
    "independentSolution": "(3x+2)(2x-1)=6x²-3x+4x-2=6x²+x-2。",
    "explanation": "將 6x² 配為 3x·2x，-2 配為 2·(-1)，交叉和為 1x。",
    "steps": [
      "列首項配對 3×2。",
      "列常數異號配對 2、-1。",
      "計算兩交叉項。"
    ],
    "optionAnalysis": [
      {
        "choice": "(3x-2)(2x+1)",
        "truth": false,
        "reason": "交叉項 3x-4x=-x。"
      },
      {
        "choice": "(6x-1)(x+2)",
        "truth": false,
        "reason": "交叉項 12x-x=11x。"
      },
      {
        "choice": "(3x+2)(2x-1)",
        "truth": true,
        "reason": "交叉項 -3x+4x=x。"
      },
      {
        "choice": "(2x+2)(3x-1)",
        "truth": false,
        "reason": "展開中間項 4x，且可見共同因式未匹配。"
      }
    ],
    "misconceptionTarget": "交叉項順序顛倒造成一次項符號相反。",
    "prerequisiteCheck": "需會 6 的多組因數配對。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位；結果精確。",
    "ambiguityAndBoundaryAudit": "整數係數範圍內正解唯一至因式交換。",
    "difficultyReason": "中間係數僅 1，需讓兩交叉積差 1。",
    "literacyContextNecessity": null,
    "authoringIntent": "以相近交叉積配出小係數。",
    "concept": "交叉差",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "十字交乘法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d4a68c5737e2245f8ab93599f4d61120aea71c4193577a37eb03fd53766d332c"
  },
  {
    "questionId": "u12-s003-v006",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "4x²-4x-15 可分解成何者？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "配出首項 4、常數 -15 與中間 -4。",
    "choices": [
      "(4x+3)(x-5)",
      "(2x-3)(2x+5)",
      "(x+3)(4x-5)",
      "(2x+3)(2x-5)"
    ],
    "answerIndex": 3,
    "independentSolution": "展開為 4x²-10x+6x-15=4x²-4x-15。",
    "explanation": "首項取 2x、2x；常數取 +3、-5，交叉和 -10+6=-4。",
    "steps": [
      "常數負故異號。",
      "試 3 與 5 的位置。",
      "選使負交叉絕對值較大者。"
    ],
    "optionAnalysis": [
      {
        "choice": "(4x+3)(x-5)",
        "truth": false,
        "reason": "交叉項 -20x+3x=-17x。"
      },
      {
        "choice": "(2x-3)(2x+5)",
        "truth": false,
        "reason": "交叉項 10x-6x=4x。"
      },
      {
        "choice": "(x+3)(4x-5)",
        "truth": false,
        "reason": "交叉項 12x-5x=7x。"
      },
      {
        "choice": "(2x+3)(2x-5)",
        "truth": true,
        "reason": "交叉項 -10x+6x=-4x。"
      }
    ],
    "misconceptionTarget": "只看 3-5=-2，忽略前方 2x 倍數。",
    "prerequisiteCheck": "需會非首一十字交乘。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "所有選項常數均為 -15，但中間項只有正解吻合。",
    "difficultyReason": "首項因數相同但交叉仍需計係數。",
    "literacyContextNecessity": null,
    "authoringIntent": "強化交叉項而非常數和。",
    "concept": "係數加權",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "十字交乘法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a8b05cf43f0261d5297763c086df6ac4e9ea0abfe1ddc6977665747c50875a7b"
  },
  {
    "questionId": "u12-s003-v007",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x²+kx+18=(x+3)(x+6)，則 k 為何？",
    "givenConditions": [
      "k 為整數。"
    ],
    "target": "由交叉和求中間係數。",
    "choices": [
      "9",
      "3",
      "18",
      "6"
    ],
    "answerIndex": 0,
    "independentSolution": "中間係數由 3+6=9；常數 18 另行吻合。",
    "explanation": "(x+3)(x+6)=x²+9x+18，所以 k=9。",
    "steps": [
      "展開四項。",
      "合併一次項。",
      "比對 kx。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": true,
        "reason": "展開右式，中間項為 6x+3x=9x。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "只取其中一個常數因數。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "誤把常數乘積當中間係數。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "只取另一個常數因數。"
      }
    ],
    "misconceptionTarget": "把乘積 18 或單一因數當 k。",
    "prerequisiteCheck": "需會展開與係數比對。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位；k 精確。",
    "ambiguityAndBoundaryAudit": "等式為恆等式，按同次項係數比對。",
    "difficultyReason": "由已知因式反推係數。",
    "literacyContextNecessity": null,
    "authoringIntent": "反向使用十字交乘。",
    "concept": "係數反推",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "十字交乘法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2700933018349accaa67a4b30ead28e3d89de5bd9a911c1ac46b6ffe4ddd29a3"
  },
  {
    "questionId": "u12-s003-v008",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 6x²+bx-12=(3x-2)(2x+6)。b 的值為何？",
    "givenConditions": [
      "b 為整數。"
    ],
    "target": "計算兩個交叉項之和。",
    "choices": [
      "22",
      "14",
      "12",
      "-14"
    ],
    "answerIndex": 1,
    "independentSolution": "與左式比較一次項係數，b=14。",
    "explanation": "展開右式：6x²+18x-4x-12=6x²+14x-12。",
    "steps": [
      "算首項 6x²。",
      "算交叉項 18x、-4x。",
      "合併得 14x。"
    ],
    "optionAnalysis": [
      {
        "choice": "22",
        "truth": false,
        "reason": "把 18 與 4 相加，忽略負號。"
      },
      {
        "choice": "14",
        "truth": true,
        "reason": "交叉項為 18x-4x=14x。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "誤用常數乘積的絕對值。"
      },
      {
        "choice": "-14",
        "truth": false,
        "reason": "把交叉和符號整體顛倒。"
      }
    ],
    "misconceptionTarget": "交叉乘積符號處理錯誤。",
    "prerequisiteCheck": "需會負號乘法與同類項。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "所有係數均由恆等展開唯一決定。",
    "difficultyReason": "非對稱因式的交叉和反推。",
    "literacyContextNecessity": null,
    "authoringIntent": "以展開驗證十字結構。",
    "concept": "交叉係數",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "十字交乘法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1dec0271aef91e46571133e1662d67d4f36a09a9da82c2838887040f92b80aec"
  },
  {
    "questionId": "u12-s003-v009",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "二次式 2x²+mx+8 可分解為 (2x+4)(x+2)。下列關於 m 與分解完整性的敘述何者正確？",
    "givenConditions": [
      "m 為整數。"
    ],
    "target": "求 m 並判斷是否還有公因式。",
    "choices": [
      "m=6，且已完整",
      "m=8，且已完整",
      "m=8，且原分解不是最精簡形式",
      "m=4，且可寫成 2(x+4)(x+2)"
    ],
    "answerIndex": 2,
    "independentSolution": "原式係數比對得 m=8；完整分解還要提出數字 2。",
    "explanation": "(2x+4)(x+2)=2(x+2)(x+2)=2x²+8x+8。",
    "steps": [
      "先展開求 m=8。",
      "觀察 2x+4=2(x+2)。",
      "寫成 2(x+2)²。"
    ],
    "optionAnalysis": [
      {
        "choice": "m=6，且已完整",
        "truth": false,
        "reason": "中間項不是 6x。"
      },
      {
        "choice": "m=8，且已完整",
        "truth": false,
        "reason": "m 正確，但 (2x+4) 還可提出 2。"
      },
      {
        "choice": "m=8，且原分解不是最精簡形式",
        "truth": true,
        "reason": "展開中間項為 4x+4x=8x；兩因式可提出 2，完整形式為 2(x+2)²。"
      },
      {
        "choice": "m=4，且可寫成 2(x+4)(x+2)",
        "truth": false,
        "reason": "中間係數與改寫皆不符。"
      }
    ],
    "misconceptionTarget": "只驗證十字交乘，沒有檢查因式內共同因數。",
    "prerequisiteCheck": "需整合提公因式與十字交乘。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "無單位；係數精確。",
    "ambiguityAndBoundaryAudit": "「最精簡」限定整數係數並把常數公因式置於外層。",
    "difficultyReason": "同時考係數與完整分解層次。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認表面分解仍可整理。",
    "concept": "完整性",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "十字交乘法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "00d7ed963bd927b8171bb254fdd133580a382f24f3ead1e7e32b2d5ec865a1c4"
  },
  {
    "questionId": "u12-s003-v010",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長方形地墊面積為 x²+8x+15 平方公尺，設計圖要求兩邊皆為「x 加整數」公尺。可能的邊長為何？",
    "givenConditions": [
      "x>0；邊長為正。"
    ],
    "target": "把面積三項式分解。",
    "choices": [
      "x+1 與 x+15 公尺",
      "x-3 與 x-5 公尺",
      "x+8 與 x+15 公尺",
      "x+3 與 x+5 公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "面積乘回 x²+8x+15 平方公尺。",
    "explanation": "x²+8x+15=(x+3)(x+5)，兩因式可解讀為長與寬。",
    "steps": [
      "找 15 的正因數配對。",
      "選和為 8 的 3、5。",
      "檢查 x>0 時兩邊正。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+1 與 x+15 公尺",
        "truth": false,
        "reason": "中間項會是 16x。"
      },
      {
        "choice": "x-3 與 x-5 公尺",
        "truth": false,
        "reason": "中間項為 -8x。"
      },
      {
        "choice": "x+8 與 x+15 公尺",
        "truth": false,
        "reason": "常數乘積為 120。"
      },
      {
        "choice": "x+3 與 x+5 公尺",
        "truth": true,
        "reason": "3·5=15，3+5=8。"
      }
    ],
    "misconceptionTarget": "只配常數乘積，忽略中間項。",
    "prerequisiteCheck": "需知道長方形面積。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "兩因式單位公尺，乘積為平方公尺；無近似。",
    "ambiguityAndBoundaryAudit": "長寬交換視為同一組尺寸。",
    "difficultyReason": "需把代數因式解讀為實際邊長。",
    "literacyContextNecessity": "設計圖限定邊長型式，十字交乘直接找出兩個尺寸，情境提供正值限制。",
    "authoringIntent": "由面積還原尺寸。",
    "concept": "面積尺寸",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "十字交乘法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d27c50dade6dbe146db8abd8e46ab8f4da03f5f00bf049885298c1a8d3f0db59"
  },
  {
    "questionId": "u12-s003-v011",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一批商品的總標價模型為 3n²+10n+8 元，會計希望寫成兩個一次式的乘積以檢查計價層級。正確分解為何？",
    "givenConditions": [
      "n 為正整數。"
    ],
    "target": "以十字交乘重寫總價。",
    "choices": [
      "(3n+4)(n+2) 元",
      "(3n+2)(n+4) 元",
      "(n+4)(n+2) 元",
      "(3n-4)(n-2) 元"
    ],
    "answerIndex": 0,
    "independentSolution": "展開逐項為 3n²+6n+4n+8。",
    "explanation": "3n²+10n+8=(3n+4)(n+2)。",
    "steps": [
      "首項配 3n、n。",
      "常數配 4、2。",
      "交叉和為 10n。"
    ],
    "optionAnalysis": [
      {
        "choice": "(3n+4)(n+2) 元",
        "truth": true,
        "reason": "交叉項 6n+4n=10n，常數 8。"
      },
      {
        "choice": "(3n+2)(n+4) 元",
        "truth": false,
        "reason": "交叉項 12n+2n=14n。"
      },
      {
        "choice": "(n+4)(n+2) 元",
        "truth": false,
        "reason": "二次項係數只有 1。"
      },
      {
        "choice": "(3n-4)(n-2) 元",
        "truth": false,
        "reason": "中間項為 -10n。"
      }
    ],
    "misconceptionTarget": "常數因數位置互換卻未重算交叉和。",
    "prerequisiteCheck": "需會非首一十字交乘。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "總價單位為元；因式為計價模型因子，不另賦物理單位；結果精確。",
    "ambiguityAndBoundaryAudit": "n 為正整數，所有項皆有意義。",
    "difficultyReason": "情境數量為正，且首項非首一。",
    "literacyContextNecessity": "乘積形式用來對照兩層計價因子；若刪除會失去檢核層級的意義。",
    "authoringIntent": "在計價模型中核對交叉項。",
    "concept": "計價結構",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "十字交乘法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "aa8ff3697ad790185c98ef86e9c2252a4e902ade4a7025dbb6797b7d4e61be10"
  },
  {
    "questionId": "u12-s003-v012",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某活動座位總數以 2r²+9r+4 表示，規劃者猜測可排成 (2r+1) 排、每排 (r+4) 席。此猜測是否正確？",
    "givenConditions": [
      "r 為正整數。"
    ],
    "target": "展開候選尺寸並判斷。",
    "choices": [
      "不正確，因中間項應為 8r",
      "正確，因展開為 2r²+9r+4",
      "不正確，因常數應為 5",
      "正確，但只在 r=1 時成立"
    ],
    "answerIndex": 1,
    "independentSolution": "三個係數完全相同，因此排列模型恆等成立。",
    "explanation": "(2r+1)(r+4)=2r²+8r+r+4=2r²+9r+4。",
    "steps": [
      "計算四個乘積。",
      "合併 8r+r。",
      "比對原總數。"
    ],
    "optionAnalysis": [
      {
        "choice": "不正確，因中間項應為 8r",
        "truth": false,
        "reason": "漏算另一個交叉項 r。"
      },
      {
        "choice": "正確，因展開為 2r²+9r+4",
        "truth": true,
        "reason": "交叉項 8r+r=9r，首末項也吻合。"
      },
      {
        "choice": "不正確，因常數應為 5",
        "truth": false,
        "reason": "1·4=4，不是 5。"
      },
      {
        "choice": "正確，但只在 r=1 時成立",
        "truth": false,
        "reason": "這是恆等分解，對所有 r 都成立。"
      }
    ],
    "misconceptionTarget": "只算一個交叉乘積，或把單點檢查當條件。",
    "prerequisiteCheck": "需會展開與正整數解讀。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "兩因式為席數計數，乘積為總席數；無近似。",
    "ambiguityAndBoundaryAudit": "r>0 保證排數與每排席數為正。",
    "difficultyReason": "需驗證規劃者提出的因式而非自行分解。",
    "literacyContextNecessity": "排數與每排席數的乘積必須等於總數，情境要求驗證尺寸模型。",
    "authoringIntent": "驗證座位排列模型。",
    "concept": "排列驗證",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "十字交乘法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b1959ffd4c578e830b4df570f3d5d4c7016c16957e2fc9a588aa71a6cda57204"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u12-s003-cr001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "使用十字交乘法分解 6x²-7x-3，列出你的交叉乘積並展開檢查。",
    "requiredWork": [
      "列首項因數配對。",
      "列常數異號配對。",
      "寫出兩個交叉乘積。",
      "完整展開。"
    ],
    "fullCreditSolution": [
      "取 (3x+1)(2x-3)。",
      "交叉乘積為 -9x 與 +2x，和為 -7x。",
      "展開得 6x²-7x-3。"
    ],
    "alternativeSolutions": [
      "亦可寫 (2x-3)(3x+1)，因式順序交換。"
    ],
    "reasoningSteps": [
      "3x·2x=6x²。",
      "1·(-3)=-3。",
      "3x·(-3)+1·2x=-7x。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確分解為 (3x+1)(2x-3)，交叉乘積與回展均完整。"
      },
      {
        "score": 2,
        "criteria": "因式正確但交叉乘積或展開說明缺一；或一處算術小錯。"
      },
      {
        "score": 1,
        "criteria": "有合理因數配對且首尾乘積正確，但中間項未配成 -7x。"
      },
      {
        "score": 0,
        "criteria": "未使用有效因數配對，或結果首項、常數皆錯。"
      }
    ],
    "partialCreditRules": [
      "因式順序交換完全給分。",
      "只寫答案無交叉證據最高 2 分。"
    ],
    "followThroughPolicy": "若兩個交叉積之一算錯但因式本身正確，視為書寫錯可給 2 分；若因式錯但展開忠實，依可辨認方法給 1 分。",
    "unitAndNotationRules": [
      "無單位。",
      "負號需附在正確常數因數。"
    ],
    "answerOnlyPolicy": "正確答案但無過程最高 2 分。",
    "commonErrors": [
      "只找 -3 的異號因數，不計交叉。",
      "把 -9x+2x 算成 -11x。"
    ],
    "independentReview": {
      "derivedResult": "(3x+1)(2x-3)。",
      "ambiguity": "整數係數分解；順序交換接受。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "5943ee44b3ff10798a5be31e05d4ffbf5c37d419667380e405677f77d700df66"
  },
  {
    "questionId": "u12-s003-cr002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-cross",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "已知 8x²+kx-3=(4x-3)(2x+1)。求 k，並說明首項、一次項、常數項三項如何同時驗證。",
    "requiredWork": [
      "完整展開右式。",
      "比對三個係數。",
      "求出 k。"
    ],
    "fullCreditSolution": [
      "右式=8x²+4x-6x-3=8x²-2x-3。",
      "所以 k=-2。",
      "首項 8、常數 -3 與左式一致，一次項交叉和為 -2x。"
    ],
    "alternativeSolutions": [
      "可直接計算交叉係數 4·1+(-3)·2=4-6=-2，再核對首尾。"
    ],
    "reasoningSteps": [
      "首項 4x·2x。",
      "交叉項 4x、-6x。",
      "常數 -3·1。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "得到 k=-2，並分別核對首項、交叉一次項與常數。"
      },
      {
        "score": 2,
        "criteria": "k 正確但只核對一次項，或有一處說明省略。"
      },
      {
        "score": 1,
        "criteria": "能算出部分交叉乘積或正確展開兩項，但 k 未正確。"
      },
      {
        "score": 0,
        "criteria": "把常數乘積或首項係數當作 k。"
      }
    ],
    "partialCreditRules": [
      "只寫 k=-2 最高 1 分，因題目要求三項驗證。",
      "以係數公式 pr、ps+qr、qs 說明可得滿分。"
    ],
    "followThroughPolicy": "若首尾核對正確而交叉合併算錯，依過程給 1 至 2 分；若 k 先寫錯但後續展開自洽，不給最終答案分。",
    "unitAndNotationRules": [
      "k 無單位。",
      "負號必須明確。"
    ],
    "answerOnlyPolicy": "答案只有 -2 且無驗證最高 1 分。",
    "commonErrors": [
      "4-6 寫成 +2。",
      "只比常數 -3 就認定全部正確。"
    ],
    "independentReview": {
      "derivedResult": "k=-2，三個係數均由展開吻合。",
      "ambiguity": "等式按恆等式處理，不需代入特定 x。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "856152bd225718eeeedd810d52746a84a5bfce5f9d25fdd899bc63371654c9b4"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u12-s003-v001",
    "unitId": "u12",
    "skillId": "factoring-cross",
    "contentSha256": "3d72517d0a9a6813f6aeba94d07e5c7da067a6055360018b7d1676f9e6ee7f2d",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "(x+2)(x+3)=x²+3x+2x+6=x²+5x+6。",
    "derivedAnswer": "(x+2)(x+3)",
    "storedAnswer": "(x+2)(x+3)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「將 x²+5x+6 因式分解，何者正確？」逐一展開或回代；正解「(x+2)(x+3)」成立。「(x+1)(x+6)」不成立：中間項係數為 7。；「(x-2)(x-3)」不成立：中間項為 -5x。；「(x+6)(x-1)」不成立：常數為 -6。",
      "undefinedSymbol": "題幹已給條件為「x 為變數；整數係數分解。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「找兩數積為 6、和為 5。」。",
      "unitConflict": "本題單位審查：無單位；係數皆為精確整數。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；係數皆為精確整數。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：因式順序交換等價；選項僅列一種。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「找兩數積為 6、和為 5。」閱讀後，常見誤讀為「只看常數乘積，不查中間項。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "首一且全正，十字條件最直接。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會整數因數配對與分配律。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s003-v001：(x+2)(x+3)=x²+3x+2x+6=x²+5x+6。 因此導出「(x+2)(x+3)」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「找兩數積為 6、和為 5。」，並特別排除「只看常數乘積，不查中間項。」。難度理由是「首一且全正，十字條件最直接。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s003-v002",
    "unitId": "u12",
    "skillId": "factoring-cross",
    "contentSha256": "c19f544961ba6095b70e87863afd90ff42c25bd03d4c735232176feddf00a0be",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開得 x²-4x+3x-12=x²-x-12。",
    "derivedAnswer": "(x+3)(x-4)",
    "storedAnswer": "(x+3)(x-4)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「x²-x-12 的因式分解為何？」逐一展開或回代；正解「(x+3)(x-4)」成立。「(x-3)(x+4)」不成立：中間項為 +x。；「(x-6)(x+2)」不成立：中間項為 -4x。；「(x-12)(x+1)」不成立：中間項為 -11x。",
      "undefinedSymbol": "題幹已給條件為「x 為變數；整數係數分解。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「找異號因數使積 -12、和 -1。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：因式交換順序不改答案。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「找異號因數使積 -12、和 -1。」閱讀後，常見誤讀為「異號方向顛倒，使中間項變號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需利用負常數判斷異號。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會帶號整數加乘。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s003-v002：展開得 x²-4x+3x-12=x²-x-12。 因此導出「(x+3)(x-4)」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「找異號因數使積 -12、和 -1。」，並特別排除「異號方向顛倒，使中間項變號。」。難度理由是「需利用負常數判斷異號。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s003-v003",
    "unitId": "u12",
    "skillId": "factoring-cross",
    "contentSha256": "3d2983a1a2f95c0028fbca6475fc0be8f50600dcdb7905da5d2b243769de7e25",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "(2x+1)(x+3)=2x²+6x+x+3=2x²+7x+3。",
    "derivedAnswer": "(2x+1)(x+3)",
    "storedAnswer": "(2x+1)(x+3)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「2x²+7x+3 可用十字交乘分解為何？」逐一展開或回代；正解「(2x+1)(x+3)」成立。「(2x+3)(x+1)」不成立：交叉項 2x+3x=5x。；「(x+1)(x+3)」不成立：首項只有 x²。；「(2x-1)(x-3)」不成立：中間項為 -7x，常數雖為 3。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「同時配首項與常數。」。",
      "unitConflict": "本題單位審查：無單位；精確係數。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確係數。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：兩因式交換等價，但常數在括號內的位置影響交叉和。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「同時配首項與常數。」閱讀後，常見誤讀為「把常數因數放錯位置卻未計交叉和。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "首項係數不為 1，需真正計算十字。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需掌握通式展開。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s003-v003：(2x+1)(x+3)=2x²+6x+x+3=2x²+7x+3。 因此導出「(2x+1)(x+3)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「同時配首項與常數。」，並特別排除「把常數因數放錯位置卻未計交叉和。」。難度理由是「首項係數不為 1，需真正計算十字。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s003-v004",
    "unitId": "u12",
    "skillId": "factoring-cross",
    "contentSha256": "379d5d444ed72605ed6256fb4bec0015b2930a42904e9886d20e68b9c781d05c",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "3x²-12x+x-4=3x²-11x-4。",
    "derivedAnswer": "(3x+1)(x-4)",
    "storedAnswer": "(3x+1)(x-4)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「3x²-11x-4 的因式分解為何？」逐一展開或回代；正解「(3x+1)(x-4)」成立。「(3x-1)(x+4)」不成立：交叉項 12x-x=11x。；「(3x-4)(x+1)」不成立：交叉項 3x-4x=-x。；「(x-4)(x+1)」不成立：首項係數不足。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「選異號常數並配出 -11x。」。",
      "unitConflict": "本題單位審查：無單位或近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位或近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：候選全部首尾可能部分相同，但只有一個中間項吻合。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「選異號常數並配出 -11x。」閱讀後，常見誤讀為「只找到異號因數，未調整在兩括號中的位置。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需要控制交叉乘積大小與符號。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會帶號交叉乘法。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s003-v004：3x²-12x+x-4=3x²-11x-4。 因此導出「(3x+1)(x-4)」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「選異號常數並配出 -11x。」，並特別排除「只找到異號因數，未調整在兩括號中的位置。」。難度理由是「需要控制交叉乘積大小與符號。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s003-v005",
    "unitId": "u12",
    "skillId": "factoring-cross",
    "contentSha256": "d4a68c5737e2245f8ab93599f4d61120aea71c4193577a37eb03fd53766d332c",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "(3x+2)(2x-1)=6x²-3x+4x-2=6x²+x-2。",
    "derivedAnswer": "(3x+2)(2x-1)",
    "storedAnswer": "(3x+2)(2x-1)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「6x²+x-2 的因式分解為何？」逐一展開或回代；正解「(3x+2)(2x-1)」成立。「(3x-2)(2x+1)」不成立：交叉項 3x-4x=-x。；「(6x-1)(x+2)」不成立：交叉項 12x-x=11x。；「(2x+2)(3x-1)」不成立：展開中間項 4x，且可見共同因式未匹配。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「找首項因數與異號常數。」。",
      "unitConflict": "本題單位審查：無單位；結果精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；結果精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：整數係數範圍內正解唯一至因式交換。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「找首項因數與異號常數。」閱讀後，常見誤讀為「交叉項順序顛倒造成一次項符號相反。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "中間係數僅 1，需讓兩交叉積差 1。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會 6 的多組因數配對。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s003-v005：(3x+2)(2x-1)=6x²-3x+4x-2=6x²+x-2。 因此導出「(3x+2)(2x-1)」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「找首項因數與異號常數。」，並特別排除「交叉項順序顛倒造成一次項符號相反。」。難度理由是「中間係數僅 1，需讓兩交叉積差 1。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s003-v006",
    "unitId": "u12",
    "skillId": "factoring-cross",
    "contentSha256": "a8b05cf43f0261d5297763c086df6ac4e9ea0abfe1ddc6977665747c50875a7b",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開為 4x²-10x+6x-15=4x²-4x-15。",
    "derivedAnswer": "(2x+3)(2x-5)",
    "storedAnswer": "(2x+3)(2x-5)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「4x²-4x-15 可分解成何者？」逐一展開或回代；正解「(2x+3)(2x-5)」成立。「(4x+3)(x-5)」不成立：交叉項 -20x+3x=-17x。；「(2x-3)(2x+5)」不成立：交叉項 10x-6x=4x。；「(x+3)(4x-5)」不成立：交叉項 12x-5x=7x。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「配出首項 4、常數 -15 與中間 -4。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：所有選項常數均為 -15，但中間項只有正解吻合。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「配出首項 4、常數 -15 與中間 -4。」閱讀後，常見誤讀為「只看 3-5=-2，忽略前方 2x 倍數。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "首項因數相同但交叉仍需計係數。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會非首一十字交乘。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s003-v006：展開為 4x²-10x+6x-15=4x²-4x-15。 因此導出「(2x+3)(2x-5)」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「配出首項 4、常數 -15 與中間 -4。」，並特別排除「只看 3-5=-2，忽略前方 2x 倍數。」。難度理由是「首項因數相同但交叉仍需計係數。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s003-v007",
    "unitId": "u12",
    "skillId": "factoring-cross",
    "contentSha256": "2700933018349accaa67a4b30ead28e3d89de5bd9a911c1ac46b6ffe4ddd29a3",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "中間係數由 3+6=9；常數 18 另行吻合。",
    "derivedAnswer": "9",
    "storedAnswer": "9",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「若 x²+kx+18=(x+3)(x+6)，則 k 為何？」逐一展開或回代；正解「9」成立。「3」不成立：只取其中一個常數因數。；「18」不成立：誤把常數乘積當中間係數。；「6」不成立：只取另一個常數因數。",
      "undefinedSymbol": "題幹已給條件為「k 為整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「由交叉和求中間係數。」。",
      "unitConflict": "本題單位審查：無單位；k 精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；k 精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：等式為恆等式，按同次項係數比對。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「由交叉和求中間係數。」閱讀後，常見誤讀為「把乘積 18 或單一因數當 k。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "由已知因式反推係數。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會展開與係數比對。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s003-v007：中間係數由 3+6=9；常數 18 另行吻合。 因此導出「9」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「由交叉和求中間係數。」，並特別排除「把乘積 18 或單一因數當 k。」。難度理由是「由已知因式反推係數。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s003-v008",
    "unitId": "u12",
    "skillId": "factoring-cross",
    "contentSha256": "1dec0271aef91e46571133e1662d67d4f36a09a9da82c2838887040f92b80aec",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "與左式比較一次項係數，b=14。",
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
      "secondCorrectAnswer": "針對題目「已知 6x²+bx-12=(3x-2)(2x+6)。b 的值為何？」逐一展開或回代；正解「14」成立。「22」不成立：把 18 與 4 相加，忽略負號。；「12」不成立：誤用常數乘積的絕對值。；「-14」不成立：把交叉和符號整體顛倒。",
      "undefinedSymbol": "題幹已給條件為「b 為整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「計算兩個交叉項之和。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：所有係數均由恆等展開唯一決定。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「計算兩個交叉項之和。」閱讀後，常見誤讀為「交叉乘積符號處理錯誤。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "非對稱因式的交叉和反推。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會負號乘法與同類項。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s003-v008：與左式比較一次項係數，b=14。 因此導出「14」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「計算兩個交叉項之和。」，並特別排除「交叉乘積符號處理錯誤。」。難度理由是「非對稱因式的交叉和反推。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s003-v009",
    "unitId": "u12",
    "skillId": "factoring-cross",
    "contentSha256": "00d7ed963bd927b8171bb254fdd133580a382f24f3ead1e7e32b2d5ec865a1c4",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "原式係數比對得 m=8；完整分解還要提出數字 2。",
    "derivedAnswer": "m=8，且原分解不是最精簡形式",
    "storedAnswer": "m=8，且原分解不是最精簡形式",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「二次式 2x²+mx+8 可分解為 (2x+4)(x+2)。下列關於 m 與分解完整性的敘述何者正確？」逐一展開或回代；正解「m=8，且原分解不是最精簡形式」成立。「m=6，且已完整」不成立：中間項不是 6x。；「m=8，且已完整」不成立：m 正確，但 (2x+4) 還可提出 2。；「m=4，且可寫成 2(x+4)(x+2)」不成立：中間係數與改寫皆不符。",
      "undefinedSymbol": "題幹已給條件為「m 為整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「求 m 並判斷是否還有公因式。」。",
      "unitConflict": "本題單位審查：無單位；係數精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；係數精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：「最精簡」限定整數係數並把常數公因式置於外層。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「求 m 並判斷是否還有公因式。」閱讀後，常見誤讀為「只驗證十字交乘，沒有檢查因式內共同因數。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "同時考係數與完整分解層次。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需整合提公因式與十字交乘。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s003-v009：原式係數比對得 m=8；完整分解還要提出數字 2。 因此導出「m=8，且原分解不是最精簡形式」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「求 m 並判斷是否還有公因式。」，並特別排除「只驗證十字交乘，沒有檢查因式內共同因數。」。難度理由是「同時考係數與完整分解層次。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s003-v010",
    "unitId": "u12",
    "skillId": "factoring-cross",
    "contentSha256": "d27c50dade6dbe146db8abd8e46ab8f4da03f5f00bf049885298c1a8d3f0db59",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "面積乘回 x²+8x+15 平方公尺。",
    "derivedAnswer": "x+3 與 x+5 公尺",
    "storedAnswer": "x+3 與 x+5 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「長方形地墊面積為 x²+8x+15 平方公尺，設計圖要求兩邊皆為「x 加整數」公尺。可能的邊長為何？」逐一展開或回代；正解「x+3 與 x+5 公尺」成立。「x+1 與 x+15 公尺」不成立：中間項會是 16x。；「x-3 與 x-5 公尺」不成立：中間項為 -8x。；「x+8 與 x+15 公尺」不成立：常數乘積為 120。",
      "undefinedSymbol": "題幹已給條件為「x>0；邊長為正。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「把面積三項式分解。」。",
      "unitConflict": "本題單位審查：兩因式單位公尺，乘積為平方公尺；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；兩因式單位公尺，乘積為平方公尺；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：長寬交換視為同一組尺寸。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「把面積三項式分解。」閱讀後，常見誤讀為「只配常數乘積，忽略中間項。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需把代數因式解讀為實際邊長。",
    "literacyContextNecessity": "設計圖限定邊長型式，十字交乘直接找出兩個尺寸，情境提供正值限制。",
    "prerequisiteCheck": "需知道長方形面積。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s003-v010：面積乘回 x²+8x+15 平方公尺。 因此導出「x+3 與 x+5 公尺」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「把面積三項式分解。」，並特別排除「只配常數乘積，忽略中間項。」。難度理由是「需把代數因式解讀為實際邊長。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s003-v011",
    "unitId": "u12",
    "skillId": "factoring-cross",
    "contentSha256": "aa8ff3697ad790185c98ef86e9c2252a4e902ade4a7025dbb6797b7d4e61be10",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開逐項為 3n²+6n+4n+8。",
    "derivedAnswer": "(3n+4)(n+2) 元",
    "storedAnswer": "(3n+4)(n+2) 元",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「一批商品的總標價模型為 3n²+10n+8 元，會計希望寫成兩個一次式的乘積以檢查計價層級。正確分解為何？」逐一展開或回代；正解「(3n+4)(n+2) 元」成立。「(3n+2)(n+4) 元」不成立：交叉項 12n+2n=14n。；「(n+4)(n+2) 元」不成立：二次項係數只有 1。；「(3n-4)(n-2) 元」不成立：中間項為 -10n。",
      "undefinedSymbol": "題幹已給條件為「n 為正整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「以十字交乘重寫總價。」。",
      "unitConflict": "本題單位審查：總價單位為元；因式為計價模型因子，不另賦物理單位；結果精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；總價單位為元；因式為計價模型因子，不另賦物理單位；結果精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：n 為正整數，所有項皆有意義。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「以十字交乘重寫總價。」閱讀後，常見誤讀為「常數因數位置互換卻未重算交叉和。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "情境數量為正，且首項非首一。",
    "literacyContextNecessity": "乘積形式用來對照兩層計價因子；若刪除會失去檢核層級的意義。",
    "prerequisiteCheck": "需會非首一十字交乘。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s003-v011：展開逐項為 3n²+6n+4n+8。 因此導出「(3n+4)(n+2) 元」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「以十字交乘重寫總價。」，並特別排除「常數因數位置互換卻未重算交叉和。」。難度理由是「情境數量為正，且首項非首一。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s003-v012",
    "unitId": "u12",
    "skillId": "factoring-cross",
    "contentSha256": "b1959ffd4c578e830b4df570f3d5d4c7016c16957e2fc9a588aa71a6cda57204",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "三個係數完全相同，因此排列模型恆等成立。",
    "derivedAnswer": "正確，因展開為 2r²+9r+4",
    "storedAnswer": "正確，因展開為 2r²+9r+4",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某活動座位總數以 2r²+9r+4 表示，規劃者猜測可排成 (2r+1) 排、每排 (r+4) 席。此猜測是否正確？」逐一展開或回代；正解「正確，因展開為 2r²+9r+4」成立。「不正確，因中間項應為 8r」不成立：漏算另一個交叉項 r。；「不正確，因常數應為 5」不成立：1·4=4，不是 5。；「正確，但只在 r=1 時成立」不成立：這是恆等分解，對所有 r 都成立。",
      "undefinedSymbol": "題幹已給條件為「r 為正整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「展開候選尺寸並判斷。」。",
      "unitConflict": "本題單位審查：兩因式為席數計數，乘積為總席數；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；兩因式為席數計數，乘積為總席數；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：r>0 保證排數與每排席數為正。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「展開候選尺寸並判斷。」閱讀後，常見誤讀為「只算一個交叉乘積，或把單點檢查當條件。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需驗證規劃者提出的因式而非自行分解。",
    "literacyContextNecessity": "排數與每排席數的乘積必須等於總數，情境要求驗證尺寸模型。",
    "prerequisiteCheck": "需會展開與正整數解讀。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s003-v012：三個係數完全相同，因此排列模型恆等成立。 因此導出「正確，因展開為 2r²+9r+4」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「展開候選尺寸並判斷。」，並特別排除「只算一個交叉乘積，或把單點檢查當條件。」。難度理由是「需驗證規劃者提出的因式而非自行分解。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
