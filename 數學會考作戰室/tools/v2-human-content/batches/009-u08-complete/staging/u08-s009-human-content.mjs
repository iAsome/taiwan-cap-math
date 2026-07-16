// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s009-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-measure",
  "skillId": "perimeter-area-basic",
  "lockedSkillTitle": "周長與面積基本判斷",
  "title": "周長與面積基本判斷：邊界長度和覆蓋大小不同",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能分辨周長與面積所表示的量。",
    "能計算正方形、長方形、三角形、平行四邊形與梯形的基本周長或面積。",
    "能選擇正確單位。",
    "能判斷同周長不必同面積、同面積不必同周長。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "perpendicular-bisector-symmetry"
    ],
    "bridgeExplanation": "前一技能關注線段長度與對稱；現在把邊界長度加總成周長，把平面覆蓋大小量化為面積。"
  },
  "prerequisites": [
    {
      "skillId": "perpendicular-bisector-symmetry",
      "requiredLevel": "能辨認線段、垂直高度與基本平面圖形。"
    }
  ],
  "glossary": [
    {
      "term": "周長",
      "definition": "封閉圖形邊界一周的總長度。"
    },
    {
      "term": "面積",
      "definition": "圖形所占平面範圍的大小。"
    },
    {
      "term": "底",
      "definition": "計算三角形、平行四邊形或梯形面積時選定的邊。"
    },
    {
      "term": "高",
      "definition": "到底邊或底邊所在直線的垂直距離。"
    }
  ],
  "notation": [
    {
      "symbol": "P",
      "meaning": "常用來表示周長。"
    },
    {
      "symbol": "A",
      "meaning": "常用來表示面積。"
    },
    {
      "symbol": "cm",
      "meaning": "長度單位公分。"
    },
    {
      "symbol": "cm²",
      "meaning": "面積單位平方公分。"
    }
  ],
  "conceptDevelopment": [
    "周長只沿邊界走一圈，使用一次方長度單位；面積計算內部覆蓋量，使用平方單位。",
    "長方形面積是長×寬；三角形是同底同高平行四邊形的一半，因此為底×高÷2。",
    "梯形可看成兩個相同梯形拼成平行四邊形，面積為（上底+下底）×高÷2。",
    "高必須與底垂直，不一定是斜邊或圖上看起來直立的邊。"
  ],
  "formalDefinitions": [
    {
      "name": "正方形周長與面積",
      "statement": "邊長 s 時，周長 4s，面積 s²。"
    },
    {
      "name": "長方形周長與面積",
      "statement": "長 l、寬 w 時，周長 2(l+w)，面積 lw。"
    },
    {
      "name": "三角形面積",
      "statement": "底 b、高 h 時，面積 bh/2。"
    }
  ],
  "formulas": [
    {
      "formula": "長方形 P=2(l+w)",
      "conditions": [
        "l、w 單位一致"
      ],
      "meaning": "加總四邊。"
    },
    {
      "formula": "長方形 A=lw",
      "conditions": [
        "l、w 互相垂直"
      ],
      "meaning": "覆蓋面積。"
    },
    {
      "formula": "三角形 A=bh/2",
      "conditions": [
        "h 為到底邊所在直線的垂直距離"
      ],
      "meaning": "同底同高平行四邊形的一半。"
    },
    {
      "formula": "平行四邊形 A=bh",
      "conditions": [
        "h 垂直於底"
      ],
      "meaning": "底乘高。"
    },
    {
      "formula": "梯形 A=(a+b)h/2",
      "conditions": [
        "a、b 為平行兩底，h 為其距離"
      ],
      "meaning": "兩底和乘高除以二。"
    }
  ],
  "invalidUseCases": [
    "不能把周長單位寫成 cm²。",
    "不能把三角形任一邊直接當高，除非它與選定底垂直。",
    "周長相同的圖形面積不一定相同。",
    "面積公式中的長度必須先統一單位。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "先判斷題目要測量邊界還是內部覆蓋。",
      "check": "圍、框、繞一圈多為周長；鋪、塗、覆蓋多為面積。"
    },
    {
      "step": 2,
      "instruction": "辨認圖形與公式所需的邊長、底及對應高。",
      "check": "面積公式中的高是否垂直於所選底？"
    },
    {
      "step": 3,
      "instruction": "在代入前統一所有長度單位。",
      "check": "公尺與公分是否仍混在同一算式？"
    },
    {
      "step": 4,
      "instruction": "依圖形套用周長或面積公式並保留運算順序。",
      "check": "三角形、梯形是否正確除以二？"
    },
    {
      "step": 5,
      "instruction": "情境題將面積再乘每單位用量或密度。",
      "check": "平方單位是否與每平方單位正確抵消？"
    },
    {
      "step": 6,
      "instruction": "檢查數值量級與答案單位。",
      "check": "周長用長度單位，面積用平方單位，材料量用題目指定單位。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "長 8 公分、寬 5 公分的長方形周長與面積各為多少？",
      "solutionSteps": [
        "周長=2×(8+5)=26 公分。",
        "面積=8×5=40 平方公分。"
      ],
      "answer": "周長 26 公分；面積 40 平方公分。",
      "why": "同一組長寬可回答不同幾何量，但周長加總一維邊界、面積計算二維覆蓋；兩個公式與公分、平方公分單位必須分開。"
    },
    {
      "exampleId": "L2",
      "prompt": "三角形底 12 公分、高 7 公分，面積多少？",
      "solutionSteps": [
        "確認七公分是對應底的垂直高。",
        "12×7÷2=42。"
      ],
      "answer": "42 平方公分。",
      "why": "三角形面積是同底同高平行四邊形的一半，因此底乘高後必須除以二；確認垂直高也能避免拿斜邊代入。"
    },
    {
      "exampleId": "L3",
      "prompt": "平行四邊形底 9 公分、高 4 公分，斜邊 6 公分，面積多少？",
      "solutionSteps": [
        "面積只需底與垂直高。",
        "9×4=36。"
      ],
      "answer": "36 平方公分。",
      "why": "斜邊六公分會影響周長，卻不在指定底九公分的面積公式中；底乘垂直高四公分才表示實際覆蓋大小。"
    },
    {
      "exampleId": "L4",
      "prompt": "梯形上底 5 公分、下底 11 公分、高 6 公分，面積多少？",
      "solutionSteps": [
        "兩底和 5+11=16。",
        "16×6÷2=48。"
      ],
      "answer": "48 平方公分。",
      "why": "梯形面積以兩條平行底的平均長度乘高，等價於兩底和乘高再除以二；非平行腰長不需要出現在計算中。"
    }
  ],
  "levelConnections": {
    "basic": "直接套用基本周長與面積公式。",
    "standard": "從文字辨認底、高與所求量。",
    "advanced": "比較同周長或同面積圖形並判斷資訊是否足夠。",
    "literacy": "圍欄、踢腳板、地磚與油漆需求分別對應周長或面積。"
  },
  "commonMistakes": [
    {
      "mistake": "求長方形周長只算長×寬。",
      "why": "混淆面積。",
      "correction": "周長是 2(長+寬)。"
    },
    {
      "mistake": "三角形面積忘記除以 2。",
      "why": "套成平行四邊形公式。",
      "correction": "三角形是同底同高平行四邊形的一半。"
    },
    {
      "mistake": "用斜邊當高。",
      "why": "忽略垂直條件。",
      "correction": "高必須垂直於底。"
    },
    {
      "mistake": "周長答案寫平方公分。",
      "why": "單位次方錯誤。",
      "correction": "周長用公分，面積用平方公分。"
    },
    {
      "mistake": "梯形只用上底×高。",
      "why": "漏掉下底與平均。",
      "correction": "用（上底+下底）×高÷2。"
    },
    {
      "mistake": "不同單位直接相乘。",
      "why": "未先換算。",
      "correction": "先把所有長度換成同單位。"
    }
  ],
  "selfCheckItems": [
    "題目要的是邊界還是覆蓋面？",
    "高是否真的垂直於底？",
    "長度單位是否一致？",
    "答案該用一次方還是平方單位？"
  ],
  "conciseSummary": [
    "周長是邊界總長，面積是內部大小。",
    "三角形面積要除以 2。",
    "平行四邊形與梯形的高皆為垂直距離。",
    "周長用長度單位，面積用平方單位。"
  ],
  "connections": {
    "previous": "上一技能的垂直概念可用來辨認幾何高度。",
    "next": [
      "下一技能把基本面積公式用於切割、挖除與拼接的複合圖形文字題。"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "重新計算四種基本圖形例題；長方形周長 26、面積 40，三角形 42、平行四邊形 36、梯形 48，並逐一核對高度垂直與平方單位。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "0d686abe03db88214699b2e088a0e070c8f5e85edaa59efee0510caff1165b24"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s009-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "邊長 6 公分的正方形周長是多少？",
    "givenConditions": [
      "正方形邊長 6 公分。"
    ],
    "target": "求正方形周長",
    "choices": [
      "24 公分",
      "12 公分",
      "36 平方公分",
      "18 公分"
    ],
    "answerIndex": 0,
    "independentSolution": "周長 24 公分。",
    "explanation": "正方形四條邊都長六公分，周長是沿邊界一圈的總長，所以 6+6+6+6=24 公分，也可寫 4×6=24 公分。三十六平方公分是面積，單位與本題所問周長不同。",
    "steps": [
      "由正方形性質確定四邊都長六公分。",
      "把四條邊相加，或用 4×6 計算。",
      "得到二十四公分，檢查使用長度單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "24 公分",
        "truth": true,
        "reason": "正方形四邊等長，周長=4×6=24 公分。"
      },
      {
        "choice": "12 公分",
        "truth": false,
        "reason": "只算兩邊。"
      },
      {
        "choice": "36 平方公分",
        "truth": false,
        "reason": "這是面積。"
      },
      {
        "choice": "18 公分",
        "truth": false,
        "reason": "只算三邊。"
      }
    ],
    "misconceptionTarget": "把六乘六算成面積，誤用三十六平方公分回答周長。",
    "prerequisiteCheck": "能做乘法並理解周長。",
    "estimatedTimeSec": 90,
    "unitCheck": "周長使用公分，不使用平方公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接公式。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "c8bd4d7d8eea4cbe9a9cb794a55720a0899d12371f2d9660048f55a15a98c7d0"
  },
  {
    "questionId": "u08-s009-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "長方形長 9 公分、寬 4 公分，面積是多少？",
    "givenConditions": [
      "長 9 公分。",
      "寬 4 公分。"
    ],
    "target": "求長方形面積",
    "choices": [
      "26 公分",
      "13 平方公分",
      "72 平方公分",
      "36 平方公分"
    ],
    "answerIndex": 3,
    "independentSolution": "面積 36 平方公分。",
    "explanation": "長方形面積等於長乘寬，因此 9×4=36。題目兩個長度都以公分表示，相乘後單位是平方公分，所以答案為三十六平方公分；二十六公分是周長計算結果且單位也不符。",
    "steps": [
      "辨認題目要求內部覆蓋大小，使用面積。",
      "將長九公分乘寬四公分，得到三十六。",
      "把單位寫成平方公分，排除周長型選項。"
    ],
    "optionAnalysis": [
      {
        "choice": "26 公分",
        "truth": false,
        "reason": "這是周長。"
      },
      {
        "choice": "13 平方公分",
        "truth": false,
        "reason": "只把長寬相加。"
      },
      {
        "choice": "72 平方公分",
        "truth": false,
        "reason": "把面積重複乘 2。"
      },
      {
        "choice": "36 平方公分",
        "truth": true,
        "reason": "長方形面積=長×寬=9×4=36。"
      }
    ],
    "misconceptionTarget": "把長寬相加再乘二求周長，或面積答案仍寫成公分。",
    "prerequisiteCheck": "能做長乘寬。",
    "estimatedTimeSec": 90,
    "unitCheck": "長與寬均為公分，乘積單位為平方公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "基礎面積公式。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "1f4babd91bae7d80481405b2d3c629c29c434dd5446a05ff633b32e2ce21615c"
  },
  {
    "questionId": "u08-s009-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "三角形底 10 公分、高 8 公分，面積是多少？",
    "givenConditions": [
      "底 10 公分。",
      "對應高 8 公分。"
    ],
    "target": "求三角形面積",
    "choices": [
      "80 平方公分",
      "40 平方公分",
      "36 平方公分",
      "18 公分"
    ],
    "answerIndex": 1,
    "independentSolution": "面積 40 平方公分。",
    "explanation": "三角形面積為底乘對應高再除以二。代入底十公分、高八公分，10×8÷2=40 平方公分；八十平方公分是同底同高平行四邊形面積，少了除以二。",
    "steps": [
      "確認八公分是對底十公分的垂直高。",
      "套用三角形面積公式 10×8÷2。",
      "算得四十平方公分，並檢查平方單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "80 平方公分",
        "truth": false,
        "reason": "忘記除以 2。"
      },
      {
        "choice": "40 平方公分",
        "truth": true,
        "reason": "三角形面積=底×高÷2=10×8÷2=40。"
      },
      {
        "choice": "36 平方公分",
        "truth": false,
        "reason": "把底高相減或誤算。"
      },
      {
        "choice": "18 公分",
        "truth": false,
        "reason": "把底高相加且單位錯。"
      }
    ],
    "misconceptionTarget": "忘記三角形公式要除以二，直接回答八十平方公分。",
    "prerequisiteCheck": "能辨認底與高。",
    "estimatedTimeSec": 90,
    "unitCheck": "底與高同為公分，答案平方公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接辨認三角形面積公式並代入。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "5884db097ea8f030318d510a1b1c0ad39db22eb0ab27ed43408cd46580980cc0"
  },
  {
    "questionId": "u08-s009-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "長方形長 12 公尺、寬 7 公尺，周長是多少？",
    "givenConditions": [
      "長 12 公尺。",
      "寬 7 公尺。"
    ],
    "target": "求長方形周長",
    "choices": [
      "84 平方公尺",
      "19 公尺",
      "38 公尺",
      "48 公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "周長 38 公尺。",
    "explanation": "長方形有兩條十二公尺長邊與兩條七公尺寬邊，周長為 12+7+12+7=38 公尺，也可寫 2×(12+7)。八十四平方公尺是面積，不能用來表示外框一圈長度。",
    "steps": [
      "列出長方形四邊為十二、七、十二、七公尺。",
      "相加或計算 2×(12+7)。",
      "得到三十八公尺，確認答案為長度單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "84 平方公尺",
        "truth": false,
        "reason": "這是面積。"
      },
      {
        "choice": "19 公尺",
        "truth": false,
        "reason": "只算長加寬的一半周界。"
      },
      {
        "choice": "38 公尺",
        "truth": true,
        "reason": "周長=2×(12+7)=38 公尺。"
      },
      {
        "choice": "48 公尺",
        "truth": false,
        "reason": "誤算 4×長。"
      }
    ],
    "misconceptionTarget": "只算十二加七的一半周界，或把長乘寬的面積當周長。",
    "prerequisiteCheck": "能使用周長公式。",
    "estimatedTimeSec": 90,
    "unitCheck": "周長為一次方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "標準兩步運算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "618d389447aa8e07bfc0be10b5f3550a10c01b07e08bf341aa84b1cfb808613d"
  },
  {
    "questionId": "u08-s009-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "平行四邊形底 15 公分、高 6 公分，斜邊 9 公分，面積是多少？",
    "givenConditions": [
      "底 15 公分。",
      "垂直高 6 公分。",
      "斜邊 9 公分為干擾資料。"
    ],
    "target": "區分平行四邊形高與斜邊",
    "choices": [
      "135 平方公分",
      "90 平方公分",
      "54 平方公分",
      "180 平方公分"
    ],
    "answerIndex": 1,
    "independentSolution": "面積 90 平方公分。",
    "explanation": "平行四邊形面積只使用底與對應的垂直高，故 15×6=90 平方公分。斜邊九公分不是對底十五公分的垂直距離，不能拿來代替高；一百三十五正是誤用斜邊所得。",
    "steps": [
      "從三個長度中找出底十五與垂直高六。",
      "套用平行四邊形面積底乘高。",
      "算得九十平方公分，並說明斜邊九與面積無關。"
    ],
    "optionAnalysis": [
      {
        "choice": "135 平方公分",
        "truth": false,
        "reason": "誤用底×斜邊。"
      },
      {
        "choice": "90 平方公分",
        "truth": true,
        "reason": "平行四邊形面積只用底與對應垂直高：15×6=90。"
      },
      {
        "choice": "54 平方公分",
        "truth": false,
        "reason": "誤用斜邊×高。"
      },
      {
        "choice": "180 平方公分",
        "truth": false,
        "reason": "多乘 2。"
      }
    ],
    "misconceptionTarget": "看到斜邊九公分就當作高度，錯算十五乘九。",
    "prerequisiteCheck": "能理解高度垂直於底。",
    "estimatedTimeSec": 90,
    "unitCheck": "底高同單位，答案平方公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需篩選必要資料。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "7e3790dd58adb81e18dc127080a7f452f56640633b682d9bc4a7cd8b975d8735"
  },
  {
    "questionId": "u08-s009-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個長方形長 11 公分、寬 5 公分；另一個梯形上底 8 公分、下底 14 公分、高 5 公分。兩個圖形的面積關係為何？",
    "givenConditions": [
      "長方形長 11 公分、寬 5 公分。",
      "梯形上底 8 公分、下底 14 公分、高 5 公分。"
    ],
    "target": "比較長方形與梯形面積",
    "choices": [
      "長方形面積比梯形大 25 平方公分",
      "梯形面積比長方形大 25 平方公分",
      "兩個圖形的面積相等",
      "資料不足，無法比較"
    ],
    "answerIndex": 2,
    "independentSolution": "長方形面積=11×5=55；梯形面積=(8+14)×5÷2=55，所以兩者相等。",
    "explanation": "長方形面積為 11×5=55 平方公分。梯形面積為 (8+14)×5÷2=55 平方公分；兩個公式各自使用正確尺寸，結果相同，所以兩圖形面積相等，不是相差二十五。",
    "steps": [
      "計算長方形面積，得到五十五平方公分。",
      "計算梯形兩底和乘高再除以二，也得到五十五。",
      "比較兩個數值，判定面積相等。"
    ],
    "optionAnalysis": [
      {
        "choice": "長方形面積比梯形大 25 平方公分",
        "truth": false,
        "reason": "長方形面積是 55，沒有多 25。"
      },
      {
        "choice": "梯形面積比長方形大 25 平方公分",
        "truth": false,
        "reason": "梯形面積也是 55，沒有多 25。"
      },
      {
        "choice": "兩個圖形的面積相等",
        "truth": true,
        "reason": "兩者面積都為 55 平方公分。"
      },
      {
        "choice": "資料不足，無法比較",
        "truth": false,
        "reason": "兩圖形計算面積所需資料都已提供。"
      }
    ],
    "misconceptionTarget": "梯形面積漏除以二，或只比較邊長而未分別計算面積。",
    "prerequisiteCheck": "能使用長方形與梯形面積公式。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有長度為公分，面積為平方公分。",
    "roundingCheck": "全部資料為精確值。",
    "ambiguityBoundaryAudit": "兩圖形的必要尺寸皆完整，面積可唯一計算。",
    "difficultyReason": "標準：需選用兩種面積公式並比較結果。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "db54fce8bfd66fd76e1115fd601f1936ad26db1d0fdb8cd975ab4535fb8e583f"
  },
  {
    "questionId": "u08-s009-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "兩個長方形周長都為 24 公分。甲為長 8、寬 4 公分；乙為長 7、寬 5 公分。哪一個面積較大？",
    "givenConditions": [
      "甲 8×4。",
      "乙 7×5。",
      "兩者周長均 24 公分。"
    ],
    "target": "比較同周長長方形的面積",
    "choices": [
      "甲，面積 32 平方公分",
      "兩者面積相同",
      "無法比較",
      "乙，面積 35 平方公分"
    ],
    "answerIndex": 3,
    "independentSolution": "乙面積較大 3 平方公分。",
    "explanation": "甲面積為 8×4=32 平方公分，乙面積為 7×5=35 平方公分。雖然兩者周長都為二十四公分，相同周長不保證相同面積；乙比甲多三平方公分，因此第四項正確。",
    "steps": [
      "分別用長乘寬求甲面積三十二。",
      "求乙面積三十五。",
      "比較三十五與三十二，判定乙較大三平方公分。"
    ],
    "optionAnalysis": [
      {
        "choice": "甲，面積 32 平方公分",
        "truth": false,
        "reason": "32 小於 35。"
      },
      {
        "choice": "兩者面積相同",
        "truth": false,
        "reason": "同周長不保證同面積。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "尺寸已足以分別計算。"
      },
      {
        "choice": "乙，面積 35 平方公分",
        "truth": true,
        "reason": "甲面積 8×4=32，乙面積 7×5=35，所以乙較大。"
      }
    ],
    "misconceptionTarget": "因兩個長方形周長相同就直接判面積相同，沒有實際相乘。",
    "prerequisiteCheck": "能分別計算周長與面積。",
    "estimatedTimeSec": 90,
    "unitCheck": "尺寸為公分，面積為平方公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需比較兩量並理解非唯一關係。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "0e7bd98b6a55707b35c4595fa92dd139be6c92757747e8587805c444412881dc"
  },
  {
    "questionId": "u08-s009-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個三角形與一個平行四邊形底相同、高也相同。平行四邊形面積是三角形面積的幾倍？",
    "givenConditions": [
      "底相同且高相同。"
    ],
    "target": "比較同底同高兩圖形面積",
    "choices": [
      "2 倍",
      "1 倍",
      "1/2 倍",
      "4 倍"
    ],
    "answerIndex": 0,
    "independentSolution": "平行四邊形是三角形的 2 倍。",
    "explanation": "設共同底為 b、共同高為 h，平行四邊形面積是 b×h，三角形面積是 b×h÷2。前者除以後者等於二，所以在同底同高條件下，平行四邊形面積恰為三角形兩倍。",
    "steps": [
      "寫出平行四邊形面積為底乘高。",
      "寫出三角形面積為底乘高再除以二。",
      "比較兩式，得到平行四邊形是兩倍。"
    ],
    "optionAnalysis": [
      {
        "choice": "2 倍",
        "truth": true,
        "reason": "平行四邊形 bh，三角形 bh/2，所以比值為 2。"
      },
      {
        "choice": "1 倍",
        "truth": false,
        "reason": "三角形公式多除以 2。"
      },
      {
        "choice": "1/2 倍",
        "truth": false,
        "reason": "方向顛倒；三角形才是平行四邊形的一半。"
      },
      {
        "choice": "4 倍",
        "truth": false,
        "reason": "公式只差一個因數 2。"
      }
    ],
    "misconceptionTarget": "忽略三角形公式中的二分之一，誤判兩個圖形面積相同。",
    "prerequisiteCheck": "能理解兩個面積公式。",
    "estimatedTimeSec": 90,
    "unitCheck": "比值無單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "符號比較而非單純代數值。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "da67f51ea4c7a7f3151b6a515468b70c8e4ea61e584e81c1f57d74855b8dc8c7"
  },
  {
    "questionId": "u08-s009-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "長方形面積為 96 平方公分，長為 12 公分。寬與周長分別是多少？",
    "givenConditions": [
      "長方形面積 96 平方公分。",
      "長 12 公分。"
    ],
    "target": "由面積反求邊長再求周長",
    "choices": [
      "寬 8 公分，周長 20 公分",
      "寬 84 公分，周長 192 公分",
      "寬 8 公分，周長 40 公分",
      "寬 4 公分，周長 32 公分"
    ],
    "answerIndex": 2,
    "independentSolution": "寬 8 公分，周長 40 公分。",
    "explanation": "長方形面積等於長乘寬，所以寬為 96÷12=8 公分。再用周長公式 2×(12+8)=40 公分；二十公分只是一組長寬和，不是完整周長，且寬與周長的單位都應為公分。",
    "steps": [
      "用面積九十六除以長十二，反求寬八公分。",
      "將長與寬相加後乘二，求周長四十公分。",
      "把八、四十代回面積與周長公式驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "寬 8 公分，周長 20 公分",
        "truth": false,
        "reason": "20 只是長加寬。"
      },
      {
        "choice": "寬 84 公分，周長 192 公分",
        "truth": false,
        "reason": "把面積減長求寬。"
      },
      {
        "choice": "寬 8 公分，周長 40 公分",
        "truth": true,
        "reason": "寬=96÷12=8；周長=2×(12+8)=40。"
      },
      {
        "choice": "寬 4 公分，周長 32 公分",
        "truth": false,
        "reason": "12×4 只有 48。"
      }
    ],
    "misconceptionTarget": "求得寬後只算十二加八，漏乘二而把二十當成周長。",
    "prerequisiteCheck": "能使用長方形面積與周長公式。",
    "estimatedTimeSec": 90,
    "unitCheck": "面積除長度得到公分，周長仍為公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "兩階段逆向運算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "7514cc776a2623d9fa2a37eb29064a3a5ec663d977b007b8dda18a7586133f7f"
  },
  {
    "questionId": "u08-s009-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "校園要在長 30 公尺、寬 18 公尺的長方形花圃外圍設一圈圍欄，預留 3 公尺入口不設欄。至少需要多少公尺圍欄？",
    "givenConditions": [
      "花圃為 30×18 公尺長方形。",
      "入口寬 3 公尺且不設欄。"
    ],
    "target": "由花圃周長扣除入口",
    "choices": [
      "96 公尺",
      "93 公尺",
      "540 公尺",
      "45 公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "至少需 93 公尺圍欄。",
    "explanation": "花圃完整周長為 2×(30+18)=96 公尺。入口三公尺位於外圍且不設圍欄，所以從完整周長扣除三公尺，得到 96−3=93 公尺；面積五百四十平方公尺與圍欄長度無關。",
    "steps": [
      "先求長方形完整外圍周長九十六公尺。",
      "辨認三公尺入口是邊界缺口。",
      "用九十六減三，得到至少九十三公尺圍欄。"
    ],
    "optionAnalysis": [
      {
        "choice": "96 公尺",
        "truth": false,
        "reason": "未扣除入口。"
      },
      {
        "choice": "93 公尺",
        "truth": true,
        "reason": "花圃周長=2×(30+18)=96 公尺，扣 3 公尺入口得 93 公尺。"
      },
      {
        "choice": "540 公尺",
        "truth": false,
        "reason": "這是面積。"
      },
      {
        "choice": "45 公尺",
        "truth": false,
        "reason": "只算長加寬後再扣入口。"
      }
    ],
    "misconceptionTarget": "用長乘寬求圍欄，或算完完整周長後忘記扣除入口缺口。",
    "prerequisiteCheck": "能計算長方形周長。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有邊界長度以公尺表示，答案公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "實際材料需求必須把入口缺口納入。",
    "literacyContextNecessity": "圍欄材料只沿外圍且入口不施工；入口寬度直接改變需求量，情境不可刪除。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "3641c95870100fb939647d427ebfdb46efb2b876b2adf5dfe47428bf0a16445b"
  },
  {
    "questionId": "u08-s009-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "教室地板長 8 公尺、寬 6 公尺，要鋪滿地墊。若每平方公尺需要 4 片地墊，共需多少片？",
    "givenConditions": [
      "地板 8×6 公尺。",
      "每平方公尺 4 片。"
    ],
    "target": "由地板面積求地墊片數",
    "choices": [
      "192 片",
      "56 片",
      "48 片",
      "224 片"
    ],
    "answerIndex": 0,
    "independentSolution": "共需 192 片。",
    "explanation": "教室地板面積為 8×6=48 平方公尺。每一平方公尺需要四片地墊，所以總片數為 48×4=192 片；四是面積密度，不能只與長或寬相乘，且最終單位應為片。",
    "steps": [
      "先用長乘寬求地板面積四十八平方公尺。",
      "把每平方公尺四片乘上四十八平方公尺。",
      "得到一百九十二片，檢查面積單位已抵消。"
    ],
    "optionAnalysis": [
      {
        "choice": "192 片",
        "truth": true,
        "reason": "地板面積 8×6=48 平方公尺；每平方公尺 4 片，48×4=192 片。"
      },
      {
        "choice": "56 片",
        "truth": false,
        "reason": "把周長 28 乘 2 或誤算。"
      },
      {
        "choice": "48 片",
        "truth": false,
        "reason": "只有地板面積，未乘每平方公尺片數。"
      },
      {
        "choice": "224 片",
        "truth": false,
        "reason": "以周長 28×8 誤算。"
      }
    ],
    "misconceptionTarget": "把長與寬相加後乘四，或只用其中一個邊長計算地墊片數。",
    "prerequisiteCheck": "能求長方形面積並使用單位率。",
    "estimatedTimeSec": 90,
    "unitCheck": "48 平方公尺×4 片/平方公尺=192 片。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "情境的每平方公尺用量是必要轉換。",
    "literacyContextNecessity": "鋪滿地板明確對應面積，且每平方公尺 4 片把幾何量轉成採購數量。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "6f63ed24e5802491fdd84d837359d08f25462a58517fa9a52e24f9762cf4b667"
  },
  {
    "questionId": "u08-s009-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一塊三角形帆布底 5.6 公尺、高 3 公尺，每平方公尺重 0.4 公斤。帆布總重多少？",
    "givenConditions": [
      "底 5.6 公尺。",
      "高 3 公尺。",
      "每平方公尺 0.4 公斤。"
    ],
    "target": "由三角形面積與單位面積重量求總重",
    "choices": [
      "6.72 公斤",
      "8.4 公斤",
      "1.12 公斤",
      "3.36 公斤"
    ],
    "answerIndex": 3,
    "independentSolution": "總重 3.36 公斤。",
    "explanation": "三角形帆布面積為 5.6×3÷2=8.4 平方公尺。每平方公尺重零點四公斤，所以總重是 8.4×0.4=3.36 公斤；六點七二公斤是面積忘記除以二所造成的結果。",
    "steps": [
      "用底五點六乘高三再除以二，求面積八點四。",
      "將面積乘每平方公尺零點四公斤。",
      "算得三點三六公斤，並核對最終為重量單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "6.72 公斤",
        "truth": false,
        "reason": "忘記三角形面積除以 2。"
      },
      {
        "choice": "8.4 公斤",
        "truth": false,
        "reason": "只求面積後誤當重量。"
      },
      {
        "choice": "1.12 公斤",
        "truth": false,
        "reason": "只乘底長與單位重量，漏掉高與除以 2。"
      },
      {
        "choice": "3.36 公斤",
        "truth": true,
        "reason": "面積=5.6×3÷2=8.4 平方公尺；重量=8.4×0.4=3.36 公斤。"
      }
    ],
    "misconceptionTarget": "三角形面積漏除以二，或把每平方公尺重量直接乘底長。",
    "prerequisiteCheck": "能求三角形面積並使用單位率。",
    "estimatedTimeSec": 90,
    "unitCheck": "平方公尺乘公斤/平方公尺得到公斤。",
    "roundingCheck": "數值皆為精確小數，3.36 不需四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "含小數與兩階段單位推理。",
    "literacyContextNecessity": "帆布重量由實際面積與每平方公尺重量共同決定，兩項資料都是採購與搬運評估必要資訊。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "ff6883985896ce0ab1d06c048f5925a506c663ec816e70b1b36bacbe7d24f887"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s009-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "一個長方形花圃長 12 公尺、寬 7 公尺。管理員要沿外圍圍繩，並在內部全部鋪土。分別求圍繩長度與鋪土面積，說明兩者單位為何不同。",
    "requiredWork": [
      "計算周長。",
      "計算面積。",
      "解釋長度單位與平方單位。"
    ],
    "standardSolution": [
      "圍繩沿花圃外圍一圈，求的是周長：2×(12+7)=38 公尺。",
      "鋪土覆蓋花圃內部，求的是面積：12×7=84 平方公尺。",
      "周長是一維邊界長度，因此用公尺；面積是二維覆蓋大小，因此用平方公尺，兩者數值與單位都不能互換。"
    ],
    "alternativeMethods": [
      "周長可逐邊相加12+7+12+7；面積仍用長×寬。"
    ],
    "reasoningSteps": [
      "由沿外圍辨認第一問需要周長。",
      "由內部全部鋪土辨認第二問需要面積。",
      "分別計算三十八公尺與八十四平方公尺。",
      "依一維與二維量核對公尺、平方公尺單位。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "38公尺與84平方公尺均正確，並清楚說明一維、二維單位差異。"
      },
      {
        "score": 2,
        "criteria": "兩數值正確但單位理由不完整；或一項有小算術錯而概念與另一項完整。"
      },
      {
        "score": 1,
        "criteria": "至少正確求出周長或面積其中一項，含正確單位。"
      },
      {
        "score": 0,
        "criteria": "把38與84對調，或兩者都使用同一單位且無概念。"
      }
    ],
    "partialCreditRules": [
      "若面積寫m²視為平方公尺。"
    ],
    "followThroughPolicy": "周長計算錯不影響面積部分，反之亦然；分項給分。",
    "unitAndNotationRules": "周長用公尺，面積用平方公尺，不可互換。",
    "answerOnlyPolicy": "只答兩個數值但無過程與單位最高1分。",
    "commonErrors": [
      "只算 12+7=19 公尺，漏掉長方形另外一組長與寬。",
      "把面積八十四寫成公尺，沒有使用平方公尺。",
      "用長乘寬回答圍繩長度，混淆邊界與內部覆蓋。"
    ],
    "independentReview": {
      "derivedResult": "圍繩38公尺；鋪土84平方公尺。",
      "ambiguityAudit": "『沿外圍』與『內部全部』分別明示兩種量，沒有損耗或出入口例外。",
      "reviewNote": "獨立逐邊加總與單位方格乘法驗算，兩量互不混淆。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "perpendicular-bisector-symmetry"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "ecd4363981ab7e9203278e328aea2c95761ef3f5d2af23bb269bc92bee9dbbfe"
  },
  {
    "questionId": "u08-s009-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-measure",
    "skillId": "perimeter-area-basic",
    "lockedSkillTitle": "周長與面積基本判斷",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "一個三角形與一個平行四邊形有相同的底 10 公分、相同的高 6 公分。求兩者面積，並比較平行四邊形面積是三角形的幾倍。若三角形的斜邊改變但底和高不變，面積是否改變？",
    "requiredWork": [
      "分別套用兩種面積公式。",
      "求倍數。",
      "說明底高不變時三角形面積不變。"
    ],
    "standardSolution": [
      "三角形面積為 10×6÷2=30 平方公分；平行四邊形面積為 10×6=60 平方公分。",
      "用六十除以三十得到二，所以同底同高時，平行四邊形面積是三角形的兩倍。",
      "三角形面積只由所選底與其對應垂直高決定；若斜邊改變但底十公分與高六公分不變，面積仍是三十平方公分。"
    ],
    "alternativeMethods": [
      "可將平行四邊形沿對角線分成兩個同底高三角形，直接看出倍數2。"
    ],
    "reasoningSteps": [
      "確認兩圖形使用相同底與對應垂直高。",
      "分別套用三角形與平行四邊形面積公式。",
      "比較六十與三十，得到倍數二。",
      "檢查斜邊不是面積公式中的獨立量，回答面積不變。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩面積、2倍關係與不變性說明全部正確。"
      },
      {
        "score": 2,
        "criteria": "面積與倍數正確但最後不變理由略缺；或一處單位遺漏。"
      },
      {
        "score": 1,
        "criteria": "至少正確算出一個面積並顯示理解三角形要除2。"
      },
      {
        "score": 0,
        "criteria": "兩面積相同，或認為斜邊改變必然改變面積而未使用底高。"
      }
    ],
    "partialCreditRules": [
      "高必須是對指定底的垂直距離；若只寫6不說垂直，公式仍可接受但解釋分略減。"
    ],
    "followThroughPolicy": "單一算術錯誤可順著錯誤值評倍數方法，但總分最高2分。",
    "unitAndNotationRules": "面積用平方公分；倍數無單位。",
    "answerOnlyPolicy": "只寫30、60、2倍、不變而無公式最高2分。",
    "commonErrors": [
      "平行四邊形面積也除以二，誤判兩圖形面積相同。",
      "把三角形斜邊當作對應高，忽略高必須垂直於底。",
      "比較倍數時用三十除以六十，將兩倍顛倒成二分之一倍。"
    ],
    "independentReview": {
      "derivedResult": "三角形30平方公分；平行四邊形60平方公分；2倍；三角形面積不變。",
      "ambiguityAudit": "題目明示相同底與相同高，斜邊變化不改公式中的兩個量。",
      "reviewNote": "獨立由公式與分割法雙重驗算，兩者都得到2倍及不變結論。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "perpendicular-bisector-symmetry"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "b95a39030afa84389fe8b15ce5a6793a9988781a6b7583dbe4076a2ed9107863"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s009-v001",
    "unitId": "u08",
    "skillId": "perimeter-area-basic",
    "contentSha256": "c8bd4d7d8eea4cbe9a9cb794a55720a0899d12371f2d9660048f55a15a98c7d0",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立相加 6+6+6+6=24。",
    "derivedAnswer": "24 公分",
    "storedAnswer": "24 公分",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「24 公分」符合目標「求正方形周長」。其餘選項分別違反：只算兩邊。；這是面積。；只算三邊。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「周長與面積基本判斷」講義已定義範圍；本題特別使用：正方形邊長 6 公分。",
      "unitConflict": "周長使用公分，不使用平方公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求正方形周長」重新讀題，並針對誤解「把面積或不完整邊數當周長。」排除另一解讀。"
    },
    "difficultyReason": "直接公式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能做乘法並理解周長。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求正方形周長」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立相加 6+6+6+6=24。 正確選項為「24 公分」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "77c6204d2527303e3a6d6d56bcfd2ba8c36eae9e66163d419ef82c0d30bc4a8c"
  },
  {
    "questionId": "u08-s009-v002",
    "unitId": "u08",
    "skillId": "perimeter-area-basic",
    "contentSha256": "1f4babd91bae7d80481405b2d3c629c29c434dd5446a05ff633b32e2ce21615c",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "以 9 列、每列 4 個單位正方形理解，共 36。",
    "derivedAnswer": "36 平方公分",
    "storedAnswer": "36 平方公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「36 平方公分」符合目標「求長方形面積」。其餘選項分別違反：這是周長。；只把長寬相加。；把面積重複乘 2。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「周長與面積基本判斷」講義已定義範圍；本題特別使用：長 9 公分。",
      "unitConflict": "長與寬均為公分，乘積單位為平方公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求長方形面積」重新讀題，並針對誤解「混淆周長與面積。」排除另一解讀。"
    },
    "difficultyReason": "基礎面積公式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能做長乘寬。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求長方形面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：以 9 列、每列 4 個單位正方形理解，共 36。 正確選項為「36 平方公分」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "a0b5f114f26e414bc0102d29e7faaa472aa89e88d46c5206b49115e9cffeb278"
  },
  {
    "questionId": "u08-s009-v003",
    "unitId": "u08",
    "skillId": "perimeter-area-basic",
    "contentSha256": "5884db097ea8f030318d510a1b1c0ad39db22eb0ab27ed43408cd46580980cc0",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立以 10×(8÷2)=40 重算。",
    "derivedAnswer": "40 平方公分",
    "storedAnswer": "40 平方公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「40 平方公分」符合目標「求三角形面積」。其餘選項分別違反：忘記除以 2。；把底高相減或誤算。；把底高相加且單位錯。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「周長與面積基本判斷」講義已定義範圍；本題特別使用：底 10 公分。",
      "unitConflict": "底與高同為公分，答案平方公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求三角形面積」重新讀題，並針對誤解「忘記除以 2 或單位漏平方。」排除另一解讀。"
    },
    "difficultyReason": "直接辨認三角形面積公式並代入。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認底與高。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求三角形面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立以 10×(8÷2)=40 重算。 正確選項為「40 平方公分」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "bd6e082f09d2f23b4e036ce09fa6b8c4458bd2f3d2dca7e5c3130cc04db491fc"
  },
  {
    "questionId": "u08-s009-v004",
    "unitId": "u08",
    "skillId": "perimeter-area-basic",
    "contentSha256": "618d389447aa8e07bfc0be10b5f3550a10c01b07e08bf341aa84b1cfb808613d",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立相加 12+7+12+7=38。",
    "derivedAnswer": "38 公尺",
    "storedAnswer": "38 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「38 公尺」符合目標「求長方形周長」。其餘選項分別違反：這是面積。；只算長加寬的一半周界。；誤算 4×長。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「周長與面積基本判斷」講義已定義範圍；本題特別使用：長 12 公尺。",
      "unitConflict": "周長為一次方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「求長方形周長」重新讀題，並針對誤解「只算長加寬或用面積。」排除另一解讀。"
    },
    "difficultyReason": "標準兩步運算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用周長公式。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「求長方形周長」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立相加 12+7+12+7=38。 正確選項為「38 公尺」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "1396536befb5e59ff62ac1f41b2a46b57f85a97197e731fc0e8585c74590de82"
  },
  {
    "questionId": "u08-s009-v005",
    "unitId": "u08",
    "skillId": "perimeter-area-basic",
    "contentSha256": "7e3790dd58adb81e18dc127080a7f452f56640633b682d9bc4a7cd8b975d8735",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "使用垂直高而排除斜邊。",
    "derivedAnswer": "90 平方公分",
    "storedAnswer": "90 平方公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「90 平方公分」符合目標「區分平行四邊形高與斜邊」。其餘選項分別違反：誤用底×斜邊。；誤用斜邊×高。；多乘 2。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「周長與面積基本判斷」講義已定義範圍；本題特別使用：底 15 公分。",
      "unitConflict": "底高同單位，答案平方公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「區分平行四邊形高與斜邊」重新讀題，並針對誤解「把斜邊當高度。」排除另一解讀。"
    },
    "difficultyReason": "需篩選必要資料。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解高度垂直於底。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「區分平行四邊形高與斜邊」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：使用垂直高而排除斜邊。 正確選項為「90 平方公分」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "8aa6f6ad0ea4698d6a5e79256b0d4c4f0b8b78191bccb1c50a55320d828cfb6c"
  },
  {
    "questionId": "u08-s009-v006",
    "unitId": "u08",
    "skillId": "perimeter-area-basic",
    "contentSha256": "db54fce8bfd66fd76e1115fd601f1936ad26db1d0fdb8cd975ab4535fb8e583f",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "長方形面積為 11×5=55；梯形兩底的平均長度是 (8+14)÷2=11，再乘高 5 也得到 55，所以兩者面積相等。",
    "derivedAnswer": "兩個圖形的面積相等",
    "storedAnswer": "兩個圖形的面積相等",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "獨立重算得到「兩個圖形的面積相等」。其餘選項逐項檢查：「長方形面積比梯形大 25 平方公分」與 55、55 的計算不符；「梯形面積比長方形大 25 平方公分」與 55、55 的計算不符；「資料不足，無法比較」錯，必要尺寸均已提供",
      "undefinedSymbol": "題幹中的符號與用語均已在本技能講義定義；所求為「比較兩種平面圖形的面積」。",
      "unitConflict": "所有長度為公分，面積統一為平方公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入或近似造成的第二答案。",
      "domainBoundary": "只使用國中平面圖形面積公式。",
      "alternateReading": "常見錯誤只會導向錯誤選項，不形成第二個正解。 即使改從公式或圖形定義重新讀題，也仍得到相同唯一答案。"
    },
    "difficultyReason": "標準：需分別計算長方形與梯形，再進行比較。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "已會長方形與梯形面積公式。",
    "languageCheck": "兩圖形尺寸與比較目標完整明示。",
    "reviewerDecision": "pass",
    "reviewerNote": "已使用與題解不同的方式獨立重算：長方形面積為 11×5=55；梯形兩底的平均長度是 (8+14)÷2=11，再乘高 5 也得到 55，所以兩者面積相等。 正確選項為「兩個圖形的面積相等」。其餘三項逐項代回後均不符合題目條件；單位、邊界與可能的另一種讀法也已核對，沒有第二個正確答案。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "faaf1bc58ec65d733a0c74714b86ea40313b569ad4f3bdd4fc5903d677327820"
  },
  {
    "questionId": "u08-s009-v007",
    "unitId": "u08",
    "skillId": "perimeter-area-basic",
    "contentSha256": "0e7bd98b6a55707b35c4595fa92dd139be6c92757747e8587805c444412881dc",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立核對兩者周長皆 24，面積不同。",
    "derivedAnswer": "乙，面積 35 平方公分",
    "storedAnswer": "乙，面積 35 平方公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「乙，面積 35 平方公分」符合目標「比較同周長長方形的面積」。其餘選項分別違反：32 小於 35。；同周長不保證同面積。；尺寸已足以分別計算。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「周長與面積基本判斷」講義已定義範圍；本題特別使用：甲 8×4。",
      "unitConflict": "尺寸為公分，面積為平方公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「比較同周長長方形的面積」重新讀題，並針對誤解「以為同周長必同面積。」排除另一解讀。"
    },
    "difficultyReason": "需比較兩量並理解非唯一關係。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能分別計算周長與面積。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「比較同周長長方形的面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立核對兩者周長皆 24，面積不同。 正確選項為「乙，面積 35 平方公分」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "441c91cb0d85932a5f8057ca4d9b5aef83b7f04c026febb94b8a65c6d7b04f98"
  },
  {
    "questionId": "u08-s009-v008",
    "unitId": "u08",
    "skillId": "perimeter-area-basic",
    "contentSha256": "da67f51ea4c7a7f3151b6a515468b70c8e4ea61e584e81c1f57d74855b8dc8c7",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "以任意正 b、h 消去後得 2。",
    "derivedAnswer": "2 倍",
    "storedAnswer": "2 倍",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「2 倍」符合目標「比較同底同高兩圖形面積」。其餘選項分別違反：三角形公式多除以 2。；方向顛倒；三角形才是平行四邊形的一半。；公式只差一個因數 2。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「周長與面積基本判斷」講義已定義範圍；本題特別使用：底相同且高相同。",
      "unitConflict": "比值無單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「比較同底同高兩圖形面積」重新讀題，並針對誤解「把倍數方向倒置。」排除另一解讀。"
    },
    "difficultyReason": "符號比較而非單純代數值。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解兩個面積公式。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「比較同底同高兩圖形面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：以任意正 b、h 消去後得 2。 正確選項為「2 倍」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "c09ae577fc6a8c95872ead5e454654f64d8cb45245a870063d578005e67ecd91"
  },
  {
    "questionId": "u08-s009-v009",
    "unitId": "u08",
    "skillId": "perimeter-area-basic",
    "contentSha256": "7514cc776a2623d9fa2a37eb29064a3a5ec663d977b007b8dda18a7586133f7f",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "回代面積 12×8=96 且四邊和 40。",
    "derivedAnswer": "寬 8 公分，周長 40 公分",
    "storedAnswer": "寬 8 公分，周長 40 公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「寬 8 公分，周長 40 公分」符合目標「由面積反求邊長再求周長」。其餘選項分別違反：20 只是長加寬。；把面積減長求寬。；12×4 只有 48。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「周長與面積基本判斷」講義已定義範圍；本題特別使用：長方形面積 96 平方公分。",
      "unitConflict": "面積除長度得到公分，周長仍為公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由面積反求邊長再求周長」重新讀題，並針對誤解「把面積與長度直接相減。」排除另一解讀。"
    },
    "difficultyReason": "兩階段逆向運算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能使用長方形面積與周長公式。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由面積反求邊長再求周長」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：回代面積 12×8=96 且四邊和 40。 正確選項為「寬 8 公分，周長 40 公分」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "38a76bf04bf968b6bf292331d7bc199514b738e771557678329e12def67b0c87"
  },
  {
    "questionId": "u08-s009-v010",
    "unitId": "u08",
    "skillId": "perimeter-area-basic",
    "contentSha256": "3641c95870100fb939647d427ebfdb46efb2b876b2adf5dfe47428bf0a16445b",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立沿四邊總長扣除未設欄區段。",
    "derivedAnswer": "93 公尺",
    "storedAnswer": "93 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「93 公尺」符合目標「由花圃周長扣除入口」。其餘選項分別違反：未扣除入口。；這是面積。；只算長加寬後再扣入口。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「周長與面積基本判斷」講義已定義範圍；本題特別使用：花圃為 30×18 公尺長方形。",
      "unitConflict": "所有邊界長度以公尺表示，答案公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由花圃周長扣除入口」重新讀題，並針對誤解「求成面積或忘記扣入口。」排除另一解讀。"
    },
    "difficultyReason": "實際材料需求必須把入口缺口納入。",
    "literacyContextNecessity": "圍欄材料只沿外圍且入口不施工；入口寬度直接改變需求量，情境不可刪除。",
    "prerequisiteCheck": "能計算長方形周長。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由花圃周長扣除入口」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立沿四邊總長扣除未設欄區段。 正確選項為「93 公尺」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "d4a317051ae8579c3cef012e992022c23f59fccb4e0a9720b11ce15c4b7e1573"
  },
  {
    "questionId": "u08-s009-v011",
    "unitId": "u08",
    "skillId": "perimeter-area-basic",
    "contentSha256": "6f63ed24e5802491fdd84d837359d08f25462a58517fa9a52e24f9762cf4b667",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "面積與單位需求率相乘，平方公尺消去。",
    "derivedAnswer": "192 片",
    "storedAnswer": "192 片",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「192 片」符合目標「由地板面積求地墊片數」。其餘選項分別違反：把周長 28 乘 2 或誤算。；只有地板面積，未乘每平方公尺片數。；以周長 28×8 誤算。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「周長與面積基本判斷」講義已定義範圍；本題特別使用：地板 8×6 公尺。",
      "unitConflict": "48 平方公尺×4 片/平方公尺=192 片。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由地板面積求地墊片數」重新讀題，並針對誤解「把周長當鋪設面積或漏乘需求率。」排除另一解讀。"
    },
    "difficultyReason": "情境的每平方公尺用量是必要轉換。",
    "literacyContextNecessity": "鋪滿地板明確對應面積，且每平方公尺 4 片把幾何量轉成採購數量。",
    "prerequisiteCheck": "能求長方形面積並使用單位率。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由地板面積求地墊片數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：面積與單位需求率相乘，平方公尺消去。 正確選項為「192 片」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "5a7c02589305991ede8088dd0c75ef1b4c6a2e8c2bd7094d7451c3d5c4406a9e"
  },
  {
    "questionId": "u08-s009-v012",
    "unitId": "u08",
    "skillId": "perimeter-area-basic",
    "contentSha256": "ff6883985896ce0ab1d06c048f5925a506c663ec816e70b1b36bacbe7d24f887",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立以 (5.6÷2)×3×0.4 重算。",
    "derivedAnswer": "3.36 公斤",
    "storedAnswer": "3.36 公斤",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「3.36 公斤」符合目標「由三角形面積與單位面積重量求總重」。其餘選項分別違反：忘記三角形面積除以 2。；只求面積後誤當重量。；只乘底長與單位重量，漏掉高與除以 2。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「周長與面積基本判斷」講義已定義範圍；本題特別使用：底 5.6 公尺。",
      "unitConflict": "平方公尺乘公斤/平方公尺得到公斤。",
      "roundingConflict": "數值皆為精確小數，3.36 不需四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由三角形面積與單位面積重量求總重」重新讀題，並針對誤解「忘記除以 2 或把面積當重量。」排除另一解讀。"
    },
    "difficultyReason": "含小數與兩階段單位推理。",
    "literacyContextNecessity": "帆布重量由實際面積與每平方公尺重量共同決定，兩項資料都是採購與搬運評估必要資訊。",
    "prerequisiteCheck": "能求三角形面積並使用單位率。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由三角形面積與單位面積重量求總重」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立以 (5.6÷2)×3×0.4 重算。 正確選項為「3.36 公斤」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "4ec052da89fa0c907e56d38d0ac74d5593afaaa52ccb8837ed3e417387a3e83d"
  }
];

export const DRAWING_SPECS = [];

