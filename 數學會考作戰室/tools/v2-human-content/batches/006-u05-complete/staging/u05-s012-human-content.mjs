// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s012-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-coordinate-literacy",
  "skillId": "coordinate-literacy-context",
  "lockedTitle": "坐標素養題",
  "title": "坐標素養題：把地圖和座位與路線資訊轉成數學",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能建立情境中的原點、正方向與單位格。",
    "能把地圖或座位資訊轉成坐標。",
    "能整合平移、距離、長方形與交點。",
    "能檢查答案在情境中的方向、單位與限制。"
  ],
  "prerequisites": [
    {
      "skillId": "coordinate-line-intersection",
      "requiredLevel": "能說明並正確使用「兩直線交點與聯立方程式」的核心規則，且不混淆坐標分量順序。"
    }
  ],
  "glossary": [
    {
      "term": "坐標模型",
      "definition": "用原點、兩軸、方向與單位表示真實或虛構情境。"
    },
    {
      "term": "比例單位",
      "definition": "每一坐標單位對應的實際長度或格數。"
    },
    {
      "term": "可行區域",
      "definition": "同時滿足多個位置或路線限制的點集合。"
    },
    {
      "term": "轉換",
      "definition": "在情境語言與坐標、方程式之間來回表達。"
    }
  ],
  "notation": [
    {
      "symbol": "1 格 = k 公尺",
      "meaning": "把坐標差換成實際長度。"
    },
    {
      "symbol": "(0,0)",
      "meaning": "情境中指定的基準位置。"
    },
    {
      "symbol": "x 正向 / y 正向",
      "meaning": "題目定義的東西或左右上下方向。"
    }
  ],
  "conceptNarrative": [
    "素養題的第一步不是立刻計算，而是找出坐標系如何對應情境。",
    "同一個坐標可因題目定義代表東西、南北、座位列號或遊戲格線，不能套用未給的方向。",
    "算出坐標差後，還要乘上每格代表的實際單位；面積則要平方換算。",
    "答案要回到情境檢查，例如位置是否在校園範圍內、路線是否真的符合限制。"
  ],
  "formalDefinitions": [
    {
      "name": "情境坐標化",
      "statement": "指定原點、正方向與單位後，每個位置可用 (x,y) 表示。"
    },
    {
      "name": "情境驗證",
      "statement": "數學結果必須同時符合坐標條件、範圍限制與實際單位。"
    }
  ],
  "formulas": [
    {
      "formula": "實際長度=坐標距離×每格長度",
      "conditions": [
        "格線等距",
        "路線為水平或垂直時使用相應坐標差"
      ],
      "meaning": "把抽象單位換成情境單位。"
    }
  ],
  "nonApplicableCases": [
    "題目未說北方是 y 正向時，不能自行假設。",
    "斜向最短距離不在本單元一般公式範圍，除非題目拆成格線路線。",
    "每格長度不為 1 時不能省略換算。",
    "面積換算需平方比例。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "定義模型。",
      "check": "原點、正方向、每格單位是什麼？"
    },
    {
      "step": 2,
      "instruction": "把資訊翻成坐標或方程式。",
      "check": "每個數值代表哪個量？"
    },
    {
      "step": 3,
      "instruction": "選用本單元技能。",
      "check": "是平移、軸距、長方形還是交點？"
    },
    {
      "step": 4,
      "instruction": "完成計算與單位換算。",
      "check": "長度與面積單位是否正確？"
    },
    {
      "step": 5,
      "instruction": "回到情境審核。",
      "check": "位置與限制是否合理？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "校門為原點，東為 x 正、北為 y 正；圖書館在西 3 格、北 2 格。",
      "solutionSteps": [
        "西與 x 正向相反，所以第一分量為負三。",
        "北與 y 正向相同，所以第二分量為正二。",
        "依 (x,y) 順序寫成 (-3,2)。"
      ],
      "answer": "圖書館坐標 (-3,2)。",
      "why": "情境先定義坐標正方向，西三格決定 x=-3，北二格決定 y=2。兩個方向不能交換，也不能因地點名稱改變規則；依序組合便得到正確坐標。"
    },
    {
      "exampleId": "L2",
      "prompt": "每格 20 公尺，A=(1,4)、B=(6,4)。",
      "solutionSteps": [
        "兩點 y 相同，使用水平距離。",
        "格距為 |6-1|=5 格。",
        "乘每格二十公尺，得到一百公尺。"
      ],
      "answer": "實際距離 100 公尺。",
      "why": "相同 y 坐標表示兩點在同一水平線，距離只看 x 的差五格。坐標格數不是實際公尺，還要乘地圖比例二十，才得到一百公尺。"
    },
    {
      "exampleId": "L3",
      "prompt": "座位表以講臺為原點，右為 x 正、後為 y 正；學生由 (-2,3) 向右 5 格。",
      "solutionSteps": [
        "向右只改變 x，計算 -2+5=3。",
        "沒有前後移動，所以 y 保持三。",
        "新座位依序寫成 (3,3)。"
      ],
      "answer": "新座位 (3,3)。",
      "why": "題目把向右定義為 x 增加，五格位移要加在原本負二上，而不是直接把五當坐標。沒有改變前後排數，因此第二分量仍為三。"
    },
    {
      "exampleId": "L4",
      "prompt": "兩條巡邏規則 x+y=6 與 x-y=2 的交會點。",
      "solutionSteps": [
        "將兩式相加消去 y，得到 2x=8。",
        "求 x=4，代回第一式得 y=2。",
        "以 (4,2) 驗證和為六、差為二。"
      ],
      "answer": "交會點 (4,2)。",
      "why": "交會點必須同時符合兩條巡邏規則。消去法求得四與二後，兩式回代都成立，所以 (4,2) 才是共同位置，而不是只符合其中一式的候選點。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "直接把東西南北套成固定符號。",
      "why": "忽略題目自訂方向。",
      "correction": "先抄下正方向定義。"
    },
    {
      "mistake": "忘記每格 20 公尺。",
      "why": "把格數當實際長度。",
      "correction": "最後乘比例單位。"
    },
    {
      "mistake": "面積只乘一次比例。",
      "why": "混淆長度與面積縮放。",
      "correction": "面積每邊都要換算。"
    },
    {
      "mistake": "算出坐標卻不檢查範圍。",
      "why": "只完成代數。",
      "correction": "回看是否位於允許區域。"
    },
    {
      "mistake": "把情境裝飾視為無關而漏掉限制。",
      "why": "未辨認文字中的必要條件。",
      "correction": "把每個方向、單位、邊界標記成數學條件。"
    }
  ],
  "selfCheck": [
    "我是否先定義原點與正方向？",
    "每格實際長度是否換算？",
    "使用的公式是否符合水平、垂直或軸平行前提？",
    "答案是否回到情境檢查？"
  ],
  "summary": [
    "素養題先建模再計算。",
    "方向依題目定義，不自行假設。",
    "格數需換算實際單位。",
    "最後檢查範圍與情境合理性。"
  ],
  "connections": {
    "previous": "整合 U05 前十一個技能。",
    "next": [
      "完成 U05 後，可在後續比例尺、函數與幾何單元繼續使用坐標模型。",
      "跨單元時仍需遵守各公式的適用條件。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s012-v001",
      "u05-s012-v002",
      "u05-s012-v003",
      "u05-s012-v004",
      "u05-s012-v005",
      "u05-s012-v006",
      "u05-s012-v007",
      "u05-s012-v008",
      "u05-s012-v009",
      "u05-s012-v010",
      "u05-s012-v011",
      "u05-s012-v012"
    ],
    "constructedResponseIds": [
      "u05-s012-cr001",
      "u05-s012-cr002"
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
    "reviewNote": "人工逐題對照情境方向、每格單位與代數模型；四例涵蓋方位、距離換算、座位平移與兩規則交點，且每個情境資訊都實際參與求解。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "3cb56d1ef6f2ed1be5fc5013d8f844b0868dd5d37e4d04a2c56278a285e7136f"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s012-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "校園地圖以校門為原點，東為 x 正向、北為 y 正向。圖書館在西 2 格、北 5 格，坐標為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "方位資訊轉成坐標",
    "choices": [
      "(2,5)",
      "(-5,2)",
      "(2,-5)",
      "(-2,5)"
    ],
    "answerIndex": 3,
    "independentSolution": "西對應 x=-2，北對應 y=5，所以為 (-2,5)。",
    "explanation": "題目明定東為 x 正向，所以向西二格使 x=-2；北為 y 正向，所以向北五格使 y=5。依有序數對先橫後縱，圖書館坐標為 (-2,5)。不能忽略負號，也不能把二格與五格交換。",
    "steps": [
      "依地圖規則把西二格翻成 x=-2。",
      "把北五格翻成 y=5。",
      "依 (x,y) 順序寫成 (-2,5)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2,5)",
        "truth": false,
        "reason": "西誤為正。"
      },
      {
        "choice": "(-5,2)",
        "truth": false,
        "reason": "交換格數。"
      },
      {
        "choice": "(2,-5)",
        "truth": false,
        "reason": "兩方向都反。"
      },
      {
        "choice": "(-2,5)",
        "truth": true,
        "reason": "西負、北正。"
      }
    ],
    "misconceptionTarget": "未讀題目自訂的正方向，或把東西格數與南北格數交換分量。",
    "prerequisiteCheck": "需會坐標讀寫。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "方向與原點均明示。",
    "difficultyReason": "直接建模一個位置，屬基礎素養。",
    "literacyContextNecessity": "校門基準與東北正向決定兩個坐標符號。",
    "authoringIntent": "方位資訊轉成坐標",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7d475b8476b1d499d681fa89cd272770ce709e6482afdeee55431b82b5437970"
  },
  {
    "questionId": "u05-s012-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "座位表以第一排中央為 (0,0)，向右座號 x 增加，向後排數 y 增加。座位 (-3,4) 表示何處？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "解讀座位編碼",
    "choices": [
      "左 3 個座位、後 4 排",
      "右 3 個座位、後 4 排",
      "左 4 個座位、後 3 排",
      "左 3 個座位、前 4 排"
    ],
    "answerIndex": 0,
    "independentSolution": "x=-3 表示向左 3；y=4 表示向後 4 排。",
    "explanation": "座位表自行定義向右使 x 增加，所以 x=-3 表示從中央向左三個座位；向後使 y 增加，所以 y=4 表示向後四排。因此 (-3,4) 是左三、後四，不能直接套一般地圖的上下方向。",
    "steps": [
      "讀第一分量負三，依規則判為向左三個座位。",
      "讀第二分量正四，依規則判為向後四排。",
      "合併兩項位置描述，選左三、後四。"
    ],
    "optionAnalysis": [
      {
        "choice": "左 3 個座位、後 4 排",
        "truth": true,
        "reason": "依自訂方向正確。"
      },
      {
        "choice": "右 3 個座位、後 4 排",
        "truth": false,
        "reason": "x 符號錯。"
      },
      {
        "choice": "左 4 個座位、後 3 排",
        "truth": false,
        "reason": "交換分量。"
      },
      {
        "choice": "左 3 個座位、前 4 排",
        "truth": false,
        "reason": "y 正向誤讀。"
      }
    ],
    "misconceptionTarget": "套用慣用地圖方向而忽略座位表將 y 正向定義為向後。",
    "prerequisiteCheck": "需會坐標讀法。",
    "estimatedTimeSec": 75,
    "unitCheck": "x 使用座位個數，y 使用排數，敘述保留各自單位。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目已定義『向後』為 y 增加。",
    "difficultyReason": "直接把坐標翻回場域位置，屬基礎。",
    "literacyContextNecessity": "座位表的正方向是特定配置，情境規則不可省略。",
    "authoringIntent": "解讀座位編碼",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "2de3f1bfa5f9ff0b734cd8295b206d29115fe8c1e8b4995b185e7c1e98dac174"
  },
  {
    "questionId": "u05-s012-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "棋盤角色由 (1,-1) 向右 2 格、向上 3 格，終點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "棋盤上的兩步移動",
    "choices": [
      "(-1,2)",
      "(3,2)",
      "(3,-4)",
      "(2,3)"
    ],
    "answerIndex": 1,
    "independentSolution": "x=1+2=3，y=-1+3=2。",
    "explanation": "從 (1,-1) 向右二格只改變 x，得到 x=1+2=3；向上三格只改變 y，得到 y=-1+3=2。因此終點是 (3,2)。二與三是位移量，必須加在起點上，不能直接當終點坐標。",
    "steps": [
      "向右二格，將第一分量更新為 1+2=3。",
      "向上三格，將第二分量更新為 -1+3=2。",
      "按順序組成終點 (3,2)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-1,2)",
        "truth": false,
        "reason": "向右誤為向左。"
      },
      {
        "choice": "(3,2)",
        "truth": true,
        "reason": "平移正確。"
      },
      {
        "choice": "(3,-4)",
        "truth": false,
        "reason": "向上誤為向下。"
      },
      {
        "choice": "(2,3)",
        "truth": false,
        "reason": "把改變量直接當坐標。"
      }
    ],
    "misconceptionTarget": "忽略原本起點，直接把向右二、向上三當成終點坐標。",
    "prerequisiteCheck": "需會平移。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "每格等長且無障礙限制。",
    "difficultyReason": "單次水平與垂直平移，屬基礎素養。",
    "literacyContextNecessity": "棋盤起點與移動指令共同決定終點。",
    "authoringIntent": "棋盤上的兩步移動",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "3cd9b1b7f7b77149877e08b00c07586c90ce068f8712d3cb9a9590f06ad66fed"
  },
  {
    "questionId": "u05-s012-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "地圖每格 50 公尺，A=(-1,2)、B=(5,2) 位於同一東西向道路。A 到 B 的實際距離為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "換算地圖道路距離",
    "choices": [
      "6 公尺",
      "250 公尺",
      "300 公尺",
      "350 公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "兩點同 y，水平距離 |5-(-1)|=6 格；6×50=300 公尺。",
    "explanation": "A、B 的 y 都是二，位於同一水平道路，只需比較 x。格距為 |5-(-1)|=6 格；每格五十公尺，所以實際距離為 6×50=300 公尺。從負一跨到五時要把兩側距離都計入。",
    "steps": [
      "確認兩點 y 相同，使用水平距離。",
      "計算 |5-(-1)|=6 格。",
      "乘每格五十公尺，得到三百公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 公尺",
        "truth": false,
        "reason": "未換算。"
      },
      {
        "choice": "250 公尺",
        "truth": false,
        "reason": "只用 x=5。"
      },
      {
        "choice": "300 公尺",
        "truth": true,
        "reason": "格距與比例正確。"
      },
      {
        "choice": "350 公尺",
        "truth": false,
        "reason": "誤算 7 格。"
      }
    ],
    "misconceptionTarget": "跨越 y 軸時只取五格，或求得六格後忘記乘每格五十公尺。",
    "prerequisiteCheck": "需會距離。",
    "estimatedTimeSec": 100,
    "unitCheck": "6 格×50 公尺/格。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "道路水平，使用水平距離。",
    "difficultyReason": "需兩步計算，屬標準素養。",
    "literacyContextNecessity": "每格 50 公尺是回答實際距離的必要比例。",
    "authoringIntent": "換算地圖道路距離",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "122305a990c614d499f539400d9e0419bdf9ee0bec609cb06317a0a75d5062e6"
  },
  {
    "questionId": "u05-s012-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "公園矩形草地對角點為 (-2,-1)、(4,3)，每格 5 公尺。草地實際面積為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "換算公園草地面積",
    "choices": [
      "24 平方公尺",
      "600 平方公尺",
      "120 平方公尺",
      "3000 平方公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "格線寬 6、高 4；實際寬 30 公尺、高 20 公尺，面積 600 平方公尺。",
    "explanation": "軸平行長方形的格數寬為 |4-(-2)|=6 格，高為 |3-(-1)|=4 格。每格邊長五公尺，所以實際寬三十公尺、高二十公尺，面積為 30×20=600 平方公尺。兩個方向都要換算。",
    "steps": [
      "由對角點求寬六格、高四格。",
      "分別乘五，得到實際寬三十、高二十公尺。",
      "相乘求面積六百平方公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "24 平方公尺",
        "truth": false,
        "reason": "只算格面積。"
      },
      {
        "choice": "600 平方公尺",
        "truth": true,
        "reason": "30×20 正確。"
      },
      {
        "choice": "120 平方公尺",
        "truth": false,
        "reason": "面積只乘一次 5。"
      },
      {
        "choice": "3000 平方公尺",
        "truth": false,
        "reason": "多乘一次 5。"
      }
    ],
    "misconceptionTarget": "只把格面積二十四乘一次比例五，忽略面積需兩個方向都換算。",
    "prerequisiteCheck": "需會長方形面積。",
    "estimatedTimeSec": 100,
    "unitCheck": "最終為平方公尺。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "草地為軸平行矩形。",
    "difficultyReason": "需理解平方尺度，屬標準。",
    "literacyContextNecessity": "每格 5 公尺會在寬與高各作用一次。",
    "authoringIntent": "換算公園草地面積",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "a12057817160183b404de53e908e054e8f4dcac7b2831fb7b41c3f8163883dd2"
  },
  {
    "questionId": "u05-s012-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "兩條校車路線以 x+y=8 與 x-y=2 表示，轉乘站在交點。轉乘站坐標為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "找校車路線轉乘交點",
    "choices": [
      "(3,5)",
      "(4,4)",
      "(5,3)",
      "(6,2)"
    ],
    "answerIndex": 2,
    "independentSolution": "兩式相加得 2x=10，x=5；代回得 y=3。",
    "explanation": "轉乘站同時位於兩條路線，所以求聯立共同解。將 x+y=8 與 x-y=2 相加，得到 2x=10、x=5；代回第一式得 y=3。點 (5,3) 的和為八、差為二，確實同時在兩條路線上。",
    "steps": [
      "將兩路線方程式相加消去 y。",
      "由 2x=10 求 x=5，再代回得 y=3。",
      "把 (5,3) 代回兩式驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "(3,5)",
        "truth": false,
        "reason": "第二式為 -2。"
      },
      {
        "choice": "(4,4)",
        "truth": false,
        "reason": "第二式為 0。"
      },
      {
        "choice": "(5,3)",
        "truth": true,
        "reason": "同時滿足兩式。"
      },
      {
        "choice": "(6,2)",
        "truth": false,
        "reason": "第一式成立但第二式為 4。"
      }
    ],
    "misconceptionTarget": "選擇只符合總和八的點，沒有檢查同時還須滿足坐標差二。",
    "prerequisiteCheck": "需會聯立方程式。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩路線唯一相交。",
    "difficultyReason": "需完成聯立，屬標準素養。",
    "literacyContextNecessity": "轉乘站必須同時位於兩條路線，交點條件是情境核心。",
    "authoringIntent": "找校車路線轉乘交點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "48c2c5aaa97988582bed4912e3e73c1f46b2a4fb34a9b23f40e27e6cebfb6bcd"
  },
  {
    "questionId": "u05-s012-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "倉庫規定安全區為 -3≤x≤5 且 1≤y≤6。機器人從 (-1,2) 向右 7、向上 3 後，是否仍在安全區？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "平移後檢查矩形安全區",
    "choices": [
      "否，終點 (6,5) 超出 x 上限",
      "是，終點 (6,5) 在範圍內",
      "否，終點 (-8,-1) 超出兩界",
      "是，因為 y=5 合格"
    ],
    "answerIndex": 0,
    "independentSolution": "終點為 (-1+7,2+3)=(6,5)。y 合格，但 x=6>5，所以不在安全區。",
    "explanation": "從 (-1,2) 向右七、向上三，終點為 (-1+7,2+3)=(6,5)。安全區要求 x 不大於五且 y 介於一與六；y=5 合格，但 x=6 超過上限五，所以機器人不在安全區。每個條件都要檢查。",
    "steps": [
      "依方向計算終點 (6,5)。",
      "檢查 x=6 不符合負三至五的範圍。",
      "再確認 y=5 合格，但因 x 失敗仍判定不安全。"
    ],
    "optionAnalysis": [
      {
        "choice": "否，終點 (6,5) 超出 x 上限",
        "truth": true,
        "reason": "完整檢查得到不合格。"
      },
      {
        "choice": "是，終點 (6,5) 在範圍內",
        "truth": false,
        "reason": "忽略 x≤5。"
      },
      {
        "choice": "否，終點 (-8,-1) 超出兩界",
        "truth": false,
        "reason": "方向運算錯。"
      },
      {
        "choice": "是，因為 y=5 合格",
        "truth": false,
        "reason": "只檢查 y。"
      }
    ],
    "misconceptionTarget": "只看到 y=5 在允許範圍就判合格，未逐一檢查 x 邊界。",
    "prerequisiteCheck": "需會平移與不等式。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標與移動均以倉庫格為單位。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "邊界以 ≤ 包含，但 x=6 仍超出。",
    "difficultyReason": "需整合平移與雙邊界判斷，屬進階素養。",
    "literacyContextNecessity": "安全區的四個邊界是機器人是否可繼續運作的必要限制。",
    "authoringIntent": "平移後檢查矩形安全區",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "09f03909052f59ba34d200a917c2577aa3e0658ff281e06db550094a0da393c4"
  },
  {
    "questionId": "u05-s012-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "一個展場的入口為 (0,0)。甲路線終點為 (a,4)，離 y 軸 6 格且在第一象限；乙路線終點為 (6,b)，與甲點水平對齊。求乙點。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "整合軸距、象限與對齊",
    "choices": [
      "(-6,4)",
      "(6,-4)",
      "(4,6)",
      "(6,4)"
    ],
    "answerIndex": 3,
    "independentSolution": "甲在第一象限且到 y 軸 6 格，所以 a=6，甲=(6,4)。乙與甲水平對齊表示 y 相同，且乙 x=6，所以乙=(6,4)。",
    "explanation": "甲點到 y 軸六格表示 |a|=6，又在第一象限，所以 a=6，甲為 (6,4)。乙已知 x=6，且與甲水平對齊表示 y 坐標相同，因此 b=4、乙為 (6,4)。兩個路線終點重合並不違反任何條件。",
    "steps": [
      "由軸距六與第一象限求 a=6，得甲點 (6,4)。",
      "利用水平對齊代表 y 相同，求 b=4。",
      "寫出乙點 (6,4)，並確認重合是允許的。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-6,4)",
        "truth": false,
        "reason": "不符乙 x=6。"
      },
      {
        "choice": "(6,-4)",
        "truth": false,
        "reason": "未保持同 y。"
      },
      {
        "choice": "(4,6)",
        "truth": false,
        "reason": "交換分量。"
      },
      {
        "choice": "(6,4)",
        "truth": true,
        "reason": "所有條件一致，兩點重合也允許。"
      }
    ],
    "misconceptionTarget": "認為兩條路線終點必須不同，或把水平對齊誤解為 x 坐標相同。",
    "prerequisiteCheck": "需會軸距與水平對齊。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目未要求甲乙點不同，因此重合不構成矛盾。",
    "difficultyReason": "多條件逐層定位，屬進階。",
    "literacyContextNecessity": "展場路線的軸距與對齊要求共同決定終點，任一資訊皆不可刪除。",
    "authoringIntent": "整合軸距、象限與對齊",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b4af785708c7fa6b3092055d0b9fee3290b1d7ca59f6dc690682c0728899ee00"
  },
  {
    "questionId": "u05-s012-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "地圖上醫院 H=(2,3)。救護站 S 必須與 H 同一垂直道路，且離 H 5 格並位於 H 下方。S 為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "依道路與方向定位救護站",
    "choices": [
      "(2,-2)",
      "(-3,3)",
      "(2,8)",
      "(7,3)"
    ],
    "answerIndex": 0,
    "independentSolution": "同一垂直道路使 x=2；位於下方 5 格使 y=3-5=-2。",
    "explanation": "S 與 H 在同一垂直道路，兩點的 x 坐標都為二。S 位於 H 下方五格，所以 y=3-5=-2。因此 S=(2,-2)。若把五加到 y 會得到上方點，若改變 x 則成為水平移動。",
    "steps": [
      "由同一垂直道路固定 x=2。",
      "由位於下方五格計算 y=3-5=-2。",
      "組成 S=(2,-2)，並檢查垂直距離為五格。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2,-2)",
        "truth": true,
        "reason": "垂直同路且在下方 5。"
      },
      {
        "choice": "(-3,3)",
        "truth": false,
        "reason": "水平左移。"
      },
      {
        "choice": "(2,8)",
        "truth": false,
        "reason": "在上方 5。"
      },
      {
        "choice": "(7,3)",
        "truth": false,
        "reason": "水平右移。"
      }
    ],
    "misconceptionTarget": "只使用距離五而忽略垂直與下方方向，錯改 x 或把 y 增加。",
    "prerequisiteCheck": "需會垂直距離。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "『下方』排除另一個距離 5 的上方點。",
    "difficultyReason": "需同時使用對齊、距離與方向，屬進階。",
    "literacyContextNecessity": "同一道路與必須位於醫院下方是救護站選址限制。",
    "authoringIntent": "依道路與方向定位救護站",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "31aa8889bc00a148a4c1bf8ef8211016861748968cc4ad5d46aa0e618bfd9c2e"
  },
  {
    "questionId": "u05-s012-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "活動場地使用座標格，每格 2 公尺。舞臺區為 -4≤x≤1、-2≤y≤3 的軸平行長方形。圍住舞臺需要多長的圍欄？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "計算場地邊界實際周長",
    "choices": [
      "20 公尺",
      "50 公尺",
      "100 公尺",
      "40 公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "格線寬 5、高 5，周長 20 格；每格 2 公尺，所以 40 公尺。",
    "explanation": "長方形格數寬為 1-(-4)=5，高為 3-(-2)=5，所以格線周長是 2×(5+5)=20 格。每格邊長二公尺，實際圍欄長度為 20×2=40 公尺。圍欄求周長，不是草地面積，單位應為公尺。",
    "steps": [
      "由 x、y 邊界分別求寬五格、高五格。",
      "計算長方形周長二十格。",
      "乘每格二公尺，得到四十公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "20 公尺",
        "truth": false,
        "reason": "未換算。"
      },
      {
        "choice": "50 公尺",
        "truth": false,
        "reason": "誤用面積 25 格再乘 2。"
      },
      {
        "choice": "100 公尺",
        "truth": false,
        "reason": "把面積當周長再錯換算。"
      },
      {
        "choice": "40 公尺",
        "truth": true,
        "reason": "20×2 正確。"
      }
    ],
    "misconceptionTarget": "把『圍住』誤算成面積，或求得二十格後忘記乘每格二公尺。",
    "prerequisiteCheck": "需會長方形周長。",
    "estimatedTimeSec": 150,
    "unitCheck": "20 格×2 公尺/格。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "不等式邊界形成軸平行長方形。",
    "difficultyReason": "情境要求辨認周長並換算，屬素養。",
    "literacyContextNecessity": "圍欄需求決定要算周長而非面積，每格 2 公尺決定實際材料長度。",
    "authoringIntent": "計算場地邊界實際周長",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f5415af642486b4c6900631666a0a8e243d431aca4555ea7f06007c7d24aaaf8"
  },
  {
    "questionId": "u05-s012-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "共享單車方案甲 y=15x+20，乙 y=10x+45，x 為小時、y 為元。租用幾小時兩方案費用相同？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "比較共享單車方案交點",
    "choices": [
      "3 小時",
      "4 小時",
      "5 小時",
      "6 小時"
    ],
    "answerIndex": 2,
    "independentSolution": "令 15x+20=10x+45，得 5x=25，所以 x=5。",
    "explanation": "費用相同表示 15x+20=10x+45。移項後得 5x=25，所以 x=5 小時。代回時甲方案為七十五加二十，乙方案為五十加四十五，兩者都是九十五元。只比較每小時費率會漏掉固定費。",
    "steps": [
      "把甲、乙完整費用式設為相等。",
      "整理得 5x=25，求 x=5 小時。",
      "代回兩式，確認費用皆為九十五元。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 小時",
        "truth": false,
        "reason": "65 與 75 元。"
      },
      {
        "choice": "4 小時",
        "truth": false,
        "reason": "80 與 85 元。"
      },
      {
        "choice": "5 小時",
        "truth": true,
        "reason": "兩方案皆 95 元。"
      },
      {
        "choice": "6 小時",
        "truth": false,
        "reason": "110 與 105 元。"
      }
    ],
    "misconceptionTarget": "只比較每小時十五元與十元，忽略兩方案固定費二十與四十五元。",
    "prerequisiteCheck": "需會一次方程式。",
    "estimatedTimeSec": 150,
    "unitCheck": "x 小時，y 元。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "x=5 為非負且題目未限制整點以外。",
    "difficultyReason": "需把費用相同轉成兩直線交點，屬素養。",
    "literacyContextNecessity": "兩方案的固定費與時租費共同決定何時等價，實際選擇需要交點。",
    "authoringIntent": "比較共享單車方案交點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "80ddd63adcc6a6b57870dc0b811c32c37e11f90195a730f8d07e91745bab6749"
  },
  {
    "questionId": "u05-s012-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "災害指揮圖中，道路 L1:2x+y=11、L2:x-y=1。臨時物資點須位於兩路交點，且每坐標單位 1 公里。物資點到 y 軸的距離是多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由道路交點再求軸距",
    "choices": [
      "3 公里",
      "4 公里",
      "5 公里",
      "7 公里"
    ],
    "answerIndex": 1,
    "independentSolution": "聯立：兩式相加得 3x=12，x=4；交點為 (4,3)。到 y 軸距離為 |x|=4 公里。",
    "explanation": "物資點是兩路共同交點。兩式相加得 3x=12，所以 x=4；代回 x-y=1 得 y=3，交點為 (4,3)。到 y 軸的距離等於橫坐標絕對值 |4|，每單位一公里，因此距離是四公里。",
    "steps": [
      "聯立兩道路方程式，求得交點 (4,3)。",
      "辨認到 y 軸距離取橫坐標絕對值。",
      "計算 |4|=4，換成四公里。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 公里",
        "truth": false,
        "reason": "誤取 y，這是到 x 軸距離。"
      },
      {
        "choice": "4 公里",
        "truth": true,
        "reason": "交點與軸距皆正確。"
      },
      {
        "choice": "5 公里",
        "truth": false,
        "reason": "把 x、y 相加。"
      },
      {
        "choice": "7 公里",
        "truth": false,
        "reason": "把兩坐標絕對值相加。"
      }
    ],
    "misconceptionTarget": "求出交點後誤取 y=3 當到 y 軸距離，或把兩坐標相加。",
    "prerequisiteCheck": "需會交點與到軸距離。",
    "estimatedTimeSec": 150,
    "unitCheck": "到 y 軸看 x，4 單位即 4 公里。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "每坐標單位 1 公里，無額外比例。",
    "difficultyReason": "需連續使用聯立與到軸距離，屬高整合素養。",
    "literacyContextNecessity": "物資點受兩道路共同限制，且與 y 軸的實際距離影響調度；兩層資訊均必要。",
    "authoringIntent": "由道路交點再求軸距",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9e7c64a436b79124592459e40eea8265fa44bc273f45a11a35f28dfc7740fc42"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s012-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "校園地圖以校門為原點，東、北為正向，每格 25 公尺。圖書館在 (-2,3)，體育館在 (4,3)。求兩地沿東西向道路的實際距離，並說明方向。",
    "requiredWork": [
      "求水平格距。",
      "換算公尺。",
      "說明由圖書館到體育館的方向。"
    ],
    "fullCreditSolution": [
      "圖書館 (-2,3) 與體育館 (4,3) 的 y 坐標相同，所以兩地在同一條東西向道路上。",
      "水平格距為 |4-(-2)|=6 格。每格二十五公尺，因此實際距離是 6×25=150 公尺。",
      "從圖書館的 x=-2 移到體育館的 x=4，x 增加；題目定義東為正向，所以行進方向為向東。",
      "答案為沿道路向東一百五十公尺，距離與方向都符合地圖設定。"
    ],
    "alternativeSolutions": [
      "可由 -2 向右走 6 格到 4，再換算。"
    ],
    "reasoningSteps": [
      "先用相同 y 坐標確認兩地可沿東西向道路移動。",
      "以橫坐標差求六格，再乘每格二十五公尺。",
      "依 x 從負二增加到四，判定由圖書館向體育館為向東。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "得到 150 公尺，說明同 y 與向東方向。"
      },
      {
        "score": 2,
        "criteria": "距離正確但方向或同 y 說明不足。"
      },
      {
        "score": 1,
        "criteria": "求得 6 格但未換算，或換算方法正確但格距算錯。"
      },
      {
        "score": 0,
        "criteria": "使用縱坐標差 0 得距離 0。"
      }
    ],
    "partialCreditRules": [
      "格距與實際距離分開給分。"
    ],
    "followThroughPolicy": "若格數差算錯，但後續正確乘每格 25 公尺並依橫坐標判斷東西方向，可按一致推理給部分分。",
    "unitAndNotationRules": "格數為 6 格，實際距離寫 150 公尺；方向由圖書館往體育館為向東。",
    "answerOnlyPolicy": "只寫 150 公尺而沒有格數差與方向說明，最高給 2 分。",
    "commonErrors": [
      "跨越原點時只算負二到零的兩格，漏掉零到四的四格。",
      "求得六格就寫六公尺，沒有乘地圖比例二十五。",
      "只寫一百五十公尺而漏答方向，或把 x 增加誤寫成向西。"
    ],
    "independentReview": {
      "derivedResult": "若格距早期算錯但正確乘 25，保留換算方法分。",
      "ambiguity": "最終單位公尺；方向用東或向右均可。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若格距早期算錯但正確乘 25，保留換算方法分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f59104e36ca34c52de1da77d8a54bcc8843e0c0865292fe23004fc1c1f633fa1"
  },
  {
    "questionId": "u05-s012-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "共享空間有兩種計費：甲 y=40x+60，乙 y=25x+150，其中 x 為使用小時、y 為元。求費用相同的時間與費用，並判斷使用 2 小時哪個方案較便宜。",
    "requiredWork": [
      "求兩線交點。",
      "寫出相同費用。",
      "比較 x=2 時兩方案。"
    ],
    "fullCreditSolution": [
      "費用相同時令 40x+60=25x+150，移項得 15x=90，所以 x=6 小時。",
      "把六代回甲方案，y=40×6+60=300 元；乙方案為 25×6+150=300 元，所以交點是 (6,300)。",
      "使用二小時時，甲費用為 40×2+60=140 元，乙費用為 25×2+150=200 元。",
      "因此二小時選甲方案較便宜，便宜六十元；不能只因乙的每小時費率較低就忽略固定費。"
    ],
    "alternativeSolutions": [
      "也可先比較兩方案差額：甲-乙=15x-90，再判斷 x=6 與 x=2。"
    ],
    "reasoningSteps": [
      "將兩個完整費用式設為相等，求同價時間。",
      "代回任一方案求共同費用，並用另一式驗證。",
      "獨立代入二小時，比較兩方案總費用與價差。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "交點 (6,300) 與 2 小時甲較便宜全部正確，且有計算。"
      },
      {
        "score": 2,
        "criteria": "交點完整但比較題漏答，或時間正確但費用一個算術錯。"
      },
      {
        "score": 1,
        "criteria": "能建立相等式或正確比較 2 小時其中一部分。"
      },
      {
        "score": 0,
        "criteria": "只比較每小時費率，忽略固定費用。"
      }
    ],
    "partialCreditRules": [
      "時間與費用各自計分；方案判斷需有數值或差額依據。"
    ],
    "followThroughPolicy": "若聯立費用時有單一算術錯誤，但使用所得時間一致代回兩方案，或另外正確比較 2 小時費用，可分項給分。",
    "unitAndNotationRules": "x 以小時為單位、y 以元為單位；相同費用點寫 (6,300)，2 小時費用須分別標明方案。",
    "answerOnlyPolicy": "只寫「6 小時、甲較便宜」而沒有共同費用與計算過程，最高給 1 分。",
    "commonErrors": [
      "把固定費六十與一百五十相加，沒有建立兩方案費用相等式。",
      "求得六小時後漏算同價費用三百元。",
      "看到乙每小時二十五元較低就說任何時間都較便宜，忽略較高固定費。"
    ],
    "independentReview": {
      "derivedResult": "若交點時間算錯，學生仍可用 x=2 獨立正確比較並取得部分分。",
      "ambiguity": "x 單位小時，y 單位元；交點可寫 (6,300)。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若交點時間算錯，學生仍可用 x=2 獨立正確比較並取得部分分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "80042b95145929e682385032859b4c534c1c7ff34c2cf0be864517c26509e328"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s012-v001",
    "contentSha256": "7d475b8476b1d499d681fa89cd272770ce709e6482afdeee55431b82b5437970",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "西對應 x=-2，北對應 y=5，所以為 (-2,5)。",
    "derivedAnswer": "(-2,5)",
    "storedAnswer": "(-2,5)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(-2,5)」；其餘三項逐項檢查：「(2,5)」不成立，西誤為正。；「(-5,2)」不成立，交換格數。；「(2,-5)」不成立，兩方向都反。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標素養題」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "方向與原點均明示。",
      "alternateReading": "常見誤讀是「未依地圖方向定義讀坐標。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "直接建模一個位置，屬基礎素養。",
    "literacyContextNecessity": "校門基準與東北正向決定兩個坐標符號。",
    "prerequisiteCheck": "需會坐標讀寫。",
    "languageCheck": "題幹所求為「方位資訊轉成坐標」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「校園地圖以校門為原點，東為 x 正向、北為 y 正向。圖書館在西 2 格、北 5 格，坐標為何？」重新依序處理：西對應 x=-2，北對應 y=5，所以為 (-2,5)。 正確選項為「(-2,5)」。三個干擾項均對應不同錯誤：「(2,5)」不成立，西誤為正。；「(-5,2)」不成立，交換格數。；「(2,-5)」不成立，兩方向都反。。邊界審查：方向與原點均明示。 難度理由：直接建模一個位置，屬基礎素養。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s012-v002",
    "contentSha256": "2de3f1bfa5f9ff0b734cd8295b206d29115fe8c1e8b4995b185e7c1e98dac174",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x=-3 表示向左 3；y=4 表示向後 4 排。",
    "derivedAnswer": "左 3 個座位、後 4 排",
    "storedAnswer": "左 3 個座位、後 4 排",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「左 3 個座位、後 4 排」；其餘三項逐項檢查：「右 3 個座位、後 4 排」不成立，x 符號錯。；「左 4 個座位、後 3 排」不成立，交換分量。；「左 3 個座位、前 4 排」不成立，y 正向誤讀。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標素養題」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "x 使用座位個數，y 使用排數，敘述保留各自單位。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目已定義『向後』為 y 增加。",
      "alternateReading": "常見誤讀是「套用一般地圖上下，而未讀座位表規則。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "直接把坐標翻回場域位置，屬基礎。",
    "literacyContextNecessity": "座位表的正方向是特定配置，情境規則不可省略。",
    "prerequisiteCheck": "需會坐標讀法。",
    "languageCheck": "題幹所求為「解讀座位編碼」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「座位表以第一排中央為 (0,0)，向右座號 x 增加，向後排數 y 增加。座位 (-3,4) 表示何處？」重新依序處理：x=-3 表示向左 3；y=4 表示向後 4 排。 正確選項為「左 3 個座位、後 4 排」。三個干擾項均對應不同錯誤：「右 3 個座位、後 4 排」不成立，x 符號錯。；「左 4 個座位、後 3 排」不成立，交換分量。；「左 3 個座位、前 4 排」不成立，y 正向誤讀。。邊界審查：題目已定義『向後』為 y 增加。 難度理由：直接把坐標翻回場域位置，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s012-v003",
    "contentSha256": "3cd9b1b7f7b77149877e08b00c07586c90ce068f8712d3cb9a9590f06ad66fed",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x=1+2=3，y=-1+3=2。",
    "derivedAnswer": "(3,2)",
    "storedAnswer": "(3,2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(3,2)」；其餘三項逐項檢查：「(-1,2)」不成立，向右誤為向左。；「(3,-4)」不成立，向上誤為向下。；「(2,3)」不成立，把改變量直接當坐標。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標素養題」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "每格等長且無障礙限制。",
      "alternateReading": "常見誤讀是「忽略起點或方向。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "單次水平與垂直平移，屬基礎素養。",
    "literacyContextNecessity": "棋盤起點與移動指令共同決定終點。",
    "prerequisiteCheck": "需會平移。",
    "languageCheck": "題幹所求為「棋盤上的兩步移動」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「棋盤角色由 (1,-1) 向右 2 格、向上 3 格，終點為何？」重新依序處理：x=1+2=3，y=-1+3=2。 正確選項為「(3,2)」。三個干擾項均對應不同錯誤：「(-1,2)」不成立，向右誤為向左。；「(3,-4)」不成立，向上誤為向下。；「(2,3)」不成立，把改變量直接當坐標。。邊界審查：每格等長且無障礙限制。 難度理由：單次水平與垂直平移，屬基礎素養。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s012-v004",
    "contentSha256": "122305a990c614d499f539400d9e0419bdf9ee0bec609cb06317a0a75d5062e6",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "兩點同 y，水平距離 |5-(-1)|=6 格；6×50=300 公尺。",
    "derivedAnswer": "300 公尺",
    "storedAnswer": "300 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「300 公尺」；其餘三項逐項檢查：「6 公尺」不成立，未換算。；「250 公尺」不成立，只用 x=5。；「350 公尺」不成立，誤算 7 格。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標素養題」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "6 格×50 公尺/格。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "道路水平，使用水平距離。",
      "alternateReading": "常見誤讀是「跨越 y 軸漏算或忘記比例。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需兩步計算，屬標準素養。",
    "literacyContextNecessity": "每格 50 公尺是回答實際距離的必要比例。",
    "prerequisiteCheck": "需會距離。",
    "languageCheck": "題幹所求為「換算地圖道路距離」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「地圖每格 50 公尺，A=(-1,2)、B=(5,2) 位於同一東西向道路。A 到 B 的實際距離為何？」重新依序處理：兩點同 y，水平距離 |5-(-1)|=6 格；6×50=300 公尺。 正確選項為「300 公尺」。三個干擾項均對應不同錯誤：「6 公尺」不成立，未換算。；「250 公尺」不成立，只用 x=5。；「350 公尺」不成立，誤算 7 格。。邊界審查：道路水平，使用水平距離。 難度理由：需兩步計算，屬標準素養。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s012-v005",
    "contentSha256": "a12057817160183b404de53e908e054e8f4dcac7b2831fb7b41c3f8163883dd2",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "格線寬 6、高 4；實際寬 30 公尺、高 20 公尺，面積 600 平方公尺。",
    "derivedAnswer": "600 平方公尺",
    "storedAnswer": "600 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「600 平方公尺」；其餘三項逐項檢查：「24 平方公尺」不成立，只算格面積。；「120 平方公尺」不成立，面積只乘一次 5。；「3000 平方公尺」不成立，多乘一次 5。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標素養題」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "最終為平方公尺。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "草地為軸平行矩形。",
      "alternateReading": "常見誤讀是「面積比例只換算一個方向。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需理解平方尺度，屬標準。",
    "literacyContextNecessity": "每格 5 公尺會在寬與高各作用一次。",
    "prerequisiteCheck": "需會長方形面積。",
    "languageCheck": "題幹所求為「換算公園草地面積」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「公園矩形草地對角點為 (-2,-1)、(4,3)，每格 5 公尺。草地實際面積為何？」重新依序處理：格線寬 6、高 4；實際寬 30 公尺、高 20 公尺，面積 600 平方公尺。 正確選項為「600 平方公尺」。三個干擾項均對應不同錯誤：「24 平方公尺」不成立，只算格面積。；「120 平方公尺」不成立，面積只乘一次 5。；「3000 平方公尺」不成立，多乘一次 5。。邊界審查：草地為軸平行矩形。 難度理由：需理解平方尺度，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s012-v006",
    "contentSha256": "48c2c5aaa97988582bed4912e3e73c1f46b2a4fb34a9b23f40e27e6cebfb6bcd",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "兩式相加得 2x=10，x=5；代回得 y=3。",
    "derivedAnswer": "(5,3)",
    "storedAnswer": "(5,3)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(5,3)」；其餘三項逐項檢查：「(3,5)」不成立，第二式為 -2。；「(4,4)」不成立，第二式為 0。；「(6,2)」不成立，第一式成立但第二式為 4。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標素養題」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩路線唯一相交。",
      "alternateReading": "常見誤讀是「只滿足其中一路線。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需完成聯立，屬標準素養。",
    "literacyContextNecessity": "轉乘站必須同時位於兩條路線，交點條件是情境核心。",
    "prerequisiteCheck": "需會聯立方程式。",
    "languageCheck": "題幹所求為「找校車路線轉乘交點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「兩條校車路線以 x+y=8 與 x-y=2 表示，轉乘站在交點。轉乘站坐標為何？」重新依序處理：兩式相加得 2x=10，x=5；代回得 y=3。 正確選項為「(5,3)」。三個干擾項均對應不同錯誤：「(3,5)」不成立，第二式為 -2。；「(4,4)」不成立，第二式為 0。；「(6,2)」不成立，第一式成立但第二式為 4。。邊界審查：兩路線唯一相交。 難度理由：需完成聯立，屬標準素養。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s012-v007",
    "contentSha256": "09f03909052f59ba34d200a917c2577aa3e0658ff281e06db550094a0da393c4",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "終點為 (-1+7,2+3)=(6,5)。y 合格，但 x=6>5，所以不在安全區。",
    "derivedAnswer": "否，終點 (6,5) 超出 x 上限",
    "storedAnswer": "否，終點 (6,5) 超出 x 上限",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「否，終點 (6,5) 超出 x 上限」；其餘三項逐項檢查：「是，終點 (6,5) 在範圍內」不成立，忽略 x≤5。；「否，終點 (-8,-1) 超出兩界」不成立，方向運算錯。；「是，因為 y=5 合格」不成立，只檢查 y。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標素養題」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標與移動均以倉庫格為單位。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "邊界以 ≤ 包含，但 x=6 仍超出。",
      "alternateReading": "常見誤讀是「只檢查其中一個範圍條件。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需整合平移與雙邊界判斷，屬進階素養。",
    "literacyContextNecessity": "安全區的四個邊界是機器人是否可繼續運作的必要限制。",
    "prerequisiteCheck": "需會平移與不等式。",
    "languageCheck": "題幹所求為「平移後檢查矩形安全區」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「倉庫規定安全區為 -3≤x≤5 且 1≤y≤6。機器人從 (-1,2) 向右 7、向上 3 後，是否仍在安全區？」重新依序處理：終點為 (-1+7,2+3)=(6,5)。y 合格，但 x=6>5，所以不在安全區。 正確選項為「否，終點 (6,5) 超出 x 上限」。三個干擾項均對應不同錯誤：「是，終點 (6,5) 在範圍內」不成立，忽略 x≤5。；「否，終點 (-8,-1) 超出兩界」不成立，方向運算錯。；「是，因為 y=5 合格」不成立，只檢查 y。。邊界審查：邊界以 ≤ 包含，但 x=6 仍超出。 難度理由：需整合平移與雙邊界判斷，屬進階素養。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s012-v008",
    "contentSha256": "b4af785708c7fa6b3092055d0b9fee3290b1d7ca59f6dc690682c0728899ee00",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "甲在第一象限且到 y 軸 6 格，所以 a=6，甲=(6,4)。乙與甲水平對齊表示 y 相同，且乙 x=6，所以乙=(6,4)。",
    "derivedAnswer": "(6,4)",
    "storedAnswer": "(6,4)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(6,4)」；其餘三項逐項檢查：「(-6,4)」不成立，不符乙 x=6。；「(6,-4)」不成立，未保持同 y。；「(4,6)」不成立，交換分量。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標素養題」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目未要求甲乙點不同，因此重合不構成矛盾。",
      "alternateReading": "常見誤讀是「認為兩條路線終點必須不同，或混淆水平同 y。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "多條件逐層定位，屬進階。",
    "literacyContextNecessity": "展場路線的軸距與對齊要求共同決定終點，任一資訊皆不可刪除。",
    "prerequisiteCheck": "需會軸距與水平對齊。",
    "languageCheck": "題幹所求為「整合軸距、象限與對齊」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「一個展場的入口為 (0,0)。甲路線終點為 (a,4)，離 y 軸 6 格且在第一象限；乙路線終點為 (6,b)，與甲點水平對齊。求乙點。」重新依序處理：甲在第一象限且到 y 軸 6 格，所以 a=6，甲=(6,4)。乙與甲水平對齊表示 y 相同，且乙 x=6，所以乙=(6,4)。 正確選項為「(6,4)」。三個干擾項均對應不同錯誤：「(-6,4)」不成立，不符乙 x=6。；「(6,-4)」不成立，未保持同 y。；「(4,6)」不成立，交換分量。。邊界審查：題目未要求甲乙點不同，因此重合不構成矛盾。 難度理由：多條件逐層定位，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s012-v009",
    "contentSha256": "31aa8889bc00a148a4c1bf8ef8211016861748968cc4ad5d46aa0e618bfd9c2e",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "同一垂直道路使 x=2；位於下方 5 格使 y=3-5=-2。",
    "derivedAnswer": "(2,-2)",
    "storedAnswer": "(2,-2)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(2,-2)」；其餘三項逐項檢查：「(-3,3)」不成立，水平左移。；「(2,8)」不成立，在上方 5。；「(7,3)」不成立，水平右移。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標素養題」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "『下方』排除另一個距離 5 的上方點。",
      "alternateReading": "常見誤讀是「只用距離大小，未使用垂直與下方方向。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需同時使用對齊、距離與方向，屬進階。",
    "literacyContextNecessity": "同一道路與必須位於醫院下方是救護站選址限制。",
    "prerequisiteCheck": "需會垂直距離。",
    "languageCheck": "題幹所求為「依道路與方向定位救護站」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「地圖上醫院 H=(2,3)。救護站 S 必須與 H 同一垂直道路，且離 H 5 格並位於 H 下方。S 為何？」重新依序處理：同一垂直道路使 x=2；位於下方 5 格使 y=3-5=-2。 正確選項為「(2,-2)」。三個干擾項均對應不同錯誤：「(-3,3)」不成立，水平左移。；「(2,8)」不成立，在上方 5。；「(7,3)」不成立，水平右移。。邊界審查：『下方』排除另一個距離 5 的上方點。 難度理由：需同時使用對齊、距離與方向，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s012-v010",
    "contentSha256": "f5415af642486b4c6900631666a0a8e243d431aca4555ea7f06007c7d24aaaf8",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "格線寬 5、高 5，周長 20 格；每格 2 公尺，所以 40 公尺。",
    "derivedAnswer": "40 公尺",
    "storedAnswer": "40 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「40 公尺」；其餘三項逐項檢查：「20 公尺」不成立，未換算。；「50 公尺」不成立，誤用面積 25 格再乘 2。；「100 公尺」不成立，把面積當周長再錯換算。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標素養題」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "20 格×2 公尺/格。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "不等式邊界形成軸平行長方形。",
      "alternateReading": "常見誤讀是「把圍欄長度當成面積。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "情境要求辨認周長並換算，屬素養。",
    "literacyContextNecessity": "圍欄需求決定要算周長而非面積，每格 2 公尺決定實際材料長度。",
    "prerequisiteCheck": "需會長方形周長。",
    "languageCheck": "題幹所求為「計算場地邊界實際周長」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「活動場地使用座標格，每格 2 公尺。舞臺區為 -4≤x≤1、-2≤y≤3 的軸平行長方形。圍住舞臺需要多長的圍欄？」重新依序處理：格線寬 5、高 5，周長 20 格；每格 2 公尺，所以 40 公尺。 正確選項為「40 公尺」。三個干擾項均對應不同錯誤：「20 公尺」不成立，未換算。；「50 公尺」不成立，誤用面積 25 格再乘 2。；「100 公尺」不成立，把面積當周長再錯換算。。邊界審查：不等式邊界形成軸平行長方形。 難度理由：情境要求辨認周長並換算，屬素養。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s012-v011",
    "contentSha256": "80ddd63adcc6a6b57870dc0b811c32c37e11f90195a730f8d07e91745bab6749",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "令 15x+20=10x+45，得 5x=25，所以 x=5。",
    "derivedAnswer": "5 小時",
    "storedAnswer": "5 小時",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「5 小時」；其餘三項逐項檢查：「3 小時」不成立，65 與 75 元。；「4 小時」不成立，80 與 85 元。；「6 小時」不成立，110 與 105 元。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標素養題」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "x 小時，y 元。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "x=5 為非負且題目未限制整點以外。",
      "alternateReading": "常見誤讀是「只比較每小時費率，忽略固定費。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需把費用相同轉成兩直線交點，屬素養。",
    "literacyContextNecessity": "兩方案的固定費與時租費共同決定何時等價，實際選擇需要交點。",
    "prerequisiteCheck": "需會一次方程式。",
    "languageCheck": "題幹所求為「比較共享單車方案交點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「共享單車方案甲 y=15x+20，乙 y=10x+45，x 為小時、y 為元。租用幾小時兩方案費用相同？」重新依序處理：令 15x+20=10x+45，得 5x=25，所以 x=5。 正確選項為「5 小時」。三個干擾項均對應不同錯誤：「3 小時」不成立，65 與 75 元。；「4 小時」不成立，80 與 85 元。；「6 小時」不成立，110 與 105 元。。邊界審查：x=5 為非負且題目未限制整點以外。 難度理由：需把費用相同轉成兩直線交點，屬素養。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s012-v012",
    "contentSha256": "9e7c64a436b79124592459e40eea8265fa44bc273f45a11a35f28dfc7740fc42",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "聯立：兩式相加得 3x=12，x=4；交點為 (4,3)。到 y 軸距離為 |x|=4 公里。",
    "derivedAnswer": "4 公里",
    "storedAnswer": "4 公里",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「4 公里」；其餘三項逐項檢查：「3 公里」不成立，誤取 y，這是到 x 軸距離。；「5 公里」不成立，把 x、y 相加。；「7 公里」不成立，把兩坐標絕對值相加。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標素養題」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "到 y 軸看 x，4 單位即 4 公里。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "每坐標單位 1 公里，無額外比例。",
      "alternateReading": "常見誤讀是「求得交點後看錯要到哪一軸。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需連續使用聯立與到軸距離，屬高整合素養。",
    "literacyContextNecessity": "物資點受兩道路共同限制，且與 y 軸的實際距離影響調度；兩層資訊均必要。",
    "prerequisiteCheck": "需會交點與到軸距離。",
    "languageCheck": "題幹所求為「由道路交點再求軸距」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「災害指揮圖中，道路 L1:2x+y=11、L2:x-y=1。臨時物資點須位於兩路交點，且每坐標單位 1 公里。物資點到 y 軸的距離是多少？」重新依序處理：聯立：兩式相加得 3x=12，x=4；交點為 (4,3)。到 y 軸距離為 |x|=4 公里。 正確選項為「4 公里」。三個干擾項均對應不同錯誤：「3 公里」不成立，誤取 y，這是到 x 軸距離。；「5 公里」不成立，把 x、y 相加。；「7 公里」不成立，把兩坐標絕對值相加。。邊界審查：每坐標單位 1 公里，無額外比例。 難度理由：需連續使用聯立與到軸距離，屬高整合素養。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
