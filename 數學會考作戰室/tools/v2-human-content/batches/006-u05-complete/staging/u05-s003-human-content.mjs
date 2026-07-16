// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s003-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-coordinate-basics",
  "skillId": "coordinate-axis-points",
  "lockedTitle": "坐標軸上的點",
  "title": "坐標軸上的點：零分量與到軸距離",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能判斷點位於 x 軸、y 軸或原點。",
    "能由軸上條件補出缺少的坐標分量。",
    "能計算點到 x 軸與 y 軸的垂直距離。",
    "能區分『在軸上』與『到軸距離』。"
  ],
  "prerequisites": [
    {
      "skillId": "coordinate-quadrant",
      "requiredLevel": "能說明並正確使用「象限判斷」的核心規則，且不混淆坐標分量順序。"
    }
  ],
  "glossary": [
    {
      "term": "x 軸上的點",
      "definition": "縱坐標 y=0 的點。"
    },
    {
      "term": "y 軸上的點",
      "definition": "橫坐標 x=0 的點。"
    },
    {
      "term": "到 x 軸的距離",
      "definition": "點的縱坐標絕對值 |y|。"
    },
    {
      "term": "到 y 軸的距離",
      "definition": "點的橫坐標絕對值 |x|。"
    },
    {
      "term": "原點",
      "definition": "同時在兩軸上，坐標 (0,0)。"
    }
  ],
  "notation": [
    {
      "symbol": "y=0",
      "meaning": "點在 x 軸上的條件。"
    },
    {
      "symbol": "x=0",
      "meaning": "點在 y 軸上的條件。"
    },
    {
      "symbol": "|y|",
      "meaning": "點到 x 軸的距離。"
    },
    {
      "symbol": "|x|",
      "meaning": "點到 y 軸的距離。"
    }
  ],
  "conceptNarrative": [
    "坐標軸上的點至少有一個分量為零：y=0 表示在 x 軸，x=0 表示在 y 軸，兩者都為零則是原點。判斷半軸還要查看另一個非零分量的正負。",
    "點 (x,y) 到 x 軸的最短距離是垂直長度 |y|，到 y 軸的最短距離是水平長度 |x|。距離取絕對值，所以不會因點位於左側或下方而成為負數。",
    "已知到兩軸距離時，只能先確定分量的絕對值；每個非零距離各有正、負兩種坐標。需利用象限、半軸或方位條件選擇符號，沒有附加條件時要保留所有可能。",
    "若分量含參數，先用坐標軸條件把對應分量設為零，再求參數與點的位置。實際地圖若每格代表特定長度，最後還須把坐標格數乘上比例並標示單位。"
  ],
  "formalDefinitions": [
    {
      "name": "x 軸條件",
      "statement": "P=(a,b) 在 x 軸上當且僅當 b=0。"
    },
    {
      "name": "y 軸條件",
      "statement": "P=(a,b) 在 y 軸上當且僅當 a=0。"
    },
    {
      "name": "到軸距離",
      "statement": "P=(a,b) 到 x 軸距離為 |b|，到 y 軸距離為 |a|。"
    }
  ],
  "formulas": [
    {
      "formula": "d(P,x軸)=|y|",
      "conditions": [
        "坐標軸互相垂直",
        "使用相同單位格"
      ],
      "meaning": "垂直方向只需消去縱坐標。"
    },
    {
      "formula": "d(P,y軸)=|x|",
      "conditions": [
        "坐標軸互相垂直",
        "使用相同單位格"
      ],
      "meaning": "水平方向只需消去橫坐標。"
    }
  ],
  "nonApplicableCases": [
    "一般斜線不適用 |x| 或 |y| 的到線距離規則。",
    "不要把到 x 軸距離誤看成 |x|。",
    "軸上點仍有完整兩個坐標。",
    "距離為 0 只表示點在該軸上，不一定是原點。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "檢查哪個分量為零，判斷點在 x 軸、y 軸或原點。",
      "check": "x=0 對應 y 軸、y=0 對應 x 軸，沒有對調。"
    },
    {
      "step": 2,
      "instruction": "判斷半軸時查看另一分量正負，排除原點邊界。",
      "check": "正、負半軸不包含原點，非零條件已確認。"
    },
    {
      "step": 3,
      "instruction": "求到 x 軸距離使用 |y|，求到 y 軸距離使用 |x|。",
      "check": "軸名與垂直方向的分量正確對應，答案不為負。"
    },
    {
      "step": 4,
      "instruction": "由距離反求坐標時先列正負兩種，再用象限或方位篩選。",
      "check": "沒有只取正值，也沒有漏列任何符號組合。"
    },
    {
      "step": 5,
      "instruction": "情境題依每格比例換算實際長度，並回到原坐標驗證。",
      "check": "格數、實際單位與方向意義分別清楚，換算倍數正確。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u05-s003-example-a",
      "prompt": "點 N=(8,0) 位於哪個坐標軸位置？",
      "solutionSteps": [
        "y=0 表示 N 在 x 軸。",
        "x=8>0 表示在原點右方。"
      ],
      "answer": "N 在 x 軸正半軸上。",
      "why": "第二分量為零使點落在 x 軸，第一分量正八再決定正半軸。它不是第一或第四象限，因為坐標軸不屬任何象限。"
    },
    {
      "exampleId": "u05-s003-example-b",
      "prompt": "求 E=(-6,2) 到 x 軸與 y 軸的距離。",
      "solutionSteps": [
        "到 x 軸距離為 |2|=2。",
        "到 y 軸距離為 |-6|=6。"
      ],
      "answer": "分別為二單位與六單位。",
      "why": "到 x 軸看縱坐標，到 y 軸看橫坐標，兩者都取絕對值。負六只表示點在 y 軸左側，不會產生負的線段長度，軸名順序也不可交換。"
    },
    {
      "exampleId": "u05-s003-example-c",
      "prompt": "點到 y 軸四單位、到 x 軸三單位且在第四象限，求坐標。",
      "solutionSteps": [
        "距離條件給 |x|=4、|y|=3。",
        "第四象限取 x>0、y<0。"
      ],
      "answer": "坐標為 (4,-3)。",
      "why": "兩個距離只決定分量的絕對值，象限條件才決定正負。第四象限是右下方，因此選正四與負三，其他符號組合落在別的象限。"
    },
    {
      "exampleId": "u05-s003-example-d",
      "prompt": "P=(2m-6,m-1) 在 x 軸上，求 P 與它到原點的距離。",
      "solutionSteps": [
        "x 軸條件使 m-1=0，所以 m=1。",
        "代回得 P=(-4,0)，到原點距離為四。"
      ],
      "answer": "P=(-4,0)，距離四單位。",
      "why": "位於 x 軸要令縱坐標而非橫坐標為零。求得 m=1 後，點在 x 軸負半軸；沿軸到原點的距離取橫坐標絕對值得四。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 x=0 判成在 x 軸。",
      "why": "混淆分量名稱與所在軸。",
      "correction": "x=0 沒有水平位移，所以點在垂直的 y 軸。"
    },
    {
      "mistake": "把原點算進正或負半軸。",
      "why": "未注意半軸需要另一分量嚴格正或負。",
      "correction": "分量為零時另列原點。"
    },
    {
      "mistake": "到 x 軸距離使用 |x|。",
      "why": "誤以為軸名要配同名分量。",
      "correction": "到 x 軸是垂直距離，應看 |y|。"
    },
    {
      "mistake": "距離保留坐標負號。",
      "why": "把方向與長度混為一談。",
      "correction": "距離必取絕對值並寫非負量。"
    },
    {
      "mistake": "由距離反推只列正坐標。",
      "why": "忽略軸兩側具有相同距離。",
      "correction": "先列正負兩種，再使用附加位置條件。"
    },
    {
      "mistake": "直接把格數當成公尺數。",
      "why": "沒有使用題目提供的每格比例。",
      "correction": "坐標距離乘每格實際長度後再標單位。"
    }
  ],
  "selfCheck": [
    "我能說明為何 x 軸上是 y=0 嗎？",
    "求到 x 軸距離時是否使用 |y|？",
    "距離是否保持非負？",
    "我是否把原點與一般軸上點分開？"
  ],
  "summary": [
    "x 軸：y=0；y 軸：x=0。",
    "到 x 軸距離是 |y|。",
    "到 y 軸距離是 |x|。",
    "原點同時在兩軸上。"
  ],
  "connections": {
    "previous": "承接象限判斷中的零分量例外。",
    "next": [
      "下一節用完整文字描述如何從原點描點。",
      "之後水平與垂直距離會把相同坐標分量相減。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s003-v001",
      "u05-s003-v002",
      "u05-s003-v003",
      "u05-s003-v004",
      "u05-s003-v005",
      "u05-s003-v006",
      "u05-s003-v007",
      "u05-s003-v008",
      "u05-s003-v009",
      "u05-s003-v010",
      "u05-s003-v011",
      "u05-s003-v012"
    ],
    "constructedResponseIds": [
      "u05-s003-cr001",
      "u05-s003-cr002"
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
    "reviewNote": "逐項檢查軸名、零分量與距離公式的交叉關係；四例分別驗證 x 軸、到 x 軸、到 y 軸與參數反推，並確認所有距離均為非負。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "7a5c16bee02f56e15d56d7a17a19800b2b6e286d9d96275e98c0906e43c344a9"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s003-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "請判斷 A=(7,0) 所在的坐標軸位置。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "辨認 x 軸正半軸",
    "choices": [
      "y 軸正半軸上",
      "第一象限",
      "x 軸正半軸上",
      "原點"
    ],
    "answerIndex": 2,
    "independentSolution": "A 的 y=0，所以在 x 軸上；x=7>0，因此在 x 軸正半軸。",
    "explanation": "A=(7,0) 的縱坐標為零，所以點位於 x 軸上；橫坐標七為正，表示在原點右側。因此 A 位於 x 軸正半軸，不屬於任何象限，原點也不在本點位置。",
    "steps": [
      "由 y=0 判定 A 在 x 軸上。",
      "由 x=7>0 判定在原點右側。",
      "合併為 x 軸正半軸上。"
    ],
    "optionAnalysis": [
      {
        "choice": "y 軸正半軸上",
        "truth": false,
        "reason": "y 軸應有 x=0。"
      },
      {
        "choice": "第一象限",
        "truth": false,
        "reason": "象限點兩分量皆非 0。"
      },
      {
        "choice": "x 軸正半軸上",
        "truth": true,
        "reason": "y=0 且 x>0。"
      },
      {
        "choice": "原點",
        "truth": false,
        "reason": "原點需 x=y=0。"
      }
    ],
    "misconceptionTarget": "看到橫坐標七為正就判第一象限，忽略縱坐標為零。",
    "prerequisiteCheck": "需知道 x 軸上的點滿足 y=0。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "A 不是原點，且題意無圖形比例問題。",
    "difficultyReason": "直接使用零分量與正負半軸，屬基礎題。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認 x 軸正半軸",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "2d0c9657d184195f50fd5e9a59d4989f3a2092ed923661deb3e149f763dfc0fc"
  },
  {
    "questionId": "u05-s003-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "下列哪個點在 y 軸上？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由零分量辨認 y 軸",
    "choices": [
      "(0,-6)",
      "(-6,0)",
      "(6,6)",
      "(-6,6)"
    ],
    "answerIndex": 0,
    "independentSolution": "y 軸上的點橫坐標必為 0；只有 (0,-6) 符合。",
    "explanation": "點在 y 軸上的判準是橫坐標等於零，縱坐標可以為正、負或零。選項 (0,-6) 的第一分量為零，所以確實在 y 軸負半軸上，其他第一分量非零的點都不符合。",
    "steps": [
      "寫出 y 軸條件 x=0。",
      "逐項查看每個有序數對的第一分量。",
      "選出第一分量為零的 (0,-6)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(0,-6)",
        "truth": true,
        "reason": "x=0，位於 y 軸負半軸。"
      },
      {
        "choice": "(-6,0)",
        "truth": false,
        "reason": "y=0，位於 x 軸。"
      },
      {
        "choice": "(6,6)",
        "truth": false,
        "reason": "在第一象限。"
      },
      {
        "choice": "(-6,6)",
        "truth": false,
        "reason": "在第二象限。"
      }
    ],
    "misconceptionTarget": "把 y 軸條件誤寫成縱坐標為零，與 x 軸判準對調。",
    "prerequisiteCheck": "需分清 x 軸與 y 軸條件。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "候選點均精確給定，只有一點橫坐標為 0。",
    "difficultyReason": "只需一次定義判斷。",
    "literacyContextNecessity": null,
    "authoringIntent": "由零分量辨認 y 軸",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9ef8f657c157008ee6ab9e1267d44cb938818f130738eac64fb5884380d839d5"
  },
  {
    "questionId": "u05-s003-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 P=(-4,3) 到 y 軸的距離是多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "計算點到 y 軸距離",
    "choices": [
      "3",
      "7",
      "1",
      "4"
    ],
    "answerIndex": 3,
    "independentSolution": "到 y 軸看橫坐標的絕對值，|-4|=4。",
    "explanation": "到 y 軸的最短水平距離等於橫坐標的絕對值。P=(-4,3) 的橫坐標為負四，所以距離是 |-4|=4；負號只表示位於 y 軸左側，不會使長度為負。",
    "steps": [
      "辨認到 y 軸距離要看橫坐標。",
      "取橫坐標 -4 的絕對值。",
      "得到距離四單位，並說明距離不為負。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "誤取 |y|，那是到 x 軸距離。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "把兩個絕對值相加。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "把兩坐標相減。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "到 y 軸的水平距離為 |x|=4。"
      }
    ],
    "misconceptionTarget": "誤用縱坐標三，或直接把負四當成負的距離。",
    "prerequisiteCheck": "需理解橫坐標表示左右距離。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "坐標單位相同，距離非負且不需要一般兩點距離公式。",
    "difficultyReason": "直接套用 |x|，屬基礎計算。",
    "literacyContextNecessity": null,
    "authoringIntent": "計算點到 y 軸距離",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d70f1e94e61dc4673d2f8313fd75be16bf06dd67e51950c802df32977324fab3"
  },
  {
    "questionId": "u05-s003-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若 Q=(a,0) 且 Q 在 x 軸負半軸上，則 a 必須滿足哪個條件？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由半軸位置反推參數",
    "choices": [
      "a>0",
      "a<0",
      "a=0",
      "a≠0"
    ],
    "answerIndex": 1,
    "independentSolution": "Q 已因 y=0 在 x 軸上；負半軸要求橫坐標 a<0。",
    "explanation": "Q=(a,0) 的縱坐標為零，已確定在 x 軸上。要位於 x 軸負半軸，橫坐標必須小於零，因此 a<0；若 a=0，Q 會是原點而非負半軸，所以不等號必須嚴格。",
    "steps": [
      "由第二分量零確認 Q 在 x 軸。",
      "把負半軸轉成橫坐標小於零。",
      "得到 a<0，並排除原點 a=0。"
    ],
    "optionAnalysis": [
      {
        "choice": "a>0",
        "truth": false,
        "reason": "會在正半軸。"
      },
      {
        "choice": "a<0",
        "truth": true,
        "reason": "x 軸負半軸的橫坐標為負。"
      },
      {
        "choice": "a=0",
        "truth": false,
        "reason": "會在原點，不屬負半軸。"
      },
      {
        "choice": "a≠0",
        "truth": false,
        "reason": "也包含正半軸，條件過寬。"
      }
    ],
    "misconceptionTarget": "把負半軸條件寫成 a≤0，錯把原點納入。",
    "prerequisiteCheck": "需會解讀軸上點與正負方向。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "負半軸通常不含原點，因此使用嚴格不等式。",
    "difficultyReason": "需要區分負半軸與原點邊界，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "由半軸位置反推參數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "35f6f042af36dd28867b3f39b35bc821882ca74c6e989292c26a5f6d17a5488f"
  },
  {
    "questionId": "u05-s003-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 R=(5,-8) 到 x 軸與 y 軸的距離分別是多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "同時計算到兩軸距離",
    "choices": [
      "5 與 8",
      "13 與 13",
      "8 與 5",
      "3 與 3"
    ],
    "answerIndex": 2,
    "independentSolution": "到 x 軸看 |y|=8；到 y 軸看 |x|=5，依題目順序為 8 與 5。",
    "explanation": "到 x 軸的距離取縱坐標絕對值，所以為 |-8|=8；到 y 軸的距離取橫坐標絕對值，所以為 |5|=5。依題目軸名順序，答案是八與五，兩個距離都必須是非負長度。",
    "steps": [
      "用 |y|=|-8| 求到 x 軸距離八。",
      "用 |x|=|5| 求到 y 軸距離五。",
      "按 x 軸、y 軸的提問順序寫成八與五。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 與 8",
        "truth": false,
        "reason": "把兩個距離順序交換。"
      },
      {
        "choice": "13 與 13",
        "truth": false,
        "reason": "誤把絕對值相加。"
      },
      {
        "choice": "8 與 5",
        "truth": true,
        "reason": "軸名與對應分量正確。"
      },
      {
        "choice": "3 與 3",
        "truth": false,
        "reason": "誤取兩坐標差。"
      }
    ],
    "misconceptionTarget": "把到 x 軸與 y 軸的距離公式對調，或保留負號。",
    "prerequisiteCheck": "需掌握兩個到軸距離公式。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目問『分別』且順序明確為 x 軸再 y 軸。",
    "difficultyReason": "需交叉配對兩個軸與兩個分量，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "同時計算到兩軸距離",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9c1359692ea87fe31afa19dfd8d429cb1abb51342136bb3cadd8b68e20904604"
  },
  {
    "questionId": "u05-s003-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若點 S=(0,b) 到 x 軸的距離為 6，則 b 可能為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由到軸距離反推兩個坐標",
    "choices": [
      "6 或 -6",
      "只有 6",
      "只有 -6",
      "0 或 6"
    ],
    "answerIndex": 0,
    "independentSolution": "到 x 軸距離是 |b|，所以 |b|=6，得到 b=6 或 b=-6。",
    "explanation": "S=(0,b) 到 x 軸的距離等於縱坐標的絕對值，因此 |b|=6。距離六可出現在 x 軸上方或下方，所以 b=6 或 b=-6，兩者都符合；正負只決定所在半軸。",
    "steps": [
      "把到 x 軸距離寫成 |b|。",
      "列出方程式 |b|=6。",
      "取正、負兩種可能，得到 b=6 或 -6。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 或 -6",
        "truth": true,
        "reason": "兩者到 x 軸距離都為 6。"
      },
      {
        "choice": "只有 6",
        "truth": false,
        "reason": "漏掉 y 軸下方位置。"
      },
      {
        "choice": "只有 -6",
        "truth": false,
        "reason": "漏掉 y 軸上方位置。"
      },
      {
        "choice": "0 或 6",
        "truth": false,
        "reason": "b=0 的距離為 0。"
      }
    ],
    "misconceptionTarget": "距離為正就只取 b=6，忽略縱坐標負六也有相同距離。",
    "prerequisiteCheck": "需知道距離非負與絕對值意義。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "距離只給大小，因此上、下兩側均可能。",
    "difficultyReason": "需要解絕對值條件並保留兩解，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "由到軸距離反推兩個坐標",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "076824605bd1d193d8ad7a61b070ced7db9310b9217903d4693bea1320787986"
  },
  {
    "questionId": "u05-s003-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 T=(2m-4,m+1) 在 y 軸上，求 T 到 x 軸的距離。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "參數軸上條件與距離整合",
    "choices": [
      "0",
      "2",
      "5",
      "3"
    ],
    "answerIndex": 3,
    "independentSolution": "在 y 軸上要求 2m-4=0，得 m=2；此時 T=(0,3)，到 x 軸距離為 |3|=3。",
    "explanation": "T 在 y 軸上，所以橫坐標 2m-4 必須等於零，解得 m=2。此時縱坐標 m+1=3，T=(0,3)；到 x 軸的距離為 |3|=3。先用軸條件求參數，再用另一分量求距離，順序不可顛倒。",
    "steps": [
      "依 y 軸條件列出 2m-4=0。",
      "解得 m=2，求出 T=(0,3)。",
      "取縱坐標絕對值，得到到 x 軸距離三。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "把在 y 軸誤認為到 x 軸距離為 0。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "只回報 m，未求距離。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "把兩個表達式錯誤相加。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "參數與距離計算都正確。"
      }
    ],
    "misconceptionTarget": "用縱坐標等於零來求 m，或求出 T 後又取錯分量算距離。",
    "prerequisiteCheck": "需會解一元一次方程式與代入。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "y 軸上的點不必在 x 軸；距離由縱坐標決定。",
    "difficultyReason": "需兩階段：先用軸上條件求 m，再求到另一軸距離。",
    "literacyContextNecessity": null,
    "authoringIntent": "參數軸上條件與距離整合",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d0831f4401e36b086dba91790f19777e8a0cc0bbccc3351344a6ca6b653a0ef8"
  },
  {
    "questionId": "u05-s003-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若 A=(p,q) 到 x 軸距離為 4，到 y 軸距離為 7，且 A 在第二象限，則 A 為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由兩軸距離與象限唯一定位",
    "choices": [
      "(7,4)",
      "(-7,4)",
      "(-4,7)",
      "(-7,-4)"
    ],
    "answerIndex": 1,
    "independentSolution": "到 y 軸距離 7 表示 |p|=7；第二象限使 p<0，所以 p=-7。到 x 軸距離 4 表示 |q|=4；第二象限使 q>0，所以 q=4。",
    "explanation": "到 y 軸距離七表示 |x|=7，到 x 軸距離四表示 |y|=4。第二象限要求 x<0、y>0，因此選取 x=-7、y=4，得到 A=(-7,4)。距離先決定絕對值，象限再唯一決定兩分量符號。",
    "steps": [
      "由到 y 軸距離七列出 x=±7。",
      "由到 x 軸距離四列出 y=±4。",
      "用第二象限符號 (-,+) 篩出 (-7,4)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(7,4)",
        "truth": false,
        "reason": "距離符合但在第一象限。"
      },
      {
        "choice": "(-7,4)",
        "truth": true,
        "reason": "距兩軸與第二象限均符合。"
      },
      {
        "choice": "(-4,7)",
        "truth": false,
        "reason": "交換兩個距離。"
      },
      {
        "choice": "(-7,-4)",
        "truth": false,
        "reason": "在第三象限。"
      }
    ],
    "misconceptionTarget": "把兩個軸距離對應到同名坐標，或未用象限決定正負。",
    "prerequisiteCheck": "需掌握象限與到軸距離。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "距離本有四個符號組合，象限條件將其縮成唯一點。",
    "difficultyReason": "需結合兩個絕對值與象限符號，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由兩軸距離與象限唯一定位",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "52723bc398b88c664b270f4394da58bff35d5c34ce6b8ce1cc986eb67d32e27a"
  },
  {
    "questionId": "u05-s003-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 B=(k,2k-6) 同時在兩條坐標軸上，則 k 為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "檢查原點條件的相容性",
    "choices": [
      "0",
      "3",
      "不存在這樣的 k",
      "6"
    ],
    "answerIndex": 2,
    "independentSolution": "同時在兩軸上表示 B 必須是 (0,0)。需 k=0 且 2k-6=0；前者給 k=0，後者給 k=3，無法同時成立。",
    "explanation": "同時在 x 軸與 y 軸上的點只能是原點，因此需 k=0 且 2k-6=0。第一條給 k=0，第二條給 k=3，沒有同一個 k 能同時成立，所以不存在符合兩條軸條件的參數。",
    "steps": [
      "把同時在兩軸轉成橫、縱坐標皆為零。",
      "由 k=0 與 2k-6=0 分別求得 k=0、k=3。",
      "比較兩條件無共同值，判定不存在。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "此時 B=(0,-6)，只在 y 軸。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "此時 B=(3,0)，只在 x 軸。"
      },
      {
        "choice": "不存在這樣的 k",
        "truth": true,
        "reason": "兩個零分量條件互相矛盾。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "此時 B=(6,6)，在第一象限。"
      }
    ],
    "misconceptionTarget": "分別找到 k=0 或 k=3 就選一個，沒有要求兩條件同時成立。",
    "prerequisiteCheck": "需會把幾何條件轉成兩個方程式。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "不存在也可作為唯一正確答案；四選項逐一可驗。",
    "difficultyReason": "需辨認『同時在兩軸』等同原點並檢查兩式相容性。",
    "literacyContextNecessity": null,
    "authoringIntent": "檢查原點條件的相容性",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "dd07614c70df8436ace7f74ee460fd6e736a63af7bbb7157c5e324b5e6a63e1b"
  },
  {
    "questionId": "u05-s003-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "地下停車場平面以電梯為原點，每格 2 公尺。車位 C 的坐標為 (0,-9)。C 到 x 軸代表的中央通道實際距離是多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "將到軸格數換算實際距離",
    "choices": [
      "18 公尺",
      "9 公尺",
      "11 公尺",
      "0 公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "到 x 軸的格數為 |-9|=9 格，每格 2 公尺，所以實際距離 9×2=18 公尺。",
    "explanation": "C=(0,-9) 到 x 軸的坐標距離為 |-9|=9 格。題目給每格二公尺，所以實際距離為 9×2=18 公尺；負號只表示位於通道下方，不會讓實際距離成為負數。",
    "steps": [
      "取縱坐標絕對值，得到到 x 軸九格。",
      "使用每格二公尺的比例換算。",
      "計算 9×2=18，寫出十八公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "18 公尺",
        "truth": true,
        "reason": "9 格乘 2 公尺正確。"
      },
      {
        "choice": "9 公尺",
        "truth": false,
        "reason": "只報格數，未換算。"
      },
      {
        "choice": "11 公尺",
        "truth": false,
        "reason": "誤把格數與每格長度相加。"
      },
      {
        "choice": "0 公尺",
        "truth": false,
        "reason": "因 x=0 誤以為到 x 軸距離為 0。"
      }
    ],
    "misconceptionTarget": "直接回答九公尺，忘記把坐標格數乘上每格二公尺。",
    "prerequisiteCheck": "需會到 x 軸距離公式。",
    "estimatedTimeSec": 150,
    "unitCheck": "先以格計算，再乘 2 公尺/格；最終單位為公尺。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "x=0 只表示在 y 軸；中央通道是 x 軸，距離由 y 決定。",
    "difficultyReason": "情境中比例單位不可省略，需完成兩步換算。",
    "literacyContextNecessity": "每格 2 公尺決定實際距離；移除停車場比例後只能得到 9 格，不能回答公尺。",
    "authoringIntent": "將到軸格數換算實際距離",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "65c496e2f96a1046f09855a4f588cd3025ca2e8d2a4600fec5884c7ebc06402a"
  },
  {
    "questionId": "u05-s003-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "倉儲機器人位於 (a,0)，表示它正在主通道上。若它離原點 12 公尺且每坐標單位為 1 公尺，可能的位置為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "在主通道上由距離反推位置",
    "choices": [
      "只有 (12,0)",
      "只有 (-12,0)",
      "(0,12) 或 (0,-12)",
      "(12,0) 或 (-12,0)"
    ],
    "answerIndex": 3,
    "independentSolution": "在 x 軸上已知 y=0；離原點 12 公尺表示 |a|=12，所以 a=12 或 -12。",
    "explanation": "機器人在 (a,0)，沿 x 軸離原點十二公尺且每單位一公尺，所以 |a|=12。原點左右兩側距離相同，故 a=12 或 -12，位置為 (12,0) 或 (-12,0)，兩點都在主通道上。",
    "steps": [
      "由 y=0 確認機器人位於 x 軸。",
      "以每單位一公尺列出 |a|=12。",
      "取左右兩種可能，寫出兩個坐標。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有 (12,0)",
        "truth": false,
        "reason": "漏掉負半軸。"
      },
      {
        "choice": "只有 (-12,0)",
        "truth": false,
        "reason": "漏掉正半軸。"
      },
      {
        "choice": "(0,12) 或 (0,-12)",
        "truth": false,
        "reason": "改成 y 軸上的點。"
      },
      {
        "choice": "(12,0) 或 (-12,0)",
        "truth": true,
        "reason": "左右兩側都距原點 12。"
      }
    ],
    "misconceptionTarget": "只取原點右側的正十二，忽略左側負十二距離也相同。",
    "prerequisiteCheck": "需會解軸上距離的絕對值。",
    "estimatedTimeSec": 150,
    "unitCheck": "每單位 1 公尺，因此 12 單位直接對應 12 公尺。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "『離原點 12 公尺』沿 x 軸測量，兩側都符合。",
    "difficultyReason": "需結合情境中的軸上限制與左右兩解。",
    "literacyContextNecessity": "機器人在主通道 y=0 的限制把可能位置縮到兩個；情境中的通道資訊直接參與求解。",
    "authoringIntent": "在主通道上由距離反推位置",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "01c9defb5c5a001943429078acd5977c94c9ddb7a8e0c594cc341248b72cccab"
  },
  {
    "questionId": "u05-s003-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "城市地圖把河道設為 y 軸。某設施到河道 5 公里，且位於河道東側、赤道基準線南側 2 公里。若東、北為正向，設施坐標為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由地理軸距與方位建立坐標",
    "choices": [
      "(-5,-2)",
      "(5,-2)",
      "(2,-5)",
      "(5,2)"
    ],
    "answerIndex": 1,
    "independentSolution": "到 y 軸 5 公里表示 |x|=5；在東側所以 x=5。南側 2 公里表示 y=-2。",
    "explanation": "河道是 y 軸，到河道五公里表示 |x|=5；設施在東側且東為正，所以 x=5。又在基準線南側二公里，北為正，因此 y=-2，坐標為 (5,-2)，方向與距離條件都同時符合。",
    "steps": [
      "由距離 y 軸五公里得到 |x|=5。",
      "用河道東側選取 x=5。",
      "用南側二公里寫 y=-2，組成 (5,-2)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-5,-2)",
        "truth": false,
        "reason": "位於河道西側。"
      },
      {
        "choice": "(5,-2)",
        "truth": true,
        "reason": "東 5、南 2 均符合。"
      },
      {
        "choice": "(2,-5)",
        "truth": false,
        "reason": "交換兩個距離。"
      },
      {
        "choice": "(5,2)",
        "truth": false,
        "reason": "位於北側。"
      }
    ],
    "misconceptionTarget": "把到河道距離當成縱坐標，或把南側二公里寫成正二。",
    "prerequisiteCheck": "需掌握到 y 軸距離與方向。",
    "estimatedTimeSec": 150,
    "unitCheck": "兩分量均以公里為坐標單位，答案保持 (x,y) 順序。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "東北正向已明示；公里距離直接作坐標單位。",
    "difficultyReason": "需把河道、東西與南北三項資訊整合成坐標。",
    "literacyContextNecessity": "河道被建模為 y 軸，『到河道』決定 |x|；東側與南側再決定符號，情境不可刪除。",
    "authoringIntent": "由地理軸距與方位建立坐標",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "a17c54c1db4bd23e8607fc2e0f73c1cf549c6e172c86feb42eaf54bf92e3481d"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s003-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "點 A=(-7,4)。求 A 到 x 軸與 y 軸的距離，並解釋為何兩個答案都不是負數。",
    "requiredWork": [
      "分別使用 |y| 與 |x|。",
      "說明距離非負。"
    ],
    "fullCreditSolution": [
      "A 到 x 軸的最短垂直距離取縱坐標絕對值，所以 |4|=4。",
      "A 到 y 軸的最短水平距離取橫坐標絕對值，所以 |-7|=7。",
      "負七只表示 A 位於 y 軸左側；距離是線段長度，必為零或正數，因此答案為四與七。"
    ],
    "alternativeSolutions": [
      "可描述從 A 垂直走 4 單位到 x 軸、水平走 7 單位到 y 軸。"
    ],
    "reasoningSteps": [
      "辨認到 x 軸距離對應 |y|，計算四。",
      "辨認到 y 軸距離對應 |x|，計算七。",
      "用距離的非負性解釋為何坐標負號不保留。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "距離 4、7 均正確，且說明距離為長度要取絕對值。"
      },
      {
        "score": 2,
        "criteria": "兩距離正確但解釋不足，或交換作答順序但文字軸名清楚。"
      },
      {
        "score": 1,
        "criteria": "只算對一個距離，並呈現使用坐標絕對值的概念。"
      },
      {
        "score": 0,
        "criteria": "寫成 -7 或把兩坐標相加，未理解到軸距離。"
      }
    ],
    "partialCreditRules": [
      "若答案順序交換但各自標明軸名，不扣分。"
    ],
    "followThroughPolicy": "若把某一軸對應的坐標分量交換，後續絕對值計算正確，可給該計算步驟分，但軸名與距離配對分不得給。",
    "unitAndNotationRules": "答案須分別標明「到 x 軸 4 單位」與「到 y 軸 7 單位」；距離不得寫成負數。",
    "answerOnlyPolicy": "只寫 4、7 且軸名配對正確但沒有說明絕對值意義，最高給 2 分。",
    "commonErrors": [
      "把到 x 軸與 y 軸距離對應到同名坐標，兩答案交換。",
      "直接把橫坐標 -7 當成負七單位的距離。",
      "用兩坐標相加或畢氏定理，求成到原點而非到坐標軸。"
    ],
    "independentReview": {
      "derivedResult": "一個軸距算錯不連帶扣另一個；解釋仍可獨立得部分分。",
      "ambiguity": "距離單位若題目未指定，可寫『單位』；不得寫負距離。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 一個軸距算錯不連帶扣另一個；解釋仍可獨立得部分分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8bcf4c88d70cd49ad86b929033277fa66833a28cb581a71ed6be586da6e3abf3"
  },
  {
    "questionId": "u05-s003-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "點 P=(a,b) 到 x 軸距離為 3，到 y 軸距離為 5，且 P 位於第四象限。求 P，並列出若沒有象限條件時原本有哪四種可能。",
    "requiredWork": [
      "由距離寫出 |b|=3、|a|=5。",
      "用第四象限選符號。",
      "列出四種原始組合。"
    ],
    "fullCreditSolution": [
      "到 y 軸距離五給 |a|=5，所以 a=±5；到 x 軸距離三給 |b|=3，所以 b=±3。",
      "若沒有象限條件，四種組合為 (5,3)、(5,-3)、(-5,3)、(-5,-3)。",
      "第四象限要求橫坐標正、縱坐標負，故選取 a=5、b=-3，得到 P=(5,-3)。"
    ],
    "alternativeSolutions": [
      "可先畫正負符號表，再以第四象限 (+,-) 選出答案。"
    ],
    "reasoningSteps": [
      "把兩個到軸距離分別轉成 |a|=5、|b|=3。",
      "列出正負號的四種笛卡兒組合。",
      "利用第四象限 (+,-) 篩選唯一坐標。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "列出四種可能並正確選得 P=(5,-3)。"
      },
      {
        "score": 2,
        "criteria": "最終點正確且有距離與象限理由，但未完整列四種。"
      },
      {
        "score": 1,
        "criteria": "知道 a=±5、b=±3，但象限選符號錯或漏組合。"
      },
      {
        "score": 0,
        "criteria": "把距離 3、5 交換且未使用象限。"
      }
    ],
    "partialCreditRules": [
      "四種可能順序不拘；重複點不算完整列舉。"
    ],
    "followThroughPolicy": "若先列四種可能時漏掉一個，但能依第四象限正負號正確選出 (5,-3)，可保留象限判斷分；若象限符號錯則不給最終點分。",
    "unitAndNotationRules": "點須寫成 P=(5,-3)；四種候選均用有序對表示，先橫坐標後縱坐標。",
    "answerOnlyPolicy": "只寫 P=(5,-3) 而未列出沒有象限限制時的四種可能，最高給 2 分。",
    "commonErrors": [
      "把到 x 軸距離三錯配給 a，導致兩個分量互換。",
      "距離為正就只列正坐標，漏掉沒有象限時的其他三種可能。",
      "把第四象限誤記為 (-,+)，選到第二象限的坐標。"
    ],
    "independentReview": {
      "derivedResult": "若學生交換兩個距離但後續象限選符號一致，可給 1 分，不給最終點分。",
      "ambiguity": "坐標順序為 (到 y 軸所決定的 x, 到 x 軸所決定的 y)。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若學生交換兩個距離但後續象限選符號一致，可給 1 分，不給最終點分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "3984a30e462ef527c000b79c15ea3affb20c6188072ee2383963c6742156c81a"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s003-v001",
    "contentSha256": "2d0c9657d184195f50fd5e9a59d4989f3a2092ed923661deb3e149f763dfc0fc",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "A 的 y=0，所以在 x 軸上；x=7>0，因此在 x 軸正半軸。",
    "derivedAnswer": "x 軸正半軸上",
    "storedAnswer": "x 軸正半軸上",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「x 軸正半軸上」；其餘三項逐項檢查：「y 軸正半軸上」不成立，y 軸應有 x=0。；「第一象限」不成立，象限點兩分量皆非 0。；「原點」不成立，原點需 x=y=0。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標軸上的點」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "A 不是原點，且題意無圖形比例問題。",
      "alternateReading": "常見誤讀是「看到正數 7 就直接判第一象限。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "直接使用零分量與正負半軸，屬基礎題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需知道 x 軸上的點滿足 y=0。",
    "languageCheck": "題幹所求為「辨認 x 軸正半軸」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「請判斷 A=(7,0) 所在的坐標軸位置。」重新依序處理：A 的 y=0，所以在 x 軸上；x=7>0，因此在 x 軸正半軸。 正確選項為「x 軸正半軸上」。三個干擾項均對應不同錯誤：「y 軸正半軸上」不成立，y 軸應有 x=0。；「第一象限」不成立，象限點兩分量皆非 0。；「原點」不成立，原點需 x=y=0。。邊界審查：A 不是原點，且題意無圖形比例問題。 難度理由：直接使用零分量與正負半軸，屬基礎題。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s003-v002",
    "contentSha256": "9ef8f657c157008ee6ab9e1267d44cb938818f130738eac64fb5884380d839d5",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "y 軸上的點橫坐標必為 0；只有 (0,-6) 符合。",
    "derivedAnswer": "(0,-6)",
    "storedAnswer": "(0,-6)",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(0,-6)」；其餘三項逐項檢查：「(-6,0)」不成立，y=0，位於 x 軸。；「(6,6)」不成立，在第一象限。；「(-6,6)」不成立，在第二象限。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標軸上的點」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "候選點均精確給定，只有一點橫坐標為 0。",
      "alternateReading": "常見誤讀是「把『y 軸』誤記成 y=0。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "只需一次定義判斷。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需分清 x 軸與 y 軸條件。",
    "languageCheck": "題幹所求為「由零分量辨認 y 軸」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「下列哪個點在 y 軸上？」重新依序處理：y 軸上的點橫坐標必為 0；只有 (0,-6) 符合。 正確選項為「(0,-6)」。三個干擾項均對應不同錯誤：「(-6,0)」不成立，y=0，位於 x 軸。；「(6,6)」不成立，在第一象限。；「(-6,6)」不成立，在第二象限。。邊界審查：候選點均精確給定，只有一點橫坐標為 0。 難度理由：只需一次定義判斷。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s003-v003",
    "contentSha256": "d70f1e94e61dc4673d2f8313fd75be16bf06dd67e51950c802df32977324fab3",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "到 y 軸看橫坐標的絕對值，|-4|=4。",
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
      "secondCorrectAnswer": "重新計算得到「4」；其餘三項逐項檢查：「3」不成立，誤取 |y|，那是到 x 軸距離。；「7」不成立，把兩個絕對值相加。；「1」不成立，把兩坐標相減。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標軸上的點」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "坐標單位相同，距離非負且不需要一般兩點距離公式。",
      "alternateReading": "常見誤讀是「把到 y 軸距離誤用縱坐標。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "直接套用 |x|，屬基礎計算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解橫坐標表示左右距離。",
    "languageCheck": "題幹所求為「計算點到 y 軸距離」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 P=(-4,3) 到 y 軸的距離是多少？」重新依序處理：到 y 軸看橫坐標的絕對值，|-4|=4。 正確選項為「4」。三個干擾項均對應不同錯誤：「3」不成立，誤取 |y|，那是到 x 軸距離。；「7」不成立，把兩個絕對值相加。；「1」不成立，把兩坐標相減。。邊界審查：坐標單位相同，距離非負且不需要一般兩點距離公式。 難度理由：直接套用 |x|，屬基礎計算。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s003-v004",
    "contentSha256": "35f6f042af36dd28867b3f39b35bc821882ca74c6e989292c26a5f6d17a5488f",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "Q 已因 y=0 在 x 軸上；負半軸要求橫坐標 a<0。",
    "derivedAnswer": "a<0",
    "storedAnswer": "a<0",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「a<0」；其餘三項逐項檢查：「a>0」不成立，會在正半軸。；「a=0」不成立，會在原點，不屬負半軸。；「a≠0」不成立，也包含正半軸，條件過寬。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標軸上的點」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "負半軸通常不含原點，因此使用嚴格不等式。",
      "alternateReading": "常見誤讀是「把原點包含進負半軸，或只寫非零。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需要區分負半軸與原點邊界，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會解讀軸上點與正負方向。",
    "languageCheck": "題幹所求為「由半軸位置反推參數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若 Q=(a,0) 且 Q 在 x 軸負半軸上，則 a 必須滿足哪個條件？」重新依序處理：Q 已因 y=0 在 x 軸上；負半軸要求橫坐標 a<0。 正確選項為「a<0」。三個干擾項均對應不同錯誤：「a>0」不成立，會在正半軸。；「a=0」不成立，會在原點，不屬負半軸。；「a≠0」不成立，也包含正半軸，條件過寬。。邊界審查：負半軸通常不含原點，因此使用嚴格不等式。 難度理由：需要區分負半軸與原點邊界，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s003-v005",
    "contentSha256": "9c1359692ea87fe31afa19dfd8d429cb1abb51342136bb3cadd8b68e20904604",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "到 x 軸看 |y|=8；到 y 軸看 |x|=5，依題目順序為 8 與 5。",
    "derivedAnswer": "8 與 5",
    "storedAnswer": "8 與 5",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「8 與 5」；其餘三項逐項檢查：「5 與 8」不成立，把兩個距離順序交換。；「13 與 13」不成立，誤把絕對值相加。；「3 與 3」不成立，誤取兩坐標差。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標軸上的點」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目問『分別』且順序明確為 x 軸再 y 軸。",
      "alternateReading": "常見誤讀是「知道公式但未依題目順序作答。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需交叉配對兩個軸與兩個分量，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需掌握兩個到軸距離公式。",
    "languageCheck": "題幹所求為「同時計算到兩軸距離」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 R=(5,-8) 到 x 軸與 y 軸的距離分別是多少？」重新依序處理：到 x 軸看 |y|=8；到 y 軸看 |x|=5，依題目順序為 8 與 5。 正確選項為「8 與 5」。三個干擾項均對應不同錯誤：「5 與 8」不成立，把兩個距離順序交換。；「13 與 13」不成立，誤把絕對值相加。；「3 與 3」不成立，誤取兩坐標差。。邊界審查：題目問『分別』且順序明確為 x 軸再 y 軸。 難度理由：需交叉配對兩個軸與兩個分量，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s003-v006",
    "contentSha256": "076824605bd1d193d8ad7a61b070ced7db9310b9217903d4693bea1320787986",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "到 x 軸距離是 |b|，所以 |b|=6，得到 b=6 或 b=-6。",
    "derivedAnswer": "6 或 -6",
    "storedAnswer": "6 或 -6",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「6 或 -6」；其餘三項逐項檢查：「只有 6」不成立，漏掉 y 軸下方位置。；「只有 -6」不成立，漏掉 y 軸上方位置。；「0 或 6」不成立，b=0 的距離為 0。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標軸上的點」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "距離只給大小，因此上、下兩側均可能。",
      "alternateReading": "常見誤讀是「由距離反推位置時只考慮正方向。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需要解絕對值條件並保留兩解，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需知道距離非負與絕對值意義。",
    "languageCheck": "題幹所求為「由到軸距離反推兩個坐標」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若點 S=(0,b) 到 x 軸的距離為 6，則 b 可能為何？」重新依序處理：到 x 軸距離是 |b|，所以 |b|=6，得到 b=6 或 b=-6。 正確選項為「6 或 -6」。三個干擾項均對應不同錯誤：「只有 6」不成立，漏掉 y 軸下方位置。；「只有 -6」不成立，漏掉 y 軸上方位置。；「0 或 6」不成立，b=0 的距離為 0。。邊界審查：距離只給大小，因此上、下兩側均可能。 難度理由：需要解絕對值條件並保留兩解，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s003-v007",
    "contentSha256": "d0831f4401e36b086dba91790f19777e8a0cc0bbccc3351344a6ca6b653a0ef8",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "在 y 軸上要求 2m-4=0，得 m=2；此時 T=(0,3)，到 x 軸距離為 |3|=3。",
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
      "secondCorrectAnswer": "重新計算得到「3」；其餘三項逐項檢查：「0」不成立，把在 y 軸誤認為到 x 軸距離為 0。；「2」不成立，只回報 m，未求距離。；「5」不成立，把兩個表達式錯誤相加。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標軸上的點」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "y 軸上的點不必在 x 軸；距離由縱坐標決定。",
      "alternateReading": "常見誤讀是「求出參數後未繼續求題目真正要求的距離。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需兩階段：先用軸上條件求 m，再求到另一軸距離。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會解一元一次方程式與代入。",
    "languageCheck": "題幹所求為「參數軸上條件與距離整合」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 T=(2m-4,m+1) 在 y 軸上，求 T 到 x 軸的距離。」重新依序處理：在 y 軸上要求 2m-4=0，得 m=2；此時 T=(0,3)，到 x 軸距離為 |3|=3。 正確選項為「3」。三個干擾項均對應不同錯誤：「0」不成立，把在 y 軸誤認為到 x 軸距離為 0。；「2」不成立，只回報 m，未求距離。；「5」不成立，把兩個表達式錯誤相加。。邊界審查：y 軸上的點不必在 x 軸；距離由縱坐標決定。 難度理由：需兩階段：先用軸上條件求 m，再求到另一軸距離。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s003-v008",
    "contentSha256": "52723bc398b88c664b270f4394da58bff35d5c34ce6b8ce1cc986eb67d32e27a",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "到 y 軸距離 7 表示 |p|=7；第二象限使 p<0，所以 p=-7。到 x 軸距離 4 表示 |q|=4；第二象限使 q>0，所以 q=4。",
    "derivedAnswer": "(-7,4)",
    "storedAnswer": "(-7,4)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(-7,4)」；其餘三項逐項檢查：「(7,4)」不成立，距離符合但在第一象限。；「(-4,7)」不成立，交換兩個距離。；「(-7,-4)」不成立，在第三象限。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標軸上的點」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "距離本有四個符號組合，象限條件將其縮成唯一點。",
      "alternateReading": "常見誤讀是「把到 x 軸與到 y 軸的距離分量交換。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需結合兩個絕對值與象限符號，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需掌握象限與到軸距離。",
    "languageCheck": "題幹所求為「由兩軸距離與象限唯一定位」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若 A=(p,q) 到 x 軸距離為 4，到 y 軸距離為 7，且 A 在第二象限，則 A 為何？」重新依序處理：到 y 軸距離 7 表示 |p|=7；第二象限使 p<0，所以 p=-7。到 x 軸距離 4 表示 |q|=4；第二象限使 q>0，所以 q=4。 正確選項為「(-7,4)」。三個干擾項均對應不同錯誤：「(7,4)」不成立，距離符合但在第一象限。；「(-4,7)」不成立，交換兩個距離。；「(-7,-4)」不成立，在第三象限。。邊界審查：距離本有四個符號組合，象限條件將其縮成唯一點。 難度理由：需結合兩個絕對值與象限符號，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s003-v009",
    "contentSha256": "dd07614c70df8436ace7f74ee460fd6e736a63af7bbb7157c5e324b5e6a63e1b",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "同時在兩軸上表示 B 必須是 (0,0)。需 k=0 且 2k-6=0；前者給 k=0，後者給 k=3，無法同時成立。",
    "derivedAnswer": "不存在這樣的 k",
    "storedAnswer": "不存在這樣的 k",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「不存在這樣的 k」；其餘三項逐項檢查：「0」不成立，此時 B=(0,-6)，只在 y 軸。；「3」不成立，此時 B=(3,0)，只在 x 軸。；「6」不成立，此時 B=(6,6)，在第一象限。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標軸上的點」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "不存在也可作為唯一正確答案；四選項逐一可驗。",
      "alternateReading": "常見誤讀是「只檢查一個分量為 0 就宣稱同時在兩軸。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需辨認『同時在兩軸』等同原點並檢查兩式相容性。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會把幾何條件轉成兩個方程式。",
    "languageCheck": "題幹所求為「檢查原點條件的相容性」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 B=(k,2k-6) 同時在兩條坐標軸上，則 k 為何？」重新依序處理：同時在兩軸上表示 B 必須是 (0,0)。需 k=0 且 2k-6=0；前者給 k=0，後者給 k=3，無法同時成立。 正確選項為「不存在這樣的 k」。三個干擾項均對應不同錯誤：「0」不成立，此時 B=(0,-6)，只在 y 軸。；「3」不成立，此時 B=(3,0)，只在 x 軸。；「6」不成立，此時 B=(6,6)，在第一象限。。邊界審查：不存在也可作為唯一正確答案；四選項逐一可驗。 難度理由：需辨認『同時在兩軸』等同原點並檢查兩式相容性。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s003-v010",
    "contentSha256": "65c496e2f96a1046f09855a4f588cd3025ca2e8d2a4600fec5884c7ebc06402a",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "到 x 軸的格數為 |-9|=9 格，每格 2 公尺，所以實際距離 9×2=18 公尺。",
    "derivedAnswer": "18 公尺",
    "storedAnswer": "18 公尺",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「18 公尺」；其餘三項逐項檢查：「9 公尺」不成立，只報格數，未換算。；「11 公尺」不成立，誤把格數與每格長度相加。；「0 公尺」不成立，因 x=0 誤以為到 x 軸距離為 0。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標軸上的點」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "先以格計算，再乘 2 公尺/格；最終單位為公尺。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "x=0 只表示在 y 軸；中央通道是 x 軸，距離由 y 決定。",
      "alternateReading": "常見誤讀是「忽略每格代表的實際長度，或看錯要到哪一軸。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "情境中比例單位不可省略，需完成兩步換算。",
    "literacyContextNecessity": "每格 2 公尺決定實際距離；移除停車場比例後只能得到 9 格，不能回答公尺。",
    "prerequisiteCheck": "需會到 x 軸距離公式。",
    "languageCheck": "題幹所求為「將到軸格數換算實際距離」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「地下停車場平面以電梯為原點，每格 2 公尺。車位 C 的坐標為 (0,-9)。C 到 x 軸代表的中央通道實際距離是多少？」重新依序處理：到 x 軸的格數為 |-9|=9 格，每格 2 公尺，所以實際距離 9×2=18 公尺。 正確選項為「18 公尺」。三個干擾項均對應不同錯誤：「9 公尺」不成立，只報格數，未換算。；「11 公尺」不成立，誤把格數與每格長度相加。；「0 公尺」不成立，因 x=0 誤以為到 x 軸距離為 0。。邊界審查：x=0 只表示在 y 軸；中央通道是 x 軸，距離由 y 決定。 難度理由：情境中比例單位不可省略，需完成兩步換算。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s003-v011",
    "contentSha256": "01c9defb5c5a001943429078acd5977c94c9ddb7a8e0c594cc341248b72cccab",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "在 x 軸上已知 y=0；離原點 12 公尺表示 |a|=12，所以 a=12 或 -12。",
    "derivedAnswer": "(12,0) 或 (-12,0)",
    "storedAnswer": "(12,0) 或 (-12,0)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(12,0) 或 (-12,0)」；其餘三項逐項檢查：「只有 (12,0)」不成立，漏掉負半軸。；「只有 (-12,0)」不成立，漏掉正半軸。；「(0,12) 或 (0,-12)」不成立，改成 y 軸上的點。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標軸上的點」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "每單位 1 公尺，因此 12 單位直接對應 12 公尺。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "『離原點 12 公尺』沿 x 軸測量，兩側都符合。",
      "alternateReading": "常見誤讀是「距離只考慮正方向，或交換通道所對應的軸。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需結合情境中的軸上限制與左右兩解。",
    "literacyContextNecessity": "機器人在主通道 y=0 的限制把可能位置縮到兩個；情境中的通道資訊直接參與求解。",
    "prerequisiteCheck": "需會解軸上距離的絕對值。",
    "languageCheck": "題幹所求為「在主通道上由距離反推位置」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「倉儲機器人位於 (a,0)，表示它正在主通道上。若它離原點 12 公尺且每坐標單位為 1 公尺，可能的位置為何？」重新依序處理：在 x 軸上已知 y=0；離原點 12 公尺表示 |a|=12，所以 a=12 或 -12。 正確選項為「(12,0) 或 (-12,0)」。三個干擾項均對應不同錯誤：「只有 (12,0)」不成立，漏掉負半軸。；「只有 (-12,0)」不成立，漏掉正半軸。；「(0,12) 或 (0,-12)」不成立，改成 y 軸上的點。。邊界審查：『離原點 12 公尺』沿 x 軸測量，兩側都符合。 難度理由：需結合情境中的軸上限制與左右兩解。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s003-v012",
    "contentSha256": "a17c54c1db4bd23e8607fc2e0f73c1cf549c6e172c86feb42eaf54bf92e3481d",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "到 y 軸 5 公里表示 |x|=5；在東側所以 x=5。南側 2 公里表示 y=-2。",
    "derivedAnswer": "(5,-2)",
    "storedAnswer": "(5,-2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(5,-2)」；其餘三項逐項檢查：「(-5,-2)」不成立，位於河道西側。；「(2,-5)」不成立，交換兩個距離。；「(5,2)」不成立，位於北側。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標軸上的點」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "兩分量均以公里為坐標單位，答案保持 (x,y) 順序。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "東北正向已明示；公里距離直接作坐標單位。",
      "alternateReading": "常見誤讀是「把到 y 軸距離寫進 y 分量，或忽略方位符號。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需把河道、東西與南北三項資訊整合成坐標。",
    "literacyContextNecessity": "河道被建模為 y 軸，『到河道』決定 |x|；東側與南側再決定符號，情境不可刪除。",
    "prerequisiteCheck": "需掌握到 y 軸距離與方向。",
    "languageCheck": "題幹所求為「由地理軸距與方位建立坐標」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「城市地圖把河道設為 y 軸。某設施到河道 5 公里，且位於河道東側、赤道基準線南側 2 公里。若東、北為正向，設施坐標為何？」重新依序處理：到 y 軸 5 公里表示 |x|=5；在東側所以 x=5。南側 2 公里表示 y=-2。 正確選項為「(5,-2)」。三個干擾項均對應不同錯誤：「(-5,-2)」不成立，位於河道西側。；「(2,-5)」不成立，交換兩個距離。；「(5,2)」不成立，位於北側。。邊界審查：東北正向已明示；公里距離直接作坐標單位。 難度理由：需把河道、東西與南北三項資訊整合成坐標。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
