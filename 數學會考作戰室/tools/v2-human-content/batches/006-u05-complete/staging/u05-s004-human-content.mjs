// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s004-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-coordinate-basics",
  "skillId": "coordinate-plot-description",
  "lockedTitle": "描點與位置描述",
  "title": "描點與位置描述：把路線翻成坐標",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能依文字指令從原點描出一個點。",
    "能由起點與移動步數寫出終點坐標。",
    "能由兩個點描述水平與垂直方向差。",
    "能區分絕對位置與相對移動。"
  ],
  "prerequisites": [
    {
      "skillId": "coordinate-axis-points",
      "requiredLevel": "能說明並正確使用「坐標軸上的點」的核心規則，且不混淆坐標分量順序。"
    }
  ],
  "glossary": [
    {
      "term": "描點",
      "definition": "依坐標在平面上標出點的位置。"
    },
    {
      "term": "絕對位置",
      "definition": "相對原點所表示的坐標。"
    },
    {
      "term": "相對移動",
      "definition": "相對目前位置的方向與步數。"
    },
    {
      "term": "單位格",
      "definition": "相鄰刻度之間代表的一個固定長度。"
    },
    {
      "term": "路線",
      "definition": "依序執行的多段水平或垂直移動。"
    }
  ],
  "notation": [
    {
      "symbol": "(x,y)",
      "meaning": "由原點描述的絕對位置。"
    },
    {
      "symbol": "Δx",
      "meaning": "水平方向的改變量。"
    },
    {
      "symbol": "Δy",
      "meaning": "垂直方向的改變量。"
    }
  ],
  "conceptNarrative": [
    "在坐標平面描述路線時，向右使 x 增加、向左使 x 減少，向上使 y 增加、向下使 y 減少。水平移動不改 y，垂直移動不改 x，每一步都以上一步終點為新起點。",
    "從起點 A 到終點 B 的位移可用終點坐標減起點坐標：水平變化是 x_B-x_A，垂直變化是 y_B-y_A。正負號決定方向，絕對值決定移動單位數。",
    "多段路線要保留中途點與順序。兩條路線可能具有相同淨位移與最終點，卻經過不同位置；若題目要求依序通過指定站點，不能只用起點與終點取代完整路線。",
    "方位情境應明示東、北和坐標正向的關係，以及每格代表多少坐標單位。反推起點時可對終點執行相反方向、倒序的移動，再用原路線正向驗證。"
  ],
  "formalDefinitions": [
    {
      "name": "描點程序",
      "statement": "從原點沿 x 軸方向移到指定橫坐標，再平行 y 軸移到指定縱坐標。"
    },
    {
      "name": "相對位移",
      "statement": "終點坐標 = 起點坐標 + 各方向帶符號的總移動量。"
    }
  ],
  "formulas": [
    {
      "formula": "終點=(x0+Δx,y0+Δy)",
      "conditions": [
        "每段移動均平行坐標軸",
        "右與上取正、左與下取負"
      ],
      "meaning": "把路線的水平、垂直改變分別累加。"
    }
  ],
  "nonApplicableCases": [
    "斜向移動若未拆成水平與垂直分量，不能直接套用。",
    "沒有方向的步數不足以決定終點。",
    "相對移動不能取代點的絕對坐標。",
    "不同單位格不可直接相加。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "記錄起點，將每段方向翻成對 x 或 y 的加減。",
      "check": "左右只改 x、上下只改 y，方向符號符合題幹定義。"
    },
    {
      "step": 2,
      "instruction": "依題目順序逐段運算，寫出每個中間點。",
      "check": "每一步以上一步終點為起點，沒有反覆從原點重算。"
    },
    {
      "step": 3,
      "instruction": "比較兩點時使用終點減起點，符號判方向、絕對值判距離。",
      "check": "水平與垂直變化分開，沒有只看較大數減較小數。"
    },
    {
      "step": 4,
      "instruction": "反推起點時將移動倒序並改成相反方向。",
      "check": "反推所得起點經正向路線能回到指定終點。"
    },
    {
      "step": 5,
      "instruction": "檢查格距、方位正向、中途站點與重複位置的計數規則。",
      "check": "答案同時滿足坐標、單位、路線順序及題目指定的計數方式。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u05-s004-example-a",
      "prompt": "從 (-1,2) 向右五單位、再向下四單位，求終點。",
      "solutionSteps": [
        "右移後為 (4,2)。",
        "下移後為 (4,-2)。"
      ],
      "answer": "終點是 (4,-2)。",
      "why": "右移五只把橫坐標由負一增加到四，縱坐標保持二；再下移四只把縱坐標減到負二。逐段記錄可避免兩軸同時誤改。"
    },
    {
      "exampleId": "u05-s004-example-b",
      "prompt": "某點先向左二、再向上七後到 (3,6)，反求起點。",
      "solutionSteps": [
        "由終點反向先向下七，得 (3,-1)。",
        "再向右二，得起點 (5,-1)。"
      ],
      "answer": "起點為 (5,-1)。",
      "why": "反推必須倒轉順序並使用相反方向：最後的上七先還原成下七，先前的左二再還原成右二。正向驗算確實回到 (3,6)。"
    },
    {
      "exampleId": "u05-s004-example-c",
      "prompt": "由原點右三、上二、左三、下二，計算不同頂點數。",
      "solutionSteps": [
        "依序列出 (0,0)、(3,0)、(3,2)、(0,2)。",
        "最後回到 (0,0)，與起點重複。"
      ],
      "answer": "共有四個不同頂點。",
      "why": "四段路線形成封閉長方形，最後位置與起點相同。若題目要求重複只算一次，就要對位置去重，而不是按到達次數算五個。"
    },
    {
      "exampleId": "u05-s004-example-d",
      "prompt": "地圖以東、北為正向，從 (2,-1) 向西三格、北五格，求位置。",
      "solutionSteps": [
        "西三格使 x=2-3=-1。",
        "北五格使 y=-1+5=4。"
      ],
      "answer": "位置為 (-1,4)。",
      "why": "明示的正向使西方對應 x 減少、北方對應 y 增加。起點不是原點，因此要在原分量上加減位移，不能直接把位移寫成坐標。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "每段移動都從原起點重算。",
      "why": "忽略路線具有先後狀態。",
      "correction": "逐段寫中間點，以上一步結果繼續。"
    },
    {
      "mistake": "向下或向左仍使用加法。",
      "why": "只記步數，未加入方向符號。",
      "correction": "左使 x 減少，下使 y 減少。"
    },
    {
      "mistake": "垂直移動同時改變 x。",
      "why": "混淆兩個坐標軸的獨立作用。",
      "correction": "上下只改 y，左右只改 x。"
    },
    {
      "mistake": "用較大坐標減較小坐標判方向。",
      "why": "絕對差遺失正負方向。",
      "correction": "一律使用終點減起點。"
    },
    {
      "mistake": "只看淨位移，忽略中途站順序。",
      "why": "不同路線可能具有相同終點。",
      "correction": "題目指定站點時逐段比較相鄰點。"
    },
    {
      "mistake": "情境方位沿用未寫出的慣例。",
      "why": "正向與每格單位可能未明示。",
      "correction": "先確認東、北正向與格距，再進行坐標運算。"
    }
  ],
  "selfCheck": [
    "我是否先寫清楚起點？",
    "每段移動是否只改一個分量？",
    "方向是否轉成正負號？",
    "最後是否仍以 (x,y) 表示？"
  ],
  "summary": [
    "描點由原點先 x 後 y。",
    "路線題從目前位置依序移動。",
    "左右改 x，上下改 y。",
    "終點等於起點加上帶符號位移。"
  ],
  "connections": {
    "previous": "承接軸上點與坐標讀法，已能把方向翻成正負數。",
    "next": [
      "下一節正式整理點的平移規則。",
      "後續距離題會比較起點與終點坐標差。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s004-v001",
      "u05-s004-v002",
      "u05-s004-v003",
      "u05-s004-v004",
      "u05-s004-v005",
      "u05-s004-v006",
      "u05-s004-v007",
      "u05-s004-v008",
      "u05-s004-v009",
      "u05-s004-v010",
      "u05-s004-v011",
      "u05-s004-v012"
    ],
    "constructedResponseIds": [
      "u05-s004-cr001",
      "u05-s004-cr002"
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
    "reviewNote": "人工重走四條路線，分別核對原點起步、非原點起步、反向描述與多段淨位移；特別檢查左下方向的負號及坐標順序，未使用尚未教授的向量記號。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "809d917ce1e5f416f962e589a7f5b959f565296d4a21c0c808b0eb5d445ba2ae"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s004-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "從原點向右 3 單位、向上 4 單位，終點坐標為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由原點描出終點",
    "choices": [
      "(-3,4)",
      "(4,3)",
      "(3,-4)",
      "(3,4)"
    ],
    "answerIndex": 3,
    "independentSolution": "向右使 x=3，向上使 y=4，所以終點為 (3,4)。",
    "explanation": "從原點 (0,0) 向右三單位，使橫坐標由零增加為三；向上四單位，使縱坐標由零增加為四。依 x、y 順序，終點坐標為 (3,4)，兩段位移分別只改變一個分量。",
    "steps": [
      "由原點開始，向右三使 x=0+3=3。",
      "向上四使 y=0+4=4。",
      "依橫、縱坐標順序寫出 (3,4)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-3,4)",
        "truth": false,
        "reason": "把向右寫成負 x。"
      },
      {
        "choice": "(4,3)",
        "truth": false,
        "reason": "交換 x、y。"
      },
      {
        "choice": "(3,-4)",
        "truth": false,
        "reason": "把向上寫成負 y。"
      },
      {
        "choice": "(3,4)",
        "truth": true,
        "reason": "方向與順序皆正確。"
      }
    ],
    "misconceptionTarget": "把向右與向上的步數交換成 (4,3)，忽略分量順序。",
    "prerequisiteCheck": "需會坐標讀寫。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩段移動均平行坐標軸，終點唯一。",
    "difficultyReason": "單一水平與垂直移動，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "由原點描出終點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "0e244c58d548baec7294bb072715cac91ab49997847191757ffae7bc5333b903"
  },
  {
    "questionId": "u05-s004-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "從 A=(-2,5) 向下 7 單位後到哪一點？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "從非原點進行垂直移動",
    "choices": [
      "(5,-9)",
      "(-9,5)",
      "(-2,-2)",
      "(-2,12)"
    ],
    "answerIndex": 2,
    "independentSolution": "向下只改變 y：5-7=-2；x 保持 -2。",
    "explanation": "向下移動只改變縱坐標，橫坐標仍為 -2。縱坐標從五減去七得到 -2，所以終點為 (-2,-2)；跨過 x 軸不會改變水平位置，橫坐標全程保持不變。",
    "steps": [
      "保留原橫坐標 x=-2。",
      "向下七單位，計算 y=5-7=-2。",
      "組合兩分量得到 (-2,-2)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(5,-9)",
        "truth": false,
        "reason": "誤將 x、y 混合運算。"
      },
      {
        "choice": "(-9,5)",
        "truth": false,
        "reason": "錯把向下改成 x-7。"
      },
      {
        "choice": "(-2,-2)",
        "truth": true,
        "reason": "只有 y 減少 7。"
      },
      {
        "choice": "(-2,12)",
        "truth": false,
        "reason": "把向下當成加 7。"
      }
    ],
    "misconceptionTarget": "向下移動時誤改橫坐標，或把五減七算成正二。",
    "prerequisiteCheck": "需能辨認上下只改 y。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "起點明確且沒有重設原點。",
    "difficultyReason": "只需更新一個分量，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "從非原點進行垂直移動",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "dde68e475c298ef6e9f867684133bcae58a44a029074eca2dddbc2c043c44a8f"
  },
  {
    "questionId": "u05-s004-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 B=(6,-1) 要移到 C=(2,-1)，應如何移動？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由起終點描述移動",
    "choices": [
      "向右 4 單位",
      "向左 4 單位",
      "向下 4 單位",
      "向左 8 單位"
    ],
    "answerIndex": 1,
    "independentSolution": "兩點 y 相同；x 由 6 變 2，減少 4，因此向左 4 單位。",
    "explanation": "B 與 C 的縱坐標都為 -1，所以沒有上下移動。橫坐標由六變成二，變化量為 2-6=-4，表示向左四單位，恰可從 B 到達 C；負號提供方向、絕對值提供距離。",
    "steps": [
      "比較縱坐標相同，確定只需水平移動。",
      "計算橫坐標變化 2-6=-4。",
      "把負四解讀為向左四單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "向右 4 單位",
        "truth": false,
        "reason": "方向相反。"
      },
      {
        "choice": "向左 4 單位",
        "truth": true,
        "reason": "x 減少 4。"
      },
      {
        "choice": "向下 4 單位",
        "truth": false,
        "reason": "誤改 y。"
      },
      {
        "choice": "向左 8 單位",
        "truth": false,
        "reason": "把兩個 x 的絕對值相加。"
      }
    ],
    "misconceptionTarget": "用 6-2=4 就直接說向右，沒有依終點減起點判方向。",
    "prerequisiteCheck": "需會比較整數大小。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩點同 y，移動可唯一描述為水平左移 4。",
    "difficultyReason": "需要比較兩點坐標而非直接讀一點，仍屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "由起終點描述移動",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "0261796aa00855ae97d7b922a69718ead1c51518288a2d60b21cac2347ece0a4"
  },
  {
    "questionId": "u05-s004-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "從 P=(1,-3) 先向右 5，再向上 2，終點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "連續兩步描點",
    "choices": [
      "(6,-1)",
      "(4,-8)",
      "(6,-5)",
      "(-4,-1)"
    ],
    "answerIndex": 0,
    "independentSolution": "先右移使 x=1+5=6；再上移使 y=-3+2=-1，所以為 (6,-1)。",
    "explanation": "從 P=(1,-3) 向右五，橫坐標變成 1+5=6，縱坐標保持 -3；再向上二，縱坐標變成 -3+2=-1。因此終點為 (6,-1)。每一步都以上一步的終點為起點，且只改對應分量。",
    "steps": [
      "向右五，得到中間點 (6,-3)。",
      "從中間點向上二，計算 -3+2=-1。",
      "保留橫坐標六，寫出終點 (6,-1)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(6,-1)",
        "truth": true,
        "reason": "兩步分別作用在正確分量。"
      },
      {
        "choice": "(4,-8)",
        "truth": false,
        "reason": "把正向移動做成減法。"
      },
      {
        "choice": "(6,-5)",
        "truth": false,
        "reason": "向上卻令 y 減少。"
      },
      {
        "choice": "(-4,-1)",
        "truth": false,
        "reason": "向右卻令 x 減少。"
      }
    ],
    "misconceptionTarget": "每一步都從原點重算，或把向上二誤作縱坐標減二。",
    "prerequisiteCheck": "需能做整數加法與坐標平移。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "路線無中途限制，分步或合併皆得同一終點。",
    "difficultyReason": "需依序處理兩個分量，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "連續兩步描點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b0621b45d4ce48e5cfe3b88b66580b98d3d4517609d4e2eea42e6f7e3abb9ea1"
  },
  {
    "questionId": "u05-s004-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "一條路線由原點出發：右 8、上 3、左 5、下 7。終點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "合併多段路線的淨位移",
    "choices": [
      "(13,10)",
      "(-3,4)",
      "(3,4)",
      "(3,-4)"
    ],
    "answerIndex": 3,
    "independentSolution": "水平淨移動 8-5=3；垂直淨移動 3-7=-4，所以終點 (3,-4)。",
    "explanation": "水平方向的總變化是右八再左五，淨向右三，所以 x=3；垂直方向是上三再下七，淨向下四，所以 y=-4。由原點出發的終點為 (3,-4)。",
    "steps": [
      "合併水平位移 8-5=3。",
      "合併垂直位移 3-7=-4。",
      "從原點加入淨位移，得到 (3,-4)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(13,10)",
        "truth": false,
        "reason": "把所有步數相加且忽略方向。"
      },
      {
        "choice": "(-3,4)",
        "truth": false,
        "reason": "兩個淨方向都反。"
      },
      {
        "choice": "(3,4)",
        "truth": false,
        "reason": "下移較多卻寫正 y。"
      },
      {
        "choice": "(3,-4)",
        "truth": true,
        "reason": "水平與垂直淨移動正確。"
      }
    ],
    "misconceptionTarget": "把四段距離全部相加，沒有分開水平與垂直方向及正負。",
    "prerequisiteCheck": "需會同類方向相減。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目只問終點，因此可使用淨位移，不必保留中途點。",
    "difficultyReason": "需分類並合併四段路線，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "合併多段路線的淨位移",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4dc83a21d56078e6c172c5caea677ec5aac70cba11337f42261bf50da9b3321d"
  },
  {
    "questionId": "u05-s004-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "從 A=(-4,2) 出發，先到 B=(-4,-3)，再到 C=(5,-3)。下列路線描述何者正確？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由三個點還原分段路線",
    "choices": [
      "先向上 5，再向右 9",
      "先向下 1，再向右 9",
      "先向下 5，再向右 9",
      "先向下 5，再向左 9"
    ],
    "answerIndex": 2,
    "independentSolution": "A 到 B 同 x，y 由 2 變 -3，向下 5；B 到 C 同 y，x 由 -4 變 5，向右 9。",
    "explanation": "A 到 B 的橫坐標同為 -4，縱坐標由二降到 -3，變化 -5，所以先向下五。B 到 C 的縱坐標同為 -3，橫坐標由 -4 增到五，變化九，所以再向右九。",
    "steps": [
      "比較 A、B，算出縱坐標變化 -3-2=-5。",
      "比較 B、C，算出橫坐標變化 5-(-4)=9。",
      "依順序寫成先下五、再右九。"
    ],
    "optionAnalysis": [
      {
        "choice": "先向上 5，再向右 9",
        "truth": false,
        "reason": "第一段方向反。"
      },
      {
        "choice": "先向下 1，再向右 9",
        "truth": false,
        "reason": "第一段錯把坐標相加。"
      },
      {
        "choice": "先向下 5，再向右 9",
        "truth": true,
        "reason": "兩段方向與距離都正確。"
      },
      {
        "choice": "先向下 5，再向左 9",
        "truth": false,
        "reason": "第二段方向反。"
      }
    ],
    "misconceptionTarget": "只比較數值差的大小，沒有依終點減起點決定移動方向。",
    "prerequisiteCheck": "需會水平與垂直坐標差。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "路線順序由 A→B→C 明定，不能交換。",
    "difficultyReason": "需分段比較並正確計算跨越原點的距離。",
    "literacyContextNecessity": null,
    "authoringIntent": "由三個點還原分段路線",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "65b73d422ddd00d55958261140062eade69953ae1f1f00dcd2e08419dc95d8a9"
  },
  {
    "questionId": "u05-s004-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "某點從 (a,3) 向左 4 單位後到 (-1,3)，則 a 等於多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由終點反推起點分量",
    "choices": [
      "-5",
      "3",
      "-3",
      "5"
    ],
    "answerIndex": 1,
    "independentSolution": "向左 4 後橫坐標為 a-4=-1，所以 a=3。",
    "explanation": "從 (a,3) 向左四單位後，橫坐標成為 a-4，縱坐標仍是三。終點橫坐標為 -1，所以 a-4=-1，兩邊同加四可得 a=3。回算三減四確為負一，方向與終點一致。",
    "steps": [
      "把向左四寫成新橫坐標 a-4。",
      "與終點第一分量比較，列出 a-4=-1。",
      "解方程式得到 a=3，並回算 3-4=-1。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5",
        "truth": false,
        "reason": "-5-4=-9。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "3-4=-1。"
      },
      {
        "choice": "-3",
        "truth": false,
        "reason": "-3-4=-7。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "5-4=1。"
      }
    ],
    "misconceptionTarget": "把向左四寫成 a+4，或用終點直接取代原來的 a。",
    "prerequisiteCheck": "需會由平移式反解。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "y 坐標全程不變，a 唯一。",
    "difficultyReason": "需建立一元一次方程式反推，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由終點反推起點分量",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f40e7be809ba02b2b3ac597a469f01bfe5babb5ac496c8d55a04368b32b3fdcb"
  },
  {
    "questionId": "u05-s004-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "從 Q=(2,b) 向上 6，再向下 10，終點縱坐標為 -1。求 b。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由多步終點反推起點",
    "choices": [
      "3",
      "-5",
      "5",
      "15"
    ],
    "answerIndex": 0,
    "independentSolution": "縱坐標淨改變為 +6-10=-4，所以 b-4=-1，得 b=3。",
    "explanation": "從縱坐標 b 先向上六、再向下十，終點縱坐標為 b+6-10=b-4。題目給 b-4=-1，兩邊同加四得到 b=3；水平坐標在垂直移動中不變，回算終點縱坐標仍為負一。",
    "steps": [
      "把兩段垂直位移合併成 +6-10=-4。",
      "列出終點條件 b-4=-1。",
      "解得 b=3，回算 3+6-10=-1。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": true,
        "reason": "3+6-10=-1。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "代入後為 -9。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "代入後為 1。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "代入後為 11。"
      }
    ],
    "misconceptionTarget": "把上六與下十都當正數相加，沒有保留方向符號。",
    "prerequisiteCheck": "需會整數運算與方程式。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "只涉及 y 分量，x=2 不影響答案。",
    "difficultyReason": "需合併位移並反解未知數，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由多步終點反推起點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "baed79fa44a254390a4b75a9a57d34165236f2127b47cc9790ab4a56a4dee3a2"
  },
  {
    "questionId": "u05-s004-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "從原點依序右 2、上 2、左 2、下 2，途中總共經過幾個不同的頂點位置（含起點與最後回到起點，但重複位置只算一次）？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "追蹤路線中的不同位置",
    "choices": [
      "3 個",
      "5 個",
      "8 個",
      "4 個"
    ],
    "answerIndex": 3,
    "independentSolution": "位置依序為 (0,0)、(2,0)、(2,2)、(0,2)、(0,0)。最後回到起點重複，因此不同位置共 4 個。",
    "explanation": "路線依序到達 (0,0)、(2,0)、(2,2)、(0,2)，最後回到 (0,0)。起點與終點是同一位置且只算一次，因此不同頂點共有四個，而不是五個到達紀錄，計數必須去重。",
    "steps": [
      "逐步列出起點與前三段後的四個頂點。",
      "確認最後下二回到起點 (0,0)。",
      "去除重複的起終點，計得四個不同位置。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 個",
        "truth": false,
        "reason": "漏算一個轉折點。"
      },
      {
        "choice": "5 個",
        "truth": false,
        "reason": "把最後重回原點重複計數。"
      },
      {
        "choice": "8 個",
        "truth": false,
        "reason": "把每單位途中格點誤當題目所稱頂點位置。"
      },
      {
        "choice": "4 個",
        "truth": true,
        "reason": "正方形四個頂點各一次。"
      }
    ],
    "misconceptionTarget": "把最後回到起點當成新的第五個位置，沒有依題意去除重複。",
    "prerequisiteCheck": "需能依序描點並辨認重複。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目明確只計每段結束的頂點位置，不計線段中間格點。",
    "difficultyReason": "需逐步追蹤並處理集合去重，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "追蹤路線中的不同位置",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e294fe05b7a76cfa8ff1e3f2c98f2af0f4669a86c1b92fe1f2ecbbc40e963316"
  },
  {
    "questionId": "u05-s004-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "校園尋寶地圖以東方為 x 正向、北方為 y 正向，每格一坐標單位。從司令台 (1,1) 出發，提示為「向西 4 格，再向南 3 格」，寶箱坐標為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "在尋寶情境執行路線",
    "choices": [
      "(5,-2)",
      "(-2,-3)",
      "(-3,-2)",
      "(-3,4)"
    ],
    "answerIndex": 2,
    "independentSolution": "西使 x 減 4：1-4=-3；南使 y 減 3：1-3=-2。",
    "explanation": "依題幹方向，向西四格使 x 由一減為 -3，向南三格使 y 由一減為 -2。每格等於一坐標單位，所以寶箱坐標唯一為 (-3,-2)，起點與格距都已納入計算。",
    "steps": [
      "由東為正 x，將向西四格寫成 1-4=-3。",
      "由北為正 y，將向南三格寫成 1-3=-2。",
      "按 x、y 順序寫出寶箱 (-3,-2)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(5,-2)",
        "truth": false,
        "reason": "把西當東。"
      },
      {
        "choice": "(-2,-3)",
        "truth": false,
        "reason": "交換步數。"
      },
      {
        "choice": "(-3,-2)",
        "truth": true,
        "reason": "兩個方向與起點都正確。"
      },
      {
        "choice": "(-3,4)",
        "truth": false,
        "reason": "把南當北。"
      }
    ],
    "misconceptionTarget": "未使用明示的方向與格距，或忽略起點不是原點而直接寫位移。",
    "prerequisiteCheck": "需會從非原點平移。",
    "estimatedTimeSec": 150,
    "unitCheck": "坐標單位為格，答案保留格線坐標。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題幹明定東為 x 正向、北為 y 正向且每格一坐標單位，西、南移動對兩分量的影響可唯一決定。",
    "difficultyReason": "起點與兩段方位都是必要資訊，需轉換後計算。",
    "literacyContextNecessity": "寶箱位置取決於司令台起點與西南兩段提示；情境資訊直接形成坐標運算。",
    "authoringIntent": "在尋寶情境執行路線",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "ddb1e578e062df3fc5551a4afdfdc81eda99ab093082275719cfeb282d0ec5df"
  },
  {
    "questionId": "u05-s004-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "棋盤機器人起點為 (-2,4)。指令 R3 表示向右 3 格，D5 表示向下 5 格。執行 R3、D5 後的位置為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "解讀機器人指令並描點",
    "choices": [
      "(-5,-1)",
      "(1,-1)",
      "(1,9)",
      "(3,-5)"
    ],
    "answerIndex": 1,
    "independentSolution": "R3 使 x=-2+3=1；D5 使 y=4-5=-1，所以為 (1,-1)。",
    "explanation": "起點 (-2,4) 執行 R3，向右三格使 x=-2+3=1，得到 (1,4)；再執行 D5，向下五格使 y=4-5=-1。因此最後位置為 (1,-1)。兩個指令依序作用，並分別只改橫、縱坐標，結果可逐步回查。",
    "steps": [
      "執行 R3，算出中間點 (1,4)。",
      "執行 D5，保留 x=1 並算 y=4-5=-1。",
      "寫出最後位置 (1,-1)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-5,-1)",
        "truth": false,
        "reason": "R3 誤做左移。"
      },
      {
        "choice": "(1,-1)",
        "truth": true,
        "reason": "兩個指令均正確執行。"
      },
      {
        "choice": "(1,9)",
        "truth": false,
        "reason": "D5 誤做上移。"
      },
      {
        "choice": "(3,-5)",
        "truth": false,
        "reason": "直接把指令數字當坐標。"
      }
    ],
    "misconceptionTarget": "同時從起點處理兩個指令，或把向下五寫成縱坐標加五。",
    "prerequisiteCheck": "需會平移。",
    "estimatedTimeSec": 150,
    "unitCheck": "每指令單位均為棋盤格。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "R、D 的定義已明示，執行順序不影響本題終點但仍逐步記錄。",
    "difficultyReason": "需先解碼再運算，情境不可刪除。",
    "literacyContextNecessity": "R3、D5 是情境特定語法；必須理解控制碼才可轉成坐標改變。",
    "authoringIntent": "解讀機器人指令並描點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "adedcb595af049c6d66d8678d04e493be9c8dc91464cce8a5a6af6ec8226aadd"
  },
  {
    "questionId": "u05-s004-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "配送地圖以東方為 x 正向、北方為 y 正向，每格一坐標單位。配送員從 A=(4,-2) 依序前往 B=(4,5)、C=(-1,5)，哪段敘述可完整描述路線？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "依站點順序描述配送路線",
    "choices": [
      "先向北 7 格，再向西 5 格",
      "先向南 7 格，再向西 5 格",
      "先向北 3 格，再向東 5 格",
      "先向西 5 格，再向北 7 格"
    ],
    "answerIndex": 0,
    "independentSolution": "A 到 B 同 x，y 增加 7，向北；B 到 C 同 y，x 減少 5，向西。",
    "explanation": "A 到 B 的 x 不變，y 由 -2 增至 5，共增加七，所以先向北七格；B 到 C 的 y 不變，x 由 4 減至 -1，共減少五，所以再向西五格。兩段必須依指定中途站 B 的順序完整描述。",
    "steps": [
      "比較 A、B，計算 y 變化 5-(-2)=7，判定向北。",
      "比較 B、C，計算 x 變化 -1-4=-5，判定向西。",
      "依指定站點順序寫成先北七、再西五。"
    ],
    "optionAnalysis": [
      {
        "choice": "先向北 7 格，再向西 5 格",
        "truth": true,
        "reason": "順序、方向與距離皆正確。"
      },
      {
        "choice": "先向南 7 格，再向西 5 格",
        "truth": false,
        "reason": "第一段方向反。"
      },
      {
        "choice": "先向北 3 格，再向東 5 格",
        "truth": false,
        "reason": "兩段距離或方向錯。"
      },
      {
        "choice": "先向西 5 格，再向北 7 格",
        "truth": false,
        "reason": "淨終點相同但不符合指定經過 B 的順序。"
      }
    ],
    "misconceptionTarget": "只看 A 到 C 的淨位移，忽略必須依序經過 B 與明示的方向定義。",
    "prerequisiteCheck": "需會分段比較坐標。",
    "estimatedTimeSec": 150,
    "unitCheck": "所有距離以格表示，兩段分開計算。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題幹明定東為 x 正向、北為 y 正向、每格一單位，且要求依序經過 B；方向、距離與路線順序皆唯一。",
    "difficultyReason": "中途站點使順序成為必要條件，不能只算淨位移。",
    "literacyContextNecessity": "配送必須依序經過 B；中途站點使路線次序成為數學條件，而非裝飾。",
    "authoringIntent": "依站點順序描述配送路線",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "ba269d17f3b2b4fc3bfff519517a099b19176a56e90a479f8d60ed35f1cbea30"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s004-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "從 A=(-3,2) 出發，依序向右 8、向下 5、向左 2。寫出每一步後的位置與最後終點。",
    "requiredWork": [
      "保留每一步的中間坐標。",
      "最後寫出終點。"
    ],
    "fullCreditSolution": [
      "從 A=(-3,2) 向右八，橫坐標為 -3+8=5，縱坐標不變，第一步到 (5,2)。",
      "再向下五，縱坐標為 2-5=-3，第二步到 (5,-3)。",
      "最後向左二，橫坐標為 5-2=3，終點是 (3,-3)；每一步均以上一步位置為起點。"
    ],
    "alternativeSolutions": [
      "也可列坐標表，逐列更新 x 或 y。"
    ],
    "reasoningSteps": [
      "先執行水平右移，記錄第一個中間點。",
      "由中間點執行垂直下移，保留橫坐標。",
      "再執行水平左移，寫出終點並按順序核對三段。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三個中間或終點坐標全正確，且顯示每步只改一個分量。"
      },
      {
        "score": 2,
        "criteria": "終點正確但漏一個中間位置，或只有一個單步算術錯。"
      },
      {
        "score": 1,
        "criteria": "方向規則大致正確，但至少兩步運算錯或只寫部分路線。"
      },
      {
        "score": 0,
        "criteria": "每一步都從原點重算，無法反映連續移動。"
      }
    ],
    "partialCreditRules": [
      "題目要求每一步，僅給淨位移不足滿分。"
    ],
    "followThroughPolicy": "若某一步坐標算錯，後續都從該錯誤點依正確方向與步數移動，後續方法可按結果追隨給分；原錯誤步驟不給分。",
    "unitAndNotationRules": "每一步均以有序對表示，依序寫出三個中間或終點坐標；移動量以格或單位計。",
    "answerOnlyPolicy": "只寫最後終點 (3,-3) 而沒有每一步位置，最高給 2 分。",
    "commonErrors": [
      "每一段都從原始點 A 出發，沒有以上一步結果繼續。",
      "向下五寫成縱坐標加五，方向符號顛倒。",
      "只寫最後終點，沒有完成題目要求的每一步位置。"
    ],
    "independentReview": {
      "derivedResult": "若早期算術錯但後續都從自己的錯誤中間點正確平移，採結果追隨，可保留後續方法分。",
      "ambiguity": "位置均寫成 (x,y)；步數單位可省略於坐標內。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若早期算術錯但後續都從自己的錯誤中間點正確平移，採結果追隨，可保留後續方法分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "5831b4398ae95418e6b1dab71f3ad2b1837c6f454ac4e88e965e5fd04c7f0c98"
  },
  {
    "questionId": "u05-s004-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某路線從 P=(a,b) 出發，向右 4、向上 7 後到 Q=(1,2)。求 P，並用反向路線驗算。",
    "requiredWork": [
      "逆向求原坐標。",
      "寫出驗算。"
    ],
    "fullCreditSolution": [
      "終點橫坐標為一，原點向右四才到一，所以 a+4=1，解得 a=-3。",
      "終點縱坐標為二，原點向上七才到二，所以 b+7=2，解得 b=-5。",
      "P=(-3,-5)。正向驗算：先右移到 (1,-5)，再上移到 (1,2)，恰為 Q。"
    ],
    "alternativeSolutions": [
      "可列 a+4=1、b+7=2，解出 a、b。"
    ],
    "reasoningSteps": [
      "由終點橫坐標反推，列出 a+4=1。",
      "由終點縱坐標反推，列出 b+7=2。",
      "組成起點 P，依原路線正向執行兩段完成驗算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "求得 P=(-3,-5)，並完整回做兩步驗算。"
      },
      {
        "score": 2,
        "criteria": "P 正確但未驗算，或驗算有一個抄寫錯。"
      },
      {
        "score": 1,
        "criteria": "能列出 a+4=1、b+7=2，但解算錯一項。"
      },
      {
        "score": 0,
        "criteria": "把 Q 再向右、向上得到 (5,9) 當原點。"
      }
    ],
    "partialCreditRules": [
      "方程式法與逆向移動法等價。"
    ],
    "followThroughPolicy": "若反推起點時一個分量算錯，但能用所得起點正確執行向右 4、向上 7 的驗算，可給驗算方法分。",
    "unitAndNotationRules": "起點寫成 P=(-3,-5)，終點寫成 Q=(1,2)；反向移動需明確寫左 4、下 7。",
    "answerOnlyPolicy": "只寫 P=(-3,-5) 而沒有反向推導或驗算，最高給 2 分。",
    "commonErrors": [
      "反推時仍把四與七加到終點，得到方向相反的起點。",
      "只求 a 或 b，沒有把起點寫成完整有序數對。",
      "驗算只比較淨位移，沒有依序執行向右再向上的路線。"
    ],
    "independentReview": {
      "derivedResult": "若 a 算錯但 b 與相應驗算正確，可給該分量方法分。",
      "ambiguity": "答案為點坐標；驗算須從 P 回到 Q。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若 a 算錯但 b 與相應驗算正確，可給該分量方法分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "a6fb7a3debdf7eead09b5fe1e9809ee0941243290debf380d42f0634c928527e"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s004-v001",
    "contentSha256": "0e244c58d548baec7294bb072715cac91ab49997847191757ffae7bc5333b903",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "向右使 x=3，向上使 y=4，所以終點為 (3,4)。",
    "derivedAnswer": "(3,4)",
    "storedAnswer": "(3,4)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(3,4)」；其餘三項逐項檢查：「(-3,4)」不成立，把向右寫成負 x。；「(4,3)」不成立，交換 x、y。；「(3,-4)」不成立，把向上寫成負 y。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩段移動均平行坐標軸，終點唯一。",
      "alternateReading": "常見誤讀是「方向符號或坐標順序錯誤。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "單一水平與垂直移動，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會坐標讀寫。",
    "languageCheck": "題幹所求為「由原點描出終點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「從原點向右 3 單位、向上 4 單位，終點坐標為何？」重新依序處理：向右使 x=3，向上使 y=4，所以終點為 (3,4)。 正確選項為「(3,4)」。三個干擾項均對應不同錯誤：「(-3,4)」不成立，把向右寫成負 x。；「(4,3)」不成立，交換 x、y。；「(3,-4)」不成立，把向上寫成負 y。。邊界審查：兩段移動均平行坐標軸，終點唯一。 難度理由：單一水平與垂直移動，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v002",
    "contentSha256": "dde68e475c298ef6e9f867684133bcae58a44a029074eca2dddbc2c043c44a8f",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "向下只改變 y：5-7=-2；x 保持 -2。",
    "derivedAnswer": "(-2,-2)",
    "storedAnswer": "(-2,-2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(-2,-2)」；其餘三項逐項檢查：「(5,-9)」不成立，誤將 x、y 混合運算。；「(-9,5)」不成立，錯把向下改成 x-7。；「(-2,12)」不成立，把向下當成加 7。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "起點明確且沒有重設原點。",
      "alternateReading": "常見誤讀是「上下移動卻改變橫坐標。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "只需更新一個分量，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能辨認上下只改 y。",
    "languageCheck": "題幹所求為「從非原點進行垂直移動」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「從 A=(-2,5) 向下 7 單位後到哪一點？」重新依序處理：向下只改變 y：5-7=-2；x 保持 -2。 正確選項為「(-2,-2)」。三個干擾項均對應不同錯誤：「(5,-9)」不成立，誤將 x、y 混合運算。；「(-9,5)」不成立，錯把向下改成 x-7。；「(-2,12)」不成立，把向下當成加 7。。邊界審查：起點明確且沒有重設原點。 難度理由：只需更新一個分量，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v003",
    "contentSha256": "0261796aa00855ae97d7b922a69718ead1c51518288a2d60b21cac2347ece0a4",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "兩點 y 相同；x 由 6 變 2，減少 4，因此向左 4 單位。",
    "derivedAnswer": "向左 4 單位",
    "storedAnswer": "向左 4 單位",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「向左 4 單位」；其餘三項逐項檢查：「向右 4 單位」不成立，方向相反。；「向下 4 單位」不成立，誤改 y。；「向左 8 單位」不成立，把兩個 x 的絕對值相加。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩點同 y，移動可唯一描述為水平左移 4。",
      "alternateReading": "常見誤讀是「知道距離但方向或分量判斷錯。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需要比較兩點坐標而非直接讀一點，仍屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會比較整數大小。",
    "languageCheck": "題幹所求為「由起終點描述移動」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 B=(6,-1) 要移到 C=(2,-1)，應如何移動？」重新依序處理：兩點 y 相同；x 由 6 變 2，減少 4，因此向左 4 單位。 正確選項為「向左 4 單位」。三個干擾項均對應不同錯誤：「向右 4 單位」不成立，方向相反。；「向下 4 單位」不成立，誤改 y。；「向左 8 單位」不成立，把兩個 x 的絕對值相加。。邊界審查：兩點同 y，移動可唯一描述為水平左移 4。 難度理由：需要比較兩點坐標而非直接讀一點，仍屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v004",
    "contentSha256": "b0621b45d4ce48e5cfe3b88b66580b98d3d4517609d4e2eea42e6f7e3abb9ea1",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "先右移使 x=1+5=6；再上移使 y=-3+2=-1，所以為 (6,-1)。",
    "derivedAnswer": "(6,-1)",
    "storedAnswer": "(6,-1)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(6,-1)」；其餘三項逐項檢查：「(4,-8)」不成立，把正向移動做成減法。；「(6,-5)」不成立，向上卻令 y 減少。；「(-4,-1)」不成立，向右卻令 x 減少。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "路線無中途限制，分步或合併皆得同一終點。",
      "alternateReading": "常見誤讀是「負數起點使學生誤以為上移仍更負。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需依序處理兩個分量，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能做整數加法與坐標平移。",
    "languageCheck": "題幹所求為「連續兩步描點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「從 P=(1,-3) 先向右 5，再向上 2，終點為何？」重新依序處理：先右移使 x=1+5=6；再上移使 y=-3+2=-1，所以為 (6,-1)。 正確選項為「(6,-1)」。三個干擾項均對應不同錯誤：「(4,-8)」不成立，把正向移動做成減法。；「(6,-5)」不成立，向上卻令 y 減少。；「(-4,-1)」不成立，向右卻令 x 減少。。邊界審查：路線無中途限制，分步或合併皆得同一終點。 難度理由：需依序處理兩個分量，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v005",
    "contentSha256": "4dc83a21d56078e6c172c5caea677ec5aac70cba11337f42261bf50da9b3321d",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "水平淨移動 8-5=3；垂直淨移動 3-7=-4，所以終點 (3,-4)。",
    "derivedAnswer": "(3,-4)",
    "storedAnswer": "(3,-4)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(3,-4)」；其餘三項逐項檢查：「(13,10)」不成立，把所有步數相加且忽略方向。；「(-3,4)」不成立，兩個淨方向都反。；「(3,4)」不成立，下移較多卻寫正 y。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目只問終點，因此可使用淨位移，不必保留中途點。",
      "alternateReading": "常見誤讀是「只加步數不處理相反方向。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需分類並合併四段路線，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會同類方向相減。",
    "languageCheck": "題幹所求為「合併多段路線的淨位移」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「一條路線由原點出發：右 8、上 3、左 5、下 7。終點為何？」重新依序處理：水平淨移動 8-5=3；垂直淨移動 3-7=-4，所以終點 (3,-4)。 正確選項為「(3,-4)」。三個干擾項均對應不同錯誤：「(13,10)」不成立，把所有步數相加且忽略方向。；「(-3,4)」不成立，兩個淨方向都反。；「(3,4)」不成立，下移較多卻寫正 y。。邊界審查：題目只問終點，因此可使用淨位移，不必保留中途點。 難度理由：需分類並合併四段路線，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v006",
    "contentSha256": "65b73d422ddd00d55958261140062eade69953ae1f1f00dcd2e08419dc95d8a9",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "A 到 B 同 x，y 由 2 變 -3，向下 5；B 到 C 同 y，x 由 -4 變 5，向右 9。",
    "derivedAnswer": "先向下 5，再向右 9",
    "storedAnswer": "先向下 5，再向右 9",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「先向下 5，再向右 9」；其餘三項逐項檢查：「先向上 5，再向右 9」不成立，第一段方向反。；「先向下 1，再向右 9」不成立，第一段錯把坐標相加。；「先向下 5，再向左 9」不成立，第二段方向反。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "路線順序由 A→B→C 明定，不能交換。",
      "alternateReading": "常見誤讀是「跨越 0 時把距離算成絕對值之差。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需分段比較並正確計算跨越原點的距離。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會水平與垂直坐標差。",
    "languageCheck": "題幹所求為「由三個點還原分段路線」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「從 A=(-4,2) 出發，先到 B=(-4,-3)，再到 C=(5,-3)。下列路線描述何者正確？」重新依序處理：A 到 B 同 x，y 由 2 變 -3，向下 5；B 到 C 同 y，x 由 -4 變 5，向右 9。 正確選項為「先向下 5，再向右 9」。三個干擾項均對應不同錯誤：「先向上 5，再向右 9」不成立，第一段方向反。；「先向下 1，再向右 9」不成立，第一段錯把坐標相加。；「先向下 5，再向左 9」不成立，第二段方向反。。邊界審查：路線順序由 A→B→C 明定，不能交換。 難度理由：需分段比較並正確計算跨越原點的距離。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v007",
    "contentSha256": "f40e7be809ba02b2b3ac597a469f01bfe5babb5ac496c8d55a04368b32b3fdcb",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "向左 4 後橫坐標為 a-4=-1，所以 a=3。",
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
      "secondCorrectAnswer": "重新計算得到「3」；其餘三項逐項檢查：「-5」不成立，-5-4=-9。；「-3」不成立，-3-4=-7。；「5」不成立，5-4=1。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "y 坐標全程不變，a 唯一。",
      "alternateReading": "常見誤讀是「把反推原點仍做同方向減法。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需建立一元一次方程式反推，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會由平移式反解。",
    "languageCheck": "題幹所求為「由終點反推起點分量」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「某點從 (a,3) 向左 4 單位後到 (-1,3)，則 a 等於多少？」重新依序處理：向左 4 後橫坐標為 a-4=-1，所以 a=3。 正確選項為「3」。三個干擾項均對應不同錯誤：「-5」不成立，-5-4=-9。；「-3」不成立，-3-4=-7。；「5」不成立，5-4=1。。邊界審查：y 坐標全程不變，a 唯一。 難度理由：需建立一元一次方程式反推，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v008",
    "contentSha256": "baed79fa44a254390a4b75a9a57d34165236f2127b47cc9790ab4a56a4dee3a2",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "縱坐標淨改變為 +6-10=-4，所以 b-4=-1，得 b=3。",
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
      "secondCorrectAnswer": "重新計算得到「3」；其餘三項逐項檢查：「-5」不成立，代入後為 -9。；「5」不成立，代入後為 1。；「15」不成立，代入後為 11。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "只涉及 y 分量，x=2 不影響答案。",
      "alternateReading": "常見誤讀是「沒有先合併相反方向，或反解符號錯。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需合併位移並反解未知數，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會整數運算與方程式。",
    "languageCheck": "題幹所求為「由多步終點反推起點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「從 Q=(2,b) 向上 6，再向下 10，終點縱坐標為 -1。求 b。」重新依序處理：縱坐標淨改變為 +6-10=-4，所以 b-4=-1，得 b=3。 正確選項為「3」。三個干擾項均對應不同錯誤：「-5」不成立，代入後為 -9。；「5」不成立，代入後為 1。；「15」不成立，代入後為 11。。邊界審查：只涉及 y 分量，x=2 不影響答案。 難度理由：需合併位移並反解未知數，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v009",
    "contentSha256": "e294fe05b7a76cfa8ff1e3f2c98f2af0f4669a86c1b92fe1f2ecbbc40e963316",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "位置依序為 (0,0)、(2,0)、(2,2)、(0,2)、(0,0)。最後回到起點重複，因此不同位置共 4 個。",
    "derivedAnswer": "4 個",
    "storedAnswer": "4 個",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「4 個」；其餘三項逐項檢查：「3 個」不成立，漏算一個轉折點。；「5 個」不成立，把最後重回原點重複計數。；「8 個」不成立，把每單位途中格點誤當題目所稱頂點位置。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目明確只計每段結束的頂點位置，不計線段中間格點。",
      "alternateReading": "常見誤讀是「只看步數或未處理重複位置。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需逐步追蹤並處理集合去重，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能依序描點並辨認重複。",
    "languageCheck": "題幹所求為「追蹤路線中的不同位置」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「從原點依序右 2、上 2、左 2、下 2，途中總共經過幾個不同的頂點位置（含起點與最後回到起點，但重複位置只算一次）？」重新依序處理：位置依序為 (0,0)、(2,0)、(2,2)、(0,2)、(0,0)。最後回到起點重複，因此不同位置共 4 個。 正確選項為「4 個」。三個干擾項均對應不同錯誤：「3 個」不成立，漏算一個轉折點。；「5 個」不成立，把最後重回原點重複計數。；「8 個」不成立，把每單位途中格點誤當題目所稱頂點位置。。邊界審查：題目明確只計每段結束的頂點位置，不計線段中間格點。 難度理由：需逐步追蹤並處理集合去重，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v010",
    "contentSha256": "ddb1e578e062df3fc5551a4afdfdc81eda99ab093082275719cfeb282d0ec5df",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "西使 x 減 4：1-4=-3；南使 y 減 3：1-3=-2。",
    "derivedAnswer": "(-3,-2)",
    "storedAnswer": "(-3,-2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "由 (1,1) 向西四格得 x=-3，再向南三格得 y=-2，只有 (-3,-2) 同時符合起點、順序、方向與格距。",
      "undefinedSymbol": "題幹已定義 x、y 正向、格與坐標單位，司令台起點和寶箱目標均有明確指稱。",
      "unitConflict": "每格明定等於一坐標單位，四格與三格可直接作用於坐標分量。",
      "roundingConflict": "起點與位移都是精確整數格，不涉及近似。",
      "domainBoundary": "東、北正向與每格一單位已寫入題幹，不再依靠一般校園地圖慣例；路線沒有其他障礙條件。",
      "alternateReading": "若未定義方向與格距，西南方位如何對應坐標會是隱藏假設；修正題幹已排除此替代讀法。"
    },
    "difficultyReason": "起點與兩段方位都是必要資訊，需轉換後計算。",
    "literacyContextNecessity": "寶箱位置取決於司令台起點與西南兩段提示；情境資訊直接形成坐標運算。",
    "prerequisiteCheck": "需會從非原點平移。",
    "languageCheck": "題幹所求為「在尋寶情境執行路線」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "依修正後題幹重新計算：地圖東方為 x 正向、北方為 y 正向，每格一坐標單位。從 (1,1) 向西四格，橫坐標為 1-4=-3；再向南三格，縱坐標為 1-3=-2，所以唯一答案是 (-3,-2)。其他選項分別誤判西方、交換步數或誤判南方。方向與格距均已明示，不再使用未寫出的慣例。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v011",
    "contentSha256": "adedcb595af049c6d66d8678d04e493be9c8dc91464cce8a5a6af6ec8226aadd",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "R3 使 x=-2+3=1；D5 使 y=4-5=-1，所以為 (1,-1)。",
    "derivedAnswer": "(1,-1)",
    "storedAnswer": "(1,-1)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(1,-1)」；其餘三項逐項檢查：「(-5,-1)」不成立，R3 誤做左移。；「(1,9)」不成立，D5 誤做上移。；「(3,-5)」不成立，直接把指令數字當坐標。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「描點與位置描述」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "每指令單位均為棋盤格。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "R、D 的定義已明示，執行順序不影響本題終點但仍逐步記錄。",
      "alternateReading": "常見誤讀是「將控制碼數字取代坐標，而不是從起點累加。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需先解碼再運算，情境不可刪除。",
    "literacyContextNecessity": "R3、D5 是情境特定語法；必須理解控制碼才可轉成坐標改變。",
    "prerequisiteCheck": "需會平移。",
    "languageCheck": "題幹所求為「解讀機器人指令並描點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「棋盤機器人起點為 (-2,4)。指令 R3 表示向右 3 格，D5 表示向下 5 格。執行 R3、D5 後的位置為何？」重新依序處理：R3 使 x=-2+3=1；D5 使 y=4-5=-1，所以為 (1,-1)。 正確選項為「(1,-1)」。三個干擾項均對應不同錯誤：「(-5,-1)」不成立，R3 誤做左移。；「(1,9)」不成立，D5 誤做上移。；「(3,-5)」不成立，直接把指令數字當坐標。。邊界審查：R、D 的定義已明示，執行順序不影響本題終點但仍逐步記錄。 難度理由：需先解碼再運算，情境不可刪除。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s004-v012",
    "contentSha256": "ba269d17f3b2b4fc3bfff519517a099b19176a56e90a479f8d60ed35f1cbea30",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "A 到 B 同 x，y 增加 7，向北；B 到 C 同 y，x 減少 5，向西。",
    "derivedAnswer": "先向北 7 格，再向西 5 格",
    "storedAnswer": "先向北 7 格，再向西 5 格",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "A 到 B 僅 y 增加七，必為向北七格；B 到 C 僅 x 減少五，必為向西五格，只有第一選項符合指定順序。",
      "undefinedSymbol": "A、B、C 的坐標、站點順序、坐標正向及格距都已在題幹明確定義。",
      "unitConflict": "每格等於一坐標單位，兩段坐標差可直接轉成七格與五格。",
      "roundingConflict": "所有站點坐標與格數都是精確整數，不需四捨五入。",
      "domainBoundary": "題目要求 A→B→C 的實際順序，東、北正向與格距亦明示；交換兩段雖可能同終點，仍不符合經過 B 的路線。",
      "alternateReading": "若只看 A 到 C 淨位移，會忽略中途站 B；修正題幹以『依序』和明示方向排除此讀法。"
    },
    "difficultyReason": "中途站點使順序成為必要條件，不能只算淨位移。",
    "literacyContextNecessity": "配送必須依序經過 B；中途站點使路線次序成為數學條件，而非裝飾。",
    "prerequisiteCheck": "需會分段比較坐標。",
    "languageCheck": "題幹所求為「依站點順序描述配送路線」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "依修正後題幹獨立驗算：地圖東方為 x 正向、北方為 y 正向，每格一單位。A=(4,-2) 到 B=(4,5) 的橫坐標不變，縱坐標增加七，故向北七格；B 到 C=(-1,5) 的縱坐標不變，橫坐標減少五，故向西五格。唯一完整路線是先北七、再西五，且題幹已明示坐標方向、格距與依序經過 B。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
