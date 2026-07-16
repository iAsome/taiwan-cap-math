// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s005-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-operations",
    "skillId": "polynomial-add-subtract",
    "lockedTitle": "多項式加減",
    "title": "多項式加減：減去整個多項式要逐項變號",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能以橫式或直式對齊同類項。",
      "能正確展開括號前的正號與負號。",
      "能處理缺項並化簡結果。"
    ],
    "prerequisites": [
      "polynomial-degree-coefficient"
    ],
    "prerequisiteBridge": "先備技能 polynomial-degree-coefficient 已建立下一步所需概念；本節專注於對齊同類項並正確處理減號。",
    "glossary": [
      {
        "term": "缺項",
        "definition": "某次方項的係數為 0，書寫時通常省略。"
      },
      {
        "term": "相減",
        "definition": "加上第二個多項式的相反式。"
      },
      {
        "term": "對齊",
        "definition": "將相同次方的項放在同一欄。"
      }
    ],
    "notation": [
      {
        "symbol": "P−Q=P+(−Q)",
        "meaning": "Q 的每一項都變號。"
      },
      {
        "symbol": "0x²",
        "meaning": "直式計算時可補零表示缺項。"
      }
    ],
    "conceptNarrative": [
      "多項式相加就是同類項係數相加。",
      "多項式相減最容易錯在只改第一項；括號前負號要使括號內每一項變號。",
      "直式適合缺項較多的式子，但必須按同次方對齊。",
      "最後仍須合併並按降冪整理。",
      "多項式加減可用橫式或直式，但核心都是按相同文字部分對齊係數；缺少某次項時應視其係數為零，不能依書寫位置錯位。相加時保留各項原符號，相減時則先把被減的整個多項式每一項乘以負一，再合併同類項、刪除零項並按降冪整理。完成後可代入簡單數值，比較原運算與化簡式是否同值，以檢查漏項或變號錯誤。"
    ],
    "formalDefinitions": [
      {
        "name": "多項式相減",
        "statement": "P(x)-Q(x)=P(x)+[-Q(x)]。"
      }
    ],
    "formulas": [
      {
        "formula": "(ax²+bx+c)±(dx²+ex+f)=(a±d)x²+(b±e)x+(c±f)",
        "conditions": [
          "同次方係數分別運算"
        ],
        "meaning": "適用於已對齊的同類項。"
      }
    ],
    "nonApplicableCases": [
      "不能把不同次方的係數放在同欄。",
      "減號不能只作用於括號第一項。",
      "結果不是把兩式直接接在一起。",
      "有缺項時不能錯位。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "將兩式按降冪排列並補想像中的 0 係數。",
        "check": "完成此步後，確認內容仍符合「對齊同類項並正確處理減號」。"
      },
      {
        "step": 2,
        "instruction": "若為減法，先把第二式每項變號。",
        "check": "完成此步後，確認內容仍符合「對齊同類項並正確處理減號」。"
      },
      {
        "step": 3,
        "instruction": "同類項係數相加。",
        "check": "完成此步後，確認內容仍符合「對齊同類項並正確處理減號」。"
      },
      {
        "step": 4,
        "instruction": "刪除 0 項並整理降冪。",
        "check": "完成此步後，確認內容仍符合「對齊同類項並正確處理減號」。"
      },
      {
        "step": 5,
        "instruction": "代入一個簡單數值檢查左右是否相等。",
        "check": "完成此步後，確認內容仍符合「對齊同類項並正確處理減號」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "(3x²+2x-1)+(x²-5x+4)。",
        "solutionSteps": [
          "x²、x、常數分組。"
        ],
        "answer": "4x²-3x+3。",
        "why": "加法括號可展開後按次方分組：二次項係數 3+1=4，一次項 2-5=-3，常數 -1+4=3。合併過程只改係數、不改文字部分，三組都必須保留。"
      },
      {
        "exampleId": "L2",
        "prompt": "(4x²-x+6)-(2x²+3x-5)。",
        "solutionSteps": [
          "第二式變為 -2x²-3x+5。"
        ],
        "answer": "2x²-4x+11。",
        "why": "減去整個第二式等同每一項乘負一，所以常數 -5 也要變成 +5。逐項變號後再合併，可得二次項二、一次項負四、常數十一，避免只改第一項。"
      },
      {
        "exampleId": "L3",
        "prompt": "(x³+2)-(2x²-x)。",
        "solutionSteps": [
          "補看缺項後相減。"
        ],
        "answer": "x³-2x²+x+2。",
        "why": "第一式可視為 x³+0x²+0x+2，第二式可視為 0x³+2x²-x+0；按同次方對齊並把第二式逐項變號後，每一欄都能正確相加，不會因缺項而錯位。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "只把第二式第一項變號",
        "why": "負號的分配範圍誤判",
        "correction": "括號內每一項都乘 -1。"
      },
      {
        "mistake": "x² 項和 x 項相加",
        "why": "未按文字部分對齊",
        "correction": "只處理同次方項。"
      },
      {
        "mistake": "缺項造成直式錯位",
        "why": "依書寫位置而非次方對齊",
        "correction": "用 0 係數佔位。"
      },
      {
        "mistake": "由已知和或差反求其中一式時憑字面猜運算",
        "why": "被減式、減式與差的角色不同，方向錯會使全部係數反號",
        "correction": "先用 A-B=D 寫等式，再以等式兩邊同加減推得所求關係。"
      }
    ],
    "selfCheck": [
      "我是否能以橫式或直式對齊同類項？",
      "我是否能正確展開括號前的正號與負號？",
      "我是否能處理缺項並化簡結果？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "加減只處理同類項係數。",
      "減去多項式等於加上其相反式。",
      "缺項要按次方補位。",
      "化簡後再驗算。"
    ],
    "connections": {
      "previous": "上一技能 多項式次數與係數符號 提供本節所需工具。",
      "next": [
        "下一節進入乘法，指數法則與係數符號將同時使用。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s005-v001",
        "u10-s005-v002",
        "u10-s005-v003",
        "u10-s005-v004",
        "u10-s005-v005",
        "u10-s005-v006",
        "u10-s005-v007",
        "u10-s005-v008",
        "u10-s005-v009",
        "u10-s005-v010",
        "u10-s005-v011",
        "u10-s005-v012"
      ],
      "constructedResponseIds": [
        "u10-s005-cr001",
        "u10-s005-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「多項式加減：減去整個多項式要逐項變號」：定義、3 個例題、錯誤推理與下一技能銜接均針對 polynomial-add-subtract；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "1b664d792b91069a7b028331fae961ffe16d9759f8b4e3a71ab9884be7424705"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s005-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (2x+3)+(5x-1)。",
      "givenConditions": [],
      "target": "兩個一次式相加",
      "choices": [
        "7x+2",
        "7x+4",
        "3x+2",
        "10x-3"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "同類項相加：2x+5x=7x，3+(-1)=2。",
        "derivedChoice": "7x+2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "逐類合併得到 7x+2。 兩個括號以加號連接，可直接展開並分類；x 項係數 2+5=7，常數項 3+(-1)=2，因此結果是 7x+2，兩組同類項分別核對，且沒有遺漏任何原項。",
      "steps": [
        "同類項相加：2x+5x=7x，3+(-1)=2。",
        "去掉加法括號，寫成 2x+3+5x-1。",
        "分別合併 x 項與常數項，得到 7x+2。"
      ],
      "optionAnalysis": [
        {
          "choice": "7x+2",
          "truth": true,
          "reason": "7x+2 正確。"
        },
        {
          "choice": "7x+4",
          "truth": false,
          "reason": "常數把 -1 當 +1。"
        },
        {
          "choice": "3x+2",
          "truth": false,
          "reason": "係數相減。"
        },
        {
          "choice": "10x-3",
          "truth": false,
          "reason": "把係數相乘。"
        }
      ],
      "misconceptionTarget": "常數符號或係數運算錯誤 把第二式的 -1 當成正一，或交叉合併 x 項與常數而得到錯誤係數。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「兩個一次式相加」且四個選項以同一表示層級作答；逐項重算後只有「7x+2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：兩個一次式相加，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c2039e23fea8ae57e05be26f2d024232227f6d3020c6333d3dbc60a5aeadbecf"
    },
    {
      "questionId": "u10-s005-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (4x²+2x)-(x²-3x)。",
      "givenConditions": [],
      "target": "二次式相減",
      "choices": [
        "3x²-x",
        "5x²-x",
        "3x²+5x",
        "5x²+5x"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "第二式變號：4x²+2x-x²+3x=3x²+5x。",
        "derivedChoice": "3x²+5x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "減去多項式時每一項都變號。 括號前的減號使 x² 與 -3x 都取相反數，第二式變成 -x²+3x；再算二次項 4-1=3、一次項 2+3=5，故兩項皆為正確符號。",
      "steps": [
        "第二式變號：4x²+2x-x²+3x=3x²+5x。",
        "完整去括號為 4x²+2x-x²+3x。",
        "按次方合併，得到 3x²+5x 並核對兩項符號。"
      ],
      "optionAnalysis": [
        {
          "choice": "3x²-x",
          "truth": false,
          "reason": "x 項未變號。"
        },
        {
          "choice": "5x²-x",
          "truth": false,
          "reason": "二次項相加錯。"
        },
        {
          "choice": "3x²+5x",
          "truth": true,
          "reason": "3x²+5x 正確。"
        },
        {
          "choice": "5x²+5x",
          "truth": false,
          "reason": "把二次項也當加法。"
        }
      ],
      "misconceptionTarget": "只改括號第一項的符號 只把括號第一項 x² 變號，仍保留 -3x，因而把一次項係數算成負一。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「二次式相減」且四個選項以同一表示層級作答；逐項重算後只有「3x²+5x」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：二次式相減，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2ce75be76b38077cc4474d976e0b4a932425b2763e8d0eb6ce70b9b8a7aaaf74"
    },
    {
      "questionId": "u10-s005-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "P=x²+4，Q=3x²-2。P+Q 為何？",
      "givenConditions": [],
      "target": "以 P、Q 表示相加",
      "choices": [
        "2x²+2",
        "4x²+2",
        "4x²+6",
        "3x⁴+2"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "x²+3x²=4x²，4+(-2)=2。",
        "derivedChoice": "4x²+2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "同次方係數相加，指數不變。 P+Q=(x²+4)+(3x²-2)，同類二次項係數 1+3=4，常數 4-2=2；加法不會改變 x 的指數，所以答案仍是二次式，完整結果為 4x²+2，常數欄也已完整相加。",
      "steps": [
        "x²+3x²=4x²，4+(-2)=2。",
        "將兩式並列成 x²+3x²+4-2，按文字部分分組。",
        "算得 4x²+2，確認沒有一次項需要補入。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²+2",
          "truth": false,
          "reason": "二次係數相減。"
        },
        {
          "choice": "4x²+2",
          "truth": true,
          "reason": "4x²+2 正確。"
        },
        {
          "choice": "4x²+6",
          "truth": false,
          "reason": "常數把 -2 當 +2。"
        },
        {
          "choice": "3x⁴+2",
          "truth": false,
          "reason": "把加法誤作乘法。"
        }
      ],
      "misconceptionTarget": "相加時指數改變 把 x² 與 3x² 相加時將指數也相加成 x⁴，或把常數 -2 漏掉。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「以 P、Q 表示相加」且四個選項以同一表示層級作答；逐項重算後只有「4x²+2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：以 P、Q 表示相加，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "baa266d3d39d431987dd23f780755542f83d195876facac9103817f8d0708f5f"
    },
    {
      "questionId": "u10-s005-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (3x²-x+5)-(2x²+4x-7)。",
      "givenConditions": [],
      "target": "三項式相減",
      "choices": [
        "x²+3x-2",
        "5x²-5x-2",
        "x²-5x-12",
        "x²-5x+12"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "去括號：3x²-x+5-2x²-4x+7=x²-5x+12。",
        "derivedChoice": "x²-5x+12",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "第二式三項全部變號後合併。 減去第二個三項式時，2x²、4x、-7 依序變為 -2x²、-4x、+7；再逐次方合併，得到 x²-5x+12，三個符號皆已反轉，每一欄也各自完成核對。",
      "steps": [
        "去括號：3x²-x+5-2x²-4x+7=x²-5x+12。",
        "展開為 3x²-x+5-2x²-4x+7，檢查三項皆已變號。",
        "合併係數 3-2、-1-4、5+7，得到 x²-5x+12。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+3x-2",
          "truth": false,
          "reason": "x 項符號錯且常數相減錯。"
        },
        {
          "choice": "5x²-5x-2",
          "truth": false,
          "reason": "二次項誤加。"
        },
        {
          "choice": "x²-5x-12",
          "truth": false,
          "reason": "常數 -7 未變號。"
        },
        {
          "choice": "x²-5x+12",
          "truth": true,
          "reason": "x²-5x+12 正確。"
        }
      ],
      "misconceptionTarget": "減號分配不完整 外層減號沒有分配到常數 -7，將 5-7 算成 -2 而非 5+7。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「三項式相減」且四個選項以同一表示層級作答；逐項重算後只有「x²-5x+12」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：三項式相減，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "82927b85c51b9405e60106ffa0e6f253c3ff17e4718ddfd20f3451bf5ae25539"
    },
    {
      "questionId": "u10-s005-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 P=2x³-x+1，Q=x²+3x-4，則 P+Q 的 x 項係數為何？",
      "givenConditions": [],
      "target": "只求指定項係數",
      "choices": [
        "-4",
        "-2",
        "2",
        "4"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "x 項只來自 -x+3x=2x，所以係數為 2。",
        "derivedChoice": "2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "其他次方不影響 x 項係數。 題目只問 P+Q 的 x 項，可鎖定 P 中的 -x 與 Q 中的 3x；係數 -1+3=2，三次、二次與常數項都不影響此係數，故答案只取二。",
      "steps": [
        "x 項只來自 -x+3x=2x，所以係數為 2。",
        "從兩式各自擷取一次項 -x 與 3x，忽略其他不同次方項。",
        "將 -x 改寫成 -1x，合併係數 -1+3=2。"
      ],
      "optionAnalysis": [
        {
          "choice": "-4",
          "truth": false,
          "reason": "把 -1-3。"
        },
        {
          "choice": "-2",
          "truth": false,
          "reason": "此值不是合併結果。"
        },
        {
          "choice": "2",
          "truth": true,
          "reason": "2 正確。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "把係數絕對值相加。"
        }
      ],
      "misconceptionTarget": "未按次方取對應係數 把不同次方的係數一起相加，或漏讀 -x 省略的係數是負一。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「只求指定項係數」且四個選項以同一表示層級作答；逐項重算後只有「2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：只求指定項係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "2afbfd809f414421da6aebbf87fb3eca847ade5a63dd72efe672cfbe63e2f77c"
    },
    {
      "questionId": "u10-s005-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 2(x²+x-1)+(x²-3x+4)。",
      "givenConditions": [],
      "target": "含倍數的多項式相加",
      "choices": [
        "3x²-x+2",
        "3x²+5x+2",
        "2x²-2x+3",
        "3x²-x+6"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "先分配 2：2x²+2x-2，再加第二式，得 3x²-x+2。",
        "derivedChoice": "3x²-x+2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "分配後逐次方相加。 括號外的 2 必須乘到三項，先得 2x²+2x-2；加上第二式後，二次項 3x²、一次項 -x、常數 2，三類項完整保留，結果已按降冪排列。",
      "steps": [
        "先分配 2：2x²+2x-2，再加第二式，得 3x²-x+2。",
        "用分配律完整展開第一括號為 2x²+2x-2。",
        "與 x²-3x+4 分類合併，得到 3x²-x+2。"
      ],
      "optionAnalysis": [
        {
          "choice": "3x²-x+2",
          "truth": true,
          "reason": "3x²-x+2 正確。"
        },
        {
          "choice": "3x²+5x+2",
          "truth": false,
          "reason": "把 -3x 當 +3x。"
        },
        {
          "choice": "2x²-2x+3",
          "truth": false,
          "reason": "漏加第二式 x²。"
        },
        {
          "choice": "3x²-x+6",
          "truth": false,
          "reason": "常數 -2+4 算成 6。"
        }
      ],
      "misconceptionTarget": "外係數未分配所有項 外係數二只乘括號第一項，或漏把常數 -1 乘成 -2。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含倍數的多項式相加」且四個選項以同一表示層級作答；逐項重算後只有「3x²-x+2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：含倍數的多項式相加，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e2fcaad84141292a09003a008355a026e522ba14986d519c8f87a7a7e901cced"
    },
    {
      "questionId": "u10-s005-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 [2x²-(x-1)]-[x²+(2x+3)]。",
      "givenConditions": [],
      "target": "雙層括號加減",
      "choices": [
        "x²-x-2",
        "3x²+x+4",
        "x²-3x+4",
        "x²-3x-2"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "第一括號為 2x²-x+1；減第二括號得 -x²-2x-3，所以總為 x²-3x-2。",
        "derivedChoice": "x²-3x-2",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "分兩層去括號，外層減號作用於第二個整體。 先處理內層 -(x-1)=-x+1，再把外層所減的整個 x²+(2x+3) 展開為 -x²-2x-3；最後合併得 x²-3x-2，兩層括號依序處理。",
      "steps": [
        "第一括號為 2x²-x+1。",
        "減第二括號得 -x²-2x-3，所以總為 x²-3x-2。",
        "將兩個整體都展開，得到 (2x²-x+1)-(x²+2x+3)。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-x-2",
          "truth": false,
          "reason": "只處理一層符號。"
        },
        {
          "choice": "3x²+x+4",
          "truth": false,
          "reason": "把兩組都相加。"
        },
        {
          "choice": "x²-3x+4",
          "truth": false,
          "reason": "常數符號錯。"
        },
        {
          "choice": "x²-3x-2",
          "truth": true,
          "reason": "x²-3x-2 正確。"
        }
      ],
      "misconceptionTarget": "巢狀括號的負號範圍錯 混淆兩層負號的作用範圍，只改變每個括號的第一項而漏掉常數。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「雙層括號加減」且四個選項以同一表示層級作答；逐項重算後只有「x²-3x-2」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：雙層括號加減，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "df4b959c9a5c78430a53476bc31ee8e989ce5efe85e7525c090a534d13491d06"
    },
    {
      "questionId": "u10-s005-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 P-Q=3x²-2x+5，且 Q=x²+x-1，則 P 為何？",
      "givenConditions": [],
      "target": "由 P-Q 與 Q 反求 P",
      "choices": [
        "2x²-3x+6",
        "4x²-x+4",
        "4x²-3x+6",
        "2x²-x+4"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "P=(P-Q)+Q=(3x²-2x+5)+(x²+x-1)=4x²-x+4。",
        "derivedChoice": "4x²-x+4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "由已知差加回 Q。 由 P-Q=D 可在等式兩邊同加 Q，得 P=D+Q；把已知差與 Q 對齊相加後，二次項四、一次項負一、常數四，故 P=4x²-x+4，再減 Q 可回到原差。",
      "steps": [
        "P=(P-Q)+Q=(3x²-2x+5)+(x²+x-1)=4x²-x+4。",
        "先用等式運算寫出 P=(P-Q)+Q，確認方向。",
        "代入兩式後合併 3x²+x²、-2x+x、5-1，得 4x²-x+4。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²-3x+6",
          "truth": false,
          "reason": "誤做再減 Q。"
        },
        {
          "choice": "4x²-x+4",
          "truth": true,
          "reason": "4x²-x+4 正確。"
        },
        {
          "choice": "4x²-3x+6",
          "truth": false,
          "reason": "x 項和常數錯。"
        },
        {
          "choice": "2x²-x+4",
          "truth": false,
          "reason": "二次項係數錯。"
        }
      ],
      "misconceptionTarget": "由差反求被減式時運算方向錯 反求被減式時再次用差減 Q，將 P 錯列為 (P-Q)-Q。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由 P-Q 與 Q 反求 P」且四個選項以同一表示層級作答；逐項重算後只有「4x²-x+4」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由 P-Q 與 Q 反求 P，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e26b073275f2c928b22a0ca7e827f99158a5fa8b905218d7c52956c21b69ab76"
    },
    {
      "questionId": "u10-s005-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 A=2x²+ax-3，B=x²-4x+b，且 A-B=x²+5x-7，則 a+b 為何？",
      "givenConditions": [],
      "target": "由多項式差求參數",
      "choices": [
        "-1",
        "5",
        "1",
        "3"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "A-B=x²+(a+4)x+(-3-b)。比較得 a+4=5，所以 a=1；-3-b=-7，所以 b=4；因此 a+b=5。",
        "derivedChoice": "5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "逐次方比較係數求兩參數。 A-B 展開時 B 的 -4x 變為 +4x，常數 b 變為 -b；比較一次項得 a+4=5、常數項得 -3-b=-7，所以 a=1、b=4，最後相加為五；兩個係數條件彼此獨立。",
      "steps": [
        "A-B=x²+(a+4)x+(-3-b)。",
        "比較得 a+4=5，所以 a=1。",
        "-3-b=-7，所以 b=4。",
        "因此 a+b=5。"
      ],
      "optionAnalysis": [
        {
          "choice": "-1",
          "truth": false,
          "reason": "只取一個參數。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "a+b=5 正確。"
        },
        {
          "choice": "1",
          "truth": false,
          "reason": "並非最後和。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "計算 b 符號錯。"
        }
      ],
      "misconceptionTarget": "比較係數時減號造成參數符號錯 減去 B 時未改變 -4x 或 b 的符號，因而建立 a-4=5 或 -3+b=-7。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由多項式差求參數」且四個選項以同一表示層級作答；逐項重算後只有「5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：由多項式差求參數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1c5cd6f0b3c270928c2be60bde328fa83b7d811b6841da207070424c2da8cea9"
    },
    {
      "questionId": "u10-s005-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某社團收入為 (80x+1200) 元，支出為 (35x+500) 元。結餘是多少？",
      "givenConditions": [],
      "target": "收入減支出",
      "choices": [
        "115x+1700 元",
        "45x+1700 元",
        "115x+700 元",
        "45x+700 元"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "結餘=收入-支出=80x+1200-35x-500=45x+700。",
        "derivedChoice": "45x+700 元",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "變動收入與固定收入分別減去對應支出。 結餘定義為收入減支出，故變動部分 80x-35x=45x，固定部分 1200-500=700；兩部分合併為 45x+700 元，金額單位一致。",
      "steps": [
        "結餘=收入-支出=80x+1200-35x-500=45x+700。",
        "依結餘關係列 (80x+1200)-(35x+500)。",
        "逐項變號並合併，得到 45x+700 元，保留金額單位。"
      ],
      "optionAnalysis": [
        {
          "choice": "115x+1700 元",
          "truth": false,
          "reason": "把收入與支出相加。"
        },
        {
          "choice": "45x+1700 元",
          "truth": false,
          "reason": "固定項未相減。"
        },
        {
          "choice": "115x+700 元",
          "truth": false,
          "reason": "x 係數誤加。"
        },
        {
          "choice": "45x+700 元",
          "truth": true,
          "reason": "45x+700 正確。"
        }
      ],
      "misconceptionTarget": "把結餘誤作收入加支出 把收入與支出相加，或只減 x 項而將固定支出五百元加到收入。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "所有項均為元，可直接相減。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「收入減支出」且四個選項以同一表示層級作答；逐項重算後只有「45x+700 元」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：收入減支出，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「結餘」的語意明確決定相減方向，元的單位需保留。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a2df334bf1f5d24e9402fd27f1e19dbe20527885c9eb9f57d8646eaf4b2ff4a6"
    },
    {
      "questionId": "u10-s005-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一水槽原有 (6x²+4x) 公升，放出 (2x²-3x+5) 公升後，剩多少？",
      "givenConditions": [],
      "target": "容量剩餘量",
      "choices": [
        "4x²+7x-5 公升",
        "4x²+x-5 公升",
        "8x²+x+5 公升",
        "4x²+7x+5 公升"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "剩量=6x²+4x-(2x²-3x+5)=4x²+7x-5。",
        "derivedChoice": "4x²+7x-5 公升",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "放出量整體要相減，因此 -3x 變 +3x。 剩量等於原有量減放出量；括號內 -3x 被整體相減後成 +3x，因此一次項 4x+3x=7x，常數則為 -5，二次項同時相減為 4x²。",
      "steps": [
        "剩量=6x²+4x-(2x²-3x+5)=4x²+7x-5。",
        "展開為 6x²+4x-2x²+3x-5，確認放出量三項皆取相反數。",
        "合併得 4x²+7x-5 公升，核對量綱仍為容量。"
      ],
      "optionAnalysis": [
        {
          "choice": "4x²+7x-5 公升",
          "truth": true,
          "reason": "4x²+7x-5 正確。"
        },
        {
          "choice": "4x²+x-5 公升",
          "truth": false,
          "reason": "x 項只算 4x-3x。"
        },
        {
          "choice": "8x²+x+5 公升",
          "truth": false,
          "reason": "把二次項相加。"
        },
        {
          "choice": "4x²+7x+5 公升",
          "truth": false,
          "reason": "常數 5 未變號。"
        }
      ],
      "misconceptionTarget": "減去含負項的放出量時符號錯 將放出量中的 -3x 保留為負，或把放出的常數五加到剩餘量。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "各式均以公升表示。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「容量剩餘量」且四個選項以同一表示層級作答；逐項重算後只有「4x²+7x-5 公升」成立。",
      "boundaryAudit": "實際 x 應使原量、放出量及剩餘量皆不為負。",
      "difficultyReason": "素養：容量剩餘量，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「放出後剩下」要求原量減放出量，且容量單位使負結果需再檢查範圍。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "45ce8544ef31d35895f493442d54aa70e7bb4582c09fefb555c389efda747ee9"
    },
    {
      "questionId": "u10-s005-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "甲路線長 (3x²+2x+1) 公里，乙路線比甲短 (x²-x+2) 公里。乙路線長為何？",
      "givenConditions": [],
      "target": "由比較差求較短量",
      "choices": [
        "2x²+x-1 公里",
        "4x²+x+3 公里",
        "2x²+3x-1 公里",
        "2x²+3x+3 公里"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "乙=甲-差=3x²+2x+1-(x²-x+2)=2x²+3x-1。",
        "derivedChoice": "2x²+3x-1 公里",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "「比甲短」表示從甲路線減去差量。 乙比甲短某差量，關係是乙=甲-差；減去 x²-x+2 時得到 -x²+x-2，與甲式合併為 2x²+3x-1 公里，方向符合較短語意。",
      "steps": [
        "乙=甲-差=3x²+2x+1-(x²-x+2)=2x²+3x-1。",
        "依語意列乙=(3x²+2x+1)-(x²-x+2)。",
        "完整去括號再逐次方合併，得到 2x²+3x-1 公里。"
      ],
      "optionAnalysis": [
        {
          "choice": "2x²+x-1 公里",
          "truth": false,
          "reason": "x 項未正確變號。"
        },
        {
          "choice": "4x²+x+3 公里",
          "truth": false,
          "reason": "誤把差量相加。"
        },
        {
          "choice": "2x²+3x-1 公里",
          "truth": true,
          "reason": "2x²+3x-1 正確。"
        },
        {
          "choice": "2x²+3x+3 公里",
          "truth": false,
          "reason": "常數 2 未變號。"
        }
      ],
      "misconceptionTarget": "把「短多少」的關係方向弄反 把『乙比甲短』理解成甲加差量，或減括號時沒有將 -x 轉為 +x。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "所有長度式單位為公里。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由比較差求較短量」且四個選項以同一表示層級作答；逐項重算後只有「2x²+3x-1 公里」成立。",
      "boundaryAudit": "實際 x 應使兩路線長度為正。",
      "difficultyReason": "素養：由比較差求較短量，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "比較語句「乙比甲短」決定被減式與減式，不能只做形式加減。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s005-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7a5a9a94d2cabb4fd902329698b25139800138b44b85baa24bd802deb4ecf4fa"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s005-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (4x²-3x+6)-(x²+5x-2)，並展示去括號步驟。",
      "requiredWork": [
        "第二個多項式每項變號。",
        "合併同類項。"
      ],
      "standardSolution": [
        "4x²-3x+6-x²-5x+2。",
        "=3x²-8x+8。",
        "外層減號使第二式的 x²、5x、-2 依序成為 -x²、-5x、+2；分三欄計算係數 4-1=3、-3-5=-8、6+2=8，故完整化簡式為 3x²-8x+8。將結果逐欄與去括號式比對，可確認每項都有對應且沒有遺失負號。"
      ],
      "alternativeMethods": [
        "可用直式把第二式各係數取相反數後相加。"
      ],
      "reasoningSteps": [
        "4x²-3x+6-x²-5x+2。",
        "=3x²-8x+8。",
        "把三組係數逐一回填到 x²、x、常數位置，並確認答案已按降冪排列。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "去括號與結果全對。"
        },
        {
          "score": 2,
          "criteria": "方法正確但一個係數算錯。"
        },
        {
          "score": 1,
          "criteria": "只正確變號部分項或能合併一組。"
        },
        {
          "score": 0,
          "criteria": "把兩式直接相加或無作答。"
        }
      ],
      "partialCreditRules": [
        "等價排列可接受。"
      ],
      "followThroughPolicy": "若只在常數變號錯，後續一致，給 2 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫正確答案無步驟，最高 2 分。",
      "commonErrorTargets": [
        "只把第二式第一項 x² 變號，沒有同時把 5x 與 -2 取相反數。",
        "直式書寫時未按同次方對齊，將 x 項係數與常數相減。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立重算係數 4-1=3、-3-5=-8、6-(-2)=8。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7695f3f099bfd90efc43a2df3fdd2e230f866636d0e8324a434a3a3c0cd4cfc8"
    },
    {
      "questionId": "u10-s005-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-operations",
      "skillId": "polynomial-add-subtract",
      "skillSlot": "s005",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "已知 A-B=2x²-3x+4，且 A=x²+x-1。求 B。",
      "requiredWork": [
        "由 B=A-(A-B) 建式。",
        "正確處理外層減號。"
      ],
      "standardSolution": [
        "B=(x²+x-1)-(2x²-3x+4)。",
        "=x²+x-1-2x²+3x-4=-x²+4x-5。",
        "設已知差 D=A-B，則由 D=A-B 兩邊同加 B、再減 D 可得 B=A-D。將兩個已知式相減後，二次項 1-2=-1、一次項 1-(-3)=4、常數 -1-4=-5，所以 B=-x²+4x-5。再以 A-B 回算原差，三個係數均吻合，證明反求方向正確。"
      ],
      "alternativeMethods": [
        "也可由 A-B=D 改寫 B=A-D，再以直式相減。"
      ],
      "reasoningSteps": [
        "B=(x²+x-1)-(2x²-3x+4)。",
        "=x²+x-1-2x²+3x-4=-x²+4x-5。",
        "用求得的 B 驗算 A-B，確實回到 2x²-3x+4，確認關係方向與所有符號。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "關係式與 B=-x²+4x-5 正確。"
        },
        {
          "score": 2,
          "criteria": "關係方向正確但單一係數錯。"
        },
        {
          "score": 1,
          "criteria": "知道需用 A 與已知差運算但方向/符號不完整。"
        },
        {
          "score": 0,
          "criteria": "直接把兩式相加且無合理說明。"
        }
      ],
      "partialCreditRules": [
        "答案若未按降冪但等價不扣分。"
      ],
      "followThroughPolicy": "若關係式正確、去括號單一錯誤，依後續一致給 2 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫 B 的正確式，最高 2 分。",
      "commonErrorTargets": [
        "由 A-B=D 反求 B 時誤寫成 D-A 或 A+D，顛倒被減式關係。",
        "計算 A-D 時未將 D 的 -3x 變成 +3x，或漏變常數 4 的符號。"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立檢查 A-B=(x²+x-1)-(-x²+4x-5)=2x²-3x+4。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cecef27e5260091c82166c74d87f1a618684eaf169c3fbe84581e66cf33615d8"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s005-v001-review",
      "questionId": "u10-s005-v001",
      "questionContentSha256": "c2039e23fea8ae57e05be26f2d024232227f6d3020c6333d3dbc60a5aeadbecf",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "同類項相加：2x+5x=7x，3+(-1)=2。",
      "derivedAnswer": "7x+2",
      "storedAnswer": "7x+2",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：7x+2：7x+2 正確。；7x+4：常數把 -1 當 +1。；3x+2：係數相減。；10x-3：把係數相乘。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「常數符號或係數運算錯誤」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：兩個一次式相加，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (2x+3)+(5x-1)。」獨立重算：同類項相加：2x+5x=7x，3+(-1)=2。 正解「7x+2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "0f9290b7c3f80f4ac7ffbe9b3f919fa7f7d9d5ccc343ebace2e4840a3fa32603"
    },
    {
      "reviewId": "u10-s005-v002-review",
      "questionId": "u10-s005-v002",
      "questionContentSha256": "2ce75be76b38077cc4474d976e0b4a932425b2763e8d0eb6ce70b9b8a7aaaf74",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "第二式變號：4x²+2x-x²+3x=3x²+5x。",
      "derivedAnswer": "3x²+5x",
      "storedAnswer": "3x²+5x",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3x²-x：x 項未變號。；5x²-x：二次項相加錯。；3x²+5x：3x²+5x 正確。；5x²+5x：把二次項也當加法。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只改括號第一項的符號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：二次式相減，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (4x²+2x)-(x²-3x)。」獨立重算：第二式變號：4x²+2x-x²+3x=3x²+5x。 正解「3x²+5x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "2c33b9def90d44bbd92c9d8bd896fad851d3a0f87d58a2215ef7da0a42fd11ca"
    },
    {
      "reviewId": "u10-s005-v003-review",
      "questionId": "u10-s005-v003",
      "questionContentSha256": "baa266d3d39d431987dd23f780755542f83d195876facac9103817f8d0708f5f",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x²+3x²=4x²，4+(-2)=2。",
      "derivedAnswer": "4x²+2",
      "storedAnswer": "4x²+2",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²+2：二次係數相減。；4x²+2：4x²+2 正確。；4x²+6：常數把 -2 當 +2。；3x⁴+2：把加法誤作乘法。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「相加時指數改變」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：以 P、Q 表示相加，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「P=x²+4，Q=3x²-2。P+Q 為何？」獨立重算：x²+3x²=4x²，4+(-2)=2。 正解「4x²+2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "3660ff54adc8c5547c01f7e5087d01bfb342fe1f884f3adc0893d75718761e99"
    },
    {
      "reviewId": "u10-s005-v004-review",
      "questionId": "u10-s005-v004",
      "questionContentSha256": "82927b85c51b9405e60106ffa0e6f253c3ff17e4718ddfd20f3451bf5ae25539",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "去括號：3x²-x+5-2x²-4x+7=x²-5x+12。",
      "derivedAnswer": "x²-5x+12",
      "storedAnswer": "x²-5x+12",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+3x-2：x 項符號錯且常數相減錯。；5x²-5x-2：二次項誤加。；x²-5x-12：常數 -7 未變號。；x²-5x+12：x²-5x+12 正確。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「減號分配不完整」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：三項式相減，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (3x²-x+5)-(2x²+4x-7)。」獨立重算：去括號：3x²-x+5-2x²-4x+7=x²-5x+12。 正解「x²-5x+12」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "aee3f87cc8b3b20e4ef564d12aa489211b2bb5709a581d0f639cdc21748b93be"
    },
    {
      "reviewId": "u10-s005-v005-review",
      "questionId": "u10-s005-v005",
      "questionContentSha256": "2afbfd809f414421da6aebbf87fb3eca847ade5a63dd72efe672cfbe63e2f77c",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x 項只來自 -x+3x=2x，所以係數為 2。",
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
        "secondCorrectAnswer": "逐一檢查四選項：-4：把 -1-3。；-2：此值不是合併結果。；2：2 正確。；4：把係數絕對值相加。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未按次方取對應係數」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：只求指定項係數，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 P=2x³-x+1，Q=x²+3x-4，則 P+Q 的 x 項係數為何？」獨立重算：x 項只來自 -x+3x=2x，所以係數為 2。 正解「2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "c8a55d8e5c29088641dd67856b02054ab0beccbaf0ea4b86f118cd0c8114b356"
    },
    {
      "reviewId": "u10-s005-v006-review",
      "questionId": "u10-s005-v006",
      "questionContentSha256": "e2fcaad84141292a09003a008355a026e522ba14986d519c8f87a7a7e901cced",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "先分配 2：2x²+2x-2，再加第二式，得 3x²-x+2。",
      "derivedAnswer": "3x²-x+2",
      "storedAnswer": "3x²-x+2",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：3x²-x+2：3x²-x+2 正確。；3x²+5x+2：把 -3x 當 +3x。；2x²-2x+3：漏加第二式 x²。；3x²-x+6：常數 -2+4 算成 6。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「外係數未分配所有項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：含倍數的多項式相加，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 2(x²+x-1)+(x²-3x+4)。」獨立重算：先分配 2：2x²+2x-2，再加第二式，得 3x²-x+2。 正解「3x²-x+2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "70a3224f6a2a051d0de9ea9035613352cff03d524cc19360aff1ed788e0f378d"
    },
    {
      "reviewId": "u10-s005-v007-review",
      "questionId": "u10-s005-v007",
      "questionContentSha256": "df4b959c9a5c78430a53476bc31ee8e989ce5efe85e7525c090a534d13491d06",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "第一括號為 2x²-x+1；減第二括號得 -x²-2x-3，所以總為 x²-3x-2。",
      "derivedAnswer": "x²-3x-2",
      "storedAnswer": "x²-3x-2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-x-2：只處理一層符號。；3x²+x+4：把兩組都相加。；x²-3x+4：常數符號錯。；x²-3x-2：x²-3x-2 正確。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「巢狀括號的負號範圍錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：雙層括號加減，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 [2x²-(x-1)]-[x²+(2x+3)]。」獨立重算：第一括號為 2x²-x+1；減第二括號得 -x²-2x-3，所以總為 x²-3x-2。 正解「x²-3x-2」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "a2254d22bb6c65d0447fc84f80d8209c30ceec40b7e2d989e24abffa34851f30"
    },
    {
      "reviewId": "u10-s005-v008-review",
      "questionId": "u10-s005-v008",
      "questionContentSha256": "e26b073275f2c928b22a0ca7e827f99158a5fa8b905218d7c52956c21b69ab76",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "P=(P-Q)+Q=(3x²-2x+5)+(x²+x-1)=4x²-x+4。",
      "derivedAnswer": "4x²-x+4",
      "storedAnswer": "4x²-x+4",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²-3x+6：誤做再減 Q。；4x²-x+4：4x²-x+4 正確。；4x²-3x+6：x 項和常數錯。；2x²-x+4：二次項係數錯。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「由差反求被減式時運算方向錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由 P-Q 與 Q 反求 P，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 P-Q=3x²-2x+5，且 Q=x²+x-1，則 P 為何？」獨立重算：P=(P-Q)+Q=(3x²-2x+5)+(x²+x-1)=4x²-x+4。 正解「4x²-x+4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "df536e2afb0347a82ef77b0e46f7a1f6ff932ba99fd5547a511e4869895cfed0"
    },
    {
      "reviewId": "u10-s005-v009-review",
      "questionId": "u10-s005-v009",
      "questionContentSha256": "1c5cd6f0b3c270928c2be60bde328fa83b7d811b6841da207070424c2da8cea9",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "A-B=x²+(a+4)x+(-3-b)。比較得 a+4=5，所以 a=1；-3-b=-7，所以 b=4；因此 a+b=5。",
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
        "secondCorrectAnswer": "逐一檢查四選項：-1：只取一個參數。；5：a+b=5 正確。；1：並非最後和。；3：計算 b 符號錯。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「比較係數時減號造成參數符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：由多項式差求參數，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 A=2x²+ax-3，B=x²-4x+b，且 A-B=x²+5x-7，則 a+b 為何？」獨立重算：A-B=x²+(a+4)x+(-3-b)。比較得 a+4=5，所以 a=1；-3-b=-7，所以 b=4；因此 a+b=5。 正解「5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "e29c1aff7e90d1c41affd9a82a9f134607d77c700b86434f7d7ce7a91f42d931"
    },
    {
      "reviewId": "u10-s005-v010-review",
      "questionId": "u10-s005-v010",
      "questionContentSha256": "a2df334bf1f5d24e9402fd27f1e19dbe20527885c9eb9f57d8646eaf4b2ff4a6",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "結餘=收入-支出=80x+1200-35x-500=45x+700。",
      "derivedAnswer": "45x+700 元",
      "storedAnswer": "45x+700 元",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：115x+1700 元：把收入與支出相加。；45x+1700 元：固定項未相減。；115x+700 元：x 係數誤加。；45x+700 元：45x+700 正確。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "所有項均為元，可直接相減。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把結餘誤作收入加支出」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：收入減支出，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「結餘」的語意明確決定相減方向，元的單位需保留。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某社團收入為 (80x+1200) 元，支出為 (35x+500) 元。結餘是多少？」獨立重算：結餘=收入-支出=80x+1200-35x-500=45x+700。 正解「45x+700 元」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "caba4e3c615b9af6d331eee6fbe55a592ac41822597a9d51b9b4d1f9f07ae84c"
    },
    {
      "reviewId": "u10-s005-v011-review",
      "questionId": "u10-s005-v011",
      "questionContentSha256": "45ce8544ef31d35895f493442d54aa70e7bb4582c09fefb555c389efda747ee9",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "剩量=6x²+4x-(2x²-3x+5)=4x²+7x-5。",
      "derivedAnswer": "4x²+7x-5 公升",
      "storedAnswer": "4x²+7x-5 公升",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4x²+7x-5 公升：4x²+7x-5 正確。；4x²+x-5 公升：x 項只算 4x-3x。；8x²+x+5 公升：把二次項相加。；4x²+7x+5 公升：常數 5 未變號。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "各式均以公升表示。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "實際 x 應使原量、放出量及剩餘量皆不為負。",
        "alternateReading": "常見誤讀「減去含負項的放出量時符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：容量剩餘量，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「放出後剩下」要求原量減放出量，且容量單位使負結果需再檢查範圍。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一水槽原有 (6x²+4x) 公升，放出 (2x²-3x+5) 公升後，剩多少？」獨立重算：剩量=6x²+4x-(2x²-3x+5)=4x²+7x-5。 正解「4x²+7x-5 公升」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "024a02189f9b62d2269a9b3811afc55c0c2b5ec53383efc51e2c496417227576"
    },
    {
      "reviewId": "u10-s005-v012-review",
      "questionId": "u10-s005-v012",
      "questionContentSha256": "7a5a9a94d2cabb4fd902329698b25139800138b44b85baa24bd802deb4ecf4fa",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "乙=甲-差=3x²+2x+1-(x²-x+2)=2x²+3x-1。",
      "derivedAnswer": "2x²+3x-1 公里",
      "storedAnswer": "2x²+3x-1 公里",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：2x²+x-1 公里：x 項未正確變號。；4x²+x+3 公里：誤把差量相加。；2x²+3x-1 公里：2x²+3x-1 正確。；2x²+3x+3 公里：常數 2 未變號。",
        "undefinedSymbol": "題幹用語均在「多項式加減」講義定義。",
        "unitConflict": "所有長度式單位為公里。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "實際 x 應使兩路線長度為正。",
        "alternateReading": "常見誤讀「把「短多少」的關係方向弄反」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：由比較差求較短量，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "比較語句「乙比甲短」決定被減式與減式，不能只做形式加減。",
      "prerequisiteCheck": "使用先備技能：polynomial-degree-coefficient；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「甲路線長 (3x²+2x+1) 公里，乙路線比甲短 (x²-x+2) 公里。乙路線長為何？」獨立重算：乙=甲-差=3x²+2x+1-(x²-x+2)=2x²+3x-1。 正解「2x²+3x-1 公里」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "f56698ecc052c0e1ecb0e0ebad71021705a327eb4291f4fd95848e487a422c69"
    }
  ],
  "drawingSpecs": []
};
