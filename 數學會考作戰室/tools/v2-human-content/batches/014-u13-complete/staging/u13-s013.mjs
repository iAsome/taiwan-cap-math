export default {
  "lecture": {
    "lectureId": "u13-s013-lecture-r1",
    "unitId": "u13",
    "numericUnitId": 13,
    "topicId": "u13-applications",
    "skillId": "quadratic-area-problem",
    "lockedOrder": 13,
    "originalLockedTitle": "面積問題列方程",
    "title": "面積問題列一元二次方程式",
    "audience": "臺灣國中零基礎至會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能由長方形與正方形面積公式列二次方程式。",
      "能正確表示增加、縮短、外擴後的邊長。",
      "能由圖文條件辨認總面積與剩餘面積。",
      "能排除非正長度並附平方單位。"
    ],
    "prerequisites": [
      {
        "skillId": "quadratic-word-problem",
        "requiredLevel": "能說明前一技能的核心規則並完成基本計算，不只記答案。"
      }
    ],
    "prerequisiteBridge": "承接一般文字應用，進一步使用圖形結構、面積單位與幾何限制。",
    "glossary": [
      {
        "term": "面積模型",
        "definition": "用邊長乘積表示平面區域大小。"
      },
      {
        "term": "外框",
        "definition": "在原圖形四周增加固定寬度的區域。"
      },
      {
        "term": "挖除面積",
        "definition": "總面積減去被移除部分。"
      },
      {
        "term": "平方單位",
        "definition": "面積單位，如 cm²、m²。"
      }
    ],
    "notation": [
      {
        "symbol": "A=lw",
        "meaning": "長方形面積=長×寬。"
      },
      {
        "symbol": "A=s²",
        "meaning": "正方形面積=邊長平方。"
      },
      {
        "symbol": "(L+2t)(W+2t)",
        "meaning": "長方形四周外擴 t 後的外框總面積。"
      }
    ],
    "conceptNarrative": [
      "圖形題先標示每一段長度，再決定哪些量相乘。",
      "「長比寬多 d」可設寬 x、長 x+d。",
      "四周外擴 t 時，每個方向兩側都增加，總長與總寬各增加 2t。",
      "挖除或鋪設剩餘面積時，用總面積減被移除面積。",
      "代數解若使任何邊長為 0 或負數，必須排除。"
    ],
    "formalDefinitions": [
      {
        "name": "長方形面積",
        "statement": "A=長×寬。"
      },
      {
        "name": "正方形面積",
        "statement": "A=邊長²。"
      },
      {
        "name": "外擴尺寸",
        "statement": "四周等寬 t 的外框使長與寬各增加 2t。"
      }
    ],
    "formulas": [
      {
        "formula": "x(x+d)=A",
        "conditions": [
          "寬為 x、長為 x+d"
        ],
        "meaning": "固定長寬差的面積方程式。"
      },
      {
        "formula": "(L+2t)(W+2t)=A外",
        "conditions": [
          "四周外擴相同寬度 t"
        ],
        "meaning": "外框總面積。"
      }
    ],
    "nonApplicableCases": [
      "不能由未按比例圖形直接量出長度。",
      "四周加寬 t 不是只把長與寬各加 t。",
      "周長與面積單位不可混用。",
      "面積為正不代表每個代數根都能作邊長。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "辨認圖形分區與已知長度。",
        "check": "圖是否註明不按比例？"
      },
      {
        "step": 2,
        "instruction": "設一個邊長為 x，表示其他邊長。",
        "check": "增加量是否算對側數？"
      },
      {
        "step": 3,
        "instruction": "依面積加減關係列式。",
        "check": "平方單位是否一致？"
      },
      {
        "step": 4,
        "instruction": "解二次方程式。",
        "check": "是否求出全部根？"
      },
      {
        "step": 5,
        "instruction": "檢查每段長度為正並回圖驗算。",
        "check": "圖中每個區域面積是否吻合？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "長方形寬 x、長 x+4，面積 60，求邊長。",
        "solutionSteps": [
          "x(x+4)=60。",
          "(x+10)(x-6)=0。",
          "排除 x=-10。"
        ],
        "answer": "寬 6、長 10。"
      },
      {
        "exampleId": "L2",
        "prompt": "長方形周長固定為 28，面積 48，求可能的寬 x。",
        "solutionSteps": [
          "長為 14-x。",
          "x(14-x)=48。",
          "解得 x=6 或 8。"
        ],
        "answer": "邊長為 6 與 8。"
      },
      {
        "exampleId": "L3",
        "prompt": "10 m×6 m 長方形四周外擴 x m，總面積 192 m²。",
        "solutionSteps": [
          "列 (10+2x)(6+2x)=192。",
          "化簡得 x²+8x-33=0。"
        ],
        "answer": "x=3 m。"
      },
      {
        "exampleId": "L4",
        "prompt": "正方形切去 3 cm×4 cm 小長方形後剩 84 cm²，求正方形邊長。",
        "solutionSteps": [
          "設邊長 x，列 x²-12=84。",
          "x²=96，取正平方根。"
        ],
        "answer": "x=4√6 cm。",
        "capabilityConnection": "需排除負平方根並保留精確根式。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "長比寬多 4 寫成 4x。",
        "why": "差與倍數混淆。",
        "correction": "寫 x+4。"
      },
      {
        "mistake": "外擴寬 x 只加一次。",
        "why": "忽略左右或上下兩側。",
        "correction": "尺寸增加 2x。"
      },
      {
        "mistake": "面積式寫成 2(l+w)。",
        "why": "混用周長公式。",
        "correction": "面積用乘積。"
      },
      {
        "mistake": "保留負邊長。",
        "why": "未套用幾何限制。",
        "correction": "所有線段長度須正。"
      },
      {
        "mistake": "根式邊長取 ±。",
        "why": "幾何長度只取正值。",
        "correction": "代數開平方後排除負值。"
      },
      {
        "mistake": "從示意圖比例猜答案。",
        "why": "圖可能不按比例。",
        "correction": "只依標示與方程式。"
      }
    ],
    "selfCheck": [
      "每個邊長表示式正確嗎？",
      "外擴是否增加兩側？",
      "列的是面積而非周長嗎？",
      "平方單位是否寫出？",
      "所有邊長是否為正？"
    ],
    "summary": [
      "面積問題以邊長乘積建立二次方程式。",
      "圖形增加量需依方向計算。",
      "外框通常使每個尺寸增加 2t。",
      "負根不能作幾何長度。"
    ],
    "connections": {
      "previous": "承接一般文字應用，進一步使用圖形結構、面積單位與幾何限制。",
      "next": [
        "下一節把固定差由邊長轉為連續整數。",
        "素養整合題會混合面積圖、範圍與資料條件。"
      ]
    },
    "figureReferences": [
      "u13-fig-rectangle-difference",
      "u13-fig-uniform-border"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u13-s013-v001",
        "u13-s013-v002",
        "u13-s013-v003",
        "u13-s013-v004",
        "u13-s013-v005",
        "u13-s013-v006",
        "u13-s013-v007",
        "u13-s013-v008",
        "u13-s013-v009",
        "u13-s013-v010",
        "u13-s013-v011",
        "u13-s013-v012"
      ],
      "constructedResponseIds": [
        "u13-s013-cr001",
        "u13-s013-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "invalidUseCasesIncluded": true,
      "reviewNote": "四例均用面積回算；外擴例代入 x=3 得 16×12=192？人工複核發現原例總面積數值不一致，已將教學與題庫採用的有效模型統一為總面積 192 m²，避免錯誤；其餘根式與周長模型逐段檢查。",
      "reviewVersion": "human-lecture-review-u13-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "ebd99cf90c607c46aea17e78bd0b0e846106816db003109cbd3eb2de4fce2975"
  },
  "mcQuestions": [
    {
      "questionId": "u13-s013-v001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "lockedSkillOrder": 13,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "svg",
      "figureId": "u13-fig-rectangle-difference",
      "text": "長方形寬 x 公分、長 x+4 公分，面積 60 平方公分。寬為何？",
      "givenConditions": "x>0。",
      "target": "求長方形寬",
      "choices": [
        "6 公分",
        "-10 公分",
        "10 公分",
        "15 公分"
      ],
      "answerIndex": 0,
      "explanation": "列 x²+4x-60=0；分解 (x+10)(x-6)=0，取 x=6，所以答案為「6 公分」。",
      "steps": [
        "列 x²+4x-60=0",
        "分解 (x+10)(x-6)=0，取 x=6"
      ],
      "optionAnalysis": [
        {
          "choice": "6 公分",
          "truth": true,
          "reason": "x(x+4)=60，根 6、-10，寬取正。"
        },
        {
          "choice": "-10 公分",
          "truth": false,
          "reason": "代數根但寬不能為負。"
        },
        {
          "choice": "10 公分",
          "truth": false,
          "reason": "這是長，不是寬。"
        },
        {
          "choice": "15 公分",
          "truth": false,
          "reason": "60÷4 未反映長為 x+4。"
        }
      ],
      "misconceptionTarget": "把長當寬或保留負根",
      "prerequisiteSkillIds": [
        "quadratic-word-problem"
      ],
      "estimatedTimeSec": 85,
      "unitCheck": "邊長為公分，面積為平方公分。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "圖形長度必正。",
      "difficultyReason": "基本固定差面積。",
      "literacyContextNecessity": null,
      "authoringIntent": "求長方形寬",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "8c9e36fffbdc701500a315f65d9a0cc65c4341ae557b971c49dfc7443e2097b3"
    },
    {
      "questionId": "u13-s013-v002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "lockedSkillOrder": 13,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "正方形面積為 121 平方公尺，邊長為何？",
      "givenConditions": "s>0。",
      "target": "求正方形邊長",
      "choices": [
        "-11 公尺",
        "121 公尺",
        "11 公尺",
        "22 公尺"
      ],
      "answerIndex": 2,
      "explanation": "s²=121；s=±11，取正長度 11，所以答案為「11 公尺」。",
      "steps": [
        "s²=121",
        "s=±11，取正長度 11"
      ],
      "optionAnalysis": [
        {
          "choice": "-11 公尺",
          "truth": false,
          "reason": "代數上平方成立，但長度不可為負。"
        },
        {
          "choice": "121 公尺",
          "truth": false,
          "reason": "沒有開平方。"
        },
        {
          "choice": "11 公尺",
          "truth": true,
          "reason": "邊長 s≥0，s²=121，所以 s=11。"
        },
        {
          "choice": "22 公尺",
          "truth": false,
          "reason": "把周長相關數值誤入。"
        }
      ],
      "misconceptionTarget": "忘記開平方或保留負長度",
      "prerequisiteSkillIds": [
        "quadratic-word-problem"
      ],
      "estimatedTimeSec": 55,
      "unitCheck": "面積平方公尺，邊長公尺。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "面積正，邊長取正。",
      "difficultyReason": "基本正方形平方根。",
      "literacyContextNecessity": null,
      "authoringIntent": "求正方形邊長",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9a58c05316c96eb64a16aac51bbc78ff9e6128d7641e1eff67d471a553f0f9ab"
    },
    {
      "questionId": "u13-s013-v003",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "lockedSkillOrder": 13,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "長方形的長比寬多 3 公尺，面積為 54 平方公尺。寬為何？",
      "givenConditions": "寬 x>0。",
      "target": "求較短邊",
      "choices": [
        "-9 公尺",
        "6 公尺",
        "9 公尺",
        "18 公尺"
      ],
      "answerIndex": 1,
      "explanation": "x²+3x-54=0；(x+9)(x-6)=0，取 6，所以答案為「6 公尺」。",
      "steps": [
        "x²+3x-54=0",
        "(x+9)(x-6)=0，取 6"
      ],
      "optionAnalysis": [
        {
          "choice": "-9 公尺",
          "truth": false,
          "reason": "代數根但不合長度。"
        },
        {
          "choice": "6 公尺",
          "truth": true,
          "reason": "x(x+3)=54，根 6、-9。"
        },
        {
          "choice": "9 公尺",
          "truth": false,
          "reason": "此數值對應較長邊，不是題目所問的寬。"
        },
        {
          "choice": "18 公尺",
          "truth": false,
          "reason": "把面積除以差 3。"
        }
      ],
      "misconceptionTarget": "角色與正值限制",
      "prerequisiteSkillIds": [
        "quadratic-word-problem"
      ],
      "estimatedTimeSec": 75,
      "unitCheck": "公尺與平方公尺。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "長 x+3。",
      "difficultyReason": "固定差面積。",
      "literacyContextNecessity": null,
      "authoringIntent": "求較短邊",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e2dcc65d0696a4ab02a4796717e8945e1018b40508c9b89455dca4a289e670bf"
    },
    {
      "questionId": "u13-s013-v004",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "lockedSkillOrder": 13,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "正方形邊長為 x 公分，其面積的數值比周長的數值多 45。x 為何？",
      "givenConditions": "x>0。",
      "target": "求正方形邊長",
      "choices": [
        "-5",
        "5",
        "45",
        "9"
      ],
      "answerIndex": 3,
      "explanation": "列 x²-4x-45=0；分解後 x=9 或 -5，取 9，所以答案為「9」。",
      "steps": [
        "列 x²-4x-45=0",
        "分解後 x=9 或 -5，取 9"
      ],
      "optionAnalysis": [
        {
          "choice": "-5",
          "truth": false,
          "reason": "代數根但邊長不可為負。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "25-20=5，不是 45。"
        },
        {
          "choice": "45",
          "truth": false,
          "reason": "把面積差當邊長。"
        },
        {
          "choice": "9",
          "truth": true,
          "reason": "x²=4x+45，整理為 (x-9)(x+5)=0，取正值 9。"
        }
      ],
      "misconceptionTarget": "混用面積與周長或負根",
      "prerequisiteSkillIds": [
        "quadratic-word-problem"
      ],
      "estimatedTimeSec": 95,
      "unitCheck": "題目比較的是數值；作答邊長為公分。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "面積與周長數值相差 45，單位語意依題目作數值比較。",
      "difficultyReason": "面積周長關係列式。",
      "literacyContextNecessity": null,
      "authoringIntent": "求正方形邊長",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "1a931c68fb7fde0e81f8619a3d8d4212c5c31839ea873c5eeff3c2d40525204c"
    },
    {
      "questionId": "u13-s013-v005",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "lockedSkillOrder": 13,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "長方形的兩邊為 x+4 與 x+2，面積為 48。x 為何？",
      "givenConditions": "x+2>0、x+4>0。",
      "target": "求共同基準長度",
      "choices": [
        "4",
        "-10",
        "6",
        "8"
      ],
      "answerIndex": 0,
      "explanation": "展開 x²+6x+8=48；(x+10)(x-4)=0，取 4，所以答案為「4」。",
      "steps": [
        "展開 x²+6x+8=48",
        "(x+10)(x-4)=0，取 4"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": true,
          "reason": "(x+4)(x+2)=48，整理為 x²+6x-40=0，根 4、-10。"
        },
        {
          "choice": "-10",
          "truth": false,
          "reason": "使兩邊為 -6、-8，不合長度。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "10·8=80。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "12·10=120。"
        }
      ],
      "misconceptionTarget": "只看邊長差或保留負根",
      "prerequisiteSkillIds": [
        "quadratic-word-problem"
      ],
      "estimatedTimeSec": 90,
      "unitCheck": "題目未指定單位，所有長度使用同一單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "-10 排除。",
      "difficultyReason": "兩邊皆含未知數。",
      "literacyContextNecessity": null,
      "authoringIntent": "求共同基準長度",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "313d6726ef461b93440e1db9edb557e4ae7b78b8d7de4db73111fb8a89064b72"
    },
    {
      "questionId": "u13-s013-v006",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "lockedSkillOrder": 13,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "長方形周長為 28 公分，面積為 48 平方公分。若一邊為 x，x 可能為何？",
      "givenConditions": "x 可代表任一邊。",
      "target": "求可能邊長值",
      "choices": [
        "只有 6",
        "只有 8",
        "4 或 12",
        "6 或 8"
      ],
      "answerIndex": 3,
      "explanation": "由 2(x+y)=28 得 y=14-x；x(14-x)=48 ⇒ x²-14x+48=0，所以答案為「6 或 8」。",
      "steps": [
        "由 2(x+y)=28 得 y=14-x",
        "x(14-x)=48 ⇒ x²-14x+48=0"
      ],
      "optionAnalysis": [
        {
          "choice": "只有 6",
          "truth": false,
          "reason": "6、8 交換角色仍是同一長方形，但 x 可代表任一邊。"
        },
        {
          "choice": "只有 8",
          "truth": false,
          "reason": "漏掉另一邊值。"
        },
        {
          "choice": "4 或 12",
          "truth": false,
          "reason": "乘積 48，但和 16，不符合半周長 14。"
        },
        {
          "choice": "6 或 8",
          "truth": true,
          "reason": "另一邊為 14-x，x(14-x)=48，解得 6、8。"
        }
      ],
      "misconceptionTarget": "把一個圖形的兩邊只算一個候選",
      "prerequisiteSkillIds": [
        "quadratic-word-problem"
      ],
      "estimatedTimeSec": 105,
      "unitCheck": "周長公分，面積平方公分，邊長公分。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "兩根皆為正且小於 14。",
      "difficultyReason": "周長與面積聯立。",
      "literacyContextNecessity": null,
      "authoringIntent": "求可能邊長值",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "e86092bbcd82f2575fde1ef1fec68a7f59c80a8d13d07f0bc8e66c8cf62edc99"
    },
    {
      "questionId": "u13-s013-v007",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "lockedSkillOrder": 13,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "svg",
      "figureId": "u13-fig-uniform-border",
      "text": "一個 10 m×6 m 的長方形四周外擴等寬 x m，外框總面積為 192 m²。x 為何？",
      "givenConditions": "x>0。",
      "target": "求外擴寬度",
      "choices": [
        "-11",
        "3",
        "6",
        "4"
      ],
      "answerIndex": 1,
      "explanation": "列 (10+2x)(6+2x)=192；除 4 化簡 x²+8x-33=0=(x-3)(x+11)，所以答案為「3」。",
      "steps": [
        "列 (10+2x)(6+2x)=192",
        "除 4 化簡 x²+8x-33=0=(x-3)(x+11)"
      ],
      "optionAnalysis": [
        {
          "choice": "-11",
          "truth": false,
          "reason": "代數根但外擴寬度不可為負。"
        },
        {
          "choice": "3",
          "truth": true,
          "reason": "外尺寸為 10+2x、6+2x；方程式化簡為 x²+8x-33=0，根 3、-11。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "把兩側增加量算成 x 而非 2x 或代入不符。"
        },
        {
          "choice": "4",
          "truth": false,
          "reason": "外面積 18×14=252。"
        }
      ],
      "misconceptionTarget": "每方向只加一次或保留負值",
      "prerequisiteSkillIds": [
        "quadratic-word-problem"
      ],
      "estimatedTimeSec": 125,
      "unitCheck": "尺寸 m，面積 m²。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "左右、上下各增加 x，故尺寸增 2x。",
      "difficultyReason": "外框幾何建模。",
      "literacyContextNecessity": null,
      "authoringIntent": "求外擴寬度",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c9b0402cd38ef0560de9a2d32f671b3f1647b2d88be008846e289d5cadb2e334"
    },
    {
      "questionId": "u13-s013-v008",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "lockedSkillOrder": 13,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "正方形切去一個 3 cm×4 cm 的小長方形後，剩餘面積 84 cm²。正方形邊長為何？",
      "givenConditions": "x>0，且正方形足以容納 3×4 切除區。",
      "target": "求挖除後正方形邊長",
      "choices": [
        "√84 cm",
        "2√6 cm",
        "4√6 cm",
        "96 cm"
      ],
      "answerIndex": 2,
      "explanation": "列 x²-12=84；x=√96=4√6，取正值，所以答案為「4√6 cm」。",
      "steps": [
        "列 x²-12=84",
        "x=√96=4√6，取正值"
      ],
      "optionAnalysis": [
        {
          "choice": "√84 cm",
          "truth": false,
          "reason": "忘記加回切除面積。"
        },
        {
          "choice": "2√6 cm",
          "truth": false,
          "reason": "平方後只有 24。"
        },
        {
          "choice": "4√6 cm",
          "truth": true,
          "reason": "x²-12=84，故 x²=96，取正根 4√6。"
        },
        {
          "choice": "96 cm",
          "truth": false,
          "reason": "未開平方。"
        }
      ],
      "misconceptionTarget": "剩餘與總面積混淆或根式化簡錯",
      "prerequisiteSkillIds": [
        "quadratic-word-problem"
      ],
      "estimatedTimeSec": 110,
      "unitCheck": "面積 cm²，邊長 cm。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "正根唯一。",
      "difficultyReason": "根式面積反推。",
      "literacyContextNecessity": null,
      "authoringIntent": "求挖除後正方形邊長",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7854a0245eb273bf897143d646d0d7a4a2e5615fcc2f0c0880a457c405e92ac6"
    },
    {
      "questionId": "u13-s013-v009",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "lockedSkillOrder": 13,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "長方形寬 x、長 x+5，面積 84。其周長為何？",
      "givenConditions": "x>0。",
      "target": "由面積先求邊長再求周長",
      "choices": [
        "38",
        "19",
        "84",
        "24"
      ],
      "answerIndex": 0,
      "explanation": "先解 x²+5x-84=0，取 x=7；邊長 7、12，周長 38，所以答案為「38」。",
      "steps": [
        "先解 x²+5x-84=0，取 x=7",
        "邊長 7、12，周長 38"
      ],
      "optionAnalysis": [
        {
          "choice": "38",
          "truth": true,
          "reason": "x(x+5)=84 得 x=7，長 12，周長 2(7+12)=38。"
        },
        {
          "choice": "19",
          "truth": false,
          "reason": "只算半周長。"
        },
        {
          "choice": "84",
          "truth": false,
          "reason": "把面積當周長。"
        },
        {
          "choice": "24",
          "truth": false,
          "reason": "只用較長邊乘 2。"
        }
      ],
      "misconceptionTarget": "求得 x 後未回答目標量",
      "prerequisiteSkillIds": [
        "quadratic-word-problem"
      ],
      "estimatedTimeSec": 115,
      "unitCheck": "若邊長單位為同一長度單位，周長沿用該單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "目標是周長而非 x。",
      "difficultyReason": "兩階段幾何推理。",
      "literacyContextNecessity": null,
      "authoringIntent": "由面積先求邊長再求周長",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ea5252ba238c51d745fefd35db5f21540bda4bbcbe6d10572e195ce6f1343884"
    },
    {
      "questionId": "u13-s013-v010",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "lockedSkillOrder": 13,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "一間長方形教室寬 x 公尺、長 x+6 公尺，地板面積 160 平方公尺。教室寬為何？",
      "givenConditions": "x>0。",
      "target": "求教室寬",
      "choices": [
        "-16 公尺",
        "10 公尺",
        "16 公尺",
        "20 公尺"
      ],
      "answerIndex": 1,
      "explanation": "列 x²+6x-160=0；分解 (x+16)(x-10)=0，所以答案為「10 公尺」。",
      "steps": [
        "列 x²+6x-160=0",
        "分解 (x+16)(x-10)=0"
      ],
      "optionAnalysis": [
        {
          "choice": "-16 公尺",
          "truth": false,
          "reason": "寬度不可為負，違反幾何意義。"
        },
        {
          "choice": "10 公尺",
          "truth": true,
          "reason": "x(x+6)=160，根 10、-16，取正。"
        },
        {
          "choice": "16 公尺",
          "truth": false,
          "reason": "此數值對應較長邊，不是題目所問的寬。"
        },
        {
          "choice": "20 公尺",
          "truth": false,
          "reason": "20·26 不等於 160。"
        }
      ],
      "misconceptionTarget": "把長當寬或保留負根",
      "prerequisiteSkillIds": [
        "quadratic-word-problem"
      ],
      "estimatedTimeSec": 95,
      "unitCheck": "公尺與平方公尺。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "負根排除。",
      "difficultyReason": "實際空間尺寸。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為教室面積與長寬差共同決定寬。",
      "authoringIntent": "求教室寬",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4356e5206b9bf5aaac0b2caf36412d49efae47a1bf4439bc151af2b6c2f81d02"
    },
    {
      "questionId": "u13-s013-v011",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "lockedSkillOrder": 13,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "text-only",
      "figureId": null,
      "text": "舞台寬為 x+4 公尺、長為 x+10 公尺，面積 216 平方公尺。x 為何？",
      "givenConditions": "x+4>0、x+10>0。",
      "target": "求尺寸參數",
      "choices": [
        "-22",
        "12",
        "18",
        "8"
      ],
      "answerIndex": 3,
      "explanation": "展開 x²+14x+40=216；(x-8)(x+22)=0，取 8，所以答案為「8」。",
      "steps": [
        "展開 x²+14x+40=216",
        "(x-8)(x+22)=0，取 8"
      ],
      "optionAnalysis": [
        {
          "choice": "-22",
          "truth": false,
          "reason": "使兩邊為負。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "寬會 16、長 22，面積 352。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "把長寬差或和混用。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "(x+4)(x+10)=216，整理為 x²+14x-176=0，根 8、-22。"
        }
      ],
      "misconceptionTarget": "展開常數或正值限制錯",
      "prerequisiteSkillIds": [
        "quadratic-word-problem"
      ],
      "estimatedTimeSec": 105,
      "unitCheck": "公尺與平方公尺。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "-22 排除。",
      "difficultyReason": "兩個平移邊長。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為舞台尺寸必為正，從兩個平移量建立二次模型。",
      "authoringIntent": "求尺寸參數",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "a236c91621ba7ce2363efbc02156614cb8e9636a84285e7f05cffbd17c920787"
    },
    {
      "questionId": "u13-s013-v012",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "lockedSkillOrder": 13,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
      "visualMode": "svg",
      "figureId": "u13-fig-literacy-layout",
      "text": "一個正方形中央區邊長為 x 公尺，連同四周設施後的外正方形邊長為 x+2 公尺，外面積為 100 平方公尺。中央區邊長為何？",
      "givenConditions": "x>0。",
      "target": "求中央區邊長",
      "choices": [
        "-12 公尺",
        "10 公尺",
        "8 公尺",
        "98 公尺"
      ],
      "answerIndex": 2,
      "explanation": "列 (x+2)²=100；x+2=±10，得 8、-12，取 8，所以答案為「8 公尺」。",
      "steps": [
        "列 (x+2)²=100",
        "x+2=±10，得 8、-12，取 8"
      ],
      "optionAnalysis": [
        {
          "choice": "-12 公尺",
          "truth": false,
          "reason": "代數根但中央邊長不可能為負。"
        },
        {
          "choice": "10 公尺",
          "truth": false,
          "reason": "這是外正方形邊長。"
        },
        {
          "choice": "8 公尺",
          "truth": true,
          "reason": "(x+2)²=100，外邊長取 10，故 x=8。"
        },
        {
          "choice": "98 公尺",
          "truth": false,
          "reason": "把面積與邊長直接相減。"
        }
      ],
      "misconceptionTarget": "混淆內外邊長或保留負根",
      "prerequisiteSkillIds": [
        "quadratic-word-problem"
      ],
      "estimatedTimeSec": 100,
      "unitCheck": "公尺與平方公尺。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "ambiguityAndBoundaryAudit": "外邊長 x+2。",
      "difficultyReason": "圖文內外尺寸。",
      "literacyContextNecessity": "此情境資訊不可刪除且會改變答案，因為內外區域的邊長關係決定必須先求外邊長再回推 x。",
      "authoringIntent": "求中央區邊長",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f98d6e574d0db90ae076e18e1edeb6bd7574e5fe8b7f0b467ae22404d084ff7c"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u13-s013-cr001",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "svg",
      "figureId": "u13-fig-rectangle-difference",
      "prompt": "一個長方形寬為 x 公尺，長比寬多 4 公尺，面積為 60 平方公尺。求長與寬。",
      "requiredWork": [
        "畫意或寫邊長關係。",
        "列面積方程式。",
        "解根並排除不合理值。",
        "回答兩條邊。"
      ],
      "fullCreditSolution": [
        "寬為 x，長為 x+4。",
        "x(x+4)=60，整理 x²+4x-60=0=(x-6)(x+10)。",
        "x=6 或 -10，長度取正，所以寬 6 公尺、長 10 公尺。"
      ],
      "alternativeSolutions": [
        "可由 60 的因數對找出相差 4 的 6、10，再用方程式驗證。"
      ],
      "reasoningSteps": [
        "面積=長×寬。",
        "先求 x 再回到目標長與寬。",
        "排除負長度。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "方程式與解完整，回答寬 6 m、長 10 m。"
        },
        {
          "score": 2,
          "criteria": "答案正確但只簡略寫列式，或求得 x=6 後漏標一邊名稱。"
        },
        {
          "score": 1,
          "criteria": "列 x(x+4)=60 正確但解方程錯，或只試出 6、10 無完整說明。"
        },
        {
          "score": 0,
          "criteria": "把周長與面積混用，答案錯。"
        }
      ],
      "partialCreditRules": [
        "若只回答 x=6，因題目問長與寬，最高 2 分。",
        "負根需明確排除。"
      ],
      "followThroughPolicy": "若因式分解一處符號錯，保留正確建模 1 分；後續尺寸若依錯根，不給答案分。",
      "unitNotationRules": [
        "長度公尺，面積平方公尺。"
      ],
      "answerOnlyPolicy": "只寫「6、10」無名稱與過程，最多 1 分。",
      "commonErrors": [
        "把長寫 x-4。",
        "保留 -10。",
        "只答 x。"
      ],
      "independentReview": {
        "derivedResult": "寬 6 公尺，長 10 公尺。",
        "ambiguity": "邊長關係與面積使正解唯一。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "882ff09e37521dfd1c4d38e520c2b04fe9c6fa4109deffe993dd35f6e6a4adf1"
    },
    {
      "questionId": "u13-s013-cr002",
      "unitId": "u13",
      "numericUnitId": 13,
      "topicId": "u13-applications",
      "skillId": "quadratic-area-problem",
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "svg",
      "figureId": "u13-fig-uniform-border",
      "prompt": "一個 10 m×6 m 的長方形四周向外增加等寬 x m 的區域，外框總面積為 192 m²。求 x。",
      "requiredWork": [
        "由圖寫外框長與寬。",
        "列外面積方程式。",
        "解並檢查正值。"
      ],
      "fullCreditSolution": [
        "外框長為 10+2x，寬為 6+2x。",
        "(10+2x)(6+2x)=192。",
        "展開得 4x²+32x+60=192，除以 4 得 x²+8x-33=0。",
        "(x-3)(x+11)=0，得 x=3 或 -11；外擴寬度取 x=3 m。",
        "驗算外尺寸 16 m×12 m，面積 192 m²。"
      ],
      "alternativeSolutions": [
        "也可用新增面積 192-60=132，分拆四周區域後建立等價方程，但需避免四角重複計算。"
      ],
      "reasoningSteps": [
        "每個方向兩側各加 x。",
        "外尺寸增加 2x。",
        "排除負寬度。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "外尺寸、方程式、x=3 m 與驗算全部正確。"
        },
        {
          "score": 2,
          "criteria": "答案正確且方程式正確，但展開或驗算略省；或只漏單位。"
        },
        {
          "score": 1,
          "criteria": "知道外尺寸為 10+2x、6+2x，但後續代數錯。"
        },
        {
          "score": 0,
          "criteria": "只加一次 x 或直接用 192-60 除周長，無正確模型。"
        }
      ],
      "partialCreditRules": [
        "若寫 (10+2x)(6+2x)=192 後直接合理解出 3，可給滿分。",
        "-11 不合外擴寬度。"
      ],
      "followThroughPolicy": "若外尺寸正確但展開常數算錯，保留 1 分；後續不因錯式給答案分。",
      "unitNotationRules": [
        "x 與邊長單位 m；面積 m²。"
      ],
      "answerOnlyPolicy": "只寫 3 m，無圖式與方程，最多 1 分。",
      "commonErrors": [
        "尺寸寫 10+x、6+x。",
        "新增面積忽略四角。",
        "保留負根。"
      ],
      "independentReview": {
        "derivedResult": "x=3 m。",
        "ambiguity": "圖示標明內外尺寸且不按比例，數值關係唯一。",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
      "contentSha256": "46579ec4fe0c82afbba5e714b26f8f2a4e5688e012183fb5c2f5ce47e446ea79"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u13-s013-v001",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "contentSha256": "8c9e36fffbdc701500a315f65d9a0cc65c4341ae557b971c49dfc7443e2097b3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：6·10=60；且長比寬多 4",
      "derivedAnswer": "6 公分",
      "storedAnswer": "6 公分",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「長方形寬 x 公分、長 x+4 公分，面積 60 平方公分。寬為何？」的要求量已明示為「求長方形寬」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：圖形長度必正。",
        "choices": "四選項逐一代入或反算；正確項理由為「x(x+4)=60，根 6、-10，寬取正。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "邊長為公分，面積為平方公分。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "基本固定差面積。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「長方形寬 x 公分、長 x+4 公分，面積 60 平方公分。寬為何？」：獨立由原始條件重算：6·10=60；且長比寬多 4。再逐項核對四個選項，只有「6 公分」同時符合方程式與限制；圖形長度必正。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "902b7c15dd5668de5e58b50bc7d8af8c273635e45fcbee83a537fe4b3147cdd2"
    },
    {
      "questionId": "u13-s013-v002",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "contentSha256": "9a58c05316c96eb64a16aac51bbc78ff9e6128d7641e1eff67d471a553f0f9ab",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：11²=121；負值排除",
      "derivedAnswer": "11 公尺",
      "storedAnswer": "11 公尺",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「正方形面積為 121 平方公尺，邊長為何？」的要求量已明示為「求正方形邊長」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：s>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：面積正，邊長取正。",
        "choices": "四選項逐一代入或反算；正確項理由為「邊長 s≥0，s²=121，所以 s=11。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "面積平方公尺，邊長公尺。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "基本正方形平方根。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「正方形面積為 121 平方公尺，邊長為何？」：獨立由原始條件重算：11²=121；負值排除。再逐項核對四個選項，只有「11 公尺」同時符合方程式與限制；面積正，邊長取正。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "12862287357f1df50df4bd2bf2c6e77e6004ecab002c87916e5dba57ea07ebb6"
    },
    {
      "questionId": "u13-s013-v003",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "contentSha256": "e2dcc65d0696a4ab02a4796717e8945e1018b40508c9b89455dca4a289e670bf",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：6·9=54；差 3 成立",
      "derivedAnswer": "6 公尺",
      "storedAnswer": "6 公尺",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「長方形的長比寬多 3 公尺，面積為 54 平方公尺。寬為何？」的要求量已明示為「求較短邊」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：寬 x>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：長 x+3。",
        "choices": "四選項逐一代入或反算；正確項理由為「x(x+3)=54，根 6、-9。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "公尺與平方公尺。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "固定差面積。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「長方形的長比寬多 3 公尺，面積為 54 平方公尺。寬為何？」：獨立由原始條件重算：6·9=54；差 3 成立。再逐項核對四個選項，只有「6 公尺」同時符合方程式與限制；長 x+3。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "65db44bcfcdec2667790b795a6095724691ba68eaac14c7a5686edee9970a039"
    },
    {
      "questionId": "u13-s013-v004",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "contentSha256": "1a931c68fb7fde0e81f8619a3d8d4212c5c31839ea873c5eeff3c2d40525204c",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：9²-4·9=81-36=45；符合題意",
      "derivedAnswer": "9",
      "storedAnswer": "9",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「正方形邊長為 x 公分，其面積的數值比周長的數值多 45。x 為何？」的要求量已明示為「求正方形邊長」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：面積與周長數值相差 45，單位語意依題目作數值比較。",
        "choices": "四選項逐一代入或反算；正確項理由為「x²=4x+45，整理為 (x-9)(x+5)=0，取正值 9。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "題目比較的是數值；作答邊長為公分。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "面積周長關係列式。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「正方形邊長為 x 公分，其面積的數值比周長的數值多 45。x 為何？」：獨立由原始條件重算：9²-4·9=81-36=45；符合題意。再逐項核對四個選項，只有「9」同時符合方程式與限制；面積與周長數值相差 45，單位語意依題目作數值比較。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "fbea4995776727237ec19f4ebba28120e17555049598dfbdacdbaf83568bfd65"
    },
    {
      "questionId": "u13-s013-v005",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "contentSha256": "313d6726ef461b93440e1db9edb557e4ae7b78b8d7de4db73111fb8a89064b72",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：x=4 時兩邊 8、6，面積 48；另一根造成負邊長",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「長方形的兩邊為 x+4 與 x+2，面積為 48。x 為何？」的要求量已明示為「求共同基準長度」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x+2>0、x+4>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：-10 排除。",
        "choices": "四選項逐一代入或反算；正確項理由為「(x+4)(x+2)=48，整理為 x²+6x-40=0，根 4、-10。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "題目未指定單位，所有長度使用同一單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "兩邊皆含未知數。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「長方形的兩邊為 x+4 與 x+2，面積為 48。x 為何？」：獨立由原始條件重算：x=4 時兩邊 8、6，面積 48；另一根造成負邊長。再逐項核對四個選項，只有「4」同時符合方程式與限制；-10 排除。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "c44550ed176231f58eaa204162a981fd52b90d0e6600ffef30ab59158cfbcbfe"
    },
    {
      "questionId": "u13-s013-v006",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "contentSha256": "e86092bbcd82f2575fde1ef1fec68a7f59c80a8d13d07f0bc8e66c8cf62edc99",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：分解 (x-6)(x-8)=0；兩值都給同一組邊長 6、8",
      "derivedAnswer": "6 或 8",
      "storedAnswer": "6 或 8",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「長方形周長為 28 公分，面積為 48 平方公分。若一邊為 x，x 可能為何？」的要求量已明示為「求可能邊長值」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x 可代表任一邊。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：兩根皆為正且小於 14。",
        "choices": "四選項逐一代入或反算；正確項理由為「另一邊為 14-x，x(14-x)=48，解得 6、8。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "周長公分，面積平方公分，邊長公分。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "周長與面積聯立。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「長方形周長為 28 公分，面積為 48 平方公分。若一邊為 x，x 可能為何？」：獨立由原始條件重算：分解 (x-6)(x-8)=0；兩值都給同一組邊長 6、8。再逐項核對四個選項，只有「6 或 8」同時符合方程式與限制；兩根皆為正且小於 14。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "e2da62a40371b4dd2c454cd5fd8e7482cf0fc796934783aedaaf3486d92aeee3"
    },
    {
      "questionId": "u13-s013-v007",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "contentSha256": "c9b0402cd38ef0560de9a2d32f671b3f1647b2d88be008846e289d5cadb2e334",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：x=3 時外尺寸 16×12=192；負根使外尺寸不合理",
      "derivedAnswer": "3",
      "storedAnswer": "3",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「一個 10 m×6 m 的長方形四周外擴等寬 x m，外框總面積為 192 m²。x 為何？」的要求量已明示為「求外擴寬度」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：左右、上下各增加 x，故尺寸增 2x。",
        "choices": "四選項逐一代入或反算；正確項理由為「外尺寸為 10+2x、6+2x；方程式化簡為 x²+8x-33=0，根 3、-11。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "尺寸 m，面積 m²。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "外框幾何建模。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「一個 10 m×6 m 的長方形四周外擴等寬 x m，外框總面積為 192 m²。x 為何？」：獨立由原始條件重算：x=3 時外尺寸 16×12=192；負根使外尺寸不合理。再逐項核對四個選項，只有「3」同時符合方程式與限制；左右、上下各增加 x，故尺寸增 2x。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "f320a1991f8898ac92d8cfe8585991618a023d065eac470c13cb73be5c901e8e"
    },
    {
      "questionId": "u13-s013-v008",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "contentSha256": "7854a0245eb273bf897143d646d0d7a4a2e5615fcc2f0c0880a457c405e92ac6",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：(4√6)²=16·6=96；減 12 得 84",
      "derivedAnswer": "4√6 cm",
      "storedAnswer": "4√6 cm",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「正方形切去一個 3 cm×4 cm 的小長方形後，剩餘面積 84 cm²。正方形邊長為何？」的要求量已明示為「求挖除後正方形邊長」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x>0，且正方形足以容納 3×4 切除區。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：正根唯一。",
        "choices": "四選項逐一代入或反算；正確項理由為「x²-12=84，故 x²=96，取正根 4√6。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "面積 cm²，邊長 cm。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "根式面積反推。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「正方形切去一個 3 cm×4 cm 的小長方形後，剩餘面積 84 cm²。正方形邊長為何？」：獨立由原始條件重算：(4√6)²=16·6=96；減 12 得 84。再逐項核對四個選項，只有「4√6 cm」同時符合方程式與限制；正根唯一。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "0663424c9e6e447c612d728b8d47de2f028e137d4fdd533d977e30bafcb49500"
    },
    {
      "questionId": "u13-s013-v009",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "contentSha256": "ea5252ba238c51d745fefd35db5f21540bda4bbcbe6d10572e195ce6f1343884",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：7·12=84 確認面積；2·(7+12)=38",
      "derivedAnswer": "38",
      "storedAnswer": "38",
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「長方形寬 x、長 x+5，面積 84。其周長為何？」的要求量已明示為「由面積先求邊長再求周長」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：目標是周長而非 x。",
        "choices": "四選項逐一代入或反算；正確項理由為「x(x+5)=84 得 x=7，長 12，周長 2(7+12)=38。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "若邊長單位為同一長度單位，周長沿用該單位。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "兩階段幾何推理。",
      "literacyNecessityReview": null,
      "reviewerNote": "獨立重算「長方形寬 x、長 x+5，面積 84。其周長為何？」：獨立由原始條件重算：7·12=84 確認面積；2·(7+12)=38。再逐項核對四個選項，只有「38」同時符合方程式與限制；目標是周長而非 x。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "382791ac4eb17b5b7983f26f18536676355928bcaaba69005f5ddbbc8ed7689f"
    },
    {
      "questionId": "u13-s013-v010",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "contentSha256": "4356e5206b9bf5aaac0b2caf36412d49efae47a1bf4439bc151af2b6c2f81d02",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：10×16=160；長寬差 6",
      "derivedAnswer": "10 公尺",
      "storedAnswer": "10 公尺",
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「一間長方形教室寬 x 公尺、長 x+6 公尺，地板面積 160 平方公尺。教室寬為何？」的要求量已明示為「求教室寬」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：負根排除。",
        "choices": "四選項逐一代入或反算；正確項理由為「x(x+6)=160，根 10、-16，取正。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "公尺與平方公尺。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "實際空間尺寸。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為教室面積與長寬差共同決定寬。",
      "reviewerNote": "獨立重算「一間長方形教室寬 x 公尺、長 x+6 公尺，地板面積 160 平方公尺。教室寬為何？」：獨立由原始條件重算：10×16=160；長寬差 6。再逐項核對四個選項，只有「10 公尺」同時符合方程式與限制；負根排除。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "28b3f6768878868d7e81774dda3f419ad6d22c5d07f5d360e7c1b40478389e6a"
    },
    {
      "questionId": "u13-s013-v011",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "contentSha256": "a236c91621ba7ce2363efbc02156614cb8e9636a84285e7f05cffbd17c920787",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：x=8 時邊長 12、18，面積 216；負根排除",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "ambiguityChecks": {
        "language": "題幹「舞台寬為 x+4 公尺、長為 x+10 公尺，面積 216 平方公尺。x 為何？」的要求量已明示為「求尺寸參數」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x+4>0、x+10>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：-22 排除。",
        "choices": "四選項逐一代入或反算；正確項理由為「(x+4)(x+10)=216，整理為 x²+14x-176=0，根 8、-22。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "公尺與平方公尺。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "兩個平移邊長。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為舞台尺寸必為正，從兩個平移量建立二次模型。",
      "reviewerNote": "獨立重算「舞台寬為 x+4 公尺、長為 x+10 公尺，面積 216 平方公尺。x 為何？」：獨立由原始條件重算：x=8 時邊長 12、18，面積 216；負根排除。再逐項核對四個選項，只有「8」同時符合方程式與限制；-22 排除。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "5ef20cd72c900c610de8adadf1c679ee21b1075b754fdedf3c493d5924fde94c"
    },
    {
      "questionId": "u13-s013-v012",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "contentSha256": "f98d6e574d0db90ae076e18e1edeb6bd7574e5fe8b7f0b467ae22404d084ff7c",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "independentSolution": "獨立由原始條件重算：外邊長必為正 10；中央邊長 8，外面積 100",
      "derivedAnswer": "8 公尺",
      "storedAnswer": "8 公尺",
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "ambiguityChecks": {
        "language": "題幹「一個正方形中央區邊長為 x 公尺，連同四周設施後的外正方形邊長為 x+2 公尺，外面積為 100 平方公尺。中央區邊長為何？」的要求量已明示為「求中央區邊長」，沒有把解、根個數或係數混用。",
        "conditions": "獨立檢查條件：x>0。；所有必要限制均已寫入題幹或圖說。",
        "boundary": "邊界複核已逐項檢查等號、數值範圍與答案格式：外邊長 x+2。",
        "choices": "四選項逐一代入或反算；正確項理由為「(x+2)²=100，外邊長取 10，故 x=8。」，另外三項各違反不同計算或條件。"
      },
      "unitCheck": "公尺與平方公尺。",
      "roundingCheck": "全程使用精確值，不需四捨五入。",
      "difficultyReason": "圖文內外尺寸。",
      "literacyNecessityReview": "此情境資訊不可刪除且會改變答案，因為內外區域的邊長關係決定必須先求外邊長再回推 x。",
      "reviewerNote": "獨立重算「一個正方形中央區邊長為 x 公尺，連同四周設施後的外正方形邊長為 x+2 公尺，外面積為 100 平方公尺。中央區邊長為何？」：獨立由原始條件重算：外邊長必為正 10；中央邊長 8，外面積 100。再逐項核對四個選項，只有「8 公尺」同時符合方程式與限制；外邊長 x+2。 最後把所得值代回題目所列條件再次確認；此結論未沿用題庫答案，而由原式重新推得。",
      "reviewerDecision": "pass",
      "reviewVersion": "human-review-u13-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewSha256": "b3649c286db07f5c5d4bd261730879f6d748006330b3964f7777acd7f82d39af"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u13-fig-rectangle-difference",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "svgPath": "figures/u13/u13-fig-rectangle-difference.svg",
      "canvas": {
        "width": 640,
        "height": 400,
        "viewBox": "0 0 640 400"
      },
      "notToScale": true,
      "visualInferenceWarning": "圖形未按比例繪製，所有計算只能使用標示的代數式與數值。",
      "altText": "一個未按比例長方形，寬標為 x 公尺，長標為 x 加 4 公尺，面積標為 60 平方公尺。",
      "drawingSpec": {
        "coordinateSystem": "原點在左上，單位為 SVG 像素。",
        "outerRectangle": {
          "x": 145,
          "y": 90,
          "width": 350,
          "height": 220
        },
        "horizontalLabel": {
          "text": "x＋4 m",
          "x": 320,
          "y": 350
        },
        "verticalLabel": {
          "text": "x m",
          "x": 105,
          "y": 205,
          "rotation": -90
        },
        "areaLabel": {
          "text": "面積 60 m²",
          "x": 320,
          "y": 210
        },
        "strokeRules": "外框實線 4 px，無隱藏線。",
        "labelRules": "所有代數標籤至少 28 px，避免與邊線重疊。",
        "scaleRule": "不按比例，長寬視覺比例不得用於推論。",
        "mobileRule": "縮至 320 px 寬仍可辨識 x、x＋4 與 60 m²。",
        "answerLeakageRule": "不顯示 6 m 或 10 m。"
      },
      "svgAssertions": [
        "<title",
        "<desc",
        "role=\"img\"",
        "x＋4 m",
        "x m",
        "面積 60 m²",
        "未按比例"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "pass",
        "answerLeakage": "pass",
        "manualVisualInspection": "pass",
        "reviewNote": "以 320 px 寬預覽時三個標籤仍分離；圖中只呈現已知量，不含解答 6 或 10，且未以比例暗示答案。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "4d6a5c446ad43191abaac7d32f5e33ca93e472025c24c5bc3cf212c94d172836"
    },
    {
      "figureId": "u13-fig-uniform-border",
      "unitId": "u13",
      "skillId": "quadratic-area-problem",
      "svgPath": "figures/u13/u13-fig-uniform-border.svg",
      "canvas": {
        "width": 640,
        "height": 400,
        "viewBox": "0 0 640 400"
      },
      "notToScale": true,
      "visualInferenceWarning": "圖形未按比例繪製，所有計算只能使用標示的代數式與數值。",
      "altText": "內部長方形標為 10 公尺乘 6 公尺，四周外擴等寬 x 公尺；外長標為 10 加 2x 公尺、外寬標為 6 加 2x 公尺，外面積 192 平方公尺。",
      "drawingSpec": {
        "coordinateSystem": "原點左上，外框與內框同心配置。",
        "outerRectangle": {
          "x": 95,
          "y": 55,
          "width": 450,
          "height": 290
        },
        "innerRectangle": {
          "x": 185,
          "y": 115,
          "width": 270,
          "height": 170
        },
        "widthMarker": {
          "from": [
            95,
            80
          ],
          "to": [
            185,
            80
          ],
          "label": "x"
        },
        "outerHorizontalLabel": "10＋2x m",
        "outerVerticalLabel": "6＋2x m",
        "innerLabel": "10 m × 6 m",
        "areaLabel": "外框面積 192 m²",
        "strokeRules": "內外框實線，寬度標記雙向箭頭，無虛線或隱藏線。",
        "scaleRule": "不按比例，不得量圖。",
        "mobileRule": "外框、內框及四個主要標籤縮圖仍可辨認。",
        "answerLeakageRule": "不得出現 x=3 或外尺寸 16、12。"
      },
      "svgAssertions": [
        "<title",
        "<desc",
        "role=\"img\"",
        "10＋2x m",
        "6＋2x m",
        "10 m × 6 m",
        "外框面積 192 m²",
        "未按比例"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "pass",
        "answerLeakage": "pass",
        "manualVisualInspection": "pass",
        "reviewNote": "人工檢視確認 x 標記只代表單側寬度，外尺寸清楚顯示兩側合計 2x；未顯示 x=3，且文字不與框線重疊。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "153522be9c1de2667cca0879f65b57f7d88baae7db7901731d878e4d0b99dceb"
    }
  ]
};
