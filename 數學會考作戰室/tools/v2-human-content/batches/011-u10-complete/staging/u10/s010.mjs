// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s010-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-formulas",
    "skillId": "square-difference-formula",
    "lockedTitle": "差的平方公式",
    "title": "差的平方公式：負號只使中間項為負",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能由 (a-b)(a-b) 推導公式。",
      "能避免把 b² 誤寫成負。",
      "能用公式計算與解釋邊長縮減的面積。"
    ],
    "prerequisites": [
      "square-sum-formula"
    ],
    "prerequisiteBridge": "先備技能 square-sum-formula 已建立下一步所需概念；本節專注於理解並運用 (a-b)²=a²-2ab+b²。",
    "glossary": [
      {
        "term": "差的平方",
        "definition": "兩數差或兩式差的整體平方。"
      },
      {
        "term": "負中間項",
        "definition": "兩個交叉乘積皆為 -ab，合為 -2ab。"
      }
    ],
    "notation": [
      {
        "symbol": "(a−b)²",
        "meaning": "a²−2ab+b²。"
      }
    ],
    "conceptNarrative": [
      "平方表示相同的兩個因式相乘：(a-b)(a-b)。",
      "交叉項是 -ab 與 -ab，因此合成 -2ab。",
      "最後一項 (-b)(-b)=+b²，所以尾項仍為正。",
      "此公式適合計算略小於整數基準的平方。",
      "差的平方(a−b)²是兩個完全相同的二項式相乘，不是a²−b²。展開時首項為a²，兩個交叉乘積−ab合成−2ab，尾項則因(−b)(−b)成為＋b²。反向辨認時要同時核對首尾是否為平方、中間項是否恰為負的兩倍乘積；在面積情境還需先把縮短後的邊長寫對，並檢查長度為正。"
    ],
    "formalDefinitions": [
      {
        "name": "差的平方公式",
        "statement": "(a-b)²=a²-2ab+b²。"
      }
    ],
    "formulas": [
      {
        "formula": "(a-b)²=a²-2ab+b²",
        "conditions": [
          "a、b 可為數或代數式"
        ],
        "meaning": "首尾平方為正，中間項為負。"
      }
    ],
    "nonApplicableCases": [
      "不能寫成 a²-b²；那是平方差而非差的平方。",
      "不能把 b² 寫成 -b²。",
      "若 b 本身為負數，要先重新判讀括號結構。",
      "三項平方不直接套用。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "辨認 a 與被減的 b。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a-b)²=a²-2ab+b²」。"
      },
      {
        "step": 2,
        "instruction": "寫 a²。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a-b)²=a²-2ab+b²」。"
      },
      {
        "step": 3,
        "instruction": "寫 -2ab。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a-b)²=a²-2ab+b²」。"
      },
      {
        "step": 4,
        "instruction": "寫 +b²。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a-b)²=a²-2ab+b²」。"
      },
      {
        "step": 5,
        "instruction": "展開內部式後再合併。",
        "check": "完成此步後，確認內容仍符合「理解並運用 (a-b)²=a²-2ab+b²」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "展開(x−4)²。",
        "solutionSteps": [
          "令a＝x、b＝4。",
          "計算a²−2ab＋b²＝x²−2·x·4＋4²。",
          "化簡得x²−8x＋16。"
        ],
        "answer": "x²−8x＋16。",
        "why": "平方作用在整個差上，所以不能只平方x與4；兩個交叉乘積合成−8x，而尾項由(−4)(−4)得到正16，三項缺一不可，也能逐項對回兩個相同因式。"
      },
      {
        "exampleId": "L2",
        "prompt": "展開(3x−2)²。",
        "solutionSteps": [
          "辨認a＝3x、b＝2。",
          "首項(3x)²＝9x²，中間項−2·3x·2＝−12x。",
          "加上尾項2²＝4，得9x²−12x＋4。"
        ],
        "answer": "9x²−12x＋4。",
        "why": "公式中的a是整體3x，因此係數3也要平方；中間項同時含兩倍、3x與2，逐項計算能避免把它誤寫成−6x，代零亦可檢查常數四。"
      },
      {
        "exampleId": "L3",
        "prompt": "使用差的平方計算98²。",
        "solutionSteps": [
          "把98寫成100−2。",
          "套用(100−2)²＝100²−2·100·2＋2²。",
          "計算10000−400＋4＝9604。"
        ],
        "answer": "9604。",
        "why": "選100作鄰近整數基準可把乘法轉成三個容易心算的量；最後加回2²很重要，若只算10000−400會少4，結果也應略低於一萬。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "寫成 a²-b²",
        "why": "把「差的平方」與「平方差」混淆",
        "correction": "看清楚平方在整個括號外。"
      },
      {
        "mistake": "尾項寫 -b²",
        "why": "忽略負負得正",
        "correction": "(-b)²=+b²。"
      },
      {
        "mistake": "中間係數漏乘 2",
        "why": "只寫一個交叉乘積",
        "correction": "展開兩因式核對。"
      },
      {
        "mistake": "由a²與b²就直接選公式，不檢查中間項",
        "why": "差的平方與平方差都有首尾平方，但結構與項數不同",
        "correction": "先看平方是否包住整個括號，再驗算中間項是否為−2ab。"
      }
    ],
    "selfCheck": [
      "我是否能由 (a-b)(a-b) 推導公式？",
      "我是否能避免把 b² 誤寫成負？",
      "我是否能用公式計算與解釋邊長縮減的面積？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "差的平方為 a²-2ab+b²。",
      "尾平方仍為正。",
      "與平方差公式的結構不同。",
      "可用接近基準數的心算檢驗。"
    ],
    "connections": {
      "previous": "上一技能 和的平方公式 提供本節所需工具。",
      "next": [
        "下一節處理一和一差的共軛因式，中間項會完全抵消。"
      ]
    },
    "figureReferences": [
      "u10-fig-square-difference-area"
    ],
    "accessibility": {
      "figureAltTextsRequired": true,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s010-v001",
        "u10-s010-v002",
        "u10-s010-v003",
        "u10-s010-v004",
        "u10-s010-v005",
        "u10-s010-v006",
        "u10-s010-v007",
        "u10-s010-v008",
        "u10-s010-v009",
        "u10-s010-v010",
        "u10-s010-v011",
        "u10-s010-v012"
      ],
      "constructedResponseIds": [
        "u10-s010-cr001",
        "u10-s010-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「差的平方公式：負號只使中間項為負」：定義、3 個例題、錯誤推理與下一技能銜接均針對 square-difference-formula；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "ec43a1113efef5805e9be4dacbf1e53d09c4db90427527c8ca91582bdc128d66"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s010-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "學生把 (x−5)² 寫成 x²−25。下列哪一項最精確指出他的錯誤並給出正確結果？",
      "givenConditions": [
        "(x−5)²=(x−5)(x−5)"
      ],
      "target": "診斷差的平方中遺漏的中間項",
      "choices": [
        "只需把25改成5，結果為x²−5",
        "漏掉−10x，正確為x²−10x+25",
        "常數符號錯，正確為x²+25",
        "中間項應為+10x，正確為x²+10x+25"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "(x−5)(x−5)=x²−5x−5x+25=x²−10x+25；原式漏掉兩個−5x形成的中間項。",
        "derivedChoice": "漏掉−10x，正確為x²−10x+25",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "把平方改寫成兩個相同因式，再完成四個乘積。 由(x−5)(x−5)逐項相乘，兩個交叉項都是−5x，合併成−10x；尾項則是正25。因此原式不是平方差，而是漏了中間項，完整結果為x²−10x＋25。",
      "steps": [
        "改寫成(x−5)(x−5)。",
        "完成四個乘積。",
        "合併−5x−5x為−10x。",
        "列出x²、−5x、−5x、25四個乘積。",
        "合併同類項並用x＝0代入，確認常數項仍為25。"
      ],
      "optionAnalysis": [
        {
          "choice": "只需把25改成5，結果為x²−5",
          "truth": false,
          "reason": "平方常數仍是25。"
        },
        {
          "choice": "漏掉−10x，正確為x²−10x+25",
          "truth": true,
          "reason": "漏掉−10x，正確式完整。"
        },
        {
          "choice": "常數符號錯，正確為x²+25",
          "truth": false,
          "reason": "除了常數外還缺中間項。"
        },
        {
          "choice": "中間項應為+10x，正確為x²+10x+25",
          "truth": false,
          "reason": "交叉項應為負，不是正。"
        }
      ],
      "misconceptionTarget": "把(a−b)²誤當a²−b²。 也可能只看首尾平方就誤認公式相同，沒有檢查兩個交叉乘積。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "每選項同時含錯誤說明與結果，只有一項完整。",
      "boundaryAudit": "每選項同時含錯誤說明與結果，只有一項完整。",
      "difficultyReason": "基礎：診斷差的平方中遺漏的中間項。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a213a22ac7112b26d188ed2f0fdf00249c6956fa8fa9d63fb85aa25b82b63577"
    },
    {
      "questionId": "u10-s010-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "下列何者等於 (a-b)²？",
      "givenConditions": [],
      "target": "辨認差平方公式",
      "choices": [
        "a²-2ab+b²",
        "a²-b²",
        "a²-ab-b²",
        "a²+2ab+b²"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "(a-b)(a-b)=a²-2ab+b²。",
        "derivedChoice": "a²-2ab+b²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩個交叉項為負，尾尾乘積為正。 (a−b)²表示(a−b)(a−b)，展開為a²−ab−ab＋b²；兩個交叉項合為−2ab，負數相乘使尾項為正，所以結果是a²−2ab＋b²。這個三項結構也能區別只有兩項的平方差公式。",
      "steps": [
        "(a-b)(a-b)=a²-2ab+b²。",
        "把平方改寫為兩個相同因式並逐項相乘。",
        "合併−ab與−ab，再確認尾項(−b)(−b)為正。"
      ],
      "optionAnalysis": [
        {
          "choice": "a²-2ab+b²",
          "truth": true,
          "reason": "公式正確。"
        },
        {
          "choice": "a²-b²",
          "truth": false,
          "reason": "漏中間項且尾號錯。"
        },
        {
          "choice": "a²-ab-b²",
          "truth": false,
          "reason": "中間係數與尾號錯。"
        },
        {
          "choice": "a²+2ab+b²",
          "truth": false,
          "reason": "這是和平方。"
        }
      ],
      "misconceptionTarget": "差平方的尾項符號錯 或把括號差的平方誤當兩個平方相減，因而完全漏掉中間項。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認差平方公式」且四個選項以同一表示層級作答；逐項重算後只有「a²-2ab+b²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：辨認差平方公式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "43c98352a7e74cfbc848ed38be95d98675f59cb9d5658ddf88a6ff772df5a99a"
    },
    {
      "questionId": "u10-s010-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (2x-3)²。",
      "givenConditions": [],
      "target": "含係數差平方",
      "choices": [
        "4x²-6x+9",
        "2x²-12x+9",
        "4x²-12x+9",
        "4x²-9"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "(2x)²-2(2x)(3)+3²=4x²-12x+9。",
        "derivedChoice": "4x²-12x+9",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "係數平方、中間兩倍乘積與尾平方都要計算。 令a＝2x、b＝3，套用a²−2ab＋b²：首項(2x)²＝4x²，中間項−2(2x)(3)＝−12x，尾項3²＝9，故為4x²−12x＋9。將x代成零時常數仍為九，可再排除尾項錯誤的選項。",
      "steps": [
        "(2x)²-2(2x)(3)+3²=4x²-12x+9。",
        "辨認公式中的整體a是2x、b是3。",
        "分別算三項後依正負號組合，並以x＝0檢查尾項9。"
      ],
      "optionAnalysis": [
        {
          "choice": "4x²-6x+9",
          "truth": false,
          "reason": "中間項少一倍。"
        },
        {
          "choice": "2x²-12x+9",
          "truth": false,
          "reason": "首項係數未平方。"
        },
        {
          "choice": "4x²-12x+9",
          "truth": true,
          "reason": "係數平方、中間兩倍乘積與尾平方都要計算。"
        },
        {
          "choice": "4x²-9",
          "truth": false,
          "reason": "誤用平方差。"
        }
      ],
      "misconceptionTarget": "係數平方與中間項錯 或只把x平方而漏平方係數2，也可能把兩倍乘積誤寫成−6x。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含係數差平方」且四個選項以同一表示層級作答；逐項重算後只有「4x²-12x+9」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：含係數差平方，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0562ad2aa39db0ae1f054710ecde0d3944af751e5839af1c066dd69f57c4a1aa"
    },
    {
      "questionId": "u10-s010-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (3y-4)²。",
      "givenConditions": [],
      "target": "標準差平方",
      "choices": [
        "9y²-12y+16",
        "6y²-24y+16",
        "9y²+24y+16",
        "9y²-24y+16"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "(3y)²-2(3y)(4)+4²=9y²-24y+16。",
        "derivedChoice": "9y²-24y+16",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "三部分符號依差平方公式。 把3y視為a、4視為b，(a−b)²＝a²−2ab＋b²；三項依序是9y²、−24y、16，所以唯一完整展開為9y²−24y＋16。首項與尾項均為平方而非原數，這能同步檢查兩端係數。",
      "steps": [
        "(3y)²-2(3y)(4)+4²=9y²-24y+16。",
        "計算(3y)²＝9y²與4²＝16。",
        "計算兩倍乘積2×3y×4＝24y並保留負號。"
      ],
      "optionAnalysis": [
        {
          "choice": "9y²-12y+16",
          "truth": false,
          "reason": "中間項少一倍。"
        },
        {
          "choice": "6y²-24y+16",
          "truth": false,
          "reason": "首項係數錯。"
        },
        {
          "choice": "9y²+24y+16",
          "truth": false,
          "reason": "中間項符號錯。"
        },
        {
          "choice": "9y²-24y+16",
          "truth": true,
          "reason": "三部分符號依差平方公式。"
        }
      ],
      "misconceptionTarget": "中間項係數或符號錯 或把中間項只算一次3y×4而得−12y，或把差號帶到尾平方。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「標準差平方」且四個選項以同一表示層級作答；逐項重算後只有「9y²-24y+16」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：標準差平方，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "71eea76f1ee481adcf9670c2e0fc1e987bd1eec0b26b7533b646483e8ee750f9"
    },
    {
      "questionId": "u10-s010-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (x-k)²=x²-16x+64，則 k 為何？",
      "givenConditions": [],
      "target": "由展開式反求尾數",
      "choices": [
        "8",
        "16",
        "-8",
        "4"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "-2k=-16 得 k=8，且 k²=64。",
        "derivedChoice": "8",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "中間項與尾平方交叉驗證。 (x−k)²＝x²−2kx＋k²。比較中間項得−2k＝−16，所以k＝8；再以尾項k²＝64驗算，8²確為64，兩個條件共同鎖定答案。若取負八，中間項會變成正十六x，立即與題式矛盾。",
      "steps": [
        "-2k=-16 得 k=8，且 k²=64。",
        "比較x的一次項係數，解−2k＝−16。",
        "用常數項64反向檢查k²，並排除符號不合的負值。"
      ],
      "optionAnalysis": [
        {
          "choice": "8",
          "truth": true,
          "reason": "8 正確。"
        },
        {
          "choice": "16",
          "truth": false,
          "reason": "把 2k 當 k。"
        },
        {
          "choice": "-8",
          "truth": false,
          "reason": "符號判讀錯。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "中間項只 -8x。"
        }
      ],
      "misconceptionTarget": "反向比較中間項係數錯 或只由k²＝64取±8，沒有使用中間項−16x排除k＝−8。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由展開式反求尾數」且四個選項以同一表示層級作答；逐項重算後只有「8」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：由展開式反求尾數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2e4ddd8d1dfc46e261bafe4e63941ec5385a3eefc578d63ac915066b7a84779d"
    },
    {
      "questionId": "u10-s010-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "將 (100-3)² 展開為 100²-2·100·3+3²，其中中間項的值為何？",
      "givenConditions": [],
      "target": "辨認差平方中間項",
      "choices": [
        "600",
        "-300",
        "-600",
        "300"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "中間項為 -2×100×3=-600。",
        "derivedChoice": "-600",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "差的平方中間項是負的兩倍乘積。 差的平方中間項是−2ab。此處a＝100、b＝3，所以−2×100×3＝−600；題目問的是中間項本身，必須連同負號回答。它會使九十七的平方低於一萬，方向也與數值大小相符。",
      "steps": [
        "中間項為 -2×100×3=-600。",
        "從100²−2·100·3＋3²鎖定中間一項。",
        "計算係數2×100×3＝600，再加回原有負號。"
      ],
      "optionAnalysis": [
        {
          "choice": "600",
          "truth": false,
          "reason": "符號錯誤。"
        },
        {
          "choice": "-300",
          "truth": false,
          "reason": "漏乘 2。"
        },
        {
          "choice": "-600",
          "truth": true,
          "reason": "-600 正確。"
        },
        {
          "choice": "300",
          "truth": false,
          "reason": "漏乘 2 且符號錯。"
        }
      ],
      "misconceptionTarget": "差平方中間項的符號或倍數錯 或只算100×3得到300，漏掉公式中的兩倍與差平方的負號。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認差平方中間項」且四個選項以同一表示層級作答；逐項重算後只有「-600」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：辨認差平方中間項，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2cbfc5e5063a0e47147699040e726bf8b2f5eaad0d7c2551541faf95f0b8cac7"
    },
    {
      "questionId": "u10-s010-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (x-1)²-(x-3)²。",
      "givenConditions": [],
      "target": "平方式相減",
      "choices": [
        "-4x+8",
        "2x²-8x+10",
        "4x+8",
        "4x-8"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "第一式 x²-2x+1，第二式 x²-6x+9；相減得 4x-8。",
        "derivedChoice": "4x-8",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "減去第二個平方後二次項抵消。 展開得(x²−2x＋1)−(x²−6x＋9)。外層減號要分配到第二括號每一項，二次項抵消後為−2x＋6x＋1−9＝4x−8。代入x＝三時原式為四、答案式也為四，可作快速驗算。",
      "steps": [
        "第一式 x²-2x+1，第二式 x²-6x+9。",
        "相減得 4x-8。",
        "先分別寫出兩個差平方的三項展開。",
        "去括號時整體變號，再按二次、一次、常數項合併。"
      ],
      "optionAnalysis": [
        {
          "choice": "-4x+8",
          "truth": false,
          "reason": "相減方向顛倒。"
        },
        {
          "choice": "2x²-8x+10",
          "truth": false,
          "reason": "把兩式相加。"
        },
        {
          "choice": "4x+8",
          "truth": false,
          "reason": "常數符號錯。"
        },
        {
          "choice": "4x-8",
          "truth": true,
          "reason": "4x-8 正確。"
        }
      ],
      "misconceptionTarget": "兩個差平方相減時外層負號錯 或只改第二式首項符號，沒有把−6x與＋9一起變號後再合併。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「平方式相減」且四個選項以同一表示層級作答；逐項重算後只有「4x-8」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：平方式相減，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bce8914dcffab5f44e1cb4663efdf8a30205aaee72b68344944609c9474be05f"
    },
    {
      "questionId": "u10-s010-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 (ax-1)²=4x²-4x+1，則 a 為何？",
      "givenConditions": [],
      "target": "由展開式判係數符號",
      "choices": [
        "-2",
        "2",
        "4",
        "±2"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "a²=4，但中間項 -2a=-4，得 a=2。",
        "derivedChoice": "2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "中間項排除 a=-2。 (ax−1)²＝a²x²−2ax＋1。由a²＝4只能得a＝±2，但一次項要求−2a＝−4，因此a＝2；a＝−2會產生＋4x，不符合原式。首尾比較不足以定符號，一次項才提供唯一判準。",
      "steps": [
        "a²=4，但中間項 -2a=-4，得 a=2。",
        "先由x²係數列a²＝4，保留兩個候選。",
        "再比較x係數−2a＝−4，排除a＝−2並代回驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "-2",
          "truth": false,
          "reason": "會得到 +4x。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "a=2 正確。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "首項 16x²。"
        },
        {
          "choice": "±2",
          "truth": false,
          "reason": "±2 未考慮中間項符號。"
        }
      ],
      "misconceptionTarget": "只由 a² 判斷而忽略中間項 或只比較二次項係數得到±2，沒有再用一次項的符號判定唯一值。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由展開式判係數符號」且四個選項以同一表示層級作答；逐項重算後只有「2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由展開式判係數符號，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6181e70393627aaa14d3302357a6dff7bb5e8bb7091974bce7c1ed2990952516"
    },
    {
      "questionId": "u10-s010-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "將 (x-y-2)² 視為 (A-2)²，A 應為何？",
      "givenConditions": [],
      "target": "差平方的整體辨認",
      "choices": [
        "x",
        "x-y",
        "y",
        "x+y"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "原式可重組為 [(x-y)-2]²，所以 A=x-y。",
        "derivedChoice": "x-y",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "整體 x-y 作為公式第一部分。 要把(x−y−2)²寫成(A−2)²，減去2以前的整體就是x−y，因此A＝x−y。代回(A−2)可完全還原x−y−2，其他選項都改變原括號。這種代換必須保留原有負號與運算順序，不能只看單一字母。",
      "steps": [
        "原式可重組為 [(x-y)-2]²，所以 A=x-y。",
        "把原括號依最後的−2切成兩個部分。",
        "令A＝x−y並代回，逐字核對括號內式完全相同。"
      ],
      "optionAnalysis": [
        {
          "choice": "x",
          "truth": false,
          "reason": "漏 y。"
        },
        {
          "choice": "x-y",
          "truth": true,
          "reason": "x-y 正確。"
        },
        {
          "choice": "y",
          "truth": false,
          "reason": "漏 x。"
        },
        {
          "choice": "x+y",
          "truth": false,
          "reason": "改變原式符號。"
        }
      ],
      "misconceptionTarget": "整體代換時漏負號 或只取最前面的x作A，忽略−y也屬於被整體平方的第一部分。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「差平方的整體辨認」且四個選項以同一表示層級作答；逐項重算後只有「x-y」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：差平方的整體辨認，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ddb4f4bf412aeb4502f25b9f5f4dfdb1c7a6cdcf3ff524b58441ed82ea2a0b97"
    },
    {
      "questionId": "u10-s010-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "正方形原邊長 x 公尺，每邊縮短 2 公尺。新面積為何？",
      "givenConditions": [],
      "target": "縮短後的新面積",
      "choices": [
        "x²-4 平方公尺",
        "x²-2x+4 平方公尺",
        "x²+4x+4 平方公尺",
        "x²-4x+4 平方公尺"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "新邊長 x-2，面積 (x-2)²=x²-4x+4。",
        "derivedChoice": "x²-4x+4 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "縮短邊長後整體平方。 每邊由x公尺縮短2公尺，新邊長是x−2而非面積直接減2。新面積為(x−2)²＝x²−4x＋4平方公尺，且實際情境需x＞2。中間項反映水平與垂直兩方向同時縮短造成的面積變化。",
      "steps": [
        "新邊長 x-2，面積 (x-2)²=x²-4x+4。",
        "先由情境寫出新邊長x−2。",
        "再將新邊長平方並用差的平方展開，保留平方公尺單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-4 平方公尺",
          "truth": false,
          "reason": "誤用平方差。"
        },
        {
          "choice": "x²-2x+4 平方公尺",
          "truth": false,
          "reason": "中間項少一倍。"
        },
        {
          "choice": "x²+4x+4 平方公尺",
          "truth": false,
          "reason": "符號反向。"
        },
        {
          "choice": "x²-4x+4 平方公尺",
          "truth": true,
          "reason": "縮短邊長後整體平方。"
        }
      ],
      "misconceptionTarget": "把邊長縮短直接轉成面積減 4 或把邊長少2線性套到面積，寫成x²−2或只減去固定面積4。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「縮短後的新面積」且四個選項以同一表示層級作答；逐項重算後只有「x²-4x+4 平方公尺」成立。",
      "boundaryAudit": "實際正方形要求 x>2。",
      "difficultyReason": "素養：縮短後的新面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "縮短的是每一條邊，必須先形成新邊長 x-2 再平方。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2b54fdfba37453b7dcbdeb495875020b62c8dc3f2898641761fd53bb5a8034ab"
    },
    {
      "questionId": "u10-s010-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一塊邊長 40 公尺的正方形土地，四邊向內各縮 1 公尺形成新正方形，新面積為何？",
      "givenConditions": [],
      "target": "內縮邊界的面積",
      "choices": [
        "1521 平方公尺",
        "1600 平方公尺",
        "1444 平方公尺",
        "1681 平方公尺"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "四周各縮 1 使邊長減少 2，成為 38 公尺；38²=1444。",
        "derivedChoice": "1444 平方公尺",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "「兩側各 1 公尺」使整條邊減少 2，而不是 1。 四邊向內各縮1公尺時，水平邊左右各少1，垂直邊上下各少1，所以新正方形邊長為40−2＝38公尺，面積38²＝1444平方公尺。",
      "steps": [
        "四周各縮 1 使邊長減少 2，成為 38 公尺。",
        "38²=1444。",
        "沿任一方向計算兩側各少1，得到新邊長38。",
        "算38²＝(40−2)²＝1600−160＋4＝1444。"
      ],
      "optionAnalysis": [
        {
          "choice": "1521 平方公尺",
          "truth": false,
          "reason": "這是 39²，只縮一側。"
        },
        {
          "choice": "1600 平方公尺",
          "truth": false,
          "reason": "原面積未縮。"
        },
        {
          "choice": "1444 平方公尺",
          "truth": true,
          "reason": "1444 正確。"
        },
        {
          "choice": "1681 平方公尺",
          "truth": false,
          "reason": "這是 41²。"
        }
      ],
      "misconceptionTarget": "把四周內縮 1 誤解為邊長只減 1 或把『向內1公尺』只扣一次，誤用39²；也可能仍以40作新邊長。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "公尺×公尺=平方公尺。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「內縮邊界的面積」且四個選項以同一表示層級作答；逐項重算後只有「1444 平方公尺」成立。",
      "boundaryAudit": "內縮後邊長 38>0。",
      "difficultyReason": "素養：內縮邊界的面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "幾何語句「四邊向內各縮 1」決定新邊長為 40-2，而非 39。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s010-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d05b4fb01ddcd45902140c8567233602903410abace250f42189d113052f20cf"
    },
    {
      "questionId": "u10-s010-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "圖示正方形原邊長 x，右側與下側各切去寬 2 的長條後，中央剩餘正方形面積為何？",
      "givenConditions": [],
      "target": "用切割圖理解差平方",
      "choices": [
        "x²-4x+4",
        "x²-4",
        "x²-2x+4",
        "x²+4x+4"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "中央正方形邊長為 x-2，因此面積 (x-2)²=x²-4x+4。",
        "derivedChoice": "x²-4x+4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "圖示切除位置確認兩方向各減 2。 圖中右側與下側各標寬2，中央剩餘區在水平、垂直方向都由x減為x−2，因此是邊長x−2的正方形，面積為(x−2)²＝x²−4x＋4。",
      "steps": [
        "中央正方形邊長為 x-2，因此面積 (x-2)²=x²-4x+4。",
        "依圖分別讀出中央區的水平邊與垂直邊皆為x−2。",
        "將(x−2)平方展開，並以x＞2確認剩餘邊長為正。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-4x+4",
          "truth": true,
          "reason": "圖示切除位置確認兩方向各減 2。"
        },
        {
          "choice": "x²-4",
          "truth": false,
          "reason": "誤用平方差。"
        },
        {
          "choice": "x²-2x+4",
          "truth": false,
          "reason": "中間項少一倍。"
        },
        {
          "choice": "x²+4x+4",
          "truth": false,
          "reason": "切除卻使面積增加。"
        }
      ],
      "misconceptionTarget": "由圖讀邊長減量錯 或把兩個方向各減2相加成邊長x−4，或只對面積扣固定的4。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "邊長為抽象長度單位，面積為平方單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「用切割圖理解差平方」且四個選項以同一表示層級作答；逐項重算後只有「x²-4x+4」成立。",
      "boundaryAudit": "x>2。",
      "difficultyReason": "素養：用切割圖理解差平方，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "必須讀取圖中兩個寬 2 的切除方向，才能判定中央邊長與面積。",
      "visualMode": "svg",
      "figureId": "u10-fig-square-difference-area",
      "drawingSpecId": "u10-fig-square-difference-area",
      "semanticReviewRef": "u10-s010-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4bb5b9f8d15bc2ba76d006c52d75badecb960e30312c472ec79f90eebce2a571"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s010-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (4x-3)²，並指出尾項為何仍是正數。",
      "requiredWork": [
        "套用差平方。",
        "解釋 (-3)×(-3)。"
      ],
      "standardSolution": [
        "(4x-3)²=16x²-24x+9。",
        "尾項來自 (-3)(-3)=+9，因此為正。",
        "完整逐項相乘可寫成(4x)(4x)＋(4x)(−3)＋(−3)(4x)＋(−3)(−3)，合併後為16x²−24x＋9；最後一項為正是因負負得正。兩個交叉項各為負十二x，合計負二十四x，三項係數與符號都可由四個乘積逐一核對。"
      ],
      "alternativeMethods": [
        "可展開 (4x-3)(4x-3) 顯示兩交叉項與尾項。"
      ],
      "reasoningSteps": [
        "(4x-3)²=16x²-24x+9。",
        "尾項來自 (-3)(-3)=+9，因此為正。",
        "分別檢查首項平方、中間兩倍乘積與尾項平方的係數及符號。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "結果及尾項符號說明全對。"
        },
        {
          "score": 2,
          "criteria": "結果正確但無符號說明。"
        },
        {
          "score": 1,
          "criteria": "首項或中間項正確但尾項負號錯。"
        },
        {
          "score": 0,
          "criteria": "誤寫 16x²-9 且無方法。"
        }
      ],
      "partialCreditRules": [
        "若只漏中間係數 2，給 1 分。"
      ],
      "followThroughPolicy": "尾項若早期寫 -9，但能正確說明負負得正自我修正，不扣分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫結果最高 2 分。",
      "commonErrorTargets": [
        "把(4x−3)²誤寫成16x²−9，混淆差的平方與平方差並漏掉中間項。",
        "把尾項寫成−9，沒有指出它來自兩個負因數(−3)(−3)的乘積。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立展開得 16x²-12x-12x+9。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4fea58175e8fd6e49998f9f59fad2e6988e0e1facb69afa951f2d2c5ac8466c5"
    },
    {
      "questionId": "u10-s010-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 199²，要求使用差的平方公式並展示每一項。",
      "requiredWork": [
        "選擇基準 200。",
        "寫出三項。"
      ],
      "standardSolution": [
        "199²=(200-1)²。",
        "=200²-2·200·1+1²=40000-400+1=39601。",
        "以200為基準，199＝200−1，所以199²＝(200−1)²＝200²−2·200·1＋1²＝40000−400＋1＝39601，三項均已展示。結果應略小於四萬，且個位是一，與一百九十九乘自身的末位相符，能排除少加尾項的錯誤。"
      ],
      "alternativeMethods": [
        "可用直式驗算，但主要解法必須呈現差平方。"
      ],
      "reasoningSteps": [
        "199²=(200-1)²。",
        "=200²-2·200·1+1²=40000-400+1=39601。",
        "用199×199的末兩位或(200−1)×199快速驗算39601，確認數值沒有少減或多減。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "公式過程與 39601 正確。"
        },
        {
          "score": 2,
          "criteria": "方法正確但單一算術錯。"
        },
        {
          "score": 1,
          "criteria": "只寫 (200-1)² 或漏中間項。"
        },
        {
          "score": 0,
          "criteria": "無合理過程。"
        }
      ],
      "partialCreditRules": [
        "基準不同但仍正確使用差平方可接受。"
      ],
      "followThroughPolicy": "若 40000-400 算錯，後續一致可給 2 分。",
      "unitAndNotationRules": "純數無單位。",
      "answerOnlyPolicy": "只寫 39601，最高 1 分，因題目指定方法。",
      "commonErrorTargets": [
        "把199²改成200²−1²，誤用平方差而漏掉−2·200·1。",
        "中間項算成−200或＋400，沒有同時保留兩倍乘積與負號。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立計算 199×199=39601。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1d953a9a036d476640679a62b6b4d23dfb02246e30d7054b288db439db75e31b"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s010-v001-review",
      "questionId": "u10-s010-v001",
      "questionContentSha256": "a213a22ac7112b26d188ed2f0fdf00249c6956fa8fa9d63fb85aa25b82b63577",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(x−5)(x−5)=x²−5x−5x+25=x²−10x+25；原式漏掉兩個−5x形成的中間項。",
      "derivedAnswer": "漏掉−10x，正確為x²−10x+25",
      "storedAnswer": "漏掉−10x，正確為x²−10x+25",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項代回後只有「漏掉−10x，正確為x²−10x+25」成立；其他三項分別因：平方常數仍是25。；除了常數外還缺中間項。；交叉項應為負，不是正。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "每選項同時含錯誤說明與結果，只有一項完整。",
        "alternateReading": "題幹明確要求「診斷差的平方中遺漏的中間項」，沒有第二種合理所求。"
      },
      "difficultyReason": "基礎：診斷差的平方中遺漏的中間項。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "u10-s010-v001 中央修訂後獨立重算：(x−5)(x−5)=x²−5x−5x+25=x²−10x+25；原式漏掉兩個−5x形成的中間項。 四個選項逐項核對，唯一正解為「漏掉−10x，正確為x²−10x+25」；其餘選項排除理由為：平方常數仍是25。；除了常數外還缺中間項。；交叉項應為負，不是正。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "bb00246000807d10ae69716d031e046c7e5ec1889fb1e26bb986d701ff987b85"
    },
    {
      "reviewId": "u10-s010-v002-review",
      "questionId": "u10-s010-v002",
      "questionContentSha256": "43c98352a7e74cfbc848ed38be95d98675f59cb9d5658ddf88a6ff772df5a99a",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(a-b)(a-b)=a²-2ab+b²。",
      "derivedAnswer": "a²-2ab+b²",
      "storedAnswer": "a²-2ab+b²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：a²-2ab+b²：公式正確。；a²-b²：漏中間項且尾號錯。；a²-ab-b²：中間係數與尾號錯。；a²+2ab+b²：這是和平方。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「差平方的尾項符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：辨認差平方公式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列何者等於 (a-b)²？」獨立重算：(a-b)(a-b)=a²-2ab+b²。 正解「a²-2ab+b²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "b3e44be6ce36f1fd926dca0d44c916e4d0351d5eb2ddf11264bcf9158e842942"
    },
    {
      "reviewId": "u10-s010-v003-review",
      "questionId": "u10-s010-v003",
      "questionContentSha256": "0562ad2aa39db0ae1f054710ecde0d3944af751e5839af1c066dd69f57c4a1aa",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(2x)²-2(2x)(3)+3²=4x²-12x+9。",
      "derivedAnswer": "4x²-12x+9",
      "storedAnswer": "4x²-12x+9",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4x²-6x+9：中間項少一倍。；2x²-12x+9：首項係數未平方。；4x²-12x+9：係數平方、中間兩倍乘積與尾平方都要計算。；4x²-9：誤用平方差。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「係數平方與中間項錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：含係數差平方，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (2x-3)²。」獨立重算：(2x)²-2(2x)(3)+3²=4x²-12x+9。 正解「4x²-12x+9」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "19ddb210dd57797b9ddef2d9ea413dbfd144553f25127cb43dfcde5e6cc72315"
    },
    {
      "reviewId": "u10-s010-v004-review",
      "questionId": "u10-s010-v004",
      "questionContentSha256": "71eea76f1ee481adcf9670c2e0fc1e987bd1eec0b26b7533b646483e8ee750f9",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(3y)²-2(3y)(4)+4²=9y²-24y+16。",
      "derivedAnswer": "9y²-24y+16",
      "storedAnswer": "9y²-24y+16",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：9y²-12y+16：中間項少一倍。；6y²-24y+16：首項係數錯。；9y²+24y+16：中間項符號錯。；9y²-24y+16：三部分符號依差平方公式。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「中間項係數或符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：標準差平方，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (3y-4)²。」獨立重算：(3y)²-2(3y)(4)+4²=9y²-24y+16。 正解「9y²-24y+16」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "2176b1704da6316c75ff6016e6fca39d7537690f4c1de28b671dcddb8251a256"
    },
    {
      "reviewId": "u10-s010-v005-review",
      "questionId": "u10-s010-v005",
      "questionContentSha256": "2e4ddd8d1dfc46e261bafe4e63941ec5385a3eefc578d63ac915066b7a84779d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "-2k=-16 得 k=8，且 k²=64。",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：8：8 正確。；16：把 2k 當 k。；-8：符號判讀錯。；4：中間項只 -8x。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「反向比較中間項係數錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：由展開式反求尾數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (x-k)²=x²-16x+64，則 k 為何？」獨立重算：-2k=-16 得 k=8，且 k²=64。 正解「8」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "01167ca8002c0cb651d0a355f16d694102bbe601f9c5d62cd50f911f6dd9ed04"
    },
    {
      "reviewId": "u10-s010-v006-review",
      "questionId": "u10-s010-v006",
      "questionContentSha256": "2cbfc5e5063a0e47147699040e726bf8b2f5eaad0d7c2551541faf95f0b8cac7",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "中間項為 -2×100×3=-600。",
      "derivedAnswer": "-600",
      "storedAnswer": "-600",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：600：符號錯誤。；-300：漏乘 2。；-600：-600 正確。；300：漏乘 2 且符號錯。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「差平方中間項的符號或倍數錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：辨認差平方中間項，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「將 (100-3)² 展開為 100²-2·100·3+3²，其中中間項的值為何？」獨立重算：中間項為 -2×100×3=-600。 正解「-600」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "5c81cac289f46b03979188b3fef0eae61afe99123e0e18737c1b17b028aa90ce"
    },
    {
      "reviewId": "u10-s010-v007-review",
      "questionId": "u10-s010-v007",
      "questionContentSha256": "bce8914dcffab5f44e1cb4663efdf8a30205aaee72b68344944609c9474be05f",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "第一式 x²-2x+1，第二式 x²-6x+9；相減得 4x-8。",
      "derivedAnswer": "4x-8",
      "storedAnswer": "4x-8",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：-4x+8：相減方向顛倒。；2x²-8x+10：把兩式相加。；4x+8：常數符號錯。；4x-8：4x-8 正確。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「兩個差平方相減時外層負號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：平方式相減，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (x-1)²-(x-3)²。」獨立重算：第一式 x²-2x+1，第二式 x²-6x+9；相減得 4x-8。 正解「4x-8」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "0aec87428ac270c5a81fdbf16173a31f0dc3776f2bcba60456c388d75de4fc73"
    },
    {
      "reviewId": "u10-s010-v008-review",
      "questionId": "u10-s010-v008",
      "questionContentSha256": "6181e70393627aaa14d3302357a6dff7bb5e8bb7091974bce7c1ed2990952516",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "a²=4，但中間項 -2a=-4，得 a=2。",
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
        "secondCorrectAnswer": "逐一檢查四選項：-2：會得到 +4x。；2：a=2 正確。；4：首項 16x²。；±2：±2 未考慮中間項符號。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只由 a² 判斷而忽略中間項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由展開式判係數符號，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 (ax-1)²=4x²-4x+1，則 a 為何？」獨立重算：a²=4，但中間項 -2a=-4，得 a=2。 正解「2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "ecd0368cd37c6c39eaeb3535c98219c902066648294ea9cc653795169b465f86"
    },
    {
      "reviewId": "u10-s010-v009-review",
      "questionId": "u10-s010-v009",
      "questionContentSha256": "ddb4f4bf412aeb4502f25b9f5f4dfdb1c7a6cdcf3ff524b58441ed82ea2a0b97",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "原式可重組為 [(x-y)-2]²，所以 A=x-y。",
      "derivedAnswer": "x-y",
      "storedAnswer": "x-y",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x：漏 y。；x-y：x-y 正確。；y：漏 x。；x+y：改變原式符號。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「整體代換時漏負號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：差平方的整體辨認，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「將 (x-y-2)² 視為 (A-2)²，A 應為何？」獨立重算：原式可重組為 [(x-y)-2]²，所以 A=x-y。 正解「x-y」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8e9d56ddff52f9ce431686c410b9f86c0361c70d33bcbf87e0e08596cd686e5d"
    },
    {
      "reviewId": "u10-s010-v010-review",
      "questionId": "u10-s010-v010",
      "questionContentSha256": "2b54fdfba37453b7dcbdeb495875020b62c8dc3f2898641761fd53bb5a8034ab",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "新邊長 x-2，面積 (x-2)²=x²-4x+4。",
      "derivedAnswer": "x²-4x+4 平方公尺",
      "storedAnswer": "x²-4x+4 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-4 平方公尺：誤用平方差。；x²-2x+4 平方公尺：中間項少一倍。；x²+4x+4 平方公尺：符號反向。；x²-4x+4 平方公尺：縮短邊長後整體平方。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "實際正方形要求 x>2。",
        "alternateReading": "常見誤讀「把邊長縮短直接轉成面積減 4」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：縮短後的新面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "縮短的是每一條邊，必須先形成新邊長 x-2 再平方。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「正方形原邊長 x 公尺，每邊縮短 2 公尺。新面積為何？」獨立重算：新邊長 x-2，面積 (x-2)²=x²-4x+4。 正解「x²-4x+4 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "b16ef71f86df8e74cc0a7a7a3b647910664d255b12f0cf793fd89ae3be7c4fa2"
    },
    {
      "reviewId": "u10-s010-v011-review",
      "questionId": "u10-s010-v011",
      "questionContentSha256": "d05b4fb01ddcd45902140c8567233602903410abace250f42189d113052f20cf",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "四周各縮 1 使邊長減少 2，成為 38 公尺；38²=1444。",
      "derivedAnswer": "1444 平方公尺",
      "storedAnswer": "1444 平方公尺",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：1521 平方公尺：這是 39²，只縮一側。；1600 平方公尺：原面積未縮。；1444 平方公尺：1444 正確。；1681 平方公尺：這是 41²。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "公尺×公尺=平方公尺。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "內縮後邊長 38>0。",
        "alternateReading": "常見誤讀「把四周內縮 1 誤解為邊長只減 1」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：內縮邊界的面積，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "幾何語句「四邊向內各縮 1」決定新邊長為 40-2，而非 39。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一塊邊長 40 公尺的正方形土地，四邊向內各縮 1 公尺形成新正方形，新面積為何？」獨立重算：四周各縮 1 使邊長減少 2，成為 38 公尺；38²=1444。 正解「1444 平方公尺」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "66a386c8af53a9b0493ab47da322acd01f19613d37b5d4c7f6de58dfe9ead7e5"
    },
    {
      "reviewId": "u10-s010-v012-review",
      "questionId": "u10-s010-v012",
      "questionContentSha256": "4bb5b9f8d15bc2ba76d006c52d75badecb960e30312c472ec79f90eebce2a571",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "中央正方形邊長為 x-2，因此面積 (x-2)²=x²-4x+4。",
      "derivedAnswer": "x²-4x+4",
      "storedAnswer": "x²-4x+4",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-4x+4：圖示切除位置確認兩方向各減 2。；x²-4：誤用平方差。；x²-2x+4：中間項少一倍。；x²+4x+4：切除卻使面積增加。",
        "undefinedSymbol": "題幹用語均在「差的平方公式」講義定義。",
        "unitConflict": "邊長為抽象長度單位，面積為平方單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "x>2。",
        "alternateReading": "常見誤讀「由圖讀邊長減量錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：用切割圖理解差平方，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "必須讀取圖中兩個寬 2 的切除方向，才能判定中央邊長與面積。",
      "prerequisiteCheck": "使用先備技能：square-sum-formula；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「圖示正方形原邊長 x，右側與下側各切去寬 2 的長條後，中央剩餘正方形面積為何？」獨立重算：中央正方形邊長為 x-2，因此面積 (x-2)²=x²-4x+4。 正解「x²-4x+4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "236591a7f14d9e91aa85086dee0a103dbdb57c5f81ea2aa72aec2f532646f877"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u10-fig-square-difference-area",
      "unitId": "u10",
      "skillId": "square-difference-formula",
      "skillSlot": "s010",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "canvas": {
        "width": "360",
        "height": "360"
      },
      "viewBox": "0 0 360 360",
      "drawingSpecification": "外正方形邊長 x，右側與下側各標示寬 2，中央未切除正方形邊長為 x-2。",
      "exactCoordinates": [
        "outer rect (40,40,280,280)",
        "right cut boundary x=270",
        "bottom cut boundary y=270"
      ],
      "visibleLineRules": "外框使用 3px 實線；內部分割或內框依圖使用 2px 實線或虛線。",
      "hiddenLineRules": "本單元平面圖無隱藏線。",
      "labelsAndPositions": [
        "outer side x",
        "cut widths 2",
        "central remaining region"
      ],
      "tickMarks": "無刻度；尺寸以文字標示。",
      "units": "依圖標示公尺，或使用抽象長度單位。",
      "arrowsAndSymbols": "尺寸線端點使用簡單箭頭；未使用角度符號。",
      "toScale": false,
      "visualInferenceWarning": "圖形不按比例，切除寬度只能依標示 2 判讀。",
      "altText": "邊長 x 的正方形右側與下側切去寬 2 的長條，中央剩餘正方形。",
      "svgTitle": "邊長 x 的正方形切除寬 2 長條",
      "svgDesc": "外正方形邊長 x，右側與下側各標示寬 2，中央未切除正方形邊長為 x-2。",
      "mobileReadabilityReview": "在 360px 寬度下主要標籤字級至少 18px，線條與文字不重疊。",
      "answerLeakageReview": "圖僅提供題幹已知尺寸或未知區域，不直接標示正確選項或完整答案。",
      "geometryTokenAssertions": [
        "SVG 含唯一 title 與 desc。",
        "viewBox 與畫布尺寸已宣告。",
        "所有文字標籤位於 viewBox 內。",
        "外框閉合，分割線端點落在外框。"
      ],
      "questionReferences": [
        "u10-s010-v012"
      ],
      "svgPath": "figures/u10/u10-fig-square-difference-area.svg",
      "contentSha256": "644db8216138e9c4285de97a6efdb240925bbc9016c61c9a7f77937b26a7a6d4"
    }
  ]
};
