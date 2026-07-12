// Deterministically emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u10-s012-lecture-r1",
    "unitId": "u10",
    "numericUnitId": 10,
    "topicId": "u10-formulas",
    "skillId": "formula-mixed-recognition",
    "lockedTitle": "乘法公式辨認與應用",
    "title": "乘法公式辨認與應用：先判結構再計算",
    "audience": "臺灣國中零基礎至會考滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能在三種公式間正確辨認。",
      "能處理 a、b 為單項式或整個式子的情況。",
      "能透過補項、重組與連續運算快速化簡。"
    ],
    "prerequisites": [
      "difference-of-squares-expand"
    ],
    "prerequisiteBridge": "先備技能 difference-of-squares-expand 已建立下一步所需概念；本節專注於依結構選公式並進行混合化簡與心算。",
    "glossary": [
      {
        "term": "結構辨認",
        "definition": "不依表面字母，而依括號、符號與相同部分選公式。"
      },
      {
        "term": "整體代換",
        "definition": "把較複雜的式子視為公式中的 a 或 b。"
      },
      {
        "term": "混合化簡",
        "definition": "連續使用公式、分配律與同類項合併。"
      }
    ],
    "notation": [
      {
        "symbol": "(A+B)²",
        "meaning": "A²+2AB+B²。"
      },
      {
        "symbol": "(A−B)²",
        "meaning": "A²−2AB+B²。"
      },
      {
        "symbol": "(A+B)(A−B)",
        "meaning": "A²−B²。"
      }
    ],
    "conceptNarrative": [
      "公式不是看到平方就套用；要看是整個和或差平方，還是兩個共軛因式相乘。",
      "A、B 可以是 2x、x+1 等整體，但每一步平方與乘積都要完整。",
      "有時先把數寫成基準±差即可快速心算。",
      "混合題可用展開後的項數、首尾項與中間項符號做反向檢查。"
    ],
    "formalDefinitions": [
      {
        "name": "公式選擇",
        "statement": "依括號外平方與兩因式符號關係，選和平方、差平方或平方差。"
      }
    ],
    "formulas": [
      {
        "formula": "(A±B)²=A²±2AB+B²",
        "conditions": [
          "同一二項式整體平方"
        ],
        "meaning": "中間項保留。"
      },
      {
        "formula": "(A+B)(A−B)=A²−B²",
        "conditions": [
          "共軛因式"
        ],
        "meaning": "中間項消失。"
      }
    ],
    "nonApplicableCases": [
      "不能只依字母名稱判公式。",
      "A 或 B 為多項式時不能只平方其中一項。",
      "同號兩括號不是平方差。",
      "公式後仍可能需要合併同類項。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "圈出重複的整體部分。",
        "check": "完成此步後，確認內容仍符合「依結構選公式並進行混合化簡與心算」。"
      },
      {
        "step": 2,
        "instruction": "判斷是整體平方或共軛相乘。",
        "check": "完成此步後，確認內容仍符合「依結構選公式並進行混合化簡與心算」。"
      },
      {
        "step": 3,
        "instruction": "指定 A、B 並先寫公式骨架。",
        "check": "完成此步後，確認內容仍符合「依結構選公式並進行混合化簡與心算」。"
      },
      {
        "step": 4,
        "instruction": "完整計算 A²、2AB、B²。",
        "check": "完成此步後，確認內容仍符合「依結構選公式並進行混合化簡與心算」。"
      },
      {
        "step": 5,
        "instruction": "合併並用展開或代入值驗算。",
        "check": "完成此步後，確認內容仍符合「依結構選公式並進行混合化簡與心算」。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "展開 (2x+5)²。",
        "solutionSteps": [
          "A=2x，B=5。"
        ],
        "answer": "4x²+20x+25。"
      },
      {
        "exampleId": "L2",
        "prompt": "化簡 (x+3)²-(x-3)²。",
        "solutionSteps": [
          "分別展開後相減，或視為 U²−V²。"
        ],
        "answer": "12x。"
      },
      {
        "exampleId": "L3",
        "prompt": "計算 1003×997。",
        "solutionSteps": [
          "(1000+3)(1000−3)。"
        ],
        "answer": "999991。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把所有兩括號都套平方差",
        "why": "未檢查共軛",
        "correction": "尾項需同大小反符號。"
      },
      {
        "mistake": "A=x+1 時只寫 A²=x²+1",
        "why": "對整體平方漏中間項",
        "correction": "再套一次和平方。"
      },
      {
        "mistake": "公式展開後不合併",
        "why": "停在未完成形式",
        "correction": "檢查是否有同類項。"
      }
    ],
    "selfCheck": [
      "我是否能能在三種公式間正確辨認？",
      "我是否能能處理 a、b 為單項式或整個式子的情況？",
      "我是否能能透過補項、重組與連續運算快速化簡？",
      "我是否檢查了負號、括號、指數與題目所問的量？"
    ],
    "summary": [
      "公式選擇看結構，不看字母。",
      "整體 A、B 也要完整平方。",
      "首尾項與中間項可用來反查。",
      "混合題最後仍要化簡。"
    ],
    "connections": {
      "previous": "上一技能 平方差公式 提供本節所需工具。",
      "next": [
        "最後一節把多項式放回面積、費用與數量變化中，重點是建模和解釋。"
      ]
    },
    "figureReferences": [],
    "accessibility": {
      "figureAltTextsRequired": false,
      "textOnlyPath": "所有公式與圖形關係均在正文以文字完整說明。"
    },
    "practiceLinks": {
      "mcQuestionIds": [
        "u10-s012-v001",
        "u10-s012-v002",
        "u10-s012-v003",
        "u10-s012-v004",
        "u10-s012-v005",
        "u10-s012-v006",
        "u10-s012-v007",
        "u10-s012-v008",
        "u10-s012-v009",
        "u10-s012-v010",
        "u10-s012-v011",
        "u10-s012-v012"
      ],
      "constructedResponseIds": [
        "u10-s012-cr001",
        "u10-s012-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP only",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段重讀「乘法公式辨認與應用：先判結構再計算」：定義、3 個例題、錯誤推理與下一技能銜接均針對 formula-mixed-recognition；另逐項檢查負號、係數、指數、括號和條件。",
      "reviewVersion": "human-lecture-review-u10-r1",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "ba7233eb4028ffbfbc18c4a1415143f974e34e62c23a998cb527eee156d10571"
  },
  "mcQuestions": [
    {
      "questionId": "u10-s012-v001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "展開 (x+6)² 應使用哪一個公式？",
      "givenConditions": [],
      "target": "辨認和平方結構",
      "choices": [
        "平方差公式",
        "差的平方公式",
        "一般單項式乘法",
        "和的平方公式"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "括號內為兩項相加且整體平方，應用和的平方公式。",
        "derivedChoice": "和的平方公式",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "結構是 (a+b)²。",
      "steps": [
        "括號內為兩項相加且整體平方，應用和的平方公式。"
      ],
      "optionAnalysis": [
        {
          "choice": "平方差公式",
          "truth": false,
          "reason": "需要兩個共軛因式。"
        },
        {
          "choice": "差的平方公式",
          "truth": false,
          "reason": "符號不是減。"
        },
        {
          "choice": "一般單項式乘法",
          "truth": false,
          "reason": "不足以描述整體平方結構。"
        },
        {
          "choice": "和的平方公式",
          "truth": true,
          "reason": "和平方正確。"
        }
      ],
      "misconceptionTarget": "只看到平方就任選公式",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認和平方結構」且四個選項以同一表示層級作答；逐項重算後只有「和的平方公式」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：辨認和平方結構，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v001-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cf66e054e75edc8f88ff0e623fe234d48b790e5696dab5fa6b03a80217dd344e"
    },
    {
      "questionId": "u10-s012-v002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "(x+4)(x-4) 的展開結果為何？",
      "givenConditions": [],
      "target": "辨認平方差結構",
      "choices": [
        "x²+8x+16",
        "x²-8x+16",
        "x²-16",
        "x²+16"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "兩因式為共軛，結果 x²-4²=x²-16。",
        "derivedChoice": "x²-16",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "使用平方差公式。",
      "steps": [
        "兩因式為共軛，結果 x²-4²=x²-16。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²+8x+16",
          "truth": false,
          "reason": "和平方。"
        },
        {
          "choice": "x²-8x+16",
          "truth": false,
          "reason": "差平方。"
        },
        {
          "choice": "x²-16",
          "truth": true,
          "reason": "使用平方差公式。"
        },
        {
          "choice": "x²+16",
          "truth": false,
          "reason": "尾項符號錯。"
        }
      ],
      "misconceptionTarget": "混淆三種公式",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「辨認平方差結構」且四個選項以同一表示層級作答；逐項重算後只有「x²-16」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：辨認平方差結構，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v002-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "d1ac594fd669e16f2f7cac6ccfa90b361454ad2a14bdf4fc0e26b703e93def4e"
    },
    {
      "questionId": "u10-s012-v003",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "下列哪一個式子與 x²-4x+4 相等？",
      "givenConditions": [],
      "target": "由展開式反向辨認公式",
      "choices": [
        "(x-2)²",
        "(x+2)²",
        "(x-4)(x+4)",
        "x(x-4)+4x"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "x²-4x+4 符合 a²-2ab+b²，取 a=x、b=2，所以等於 (x-2)²。",
        "derivedChoice": "(x-2)²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "由三項式的首尾平方與負中間項反向辨認差平方。",
      "steps": [
        "x²-4x+4 符合 a²-2ab+b²，取 a=x、b=2，所以等於 (x-2)²。"
      ],
      "optionAnalysis": [
        {
          "choice": "(x-2)²",
          "truth": true,
          "reason": "(x-2)² 展開即 x²-4x+4。"
        },
        {
          "choice": "(x+2)²",
          "truth": false,
          "reason": "展開為 x²+4x+4，中間項符號錯。"
        },
        {
          "choice": "(x-4)(x+4)",
          "truth": false,
          "reason": "展開為 x²-16，是平方差。"
        },
        {
          "choice": "x(x-4)+4x",
          "truth": false,
          "reason": "化簡為 x²，缺少 -4x+4。"
        }
      ],
      "misconceptionTarget": "只看首尾平方而忽略中間項符號",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「由展開式反向辨認公式」且四個選項以同一表示層級作答；逐項重算後只有「(x-2)²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "基礎：由展開式反向辨認公式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v003-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "eb54668ff686a80f087fdcca02c1aa0a91daad1691379731da22572482711264"
    },
    {
      "questionId": "u10-s012-v004",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (2x+3)²。",
      "givenConditions": [],
      "target": "公式完整套用",
      "choices": [
        "4x²+9",
        "4x²+12x+9",
        "2x²+12x+9",
        "4x²+6x+9"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "(2x)²+2(2x)(3)+3²=4x²+12x+9。",
        "derivedChoice": "4x²+12x+9",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "辨認和平方並完整平方係數。",
      "steps": [
        "(2x)²+2(2x)(3)+3²=4x²+12x+9。"
      ],
      "optionAnalysis": [
        {
          "choice": "4x²+9",
          "truth": false,
          "reason": "漏中間項。"
        },
        {
          "choice": "4x²+12x+9",
          "truth": true,
          "reason": "辨認和平方並完整平方係數。"
        },
        {
          "choice": "2x²+12x+9",
          "truth": false,
          "reason": "首項係數錯。"
        },
        {
          "choice": "4x²+6x+9",
          "truth": false,
          "reason": "中間項少一倍。"
        }
      ],
      "misconceptionTarget": "整體係數平方與中間項錯",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「公式完整套用」且四個選項以同一表示層級作答；逐項重算後只有「4x²+12x+9」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：公式完整套用，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v004-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "cc41e5ac188cc40a8d2cfca658b520a82e3b514228e5fa38ba7115fb1f40418c"
    },
    {
      "questionId": "u10-s012-v005",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (3x+1)(3x-1)。",
      "givenConditions": [],
      "target": "含係數平方差",
      "choices": [
        "6x²-1",
        "9x²-6x+1",
        "9x²-1",
        "9x²+1"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "共軛因式相乘=(3x)²-1²=9x²-1。",
        "derivedChoice": "9x²-1",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "交叉項抵消。",
      "steps": [
        "共軛因式相乘=(3x)²-1²=9x²-1。"
      ],
      "optionAnalysis": [
        {
          "choice": "6x²-1",
          "truth": false,
          "reason": "首項係數未平方。"
        },
        {
          "choice": "9x²-6x+1",
          "truth": false,
          "reason": "誤用差平方。"
        },
        {
          "choice": "9x²-1",
          "truth": true,
          "reason": "交叉項抵消。"
        },
        {
          "choice": "9x²+1",
          "truth": false,
          "reason": "尾項符號錯。"
        }
      ],
      "misconceptionTarget": "公式結構選錯",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「含係數平方差」且四個選項以同一表示層級作答；逐項重算後只有「9x²-1」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：含係數平方差，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v005-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "17975d89f1aa4a28c0c906a239baa1e317986a29878eb743bbc57a482409cf34"
    },
    {
      "questionId": "u10-s012-v006",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "計算 1001²-999²。",
      "givenConditions": [],
      "target": "反向使用平方差心算",
      "choices": [
        "4000",
        "2000",
        "3998",
        "4"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "1001²-999²=(1001+999)(1001-999)=2000×2=4000。",
        "derivedChoice": "4000",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩平方相減先反向使用平方差公式。",
      "steps": [
        "1001²-999²=(1001+999)(1001-999)=2000×2=4000。"
      ],
      "optionAnalysis": [
        {
          "choice": "4000",
          "truth": true,
          "reason": "4000 正確。"
        },
        {
          "choice": "2000",
          "truth": false,
          "reason": "只取兩數和。"
        },
        {
          "choice": "3998",
          "truth": false,
          "reason": "把兩數直接相乘或相減錯。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "只平方兩數差。"
        }
      ],
      "misconceptionTarget": "未把平方差反向拆成和乘差",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「反向使用平方差心算」且四個選項以同一表示層級作答；逐項重算後只有「4000」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "標準：反向使用平方差心算，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v006-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8cb25e6a5e8a99bd133e5fd6863a550059cc18104af6775d21ec7ea6b2e33b08"
    },
    {
      "questionId": "u10-s012-v007",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (x+3)²-(x+3)(x-3)。",
      "givenConditions": [],
      "target": "和平方與平方差混合",
      "choices": [
        "6x",
        "6x+18",
        "x²+6x+9",
        "18"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "設 A=x+3。直接展開：第一式 x²+6x+9，第二式 x²-9，相減得 6x+18。",
        "derivedChoice": "6x+18",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "辨認兩種公式後相減。",
      "steps": [
        "設 A=x+3。",
        "直接展開：第一式 x²+6x+9，第二式 x²-9，相減得 6x+18。"
      ],
      "optionAnalysis": [
        {
          "choice": "6x",
          "truth": false,
          "reason": "漏常數 18。"
        },
        {
          "choice": "6x+18",
          "truth": true,
          "reason": "6x+18 正確。"
        },
        {
          "choice": "x²+6x+9",
          "truth": false,
          "reason": "只保留第一式。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "漏 6x。"
        }
      ],
      "misconceptionTarget": "混合公式相減漏項",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「和平方與平方差混合」且四個選項以同一表示層級作答；逐項重算後只有「6x+18」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：和平方與平方差混合，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v007-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ad9e38f100d8c6966e428f39fe33ce4c2dbce88f2ee9b0e398ab56b9377c333f"
    },
    {
      "questionId": "u10-s012-v008",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (x+1)²+(x-1)²-2(x+1)(x-1)。",
      "givenConditions": [],
      "target": "多公式抵消",
      "choices": [
        "2",
        "4x",
        "4x²",
        "4"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "前兩式和為 2x²+2；乘積兩倍為 2x²-2；相減得 4。",
        "derivedChoice": "4",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "也可看成 [(x+1)-(x-1)]²=2²=4。",
      "steps": [
        "前兩式和為 2x²+2。",
        "乘積兩倍為 2x²-2。",
        "相減得 4。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "少算一個尾常數。"
        },
        {
          "choice": "4x",
          "truth": false,
          "reason": "誤保留一次項。"
        },
        {
          "choice": "4x²",
          "truth": false,
          "reason": "誤保留二次項。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "4 正確。"
        }
      ],
      "misconceptionTarget": "未辨認整體平方恆等式",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「多公式抵消」且四個選項以同一表示層級作答；逐項重算後只有「4」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：多公式抵消，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v008-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "905c30cf80421332f730f52d56dcc0dac922896f80794688cc0c477d952fcba2"
    },
    {
      "questionId": "u10-s012-v009",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "若 A=x+2，則 (A+3)(A-3) 展開為何？",
      "givenConditions": [],
      "target": "兩層公式套用",
      "choices": [
        "x²-5",
        "x²+4x+13",
        "x²-4x-5",
        "x²+4x-5"
      ],
      "answerIndex": 3,
      "independentSolution": {
        "derivation": "A²-9=(x+2)²-9=x²+4x+4-9=x²+4x-5。",
        "derivedChoice": "x²+4x-5",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "先平方差，再展開 A 的和平方。",
      "steps": [
        "A²-9=(x+2)²-9=x²+4x+4-9=x²+4x-5。"
      ],
      "optionAnalysis": [
        {
          "choice": "x²-5",
          "truth": false,
          "reason": "漏 A² 中間項。"
        },
        {
          "choice": "x²+4x+13",
          "truth": false,
          "reason": "常數 4-9 算錯。"
        },
        {
          "choice": "x²-4x-5",
          "truth": false,
          "reason": "A 誤作 x-2。"
        },
        {
          "choice": "x²+4x-5",
          "truth": true,
          "reason": "先平方差，再展開 A 的和平方。"
        }
      ],
      "misconceptionTarget": "整體代換後展開不完整",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "本題為純代數量；各選項單位一致或不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「兩層公式套用」且四個選項以同一表示層級作答；逐項重算後只有「x²+4x-5」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "進階：兩層公式套用，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v009-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4826395bbeec2bc56e27307006a50366979248a258296cd253a07f190230fc3d"
    },
    {
      "questionId": "u10-s012-v010",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一正方形邊長從 30 公分增加到 32 公分。新面積可用哪個式子快速計算？",
      "givenConditions": [],
      "target": "選擇面積公式",
      "choices": [
        "30²+2²",
        "30²+2·30·2+2²",
        "(30+2)(30-2)",
        "2·30+2"
      ],
      "answerIndex": 1,
      "independentSolution": {
        "derivation": "32²=(30+2)²=30²+2·30·2+2²。",
        "derivedChoice": "30²+2·30·2+2²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "增加後整體平方應用和平方。",
      "steps": [
        "32²=(30+2)²=30²+2·30·2+2²。"
      ],
      "optionAnalysis": [
        {
          "choice": "30²+2²",
          "truth": false,
          "reason": "漏交叉面積。"
        },
        {
          "choice": "30²+2·30·2+2²",
          "truth": true,
          "reason": "完整和平方，正確。"
        },
        {
          "choice": "(30+2)(30-2)",
          "truth": false,
          "reason": "算的是 32×28。"
        },
        {
          "choice": "2·30+2",
          "truth": false,
          "reason": "只算周長式部分。"
        }
      ],
      "misconceptionTarget": "把邊長增加對面積的影響線性化",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "各長度為公分，計算結果為平方公分。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「選擇面積公式」且四個選項以同一表示層級作答；逐項重算後只有「30²+2·30·2+2²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：選擇面積公式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "邊長由 30 變 32 的幾何變化決定整體平方而非單純加法。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v010-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "b844b971546ffd548c52a21ede52e8cdcd7c88c9ffa942ac204424b51bbf33a0"
    },
    {
      "questionId": "u10-s012-v011",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "某人要心算 498×502，最適合的改寫為何？",
      "givenConditions": [],
      "target": "選擇心算公式",
      "choices": [
        "500²-2²",
        "(500-2)²",
        "(500+2)²",
        "500²-2·500·2"
      ],
      "answerIndex": 0,
      "independentSolution": {
        "derivation": "498×502=(500-2)(500+2)=500²-2²。",
        "derivedChoice": "500²-2²",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩數以 500 為中心等距，使用平方差。",
      "steps": [
        "498×502=(500-2)(500+2)=500²-2²。"
      ],
      "optionAnalysis": [
        {
          "choice": "500²-2²",
          "truth": true,
          "reason": "平方差改寫正確。"
        },
        {
          "choice": "(500-2)²",
          "truth": false,
          "reason": "只表示 498²。"
        },
        {
          "choice": "(500+2)²",
          "truth": false,
          "reason": "只表示 502²。"
        },
        {
          "choice": "500²-2·500·2",
          "truth": false,
          "reason": "這是差平方的部分展開。"
        }
      ],
      "misconceptionTarget": "把共軛乘積誤作差平方",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "純數乘積，不涉及單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「選擇心算公式」且四個選項以同一表示層級作答；逐項重算後只有「500²-2²」成立。",
      "boundaryAudit": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
      "difficultyReason": "素養：選擇心算公式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「498 與 502 距 500 相同」是選擇平方差的核心情境結構。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v011-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "495e1579124b578d43b5091f61cf837b1ebd81c07d6877276e02a930d7cf9599"
    },
    {
      "questionId": "u10-s012-v012",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "一個正方形庭院邊長為 x+2，中央挖去邊長 x-2 的正方形。剩餘面積為何？",
      "givenConditions": [],
      "target": "框形面積混合公式",
      "choices": [
        "4x",
        "8",
        "8x",
        "4x+8"
      ],
      "answerIndex": 2,
      "independentSolution": {
        "derivation": "剩餘=(x+2)²-(x-2)²。展開得 (x²+4x+4)-(x²-4x+4)=8x。",
        "derivedChoice": "8x",
        "didNotTrustStoredAnswer": true
      },
      "explanation": "兩個平方相減，中間項相加。",
      "steps": [
        "剩餘=(x+2)²-(x-2)²。",
        "展開得 (x²+4x+4)-(x²-4x+4)=8x。"
      ],
      "optionAnalysis": [
        {
          "choice": "4x",
          "truth": false,
          "reason": "少一倍。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "把 x 消去過度。"
        },
        {
          "choice": "8x",
          "truth": true,
          "reason": "8x 正確。"
        },
        {
          "choice": "4x+8",
          "truth": false,
          "reason": "多出常數。"
        }
      ],
      "misconceptionTarget": "兩平方相減時中間項符號錯",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "estimatedTimeSec": 90,
      "unitCheck": "若 x 以公尺計，答案為平方公尺；8 的係數帶相應長度單位。",
      "roundingCheck": "全程精確運算，不需四捨五入。",
      "ambiguityAudit": "題幹指定「框形面積混合公式」且四個選項以同一表示層級作答；逐項重算後只有「8x」成立。",
      "boundaryAudit": "需 x>2，使內外邊長皆為正。",
      "difficultyReason": "素養：框形面積混合公式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "外正方形減內正方形的幾何關係決定兩個平方相減，不能只用周長差。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "semanticReviewRef": "u10-s012-v012-review",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "0a6e7274f927c2fa683aa6d962e3d8943da135f65361035e7b10f09620c3c334"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u10-s012-cr001",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "standard",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 (x+4)²-(x+4)(x-4)，並標示每一步使用的公式。",
      "requiredWork": [
        "對第一式用和平方。",
        "對第二式用平方差。",
        "相減合併。"
      ],
      "standardSolution": [
        "(x+4)²=x²+8x+16。",
        "(x+4)(x-4)=x²-16。",
        "相減得 x²+8x+16-x²+16=8x+32。"
      ],
      "alternativeMethods": [
        "可提取共同因式 (x+4)[(x+4)-(x-4)]=(x+4)·8=8x+32。"
      ],
      "reasoningSteps": [
        "(x+4)²=x²+8x+16。",
        "(x+4)(x-4)=x²-16。",
        "相減得 x²+8x+16-x²+16=8x+32。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "任一完整正確方法與 8x+32。"
        },
        {
          "score": 2,
          "criteria": "方法正確但單一符號/算術錯。"
        },
        {
          "score": 1,
          "criteria": "正確展開其中一個公式。"
        },
        {
          "score": 0,
          "criteria": "公式皆選錯。"
        }
      ],
      "partialCreditRules": [
        "替代提取共同因式法不要求逐一展開，但需說明。"
      ],
      "followThroughPolicy": "若第二式相減時只錯常數符號，給 2 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫答案最高 2 分。",
      "commonErrorTargets": [
        "依結構選公式並進行混合化簡與心算"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立以兩法均得 8x+32。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "fb79af36299eb093ab3ce144ff8a16e30c1fb9fdcd1eebbed284b4b21a823c89"
    },
    {
      "questionId": "u10-s012-cr002",
      "unitId": "u10",
      "numericUnitId": 10,
      "topicId": "u10-formulas",
      "skillId": "formula-mixed-recognition",
      "skillSlot": "s012",
      "difficulty": "advanced",
      "type": "constructed-response",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "prompt": "化簡 [(x+2)+3][(x+2)-3]，再說明為何不能直接寫成 x²-9。",
      "requiredWork": [
        "把 x+2 視為整體 A。",
        "先用平方差。",
        "展開 A²。"
      ],
      "standardSolution": [
        "設 A=x+2，原式=A²-9。",
        "=(x+2)²-9=x²+4x+4-9=x²+4x-5。",
        "不能直接寫 x²-9，因為共同首項是 x+2，不是 x。"
      ],
      "alternativeMethods": [
        "可先逐項展開 (x+5)(x-1)=x²+4x-5 驗證。"
      ],
      "reasoningSteps": [
        "設 A=x+2，原式=A²-9。",
        "=(x+2)²-9=x²+4x+4-9=x²+4x-5。",
        "不能直接寫 x²-9，因為共同首項是 x+2，不是 x。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "結果與不能省略整體平方的理由完整。"
        },
        {
          "score": 2,
          "criteria": "結果正確但理由不完整。"
        },
        {
          "score": 1,
          "criteria": "寫出 (x+2)²-9 但未展開。"
        },
        {
          "score": 0,
          "criteria": "直接答 x²-9。"
        }
      ],
      "partialCreditRules": [
        "逐項展開法可滿分，但仍需指出直接寫 x²-9 的錯誤。"
      ],
      "followThroughPolicy": "若 (x+2)² 只漏 4x，給 1 分。",
      "unitAndNotationRules": "不涉及單位。",
      "answerOnlyPolicy": "只寫 x²+4x-5，最高 2 分。",
      "commonErrorTargets": [
        "依結構選公式並進行混合化簡與心算"
      ],
      "figureId": null,
      "drawingSpecId": null,
      "independentReview": {
        "recomputedResult": "獨立展開 (x+5)(x-1) 驗證。",
        "ambiguity": "題意資料足夠，評分規則已對應本題推理。",
        "decision": "pass"
      },
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "152e0abcc734299d42b83391ed6c6a38c8c249a640145f1ab4662448266ba8ea"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u10-s012-v001-review",
      "questionId": "u10-s012-v001",
      "questionContentSha256": "cf66e054e75edc8f88ff0e623fe234d48b790e5696dab5fa6b03a80217dd344e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "括號內為兩項相加且整體平方，應用和的平方公式。",
      "derivedAnswer": "和的平方公式",
      "storedAnswer": "和的平方公式",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：平方差公式：需要兩個共軛因式。；差的平方公式：符號不是減。；一般單項式乘法：不足以描述整體平方結構。；和的平方公式：和平方正確。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只看到平方就任選公式」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：辨認和平方結構，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「展開 (x+6)² 應使用哪一個公式？」獨立重算：括號內為兩項相加且整體平方，應用和的平方公式。 正解「和的平方公式」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "10da8f51562db2f4497d4c0654582e6953a708c3cd5dabad1cdfc03034ecac1a"
    },
    {
      "reviewId": "u10-s012-v002-review",
      "questionId": "u10-s012-v002",
      "questionContentSha256": "d1ac594fd669e16f2f7cac6ccfa90b361454ad2a14bdf4fc0e26b703e93def4e",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "兩因式為共軛，結果 x²-4²=x²-16。",
      "derivedAnswer": "x²-16",
      "storedAnswer": "x²-16",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²+8x+16：和平方。；x²-8x+16：差平方。；x²-16：使用平方差公式。；x²+16：尾項符號錯。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「混淆三種公式」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：辨認平方差結構，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「(x+4)(x-4) 的展開結果為何？」獨立重算：兩因式為共軛，結果 x²-4²=x²-16。 正解「x²-16」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "aff48356e49bd565efa7718c42df0dc58f29ba2295e494f7f147e5a0603b5a71"
    },
    {
      "reviewId": "u10-s012-v003-review",
      "questionId": "u10-s012-v003",
      "questionContentSha256": "eb54668ff686a80f087fdcca02c1aa0a91daad1691379731da22572482711264",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x²-4x+4 符合 a²-2ab+b²，取 a=x、b=2，所以等於 (x-2)²。",
      "derivedAnswer": "(x-2)²",
      "storedAnswer": "(x-2)²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：(x-2)²：(x-2)² 展開即 x²-4x+4。；(x+2)²：展開為 x²+4x+4，中間項符號錯。；(x-4)(x+4)：展開為 x²-16，是平方差。；x(x-4)+4x：化簡為 x²，缺少 -4x+4。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「只看首尾平方而忽略中間項符號」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "基礎：由展開式反向辨認公式，以單一核心定義或一步運算完成。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪一個式子與 x²-4x+4 相等？」獨立重算：x²-4x+4 符合 a²-2ab+b²，取 a=x、b=2，所以等於 (x-2)²。 正解「(x-2)²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8b087aab4db86da3d0536a92cb84e058af422e7e5d21fe61f14ae70cd9167c71"
    },
    {
      "reviewId": "u10-s012-v004-review",
      "questionId": "u10-s012-v004",
      "questionContentSha256": "cc41e5ac188cc40a8d2cfca658b520a82e3b514228e5fa38ba7115fb1f40418c",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(2x)²+2(2x)(3)+3²=4x²+12x+9。",
      "derivedAnswer": "4x²+12x+9",
      "storedAnswer": "4x²+12x+9",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4x²+9：漏中間項。；4x²+12x+9：辨認和平方並完整平方係數。；2x²+12x+9：首項係數錯。；4x²+6x+9：中間項少一倍。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「整體係數平方與中間項錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：公式完整套用，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (2x+3)²。」獨立重算：(2x)²+2(2x)(3)+3²=4x²+12x+9。 正解「4x²+12x+9」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8528c16efb9b554ad3b83afff1226e6b962ba784206a1425c47901fe58cfa6ed"
    },
    {
      "reviewId": "u10-s012-v005-review",
      "questionId": "u10-s012-v005",
      "questionContentSha256": "17975d89f1aa4a28c0c906a239baa1e317986a29878eb743bbc57a482409cf34",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "共軛因式相乘=(3x)²-1²=9x²-1。",
      "derivedAnswer": "9x²-1",
      "storedAnswer": "9x²-1",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：6x²-1：首項係數未平方。；9x²-6x+1：誤用差平方。；9x²-1：交叉項抵消。；9x²+1：尾項符號錯。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「公式結構選錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：含係數平方差，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (3x+1)(3x-1)。」獨立重算：共軛因式相乘=(3x)²-1²=9x²-1。 正解「9x²-1」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "2cf3e39bed3ca9b88056f8ac4e7a48de29b6e6c2a89969fd6f7f8e66e60f34ff"
    },
    {
      "reviewId": "u10-s012-v006-review",
      "questionId": "u10-s012-v006",
      "questionContentSha256": "8cb25e6a5e8a99bd133e5fd6863a550059cc18104af6775d21ec7ea6b2e33b08",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "1001²-999²=(1001+999)(1001-999)=2000×2=4000。",
      "derivedAnswer": "4000",
      "storedAnswer": "4000",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4000：4000 正確。；2000：只取兩數和。；3998：把兩數直接相乘或相減錯。；4：只平方兩數差。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未把平方差反向拆成和乘差」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "標準：反向使用平方差心算，需要正確連結至少兩個表示或運算步驟。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「計算 1001²-999²。」獨立重算：1001²-999²=(1001+999)(1001-999)=2000×2=4000。 正解「4000」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "8ebde37590220a85f2366c0bb776aeac679380695c78b85e13865fc9f58781c9"
    },
    {
      "reviewId": "u10-s012-v007-review",
      "questionId": "u10-s012-v007",
      "questionContentSha256": "ad9e38f100d8c6966e428f39fe33ce4c2dbce88f2ee9b0e398ab56b9377c333f",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "設 A=x+3。直接展開：第一式 x²+6x+9，第二式 x²-9，相減得 6x+18。",
      "derivedAnswer": "6x+18",
      "storedAnswer": "6x+18",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：6x：漏常數 18。；6x+18：6x+18 正確。；x²+6x+9：只保留第一式。；18：漏 6x。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「混合公式相減漏項」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：和平方與平方差混合，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (x+3)²-(x+3)(x-3)。」獨立重算：設 A=x+3。直接展開：第一式 x²+6x+9，第二式 x²-9，相減得 6x+18。 正解「6x+18」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "ac14341562a5b14ddad3d6fdc0f15b082dc183c5ef8edf1c12b1aba930c607b9"
    },
    {
      "reviewId": "u10-s012-v008-review",
      "questionId": "u10-s012-v008",
      "questionContentSha256": "905c30cf80421332f730f52d56dcc0dac922896f80794688cc0c477d952fcba2",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "前兩式和為 2x²+2；乘積兩倍為 2x²-2；相減得 4。",
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
        "secondCorrectAnswer": "逐一檢查四選項：2：少算一個尾常數。；4x：誤保留一次項。；4x²：誤保留二次項。；4：4 正確。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「未辨認整體平方恆等式」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：多公式抵消，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「化簡 (x+1)²+(x-1)²-2(x+1)(x-1)。」獨立重算：前兩式和為 2x²+2；乘積兩倍為 2x²-2；相減得 4。 正解「4」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "f9106166e56eb65ad36b717cfe189f014a9a0fc5ce96788c9c2bca33fdb72f67"
    },
    {
      "reviewId": "u10-s012-v009-review",
      "questionId": "u10-s012-v009",
      "questionContentSha256": "4826395bbeec2bc56e27307006a50366979248a258296cd253a07f190230fc3d",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "A²-9=(x+2)²-9=x²+4x+4-9=x²+4x-5。",
      "derivedAnswer": "x²+4x-5",
      "storedAnswer": "x²+4x-5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：x²-5：漏 A² 中間項。；x²+4x+13：常數 4-9 算錯。；x²-4x-5：A 誤作 x-2。；x²+4x-5：先平方差，再展開 A 的和平方。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "本題為純代數量；各選項單位一致或不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「整體代換後展開不完整」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "進階：兩層公式套用，需處理參數、抵消、整體代換或多步條件。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「若 A=x+2，則 (A+3)(A-3) 展開為何？」獨立重算：A²-9=(x+2)²-9=x²+4x+4-9=x²+4x-5。 正解「x²+4x-5」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "55525b5e1d3969deed05f2b8b446f78ede89bae46c12471d2a0674cd65a3aba1"
    },
    {
      "reviewId": "u10-s012-v010-review",
      "questionId": "u10-s012-v010",
      "questionContentSha256": "b844b971546ffd548c52a21ede52e8cdcd7c88c9ffa942ac204424b51bbf33a0",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "32²=(30+2)²=30²+2·30·2+2²。",
      "derivedAnswer": "30²+2·30·2+2²",
      "storedAnswer": "30²+2·30·2+2²",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：30²+2²：漏交叉面積。；30²+2·30·2+2²：完整和平方，正確。；(30+2)(30-2)：算的是 32×28。；2·30+2：只算周長式部分。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "各長度為公分，計算結果為平方公分。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把邊長增加對面積的影響線性化」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：選擇面積公式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "邊長由 30 變 32 的幾何變化決定整體平方而非單純加法。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一正方形邊長從 30 公分增加到 32 公分。新面積可用哪個式子快速計算？」獨立重算：32²=(30+2)²=30²+2·30·2+2²。 正解「30²+2·30·2+2²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "aedcc0ce69e6ccee0e8114573974a42ffc4a27aab7523f9ea70e5fdf9949b5c7"
    },
    {
      "reviewId": "u10-s012-v011-review",
      "questionId": "u10-s012-v011",
      "questionContentSha256": "495e1579124b578d43b5091f61cf837b1ebd81c07d6877276e02a930d7cf9599",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "498×502=(500-2)(500+2)=500²-2²。",
      "derivedAnswer": "500²-2²",
      "storedAnswer": "500²-2²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：500²-2²：平方差改寫正確。；(500-2)²：只表示 498²。；(500+2)²：只表示 502²。；500²-2·500·2：這是差平方的部分展開。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "純數乘積，不涉及單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "所有符號均已在本技能講義定義，且僅使用國中會考範圍。",
        "alternateReading": "常見誤讀「把共軛乘積誤作差平方」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：選擇心算公式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "「498 與 502 距 500 相同」是選擇平方差的核心情境結構。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某人要心算 498×502，最適合的改寫為何？」獨立重算：498×502=(500-2)(500+2)=500²-2²。 正解「500²-2²」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "3082f86183ff36718fbd600869a73312e81897a68a43e4cd1bed8145aa203f88"
    },
    {
      "reviewId": "u10-s012-v012-review",
      "questionId": "u10-s012-v012",
      "questionContentSha256": "0a6e7274f927c2fa683aa6d962e3d8943da135f65361035e7b10f09620c3c334",
      "reviewVersion": "human-review-u10-r1",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "剩餘=(x+2)²-(x-2)²。展開得 (x²+4x+4)-(x²-4x+4)=8x。",
      "derivedAnswer": "8x",
      "storedAnswer": "8x",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐一檢查四選項：4x：少一倍。；8：把 x 消去過度。；8x：8x 正確。；4x+8：多出常數。",
        "undefinedSymbol": "題幹用語均在「乘法公式辨認與應用」講義定義。",
        "unitConflict": "若 x 以公尺計，答案為平方公尺；8 的係數帶相應長度單位。",
        "roundingConflict": "全程精確運算，不需四捨五入。",
        "domainBoundary": "需 x>2，使內外邊長皆為正。",
        "alternateReading": "常見誤讀「兩平方相減時中間項符號錯」會導向錯誤選項，不能形成第二個正解。"
      },
      "difficultyReason": "素養：框形面積混合公式，必須把情境量轉為正確多項式並解釋單位或範圍。",
      "literacyContextNecessity": "外正方形減內正方形的幾何關係決定兩個平方相減，不能只用周長差。",
      "prerequisiteCheck": "使用先備技能：difference-of-squares-expand；未使用後續單元知識。",
      "languageCheck": "使用臺灣繁體中文；題幹、選項與所求量完整，未省略必要比較基準。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個正方形庭院邊長為 x+2，中央挖去邊長 x-2 的正方形。剩餘面積為何？」獨立重算：剩餘=(x+2)²-(x-2)²。展開得 (x²+4x+4)-(x²-4x+4)=8x。 正解「8x」；四個選項理由均已逐項核對。",
      "reviewedAt": "2026-07-12",
      "contentSha256": "369b93f3c106d87ffa0c5d8c321ebaaa21ebe7aab32972cc32e44ba4c14c43aa"
    }
  ],
  "drawingSpecs": []
};
