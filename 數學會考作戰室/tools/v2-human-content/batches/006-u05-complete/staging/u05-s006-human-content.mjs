// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s006-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-coordinate-ops",
  "skillId": "coordinate-horizontal-vertical-distance",
  "lockedTitle": "水平距離與垂直距離",
  "title": "水平距離與垂直距離：同一方向只看一個坐標差",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能判斷兩點是否水平或垂直對齊。",
    "能計算同 y 兩點的水平距離。",
    "能計算同 x 兩點的垂直距離。",
    "能由距離條件找可能坐標。"
  ],
  "prerequisites": [
    {
      "skillId": "coordinate-translation",
      "requiredLevel": "能說明並正確使用「點的平移」的核心規則，且不混淆坐標分量順序。"
    }
  ],
  "glossary": [
    {
      "term": "水平對齊",
      "definition": "兩點的 y 坐標相同。"
    },
    {
      "term": "垂直對齊",
      "definition": "兩點的 x 坐標相同。"
    },
    {
      "term": "水平距離",
      "definition": "同 y 兩點的 |x1-x2|。"
    },
    {
      "term": "垂直距離",
      "definition": "同 x 兩點的 |y1-y2|。"
    }
  ],
  "notation": [
    {
      "symbol": "|x1-x2|",
      "meaning": "兩個橫坐標的非負差。"
    },
    {
      "symbol": "|y1-y2|",
      "meaning": "兩個縱坐標的非負差。"
    },
    {
      "symbol": "同 y",
      "meaning": "兩點位於同一條水平線。"
    },
    {
      "symbol": "同 x",
      "meaning": "兩點位於同一條垂直線。"
    }
  ],
  "conceptNarrative": [
    "距離描述長度，所以不因計算順序而成負數。",
    "水平線上 y 不變，真正需要比較的是 x；垂直線上 x 不變，真正需要比較的是 y。",
    "本節只處理水平或垂直距離，不需要一般兩點距離的根號公式。",
    "若只知到某點的水平距離，通常在左右兩側各有一個可能位置。"
  ],
  "formalDefinitions": [
    {
      "name": "水平距離",
      "statement": "若 A=(x1,y)、B=(x2,y)，則 AB=|x1-x2|。"
    },
    {
      "name": "垂直距離",
      "statement": "若 A=(x,y1)、B=(x,y2)，則 AB=|y1-y2|。"
    }
  ],
  "formulas": [
    {
      "formula": "d水平=|x1-x2|",
      "conditions": [
        "兩點 y 相同"
      ],
      "meaning": "水平方向的坐標差。"
    },
    {
      "formula": "d垂直=|y1-y2|",
      "conditions": [
        "兩點 x 相同"
      ],
      "meaning": "垂直方向的坐標差。"
    }
  ],
  "nonApplicableCases": [
    "兩點既不同 x 又不同 y 時，不可稱其連線為水平或垂直距離。",
    "距離不能保留負號。",
    "同 y 不是比較 y 的差。",
    "由距離反推坐標時要考慮左右或上下兩種可能。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "比較兩點坐標，先確認是同y的水平線段或同x的垂直線段。",
      "check": "若兩個分量都不同，不可直接套用本節的單一坐標差。"
    },
    {
      "step": 2,
      "instruction": "水平線段只比較x，垂直線段只比較y，寫出相對應的坐標差。",
      "check": "沒有拿共同且不變的分量來計算距離。"
    },
    {
      "step": 3,
      "instruction": "對坐標差取絕對值，得到非負的格線距離；跨越零直接做減去負數。",
      "check": "答案不帶負號，且沒有誤算成兩端絕對值之差。"
    },
    {
      "step": 4,
      "instruction": "反推未知坐標時，把絕對值方程式分成正、負兩個分支求解。",
      "check": "兩個位置以已知點為中心，代回後距離皆正確。"
    },
    {
      "step": 5,
      "instruction": "折線分段相加；有比例時再將總格數乘每格實際長度並換算單位。",
      "check": "沒有漏段，公尺與公里換算正確。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "求A=(-3,4)、B=(5,4)的距離。",
      "solutionSteps": [
        "兩點縱坐標同為4，線段水平，只比較x。",
        "計算|5－(-3)|＝8。",
        "距離為非負的8單位。"
      ],
      "answer": "8單位。",
      "why": "水平線段的高度不變，所以共同的縱坐標四與長度無關。橫坐標從負三跨到五，完整距離是八；取絕對值能避免因減法順序不同而出現負長度。"
    },
    {
      "exampleId": "L2",
      "prompt": "求C=(2,-6)、D=(2,1)的距離。",
      "solutionSteps": [
        "兩點橫坐標同為2，線段垂直，只比較y。",
        "計算|1－(-6)|＝7。",
        "確認結果包含負六到零與零到一兩段。"
      ],
      "answer": "7單位。",
      "why": "垂直線段只由縱坐標差決定，固定的橫坐標二不是距離。從負六到一跨越零，共有六加一等於七個單位；以一減負六可一次得到相同結果。"
    },
    {
      "exampleId": "L3",
      "prompt": "E=(a,3)與F=(7,3)相距4，求a。",
      "solutionSteps": [
        "兩點同y，列水平距離式|a－7|＝4。",
        "解a－7＝4得a＝11。",
        "解a－7＝-4得a＝3，代回兩值皆相距4。"
      ],
      "answer": "a＝3或11。",
      "why": "距離四沒有指定方向，所以E可能在F左方四單位，也可能在右方四單位。把絕對值拆成正、負兩個分支可完整保留兩側位置，且兩值都以七為中心。"
    },
    {
      "exampleId": "L4",
      "prompt": "G=(-5,b)與H=(-5,-2)垂直距離為6，求b。",
      "solutionSteps": [
        "兩點同x，列|b－(-2)|＝|b＋2|＝6。",
        "解b＋2＝6得b＝4。",
        "解b＋2＝-6得b＝-8，代回皆與-2相距6。"
      ],
      "answer": "b＝4或-8。",
      "why": "已知點H的縱坐標負二是兩個可能位置的中心。向上六到四，向下六到負八；若錯以零為中心便會得到正負六，不能滿足原距離。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "同 y 時用 |y1-y2|。",
      "why": "把不變分量拿來相減。",
      "correction": "水平距離應比較 x。"
    },
    {
      "mistake": "計算 -3-5=-8 就作答。",
      "why": "忘記距離非負。",
      "correction": "取絕對值得 8。"
    },
    {
      "mistake": "由 |a-7|=4 只得 a=11。",
      "why": "只考慮右側。",
      "correction": "還要有左側 a=3。"
    },
    {
      "mistake": "兩點斜向仍直接用單一坐標差。",
      "why": "未檢查對齊條件。",
      "correction": "本節公式只適用同 x 或同 y。"
    },
    {
      "mistake": "把坐標差當成坐標。",
      "why": "混淆位置與長度。",
      "correction": "答案是單一非負長度，不寫成有序數對。"
    }
  ],
  "selfCheck": [
    "我是否先確認同 x 或同 y？",
    "水平是否只比較 x？",
    "距離是否取絕對值？",
    "反推時是否考慮兩側？"
  ],
  "summary": [
    "同 y 求水平距離 |x1-x2|。",
    "同 x 求垂直距離 |y1-y2|。",
    "距離永遠非負。",
    "反推距離常有兩個位置。"
  ],
  "connections": {
    "previous": "承接點的平移，可把距離視為需要移動的單位數。",
    "next": [
      "下一節用水平距離與垂直距離求長方形邊長。",
      "不引入高中解析幾何的一般距離公式。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s006-v001",
      "u05-s006-v002",
      "u05-s006-v003",
      "u05-s006-v004",
      "u05-s006-v005",
      "u05-s006-v006",
      "u05-s006-v007",
      "u05-s006-v008",
      "u05-s006-v009",
      "u05-s006-v010",
      "u05-s006-v011",
      "u05-s006-v012"
    ],
    "constructedResponseIds": [
      "u05-s006-cr001",
      "u05-s006-cr002"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本講義依鎖定範圍採全文字描述；方向、順序與方程式均以可由螢幕閱讀器理解的完整句子表達。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "Taiwan junior-high CAP coordinate geometry only",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "futureUnitKnowledgeAvoided": true,
    "reviewNote": "逐題檢查同 x、同 y 的前提及絕對值；兩個反推例題均列出左右或上下兩解，並確認未誤用一般斜距公式。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "7b2c6f8b4e87bbbf7b3e61661a6c991b52c633799902b7bc26e06682cadc9a05",
  "concept": "兩點若縱坐標相同，連線是水平線段，長度只取兩個橫坐標差的絕對值；若橫坐標相同，連線是垂直線段，長度只取兩個縱坐標差的絕對值。絕對值確保距離非負，跨越零時要完整計算兩端之差。由距離反推未知坐標時，點可能位於已知點的兩側，因此通常有兩個解。情境題還需把坐標格數依每格尺度換成公尺或公里。"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s006-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "A=(-2,5)、B=(7,5)，線段 AB 的長度為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "求水平線段長度",
    "choices": [
      "5",
      "9",
      "7",
      "12"
    ],
    "answerIndex": 1,
    "independentSolution": "兩點 y 相同，AB 水平；長度為 |7-(-2)|=9。",
    "explanation": "A、B兩點的縱坐標都等於五，所以線段水平，長度只比較橫坐標。從負二到七會跨過零，距離為七減負二等於九，或寫成橫坐標差的絕對值九；共同的縱坐標五不是長度。",
    "steps": [
      "比較兩點縱坐標，確認同為5且線段水平。",
      "計算橫坐標差7－(-2)＝9。",
      "取非負長度9，並排除把共同縱坐標當答案。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "誤取共同的 y。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "|7+2|=9。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "只取較大橫坐標。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把兩坐標絕對值與 y 混加。"
      }
    ],
    "misconceptionTarget": "同 y 時仍比較 y，或跨越 0 時漏加。",
    "prerequisiteCheck": "需會整數差與絕對值。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩點同 y，公式適用。",
    "difficultyReason": "單一絕對差，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "求水平線段長度",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "322f7c6f74c2c9a66b2c01c11025c3f1c641b9e19f951d6d50c90f0314b9f40c",
    "commonMistake": "線段跨越零時把七與負二的距離誤算成絕對值之差五。"
  },
  {
    "questionId": "u05-s006-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "C=(4,-6)、D=(4,3)，CD 的長度為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "求垂直線段長度",
    "choices": [
      "9",
      "3",
      "4",
      "10"
    ],
    "answerIndex": 0,
    "independentSolution": "兩點 x 相同，CD 垂直；|-6-3|=9。",
    "explanation": "C、D的橫坐標都等於四，表示兩點垂直對齊，距離要比較縱坐標。從負六到三跨越零，共有六加三等於九個單位，也可算三減負六等於九；共同橫坐標四不參與長度。",
    "steps": [
      "確認兩點橫坐標相同，線段為垂直方向。",
      "計算縱坐標差3－(-6)＝9。",
      "將非負距離寫成9單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": true,
        "reason": "垂直距離正確。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "只取較大 y。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "誤取共同 x。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "差值計算錯誤。"
      }
    ],
    "misconceptionTarget": "垂直距離誤用 x 坐標。",
    "prerequisiteCheck": "需會到相同軸方向的坐標差。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩點同 x。",
    "difficultyReason": "單一絕對差，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "求垂直線段長度",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4e45b71d702438c2f79db50dfda5ebaa80918b1b12d30278d4f8fdd518f708e7",
    "commonMistake": "垂直線段仍拿橫坐標相減，或把共同的四直接當成距離。"
  },
  {
    "questionId": "u05-s006-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "下列哪一對點的連線是水平線段？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "辨認水平對齊",
    "choices": [
      "(1,-3) 與 (1,6)",
      "(-3,1) 與 (6,-3)",
      "(0,0) 與 (4,5)",
      "(1,-3) 與 (6,-3)"
    ],
    "answerIndex": 3,
    "independentSolution": "水平線段的兩端點 y 坐標相同；只有 (1,-3) 與 (6,-3) 的 y 都是 -3。",
    "explanation": "水平線段上的每一點縱坐標相同，因此兩端點必須同y而x可以不同。四組中只有(1,-3)與(6,-3)的第二分量都為負三；第一組同x形成垂直線，其餘兩組兩分量皆不同。",
    "steps": [
      "回憶水平線段的判準是兩端點y坐標相同。",
      "逐組比較每個有序數對的第二分量。",
      "選出y皆為-3且x不同的(1,-3)與(6,-3)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(1,-3) 與 (1,6)",
        "truth": false,
        "reason": "同 x，線段垂直。"
      },
      {
        "choice": "(-3,1) 與 (6,-3)",
        "truth": false,
        "reason": "兩分量都不同。"
      },
      {
        "choice": "(0,0) 與 (4,5)",
        "truth": false,
        "reason": "兩分量都不同。"
      },
      {
        "choice": "(1,-3) 與 (6,-3)",
        "truth": true,
        "reason": "同 y，線段水平。"
      }
    ],
    "misconceptionTarget": "把同 x 誤認成水平。",
    "prerequisiteCheck": "需分清水平同 y。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "候選點均不同，沒有零長度線段。",
    "difficultyReason": "直接辨認不變分量，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認水平對齊",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "0d006e347c9c0423bc6e5829f9d9f41230ee54d4c065fb7351cca96dbe36013c",
    "commonMistake": "把同x的兩點誤判為水平，其實固定橫坐標形成的是垂直線段。"
  },
  {
    "questionId": "u05-s006-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "P=(a,2) 與 Q=(5,2) 的水平距離為 8，a 可能為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "反推水平距離的兩個位置",
    "choices": [
      "只有 13",
      "只有 -3",
      "13 或 -3",
      "8 或 -8"
    ],
    "answerIndex": 2,
    "independentSolution": "由 |a-5|=8，得 a-5=8 或 -8，所以 a=13 或 -3。",
    "explanation": "兩點同y，水平距離為橫坐標差的絕對值，所以列|a－5|＝8。P可能在Q右方八單位，得到a＝13；也可能在Q左方八單位，得到a＝-3。距離沒有方向，兩側都必須列入。",
    "steps": [
      "依同y建立水平距離式|a－5|＝8。",
      "分成a－5＝8與a－5＝-8兩種情況。",
      "分別求得a＝13與a＝-3，代回確認距離皆為8。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有 13",
        "truth": false,
        "reason": "漏掉左側。"
      },
      {
        "choice": "只有 -3",
        "truth": false,
        "reason": "漏掉右側。"
      },
      {
        "choice": "13 或 -3",
        "truth": true,
        "reason": "兩點分別在 Q 右 8 或左 8。"
      },
      {
        "choice": "8 或 -8",
        "truth": false,
        "reason": "未以 Q 的 x=5 為中心。"
      }
    ],
    "misconceptionTarget": "由距離反推時把 0 當中心。",
    "prerequisiteCheck": "需會絕對值與左右方向。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "距離為正，兩個位置皆合法且 y 已相同。",
    "difficultyReason": "需解絕對值方程式，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "反推水平距離的兩個位置",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b61e3439efb0d12fc0b8d2a997c47850b73cc44c6455f69ecef3cfbfb1e35e2c",
    "commonMistake": "由距離反推時只取右側一解，或錯把零當成兩個可能位置的中心。"
  },
  {
    "questionId": "u05-s006-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "R=(-4,b) 與 S=(-4,-1) 的垂直距離為 5。下列哪組為 b 的所有可能值？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "反推垂直坐標",
    "choices": [
      "5、-5",
      "4、6",
      "-4、-6",
      "4、-6"
    ],
    "answerIndex": 3,
    "independentSolution": "由 |b-(-1)|=|b+1|=5，得 b=4 或 b=-6。",
    "explanation": "R、S同x，所以垂直距離是縱坐標差的絕對值：|b－(-1)|＝|b＋1|＝5。R可在S上方五單位，b＝4；也可在S下方五單位，b＝-6，因此所有可能值是四與負六。兩個位置分居已知點上下兩側，代回距離都等於五。",
    "steps": [
      "以已知縱坐標-1為中心列|b＋1|＝5。",
      "解b＋1＝5得到b＝4。",
      "解b＋1＝-5得到b＝-6，核對兩者距離。"
    ],
    "optionAnalysis": [
      {
        "choice": "5、-5",
        "truth": false,
        "reason": "錯以 0 為中心。"
      },
      {
        "choice": "4、6",
        "truth": false,
        "reason": "第二個方向符號錯。"
      },
      {
        "choice": "-4、-6",
        "truth": false,
        "reason": "第一值距 -1 只有 3。"
      },
      {
        "choice": "4、-6",
        "truth": true,
        "reason": "距 -1 各 5。"
      }
    ],
    "misconceptionTarget": "絕對值兩解沒有以已知點為中心。",
    "prerequisiteCheck": "需會整數絕對值方程式。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩點同 x，垂直距離公式適用。",
    "difficultyReason": "需正確處理負中心，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "反推垂直坐標",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "05ecf5e4c2cae66227b0d2c3b6ca96ae7da1b2f311936d7938add22714ae7729",
    "commonMistake": "展開絕對值時漏掉負分支，或以零為中心錯寫成正負五。"
  },
  {
    "questionId": "u05-s006-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "A=(2,7)、B=(2,-5)、C=(-3,-5)。路線 A→B→C 的總長度為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "計算水平垂直折線總長",
    "choices": [
      "12",
      "17",
      "5",
      "22"
    ],
    "answerIndex": 1,
    "independentSolution": "AB 垂直長 |7-(-5)|=12；BC 水平長 |2-(-3)|=5；總長 17。",
    "explanation": "A到B的橫坐標相同，是垂直線段，長度為七到負五的距離十二；B到C的縱坐標相同，是水平線段，長度為二到負三的距離五。折線總路程要分段相加，得到十二加五等於十七。",
    "steps": [
      "計算垂直段AB：|7－(-5)|＝12。",
      "計算水平段BC：|2－(-3)|＝5。",
      "把兩段長度相加，12＋5＝17單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "漏掉 BC。"
      },
      {
        "choice": "17",
        "truth": true,
        "reason": "兩段格線距離相加。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "只算 BC。"
      },
      {
        "choice": "22",
        "truth": false,
        "reason": "重複或錯加距離。"
      }
    ],
    "misconceptionTarget": "把起點終點的單一坐標差當成折線總長。",
    "prerequisiteCheck": "需會兩種軸平行距離。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目問沿 A→B→C 路線，不是 A 到 C 的斜向距離。",
    "difficultyReason": "需分段計算與相加，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "計算水平垂直折線總長",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "528f3cc4506a2cd104bed4f2e3df9eefb023d1347663858d6aaf1e6949e08e46",
    "commonMistake": "只比較起點與終點的一個坐標差，漏掉折線中間實際走過的另一段。"
  },
  {
    "questionId": "u05-s006-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若 A=(x,4)、B=(-2,4) 的距離小於 3，則 x 的範圍為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由水平距離限制求範圍",
    "choices": [
      "x<-5 或 x>1",
      "-3<x<3",
      "-5<x<1",
      "-2<x<3"
    ],
    "answerIndex": 2,
    "independentSolution": "水平距離 |x+2|<3，得到 -3<x+2<3，再減 2 得 -5<x<1。",
    "explanation": "兩點同y，距離為|x－(-2)|＝|x＋2|。距離小於三表示x位於中心負二左右三單位之內，因此-3＜x＋2＜3；三邊同減二後得到-5＜x＜1，端點因為是小於而不包含。",
    "steps": [
      "以B的橫坐標-2為中心列|x＋2|＜3。",
      "把絕對值不等式改寫成-3＜x＋2＜3。",
      "三邊同減2，得到開區間-5＜x＜1。"
    ],
    "optionAnalysis": [
      {
        "choice": "x<-5 或 x>1",
        "truth": false,
        "reason": "這是距離大於 3。"
      },
      {
        "choice": "-3<x<3",
        "truth": false,
        "reason": "忘記中心是 -2。"
      },
      {
        "choice": "-5<x<1",
        "truth": true,
        "reason": "以 -2 為中心、半徑 3 的開區間。"
      },
      {
        "choice": "-2<x<3",
        "truth": false,
        "reason": "只保留右側。"
      }
    ],
    "misconceptionTarget": "把距離範圍以 0 為中心或不等號方向錯。",
    "prerequisiteCheck": "需會一元一次不等式。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "『小於 3』不含端點，所以使用嚴格不等式。",
    "difficultyReason": "需解絕對值不等式，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由水平距離限制求範圍",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "a77271bfcae25aa122c74dcffbaaecec2814078edf865b0c72b4e2a26a5a6def",
    "commonMistake": "把距離區間錯以零為中心，或把小於三解成區間外的兩段範圍。"
  },
  {
    "questionId": "u05-s006-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 P=(m,1)、Q=(m,2m-3) 的垂直距離為 8，m 的值可能為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "含參數垂直距離方程式",
    "choices": [
      "6 或 -2",
      "4 或 -4",
      "6 或 2",
      "5 或 -3"
    ],
    "answerIndex": 0,
    "independentSolution": "距離為 |(2m-3)-1|=|2m-4|=8。故 2m-4=8 或 -8，得 m=6 或 -2。",
    "explanation": "P、Q同x，所以垂直距離是|(2m－3)－1|＝|2m－4|。令它等於八，要分成2m－4＝8與2m－4＝-8，分別得到m＝6與m＝-2；兩值代入後的縱坐標差都為八。正、負分支代表Q位於P上方或下方的兩種可能位置。",
    "steps": [
      "由同x建立垂直距離式|2m－4|＝8。",
      "解正分支2m－4＝8，得到m＝6。",
      "解負分支2m－4＝-8，得到m＝-2並代回。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 或 -2",
        "truth": true,
        "reason": "兩值均使距離為 8。"
      },
      {
        "choice": "4 或 -4",
        "truth": false,
        "reason": "代入距離分別為 4、12。"
      },
      {
        "choice": "6 或 2",
        "truth": false,
        "reason": "m=2 時距離 0。"
      },
      {
        "choice": "5 或 -3",
        "truth": false,
        "reason": "兩者距離皆非 8。"
      }
    ],
    "misconceptionTarget": "省略絕對值的負分支。",
    "prerequisiteCheck": "需會代數式絕對值。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩點 x 均為 m，所以確實垂直對齊。",
    "difficultyReason": "需化簡後解雙分支方程式，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "含參數垂直距離方程式",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "44a8c71456a3d9e7b66be72d6533020efc5bf853062f7483ee9d8da2f1b8f580",
    "commonMistake": "移除絕對值時只保留正八，因而漏掉m等於負二的另一個位置。"
  },
  {
    "questionId": "u05-s006-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "長方形的一條水平邊端點為 (-a,3) 與 (a,3)，邊長為 10 且 a>0，求 a。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "利用對稱坐標求半距",
    "choices": [
      "2",
      "10",
      "5",
      "20"
    ],
    "answerIndex": 2,
    "independentSolution": "水平距離 |-a-a|=|-2a|=2a。由 2a=10 得 a=5。",
    "explanation": "兩端點同y，水平距離為|a－(-a)|＝|2a|。題目已給a大於零，所以|2a|＝2a；由2a＝10可得a＝5。此時兩端橫坐標為負五與正五，距離確實是十，且符合題目要求的正數條件。",
    "steps": [
      "計算橫坐標差a－(-a)＝2a。",
      "利用a＞0把距離寫成2a＝10。",
      "解得a＝5，代回端點-5與5核對距離。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "距離只有 4。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "距離會是 20。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "兩端為 -5 與 5，距離 10。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "距離會是 40。"
      }
    ],
    "misconceptionTarget": "把對稱兩端的距離只算成 a。",
    "prerequisiteCheck": "需會絕對值與一元方程式。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "a>0 排除符號不確定；兩點同 y。",
    "difficultyReason": "需由代數端點建立距離，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "利用對稱坐標求半距",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8ab9d1c68a11fae10d7feff71288225245c3a6d2d105cd26a8ee5854c9efac37",
    "commonMistake": "看到端點是負a與a，卻只算成a而漏掉左右兩側各一段。"
  },
  {
    "questionId": "u05-s006-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "公園地圖每格 15 公尺，入口 A=(-2,1) 與廁所 B=(4,1) 位於同一水平步道。步道長多少公尺？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "將水平格距換算實際長度",
    "choices": [
      "90 公尺",
      "6 公尺",
      "60 公尺",
      "105 公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "水平距離為 |4-(-2)|=6 格；6×15=90 公尺。",
    "explanation": "A、B同y，水平格數為四減負二等於六格。地圖每一格代表十五公尺，因此實際步道長為6×15＝90公尺。必須先算完整的跨零格數，再依比例換算，不能把六格直接標成六公尺。",
    "steps": [
      "確認兩點同y，計算水平距離4－(-2)＝6格。",
      "使用比例每格15公尺，列6×15。",
      "算得90公尺並保留實際長度單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "90 公尺",
        "truth": true,
        "reason": "格數與比例換算正確。"
      },
      {
        "choice": "6 公尺",
        "truth": false,
        "reason": "把格數直接當公尺。"
      },
      {
        "choice": "60 公尺",
        "truth": false,
        "reason": "只用 4 格換算。"
      },
      {
        "choice": "105 公尺",
        "truth": false,
        "reason": "誤算成 7 格。"
      }
    ],
    "misconceptionTarget": "跨越原點漏算，或忘記比例。",
    "prerequisiteCheck": "需會水平距離。",
    "estimatedTimeSec": 150,
    "unitCheck": "6 格×15 公尺/格，最終單位公尺。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩點同 y，步道為水平且每格等長。",
    "difficultyReason": "情境比例是必要第二步。",
    "literacyContextNecessity": "每格 15 公尺的比例把抽象水平坐標差轉成實際步道長度，若刪除比例就無法得到公尺答案。",
    "authoringIntent": "將水平格距換算實際長度",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "cf426ec111548e6e5cc266d07842fa44e53e90832c0788c30b4bcc9f0ac934a1",
    "commonMistake": "跨越原點時漏掉負二到零的兩格，或把地圖格數直接當成公尺。"
  },
  {
    "questionId": "u05-s006-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "大樓樓層剖面以地面為 y=0，每一坐標單位代表 3 公尺。設備 A=(2,-4)、B=(2,5) 垂直對齊，兩設備高度差為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "計算跨地面的實際高度差",
    "choices": [
      "9 公尺",
      "27 公尺",
      "3 公尺",
      "15 公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "垂直距離 |-4-5|=9 單位；9×3=27 公尺。",
    "explanation": "兩設備橫坐標相同，垂直坐標從負四到五，共跨九個坐標單位。每單位代表三公尺，所以高度差為9×3＝27公尺。地下負四與地上正五要跨越地面相加，不能只做兩個絕對值的差。",
    "steps": [
      "確認A、B同x，計算垂直距離|5－(-4)|＝9單位。",
      "依每單位3公尺換算，列9×3。",
      "得到27公尺，核對已包含地下與地上兩段。"
    ],
    "optionAnalysis": [
      {
        "choice": "9 公尺",
        "truth": false,
        "reason": "漏乘 3。"
      },
      {
        "choice": "27 公尺",
        "truth": true,
        "reason": "垂直差與比例均正確。"
      },
      {
        "choice": "3 公尺",
        "truth": false,
        "reason": "只回報每單位長度。"
      },
      {
        "choice": "15 公尺",
        "truth": false,
        "reason": "只使用上方 5 單位。"
      }
    ],
    "misconceptionTarget": "把地下與地上高度做絕對值之差而非跨越相加。",
    "prerequisiteCheck": "需會垂直距離與比例。",
    "estimatedTimeSec": 150,
    "unitCheck": "9 單位×3 公尺/單位。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩設備同 x，垂直距離適用。",
    "difficultyReason": "需處理負高度與比例換算。",
    "literacyContextNecessity": "地面基準、地下負值與每單位 3 公尺共同決定真實高度差。",
    "authoringIntent": "計算跨地面的實際高度差",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f6f3f42a31d2758d215b4b5c51b1f0e7a0dc5cdf13dbf506a38aa23b6d087be4",
    "commonMistake": "把地下四公尺與地上五公尺做絕對值相減，漏算跨越地面的完整距離。"
  },
  {
    "questionId": "u05-s006-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "配送車沿格線由倉庫 (1,-2) 先垂直到 (1,4)，再水平到 (-5,4)。每格 200 公尺，總路程為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "計算折線配送路程並換單位",
    "choices": [
      "1.2 公里",
      "2.0 公里",
      "12 公里",
      "2.4 公里"
    ],
    "answerIndex": 3,
    "independentSolution": "第一段 6 格，第二段 6 格，共 12 格；12×200=2400 公尺=2.4 公里。",
    "explanation": "第一段同x，從縱坐標負二到四走六格；第二段同y，從橫坐標一到負五也走六格，合計十二格。每格二百公尺，總路程為2400公尺，再除以一千換成2.4公里。",
    "steps": [
      "算垂直段|-2－4|＝6格。",
      "算水平段|1－(-5)|＝6格，合計12格。",
      "計算12×200＝2400公尺＝2.4公里。"
    ],
    "optionAnalysis": [
      {
        "choice": "1.2 公里",
        "truth": false,
        "reason": "只算一段。"
      },
      {
        "choice": "2.0 公里",
        "truth": false,
        "reason": "公尺轉公里錯誤。"
      },
      {
        "choice": "12 公里",
        "truth": false,
        "reason": "把格數直接當公里。"
      },
      {
        "choice": "2.4 公里",
        "truth": true,
        "reason": "路線與單位換算完整。"
      }
    ],
    "misconceptionTarget": "漏算一段或公尺公里換算錯。",
    "prerequisiteCheck": "需會分段距離與公制換算。",
    "estimatedTimeSec": 150,
    "unitCheck": "12×200=2400 公尺，再除以 1000 得 2.4 公里。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "路線指定垂直後水平，不求斜線最短距離。",
    "difficultyReason": "多段距離與兩次單位換算構成素養整合。",
    "literacyContextNecessity": "配送路線、每格 200 公尺與公里作答要求都直接影響計算。",
    "authoringIntent": "計算折線配送路程並換單位",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "23e3f95b58ab9107cb2bae14aaeb1c29a285fac4dd1d77c47be9c61e589f41ee",
    "commonMistake": "只算其中一段路程，或把二千四百公尺錯換成二十四或十二公里。"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s006-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "點 A=(-6,3)、B=(4,3)、C=(4,-2)。求折線 A→B→C 的總長度。",
    "requiredWork": [
      "分別求 AB、BC。",
      "相加並標示單位。"
    ],
    "fullCreditSolution": [
      "A、B的縱坐標同為三，所以AB是水平線段；長度為|4－(-6)|＝10單位。",
      "B、C的橫坐標同為四，所以BC是垂直線段；長度為|3－(-2)|＝5單位。",
      "折線A到B再到C的總長度是兩段實際路程相加，10＋5＝15單位。",
      "檢查兩段皆為非負長度，且沒有把起點到終點的單一坐標差當作折線總路程。"
    ],
    "alternativeSolutions": [
      "可由格線移動描述：向右 10，再向下 5。"
    ],
    "reasoningSteps": [
      "先依同y判定AB水平，使用橫坐標差求長度。",
      "再依同x判定BC垂直，使用縱坐標差求長度。",
      "將兩段非負距離相加，得到折線總長。",
      "核對答案單位為長度而不是坐標。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "AB=10、BC=5、總長 15 均正確且說明水平垂直。"
      },
      {
        "score": 2,
        "criteria": "總長正確但分段理由不足，或一段算錯而另一段與加法正確。"
      },
      {
        "score": 1,
        "criteria": "只正確求出一段距離。"
      },
      {
        "score": 0,
        "criteria": "直接用兩端 A、C 的坐標相加，未依指定折線。"
      }
    ],
    "partialCreditRules": [
      "題目問折線路程，不能改求 A 到 C 的其他距離。"
    ],
    "followThroughPolicy": "若其中一段距離算錯，但另一段使用同 y 或同 x 的坐標差正確，且總長以兩段相加，依正確部分給分。",
    "unitAndNotationRules": "AB、BC 均為長度，最後答案寫「15 單位」；坐標差取絕對值，不得保留負長度。",
    "answerOnlyPolicy": "只寫 15 而沒有分別求水平段與垂直段，最高給 2 分。",
    "commonErrors": [
      "計算負六到四時把跨越零的距離誤算成二，沒有用四減負六。",
      "只算AB或只比較A、C的坐標，漏掉折線實際經過的BC段。"
    ],
    "independentReview": {
      "derivedResult": "若 AB 算錯但學生以自己的 AB 正確加上 BC，保留後續加法方法分。",
      "ambiguity": "長度以單位表示，不寫成坐標。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若 AB 算錯但學生以自己的 AB 正確加上 BC，保留後續加法方法分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "065f215ee47f463b4e244d8c4f5d207cb2a5305712bad09fbfea078d58083723"
  },
  {
    "questionId": "u05-s006-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "點 P=(a,-1) 與 Q=(5,-1) 的水平距離為 7。求所有 a，並用位置語言說明兩個答案。",
    "requiredWork": [
      "建立絕對值方程式。",
      "求兩個解。",
      "說明左右位置。"
    ],
    "fullCreditSolution": [
      "P、Q的縱坐標同為負一，所以水平距離由橫坐標決定，列|a－5|＝7。",
      "第一種情況a－5＝7，得到a＝12；P位於Q的右方七單位。",
      "第二種情況a－5＝-7，得到a＝-2；P位於Q的左方七單位。",
      "代回可得|12－5|＝7與|-2－5|＝7，所以所有答案為a＝12或-2。"
    ],
    "alternativeSolutions": [
      "可直接從 x=5 向右、向左各走 7，得到 12 與 -2。"
    ],
    "reasoningSteps": [
      "確認兩點同y並建立水平距離的絕對值方程式。",
      "分別解絕對值的正分支與負分支。",
      "把兩個數值翻成Q右方與左方的位置語言。",
      "將兩值代回原距離式，確認沒有漏解。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "得到 a=12、-2，並正確說明右方與左方。"
      },
      {
        "score": 2,
        "criteria": "兩解正確但位置說明不足，或漏一解但方法完整。"
      },
      {
        "score": 1,
        "criteria": "列出 |a-5|=7 但解絕對值錯。"
      },
      {
        "score": 0,
        "criteria": "只寫 a=7 或 ±7，未以 5 為中心。"
      }
    ],
    "partialCreditRules": [
      "兩解順序不拘。"
    ],
    "followThroughPolicy": "若解 |a-5|=7 時只得到一個分支，該分支與位置說明正確可得部分分；另一分支遺漏不影響已完成分支的方法分。",
    "unitAndNotationRules": "答案寫 a=12 或 a=-2；位置語言分別為 Q 右方 7 單位與左方 7 單位。",
    "answerOnlyPolicy": "只寫 12、-2 而沒有左右位置說明，最高給 2 分。",
    "commonErrors": [
      "錯以原點為中心寫a等於正負七，沒有以Q的橫坐標五為中心。",
      "只解a－5＝7而漏掉負分支，因而沒有得到左方的a＝-2。"
    ],
    "independentReview": {
      "derivedResult": "若一個分支算術錯，另一分支正確，依完成程度給 1～2 分。",
      "ambiguity": "a 為橫坐標；距離 7 非負。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若一個分支算術錯，另一分支正確，依完成程度給 1～2 分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "81351f8699efd1cc77016d71590b6758d8dece87d3f612506c2b60c75d724c28"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s006-v001",
    "contentSha256": "322f7c6f74c2c9a66b2c01c11025c3f1c641b9e19f951d6d50c90f0314b9f40c",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "兩點 y 相同，AB 水平；長度為 |7-(-2)|=9。",
    "derivedAnswer": "9",
    "storedAnswer": "9",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「9」；其餘三項逐項檢查：「5」不成立，誤取共同的 y。；「7」不成立，只取較大橫坐標。；「12」不成立，把兩坐標絕對值與 y 混加。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「水平距離與垂直距離」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩點同 y，公式適用。",
      "alternateReading": "常見誤讀是「同 y 時仍比較 y，或跨越 0 時漏加。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "單一絕對差，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會整數差與絕對值。",
    "languageCheck": "題幹所求為「求水平線段長度」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「A=(-2,5)、B=(7,5)，線段 AB 的長度為何？」重新依序處理：兩點 y 相同，AB 水平；長度為 |7-(-2)|=9。 正確選項為「9」。三個干擾項均對應不同錯誤：「5」不成立，誤取共同的 y。；「7」不成立，只取較大橫坐標。；「12」不成立，把兩坐標絕對值與 y 混加。。邊界審查：兩點同 y，公式適用。 難度理由：單一絕對差，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s006-v002",
    "contentSha256": "4e45b71d702438c2f79db50dfda5ebaa80918b1b12d30278d4f8fdd518f708e7",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "兩點 x 相同，CD 垂直；|-6-3|=9。",
    "derivedAnswer": "9",
    "storedAnswer": "9",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「9」；其餘三項逐項檢查：「3」不成立，只取較大 y。；「4」不成立，誤取共同 x。；「10」不成立，差值計算錯誤。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「水平距離與垂直距離」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩點同 x。",
      "alternateReading": "常見誤讀是「垂直距離誤用 x 坐標。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "單一絕對差，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會到相同軸方向的坐標差。",
    "languageCheck": "題幹所求為「求垂直線段長度」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「C=(4,-6)、D=(4,3)，CD 的長度為何？」重新依序處理：兩點 x 相同，CD 垂直；|-6-3|=9。 正確選項為「9」。三個干擾項均對應不同錯誤：「3」不成立，只取較大 y。；「4」不成立，誤取共同 x。；「10」不成立，差值計算錯誤。。邊界審查：兩點同 x。 難度理由：單一絕對差，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s006-v003",
    "contentSha256": "0d006e347c9c0423bc6e5829f9d9f41230ee54d4c065fb7351cca96dbe36013c",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "水平線段的兩端點 y 坐標相同；只有 (1,-3) 與 (6,-3) 的 y 都是 -3。",
    "derivedAnswer": "(1,-3) 與 (6,-3)",
    "storedAnswer": "(1,-3) 與 (6,-3)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(1,-3) 與 (6,-3)」；其餘三項逐項檢查：「(1,-3) 與 (1,6)」不成立，同 x，線段垂直。；「(-3,1) 與 (6,-3)」不成立，兩分量都不同。；「(0,0) 與 (4,5)」不成立，兩分量都不同。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「水平距離與垂直距離」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "候選點均不同，沒有零長度線段。",
      "alternateReading": "常見誤讀是「把同 x 誤認成水平。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "直接辨認不變分量，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需分清水平同 y。",
    "languageCheck": "題幹所求為「辨認水平對齊」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「下列哪一對點的連線是水平線段？」重新依序處理：水平線段的兩端點 y 坐標相同；只有 (1,-3) 與 (6,-3) 的 y 都是 -3。 正確選項為「(1,-3) 與 (6,-3)」。三個干擾項均對應不同錯誤：「(1,-3) 與 (1,6)」不成立，同 x，線段垂直。；「(-3,1) 與 (6,-3)」不成立，兩分量都不同。；「(0,0) 與 (4,5)」不成立，兩分量都不同。。邊界審查：候選點均不同，沒有零長度線段。 難度理由：直接辨認不變分量，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s006-v004",
    "contentSha256": "b61e3439efb0d12fc0b8d2a997c47850b73cc44c6455f69ecef3cfbfb1e35e2c",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "由 |a-5|=8，得 a-5=8 或 -8，所以 a=13 或 -3。",
    "derivedAnswer": "13 或 -3",
    "storedAnswer": "13 或 -3",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「13 或 -3」；其餘三項逐項檢查：「只有 13」不成立，漏掉左側。；「只有 -3」不成立，漏掉右側。；「8 或 -8」不成立，未以 Q 的 x=5 為中心。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「水平距離與垂直距離」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "距離為正，兩個位置皆合法且 y 已相同。",
      "alternateReading": "常見誤讀是「由距離反推時把 0 當中心。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需解絕對值方程式，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會絕對值與左右方向。",
    "languageCheck": "題幹所求為「反推水平距離的兩個位置」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「P=(a,2) 與 Q=(5,2) 的水平距離為 8，a 可能為何？」重新依序處理：由 |a-5|=8，得 a-5=8 或 -8，所以 a=13 或 -3。 正確選項為「13 或 -3」。三個干擾項均對應不同錯誤：「只有 13」不成立，漏掉左側。；「只有 -3」不成立，漏掉右側。；「8 或 -8」不成立，未以 Q 的 x=5 為中心。。邊界審查：距離為正，兩個位置皆合法且 y 已相同。 難度理由：需解絕對值方程式，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s006-v005",
    "contentSha256": "05ecf5e4c2cae66227b0d2c3b6ca96ae7da1b2f311936d7938add22714ae7729",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "由 |b-(-1)|=|b+1|=5，得 b=4 或 b=-6。",
    "derivedAnswer": "4、-6",
    "storedAnswer": "4、-6",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「4、-6」；其餘三項逐項檢查：「5、-5」不成立，錯以 0 為中心。；「4、6」不成立，第二個方向符號錯。；「-4、-6」不成立，第一值距 -1 只有 3。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「水平距離與垂直距離」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩點同 x，垂直距離公式適用。",
      "alternateReading": "常見誤讀是「絕對值兩解沒有以已知點為中心。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需正確處理負中心，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會整數絕對值方程式。",
    "languageCheck": "題幹所求為「反推垂直坐標」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「R=(-4,b) 與 S=(-4,-1) 的垂直距離為 5。下列哪組為 b 的所有可能值？」重新依序處理：由 |b-(-1)|=|b+1|=5，得 b=4 或 b=-6。 正確選項為「4、-6」。三個干擾項均對應不同錯誤：「5、-5」不成立，錯以 0 為中心。；「4、6」不成立，第二個方向符號錯。；「-4、-6」不成立，第一值距 -1 只有 3。。邊界審查：兩點同 x，垂直距離公式適用。 難度理由：需正確處理負中心，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s006-v006",
    "contentSha256": "528f3cc4506a2cd104bed4f2e3df9eefb023d1347663858d6aaf1e6949e08e46",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "AB 垂直長 |7-(-5)|=12；BC 水平長 |2-(-3)|=5；總長 17。",
    "derivedAnswer": "17",
    "storedAnswer": "17",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「17」；其餘三項逐項檢查：「12」不成立，漏掉 BC。；「5」不成立，只算 BC。；「22」不成立，重複或錯加距離。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「水平距離與垂直距離」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目問沿 A→B→C 路線，不是 A 到 C 的斜向距離。",
      "alternateReading": "常見誤讀是「把起點終點的單一坐標差當成折線總長。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需分段計算與相加，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會兩種軸平行距離。",
    "languageCheck": "題幹所求為「計算水平垂直折線總長」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「A=(2,7)、B=(2,-5)、C=(-3,-5)。路線 A→B→C 的總長度為何？」重新依序處理：AB 垂直長 |7-(-5)|=12；BC 水平長 |2-(-3)|=5；總長 17。 正確選項為「17」。三個干擾項均對應不同錯誤：「12」不成立，漏掉 BC。；「5」不成立，只算 BC。；「22」不成立，重複或錯加距離。。邊界審查：題目問沿 A→B→C 路線，不是 A 到 C 的斜向距離。 難度理由：需分段計算與相加，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s006-v007",
    "contentSha256": "a77271bfcae25aa122c74dcffbaaecec2814078edf865b0c72b4e2a26a5a6def",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "水平距離 |x+2|<3，得到 -3<x+2<3，再減 2 得 -5<x<1。",
    "derivedAnswer": "-5<x<1",
    "storedAnswer": "-5<x<1",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「-5<x<1」；其餘三項逐項檢查：「x<-5 或 x>1」不成立，這是距離大於 3。；「-3<x<3」不成立，忘記中心是 -2。；「-2<x<3」不成立，只保留右側。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「水平距離與垂直距離」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "『小於 3』不含端點，所以使用嚴格不等式。",
      "alternateReading": "常見誤讀是「把距離範圍以 0 為中心或不等號方向錯。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需解絕對值不等式，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會一元一次不等式。",
    "languageCheck": "題幹所求為「由水平距離限制求範圍」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若 A=(x,4)、B=(-2,4) 的距離小於 3，則 x 的範圍為何？」重新依序處理：水平距離 |x+2|<3，得到 -3<x+2<3，再減 2 得 -5<x<1。 正確選項為「-5<x<1」。三個干擾項均對應不同錯誤：「x<-5 或 x>1」不成立，這是距離大於 3。；「-3<x<3」不成立，忘記中心是 -2。；「-2<x<3」不成立，只保留右側。。邊界審查：『小於 3』不含端點，所以使用嚴格不等式。 難度理由：需解絕對值不等式，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s006-v008",
    "contentSha256": "44a8c71456a3d9e7b66be72d6533020efc5bf853062f7483ee9d8da2f1b8f580",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "距離為 |(2m-3)-1|=|2m-4|=8。故 2m-4=8 或 -8，得 m=6 或 -2。",
    "derivedAnswer": "6 或 -2",
    "storedAnswer": "6 或 -2",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「6 或 -2」；其餘三項逐項檢查：「4 或 -4」不成立，代入距離分別為 4、12。；「6 或 2」不成立，m=2 時距離 0。；「5 或 -3」不成立，兩者距離皆非 8。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「水平距離與垂直距離」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩點 x 均為 m，所以確實垂直對齊。",
      "alternateReading": "常見誤讀是「省略絕對值的負分支。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需化簡後解雙分支方程式，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代數式絕對值。",
    "languageCheck": "題幹所求為「含參數垂直距離方程式」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 P=(m,1)、Q=(m,2m-3) 的垂直距離為 8，m 的值可能為何？」重新依序處理：距離為 |(2m-3)-1|=|2m-4|=8。故 2m-4=8 或 -8，得 m=6 或 -2。 正確選項為「6 或 -2」。三個干擾項均對應不同錯誤：「4 或 -4」不成立，代入距離分別為 4、12。；「6 或 2」不成立，m=2 時距離 0。；「5 或 -3」不成立，兩者距離皆非 8。。邊界審查：兩點 x 均為 m，所以確實垂直對齊。 難度理由：需化簡後解雙分支方程式，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s006-v009",
    "contentSha256": "8ab9d1c68a11fae10d7feff71288225245c3a6d2d105cd26a8ee5854c9efac37",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "水平距離 |-a-a|=|-2a|=2a。由 2a=10 得 a=5。",
    "derivedAnswer": "5",
    "storedAnswer": "5",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「5」；其餘三項逐項檢查：「2」不成立，距離只有 4。；「10」不成立，距離會是 20。；「20」不成立，距離會是 40。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「水平距離與垂直距離」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "a>0 排除符號不確定；兩點同 y。",
      "alternateReading": "常見誤讀是「把對稱兩端的距離只算成 a。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需由代數端點建立距離，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會絕對值與一元方程式。",
    "languageCheck": "題幹所求為「利用對稱坐標求半距」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「長方形的一條水平邊端點為 (-a,3) 與 (a,3)，邊長為 10 且 a>0，求 a。」重新依序處理：水平距離 |-a-a|=|-2a|=2a。由 2a=10 得 a=5。 正確選項為「5」。三個干擾項均對應不同錯誤：「2」不成立，距離只有 4。；「10」不成立，距離會是 20。；「20」不成立，距離會是 40。。邊界審查：a>0 排除符號不確定；兩點同 y。 難度理由：需由代數端點建立距離，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s006-v010",
    "contentSha256": "cf426ec111548e6e5cc266d07842fa44e53e90832c0788c30b4bcc9f0ac934a1",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "水平距離為 |4-(-2)|=6 格；6×15=90 公尺。",
    "derivedAnswer": "90 公尺",
    "storedAnswer": "90 公尺",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「90 公尺」；其餘三項逐項檢查：「6 公尺」不成立，把格數直接當公尺。；「60 公尺」不成立，只用 4 格換算。；「105 公尺」不成立，誤算成 7 格。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「水平距離與垂直距離」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "6 格×15 公尺/格，最終單位公尺。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩點同 y，步道為水平且每格等長。",
      "alternateReading": "常見誤讀是「跨越原點漏算，或忘記比例。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "情境比例是必要第二步。",
    "literacyContextNecessity": "每格 15 公尺的比例把抽象水平坐標差轉成實際步道長度，若刪除比例就無法得到公尺答案。",
    "prerequisiteCheck": "需會水平距離。",
    "languageCheck": "題幹所求為「將水平格距換算實際長度」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「公園地圖每格 15 公尺，入口 A=(-2,1) 與廁所 B=(4,1) 位於同一水平步道。步道長多少公尺？」重新依序處理：水平距離為 |4-(-2)|=6 格；6×15=90 公尺。 正確選項為「90 公尺」。三個干擾項均對應不同錯誤：「6 公尺」不成立，把格數直接當公尺。；「60 公尺」不成立，只用 4 格換算。；「105 公尺」不成立，誤算成 7 格。。邊界審查：兩點同 y，步道為水平且每格等長。 難度理由：情境比例是必要第二步。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s006-v011",
    "contentSha256": "f6f3f42a31d2758d215b4b5c51b1f0e7a0dc5cdf13dbf506a38aa23b6d087be4",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "垂直距離 |-4-5|=9 單位；9×3=27 公尺。",
    "derivedAnswer": "27 公尺",
    "storedAnswer": "27 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「27 公尺」；其餘三項逐項檢查：「9 公尺」不成立，漏乘 3。；「3 公尺」不成立，只回報每單位長度。；「15 公尺」不成立，只使用上方 5 單位。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「水平距離與垂直距離」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "9 單位×3 公尺/單位。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩設備同 x，垂直距離適用。",
      "alternateReading": "常見誤讀是「把地下與地上高度做絕對值之差而非跨越相加。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需處理負高度與比例換算。",
    "literacyContextNecessity": "地面基準、地下負值與每單位 3 公尺共同決定真實高度差。",
    "prerequisiteCheck": "需會垂直距離與比例。",
    "languageCheck": "題幹所求為「計算跨地面的實際高度差」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「大樓樓層剖面以地面為 y=0，每一坐標單位代表 3 公尺。設備 A=(2,-4)、B=(2,5) 垂直對齊，兩設備高度差為何？」重新依序處理：垂直距離 |-4-5|=9 單位；9×3=27 公尺。 正確選項為「27 公尺」。三個干擾項均對應不同錯誤：「9 公尺」不成立，漏乘 3。；「3 公尺」不成立，只回報每單位長度。；「15 公尺」不成立，只使用上方 5 單位。。邊界審查：兩設備同 x，垂直距離適用。 難度理由：需處理負高度與比例換算。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s006-v012",
    "contentSha256": "23e3f95b58ab9107cb2bae14aaeb1c29a285fac4dd1d77c47be9c61e589f41ee",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "第一段 6 格，第二段 6 格，共 12 格；12×200=2400 公尺=2.4 公里。",
    "derivedAnswer": "2.4 公里",
    "storedAnswer": "2.4 公里",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「2.4 公里」；其餘三項逐項檢查：「1.2 公里」不成立，只算一段。；「2.0 公里」不成立，公尺轉公里錯誤。；「12 公里」不成立，把格數直接當公里。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「水平距離與垂直距離」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "12×200=2400 公尺，再除以 1000 得 2.4 公里。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "路線指定垂直後水平，不求斜線最短距離。",
      "alternateReading": "常見誤讀是「漏算一段或公尺公里換算錯。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "多段距離與兩次單位換算構成素養整合。",
    "literacyContextNecessity": "配送路線、每格 200 公尺與公里作答要求都直接影響計算。",
    "prerequisiteCheck": "需會分段距離與公制換算。",
    "languageCheck": "題幹所求為「計算折線配送路程並換單位」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「配送車沿格線由倉庫 (1,-2) 先垂直到 (1,4)，再水平到 (-5,4)。每格 200 公尺，總路程為何？」重新依序處理：第一段 6 格，第二段 6 格，共 12 格；12×200=2400 公尺=2.4 公里。 正確選項為「2.4 公里」。三個干擾項均對應不同錯誤：「1.2 公里」不成立，只算一段。；「2.0 公里」不成立，公尺轉公里錯誤。；「12 公里」不成立，把格數直接當公里。。邊界審查：路線指定垂直後水平，不求斜線最短距離。 難度理由：多段距離與兩次單位換算構成素養整合。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
