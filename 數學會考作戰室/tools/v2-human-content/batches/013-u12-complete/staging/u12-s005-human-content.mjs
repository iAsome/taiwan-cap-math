// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u12-s005-lecture-r1",
  "unitId": "u12",
  "numericUnitId": 12,
  "topicId": "u12-methods",
  "skillId": "factoring-quadratic-trinomial",
  "lockedSkillTitle": "二次三項式分解",
  "title": "二次三項式分解：先判型再完整分解",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能辨認二次三項式 ax²+bx+c。",
    "能選擇提公因式、公式法或十字交乘。",
    "能處理首項係數不為 1 的情況。",
    "能判斷整數係數下是否無法再分。",
    "能把結果分解到每個因式不可再分。"
  ],
  "prerequisites": [
    {
      "skillId": "factoring-by-grouping",
      "requiredLevel": "能運用前一技能並以展開驗證結果；本講義會重新連接必要步驟。"
    }
  ],
  "prerequisiteBridge": "先備技能為 factoring-by-grouping；先確認能完成前一方法並保留所有符號，再進入本技能。",
  "glossary": [
    {
      "term": "二次三項式",
      "definition": "最高次為 2 且通常有三項的多項式。"
    },
    {
      "term": "首一",
      "definition": "二次項係數為 1。"
    },
    {
      "term": "完整分解",
      "definition": "所有可在指定範圍分解的因式都已分完。"
    },
    {
      "term": "整數係數分解",
      "definition": "因式中的係數限定為整數。"
    }
  ],
  "notation": [
    {
      "symbol": "ax²+bx+c",
      "meaning": "a 不等於 0 的二次三項式。"
    },
    {
      "symbol": "(px+q)(rx+s)",
      "meaning": "兩個一次因式的乘積。"
    }
  ],
  "conceptNarrative": [
    "二次三項式的完整因式分解要依固定層次進行。先檢查所有項是否有最大公因式，提出後再觀察括號內是否符合完全平方；只有前兩步都不適用時，才列首項與常數項的因數配對做十字交乘。所選配對必須同時還原首項、常數項與一次項，不能只憑其中一項判斷。",
    "首項係數為一時，可尋找乘積等於常數項、和等於一次項係數的兩個整數；首項係數不為一時，則需同時安排首項兩個因數與常數兩個因數，再比較兩個交叉乘積的和。常數為正而一次項為負時兩常數通常同負，常數為負時兩者異號。",
    "完整性是答案的一部分。提出公因式後若括號仍可分解，就不能停在中途；外層因式也不可遺失或錯放入平方。最後應逐層展開，依序核對最高次項、一次項與常數項。情境題還要檢查因式能否解讀為正的邊長、組數或其他實際量。"
  ],
  "formalDefinitions": [
    {
      "name": "二次三項式分解",
      "statement": "把 ax²+bx+c 改寫成常數因式與一次因式的乘積。"
    }
  ],
  "formulas": [
    {
      "formula": "(px+q)(rx+s)=prx²+(ps+qr)x+qs",
      "conditions": [
        "pr=a、ps+qr=b、qs=c"
      ],
      "meaning": "係數配對。"
    }
  ],
  "nonApplicableCases": [
    "不是每個二次三項式都能在整數係數下分解。",
    "只寫出其中一層公因式而內部仍可分，不算完整。",
    "不能用代入單一 x 值相同就證明兩式恆等。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先提所有項的最大公因式。",
      "check": "外層因式不可遺失。"
    },
    {
      "step": 2,
      "instruction": "檢查完全平方公式。",
      "check": "首末平方與中間項同時核對。"
    },
    {
      "step": 3,
      "instruction": "否則列首項與常數因數。",
      "check": "準備十字交乘。"
    },
    {
      "step": 4,
      "instruction": "配出中間項並寫因式。",
      "check": "考慮正負。"
    },
    {
      "step": 5,
      "instruction": "逐層展開，確認完整性。",
      "check": "括號內還能分嗎？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "完整分解 x²+13x+40。",
      "solutionSteps": [
        "無共同公因式，也不符合完全平方。",
        "找乘積四十、和十三的正整數五與八。",
        "寫成 (x+5)(x+8) 並展開回查。"
      ],
      "answer": "(x+5)(x+8)",
      "why": "首項係數為一時，兩常數的乘積控制常數項，兩常數的和控制一次項；五與八同時符合這兩個條件，其他因數配對的和不同，因此答案唯一。"
    },
    {
      "exampleId": "L2",
      "prompt": "完整分解 2x²−x−6。",
      "solutionSteps": [
        "無共同公因式，首項安排為 2x 與 x。",
        "常數安排正三與負二，使交叉項三倍與負四倍未知數合為負一倍。",
        "寫成 (2x+3)(x−2) 並展開。"
      ],
      "answer": "(2x+3)(x−2)",
      "why": "首項係數不為一，不能只找常數的積與和；必須計算兩個交叉乘積。這個排列同時得到首項二倍平方項、一次項負一倍與常數負六。"
    },
    {
      "exampleId": "L3",
      "prompt": "完整分解 3y²+18y+27。",
      "solutionSteps": [
        "先提出最大公因式三。",
        "括號內 y²+6y+9 符合完全平方。",
        "得到 3(y+3)²。"
      ],
      "answer": "3(y+3)²",
      "why": "先提公因式可把係數降到最簡，再看出首末項為平方且中間項是兩倍乘積。外層三不在平方內，保留它才能展開回原式的三個係數。"
    },
    {
      "exampleId": "L4",
      "prompt": "完整分解 −4m²+20m−24。",
      "solutionSteps": [
        "提出負四，使括號首項為正。",
        "將 m²−5m+6 分成 (m−2)(m−3)。",
        "保留外層負四並展開驗證。"
      ],
      "answer": "−4(m−2)(m−3)",
      "why": "提出負因式時括號內每一項都要改號；負二與負三的積為正六、和為負五。外層與內層都保留，才是不能再以整數係數分解的完整答案。"
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
      "mistake": "看到三項就直接十字交乘。",
      "why": "漏掉公因式或公式。",
      "correction": "依順序判型。"
    },
    {
      "mistake": "外層公因式在答案消失。",
      "why": "只記內部結果。",
      "correction": "每一步都保留括號外。"
    },
    {
      "mistake": "首一方法套到非首一。",
      "why": "只找和與積。",
      "correction": "非首一需計算交叉乘積。"
    },
    {
      "mistake": "分解到一半停止。",
      "why": "未檢查括號。",
      "correction": "持續到不可再分。"
    },
    {
      "mistake": "宣稱無法分解但未列配對。",
      "why": "缺乏證據。",
      "correction": "列出有限因數配對並說明中間項不符。"
    },
    {
      "mistake": "把因式順序不同當答案不同。",
      "why": "忽略交換律。",
      "correction": "乘積順序不影響等價。"
    }
  ],
  "selfCheck": [
    "我是否先判斷可用的方法？",
    "每一項、每個符號與外層因式都保留了嗎？",
    "我是否把結果展開回原式？",
    "情境中的單位與變數限制是否合理？"
  ],
  "summary": [
    "二次三項式先提公因式，再查公式，最後十字交乘。",
    "非每題都能在整數係數下分解。",
    "展開與完整性檢查缺一不可。"
  ],
  "connections": {
    "previous": "承接 factoring-by-grouping。",
    "next": "依鎖定順序銜接下一技能；本單元不提前使用一元二次方程式解根。"
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u12-s005-v001",
      "u12-s005-v002",
      "u12-s005-v003",
      "u12-s005-v004",
      "u12-s005-v005",
      "u12-s005-v006",
      "u12-s005-v007",
      "u12-s005-v008",
      "u12-s005-v009",
      "u12-s005-v010",
      "u12-s005-v011",
      "u12-s005-v012"
    ],
    "constructedResponseIds": [
      "u12-s005-cr001",
      "u12-s005-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四個例題分別涵蓋首一、非首一、完全平方與負公因式；每題均獨立展開並確認已分到一次因式。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "315ac4d91d8598d3e573ae954aba817cd1eda762ab53487559a7d742d8fbd92f"
};

