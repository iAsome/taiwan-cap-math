// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s002-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-elements",
  "skillId": "angle-types-measure",
  "lockedSkillTitle": "角的種類與互餘互補",
  "title": "角的種類與互餘互補：先判範圍再做加法",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能以度數判斷銳角、直角、鈍角與平角。",
    "能求一個角的餘角或補角。",
    "能辨別互餘與互補是兩角關係，不是單一角名稱。",
    "能處理含未知數的互餘互補關係。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "geometry-basic-elements"
    ],
    "bridgeExplanation": "先把角記號中的頂點與兩邊辨認清楚，再加入角度大小。"
  },
  "prerequisites": [
    {
      "skillId": "geometry-basic-elements",
      "requiredLevel": "能正確讀寫 ∠ABC，並知道 B 是頂點。"
    }
  ],
  "glossary": [
    {
      "term": "角度",
      "definition": "衡量角張開程度的量，常用度（°）表示。"
    },
    {
      "term": "銳角",
      "definition": "大於 0° 且小於 90° 的角。"
    },
    {
      "term": "直角",
      "definition": "恰為 90° 的角。"
    },
    {
      "term": "鈍角",
      "definition": "大於 90° 且小於 180° 的角。"
    },
    {
      "term": "平角",
      "definition": "恰為 180° 的角。"
    },
    {
      "term": "互餘",
      "definition": "兩角度數和為 90°。"
    },
    {
      "term": "互補",
      "definition": "兩角度數和為 180°。"
    }
  ],
  "notation": [
    {
      "symbol": "m∠ABC",
      "meaning": "角 ABC 的度數。"
    },
    {
      "symbol": "°",
      "meaning": "度，角度單位。"
    },
    {
      "symbol": "90°-x°",
      "meaning": "x° 的餘角，前提是結果為非負且情境成立。"
    },
    {
      "symbol": "180°-x°",
      "meaning": "x° 的補角。"
    }
  ],
  "conceptDevelopment": [
    "角的種類由度數範圍決定，不由角畫得長短或方向決定。角的兩邊延長不會改變角度。",
    "互餘只看兩角總和是否為 90°；互補只看總和是否為 180°。兩角不必相鄰，也不必畫在一起。",
    "一個銳角的餘角仍是銳角；直角的餘角是 0°，但在一般國中幾何中 0° 不稱為普通角，因此題目常限制為正角。",
    "求餘角或補角時先寫總和，再用總量減已知角。若含未知數，建立等式後再解。"
  ],
  "formalDefinitions": [
    {
      "name": "餘角",
      "statement": "與指定角相加為 90° 的角。"
    },
    {
      "name": "補角",
      "statement": "與指定角相加為 180° 的角。"
    },
    {
      "name": "優角外的會考範圍",
      "statement": "本技能只處理 0° 到 180° 的基本角分類，不引入超過 180° 的角。"
    }
  ],
  "formulas": [
    {
      "formula": "x+y=90°",
      "conditions": [
        "x、y 為互餘兩角的度數"
      ],
      "meaning": "表示兩角互餘。"
    },
    {
      "formula": "x+y=180°",
      "conditions": [
        "x、y 為互補兩角的度數"
      ],
      "meaning": "表示兩角互補。"
    },
    {
      "formula": "餘角=90°-已知角",
      "conditions": [
        "已知角不大於 90° 且題意允許 0°"
      ],
      "meaning": "由直角總量扣除。"
    },
    {
      "formula": "補角=180°-已知角",
      "conditions": [
        "已知角不大於 180°"
      ],
      "meaning": "由平角總量扣除。"
    }
  ],
  "invalidUseCases": [
    "不能因兩角都很小就判定互餘，必須計算總和。",
    "不能把 90° 誤分成銳角，也不能把 180° 誤分成鈍角。",
    "一個角可能同時有不同位置的餘角，但度數相同；位置不影響度數關係。",
    "未限制角度為正時，要留意 0° 是否被題意排除。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "先讀角度並標出 0°、90°、180° 三個分類界線。",
      "check": "等於界線與介於界線必須分開判斷。"
    },
    {
      "step": 2,
      "instruction": "若問互餘或互補，先把關係翻成固定總和。",
      "check": "互餘寫 90°，互補寫 180°。"
    },
    {
      "step": 3,
      "instruction": "用總和減去已知角，或依文字關係建立方程。",
      "check": "倍數、相差與括號的正負號要完整保留。"
    },
    {
      "step": 4,
      "instruction": "求出未知量後代回每一個角度式。",
      "check": "角度都應為正，餘角小於 90°，補角小於 180°。"
    },
    {
      "step": 5,
      "instruction": "用總和、相差及角的分類做雙重驗算。",
      "check": "回代須同時符合原方程與題目所問的角種類。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "判斷 38°、90°、127°、180° 的種類。",
      "solutionSteps": [
        "38 介於 0 與 90，為銳角。",
        "90 為直角；127 介於 90 與 180，為鈍角；180 為平角。"
      ],
      "answer": "依序為銳角、直角、鈍角、平角。",
      "why": "角的種類由精確範圍決定：小於 90°、等於 90°、介於 90° 與 180°、等於 180° 分屬不同類別。先標出分界再逐個比較，可避免把接近分界的角或恰在分界上的角混為一談。"
    },
    {
      "exampleId": "L2",
      "prompt": "角 A 為 64°，它的餘角是多少？",
      "solutionSteps": [
        "互餘總和為 90°。",
        "90°－64°＝26°。"
      ],
      "answer": "26°。",
      "why": "餘角不是把角度任意補大，而是要求兩角總和恰為直角 90°。因此未知角由 90° 扣除已知的 64°，得到 26°；再以 64°＋26°＝90° 回代，才能確認沒有誤用互補的 180°。"
    },
    {
      "exampleId": "L3",
      "prompt": "角 B 為 113°，它的補角是多少？",
      "solutionSteps": [
        "互補總和為 180°。",
        "180°－113°＝67°。"
      ],
      "answer": "67°。",
      "why": "補角的共同基準是平角 180°，已知角雖是鈍角仍可用相同定義。由 180° 減 113° 得 67°，一鈍一銳相加正好為 180°；若誤用 90°，會得到負值並立刻顯示定義用錯。"
    },
    {
      "exampleId": "L4",
      "prompt": "兩互補角度數分別為 2x° 與 (x＋30)°，求 x。",
      "solutionSteps": [
        "建立 2x＋x＋30＝180。",
        "3x＝150，x＝50。",
        "兩角為 100° 與 80°，總和 180°。"
      ],
      "answer": "x＝50。",
      "why": "互補關係決定兩個角度式必須相加為 180°，而不是令兩式相等。解得 x 後仍須代回，得到 100°、80°；兩角皆為正且總和 180°，同時驗證方程、角度範圍與互補條件。"
    }
  ],
  "levelConnections": {
    "basic": "以數值範圍分類角。",
    "standard": "直接求餘角或補角。",
    "advanced": "以代數式建立互餘互補方程。",
    "literacy": "閱讀轉彎、坡面或開啟角度規格時，辨認題目是角的大小還是兩角總和。"
  },
  "commonMistakes": [
    {
      "mistake": "把 90° 稱為銳角。",
      "why": "把小於等於 90° 混為一類。",
      "correction": "銳角必須嚴格小於 90°。"
    },
    {
      "mistake": "把 180° 稱為鈍角。",
      "why": "忽略鈍角嚴格小於 180°。",
      "correction": "180° 是平角。"
    },
    {
      "mistake": "求 40° 的餘角算成 180°-40°。",
      "why": "混淆互餘與互補。",
      "correction": "餘角總和 90°，補角總和 180°。"
    },
    {
      "mistake": "認為互餘角必須相鄰。",
      "why": "把圖形位置當成定義。",
      "correction": "只要度數和為 90° 即互餘。"
    },
    {
      "mistake": "方程式漏寫括號。",
      "why": "未把整個角度表達式相加。",
      "correction": "先把每個角完整括起再建立總和。"
    },
    {
      "mistake": "答案漏寫度數符號。",
      "why": "把角度當成純數。",
      "correction": "結果應附 °。"
    }
  ],
  "selfCheckItems": [
    "我能精確處理 90° 與 180° 的邊界嗎？",
    "我是否先確認題目說互餘或互補？",
    "未知數求出後是否回代檢查總和？",
    "答案是否附度數單位？"
  ],
  "conciseSummary": [
    "銳角小於 90°；直角等於 90°；鈍角介於 90° 與 180°；平角等於 180°。",
    "互餘和為 90°，互補和為 180°。",
    "先寫總和，再求未知角。"
  ],
  "connections": {
    "previous": "上一技能提供角的頂點與記號，現在加入角度與分類。",
    "next": [
      "下一技能會用直角與平角關係處理垂直、對頂角和鄰補角。"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "逐一檢查 0°、90°、180° 的分類邊界，並回代代數例題得到 100°+80°=180°；互餘與互補的公式均標明適用條件。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "0125786defd794a7ea88da75371293b54fcd469c91bd1f3586ab4a96010fb00c"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s002-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "角度為 89° 的角屬於哪一類？",
    "givenConditions": [
      "角度為精確的 89°。"
    ],
    "target": "分類 89° 的角",
    "choices": [
      "直角",
      "銳角",
      "鈍角",
      "平角"
    ],
    "answerIndex": 1,
    "independentSolution": "89° 落在 (0°,90°) 範圍內。",
    "explanation": "銳角的度數必須大於 0° 且小於 90°。89° 雖然很接近直角，但仍嚴格小於 90°，所以是銳角；只有恰好 90° 才是直角，不能因圖形看起來接近就改變分類。",
    "steps": [
      "先列出銳角範圍為 0°＜角度＜90°。",
      "比較 89° 與分界值，得到 0°＜89°＜90°。",
      "因此 89° 是銳角，不是直角、鈍角或平角。"
    ],
    "optionAnalysis": [
      {
        "choice": "直角",
        "truth": false,
        "reason": "直角必須恰為 90°。"
      },
      {
        "choice": "銳角",
        "truth": true,
        "reason": "89° 大於 0° 且小於 90°，符合銳角定義。"
      },
      {
        "choice": "鈍角",
        "truth": false,
        "reason": "鈍角必須大於 90°。"
      },
      {
        "choice": "平角",
        "truth": false,
        "reason": "平角為 180°。"
      }
    ],
    "misconceptionTarget": "把接近九十度的八十九度直接當成直角，忽略角分類的分界必須精確相等。",
    "prerequisiteCheck": "能讀角度符號並理解角的基本記號。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度以度（°）表示，無單位轉換。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "只需與分類界線比較，屬基礎辨認。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "eabfaed57adf72f95231dde00b5690479c3ee525b2c54ae4d6421983cc97dac8"
  },
  {
    "questionId": "u08-s002-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "下列哪一個角是直角？",
    "givenConditions": [
      "四個選項皆以度數表示。"
    ],
    "target": "辨認直角的度數",
    "choices": [
      "0°",
      "89°",
      "90°",
      "180°"
    ],
    "answerIndex": 2,
    "independentSolution": "直角固定為 90°。",
    "explanation": "直角的定義是度數恰好等於 90°。0° 是零角，89° 仍是銳角，180° 是平角；只有選項中的 90° 正好符合直角定義，因此答案唯一，分界不能混用。",
    "steps": [
      "回憶直角的精確度數是 90°。",
      "逐一比較選項與 90°，不以接近程度判斷。",
      "只有 90° 完全相等，所以選 90°。"
    ],
    "optionAnalysis": [
      {
        "choice": "0°",
        "truth": false,
        "reason": "0° 沒有張開，不是直角。"
      },
      {
        "choice": "89°",
        "truth": false,
        "reason": "89° 是銳角。"
      },
      {
        "choice": "90°",
        "truth": true,
        "reason": "直角的度數恰為 90°。"
      },
      {
        "choice": "180°",
        "truth": false,
        "reason": "180° 是平角。"
      }
    ],
    "misconceptionTarget": "把八十九度因外觀接近而當成直角，或把一百八十度的平角與直角混淆。",
    "prerequisiteCheck": "能讀取角度。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位均為 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "單一定義回憶。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "13ea26d4673905e6e6d47cecca8a53b026856e7444d41a028d6177513d42b50f"
  },
  {
    "questionId": "u08-s002-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩角度數分別為 35° 與 55°，它們的關係為何？",
    "givenConditions": [
      "兩角為 35°、55°。"
    ],
    "target": "判斷兩角是否互餘",
    "choices": [
      "互補",
      "相等",
      "無法判斷",
      "互餘"
    ],
    "answerIndex": 3,
    "independentSolution": "總和 90°，符合互餘而非互補。",
    "explanation": "判斷互餘或互補要先計算兩角總和。35°＋55°＝90°，正好符合互餘兩角和為 90° 的定義；兩角不相等，總和也不是 180°，所以不能選相等或互補。",
    "steps": [
      "將兩角相加：35°＋55°＝90°。",
      "對照定義，總和 90° 的兩角互餘。",
      "確認總和不是 180° 且兩數不同，故唯一答案為互餘。"
    ],
    "optionAnalysis": [
      {
        "choice": "互補",
        "truth": false,
        "reason": "互補要求總和 180°。"
      },
      {
        "choice": "相等",
        "truth": false,
        "reason": "35° 不等於 55°。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "兩角總和已可直接判定關係。"
      },
      {
        "choice": "互餘",
        "truth": true,
        "reason": "35°+55°=90°，所以兩角互餘。"
      }
    ],
    "misconceptionTarget": "未先計算總和，只因兩角同為銳角就猜測相等或互補，混用互餘與互補定義。",
    "prerequisiteCheck": "能做整數加法並理解角度。",
    "estimatedTimeSec": 90,
    "unitCheck": "兩角皆以 ° 表示，直接相加。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "只需一次加法與定義對照。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "21eaa7eaa1be890662fc72d55085e84ce6534131c68ab77caabe2855c8801d54"
  },
  {
    "questionId": "u08-s002-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個角為 68°，它的餘角是多少？",
    "givenConditions": [
      "已知角為 68°。",
      "所求為餘角。"
    ],
    "target": "求 68° 的餘角",
    "choices": [
      "22°",
      "112°",
      "68°",
      "248°"
    ],
    "answerIndex": 0,
    "independentSolution": "計算 90°-68°=22°，驗算 68°+22°=90°。",
    "explanation": "餘角和已知角的總和必須是 90°，因此以 90° 減去 68°，得到 22°。回代可驗算 68°＋22°＝90°，所以 22° 才是餘角；112° 是用 180° 計算出的補角，這項回代也排除其餘選項。",
    "steps": [
      "寫出互餘關係 68°＋x＝90°。",
      "移項計算 x＝90°－68°＝22°。",
      "回代得到 68°＋22°＝90°，確認答案為 22°。"
    ],
    "optionAnalysis": [
      {
        "choice": "22°",
        "truth": true,
        "reason": "餘角與原角總和 90°，所以 90°−68°=22°。"
      },
      {
        "choice": "112°",
        "truth": false,
        "reason": "112° 是 68° 的補角。"
      },
      {
        "choice": "68°",
        "truth": false,
        "reason": "餘角不必與原角相等。"
      },
      {
        "choice": "248°",
        "truth": false,
        "reason": "超出本技能基本角範圍且總和不為 90°。"
      }
    ],
    "misconceptionTarget": "把餘角誤用一百八十度相減而得到一百一十二度，混淆互餘與互補的總和。",
    "prerequisiteCheck": "能辨認互餘總和 90°。",
    "estimatedTimeSec": 90,
    "unitCheck": "計算與答案均以度為單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接代入餘角公式。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "ad5f43813be3d4945e9a8c568438fe3976620fff93426de4ef3bd289fd6ee150"
  },
  {
    "questionId": "u08-s002-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個角為 137°，它的補角是多少？",
    "givenConditions": [
      "已知角 137°。",
      "所求為補角。"
    ],
    "target": "求 137° 的補角",
    "choices": [
      "47°",
      "43°",
      "223°",
      "53°"
    ],
    "answerIndex": 1,
    "independentSolution": "由平角扣除 137° 得 43°。",
    "explanation": "補角與原角的總和為 180°。以平角 180° 扣除 137°，可得 43°；驗算 137°＋43°＝180°，正好互補。47° 是錯誤減法，223° 則不是正確的補角，也不符合角度總和條件。",
    "steps": [
      "建立互補等式 137°＋x＝180°。",
      "計算 x＝180°－137°＝43°。",
      "用 137°＋43°＝180° 驗算，所以選 43°。"
    ],
    "optionAnalysis": [
      {
        "choice": "47°",
        "truth": false,
        "reason": "這是把 137 誤看成 133 後的差。"
      },
      {
        "choice": "43°",
        "truth": true,
        "reason": "補角=180°−137°=43°。"
      },
      {
        "choice": "223°",
        "truth": false,
        "reason": "補角應與原角合為 180°，不是加到 360°。"
      },
      {
        "choice": "53°",
        "truth": false,
        "reason": "137+53=190，不是 180。"
      }
    ],
    "misconceptionTarget": "把補角錯用九十度或把減法算錯，沒有用兩角總和一百八十度回代檢查。",
    "prerequisiteCheck": "能使用互補定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需要一次減法與驗算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "634599e5b71748e4e6f26af109330375df6dbee262720217b31cb0bf365f733a"
  },
  {
    "questionId": "u08-s002-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩個互補角的度數比為 2：3，較小角是多少？",
    "givenConditions": [
      "兩角互補。",
      "度數比 2：3。"
    ],
    "target": "以比例求互補角",
    "choices": [
      "36°",
      "60°",
      "72°",
      "108°"
    ],
    "answerIndex": 2,
    "independentSolution": "將 180° 依 2:3 分配，兩角為 72°、108°。",
    "explanation": "互補兩角合為 180°，比為 2：3 表示總共分成 5 份。每份是 180°÷5＝36°，較小角占 2 份，所以為 2×36°＝72°；另一角 108°，兩者相加確為 180°，大小次序也與比例一致。",
    "steps": [
      "將比例份數相加，得到 2＋3＝5 份。",
      "用互補總和分配，每份為 180°÷5＝36°。",
      "較小角占 2 份，故 2×36°＝72°，並以 72°＋108° 驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "36°",
        "truth": false,
        "reason": "把 180° 除以 5 後未乘 2。"
      },
      {
        "choice": "60°",
        "truth": false,
        "reason": "把互補誤當三等分。"
      },
      {
        "choice": "72°",
        "truth": true,
        "reason": "總份數 5 份，每份 180°÷5=36°，較小角 2 份為 72°。"
      },
      {
        "choice": "108°",
        "truth": false,
        "reason": "108° 是較大角。"
      }
    ],
    "misconceptionTarget": "直接把二或三當角度，或把一百八十度除以較小比例二，沒有先求總份數。",
    "prerequisiteCheck": "能使用互補總和與基本比例。",
    "estimatedTimeSec": 90,
    "unitCheck": "比例無單位，結果為角度 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需結合總和與比例分配，屬標準題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "83c47d4ac0be8588d4d26592d4590c8abac50fec96efe4d9809b8cf8c0937a33"
  },
  {
    "questionId": "u08-s002-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩互餘角分別為 (3x+6)° 與 (2x−1)°，x 為何？",
    "givenConditions": [
      "兩角互餘。",
      "角度式為 3x+6 與 2x−1。"
    ],
    "target": "解含未知數的互餘角",
    "choices": [
      "9",
      "35",
      "19",
      "17"
    ],
    "answerIndex": 3,
    "independentSolution": "解方程 5x+5=90 得 17，兩角為 57°、33°。",
    "explanation": "兩角互餘，所以角度式的總和等於 90°。列式 (3x＋6)＋(2x－1)＝90，合併得 5x＋5＝90，解得 x＝17。代回兩角為 57°、33°，皆為正且總和 90°，因此沒有其他選項符合原來條件。",
    "steps": [
      "依互餘定義列式 (3x＋6)＋(2x－1)＝90。",
      "合併同類項得 5x＋5＝90，再解得 x＝17。",
      "代回得到 57°、33°，相加為 90°，確認 x＝17。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": false,
        "reason": "把總和誤設為 50。"
      },
      {
        "choice": "35",
        "truth": false,
        "reason": "解到 5x=85 後未除以 5。"
      },
      {
        "choice": "19",
        "truth": false,
        "reason": "代回後兩角總和為 100°。"
      },
      {
        "choice": "17",
        "truth": true,
        "reason": "互餘總和 90°，(3x+6)+(2x−1)=90，5x+5=90，x=17。"
      }
    ],
    "misconceptionTarget": "把互餘總和誤寫成一百八十度，或合併常數六與負一時符號計算錯誤。",
    "prerequisiteCheck": "能使用一元一次方程與互餘定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "x 為無單位數，代回角度式後單位為 °。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需正確展開兩角並回代檢查。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "3560cb0aa9840e8caf7937dfd6340723da3e3ad6474e7c56429489cd1a4a2627"
  },
  {
    "questionId": "u08-s002-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "若一個角的補角比它本身大 24°，原角是多少？",
    "givenConditions": [
      "兩角互補。",
      "補角比原角大 24°。"
    ],
    "target": "由角與補角的差反求原角",
    "choices": [
      "78°",
      "102°",
      "66°",
      "84°"
    ],
    "answerIndex": 0,
    "independentSolution": "原角 78°，補角 102°，相差 24°。",
    "explanation": "設原角為 x°，其補角是 (180－x)°。題意說補角比原角大 24°，所以 (180－x)－x＝24，解得 2x＝156、x＝78。補角為 102°，且 102°－78°＝24°；兩角也確實合為 180°，所以原角只能是 78°，完整符合兩項關係。",
    "steps": [
      "設原角 x°，將補角表示成 (180－x)°。",
      "依相差 24° 列式 (180－x)－x＝24。",
      "解得 x＝78，並用補角 102° 與差 24° 驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "78°",
        "truth": true,
        "reason": "設原角 x°，補角 180−x；依題意 (180−x)−x=24，解得 x=78。"
      },
      {
        "choice": "102°",
        "truth": false,
        "reason": "102° 是補角，不是原角。"
      },
      {
        "choice": "66°",
        "truth": false,
        "reason": "66° 的補角 114°，差 48°。"
      },
      {
        "choice": "84°",
        "truth": false,
        "reason": "84° 的補角 96°，只大 12°。"
      }
    ],
    "misconceptionTarget": "把補角直接設成原角加二十四度後忘記兩角仍須合為一百八十度，或反向相減。",
    "prerequisiteCheck": "能列一元一次方程。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有角度以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需同時滿足總和與差，推理多一步。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "a0ab84fb168c5c654186429e5f4a5ed61b2285a3a8e7551bf94b669265657ea9"
  },
  {
    "questionId": "u08-s002-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "下列哪一組不可能是兩個正角且互餘？",
    "givenConditions": [
      "要求兩角皆為正角。",
      "互餘總和須 90°。"
    ],
    "target": "判斷互餘條件的可行性",
    "choices": [
      "12° 與 78°",
      "10° 與 90°",
      "44° 與 46°",
      "1° 與 89°"
    ],
    "answerIndex": 1,
    "independentSolution": "三組總和為 90°，唯有 10° 與 90° 合為 100°。",
    "explanation": "互餘的兩個正角總和必須是 90°。12°＋78°、44°＋46°、1°＋89° 都等於 90°；只有 10°＋90°＝100°，不符合互餘。因此 10° 與 90° 是唯一不可能的一組，且無須依圖形或角的外觀判斷。",
    "steps": [
      "以總和 90° 作為每一組的共同檢查標準。",
      "分別相加四組角度，得到 90、100、90、90。",
      "只有 10° 與 90° 的總和為 100°，所以選該組。"
    ],
    "optionAnalysis": [
      {
        "choice": "12° 與 78°",
        "truth": false,
        "reason": "兩角皆為正且總和 90°。"
      },
      {
        "choice": "10° 與 90°",
        "truth": true,
        "reason": "10°+90°=100°，不符合互餘總和 90°。"
      },
      {
        "choice": "44° 與 46°",
        "truth": false,
        "reason": "兩角皆為正且總和 90°。"
      },
      {
        "choice": "1° 與 89°",
        "truth": false,
        "reason": "兩角皆為正且總和 90°。"
      }
    ],
    "misconceptionTarget": "只看兩角是否都不超過九十度，沒有逐組檢查互餘所要求的總和恰為九十度。",
    "prerequisiteCheck": "能辨認正角與互餘總和。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位一致。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需檢查四組的邊界與總和。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "04fe75a55dc3f7817eddd5fad4f581f44a76108ae2fe844d85939dfd11df98ed"
  },
  {
    "questionId": "u08-s002-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一扇門從完全關閉轉到開啟 90°。安全規範要求再開啟的角度與目前角度互補。若目前已開 65°，還需再開多少度才能達到規範所說的直角位置？",
    "givenConditions": [
      "完全關閉視為 0°。",
      "目前開 65°。",
      "規範目標為 90°。"
    ],
    "target": "依門的開啟規格求剩餘互餘角",
    "choices": [
      "115°",
      "65°",
      "25°",
      "155°"
    ],
    "answerIndex": 2,
    "independentSolution": "從 65° 增至 90° 的差為 25°。",
    "explanation": "規範的直角位置是從關閉狀態量得 90°，目前門已開 65°，所以仍需增加的角度是 90°－65°＝25°。增加後總開角為 65°＋25°＝90°，正好到達規定位置。",
    "steps": [
      "把完全關閉視為 0°，確認目標總開角為 90°。",
      "以目標角減目前角：90°－65°＝25°。",
      "驗算 65°＋25°＝90°，所以還需再開 25°。"
    ],
    "optionAnalysis": [
      {
        "choice": "115°",
        "truth": false,
        "reason": "115° 是 65° 的補角，不是到 90° 的剩餘角。"
      },
      {
        "choice": "65°",
        "truth": false,
        "reason": "重複目前角度不會達 90°。"
      },
      {
        "choice": "25°",
        "truth": true,
        "reason": "題目明示目標是 90° 的直角位置，因此剩餘角 90°−65°=25°。"
      },
      {
        "choice": "155°",
        "truth": false,
        "reason": "65+155=220，與直角無關。"
      }
    ],
    "misconceptionTarget": "把目前六十五度當成仍需增加的角度，或誤用一百八十度計算而得到一百一十五度。",
    "prerequisiteCheck": "能辨認互餘總和。",
    "estimatedTimeSec": 90,
    "unitCheck": "開啟角與答案均以 ° 表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "生活情境中的『再開多少』要求計算角度差，而非單純分類。",
    "literacyContextNecessity": "門的目前開啟角與目標直角是不可刪除的操作資訊；沒有這些情境條件就無法判斷是求餘角還是補角。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "6d23e44011110e821280194c12c1b03983495965192f1afde1c6947442d1a384"
  },
  {
    "questionId": "u08-s002-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "道路設計規定兩段轉向角互補。第一段轉向 112°，第二段應設定多少度？",
    "givenConditions": [
      "兩段轉向角互補。",
      "第一段為 112°。"
    ],
    "target": "由互補轉向規格求第二角",
    "choices": [
      "22°",
      "112°",
      "248°",
      "68°"
    ],
    "answerIndex": 3,
    "independentSolution": "計算平角總量扣除第一段，得到 68°。",
    "explanation": "兩段轉向角互補表示總和為 180°。第一段已占 112°，第二段應為 180°－112°＝68°；回代 112°＋68°＝180°，符合道路設計條件，因此答案是 68°，不是把第一段角度原樣複製。",
    "steps": [
      "將互補條件寫成 112°＋x＝180°。",
      "由平角總量扣除第一段，x＝180°－112°＝68°。",
      "相加驗算 112°＋68°＝180°，確認第二段設定 68°。"
    ],
    "optionAnalysis": [
      {
        "choice": "22°",
        "truth": false,
        "reason": "把 112 與 90 比較，錯求餘角且得到負值後取絕對值。"
      },
      {
        "choice": "112°",
        "truth": false,
        "reason": "互補不要求兩角相等。"
      },
      {
        "choice": "248°",
        "truth": false,
        "reason": "用 360°−112°，那是繞一周的剩餘角。"
      },
      {
        "choice": "68°",
        "truth": true,
        "reason": "互補總和 180°，第二段=180°−112°=68°。"
      }
    ],
    "misconceptionTarget": "把互補誤當互餘而用九十度相減，或將已知的一百一十二度直接當作第二段。",
    "prerequisiteCheck": "能使用互補定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度單位一致。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需要將工程規格『互補』轉成總和 180°。",
    "literacyContextNecessity": "道路轉向情境中的『互補』是設計約束，第二段角度直接由第一段與 180° 的總和條件決定。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "ae0227f5fbd0e474fa409d9a1bab7121205015ed1dbdf063b28aec4813f25f69"
  },
  {
    "questionId": "u08-s002-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "攝影棚兩盞燈的照射方向夾角分別設定為 (x+15)° 與 (2x−5)°，規格要求兩角互餘。哪一個 x 值符合規格？",
    "givenConditions": [
      "兩照射角分別為 x+15 與 2x−5。",
      "規格要求總和 90°。"
    ],
    "target": "由互餘照明規格解參數",
    "choices": [
      "x=80/3",
      "x=20",
      "x=30",
      "x=40"
    ],
    "answerIndex": 0,
    "independentSolution": "規格方程解為 80/3，代回兩角為 125/3° 與 145/3°，總和 90°。",
    "explanation": "規格要求兩照射角互餘，所以 (x＋15)＋(2x－5)＝90。整理得 3x＋10＝90、3x＝80，故 x＝80/3。代回角度為 125/3° 與 145/3°，相加正好 90°；兩角均為正值，也符合實際角度範圍，因此解答有效。",
    "steps": [
      "依互餘條件列式 (x＋15)＋(2x－5)＝90。",
      "合併同類項得 3x＋10＝90，解得 x＝80/3。",
      "代回兩角並相加為 90°，確認唯一符合的選項。"
    ],
    "optionAnalysis": [
      {
        "choice": "x=80/3",
        "truth": true,
        "reason": "(x+15)+(2x−5)=90，3x+10=90，所以 x=80/3。"
      },
      {
        "choice": "x=20",
        "truth": false,
        "reason": "代回得 35° 與 35°，總和 70°。"
      },
      {
        "choice": "x=30",
        "truth": false,
        "reason": "代回得 45° 與 55°，總和 100°。"
      },
      {
        "choice": "x=40",
        "truth": false,
        "reason": "代回得 55° 與 75°，總和 130°。"
      }
    ],
    "misconceptionTarget": "把互餘方程右側寫成一百八十，或合併正十五與負五時漏掉常數十。",
    "prerequisiteCheck": "能解一元一次方程與使用互餘定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "x 無單位；代回後角度單位為 °。",
    "roundingCheck": "答案為精確分數 80/3，不得任意取近似值。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "參數不是整數，需保留精確分數並驗證兩角皆為正。",
    "literacyContextNecessity": "照明規格把兩個可調角度連成總和 90° 的約束；情境中的兩個設定式都是求參數不可缺少的資料。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "10099f705f396185582d1d82078b6274c8a31fbe05a9661fa1a8eda3912fd6d0"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s002-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "一個角的度數比它的餘角多 18°。求這個角與它的餘角，並判斷原角屬於銳角、直角或鈍角。",
    "requiredWork": [
      "設未知數並列出互餘關係。",
      "求兩個角。",
      "分類原角。"
    ],
    "standardSolution": [
      "設原角為 x°，因互餘兩角合為 90°，它的餘角可表示為 (90－x)°。",
      "原角比餘角多 18°，所以 x＝(90－x)＋18，整理得 2x＝108，故 x＝54。",
      "餘角為 90°－54°＝36°，驗算 54°－36°＝18° 且 54°＋36°＝90°。",
      "原角 54° 介於 0° 與 90° 之間，因此原角是銳角。"
    ],
    "alternativeMethods": [
      "可設餘角為 y°，原角 y+18，列 y+(y+18)=90，得 y=36。"
    ],
    "reasoningSteps": [
      "互餘兩角和90°。",
      "用相差18°建立關係。",
      "解出54°與36°。",
      "依54°範圍分類。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "列式正確，求得原角54°、餘角36°，並判為銳角。"
      },
      {
        "score": 2,
        "criteria": "兩角數值正確但分類或文字理由缺一；或列式正確有輕微算術錯仍合理完成分類。"
      },
      {
        "score": 1,
        "criteria": "知道兩角和90°並建立可辨認的式子，但未完整解出；或只答54°、36°無過程。"
      },
      {
        "score": 0,
        "criteria": "把互餘當180°，或所得角不滿足和90與差18。"
      }
    ],
    "partialCreditRules": [
      "原角與餘角名稱不可對調；若只對調但兩數與關係正確，最高2分。"
    ],
    "followThroughPolicy": "若解方程時單一算術錯誤，後續分類依錯誤值一致可給方法分，最高2分。",
    "unitAndNotationRules": "所有角度須標°；互餘條件須寫和為90°。",
    "answerOnlyPolicy": "只答「54°、36°、銳角」最高2分，因缺少建立關係。",
    "commonErrors": [
      "把餘角誤當補角。",
      "算出36後把原角判為36。"
    ],
    "independentReview": {
      "derivedResult": "原角54°，餘角36°，原角為銳角。",
      "ambiguityAudit": "『比餘角多18°』明確指定原角較大，排除54與36互換。",
      "reviewNote": "獨立驗算54+36=90、54−36=18，且0<54<90，三項條件全部通過。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "geometry-basic-elements"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "09b97b2b67c76e6e4f55350111240880ac635366b5aa7ad20dcb988782622aa1"
  },
  {
    "questionId": "u08-s002-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-elements",
    "skillId": "angle-types-measure",
    "lockedSkillTitle": "角的種類與互餘互補",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "角 A 與角 B 互補，角 B 又是角 A 的 2 倍少 15°。求兩角，並檢查兩角的種類。",
    "requiredWork": [
      "列出 A+B=180°。",
      "把 B 表成 A 的式子並求解。",
      "分類兩角並驗算互補。"
    ],
    "standardSolution": [
      "設角 A＝x°，則「角 B 是角 A 的 2 倍少 15°」表示 B＝(2x－15)°。",
      "A、B 互補，所以 x＋(2x－15)＝180，整理得 3x＝195，解得 x＝65。",
      "因此 A＝65°，B＝2×65°－15°＝115°；兩角相加為 180°，符合互補。",
      "65° 小於 90°，所以 A 是銳角；115° 介於 90° 與 180° 之間，所以 B 是鈍角。"
    ],
    "alternativeMethods": [
      "可設 B=y°，則 A=(y+15)÷2，再代入 A+B=180 求 y=115。"
    ],
    "reasoningSteps": [
      "把互補翻成總和180°。",
      "依文字建立倍數減15。",
      "解出A=65、B=115。",
      "用範圍分類並驗算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "A=65°、B=115°，方程、分類與互補驗算均完整。"
      },
      {
        "score": 2,
        "criteria": "兩角正確但少一個分類或驗算；或方法正確僅有一處算術小錯。"
      },
      {
        "score": 1,
        "criteria": "正確列出 x+(2x−15)=180 或等價式，但未完成；或只給正確兩角無推導。"
      },
      {
        "score": 0,
        "criteria": "把互補當90°，或建立 B=2(A−15) 導致概念錯誤且未修正。"
      }
    ],
    "partialCreditRules": [
      "若角名對調但清楚改變了倍數敘述，不可視為同一答案。"
    ],
    "followThroughPolicy": "早期算術錯誤後若仍依 A+B=180 與 B=2A−15 完整推進，可給1至2分；結果不再給正確分。",
    "unitAndNotationRules": "角 A、B 的符號須與題意一致，角度附°。",
    "answerOnlyPolicy": "只寫65°、115°最高1分，因無法確認哪個是A及倍數關係。",
    "commonErrors": [
      "把『2倍少15』解讀為2(A−15)。",
      "兩角都判為銳角。"
    ],
    "independentReview": {
      "derivedResult": "A=65°，B=115°；分別為銳角、鈍角。",
      "ambiguityAudit": "倍數敘述有固定運算次序：B=2A−15；題目沒有其他合法語意。",
      "reviewNote": "獨立代回 B=2×65−15=115 且總和180，分類也符合角度範圍。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "geometry-basic-elements"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "0fd91bac5b26c65433119a506aa6fc6317d5c8c50bec082b00e252167566a86a"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s002-v001",
    "unitId": "u08",
    "skillId": "angle-types-measure",
    "contentSha256": "eabfaed57adf72f95231dde00b5690479c3ee525b2c54ae4d6421983cc97dac8",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "按角度範圍重查，89° 未達直角界線。",
    "derivedAnswer": "銳角",
    "storedAnswer": "銳角",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「銳角」符合目標「分類 89° 的角」。其餘選項分別違反：直角必須恰為 90°。；鈍角必須大於 90°。；平角為 180°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「角的種類與互餘互補」講義已定義範圍；本題特別使用：角度為精確的 89°。",
      "unitConflict": "角度以度（°）表示，無單位轉換。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「分類 89° 的角」重新讀題，並針對誤解「把接近 90° 的角誤判為直角。」排除另一解讀。"
    },
    "difficultyReason": "只需與分類界線比較，屬基礎辨認。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能讀角度符號並理解角的基本記號。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「分類 89° 的角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：按角度範圍重查，89° 未達直角界線。 正確選項為「銳角」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "38bb01958f3ed4c6a20d7c7a7168ad64c7ce1d992957798b0f049b776207322c"
  },
  {
    "questionId": "u08-s002-v002",
    "unitId": "u08",
    "skillId": "angle-types-measure",
    "contentSha256": "13ea26d4673905e6e6d47cecca8a53b026856e7444d41a028d6177513d42b50f",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "逐一比較可知只有 90° 符合直角定義。",
    "derivedAnswer": "90°",
    "storedAnswer": "90°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「90°」符合目標「辨認直角的度數」。其餘選項分別違反：0° 沒有張開，不是直角。；89° 是銳角。；180° 是平角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「角的種類與互餘互補」講義已定義範圍；本題特別使用：四個選項皆以度數表示。",
      "unitConflict": "角度單位均為 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「辨認直角的度數」重新讀題，並針對誤解「把 180° 的平角當直角。」排除另一解讀。"
    },
    "difficultyReason": "單一定義回憶。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能讀取角度。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「辨認直角的度數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：逐一比較可知只有 90° 符合直角定義。 正確選項為「90°」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "4f6409495d5c5210e969ab801f20b7a2c9d4332babd5742b68c09925746ff200"
  },
  {
    "questionId": "u08-s002-v003",
    "unitId": "u08",
    "skillId": "angle-types-measure",
    "contentSha256": "21eaa7eaa1be890662fc72d55085e84ce6534131c68ab77caabe2855c8801d54",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "重算兩角和為 90°，唯一對應互餘。",
    "derivedAnswer": "互餘",
    "storedAnswer": "互餘",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「互餘」符合目標「判斷兩角是否互餘」。其餘選項分別違反：互補要求總和 180°。；35° 不等於 55°。；兩角總和已可直接判定關係。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「角的種類與互餘互補」講義已定義範圍；本題特別使用：兩角為 35°、55°。",
      "unitConflict": "兩角皆以 ° 表示，直接相加。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判斷兩角是否互餘」重新讀題，並針對誤解「把互餘與互補的總和混淆。」排除另一解讀。"
    },
    "difficultyReason": "只需一次加法與定義對照。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能做整數加法並理解角度。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷兩角是否互餘」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：重算兩角和為 90°，唯一對應互餘。 正確選項為「互餘」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "5052a8b57ffa78dde9c776ddb03f2c6b9dc4584077ae5eca20af0ab9615a6310"
  },
  {
    "questionId": "u08-s002-v004",
    "unitId": "u08",
    "skillId": "angle-types-measure",
    "contentSha256": "ad5f43813be3d4945e9a8c568438fe3976620fff93426de4ef3bd289fd6ee150",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由互餘定義重算，22° 與 68° 合為 90°。",
    "derivedAnswer": "22°",
    "storedAnswer": "22°",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「22°」符合目標「求 68° 的餘角」。其餘選項分別違反：112° 是 68° 的補角。；餘角不必與原角相等。；超出本技能基本角範圍且總和不為 90°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「角的種類與互餘互補」講義已定義範圍；本題特別使用：已知角為 68°。",
      "unitConflict": "計算與答案均以度為單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求 68° 的餘角」重新讀題，並針對誤解「誤用 180° 求補角。」排除另一解讀。"
    },
    "difficultyReason": "直接代入餘角公式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認互餘總和 90°。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求 68° 的餘角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由互餘定義重算，22° 與 68° 合為 90°。 正確選項為「22°」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "20493ba43e66a63b63d8170d337f05f3e6800eae0c1f2df2165954735a319af1"
  },
  {
    "questionId": "u08-s002-v005",
    "unitId": "u08",
    "skillId": "angle-types-measure",
    "contentSha256": "634599e5b71748e4e6f26af109330375df6dbee262720217b31cb0bf365f733a",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "重算差為 43°，且總和回到 180°。",
    "derivedAnswer": "43°",
    "storedAnswer": "43°",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「43°」符合目標「求 137° 的補角」。其餘選項分別違反：這是把 137 誤看成 133 後的差。；補角應與原角合為 180°，不是加到 360°。；137+53=190，不是 180。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「角的種類與互餘互補」講義已定義範圍；本題特別使用：已知角 137°。",
      "unitConflict": "所有角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求 137° 的補角」重新讀題，並針對誤解「把補角總和誤用成 360°。」排除另一解讀。"
    },
    "difficultyReason": "需要一次減法與驗算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用互補定義。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求 137° 的補角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：重算差為 43°，且總和回到 180°。 正確選項為「43°」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "9e2968bf96aeb6c389b8badc0c465b513b854116a9354a1ff0e28435ed5d4061"
  },
  {
    "questionId": "u08-s002-v006",
    "unitId": "u08",
    "skillId": "angle-types-measure",
    "contentSha256": "83c47d4ac0be8588d4d26592d4590c8abac50fec96efe4d9809b8cf8c0937a33",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "比例單位角 36°，較小角為 2×36°=72°。",
    "derivedAnswer": "72°",
    "storedAnswer": "72°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「72°」符合目標「以比例求互補角」。其餘選項分別違反：把 180° 除以 5 後未乘 2。；把互補誤當三等分。；108° 是較大角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「角的種類與互餘互補」講義已定義範圍；本題特別使用：兩角互補。",
      "unitConflict": "比例無單位，結果為角度 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「以比例求互補角」重新讀題，並針對誤解「只取一份或答較大角。」排除另一解讀。"
    },
    "difficultyReason": "需結合總和與比例分配，屬標準題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用互補總和與基本比例。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「以比例求互補角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：比例單位角 36°，較小角為 2×36°=72°。 正確選項為「72°」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "94bfe475f6f226088386b35c990617b7d60de276998bef4dc7089109342dcc61"
  },
  {
    "questionId": "u08-s002-v007",
    "unitId": "u08",
    "skillId": "angle-types-measure",
    "contentSha256": "3560cb0aa9840e8caf7937dfd6340723da3e3ad6474e7c56429489cd1a4a2627",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "重建等式後得到 x=17，驗算 57+33=90。",
    "derivedAnswer": "17",
    "storedAnswer": "17",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「17」符合目標「解含未知數的互餘角」。其餘選項分別違反：把總和誤設為 50。；解到 5x=85 後未除以 5。；代回後兩角總和為 100°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「角的種類與互餘互補」講義已定義範圍；本題特別使用：兩角互餘。",
      "unitConflict": "x 為無單位數，代回角度式後單位為 °。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「解含未知數的互餘角」重新讀題，並針對誤解「把互餘總和設為 180° 或漏合併常數。」排除另一解讀。"
    },
    "difficultyReason": "需正確展開兩角並回代檢查。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用一元一次方程與互餘定義。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「解含未知數的互餘角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：重建等式後得到 x=17，驗算 57+33=90。 正確選項為「17」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "6e65c1c44939f4a27c6bb06784b8296c70ea93780010828c9336ee7ad3074e54"
  },
  {
    "questionId": "u08-s002-v008",
    "unitId": "u08",
    "skillId": "angle-types-measure",
    "contentSha256": "a0ab84fb168c5c654186429e5f4a5ed61b2285a3a8e7551bf94b669265657ea9",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立驗算 78+102=180 且 102−78=24。",
    "derivedAnswer": "78°",
    "storedAnswer": "78°",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「78°」符合目標「由角與補角的差反求原角」。其餘選項分別違反：102° 是補角，不是原角。；66° 的補角 114°，差 48°。；84° 的補角 96°，只大 12°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「角的種類與互餘互補」講義已定義範圍；本題特別使用：兩角互補。",
      "unitConflict": "所有角度以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由角與補角的差反求原角」重新讀題，並針對誤解「將 24° 直接從 180° 減去而未平均分差。」排除另一解讀。"
    },
    "difficultyReason": "需同時滿足總和與差，推理多一步。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能列一元一次方程。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由角與補角的差反求原角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立驗算 78+102=180 且 102−78=24。 正確選項為「78°」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "427cc6e8032b1bfabc1edabf46d8b1b1ccde827182f77709201c7c59940f778e"
  },
  {
    "questionId": "u08-s002-v009",
    "unitId": "u08",
    "skillId": "angle-types-measure",
    "contentSha256": "04fe75a55dc3f7817eddd5fad4f581f44a76108ae2fe844d85939dfd11df98ed",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "逐一重算四組總和，第一指定組不符合互餘。",
    "derivedAnswer": "10° 與 90°",
    "storedAnswer": "10° 與 90°",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「10° 與 90°」符合目標「判斷互餘條件的可行性」。其餘選項分別違反：兩角皆為正且總和 90°。；兩角皆為正且總和 90°。；兩角皆為正且總和 90°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「角的種類與互餘互補」講義已定義範圍；本題特別使用：要求兩角皆為正角。",
      "unitConflict": "角度單位一致。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判斷互餘條件的可行性」重新讀題，並針對誤解「只看到其中有 90° 就誤以為與任何角互餘。」排除另一解讀。"
    },
    "difficultyReason": "需檢查四組的邊界與總和。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認正角與互餘總和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷互餘條件的可行性」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：逐一重算四組總和，第一指定組不符合互餘。 正確選項為「10° 與 90°」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "5b02dfff246e012a4be92b4029be5e8cf5a3a45f002c6ff1c25f7a2fd4a84618"
  },
  {
    "questionId": "u08-s002-v010",
    "unitId": "u08",
    "skillId": "angle-types-measure",
    "contentSha256": "6d23e44011110e821280194c12c1b03983495965192f1afde1c6947442d1a384",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "以門軸起始方向為同一基準，90−65=25。",
    "derivedAnswer": "25°",
    "storedAnswer": "25°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「25°」符合目標「依門的開啟規格求剩餘互餘角」。其餘選項分別違反：115° 是 65° 的補角，不是到 90° 的剩餘角。；重複目前角度不會達 90°。；65+155=220，與直角無關。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「角的種類與互餘互補」講義已定義範圍；本題特別使用：完全關閉視為 0°。",
      "unitConflict": "開啟角與答案均以 ° 表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「依門的開啟規格求剩餘互餘角」重新讀題，並針對誤解「看到『規範』後誤選補角 180°。」排除另一解讀。"
    },
    "difficultyReason": "生活情境中的『再開多少』要求計算角度差，而非單純分類。",
    "literacyContextNecessity": "門的目前開啟角與目標直角是不可刪除的操作資訊；沒有這些情境條件就無法判斷是求餘角還是補角。",
    "prerequisiteCheck": "能辨認互餘總和。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「依門的開啟規格求剩餘互餘角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：以門軸起始方向為同一基準，90−65=25。 正確選項為「25°」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "662cdee7ff5f858c2e2791d0e133dfbea8dddb8ffd7a022fb66a15c803dc3fa9"
  },
  {
    "questionId": "u08-s002-v011",
    "unitId": "u08",
    "skillId": "angle-types-measure",
    "contentSha256": "ae0227f5fbd0e474fa409d9a1bab7121205015ed1dbdf063b28aec4813f25f69",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "驗算 112°+68°=180°，符合規格。",
    "derivedAnswer": "68°",
    "storedAnswer": "68°",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「68°」符合目標「由互補轉向規格求第二角」。其餘選項分別違反：把 112 與 90 比較，錯求餘角且得到負值後取絕對值。；互補不要求兩角相等。；用 360°−112°，那是繞一周的剩餘角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「角的種類與互餘互補」講義已定義範圍；本題特別使用：兩段轉向角互補。",
      "unitConflict": "角度單位一致。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由互補轉向規格求第二角」重新讀題，並針對誤解「把道路轉向誤用一周角 360°。」排除另一解讀。"
    },
    "difficultyReason": "需要將工程規格『互補』轉成總和 180°。",
    "literacyContextNecessity": "道路轉向情境中的『互補』是設計約束，第二段角度直接由第一段與 180° 的總和條件決定。",
    "prerequisiteCheck": "能使用互補定義。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由互補轉向規格求第二角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：驗算 112°+68°=180°，符合規格。 正確選項為「68°」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "4d60ef0f7327435a894a45bc88313d7d3aa98974d8ce7b2e4a8b701192dd84ab"
  },
  {
    "questionId": "u08-s002-v012",
    "unitId": "u08",
    "skillId": "angle-types-measure",
    "contentSha256": "10099f705f396185582d1d82078b6274c8a31fbe05a9661fa1a8eda3912fd6d0",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立以分數代回，125/3+145/3=270/3=90。",
    "derivedAnswer": "x=80/3",
    "storedAnswer": "x=80/3",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「x=80/3」符合目標「由互餘照明規格解參數」。其餘選項分別違反：代回得 35° 與 35°，總和 70°。；代回得 45° 與 55°，總和 100°。；代回得 55° 與 75°，總和 130°。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「角的種類與互餘互補」講義已定義範圍；本題特別使用：兩照射角分別為 x+15 與 2x−5。",
      "unitConflict": "x 無單位；代回後角度單位為 °。",
      "roundingConflict": "答案為精確分數 80/3，不得任意取近似值。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由互餘照明規格解參數」重新讀題，並針對誤解「只比較兩角是否相等，忽略互餘是總和條件。」排除另一解讀。"
    },
    "difficultyReason": "參數不是整數，需保留精確分數並驗證兩角皆為正。",
    "literacyContextNecessity": "照明規格把兩個可調角度連成總和 90° 的約束；情境中的兩個設定式都是求參數不可缺少的資料。",
    "prerequisiteCheck": "能解一元一次方程與使用互餘定義。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由互餘照明規格解參數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立以分數代回，125/3+145/3=270/3=90。 正確選項為「x=80/3」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "1ca7d896658e2c414c8dc6a00e4385965ec263615a0c029f36ba9fad2d79d47e"
  }
];

export const DRAWING_SPECS = [];

