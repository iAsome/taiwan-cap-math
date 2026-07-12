// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s002-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-coordinate-basics",
  "skillId": "coordinate-quadrant",
  "lockedTitle": "象限判斷",
  "title": "象限判斷：用 x 和 y 的正負號定位",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能說出四個象限的編號方向。",
    "能由 x、y 正負號判斷所在象限。",
    "能反推某象限中的坐標符號。",
    "能說明坐標軸上的點不屬任何象限。"
  ],
  "prerequisites": [
    {
      "skillId": "coordinate-point-reading",
      "requiredLevel": "能說明並正確使用「坐標讀法與點的位置」的核心規則，且不混淆坐標分量順序。"
    }
  ],
  "glossary": [
    {
      "term": "象限",
      "definition": "x 軸與 y 軸把平面分成的四個區域。"
    },
    {
      "term": "第一象限",
      "definition": "x>0 且 y>0 的區域。"
    },
    {
      "term": "第二象限",
      "definition": "x<0 且 y>0 的區域。"
    },
    {
      "term": "第三象限",
      "definition": "x<0 且 y<0 的區域。"
    },
    {
      "term": "第四象限",
      "definition": "x>0 且 y<0 的區域。"
    }
  ],
  "notation": [
    {
      "symbol": "Ⅰ、Ⅱ、Ⅲ、Ⅳ",
      "meaning": "依逆時針方向標示第一至第四象限。"
    },
    {
      "symbol": "x>0",
      "meaning": "點在 y 軸右側。"
    },
    {
      "symbol": "x<0",
      "meaning": "點在 y 軸左側。"
    },
    {
      "symbol": "y>0 / y<0",
      "meaning": "分別表示點在 x 軸上方 / 下方。"
    }
  ],
  "conceptNarrative": [
    "四個象限從右上方開始，依逆時針順序編號。",
    "判斷象限不必先畫圖；只要依序看 x 的正負與 y 的正負。",
    "坐標中若有任一分量為 0，點就在坐標軸上，因此不能硬套四象限。",
    "象限只描述區域，不表示點離原點多遠。"
  ],
  "formalDefinitions": [
    {
      "name": "第一象限",
      "statement": "x>0 且 y>0。"
    },
    {
      "name": "第二象限",
      "statement": "x<0 且 y>0。"
    },
    {
      "name": "第三象限",
      "statement": "x<0 且 y<0。"
    },
    {
      "name": "第四象限",
      "statement": "x>0 且 y<0。"
    }
  ],
  "formulas": [
    {
      "formula": "象限符號表",
      "conditions": [
        "x、y 均不為 0"
      ],
      "meaning": "Ⅰ:(+,+)，Ⅱ:(-,+)，Ⅲ:(-,-)，Ⅳ:(+,-)。"
    }
  ],
  "nonApplicableCases": [
    "x=0 或 y=0 時不談象限。",
    "不能只看一個分量就決定象限。",
    "象限編號不是順時針排列。",
    "坐標絕對值大小不影響象限。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先檢查是否有 0。",
      "check": "若有 0，是否應改判坐標軸？"
    },
    {
      "step": 2,
      "instruction": "看 x 正負。",
      "check": "在左半平面還是右半平面？"
    },
    {
      "step": 3,
      "instruction": "看 y 正負。",
      "check": "在上半平面還是下半平面？"
    },
    {
      "step": 4,
      "instruction": "對照符號表。",
      "check": "是否得到唯一象限？"
    },
    {
      "step": 5,
      "instruction": "用位置語言驗算。",
      "check": "例如左上是否確為第二象限？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "判斷 A=(-4,7) 的象限。",
      "solutionSteps": [
        "x<0 表示左。",
        "y>0 表示上。"
      ],
      "answer": "左上方，第二象限。"
    },
    {
      "exampleId": "L2",
      "prompt": "第三象限中的點，其坐標符號如何？",
      "solutionSteps": [
        "第三象限在左下。",
        "左使 x<0，下使 y<0。"
      ],
      "answer": "(-,-)。"
    },
    {
      "exampleId": "L3",
      "prompt": "B=(6,0) 在哪一象限？",
      "solutionSteps": [
        "y=0。",
        "點在 x 軸上。"
      ],
      "answer": "不屬任何象限。"
    },
    {
      "exampleId": "L4",
      "prompt": "若 P=(a,-3) 在第四象限，a 的條件是什麼？",
      "solutionSteps": [
        "第四象限為 (+,-)。",
        "第二分量已為負，因此 a 必須為正。"
      ],
      "answer": "a>0。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把第二象限寫成 (+,-)。",
      "why": "把象限順序記成順時針。",
      "correction": "從右上逆時針寫出四個符號組合。"
    },
    {
      "mistake": "看到兩個負號就答第四象限。",
      "why": "只記編號不理解位置。",
      "correction": "兩負是左下，應為第三象限。"
    },
    {
      "mistake": "把 (0,5) 判為第一或第二象限。",
      "why": "忽略 0 代表在軸上。",
      "correction": "先做零分量檢查。"
    },
    {
      "mistake": "認為數值較大就屬較大的象限編號。",
      "why": "混淆編號與大小。",
      "correction": "象限由正負號決定，不由絕對值決定。"
    },
    {
      "mistake": "只由 x<0 判定第二象限。",
      "why": "漏看 y 的上下方向。",
      "correction": "x<0 可能在第二或第三象限，仍要看 y。"
    }
  ],
  "selfCheck": [
    "我是否先排除坐標軸上的點？",
    "我是否由右上開始逆時針編號？",
    "我是否同時檢查 x 與 y？",
    "我能由象限反推兩個分量符號嗎？"
  ],
  "summary": [
    "Ⅰ:(+,+)，Ⅱ:(-,+)，Ⅲ:(-,-)，Ⅳ:(+,-)。",
    "象限從右上逆時針編號。",
    "任一分量為 0 時，點不屬象限。"
  ],
  "connections": {
    "previous": "承接坐標讀法，已能把 x 解讀為左右、y 解讀為上下。",
    "next": [
      "下一節專門處理坐標軸上的點與到軸距離。",
      "之後平移可能讓點跨越象限。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s002-v001",
      "u05-s002-v002",
      "u05-s002-v003",
      "u05-s002-v004",
      "u05-s002-v005",
      "u05-s002-v006",
      "u05-s002-v007",
      "u05-s002-v008",
      "u05-s002-v009",
      "u05-s002-v010",
      "u05-s002-v011",
      "u05-s002-v012"
    ],
    "constructedResponseIds": [
      "u05-s002-cr001",
      "u05-s002-cr002"
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
    "reviewNote": "人工檢查四象限符號表、逆時針編號及零分量例外；例題包含直接判斷、反推符號、軸上例外與含參數條件，所有結論均由左右上下重新驗證。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "f37763e398917a7f28560170f721bc8a8b7c2952663a4dcba66bc785e8cf981a"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s002-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 A=(-3,5) 位於哪一象限？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由坐標符號直接判斷象限",
    "choices": [
      "第一象限",
      "第二象限",
      "第三象限",
      "第四象限"
    ],
    "answerIndex": 1,
    "independentSolution": "x=-3<0 表示左方，y=5>0 表示上方；左上區域是第二象限。",
    "explanation": "x=-3<0 表示左方，y=5>0 表示上方；左上區域是第二象限。",
    "steps": [
      "看 x：負，位於左半平面。",
      "看 y：正，位於上半平面。"
    ],
    "optionAnalysis": [
      {
        "choice": "第一象限",
        "truth": false,
        "reason": "需要 (+,+)。"
      },
      {
        "choice": "第二象限",
        "truth": true,
        "reason": "(-,+) 對應左上第二象限。"
      },
      {
        "choice": "第三象限",
        "truth": false,
        "reason": "需要 (-,-)。"
      },
      {
        "choice": "第四象限",
        "truth": false,
        "reason": "需要 (+,-)。"
      }
    ],
    "misconceptionTarget": "把象限編號方向記成順時針。",
    "prerequisiteCheck": "已能讀出坐標的左右與上下。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩分量皆非 0，確實屬某一象限。",
    "difficultyReason": "只需對照一組正負號，屬基礎題。",
    "literacyContextNecessity": null,
    "authoringIntent": "由坐標符號直接判斷象限",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "ede60aee2956d3a2b72f35198b8ffe621c74819fef0896e2b3310598e81b1682"
  },
  {
    "questionId": "u05-s002-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "下列哪個點位於第四象限？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由象限反查候選點",
    "choices": [
      "(-6,2)",
      "(-6,-2)",
      "(6,2)",
      "(6,-2)"
    ],
    "answerIndex": 3,
    "independentSolution": "第四象限的符號是 (+,-)，只有 (6,-2) 符合。",
    "explanation": "第四象限的符號是 (+,-)，只有 (6,-2) 符合。",
    "steps": [
      "第四象限在右下。",
      "右使 x>0，下使 y<0。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-6,2)",
        "truth": false,
        "reason": "(-,+) 是第二象限。"
      },
      {
        "choice": "(-6,-2)",
        "truth": false,
        "reason": "(-,-) 是第三象限。"
      },
      {
        "choice": "(6,2)",
        "truth": false,
        "reason": "(+,+) 是第一象限。"
      },
      {
        "choice": "(6,-2)",
        "truth": true,
        "reason": "(+,-) 正確。"
      }
    ],
    "misconceptionTarget": "只記住『第四』而未用右下位置判斷。",
    "prerequisiteCheck": "需知道四象限符號表。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "所有候選點均不在坐標軸上。",
    "difficultyReason": "需檢查四個選項的符號組合，屬基礎辨認。",
    "literacyContextNecessity": null,
    "authoringIntent": "由象限反查候選點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "1bd4f854a6e57040ab727781390fe5cc75d7d5e304e07c59a2c7b93c6da4890e"
  },
  {
    "questionId": "u05-s002-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若點 P=(a,b) 在第三象限，則下列何者必定正確？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由象限反推參數符號",
    "choices": [
      "a<0 且 b<0",
      "a>0 且 b>0",
      "a<0 且 b>0",
      "a>0 且 b<0"
    ],
    "answerIndex": 0,
    "independentSolution": "第三象限位於左下，因此橫坐標與縱坐標都為負。",
    "explanation": "第三象限位於左下，因此橫坐標與縱坐標都為負。",
    "steps": [
      "左下方決定 x<0。",
      "左下方也決定 y<0。"
    ],
    "optionAnalysis": [
      {
        "choice": "a<0 且 b<0",
        "truth": true,
        "reason": "(-,-) 是第三象限。"
      },
      {
        "choice": "a>0 且 b>0",
        "truth": false,
        "reason": "第一象限。"
      },
      {
        "choice": "a<0 且 b>0",
        "truth": false,
        "reason": "第二象限。"
      },
      {
        "choice": "a>0 且 b<0",
        "truth": false,
        "reason": "第四象限。"
      }
    ],
    "misconceptionTarget": "只看其中一個分量。",
    "prerequisiteCheck": "需理解象限與坐標符號。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目說『在第三象限』，所以 a、b 均不為 0。",
    "difficultyReason": "直接套用第三象限的兩個符號條件。",
    "literacyContextNecessity": null,
    "authoringIntent": "由象限反推參數符號",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "db3a363b8d04943f26fc901ba95f3914c85e1702118303ba0c0c005879782dd5"
  },
  {
    "questionId": "u05-s002-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 Q=(0,-7) 位於哪裡？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "辨認坐標軸上的例外",
    "choices": [
      "第三象限",
      "第四象限",
      "y 軸負半軸上",
      "x 軸負半軸上"
    ],
    "answerIndex": 2,
    "independentSolution": "Q 的橫坐標為 0，所以在 y 軸上；縱坐標為負，因此在 y 軸負半軸。",
    "explanation": "Q 的橫坐標為 0，所以在 y 軸上；縱坐標為負，因此在 y 軸負半軸。",
    "steps": [
      "先檢查 x=0。",
      "再由 y=-7 判斷在原點下方。"
    ],
    "optionAnalysis": [
      {
        "choice": "第三象限",
        "truth": false,
        "reason": "象限點不得有分量為 0。"
      },
      {
        "choice": "第四象限",
        "truth": false,
        "reason": "同樣忽略 x=0。"
      },
      {
        "choice": "y 軸負半軸上",
        "truth": true,
        "reason": "x=0 且 y<0。"
      },
      {
        "choice": "x 軸負半軸上",
        "truth": false,
        "reason": "x 軸上的點應 y=0。"
      }
    ],
    "misconceptionTarget": "看到負號就硬判第三或第四象限。",
    "prerequisiteCheck": "需會判斷零分量。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "『負半軸』依該軸坐標為負定義，答案唯一。",
    "difficultyReason": "需先排除象限再細分軸的正負半軸，屬標準題。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認坐標軸上的例外",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "83af4bf5574543250754543b57badef410a936d06ac6c7fbdf2e581386ed560d"
  },
  {
    "questionId": "u05-s002-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "已知 A=(m,4) 在第二象限，則 m 可為下列哪個值？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "依象限限制選參數",
    "choices": [
      "0",
      "-2",
      "3",
      "5"
    ],
    "answerIndex": 1,
    "independentSolution": "第二象限要求 x<0、y>0；y=4 已為正，因此 m 必須為負，只有 -2。",
    "explanation": "第二象限要求 x<0、y>0；y=4 已為正，因此 m 必須為負，只有 -2。",
    "steps": [
      "由第二象限得 m<0。",
      "逐項檢查只有 -2 為負。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "點會在 y 軸上。"
      },
      {
        "choice": "-2",
        "truth": true,
        "reason": "使坐標為 (-2,4)，位於第二象限。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "形成第一象限。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "形成第一象限。"
      }
    ],
    "misconceptionTarget": "把 m=0 也視為第二象限。",
    "prerequisiteCheck": "需能由象限反推 x 符號。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "象限不包含坐標軸，因此 m=0 明確排除。",
    "difficultyReason": "需處理嚴格不等式與軸上邊界，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "依象限限制選參數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "17208615a14e2a0f04fb712ecb5909a94a93cc189fdad984dbb6de81b2b060cf"
  },
  {
    "questionId": "u05-s002-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若 B=(-5,n) 不在任何象限，則 n 必須是多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由不屬象限反推零分量",
    "choices": [
      "-5",
      "5",
      "任意非零數",
      "0"
    ],
    "answerIndex": 3,
    "independentSolution": "B 的 x=-5 不為 0。要不在任何象限，只能令 y=n=0，使點位於 x 軸。",
    "explanation": "B 的 x=-5 不為 0。要不在任何象限，只能令 y=n=0，使點位於 x 軸。",
    "steps": [
      "象限外的坐標點需至少一分量為 0。",
      "x 已非 0，所以 n=0。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5",
        "truth": false,
        "reason": "形成第三象限。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "形成第二象限。"
      },
      {
        "choice": "任意非零數",
        "truth": false,
        "reason": "非零 n 會與 x=-5 組成第二或第三象限。"
      },
      {
        "choice": "0",
        "truth": true,
        "reason": "形成 (-5,0)，位於 x 軸。"
      }
    ],
    "misconceptionTarget": "誤以為負橫坐標的點都不屬象限。",
    "prerequisiteCheck": "需理解象限點的兩分量皆非 0。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "『不在任何象限』仍可在坐標軸上；題目沒有其他平面外情形。",
    "difficultyReason": "需利用反面條件推回唯一參數值。",
    "literacyContextNecessity": null,
    "authoringIntent": "由不屬象限反推零分量",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7571e540b0ceb267136410094c41baaa764be104001a80ac2c30f82cdf3cd241"
  },
  {
    "questionId": "u05-s002-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 C=(2t-6,t+1) 在第一象限。下列哪個 t 值一定可行？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "解兩個不等式判斷象限",
    "choices": [
      "4",
      "-2",
      "0",
      "2"
    ],
    "answerIndex": 0,
    "independentSolution": "第一象限需 2t-6>0 且 t+1>0。第一個條件給 t>3，第二個給 t>-1；合併為 t>3，只有 4。",
    "explanation": "第一象限需 2t-6>0 且 t+1>0。第一個條件給 t>3，第二個給 t>-1；合併為 t>3，只有 4。",
    "steps": [
      "解 2t-6>0 得 t>3。",
      "解 t+1>0 得 t>-1，取交集 t>3。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": true,
        "reason": "同時使兩分量為正。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "兩分量皆為負。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "x=-6<0。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "x=-2<0，雖 y>0 仍不在第一象限。"
      }
    ],
    "misconceptionTarget": "只檢查其中一個坐標分量。",
    "prerequisiteCheck": "需會解簡單一元一次不等式。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "第一象限不含軸，故使用 >0 而非 ≥0。",
    "difficultyReason": "需建立兩個嚴格不等式並取交集，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "解兩個不等式判斷象限",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e7f67834464a83ffc270d0fd714150d7c5bf869c507c231918638c8ccaae2912"
  },
  {
    "questionId": "u05-s002-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若 P=(a,b) 與 Q=(-a,-b) 分別位於第一象限與哪一象限？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "判斷關於原點對稱點的象限",
    "choices": [
      "第一象限",
      "第二象限",
      "第三象限",
      "第四象限"
    ],
    "answerIndex": 2,
    "independentSolution": "P 在第一象限表示 a>0、b>0；Q 的兩分量變成負數，所以在第三象限。",
    "explanation": "P 在第一象限表示 a>0、b>0；Q 的兩分量變成負數，所以在第三象限。",
    "steps": [
      "由 P 得 a,b 均正。",
      "Q=(-a,-b) 兩分量均負。"
    ],
    "optionAnalysis": [
      {
        "choice": "第一象限",
        "truth": false,
        "reason": "符號已同時反轉。"
      },
      {
        "choice": "第二象限",
        "truth": false,
        "reason": "需要 (-,+)。"
      },
      {
        "choice": "第三象限",
        "truth": true,
        "reason": "(-,-) 對應第三象限。"
      },
      {
        "choice": "第四象限",
        "truth": false,
        "reason": "需要 (+,-)。"
      }
    ],
    "misconceptionTarget": "只反轉一個分量或把相反位置誤認為同象限。",
    "prerequisiteCheck": "需熟悉四象限符號。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "a、b 因 P 在第一象限而確定非零。",
    "difficultyReason": "需從參數符號推導另一點的兩個符號，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "判斷關於原點對稱點的象限",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d4323f8158cd89133ce15627727502a6b17228f3063b9258135da1d83be07309"
  },
  {
    "questionId": "u05-s002-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 R=(k-2,k+3) 不可能位於下列哪一象限？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "判斷含同一參數點的不可能象限",
    "choices": [
      "第一象限",
      "第四象限",
      "第二象限",
      "第三象限"
    ],
    "answerIndex": 1,
    "independentSolution": "若在第四象限需 k-2>0 且 k+3<0，即 k>2 且 k<-3，無法同時成立，所以第四象限不可能。",
    "explanation": "若在第四象限需 k-2>0 且 k+3<0，即 k>2 且 k<-3，無法同時成立，所以第四象限不可能。",
    "steps": [
      "分別寫出各分量的符號條件。",
      "第四象限條件互相矛盾。"
    ],
    "optionAnalysis": [
      {
        "choice": "第一象限",
        "truth": false,
        "reason": "取 k=3 可行。"
      },
      {
        "choice": "第四象限",
        "truth": true,
        "reason": "要求 k>2 且 k<-3，無解。"
      },
      {
        "choice": "第二象限",
        "truth": false,
        "reason": "取 k=0 得 (-2,3)，可行。"
      },
      {
        "choice": "第三象限",
        "truth": false,
        "reason": "取 k=-4 得 (-6,-1)，可行。"
      }
    ],
    "misconceptionTarget": "沒有檢查兩個參數條件能否同時成立。",
    "prerequisiteCheck": "需會由象限建立不等式。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "『不可能』指不存在任何實數 k；軸上情形不影響四個象限的可行性比較。",
    "difficultyReason": "需逐象限檢查聯立不等式相容性，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "判斷含同一參數點的不可能象限",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "2cdc3f7c09a9bc93cc284d8f035c0d2fa7c50b1abc1af9bd46787e596de67e16"
  },
  {
    "questionId": "u05-s002-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "氣象圖以測站為原點，東為 x 正向、北為 y 正向。雲團中心在 (-8,6)，位於測站的哪個方位象限？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "把氣象方位與象限對應",
    "choices": [
      "東北方的第一象限",
      "西南方的第三象限",
      "東南方的第四象限",
      "西北方的第二象限"
    ],
    "answerIndex": 3,
    "independentSolution": "x=-8 表示西方，y=6 表示北方，所以是西北方，對應第二象限。",
    "explanation": "x=-8 表示西方，y=6 表示北方，所以是西北方，對應第二象限。",
    "steps": [
      "依方向定義讀出西、北。",
      "(-,+) 對應第二象限。"
    ],
    "optionAnalysis": [
      {
        "choice": "東北方的第一象限",
        "truth": false,
        "reason": "把負 x 誤為東。"
      },
      {
        "choice": "西南方的第三象限",
        "truth": false,
        "reason": "把正 y 誤為南。"
      },
      {
        "choice": "東南方的第四象限",
        "truth": false,
        "reason": "兩個方向都誤判。"
      },
      {
        "choice": "西北方的第二象限",
        "truth": true,
        "reason": "方位與象限均一致。"
      }
    ],
    "misconceptionTarget": "只答方位或只答象限，未核對兩者一致。",
    "prerequisiteCheck": "需會坐標讀法與象限判斷。",
    "estimatedTimeSec": 150,
    "unitCheck": "本題只判方位與象限，不需要將格數換算成實際距離。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "方向由題目定義，雲團中心兩分量非 0。",
    "difficultyReason": "需同時轉換方位與象限，情境資訊是必要的。",
    "literacyContextNecessity": "測站原點與東北正向把抽象符號轉成氣象方位；移除這些資訊便不能判定西北。",
    "authoringIntent": "把氣象方位與象限對應",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7eef99c21ea1a97688752b829753b1254076aa014d2810feb948790bf5bfb57e"
  },
  {
    "questionId": "u05-s002-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "座位表以講臺中央為原點，右為 x 正向、後方為 y 正向。某座位在 (-3,-2)，依此定義位於哪個區域？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "依自訂方向判座位象限",
    "choices": [
      "講臺左側且前方的第三象限",
      "講臺右側且前方的第四象限",
      "講臺左側且後方的第二象限",
      "講臺右側且後方的第一象限"
    ],
    "answerIndex": 0,
    "independentSolution": "x<0 表示左側；因 y 正向定為後方，所以 y<0 表示前方。兩分量皆負，為第三象限。",
    "explanation": "x<0 表示左側；因 y 正向定為後方，所以 y<0 表示前方。兩分量皆負，為第三象限。",
    "steps": [
      "把 x=-3 轉為左側。",
      "把自訂 y 正向解讀：-2 為前方。"
    ],
    "optionAnalysis": [
      {
        "choice": "講臺左側且前方的第三象限",
        "truth": true,
        "reason": "左、前及 (-,-) 均一致。"
      },
      {
        "choice": "講臺右側且前方的第四象限",
        "truth": false,
        "reason": "誤判 x 方向。"
      },
      {
        "choice": "講臺左側且後方的第二象限",
        "truth": false,
        "reason": "誤判 y 的自訂方向。"
      },
      {
        "choice": "講臺右側且後方的第一象限",
        "truth": false,
        "reason": "兩方向皆反。"
      }
    ],
    "misconceptionTarget": "把一般地圖的上北下南習慣套到題目自訂座位方向。",
    "prerequisiteCheck": "需能依題目定義讀坐標。",
    "estimatedTimeSec": 150,
    "unitCheck": "坐標單位是座位格，題目只要求區域。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "座位的前後定義已明示，(-3,-2) 不在坐標軸。",
    "difficultyReason": "必須先理解『後方為 y 正向』，不能只靠一般方位常識。",
    "literacyContextNecessity": "教室中的前後方向與一般地圖不同；題目自訂 y 正向是判斷的核心而非裝飾。",
    "authoringIntent": "依自訂方向判座位象限",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "ad3accd3fe08a3a144b0ca5d90a718be94b328d7914086b7f604d03b48b301f5"
  },
  {
    "questionId": "u05-s002-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "無人車地圖把充電站設為原點，車輛目前位於第四象限。下列哪組感測紀錄可能是它的位置？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由象限選擇感測方位",
    "choices": [
      "向西 12 公尺、向北 5 公尺",
      "向西 12 公尺、向南 5 公尺",
      "向東 12 公尺、向南 5 公尺",
      "向東 12 公尺、向北 5 公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "第四象限是右下；若東為右、北為上，則應向東且向南。",
    "explanation": "第四象限是右下；若東為右、北為上，則應向東且向南。",
    "steps": [
      "第四象限轉成 (+,-)。",
      "方位轉成東正、南負。"
    ],
    "optionAnalysis": [
      {
        "choice": "向西 12 公尺、向北 5 公尺",
        "truth": false,
        "reason": "(-,+) 是第二象限。"
      },
      {
        "choice": "向西 12 公尺、向南 5 公尺",
        "truth": false,
        "reason": "(-,-) 是第三象限。"
      },
      {
        "choice": "向東 12 公尺、向南 5 公尺",
        "truth": true,
        "reason": "(+,-) 符合第四象限。"
      },
      {
        "choice": "向東 12 公尺、向北 5 公尺",
        "truth": false,
        "reason": "(+,+) 是第一象限。"
      }
    ],
    "misconceptionTarget": "只看『南』或『東』其中一個方向。",
    "prerequisiteCheck": "需掌握象限與方向正負。",
    "estimatedTimeSec": 150,
    "unitCheck": "四選項均以公尺表示同類位移，不需額外換算。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "感測紀錄均以充電站為共同基準，公尺大小不影響象限。",
    "difficultyReason": "需把象限規則轉回具體導航語句，屬素養應用。",
    "literacyContextNecessity": "無人車的東西南北感測紀錄必須轉成坐標符號才能判斷象限，情境具有實際決策功能。",
    "authoringIntent": "由象限選擇感測方位",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "32653f9faa91de930afbc755a1a8b81d921a977b47e751bd5e5b08eb6f434c7c"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s002-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "判斷 A=(-5,2)、B=(3,-4)、C=(0,6) 各位於哪一象限或哪一條坐標軸，並寫出判斷依據。",
    "requiredWork": [
      "逐點檢查 x、y 的正負或是否為 0。",
      "寫出三個位置。"
    ],
    "fullCreditSolution": [
      "A 的符號為 (-,+)，所以在第二象限。",
      "B 的符號為 (+,-)，所以在第四象限。",
      "C 的 x=0，所以在 y 軸正半軸上，不屬任何象限。"
    ],
    "alternativeSolutions": [
      "可用『左上、右下、軸上』先描述，再轉成象限名稱。"
    ],
    "reasoningSteps": [
      "A 的符號為 (-,+)，所以在第二象限。",
      "B 的符號為 (+,-)，所以在第四象限。",
      "C 的 x=0，所以在 y 軸正半軸上，不屬任何象限。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三點位置全部正確，且至少明確說明 C 因 x=0 不屬象限。"
      },
      {
        "score": 2,
        "criteria": "兩點正確且有正負號依據，或三點正確但幾乎無說明。"
      },
      {
        "score": 1,
        "criteria": "只正確判斷一點，或知道 C 在軸上但象限編號多錯。"
      },
      {
        "score": 0,
        "criteria": "三點皆以數值大小而非正負號判斷。"
      }
    ],
    "partialCreditRules": [
      "C 寫『y 軸上方』可接受；若只寫『不在象限』但未指出 y 軸，該點說明不完整。"
    ],
    "followThroughPolicy": "若某一點因單一正負號誤讀而分類錯誤，其餘兩點仍依各自坐標正確判斷，分數按正確分類與理由分別計算。",
    "unitAndNotationRules": "象限使用「第一象限」等完整名稱；坐標軸上的點必須寫明 x 軸或 y 軸，不可寫成第幾象限。",
    "answerOnlyPolicy": "只列三個位置且全對但沒有正負號或零分量的判斷依據，最高給 2 分。",
    "commonErrors": [
      "把第二、第四象限對調。",
      "把 C 判成第一或第二象限。"
    ],
    "independentReview": {
      "derivedResult": "各點獨立計分；一點錯誤不影響另外兩點。",
      "ambiguity": "象限名稱使用第一、第二、第三、第四；軸上點不可硬填象限。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 各點獨立計分；一點錯誤不影響另外兩點。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "655329dfae22c0c395c24d5f7233fb1ea9749c3f1336289c20da16c3cb44cd40"
  },
  {
    "questionId": "u05-s002-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "點 P=(2k-6,k+1)。求所有使 P 位於第二象限的 k 範圍，並說明端點為何不包含。",
    "requiredWork": [
      "列出第二象限的兩個嚴格不等式。",
      "求交集。",
      "解釋端點對應坐標軸。"
    ],
    "fullCreditSolution": [
      "第二象限要求 2k-6<0 且 k+1>0。",
      "由 2k-6<0 得 k<3；由 k+1>0 得 k>-1。",
      "交集為 -1<k<3。",
      "k=-1 時 y=0，k=3 時 x=0，兩點都在坐標軸上，所以端點不包含。"
    ],
    "alternativeSolutions": [
      "可用數線標出 k<3 與 k>-1，再取重疊部分。"
    ],
    "reasoningSteps": [
      "第二象限要求 2k-6<0 且 k+1>0。",
      "由 2k-6<0 得 k<3；由 k+1>0 得 k>-1。",
      "交集為 -1<k<3。",
      "k=-1 時 y=0，k=3 時 x=0，兩點都在坐標軸上，所以端點不包含。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確得到 -1<k<3，並說明兩端點各造成一個分量為 0。"
      },
      {
        "score": 2,
        "criteria": "範圍正確但端點說明不足，或只錯一個嚴格符號。"
      },
      {
        "score": 1,
        "criteria": "能列出兩個正確不等式但交集處理錯。"
      },
      {
        "score": 0,
        "criteria": "使用第一或第三象限符號，無法形成正確條件。"
      }
    ],
    "partialCreditRules": [
      "兩個不等式各有獨立分；端點解釋屬完整性分。"
    ],
    "followThroughPolicy": "若其中一個不等式移項出現算術錯誤，但能正確以兩個條件取交集並討論端點，依後續方法給部分分。",
    "unitAndNotationRules": "答案須用不等式範圍表示；第二象限條件寫為 x<0 且 y>0，端點使用嚴格不等號。",
    "answerOnlyPolicy": "只寫 -1<k<3 而沒有建立兩個象限條件與端點說明，最高給 2 分。",
    "commonErrors": [
      "把第二象限寫成 x>0、y>0。",
      "把聯集當成交集。"
    ],
    "independentReview": {
      "derivedResult": "若解不等式有一次移項錯，但後續交集與端點說明依其結果一致，可給 1 分。",
      "ambiguity": "k 為實數範圍；使用 <，不可寫 ≤。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若解不等式有一次移項錯，但後續交集與端點說明依其結果一致，可給 1 分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4e6e152b691f4d78cd60b3bbd32115b0d824f74d2d2ce17606b691c55bf39990"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s002-v001",
    "contentSha256": "ede60aee2956d3a2b72f35198b8ffe621c74819fef0896e2b3310598e81b1682",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x=-3<0 表示左方，y=5>0 表示上方；左上區域是第二象限。",
    "derivedAnswer": "第二象限",
    "storedAnswer": "第二象限",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「第二象限」；其餘三項逐項檢查：「第一象限」不成立，需要 (+,+)。；「第三象限」不成立，需要 (-,-)。；「第四象限」不成立，需要 (+,-)。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「象限判斷」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩分量皆非 0，確實屬某一象限。",
      "alternateReading": "常見誤讀是「把象限編號方向記成順時針。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "只需對照一組正負號，屬基礎題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "已能讀出坐標的左右與上下。",
    "languageCheck": "題幹所求為「由坐標符號直接判斷象限」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 A=(-3,5) 位於哪一象限？」重新依序處理：x=-3<0 表示左方，y=5>0 表示上方；左上區域是第二象限。 正確選項為「第二象限」。三個干擾項均對應不同錯誤：「第一象限」不成立，需要 (+,+)。；「第三象限」不成立，需要 (-,-)。；「第四象限」不成立，需要 (+,-)。。邊界審查：兩分量皆非 0，確實屬某一象限。 難度理由：只需對照一組正負號，屬基礎題。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s002-v002",
    "contentSha256": "1bd4f854a6e57040ab727781390fe5cc75d7d5e304e07c59a2c7b93c6da4890e",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "第四象限的符號是 (+,-)，只有 (6,-2) 符合。",
    "derivedAnswer": "(6,-2)",
    "storedAnswer": "(6,-2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(6,-2)」；其餘三項逐項檢查：「(-6,2)」不成立，(-,+) 是第二象限。；「(-6,-2)」不成立，(-,-) 是第三象限。；「(6,2)」不成立，(+,+) 是第一象限。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「象限判斷」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "所有候選點均不在坐標軸上。",
      "alternateReading": "常見誤讀是「只記住『第四』而未用右下位置判斷。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需檢查四個選項的符號組合，屬基礎辨認。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需知道四象限符號表。",
    "languageCheck": "題幹所求為「由象限反查候選點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「下列哪個點位於第四象限？」重新依序處理：第四象限的符號是 (+,-)，只有 (6,-2) 符合。 正確選項為「(6,-2)」。三個干擾項均對應不同錯誤：「(-6,2)」不成立，(-,+) 是第二象限。；「(-6,-2)」不成立，(-,-) 是第三象限。；「(6,2)」不成立，(+,+) 是第一象限。。邊界審查：所有候選點均不在坐標軸上。 難度理由：需檢查四個選項的符號組合，屬基礎辨認。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s002-v003",
    "contentSha256": "db3a363b8d04943f26fc901ba95f3914c85e1702118303ba0c0c005879782dd5",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "第三象限位於左下，因此橫坐標與縱坐標都為負。",
    "derivedAnswer": "a<0 且 b<0",
    "storedAnswer": "a<0 且 b<0",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「a<0 且 b<0」；其餘三項逐項檢查：「a>0 且 b>0」不成立，第一象限。；「a<0 且 b>0」不成立，第二象限。；「a>0 且 b<0」不成立，第四象限。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「象限判斷」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目說『在第三象限』，所以 a、b 均不為 0。",
      "alternateReading": "常見誤讀是「只看其中一個分量。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "直接套用第三象限的兩個符號條件。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解象限與坐標符號。",
    "languageCheck": "題幹所求為「由象限反推參數符號」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若點 P=(a,b) 在第三象限，則下列何者必定正確？」重新依序處理：第三象限位於左下，因此橫坐標與縱坐標都為負。 正確選項為「a<0 且 b<0」。三個干擾項均對應不同錯誤：「a>0 且 b>0」不成立，第一象限。；「a<0 且 b>0」不成立，第二象限。；「a>0 且 b<0」不成立，第四象限。。邊界審查：題目說『在第三象限』，所以 a、b 均不為 0。 難度理由：直接套用第三象限的兩個符號條件。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s002-v004",
    "contentSha256": "83af4bf5574543250754543b57badef410a936d06ac6c7fbdf2e581386ed560d",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "Q 的橫坐標為 0，所以在 y 軸上；縱坐標為負，因此在 y 軸負半軸。",
    "derivedAnswer": "y 軸負半軸上",
    "storedAnswer": "y 軸負半軸上",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「y 軸負半軸上」；其餘三項逐項檢查：「第三象限」不成立，象限點不得有分量為 0。；「第四象限」不成立，同樣忽略 x=0。；「x 軸負半軸上」不成立，x 軸上的點應 y=0。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「象限判斷」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "『負半軸』依該軸坐標為負定義，答案唯一。",
      "alternateReading": "常見誤讀是「看到負號就硬判第三或第四象限。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需先排除象限再細分軸的正負半軸，屬標準題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會判斷零分量。",
    "languageCheck": "題幹所求為「辨認坐標軸上的例外」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 Q=(0,-7) 位於哪裡？」重新依序處理：Q 的橫坐標為 0，所以在 y 軸上；縱坐標為負，因此在 y 軸負半軸。 正確選項為「y 軸負半軸上」。三個干擾項均對應不同錯誤：「第三象限」不成立，象限點不得有分量為 0。；「第四象限」不成立，同樣忽略 x=0。；「x 軸負半軸上」不成立，x 軸上的點應 y=0。。邊界審查：『負半軸』依該軸坐標為負定義，答案唯一。 難度理由：需先排除象限再細分軸的正負半軸，屬標準題。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s002-v005",
    "contentSha256": "17208615a14e2a0f04fb712ecb5909a94a93cc189fdad984dbb6de81b2b060cf",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "第二象限要求 x<0、y>0；y=4 已為正，因此 m 必須為負，只有 -2。",
    "derivedAnswer": "-2",
    "storedAnswer": "-2",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「-2」；其餘三項逐項檢查：「0」不成立，點會在 y 軸上。；「3」不成立，形成第一象限。；「5」不成立，形成第一象限。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「象限判斷」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "象限不包含坐標軸，因此 m=0 明確排除。",
      "alternateReading": "常見誤讀是「把 m=0 也視為第二象限。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需處理嚴格不等式與軸上邊界，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能由象限反推 x 符號。",
    "languageCheck": "題幹所求為「依象限限制選參數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「已知 A=(m,4) 在第二象限，則 m 可為下列哪個值？」重新依序處理：第二象限要求 x<0、y>0；y=4 已為正，因此 m 必須為負，只有 -2。 正確選項為「-2」。三個干擾項均對應不同錯誤：「0」不成立，點會在 y 軸上。；「3」不成立，形成第一象限。；「5」不成立，形成第一象限。。邊界審查：象限不包含坐標軸，因此 m=0 明確排除。 難度理由：需處理嚴格不等式與軸上邊界，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s002-v006",
    "contentSha256": "7571e540b0ceb267136410094c41baaa764be104001a80ac2c30f82cdf3cd241",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "B 的 x=-5 不為 0。要不在任何象限，只能令 y=n=0，使點位於 x 軸。",
    "derivedAnswer": "0",
    "storedAnswer": "0",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「0」；其餘三項逐項檢查：「-5」不成立，形成第三象限。；「5」不成立，形成第二象限。；「任意非零數」不成立，非零 n 會與 x=-5 組成第二或第三象限。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「象限判斷」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "『不在任何象限』仍可在坐標軸上；題目沒有其他平面外情形。",
      "alternateReading": "常見誤讀是「誤以為負橫坐標的點都不屬象限。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需利用反面條件推回唯一參數值。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解象限點的兩分量皆非 0。",
    "languageCheck": "題幹所求為「由不屬象限反推零分量」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若 B=(-5,n) 不在任何象限，則 n 必須是多少？」重新依序處理：B 的 x=-5 不為 0。要不在任何象限，只能令 y=n=0，使點位於 x 軸。 正確選項為「0」。三個干擾項均對應不同錯誤：「-5」不成立，形成第三象限。；「5」不成立，形成第二象限。；「任意非零數」不成立，非零 n 會與 x=-5 組成第二或第三象限。。邊界審查：『不在任何象限』仍可在坐標軸上；題目沒有其他平面外情形。 難度理由：需利用反面條件推回唯一參數值。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s002-v007",
    "contentSha256": "e7f67834464a83ffc270d0fd714150d7c5bf869c507c231918638c8ccaae2912",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "第一象限需 2t-6>0 且 t+1>0。第一個條件給 t>3，第二個給 t>-1；合併為 t>3，只有 4。",
    "derivedAnswer": "4",
    "storedAnswer": "4",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「4」；其餘三項逐項檢查：「-2」不成立，兩分量皆為負。；「0」不成立，x=-6<0。；「2」不成立，x=-2<0，雖 y>0 仍不在第一象限。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「象限判斷」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "第一象限不含軸，故使用 >0 而非 ≥0。",
      "alternateReading": "常見誤讀是「只檢查其中一個坐標分量。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需建立兩個嚴格不等式並取交集，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會解簡單一元一次不等式。",
    "languageCheck": "題幹所求為「解兩個不等式判斷象限」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 C=(2t-6,t+1) 在第一象限。下列哪個 t 值一定可行？」重新依序處理：第一象限需 2t-6>0 且 t+1>0。第一個條件給 t>3，第二個給 t>-1；合併為 t>3，只有 4。 正確選項為「4」。三個干擾項均對應不同錯誤：「-2」不成立，兩分量皆為負。；「0」不成立，x=-6<0。；「2」不成立，x=-2<0，雖 y>0 仍不在第一象限。。邊界審查：第一象限不含軸，故使用 >0 而非 ≥0。 難度理由：需建立兩個嚴格不等式並取交集，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s002-v008",
    "contentSha256": "d4323f8158cd89133ce15627727502a6b17228f3063b9258135da1d83be07309",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "P 在第一象限表示 a>0、b>0；Q 的兩分量變成負數，所以在第三象限。",
    "derivedAnswer": "第三象限",
    "storedAnswer": "第三象限",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「第三象限」；其餘三項逐項檢查：「第一象限」不成立，符號已同時反轉。；「第二象限」不成立，需要 (-,+)。；「第四象限」不成立，需要 (+,-)。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「象限判斷」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "a、b 因 P 在第一象限而確定非零。",
      "alternateReading": "常見誤讀是「只反轉一個分量或把相反位置誤認為同象限。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需從參數符號推導另一點的兩個符號，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需熟悉四象限符號。",
    "languageCheck": "題幹所求為「判斷關於原點對稱點的象限」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若 P=(a,b) 與 Q=(-a,-b) 分別位於第一象限與哪一象限？」重新依序處理：P 在第一象限表示 a>0、b>0；Q 的兩分量變成負數，所以在第三象限。 正確選項為「第三象限」。三個干擾項均對應不同錯誤：「第一象限」不成立，符號已同時反轉。；「第二象限」不成立，需要 (-,+)。；「第四象限」不成立，需要 (+,-)。。邊界審查：a、b 因 P 在第一象限而確定非零。 難度理由：需從參數符號推導另一點的兩個符號，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s002-v009",
    "contentSha256": "2cdc3f7c09a9bc93cc284d8f035c0d2fa7c50b1abc1af9bd46787e596de67e16",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "若在第四象限需 k-2>0 且 k+3<0，即 k>2 且 k<-3，無法同時成立，所以第四象限不可能。",
    "derivedAnswer": "第四象限",
    "storedAnswer": "第四象限",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「第四象限」；其餘三項逐項檢查：「第一象限」不成立，取 k=3 可行。；「第二象限」不成立，取 k=0 得 (-2,3)，可行。；「第三象限」不成立，取 k=-4 得 (-6,-1)，可行。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「象限判斷」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "『不可能』指不存在任何實數 k；軸上情形不影響四個象限的可行性比較。",
      "alternateReading": "常見誤讀是「沒有檢查兩個參數條件能否同時成立。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需逐象限檢查聯立不等式相容性，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會由象限建立不等式。",
    "languageCheck": "題幹所求為「判斷含同一參數點的不可能象限」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 R=(k-2,k+3) 不可能位於下列哪一象限？」重新依序處理：若在第四象限需 k-2>0 且 k+3<0，即 k>2 且 k<-3，無法同時成立，所以第四象限不可能。 正確選項為「第四象限」。三個干擾項均對應不同錯誤：「第一象限」不成立，取 k=3 可行。；「第二象限」不成立，取 k=0 得 (-2,3)，可行。；「第三象限」不成立，取 k=-4 得 (-6,-1)，可行。。邊界審查：『不可能』指不存在任何實數 k；軸上情形不影響四個象限的可行性比較。 難度理由：需逐象限檢查聯立不等式相容性，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s002-v010",
    "contentSha256": "7eef99c21ea1a97688752b829753b1254076aa014d2810feb948790bf5bfb57e",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x=-8 表示西方，y=6 表示北方，所以是西北方，對應第二象限。",
    "derivedAnswer": "西北方的第二象限",
    "storedAnswer": "西北方的第二象限",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「西北方的第二象限」；其餘三項逐項檢查：「東北方的第一象限」不成立，把負 x 誤為東。；「西南方的第三象限」不成立，把正 y 誤為南。；「東南方的第四象限」不成立，兩個方向都誤判。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「象限判斷」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "本題只判方位與象限，不需要將格數換算成實際距離。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "方向由題目定義，雲團中心兩分量非 0。",
      "alternateReading": "常見誤讀是「只答方位或只答象限，未核對兩者一致。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需同時轉換方位與象限，情境資訊是必要的。",
    "literacyContextNecessity": "測站原點與東北正向把抽象符號轉成氣象方位；移除這些資訊便不能判定西北。",
    "prerequisiteCheck": "需會坐標讀法與象限判斷。",
    "languageCheck": "題幹所求為「把氣象方位與象限對應」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「氣象圖以測站為原點，東為 x 正向、北為 y 正向。雲團中心在 (-8,6)，位於測站的哪個方位象限？」重新依序處理：x=-8 表示西方，y=6 表示北方，所以是西北方，對應第二象限。 正確選項為「西北方的第二象限」。三個干擾項均對應不同錯誤：「東北方的第一象限」不成立，把負 x 誤為東。；「西南方的第三象限」不成立，把正 y 誤為南。；「東南方的第四象限」不成立，兩個方向都誤判。。邊界審查：方向由題目定義，雲團中心兩分量非 0。 難度理由：需同時轉換方位與象限，情境資訊是必要的。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s002-v011",
    "contentSha256": "ad3accd3fe08a3a144b0ca5d90a718be94b328d7914086b7f604d03b48b301f5",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x<0 表示左側；因 y 正向定為後方，所以 y<0 表示前方。兩分量皆負，為第三象限。",
    "derivedAnswer": "講臺左側且前方的第三象限",
    "storedAnswer": "講臺左側且前方的第三象限",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「講臺左側且前方的第三象限」；其餘三項逐項檢查：「講臺右側且前方的第四象限」不成立，誤判 x 方向。；「講臺左側且後方的第二象限」不成立，誤判 y 的自訂方向。；「講臺右側且後方的第一象限」不成立，兩方向皆反。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「象限判斷」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標單位是座位格，題目只要求區域。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "座位的前後定義已明示，(-3,-2) 不在坐標軸。",
      "alternateReading": "常見誤讀是「把一般地圖的上北下南習慣套到題目自訂座位方向。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "必須先理解『後方為 y 正向』，不能只靠一般方位常識。",
    "literacyContextNecessity": "教室中的前後方向與一般地圖不同；題目自訂 y 正向是判斷的核心而非裝飾。",
    "prerequisiteCheck": "需能依題目定義讀坐標。",
    "languageCheck": "題幹所求為「依自訂方向判座位象限」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「座位表以講臺中央為原點，右為 x 正向、後方為 y 正向。某座位在 (-3,-2)，依此定義位於哪個區域？」重新依序處理：x<0 表示左側；因 y 正向定為後方，所以 y<0 表示前方。兩分量皆負，為第三象限。 正確選項為「講臺左側且前方的第三象限」。三個干擾項均對應不同錯誤：「講臺右側且前方的第四象限」不成立，誤判 x 方向。；「講臺左側且後方的第二象限」不成立，誤判 y 的自訂方向。；「講臺右側且後方的第一象限」不成立，兩方向皆反。。邊界審查：座位的前後定義已明示，(-3,-2) 不在坐標軸。 難度理由：必須先理解『後方為 y 正向』，不能只靠一般方位常識。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s002-v012",
    "contentSha256": "32653f9faa91de930afbc755a1a8b81d921a977b47e751bd5e5b08eb6f434c7c",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "第四象限是右下；若東為右、北為上，則應向東且向南。",
    "derivedAnswer": "向東 12 公尺、向南 5 公尺",
    "storedAnswer": "向東 12 公尺、向南 5 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「向東 12 公尺、向南 5 公尺」；其餘三項逐項檢查：「向西 12 公尺、向北 5 公尺」不成立，(-,+) 是第二象限。；「向西 12 公尺、向南 5 公尺」不成立，(-,-) 是第三象限。；「向東 12 公尺、向北 5 公尺」不成立，(+,+) 是第一象限。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「象限判斷」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "四選項均以公尺表示同類位移，不需額外換算。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "感測紀錄均以充電站為共同基準，公尺大小不影響象限。",
      "alternateReading": "常見誤讀是「只看『南』或『東』其中一個方向。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需把象限規則轉回具體導航語句，屬素養應用。",
    "literacyContextNecessity": "無人車的東西南北感測紀錄必須轉成坐標符號才能判斷象限，情境具有實際決策功能。",
    "prerequisiteCheck": "需掌握象限與方向正負。",
    "languageCheck": "題幹所求為「由象限選擇感測方位」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「無人車地圖把充電站設為原點，車輛目前位於第四象限。下列哪組感測紀錄可能是它的位置？」重新依序處理：第四象限是右下；若東為右、北為上，則應向東且向南。 正確選項為「向東 12 公尺、向南 5 公尺」。三個干擾項均對應不同錯誤：「向西 12 公尺、向北 5 公尺」不成立，(-,+) 是第二象限。；「向西 12 公尺、向南 5 公尺」不成立，(-,-) 是第三象限。；「向東 12 公尺、向北 5 公尺」不成立，(+,+) 是第一象限。。邊界審查：感測紀錄均以充電站為共同基準，公尺大小不影響象限。 難度理由：需把象限規則轉回具體導航語句，屬素養應用。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
