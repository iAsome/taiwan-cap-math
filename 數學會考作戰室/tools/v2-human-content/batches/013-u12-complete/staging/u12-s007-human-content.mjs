// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u12-s007-lecture-r1",
  "unitId": "u12",
  "numericUnitId": 12,
  "topicId": "u12-applications",
  "skillId": "factoring-application",
  "lockedSkillTitle": "因式分解應用",
  "title": "因式分解應用：把難算的式子改成好用的乘積",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能用平方差做心算。",
    "能用完全平方簡化計算。",
    "能由因式說明整除性。",
    "能把多項式改寫成便於比較的形式。",
    "能說明使用因式分解的必要性。"
  ],
  "prerequisites": [
    {
      "skillId": "factoring-common-mistake-sign",
      "requiredLevel": "能運用前一技能並以展開驗證結果；本講義會重新連接必要步驟。"
    }
  ],
  "prerequisiteBridge": "先備技能為 factoring-common-mistake-sign；先確認能完成前一方法並保留所有符號，再進入本技能。",
  "glossary": [
    {
      "term": "整除",
      "definition": "一數除以另一數，商為整數且無餘數。"
    },
    {
      "term": "恆等式",
      "definition": "對允許的每個變數值都成立的等式。"
    },
    {
      "term": "結構化計算",
      "definition": "先改寫式子再計算，避免直接展開大數。"
    },
    {
      "term": "因數資訊",
      "definition": "乘積形式直接顯示哪些量必為因數。"
    }
  ],
  "notation": [
    {
      "symbol": "n(n+k)",
      "meaning": "顯示此式含因數 n。"
    },
    {
      "symbol": "(A+B)(A-B)",
      "meaning": "可快速算 A²-B²。"
    }
  ],
  "conceptNarrative": [
    "因式分解在應用題中是揭露結構的工具，不只是一種答案格式。平方差可把兩個大平方的相減改成底數和乘底數差；完全平方可把接近整數的三項計算合成單一平方。選用公式前要核對所有項與符號，完成後可用估算或直接計算回查量級。",
    "整除問題要把式子分成整數因子的乘積，再指出其中哪個因子提供所需的質因數。相鄰兩整數必有一個偶數，三個連續整數還必含一個三的倍數，因此三連續整數的乘積必為六的倍數。若要除以變數，必須先確認該變數不為零。",
    "情境解讀必須把因式對回實際量。總座位數可分成排數乘每排席數，資料量可分成組數乘每組筆數；展開式中的各項不一定各自對應一個獨立量。約分問題還要保留原定義域，即使化簡後的式子表面上在被排除值也有數值。"
  ],
  "formalDefinitions": [
    {
      "name": "因式分解應用",
      "statement": "利用乘積形式完成計算、整除、比較或量的解讀。"
    }
  ],
  "formulas": [
    {
      "formula": "A²-B²=(A+B)(A-B)",
      "conditions": [
        "適用平方差"
      ],
      "meaning": "快速乘法。"
    },
    {
      "formula": "n²+kn=n(n+k)",
      "conditions": [
        "n 為共同因式"
      ],
      "meaning": "顯示 n 整除整式。"
    }
  ],
  "nonApplicableCases": [
    "除數可能為 0 時不能直接談除法。",
    "因式分解只能重寫等值式，不能任意刪除因式。",
    "實際情境中的長度因式還要檢查正值條件。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "判斷目標是計算、整除、比較或量的解讀。",
      "check": "不要只看表面式子。"
    },
    {
      "step": 2,
      "instruction": "選擇能暴露資訊的分解方法。",
      "check": "平方差、完全平方或提公因式。"
    },
    {
      "step": 3,
      "instruction": "寫成乘積並執行目標操作。",
      "check": "例如直接相乘或指出因數。"
    },
    {
      "step": 4,
      "instruction": "檢查變數與情境限制。",
      "check": "除數非零、長度為正。"
    },
    {
      "step": 5,
      "instruction": "用原式或估算回查。",
      "check": "結果量級合理嗎？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "不用直接平方，計算 63²−37²。",
      "solutionSteps": [
        "辨認平方差。",
        "改寫為 (63+37)(63−37)。",
        "計算 100×26=2600。"
      ],
      "answer": "2600",
      "why": "底數和正好是一百，差只有二十六，因式分解把兩次四位數平方與減法改成簡單乘法；直接平方相減也會得到相同結果，可作驗算。"
    },
    {
      "exampleId": "L2",
      "prompt": "計算 98²+4×98+4。",
      "solutionSteps": [
        "把四倍九十八看成兩倍的九十八乘二。",
        "三項符合 (98+2)²。",
        "計算 100²=10000。"
      ],
      "answer": "10000",
      "why": "首末項分別是九十八與二的平方，中間項正好是兩者乘積的兩倍，所以能合成和的完全平方；只因九十八接近一百而直接猜值不足以證明。"
    },
    {
      "exampleId": "L3",
      "prompt": "說明整數 n 的式子 n²+7n 可被何數整除。",
      "solutionSteps": [
        "提出共同因子 n。",
        "得到 n(n+7)。",
        "若 n 非零，除以 n 的商 n+7 為整數。"
      ],
      "answer": "可被非零整數 n 整除",
      "why": "乘積形式直接顯示原式含有因子 n；常數七只出現在另一因子內，不能因此宣稱原式一定被七整除。若 n 為零，整除敘述的除數不合法，須另行排除。"
    },
    {
      "exampleId": "L4",
      "prompt": "化簡 (x²−16)÷(x−4)，其中 x≠4。",
      "solutionSteps": [
        "分子以平方差分成 (x−4)(x+4)。",
        "由條件知共同因子不為零。",
        "約去後得 x+4，並保留 x≠4。"
      ],
      "answer": "x+4，且 x≠4",
      "why": "因式分解使共同因子可見，但只有非零因子才能約去。化簡式與原式只在共同定義域相等；不能因新式可代入四，就把原本分母為零的值補回。"
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
      "mistake": "平方差直接算兩平方。",
      "why": "忽略可簡化結構。",
      "correction": "先改寫為和乘差。"
    },
    {
      "mistake": "從 n(n+7) 把 n 約掉。",
      "why": "沒有等式或分母條件。",
      "correction": "分解不等於任意消去。"
    },
    {
      "mistake": "宣稱可被 n 整除但 n=0。",
      "why": "除數不可為 0。",
      "correction": "加上 n≠0 或改說含因數 n。"
    },
    {
      "mistake": "完全平方中間項辨認錯。",
      "why": "2ab 算錯。",
      "correction": "逐一找 a、b。"
    },
    {
      "mistake": "只給乘積未回答情境問題。",
      "why": "停在中間步驟。",
      "correction": "回到所求量。"
    },
    {
      "mistake": "忽略長度正值。",
      "why": "代數因式可能為負。",
      "correction": "依情境加上變數範圍。"
    }
  ],
  "selfCheck": [
    "我是否先判斷可用的方法？",
    "每一項、每個符號與外層因式都保留了嗎？",
    "我是否把結果展開回原式？",
    "情境中的單位與變數限制是否合理？"
  ],
  "summary": [
    "乘積形式能簡化計算並顯示因數。",
    "整除與除法需檢查 0。",
    "情境答案要回到原問題與限制。"
  ],
  "connections": {
    "previous": "承接 factoring-common-mistake-sign。",
    "next": "依鎖定順序銜接下一技能；本單元不提前使用一元二次方程式解根。"
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u12-s007-v001",
      "u12-s007-v002",
      "u12-s007-v003",
      "u12-s007-v004",
      "u12-s007-v005",
      "u12-s007-v006",
      "u12-s007-v007",
      "u12-s007-v008",
      "u12-s007-v009",
      "u12-s007-v010",
      "u12-s007-v011",
      "u12-s007-v012"
    ],
    "constructedResponseIds": [
      "u12-s007-cr001",
      "u12-s007-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "例題分別重算平方差、完全平方、整除與零除限制；所有應用均指出分解後新增的可用資訊。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "b1e478855c945c11fdd41c85ae61a11cc49eddb9d84bf1c0074b2a1b811a2b34"
};

