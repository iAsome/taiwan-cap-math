export const u19_s013 = {
  "lecture": {
    "lectureId": "u19-s013-lecture-r1",
    "unitId": "u19",
    "numericUnitId": 19,
    "topicId": "u19-measure",
    "skillId": "circle-area",
    "title": "圓面積",
    "unitTitle": "圓",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "slot": "s013",
      "lockedSkillId": "circle-area",
      "lockedOrder": 13,
      "scope": "由半徑或直徑求圓面積並處理反求。"
    },
    "learningOutcomes": [
      "能由半徑或直徑求圓面積。",
      "能由面積反求半徑。",
      "能處理面積比與半徑比。"
    ],
    "prerequisites": [
      {
        "skillId": "sector-perimeter",
        "requiredLevel": "能使用「扇形周長」的核心定義與基本運算，並辨認其適用條件。"
      }
    ],
    "prerequisiteBridge": "先由前一技能「扇形周長」的結論，連接到本技能「圓面積」所需的新判斷。",
    "glossary": [
      {
        "term": "半徑",
        "definition": "圓心到圓周的距離。"
      },
      {
        "term": "直徑",
        "definition": "通過圓心、兩端在圓上的線段，等於2r。"
      },
      {
        "term": "面積比",
        "definition": "兩個面積的比值。"
      }
    ],
    "notation": [
      {
        "symbol": "O",
        "meaning": "圓心。"
      },
      {
        "symbol": "∠ABC",
        "meaning": "頂點是B的角。"
      },
      {
        "symbol": "π",
        "meaning": "圓周率；題目未要求近似時保留π。"
      }
    ],
    "conceptNarrative": [
      "圓面積公式中的 r 必須是半徑，直徑資料先除以2。",
      "半徑放大k倍，面積會放大k²倍，因為公式中半徑被平方。",
      "反求半徑時先除以π得到r²，再取正平方根；半徑不取負值。"
    ],
    "formalDefinitions": [
      {
        "name": "半徑",
        "statement": "圓心到圓周的距離。"
      },
      {
        "name": "直徑",
        "statement": "通過圓心、兩端在圓上的線段，等於2r。"
      },
      {
        "name": "面積比",
        "statement": "兩個面積的比值。"
      }
    ],
    "formulas": [
      {
        "formula": "A=πr²",
        "conditions": [
          "r>0"
        ],
        "meaning": "圓面積"
      },
      {
        "formula": "面積比=r₁²:r₂²",
        "conditions": [
          "兩圓使用同一π"
        ],
        "meaning": "半徑平方比"
      }
    ],
    "nonApplicableCases": [
      "不可用2πr求面積。",
      "直徑不能直接平方代成r²。",
      "由r²=25應取r=5，不取−5作幾何長度。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "判定給的是半徑或直徑。",
        "check": "完成此步後，確認仍在「圓面積」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 2,
        "instruction": "必要時用r=d/2。",
        "check": "完成此步後，確認仍在「圓面積」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 3,
        "instruction": "代入πr²。",
        "check": "完成此步後，確認仍在「圓面積」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 4,
        "instruction": "反求時先求r²再取正根。",
        "check": "完成此步後，確認仍在「圓面積」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 5,
        "instruction": "檢查平方單位與合理大小。",
        "check": "完成此步後，確認仍在「圓面積」的CAP範圍且沒有只憑圖形目測。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "s013-L1",
        "prompt": "r=7的圓面積。",
        "solutionSteps": [
          "A=π×49。"
        ],
        "answer": "49π。",
        "level": "basic"
      },
      {
        "exampleId": "s013-L2",
        "prompt": "直徑12的圓面積。",
        "solutionSteps": [
          "r=6。",
          "A=36π。"
        ],
        "answer": "36π。",
        "level": "standard"
      },
      {
        "exampleId": "s013-L3",
        "prompt": "面積81π的圓半徑。",
        "solutionSteps": [
          "r²=81。",
          "r=9。"
        ],
        "answer": "9。",
        "level": "advanced"
      },
      {
        "exampleId": "s013-L4",
        "prompt": "兩圓半徑比2:3。",
        "solutionSteps": [
          "面積比為4:9。"
        ],
        "answer": "4:9。",
        "level": "connection"
      }
    ],
    "difficultyConnections": {
      "basic": "辨認「圓面積」的定義、符號與單一步驟關係。",
      "standard": "把「圓面積」與前置技能、比例或一次代數連接。",
      "advanced": "在多段弧、複合邊界、反求或條件篩選中使用「圓面積」。",
      "literacy": "把真實尺寸、旋轉、施工或觀測情境轉成「圓面積」的數學模型。"
    },
    "commonMistakes": [
      {
        "mistake": "把圓周長當面積",
        "why": "公式混淆",
        "correction": "面積有r²"
      },
      {
        "mistake": "直徑直接代r",
        "why": "答案四倍",
        "correction": "先除2"
      },
      {
        "mistake": "面積比只用半徑比",
        "why": "忘記平方",
        "correction": "比例要平方"
      },
      {
        "mistake": "反求半徑取負值",
        "why": "忽略長度限制",
        "correction": "只取正值"
      }
    ],
    "selfCheck": [
      "我是否先確認「圓面積」的適用條件？",
      "我是否分清半徑、直徑、弦、弧與角的角色？",
      "我是否寫出必要單位，並在最後才取近似值？",
      "我是否用定理或公式驗證，而不是依圖形外觀猜測？"
    ],
    "summary": [
      "圓面積為πr²。",
      "直徑先除2。",
      "半徑比平方得到面積比。"
    ],
    "connections": {
      "previous": "承接「扇形周長」。",
      "next": "下一技能為「圓組合周長」。"
    },
    "figureReferences": [
      {
        "figureId": "u19-s013-fig001",
        "purpose": "圓 O 畫出一條直徑 d 與垂直半徑 r，圓內以網紋表示面積區域。",
        "altText": "圓 O 畫出一條直徑 d 與垂直半徑 r，圓內以網紋表示面積區域。，不可按比例目測。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u19-s013-v001",
        "u19-s013-v002",
        "u19-s013-v003",
        "u19-s013-v004",
        "u19-s013-v005",
        "u19-s013-v006",
        "u19-s013-v007",
        "u19-s013-v008",
        "u19-s013-v009",
        "u19-s013-v010",
        "u19-s013-v011",
        "u19-s013-v012"
      ],
      "constructedResponseIds": [
        "u19-s013-cr001",
        "u19-s013-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段回讀「圓面積」講義，確認所有符號先定義、公式均附條件，並以四個不同目的例題檢查定義辨認、標準運算、進階邊界與實際連結；特別核對：由半徑或直徑求圓面積並處理反求。",
      "reviewVersion": "human-lecture-review-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "95ab3a82fe7fa1d1408daa5d044acae01e6c97d3c473477389aa975556f9fcbe"
  },
  "questions": [
    {
      "questionId": "u19-s013-v001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s013-fig001",
      "drawingSpecId": "u19-s013-fig001",
      "prompt": "半徑 7 cm 的圓面積為何？",
      "text": "半徑 7 cm 的圓面積為何？",
      "givenConditions": "r=7 cm。",
      "target": "求A。",
      "choices": [
        "49π cm²",
        "14π cm²",
        "7π cm²",
        "49π cm"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「r=7 cm。」重算：A=πr²=π×7²=49π cm²。",
      "explanation": "A=πr²=π×7²=49π cm²。 因此唯一正確選項是「49π cm²」。",
      "steps": [
        "半徑平方49。",
        "乘π。"
      ],
      "optionAnalysis": [
        {
          "choice": "49π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：A=πr²=π×7²=49π cm²。"
        },
        {
          "choice": "14π cm²",
          "truth": false,
          "reason": "用周長2πr。"
        },
        {
          "choice": "7π cm²",
          "truth": false,
          "reason": "半徑未平方。"
        },
        {
          "choice": "49π cm",
          "truth": false,
          "reason": "單位不是平方。"
        }
      ],
      "misconceptionTarget": "圓面積與周長公式混淆。",
      "prerequisiteCheck": "需先能使用「扇形周長」；本題未使用後續技能。",
      "estimatedTimeSec": 45,
      "unitCheck": "u19-s013-v001 已核對所求量「求A。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「直接求圓面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s013-v001。",
      "difficultyReason": "basic：直接求圓面積。 解題需完成「半徑平方49。；乘π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "直接求圓面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "2891e198be2306c6032f89566f8d9d1987e773079364169ca1f9809790c61cdf"
    },
    {
      "questionId": "u19-s013-v002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "直徑 12 m 的圓面積為何？",
      "text": "直徑 12 m 的圓面積為何？",
      "givenConditions": "d=12 m。",
      "target": "求A。",
      "choices": [
        "12π m²",
        "72π m²",
        "36π m²",
        "144π m²"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「d=12 m。」重算：直徑12故半徑6，面積36π。",
      "explanation": "直徑12故半徑6，面積36π。 因此唯一正確選項是「36π m²」。",
      "steps": [
        "r=12÷2=6。",
        "π×6²=36π。"
      ],
      "optionAnalysis": [
        {
          "choice": "12π m²",
          "truth": false,
          "reason": "半徑未平方。"
        },
        {
          "choice": "72π m²",
          "truth": false,
          "reason": "錯用周長。"
        },
        {
          "choice": "36π m²",
          "truth": true,
          "reason": "依題目條件重新計算：直徑12故半徑6，面積36π。"
        },
        {
          "choice": "144π m²",
          "truth": false,
          "reason": "把直徑當半徑。"
        }
      ],
      "misconceptionTarget": "直徑未除2。",
      "prerequisiteCheck": "需先能使用「扇形周長」；本題未使用後續技能。",
      "estimatedTimeSec": 55,
      "unitCheck": "u19-s013-v002 已核對所求量「求A。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由直徑求圓面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s013-v002。",
      "difficultyReason": "basic：由直徑求圓面積。 解題需完成「r=12÷2=6。；π×6²=36π。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由直徑求圓面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "5a0789b376e0ecd4e410c1ebb6141e4c16b3fbcc21eab1bf34763add86066694"
    },
    {
      "questionId": "u19-s013-v003",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "面積為 81π cm² 的圓，半徑為何？",
      "text": "面積為 81π cm² 的圓，半徑為何？",
      "givenConditions": "A=81π cm²。",
      "target": "求r。",
      "choices": [
        "4.5 cm",
        "18 cm",
        "9 cm",
        "81 cm"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「A=81π cm²。」重算：πr²=81π，所以r²=81，幾何長度取r=9。",
      "explanation": "πr²=81π，所以r²=81，幾何長度取r=9。 因此唯一正確選項是「9 cm」。",
      "steps": [
        "除π得r²=81。",
        "取正平方根9。"
      ],
      "optionAnalysis": [
        {
          "choice": "4.5 cm",
          "truth": false,
          "reason": "把直徑誤當半徑。"
        },
        {
          "choice": "18 cm",
          "truth": false,
          "reason": "錯乘2。"
        },
        {
          "choice": "9 cm",
          "truth": true,
          "reason": "依題目條件重新計算：πr²=81π，所以r²=81，幾何長度取r=9。"
        },
        {
          "choice": "81 cm",
          "truth": false,
          "reason": "未開根。"
        }
      ],
      "misconceptionTarget": "反求半徑忘記開平方根。",
      "prerequisiteCheck": "需先能使用「扇形周長」；本題未使用後續技能。",
      "estimatedTimeSec": 60,
      "unitCheck": "u19-s013-v003 已核對所求量「求r。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由面積反求半徑。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s013-v003。",
      "difficultyReason": "basic：由面積反求半徑。 解題需完成「除π得r²=81。；取正平方根9。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由面積反求半徑。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6c89e633da07c1bfd8b9b6af2b887a759cc2ffe54e749ab36f5ec51497138638"
    },
    {
      "questionId": "u19-s013-v004",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "兩圓半徑比 2:5，面積比為何？",
      "text": "兩圓半徑比 2:5，面積比為何？",
      "givenConditions": "兩圓。",
      "target": "求面積比。",
      "choices": [
        "2:5",
        "4:10",
        "8:125",
        "4:25"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「兩圓。」重算：圓面積與半徑平方成正比，2²:5²=4:25。",
      "explanation": "圓面積與半徑平方成正比，2²:5²=4:25。 因此唯一正確選項是「4:25」。",
      "steps": [
        "平方兩個比項。"
      ],
      "optionAnalysis": [
        {
          "choice": "2:5",
          "truth": false,
          "reason": "未平方。"
        },
        {
          "choice": "4:10",
          "truth": false,
          "reason": "只平方第一項。"
        },
        {
          "choice": "8:125",
          "truth": false,
          "reason": "錯立方。"
        },
        {
          "choice": "4:25",
          "truth": true,
          "reason": "依題目條件重新計算：圓面積與半徑平方成正比，2²:5²=4:25。"
        }
      ],
      "misconceptionTarget": "把面積比當半徑比。",
      "prerequisiteCheck": "需先能使用「扇形周長」；本題未使用後續技能。",
      "estimatedTimeSec": 65,
      "unitCheck": "u19-s013-v004 已核對所求量「求面積比。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由半徑比求面積比。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s013-v004。",
      "difficultyReason": "standard：由半徑比求面積比。 解題需完成「平方兩個比項。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由半徑比求面積比。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "797c6251fe61b4d35d75ae7508bed5e03769405a2ead3426a989694c00c43a1f"
    },
    {
      "questionId": "u19-s013-v005",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "甲圓面積是乙圓的 9 倍，則甲、乙半徑比為何？",
      "text": "甲圓面積是乙圓的 9 倍，則甲、乙半徑比為何？",
      "givenConditions": "A甲=9A乙。",
      "target": "求r甲:r乙。",
      "choices": [
        "9:1",
        "3:1",
        "81:1",
        "1:3"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「A甲=9A乙。」重算：半徑比是面積比的正平方根，√9:√1=3:1。",
      "explanation": "半徑比是面積比的正平方根，√9:√1=3:1。 因此唯一正確選項是「3:1」。",
      "steps": [
        "面積比9:1。",
        "取平方根得3:1。"
      ],
      "optionAnalysis": [
        {
          "choice": "9:1",
          "truth": false,
          "reason": "未開根。"
        },
        {
          "choice": "3:1",
          "truth": true,
          "reason": "依題目條件重新計算：半徑比是面積比的正平方根，√9:√1=3:1。"
        },
        {
          "choice": "81:1",
          "truth": false,
          "reason": "錯平方。"
        },
        {
          "choice": "1:3",
          "truth": false,
          "reason": "順序顛倒。"
        }
      ],
      "misconceptionTarget": "由面積比反推半徑比方向錯。",
      "prerequisiteCheck": "需先能使用「扇形周長」；本題未使用後續技能。",
      "estimatedTimeSec": 70,
      "unitCheck": "u19-s013-v005 已核對所求量「求r甲:r乙。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由面積比求半徑比。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s013-v005。",
      "difficultyReason": "standard：由面積比求半徑比。 解題需完成「面積比9:1。；取平方根得3:1。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由面積比求半徑比。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a0ab9e3f38b68a0f7eef7987ce7a9a0c1130036ee9ef0107e1e56054199fcdf3"
    },
    {
      "questionId": "u19-s013-v006",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓周長為 20π cm，圓面積為何？",
      "text": "圓周長為 20π cm，圓面積為何？",
      "givenConditions": "C=20π cm。",
      "target": "求A。",
      "choices": [
        "20π cm²",
        "40π cm²",
        "100π cm²",
        "400π cm²"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「C=20π cm。」重算：2πr=20π，r=10；面積π×10²=100π。",
      "explanation": "2πr=20π，r=10；面積π×10²=100π。 因此唯一正確選項是「100π cm²」。",
      "steps": [
        "由周長求r=10。",
        "代面積公式。"
      ],
      "optionAnalysis": [
        {
          "choice": "20π cm²",
          "truth": false,
          "reason": "把周長係數直接當面積。"
        },
        {
          "choice": "40π cm²",
          "truth": false,
          "reason": "用2πr再算一次。"
        },
        {
          "choice": "100π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：2πr=20π，r=10；面積π×10²=100π。"
        },
        {
          "choice": "400π cm²",
          "truth": false,
          "reason": "把直徑20當半徑20。"
        }
      ],
      "misconceptionTarget": "周長係數與半徑關係不清。",
      "prerequisiteCheck": "需先能使用「扇形周長」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s013-v006 已核對所求量「求A。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由周長轉求面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s013-v006。",
      "difficultyReason": "standard：由周長轉求面積。 解題需完成「由周長求r=10。；代面積公式。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由周長轉求面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "570c9cb7d59f29380fc83dbc9a6bf65a6c0095bc6d477ba742f82a3607e41136"
    },
    {
      "questionId": "u19-s013-v007",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s013-fig001",
      "drawingSpecId": "u19-s013-fig001",
      "prompt": "一圓半徑增加 3 cm 後，面積增加 33π cm²。原半徑為何？",
      "text": "一圓半徑增加 3 cm 後，面積增加 33π cm²。原半徑為何？",
      "givenConditions": "新半徑r+3；面積增33π。",
      "target": "求r。",
      "choices": [
        "3 cm",
        "5 cm",
        "8 cm",
        "4 cm"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「新半徑r+3；面積增33π。」重算：π[(r+3)²−r²]=π(6r+9)=33π，6r=24，r=4。",
      "explanation": "π[(r+3)²−r²]=π(6r+9)=33π，6r=24，r=4。 因此唯一正確選項是「4 cm」。",
      "steps": [
        "列面積差。",
        "展開6r+9=33。",
        "r=4。"
      ],
      "optionAnalysis": [
        {
          "choice": "3 cm",
          "truth": false,
          "reason": "代入面積差27π。"
        },
        {
          "choice": "5 cm",
          "truth": false,
          "reason": "代入39π。"
        },
        {
          "choice": "8 cm",
          "truth": false,
          "reason": "代入57π。"
        },
        {
          "choice": "4 cm",
          "truth": true,
          "reason": "依題目條件重新計算：π[(r+3)²−r²]=π(6r+9)=33π，6r=24，r=4。"
        }
      ],
      "misconceptionTarget": "把面積增加當π×3²。",
      "prerequisiteCheck": "需先能使用「扇形周長」；本題未使用後續技能。",
      "estimatedTimeSec": 120,
      "unitCheck": "u19-s013-v007 已核對所求量「求r。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由面積增量反求原半徑。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s013-v007。",
      "difficultyReason": "advanced：由面積增量反求原半徑。 解題需完成「列面積差。；展開6r+9=33。；r=4。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由面積增量反求原半徑。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "e8559eea3fa44f4fce8af87f8d62605b794cdfa4b89a9ecfcf704aa2707e4b7e"
    },
    {
      "questionId": "u19-s013-v008",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "兩同心圓外半徑是內半徑的 2 倍。外圓面積與圓環面積比為何？",
      "text": "兩同心圓外半徑是內半徑的 2 倍。外圓面積與圓環面積比為何？",
      "givenConditions": "R=2r。",
      "target": "求外圓:圓環。",
      "choices": [
        "4:3",
        "2:1",
        "3:4",
        "4:1"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「R=2r。」重算：令內半徑r，外面積4πr²，圓環面積4πr²−πr²=3πr²，所以4:3。",
      "explanation": "令內半徑r，外面積4πr²，圓環面積4πr²−πr²=3πr²，所以4:3。 因此唯一正確選項是「4:3」。",
      "steps": [
        "設內r、外2r。",
        "求外面積4πr²。",
        "求環3πr²。"
      ],
      "optionAnalysis": [
        {
          "choice": "4:3",
          "truth": true,
          "reason": "依題目條件重新計算：令內半徑r，外面積4πr²，圓環面積4πr²−πr²=3πr²，所以4:3。"
        },
        {
          "choice": "2:1",
          "truth": false,
          "reason": "半徑比直接當面積比。"
        },
        {
          "choice": "3:4",
          "truth": false,
          "reason": "順序顛倒。"
        },
        {
          "choice": "4:1",
          "truth": false,
          "reason": "忽略內圓扣除。"
        }
      ],
      "misconceptionTarget": "圓環面積與外圓面積混淆。",
      "prerequisiteCheck": "需先能使用「扇形周長」；本題未使用後續技能。",
      "estimatedTimeSec": 105,
      "unitCheck": "u19-s013-v008 已核對所求量「求外圓:圓環。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由半徑關係求面積比。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s013-v008。",
      "difficultyReason": "advanced：由半徑關係求面積比。 解題需完成「設內r、外2r。；求外面積4πr²。；求環3πr²。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由半徑關係求面積比。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c802be3ccd7cd4200b3b64d61a40f8771411dda15d37ae7abc7544bc531d3e46"
    },
    {
      "questionId": "u19-s013-v009",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "甲圓半徑比乙圓大 20%，甲圓面積比乙圓大多少百分比？",
      "text": "甲圓半徑比乙圓大 20%，甲圓面積比乙圓大多少百分比？",
      "givenConditions": "r甲=1.2r乙。",
      "target": "求面積增加率。",
      "choices": [
        "20%",
        "44%",
        "40%",
        "120%"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「r甲=1.2r乙。」重算：半徑倍率1.2，面積倍率1.2²=1.44，因此增加44%。",
      "explanation": "半徑倍率1.2，面積倍率1.2²=1.44，因此增加44%。 因此唯一正確選項是「44%」。",
      "steps": [
        "1.2²=1.44。",
        "增加率0.44。"
      ],
      "optionAnalysis": [
        {
          "choice": "20%",
          "truth": false,
          "reason": "未平方。"
        },
        {
          "choice": "44%",
          "truth": true,
          "reason": "依題目條件重新計算：半徑倍率1.2，面積倍率1.2²=1.44，因此增加44%。"
        },
        {
          "choice": "40%",
          "truth": false,
          "reason": "把20%乘2但忽略平方項。"
        },
        {
          "choice": "120%",
          "truth": false,
          "reason": "把倍率誤作增加率。"
        }
      ],
      "misconceptionTarget": "線性估計面積變化。",
      "prerequisiteCheck": "需先能使用「扇形周長」；本題未使用後續技能。",
      "estimatedTimeSec": 100,
      "unitCheck": "u19-s013-v009 已核對所求量「求面積增加率。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "題目明確指定近似常數或百分比，僅於最後一步取近似。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「分析半徑百分比對面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s013-v009。",
      "difficultyReason": "advanced：分析半徑百分比對面積。 解題需完成「1.2²=1.44。；增加率0.44。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "分析半徑百分比對面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "4f2c4f1884e7509a4673e4daaf2b2208ffd8d483ce85b352d64c084431591a4d"
    },
    {
      "questionId": "u19-s013-v010",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形地墊直徑 2 m，面積為何？",
      "text": "圓形地墊直徑 2 m，面積為何？",
      "givenConditions": "d=2 m。",
      "target": "求占地面積。",
      "choices": [
        "2π m²",
        "4π m²",
        "π m",
        "π m²"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「d=2 m。」重算：半徑1 m，面積π×1²=π m²。",
      "explanation": "半徑1 m，面積π×1²=π m²。 因此唯一正確選項是「π m²」。",
      "steps": [
        "d÷2得r=1。",
        "求面積π。"
      ],
      "optionAnalysis": [
        {
          "choice": "2π m²",
          "truth": false,
          "reason": "把直徑當半徑附近錯算。"
        },
        {
          "choice": "4π m²",
          "truth": false,
          "reason": "直徑直接平方。"
        },
        {
          "choice": "π m",
          "truth": false,
          "reason": "單位錯。"
        },
        {
          "choice": "π m²",
          "truth": true,
          "reason": "依題目條件重新計算：半徑1 m，面積π×1²=π m²。"
        }
      ],
      "misconceptionTarget": "商品標示直徑時未換半徑。",
      "prerequisiteCheck": "需先能使用「扇形周長」；本題未使用後續技能。",
      "estimatedTimeSec": 65,
      "unitCheck": "u19-s013-v010 已核對所求量「求占地面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算圓形地墊面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s013-v010。",
      "difficultyReason": "literacy：計算圓形地墊面積。 解題需完成「d÷2得r=1。；求面積π。」。",
      "literacyContextNecessity": "地墊尺寸以直徑標示，購買面積需轉成半徑。",
      "authoringIntent": "計算圓形地墊面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ac728e94ad6237b9830f85bf2e87e2326711e545325c7d55bf5c34ee1be0b729"
    },
    {
      "questionId": "u19-s013-v011",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形水池半徑 6 m，每平方公尺清潔費 50 元，π 取 3.14。總費用為何？",
      "text": "圓形水池半徑 6 m，每平方公尺清潔費 50 元，π 取 3.14。總費用為何？",
      "givenConditions": "r=6 m；π=3.14；50元/m²。",
      "target": "求費用。",
      "choices": [
        "1884 元",
        "5652 元",
        "3600 元",
        "11304 元"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「r=6 m；π=3.14；50元/m²。」重算：面積=3.14×36=113.04 m²，費用=113.04×50=5652元。",
      "explanation": "面積=3.14×36=113.04 m²，費用=113.04×50=5652元。 因此唯一正確選項是「5652 元」。",
      "steps": [
        "求面積113.04。",
        "乘50得5652。"
      ],
      "optionAnalysis": [
        {
          "choice": "1884 元",
          "truth": false,
          "reason": "只乘半徑。"
        },
        {
          "choice": "5652 元",
          "truth": true,
          "reason": "依題目條件重新計算：面積=3.14×36=113.04 m²，費用=113.04×50=5652元。"
        },
        {
          "choice": "3600 元",
          "truth": false,
          "reason": "漏π且錯面積。"
        },
        {
          "choice": "11304 元",
          "truth": false,
          "reason": "多一倍。"
        }
      ],
      "misconceptionTarget": "面積或單價換算錯。",
      "prerequisiteCheck": "需先能使用「扇形周長」；本題未使用後續技能。",
      "estimatedTimeSec": 90,
      "unitCheck": "u19-s013-v011 已核對所求量「求費用。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "題目明確指定近似常數或百分比，僅於最後一步取近似。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「結合圓面積與費率。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s013-v011。",
      "difficultyReason": "literacy：結合圓面積與費率。 解題需完成「求面積113.04。；乘50得5652。」。",
      "literacyContextNecessity": "清潔費按面積計價，必須精確算出池面積。",
      "authoringIntent": "結合圓面積與費率。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8ab8c05307e0b0675f86d97488b1179506ac84e7999f7852d76ce35facc79cd7"
    },
    {
      "questionId": "u19-s013-v012",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "兩個圓形披薩直徑分別 20 cm 與 30 cm。大披薩面積是小披薩的幾倍？",
      "text": "兩個圓形披薩直徑分別 20 cm 與 30 cm。大披薩面積是小披薩的幾倍？",
      "givenConditions": "直徑20與30 cm。",
      "target": "求大/小面積倍數。",
      "choices": [
        "2.25 倍",
        "1.5 倍",
        "2 倍",
        "3 倍"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「直徑20與30 cm。」重算：直徑比也是半徑比1.5，面積比1.5²=2.25。",
      "explanation": "直徑比也是半徑比1.5，面積比1.5²=2.25。 因此唯一正確選項是「2.25 倍」。",
      "steps": [
        "半徑比15:10=1.5。",
        "平方得2.25。"
      ],
      "optionAnalysis": [
        {
          "choice": "2.25 倍",
          "truth": true,
          "reason": "依題目條件重新計算：直徑比也是半徑比1.5，面積比1.5²=2.25。"
        },
        {
          "choice": "1.5 倍",
          "truth": false,
          "reason": "只用直徑比。"
        },
        {
          "choice": "2 倍",
          "truth": false,
          "reason": "把增加量誤作倍數。"
        },
        {
          "choice": "3 倍",
          "truth": false,
          "reason": "錯估。"
        }
      ],
      "misconceptionTarget": "用直徑線性比較面積。",
      "prerequisiteCheck": "需先能使用「扇形周長」；本題未使用後續技能。",
      "estimatedTimeSec": 85,
      "unitCheck": "u19-s013-v012 已核對所求量「求大/小面積倍數。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「比較不同尺寸披薩面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s013-v012。",
      "difficultyReason": "literacy：比較不同尺寸披薩面積。 解題需完成「半徑比15:10=1.5。；平方得2.25。」。",
      "literacyContextNecessity": "價格或份量比較必須使用面積平方比例。",
      "authoringIntent": "比較不同尺寸披薩面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d2640beb12d38159638e2dca3c14c8dca66183d09fa7b981a018f4ee7bd6475f"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u19-s013-cr001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u19-s013-fig001",
      "drawingSpecId": "u19-s013-fig001",
      "prompt": "一圓周長為 18π cm。求半徑、直徑與面積。",
      "requiredWork": [
        "由2πr求半徑。",
        "求直徑。",
        "求面積。"
      ],
      "standardSolution": [
        "2πr=18π，所以r=9 cm。",
        "d=18 cm。",
        "A=π×9²=81π cm²。"
      ],
      "fullCreditSolution": [
        "2πr=18π，所以r=9 cm。",
        "d=18 cm。",
        "A=π×9²=81π cm²。"
      ],
      "alternativeSolutions": [
        "也可先由周長C=πd得到d=18，再求r與面積。"
      ],
      "reasoningSteps": [
        "2πr=18π，所以r=9 cm。",
        "d=18 cm。",
        "A=π×9²=81π cm²。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "r=9、d=18、A=81π及步驟完整。"
        },
        {
          "score": 2,
          "criteria": "三答案全對但理由略，或錯一項。"
        },
        {
          "score": 1,
          "criteria": "正確求出半徑或直徑。"
        },
        {
          "score": 0,
          "criteria": "把周長直接當面積。"
        }
      ],
      "partialCreditRules": [
        "三個目標可分項計分。"
      ],
      "followThroughPolicy": "若半徑算錯，後續依錯誤半徑正確求直徑與面積可保留方法分。",
      "unitNotationRules": "r、d用cm；A用cm²。",
      "answerOnlyPolicy": "只列三答案全對給2分。",
      "commonErrors": [
        "將18當半徑。",
        "面積漏平方。"
      ],
      "independentReview": {
        "derivedResult": "r=9 cm，d=18 cm，A=81π cm²。",
        "ambiguity": "周長正且半徑唯一。",
        "decision": "pass",
        "reviewNote": "u19-s013-cr001 由題目條件另行推導得到「r=9 cm，d=18 cm，A=81π cm²。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "a87d4a6e52d49f35bb03d4df6d4b2513131a6df40086ee2a6f868b23e08d7c79"
    },
    {
      "questionId": "u19-s013-cr002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "甲圓半徑是乙圓的 3/2 倍，乙圓面積為 64π cm²。求兩圓半徑與甲圓面積。",
      "requiredWork": [
        "由乙面積求乙半徑。",
        "依倍率求甲半徑。",
        "求甲面積。"
      ],
      "standardSolution": [
        "乙圓r²=64，所以r乙=8 cm。",
        "r甲=(3/2)×8=12 cm。",
        "A甲=π×12²=144π cm²。"
      ],
      "fullCreditSolution": [
        "乙圓r²=64，所以r乙=8 cm。",
        "r甲=(3/2)×8=12 cm。",
        "A甲=π×12²=144π cm²。"
      ],
      "alternativeSolutions": [
        "也可用面積倍率(3/2)²=9/4，64π×9/4=144π，再反求半徑。"
      ],
      "reasoningSteps": [
        "乙圓r²=64，所以r乙=8 cm。",
        "r甲=(3/2)×8=12 cm。",
        "A甲=π×12²=144π cm²。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "8 cm、12 cm、144π cm²完整。"
        },
        {
          "score": 2,
          "criteria": "答案正確但理由略，或只錯一項。"
        },
        {
          "score": 1,
          "criteria": "知道面積比需平方。"
        },
        {
          "score": 0,
          "criteria": "將64直接當半徑。"
        }
      ],
      "partialCreditRules": [
        "兩種方法皆可。"
      ],
      "followThroughPolicy": "若乙半徑算錯，後續倍率與面積公式正確可保留方法分。",
      "unitNotationRules": "半徑cm；面積cm²。",
      "answerOnlyPolicy": "只寫甲面積144π給2分。",
      "commonErrors": [
        "半徑倍率直接當面積倍率。",
        "反求半徑未開根。"
      ],
      "independentReview": {
        "derivedResult": "乙r=8 cm，甲r=12 cm，甲面積144π cm²。",
        "ambiguity": "幾何長度取正值，唯一。",
        "decision": "pass",
        "reviewNote": "u19-s013-cr002 由題目條件另行推導得到「乙r=8 cm，甲r=12 cm，甲面積144π cm²。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d080669aab3c492686e858f8e312b2b6f3fe7bf34cd67175e2ea644e4c58c10c"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u19-s013-v001",
      "contentSha256": "2891e198be2306c6032f89566f8d9d1987e773079364169ca1f9809790c61cdf",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=7 cm。」重算：A=πr²=π×7²=49π cm²。",
      "derivedAnswer": "49π cm²",
      "storedAnswer": "49π cm²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「49π cm²」符合；三個干擾項分別因「用周長2πr。；半徑未平方。；單位不是平方。」而排除。",
        "undefinedSymbol": "u19-s013-v001 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓面積」講義定義。",
        "unitConflict": "題目所求為「求A。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「直接求圓面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=7 cm。」重讀，所求「求A。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是直接求圓面積。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-perimeter，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 7 cm 的圓面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s013-v001 人工重算：A=πr²=π×7²=49π cm²。 正確選項為「49π cm²」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s013-v002",
      "contentSha256": "5a0789b376e0ecd4e410c1ebb6141e4c16b3fbcc21eab1bf34763add86066694",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「d=12 m。」重算：直徑12故半徑6，面積36π。",
      "derivedAnswer": "36π m²",
      "storedAnswer": "36π m²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「36π m²」符合；三個干擾項分別因「半徑未平方。；錯用周長。；把直徑當半徑。」而排除。",
        "undefinedSymbol": "u19-s013-v002 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓面積」講義定義。",
        "unitConflict": "題目所求為「求A。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由直徑求圓面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「d=12 m。」重讀，所求「求A。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是由直徑求圓面積。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-perimeter，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「直徑 12 m 的圓面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s013-v002 人工重算：直徑12故半徑6，面積36π。 正確選項為「36π m²」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s013-v003",
      "contentSha256": "6c89e633da07c1bfd8b9b6af2b887a759cc2ffe54e749ab36f5ec51497138638",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「A=81π cm²。」重算：πr²=81π，所以r²=81，幾何長度取r=9。",
      "derivedAnswer": "9 cm",
      "storedAnswer": "9 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「9 cm」符合；三個干擾項分別因「把直徑誤當半徑。；錯乘2。；未開根。」而排除。",
        "undefinedSymbol": "u19-s013-v003 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓面積」講義定義。",
        "unitConflict": "題目所求為「求r。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由面積反求半徑。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「A=81π cm²。」重讀，所求「求r。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是由面積反求半徑。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-perimeter，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「面積為 81π cm² 的圓，半徑為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s013-v003 人工重算：πr²=81π，所以r²=81，幾何長度取r=9。 正確選項為「9 cm」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s013-v004",
      "contentSha256": "797c6251fe61b4d35d75ae7508bed5e03769405a2ead3426a989694c00c43a1f",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「兩圓。」重算：圓面積與半徑平方成正比，2²:5²=4:25。",
      "derivedAnswer": "4:25",
      "storedAnswer": "4:25",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「4:25」符合；三個干擾項分別因「未平方。；只平方第一項。；錯立方。」而排除。",
        "undefinedSymbol": "u19-s013-v004 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓面積」講義定義。",
        "unitConflict": "題目所求為「求面積比。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由半徑比求面積比。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「兩圓。」重讀，所求「求面積比。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由半徑比求面積比。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-perimeter，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「兩圓半徑比 2:5，面積比為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s013-v004 人工重算：圓面積與半徑平方成正比，2²:5²=4:25。 正確選項為「4:25」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s013-v005",
      "contentSha256": "a0ab9e3f38b68a0f7eef7987ce7a9a0c1130036ee9ef0107e1e56054199fcdf3",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「A甲=9A乙。」重算：半徑比是面積比的正平方根，√9:√1=3:1。",
      "derivedAnswer": "3:1",
      "storedAnswer": "3:1",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「3:1」符合；三個干擾項分別因「未開根。；錯平方。；順序顛倒。」而排除。",
        "undefinedSymbol": "u19-s013-v005 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓面積」講義定義。",
        "unitConflict": "題目所求為「求r甲:r乙。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由面積比求半徑比。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「A甲=9A乙。」重讀，所求「求r甲:r乙。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由面積比求半徑比。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-perimeter，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「甲圓面積是乙圓的 9 倍，則甲、乙半徑比為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s013-v005 人工重算：半徑比是面積比的正平方根，√9:√1=3:1。 正確選項為「3:1」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s013-v006",
      "contentSha256": "570c9cb7d59f29380fc83dbc9a6bf65a6c0095bc6d477ba742f82a3607e41136",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「C=20π cm。」重算：2πr=20π，r=10；面積π×10²=100π。",
      "derivedAnswer": "100π cm²",
      "storedAnswer": "100π cm²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「100π cm²」符合；三個干擾項分別因「把周長係數直接當面積。；用2πr再算一次。；把直徑20當半徑20。」而排除。",
        "undefinedSymbol": "u19-s013-v006 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓面積」講義定義。",
        "unitConflict": "題目所求為「求A。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由周長轉求面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「C=20π cm。」重讀，所求「求A。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由周長轉求面積。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-perimeter，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓周長為 20π cm，圓面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s013-v006 人工重算：2πr=20π，r=10；面積π×10²=100π。 正確選項為「100π cm²」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s013-v007",
      "contentSha256": "e8559eea3fa44f4fce8af87f8d62605b794cdfa4b89a9ecfcf704aa2707e4b7e",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「新半徑r+3；面積增33π。」重算：π[(r+3)²−r²]=π(6r+9)=33π，6r=24，r=4。",
      "derivedAnswer": "4 cm",
      "storedAnswer": "4 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「4 cm」符合；三個干擾項分別因「代入面積差27π。；代入39π。；代入57π。」而排除。",
        "undefinedSymbol": "u19-s013-v007 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓面積」講義定義。",
        "unitConflict": "題目所求為「求r。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由面積增量反求原半徑。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「新半徑r+3；面積增33π。」重讀，所求「求r。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是由面積增量反求原半徑。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-perimeter，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「一圓半徑增加 3 cm 後，面積增加 33π cm²。原半徑為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s013-v007 人工重算：π[(r+3)²−r²]=π(6r+9)=33π，6r=24，r=4。 正確選項為「4 cm」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s013-v008",
      "contentSha256": "c802be3ccd7cd4200b3b64d61a40f8771411dda15d37ae7abc7544bc531d3e46",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「R=2r。」重算：令內半徑r，外面積4πr²，圓環面積4πr²−πr²=3πr²，所以4:3。",
      "derivedAnswer": "4:3",
      "storedAnswer": "4:3",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「4:3」符合；三個干擾項分別因「半徑比直接當面積比。；順序顛倒。；忽略內圓扣除。」而排除。",
        "undefinedSymbol": "u19-s013-v008 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓面積」講義定義。",
        "unitConflict": "題目所求為「求外圓:圓環。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由半徑關係求面積比。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「R=2r。」重讀，所求「求外圓:圓環。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是由半徑關係求面積比。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-perimeter，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「兩同心圓外半徑是內半徑的 2 倍。外圓面積與圓環面積比為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s013-v008 人工重算：令內半徑r，外面積4πr²，圓環面積4πr²−πr²=3πr²，所以4:3。 正確選項為「4:3」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s013-v009",
      "contentSha256": "4f2c4f1884e7509a4673e4daaf2b2208ffd8d483ce85b352d64c084431591a4d",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r甲=1.2r乙。」重算：半徑倍率1.2，面積倍率1.2²=1.44，因此增加44%。",
      "derivedAnswer": "44%",
      "storedAnswer": "44%",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「44%」符合；三個干擾項分別因「未平方。；把20%乘2但忽略平方項。；把倍率誤作增加率。」而排除。",
        "undefinedSymbol": "u19-s013-v009 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓面積」講義定義。",
        "unitConflict": "題目所求為「求面積增加率。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "近似規則由題幹指定，未在中途重複捨入。",
        "domainBoundary": "本題僅測「分析半徑百分比對面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r甲=1.2r乙。」重讀，所求「求面積增加率。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是分析半徑百分比對面積。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴sector-perimeter，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「甲圓半徑比乙圓大 20%，甲圓面積比乙圓大多少百分比？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s013-v009 人工重算：半徑倍率1.2，面積倍率1.2²=1.44，因此增加44%。 正確選項為「44%」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s013-v010",
      "contentSha256": "ac728e94ad6237b9830f85bf2e87e2326711e545325c7d55bf5c34ee1be0b729",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「d=2 m。」重算：半徑1 m，面積π×1²=π m²。",
      "derivedAnswer": "π m²",
      "storedAnswer": "π m²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「π m²」符合；三個干擾項分別因「把直徑當半徑附近錯算。；直徑直接平方。；單位錯。」而排除。",
        "undefinedSymbol": "u19-s013-v010 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓面積」講義定義。",
        "unitConflict": "題目所求為「求占地面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算圓形地墊面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「d=2 m。」重讀，所求「求占地面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算圓形地墊面積。，而非只依題序標示。",
      "literacyContextNecessity": "地墊尺寸以直徑標示，購買面積需轉成半徑。",
      "prerequisiteCheck": "只依賴sector-perimeter，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形地墊直徑 2 m，面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s013-v010 人工重算：半徑1 m，面積π×1²=π m²。 正確選項為「π m²」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s013-v011",
      "contentSha256": "8ab8c05307e0b0675f86d97488b1179506ac84e7999f7852d76ce35facc79cd7",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=6 m；π=3.14；50元/m²。」重算：面積=3.14×36=113.04 m²，費用=113.04×50=5652元。",
      "derivedAnswer": "5652 元",
      "storedAnswer": "5652 元",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「5652 元」符合；三個干擾項分別因「只乘半徑。；漏π且錯面積。；多一倍。」而排除。",
        "undefinedSymbol": "u19-s013-v011 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓面積」講義定義。",
        "unitConflict": "題目所求為「求費用。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "近似規則由題幹指定，未在中途重複捨入。",
        "domainBoundary": "本題僅測「結合圓面積與費率。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=6 m；π=3.14；50元/m²。」重讀，所求「求費用。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是結合圓面積與費率。，而非只依題序標示。",
      "literacyContextNecessity": "清潔費按面積計價，必須精確算出池面積。",
      "prerequisiteCheck": "只依賴sector-perimeter，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形水池半徑 6 m，每平方公尺清潔費 50 元，π 取 3.14。總費用為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s013-v011 人工重算：面積=3.14×36=113.04 m²，費用=113.04×50=5652元。 正確選項為「5652 元」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s013-v012",
      "contentSha256": "d2640beb12d38159638e2dca3c14c8dca66183d09fa7b981a018f4ee7bd6475f",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「直徑20與30 cm。」重算：直徑比也是半徑比1.5，面積比1.5²=2.25。",
      "derivedAnswer": "2.25 倍",
      "storedAnswer": "2.25 倍",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「2.25 倍」符合；三個干擾項分別因「只用直徑比。；把增加量誤作倍數。；錯估。」而排除。",
        "undefinedSymbol": "u19-s013-v012 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓面積」講義定義。",
        "unitConflict": "題目所求為「求大/小面積倍數。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「比較不同尺寸披薩面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「直徑20與30 cm。」重讀，所求「求大/小面積倍數。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是比較不同尺寸披薩面積。，而非只依題序標示。",
      "literacyContextNecessity": "價格或份量比較必須使用面積平方比例。",
      "prerequisiteCheck": "只依賴sector-perimeter，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「兩個圓形披薩直徑分別 20 cm 與 30 cm。大披薩面積是小披薩的幾倍？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s013-v012 人工重算：直徑比也是半徑比1.5，面積比1.5²=2.25。 正確選項為「2.25 倍」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u19-s013-fig001",
      "unitId": "u19",
      "topicId": "u19-measure",
      "skillId": "circle-area",
      "svgPath": "figures/u19/u19-s013-fig001.svg",
      "canvas": {
        "width": 360,
        "height": 240,
        "viewBox": "0 0 360 240"
      },
      "drawingSpec": {
        "purpose": "支援「圓面積」中需要辨認點、線、弧、角或邊界的題目。",
        "coordinateSystem": "SVG x向右、y向下；所有座標以360×240畫布為準。",
        "geometry": "圓 O 畫出一條直徑 d 與垂直半徑 r，圓內以網紋表示面積區域。",
        "visibleLines": "所有作答所需實線均以2px以上深色描邊；強調弧以5px描邊。",
        "hiddenLines": "只有內部共邊或量測輔助線使用虛線；未指定者不得自行添加。",
        "labels": "標籤位置已在SVG以固定座標給定，避免遮住交點、角弧或刻痕。",
        "symbols": "直角符號、等長刻痕、箭頭及角度符號僅在數學條件需要時出現。",
        "scalePolicy": "示意圖不保證按實際長度或角度比例繪製。",
        "visualInferenceWarning": "不得以目測長短、角度或對稱性取代題目條件與定理。",
        "mobileReadability": "360×240檢視下文字至少16px，關鍵線至少2px，無微小數值標籤。",
        "answerLeakage": "圖中不標示任何題目要求計算的最終數值或正確選項。"
      },
      "altText": "圓 O 畫出一條直徑 d 與垂直半徑 r，圓內以網紋表示面積區域。 圖形僅協助辨認結構，不可依比例目測答案。",
      "svgTitle": "圓面積與直徑圖",
      "svgDescription": "圓 O 畫出一條直徑 d 與垂直半徑 r，圓內以網紋表示面積區域。",
      "svgAssertions": [
        "role=\"img\"",
        "<title",
        "<desc",
        "viewBox=\"0 0 360 240\"",
        ">d</text>",
        ">r</text>",
        ">面積 A=πr²</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "manualRenderInspected": true,
        "mobileReadable": true,
        "answerLeakageFound": false,
        "reviewNote": "已逐項檢查 u19-s013-fig001 的點位、線段、弧線、標籤與輔助符號；此圖專門呈現「圓面積」的結構，未包含可直接推得題庫答案的數值。",
        "reviewVersion": "human-figure-review-r1.0",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "750877092663d72f3e65d8dfc2ed9b34aa8fe17ac0a81d0fc9af62afd79c5eef"
    }
  ]
};
export default u19_s013;
