// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s004-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-elements",
  "skillId": "triangle-angle-sum",
  "lockedSkillTitle": "三角形內角和",
  "title": "三角形內角和：三個內角固定合為 180°",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能利用三角形內角和求未知角。",
    "能判斷三個角度能否成為三角形內角。",
    "能處理含未知數的三角形角度。",
    "能利用外角與不相鄰兩內角的關係。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "parallel-perpendicular-angles"
    ],
    "bridgeExplanation": "由平角 180° 與相交線角度關係，進入三角形三內角的固定總和。"
  },
  "prerequisites": [
    {
      "skillId": "parallel-perpendicular-angles",
      "requiredLevel": "能使用鄰補角和為 180°，並解一元一次等式。"
    }
  ],
  "glossary": [
    {
      "term": "內角",
      "definition": "三角形內部由兩邊形成的角。"
    },
    {
      "term": "外角",
      "definition": "延長三角形一邊後，延長線與相鄰邊形成的外部角。"
    },
    {
      "term": "不相鄰內角",
      "definition": "與指定外角不共邊的兩個內角。"
    }
  ],
  "notation": [
    {
      "symbol": "∠A+∠B+∠C=180°",
      "meaning": "三角形 ABC 的三內角和。"
    },
    {
      "symbol": "外角=兩個不相鄰內角和",
      "meaning": "由內角和與鄰補角推得。"
    }
  ],
  "conceptDevelopment": [
    "任何平面三角形，不論形狀、大小或方向，三個內角總和都是 180°。",
    "若已知兩角，第三角等於 180° 減去兩已知角；若三角都以代數式表示，就把三式相加等於 180°。",
    "三個正角若要成為三角形內角，除了總和 180°，每一角還必須大於 0° 且小於 180°。",
    "外角和相鄰內角形成平角，因此外角等於另外兩個不相鄰內角之和。"
  ],
  "formalDefinitions": [
    {
      "name": "三角形內角和定理",
      "statement": "任一平面三角形三內角度數和為 180°。"
    },
    {
      "name": "三角形外角性質",
      "statement": "一個外角等於與它不相鄰的兩內角度數和。"
    }
  ],
  "formulas": [
    {
      "formula": "A+B+C=180°",
      "conditions": [
        "A、B、C 為同一三角形的三內角"
      ],
      "meaning": "求未知內角。"
    },
    {
      "formula": "第三角=180°-第一角-第二角",
      "conditions": [
        "兩已知角皆為有效內角且和小於 180°"
      ],
      "meaning": "直接求第三角。"
    },
    {
      "formula": "外角=遠端內角1+遠端內角2",
      "conditions": [
        "外角由一邊延長形成"
      ],
      "meaning": "用兩不相鄰內角求外角。"
    }
  ],
  "invalidUseCases": [
    "不能把四邊形或空間三角面以外的角直接套用 180°。",
    "若兩已知角和已達 180°，不存在正的第三內角。",
    "外角不是三個內角的總和。",
    "題目若給的是頂點外側角，要先判斷是否為外角或對頂角。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "確認三個角屬於同一三角形，並分清內角與外角。",
      "check": "角的位置或文字標示必須一致，外角不能直接混入內角和。"
    },
    {
      "step": 2,
      "instruction": "若處理三個內角，先列出總和 180°。",
      "check": "所有括號與角度單位都要完整保留。"
    },
    {
      "step": 3,
      "instruction": "若處理外角，辨認它的兩個不相鄰內角。",
      "check": "外角等於兩遠端內角和，並與相鄰內角互補。"
    },
    {
      "step": 4,
      "instruction": "代入已知角、比例或代數式求未知量。",
      "check": "比例先求總份數，代數式先合併同類項。"
    },
    {
      "step": 5,
      "instruction": "代回檢查每個內角皆為正且三角和為 180°。",
      "check": "若有外角，再核對外角與兩遠端角和相等。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "三角形兩內角為 48°、67°，第三角為何？",
      "solutionSteps": [
        "第三角＝180°－48°－67°。",
        "計算得 65°。"
      ],
      "answer": "65°。",
      "why": "三角形的三個內角合為 180°，因此只要從總和扣除兩個已知角，就能唯一決定第三角。48°＋67°＝115°，再用 180°－115° 得 65°；回代總和可防止連續減法出錯。"
    },
    {
      "exampleId": "L2",
      "prompt": "三角形三內角為 x°、2x°、3x°，求 x。",
      "solutionSteps": [
        "x＋2x＋3x＝180。",
        "6x＝180，x＝30。"
      ],
      "answer": "x＝30。",
      "why": "三個代數式都代表內角，必須合計 180°，所以同類項相加成 6x。求得 x＝30 後，實際三角為 30°、60°、90°，每角皆為正且總和 180°，證明代數解對應有效三角形。"
    },
    {
      "exampleId": "L3",
      "prompt": "30°、70°、80° 能否成為同一三角形的三內角？",
      "solutionSteps": [
        "三角和為 30＋70＋80＝180。",
        "三角皆為正且小於 180。"
      ],
      "answer": "可以。",
      "why": "判斷三個角能否成為三角形內角，要同時檢查總和為 180° 與每一角皆大於 0°。本組三角總和正好 180°，且沒有零度或負角，因此存在對應三角形，不能只憑外觀猜測。"
    },
    {
      "exampleId": "L4",
      "prompt": "某三角形一外角為 125°，其中一個不相鄰內角為 52°，另一個為何？",
      "solutionSteps": [
        "外角等於兩不相鄰內角和。",
        "125°－52°＝73°。"
      ],
      "answer": "73°。",
      "why": "三角形外角等於兩個不相鄰內角的總和，所以未知遠端角與 52° 合為 125°。相減得到 73°；這裡不能把 125° 當成內角加入三角和，因為它位於三角形外部。"
    }
  ],
  "levelConnections": {
    "basic": "由兩角直接求第三角。",
    "standard": "判斷角組是否可構成三角形。",
    "advanced": "用代數式與外角性質求角。",
    "literacy": "屋架、標誌或折線轉角的文字條件可轉成三角形角度總和。"
  },
  "commonMistakes": [
    {
      "mistake": "用 360° 當三角形內角和。",
      "why": "把四邊形或一周角混入。",
      "correction": "三角形固定是 180°。"
    },
    {
      "mistake": "只算 180°-其中一角。",
      "why": "漏掉另一已知內角。",
      "correction": "先列三角總和式再代入。"
    },
    {
      "mistake": "三角和為 180° 就忽略負角。",
      "why": "未檢查角度範圍。",
      "correction": "每一內角必須大於 0°。"
    },
    {
      "mistake": "把外角加進三內角和。",
      "why": "混淆內外位置。",
      "correction": "外角與相鄰內角互補，不是第四個內角。"
    },
    {
      "mistake": "代數式漏括號。",
      "why": "把整個角度式拆錯。",
      "correction": "每個角度表達式完整相加。"
    },
    {
      "mistake": "求出第三角後漏寫 °。",
      "why": "單位不完整。",
      "correction": "角度答案附度數符號。"
    }
  ],
  "selfCheckItems": [
    "三個角是否同屬一個三角形？",
    "我是否用 180° 而不是 360°？",
    "每個角是否為正且小於 180°？",
    "若有外角，我是否辨認相鄰與不相鄰內角？"
  ],
  "conciseSummary": [
    "三角形內角和為 180°。",
    "第三角等於 180° 減兩已知角。",
    "角組除總和外還須每角為正。",
    "外角等於兩個不相鄰內角和。"
  ],
  "connections": {
    "previous": "上一技能的平角與鄰補角提供 180° 的角度關係。",
    "next": [
      "下一技能使用內角大小將三角形分為銳角、直角與鈍角三角形。"
    ]
  },
  "figureReferences": [
    "u08-s004-fig001"
  ],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "四個例題逐一驗算角度總和；30°+70°+80°=180° 且皆為正，外角例題 52°+73°=125°，沒有引入三角形全等或相似。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "376711885668b41d27d82f9c644cb30cc3e96c61137fa5ec030c0ddf6f852523"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s004-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "三角形的兩個內角為 52° 與 61°，第三個內角是多少？",
    "givenConditions": [
      "同一三角形內角 52°、61°。"
    ],
    "target": "由兩內角求第三角",
    "choices": [
      "57°",
      "77°",
      "113°",
      "67°"
    ],
    "answerIndex": 3,
    "independentSolution": "計算第三角為 67°，驗算 52+61+67=180。",
    "explanation": "三角形三個內角的總和固定為 180°。已知兩角和為 52°＋61°＝113°，第三角便是 180°－113°＝67°；回代 52°＋61°＋67°＝180°，且三角都為正角，因此確實能形成題述三角形。",
    "steps": [
      "先算已知兩角總和：52°＋61°＝113°。",
      "用三角形內角和求第三角：180°－113°＝67°。",
      "將三角相加驗算為 180°，所以答案為 67°。"
    ],
    "optionAnalysis": [
      {
        "choice": "57°",
        "truth": false,
        "reason": "52+61+57=170，不足 180。"
      },
      {
        "choice": "77°",
        "truth": false,
        "reason": "三角和會成 190°。"
      },
      {
        "choice": "113°",
        "truth": false,
        "reason": "這是兩已知角的和，不是第三角。"
      },
      {
        "choice": "67°",
        "truth": true,
        "reason": "第三角=180°−52°−61°=67°。"
      }
    ],
    "misconceptionTarget": "只把兩個已知角相加當作第三角，或在一百八十度相減時把六十七算成七十七。",
    "prerequisiteCheck": "能使用角度加減。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位均為 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接套用三角形內角和。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "ae93de296bd24bb448b372b6ed151b00109cc344542431ec73f92ec505e204fd"
  },
  {
    "questionId": "u08-s004-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "下列哪一組可以是同一三角形的三個內角？",
    "givenConditions": [
      "每組列出三個角度。"
    ],
    "target": "判斷三角形內角組是否可行",
    "choices": [
      "45°、65°、70°",
      "60°、60°、70°",
      "30°、40°、100°",
      "0°、90°、90°"
    ],
    "answerIndex": 0,
    "independentSolution": "只有 45°、65°、70° 同時滿足總和與正角條件。",
    "explanation": "三個數要成為三角形內角，必須每角都大於 0° 且總和為 180°。45°＋65°＋70°＝180° 且皆為正；其他組總和為 190°、170°，或含 0°，所以只有第一組可行，兩項必要條件缺一不可。",
    "steps": [
      "逐組計算三個角的總和是否為 180°。",
      "再檢查每一角是否都嚴格大於 0°。",
      "只有 45°、65°、70° 同時通過兩項條件。"
    ],
    "optionAnalysis": [
      {
        "choice": "45°、65°、70°",
        "truth": true,
        "reason": "45+65+70=180，且三角皆大於 0°。"
      },
      {
        "choice": "60°、60°、70°",
        "truth": false,
        "reason": "總和 190°。"
      },
      {
        "choice": "30°、40°、100°",
        "truth": false,
        "reason": "總和 170°。"
      },
      {
        "choice": "0°、90°、90°",
        "truth": false,
        "reason": "雖總和 180°，但 0° 不是正內角。"
      }
    ],
    "misconceptionTarget": "只檢查三角總和卻接受零度角，或只看每角小於一百八十度而忽略總和條件。",
    "prerequisiteCheck": "能辨認正角與三角形內角和。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位一致。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需同時檢查總和與角度邊界。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "109b532323552c94fd4ee62314ae7b9dbd8f7828a8aabfd6d4eca8f9eb48d820"
  },
  {
    "questionId": "u08-s004-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個直角三角形中，一個銳角為 34°，另一個銳角為多少？",
    "givenConditions": [
      "一角 90°。",
      "另一角 34°。"
    ],
    "target": "求直角三角形另一銳角",
    "choices": [
      "34°",
      "56°",
      "66°",
      "146°"
    ],
    "answerIndex": 1,
    "independentSolution": "剩餘角為 56°，且 34+56=90。",
    "explanation": "直角三角形已有一角 90°，另一個銳角是 34°。利用三角形內角和，剩餘角為 180°－90°－34°＝56°；也可先知兩銳角互餘，再算 90°－34°＝56°，兩種方法得到相同且唯一的結果。",
    "steps": [
      "寫出三角形內角總和 180°。",
      "扣除直角 90° 與已知銳角 34°。",
      "得到另一銳角 56°，並驗算 90°＋34°＋56°＝180°。"
    ],
    "optionAnalysis": [
      {
        "choice": "34°",
        "truth": false,
        "reason": "只有等腰直角三角形才兩銳角相等。"
      },
      {
        "choice": "56°",
        "truth": true,
        "reason": "三角和 180°，扣除直角 90° 與 34°，得 56°。"
      },
      {
        "choice": "66°",
        "truth": false,
        "reason": "34+66+90=190。"
      },
      {
        "choice": "146°",
        "truth": false,
        "reason": "146° 不是直角三角形中的銳角。"
      }
    ],
    "misconceptionTarget": "只用一百八十度減三十四度而忘了扣除直角，或誤認兩個銳角必須相等。",
    "prerequisiteCheck": "能辨認直角與三角形內角和。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "兩步減法的基礎應用。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "aa90da417c76d052abc3bfad3ae5bf0915f3c9a7246a05b4ce1613382a2b39b5"
  },
  {
    "questionId": "u08-s004-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "u08-s004-fig001",
    "drawingSpecRef": "u08-s004-draw001",
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_HUMAN_AUTHORED_FIGURE",
    "text": "三角形三內角分別為 x°、(x+20)°、(2x−10)°。x 為何？",
    "givenConditions": [
      "三內角以 x 表示。"
    ],
    "target": "由三個角度式求參數",
    "choices": [
      "40",
      "45",
      "42.5",
      "85"
    ],
    "answerIndex": 2,
    "independentSolution": "代回角為 42.5°、62.5°、75°，總和 180°。",
    "explanation": "三個代數式都是同一三角形內角，所以 x＋(x＋20)＋(2x－10)＝180。整理為 4x＋10＝180，得 x＝42.5。代回三角為 42.5°、62.5°、75°，總和 180°，每個角也都介於零度與一百八十度之間，結果有效。",
    "steps": [
      "依內角和列式 x＋(x＋20)＋(2x－10)＝180。",
      "合併得 4x＋10＝180，解出 x＝42.5。",
      "代回三角並相加為 180°，確認各角皆為正角。"
    ],
    "optionAnalysis": [
      {
        "choice": "40",
        "truth": false,
        "reason": "代回三角和 170°。"
      },
      {
        "choice": "45",
        "truth": false,
        "reason": "代回三角和 190°。"
      },
      {
        "choice": "42.5",
        "truth": true,
        "reason": "x+(x+20)+(2x−10)=180，4x+10=180，x=42.5。"
      },
      {
        "choice": "85",
        "truth": false,
        "reason": "把 2x=85 的中間結果當答案。"
      }
    ],
    "misconceptionTarget": "合併正二十與負十時漏掉常數十，或依未按比例的三角形外觀猜測角度。",
    "prerequisiteCheck": "能解一元一次方程。",
    "estimatedTimeSec": 90,
    "unitCheck": "x 無單位；代回角度為 °。",
    "roundingCheck": "42.5 為精確值，不需近似。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "含三個代數式且答案非整數。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "d915da0f376a4112262f376f4307fbb9139e245e9ba214d82f693d37f4d3406b"
  },
  {
    "questionId": "u08-s004-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "某三角形的一個外角為 138°，一個不相鄰內角為 59°，另一個不相鄰內角是多少？",
    "givenConditions": [
      "外角 138°。",
      "一個不相鄰內角 59°。"
    ],
    "target": "由外角與一遠端內角求另一角",
    "choices": [
      "43°",
      "121°",
      "197°",
      "79°"
    ],
    "answerIndex": 3,
    "independentSolution": "79° 與 59° 合為外角 138°。",
    "explanation": "三角形的一個外角等於兩個不相鄰內角的和。設另一個不相鄰內角為 x°，便有 59°＋x＝138°，解得 x＝79°。59°＋79°＝138°，與外角標示一致，也證明沒有把相鄰內角誤代入。",
    "steps": [
      "辨認 59° 與未知角都是該外角的不相鄰內角。",
      "使用外角性質列式 59°＋x＝138°。",
      "解得 x＝79°，再把兩遠端內角相加驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "43°",
        "truth": false,
        "reason": "這是 180−138，為相鄰內角。"
      },
      {
        "choice": "121°",
        "truth": false,
        "reason": "這是 180−59，與所求遠端角無關。"
      },
      {
        "choice": "197°",
        "truth": false,
        "reason": "將兩角誤相加。"
      },
      {
        "choice": "79°",
        "truth": true,
        "reason": "外角等於兩個不相鄰內角和，所以 138−59=79。"
      }
    ],
    "misconceptionTarget": "把外角與相鄰內角混在遠端內角關係中，或用一百八十度減五十九度求答案。",
    "prerequisiteCheck": "能辨認外角與不相鄰內角。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位一致。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需選對外角關係而非只用補角。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "b10d5bedb85a6b846362a64d439ad7b1b4a41d4c664f33e66cfd95d8726b8486"
  },
  {
    "questionId": "u08-s004-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "等腰三角形的頂角為 46°，兩個底角各是多少？",
    "givenConditions": [
      "等腰三角形。",
      "頂角 46°。"
    ],
    "target": "求等腰三角形底角",
    "choices": [
      "67°",
      "46°",
      "72°",
      "134°"
    ],
    "answerIndex": 0,
    "independentSolution": "兩底角各 67°，驗算 46+67+67=180。",
    "explanation": "等腰三角形的兩個底角相等。扣除頂角 46° 後，兩底角總和為 180°－46°＝134°，再平均分成兩角，各為 134°÷2＝67°；驗算 46°＋67°＋67°＝180°，並且兩底角確實相等，符合定義。",
    "steps": [
      "利用內角和求兩底角總和：180°－46°＝134°。",
      "由等腰三角形底角相等，計算 134°÷2＝67°。",
      "以 46°＋67°＋67°＝180° 驗算，所以每個底角 67°。"
    ],
    "optionAnalysis": [
      {
        "choice": "67°",
        "truth": true,
        "reason": "兩底角相等，總和 180−46=134°，每個 67°。"
      },
      {
        "choice": "46°",
        "truth": false,
        "reason": "等腰不表示三角皆相等。"
      },
      {
        "choice": "72°",
        "truth": false,
        "reason": "46+72+72=190。"
      },
      {
        "choice": "134°",
        "truth": false,
        "reason": "這是兩底角總和。"
      }
    ],
    "misconceptionTarget": "把頂角四十六度直接當成底角，或求得兩底角總和一百三十四度後忘記除以二。",
    "prerequisiteCheck": "能使用等腰底角相等。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "兩步運算並使用分類性質。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "e5e41f7c65976782152ee96119ae07bf209330608f733032fec399bdabc28513"
  },
  {
    "questionId": "u08-s004-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "三角形三內角的度數比為 2：3：4，最大角是多少？",
    "givenConditions": [
      "三內角比 2：3：4。"
    ],
    "target": "由內角比求最大角",
    "choices": [
      "20°",
      "80°",
      "60°",
      "90°"
    ],
    "answerIndex": 1,
    "independentSolution": "三角為 40°、60°、80°，最大 80°。",
    "explanation": "三個內角比 2：3：4，共有 2＋3＋4＝9 份。三角形內角和 180° 平均分配後，每份為 20°；最大角占 4 份，所以是 4×20°＝80°，其餘角為 40°、60°，三角相加也正好等於一百八十度。",
    "steps": [
      "將比例份數相加，得到 9 份。",
      "用 180°÷9 求得每份 20°。",
      "最大比例為 4 份，故最大角 4×20°＝80°。"
    ],
    "optionAnalysis": [
      {
        "choice": "20°",
        "truth": false,
        "reason": "這是每一份的度數。"
      },
      {
        "choice": "80°",
        "truth": true,
        "reason": "總份數 9，每份 20°，最大角 4×20°=80°。"
      },
      {
        "choice": "60°",
        "truth": false,
        "reason": "這是中間角。"
      },
      {
        "choice": "90°",
        "truth": false,
        "reason": "若最大角 90°，比例總和會超過 180°。"
      }
    ],
    "misconceptionTarget": "把比例中的四直接當作角度，或只用二加三而漏掉第三個比例份數。",
    "prerequisiteCheck": "能使用比例與內角和。",
    "estimatedTimeSec": 90,
    "unitCheck": "比例無單位，結果為 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需三步比例運算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "a4972f312f1bcc6f095582cf0763098f572c99eb0b70dc84324a9f6e7138da67"
  },
  {
    "questionId": "u08-s004-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "某三角形的三個內角中，一角為 50°，另外兩角的度數比為 2：3。較小的那一角是多少？",
    "givenConditions": [
      "三角形一角50°。",
      "其餘兩角比2：3。"
    ],
    "target": "結合內角和與比例求未知角",
    "choices": [
      "50°",
      "65°",
      "52°",
      "78°"
    ],
    "answerIndex": 2,
    "independentSolution": "180−50=130；130÷5×2=52，所以較小角為52°。",
    "explanation": "先扣除已知角 50°，另外兩角總和為 130°。它們的比為 2：3，共 5 份，所以每份 130°÷5＝26°；較小角占 2 份，為 52°，較大角則為 78°，與原來二比三的大小關係完全一致。",
    "steps": [
      "求另外兩角總和：180°－50°＝130°。",
      "比例 2：3 共 5 份，每份為 130°÷5＝26°。",
      "較小角占 2 份，算得 2×26°＝52°，三角和可回代驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "50°",
        "truth": false,
        "reason": "50°是已知第三角，不是比例中的較小角。"
      },
      {
        "choice": "65°",
        "truth": false,
        "reason": "65°是剩餘130°的一半，未依2：3分配。"
      },
      {
        "choice": "52°",
        "truth": true,
        "reason": "另外兩角和為130°，共5份，每份26°，較小角為2×26°=52°。"
      },
      {
        "choice": "78°",
        "truth": false,
        "reason": "78°是比例中的較大角。"
      }
    ],
    "misconceptionTarget": "直接把整個一百八十度依二比三分配，忘記先扣掉已知的五十度內角。",
    "prerequisiteCheck": "需會三角形內角和及簡單比例分配。",
    "estimatedTimeSec": 120,
    "unitCheck": "所有數值為角度，答案使用度數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需先求剩餘角和再依比例拆分，屬進階題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "24dfac889368b8bf4d728195cb85d057b2b9f3f323bfac08f3fc12d1673aeff3"
  },
  {
    "questionId": "u08-s004-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "已知三角形一外角為 (4x+10)°，兩個不相鄰內角為 (x+15)° 與 (2x+5)°。x 為何？",
    "givenConditions": [
      "外角與兩遠端內角代數式明示。"
    ],
    "target": "由外角代數式求參數",
    "choices": [
      "5",
      "15",
      "30",
      "10"
    ],
    "answerIndex": 3,
    "independentSolution": "代回外角 50°，兩遠端內角 25°、25°，總和 50°。",
    "explanation": "外角等於兩個不相鄰內角和，所以 4x＋10＝(x＋15)＋(2x＋5)。右側整理為 3x＋20，解得 x＝10。代回外角 50°，兩遠端內角各 25°，相加確為 50°，各角也都落在有效範圍內。",
    "steps": [
      "依外角性質列式 4x＋10＝(x＋15)＋(2x＋5)。",
      "整理得 4x＋10＝3x＋20，因此 x＝10。",
      "代回得到外角 50°、兩遠端角 25°、25°，完成驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "代回外角 30°，遠端內角和 45°。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "代回外角 70°，遠端內角和 80°。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "把移項後的常數差當 x。"
      },
      {
        "choice": "10",
        "truth": true,
        "reason": "外角等於兩遠端內角和：4x+10=3x+20，所以 x=10。"
      }
    ],
    "misconceptionTarget": "把外角連同兩個遠端內角一起湊一百八十度，沒有使用外角等於兩遠端角和。",
    "prerequisiteCheck": "能使用外角性質與一次方程。",
    "estimatedTimeSec": 90,
    "unitCheck": "x 無單位，角度為 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需辨認正確三個角的關係並回代。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "10ae158312e94d0641d7fe2dd16c447b320214d91c1a242d0f14d7d3d6ed1b23"
  },
  {
    "questionId": "u08-s004-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "屋架的截面是一個三角形。兩個底角分別為 48° 與 57°，屋脊頂角應為多少才能閉合？",
    "givenConditions": [
      "截面為三角形。",
      "兩底角 48°、57°。"
    ],
    "target": "由屋架底角求閉合頂角",
    "choices": [
      "75°",
      "105°",
      "85°",
      "65°"
    ],
    "answerIndex": 0,
    "independentSolution": "頂角 75° 使三角和恰為 180°。",
    "explanation": "屋架截面是三角形，所以兩底角與屋脊頂角的總和必須為 180°。兩底角和為 48°＋57°＝105°，頂角應是 180°－105°＝75°；三角相加正好閉合為 180°，因此屋架角度條件彼此相容。",
    "steps": [
      "將兩個已知底角相加：48°＋57°＝105°。",
      "用內角和扣除已知量：180°－105°＝75°。",
      "驗算 48°＋57°＋75°＝180°，故頂角為 75°。"
    ],
    "optionAnalysis": [
      {
        "choice": "75°",
        "truth": true,
        "reason": "閉合成三角形需三內角和 180°，頂角=180−48−57=75°。"
      },
      {
        "choice": "105°",
        "truth": false,
        "reason": "這是兩底角總和。"
      },
      {
        "choice": "85°",
        "truth": false,
        "reason": "三角和會成 190°。"
      },
      {
        "choice": "65°",
        "truth": false,
        "reason": "三角和只有 170°。"
      }
    ],
    "misconceptionTarget": "把兩底角的總和一百零五度當成屋脊頂角，或用九十度作為三角形總和。",
    "prerequisiteCheck": "能使用三角形內角和。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位一致。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "情境中的閉合要求決定必須求第三內角。",
    "literacyContextNecessity": "屋架是否能按規格閉合取決於三角形三內角和，兩個實測底角是不可刪除的設計資料。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "3baa17ef93e2c6cf0429624cdd852bb56e7effa2ddf06312bbbd7a166ed81ccb"
  },
  {
    "questionId": "u08-s004-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "三角形警示牌的一個角磨損無法量測，另外兩個內角實際量得 62°、62°。磨損角的實際度數為多少？",
    "givenConditions": [
      "另外兩個內角實際量得 62°、62°。",
      "所問為磨損角的實際度數。"
    ],
    "target": "由兩個已知內角求第三個內角",
    "choices": [
      "58°",
      "56°",
      "62°",
      "124°"
    ],
    "answerIndex": 1,
    "independentSolution": "三角形內角和為180°，磨損角=180°−62°−62°=56°。",
    "explanation": "另外兩角的度數和為62°+62°=124°。三角形三內角和必為180°，所以磨損角是180°−124°=56°；代回後62°+62°+56°=180°。 這項計算直接使用實際量得的內角，不涉及設計中心值、製作誤差或容許範圍，因此不會產生另一個合理答案。",
    "steps": [
      "先算已知兩內角和：62°+62°=124°。",
      "用三角形內角和180°減去124°。",
      "得磨損角為56°，再代回檢查內角和。"
    ],
    "optionAnalysis": [
      {
        "choice": "58°",
        "truth": false,
        "reason": "62+62+58=182，無法形成平面三角形。"
      },
      {
        "choice": "56°",
        "truth": true,
        "reason": "設計值由內角和唯一決定：180−62−62=56°。"
      },
      {
        "choice": "62°",
        "truth": false,
        "reason": "三角和 186°。"
      },
      {
        "choice": "124°",
        "truth": false,
        "reason": "這是已知兩角總和。"
      }
    ],
    "misconceptionTarget": "把已知兩角的62°直接當成磨損角，沒有使用內角和180°。",
    "prerequisiteCheck": "能使用內角和並區分設計值與容許範圍。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度與誤差皆以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需從警示牌的兩個實測內角建立內角和關係，並代回驗證磨損角。",
    "literacyContextNecessity": "警示牌磨損使其中一角無法直接量測，必須由另兩角恢復該角，情境對推理有實際作用。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "59854e27784d888253422d522390dc564dc0f999b5dd559aa945610dedcd27c2"
  },
  {
    "questionId": "u08-s004-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "無人機飛行路徑以三個轉向點形成三角形，系統記錄兩內角為 39° 與 101°。第三內角若低於 45° 就要發出急轉警告。系統應否警告？",
    "givenConditions": [
      "路徑三角形兩角 39°、101°。",
      "警告條件為第三角<45°。"
    ],
    "target": "計算第三角並判斷安全門檻",
    "choices": [
      "不警告，第三角為 50°",
      "不警告，第三角為 101°",
      "應警告，第三角為 40°",
      "應警告，第三角為 39°"
    ],
    "answerIndex": 2,
    "independentSolution": "計算與比較均成立，答案需同時包含 40° 與警告結論。",
    "explanation": "第三內角為 180°－39°－101°＝40°。警告條件是第三角嚴格低於 45°，而 40°＜45°，所以系統應發出警告。答案必須同時包含 40° 的計算與「應警告」的判定。",
    "steps": [
      "先算兩已知角總和：39°＋101°＝140°。",
      "由三角形內角和求第三角：180°－140°＝40°。",
      "比較 40°＜45°，判定符合急轉警告條件。"
    ],
    "optionAnalysis": [
      {
        "choice": "不警告，第三角為 50°",
        "truth": false,
        "reason": "180−39−101=40，不是 50。"
      },
      {
        "choice": "不警告，第三角為 101°",
        "truth": false,
        "reason": "第三角不等於已知鈍角。"
      },
      {
        "choice": "應警告，第三角為 40°",
        "truth": true,
        "reason": "第三角=180−39−101=40°，40°<45°，所以應警告。"
      },
      {
        "choice": "應警告，第三角為 39°",
        "truth": false,
        "reason": "雖結論相同，但角度計算錯誤。"
      }
    ],
    "misconceptionTarget": "只算出第三角卻未與四十五度門檻比較，或把低於誤讀成高於而反轉警告結論。",
    "prerequisiteCheck": "能使用內角和與不等式比較。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度與門檻均以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "情境要求兩階段推理：角度計算與安全判定。",
    "literacyContextNecessity": "急轉警告的 45° 門檻使第三角計算具有實際判定用途，刪除門檻就無法回答是否警告。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "b61f89ecf52337858f0ae9e0f7dc206f6094d534ba92982fcef1e022041bd686"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s004-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "一個三角形的三個內角分別為 (x+20)°、(2x−5)°、(3x−15)°。求 x 與三個內角，並判斷是否為有效三角形。",
    "requiredWork": [
      "用內角和180°列式。",
      "求x及三角。",
      "檢查每角大於0且總和180°。"
    ],
    "standardSolution": [
      "同一三角形的三角和為 180°，所以 (x＋20)＋(2x－5)＋(3x－15)＝180。",
      "合併同類項時常數 20－5－15＝0，因此 6x＝180，解得 x＝30。",
      "代回三個內角分別為 50°、55°、75°。",
      "三角皆大於 0° 且 50°＋55°＋75°＝180°，所以確實構成有效三角形。"
    ],
    "alternativeMethods": [
      "可先合併常數20−5−15=0，直接得6x=180。"
    ],
    "reasoningSteps": [
      "列三角和。",
      "合併同類項求x。",
      "逐一代回。",
      "檢查正角與總和。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "x=30，三角50°、55°、75°，且完成有效性檢查。"
      },
      {
        "score": 2,
        "criteria": "答案與三角正確但未檢查有效性；或有一個代入小錯但方程正確。"
      },
      {
        "score": 1,
        "criteria": "正確列出三角和180°或求出x=30但未完整代回。"
      },
      {
        "score": 0,
        "criteria": "未使用180°，或得到非正角仍宣稱有效。"
      }
    ],
    "partialCreditRules": [
      "三個角順序須與原式對應；只列角集合但數值全對可給結果分。"
    ],
    "followThroughPolicy": "若解x時有單一算術錯，後續一致代入並檢查正角，可給方法分，最高2分。",
    "unitAndNotationRules": "x無單位，角度附°。",
    "answerOnlyPolicy": "只答x=30最高1分；只答三角但無方程最高2分。",
    "commonErrors": [
      "常數合併錯誤。",
      "只檢查總和不檢查正角。"
    ],
    "independentReview": {
      "derivedResult": "x=30；50°、55°、75°；有效。",
      "ambiguityAudit": "三個角式與順序明示，且三角形內角必為正，判斷標準清楚。",
      "reviewNote": "獨立代回並相加50+55+75=180，最小角50>0，確認存在。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "parallel-perpendicular-angles"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "15e263c92d08acdeb46d9df6f8d88052acf00b58b18b0c78a860676c42582a5c"
  },
  {
    "questionId": "u08-s004-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "triangle-angle-sum",
    "lockedSkillTitle": "三角形內角和",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "某三角形的一個外角為 128°，與它不相鄰的兩個內角之比為 3：5。求這兩個內角及與外角相鄰的內角。",
    "requiredWork": [
      "使用外角等於兩個遠內角和。",
      "按3：5分配128°。",
      "求鄰內角並驗算三角形內角和。"
    ],
    "standardSolution": [
      "外角等於兩個不相鄰內角和，所以比為 3：5 的兩角合計 128°。",
      "比例共有 8 份，每份為 128°÷8＝16°，兩個遠端內角分別是 3×16°＝48°、5×16°＝80°。",
      "與 128° 外角相鄰的內角和它形成平角，因此為 180°－128°＝52°。",
      "驗算三個內角 48°＋80°＋52°＝180°，外角也等於 48°＋80°＝128°。"
    ],
    "alternativeMethods": [
      "可先求鄰內角52°，再以三角形內角和得另外兩角和128°後分配。"
    ],
    "reasoningSteps": [
      "由外角性質取得128°的分配總量。",
      "按3與5份求48、80。",
      "用線性對求鄰角52。",
      "總和驗算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "48°、80°、52°全部正確，且外角與比例推理完整。"
      },
      {
        "score": 2,
        "criteria": "三角數值正確但性質說明或驗算缺一；或比例方法正確有一處算術小錯。"
      },
      {
        "score": 1,
        "criteria": "知道遠內角和128°或鄰角52°，並有有效推理。"
      },
      {
        "score": 0,
        "criteria": "把三角內角和直接設為128°，或把外角也列入三內角。"
      }
    ],
    "partialCreditRules": [
      "48°與80°順序可互換，因題目只給比3：5而未命名兩角；但須指出較小對3份。"
    ],
    "followThroughPolicy": "若128÷8算錯，後續比例一致且鄰角52正確，最多2分。",
    "unitAndNotationRules": "所有角度附°；外角不算三角形內角。",
    "answerOnlyPolicy": "只列48、80、52無推導最高2分。",
    "commonErrors": [
      "把外角128°視為相鄰內角。",
      "用180°按3：5分配。"
    ],
    "independentReview": {
      "derivedResult": "遠內角48°、80°；鄰內角52°。",
      "ambiguityAudit": "外角與兩遠內角的關係及比例均明示，只有遠角次序可互換，不影響數值集合。",
      "reviewNote": "獨立驗算48+80=128且128+52=180，亦有48+80+52=180。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "parallel-perpendicular-angles"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "9a3925422a5b85f801f981933cefa2c6abc89e3806ea4ad7d3d14696bcf1c654"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s004-v001",
    "unitId": "u08",
    "skillId": "triangle-angle-sum",
    "contentSha256": "ae93de296bd24bb448b372b6ed151b00109cc344542431ec73f92ec505e204fd",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由總和 180° 扣除兩角，得到 67°。",
    "derivedAnswer": "67°",
    "storedAnswer": "67°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「67°」符合目標「由兩內角求第三角」。其餘選項分別違反：52+61+57=170，不足 180。；三角和會成 190°。；這是兩已知角的和，不是第三角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形內角和」講義已定義範圍；本題特別使用：同一三角形內角 52°、61°。",
      "unitConflict": "角度單位均為 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由兩內角求第三角」重新讀題，並針對誤解「把兩已知角相加當答案。」排除另一解讀。"
    },
    "difficultyReason": "直接套用三角形內角和。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用角度加減。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由兩內角求第三角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由總和 180° 扣除兩角，得到 67°。 正確選項為「67°」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "62174031dd348fbb2b21aef864f4c5d4b7acd77a03947f1bd0ef1bdde3de7c36"
  },
  {
    "questionId": "u08-s004-v002",
    "unitId": "u08",
    "skillId": "triangle-angle-sum",
    "contentSha256": "109b532323552c94fd4ee62314ae7b9dbd8f7828a8aabfd6d4eca8f9eb48d820",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "重算四組，第一正確組合計 180° 且無邊界違規。",
    "derivedAnswer": "45°、65°、70°",
    "storedAnswer": "45°、65°、70°",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「45°、65°、70°」符合目標「判斷三角形內角組是否可行」。其餘選項分別違反：總和 190°。；總和 170°。；雖總和 180°，但 0° 不是正內角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形內角和」講義已定義範圍；本題特別使用：每組列出三個角度。",
      "unitConflict": "角度單位一致。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判斷三角形內角組是否可行」重新讀題，並針對誤解「只檢查總和而忽略 0°。」排除另一解讀。"
    },
    "difficultyReason": "需同時檢查總和與角度邊界。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認正角與三角形內角和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷三角形內角組是否可行」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：重算四組，第一正確組合計 180° 且無邊界違規。 正確選項為「45°、65°、70°」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "f44b032e8fcad3d9373e43e2593145379839cdff256960af8d403d0a9ee63beb"
  },
  {
    "questionId": "u08-s004-v003",
    "unitId": "u08",
    "skillId": "triangle-angle-sum",
    "contentSha256": "aa90da417c76d052abc3bfad3ae5bf0915f3c9a7246a05b4ce1613382a2b39b5",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由兩銳角總和 90° 重算得 56°。",
    "derivedAnswer": "56°",
    "storedAnswer": "56°",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「56°」符合目標「求直角三角形另一銳角」。其餘選項分別違反：只有等腰直角三角形才兩銳角相等。；34+66+90=190。；146° 不是直角三角形中的銳角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形內角和」講義已定義範圍；本題特別使用：一角 90°。",
      "unitConflict": "角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求直角三角形另一銳角」重新讀題，並針對誤解「忘記扣除直角。」排除另一解讀。"
    },
    "difficultyReason": "兩步減法的基礎應用。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認直角與三角形內角和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求直角三角形另一銳角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由兩銳角總和 90° 重算得 56°。 正確選項為「56°」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "0e5f620ccb61db856188823277be1d8708de30e79d1385e8e15a69ebc64275db"
  },
  {
    "questionId": "u08-s004-v004",
    "unitId": "u08",
    "skillId": "triangle-angle-sum",
    "contentSha256": "d915da0f376a4112262f376f4307fbb9139e245e9ba214d82f693d37f4d3406b",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "先合併三角形三角：x+(x+20)+(2x−10)=4x+10；令其等於180，得x=42.5。",
    "derivedAnswer": "42.5",
    "storedAnswer": "42.5",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐項代回後只有「42.5」成立；其他三項分別因：代回三角和 170°。；代回三角和 190°。；把 2x=85 的中間結果當答案。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形內角和」講義已定義範圍；本題特別使用：三內角以 x 表示。",
      "unitConflict": "x 無單位；代回角度為 °。",
      "roundingConflict": "42.5 為精確值，不需近似。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "題幹明確要求「由三個角度式求參數」，沒有第二種合理所求。；已逐一對照題幹、圖示與四個選項，確認不會形成第二個合理答案。"
    },
    "difficultyReason": "含三個代數式且答案非整數。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能解一元一次方程。",
    "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
    "reviewerDecision": "pass",
    "reviewerNote": "u08-s004-v004 的中央獨立審查使用另一條推導路徑：先合併三角形三角：x+(x+20)+(2x−10)=4x+10；令其等於180，得x=42.5。 這段推導不依賴儲存答案；再將四個選項逐一代回題幹與圖示，確認只有儲存答案符合，並檢查單位、比例、未按比例警語與第二種解讀。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "8c45e8050a35f13e9463864838c5d47ede5b9dc22db52be52338b91050634fd8"
  },
  {
    "questionId": "u08-s004-v005",
    "unitId": "u08",
    "skillId": "triangle-angle-sum",
    "contentSha256": "b10d5bedb85a6b846362a64d439ad7b1b4a41d4c664f33e66cfd95d8726b8486",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "重算 138−59=79，並驗算相鄰內角 42°，三內角 59+79+42=180。",
    "derivedAnswer": "79°",
    "storedAnswer": "79°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「79°」符合目標「由外角與一遠端內角求另一角」。其餘選項分別違反：這是 180−138，為相鄰內角。；這是 180−59，與所求遠端角無關。；將兩角誤相加。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形內角和」講義已定義範圍；本題特別使用：外角 138°。",
      "unitConflict": "角度單位一致。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由外角與一遠端內角求另一角」重新讀題，並針對誤解「誤求外角的相鄰內角。」排除另一解讀。"
    },
    "difficultyReason": "需選對外角關係而非只用補角。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認外角與不相鄰內角。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由外角與一遠端內角求另一角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：重算 138−59=79，並驗算相鄰內角 42°，三內角 59+79+42=180。 正確選項為「79°」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "ca92f2470bd26b306b44d3e2358aef5a91631dcfca6cb50b9136b778177b6910"
  },
  {
    "questionId": "u08-s004-v006",
    "unitId": "u08",
    "skillId": "triangle-angle-sum",
    "contentSha256": "e5e41f7c65976782152ee96119ae07bf209330608f733032fec399bdabc28513",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "將剩餘角度平均分成兩個相等底角。",
    "derivedAnswer": "67°",
    "storedAnswer": "67°",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「67°」符合目標「求等腰三角形底角」。其餘選項分別違反：等腰不表示三角皆相等。；46+72+72=190。；這是兩底角總和。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形內角和」講義已定義範圍；本題特別使用：等腰三角形。",
      "unitConflict": "角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求等腰三角形底角」重新讀題，並針對誤解「把頂角也視為與底角相等。」排除另一解讀。"
    },
    "difficultyReason": "兩步運算並使用分類性質。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用等腰底角相等。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求等腰三角形底角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：將剩餘角度平均分成兩個相等底角。 正確選項為「67°」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "bd0feeddb833cd6a692c61a5cb3f54a18c25178516ac5d3f03115d966bd3b12f"
  },
  {
    "questionId": "u08-s004-v007",
    "unitId": "u08",
    "skillId": "triangle-angle-sum",
    "contentSha256": "a4972f312f1bcc6f095582cf0763098f572c99eb0b70dc84324a9f6e7138da67",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立比例分配後三角和 180°。",
    "derivedAnswer": "80°",
    "storedAnswer": "80°",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「80°」符合目標「由內角比求最大角」。其餘選項分別違反：這是每一份的度數。；這是中間角。；若最大角 90°，比例總和會超過 180°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形內角和」講義已定義範圍；本題特別使用：三內角比 2：3：4。",
      "unitConflict": "比例無單位，結果為 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由內角比求最大角」重新讀題，並針對誤解「把單位份或中間角當最大角。」排除另一解讀。"
    },
    "difficultyReason": "需三步比例運算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用比例與內角和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由內角比求最大角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立比例分配後三角和 180°。 正確選項為「80°」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "028e609548fef48a51a77cfaaf4955e481e2999a327b12f6f25655842bab9196"
  },
  {
    "questionId": "u08-s004-v008",
    "unitId": "u08",
    "skillId": "triangle-angle-sum",
    "contentSha256": "24dfac889368b8bf4d728195cb85d057b2b9f3f323bfac08f3fc12d1673aeff3",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立檢查52°+78°+50°=180°，且52：78=2：3。",
    "derivedAnswer": "52°",
    "storedAnswer": "52°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「52°」符合目標「結合內角和與比例求未知角」。其餘選項分別違反：50°是已知第三角，不是比例中的較小角。；65°是剩餘130°的一半，未依2：3分配。；78°是比例中的較大角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形內角和」講義已定義範圍；本題特別使用：三角形一角50°。",
      "unitConflict": "所有數值為角度，答案使用度數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「結合內角和與比例求未知角」重新讀題，並針對誤解「直接把130°平均分配，或把較大比例份當較小角。」排除另一解讀。"
    },
    "difficultyReason": "需先求剩餘角和再依比例拆分，屬進階題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會三角形內角和及簡單比例分配。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「結合內角和與比例求未知角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立檢查52°+78°+50°=180°，且52：78=2：3。 正確選項為「52°」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "d9c2cd3f08916eed3d3f7f75ad497d598ae593512eee87e890ed153ecf461ad8"
  },
  {
    "questionId": "u08-s004-v009",
    "unitId": "u08",
    "skillId": "triangle-angle-sum",
    "contentSha256": "10ae158312e94d0641d7fe2dd16c447b320214d91c1a242d0f14d7d3d6ed1b23",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立回代三項，等式成立且角皆為正。",
    "derivedAnswer": "10",
    "storedAnswer": "10",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「10」符合目標「由外角代數式求參數」。其餘選項分別違反：代回外角 30°，遠端內角和 45°。；代回外角 70°，遠端內角和 80°。；把移項後的常數差當 x。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形內角和」講義已定義範圍；本題特別使用：外角與兩遠端內角代數式明示。",
      "unitConflict": "x 無單位，角度為 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由外角代數式求參數」重新讀題，並針對誤解「把外角與三個內角全部加成 180°。」排除另一解讀。"
    },
    "difficultyReason": "需辨認正確三個角的關係並回代。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用外角性質與一次方程。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由外角代數式求參數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立回代三項，等式成立且角皆為正。 正確選項為「10」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "195ae1dbbf68287f94cde0ef16724cf83542a61ad71f7dbc3b485380d78a77bb"
  },
  {
    "questionId": "u08-s004-v010",
    "unitId": "u08",
    "skillId": "triangle-angle-sum",
    "contentSha256": "3baa17ef93e2c6cf0429624cdd852bb56e7effa2ddf06312bbbd7a166ed81ccb",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立驗算 48+57+75=180。",
    "derivedAnswer": "75°",
    "storedAnswer": "75°",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「75°」符合目標「由屋架底角求閉合頂角」。其餘選項分別違反：這是兩底角總和。；三角和會成 190°。；三角和只有 170°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形內角和」講義已定義範圍；本題特別使用：截面為三角形。",
      "unitConflict": "角度單位一致。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由屋架底角求閉合頂角」重新讀題，並針對誤解「把兩底角總和當頂角。」排除另一解讀。"
    },
    "difficultyReason": "情境中的閉合要求決定必須求第三內角。",
    "literacyContextNecessity": "屋架是否能按規格閉合取決於三角形三內角和，兩個實測底角是不可刪除的設計資料。",
    "prerequisiteCheck": "能使用三角形內角和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由屋架底角求閉合頂角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立驗算 48+57+75=180。 正確選項為「75°」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "1013d458905107b752baf85262f00c64fac9fea0de2b477621d78b4c905c12d8"
  },
  {
    "questionId": "u08-s004-v011",
    "unitId": "u08",
    "skillId": "triangle-angle-sum",
    "contentSha256": "59854e27784d888253422d522390dc564dc0f999b5dd559aa945610dedcd27c2",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "三角形內角和為180°，所以磨損角=180°−62°−62°=56°。",
    "derivedAnswer": "56°",
    "storedAnswer": "56°",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代入四個選項後，只有56°能使兩個62°內角與磨損角的總和恰為180°；其餘三個選項都破壞三角形內角和，因此不存在第二個正確答案。",
      "undefinedSymbol": "題幹明確說明62°、62°與所求角都是同一三角形的內角，角度符號與磨損角的指涉均已定義，不會和外角或設計角混淆。",
      "unitConflict": "題目中的所有量都以度為角度單位，選項也使用相同單位，沒有長度、弧度或其他單位混用。",
      "roundingConflict": "兩個已知內角與四個選項都是精確角度，計算只做整數加減，不涉及近似值、量測區間或四捨五入。",
      "domainBoundary": "解題只使用本技能的三角形內角和180°與基本加減，沒有依賴圖形外觀、等腰性質或課綱外定理。",
      "alternateReading": "題幹所問是依兩個實際內角求同一三角形的第三內角；磨損只說明不能直接量測，不表示存在設計中心值、容許誤差或另一個待估區間。"
    },
    "difficultyReason": "需把兩個實際量得的內角相加，再由三角形內角和求出無法直接量測的第三角並代回驗證。",
    "literacyContextNecessity": "警示牌磨損使一角無法直接量測，必須利用其餘兩個實際內角恢復該角，情境直接決定所需推理。",
    "prerequisiteCheck": "能辨認三角形的三個內角，並使用內角和180°進行整數角度的加減與回代檢查。",
    "languageCheck": "題幹明示兩個角是實際量得的內角，所求也是磨損處的實際內角；沒有殘留設計值、製作誤差或圖形比例等未定條件。",
    "reviewerDecision": "pass",
    "reviewerNote": "三角形內角和為180°，所以磨損角=180°−62°−62°=56°。獨立計算先得兩個已知角和為124°，再由180°扣除124°得到56°；代回後62°＋62°＋56°恰為180°。逐項檢查58°、62°與124°皆使內角和不等於180°，因此答案唯一，且題意只問實際內角，不涉及設計誤差或容許範圍。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "8e0b2cf66e04aa0a5435fb1facea92e217b550cd826013cf53b7900ec72e9937"
  },
  {
    "questionId": "u08-s004-v012",
    "unitId": "u08",
    "skillId": "triangle-angle-sum",
    "contentSha256": "b61f89ecf52337858f0ae9e0f7dc206f6094d534ba92982fcef1e022041bd686",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立重算 180−140=40，嚴格低於 45。",
    "derivedAnswer": "應警告，第三角為 40°",
    "storedAnswer": "應警告，第三角為 40°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「應警告，第三角為 40°」符合目標「計算第三角並判斷安全門檻」。其餘選項分別違反：180−39−101=40，不是 50。；第三角不等於已知鈍角。；雖結論相同，但角度計算錯誤。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三角形內角和」講義已定義範圍；本題特別使用：路徑三角形兩角 39°、101°。",
      "unitConflict": "角度與門檻均以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「計算第三角並判斷安全門檻」重新讀題，並針對誤解「算出角度後忘記與門檻比較，或只答警告不給角度。」排除另一解讀。"
    },
    "difficultyReason": "情境要求兩階段推理：角度計算與安全判定。",
    "literacyContextNecessity": "急轉警告的 45° 門檻使第三角計算具有實際判定用途，刪除門檻就無法回答是否警告。",
    "prerequisiteCheck": "能使用內角和與不等式比較。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「計算第三角並判斷安全門檻」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立重算 180−140=40，嚴格低於 45。 正確選項為「應警告，第三角為 40°」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "88dd196b2243c5f9591c18a1ae09ee2047446dd42fe065948415d63acc9d69af"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u08-s004-fig001",
    "drawingSpecId": "u08-s004-draw001",
    "unitId": "u08",
    "skillSlot": "s004",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "purpose": "三角形三角分別標示 x、x+20、2x−10",
    "svgPath": "figures/u08/u08-s004-fig001.svg",
    "canvas": {
      "width": 720,
      "height": 390,
      "viewBox": "0 0 720 390"
    },
    "drawingSpec": {
      "coordinateSystem": "SVG 左上為原點，所有關鍵點與標籤位置固定於對應 SVG。",
      "visibleLineRules": "主要輪廓使用至少3px實線；標籤使用18px以上文字。",
      "hiddenLineRules": "本圖不使用隱藏線；不可由未畫出的邊推論。",
      "labelsAndPositions": "所有點名、角度、尺寸與觀察方向均固定在 SVG 內。",
      "tickMarksUnitsArrowsSymbols": "角弧、箭頭、度數與公分單位依題目需要完整標示。",
      "scaleStatus": "not-to-scale",
      "visualInferenceWarning": "示意圖未按比例，作答必須依題幹與標示資料。"
    },
    "altText": "三角形 ABC 三個內角以代數式標示，圖形未按比例。",
    "svgTitle": "三角形三角分別標示 x、x+20、2x−10",
    "svgDescription": "三角形 ABC 三個內角以代數式標示，圖形未按比例。",
    "mobileReadabilityReview": "在360px寬螢幕縮放後，主要標籤仍保持可辨識；不依顏色傳遞必要資訊。",
    "answerLeakageReview": "只呈現題幹已知結構與數值，不標示答案或計算結果。",
    "svgAssertions": [
      "<title",
      "<desc",
      "role=\"img\"",
      "未按比例"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "u08-s004-fig001 已核對線段、標籤、題幹資料、縮放警語與答案不外洩。",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "9725fcf9a33a11d7d7ed98f2a940d02db1ff4e43726979798da2cef9cd07d6b2"
  }
];