export const QUESTIONS = [
  {
    "questionId": "u12-s007-v001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "不直接算兩個平方，23²-17² 的值為何？",
    "givenConditions": [
      "使用平方差。"
    ],
    "target": "用和乘差快速計算。",
    "choices": [
      "36",
      "400",
      "240",
      "120"
    ],
    "answerIndex": 2,
    "independentSolution": "直接回查 529-289=240。",
    "explanation": "23²-17²=(23+17)(23-17)=40×6=240。 平方差公式把原本兩次平方與一次減法，改成底數和乘底數差；和為四十、差為六，所以乘積是二百四十。直接計算兩個平方所得差也相同，可作獨立驗算。",
    "steps": [
      "辨認平方差。",
      "計算和 40、差 6。",
      "相乘。"
    ],
    "optionAnalysis": [
      {
        "choice": "36",
        "truth": false,
        "reason": "只算 (23-17)²。"
      },
      {
        "choice": "400",
        "truth": false,
        "reason": "只算 23+17 的平方或誤用。"
      },
      {
        "choice": "240",
        "truth": true,
        "reason": "(23+17)(23-17)=40×6=240。"
      },
      {
        "choice": "120",
        "truth": false,
        "reason": "40×6 少算一半。"
      }
    ],
    "misconceptionTarget": "把平方差當差的平方。 平方差是和乘差，不是先相減後再把差平方。",
    "prerequisiteCheck": "需會平方差公式。",
    "estimatedTimeSec": 60,
    "unitAndRoundingChecks": "純數值；結果精確。",
    "ambiguityAndBoundaryAudit": "無單位與範圍歧義。",
    "difficultyReason": "基本公式應用與心算。",
    "literacyContextNecessity": null,
    "authoringIntent": "用因式分解降低計算量。",
    "concept": "平方差心算",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "因式分解應用"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b67cd92701ace8d2201d3ada52ccf77fb0a63777b63c49f3d699ea6079692b85"
  },
  {
    "questionId": "u12-s007-v002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "99²+2×99+1 的值為何？",
    "givenConditions": [
      "使用完全平方。"
    ],
    "target": "辨認 (99+1)²。",
    "choices": [
      "10000",
      "9802",
      "1000",
      "9999"
    ],
    "answerIndex": 0,
    "independentSolution": "直接算 9801+198+1=10000。",
    "explanation": "式子是 (99+1)²=100²=10000。 三項依序對應第一數的平方、兩數乘積的兩倍與第二數的平方，因此是和的完全平方。把九十九加一後再平方得到整百的平方；直接相加三項也得到相同數值。",
    "steps": [
      "對照 a²+2ab+b²。",
      "取 a=99、b=1。",
      "計算 100²。"
    ],
    "optionAnalysis": [
      {
        "choice": "10000",
        "truth": true,
        "reason": "99²+2·99·1+1²=100²。"
      },
      {
        "choice": "9802",
        "truth": false,
        "reason": "只把 99² 與 1 相加，漏中間項。"
      },
      {
        "choice": "1000",
        "truth": false,
        "reason": "100² 位值錯。"
      },
      {
        "choice": "9999",
        "truth": false,
        "reason": "把完全平方誤當 100²-1。"
      }
    ],
    "misconceptionTarget": "看見 99 就用 100²-1。 必須同時核對中間兩倍乘積，不能只因接近整百便猜答案。",
    "prerequisiteCheck": "需會完全平方公式。",
    "estimatedTimeSec": 60,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "所有運算為整數。",
    "difficultyReason": "基本完全平方應用。",
    "literacyContextNecessity": null,
    "authoringIntent": "用完全平方簡化接近整百的計算。",
    "concept": "完全平方心算",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "因式分解應用"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d7e760389b1a32d805bd84f4276935240470ae6a86246499267f0e0667444787"
  },
  {
    "questionId": "u12-s007-v003",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "n²+6n 可因式分解為 n(n+6)。若 n 為非零整數，這個形式直接說明何者？",
    "givenConditions": [
      "n≠0 且為整數。"
    ],
    "target": "解讀共同因式與整除。",
    "choices": [
      "n²+6n 一定可被 6 整除",
      "n²+6n 永遠等於 6n²",
      "n²+6n 一定是正數",
      "n²+6n 可被 n 整除"
    ],
    "answerIndex": 3,
    "independentSolution": "整除結論來自乘積形式，不需指定 n 的正負。",
    "explanation": "n²+6n=n(n+6)，兩因子均為整數且 n 非零，所以除以 n 的商為 n+6。 提出共同的整數後，原式成為該整數乘另一個整數的乘積；因題目已排除除數為零，所以用原式除以該整數，商就是另一因子且仍為整數。這只保證被該整數整除，不保證被六整除或結果為正。",
    "steps": [
      "提出 n。",
      "確認 n+6 為整數。",
      "確認除數 n 不為 0。"
    ],
    "optionAnalysis": [
      {
        "choice": "n²+6n 一定可被 6 整除",
        "truth": false,
        "reason": "n² 不一定是 6 的倍數。"
      },
      {
        "choice": "n²+6n 永遠等於 6n²",
        "truth": false,
        "reason": "分解不會改變次方。"
      },
      {
        "choice": "n²+6n 一定是正數",
        "truth": false,
        "reason": "n 為負時不一定。"
      },
      {
        "choice": "n²+6n 可被 n 整除",
        "truth": true,
        "reason": "乘積中含因數 n，另一因子 n+6 也是整數。"
      }
    ],
    "misconceptionTarget": "看到常數 6 就誤判可被 6 整除。 整除結論來自提出的因子，不能看見常數六就判成六的倍數。",
    "prerequisiteCheck": "需會整數與整除。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無實際單位；商精確。",
    "ambiguityAndBoundaryAudit": "明示 n≠0，避免零作除數。",
    "difficultyReason": "從因式解讀整除，需注意除數非零。",
    "literacyContextNecessity": null,
    "authoringIntent": "用共同因式說明整除性。",
    "concept": "整除資訊",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "因式分解應用"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "889710b84c15af433ef380a9b506603301cc8c3c7d29187d2b7b96e1270db94f"
  },
  {
    "questionId": "u12-s007-v004",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "計算 52²-48²，最有效的結果為何？",
    "givenConditions": [
      "用平方差。"
    ],
    "target": "把接近數轉成和乘差。",
    "choices": [
      "4",
      "400",
      "416",
      "5200"
    ],
    "answerIndex": 1,
    "independentSolution": "2704-2304=400。",
    "explanation": "52²-48²=100×4=400。 兩個底數相近時使用平方差最省算：和正好是一百，差為四，只需做整百乘四。若把差四再平方只會得到十六，漏掉和因子；直接平方相減則可驗算結果確為四百。",
    "steps": [
      "求和 100。",
      "求差 4。",
      "相乘。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "只算兩數差，漏乘兩數和。"
      },
      {
        "choice": "400",
        "truth": true,
        "reason": "(52+48)(52-48)=100×4。"
      },
      {
        "choice": "416",
        "truth": false,
        "reason": "把平方差公式的結果 400 又多加 16。"
      },
      {
        "choice": "5200",
        "truth": false,
        "reason": "把和 100 乘 52。"
      }
    ],
    "misconceptionTarget": "把平方差誤算成差的平方，或在正確乘積後多加一次差平方。",
    "prerequisiteCheck": "需會平方差公式。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "四個選項互異，只有 400 符合平方差計算。",
    "difficultyReason": "需辨認最有效計算策略。",
    "literacyContextNecessity": null,
    "authoringIntent": "用結構化計算避免大平方。",
    "concept": "接近整數平方差",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "因式分解應用"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "0f33acdc61b8e49522e69a2cb7cfac241ea908c6f52263739ba673c89a0abdb4"
  },
  {
    "questionId": "u12-s007-v005",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 A=75²-25²，利用因式分解可寫成哪個最容易計算的乘積？",
    "givenConditions": [
      "A 為整數。"
    ],
    "target": "選擇和乘差形式。",
    "choices": [
      "50×50",
      "75×50",
      "100×50",
      "100×25"
    ],
    "answerIndex": 2,
    "independentSolution": "若再算得 5000，與 5625-625 相同。",
    "explanation": "平方差直接給 A=(75+25)(75-25)=100×50。 平方差分解後的兩因子必須分別是原底數的和與差。七十五加二十五得到一百，七十五減二十五得到五十，所以最容易計算的乘積是整百乘五十，並可算得五千。",
    "steps": [
      "辨認平方差。",
      "分別算和、差。",
      "不必先求最終值。"
    ],
    "optionAnalysis": [
      {
        "choice": "50×50",
        "truth": false,
        "reason": "把兩個因式都寫成差。"
      },
      {
        "choice": "75×50",
        "truth": false,
        "reason": "漏加 25。"
      },
      {
        "choice": "100×50",
        "truth": true,
        "reason": "(75+25)(75-25)=100×50。"
      },
      {
        "choice": "100×25",
        "truth": false,
        "reason": "第二因式應為 50。"
      }
    ],
    "misconceptionTarget": "把和與差混淆。 和與差各自都是必要因子，不能重複使用差或漏掉其中一個。",
    "prerequisiteCheck": "需會平方差。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無單位；精確。",
    "ambiguityAndBoundaryAudit": "題目問乘積形式，不要求化為單一數。",
    "difficultyReason": "要求選擇便於計算的等價形式。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認最有用的因式形式。",
    "concept": "結構化乘積",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "因式分解應用"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "7cf7ff648e68cd29d8ce962177839ea4fdf26257709aff5922cb9c4d7e510db8"
  },
  {
    "questionId": "u12-s007-v006",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "對任意整數 k，k²-k 為何一定是偶數？",
    "givenConditions": [
      "k 為整數。"
    ],
    "target": "因式分解並利用相鄰整數。",
    "choices": [
      "k(k-1) 是兩個相鄰整數的乘積",
      "k² 與 k 都一定是偶數",
      "k(k+1) 與原式相同",
      "因為兩項相減一定是偶數"
    ],
    "answerIndex": 0,
    "independentSolution": "例如 k 奇則 k-1 偶；k 偶則 k 本身偶，涵蓋所有整數。",
    "explanation": "k²-k=k(k-1)，k 與 k-1 相鄰，其中必有一個偶數。 提出共同整數後得到相鄰兩整數的乘積。任一整數若為偶數，第一因子已含二；若為奇數，前一個整數必為偶數，所以第二因子含二。兩種情形涵蓋所有整數，乘積必為偶數。",
    "steps": [
      "提出 k。",
      "辨認兩因子相鄰。",
      "用奇偶性得乘積偶。"
    ],
    "optionAnalysis": [
      {
        "choice": "k(k-1) 是兩個相鄰整數的乘積",
        "truth": true,
        "reason": "相鄰兩整數必有一個偶數，因此乘積為偶數。"
      },
      {
        "choice": "k² 與 k 都一定是偶數",
        "truth": false,
        "reason": "k 可為奇數。"
      },
      {
        "choice": "k(k+1) 與原式相同",
        "truth": false,
        "reason": "k(k+1)=k²+k。"
      },
      {
        "choice": "因為兩項相減一定是偶數",
        "truth": false,
        "reason": "奇偶不同時相減可為奇數。"
      }
    ],
    "misconceptionTarget": "只看平方或相減，沒有完整奇偶論證。",
    "prerequisiteCheck": "需理解奇偶與相鄰整數。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位；結論對負整數也成立。",
    "ambiguityAndBoundaryAudit": "不以除以 k 論證，避免 k=0 問題。",
    "difficultyReason": "需要把因式資訊連到數論理由。",
    "literacyContextNecessity": null,
    "authoringIntent": "用因式分解證明偶數性。",
    "concept": "奇偶證明",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "因式分解應用"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2d644526424d9b004b4912912d23826148b8da24aa80fcfe42e4e26e05d274ee"
  },
  {
    "questionId": "u12-s007-v007",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x+y=20，求 x²-y² 可改寫成哪個式子以便只再知道 x-y 就能計算？",
    "givenConditions": [
      "x、y 為數。"
    ],
    "target": "利用平方差與已知和。",
    "choices": [
      "400-(x-y)",
      "(x-y)²",
      "20(x+y)",
      "20(x-y)"
    ],
    "answerIndex": 3,
    "independentSolution": "展開 20(x-y) 在 x+y=20 的條件下等於原式。",
    "explanation": "x²-y²=(x+y)(x-y)=20(x-y)。 平方差可分成兩變數和與兩變數差的乘積，題目已給和為二十，故直接代入第一因子，留下二十乘差。若把差平方或再使用和，展開都不會還原原平方差。",
    "steps": [
      "套平方差。",
      "代入已知和 20。",
      "保留未知差。"
    ],
    "optionAnalysis": [
      {
        "choice": "400-(x-y)",
        "truth": false,
        "reason": "沒有平方差依據。"
      },
      {
        "choice": "(x-y)²",
        "truth": false,
        "reason": "差的平方不是平方差。"
      },
      {
        "choice": "20(x+y)",
        "truth": false,
        "reason": "會變成 400，漏掉差。"
      },
      {
        "choice": "20(x-y)",
        "truth": true,
        "reason": "x²-y²=(x+y)(x-y)，且 x+y=20。"
      }
    ],
    "misconceptionTarget": "把平方差當差平方。 平方差需保留和、差兩個不同因子，不是差的平方。",
    "prerequisiteCheck": "需會代入條件與平方差。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位；若 x、y 有同一單位，兩邊皆平方單位。",
    "ambiguityAndBoundaryAudit": "只在給定 x+y=20 條件下等價，題幹已明示。",
    "difficultyReason": "需要利用條件替換其中一因式。",
    "literacyContextNecessity": null,
    "authoringIntent": "把因式分解與條件結合。",
    "concept": "條件化簡",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "因式分解應用"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "fd9e48fdad3ca06139b0c707941b6e8176ffb40bfcf942c20da4e0047e6a6554"
  },
  {
    "questionId": "u12-s007-v008",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "對正整數 n，n³+3n²+2n 完整因式分解後，最能說明其為 6 的倍數的形式為何？",
    "givenConditions": [
      "n 為正整數。"
    ],
    "target": "分解成三個連續整數乘積。",
    "choices": [
      "n(n+3)+2n",
      "n(n+1)(n+2)",
      "n²(n+3)+2n",
      "6(n³+n)"
    ],
    "answerIndex": 1,
    "independentSolution": "因此乘積同時含因數 2 與 3，必為 6 的倍數。",
    "explanation": "n³+3n²+2n=n(n²+3n+2)=n(n+1)(n+2)。 先提出共同整數，再將括號內二次三項式分成相鄰的兩個一次因式，便得到三個連續正整數的乘積。任三連續整數至少含一個偶數且含一個三的倍數，所以乘積同時含因數二與三。",
    "steps": [
      "提出 n。",
      "分解二次三項式。",
      "辨認三個連續整數中有一偶數且一個為 3 的倍數。"
    ],
    "optionAnalysis": [
      {
        "choice": "n(n+3)+2n",
        "truth": false,
        "reason": "不是單一乘積，無法直接看 6。"
      },
      {
        "choice": "n(n+1)(n+2)",
        "truth": true,
        "reason": "先提 n，括號 n²+3n+2=(n+1)(n+2)。"
      },
      {
        "choice": "n²(n+3)+2n",
        "truth": false,
        "reason": "只是重排原式。"
      },
      {
        "choice": "6(n³+n)",
        "truth": false,
        "reason": "展開不等於原式。"
      }
    ],
    "misconceptionTarget": "只完成提 n，未繼續分解以顯示連續性。",
    "prerequisiteCheck": "需會完整分解與連續整數整除。",
    "estimatedTimeSec": 135,
    "unitAndRoundingChecks": "無單位；n 正整數，結論精確。",
    "ambiguityAndBoundaryAudit": "不使用除法取消 n；n=0 雖也成立，但題幹限定正整數。",
    "difficultyReason": "多層分解後作整除推理。",
    "literacyContextNecessity": null,
    "authoringIntent": "用完整因式顯示 6 的倍數。",
    "concept": "連續整數整除",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "因式分解應用"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "9b1e296206ab2b42d36055cd77c6dd8dd3803c742c04ee6cdc8c7090547fe288"
  },
  {
    "questionId": "u12-s007-v009",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 x≠4。將 (x²-16)÷(x-4) 先因式分解後，結果為何？",
    "givenConditions": [
      "x≠4，避免分母為 0。"
    ],
    "target": "用平方差約去合法共同因式。",
    "choices": [
      "x-4",
      "x²+16",
      "x+4",
      "1"
    ],
    "answerIndex": 2,
    "independentSolution": "代數結果在原定義域 x≠4 上成立。",
    "explanation": "分子分解為 (x-4)(x+4)，因 x-4≠0，可約成 x+4。 分子先用平方差寫成差因式乘和因式。題設排除未知數等於四，確保共同差因式不為零，才可約去並留下和因式。化簡式只在原本定義域內等值，不能據此補回被排除的值。",
    "steps": [
      "先因式分解分子。",
      "檢查 x≠4。",
      "約去共同非零因式。"
    ],
    "optionAnalysis": [
      {
        "choice": "x-4",
        "truth": false,
        "reason": "約去後保留錯誤因式。"
      },
      {
        "choice": "x²+16",
        "truth": false,
        "reason": "平方差分解錯。"
      },
      {
        "choice": "x+4",
        "truth": true,
        "reason": "x²-16=(x-4)(x+4)，在 x≠4 時可約去 x-4。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "把兩個不同因式都消去。"
      }
    ],
    "misconceptionTarget": "未檢查分母為 0，或把平方差當平方和。",
    "prerequisiteCheck": "需會基本代數分式約分；不求方程式根。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "無單位；結果精確。",
    "ambiguityAndBoundaryAudit": "保留原限制 x≠4，即使化簡式 x+4 在 x=4 有值也不能擴張原題。",
    "difficultyReason": "涉及分式約分與定義域限制。",
    "literacyContextNecessity": null,
    "authoringIntent": "用因式分解合法約分。",
    "concept": "定義域約分",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "因式分解應用"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "04841046d1478c7a2d2e8127d1831ea0a42d65c5d67667efb672021eb0dd54aa"
  },
  {
    "questionId": "u12-s007-v010",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一家印刷廠兩批海報數量差為 101²-99² 張。用因式分解計算，差多少張？",
    "givenConditions": [
      "數量為整數。"
    ],
    "target": "用平方差快速取得差值。",
    "choices": [
      "400 張",
      "4 張",
      "200 張",
      "202 張"
    ],
    "answerIndex": 0,
    "independentSolution": "直接平方回查 10201-9801=400。",
    "explanation": "平方差轉成 200×2=400。 兩批數量本身是平方數，所求仍是這兩個數量的差。平方差分解後，底數和為二百、底數差為二，乘得四百；答案要保留張數單位，不能把底數差二誤當海報差。",
    "steps": [
      "辨認兩批數量是平方數。",
      "算和 200、差 2。",
      "相乘並附單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "400 張",
        "truth": true,
        "reason": "(101+99)(101-99)=200×2=400。"
      },
      {
        "choice": "4 張",
        "truth": false,
        "reason": "只算差的平方。"
      },
      {
        "choice": "200 張",
        "truth": false,
        "reason": "只算兩數和。"
      },
      {
        "choice": "202 張",
        "truth": false,
        "reason": "把和與差相加。"
      }
    ],
    "misconceptionTarget": "把數量差誤當邊長差。 情境中的數量是兩個平方值，其差不等於底數相差二。",
    "prerequisiteCheck": "需會平方差。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "答案單位張；整數精確。",
    "ambiguityAndBoundaryAudit": "第一批較多，差值應為正。",
    "difficultyReason": "情境要求避免大數平方並保留單位。",
    "literacyContextNecessity": "兩批數量以平方模型給出，平方差是計算差值的必要結構。",
    "authoringIntent": "計算兩批產量差。",
    "concept": "生產差值",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "因式分解應用"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b17ce1d2d28cb153efcfb720a7f5c038fd8f02a5be55051b7f878a5451290832"
  },
  {
    "questionId": "u12-s007-v011",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某活動有 n 排座位，每排 n+5 席，總座位數可寫成 n²+5n。乘積形式最直接顯示哪兩個量？",
    "givenConditions": [
      "n 為正整數。"
    ],
    "target": "解讀 n(n+5)。",
    "choices": [
      "總排數 n² 與額外 5 排",
      "每排 n 席與總共 5 席",
      "兩個面積邊長 n² 與 5n",
      "排數 n 與每排 n+5 席"
    ],
    "answerIndex": 3,
    "independentSolution": "乘回得到總座位數。",
    "explanation": "n²+5n=n(n+5)，兩因式正好對應排數與每排席數。 把總數提出共同的排數後，兩因子分別是排數與每排席數，乘回即為長方形排列的總座位數。平方項與一次項只是展開後的兩部分，並不是題目中兩個可直接相乘的實際量。",
    "steps": [
      "提出 n。",
      "將兩因式對照題意。",
      "確認 n>0。"
    ],
    "optionAnalysis": [
      {
        "choice": "總排數 n² 與額外 5 排",
        "truth": false,
        "reason": "n² 是乘積項，不是排數。"
      },
      {
        "choice": "每排 n 席與總共 5 席",
        "truth": false,
        "reason": "漏掉 n+5。"
      },
      {
        "choice": "兩個面積邊長 n² 與 5n",
        "truth": false,
        "reason": "情境是座位計數。"
      },
      {
        "choice": "排數 n 與每排 n+5 席",
        "truth": true,
        "reason": "總數=排數×每排席數。"
      }
    ],
    "misconceptionTarget": "只做形式分解，未解讀因式。 乘積兩因子要回到排數與每排席數，不能只解讀展開項。",
    "prerequisiteCheck": "需知道乘法計數原理。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "兩因式皆為無單位計數，乘積為席；無近似。",
    "ambiguityAndBoundaryAudit": "n 正整數，排數與席數皆正。",
    "difficultyReason": "情境意義是題目核心。",
    "literacyContextNecessity": "排數與每排席數無法從展開式直接看出，因式分解恢復安排結構。",
    "authoringIntent": "由乘積還原座位安排。",
    "concept": "排列解讀",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "因式分解應用"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "45b7f2251244b0204bcd839d3721536fcd44118174aa3c1cb3a9ad359926c934"
  },
  {
    "questionId": "u12-s007-v012",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "資料中心每分鐘處理量為 m²+7m 筆。若 m 為正整數，哪個敘述可由因式分解直接得到？",
    "givenConditions": [
      "m>0 且為整數。"
    ],
    "target": "解讀 m(m+7)。",
    "choices": [
      "處理量一定是 7 的倍數",
      "處理量可分成 m 組，每組 m+7 筆",
      "每組一定有 7 筆",
      "總量一定是平方數"
    ],
    "answerIndex": 1,
    "independentSolution": "乘回即原處理量，分組均為整數。",
    "explanation": "m²+7m=m(m+7)，可解讀為 m 組、每組 m+7 筆。 提出正整數分組數後，另一因子仍是整數且代表每組筆數，因此乘積可直接解讀為若干組、每組若干筆。常數七只是每組比基準多的筆數，原式並不一定含因數七，也不一定是平方數。",
    "steps": [
      "提出 m。",
      "利用 m 正整數確認分組數。",
      "回到資料處理語意。"
    ],
    "optionAnalysis": [
      {
        "choice": "處理量一定是 7 的倍數",
        "truth": false,
        "reason": "m² 不一定被 7 整除。"
      },
      {
        "choice": "處理量可分成 m 組，每組 m+7 筆",
        "truth": true,
        "reason": "乘積形式直接給出整數分組。"
      },
      {
        "choice": "每組一定有 7 筆",
        "truth": false,
        "reason": "另一因子是 m+7。"
      },
      {
        "choice": "總量一定是平方數",
        "truth": false,
        "reason": "m(m+7) 一般不是平方。"
      }
    ],
    "misconceptionTarget": "看到常數 7 就宣稱 7 的倍數。 提出的因子是分組依據，式中出現七不代表總量必被七整除。",
    "prerequisiteCheck": "需理解整數分組。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "單位筆；m 與 m+7 是計數，無近似。",
    "ambiguityAndBoundaryAudit": "m>0 排除零組。",
    "difficultyReason": "需從代數乘積作可行整數分組。",
    "literacyContextNecessity": "資料分組必須是整數，題幹 m 正整數使因式的情境解讀成立。",
    "authoringIntent": "把處理量模型解讀為分組。",
    "concept": "資料分組",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "因式分解應用"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3886def6cedd5d8e5da30271af649e01fff2dd15a3de153ff60325d2189445e8"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u12-s007-cr001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "不用直接計算 103² 與 97²，求 103²-97²，並說明因式分解如何降低計算量。",
    "requiredWork": [
      "辨認平方差。",
      "算和與差。",
      "完成乘法並附理由。"
    ],
    "fullCreditSolution": [
      "103²-97²=(103+97)(103-97)。",
      "=200×6=1200。",
      "原本兩個四位數平方改成整百乘單位數。",
      "平方差公式把兩個三位數的平方與相減，改成底數的和乘底數的差。和是整百、差只有六，因此只做二百乘六即可得到一千二百；若直接把差六平方會漏掉和因子。"
    ],
    "alternativeSolutions": [
      "可直接平方回查：10609-9409=1200，但不能取代主要因式分解過程。"
    ],
    "reasoningSteps": [
      "公式把兩次平方與一次減法改為兩次簡單加減與一次乘法。",
      "先確認兩項都是平方且以減號連接，才能使用和乘差。",
      "用直接平方的末兩位或估算量級回查一千二百合理。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確寫出 200×6=1200，並具體說明計算簡化。"
      },
      {
        "score": 2,
        "criteria": "答案與平方差步驟正確，但未說明效率；或一處小算術錯。"
      },
      {
        "score": 1,
        "criteria": "能寫 (103+97)(103-97) 但未完成。"
      },
      {
        "score": 0,
        "criteria": "寫成 (103-97)² 或結果完全不符。"
      }
    ],
    "partialCreditRules": [
      "只直接平方算對最高 1 分，因未依題意。",
      "答案需是正的差值。"
    ],
    "followThroughPolicy": "若和或差抄錯但公式正確，依後續一致可給 1 至 2 分；若公式本身錯不給方法分。",
    "unitAndNotationRules": [
      "無實際單位。",
      "結果精確。"
    ],
    "answerOnlyPolicy": "只答 1200 無過程最高 1 分。",
    "commonErrors": [
      "把平方差當差平方 36。",
      "103+97 算成 210。",
      "只算兩底數相差六就當成答案，遺漏平方差的和因子。"
    ],
    "independentReview": {
      "derivedResult": "1200。",
      "ambiguity": "題目指定不用直接平方，替代回查只作驗證。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "62b245faddb1b394504583568f1adfcca36bdc2d2988433c54d583252fa71838"
  },
  {
    "questionId": "u12-s007-cr002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-application",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "證明對任意整數 n，n³-n 一定是 6 的倍數。必須使用因式分解與連續整數性質。",
    "requiredWork": [
      "完整因式分解。",
      "指出三個連續整數。",
      "分別說明因數 2 與 3。"
    ],
    "fullCreditSolution": [
      "n³-n=n(n²-1)=n(n-1)(n+1)。",
      "n-1、n、n+1 是三個連續整數。",
      "三個連續整數中至少一個為偶數，且恰有一個是 3 的倍數，因此乘積含因數 2 與 3，是 6 的倍數。",
      "此論證對負整數、零與正整數都成立，因連續性不受整體平移或正負影響；乘積中可分別找到因數二與因數三，所以必含因數六，不需要假設各因子本身都是六的倍數。"
    ],
    "alternativeSolutions": [
      "可依 n 除以 3 的餘數分類，再配合奇偶；但仍需先寫出三連續因式。"
    ],
    "reasoningSteps": [
      "平方差完成第二層分解。",
      "連續性提供整除資訊。",
      "因二與三互質，乘積同時含這兩個因數便可斷定能被六整除。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整分解為 (n-1)n(n+1)，並正確論證其中含 2 與 3 的因數。"
      },
      {
        "score": 2,
        "criteria": "分解正確且只完整說明偶數或 3 的倍數其中一部分。"
      },
      {
        "score": 1,
        "criteria": "能分解到 n(n²-1) 或提到連續整數，但證明不完整。"
      },
      {
        "score": 0,
        "criteria": "只用若干數值例子，或錯誤宣稱每個因子都被 6 整除。"
      }
    ],
    "partialCreditRules": [
      "n 可為負或 0，證明仍成立。",
      "只舉例不能替代一般證明。"
    ],
    "followThroughPolicy": "若把因式順序寫為 n(n+1)(n-1) 不影響；若漏一個因式則不能取得完整整除分。",
    "unitAndNotationRules": [
      "n 為整數。",
      "「6 的倍數」包含 0 與負倍數。"
    ],
    "answerOnlyPolicy": "只答「是」或只列幾個例子，最高 0 至 1 分。",
    "commonErrors": [
      "認為三連續整數都必為偶數。",
      "只證明是 2 的倍數，漏 3。"
    ],
    "independentReview": {
      "derivedResult": "n³-n=(n-1)n(n+1)，必為 6 的倍數。",
      "ambiguity": "不使用數學歸納法或模運算作唯一方法，保持國中可讀性。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1afc288ca80fb8dafc02d36fb15138888269ba6f616f3f5a074250e0ea5f2458"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u12-s007-v001",
    "unitId": "u12",
    "skillId": "factoring-application",
    "contentSha256": "b67cd92701ace8d2201d3ada52ccf77fb0a63777b63c49f3d699ea6079692b85",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "直接回查 529-289=240。",
    "derivedAnswer": "240",
    "storedAnswer": "240",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「不直接算兩個平方，23²-17² 的值為何？」逐一展開或回代；正解「240」成立。「36」不成立：只算 (23-17)²。；「400」不成立：只算 23+17 的平方或誤用。；「120」不成立：40×6 少算一半。",
      "undefinedSymbol": "題幹已給條件為「使用平方差。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「用和乘差快速計算。」。",
      "unitConflict": "本題單位審查：純數值；結果精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；純數值；結果精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：無單位與範圍歧義。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「用和乘差快速計算。」閱讀後，常見誤讀為「把平方差當差的平方。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "基本公式應用與心算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會平方差公式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s007-v001：直接回查 529-289=240。 因此導出「240」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「用和乘差快速計算。」，並特別排除「把平方差當差的平方。」。難度理由是「基本公式應用與心算。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s007-v002",
    "unitId": "u12",
    "skillId": "factoring-application",
    "contentSha256": "d7e760389b1a32d805bd84f4276935240470ae6a86246499267f0e0667444787",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "直接算 9801+198+1=10000。",
    "derivedAnswer": "10000",
    "storedAnswer": "10000",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「99²+2×99+1 的值為何？」逐一展開或回代；正解「10000」成立。「9802」不成立：只把 99² 與 1 相加，漏中間項。；「1000」不成立：100² 位值錯。；「9999」不成立：把完全平方誤當 100²-1。",
      "undefinedSymbol": "題幹已給條件為「使用完全平方。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「辨認 (99+1)²。」。",
      "unitConflict": "本題單位審查：無單位；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：所有運算為整數。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「辨認 (99+1)²。」閱讀後，常見誤讀為「看見 99 就用 100²-1。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "基本完全平方應用。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會完全平方公式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s007-v002：直接算 9801+198+1=10000。 因此導出「10000」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「辨認 (99+1)²。」，並特別排除「看見 99 就用 100²-1。」。難度理由是「基本完全平方應用。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s007-v003",
    "unitId": "u12",
    "skillId": "factoring-application",
    "contentSha256": "889710b84c15af433ef380a9b506603301cc8c3c7d29187d2b7b96e1270db94f",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "整除結論來自乘積形式，不需指定 n 的正負。",
    "derivedAnswer": "n²+6n 可被 n 整除",
    "storedAnswer": "n²+6n 可被 n 整除",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「n²+6n 可因式分解為 n(n+6)。若 n 為非零整數，這個形式直接說明何者？」逐一展開或回代；正解「n²+6n 可被 n 整除」成立。「n²+6n 一定可被 6 整除」不成立：n² 不一定是 6 的倍數。；「n²+6n 永遠等於 6n²」不成立：分解不會改變次方。；「n²+6n 一定是正數」不成立：n 為負時不一定。",
      "undefinedSymbol": "題幹已給條件為「n≠0 且為整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「解讀共同因式與整除。」。",
      "unitConflict": "本題單位審查：無實際單位；商精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無實際單位；商精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：明示 n≠0，避免零作除數。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「解讀共同因式與整除。」閱讀後，常見誤讀為「看到常數 6 就誤判可被 6 整除。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "從因式解讀整除，需注意除數非零。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會整數與整除。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s007-v003：整除結論來自乘積形式，不需指定 n 的正負。 因此導出「n²+6n 可被 n 整除」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「解讀共同因式與整除。」，並特別排除「看到常數 6 就誤判可被 6 整除。」。難度理由是「從因式解讀整除，需注意除數非零。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s007-v004",
    "unitId": "u12",
    "skillId": "factoring-application",
    "contentSha256": "0f33acdc61b8e49522e69a2cb7cfac241ea908c6f52263739ba673c89a0abdb4",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "2704-2304=400。",
    "derivedAnswer": "400",
    "storedAnswer": "400",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「計算 52²-48²，最有效的結果為何？」逐一展開或回代；正解「400」成立。「4」不成立：只算兩數差，漏乘兩數和。；「416」不成立：把平方差公式的結果 400 又多加 16。；「5200」不成立：把和 100 乘 52。",
      "undefinedSymbol": "題幹已給條件為「用平方差。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「把接近數轉成和乘差。」。",
      "unitConflict": "本題單位審查：無單位；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：四個選項互異，只有 400 符合平方差計算。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「把接近數轉成和乘差。」閱讀後，常見誤讀為「把平方差誤算成差的平方，或在正確乘積後多加一次差平方。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需辨認最有效計算策略。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會平方差公式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s007-v004：2704-2304=400。 因此導出「400」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「把接近數轉成和乘差。」，並特別排除「把平方差誤算成差的平方，或在正確乘積後多加一次差平方。」。難度理由是「需辨認最有效計算策略。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s007-v005",
    "unitId": "u12",
    "skillId": "factoring-application",
    "contentSha256": "7cf7ff648e68cd29d8ce962177839ea4fdf26257709aff5922cb9c4d7e510db8",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "若再算得 5000，與 5625-625 相同。",
    "derivedAnswer": "100×50",
    "storedAnswer": "100×50",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「若 A=75²-25²，利用因式分解可寫成哪個最容易計算的乘積？」逐一展開或回代；正解「100×50」成立。「50×50」不成立：把兩個因式都寫成差。；「75×50」不成立：漏加 25。；「100×25」不成立：第二因式應為 50。",
      "undefinedSymbol": "題幹已給條件為「A 為整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「選擇和乘差形式。」。",
      "unitConflict": "本題單位審查：無單位；精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：題目問乘積形式，不要求化為單一數。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「選擇和乘差形式。」閱讀後，常見誤讀為「把和與差混淆。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "要求選擇便於計算的等價形式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會平方差。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s007-v005：若再算得 5000，與 5625-625 相同。 因此導出「100×50」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「選擇和乘差形式。」，並特別排除「把和與差混淆。」。難度理由是「要求選擇便於計算的等價形式。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s007-v006",
    "unitId": "u12",
    "skillId": "factoring-application",
    "contentSha256": "2d644526424d9b004b4912912d23826148b8da24aa80fcfe42e4e26e05d274ee",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "例如 k 奇則 k-1 偶；k 偶則 k 本身偶，涵蓋所有整數。",
    "derivedAnswer": "k(k-1) 是兩個相鄰整數的乘積",
    "storedAnswer": "k(k-1) 是兩個相鄰整數的乘積",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「對任意整數 k，k²-k 為何一定是偶數？」逐一展開或回代；正解「k(k-1) 是兩個相鄰整數的乘積」成立。「k² 與 k 都一定是偶數」不成立：k 可為奇數。；「k(k+1) 與原式相同」不成立：k(k+1)=k²+k。；「因為兩項相減一定是偶數」不成立：奇偶不同時相減可為奇數。",
      "undefinedSymbol": "題幹已給條件為「k 為整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「因式分解並利用相鄰整數。」。",
      "unitConflict": "本題單位審查：無單位；結論對負整數也成立。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；結論對負整數也成立。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：不以除以 k 論證，避免 k=0 問題。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「因式分解並利用相鄰整數。」閱讀後，常見誤讀為「只看平方或相減，沒有完整奇偶論證。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需要把因式資訊連到數論理由。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解奇偶與相鄰整數。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s007-v006：例如 k 奇則 k-1 偶；k 偶則 k 本身偶，涵蓋所有整數。 因此導出「k(k-1) 是兩個相鄰整數的乘積」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「因式分解並利用相鄰整數。」，並特別排除「只看平方或相減，沒有完整奇偶論證。」。難度理由是「需要把因式資訊連到數論理由。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s007-v007",
    "unitId": "u12",
    "skillId": "factoring-application",
    "contentSha256": "fd9e48fdad3ca06139b0c707941b6e8176ffb40bfcf942c20da4e0047e6a6554",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開 20(x-y) 在 x+y=20 的條件下等於原式。",
    "derivedAnswer": "20(x-y)",
    "storedAnswer": "20(x-y)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「若 x+y=20，求 x²-y² 可改寫成哪個式子以便只再知道 x-y 就能計算？」逐一展開或回代；正解「20(x-y)」成立。「400-(x-y)」不成立：沒有平方差依據。；「(x-y)²」不成立：差的平方不是平方差。；「20(x+y)」不成立：會變成 400，漏掉差。",
      "undefinedSymbol": "題幹已給條件為「x、y 為數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「利用平方差與已知和。」。",
      "unitConflict": "本題單位審查：無單位；若 x、y 有同一單位，兩邊皆平方單位。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；若 x、y 有同一單位，兩邊皆平方單位。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：只在給定 x+y=20 條件下等價，題幹已明示。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「利用平方差與已知和。」閱讀後，常見誤讀為「把平方差當差平方。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需要利用條件替換其中一因式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代入條件與平方差。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s007-v007：展開 20(x-y) 在 x+y=20 的條件下等於原式。 因此導出「20(x-y)」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「利用平方差與已知和。」，並特別排除「把平方差當差平方。」。難度理由是「需要利用條件替換其中一因式。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s007-v008",
    "unitId": "u12",
    "skillId": "factoring-application",
    "contentSha256": "9b1e296206ab2b42d36055cd77c6dd8dd3803c742c04ee6cdc8c7090547fe288",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "因此乘積同時含因數 2 與 3，必為 6 的倍數。",
    "derivedAnswer": "n(n+1)(n+2)",
    "storedAnswer": "n(n+1)(n+2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「對正整數 n，n³+3n²+2n 完整因式分解後，最能說明其為 6 的倍數的形式為何？」逐一展開或回代；正解「n(n+1)(n+2)」成立。「n(n+3)+2n」不成立：不是單一乘積，無法直接看 6。；「n²(n+3)+2n」不成立：只是重排原式。；「6(n³+n)」不成立：展開不等於原式。",
      "undefinedSymbol": "題幹已給條件為「n 為正整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分解成三個連續整數乘積。」。",
      "unitConflict": "本題單位審查：無單位；n 正整數，結論精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；n 正整數，結論精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：不使用除法取消 n；n=0 雖也成立，但題幹限定正整數。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分解成三個連續整數乘積。」閱讀後，常見誤讀為「只完成提 n，未繼續分解以顯示連續性。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "多層分解後作整除推理。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會完整分解與連續整數整除。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s007-v008：因此乘積同時含因數 2 與 3，必為 6 的倍數。 因此導出「n(n+1)(n+2)」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分解成三個連續整數乘積。」，並特別排除「只完成提 n，未繼續分解以顯示連續性。」。難度理由是「多層分解後作整除推理。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s007-v009",
    "unitId": "u12",
    "skillId": "factoring-application",
    "contentSha256": "04841046d1478c7a2d2e8127d1831ea0a42d65c5d67667efb672021eb0dd54aa",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "代數結果在原定義域 x≠4 上成立。",
    "derivedAnswer": "x+4",
    "storedAnswer": "x+4",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「已知 x≠4。將 (x²-16)÷(x-4) 先因式分解後，結果為何？」逐一展開或回代；正解「x+4」成立。「x-4」不成立：約去後保留錯誤因式。；「x²+16」不成立：平方差分解錯。；「1」不成立：把兩個不同因式都消去。",
      "undefinedSymbol": "題幹已給條件為「x≠4，避免分母為 0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「用平方差約去合法共同因式。」。",
      "unitConflict": "本題單位審查：無單位；結果精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；結果精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：保留原限制 x≠4，即使化簡式 x+4 在 x=4 有值也不能擴張原題。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「用平方差約去合法共同因式。」閱讀後，常見誤讀為「未檢查分母為 0，或把平方差當平方和。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "涉及分式約分與定義域限制。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會基本代數分式約分；不求方程式根。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s007-v009：代數結果在原定義域 x≠4 上成立。 因此導出「x+4」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「用平方差約去合法共同因式。」，並特別排除「未檢查分母為 0，或把平方差當平方和。」。難度理由是「涉及分式約分與定義域限制。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s007-v010",
    "unitId": "u12",
    "skillId": "factoring-application",
    "contentSha256": "b17ce1d2d28cb153efcfb720a7f5c038fd8f02a5be55051b7f878a5451290832",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "直接平方回查 10201-9801=400。",
    "derivedAnswer": "400 張",
    "storedAnswer": "400 張",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「一家印刷廠兩批海報數量差為 101²-99² 張。用因式分解計算，差多少張？」逐一展開或回代；正解「400 張」成立。「4 張」不成立：只算差的平方。；「200 張」不成立：只算兩數和。；「202 張」不成立：把和與差相加。",
      "undefinedSymbol": "題幹已給條件為「數量為整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「用平方差快速取得差值。」。",
      "unitConflict": "本題單位審查：答案單位張；整數精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；答案單位張；整數精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：第一批較多，差值應為正。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「用平方差快速取得差值。」閱讀後，常見誤讀為「把數量差誤當邊長差。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "情境要求避免大數平方並保留單位。",
    "literacyContextNecessity": "兩批數量以平方模型給出，平方差是計算差值的必要結構。",
    "prerequisiteCheck": "需會平方差。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s007-v010：直接平方回查 10201-9801=400。 因此導出「400 張」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「用平方差快速取得差值。」，並特別排除「把數量差誤當邊長差。」。難度理由是「情境要求避免大數平方並保留單位。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s007-v011",
    "unitId": "u12",
    "skillId": "factoring-application",
    "contentSha256": "45b7f2251244b0204bcd839d3721536fcd44118174aa3c1cb3a9ad359926c934",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "乘回得到總座位數。",
    "derivedAnswer": "排數 n 與每排 n+5 席",
    "storedAnswer": "排數 n 與每排 n+5 席",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某活動有 n 排座位，每排 n+5 席，總座位數可寫成 n²+5n。乘積形式最直接顯示哪兩個量？」逐一展開或回代；正解「排數 n 與每排 n+5 席」成立。「總排數 n² 與額外 5 排」不成立：n² 是乘積項，不是排數。；「每排 n 席與總共 5 席」不成立：漏掉 n+5。；「兩個面積邊長 n² 與 5n」不成立：情境是座位計數。",
      "undefinedSymbol": "題幹已給條件為「n 為正整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「解讀 n(n+5)。」。",
      "unitConflict": "本題單位審查：兩因式皆為無單位計數，乘積為席；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；兩因式皆為無單位計數，乘積為席；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：n 正整數，排數與席數皆正。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「解讀 n(n+5)。」閱讀後，常見誤讀為「只做形式分解，未解讀因式。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "情境意義是題目核心。",
    "literacyContextNecessity": "排數與每排席數無法從展開式直接看出，因式分解恢復安排結構。",
    "prerequisiteCheck": "需知道乘法計數原理。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s007-v011：乘回得到總座位數。 因此導出「排數 n 與每排 n+5 席」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「解讀 n(n+5)。」，並特別排除「只做形式分解，未解讀因式。」。難度理由是「情境意義是題目核心。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s007-v012",
    "unitId": "u12",
    "skillId": "factoring-application",
    "contentSha256": "3886def6cedd5d8e5da30271af649e01fff2dd15a3de153ff60325d2189445e8",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "乘回即原處理量，分組均為整數。",
    "derivedAnswer": "處理量可分成 m 組，每組 m+7 筆",
    "storedAnswer": "處理量可分成 m 組，每組 m+7 筆",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「資料中心每分鐘處理量為 m²+7m 筆。若 m 為正整數，哪個敘述可由因式分解直接得到？」逐一展開或回代；正解「處理量可分成 m 組，每組 m+7 筆」成立。「處理量一定是 7 的倍數」不成立：m² 不一定被 7 整除。；「每組一定有 7 筆」不成立：另一因子是 m+7。；「總量一定是平方數」不成立：m(m+7) 一般不是平方。",
      "undefinedSymbol": "題幹已給條件為「m>0 且為整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「解讀 m(m+7)。」。",
      "unitConflict": "本題單位審查：單位筆；m 與 m+7 是計數，無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；單位筆；m 與 m+7 是計數，無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：m>0 排除零組。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「解讀 m(m+7)。」閱讀後，常見誤讀為「看到常數 7 就宣稱 7 的倍數。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需從代數乘積作可行整數分組。",
    "literacyContextNecessity": "資料分組必須是整數，題幹 m 正整數使因式的情境解讀成立。",
    "prerequisiteCheck": "需理解整數分組。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s007-v012：乘回即原處理量，分組均為整數。 因此導出「處理量可分成 m 組，每組 m+7 筆」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「解讀 m(m+7)。」，並特別排除「看到常數 7 就宣稱 7 的倍數。」。難度理由是「需從代數乘積作可行整數分組。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
