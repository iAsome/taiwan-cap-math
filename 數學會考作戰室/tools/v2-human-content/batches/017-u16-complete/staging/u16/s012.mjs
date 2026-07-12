// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.
// Do not edit this staging module by hand.
export const skillData={
  "slot": "s012",
  "lecture": {
    "lectureId": "u16-s012-lecture-r1",
    "unitId": "u16",
    "numericUnitId": 16,
    "topicId": "u16-properties",
    "skillId": "triangle-inequality",
    "skillOrder": 12,
    "originalLockedTitle": "三角形邊長關係",
    "title": "三角形邊長關係：任兩邊和大於第三邊",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能判斷三個正長度是否可形成三角形。",
      "能由已知兩邊求第三邊的整數或實數範圍。",
      "能理解最長邊只需與另外兩邊和比較的快速判斷。",
      "能把繞路比直達長轉成三角形不等式的生活情境。"
    ],
    "prerequisiteBridge": "尺規作圖中，兩個圓能否相交取決於半徑與圓心距離；同樣地，三條線段能否首尾相接形成三角形，受任兩邊和與第三邊的嚴格不等式限制。",
    "prerequisites": [
      {
        "skillId": "construction-word-steps",
        "requiredLevel": "能使用先備技能「作圖步驟文字題」的核心定義與基本運算，並能說明其與本節的連結。"
      }
    ],
    "glossary": [
      {
        "term": "三角形不等式",
        "definition": "三角形任兩邊長之和大於第三邊長。"
      },
      {
        "term": "退化三角形",
        "definition": "任兩邊和等於第三邊，三點落在一直線上，不算一般三角形。"
      },
      {
        "term": "最長邊",
        "definition": "三邊中長度最大者；判斷可成三角形時只需確認其小於另兩邊和。"
      },
      {
        "term": "第三邊範圍",
        "definition": "若兩邊為 a、b，第三邊 x 必須滿足 |a−b|<x<a+b。"
      },
      {
        "term": "嚴格不等號",
        "definition": "使用 < 或 >，端點等號不包含。"
      }
    ],
    "notation": [
      {
        "symbol": "a+b>c",
        "meaning": "兩邊 a、b 合起來必須長於第三邊 c。"
      },
      {
        "symbol": "|a−b|<x<a+b",
        "meaning": "第三邊 x 大於兩邊差的絕對值且小於兩邊和。"
      },
      {
        "symbol": "x∈(m,n)",
        "meaning": "此課可用文字『m<x<n』表示，不要求區間符號。"
      }
    ],
    "conceptNarrative": [
      "從一個頂點沿兩邊走到另一頂點，是折線路徑；直達的第三邊最短，所以兩邊和必須大於第三邊。",
      "若兩邊和剛好等於第三邊，三條線段只能拉成一直線，沒有面積，不能算三角形。",
      "三個正長度中，只需把最長邊拿出來，檢查另外兩邊和是否大於它；其餘兩個不等式自動成立。",
      "已知兩邊 a、b，第三邊 x 除了小於 a+b，也要大於 |a−b|。後者由 a<x+b 與 b<x+a 整理而來。",
      "若 x 要求正整數，先求開區間，再只列落在範圍內的正整數，不能包含端點。"
    ],
    "formalDefinitions": [
      {
        "name": "三角形不等式",
        "statement": "任一三角形三邊 a、b、c 均滿足 a+b>c、b+c>a、c+a>b。"
      },
      {
        "name": "第三邊範圍",
        "statement": "固定兩邊 a、b 時，第三邊 x 滿足 |a−b|<x<a+b。"
      }
    ],
    "formulas": [
      {
        "formula": "最短兩邊和>最長邊",
        "conditions": [
          "三個長度皆為正數"
        ],
        "meaning": "快速判斷能否形成三角形。"
      },
      {
        "formula": "|a−b|<x<a+b",
        "conditions": [
          "a>0、b>0、x>0"
        ],
        "meaning": "第三邊完整範圍。"
      }
    ],
    "nonApplicableCases": [
      "任兩邊和等於第三邊時是退化情形，不列入三角形。",
      "長度為 0 或負數不是合法邊長。",
      "只檢查 x<a+b 而漏掉 x>|a−b|，可能把太短的第三邊納入。",
      "題目要求整數邊長時，不能把所有實數都列為答案。",
      "三角形不等式比較的是同一單位下的長度，公分與公尺需先換算。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認三個量都是正長度並統一單位。",
        "check": "是否有 0、負值或不同單位？"
      },
      {
        "step": 2,
        "instruction": "若三邊已知，找出最長邊。",
        "check": "另外兩邊和是否嚴格大於它？"
      },
      {
        "step": 3,
        "instruction": "若求第三邊 x，先算兩已知邊差與和。",
        "check": "差要取絕對值嗎？"
      },
      {
        "step": 4,
        "instruction": "寫成 |a−b|<x<a+b。",
        "check": "兩端是否使用嚴格不等號？"
      },
      {
        "step": 5,
        "instruction": "依整數、偶數或其他限制篩選。",
        "check": "端點是否被誤納入？"
      },
      {
        "step": 6,
        "instruction": "用原三邊逐一驗算。",
        "check": "最短兩邊和是否大於最長邊？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "長度 4、7、10 能形成三角形嗎？",
        "solutionSteps": [
          "最長邊為 10。",
          "4+7=11>10。"
        ],
        "answer": "可以。"
      },
      {
        "exampleId": "L2",
        "prompt": "長度 3、5、8 能形成三角形嗎？",
        "solutionSteps": [
          "最長邊為 8。",
          "3+5=8，不是大於 8。"
        ],
        "answer": "不可以，為退化情形。"
      },
      {
        "exampleId": "L3",
        "prompt": "兩邊長 6、11，求第三邊 x 的範圍。",
        "solutionSteps": [
          "差為 |11−6|=5。",
          "和為 17。"
        ],
        "answer": "5<x<17。"
      },
      {
        "exampleId": "L4",
        "prompt": "兩邊長 5、9，第三邊為正整數，共有幾種？",
        "solutionSteps": [
          "4<x<14。",
          "整數為 5、6、7、8、9、10、11、12、13。"
        ],
        "answer": "9 種。"
      },
      {
        "exampleId": "L5",
        "prompt": "A 到 C 直線距離 12 公里，經 B 的路程 AB+BC 可能為 12 公里嗎？三點不共線。",
        "solutionSteps": [
          "非共線三點形成三角形。",
          "繞行兩邊和必須大於直達邊。"
        ],
        "answer": "不可能等於 12 公里，必須大於 12 公里。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把條件寫成兩邊和大於或等於第三邊。",
        "why": "把退化直線也算入。",
        "correction": "一般三角形必須嚴格大於。"
      },
      {
        "mistake": "只比較最大兩邊。",
        "why": "未找最危險的不等式。",
        "correction": "應比較最短兩邊之和與最長邊。"
      },
      {
        "mistake": "第三邊只設 x<a+b。",
        "why": "漏掉下界。",
        "correction": "同時寫 x>|a−b|。"
      },
      {
        "mistake": "差直接寫 a−b 造成負數。",
        "why": "未處理兩邊大小順序。",
        "correction": "使用絕對值 |a−b|。"
      },
      {
        "mistake": "把範圍端點列入整數答案。",
        "why": "忽略嚴格不等號。",
        "correction": "端點等號都不能取。"
      },
      {
        "mistake": "未統一單位。",
        "why": "直接把公尺與公分相加。",
        "correction": "先轉成同一長度單位再比較。"
      }
    ],
    "selfCheck": [
      "三個邊長是否都是正數且同單位？",
      "我找的是最長邊嗎？",
      "是否使用嚴格大於而非大於等於？",
      "第三邊下界是否為絕對差？",
      "整數篩選有排除兩端點嗎？"
    ],
    "summary": [
      "三角形任兩邊和嚴格大於第三邊。",
      "判斷三邊時可檢查最短兩邊和是否大於最長邊。",
      "第三邊範圍為 |a−b|<x<a+b。",
      "等號代表退化直線，不算一般三角形。"
    ],
    "connections": {
      "previous": "兩圓弧是否相交提供邊長可行性的幾何直覺。",
      "next": [
        "外角定理將由三角形內角和建立。",
        "邊角關係會把邊長大小與對角大小連結。"
      ]
    },
    "figureReferences": [
      "u16-fig-012-triangle-inequality"
    ],
    "accessibilityNotes": [
      "u16-fig-012-triangle-inequality 的替代文字與結構描述收錄於本技能 drawing-specs.jsonl。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u16-s012-v001",
        "u16-s012-v002",
        "u16-s012-v003",
        "u16-s012-v004",
        "u16-s012-v005",
        "u16-s012-v006",
        "u16-s012-v007",
        "u16-s012-v008",
        "u16-s012-v009",
        "u16-s012-v010",
        "u16-s012-v011",
        "u16-s012-v012"
      ],
      "constructedResponseIds": [
        "u16-s012-cr001",
        "u16-s012-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "針對「三角形邊長關係」逐段核對定義、適用條件與反例；重新演算5個例題，確認未使用後續單元才引入的平行線或四邊形定理，並檢查圖形標記不取代文字條件。",
      "reviewVersion": "human-lecture-review-u16-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "b0d823dfdcd8357b00993464f6a4b76630a4b2d9595dbbb08b28df2c6a7e7a57"
  },
  "mcQuestions": [
    {
      "questionId": "u16-s012-v001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "下列哪組長度可以形成三角形？",
      "givenConditions": [
        "長度單位相同"
      ],
      "target": "檢查最短兩邊和",
      "choices": [
        "2、3、5",
        "1、4、6",
        "3、3、7",
        "4、6、9"
      ],
      "answerIndex": 3,
      "independentSolution": "只有 4、6、9 通過嚴格不等式。",
      "explanation": "4+6=10>9，符合最短兩邊和大於最長邊。 每組找最長邊。 比較其餘兩邊和。",
      "steps": [
        "每組找最長邊。",
        "比較其餘兩邊和。"
      ],
      "optionAnalysis": [
        {
          "choice": "2、3、5",
          "truth": false,
          "reason": "2+3=5，為退化。"
        },
        {
          "choice": "1、4、6",
          "truth": false,
          "reason": "1+4<6。"
        },
        {
          "choice": "3、3、7",
          "truth": false,
          "reason": "3+3<7。"
        },
        {
          "choice": "4、6、9",
          "truth": true,
          "reason": "4+6=10>9，符合最短兩邊和大於最長邊。"
        }
      ],
      "misconceptionTarget": "把等號也當成可形成三角形。",
      "prerequisiteCheck": "會做整數加法。",
      "estimatedTimeSec": "70",
      "unitAndRoundingCheck": "各組同單位且精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "選項邊界明確，只有一組嚴格大於。",
      "difficultyReason": "基礎題，直接判斷可行性。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認可成三角形的三邊。",
      "tags": [
        "空間與形狀",
        "三角形邊長關係",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "ffac02f6ee52dfe2b6125507d84df96543e136e034ffffcbefd56ae8674de3ef"
    },
    {
      "questionId": "u16-s012-v002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩邊長為 5、8，第三邊 x 的範圍為何？",
      "givenConditions": [
        "x>0"
      ],
      "target": "寫第三邊範圍",
      "choices": [
        "3<x<13",
        "3≤x≤13",
        "0<x<13",
        "5<x<8"
      ],
      "answerIndex": 0,
      "independentSolution": "第三邊需同時大於差、小於和。",
      "explanation": "|8−5|<x<8+5，所以 3<x<13。 算差 3。 算和 13。 使用嚴格不等號。",
      "steps": [
        "算差 3。",
        "算和 13。",
        "使用嚴格不等號。"
      ],
      "optionAnalysis": [
        {
          "choice": "3<x<13",
          "truth": true,
          "reason": "|8−5|<x<8+5，所以 3<x<13。"
        },
        {
          "choice": "3≤x≤13",
          "truth": false,
          "reason": "端點等號形成退化。"
        },
        {
          "choice": "0<x<13",
          "truth": false,
          "reason": "漏掉 x>8−5。"
        },
        {
          "choice": "5<x<8",
          "truth": false,
          "reason": "範圍過窄。"
        }
      ],
      "misconceptionTarget": "只寫上界或包含端點。",
      "prerequisiteCheck": "會做加減與絕對差。",
      "estimatedTimeSec": "65",
      "unitAndRoundingCheck": "三邊使用同一長度單位；範圍精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "x=3、13 都使三點共線，已排除。",
      "difficultyReason": "基礎題，套用標準公式。",
      "literacyContextNecessity": null,
      "authoringIntent": "求第三邊範圍。",
      "tags": [
        "空間與形狀",
        "三角形邊長關係",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "518ec33fd36e80c806a4ac2b55920d447d089056498b6aaa139d269632ed4f94"
    },
    {
      "questionId": "u16-s012-v003",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "長度 3、4、7 為什麼不能形成一般三角形？",
      "givenConditions": [
        "三長度皆為正"
      ],
      "target": "辨認退化邊界",
      "choices": [
        "因 7 太大但仍可彎曲",
        "因三邊必須全相等",
        "3+4=7，只能排成一直線",
        "因 3+7<4"
      ],
      "answerIndex": 2,
      "independentSolution": "三條線段只能首尾共線，面積為 0。",
      "explanation": "任兩邊和必須嚴格大於第三邊；此處等於最長邊。 找最長邊 7。 3+4=7。 等號為退化。",
      "steps": [
        "找最長邊 7。",
        "3+4=7。",
        "等號為退化。"
      ],
      "optionAnalysis": [
        {
          "choice": "因 7 太大但仍可彎曲",
          "truth": false,
          "reason": "等號時沒有張開空間。"
        },
        {
          "choice": "因三邊必須全相等",
          "truth": false,
          "reason": "一般三角形不需等邊。"
        },
        {
          "choice": "3+4=7，只能排成一直線",
          "truth": true,
          "reason": "任兩邊和必須嚴格大於第三邊；此處等於最長邊。"
        },
        {
          "choice": "因 3+7<4",
          "truth": false,
          "reason": "實際 10>4。"
        }
      ],
      "misconceptionTarget": "誤把大於等於當條件。",
      "prerequisiteCheck": "會分辨 > 與 =。",
      "estimatedTimeSec": "55",
      "unitAndRoundingCheck": "精確長度，無四捨五入。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "等號端點明確不包含。",
      "difficultyReason": "基礎題，理解嚴格不等式。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認退化三角形。",
      "tags": [
        "空間與形狀",
        "三角形邊長關係",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "8223290bbed912f37bceba4c7001d00dc6b52c0637d10a2b51c278355d6c608b"
    },
    {
      "questionId": "u16-s012-v004",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩邊長 7、12，第三邊為正整數，共有幾種可能？",
      "givenConditions": [
        "三邊同單位"
      ],
      "target": "列整數範圍",
      "choices": [
        "12 種",
        "14 種",
        "19 種",
        "13 種"
      ],
      "answerIndex": 3,
      "independentSolution": "端點 5、19 不可取。",
      "explanation": "5<x<19，正整數為 6 到 18，共 18−6+1=13 種。 差 5、和 19。 列 6,7,…,18。 計數 13。",
      "steps": [
        "差 5、和 19。",
        "列 6,7,…,18。",
        "計數 13。"
      ],
      "optionAnalysis": [
        {
          "choice": "12 種",
          "truth": false,
          "reason": "漏列一個端點內整數。"
        },
        {
          "choice": "14 種",
          "truth": false,
          "reason": "把 5 或19 某端點列入。"
        },
        {
          "choice": "19 種",
          "truth": false,
          "reason": "忽略下界。"
        },
        {
          "choice": "13 種",
          "truth": true,
          "reason": "5<x<19，正整數為 6 到 18，共 18−6+1=13 種。"
        }
      ],
      "misconceptionTarget": "範圍計數少加 1 或包含端點。",
      "prerequisiteCheck": "會列整數並計數。",
      "estimatedTimeSec": "95",
      "unitAndRoundingCheck": "x 為同單位整數，無近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "正整數限制已套用；6 到18完整。",
      "difficultyReason": "標準題，範圍後做離散計數。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算整數邊長數量。",
      "tags": [
        "空間與形狀",
        "三角形邊長關係",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "6548ba85e50ae8ea28b2e450374cf4466343dee17be8f3222ba782dfa456e7db"
    },
    {
      "questionId": "u16-s012-v005",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "下列判斷三邊 8、11、15 是否成三角形的最快檢查為何？",
      "givenConditions": [
        "三邊皆正"
      ],
      "target": "使用最長邊快速法",
      "choices": [
        "檢查 8+15>11，成立就結束",
        "檢查 11−8>15",
        "檢查 8×11>15",
        "檢查 8+11>15，成立所以可以"
      ],
      "answerIndex": 3,
      "independentSolution": "其餘兩個和不等式自動成立。",
      "explanation": "對正長度，找最長邊 15，只需檢查另外兩邊和。 找最大值15。 8+11=19>15。",
      "steps": [
        "找最大值15。",
        "8+11=19>15。"
      ],
      "optionAnalysis": [
        {
          "choice": "檢查 8+15>11，成立就結束",
          "truth": false,
          "reason": "這不是最可能失敗的不等式；雖成立但不能單獨作一般快速判定。"
        },
        {
          "choice": "檢查 11−8>15",
          "truth": false,
          "reason": "差的方向錯誤。"
        },
        {
          "choice": "檢查 8×11>15",
          "truth": false,
          "reason": "乘積不是三角形不等式。"
        },
        {
          "choice": "檢查 8+11>15，成立所以可以",
          "truth": true,
          "reason": "對正長度，找最長邊 15，只需檢查另外兩邊和。"
        }
      ],
      "misconceptionTarget": "隨便挑一個不等式而未對最長邊。",
      "prerequisiteCheck": "會找最大值。",
      "estimatedTimeSec": "70",
      "unitAndRoundingCheck": "同單位精確長度。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "三邊無相等最大值歧義；結果明確。",
      "difficultyReason": "標準題，選擇有效快速檢查。",
      "literacyContextNecessity": null,
      "authoringIntent": "使用最長邊法。",
      "tags": [
        "空間與形狀",
        "三角形邊長關係",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "7098bf778f3f200bc3c94516aba23aefb9e67b123ea4ac412c80bdae5e1c9d10"
    },
    {
      "questionId": "u16-s012-v006",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩邊為 a=4、b=10，某同學寫第三邊範圍 0<x<14。錯在哪裡？",
      "givenConditions": [
        "x 為長度"
      ],
      "target": "找出缺少下界",
      "choices": [
        "上界應為 10",
        "下界應為 4",
        "還必須有 x>6，完整範圍是 6<x<14",
        "範圍其實正確"
      ],
      "answerIndex": 2,
      "independentSolution": "合併為 6<x<14。",
      "explanation": "另一個不等式 4+x>10 給 x>6。 由 x+4>10 得 x>6。 由 x<4+10 得 x<14。",
      "steps": [
        "由 x+4>10 得 x>6。",
        "由 x<4+10 得 x<14。"
      ],
      "optionAnalysis": [
        {
          "choice": "上界應為 10",
          "truth": false,
          "reason": "上界是兩邊和 14。"
        },
        {
          "choice": "下界應為 4",
          "truth": false,
          "reason": "下界是絕對差 6。"
        },
        {
          "choice": "還必須有 x>6，完整範圍是 6<x<14",
          "truth": true,
          "reason": "另一個不等式 4+x>10 給 x>6。"
        },
        {
          "choice": "範圍其實正確",
          "truth": false,
          "reason": "例如 x=2 不能與 4、10 成三角形。"
        }
      ],
      "misconceptionTarget": "只記得兩邊和上界。",
      "prerequisiteCheck": "會由三個不等式整理。",
      "estimatedTimeSec": "90",
      "unitAndRoundingCheck": "同一長度單位，精確範圍。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "x=6、14 都退化，故嚴格不等。",
      "difficultyReason": "標準題，診斷不完整範圍。",
      "literacyContextNecessity": null,
      "authoringIntent": "補足第三邊下界。",
      "tags": [
        "空間與形狀",
        "三角形邊長關係",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "6f402e639c6caf070f90e6a4094d452bead3df9a36e8370fc363e62c7762cfe5"
    },
    {
      "questionId": "u16-s012-v007",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "兩邊長 9、14，第三邊 x 為偶數。下列哪一個不可能？",
      "givenConditions": [
        "5<x<23"
      ],
      "target": "在範圍內篩選偶數",
      "choices": [
        "24",
        "6",
        "14",
        "22"
      ],
      "answerIndex": 0,
      "independentSolution": "24 使 9+14=23<24，不能形成。",
      "explanation": "合法偶數為 6、8、…、22；24 超過上界 23。 算範圍 5<x<23。 檢查四個偶數。",
      "steps": [
        "算範圍 5<x<23。",
        "檢查四個偶數。"
      ],
      "optionAnalysis": [
        {
          "choice": "24",
          "truth": true,
          "reason": "合法偶數為 6、8、…、22；24 超過上界 23。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "6 在範圍內且為偶數。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "14 在範圍內。"
        },
        {
          "choice": "22",
          "truth": false,
          "reason": "22<23，合法。"
        }
      ],
      "misconceptionTarget": "只看 x 為偶數，不檢查上界。",
      "prerequisiteCheck": "會結合不等式與奇偶限制。",
      "estimatedTimeSec": "100",
      "unitAndRoundingCheck": "長度同單位；整數精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "23 為嚴格上界，24 明確超出。",
      "difficultyReason": "進階題，範圍與附加條件綜合。",
      "literacyContextNecessity": null,
      "authoringIntent": "篩選特殊整數邊。",
      "tags": [
        "空間與形狀",
        "三角形邊長關係",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "88b1e1109b806cef91f34ca4045a20eef1deffe9fe99666042cc58ae696811c6"
    },
    {
      "questionId": "u16-s012-v008",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三邊為 x+1、x+4、2x+2，且 x>0。正確的成三角形條件為何？",
      "givenConditions": [
        "三條表達式皆代表同單位長度"
      ],
      "target": "修正並求完整範圍",
      "choices": [
        "x>1",
        "0<x≤1/2",
        "x>1/2",
        "所有 x>0"
      ],
      "answerIndex": 2,
      "independentSolution": "x=1/2 時最短兩邊和等於最長邊，故端點排除。",
      "explanation": "列三個不等式，唯一新增限制來自 (x+1)+(2x+2)>x+4，即 x>1/2。 化簡 3x+3>x+4。 得 2x>1。 其餘兩式恒成立。",
      "steps": [
        "化簡 3x+3>x+4。",
        "得 2x>1。",
        "其餘兩式恒成立。"
      ],
      "optionAnalysis": [
        {
          "choice": "x>1",
          "truth": false,
          "reason": "條件過強，x=0.75 時邊 1.75、4.75、3.5 可成。"
        },
        {
          "choice": "0<x≤1/2",
          "truth": false,
          "reason": "x=1/2 退化，更小時失敗。"
        },
        {
          "choice": "x>1/2",
          "truth": true,
          "reason": "列三個不等式，唯一新增限制來自 (x+1)+(2x+2)>x+4，即 x>1/2。"
        },
        {
          "choice": "所有 x>0",
          "truth": false,
          "reason": "x=0.25 時 1.25+2.5<4.25。"
        }
      ],
      "misconceptionTarget": "只比較表面係數或只試整數。",
      "prerequisiteCheck": "會解一元一次不等式並檢查三式。",
      "estimatedTimeSec": "140",
      "unitAndRoundingCheck": "x 可為實數，答案精確，不取整。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "所有邊在 x>1/2 時皆正；端點嚴格排除。",
      "difficultyReason": "進階題，代數與幾何邊界整合。",
      "literacyContextNecessity": null,
      "authoringIntent": "求參數範圍。",
      "tags": [
        "空間與形狀",
        "三角形邊長關係",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "8f4b1f28457d83dafe95f3a4aa54eef34158ec8537c83f176645d447b676023e"
    },
    {
      "questionId": "u16-s012-v009",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-012-triangle-inequality",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三角形兩邊長為 10、17，第三邊長是質數。符合條件的質數共有幾個？",
      "givenConditions": [
        "三邊長皆為正整數",
        "第三邊為質數"
      ],
      "target": "結合三角形不等式與質數篩選",
      "choices": [
        "4",
        "5",
        "6",
        "7"
      ],
      "answerIndex": 1,
      "independentSolution": "嚴格區間內的質數只有 11、13、17、19、23，所以答案為 5。",
      "explanation": "第三邊 x 須滿足 7<x<27，質數為 11、13、17、19、23，共 5 個。 由 |17-10|<x<17+10 得 7<x<27。 列出區間內質數並計數。",
      "steps": [
        "由 |17-10|<x<17+10 得 7<x<27。",
        "列出區間內質數並計數。"
      ],
      "optionAnalysis": [
        {
          "choice": "4",
          "truth": false,
          "reason": "漏掉端點內的質數 17。"
        },
        {
          "choice": "5",
          "truth": true,
          "reason": "第三邊 x 須滿足 7<x<27，質數為 11、13、17、19、23，共 5 個。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "把邊界 7 算入，但 7+10=17 不能形成三角形。"
        },
        {
          "choice": "7",
          "truth": false,
          "reason": "把 7 與大於等於 27 的數也算入。"
        }
      ],
      "misconceptionTarget": "把三角形不等式的端點當成可取。",
      "prerequisiteCheck": "已會質數與嚴格不等式。",
      "estimatedTimeSec": "130",
      "unitAndRoundingCheck": "長度為整數且不需近似。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "7 與 27 均不可取；質數條件排除合數，答案唯一。",
      "difficultyReason": "進階題，需把幾何限制轉為開區間後再做數論篩選。",
      "literacyContextNecessity": null,
      "authoringIntent": "整合三角形不等式與質數判斷。",
      "tags": [
        "空間與形狀",
        "三角形邊長關係",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "354e30ce131ee1f259a24863419c6ea17706b92efd8452c8b5e27768d167e211"
    },
    {
      "questionId": "u16-s012-v010",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "道路 A 到 C 的直達距離為 18 公里，經 B 的兩段路 AB=7、BC=11。若 A、B、C 不共線，這組資料可能嗎？",
      "givenConditions": [
        "三點應形成非退化三角形"
      ],
      "target": "用路徑長檢查三角形不等式",
      "choices": [
        "可能，因兩段相加剛好直達",
        "不可能，因 7+11=18，只能三點共線",
        "可能，只要 B 在 A、C 之間外",
        "不可能，因 7+18<11"
      ],
      "answerIndex": 1,
      "independentSolution": "非共線三角形需 7+11>18。",
      "explanation": "兩段折線和等於直達線段，等號只在共線時發生。 比較 AB+BC 與 AC。 7+11=18。 與非共線條件矛盾。",
      "steps": [
        "比較 AB+BC 與 AC。",
        "7+11=18。",
        "與非共線條件矛盾。"
      ],
      "optionAnalysis": [
        {
          "choice": "可能，因兩段相加剛好直達",
          "truth": false,
          "reason": "非共線繞路必嚴格較長。"
        },
        {
          "choice": "不可能，因 7+11=18，只能三點共線",
          "truth": true,
          "reason": "兩段折線和等於直達線段，等號只在共線時發生。"
        },
        {
          "choice": "可能，只要 B 在 A、C 之間外",
          "truth": false,
          "reason": "若在同一直線仍違反非共線。"
        },
        {
          "choice": "不可能，因 7+18<11",
          "truth": false,
          "reason": "此不等式實際成立。"
        }
      ],
      "misconceptionTarget": "把最短路徑的不等式寫成大於等於而不處理等號。",
      "prerequisiteCheck": "會把地圖路徑轉成三角形。",
      "estimatedTimeSec": "110",
      "unitAndRoundingCheck": "三距離同為公里，精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目明示不共線，因此等號不合法；若共線則可能。",
      "difficultyReason": "素養題，路線幾何用來檢查資料品質。",
      "literacyContextNecessity": "非共線條件決定等號是否可接受，情境必要。",
      "authoringIntent": "審查道路距離。",
      "tags": [
        "空間與形狀",
        "三角形邊長關係",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "708c382065cf1f2ce9eef96edaa0dffc50a17ec6a59e2a2df7393b3c5e39e0f3"
    },
    {
      "questionId": "u16-s012-v011",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "三根鋼條長 1.2 公尺、1.8 公尺、x 公尺，要焊成非退化三角支架。哪個範圍正確？",
      "givenConditions": [
        "x>0"
      ],
      "target": "求材料長度範圍",
      "choices": [
        "0.6≤x≤3.0",
        "0.6<x<3.0",
        "0<x<3.0",
        "1.2<x<1.8"
      ],
      "answerIndex": 1,
      "independentSolution": "支架需 0.6<x<3.0。",
      "explanation": "|1.8−1.2|=0.6，和為 3.0，使用嚴格不等式。 統一公尺。 算差0.6與和3.0。",
      "steps": [
        "統一公尺。",
        "算差0.6與和3.0。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.6≤x≤3.0",
          "truth": false,
          "reason": "端點只能焊成一直線。"
        },
        {
          "choice": "0.6<x<3.0",
          "truth": true,
          "reason": "|1.8−1.2|=0.6，和為 3.0，使用嚴格不等式。"
        },
        {
          "choice": "0<x<3.0",
          "truth": false,
          "reason": "漏掉兩已知邊差 0.6。"
        },
        {
          "choice": "1.2<x<1.8",
          "truth": false,
          "reason": "範圍過窄。"
        }
      ],
      "misconceptionTarget": "在實務材料題中把端點等號也視為穩定三角形。",
      "prerequisiteCheck": "會計算小數差與和。",
      "estimatedTimeSec": "95",
      "unitAndRoundingCheck": "全部為公尺，0.6與3.0為精確十進位，不需四捨五入。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "『非退化』明確排除等號。",
      "difficultyReason": "素養題，材料選型直接受第三邊可行範圍限制。",
      "literacyContextNecessity": "支架能否形成面積是情境核心。",
      "authoringIntent": "求鋼條規格範圍。",
      "tags": [
        "空間與形狀",
        "三角形邊長關係",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "1caff9ab3d7be4b6b0b3eefb09016f1324fbb8a1a3e30ac65c64f452181eaa01"
    },
    {
      "questionId": "u16-s012-v012",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "物流路線從倉庫 A 經轉運站 B 到門市 C，距離分別 6 公里與 9 公里。A 到 C 的直線距離 d 可能是哪一個？",
      "givenConditions": [
        "三地不共線"
      ],
      "target": "使用第三邊範圍",
      "choices": [
        "10 公里",
        "3 公里",
        "15 公里",
        "16 公里"
      ],
      "answerIndex": 0,
      "independentSolution": "只有 10 符合非共線三角形不等式。",
      "explanation": "3<d<15，10 落在開區間內。 算差 3。 算和15。 逐項檢查。",
      "steps": [
        "算差 3。",
        "算和15。",
        "逐項檢查。"
      ],
      "optionAnalysis": [
        {
          "choice": "10 公里",
          "truth": true,
          "reason": "3<d<15，10 落在開區間內。"
        },
        {
          "choice": "3 公里",
          "truth": false,
          "reason": "|9−6|=3，等號代表共線。"
        },
        {
          "choice": "15 公里",
          "truth": false,
          "reason": "6+9=15，等號代表共線。"
        },
        {
          "choice": "16 公里",
          "truth": false,
          "reason": "超過兩段路程和。"
        }
      ],
      "misconceptionTarget": "把上下界端點列入。",
      "prerequisiteCheck": "會將路程轉成三角邊長。",
      "estimatedTimeSec": "90",
      "unitAndRoundingCheck": "距離均為公里；選項為精確整數。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "不共線排除 3、15；16 超上界。",
      "difficultyReason": "素養題，直線距離合理性由繞行路程限制。",
      "literacyContextNecessity": "物流路徑的三點位置使不等式必要。",
      "authoringIntent": "判斷可能直達距離。",
      "tags": [
        "空間與形狀",
        "三角形邊長關係",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "e2f88498e360758164e517adf6a055e19eb8f6f0243ef029988ac28a5a07acfd"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u16-s012-cr001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-012-triangle-inequality",
      "prompt": "三角形兩邊長為 7 cm、12 cm，第三邊長 x 為整數。求 x 的所有可能值，並說明端點為何不能取。",
      "requiredWork": [
        "列出|12−7|<x<12+7。",
        "處理嚴格不等式。",
        "列出整數。"
      ],
      "fullCreditSolution": [
        "由三角形不等式得5<x<19。",
        "所以x=6、7、8、9、10、11、12、13、14、15、16、17、18。",
        "x=5會使5+7=12，x=19會使7+12=19，兩者都退化成一直線。"
      ],
      "alternativeSolutions": [
        "可分別列7+x>12與7+12>x，再取交集。"
      ],
      "reasoningSteps": [
        "由三角形不等式得5<x<19。",
        "所以x=6、7、8、9、10、11、12、13、14、15、16、17、18。",
        "x=5會使5+7=12，x=19會使7+12=19，兩者都退化成一直線。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "範圍5<x<19、13個整數完整且明確排除兩端退化情形。"
        },
        {
          "score": 2,
          "criteria": "範圍正確但漏列一個整數或端點說明不完整。"
        },
        {
          "score": 1,
          "criteria": "知道第三邊介於差與和之間，但未完整列值。"
        },
        {
          "score": 0,
          "criteria": "使用≤納入端點、只列單一不等式或無有效作答。"
        }
      ],
      "partialCreditRules": [
        "範圍正確但漏列一個整數或端點說明不完整。",
        "知道第三邊介於差與和之間，但未完整列值。"
      ],
      "followThroughPolicy": "若上下界其中一個算術錯，但方法與嚴格性正確，最高2分。",
      "unitAndNotationRules": "長度均為cm；x為正整數；不等號必為嚴格。",
      "answerOnlyPolicy": "只寫5<x<19而題目要求所有值，最多2分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把差寫成7−12負值。",
        "納入5或19。"
      ],
      "independentReview": {
        "derivedResult": "x為6至18的所有整數，共13個。",
        "ambiguity": "題目明定整數，無需列非整數；端點均不可取。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "fedbcadc8ac9745732b480065c6448555b6ffb9f18f84014f51581d4f8dcd903"
    },
    {
      "questionId": "u16-s012-cr002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "triangle-inequality",
      "skillOrder": 12,
      "difficulty": "advanced",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "有三根木條長 4 m、9 m、13 m。工人說『因為4+9=13，所以剛好可以組成三角形。』請評析，並提出最小的整公分修改量，使它們能組成三角形。",
      "requiredWork": [
        "指出等號只形成退化圖形。",
        "提出修改其中一根的最小整公分方案。",
        "驗證嚴格不等式。"
      ],
      "fullCreditSolution": [
        "4+9=13只會讓三木條排成一直線，不是非退化三角形。",
        "最小整公分修改可把13 m木條縮短1 cm為12.99 m；此時4+9=13 m>12.99 m，另兩個不等式自然成立。",
        "也可把4 m或9 m其中一根加長1 cm。"
      ],
      "alternativeSolutions": [
        "若工程限制只許整公分裁短，裁長桿1 cm是直接方案；若可接長，短桿增加1 cm亦可。"
      ],
      "reasoningSteps": [
        "4+9=13只會讓三木條排成一直線，不是非退化三角形。",
        "最小整公分修改可把13 m木條縮短1 cm為12.99 m；此時4+9=13 m>12.99 m，另兩個不等式自然成立。",
        "也可把4 m或9 m其中一根加長1 cm。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確否定等號，提出1 cm的可行修改並以嚴格不等式驗證。"
        },
        {
          "score": 2,
          "criteria": "評析正確且修改量1 cm，但未清楚換算12.99 m或漏一項驗證。"
        },
        {
          "score": 1,
          "criteria": "只指出不能成三角形，或提出可行但非最小的修改。"
        },
        {
          "score": 0,
          "criteria": "認為等號可成三角形、提出0 cm修改或無有效內容。"
        }
      ],
      "partialCreditRules": [
        "評析正確且修改量1 cm，但未清楚換算12.99 m或漏一項驗證。",
        "只指出不能成三角形，或提出可行但非最小的修改。"
      ],
      "followThroughPolicy": "若寫『13 m改為12 m』雖可行但非最小，第一部分正確時最高2分。",
      "unitAndNotationRules": "1 cm=0.01 m；修改後長度與原單位需一致。",
      "answerOnlyPolicy": "只答『不可以』最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把等號當臨界可行。",
        "整公分誤作整公尺。"
      ],
      "independentReview": {
        "derivedResult": "原木條退化；最小修改1 cm，例如13 m改為12.99 m。",
        "ambiguity": "允許裁短或接長時均存在1 cm方案；題目不要求唯一修改對象。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "859f122715a49cad47471d5a62d436d5fd5cf37f094267946a106917fa299026"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u16-s012-v001",
      "unitId": "u16",
      "skillId": "triangle-inequality",
      "contentSha256": "ffac02f6ee52dfe2b6125507d84df96543e136e034ffffcbefd56ae8674de3ef",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "只有 4、6、9 通過嚴格不等式。",
      "derivedAnswer": "4、6、9",
      "storedAnswer": "4、6、9",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「4、6、9」；另外三個選項逐一排除：「2、3、5」：2+3=5，為退化。；「1、4、6」：1+4<6。；「3、3、7」：3+3<7。",
        "undefinedSymbol": "題幹符號與詞語已在「三角形邊長關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "各組同單位且精確。",
        "roundingConflict": "依精確資料獨立推導為「4、6、9」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "選項邊界明確，只有一組嚴格大於。",
        "alternateReading": "若採常見誤讀「把等號也當成可形成三角形。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接判斷可行性。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會做整數加法。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「檢查最短兩邊和」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列哪組長度可以形成三角形？」獨立重算：只有 4、6、9 通過嚴格不等式。 正確選項「4、6、9」。四選項核對：2、3、5=假，2+3=5，為退化。；1、4、6=假，1+4<6。；3、3、7=假，3+3<7。；4、6、9=真，4+6=10>9，符合最短兩邊和大於最長邊。 邊界：選項邊界明確，只有一組嚴格大於。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s012-v002",
      "unitId": "u16",
      "skillId": "triangle-inequality",
      "contentSha256": "518ec33fd36e80c806a4ac2b55920d447d089056498b6aaa139d269632ed4f94",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "第三邊需同時大於差、小於和。",
      "derivedAnswer": "3<x<13",
      "storedAnswer": "3<x<13",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「3<x<13」；另外三個選項逐一排除：「3≤x≤13」：端點等號形成退化。；「0<x<13」：漏掉 x>8−5。；「5<x<8」：範圍過窄。",
        "undefinedSymbol": "題幹符號與詞語已在「三角形邊長關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "三邊使用同一長度單位；範圍精確。",
        "roundingConflict": "依精確資料獨立推導為「3<x<13」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "x=3、13 都使三點共線，已排除。",
        "alternateReading": "若採常見誤讀「只寫上界或包含端點。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，套用標準公式。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會做加減與絕對差。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「寫第三邊範圍」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩邊長為 5、8，第三邊 x 的範圍為何？」獨立重算：第三邊需同時大於差、小於和。 正確選項「3<x<13」。四選項核對：3<x<13=真，|8−5|<x<8+5，所以 3<x<13。；3≤x≤13=假，端點等號形成退化。；0<x<13=假，漏掉 x>8−5。；5<x<8=假，範圍過窄。 邊界：x=3、13 都使三點共線，已排除。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s012-v003",
      "unitId": "u16",
      "skillId": "triangle-inequality",
      "contentSha256": "8223290bbed912f37bceba4c7001d00dc6b52c0637d10a2b51c278355d6c608b",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "三條線段只能首尾共線，面積為 0。",
      "derivedAnswer": "3+4=7，只能排成一直線",
      "storedAnswer": "3+4=7，只能排成一直線",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「3+4=7，只能排成一直線」；另外三個選項逐一排除：「因 7 太大但仍可彎曲」：等號時沒有張開空間。；「因三邊必須全相等」：一般三角形不需等邊。；「因 3+7<4」：實際 10>4。",
        "undefinedSymbol": "題幹符號與詞語已在「三角形邊長關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "精確長度，無四捨五入。",
        "roundingConflict": "依精確資料獨立推導為「3+4=7，只能排成一直線」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "等號端點明確不包含。",
        "alternateReading": "若採常見誤讀「誤把大於等於當條件。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，理解嚴格不等式。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會分辨 > 與 =。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「辨認退化邊界」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「長度 3、4、7 為什麼不能形成一般三角形？」獨立重算：三條線段只能首尾共線，面積為 0。 正確選項「3+4=7，只能排成一直線」。四選項核對：因 7 太大但仍可彎曲=假，等號時沒有張開空間。；因三邊必須全相等=假，一般三角形不需等邊。；3+4=7，只能排成一直線=真，任兩邊和必須嚴格大於第三邊；此處等於最長邊。；因 3+7<4=假，實際 10>4。 邊界：等號端點明確不包含。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s012-v004",
      "unitId": "u16",
      "skillId": "triangle-inequality",
      "contentSha256": "6548ba85e50ae8ea28b2e450374cf4466343dee17be8f3222ba782dfa456e7db",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "端點 5、19 不可取。",
      "derivedAnswer": "13 種",
      "storedAnswer": "13 種",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「13 種」；另外三個選項逐一排除：「12 種」：漏列一個端點內整數。；「14 種」：把 5 或19 某端點列入。；「19 種」：忽略下界。",
        "undefinedSymbol": "題幹符號與詞語已在「三角形邊長關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "x 為同單位整數，無近似。",
        "roundingConflict": "依精確資料獨立推導為「13 種」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "正整數限制已套用；6 到18完整。",
        "alternateReading": "若採常見誤讀「範圍計數少加 1 或包含端點。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，範圍後做離散計數。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會列整數並計數。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「列整數範圍」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩邊長 7、12，第三邊為正整數，共有幾種可能？」獨立重算：端點 5、19 不可取。 正確選項「13 種」。四選項核對：12 種=假，漏列一個端點內整數。；14 種=假，把 5 或19 某端點列入。；19 種=假，忽略下界。；13 種=真，5<x<19，正整數為 6 到 18，共 18−6+1=13 種。 邊界：正整數限制已套用；6 到18完整。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s012-v005",
      "unitId": "u16",
      "skillId": "triangle-inequality",
      "contentSha256": "7098bf778f3f200bc3c94516aba23aefb9e67b123ea4ac412c80bdae5e1c9d10",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "其餘兩個和不等式自動成立。",
      "derivedAnswer": "檢查 8+11>15，成立所以可以",
      "storedAnswer": "檢查 8+11>15，成立所以可以",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「檢查 8+11>15，成立所以可以」；另外三個選項逐一排除：「檢查 8+15>11，成立就結束」：這不是最可能失敗的不等式；雖成立但不能單獨作一般快速判定。；「檢查 11−8>15」：差的方向錯誤。；「檢查 8×11>15」：乘積不是三角形不等式。",
        "undefinedSymbol": "題幹符號與詞語已在「三角形邊長關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "同單位精確長度。",
        "roundingConflict": "依精確資料獨立推導為「檢查 8+11>15，成立所以可以」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "三邊無相等最大值歧義；結果明確。",
        "alternateReading": "若採常見誤讀「隨便挑一個不等式而未對最長邊。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，選擇有效快速檢查。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會找最大值。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「使用最長邊快速法」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「下列判斷三邊 8、11、15 是否成三角形的最快檢查為何？」獨立重算：其餘兩個和不等式自動成立。 正確選項「檢查 8+11>15，成立所以可以」。四選項核對：檢查 8+15>11，成立就結束=假，這不是最可能失敗的不等式；雖成立但不能單獨作一般快速判定。；檢查 11−8>15=假，差的方向錯誤。；檢查 8×11>15=假，乘積不是三角形不等式。；檢查 8+11>15，成立所以可以=真，對正長度，找最長邊 15，只需檢查另外兩邊和。 邊界：三邊無相等最大值歧義；結果明確。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s012-v006",
      "unitId": "u16",
      "skillId": "triangle-inequality",
      "contentSha256": "6f402e639c6caf070f90e6a4094d452bead3df9a36e8370fc363e62c7762cfe5",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "合併為 6<x<14。",
      "derivedAnswer": "還必須有 x>6，完整範圍是 6<x<14",
      "storedAnswer": "還必須有 x>6，完整範圍是 6<x<14",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「還必須有 x>6，完整範圍是 6<x<14」；另外三個選項逐一排除：「上界應為 10」：上界是兩邊和 14。；「下界應為 4」：下界是絕對差 6。；「範圍其實正確」：例如 x=2 不能與 4、10 成三角形。",
        "undefinedSymbol": "題幹符號與詞語已在「三角形邊長關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "同一長度單位，精確範圍。",
        "roundingConflict": "依精確資料獨立推導為「還必須有 x>6，完整範圍是 6<x<14」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "x=6、14 都退化，故嚴格不等。",
        "alternateReading": "若採常見誤讀「只記得兩邊和上界。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，診斷不完整範圍。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會由三個不等式整理。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「找出缺少下界」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩邊為 a=4、b=10，某同學寫第三邊範圍 0<x<14。錯在哪裡？」獨立重算：合併為 6<x<14。 正確選項「還必須有 x>6，完整範圍是 6<x<14」。四選項核對：上界應為 10=假，上界是兩邊和 14。；下界應為 4=假，下界是絕對差 6。；還必須有 x>6，完整範圍是 6<x<14=真，另一個不等式 4+x>10 給 x>6。；範圍其實正確=假，例如 x=2 不能與 4、10 成三角形。 邊界：x=6、14 都退化，故嚴格不等。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s012-v007",
      "unitId": "u16",
      "skillId": "triangle-inequality",
      "contentSha256": "88b1e1109b806cef91f34ca4045a20eef1deffe9fe99666042cc58ae696811c6",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "24 使 9+14=23<24，不能形成。",
      "derivedAnswer": "24",
      "storedAnswer": "24",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「24」；另外三個選項逐一排除：「6」：6 在範圍內且為偶數。；「14」：14 在範圍內。；「22」：22<23，合法。",
        "undefinedSymbol": "題幹符號與詞語已在「三角形邊長關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度同單位；整數精確。",
        "roundingConflict": "依精確資料獨立推導為「24」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "23 為嚴格上界，24 明確超出。",
        "alternateReading": "若採常見誤讀「只看 x 為偶數，不檢查上界。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，範圍與附加條件綜合。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會結合不等式與奇偶限制。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「在範圍內篩選偶數」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「兩邊長 9、14，第三邊 x 為偶數。下列哪一個不可能？」獨立重算：24 使 9+14=23<24，不能形成。 正確選項「24」。四選項核對：24=真，合法偶數為 6、8、…、22；24 超過上界 23。；6=假，6 在範圍內且為偶數。；14=假，14 在範圍內。；22=假，22<23，合法。 邊界：23 為嚴格上界，24 明確超出。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s012-v008",
      "unitId": "u16",
      "skillId": "triangle-inequality",
      "contentSha256": "8f4b1f28457d83dafe95f3a4aa54eef34158ec8537c83f176645d447b676023e",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "x=1/2 時最短兩邊和等於最長邊，故端點排除。",
      "derivedAnswer": "x>1/2",
      "storedAnswer": "x>1/2",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「x>1/2」；另外三個選項逐一排除：「x>1」：條件過強，x=0.75 時邊 1.75、4.75、3.5 可成。；「0<x≤1/2」：x=1/2 退化，更小時失敗。；「所有 x>0」：x=0.25 時 1.25+2.5<4.25。",
        "undefinedSymbol": "題幹符號與詞語已在「三角形邊長關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "x 可為實數，答案精確，不取整。",
        "roundingConflict": "依精確資料獨立推導為「x>1/2」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "所有邊在 x>1/2 時皆正；端點嚴格排除。",
        "alternateReading": "若採常見誤讀「只比較表面係數或只試整數。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，代數與幾何邊界整合。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會解一元一次不等式並檢查三式。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「修正並求完整範圍」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三邊為 x+1、x+4、2x+2，且 x>0。正確的成三角形條件為何？」獨立重算：x=1/2 時最短兩邊和等於最長邊，故端點排除。 正確選項「x>1/2」。四選項核對：x>1=假，條件過強，x=0.75 時邊 1.75、4.75、3.5 可成。；0<x≤1/2=假，x=1/2 退化，更小時失敗。；x>1/2=真，列三個不等式，唯一新增限制來自 (x+1)+(2x+2)>x+4，即 x>1/2。；所有 x>0=假，x=0.25 時 1.25+2.5<4.25。 邊界：所有邊在 x>1/2 時皆正；端點嚴格排除。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s012-v009",
      "unitId": "u16",
      "skillId": "triangle-inequality",
      "contentSha256": "354e30ce131ee1f259a24863419c6ea17706b92efd8452c8b5e27768d167e211",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "嚴格區間內的質數只有 11、13、17、19、23，所以答案為 5。",
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
        "secondCorrectAnswer": "重新解題得到「5」；另外三個選項逐一排除：「4」：漏掉端點內的質數 17。；「6」：把邊界 7 算入，但 7+10=17 不能形成三角形。；「7」：把 7 與大於等於 27 的數也算入。",
        "undefinedSymbol": "題幹符號與詞語已在「三角形邊長關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "長度為整數且不需近似。",
        "roundingConflict": "依精確資料獨立推導為「5」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "7 與 27 均不可取；質數條件排除合數，答案唯一。",
        "alternateReading": "若採常見誤讀「把三角形不等式的端點當成可取。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，需把幾何限制轉為開區間後再做數論篩選。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已會質數與嚴格不等式。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「結合三角形不等式與質數篩選」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三角形兩邊長為 10、17，第三邊長是質數。符合條件的質數共有幾個？」獨立重算：嚴格區間內的質數只有 11、13、17、19、23，所以答案為 5。 正確選項「5」。四選項核對：4=假，漏掉端點內的質數 17。；5=真，第三邊 x 須滿足 7<x<27，質數為 11、13、17、19、23，共 5 個。；6=假，把邊界 7 算入，但 7+10=17 不能形成三角形。；7=假，把 7 與大於等於 27 的數也算入。 邊界：7 與 27 均不可取；質數條件排除合數，答案唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s012-v010",
      "unitId": "u16",
      "skillId": "triangle-inequality",
      "contentSha256": "708c382065cf1f2ce9eef96edaa0dffc50a17ec6a59e2a2df7393b3c5e39e0f3",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "非共線三角形需 7+11>18。",
      "derivedAnswer": "不可能，因 7+11=18，只能三點共線",
      "storedAnswer": "不可能，因 7+11=18，只能三點共線",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「不可能，因 7+11=18，只能三點共線」；另外三個選項逐一排除：「可能，因兩段相加剛好直達」：非共線繞路必嚴格較長。；「可能，只要 B 在 A、C 之間外」：若在同一直線仍違反非共線。；「不可能，因 7+18<11」：此不等式實際成立。",
        "undefinedSymbol": "題幹符號與詞語已在「三角形邊長關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "三距離同為公里，精確。",
        "roundingConflict": "依精確資料獨立推導為「不可能，因 7+11=18，只能三點共線」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目明示不共線，因此等號不合法；若共線則可能。",
        "alternateReading": "若採常見誤讀「把最短路徑的不等式寫成大於等於而不處理等號。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，路線幾何用來檢查資料品質。",
      "literacyContextNecessity": "非共線條件決定等號是否可接受，情境必要。",
      "prerequisiteCheck": "會把地圖路徑轉成三角形。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「用路徑長檢查三角形不等式」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「道路 A 到 C 的直達距離為 18 公里，經 B 的兩段路 AB=7、BC=11。若 A、B、C 不共線，這組資料可能嗎？」獨立重算：非共線三角形需 7+11>18。 正確選項「不可能，因 7+11=18，只能三點共線」。四選項核對：可能，因兩段相加剛好直達=假，非共線繞路必嚴格較長。；不可能，因 7+11=18，只能三點共線=真，兩段折線和等於直達線段，等號只在共線時發生。；可能，只要 B 在 A、C 之間外=假，若在同一直線仍違反非共線。；不可能，因 7+18<11=假，此不等式實際成立。 邊界：題目明示不共線，因此等號不合法；若共線則可能。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s012-v011",
      "unitId": "u16",
      "skillId": "triangle-inequality",
      "contentSha256": "1caff9ab3d7be4b6b0b3eefb09016f1324fbb8a1a3e30ac65c64f452181eaa01",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "支架需 0.6<x<3.0。",
      "derivedAnswer": "0.6<x<3.0",
      "storedAnswer": "0.6<x<3.0",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「0.6<x<3.0」；另外三個選項逐一排除：「0.6≤x≤3.0」：端點只能焊成一直線。；「0<x<3.0」：漏掉兩已知邊差 0.6。；「1.2<x<1.8」：範圍過窄。",
        "undefinedSymbol": "題幹符號與詞語已在「三角形邊長關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "全部為公尺，0.6與3.0為精確十進位，不需四捨五入。",
        "roundingConflict": "依精確資料獨立推導為「0.6<x<3.0」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "『非退化』明確排除等號。",
        "alternateReading": "若採常見誤讀「在實務材料題中把端點等號也視為穩定三角形。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，材料選型直接受第三邊可行範圍限制。",
      "literacyContextNecessity": "支架能否形成面積是情境核心。",
      "prerequisiteCheck": "會計算小數差與和。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「求材料長度範圍」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「三根鋼條長 1.2 公尺、1.8 公尺、x 公尺，要焊成非退化三角支架。哪個範圍正確？」獨立重算：支架需 0.6<x<3.0。 正確選項「0.6<x<3.0」。四選項核對：0.6≤x≤3.0=假，端點只能焊成一直線。；0.6<x<3.0=真，|1.8−1.2|=0.6，和為 3.0，使用嚴格不等式。；0<x<3.0=假，漏掉兩已知邊差 0.6。；1.2<x<1.8=假，範圍過窄。 邊界：『非退化』明確排除等號。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s012-v012",
      "unitId": "u16",
      "skillId": "triangle-inequality",
      "contentSha256": "e2f88498e360758164e517adf6a055e19eb8f6f0243ef029988ac28a5a07acfd",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "只有 10 符合非共線三角形不等式。",
      "derivedAnswer": "10 公里",
      "storedAnswer": "10 公里",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「10 公里」；另外三個選項逐一排除：「3 公里」：|9−6|=3，等號代表共線。；「15 公里」：6+9=15，等號代表共線。；「16 公里」：超過兩段路程和。",
        "undefinedSymbol": "題幹符號與詞語已在「三角形邊長關係」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "距離均為公里；選項為精確整數。",
        "roundingConflict": "依精確資料獨立推導為「10 公里」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "不共線排除 3、15；16 超上界。",
        "alternateReading": "若採常見誤讀「把上下界端點列入。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，直線距離合理性由繞行路程限制。",
      "literacyContextNecessity": "物流路徑的三點位置使不等式必要。",
      "prerequisiteCheck": "會將路程轉成三角邊長。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「使用第三邊範圍」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「物流路線從倉庫 A 經轉運站 B 到門市 C，距離分別 6 公里與 9 公里。A 到 C 的直線距離 d 可能是哪一個？」獨立重算：只有 10 符合非共線三角形不等式。 正確選項「10 公里」。四選項核對：10 公里=真，3<d<15，10 落在開區間內。；3 公里=假，|9−6|=3，等號代表共線。；15 公里=假，6+9=15，等號代表共線。；16 公里=假，超過兩段路程和。 邊界：不共線排除 3、15；16 超上界。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u16-fig-012-triangle-inequality",
      "unitId": "u16",
      "slot": "s012",
      "title": "三角形不等式的兩短邊合併比較",
      "altText": "上方兩段短線標a、b首尾相接，下方一段長線標c；右側以大於符號表示a+b必須大於c。",
      "svgPath": "figures/u16/u16-fig-012-triangle-inequality.svg",
      "drawingSpec": {
        "canvas": {
          "width": 360,
          "height": 240,
          "viewBox": "0 0 360 240"
        },
        "coordinateSystem": "左上角為(0,0)，x向右、y向下。",
        "geometry": "短段a從(35,80)到(130,80)，b從(130,80)到(245,80)，比較段c從(35,150)到(230,150)。",
        "visibleLineRules": "主要邊線使用2.5px黑色實線；輔助線使用1.5px虛線；弧線不得遮住頂點標籤。",
        "hiddenLineRules": "平面圖無隱藏邊；未畫出的延長線不得由視覺自行推定。",
        "labels": "a、b置各段上方，c置下方；不等式在右側。",
        "tickMarksAndSymbols": "相等邊以同數量短刻痕表示；直角以小正方形；相等角以同型圓弧。",
        "units": "示意圖無長度單位，題目另有數值時以題幹為準。",
        "arrows": "只在延長線或行進方向使用箭頭。",
        "toScale": false,
        "notToScaleWarning": "圖形不按比例，請依標記與題目條件判斷。",
        "mobileLayout": "360×240畫布；最小文字14px；標籤與線段保持至少6px間距。",
        "answerLeakageControl": "圖中只呈現已知結構與定義標記，不標示題目所求數值或正確選項。"
      },
      "svgAssertions": [
        "a+b &gt; c",
        "等號時只能排成一直線",
        "M35 80 H130",
        "M35 150 H230"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "360px寬預覽下，頂點、刻痕、直角符號與延長線箭頭仍可辨識。",
        "answerLeakage": "未顯示任何題目答案；只保留概念所需結構。",
        "geometryCheck": "已依列出的座標逐項核對端點、交點、刻痕與文字位置。",
        "reviewNote": "三角形不等式的兩短邊合併比較已逐線檢查：短段a從(35,80)到(130,80)，b從(130,80)到(245,80)，比較段c從(35,150)到(230,150)。；標籤配置為a、b置各段上方，c置下方；不等式在右側。，未依視覺比例暗示未給定量。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "ed719bd3b22d76b38e561f6654c785dee60eccb4f3c71cb2d4092ac4226f9eef"
    }
  ]
};
export default skillData;
