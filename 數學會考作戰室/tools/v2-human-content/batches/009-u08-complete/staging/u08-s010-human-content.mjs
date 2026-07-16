// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s010-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-measure",
  "skillId": "composite-area-text",
  "lockedSkillTitle": "文字敘述的複合面積",
  "title": "文字敘述的複合面積：先建立整體再加減區塊",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能從文字辨認外框、挖除區與重疊區。",
    "能用分割相加或整體相減求複合面積。",
    "能處理等寬走道與邊框。",
    "能檢查是否重複計算或漏算。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "perimeter-area-basic"
    ],
    "bridgeExplanation": "先熟悉基本圖形面積，再把複合圖形看成幾個已知面積的加減。"
  },
  "prerequisites": [
    {
      "skillId": "perimeter-area-basic",
      "requiredLevel": "能計算長方形、三角形、平行四邊形與梯形面積，並使用平方單位。"
    }
  ],
  "glossary": [
    {
      "term": "外框",
      "definition": "包含整個圖形的基本大圖形。"
    },
    {
      "term": "挖除",
      "definition": "從整體移去的區域，面積用減法。"
    },
    {
      "term": "拼接",
      "definition": "不重疊區塊合併，面積用加法。"
    },
    {
      "term": "重疊區",
      "definition": "兩區同時包含的部分，直接相加時會被算兩次。"
    },
    {
      "term": "等寬邊框",
      "definition": "沿外框四周寬度相同的帶狀區域。"
    }
  ],
  "notation": [
    {
      "symbol": "複合面積=整體−挖除",
      "meaning": "適合有洞或空白區。"
    },
    {
      "symbol": "聯集面積=A+B−重疊",
      "meaning": "兩區有重疊時避免重複計算。"
    }
  ],
  "conceptDevelopment": [
    "沒有圖也能解複合面積，關鍵是把文字轉成『哪一塊包含哪一塊』。先列尺寸與位置，再決定加法或減法。",
    "外框挖去內框時，內框每個方向通常要減去兩側邊寬。例如長方形四周各留 1 公尺，內長與內寬都各減 2 公尺。",
    "兩個區域若不重疊，面積直接相加；若重疊，A+B 會把重疊算兩次，所以要減一次。",
    "分割法與補形法應得到相同結果，可互相驗算。"
  ],
  "formalDefinitions": [
    {
      "name": "分割法",
      "statement": "把圖形切成互不重疊的基本區塊，再相加。"
    },
    {
      "name": "補形法",
      "statement": "先算容易的外框，再減去不需要的區域。"
    },
    {
      "name": "包含排除",
      "statement": "兩集合面積相加後減去重疊一次。"
    }
  ],
  "formulas": [
    {
      "formula": "外框邊框面積=外框面積−內框面積",
      "conditions": [
        "內框完全位於外框內"
      ],
      "meaning": "求四周帶狀區。"
    },
    {
      "formula": "A∪B 面積=A面積+B面積−重疊面積",
      "conditions": [
        "A、B 可能重疊"
      ],
      "meaning": "避免重複計數。"
    }
  ],
  "invalidUseCases": [
    "四周寬 1 公尺時，內長不是只減 1 公尺，而是減左右兩側共 2 公尺。",
    "挖除區不能相加。",
    "兩區共享邊界但沒有面積重疊時，不需減重疊。",
    "文字未說重疊或包含時，不可自行假設。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "列出外框、內框、挖除區與重疊區的尺寸。",
      "check": "每個數值對應哪一塊區域？"
    },
    {
      "step": 2,
      "instruction": "選擇互不重疊分割相加或整體減挖除。",
      "check": "哪種表示使用的區塊較少且不漏算？"
    },
    {
      "step": 3,
      "instruction": "遇到兩區重疊時先求交集。",
      "check": "相加後哪一部分被計算兩次？"
    },
    {
      "step": 4,
      "instruction": "四周等寬走道先換成內部長與寬。",
      "check": "每個方向是否都扣了兩側寬度？"
    },
    {
      "step": 5,
      "instruction": "統一單位後逐區計算並組合。",
      "check": "公分是否已換成公尺，平方單位是否一致？"
    },
    {
      "step": 6,
      "instruction": "用外框上限、非負性或另一種分法驗算。",
      "check": "剩餘或合併面積是否符合整體關係？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "一塊 12×8 平方公尺長方形草地挖去 3×2 平方公尺花圃，草地剩餘面積？",
      "solutionSteps": [
        "外框面積 12×8=96。",
        "挖除 3×2=6。",
        "96−6=90。"
      ],
      "answer": "90 平方公尺。",
      "why": "花圃完整位於草地內且是不保留的挖除區，因此用外框九十六減六最直接；所得九十小於整體且為正，量級合理。"
    },
    {
      "exampleId": "L2",
      "prompt": "兩個互不重疊長方形面積分別為 24、35 平方公分，拼接後面積？",
      "solutionSteps": [
        "沒有重疊，直接相加。",
        "24+35=59。"
      ],
      "answer": "59 平方公分。",
      "why": "互不重疊保證每一塊只被計算一次，所以聯集面積直接相加；不需要扣交集，也不能以兩個面積相乘表示拼接。"
    },
    {
      "exampleId": "L3",
      "prompt": "10×7 公尺地坪四周內側留 1 公尺等寬走道，中央區面積？",
      "solutionSteps": [
        "內長=10−2=8，內寬=7−2=5。",
        "中央面積=8×5=40。"
      ],
      "answer": "40 平方公尺。",
      "why": "四周等寬表示長方向扣左右兩側、寬方向扣上下兩側；先求內部實際尺寸八與五，才能避免每方向只扣一次。"
    },
    {
      "exampleId": "L4",
      "prompt": "區域 A 面積 50、B 面積 32，重疊 12 平方公尺，合併覆蓋面積？",
      "solutionSteps": [
        "相加得 82，但重疊算了兩次。",
        "82−12=70。"
      ],
      "answer": "70 平方公尺。",
      "why": "A 與 B 各自面積都包含同一塊十二平方公尺，直接相加會保留兩份；減去一份交集後，聯集中的每一位置恰好計一次。"
    }
  ],
  "levelConnections": {
    "basic": "整體減去單一挖除區。",
    "standard": "四周等寬邊框與分割拼接。",
    "advanced": "處理重疊區與多步尺寸推算。",
    "literacy": "公園步道、建築中庭、材料裁切與塗裝面積都需先判斷包含或重疊。"
  },
  "commonMistakes": [
    {
      "mistake": "挖除面積仍用加法。",
      "why": "沒有辨認空白區。",
      "correction": "整體減去挖除。"
    },
    {
      "mistake": "四周邊框只讓長寬各減一次寬度。",
      "why": "漏掉兩側。",
      "correction": "內長與內寬各減 2×邊寬。"
    },
    {
      "mistake": "兩重疊區直接相加。",
      "why": "重疊算兩次。",
      "correction": "相加後減重疊一次。"
    },
    {
      "mistake": "共享一條邊也減重疊。",
      "why": "邊界長度沒有面積。",
      "correction": "只有有寬度的共同區域才算重疊面積。"
    },
    {
      "mistake": "結果大於外框卻未檢查。",
      "why": "加減方向可能錯。",
      "correction": "剩餘或內框面積應不超過外框。"
    },
    {
      "mistake": "把公尺尺寸算完寫公尺。",
      "why": "面積單位漏平方。",
      "correction": "結果寫平方公尺。"
    }
  ],
  "selfCheckItems": [
    "哪些區域要保留，哪些要移除？",
    "區塊是否重疊？",
    "四周邊寬是否要扣兩次？",
    "結果是否符合小於外框且非負？"
  ],
  "conciseSummary": [
    "複合面積可用分割相加或整體相減。",
    "重疊區在直接相加時要減一次。",
    "四周等寬邊框使內長、內寬各減兩倍邊寬。",
    "先畫文字關係草稿再運算。"
  ],
  "connections": {
    "previous": "上一技能提供各基本圖形面積公式。",
    "next": [
      "下一技能處理長度與面積單位換算，確保複合面積各尺寸可運算。"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "四個例題分別重算為 90、59、40、70；等寬走道內長與內寬均扣兩側，重疊例題使用 50+32−12，且所有答案保持平方單位。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "6c18438404f672565e31bff038c40b3257362f975e192b05c604dfe19678198e"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s010-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個 10 公分×8 公分的長方形，挖去一個 2 公分×3 公分的長方形。剩餘面積是多少？",
    "givenConditions": [
      "外框 10×8 公分。",
      "挖除 2×3 公分。"
    ],
    "target": "求單一挖除後的剩餘面積",
    "choices": [
      "86 平方公分",
      "74 平方公分",
      "80 平方公分",
      "54 平方公分"
    ],
    "answerIndex": 1,
    "independentSolution": "剩餘 74 平方公分。",
    "explanation": "外長方形面積為 10×8=80 平方公分，挖去部分面積為 2×3=6 平方公分。剩餘區域是整體扣除挖除區，所以 80−6=74 平方公分；兩區尺寸單位一致，可直接相減。",
    "steps": [
      "計算外長方形面積八十平方公分。",
      "計算挖去長方形面積六平方公分。",
      "用八十減六，得到剩餘七十四平方公分。"
    ],
    "optionAnalysis": [
      {
        "choice": "86 平方公分",
        "truth": false,
        "reason": "把挖除面積加上外框。"
      },
      {
        "choice": "74 平方公分",
        "truth": true,
        "reason": "外框 10×8=80，挖除 2×3=6，剩餘 80−6=74。"
      },
      {
        "choice": "80 平方公分",
        "truth": false,
        "reason": "只算外框，未扣挖除。"
      },
      {
        "choice": "54 平方公分",
        "truth": false,
        "reason": "錯把外框算成 60。"
      }
    ],
    "misconceptionTarget": "把挖去區面積加回整體，或只用邊長相減而沒有計算面積。",
    "prerequisiteCheck": "能求長方形面積。",
    "estimatedTimeSec": 90,
    "unitCheck": "尺寸公分相乘，答案平方公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接整體相減。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "261968f684e64cdd4fcbba21853a9c50b998f5dbe30823ad21a8930685eb3c29"
  },
  {
    "questionId": "u08-s010-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩個互不重疊區域面積為 18 平方公尺與 27 平方公尺，合併面積是多少？",
    "givenConditions": [
      "兩區互不重疊。",
      "面積 18、27 平方公尺。"
    ],
    "target": "合併不重疊區域面積",
    "choices": [
      "45 平方公尺",
      "9 平方公尺",
      "486 平方公尺",
      "54 平方公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "合併面積 45 平方公尺。",
    "explanation": "兩個區域明示互不重疊，所以合併後每一部分只計一次，直接相加 18+27=45 平方公尺。相減九平方公尺是在求差，十八乘二十七也沒有面積合併意義，因此第一項正確。",
    "steps": [
      "確認兩區互不重疊，不需要扣交集。",
      "將兩個面積十八與二十七直接相加。",
      "得到四十五平方公尺，保留相同平方單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "45 平方公尺",
        "truth": true,
        "reason": "互不重疊時直接相加：18+27=45。"
      },
      {
        "choice": "9 平方公尺",
        "truth": false,
        "reason": "把兩面積相減。"
      },
      {
        "choice": "486 平方公尺",
        "truth": false,
        "reason": "把面積再相乘。"
      },
      {
        "choice": "54 平方公尺",
        "truth": false,
        "reason": "計算加法錯誤。"
      }
    ],
    "misconceptionTarget": "把合併面積誤算成兩數之差或乘積，忽略互不重疊可直接相加。",
    "prerequisiteCheck": "能做面積加法。",
    "estimatedTimeSec": 90,
    "unitCheck": "同為平方公尺，可直接相加。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "單一步驟。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "79f743757bda2d59951dc8a131342f0031bd8e287da5b2d9a57321b5bc2d54e6"
  },
  {
    "questionId": "u08-s010-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "區域 A 面積 40 平方公尺，區域 B 面積 25 平方公尺，兩者重疊 8 平方公尺。A 與 B 合併覆蓋面積是多少？",
    "givenConditions": [
      "A 面積 40。",
      "B 面積 25。",
      "重疊 8 平方公尺。"
    ],
    "target": "求兩重疊區域的聯集面積",
    "choices": [
      "65 平方公尺",
      "48 平方公尺",
      "57 平方公尺",
      "73 平方公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "合併面積 57 平方公尺。",
    "explanation": "把 A、B 面積相加得 40+25=65 平方公尺，但重疊八平方公尺在兩個面積中各算一次。合併覆蓋只保留一次，所以再減八，65−8=57 平方公尺，這是包含排除的聯集面積。",
    "steps": [
      "先把 A 與 B 面積相加，得到六十五。",
      "辨認重疊八平方公尺被重複計算一次。",
      "用六十五減八，求得合併覆蓋五十七平方公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "65 平方公尺",
        "truth": false,
        "reason": "未扣重疊，重複計算一次。"
      },
      {
        "choice": "48 平方公尺",
        "truth": false,
        "reason": "把重疊扣了兩次。"
      },
      {
        "choice": "57 平方公尺",
        "truth": true,
        "reason": "40+25−8=57，因重疊在相加時被算兩次。"
      },
      {
        "choice": "73 平方公尺",
        "truth": false,
        "reason": "把重疊加上。"
      }
    ],
    "misconceptionTarget": "直接把四十與二十五相加，沒有扣除被計算兩次的重疊部分。",
    "prerequisiteCheck": "能理解重疊計數。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有面積同為平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "基礎包含排除。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "21299ecde55e890856da1ad9730446800730415c9d2919f059805784446558bc"
  },
  {
    "questionId": "u08-s010-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "長 12 公尺、寬 9 公尺的長方形場地，四周內側留 1 公尺等寬走道。中央區域面積是多少？",
    "givenConditions": [
      "外框 12×9 公尺。",
      "四周內側走道寬 1 公尺。"
    ],
    "target": "求四周等寬走道內框面積",
    "choices": [
      "88 平方公尺",
      "99 平方公尺",
      "108 平方公尺",
      "70 平方公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "中央區域 70 平方公尺。",
    "explanation": "走道在四周內側寬一公尺，中央長度需扣左右兩側，為 12−2×1=10 公尺；寬度扣上下兩側，為 9−2×1=7 公尺。因此中央面積為 10×7=70 平方公尺。",
    "steps": [
      "長方向扣去左右各一公尺，得到內長十公尺。",
      "寬方向扣去上下各一公尺，得到內寬七公尺。",
      "以十乘七，求中央區域七十平方公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "88 平方公尺",
        "truth": false,
        "reason": "只從總面積減周長式數值，未正確求內框。"
      },
      {
        "choice": "99 平方公尺",
        "truth": false,
        "reason": "把內長 11、內寬 9 誤算。"
      },
      {
        "choice": "108 平方公尺",
        "truth": false,
        "reason": "只算外框。"
      },
      {
        "choice": "70 平方公尺",
        "truth": true,
        "reason": "內長=12−2=10，內寬=9−2=7，中央面積 10×7=70。"
      }
    ],
    "misconceptionTarget": "每個方向只扣一次走道寬，忘記四周表示左右或上下各有一側。",
    "prerequisiteCheck": "能求長方形面積。",
    "estimatedTimeSec": 90,
    "unitCheck": "長度均為公尺，答案平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需正確處理兩側扣除。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "3323e5e5d30ad9dee177b8e88df811f0d5b28f2da2033d8be61b43ade866f5f4"
  },
  {
    "questionId": "u08-s010-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一塊 15 公尺×10 公尺的地面中央挖去 5 公尺×4 公尺水池。其餘區域再鋪設 12 平方公尺步道。若步道完全位於其餘區域內，仍為草地的面積是多少？",
    "givenConditions": [
      "地面 15×10。",
      "水池 5×4。",
      "步道 12 平方公尺且不與水池重疊。"
    ],
    "target": "多次挖除與用途分區後求剩餘面積",
    "choices": [
      "130 平方公尺",
      "162 平方公尺",
      "118 平方公尺",
      "138 平方公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "草地面積 118 平方公尺。",
    "explanation": "地面整體面積為 15×10=150 平方公尺，水池面積為 5×4=20 平方公尺。其餘區域內另有十二平方公尺步道，且不與水池重疊，所以草地為 150−20−12=118 平方公尺。",
    "steps": [
      "計算整塊地面面積一百五十平方公尺。",
      "扣除水池二十平方公尺。",
      "再扣除其餘區域中的十二平方公尺步道，得到一百一十八。"
    ],
    "optionAnalysis": [
      {
        "choice": "130 平方公尺",
        "truth": false,
        "reason": "只扣水池，未扣步道。"
      },
      {
        "choice": "162 平方公尺",
        "truth": false,
        "reason": "把步道加回。"
      },
      {
        "choice": "118 平方公尺",
        "truth": true,
        "reason": "總面積 150，扣水池 20，再扣步道 12，草地 118。"
      },
      {
        "choice": "138 平方公尺",
        "truth": false,
        "reason": "水池面積計算錯。"
      }
    ],
    "misconceptionTarget": "只扣水池而漏掉步道，或把步道面積再加到可用草地。",
    "prerequisiteCheck": "能做複合面積相減。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有面積統一為平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "兩個不同扣除區的標準應用。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "125a58116e0d295ec0997b94969ff23b45734f9338e8dd5b2d44e719d01f3b2a"
  },
  {
    "questionId": "u08-s010-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個外長方形面積為 96 平方公分，內部挖去的正方形邊長 4 公分。剩餘面積是多少？",
    "givenConditions": [
      "外框面積 96 平方公分。",
      "挖除正方形邊長 4 公分。"
    ],
    "target": "由挖除正方形邊長求剩餘面積",
    "choices": [
      "92 平方公分",
      "112 平方公分",
      "64 平方公分",
      "80 平方公分"
    ],
    "answerIndex": 3,
    "independentSolution": "剩餘 80 平方公分。",
    "explanation": "內部正方形邊長四公分，挖除面積為 4×4=16 平方公分，不是四平方公分。從已知外長方形面積九十六扣除十六，得到 96−16=80 平方公分。",
    "steps": [
      "由邊長四公分求正方形面積十六平方公分。",
      "使用剩餘面積等於外部整體減挖除區。",
      "計算九十六減十六，得到八十平方公分。"
    ],
    "optionAnalysis": [
      {
        "choice": "92 平方公分",
        "truth": false,
        "reason": "把正方形面積誤當邊長 4。"
      },
      {
        "choice": "112 平方公分",
        "truth": false,
        "reason": "把挖除區加上。"
      },
      {
        "choice": "64 平方公分",
        "truth": false,
        "reason": "把外框誤減 32。"
      },
      {
        "choice": "80 平方公分",
        "truth": true,
        "reason": "正方形面積 4²=16，剩餘 96−16=80。"
      }
    ],
    "misconceptionTarget": "直接把邊長四從面積九十六中扣除，沒有先求正方形面積。",
    "prerequisiteCheck": "能辨認長度與面積不同。",
    "estimatedTimeSec": 90,
    "unitCheck": "4 公分平方成 16 平方公分後才可與 96 相減。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需先轉換量的種類。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "646e74a1981949142aac40f5f8092820b6fa25b342664436cbae9ac7b94ccbb1"
  },
  {
    "questionId": "u08-s010-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩個相同的 6 公分×4 公分長方形重疊，重疊部分為 2 公分×4 公分。合併圖形面積是多少？",
    "givenConditions": [
      "兩矩形皆 6×4 公分。",
      "重疊 2×4 公分。"
    ],
    "target": "求相同長方形重疊後的合併面積",
    "choices": [
      "40 平方公分",
      "48 平方公分",
      "32 平方公分",
      "16 平方公分"
    ],
    "answerIndex": 0,
    "independentSolution": "合併面積 40 平方公分。",
    "explanation": "每個長方形面積為 6×4=24 平方公分，兩個相加為四十八。重疊區面積為 2×4=8 平方公分，已被算兩次，合併時扣一次，所以 48−8=40 平方公分。",
    "steps": [
      "分別求兩個相同長方形面積，各二十四。",
      "求重疊部分面積八平方公分。",
      "用二十四加二十四再減八，得到四十。"
    ],
    "optionAnalysis": [
      {
        "choice": "40 平方公分",
        "truth": true,
        "reason": "每個面積 24，重疊 8，合併=24+24−8=40。"
      },
      {
        "choice": "48 平方公分",
        "truth": false,
        "reason": "未扣重疊。"
      },
      {
        "choice": "32 平方公分",
        "truth": false,
        "reason": "重疊扣了兩次。"
      },
      {
        "choice": "16 平方公分",
        "truth": false,
        "reason": "只算非重疊差。"
      }
    ],
    "misconceptionTarget": "兩個面積直接相加為四十八，沒有扣除重疊區的重複計算。",
    "prerequisiteCheck": "能求長方形與重疊面積。",
    "estimatedTimeSec": 90,
    "unitCheck": "各區尺寸皆公分，面積平方公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需多項計算與驗算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "7f8a4cc9336e57b22c080227216048a314832d80ed8b5b89dd085418d9543019"
  },
  {
    "questionId": "u08-s010-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個 24 公尺×18 公尺的長方形廣場內，有兩條寬 2 公尺的直路：一條貫穿長方向，另一條貫穿寬方向，兩路垂直相交。兩條路合計占地多少平方公尺？",
    "givenConditions": [
      "廣場24 m×18 m。",
      "兩條路寬2 m且分別貫穿兩方向。",
      "道路垂直相交。"
    ],
    "target": "處理兩個相交長方形的聯集面積",
    "choices": [
      "84 平方公尺",
      "80 平方公尺",
      "76 平方公尺",
      "432 平方公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "道路聯集面積=48+36−4=80平方公尺。",
    "explanation": "長向道路面積為 24×2=48 平方公尺，寬向道路面積為 18×2=36 平方公尺。兩路交會的 2×2=4 平方公尺被算兩次，所以合計占地為 48+36−4=80 平方公尺。",
    "steps": [
      "計算貫穿長方向道路面積四十八。",
      "計算貫穿寬方向道路面積三十六。",
      "扣除重複計算的四平方公尺交會區，得到八十。"
    ],
    "optionAnalysis": [
      {
        "choice": "84 平方公尺",
        "truth": false,
        "reason": "24×2+18×2=84把中央2×2交會區重複計算一次。"
      },
      {
        "choice": "80 平方公尺",
        "truth": true,
        "reason": "兩路面積為24×2與18×2，相交的2×2區被重複計入，故48+36−4=80平方公尺。"
      },
      {
        "choice": "76 平方公尺",
        "truth": false,
        "reason": "扣除交會區兩次，實際只需扣一次。"
      },
      {
        "choice": "432 平方公尺",
        "truth": false,
        "reason": "432是整個廣場面積，不是道路面積。"
      }
    ],
    "misconceptionTarget": "把兩條道路面積直接相加成八十四，忘記交會正方形被算了兩次。",
    "prerequisiteCheck": "需會長方形面積與重疊區只計一次。",
    "estimatedTimeSec": 150,
    "unitCheck": "長度以公尺表示，面積答案為平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "要辨認交集並用兩種方法驗算，屬進階複合面積。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "1ca226149f259c570d50ab7c2fc9e0ed98f6cd2392be866bf5dadb2877940dd3"
  },
  {
    "questionId": "u08-s010-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "L 形區域可看成 9 公尺×7 公尺長方形，右上角挖去 4 公尺×3 公尺長方形。其面積是多少？",
    "givenConditions": [
      "外框 9×7 公尺。",
      "右上挖去 4×3 公尺。"
    ],
    "target": "以補形或分割求 L 形面積",
    "choices": [
      "75 平方公尺",
      "63 平方公尺",
      "39 平方公尺",
      "51 平方公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "L 形面積 51 平方公尺。",
    "explanation": "把 L 形補成 9×7 的外長方形，面積為六十三平方公尺；右上角缺口面積為 4×3=12 平方公尺。以整體扣缺口，63−12=51 平方公尺，即為 L 形實際面積。",
    "steps": [
      "用補形法求外框長方形面積六十三。",
      "求右上挖去長方形面積十二。",
      "以六十三減十二，得到五十一平方公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "75 平方公尺",
        "truth": false,
        "reason": "把挖去部分加上。"
      },
      {
        "choice": "63 平方公尺",
        "truth": false,
        "reason": "未扣挖除。"
      },
      {
        "choice": "39 平方公尺",
        "truth": false,
        "reason": "把挖除 24 誤算。"
      },
      {
        "choice": "51 平方公尺",
        "truth": true,
        "reason": "外框 63，挖角 12，面積 51。"
      }
    ],
    "misconceptionTarget": "只算外框六十三而未扣缺角，或將缺口面積錯誤加回。",
    "prerequisiteCheck": "能使用整體相減。",
    "estimatedTimeSec": 90,
    "unitCheck": "長度公尺，面積平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "可用兩種方法互相驗證。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "ae3c221c3a46409bb4ebd55730a8ebc97c240cb2e6e99aac5fb6d396961f2f73"
  },
  {
    "questionId": "u08-s010-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "展覽牆面為 12 公尺×3 公尺，扣除兩扇各 1.5 公尺×2 公尺的門後，其餘全要上漆。上漆面積是多少？",
    "givenConditions": [
      "牆面 12×3 公尺。",
      "兩扇門各 1.5×2 公尺。"
    ],
    "target": "扣除多個門洞求上漆面積",
    "choices": [
      "33 平方公尺",
      "36 平方公尺",
      "30 平方公尺",
      "42 平方公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "上漆面積 30 平方公尺。",
    "explanation": "完整牆面面積為 12×3=36 平方公尺。每扇門面積為 1.5×2=3 平方公尺，兩扇共六平方公尺；門不需上漆，所以 36−6=30 平方公尺，正好對應第三項。",
    "steps": [
      "先求整面展覽牆三十六平方公尺。",
      "算一扇門三平方公尺，再乘二得六。",
      "從牆面扣兩扇門，得到上漆面積三十平方公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "33 平方公尺",
        "truth": false,
        "reason": "只扣一扇門。"
      },
      {
        "choice": "36 平方公尺",
        "truth": false,
        "reason": "未扣門。"
      },
      {
        "choice": "30 平方公尺",
        "truth": true,
        "reason": "牆面 36；每扇門 3，兩扇共 6；上漆 36−6=30。"
      },
      {
        "choice": "42 平方公尺",
        "truth": false,
        "reason": "把門面積加上。"
      }
    ],
    "misconceptionTarget": "只扣一扇門，或把一點五與二直接相加當門面積。",
    "prerequisiteCheck": "能做長方形面積與多區扣除。",
    "estimatedTimeSec": 90,
    "unitCheck": "尺寸公尺，結果平方公尺。",
    "roundingCheck": "1.5 為精確小數，結果精確。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "材料需求情境要求辨認不上漆區。",
    "literacyContextNecessity": "油漆用量只按實際上漆區域計算，兩扇門洞是不可忽略的挖除資訊。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "c33d1f005fd323e2eba3a4af1a7e9600744aa47f3f1ec73892a9edca9bd7c89a"
  },
  {
    "questionId": "u08-s010-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "公園草地為 25 公尺×18 公尺，其中有 5 公尺×6 公尺花圃與 40 平方公尺遊戲區，兩區互不重疊。草地實際可使用面積是多少？",
    "givenConditions": [
      "外框 25×18 公尺。",
      "花圃 5×6 公尺。",
      "遊戲區 40 平方公尺。",
      "兩區不重疊。"
    ],
    "target": "由公園分區求剩餘草地面積",
    "choices": [
      "420 平方公尺",
      "380 平方公尺",
      "480 平方公尺",
      "350 平方公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "可使用草地 380 平方公尺。",
    "explanation": "公園外框面積為 25×18=450 平方公尺，花圃面積為 5×6=30 平方公尺。花圃與四十平方公尺遊戲區互不重疊，可依序扣除，450−30−40=380 平方公尺。",
    "steps": [
      "計算整塊公園草地外框面積四百五十。",
      "計算花圃三十，並保留遊戲區四十。",
      "因兩區不重疊，從整體各扣一次，得到三百八十。"
    ],
    "optionAnalysis": [
      {
        "choice": "420 平方公尺",
        "truth": false,
        "reason": "只扣花圃。"
      },
      {
        "choice": "380 平方公尺",
        "truth": true,
        "reason": "總面積 450；花圃 30；遊戲區 40；剩餘 450−30−40=380。"
      },
      {
        "choice": "480 平方公尺",
        "truth": false,
        "reason": "把遊戲區加上。"
      },
      {
        "choice": "350 平方公尺",
        "truth": false,
        "reason": "把花圃面積重複扣除。"
      }
    ],
    "misconceptionTarget": "漏扣其中一區，或因互不重疊反而把花圃與遊戲區相加回草地。",
    "prerequisiteCheck": "能處理複合面積。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有面積以平方公尺表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "多來源面積資料需統一後扣除。",
    "literacyContextNecessity": "公園可使用草地取決於兩個不同用途區是否重疊；題目明示互不重疊才能直接相加扣除。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "ce1a4a0a2b2ec28f250d7b87c82295837214d27c29531fb367e78f1dc1fe7a34"
  },
  {
    "questionId": "u08-s010-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一塊 4 公尺×3 公尺地毯中央有 60 公分×50 公分破損區，要裁去破損區後計算剩餘面積。以平方公尺表示為何？",
    "givenConditions": [
      "地毯 4×3 公尺。",
      "破損 60×50 公分。"
    ],
    "target": "混合單位下求挖除後面積",
    "choices": [
      "11.7 平方公尺",
      "9 平方公尺",
      "11.97 平方公尺",
      "8.4 平方公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "剩餘 11.7 平方公尺。",
    "explanation": "地毯面積為 4×3=12 平方公尺。破損區需先換單位：六十公分是零點六公尺，五十公分是零點五公尺，面積為 0.6×0.5=0.3 平方公尺；剩餘為 12−0.3=11.7 平方公尺。",
    "steps": [
      "先求整張地毯面積十二平方公尺。",
      "將六十、五十公分換成零點六、零點五公尺並求破損面積。",
      "以十二減零點三，得到十一點七平方公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "11.7 平方公尺",
        "truth": true,
        "reason": "地毯 12 m²；破損 0.6×0.5=0.3 m²；剩餘 11.7 m²。"
      },
      {
        "choice": "9 平方公尺",
        "truth": false,
        "reason": "把 60×50 當成 3 平方公尺。"
      },
      {
        "choice": "11.97 平方公尺",
        "truth": false,
        "reason": "把破損面積誤換為 0.03 平方公尺。"
      },
      {
        "choice": "8.4 平方公尺",
        "truth": false,
        "reason": "直接用 0.6×? 之後錯算。"
      }
    ],
    "misconceptionTarget": "公尺與公分直接相乘或相減，沒有先統一長度單位。",
    "prerequisiteCheck": "能換算長度並求複合面積。",
    "estimatedTimeSec": 90,
    "unitCheck": "60 公分=0.6 公尺，50 公分=0.5 公尺，答案平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "情境需要單位換算與挖除兩步。",
    "literacyContextNecessity": "修補或報廢評估必須把破損尺寸從公分換成公尺，否則剩餘面積會相差百倍以上。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "824c2bd28ca2d505e0266d4cf98f295bbdb23b2d7e789880062cda3460aca503"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s010-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "一個 15 公尺×10 公尺的長方形庭院，中央有一個 6 公尺×4 公尺的長方形水池，其餘全部鋪草皮。求草皮面積，並寫出你採用的整體與挖除區域。",
    "requiredWork": [
      "求庭院整體面積。",
      "求水池面積。",
      "相減並附平方公尺。"
    ],
    "standardSolution": [
      "採用整體減挖除區：庭院整體是 15 公尺乘 10 公尺的長方形，面積為 150 平方公尺。",
      "中央水池是 6 公尺乘 4 公尺的挖除長方形，面積為 24 平方公尺。",
      "其餘全部鋪草皮且水池位於庭院內，所以草皮面積為 150−24=126 平方公尺；結果小於整體且為正。"
    ],
    "alternativeMethods": [
      "可把水池周圍分割成上、下、左、右不重疊長方形後相加，但需自行合理分配位置尺寸；整體減挖除較直接。"
    ],
    "reasoningSteps": [
      "明確指定十五乘十為外部整體區域。",
      "指定六乘四為中央挖除區域。",
      "分別計算一百五十與二十四平方公尺。",
      "用整體減挖除區，得到一百二十六平方公尺並做合理性檢查。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整辨認整體與挖除，算得126平方公尺並附單位。"
      },
      {
        "score": 2,
        "criteria": "方法正確且結果126，但少一個中間面積或單位；或一處算術小錯。"
      },
      {
        "score": 1,
        "criteria": "至少正確算出150或24並指出應相減。"
      },
      {
        "score": 0,
        "criteria": "把兩面積相加，或只算水池面積當草皮。"
      }
    ],
    "partialCreditRules": [
      "題目沒有草皮重疊或損耗，直接使用幾何面積。"
    ],
    "followThroughPolicy": "若150或24單一算錯但仍正確相減，保留方法分，最高2分。",
    "unitAndNotationRules": "長度公尺，面積平方公尺。",
    "answerOnlyPolicy": "只答126平方公尺最高2分，因缺少整體與挖除說明。",
    "commonErrors": [
      "用 15+10 當庭院面積，混淆邊長和面積。",
      "只從一百五十減去水池邊長六或四，沒有先算挖除面積。",
      "把水池面積加到庭院整體，得到大於外框的不合理草皮面積。"
    ],
    "independentReview": {
      "derivedResult": "126平方公尺。",
      "ambiguityAudit": "水池中央且尺寸小於庭院，明確為完全包含的挖除區，無部分外露。",
      "reviewNote": "獨立計算150−24=126，並檢查結果介於0與150。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "perimeter-area-basic"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "1a238bfeca826f8af14e41d9785e57eddc8665d9c9f89bd70f3e45ae453badd8"
  },
  {
    "questionId": "u08-s010-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "composite-area-text",
    "lockedSkillTitle": "文字敘述的複合面積",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "一個 20 公尺×14 公尺的長方形廣場內有兩條寬 2 公尺的道路，一條沿長方向貫穿，另一條沿寬方向貫穿，兩路垂直相交。求道路總面積與非道路面積，並解釋重疊區如何處理。",
    "requiredWork": [
      "分別算兩條路面積。",
      "扣除重複計算的交會區。",
      "求非道路面積。"
    ],
    "standardSolution": [
      "沿長方向道路面積為 20×2=40 平方公尺，沿寬方向道路面積為 14×2=28 平方公尺。",
      "兩路垂直相交的區域為 2×2=4 平方公尺，在四十與二十八中各算一次，因此道路聯集為 40+28−4=64 平方公尺。",
      "廣場總面積為 20×14=280 平方公尺，非道路面積為 280−64=216 平方公尺。"
    ],
    "alternativeMethods": [
      "可把其中一條路完整算40，再把另一條除去交會段後算(14−2)×2=24，合計64。"
    ],
    "reasoningSteps": [
      "把兩條道路分別視為寬二公尺的長方形並求面積。",
      "辨認交會處二乘二被重複計算。",
      "用包含排除求道路總面積六十四平方公尺。",
      "從廣場整體二百八十扣道路，得到非道路二百一十六。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "道路64平方公尺、非道路216平方公尺，重疊只算一次的說明完整。"
      },
      {
        "score": 2,
        "criteria": "兩結果正確但重疊理由略缺；或道路面積有小錯但非道路依其一致計算。"
      },
      {
        "score": 1,
        "criteria": "正確列40+28−4或正確辨認交會4平方公尺，但未完成兩答案。"
      },
      {
        "score": 0,
        "criteria": "直接40+28=68且未處理重疊，或非道路用錯整體。"
      }
    ],
    "partialCreditRules": [
      "道路交會區必須扣一次，不是扣兩次。"
    ],
    "followThroughPolicy": "若道路聯集單一算術錯，後續用280減該值正確可給連帶分，最高2分。",
    "unitAndNotationRules": "全部面積用平方公尺。",
    "answerOnlyPolicy": "只答64與216無過程最高2分。",
    "commonErrors": [
      "直接把四十與二十八相加，忘記扣掉重複計算的交會區。",
      "道路聯集只算成四平方公尺，把交集誤當全部道路。",
      "求非道路面積時只用二百八十減四，沒有先求完整道路聯集。"
    ],
    "independentReview": {
      "derivedResult": "道路64平方公尺；非道路216平方公尺。",
      "ambiguityAudit": "道路寬均勻且垂直完整貫穿，交會必為2×2正方形。",
      "reviewNote": "獨立以分割法40+24=64，再用280−64=216驗算。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "perimeter-area-basic"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "ed7d4db210ea1c19fca5a45c4865b2c504231080fa8a3e8ab7a09b0964bd4c69"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s010-v001",
    "unitId": "u08",
    "skillId": "composite-area-text",
    "contentSha256": "261968f684e64cdd4fcbba21853a9c50b998f5dbe30823ad21a8930685eb3c29",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立重算 80−6=74。",
    "derivedAnswer": "74 平方公分",
    "storedAnswer": "74 平方公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「74 平方公分」符合目標「求單一挖除後的剩餘面積」。其餘選項分別違反：把挖除面積加上外框。；只算外框，未扣挖除。；錯把外框算成 60。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「文字敘述的複合面積」講義已定義範圍；本題特別使用：外框 10×8 公分。",
      "unitConflict": "尺寸公分相乘，答案平方公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求單一挖除後的剩餘面積」重新讀題，並針對誤解「把挖除區相加或未扣除。」排除另一解讀。"
    },
    "difficultyReason": "直接整體相減。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能求長方形面積。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求單一挖除後的剩餘面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立重算 80−6=74。 正確選項為「74 平方公分」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "f7aa1548f324b01439a9d874cd78f699d43b3d472a3ed8fd403271e23d48c3d7"
  },
  {
    "questionId": "u08-s010-v002",
    "unitId": "u08",
    "skillId": "composite-area-text",
    "contentSha256": "79f743757bda2d59951dc8a131342f0031bd8e287da5b2d9a57321b5bc2d54e6",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立加總兩區面積。",
    "derivedAnswer": "45 平方公尺",
    "storedAnswer": "45 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「45 平方公尺」符合目標「合併不重疊區域面積」。其餘選項分別違反：把兩面積相減。；把面積再相乘。；計算加法錯誤。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「文字敘述的複合面積」講義已定義範圍；本題特別使用：兩區互不重疊。",
      "unitConflict": "同為平方公尺，可直接相加。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「合併不重疊區域面積」重新讀題，並針對誤解「把面積相乘或相減。」排除另一解讀。"
    },
    "difficultyReason": "單一步驟。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能做面積加法。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「合併不重疊區域面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立加總兩區面積。 正確選項為「45 平方公尺」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "c2b41aef2a5d9fa3e80e72dc4a9a083a06c1533ef3d876de96c09c0cb42e9b8d"
  },
  {
    "questionId": "u08-s010-v003",
    "unitId": "u08",
    "skillId": "composite-area-text",
    "contentSha256": "21299ecde55e890856da1ad9730446800730415c9d2919f059805784446558bc",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立以非重疊部分 32+17+8=57 重算。",
    "derivedAnswer": "57 平方公尺",
    "storedAnswer": "57 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「57 平方公尺」符合目標「求兩重疊區域的聯集面積」。其餘選項分別違反：未扣重疊，重複計算一次。；把重疊扣了兩次。；把重疊加上。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「文字敘述的複合面積」講義已定義範圍；本題特別使用：A 面積 40。",
      "unitConflict": "所有面積同為平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求兩重疊區域的聯集面積」重新讀題，並針對誤解「忘記扣重疊或扣兩次。」排除另一解讀。"
    },
    "difficultyReason": "基礎包含排除。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解重疊計數。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求兩重疊區域的聯集面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立以非重疊部分 32+17+8=57 重算。 正確選項為「57 平方公尺」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "d6690f5d1e234582e6efe005a238b15821d3a863431db76fc1b68a94d4a83f18"
  },
  {
    "questionId": "u08-s010-v004",
    "unitId": "u08",
    "skillId": "composite-area-text",
    "contentSha256": "3323e5e5d30ad9dee177b8e88df811f0d5b28f2da2033d8be61b43ade866f5f4",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立把左右與上下各扣 1 公尺。",
    "derivedAnswer": "70 平方公尺",
    "storedAnswer": "70 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「70 平方公尺」符合目標「求四周等寬走道內框面積」。其餘選項分別違反：只從總面積減周長式數值，未正確求內框。；把內長 11、內寬 9 誤算。；只算外框。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「文字敘述的複合面積」講義已定義範圍；本題特別使用：外框 12×9 公尺。",
      "unitConflict": "長度均為公尺，答案平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求四周等寬走道內框面積」重新讀題，並針對誤解「長寬只各減一次邊寬。」排除另一解讀。"
    },
    "difficultyReason": "需正確處理兩側扣除。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能求長方形面積。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求四周等寬走道內框面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立把左右與上下各扣 1 公尺。 正確選項為「70 平方公尺」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "e97d287974e467a53c43905d427f02b67e5b5a8fc38ae777b18204f494185050"
  },
  {
    "questionId": "u08-s010-v005",
    "unitId": "u08",
    "skillId": "composite-area-text",
    "contentSha256": "125a58116e0d295ec0997b94969ff23b45734f9338e8dd5b2d44e719d01f3b2a",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立合併非草地面積 32，再以 150−32。",
    "derivedAnswer": "118 平方公尺",
    "storedAnswer": "118 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「118 平方公尺」符合目標「多次挖除與用途分區後求剩餘面積」。其餘選項分別違反：只扣水池，未扣步道。；把步道加回。；水池面積計算錯。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「文字敘述的複合面積」講義已定義範圍；本題特別使用：地面 15×10。",
      "unitConflict": "所有面積統一為平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「多次挖除與用途分區後求剩餘面積」重新讀題，並針對誤解「只扣一區或把步道當新增面積。」排除另一解讀。"
    },
    "difficultyReason": "兩個不同扣除區的標準應用。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能做複合面積相減。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「多次挖除與用途分區後求剩餘面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立合併非草地面積 32，再以 150−32。 正確選項為「118 平方公尺」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "16baeaee3cfcb519825f46662c77b12c8bd45b2bf4318c9af91caccde2560735"
  },
  {
    "questionId": "u08-s010-v006",
    "unitId": "u08",
    "skillId": "composite-area-text",
    "contentSha256": "646e74a1981949142aac40f5f8092820b6fa25b342664436cbae9ac7b94ccbb1",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立重算挖除區為 16。",
    "derivedAnswer": "80 平方公分",
    "storedAnswer": "80 平方公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「80 平方公分」符合目標「由挖除正方形邊長求剩餘面積」。其餘選項分別違反：把正方形面積誤當邊長 4。；把挖除區加上。；把外框誤減 32。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「文字敘述的複合面積」講義已定義範圍；本題特別使用：外框面積 96 平方公分。",
      "unitConflict": "4 公分平方成 16 平方公分後才可與 96 相減。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由挖除正方形邊長求剩餘面積」重新讀題，並針對誤解「用邊長直接從面積相減。」排除另一解讀。"
    },
    "difficultyReason": "需先轉換量的種類。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認長度與面積不同。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由挖除正方形邊長求剩餘面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立重算挖除區為 16。 正確選項為「80 平方公分」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "38f191fc80f77928cfb30a9ea4367fad33e379b7172ed212a9be88672604fcbd"
  },
  {
    "questionId": "u08-s010-v007",
    "unitId": "u08",
    "skillId": "composite-area-text",
    "contentSha256": "7f8a4cc9336e57b22c080227216048a314832d80ed8b5b89dd085418d9543019",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "另以重疊 8 加兩側各 16 得 40。",
    "derivedAnswer": "40 平方公分",
    "storedAnswer": "40 平方公分",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「40 平方公分」符合目標「求相同長方形重疊後的合併面積」。其餘選項分別違反：未扣重疊。；重疊扣了兩次。；只算非重疊差。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「文字敘述的複合面積」講義已定義範圍；本題特別使用：兩矩形皆 6×4 公分。",
      "unitConflict": "各區尺寸皆公分，面積平方公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求相同長方形重疊後的合併面積」重新讀題，並針對誤解「把重疊扣兩次或完全不扣。」排除另一解讀。"
    },
    "difficultyReason": "需多項計算與驗算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能求長方形與重疊面積。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求相同長方形重疊後的合併面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：另以重疊 8 加兩側各 16 得 40。 正確選項為「40 平方公分」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "af76cc3b424824daff20a76f9a62ec4c6f15954cd8b2c91f52946a153a630bca"
  },
  {
    "questionId": "u08-s010-v008",
    "unitId": "u08",
    "skillId": "composite-area-text",
    "contentSha256": "1ca226149f259c570d50ab7c2fc9e0ed98f6cd2392be866bf5dadb2877940dd3",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立用分割法重算：長向道路48，加上寬向道路扣除已覆蓋2公尺段，即(18−2)×2=32，共80。",
    "derivedAnswer": "80 平方公尺",
    "storedAnswer": "80 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「80 平方公尺」符合目標「處理兩個相交長方形的聯集面積」。其餘選項分別違反：24×2+18×2=84把中央2×2交會區重複計算一次。；扣除交會區兩次，實際只需扣一次。；432是整個廣場面積，不是道路面積。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「文字敘述的複合面積」講義已定義範圍；本題特別使用：廣場24 m×18 m。",
      "unitConflict": "長度以公尺表示，面積答案為平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「處理兩個相交長方形的聯集面積」重新讀題，並針對誤解「直接相加兩條道路面積，忘記扣重疊。」排除另一解讀。"
    },
    "difficultyReason": "要辨認交集並用兩種方法驗算，屬進階複合面積。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會長方形面積與重疊區只計一次。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「處理兩個相交長方形的聯集面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立用分割法重算：長向道路48，加上寬向道路扣除已覆蓋2公尺段，即(18−2)×2=32，共80。 正確選項為「80 平方公尺」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "d0a4e88bd93a03562e7e8189e64ff1c2effc8e8c283370fa1cbdd106b9a22533"
  },
  {
    "questionId": "u08-s010-v009",
    "unitId": "u08",
    "skillId": "composite-area-text",
    "contentSha256": "ae3c221c3a46409bb4ebd55730a8ebc97c240cb2e6e99aac5fb6d396961f2f73",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "可另分成 5×7 與 4×4，得 35+16=51。",
    "derivedAnswer": "51 平方公尺",
    "storedAnswer": "51 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「51 平方公尺」符合目標「以補形或分割求 L 形面積」。其餘選項分別違反：把挖去部分加上。；未扣挖除。；把挖除 24 誤算。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「文字敘述的複合面積」講義已定義範圍；本題特別使用：外框 9×7 公尺。",
      "unitConflict": "長度公尺，面積平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「以補形或分割求 L 形面積」重新讀題，並針對誤解「把挖角相加或尺寸錯配。」排除另一解讀。"
    },
    "difficultyReason": "可用兩種方法互相驗證。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用整體相減。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「以補形或分割求 L 形面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：可另分成 5×7 與 4×4，得 35+16=51。 正確選項為「51 平方公尺」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "595beff9fd66e574094651015cca241ae87ab1b03129f9a89c5e364eeecf263d"
  },
  {
    "questionId": "u08-s010-v010",
    "unitId": "u08",
    "skillId": "composite-area-text",
    "contentSha256": "c33d1f005fd323e2eba3a4af1a7e9600744aa47f3f1ec73892a9edca9bd7c89a",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立以每扇 3 平方公尺重算。",
    "derivedAnswer": "30 平方公尺",
    "storedAnswer": "30 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「30 平方公尺」符合目標「扣除多個門洞求上漆面積」。其餘選項分別違反：只扣一扇門。；未扣門。；把門面積加上。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「文字敘述的複合面積」講義已定義範圍；本題特別使用：牆面 12×3 公尺。",
      "unitConflict": "尺寸公尺，結果平方公尺。",
      "roundingConflict": "1.5 為精確小數，結果精確。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「扣除多個門洞求上漆面積」重新讀題，並針對誤解「只扣一扇或把門洞加上。」排除另一解讀。"
    },
    "difficultyReason": "材料需求情境要求辨認不上漆區。",
    "literacyContextNecessity": "油漆用量只按實際上漆區域計算，兩扇門洞是不可忽略的挖除資訊。",
    "prerequisiteCheck": "能做長方形面積與多區扣除。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「扣除多個門洞求上漆面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立以每扇 3 平方公尺重算。 正確選項為「30 平方公尺」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "e98a662cda115693b15d36dd58cdc3ab2a07e56bf15180631705350503436660"
  },
  {
    "questionId": "u08-s010-v011",
    "unitId": "u08",
    "skillId": "composite-area-text",
    "contentSha256": "ce1a4a0a2b2ec28f250d7b87c82295837214d27c29531fb367e78f1dc1fe7a34",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "非草地總面積 70，450−70=380。",
    "derivedAnswer": "380 平方公尺",
    "storedAnswer": "380 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「380 平方公尺」符合目標「由公園分區求剩餘草地面積」。其餘選項分別違反：只扣花圃。；把遊戲區加上。；把花圃面積重複扣除。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「文字敘述的複合面積」講義已定義範圍；本題特別使用：外框 25×18 公尺。",
      "unitConflict": "所有面積以平方公尺表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由公園分區求剩餘草地面積」重新讀題，並針對誤解「忽略不重疊條件或只扣一區。」排除另一解讀。"
    },
    "difficultyReason": "多來源面積資料需統一後扣除。",
    "literacyContextNecessity": "公園可使用草地取決於兩個不同用途區是否重疊；題目明示互不重疊才能直接相加扣除。",
    "prerequisiteCheck": "能處理複合面積。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由公園分區求剩餘草地面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：非草地總面積 70，450−70=380。 正確選項為「380 平方公尺」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "c261806eaf24b3a6aaff846163c6977f513cadb451db720c556d0f153bbca39d"
  },
  {
    "questionId": "u08-s010-v012",
    "unitId": "u08",
    "skillId": "composite-area-text",
    "contentSha256": "824c2bd28ca2d505e0266d4cf98f295bbdb23b2d7e789880062cda3460aca503",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "亦可將 3000 cm² 換成 0.3 m² 後相減。",
    "derivedAnswer": "11.7 平方公尺",
    "storedAnswer": "11.7 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「11.7 平方公尺」符合目標「混合單位下求挖除後面積」。其餘選項分別違反：把 60×50 當成 3 平方公尺。；把破損面積誤換為 0.03 平方公尺。；直接用 0.6×? 之後錯算。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「文字敘述的複合面積」講義已定義範圍；本題特別使用：地毯 4×3 公尺。",
      "unitConflict": "60 公分=0.6 公尺，50 公分=0.5 公尺，答案平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「混合單位下求挖除後面積」重新讀題，並針對誤解「把公分倍率直接套面積或未統一單位。」排除另一解讀。"
    },
    "difficultyReason": "情境需要單位換算與挖除兩步。",
    "literacyContextNecessity": "修補或報廢評估必須把破損尺寸從公分換成公尺，否則剩餘面積會相差百倍以上。",
    "prerequisiteCheck": "能換算長度並求複合面積。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「混合單位下求挖除後面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：亦可將 3000 cm² 換成 0.3 m² 後相減。 正確選項為「11.7 平方公尺」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "043a35442c241945c6e8473afa119f661e4352c91271b61f18b3c9863897635d"
  }
];

export const DRAWING_SPECS = [];

