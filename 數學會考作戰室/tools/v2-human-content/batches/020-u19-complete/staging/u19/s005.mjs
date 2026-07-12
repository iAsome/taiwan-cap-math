export const u19_s005 = {
  "lecture": {
    "lectureId": "u19-s005-lecture-r1",
    "unitId": "u19",
    "numericUnitId": 19,
    "topicId": "u19-angles",
    "skillId": "circle-chord",
    "title": "弦與弧",
    "unitTitle": "圓",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "slot": "s005",
      "lockedSkillId": "circle-chord",
      "lockedOrder": 5,
      "scope": "判斷等弦、等弧與圓心角的關係。"
    },
    "learningOutcomes": [
      "能辨認弦與直徑。",
      "能使用等弦對等弧。",
      "能比較同圓中弦與圓心角。"
    ],
    "prerequisites": [
      {
        "skillId": "arc-length",
        "requiredLevel": "能使用「弧長」的核心定義與基本運算，並辨認其適用條件。"
      }
    ],
    "prerequisiteBridge": "先由前一技能「弧長」的結論，連接到本技能「弦與弧」所需的新判斷。",
    "glossary": [
      {
        "term": "弦",
        "definition": "兩端點都在圓上的線段。"
      },
      {
        "term": "直徑",
        "definition": "通過圓心的弦。"
      },
      {
        "term": "等弦",
        "definition": "長度相等的兩條弦。"
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
      "每一條直徑都是弦，但不是每一條弦都通過圓心。",
      "在同一圓或等圓中，等弦所對的劣弧相等，所對圓心角也相等。",
      "弦越接近直徑通常越長；正式比較時使用所對圓心角或弧，而不只看圖。"
    ],
    "formalDefinitions": [
      {
        "name": "弦",
        "statement": "兩端點都在圓上的線段。"
      },
      {
        "name": "直徑",
        "statement": "通過圓心的弦。"
      },
      {
        "name": "等弦",
        "statement": "長度相等的兩條弦。"
      }
    ],
    "formulas": [
      {
        "formula": "AB=CD ⇔ 劣弧AB=劣弧CD",
        "conditions": [
          "AB、CD 位於同圓或等圓"
        ],
        "meaning": "等弦與等弧"
      },
      {
        "formula": "AB=CD ⇔ ∠AOB=∠COD",
        "conditions": [
          "O 為圓心"
        ],
        "meaning": "等弦與圓心角"
      }
    ],
    "nonApplicableCases": [
      "不同大小的圓中，弦長相等不代表弧度數相等，除非是等圓。",
      "端點不都在圓上的線段不是弦。",
      "優弧與劣弧要分清楚，等弦通常比較對應劣弧。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認線段兩端在圓上。",
        "check": "完成此步後，確認仍在「弦與弧」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 2,
        "instruction": "確認是否同圓或等圓。",
        "check": "完成此步後，確認仍在「弦與弧」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 3,
        "instruction": "把弦長、劣弧與圓心角建立對應。",
        "check": "完成此步後，確認仍在「弦與弧」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 4,
        "instruction": "依等量關係求未知值。",
        "check": "完成此步後，確認仍在「弦與弧」的CAP範圍且沒有只憑圖形目測。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "s005-L1",
        "prompt": "AB 通過圓心且 A、B 在圓上。",
        "solutionSteps": [
          "兩端在圓上，是弦。",
          "又通過圓心。"
        ],
        "answer": "AB 是直徑，也是弦。",
        "level": "basic"
      },
      {
        "exampleId": "s005-L2",
        "prompt": "同圓中 AB=CD，∠AOB=70°。",
        "solutionSteps": [
          "等弦對等圓心角。",
          "∠COD=70°。"
        ],
        "answer": "70°。",
        "level": "standard"
      },
      {
        "exampleId": "s005-L3",
        "prompt": "同圓中劣弧 PQ 為 120°，劣弧 RS 也為120°。",
        "solutionSteps": [
          "等弧對等弦。",
          "PQ=RS。"
        ],
        "answer": "兩弦等長。",
        "level": "advanced"
      },
      {
        "exampleId": "s005-L4",
        "prompt": "同圓中 ∠AOB>∠COD。",
        "solutionSteps": [
          "較大圓心角對較大劣弧。",
          "較大劣弧對較長弦。"
        ],
        "answer": "AB>CD。",
        "level": "connection"
      }
    ],
    "difficultyConnections": {
      "basic": "辨認「弦與弧」的定義、符號與單一步驟關係。",
      "standard": "把「弦與弧」與前置技能、比例或一次代數連接。",
      "advanced": "在多段弧、複合邊界、反求或條件篩選中使用「弦與弧」。",
      "literacy": "把真實尺寸、旋轉、施工或觀測情境轉成「弦與弧」的數學模型。"
    },
    "commonMistakes": [
      {
        "mistake": "認為弦一定通過圓心",
        "why": "把弦與直徑混同",
        "correction": "直徑只是特殊弦"
      },
      {
        "mistake": "跨不同半徑圓直接比弧度數",
        "why": "忽略同圓或等圓條件",
        "correction": "先檢查圓的大小"
      },
      {
        "mistake": "把優弧當成等弦直接對應",
        "why": "未指定弧種",
        "correction": "通常使用較短的劣弧"
      },
      {
        "mistake": "靠圖形長短目測",
        "why": "圖可能不按比例",
        "correction": "使用角度或等量標記"
      }
    ],
    "selfCheck": [
      "我是否先確認「弦與弧」的適用條件？",
      "我是否分清半徑、直徑、弦、弧與角的角色？",
      "我是否寫出必要單位，並在最後才取近似值？",
      "我是否用定理或公式驗證，而不是依圖形外觀猜測？"
    ],
    "summary": [
      "弦的兩端都在圓上。",
      "直徑是最長的弦。",
      "同圓或等圓中，等弦、等劣弧與等圓心角互相對應。"
    ],
    "connections": {
      "previous": "承接「弧長」。",
      "next": "下一技能為「圓周角定理」。"
    },
    "figureReferences": [
      {
        "figureId": "u19-s005-fig001",
        "purpose": "同一圓中畫出等長弦 AB、CD，弦上有相同刻痕，並連接圓心到四端點。",
        "altText": "同一圓中畫出等長弦 AB、CD，弦上有相同刻痕，並連接圓心到四端點。，不可按比例目測。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u19-s005-v001",
        "u19-s005-v002",
        "u19-s005-v003",
        "u19-s005-v004",
        "u19-s005-v005",
        "u19-s005-v006",
        "u19-s005-v007",
        "u19-s005-v008",
        "u19-s005-v009",
        "u19-s005-v010",
        "u19-s005-v011",
        "u19-s005-v012"
      ],
      "constructedResponseIds": [
        "u19-s005-cr001",
        "u19-s005-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段回讀「弦與弧」講義，確認所有符號先定義、公式均附條件，並以四個不同目的例題檢查定義辨認、標準運算、進階邊界與實際連結；特別核對：判斷等弦、等弧與圓心角的關係。",
      "reviewVersion": "human-lecture-review-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "fd503dc370f5331ad85bbaa2e0743b7363f1b06b410ff6b911e4419dbcb4c524"
  },
  "questions": [
    {
      "questionId": "u19-s005-v001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s005-fig001",
      "drawingSpecId": "u19-s005-fig001",
      "prompt": "下列哪一條線段一定是弦？",
      "text": "下列哪一條線段一定是弦？",
      "givenConditions": "候選線段位置如選項。",
      "target": "選出弦。",
      "choices": [
        "圓心到圓周的線段",
        "圓外兩點的連線",
        "兩端點都在圓上的線段",
        "與圓只有一個交點的線段"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「候選線段位置如選項。」重算：弦的定義是兩端點都在圓上的線段。",
      "explanation": "弦的定義是兩端點都在圓上的線段。 因此唯一正確選項是「兩端點都在圓上的線段」。",
      "steps": [
        "檢查兩個端點是否都在圓周。"
      ],
      "optionAnalysis": [
        {
          "choice": "圓心到圓周的線段",
          "truth": false,
          "reason": "這是半徑。"
        },
        {
          "choice": "圓外兩點的連線",
          "truth": false,
          "reason": "端點不在圓上。"
        },
        {
          "choice": "兩端點都在圓上的線段",
          "truth": true,
          "reason": "依題目條件重新計算：弦的定義是兩端點都在圓上的線段。"
        },
        {
          "choice": "與圓只有一個交點的線段",
          "truth": false,
          "reason": "只一個交點不足以成弦。"
        }
      ],
      "misconceptionTarget": "把任何與圓相交的線段當弦。",
      "prerequisiteCheck": "需先能使用「弧長」；本題未使用後續技能。",
      "estimatedTimeSec": 50,
      "unitCheck": "u19-s005-v001 已核對所求量「選出弦。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「辨認弦的定義。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s005-v001。",
      "difficultyReason": "basic：辨認弦的定義。 解題需完成「檢查兩個端點是否都在圓周。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認弦的定義。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "0f589ca7c3d3d18b82b120746369987ed64699a387022148ccdb782cd0d66f19"
    },
    {
      "questionId": "u19-s005-v002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "直徑與弦的關係何者正確？",
      "text": "直徑與弦的關係何者正確？",
      "givenConditions": "同一圓。",
      "target": "判斷集合關係。",
      "choices": [
        "每一條弦都是直徑",
        "直徑不是弦",
        "每一條直徑都是弦",
        "弦一定比半徑短"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「同一圓。」重算：直徑兩端在圓上，所以符合弦定義；但一般弦不必通過圓心。",
      "explanation": "直徑兩端在圓上，所以符合弦定義；但一般弦不必通過圓心。 因此唯一正確選項是「每一條直徑都是弦」。",
      "steps": [
        "由弦定義檢查直徑。",
        "排除逆命題。"
      ],
      "optionAnalysis": [
        {
          "choice": "每一條弦都是直徑",
          "truth": false,
          "reason": "弦不一定通過圓心。"
        },
        {
          "choice": "直徑不是弦",
          "truth": false,
          "reason": "直徑是特殊弦。"
        },
        {
          "choice": "每一條直徑都是弦",
          "truth": true,
          "reason": "依題目條件重新計算：直徑兩端在圓上，所以符合弦定義；但一般弦不必通過圓心。"
        },
        {
          "choice": "弦一定比半徑短",
          "truth": false,
          "reason": "某些弦可長於半徑。"
        }
      ],
      "misconceptionTarget": "把特殊情形與一般情形方向顛倒。",
      "prerequisiteCheck": "需先能使用「弧長」；本題未使用後續技能。",
      "estimatedTimeSec": 55,
      "unitCheck": "u19-s005-v002 已核對所求量「判斷集合關係。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「理解直徑是特殊弦。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s005-v002。",
      "difficultyReason": "basic：理解直徑是特殊弦。 解題需完成「由弦定義檢查直徑。；排除逆命題。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "理解直徑是特殊弦。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "f83fe89d24e75202fdf9b3f7cc0de142c64290964fd609ceaddd595bca98e885"
    },
    {
      "questionId": "u19-s005-v003",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "同一圓中，弦 AB=弦 CD。則下列何者必然成立？",
      "text": "同一圓中，弦 AB=弦 CD。則下列何者必然成立？",
      "givenConditions": "AB、CD為同圓弦且等長。",
      "target": "選出必然結論。",
      "choices": [
        "優弧 AB=劣弧 CD",
        "劣弧 AB=劣弧 CD",
        "AB 通過圓心",
        "兩弦互相垂直"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「AB、CD為同圓弦且等長。」重算：同圓等弦所對劣弧相等。",
      "explanation": "同圓等弦所對劣弧相等。 因此唯一正確選項是「劣弧 AB=劣弧 CD」。",
      "steps": [
        "確認同一圓。",
        "套用等弦對等劣弧。"
      ],
      "optionAnalysis": [
        {
          "choice": "優弧 AB=劣弧 CD",
          "truth": false,
          "reason": "優弧與劣弧種類不同。"
        },
        {
          "choice": "劣弧 AB=劣弧 CD",
          "truth": true,
          "reason": "依題目條件重新計算：同圓等弦所對劣弧相等。"
        },
        {
          "choice": "AB 通過圓心",
          "truth": false,
          "reason": "等弦不必為直徑。"
        },
        {
          "choice": "兩弦互相垂直",
          "truth": false,
          "reason": "等弦不推出垂直。"
        }
      ],
      "misconceptionTarget": "忽略劣弧對應或加入不存在條件。",
      "prerequisiteCheck": "需先能使用「弧長」；本題未使用後續技能。",
      "estimatedTimeSec": 60,
      "unitCheck": "u19-s005-v003 已核對所求量「選出必然結論。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由等弦判等弧。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s005-v003。",
      "difficultyReason": "basic：由等弦判等弧。 解題需完成「確認同一圓。；套用等弦對等劣弧。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由等弦判等弧。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9e92e90750f66dc7c4f56d8a09d34df490cc12de82aa5c2c494a39f7e6d82633"
    },
    {
      "questionId": "u19-s005-v004",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "同一圓中，AB=CD，且 ∠AOB=74°。求 ∠COD。",
      "text": "同一圓中，AB=CD，且 ∠AOB=74°。求 ∠COD。",
      "givenConditions": "O為圓心；AB=CD。",
      "target": "求∠COD。",
      "choices": [
        "37°",
        "106°",
        "148°",
        "74°"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「O為圓心；AB=CD。」重算：同圓等弦所對圓心角相等，因此∠COD=74°。",
      "explanation": "同圓等弦所對圓心角相等，因此∠COD=74°。 因此唯一正確選項是「74°」。",
      "steps": [
        "AB=CD。",
        "等弦對等圓心角。"
      ],
      "optionAnalysis": [
        {
          "choice": "37°",
          "truth": false,
          "reason": "錯取一半。"
        },
        {
          "choice": "106°",
          "truth": false,
          "reason": "錯取補角。"
        },
        {
          "choice": "148°",
          "truth": false,
          "reason": "錯乘2。"
        },
        {
          "choice": "74°",
          "truth": true,
          "reason": "依題目條件重新計算：同圓等弦所對圓心角相等，因此∠COD=74°。"
        }
      ],
      "misconceptionTarget": "把等弦關係與圓周角倍率混用。",
      "prerequisiteCheck": "需先能使用「弧長」；本題未使用後續技能。",
      "estimatedTimeSec": 70,
      "unitCheck": "u19-s005-v004 已核對所求量「求∠COD。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由等弦求圓心角。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s005-v004。",
      "difficultyReason": "standard：由等弦求圓心角。 解題需完成「AB=CD。；等弦對等圓心角。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由等弦求圓心角。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "bb94639f5fd36709fd7a9db7092db96da7b82ba86edc4545ca50f51db7ca46e1"
    },
    {
      "questionId": "u19-s005-v005",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "同一圓中，劣弧 PQ=劣弧 RS，且 PQ=6 cm。則 RS 為何？",
      "text": "同一圓中，劣弧 PQ=劣弧 RS，且 PQ=6 cm。則 RS 為何？",
      "givenConditions": "同一圓；劣弧PQ=劣弧RS。",
      "target": "求RS。",
      "choices": [
        "3 cm",
        "12 cm",
        "6 cm",
        "無法判定"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「同一圓；劣弧PQ=劣弧RS。」重算：同圓等劣弧所對弦相等，故RS=PQ=6 cm。",
      "explanation": "同圓等劣弧所對弦相等，故RS=PQ=6 cm。 因此唯一正確選項是「6 cm」。",
      "steps": [
        "等弧對等弦。",
        "代入PQ長度。"
      ],
      "optionAnalysis": [
        {
          "choice": "3 cm",
          "truth": false,
          "reason": "錯誤取一半。"
        },
        {
          "choice": "12 cm",
          "truth": false,
          "reason": "錯誤乘2。"
        },
        {
          "choice": "6 cm",
          "truth": true,
          "reason": "依題目條件重新計算：同圓等劣弧所對弦相等，故RS=PQ=6 cm。"
        },
        {
          "choice": "無法判定",
          "truth": false,
          "reason": "同圓條件已足夠。"
        }
      ],
      "misconceptionTarget": "以為弧相等仍無法比較弦。",
      "prerequisiteCheck": "需先能使用「弧長」；本題未使用後續技能。",
      "estimatedTimeSec": 65,
      "unitCheck": "u19-s005-v005 已核對所求量「求RS。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由等弧求等弦。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s005-v005。",
      "difficultyReason": "standard：由等弧求等弦。 解題需完成「等弧對等弦。；代入PQ長度。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由等弧求等弦。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "51130b8c9a8003fd2f012af5c0e76456154b0a3350184c0897d69a40a806a452"
    },
    {
      "questionId": "u19-s005-v006",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "同一圓中，∠AOB=50°，∠COD=90°。比較弦 AB 與 CD。",
      "text": "同一圓中，∠AOB=50°，∠COD=90°。比較弦 AB 與 CD。",
      "givenConditions": "O為圓心；兩中心角50°與90°。",
      "target": "比較AB與CD。",
      "choices": [
        "AB=CD",
        "AB<CD",
        "AB>CD",
        "無法比較"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「O為圓心；兩中心角50°與90°。」重算：同圓中較大圓心角對較長弦；90°>50°，故CD較長。",
      "explanation": "同圓中較大圓心角對較長弦；90°>50°，故CD較長。 因此唯一正確選項是「AB<CD」。",
      "steps": [
        "比較中心角。",
        "較大角對較長弦。"
      ],
      "optionAnalysis": [
        {
          "choice": "AB=CD",
          "truth": false,
          "reason": "中心角不等，弦不等。"
        },
        {
          "choice": "AB<CD",
          "truth": true,
          "reason": "依題目條件重新計算：同圓中較大圓心角對較長弦；90°>50°，故CD較長。"
        },
        {
          "choice": "AB>CD",
          "truth": false,
          "reason": "大小方向反了。"
        },
        {
          "choice": "無法比較",
          "truth": false,
          "reason": "同圓與角度資訊足以比較。"
        }
      ],
      "misconceptionTarget": "把較大圓心角對較短弦。",
      "prerequisiteCheck": "需先能使用「弧長」；本題未使用後續技能。",
      "estimatedTimeSec": 75,
      "unitCheck": "u19-s005-v006 已核對所求量「比較AB與CD。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「比較同圓弦長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s005-v006。",
      "difficultyReason": "standard：比較同圓弦長。 解題需完成「比較中心角。；較大角對較長弦。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "比較同圓弦長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "41399d8aefbcf76c2995e05fe7e9c1d1386966133c801e95ec806d2af5a67526"
    },
    {
      "questionId": "u19-s005-v007",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s005-fig001",
      "drawingSpecId": "u19-s005-fig001",
      "prompt": "同一圓中，弦 AB 與 CD 所對圓心角分別為 (3x+5)° 與 (5x−35)°，且 AB=CD。求 x。",
      "text": "同一圓中，弦 AB 與 CD 所對圓心角分別為 (3x+5)° 與 (5x−35)°，且 AB=CD。求 x。",
      "givenConditions": "AB、CD同圓且等長。",
      "target": "求x。",
      "choices": [
        "20",
        "10",
        "15",
        "25"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「AB、CD同圓且等長。」重算：等弦對等圓心角，3x+5=5x−35，40=2x，x=20。",
      "explanation": "等弦對等圓心角，3x+5=5x−35，40=2x，x=20。 因此唯一正確選項是「20」。",
      "steps": [
        "列兩角相等。",
        "解得x=20。",
        "回代皆65°。"
      ],
      "optionAnalysis": [
        {
          "choice": "20",
          "truth": true,
          "reason": "依題目條件重新計算：等弦對等圓心角，3x+5=5x−35，40=2x，x=20。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "回代35°與15°不等。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "回代50°與40°不等。"
        },
        {
          "choice": "25",
          "truth": false,
          "reason": "回代80°與90°不等。"
        }
      ],
      "misconceptionTarget": "未使用等弦對等角或移項錯。",
      "prerequisiteCheck": "需先能使用「弧長」；本題未使用後續技能。",
      "estimatedTimeSec": 105,
      "unitCheck": "u19-s005-v007 已核對所求量「求x。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「以代數使用等弦性質。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s005-v007。",
      "difficultyReason": "advanced：以代數使用等弦性質。 解題需完成「列兩角相等。；解得x=20。；回代皆65°。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "以代數使用等弦性質。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "711cf2a048adb9fdd489513c10de561ffdeb35e5bcbd308ccef25932665e7cfa"
    },
    {
      "questionId": "u19-s005-v008",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑為 10 的圓中，弦 AB 長 20。下列何者必然正確？",
      "text": "半徑為 10 的圓中，弦 AB 長 20。下列何者必然正確？",
      "givenConditions": "r=10；AB為弦且長20。",
      "target": "判定AB性質。",
      "choices": [
        "AB 所對圓心角為90°",
        "AB 只是一條普通短弦",
        "AB 長度大於直徑",
        "AB 是直徑"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「r=10；AB為弦且長20。」重算：直徑長2r=20；弦的最大長度是直徑，因此長20的弦必通過圓心。",
      "explanation": "直徑長2r=20；弦的最大長度是直徑，因此長20的弦必通過圓心。 因此唯一正確選項是「AB 是直徑」。",
      "steps": [
        "求直徑20。",
        "弦長等於最大可能值。"
      ],
      "optionAnalysis": [
        {
          "choice": "AB 所對圓心角為90°",
          "truth": false,
          "reason": "直徑所對圓心角是180°。"
        },
        {
          "choice": "AB 只是一條普通短弦",
          "truth": false,
          "reason": "長度達最大，不是普通短弦。"
        },
        {
          "choice": "AB 長度大於直徑",
          "truth": false,
          "reason": "等於而非大於直徑。"
        },
        {
          "choice": "AB 是直徑",
          "truth": true,
          "reason": "依題目條件重新計算：直徑長2r=20；弦的最大長度是直徑，因此長20的弦必通過圓心。"
        }
      ],
      "misconceptionTarget": "不知道直徑是最長弦。",
      "prerequisiteCheck": "需先能使用「弧長」；本題未使用後續技能。",
      "estimatedTimeSec": 100,
      "unitCheck": "u19-s005-v008 已核對所求量「判定AB性質。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由半徑與弦長判定直徑。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s005-v008。",
      "difficultyReason": "advanced：由半徑與弦長判定直徑。 解題需完成「求直徑20。；弦長等於最大可能值。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由半徑與弦長判定直徑。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7c691896683cdc004182a35b4100e36c432f9727e49ac98c25c16f864c2c9fc2"
    },
    {
      "questionId": "u19-s005-v009",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "兩個半徑不同的圓各有一條長 8 的弦。能否推出兩弦所對劣弧度數相同？",
      "text": "兩個半徑不同的圓各有一條長 8 的弦。能否推出兩弦所對劣弧度數相同？",
      "givenConditions": "兩圓半徑不同；弦長皆8。",
      "target": "判斷弧度數是否必同。",
      "choices": [
        "不能，除非兩圓半徑相同或為等圓",
        "一定相同",
        "一定互補",
        "一定都是180°"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「兩圓半徑不同；弦長皆8。」重算：同弦長在不同半徑圓中所對中心角可能不同；等弦等弧性質需同圓或等圓。",
      "explanation": "同弦長在不同半徑圓中所對中心角可能不同；等弦等弧性質需同圓或等圓。 因此唯一正確選項是「不能，除非兩圓半徑相同或為等圓」。",
      "steps": [
        "檢查是否同圓或等圓。",
        "指出缺少半徑相同條件。"
      ],
      "optionAnalysis": [
        {
          "choice": "不能，除非兩圓半徑相同或為等圓",
          "truth": true,
          "reason": "依題目條件重新計算：同弦長在不同半徑圓中所對中心角可能不同；等弦等弧性質需同圓或等圓。"
        },
        {
          "choice": "一定相同",
          "truth": false,
          "reason": "忽略圓大小。"
        },
        {
          "choice": "一定互補",
          "truth": false,
          "reason": "弧度數無互補必然性。"
        },
        {
          "choice": "一定都是180°",
          "truth": false,
          "reason": "只有弦為直徑才是180°。"
        }
      ],
      "misconceptionTarget": "跨不同圓錯用等弦等弧。",
      "prerequisiteCheck": "需先能使用「弧長」；本題未使用後續技能。",
      "estimatedTimeSec": 110,
      "unitCheck": "u19-s005-v009 已核對所求量「判斷弧度數是否必同。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「判斷等弦性質的適用條件。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s005-v009。",
      "difficultyReason": "advanced：判斷等弦性質的適用條件。 解題需完成「檢查是否同圓或等圓。；指出缺少半徑相同條件。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "判斷等弦性質的適用條件。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "78cb51f7638bbf2aa0edd0d31023d9c734765864cb43a74cf80893e85e676b84"
    },
    {
      "questionId": "u19-s005-v010",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形拱門上兩條支撐桿 AB、CD 都連接拱門圓周，且長度相等。若位於同一圓弧結構，兩桿所對的中心角關係為何？",
      "text": "圓形拱門上兩條支撐桿 AB、CD 都連接拱門圓周，且長度相等。若位於同一圓弧結構，兩桿所對的中心角關係為何？",
      "givenConditions": "兩桿端點均在同一圓周且等長。",
      "target": "比較中心角。",
      "choices": [
        "一個是另一個兩倍",
        "相等",
        "和為90°",
        "無法比較"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「兩桿端點均在同一圓周且等長。」重算：同一圓中等弦所對圓心角相等。",
      "explanation": "同一圓中等弦所對圓心角相等。 因此唯一正確選項是「相等」。",
      "steps": [
        "把支撐桿視為弦。",
        "使用同圓等弦性質。"
      ],
      "optionAnalysis": [
        {
          "choice": "一個是另一個兩倍",
          "truth": false,
          "reason": "沒有倍率關係。"
        },
        {
          "choice": "相等",
          "truth": true,
          "reason": "依題目條件重新計算：同一圓中等弦所對圓心角相等。"
        },
        {
          "choice": "和為90°",
          "truth": false,
          "reason": "沒有直角條件。"
        },
        {
          "choice": "無法比較",
          "truth": false,
          "reason": "同圓與等長已足夠。"
        }
      ],
      "misconceptionTarget": "未把支撐桿端點在圓周轉成弦。",
      "prerequisiteCheck": "需先能使用「弧長」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s005-v010 已核對所求量「比較中心角。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「將結構桿件建模為等弦。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s005-v010。",
      "difficultyReason": "literacy：將結構桿件建模為等弦。 解題需完成「把支撐桿視為弦。；使用同圓等弦性質。」。",
      "literacyContextNecessity": "桿件長度相等是判定拱門分區角度相等的必要資料。",
      "authoringIntent": "將結構桿件建模為等弦。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9e7d15aadf8bb9a984bec4e55e1d85c5dc10abaf2605470a3c792bdc9ffa9667"
    },
    {
      "questionId": "u19-s005-v011",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形音箱面板上，設計師希望兩條弦形開孔所對劣弧相等。應控制哪一項最直接？",
      "text": "圓形音箱面板上，設計師希望兩條弦形開孔所對劣弧相等。應控制哪一項最直接？",
      "givenConditions": "兩開孔皆為同一圓中的弦。",
      "target": "選出直接控制量。",
      "choices": [
        "兩弦與水平線夾角相等",
        "兩弦中點高度相等但不考慮圓心",
        "兩弦顏色相同",
        "兩條弦的長度相等"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「兩開孔皆為同一圓中的弦。」重算：同一圓中等弦與等劣弧互相對應，直接控制弦長即可。",
      "explanation": "同一圓中等弦與等劣弧互相對應，直接控制弦長即可。 因此唯一正確選項是「兩條弦的長度相等」。",
      "steps": [
        "確認開孔在同一圓。",
        "使用等弦等弧。"
      ],
      "optionAnalysis": [
        {
          "choice": "兩弦與水平線夾角相等",
          "truth": false,
          "reason": "方向相等不保證弦長。"
        },
        {
          "choice": "兩弦中點高度相等但不考慮圓心",
          "truth": false,
          "reason": "未以圓心為基準的高度不充分。"
        },
        {
          "choice": "兩弦顏色相同",
          "truth": false,
          "reason": "顏色與幾何無關。"
        },
        {
          "choice": "兩條弦的長度相等",
          "truth": true,
          "reason": "依題目條件重新計算：同一圓中等弦與等劣弧互相對應，直接控制弦長即可。"
        }
      ],
      "misconceptionTarget": "用視覺外觀取代幾何長度。",
      "prerequisiteCheck": "需先能使用「弧長」；本題未使用後續技能。",
      "estimatedTimeSec": 85,
      "unitCheck": "u19-s005-v011 已核對所求量「選出直接控制量。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「用弦長控制等弧設計。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s005-v011。",
      "difficultyReason": "literacy：用弦長控制等弧設計。 解題需完成「確認開孔在同一圓。；使用等弦等弧。」。",
      "literacyContextNecessity": "設計要求是弧相等，因此弦長是可量測且等價的控制量。",
      "authoringIntent": "用弦長控制等弧設計。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9d4992124cd01e8b844fea415611f71c06c11b9f94d822584d94451e4b438fc5"
    },
    {
      "questionId": "u19-s005-v012",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "同一圓形零件上，弦甲所對中心角為 140°，弦乙所對中心角為 100°。哪一條弦較長？",
      "text": "同一圓形零件上，弦甲所對中心角為 140°，弦乙所對中心角為 100°。哪一條弦較長？",
      "givenConditions": "兩弦位於同一圓；角度140°與100°。",
      "target": "判定較長弦。",
      "choices": [
        "弦甲",
        "弦乙",
        "兩弦等長",
        "資料不足"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「兩弦位於同一圓；角度140°與100°。」重算：同一圓中140°>100°，較大中心角對較長弦，所以弦甲較長。",
      "explanation": "同一圓中140°>100°，較大中心角對較長弦，所以弦甲較長。 因此唯一正確選項是「弦甲」。",
      "steps": [
        "確認同一圓。",
        "比較中心角大小。"
      ],
      "optionAnalysis": [
        {
          "choice": "弦甲",
          "truth": true,
          "reason": "依題目條件重新計算：同一圓中140°>100°，較大中心角對較長弦，所以弦甲較長。"
        },
        {
          "choice": "弦乙",
          "truth": false,
          "reason": "大小方向顛倒。"
        },
        {
          "choice": "兩弦等長",
          "truth": false,
          "reason": "中心角不等。"
        },
        {
          "choice": "資料不足",
          "truth": false,
          "reason": "同圓條件足以比較。"
        }
      ],
      "misconceptionTarget": "以弦在圖上的方向或位置猜長度。",
      "prerequisiteCheck": "需先能使用「弧長」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s005-v012 已核對所求量「判定較長弦。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「在零件規格中由中心角比較弦長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s005-v012。",
      "difficultyReason": "literacy：在零件規格中由中心角比較弦長。 解題需完成「確認同一圓。；比較中心角大小。」。",
      "literacyContextNecessity": "中心角數值是比較弦長的核心規格。",
      "authoringIntent": "在零件規格中由中心角比較弦長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b0470828eae3c3a88b300d468615ceafa6f7f3c041e26740d815c140c6e0b122"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u19-s005-cr001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u19-s005-fig001",
      "drawingSpecId": "u19-s005-fig001",
      "prompt": "同一圓中，弦 AB=弦 CD。已知 ∠AOB=(3x+12)°、∠COD=(5x−20)°。求 x 與兩個圓心角。",
      "requiredWork": [
        "說明等弦對等圓心角。",
        "列方程並解x。",
        "回代檢查。"
      ],
      "standardSolution": [
        "3x+12=5x−20。",
        "2x=32，x=16。",
        "兩圓心角皆60°。"
      ],
      "fullCreditSolution": [
        "3x+12=5x−20。",
        "2x=32，x=16。",
        "兩圓心角皆60°。"
      ],
      "alternativeSolutions": [
        "可先由等弦對等弧，再由等弧對等圓心角。"
      ],
      "reasoningSteps": [
        "3x+12=5x−20。",
        "2x=32，x=16。",
        "兩圓心角皆60°。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "x=16、兩角60°且理由完整。"
        },
        {
          "score": 2,
          "criteria": "方程與x正確但未回代。"
        },
        {
          "score": 1,
          "criteria": "知道兩角相等並列式。"
        },
        {
          "score": 0,
          "criteria": "無等弦性質。"
        }
      ],
      "partialCreditRules": [
        "等弦到等角的理由可直接引用。"
      ],
      "followThroughPolicy": "若移項小錯，正確列式可得1分。",
      "unitNotationRules": "角度加°；x無單位。",
      "answerOnlyPolicy": "只寫x=16給2分。",
      "commonErrors": [
        "把角設互補。",
        "把圓心角取一半。"
      ],
      "independentReview": {
        "derivedResult": "x=16，兩角皆60°。",
        "ambiguity": "同圓等弦條件充分，線性方程唯一。",
        "decision": "pass",
        "reviewNote": "u19-s005-cr001 由題目條件另行推導得到「x=16，兩角皆60°。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b08f3142109bdafe78657a81a72af38a8f5f64af0328b1c11f266ba3b02f75d6"
    },
    {
      "questionId": "u19-s005-cr002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 13 cm 的圓中有一條弦長 24 cm。圓心到弦的垂線平分弦。求弦心距。",
      "requiredWork": [
        "將弦平分為兩段12 cm。",
        "建立直角三角形。",
        "用畢氏定理求距離。"
      ],
      "standardSolution": [
        "垂足把弦24分成12、12。",
        "半徑13為斜邊，弦心距d滿足d²+12²=13²。",
        "d²=25，所以d=5 cm。"
      ],
      "fullCreditSolution": [
        "垂足把弦24分成12、12。",
        "半徑13為斜邊，弦心距d滿足d²+12²=13²。",
        "d²=25，所以d=5 cm。"
      ],
      "alternativeSolutions": [
        "可辨認5-12-13直角三角形。"
      ],
      "reasoningSteps": [
        "垂足把弦24分成12、12。",
        "半徑13為斜邊，弦心距d滿足d²+12²=13²。",
        "d²=25，所以d=5 cm。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "平分、直角三角形與d=5 cm完整。"
        },
        {
          "score": 2,
          "criteria": "答案正確但平分或垂直理由略。"
        },
        {
          "score": 1,
          "criteria": "知道使用半弦12與半徑13。"
        },
        {
          "score": 0,
          "criteria": "直接用24與13相減。"
        }
      ],
      "partialCreditRules": [
        "若半弦取對但計算錯可得1分。"
      ],
      "followThroughPolicy": "若早期把半弦算錯，後續正確套畢氏可給1分。",
      "unitNotationRules": "距離用cm且取正值。",
      "answerOnlyPolicy": "只寫5 cm給2分。",
      "commonErrors": [
        "把整弦24當直角股。",
        "求出負距離。"
      ],
      "independentReview": {
        "derivedResult": "弦心距5 cm。",
        "ambiguity": "垂線位置與半徑形成唯一正直角三角形。",
        "decision": "pass",
        "reviewNote": "u19-s005-cr002 由題目條件另行推導得到「弦心距5 cm。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "43dfe8bc21d9724fe658d0d4a45951df64c4b120031197efb10f43a54bb3cd86"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u19-s005-v001",
      "contentSha256": "0f589ca7c3d3d18b82b120746369987ed64699a387022148ccdb782cd0d66f19",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「候選線段位置如選項。」重算：弦的定義是兩端點都在圓上的線段。",
      "derivedAnswer": "兩端點都在圓上的線段",
      "storedAnswer": "兩端點都在圓上的線段",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「兩端點都在圓上的線段」符合；三個干擾項分別因「這是半徑。；端點不在圓上。；只一個交點不足以成弦。」而排除。",
        "undefinedSymbol": "u19-s005-v001 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弦與弧」講義定義。",
        "unitConflict": "題目所求為「選出弦。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「辨認弦的定義。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「候選線段位置如選項。」重讀，所求「選出弦。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是辨認弦的定義。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴arc-length，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「下列哪一條線段一定是弦？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s005-v001 人工重算：弦的定義是兩端點都在圓上的線段。 正確選項為「兩端點都在圓上的線段」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s005-v002",
      "contentSha256": "f83fe89d24e75202fdf9b3f7cc0de142c64290964fd609ceaddd595bca98e885",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「同一圓。」重算：直徑兩端在圓上，所以符合弦定義；但一般弦不必通過圓心。",
      "derivedAnswer": "每一條直徑都是弦",
      "storedAnswer": "每一條直徑都是弦",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「每一條直徑都是弦」符合；三個干擾項分別因「弦不一定通過圓心。；直徑是特殊弦。；某些弦可長於半徑。」而排除。",
        "undefinedSymbol": "u19-s005-v002 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弦與弧」講義定義。",
        "unitConflict": "題目所求為「判斷集合關係。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「理解直徑是特殊弦。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「同一圓。」重讀，所求「判斷集合關係。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是理解直徑是特殊弦。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴arc-length，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「直徑與弦的關係何者正確？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s005-v002 人工重算：直徑兩端在圓上，所以符合弦定義；但一般弦不必通過圓心。 正確選項為「每一條直徑都是弦」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s005-v003",
      "contentSha256": "9e92e90750f66dc7c4f56d8a09d34df490cc12de82aa5c2c494a39f7e6d82633",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「AB、CD為同圓弦且等長。」重算：同圓等弦所對劣弧相等。",
      "derivedAnswer": "劣弧 AB=劣弧 CD",
      "storedAnswer": "劣弧 AB=劣弧 CD",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「劣弧 AB=劣弧 CD」符合；三個干擾項分別因「優弧與劣弧種類不同。；等弦不必為直徑。；等弦不推出垂直。」而排除。",
        "undefinedSymbol": "u19-s005-v003 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弦與弧」講義定義。",
        "unitConflict": "題目所求為「選出必然結論。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由等弦判等弧。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「AB、CD為同圓弦且等長。」重讀，所求「選出必然結論。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是由等弦判等弧。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴arc-length，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一圓中，弦 AB=弦 CD。則下列何者必然成立？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s005-v003 人工重算：同圓等弦所對劣弧相等。 正確選項為「劣弧 AB=劣弧 CD」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s005-v004",
      "contentSha256": "bb94639f5fd36709fd7a9db7092db96da7b82ba86edc4545ca50f51db7ca46e1",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「O為圓心；AB=CD。」重算：同圓等弦所對圓心角相等，因此∠COD=74°。",
      "derivedAnswer": "74°",
      "storedAnswer": "74°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「74°」符合；三個干擾項分別因「錯取一半。；錯取補角。；錯乘2。」而排除。",
        "undefinedSymbol": "u19-s005-v004 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弦與弧」講義定義。",
        "unitConflict": "題目所求為「求∠COD。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由等弦求圓心角。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「O為圓心；AB=CD。」重讀，所求「求∠COD。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由等弦求圓心角。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴arc-length，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一圓中，AB=CD，且 ∠AOB=74°。求 ∠COD。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s005-v004 人工重算：同圓等弦所對圓心角相等，因此∠COD=74°。 正確選項為「74°」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s005-v005",
      "contentSha256": "51130b8c9a8003fd2f012af5c0e76456154b0a3350184c0897d69a40a806a452",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「同一圓；劣弧PQ=劣弧RS。」重算：同圓等劣弧所對弦相等，故RS=PQ=6 cm。",
      "derivedAnswer": "6 cm",
      "storedAnswer": "6 cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「6 cm」符合；三個干擾項分別因「錯誤取一半。；錯誤乘2。；同圓條件已足夠。」而排除。",
        "undefinedSymbol": "u19-s005-v005 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弦與弧」講義定義。",
        "unitConflict": "題目所求為「求RS。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由等弧求等弦。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「同一圓；劣弧PQ=劣弧RS。」重讀，所求「求RS。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由等弧求等弦。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴arc-length，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一圓中，劣弧 PQ=劣弧 RS，且 PQ=6 cm。則 RS 為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s005-v005 人工重算：同圓等劣弧所對弦相等，故RS=PQ=6 cm。 正確選項為「6 cm」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s005-v006",
      "contentSha256": "41399d8aefbcf76c2995e05fe7e9c1d1386966133c801e95ec806d2af5a67526",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「O為圓心；兩中心角50°與90°。」重算：同圓中較大圓心角對較長弦；90°>50°，故CD較長。",
      "derivedAnswer": "AB<CD",
      "storedAnswer": "AB<CD",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「AB<CD」符合；三個干擾項分別因「中心角不等，弦不等。；大小方向反了。；同圓與角度資訊足以比較。」而排除。",
        "undefinedSymbol": "u19-s005-v006 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弦與弧」講義定義。",
        "unitConflict": "題目所求為「比較AB與CD。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「比較同圓弦長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「O為圓心；兩中心角50°與90°。」重讀，所求「比較AB與CD。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是比較同圓弦長。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴arc-length，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一圓中，∠AOB=50°，∠COD=90°。比較弦 AB 與 CD。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s005-v006 人工重算：同圓中較大圓心角對較長弦；90°>50°，故CD較長。 正確選項為「AB<CD」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s005-v007",
      "contentSha256": "711cf2a048adb9fdd489513c10de561ffdeb35e5bcbd308ccef25932665e7cfa",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「AB、CD同圓且等長。」重算：等弦對等圓心角，3x+5=5x−35，40=2x，x=20。",
      "derivedAnswer": "20",
      "storedAnswer": "20",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「20」符合；三個干擾項分別因「回代35°與15°不等。；回代50°與40°不等。；回代80°與90°不等。」而排除。",
        "undefinedSymbol": "u19-s005-v007 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弦與弧」講義定義。",
        "unitConflict": "題目所求為「求x。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「以代數使用等弦性質。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「AB、CD同圓且等長。」重讀，所求「求x。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是以代數使用等弦性質。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴arc-length，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一圓中，弦 AB 與 CD 所對圓心角分別為 (3x+5)° 與 (5x−35)°，且 AB=CD。求 x。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s005-v007 人工重算：等弦對等圓心角，3x+5=5x−35，40=2x，x=20。 正確選項為「20」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s005-v008",
      "contentSha256": "7c691896683cdc004182a35b4100e36c432f9727e49ac98c25c16f864c2c9fc2",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=10；AB為弦且長20。」重算：直徑長2r=20；弦的最大長度是直徑，因此長20的弦必通過圓心。",
      "derivedAnswer": "AB 是直徑",
      "storedAnswer": "AB 是直徑",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「AB 是直徑」符合；三個干擾項分別因「直徑所對圓心角是180°。；長度達最大，不是普通短弦。；等於而非大於直徑。」而排除。",
        "undefinedSymbol": "u19-s005-v008 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弦與弧」講義定義。",
        "unitConflict": "題目所求為「判定AB性質。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由半徑與弦長判定直徑。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=10；AB為弦且長20。」重讀，所求「判定AB性質。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是由半徑與弦長判定直徑。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴arc-length，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑為 10 的圓中，弦 AB 長 20。下列何者必然正確？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s005-v008 人工重算：直徑長2r=20；弦的最大長度是直徑，因此長20的弦必通過圓心。 正確選項為「AB 是直徑」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s005-v009",
      "contentSha256": "78cb51f7638bbf2aa0edd0d31023d9c734765864cb43a74cf80893e85e676b84",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「兩圓半徑不同；弦長皆8。」重算：同弦長在不同半徑圓中所對中心角可能不同；等弦等弧性質需同圓或等圓。",
      "derivedAnswer": "不能，除非兩圓半徑相同或為等圓",
      "storedAnswer": "不能，除非兩圓半徑相同或為等圓",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「不能，除非兩圓半徑相同或為等圓」符合；三個干擾項分別因「忽略圓大小。；弧度數無互補必然性。；只有弦為直徑才是180°。」而排除。",
        "undefinedSymbol": "u19-s005-v009 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弦與弧」講義定義。",
        "unitConflict": "題目所求為「判斷弧度數是否必同。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「判斷等弦性質的適用條件。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「兩圓半徑不同；弦長皆8。」重讀，所求「判斷弧度數是否必同。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是判斷等弦性質的適用條件。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴arc-length，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「兩個半徑不同的圓各有一條長 8 的弦。能否推出兩弦所對劣弧度數相同？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s005-v009 人工重算：同弦長在不同半徑圓中所對中心角可能不同；等弦等弧性質需同圓或等圓。 正確選項為「不能，除非兩圓半徑相同或為等圓」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s005-v010",
      "contentSha256": "9e7d15aadf8bb9a984bec4e55e1d85c5dc10abaf2605470a3c792bdc9ffa9667",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「兩桿端點均在同一圓周且等長。」重算：同一圓中等弦所對圓心角相等。",
      "derivedAnswer": "相等",
      "storedAnswer": "相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「相等」符合；三個干擾項分別因「沒有倍率關係。；沒有直角條件。；同圓與等長已足夠。」而排除。",
        "undefinedSymbol": "u19-s005-v010 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弦與弧」講義定義。",
        "unitConflict": "題目所求為「比較中心角。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「將結構桿件建模為等弦。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「兩桿端點均在同一圓周且等長。」重讀，所求「比較中心角。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是將結構桿件建模為等弦。，而非只依題序標示。",
      "literacyContextNecessity": "桿件長度相等是判定拱門分區角度相等的必要資料。",
      "prerequisiteCheck": "只依賴arc-length，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形拱門上兩條支撐桿 AB、CD 都連接拱門圓周，且長度相等。若位於同一圓弧結構，兩桿所對的中心角關係為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s005-v010 人工重算：同一圓中等弦所對圓心角相等。 正確選項為「相等」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s005-v011",
      "contentSha256": "9d4992124cd01e8b844fea415611f71c06c11b9f94d822584d94451e4b438fc5",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「兩開孔皆為同一圓中的弦。」重算：同一圓中等弦與等劣弧互相對應，直接控制弦長即可。",
      "derivedAnswer": "兩條弦的長度相等",
      "storedAnswer": "兩條弦的長度相等",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「兩條弦的長度相等」符合；三個干擾項分別因「方向相等不保證弦長。；未以圓心為基準的高度不充分。；顏色與幾何無關。」而排除。",
        "undefinedSymbol": "u19-s005-v011 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弦與弧」講義定義。",
        "unitConflict": "題目所求為「選出直接控制量。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「用弦長控制等弧設計。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「兩開孔皆為同一圓中的弦。」重讀，所求「選出直接控制量。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是用弦長控制等弧設計。，而非只依題序標示。",
      "literacyContextNecessity": "設計要求是弧相等，因此弦長是可量測且等價的控制量。",
      "prerequisiteCheck": "只依賴arc-length，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形音箱面板上，設計師希望兩條弦形開孔所對劣弧相等。應控制哪一項最直接？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s005-v011 人工重算：同一圓中等弦與等劣弧互相對應，直接控制弦長即可。 正確選項為「兩條弦的長度相等」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s005-v012",
      "contentSha256": "b0470828eae3c3a88b300d468615ceafa6f7f3c041e26740d815c140c6e0b122",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「兩弦位於同一圓；角度140°與100°。」重算：同一圓中140°>100°，較大中心角對較長弦，所以弦甲較長。",
      "derivedAnswer": "弦甲",
      "storedAnswer": "弦甲",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「弦甲」符合；三個干擾項分別因「大小方向顛倒。；中心角不等。；同圓條件足以比較。」而排除。",
        "undefinedSymbol": "u19-s005-v012 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弦與弧」講義定義。",
        "unitConflict": "題目所求為「判定較長弦。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「在零件規格中由中心角比較弦長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「兩弦位於同一圓；角度140°與100°。」重讀，所求「判定較長弦。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是在零件規格中由中心角比較弦長。，而非只依題序標示。",
      "literacyContextNecessity": "中心角數值是比較弦長的核心規格。",
      "prerequisiteCheck": "只依賴arc-length，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一圓形零件上，弦甲所對中心角為 140°，弦乙所對中心角為 100°。哪一條弦較長？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s005-v012 人工重算：同一圓中140°>100°，較大中心角對較長弦，所以弦甲較長。 正確選項為「弦甲」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u19-s005-fig001",
      "unitId": "u19",
      "topicId": "u19-angles",
      "skillId": "circle-chord",
      "svgPath": "figures/u19/u19-s005-fig001.svg",
      "canvas": {
        "width": 360,
        "height": 240,
        "viewBox": "0 0 360 240"
      },
      "drawingSpec": {
        "purpose": "支援「弦與弧」中需要辨認點、線、弧、角或邊界的題目。",
        "coordinateSystem": "SVG x向右、y向下；所有座標以360×240畫布為準。",
        "geometry": "同一圓中畫出等長弦 AB、CD，弦上有相同刻痕，並連接圓心到四端點。",
        "visibleLines": "所有作答所需實線均以2px以上深色描邊；強調弧以5px描邊。",
        "hiddenLines": "只有內部共邊或量測輔助線使用虛線；未指定者不得自行添加。",
        "labels": "標籤位置已在SVG以固定座標給定，避免遮住交點、角弧或刻痕。",
        "symbols": "直角符號、等長刻痕、箭頭及角度符號僅在數學條件需要時出現。",
        "scalePolicy": "示意圖不保證按實際長度或角度比例繪製。",
        "visualInferenceWarning": "不得以目測長短、角度或對稱性取代題目條件與定理。",
        "mobileReadability": "360×240檢視下文字至少16px，關鍵線至少2px，無微小數值標籤。",
        "answerLeakage": "圖中不標示任何題目要求計算的最終數值或正確選項。"
      },
      "altText": "同一圓中畫出等長弦 AB、CD，弦上有相同刻痕，並連接圓心到四端點。 圖形僅協助辨認結構，不可依比例目測答案。",
      "svgTitle": "等弦與圓心角圖",
      "svgDescription": "同一圓中畫出等長弦 AB、CD，弦上有相同刻痕，並連接圓心到四端點。",
      "svgAssertions": [
        "role=\"img\"",
        "<title",
        "<desc",
        "viewBox=\"0 0 360 240\"",
        "M178 68",
        "M166 163",
        ">O</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "manualRenderInspected": true,
        "mobileReadable": true,
        "answerLeakageFound": false,
        "reviewNote": "已逐項檢查 u19-s005-fig001 的點位、線段、弧線、標籤與輔助符號；此圖專門呈現「弦與弧」的結構，未包含可直接推得題庫答案的數值。",
        "reviewVersion": "human-figure-review-r1.0",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8ed5afb71c285864656ef892c4ad216c950b0d61cd367ef9e34aaa4ae50d0fa9"
    }
  ]
};
export default u19_s005;
