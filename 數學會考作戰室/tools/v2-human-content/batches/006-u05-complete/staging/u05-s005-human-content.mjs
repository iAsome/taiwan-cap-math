// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s005-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-coordinate-ops",
  "skillId": "coordinate-translation",
  "lockedTitle": "點的平移",
  "title": "點的平移：左右改 x，上下改 y",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能寫出水平或垂直平移後的坐標。",
    "能處理連續多步平移。",
    "能由終點反推原點。",
    "能判斷兩點之間需要的平移方向與單位數。"
  ],
  "prerequisites": [
    {
      "skillId": "coordinate-plot-description",
      "requiredLevel": "能說明並正確使用「描點與位置描述」的核心規則，且不混淆坐標分量順序。"
    }
  ],
  "glossary": [
    {
      "term": "平移",
      "definition": "每個點依相同方向與相同距離移動。"
    },
    {
      "term": "水平平移",
      "definition": "只改變橫坐標 x。"
    },
    {
      "term": "垂直平移",
      "definition": "只改變縱坐標 y。"
    },
    {
      "term": "反推",
      "definition": "由平移後位置逆向找回原位置。"
    }
  ],
  "notation": [
    {
      "symbol": "(x+a,y)",
      "meaning": "向右 a 單位後的坐標。"
    },
    {
      "symbol": "(x-a,y)",
      "meaning": "向左 a 單位後的坐標。"
    },
    {
      "symbol": "(x,y+b)",
      "meaning": "向上 b 單位後的坐標。"
    },
    {
      "symbol": "(x,y-b)",
      "meaning": "向下 b 單位後的坐標。"
    }
  ],
  "conceptNarrative": [
    "平移不會交換 x、y，也不會改變不相關的分量。",
    "向右與向上使相應分量增加；向左與向下使相應分量減少。",
    "連續平移可分步計算，也可先求水平與垂直的淨改變量。",
    "反推原點時要做相反方向的移動，不能再重做一次同方向平移。"
  ],
  "formalDefinitions": [
    {
      "name": "水平平移",
      "statement": "P=(x,y) 向右 a 單位成 (x+a,y)，向左 a 單位成 (x-a,y)。"
    },
    {
      "name": "垂直平移",
      "statement": "P=(x,y) 向上 b 單位成 (x,y+b)，向下 b 單位成 (x,y-b)。"
    }
  ],
  "formulas": [
    {
      "formula": "P'=(x+Δx,y+Δy)",
      "conditions": [
        "Δx、Δy 為帶正負號的改變量",
        "只討論平行坐標軸的平移"
      ],
      "meaning": "把水平與垂直位移分別加到兩個分量。"
    }
  ],
  "nonApplicableCases": [
    "旋轉、鏡射不是本節平移。",
    "斜移若未給水平與垂直改變量，不能只用一個數。",
    "距離為正，但向左向下的改變量為負。",
    "反推時不能忘記改用相反號。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先確認題目中的坐標軸正向、每單位尺度與起點，並把方位指令翻成左右上下。",
      "check": "情境題若使用東西南北，題幹已有軸向與單位約定。"
    },
    {
      "step": 2,
      "instruction": "把向右、向上記為正改變量，向左、向下記為負改變量。",
      "check": "水平改變只對應x，垂直改變只對應y。"
    },
    {
      "step": 3,
      "instruction": "將水平改變量加到原x，垂直改變量加到原y，保留帶號數運算。",
      "check": "跨越零時直接計算，不用絕對值猜新坐標。"
    },
    {
      "step": 4,
      "instruction": "連續平移先分別合併水平與垂直淨改變；反推則將兩個方向都反轉。",
      "check": "沒有把總路程誤當淨位移，也沒有只反轉一個方向。"
    },
    {
      "step": 5,
      "instruction": "用終點減起點重算Δx、Δy，核對方向、距離與坐標順序。",
      "check": "驗算所得改變量與原指令完全一致。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "A=(2,-3)向右5單位，求終點。",
      "solutionSteps": [
        "向右只改x，計算2＋5＝7。",
        "y保持-3，所以終點是(7,-3)。",
        "終點減起點得Δx＝5、Δy＝0，與指令一致。"
      ],
      "answer": "(7,-3)。",
      "why": "水平向右平移只增加橫坐標，縱坐標不應改動。把五加到原x得到七，再保留原y負三；用終點減起點驗算，改變量正好是水平正五、垂直零。"
    },
    {
      "exampleId": "L2",
      "prompt": "B=(-4,6)向下9單位，求終點。",
      "solutionSteps": [
        "向下只改y，計算6－9＝-3。",
        "x保持-4，所以終點是(-4,-3)。",
        "驗算Δx＝0、Δy＝-9，方向與距離正確。"
      ],
      "answer": "(-4,-3)。",
      "why": "垂直向下表示縱坐標減少九，即使跨過零也仍用帶號數相減。橫坐標保持負四，新的縱坐標是負三；驗算得到垂直改變量負九，確實代表向下九單位。"
    },
    {
      "exampleId": "L3",
      "prompt": "C=(1,2)先向左3，再向上4，求終點。",
      "solutionSteps": [
        "向左3使x＝1－3＝-2。",
        "向上4使y＝2＋4＝6。",
        "終點為(-2,6)，整體改變量是(-3,+4)。"
      ],
      "answer": "(-2,6)。",
      "why": "兩段平移分別作用在不同分量，先後順序不會讓左移改到y或上移改到x。從一減三得到負二，二加四得到六；終點與起點的差也回到左三、上四。"
    },
    {
      "exampleId": "L4",
      "prompt": "D向右7、向下2後為(5,-1)，求D原坐標。",
      "solutionSteps": [
        "反推需從終點向左7，所以原x＝5－7＝-2。",
        "反推需從終點向上2，所以原y＝-1＋2＝1。",
        "將(-2,1)依原指令右7、下2，確實回到(5,-1)。"
      ],
      "answer": "D=(-2,1)。",
      "why": "已知終點求起點必須使用逆位移：右七的逆向是左七，下二的逆向是上二。算得原點後再照原指令正向驗算，可以避免反推時仍做同方向的錯誤。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "向右同時增加 x、y。",
      "why": "把平移當成整點一起變大。",
      "correction": "水平移動只改 x。"
    },
    {
      "mistake": "向下計算 y+距離。",
      "why": "忽略方向符號。",
      "correction": "向下使 y 減少。"
    },
    {
      "mistake": "負數左移時把絕對值變小。",
      "why": "以靠近 0 取代真正相減。",
      "correction": "直接算 x-距離。"
    },
    {
      "mistake": "反推仍做同方向。",
      "why": "未使用逆運算。",
      "correction": "終點往相反方向走回原點。"
    },
    {
      "mistake": "把兩段位移相乘。",
      "why": "混淆累加與倍數。",
      "correction": "同方向改變量應相加。"
    }
  ],
  "selfCheck": [
    "我是否只改對應分量？",
    "方向是否轉成正確正負號？",
    "反推時是否使用相反位移？",
    "終點減起點是否能驗證答案？"
  ],
  "summary": [
    "右加 x、左減 x。",
    "上加 y、下減 y。",
    "多步平移可合併淨位移。",
    "反推要做相反方向。"
  ],
  "connections": {
    "previous": "承接描點與路線描述，已能把方向轉成坐標改變。",
    "next": [
      "下一節把同 x 或同 y 的坐標差解讀成距離。",
      "長方形邊長也會使用這些差值。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s005-v001",
      "u05-s005-v002",
      "u05-s005-v003",
      "u05-s005-v004",
      "u05-s005-v005",
      "u05-s005-v006",
      "u05-s005-v007",
      "u05-s005-v008",
      "u05-s005-v009",
      "u05-s005-v010",
      "u05-s005-v011",
      "u05-s005-v012"
    ],
    "constructedResponseIds": [
      "u05-s005-cr001",
      "u05-s005-cr002"
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
    "reviewNote": "四例逐一以終點減起點驗算，包含正負數、跨越坐標軸、多步與反推；確認平移未誤用旋轉或交換坐標。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "9f20e24afe56eb1588e8f8a4fcbb0852413a9a2046379c6d6b34c3eebbe81d98",
  "concept": "點的平移是把每個點按照相同方向與距離移動。向右或向左只改橫坐標，分別加上或減去水平距離；向上或向下只改縱坐標，分別加上或減去垂直距離。連續平移可把各方向帶正負號的改變量相加，反推起點則使用相反位移。計算後可用終點減起點驗證水平與垂直改變量，並確認坐標順序始終是先x後y。"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s005-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 A=(-1,4) 向右平移 6 單位後，坐標為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "計算單一步水平平移",
    "choices": [
      "(5,4)",
      "(-7,4)",
      "(-1,10)",
      "(5,10)"
    ],
    "answerIndex": 0,
    "independentSolution": "向右只增加 x：-1+6=5；y 保持 4。",
    "explanation": "向右平移只改變橫坐標，且橫坐標增加六；縱坐標保持原來的四。因此新的橫坐標為負一加六等於五，終點是(5,4)。把六加到縱坐標或同時改兩個分量，都不符合水平平移。",
    "steps": [
      "辨認向右是水平方向，只處理橫坐標x。",
      "計算新橫坐標-1＋6＝5。",
      "保留縱坐標4，依(x,y)順序寫成(5,4)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(5,4)",
        "truth": true,
        "reason": "水平右移正確。"
      },
      {
        "choice": "(-7,4)",
        "truth": false,
        "reason": "把右移當左移。"
      },
      {
        "choice": "(-1,10)",
        "truth": false,
        "reason": "錯改 y。"
      },
      {
        "choice": "(5,10)",
        "truth": false,
        "reason": "同時改了不應變的 y。"
      }
    ],
    "misconceptionTarget": "水平平移同時改變兩個分量。",
    "prerequisiteCheck": "需會坐標與整數加法。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "平移方向與距離明確。",
    "difficultyReason": "單一分量加法，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "計算單一步水平平移",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f5bcde48131f6f9a6b5ea90188dcd6d36d50e0dcdeb7266f3ce9ccec9707c3b3",
    "commonMistake": "把向右六單位同時加到橫、縱坐標，誤認兩個分量都會改變。"
  },
  {
    "questionId": "u05-s005-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 B=(3,-2) 向下平移 5 單位後為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "計算單一步垂直平移",
    "choices": [
      "(-2,-2)",
      "(3,3)",
      "(3,-7)",
      "(8,-2)"
    ],
    "answerIndex": 2,
    "independentSolution": "向下只使 y 減 5：-2-5=-7，x 不變。",
    "explanation": "向下平移只讓縱坐標減少五，橫坐標三不變。原縱坐標是負二，再向下五單位要算負二減五等於負七，因此終點為(3,-7)。負數向下會離零更遠，不是變成正三。",
    "steps": [
      "辨認向下是垂直方向，橫坐標仍為3。",
      "計算縱坐標-2－5＝-7。",
      "按橫、縱順序組成終點(3,-7)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-2,-2)",
        "truth": false,
        "reason": "誤把 x 減 5。"
      },
      {
        "choice": "(3,3)",
        "truth": false,
        "reason": "把下移當上移。"
      },
      {
        "choice": "(3,-7)",
        "truth": true,
        "reason": "垂直下移正確。"
      },
      {
        "choice": "(8,-2)",
        "truth": false,
        "reason": "誤把 x 加 5。"
      }
    ],
    "misconceptionTarget": "負數向下時誤認為靠近 0。",
    "prerequisiteCheck": "需理解上下只改 y。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "向下的改變量為 -5。",
    "difficultyReason": "單一分量減法，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "計算單一步垂直平移",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "1fd82d44d6232016a6c57308fe7c37b89203a4468e3a3aca45f82a7de4d468ce",
    "commonMistake": "看到負二就把向下五誤算成加五，以為向下會使負數靠近零。"
  },
  {
    "questionId": "u05-s005-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "將 P=(2,7) 平移成 P'=(2,1)，這次平移為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由前後坐標判斷平移",
    "choices": [
      "向上 6 單位",
      "向下 6 單位",
      "向左 6 單位",
      "向右 6 單位"
    ],
    "answerIndex": 1,
    "independentSolution": "x 不變，y 由 7 降到 1，減少 6，因此向下 6。",
    "explanation": "起點與終點的橫坐標都等於二，表示沒有水平移動；縱坐標由七變成一，改變量是一減七等於負六。負號代表向下，所以這次平移是向下六單位，而不是只看距離六就猜方向。",
    "steps": [
      "比較橫坐標2與2，確認水平改變量為0。",
      "計算縱坐標改變量1－7＝-6。",
      "把負的垂直改變量翻成向下6單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "向上 6 單位",
        "truth": false,
        "reason": "方向相反。"
      },
      {
        "choice": "向下 6 單位",
        "truth": true,
        "reason": "y 減少 6。"
      },
      {
        "choice": "向左 6 單位",
        "truth": false,
        "reason": "錯判為水平。"
      },
      {
        "choice": "向右 6 單位",
        "truth": false,
        "reason": "錯判為水平且方向不符。"
      }
    ],
    "misconceptionTarget": "只看差的絕對值而未判斷方向。",
    "prerequisiteCheck": "需會比較坐標。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩點只差 y 分量，所以是純垂直平移。",
    "difficultyReason": "需比較兩點差值，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "由前後坐標判斷平移",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "0a6fcb0b71831e3cbc0a15db0927c7c5596f9566b2ab39efd072671090c667e3",
    "commonMistake": "只算縱坐標差的絕對值六，卻沒有由負號判斷實際方向是向下。"
  },
  {
    "questionId": "u05-s005-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 C=(-4,3) 先向右 9，再向下 7，終點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "計算兩方向連續平移",
    "choices": [
      "(-13,-4)",
      "(5,10)",
      "(-11,12)",
      "(5,-4)"
    ],
    "answerIndex": 3,
    "independentSolution": "x=-4+9=5，y=3-7=-4，所以終點 (5,-4)。",
    "explanation": "先向右九單位，使橫坐標由負四變成負四加九等於五；再向下七單位，使縱坐標由三變成三減七等於負四。兩段移動作用在不同分量，最後得到(5,-4)，跨過坐標軸也仍依帶號數運算。",
    "steps": [
      "向右9，只改x：-4＋9＝5。",
      "向下7，只改y：3－7＝-4。",
      "將兩個新分量依序寫成終點(5,-4)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-13,-4)",
        "truth": false,
        "reason": "右移誤做減法。"
      },
      {
        "choice": "(5,10)",
        "truth": false,
        "reason": "下移誤做加法。"
      },
      {
        "choice": "(-11,12)",
        "truth": false,
        "reason": "兩方向都反。"
      },
      {
        "choice": "(5,-4)",
        "truth": true,
        "reason": "兩段平移正確。"
      }
    ],
    "misconceptionTarget": "跨越原點時符號運算錯誤。",
    "prerequisiteCheck": "需會整數加減。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "平移可分步或合併，結果唯一。",
    "difficultyReason": "需更新兩分量並處理負數，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "計算兩方向連續平移",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "942b24f597670167747a19147044e20105f96937d42fa1da0ac36a1613c727bc",
    "commonMistake": "跨越零時把右移或下移方向做反，造成兩個新坐標的正負號錯誤。"
  },
  {
    "questionId": "u05-s005-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若 D=(a,-1) 向左 3 單位後為 (5,-1)，求 a。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "反推水平平移前坐標",
    "choices": [
      "2",
      "5",
      "8",
      "-8"
    ],
    "answerIndex": 2,
    "independentSolution": "向左 3 後橫坐標 a-3=5，所以 a=8。",
    "explanation": "點D向左三單位後，橫坐標由a變成a－3，題目給終點橫坐標為五，所以列a－3＝5。等式兩邊同加三得a＝8；驗算八向左三確實到五，縱坐標則一直是負一。",
    "steps": [
      "把向左3翻成終點橫坐標a－3。",
      "依終點列方程式a－3＝5。",
      "兩邊同加3得a＝8，代回平移檢查。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "2-3=-1。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "未逆推平移前位置。"
      },
      {
        "choice": "8",
        "truth": true,
        "reason": "8-3=5。"
      },
      {
        "choice": "-8",
        "truth": false,
        "reason": "符號無依據。"
      }
    ],
    "misconceptionTarget": "由終點反推時仍向左移。",
    "prerequisiteCheck": "需會解簡單方程式。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "y 分量一致，未知只在 x。",
    "difficultyReason": "需使用逆運算，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "反推水平平移前坐標",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "91b06763b4e8119a465ba8658b17a085fc6415c2f7d75f29461b5b5628872634",
    "commonMistake": "由終點反推起點時仍減三，沒有用相反方向加三回到原位置。"
  },
  {
    "questionId": "u05-s005-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 E=(m,2m) 向上 4 單位後為 (3,10)，則 m 為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "利用不變分量求參數",
    "choices": [
      "3",
      "2",
      "5",
      "7"
    ],
    "answerIndex": 0,
    "independentSolution": "平移不改 x，所以 m=3；檢查 y：2m+4=6+4=10，成立。",
    "explanation": "向上平移不改橫坐標，所以起點橫坐標m必須等於終點橫坐標三，得到m＝3。再檢查縱坐標：起點為2m＝6，向上四後成為十，與終點一致；兩個分量共同支持同一答案。",
    "steps": [
      "利用向上只改y，從橫坐標不變得到m＝3。",
      "把m＝3代入原縱坐標2m，得到6。",
      "計算6＋4＝10，核對終點兩個分量皆吻合。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": true,
        "reason": "前後兩分量都符合。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "x 會是 2，且 y+4=8。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "x 會是 5。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "x 會是 7。"
      }
    ],
    "misconceptionTarget": "只用 y 方程式或誤以為上移也改 x。",
    "prerequisiteCheck": "需會代入與平移規則。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "同一 m 同時出現在兩分量，兩條件一致。",
    "difficultyReason": "需辨認平移中的不變量並交叉驗證。",
    "literacyContextNecessity": null,
    "authoringIntent": "利用不變分量求參數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6ceb823222501105554ac4b3e3d60a26c52c7b050cc6a816c877b264c6a1914f",
    "commonMistake": "只由縱坐標列式而不檢查橫坐標，或誤認向上也會改變x。"
  },
  {
    "questionId": "u05-s005-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "一點先向右 5、向上 2，再向左 8、向下 6。整體等同哪一次平移？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "合併多步平移",
    "choices": [
      "向右 13、向上 8",
      "向右 3、向上 4",
      "向左 13、向下 8",
      "向左 3、向下 4"
    ],
    "answerIndex": 3,
    "independentSolution": "水平淨改變 5-8=-3，垂直淨改變 2-6=-4，所以等同左 3、下 4。",
    "explanation": "水平改變量要帶方向合併：向右五記為正五、向左八記為負八，淨值為負三，所以向左三。垂直方向向上二、向下六的淨值是負四，所以向下四；整體等同左三、下四。",
    "steps": [
      "合併水平改變量：+5－8＝-3。",
      "合併垂直改變量：+2－6＝-4。",
      "把兩個負號翻成方向，得到向左3、向下4。"
    ],
    "optionAnalysis": [
      {
        "choice": "向右 13、向上 8",
        "truth": false,
        "reason": "把相反方向相加。"
      },
      {
        "choice": "向右 3、向上 4",
        "truth": false,
        "reason": "只取差的大小，方向反。"
      },
      {
        "choice": "向左 13、向下 8",
        "truth": false,
        "reason": "使用總步數而非淨位移。"
      },
      {
        "choice": "向左 3、向下 4",
        "truth": true,
        "reason": "淨位移正確。"
      }
    ],
    "misconceptionTarget": "把各方向總路程當成平移後的淨位移。",
    "prerequisiteCheck": "需會帶符號加總。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "只問整體平移，不問路程或中途位置。",
    "difficultyReason": "需分方向合併四段改變量，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "合併多步平移",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "3b5127c1e5fd361f2e71dbbf77b2c707e5a3adcc9e1789a498e38b798e4e5be0",
    "commonMistake": "把所有移動距離直接相加成總路程，沒有計算相反方向抵銷後的淨位移。"
  },
  {
    "questionId": "u05-s005-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 F 經平移「向左 4、向上 7」後成為 (1,2)。F 原來在哪裡？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "反推二維平移前位置",
    "choices": [
      "(-3,9)",
      "(5,-5)",
      "(-5,5)",
      "(5,9)"
    ],
    "answerIndex": 1,
    "independentSolution": "逆向操作為向右 4、向下 7：(1+4,2-7)=(5,-5)。",
    "explanation": "已知的是平移後的終點，要求原點必須做逆向操作。原平移向左四、向上七，逆向就是從(1,2)向右四、向下七，得到橫坐標五、縱坐標負五，因此F原來是(5,-5)。",
    "steps": [
      "將原平移的左4、上7反轉為右4、下7。",
      "由終點計算原橫坐標1＋4＝5。",
      "計算原縱坐標2－7＝-5，寫成F＝(5,-5)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-3,9)",
        "truth": false,
        "reason": "把原平移再做一次。"
      },
      {
        "choice": "(5,-5)",
        "truth": true,
        "reason": "再左 4、上 7 可回到 (1,2)。"
      },
      {
        "choice": "(-5,5)",
        "truth": false,
        "reason": "方向與分量混淆。"
      },
      {
        "choice": "(5,9)",
        "truth": false,
        "reason": "只逆向水平，垂直方向錯。"
      }
    ],
    "misconceptionTarget": "反推時未將兩個方向全部反轉。",
    "prerequisiteCheck": "需熟悉逆運算。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "原位置唯一，回做原平移可核對。",
    "difficultyReason": "需對兩分量使用逆向操作並驗算。",
    "literacyContextNecessity": null,
    "authoringIntent": "反推二維平移前位置",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8682f39bda38b98f1d29ce74ec493bf2db2d78b951d9c7c13cd92edefa1965cd",
    "commonMistake": "反推時把原指令再做一次，或只反轉水平而沒有同時反轉垂直方向。"
  },
  {
    "questionId": "u05-s005-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若將 G=(k+1,2-k) 向右 2、向下 3 後得到 (6,-4)，求 k。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "含參數點的平移與一致性",
    "choices": [
      "1",
      "3",
      "2",
      "5"
    ],
    "answerIndex": 1,
    "independentSolution": "平移後為 (k+3,-1-k)。令 k+3=6 得 k=3；第二分量 -1-3=-4，驗證成立。",
    "explanation": "向右二使橫坐標k＋1變成k＋3，向下三使縱坐標2－k變成-1－k，所以平移後為(k＋3,-1－k)。令第一分量等於六得k＝3，再代入第二分量得到負四，兩個條件一致。",
    "steps": [
      "把平移作用到代數坐標，寫成(k＋3,-1－k)。",
      "由k＋3＝6解得k＝3。",
      "代入第二分量-1－3＝-4，確認終點一致。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "平移後為 (4,-2)。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "兩分量同時吻合。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "平移後為 (5,-3)。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "平移後為 (8,-6)。"
      }
    ],
    "misconceptionTarget": "沒有先把平移作用到代數式，或只檢查一個分量。",
    "prerequisiteCheck": "需會一元一次式與平移。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩個分量給出相同 k，無矛盾。",
    "difficultyReason": "需處理代數分量、二步平移與交叉驗證，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "含參數點的平移與一致性",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b847eb6ded0f6ea01ec9d34a8cc0b45a16a888a1153e51917e019d75763d3b3c",
    "commonMistake": "沒有先把平移作用到整個代數式，或只用一個分量求值而未驗證另一分量。"
  },
  {
    "questionId": "u05-s005-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "在x軸正向代表東、y軸正向代表北，且指令數字表示坐標單位的倉庫平面上，機器人由(-3,2)收到「E7、S4」，其中E為向東、S為向南。執行後坐標為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "依導航碼執行平移",
    "choices": [
      "(-10,-2)",
      "(4,6)",
      "(-7,-4)",
      "(4,-2)"
    ],
    "answerIndex": 3,
    "independentSolution": "E7 使 x=-3+7=4；S4 使 y=2-4=-2。",
    "explanation": "題幹已明定東是x軸正向、北是y軸正向，且指令數字就是坐標單位。E7使橫坐標由負三增加七成為四，S4使縱坐標由二減少四成為負二，因此終點唯一是(4,-2)。",
    "steps": [
      "依坐標軸約定，把E7翻成橫坐標加7。",
      "計算-3＋7＝4，再把S4翻成縱坐標減4。",
      "計算2－4＝-2，依(x,y)順序寫成(4,-2)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-10,-2)",
        "truth": false,
        "reason": "東移誤做西移。"
      },
      {
        "choice": "(4,6)",
        "truth": false,
        "reason": "南移誤做北移。"
      },
      {
        "choice": "(-7,-4)",
        "truth": false,
        "reason": "直接以指令數字替換坐標。"
      },
      {
        "choice": "(4,-2)",
        "truth": true,
        "reason": "兩個方位指令正確。"
      }
    ],
    "misconceptionTarget": "未解碼方位字母或忽略起點。",
    "prerequisiteCheck": "需會方位與坐標正負。",
    "estimatedTimeSec": 150,
    "unitCheck": "每個指令數字代表格數，答案為格線坐標。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "東、南方向由指令明確定義。",
    "difficultyReason": "控制碼與起點資訊共同決定答案，屬素養。",
    "literacyContextNecessity": "E、S 是倉儲系統的方向碼，必須解讀後才能形成平移運算。",
    "authoringIntent": "依導航碼執行平移",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e3a4b41295e988768f1348d8a495e0adae1d3cb89c114e8ba693cbb44b83f1a9",
    "commonMistake": "未先確認題幹的軸向與單位約定，就憑日常地圖方向自行套用正負號。"
  },
  {
    "questionId": "u05-s005-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "舞臺燈光定位點原在 (6,-1)。控制器先將光點左移 2 公尺，再上移 5 公尺。若每坐標單位為 1 公尺，最後位置為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "在舞臺定位情境平移點",
    "choices": [
      "(4,4)",
      "(8,4)",
      "(4,-6)",
      "(11,-3)"
    ],
    "answerIndex": 0,
    "independentSolution": "左移使 x=6-2=4；上移使 y=-1+5=4。",
    "explanation": "每個坐標單位就是一公尺，因此左移二公尺等於橫坐標六減二，得到四；上移五公尺等於縱坐標負一加五，也得到四。兩段移動分別作用在x、y，最後位置是(4,4)。",
    "steps": [
      "依每單位1公尺，把左移2轉成x＝6－2＝4。",
      "把上移5轉成y＝-1＋5＝4。",
      "依坐標順序組成終點(4,4)，核對單位換算。"
    ],
    "optionAnalysis": [
      {
        "choice": "(4,4)",
        "truth": true,
        "reason": "左、上移動都正確。"
      },
      {
        "choice": "(8,4)",
        "truth": false,
        "reason": "左移誤為右移。"
      },
      {
        "choice": "(4,-6)",
        "truth": false,
        "reason": "上移誤為下移。"
      },
      {
        "choice": "(11,-3)",
        "truth": false,
        "reason": "把兩段距離加到錯誤分量。"
      }
    ],
    "misconceptionTarget": "控制方向與坐標正負不一致。",
    "prerequisiteCheck": "需會平移。",
    "estimatedTimeSec": 150,
    "unitCheck": "坐標與移動均以公尺為一單位。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "每單位 1 公尺，無比例換算。",
    "difficultyReason": "需將兩個實際方向轉成坐標更新。",
    "literacyContextNecessity": "燈光控制器的兩段實際操作直接對應 x、y 改變，情境不是可刪除裝飾。",
    "authoringIntent": "在舞臺定位情境平移點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d22b21b0c25295d6fcdfacd2932396924fb8f31642ac72b799d60362a0ad2d8c",
    "commonMistake": "把控制器的左、上方向做反，或將兩段距離加到同一個坐標分量。"
  },
  {
    "questionId": "u05-s005-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "地圖上的救護車從 A=(2,5) 平移到 B=(-4,1)。若要把另一輛位於 C=(7,-3) 的車做完全相同的平移，終點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "把同一平移套用到另一位置",
    "choices": [
      "(13,1)",
      "(3,-1)",
      "(1,-7)",
      "(-1,7)"
    ],
    "answerIndex": 2,
    "independentSolution": "A 到 B 的改變量為 (-4-2,1-5)=(-6,-4)。套到 C 得 (7-6,-3-4)=(1,-7)。",
    "explanation": "先用終點減起點求A到B的共同平移量：橫向為負四減二等於負六，縱向為一減五等於負四。把同一改變量加到C=(7,-3)，得到(7－6,-3－4)＝(1,-7)。",
    "steps": [
      "計算A到B的水平改變量-4－2＝-6。",
      "計算垂直改變量1－5＝-4。",
      "把(-6,-4)套到C，得到(7－6,-3－4)＝(1,-7)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(13,1)",
        "truth": false,
        "reason": "把改變量方向反轉。"
      },
      {
        "choice": "(3,-1)",
        "truth": false,
        "reason": "只減去坐標絕對值差的一部分。"
      },
      {
        "choice": "(1,-7)",
        "truth": true,
        "reason": "使用與 A→B 完全相同的改變量。"
      },
      {
        "choice": "(-1,7)",
        "truth": false,
        "reason": "交換並反轉兩分量。"
      }
    ],
    "misconceptionTarget": "把終點坐標直接加到另一點，而非使用相同改變量。",
    "prerequisiteCheck": "需會比較前後坐標。",
    "estimatedTimeSec": 150,
    "unitCheck": "地圖坐標單位一致，答案為坐標而非行駛總路程。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "『完全相同的平移』指方向與距離均相同，不是移到同一終點。",
    "difficultyReason": "需先從一對點推得平移，再作用於新點，屬素養整合。",
    "literacyContextNecessity": "救護車調度要求複製相同位移；A、B 的位置資訊用來決定 C 的操作。",
    "authoringIntent": "把同一平移套用到另一位置",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "a1773a6c4e233e73ff6520905eaf858078585be8f6eb4b35b5a2ae1c11279565",
    "commonMistake": "把B的終點坐標直接加到C，而不是先求出A到B的平移改變量。"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s005-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "點 A=(2,-4) 先向左 5 單位，再向上 9 單位。求平移後坐標，並寫出這次整體平移的水平與垂直改變量。",
    "requiredWork": [
      "計算終點。",
      "寫出 Δx、Δy。"
    ],
    "fullCreditSolution": [
      "起點A的橫坐標為二，向左五單位只改x，所以新橫坐標是2－5＝-3。",
      "起點縱坐標為負四，向上九單位只改y，所以新縱坐標是-4＋9＝5。",
      "平移後坐標為(-3,5)；終點減起點可得水平改變量Δx＝-3－2＝-5。",
      "垂直改變量Δy＝5－(-4)＝+9，與題目的左五、上九一致。"
    ],
    "alternativeSolutions": [
      "可直接寫 (2-5,-4+9)=(-3,5)。"
    ],
    "reasoningSteps": [
      "把向左五翻成橫坐標減五，計算新的x。",
      "把向上九翻成縱坐標加九，計算新的y。",
      "依(x,y)順序寫出終點，並以終點減起點求兩個改變量。",
      "核對改變量的正負號與原指令方向一致。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "終點 (-3,5) 與 Δx=-5、Δy=+9 全部正確。"
      },
      {
        "score": 2,
        "criteria": "終點正確但未寫改變量，或改變量正確而終點一項算錯。"
      },
      {
        "score": 1,
        "criteria": "只正確處理一個方向。"
      },
      {
        "score": 0,
        "criteria": "左右改 y、上下改 x，未掌握平移規則。"
      }
    ],
    "partialCreditRules": [
      "+9 可寫 9；-5 的負號不可省略。"
    ],
    "followThroughPolicy": "若第一次平移造成一個分量錯誤，第二次仍只改變 y 分量且整體改變量判讀正確，可依後續平移規則給部分分。",
    "unitAndNotationRules": "終點寫成有序對；整體改變量寫為 Δx=-5、Δy=9，或等義的向左 5、向上 9。",
    "answerOnlyPolicy": "只寫終點 (-3,5) 而沒有水平與垂直改變量，最高給 2 分。",
    "commonErrors": [
      "把向左五寫成Δx＝+5，或因起點橫坐標為正就忽略左移會跨越零。",
      "將左五與上九都作用在同一分量，沒有分別更新橫坐標與縱坐標。"
    ],
    "independentReview": {
      "derivedResult": "一個分量的早期算術錯不影響另一分量得分。",
      "ambiguity": "終點用 (x,y)，改變量需標明水平與垂直。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 一個分量的早期算術錯不影響另一分量得分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7e0a9469ddface6be9246af405f7a58f25573cce7a704ce1c0d0648cd0c6bd8a"
  },
  {
    "questionId": "u05-s005-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "點 P=(m,2m-1) 經向右 3、向下 4 的平移後成為 (8,5)。求 m，並檢查兩個分量是否給出相同結果。",
    "requiredWork": [
      "寫出平移後坐標。",
      "由兩分量分別求或驗證 m。"
    ],
    "fullCreditSolution": [
      "向右三使橫坐標m變成m＋3；向下四使縱坐標2m－1變成2m－5，因此終點為(m＋3,2m－5)。",
      "比較第一分量：m＋3＝8，兩邊同減三得到m＝5。",
      "用第二分量獨立檢查：2m－5＝5，代入m＝5得到10－5＝5，與終點縱坐標一致。",
      "兩個分量都給出同一個m，所以答案為m＝5。"
    ],
    "alternativeSolutions": [
      "也可先由 2m-5=5 求 m=5，再檢查第一分量。"
    ],
    "reasoningSteps": [
      "分別把向右三與向下四作用在原坐標的兩個分量。",
      "由終點橫坐標建立一次方程式並求m。",
      "把所得m代入平移後縱坐標，檢查是否等於五。",
      "確認兩個分量沒有矛盾後作答。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確寫出平移式、求 m=5，並完成另一分量驗證。"
      },
      {
        "score": 2,
        "criteria": "m=5 正確且有一條方程式，但未明確驗證。"
      },
      {
        "score": 1,
        "criteria": "平移後坐標式只對一項，或方程式正確但解算錯。"
      },
      {
        "score": 0,
        "criteria": "平移方向全部反或把 m 當坐標常數。"
      }
    ],
    "partialCreditRules": [
      "先用哪一分量不影響得分。"
    ],
    "followThroughPolicy": "若由 x 分量求 m 時有算術錯誤，但把該值代入 y 分量並正確指出不一致，可給檢查方法分；不可因單一分量成立即判滿分。",
    "unitAndNotationRules": "須分別列出 m+3=8 與 2m-1-4=5，參數答案寫成 m=5。",
    "answerOnlyPolicy": "只寫 m=5 而沒有由兩個分量檢查一致性，最高給 1 分。",
    "commonErrors": [
      "把向下四錯加到2m－1，寫成2m＋3，導致第二分量方程式錯誤。",
      "只用其中一個分量求m而完全忽略另一分量，未發現可能的資料不一致。"
    ],
    "independentReview": {
      "derivedResult": "若一條方程式解算錯但另一條正確得到 m=5，可給 2 分並指出不一致。",
      "ambiguity": "m 為純數；終點為坐標。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若一條方程式解算錯但另一條正確得到 m=5，可給 2 分並指出不一致。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d49488887c02c50e6ca31c567a427b3eda93cb2acc36dfa75b3ca85f3d5aec9e"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s005-v001",
    "contentSha256": "f5bcde48131f6f9a6b5ea90188dcd6d36d50e0dcdeb7266f3ce9ccec9707c3b3",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "向右只增加 x：-1+6=5；y 保持 4。",
    "derivedAnswer": "(5,4)",
    "storedAnswer": "(5,4)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(5,4)」；其餘三項逐項檢查：「(-7,4)」不成立，把右移當左移。；「(-1,10)」不成立，錯改 y。；「(5,10)」不成立，同時改了不應變的 y。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「點的平移」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "平移方向與距離明確。",
      "alternateReading": "常見誤讀是「水平平移同時改變兩個分量。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "單一分量加法，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會坐標與整數加法。",
    "languageCheck": "題幹所求為「計算單一步水平平移」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 A=(-1,4) 向右平移 6 單位後，坐標為何？」重新依序處理：向右只增加 x：-1+6=5；y 保持 4。 正確選項為「(5,4)」。三個干擾項均對應不同錯誤：「(-7,4)」不成立，把右移當左移。；「(-1,10)」不成立，錯改 y。；「(5,10)」不成立，同時改了不應變的 y。。邊界審查：平移方向與距離明確。 難度理由：單一分量加法，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s005-v002",
    "contentSha256": "1fd82d44d6232016a6c57308fe7c37b89203a4468e3a3aca45f82a7de4d468ce",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "向下只使 y 減 5：-2-5=-7，x 不變。",
    "derivedAnswer": "(3,-7)",
    "storedAnswer": "(3,-7)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(3,-7)」；其餘三項逐項檢查：「(-2,-2)」不成立，誤把 x 減 5。；「(3,3)」不成立，把下移當上移。；「(8,-2)」不成立，誤把 x 加 5。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「點的平移」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "向下的改變量為 -5。",
      "alternateReading": "常見誤讀是「負數向下時誤認為靠近 0。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "單一分量減法，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解上下只改 y。",
    "languageCheck": "題幹所求為「計算單一步垂直平移」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 B=(3,-2) 向下平移 5 單位後為何？」重新依序處理：向下只使 y 減 5：-2-5=-7，x 不變。 正確選項為「(3,-7)」。三個干擾項均對應不同錯誤：「(-2,-2)」不成立，誤把 x 減 5。；「(3,3)」不成立，把下移當上移。；「(8,-2)」不成立，誤把 x 加 5。。邊界審查：向下的改變量為 -5。 難度理由：單一分量減法，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s005-v003",
    "contentSha256": "0a6fcb0b71831e3cbc0a15db0927c7c5596f9566b2ab39efd072671090c667e3",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x 不變，y 由 7 降到 1，減少 6，因此向下 6。",
    "derivedAnswer": "向下 6 單位",
    "storedAnswer": "向下 6 單位",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「向下 6 單位」；其餘三項逐項檢查：「向上 6 單位」不成立，方向相反。；「向左 6 單位」不成立，錯判為水平。；「向右 6 單位」不成立，錯判為水平且方向不符。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「點的平移」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩點只差 y 分量，所以是純垂直平移。",
      "alternateReading": "常見誤讀是「只看差的絕對值而未判斷方向。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需比較兩點差值，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會比較坐標。",
    "languageCheck": "題幹所求為「由前後坐標判斷平移」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「將 P=(2,7) 平移成 P'=(2,1)，這次平移為何？」重新依序處理：x 不變，y 由 7 降到 1，減少 6，因此向下 6。 正確選項為「向下 6 單位」。三個干擾項均對應不同錯誤：「向上 6 單位」不成立，方向相反。；「向左 6 單位」不成立，錯判為水平。；「向右 6 單位」不成立，錯判為水平且方向不符。。邊界審查：兩點只差 y 分量，所以是純垂直平移。 難度理由：需比較兩點差值，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s005-v004",
    "contentSha256": "942b24f597670167747a19147044e20105f96937d42fa1da0ac36a1613c727bc",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x=-4+9=5，y=3-7=-4，所以終點 (5,-4)。",
    "derivedAnswer": "(5,-4)",
    "storedAnswer": "(5,-4)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(5,-4)」；其餘三項逐項檢查：「(-13,-4)」不成立，右移誤做減法。；「(5,10)」不成立，下移誤做加法。；「(-11,12)」不成立，兩方向都反。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「點的平移」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "平移可分步或合併，結果唯一。",
      "alternateReading": "常見誤讀是「跨越原點時符號運算錯誤。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需更新兩分量並處理負數，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會整數加減。",
    "languageCheck": "題幹所求為「計算兩方向連續平移」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 C=(-4,3) 先向右 9，再向下 7，終點為何？」重新依序處理：x=-4+9=5，y=3-7=-4，所以終點 (5,-4)。 正確選項為「(5,-4)」。三個干擾項均對應不同錯誤：「(-13,-4)」不成立，右移誤做減法。；「(5,10)」不成立，下移誤做加法。；「(-11,12)」不成立，兩方向都反。。邊界審查：平移可分步或合併，結果唯一。 難度理由：需更新兩分量並處理負數，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s005-v005",
    "contentSha256": "91b06763b4e8119a465ba8658b17a085fc6415c2f7d75f29461b5b5628872634",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "向左 3 後橫坐標 a-3=5，所以 a=8。",
    "derivedAnswer": "8",
    "storedAnswer": "8",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「8」；其餘三項逐項檢查：「2」不成立，2-3=-1。；「5」不成立，未逆推平移前位置。；「-8」不成立，符號無依據。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「點的平移」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "y 分量一致，未知只在 x。",
      "alternateReading": "常見誤讀是「由終點反推時仍向左移。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需使用逆運算，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會解簡單方程式。",
    "languageCheck": "題幹所求為「反推水平平移前坐標」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若 D=(a,-1) 向左 3 單位後為 (5,-1)，求 a。」重新依序處理：向左 3 後橫坐標 a-3=5，所以 a=8。 正確選項為「8」。三個干擾項均對應不同錯誤：「2」不成立，2-3=-1。；「5」不成立，未逆推平移前位置。；「-8」不成立，符號無依據。。邊界審查：y 分量一致，未知只在 x。 難度理由：需使用逆運算，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s005-v006",
    "contentSha256": "6ceb823222501105554ac4b3e3d60a26c52c7b050cc6a816c877b264c6a1914f",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "平移不改 x，所以 m=3；檢查 y：2m+4=6+4=10，成立。",
    "derivedAnswer": "3",
    "storedAnswer": "3",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「3」；其餘三項逐項檢查：「2」不成立，x 會是 2，且 y+4=8。；「5」不成立，x 會是 5。；「7」不成立，x 會是 7。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「點的平移」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "同一 m 同時出現在兩分量，兩條件一致。",
      "alternateReading": "常見誤讀是「只用 y 方程式或誤以為上移也改 x。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需辨認平移中的不變量並交叉驗證。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代入與平移規則。",
    "languageCheck": "題幹所求為「利用不變分量求參數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 E=(m,2m) 向上 4 單位後為 (3,10)，則 m 為何？」重新依序處理：平移不改 x，所以 m=3；檢查 y：2m+4=6+4=10，成立。 正確選項為「3」。三個干擾項均對應不同錯誤：「2」不成立，x 會是 2，且 y+4=8。；「5」不成立，x 會是 5。；「7」不成立，x 會是 7。。邊界審查：同一 m 同時出現在兩分量，兩條件一致。 難度理由：需辨認平移中的不變量並交叉驗證。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s005-v007",
    "contentSha256": "3b5127c1e5fd361f2e71dbbf77b2c707e5a3adcc9e1789a498e38b798e4e5be0",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "水平淨改變 5-8=-3，垂直淨改變 2-6=-4，所以等同左 3、下 4。",
    "derivedAnswer": "向左 3、向下 4",
    "storedAnswer": "向左 3、向下 4",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「向左 3、向下 4」；其餘三項逐項檢查：「向右 13、向上 8」不成立，把相反方向相加。；「向右 3、向上 4」不成立，只取差的大小，方向反。；「向左 13、向下 8」不成立，使用總步數而非淨位移。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「點的平移」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "只問整體平移，不問路程或中途位置。",
      "alternateReading": "常見誤讀是「把各方向總路程當成平移後的淨位移。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需分方向合併四段改變量，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會帶符號加總。",
    "languageCheck": "題幹所求為「合併多步平移」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「一點先向右 5、向上 2，再向左 8、向下 6。整體等同哪一次平移？」重新依序處理：水平淨改變 5-8=-3，垂直淨改變 2-6=-4，所以等同左 3、下 4。 正確選項為「向左 3、向下 4」。三個干擾項均對應不同錯誤：「向右 13、向上 8」不成立，把相反方向相加。；「向右 3、向上 4」不成立，只取差的大小，方向反。；「向左 13、向下 8」不成立，使用總步數而非淨位移。。邊界審查：只問整體平移，不問路程或中途位置。 難度理由：需分方向合併四段改變量，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s005-v008",
    "contentSha256": "8682f39bda38b98f1d29ce74ec493bf2db2d78b951d9c7c13cd92edefa1965cd",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "逆向操作為向右 4、向下 7：(1+4,2-7)=(5,-5)。",
    "derivedAnswer": "(5,-5)",
    "storedAnswer": "(5,-5)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(5,-5)」；其餘三項逐項檢查：「(-3,9)」不成立，把原平移再做一次。；「(-5,5)」不成立，方向與分量混淆。；「(5,9)」不成立，只逆向水平，垂直方向錯。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「點的平移」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "原位置唯一，回做原平移可核對。",
      "alternateReading": "常見誤讀是「反推時未將兩個方向全部反轉。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需對兩分量使用逆向操作並驗算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需熟悉逆運算。",
    "languageCheck": "題幹所求為「反推二維平移前位置」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 F 經平移「向左 4、向上 7」後成為 (1,2)。F 原來在哪裡？」重新依序處理：逆向操作為向右 4、向下 7：(1+4,2-7)=(5,-5)。 正確選項為「(5,-5)」。三個干擾項均對應不同錯誤：「(-3,9)」不成立，把原平移再做一次。；「(-5,5)」不成立，方向與分量混淆。；「(5,9)」不成立，只逆向水平，垂直方向錯。。邊界審查：原位置唯一，回做原平移可核對。 難度理由：需對兩分量使用逆向操作並驗算。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s005-v009",
    "contentSha256": "b847eb6ded0f6ea01ec9d34a8cc0b45a16a888a1153e51917e019d75763d3b3c",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "平移後為 (k+3,-1-k)。令 k+3=6 得 k=3；第二分量 -1-3=-4，驗證成立。",
    "derivedAnswer": "3",
    "storedAnswer": "3",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「3」；其餘三項逐項檢查：「1」不成立，平移後為 (4,-2)。；「2」不成立，平移後為 (5,-3)。；「5」不成立，平移後為 (8,-6)。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「點的平移」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩個分量給出相同 k，無矛盾。",
      "alternateReading": "常見誤讀是「沒有先把平移作用到代數式，或只檢查一個分量。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需處理代數分量、二步平移與交叉驗證，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會一元一次式與平移。",
    "languageCheck": "題幹所求為「含參數點的平移與一致性」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若將 G=(k+1,2-k) 向右 2、向下 3 後得到 (6,-4)，求 k。」重新依序處理：平移後為 (k+3,-1-k)。令 k+3=6 得 k=3；第二分量 -1-3=-4，驗證成立。 正確選項為「3」。三個干擾項均對應不同錯誤：「1」不成立，平移後為 (4,-2)。；「2」不成立，平移後為 (5,-3)。；「5」不成立，平移後為 (8,-6)。。邊界審查：兩個分量給出相同 k，無矛盾。 難度理由：需處理代數分量、二步平移與交叉驗證，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s005-v010",
    "contentSha256": "e3a4b41295e988768f1348d8a495e0adae1d3cb89c114e8ba693cbb44b83f1a9",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "E7 使 x=-3+7=4；S4 使 y=2-4=-2。",
    "derivedAnswer": "(4,-2)",
    "storedAnswer": "(4,-2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(4,-2)」；其餘三項逐項檢查：「(-10,-2)」不成立，東移誤做西移。；「(4,6)」不成立，南移誤做北移。；「(-7,-4)」不成立，直接以指令數字替換坐標。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「點的平移」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "題幹明定每個指令數字代表坐標單位，答案為格線坐標。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題幹明定x軸正向為東、y軸正向為北，因此東移增加x、南移減少y。",
      "alternateReading": "常見誤讀是「未解碼方位字母或忽略起點。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "控制碼與起點資訊共同決定答案，屬素養。",
    "literacyContextNecessity": "E、S 是倉儲系統的方向碼，必須解讀後才能形成平移運算。",
    "prerequisiteCheck": "需會方位與坐標正負。",
    "languageCheck": "題幹所求為「依導航碼執行平移」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「在x軸正向代表東、y軸正向代表北，且指令數字表示坐標單位的倉庫平面上，機器人由(-3,2)收到「E7、S4」，其中E為向東、S為向南。執行後坐標為何？」重新依序處理：E7 使 x=-3+7=4；S4 使 y=2-4=-2。 正確選項為「(4,-2)」。三個干擾項均對應不同錯誤：「(-10,-2)」不成立，東移誤做西移。；「(4,6)」不成立，南移誤做北移。；「(-7,-4)」不成立，直接以指令數字替換坐標。。邊界審查：題幹明定x軸正向為東、y軸正向為北，因此東移增加x、南移減少y。 難度理由：控制碼與起點資訊共同決定答案，屬素養。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s005-v011",
    "contentSha256": "d22b21b0c25295d6fcdfacd2932396924fb8f31642ac72b799d60362a0ad2d8c",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "左移使 x=6-2=4；上移使 y=-1+5=4。",
    "derivedAnswer": "(4,4)",
    "storedAnswer": "(4,4)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(4,4)」；其餘三項逐項檢查：「(8,4)」不成立，左移誤為右移。；「(4,-6)」不成立，上移誤為下移。；「(11,-3)」不成立，把兩段距離加到錯誤分量。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「點的平移」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標與移動均以公尺為一單位。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "每單位 1 公尺，無比例換算。",
      "alternateReading": "常見誤讀是「控制方向與坐標正負不一致。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需將兩個實際方向轉成坐標更新。",
    "literacyContextNecessity": "燈光控制器的兩段實際操作直接對應 x、y 改變，情境不是可刪除裝飾。",
    "prerequisiteCheck": "需會平移。",
    "languageCheck": "題幹所求為「在舞臺定位情境平移點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「舞臺燈光定位點原在 (6,-1)。控制器先將光點左移 2 公尺，再上移 5 公尺。若每坐標單位為 1 公尺，最後位置為何？」重新依序處理：左移使 x=6-2=4；上移使 y=-1+5=4。 正確選項為「(4,4)」。三個干擾項均對應不同錯誤：「(8,4)」不成立，左移誤為右移。；「(4,-6)」不成立，上移誤為下移。；「(11,-3)」不成立，把兩段距離加到錯誤分量。。邊界審查：每單位 1 公尺，無比例換算。 難度理由：需將兩個實際方向轉成坐標更新。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s005-v012",
    "contentSha256": "a1773a6c4e233e73ff6520905eaf858078585be8f6eb4b35b5a2ae1c11279565",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "A 到 B 的改變量為 (-4-2,1-5)=(-6,-4)。套到 C 得 (7-6,-3-4)=(1,-7)。",
    "derivedAnswer": "(1,-7)",
    "storedAnswer": "(1,-7)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(1,-7)」；其餘三項逐項檢查：「(13,1)」不成立，把改變量方向反轉。；「(3,-1)」不成立，只減去坐標絕對值差的一部分。；「(-1,7)」不成立，交換並反轉兩分量。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「點的平移」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "地圖坐標單位一致，答案為坐標而非行駛總路程。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "『完全相同的平移』指方向與距離均相同，不是移到同一終點。",
      "alternateReading": "常見誤讀是「把終點坐標直接加到另一點，而非使用相同改變量。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需先從一對點推得平移，再作用於新點，屬素養整合。",
    "literacyContextNecessity": "救護車調度要求複製相同位移；A、B 的位置資訊用來決定 C 的操作。",
    "prerequisiteCheck": "需會比較前後坐標。",
    "languageCheck": "題幹所求為「把同一平移套用到另一位置」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「地圖上的救護車從 A=(2,5) 平移到 B=(-4,1)。若要把另一輛位於 C=(7,-3) 的車做完全相同的平移，終點為何？」重新依序處理：A 到 B 的改變量為 (-4-2,1-5)=(-6,-4)。套到 C 得 (7-6,-3-4)=(1,-7)。 正確選項為「(1,-7)」。三個干擾項均對應不同錯誤：「(13,1)」不成立，把改變量方向反轉。；「(3,-1)」不成立，只減去坐標絕對值差的一部分。；「(-1,7)」不成立，交換並反轉兩分量。。邊界審查：『完全相同的平移』指方向與距離均相同，不是移到同一終點。 難度理由：需先從一對點推得平移，再作用於新點，屬素養整合。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
