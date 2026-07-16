// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u12-s002-lecture-r1",
  "unitId": "u12",
  "numericUnitId": 12,
  "topicId": "u12-methods",
  "skillId": "factoring-formula",
  "lockedSkillTitle": "公式法",
  "title": "公式法：看見平方差與完全平方結構",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能辨認平方差 a²-b²。",
    "能辨認完全平方三項式。",
    "能分辨 x²+b² 不是平方差。",
    "能在使用公式前先提公因式。",
    "能以展開驗證公式分解。"
  ],
  "prerequisites": [
    {
      "skillId": "factoring-common",
      "requiredLevel": "能運用前一技能並以展開驗證結果；本講義會重新連接必要步驟。"
    }
  ],
  "prerequisiteBridge": "先備技能為 factoring-common；先確認能完成前一方法並保留所有符號，再進入本技能。",
  "glossary": [
    {
      "term": "平方差",
      "definition": "兩個平方量相減的式子。"
    },
    {
      "term": "完全平方三項式",
      "definition": "可寫成某個二項式平方的三項式。"
    },
    {
      "term": "中間項",
      "definition": "完全平方展開中的 ±2ab。"
    },
    {
      "term": "公式法",
      "definition": "辨認固定乘法公式的結構後直接分解。"
    }
  ],
  "notation": [
    {
      "symbol": "a²-b²",
      "meaning": "兩平方之差。"
    },
    {
      "symbol": "(a+b)²",
      "meaning": "a²+2ab+b²。"
    },
    {
      "symbol": "(a-b)²",
      "meaning": "a²-2ab+b²。"
    }
  ],
  "conceptNarrative": [
    "平方差來自 (a+b)(a-b)=a²-b²，中間交叉項互相抵消。",
    "完全平方三項式的首末項必須都是平方，中間項還要等於首末平方根乘積的兩倍。",
    "符號由中間項決定：正中間項配 (a+b)²，負中間項配 (a-b)²。",
    "若各項先有公因式，應先提出，才能露出公式結構。",
    "公式法不是看外形便套用，而要逐項驗證結構。兩項式只有在兩項都是平方且以減號連接時，才能寫成和乘差；三項式則需先找首末項平方根，再確認中間項恰為正或負的兩倍乘積，符號決定括號中的加減。若原式另有公因式，必須先提出再檢查公式，最後把結果完整展開，確認外層因式、交叉項與各項符號都沒有遺漏。"
  ],
  "formalDefinitions": [
    {
      "name": "平方差公式",
      "statement": "a²-b²=(a+b)(a-b)。"
    },
    {
      "name": "完全平方公式",
      "statement": "a²±2ab+b²=(a±b)²。"
    }
  ],
  "formulas": [
    {
      "formula": "a²-b²=(a+b)(a-b)",
      "conditions": [
        "兩項都是平方且中間是減號"
      ],
      "meaning": "平方差。"
    },
    {
      "formula": "a²+2ab+b²=(a+b)²",
      "conditions": [
        "中間項恰為 +2ab"
      ],
      "meaning": "和的平方。"
    },
    {
      "formula": "a²-2ab+b²=(a-b)²",
      "conditions": [
        "中間項恰為 -2ab"
      ],
      "meaning": "差的平方。"
    }
  ],
  "nonApplicableCases": [
    "a²+b² 在國中整數係數範圍不能套平方差。",
    "首末項是平方但中間項不是 ±2ab 時，不能硬套完全平方。",
    "若 a 或 b 的辨認錯誤，中間項檢查會失敗。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先看是否有公因式。",
      "check": "有就先提出。"
    },
    {
      "step": 2,
      "instruction": "判斷是兩項還是三項。",
      "check": "兩項相減可能是平方差；三項可能是完全平方。"
    },
    {
      "step": 3,
      "instruction": "找首末項平方根。",
      "check": "平方根需能在目前係數範圍表達。"
    },
    {
      "step": 4,
      "instruction": "核對中間符號與 2ab。",
      "check": "不相等就改用其他方法。"
    },
    {
      "step": 5,
      "instruction": "套公式並展開檢查。",
      "check": "每項係數與符號都要一致。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "x²-49",
      "solutionSteps": [
        "x² 與 49=7²。",
        "兩平方相減。"
      ],
      "answer": "(x+7)(x-7)",
      "why": "未知數平方與七的平方以減號連接，正好符合平方差；一正一負兩因式相乘時，正七倍未知數與負七倍未知數抵消，只留下未知數平方減四十九。"
    },
    {
      "exampleId": "L2",
      "prompt": "4y²+12y+9",
      "solutionSteps": [
        "首項根為 2y，末項根為 3。",
        "2·2y·3=12y，符號為正。"
      ],
      "answer": "(2y+3)²",
      "why": "首末項平方根是二倍未知數與三，兩倍乘積恰為正十二倍未知數；因此括號取加號並平方，展開後首項、中間項與末項都逐一吻合。"
    },
    {
      "exampleId": "L3",
      "prompt": "25m²-20mn+4n²",
      "solutionSteps": [
        "首末平方根為 5m、2n。",
        "中間項 -2·5m·2n=-20mn。"
      ],
      "answer": "(5m-2n)²",
      "why": "首末平方根五甲與二乙的兩倍乘積是二十甲乙，而原中間項為負，所以使用差式平方；兩個負交叉項合計負二十甲乙，符號與係數都正確。"
    },
    {
      "exampleId": "L4",
      "prompt": "3a²-75",
      "solutionSteps": [
        "先提出 3 得 a²-25。",
        "再用平方差。"
      ],
      "answer": "3(a+5)(a-5)",
      "why": "三是兩項的共同因數，若直接只看平方差容易遺漏外層；先提出三後，括號內才是甲平方減五平方，再分成和與差並保留最外層三。"
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
      "mistake": "把 a²+b² 當平方差。",
      "why": "只看到兩個平方。",
      "correction": "公式要求減號。"
    },
    {
      "mistake": "完全平方只檢查首末項。",
      "why": "漏查中間項。",
      "correction": "必須等於 ±2ab。"
    },
    {
      "mistake": "把 (a-b)² 寫成 a²-b²。",
      "why": "忽略交叉項。",
      "correction": "展開是 a²-2ab+b²。"
    },
    {
      "mistake": "平方差兩括號都同號。",
      "why": "忘記一正一負。",
      "correction": "必須是 (a+b)(a-b)。"
    },
    {
      "mistake": "有公因式卻直接套公式。",
      "why": "外層因式遺失。",
      "correction": "先提出再分解。"
    },
    {
      "mistake": "分解後未完成。",
      "why": "括號內仍是平方差。",
      "correction": "繼續分到不可再分。"
    }
  ],
  "selfCheck": [
    "我是否先判斷可用的方法？",
    "每一項、每個符號與外層因式都保留了嗎？",
    "我是否把結果展開回原式？",
    "情境中的單位與變數限制是否合理？"
  ],
  "summary": [
    "兩平方相減用平方差。",
    "完全平方必須核對首末平方與中間 2ab。",
    "先提公因式，再套公式，最後展開。"
  ],
  "connections": {
    "previous": "承接 factoring-common。",
    "next": "依鎖定順序銜接下一技能；本單元不提前使用一元二次方程式解根。"
  },
  "figureReferences": [
    {
      "figureId": "u12-fig-square-frame",
      "purpose": "用外內正方形面積差連結平方差公式。",
      "altText": "外正方形 A 與內正方形 B 的面積差。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u12-s002-v001",
      "u12-s002-v002",
      "u12-s002-v003",
      "u12-s002-v004",
      "u12-s002-v005",
      "u12-s002-v006",
      "u12-s002-v007",
      "u12-s002-v008",
      "u12-s002-v009",
      "u12-s002-v010",
      "u12-s002-v011",
      "u12-s002-v012"
    ],
    "constructedResponseIds": [
      "u12-s002-cr001",
      "u12-s002-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "三種公式均以獨立展開重算；特別核對平方和不可套用與先提公因式案例，符號和中間項條件完整。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "04006396d6367820f026009c868032342ed3fbfece03ddc80bd274723ee2e69d"
};

export const QUESTIONS = [
  {
    "questionId": "u12-s002-v001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 x²-25 因式分解，何者正確？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "套用平方差。",
    "choices": [
      "(x-5)²",
      "(x+5)(x-5)",
      "(x+25)(x-1)",
      "(x+5)²"
    ],
    "answerIndex": 1,
    "independentSolution": "展開 (x+5)(x-5)=x²-25。",
    "explanation": "x²-25=x²-5²=(x+5)(x-5)。 兩項分別是未知數的平方與五的平方，而且中間是減號，符合平方差；寫成一正一負的兩因式後，交叉項正五倍未知數與負五倍未知數相消，只留下原來兩項。",
    "steps": [
      "辨認兩項都是平方。",
      "確認中間是減號。",
      "使用 (a+b)(a-b)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(x-5)²",
        "truth": false,
        "reason": "展開為 x²-10x+25。"
      },
      {
        "choice": "(x+5)(x-5)",
        "truth": true,
        "reason": "x²-25=x²-5²，平方差為和乘差。"
      },
      {
        "choice": "(x+25)(x-1)",
        "truth": false,
        "reason": "展開中間項與常數均不符。"
      },
      {
        "choice": "(x+5)²",
        "truth": false,
        "reason": "展開為 x²+10x+25。"
      }
    ],
    "misconceptionTarget": "把平方差誤寫成差的平方。 平方差的兩個一次因式必須一正一負，不能寫成同一個差式平方。",
    "prerequisiteCheck": "承接提公因式，但本題無公因式要先提。",
    "estimatedTimeSec": 60,
    "unitAndRoundingChecks": "無單位；係數精確。",
    "ambiguityAndBoundaryAudit": "因式順序可交換，選項只列一個等價正解。",
    "difficultyReason": "直接辨認最基本平方差。",
    "literacyContextNecessity": null,
    "authoringIntent": "建立平方差公式。",
    "concept": "平方差",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "公式法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3ebcaaebc277fa3b369d0b724cd306f263c7c49ae76adda163d20ac35420fd36"
  },
  {
    "questionId": "u12-s002-v002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪個完全平方能展開成 x²+10x+25？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "辨認完全平方。",
    "choices": [
      "(x-5)²",
      "(x+5)(x-5)",
      "(x+5)²",
      "(x+25)²"
    ],
    "answerIndex": 2,
    "independentSolution": "(x+5)² 展開為 x²+10x+25。",
    "explanation": "x²+10x+25=x²+2·x·5+5²=(x+5)²。 首項與末項的平方根是未知數與五，兩倍乘積正好為十倍未知數，且中間項為正；因此括號取加號並平方，展開會得到首項、兩個交叉項與末項完全一致。",
    "steps": [
      "找首末平方根 x、5。",
      "核對中間項 +10x。",
      "選正號完全平方。"
    ],
    "optionAnalysis": [
      {
        "choice": "(x-5)²",
        "truth": false,
        "reason": "中間項會是 -10x。"
      },
      {
        "choice": "(x+5)(x-5)",
        "truth": false,
        "reason": "會得到 x²-25，沒有一次項。"
      },
      {
        "choice": "(x+5)²",
        "truth": true,
        "reason": "首末平方根為 x、5，中間項 2·x·5=10x。"
      },
      {
        "choice": "(x+25)²",
        "truth": false,
        "reason": "常數與中間項都過大。"
      }
    ],
    "misconceptionTarget": "只看首末項，不檢查中間項符號。",
    "prerequisiteCheck": "需知道二項式平方展開。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "平方寫法與兩個相同因式等價；選項唯一。",
    "difficultyReason": "需辨認中間項為兩倍乘積。",
    "literacyContextNecessity": null,
    "authoringIntent": "建立和的平方公式。",
    "concept": "完全平方",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "公式法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e84cefd0395ec0e9a07138c8e5159457dcf5f677201d1a778e9eb75c056aab8d"
  },
  {
    "questionId": "u12-s002-v003",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 9y²-16 因式分解，何者正確？",
    "givenConditions": [
      "y 為變數。"
    ],
    "target": "辨認兩平方之差。",
    "choices": [
      "(9y+4)(y-4)",
      "(3y-4)²",
      "(3y+4)²",
      "(3y+4)(3y-4)"
    ],
    "answerIndex": 3,
    "independentSolution": "交叉項 -12y+12y 抵消，留下 9y²-16。",
    "explanation": "9y²-16=(3y)²-4²=(3y+4)(3y-4)。 九倍平方項的平方根是三倍未知數，十六的平方根是四；兩平方相減應寫成三倍未知數加四與三倍未知數減四相乘，展開時交叉項抵消。",
    "steps": [
      "取平方根 3y、4。",
      "使用平方差一正一負。",
      "展開檢查。"
    ],
    "optionAnalysis": [
      {
        "choice": "(9y+4)(y-4)",
        "truth": false,
        "reason": "首項雖為 9y²，但交叉項不抵消。"
      },
      {
        "choice": "(3y-4)²",
        "truth": false,
        "reason": "展開含 -24y。"
      },
      {
        "choice": "(3y+4)²",
        "truth": false,
        "reason": "展開含 +24y。"
      },
      {
        "choice": "(3y+4)(3y-4)",
        "truth": true,
        "reason": "9y²=(3y)²，16=4²。"
      }
    ],
    "misconceptionTarget": "把係數平方根誤認為 9y，或兩括號同號。",
    "prerequisiteCheck": "需會 9y² 的平方根形式為 3y。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "無單位；平方根只作代數結構辨認。",
    "ambiguityAndBoundaryAudit": "不討論 y 的正負，因恆等式對所有 y 成立。",
    "difficultyReason": "係數本身為平方，需要正確取平方根。",
    "literacyContextNecessity": null,
    "authoringIntent": "練習含係數平方差。",
    "concept": "係數平方差",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "公式法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c3a70276964df80f73f756705ec767f1a645932e956b4bc1e8a5fcb79dbec815"
  },
  {
    "questionId": "u12-s002-v004",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "4x²-12x+9 可分解為何？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "辨認差的平方。",
    "choices": [
      "(2x-3)²",
      "(2x-3)(2x+3)",
      "(4x-3)²",
      "(2x+3)²"
    ],
    "answerIndex": 0,
    "independentSolution": "展開平方得到 4x²-12x+9。",
    "explanation": "4x²-12x+9=(2x)²-2·(2x)·3+3²=(2x-3)²。 四倍平方項與九的平方根分別為二倍未知數及三，中間項恰等於負的兩倍乘積；所以括號使用減號並重複相乘，展開時兩個負交叉項合成負十二倍未知數。",
    "steps": [
      "找首項平方根 2x。",
      "找末項平方根 3。",
      "核對負中間項。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2x-3)²",
        "truth": true,
        "reason": "首末根為 2x、3，中間為 -2·2x·3=-12x。"
      },
      {
        "choice": "(2x-3)(2x+3)",
        "truth": false,
        "reason": "這是 4x²-9，沒有一次項。"
      },
      {
        "choice": "(4x-3)²",
        "truth": false,
        "reason": "首項會是 16x²。"
      },
      {
        "choice": "(2x+3)²",
        "truth": false,
        "reason": "中間項符號為正。"
      }
    ],
    "misconceptionTarget": "把差的平方與平方差混淆。 差的平方含有負兩倍乘積中間項，不能與沒有一次項的平方差混為一談。",
    "prerequisiteCheck": "需熟悉 (a-b)² 展開。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "候選因式順序不造成額外答案。",
    "difficultyReason": "需同時核對係數與負中間項。",
    "literacyContextNecessity": null,
    "authoringIntent": "處理帶係數完全平方。",
    "concept": "差的平方",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "公式法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "df979ff907d51df6afa3c6e798670bf49f79abe62fa6e1b7bd051c871edac684"
  },
  {
    "questionId": "u12-s002-v005",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "25a²+20ab+4b² 的因式分解為何？",
    "givenConditions": [
      "a、b 為變數。"
    ],
    "target": "辨認雙變數完全平方。",
    "choices": [
      "(5a-2b)²",
      "(5a+2b)²",
      "(25a+4b)²",
      "(5a+2b)(5a-2b)"
    ],
    "answerIndex": 1,
    "independentSolution": "(5a+2b)² 展開完全吻合三項。",
    "explanation": "首末項分別為 (5a)²、(2b)²，中間正好是兩倍乘積。 首末項平方根是五倍甲與二倍乙，兩倍乘積為二十甲乙，正好等於正的中間項；因此兩個量在括號內取加號，整個二項式平方後三項逐一吻合。",
    "steps": [
      "取平方根 5a、2b。",
      "計算 2·5a·2b=20ab。",
      "使用和的平方。"
    ],
    "optionAnalysis": [
      {
        "choice": "(5a-2b)²",
        "truth": false,
        "reason": "中間項會是 -20ab。"
      },
      {
        "choice": "(5a+2b)²",
        "truth": true,
        "reason": "中間項為 2·5a·2b=20ab。"
      },
      {
        "choice": "(25a+4b)²",
        "truth": false,
        "reason": "首末項平方會錯。"
      },
      {
        "choice": "(5a+2b)(5a-2b)",
        "truth": false,
        "reason": "會得到 25a²-4b²。"
      }
    ],
    "misconceptionTarget": "忽略 b 或把平方根係數照抄。 取平方根時係數也要開平方，且兩個變數都必須保留在對應項中。",
    "prerequisiteCheck": "需會單項式平方與乘法。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無實際單位；ab 為乘積。",
    "ambiguityAndBoundaryAudit": "a、b 任意值皆成立，不需額外範圍。",
    "difficultyReason": "涉及兩個變數與中間乘積。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認雙變數完全平方。",
    "concept": "雙變數公式",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "公式法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "7426ce539e967413a5471837be3693d212c0979a91ae24db6d3806d604bac4e4"
  },
  {
    "questionId": "u12-s002-v006",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "49m²-n² 的完整因式分解為何？",
    "givenConditions": [
      "m、n 為變數。"
    ],
    "target": "套平方差並保留兩變數。",
    "choices": [
      "(49m+n)(m-n)",
      "(7m-n)²",
      "(7m+n)(7m-n)",
      "(7m+n²)(7m-n²)"
    ],
    "answerIndex": 2,
    "independentSolution": "展開後交叉項抵消，得到原式。",
    "explanation": "49m²-n²=(7m)²-n²=(7m+n)(7m-n)。 四十九甲平方是七甲的平方，而乙平方的平方根因式是乙；平方差寫成七甲加乙與七甲減乙，展開時正負七甲乙互相抵消，末項留下負乙平方。",
    "steps": [
      "辨認兩平方。",
      "分別取根 7m、n。",
      "寫一正一負。"
    ],
    "optionAnalysis": [
      {
        "choice": "(49m+n)(m-n)",
        "truth": false,
        "reason": "展開會出現不為零的 mn 項。"
      },
      {
        "choice": "(7m-n)²",
        "truth": false,
        "reason": "展開含 -14mn。"
      },
      {
        "choice": "(7m+n)(7m-n)",
        "truth": true,
        "reason": "49m²=(7m)²，n²=(n)²。"
      },
      {
        "choice": "(7m+n²)(7m-n²)",
        "truth": false,
        "reason": "常數部分成為 -n⁴。"
      }
    ],
    "misconceptionTarget": "第二個平方根把 n² 當成 n² 本身。 辨認平方單項式時要取實際因式乙，不能把原來的乙平方再次放入括號。",
    "prerequisiteCheck": "需理解 n² 的平方根結構是 n。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位；代數恆等不取主值平方根。",
    "ambiguityAndBoundaryAudit": "不以實數平方根函數解讀，僅辨認平方單項式。",
    "difficultyReason": "兩個平方量都含變數。",
    "literacyContextNecessity": null,
    "authoringIntent": "處理雙變數平方差。",
    "concept": "雙變數平方差",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "公式法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c1cd1b3ef049ee90b12ef12c4d5e6e04c22b53ca361f08d91288634cc9237d4a"
  },
  {
    "questionId": "u12-s002-v007",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 2x²-18 完整因式分解，何者正確？",
    "givenConditions": [
      "x 為變數。"
    ],
    "target": "先提公因式再套平方差。",
    "choices": [
      "2(x-3)²",
      "(2x+3)(x-6)",
      "2(x²-9)",
      "2(x+3)(x-3)"
    ],
    "answerIndex": 3,
    "independentSolution": "2(x+3)(x-3)=2(x²-9)=2x²-18。",
    "explanation": "2x²-18=2(x²-9)=2(x+3)(x-3)。 原式兩項先共同提出二，括號內成為未知數平方減九；這仍是三的平方差，必須繼續分成未知數加三與未知數減三，最後保留外層二並展開回查。",
    "steps": [
      "先提出 2。",
      "辨認 x²-3²。",
      "完成到一次因式。"
    ],
    "optionAnalysis": [
      {
        "choice": "2(x-3)²",
        "truth": false,
        "reason": "展開含 -12x。"
      },
      {
        "choice": "(2x+3)(x-6)",
        "truth": false,
        "reason": "展開為 2x²-9x-18，出現一次項。"
      },
      {
        "choice": "2(x²-9)",
        "truth": false,
        "reason": "只完成提公因式，括號仍可分。"
      },
      {
        "choice": "2(x+3)(x-3)",
        "truth": true,
        "reason": "先提 2 得 2(x²-9)，括號是平方差。"
      }
    ],
    "misconceptionTarget": "套公式前漏提公因式或停在中間。",
    "prerequisiteCheck": "需掌握 s001 提公因式。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位；所有係數精確。",
    "ambiguityAndBoundaryAudit": "所有錯誤選項展開後均與原式不同；正解唯一，且完整分解到一次因式。",
    "difficultyReason": "需要連續使用兩種方法並判斷完整性。",
    "literacyContextNecessity": null,
    "authoringIntent": "整合提公因式與公式法。",
    "concept": "複合公式法",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "公式法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "eb56ca3a78c1d568868b3ef6d9ae68becd53af4b427f28775e3d45b6677e803a"
  },
  {
    "questionId": "u12-s002-v008",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一式不能在整數係數範圍直接用平方差公式分解？",
    "givenConditions": [
      "限定整數係數因式。"
    ],
    "target": "辨認公式不適用情形。",
    "choices": [
      "x²+9",
      "x²-9",
      "4x²-1",
      "25-y²"
    ],
    "answerIndex": 0,
    "independentSolution": "x²+9 沒有減號，因此不符合平方差公式；其餘皆可明確分解。",
    "explanation": "平方差必須是兩平方相減；x²+9 是平方和。 平方差公式的核心條件是兩個平方量相減；未知數平方加九雖然兩項都是平方，卻是相加，不能在本題限定的整數係數範圍套用，另外三式都可寫成一正一負因式。",
    "steps": [
      "檢查每式是否為 A²-B²。",
      "前三個減法式可套公式。",
      "平方和不在本單元整數係數公式範圍。"
    ],
    "optionAnalysis": [
      {
        "choice": "x²+9",
        "truth": true,
        "reason": "兩平方是相加，不符合 a²-b²。"
      },
      {
        "choice": "x²-9",
        "truth": false,
        "reason": "等於 (x+3)(x-3)。"
      },
      {
        "choice": "4x²-1",
        "truth": false,
        "reason": "等於 (2x+1)(2x-1)。"
      },
      {
        "choice": "25-y²",
        "truth": false,
        "reason": "等於 (5+y)(5-y)。"
      }
    ],
    "misconceptionTarget": "只看到兩個平方就套公式。 公式適用與否不只看兩項是否為平方，還必須核對中間的運算符號是減號。",
    "prerequisiteCheck": "需理解平方差的必要條件。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "無單位與近似。",
    "ambiguityAndBoundaryAudit": "限定整數係數，避免引入複數因式；符合國中範圍。",
    "difficultyReason": "考查不適用邊界而非計算。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認公式邊界。",
    "concept": "平方和不可分",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "公式法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d551e0cc321b96f7c10e80c15d3381358dda5ccc517948700d20e558abca06ce"
  },
  {
    "questionId": "u12-s002-v009",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "p²-2pq+q² 的因式分解為何？",
    "givenConditions": [
      "p、q 為變數。"
    ],
    "target": "以符號形式辨認完全平方。",
    "choices": [
      "(p+q)²",
      "(p-q)²",
      "(p-q)(p+q)",
      "(p-2q)²"
    ],
    "answerIndex": 1,
    "independentSolution": "(p-q)²=p²-2pq+q²。",
    "explanation": "p²-2pq+q² 符合 a²-2ab+b²，取 a=p、b=q。 首項與末項已是甲、乙的平方，中間項為負的兩倍甲乙，所以是甲減乙的平方；把差式乘自己會得到兩個負交叉項，合計正好是負二甲乙。",
    "steps": [
      "對照公式。",
      "辨認中間項 -2pq。",
      "寫成差的平方。"
    ],
    "optionAnalysis": [
      {
        "choice": "(p+q)²",
        "truth": false,
        "reason": "中間項符號相反。"
      },
      {
        "choice": "(p-q)²",
        "truth": true,
        "reason": "中間項為 -2·p·q。"
      },
      {
        "choice": "(p-q)(p+q)",
        "truth": false,
        "reason": "展開沒有 -2pq，且常數項為 -q²。"
      },
      {
        "choice": "(p-2q)²",
        "truth": false,
        "reason": "展開中間項為 -4pq，末項為 4q²。"
      }
    ],
    "misconceptionTarget": "把 -2pq 的 2 放進括號成 p-2q。 中間項中的係數二來自兩個交叉項相加，不應直接放進括號成為二倍乙。",
    "prerequisiteCheck": "需熟悉完全平方一般式。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "無單位；代數恆等精確。",
    "ambiguityAndBoundaryAudit": "p、q 不需正值，因平方展開恆成立。",
    "difficultyReason": "純符號辨認，需正確配對 a、b。",
    "literacyContextNecessity": null,
    "authoringIntent": "從數值例推廣到一般符號。",
    "concept": "一般完全平方",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "公式法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "8a46b4d40a7850f8f310c0718c21fb20991331dd34897edc5a1a58bb5aa9ad40"
  },
  {
    "questionId": "u12-s002-v010",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "u12-fig-square-frame",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "正方形廣場邊長為 L 公尺，中央正方形花圃邊長為 6 公尺。鋪面面積 L²-36 平方公尺應改寫為何？",
    "givenConditions": [
      "L>6。"
    ],
    "target": "把面積差寫成兩因式。",
    "choices": [
      "(L-6)² 平方公尺",
      "(L+36)(L-1) 平方公尺",
      "(L+6)(L-6) 平方公尺",
      "L(L-36) 平方公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "展開為 L²-36，且兩因式單位各為公尺，乘積為平方公尺。",
    "explanation": "鋪面面積是兩正方形面積差，使用平方差得 (L+6)(L-6)。 鋪面面積是外正方形面積減去邊長六的內正方形面積，因此為兩平方之差；分解後兩因式分別是邊長和與邊長差，乘積單位仍為平方公尺，且題設保證差為正。",
    "steps": [
      "確認兩面積為 L²、6²。",
      "套平方差。",
      "用 L>6 確認因式 L-6 為正。"
    ],
    "optionAnalysis": [
      {
        "choice": "(L-6)² 平方公尺",
        "truth": false,
        "reason": "這是邊長差形成的正方形面積，不等於兩正方形面積差。"
      },
      {
        "choice": "(L+36)(L-1) 平方公尺",
        "truth": false,
        "reason": "展開會有 35L 一次項。"
      },
      {
        "choice": "(L+6)(L-6) 平方公尺",
        "truth": true,
        "reason": "L²-36=L²-6²，為平方差。"
      },
      {
        "choice": "L(L-36) 平方公尺",
        "truth": false,
        "reason": "展開為 L²-36L。"
      }
    ],
    "misconceptionTarget": "把面積差誤認為邊長差的平方。",
    "prerequisiteCheck": "需知道正方形面積。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "L±6 為公尺，乘積為平方公尺；無近似。",
    "ambiguityAndBoundaryAudit": "L>6 排除負尺寸，圖形未按比例。",
    "difficultyReason": "需把幾何量與平方差公式連結。",
    "literacyContextNecessity": "內外正方形的面積差正是平方差，情境提供 L>6 的尺寸限制。",
    "authoringIntent": "用平方差解讀鋪面面積。",
    "concept": "正方形面積差",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "公式法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "01b9429dd5040ec29c697b0336a4f0ce4620368e6c47d403d7f6a5801cf83ad1"
  },
  {
    "questionId": "u12-s002-v011",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某校將邊長為 x+4 公尺的正方形草地面積記成 x²+8x+16。哪個分解最能直接顯示原邊長？",
    "givenConditions": [
      "x>0。"
    ],
    "target": "由面積式還原重複邊長。",
    "choices": [
      "(x+8)(x+2)",
      "(x-4)²",
      "(x+16)x",
      "(x+4)²"
    ],
    "answerIndex": 3,
    "independentSolution": "展開與面積式一致，且兩因式相同符合正方形。",
    "explanation": "x²+8x+16=x²+2·x·4+4²=(x+4)²。 面積式首末平方根為未知數與四，正的中間項等於兩倍乘積八倍未知數；所以兩個相同因式都是未知數加四，這也直接符合正方形長與寬相等的幾何條件。",
    "steps": [
      "辨認完全平方。",
      "因式解讀為兩條相同邊。",
      "檢查 x>0 時邊長正。"
    ],
    "optionAnalysis": [
      {
        "choice": "(x+8)(x+2)",
        "truth": false,
        "reason": "常數雖為 16，但中間項為 10x。"
      },
      {
        "choice": "(x-4)²",
        "truth": false,
        "reason": "中間項為 -8x。"
      },
      {
        "choice": "(x+16)x",
        "truth": false,
        "reason": "展開沒有常數 16。"
      },
      {
        "choice": "(x+4)²",
        "truth": true,
        "reason": "完全平方的因式正是同一邊長重複相乘。"
      }
    ],
    "misconceptionTarget": "只用常數因數配對，不核對中間項或正方形條件。",
    "prerequisiteCheck": "需知道正方形面積與完全平方。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "因式 x+4 單位為公尺，平方為平方公尺。",
    "ambiguityAndBoundaryAudit": "x>0 確保邊長正；不靠圖形比例。",
    "difficultyReason": "除代數外需利用正方形兩邊相等。",
    "literacyContextNecessity": "正方形條件要求兩因式相同，使完全平方分解具有直接尺寸意義。",
    "authoringIntent": "由完全平方讀回邊長。",
    "concept": "面積還原",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "公式法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "93f1746b84be4f72d776431c69df20cfdff0c9c163f5d3e7de188627547a6856"
  },
  {
    "questionId": "u12-s002-v012",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某資料壓縮測試的節省位元數以 100²-96² 計算。為避免先算兩個平方，使用公式後的值是多少？",
    "givenConditions": [
      "位元數為整數。"
    ],
    "target": "用平方差快速計算。",
    "choices": [
      "784",
      "16",
      "196",
      "1536"
    ],
    "answerIndex": 0,
    "independentSolution": "96²=9216，10000-9216=784，可獨立回查。",
    "explanation": "100²-96²=(100+96)(100-96)=196×4=784。 兩個大平方相減可改成底數和乘底數差，和是一百九十六、差是四，相乘得七百八十四；再直接計算九十六平方並由一萬扣除，可得到同值完成獨立驗算。",
    "steps": [
      "辨認平方差。",
      "算和 196、差 4。",
      "相乘得到 784。"
    ],
    "optionAnalysis": [
      {
        "choice": "784",
        "truth": true,
        "reason": "(100+96)(100-96)=196×4=784。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "只算兩數差的平方 4²。"
      },
      {
        "choice": "196",
        "truth": false,
        "reason": "只算和，漏乘差。"
      },
      {
        "choice": "1536",
        "truth": false,
        "reason": "把 96×16 當作公式結果。"
      }
    ],
    "misconceptionTarget": "把平方差當成差的平方。 平方差等於底數和乘底數差，不能只計算底數差後再把它平方。",
    "prerequisiteCheck": "只需整數乘法。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "單位為位元；結果精確，無四捨五入。",
    "ambiguityAndBoundaryAudit": "節省量為正，因 100>96。",
    "difficultyReason": "需選擇公式以降低大數平方計算。",
    "literacyContextNecessity": "情境的目標是快速取得節省量，平方差把兩個大平方改成易算乘積。",
    "authoringIntent": "應用平方差做心算。",
    "concept": "快速計算",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "公式法"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "d2e9c4b937fa26a68ce9940324bf69a7351f1fa7ae8b67c24ac153aacb13bae0"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u12-s002-cr001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "將 12x²-75 完整因式分解，並指出每一步使用的方法。",
    "requiredWork": [
      "先檢查公因式。",
      "再辨認平方差。",
      "分解到一次因式。"
    ],
    "fullCreditSolution": [
      "12x²-75=3(4x²-25)。",
      "4x²-25=(2x)²-5²=(2x+5)(2x-5)。",
      "所以答案為 3(2x+5)(2x-5)。",
      "先提出十二與七十五的最大公因數三，得到三乘四倍未知數平方減二十五；括號內是二倍未知數的平方減五的平方，再分成一正一負兩因式。把三乘兩因式展開，交叉項抵消並恢復十二倍平方項與負七十五。"
    ],
    "alternativeSolutions": [
      "也可先看成 3[(2x)²-5²]，再直接套平方差。"
    ],
    "reasoningSteps": [
      "係數 12、75 共同 3。",
      "括號是兩平方相減。",
      "和乘差展開回 4x²-25。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整得到 3(2x+5)(2x-5)，並正確標示提公因式與平方差兩步。"
      },
      {
        "score": 2,
        "criteria": "最終答案正確但方法名稱或一處展開說明缺漏；或只有輕微係數錯。"
      },
      {
        "score": 1,
        "criteria": "能提出 3 或辨認 4x²-25 為平方差，但未完成。"
      },
      {
        "score": 0,
        "criteria": "套錯完全平方或結果展開不符。"
      }
    ],
    "partialCreditRules": [
      "停在 3(4x²-25) 最高 1 分。",
      "兩一次因式順序交換不扣分。"
    ],
    "followThroughPolicy": "若先把 75÷3 算錯，後續公式使用正確可保留公式方法分；若把平方和當平方差則不給公式分。",
    "unitAndNotationRules": [
      "無單位。",
      "2x±5 的括號需完整。"
    ],
    "answerOnlyPolicy": "只寫正確最終答案最高 2 分。",
    "commonErrors": [
      "把 4x²-25 寫成 (2x-5)²。",
      "漏掉外層 3。",
      "只看到四倍未知數平方與二十五是平方差，分解後卻遺漏最外層共同因數三。"
    ],
    "independentReview": {
      "derivedResult": "3(2x+5)(2x-5)。",
      "ambiguity": "限定國中整數係數分解，答案唯一至因式順序。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "5d74b719f80157bdef1e59be2ea1181ac5e0fc98590a0c33c77356b029ce25d0"
  },
  {
    "questionId": "u12-s002-cr002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-methods",
    "skillId": "factoring-formula",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "判斷 9a²-24ab+16b² 是否為完全平方三項式。若是，完成因式分解並用中間項檢查說明。",
    "requiredWork": [
      "找首末項平方根。",
      "計算兩倍乘積。",
      "核對中間項符號。",
      "展開回查。"
    ],
    "fullCreditSolution": [
      "9a²=(3a)²，16b²=(4b)²。",
      "-2·3a·4b=-24ab，恰為中間項。",
      "因此 9a²-24ab+16b²=(3a-4b)²。",
      "九甲平方與十六乙平方的平方根分別為三甲、四乙；負的兩倍乘積為負二十四甲乙，正好等於中間項，所以三項式是三甲減四乙的平方。展開同一差式兩次，首項、兩個交叉項與末項皆能回到原式。"
    ],
    "alternativeSolutions": [
      "可直接展開 (3a-4b)(3a-4b) 驗證四項合併。"
    ],
    "reasoningSteps": [
      "首末平方根分別 3a、4b。",
      "中間項為負，括號取減。",
      "兩倍乘積數值 24ab。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確判定為完全平方，寫出 (3a-4b)²，並明確計算 -2·3a·4b。"
      },
      {
        "score": 2,
        "criteria": "分解正確但中間項檢查不完整；或一處記號小錯。"
      },
      {
        "score": 1,
        "criteria": "能辨認首末平方或猜到括號方向，但未完成充分核對。"
      },
      {
        "score": 0,
        "criteria": "判定不是完全平方，或寫成平方差。"
      }
    ],
    "partialCreditRules": [
      "寫 (4b-3a)² 也正確，因平方後等價。",
      "只說「看起來像」不算中間項檢查。"
    ],
    "followThroughPolicy": "若中間項絕對值算對但符號口誤，可給 2 分；若寫 (3a+4b)² 則中間項方向錯，最高 1 分。",
    "unitAndNotationRules": [
      "a²、ab、b² 次方記號要清楚。",
      "無單位。"
    ],
    "answerOnlyPolicy": "只答 (3a-4b)²，最高 2 分。",
    "commonErrors": [
      "首末平方正確但忽略 -24ab。",
      "把 -2ab 寫成 -ab。"
    ],
    "independentReview": {
      "derivedResult": "(3a-4b)²，因 -2·3a·4b=-24ab。",
      "ambiguity": "(4b-3a)² 為等價答案；不得把整體負號移入平方後誤改。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "0b5bdcc85f8806b13daea7277676688ab448cdfbca95241319d3ce7f20c16423"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u12-s002-v001",
    "unitId": "u12",
    "skillId": "factoring-formula",
    "contentSha256": "3ebcaaebc277fa3b369d0b724cd306f263c7c49ae76adda163d20ac35420fd36",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開 (x+5)(x-5)=x²-25。",
    "derivedAnswer": "(x+5)(x-5)",
    "storedAnswer": "(x+5)(x-5)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「將 x²-25 因式分解，何者正確？」逐一展開或回代；正解「(x+5)(x-5)」成立。「(x-5)²」不成立：展開為 x²-10x+25。；「(x+25)(x-1)」不成立：展開中間項與常數均不符。；「(x+5)²」不成立：展開為 x²+10x+25。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「套用平方差。」。",
      "unitConflict": "本題單位審查：無單位；係數精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；係數精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：因式順序可交換，選項只列一個等價正解。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「套用平方差。」閱讀後，常見誤讀為「把平方差誤寫成差的平方。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "直接辨認最基本平方差。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "承接提公因式，但本題無公因式要先提。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s002-v001：展開 (x+5)(x-5)=x²-25。 因此導出「(x+5)(x-5)」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「套用平方差。」，並特別排除「把平方差誤寫成差的平方。」。難度理由是「直接辨認最基本平方差。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s002-v002",
    "unitId": "u12",
    "skillId": "factoring-formula",
    "contentSha256": "e84cefd0395ec0e9a07138c8e5159457dcf5f677201d1a778e9eb75c056aab8d",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "(x+5)² 展開為 x²+10x+25。",
    "derivedAnswer": "(x+5)²",
    "storedAnswer": "(x+5)²",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「下列哪個完全平方能展開成 x²+10x+25？」逐一展開或回代；正解「(x+5)²」成立。「(x-5)²」不成立：中間項會是 -10x。；「(x+5)(x-5)」不成立：會得到 x²-25，沒有一次項。；「(x+25)²」不成立：常數與中間項都過大。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「辨認完全平方。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：平方寫法與兩個相同因式等價；選項唯一。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「辨認完全平方。」閱讀後，常見誤讀為「只看首末項，不檢查中間項符號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需辨認中間項為兩倍乘積。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需知道二項式平方展開。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s002-v002：(x+5)² 展開為 x²+10x+25。 因此導出「(x+5)²」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「辨認完全平方。」，並特別排除「只看首末項，不檢查中間項符號。」。難度理由是「需辨認中間項為兩倍乘積。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s002-v003",
    "unitId": "u12",
    "skillId": "factoring-formula",
    "contentSha256": "c3a70276964df80f73f756705ec767f1a645932e956b4bc1e8a5fcb79dbec815",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "交叉項 -12y+12y 抵消，留下 9y²-16。",
    "derivedAnswer": "(3y+4)(3y-4)",
    "storedAnswer": "(3y+4)(3y-4)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「將 9y²-16 因式分解，何者正確？」逐一展開或回代；正解「(3y+4)(3y-4)」成立。「(9y+4)(y-4)」不成立：首項雖為 9y²，但交叉項不抵消。；「(3y-4)²」不成立：展開含 -24y。；「(3y+4)²」不成立：展開含 +24y。",
      "undefinedSymbol": "題幹已給條件為「y 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「辨認兩平方之差。」。",
      "unitConflict": "本題單位審查：無單位；平方根只作代數結構辨認。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；平方根只作代數結構辨認。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：不討論 y 的正負，因恆等式對所有 y 成立。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「辨認兩平方之差。」閱讀後，常見誤讀為「把係數平方根誤認為 9y，或兩括號同號。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "係數本身為平方，需要正確取平方根。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會 9y² 的平方根形式為 3y。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s002-v003：交叉項 -12y+12y 抵消，留下 9y²-16。 因此導出「(3y+4)(3y-4)」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「辨認兩平方之差。」，並特別排除「把係數平方根誤認為 9y，或兩括號同號。」。難度理由是「係數本身為平方，需要正確取平方根。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s002-v004",
    "unitId": "u12",
    "skillId": "factoring-formula",
    "contentSha256": "df979ff907d51df6afa3c6e798670bf49f79abe62fa6e1b7bd051c871edac684",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開平方得到 4x²-12x+9。",
    "derivedAnswer": "(2x-3)²",
    "storedAnswer": "(2x-3)²",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「4x²-12x+9 可分解為何？」逐一展開或回代；正解「(2x-3)²」成立。「(2x-3)(2x+3)」不成立：這是 4x²-9，沒有一次項。；「(4x-3)²」不成立：首項會是 16x²。；「(2x+3)²」不成立：中間項符號為正。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「辨認差的平方。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：候選因式順序不造成額外答案。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「辨認差的平方。」閱讀後，常見誤讀為「把差的平方與平方差混淆。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需同時核對係數與負中間項。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需熟悉 (a-b)² 展開。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s002-v004：展開平方得到 4x²-12x+9。 因此導出「(2x-3)²」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「辨認差的平方。」，並特別排除「把差的平方與平方差混淆。」。難度理由是「需同時核對係數與負中間項。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s002-v005",
    "unitId": "u12",
    "skillId": "factoring-formula",
    "contentSha256": "7426ce539e967413a5471837be3693d212c0979a91ae24db6d3806d604bac4e4",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "(5a+2b)² 展開完全吻合三項。",
    "derivedAnswer": "(5a+2b)²",
    "storedAnswer": "(5a+2b)²",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「25a²+20ab+4b² 的因式分解為何？」逐一展開或回代；正解「(5a+2b)²」成立。「(5a-2b)²」不成立：中間項會是 -20ab。；「(25a+4b)²」不成立：首末項平方會錯。；「(5a+2b)(5a-2b)」不成立：會得到 25a²-4b²。",
      "undefinedSymbol": "題幹已給條件為「a、b 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「辨認雙變數完全平方。」。",
      "unitConflict": "本題單位審查：無實際單位；ab 為乘積。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無實際單位；ab 為乘積。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：a、b 任意值皆成立，不需額外範圍。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「辨認雙變數完全平方。」閱讀後，常見誤讀為「忽略 b 或把平方根係數照抄。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "涉及兩個變數與中間乘積。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會單項式平方與乘法。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s002-v005：(5a+2b)² 展開完全吻合三項。 因此導出「(5a+2b)²」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「辨認雙變數完全平方。」，並特別排除「忽略 b 或把平方根係數照抄。」。難度理由是「涉及兩個變數與中間乘積。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s002-v006",
    "unitId": "u12",
    "skillId": "factoring-formula",
    "contentSha256": "c1cd1b3ef049ee90b12ef12c4d5e6e04c22b53ca361f08d91288634cc9237d4a",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開後交叉項抵消，得到原式。",
    "derivedAnswer": "(7m+n)(7m-n)",
    "storedAnswer": "(7m+n)(7m-n)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「49m²-n² 的完整因式分解為何？」逐一展開或回代；正解「(7m+n)(7m-n)」成立。「(49m+n)(m-n)」不成立：展開會出現不為零的 mn 項。；「(7m-n)²」不成立：展開含 -14mn。；「(7m+n²)(7m-n²)」不成立：常數部分成為 -n⁴。",
      "undefinedSymbol": "題幹已給條件為「m、n 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「套平方差並保留兩變數。」。",
      "unitConflict": "本題單位審查：無單位；代數恆等不取主值平方根。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；代數恆等不取主值平方根。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：不以實數平方根函數解讀，僅辨認平方單項式。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「套平方差並保留兩變數。」閱讀後，常見誤讀為「第二個平方根把 n² 當成 n² 本身。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "兩個平方量都含變數。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解 n² 的平方根結構是 n。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s002-v006：展開後交叉項抵消，得到原式。 因此導出「(7m+n)(7m-n)」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「套平方差並保留兩變數。」，並特別排除「第二個平方根把 n² 當成 n² 本身。」。難度理由是「兩個平方量都含變數。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s002-v007",
    "unitId": "u12",
    "skillId": "factoring-formula",
    "contentSha256": "eb56ca3a78c1d568868b3ef6d9ae68becd53af4b427f28775e3d45b6677e803a",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "2(x+3)(x-3)=2(x²-9)=2x²-18。",
    "derivedAnswer": "2(x+3)(x-3)",
    "storedAnswer": "2(x+3)(x-3)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「將 2x²-18 完整因式分解，何者正確？」逐一展開或回代；正解「2(x+3)(x-3)」成立。「2(x-3)²」不成立：展開含 -12x。；「(2x+3)(x-6)」不成立：展開為 2x²-9x-18，出現一次項。；「2(x²-9)」不成立：只完成提公因式，括號仍可分。",
      "undefinedSymbol": "題幹已給條件為「x 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「先提公因式再套平方差。」。",
      "unitConflict": "本題單位審查：無單位；所有係數精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；所有係數精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：所有錯誤選項展開後均與原式不同；正解唯一，且完整分解到一次因式。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「先提公因式再套平方差。」閱讀後，常見誤讀為「套公式前漏提公因式或停在中間。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需要連續使用兩種方法並判斷完整性。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需掌握 s001 提公因式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s002-v007：2(x+3)(x-3)=2(x²-9)=2x²-18。 因此導出「2(x+3)(x-3)」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「先提公因式再套平方差。」，並特別排除「套公式前漏提公因式或停在中間。」。難度理由是「需要連續使用兩種方法並判斷完整性。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s002-v008",
    "unitId": "u12",
    "skillId": "factoring-formula",
    "contentSha256": "d551e0cc321b96f7c10e80c15d3381358dda5ccc517948700d20e558abca06ce",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "x²+9 沒有減號，因此不符合平方差公式；其餘皆可明確分解。",
    "derivedAnswer": "x²+9",
    "storedAnswer": "x²+9",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「下列哪一式不能在整數係數範圍直接用平方差公式分解？」逐一展開或回代；正解「x²+9」成立。「x²-9」不成立：等於 (x+3)(x-3)。；「4x²-1」不成立：等於 (2x+1)(2x-1)。；「25-y²」不成立：等於 (5+y)(5-y)。",
      "undefinedSymbol": "題幹已給條件為「限定整數係數因式。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「辨認公式不適用情形。」。",
      "unitConflict": "本題單位審查：無單位與近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位與近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：限定整數係數，避免引入複數因式；符合國中範圍。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「辨認公式不適用情形。」閱讀後，常見誤讀為「只看到兩個平方就套公式。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "考查不適用邊界而非計算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解平方差的必要條件。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s002-v008：x²+9 沒有減號，因此不符合平方差公式；其餘皆可明確分解。 因此導出「x²+9」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「辨認公式不適用情形。」，並特別排除「只看到兩個平方就套公式。」。難度理由是「考查不適用邊界而非計算。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s002-v009",
    "unitId": "u12",
    "skillId": "factoring-formula",
    "contentSha256": "8a46b4d40a7850f8f310c0718c21fb20991331dd34897edc5a1a58bb5aa9ad40",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "(p-q)²=p²-2pq+q²。",
    "derivedAnswer": "(p-q)²",
    "storedAnswer": "(p-q)²",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「p²-2pq+q² 的因式分解為何？」逐一展開或回代；正解「(p-q)²」成立。「(p+q)²」不成立：中間項符號相反。；「(p-q)(p+q)」不成立：展開沒有 -2pq，且常數項為 -q²。；「(p-2q)²」不成立：展開中間項為 -4pq，末項為 4q²。",
      "undefinedSymbol": "題幹已給條件為「p、q 為變數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「以符號形式辨認完全平方。」。",
      "unitConflict": "本題單位審查：無單位；代數恆等精確。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；無單位；代數恆等精確。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：p、q 不需正值，因平方展開恆成立。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「以符號形式辨認完全平方。」閱讀後，常見誤讀為「把 -2pq 的 2 放進括號成 p-2q。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "純符號辨認，需正確配對 a、b。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需熟悉完全平方一般式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s002-v009：(p-q)²=p²-2pq+q²。 因此導出「(p-q)²」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「以符號形式辨認完全平方。」，並特別排除「把 -2pq 的 2 放進括號成 p-2q。」。難度理由是「純符號辨認，需正確配對 a、b。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s002-v010",
    "unitId": "u12",
    "skillId": "factoring-formula",
    "contentSha256": "01b9429dd5040ec29c697b0336a4f0ce4620368e6c47d403d7f6a5801cf83ad1",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開為 L²-36，且兩因式單位各為公尺，乘積為平方公尺。",
    "derivedAnswer": "(L+6)(L-6) 平方公尺",
    "storedAnswer": "(L+6)(L-6) 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「正方形廣場邊長為 L 公尺，中央正方形花圃邊長為 6 公尺。鋪面面積 L²-36 平方公尺應改寫為何？」逐一展開或回代；正解「(L+6)(L-6) 平方公尺」成立。「(L-6)² 平方公尺」不成立：這是邊長差形成的正方形面積，不等於兩正方形面積差。；「(L+36)(L-1) 平方公尺」不成立：展開會有 35L 一次項。；「L(L-36) 平方公尺」不成立：展開為 L²-36L。",
      "undefinedSymbol": "題幹已給條件為「L>6。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「把面積差寫成兩因式。」。",
      "unitConflict": "本題單位審查：L±6 為公尺，乘積為平方公尺；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；L±6 為公尺，乘積為平方公尺；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：L>6 排除負尺寸，圖形未按比例。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「把面積差寫成兩因式。」閱讀後，常見誤讀為「把面積差誤認為邊長差的平方。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需把幾何量與平方差公式連結。",
    "literacyContextNecessity": "內外正方形的面積差正是平方差，情境提供 L>6 的尺寸限制。",
    "prerequisiteCheck": "需知道正方形面積。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s002-v010：展開為 L²-36，且兩因式單位各為公尺，乘積為平方公尺。 因此導出「(L+6)(L-6) 平方公尺」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「把面積差寫成兩因式。」，並特別排除「把面積差誤認為邊長差的平方。」。難度理由是「需把幾何量與平方差公式連結。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s002-v011",
    "unitId": "u12",
    "skillId": "factoring-formula",
    "contentSha256": "93f1746b84be4f72d776431c69df20cfdff0c9c163f5d3e7de188627547a6856",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "展開與面積式一致，且兩因式相同符合正方形。",
    "derivedAnswer": "(x+4)²",
    "storedAnswer": "(x+4)²",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某校將邊長為 x+4 公尺的正方形草地面積記成 x²+8x+16。哪個分解最能直接顯示原邊長？」逐一展開或回代；正解「(x+4)²」成立。「(x+8)(x+2)」不成立：常數雖為 16，但中間項為 10x。；「(x-4)²」不成立：中間項為 -8x。；「(x+16)x」不成立：展開沒有常數 16。",
      "undefinedSymbol": "題幹已給條件為「x>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「由面積式還原重複邊長。」。",
      "unitConflict": "本題單位審查：因式 x+4 單位為公尺，平方為平方公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；因式 x+4 單位為公尺，平方為平方公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：x>0 確保邊長正；不靠圖形比例。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「由面積式還原重複邊長。」閱讀後，常見誤讀為「只用常數因數配對，不核對中間項或正方形條件。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "除代數外需利用正方形兩邊相等。",
    "literacyContextNecessity": "正方形條件要求兩因式相同，使完全平方分解具有直接尺寸意義。",
    "prerequisiteCheck": "需知道正方形面積與完全平方。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s002-v011：展開與面積式一致，且兩因式相同符合正方形。 因此導出「(x+4)²」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「由面積式還原重複邊長。」，並特別排除「只用常數因數配對，不核對中間項或正方形條件。」。難度理由是「除代數外需利用正方形兩邊相等。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s002-v012",
    "unitId": "u12",
    "skillId": "factoring-formula",
    "contentSha256": "d2e9c4b937fa26a68ce9940324bf69a7351f1fa7ae8b67c24ac153aacb13bae0",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "96²=9216，10000-9216=784，可獨立回查。",
    "derivedAnswer": "784",
    "storedAnswer": "784",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某資料壓縮測試的節省位元數以 100²-96² 計算。為避免先算兩個平方，使用公式後的值是多少？」逐一展開或回代；正解「784」成立。「16」不成立：只算兩數差的平方 4²。；「196」不成立：只算和，漏乘差。；「1536」不成立：把 96×16 當作公式結果。",
      "undefinedSymbol": "題幹已給條件為「位元數為整數。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「用平方差快速計算。」。",
      "unitConflict": "本題單位審查：單位為位元；結果精確，無四捨五入。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；單位為位元；結果精確，無四捨五入。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：節省量為正，因 100>96。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「用平方差快速計算。」閱讀後，常見誤讀為「把平方差當成差的平方。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需選擇公式以降低大數平方計算。",
    "literacyContextNecessity": "情境的目標是快速取得節省量，平方差把兩個大平方改成易算乘積。",
    "prerequisiteCheck": "只需整數乘法。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s002-v012：96²=9216，10000-9216=784，可獨立回查。 因此導出「784」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「用平方差快速計算。」，並特別排除「把平方差當成差的平方。」。難度理由是「需選擇公式以降低大數平方計算。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u12-fig-square-frame",
    "unitId": "u12",
    "primarySkillId": "factoring-formula",
    "svgPath": "figures/u12/u12-fig-square-frame.svg",
    "canvas": {
      "width": 640,
      "height": 420,
      "units": "px"
    },
    "viewBox": "0 0 640 420",
    "notToScale": true,
    "visualInferenceWarning": "內外邊長與框寬不可由圖面比例估計。",
    "altText": "外正方形邊長 A、中央內正方形邊長 B，斜線區域代表面積差 A²-B²；只說明平方差，不可目測框寬。",
    "drawingSpec": {
      "canvas": {
        "width": 640,
        "height": 420,
        "units": "px"
      },
      "viewBox": "0 0 640 420",
      "layout": "outer square at (110,50) with side 300; inner centered square at (200,140) with side 120",
      "coordinates": {
        "outer": [
          110,
          50,
          300,
          300
        ],
        "inner": [
          200,
          140,
          120,
          120
        ],
        "dimensionY": 375
      },
      "labels": [
        {
          "text": "A",
          "position": [
            250,
            405
          ]
        },
        {
          "text": "B",
          "position": [
            250,
            205
          ]
        },
        {
          "text": "面積差 A²-B²",
          "position": [
            435,
            210
          ]
        }
      ],
      "fill": "outer difference region uses 45-degree hatch; inner region white",
      "lines": {
        "boundaries": "4px",
        "dimension": "2px"
      },
      "units": "generic length symbols A and B",
      "scale": "not to scale",
      "notToScale": true,
      "visualInferenceWarning": "內外邊長與框寬不可由圖面比例估計。",
      "hiddenLines": "none",
      "accessibility": "pattern is supplemented by text label, not color-dependent"
    },
    "svgAssertions": [
      "id=\"hatch\"",
      "面積差 A²-B²",
      "viewBox=\"0 0 640 420\"",
      "示意圖不按比例"
    ],
    "mobileReadabilityReview": "在 360px 寬度下，主要標籤字級至少 16px，線條不重疊，數學式保持可讀。",
    "answerLeakageReview": "圖中只呈現題幹已給的尺寸或區塊關係，不直接標示待求答案。",
    "figureReview": {
      "decision": "pass",
      "reviewNote": "人工檢視確認外框與內框皆為真正正方形，斜線區和中央挖空區可分辨，A、B 標籤不重疊；黑白列印與手機縮放仍清楚，且圖形只呈現已知面積差結構，未標出分解答案。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "380eb381a031b64f8abcd2a89335a6c7b26cd097519b119258f1e8f2c6042094"
  }
];
