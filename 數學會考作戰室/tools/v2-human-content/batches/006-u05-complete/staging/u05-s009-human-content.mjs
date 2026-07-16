// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s009-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-linear-graph",
  "skillId": "coordinate-point-on-line",
  "lockedTitle": "判斷點是否在直線上",
  "title": "判斷點是否在直線上：代入後檢查等式",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能把點的 x、y 正確代入方程式。",
    "能以左右兩邊是否相等判斷點在線上。",
    "能由在線條件求參數。",
    "能同時檢查多個候選點。"
  ],
  "prerequisites": [
    {
      "skillId": "coordinate-linear-equation-graph",
      "requiredLevel": "能說明並正確使用「二元一次方程式圖形」的核心規則，且不混淆坐標分量順序。"
    }
  ],
  "glossary": [
    {
      "term": "代入",
      "definition": "以指定數值取代方程式中的未知數。"
    },
    {
      "term": "在線上",
      "definition": "點的坐標是一組方程式的解。"
    },
    {
      "term": "不在線上",
      "definition": "代入後等式不成立。"
    },
    {
      "term": "參數",
      "definition": "題目中代表待求固定數值的字母。"
    }
  ],
  "notation": [
    {
      "symbol": "LHS",
      "meaning": "等式左邊代入後的值。"
    },
    {
      "symbol": "RHS",
      "meaning": "等式右邊代入後的值。"
    },
    {
      "symbol": "LHS=RHS",
      "meaning": "點在直線上的判定。"
    }
  ],
  "conceptNarrative": [
    "直線上的點與方程式的解是同一件事：把坐標代入，等式成立就在線上。",
    "代入時必須保留負號與括號，例如 x=-2 時，3x 應寫成 3(-2)。",
    "若點含參數，可利用『在直線上』建立一元一次方程式求參數。",
    "只符合部分項或看起來接近圖形都不夠，必須完整檢查整個等式。"
  ],
  "formalDefinitions": [
    {
      "name": "在線判定",
      "statement": "P=(a,b) 在 ax+by=c 上，當且僅當 a、b 代入後等式成立。"
    },
    {
      "name": "參數在線條件",
      "statement": "將含參數坐標代入直線方程式，解出使等式成立的參數。"
    }
  ],
  "formulas": [
    {
      "formula": "A(x0,y0)∈L ⇔ ax0+by0=c",
      "conditions": [
        "L:ax+by=c",
        "a、b 不同時為0"
      ],
      "meaning": "以代入等式作為點線關係判定。"
    }
  ],
  "nonApplicableCases": [
    "不能只比較某一個坐標。",
    "不能以點的象限直接判斷是否在線上。",
    "代入負數時不可省略括號。",
    "方程式若含分母，仍需遵守分母非零條件。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "寫出點的 x、y。",
      "check": "有沒有對調？"
    },
    {
      "step": 2,
      "instruction": "完整代入所有未知數。",
      "check": "負數是否加括號？"
    },
    {
      "step": 3,
      "instruction": "分別算左右兩邊。",
      "check": "是否使用相同運算順序？"
    },
    {
      "step": 4,
      "instruction": "比較是否相等。",
      "check": "相等才在線上。"
    },
    {
      "step": 5,
      "instruction": "若有參數，解方程式再回代。",
      "check": "求得值是否真的使等式成立？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "A=(2,1) 是否在 2x+y=5 上？",
      "solutionSteps": [
        "依順序讀出 x=2、y=1。",
        "代入左邊得 2×2+1=5。",
        "左邊與右邊相等，因此 A 在線上。"
      ],
      "answer": "A 在直線上。",
      "why": "點在線上的定義就是坐標代入後使方程式成立。第一分量二乘係數二，再加第二分量一，結果正好等於右邊五，所以不是憑圖形外觀猜測。"
    },
    {
      "exampleId": "L2",
      "prompt": "B=(-1,4) 是否在 x-y=-5 上？",
      "solutionSteps": [
        "讀出 x=-1、y=4，負數連同符號代入。",
        "計算左邊 -1-4=-5。",
        "與右邊負五相等，判定 B 在線上。"
      ],
      "answer": "B 在直線上。",
      "why": "第一分量本身是負一，而方程式還要減去第二分量四，得到負五。完整保留負號與減法後，左右相等，因此這個點確實滿足直線方程式。"
    },
    {
      "exampleId": "L3",
      "prompt": "P=(k,3) 在 3x-y=9 上，求 k。",
      "solutionSteps": [
        "把 x=k、y=3 代入，得到 3k-3=9。",
        "兩邊加三後除以三，求得 k=4。",
        "以 P=(4,3) 回代，十二減三等於九。"
      ],
      "answer": "k=4。",
      "why": "『在直線上』把含參數的坐標轉成一元一次方程式。求出四後還要回代，確認參數放在第一分量且原等式成立，避免保留移項錯誤。"
    },
    {
      "exampleId": "L4",
      "prompt": "哪個點不在 x+2y=6 上：C=(0,3)、D=(2,2)、E=(4,1)、F=(6,1)？",
      "solutionSteps": [
        "代入 C、D、E，左邊分別都等於六。",
        "代入 F=(6,1)，左邊為 6+2=8。",
        "只有 F 的左邊不等於右邊六，因此 F 不在線上。"
      ],
      "answer": "F 不在直線上。",
      "why": "多點判定必須逐一代入，不能因前三點成立就推測第四點。F 的兩分量代入後得到八而非六，所以它是唯一不滿足方程式的候選點。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 (2,1) 代成 x=1、y=2。",
      "why": "對調坐標。",
      "correction": "先標示第一分量給 x、第二分量給 y。"
    },
    {
      "mistake": "負數代入不加括號。",
      "why": "符號容易與減號混淆。",
      "correction": "例如 -2x 在 x=-3 時寫 -2(-3)。"
    },
    {
      "mistake": "左邊算得 5 就直接說在線上。",
      "why": "沒有與右邊比較。",
      "correction": "等式需兩邊相等。"
    },
    {
      "mistake": "用象限猜測。",
      "why": "把位置特徵當成方程式條件。",
      "correction": "必須代入。"
    },
    {
      "mistake": "求出參數後不驗算。",
      "why": "可能保留運算錯誤。",
      "correction": "把參數值回代原式。"
    }
  ],
  "selfCheck": [
    "我是否先分清 x、y？",
    "負數是否加括號？",
    "左右兩邊是否完整比較？",
    "參數值是否回代驗證？"
  ],
  "summary": [
    "點在線上等同坐標是方程式的解。",
    "代入後左右相等才成立。",
    "負數代入要保留括號。",
    "含參數時由等式求值並回代。"
  ],
  "connections": {
    "previous": "承接二元一次方程式圖形是所有解點的集合。",
    "next": [
      "下一節令 y=0 或 x=0 求與坐標軸的交點。",
      "之後交點需同時滿足兩條直線。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s009-v001",
      "u05-s009-v002",
      "u05-s009-v003",
      "u05-s009-v004",
      "u05-s009-v005",
      "u05-s009-v006",
      "u05-s009-v007",
      "u05-s009-v008",
      "u05-s009-v009",
      "u05-s009-v010",
      "u05-s009-v011",
      "u05-s009-v012"
    ],
    "constructedResponseIds": [
      "u05-s009-cr001",
      "u05-s009-cr002"
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
    "reviewNote": "四個例題均重新代入左右兩邊，特別核對負數減法、參數回代與多點排除；未以圖形外觀取代代數判定。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "83ae2975d3b2abd4a47f820c01c5c9984fef0cc3995aaa6dc1120b60d2e1e3ad"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s009-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 A=(1,2) 是否在直線 3x+y=5 上？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "直接判斷點在線上",
    "choices": [
      "是，因為 3×1+2=5",
      "是，因為 1+2=3",
      "否，因為 3×1+2=6",
      "否，因為 1≠2"
    ],
    "answerIndex": 0,
    "independentSolution": "代入 x=1、y=2，左邊 3×1+2=5，等於右邊，所以在線上。",
    "explanation": "有序數對 A=(1,2) 表示 x=1、y=2。完整代入左邊得 3×1+2=5，與方程式右邊五相等，所以 A 是直線上的點。只計算一加二或比較兩個坐標是否相等，都不是判定依據。",
    "steps": [
      "依坐標順序寫出 x=1、y=2。",
      "代入左邊並計算 3×1+2=5。",
      "比較左右同為五，判定 A 在直線上。"
    ],
    "optionAnalysis": [
      {
        "choice": "是，因為 3×1+2=5",
        "truth": true,
        "reason": "等式成立。"
      },
      {
        "choice": "是，因為 1+2=3",
        "truth": false,
        "reason": "未代入係數 3。"
      },
      {
        "choice": "否，因為 3×1+2=6",
        "truth": false,
        "reason": "算術錯誤。"
      },
      {
        "choice": "否，因為 1≠2",
        "truth": false,
        "reason": "坐標分量不必相等。"
      }
    ],
    "misconceptionTarget": "漏乘 x 的係數三，或用 x、y 是否相等等無關條件判斷。",
    "prerequisiteCheck": "需會代入。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "方程式與坐標均明確。",
    "difficultyReason": "單次代入，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "直接判斷點在線上",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "18661d543baa3666e30dc07085e821304f5bf3949c0091d949b68f585b4df9f5"
  },
  {
    "questionId": "u05-s009-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "下列哪個點不在直線 x-y=2 上？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "排除不在線的點",
    "choices": [
      "(2,0)",
      "(5,3)",
      "(-1,-3)",
      "(3,0)"
    ],
    "answerIndex": 3,
    "independentSolution": "代入 (3,0) 得 3-0=3，不等於 2；其餘三點代入都得 2。",
    "explanation": "逐點代入 x-y：前兩點分別得 2-0=2、5-3=2；第三點為 -1-(-3)=2，都在線上。只有 (3,0) 代入得三而非二，因此不在直線上。題目問的是『不在』，不能選成立的點。",
    "steps": [
      "逐一把四個點的兩分量代入 x-y。",
      "特別計算負數相減 -1-(-3)=2。",
      "找出唯一不等於二的 (3,0)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2,0)",
        "truth": false,
        "reason": "代入得 2。"
      },
      {
        "choice": "(5,3)",
        "truth": false,
        "reason": "代入得 2。"
      },
      {
        "choice": "(-1,-3)",
        "truth": false,
        "reason": "-1-(-3)=2。"
      },
      {
        "choice": "(3,0)",
        "truth": true,
        "reason": "代入得 3，不成立。"
      }
    ],
    "misconceptionTarget": "負數相減時漏掉括號，或忽略題目要求選出不在線上的點。",
    "prerequisiteCheck": "需會負數減法。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "只有一個點不成立。",
    "difficultyReason": "需比較四個候選點，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "排除不在線的點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9a45dbcf78cb5c8bdbf0882796157e06c4eb46e5d3c3c551ef4f769809e1dcd2"
  },
  {
    "questionId": "u05-s009-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 P=(-2,4) 代入 2x+3y=8 的結果為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "處理負坐標的在線判定",
    "choices": [
      "不在直線上，左邊為 4",
      "不在直線上，左邊為 16",
      "在直線上",
      "無法判斷"
    ],
    "answerIndex": 2,
    "independentSolution": "左邊 2(-2)+3(4)=-4+12=8，等於右邊。",
    "explanation": "點 P=(-2,4) 代入時，負二要連同符號放入括號。左邊為 2×(-2)+3×4=-4+12=8，與右邊八相等，因此 P 在直線上。若把二乘負二算成正四，就會誤得十六。",
    "steps": [
      "依順序代入 x=-2、y=4，負數使用括號。",
      "計算左邊 -4+12=8。",
      "與右邊八比較，判定 P 在直線上。"
    ],
    "optionAnalysis": [
      {
        "choice": "不在直線上，左邊為 4",
        "truth": false,
        "reason": "漏算或錯算 3y。"
      },
      {
        "choice": "不在直線上，左邊為 16",
        "truth": false,
        "reason": "把 2(-2) 誤算成 4。"
      },
      {
        "choice": "在直線上",
        "truth": true,
        "reason": "代入後等式成立。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "坐標與方程式足夠。"
      }
    ],
    "misconceptionTarget": "負數代入未加括號，把二乘負二錯算成正四而誤判。",
    "prerequisiteCheck": "需會整數乘加。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "無分母或額外條件。",
    "difficultyReason": "仍為單次代入，但聚焦負號，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "處理負坐標的在線判定",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8098f30513c13e83be6b25b1f7c48eb942bab54cb96064bcbdb136ea023a1afc"
  },
  {
    "questionId": "u05-s009-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若 Q=(k,3) 在直線 2x-y=7 上，k 等於多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由在線條件求參數",
    "choices": [
      "2",
      "5",
      "3",
      "7"
    ],
    "answerIndex": 1,
    "independentSolution": "代入得 2k-3=7，故 2k=10，k=5。",
    "explanation": "Q=(k,3) 在線上表示同一組 x=k、y=3 使方程式成立。代入 2x-y=7 得 2k-3=7，兩邊加三為 2k=10，再除以二得 k=5。回代十減三等於七，確認結果。五是唯一能使這個指定點落在直線上的參數值。",
    "steps": [
      "將 x=k、y=3 代入，列 2k-3=7。",
      "移項得到 2k=10，再求 k=5。",
      "把五代回，檢查 2×5-3=7。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "代入得 1。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "代入後 10-3=7。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "代入得 3。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "代入得 11。"
      }
    ],
    "misconceptionTarget": "把右邊常數七直接當成 k，沒有先代入第二分量三並解方程式。",
    "prerequisiteCheck": "需會解一次方程式。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "k 為唯一實數解。",
    "difficultyReason": "需建立一元一次方程式，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "由在線條件求參數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b3930fa1fd5cde2bfbc04a7b5163fc128456be29aa30354eb9d09b8cd91fe7cd"
  },
  {
    "questionId": "u05-s009-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 R=(a,a+1) 在直線 x+y=9 上，求 a。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "含參數兩分量的在線條件",
    "choices": [
      "3",
      "5",
      "8",
      "4"
    ],
    "answerIndex": 3,
    "independentSolution": "代入得 a+(a+1)=9，2a+1=9，a=4。",
    "explanation": "R 的兩個分量都含 a，分別是 x=a、y=a+1，必須一起代入。由 a+(a+1)=9 得 2a+1=9，所以 2a=8、a=4；此時 R=(4,5)，兩分量和為九，確實在線上。這也確認第二分量隨參數改變的部分沒有被遺漏。",
    "steps": [
      "把 x=a 與 y=a+1 同時代入 x+y=9。",
      "展開並合併為 2a+1=9，求得 a=4。",
      "寫出 R=(4,5)，代回確認四加五等於九。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "和為 7。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "和為 11。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "和為 17。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "R=(4,5)，和為 9。"
      }
    ],
    "misconceptionTarget": "只代入第一分量 a，忽略第二分量 a+1 也會隨參數改變。",
    "prerequisiteCheck": "需會代數式代入。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "同一參數出現在兩坐標，答案唯一。",
    "difficultyReason": "需代入並合併同類項，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "含參數兩分量的在線條件",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c13f14c9af23d590cfaaf08a7bad656ddf11b98a773cfd7cac8eb218ccbbbb96"
  },
  {
    "questionId": "u05-s009-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "已知 A=(2,b) 在直線 4x+y=10 上。下列哪個 b 值符合？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由在線條件選參數值",
    "choices": [
      "3",
      "-2",
      "2",
      "0"
    ],
    "answerIndex": 2,
    "independentSolution": "代入 x=2 得 8+b=10，所以 b=2。",
    "explanation": "已知 A=(2,b)，所以先把 x=2 代入 4x+y=10，得到 4×2+b=10，也就是 8+b=10。兩邊減八得 b=2。將 A=(2,2) 回代，左邊八加二正好為十。縱坐標二是唯一能配合已知橫坐標使等式成立的值。",
    "steps": [
      "依點的第一分量將 x=2 代入方程式。",
      "計算 4×2=8，列出 8+b=10。",
      "求得 b=2，並回代檢查等式成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "左邊為 11。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "左邊為 6。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "8+2=10，等式成立。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "左邊為 8。"
      }
    ],
    "misconceptionTarget": "把右邊十直接當成 b，或忘記先計算四乘第一分量二。",
    "prerequisiteCheck": "需理解在線判定。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "四個候選值只有 b=2 使等式成立。",
    "difficultyReason": "需完成一次代入與移項，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "由在線條件選參數值",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "2fb8435badd7b712d8db761f0bc023a076fe9b299d33729655b32433b795a5a7"
  },
  {
    "questionId": "u05-s009-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 S=(m-1,2m) 在直線 3x-y=4 上，求 m。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "複合代數坐標的在線條件",
    "choices": [
      "1",
      "7",
      "3",
      "5"
    ],
    "answerIndex": 1,
    "independentSolution": "代入得 3(m-1)-2m=4，化簡為 m-3=4，所以 m=7。",
    "explanation": "S=(m-1,2m) 在線上，所以代入得 3(m-1)-2m=4。分配律展開為 3m-3-2m=4，合併同類項得 m-3=4，因此 m=7。此時 S=(6,14)，代入為十八減十四等於四，兩個含參數分量都通過驗證。",
    "steps": [
      "將 x=m-1、y=2m 代入 3x-y=4。",
      "展開括號並合併，得到 m-3=4。",
      "求 m=7，再以 S=(6,14) 回代驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "代入左邊 -2。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "S=(6,14)，18-14=4。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "代入左邊 0。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "代入左邊 2。"
      }
    ],
    "misconceptionTarget": "展開三乘括號時漏乘負一，或減去二 m 時把符號合併錯誤。",
    "prerequisiteCheck": "需會代數化簡。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "方程式為一次，唯一解。",
    "difficultyReason": "需展開、合併並回代，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "複合代數坐標的在線條件",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "5acb84ddb3975d6be9e11ec945731cfdb9d2ba88d5ead3d4db2ac41bfa0d02bd"
  },
  {
    "questionId": "u05-s009-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "直線 L:2x+3y=12。若點 (p,2) 在 L 上，而點 (p,3) 不在 L 上，p 為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "同參數兩點的在線與不在線條件",
    "choices": [
      "3",
      "0",
      "2",
      "6"
    ],
    "answerIndex": 0,
    "independentSolution": "由 (p,2) 在線得 2p+6=12，p=3；檢查 (3,3) 代入得 15≠12，確實不在線。",
    "explanation": "由 (p,2) 在線上可列 2p+3×2=12，得到 2p=6、p=3。還要使用第二條件檢查：(3,3) 代入左邊為六加九等於十五，不等於十二，因此確實不在線上，兩項條件同時成立。",
    "steps": [
      "將在線點 (p,2) 代入，列 2p+6=12。",
      "解得 p=3。",
      "把 (3,3) 代入得十五不等於十二，完成第二條件驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": true,
        "reason": "同時符合兩個條件。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "第一點代入得 6。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "第一點代入得 10。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "第一點代入得 18。"
      }
    ],
    "misconceptionTarget": "只利用第一個在線條件求參數，沒有確認第二個點確實不在線上。",
    "prerequisiteCheck": "需會代入。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩條件相容且共同給出唯一值。",
    "difficultyReason": "需先求參數再檢查排除條件，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "同參數兩點的在線與不在線條件",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d49e8d86eb4948ccc3783d74482f041f38fef91e2c20d059eb3c89911015e938"
  },
  {
    "questionId": "u05-s009-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若三點 A=(0,4)、B=(2,0)、C=(k,2) 都在同一直線 2x+y=4 上，k 為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由同一直線條件求第三點參數",
    "choices": [
      "-1",
      "2",
      "1",
      "3"
    ],
    "answerIndex": 2,
    "independentSolution": "C 在線需 2k+2=4，得 k=1；A、B 也都滿足方程式。",
    "explanation": "C=(k,2) 也在 2x+y=4 上，所以代入得 2k+2=4，解得 2k=2、k=1。此時 C=(1,2)，左邊等於四；A=(0,4) 與 B=(2,0) 也各自滿足方程式，三點確實都落在同一條指定直線上，參數值已獨立驗算。",
    "steps": [
      "把 C 的 x=k、y=2 代入直線方程式。",
      "由 2k+2=4 求得 k=1。",
      "回代 C 並檢查已給的 A、B 也都在線上。"
    ],
    "optionAnalysis": [
      {
        "choice": "-1",
        "truth": false,
        "reason": "代入得 0。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "代入得 6。"
      },
      {
        "choice": "1",
        "truth": true,
        "reason": "C=(1,2)，代入得 4。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "代入得 8。"
      }
    ],
    "misconceptionTarget": "用 A、B 坐標的平均猜 k，沒有使用 C 必須滿足直線方程式的條件。",
    "prerequisiteCheck": "需掌握點在線判定。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題幹已指定直線方程式，不需推導斜率。",
    "difficultyReason": "需理解『同一直線』由共同方程式表達，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由同一直線條件求第三點參數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "127a5f3f5e2e1d50bf090a8094dcaec70dd9129bab62be5ccd24931f1f100de7"
  },
  {
    "questionId": "u05-s009-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "計程車費 y 元與里程 x 公里滿足 y=85+25x。一次行程紀錄為 (6,235)。這筆紀錄是否符合方案？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "檢查實際收費紀錄是否在線",
    "choices": [
      "符合，因為 85+6=91",
      "符合，因為 85+25×6=235",
      "不符合，應為 150 元",
      "不符合，因為 235÷6 不是 25"
    ],
    "answerIndex": 1,
    "independentSolution": "代入 x=6，85+150=235，與紀錄 y=235 相同，所以符合。",
    "explanation": "紀錄 (6,235) 的第一分量六是里程，第二分量二百三十五是費用。代入方案得 85+25×6=85+150=235，與紀錄費用相同，因此符合。總費用含八十五元固定費，不能直接除以里程求單價。",
    "steps": [
      "依情境讀出 x=6 公里、y=235 元。",
      "代入費用式，計算 85+25×6=235。",
      "比較模型值與紀錄值相同，判定符合方案。"
    ],
    "optionAnalysis": [
      {
        "choice": "符合，因為 85+6=91",
        "truth": false,
        "reason": "漏乘每公里費用。"
      },
      {
        "choice": "符合，因為 85+25×6=235",
        "truth": true,
        "reason": "完整計入起跳價與里程費。"
      },
      {
        "choice": "不符合，應為 150 元",
        "truth": false,
        "reason": "漏加起跳價。"
      },
      {
        "choice": "不符合，因為 235÷6 不是 25",
        "truth": false,
        "reason": "總費用含固定起跳價，不能直接相除。"
      }
    ],
    "misconceptionTarget": "忽略八十五元固定費，只計里程費，或用總費用直接除公里數。",
    "prerequisiteCheck": "需會代入一次關係。",
    "estimatedTimeSec": 150,
    "unitCheck": "x 為公里，y 為元；25 的單位是元/公里。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "方案只在非負里程使用，x=6 合法。",
    "difficultyReason": "情境中的變數與固定費用皆不可省略。",
    "literacyContextNecessity": "起跳價 85 元與每公里 25 元共同構成收費規則；判定紀錄是否正確需要完整情境。",
    "authoringIntent": "檢查實際收費紀錄是否在線",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "db34d3b9606b4502f0b463bda7ee9744e8833d8270923f9da124f1e754510af4"
  },
  {
    "questionId": "u05-s009-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "溫度換算關係為 F=(9/5)C+32。資料點 (C,F)=(20,68) 是否在關係圖形上？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "驗證溫度換算資料點",
    "choices": [
      "在，因為 36+32=68",
      "不在，因為 20+32=52",
      "在，因為 20×9=180",
      "不在，因為 68-32=34"
    ],
    "answerIndex": 0,
    "independentSolution": "代入 C=20，(9/5)×20=36，再加 32 得 68，所以在線上。",
    "explanation": "資料點依順序表示攝氏 C=20、華氏 F=68。代入右邊，先算 (9/5)×20=36，再加三十二得六十八，正好等於 F 的紀錄值，所以此點在關係圖形上。比例項的除以五與常數三十二都不能省略。",
    "steps": [
      "依欄位順序讀出 C=20、F=68。",
      "計算比例項 (9/5)×20=36，再加三十二。",
      "得到六十八並與 F 比較，判定資料點成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "在，因為 36+32=68",
        "truth": true,
        "reason": "換算完整正確。"
      },
      {
        "choice": "不在，因為 20+32=52",
        "truth": false,
        "reason": "漏乘 9/5。"
      },
      {
        "choice": "在，因為 20×9=180",
        "truth": false,
        "reason": "漏除以 5 且未加 32。"
      },
      {
        "choice": "不在，因為 68-32=34",
        "truth": false,
        "reason": "68-32 應為 36。"
      }
    ],
    "misconceptionTarget": "分數係數只乘九而漏除以五，或把攝氏、華氏兩分量角色對調。",
    "prerequisiteCheck": "需會分數乘法。",
    "estimatedTimeSec": 150,
    "unitCheck": "第一分量為 °C，第二分量為 °F；不同單位不直接相加，僅依公式換算。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "攝氏 20 與華氏 68 為精確常用換算，不涉及近似。",
    "difficultyReason": "需處理分數係數與單位變數，屬素養。",
    "literacyContextNecessity": "攝氏與華氏的變數順序和換算式決定資料點意義，情境不可刪除。",
    "authoringIntent": "驗證溫度換算資料點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "fc6fcef1404633c69bdc114901bc24c3ce79c7ae3677681f4fb21c6e54ca62d7"
  },
  {
    "questionId": "u05-s009-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "某影印店收費 y=2x+10，其中 x 為張數、y 為元。店員記錄三筆：(5,20)、(10,30)、(15,35)。哪一筆需要更正？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "找出不符合收費直線的紀錄",
    "choices": [
      "(5,20)",
      "(10,30)",
      "三筆都正確",
      "(15,35)"
    ],
    "answerIndex": 3,
    "independentSolution": "前兩筆分別滿足 2×5+10=20、2×10+10=30；第三筆應為 2×15+10=40，不是 35。",
    "explanation": "三筆紀錄都要逐一代入。五張費用為 2×5+10=20，十張為 2×10+10=30，前兩筆正確；十五張應為 2×15+10=40，而紀錄寫三十五元，相差五元，所以需要更正的是 (15,35)。",
    "steps": [
      "將 (5,20) 代入，確認模型費用二十元。",
      "將 (10,30) 代入，確認模型費用三十元。",
      "計算十五張應為四十元，找出 (15,35) 錯誤。"
    ],
    "optionAnalysis": [
      {
        "choice": "(5,20)",
        "truth": false,
        "reason": "代入成立。"
      },
      {
        "choice": "(10,30)",
        "truth": false,
        "reason": "代入成立。"
      },
      {
        "choice": "三筆都正確",
        "truth": false,
        "reason": "忽略第三筆差 5 元。"
      },
      {
        "choice": "(15,35)",
        "truth": true,
        "reason": "正確費用應為 40。"
      }
    ],
    "misconceptionTarget": "只抽查前兩筆都正確就推論全部資料正確，沒有逐筆核對第三筆。",
    "prerequisiteCheck": "需會代入。",
    "estimatedTimeSec": 150,
    "unitCheck": "x 張、y 元，2 元/張加固定 10 元。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "張數皆為非負整數，方案適用。",
    "difficultyReason": "需逐筆驗證多筆實務資料，屬素養。",
    "literacyContextNecessity": "多筆交易紀錄必須依店家收費規則逐筆稽核，資料情境是任務本身。",
    "authoringIntent": "找出不符合收費直線的紀錄",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "cd34396b1e42d39fa2469bc4b8bd8c7f3c9dbd415d536085f84a22d63e05ccc3"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s009-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "判斷 A=(-1,5)、B=(2,1)、C=(4,-3) 是否在直線 2x+y=3 上，並列出所有在線上的點。",
    "requiredWork": [
      "三點逐一代入。",
      "比較左右兩邊。",
      "列出在線點。"
    ],
    "fullCreditSolution": [
      "將 A=(-1,5) 代入：2×(-1)+5=-2+5=3，與右邊三相等，所以 A 在線上。",
      "將 B=(2,1) 代入：2×2+1=5，不等於三，所以 B 不在線上。",
      "將 C=(4,-3) 代入：2×4+(-3)=8-3=5，也不等於三，所以 C 不在線上。",
      "三點逐一比較後，所有在線上的點只有 A=(-1,5)。"
    ],
    "alternativeSolutions": [
      "可製作代入值表：A=3、B=5、C=5。"
    ],
    "reasoningSteps": [
      "依有序數對順序，把 A、B、C 分別代入左邊。",
      "逐點將算出的左邊與固定右邊三比較。",
      "只收集左右相等的點，得到唯一在線點 A。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三點判定全對，列出只有 A，且有代入證據。"
      },
      {
        "score": 2,
        "criteria": "最終在線點正確但少一個代入過程，或只錯一點。"
      },
      {
        "score": 1,
        "criteria": "至少正確代入一點並懂得比較 3。"
      },
      {
        "score": 0,
        "criteria": "以象限或外觀猜測，沒有代入。"
      }
    ],
    "partialCreditRules": [
      "每點獨立計分。"
    ],
    "followThroughPolicy": "若某一點代入時出現算術錯誤，只影響該點判定；其他兩點的代入與真值可獨立計分。",
    "unitAndNotationRules": "每點都須寫出 2x+y 的代入值並與 3 比較；在線點寫成 A=(-1,5)。",
    "answerOnlyPolicy": "只寫 A 而沒有三點代入判斷，最高給 1 分。",
    "commonErrors": [
      "負一或負三代入時未加括號，造成乘法與加減符號錯誤。",
      "把左邊算得五也視為成立，沒有與右邊三比較。",
      "只找到 A 成立就停止，未按題意完成 B、C 的逐點檢查。"
    ],
    "independentReview": {
      "derivedResult": "一點算術錯不連帶扣其他兩點。",
      "ambiguity": "方程式左右為純數比較，不涉及單位。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 一點算術錯不連帶扣其他兩點。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "5192359fa14786bd25634b656ca1e02793b2f9cf2a60c6822d2301b986b1b392"
  },
  {
    "questionId": "u05-s009-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "點 P=(m+1,2m-1) 在直線 3x-y=8 上。求 m，寫出 P，並代回驗證。",
    "requiredWork": [
      "代入含 m 的坐標。",
      "求 m。",
      "求點坐標並驗證。"
    ],
    "fullCreditSolution": [
      "P=(m+1,2m-1) 在線上，代入 3x-y=8 得 3(m+1)-(2m-1)=8。",
      "展開為 3m+3-2m+1=8，合併得 m+4=8，所以 m=4。減去括號時，括號內的負一也要變號。",
      "把 m=4 代回坐標，得到 P=(5,7)。",
      "驗證 3×5-7=15-7=8，與右邊相等，因此參數與點坐標都正確。"
    ],
    "alternativeSolutions": [
      "可先展開後再合併，步驟等價。"
    ],
    "reasoningSteps": [
      "把含 m 的兩個坐標完整代入直線方程式。",
      "正確展開減號與括號，解出 m=4 並求 P=(5,7)。",
      "將完整點坐標代回原式，確認左右同為八。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "m=4、P=(5,7) 且代回驗證完整。"
      },
      {
        "score": 2,
        "criteria": "m 與 P 正確但未驗證，或只有一個小算術錯。"
      },
      {
        "score": 1,
        "criteria": "代入方程式正確但展開或解算錯。"
      },
      {
        "score": 0,
        "criteria": "未把兩個坐標表達式代入對應 x、y。"
      }
    ],
    "partialCreditRules": [
      "m 與點坐標分別評分。"
    ],
    "followThroughPolicy": "若解 m 時出現單一算術錯誤，但能由所得 m 正確算出 P 並代回檢查，依一致後續給部分分；代回不成立時不得給驗證分。",
    "unitAndNotationRules": "答案包含 m=4 與 P=(5,7)；驗證須寫 3×5-7=8。",
    "answerOnlyPolicy": "只寫 m=4 而沒有點坐標與代回驗證，最高給 1 分。",
    "commonErrors": [
      "展開 -(2m-1) 時寫成 -2m-1，沒有讓括號內負一變成正一。",
      "求得 m=4 後直接當成點坐標，未計算 m+1 與 2m-1。",
      "只寫 P=(5,7) 而未代回，無法用驗算發現早期符號錯誤。"
    ],
    "independentReview": {
      "derivedResult": "若展開有單一符號錯但後續依錯誤式一致，可給 1 分；驗算若發現不成立可再給檢查證據。",
      "ambiguity": "P 必須寫成 (x,y)。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若展開有單一符號錯但後續依錯誤式一致，可給 1 分；驗算若發現不成立可再給檢查證據。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8617b8dff621e30f257b45b07526491ffcc767b21763a5aa683244c341ec3d65"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s009-v001",
    "contentSha256": "18661d543baa3666e30dc07085e821304f5bf3949c0091d949b68f585b4df9f5",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "代入 x=1、y=2，左邊 3×1+2=5，等於右邊，所以在線上。",
    "derivedAnswer": "是，因為 3×1+2=5",
    "storedAnswer": "是，因為 3×1+2=5",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「是，因為 3×1+2=5」；其餘三項逐項檢查：「是，因為 1+2=3」不成立，未代入係數 3。；「否，因為 3×1+2=6」不成立，算術錯誤。；「否，因為 1≠2」不成立，坐標分量不必相等。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「判斷點是否在直線上」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "方程式與坐標均明確。",
      "alternateReading": "常見誤讀是「漏乘係數或用無關條件判斷。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "單次代入，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代入。",
    "languageCheck": "題幹所求為「直接判斷點在線上」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 A=(1,2) 是否在直線 3x+y=5 上？」重新依序處理：代入 x=1、y=2，左邊 3×1+2=5，等於右邊，所以在線上。 正確選項為「是，因為 3×1+2=5」。三個干擾項均對應不同錯誤：「是，因為 1+2=3」不成立，未代入係數 3。；「否，因為 3×1+2=6」不成立，算術錯誤。；「否，因為 1≠2」不成立，坐標分量不必相等。。邊界審查：方程式與坐標均明確。 難度理由：單次代入，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s009-v002",
    "contentSha256": "9a45dbcf78cb5c8bdbf0882796157e06c4eb46e5d3c3c551ef4f769809e1dcd2",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "代入 (3,0) 得 3-0=3，不等於 2；其餘三點代入都得 2。",
    "derivedAnswer": "(3,0)",
    "storedAnswer": "(3,0)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(3,0)」；其餘三項逐項檢查：「(2,0)」不成立，代入得 2。；「(5,3)」不成立，代入得 2。；「(-1,-3)」不成立，-1-(-3)=2。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「判斷點是否在直線上」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "只有一個點不成立。",
      "alternateReading": "常見誤讀是「負數相減錯誤或題目問『不在』卻選在線點。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需比較四個候選點，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會負數減法。",
    "languageCheck": "題幹所求為「排除不在線的點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「下列哪個點不在直線 x-y=2 上？」重新依序處理：代入 (3,0) 得 3-0=3，不等於 2；其餘三點代入都得 2。 正確選項為「(3,0)」。三個干擾項均對應不同錯誤：「(2,0)」不成立，代入得 2。；「(5,3)」不成立，代入得 2。；「(-1,-3)」不成立，-1-(-3)=2。。邊界審查：只有一個點不成立。 難度理由：需比較四個候選點，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s009-v003",
    "contentSha256": "8098f30513c13e83be6b25b1f7c48eb942bab54cb96064bcbdb136ea023a1afc",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "左邊 2(-2)+3(4)=-4+12=8，等於右邊。",
    "derivedAnswer": "在直線上",
    "storedAnswer": "在直線上",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「在直線上」；其餘三項逐項檢查：「不在直線上，左邊為 4」不成立，漏算或錯算 3y。；「不在直線上，左邊為 16」不成立，把 2(-2) 誤算成 4。；「無法判斷」不成立，坐標與方程式足夠。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「判斷點是否在直線上」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "無分母或額外條件。",
      "alternateReading": "常見誤讀是「負數代入時忽略括號。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "仍為單次代入，但聚焦負號，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會整數乘加。",
    "languageCheck": "題幹所求為「處理負坐標的在線判定」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 P=(-2,4) 代入 2x+3y=8 的結果為何？」重新依序處理：左邊 2(-2)+3(4)=-4+12=8，等於右邊。 正確選項為「在直線上」。三個干擾項均對應不同錯誤：「不在直線上，左邊為 4」不成立，漏算或錯算 3y。；「不在直線上，左邊為 16」不成立，把 2(-2) 誤算成 4。；「無法判斷」不成立，坐標與方程式足夠。。邊界審查：無分母或額外條件。 難度理由：仍為單次代入，但聚焦負號，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s009-v004",
    "contentSha256": "b3930fa1fd5cde2bfbc04a7b5163fc128456be29aa30354eb9d09b8cd91fe7cd",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "代入得 2k-3=7，故 2k=10，k=5。",
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
      "secondCorrectAnswer": "重新計算得到「5」；其餘三項逐項檢查：「2」不成立，代入得 1。；「3」不成立，代入得 3。；「7」不成立，代入得 11。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「判斷點是否在直線上」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "k 為唯一實數解。",
      "alternateReading": "常見誤讀是「把 k 直接等同常數 7。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需建立一元一次方程式，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會解一次方程式。",
    "languageCheck": "題幹所求為「由在線條件求參數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若 Q=(k,3) 在直線 2x-y=7 上，k 等於多少？」重新依序處理：代入得 2k-3=7，故 2k=10，k=5。 正確選項為「5」。三個干擾項均對應不同錯誤：「2」不成立，代入得 1。；「3」不成立，代入得 3。；「7」不成立，代入得 11。。邊界審查：k 為唯一實數解。 難度理由：需建立一元一次方程式，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s009-v005",
    "contentSha256": "c13f14c9af23d590cfaaf08a7bad656ddf11b98a773cfd7cac8eb218ccbbbb96",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "代入得 a+(a+1)=9，2a+1=9，a=4。",
    "derivedAnswer": "4",
    "storedAnswer": "4",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「4」；其餘三項逐項檢查：「3」不成立，和為 7。；「5」不成立，和為 11。；「8」不成立，和為 17。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「判斷點是否在直線上」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "同一參數出現在兩坐標，答案唯一。",
      "alternateReading": "常見誤讀是「只代入第一分量，忽略 y 也含 a。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需代入並合併同類項，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代數式代入。",
    "languageCheck": "題幹所求為「含參數兩分量的在線條件」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 R=(a,a+1) 在直線 x+y=9 上，求 a。」重新依序處理：代入得 a+(a+1)=9，2a+1=9，a=4。 正確選項為「4」。三個干擾項均對應不同錯誤：「3」不成立，和為 7。；「5」不成立，和為 11。；「8」不成立，和為 17。。邊界審查：同一參數出現在兩坐標，答案唯一。 難度理由：需代入並合併同類項，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s009-v006",
    "contentSha256": "2fb8435badd7b712d8db761f0bc023a076fe9b299d33729655b32433b795a5a7",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "代入 x=2 得 8+b=10，所以 b=2。",
    "derivedAnswer": "2",
    "storedAnswer": "2",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「2」；其餘三項逐項檢查：「3」不成立，左邊為 11。；「-2」不成立，左邊為 6。；「0」不成立，左邊為 8。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「判斷點是否在直線上」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "四個候選值只有 b=2 使等式成立。",
      "alternateReading": "常見誤讀是「把題目常數直接當 b，或忘記先計算 4x。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需完成一次代入與移項，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解在線判定。",
    "languageCheck": "題幹所求為「由在線條件選參數值」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「已知 A=(2,b) 在直線 4x+y=10 上。下列哪個 b 值符合？」重新依序處理：代入 x=2 得 8+b=10，所以 b=2。 正確選項為「2」。三個干擾項均對應不同錯誤：「3」不成立，左邊為 11。；「-2」不成立，左邊為 6。；「0」不成立，左邊為 8。。邊界審查：四個候選值只有 b=2 使等式成立。 難度理由：需完成一次代入與移項，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s009-v007",
    "contentSha256": "5acb84ddb3975d6be9e11ec945731cfdb9d2ba88d5ead3d4db2ac41bfa0d02bd",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "代入得 3(m-1)-2m=4，化簡為 m-3=4，所以 m=7。",
    "derivedAnswer": "7",
    "storedAnswer": "7",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「7」；其餘三項逐項檢查：「1」不成立，代入左邊 -2。；「3」不成立，代入左邊 0。；「5」不成立，代入左邊 2。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「判斷點是否在直線上」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "方程式為一次，唯一解。",
      "alternateReading": "常見誤讀是「展開括號或合併同類項錯誤。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需展開、合併並回代，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代數化簡。",
    "languageCheck": "題幹所求為「複合代數坐標的在線條件」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 S=(m-1,2m) 在直線 3x-y=4 上，求 m。」重新依序處理：代入得 3(m-1)-2m=4，化簡為 m-3=4，所以 m=7。 正確選項為「7」。三個干擾項均對應不同錯誤：「1」不成立，代入左邊 -2。；「3」不成立，代入左邊 0。；「5」不成立，代入左邊 2。。邊界審查：方程式為一次，唯一解。 難度理由：需展開、合併並回代，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s009-v008",
    "contentSha256": "d49e8d86eb4948ccc3783d74482f041f38fef91e2c20d059eb3c89911015e938",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "由 (p,2) 在線得 2p+6=12，p=3；檢查 (3,3) 代入得 15≠12，確實不在線。",
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
      "secondCorrectAnswer": "重新計算得到「3」；其餘三項逐項檢查：「0」不成立，第一點代入得 6。；「2」不成立，第一點代入得 10。；「6」不成立，第一點代入得 18。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「判斷點是否在直線上」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩條件相容且共同給出唯一值。",
      "alternateReading": "常見誤讀是「只使用一個條件，未驗證第二點。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需先求參數再檢查排除條件，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代入。",
    "languageCheck": "題幹所求為「同參數兩點的在線與不在線條件」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「直線 L:2x+3y=12。若點 (p,2) 在 L 上，而點 (p,3) 不在 L 上，p 為何？」重新依序處理：由 (p,2) 在線得 2p+6=12，p=3；檢查 (3,3) 代入得 15≠12，確實不在線。 正確選項為「3」。三個干擾項均對應不同錯誤：「0」不成立，第一點代入得 6。；「2」不成立，第一點代入得 10。；「6」不成立，第一點代入得 18。。邊界審查：兩條件相容且共同給出唯一值。 難度理由：需先求參數再檢查排除條件，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s009-v009",
    "contentSha256": "127a5f3f5e2e1d50bf090a8094dcaec70dd9129bab62be5ccd24931f1f100de7",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "C 在線需 2k+2=4，得 k=1；A、B 也都滿足方程式。",
    "derivedAnswer": "1",
    "storedAnswer": "1",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「1」；其餘三項逐項檢查：「-1」不成立，代入得 0。；「2」不成立，代入得 6。；「3」不成立，代入得 8。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「判斷點是否在直線上」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題幹已指定直線方程式，不需推導斜率。",
      "alternateReading": "常見誤讀是「以 A、B 的坐標平均錯求 k，而未使用方程式。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需理解『同一直線』由共同方程式表達，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需掌握點在線判定。",
    "languageCheck": "題幹所求為「由同一直線條件求第三點參數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若三點 A=(0,4)、B=(2,0)、C=(k,2) 都在同一直線 2x+y=4 上，k 為何？」重新依序處理：C 在線需 2k+2=4，得 k=1；A、B 也都滿足方程式。 正確選項為「1」。三個干擾項均對應不同錯誤：「-1」不成立，代入得 0。；「2」不成立，代入得 6。；「3」不成立，代入得 8。。邊界審查：題幹已指定直線方程式，不需推導斜率。 難度理由：需理解『同一直線』由共同方程式表達，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s009-v010",
    "contentSha256": "db34d3b9606b4502f0b463bda7ee9744e8833d8270923f9da124f1e754510af4",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "代入 x=6，85+150=235，與紀錄 y=235 相同，所以符合。",
    "derivedAnswer": "符合，因為 85+25×6=235",
    "storedAnswer": "符合，因為 85+25×6=235",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「符合，因為 85+25×6=235」；其餘三項逐項檢查：「符合，因為 85+6=91」不成立，漏乘每公里費用。；「不符合，應為 150 元」不成立，漏加起跳價。；「不符合，因為 235÷6 不是 25」不成立，總費用含固定起跳價，不能直接相除。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「判斷點是否在直線上」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "x 為公里，y 為元；25 的單位是元/公里。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "方案只在非負里程使用，x=6 合法。",
      "alternateReading": "常見誤讀是「忽略固定費用或誤用平均單價。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "情境中的變數與固定費用皆不可省略。",
    "literacyContextNecessity": "起跳價 85 元與每公里 25 元共同構成收費規則；判定紀錄是否正確需要完整情境。",
    "prerequisiteCheck": "需會代入一次關係。",
    "languageCheck": "題幹所求為「檢查實際收費紀錄是否在線」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「計程車費 y 元與里程 x 公里滿足 y=85+25x。一次行程紀錄為 (6,235)。這筆紀錄是否符合方案？」重新依序處理：代入 x=6，85+150=235，與紀錄 y=235 相同，所以符合。 正確選項為「符合，因為 85+25×6=235」。三個干擾項均對應不同錯誤：「符合，因為 85+6=91」不成立，漏乘每公里費用。；「不符合，應為 150 元」不成立，漏加起跳價。；「不符合，因為 235÷6 不是 25」不成立，總費用含固定起跳價，不能直接相除。。邊界審查：方案只在非負里程使用，x=6 合法。 難度理由：情境中的變數與固定費用皆不可省略。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s009-v011",
    "contentSha256": "fc6fcef1404633c69bdc114901bc24c3ce79c7ae3677681f4fb21c6e54ca62d7",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "代入 C=20，(9/5)×20=36，再加 32 得 68，所以在線上。",
    "derivedAnswer": "在，因為 36+32=68",
    "storedAnswer": "在，因為 36+32=68",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「在，因為 36+32=68」；其餘三項逐項檢查：「不在，因為 20+32=52」不成立，漏乘 9/5。；「在，因為 20×9=180」不成立，漏除以 5 且未加 32。；「不在，因為 68-32=34」不成立，68-32 應為 36。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「判斷點是否在直線上」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "第一分量為 °C，第二分量為 °F；不同單位不直接相加，僅依公式換算。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "攝氏 20 與華氏 68 為精確常用換算，不涉及近似。",
      "alternateReading": "常見誤讀是「分數係數運算或變數角色錯誤。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需處理分數係數與單位變數，屬素養。",
    "literacyContextNecessity": "攝氏與華氏的變數順序和換算式決定資料點意義，情境不可刪除。",
    "prerequisiteCheck": "需會分數乘法。",
    "languageCheck": "題幹所求為「驗證溫度換算資料點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「溫度換算關係為 F=(9/5)C+32。資料點 (C,F)=(20,68) 是否在關係圖形上？」重新依序處理：代入 C=20，(9/5)×20=36，再加 32 得 68，所以在線上。 正確選項為「在，因為 36+32=68」。三個干擾項均對應不同錯誤：「不在，因為 20+32=52」不成立，漏乘 9/5。；「在，因為 20×9=180」不成立，漏除以 5 且未加 32。；「不在，因為 68-32=34」不成立，68-32 應為 36。。邊界審查：攝氏 20 與華氏 68 為精確常用換算，不涉及近似。 難度理由：需處理分數係數與單位變數，屬素養。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s009-v012",
    "contentSha256": "cd34396b1e42d39fa2469bc4b8bd8c7f3c9dbd415d536085f84a22d63e05ccc3",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "前兩筆分別滿足 2×5+10=20、2×10+10=30；第三筆應為 2×15+10=40，不是 35。",
    "derivedAnswer": "(15,35)",
    "storedAnswer": "(15,35)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(15,35)」；其餘三項逐項檢查：「(5,20)」不成立，代入成立。；「(10,30)」不成立，代入成立。；「三筆都正確」不成立，忽略第三筆差 5 元。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「判斷點是否在直線上」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "x 張、y 元，2 元/張加固定 10 元。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "張數皆為非負整數，方案適用。",
      "alternateReading": "常見誤讀是「只抽查前兩筆便推論全部正確。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需逐筆驗證多筆實務資料，屬素養。",
    "literacyContextNecessity": "多筆交易紀錄必須依店家收費規則逐筆稽核，資料情境是任務本身。",
    "prerequisiteCheck": "需會代入。",
    "languageCheck": "題幹所求為「找出不符合收費直線的紀錄」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「某影印店收費 y=2x+10，其中 x 為張數、y 為元。店員記錄三筆：(5,20)、(10,30)、(15,35)。哪一筆需要更正？」重新依序處理：前兩筆分別滿足 2×5+10=20、2×10+10=30；第三筆應為 2×15+10=40，不是 35。 正確選項為「(15,35)」。三個干擾項均對應不同錯誤：「(5,20)」不成立，代入成立。；「(10,30)」不成立，代入成立。；「三筆都正確」不成立，忽略第三筆差 5 元。。邊界審查：張數皆為非負整數，方案適用。 難度理由：需逐筆驗證多筆實務資料，屬素養。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
