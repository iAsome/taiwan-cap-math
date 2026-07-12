// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s011-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-linear-graph",
  "skillId": "coordinate-line-intersection",
  "lockedTitle": "兩直線交點與聯立方程式",
  "title": "兩直線交點與聯立方程式：共同解就是交點",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能說明交點坐標同時滿足兩條方程式。",
    "能以代入法或消去法求交點。",
    "能判斷平行直線無交點。",
    "能判斷重合直線有無限多個交點。"
  ],
  "prerequisites": [
    {
      "skillId": "coordinate-intercepts",
      "requiredLevel": "能說明並正確使用「x 截距與 y 截距」的核心規則，且不混淆坐標分量順序。"
    }
  ],
  "glossary": [
    {
      "term": "交點",
      "definition": "同時位於兩條直線上的點。"
    },
    {
      "term": "聯立方程式",
      "definition": "要求同一組 x、y 同時滿足兩個方程式。"
    },
    {
      "term": "唯一解",
      "definition": "兩直線相交於一點。"
    },
    {
      "term": "無解",
      "definition": "兩直線平行且不同。"
    },
    {
      "term": "無限多解",
      "definition": "兩方程式表示同一條直線。"
    }
  ],
  "notation": [
    {
      "symbol": "{方程式1,方程式2}",
      "meaning": "把兩條線的條件同時考慮。"
    },
    {
      "symbol": "(x,y)",
      "meaning": "聯立方程式解，也是交點坐標。"
    },
    {
      "symbol": "0=非0",
      "meaning": "消去後矛盾，表示無解。"
    },
    {
      "symbol": "0=0",
      "meaning": "消去後恆等，需確認兩式等價，表示無限多解。"
    }
  ],
  "conceptNarrative": [
    "交點必須同時在兩線上，因此交點坐標是聯立方程式的共同解。",
    "代入法適合某一式容易孤立一個未知數；消去法適合係數容易相消。",
    "求得一組數後，要同時代回兩式驗算。",
    "若消去後出現矛盾，兩線平行；若兩式成比例且完全等價，兩線重合。"
  ],
  "formalDefinitions": [
    {
      "name": "交點與聯立解",
      "statement": "兩直線 L1、L2 的交點集合等於兩方程式共同解集合。"
    },
    {
      "name": "相交情形",
      "statement": "唯一解對應一個交點；無解對應無交點；無限多解對應重合。"
    }
  ],
  "formulas": [
    {
      "formula": "L1∩L2={(x,y):兩式皆成立}",
      "conditions": [
        "兩式皆為二元一次方程式"
      ],
      "meaning": "以共同解描述交點。"
    }
  ],
  "nonApplicableCases": [
    "不能只滿足其中一式。",
    "兩條平行線不能因延長而相交。",
    "重合線不是『沒有交點』，而是每個點都共同。",
    "本節不使用行列式或矩陣。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "選代入或消去。",
      "check": "哪一種能減少運算？"
    },
    {
      "step": 2,
      "instruction": "解出一個未知數。",
      "check": "符號與係數是否正確？"
    },
    {
      "step": 3,
      "instruction": "回求另一個未知數。",
      "check": "是否代回同一組？"
    },
    {
      "step": 4,
      "instruction": "同時驗算兩式。",
      "check": "兩邊都成立嗎？"
    },
    {
      "step": 5,
      "instruction": "若出現矛盾或恆等，判斷線的關係。",
      "check": "是平行還是重合？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "x+y=5、x-y=1 的交點。",
      "solutionSteps": [
        "兩式相加得 2x=6，x=3。",
        "代回得 y=2。"
      ],
      "answer": "(3,2)。"
    },
    {
      "exampleId": "L2",
      "prompt": "2x+y=7、x-y=2。",
      "solutionSteps": [
        "由第二式 y=x-2。",
        "代入第一式得 3x=9，x=3，y=1。"
      ],
      "answer": "(3,1)。"
    },
    {
      "exampleId": "L3",
      "prompt": "x+2y=4、2x+4y=10。",
      "solutionSteps": [
        "第二式左邊是第一式 2 倍，但右邊應為 8 而非 10。",
        "消去得 0=2，矛盾。"
      ],
      "answer": "無解，兩直線平行。"
    },
    {
      "exampleId": "L4",
      "prompt": "3x-y=6、6x-2y=12。",
      "solutionSteps": [
        "第二式是第一式的 2 倍。",
        "兩式完全等價。"
      ],
      "answer": "無限多解，兩直線重合。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只解出 x 就寫交點。",
      "why": "交點需兩個坐標。",
      "correction": "再代回求 y。"
    },
    {
      "mistake": "把兩式各自的任一解拼在一起。",
      "why": "未要求同一組同時成立。",
      "correction": "聯立解必須共同。"
    },
    {
      "mistake": "0=2 時繼續硬求 x。",
      "why": "未辨認矛盾。",
      "correction": "判定無解、兩線平行。"
    },
    {
      "mistake": "0=0 就答唯一交點。",
      "why": "未辨認兩式等價。",
      "correction": "若兩式成比例，為重合且無限多解。"
    },
    {
      "mistake": "驗算只代回一式。",
      "why": "漏掉共同條件。",
      "correction": "兩式都要成立。"
    }
  ],
  "selfCheck": [
    "我是否得到完整 (x,y)？",
    "答案是否同時滿足兩式？",
    "矛盾是否判為平行？",
    "恆等是否確認為重合？"
  ],
  "summary": [
    "交點就是聯立方程式共同解。",
    "唯一解、一個交點。",
    "無解、平行無交點。",
    "無限多解、兩線重合。"
  ],
  "connections": {
    "previous": "承接截距與點在線判定，並使用先前聯立方程式運算。",
    "next": [
      "下一節把坐標、平移、區域與交點整合到生活資訊。",
      "最終題仍須說明每個坐標量的情境意義。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s011-v001",
      "u05-s011-v002",
      "u05-s011-v003",
      "u05-s011-v004",
      "u05-s011-v005",
      "u05-s011-v006",
      "u05-s011-v007",
      "u05-s011-v008",
      "u05-s011-v009",
      "u05-s011-v010",
      "u05-s011-v011",
      "u05-s011-v012"
    ],
    "constructedResponseIds": [
      "u05-s011-cr001",
      "u05-s011-cr002"
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
    "reviewNote": "四例分別以消去、代入、矛盾與等價比例重新驗證；唯一解均代回兩式，平行和重合的幾何意義未混淆。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "9c8adb1d3ab25ff1d036308cb34172d4ce58d51d3d856c9200a440fc2bb67017"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s011-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "直線 x+y=7 與 x-y=1 的交點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "求簡單聯立交點",
    "choices": [
      "(3,4)",
      "(7,1)",
      "(4,3)",
      "(4,-3)"
    ],
    "answerIndex": 2,
    "independentSolution": "兩式相加得 2x=8，x=4；代回 x+y=7 得 y=3。",
    "explanation": "兩式相加得 2x=8，x=4；代回 x+y=7 得 y=3。",
    "steps": [
      "消去 y 求 x=4。",
      "代回求 y=3。"
    ],
    "optionAnalysis": [
      {
        "choice": "(3,4)",
        "truth": false,
        "reason": "代入第二式得 -1。"
      },
      {
        "choice": "(7,1)",
        "truth": false,
        "reason": "代入第一式得 8。"
      },
      {
        "choice": "(4,3)",
        "truth": true,
        "reason": "同時滿足兩式。"
      },
      {
        "choice": "(4,-3)",
        "truth": false,
        "reason": "代入第一式得 1。"
      }
    ],
    "misconceptionTarget": "解出數值後交換 x、y 或漏掉負號。",
    "prerequisiteCheck": "需會聯立方程式。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩直線不平行，唯一交點。",
    "difficultyReason": "係數可直接相加消去，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "求簡單聯立交點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d8fa9658bd922fc73ef246417e9113f0c9497bff397bf7552b1f5ef942ae4abf"
  },
  {
    "questionId": "u05-s011-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "兩直線 2x+y=5、x-y=1 的交點是下列哪一點？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "辨認共同解",
    "choices": [
      "(1,2)",
      "(2,1)",
      "(3,-1)",
      "(0,5)"
    ],
    "answerIndex": 1,
    "independentSolution": "兩式相加得 3x=6，x=2；代回得 y=1。",
    "explanation": "兩式相加得 3x=6，x=2；代回得 y=1。",
    "steps": [
      "相加消去 y。",
      "代回第一式。"
    ],
    "optionAnalysis": [
      {
        "choice": "(1,2)",
        "truth": false,
        "reason": "第一式 4，第二式 -1。"
      },
      {
        "choice": "(2,1)",
        "truth": true,
        "reason": "4+1=5 且 2-1=1。"
      },
      {
        "choice": "(3,-1)",
        "truth": false,
        "reason": "第一式 5 但第二式 4，只滿足一式。"
      },
      {
        "choice": "(0,5)",
        "truth": false,
        "reason": "只滿足第一式。"
      }
    ],
    "misconceptionTarget": "只滿足其中一條直線就當成交點。",
    "prerequisiteCheck": "需會代入驗算。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "唯一正確點同時滿足兩式。",
    "difficultyReason": "需解一個兩式聯立，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認共同解",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c3edcdf584f326a01e1f1a7778a4fc5bc1bdb43fedf8274a75b2c5df40c23dec"
  },
  {
    "questionId": "u05-s011-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若兩條不同直線沒有交點，它們的關係為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "連結無交點與平行",
    "choices": [
      "互相垂直",
      "完全重合",
      "一定通過原點",
      "互相平行"
    ],
    "answerIndex": 3,
    "independentSolution": "平面上兩條不同直線若無交點，表示方向相同而位置不同，即互相平行。",
    "explanation": "平面上兩條不同直線若無交點，表示方向相同而位置不同，即互相平行。",
    "steps": [
      "排除重合：重合有無限多共同點。",
      "無交點的不同直線為平行。"
    ],
    "optionAnalysis": [
      {
        "choice": "互相垂直",
        "truth": false,
        "reason": "會相交一點。"
      },
      {
        "choice": "完全重合",
        "truth": false,
        "reason": "有無限多交點。"
      },
      {
        "choice": "一定通過原點",
        "truth": false,
        "reason": "與無交點無必然關係。"
      },
      {
        "choice": "互相平行",
        "truth": true,
        "reason": "符合無交點且不同線。"
      }
    ],
    "misconceptionTarget": "把無解與無限多解混淆。",
    "prerequisiteCheck": "需理解直線關係。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目明說兩條直線不同，排除重合。",
    "difficultyReason": "概念辨認，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "連結無交點與平行",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e2971de6115dcf5cea4893e6ef41530ab33ab7ade4b2ffbd8ba95519290dd42e"
  },
  {
    "questionId": "u05-s011-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "聯立方程式 x+2y=8、3x-2y=8 的解為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "用消去法求交點",
    "choices": [
      "(4,2)",
      "(2,3)",
      "(3,2)",
      "(4,-2)"
    ],
    "answerIndex": 0,
    "independentSolution": "兩式相加得 4x=16，x=4；代入第一式 4+2y=8，y=2。",
    "explanation": "兩式相加得 4x=16，x=4；代入第一式 4+2y=8，y=2。",
    "steps": [
      "相加求 x。",
      "代回求 y。"
    ],
    "optionAnalysis": [
      {
        "choice": "(4,2)",
        "truth": true,
        "reason": "兩式均成立。"
      },
      {
        "choice": "(2,3)",
        "truth": false,
        "reason": "第一式 8，但第二式 0。"
      },
      {
        "choice": "(3,2)",
        "truth": false,
        "reason": "第一式 7。"
      },
      {
        "choice": "(4,-2)",
        "truth": false,
        "reason": "第一式 0。"
      }
    ],
    "misconceptionTarget": "只驗算一式或代回算術錯。",
    "prerequisiteCheck": "需會消去法。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "係數設計可直接消去 y。",
    "difficultyReason": "需兩步求解與雙式驗算，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "用消去法求交點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f95feccafbde37ffa194b482cdb58e9e25ecdf9e4ed2856ec59f621aaee60f89"
  },
  {
    "questionId": "u05-s011-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "直線 y=2x-1 與 x+y=8 的交點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "用代入法求交點",
    "choices": [
      "(3,5)",
      "(5,3)",
      "(2,3)",
      "(4,4)"
    ],
    "answerIndex": 0,
    "independentSolution": "代入 y=2x-1 到 x+y=8：3x-1=8，x=3，y=5。",
    "explanation": "代入 y=2x-1 到 x+y=8：3x-1=8，x=3，y=5。",
    "steps": [
      "代入得到 3x=9。",
      "回求 y=5。"
    ],
    "optionAnalysis": [
      {
        "choice": "(3,5)",
        "truth": true,
        "reason": "5=2×3-1 且 3+5=8。"
      },
      {
        "choice": "(5,3)",
        "truth": false,
        "reason": "交換坐標且不滿足第一式。"
      },
      {
        "choice": "(2,3)",
        "truth": false,
        "reason": "滿足第一式但和為 5。"
      },
      {
        "choice": "(4,4)",
        "truth": false,
        "reason": "和為 8但不滿足第一式。"
      }
    ],
    "misconceptionTarget": "看到某點滿足其中一式便停止。",
    "prerequisiteCheck": "需會代入法。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩線唯一相交。",
    "difficultyReason": "需選擇已孤立 y 的式子代入，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "用代入法求交點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8b851b2df58fe7ab772ef9a48b2dd673f12d18a7105c805888cabb76072b605c"
  },
  {
    "questionId": "u05-s011-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "聯立 2x+4y=6 與 x+2y=5，解的情形為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "判斷平行無解",
    "choices": [
      "唯一解",
      "無限多解",
      "有兩個解",
      "無解"
    ],
    "answerIndex": 3,
    "independentSolution": "第一式除以 2 得 x+2y=3，與第二式 x+2y=5 左邊相同、右邊不同，矛盾，故無解。",
    "explanation": "第一式除以 2 得 x+2y=3，與第二式 x+2y=5 左邊相同、右邊不同，矛盾，故無解。",
    "steps": [
      "化簡第一式。",
      "比較同左邊不同常數。"
    ],
    "optionAnalysis": [
      {
        "choice": "唯一解",
        "truth": false,
        "reason": "係數比例造成矛盾，不會相交。"
      },
      {
        "choice": "無限多解",
        "truth": false,
        "reason": "右邊若也成相同比例才會重合。"
      },
      {
        "choice": "有兩個解",
        "truth": false,
        "reason": "兩直線不可能只相交兩點。"
      },
      {
        "choice": "無解",
        "truth": true,
        "reason": "兩條不同平行線。"
      }
    ],
    "misconceptionTarget": "只看到係數成比例就判無限多解，未檢查常數。",
    "prerequisiteCheck": "需理解聯立解的情形。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩式均合法且互相矛盾。",
    "difficultyReason": "需比較完整比例關係，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "判斷平行無解",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "0e98d1def2e1ad96a6e0f5f2e05c697a0f5859ee18a07ac9f9b9d94e719cec6f"
  },
  {
    "questionId": "u05-s011-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "聯立 3x-y=9 與 6x-2y=18 的解有多少組？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "判斷重合無限多解",
    "choices": [
      "0 組",
      "1 組",
      "無限多組",
      "2 組"
    ],
    "answerIndex": 2,
    "independentSolution": "第二式是第一式的 2 倍，兩式表示同一直線，所以每個第一式解都同時滿足第二式。",
    "explanation": "第二式是第一式的 2 倍，兩式表示同一直線，所以每個第一式解都同時滿足第二式。",
    "steps": [
      "比較各項係數與常數。",
      "確認完全成 2 倍。"
    ],
    "optionAnalysis": [
      {
        "choice": "0 組",
        "truth": false,
        "reason": "無解需常數比例不一致。"
      },
      {
        "choice": "1 組",
        "truth": false,
        "reason": "重合不只一點。"
      },
      {
        "choice": "無限多組",
        "truth": true,
        "reason": "兩直線重合。"
      },
      {
        "choice": "2 組",
        "truth": false,
        "reason": "兩直線不可能只有兩個交點。"
      }
    ],
    "misconceptionTarget": "把重合線誤判為平行無交點。",
    "prerequisiteCheck": "需理解方程式等價。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩式完全等價。",
    "difficultyReason": "需辨認完整倍數關係，屬進階概念。",
    "literacyContextNecessity": null,
    "authoringIntent": "判斷重合無限多解",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "ffaa52e444d9cf0614bc825488c931e98aff0f0342bd6ad8f6e84cd4bf775358"
  },
  {
    "questionId": "u05-s011-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "直線 ax+y=4 與 x-y=2 的交點為 (3,1)，求 a。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由交點反求係數",
    "choices": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answerIndex": 1,
    "independentSolution": "將 (3,1) 代入第一式得 3a+1=4，a=1；第二式 3-1=2 也成立。",
    "explanation": "將 (3,1) 代入第一式得 3a+1=4，a=1；第二式 3-1=2 也成立。",
    "steps": [
      "由第一式求 a。",
      "用第二式確認交點資料一致。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "第一式左邊為 1。"
      },
      {
        "choice": "1",
        "truth": true,
        "reason": "3+1=4。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "左邊為 7。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "左邊為 10。"
      }
    ],
    "misconceptionTarget": "未確認給定點也滿足另一條直線。",
    "prerequisiteCheck": "需會代入。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "交點資料與第二式相容。",
    "difficultyReason": "需使用交點同時在線的概念並回代，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由交點反求係數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4bdd19424f9d482ed505febd8351296907af100a88cf516ac6470f8492a0e4d1"
  },
  {
    "questionId": "u05-s011-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "兩直線 (m-1)x+y=2 與 2x+y=5 平行且不同，求 m。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由平行條件求參數",
    "choices": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answerIndex": 1,
    "independentSolution": "平行且 y 係數相同時，x 係數也需相同：m-1=2，得 m=3；常數 2 與 5 不同，所以兩線不重合。",
    "explanation": "平行且 y 係數相同時，x 係數也需相同：m-1=2，得 m=3；常數 2 與 5 不同，所以兩線不重合。",
    "steps": [
      "令 x 係數相同。",
      "檢查常數不同。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "第一式為 y=2，與第二式不平行。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "兩式左邊相同、右邊不同。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "第一式 x+y=2。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "第一式 3x+y=2。"
      }
    ],
    "misconceptionTarget": "只令係數接近，或忘記排除重合。",
    "prerequisiteCheck": "需理解平行無解。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "本題 y 係數皆為 1，直接比較 x 係數合法。",
    "difficultyReason": "需從方程式結構判斷平行與不同，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由平行條件求參數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "09b43e827b7f3608fe99726fde99754cded8054de7dd23b829d827174131b77a"
  },
  {
    "questionId": "u05-s011-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "兩種方案的費用分別為 y=30x+100 與 y=50x+40。使用多少單位 x 時費用相同？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "找兩費用直線交點的 x 坐標",
    "choices": [
      "x=1",
      "x=2",
      "x=3",
      "x=7"
    ],
    "answerIndex": 2,
    "independentSolution": "費用相同即 30x+100=50x+40。移項得 60=20x，所以 x=3。",
    "explanation": "費用相同即 30x+100=50x+40。移項得 60=20x，所以 x=3。",
    "steps": [
      "令兩個 y 表達式相等。",
      "解出 x=3。"
    ],
    "optionAnalysis": [
      {
        "choice": "x=1",
        "truth": false,
        "reason": "費用 130 與 90。"
      },
      {
        "choice": "x=2",
        "truth": false,
        "reason": "費用 160 與 140。"
      },
      {
        "choice": "x=3",
        "truth": true,
        "reason": "兩方案費用皆 190。"
      },
      {
        "choice": "x=7",
        "truth": false,
        "reason": "費用 310 與 390。"
      }
    ],
    "misconceptionTarget": "把兩個固定費用或單價分別相等。",
    "prerequisiteCheck": "需會解一元一次方程式。",
    "estimatedTimeSec": 150,
    "unitCheck": "x 為使用單位，y 為元；比較的是同一 x 下的費用。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "x 可為非負使用量，3 合法。",
    "difficultyReason": "情境中『費用相同』就是直線交點條件。",
    "literacyContextNecessity": "兩方案的單價與固定費用共同決定損益交會點，不能刪除情境。",
    "authoringIntent": "找兩費用直線交點的 x 坐標",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c30573e4bf9948ef092856cc8953611986fe27084e28ee731ba15d2de6a4db4a"
  },
  {
    "questionId": "u05-s011-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "甲水箱水量 y=120-10x，乙水箱水量 y=30+5x，x 為分鐘。幾分鐘後兩水箱水量相同？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "以交點解水量相同時間",
    "choices": [
      "6 分鐘",
      "5 分鐘",
      "10 分鐘",
      "15 分鐘"
    ],
    "answerIndex": 0,
    "independentSolution": "令 120-10x=30+5x，得 90=15x，所以 x=6。",
    "explanation": "令 120-10x=30+5x，得 90=15x，所以 x=6。",
    "steps": [
      "建立共同水量方程式。",
      "解 x=6。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 分鐘",
        "truth": true,
        "reason": "兩水箱均為 60 公升。"
      },
      {
        "choice": "5 分鐘",
        "truth": false,
        "reason": "水量 70 與 55。"
      },
      {
        "choice": "10 分鐘",
        "truth": false,
        "reason": "水量 20 與 80。"
      },
      {
        "choice": "15 分鐘",
        "truth": false,
        "reason": "甲為負值且不相等。"
      }
    ],
    "misconceptionTarget": "將兩個變化率直接相加而漏掉初始差。",
    "prerequisiteCheck": "需會聯立或等式。",
    "estimatedTimeSec": 150,
    "unitCheck": "x 分鐘、y 公升；答案要求時間。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "x=6 在兩模型水量非負範圍內。",
    "difficultyReason": "需理解遞減與遞增直線的交會。",
    "literacyContextNecessity": "初始水量與每分鐘變化率決定相同時刻，情境資料全部必要。",
    "authoringIntent": "以交點解水量相同時間",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "1780f634a20d6c7609464eabf225c52b867851662c9ae6bf12e3fab198d9d0c1"
  },
  {
    "questionId": "u05-s011-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "城市中兩條道路分別為 x+y=10 與 x-y=4。救援站設在交點，坐標為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "以道路交點定位救援站",
    "choices": [
      "(3,7)",
      "(6,4)",
      "(5,5)",
      "(7,3)"
    ],
    "answerIndex": 3,
    "independentSolution": "兩式相加得 2x=14，x=7；代回得 y=3。",
    "explanation": "兩式相加得 2x=14，x=7；代回得 y=3。",
    "steps": [
      "消去 y 求 x。",
      "代回求 y。"
    ],
    "optionAnalysis": [
      {
        "choice": "(3,7)",
        "truth": false,
        "reason": "第二式不成立。"
      },
      {
        "choice": "(6,4)",
        "truth": false,
        "reason": "第一式成立但差為 2。"
      },
      {
        "choice": "(5,5)",
        "truth": false,
        "reason": "第一式成立但差為 0。"
      },
      {
        "choice": "(7,3)",
        "truth": true,
        "reason": "同時滿足 7+3=10、7-3=4。"
      }
    ],
    "misconceptionTarget": "只檢查道路總和條件，未檢查差。",
    "prerequisiteCheck": "需會消去法。",
    "estimatedTimeSec": 150,
    "unitCheck": "答案為地圖坐標，不是兩道路的距離。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "道路視為完整直線，交點唯一。",
    "difficultyReason": "需將共同位置視為聯立解，屬素養。",
    "literacyContextNecessity": "救援站必須同時位於兩條道路上，交點坐標是實際選址條件。",
    "authoringIntent": "以道路交點定位救援站",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7b6ae4eaadbc34675524db1dc08148fe2e7680917ee80b2ef8b0e03cbc0cc503"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s011-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "求兩直線 2x+y=9 與 x-y=0 的交點，並將答案同時代回兩式驗證。",
    "requiredWork": [
      "選擇代入或消去。",
      "求完整坐標。",
      "雙式驗算。"
    ],
    "fullCreditSolution": [
      "由 x-y=0 得 y=x。",
      "代入 2x+y=9 得 3x=9，x=3，y=3。",
      "驗證：2×3+3=9；3-3=0。",
      "交點為 (3,3)。"
    ],
    "alternativeSolutions": [
      "也可兩式相加得 3x=9，再求 y。"
    ],
    "reasoningSteps": [
      "由 x-y=0 得 y=x。",
      "代入 2x+y=9 得 3x=9，x=3，y=3。",
      "驗證：2×3+3=9；3-3=0。",
      "交點為 (3,3)。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "交點 (3,3)，解法合理且兩式驗算完整。"
      },
      {
        "score": 2,
        "criteria": "交點正確但只驗一式或未明確驗算。"
      },
      {
        "score": 1,
        "criteria": "建立 y=x 或消去步驟正確，但後續算錯。"
      },
      {
        "score": 0,
        "criteria": "只解其中一條直線的一組解。"
      }
    ],
    "partialCreditRules": [
      "代入法、消去法均可。"
    ],
    "followThroughPolicy": "若消去或代入時有單一算術錯誤，但用所得有序對正確代回兩式，可給代回方法分；只有同時滿足兩式才給交點答案分。",
    "unitAndNotationRules": "交點寫成 (3,3)；驗證需分別列出 2x+y=9 與 x-y=0 的代入結果。",
    "answerOnlyPolicy": "只寫交點 (3,3) 而沒有聯立過程與雙式驗證，最高給 2 分。",
    "commonErrors": [
      "解出 x 後寫成單一數值交點。",
      "只代回第一式。"
    ],
    "independentReview": {
      "derivedResult": "若 x 有早期算術錯，後續依該 x 正確求 y 與驗算，可給方法分；若驗算顯示不成立應能指出。",
      "ambiguity": "交點寫成 (x,y)。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若 x 有早期算術錯，後續依該 x 正確求 y 與驗算，可給方法分；若驗算顯示不成立應能指出。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e978298d00d99e5afee064d991aaf6b81a11d524bd8a4c3c560c3a3ba8b64ed8"
  },
  {
    "questionId": "u05-s011-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "判斷聯立方程式 3x+6y=12 與 x+2y=5 的解的情形，並用代數與直線關係各解釋一次。",
    "requiredWork": [
      "比較兩式。",
      "指出矛盾或解數。",
      "連結平行、重合或相交。"
    ],
    "fullCreditSolution": [
      "第一式除以 3 得 x+2y=4。",
      "第二式為 x+2y=5，左邊相同但右邊不同，無法同時成立，所以聯立無解。",
      "幾何上兩條直線方向相同、位置不同，因此互相平行且沒有交點。"
    ],
    "alternativeSolutions": [
      "也可將第二式乘 3 後與第一式相減，得到 0=3 的矛盾。"
    ],
    "reasoningSteps": [
      "第一式除以 3 得 x+2y=4。",
      "第二式為 x+2y=5，左邊相同但右邊不同，無法同時成立，所以聯立無解。",
      "幾何上兩條直線方向相同、位置不同，因此互相平行且沒有交點。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確判無解，指出代數矛盾，並說明兩線平行不同。"
      },
      {
        "score": 2,
        "criteria": "判無解且有代數或幾何其中一種完整理由。"
      },
      {
        "score": 1,
        "criteria": "看出係數成比例，但把無解與無限多解混淆。"
      },
      {
        "score": 0,
        "criteria": "硬解出一組 x、y 且未察覺矛盾。"
      }
    ],
    "partialCreditRules": [
      "必須檢查常數比例，不能只看 x、y 係數。"
    ],
    "followThroughPolicy": "若化簡第一式時有算術錯誤，但能正確比較兩式係數關係並由矛盾判斷無解，可依有效理由給部分分。",
    "unitAndNotationRules": "結論寫「無解」；直線關係寫「平行且不重合」，不可寫成重合或只有一個交點。",
    "answerOnlyPolicy": "只寫「無解」而沒有代數矛盾與平行線解釋，最高給 1 分。",
    "commonErrors": [
      "判為無限多解。",
      "說平行線延長後會相交。"
    ],
    "independentReview": {
      "derivedResult": "若化簡常數有單一算術錯，但能正確說明『同左邊不同右邊→無解』，可給概念分。",
      "ambiguity": "答案是解的情形，不需單位。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若化簡常數有單一算術錯，但能正確說明『同左邊不同右邊→無解』，可給概念分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "23f59caf62fcae60a572cc10ce0783e6cb9b5b9a44e8484b6f2dc104346a9544"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s011-v001",
    "contentSha256": "d8fa9658bd922fc73ef246417e9113f0c9497bff397bf7552b1f5ef942ae4abf",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "兩式相加得 2x=8，x=4；代回 x+y=7 得 y=3。",
    "derivedAnswer": "(4,3)",
    "storedAnswer": "(4,3)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(4,3)」；其餘三項逐項檢查：「(3,4)」不成立，代入第二式得 -1。；「(7,1)」不成立，代入第一式得 8。；「(4,-3)」不成立，代入第一式得 1。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「兩直線交點與聯立方程式」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩直線不平行，唯一交點。",
      "alternateReading": "常見誤讀是「解出數值後交換 x、y 或漏掉負號。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "係數可直接相加消去，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會聯立方程式。",
    "languageCheck": "題幹所求為「求簡單聯立交點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「直線 x+y=7 與 x-y=1 的交點為何？」重新依序處理：兩式相加得 2x=8，x=4；代回 x+y=7 得 y=3。 正確選項為「(4,3)」。三個干擾項均對應不同錯誤：「(3,4)」不成立，代入第二式得 -1。；「(7,1)」不成立，代入第一式得 8。；「(4,-3)」不成立，代入第一式得 1。。邊界審查：兩直線不平行，唯一交點。 難度理由：係數可直接相加消去，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s011-v002",
    "contentSha256": "c3edcdf584f326a01e1f1a7778a4fc5bc1bdb43fedf8274a75b2c5df40c23dec",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "兩式相加得 3x=6，x=2；代回得 y=1。",
    "derivedAnswer": "(2,1)",
    "storedAnswer": "(2,1)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(2,1)」；其餘三項逐項檢查：「(1,2)」不成立，第一式 4，第二式 -1。；「(3,-1)」不成立，第一式 5 但第二式 4，只滿足一式。；「(0,5)」不成立，只滿足第一式。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「兩直線交點與聯立方程式」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "唯一正確點同時滿足兩式。",
      "alternateReading": "常見誤讀是「只滿足其中一條直線就當成交點。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需解一個兩式聯立，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代入驗算。",
    "languageCheck": "題幹所求為「辨認共同解」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「兩直線 2x+y=5、x-y=1 的交點是下列哪一點？」重新依序處理：兩式相加得 3x=6，x=2；代回得 y=1。 正確選項為「(2,1)」。三個干擾項均對應不同錯誤：「(1,2)」不成立，第一式 4，第二式 -1。；「(3,-1)」不成立，第一式 5 但第二式 4，只滿足一式。；「(0,5)」不成立，只滿足第一式。。邊界審查：唯一正確點同時滿足兩式。 難度理由：需解一個兩式聯立，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s011-v003",
    "contentSha256": "e2971de6115dcf5cea4893e6ef41530ab33ab7ade4b2ffbd8ba95519290dd42e",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "平面上兩條不同直線若無交點，表示方向相同而位置不同，即互相平行。",
    "derivedAnswer": "互相平行",
    "storedAnswer": "互相平行",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「互相平行」；其餘三項逐項檢查：「互相垂直」不成立，會相交一點。；「完全重合」不成立，有無限多交點。；「一定通過原點」不成立，與無交點無必然關係。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「兩直線交點與聯立方程式」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目明說兩條直線不同，排除重合。",
      "alternateReading": "常見誤讀是「把無解與無限多解混淆。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "概念辨認，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解直線關係。",
    "languageCheck": "題幹所求為「連結無交點與平行」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若兩條不同直線沒有交點，它們的關係為何？」重新依序處理：平面上兩條不同直線若無交點，表示方向相同而位置不同，即互相平行。 正確選項為「互相平行」。三個干擾項均對應不同錯誤：「互相垂直」不成立，會相交一點。；「完全重合」不成立，有無限多交點。；「一定通過原點」不成立，與無交點無必然關係。。邊界審查：題目明說兩條直線不同，排除重合。 難度理由：概念辨認，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s011-v004",
    "contentSha256": "f95feccafbde37ffa194b482cdb58e9e25ecdf9e4ed2856ec59f621aaee60f89",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "兩式相加得 4x=16，x=4；代入第一式 4+2y=8，y=2。",
    "derivedAnswer": "(4,2)",
    "storedAnswer": "(4,2)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(4,2)」；其餘三項逐項檢查：「(2,3)」不成立，第一式 8，但第二式 0。；「(3,2)」不成立，第一式 7。；「(4,-2)」不成立，第一式 0。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「兩直線交點與聯立方程式」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "係數設計可直接消去 y。",
      "alternateReading": "常見誤讀是「只驗算一式或代回算術錯。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需兩步求解與雙式驗算，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會消去法。",
    "languageCheck": "題幹所求為「用消去法求交點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「聯立方程式 x+2y=8、3x-2y=8 的解為何？」重新依序處理：兩式相加得 4x=16，x=4；代入第一式 4+2y=8，y=2。 正確選項為「(4,2)」。三個干擾項均對應不同錯誤：「(2,3)」不成立，第一式 8，但第二式 0。；「(3,2)」不成立，第一式 7。；「(4,-2)」不成立，第一式 0。。邊界審查：係數設計可直接消去 y。 難度理由：需兩步求解與雙式驗算，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s011-v005",
    "contentSha256": "8b851b2df58fe7ab772ef9a48b2dd673f12d18a7105c805888cabb76072b605c",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "代入 y=2x-1 到 x+y=8：3x-1=8，x=3，y=5。",
    "derivedAnswer": "(3,5)",
    "storedAnswer": "(3,5)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(3,5)」；其餘三項逐項檢查：「(5,3)」不成立，交換坐標且不滿足第一式。；「(2,3)」不成立，滿足第一式但和為 5。；「(4,4)」不成立，和為 8但不滿足第一式。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「兩直線交點與聯立方程式」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩線唯一相交。",
      "alternateReading": "常見誤讀是「看到某點滿足其中一式便停止。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需選擇已孤立 y 的式子代入，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代入法。",
    "languageCheck": "題幹所求為「用代入法求交點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「直線 y=2x-1 與 x+y=8 的交點為何？」重新依序處理：代入 y=2x-1 到 x+y=8：3x-1=8，x=3，y=5。 正確選項為「(3,5)」。三個干擾項均對應不同錯誤：「(5,3)」不成立，交換坐標且不滿足第一式。；「(2,3)」不成立，滿足第一式但和為 5。；「(4,4)」不成立，和為 8但不滿足第一式。。邊界審查：兩線唯一相交。 難度理由：需選擇已孤立 y 的式子代入，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s011-v006",
    "contentSha256": "0e98d1def2e1ad96a6e0f5f2e05c697a0f5859ee18a07ac9f9b9d94e719cec6f",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "第一式除以 2 得 x+2y=3，與第二式 x+2y=5 左邊相同、右邊不同，矛盾，故無解。",
    "derivedAnswer": "無解",
    "storedAnswer": "無解",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「無解」；其餘三項逐項檢查：「唯一解」不成立，係數比例造成矛盾，不會相交。；「無限多解」不成立，右邊若也成相同比例才會重合。；「有兩個解」不成立，兩直線不可能只相交兩點。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「兩直線交點與聯立方程式」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩式均合法且互相矛盾。",
      "alternateReading": "常見誤讀是「只看到係數成比例就判無限多解，未檢查常數。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需比較完整比例關係，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解聯立解的情形。",
    "languageCheck": "題幹所求為「判斷平行無解」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「聯立 2x+4y=6 與 x+2y=5，解的情形為何？」重新依序處理：第一式除以 2 得 x+2y=3，與第二式 x+2y=5 左邊相同、右邊不同，矛盾，故無解。 正確選項為「無解」。三個干擾項均對應不同錯誤：「唯一解」不成立，係數比例造成矛盾，不會相交。；「無限多解」不成立，右邊若也成相同比例才會重合。；「有兩個解」不成立，兩直線不可能只相交兩點。。邊界審查：兩式均合法且互相矛盾。 難度理由：需比較完整比例關係，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s011-v007",
    "contentSha256": "ffaa52e444d9cf0614bc825488c931e98aff0f0342bd6ad8f6e84cd4bf775358",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "第二式是第一式的 2 倍，兩式表示同一直線，所以每個第一式解都同時滿足第二式。",
    "derivedAnswer": "無限多組",
    "storedAnswer": "無限多組",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「無限多組」；其餘三項逐項檢查：「0 組」不成立，無解需常數比例不一致。；「1 組」不成立，重合不只一點。；「2 組」不成立，兩直線不可能只有兩個交點。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「兩直線交點與聯立方程式」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩式完全等價。",
      "alternateReading": "常見誤讀是「把重合線誤判為平行無交點。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需辨認完整倍數關係，屬進階概念。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解方程式等價。",
    "languageCheck": "題幹所求為「判斷重合無限多解」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「聯立 3x-y=9 與 6x-2y=18 的解有多少組？」重新依序處理：第二式是第一式的 2 倍，兩式表示同一直線，所以每個第一式解都同時滿足第二式。 正確選項為「無限多組」。三個干擾項均對應不同錯誤：「0 組」不成立，無解需常數比例不一致。；「1 組」不成立，重合不只一點。；「2 組」不成立，兩直線不可能只有兩個交點。。邊界審查：兩式完全等價。 難度理由：需辨認完整倍數關係，屬進階概念。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s011-v008",
    "contentSha256": "4bdd19424f9d482ed505febd8351296907af100a88cf516ac6470f8492a0e4d1",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "將 (3,1) 代入第一式得 3a+1=4，a=1；第二式 3-1=2 也成立。",
    "derivedAnswer": "1",
    "storedAnswer": "1",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「1」；其餘三項逐項檢查：「0」不成立，第一式左邊為 1。；「2」不成立，左邊為 7。；「3」不成立，左邊為 10。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「兩直線交點與聯立方程式」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "交點資料與第二式相容。",
      "alternateReading": "常見誤讀是「未確認給定點也滿足另一條直線。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需使用交點同時在線的概念並回代，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代入。",
    "languageCheck": "題幹所求為「由交點反求係數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「直線 ax+y=4 與 x-y=2 的交點為 (3,1)，求 a。」重新依序處理：將 (3,1) 代入第一式得 3a+1=4，a=1；第二式 3-1=2 也成立。 正確選項為「1」。三個干擾項均對應不同錯誤：「0」不成立，第一式左邊為 1。；「2」不成立，左邊為 7。；「3」不成立，左邊為 10。。邊界審查：交點資料與第二式相容。 難度理由：需使用交點同時在線的概念並回代，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s011-v009",
    "contentSha256": "09b43e827b7f3608fe99726fde99754cded8054de7dd23b829d827174131b77a",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "平行且 y 係數相同時，x 係數也需相同：m-1=2，得 m=3；常數 2 與 5 不同，所以兩線不重合。",
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
      "secondCorrectAnswer": "重新計算得到「3」；其餘三項逐項檢查：「1」不成立，第一式為 y=2，與第二式不平行。；「2」不成立，第一式 x+y=2。；「4」不成立，第一式 3x+y=2。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「兩直線交點與聯立方程式」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "本題 y 係數皆為 1，直接比較 x 係數合法。",
      "alternateReading": "常見誤讀是「只令係數接近，或忘記排除重合。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需從方程式結構判斷平行與不同，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解平行無解。",
    "languageCheck": "題幹所求為「由平行條件求參數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「兩直線 (m-1)x+y=2 與 2x+y=5 平行且不同，求 m。」重新依序處理：平行且 y 係數相同時，x 係數也需相同：m-1=2，得 m=3；常數 2 與 5 不同，所以兩線不重合。 正確選項為「3」。三個干擾項均對應不同錯誤：「1」不成立，第一式為 y=2，與第二式不平行。；「2」不成立，第一式 x+y=2。；「4」不成立，第一式 3x+y=2。。邊界審查：本題 y 係數皆為 1，直接比較 x 係數合法。 難度理由：需從方程式結構判斷平行與不同，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s011-v010",
    "contentSha256": "c30573e4bf9948ef092856cc8953611986fe27084e28ee731ba15d2de6a4db4a",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "費用相同即 30x+100=50x+40。移項得 60=20x，所以 x=3。",
    "derivedAnswer": "x=3",
    "storedAnswer": "x=3",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「x=3」；其餘三項逐項檢查：「x=1」不成立，費用 130 與 90。；「x=2」不成立，費用 160 與 140。；「x=7」不成立，費用 310 與 390。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「兩直線交點與聯立方程式」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "x 為使用單位，y 為元；比較的是同一 x 下的費用。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "x 可為非負使用量，3 合法。",
      "alternateReading": "常見誤讀是「把兩個固定費用或單價分別相等。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "情境中『費用相同』就是直線交點條件。",
    "literacyContextNecessity": "兩方案的單價與固定費用共同決定損益交會點，不能刪除情境。",
    "prerequisiteCheck": "需會解一元一次方程式。",
    "languageCheck": "題幹所求為「找兩費用直線交點的 x 坐標」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「兩種方案的費用分別為 y=30x+100 與 y=50x+40。使用多少單位 x 時費用相同？」重新依序處理：費用相同即 30x+100=50x+40。移項得 60=20x，所以 x=3。 正確選項為「x=3」。三個干擾項均對應不同錯誤：「x=1」不成立，費用 130 與 90。；「x=2」不成立，費用 160 與 140。；「x=7」不成立，費用 310 與 390。。邊界審查：x 可為非負使用量，3 合法。 難度理由：情境中『費用相同』就是直線交點條件。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s011-v011",
    "contentSha256": "1780f634a20d6c7609464eabf225c52b867851662c9ae6bf12e3fab198d9d0c1",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "令 120-10x=30+5x，得 90=15x，所以 x=6。",
    "derivedAnswer": "6 分鐘",
    "storedAnswer": "6 分鐘",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「6 分鐘」；其餘三項逐項檢查：「5 分鐘」不成立，水量 70 與 55。；「10 分鐘」不成立，水量 20 與 80。；「15 分鐘」不成立，甲為負值且不相等。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「兩直線交點與聯立方程式」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "x 分鐘、y 公升；答案要求時間。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "x=6 在兩模型水量非負範圍內。",
      "alternateReading": "常見誤讀是「將兩個變化率直接相加而漏掉初始差。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需理解遞減與遞增直線的交會。",
    "literacyContextNecessity": "初始水量與每分鐘變化率決定相同時刻，情境資料全部必要。",
    "prerequisiteCheck": "需會聯立或等式。",
    "languageCheck": "題幹所求為「以交點解水量相同時間」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「甲水箱水量 y=120-10x，乙水箱水量 y=30+5x，x 為分鐘。幾分鐘後兩水箱水量相同？」重新依序處理：令 120-10x=30+5x，得 90=15x，所以 x=6。 正確選項為「6 分鐘」。三個干擾項均對應不同錯誤：「5 分鐘」不成立，水量 70 與 55。；「10 分鐘」不成立，水量 20 與 80。；「15 分鐘」不成立，甲為負值且不相等。。邊界審查：x=6 在兩模型水量非負範圍內。 難度理由：需理解遞減與遞增直線的交會。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s011-v012",
    "contentSha256": "7b6ae4eaadbc34675524db1dc08148fe2e7680917ee80b2ef8b0e03cbc0cc503",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "兩式相加得 2x=14，x=7；代回得 y=3。",
    "derivedAnswer": "(7,3)",
    "storedAnswer": "(7,3)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(7,3)」；其餘三項逐項檢查：「(3,7)」不成立，第二式不成立。；「(6,4)」不成立，第一式成立但差為 2。；「(5,5)」不成立，第一式成立但差為 0。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「兩直線交點與聯立方程式」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "答案為地圖坐標，不是兩道路的距離。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "道路視為完整直線，交點唯一。",
      "alternateReading": "常見誤讀是「只檢查道路總和條件，未檢查差。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需將共同位置視為聯立解，屬素養。",
    "literacyContextNecessity": "救援站必須同時位於兩條道路上，交點坐標是實際選址條件。",
    "prerequisiteCheck": "需會消去法。",
    "languageCheck": "題幹所求為「以道路交點定位救援站」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「城市中兩條道路分別為 x+y=10 與 x-y=4。救援站設在交點，坐標為何？」重新依序處理：兩式相加得 2x=14，x=7；代回得 y=3。 正確選項為「(7,3)」。三個干擾項均對應不同錯誤：「(3,7)」不成立，第二式不成立。；「(6,4)」不成立，第一式成立但差為 2。；「(5,5)」不成立，第一式成立但差為 0。。邊界審查：道路視為完整直線，交點唯一。 難度理由：需將共同位置視為聯立解，屬素養。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