export const QUESTIONS = [
  {
    "questionId": "u12-s005-v001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 x²+11x+24 完整因式分解，何者正確？",
    "givenConditions": [
      "x 為變數；整數係數。"
    ],
    "target": "分解首一二次三項式。",
    "choices": [
      "(x+3)(x+8)",
      "(x+4)(x+6)",
      "(x-3)(x-8)",
      "(x+2)(x+12)"
    ],
    "answerIndex": 0,
    "independentSolution": "展開得到 x²+11x+24。",
    "explanation": "找 24 的因數配對，3 與 8 的和為 11。 展開候選式時，常數三與八的乘積是二十四，兩個交叉項合併為十一倍的未知數，首項仍是平方項；其餘配對至少有一次項係數或常數項不符，因此正確因式唯一。",
    "steps": [
      "先確認無公因式。",
      "不符合完全平方。",
      "用十字交乘找 3、8。"
    ],
    "optionAnalysis": [
      {
        "choice": "(x+3)(x+8)",
        "truth": true,
        "reason": "3·8=24 且 3+8=11。"
      },
      {
        "choice": "(x+4)(x+6)",
        "truth": false,
        "reason": "乘積 24，但和為 10。"
      },
      {
        "choice": "(x-3)(x-8)",
        "truth": false,
        "reason": "中間項為 -11x。"
      },
      {
        "choice": "(x+2)(x+12)",
        "truth": false,
        "reason": "中間項為 14x。"
      }
    ],
    "misconceptionTarget": "只配常數積，不查中間係數。 同時核對乘積與和，不能只憑常數因數配對選答。",
    "prerequisiteCheck": "需會 s003 十字交乘。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "完整分解到兩個一次因式。",
    "difficultyReason": "基礎首一三項式。",
    "literacyContextNecessity": null,
    "authoringIntent": "練習方法選擇後的基本分解。",
    "concept": "首一二次三項式",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "二次三項式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e189fd8c6fc1d4844c36c59e305bfb85a4610b6a79a13a9d259fd01f8033036c"
  },
  {
    "questionId": "u12-s005-v002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "因式分解 x²−7x+12 時，應選哪一組整數填入 (x+□)(x+△)，才能使常數項為12且一次項係數為−7？",
    "givenConditions": [
      "□與△為整數。",
      "□×△=12，且□+△=−7。"
    ],
    "target": "由乘積與和同時選出兩個常數",
    "choices": [
      "3 與 4",
      "−2 與 −6",
      "−3 與 −4",
      "3 與 −4"
    ],
    "answerIndex": 2,
    "independentSolution": "要使常數項為12，兩數乘積必須是12；一次項係數為−7，兩數和必須是−7。在四組選項中，只有−3與−4同時滿足乘積12、和−7。",
    "explanation": "將(x+a)(x+b)展開得x²+(a+b)x+ab。本題需要ab=12且a+b=−7。正數3、4的和為7；−2、−6的和為−8；3、−4的積為−12。只有−3、−4的積為12且和為−7。 將兩數填入因式後展開，乘積決定正十二常數項，和決定負七倍未知數；負三與負四同時符合。兩數順序交換不改變乘積，所以以同一無序整數組作唯一答案。",
    "steps": [
      "將(x+a)(x+b)展開為x²+(a+b)x+ab。",
      "由常數項12得ab=12，由一次項−7x得a+b=−7。",
      "逐組檢查乘積與和，只有a=−3、b=−4同時符合。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 與 4",
        "truth": false,
        "reason": "3×4=12，但3+4=7，會得到+7x而不是−7x。"
      },
      {
        "choice": "−2 與 −6",
        "truth": false,
        "reason": "(−2)(−6)=12，但兩數和為−8，會得到−8x。"
      },
      {
        "choice": "−3 與 −4",
        "truth": true,
        "reason": "(−3)(−4)=12且(−3)+(−4)=−7，同時符合常數項與一次項。"
      },
      {
        "choice": "3 與 −4",
        "truth": false,
        "reason": "3×(−4)=−12，常數項會變成−12，與題幹的+12不同。"
      }
    ],
    "misconceptionTarget": "只檢查兩數乘積是12，沒有同時檢查兩數和必須是−7。",
    "prerequisiteCheck": "需會帶號整數的加法、乘法與二項式展開。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "□、△順序可交換，但選項以無序整數組表示；逐組檢查後只有−3與−4同時符合。",
    "difficultyReason": "不是直接選完整因式，而是從展開結構同時連結常數項的乘積與一次項的和。",
    "literacyContextNecessity": null,
    "authoringIntent": "評量二次三項式分解時對『積為常數項、和為一次項係數』的中間判斷。",
    "concept": "乘積與和的同時配對",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "二次三項式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "21b913e8501648f74425e0138b24f35d98de00cda6298381bb43c7521503e536"
  },
  {
    "questionId": "u12-s005-v003",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2x²+5x+2 的完整分解為何？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "分解非首一三項式。",
    "choices": [
      "(2x+2)(x+1)",
      "(2x+1)(x+2)",
      "(2x-1)(x-2)",
      "(x+1)(x+2)"
    ],
    "answerIndex": 1,
    "independentSolution": "乘積為 2x²+4x+x+2。",
    "explanation": "首項取 2x、x，常數取 1、2；交叉和 4x+x=5x。 展開正解可得首項二倍平方項、交叉項四倍未知數與一倍未知數、常數二，合併後正好還原原式。第一個選項尚可提出公因式二，並非題目要求的完整分解。",
    "steps": [
      "確認無共同公因式。",
      "試首尾因數配對。",
      "展開回查。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2x+2)(x+1)",
        "truth": false,
        "reason": "展開中間項為 4x，且整體含可整理因式。"
      },
      {
        "choice": "(2x+1)(x+2)",
        "truth": true,
        "reason": "交叉項 4x+x=5x。"
      },
      {
        "choice": "(2x-1)(x-2)",
        "truth": false,
        "reason": "中間項為 -5x。"
      },
      {
        "choice": "(x+1)(x+2)",
        "truth": false,
        "reason": "首項係數不足。"
      }
    ],
    "misconceptionTarget": "把首一方法直接套用，漏掉係數 2。",
    "prerequisiteCheck": "需會十字交乘。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "正解不可再提出共同因式。",
    "difficultyReason": "基礎非首一分解。",
    "literacyContextNecessity": null,
    "authoringIntent": "練習最小非首一係數。",
    "concept": "非首一二次式",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "二次三項式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "03d537514baf3aa4af91a96f0c3f3aacf0b727eeb75d5a16e537de0de084f964"
  },
  {
    "questionId": "u12-s005-v004",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 3y²+18y+27 完整因式分解，何者正確？",
    "givenConditions": [
      "y 為變數。"
    ],
    "target": "先提公因式再辨認完全平方。",
    "choices": [
      "3(y+9)(y+3)",
      "(3y+9)²",
      "3(y²+6y+9)",
      "3(y+3)²"
    ],
    "answerIndex": 3,
    "independentSolution": "展開 3(y²+6y+9) 回到原式。",
    "explanation": "3y²+18y+27=3(y²+6y+9)=3(y+3)²。 三項先同除以三，括號內首末項分別是未知數與三的平方，中間項也等於兩者乘積的兩倍，所以可再分成兩個相同因式。外層三不可放進平方，也不可停在尚能分解的括號。",
    "steps": [
      "提出最大公因式 3。",
      "辨認括號為完全平方。",
      "保留外層 3。"
    ],
    "optionAnalysis": [
      {
        "choice": "3(y+9)(y+3)",
        "truth": false,
        "reason": "展開中間項與常數不符。"
      },
      {
        "choice": "(3y+9)²",
        "truth": false,
        "reason": "展開首項為 9y²，整體多乘 3。"
      },
      {
        "choice": "3(y²+6y+9)",
        "truth": false,
        "reason": "等值但括號仍可分，未完整。"
      },
      {
        "choice": "3(y+3)²",
        "truth": true,
        "reason": "先提 3 得 y²+6y+9=(y+3)²。"
      }
    ],
    "misconceptionTarget": "只完成第一層，或把外層 3 放進平方。",
    "prerequisiteCheck": "需掌握提公因式與公式法。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "完整形式可寫 3(y+3)(y+3)，與平方記號等價。",
    "difficultyReason": "需要兩步方法與完整性。",
    "literacyContextNecessity": null,
    "authoringIntent": "整合公因式和完全平方。",
    "concept": "多層分解",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "二次三項式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ae678d54535dae4f3e46d73663b059654ed36748a3f4504baebc8a3a54457ae1"
  },
  {
    "questionId": "u12-s005-v005",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-4m²+20m-24 的完整因式分解為何？",
    "givenConditions": [
      "m 為變數；希望括號首項正。"
    ],
    "target": "提出負公因式並分解。",
    "choices": [
      "-4(m-2)(m-3)",
      "4(m-2)(m-3)",
      "-4(m+2)(m+3)",
      "-4(m²-5m+6)"
    ],
    "answerIndex": 0,
    "independentSolution": "內部乘積為 m²-5m+6，乘 -4 得原式。",
    "explanation": "-4[m²-5m+6]=-4(m-2)(m-3)。 先提出負四後，括號內三項的符號依序變為正、負、正；常數負二與負三的乘積是正六、和是負五。展開內外兩層可還原每一項，且括號內已不能再以整數係數分解。",
    "steps": [
      "提出 -4。",
      "找 -2、-3 的和 -5、積 6。",
      "展開兩層回查。"
    ],
    "optionAnalysis": [
      {
        "choice": "-4(m-2)(m-3)",
        "truth": true,
        "reason": "先提 -4 得 m²-5m+6。"
      },
      {
        "choice": "4(m-2)(m-3)",
        "truth": false,
        "reason": "展開首項為正 4m²。"
      },
      {
        "choice": "-4(m+2)(m+3)",
        "truth": false,
        "reason": "中間項與常數符號不符。"
      },
      {
        "choice": "-4(m²-5m+6)",
        "truth": false,
        "reason": "尚未把括號分解完全。"
      }
    ],
    "misconceptionTarget": "提出負號後括號符號未全反。",
    "prerequisiteCheck": "需整合 s001、s003、s006 的符號觀念。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "題幹指定括號首項正，排除提出 +4 的呈現。",
    "difficultyReason": "負首項加兩步分解。",
    "literacyContextNecessity": null,
    "authoringIntent": "完整處理負首項二次式。",
    "concept": "負公因式三項式",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "二次三項式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e685808016dd3e1d650c4515fdc81b7f967de200090785e3d90cd213e0cbd815"
  },
  {
    "questionId": "u12-s005-v006",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "6x²-x-2 完整分解為何？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "選出正確非首一因式。",
    "choices": [
      "(3x+1)(2x-2)",
      "(6x+1)(x-2)",
      "(3x-2)(2x+1)",
      "(2x-1)(3x+2)"
    ],
    "answerIndex": 2,
    "independentSolution": "列出 6 的配對 3×2 與 -2 的配對 -2×1；交叉和 3-4=-1，所以為 (3x-2)(2x+1)。",
    "explanation": "6x²-x-2=(3x-2)(2x+1)，因交叉項 3x-4x=-x。 首項因數選三倍未知數與二倍未知數，常數選負二與正一；內外交叉乘積分別是三倍與負四倍未知數，合併恰為負一倍。展開後首項、一次項與常數項全部吻合。",
    "steps": [
      "列首項 3x、2x。",
      "常數配 -2、1。",
      "交叉和 3x-4x=-x。"
    ],
    "optionAnalysis": [
      {
        "choice": "(3x+1)(2x-2)",
        "truth": false,
        "reason": "展開為 6x²-4x-2，中間項不符。"
      },
      {
        "choice": "(6x+1)(x-2)",
        "truth": false,
        "reason": "中間項 -11x。"
      },
      {
        "choice": "(3x-2)(2x+1)",
        "truth": true,
        "reason": "交叉項 3x-4x=-x，常數 -2，完全吻合。"
      },
      {
        "choice": "(2x-1)(3x+2)",
        "truth": false,
        "reason": "中間項 x，不是 -x。"
      }
    ],
    "misconceptionTarget": "只看常數與首項，未核對一次項。",
    "prerequisiteCheck": "需會十字交乘。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "四個選項展開後只有索引 2 的三個係數全吻合；正解不可再提出共同因式。",
    "difficultyReason": "標準非首一且異號。",
    "literacyContextNecessity": null,
    "authoringIntent": "檢查非首一異號分解。",
    "concept": "交叉和審查",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "二次三項式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "070dbc81d3033bb57b8037335364df68f12a896cf01456379359909d42c54630"
  },
  {
    "questionId": "u12-s005-v007",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x²+px+30 可在整數係數下分解為兩個正整數常數項的一次因式，且 p 最小，則 p 為何？",
    "givenConditions": [
      "正整數因數；兩因式為 (x+a)(x+b)。"
    ],
    "target": "在 ab=30 下使 a+b 最小。",
    "choices": [
      "31",
      "11",
      "13",
      "17"
    ],
    "answerIndex": 1,
    "independentSolution": "此時分解為 (x+5)(x+6)，中間係數 p=11。",
    "explanation": "配對 (1,30)、(2,15)、(3,10)、(5,6)，各和 31、17、13、11。 因兩個一次因式的常數皆為正整數，所求係數就是一組正因數的和。完整列出三十的四組無序因數配對後，最接近平方根的五與六具有最小和十一，其他選項的和都較大。",
    "steps": [
      "列出 30 的所有正因數配對。",
      "計算每對和。",
      "選最小和 11。"
    ],
    "optionAnalysis": [
      {
        "choice": "31",
        "truth": false,
        "reason": "來自 1+30，是最大和。"
      },
      {
        "choice": "11",
        "truth": true,
        "reason": "30 的正因數配對中 5+6=11 最小。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "來自 3+10，但不是最小。"
      },
      {
        "choice": "17",
        "truth": false,
        "reason": "來自 2+15。"
      }
    ],
    "misconceptionTarget": "只找任一因數配對，未比較全部。",
    "prerequisiteCheck": "需會因數配對與比較。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "無單位；p 為精確整數。",
    "ambiguityAndBoundaryAudit": "「兩個正整數常數項」排除異號與負因數；最小值唯一。",
    "difficultyReason": "需要窮舉有限配對並最佳化。",
    "literacyContextNecessity": null,
    "authoringIntent": "利用分解結構做參數最小化。",
    "concept": "參數最佳化",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "二次三項式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4da6879ce3d7cd31df0422fd81e6de7729180f528ff77d0e7e3ba0bd7cebefc5"
  },
  {
    "questionId": "u12-s005-v008",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪個二次三項式在整數係數範圍無法分解成兩個一次因式？",
    "givenConditions": [
      "限定整數係數。"
    ],
    "target": "檢查因數配對是否能配出中間項。",
    "choices": [
      "x²+3x+2",
      "x²-x-6",
      "2x²+5x+2",
      "x²+x+1"
    ],
    "answerIndex": 3,
    "independentSolution": "其他選項均可明確展開為原式，只有 x²+x+1 無整數配對。",
    "explanation": "對 x²+x+1，需整數 a、b 滿足 ab=1、a+b=1，無解。 若能分成兩個整數係數的一次因式，常數一只能由一與一或負一與負一相乘得到，兩數和只會是二或負二，不可能形成一次項係數一。其餘三式都能直接找到符合乘積與和的整數配對。",
    "steps": [
      "列常數 1 的整數因數配對。",
      "核對配對和。",
      "再驗證其他三式可分。"
    ],
    "optionAnalysis": [
      {
        "choice": "x²+3x+2",
        "truth": false,
        "reason": "可分為 (x+1)(x+2)。"
      },
      {
        "choice": "x²-x-6",
        "truth": false,
        "reason": "可分為 (x-3)(x+2)。"
      },
      {
        "choice": "2x²+5x+2",
        "truth": false,
        "reason": "可分為 (2x+1)(x+2)。"
      },
      {
        "choice": "x²+x+1",
        "truth": true,
        "reason": "常數 1 的整數配對只有 1、1 或 -1、-1，和為 ±2，不是 1。"
      }
    ],
    "misconceptionTarget": "認為每個二次三項式都一定能分解。",
    "prerequisiteCheck": "需會因數配對與反證式列舉。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "限定整數係數；不引入根式或複數，符合國中範圍。",
    "difficultyReason": "考查整數係數分解的邊界。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認不可分情形。",
    "concept": "整數不可分",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "二次三項式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a11e5537e735753df4050f47af203e36c31bf32c2eaf3e1d36e05243a360a644"
  },
  {
    "questionId": "u12-s005-v009",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某生將 8x²+10x+3 分解為 (4x+3)(2x+1)。判斷其結果。",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "展開審查三個係數。",
    "choices": [
      "正確，因展開為 8x²+10x+3",
      "錯誤，正確應為 (4x+1)(2x+3)",
      "錯誤，因中間項會是 7x",
      "錯誤，因常數項會是 4"
    ],
    "answerIndex": 0,
    "independentSolution": "獨立計算 4x·2x=8x²、4x·1=4x、3·2x=6x、3·1=3；合併為 8x²+10x+3。",
    "explanation": "展開原候選可得 8x²+10x+3，因此判定正確。 逐項展開候選式，首項由四倍未知數乘二倍未知數得到，常數由三乘一得到；兩個交叉項是四倍與六倍未知數，合併為十倍。三個係數均與原式相同，所以學生分解正確。",
    "steps": [
      "展開四個乘積。",
      "合併一次項。",
      "逐項比對。"
    ],
    "optionAnalysis": [
      {
        "choice": "正確，因展開為 8x²+10x+3",
        "truth": true,
        "reason": "四項展開後一次項為 4x+6x=10x，其他係數也相同。"
      },
      {
        "choice": "錯誤，正確應為 (4x+1)(2x+3)",
        "truth": false,
        "reason": "替代式展開中間項為 14x，且原候選本來就正確。"
      },
      {
        "choice": "錯誤，因中間項會是 7x",
        "truth": false,
        "reason": "交叉和不是 7x。"
      },
      {
        "choice": "錯誤，因常數項會是 4",
        "truth": false,
        "reason": "3·1=3。"
      }
    ],
    "misconceptionTarget": "看到兩組可能配對就未展開。",
    "prerequisiteCheck": "需會展開檢查。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "判斷題只問原候選是否正確；替代分解不會形成第二個正確敘述。",
    "difficultyReason": "要求審查他人答案並處理可能等價候選。",
    "literacyContextNecessity": null,
    "authoringIntent": "訓練不盲信預設答案。",
    "concept": "獨立驗證",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "二次三項式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "bf8393cdb6ea68917a10f0b5d8460f6682b3576247803896a4e808e723fdfda2"
  },
  {
    "questionId": "u12-s005-v010",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長方形倉儲區面積為 2x²+9x+4 平方公尺，兩邊皆為一次式且整數係數。尺寸可能為何？",
    "givenConditions": [
      "x>0。"
    ],
    "target": "完整分解面積式。",
    "choices": [
      "2x+4 與 x+1 公尺",
      "x+2 與 2x+2 公尺",
      "2x+1 與 x+4 公尺",
      "2x-1 與 x-4 公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "乘積回到面積式，兩因式都為正。",
    "explanation": "首項取 2x、x，常數取 1、4，交叉和 8x+x=9x。 兩個邊長相乘時，首項給出二倍平方項，常數一乘四得到四，兩個交叉面積合計為九倍未知數，正好還原面積式。題設未知數為正時兩邊也皆為正，量的解讀成立。",
    "steps": [
      "先查無公因式。",
      "用十字交乘。",
      "以 x>0 檢查邊長正。"
    ],
    "optionAnalysis": [
      {
        "choice": "2x+4 與 x+1 公尺",
        "truth": false,
        "reason": "中間項為 6x。"
      },
      {
        "choice": "x+2 與 2x+2 公尺",
        "truth": false,
        "reason": "中間項為 6x，常數 4。"
      },
      {
        "choice": "2x+1 與 x+4 公尺",
        "truth": true,
        "reason": "(2x+1)(x+4)=2x²+9x+4。"
      },
      {
        "choice": "2x-1 與 x-4 公尺",
        "truth": false,
        "reason": "中間項為 -9x。"
      }
    ],
    "misconceptionTarget": "只看常數乘積，未查交叉項。 邊長候選還須核對兩個交叉項的和與正值條件。",
    "prerequisiteCheck": "需知道面積與非首一分解。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "邊長公尺相乘為平方公尺；無近似。",
    "ambiguityAndBoundaryAudit": "長寬可交換；x>0 保證正。",
    "difficultyReason": "需把完整分解翻成尺寸。",
    "literacyContextNecessity": "面積模型要求找兩個實際邊長，完整分解與正值檢查不可省略。",
    "authoringIntent": "從二次三項式讀尺寸。",
    "concept": "倉儲尺寸",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "二次三項式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "a0f39cc81a4906c6004e0e3f5a687ed7f4f98921c9bd6b0d22541bc4e7718723"
  },
  {
    "questionId": "u12-s005-v011",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某平台的資料區塊數模型為 4n²+12n+9。若要表示成相同兩個群組因子的乘積，應寫成何者？",
    "givenConditions": [
      "n 為非負整數。"
    ],
    "target": "辨認完全平方並解讀重複因子。",
    "choices": [
      "(4n+3)²",
      "(2n+3)²",
      "(2n-3)²",
      "(2n+9)(2n+1)"
    ],
    "answerIndex": 1,
    "independentSolution": "展開 (2n+3)(2n+3) 完全吻合。",
    "explanation": "4n²+12n+9=(2n)²+2·2n·3+3²。 首項四倍平方項是二倍未知數的平方，末項九是三的平方，而中間項十二倍未知數正是兩者乘積的兩倍，因此三項符合和的完全平方。展開兩個相同群組因子可逐項驗證。",
    "steps": [
      "先判斷完全平方。",
      "寫成兩個相同因式。",
      "檢查 n≥0 時群組因子正。"
    ],
    "optionAnalysis": [
      {
        "choice": "(4n+3)²",
        "truth": false,
        "reason": "首項會是 16n²。"
      },
      {
        "choice": "(2n+3)²",
        "truth": true,
        "reason": "中間項 2·2n·3=12n。"
      },
      {
        "choice": "(2n-3)²",
        "truth": false,
        "reason": "中間項為 -12n。"
      },
      {
        "choice": "(2n+9)(2n+1)",
        "truth": false,
        "reason": "中間項為 20n。"
      }
    ],
    "misconceptionTarget": "只因首末項是平方就未查中間項。",
    "prerequisiteCheck": "需會完全平方。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "因子是群組計數，平方為區塊數；均為整數。",
    "ambiguityAndBoundaryAudit": "n≥0，2n+3>0。",
    "difficultyReason": "情境要求相同因子，公式法比十字更直接。",
    "literacyContextNecessity": "「相同兩個群組因子」使完全平方結構成為必要解讀。",
    "authoringIntent": "辨認重複群組結構。",
    "concept": "重複因子",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "二次三項式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "db48df4858a935c54aa13b78b291f0426e86642acb701c35c73a422cff5c9a79"
  },
  {
    "questionId": "u12-s005-v012",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一項折扣模型為 -2p²+14p-24 元。會計要把負號留在外面，且括號內完整分解。何者正確？",
    "givenConditions": [
      "p 為價格參數。"
    ],
    "target": "先提出 -2 再分解。",
    "choices": [
      "2(p-3)(p-4) 元",
      "-2(p+3)(p+4) 元",
      "-2(p²-7p+12) 元",
      "-2(p-3)(p-4) 元"
    ],
    "answerIndex": 3,
    "independentSolution": "外層負號乘回後三項符號完全吻合。",
    "explanation": "-2p²+14p-24=-2(p²-7p+12)=-2(p-3)(p-4)。 各項同除以負二後，括號內係數依序為一、負七與正十二；負三和負四的乘積為十二、和為負七，因此能完整分成兩個一次因式。最後乘回外層負二可恢復原折扣式與單位。",
    "steps": [
      "提出負公因式 -2。",
      "分解內部首一三項式。",
      "回乘檢查折扣模型。"
    ],
    "optionAnalysis": [
      {
        "choice": "2(p-3)(p-4) 元",
        "truth": false,
        "reason": "首項符號會變正。"
      },
      {
        "choice": "-2(p+3)(p+4) 元",
        "truth": false,
        "reason": "中間項與常數在乘回後不符。"
      },
      {
        "choice": "-2(p²-7p+12) 元",
        "truth": false,
        "reason": "尚未完整分解。"
      },
      {
        "choice": "-2(p-3)(p-4) 元",
        "truth": true,
        "reason": "括號內 p²-7p+12=(p-3)(p-4)。"
      }
    ],
    "misconceptionTarget": "外層負號遺失或內部符號未反。",
    "prerequisiteCheck": "需會負公因式與首一分解。",
    "estimatedTimeSec": 135,
    "unitAndRoundingChecks": "單位元；多項式為調整量，可正可負；無近似。",
    "ambiguityAndBoundaryAudit": "題目不要求把因式解讀為價格，避免負長度類誤讀。",
    "difficultyReason": "負成本調整模型需要完整兩層分解。",
    "literacyContextNecessity": "會計指定負號留外，使折扣方向與內部正結構分離；情境條件影響呈現。",
    "authoringIntent": "完整分解折扣模型。",
    "concept": "負調整分解",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "二次三項式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b9d06f607311772880a43a0f0535249a606fab4bab110522562feca7a5b43dce"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u12-s005-cr001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "完整因式分解 10x²-15x-25，並說明你選擇方法的順序。",
    "requiredWork": [
      "先提最大公因式。",
      "判斷括號內的二次三項式。",
      "完成十字交乘。",
      "展開回查。"
    ],
    "fullCreditSolution": [
      "10x²-15x-25=5(2x²-3x-5)。",
      "2x²-3x-5=(2x-5)(x+1)，因交叉項 2x-5x=-3x。",
      "答案為 5(2x-5)(x+1)。",
      "方法順序不可顛倒：先提出三項共同的五，能把係數縮小；括號內不符合完全平方，才以交叉乘積負五倍未知數與正二倍未知數合成負三倍。將兩個一次因式及外層五全部展開，可逐項還原原式。"
    ],
    "alternativeSolutions": [
      "可先用中間項拆分：2x²+2x-5x-5，再分組成 (2x-5)(x+1)。"
    ],
    "reasoningSteps": [
      "公因式 5 降低係數。",
      "內部不符合完全平方，改用十字交乘。",
      "完整保留外層 5。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "得到 5(2x-5)(x+1)，方法順序、交叉項與回展均正確。"
      },
      {
        "score": 2,
        "criteria": "最終答案正確但方法說明不完整；或一處輕微算術錯。"
      },
      {
        "score": 1,
        "criteria": "能提 5 或正確分解內部，但未合併成完整答案。"
      },
      {
        "score": 0,
        "criteria": "漏外層 5 且內部亦分解錯，或展開不符。"
      }
    ],
    "partialCreditRules": [
      "停在 5(2x²-3x-5) 最高 1 分。",
      "分組拆中間項路徑可得滿分。"
    ],
    "followThroughPolicy": "若公因式提出錯成 5 但內部一項算錯，後續十字合理可給 1 分；漏外層 5 的正確內部分解最高 2 分。",
    "unitAndNotationRules": [
      "無單位。",
      "負常數因式符號要清楚。"
    ],
    "answerOnlyPolicy": "只寫完整正解最高 2 分。",
    "commonErrors": [
      "直接對原大係數十字而漏公因式。",
      "把 -5 與 +1 的交叉和算成 +3。"
    ],
    "independentReview": {
      "derivedResult": "5(2x-5)(x+1)。",
      "ambiguity": "整數係數完整分解；因式順序可交換。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "ecf6a5d57a1de24f59ad86d5ca4af40bb1ce84e2f3b0932b415f2598d780bd18"
  },
  {
    "questionId": "u12-s005-cr002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-quadratic-trinomial",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "在整數係數範圍判斷 2x²+2x+5 是否能分解成兩個一次因式。請列出必要的因數配對並作結論。",
    "requiredWork": [
      "說明首項因數配對。",
      "列常數 5 的帶號因數配對。",
      "檢查可能的交叉和。",
      "明確限定整數係數。"
    ],
    "fullCreditSolution": [
      "首項只能配成 2x 與 x（忽略交換）。",
      "常數 5 的同號配對為 1、5 或 -1、-5。",
      "正配對的交叉和可能為 10x+x=11x 或 2x+5x=7x；負配對為 -11x 或 -7x，均不是 2x。",
      "因此不能在整數係數下分解成兩個一次因式。"
    ],
    "alternativeSolutions": [
      "也可假設 (2x+a)(x+b)，由 ab=5 列出四組整數可能，再檢查 2b+a=2 無解。"
    ],
    "reasoningSteps": [
      "常數正代表兩常數同號。",
      "有限配對全部排除才可下結論。",
      "兩種常數位置與正負情形均已窮盡，沒有任何交叉和能形成二倍未知數。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "列出 1、5 的正負與兩種位置，說明交叉係數只可能 ±11、±7，結論不可分。"
      },
      {
        "score": 2,
        "criteria": "結論正確且有主要配對證據，但漏一種對稱或負配對說明。"
      },
      {
        "score": 1,
        "criteria": "知道要檢查因數配對，但列舉或交叉計算不完整。"
      },
      {
        "score": 0,
        "criteria": "未經檢查直接宣稱所有二次式都可分，或給出錯誤因式。"
      }
    ],
    "partialCreditRules": [
      "若只說判別式等高中方法，不採為本單元主要證據，最高 1 分。",
      "交換兩因式不算新配對，但常數位置需檢查。"
    ],
    "followThroughPolicy": "若某一交叉和計算錯但其餘配對足以排除，可給 2 分；若漏掉可能使 2 成立的配對則不能給滿分。",
    "unitAndNotationRules": [
      "無單位。",
      "清楚寫「整數係數範圍」。"
    ],
    "answerOnlyPolicy": "只答「不能」無證據最高 1 分。",
    "commonErrors": [
      "只檢查 1、5 一種位置。",
      "誤以為 1+5=6 就足以判斷非首一式。"
    ],
    "independentReview": {
      "derivedResult": "無整數係數一次因式分解。",
      "ambiguity": "不討論實數根式或複數，維持國中範圍。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "324f7dafa0c876e2feba619a88f103dc5350e6bbb9b221227ac1f4ab6e688af9"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u12-s005-v001",
    "unitId": "u12",
    "skillId": "factoring-quadratic-trinomial",
    "contentSha256": "e189fd8c6fc1d4844c36c59e305bfb85a4610b6a79a13a9d259fd01f8033036c",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開得到 x²+11x+24。",
    "derivedAnswer": "(x+3)(x+8)",
    "storedAnswer": "(x+3)(x+8)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「將 x²+11x+24 完整因式分解，何者正確？」逐一展開或回代；正解「(x+3)(x+8)」成立。「(x+4)(x+6)」不成立：乘積 24，但和為 10。；「(x-3)(x-8)」不成立：中間項為 -11x。；「(x+2)(x+12)」不成立：中間項為 14x。",
      "undefinedSymbol": "題幹已給條件為「x 為變數；整數係數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分解首一二次三項式。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：完整分解到兩個一次因式。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分解首一二次三項式。」閱讀後，常見誤讀為「只配常數積，不查中間係數。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "基礎首一三項式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會 s003 十字交乘。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s005-v001：展開得到 x²+11x+24。 因此導出「(x+3)(x+8)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分解首一二次三項式。」，並特別排除「只配常數積，不查中間係數。」。難度理由是「基礎首一三項式。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s005-v002",
    "unitId": "u12",
    "skillId": "factoring-quadratic-trinomial",
    "contentSha256": "21b913e8501648f74425e0138b24f35d98de00cda6298381bb43c7521503e536",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "要使常數項為12，兩數乘積必須是12；一次項係數為−7，兩數和必須是−7。在四組選項中，只有−3與−4同時滿足乘積12、和−7。",
    "derivedAnswer": "−3 與 −4",
    "storedAnswer": "−3 與 −4",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐組檢查乘積與和，只有−3與−4的乘積為12且和為−7；其他組至少一個條件不合。",
      "undefinedSymbol": "題幹已定義□與△是填入兩個一次因式的整數常數，且兩者可以交換順序，不存在未定義符號。",
      "unitConflict": "本題為純代數運算，沒有實物單位、量綱衝突或單位換算問題，四選項均為整數組。",
      "roundingConflict": "所有係數均為精確整數，無需四捨五入或近似判斷，乘積與和都用等式精確核對。",
      "domainBoundary": "只使用二項式展開、帶號整數加乘與二次三項式因式分解，不使用後續一元二次方程式求根公式。",
      "alternateReading": "□、△順序對乘積不造成差異，選項是整數組而非有序對，交換兩數不會形成另一個答案。"
    },
    "difficultyReason": "需從展開式同時使用常數項的積與一次項的和，不是只選完整因式結果。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會帶號整數加乘與(x+a)(x+b)的展開。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "要使常數項為12，兩數乘積必須是12；一次項係數為−7，兩數和必須是−7。在四組選項中，只有−3與−4同時滿足乘積12、和−7。審查補充：展開(x+a)(x+b)得x²+(a+b)x+ab；3與4的和為7，−2與−6的和為−8，3與−4的積為−12，故其餘選項各有明確反例。正確選項唯一，也不再與直接分解題重複。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s005-v003",
    "unitId": "u12",
    "skillId": "factoring-quadratic-trinomial",
    "contentSha256": "03d537514baf3aa4af91a96f0c3f3aacf0b727eeb75d5a16e537de0de084f964",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "乘積為 2x²+4x+x+2。",
    "derivedAnswer": "(2x+1)(x+2)",
    "storedAnswer": "(2x+1)(x+2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「2x²+5x+2 的完整分解為何？」逐一展開或回代；正解「(2x+1)(x+2)」成立。「(2x+2)(x+1)」不成立：展開中間項為 4x，且整體含可整理因式。；「(2x-1)(x-2)」不成立：中間項為 -5x。；「(x+1)(x+2)」不成立：首項係數不足。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分解非首一三項式。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：正解不可再提出共同因式。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分解非首一三項式。」閱讀後，常見誤讀為「把首一方法直接套用，漏掉係數 2。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "基礎非首一分解。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會十字交乘。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s005-v003：乘積為 2x²+4x+x+2。 因此導出「(2x+1)(x+2)」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分解非首一三項式。」，並特別排除「把首一方法直接套用，漏掉係數 2。」。難度理由是「基礎非首一分解。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s005-v004",
    "unitId": "u12",
    "skillId": "factoring-quadratic-trinomial",
    "contentSha256": "ae678d54535dae4f3e46d73663b059654ed36748a3f4504baebc8a3a54457ae1",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開 3(y²+6y+9) 回到原式。",
    "derivedAnswer": "3(y+3)²",
    "storedAnswer": "3(y+3)²",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「將 3y²+18y+27 完整因式分解，何者正確？」逐一展開或回代；正解「3(y+3)²」成立。「3(y+9)(y+3)」不成立：展開中間項與常數不符。；「(3y+9)²」不成立：展開首項為 9y²，整體多乘 3。；「3(y²+6y+9)」不成立：等值但括號仍可分，未完整。",
      "undefinedSymbol": "題幹已給條件為「y 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「先提公因式再辨認完全平方。」。",
      "unitConflict": "本題單位審查：無單位；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：完整形式可寫 3(y+3)(y+3)，與平方記號等價。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「先提公因式再辨認完全平方。」閱讀後，常見誤讀為「只完成第一層，或把外層 3 放進平方。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需要兩步方法與完整性。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需掌握提公因式與公式法。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s005-v004：展開 3(y²+6y+9) 回到原式。 因此導出「3(y+3)²」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「先提公因式再辨認完全平方。」，並特別排除「只完成第一層，或把外層 3 放進平方。」。難度理由是「需要兩步方法與完整性。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s005-v005",
    "unitId": "u12",
    "skillId": "factoring-quadratic-trinomial",
    "contentSha256": "e685808016dd3e1d650c4515fdc81b7f967de200090785e3d90cd213e0cbd815",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "內部乘積為 m²-5m+6，乘 -4 得原式。",
    "derivedAnswer": "-4(m-2)(m-3)",
    "storedAnswer": "-4(m-2)(m-3)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「-4m²+20m-24 的完整因式分解為何？」逐一展開或回代；正解「-4(m-2)(m-3)」成立。「4(m-2)(m-3)」不成立：展開首項為正 4m²。；「-4(m+2)(m+3)」不成立：中間項與常數符號不符。；「-4(m²-5m+6)」不成立：尚未把括號分解完全。",
      "undefinedSymbol": "題幹已給條件為「m 為變數；希望括號首項正。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「提出負公因式並分解。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題幹指定括號首項正，排除提出 +4 的呈現。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「提出負公因式並分解。」閱讀後，常見誤讀為「提出負號後括號符號未全反。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "負首項加兩步分解。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需整合 s001、s003、s006 的符號觀念。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s005-v005：內部乘積為 m²-5m+6，乘 -4 得原式。 因此導出「-4(m-2)(m-3)」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「提出負公因式並分解。」，並特別排除「提出負號後括號符號未全反。」。難度理由是「負首項加兩步分解。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s005-v006",
    "unitId": "u12",
    "skillId": "factoring-quadratic-trinomial",
    "contentSha256": "070dbc81d3033bb57b8037335364df68f12a896cf01456379359909d42c54630",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "列出 6 的配對 3×2 與 -2 的配對 -2×1；交叉和 3-4=-1，所以為 (3x-2)(2x+1)。",
    "derivedAnswer": "(3x-2)(2x+1)",
    "storedAnswer": "(3x-2)(2x+1)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「6x²-x-2 完整分解為何？」逐一展開或回代；正解「(3x-2)(2x+1)」成立。「(3x+1)(2x-2)」不成立：展開為 6x²-4x-2，中間項不符。；「(6x+1)(x-2)」不成立：中間項 -11x。；「(2x-1)(3x+2)」不成立：中間項 x，不是 -x。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「選出正確非首一因式。」。",
      "unitConflict": "本題單位審查：無單位；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：四個選項展開後只有索引 2 的三個係數全吻合；正解不可再提出共同因式。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「選出正確非首一因式。」閱讀後，常見誤讀為「只看常數與首項，未核對一次項。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "標準非首一且異號。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會十字交乘。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s005-v006：列出 6 的配對 3×2 與 -2 的配對 -2×1；交叉和 3-4=-1，所以為 (3x-2)(2x+1)。 因此導出「(3x-2)(2x+1)」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「選出正確非首一因式。」，並特別排除「只看常數與首項，未核對一次項。」。難度理由是「標準非首一且異號。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s005-v007",
    "unitId": "u12",
    "skillId": "factoring-quadratic-trinomial",
    "contentSha256": "4da6879ce3d7cd31df0422fd81e6de7729180f528ff77d0e7e3ba0bd7cebefc5",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "此時分解為 (x+5)(x+6)，中間係數 p=11。",
    "derivedAnswer": "11",
    "storedAnswer": "11",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「若 x²+px+30 可在整數係數下分解為兩個正整數常數項的一次因式，且 p 最小，則 p 為何？」逐一展開或回代；正解「11」成立。「31」不成立：來自 1+30，是最大和。；「13」不成立：來自 3+10，但不是最小。；「17」不成立：來自 2+15。",
      "undefinedSymbol": "題幹已給條件為「正整數因數；兩因式為 (x+a)(x+b)。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「在 ab=30 下使 a+b 最小。」。",
      "unitConflict": "本題單位審查：無單位；p 為精確整數。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；p 為精確整數。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：「兩個正整數常數項」排除異號與負因數；最小值唯一。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「在 ab=30 下使 a+b 最小。」閱讀後，常見誤讀為「只找任一因數配對，未比較全部。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需要窮舉有限配對並最佳化。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會因數配對與比較。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s005-v007：此時分解為 (x+5)(x+6)，中間係數 p=11。 因此導出「11」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「在 ab=30 下使 a+b 最小。」，並特別排除「只找任一因數配對，未比較全部。」。難度理由是「需要窮舉有限配對並最佳化。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s005-v008",
    "unitId": "u12",
    "skillId": "factoring-quadratic-trinomial",
    "contentSha256": "a11e5537e735753df4050f47af203e36c31bf32c2eaf3e1d36e05243a360a644",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "其他選項均可明確展開為原式，只有 x²+x+1 無整數配對。",
    "derivedAnswer": "x²+x+1",
    "storedAnswer": "x²+x+1",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「下列哪個二次三項式在整數係數範圍無法分解成兩個一次因式？」逐一展開或回代；正解「x²+x+1」成立。「x²+3x+2」不成立：可分為 (x+1)(x+2)。；「x²-x-6」不成立：可分為 (x-3)(x+2)。；「2x²+5x+2」不成立：可分為 (2x+1)(x+2)。",
      "undefinedSymbol": "題幹已給條件為「限定整數係數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「檢查因數配對是否能配出中間項。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：限定整數係數；不引入根式或複數，符合國中範圍。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「檢查因數配對是否能配出中間項。」閱讀後，常見誤讀為「認為每個二次三項式都一定能分解。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "考查整數係數分解的邊界。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會因數配對與反證式列舉。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s005-v008：其他選項均可明確展開為原式，只有 x²+x+1 無整數配對。 因此導出「x²+x+1」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「檢查因數配對是否能配出中間項。」，並特別排除「認為每個二次三項式都一定能分解。」。難度理由是「考查整數係數分解的邊界。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s005-v009",
    "unitId": "u12",
    "skillId": "factoring-quadratic-trinomial",
    "contentSha256": "bf8393cdb6ea68917a10f0b5d8460f6682b3576247803896a4e808e723fdfda2",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "獨立計算 4x·2x=8x²、4x·1=4x、3·2x=6x、3·1=3；合併為 8x²+10x+3。",
    "derivedAnswer": "正確，因展開為 8x²+10x+3",
    "storedAnswer": "正確，因展開為 8x²+10x+3",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某生將 8x²+10x+3 分解為 (4x+3)(2x+1)。判斷其結果。」逐一展開或回代；正解「正確，因展開為 8x²+10x+3」成立。「錯誤，正確應為 (4x+1)(2x+3)」不成立：替代式展開中間項為 14x，且原候選本來就正確。；「錯誤，因中間項會是 7x」不成立：交叉和不是 7x。；「錯誤，因常數項會是 4」不成立：3·1=3。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「展開審查三個係數。」。",
      "unitConflict": "本題單位審查：無單位；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：判斷題只問原候選是否正確；替代分解不會形成第二個正確敘述。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「展開審查三個係數。」閱讀後，常見誤讀為「看到兩組可能配對就未展開。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "要求審查他人答案並處理可能等價候選。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會展開檢查。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s005-v009：獨立計算 4x·2x=8x²、4x·1=4x、3·2x=6x、3·1=3；合併為 8x²+10x+3。 因此導出「正確，因展開為 8x²+10x+3」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「展開審查三個係數。」，並特別排除「看到兩組可能配對就未展開。」。難度理由是「要求審查他人答案並處理可能等價候選。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s005-v010",
    "unitId": "u12",
    "skillId": "factoring-quadratic-trinomial",
    "contentSha256": "a0f39cc81a4906c6004e0e3f5a687ed7f4f98921c9bd6b0d22541bc4e7718723",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "乘積回到面積式，兩因式都為正。",
    "derivedAnswer": "2x+1 與 x+4 公尺",
    "storedAnswer": "2x+1 與 x+4 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「長方形倉儲區面積為 2x²+9x+4 平方公尺，兩邊皆為一次式且整數係數。尺寸可能為何？」逐一展開或回代；正解「2x+1 與 x+4 公尺」成立。「2x+4 與 x+1 公尺」不成立：中間項為 6x。；「x+2 與 2x+2 公尺」不成立：中間項為 6x，常數 4。；「2x-1 與 x-4 公尺」不成立：中間項為 -9x。",
      "undefinedSymbol": "題幹已給條件為「x>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「完整分解面積式。」。",
      "unitConflict": "本題單位審查：邊長公尺相乘為平方公尺；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；邊長公尺相乘為平方公尺；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：長寬可交換；x>0 保證正。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「完整分解面積式。」閱讀後，常見誤讀為「只看常數乘積，未查交叉項。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需把完整分解翻成尺寸。",
    "literacyContextNecessity": "面積模型要求找兩個實際邊長，完整分解與正值檢查不可省略。",
    "prerequisiteCheck": "需知道面積與非首一分解。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s005-v010：乘積回到面積式，兩因式都為正。 因此導出「2x+1 與 x+4 公尺」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「完整分解面積式。」，並特別排除「只看常數乘積，未查交叉項。」。難度理由是「需把完整分解翻成尺寸。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s005-v011",
    "unitId": "u12",
    "skillId": "factoring-quadratic-trinomial",
    "contentSha256": "db48df4858a935c54aa13b78b291f0426e86642acb701c35c73a422cff5c9a79",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開 (2n+3)(2n+3) 完全吻合。",
    "derivedAnswer": "(2n+3)²",
    "storedAnswer": "(2n+3)²",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某平台的資料區塊數模型為 4n²+12n+9。若要表示成相同兩個群組因子的乘積，應寫成何者？」逐一展開或回代；正解「(2n+3)²」成立。「(4n+3)²」不成立：首項會是 16n²。；「(2n-3)²」不成立：中間項為 -12n。；「(2n+9)(2n+1)」不成立：中間項為 20n。",
      "undefinedSymbol": "題幹已給條件為「n 為非負整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「辨認完全平方並解讀重複因子。」。",
      "unitConflict": "本題單位審查：因子是群組計數，平方為區塊數；均為整數。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；因子是群組計數，平方為區塊數；均為整數。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：n≥0，2n+3>0。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「辨認完全平方並解讀重複因子。」閱讀後，常見誤讀為「只因首末項是平方就未查中間項。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "情境要求相同因子，公式法比十字更直接。",
    "literacyContextNecessity": "「相同兩個群組因子」使完全平方結構成為必要解讀。",
    "prerequisiteCheck": "需會完全平方。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s005-v011：展開 (2n+3)(2n+3) 完全吻合。 因此導出「(2n+3)²」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「辨認完全平方並解讀重複因子。」，並特別排除「只因首末項是平方就未查中間項。」。難度理由是「情境要求相同因子，公式法比十字更直接。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s005-v012",
    "unitId": "u12",
    "skillId": "factoring-quadratic-trinomial",
    "contentSha256": "b9d06f607311772880a43a0f0535249a606fab4bab110522562feca7a5b43dce",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "外層負號乘回後三項符號完全吻合。",
    "derivedAnswer": "-2(p-3)(p-4) 元",
    "storedAnswer": "-2(p-3)(p-4) 元",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「一項折扣模型為 -2p²+14p-24 元。會計要把負號留在外面，且括號內完整分解。何者正確？」逐一展開或回代；正解「-2(p-3)(p-4) 元」成立。「2(p-3)(p-4) 元」不成立：首項符號會變正。；「-2(p+3)(p+4) 元」不成立：中間項與常數在乘回後不符。；「-2(p²-7p+12) 元」不成立：尚未完整分解。",
      "undefinedSymbol": "題幹已給條件為「p 為價格參數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「先提出 -2 再分解。」。",
      "unitConflict": "本題單位審查：單位元；多項式為調整量，可正可負；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；單位元；多項式為調整量，可正可負；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題目不要求把因式解讀為價格，避免負長度類誤讀。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「先提出 -2 再分解。」閱讀後，常見誤讀為「外層負號遺失或內部符號未反。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "負成本調整模型需要完整兩層分解。",
    "literacyContextNecessity": "會計指定負號留外，使折扣方向與內部正結構分離；情境條件影響呈現。",
    "prerequisiteCheck": "需會負公因式與首一分解。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s005-v012：外層負號乘回後三項符號完全吻合。 因此導出「-2(p-3)(p-4) 元」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「先提出 -2 再分解。」，並特別排除「外層負號遺失或內部符號未反。」。難度理由是「負成本調整模型需要完整兩層分解。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
