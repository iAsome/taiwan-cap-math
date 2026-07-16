// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s010-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-linear-graph",
  "skillId": "coordinate-intercepts",
  "lockedTitle": "x 截距與 y 截距",
  "title": "x 截距與 y 截距：分清截距值與交點坐標",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能說明 x 截距與 y 截距的意義。",
    "能以 y=0 求 x 截距。",
    "能以 x=0 求 y 截距。",
    "能區分截距值與截距點坐標。",
    "能判斷兩個互不相同的截距點才足以唯一決定直線。"
  ],
  "prerequisites": [
    {
      "skillId": "coordinate-point-on-line",
      "requiredLevel": "能說明並正確使用「判斷點是否在直線上」的核心規則，且不混淆坐標分量順序。"
    }
  ],
  "glossary": [
    {
      "term": "x 截距",
      "definition": "直線與 x 軸交點的橫坐標值。"
    },
    {
      "term": "y 截距",
      "definition": "直線與 y 軸交點的縱坐標值。"
    },
    {
      "term": "x 截距點",
      "definition": "形如 (a,0) 的交點。"
    },
    {
      "term": "y 截距點",
      "definition": "形如 (0,b) 的交點。"
    }
  ],
  "notation": [
    {
      "symbol": "y=0",
      "meaning": "求 x 截距時使用，因 x 軸上的點縱坐標為 0。"
    },
    {
      "symbol": "x=0",
      "meaning": "求 y 截距時使用，因 y 軸上的點橫坐標為 0。"
    },
    {
      "symbol": "(a,0)",
      "meaning": "x 截距點。"
    },
    {
      "symbol": "(0,b)",
      "meaning": "y 截距點。"
    }
  ],
  "conceptNarrative": [
    "截距的規則來自坐標軸上的點。求 x 截距時找直線在 x 軸上的交點，所以令 y=0；求 y 截距時令 x=0。截距是非零分量的數值，截距點則必須寫成完整有序數對。",
    "若一條直線分別與兩坐標軸交於兩個互不相同的點，這兩個截距點就是兩個不同點，足以唯一決定直線。關鍵是『兩個不同點』，不是只因資料名稱中出現兩種截距。",
    "通過原點的非軸直線，其 x 截距與 y 截距都為零，兩個截距點其實同為 (0,0)。這只提供一個不同點，無法判定是哪一條過原點直線，必須再找線上另一個不同點。",
    "水平線與垂直線還要檢查是否平行或重合於坐標軸。設零若產生矛盾，表示沒有該軸截距；若整條直線與軸重合，交點不是唯一，不能硬套一般截距點規則。"
  ],
  "formalDefinitions": [
    {
      "name": "x 截距",
      "statement": "直線與 x 軸交點的 x 坐標。"
    },
    {
      "name": "y 截距",
      "statement": "直線與 y 軸交點的 y 坐標。"
    }
  ],
  "formulas": [
    {
      "formula": "x截距：令 y=0",
      "conditions": [
        "直線確與 x 軸有交點"
      ],
      "meaning": "使用 x 軸上 y=0 的性質。"
    },
    {
      "formula": "y截距：令 x=0",
      "conditions": [
        "直線確與 y 軸有交點"
      ],
      "meaning": "使用 y 軸上 x=0 的性質。"
    }
  ],
  "nonApplicableCases": [
    "垂直線 x=a 沒有唯一 y 截距；若 a=0，整條線與 y 軸重合，交點更不是單一點。",
    "水平線 y=b 沒有唯一 x 截距；若 b=0，整條線與 x 軸重合。",
    "截距值不是有序數對，截距點不可漏寫另一個零分量。",
    "單一截距點不足以唯一決定直線。",
    "通過原點時兩截距點重合，須另找一個不同線上點才可唯一決定直線。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "確認題目要 x 還是 y 截距。",
      "check": "是在求值還是求點？"
    },
    {
      "step": 2,
      "instruction": "對應令另一個變數為 0。",
      "check": "x 截距是否令 y=0？"
    },
    {
      "step": 3,
      "instruction": "解出剩餘變數。",
      "check": "符號與分數是否正確？"
    },
    {
      "step": 4,
      "instruction": "依題意寫成值或點。",
      "check": "是否需要括號與 0？"
    },
    {
      "step": 5,
      "instruction": "代回原式。",
      "check": "交點是否真的在直線與指定軸上？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "2x+3y=12 的 x 截距。",
      "solutionSteps": [
        "令 y=0，得到 2x=12。",
        "解得 x=6，截距點為 (6,0)。",
        "代回確認十二等於右邊，但單一點尚不足以唯一畫直線。"
      ],
      "answer": "x 截距為 6，截距點為 (6,0)。",
      "why": "x 軸上的點縱坐標為零，所以令 y=0 後解出橫坐標六。題目只求一種截距；這個結果確定直線經過 (6,0)，但沒有第二個不同條件時仍有許多直線可通過此點。"
    },
    {
      "exampleId": "L2",
      "prompt": "4x-y=8 的 y 截距點。",
      "solutionSteps": [
        "令 x=0，得到 -y=8。",
        "解得 y=-8，寫成點 (0,-8)。",
        "把點代回原式，左邊為八。"
      ],
      "answer": "(0,-8)。",
      "why": "y 軸上的點橫坐標為零，因此由負 y 等於八得到 y=-8。負號與分量位置都要保留；截距值是負八，題目要求點時才寫成 (0,-8)。"
    },
    {
      "exampleId": "L3",
      "prompt": "x+2y=0 的兩種截距。",
      "solutionSteps": [
        "令 y=0 得 x=0，x 截距點為原點。",
        "令 x=0 得 y=0，y 截距點仍是原點。",
        "兩次所得是同一個點，須另找例如 (2,-1) 才能唯一畫出此直線。"
      ],
      "answer": "兩種截距皆為 0，交點都是原點；僅靠截距不能唯一決定直線。",
      "why": "兩種截距值雖都存在，但對應的截距點完全重合，只提供原點這一個不同點。所有過原點的非軸直線都有相同截距，因此必須再取得另一個線上點才能唯一決定本題直線。"
    },
    {
      "exampleId": "L4",
      "prompt": "3x+6y=9 的兩截距點。",
      "solutionSteps": [
        "令 y=0 得 x=3，所以 x 截距點為 (3,0)。",
        "令 x=0 得 y=3/2，所以 y 截距點為 (0,3/2)。",
        "兩點互不相同且都代回成立，因此可用它們唯一畫出直線。"
      ],
      "answer": "(3,0) 與 (0,3/2)。",
      "why": "兩次設零得到的截距點位於不同坐標軸且互不重合，正好構成兩個不同點。平面上兩個不同點唯一決定一直線，所以本例可用截距點作圖；這項結論不適用於兩點同為原點的情形。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "求 x 截距時令 x=0。",
      "why": "把軸名與設零變數混淆。",
      "correction": "x 軸上的點是 y=0，所以應令另一個變數 y 為零。"
    },
    {
      "mistake": "題目只問截距值，卻直接寫截距點。",
      "why": "未分清單一數值與有序數對。",
      "correction": "先辨認題目使用『截距』或『截距點』，再選擇表示方式。"
    },
    {
      "mistake": "把 -y=8 解成 y=8。",
      "why": "除以負一時漏掉負號。",
      "correction": "兩邊同除以負一，得到 y=-8，並代回檢查。"
    },
    {
      "mistake": "認為通過原點有兩個不同截距點。",
      "why": "把 x 截距點與 y 截距點的名稱差異誤當成位置差異。",
      "correction": "兩點都寫出坐標後會發現同為 (0,0)。"
    },
    {
      "mistake": "知道 x、y 兩種截距就認為一定唯一決定直線。",
      "why": "若兩截距點重合，只得到一個不同點，仍有許多直線符合。",
      "correction": "確認兩截距點互不相同；若重合，另找一個不同線上點。"
    },
    {
      "mistake": "對水平或垂直特殊線硬求兩個一般截距。",
      "why": "忽略直線可能與坐標軸平行或重合。",
      "correction": "先判斷是否有唯一交點，再使用設零程序。"
    }
  ],
  "selfCheck": [
    "x 截距是否令 y=0？",
    "y 截距是否令 x=0？",
    "我寫的是截距值還是截距點？",
    "特殊水平垂直線是否另行判斷？"
  ],
  "summary": [
    "x 截距令 y=0，y 截距令 x=0。",
    "截距值與截距點要分開表達。",
    "只有兩個互不相同的截距點才足以唯一決定直線。",
    "通過原點時兩截距點重合，必須另找一個不同點。",
    "水平線、垂直線與坐標軸重合情形要另行判斷。"
  ],
  "connections": {
    "previous": "承接點在線上的代入判定與軸上點的零分量。",
    "next": [
      "下一節用聯立方程式找兩直線共同的交點。",
      "兩個互不相同的截距點可用來唯一畫出直線；若截距點重合，須另找第二個不同點。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s010-v001",
      "u05-s010-v002",
      "u05-s010-v003",
      "u05-s010-v004",
      "u05-s010-v005",
      "u05-s010-v006",
      "u05-s010-v007",
      "u05-s010-v008",
      "u05-s010-v009",
      "u05-s010-v010",
      "u05-s010-v011",
      "u05-s010-v012"
    ],
    "constructedResponseIds": [
      "u05-s010-cr001",
      "u05-s010-cr002"
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
    "reviewNote": "重新計算四個方程式的設零、符號與分數結果；除區分截距值與截距點外，並明確複核唯一性條件：只有取得兩個互不相同的點時才足以唯一決定直線，通過原點使兩截距點重合時必須另找第二個不同點。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "a5201af6cbc95b1747f0429c6b689ea2c26da1bd77c862bce754e5905a22da67"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s010-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "直線 2x+y=8 的 x 截距是多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "求 x 截距值",
    "choices": [
      "8",
      "4",
      "-4",
      "2"
    ],
    "answerIndex": 1,
    "independentSolution": "求 x 截距令 y=0，得 2x=8，所以 x=4。",
    "explanation": "x 截距是直線與 x 軸交點的橫坐標，而 x 軸上的點滿足 y=0。代入 2x+y=8 得 2x=8，所以 x=4，截距值為四、截距點為 (4,0)。單一截距點本身並不足以唯一決定整條直線。",
    "steps": [
      "利用 x 軸上 y=0，將 y 設為零。",
      "解 2x=8，得到 x=4。",
      "依題目只問截距值，回答四並以 (4,0) 回代。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "未除以 2。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "x 截距值正確。"
      },
      {
        "choice": "-4",
        "truth": false,
        "reason": "符號錯。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "錯把係數當答案。"
      }
    ],
    "misconceptionTarget": "求 x 截距時錯把 x 設為零，或把單一截距點誤認為已唯一決定直線。",
    "prerequisiteCheck": "需知道 x 軸上 y=0。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目問截距值，不是截距點。",
    "difficultyReason": "單一步設零與求解，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "求 x 截距值",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "14320204bcb983caef0cd69bae3f6c466d83af9e5df46ca34e4e73f9d7c2b65c"
  },
  {
    "questionId": "u05-s010-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "直線 x-3y=6 的 y 截距點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "求 y 截距點",
    "choices": [
      "(-2,0)",
      "(0,2)",
      "(0,-2)",
      "(6,0)"
    ],
    "answerIndex": 2,
    "independentSolution": "求 y 截距令 x=0，得 -3y=6，y=-2，所以點為 (0,-2)。",
    "explanation": "y 截距點位於 y 軸，所以橫坐標 x=0。代入 x-3y=6 得 -3y=6，兩邊除以負三後 y=-2。題目要求的是點坐標，因此寫成 (0,-2)，不能只寫負二，也不能把分量交換。",
    "steps": [
      "利用 y 軸上 x=0，將 x 設為零。",
      "解 -3y=6，得到 y=-2。",
      "把截距值放在第二分量，寫成點 (0,-2)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-2,0)",
        "truth": false,
        "reason": "交換分量。"
      },
      {
        "choice": "(0,2)",
        "truth": false,
        "reason": "漏掉負號。"
      },
      {
        "choice": "(0,-2)",
        "truth": true,
        "reason": "y 截距點格式與符號正確。"
      },
      {
        "choice": "(6,0)",
        "truth": false,
        "reason": "這是 x 截距點。"
      }
    ],
    "misconceptionTarget": "把 y 截距點的非零分量放到第一格，或負係數除法時漏掉負號。",
    "prerequisiteCheck": "需會軸上點。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目明確要求點坐標。",
    "difficultyReason": "設零後解一次方程式，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "求 y 截距點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "50d7a34d95cf124ee9306efa5ad001d8465544b80bd4f34dedb65326f3592f1c"
  },
  {
    "questionId": "u05-s010-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若直線的 x 截距為 -5，則它與 x 軸的交點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由截距值寫交點",
    "choices": [
      "(-5,0)",
      "(0,-5)",
      "(-5,-5)",
      "(5,0)"
    ],
    "answerIndex": 0,
    "independentSolution": "x 截距是交點的橫坐標，且 x 軸上 y=0，所以交點 (-5,0)。",
    "explanation": "x 截距負五是直線與 x 軸交點的橫坐標；x 軸上縱坐標固定為零，因此交點是 (-5,0)。負號必須保留，且不能寫成 (0,-5)。這項資料只給一個點，若沒有其他條件仍不能唯一決定直線。",
    "steps": [
      "辨認 x 截距值是交點的第一分量負五。",
      "利用 x 軸上 y=0，補上第二分量零。",
      "寫成 (-5,0)，並確認負號與分量順序。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-5,0)",
        "truth": true,
        "reason": "值與點的轉換正確。"
      },
      {
        "choice": "(0,-5)",
        "truth": false,
        "reason": "寫成 y 截距點。"
      },
      {
        "choice": "(-5,-5)",
        "truth": false,
        "reason": "忘記 x 軸上 y=0。"
      },
      {
        "choice": "(5,0)",
        "truth": false,
        "reason": "負號遺失。"
      }
    ],
    "misconceptionTarget": "把 x 截距值放在第二分量，或認為一個截距點就能唯一決定直線。",
    "prerequisiteCheck": "需理解有序數對。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "負截距合法。",
    "difficultyReason": "直接轉換，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "由截距值寫交點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "aa3bd50e7f379f46caecc1c3eff9c450c9cce0ddf6b4b14bc0bbc775fa0b66a6"
  },
  {
    "questionId": "u05-s010-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "求直線 3x+2y=12 的兩個截距點。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "同時計算兩截距點",
    "choices": [
      "(3,0) 與 (0,2)",
      "(12,0) 與 (0,12)",
      "(0,4) 與 (6,0)",
      "(4,0) 與 (0,6)"
    ],
    "answerIndex": 3,
    "independentSolution": "令 y=0 得 x=4；令 x=0 得 y=6，所以兩點為 (4,0)、(0,6)。",
    "explanation": "求 x 截距時令 y=0，得到 3x=12、x=4，所以點為 (4,0)。求 y 截距時令 x=0，得到 2y=12、y=6，所以點為 (0,6)。兩點互不相同，因此在本題中確實足以唯一畫出這條直線。",
    "steps": [
      "令 y=0，求得 x 截距點 (4,0)。",
      "令 x=0，求得 y 截距點 (0,6)。",
      "將兩點代回，並確認它們是兩個不同點。"
    ],
    "optionAnalysis": [
      {
        "choice": "(3,0) 與 (0,2)",
        "truth": false,
        "reason": "誤把係數當截距。"
      },
      {
        "choice": "(12,0) 與 (0,12)",
        "truth": false,
        "reason": "未除以係數。"
      },
      {
        "choice": "(0,4) 與 (6,0)",
        "truth": false,
        "reason": "把兩截距點的分量位置交換。"
      },
      {
        "choice": "(4,0) 與 (0,6)",
        "truth": true,
        "reason": "兩次設零皆正確。"
      }
    ],
    "misconceptionTarget": "把係數直接當截距，或算出兩個值後放錯坐標分量與忽略點是否互異。",
    "prerequisiteCheck": "需會一次方程式。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "直線與兩軸皆有唯一交點。",
    "difficultyReason": "需做兩次設零並正確寫點，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "同時計算兩截距點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6906bb5f3c9d2b2893956609ab1690a57ec2c2d3c000424bbdb1fe48ee1761a6"
  },
  {
    "questionId": "u05-s010-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "直線 5x-10y=20 的 y 截距是多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "處理負 y 截距",
    "choices": [
      "2",
      "4",
      "-2",
      "-4"
    ],
    "answerIndex": 2,
    "independentSolution": "令 x=0 得 -10y=20，所以 y=-2。",
    "explanation": "y 截距是在 y 軸上的交點，因此令 x=0。代入 5x-10y=20 得 -10y=20，兩邊除以負十得到 y=-2。題目問截距值，所以答案是負二；若問截距點才寫 (0,-2)，負號不可省略。",
    "steps": [
      "依 y 截距規則令 x=0。",
      "由 -10y=20 除以負十，求 y=-2。",
      "分清題目問值而非點，回答負二並回代。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "漏掉負號。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "把 20÷5 當 y 截距。"
      },
      {
        "choice": "-2",
        "truth": true,
        "reason": "負號與除法正確。"
      },
      {
        "choice": "-4",
        "truth": false,
        "reason": "誤用 x 係數。"
      }
    ],
    "misconceptionTarget": "除以負十時漏掉負號，或把 x 係數五用來計算 y 截距。",
    "prerequisiteCheck": "需會整數除法。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目問數值，不需寫 (0,-2)。",
    "difficultyReason": "需正確處理負號，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "處理負 y 截距",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e52bf8256a807d39f42d425005ff3f802e486a4dd1424d7f5c9b7346dda5457f"
  },
  {
    "questionId": "u05-s010-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "直線 ax+3y=12 的 x 截距為 6，且 a≠0，求 a。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由截距反求方程式係數",
    "choices": [
      "2",
      "1",
      "3",
      "6"
    ],
    "answerIndex": 0,
    "independentSolution": "x 截距點為 (6,0)。代入得 6a=12，所以 a=2。",
    "explanation": "x 截距六代表截距點 (6,0)，而不是係數 a 等於六。把此點代入 ax+3y=12，得到 6a+0=12，所以 a=2。此時方程式為 2x+3y=12，令 y=0 的確再次得到 x=6，參數與原截距條件一致。",
    "steps": [
      "將 x 截距六改寫為點 (6,0)。",
      "代入參數方程式，列出 6a=12。",
      "求 a=2，並用新方程式重新計算截距驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": true,
        "reason": "6×2=12。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "左邊為 6。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "左邊為 18。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "左邊為 36。"
      }
    ],
    "misconceptionTarget": "把截距值六直接當成 x 的係數 a，沒有先轉成軸上點代入。",
    "prerequisiteCheck": "需會點在線判定。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "a≠0 確保有有限 x 截距。",
    "difficultyReason": "需先由截距建立解點再求參數，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "由截距反求方程式係數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "499c2512b4906dd9baa312101bbc3034f9e783a39d37073a54a2c569f46a6879"
  },
  {
    "questionId": "u05-s010-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "直線 (m-1)x+2y=8 的 x 截距為 4，求 m。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "含參數係數的截距條件",
    "choices": [
      "1",
      "2",
      "5",
      "3"
    ],
    "answerIndex": 3,
    "independentSolution": "將 (4,0) 代入得 4(m-1)=8，m-1=2，所以 m=3。",
    "explanation": "x 截距四代表點 (4,0)。代入 (m-1)x+2y=8 得 4(m-1)=8，除以四後 m-1=2，因此 m=3。此時 x 的係數為二，截距為 8÷2=4；m=1 會使 x 項消失，並不符合有限截距四，邊界也已排除。",
    "steps": [
      "把截距值四轉成點 (4,0) 並代入。",
      "解 4(m-1)=8，得到 m=3。",
      "檢查 m=3 時截距為四，並排除 m=1 的邊界。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "x 項消失，無此有限 x 截距。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "方程式 x+2y=8，x 截距 8。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "係數 4，x 截距 2。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "係數 m-1=2，截距為 4。"
      }
    ],
    "misconceptionTarget": "展開 m-1 時漏括號，或忽略參數使 x 項消失而截距不存在的邊界。",
    "prerequisiteCheck": "需會代數方程式。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "m=1 會使直線水平且不符合截距 4，已由方程式排除。",
    "difficultyReason": "需建立參數方程式並注意 m=1 邊界，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "含參數係數的截距條件",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "a2e8294557cc2a51b9063b627e762b2946c1438be7a5f13704215991e9b558f3"
  },
  {
    "questionId": "u05-s010-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "某直線的方程式為 2x+by=0，且 b≠0。下列何者正確？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "分析通過原點的截距",
    "choices": [
      "只有 x 截距為 0",
      "x 截距與 y 截距都為 0",
      "只有 y 截距為 0",
      "兩截距都不存在"
    ],
    "answerIndex": 1,
    "independentSolution": "令 y=0 得 x=0；令 x=0 且 b≠0 得 y=0。因此兩種截距值皆為 0，截距點同為原點。",
    "explanation": "令 y=0 得 2x=0，所以 x 截距為零；令 x=0 得 by=0，因 b 不等於零而有 y=0，所以 y 截距也為零。兩個截距點都重合於原點。它們只有一個不同點，不能僅憑這兩個截距唯一決定是哪一條過原點直線。",
    "steps": [
      "令 y=0，求得 x 截距值零。",
      "令 x=0 且利用 b 不為零，求得 y 截距值零。",
      "指出兩截距點同為原點，並非兩個不同決定點。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有 x 截距為 0",
        "truth": false,
        "reason": "漏掉 y 截距。"
      },
      {
        "choice": "x 截距與 y 截距都為 0",
        "truth": true,
        "reason": "兩截距點重合於原點。"
      },
      {
        "choice": "只有 y 截距為 0",
        "truth": false,
        "reason": "漏掉 x 截距。"
      },
      {
        "choice": "兩截距都不存在",
        "truth": false,
        "reason": "原點確實是交點。"
      }
    ],
    "misconceptionTarget": "認為兩個截距點重合就等於截距不存在，或仍把同一點當成兩個決定點。",
    "prerequisiteCheck": "需理解原點與截距。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "b≠0 排除直線與 y 軸重合而 y 截距不唯一的特殊情形。",
    "difficultyReason": "需處理兩截距重合且檢查係數邊界，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "分析通過原點的截距",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "fd30b826d27ea932914c9318b7c879c5d333ba1cf24c4053a32b3f80a6844d1e"
  },
  {
    "questionId": "u05-s010-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "直線 4x+ky=16 的 x 截距是 y 截距的 2 倍，且 k>0。求 k。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由兩截距比例求係數",
    "choices": [
      "2",
      "4",
      "16",
      "8"
    ],
    "answerIndex": 3,
    "independentSolution": "x 截距為 16÷4=4；y 截距為 16/k。條件 4=2(16/k)，得 4=32/k，k=8。",
    "explanation": "令 y=0 得 4x=16，所以 x 截距為四；令 x=0 得 ky=16，所以 y 截距為 16/k。題意說 x 截距是 y 截距的兩倍，列 4=2×(16/k)，解得 k=8。此時 y 截距二，四正是二的兩倍，比例方向完全符合題意。",
    "steps": [
      "分別令另一變數為零，求兩個截距的參數式。",
      "依倍數方向列 4=2×(16/k)。",
      "解得 k=8，回算兩截距為四與二。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "y 截距 8，關係相反。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "兩截距都 4。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "y 截距 1，x 是其 4 倍。"
      },
      {
        "choice": "8",
        "truth": true,
        "reason": "y 截距 2，x 截距 4，正好 2 倍。"
      }
    ],
    "misconceptionTarget": "把『x 截距是 y 截距的兩倍』方向顛倒，或求截距時設錯零變數。",
    "prerequisiteCheck": "需會分式方程式。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "k>0 使 y 截距正且比例語意直接。",
    "difficultyReason": "需先求符號式截距再建立比例，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由兩截距比例求係數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "fc9a334be85269d479f64047d5b2aa9da9462a86a1c009c046ce21f36bc7de57"
  },
  {
    "questionId": "u05-s010-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "某道路在坐標地圖上以 3x+2y=18 表示。它與東西向主幹道 y=0 的交會位置為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "以道路情境求 x 截距點",
    "choices": [
      "(6,0)",
      "(0,9)",
      "(3,0)",
      "(0,6)"
    ],
    "answerIndex": 0,
    "independentSolution": "主幹道 y=0 是 x 軸。代入道路式得 3x=18，x=6，交會點 (6,0)。",
    "explanation": "東西向主幹道 y=0 就是 x 軸，因此道路與主幹道的交會點是道路的 x 截距點。把 y=0 代入 3x+2y=18，得到 3x=18、x=6，所以交會位置是 (6,0)，不是 y 軸上的點。",
    "steps": [
      "把東西向主幹道條件辨認為 y=0。",
      "代入道路方程式，解 3x=18 得 x=6。",
      "依 x 軸點格式寫成交會點 (6,0)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(6,0)",
        "truth": true,
        "reason": "道路的 x 截距點。"
      },
      {
        "choice": "(0,9)",
        "truth": false,
        "reason": "係數與分量皆錯。"
      },
      {
        "choice": "(3,0)",
        "truth": false,
        "reason": "未正確除以 3。"
      },
      {
        "choice": "(0,6)",
        "truth": false,
        "reason": "寫成 y 軸上的點。"
      }
    ],
    "misconceptionTarget": "未把東西向主幹道辨認為 x 軸，或把 x 截距點寫到 y 軸上。",
    "prerequisiteCheck": "需會截距。",
    "estimatedTimeSec": 150,
    "unitCheck": "坐標單位未另給，答案以地圖坐標表示。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目明定主幹道方程式，不需自行假設方向。",
    "difficultyReason": "需把東西向主幹道翻成 y=0，情境是必要建模。",
    "literacyContextNecessity": "道路與主幹道的方程式決定交會位置；『y=0』是地圖中的實際道路條件。",
    "authoringIntent": "以道路情境求 x 截距點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "3df12190378d94d48575471c7860f4f90aff624160d024126f9b29f967464ad3"
  },
  {
    "questionId": "u05-s010-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "某公司成本線 5x+y=50，其中 x 為產量、y 為固定與剩餘成本指標。若產量為 0 時的指標稱為 y 截距，該值是多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "解讀成本線的 y 截距",
    "choices": [
      "0",
      "50",
      "5",
      "10"
    ],
    "answerIndex": 1,
    "independentSolution": "產量為 0 即 x=0，代入得 y=50。",
    "explanation": "情境定義 x 為產量，產量為零就是令 x=0。代入 5x+y=50 得 y=50，所以 y 截距值為五十，截距點為 (0,50)。被設為零的是橫坐標 x，不能因此把 y 截距答案也寫成零。",
    "steps": [
      "把『產量為零』翻成 x=0。",
      "代入方程式，得到 y=50。",
      "依題目問截距值回答五十，並以點 (0,50) 檢查。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "把設為 0 的 x 當答案。"
      },
      {
        "choice": "50",
        "truth": true,
        "reason": "y 截距值正確。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "誤取 x 係數。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "求成 x 截距。"
      }
    ],
    "misconceptionTarget": "把被設成零的產量 x 當成 y 截距答案，或誤取 x 的係數五。",
    "prerequisiteCheck": "需會代入。",
    "estimatedTimeSec": 150,
    "unitCheck": "x 與 y 單位不同，但只依方程式代入，不做不相容單位相加。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "情境已明確定義變數與截距。",
    "difficultyReason": "需將『產量為 0』對應 x=0。",
    "literacyContextNecessity": "產量與成本指標的角色決定哪個變數設為 0；情境直接影響截距解讀。",
    "authoringIntent": "解讀成本線的 y 截距",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "1159acc7c518cbdf102582d1c3cb1df6e2837d691db8f375efe5e3f5fcc83d6f"
  },
  {
    "questionId": "u05-s010-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "航線邊界 2x-4y=24 與兩坐標軸形成的兩個截距點，用來設定警示標記。兩標記坐標為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "以航線方程式配置軸上標記",
    "choices": [
      "(6,0) 與 (0,-12)",
      "(24,0) 與 (0,24)",
      "(12,0) 與 (0,-6)",
      "(-12,0) 與 (0,6)"
    ],
    "answerIndex": 2,
    "independentSolution": "令 y=0 得 x=12；令 x=0 得 -4y=24，y=-6。",
    "explanation": "航線與 x 軸交點令 y=0，得 2x=24、x=12，所以第一標記是 (12,0)。與 y 軸交點令 x=0，得 -4y=24、y=-6，所以第二標記是 (0,-6)。兩點符號與分量都要保留，且代回皆得二十四。",
    "steps": [
      "令 y=0，解出 x 截距點 (12,0)。",
      "令 x=0，解出 y 截距點 (0,-6)。",
      "把兩點代回航線方程式，確認都使左邊等於二十四。"
    ],
    "optionAnalysis": [
      {
        "choice": "(6,0) 與 (0,-12)",
        "truth": false,
        "reason": "除錯係數。"
      },
      {
        "choice": "(24,0) 與 (0,24)",
        "truth": false,
        "reason": "未除係數且符號錯。"
      },
      {
        "choice": "(12,0) 與 (0,-6)",
        "truth": true,
        "reason": "兩個設零結果正確。"
      },
      {
        "choice": "(-12,0) 與 (0,6)",
        "truth": false,
        "reason": "兩個符號都反。"
      }
    ],
    "misconceptionTarget": "截距除錯係數、漏掉負 y 截距，或把兩個非零分量放到錯誤坐標格。",
    "prerequisiteCheck": "需會截距。",
    "estimatedTimeSec": 150,
    "unitCheck": "坐標值沿各軸使用同一地圖單位。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩軸標記皆唯一，且題目要求點坐標。",
    "difficultyReason": "需做兩次帶符號截距計算。",
    "literacyContextNecessity": "警示標記必須放在航線與坐標軸的實際交點，兩個截距點直接決定配置。",
    "authoringIntent": "以航線方程式配置軸上標記",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "1f8335efa529999839de5f92f86d5d254c6ca426fc06f49c43bf52f54695b3eb"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s010-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "求直線 4x-3y=12 的 x 截距、y 截距與兩個截距點，並分清『值』與『點』。",
    "requiredWork": [
      "分別令 y=0、x=0。",
      "同時寫數值與點坐標。"
    ],
    "fullCreditSolution": [
      "求 x 截距時令 y=0：4x=12，所以 x=3。x 截距值是三，截距點是 (3,0)。",
      "求 y 截距時令 x=0：-3y=12，所以 y=-4。y 截距值是負四，截距點是 (0,-4)。",
      "將兩點代回：4×3-3×0=12，4×0-3×(-4)=12，兩點都在直線上。",
      "截距值是單一數，截距點是有序數對。本題兩個截距點互不相同，因此它們足以唯一決定這條直線。"
    ],
    "alternativeSolutions": [
      "可先求兩個軸上解點，再讀出非零分量作為截距值。"
    ],
    "reasoningSteps": [
      "分別利用 x 軸上 y=0 與 y 軸上 x=0 求兩個截距值。",
      "依題目要求，把每個值改寫成正確分量位置的截距點。",
      "將兩點代回，並確認是兩個不同點後才說可唯一決定直線。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩截距值 3、-4 與兩點 (3,0)、(0,-4) 全部正確。"
      },
      {
        "score": 2,
        "criteria": "兩個計算正確但值與點表達不完整，或只有一個符號錯。"
      },
      {
        "score": 1,
        "criteria": "只正確求出一種截距。"
      },
      {
        "score": 0,
        "criteria": "x 截距令 x=0、y 截距令 y=0，兩者皆顛倒。"
      }
    ],
    "partialCreditRules": [
      "值與點各自有分；負號不可省略。"
    ],
    "followThroughPolicy": "若其中一個截距的除法算錯，另一截距仍可獨立計分；後續把錯誤截距值正確寫成對應截距點，可給表示方法分。",
    "unitAndNotationRules": "x 截距值寫 3、點寫 (3,0)；y 截距值寫 -4、點寫 (0,-4)，值與點不得混寫。",
    "answerOnlyPolicy": "只寫兩個截距點而未區分截距值與點，最高給 2 分。",
    "commonErrors": [
      "求 y 截距時令 y=0，混淆軸名與應設為零的另一分量。",
      "由 -3y=12 得 y=4，負係數除法時漏掉負號。",
      "把截距值三、負四與截距點 (3,0)、(0,-4) 混寫。"
    ],
    "independentReview": {
      "derivedResult": "一種截距錯不影響另一種。",
      "ambiguity": "截距是單一數值，截距點是有序數對。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 一種截距錯不影響另一種。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "cd1fa3aaabf8a511a38bdf9daf6b22f7fca3f75dabc714364b2efb6a503f72bc"
  },
  {
    "questionId": "u05-s010-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "直線 ax+2y=12 的 x 截距為 4。求 a 與 y 截距，並檢查兩個截距點是否都在直線上。",
    "requiredWork": [
      "由 x 截距點求 a。",
      "求 y 截距。",
      "代入驗證兩點。"
    ],
    "fullCreditSolution": [
      "x 截距四代表點 (4,0)。代入 ax+2y=12 得 4a=12，所以 a=3。",
      "方程式成為 3x+2y=12。求 y 截距時令 x=0，得到 2y=12、y=6，因此截距值為六、點為 (0,6)。",
      "驗證 (4,0)：3×4+2×0=12；驗證 (0,6)：3×0+2×6=12，兩個截距點都在直線上。",
      "兩點 (4,0)、(0,6) 互不相同，配合直線條件可唯一決定本題直線；若兩截距點重合，則還需另一個不同點。"
    ],
    "alternativeSolutions": [
      "可由截距式的實際點逐一代入，不需使用高中截距式。"
    ],
    "reasoningSteps": [
      "把 x 截距值轉成軸上點，代入含參數方程式求 a。",
      "以求得的方程式令 x=0，求 y 截距值與截距點。",
      "分別代回兩點，並檢查它們互異及完整符合直線。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "a=3、y 截距 6，且兩點驗證完整。"
      },
      {
        "score": 2,
        "criteria": "a 與 y 截距正確但驗證不足。"
      },
      {
        "score": 1,
        "criteria": "能列 4a=12 或正確求其中一項。"
      },
      {
        "score": 0,
        "criteria": "把 x 截距 4 直接當 a。"
      }
    ],
    "partialCreditRules": [
      "不要求使用截距式，只接受國中設零與代入。"
    ],
    "followThroughPolicy": "若由 x 截距求 a 時有算術錯誤，y 截距仍應由 x=0 獨立求得；以所得 a 驗證截距點時可按一致推理給部分分。",
    "unitAndNotationRules": "參數寫 a=3；y 截距值寫 6，截距點分別寫 (4,0)、(0,6)。",
    "answerOnlyPolicy": "只寫 a=3、y 截距 6 而沒有兩點代入檢查，最高給 2 分。",
    "commonErrors": [
      "只令 x=4 卻未同時使用截距點的 y=0，導致參數方程式仍有兩未知量。",
      "求 y 截距時再次令 y=0，實際上算成 x 截距。",
      "只檢查其中一個截距點，或未確認兩個決定點是否互不相同。"
    ],
    "independentReview": {
      "derivedResult": "若 a 算錯但使用自己的 a 正確求 y 截距，可給方法分，但最終值分不給。",
      "ambiguity": "a 為係數；y 截距為數值 6。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若 a 算錯但使用自己的 a 正確求 y 截距，可給方法分，但最終值分不給。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "cd5b9ed18772408fccd232b76395467a8dc8c3b7240f4054abd48830f3ace39f"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s010-v001",
    "contentSha256": "14320204bcb983caef0cd69bae3f6c466d83af9e5df46ca34e4e73f9d7c2b65c",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "求 x 截距令 y=0，得 2x=8，所以 x=4。",
    "derivedAnswer": "4",
    "storedAnswer": "4",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「4」；其餘三項逐項檢查：「8」不成立，未除以 2。；「-4」不成立，符號錯。；「2」不成立，錯把係數當答案。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「x 截距與 y 截距」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目問截距值，不是截距點。",
      "alternateReading": "常見誤讀是「求 x 截距時未令 y=0。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "單一步設零與求解，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需知道 x 軸上 y=0。",
    "languageCheck": "題幹所求為「求 x 截距值」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「直線 2x+y=8 的 x 截距是多少？」重新依序處理：求 x 截距令 y=0，得 2x=8，所以 x=4。 正確選項為「4」。三個干擾項均對應不同錯誤：「8」不成立，未除以 2。；「-4」不成立，符號錯。；「2」不成立，錯把係數當答案。。邊界審查：題目問截距值，不是截距點。 難度理由：單一步設零與求解，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s010-v002",
    "contentSha256": "50d7a34d95cf124ee9306efa5ad001d8465544b80bd4f34dedb65326f3592f1c",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "求 y 截距令 x=0，得 -3y=6，y=-2，所以點為 (0,-2)。",
    "derivedAnswer": "(0,-2)",
    "storedAnswer": "(0,-2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(0,-2)」；其餘三項逐項檢查：「(-2,0)」不成立，交換分量。；「(0,2)」不成立，漏掉負號。；「(6,0)」不成立，這是 x 截距點。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「x 截距與 y 截距」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目明確要求點坐標。",
      "alternateReading": "常見誤讀是「截距值與截距點或負號混淆。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "設零後解一次方程式，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會軸上點。",
    "languageCheck": "題幹所求為「求 y 截距點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「直線 x-3y=6 的 y 截距點為何？」重新依序處理：求 y 截距令 x=0，得 -3y=6，y=-2，所以點為 (0,-2)。 正確選項為「(0,-2)」。三個干擾項均對應不同錯誤：「(-2,0)」不成立，交換分量。；「(0,2)」不成立，漏掉負號。；「(6,0)」不成立，這是 x 截距點。。邊界審查：題目明確要求點坐標。 難度理由：設零後解一次方程式，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s010-v003",
    "contentSha256": "aa3bd50e7f379f46caecc1c3eff9c450c9cce0ddf6b4b14bc0bbc775fa0b66a6",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x 截距是交點的橫坐標，且 x 軸上 y=0，所以交點 (-5,0)。",
    "derivedAnswer": "(-5,0)",
    "storedAnswer": "(-5,0)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(-5,0)」；其餘三項逐項檢查：「(0,-5)」不成立，寫成 y 截距點。；「(-5,-5)」不成立，忘記 x 軸上 y=0。；「(5,0)」不成立，負號遺失。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「x 截距與 y 截距」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "負截距合法。",
      "alternateReading": "常見誤讀是「把截距名稱當成非零分量位置交換。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "直接轉換，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解有序數對。",
    "languageCheck": "題幹所求為「由截距值寫交點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若直線的 x 截距為 -5，則它與 x 軸的交點為何？」重新依序處理：x 截距是交點的橫坐標，且 x 軸上 y=0，所以交點 (-5,0)。 正確選項為「(-5,0)」。三個干擾項均對應不同錯誤：「(0,-5)」不成立，寫成 y 截距點。；「(-5,-5)」不成立，忘記 x 軸上 y=0。；「(5,0)」不成立，負號遺失。。邊界審查：負截距合法。 難度理由：直接轉換，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s010-v004",
    "contentSha256": "6906bb5f3c9d2b2893956609ab1690a57ec2c2d3c000424bbdb1fe48ee1761a6",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "令 y=0 得 x=4；令 x=0 得 y=6，所以兩點為 (4,0)、(0,6)。",
    "derivedAnswer": "(4,0) 與 (0,6)",
    "storedAnswer": "(4,0) 與 (0,6)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(4,0) 與 (0,6)」；其餘三項逐項檢查：「(3,0) 與 (0,2)」不成立，誤把係數當截距。；「(12,0) 與 (0,12)」不成立，未除以係數。；「(0,4) 與 (6,0)」不成立，把兩截距點的分量位置交換。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「x 截距與 y 截距」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "直線與兩軸皆有唯一交點。",
      "alternateReading": "常見誤讀是「算出截距值後放錯分量。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需做兩次設零並正確寫點，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會一次方程式。",
    "languageCheck": "題幹所求為「同時計算兩截距點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「求直線 3x+2y=12 的兩個截距點。」重新依序處理：令 y=0 得 x=4；令 x=0 得 y=6，所以兩點為 (4,0)、(0,6)。 正確選項為「(4,0) 與 (0,6)」。三個干擾項均對應不同錯誤：「(3,0) 與 (0,2)」不成立，誤把係數當截距。；「(12,0) 與 (0,12)」不成立，未除以係數。；「(0,4) 與 (6,0)」不成立，把兩截距點的分量位置交換。。邊界審查：直線與兩軸皆有唯一交點。 難度理由：需做兩次設零並正確寫點，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s010-v005",
    "contentSha256": "e52bf8256a807d39f42d425005ff3f802e486a4dd1424d7f5c9b7346dda5457f",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "令 x=0 得 -10y=20，所以 y=-2。",
    "derivedAnswer": "-2",
    "storedAnswer": "-2",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「-2」；其餘三項逐項檢查：「2」不成立，漏掉負號。；「4」不成立，把 20÷5 當 y 截距。；「-4」不成立，誤用 x 係數。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「x 截距與 y 截距」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目問數值，不需寫 (0,-2)。",
      "alternateReading": "常見誤讀是「負係數除法錯誤。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需正確處理負號，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會整數除法。",
    "languageCheck": "題幹所求為「處理負 y 截距」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「直線 5x-10y=20 的 y 截距是多少？」重新依序處理：令 x=0 得 -10y=20，所以 y=-2。 正確選項為「-2」。三個干擾項均對應不同錯誤：「2」不成立，漏掉負號。；「4」不成立，把 20÷5 當 y 截距。；「-4」不成立，誤用 x 係數。。邊界審查：題目問數值，不需寫 (0,-2)。 難度理由：需正確處理負號，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s010-v006",
    "contentSha256": "499c2512b4906dd9baa312101bbc3034f9e783a39d37073a54a2c569f46a6879",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x 截距點為 (6,0)。代入得 6a=12，所以 a=2。",
    "derivedAnswer": "2",
    "storedAnswer": "2",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「2」；其餘三項逐項檢查：「1」不成立，左邊為 6。；「3」不成立，左邊為 18。；「6」不成立，左邊為 36。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「x 截距與 y 截距」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "a≠0 確保有有限 x 截距。",
      "alternateReading": "常見誤讀是「把截距值直接當係數。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需先由截距建立解點再求參數，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會點在線判定。",
    "languageCheck": "題幹所求為「由截距反求方程式係數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「直線 ax+3y=12 的 x 截距為 6，且 a≠0，求 a。」重新依序處理：x 截距點為 (6,0)。代入得 6a=12，所以 a=2。 正確選項為「2」。三個干擾項均對應不同錯誤：「1」不成立，左邊為 6。；「3」不成立，左邊為 18。；「6」不成立，左邊為 36。。邊界審查：a≠0 確保有有限 x 截距。 難度理由：需先由截距建立解點再求參數，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s010-v007",
    "contentSha256": "a2e8294557cc2a51b9063b627e762b2946c1438be7a5f13704215991e9b558f3",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "將 (4,0) 代入得 4(m-1)=8，m-1=2，所以 m=3。",
    "derivedAnswer": "3",
    "storedAnswer": "3",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「3」；其餘三項逐項檢查：「1」不成立，x 項消失，無此有限 x 截距。；「2」不成立，方程式 x+2y=8，x 截距 8。；「5」不成立，係數 4，x 截距 2。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「x 截距與 y 截距」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "m=1 會使直線水平且不符合截距 4，已由方程式排除。",
      "alternateReading": "常見誤讀是「展開括號或截距點代入錯誤。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需建立參數方程式並注意 m=1 邊界，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會代數方程式。",
    "languageCheck": "題幹所求為「含參數係數的截距條件」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「直線 (m-1)x+2y=8 的 x 截距為 4，求 m。」重新依序處理：將 (4,0) 代入得 4(m-1)=8，m-1=2，所以 m=3。 正確選項為「3」。三個干擾項均對應不同錯誤：「1」不成立，x 項消失，無此有限 x 截距。；「2」不成立，方程式 x+2y=8，x 截距 8。；「5」不成立，係數 4，x 截距 2。。邊界審查：m=1 會使直線水平且不符合截距 4，已由方程式排除。 難度理由：需建立參數方程式並注意 m=1 邊界，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s010-v008",
    "contentSha256": "fd30b826d27ea932914c9318b7c879c5d333ba1cf24c4053a32b3f80a6844d1e",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "令 y=0 得 x=0；令 x=0 且 b≠0 得 y=0。因此兩種截距值皆為 0，截距點同為原點。",
    "derivedAnswer": "x 截距與 y 截距都為 0",
    "storedAnswer": "x 截距與 y 截距都為 0",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「x 截距與 y 截距都為 0」；其餘三項逐項檢查：「只有 x 截距為 0」不成立，漏掉 y 截距。；「只有 y 截距為 0」不成立，漏掉 x 截距。；「兩截距都不存在」不成立，原點確實是交點。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「x 截距與 y 截距」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "b≠0 排除直線與 y 軸重合而 y 截距不唯一的特殊情形。",
      "alternateReading": "常見誤讀是「認為兩個截距點相同就等於不存在。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需處理兩截距重合且檢查係數邊界，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解原點與截距。",
    "languageCheck": "題幹所求為「分析通過原點的截距」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「某直線的方程式為 2x+by=0，且 b≠0。下列何者正確？」重新依序處理：令 y=0 得 x=0；令 x=0 且 b≠0 得 y=0。因此兩種截距值皆為 0，截距點同為原點。 正確選項為「x 截距與 y 截距都為 0」。三個干擾項均對應不同錯誤：「只有 x 截距為 0」不成立，漏掉 y 截距。；「只有 y 截距為 0」不成立，漏掉 x 截距。；「兩截距都不存在」不成立，原點確實是交點。。邊界審查：b≠0 排除直線與 y 軸重合而 y 截距不唯一的特殊情形。 難度理由：需處理兩截距重合且檢查係數邊界，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s010-v009",
    "contentSha256": "fc9a334be85269d479f64047d5b2aa9da9462a86a1c009c046ce21f36bc7de57",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x 截距為 16÷4=4；y 截距為 16/k。條件 4=2(16/k)，得 4=32/k，k=8。",
    "derivedAnswer": "8",
    "storedAnswer": "8",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「8」；其餘三項逐項檢查：「2」不成立，y 截距 8，關係相反。；「4」不成立，兩截距都 4。；「16」不成立，y 截距 1，x 是其 4 倍。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「x 截距與 y 截距」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "k>0 使 y 截距正且比例語意直接。",
      "alternateReading": "常見誤讀是「把『x 截距是 y 截距的 2 倍』方向寫反。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需先求符號式截距再建立比例，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會分式方程式。",
    "languageCheck": "題幹所求為「由兩截距比例求係數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「直線 4x+ky=16 的 x 截距是 y 截距的 2 倍，且 k>0。求 k。」重新依序處理：x 截距為 16÷4=4；y 截距為 16/k。條件 4=2(16/k)，得 4=32/k，k=8。 正確選項為「8」。三個干擾項均對應不同錯誤：「2」不成立，y 截距 8，關係相反。；「4」不成立，兩截距都 4。；「16」不成立，y 截距 1，x 是其 4 倍。。邊界審查：k>0 使 y 截距正且比例語意直接。 難度理由：需先求符號式截距再建立比例，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s010-v010",
    "contentSha256": "3df12190378d94d48575471c7860f4f90aff624160d024126f9b29f967464ad3",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "主幹道 y=0 是 x 軸。代入道路式得 3x=18，x=6，交會點 (6,0)。",
    "derivedAnswer": "(6,0)",
    "storedAnswer": "(6,0)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(6,0)」；其餘三項逐項檢查：「(0,9)」不成立，係數與分量皆錯。；「(3,0)」不成立，未正確除以 3。；「(0,6)」不成立，寫成 y 軸上的點。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「x 截距與 y 截距」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標單位未另給，答案以地圖坐標表示。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目明定主幹道方程式，不需自行假設方向。",
      "alternateReading": "常見誤讀是「未辨認道路交 x 軸就是 x 截距。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需把東西向主幹道翻成 y=0，情境是必要建模。",
    "literacyContextNecessity": "道路與主幹道的方程式決定交會位置；『y=0』是地圖中的實際道路條件。",
    "prerequisiteCheck": "需會截距。",
    "languageCheck": "題幹所求為「以道路情境求 x 截距點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「某道路在坐標地圖上以 3x+2y=18 表示。它與東西向主幹道 y=0 的交會位置為何？」重新依序處理：主幹道 y=0 是 x 軸。代入道路式得 3x=18，x=6，交會點 (6,0)。 正確選項為「(6,0)」。三個干擾項均對應不同錯誤：「(0,9)」不成立，係數與分量皆錯。；「(3,0)」不成立，未正確除以 3。；「(0,6)」不成立，寫成 y 軸上的點。。邊界審查：題目明定主幹道方程式，不需自行假設方向。 難度理由：需把東西向主幹道翻成 y=0，情境是必要建模。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s010-v011",
    "contentSha256": "1159acc7c518cbdf102582d1c3cb1df6e2837d691db8f375efe5e3f5fcc83d6f",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "產量為 0 即 x=0，代入得 y=50。",
    "derivedAnswer": "50",
    "storedAnswer": "50",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「50」；其餘三項逐項檢查：「0」不成立，把設為 0 的 x 當答案。；「5」不成立，誤取 x 係數。；「10」不成立，求成 x 截距。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「x 截距與 y 截距」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "x 與 y 單位不同，但只依方程式代入，不做不相容單位相加。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "情境已明確定義變數與截距。",
      "alternateReading": "常見誤讀是「把被設為 0 的變數值當成截距答案。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需將『產量為 0』對應 x=0。",
    "literacyContextNecessity": "產量與成本指標的角色決定哪個變數設為 0；情境直接影響截距解讀。",
    "prerequisiteCheck": "需會代入。",
    "languageCheck": "題幹所求為「解讀成本線的 y 截距」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「某公司成本線 5x+y=50，其中 x 為產量、y 為固定與剩餘成本指標。若產量為 0 時的指標稱為 y 截距，該值是多少？」重新依序處理：產量為 0 即 x=0，代入得 y=50。 正確選項為「50」。三個干擾項均對應不同錯誤：「0」不成立，把設為 0 的 x 當答案。；「5」不成立，誤取 x 係數。；「10」不成立，求成 x 截距。。邊界審查：情境已明確定義變數與截距。 難度理由：需將『產量為 0』對應 x=0。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s010-v012",
    "contentSha256": "1f8335efa529999839de5f92f86d5d254c6ca426fc06f49c43bf52f54695b3eb",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "令 y=0 得 x=12；令 x=0 得 -4y=24，y=-6。",
    "derivedAnswer": "(12,0) 與 (0,-6)",
    "storedAnswer": "(12,0) 與 (0,-6)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(12,0) 與 (0,-6)」；其餘三項逐項檢查：「(6,0) 與 (0,-12)」不成立，除錯係數。；「(24,0) 與 (0,24)」不成立，未除係數且符號錯。；「(-12,0) 與 (0,6)」不成立，兩個符號都反。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「x 截距與 y 截距」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標值沿各軸使用同一地圖單位。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩軸標記皆唯一，且題目要求點坐標。",
      "alternateReading": "常見誤讀是「除法係數與負 y 截距錯誤。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需做兩次帶符號截距計算。",
    "literacyContextNecessity": "警示標記必須放在航線與坐標軸的實際交點，兩個截距點直接決定配置。",
    "prerequisiteCheck": "需會截距。",
    "languageCheck": "題幹所求為「以航線方程式配置軸上標記」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「航線邊界 2x-4y=24 與兩坐標軸形成的兩個截距點，用來設定警示標記。兩標記坐標為何？」重新依序處理：令 y=0 得 x=12；令 x=0 得 -4y=24，y=-6。 正確選項為「(12,0) 與 (0,-6)」。三個干擾項均對應不同錯誤：「(6,0) 與 (0,-12)」不成立，除錯係數。；「(24,0) 與 (0,24)」不成立，未除係數且符號錯。；「(-12,0) 與 (0,6)」不成立，兩個符號都反。。邊界審查：兩軸標記皆唯一，且題目要求點坐標。 難度理由：需做兩次帶符號截距計算。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
